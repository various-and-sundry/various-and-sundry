function parse() {

	var code = document.getElementById("input_com_u_prof_code").value;




    var start_of_education = code.indexOf("E[") + 2;			//Store education code in education variable
    var education = code.substring(start_of_education);
    var end_of_education = education.indexOf("]"); 
    var education = education.substring(0, end_of_education);

    var start_of_field = code.indexOf("F[") + 2;			//Store field code in field variable 
    var field = code.substring(start_of_field);
    var end_of_field = field.indexOf("]");
    var field = field.substring(0, end_of_field);

    var start_of_languages = code.indexOf("L[") + 2;			//Store languages code in languages variable 
    var languages = code.substring(start_of_languages);
    var end_of_languages = languages.indexOf("]");
    var languages = languages.substring(0, end_of_languages);

    var start_of_operating_system = code.indexOf("O[") + 2;		//Store operating system code in operating_system variable 
    var operating_system = code.substring(start_of_operating_system);
    var end_of_operating_system = operating_system.indexOf("]");
    var operating_system = operating_system.substring(0, end_of_operating_system);

    var start_of_phone = code.indexOf("P[") + 2;			//Store phone code in phone variable 
    var phone = code.substring(start_of_phone);
    var end_of_phone = phone.indexOf("]");
    var phone = phone.substring(0, end_of_phone);

    var start_of_color = code.indexOf("C[") + 2;			//Store color code in color variable 
    var color = code.substring(start_of_color);
    var end_of_color = color.indexOf("]");
    var color = color.substring(0, end_of_color);

    var start_of_social_media = code.indexOf("S[") + 2;			//Store social media code in social_media variable 
    var social_media = code.substring(start_of_social_media);
    var end_of_social_media = social_media.indexOf("]");
    var social_media = social_media.substring(0, end_of_social_media);

    var start_of_hobbies = code.indexOf("H[") + 2;			//Store hobbies code in hobbies variable 
    var hobbies = code.substring(start_of_hobbies);
    var end_of_hobbies = hobbies.indexOf("]");
    var hobbies = hobbies.substring(0, end_of_hobbies);



	var output = '';

	if(/[A-Za-z0-9]/i.test(parse_education(education))) {				//Education
		output = output.concat("I have ", parse_education(education), ". ");
	}


	if(/[A-Za-z0-9]/.test(parse_field(field))) {					//Field
		output = output.concat("I am ", parse_field(field), ". ");
	}


	if(/[A-Za-z0-9]/.test(parse_languages(languages, 0))) {                 	//Programming/Markup Languages
		output = output.concat("I've used ", parse_languages(languages, 0), ". ");
	}
	if(/[A-Za-z0-9]/.test(parse_languages(languages, 1))) {
		if(/and /.test(parse_languages(languages, 1))) {
			output = output.concat("I've played around with ", parse_languages(languages, 1), " a bit. I might remember their syntax if I think about it. ");
		} else {
			output = output.concat("I've played around with ", parse_languages(languages, 1), " a bit. I might remember the syntax if I think about it. ");
		}
	}
    	if(/[A-Za-z0-9]/.test(parse_languages(languages, 2))) {
		if(/and /.test(parse_languages(languages, 2))) {
			output = output.concat("I know ", parse_languages(languages, 2), " well enough that I don't have to look up everything I do. I wrote a few small things with them. ");
		} else {
			output = output.concat("I know ", parse_languages(languages, 2), " well enough that I don't have to look up everything I do. I wrote a few small things with it. ");
		}
	}
	if(/[A-Za-z0-9]/.test(parse_languages(languages, 3))) {
		if(/and /.test(parse_languages(languages, 3))) {
			output = output.concat("I've written a few small projects with ", parse_languages(languages, 3), ". I am not good enough to use them professionally, but I can write useful things with them. ");
		} else {
			output = output.concat("I've written a few small projects with ", parse_languages(languages, 3), ". I am not good enough to use it professionally, but I can write useful things with it. ");
		}
	}
	if(/[A-Za-z0-9]/.test(parse_languages(languages, 4))) {
		output = output.concat("I am perfectly capable of using ", parse_languages(languages, 4), " professionally. ");
	}
	if(/[A-Za-z0-9]/.test(parse_languages(languages, 5))) {
		output = output.concat("You will be hard pressed to find someone who knows ", parse_languages(languages, 5), " better than I do. ");
	}
	if(/[A-Za-z0-9]/.test(parse_languages(languages, 6))) {
			if(/and /.test(parse_languages(languages, 6))) {
			output = output.concat("I not only develop in ", parse_languages(languages, 6), ", I helped develop them. ");
		} else {
			output = output.concat("I not only develop in ", parse_languages(languages, 6), ", I helped develop it. ");
		}
	}
	if(/[A-Za-z0-9]/.test(parse_languages_asterisks(languages))) {
		output = output.concat("I don't like ", parse_languages_asterisks(languages), ". ");
	}





	if(/[A-Za-z0-9]/.test(parse_operating_systems(operating_system, 0))) {	//Operating Systems
		output = output.concat("I've used ", parse_operating_systems(operating_system, 0), ". ");
	}
	if(/[A-Za-z0-9]/.test(parse_operating_systems(operating_system, 1))) {
		if(/and /.test(parse_operating_systems(operating_system, 1))) {
			output = output.concat(parse_operating_systems(operating_system, 1), " were on a computer that I had to use. ");
		} else {
			output = output.concat(parse_operating_systems(operating_system, 1), " was on a computer that I had to use. ");
		}
	}
    	if(/[A-Za-z0-9]/.test(parse_operating_systems(operating_system, 2))) {
		output = output.concat("I can get by using ", parse_operating_systems(operating_system, 2), ". ");
	}
	if(/[A-Za-z0-9]/.test(parse_operating_systems(operating_system, 3))) {
		output = output.concat("I am quite at home using ", parse_operating_systems(operating_system, 3), ". ");
	}
	if(/[A-Za-z0-9]/.test(parse_operating_systems(operating_system, 4))) {
		output = output.concat("I am very proficient at using ", parse_operating_systems(operating_system, 4), ". ");
	}
	if(/[A-Za-z0-9]/.test(parse_operating_systems(operating_system, 5))) {
		output = output.concat("I know more about ", parse_operating_systems(operating_system, 5), " than almost anyone I know. ");
	}
	if(/[A-Za-z0-9]/.test(parse_operating_systems(operating_system, 6))) {
		output = output.concat("I helped develop ", parse_operating_systems(operating_system, 6), ". ");
	}
	if(/[A-Za-z0-9]/.test(parse_operating_systems_asterisks(operating_system))) {
		output = output.concat("I don't like ", parse_operating_systems_asterisks(operating_system), ". ");
	}



	if(/[A-Za-z0-9]/.test(parse_phone_operating_systems(phone, 0))) {	//Phone
		output = output.concat("I've used ", parse_phone_operating_systems(phone, 0), ". ");
	}
	if(/[A-Za-z0-9]/.test(parse_phone_operating_systems(phone, 1))) {
			output = output.concat("I used ", parse_phone_operating_systems(phone, 1), " once. ");
	}
    	if(/[A-Za-z0-9]/.test(parse_phone_operating_systems(phone, 2))) {
		output = output.concat("I used " , parse_phone_operating_systems(phone, 2), " on a regular basis. ");
	}
	if(/[A-Za-z0-9]/.test(parse_phone_operating_systems(phone, 3))) {
		output = output.concat("I am quite at home using ", parse_phone_operating_systems(phone, 3), ". ");
	}
	if(/[A-Za-z0-9]/.test(parse_phone_operating_systems(phone, 4))) {
		output = output.concat("I am very proficient at using ", parse_phone_operating_systems(phone, 4), ". ");
	}
	if(/[A-Za-z0-9]/.test(parse_phone_operating_systems(phone, 5))) {
		output = output.concat("I know more about ", parse_phone_operating_systems(phone, 5), " than almost anyone I know. ");
	}
	if(/[A-Za-z0-9]/.test(parse_phone_operating_systems(phone, 6))) {
		output = output.concat("I helped develop ", parse_phone_operating_systems(phone, 6), ". ");
	}
	if(/[A-Za-z0-9]/.test(parse_phone_operating_systems_exclamation_point(phone))) {
		output = output.concat("I use ", parse_phone_operating_systems_exclamation_point(phone), " on my current phone. ");
	}
	if(/[A-Za-z0-9]/.test(parse_phone_operating_systems_asterisks(phone))) {
		output = output.concat("I don't like ", parse_phone_operating_systems_asterisks(phone), ". ");
	}
	if(parse_i_dont_have_a_phone(phone) !== "") {
		output = output.concat(parse_i_dont_have_a_phone(code));
	}




	if(/[A-Za-z0-9]/.test(parse_social_media(social_media))) {			//Social Media
		output = output.concat("I use ", parse_social_media(social_media), ". ");
	}

	
	if(/[A-Za-z0-9]/.test(parse_color(color))) {
		output = output.concat(parse_color(color).charAt(0).toUpperCase(), parse_color(color).slice(1), " is my favorite color. ");		//Color
	}

	
	
	if(/[A-Za-z0-9]/.test(parse_hobbies(hobbies, 0))) {				//Hobbies
		output = output.concat("I do ", parse_hobbies(hobbies, 0), ".  ");
	}
	if(/[A-Za-z0-9]/.test(parse_hobbies(hobbies, 1))) {
		output = output.concat("I like ", parse_hobbies(hobbies, 1), ". ");
	}
	if(/[A-Za-z0-9]/.test(parse_hobbies(hobbies, 2))) {
		output = output.concat("I really enjoy ", parse_hobbies(hobbies, 2), ". ");
	}
	if(/[A-Za-z0-9]/.test(parse_hobbies(hobbies, 3))) {
		if(/and/.test(parse_hobbies(hobbies, 3))) {
			output = output.concat(parse_hobbies(hobbies, 3).charAt(0).toUpperCase(), parse_hobbies(hobbies, 3).slice(1), " are amazing. ");
		}else {
			output = output.concat(parse_hobbies(hobbies, 3).charAt(0).toUpperCase(), parse_hobbies(hobbies, 3).slice(1), " is amazing. ");
		}
	}
	if(/[A-Za-z0-9]/.test(parse_hobbies(hobbies, 4))) {
		if(/and/.test(parse_hobbies(hobbies, 4))) {
			output = output.concat(parse_hobbies(hobbies, 4).charAt(0).toUpperCase(), parse_hobbies(hobbies, 4).slice(1), " are basically my life! ");
		}else {
			output = output.concat(parse_hobbies(hobbies, 4).charAt(0).toUpperCase(), parse_hobbies(hobbies, 4).slice(1), " is basically my life! ");
		}
	}





        document.getElementById("outputdiv").style.display = "block";		//Display answer box

	document.getElementById("output_com_u_prof_code").value = output;

	window.scrollTo(0,document.body.scrollHeight);				//Scroll to show answer

}



