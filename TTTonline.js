﻿threeFront.classList.add("clickedColor");
sixFront.classList.add("clickedColor");
oneFront.classList.add("colorX");
fiveFront.classList.add("colorX");
nineFront.classList.add("colorX");
twoFront.classList.add("back");
fourFront.classList.add("back");
sevenFront.classList.add("back");
eightFront.classList.add("back");
//for (i = 0; i = 8; i++) { document.getElementById(numq[i]).disabled = true; }

function Vars() {
    numnq = [one, two, three, four, five, six, seven, eight, nine];
    numq = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    numnqFront = [oneFront, twoFront, threeFront, fourFront, fiveFront, sixFront, sevenFront, eightFront, nineFront];
    numqFront = ["oneFront", "twoFront", "threeFront", "fourFront", "fiveFront", "sixFront", "sevenFront", "eightFront", "nineFront"];
    numnqCon = [oneContainer, twoContainer, threeContainer, fourContainer, fiveContainer, sixContainer, sevenContainer, eightContainer, nineContainer];
    numqCon = ["oneContainer", "twoContainer", "threeContainer", "fourContainer", "fiveContainer", "sixContainer", "sevenContainer", "eightContainer", "nineContainer"];
    squaresStatus = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    circlesCrosses = [0, 0, 0, 0, 0, 0, 0, 0, 0];
}

input.onclick = function () {

    rT = Math.floor((Math.random() * 2) + 1);
    if (rT === 1) { Run(); }
    else { Run2(); }
}

