# Elia.kz

Welcome to Elia.kz, your go-to platform for [describe your business/service]. This README provides an overview of the project, how to set it up, and how to contribute.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Elia.kz is designed to [briefly describe the purpose and goals of your project]. Our mission is to [state your mission].

## Features

- Feature 1: [description]
- Feature 2: [description]
- Feature 3: [description]

## Installation

To get started with Elia.kz, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/elia.kz.git
    ```
2. Navigate to the project directory:
    ```bash
    cd elia.kz
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

To start the application, run:
```bash
npm start
```
For detailed usage instructions, refer to the [documentation](link-to-documentation).

## Contributing

We welcome contributions! Please read our [Contributing Guidelines](link-to-contributing-guidelines) to get started.

## License

This project is licensed under the [MIT License](LICENSE).

---

Thank you for using Elia.kz! If you have any questions, feel free to contact us at [contact information].

  {% for product in collections.product %}
                 {% if loop.index <= 8 %}
                    <div class="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                        <div class="product-wrap-2 mb-25">
                            <div class="product-img">
                                <a href="{{product.url}}">
                                    <img class="default-img" src="{{ product.data.default-img}}" alt="">
                                    <img class="hover-img" src="{{ product.data.hover-img}}" alt="">
                                </a>
                                <span class="pink">{{ product.data.condition }}</span>
                                <div class="product-action-2">
                                    <a title="Add To Cart" href="#"><i class="fa fa-shopping-cart"></i></a>
                                    <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa fa-eye"></i></a>
                                    <a title="Compare" href="#"><i class="fa fa-retweet"></i></a>
                                </div>
                            </div>
                            <div class="product-content-2">
                                <div class="title-price-wrap-2">
                                    <h3><a href="product-details.html">{{ product.data.title }}</a></h3>
                                    <div class="price-2">
                                        <span>{{ product.data.newprice }}</span>
                                        <span class="old">{{ product.data.oldprice }}</span>
                                    </div>
                                </div>
                                <div class="pro-wishlist-2">
                                    <a title="Wishlist" href="wishlist.html"><i class="fa fa-heart-o"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                   {% endif %}
                   {% endfor %}