[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fjym0404%2FStringChangeAnimation&count_bg=%23043BB5&title_bg=%23000000&icon=&icon_color=%23FFFFFF&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)
# StringChangeAnimation
This repository contains a JavaScript file containing a function that allows you to perform a text changing animation on a raw string.

## Usage
This JS file adds only one function.
```javascript
strAnimate(callback, oldText, newText, reverse[Optional], delay[Optional], spaceChar[Optional])
```
As you can see, the function accepts the following parameters:
1. **callback `(function)`:** A function that will be executed in the strAnimate function. It should take one argument and overwrite the text you want to change to the given argument.

2. **oldText `(string)`:** A original string.

3. **newText `(string)`:** A new string, which you want to replace.

4. reverse `(boolean)[Optional]` : Animation goes reverse when it's true. Default value is `false`.

5. delay `(integer)[Optional]`: The time between one letter change and the next (as milliseconds). Default value is `30`.

6. spaceChar `(string)[Optional]`: A space character used when newText is shorter than oldText. Default value is ` `(nbsp)

## Example
```javascript
strAnimate(
    function(input){
        document.getElementById('textBox').innerText = input
    },
    document.getElementById('textBox').innerText,
    "Lorem ipsum dolor sit amet"
)
```
In this example, the function will change the **innerText of the textBox** to **Lorem ipsum dolor sit amet**.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License
This project is licensed under the MIT License. See the [LICENSE](https://github.com/jym0404/StringChangeAnimation/blob/main/LICENSE.md) file for details.