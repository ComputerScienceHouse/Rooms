# Rooms Backend

## Python dependencies
Use ```pip3 install -r requirements.txt``` to install the required python dependencies. A venv is highly recommended.

## Local Development

You'll need a postgres instance to use as a development DB. In order to do this you will want to spin one up locally. One way to do this is through a docker container.
    
    docker run --name packet-postgres -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres

After the container starts up, you should be able to connect with the connection string `postgresql://postgres:mysecretpassword@localhost:5432/postgres`

The first time running after the database is created you will need to run

    flask db init

and then

    flask db upgrade

if you make any changes to the schema you will need to run

    flask db migrate

### Developing on Apple Silicon

At the time of writing this some dependencies don't run natively on Apple Silicon. One way around this is to install the x86_64 version of python 3 and creating a virtual enviorment using that.

One way to do this is through homebrew. This is a guide for how to install both an arm and x86_64 form of Homebrew: https://medium.com/nerd-for-tech/installing-intel-based-packages-using-homebrew-on-the-m1-mac-3f88ede5d1f