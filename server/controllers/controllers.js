const users = {
    "toby@toby.com":"password",
    "britta@britta.com":"password"
}

var messages = [{user: 'abc@abc.com', message: "HElloooooo", is_spam: false}, 
{user: 'britta@britta.com', message: "supppppp", is_spam: true},
{user: 'toby@toby.com', message: "hi there", is_spam: true},
{user: 'toby@toby.com', message: "hello hello", is_spam: false}
]

module.exports = {
    getAllMessages: function(req, res) {
        res.json({message: "success", messages})
    },

    login: function (req,res){
        if (!req.body.email in users){
            res.json({message: "fail", error:"That user does not exist"})
        } else {
            if (users[req.body.email] == req.body.password){
                res.json({message: "success"})
            } else {
                res.json({message: "fail", error:"That email and password does not match our records"})
            }
        }
    }, 

    register: function (req,res){
        if (req.body.email in users){
            res.json({message: "fail", error:"That user already exists"})
        } else {
            users[req.body.email] = req.body.password
            res.json({message: "success"})
        }
    }, 

    post: function (req, res){
        messages.push({user: req.body.logged_user_email, message: req.body.message, is_spam: false})
        res.json({message: "success", messages})
    },

    report: function (req,res){
        messages[req.params.index]['is_spam'] = true;
        res.json({message: "success", messages})
    }, 

    delete: function(req, res) {
        messages = messages.filter(function(val, idx){
            if (idx != req.params.index) return val
        })  
        res.json({message: "success", messages})
    }
};