var types = {normal : 1, fire : 1, water : 1, electric : 1, grass : 1, ice : 1, fighting : 1, poison : 1, ground : 1, flying : 1, psychic : 1, bug : 1, rock : 1, ghost : 1, dragon : 1, dark : 1, steel : 1, fairy : 1};

function PokemonEffectiveness(input) {
    var response;

    var attacker = Attacker(input)

    var xhr = new XMLHttpRequest();
    xhr.open('GET', "http://pokeapi.co/api/v2/type/" + attacker + "/", true);
    xhr.send();

    xhr.onreadystatechange = processRequest;

    function processRequest(e) {
        if (xhr.readyState == 4 && xhr.status == 200) {
            response = JSON.parse(xhr.responseText);
        }
    }

    window.setTimeout(function () {
        tree = response;
        for(var i = 0; i < tree.damage_relations.double_damage_to.length; i++) {
            effectivenessValue(tree.damage_relations.double_damage_to[i].name, 2)
        }
        for(var i = 0; i < tree.damage_relations.half_damage_to.length; i++) {
            effectivenessValue(tree.damage_relations.half_damage_to[i].name, .5)
        }
        for(var i = 0; i < tree.damage_relations.no_damage_to.length; i++) {
            effectivenessValue(tree.damage_relations.no_damage_to[i].name, 0)
        }
        //console.log(types);

        console.log(Victim(input) + "x");
    }, 5000)
}

function Attacker(input) {
    var attacker = input.split(" ")
    return attacker[0]
}

function Victim(input) {
    var array = input.split(" ");
    var victim = [];
    var num = [];
    for(var i = 2; i < array.length; i++) {
        victim.push(array[i])
    }

    for (var i = 0; i < victim.length; i++) {
        num.push(types[victim[i]]);
    }
    //console.log(num.reduce(function(a,b){return a*b;}));

    return num.reduce(function(a,b){return a*b;})
}

function typeObject() {
    return typeof types
}

function effectivenessValue(type, number) {
    types[type] = number;
}