function parse_education(code) {					//Accepts education code and returns string of translated meanings formatted in standard English.
	var output = '';
	var code_section = [];
	var list_of_selections = [];
	var count = 0;
	const regex = RegExp(/([A-Z][a-z0-9]*)/g);

	while((code_section = regex.exec(code)) !== null) {		//Interprets all education levels in code and stores the interpretations in the list_of_selections array.
		if(interpret_education(code_section[1]) !== "") {
			list_of_selections[count] = interpret_education(code_section[1]);
			count++;
		}
	}

	if(list_of_selections.length == 1) {				//If there is only one education level in the list_of_selections array, list it in output on its own.
		output = output.concat(list_of_selections[0]);
	}
	else if(list_of_selections.length == 2) {			//If there are two education levels in the list_of_selections array, list them in output with an "and" between them.
		output = output.concat(list_of_selections[0], " and ", list_of_selections[1]);
	}
	else if(list_of_selections.length > 2) {			//If there are three or more education levels in the list_of_selections array, list them in output with commas and an "and" before the final element.
		for(var i= 0; i < list_of_selections.length; i++) {
			if(i < list_of_selections.length - 1) {
				output = output.concat(list_of_selections[i], ", ");
			}
			else if(i = list_of_selections.length - 1) {
				output = output.concat("and ", list_of_selections[i]);
			}
		}
	}

	return output;				//Return completed sentence
}



function interpret_education(word) {					//Accepts a letter and returns its education meaning

	 output = '';

	if(word === "E") {
		output = output.concat("an elementary school diploma");
	} else if(word === "S") {
		output = output.concat("a middle school diploma");
	} else if(word === "H") {
		output = output.concat("a high school diploma");
	} else if(word === "A") {
		output = output.concat("an associate degree");
	} else if(word === "B") {
		output = output.concat("a bachelor's degree");
	} else if(word === "M") {
		output = output.concat("a master's degree");
	} else if(word === "D") {
		output = output.concat("a doctoral degree");
	} else if(word === "P") {
		output = output.concat("a PhD");
	} else if(word === "O") {
		output = output.concat("other education");
	}
	return output;
}




function parse_field(code) {					//Accepts field code and returns string of translated meanings formatted in standard English.
	var output = '';
	var code_section = [];
	var list_of_selections = [];
	var count = 0;
	const regex = RegExp(/([A-Z][a-z0-9]*)/g);

	while((code_section = regex.exec(code)) !== null) {		//Interprets all fields in code and stores the interpretations in the list_of_selections array.
		if(interpret_field(code_section[1]) !== "") {
			list_of_selections[count] = interpret_field(code_section[1]);
			count++;
		}
	}

	if(list_of_selections.length == 1) {				//If there is only one field in the list_of_selections array, list it in output on its own.
		output = output.concat(list_of_selections[0]);
	}
	else if(list_of_selections.length == 2) {			//If there are two fields in the list_of_selections array, list them in output with an "and" between them.
		output = output.concat(list_of_selections[0], " and ", list_of_selections[1]);
	}
	else if(list_of_selections.length > 2) {			//If there are three or more fields in the list_of_selections array, list them in output with commas and an "and" before the final element.
		for(var i= 0; i < list_of_selections.length; i++) {
			if(i < list_of_selections.length - 1) {
				output = output.concat(list_of_selections[i], ", ");
			}
			else if(i = list_of_selections.length - 1) {
				output = output.concat("and ", list_of_selections[i]);
			}
		}
	}

	return output;				//Return completed sentence
}



function interpret_field(word) {					//Accepts the code for a single field and returns its field meaning

	var output = '';

	if(/Ch$/.test(word)) {
		output = output.concat("a chemical engineer");
	} else if(/Ci$/.test(word)) {
		output = output.concat("a civil engineer");
	} else if(/C$/.test(word)) {
		output = output.concat("a computer scientist");
	} else if(/B$/.test(word)) {
		output = output.concat("a back end developer");
	} else if(/D$/.test(word)) {
		output = output.concat("a developer");
	} else if(/E$/.test(word)) {
		output = output.concat("an electrical engineer");
	} else if(/F$/.test(word)) {
		output = output.concat("a front end developer");
	} else if(/H$/.test(word)) {
		output = output.concat("a hobbyist");
	} else if(/M$/.test(word)) {
		output = output.concat("a mechanical engineer");
	} else if(/O$/.test(word)) {
		output = output.concat("another type of engineer");
	} else if(/S$/.test(word)) {
		output = output.concat("involved in sales");
	}

	return output;
}





function parse_languages(code, number_of_pluses) {					//Accepts programming/markup language code and a number. It then returns a string listing the translated meaning of the programming/markup languages with the specified number of pluses.
	var output = '';
	var code_section = [];
	var list_of_selections = [];
	var count = 0;

		const separator_regex = RegExp(/([A-Z][a-z0-9]*[+]*[*]*)/g);


	while((code_section = separator_regex.exec(code)) !== null) {		//Interprets certain programming/markup languages in code and stores their interpretations in the list_of_selections array.
		var item = "";
		const regex = [RegExp(/([A-Za-z0-9]+)($|\*)/), RegExp(/([A-Za-z0-9]+)[+]{1}($|\*)/), RegExp(/([A-Za-z0-9]+)[+]{2}($|\*)/), RegExp(/([A-Za-z0-9]+)[+]{3}($|\*)/), RegExp(/([A-Za-z0-9]+)[+]{4}($|\*)/), RegExp(/([A-Za-z0-9]+)[+]{5}($|\*)/), RegExp(/([A-Za-z0-9]+)[+]{6}($|\*)/)];

		if(regex[number_of_pluses].test(code_section[1])) {		//Only store the items that have the proper number of plus signs.
			code_section =  regex[number_of_pluses].exec(code_section[1]);//Cut off the plus signs and asterisks
			if(interpret_languages(code_section[1]) !== "") {
				list_of_selections[count] = interpret_languages(code_section[1]);
				count++;
			}
		}
	}

	if(list_of_selections.length == 1) {				//If there is only one language in the list_of_selections array, list it in output on its own.
		output = output.concat(list_of_selections[0]);
	}
	else if(list_of_selections.length == 2) {			//If there are two languages in the list_of_selections array, list them in output with an "and" between them.
		output = output.concat(list_of_selections[0], " and ", list_of_selections[1]);
	}
	else if(list_of_selections.length > 2) {			//If there are three or more languages in the list_of_selections array, list them in output with commas and an "and" before the final element.
		for(var i= 0; i < list_of_selections.length; i++) {
			if(i < list_of_selections.length - 1) {
				output = output.concat(list_of_selections[i], ", ");
			}
			else if(i = list_of_selections.length - 1) {
				output = output.concat("and ", list_of_selections[i]);
			}
		}
	}

	return output;
}




function parse_languages_asterisks(code) {					//Accepts programming/markup language code and returns a string listing the translated meaning those with asterisks.
	var output = '';
	var code_section = [];
	var list_of_selections = [];
	var count = 0;
	const regex = RegExp(/([A-Z][a-z0-9]*)[+]*[*]+/g);

	while((code_section = regex.exec(code)) !== null) {		//Interprets all programming/markup languages in code with associate and stores their interpretations in the list_of_selections array.
		if(interpret_languages(code_section[1]) !== "") {
			list_of_selections[count] = interpret_languages(code_section[1]);
			count++;
		}
	}

	if(list_of_selections.length == 1) {				//If there is only one programming/markup languages in the list_of_selections array, list it in output on its own.
		output = output.concat(list_of_selections[0]);
	}
	else if(list_of_selections.length == 2) {			//If there are two programming/markup languages in the list_of_selections array, list them in output with an "and" between them.
		output = output.concat(list_of_selections[0], " or ", list_of_selections[1]);
	}
	else if(list_of_selections.length > 2) {			//If there are three or more programming/markup languages in the list_of_selections array, list them in output with commas and an "and" before the final element.
		for(var i= 0; i < list_of_selections.length; i++) {
			if(i < list_of_selections.length - 1) {
				output = output.concat(list_of_selections[i], ", ");
			}
			else if(i = list_of_selections.length - 1) {
				output = output.concat("or ", list_of_selections[i]);
			}
		}
	}
	return output;
}


