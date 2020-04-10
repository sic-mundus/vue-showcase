
<!-- ABOUT THE PROJECT -->
## About The Project

A showcase of the features offered by VueJs combined with Google Firebase & Quasar Framework


### Built With

* [vue](https://vuejs.org/)
* [firebase](https://firebase.google.com/)
* [quasar](https://quasar.dev/)
* Lots of love



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Here's what you need to get going.
* yarn
* quasar CLI
```sh
$ yarn global add @quasar/cli
```

### Installation
 
1. Clone the vue-showcase
```sh
git clone https://github.com/sic-mundus/vue-showcase.git
```
2. Install NPM packages
```sh
yarn
```
3. Create a project in the Google Firebase console and enable the email authentication 
4. Add a Web App and follow the steps to get your configuration file
5. Create a root file **firebase.conf** and paste your config. It should look as follows
```sh
const firebaseConfig = {
  apiKey: "XXX",
  authDomain: "XXX",
  databaseURL: "XXX",
  projectId: "XXX",
  storageBucket: "XXX",
  messagingSenderId: "XXX",
  appId: "XXX",
  measurementId: "XXX"
};

export default firebaseConfig;
```
6. Run
```sh
quasar dev
```


<!-- USAGE EXAMPLES -->
## Usage

This project fully features the firebase email & password authentication,\
allowing users to join and sign in.\
This project uses VueJs **router** to guard the urls,
and redirect to the desired location after a successfull login.

It is also possible to reset a forgotten password
via the firebase built-in engine.

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/sic-mundus/vue-showcase/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Pietro B. - mrlouboltz@gmail.com

Project Link: [https://github.com/sic-mundus/vue-showcase](https://github.com/sic-mundus/vue-showcase)
