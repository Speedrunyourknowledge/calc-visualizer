from html_input.graph_tuple import graph_tuple as gt

# The graph_tuple is everything inside the parentheses from Plotly.newPlot() on the frontend
# Use the online json beautifier on the output, 
# then insert it back into the Plotly.newPlot() function on the frontend

# remove unnecessary keys
list_arg = gt[1]
dict_arg= gt[2]

list_arg[0].pop('legendgroup', None)
dict_arg.pop('legend', None)

# remove keys from template object
template = dict_arg['template']

template['data'].clear()
template['data']['bar'] = [{
                            "marker": {
                                "line": {
                                    "color": "#000000",
                                    "width": 0.5
                                },
                                "pattern": {
                                    "fillmode": "overlay",
                                    "size": 10,
                                    "solidity": 0.2
                                }
                            },
                            "type": "bar"
                          }]

layout = template['layout']

layout.pop('polar', None)
layout.pop('ternary', None)
layout.pop('coloraxis', None)
layout.pop('colorscale', None)

layout['xaxis'].pop('ticks', None)
layout['yaxis'].pop('ticks', None)

layout['scene']['xaxis'].pop('ticks', None)
layout['scene']['yaxis'].pop('ticks', None)
layout['scene'].pop('zaxis', None)

layout.pop('annotationdefaults', None)

# change text to valid javascript syntax
str_gt = str(gt).replace('None', 'null') \
                .replace('True', 'true') \
                .replace('False', 'false') \
                .replace('true Area', 'True Area')

# write to file
f = open("./html_output/filtered.txt", "w")
f.write(str_gt)
f.close()

