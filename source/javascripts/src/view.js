$(document).ready(function() {
    tController = new TreeController();
    tView = new TreeView();
    tController.run();


});

function TreeView() {}

function TreeController() {}

TreeController.prototype.run = function() {
    $('.plant').on('click', function() {
        var tree = new Tree();
        tView.addGrove();
        tView.age(tree);
        tView.pick(tree);
    })
}

TreeView.prototype = {
    addGrove: function() {

        $('#orange-tree-template').removeClass();
        this.disabled = true;
    },


    age: function(tree) {
        $('button.age').on('click', function() {
            tree.grow();
            $('p.age').text(tree.age);
            if (tree.age >= FRUIT_BEARING_AGE) {
                for (var i = 0; i < tree.orangeCount; i++) {
                    $('.display-tree-big').append("<img src='images/orange.gif '>")
                    $('p.fruit-count').text(tree.orangeCountTotal)
                }
            }
        })
    },

    pick: function(tree) {
        $('button.pick').on('click', function() {
            if (tree.orangeCountTotal == 0) {
                fC = 'No more oranges';
            } else {
                fC = tree.orangeCountTotal -= 1;
            }
            $('p.fruit-count').text(fC);
            $('.display-tree-big img:last').remove();
        })
    }
}