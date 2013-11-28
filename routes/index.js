
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: '懿心工作室' });
};

exports.mqtt =function(req,res)
  {
  res.render('mqtt',{title : 'mqtt test'});
  }
