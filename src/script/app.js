//这里直接引入css
//require是由于webpack提供无需编译
//我们开始添加loader

import '../stylesheets/index.scss';
import test from './index'

function app(arg) {
	console.log(arg);
}
app('Hello World!,new World');
test();