function TreeController() {}

TreeController.prototype.run = function() {
    $('.plant').on('click', function() {
        var tree = new Tree();
        plantButton = this
        tView.addGrove(plantButton);
        tView.age(tree);
        tView.pick(tree);
    })
}