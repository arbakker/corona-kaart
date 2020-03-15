import json
import click
import numpy as np
import jenks_natural_breaks
import pandas as pd
import fiona

@click.command()
@click.argument('filename', type=click.Path(exists=True))
@click.argument('nr-classes', type=int)
@click.option('--layer')
@click.option('--attribute')
def cli(filename, nr_classes, layer, attribute):
    target_attribute = attribute
    result = {}
    if layer:
        layers = [layer]
    for lyr in layers:
        # inspired by https://stats.stackexchange.com/a/144075
        result[lyr] = {}
        f_layer = fiona.open(filename, layer=lyr)
        attributes = [key for key in f_layer.meta['schema']['properties'] if f_layer.meta['schema']['properties'][key] == 'int']
        for att in attributes:
            if target_attribute and att != target_attribute:
                continue
            aantal_list = [rec['properties'][att] for rec in f_layer if rec['properties'][att] != 0]
            data = {att: aantal_list}
            df1 = pd.DataFrame(data, columns=[att])
            array = df1[att].to_numpy()
            breaks = jenks_natural_breaks.classify(array, 5)
            breaks[0] = 0
            result[lyr][att] = breaks
    print(json.dumps(result))

if __name__=="__main__":
    cli()
