
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


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

This project fully features the firebase email & password autnetication,
allowing users to join and sign in.
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

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=flat-square
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=flat-square
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=flat-square
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=flat-square
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=flat-square
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
