
# Managing Content

The zegoda.com website is constructed using ReactJS.  

The `public` directory contains the static files that are served by the web server, like images, fonts, and favicons.  The `public` directory also contains the `index.html` file that is the entry point for the website.

All of the other source code is located in the `src` directory.  The `src/components` directory contains the React components that make up the website.  In general, these components are used to lay out data but do not contain the data itself.

The `src/data` directory contains the data that is displayed on the website.  If there is content on the website to be updated, this is the directory to look in.  The data is stored in JSON format.  The `src/data` folder contains the following JSON files:

File | Description
--- | ---
contact.json | Information shown in the *Contact us* section
menu.json | Menu items shown in the navigation bar
services.json | Information shown in the *What we do* section
socialMedia.json | Social media links shown in the footer
specialties.json | Not currently used on the website
team.json | Information shown in the *Who we are* section


> **Note:** Most items in the JSON files contain an `enabled` property.  This is a useful way to temporarily disable an item without having to delete it from the file.  If the `enabled` property is set to `false`, the item will not be displayed on the website.

## Updating Content

The JSON files can be edited directly from github.  Navigate to the file you want to edit and click the pencil icon in the upper right corner of the file.  Make your changes and then click the *Commit changes* button at the bottom of the page.

When changes are commited to the `master` branch, the website will automatically be updated.  The website will take about 1 minute to reflect the changes.


# References

Below is a list of references used on the website.

Resource | Reference Url
---|---
React Font Awesome | https://fontawesome.com/docs/web/use-with/react
Weather Icons | https://erikflowers.github.io/weather-icons
