/**
 * Test the interface module
 */

var chai = require( 'chai' )
  , expect = chai.expect
  , Interface = require( '../' );

describe( 'Interface', function () {

    it( 'should be a function', function () {
        expect( Interface )
            .to.be.a( 'function' );
    });

    it( 'should construct a class property', function () {
        var Subclass = Interface.subclass({
            constructor: function ( bar ) {
                this.bar = bar;
            }
        });
        var Foo = new Subclass( 5 );
        expect( Foo.bar )
            .to.be.equal( 5 );
    });

});