function interpret_languages(word) {					//Accepts the code for a single programming/markup languages and returns its meaning

	var output = '';

	if(/Ad$/.test(word)) {
		output = output.concat("Ada");
	} else if(/A$/.test(word)) {
		output = output.concat("ALGOL");
	} else if(/Ba$/.test(word)) {
		output = output.concat("Bash");
	} else if(/B$/.test(word)) {
		output = output.concat("BASIC");
	} else if(/C$/.test(word)) {
		output = output.concat("C");
	} else if(/Cp$/.test(word)) {
		output = output.concat("C++");
	} else if(/Ch$/.test(word)) {
		output = output.concat("C#");
	} else if(/Ca$/.test(word)) {
		output = output.concat("Caml");
	} else if(/Cj$/.test(word)) {
		output = output.concat("Clojure");
	} else if(/Co$/.test(word)) {
		output = output.concat("COBOL");
	} else if(/Cf$/.test(word)) {
		output = output.concat("CoffeeScript");
	} else if(/Cl$/.test(word)) {
		output = output.concat("Common Lisp");
	} else if(/Cs$/.test(word)) {
		output = output.concat("CSS");
	} else if(/D$/.test(word)) {
		output = output.concat("Dart");
	} else if(/Ei$/.test(word)) {
		output = output.concat("Eiffel");
	} else if(/Ex$/.test(word)) {
		output = output.concat("Elixir");
	} else if(/El$/.test(word)) {
		output = output.concat("Emacs Lisp");
	} else if(/E$/.test(word)) {
		output = output.concat("Erlang");
	} else if(/Fs$/.test(word)) {
		output = output.concat("F#");
	} else if(/Fm$/.test(word)) {
		output = output.concat("FLOW-MATIC");
	} else if(/Fh$/.test(word)) {
		output = output.concat("Forth");
	} else if(/Ft$/.test(word)) {
		output = output.concat("FORTRAN");
	} else if(/G$/.test(word)) {
		output = output.concat("Go");
	} else if(/Gr$/.test(word)) {
		output = output.concat("Groovy");
	} else if(/Hk$/.test(word)) {
		output = output.concat("Haskell");
	} else if(/H$/.test(word)) {
		output = output.concat("HTML");
	} else if(/Hy$/.test(word)) {
		output = output.concat("HyperTalk");
	} else if(/Ir$/.test(word)) {
		output = output.concat("IBM RPG");
	} else if(/Jy$/.test(word)) {
		output = output.concat("J");
	} else if(/Jh$/.test(word)) {
		output = output.concat("J#");
	} else if(/Jp$/.test(word)) {
		output = output.concat("J++");
	} else if(/J$/.test(word)) {
		output = output.concat("Java");
	} else if(/Js$/.test(word)) {
		output = output.concat("JavaScript");
	} else if(/Jt$/.test(word)) {
		output = output.concat("JScript");
	} else if(/Ju$/.test(word)) {
		output = output.concat("Julia");
	} else if(/Lv$/.test(word)) {
		output = output.concat("LabVIEW");
	} else if(/Ll$/.test(word)) {
		output = output.concat("ladder logic");
	} else if(/Lx$/.test(word)) {
		output = output.concat("LaTeX");
	} else if(/L$/.test(word)) {
		output = output.concat("Lisp");
	} else if(/Lu$/.test(word)) {
		output = output.concat("Lua");
	} else if(/Mc$/.test(word)) {
		output = output.concat("Machine Code");
	} else if(/Mm$/.test(word)) {
		output = output.concat("Mathematica");
	} else if(/Ml$/.test(word)) {
		output = output.concat("MATLAB");
	} else if(/Oj$/.test(word)) {
		output = output.concat("Objective-C");
	} else if(/Oc$/.test(word)) {
		output = output.concat("OCaml");
	} else if(/Pa$/.test(word)) {
		output = output.concat("Pascal");
	} else if(/Pl$/.test(word)) {
		output = output.concat("Perl");
	} else if(/P6$/.test(word)) {
		output = output.concat("Raku");
	} else if(/Ps$/.test(word)) {
		output = output.concat("PowerShell");
	} else if(/P$/.test(word)) {
		output = output.concat("Python");
	} else if(/R$/.test(word)) {
		output = output.concat("R");
	} else if(/Rb$/.test(word)) {
		output = output.concat("Ruby");
	} else if(/Rt$/.test(word)) {
		output = output.concat("Rust");
	} else if(/Sl$/.test(word)) {
		output = output.concat("Scala");
	} else if(/Sc$/.test(word)) {
		output = output.concat("Scheme");
	} else if(/St$/.test(word)) {
		output = output.concat("Smalltalk");
	} else if(/S$/.test(word)) {
		output = output.concat("Swift");
	} else if(/T$/.test(word)) {
		output = output.concat("TeX");
	} else if(/Us$/.test(word)) {
		output = output.concat("Unix shell");
	} else if(/Vb$/.test(word)) {
		output = output.concat("Visual Basic");
	} else if(/W$/.test(word)) {
		output = output.concat("Wolfram");
	}


	return output;
}







function parse_operating_systems(code, number_of_pluses) {					//Accepts operating system code and a numbers. It then returns a string listing the translated meaning of the operating systems with that number of pluses.
	var output = '';
	var code_section = [];
	var list_of_selections = [];
	var count = 0;

		const separator_regex = RegExp(/([A-Z][a-z0-9]*[+]*[*]*)/g);


	while((code_section = separator_regex.exec(code)) !== null) {		//Interprets certain operating systems in code and stores their interpretations in the list_of_selections array.
		var item = "";
		const regex = [RegExp(/([A-Za-z0-9]+)($|\*)/), RegExp(/([A-Za-z0-9]+)[+]{1}($|\*)/), RegExp(/([A-Za-z0-9]+)[+]{2}($|\*)/), RegExp(/([A-Za-z0-9]+)[+]{3}($|\*)/), RegExp(/([A-Za-z0-9]+)[+]{4}($|\*)/), RegExp(/([A-Za-z0-9]+)[+]{5}($|\*)/), RegExp(/([A-Za-z0-9]+)[+]{6}($|\*)/)];

		if(regex[number_of_pluses].test(code_section[1])) {		//Only store the items that have the proper number of plus signs.
			code_section =  regex[number_of_pluses].exec(code_section[1]);//Cut off the plus signs and asterisks
			if(interpret_operating_system(code_section[1]) !== "") {
				list_of_selections[count] = interpret_operating_system(code_section[1]);
				count++;
			}
		}
	}

	if(list_of_selections.length == 1) {				//If there is only one operating system in the list_of_selections array, list it in output on its own.
		output = output.concat(list_of_selections[0]);
	}
	else if(list_of_selections.length == 2) {			//If there are two operating systems in the list_of_selections array, list them in output with an "and" between them.
		output = output.concat(list_of_selections[0], " and ", list_of_selections[1]);
	}
	else if(list_of_selections.length > 2) {			//If there are three of more operating systems in the list_of_selections array, list them in output with commas and an "and" before the final element.
		for(var i= 0; i < list_of_selections.length; i++) {
			if(i < list_of_selections.length - 1) {
				output = output.concat(list_of_selections[i], ", ");
			}
			else if(i = list_of_selections.length - 1) {
				output = output.concat("and ", list_of_selections[i]);
			}
		}
	}

	return output;
}


function parse_operating_systems_asterisks(code) {					//Accepts operating system code and returns a string listing the translated meaning those with asterisks.
	var output = '';
	var code_section = [];
	var list_of_selections = [];
	var count = 0;
	const regex = RegExp(/([A-Z][a-z0-9]*)[+]*[*]+/g);

	while((code_section = regex.exec(code)) !== null) {		//Interprets all operating systems in code with asterisks and stores their interpretations in the list_of_selections array.
		if(interpret_operating_system(code_section[1]) !== "") {
			list_of_selections[count] = interpret_operating_system(code_section[1]);
			count++;
		}
	}

	if(list_of_selections.length == 1) {				//If there is only one operating system in the list_of_selections array, list it in output on its own.
		output = output.concat(list_of_selections[0]);
	}
	else if(list_of_selections.length == 2) {			//If there are two operating systems in the list_of_selections array, list them in output with an "and" between them.
		output = output.concat(list_of_selections[0], " or ", list_of_selections[1]);
	}
	else if(list_of_selections.length > 2) {			//If there are three of more operating systems in the list_of_selections array, list them in output with commas and an "and" before the final element.
		for(var i= 0; i < list_of_selections.length; i++) {
			if(i < list_of_selections.length - 1) {
				output = output.concat(list_of_selections[i], ", ");
			}
			else if(i = list_of_selections.length - 1) {
				output = output.concat("or ", list_of_selections[i]);
			}
		}
	}
	return output;
}


function interpret_operating_system(word) {					//Accepts the code for a single operating system and returns its meaning

	var output = '';

	if(word === "C") {
		output = output.concat("Chrome OS");
	} else if(word === "L") {
		output = output.concat("Linux");
	} else if(word === "M") {
		output = output.concat("Mac OS");
	} else if(word === "Mi") {
		output = output.concat("Minix");
	} else if(word === "Md") {
		output = output.concat("MS DOS");
	} else if(word === "U") {
		output = output.concat("UNIX");
	} else if(word === "W") {
		output = output.concat("Windows");
	} else if(word === "O") {
		output = output.concat("another operating system");
	}

	return output;
}




function parse_phone_operating_systems(code, number_of_pluses) {					//Accepts phone operating system code and a number. It then returns a string listing the translated meaning of the operating systems with that number of pluses.
	var output = '';
	var code_section = [];
	var list_of_selections = [];
	var count = 0;

		const separator_regex = RegExp(/([A-Z][a-z0-9]*[+]*[*]*)/g);


	while((code_section = separator_regex.exec(code)) !== null) {		//Interprets certain phone operating systems in code and stores their interpretations in the list_of_selections array.
		var item = "";
		const regex = [RegExp(/([A-Za-z0-9]+)($|\*)/), RegExp(/([A-Za-z0-9]+)[+]{1}($|\*)/), RegExp(/([A-Za-z0-9]+)[+]{2}($|\*)/), RegExp(/([A-Za-z0-9]+)[+]{3}($|\*)/), RegExp(/([A-Za-z0-9]+)[+]{4}($|\*)/), RegExp(/([A-Za-z0-9]+)[+]{5}($|\*)/), RegExp(/([A-Za-z0-9]+)[+]{6}($|\*)/)];

		if(regex[number_of_pluses].test(code_section[1])) {		//Only store the items that have the proper number of plus signs.
			code_section =  regex[number_of_pluses].exec(code_section[1]);//Cut off the plus signs and asterisks
			if(interpret_phone_operating_system(code_section[1]) !== "") {
				list_of_selections[count] = interpret_phone_operating_system(code_section[1]);
				count++;
			}
		}
	}

	if(list_of_selections.length == 1) {				//If there is only one phone operating system in the list_of_selections array, list it in output on its own.
		output = output.concat(list_of_selections[0]);
	}
	else if(list_of_selections.length == 2) {			//If there are two phone operating systems in the list_of_selections array, list them in output with an "and" between them.
		output = output.concat(list_of_selections[0], " and ", list_of_selections[1]);
	}
	else if(list_of_selections.length > 2) {			//If there are three of more phone operating systems in the list_of_selections array, list them in output with commas and an "and" before the final element.
		for(var i= 0; i < list_of_selections.length; i++) {
			if(i < list_of_selections.length - 1) {
				output = output.concat(list_of_selections[i], ", ");
			}
			else if(i = list_of_selections.length - 1) {
				output = output.concat("and ", list_of_selections[i]);
			}
		}
	}

	return output;
}


