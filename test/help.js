module.exports.getPageSchema = function () {
  return {
    "page": {
      "name": "Car Reviews",
      "description": "A collection of car reviews.",
      "language": "en"
    },
    "settings": {
      "cache": true
    },
    "route": {
      "path": "/car-reviews/:make/:model",
    },
    "contentType": "text/html",
    "template": "car-reviews.dust",
    "datasources": [
      "car-makes"
    ],
    "events": [
      "car-reviews"
    ]
  };
}
