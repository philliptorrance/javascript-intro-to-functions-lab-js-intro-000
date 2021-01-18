

{
  describe( shout(string)), function shout(string) {
  return string.toUpperCase(string); };
}

{
  describe( whisper(string)), function whisper(string) { 
    return string.toLowerCase(string); };
}

  
  /*{
    expect(shout('hello'));toEqual('HELLO')});
  })
  describe(whisper(string), function() {
         it(function(){
  expect(whisper('HELLO')).toEqual('hello') });
 })
 
 describe('logShout(string)'), function() {
   it( function() {
     const spy = expect.spyOn(console, 'log').andCallThrough();
         logShout('hello')});
     
     expect(spy).toHaveBeenCalledWith('HELLO');
     
     console.log.restore();
     };
   }

describe('logWishper(string)', function() {
  it( function() {
    const spy = expect.spyOn(console, 'log').andCallThrough();
    logWhisper('HELLO');
    
    expect(spy).toHaveBeenCalledWith('hello');
    
    console.log.restore();
    });
  });

describe('logWhisper(string)', function() {
  it('takes a string argument and logs it in all lowercase using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logWhisper('HELLO')

    expect(spy).toHaveBeenCalledWith('hello')

    console.log.restore()
  });
});

describe('sayHiToGrandma(string)', function() {
 returns { if whisper(string), function() {
    expect(sayHiToGrandma('hello')).toEqual("I can't hear you!")
  })

  it('returns "YES INDEED!" if `string` is uppercase', function() {
    expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!")
  })

  it('returns "I love you, too." if `string` is "I love you, Grandma."`', function() {
    expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.")
  })
})*/