function parse_phone_operating_systems_asterisks(code) {					//Accepts phone operating system code and returns a string listing the translated meaning those with asterisks.
	var output = '';
	var code_section = [];
	var list_of_selections = [];
	var count = 0;
	const regex = RegExp(/([A-Z][a-z0-9]*)[+]*[!]*[*]+/g);

	while((code_section = regex.exec(code)) !== null) {		//Interprets all operating systems in code with asterisks and stores their interpretations in the list_of_selections array.
		if(interpret_phone_operating_system(code_section[1]) !== "") {
			list_of_selections[count] = interpret_phone_operating_system(code_section[1]);
			count++;
		}
	}

	if(list_of_selections.length == 1) {				//If there is only one phone operating system in the list_of_selections array, list it in output on its own.
		output = output.concat(list_of_selections[0]);
	}
	else if(list_of_selections.length == 2) {			//If there are two phone operating systems in the list_of_selections array, list them in output with an "and" between them.
		output = output.concat(list_of_selections[0], " or ", list_of_selections[1]);
	}
	else if(list_of_selections.length > 2) {			//If there are three of more phone operating systems in the list_of_selections array, list them in output with commas and an "and" before the final element.
		for(var i= 0; i < list_of_selections.length; i++) {
			if(i < list_of_selections.length - 1) {
				output = output.concat(list_of_selections[i], ", ");
			}
			else if(i = list_of_selections.length - 1) {
				output = output.concat("and ", list_of_selections[i]);
			}
		}
	}

	return output;
}



function parse_phone_operating_systems_exclamation_point(code) {					//Accepts phone operating system code and returns a string listing the translated meaning those with exclamation points.
	var output = '';
	var code_section = [];
	var list_of_selections = [];
	var count = 0;
	const regex = RegExp(/([A-Z][a-z0-9]*)[+]*[*]*[!]+/g);

	while((code_section = regex.exec(code)) !== null) {		//Interprets all operating systems in code with exclamation points and stores their interpretations in the list_of_selections array.
		if(interpret_phone_operating_system(code_section[1]) !== "") {
			list_of_selections[count] = interpret_phone_operating_system(code_section[1]);
			count++;
		}
	}

	if(list_of_selections.length == 1) {				//If there is only one phone operating system in the list_of_selections array, list it in output on its own.
		output = output.concat(list_of_selections[0]);
	}
	else if(list_of_selections.length == 2) {			//If there are two phone operating systems sin the list_of_selections array, list them in output with an "and" between them.
		output = output.concat(list_of_selections[0], " or ", list_of_selections[1]);
	}
	else if(list_of_selections.length > 2) {			//If there are three of more phone operating systems in the list_of_selections array, list them in output with commas and an "and" before the final element.
		for(var i= 0; i < list_of_selections.length; i++) {
			if(i < list_of_selections.length - 1) {
				output = output.concat(list_of_selections[i], ", ");
			}
			else if(i = list_of_selections.length - 1) {
				output = output.concat("and ", list_of_selections[i]);
			}
		}
	}

	return output;
}


function parse_i_dont_have_a_phone(code) {

	if(/[N][*]+([^a-z0-9]|$)/.test(code)) {
		return("I don't have a phone, and I don't like that. ");
	}
	else if(/[N]([^a-z0-9]|$)/.test(code)) {
		return("I don't have a phone. ");
	}
	else {
		return("");
	}
}



function interpret_phone_operating_system(word) {					//Accepts the code for a single phone operating system and returns its meaning

	var output = '';

	if(word === "A") {
		output = output.concat("Android");
	} else if(word === "I") {
		output = output.concat("iOS");
	} else if(word === "F") {
		output = output.concat("Firefox OS");
	} else if(word === "U") {
		output = output.concat("Ubuntu Touch");
	} else if(word === "O") {
		output = output.concat("another phone operating system");
	} else if(word === "W") {
		output = output.concat("Windows Phone");
	}

	return output;
}



function parse_social_media(code) {					//Accepts social media code and returns a string listing its translated meaning in standard English.
	var output = '';
	var code_section = [];
	var list_of_selections = [];
	var count = 0;
	const regex = RegExp(/([A-Z][a-z0-9]*)/g);

	while((code_section = regex.exec(code)) !== null) {		//Interprets all social media platforms in code and stores their interpretations in the list_of_selections array.
		if(interpret_social_media(code_section[1]) !== "") {
			list_of_selections[count] = interpret_social_media(code_section[1]);
			count++;
		}
	}

	if(list_of_selections.length == 1) {				//If there is only one social media platform in the list_of_selections array, list it in output on its own.
		output = output.concat(list_of_selections[0]);
	}
	else if(list_of_selections.length == 2) {			//If there are two social media platforms in the list_of_selections array, list them in output with an "and" between them.
		output = output.concat(list_of_selections[0], " and ", list_of_selections[1]);
	}
	else if(list_of_selections.length > 2) {			//If there are three of more social media platforms in the list_of_selections array, list them in output with commas and an "and" before the final element.
		for(var i= 0; i < list_of_selections.length; i++) {
			if(i < list_of_selections.length - 1) {
				output = output.concat(list_of_selections[i], ", ");
			}
			else if(i = list_of_selections.length - 1) {
				output = output.concat("and ", list_of_selections[i]);
			}
		}
	}

	return output;
}

	

function interpret_social_media(word) {					//Accepts the code for a single social media platform and returns its meaning

	var output = '';

	if(word === "F") {
		output = output.concat("Facebook");
	} else if(word === "Fl") {
		output = output.concat("Flickr");
	} else if(word === "G") {
		output = output.concat("Google+");
	} else if(word === "Gh") {
		output = output.concat("GitHub");
	} else if(word === "Gs") {
		output = output.concat("GNU Social");
	} else if(word === "I") {
		output = output.concat("Instagram");
	} else if(word === "L") {
		output = output.concat("LinkedIn");
	} else if(word === "M") {
		output = output.concat("Mastodon");
	} else if(word === "My") {
		output = output.concat("Myspace");
	} else if(word === "W") {
		output = output.concat("a personal web page");
	} else if(word === "P") {
		output = output.concat("Pinterest");
	} else if(word === "R") {
		output = output.concat("Reddit");
	} else if(word === "Qq") {
		output = output.concat("QQ");
	} else if(word === "Q") {
		output = output.concat("Quora");
	} else if(word === "S") {
		output = output.concat("Snapchat");
	} else if(word === "Tb") {
		output = output.concat("Tumblr");
	} else if(word === "T") {
		output = output.concat("Twitter");
	} else if(word === "V") {
		output = output.concat("Vine");
	} else if(word === "Wc") {
		output = output.concat("WeChat");
	} else if(word === "Y") {
		output = output.concat("YouTube");
	}

	return output;
}



function parse_hobbies(code, number_of_pluses) {					//Accepts hobbies code and a number. It then returns a string listing the translated meaning of the hobbies with that number of pluses.
	var output = '';
	var code_section = [];
	var list_of_selections = [];
	var count = 0;

		const separator_regex = RegExp(/([A-Z][a-z0-9]*[+]*)/g);


	while((code_section = separator_regex.exec(code)) !== null) {		//Interprets certain hobbies in code and stores their interpretations in the list_of_selections array.
		var item = "";
		const regex = [RegExp(/([A-Za-z0-9]+)$/), RegExp(/([A-Za-z0-9]+)[+]{1}$/), RegExp(/([A-Za-z0-9]+)[+]{2}$/), RegExp(/([A-Za-z0-9]+)[+]{3}$/), RegExp(/([A-Za-z0-9]+)[+]{4}$/)];

		if(regex[number_of_pluses].test(code_section[1])) {		//Only store the items that have the proper number of plus signs.
			code_section =  regex[number_of_pluses].exec(code_section[1]);//Cut off the plus signs
			if(interpret_hobbies(code_section[1]) !== "") {
				list_of_selections[count] = interpret_hobbies(code_section[1]);
				count++;
			}
		}
	}

	if(list_of_selections.length == 1) {				//If there is only one hobby in the list_of_selections array, list it in output on its own.
		output = output.concat(list_of_selections[0]);
	}
	else if(list_of_selections.length == 2) {			//If there are two hobbies in the list_of_selections array, list them in output with an "and" between them.
		output = output.concat(list_of_selections[0], " and ", list_of_selections[1]);
	}
	else if(list_of_selections.length > 2) {			//If there are three of more hobbies in the list_of_selections array, list them in output with commas and an "and" before the final element.
		for(var i= 0; i < list_of_selections.length; i++) {
			if(i < list_of_selections.length - 1) {
				output = output.concat(list_of_selections[i], ", ");
			}
			else if(i = list_of_selections.length - 1) {
				output = output.concat("and ", list_of_selections[i]);
			}
		}
	}

	return output;
}



