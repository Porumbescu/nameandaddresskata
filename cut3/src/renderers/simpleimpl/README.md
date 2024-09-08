These components are the 'simple' implementation just using raw HTML and CSS.

While they are 'adequate' they are quite ugly

It is expected that we would replace them with the UI framework of choice for the 'white labeled' version of the app.

This can be done very simply using the 'useComponent' hook in the 'src/renderers' folder. At
the moment it is set to use the 'simple' components but it will be easy to change this to use
the correct component based on (say) the url or a configuration setting or whatever...

This work hasn't been done yet under the YAGNI principle


