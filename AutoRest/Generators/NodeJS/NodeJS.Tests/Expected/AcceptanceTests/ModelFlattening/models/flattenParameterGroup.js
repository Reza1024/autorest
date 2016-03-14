/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the FlattenParameterGroup class.
 * @constructor
 * Additional parameters for the putSimpleProductWithGrouping operation.
 * @member {string} name Product name with value 'groupproduct'
 * 
 * @member {string} productId Unique identifier representing a specific
 * product for a given latitude & longitude. For example, uberX in San
 * Francisco will have a different product_id than uberX in Los Angeles.
 * 
 * @member {string} [description] Description of product.
 * 
 * @member {string} maxProductDisplayName Display name of product.
 * 
 * @member {string} [odatavalue] URL value.
 * 
 */
function FlattenParameterGroup() {
}

/**
 * Defines the metadata of FlattenParameterGroup
 *
 * @returns {object} metadata of FlattenParameterGroup
 *
 */
FlattenParameterGroup.prototype.mapper = function () {
  return {
    required: false,
    type: {
      name: 'Composite',
      className: 'FlattenParameterGroup',
      modelProperties: {
        name: {
          required: true,
          type: {
            name: 'String'
          }
        },
        productId: {
          required: true,
          type: {
            name: 'String'
          }
        },
        description: {
          required: false,
          type: {
            name: 'String'
          }
        },
        maxProductDisplayName: {
          required: true,
          type: {
            name: 'String'
          }
        },
        odatavalue: {
          required: false,
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = FlattenParameterGroup;