function interpret_hobbies(word) {					//Accepts the code for a single hobbies and returns its meaning

	var output = '';

	if(/A$/.test(word)) {
		output = output.concat("art");
	}
	else if(/An$/.test(word)) {
		output = output.concat("animals");
	}
	else if(/C$/.test(word)) {
		output = output.concat("cooking");
	}
	else if(/D$/.test(word)) {
		output = output.concat("dance");
	}
	else if(/E$/.test(word)) {
		output = output.concat("exercise");
	}
	else if(/F$/.test(word)) {
		output = output.concat("film");
	}
	else if(/Gr$/.test(word)) {
		output = output.concat("gardening");
	}
	else if(/M$/.test(word)) {
		output = output.concat("music");
	}
	else if(/Ph$/.test(word)) {
		output = output.concat("photography");
	}
	else if(/P$/.test(word)) {
		output = output.concat("programming");
	}
	else if(/R$/.test(word)) {
		output = output.concat("reading");
	}
	else if(/Ro$/.test(word)) {
		output = output.concat("robotics");
	}
	else if(/Sp$/.test(word)) {
		output = output.concat("sports");
	}
	else if(/S$/.test(word)) {
		output = output.concat("sewing");
	}
	else if(/G$/.test(word)) {
		output = output.concat("video Games");
	}
	else if(/W$/.test(word)) {
		output = output.concat("writing");
	}

	return output;
}











