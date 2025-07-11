# HIZTESTI

No Flash, No Java, No WebSocket, No Bullshit.

This is a very lightweight speed test implemented in JavaScript, using XMLHttpRequest and Web Workers.

## Try it
[Take a speed test](https://speedtest.zzz.cat)

## Compatibility
All modern browsers are supported: IE11, latest Edge, latest Chrome, latest Firefox, latest Safari.
Works with mobile versions too.

## Features
* Download
* Upload
* Ping
* Jitter
* IP Address, ISP, distance from server (optional)
* Telemetry (optional)
* Results sharing (optional)
* Multiple Points of Test (optional)
* Compatible with PHP frontend predefined endpoints (with `.php` suffixes)
* Supports [Proxy Protocol](https://www.haproxy.org/download/2.3/doc/proxy-protocol.txt) (without TLV support yet)

![Screencast](https://speedtest.zzz.cat/speedtest.webp)

## Server requirements
* Any [Go supported platforms](https://github.com/golang/go/wiki/MinimumRequirements)
* BoltDB, PostgreSQL or MySQL database to store test results (optional)
* A fast! Internet connection

## Installation

### Install using prebuilt binaries

1. Download the appropriate binary file from the [releases](https://github.com/librespeed/speedtest-go/releases/) page.
2. Unzip the archive.
3. Make changes to the configuration.
4. Run the binary.
5. Optional: Setup a systemd service file.

### Use Ansible for automatic installation

You can use an Ansible role for installing speedtest-go easily. You can find the role on the [Ansible galaxy](https://galaxy.ansible.com/flymia/ansible_speedtest_go). There is a [separate repository](https://github.com/flymia/ansible-speedtest_go) for documentation about the Ansible role.
### Compile from source

You need Go 1.16+ to compile the binary. If you have an older version of Go and don't want to install the tarball
manually, you can install newer version of Go into your `GOPATH`:

0. Install Go 1.17

   ```
   $ go get golang.org/dl/go1.17.1
   # Assuming your GOPATH is default (~/go), Go 1.17.1 will be installed in ~/go/bin
   $ ~/go/bin/go1.17.1 version
   go version go1.17.1 linux/amd64
   ```

1. Clone this repository:

    ```
    $ git clone github.com/librespeed/speedtest-go
    ```

2. Build
    ```
    # Change current working directory to the repository
    $ cd speedtest-go
    # Compile
    $ go build -ldflags "-w -s" -trimpath -o speedtest main.go
    ```

3. Copy the `assets` directory, `settings.toml` file along with the compiled `speedtest` binary into a single directory

4. If you have telemetry enabled,
    - For PostgreSQL/MySQL, create database and import the corresponding `.sql` file under `database/{postgresql,mysql}`

        ```
        # assume you have already created a database named `speedtest` under current user
        $ psql speedtest < database/postgresql/telemetry_postgresql.sql
        ```

    - For embedded BoltDB, make sure to define the `database_file` path in `settings.toml`:

        ```
        database_file="speedtest.db"
        ```

5. Put `assets` folder under the same directory as your compiled binary.
    - Make sure the font files and JavaScripts are in the `assets` directory
    - You can have multiple HTML pages under `assets` directory. They can be access directly under the server root
    (e.g. `/example-singleServer-full.html`)
    - It's possible to have a default page mapped to `/`, simply put a file named `index.html` under `assets`

6. Change `settings.toml` according to your environment:

    ```toml
    # bind address, use empty string to bind to all interfaces
    bind_address="127.0.0.1"
    # backend listen port, default is 8989
    listen_port=8989
    # proxy protocol port, use 0 to disable
    proxyprotocol_port=0
    # Server location, use zeroes to fetch from API automatically
    server_lat=0
    server_lng=0
    # ipinfo.io API key, if applicable
    ipinfo_api_key=""
   
    # assets directory path, defaults to `assets` in the same directory
    # if the path cannot be found, embedded default assets will be used
    assets_path="./assets"

    # password for logging into statistics page, change this to enable stats page
    statistics_password="PASSWORD"
    # redact IP addresses
    redact_ip_addresses=false

    # database type for statistics data, currently supports: none, memory, bolt, mysql, postgresql
    # if none is specified, no telemetry/stats will be recorded, and no result PNG will be generated
    database_type="postgresql"
    database_hostname="localhost"
    database_name="speedtest"
    database_username="postgres"
    database_password=""

    # if you use `bolt` as database, set database_file to database file location
    database_file="speedtest.db"

    # TLS and HTTP/2 settings. TLS is required for HTTP/2
    enable_tls=false
    enable_http2=false

    # if you use HTTP/2 or TLS, you need to prepare certificates and private keys
    # tls_cert_file="cert.pem"
    # tls_key_file="privkey.pem"
    ```

## Differences between Go and PHP implementation and caveats

- Since there is no CGo-free SQLite implementation available, I've opted to use [BoltDB](https://github.com/etcd-io/bbolt)
  instead, as an embedded database alternative to SQLite
- Test IDs are generated ULID, there is no option to change them to plain ID
- You can use the same HTML template from the PHP implementation
- Server location can be defined in settings
- There might be a slight delay on program start if your Internet connection is slow. That's because the program will
attempt to fetch your current network's ISP info for distance calculation between your network and the speed test client's.
This action will only be taken once, and cached for later use.