function Run() {

    var a1, b1, c1, d1;

    Vars();

    for (i = 0; i < squaresStatus.length; i++) {
        document.getElementById(numq[i]).disabled = false;
        numnq[i].classList.remove("hoverButton"); numnq[i].classList.add("back");
    }
    whattodisable();
    input.classList.add("disappear"); input.disabled = true;
    for (i = 0; i < squaresStatus.length; i++) { numnqCon[i].classList.add("flip"); }
    setTimeout(function () {
        oneFront.value = ""; twoFront.value = ""; threeFront.value = ""; fourFront.value = ""; fiveFront.value = "";
        sixFront.value = ""; sevenFront.value = ""; eightFront.value = ""; nineFront.value = "";
    }, 250)
    setTimeout(function () {
        document.getElementById("i_text").innerHTML = "I will start:";
        for (i = 0; i < squaresStatus.length; i++) { numnqFront[i].classList.remove("clickedColor", "colorX", "back"); }
    }, 2000)
    setTimeout(function () {
        fiveFront.value = "X"; fiveContainer.classList.remove("flip"); squaresStatus[4] = 1; fiveFront.classList.add("colorX");
        document.getElementById("five").disabled = true;
    }, 3000)
    setTimeout(function () {
        document.getElementById("i_text").innerHTML = "Your turn. Click a field.";
        one.classList.add("hoverButton");
        two.classList.add("hoverButton");
        three.classList.add("hoverButton");
        four.classList.add("hoverButton");
        six.classList.add("hoverButton");
        seven.classList.add("hoverButton");
        eight.classList.add("hoverButton");
        nine.classList.add("hoverButton");
        whattoenable();
    }, 4000)
    one.onclick = function () { userClick(a1, 0, invoer1); }
    two.onclick = function () { userClick(a1, 1, invoer1); }
    three.onclick = function () { userClick(a1, 2, invoer1); }
    four.onclick = function () { userClick(a1, 3, invoer1); }
    six.onclick = function () { userClick(a1, 5, invoer1); }
    seven.onclick = function () { userClick(a1, 6, invoer1); }
    eight.onclick = function () { userClick(a1, 7, invoer1); }
    nine.onclick = function () { userClick(a1, 8, invoer1); }
    function invoer1(a) {
        whattodisable();
        setTimeout(function () { document.getElementById("i_text").innerHTML = "Thank you."; }, 1000)
        setTimeout(function () { document.getElementById("i_text").innerHTML = "My turn:"; }, 2000)
        setTimeout(function () {
            if (a === 1) { fourFront.value = "X"; fourContainer.classList.remove("flip"); squaresStatus[3] = 1; fourFront.classList.add("colorX"); four.classList.remove("hoverButton"); document.getElementById("four").disabled = true; }
            else if (a === 2) { threeFront.value = "X"; threeContainer.classList.remove("flip"); squaresStatus[2] = 1; threeFront.classList.add("colorX"); three.classList.remove("hoverButton"); document.getElementById("three").disabled = true; }
            else if (a === 3) { twoFront.value = "X"; twoContainer.classList.remove("flip"); squaresStatus[1] = 1; twoFront.classList.add("colorX"); two.classList.remove("hoverButton"); document.getElementById("two").disabled = true; }
            else if (a === 4) { oneFront.value = "X"; oneContainer.classList.remove("flip"); squaresStatus[0] = 1; oneFront.classList.add("colorX"); one.classList.remove("hoverButton"); document.getElementById("one").disabled = true; }
            else if (a === 6) { nineFront.value = "X"; nineContainer.classList.remove("flip"); squaresStatus[8] = 1; nineFront.classList.add("colorX"); nine.classList.remove("hoverButton"); document.getElementById("nine").disabled = true; }
            else if (a === 7) { eightFront.value = "X"; eightContainer.classList.remove("flip"); squaresStatus[7] = 1; eightFront.classList.add("colorX"); eight.classList.remove("hoverButton"); document.getElementById("eight").disabled = true; }
            else if (a === 8) { sevenFront.value = "X"; sevenContainer.classList.remove("flip"); squaresStatus[6] = 1; sevenFront.classList.add("colorX"); seven.classList.remove("hoverButton"); document.getElementById("seven").disabled = true; }
            else if (a === 9) { sixFront.value = "X"; sixContainer.classList.remove("flip"); squaresStatus[5] = 1; sixFront.classList.add("colorX"); six.classList.remove("hoverButton"); document.getElementById("six").disabled = true; }
        }, 3000)
        setTimeout(function () { document.getElementById("i_text").innerHTML = "Your turn."; whattoenable(); }, 4000)
        one.onclick = function () { userClick(b1, 0, invoer2); }
        two.onclick = function () { userClick(b1, 1, invoer2); }
        three.onclick = function () { userClick(b1, 2, invoer2); }
        four.onclick = function () { userClick(b1, 3, invoer2); }
        six.onclick = function () { userClick(b1, 5, invoer2); }
        seven.onclick = function () { userClick(b1, 6, invoer2); }
        eight.onclick = function () { userClick(b1, 7, invoer2); }
        nine.onclick = function () { userClick(b1, 8, invoer2); }
        function invoer2(b) {
            whattodisable();
            setTimeout(function () { document.getElementById("i_text").innerHTML = "My turn:"; }, 1000)
            if (a === 1 && b === 6) {
                setTimeout(function () { twoFront.value = "X"; twoContainer.classList.remove("flip"); squaresStatus[1] = 1; twoFront.classList.add("colorX"); two.classList.remove("hoverButton"); document.getElementById("two").disabled = true; }, 2000)
                setTimeout(function () { document.getElementById("i_text").innerHTML = "Your turn."; whattoenable() }, 3000)
                three.onclick = function () { userClick(c1, 2, invoer3); }
                four.onclick = function () { userClick(c1, 3, invoer3); }
                seven.onclick = function () { userClick(c1, 6, invoer3); }
                eight.onclick = function () { userClick(c1, 7, invoer3); }
                nine.onclick = function () { userClick(c1, 8, invoer3); }
                function invoer3(c) {
                    whattodisable()
                    if (c === 8) {
                        setTimeout(function () { document.getElementById("i_text").innerHTML = "My turn:"; }, 1000)
                        setTimeout(function () { threeFront.value = "X"; threeContainer.classList.remove("flip"); squaresStatus[1] = 1; threeFront.classList.add("colorX"); three.classList.remove("hoverButton"); document.getElementById("three").disabled = true; }, 2000)
                        setTimeout(function () {
                            document.getElementById("i_text").innerHTML = "Your turn.";
                            whattoenable();
                        }, 3000)
                        seven.onclick = function () { userClick(d1, 6, invoer4); }
                        nine.onclick = function () { userClick(d1, 8, invoer4); }
                        function invoer4(d) {
                            whattodisable();
                            if (d === 7) { draw(); }
                            else if (d === 9) { lose2(1); }
                        }
                    }
                    else { lose2(2); }
                }
            }
            else if (a === 3 && b === 8) {
                setTimeout(function () { sixFront.value = "X"; sixContainer.classList.remove("flip"); squaresStatus[5] = 1; sixFront.classList.add("colorX"); six.classList.remove("hoverButton"); document.getElementById("six").disabled = true; }, 2000)
                setTimeout(function () { document.getElementById("i_text").innerHTML = "Your turn."; whattoenable(); }, 3000)
                one.onclick = function () { userClick(c1, 0, invoer3); }
                two.onclick = function () { userClick(c1, 1, invoer3); }
                four.onclick = function () { userClick(c1, 3, invoer3); }
                seven.onclick = function () { userClick(c1, 6, invoer3); }
                nine.onclick = function () { userClick(c1, 8, invoer3); }
                function invoer3(c) {
                    whattodisable();
                    if (c === 4) {
                        setTimeout(function () { document.getElementById("i_text").innerHTML = "My turn:"; }, 1000)
                        setTimeout(function () { nineFront.value = "X"; nineContainer.classList.remove("flip"); squaresStatus[1] = 1; nineFront.classList.add("colorX"); nine.classList.remove("hoverButton"); document.getElementById("nine").disabled = true; }, 2000)
                        setTimeout(function () { document.getElementById("i_text").innerHTML = "Your turn."; whattoenable(); }, 3000)
                        one.onclick = function () { userClick(d1, 0, invoer4); }
                        seven.onclick = function () { userClick(d1, 6, invoer4); }
                        function invoer4(d) {
                            whattodisable();
                            if (d === 1) { draw(); }
                            else if (d === 7) { lose2(5); }
                        }
                    }
                    else { lose2(8); }
                }
            }
            else if (a === 7 && b === 2) {
                setTimeout(function () { fourFront.value = "X"; fourContainer.classList.remove("flip"); squaresStatus[3] = 1; fourFront.classList.add("colorX"); four.classList.remove("hoverButton"); document.getElementById("four").disabled = true; }, 2000)
                setTimeout(function () { document.getElementById("i_text").innerHTML = "Your turn."; whattoenable(); }, 3000)
                one.onclick = function () { userClick(c1, 0, invoer3); }
                three.onclick = function () { userClick(c1, 2, invoer3); }
                six.onclick = function () { userClick(c1, 5, invoer3); }
                eight.onclick = function () { userClick(c1, 7, invoer3); }
                nine.onclick = function () { userClick(c1, 8, invoer3); }
                function invoer3(c) {
                    whattodisable();
                    if (c === 6) {
                        setTimeout(function () { document.getElementById("i_text").innerHTML = "My turn:"; }, 1000)
                        setTimeout(function () { oneFront.value = "X"; oneContainer.classList.remove("flip"); squaresStatus[1] = 1; oneFront.classList.add("colorX"); one.classList.remove("hoverButton"); document.getElementById("one").disabled = true; }, 2000)
                        setTimeout(function () { document.getElementById("i_text").innerHTML = "Your turn."; whattoenable(); }, 3000)
                        three.onclick = function () { userClick(d1, 2, invoer4); }
                        nine.onclick = function () { userClick(d1, 8, invoer4); }
                        function invoer4(d) {
                            whattodisable();
                            if (d === 9) { draw(); }
                            else if (d === 3) { lose2(3); }
                        }
                    }
                    else { lose2(0); }
                }
            }
            else if (a === 9 && b === 4) {
                setTimeout(function () { eightFront.value = "X"; eightContainer.classList.remove("flip"); squaresStatus[7] = 1; eightFront.classList.add("colorX"); eight.classList.remove("hoverButton"); document.getElementById("eight").disabled = true; }, 2000)
                setTimeout(function () { document.getElementById("i_text").innerHTML = "Your turn."; whattoenable(); }, 3000)
                one.onclick = function () { userClick(c1, 0, invoer3); }
                two.onclick = function () { userClick(c1, 1, invoer3); }
                three.onclick = function () { userClick(c1, 2, invoer3); }
                six.onclick = function () { userClick(c1, 5, invoer3); }
                seven.onclick = function () { userClick(c1, 6, invoer3); }
                function invoer3(c) {
                    whattodisable();
                    if (c === 2) {
                        setTimeout(function () { document.getElementById("i_text").innerHTML = "My turn:"; }, 1000)
                        setTimeout(function () { sevenFront.value = "X"; sevenContainer.classList.remove("flip"); squaresStatus[1] = 1; sevenFront.classList.add("colorX"); seven.classList.remove("hoverButton"); document.getElementById("seven").disabled = true; }, 2000)
                        setTimeout(function () { document.getElementById("i_text").innerHTML = "Your turn."; whattoenable(); }, 3000)
                        one.onclick = function () { userClick(d1, 0, invoer4); }
                        three.onclick = function () { userClick(d1, 2, invoer4); }
                        function invoer4(d) {
                            whattodisable();
                            if (d === 3) { draw(); }
                            else if (d === 1) { lose2(7); }
                        }
                    }
                    else { lose2(6); }
                }
            }
            else if (a === 2 && b === 7) {
                setTimeout(function () { sixFront.value = "X"; sixContainer.classList.remove("flip"); squaresStatus[5] = 1; sixFront.classList.add("colorX"); six.classList.remove("hoverButton"); document.getElementById("six").disabled = true; }, 2000)
                setTimeout(function () { document.getElementById("i_text").innerHTML = "Your turn."; whattoenable(); }, 3000)
                one.onclick = function () { userClick(c1, 0, invoer3); }
                three.onclick = function () { userClick(c1, 2, invoer3); }
                four.onclick = function () { userClick(c1, 3, invoer3); }
                six.onclick = function () { userClick(c1, 5, invoer3); }
                eight.onclick = function () { userClick(c1, 7, invoer3); }
                nine.onclick = function () { userClick(c1, 8, invoer3); }
                function invoer3(c) {
                    whattodisable();
                    if (c === 4) { lose2(c - 1); }
                    else if (c === 9) { lose2(c - 1); }
                    else { lose2(8); }
                }
            }
            else if (a === 4 && b === 9) {
                setTimeout(function () { twoFront.value = "X"; twoContainer.classList.remove("flip"); squaresStatus[1] = 1; twoFront.classList.add("colorX"); two.classList.remove("hoverButton"); document.getElementById("two").disabled = true; }, 2000)
                setTimeout(function () { document.getElementById("i_text").innerHTML = "Your turn."; whattoenable(); }, 3000)
                one.onclick = function () { userClick(c1, 0, invoer3); }
                three.onclick = function () { userClick(c1, 2, invoer3); }
                six.onclick = function () { userClick(c1, 5, invoer3); }
                seven.onclick = function () { userClick(c1, 6, invoer3); }
                eight.onclick = function () { userClick(c1, 7, invoer3); }
                function invoer3(c) {
                    whattodisable();
                    if (c === 3) { lose2(c - 1); }
                    else if (c === 8) { lose2(c - 1); }
                    else { lose2(2); }
                }
            }
            else if (a === 6 && b === 1) {
                setTimeout(function () { eightFront.value = "X"; eightContainer.classList.remove("flip"); squaresStatus[7] = 1; eightFront.classList.add("colorX"); eight.classList.remove("hoverButton"); document.getElementById("eight").disabled = true; }, 2000)
                setTimeout(function () { document.getElementById("i_text").innerHTML = "Your turn."; whattoenable(); }, 3000)
                two.onclick = function () { userClick(c1, 1, invoer3); }
                three.onclick = function () { userClick(c1, 2, invoer3); }
                four.onclick = function () { userClick(c1, 3, invoer3); }
                seven.onclick = function () { userClick(c1, 6, invoer3); }
                nine.onclick = function () { userClick(c1, 8, invoer3); }
                function invoer3(c) {
                    whattodisable();
                    if (c === 2) { lose2(c - 1); }
                    else if (c === 7) { lose2(c - 1); }
                    else { lose2(6); }
                }
            }
            else if (a === 8 && b === 3) {
                setTimeout(function () { fourFront.value = "X"; fourContainer.classList.remove("flip"); squaresStatus[3] = 1; fourFront.classList.add("colorX"); four.classList.remove("hoverButton"); document.getElementById("four").disabled = true; }, 2000)
                setTimeout(function () { document.getElementById("i_text").innerHTML = "Your turn."; whattoenable(); }, 3000)
                one.onclick = function () { userClick(c1, 0, invoer3); }
                two.onclick = function () { userClick(c1, 1, invoer3); }
                six.onclick = function () { userClick(c1, 5, invoer3); }
                seven.onclick = function () { userClick(c1, 6, invoer3); }
                nine.onclick = function () { userClick(c1, 8, invoer3); }
                function invoer3(c) {
                    whattodisable();
                    if (c === 1) { lose2(c - 1); }
                    else if (c === 6) { lose2(c - 1); }
                    else { lose2(0); }
                }
            }
            else {
                if (oneFront.value === "X") { lose(1 - 1); }
                else if (twoFront.value === "X") { lose(2 - 1); }
                else if (threeFront.value === "X") { lose(3 - 1); }
                else if (fourFront.value === "X") { lose(4 - 1); }
                else if (sixFront.value === "X") { lose(6 - 1); }
                else if (sevenFront.value === "X") { lose(7 - 1); }
                else if (eightFront.value === "X") { lose(8 - 1); }
                else if (nineFront.value === "X") { lose(9 - 1); }
            }
        }
    }

    function userClick(cc, whichNum, invoer) {
        cc = whichNum + 1, numnqFront[whichNum].value = "O"; numnqCon[whichNum].classList.remove("flip"); squaresStatus[whichNum] = 1; numnqFront[whichNum].classList.add("clickedColor"); numnqFront[whichNum].classList.remove("hoverButton");
        document.getElementById(numqFront[whichNum]).disabled = true; invoer(cc);
    }

    function whattodisable() {
        for (i = 0; i < squaresStatus.length; i++) {
            if (document.getElementById(numq[i]).disabled === true) { squaresStatus[i] = 1; }
            if (document.getElementById(numq[i]).disabled === false) { document.getElementById(numq[i]).disabled = true; numnq[i].classList.remove("hoverButton"); }
        }
    }

    function whattoenable() {
        for (i = 0; i < squaresStatus.length; i++) {
            if (squaresStatus[i] !== 1) { document.getElementById(numq[i]).disabled = false; numnq[i].classList.add("hoverButton"); }
        }
    }

    function lose(loseNumber) {
        if (loseNumber < 4) { loseOpposite = 8 - loseNumber; }
        else if (loseNumber > 4) { loseOpposite = 8 - loseNumber; }
        setTimeout(function () { numnqFront[loseOpposite].value = "X"; numnqCon[loseOpposite].classList.remove("flip"); squaresStatus[loseOpposite] = 1; numnqFront[loseOpposite].classList.add("colorX"); numnq[loseOpposite].classList.remove("hoverButton"); document.getElementById(numq[loseOpposite]).disabled = true; }, 2000)
        setTimeout(function () { document.getElementById("i_text").innerHTML = "You lose."; }, 3000)
        setTimeout(function () { input.classList.remove("disappear"); document.getElementById("input").value = "Try again?"; input.classList.add("appear"); }, 4000)
        setTimeout(function () { input.classList.remove("disappear", "appear"); input.disabled = false; }, 6000)
        input.onclick = function () { Run2(); input.classList.add("disappear"); }

        //value for X = opposite - 1
    }

    function lose2(loseNumber) {
        if (loseNumber < 4) { loseOpposite = loseNumber + 5; }
        else if (loseNumber > 4) { loseOpposite = loseNumber - 5; }
        setTimeout(function () { document.getElementById("i_text").innerHTML = "My turn:"; }, 1000)
        setTimeout(function () { numnqFront[loseOpposite].value = "X"; numnqCon[loseOpposite].classList.remove("flip"); squaresStatus[loseOpposite] = 1; numnqFront[loseOpposite].classList.add("colorX"); numnq[loseOpposite].classList.remove("hoverButton"); document.getElementById(numq[loseOpposite]).disabled = true; }, 2000)
        setTimeout(function () { document.getElementById("i_text").innerHTML = "You lose."; }, 3000)
        setTimeout(function () { input.classList.remove("disappear"); document.getElementById("input").value = "Try again?"; input.classList.add("appear"); }, 4000)
        setTimeout(function () { input.classList.remove("disappear", "appear"); input.disabled = false; }, 6000)
        input.onclick = function () { Run2(); input.classList.add("disappear"); }

        //one = 5, two = 6, three = 7, four = 8, six = 0, seven = 1, eight = 2, nine = 3      
    }

    function draw() {
        setTimeout(function () { document.getElementById("i_text").innerHTML = "It's a draw."; }, 1000)
        setTimeout(function () { input.classList.remove("disappear"); document.getElementById("input").value = "Play again?"; input.classList.add("appear"); }, 2000)
        setTimeout(function () { input.classList.remove("disappear", "appear"); input.disabled = false; }, 4000)
        input.onclick = function () { Run2(); input.classList.add("disappear"); }
    }
}

