# Craft.dev

This website is build upon [Craft 3](https://craftcms.com/) using [Brunch](https://brunch.io/) build tools and [Valet](https://laravel.com/docs/5.6/valet) local hosting. We use [Forge](https://forge.laravel.com/) for server management and [Digital Ocean](https://www.digitalocean.com/) for server hosting.


## Local Environment

I recommend using [Laravel Valet](https://laravel.com/docs/5.6/valet) to set up your computer as a local development server. You should use homebrew and composer to install the necessary software. This is not a complicated process, but you should follow the instructions on their website to ensure nothing is incorrect.

Any website directory on your computer can be served through a local web server by using the `valet link app-name` command, then visiting `app-name.test`. Notice how the "test" domain name is not included in the link command.

Download all of the third party files from source control networks by running `npm install && composer install`. This will take a while, but when it is finished Craft and Brunch will have the resources they need to run.

You will need to create a new MySQL database on your computer before installing craft. This is fairly simple to do from the command line. Run `mysql -u root` to open a new mysql shell. Type `create database my-local-database` to build the new db. The response should be "Query OK, 1 row affected (0.00 sec)". Type `quit` and the local backend environment is ready to go.

## Install Craft

Running `./craft setup` from the project directory will start the installation process. Specify local database information, many settings such as db server, port, username, password, table prefix, you should not need to change. You will need to tell the script that you are using a mysql database, and the name of the database.

If Craft can talk to the database, it will ask you if you would like to install the framework. Select yes, it is the same as going to `app-name.test/admin/install` if you would rather fill out the information using a GUI. Fill out this information, keeping site URL `@web` and site language the same.

Visit `my-app.test` in your web browser to make sure that everything is configured properly. You should see the craft introduction screen, and the craft login screen at `my-app.test/admin`.

## Build Process

We are using [Brunch.io](https://brunch.io/) as a build tool over Grunt/Gulp because it creates faster builds and is easier to configure. See `brunch-config.js` for more information regarding the exported css/js files.

Running `brunch watch` from the project directory will start up the build server. This will live reload the browser when there are changes to files during development. Running `brunch build -p` will build the assets for a production server.

## Server Scripts

The `env` folder contains scripts to sync the remove server with your local environment. You will want to rename the `example.env.sh` file to `.env.sh` and change the values to what you used while setting up the environments. After that is completed, use the `./pull_db.sh` script to pull down the database from the server. **This will override the local database. For this reason, all database modifications should be made to the remote server.** View the [Craft Scripts Github Repo](https://github.com/nystudio107/craft-scripts) for more specific information.

## Development Resources

Here is a list of all the plugins and libraries that we typically use on projects.

### Front-end Libraries and Plugins

* [Hamburgers by Jonathan Suh](https://jonsuh.com/hamburgers/)
* [SpinKit by Tobias Ahlin](https://tobiasahlin.com/spinkit/)
* [Pace.js by HubSpot](https://github.hubspot.com/pace/docs/welcome/)
* [Flickity by Metafizzy](https://flickity.metafizzy.co/)
* [Isotope by Metafizzy](https://isotope.metafizzy.co/)
* [Infinite Scroll by Metafizzy](https://infinite-scroll.com/)

## References

There are many links I find myself googling multiple times. I am collecting them here to hopefully save myself some time in the future.

* [PHP DateTime Format Reference](https://secure.php.net/manual/en/function.date.php)
* [Redactor Plugins](https://imperavi.com/redactor/plugins/)
* [Pace Docs](https://github.hubspot.com/pace/)