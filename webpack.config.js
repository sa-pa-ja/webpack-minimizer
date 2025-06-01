const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const { type } = require("os");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: path.resolve(__dirname, "src/js", "index.js"),
    contact: path.resolve(__dirname, "src/js/contacts", "contacts.js"),
    destinations: path.resolve(
      __dirname,
      "src/js/destinations",
      "destinations.js"
    ),
    experiences: path.resolve(
      __dirname,
      "src/js/experiences",
      "experiences.js"
    ),
    reservations: path.resolve(
      __dirname,
      "src/js/reservations",
      "reservations.js"
    ),
    "tours-and-packages": path.resolve(
      __dirname,
      "src/js/tours-and-packages",
      "tours-and-packages.js"
    ),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    // filename: "[name][contenthash].js",
    filename: (pathData) => {
      if (pathData.chunk.name === "contact")
        return "assets/js/contacts/[name][contenthash].js";
      if (pathData.chunk.name === "destinations")
        return "assets/js/destinations/[name][contenthash].js";
      if (pathData.chunk.name === "experiences")
        return "assets/js/experiences/[name][contenthash].js";
      if (pathData.chunk.name === "reservations")
        return "assets/js/reservations/[name][contenthash].js";
      if (pathData.chunk.name === "tours-and-packages")
        return "assets/js/tours-and-packages/[name][contenthash].js";
      return "assets/js/[name][contenthash].js";
    },
    chunkFilename: "assets/js/[name][contenthash].js",
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.svg$/,
        type: "asset/resource", // or use 'file-loader' for older webpack
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },

      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },

      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[hash][ext][query]",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // filename: "[name][contenthash].css",
      filename: (pathData) => {
        if (pathData.chunk.name === "contact")
          return "assets/css/contacts/[name][contenthash].css";
        if (pathData.chunk.name === "destinations")
          return "assets/css/destinations/[name][contenthash].css";
        if (pathData.chunk.name === "experiences")
          return "assets/css/experiences/[name][contenthash].css";
        if (pathData.chunk.name === "reservations")
          return "assets/css/reservations/[name][contenthash].css";
        if (pathData.chunk.name === "tours-and-packages")
          return "assets/css/tours-and-packages/[name][contenthash].css";
        return "assets/css/[name][contenthash].css";
      },
    }),
    new HtmlWebpackPlugin({
      title: "Horseback Trail Cusco – Unforgettable Andes Journey",
      // This is the template file
      template: path.resolve(__dirname, "src/templates", "template.html"),
      filename: "index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
      },
      templateParameters: {
        description:
          "Experience the breathtaking beauty of the Andes on horseback. Join us for an unforgettable journey through the stunning landscapes of Cusco, Peru.",
        keywords:
          "Horseback Trail, Cusco, Andes, Peru, Adventure, Nature, Travel",
        // og_image: "https://example.com/assets/images/og-image.jpg",
        og_title: "Horseback Trail Cusco – Unforgettable Andes Journey",
        og_description:
          "Experience the breathtaking beauty of the Andes on horseback. Join us for an unforgettable journey through the stunning landscapes of Cusco, Peru.",
        og_url: "https://goperunow.com/",
        og_image: "https://goperunow.com/assets/images/og-image.jpg", // Add a real image for social sharing
        canonical: "https://goperunow.com/contacts/", // Add canonical for SEO
        twitter_card: "summary_large_image", // For Twitter SEO
        twitter_site: "@goperunow", // Your Twitter handle if available
        // Add more structured data if needed
      },
    }),

    // contact page
    new HtmlWebpackPlugin({
      title: "Go Peru Now - Peru Travel Agency",
      template: path.resolve(
        __dirname,
        "src/templates/contacts",
        "contacts.html"
      ),
      filename: "contacts/contacts.html",
      chunks: ["main", "contact"],
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
      },
      templateParameters: {
        description:
          "Contact Go Peru Now for your travel needs. Our team is ready to assist you with your Peru adventure.",
        keywords: "Contact, Go Peru Now, Travel Agency, Peru",
        og_url: "https://goperunow.com/contacts",
        og_title: "Contact Go Peru Now - Your Travel Partner in Peru",
        og_description:
          "Get in touch with Go Peru Now for all your travel inquiries. We're here to help you plan your perfect trip to Peru.",
        og_url: "https://goperunow.com/contacts",
        og_image: "https://goperunow.com/assets/images/og-image.jpg", // Add a real image for social sharing
        canonical: "https://goperunow.com/contacts/", // Add canonical for SEO
        twitter_card: "summary_large_image", // For Twitter SEO
        twitter_site: "@goperunow", // Your Twitter handle if available
        // Add more structured data if needed
      },
    }),
    // destinations page
    new HtmlWebpackPlugin({
      title: "Destinations - Explore Peru with Go Peru Now",
      template: path.resolve(
        __dirname,
        "src/templates/destinations/andean/arequipa",
        "arequipa.html"
      ),
      filename: "destinations/andean/arequipa/arequipa.html",
      chunks: ["main", "destinations"],
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
      },
      templateParameters: {
        description:
          "Discover the best destinations in Peru with Go Peru Now. From Machu Picchu to the Amazon, explore the wonders of Peru.",
        keywords:
          "Destinations, Peru, Travel, Machu Picchu, Amazon, Go Peru Now",
        // og_url: "https://example.com/destinations",
        og_title: "Explore Peru's Best Destinations with Go Peru Now",
        og_description:
          "Join us on a journey through Peru's most breathtaking destinations. Experience the culture, history, and natural beauty of this incredible country.",
        og_url: "https://goperunow.com/destinations/andean/arequipa/",
        og_image: "https://goperunow.com/assets/images/og-image.jpg", // Add a real image for social sharing
        canonical: "https://goperunow.com/contacts/", // Add canonical for SEO
        twitter_card: "summary_large_image", // For Twitter SEO
        twitter_site: "@goperunow", // Your Twitter handle if available
        // Add more structured data if needed
      },
    }),
    // destinations page andean-cusco
    new HtmlWebpackPlugin({
      title: "Cusco - Heart of the Andes",
      template: path.resolve(
        __dirname,
        "src/templates/destinations/andean/cusco",
        "cusco.html"
      ),
      filename: "destinations/andean/cusco/cusco.html",
      chunks: ["main", "destinations"],
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
      },
      templateParameters: {
        description:
          "Explore Cusco, the historic capital of the Inca Empire. Discover its rich culture, stunning architecture, and vibrant markets.",
        keywords: "Cusco, Peru, Inca Empire, Culture, Travel",
        // og_url: "https://example.com/destinations/andean/cusco",
        og_title: "Cusco - Heart of the Andes",
        og_description:
          "Experience the magic of Cusco, where history meets modernity. Join us for an unforgettable journey through this iconic city.",
        og_url: "https://goperunow.com/destinations/andean/cusco",
        og_image: "https://goperunow.com/assets/images/og-image.jpg", // Add a real image for social sharing
        canonical: "https://goperunow.com/contacts/", // Add canonical for SEO
        twitter_card: "summary_large_image", // For Twitter SEO
        twitter_site: "@goperunow", // Your Twitter handle if available
        // Add more structured data if needed
      },
    }),
    // experiences page andean-puno
    new HtmlWebpackPlugin({
      title: "Puno - Gateway to Lake Titicaca",
      template: path.resolve(
        __dirname,
        "src/templates/destinations/andean/puno",
        "puno.html"
      ),
      filename: "destinations/andean/puno/puno.html",
      chunks: ["main", "experiences"],
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
      },
      templateParameters: {
        description:
          "Discover Puno, the cultural capital of Peru. Explore the floating islands of Lake Titicaca and immerse yourself in the local traditions.",
        keywords: "Puno, Lake Titicaca, Culture, Travel, Peru",
        og_url: "https://goperunow.com/destinations/andean/puno",
        og_title: "Puno - Gateway to Lake Titicaca",
        og_description:
          "Join us in Puno for an unforgettable experience at Lake Titicaca. Discover the unique culture and breathtaking landscapes of this incredible region.",
        og_image: "https://goperunow.com/assets/images/og-image.jpg", // Add a real image for social sharing
        canonical: "https://goperunow.com/contacts/", // Add canonical for SEO
        twitter_card: "summary_large_image", // For Twitter SEO
        twitter_site: "@goperunow", // Your Twitter handle if available
        // Add more structured data if needed
      },
    }),
    // destinations page coast-lima
    new HtmlWebpackPlugin({
      title: "Lima - Culinary Capital of the World",
      template: path.resolve(
        __dirname,
        "src/templates/destinations/coast/lima",
        "lima.html"
      ),
      filename: "destinations/coast/lima/lima.html",
      chunks: ["main", "destinations"],
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
      },
      templateParameters: {
        description:
          "Explore Lima, the culinary capital of the world. Experience its vibrant food scene, rich history, and stunning coastal views.",
        keywords: "Lima, Peru, Culinary Capital, Food, Travel, Coast, Culture",
        og_url: "https://goperunow.com/destinations/coast/lima/",
        og_title: "Lima - Culinary Capital of the World",
        og_description:
          "Join us in Lima for a culinary adventure like no other. Discover the flavors of Peru and explore its rich cultural heritage.",
        og_image: "https://goperunow.com/assets/images/og-image.jpg", // Add a real image for social sharing
        canonical: "https://goperunow.com/contacts/", // Add canonical for SEO
        twitter_card: "summary_large_image", // For Twitter SEO
        twitter_site: "@goperunow", // Your Twitter handle if available
        // Add more structured data if needed
      },
    }),
    // experiences page coast-nazca
    new HtmlWebpackPlugin({
      title: "Nazca - Mysteries of the Nazca Lines",
      template: path.resolve(
        __dirname,
        "src/templates/destinations/coast/nazca-paracas",
        "nazca-and-paracas.html"
      ),
      filename: "destinations/coast/nazca-paracas/nazca-and-paracas.html",
      chunks: ["main", "experiences"],
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
      },
      templateParameters: {
        description:
          "Discover the mysteries of the Nazca Lines. Explore the ancient geoglyphs and learn about their fascinating history.",
        keywords: "Nazca, Peru, Nazca Lines, Culture, Travel",
        og_url: "https://goperunow.com/experiences/coast/nazca-paracas",
        og_title: "Nazca - Mysteries of the Nazca Lines",
        og_description:
          "Join us in Nazca to uncover the secrets of the Nazca Lines. Experience the wonder of these ancient geoglyphs and their cultural significance.",
        og_image: "https://goperunow.com/assets/images/og-image.jpg", // Add a real image for social sharing
        canonical: "https://goperunow.com/contacts/", // Add canonical for SEO
        twitter_card: "summary_large_image", // For Twitter SEO
        twitter_site: "@goperunow", // Your Twitter handle if available
        // Add more structured data if needed
      },
    }),
    // destinations jungle-amazon
    new HtmlWebpackPlugin({
      title: "Amazonas - Wonders of the Rainforest",
      template: path.resolve(
        __dirname,
        "src/templates/destinations/jungle/amazon",
        "amazon.html"
      ),
      filename: "destinations/jungle/amazon/amazon.html",
      chunks: ["main", "experiences"],
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
      },
      templateParameters: {
        description:
          "Explore the breathtaking landscapes of the Amazonas region. Discover its rich biodiversity, indigenous cultures, and fascinating history.",
        keywords: "Amazonas, Peru, Rainforest, Nature, Culture, Travel",
        og_url: "https://goperunow.com/experiences/jungle/amazon",
        og_title: "Amazonas - Wonders of the Rainforest",
        og_description:
          "Embark on an unforgettable journey through the Amazonas. Experience the beauty of the rainforest, its wildlife, and vibrant cultural heritage.",
        og_image: "https://goperunow.com/assets/images/og-image.jpg", // Add a real image for social sharing
        canonical: "https://goperunow.com/contacts/", // Add canonical for SEO
        twitter_card: "summary_large_image", // For Twitter SEO
        twitter_site: "@goperunow", // Your Twitter handle if available
        // Add more structured data if needed
      },
    }),
    // destination jungle mother-of-god
    new HtmlWebpackPlugin({
      title: "Madre de Dios - Gateway to the Amazon",
      template: path.resolve(
        __dirname,
        "src/templates/destinations/jungle/mother-of-god",
        "mother-of-god.html"
      ),
      filename: "destinations/jungle/mother-of-god/mother-of-god.html",
      chunks: ["main", "experiences"],
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
      },
      templateParameters: {
        description:
          "Experience the wonders of Madre de Dios, the heart of the Peruvian Amazon. Discover lush rainforests, exotic wildlife, and indigenous cultures.",
        keywords:
          "Madre de Dios, Peru, Amazon Rainforest, Nature, Culture, Travel",
        og_url: "https://goperunow.com/experiences/jungle/mother-of-god",
        og_title: "Madre de Dios - Gateway to the Amazon",
        og_description:
          "Embark on an unforgettable journey through Madre de Dios. Explore its stunning landscapes, rich biodiversity, and vibrant traditions.",
        og_image: "https://goperunow.com/assets/images/og-image.jpg", // Add a real image for social sharing
        canonical: "https://goperunow.com/contacts/", // Add canonical for SEO
        twitter_card: "summary_large_image", // For Twitter SEO
        twitter_site: "@goperunow", // Your Twitter handle if available
        // Add more structured data if needed
      },
    }),
    // experiences adventures hiking
    new HtmlWebpackPlugin({
      title: "Go Peru Now - Unforgettable Treks in Peru",
      template: path.resolve(
        __dirname,
        "src/templates/experiences/adventure/hiking",
        "hiking.html"
      ),
      filename: "experiences/adventure/hiking/hiking.html",
      chunks: ["main", "experiences"],
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
      },
      templateParameters: {
        description:
          "Embark on breathtaking treks across Peru with Go Peru Now. Discover stunning landscapes, ancient trails, and unforgettable adventures.",
        keywords:
          "trekking, Peru, Go Peru Now, adventure travel, hiking, nature",
        og_url: "https://goperunow.com/experiences/hiking/",
        og_title: "Go Peru Now - Unforgettable Treks in Peru",
        og_description:
          "Join Go Peru Now for exhilarating treks through Peru’s most iconic trails. Explore breathtaking scenery and rich cultural heritage on foot.",
        og_image: "https://goperunow.com/assets/images/og-image.jpg", // Add a real image for social sharing
        canonical: "https://goperunow.com/contacts/", // Add canonical for SEO
        twitter_card: "summary_large_image", // For Twitter SEO
        twitter_site: "@goperunow", // Your Twitter handle if available
        // Add more structured data if needed
      },
    }),
    // experiences horseback-adventure
    new HtmlWebpackPlugin({
      title: "Go Peru Now - Horseback Riding Adventures in Peru",
      template: path.resolve(
        __dirname,
        "src/templates/experiences/adventure/horsesback-adventure",
        "horsesback-adventure.html"
      ),
      filename:
        "experiences/adventure/horsesback-adventure/horsesback-adventure.html",
      chunks: ["main", "experiences"],
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
      },
      templateParameters: {
        description:
          "Experience the thrill of horseback riding through Peru’s stunning landscapes with Go Peru Now. Discover ancient trails, breathtaking views, and a deep connection with nature.",
        keywords:
          "horseback riding, Peru, adventure travel, Go Peru Now, equestrian tours, nature",
        og_url:
          "https://goperunow.com/experiences/adventure/horseback-adventure",
        og_title: "Go Peru Now - Horseback Riding Adventures in Peru",
        og_description:
          "Embark on an unforgettable horseback adventure with Go Peru Now. Ride through Peru’s scenic landscapes and explore its rich cultural heritage on horseback.",
        og_image: "https://goperunow.com/assets/images/og-image.jpg", // Add a real image for social sharing
        canonical: "https://goperunow.com/contacts/", // Add canonical for SEO
        twitter_card: "summary_large_image", // For Twitter SEO
        twitter_site: "@goperunow", // Your Twitter handle if available
        // Add more structured data if needed
      },
    }),
    // adventures page culture-and-traditions
    new HtmlWebpackPlugin({
      title: "Go Peru Now - Sacred Pachamama Ceremony",
      template: path.resolve(
        __dirname,
        "src/templates/experiences/culture-and-traditions/mother-earth",
        "ceremony-to-pachamama.html"
      ),
      filename: "experiences/culture-and-traditions/ceremony/pachamama.html", // <-- clean URL
      chunks: ["main", "experiences"],
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
      },
      templateParameters: {
        description:
          "Connect with ancient traditions in the sacred Pachamama Ceremony with Go Peru Now. Honor Mother Earth through rituals led by Andean shamans.",
        keywords:
          "Pachamama, Peru, Mother Earth, Andean ceremony, Go Peru Now, cultural experience, ancestral rituals",
        og_url:
          "https://goperunow.com/experiences/culture-and-traditions/ceremony/",
        og_title: "Go Peru Now - Sacred Pachamama Ceremony",
        og_description:
          "Experience the spiritual essence of Peru with Go Peru Now. Join us in a traditional Pachamama ceremony, honoring nature and Andean heritage.",
        og_image: "https://goperunow.com/assets/images/og-image.jpg", // Add a real image for social sharing
        canonical: "https://goperunow.com/contacts/", // Add canonical for SEO
        twitter_card: "summary_large_image", // For Twitter SEO
        twitter_site: "@goperunow", // Your Twitter handle if available
        // Add more structured data if needed
      },
    }),
    // experiences culture and traditions and gastronomy
    new HtmlWebpackPlugin({
      title: "Go Peru Now - Authentic Peruvian Gastronomy",
      template: path.resolve(
        __dirname,
        "src/templates/experiences/culture-and-traditions/gastronomy",
        "gastronomy.html"
      ),
      filename: "experiences/culture-and-traditions/gastronomy/gastronomy.html",
      chunks: ["main", "experiences"],
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
      },
      templateParameters: {
        description:
          "Indulge in Peru’s rich culinary traditions with Go Peru Now. Experience authentic flavors, local ingredients, and world-renowned dishes.",
        keywords:
          "Peruvian cuisine, Peru, food experience, Go Peru Now, gastronomy, traditional dishes",
        og_url: "https://goperunow.com/culture-and-traditions/gastronomy/",
        og_title: "Go Peru Now - Authentic Peruvian Gastronomy",
        og_description:
          "Join Go Peru Now for an unforgettable culinary journey through Peru. Savor traditional dishes, fresh ingredients, and the vibrant flavors of Peruvian cuisine.",
        og_image: "https://goperunow.com/assets/images/og-image.jpg", // Add a real image for social sharing
        canonical: "https://goperunow.com/contacts/", // Add canonical for SEO
        twitter_card: "summary_large_image", // For Twitter SEO
        twitter_site: "@goperunow", // Your Twitter handle if available
        // Add more structured data if needed
      },
    }),
    //experiences ecotourism
    new HtmlWebpackPlugin({
      title: "Go Peru Now - Ecotourism and Wildlife Adventures in Peru",
      template: path.resolve(
        __dirname,
        "src/templates/experiences/ecotourism/flora-and-fauna",
        "flora-and-fauna.html"
      ),
      filename: "experiences/ecotourism/flora-and-fauna/flora-and-fauna.html",
      chunks: ["main", "experiences"],
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
      },
      templateParameters: {
        description:
          "Explore Peru’s breathtaking biodiversity with Go Peru Now. Immerse yourself in stunning landscapes, exotic wildlife, and sustainable ecotourism experiences.",
        keywords:
          "ecotourism, Peru, wildlife, nature, flora, fauna, sustainable travel, Go Peru Now",
        og_url: "https://goperunow.com/experiences/ecotourism/flora-and-fauna",
        og_title: "Go Peru Now - Ecotourism and Wildlife Adventures in Peru",
        og_description:
          "Discover Peru’s extraordinary wildlife and lush landscapes with Go Peru Now. Experience sustainable tourism while exploring nature’s wonders.",
        og_image: "https://goperunow.com/assets/images/og-image.jpg", // Add a real image for social sharing
        canonical: "https://goperunow.com/contacts/", // Add canonical for SEO
        twitter_card: "summary_large_image", // For Twitter SEO
        twitter_site: "@goperunow", // Your Twitter handle if available
        // Add more structured data if needed
      },
    }),
    // experiences ecotourism national parks
    new HtmlWebpackPlugin({
      title: "Go Peru Now - National Reserves of Peru",
      template: path.resolve(
        __dirname,
        "src/templates/experiences/ecotourism/national-reserves",
        "national-reserves.html"
      ),
      filename:
        "experiences/ecotourism/national-reserves/national-reserves.html",
      chunks: ["main", "experiences"],
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
      },
      templateParameters: {
        description:
          "Explore Peru’s National Reserves with Go Peru Now. Discover protected ecosystems, diverse wildlife, and pristine landscapes in sustainable travel experiences.",
        keywords:
          "National Reserves, Peru, conservation, wildlife, nature, Go Peru Now, eco-travel",
        og_url:
          "https://goperunow.com/experiences/ecotourism/national-reserves/",
        og_title: "Go Peru Now - National Reserves of Peru",
        og_description:
          "Journey through Peru’s stunning National Reserves with Go Peru Now. Experience biodiversity, breathtaking scenery, and efforts in conservation.",
        og_image: "https://goperunow.com/assets/images/og-image.jpg", // Add a real image for social sharing
        canonical: "https://goperunow.com/contacts/", // Add canonical for SEO
        twitter_card: "summary_large_image", // For Twitter SEO
        twitter_site: "@goperunow", // Your Twitter handle if available
        // Add more structured data if needed
      },
    }),
    // reservations page
    new HtmlWebpackPlugin({
      title: "Go Peru Now - Book Your Peruvian Adventure",
      template: path.resolve(
        __dirname,
        "src/templates/reservations",
        "reservations.html"
      ),
      filename: "reservations/reservations.html",
      chunks: ["main", "experiences"],
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
      },
      templateParameters: {
        description:
          "Easily book your Peruvian adventure with Go Peru Now. Secure your spot for cultural experiences, trekking, gastronomy, and more.",
        keywords:
          "Peru travel, reservations, Go Peru Now, adventure booking, cultural experiences, trekking, gastronomy",
        og_url: "https://goperunow.com/reservations/",
        og_title: "Go Peru Now - Book Your Peruvian Adventure",
        og_description:
          "Plan your perfect trip to Peru with Go Peru Now. Book unforgettable experiences and reserve your next adventure effortlessly.",
        og_image: "https://goperunow.com/assets/images/og-image.jpg", // Add a real image for social sharing
        canonical: "https://goperunow.com/contacts/", // Add canonical for SEO
        twitter_card: "summary_large_image", // For Twitter SEO
        twitter_site: "@goperunow", // Your Twitter handle if available
        // Add more structured data if needed
      },
    }),
    // tours and packages page
    new HtmlWebpackPlugin({
      title: "Go Peru Now - Best Tours & Travel Packages in Peru",
      template: path.resolve(
        __dirname,
        "src/templates/tours-and-packages",
        "tours-and-packages.html"
      ),
      filename: "tours-and-packages/tours-and-packages.html",
      chunks: ["main", "experiences"],
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
      },
      templateParameters: {
        description:
          "Discover the best tours & travel packages in Peru with Go Peru Now. Explore breathtaking landscapes, cultural experiences, and unforgettable adventures.",
        keywords:
          "Peru tours, travel packages, Go Peru Now, adventure travel, cultural experiences, trekking, ecotourism",
        og_url: "https://goperunow.com/tours-and-packages/",
        og_title: "Go Peru Now - Best Tours & Travel Packages in Peru",
        og_description:
          "Plan your perfect Peruvian adventure with Go Peru Now. Choose from a variety of curated tours and travel packages for an unforgettable experience.",
        og_image: "https://goperunow.com/assets/images/og-image.jpg", // Add a real image for social sharing
        canonical: "https://goperunow.com/contacts/", // Add canonical for SEO
        twitter_card: "summary_large_image", // For Twitter SEO
        twitter_site: "@goperunow", // Your Twitter handle if available
        // Add more structured data if needed
      },
    }),
    // new BundleAnalyzerPlugin(),
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminGenerate,
        options: {
          plugins: [
            ["mozjpeg", { quality: 70 }],
            ["pngquant", { quality: [0.65, 0.9] }],
          ],
        },
      },
    }),
  ],
};
