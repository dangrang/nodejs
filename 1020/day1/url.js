let url=require("url");
// let urlstring="https://www.duba.com/?f=qd_chedh&ft=gjlock&--type=0&br3rd=1&wn=3&hid=10_167_&pru=1";
// let urlobj=url.parse(urlstring,true,true);
// console.log(urlobj);

var urlobj={
        protocol: 'https:',
        slashes: true,
        auth: null,
        host: 'www.duba.com',
        port: null,
        hostname: 'www.duba.com',
        hash: null,
        search: '?f=qd_chedh&ft=gjlock&--type=0&br3rd=1&wn=3&hid=10_167_&pru=1',
        query:
    { f: 'qd_chedh',
        ft: 'gjlock',
        '--type': '0',
        br3rd: '1',
        wn: '3',
        hid: '10_167_',
        pru: '1' },
        pathname: '/',
        path: '/?f=qd_chedh&ft=gjlock&--type=0&br3rd=1&wn=3&hid=10_167_&pru=1',
        href: 'https://www.duba.com/?f=qd_chedh&ft=gjlock&--type=0&br3rd=1&wn=3&hid=10_167_&pru=1' };
console.log(url.format(urlobj,true,true));