import numpy as np
import json
import jenks_natural_breaks
import click
import geopandas
import fiona

def goodness_of_variance_fit(array, classes):
    # get the break points
    classes = jenks_natural_breaks.classify(array, classes)

    # do the actual classification
    classified = np.array([classify(i, classes) for i in array])

    # max value of zones
    maxz = max(classified)

    # nested list of zone indices
    zone_indices = [[idx for idx, val in enumerate(classified) if zone + 1 == val] for zone in range(maxz)]

    # sum of squared deviations from array mean
    sdam = np.sum((array - array.mean()) ** 2)

    # sorted polygon stats
    array_sort = [np.array([array[index] for index in zone]) for zone in zone_indices]

    # sum of squared deviations of class means
    sdcm = sum([np.sum((classified - classified.mean()) ** 2) for classified in array_sort])

    # goodness of variance fit
    gvf = (sdam - sdcm) / sdam

    return gvf

def classify(value, breaks):
    for i in range(1, len(breaks)):
        if value < breaks[i]:
            return i
    return len(breaks) - 1

def get_nr_classes(array):
    gvf = 0.0
    nr_classes = 2
    while gvf < .8:
        gvf = goodness_of_variance_fit(array, nr_classes)
        nr_classes += 1
    return nr_classes

def records(filename, layername, cols):
   # the generator
   reader = fiona.open(filename, layer=layername)
   for feat in reader:
          new  = {}
          new['geometry'] = feat['geometry']
          new['properties'] = {}
          for prop in feat['properties']:
              if prop not in cols:
                new['properties'][prop] = feat['properties'][prop]
          yield new

@click.command()
@click.argument('filename', type=click.Path(exists=True))
@click.argument('nr-classes' type=int)
@click.option('--layer')
@click.option('--attribute')
def cli(filename, nr_classes, layer, attribute):
    result = {}


    layers = ['buurten', 'wijken', 'gemeenten']
    if layer: 
        layers = [layer]

    cols_blacklist = ['oppervlakte_totaal_in_ha', 'oppervlakte_land_in_ha', 'oppervlakte_water_in_ha', 'dekkingspercentage','wijknaam', 'wijkcode', 'water', 'meest_voorkomende_postcode', 'gemeentecode', 'gemeentenaam', 'gml_id', 'buurtcode', 'buurtnaam']
    for lyr in layers:

        result[lyr] = {}
        # dataframe = geopandas.read_file(filename, layer=layer)
        dataframe = geopandas.GeoDataFrame.from_features(records(filename, lyr, cols_blacklist))
       
        for att in list(dataframe.columns):
            if att == 'geom' or att == 'geometry':
                continue
            if attribute and att != attribute:
                continue
            array = dataframe[att].to_numpy()
            array_ = np.array([x for x in array if x != -99999999])
            breaks = jenks_natural_breaks.classify(array_, nr_classes)
            result[lyr][att] = breaks
    print(json.dumps(result))

if __name__=="__main__":
    cli()





