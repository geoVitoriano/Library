var list = null;

Qunit.test( "List.append", function ( assert ) {
	setUp();


	assert.ok( list.size() == 0, "List should be empty !" );

	list.append(15);
    list.append(14);
    list.append(11);
    list.append(9);
    list.append(7);

    assert.ok( list.size() == 6, "List should be 6!" );

    tearDown();

});

function setUp(){

	list = new List();
}

function tearDown() {
	list.clear();
}