import json
import click
import numpy as np
import jenks_natural_breaks

@click.command()
@click.argument('filename', type=click.Path(exists=True))
@click.argument('nr-classes', type=int)
@click.option('--attribute')
def cli(filename, nr_classes, attribute):
    result = {}
    with open(filename, 'r') as myfile:
        geojson = json.loads(myfile.read())
        layername = geojson["name"]
        aantal_list = [ft["properties"]["aantal"] for ft in geojson["features"]]
        np_array = np.array(aantal_list)
        breaks = jenks_natural_breaks.classify(np_array, 5)
        breaks[0] = 0
        result[layername] = {}
        result[layername][attribute] = breaks
    print(json.dumps(result))

if __name__=="__main__":
    cli()
