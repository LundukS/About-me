QUnit.module('MAIN MODULE', {}) 
QUnit.test( "Temperature conversion test", function( assert ) {
    assert.ok(fahrenheit(0),32, "Zero" );
    assert.ok(fahrenheit(1),33.8, "Positive" );
    assert.ok(fahrenheit(-1),30.2, "Negative" );

    assert.ok(fahrenheit(2),35.6, "Passed!" );

    assert.ok(fahrenheit(-2),28.4, "Passed!" );


  });
 