$(document).ready(function() {
    $('.plant').on('click', function() {
        var tree = new Tree();
        $('#orange-tree-template').removeClass();
        this.disabled = true;
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
        $('button.pick').on('click', function() {
            $('p.fruit-count').text(tree.orangeCountTotal -= 1);
            $('.display-tree-big img:last').remove();
        })
    })
});