/**
 * ClientController
 *
 * @description :: Server-side logic for managing clients
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	findClient: function(req, res) {
        var  user_name = req.param('user_name');
		//console.log(user_name);
		var  pass_word = req.param('pass_word');
		//console.log(pass_word);
        Client.findOne({ user_name: user_name, pass_word: pass_word})
            .exec(function(err, user) {
                if (err) {
                    return res.json({
                        error: err
                    });
                }
                if (user === undefined) {
                    return res.json({
                        notFound: true
                    });
                } else
                    return res.json({
                        notFound: false,
						data: user
                    });
            });
    }
};

