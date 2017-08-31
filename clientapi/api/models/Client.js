/**
 * Client.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

		user_name:{
			type:"string",
			required:true,
			unique:true,
			minLength: 2
		},
		pass_word:{
			type:"string",
			required:true,
			minLength: 6
		},
		key:{
			type:"string",
			required:true,
			unique:true,
		},
		token:{
			type:"string",
			required:true,
			unique:true,
		}
  }
};

