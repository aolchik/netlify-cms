"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  properties: {
    collection: {
      type: 'string'
    },
    value_field: {
      type: 'string'
    },
    search_fields: {
      type: 'array',
      minItems: 1,
      items: {
        type: 'string'
      }
    },
    file: {
      type: 'string'
    },
    multiple: {
      type: 'boolean'
    },
    min: {
      type: 'integer'
    },
    max: {
      type: 'integer'
    },
    display_fields: {
      type: 'array',
      minItems: 1,
      items: {
        type: 'string'
      }
    },
    options_length: {
      type: 'integer'
    }
  },
  oneOf: [{
    required: ['collection', 'value_field', 'search_fields']
  }, {
    required: ['collection', 'valueField', 'searchFields']
  }]
};
exports.default = _default;