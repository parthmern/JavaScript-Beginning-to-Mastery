// Type of attaching JS file with html
// 1) in <header> -> <script src="file1.js"></script> ---- not do it because if you are using html elements in js then during Parsing 
// these html elements arenot loaded and there willbe error

// 2) in the end of <body>  -> <script src="file1.js"></script> ---- everything parsing until the end of body.So here, load=done and excecute=done
// But firstly there is html is parsing then secondly Js is parsing and thirdly js is excecuting === TIME consuming process

// 3) in <header> -> <script src="file1.js async"></script> ---- async matlab 2 kaam ek saath hone first-parsing bhi hoti rahegi html ki and second-JS bhi load hogi (simultaneously)
// But after complete laoded of JS it stop the parsing and excecute the js.So there are chances of error becsuse some html elements are still not parsed

// 4) in <header> -> <script src="file1.js defer"></script> ---- defer matlab 2 kaam ek saath hone first-parsing bhi hoti rahegi html ki and second-JS bhi load hogi (simultaneously)
// after complete laoded of JS , still browser decide to parse the whole html and not to excecute the js --- time saving and No error chances beacuse 2 kaam saath ho rahe hai