function Run2() {

    doubleStatus = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    Vars();

    //for (i = 0; i < squaresStatus.length; i++) {
    //    document.getElementById(numq[i]).disabled = false;
    //    numnq[i].classList.remove("hoverButton"); numnq[i].classList.add("back");
    //}

    for (i = 0; i < squaresStatus.length; i++) {
        document.getElementById(numq[i]).disabled = false;
        numnq[i].classList.remove("clickedColor", "colorX", "hoverButton"); numnq[i].classList.add("back");
    }
    whattodisable();
    input.classList.add("disappear"); input.disabled = true;
    for (i = 0; i < squaresStatus.length; i++) { numnqCon[i].classList.add("flip"); }
    setTimeout(function () {
        oneFront.value = ""; twoFront.value = ""; threeFront.value = ""; fourFront.value = ""; fiveFront.value = "";
        sixFront.value = ""; sevenFront.value = ""; eightFront.value = ""; nineFront.value = "";
    }, 250)
    setTimeout(function () {
        document.getElementById("i_text").innerHTML = "You may begin. Click a field:";
        //for (i = 0; i < squaresStatus.length; i++) { numnqCon[i].classList.remove("flip"); }
        for (i = 0; i < squaresStatus.length; i++) { numnqFront[i].classList.remove("clickedColor", "colorX", "back"); numnq[i].classList.add("hoverButton"); }
        Turn();
    }, 2000)

    function Turn() {

        sumStatus = 0;

        if (squaresStatus[0] === 1 || squaresStatus[1] === 1 || squaresStatus[2] === 1 || squaresStatus[3] === 1 || squaresStatus[4] === 1 || squaresStatus[5] === 1 || squaresStatus[6] === 1 || squaresStatus[7] === 1 || squaresStatus[8] === 1) {
            setTimeout(function () {
                document.getElementById("i_text").innerHTML = "Your turn.";
                whattoenable();
            }, 1000)
        }
        else { whattoenable(); }
        one.onclick = function () { circleClick(0); invoer(sumStatus); }
        two.onclick = function () { circleClick(1); invoer(sumStatus); }
        three.onclick = function () { circleClick(2); invoer(sumStatus); }
        four.onclick = function () { circleClick(3); invoer(sumStatus); }
        five.onclick = function () { circleClick(4); invoer(sumStatus); }
        six.onclick = function () { circleClick(5); invoer(sumStatus); }
        seven.onclick = function () { circleClick(6); invoer(sumStatus); }
        eight.onclick = function () { circleClick(7); invoer(sumStatus); }
        nine.onclick = function () { circleClick(8); invoer(sumStatus); }
        function invoer(sumStatus) {
            whattodisable();
            for (i = 0; i < squaresStatus.length; i++) { sumStatus = sumStatus + squaresStatus[i]; }
            setTimeout(function () { document.getElementById("i_text").innerHTML = "Thank you."; }, 1000)
            if (circlesCrosses[0] === 2 && circlesCrosses[1] === 2 && circlesCrosses[2] === 2) { win2(); }
            else if (circlesCrosses[3] === 2 && circlesCrosses[4] === 2 && circlesCrosses[5] === 2) { win2(); }
            else if (circlesCrosses[6] === 2 && circlesCrosses[7] === 2 && circlesCrosses[8] === 2) { win2(); }
            else if (circlesCrosses[0] === 2 && circlesCrosses[3] === 2 && circlesCrosses[6] === 2) { win2(); }
            else if (circlesCrosses[1] === 2 && circlesCrosses[4] === 2 && circlesCrosses[7] === 2) { win2(); }
            else if (circlesCrosses[2] === 2 && circlesCrosses[5] === 2 && circlesCrosses[8] === 2) { win2(); }
            else if (circlesCrosses[0] === 2 && circlesCrosses[4] === 2 && circlesCrosses[8] === 2) { win2(); }
            else if (circlesCrosses[2] === 2 && circlesCrosses[4] === 2 && circlesCrosses[6] === 2) { win2(); }
            else if (sumStatus === 9) { draw2(); }
            else {
                setTimeout(function () { document.getElementById("i_text").innerHTML = "My turn:"; }, 2000)
                setTimeout(function () {


                    if (sumStatus === 1 && circlesCrosses[4] === 0) { crossClick(4); }
                        //GOD MODE:
                        //else if (sumStatus === 1 && circlesCrosses[4] === 2) { crossClick(0); }
                    else if (circlesCrosses[0] === 1 && circlesCrosses[1] === 1 && circlesCrosses[2] === 0 && doubleStatus[0] !== 1) { crossClick(2); doubleStatus[0] = 1; }
                    else if (circlesCrosses[1] === 1 && circlesCrosses[2] === 1 && circlesCrosses[0] === 0 && doubleStatus[1] !== 1) { crossClick(0); doubleStatus[1] = 1; }
                    else if (circlesCrosses[3] === 1 && circlesCrosses[4] === 1 && circlesCrosses[5] === 0 && doubleStatus[2] !== 1) { crossClick(5); doubleStatus[2] = 1; }
                    else if (circlesCrosses[4] === 1 && circlesCrosses[5] === 1 && circlesCrosses[3] === 0 && doubleStatus[3] !== 1) { crossClick(3); doubleStatus[3] = 1; }
                    else if (circlesCrosses[6] === 1 && circlesCrosses[7] === 1 && circlesCrosses[8] === 0 && doubleStatus[4] !== 1) { crossClick(8); doubleStatus[4] = 1; }
                    else if (circlesCrosses[7] === 1 && circlesCrosses[8] === 1 && circlesCrosses[6] === 0 && doubleStatus[5] !== 1) { crossClick(6); doubleStatus[5] = 1; }
                    else if (circlesCrosses[0] === 1 && circlesCrosses[3] === 1 && circlesCrosses[6] === 0 && doubleStatus[6] !== 1) { crossClick(6); doubleStatus[6] = 1; }
                    else if (circlesCrosses[3] === 1 && circlesCrosses[6] === 1 && circlesCrosses[0] === 0 && doubleStatus[7] !== 1) { crossClick(0); doubleStatus[7] = 1; }
                    else if (circlesCrosses[1] === 1 && circlesCrosses[4] === 1 && circlesCrosses[7] === 0 && doubleStatus[8] !== 1) { crossClick(7); doubleStatus[8] = 1; }
                    else if (circlesCrosses[4] === 1 && circlesCrosses[7] === 1 && circlesCrosses[1] === 0 && doubleStatus[9] !== 1) { crossClick(1); doubleStatus[9] = 1; }
                    else if (circlesCrosses[2] === 1 && circlesCrosses[5] === 1 && circlesCrosses[8] === 0 && doubleStatus[10] !== 1) { crossClick(8); doubleStatus[10] = 1; }
                    else if (circlesCrosses[5] === 1 && circlesCrosses[8] === 1 && circlesCrosses[2] === 0 && doubleStatus[11] !== 1) { crossClick(2); doubleStatus[11] = 1; }
                    else if (circlesCrosses[0] === 1 && circlesCrosses[4] === 1 && circlesCrosses[8] === 0 && doubleStatus[12] !== 1) { crossClick(8); doubleStatus[12] = 1; }
                    else if (circlesCrosses[2] === 1 && circlesCrosses[4] === 1 && circlesCrosses[6] === 0 && doubleStatus[13] !== 1) { crossClick(6); doubleStatus[13] = 1; }
                    else if (circlesCrosses[4] === 1 && circlesCrosses[8] === 1 && circlesCrosses[0] === 0 && doubleStatus[14] !== 1) { crossClick(0); doubleStatus[14] = 1; }
                    else if (circlesCrosses[4] === 1 && circlesCrosses[6] === 1 && circlesCrosses[2] === 0 && doubleStatus[15] !== 1) { crossClick(2); doubleStatus[15] = 1; }

                    else if (circlesCrosses[0] === 1 && circlesCrosses[2] === 1 && circlesCrosses[1] === 0 && doubleStatus[16] !== 1) { crossClick(1); doubleStatus[16] = 1; }
                    else if (circlesCrosses[3] === 1 && circlesCrosses[5] === 1 && circlesCrosses[4] === 0 && doubleStatus[17] !== 1) { crossClick(4); doubleStatus[17] = 1; }
                    else if (circlesCrosses[6] === 1 && circlesCrosses[8] === 1 && circlesCrosses[7] === 0 && doubleStatus[18] !== 1) { crossClick(7); doubleStatus[18] = 1; }
                    else if (circlesCrosses[0] === 1 && circlesCrosses[6] === 1 && circlesCrosses[3] === 0 && doubleStatus[19] !== 1) { crossClick(3); doubleStatus[19] = 1; }
                    else if (circlesCrosses[1] === 1 && circlesCrosses[7] === 1 && circlesCrosses[4] === 0 && doubleStatus[20] !== 1) { crossClick(4); doubleStatus[20] = 1; }
                    else if (circlesCrosses[2] === 1 && circlesCrosses[8] === 1 && circlesCrosses[5] === 0 && doubleStatus[21] !== 1) { crossClick(5); doubleStatus[21] = 1; }

                    else if (circlesCrosses[0] === 2 && circlesCrosses[1] === 2 && circlesCrosses[2] === 0 && doubleStatus[0] !== 2) { crossClick(2); doubleStatus[0] = 2; }
                    else if (circlesCrosses[1] === 2 && circlesCrosses[2] === 2 && circlesCrosses[0] === 0 && doubleStatus[1] !== 2) { crossClick(0); doubleStatus[1] = 2; }
                    else if (circlesCrosses[3] === 2 && circlesCrosses[4] === 2 && circlesCrosses[5] === 0 && doubleStatus[2] !== 2) { crossClick(5); doubleStatus[2] = 2; }
                    else if (circlesCrosses[4] === 2 && circlesCrosses[5] === 2 && circlesCrosses[3] === 0 && doubleStatus[3] !== 2) { crossClick(3); doubleStatus[3] = 2; }
                    else if (circlesCrosses[6] === 2 && circlesCrosses[7] === 2 && circlesCrosses[8] === 0 && doubleStatus[4] !== 2) { crossClick(8); doubleStatus[4] = 2; }
                    else if (circlesCrosses[7] === 2 && circlesCrosses[8] === 2 && circlesCrosses[6] === 0 && doubleStatus[5] !== 2) { crossClick(6); doubleStatus[5] = 2; }
                    else if (circlesCrosses[0] === 2 && circlesCrosses[3] === 2 && circlesCrosses[6] === 0 && doubleStatus[6] !== 2) { crossClick(6); doubleStatus[6] = 2; }
                    else if (circlesCrosses[3] === 2 && circlesCrosses[6] === 2 && circlesCrosses[0] === 0 && doubleStatus[7] !== 2) { crossClick(0); doubleStatus[7] = 2; }
                    else if (circlesCrosses[1] === 2 && circlesCrosses[4] === 2 && circlesCrosses[7] === 0 && doubleStatus[8] !== 2) { crossClick(7); doubleStatus[8] = 2; }
                    else if (circlesCrosses[4] === 2 && circlesCrosses[7] === 2 && circlesCrosses[1] === 0 && doubleStatus[9] !== 2) { crossClick(1); doubleStatus[9] = 2; }
                    else if (circlesCrosses[2] === 2 && circlesCrosses[5] === 2 && circlesCrosses[8] === 0 && doubleStatus[10] !== 2) { crossClick(8); doubleStatus[10] = 2; }
                    else if (circlesCrosses[5] === 2 && circlesCrosses[8] === 2 && circlesCrosses[2] === 0 && doubleStatus[11] !== 2) { crossClick(2); doubleStatus[11] = 2; }
                    else if (circlesCrosses[0] === 2 && circlesCrosses[4] === 2 && circlesCrosses[8] === 0 && doubleStatus[12] !== 2) { crossClick(8); doubleStatus[12] = 2; }
                    else if (circlesCrosses[2] === 2 && circlesCrosses[4] === 2 && circlesCrosses[6] === 0 && doubleStatus[13] !== 2) { crossClick(6); doubleStatus[13] = 2; }
                    else if (circlesCrosses[4] === 2 && circlesCrosses[8] === 2 && circlesCrosses[0] === 0 && doubleStatus[14] !== 2) { crossClick(0); doubleStatus[14] = 2; }
                    else if (circlesCrosses[4] === 2 && circlesCrosses[6] === 2 && circlesCrosses[2] === 0 && doubleStatus[15] !== 2) { crossClick(2); doubleStatus[15] = 2; }

                    else if (circlesCrosses[0] === 2 && circlesCrosses[2] === 2 && circlesCrosses[1] === 0 && doubleStatus[16] != 2) { crossClick(1); doubleStatus[16] = 2; }
                    else if (circlesCrosses[3] === 2 && circlesCrosses[5] === 2 && circlesCrosses[4] === 0 && doubleStatus[17] != 2) { crossClick(4); doubleStatus[17] = 2; }
                    else if (circlesCrosses[6] === 2 && circlesCrosses[8] === 2 && circlesCrosses[7] === 0 && doubleStatus[18] != 2) { crossClick(7); doubleStatus[18] = 2; }
                    else if (circlesCrosses[0] === 2 && circlesCrosses[6] === 2 && circlesCrosses[3] === 0 && doubleStatus[19] != 2) { crossClick(3); doubleStatus[19] = 2; }
                    else if (circlesCrosses[1] === 2 && circlesCrosses[7] === 2 && circlesCrosses[4] === 0 && doubleStatus[20] != 2) { crossClick(4); doubleStatus[20] = 2; }
                    else if (circlesCrosses[2] === 2 && circlesCrosses[8] === 2 && circlesCrosses[5] === 0 && doubleStatus[21] != 2) { crossClick(5); doubleStatus[21] = 2; }

                    else {
                        rN = Math.floor((Math.random() * 8) + 1);
                        while (squaresStatus[rN] === 1) {
                            rN = Math.floor((Math.random() * 8) + 1);
                        }
                        crossClick(rN);
                    }
                }, 3000)
                setTimeout(function () {
                    if (circlesCrosses[0] === 1 && circlesCrosses[1] === 1 && circlesCrosses[2] === 1) { lose4(); }
                    else if (circlesCrosses[3] === 1 && circlesCrosses[4] === 1 && circlesCrosses[5] === 1) { lose4(); }
                    else if (circlesCrosses[6] === 1 && circlesCrosses[7] === 1 && circlesCrosses[8] === 1) { lose4(); }
                    else if (circlesCrosses[0] === 1 && circlesCrosses[3] === 1 && circlesCrosses[6] === 1) { lose4(); }
                    else if (circlesCrosses[1] === 1 && circlesCrosses[4] === 1 && circlesCrosses[7] === 1) { lose4(); }
                    else if (circlesCrosses[2] === 1 && circlesCrosses[5] === 1 && circlesCrosses[8] === 1) { lose4(); }
                    else if (circlesCrosses[0] === 1 && circlesCrosses[4] === 1 && circlesCrosses[8] === 1) { lose4(); }
                    else if (circlesCrosses[2] === 1 && circlesCrosses[4] === 1 && circlesCrosses[6] === 1) { lose4(); }
                    else { Turn(); }
                }, 4000)
            }
        }
    }

    function circleClick(circleIndex) {
        numnqFront[circleIndex].value = "O"; numnqCon[circleIndex].classList.remove("flip"); circlesCrosses[circleIndex] = 2; squaresStatus[circleIndex] = 1; numnqFront[circleIndex].classList.add("clickedColor"); numnq[circleIndex].classList.remove("hoverButton");
        document.getElementById(numq[circleIndex]).disabled = true;
    }

    function crossClick(crossIndex) {
        numnqFront[crossIndex].value = "X"; numnqCon[crossIndex].classList.remove("flip"); circlesCrosses[crossIndex] = 1; squaresStatus[crossIndex] = 1; numnqFront[crossIndex].classList.add("colorX"); numnq[crossIndex].classList.remove("hoverButton");
        document.getElementById(numq[crossIndex]).disabled = true;
    }

    function whattodisable() {
        for (i = 0; i < squaresStatus.length; i++) {
            if (document.getElementById(numq[i]).disabled === true) { squaresStatus[i] = 1; }
            if (document.getElementById(numq[i]).disabled === false) { document.getElementById(numq[i]).disabled = true; numnq[i].classList.remove("hoverButton"); }
        }
    }

    function whattoenable() {
        for (i = 0; i < squaresStatus.length; i++) {
            if (squaresStatus[i] !== 1) { document.getElementById(numq[i]).disabled = false; numnq[i].classList.add("hoverButton"); }
        }
    }

    function draw2() {
        setTimeout(function () { document.getElementById("i_text").innerHTML = "It's a draw."; }, 1000)
        setTimeout(function () { input.classList.remove("disappear"); document.getElementById("input").value = "Try again?"; input.classList.add("appear"); }, 2000)
        setTimeout(function () { input.classList.remove("disappear", "appear"); input.disabled = false; }, 4000)
        input.onclick = function () { Run(); input.classList.add("disappear"); }
    }

    function win2() {
        setTimeout(function () { document.getElementById("i_text").innerHTML = "You win."; }, 1000)
        setTimeout(function () { input.classList.remove("disappear"); document.getElementById("input").value = "Play again?"; input.classList.add("appear"); }, 2000)
        setTimeout(function () { input.classList.remove("disappear", "appear"); input.disabled = false; }, 4000)
        input.onclick = function () { Run(); input.classList.add("disappear"); }
    }

    function lose4() {
        setTimeout(function () { document.getElementById("i_text").innerHTML = "You lose."; }, 1000)
        setTimeout(function () { input.classList.remove("disappear"); document.getElementById("input").value = "Try again?"; input.classList.add("appear"); }, 2000)
        setTimeout(function () { input.classList.remove("disappear", "appear"); input.disabled = false; }, 4000)
        input.onclick = function () { Run(); input.classList.add("disappear"); }
    }
}
