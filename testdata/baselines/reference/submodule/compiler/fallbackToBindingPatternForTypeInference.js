//// [tests/cases/compiler/fallbackToBindingPatternForTypeInference.ts] ////

//// [fallbackToBindingPatternForTypeInference.ts]
declare function trans<T>(f: (x: T) => string): number;
trans(({a}) => a);
trans(([b,c]) => 'foo');
trans(({d: [e,f]}) => 'foo');
trans(([{g},{h}]) => 'foo');
trans(({a, b = 10}) => a);


//// [fallbackToBindingPatternForTypeInference.js]
trans(({ a }) => a);
trans(([b, c]) => 'foo');
trans(({ d: [e, f] }) => 'foo');
trans(([{ g }, { h }]) => 'foo');
trans(({ a, b = 10 }) => a);
