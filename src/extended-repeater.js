        module.exports = function repeater(str, options) {
            let resultStr = '';
            let addition = '';
            let separator = '+';
            let repeatTimes = 1; 
            let additionSeparator = '|';
            let additionRepeatTimes = 1;
            
            resultStr = (typeof str !== 'string') ? String(str) : str;
              
            for (const [option, value] of Object.entries(options)) {
                switch (option) {
                    case 'addition': {
                        addition = (typeof value !== 'string') ? 
                        String(value) : value;
                        break;
                    }
                    case 'additionSeparator': {
                        additionSeparator =  (typeof value !== 'undefined') ? value : '|';
                        break;
                    }
                    case 'separator': {
                        separator = (typeof value !== 'undefined') ? String(value) : '+';
                        break;
                    }
                    case 'additionRepeatTimes': {
                        additionRepeatTimes = (typeof value !== 'undefined') ? 
                            value : 1; 
                        break;
                    }
                    case 'repeatTimes': {
                        repeatTimes = (typeof value !== 'undefined') ? 
                        value : 1;
                        break;
                    }
                }
            }

        console.log('str - ', str);
        console.log('addition - ', addition);
        console.log('additionSeparator - ', additionSeparator);
        console.log('separator - ', separator);
        console.log('additionRepeatTimes - ', additionRepeatTimes);
        console.log('repeatTimes - ', repeatTimes);
            
        if (repeatTimes === 1) {
                resultStr = 
                    (additionRepeatTimes === 1) ? 
                    (resultStr + addition) : 
                    resultStr + (addition + additionSeparator).repeat(additionRepeatTimes).slice(0, -additionSeparator.length);
            } 
        if (repeatTimes !== 1) {
                resultStr = 
                (additionRepeatTimes === 1) ? 
                (resultStr + addition + separator).repeat(repeatTimes).slice(0, -separator.length) : 
                (resultStr + (addition + additionSeparator).repeat(additionRepeatTimes).slice(0, -additionSeparator.length) + separator)
                .repeat(repeatTimes).slice(0, -separator.length);
            }
            return resultStr;
        };