function parse_color(code) {                         //Accepts a HEX Triplet and returns it's color name according to the X11 standard. If no match if found, the HEX Triplet is returned.

	var output = '';

	if(/f0f8ff/i.test(code)) {
		output = "aliceblue";
	} else if(/faebd7/i.test(code)) {
		output = "antiquewhite";
	} else if(/ffefdb/i.test(code)) {
		output = "antiquewhite1";
	} else if(/eedfcc/i.test(code)) {
		output = "antiquewhite2";
	} else if(/cdc0b0/i.test(code)) {
		output = "antiquewhite3";
	} else if(/8b8378/i.test(code)) {
		output = "antiquewhite4";
	} else if(/7fffd4/i.test(code)) {
		output = "aquamarine1";
	} else if(/76eec6/i.test(code)) {
		output = "aquamarine2";
	} else if(/458b74/i.test(code)) {
		output = "aquamarine4";
	} else if(/f0ffff/i.test(code)) {
		output = "azure1";
	} else if(/e0eeee/i.test(code)) {
		output = "azure2";
	} else if(/c1cdcd/i.test(code)) {
		output = "azure3";
	} else if(/838b8b/i.test(code)) {
		output = "azure4";
	} else if(/f5f5dc/i.test(code)) {
		output = "beige";
	} else if(/ffe4c4/i.test(code)) {
		output = "bisque1";
	} else if(/eed5b7/i.test(code)) {
		output = "bisque2";
	} else if(/cdb79e/i.test(code)) {
		output = "bisque3";
	} else if(/8b7d6b/i.test(code)) {
		output = "bisque4";
	} else if(/000000/i.test(code)) {
		output = "black";
	} else if(/ffebcd/i.test(code)) {
		output = "blanchedalmond";
	} else if(/0000ff/i.test(code)) {
		output = "blue1";
	} else if(/0000ee/i.test(code)) {
		output = "blue2";
	} else if(/00008b/i.test(code)) {
		output = "blue4";
	} else if(/8a2be2/i.test(code)) {
		output = "blueviolet";
	} else if(/a52a2a/i.test(code)) {
		output = "brown";
	} else if(/ff4040/i.test(code)) {
		output = "brown1";
	} else if(/ee3b3b/i.test(code)) {
		output = "brown2";
	} else if(/cd3333/i.test(code)) {
		output = "brown3";
	} else if(/8b2323/i.test(code)) {
		output = "brown4";
	} else if(/deb887/i.test(code)) {
		output = "burlywood";
	} else if(/ffd39b/i.test(code)) {
		output = "burlywood1";
	} else if(/eec591/i.test(code)) {
		output = "burlywood2";
	} else if(/cdaa7d/i.test(code)) {
		output = "burlywood3";
	} else if(/8b7355/i.test(code)) {
		output = "burlywood4";
	} else if(/5f9ea0/i.test(code)) {
		output = "cadetblue";
	} else if(/98f5ff/i.test(code)) {
		output = "cadetblue1";
	} else if(/8ee5ee/i.test(code)) {
		output = "cadetblue2";
	} else if(/7ac5cd/i.test(code)) {
		output = "cadetblue3";
	} else if(/53868b/i.test(code)) {
		output = "cadetblue4";
	} else if(/7fff00/i.test(code)) {
		output = "chartreuse1";
	} else if(/76ee00/i.test(code)) {
		output = "chartreuse2";
	} else if(/66cd00/i.test(code)) {
		output = "chartreuse3";
	} else if(/458b00/i.test(code)) {
		output = "chartreuse4";
	} else if(/d2691e/i.test(code)) {
		output = "chocolate";
	} else if(/ff7f24/i.test(code)) {
		output = "chocolate1";
	} else if(/ee7621/i.test(code)) {
		output = "chocolate2";
	} else if(/cd661d/i.test(code)) {
		output = "chocolate3";
	} else if(/ff7f50/i.test(code)) {
		output = "coral";
	} else if(/ff7256/i.test(code)) {
		output = "coral1";
	} else if(/ee6a50/i.test(code)) {
		output = "coral2";
	} else if(/cd5b45/i.test(code)) {
		output = "coral3";
	} else if(/8b3e2f/i.test(code)) {
		output = "coral4";
	} else if(/6495ed/i.test(code)) {
		output = "cornflowerblue";
	} else if(/fff8dc/i.test(code)) {
		output = "cornsilk1";
	} else if(/eee8cd/i.test(code)) {
		output = "cornsilk2";
	} else if(/cdc8b1/i.test(code)) {
		output = "cornsilk3";
	} else if(/8b8878/i.test(code)) {
		output = "cornsilk4";
	} else if(/00ffff/i.test(code)) {
		output = "cyan1";
	} else if(/00eeee/i.test(code)) {
		output = "cyan2";
	} else if(/00cdcd/i.test(code)) {
		output = "cyan3";
	} else if(/008b8b/i.test(code)) {
		output = "cyan4";
	} else if(/b8860b/i.test(code)) {
		output = "darkgoldenrod";
	} else if(/ffb90f/i.test(code)) {
		output = "darkgoldenrod1";
	} else if(/eead0e/i.test(code)) {
		output = "darkgoldenrod2";
	} else if(/cd950c/i.test(code)) {
		output = "darkgoldenrod3";
	} else if(/8b6508/i.test(code)) {
		output = "darkgoldenrod4";
	} else if(/006400/i.test(code)) {
		output = "darkgreen";
	} else if(/bdb76b/i.test(code)) {
		output = "darkkhaki";
	} else if(/556b2f/i.test(code)) {
		output = "darkolivegreen";
	} else if(/caff70/i.test(code)) {
		output = "darkolivegreen1";
	} else if(/bcee68/i.test(code)) {
		output = "darkolivegreen2";
	} else if(/a2cd5a/i.test(code)) {
		output = "darkolivegreen3";
	} else if(/6e8b3d/i.test(code)) {
		output = "darkolivegreen4";
	} else if(/ff8c00/i.test(code)) {
		output = "darkorange";
	} else if(/ff7f00/i.test(code)) {
		output = "darkorange1";
	} else if(/ee7600/i.test(code)) {
		output = "darkorange2";
	} else if(/cd6600/i.test(code)) {
		output = "darkorange3";
	} else if(/8b4500/i.test(code)) {
		output = "darkorange4";
	} else if(/9932cc/i.test(code)) {
		output = "darkorchid";
	} else if(/bf3eff/i.test(code)) {
		output = "darkorchid1";
	} else if(/b23aee/i.test(code)) {
		output = "darkorchid2";
	} else if(/9a32cd/i.test(code)) {
		output = "darkorchid3";
	} else if(/68228b/i.test(code)) {
		output = "darkorchid4";
	} else if(/e9967a/i.test(code)) {
		output = "darksalmon";
	} else if(/8fbc8f/i.test(code)) {
		output = "darkseagreen";
	} else if(/c1ffc1/i.test(code)) {
		output = "darkseagreen1";
	} else if(/b4eeb4/i.test(code)) {
		output = "darkseagreen2";
	} else if(/9bcd9b/i.test(code)) {
		output = "darkseagreen3";
	} else if(/698b69/i.test(code)) {
		output = "darkseagreen4";
	} else if(/483d8b/i.test(code)) {
		output = "darkslateblue";
	} else if(/2f4f4f/i.test(code)) {
		output = "darkslategray";
	} else if(/97ffff/i.test(code)) {
		output = "darkslategray1";
	} else if(/8deeee/i.test(code)) {
		output = "darkslategray2";
	} else if(/79cdcd/i.test(code)) {
		output = "darkslategray3";
	} else if(/528b8b/i.test(code)) {
		output = "darkslategray4";
	} else if(/00ced1/i.test(code)) {
		output = "darkturquoise";
	} else if(/9400d3/i.test(code)) {
		output = "darkviolet";
	} else if(/ff1493/i.test(code)) {
		output = "deeppink1";
	} else if(/ee1289/i.test(code)) {
		output = "deeppink2";
	} else if(/cd1076/i.test(code)) {
		output = "deeppink3";
	} else if(/8b0a50/i.test(code)) {
		output = "deeppink4";
	} else if(/00bfff/i.test(code)) {
		output = "deepskyblue1";
	} else if(/00b2ee/i.test(code)) {
		output = "deepskyblue2";
	} else if(/009acd/i.test(code)) {
		output = "deepskyblue3";
	} else if(/00688b/i.test(code)) {
		output = "deepskyblue4";
	} else if(/696969/i.test(code)) {
		output = "dimgray";
	} else if(/1e90ff/i.test(code)) {
		output = "dodgerblue1";
	} else if(/1c86ee/i.test(code)) {
		output = "dodgerblue2";
	} else if(/1874cd/i.test(code)) {
		output = "dodgerblue3";
	} else if(/104e8b/i.test(code)) {
		output = "dodgerblue4";
	} else if(/b22222/i.test(code)) {
		output = "firebrick";
	} else if(/ff3030/i.test(code)) {
		output = "firebrick1";
	} else if(/ee2c2c/i.test(code)) {
		output = "firebrick2";
	} else if(/cd2626/i.test(code)) {
		output = "firebrick3";
	} else if(/8b1a1a/i.test(code)) {
		output = "firebrick4";
	} else if(/fffaf0/i.test(code)) {
		output = "floralwhite";
	} else if(/228b22/i.test(code)) {
		output = "forestgreen";
	} else if(/dcdcdc/i.test(code)) {
		output = "gainsboro";
	} else if(/f8f8ff/i.test(code)) {
		output = "ghostwhite";
	} else if(/ffd700/i.test(code)) {
		output = "gold1";
	} else if(/eec900/i.test(code)) {
		output = "gold2";
	} else if(/cdad00/i.test(code)) {
		output = "gold3";
	} else if(/8b7500/i.test(code)) {
		output = "gold4";
	} else if(/daa520/i.test(code)) {
		output = "goldenrod";
	} else if(/ffc125/i.test(code)) {
		output = "goldenrod1";
	} else if(/eeb422/i.test(code)) {
		output = "goldenrod2";
	} else if(/cd9b1d/i.test(code)) {
		output = "goldenrod3";
	} else if(/8b6914/i.test(code)) {
		output = "goldenrod4";
	} else if(/bebebe/i.test(code)) {
		output = "gray";
	} else if(/030303/i.test(code)) {
		output = "gray1";
	} else if(/050505/i.test(code)) {
		output = "gray2";
	} else if(/080808/i.test(code)) {
		output = "gray3";
	} else if(/0a0a0a/i.test(code)) {
		output = "gray4";
	} else if(/0d0d0d/i.test(code)) {
		output = "gray5";
	} else if(/0f0f0f/i.test(code)) {
		output = "gray6";
	} else if(/121212/i.test(code)) {
		output = "gray7";
	} else if(/141414/i.test(code)) {
		output = "gray8";
	} else if(/171717/i.test(code)) {
		output = "gray9";
	} else if(/1a1a1a/i.test(code)) {
		output = "gray10";
	} else if(/1c1c1c/i.test(code)) {
		output = "gray11";
	} else if(/1f1f1f/i.test(code)) {
		output = "gray12";
	} else if(/212121/i.test(code)) {
		output = "gray13";
	} else if(/242424/i.test(code)) {
		output = "gray14";
	} else if(/262626/i.test(code)) {
		output = "gray15";
	} else if(/292929/i.test(code)) {
		output = "gray16";
	} else if(/2b2b2b/i.test(code)) {
		output = "gray17";
	} else if(/2e2e2e/i.test(code)) {
		output = "gray18";
	} else if(/303030/i.test(code)) {
		output = "gray19";
	} else if(/333333/i.test(code)) {
		output = "gray20";
	} else if(/363636/i.test(code)) {
		output = "gray21";
	} else if(/383838/i.test(code)) {
		output = "gray22";
	} else if(/3b3b3b/i.test(code)) {
		output = "gray23";
	} else if(/3d3d3d/i.test(code)) {
		output = "gray24";
	} else if(/404040/i.test(code)) {
		output = "gray25";
	} else if(/424242/i.test(code)) {
		output = "gray26";
	} else if(/454545/i.test(code)) {
		output = "gray27";
	} else if(/474747/i.test(code)) {
		output = "gray28";
	} else if(/4a4a4a/i.test(code)) {
		output = "gray29";
	} else if(/4d4d4d/i.test(code)) {
		output = "gray30";
	} else if(/4f4f4f/i.test(code)) {
		output = "gray31";
	} else if(/525252/i.test(code)) {
		output = "gray32";
	} else if(/545454/i.test(code)) {
		output = "gray33";
	} else if(/575757/i.test(code)) {
		output = "gray34";
	} else if(/595959/i.test(code)) {
		output = "gray35";
	} else if(/5c5c5c/i.test(code)) {
		output = "gray36";
	} else if(/5e5e5e/i.test(code)) {
		output = "gray37";
	} else if(/616161/i.test(code)) {
		output = "gray38";
	} else if(/636363/i.test(code)) {
		output = "gray39";
	} else if(/666666/i.test(code)) {
		output = "gray40";
	} else if(/696969/i.test(code)) {
		output = "gray41";
	} else if(/6b6b6b/i.test(code)) {
		output = "gray42";
	} else if(/6e6e6e/i.test(code)) {
		output = "gray43";
	} else if(/707070/i.test(code)) {
		output = "gray44";
	} else if(/737373/i.test(code)) {
		output = "gray45";
	} else if(/757575/i.test(code)) {
		output = "gray46";
	} else if(/787878/i.test(code)) {
		output = "gray47";
	} else if(/7a7a7a/i.test(code)) {
		output = "gray48";
	} else if(/7d7d7d/i.test(code)) {
		output = "gray49";
	} else if(/7f7f7f/i.test(code)) {
		output = "gray50";
	} else if(/828282/i.test(code)) {
		output = "gray51";
	} else if(/858585/i.test(code)) {
		output = "gray52";
	} else if(/878787/i.test(code)) {
		output = "gray53";
	} else if(/8a8a8a/i.test(code)) {
		output = "gray54";
	} else if(/8c8c8c/i.test(code)) {
		output = "gray55";
	} else if(/8f8f8f/i.test(code)) {
		output = "gray56";
	} else if(/919191/i.test(code)) {
		output = "gray57";
	} else if(/949494/i.test(code)) {
		output = "gray58";
	} else if(/969696/i.test(code)) {
		output = "gray59";
	} else if(/999999/i.test(code)) {
		output = "gray60";
	} else if(/9c9c9c/i.test(code)) {
		output = "gray61";
	} else if(/9e9e9e/i.test(code)) {
		output = "gray62";
	} else if(/a1a1a1/i.test(code)) {
		output = "gray63";
	} else if(/a3a3a3/i.test(code)) {
		output = "gray64";
	} else if(/a6a6a6/i.test(code)) {
		output = "gray65";
	} else if(/a8a8a8/i.test(code)) {
		output = "gray66";
	} else if(/ababab/i.test(code)) {
		output = "gray67";
	} else if(/adadad/i.test(code)) {
		output = "gray68";
	} else if(/b0b0b0/i.test(code)) {
		output = "gray69";
	} else if(/b3b3b3/i.test(code)) {
		output = "gray70";
	} else if(/b5b5b5/i.test(code)) {
		output = "gray71";
	} else if(/b8b8b8/i.test(code)) {
		output = "gray72";
	} else if(/bababa/i.test(code)) {
		output = "gray73";
	} else if(/bdbdbd/i.test(code)) {
		output = "gray74";
	} else if(/bfbfbf/i.test(code)) {
		output = "gray75";
	} else if(/c2c2c2/i.test(code)) {
		output = "gray76";
	} else if(/c4c4c4/i.test(code)) {
		output = "gray77";
	} else if(/c7c7c7/i.test(code)) {
		output = "gray78";
	} else if(/c9c9c9/i.test(code)) {
		output = "gray79";
	} else if(/cccccc/i.test(code)) {
		output = "gray80";
	} else if(/cfcfcf/i.test(code)) {
		output = "gray81";
	} else if(/d1d1d1/i.test(code)) {
		output = "gray82";
	} else if(/d4d4d4/i.test(code)) {
		output = "gray83";
	} else if(/d6d6d6/i.test(code)) {
		output = "gray84";
	} else if(/d9d9d9/i.test(code)) {
		output = "gray85";
	} else if(/dbdbdb/i.test(code)) {
		output = "gray86";
	} else if(/dedede/i.test(code)) {
		output = "gray87";
	} else if(/e0e0e0/i.test(code)) {
		output = "gray88";
	} else if(/e3e3e3/i.test(code)) {
		output = "gray89";
	} else if(/e5e5e5/i.test(code)) {
		output = "gray90";
	} else if(/e8e8e8/i.test(code)) {
		output = "gray91";
	} else if(/ebebeb/i.test(code)) {
		output = "gray92";
	} else if(/ededed/i.test(code)) {
		output = "gray93";
	} else if(/f0f0f0/i.test(code)) {
		output = "gray94";
	} else if(/f2f2f2/i.test(code)) {
		output = "gray95";
	} else if(/f7f7f7/i.test(code)) {
		output = "gray97";
	} else if(/fafafa/i.test(code)) {
		output = "gray98";
	} else if(/fcfcfc/i.test(code)) {
		output = "gray99";
	} else if(/00ff00/i.test(code)) {
		output = "green1";
	} else if(/00ee00/i.test(code)) {
		output = "green2";
	} else if(/00cd00/i.test(code)) {
		output = "green3";
	} else if(/008b00/i.test(code)) {
		output = "green4";
	} else if(/adff2f/i.test(code)) {
		output = "greenyellow";
	} else if(/f0fff0/i.test(code)) {
		output = "honeydew1";
	} else if(/e0eee0/i.test(code)) {
		output = "honeydew2";
	} else if(/c1cdc1/i.test(code)) {
		output = "honeydew3";
	} else if(/838b83/i.test(code)) {
		output = "honeydew4";
	} else if(/ff69b4/i.test(code)) {
		output = "hotpink";
	} else if(/ff6eb4/i.test(code)) {
		output = "hotpink1";
	} else if(/ee6aa7/i.test(code)) {
		output = "hotpink2";
	} else if(/cd6090/i.test(code)) {
		output = "hotpink3";
	} else if(/8b3a62/i.test(code)) {
		output = "hotpink4";
	} else if(/cd5c5c/i.test(code)) {
		output = "indianred";
	} else if(/ff6a6a/i.test(code)) {
		output = "indianred1";
	} else if(/ee6363/i.test(code)) {
		output = "indianred2";
	} else if(/cd5555/i.test(code)) {
		output = "indianred3";
	} else if(/8b3a3a/i.test(code)) {
		output = "indianred4";
	} else if(/fffff0/i.test(code)) {
		output = "ivory1";
	} else if(/eeeee0/i.test(code)) {
		output = "ivory2";
	} else if(/cdcdc1/i.test(code)) {
		output = "ivory3";
	} else if(/8b8b83/i.test(code)) {
		output = "ivory4";
	} else if(/f0e68c/i.test(code)) {
		output = "khaki";
	} else if(/fff68f/i.test(code)) {
		output = "khaki1";
	} else if(/eee685/i.test(code)) {
		output = "khaki2";
	} else if(/cdc673/i.test(code)) {
		output = "khaki3";
	} else if(/8b864e/i.test(code)) {
		output = "khaki4";
	} else if(/e6e6fa/i.test(code)) {
		output = "lavender";
	} else if(/fff0f5/i.test(code)) {
		output = "lavenderblush1";
	} else if(/eee0e5/i.test(code)) {
		output = "lavenderblush2";
	} else if(/cdc1c5/i.test(code)) {
		output = "lavenderblush3";
	} else if(/8b8386/i.test(code)) {
		output = "lavenderblush4";
	} else if(/7cfc00/i.test(code)) {
		output = "lawngreen";
	} else if(/fffacd/i.test(code)) {
		output = "lemonchiffon1";
	} else if(/eee9bf/i.test(code)) {
		output = "lemonchiffon2";
	} else if(/cdc9a5/i.test(code)) {
		output = "lemonchiffon3";
	} else if(/8b8970/i.test(code)) {
		output = "lemonchiffon4";
	} else if(/eedd82/i.test(code)) {
		output = "light";
	} else if(/add8e6/i.test(code)) {
		output = "lightblue";
	} else if(/bfefff/i.test(code)) {
		output = "lightblue1";
	} else if(/b2dfee/i.test(code)) {
		output = "lightblue2";
	} else if(/9ac0cd/i.test(code)) {
		output = "lightblue3";
	} else if(/68838b/i.test(code)) {
		output = "lightblue4";
	} else if(/f08080/i.test(code)) {
		output = "lightcoral";
	} else if(/e0ffff/i.test(code)) {
		output = "lightcyan1";
	} else if(/d1eeee/i.test(code)) {
		output = "lightcyan2";
	} else if(/b4cdcd/i.test(code)) {
		output = "lightcyan3";
	} else if(/7a8b8b/i.test(code)) {
		output = "lightcyan4";
	} else if(/ffec8b/i.test(code)) {
		output = "lightgoldenrod1";
	} else if(/eedc82/i.test(code)) {
		output = "lightgoldenrod2";
	} else if(/cdbe70/i.test(code)) {
		output = "lightgoldenrod3";
	} else if(/8b814c/i.test(code)) {
		output = "lightgoldenrod4";
	} else if(/fafad2/i.test(code)) {
		output = "lightgoldenrodyellow";
	} else if(/d3d3d3/i.test(code)) {
		output = "lightgray";
	} else if(/ffb6c1/i.test(code)) {
		output = "lightpink";
	} else if(/ffaeb9/i.test(code)) {
		output = "lightpink1";
	} else if(/eea2ad/i.test(code)) {
		output = "lightpink2";
	} else if(/cd8c95/i.test(code)) {
		output = "lightpink3";
	} else if(/8b5f65/i.test(code)) {
		output = "lightpink4";
	} else if(/ffa07a/i.test(code)) {
		output = "lightsalmon1";
	} else if(/ee9572/i.test(code)) {
		output = "lightsalmon2";
	} else if(/cd8162/i.test(code)) {
		output = "lightsalmon3";
	} else if(/8b5742/i.test(code)) {
		output = "lightsalmon4";
	} else if(/20b2aa/i.test(code)) {
		output = "lightseagreen";
	} else if(/87cefa/i.test(code)) {
		output = "lightskyblue";
	} else if(/b0e2ff/i.test(code)) {
		output = "lightskyblue1";
	} else if(/a4d3ee/i.test(code)) {
		output = "lightskyblue2";
	} else if(/8db6cd/i.test(code)) {
		output = "lightskyblue3";
	} else if(/607b8b/i.test(code)) {
		output = "lightskyblue4";
	} else if(/8470ff/i.test(code)) {
		output = "lightslateblue";
	} else if(/778899/i.test(code)) {
		output = "lightslategray";
	} else if(/b0c4de/i.test(code)) {
		output = "lightsteelblue";
	} else if(/cae1ff/i.test(code)) {
		output = "lightsteelblue1";
	} else if(/bcd2ee/i.test(code)) {
		output = "lightsteelblue2";
	} else if(/a2b5cd/i.test(code)) {
		output = "lightsteelblue3";
	} else if(/6e7b8b/i.test(code)) {
		output = "lightsteelblue4";
	} else if(/ffffe0/i.test(code)) {
		output = "lightyellow1";
	} else if(/eeeed1/i.test(code)) {
		output = "lightyellow2";
	} else if(/cdcdb4/i.test(code)) {
		output = "lightyellow3";
	} else if(/8b8b7a/i.test(code)) {
		output = "lightyellow4";
	} else if(/32cd32/i.test(code)) {
		output = "limegreen";
	} else if(/faf0e6/i.test(code)) {
		output = "linen";
	} else if(/ff00ff/i.test(code)) {
		output = "magenta";
	} else if(/ee00ee/i.test(code)) {
		output = "magenta2";
	} else if(/cd00cd/i.test(code)) {
		output = "magenta3";
	} else if(/8b008b/i.test(code)) {
		output = "magenta4";
	} else if(/b03060/i.test(code)) {
		output = "maroon";
	} else if(/ff34b3/i.test(code)) {
		output = "maroon1";
	} else if(/ee30a7/i.test(code)) {
		output = "maroon2";
	} else if(/cd2990/i.test(code)) {
		output = "maroon3";
	} else if(/8b1c62/i.test(code)) {
		output = "maroon4";
	} else if(/66cdaa/i.test(code)) {
		output = "medium";
	} else if(/66cdaa/i.test(code)) {
		output = "mediumaquamarine";
	} else if(/0000cd/i.test(code)) {
		output = "mediumblue";
	} else if(/ba55d3/i.test(code)) {
		output = "mediumorchid";
	} else if(/e066ff/i.test(code)) {
		output = "mediumorchid1";
	} else if(/d15fee/i.test(code)) {
		output = "mediumorchid2";
	} else if(/b452cd/i.test(code)) {
		output = "mediumorchid3";
	} else if(/7a378b/i.test(code)) {
		output = "mediumorchid4";
	} else if(/9370db/i.test(code)) {
		output = "mediumpurple";
	} else if(/ab82ff/i.test(code)) {
		output = "mediumpurple1";
	} else if(/9f79ee/i.test(code)) {
		output = "mediumpurple2";
	} else if(/8968cd/i.test(code)) {
		output = "mediumpurple3";
	} else if(/5d478b/i.test(code)) {
		output = "mediumpurple4";
	} else if(/3cb371/i.test(code)) {
		output = "mediumseagreen";
	} else if(/7b68ee/i.test(code)) {
		output = "mediumslateblue";
	} else if(/00fa9a/i.test(code)) {
		output = "mediumspringgreen";
	} else if(/48d1cc/i.test(code)) {
		output = "mediumturquoise";
	} else if(/c71585/i.test(code)) {
		output = "mediumvioletred";
	} else if(/191970/i.test(code)) {
		output = "midnightblue";
	} else if(/f5fffa/i.test(code)) {
		output = "mintcream";
	} else if(/ffe4e1/i.test(code)) {
		output = "mistyrose1";
	} else if(/eed5d2/i.test(code)) {
		output = "mistyrose2";
	} else if(/cdb7b5/i.test(code)) {
		output = "mistyrose3";
	} else if(/8b7d7b/i.test(code)) {
		output = "mistyrose4";
	} else if(/ffe4b5/i.test(code)) {
		output = "moccasin";
	} else if(/ffdead/i.test(code)) {
		output = "navajowhite1";
	} else if(/eecfa1/i.test(code)) {
		output = "navajowhite2";
	} else if(/cdb38b/i.test(code)) {
		output = "navajowhite3";
	} else if(/8b795e/i.test(code)) {
		output = "navajowhite4";
	} else if(/000080/i.test(code)) {
		output = "navyblue";
	} else if(/fdf5e6/i.test(code)) {
		output = "oldlace";
	} else if(/6b8e23/i.test(code)) {
		output = "olivedrab";
	} else if(/c0ff3e/i.test(code)) {
		output = "olivedrab1";
	} else if(/b3ee3a/i.test(code)) {
		output = "olivedrab2";
	} else if(/698b22/i.test(code)) {
		output = "olivedrab4";
	} else if(/ffa500/i.test(code)) {
		output = "orange1";
	} else if(/ee9a00/i.test(code)) {
		output = "orange2";
	} else if(/cd8500/i.test(code)) {
		output = "orange3";
	} else if(/8b5a00/i.test(code)) {
		output = "orange4";
	} else if(/ff4500/i.test(code)) {
		output = "orangered1";
	} else if(/ee4000/i.test(code)) {
		output = "orangered2";
	} else if(/cd3700/i.test(code)) {
		output = "orangered3";
	} else if(/8b2500/i.test(code)) {
		output = "orangered4";
	} else if(/da70d6/i.test(code)) {
		output = "orchid";
	} else if(/ff83fa/i.test(code)) {
		output = "orchid1";
	} else if(/ee7ae9/i.test(code)) {
		output = "orchid2";
	} else if(/cd69c9/i.test(code)) {
		output = "orchid3";
	} else if(/8b4789/i.test(code)) {
		output = "orchid4";
	} else if(/db7093/i.test(code)) {
		output = "pale";
	} else if(/eee8aa/i.test(code)) {
		output = "palegoldenrod";
	} else if(/98fb98/i.test(code)) {
		output = "palegreen";
	} else if(/9aff9a/i.test(code)) {
		output = "palegreen1";
	} else if(/90ee90/i.test(code)) {
		output = "palegreen2";
	} else if(/7ccd7c/i.test(code)) {
		output = "palegreen3";
	} else if(/548b54/i.test(code)) {
		output = "palegreen4";
	} else if(/afeeee/i.test(code)) {
		output = "paleturquoise";
	} else if(/bbffff/i.test(code)) {
		output = "paleturquoise1";
	} else if(/aeeeee/i.test(code)) {
		output = "paleturquoise2";
	} else if(/96cdcd/i.test(code)) {
		output = "paleturquoise3";
	} else if(/668b8b/i.test(code)) {
		output = "paleturquoise4";
	} else if(/db7093/i.test(code)) {
		output = "palevioletred";
	} else if(/ff82ab/i.test(code)) {
		output = "palevioletred1";
	} else if(/ee799f/i.test(code)) {
		output = "palevioletred2";
	} else if(/cd6889/i.test(code)) {
		output = "palevioletred3";
	} else if(/8b475d/i.test(code)) {
		output = "palevioletred4";
	} else if(/ffefd5/i.test(code)) {
		output = "papayawhip";
	} else if(/ffdab9/i.test(code)) {
		output = "peachpuff1";
	} else if(/eecbad/i.test(code)) {
		output = "peachpuff2";
	} else if(/cdaf95/i.test(code)) {
		output = "peachpuff3";
	} else if(/8b7765/i.test(code)) {
		output = "peachpuff4";
	} else if(/ffc0cb/i.test(code)) {
		output = "pink";
	} else if(/ffb5c5/i.test(code)) {
		output = "pink1";
	} else if(/eea9b8/i.test(code)) {
		output = "pink2";
	} else if(/cd919e/i.test(code)) {
		output = "pink3";
	} else if(/8b636c/i.test(code)) {
		output = "pink4";
	} else if(/dda0dd/i.test(code)) {
		output = "plum";
	} else if(/ffbbff/i.test(code)) {
		output = "plum1";
	} else if(/eeaeee/i.test(code)) {
		output = "plum2";
	} else if(/cd96cd/i.test(code)) {
		output = "plum3";
	} else if(/8b668b/i.test(code)) {
		output = "plum4";
	} else if(/b0e0e6/i.test(code)) {
		output = "powderblue";
	} else if(/a020f0/i.test(code)) {
		output = "purple";
	} else if(/9b30ff/i.test(code)) {
		output = "purple1";
	} else if(/912cee/i.test(code)) {
		output = "purple2";
	} else if(/7d26cd/i.test(code)) {
		output = "purple3";
	} else if(/551a8b/i.test(code)) {
		output = "purple4";
	} else if(/ff0000/i.test(code)) {
		output = "red1";
	} else if(/ee0000/i.test(code)) {
		output = "red2";
	} else if(/cd0000/i.test(code)) {
		output = "red3";
	} else if(/8b0000/i.test(code)) {
		output = "red4";
	} else if(/bc8f8f/i.test(code)) {
		output = "rosybrown";
	} else if(/ffc1c1/i.test(code)) {
		output = "rosybrown1";
	} else if(/eeb4b4/i.test(code)) {
		output = "rosybrown2";
	} else if(/cd9b9b/i.test(code)) {
		output = "rosybrown3";
	} else if(/8b6969/i.test(code)) {
		output = "rosybrown4";
	} else if(/4169e1/i.test(code)) {
		output = "royalblue";
	} else if(/4876ff/i.test(code)) {
		output = "royalblue1";
	} else if(/436eee/i.test(code)) {
		output = "royalblue2";
	} else if(/3a5fcd/i.test(code)) {
		output = "royalblue3";
	} else if(/27408b/i.test(code)) {
		output = "royalblue4";
	} else if(/8b4513/i.test(code)) {
		output = "saddlebrown";
	} else if(/fa8072/i.test(code)) {
		output = "salmon";
	} else if(/ff8c69/i.test(code)) {
		output = "salmon1";
	} else if(/ee8262/i.test(code)) {
		output = "salmon2";
	} else if(/cd7054/i.test(code)) {
		output = "salmon3";
	} else if(/8b4c39/i.test(code)) {
		output = "salmon4";
	} else if(/f4a460/i.test(code)) {
		output = "sandybrown";
	} else if(/54ff9f/i.test(code)) {
		output = "seagreen1";
	} else if(/4eee94/i.test(code)) {
		output = "seagreen2";
	} else if(/43cd80/i.test(code)) {
		output = "seagreen3";
	} else if(/2e8b57/i.test(code)) {
		output = "seagreen4";
	} else if(/fff5ee/i.test(code)) {
		output = "seashell1";
	} else if(/eee5de/i.test(code)) {
		output = "seashell2";
	} else if(/cdc5bf/i.test(code)) {
		output = "seashell3";
	} else if(/8b8682/i.test(code)) {
		output = "seashell4";
	} else if(/a0522d/i.test(code)) {
		output = "sienna";
	} else if(/ff8247/i.test(code)) {
		output = "sienna1";
	} else if(/ee7942/i.test(code)) {
		output = "sienna2";
	} else if(/cd6839/i.test(code)) {
		output = "sienna3";
	} else if(/8b4726/i.test(code)) {
		output = "sienna4";
	} else if(/87ceeb/i.test(code)) {
		output = "skyblue";
	} else if(/87ceff/i.test(code)) {
		output = "skyblue1";
	} else if(/7ec0ee/i.test(code)) {
		output = "skyblue2";
	} else if(/6ca6cd/i.test(code)) {
		output = "skyblue3";
	} else if(/4a708b/i.test(code)) {
		output = "skyblue4";
	} else if(/6a5acd/i.test(code)) {
		output = "slateblue";
	} else if(/836fff/i.test(code)) {
		output = "slateblue1";
	} else if(/7a67ee/i.test(code)) {
		output = "slateblue2";
	} else if(/6959cd/i.test(code)) {
		output = "slateblue3";
	} else if(/473c8b/i.test(code)) {
		output = "slateblue4";
	} else if(/708090/i.test(code)) {
		output = "slategray";
	} else if(/c6e2ff/i.test(code)) {
		output = "slategray1";
	} else if(/b9d3ee/i.test(code)) {
		output = "slategray2";
	} else if(/9fb6cd/i.test(code)) {
		output = "slategray3";
	} else if(/6c7b8b/i.test(code)) {
		output = "slategray4";
	} else if(/fffafa/i.test(code)) {
		output = "snow1";
	} else if(/eee9e9/i.test(code)) {
		output = "snow2";
	} else if(/cdc9c9/i.test(code)) {
		output = "snow3";
	} else if(/8b8989/i.test(code)) {
		output = "snow4";
	} else if(/00ff7f/i.test(code)) {
		output = "springgreen1";
	} else if(/00ee76/i.test(code)) {
		output = "springgreen2";
	} else if(/00cd66/i.test(code)) {
		output = "springgreen3";
	} else if(/008b45/i.test(code)) {
		output = "springgreen4";
	} else if(/4682b4/i.test(code)) {
		output = "steelblue";
	} else if(/63b8ff/i.test(code)) {
		output = "steelblue1";
	} else if(/5cacee/i.test(code)) {
		output = "steelblue2";
	} else if(/4f94cd/i.test(code)) {
		output = "steelblue3";
	} else if(/36648b/i.test(code)) {
		output = "steelblue4";
	} else if(/d2b48c/i.test(code)) {
		output = "tan";
	} else if(/ffa54f/i.test(code)) {
		output = "tan1";
	} else if(/ee9a49/i.test(code)) {
		output = "tan2";
	} else if(/cd853f/i.test(code)) {
		output = "tan3";
	} else if(/8b5a2b/i.test(code)) {
		output = "tan4";
	} else if(/d8bfd8/i.test(code)) {
		output = "thistle";
	} else if(/ffe1ff/i.test(code)) {
		output = "thistle1";
	} else if(/eed2ee/i.test(code)) {
		output = "thistle2";
	} else if(/cdb5cd/i.test(code)) {
		output = "thistle3";
	} else if(/8b7b8b/i.test(code)) {
		output = "thistle4";
	} else if(/ff6347/i.test(code)) {
		output = "tomato1";
	} else if(/ee5c42/i.test(code)) {
		output = "tomato2";
	} else if(/cd4f39/i.test(code)) {
		output = "tomato3";
	} else if(/8b3626/i.test(code)) {
		output = "tomato4";
	} else if(/40e0d0/i.test(code)) {
		output = "turquoise";
	} else if(/00f5ff/i.test(code)) {
		output = "turquoise1";
	} else if(/00e5ee/i.test(code)) {
		output = "turquoise2";
	} else if(/00c5cd/i.test(code)) {
		output = "turquoise3";
	} else if(/00868b/i.test(code)) {
		output = "turquoise4";
	} else if(/ee82ee/i.test(code)) {
		output = "violet";
	} else if(/d02090/i.test(code)) {
		output = "violetred";
	} else if(/ff3e96/i.test(code)) {
		output = "violetred1";
	} else if(/ee3a8c/i.test(code)) {
		output = "violetred2";
	} else if(/cd3278/i.test(code)) {
		output = "violetred3";
	} else if(/8b2252/i.test(code)) {
		output = "violetred4";
	} else if(/f5deb3/i.test(code)) {
		output = "wheat";
	} else if(/ffe7ba/i.test(code)) {
		output = "wheat1";
	} else if(/eed8ae/i.test(code)) {
		output = "wheat2";
	} else if(/cdba96/i.test(code)) {
		output = "wheat3";
	} else if(/8b7e66/i.test(code)) {
		output = "wheat4";
	} else if(/ffffff/i.test(code)) {
		output = "white";
	} else if(/f5f5f5/i.test(code)) {
		output = "whitesmoke";
	} else if(/ffff00/i.test(code)) {
		output = "yellow1";
	} else if(/eeee00/i.test(code)) {
		output = "yellow2";
	} else if(/cdcd00/i.test(code)) {
		output = "yellow3";
	} else if(/8b8b00/i.test(code)) {
		output = "yellow4";
	} else if(/9acd32/i.test(code)) {
		output = "yellowgreen";
	} else {
		output = code;
	}

	return output;
}
