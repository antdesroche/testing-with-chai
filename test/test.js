const mocha = require('mocha')
const expect = require('chai').expect





describe('My comprehension of the javascript basics is solid', () => {

            it('and this proves my skill with js', () => {
                var car = {make: 'tesla', model: 'cybertruck'}
                expect('').to.be.a('string');
                expect({}).to.be.an('object');
                expect(null).to.be.a('null');
                expect().to.be.an('undefined');
                expect([]).to.be.an('array').that.is.empty;
                expect([5]).to.be.an('array').that.includes(5);
                expect().to.not.be.an('array')
                expect({model: 'Toyota'}).to.have.a.property('model');
                expect(car).to.include({
                    make: 'tesla',
                    model: 'cybertruck'
                });
            })
            it('includes testing skills', () => {
                expect({a: {b: ['x', 'y']}}).to.have.nested.property('a.b[1]');
                expect([1, 2, 3]).to.include.ordered.members([1, 2])
  .but.not.include.ordered.members([2, 3]);
                expect(new Error).to.be.an('error');
            })
        })