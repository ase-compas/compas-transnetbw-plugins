var bd = Object.defineProperty;
var $s = (t) => {
  throw TypeError(t);
};
var Id = (t, e, n) => e in t ? bd(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var mr = (t, e, n) => Id(t, typeof e != "symbol" ? e + "" : e, n), Ro = (t, e, n) => e.has(t) || $s("Cannot " + n);
var ie = (t, e, n) => (Ro(t, e, "read from private field"), n ? n.call(t) : e.get(t)), $e = (t, e, n) => e.has(t) ? $s("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), Fe = (t, e, n, i) => (Ro(t, e, "write to private field"), i ? i.call(t, n) : e.set(t, n), n), Wt = (t, e, n) => (Ro(t, e, "access private method"), n);
const Ft = Symbol(), yd = "http://www.w3.org/1999/xhtml", _d = "http://www.w3.org/2000/svg", Ed = "@attach", hu = !1;
var ho = Array.isArray, Cd = Array.prototype.indexOf, Cs = Array.from, Qa = Object.defineProperty, _i = Object.getOwnPropertyDescriptor, vu = Object.getOwnPropertyDescriptors, Ad = Object.prototype, Sd = Array.prototype, As = Object.getPrototypeOf, el = Object.isExtensible;
function ta(t) {
  return typeof t == "function";
}
const me = () => {
};
function mu(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function pu() {
  var t, e, n = new Promise((i, r) => {
    t = i, e = r;
  });
  return { promise: n, resolve: t, reject: e };
}
const tn = 2, Ss = 4, xs = 8, rr = 16, oi = 32, ar = 64, Ts = 128, Sn = 256, Ja = 512, zt = 1024, pn = 2048, xi = 4096, Dn = 8192, or = 16384, Ls = 32768, sr = 65536, tl = 1 << 17, xd = 1 << 18, qr = 1 << 19, Td = 1 << 20, Jo = 1 << 21, vo = 1 << 22, Qi = 1 << 23, Wn = Symbol("$state"), gu = Symbol("legacy props"), Ld = Symbol(""), yr = new class extends Error {
  constructor() {
    super(...arguments);
    mr(this, "name", "StaleReactionError");
    mr(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Os(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Od() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function wd(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Rd() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Md(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Dd() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Pd(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Nd() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Fd() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Hd() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ud() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Bd() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function kd() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let Vd = !1;
function bu(t) {
  return t === this.v;
}
function ws(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Iu(t) {
  return !ws(t, this.v);
}
let Kr = !1, Gd = !1;
function jd() {
  Kr = !0;
}
let ut = null;
function Nr(t) {
  ut = t;
}
function se(t) {
  return (
    /** @type {T} */
    yu().get(t)
  );
}
function te(t, e) {
  return yu().set(t, e), e;
}
function we(t, e = !1, n) {
  ut = {
    p: ut,
    c: null,
    e: null,
    s: t,
    x: null,
    l: Kr && !e ? { s: null, u: null, $: [] } : null
  };
}
function Re(t) {
  var e = (
    /** @type {ComponentContext} */
    ut
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var i of n)
      Nu(i);
  }
  return t !== void 0 && (e.x = t), ut = e.p, t ?? /** @type {T} */
  {};
}
function xa() {
  return !Kr || ut !== null && ut.l === null;
}
function yu(t) {
  return ut === null && Os(), ut.c ?? (ut.c = new Map(Wd(ut) || void 0));
}
function Wd(t) {
  let e = t.p;
  for (; e !== null; ) {
    const n = e.c;
    if (n !== null)
      return n;
    e = e.p;
  }
  return null;
}
let Wi = [];
function _u() {
  var t = Wi;
  Wi = [], mu(t);
}
function Si(t) {
  if (Wi.length === 0 && !ma) {
    var e = Wi;
    queueMicrotask(() => {
      e === Wi && _u();
    });
  }
  Wi.push(t);
}
function qd() {
  for (; Wi.length > 0; )
    _u();
}
const Kd = /* @__PURE__ */ new WeakMap();
function Eu(t) {
  var e = We;
  if (e === null)
    return Ge.f |= Qi, t;
  if (e.f & Ls)
    Fr(t, e);
  else {
    if (!(e.f & Ts))
      throw !e.parent && t instanceof Error && Cu(t), t;
    e.b.error(t);
  }
}
function Fr(t, e) {
  for (; e !== null; ) {
    if (e.f & Ts)
      try {
        e.b.error(t);
        return;
      } catch (n) {
        t = n;
      }
    e = e.parent;
  }
  throw t instanceof Error && Cu(t), t;
}
function Cu(t) {
  const e = Kd.get(t);
  e && (Qa(t, "message", {
    value: e.message
  }), Qa(t, "stack", {
    value: e.stack
  }));
}
const Na = /* @__PURE__ */ new Set();
let at = null, Wa = null, Ut = null, $o = /* @__PURE__ */ new Set(), Gn = [], mo = null, es = !1, ma = !1;
var Or, wr, Ki, Ca, Rr, Mr, zi, Dr, Aa, Sa, xn, ts, qa, ns;
const uo = class uo {
  constructor() {
    $e(this, xn);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    mr(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    $e(this, Or, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    $e(this, wr, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    $e(this, Ki, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    $e(this, Ca, null);
    /**
     * Async effects inside a newly-created `<svelte:boundary>`
     * — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    $e(this, Rr, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    $e(this, Mr, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    $e(this, zi, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    $e(this, Dr, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    $e(this, Aa, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    $e(this, Sa, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    mr(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var a;
    Gn = [], Wa = null, this.apply();
    for (const o of e)
      Wt(this, xn, ts).call(this, o);
    if (ie(this, Ki) === 0) {
      var n = Ut;
      Wt(this, xn, ns).call(this);
      var i = ie(this, Mr), r = ie(this, zi);
      Fe(this, Mr, []), Fe(this, zi, []), Fe(this, Dr, []), Wa = this, at = null, Ut = n, nl(i), nl(r), Wa = null, (a = ie(this, Ca)) == null || a.resolve();
    } else
      Wt(this, xn, qa).call(this, ie(this, Mr)), Wt(this, xn, qa).call(this, ie(this, zi)), Wt(this, xn, qa).call(this, ie(this, Dr));
    Ut = null;
    for (const o of ie(this, Rr))
      ba(o);
    Fe(this, Rr, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    ie(this, Or).has(e) || ie(this, Or).set(e, n), this.current.set(e, e.v), Ut == null || Ut.set(e, e.v);
  }
  activate() {
    at = this;
  }
  deactivate() {
    at = null, Ut = null;
  }
  flush() {
    if (Gn.length > 0) {
      if (this.activate(), Au(), at !== null && at !== this)
        return;
    } else ie(this, Ki) === 0 && Wt(this, xn, ns).call(this);
    this.deactivate();
    for (const e of $o)
      if ($o.delete(e), e(), at !== null)
        break;
  }
  increment() {
    Fe(this, Ki, ie(this, Ki) + 1);
  }
  decrement() {
    Fe(this, Ki, ie(this, Ki) - 1);
    for (const e of ie(this, Aa))
      $t(e, pn), tr(e);
    for (const e of ie(this, Sa))
      $t(e, xi), tr(e);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    ie(this, wr).add(e);
  }
  settled() {
    return (ie(this, Ca) ?? Fe(this, Ca, pu())).promise;
  }
  static ensure() {
    if (at === null) {
      const e = at = new uo();
      Na.add(at), ma || uo.enqueue(() => {
        at === e && e.flush();
      });
    }
    return at;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    Si(e);
  }
  apply() {
  }
};
Or = new WeakMap(), wr = new WeakMap(), Ki = new WeakMap(), Ca = new WeakMap(), Rr = new WeakMap(), Mr = new WeakMap(), zi = new WeakMap(), Dr = new WeakMap(), Aa = new WeakMap(), Sa = new WeakMap(), xn = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
ts = function(e) {
  var c;
  e.f ^= zt;
  for (var n = e.first; n !== null; ) {
    var i = n.f, r = (i & (oi | ar)) !== 0, a = r && (i & zt) !== 0, o = a || (i & Dn) !== 0 || this.skipped_effects.has(n);
    if (!o && n.fn !== null) {
      r ? n.f ^= zt : i & Ss ? ie(this, zi).push(n) : i & zt || (i & vo && ((c = n.b) != null && c.is_pending()) ? ie(this, Rr).push(n) : _o(n) && (n.f & rr && ie(this, Dr).push(n), ba(n)));
      var u = n.first;
      if (u !== null) {
        n = u;
        continue;
      }
    }
    var l = n.parent;
    for (n = n.next; n === null && l !== null; )
      n = l.next, l = l.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
qa = function(e) {
  for (const n of e)
    (n.f & pn ? ie(this, Aa) : ie(this, Sa)).push(n), $t(n, zt);
  e.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
ns = function() {
  var e;
  for (const n of ie(this, wr))
    n();
  if (ie(this, wr).clear(), Na.size > 1) {
    ie(this, Or).clear();
    let n = !0;
    for (const i of Na) {
      if (i === this) {
        n = !1;
        continue;
      }
      const r = [];
      for (const [o, u] of this.current) {
        if (i.current.has(o))
          if (n && u !== i.current.get(o))
            i.current.set(o, u);
          else
            continue;
        r.push(o);
      }
      if (r.length === 0)
        continue;
      const a = [...i.current.keys()].filter((o) => !this.current.has(o));
      if (a.length > 0) {
        for (const o of r)
          Su(o, a);
        if (Gn.length > 0) {
          at = i, i.apply();
          for (const o of Gn)
            Wt(e = i, xn, ts).call(e, o);
          Gn = [], i.deactivate();
        }
      }
    }
    at = null;
  }
  Na.delete(this);
};
let ri = uo;
function zd(t) {
  var e = ma;
  ma = !0;
  try {
    for (var n; ; ) {
      if (qd(), Gn.length === 0 && (at == null || at.flush(), Gn.length === 0))
        return mo = null, /** @type {T} */
        n;
      Au();
    }
  } finally {
    ma = e;
  }
}
function Au() {
  var t = xr;
  es = !0;
  try {
    var e = 0;
    for (al(!0); Gn.length > 0; ) {
      var n = ri.ensure();
      if (e++ > 1e3) {
        var i, r;
        Xd();
      }
      n.process(Gn), Ei.clear();
    }
  } finally {
    es = !1, al(t), mo = null;
  }
}
function Xd() {
  try {
    Dd();
  } catch (t) {
    Fr(t, mo);
  }
}
let ni = null;
function nl(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var i = t[n++];
      if (!(i.f & (or | Dn)) && _o(i) && (ni = [], ba(i), i.deps === null && i.first === null && i.nodes_start === null && (i.teardown === null && i.ac === null ? Uu(i) : i.fn = null), (ni == null ? void 0 : ni.length) > 0)) {
        Ei.clear();
        for (const r of ni)
          ba(r);
        ni = [];
      }
    }
    ni = null;
  }
}
function Su(t, e) {
  if (t.reactions !== null)
    for (const n of t.reactions) {
      const i = n.f;
      i & tn ? Su(
        /** @type {Derived} */
        n,
        e
      ) : i & (vo | rr) && xu(n, e) && ($t(n, pn), tr(
        /** @type {Effect} */
        n
      ));
    }
}
function xu(t, e) {
  if (t.deps !== null) {
    for (const n of t.deps)
      if (e.includes(n) || n.f & tn && xu(
        /** @type {Derived} */
        n,
        e
      ))
        return !0;
  }
  return !1;
}
function tr(t) {
  for (var e = mo = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (es && e === We && n & rr)
      return;
    if (n & (ar | oi)) {
      if (!(n & zt)) return;
      e.f ^= zt;
    }
  }
  Gn.push(e);
}
function Yd(t) {
  let e = 0, n = nr(0), i;
  return () => {
    vf() && (s(n), Io(() => (e === 0 && (i = Oi(() => t(() => pa(n)))), e += 1, () => {
      Si(() => {
        e -= 1, e === 0 && (i == null || i(), i = void 0, pa(n));
      });
    })));
  };
}
var Zd = sr | qr | Ts;
function Qd(t, e, n) {
  new Jd(t, e, n);
}
var wn, Cn, Es, Bn, Xi, kn, An, ln, Vn, mi, Yi, pi, Zi, gi, co, fo, en, $d, ef, Ka, za, is;
class Jd {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, i) {
    $e(this, en);
    /** @type {Boundary | null} */
    mr(this, "parent");
    $e(this, wn, !1);
    /** @type {TemplateNode} */
    $e(this, Cn);
    /** @type {TemplateNode | null} */
    $e(this, Es, null);
    /** @type {BoundaryProps} */
    $e(this, Bn);
    /** @type {((anchor: Node) => void)} */
    $e(this, Xi);
    /** @type {Effect} */
    $e(this, kn);
    /** @type {Effect | null} */
    $e(this, An, null);
    /** @type {Effect | null} */
    $e(this, ln, null);
    /** @type {Effect | null} */
    $e(this, Vn, null);
    /** @type {DocumentFragment | null} */
    $e(this, mi, null);
    $e(this, Yi, 0);
    $e(this, pi, 0);
    $e(this, Zi, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    $e(this, gi, null);
    $e(this, co, () => {
      ie(this, gi) && Hr(ie(this, gi), ie(this, Yi));
    });
    $e(this, fo, Yd(() => (Fe(this, gi, nr(ie(this, Yi))), () => {
      Fe(this, gi, null);
    })));
    Fe(this, Cn, e), Fe(this, Bn, n), Fe(this, Xi, i), this.parent = /** @type {Effect} */
    We.b, Fe(this, wn, !!ie(this, Bn).pending), Fe(this, kn, Li(() => {
      We.b = this;
      {
        try {
          Fe(this, An, qt(() => i(ie(this, Cn))));
        } catch (r) {
          this.error(r);
        }
        ie(this, pi) > 0 ? Wt(this, en, za).call(this) : Fe(this, wn, !1);
      }
    }, Zd));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return ie(this, wn) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!ie(this, Bn).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    Wt(this, en, is).call(this, e), Fe(this, Yi, ie(this, Yi) + e), $o.add(ie(this, co));
  }
  get_effect_pending() {
    return ie(this, fo).call(this), s(
      /** @type {Source<number>} */
      ie(this, gi)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = ie(this, Bn).onerror;
    let i = ie(this, Bn).failed;
    if (ie(this, Zi) || !n && !i)
      throw e;
    ie(this, An) && (Vt(ie(this, An)), Fe(this, An, null)), ie(this, ln) && (Vt(ie(this, ln)), Fe(this, ln, null)), ie(this, Vn) && (Vt(ie(this, Vn)), Fe(this, Vn, null));
    var r = !1, a = !1;
    const o = () => {
      if (r) {
        kd();
        return;
      }
      r = !0, a && Ud(), ri.ensure(), Fe(this, Yi, 0), ie(this, Vn) !== null && Ci(ie(this, Vn), () => {
        Fe(this, Vn, null);
      }), Fe(this, wn, this.has_pending_snippet()), Fe(this, An, Wt(this, en, Ka).call(this, () => (Fe(this, Zi, !1), qt(() => ie(this, Xi).call(this, ie(this, Cn)))))), ie(this, pi) > 0 ? Wt(this, en, za).call(this) : Fe(this, wn, !1);
    };
    var u = Ge;
    try {
      un(null), a = !0, n == null || n(e, o), a = !1;
    } catch (l) {
      Fr(l, ie(this, kn) && ie(this, kn).parent);
    } finally {
      un(u);
    }
    i && Si(() => {
      Fe(this, Vn, Wt(this, en, Ka).call(this, () => {
        Fe(this, Zi, !0);
        try {
          return qt(() => {
            i(
              ie(this, Cn),
              () => e,
              () => o
            );
          });
        } catch (l) {
          return Fr(
            l,
            /** @type {Effect} */
            ie(this, kn).parent
          ), null;
        } finally {
          Fe(this, Zi, !1);
        }
      }));
    });
  }
}
wn = new WeakMap(), Cn = new WeakMap(), Es = new WeakMap(), Bn = new WeakMap(), Xi = new WeakMap(), kn = new WeakMap(), An = new WeakMap(), ln = new WeakMap(), Vn = new WeakMap(), mi = new WeakMap(), Yi = new WeakMap(), pi = new WeakMap(), Zi = new WeakMap(), gi = new WeakMap(), co = new WeakMap(), fo = new WeakMap(), en = new WeakSet(), $d = function() {
  try {
    Fe(this, An, qt(() => ie(this, Xi).call(this, ie(this, Cn))));
  } catch (e) {
    this.error(e);
  }
  Fe(this, wn, !1);
}, ef = function() {
  const e = ie(this, Bn).pending;
  e && (Fe(this, ln, qt(() => e(ie(this, Cn)))), ri.enqueue(() => {
    Fe(this, An, Wt(this, en, Ka).call(this, () => (ri.ensure(), qt(() => ie(this, Xi).call(this, ie(this, Cn)))))), ie(this, pi) > 0 ? Wt(this, en, za).call(this) : (Ci(
      /** @type {Effect} */
      ie(this, ln),
      () => {
        Fe(this, ln, null);
      }
    ), Fe(this, wn, !1));
  }));
}, /**
 * @param {() => Effect | null} fn
 */
Ka = function(e) {
  var n = We, i = Ge, r = ut;
  qn(ie(this, kn)), un(ie(this, kn)), Nr(ie(this, kn).ctx);
  try {
    return e();
  } catch (a) {
    return Eu(a), null;
  } finally {
    qn(n), un(i), Nr(r);
  }
}, za = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    ie(this, Bn).pending
  );
  ie(this, An) !== null && (Fe(this, mi, document.createDocumentFragment()), tf(ie(this, An), ie(this, mi))), ie(this, ln) === null && Fe(this, ln, qt(() => e(ie(this, Cn))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
is = function(e) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && Wt(n = this.parent, en, is).call(n, e);
    return;
  }
  Fe(this, pi, ie(this, pi) + e), ie(this, pi) === 0 && (Fe(this, wn, !1), ie(this, ln) && Ci(ie(this, ln), () => {
    Fe(this, ln, null);
  }), ie(this, mi) && (ie(this, Cn).before(ie(this, mi)), Fe(this, mi, null)), Si(() => {
    ri.ensure().flush();
  }));
};
function tf(t, e) {
  for (var n = t.nodes_start, i = t.nodes_end; n !== null; ) {
    var r = n === i ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ta(n)
    );
    e.append(n), n = r;
  }
}
function Tu(t, e, n) {
  const i = xa() ? po : Rs;
  if (e.length === 0) {
    n(t.map(i));
    return;
  }
  var r = at, a = (
    /** @type {Effect} */
    We
  ), o = nf();
  Promise.all(e.map((u) => /* @__PURE__ */ rf(u))).then((u) => {
    o();
    try {
      n([...t.map(i), ...u]);
    } catch (l) {
      a.f & or || Fr(l, a);
    }
    r == null || r.deactivate(), rs();
  }).catch((u) => {
    Fr(u, a);
  });
}
function nf() {
  var t = We, e = Ge, n = ut, i = at;
  return function() {
    qn(t), un(e), Nr(n), i == null || i.activate();
  };
}
function rs() {
  qn(null), un(null), Nr(null);
}
// @__NO_SIDE_EFFECTS__
function po(t) {
  var e = tn | pn, n = Ge !== null && Ge.f & tn ? (
    /** @type {Derived} */
    Ge
  ) : null;
  return We === null || n !== null && n.f & Sn ? e |= Sn : We.f |= qr, {
    ctx: ut,
    deps: null,
    effects: null,
    equals: bu,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Ft
    ),
    wv: 0,
    parent: n ?? We,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function rf(t, e) {
  let n = (
    /** @type {Effect | null} */
    We
  );
  n === null && Od();
  var i = (
    /** @type {Boundary} */
    n.b
  ), r = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = nr(
    /** @type {V} */
    Ft
  ), o = !Ge, u = /* @__PURE__ */ new Map();
  return pf(() => {
    var f;
    var l = pu();
    r = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(rs);
    } catch (v) {
      l.reject(v), rs();
    }
    var c = (
      /** @type {Batch} */
      at
    ), d = i.is_pending();
    o && (i.update_pending_count(1), d || (c.increment(), (f = u.get(c)) == null || f.reject(yr), u.delete(c), u.set(c, l)));
    const h = (v, p = void 0) => {
      if (d || c.activate(), p)
        p !== yr && (a.f |= Qi, Hr(a, p));
      else {
        a.f & Qi && (a.f ^= Qi), Hr(a, v);
        for (const [g, _] of u) {
          if (u.delete(g), g === c) break;
          _.reject(yr);
        }
      }
      o && (i.update_pending_count(-1), d || c.decrement());
    };
    l.promise.then(h, (v) => h(null, v || "unknown"));
  }), bo(() => {
    for (const l of u.values())
      l.reject(yr);
  }), new Promise((l) => {
    function c(d) {
      function h() {
        d === r ? l(a) : c(r);
      }
      d.then(h, h);
    }
    c(r);
  });
}
// @__NO_SIDE_EFFECTS__
function ve(t) {
  const e = /* @__PURE__ */ po(t);
  return Vu(e), e;
}
// @__NO_SIDE_EFFECTS__
function Rs(t) {
  const e = /* @__PURE__ */ po(t);
  return e.equals = Iu, e;
}
function Lu(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      Vt(
        /** @type {Effect} */
        e[n]
      );
  }
}
function af(t) {
  for (var e = t.parent; e !== null; ) {
    if (!(e.f & tn))
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function Ms(t) {
  var e, n = We;
  qn(af(t));
  try {
    Lu(t), e = qu(t);
  } finally {
    qn(n);
  }
  return e;
}
function Ou(t) {
  var e = Ms(t);
  if (t.equals(e) || (t.v = e, t.wv = ju()), !lr)
    if (Ut !== null)
      Ut.set(t, t.v);
    else {
      var n = (Ii || t.f & Sn) && t.deps !== null ? xi : zt;
      $t(t, n);
    }
}
const Ei = /* @__PURE__ */ new Map();
function nr(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: bu,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function xe(t, e) {
  const n = nr(t);
  return Vu(n), n;
}
// @__NO_SIDE_EFFECTS__
function wu(t, e = !1, n = !0) {
  var r;
  const i = nr(t);
  return e || (i.equals = Iu), Kr && n && ut !== null && ut.l !== null && ((r = ut.l).s ?? (r.s = [])).push(i), i;
}
function ae(t, e, n = !1) {
  Ge !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Rn || Ge.f & tl) && xa() && Ge.f & (tn | rr | vo | tl) && !(Jt != null && Jt.includes(t)) && Hd();
  let i = n ? Ee(e) : e;
  return Hr(t, i);
}
function Hr(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    lr ? Ei.set(t, e) : Ei.set(t, n), t.v = e;
    var i = ri.ensure();
    i.capture(t, n), t.f & tn && (t.f & pn && Ms(
      /** @type {Derived} */
      t
    ), $t(t, t.f & Sn ? xi : zt)), t.wv = ju(), Ru(t, pn), xa() && We !== null && We.f & zt && !(We.f & (oi | ar)) && (En === null ? If([t]) : En.push(t));
  }
  return e;
}
function pa(t) {
  ae(t, t.v + 1);
}
function Ru(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var i = xa(), r = n.length, a = 0; a < r; a++) {
      var o = n[a], u = o.f;
      if (!(!i && o === We)) {
        var l = (u & pn) === 0;
        l && $t(o, e), u & tn ? Ru(
          /** @type {Derived} */
          o,
          xi
        ) : l && (u & rr && ni !== null && ni.push(
          /** @type {Effect} */
          o
        ), tr(
          /** @type {Effect} */
          o
        ));
      }
    }
}
function Ee(t) {
  if (typeof t != "object" || t === null || Wn in t)
    return t;
  const e = As(t);
  if (e !== Ad && e !== Sd)
    return t;
  var n = /* @__PURE__ */ new Map(), i = ho(t), r = /* @__PURE__ */ xe(0), a = Ji, o = (u) => {
    if (Ji === a)
      return u();
    var l = Ge, c = Ji;
    un(null), sl(a);
    var d = u();
    return un(l), sl(c), d;
  };
  return i && n.set("length", /* @__PURE__ */ xe(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(u, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Nd();
        var d = n.get(l);
        return d === void 0 ? d = o(() => {
          var h = /* @__PURE__ */ xe(c.value);
          return n.set(l, h), h;
        }) : ae(d, c.value, !0), !0;
      },
      deleteProperty(u, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in u) {
            const d = o(() => /* @__PURE__ */ xe(Ft));
            n.set(l, d), pa(r);
          }
        } else
          ae(c, Ft), pa(r);
        return !0;
      },
      get(u, l, c) {
        var v;
        if (l === Wn)
          return t;
        var d = n.get(l), h = l in u;
        if (d === void 0 && (!h || (v = _i(u, l)) != null && v.writable) && (d = o(() => {
          var p = Ee(h ? u[l] : Ft), g = /* @__PURE__ */ xe(p);
          return g;
        }), n.set(l, d)), d !== void 0) {
          var f = s(d);
          return f === Ft ? void 0 : f;
        }
        return Reflect.get(u, l, c);
      },
      getOwnPropertyDescriptor(u, l) {
        var c = Reflect.getOwnPropertyDescriptor(u, l);
        if (c && "value" in c) {
          var d = n.get(l);
          d && (c.value = s(d));
        } else if (c === void 0) {
          var h = n.get(l), f = h == null ? void 0 : h.v;
          if (h !== void 0 && f !== Ft)
            return {
              enumerable: !0,
              configurable: !0,
              value: f,
              writable: !0
            };
        }
        return c;
      },
      has(u, l) {
        var f;
        if (l === Wn)
          return !0;
        var c = n.get(l), d = c !== void 0 && c.v !== Ft || Reflect.has(u, l);
        if (c !== void 0 || We !== null && (!d || (f = _i(u, l)) != null && f.writable)) {
          c === void 0 && (c = o(() => {
            var v = d ? Ee(u[l]) : Ft, p = /* @__PURE__ */ xe(v);
            return p;
          }), n.set(l, c));
          var h = s(c);
          if (h === Ft)
            return !1;
        }
        return d;
      },
      set(u, l, c, d) {
        var S;
        var h = n.get(l), f = l in u;
        if (i && l === "length")
          for (var v = c; v < /** @type {Source<number>} */
          h.v; v += 1) {
            var p = n.get(v + "");
            p !== void 0 ? ae(p, Ft) : v in u && (p = o(() => /* @__PURE__ */ xe(Ft)), n.set(v + "", p));
          }
        if (h === void 0)
          (!f || (S = _i(u, l)) != null && S.writable) && (h = o(() => /* @__PURE__ */ xe(void 0)), ae(h, Ee(c)), n.set(l, h));
        else {
          f = h.v !== Ft;
          var g = o(() => Ee(c));
          ae(h, g);
        }
        var _ = Reflect.getOwnPropertyDescriptor(u, l);
        if (_ != null && _.set && _.set.call(d, c), !f) {
          if (i && typeof l == "string") {
            var C = (
              /** @type {Source<number>} */
              n.get("length")
            ), x = Number(l);
            Number.isInteger(x) && x >= C.v && ae(C, x + 1);
          }
          pa(r);
        }
        return !0;
      },
      ownKeys(u) {
        s(r);
        var l = Reflect.ownKeys(u).filter((h) => {
          var f = n.get(h);
          return f === void 0 || f.v !== Ft;
        });
        for (var [c, d] of n)
          d.v !== Ft && !(c in u) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        Fd();
      }
    }
  );
}
function il(t) {
  try {
    if (t !== null && typeof t == "object" && Wn in t)
      return t[Wn];
  } catch {
  }
  return t;
}
function of(t, e) {
  return Object.is(il(t), il(e));
}
var $a, Ds, Mu, Du, Pu;
function sf() {
  if ($a === void 0) {
    $a = window, Ds = document, Mu = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    Du = _i(e, "firstChild").get, Pu = _i(e, "nextSibling").get, el(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), el(n) && (n.__t = void 0);
  }
}
function Ti(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Ur(t) {
  return Du.call(t);
}
// @__NO_SIDE_EFFECTS__
function Ta(t) {
  return Pu.call(t);
}
function _e(t, e) {
  return /* @__PURE__ */ Ur(t);
}
function J(t, e = !1) {
  {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Ur(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Ta(n) : n;
  }
}
function ye(t, e = 1, n = !1) {
  let i = t;
  for (; e--; )
    i = /** @type {TemplateNode} */
    /* @__PURE__ */ Ta(i);
  return i;
}
function lf(t) {
  t.textContent = "";
}
function Ps() {
  return !1;
}
function uf(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, Si(() => {
      document.activeElement === n && t.focus();
    });
  }
}
let rl = !1;
function cf() {
  rl || (rl = !0, document.addEventListener(
    "reset",
    (t) => {
      Promise.resolve().then(() => {
        var e;
        if (!t.defaultPrevented)
          for (
            const n of
            /**@type {HTMLFormElement} */
            t.target.elements
          )
            (e = n.__on_r) == null || e.call(n);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function go(t) {
  var e = Ge, n = We;
  un(null), qn(null);
  try {
    return t();
  } finally {
    un(e), qn(n);
  }
}
function df(t, e, n, i = n) {
  t.addEventListener(e, () => go(n));
  const r = t.__on_r;
  r ? t.__on_r = () => {
    r(), i(!0);
  } : t.__on_r = () => i(!0), cf();
}
function ff(t) {
  We === null && Ge === null && Md(), Ge !== null && Ge.f & Sn && We === null && Rd(), lr && wd();
}
function hf(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function si(t, e, n, i = !0) {
  var r = We;
  r !== null && r.f & Dn && (t |= Dn);
  var a = {
    ctx: ut,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | pn,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: r,
    b: r && r.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (n)
    try {
      ba(a), a.f |= Ls;
    } catch (l) {
      throw Vt(a), l;
    }
  else e !== null && tr(a);
  if (i) {
    var o = a;
    if (n && o.deps === null && o.teardown === null && o.nodes_start === null && o.first === o.last && // either `null`, or a singular child
    !(o.f & qr) && (o = o.first), o !== null && (o.parent = r, r !== null && hf(o, r), Ge !== null && Ge.f & tn && !(t & ar))) {
      var u = (
        /** @type {Derived} */
        Ge
      );
      (u.effects ?? (u.effects = [])).push(o);
    }
  }
  return a;
}
function vf() {
  return Ge !== null && !Rn;
}
function bo(t) {
  const e = si(xs, null, !1);
  return $t(e, zt), e.teardown = t, e;
}
function Ae(t) {
  ff();
  var e = (
    /** @type {Effect} */
    We.f
  ), n = !Ge && (e & oi) !== 0 && (e & Ls) === 0;
  if (n) {
    var i = (
      /** @type {ComponentContext} */
      ut
    );
    (i.e ?? (i.e = [])).push(t);
  } else
    return Nu(t);
}
function Nu(t) {
  return si(Ss | Td, t, !1);
}
function mf(t) {
  ri.ensure();
  const e = si(ar | qr, t, !0);
  return (n = {}) => new Promise((i) => {
    n.outro ? Ci(e, () => {
      Vt(e), i(void 0);
    }) : (Vt(e), i(void 0));
  });
}
function La(t) {
  return si(Ss, t, !1);
}
function pf(t) {
  return si(vo | qr, t, !0);
}
function Io(t, e = 0) {
  return si(xs | e, t, !0);
}
function Be(t, e = [], n = []) {
  Tu(e, n, (i) => {
    si(xs, () => t(...i.map(s)), !0);
  });
}
function Li(t, e = 0) {
  var n = si(rr | e, t, !0);
  return n;
}
function qt(t, e = !0) {
  return si(oi | qr, t, !0, e);
}
function Fu(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = lr, i = Ge;
    ol(!0), un(null);
    try {
      e.call(null);
    } finally {
      ol(n), un(i);
    }
  }
}
function Hu(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const r = n.ac;
    r !== null && go(() => {
      r.abort(yr);
    });
    var i = n.next;
    n.f & ar ? n.parent = null : Vt(n, e), n = i;
  }
}
function gf(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    e.f & oi || Vt(e), e = n;
  }
}
function Vt(t, e = !0) {
  var n = !1;
  (e || t.f & xd) && t.nodes_start !== null && t.nodes_end !== null && (bf(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), Hu(t, e && !n), eo(t, 0), $t(t, or);
  var i = t.transitions;
  if (i !== null)
    for (const a of i)
      a.stop();
  Fu(t);
  var r = t.parent;
  r !== null && r.first !== null && Uu(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function bf(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ta(t)
    );
    t.remove(), t = n;
  }
}
function Uu(t) {
  var e = t.parent, n = t.prev, i = t.next;
  n !== null && (n.next = i), i !== null && (i.prev = n), e !== null && (e.first === t && (e.first = i), e.last === t && (e.last = n));
}
function Ci(t, e) {
  var n = [];
  Ns(t, n, !0), Bu(n, () => {
    Vt(t), e && e();
  });
}
function Bu(t, e) {
  var n = t.length;
  if (n > 0) {
    var i = () => --n || e();
    for (var r of t)
      r.out(i);
  } else
    e();
}
function Ns(t, e, n) {
  if (!(t.f & Dn)) {
    if (t.f ^= Dn, t.transitions !== null)
      for (const o of t.transitions)
        (o.is_global || n) && e.push(o);
    for (var i = t.first; i !== null; ) {
      var r = i.next, a = (i.f & sr) !== 0 || (i.f & oi) !== 0;
      Ns(i, e, a ? n : !1), i = r;
    }
  }
}
function yo(t) {
  ku(t, !0);
}
function ku(t, e) {
  if (t.f & Dn) {
    t.f ^= Dn, t.f & zt || ($t(t, pn), tr(t));
    for (var n = t.first; n !== null; ) {
      var i = n.next, r = (n.f & sr) !== 0 || (n.f & oi) !== 0;
      ku(n, r ? e : !1), n = i;
    }
    if (t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || e) && a.in();
  }
}
let xr = !1;
function al(t) {
  xr = t;
}
let lr = !1;
function ol(t) {
  lr = t;
}
let Ge = null, Rn = !1;
function un(t) {
  Ge = t;
}
let We = null;
function qn(t) {
  We = t;
}
let Jt = null;
function Vu(t) {
  Ge !== null && (Jt === null ? Jt = [t] : Jt.push(t));
}
let Qt = null, vn = 0, En = null;
function If(t) {
  En = t;
}
let Gu = 1, ga = 0, Ji = ga;
function sl(t) {
  Ji = t;
}
let Ii = !1;
function ju() {
  return ++Gu;
}
function _o(t) {
  var h;
  var e = t.f;
  if (e & pn)
    return !0;
  if (e & xi) {
    var n = t.deps, i = (e & Sn) !== 0;
    if (n !== null) {
      var r, a, o = (e & Ja) !== 0, u = i && We !== null && !Ii, l = n.length;
      if ((o || u) && (We === null || !(We.f & or))) {
        var c = (
          /** @type {Derived} */
          t
        ), d = c.parent;
        for (r = 0; r < l; r++)
          a = n[r], (o || !((h = a == null ? void 0 : a.reactions) != null && h.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        o && (c.f ^= Ja), u && d !== null && !(d.f & Sn) && (c.f ^= Sn);
      }
      for (r = 0; r < l; r++)
        if (a = n[r], _o(
          /** @type {Derived} */
          a
        ) && Ou(
          /** @type {Derived} */
          a
        ), a.wv > t.wv)
          return !0;
    }
    (!i || We !== null && !Ii) && $t(t, zt);
  }
  return !1;
}
function Wu(t, e, n = !0) {
  var i = t.reactions;
  if (i !== null && !(Jt != null && Jt.includes(t)))
    for (var r = 0; r < i.length; r++) {
      var a = i[r];
      a.f & tn ? Wu(
        /** @type {Derived} */
        a,
        e,
        !1
      ) : e === a && (n ? $t(a, pn) : a.f & zt && $t(a, xi), tr(
        /** @type {Effect} */
        a
      ));
    }
}
function qu(t) {
  var g;
  var e = Qt, n = vn, i = En, r = Ge, a = Ii, o = Jt, u = ut, l = Rn, c = Ji, d = t.f;
  Qt = /** @type {null | Value[]} */
  null, vn = 0, En = null, Ii = (d & Sn) !== 0 && (Rn || !xr || Ge === null), Ge = d & (oi | ar) ? null : t, Jt = null, Nr(t.ctx), Rn = !1, Ji = ++ga, t.ac !== null && (go(() => {
    t.ac.abort(yr);
  }), t.ac = null);
  try {
    t.f |= Jo;
    var h = (
      /** @type {Function} */
      t.fn
    ), f = h(), v = t.deps;
    if (Qt !== null) {
      var p;
      if (eo(t, vn), v !== null && vn > 0)
        for (v.length = vn + Qt.length, p = 0; p < Qt.length; p++)
          v[vn + p] = Qt[p];
      else
        t.deps = v = Qt;
      if (!Ii || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      d & tn && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (p = vn; p < v.length; p++)
          ((g = v[p]).reactions ?? (g.reactions = [])).push(t);
    } else v !== null && vn < v.length && (eo(t, vn), v.length = vn);
    if (xa() && En !== null && !Rn && v !== null && !(t.f & (tn | xi | pn)))
      for (p = 0; p < /** @type {Source[]} */
      En.length; p++)
        Wu(
          En[p],
          /** @type {Effect} */
          t
        );
    return r !== null && r !== t && (ga++, En !== null && (i === null ? i = En : i.push(.../** @type {Source[]} */
    En))), t.f & Qi && (t.f ^= Qi), f;
  } catch (_) {
    return Eu(_);
  } finally {
    t.f ^= Jo, Qt = e, vn = n, En = i, Ge = r, Ii = a, Jt = o, Nr(u), Rn = l, Ji = c;
  }
}
function yf(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var i = Cd.call(n, t);
    if (i !== -1) {
      var r = n.length - 1;
      r === 0 ? n = e.reactions = null : (n[i] = n[r], n.pop());
    }
  }
  n === null && e.f & tn && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Qt === null || !Qt.includes(e)) && ($t(e, xi), e.f & (Sn | Ja) || (e.f ^= Ja), Lu(
    /** @type {Derived} **/
    e
  ), eo(
    /** @type {Derived} **/
    e,
    0
  ));
}
function eo(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var i = e; i < n.length; i++)
      yf(t, n[i]);
}
function ba(t) {
  var e = t.f;
  if (!(e & or)) {
    $t(t, zt);
    var n = We, i = xr;
    We = t, xr = !0;
    try {
      e & rr ? gf(t) : Hu(t), Fu(t);
      var r = qu(t);
      t.teardown = typeof r == "function" ? r : null, t.wv = Gu;
      var a;
      hu && Gd && t.f & pn && t.deps;
    } finally {
      xr = i, We = n;
    }
  }
}
async function Eo() {
  await Promise.resolve(), zd();
}
function s(t) {
  var e = t.f, n = (e & tn) !== 0;
  if (Ge !== null && !Rn) {
    var i = We !== null && (We.f & or) !== 0;
    if (!i && !(Jt != null && Jt.includes(t))) {
      var r = Ge.deps;
      if (Ge.f & Jo)
        t.rv < ga && (t.rv = ga, Qt === null && r !== null && r[vn] === t ? vn++ : Qt === null ? Qt = [t] : (!Ii || !Qt.includes(t)) && Qt.push(t));
      else {
        (Ge.deps ?? (Ge.deps = [])).push(t);
        var a = t.reactions;
        a === null ? t.reactions = [Ge] : a.includes(Ge) || a.push(Ge);
      }
    }
  } else if (n && /** @type {Derived} */
  t.deps === null && /** @type {Derived} */
  t.effects === null) {
    var o = (
      /** @type {Derived} */
      t
    ), u = o.parent;
    u !== null && !(u.f & Sn) && (o.f ^= Sn);
  }
  if (lr) {
    if (Ei.has(t))
      return Ei.get(t);
    if (n) {
      o = /** @type {Derived} */
      t;
      var l = o.v;
      return (!(o.f & zt) && o.reactions !== null || Ku(o)) && (l = Ms(o)), Ei.set(o, l), l;
    }
  } else if (n) {
    if (o = /** @type {Derived} */
    t, Ut != null && Ut.has(o))
      return Ut.get(o);
    _o(o) && Ou(o);
  }
  if (Ut != null && Ut.has(t))
    return Ut.get(t);
  if (t.f & Qi)
    throw t.v;
  return t.v;
}
function Ku(t) {
  if (t.v === Ft) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (Ei.has(e) || e.f & tn && Ku(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Oi(t) {
  var e = Rn;
  try {
    return Rn = !0, t();
  } finally {
    Rn = e;
  }
}
const _f = -7169;
function $t(t, e) {
  t.f = t.f & _f | e;
}
function Ef(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (Wn in t)
      as(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && Wn in n && as(n);
      }
  }
}
function as(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let i in t)
      try {
        as(t[i], e);
      } catch {
      }
    const n = As(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const i = vu(n);
      for (let r in i) {
        const a = i[r].get;
        if (a)
          try {
            a.call(t);
          } catch {
          }
      }
    }
  }
}
const zu = /* @__PURE__ */ new Set(), os = /* @__PURE__ */ new Set();
function Fs(t, e, n, i = {}) {
  function r(a) {
    if (i.capture || da.call(e, a), !a.cancelBubble)
      return go(() => n == null ? void 0 : n.call(this, a));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? Si(() => {
    e.addEventListener(t, r, i);
  }) : e.addEventListener(t, r, i), r;
}
function Cf(t, e, n, i = {}) {
  var r = Fs(e, t, n, i);
  return () => {
    t.removeEventListener(e, r, i);
  };
}
function ca(t, e, n, i, r) {
  var a = { capture: i, passive: r }, o = Fs(t, e, n, a);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && bo(() => {
    e.removeEventListener(t, o, a);
  });
}
function ur(t) {
  for (var e = 0; e < t.length; e++)
    zu.add(t[e]);
  for (var n of os)
    n(t);
}
let ll = null;
function da(t) {
  var x;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), i = t.type, r = ((x = t.composedPath) == null ? void 0 : x.call(t)) || [], a = (
    /** @type {null | Element} */
    r[0] || t.target
  );
  ll = t;
  var o = 0, u = ll === t && t.__root;
  if (u) {
    var l = r.indexOf(u);
    if (l !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var c = r.indexOf(e);
    if (c === -1)
      return;
    l <= c && (o = l);
  }
  if (a = /** @type {Element} */
  r[o] || t.target, a !== e) {
    Qa(t, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var d = Ge, h = We;
    un(null), qn(null);
    try {
      for (var f, v = []; a !== null; ) {
        var p = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var g = a["__" + i];
          if (g != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === a))
            if (ho(g)) {
              var [_, ...C] = g;
              _.apply(a, [t, ...C]);
            } else
              g.call(a, t);
        } catch (S) {
          f ? v.push(S) : f = S;
        }
        if (t.cancelBubble || p === e || p === null)
          break;
        a = p;
      }
      if (f) {
        for (let S of v)
          queueMicrotask(() => {
            throw S;
          });
        throw f;
      }
    } finally {
      t.__root = e, delete t.currentTarget, un(d), qn(h);
    }
  }
}
function Xu(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function Br(t, e) {
  var n = (
    /** @type {Effect} */
    We
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function ge(t, e) {
  var n = (e & 1) !== 0, i = (e & 2) !== 0, r, a = !t.startsWith("<!>");
  return () => {
    r === void 0 && (r = Xu(a ? t : "<!>" + t), n || (r = /** @type {Node} */
    /* @__PURE__ */ Ur(r)));
    var o = (
      /** @type {TemplateNode} */
      i || Mu ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    if (n) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ur(o)
      ), l = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Br(u, l);
    } else
      Br(o, o);
    return o;
  };
}
// @__NO_SIDE_EFFECTS__
function Af(t, e, n = "svg") {
  var i = !t.startsWith("<!>"), r = `<${n}>${i ? t : "<!>" + t}</${n}>`, a;
  return () => {
    if (!a) {
      var o = (
        /** @type {DocumentFragment} */
        Xu(r)
      ), u = (
        /** @type {Element} */
        /* @__PURE__ */ Ur(o)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ Ur(u);
    }
    var l = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return Br(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function cn(t, e) {
  return /* @__PURE__ */ Af(t, e, "svg");
}
function Bt(t = "") {
  {
    var e = Ti(t + "");
    return Br(e, e), e;
  }
}
function le() {
  var t = document.createDocumentFragment(), e = document.createComment(""), n = Ti();
  return t.append(e, n), Br(e, n), t;
}
function w(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function Sf(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const xf = [
  "beforeinput",
  "click",
  "change",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart"
];
function Tf(t) {
  return xf.includes(t);
}
const Lf = {
  // no `class: 'className'` because we handle that separately
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly",
  defaultvalue: "defaultValue",
  defaultchecked: "defaultChecked",
  srcobject: "srcObject",
  novalidate: "noValidate",
  allowfullscreen: "allowFullscreen",
  disablepictureinpicture: "disablePictureInPicture",
  disableremoteplayback: "disableRemotePlayback"
};
function Of(t) {
  return t = t.toLowerCase(), Lf[t] ?? t;
}
const wf = ["touchstart", "touchmove"];
function Rf(t) {
  return wf.includes(t);
}
function ft(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function Mf(t, e) {
  return Df(t, e);
}
const pr = /* @__PURE__ */ new Map();
function Df(t, { target: e, anchor: n, props: i = {}, events: r, context: a, intro: o = !0 }) {
  sf();
  var u = /* @__PURE__ */ new Set(), l = (h) => {
    for (var f = 0; f < h.length; f++) {
      var v = h[f];
      if (!u.has(v)) {
        u.add(v);
        var p = Rf(v);
        e.addEventListener(v, da, { passive: p });
        var g = pr.get(v);
        g === void 0 ? (document.addEventListener(v, da, { passive: p }), pr.set(v, 1)) : pr.set(v, g + 1);
      }
    }
  };
  l(Cs(zu)), os.add(l);
  var c = void 0, d = mf(() => {
    var h = n ?? e.appendChild(Ti());
    return Qd(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (f) => {
        if (a) {
          we({});
          var v = (
            /** @type {ComponentContext} */
            ut
          );
          v.c = a;
        }
        r && (i.$$events = r), c = t(f, i) || {}, a && Re();
      }
    ), () => {
      var p;
      for (var f of u) {
        e.removeEventListener(f, da);
        var v = (
          /** @type {number} */
          pr.get(f)
        );
        --v === 0 ? (document.removeEventListener(f, da), pr.delete(f)) : pr.set(f, v);
      }
      os.delete(l), h !== n && ((p = h.parentNode) == null || p.removeChild(h));
    };
  });
  return Pf.set(c, d), c;
}
let Pf = /* @__PURE__ */ new WeakMap();
function Ie(t, e, ...n) {
  var i = t, r = me, a;
  Li(() => {
    r !== (r = e()) && (a && (Vt(a), a = null), a = qt(() => (
      /** @type {SnippetFn} */
      r(i, ...n)
    )));
  }, sr);
}
function st(t) {
  ut === null && Os(), Kr && ut.l !== null ? Nf(ut).m.push(t) : Ae(() => {
    const e = Oi(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Pn(t) {
  ut === null && Os(), st(() => () => Oi(t));
}
function Nf(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
function he(t, e, n = !1) {
  var i = t, r = null, a = null, o = Ft, u = n ? sr : 0, l = !1;
  const c = (v, p = !0) => {
    l = !0, f(p, v);
  };
  var d = null;
  function h() {
    d !== null && (d.lastChild.remove(), i.before(d), d = null);
    var v = o ? r : a, p = o ? a : r;
    v && yo(v), p && Ci(p, () => {
      o ? a = null : r = null;
    });
  }
  const f = (v, p) => {
    if (o !== (o = v)) {
      var g = Ps(), _ = i;
      if (g && (d = document.createDocumentFragment(), d.append(_ = Ti())), o ? r ?? (r = p && qt(() => p(_))) : a ?? (a = p && qt(() => p(_))), g) {
        var C = (
          /** @type {Batch} */
          at
        ), x = o ? r : a, S = o ? a : r;
        x && C.skipped_effects.delete(x), S && C.skipped_effects.add(S), C.add_callback(h);
      } else
        h();
    }
  };
  Li(() => {
    l = !1, e(c), l || f(null, null);
  }, u);
}
function Xa(t, e) {
  return e;
}
function Ff(t, e, n) {
  for (var i = t.items, r = [], a = e.length, o = 0; o < a; o++)
    Ns(e[o].e, r, !0);
  var u = a > 0 && r.length === 0 && n !== null;
  if (u) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    lf(l), l.append(
      /** @type {Element} */
      n
    ), i.clear(), Un(t, e[0].prev, e[a - 1].next);
  }
  Bu(r, () => {
    for (var c = 0; c < a; c++) {
      var d = e[c];
      u || (i.delete(d.k), Un(t, d.prev, d.next)), Vt(d.e, !u);
    }
  });
}
function _r(t, e, n, i, r, a = null) {
  var o = t, u = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, l = (e & 4) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      t
    );
    o = c.appendChild(Ti());
  }
  var d = null, h = !1, f = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ Rs(() => {
    var C = n();
    return ho(C) ? C : C == null ? [] : Cs(C);
  }), p, g;
  function _() {
    Hf(
      g,
      p,
      u,
      f,
      o,
      r,
      e,
      i,
      n
    ), a !== null && (p.length === 0 ? d ? yo(d) : d = qt(() => a(o)) : d !== null && Ci(d, () => {
      d = null;
    }));
  }
  Li(() => {
    g ?? (g = /** @type {Effect} */
    We), p = /** @type {V[]} */
    s(v);
    var C = p.length;
    if (!(h && C === 0)) {
      h = C === 0;
      var x, S, b, E;
      if (Ps()) {
        var y = /* @__PURE__ */ new Set(), T = (
          /** @type {Batch} */
          at
        );
        for (S = 0; S < C; S += 1) {
          b = p[S], E = i(b, S);
          var A = u.items.get(E) ?? f.get(E);
          A ? e & 3 && Yu(A, b, S, e) : (x = Zu(
            null,
            u,
            null,
            null,
            b,
            E,
            S,
            r,
            e,
            n,
            !0
          ), f.set(E, x)), y.add(E);
        }
        for (const [O, B] of u.items)
          y.has(O) || T.skipped_effects.add(B.e);
        T.add_callback(_);
      } else
        _();
      s(v);
    }
  });
}
function Hf(t, e, n, i, r, a, o, u, l) {
  var re, U, I, L;
  var c = (o & 8) !== 0, d = (o & 3) !== 0, h = e.length, f = n.items, v = n.first, p = v, g, _ = null, C, x = [], S = [], b, E, y, T;
  if (c)
    for (T = 0; T < h; T += 1)
      b = e[T], E = u(b, T), y = f.get(E), y !== void 0 && ((re = y.a) == null || re.measure(), (C ?? (C = /* @__PURE__ */ new Set())).add(y));
  for (T = 0; T < h; T += 1) {
    if (b = e[T], E = u(b, T), y = f.get(E), y === void 0) {
      var A = i.get(E);
      if (A !== void 0) {
        i.delete(E), f.set(E, A);
        var O = _ ? _.next : p;
        Un(n, _, A), Un(n, A, O), Mo(A, O, r), _ = A;
      } else {
        var B = p ? (
          /** @type {TemplateNode} */
          p.e.nodes_start
        ) : r;
        _ = Zu(
          B,
          n,
          _,
          _ === null ? n.first : _.next,
          b,
          E,
          T,
          a,
          o,
          l
        );
      }
      f.set(E, _), x = [], S = [], p = _.next;
      continue;
    }
    if (d && Yu(y, b, T, o), y.e.f & Dn && (yo(y.e), c && ((U = y.a) == null || U.unfix(), (C ?? (C = /* @__PURE__ */ new Set())).delete(y))), y !== p) {
      if (g !== void 0 && g.has(y)) {
        if (x.length < S.length) {
          var Z = S[0], G;
          _ = Z.prev;
          var j = x[0], K = x[x.length - 1];
          for (G = 0; G < x.length; G += 1)
            Mo(x[G], Z, r);
          for (G = 0; G < S.length; G += 1)
            g.delete(S[G]);
          Un(n, j.prev, K.next), Un(n, _, j), Un(n, K, Z), p = Z, _ = K, T -= 1, x = [], S = [];
        } else
          g.delete(y), Mo(y, p, r), Un(n, y.prev, y.next), Un(n, y, _ === null ? n.first : _.next), Un(n, _, y), _ = y;
        continue;
      }
      for (x = [], S = []; p !== null && p.k !== E; )
        p.e.f & Dn || (g ?? (g = /* @__PURE__ */ new Set())).add(p), S.push(p), p = p.next;
      if (p === null)
        continue;
      y = p;
    }
    x.push(y), _ = y, p = y.next;
  }
  if (p !== null || g !== void 0) {
    for (var k = g === void 0 ? [] : Cs(g); p !== null; )
      p.e.f & Dn || k.push(p), p = p.next;
    var P = k.length;
    if (P > 0) {
      var M = o & 4 && h === 0 ? r : null;
      if (c) {
        for (T = 0; T < P; T += 1)
          (I = k[T].a) == null || I.measure();
        for (T = 0; T < P; T += 1)
          (L = k[T].a) == null || L.fix();
      }
      Ff(n, k, M);
    }
  }
  c && Si(() => {
    var $;
    if (C !== void 0)
      for (y of C)
        ($ = y.a) == null || $.apply();
  }), t.first = n.first && n.first.e, t.last = _ && _.e;
  for (var z of i.values())
    Vt(z.e);
  i.clear();
}
function Yu(t, e, n, i) {
  i & 1 && Hr(t.v, e), i & 2 ? Hr(
    /** @type {Value<number>} */
    t.i,
    n
  ) : t.i = n;
}
function Zu(t, e, n, i, r, a, o, u, l, c, d) {
  var h = (l & 1) !== 0, f = (l & 16) === 0, v = h ? f ? /* @__PURE__ */ wu(r, !1, !1) : nr(r) : r, p = l & 2 ? nr(o) : o, g = {
    i: p,
    v,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: i
  };
  try {
    if (t === null) {
      var _ = document.createDocumentFragment();
      _.append(t = Ti());
    }
    return g.e = qt(() => u(
      /** @type {Node} */
      t,
      v,
      p,
      c
    ), Vd), g.e.prev = n && n.e, g.e.next = i && i.e, n === null ? d || (e.first = g) : (n.next = g, n.e.next = g.e), i !== null && (i.prev = g, i.e.prev = g.e), g;
  } finally {
  }
}
function Mo(t, e, n) {
  for (var i = t.next ? (
    /** @type {TemplateNode} */
    t.next.e.nodes_start
  ) : n, r = e ? (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ) : n, a = (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ); a !== null && a !== i; ) {
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ta(a)
    );
    r.before(a), a = o;
  }
}
function Un(t, e, n) {
  e === null ? t.first = n : (e.next = n, e.e.next = n && n.e), n !== null && (n.prev = e, n.e.prev = e && e.e);
}
function wi(t, e, n) {
  var i = t, r, a, o = null, u = null;
  function l() {
    a && (Ci(a), a = null), o && (o.lastChild.remove(), i.before(o), o = null), a = u, u = null;
  }
  Li(() => {
    if (r !== (r = e())) {
      var c = Ps();
      if (r) {
        var d = i;
        c && (o = document.createDocumentFragment(), o.append(d = Ti()), a && at.skipped_effects.add(a)), u = qt(() => n(d, r));
      }
      c ? at.add_callback(l) : l();
    }
  }, sr);
}
function ul(t, e, n, i, r, a) {
  var o, u, l = null, c = (
    /** @type {TemplateNode} */
    t
  ), d;
  Li(() => {
    const h = e() || null;
    var f = h === "svg" ? _d : null;
    h !== o && (d && (h === null ? Ci(d, () => {
      d = null, u = null;
    }) : h === u ? yo(d) : Vt(d)), h && h !== u && (d = qt(() => {
      if (l = f ? document.createElementNS(f, h) : document.createElement(h), Br(l, l), i) {
        var v = (
          /** @type {TemplateNode} */
          l.appendChild(Ti())
        );
        i(l, v);
      }
      We.nodes_end = l, c.before(l);
    })), o = h, o && (u = o));
  }, sr);
}
function Ue(t, e, n) {
  La(() => {
    var i = Oi(() => e(t, n == null ? void 0 : n()) || {});
    if (n && (i != null && i.update)) {
      var r = !1, a = (
        /** @type {any} */
        {}
      );
      Io(() => {
        var o = n();
        Ef(o), r && ws(a, o) && (a = o, i.update(o));
      }), r = !0;
    }
    if (i != null && i.destroy)
      return () => (
        /** @type {Function} */
        i.destroy()
      );
  });
}
function Uf(t, e) {
  var n = void 0, i;
  Li(() => {
    n !== (n = e()) && (i && (Vt(i), i = null), n && (i = qt(() => {
      La(() => (
        /** @type {(node: Element) => void} */
        n(t)
      ));
    })));
  });
}
function Qu(t) {
  var e, n, i = "";
  if (typeof t == "string" || typeof t == "number") i += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var r = t.length;
    for (e = 0; e < r; e++) t[e] && (n = Qu(t[e])) && (i && (i += " "), i += n);
  } else for (n in t) t[n] && (i && (i += " "), i += n);
  return i;
}
function Bf() {
  for (var t, e, n = 0, i = "", r = arguments.length; n < r; n++) (t = arguments[n]) && (e = Qu(t)) && (i && (i += " "), i += e);
  return i;
}
function Ju(t) {
  return typeof t == "object" ? Bf(t) : t ?? "";
}
const cl = [...` 	
\r\f \v\uFEFF`];
function kf(t, e, n) {
  var i = t == null ? "" : "" + t;
  if (n) {
    for (var r in n)
      if (n[r])
        i = i ? i + " " + r : r;
      else if (i.length)
        for (var a = r.length, o = 0; (o = i.indexOf(r, o)) >= 0; ) {
          var u = o + a;
          (o === 0 || cl.includes(i[o - 1])) && (u === i.length || cl.includes(i[u])) ? i = (o === 0 ? "" : i.substring(0, o)) + i.substring(u + 1) : o = u;
        }
  }
  return i === "" ? null : i;
}
function dl(t, e = !1) {
  var n = e ? " !important;" : ";", i = "";
  for (var r in t) {
    var a = t[r];
    a != null && a !== "" && (i += " " + r + ": " + a + n);
  }
  return i;
}
function Do(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function Vf(t, e) {
  if (e) {
    var n = "", i, r;
    if (Array.isArray(e) ? (i = e[0], r = e[1]) : i = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, o = 0, u = !1, l = [];
      i && l.push(...Object.keys(i).map(Do)), r && l.push(...Object.keys(r).map(Do));
      var c = 0, d = -1;
      const g = t.length;
      for (var h = 0; h < g; h++) {
        var f = t[h];
        if (u ? f === "/" && t[h - 1] === "*" && (u = !1) : a ? a === f && (a = !1) : f === "/" && t[h + 1] === "*" ? u = !0 : f === '"' || f === "'" ? a = f : f === "(" ? o++ : f === ")" && o--, !u && a === !1 && o === 0) {
          if (f === ":" && d === -1)
            d = h;
          else if (f === ";" || h === g - 1) {
            if (d !== -1) {
              var v = Do(t.substring(c, d).trim());
              if (!l.includes(v)) {
                f !== ";" && h++;
                var p = t.substring(c, h).trim();
                n += " " + p + ";";
              }
            }
            c = h + 1, d = -1;
          }
        }
      }
    }
    return i && (n += dl(i)), r && (n += dl(r, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function $u(t, e, n, i, r, a) {
  var o = t.__className;
  if (o !== n || o === void 0) {
    var u = kf(n, i, a);
    u == null ? t.removeAttribute("class") : e ? t.className = u : t.setAttribute("class", u), t.__className = n;
  } else if (a && r !== a)
    for (var l in a) {
      var c = !!a[l];
      (r == null || c !== !!r[l]) && t.classList.toggle(l, c);
    }
  return a;
}
function Po(t, e = {}, n, i) {
  for (var r in n) {
    var a = n[r];
    e[r] !== a && (n[r] == null ? t.style.removeProperty(r) : t.style.setProperty(r, a, i));
  }
}
function nn(t, e, n, i) {
  var r = t.__style;
  if (r !== e) {
    var a = Vf(e, i);
    a == null ? t.removeAttribute("style") : t.style.cssText = a, t.__style = e;
  } else i && (Array.isArray(i) ? (Po(t, n == null ? void 0 : n[0], i[0]), Po(t, n == null ? void 0 : n[1], i[1], "important")) : Po(t, n, i));
  return i;
}
function ss(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!ho(e))
      return Bd();
    for (var i of t.options)
      i.selected = e.includes(fl(i));
    return;
  }
  for (i of t.options) {
    var r = fl(i);
    if (of(r, e)) {
      i.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function Gf(t) {
  var e = new MutationObserver(() => {
    ss(t, t.__value);
  });
  e.observe(t, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), bo(() => {
    e.disconnect();
  });
}
function fl(t) {
  return "__value" in t ? t.__value : t.value;
}
const na = Symbol("class"), ia = Symbol("style"), ec = Symbol("is custom element"), tc = Symbol("is html");
function hl(t, e) {
  var n = Hs(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== "PROGRESS") || (t.value = e ?? "");
}
function jf(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function Ia(t, e, n, i) {
  var r = Hs(t);
  r[e] !== (r[e] = n) && (e === "loading" && (t[Ld] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && nc(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function Wf(t, e, n, i, r = !1, a = !1) {
  var o = Hs(t), u = o[ec], l = !o[tc], c = e || {}, d = t.tagName === "OPTION";
  for (var h in e)
    h in n || (n[h] = null);
  n.class ? n.class = Ju(n.class) : n[na] && (n.class = null), n[ia] && (n.style ?? (n.style = null));
  var f = nc(t);
  for (const S in n) {
    let b = n[S];
    if (d && S === "value" && b == null) {
      t.value = t.__value = "", c[S] = b;
      continue;
    }
    if (S === "class") {
      var v = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      $u(t, v, b, i, e == null ? void 0 : e[na], n[na]), c[S] = b, c[na] = n[na];
      continue;
    }
    if (S === "style") {
      nn(t, b, e == null ? void 0 : e[ia], n[ia]), c[S] = b, c[ia] = n[ia];
      continue;
    }
    var p = c[S];
    if (!(b === p && !(b === void 0 && t.hasAttribute(S)))) {
      c[S] = b;
      var g = S[0] + S[1];
      if (g !== "$$")
        if (g === "on") {
          const E = {}, y = "$$" + S;
          let T = S.slice(2);
          var _ = Tf(T);
          if (Sf(T) && (T = T.slice(0, -7), E.capture = !0), !_ && p) {
            if (b != null) continue;
            t.removeEventListener(T, c[y], E), c[y] = null;
          }
          if (b != null)
            if (_)
              t[`__${T}`] = b, ur([T]);
            else {
              let A = function(O) {
                c[S].call(this, O);
              };
              c[y] = Fs(T, t, A, E);
            }
          else _ && (t[`__${T}`] = void 0);
        } else if (S === "style")
          Ia(t, S, b);
        else if (S === "autofocus")
          uf(
            /** @type {HTMLElement} */
            t,
            !!b
          );
        else if (!u && (S === "__value" || S === "value" && b != null))
          t.value = t.__value = b;
        else if (S === "selected" && d)
          jf(
            /** @type {HTMLOptionElement} */
            t,
            b
          );
        else {
          var C = S;
          l || (C = Of(C));
          var x = C === "defaultValue" || C === "defaultChecked";
          if (b == null && !u && !x)
            if (o[S] = null, C === "value" || C === "checked") {
              let E = (
                /** @type {HTMLInputElement} */
                t
              );
              const y = e === void 0;
              if (C === "value") {
                let T = E.defaultValue;
                E.removeAttribute(C), E.defaultValue = T, E.value = E.__value = y ? T : null;
              } else {
                let T = E.defaultChecked;
                E.removeAttribute(C), E.defaultChecked = T, E.checked = y ? T : !1;
              }
            } else
              t.removeAttribute(S);
          else x || f.includes(C) && (u || typeof b != "string") ? (t[C] = b, C in o && (o[C] = Ft)) : typeof b != "function" && Ia(t, C, b);
        }
    }
  }
  return c;
}
function He(t, e, n = [], i = [], r, a = !1, o = !1) {
  Tu(n, i, (u) => {
    var l = void 0, c = {}, d = t.nodeName === "SELECT", h = !1;
    if (Li(() => {
      var v = e(...u.map(s)), p = Wf(
        t,
        l,
        v,
        r,
        a,
        o
      );
      h && d && "value" in v && ss(
        /** @type {HTMLSelectElement} */
        t,
        v.value
      );
      for (let _ of Object.getOwnPropertySymbols(c))
        v[_] || Vt(c[_]);
      for (let _ of Object.getOwnPropertySymbols(v)) {
        var g = v[_];
        _.description === Ed && (!l || g !== l[_]) && (c[_] && Vt(c[_]), c[_] = qt(() => Uf(t, () => g))), p[_] = g;
      }
      l = p;
    }), d) {
      var f = (
        /** @type {HTMLSelectElement} */
        t
      );
      La(() => {
        ss(
          f,
          /** @type {Record<string | symbol, any>} */
          l.value,
          !0
        ), Gf(f);
      });
    }
    h = !0;
  });
}
function Hs(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ?? (t.__attributes = {
      [ec]: t.nodeName.includes("-"),
      [tc]: t.namespaceURI === yd
    })
  );
}
var vl = /* @__PURE__ */ new Map();
function nc(t) {
  var e = t.getAttribute("is") || t.nodeName, n = vl.get(e);
  if (n) return n;
  vl.set(e, n = []);
  for (var i, r = t, a = Element.prototype; a !== r; ) {
    i = vu(r);
    for (var o in i)
      i[o].set && n.push(o);
    r = As(r);
  }
  return n;
}
function ya(t, e, n = e) {
  var i = /* @__PURE__ */ new WeakSet();
  df(t, "input", async (r) => {
    var a = r ? t.defaultValue : t.value;
    if (a = No(t) ? Fo(a) : a, n(a), at !== null && i.add(at), await Eo(), a !== (a = e())) {
      var o = t.selectionStart, u = t.selectionEnd, l = t.value.length;
      if (t.value = a ?? "", u !== null) {
        var c = t.value.length;
        o === u && u === l && c > l ? (t.selectionStart = c, t.selectionEnd = c) : (t.selectionStart = o, t.selectionEnd = Math.min(u, c));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Oi(e) == null && t.value && (n(No(t) ? Fo(t.value) : t.value), at !== null && i.add(at)), Io(() => {
    var r = e();
    if (t === document.activeElement) {
      var a = (
        /** @type {Batch} */
        Wa ?? at
      );
      if (i.has(a))
        return;
    }
    No(t) && r === Fo(t.value) || t.type === "date" && !r && !t.value || r !== t.value && (t.value = r ?? "");
  });
}
function No(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function Fo(t) {
  return t === "" ? null : +t;
}
function ml(t, e) {
  return t === e || (t == null ? void 0 : t[Wn]) === e;
}
function Se(t = {}, e, n, i) {
  return La(() => {
    var r, a;
    return Io(() => {
      r = a, a = [], Oi(() => {
        t !== n(...a) && (e(t, ...a), r && ml(n(...r), t) && e(null, ...r));
      });
    }), () => {
      Si(() => {
        a && ml(n(...a), t) && e(null, ...a);
      });
    };
  }), t;
}
function Us(t, e, n) {
  if (t == null)
    return e(void 0), n && n(void 0), me;
  const i = Oi(
    () => t.subscribe(
      e,
      // @ts-expect-error
      n
    )
  );
  return i.unsubscribe ? () => i.unsubscribe() : i;
}
const gr = [];
function qf(t, e) {
  return {
    subscribe: bt(t, e).subscribe
  };
}
function bt(t, e = me) {
  let n = null;
  const i = /* @__PURE__ */ new Set();
  function r(u) {
    if (ws(t, u) && (t = u, n)) {
      const l = !gr.length;
      for (const c of i)
        c[1](), gr.push(c, t);
      if (l) {
        for (let c = 0; c < gr.length; c += 2)
          gr[c][0](gr[c + 1]);
        gr.length = 0;
      }
    }
  }
  function a(u) {
    r(u(
      /** @type {T} */
      t
    ));
  }
  function o(u, l = me) {
    const c = [u, l];
    return i.add(c), i.size === 1 && (n = e(r, a) || me), u(
      /** @type {T} */
      t
    ), () => {
      i.delete(c), i.size === 0 && n && (n(), n = null);
    };
  }
  return { set: r, update: a, subscribe: o };
}
function zr(t, e, n) {
  const i = !Array.isArray(t), r = i ? [t] : t;
  if (!r.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = e.length < 2;
  return qf(n, (o, u) => {
    let l = !1;
    const c = [];
    let d = 0, h = me;
    const f = () => {
      if (d)
        return;
      h();
      const p = e(i ? c[0] : c, o, u);
      a ? o(p) : h = typeof p == "function" ? p : me;
    }, v = r.map(
      (p, g) => Us(
        p,
        (_) => {
          c[g] = _, d &= ~(1 << g), l && f();
        },
        () => {
          d |= 1 << g;
        }
      )
    );
    return l = !0, f(), function() {
      mu(v), h(), l = !1;
    };
  });
}
function ic(t) {
  let e;
  return Us(t, (n) => e = n)(), e;
}
let Fa = !1, ls = Symbol();
function Rt(t, e, n) {
  const i = n[e] ?? (n[e] = {
    store: null,
    source: /* @__PURE__ */ wu(void 0),
    unsubscribe: me
  });
  if (i.store !== t && !(ls in n))
    if (i.unsubscribe(), i.store = t ?? null, t == null)
      i.source.v = void 0, i.unsubscribe = me;
    else {
      var r = !0;
      i.unsubscribe = Us(t, (a) => {
        r ? i.source.v = a : ae(i.source, a);
      }), r = !1;
    }
  return t && ls in n ? ic(t) : s(i.source);
}
function kt(t, e) {
  return t.set(e), e;
}
function gn() {
  const t = {};
  function e() {
    bo(() => {
      for (var n in t)
        t[n].unsubscribe();
      Qa(t, ls, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [t, e];
}
function Kf(t) {
  var e = Fa;
  try {
    return Fa = !1, [t(), Fa];
  } finally {
    Fa = e;
  }
}
const zf = {
  get(t, e) {
    if (!t.exclude.includes(e))
      return t.props[e];
  },
  set(t, e) {
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    if (!t.exclude.includes(e) && e in t.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: t.props[e]
      };
  },
  has(t, e) {
    return t.exclude.includes(e) ? !1 : e in t.props;
  },
  ownKeys(t) {
    return Reflect.ownKeys(t.props).filter((e) => !t.exclude.includes(e));
  }
};
// @__NO_SIDE_EFFECTS__
function Ve(t, e, n) {
  return new Proxy(
    { props: t, exclude: e },
    zf
  );
}
const Xf = {
  get(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let i = t.props[n];
      if (ta(i) && (i = i()), typeof i == "object" && i !== null && e in i) return i[e];
    }
  },
  set(t, e, n) {
    let i = t.props.length;
    for (; i--; ) {
      let r = t.props[i];
      ta(r) && (r = r());
      const a = _i(r, e);
      if (a && a.set)
        return a.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let i = t.props[n];
      if (ta(i) && (i = i()), typeof i == "object" && i !== null && e in i) {
        const r = _i(i, e);
        return r && !r.configurable && (r.configurable = !0), r;
      }
    }
  },
  has(t, e) {
    if (e === Wn || e === gu) return !1;
    for (let n of t.props)
      if (ta(n) && (n = n()), n != null && e in n) return !0;
    return !1;
  },
  ownKeys(t) {
    const e = [];
    for (let n of t.props)
      if (ta(n) && (n = n()), !!n) {
        for (const i in n)
          e.includes(i) || e.push(i);
        for (const i of Object.getOwnPropertySymbols(n))
          e.includes(i) || e.push(i);
      }
    return e;
  }
};
function et(...t) {
  return new Proxy({ props: t }, Xf);
}
function m(t, e, n, i) {
  var S;
  var r = !Kr || (n & 2) !== 0, a = (n & 8) !== 0, o = (n & 16) !== 0, u = (
    /** @type {V} */
    i
  ), l = !0, c = () => (l && (l = !1, u = o ? Oi(
    /** @type {() => V} */
    i
  ) : (
    /** @type {V} */
    i
  )), u), d;
  if (a) {
    var h = Wn in t || gu in t;
    d = ((S = _i(t, e)) == null ? void 0 : S.set) ?? (h && e in t ? (b) => t[e] = b : void 0);
  }
  var f, v = !1;
  a ? [f, v] = Kf(() => (
    /** @type {V} */
    t[e]
  )) : f = /** @type {V} */
  t[e], f === void 0 && i !== void 0 && (f = c(), d && (r && Pd(), d(f)));
  var p;
  if (r ? p = () => {
    var b = (
      /** @type {V} */
      t[e]
    );
    return b === void 0 ? c() : (l = !0, b);
  } : p = () => {
    var b = (
      /** @type {V} */
      t[e]
    );
    return b !== void 0 && (u = /** @type {V} */
    void 0), b === void 0 ? u : b;
  }, r && !(n & 4))
    return p;
  if (d) {
    var g = t.$$legacy;
    return (
      /** @type {() => V} */
      function(b, E) {
        return arguments.length > 0 ? ((!r || !E || g || v) && d(E ? p() : b), b) : p();
      }
    );
  }
  var _ = !1, C = (n & 1 ? po : Rs)(() => (_ = !1, p()));
  a && s(C);
  var x = (
    /** @type {Effect} */
    We
  );
  return (
    /** @type {() => V} */
    function(b, E) {
      if (arguments.length > 0) {
        const y = E ? s(C) : r && a ? Ee(b) : b;
        return ae(C, y), _ = !0, u !== void 0 && (u = y), b;
      }
      return lr && _ || x.f & or ? C.v : s(C);
    }
  );
}
const Yf = "5";
var fu;
typeof window < "u" && ((fu = window.__svelte ?? (window.__svelte = {})).v ?? (fu.v = /* @__PURE__ */ new Set())).add(Yf);
function Zf(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Qf = function(e) {
  return Jf(e) && !$f(e);
};
function Jf(t) {
  return !!t && typeof t == "object";
}
function $f(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || nh(t);
}
var eh = typeof Symbol == "function" && Symbol.for, th = eh ? Symbol.for("react.element") : 60103;
function nh(t) {
  return t.$$typeof === th;
}
function ih(t) {
  return Array.isArray(t) ? [] : {};
}
function _a(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? kr(ih(t), t, e) : t;
}
function rh(t, e, n) {
  return t.concat(e).map(function(i) {
    return _a(i, n);
  });
}
function ah(t, e) {
  if (!e.customMerge)
    return kr;
  var n = e.customMerge(t);
  return typeof n == "function" ? n : kr;
}
function oh(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function pl(t) {
  return Object.keys(t).concat(oh(t));
}
function rc(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function sh(t, e) {
  return rc(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function lh(t, e, n) {
  var i = {};
  return n.isMergeableObject(t) && pl(t).forEach(function(r) {
    i[r] = _a(t[r], n);
  }), pl(e).forEach(function(r) {
    sh(t, r) || (rc(t, r) && n.isMergeableObject(e[r]) ? i[r] = ah(r, n)(t[r], e[r], n) : i[r] = _a(e[r], n));
  }), i;
}
function kr(t, e, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || rh, n.isMergeableObject = n.isMergeableObject || Qf, n.cloneUnlessOtherwiseSpecified = _a;
  var i = Array.isArray(e), r = Array.isArray(t), a = i === r;
  return a ? i ? n.arrayMerge(t, e, n) : lh(t, e, n) : _a(e, n);
}
kr.all = function(e, n) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(i, r) {
    return kr(i, r, n);
  }, {});
};
var uh = kr, ch = uh;
const dh = /* @__PURE__ */ Zf(ch);
var us = function(t, e) {
  return us = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
    n.__proto__ = i;
  } || function(n, i) {
    for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (n[r] = i[r]);
  }, us(t, e);
};
function tt(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  us(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
var fe = function() {
  return fe = Object.assign || function(e) {
    for (var n, i = 1, r = arguments.length; i < r; i++) {
      n = arguments[i];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, fe.apply(this, arguments);
};
function fh(t, e) {
  var n = {};
  for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, i = Object.getOwnPropertySymbols(t); r < i.length; r++)
      e.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[r]) && (n[i[r]] = t[i[r]]);
  return n;
}
function ac(t, e, n, i) {
  function r(a) {
    return a instanceof n ? a : new n(function(o) {
      o(a);
    });
  }
  return new (n || (n = Promise))(function(a, o) {
    function u(d) {
      try {
        c(i.next(d));
      } catch (h) {
        o(h);
      }
    }
    function l(d) {
      try {
        c(i.throw(d));
      } catch (h) {
        o(h);
      }
    }
    function c(d) {
      d.done ? a(d.value) : r(d.value).then(u, l);
    }
    c((i = i.apply(t, e || [])).next());
  });
}
function Bs(t, e) {
  var n = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, i, r, a, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return o.next = u(0), o.throw = u(1), o.return = u(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function u(c) {
    return function(d) {
      return l([c, d]);
    };
  }
  function l(c) {
    if (i) throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, c[0] && (n = 0)), n; ) try {
      if (i = 1, r && (a = c[0] & 2 ? r.return : c[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, c[1])).done) return a;
      switch (r = 0, a && (c = [c[0] & 2, a.value]), c[0]) {
        case 0:
        case 1:
          a = c;
          break;
        case 4:
          return n.label++, { value: c[1], done: !1 };
        case 5:
          n.label++, r = c[1], c = [0];
          continue;
        case 7:
          c = n.ops.pop(), n.trys.pop();
          continue;
        default:
          if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (c[0] === 6 || c[0] === 2)) {
            n = 0;
            continue;
          }
          if (c[0] === 3 && (!a || c[1] > a[0] && c[1] < a[3])) {
            n.label = c[1];
            break;
          }
          if (c[0] === 6 && n.label < a[1]) {
            n.label = a[1], a = c;
            break;
          }
          if (a && n.label < a[2]) {
            n.label = a[2], n.ops.push(c);
            break;
          }
          a[2] && n.ops.pop(), n.trys.pop();
          continue;
      }
      c = e.call(t, n);
    } catch (d) {
      c = [6, d], r = 0;
    } finally {
      i = a = 0;
    }
    if (c[0] & 5) throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function Mt(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, n = e && t[e], i = 0;
  if (n) return n.call(t);
  if (t && typeof t.length == "number") return {
    next: function() {
      return t && i >= t.length && (t = void 0), { value: t && t[i++], done: !t };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Vr(t, e) {
  var n = typeof Symbol == "function" && t[Symbol.iterator];
  if (!n) return t;
  var i = n.call(t), r, a = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(r = i.next()).done; ) a.push(r.value);
  } catch (u) {
    o = { error: u };
  } finally {
    try {
      r && !r.done && (n = i.return) && n.call(i);
    } finally {
      if (o) throw o.error;
    }
  }
  return a;
}
function Ai(t, e, n) {
  if (n || arguments.length === 2) for (var i = 0, r = e.length, a; i < r; i++)
    (a || !(i in e)) && (a || (a = Array.prototype.slice.call(e, 0, i)), a[i] = e[i]);
  return t.concat(a || Array.prototype.slice.call(e));
}
function Tr(t) {
  return this instanceof Tr ? (this.v = t, this) : new Tr(t);
}
function hh(t, e, n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = n.apply(t, e || []), r, a = [];
  return r = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), u("next"), u("throw"), u("return", o), r[Symbol.asyncIterator] = function() {
    return this;
  }, r;
  function o(v) {
    return function(p) {
      return Promise.resolve(p).then(v, h);
    };
  }
  function u(v, p) {
    i[v] && (r[v] = function(g) {
      return new Promise(function(_, C) {
        a.push([v, g, _, C]) > 1 || l(v, g);
      });
    }, p && (r[v] = p(r[v])));
  }
  function l(v, p) {
    try {
      c(i[v](p));
    } catch (g) {
      f(a[0][3], g);
    }
  }
  function c(v) {
    v.value instanceof Tr ? Promise.resolve(v.value.v).then(d, h) : f(a[0][2], v);
  }
  function d(v) {
    l("next", v);
  }
  function h(v) {
    l("throw", v);
  }
  function f(v, p) {
    v(p), a.shift(), a.length && l(a[0][0], a[0][1]);
  }
}
function vh(t) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], n;
  return e ? e.call(t) : (t = typeof Mt == "function" ? Mt(t) : t[Symbol.iterator](), n = {}, i("next"), i("throw"), i("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n);
  function i(a) {
    n[a] = t[a] && function(o) {
      return new Promise(function(u, l) {
        o = t[a](o), r(u, l, o.done, o.value);
      });
    };
  }
  function r(a, o, u, l) {
    Promise.resolve(l).then(function(c) {
      a({ value: c, done: u });
    }, o);
  }
}
function Ho(t, e) {
  var n = e && e.cache ? e.cache : _h, i = e && e.serializer ? e.serializer : Ih, r = e && e.strategy ? e.strategy : gh;
  return r(t, {
    cache: n,
    serializer: i
  });
}
function mh(t) {
  return t == null || typeof t == "number" || typeof t == "boolean";
}
function ph(t, e, n, i) {
  var r = mh(i) ? i : n(i), a = e.get(r);
  return typeof a > "u" && (a = t.call(this, i), e.set(r, a)), a;
}
function oc(t, e, n) {
  var i = Array.prototype.slice.call(arguments, 3), r = n(i), a = e.get(r);
  return typeof a > "u" && (a = t.apply(this, i), e.set(r, a)), a;
}
function sc(t, e, n, i, r) {
  return n.bind(e, t, i, r);
}
function gh(t, e) {
  var n = t.length === 1 ? ph : oc;
  return sc(t, this, n, e.cache.create(), e.serializer);
}
function bh(t, e) {
  return sc(t, this, oc, e.cache.create(), e.serializer);
}
var Ih = function() {
  return JSON.stringify(arguments);
}, yh = (
  /** @class */
  function() {
    function t() {
      this.cache = /* @__PURE__ */ Object.create(null);
    }
    return t.prototype.get = function(e) {
      return this.cache[e];
    }, t.prototype.set = function(e, n) {
      this.cache[e] = n;
    }, t;
  }()
), _h = {
  create: function() {
    return new yh();
  }
}, Uo = {
  variadic: bh
}, Ye;
(function(t) {
  t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", t[t.INVALID_TAG = 23] = "INVALID_TAG", t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(Ye || (Ye = {}));
var mt;
(function(t) {
  t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag";
})(mt || (mt = {}));
var Gr;
(function(t) {
  t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime";
})(Gr || (Gr = {}));
function gl(t) {
  return t.type === mt.literal;
}
function Eh(t) {
  return t.type === mt.argument;
}
function lc(t) {
  return t.type === mt.number;
}
function uc(t) {
  return t.type === mt.date;
}
function cc(t) {
  return t.type === mt.time;
}
function dc(t) {
  return t.type === mt.select;
}
function fc(t) {
  return t.type === mt.plural;
}
function Ch(t) {
  return t.type === mt.pound;
}
function hc(t) {
  return t.type === mt.tag;
}
function vc(t) {
  return !!(t && typeof t == "object" && t.type === Gr.number);
}
function cs(t) {
  return !!(t && typeof t == "object" && t.type === Gr.dateTime);
}
var mc = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Ah = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Sh(t) {
  var e = {};
  return t.replace(Ah, function(n) {
    var i = n.length;
    switch (n[0]) {
      case "G":
        e.era = i === 4 ? "long" : i === 5 ? "narrow" : "short";
        break;
      case "y":
        e.year = i === 2 ? "2-digit" : "numeric";
        break;
      case "Y":
      case "u":
      case "U":
      case "r":
        throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
      case "q":
      case "Q":
        throw new RangeError("`q/Q` (quarter) patterns are not supported");
      case "M":
      case "L":
        e.month = ["numeric", "2-digit", "short", "long", "narrow"][i - 1];
        break;
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        e.day = ["numeric", "2-digit"][i - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      case "E":
        e.weekday = i === 4 ? "long" : i === 5 ? "narrow" : "short";
        break;
      case "e":
        if (i < 4)
          throw new RangeError("`e..eee` (weekday) patterns are not supported");
        e.weekday = ["short", "long", "narrow", "short"][i - 4];
        break;
      case "c":
        if (i < 4)
          throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        e.weekday = ["short", "long", "narrow", "short"][i - 4];
        break;
      case "a":
        e.hour12 = !0;
        break;
      case "b":
      case "B":
        throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
      case "h":
        e.hourCycle = "h12", e.hour = ["numeric", "2-digit"][i - 1];
        break;
      case "H":
        e.hourCycle = "h23", e.hour = ["numeric", "2-digit"][i - 1];
        break;
      case "K":
        e.hourCycle = "h11", e.hour = ["numeric", "2-digit"][i - 1];
        break;
      case "k":
        e.hourCycle = "h24", e.hour = ["numeric", "2-digit"][i - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      case "m":
        e.minute = ["numeric", "2-digit"][i - 1];
        break;
      case "s":
        e.second = ["numeric", "2-digit"][i - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
      case "z":
        e.timeZoneName = i < 4 ? "short" : "long";
        break;
      case "Z":
      case "O":
      case "v":
      case "V":
      case "X":
      case "x":
        throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
    }
    return "";
  }), e;
}
var xh = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Th(t) {
  if (t.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var e = t.split(xh).filter(function(f) {
    return f.length > 0;
  }), n = [], i = 0, r = e; i < r.length; i++) {
    var a = r[i], o = a.split("/");
    if (o.length === 0)
      throw new Error("Invalid number skeleton");
    for (var u = o[0], l = o.slice(1), c = 0, d = l; c < d.length; c++) {
      var h = d[c];
      if (h.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: u, options: l });
  }
  return n;
}
function Lh(t) {
  return t.replace(/^(.*?)-/, "");
}
var bl = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, pc = /^(@+)?(\+|#+)?[rs]?$/g, Oh = /(\*)(0+)|(#+)(0+)|(0+)/g, gc = /^(0+)$/;
function Il(t) {
  var e = {};
  return t[t.length - 1] === "r" ? e.roundingPriority = "morePrecision" : t[t.length - 1] === "s" && (e.roundingPriority = "lessPrecision"), t.replace(pc, function(n, i, r) {
    return typeof r != "string" ? (e.minimumSignificantDigits = i.length, e.maximumSignificantDigits = i.length) : r === "+" ? e.minimumSignificantDigits = i.length : i[0] === "#" ? e.maximumSignificantDigits = i.length : (e.minimumSignificantDigits = i.length, e.maximumSignificantDigits = i.length + (typeof r == "string" ? r.length : 0)), "";
  }), e;
}
function bc(t) {
  switch (t) {
    case "sign-auto":
      return {
        signDisplay: "auto"
      };
    case "sign-accounting":
    case "()":
      return {
        currencySign: "accounting"
      };
    case "sign-always":
    case "+!":
      return {
        signDisplay: "always"
      };
    case "sign-accounting-always":
    case "()!":
      return {
        signDisplay: "always",
        currencySign: "accounting"
      };
    case "sign-except-zero":
    case "+?":
      return {
        signDisplay: "exceptZero"
      };
    case "sign-accounting-except-zero":
    case "()?":
      return {
        signDisplay: "exceptZero",
        currencySign: "accounting"
      };
    case "sign-never":
    case "+_":
      return {
        signDisplay: "never"
      };
  }
}
function wh(t) {
  var e;
  if (t[0] === "E" && t[1] === "E" ? (e = {
    notation: "engineering"
  }, t = t.slice(2)) : t[0] === "E" && (e = {
    notation: "scientific"
  }, t = t.slice(1)), e) {
    var n = t.slice(0, 2);
    if (n === "+!" ? (e.signDisplay = "always", t = t.slice(2)) : n === "+?" && (e.signDisplay = "exceptZero", t = t.slice(2)), !gc.test(t))
      throw new Error("Malformed concise eng/scientific notation");
    e.minimumIntegerDigits = t.length;
  }
  return e;
}
function yl(t) {
  var e = {}, n = bc(t);
  return n || e;
}
function Rh(t) {
  for (var e = {}, n = 0, i = t; n < i.length; n++) {
    var r = i[n];
    switch (r.stem) {
      case "percent":
      case "%":
        e.style = "percent";
        continue;
      case "%x100":
        e.style = "percent", e.scale = 100;
        continue;
      case "currency":
        e.style = "currency", e.currency = r.options[0];
        continue;
      case "group-off":
      case ",_":
        e.useGrouping = !1;
        continue;
      case "precision-integer":
      case ".":
        e.maximumFractionDigits = 0;
        continue;
      case "measure-unit":
      case "unit":
        e.style = "unit", e.unit = Lh(r.options[0]);
        continue;
      case "compact-short":
      case "K":
        e.notation = "compact", e.compactDisplay = "short";
        continue;
      case "compact-long":
      case "KK":
        e.notation = "compact", e.compactDisplay = "long";
        continue;
      case "scientific":
        e = fe(fe(fe({}, e), { notation: "scientific" }), r.options.reduce(function(l, c) {
          return fe(fe({}, l), yl(c));
        }, {}));
        continue;
      case "engineering":
        e = fe(fe(fe({}, e), { notation: "engineering" }), r.options.reduce(function(l, c) {
          return fe(fe({}, l), yl(c));
        }, {}));
        continue;
      case "notation-simple":
        e.notation = "standard";
        continue;
      case "unit-width-narrow":
        e.currencyDisplay = "narrowSymbol", e.unitDisplay = "narrow";
        continue;
      case "unit-width-short":
        e.currencyDisplay = "code", e.unitDisplay = "short";
        continue;
      case "unit-width-full-name":
        e.currencyDisplay = "name", e.unitDisplay = "long";
        continue;
      case "unit-width-iso-code":
        e.currencyDisplay = "symbol";
        continue;
      case "scale":
        e.scale = parseFloat(r.options[0]);
        continue;
      case "rounding-mode-floor":
        e.roundingMode = "floor";
        continue;
      case "rounding-mode-ceiling":
        e.roundingMode = "ceil";
        continue;
      case "rounding-mode-down":
        e.roundingMode = "trunc";
        continue;
      case "rounding-mode-up":
        e.roundingMode = "expand";
        continue;
      case "rounding-mode-half-even":
        e.roundingMode = "halfEven";
        continue;
      case "rounding-mode-half-down":
        e.roundingMode = "halfTrunc";
        continue;
      case "rounding-mode-half-up":
        e.roundingMode = "halfExpand";
        continue;
      case "integer-width":
        if (r.options.length > 1)
          throw new RangeError("integer-width stems only accept a single optional option");
        r.options[0].replace(Oh, function(l, c, d, h, f, v) {
          if (c)
            e.minimumIntegerDigits = d.length;
          else {
            if (h && f)
              throw new Error("We currently do not support maximum integer digits");
            if (v)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (gc.test(r.stem)) {
      e.minimumIntegerDigits = r.stem.length;
      continue;
    }
    if (bl.test(r.stem)) {
      if (r.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      r.stem.replace(bl, function(l, c, d, h, f, v) {
        return d === "*" ? e.minimumFractionDigits = c.length : h && h[0] === "#" ? e.maximumFractionDigits = h.length : f && v ? (e.minimumFractionDigits = f.length, e.maximumFractionDigits = f.length + v.length) : (e.minimumFractionDigits = c.length, e.maximumFractionDigits = c.length), "";
      });
      var a = r.options[0];
      a === "w" ? e = fe(fe({}, e), { trailingZeroDisplay: "stripIfInteger" }) : a && (e = fe(fe({}, e), Il(a)));
      continue;
    }
    if (pc.test(r.stem)) {
      e = fe(fe({}, e), Il(r.stem));
      continue;
    }
    var o = bc(r.stem);
    o && (e = fe(fe({}, e), o));
    var u = wh(r.stem);
    u && (e = fe(fe({}, e), u));
  }
  return e;
}
var Ha = {
  "001": [
    "H",
    "h"
  ],
  419: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  AC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  AD: [
    "H",
    "hB"
  ],
  AE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  AF: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  AG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  AI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  AL: [
    "h",
    "H",
    "hB"
  ],
  AM: [
    "H",
    "hB"
  ],
  AO: [
    "H",
    "hB"
  ],
  AR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  AS: [
    "h",
    "H"
  ],
  AT: [
    "H",
    "hB"
  ],
  AU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  AW: [
    "H",
    "hB"
  ],
  AX: [
    "H"
  ],
  AZ: [
    "H",
    "hB",
    "h"
  ],
  BA: [
    "H",
    "hB",
    "h"
  ],
  BB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BD: [
    "h",
    "hB",
    "H"
  ],
  BE: [
    "H",
    "hB"
  ],
  BF: [
    "H",
    "hB"
  ],
  BG: [
    "H",
    "hB",
    "h"
  ],
  BH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  BI: [
    "H",
    "h"
  ],
  BJ: [
    "H",
    "hB"
  ],
  BL: [
    "H",
    "hB"
  ],
  BM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BN: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  BO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  BQ: [
    "H"
  ],
  BR: [
    "H",
    "hB"
  ],
  BS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BT: [
    "h",
    "H"
  ],
  BW: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  BY: [
    "H",
    "h"
  ],
  BZ: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CA: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  CC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CD: [
    "hB",
    "H"
  ],
  CF: [
    "H",
    "h",
    "hB"
  ],
  CG: [
    "H",
    "hB"
  ],
  CH: [
    "H",
    "hB",
    "h"
  ],
  CI: [
    "H",
    "hB"
  ],
  CK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CL: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CM: [
    "H",
    "h",
    "hB"
  ],
  CN: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  CO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CP: [
    "H"
  ],
  CR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CU: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CV: [
    "H",
    "hB"
  ],
  CW: [
    "H",
    "hB"
  ],
  CX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CY: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  CZ: [
    "H"
  ],
  DE: [
    "H",
    "hB"
  ],
  DG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  DJ: [
    "h",
    "H"
  ],
  DK: [
    "H"
  ],
  DM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  DO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  DZ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  EC: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  EE: [
    "H",
    "hB"
  ],
  EG: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  ER: [
    "h",
    "H"
  ],
  ES: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  ET: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  FI: [
    "H"
  ],
  FJ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  FM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FO: [
    "H",
    "h"
  ],
  FR: [
    "H",
    "hB"
  ],
  GA: [
    "H",
    "hB"
  ],
  GB: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GD: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GE: [
    "H",
    "hB",
    "h"
  ],
  GF: [
    "H",
    "hB"
  ],
  GG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GH: [
    "h",
    "H"
  ],
  GI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GL: [
    "H",
    "h"
  ],
  GM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GN: [
    "H",
    "hB"
  ],
  GP: [
    "H",
    "hB"
  ],
  GQ: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  GR: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  GT: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  GU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GW: [
    "H",
    "hB"
  ],
  GY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  HK: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  HN: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  HR: [
    "H",
    "hB"
  ],
  HU: [
    "H",
    "h"
  ],
  IC: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  ID: [
    "H"
  ],
  IE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IL: [
    "H",
    "hB"
  ],
  IM: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IN: [
    "h",
    "H"
  ],
  IO: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IQ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  IR: [
    "hB",
    "H"
  ],
  IS: [
    "H"
  ],
  IT: [
    "H",
    "hB"
  ],
  JE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  JM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  JO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  JP: [
    "H",
    "K",
    "h"
  ],
  KE: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  KG: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KH: [
    "hB",
    "h",
    "H",
    "hb"
  ],
  KI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KM: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KN: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KP: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KW: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  KY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KZ: [
    "H",
    "hB"
  ],
  LA: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  LB: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  LC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LI: [
    "H",
    "hB",
    "h"
  ],
  LK: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  LR: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LS: [
    "h",
    "H"
  ],
  LT: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  LU: [
    "H",
    "h",
    "hB"
  ],
  LV: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  LY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  MC: [
    "H",
    "hB"
  ],
  MD: [
    "H",
    "hB"
  ],
  ME: [
    "H",
    "hB",
    "h"
  ],
  MF: [
    "H",
    "hB"
  ],
  MG: [
    "H",
    "h"
  ],
  MH: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  ML: [
    "H"
  ],
  MM: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  MN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MP: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MQ: [
    "H",
    "hB"
  ],
  MR: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MS: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MT: [
    "H",
    "h"
  ],
  MU: [
    "H",
    "h"
  ],
  MV: [
    "H",
    "h"
  ],
  MW: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MX: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  MY: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  MZ: [
    "H",
    "hB"
  ],
  NA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  NC: [
    "H",
    "hB"
  ],
  NE: [
    "H"
  ],
  NF: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NI: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  NL: [
    "H",
    "hB"
  ],
  NO: [
    "H",
    "h"
  ],
  NP: [
    "H",
    "h",
    "hB"
  ],
  NR: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NU: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  OM: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PE: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PF: [
    "H",
    "h",
    "hB"
  ],
  PG: [
    "h",
    "H"
  ],
  PH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PK: [
    "h",
    "hB",
    "H"
  ],
  PL: [
    "H",
    "h"
  ],
  PM: [
    "H",
    "hB"
  ],
  PN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  PR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PS: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PT: [
    "H",
    "hB"
  ],
  PW: [
    "h",
    "H"
  ],
  PY: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  QA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  RE: [
    "H",
    "hB"
  ],
  RO: [
    "H",
    "hB"
  ],
  RS: [
    "H",
    "hB",
    "h"
  ],
  RU: [
    "H"
  ],
  RW: [
    "H",
    "h"
  ],
  SA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SC: [
    "H",
    "h",
    "hB"
  ],
  SD: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SE: [
    "H"
  ],
  SG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SH: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SI: [
    "H",
    "hB"
  ],
  SJ: [
    "H"
  ],
  SK: [
    "H"
  ],
  SL: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SM: [
    "H",
    "h",
    "hB"
  ],
  SN: [
    "H",
    "h",
    "hB"
  ],
  SO: [
    "h",
    "H"
  ],
  SR: [
    "H",
    "hB"
  ],
  SS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  ST: [
    "H",
    "hB"
  ],
  SV: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  SX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  TC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TD: [
    "h",
    "H",
    "hB"
  ],
  TF: [
    "H",
    "h",
    "hB"
  ],
  TG: [
    "H",
    "hB"
  ],
  TH: [
    "H",
    "h"
  ],
  TJ: [
    "H",
    "h"
  ],
  TL: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  TM: [
    "H",
    "h"
  ],
  TN: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  TO: [
    "h",
    "H"
  ],
  TR: [
    "H",
    "hB"
  ],
  TT: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TW: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  TZ: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  UA: [
    "H",
    "hB",
    "h"
  ],
  UG: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  UM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  US: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  UY: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  UZ: [
    "H",
    "hB",
    "h"
  ],
  VA: [
    "H",
    "h",
    "hB"
  ],
  VC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VE: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  VG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VN: [
    "H",
    "h"
  ],
  VU: [
    "h",
    "H"
  ],
  WF: [
    "H",
    "hB"
  ],
  WS: [
    "h",
    "H"
  ],
  XK: [
    "H",
    "hB",
    "h"
  ],
  YE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  YT: [
    "H",
    "hB"
  ],
  ZA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  ZM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  ZW: [
    "H",
    "h"
  ],
  "af-ZA": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "ar-001": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "ca-ES": [
    "H",
    "h",
    "hB"
  ],
  "en-001": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "en-HK": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "en-IL": [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "en-MY": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "es-BR": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-ES": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-GQ": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "fr-CA": [
    "H",
    "h",
    "hB"
  ],
  "gl-ES": [
    "H",
    "h",
    "hB"
  ],
  "gu-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "hi-IN": [
    "hB",
    "h",
    "H"
  ],
  "it-CH": [
    "H",
    "h",
    "hB"
  ],
  "it-IT": [
    "H",
    "h",
    "hB"
  ],
  "kn-IN": [
    "hB",
    "h",
    "H"
  ],
  "ml-IN": [
    "hB",
    "h",
    "H"
  ],
  "mr-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "pa-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "ta-IN": [
    "hB",
    "h",
    "hb",
    "H"
  ],
  "te-IN": [
    "hB",
    "h",
    "H"
  ],
  "zu-ZA": [
    "H",
    "hB",
    "hb",
    "h"
  ]
};
function Mh(t, e) {
  for (var n = "", i = 0; i < t.length; i++) {
    var r = t.charAt(i);
    if (r === "j") {
      for (var a = 0; i + 1 < t.length && t.charAt(i + 1) === r; )
        a++, i++;
      var o = 1 + (a & 1), u = a < 2 ? 1 : 3 + (a >> 1), l = "a", c = Dh(e);
      for ((c == "H" || c == "k") && (u = 0); u-- > 0; )
        n += l;
      for (; o-- > 0; )
        n = c + n;
    } else r === "J" ? n += "H" : n += r;
  }
  return n;
}
function Dh(t) {
  var e = t.hourCycle;
  if (e === void 0 && // @ts-ignore hourCycle(s) is not identified yet
  t.hourCycles && // @ts-ignore
  t.hourCycles.length && (e = t.hourCycles[0]), e)
    switch (e) {
      case "h24":
        return "k";
      case "h23":
        return "H";
      case "h12":
        return "h";
      case "h11":
        return "K";
      default:
        throw new Error("Invalid hourCycle");
    }
  var n = t.language, i;
  n !== "root" && (i = t.maximize().region);
  var r = Ha[i || ""] || Ha[n || ""] || Ha["".concat(n, "-001")] || Ha["001"];
  return r[0];
}
var Bo, Ph = new RegExp("^".concat(mc.source, "*")), Nh = new RegExp("".concat(mc.source, "*$"));
function Qe(t, e) {
  return { start: t, end: e };
}
var Fh = !!String.prototype.startsWith && "_a".startsWith("a", 1), Hh = !!String.fromCodePoint, Uh = !!Object.fromEntries, Bh = !!String.prototype.codePointAt, kh = !!String.prototype.trimStart, Vh = !!String.prototype.trimEnd, Gh = !!Number.isSafeInteger, jh = Gh ? Number.isSafeInteger : function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991;
}, ds = !0;
try {
  var Wh = yc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  ds = ((Bo = Wh.exec("a")) === null || Bo === void 0 ? void 0 : Bo[0]) === "a";
} catch {
  ds = !1;
}
var _l = Fh ? (
  // Native
  function(e, n, i) {
    return e.startsWith(n, i);
  }
) : (
  // For IE11
  function(e, n, i) {
    return e.slice(i, i + n.length) === n;
  }
), fs = Hh ? String.fromCodePoint : (
  // IE11
  function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    for (var i = "", r = e.length, a = 0, o; r > a; ) {
      if (o = e[a++], o > 1114111)
        throw RangeError(o + " is not a valid code point");
      i += o < 65536 ? String.fromCharCode(o) : String.fromCharCode(((o -= 65536) >> 10) + 55296, o % 1024 + 56320);
    }
    return i;
  }
), El = (
  // native
  Uh ? Object.fromEntries : (
    // Ponyfill
    function(e) {
      for (var n = {}, i = 0, r = e; i < r.length; i++) {
        var a = r[i], o = a[0], u = a[1];
        n[o] = u;
      }
      return n;
    }
  )
), Ic = Bh ? (
  // Native
  function(e, n) {
    return e.codePointAt(n);
  }
) : (
  // IE 11
  function(e, n) {
    var i = e.length;
    if (!(n < 0 || n >= i)) {
      var r = e.charCodeAt(n), a;
      return r < 55296 || r > 56319 || n + 1 === i || (a = e.charCodeAt(n + 1)) < 56320 || a > 57343 ? r : (r - 55296 << 10) + (a - 56320) + 65536;
    }
  }
), qh = kh ? (
  // Native
  function(e) {
    return e.trimStart();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(Ph, "");
  }
), Kh = Vh ? (
  // Native
  function(e) {
    return e.trimEnd();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(Nh, "");
  }
);
function yc(t, e) {
  return new RegExp(t, e);
}
var hs;
if (ds) {
  var Cl = yc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  hs = function(e, n) {
    var i;
    Cl.lastIndex = n;
    var r = Cl.exec(e);
    return (i = r[1]) !== null && i !== void 0 ? i : "";
  };
} else
  hs = function(e, n) {
    for (var i = []; ; ) {
      var r = Ic(e, n);
      if (r === void 0 || _c(r) || Zh(r))
        break;
      i.push(r), n += r >= 65536 ? 2 : 1;
    }
    return fs.apply(void 0, i);
  };
var zh = (
  /** @class */
  function() {
    function t(e, n) {
      n === void 0 && (n = {}), this.message = e, this.position = { offset: 0, line: 1, column: 1 }, this.ignoreTag = !!n.ignoreTag, this.locale = n.locale, this.requiresOtherClause = !!n.requiresOtherClause, this.shouldParseSkeletons = !!n.shouldParseSkeletons;
    }
    return t.prototype.parse = function() {
      if (this.offset() !== 0)
        throw Error("parser can only be used once");
      return this.parseMessage(0, "", !1);
    }, t.prototype.parseMessage = function(e, n, i) {
      for (var r = []; !this.isEOF(); ) {
        var a = this.char();
        if (a === 123) {
          var o = this.parseArgument(e, i);
          if (o.err)
            return o;
          r.push(o.val);
        } else {
          if (a === 125 && e > 0)
            break;
          if (a === 35 && (n === "plural" || n === "selectordinal")) {
            var u = this.clonePosition();
            this.bump(), r.push({
              type: mt.pound,
              location: Qe(u, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (i)
              break;
            return this.error(Ye.UNMATCHED_CLOSING_TAG, Qe(this.clonePosition(), this.clonePosition()));
          } else if (a === 60 && !this.ignoreTag && vs(this.peek() || 0)) {
            var o = this.parseTag(e, n);
            if (o.err)
              return o;
            r.push(o.val);
          } else {
            var o = this.parseLiteral(e, n);
            if (o.err)
              return o;
            r.push(o.val);
          }
        }
      }
      return { val: r, err: null };
    }, t.prototype.parseTag = function(e, n) {
      var i = this.clonePosition();
      this.bump();
      var r = this.parseTagName();
      if (this.bumpSpace(), this.bumpIf("/>"))
        return {
          val: {
            type: mt.literal,
            value: "<".concat(r, "/>"),
            location: Qe(i, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var a = this.parseMessage(e + 1, n, !0);
        if (a.err)
          return a;
        var o = a.val, u = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !vs(this.char()))
            return this.error(Ye.INVALID_TAG, Qe(u, this.clonePosition()));
          var l = this.clonePosition(), c = this.parseTagName();
          return r !== c ? this.error(Ye.UNMATCHED_CLOSING_TAG, Qe(l, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: mt.tag,
              value: r,
              children: o,
              location: Qe(i, this.clonePosition())
            },
            err: null
          } : this.error(Ye.INVALID_TAG, Qe(u, this.clonePosition())));
        } else
          return this.error(Ye.UNCLOSED_TAG, Qe(i, this.clonePosition()));
      } else
        return this.error(Ye.INVALID_TAG, Qe(i, this.clonePosition()));
    }, t.prototype.parseTagName = function() {
      var e = this.offset();
      for (this.bump(); !this.isEOF() && Yh(this.char()); )
        this.bump();
      return this.message.slice(e, this.offset());
    }, t.prototype.parseLiteral = function(e, n) {
      for (var i = this.clonePosition(), r = ""; ; ) {
        var a = this.tryParseQuote(n);
        if (a) {
          r += a;
          continue;
        }
        var o = this.tryParseUnquoted(e, n);
        if (o) {
          r += o;
          continue;
        }
        var u = this.tryParseLeftAngleBracket();
        if (u) {
          r += u;
          continue;
        }
        break;
      }
      var l = Qe(i, this.clonePosition());
      return {
        val: { type: mt.literal, value: r, location: l },
        err: null
      };
    }, t.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !Xh(this.peek() || 0)) ? (this.bump(), "<") : null;
    }, t.prototype.tryParseQuote = function(e) {
      if (this.isEOF() || this.char() !== 39)
        return null;
      switch (this.peek()) {
        case 39:
          return this.bump(), this.bump(), "'";
        case 123:
        case 60:
        case 62:
        case 125:
          break;
        case 35:
          if (e === "plural" || e === "selectordinal")
            break;
          return null;
        default:
          return null;
      }
      this.bump();
      var n = [this.char()];
      for (this.bump(); !this.isEOF(); ) {
        var i = this.char();
        if (i === 39)
          if (this.peek() === 39)
            n.push(39), this.bump();
          else {
            this.bump();
            break;
          }
        else
          n.push(i);
        this.bump();
      }
      return fs.apply(void 0, n);
    }, t.prototype.tryParseUnquoted = function(e, n) {
      if (this.isEOF())
        return null;
      var i = this.char();
      return i === 60 || i === 123 || i === 35 && (n === "plural" || n === "selectordinal") || i === 125 && e > 0 ? null : (this.bump(), fs(i));
    }, t.prototype.parseArgument = function(e, n) {
      var i = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(Ye.EXPECT_ARGUMENT_CLOSING_BRACE, Qe(i, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(Ye.EMPTY_ARGUMENT, Qe(i, this.clonePosition()));
      var r = this.parseIdentifierIfPossible().value;
      if (!r)
        return this.error(Ye.MALFORMED_ARGUMENT, Qe(i, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(Ye.EXPECT_ARGUMENT_CLOSING_BRACE, Qe(i, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: mt.argument,
              // value does not include the opening and closing braces.
              value: r,
              location: Qe(i, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Ye.EXPECT_ARGUMENT_CLOSING_BRACE, Qe(i, this.clonePosition())) : this.parseArgumentOptions(e, n, r, i);
        default:
          return this.error(Ye.MALFORMED_ARGUMENT, Qe(i, this.clonePosition()));
      }
    }, t.prototype.parseIdentifierIfPossible = function() {
      var e = this.clonePosition(), n = this.offset(), i = hs(this.message, n), r = n + i.length;
      this.bumpTo(r);
      var a = this.clonePosition(), o = Qe(e, a);
      return { value: i, location: o };
    }, t.prototype.parseArgumentOptions = function(e, n, i, r) {
      var a, o = this.clonePosition(), u = this.parseIdentifierIfPossible().value, l = this.clonePosition();
      switch (u) {
        case "":
          return this.error(Ye.EXPECT_ARGUMENT_TYPE, Qe(o, l));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var c = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var d = this.clonePosition(), h = this.parseSimpleArgStyleIfPossible();
            if (h.err)
              return h;
            var f = Kh(h.val);
            if (f.length === 0)
              return this.error(Ye.EXPECT_ARGUMENT_STYLE, Qe(this.clonePosition(), this.clonePosition()));
            var v = Qe(d, this.clonePosition());
            c = { style: f, styleLocation: v };
          }
          var p = this.tryParseArgumentClose(r);
          if (p.err)
            return p;
          var g = Qe(r, this.clonePosition());
          if (c && _l(c == null ? void 0 : c.style, "::", 0)) {
            var _ = qh(c.style.slice(2));
            if (u === "number") {
              var h = this.parseNumberSkeletonFromString(_, c.styleLocation);
              return h.err ? h : {
                val: { type: mt.number, value: i, location: g, style: h.val },
                err: null
              };
            } else {
              if (_.length === 0)
                return this.error(Ye.EXPECT_DATE_TIME_SKELETON, g);
              var C = _;
              this.locale && (C = Mh(_, this.locale));
              var f = {
                type: Gr.dateTime,
                pattern: C,
                location: c.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Sh(C) : {}
              }, x = u === "date" ? mt.date : mt.time;
              return {
                val: { type: x, value: i, location: g, style: f },
                err: null
              };
            }
          }
          return {
            val: {
              type: u === "number" ? mt.number : u === "date" ? mt.date : mt.time,
              value: i,
              location: g,
              style: (a = c == null ? void 0 : c.style) !== null && a !== void 0 ? a : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var S = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(Ye.EXPECT_SELECT_ARGUMENT_OPTIONS, Qe(S, fe({}, S)));
          this.bumpSpace();
          var b = this.parseIdentifierIfPossible(), E = 0;
          if (u !== "select" && b.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(Ye.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Qe(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var h = this.tryParseDecimalInteger(Ye.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Ye.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (h.err)
              return h;
            this.bumpSpace(), b = this.parseIdentifierIfPossible(), E = h.val;
          }
          var y = this.tryParsePluralOrSelectOptions(e, u, n, b);
          if (y.err)
            return y;
          var p = this.tryParseArgumentClose(r);
          if (p.err)
            return p;
          var T = Qe(r, this.clonePosition());
          return u === "select" ? {
            val: {
              type: mt.select,
              value: i,
              options: El(y.val),
              location: T
            },
            err: null
          } : {
            val: {
              type: mt.plural,
              value: i,
              options: El(y.val),
              offset: E,
              pluralType: u === "plural" ? "cardinal" : "ordinal",
              location: T
            },
            err: null
          };
        }
        default:
          return this.error(Ye.INVALID_ARGUMENT_TYPE, Qe(o, l));
      }
    }, t.prototype.tryParseArgumentClose = function(e) {
      return this.isEOF() || this.char() !== 125 ? this.error(Ye.EXPECT_ARGUMENT_CLOSING_BRACE, Qe(e, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, t.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var e = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var i = this.char();
        switch (i) {
          case 39: {
            this.bump();
            var r = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(Ye.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Qe(r, this.clonePosition()));
            this.bump();
            break;
          }
          case 123: {
            e += 1, this.bump();
            break;
          }
          case 125: {
            if (e > 0)
              e -= 1;
            else
              return {
                val: this.message.slice(n.offset, this.offset()),
                err: null
              };
            break;
          }
          default:
            this.bump();
            break;
        }
      }
      return {
        val: this.message.slice(n.offset, this.offset()),
        err: null
      };
    }, t.prototype.parseNumberSkeletonFromString = function(e, n) {
      var i = [];
      try {
        i = Th(e);
      } catch {
        return this.error(Ye.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: Gr.number,
          tokens: i,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? Rh(i) : {}
        },
        err: null
      };
    }, t.prototype.tryParsePluralOrSelectOptions = function(e, n, i, r) {
      for (var a, o = !1, u = [], l = /* @__PURE__ */ new Set(), c = r.value, d = r.location; ; ) {
        if (c.length === 0) {
          var h = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var f = this.tryParseDecimalInteger(Ye.EXPECT_PLURAL_ARGUMENT_SELECTOR, Ye.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (f.err)
              return f;
            d = Qe(h, this.clonePosition()), c = this.message.slice(h.offset, this.offset());
          } else
            break;
        }
        if (l.has(c))
          return this.error(n === "select" ? Ye.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Ye.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, d);
        c === "other" && (o = !0), this.bumpSpace();
        var v = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? Ye.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Ye.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Qe(this.clonePosition(), this.clonePosition()));
        var p = this.parseMessage(e + 1, n, i);
        if (p.err)
          return p;
        var g = this.tryParseArgumentClose(v);
        if (g.err)
          return g;
        u.push([
          c,
          {
            value: p.val,
            location: Qe(v, this.clonePosition())
          }
        ]), l.add(c), this.bumpSpace(), a = this.parseIdentifierIfPossible(), c = a.value, d = a.location;
      }
      return u.length === 0 ? this.error(n === "select" ? Ye.EXPECT_SELECT_ARGUMENT_SELECTOR : Ye.EXPECT_PLURAL_ARGUMENT_SELECTOR, Qe(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(Ye.MISSING_OTHER_CLAUSE, Qe(this.clonePosition(), this.clonePosition())) : { val: u, err: null };
    }, t.prototype.tryParseDecimalInteger = function(e, n) {
      var i = 1, r = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (i = -1);
      for (var a = !1, o = 0; !this.isEOF(); ) {
        var u = this.char();
        if (u >= 48 && u <= 57)
          a = !0, o = o * 10 + (u - 48), this.bump();
        else
          break;
      }
      var l = Qe(r, this.clonePosition());
      return a ? (o *= i, jh(o) ? { val: o, err: null } : this.error(n, l)) : this.error(e, l);
    }, t.prototype.offset = function() {
      return this.position.offset;
    }, t.prototype.isEOF = function() {
      return this.offset() === this.message.length;
    }, t.prototype.clonePosition = function() {
      return {
        offset: this.position.offset,
        line: this.position.line,
        column: this.position.column
      };
    }, t.prototype.char = function() {
      var e = this.position.offset;
      if (e >= this.message.length)
        throw Error("out of bound");
      var n = Ic(this.message, e);
      if (n === void 0)
        throw Error("Offset ".concat(e, " is at invalid UTF-16 code unit boundary"));
      return n;
    }, t.prototype.error = function(e, n) {
      return {
        val: null,
        err: {
          kind: e,
          message: this.message,
          location: n
        }
      };
    }, t.prototype.bump = function() {
      if (!this.isEOF()) {
        var e = this.char();
        e === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2);
      }
    }, t.prototype.bumpIf = function(e) {
      if (_l(this.message, e, this.offset())) {
        for (var n = 0; n < e.length; n++)
          this.bump();
        return !0;
      }
      return !1;
    }, t.prototype.bumpUntil = function(e) {
      var n = this.offset(), i = this.message.indexOf(e, n);
      return i >= 0 ? (this.bumpTo(i), !0) : (this.bumpTo(this.message.length), !1);
    }, t.prototype.bumpTo = function(e) {
      if (this.offset() > e)
        throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
      for (e = Math.min(e, this.message.length); ; ) {
        var n = this.offset();
        if (n === e)
          break;
        if (n > e)
          throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
        if (this.bump(), this.isEOF())
          break;
      }
    }, t.prototype.bumpSpace = function() {
      for (; !this.isEOF() && _c(this.char()); )
        this.bump();
    }, t.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var e = this.char(), n = this.offset(), i = this.message.charCodeAt(n + (e >= 65536 ? 2 : 1));
      return i ?? null;
    }, t;
  }()
);
function vs(t) {
  return t >= 97 && t <= 122 || t >= 65 && t <= 90;
}
function Xh(t) {
  return vs(t) || t === 47;
}
function Yh(t) {
  return t === 45 || t === 46 || t >= 48 && t <= 57 || t === 95 || t >= 97 && t <= 122 || t >= 65 && t <= 90 || t == 183 || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039;
}
function _c(t) {
  return t >= 9 && t <= 13 || t === 32 || t === 133 || t >= 8206 && t <= 8207 || t === 8232 || t === 8233;
}
function Zh(t) {
  return t >= 33 && t <= 35 || t === 36 || t >= 37 && t <= 39 || t === 40 || t === 41 || t === 42 || t === 43 || t === 44 || t === 45 || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || t === 91 || t === 92 || t === 93 || t === 94 || t === 96 || t === 123 || t === 124 || t === 125 || t === 126 || t === 161 || t >= 162 && t <= 165 || t === 166 || t === 167 || t === 169 || t === 171 || t === 172 || t === 174 || t === 176 || t === 177 || t === 182 || t === 187 || t === 191 || t === 215 || t === 247 || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || t === 8216 || t === 8217 || t === 8218 || t >= 8219 && t <= 8220 || t === 8221 || t === 8222 || t === 8223 || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || t === 8249 || t === 8250 || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || t === 8260 || t === 8261 || t === 8262 || t >= 8263 && t <= 8273 || t === 8274 || t === 8275 || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || t === 8608 || t >= 8609 && t <= 8610 || t === 8611 || t >= 8612 && t <= 8613 || t === 8614 || t >= 8615 && t <= 8621 || t === 8622 || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || t === 8658 || t === 8659 || t === 8660 || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || t === 8968 || t === 8969 || t === 8970 || t === 8971 || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9e3 || t === 9001 || t === 9002 || t >= 9003 && t <= 9083 || t === 9084 || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || t === 9655 || t >= 9656 && t <= 9664 || t === 9665 || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || t === 9839 || t >= 9840 && t <= 10087 || t === 10088 || t === 10089 || t === 10090 || t === 10091 || t === 10092 || t === 10093 || t === 10094 || t === 10095 || t === 10096 || t === 10097 || t === 10098 || t === 10099 || t === 10100 || t === 10101 || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || t === 10181 || t === 10182 || t >= 10183 && t <= 10213 || t === 10214 || t === 10215 || t === 10216 || t === 10217 || t === 10218 || t === 10219 || t === 10220 || t === 10221 || t === 10222 || t === 10223 || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || t === 10627 || t === 10628 || t === 10629 || t === 10630 || t === 10631 || t === 10632 || t === 10633 || t === 10634 || t === 10635 || t === 10636 || t === 10637 || t === 10638 || t === 10639 || t === 10640 || t === 10641 || t === 10642 || t === 10643 || t === 10644 || t === 10645 || t === 10646 || t === 10647 || t === 10648 || t >= 10649 && t <= 10711 || t === 10712 || t === 10713 || t === 10714 || t === 10715 || t >= 10716 && t <= 10747 || t === 10748 || t === 10749 || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || t === 11158 || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || t === 11778 || t === 11779 || t === 11780 || t === 11781 || t >= 11782 && t <= 11784 || t === 11785 || t === 11786 || t === 11787 || t === 11788 || t === 11789 || t >= 11790 && t <= 11798 || t === 11799 || t >= 11800 && t <= 11801 || t === 11802 || t === 11803 || t === 11804 || t === 11805 || t >= 11806 && t <= 11807 || t === 11808 || t === 11809 || t === 11810 || t === 11811 || t === 11812 || t === 11813 || t === 11814 || t === 11815 || t === 11816 || t === 11817 || t >= 11818 && t <= 11822 || t === 11823 || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || t === 11840 || t === 11841 || t === 11842 || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || t === 11858 || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || t === 12296 || t === 12297 || t === 12298 || t === 12299 || t === 12300 || t === 12301 || t === 12302 || t === 12303 || t === 12304 || t === 12305 || t >= 12306 && t <= 12307 || t === 12308 || t === 12309 || t === 12310 || t === 12311 || t === 12312 || t === 12313 || t === 12314 || t === 12315 || t === 12316 || t === 12317 || t >= 12318 && t <= 12319 || t === 12320 || t === 12336 || t === 64830 || t === 64831 || t >= 65093 && t <= 65094;
}
function ms(t) {
  t.forEach(function(e) {
    if (delete e.location, dc(e) || fc(e))
      for (var n in e.options)
        delete e.options[n].location, ms(e.options[n].value);
    else lc(e) && vc(e.style) || (uc(e) || cc(e)) && cs(e.style) ? delete e.style.location : hc(e) && ms(e.children);
  });
}
function Qh(t, e) {
  e === void 0 && (e = {}), e = fe({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e);
  var n = new zh(t, e).parse();
  if (n.err) {
    var i = SyntaxError(Ye[n.err.kind]);
    throw i.location = n.err.location, i.originalMessage = n.err.message, i;
  }
  return e != null && e.captureLocation || ms(n.val), n.val;
}
var jr;
(function(t) {
  t.MISSING_VALUE = "MISSING_VALUE", t.INVALID_VALUE = "INVALID_VALUE", t.MISSING_INTL_API = "MISSING_INTL_API";
})(jr || (jr = {}));
var Co = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n, i, r) {
      var a = t.call(this, n) || this;
      return a.code = i, a.originalMessage = r, a;
    }
    return e.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, e;
  }(Error)
), Al = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n, i, r, a) {
      return t.call(this, 'Invalid values for "'.concat(n, '": "').concat(i, '". Options are "').concat(Object.keys(r).join('", "'), '"'), jr.INVALID_VALUE, a) || this;
    }
    return e;
  }(Co)
), Jh = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n, i, r) {
      return t.call(this, 'Value for "'.concat(n, '" must be of type ').concat(i), jr.INVALID_VALUE, r) || this;
    }
    return e;
  }(Co)
), $h = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n, i) {
      return t.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(i, '"'), jr.MISSING_VALUE, i) || this;
    }
    return e;
  }(Co)
), Zt;
(function(t) {
  t[t.literal = 0] = "literal", t[t.object = 1] = "object";
})(Zt || (Zt = {}));
function ev(t) {
  return t.length < 2 ? t : t.reduce(function(e, n) {
    var i = e[e.length - 1];
    return !i || i.type !== Zt.literal || n.type !== Zt.literal ? e.push(n) : i.value += n.value, e;
  }, []);
}
function tv(t) {
  return typeof t == "function";
}
function Ya(t, e, n, i, r, a, o) {
  if (t.length === 1 && gl(t[0]))
    return [
      {
        type: Zt.literal,
        value: t[0].value
      }
    ];
  for (var u = [], l = 0, c = t; l < c.length; l++) {
    var d = c[l];
    if (gl(d)) {
      u.push({
        type: Zt.literal,
        value: d.value
      });
      continue;
    }
    if (Ch(d)) {
      typeof a == "number" && u.push({
        type: Zt.literal,
        value: n.getNumberFormat(e).format(a)
      });
      continue;
    }
    var h = d.value;
    if (!(r && h in r))
      throw new $h(h, o);
    var f = r[h];
    if (Eh(d)) {
      (!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), u.push({
        type: typeof f == "string" ? Zt.literal : Zt.object,
        value: f
      });
      continue;
    }
    if (uc(d)) {
      var v = typeof d.style == "string" ? i.date[d.style] : cs(d.style) ? d.style.parsedOptions : void 0;
      u.push({
        type: Zt.literal,
        value: n.getDateTimeFormat(e, v).format(f)
      });
      continue;
    }
    if (cc(d)) {
      var v = typeof d.style == "string" ? i.time[d.style] : cs(d.style) ? d.style.parsedOptions : i.time.medium;
      u.push({
        type: Zt.literal,
        value: n.getDateTimeFormat(e, v).format(f)
      });
      continue;
    }
    if (lc(d)) {
      var v = typeof d.style == "string" ? i.number[d.style] : vc(d.style) ? d.style.parsedOptions : void 0;
      v && v.scale && (f = f * (v.scale || 1)), u.push({
        type: Zt.literal,
        value: n.getNumberFormat(e, v).format(f)
      });
      continue;
    }
    if (hc(d)) {
      var p = d.children, g = d.value, _ = r[g];
      if (!tv(_))
        throw new Jh(g, "function", o);
      var C = Ya(p, e, n, i, r, a), x = _(C.map(function(E) {
        return E.value;
      }));
      Array.isArray(x) || (x = [x]), u.push.apply(u, x.map(function(E) {
        return {
          type: typeof E == "string" ? Zt.literal : Zt.object,
          value: E
        };
      }));
    }
    if (dc(d)) {
      var S = d.options[f] || d.options.other;
      if (!S)
        throw new Al(d.value, f, Object.keys(d.options), o);
      u.push.apply(u, Ya(S.value, e, n, i, r));
      continue;
    }
    if (fc(d)) {
      var S = d.options["=".concat(f)];
      if (!S) {
        if (!Intl.PluralRules)
          throw new Co(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, jr.MISSING_INTL_API, o);
        var b = n.getPluralRules(e, { type: d.pluralType }).select(f - (d.offset || 0));
        S = d.options[b] || d.options.other;
      }
      if (!S)
        throw new Al(d.value, f, Object.keys(d.options), o);
      u.push.apply(u, Ya(S.value, e, n, i, r, f - (d.offset || 0)));
      continue;
    }
  }
  return ev(u);
}
function nv(t, e) {
  return e ? fe(fe(fe({}, t || {}), e || {}), Object.keys(t).reduce(function(n, i) {
    return n[i] = fe(fe({}, t[i]), e[i] || {}), n;
  }, {})) : t;
}
function iv(t, e) {
  return e ? Object.keys(t).reduce(function(n, i) {
    return n[i] = nv(t[i], e[i]), n;
  }, fe({}, t)) : t;
}
function ko(t) {
  return {
    create: function() {
      return {
        get: function(e) {
          return t[e];
        },
        set: function(e, n) {
          t[e] = n;
        }
      };
    }
  };
}
function rv(t) {
  return t === void 0 && (t = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: Ho(function() {
      for (var e, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      return new ((e = Intl.NumberFormat).bind.apply(e, Ai([void 0], n, !1)))();
    }, {
      cache: ko(t.number),
      strategy: Uo.variadic
    }),
    getDateTimeFormat: Ho(function() {
      for (var e, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      return new ((e = Intl.DateTimeFormat).bind.apply(e, Ai([void 0], n, !1)))();
    }, {
      cache: ko(t.dateTime),
      strategy: Uo.variadic
    }),
    getPluralRules: Ho(function() {
      for (var e, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      return new ((e = Intl.PluralRules).bind.apply(e, Ai([void 0], n, !1)))();
    }, {
      cache: ko(t.pluralRules),
      strategy: Uo.variadic
    })
  };
}
var Ec = (
  /** @class */
  function() {
    function t(e, n, i, r) {
      n === void 0 && (n = t.defaultLocale);
      var a = this;
      if (this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(l) {
        var c = a.formatToParts(l);
        if (c.length === 1)
          return c[0].value;
        var d = c.reduce(function(h, f) {
          return !h.length || f.type !== Zt.literal || typeof h[h.length - 1] != "string" ? h.push(f.value) : h[h.length - 1] += f.value, h;
        }, []);
        return d.length <= 1 ? d[0] || "" : d;
      }, this.formatToParts = function(l) {
        return Ya(a.ast, a.locales, a.formatters, a.formats, l, void 0, a.message);
      }, this.resolvedOptions = function() {
        var l;
        return {
          locale: ((l = a.resolvedLocale) === null || l === void 0 ? void 0 : l.toString()) || Intl.NumberFormat.supportedLocalesOf(a.locales)[0]
        };
      }, this.getAst = function() {
        return a.ast;
      }, this.locales = n, this.resolvedLocale = t.resolveLocale(n), typeof e == "string") {
        if (this.message = e, !t.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        var o = r || {};
        o.formatters;
        var u = fh(o, ["formatters"]);
        this.ast = t.__parse(e, fe(fe({}, u), { locale: this.resolvedLocale }));
      } else
        this.ast = e;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = iv(t.formats, i), this.formatters = r && r.formatters || rv(this.formatterCache);
    }
    return Object.defineProperty(t, "defaultLocale", {
      get: function() {
        return t.memoizedDefaultLocale || (t.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), t.memoizedDefaultLocale;
      },
      enumerable: !1,
      configurable: !0
    }), t.memoizedDefaultLocale = null, t.resolveLocale = function(e) {
      if (!(typeof Intl.Locale > "u")) {
        var n = Intl.NumberFormat.supportedLocalesOf(e);
        return n.length > 0 ? new Intl.Locale(n[0]) : new Intl.Locale(typeof e == "string" ? e : e[0]);
      }
    }, t.__parse = Qh, t.formats = {
      number: {
        integer: {
          maximumFractionDigits: 0
        },
        currency: {
          style: "currency"
        },
        percent: {
          style: "percent"
        }
      },
      date: {
        short: {
          month: "numeric",
          day: "numeric",
          year: "2-digit"
        },
        medium: {
          month: "short",
          day: "numeric",
          year: "numeric"
        },
        long: {
          month: "long",
          day: "numeric",
          year: "numeric"
        },
        full: {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric"
        }
      },
      time: {
        short: {
          hour: "numeric",
          minute: "numeric"
        },
        medium: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        },
        long: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        },
        full: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        }
      }
    }, t;
  }()
);
function av(t, e) {
  if (e == null)
    return;
  if (e in t)
    return t[e];
  const n = e.split(".");
  let i = t;
  for (let r = 0; r < n.length; r++)
    if (typeof i == "object") {
      if (r > 0) {
        const a = n.slice(r, n.length).join(".");
        if (a in i) {
          i = i[a];
          break;
        }
      }
      i = i[n[r]];
    } else
      i = void 0;
  return i;
}
const yi = {}, ov = (t, e, n) => n && (e in yi || (yi[e] = {}), t in yi[e] || (yi[e][t] = n), n), Cc = (t, e) => {
  if (e == null)
    return;
  if (e in yi && t in yi[e])
    return yi[e][t];
  const n = wa(e);
  for (let i = 0; i < n.length; i++) {
    const r = n[i], a = lv(r, t);
    if (a)
      return ov(t, e, a);
  }
};
let ks;
const Oa = bt({});
function sv(t) {
  return ks[t] || null;
}
function Ac(t) {
  return t in ks;
}
function lv(t, e) {
  if (!Ac(t))
    return null;
  const n = sv(t);
  return av(n, e);
}
function uv(t) {
  if (t == null)
    return;
  const e = wa(t);
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    if (Ac(i))
      return i;
  }
}
function Sc(t, ...e) {
  delete yi[t], Oa.update((n) => (n[t] = dh.all([n[t] || {}, ...e]), n));
}
zr(
  [Oa],
  ([t]) => Object.keys(t)
);
Oa.subscribe((t) => ks = t);
const Za = {};
function cv(t, e) {
  Za[t].delete(e), Za[t].size === 0 && delete Za[t];
}
function xc(t) {
  return Za[t];
}
function dv(t) {
  return wa(t).map((e) => {
    const n = xc(e);
    return [e, n ? [...n] : []];
  }).filter(([, e]) => e.length > 0);
}
function to(t) {
  return t == null ? !1 : wa(t).some(
    (e) => {
      var n;
      return (n = xc(e)) == null ? void 0 : n.size;
    }
  );
}
function fv(t, e) {
  return Promise.all(
    e.map((i) => (cv(t, i), i().then((r) => r.default || r)))
  ).then((i) => Sc(t, ...i));
}
const ra = {};
function Tc(t) {
  if (!to(t))
    return t in ra ? ra[t] : Promise.resolve();
  const e = dv(t);
  return ra[t] = Promise.all(
    e.map(
      ([n, i]) => fv(n, i)
    )
  ).then(() => {
    if (to(t))
      return Tc(t);
    delete ra[t];
  }), ra[t];
}
var Sl = Object.getOwnPropertySymbols, hv = Object.prototype.hasOwnProperty, vv = Object.prototype.propertyIsEnumerable, mv = (t, e) => {
  var n = {};
  for (var i in t)
    hv.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
  if (t != null && Sl)
    for (var i of Sl(t))
      e.indexOf(i) < 0 && vv.call(t, i) && (n[i] = t[i]);
  return n;
};
const pv = {
  number: {
    scientific: { notation: "scientific" },
    engineering: { notation: "engineering" },
    compactLong: { notation: "compact", compactDisplay: "long" },
    compactShort: { notation: "compact", compactDisplay: "short" }
  },
  date: {
    short: { month: "numeric", day: "numeric", year: "2-digit" },
    medium: { month: "short", day: "numeric", year: "numeric" },
    long: { month: "long", day: "numeric", year: "numeric" },
    full: { weekday: "long", month: "long", day: "numeric", year: "numeric" }
  },
  time: {
    short: { hour: "numeric", minute: "numeric" },
    medium: { hour: "numeric", minute: "numeric", second: "numeric" },
    long: {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    },
    full: {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    }
  }
};
function gv({ locale: t, id: e }) {
  console.warn(
    `[svelte-i18n] The message "${e}" was not found in "${wa(
      t
    ).join('", "')}".${to(Ri()) ? `

Note: there are at least one loader still registered to this locale that wasn't executed.` : ""}`
  );
}
const bv = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: pv,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, fa = bv;
function Wr() {
  return fa;
}
function Iv(t) {
  const e = t, { formats: n } = e, i = mv(e, ["formats"]);
  let r = t.fallbackLocale;
  if (t.initialLocale)
    try {
      Ec.resolveLocale(t.initialLocale) && (r = t.initialLocale);
    } catch {
      console.warn(
        `[svelte-i18n] The initial locale "${t.initialLocale}" is not a valid locale.`
      );
    }
  return i.warnOnMissingMessages && (delete i.warnOnMissingMessages, i.handleMissingMessage == null ? i.handleMissingMessage = gv : console.warn(
    '[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.'
  )), Object.assign(fa, i, { initialLocale: r }), n && ("number" in n && Object.assign(fa.formats.number, n.number), "date" in n && Object.assign(fa.formats.date, n.date), "time" in n && Object.assign(fa.formats.time, n.time)), cr.set(r);
}
const Vo = bt(!1);
var yv = Object.defineProperty, _v = Object.defineProperties, Ev = Object.getOwnPropertyDescriptors, xl = Object.getOwnPropertySymbols, Cv = Object.prototype.hasOwnProperty, Av = Object.prototype.propertyIsEnumerable, Tl = (t, e, n) => e in t ? yv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Sv = (t, e) => {
  for (var n in e || (e = {}))
    Cv.call(e, n) && Tl(t, n, e[n]);
  if (xl)
    for (var n of xl(e))
      Av.call(e, n) && Tl(t, n, e[n]);
  return t;
}, xv = (t, e) => _v(t, Ev(e));
let ps;
const no = bt(null);
function Ll(t) {
  return t.split("-").map((e, n, i) => i.slice(0, n + 1).join("-")).reverse();
}
function wa(t, e = Wr().fallbackLocale) {
  const n = Ll(t);
  return e ? [.../* @__PURE__ */ new Set([...n, ...Ll(e)])] : n;
}
function Ri() {
  return ps ?? void 0;
}
no.subscribe((t) => {
  ps = t ?? void 0, typeof window < "u" && t != null && document.documentElement.setAttribute("lang", t);
});
const Tv = (t) => {
  if (t && uv(t) && to(t)) {
    const { loadingDelay: e } = Wr();
    let n;
    return typeof window < "u" && Ri() != null && e ? n = window.setTimeout(
      () => Vo.set(!0),
      e
    ) : Vo.set(!0), Tc(t).then(() => {
      no.set(t);
    }).finally(() => {
      clearTimeout(n), Vo.set(!1);
    });
  }
  return no.set(t);
}, cr = xv(Sv({}, no), {
  set: Tv
}), Lv = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0], Ao = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (i) => {
    const r = JSON.stringify(i);
    return r in e ? e[r] : e[r] = t(i);
  };
};
var Ov = Object.defineProperty, io = Object.getOwnPropertySymbols, Lc = Object.prototype.hasOwnProperty, Oc = Object.prototype.propertyIsEnumerable, Ol = (t, e, n) => e in t ? Ov(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Vs = (t, e) => {
  for (var n in e || (e = {}))
    Lc.call(e, n) && Ol(t, n, e[n]);
  if (io)
    for (var n of io(e))
      Oc.call(e, n) && Ol(t, n, e[n]);
  return t;
}, Xr = (t, e) => {
  var n = {};
  for (var i in t)
    Lc.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
  if (t != null && io)
    for (var i of io(t))
      e.indexOf(i) < 0 && Oc.call(t, i) && (n[i] = t[i]);
  return n;
};
const Ea = (t, e) => {
  const { formats: n } = Wr();
  if (t in n && e in n[t])
    return n[t][e];
  throw new Error(`[svelte-i18n] Unknown "${e}" ${t} format.`);
}, wv = Ao(
  (t) => {
    var e = t, { locale: n, format: i } = e, r = Xr(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return i && (r = Ea("number", i)), new Intl.NumberFormat(n, r);
  }
), Rv = Ao(
  (t) => {
    var e = t, { locale: n, format: i } = e, r = Xr(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return i ? r = Ea("date", i) : Object.keys(r).length === 0 && (r = Ea("date", "short")), new Intl.DateTimeFormat(n, r);
  }
), Mv = Ao(
  (t) => {
    var e = t, { locale: n, format: i } = e, r = Xr(e, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return i ? r = Ea("time", i) : Object.keys(r).length === 0 && (r = Ea("time", "short")), new Intl.DateTimeFormat(n, r);
  }
), Dv = (t = {}) => {
  var e = t, {
    locale: n = Ri()
  } = e, i = Xr(e, [
    "locale"
  ]);
  return wv(Vs({ locale: n }, i));
}, Pv = (t = {}) => {
  var e = t, {
    locale: n = Ri()
  } = e, i = Xr(e, [
    "locale"
  ]);
  return Rv(Vs({ locale: n }, i));
}, Nv = (t = {}) => {
  var e = t, {
    locale: n = Ri()
  } = e, i = Xr(e, [
    "locale"
  ]);
  return Mv(Vs({ locale: n }, i));
}, Fv = Ao(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (t, e = Ri()) => new Ec(t, e, Wr().formats, {
    ignoreTag: Wr().ignoreTag
  })
), Hv = (t, e = {}) => {
  var n, i, r, a;
  let o = e;
  typeof t == "object" && (o = t, t = o.id);
  const {
    values: u,
    locale: l = Ri(),
    default: c
  } = o;
  if (l == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let d = Cc(t, l);
  if (!d)
    d = (a = (r = (i = (n = Wr()).handleMissingMessage) == null ? void 0 : i.call(n, { locale: l, id: t, defaultValue: c })) != null ? r : c) != null ? a : t;
  else if (typeof d != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${t}" must be of type "string", found: "${typeof d}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), d;
  if (!u)
    return d;
  let h = d;
  try {
    h = Fv(d, l).format(u);
  } catch (f) {
    f instanceof Error && console.warn(
      `[svelte-i18n] Message "${t}" has syntax error:`,
      f.message
    );
  }
  return h;
}, Uv = (t, e) => Nv(e).format(t), Bv = (t, e) => Pv(e).format(t), kv = (t, e) => Dv(e).format(t), Vv = (t, e = Ri()) => Cc(t, e), Gv = zr([cr, Oa], () => Hv);
zr([cr], () => Uv);
zr([cr], () => Bv);
zr([cr], () => kv);
zr([cr, Oa], () => Vv);
function jv(t, e) {
  Object.entries(t).forEach(([a, o]) => {
    Sc(a, o);
  });
  const n = localStorage.getItem("language"), i = "en", r = n ?? Lv();
  console.log("Initial: Setting the language to", r), Iv({
    fallbackLocale: i,
    initialLocale: r
  }), window.addEventListener("oscd-language-changed", (a) => {
    const o = a;
    if (!o.detail.language) {
      console.error("No translations for language");
      return;
    }
    console.log("Updating the language to", o.detail.language), cr.set(o.detail.language);
  });
}
const Wv = "Ort", qv = "Suche", Kv = "UUID", zv = "File Name", Xv = "Autor", Yv = "Typ", Zv = "Version", Qv = "Datum", Jv = "Fertig", $v = "Filtertypen", em = "Filter Hinzufügen", tm = {
  location: Wv,
  search: qv,
  uuid: Kv,
  filename: zv,
  author: Xv,
  type: Yv,
  version: Zv,
  date: Qv,
  "versionHistory.title": "Versionsverlauf der Datei {filename}",
  "versionTable.heading": "Versionstabelle",
  done: Jv,
  filter_types: $v,
  add_filter: em
}, nm = "Location", im = "Search", rm = "UUID", am = "Filename", om = "Author", sm = "Type", lm = "Version", um = "Date", cm = "Done", dm = "Filter Types", fm = "Add Filter", hm = {
  location: nm,
  search: im,
  uuid: rm,
  filename: am,
  author: om,
  type: sm,
  version: lm,
  date: um,
  "versionHistory.title": "Version History of file {filename}",
  "versionTable.heading": "Version Table",
  done: cm,
  filter_types: dm,
  add_filter: fm
};
function vm(t, e = {}) {
  const n = e.priority || "polite", i = e.ownerDocument || document, r = i.querySelectorAll("[data-smui-dom-announce]");
  r.length && r.forEach((o) => {
    var u;
    (u = o.parentNode) === null || u === void 0 || u.removeChild(o);
  });
  const a = i.createElement("div");
  a.style.position = "absolute", a.style.top = "-9999px", a.style.left = "-9999px", a.style.height = "1px", a.style.overflow = "hidden", a.setAttribute("aria-atomic", "true"), a.setAttribute("aria-live", n), a.setAttribute("data-mdc-dom-announce", "true"), a.setAttribute("data-smui-dom-announce", "true"), i.body.appendChild(a), window.setTimeout(() => {
    a.textContent = t;
    const o = () => {
      a.textContent = "", a.removeEventListener("click", o);
    };
    a.addEventListener("click", o, { once: !0 });
  }, 100);
}
function Ne(t) {
  return Object.entries(t).filter(([e, n]) => e !== "" && n).map(([e]) => e).join(" ");
}
function ke(t, e, n, i = { bubbles: !0 }) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  if (!t)
    throw new Error("Tried to dispatch event without element.");
  const r = new CustomEvent(e, Object.assign(Object.assign({}, i), { detail: n }));
  return t == null || t.dispatchEvent(r), r;
}
function ir(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const i = {};
  for (let r = 0; r < n.length; r++) {
    const a = n[r], o = a.indexOf("$");
    o !== -1 && e.indexOf(a.substring(0, o + 1)) !== -1 || e.indexOf(a) === -1 && (i[a] = t[a]);
  }
  return i;
}
function ot(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const i = {};
  for (let r = 0; r < n.length; r++) {
    const a = n[r];
    a.substring(0, e.length) === e && (i[a.substring(e.length)] = t[a]);
  }
  return i;
}
class Yr {
  constructor() {
    this.elementMap = /* @__PURE__ */ new Map();
  }
  /**
   * Listen to an event on an element.
   */
  on(e, n, i, r) {
    this.elementMap.has(e) || this.elementMap.set(e, {});
    const a = this.elementMap.get(e);
    if (a == null)
      throw new Error("Event map couldn't be created.");
    n in a || (a[n] = /* @__PURE__ */ new Map()), a[n].set(i, Cf(e, n, i, r));
  }
  /**
   * Unlisten to an event on an element.
   */
  off(e, n, i) {
    const r = this.elementMap.get(e);
    if (r == null || !(n in r))
      return;
    const a = r[n], o = a.get(i);
    o != null && (o(), a.delete(i), a.size === 0 && (delete r[n], Object.keys(r).length === 0 && this.elementMap.delete(e)));
  }
  /**
   * Unlisten to all events managed by this instance.
   */
  clear() {
    this.elementMap.forEach((e, n) => {
      for (let [i, r] of Object.entries(e))
        r.forEach((a, o) => {
          a();
        });
    }), this.elementMap.clear();
  }
}
function X(t, e) {
  let n = [];
  if (e)
    for (let i = 0; i < e.length; i++) {
      const r = e[i], a = Array.isArray(r) ? r[0] : r;
      Array.isArray(r) && r.length > 1 ? n.push(a(t, r[1])) : n.push(a(t));
    }
  return {
    update(i) {
      if ((i && i.length || 0) != n.length)
        throw new Error("You must not change the length of an actions array.");
      if (i)
        for (let r = 0; r < i.length; r++) {
          const a = n[r];
          if (a && a.update) {
            const o = i[r];
            Array.isArray(o) && o.length > 1 ? a.update(o[1]) : a.update();
          }
        }
    },
    destroy() {
      for (let i = 0; i < n.length; i++) {
        const r = n[i];
        r && r.destroy && r.destroy();
      }
    }
  };
}
var Ua;
function wc(t, e) {
  e === void 0 && (e = !1);
  var n = t.CSS, i = Ua;
  if (typeof Ua == "boolean" && !e)
    return Ua;
  var r = n && typeof n.supports == "function";
  if (!r)
    return !1;
  var a = n.supports("--css-vars", "yes"), o = n.supports("(--css-vars: yes)") && n.supports("color", "#00000000");
  return i = a || o, e || (Ua = i), i;
}
function mm(t, e, n) {
  if (!t)
    return { x: 0, y: 0 };
  var i = e.x, r = e.y, a = i + n.left, o = r + n.top, u, l;
  if (t.type === "touchstart") {
    var c = t;
    u = c.changedTouches[0].pageX - a, l = c.changedTouches[0].pageY - o;
  } else {
    var d = t;
    u = d.pageX - a, l = d.pageY - o;
  }
  return { x: u, y: l };
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Dt = (
  /** @class */
  function() {
    function t(e) {
      e === void 0 && (e = {}), this.adapter = e;
    }
    return Object.defineProperty(t, "cssClasses", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "strings", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "numbers", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "defaultAdapter", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.init = function() {
    }, t.prototype.destroy = function() {
    }, t;
  }()
);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var So = (
  /** @class */
  function() {
    function t(e, n) {
      for (var i = [], r = 2; r < arguments.length; r++)
        i[r - 2] = arguments[r];
      this.root = e, this.initialize.apply(this, Ai([], Vr(i))), this.foundation = n === void 0 ? this.getDefaultFoundation() : n, this.foundation.init(), this.initialSyncWithDOM();
    }
    return t.attachTo = function(e) {
      return new t(e, new Dt({}));
    }, t.prototype.initialize = function() {
    }, t.prototype.getDefaultFoundation = function() {
      throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class");
    }, t.prototype.initialSyncWithDOM = function() {
    }, t.prototype.destroy = function() {
      this.foundation.destroy();
    }, t.prototype.listen = function(e, n, i) {
      this.root.addEventListener(e, n, i);
    }, t.prototype.unlisten = function(e, n, i) {
      this.root.removeEventListener(e, n, i);
    }, t.prototype.emit = function(e, n, i) {
      i === void 0 && (i = !1);
      var r;
      typeof CustomEvent == "function" ? r = new CustomEvent(e, {
        bubbles: i,
        detail: n
      }) : (r = document.createEvent("CustomEvent"), r.initCustomEvent(e, i, !1, n)), this.root.dispatchEvent(r);
    }, t;
  }()
);
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function ha(t) {
  return t === void 0 && (t = window), pm(t) ? { passive: !0 } : !1;
}
function pm(t) {
  t === void 0 && (t = window);
  var e = !1;
  try {
    var n = {
      // This function will be called when the browser
      // attempts to access the passive property.
      get passive() {
        return e = !0, !1;
      }
    }, i = function() {
    };
    t.document.addEventListener("test", i, n), t.document.removeEventListener("test", i, n);
  } catch {
    e = !1;
  }
  return e;
}
const Rc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: ha
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function gm(t, e) {
  if (t.closest)
    return t.closest(e);
  for (var n = t; n; ) {
    if (Gs(n, e))
      return n;
    n = n.parentElement;
  }
  return null;
}
function Gs(t, e) {
  var n = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return n.call(t, e);
}
function bm(t) {
  var e = t;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var n = e.cloneNode(!0);
  n.style.setProperty("position", "absolute"), n.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(n);
  var i = n.scrollWidth;
  return document.documentElement.removeChild(n), i;
}
const Ra = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: gm,
  estimateScrollWidth: bm,
  matches: Gs
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Im = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, ym = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, wl = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Rl = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Ml = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Ba = [], xo = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      var i = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return i.activationAnimationHasEnded = !1, i.activationTimer = 0, i.fgDeactivationRemovalTimer = 0, i.fgScale = "0", i.frame = { width: 0, height: 0 }, i.initialSize = 0, i.layoutFrame = 0, i.maxRadius = 0, i.unboundedCoords = { left: 0, top: 0 }, i.activationState = i.defaultActivationState(), i.activationTimerCallback = function() {
        i.activationAnimationHasEnded = !0, i.runDeactivationUXLogicIfReady();
      }, i.activateHandler = function(r) {
        i.activateImpl(r);
      }, i.deactivateHandler = function() {
        i.deactivateImpl();
      }, i.focusHandler = function() {
        i.handleFocus();
      }, i.blurHandler = function() {
        i.handleBlur();
      }, i.resizeHandler = function() {
        i.layout();
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Im;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return ym;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return wl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          browserSupportsCssVars: function() {
            return !0;
          },
          computeBoundingRect: function() {
            return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
          },
          containsEventTarget: function() {
            return !0;
          },
          deregisterDocumentInteractionHandler: function() {
          },
          deregisterInteractionHandler: function() {
          },
          deregisterResizeHandler: function() {
          },
          getWindowPageOffset: function() {
            return { x: 0, y: 0 };
          },
          isSurfaceActive: function() {
            return !0;
          },
          isSurfaceDisabled: function() {
            return !0;
          },
          isUnbounded: function() {
            return !0;
          },
          registerDocumentInteractionHandler: function() {
          },
          registerInteractionHandler: function() {
          },
          registerResizeHandler: function() {
          },
          removeClass: function() {
          },
          updateCssVariable: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var n = this, i = this.supportsPressRipple();
      if (this.registerRootHandlers(i), i) {
        var r = e.cssClasses, a = r.ROOT, o = r.UNBOUNDED;
        requestAnimationFrame(function() {
          n.adapter.addClass(a), n.adapter.isUnbounded() && (n.adapter.addClass(o), n.layoutInternal());
        });
      }
    }, e.prototype.destroy = function() {
      var n = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
        var i = e.cssClasses, r = i.ROOT, a = i.UNBOUNDED;
        requestAnimationFrame(function() {
          n.adapter.removeClass(r), n.adapter.removeClass(a), n.removeCssVars();
        });
      }
      this.deregisterRootHandlers(), this.deregisterDeactivationHandlers();
    }, e.prototype.activate = function(n) {
      this.activateImpl(n);
    }, e.prototype.deactivate = function() {
      this.deactivateImpl();
    }, e.prototype.layout = function() {
      var n = this;
      this.layoutFrame && cancelAnimationFrame(this.layoutFrame), this.layoutFrame = requestAnimationFrame(function() {
        n.layoutInternal(), n.layoutFrame = 0;
      });
    }, e.prototype.setUnbounded = function(n) {
      var i = e.cssClasses.UNBOUNDED;
      n ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, e.prototype.handleFocus = function() {
      var n = this;
      requestAnimationFrame(function() {
        return n.adapter.addClass(e.cssClasses.BG_FOCUSED);
      });
    }, e.prototype.handleBlur = function() {
      var n = this;
      requestAnimationFrame(function() {
        return n.adapter.removeClass(e.cssClasses.BG_FOCUSED);
      });
    }, e.prototype.supportsPressRipple = function() {
      return this.adapter.browserSupportsCssVars();
    }, e.prototype.defaultActivationState = function() {
      return {
        activationEvent: void 0,
        hasDeactivationUXRun: !1,
        isActivated: !1,
        isProgrammatic: !1,
        wasActivatedByPointer: !1,
        wasElementMadeActive: !1
      };
    }, e.prototype.registerRootHandlers = function(n) {
      var i, r;
      if (n) {
        try {
          for (var a = Mt(Rl), o = a.next(); !o.done; o = a.next()) {
            var u = o.value;
            this.adapter.registerInteractionHandler(u, this.activateHandler);
          }
        } catch (l) {
          i = { error: l };
        } finally {
          try {
            o && !o.done && (r = a.return) && r.call(a);
          } finally {
            if (i) throw i.error;
          }
        }
        this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
      }
      this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
    }, e.prototype.registerDeactivationHandlers = function(n) {
      var i, r;
      if (n.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var a = Mt(Ml), o = a.next(); !o.done; o = a.next()) {
            var u = o.value;
            this.adapter.registerDocumentInteractionHandler(u, this.deactivateHandler);
          }
        } catch (l) {
          i = { error: l };
        } finally {
          try {
            o && !o.done && (r = a.return) && r.call(a);
          } finally {
            if (i) throw i.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var n, i;
      try {
        for (var r = Mt(Rl), a = r.next(); !a.done; a = r.next()) {
          var o = a.value;
          this.adapter.deregisterInteractionHandler(o, this.activateHandler);
        }
      } catch (u) {
        n = { error: u };
      } finally {
        try {
          a && !a.done && (i = r.return) && i.call(r);
        } finally {
          if (n) throw n.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, e.prototype.deregisterDeactivationHandlers = function() {
      var n, i;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var r = Mt(Ml), a = r.next(); !a.done; a = r.next()) {
          var o = a.value;
          this.adapter.deregisterDocumentInteractionHandler(o, this.deactivateHandler);
        }
      } catch (u) {
        n = { error: u };
      } finally {
        try {
          a && !a.done && (i = r.return) && i.call(r);
        } finally {
          if (n) throw n.error;
        }
      }
    }, e.prototype.removeCssVars = function() {
      var n = this, i = e.strings, r = Object.keys(i);
      r.forEach(function(a) {
        a.indexOf("VAR_") === 0 && n.adapter.updateCssVariable(i[a], null);
      });
    }, e.prototype.activateImpl = function(n) {
      var i = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var r = this.activationState;
        if (!r.isActivated) {
          var a = this.previousActivationEvent, o = a && n !== void 0 && a.type !== n.type;
          if (!o) {
            r.isActivated = !0, r.isProgrammatic = n === void 0, r.activationEvent = n, r.wasActivatedByPointer = r.isProgrammatic ? !1 : n !== void 0 && (n.type === "mousedown" || n.type === "touchstart" || n.type === "pointerdown");
            var u = n !== void 0 && Ba.length > 0 && Ba.some(function(l) {
              return i.adapter.containsEventTarget(l);
            });
            if (u) {
              this.resetActivationState();
              return;
            }
            n !== void 0 && (Ba.push(n.target), this.registerDeactivationHandlers(n)), r.wasElementMadeActive = this.checkElementMadeActive(n), r.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Ba = [], !r.wasElementMadeActive && n !== void 0 && (n.key === " " || n.keyCode === 32) && (r.wasElementMadeActive = i.checkElementMadeActive(n), r.wasElementMadeActive && i.animateActivation()), r.wasElementMadeActive || (i.activationState = i.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(n) {
      return n !== void 0 && n.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var n = this, i = e.strings, r = i.VAR_FG_TRANSLATE_START, a = i.VAR_FG_TRANSLATE_END, o = e.cssClasses, u = o.FG_DEACTIVATION, l = o.FG_ACTIVATION, c = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var d = "", h = "";
      if (!this.adapter.isUnbounded()) {
        var f = this.getFgTranslationCoordinates(), v = f.startPoint, p = f.endPoint;
        d = v.x + "px, " + v.y + "px", h = p.x + "px, " + p.y + "px";
      }
      this.adapter.updateCssVariable(r, d), this.adapter.updateCssVariable(a, h), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(u), this.adapter.computeBoundingRect(), this.adapter.addClass(l), this.activationTimer = setTimeout(function() {
        n.activationTimerCallback();
      }, c);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var n = this.activationState, i = n.activationEvent, r = n.wasActivatedByPointer, a;
      r ? a = mm(i, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, a = {
        x: a.x - this.initialSize / 2,
        y: a.y - this.initialSize / 2
      };
      var o = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: a, endPoint: o };
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var n = this, i = e.cssClasses.FG_DEACTIVATION, r = this.activationState, a = r.hasDeactivationUXRun, o = r.isActivated, u = a || !o;
      u && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(i), this.fgDeactivationRemovalTimer = setTimeout(function() {
        n.adapter.removeClass(i);
      }, wl.FG_DEACTIVATION_MS));
    }, e.prototype.rmBoundedActivationClasses = function() {
      var n = e.cssClasses.FG_ACTIVATION;
      this.adapter.removeClass(n), this.activationAnimationHasEnded = !1, this.adapter.computeBoundingRect();
    }, e.prototype.resetActivationState = function() {
      var n = this;
      this.previousActivationEvent = this.activationState.activationEvent, this.activationState = this.defaultActivationState(), setTimeout(function() {
        return n.previousActivationEvent = void 0;
      }, e.numbers.TAP_DELAY_MS);
    }, e.prototype.deactivateImpl = function() {
      var n = this, i = this.activationState;
      if (i.isActivated) {
        var r = fe({}, i);
        i.isProgrammatic ? (requestAnimationFrame(function() {
          n.animateDeactivation(r);
        }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
          n.activationState.hasDeactivationUXRun = !0, n.animateDeactivation(r), n.resetActivationState();
        }));
      }
    }, e.prototype.animateDeactivation = function(n) {
      var i = n.wasActivatedByPointer, r = n.wasElementMadeActive;
      (i || r) && this.runDeactivationUXLogicIfReady();
    }, e.prototype.layoutInternal = function() {
      var n = this;
      this.frame = this.adapter.computeBoundingRect();
      var i = Math.max(this.frame.height, this.frame.width), r = function() {
        var o = Math.sqrt(Math.pow(n.frame.width, 2) + Math.pow(n.frame.height, 2));
        return o + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? i : r();
      var a = Math.floor(i * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && a % 2 !== 0 ? this.initialSize = a - 1 : this.initialSize = a, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var n = e.strings, i = n.VAR_FG_SIZE, r = n.VAR_LEFT, a = n.VAR_TOP, o = n.VAR_FG_SCALE;
      this.adapter.updateCssVariable(i, this.initialSize + "px"), this.adapter.updateCssVariable(o, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(r, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(a, this.unboundedCoords.top + "px"));
    }, e;
  }(Dt)
);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ro = (
  /** @class */
  function(t) {
    tt(e, t);
    function e() {
      var n = t !== null && t.apply(this, arguments) || this;
      return n.disabled = !1, n;
    }
    return e.attachTo = function(n, i) {
      i === void 0 && (i = {
        isUnbounded: void 0
      });
      var r = new e(n);
      return i.isUnbounded !== void 0 && (r.unbounded = i.isUnbounded), r;
    }, e.createAdapter = function(n) {
      return {
        addClass: function(i) {
          return n.root.classList.add(i);
        },
        browserSupportsCssVars: function() {
          return wc(window);
        },
        computeBoundingRect: function() {
          return n.root.getBoundingClientRect();
        },
        containsEventTarget: function(i) {
          return n.root.contains(i);
        },
        deregisterDocumentInteractionHandler: function(i, r) {
          return document.documentElement.removeEventListener(i, r, ha());
        },
        deregisterInteractionHandler: function(i, r) {
          return n.root.removeEventListener(i, r, ha());
        },
        deregisterResizeHandler: function(i) {
          return window.removeEventListener("resize", i);
        },
        getWindowPageOffset: function() {
          return { x: window.pageXOffset, y: window.pageYOffset };
        },
        isSurfaceActive: function() {
          return Gs(n.root, ":active");
        },
        isSurfaceDisabled: function() {
          return !!n.disabled;
        },
        isUnbounded: function() {
          return !!n.unbounded;
        },
        registerDocumentInteractionHandler: function(i, r) {
          return document.documentElement.addEventListener(i, r, ha());
        },
        registerInteractionHandler: function(i, r) {
          return n.root.addEventListener(i, r, ha());
        },
        registerResizeHandler: function(i) {
          return window.addEventListener("resize", i);
        },
        removeClass: function(i) {
          return n.root.classList.remove(i);
        },
        updateCssVariable: function(i, r) {
          return n.root.style.setProperty(i, r);
        }
      };
    }, Object.defineProperty(e.prototype, "unbounded", {
      get: function() {
        return !!this.isUnbounded;
      },
      set: function(n) {
        this.isUnbounded = !!n, this.setUnbounded();
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.activate = function() {
      this.foundation.activate();
    }, e.prototype.deactivate = function() {
      this.foundation.deactivate();
    }, e.prototype.layout = function() {
      this.foundation.layout();
    }, e.prototype.getDefaultFoundation = function() {
      return new xo(e.createAdapter(this));
    }, e.prototype.initialSyncWithDOM = function() {
      var n = this.root;
      this.isUnbounded = "mdcRippleIsUnbounded" in n.dataset;
    }, e.prototype.setUnbounded = function() {
      this.foundation.setUnbounded(!!this.isUnbounded);
    }, e;
  }(So)
);
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Go = "mdc-dom-focus-sentinel", _m = (
  /** @class */
  function() {
    function t(e, n) {
      n === void 0 && (n = {}), this.root = e, this.options = n, this.elFocusedBeforeTrapFocus = null;
    }
    return t.prototype.trapFocus = function() {
      var e = this.getFocusableElements(this.root);
      if (e.length === 0)
        throw new Error("FocusTrap: Element must have at least one focusable child.");
      this.elFocusedBeforeTrapFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null, this.wrapTabFocus(this.root), this.options.skipInitialFocus || this.focusInitialElement(e, this.options.initialFocusEl);
    }, t.prototype.releaseFocus = function() {
      [].slice.call(this.root.querySelectorAll("." + Go)).forEach(function(e) {
        e.parentElement.removeChild(e);
      }), !this.options.skipRestoreFocus && this.elFocusedBeforeTrapFocus && this.elFocusedBeforeTrapFocus.focus();
    }, t.prototype.wrapTabFocus = function(e) {
      var n = this, i = this.createSentinel(), r = this.createSentinel();
      i.addEventListener("focus", function() {
        var a = n.getFocusableElements(e);
        a.length > 0 && a[a.length - 1].focus();
      }), r.addEventListener("focus", function() {
        var a = n.getFocusableElements(e);
        a.length > 0 && a[0].focus();
      }), e.insertBefore(i, e.children[0]), e.appendChild(r);
    }, t.prototype.focusInitialElement = function(e, n) {
      var i = 0;
      n && (i = Math.max(e.indexOf(n), 0)), e[i].focus();
    }, t.prototype.getFocusableElements = function(e) {
      var n = [].slice.call(e.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));
      return n.filter(function(i) {
        var r = i.getAttribute("aria-disabled") === "true" || i.getAttribute("disabled") != null || i.getAttribute("hidden") != null || i.getAttribute("aria-hidden") === "true", a = i.tabIndex >= 0 && i.getBoundingClientRect().width > 0 && !i.classList.contains(Go) && !r, o = !1;
        if (a) {
          var u = getComputedStyle(i);
          o = u.display === "none" || u.visibility === "hidden";
        }
        return a && !o;
      });
    }, t.prototype.createSentinel = function() {
      var e = document.createElement("div");
      return e.setAttribute("tabindex", "0"), e.setAttribute("aria-hidden", "true"), e.classList.add(Go), e;
    }, t;
  }()
);
const Em = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FocusTrap: _m
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Me = {
  UNKNOWN: "Unknown",
  BACKSPACE: "Backspace",
  ENTER: "Enter",
  SPACEBAR: "Spacebar",
  PAGE_UP: "PageUp",
  PAGE_DOWN: "PageDown",
  END: "End",
  HOME: "Home",
  ARROW_LEFT: "ArrowLeft",
  ARROW_UP: "ArrowUp",
  ARROW_RIGHT: "ArrowRight",
  ARROW_DOWN: "ArrowDown",
  DELETE: "Delete",
  ESCAPE: "Escape",
  TAB: "Tab"
}, rn = /* @__PURE__ */ new Set();
rn.add(Me.BACKSPACE);
rn.add(Me.ENTER);
rn.add(Me.SPACEBAR);
rn.add(Me.PAGE_UP);
rn.add(Me.PAGE_DOWN);
rn.add(Me.END);
rn.add(Me.HOME);
rn.add(Me.ARROW_LEFT);
rn.add(Me.ARROW_UP);
rn.add(Me.ARROW_RIGHT);
rn.add(Me.ARROW_DOWN);
rn.add(Me.DELETE);
rn.add(Me.ESCAPE);
rn.add(Me.TAB);
var dn = {
  BACKSPACE: 8,
  ENTER: 13,
  SPACEBAR: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  DELETE: 46,
  ESCAPE: 27,
  TAB: 9
}, an = /* @__PURE__ */ new Map();
an.set(dn.BACKSPACE, Me.BACKSPACE);
an.set(dn.ENTER, Me.ENTER);
an.set(dn.SPACEBAR, Me.SPACEBAR);
an.set(dn.PAGE_UP, Me.PAGE_UP);
an.set(dn.PAGE_DOWN, Me.PAGE_DOWN);
an.set(dn.END, Me.END);
an.set(dn.HOME, Me.HOME);
an.set(dn.ARROW_LEFT, Me.ARROW_LEFT);
an.set(dn.ARROW_UP, Me.ARROW_UP);
an.set(dn.ARROW_RIGHT, Me.ARROW_RIGHT);
an.set(dn.ARROW_DOWN, Me.ARROW_DOWN);
an.set(dn.DELETE, Me.DELETE);
an.set(dn.ESCAPE, Me.ESCAPE);
an.set(dn.TAB, Me.TAB);
var li = /* @__PURE__ */ new Set();
li.add(Me.PAGE_UP);
li.add(Me.PAGE_DOWN);
li.add(Me.END);
li.add(Me.HOME);
li.add(Me.ARROW_LEFT);
li.add(Me.ARROW_UP);
li.add(Me.ARROW_RIGHT);
li.add(Me.ARROW_DOWN);
function yt(t) {
  var e = t.key;
  if (rn.has(e))
    return e;
  var n = an.get(t.keyCode);
  return n || Me.UNKNOWN;
}
function Cm(t) {
  return li.has(yt(t));
}
const { applyPassive: Dl } = Rc, { matches: Am } = Ra;
function Kt(t, { ripple: e = !0, surface: n = !1, unbounded: i = !1, disabled: r = !1, color: a, active: o, rippleElement: u, eventTarget: l, activeTarget: c, addClass: d = (p) => t.classList.add(p), removeClass: h = (p) => t.classList.remove(p), addStyle: f = (p, g) => t.style.setProperty(p, g), initPromise: v = Promise.resolve() } = {}) {
  let p, g = new Yr(), _ = se("SMUI:addLayoutListener"), C, x = o, S = l, b = c;
  function E() {
    n ? (d("mdc-ripple-surface"), a === "primary" ? (d("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")) : a === "secondary" ? (h("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : (h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary"))) : (h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), p && x !== o && (x = o, o ? p.activate() : o === !1 && p.deactivate()), e && !p ? (p = new xo({
      addClass: d,
      browserSupportsCssVars: () => wc(window),
      computeBoundingRect: () => (u || t).getBoundingClientRect(),
      containsEventTarget: (T) => t.contains(T),
      deregisterDocumentInteractionHandler: (T, A) => g.off(document.documentElement, T, A),
      deregisterInteractionHandler: (T, A) => g.off(l || t, T, A),
      deregisterResizeHandler: (T) => window.removeEventListener("resize", T),
      getWindowPageOffset: () => {
        var T, A;
        return {
          x: (T = window.pageXOffset) !== null && T !== void 0 ? T : window.scrollX,
          y: (A = window.pageYOffset) !== null && A !== void 0 ? A : window.scrollY
        };
      },
      isSurfaceActive: () => o ?? Am(c || t, ":active"),
      isSurfaceDisabled: () => !!r,
      isUnbounded: () => !!i,
      registerDocumentInteractionHandler: (T, A) => {
        const O = Dl();
        g.on(document.documentElement, T, A, typeof O == "boolean" ? { capture: O } : O);
      },
      registerInteractionHandler: (T, A) => {
        const O = Dl();
        g.on(l || t, T, A, typeof O == "boolean" ? { capture: O } : O);
      },
      registerResizeHandler: (T) => g.on(window, "resize", T),
      removeClass: h,
      updateCssVariable: f
    }), v.then(() => {
      p && (p.init(), p.setUnbounded(i));
    })) : p && !e && v.then(() => {
      p && (p.destroy(), p = void 0, g.clear());
    }), p && (S !== l || b !== c) && (S = l, b = c, p.destroy(), requestAnimationFrame(() => {
      p && (p.init(), p.setUnbounded(i));
    })), !e && i && d("mdc-ripple-upgraded--unbounded");
  }
  E(), _ && (C = _(y));
  function y() {
    p && p.layout();
  }
  return {
    update(T) {
      ({
        ripple: e,
        surface: n,
        unbounded: i,
        disabled: r,
        color: a,
        active: o,
        rippleElement: u,
        eventTarget: l,
        activeTarget: c,
        addClass: d,
        removeClass: h,
        addStyle: f,
        initPromise: v
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (A) => t.classList.add(A), removeClass: (A) => t.classList.remove(A), addStyle: (A, O) => t.style.setProperty(A, O), initPromise: Promise.resolve() }, T)), E();
    },
    destroy() {
      p && (p.destroy(), p = void 0, g.clear(), h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), C && C();
    }
  };
}
function Pl(t, e) {
  we(e, !0);
  let n = m(e, "use", 19, () => []), i = m(e, "class", 3, ""), r = m(e, "component", 3, Mi), a = m(e, "tag", 3, "span"), o = /* @__PURE__ */ Ve(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "component",
    "tag",
    "children"
  ]), u;
  const l = se("SMUI:label:context"), c = se("SMUI:label:tabindex");
  function d() {
    return u.getElement();
  }
  var h = { getElement: d }, f = le(), v = J(f);
  {
    let p = /* @__PURE__ */ ve(() => Ne({
      "mdc-button__label": l === "button",
      "mdc-fab__label": l === "fab",
      "mdc-tab__text-label": l === "tab",
      "mdc-image-list__label": l === "image-list",
      "mdc-snackbar__label": l === "snackbar",
      "mdc-banner__text": l === "banner",
      "mdc-segmented-button__label": l === "segmented-button",
      "mdc-data-table__pagination-rows-per-page-label": l === "data-table:pagination",
      "mdc-data-table__header-cell-label": l === "data-table:sortable-header-cell",
      [i()]: !0
    }));
    wi(v, r, (g, _) => {
      Se(
        _(g, et(
          {
            get tag() {
              return a();
            },
            get use() {
              return n();
            },
            get class() {
              return s(p);
            }
          },
          () => l === "snackbar" ? { "aria-atomic": "false" } : {},
          {
            get tabindex() {
              return c;
            }
          },
          () => o,
          {
            children: (C, x) => {
              var S = le(), b = J(S);
              Ie(b, () => e.children ?? me), w(C, S);
            },
            $$slots: { default: !0 }
          }
        )),
        (C) => u = C,
        () => u
      );
    });
  }
  return w(t, f), Re(h);
}
function Sm(t, e) {
  we(e, !0);
  let n = m(e, "use", 19, () => []), i = m(e, "class", 3, ""), r = m(e, "on", 3, !1), a = m(e, "component", 3, Mi), o = m(e, "tag", 3, "i"), u = /* @__PURE__ */ Ve(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "on",
    "component",
    "tag",
    "children"
  ]), l;
  const c = /* @__PURE__ */ ve(() => o() === "svg" || a() === Lm), d = se("SMUI:icon:context");
  function h() {
    return l.getElement();
  }
  var f = { getElement: h }, v = le(), p = J(v);
  {
    let g = /* @__PURE__ */ ve(() => Ne({
      "mdc-button__icon": d === "button",
      "mdc-fab__icon": d === "fab",
      "mdc-icon-button__icon": d === "icon-button",
      "mdc-icon-button__icon--on": d === "icon-button" && r(),
      "mdc-tab__icon": d === "tab",
      "mdc-banner__icon": d === "banner",
      "mdc-segmented-button__icon": d === "segmented-button",
      [i()]: !0
    }));
    wi(p, a, (_, C) => {
      Se(
        C(_, et(
          {
            get tag() {
              return o();
            },
            get use() {
              return n();
            },
            get class() {
              return s(g);
            },
            "aria-hidden": "true"
          },
          () => s(c) ? { focusable: "false", tabindex: "-1" } : {},
          () => u,
          {
            children: (x, S) => {
              var b = le(), E = J(b);
              Ie(E, () => e.children ?? me), w(x, b);
            },
            $$slots: { default: !0 }
          }
        )),
        (x) => l = x,
        () => l
      );
    });
  }
  return w(t, v), Re(f);
}
var xm = /* @__PURE__ */ cn("<svg><!></svg>");
function Mi(t, e) {
  we(e, !0);
  let n = m(e, "use", 19, () => []), i = m(e, "tag", 3, "div"), r = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
  const a = /* @__PURE__ */ ve(() => [
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
  ].indexOf(i()) > -1);
  let o;
  function u() {
    return o;
  }
  var l = { getElement: u }, c = le(), d = J(c);
  {
    var h = (v) => {
      var p = xm();
      He(p, () => ({ ...r }));
      var g = _e(p);
      Ie(g, () => e.children ?? me), Se(p, (_) => o = _, () => o), Ue(p, (_, C) => X == null ? void 0 : X(_, C), n), w(v, p);
    }, f = (v) => {
      var p = le(), g = J(p);
      {
        var _ = (x) => {
          var S = le(), b = J(S);
          ul(b, i, !1, (E, y) => {
            Se(E, (T) => o = T, () => o), Ue(E, (T, A) => X == null ? void 0 : X(T, A), n), He(E, () => ({ ...r }));
          }), w(x, S);
        }, C = (x) => {
          var S = le(), b = J(S);
          ul(b, i, !1, (E, y) => {
            Se(E, (O) => o = O, () => o), Ue(E, (O, B) => X == null ? void 0 : X(O, B), n), He(E, () => ({ ...r }));
            var T = le(), A = J(T);
            Ie(A, () => e.children ?? me), w(y, T);
          }), w(x, S);
        };
        he(
          g,
          (x) => {
            s(a) ? x(_) : x(C, !1);
          },
          !0
        );
      }
      w(v, p);
    };
    he(d, (v) => {
      i() === "svg" ? v(h) : v(f, !1);
    });
  }
  return w(t, c), Re(l);
}
var Tm = /* @__PURE__ */ cn("<svg><!></svg>");
function Lm(t, e) {
  we(e, !0), console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let n = m(e, "use", 19, () => []), i = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), r;
  function a() {
    return r;
  }
  var o = { getElement: a }, u = Tm();
  He(u, () => ({ ...i }));
  var l = _e(u);
  return Ie(l, () => e.children ?? me), Se(u, (c) => r = c, () => r), Ue(u, (c, d) => X == null ? void 0 : X(c, d), n), w(t, u), Re(o);
}
function Er(t, e) {
  we(e, !0);
  const [n, i] = gn(), r = bt(e.value);
  te(e.key, r), Ae(() => {
    kt(r, e.value);
  }), Pn(() => {
    r.set(void 0);
  });
  var a = le(), o = J(a);
  Ie(o, () => e.children ?? me), w(t, a), Re(), i();
}
var Om = /* @__PURE__ */ ge('<div class="mdc-button__touch"></div>'), wm = /* @__PURE__ */ ge('<div class="mdc-button__ripple"></div> <!><!>', 1);
function Rm(t, e) {
  we(e, !0);
  let n = m(e, "use", 19, () => []), i = m(e, "class", 3, ""), r = m(e, "style", 3, ""), a = m(e, "ripple", 3, !0), o = m(e, "color", 3, "primary"), u = m(e, "variant", 3, "text"), l = m(e, "touch", 3, !1), c = m(e, "action", 3, "close"), d = m(e, "defaultAction", 3, !1), h = m(e, "secondary", 3, !1), f = m(e, "component", 3, Mi), v = m(e, "tag", 19, () => e.href == null ? "button" : "a"), p = /* @__PURE__ */ Ve(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "ripple",
    "color",
    "variant",
    "touch",
    "href",
    "action",
    "defaultAction",
    "secondary",
    "component",
    "tag",
    "children"
  ]), g, _ = Ee({}), C = Ee({}), x = se("SMUI:button:context");
  const S = /* @__PURE__ */ ve(() => x === "dialog:action" && c() != null ? { "data-mdc-dialog-action": c() } : { action: c() }), b = /* @__PURE__ */ ve(() => x === "dialog:action" && d() ? { "data-mdc-dialog-button-default": "" } : {}), E = /* @__PURE__ */ ve(() => x === "banner" ? {} : { secondary: h() });
  let y = e.disabled;
  Ae(() => {
    if (y !== e.disabled) {
      if (g) {
        const k = Z();
        "blur" in k && k.blur();
      }
      y = p.disabled;
    }
  }), te("SMUI:label:context", "button"), te("SMUI:icon:context", "button");
  function T(k) {
    _[k] || (_[k] = !0);
  }
  function A(k) {
    (!(k in _) || _[k]) && (_[k] = !1);
  }
  function O(k, P) {
    C[k] != P && (P === "" || P == null ? delete C[k] : C[k] = P);
  }
  function B() {
    x === "banner" && ke(Z(), h() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function Z() {
    return g.getElement();
  }
  var G = { getElement: Z }, j = le(), K = J(j);
  {
    let k = /* @__PURE__ */ ve(() => [
      [
        Kt,
        {
          ripple: a(),
          unbounded: !1,
          color: o(),
          disabled: !!e.disabled,
          addClass: T,
          removeClass: A,
          addStyle: O
        }
      ],
      ...n()
    ]), P = /* @__PURE__ */ ve(() => Ne({
      "mdc-button": !0,
      "mdc-button--raised": u() === "raised",
      "mdc-button--unelevated": u() === "unelevated",
      "mdc-button--outlined": u() === "outlined",
      "smui-button--color-secondary": o() === "secondary",
      "mdc-button--touch": l(),
      "mdc-card__action": x === "card:action",
      "mdc-card__action--button": x === "card:action",
      "mdc-dialog__button": x === "dialog:action",
      "mdc-top-app-bar__navigation-icon": x === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": x === "top-app-bar:action",
      "mdc-snackbar__action": x === "snackbar:actions",
      "mdc-banner__secondary-action": x === "banner" && h(),
      "mdc-banner__primary-action": x === "banner" && !h(),
      "mdc-tooltip__action": x === "tooltip:rich-actions",
      ..._,
      [i()]: !0
    })), M = /* @__PURE__ */ ve(() => Object.entries(C).map(([z, re]) => `${z}: ${re};`).concat([r()]).join(" "));
    wi(K, f, (z, re) => {
      Se(
        re(z, et(
          {
            get tag() {
              return v();
            },
            get use() {
              return s(k);
            },
            get class() {
              return s(P);
            },
            get style() {
              return s(M);
            }
          },
          () => s(S),
          () => s(b),
          () => s(E),
          {
            get href() {
              return e.href;
            }
          },
          () => p,
          {
            onclick: (U) => {
              var I;
              B(), (I = e.onclick) == null || I.call(e, U);
            },
            children: (U, I) => {
              var L = wm(), $ = ye(J(L), 2);
              Ie($, () => e.children ?? me);
              var R = ye($);
              {
                var W = (ce) => {
                  var V = Om();
                  w(ce, V);
                };
                he(R, (ce) => {
                  l() && ce(W);
                });
              }
              w(U, L);
            },
            $$slots: { default: !0 }
          }
        )),
        (U) => g = U,
        () => g
      );
    });
  }
  return w(t, j), Re(G);
}
function ao(t, e) {
  we(e, !0);
  let n = m(e, "callback", 3, () => {
  }), i = m(e, "disabled", 3, !1), r = m(e, "variant", 3, "default"), a = m(e, "isAbortAction", 3, !1), o = m(e, "backgroundColor", 3, void 0);
  {
    let u = /* @__PURE__ */ ve(() => a() ? "background-color: #ff3e00;" : "background-color: " + o());
    Rm(t, {
      onclick: () => n()(),
      get variant() {
        return r();
      },
      get disabled() {
        return i();
      },
      get style() {
        return s(u);
      },
      children: (l, c) => {
        var d = le(), h = J(d);
        Ie(h, () => e.children ?? me), w(l, d);
      },
      $$slots: { default: !0 }
    });
  }
  Re();
}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ka = {
  ICON_BUTTON_ON: "mdc-icon-button--on",
  ROOT: "mdc-icon-button"
}, Jn = {
  ARIA_LABEL: "aria-label",
  ARIA_PRESSED: "aria-pressed",
  DATA_ARIA_LABEL_OFF: "data-aria-label-off",
  DATA_ARIA_LABEL_ON: "data-aria-label-on",
  CHANGE_EVENT: "MDCIconButtonToggle:change"
};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Mm = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      var i = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return i.hasToggledAriaLabel = !1, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ka;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Jn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          hasClass: function() {
            return !1;
          },
          notifyChange: function() {
          },
          removeClass: function() {
          },
          getAttr: function() {
            return null;
          },
          setAttr: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var n = this.adapter.getAttr(Jn.DATA_ARIA_LABEL_ON), i = this.adapter.getAttr(Jn.DATA_ARIA_LABEL_OFF);
      if (n && i) {
        if (this.adapter.getAttr(Jn.ARIA_PRESSED) !== null)
          throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");
        this.hasToggledAriaLabel = !0;
      } else
        this.adapter.setAttr(Jn.ARIA_PRESSED, String(this.isOn()));
    }, e.prototype.handleClick = function() {
      this.toggle(), this.adapter.notifyChange({ isOn: this.isOn() });
    }, e.prototype.isOn = function() {
      return this.adapter.hasClass(ka.ICON_BUTTON_ON);
    }, e.prototype.toggle = function(n) {
      if (n === void 0 && (n = !this.isOn()), n ? this.adapter.addClass(ka.ICON_BUTTON_ON) : this.adapter.removeClass(ka.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var i = n ? this.adapter.getAttr(Jn.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(Jn.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr(Jn.ARIA_LABEL, i || "");
      } else
        this.adapter.setAttr(Jn.ARIA_PRESSED, "" + n);
    }, e;
  }(Dt)
), Dm = /* @__PURE__ */ ge('<div class="mdc-icon-button__touch"></div>'), Pm = /* @__PURE__ */ ge('<div class="mdc-icon-button__ripple"></div> <!><!>', 1);
function Nm(t, e) {
  we(e, !0);
  let n = () => {
  };
  function i(I) {
    return I === n;
  }
  let r = m(e, "use", 19, () => []), a = m(e, "class", 3, ""), o = m(e, "style", 3, ""), u = m(e, "ripple", 3, !0), l = m(e, "toggle", 3, !1), c = m(e, "pressed", 15, n), d = m(e, "touch", 3, !1), h = m(e, "displayFlex", 3, !0), f = m(e, "size", 3, "normal"), v = m(e, "component", 3, Mi), p = m(e, "tag", 19, () => e.href == null ? "button" : "a"), g = /* @__PURE__ */ Ve(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "ripple",
    "color",
    "toggle",
    "pressed",
    "ariaLabelOn",
    "ariaLabelOff",
    "touch",
    "displayFlex",
    "size",
    "href",
    "action",
    "component",
    "tag",
    "children"
  ]), _, C, x = /* @__PURE__ */ xe(Ee({})), S = Ee({}), b = /* @__PURE__ */ xe(Ee({})), E = se("SMUI:icon-button:context"), y = se("SMUI:icon-button:aria-describedby");
  const T = /* @__PURE__ */ ve(() => {
    if (E === "data-table:pagination")
      switch (e.action) {
        case "first-page":
          return { "data-first-page": "true" };
        case "prev-page":
          return { "data-prev-page": "true" };
        case "next-page":
          return { "data-next-page": "true" };
        case "last-page":
          return { "data-last-page": "true" };
        default:
          return { "data-action": "true" };
      }
    else return E === "dialog:header" || E === "dialog:sheet" ? { "data-mdc-dialog-action": e.action } : { action: e.action };
  });
  let A = !!e.disabled;
  Ae(() => {
    if (A != !!e.disabled) {
      if (_) {
        const I = M();
        "blur" in I && I.blur();
      }
      A = !!e.disabled;
    }
  }), te("SMUI:icon:context", "icon-button");
  let O = null;
  Ae(() => {
    _ && M() && l() !== O && (l() && !C ? (C = new Mm({
      addClass: Z,
      hasClass: B,
      notifyChange: (I) => {
        P(I), ke(M(), "SMUIIconButtonToggleChange", I);
      },
      removeClass: G,
      getAttr: K,
      setAttr: k
    }), C.init()) : !l() && C && (C.destroy(), C = void 0, ae(x, {}, !0), ae(b, {}, !0)), O = l());
  }), Ae(() => {
    C && !i(c()) && C.isOn() !== c() && C.toggle(c());
  }), Pn(() => {
    C && C.destroy();
  });
  function B(I) {
    return I in s(x) ? s(x)[I] : M().classList.contains(I);
  }
  function Z(I) {
    s(x)[I] || (s(x)[I] = !0);
  }
  function G(I) {
    (!(I in s(x)) || s(x)[I]) && (s(x)[I] = !1);
  }
  function j(I, L) {
    S[I] != L && (L === "" || L == null ? delete S[I] : S[I] = L);
  }
  function K(I) {
    return I in s(b) ? s(b)[I] ?? null : M().getAttribute(I);
  }
  function k(I, L) {
    s(b)[I] !== L && (s(b)[I] = L);
  }
  function P(I) {
    c(I.isOn);
  }
  function M() {
    return _.getElement();
  }
  var z = { getElement: M }, re = le(), U = J(re);
  {
    let I = /* @__PURE__ */ ve(() => [
      [
        Kt,
        {
          ripple: u(),
          unbounded: !0,
          color: e.color,
          disabled: !!e.disabled,
          addClass: Z,
          removeClass: G,
          addStyle: j
        }
      ],
      ...r()
    ]), L = /* @__PURE__ */ ve(() => Ne({
      "mdc-icon-button": !0,
      "mdc-icon-button--on": !i(c()) && c(),
      "mdc-icon-button--touch": d(),
      "mdc-icon-button--display-flex": h(),
      "smui-icon-button--size-button": f() === "button",
      "smui-icon-button--size-mini": f() === "mini",
      "mdc-icon-button--reduced-size": f() === "mini" || f() === "button",
      "mdc-card__action": E === "card:action",
      "mdc-card__action--icon": E === "card:action",
      "mdc-top-app-bar__navigation-icon": E === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": E === "top-app-bar:action",
      "mdc-snackbar__dismiss": E === "snackbar:actions",
      "mdc-data-table__pagination-button": E === "data-table:pagination",
      "mdc-data-table__sort-icon-button": E === "data-table:sortable-header-cell",
      "mdc-dialog__close": (E === "dialog:header" || E === "dialog:sheet") && e.action === "close",
      ...s(x),
      [a()]: !0
    })), $ = /* @__PURE__ */ ve(() => Object.entries(S).map(([ce, V]) => `${ce}: ${V};`).concat([o()]).join(" ")), R = /* @__PURE__ */ ve(() => i(c()) ? null : c() ? "true" : "false"), W = /* @__PURE__ */ ve(() => c() ? e.ariaLabelOn : e.ariaLabelOff);
    wi(U, v, (ce, V) => {
      Se(
        V(ce, et(
          {
            get tag() {
              return p();
            },
            get use() {
              return s(I);
            },
            get class() {
              return s(L);
            },
            get style() {
              return s($);
            },
            get "aria-pressed"() {
              return s(R);
            },
            get "aria-label"() {
              return s(W);
            },
            get "data-aria-label-on"() {
              return e.ariaLabelOn;
            },
            get "data-aria-label-off"() {
              return e.ariaLabelOff;
            },
            get "aria-describedby"() {
              return y;
            },
            get href() {
              return e.href;
            }
          },
          () => s(T),
          () => s(b),
          () => g,
          {
            onclick: (oe) => {
              var Q;
              C && C.handleClick(), E === "top-app-bar:navigation" && ke(M(), "SMUITopAppBarIconButtonNav"), (Q = e.onclick) == null || Q.call(e, oe);
            },
            children: (oe, Q) => {
              var de = Pm(), ne = ye(J(de), 2);
              Ie(ne, () => e.children ?? me);
              var qe = ye(ne);
              {
                var je = (De) => {
                  var Le = Dm();
                  w(De, Le);
                };
                he(qe, (De) => {
                  d() && De(je);
                });
              }
              w(oe, de);
            },
            $$slots: { default: !0 }
          }
        )),
        (oe) => _ = oe,
        () => _
      );
    });
  }
  return w(t, re), Re(z);
}
function Fm(t, e) {
  let n = m(e, "callback", 3, () => {
  }), i = m(e, "icon", 3, ""), r = m(e, "disabled", 3, !1);
  Nm(t, {
    get disabled() {
      return r();
    },
    style: "margin-bottom: 0;",
    $$events: {
      click(...a) {
        var o;
        (o = n()) == null || o.apply(this, a);
      }
    },
    children: (a, o) => {
      Sm(a, {
        class: "material-icons",
        children: (u, l) => {
          var c = Bt();
          Be(() => ft(c, i())), w(u, c);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Hm = {
  LABEL_FLOAT_ABOVE: "mdc-floating-label--float-above",
  LABEL_REQUIRED: "mdc-floating-label--required",
  LABEL_SHAKE: "mdc-floating-label--shake",
  ROOT: "mdc-floating-label"
};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Um = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      var i = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return i.shakeAnimationEndHandler = function() {
        i.handleShakeAnimationEnd();
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Hm;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCFloatingLabelAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          getWidth: function() {
            return 0;
          },
          registerInteractionHandler: function() {
          },
          deregisterInteractionHandler: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      this.adapter.registerInteractionHandler("animationend", this.shakeAnimationEndHandler);
    }, e.prototype.destroy = function() {
      this.adapter.deregisterInteractionHandler("animationend", this.shakeAnimationEndHandler);
    }, e.prototype.getWidth = function() {
      return this.adapter.getWidth();
    }, e.prototype.shake = function(n) {
      var i = e.cssClasses.LABEL_SHAKE;
      n ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, e.prototype.float = function(n) {
      var i = e.cssClasses, r = i.LABEL_FLOAT_ABOVE, a = i.LABEL_SHAKE;
      n ? this.adapter.addClass(r) : (this.adapter.removeClass(r), this.adapter.removeClass(a));
    }, e.prototype.setRequired = function(n) {
      var i = e.cssClasses.LABEL_REQUIRED;
      n ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, e.prototype.handleShakeAnimationEnd = function() {
      var n = e.cssClasses.LABEL_SHAKE;
      this.adapter.removeClass(n);
    }, e;
  }(Dt)
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ki = {
  LINE_RIPPLE_ACTIVE: "mdc-line-ripple--active",
  LINE_RIPPLE_DEACTIVATING: "mdc-line-ripple--deactivating"
};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Bm = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      var i = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return i.transitionEndHandler = function(r) {
        i.handleTransitionEnd(r);
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ki;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCLineRippleAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !1;
          },
          setStyle: function() {
          },
          registerEventHandler: function() {
          },
          deregisterEventHandler: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      this.adapter.registerEventHandler("transitionend", this.transitionEndHandler);
    }, e.prototype.destroy = function() {
      this.adapter.deregisterEventHandler("transitionend", this.transitionEndHandler);
    }, e.prototype.activate = function() {
      this.adapter.removeClass(ki.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(ki.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(n) {
      this.adapter.setStyle("transform-origin", n + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(ki.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(n) {
      var i = this.adapter.hasClass(ki.LINE_RIPPLE_DEACTIVATING);
      n.propertyName === "opacity" && i && (this.adapter.removeClass(ki.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(ki.LINE_RIPPLE_DEACTIVATING));
    }, e;
  }(Dt)
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var km = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Nl = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, Vm = {
  NO_LABEL: "mdc-notched-outline--no-label",
  OUTLINE_NOTCHED: "mdc-notched-outline--notched",
  OUTLINE_UPGRADED: "mdc-notched-outline--upgraded"
};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Gm = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      return t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return km;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Vm;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Nl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCNotchedOutlineAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          setNotchWidthProperty: function() {
          },
          removeNotchWidthProperty: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.notch = function(n) {
      var i = e.cssClasses.OUTLINE_NOTCHED;
      n > 0 && (n += Nl.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(n), this.adapter.addClass(i);
    }, e.prototype.closeNotch = function() {
      var n = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(n), this.adapter.removeNotchWidthProperty();
    }, e;
  }(Dt)
);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var jo = {
  ARIA_CONTROLS: "aria-controls",
  ARIA_DESCRIBEDBY: "aria-describedby",
  INPUT_SELECTOR: ".mdc-text-field__input",
  LABEL_SELECTOR: ".mdc-floating-label",
  LEADING_ICON_SELECTOR: ".mdc-text-field__icon--leading",
  LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
  OUTLINE_SELECTOR: ".mdc-notched-outline",
  PREFIX_SELECTOR: ".mdc-text-field__affix--prefix",
  SUFFIX_SELECTOR: ".mdc-text-field__affix--suffix",
  TRAILING_ICON_SELECTOR: ".mdc-text-field__icon--trailing"
}, jm = {
  DISABLED: "mdc-text-field--disabled",
  FOCUSED: "mdc-text-field--focused",
  HELPER_LINE: "mdc-text-field-helper-line",
  INVALID: "mdc-text-field--invalid",
  LABEL_FLOATING: "mdc-text-field--label-floating",
  NO_LABEL: "mdc-text-field--no-label",
  OUTLINED: "mdc-text-field--outlined",
  ROOT: "mdc-text-field",
  TEXTAREA: "mdc-text-field--textarea",
  WITH_LEADING_ICON: "mdc-text-field--with-leading-icon",
  WITH_TRAILING_ICON: "mdc-text-field--with-trailing-icon",
  WITH_INTERNAL_COUNTER: "mdc-text-field--with-internal-counter"
}, Fl = {
  LABEL_SCALE: 0.75
}, Wm = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], qm = [
  "color",
  "date",
  "datetime-local",
  "month",
  "range",
  "time",
  "week"
];
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Hl = ["mousedown", "touchstart"], Ul = ["click", "keydown"], Km = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n, i) {
      i === void 0 && (i = {});
      var r = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return r.isFocused = !1, r.receivedUserInput = !1, r.valid = !0, r.useNativeValidation = !0, r.validateOnValueChange = !0, r.helperText = i.helperText, r.characterCounter = i.characterCounter, r.leadingIcon = i.leadingIcon, r.trailingIcon = i.trailingIcon, r.inputFocusHandler = function() {
        r.activateFocus();
      }, r.inputBlurHandler = function() {
        r.deactivateFocus();
      }, r.inputInputHandler = function() {
        r.handleInput();
      }, r.setPointerXOffset = function(a) {
        r.setTransformOrigin(a);
      }, r.textFieldInteractionHandler = function() {
        r.handleTextFieldInteraction();
      }, r.validationAttributeChangeHandler = function(a) {
        r.handleValidationAttributeChange(a);
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return jm;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return jo;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Fl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var n = this.getNativeInput().type;
        return qm.indexOf(n) >= 0;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldFloat", {
      get: function() {
        return this.shouldAlwaysFloat || this.isFocused || !!this.getValue() || this.isBadInput();
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldShake", {
      get: function() {
        return !this.isFocused && !this.isValid() && !!this.getValue();
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCTextFieldAdapter} for typing information on parameters and
       * return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !0;
          },
          setInputAttr: function() {
          },
          removeInputAttr: function() {
          },
          registerTextFieldInteractionHandler: function() {
          },
          deregisterTextFieldInteractionHandler: function() {
          },
          registerInputInteractionHandler: function() {
          },
          deregisterInputInteractionHandler: function() {
          },
          registerValidationAttributeChangeHandler: function() {
            return new MutationObserver(function() {
            });
          },
          deregisterValidationAttributeChangeHandler: function() {
          },
          getNativeInput: function() {
            return null;
          },
          isFocused: function() {
            return !1;
          },
          activateLineRipple: function() {
          },
          deactivateLineRipple: function() {
          },
          setLineRippleTransformOrigin: function() {
          },
          shakeLabel: function() {
          },
          floatLabel: function() {
          },
          setLabelRequired: function() {
          },
          hasLabel: function() {
            return !1;
          },
          getLabelWidth: function() {
            return 0;
          },
          hasOutline: function() {
            return !1;
          },
          notchOutline: function() {
          },
          closeOutline: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var n, i, r, a;
      this.adapter.hasLabel() && this.getNativeInput().required && this.adapter.setLabelRequired(!0), this.adapter.isFocused() ? this.inputFocusHandler() : this.adapter.hasLabel() && this.shouldFloat && (this.notchOutline(!0), this.adapter.floatLabel(!0), this.styleFloating(!0)), this.adapter.registerInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.registerInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.registerInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var o = Mt(Hl), u = o.next(); !u.done; u = o.next()) {
          var l = u.value;
          this.adapter.registerInputInteractionHandler(l, this.setPointerXOffset);
        }
      } catch (h) {
        n = { error: h };
      } finally {
        try {
          u && !u.done && (i = o.return) && i.call(o);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var c = Mt(Ul), d = c.next(); !d.done; d = c.next()) {
          var l = d.value;
          this.adapter.registerTextFieldInteractionHandler(l, this.textFieldInteractionHandler);
        }
      } catch (h) {
        r = { error: h };
      } finally {
        try {
          d && !d.done && (a = c.return) && a.call(c);
        } finally {
          if (r) throw r.error;
        }
      }
      this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler), this.setcharacterCounter(this.getValue().length);
    }, e.prototype.destroy = function() {
      var n, i, r, a;
      this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var o = Mt(Hl), u = o.next(); !u.done; u = o.next()) {
          var l = u.value;
          this.adapter.deregisterInputInteractionHandler(l, this.setPointerXOffset);
        }
      } catch (h) {
        n = { error: h };
      } finally {
        try {
          u && !u.done && (i = o.return) && i.call(o);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var c = Mt(Ul), d = c.next(); !d.done; d = c.next()) {
          var l = d.value;
          this.adapter.deregisterTextFieldInteractionHandler(l, this.textFieldInteractionHandler);
        }
      } catch (h) {
        r = { error: h };
      } finally {
        try {
          d && !d.done && (a = c.return) && a.call(c);
        } finally {
          if (r) throw r.error;
        }
      }
      this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver);
    }, e.prototype.handleTextFieldInteraction = function() {
      var n = this.adapter.getNativeInput();
      n && n.disabled || (this.receivedUserInput = !0);
    }, e.prototype.handleValidationAttributeChange = function(n) {
      var i = this;
      n.some(function(r) {
        return Wm.indexOf(r) > -1 ? (i.styleValidity(!0), i.adapter.setLabelRequired(i.getNativeInput().required), !0) : !1;
      }), n.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(n) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (n) {
          var i = this.adapter.getLabelWidth() * Fl.LABEL_SCALE;
          this.adapter.notchOutline(i);
        } else
          this.adapter.closeOutline();
    }, e.prototype.activateFocus = function() {
      this.isFocused = !0, this.styleFocused(this.isFocused), this.adapter.activateLineRipple(), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.helperText && (this.helperText.isPersistent() || !this.helperText.isValidation() || !this.valid) && this.helperText.showToScreenReader();
    }, e.prototype.setTransformOrigin = function(n) {
      if (!(this.isDisabled() || this.adapter.hasOutline())) {
        var i = n.touches, r = i ? i[0] : n, a = r.target.getBoundingClientRect(), o = r.clientX - a.left;
        this.adapter.setLineRippleTransformOrigin(o);
      }
    }, e.prototype.handleInput = function() {
      this.autoCompleteFocus(), this.setcharacterCounter(this.getValue().length);
    }, e.prototype.autoCompleteFocus = function() {
      this.receivedUserInput || this.activateFocus();
    }, e.prototype.deactivateFocus = function() {
      this.isFocused = !1, this.adapter.deactivateLineRipple();
      var n = this.isValid();
      this.styleValidity(n), this.styleFocused(this.isFocused), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.shouldFloat || (this.receivedUserInput = !1);
    }, e.prototype.getValue = function() {
      return this.getNativeInput().value;
    }, e.prototype.setValue = function(n) {
      if (this.getValue() !== n && (this.getNativeInput().value = n), this.setcharacterCounter(n.length), this.validateOnValueChange) {
        var i = this.isValid();
        this.styleValidity(i);
      }
      this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.validateOnValueChange && this.adapter.shakeLabel(this.shouldShake));
    }, e.prototype.isValid = function() {
      return this.useNativeValidation ? this.isNativeInputValid() : this.valid;
    }, e.prototype.setValid = function(n) {
      this.valid = n, this.styleValidity(n);
      var i = !n && !this.isFocused && !!this.getValue();
      this.adapter.hasLabel() && this.adapter.shakeLabel(i);
    }, e.prototype.setValidateOnValueChange = function(n) {
      this.validateOnValueChange = n;
    }, e.prototype.getValidateOnValueChange = function() {
      return this.validateOnValueChange;
    }, e.prototype.setUseNativeValidation = function(n) {
      this.useNativeValidation = n;
    }, e.prototype.isDisabled = function() {
      return this.getNativeInput().disabled;
    }, e.prototype.setDisabled = function(n) {
      this.getNativeInput().disabled = n, this.styleDisabled(n);
    }, e.prototype.setHelperTextContent = function(n) {
      this.helperText && this.helperText.setContent(n);
    }, e.prototype.setLeadingIconAriaLabel = function(n) {
      this.leadingIcon && this.leadingIcon.setAriaLabel(n);
    }, e.prototype.setLeadingIconContent = function(n) {
      this.leadingIcon && this.leadingIcon.setContent(n);
    }, e.prototype.setTrailingIconAriaLabel = function(n) {
      this.trailingIcon && this.trailingIcon.setAriaLabel(n);
    }, e.prototype.setTrailingIconContent = function(n) {
      this.trailingIcon && this.trailingIcon.setContent(n);
    }, e.prototype.setcharacterCounter = function(n) {
      if (this.characterCounter) {
        var i = this.getNativeInput().maxLength;
        if (i === -1)
          throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");
        this.characterCounter.setCounterValue(n, i);
      }
    }, e.prototype.isBadInput = function() {
      return this.getNativeInput().validity.badInput || !1;
    }, e.prototype.isNativeInputValid = function() {
      return this.getNativeInput().validity.valid;
    }, e.prototype.styleValidity = function(n) {
      var i = e.cssClasses.INVALID;
      if (n ? this.adapter.removeClass(i) : this.adapter.addClass(i), this.helperText) {
        this.helperText.setValidity(n);
        var r = this.helperText.isValidation();
        if (!r)
          return;
        var a = this.helperText.isVisible(), o = this.helperText.getId();
        a && o ? this.adapter.setInputAttr(jo.ARIA_DESCRIBEDBY, o) : this.adapter.removeInputAttr(jo.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.styleFocused = function(n) {
      var i = e.cssClasses.FOCUSED;
      n ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, e.prototype.styleDisabled = function(n) {
      var i = e.cssClasses, r = i.DISABLED, a = i.INVALID;
      n ? (this.adapter.addClass(r), this.adapter.removeClass(a)) : this.adapter.removeClass(r), this.leadingIcon && this.leadingIcon.setDisabled(n), this.trailingIcon && this.trailingIcon.setDisabled(n);
    }, e.prototype.styleFloating = function(n) {
      var i = e.cssClasses.LABEL_FLOATING;
      n ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, e.prototype.getNativeInput = function() {
      var n = this.adapter ? this.adapter.getNativeInput() : null;
      return n || {
        disabled: !1,
        maxLength: -1,
        required: !1,
        type: "input",
        validity: {
          badInput: !1,
          valid: !0
        },
        value: ""
      };
    }, e;
  }(Dt)
);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Bl = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, zm = {
  ROOT: "mdc-text-field__icon"
};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var kl = ["click", "keydown"], Xm = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      var i = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return i.savedTabIndex = null, i.interactionHandler = function(r) {
        i.handleInteraction(r);
      }, i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Bl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return zm;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCTextFieldIconAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          getAttr: function() {
            return null;
          },
          setAttr: function() {
          },
          removeAttr: function() {
          },
          setContent: function() {
          },
          registerInteractionHandler: function() {
          },
          deregisterInteractionHandler: function() {
          },
          notifyIconAction: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var n, i;
      this.savedTabIndex = this.adapter.getAttr("tabindex");
      try {
        for (var r = Mt(kl), a = r.next(); !a.done; a = r.next()) {
          var o = a.value;
          this.adapter.registerInteractionHandler(o, this.interactionHandler);
        }
      } catch (u) {
        n = { error: u };
      } finally {
        try {
          a && !a.done && (i = r.return) && i.call(r);
        } finally {
          if (n) throw n.error;
        }
      }
    }, e.prototype.destroy = function() {
      var n, i;
      try {
        for (var r = Mt(kl), a = r.next(); !a.done; a = r.next()) {
          var o = a.value;
          this.adapter.deregisterInteractionHandler(o, this.interactionHandler);
        }
      } catch (u) {
        n = { error: u };
      } finally {
        try {
          a && !a.done && (i = r.return) && i.call(r);
        } finally {
          if (n) throw n.error;
        }
      }
    }, e.prototype.setDisabled = function(n) {
      this.savedTabIndex && (n ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", Bl.ICON_ROLE)));
    }, e.prototype.setAriaLabel = function(n) {
      this.adapter.setAttr("aria-label", n);
    }, e.prototype.setContent = function(n) {
      this.adapter.setContent(n);
    }, e.prototype.handleInteraction = function(n) {
      var i = n.key === "Enter" || n.keyCode === 13;
      (n.type === "click" || i) && (n.preventDefault(), this.adapter.notifyIconAction());
    }, e;
  }(Dt)
), Ym = /* @__PURE__ */ ge("<span><!></span>"), Zm = /* @__PURE__ */ ge("<label><!></label>");
function oo(t, e) {
  we(e, !0);
  let n = m(e, "use", 19, () => []), i = m(e, "class", 3, ""), r = m(e, "style", 3, ""), a = m(e, "floatAbove", 15, !1), o = m(e, "required", 15, !1), u = m(e, "wrapped", 3, !1), l = /* @__PURE__ */ Ve(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "for",
    "floatAbove",
    "required",
    "wrapped",
    "children"
  ]), c, d = /* @__PURE__ */ xe(void 0), h = new Yr(), f = Ee({}), v = Ee({}), p = se("SMUI:generic:input:props") ?? {}, g = a();
  Ae(() => {
    s(d) && g !== a() && (g = a(), s(d).float(a()));
  });
  let _ = o();
  Ae(() => {
    s(d) && _ !== o() && (_ = o(), s(d).setRequired(o()));
  });
  const C = se("SMUI:floating-label:mount"), x = se("SMUI:floating-label:unmount");
  st(() => {
    ae(
      d,
      new Um({
        addClass: S,
        removeClass: b,
        getWidth: () => {
          var I, L;
          const z = Z(), re = z.cloneNode(!0);
          (I = z.parentNode) == null || I.appendChild(re), re.classList.add("smui-floating-label--remove-transition"), re.classList.add("smui-floating-label--force-size"), re.classList.remove("mdc-floating-label--float-above");
          const U = re.scrollWidth;
          return (L = z.parentNode) == null || L.removeChild(re), U;
        },
        registerInteractionHandler: (z, re) => h.on(Z(), z, re),
        deregisterInteractionHandler: (z, re) => h.off(Z(), z, re)
      }),
      !0
    );
    const M = {
      get element() {
        return Z();
      },
      addStyle: E,
      removeStyle: y
    };
    return C && C(M), s(d).init(), () => {
      var z;
      x && x(M), (z = s(d)) == null || z.destroy(), h.clear();
    };
  });
  function S(M) {
    f[M] || (f[M] = !0);
  }
  function b(M) {
    (!(M in f) || f[M]) && (f[M] = !1);
  }
  function E(M, z) {
    v[M] != z && (z === "" || z == null ? delete v[M] : v[M] = z);
  }
  function y(M) {
    M in v && delete v[M];
  }
  function T(M) {
    var z;
    (z = s(d)) == null || z.shake(M);
  }
  function A(M) {
    a(M);
  }
  function O(M) {
    o(M);
  }
  function B() {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    return s(d).getWidth();
  }
  function Z() {
    return c;
  }
  var G = { shake: T, float: A, setRequired: O, getWidth: B, getElement: Z }, j = le(), K = J(j);
  {
    var k = (M) => {
      var z = Ym();
      He(z, (U, I) => ({ class: U, style: I, ...l }), [
        () => Ne({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": o(),
          ...f,
          [i()]: !0
        }),
        () => Object.entries(v).map(([U, I]) => `${U}: ${I};`).concat([r()]).join(" ")
      ]);
      var re = _e(z);
      Ie(re, () => e.children ?? me), Se(z, (U) => c = U, () => c), Ue(z, (U, I) => X == null ? void 0 : X(U, I), n), w(M, z);
    }, P = (M) => {
      var z = Zm();
      He(
        z,
        (U, I) => ({
          class: U,
          style: I,
          for: e.for || (p ? p.id : void 0),
          ...l
        }),
        [
          () => Ne({
            "mdc-floating-label": !0,
            "mdc-floating-label--float-above": a(),
            "mdc-floating-label--required": o(),
            ...f,
            [i()]: !0
          }),
          () => Object.entries(v).map(([U, I]) => `${U}: ${I};`).concat([r()]).join(" ")
        ]
      );
      var re = _e(z);
      Ie(re, () => e.children ?? me), Se(z, (U) => c = U, () => c), Ue(z, (U, I) => X == null ? void 0 : X(U, I), n), w(M, z);
    };
    he(K, (M) => {
      u() ? M(k) : M(P, !1);
    });
  }
  return w(t, j), Re(G);
}
var Qm = /* @__PURE__ */ ge("<div></div>");
function Mc(t, e) {
  we(e, !0);
  let n = m(e, "use", 19, () => []), i = m(e, "class", 3, ""), r = m(e, "style", 3, ""), a = m(e, "active", 3, !1), o = /* @__PURE__ */ Ve(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "active"
  ]), u, l = /* @__PURE__ */ xe(void 0), c = new Yr(), d = Ee({}), h = Ee({});
  st(() => (ae(
    l,
    new Bm({
      addClass: v,
      removeClass: p,
      hasClass: f,
      setStyle: g,
      registerEventHandler: (y, T) => c.on(S(), y, T),
      deregisterEventHandler: (y, T) => c.off(S(), y, T)
    }),
    !0
  ), s(l).init(), () => {
    var y;
    (y = s(l)) == null || y.destroy(), c.clear();
  }));
  function f(y) {
    return y in d ? d[y] : S().classList.contains(y);
  }
  function v(y) {
    d[y] || (d[y] = !0);
  }
  function p(y) {
    (!(y in d) || d[y]) && (d[y] = !1);
  }
  function g(y, T) {
    h[y] != T && (T === "" || T == null ? delete h[y] : h[y] = T);
  }
  function _() {
    var y;
    (y = s(l)) == null || y.activate();
  }
  function C() {
    var y;
    (y = s(l)) == null || y.deactivate();
  }
  function x(y) {
    var T;
    (T = s(l)) == null || T.setRippleCenter(y);
  }
  function S() {
    return u;
  }
  var b = { activate: _, deactivate: C, setRippleCenter: x, getElement: S }, E = Qm();
  return He(E, (y, T) => ({ class: y, style: T, ...o }), [
    () => Ne({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...d,
      [i()]: !0
    }),
    () => Object.entries(h).map(([y, T]) => `${y}: ${T};`).concat([r()]).join(" ")
  ]), Se(E, (y) => u = y, () => u), Ue(E, (y, T) => X == null ? void 0 : X(y, T), n), w(t, E), Re(b);
}
var Jm = /* @__PURE__ */ ge('<div class="mdc-notched-outline__notch"><!></div>'), $m = /* @__PURE__ */ ge('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function Dc(t, e) {
  we(e, !0);
  let n = m(e, "use", 19, () => []), i = m(e, "class", 3, ""), r = m(e, "notched", 3, !1), a = m(e, "noLabel", 3, !1), o = /* @__PURE__ */ Ve(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "notched",
    "noLabel",
    "children"
  ]), u, l = /* @__PURE__ */ xe(void 0), c = /* @__PURE__ */ xe(void 0), d = Ee({}), h = Ee({}), f;
  Ae(() => {
    s(c) !== f && (s(c) ? (s(c).addStyle("transition-duration", "0s"), v("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      s(c) && s(c).removeStyle("transition-duration");
    })) : p("mdc-notched-outline--upgraded"), f = s(c));
  }), te("SMUI:floating-label:mount", (A) => {
    ae(c, A, !0);
  }), te("SMUI:floating-label:unmount", () => {
    ae(c, void 0);
  }), st(() => (ae(
    l,
    new Gm({
      addClass: v,
      removeClass: p,
      setNotchWidthProperty: (A) => g("width", A + "px"),
      removeNotchWidthProperty: () => _("width")
    }),
    !0
  ), s(l).init(), () => {
    var A;
    (A = s(l)) == null || A.destroy();
  }));
  function v(A) {
    d[A] || (d[A] = !0);
  }
  function p(A) {
    (!(A in d) || d[A]) && (d[A] = !1);
  }
  function g(A, O) {
    h[A] != O && (O === "" || O == null ? delete h[A] : h[A] = O);
  }
  function _(A) {
    A in h && delete h[A];
  }
  function C(A) {
    var O;
    (O = s(l)) == null || O.notch(A);
  }
  function x() {
    var A;
    (A = s(l)) == null || A.closeNotch();
  }
  function S() {
    return u;
  }
  var b = { notch: C, closeNotch: x, getElement: S }, E = $m();
  He(E, (A) => ({ class: A, ...o }), [
    () => Ne({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": r(),
      "mdc-notched-outline--no-label": a(),
      ...d,
      [i()]: !0
    })
  ]);
  var y = ye(_e(E), 2);
  {
    var T = (A) => {
      var O = Jm(), B = _e(O);
      Ie(B, () => e.children ?? me), Be((Z) => nn(O, Z), [
        () => Object.entries(h).map(([Z, G]) => `${Z}: ${G};`).join(" ")
      ]), w(A, O);
    };
    he(y, (A) => {
      a() || A(T);
    });
  }
  return Se(E, (A) => u = A, () => u), Ue(E, (A, O) => X == null ? void 0 : X(A, O), n), w(t, E), Re(b);
}
function Ma(t, e) {
  we(e, !0);
  let n = m(e, "use", 19, () => []), i = m(e, "class", 3, ""), r = m(e, "component", 3, Mi), a = m(e, "tag", 3, "div"), o = m(e, "_smuiClass", 3, ""), u = m(e, "_smuiClassMap", 23, () => ({})), l = m(e, "_smuiContexts", 19, () => ({})), c = m(e, "_smuiProps", 19, () => ({})), d = /* @__PURE__ */ Ve(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "component",
    "tag",
    "_smuiClass",
    "_smuiClassMap",
    "_smuiContexts",
    "_smuiProps",
    "children"
  ]), h;
  const f = [];
  Object.entries(u()).forEach(([C, x]) => {
    const S = se(x);
    S && "subscribe" in S && f.push(S.subscribe((b) => {
      u()[C] = b;
    }));
  });
  for (let C in l())
    l().hasOwnProperty(C) && te(C, l()[C]);
  Pn(() => {
    for (const C of f)
      C();
  });
  function v() {
    return h.getElement();
  }
  var p = { getElement: v }, g = le(), _ = J(g);
  {
    let C = /* @__PURE__ */ ve(() => Ne({
      [o()]: !0,
      ...u(),
      [i()]: !0
    }));
    wi(_, r, (x, S) => {
      Se(
        S(x, et(
          {
            get tag() {
              return a();
            },
            get use() {
              return n();
            },
            get class() {
              return s(C);
            }
          },
          c,
          () => d,
          {
            children: (b, E) => {
              var y = le(), T = J(y);
              Ie(T, () => e.children ?? me), w(b, y);
            },
            $$slots: { default: !0 }
          }
        )),
        (b) => h = b,
        () => h
      );
    });
  }
  return w(t, g), Re(p);
}
function ep(t, e) {
  we(e, !0);
  let n = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "children"]), i;
  function r() {
    return i.getElement();
  }
  var a = { getElement: r };
  return Se(
    Ma(t, et({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => n, {
      children: (o, u) => {
        var l = le(), c = J(l);
        Ie(c, () => e.children ?? me), w(o, l);
      },
      $$slots: { default: !0 }
    })),
    (o) => i = o,
    () => i
  ), Re(a);
}
function tp(t, e) {
  we(e, !0);
  let n = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "children"]), i;
  function r() {
    return i.getElement();
  }
  var a = { getElement: r };
  return Se(
    Ma(t, et(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => n,
      {
        children: (o, u) => {
          var l = le(), c = J(l);
          Ie(c, () => e.children ?? me), w(o, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => i = o,
    () => i
  ), Re(a);
}
function np(t, e) {
  we(e, !0);
  let n = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "children"]), i;
  function r() {
    return i.getElement();
  }
  var a = { getElement: r };
  return Se(
    Ma(t, et(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => n,
      {
        children: (o, u) => {
          var l = le(), c = J(l);
          Ie(c, () => e.children ?? me), w(o, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => i = o,
    () => i
  ), Re(a);
}
var ip = /* @__PURE__ */ ge("<input/>");
function rp(t, e) {
  we(e, !0);
  let n = m(e, "use", 19, () => []), i = m(e, "class", 3, ""), r = m(e, "type", 3, "text"), a = m(e, "placeholder", 3, " "), o = m(e, "value", 15), u = m(e, "files", 15, null), l = m(e, "dirty", 15, !1), c = m(e, "invalid", 15, !1), d = m(e, "updateInvalid", 3, !0), h = m(e, "initialInvalid", 3, !1), f = m(e, "emptyValueNull", 19, () => o() === null), v = m(e, "emptyValueUndefined", 19, () => o() === void 0), p = /* @__PURE__ */ Ve(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "type",
    "placeholder",
    "value",
    "files",
    "dirty",
    "invalid",
    "updateInvalid",
    "initialInvalid",
    "emptyValueNull",
    "emptyValueUndefined"
  ]), g, _ = Ee({}), C = Ee({});
  Ae(() => {
    r() === "file" ? delete C.value : C.value = o() == null ? "" : o();
  }), st(() => {
    d() && h() && c(B().matches(":invalid"));
  });
  function x(k) {
    return k === "" ? Number.NaN : +k;
  }
  function S(k) {
    if (r() === "file") {
      u(k.currentTarget.files);
      return;
    }
    if (k.currentTarget.value === "" && f()) {
      o(null);
      return;
    }
    if (k.currentTarget.value === "" && v()) {
      o(void 0);
      return;
    }
    switch (r()) {
      case "number":
      case "range":
        o(x(k.currentTarget.value));
        break;
      default:
        o(k.currentTarget.value);
        break;
    }
  }
  function b(k) {
    (r() === "file" || r() === "range") && S(k), l(!0), d() && c(B().matches(":invalid"));
  }
  function E(k) {
    return k in _ ? _[k] ?? null : B().getAttribute(k);
  }
  function y(k, P) {
    _[k] !== P && (_[k] = P);
  }
  function T(k) {
    (!(k in _) || _[k] != null) && (_[k] = void 0);
  }
  function A() {
    B().focus();
  }
  function O() {
    B().blur();
  }
  function B() {
    return g;
  }
  var Z = { getAttr: E, addAttr: y, removeAttr: T, focus: A, blur: O, getElement: B }, G = ip(), j = (k) => {
    var P;
    r() !== "file" && S(k), (P = e.oninput) == null || P.call(e, k);
  }, K = (k) => {
    var P;
    b(k), (P = e.onchange) == null || P.call(e, k);
  };
  return He(
    G,
    (k) => ({
      class: k,
      type: r(),
      placeholder: a(),
      ...C,
      ..._,
      ...p,
      oninput: j,
      onchange: K
    }),
    [
      () => Ne({ "mdc-text-field__input": !0, [i()]: !0 })
    ],
    void 0,
    void 0,
    !0
  ), Se(G, (k) => g = k, () => g), Ue(G, (k, P) => X == null ? void 0 : X(k, P), n), w(t, G), Re(Z);
}
var ap = /* @__PURE__ */ ge("<textarea></textarea>");
function op(t, e) {
  we(e, !0);
  let n = m(e, "use", 19, () => []), i = m(e, "class", 3, ""), r = m(e, "style", 3, ""), a = m(e, "value", 15, ""), o = m(e, "dirty", 15, !1), u = m(e, "invalid", 15, !1), l = m(e, "updateInvalid", 3, !0), c = m(e, "initialInvalid", 3, !1), d = m(e, "resizable", 3, !0), h = /* @__PURE__ */ Ve(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "value",
    "dirty",
    "invalid",
    "updateInvalid",
    "initialInvalid",
    "resizable"
  ]), f, v = Ee({});
  st(() => {
    l() && c() && u(b().matches(":invalid"));
  });
  function p() {
    o(!0), l() && u(b().matches(":invalid"));
  }
  function g(A) {
    return A in v ? v[A] ?? null : b().getAttribute(A);
  }
  function _(A, O) {
    v[A] !== O && (v[A] = O);
  }
  function C(A) {
    (!(A in v) || v[A] != null) && (v[A] = void 0);
  }
  function x() {
    b().focus();
  }
  function S() {
    b().blur();
  }
  function b() {
    return f;
  }
  var E = { getAttr: g, addAttr: _, removeAttr: C, focus: x, blur: S, getElement: b }, y = ap(), T = (A) => {
    var O;
    p(), (O = e.onchange) == null || O.call(e, A);
  };
  return He(
    y,
    (A) => ({
      class: A,
      style: `${d() ? "" : "resize: none; "}${r()}`,
      ...v,
      ...h,
      onchange: T
    }),
    [
      () => Ne({ "mdc-text-field__input": !0, [i()]: !0 })
    ]
  ), Se(y, (A) => f = A, () => f), Ue(y, (A, O) => X == null ? void 0 : X(A, O), n), La(() => ya(y, a)), w(t, y), Re(E);
}
var sp = /* @__PURE__ */ ge('<span class="mdc-text-field__ripple"></span>'), lp = /* @__PURE__ */ ge("<!> <!>", 1), up = /* @__PURE__ */ ge("<span><!> <!></span>"), cp = /* @__PURE__ */ ge("<!> <!> <!>", 1), dp = /* @__PURE__ */ ge("<label><!> <!> <!> <!> <!> <!> <!></label>"), fp = /* @__PURE__ */ ge("<div><!> <!> <!> <!> <!></div>"), hp = /* @__PURE__ */ ge("<!> <!>", 1);
function Vl(t, e) {
  we(e, !0);
  const { applyPassive: n } = Rc;
  let i = () => {
  };
  function r(N) {
    return N === i;
  }
  let a = m(e, "use", 19, () => []), o = m(e, "class", 3, ""), u = m(e, "style", 3, ""), l = m(e, "ripple", 3, !0), c = m(e, "disabled", 3, !1), d = m(e, "required", 3, !1), h = m(e, "textarea", 3, !1), f = m(e, "variant", 19, () => h() ? "outlined" : "standard"), v = m(e, "noLabel", 3, !1), p = m(e, "type", 3, "text"), g = m(e, "value", 15), _ = m(e, "files", 15, i), C = m(e, "invalid", 15, i), x = m(e, "updateInvalid", 19, () => r(C())), S = m(e, "initialInvalid", 3, !1), b = m(e, "dirty", 15, !1), E = m(e, "validateOnValueChange", 19, x), y = m(e, "useNativeValidation", 19, x), T = m(e, "withLeadingIcon", 3, i), A = m(e, "withTrailingIcon", 3, i), O = m(e, "input", 7), B = m(e, "floatingLabel", 7), Z = m(e, "lineRipple", 7), G = m(e, "notchedOutline", 7), j = /* @__PURE__ */ Ve(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "ripple",
    "disabled",
    "required",
    "textarea",
    "variant",
    "noLabel",
    "label",
    "type",
    "value",
    "files",
    "invalid",
    "updateInvalid",
    "initialInvalid",
    "dirty",
    "prefix",
    "suffix",
    "validateOnValueChange",
    "useNativeValidation",
    "withLeadingIcon",
    "withTrailingIcon",
    "input",
    "floatingLabel",
    "lineRipple",
    "notchedOutline",
    "children",
    "leadingIcon",
    "trailingIcon",
    "internalCounter",
    "line",
    "helper"
  ]);
  const K = g() !== void 0 || g() === void 0 && e.input$emptyValueUndefined || !r(_());
  r(_()) && _(null), r(C()) && C(!1);
  let k, P = /* @__PURE__ */ xe(void 0), M = new Yr(), z = Ee({}), re = Ee({}), U = /* @__PURE__ */ xe(void 0), I = /* @__PURE__ */ xe(!1), L = /* @__PURE__ */ xe(Ee(S())), $ = se("SMUI:addLayoutListener"), R, W, ce = new Promise((N) => W = N), V, oe, Q, de;
  const ne = /* @__PURE__ */ ve(() => O() && O().getElement());
  Ae(() => {
    (b() || s(L) || !x()) && s(P) && s(P).isValid() !== !C() && (x() ? C(!s(P).isValid()) : s(P).setValid(!C()));
  }), Ae(() => {
    s(P) && s(P).getValidateOnValueChange() !== E() && s(P).setValidateOnValueChange(r(E()) ? !1 : E());
  }), Ae(() => {
    s(P) && s(P).setUseNativeValidation(r(y()) ? !0 : y());
  }), Ae(() => {
    s(P) && s(P).setDisabled(c());
  });
  let qe = g();
  Ae(() => {
    if (s(P) && K && qe !== g()) {
      qe = g();
      const N = `${g() == null ? "" : g()}`;
      s(P).getValue() !== N && s(P).setValue(N);
    }
  }), $ && (R = $(F)), te("SMUI:textfield:leading-icon:mount", (N) => {
    V = N;
  }), te("SMUI:textfield:leading-icon:unmount", () => {
    V = void 0;
  }), te("SMUI:textfield:trailing-icon:mount", (N) => {
    oe = N;
  }), te("SMUI:textfield:trailing-icon:unmount", () => {
    oe = void 0;
  }), te("SMUI:textfield:helper-text:id", (N) => {
    ae(U, N, !0);
  }), te("SMUI:textfield:helper-text:mount", (N) => {
    Q = N;
  }), te("SMUI:textfield:helper-text:unmount", () => {
    ae(U, void 0), Q = void 0;
  }), te("SMUI:textfield:character-counter:mount", (N) => {
    de = N;
  }), te("SMUI:textfield:character-counter:unmount", () => {
    de = void 0;
  }), st(() => {
    var N;
    if (ae(
      P,
      new Km(
        {
          // getRootAdapterMethods_
          addClass: De,
          removeClass: Le,
          hasClass: je,
          registerTextFieldInteractionHandler: (Y, Pe) => M.on(q(), Y, Pe),
          deregisterTextFieldInteractionHandler: (Y, Pe) => M.off(q(), Y, Pe),
          registerValidationAttributeChangeHandler: (Y) => {
            const Pe = (Pt) => Pt.map((_t) => _t.attributeName).filter((_t) => _t), ct = new MutationObserver((Pt) => {
              y() && Y(Pe(Pt));
            }), It = { attributes: !0 };
            return O() && ct.observe(O().getElement(), It), ct;
          },
          deregisterValidationAttributeChangeHandler: (Y) => {
            Y.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var Y;
            return ((Y = O()) == null ? void 0 : Y.getElement()) ?? null;
          },
          setInputAttr: (Y, Pe) => {
            var ct;
            (ct = O()) == null || ct.addAttr(Y, Pe);
          },
          removeInputAttr: (Y) => {
            var Pe;
            (Pe = O()) == null || Pe.removeAttr(Y);
          },
          isFocused: () => {
            var Y;
            return document.activeElement === ((Y = O()) == null ? void 0 : Y.getElement());
          },
          registerInputInteractionHandler: (Y, Pe) => {
            var It;
            const ct = (It = O()) == null ? void 0 : It.getElement();
            if (ct) {
              const Pt = n();
              M.on(ct, Y, Pe, typeof Pt == "boolean" ? { capture: Pt } : Pt);
            }
          },
          deregisterInputInteractionHandler: (Y, Pe) => {
            var It;
            const ct = (It = O()) == null ? void 0 : It.getElement();
            ct && M.off(ct, Y, Pe);
          },
          // getLabelAdapterMethods_
          floatLabel: (Y) => B() && B().float(Y),
          getLabelWidth: () => B() ? B().getWidth() : 0,
          hasLabel: () => !!B(),
          shakeLabel: (Y) => B() && B().shake(Y),
          setLabelRequired: (Y) => B() && B().setRequired(Y),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => Z() && Z().activate(),
          deactivateLineRipple: () => Z() && Z().deactivate(),
          setLineRippleTransformOrigin: (Y) => Z() && Z().setRippleCenter(Y),
          // getOutlineAdapterMethods_
          closeOutline: () => G() && G().closeNotch(),
          hasOutline: () => !!G(),
          notchOutline: (Y) => G() && G().notch(Y)
        },
        {
          get helperText() {
            return Q;
          },
          get characterCounter() {
            return de;
          },
          get leadingIcon() {
            return V;
          },
          get trailingIcon() {
            return oe;
          }
        }
      ),
      !0
    ), K) {
      if (O() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (N = s(P)) == null || N.init();
    } else
      Eo().then(() => {
        var Y;
        if (O() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (Y = s(P)) == null || Y.init();
      });
    return W(), () => {
      var Y;
      (Y = s(P)) == null || Y.destroy(), M.clear();
    };
  }), Pn(() => {
    R && R();
  });
  function je(N) {
    return N in z ? z[N] ?? null : q().classList.contains(N);
  }
  function De(N) {
    z[N] || (z[N] = !0);
  }
  function Le(N) {
    (!(N in z) || z[N]) && (z[N] = !1);
  }
  function ue(N, Y) {
    re[N] != Y && (Y === "" || Y == null ? delete re[N] : re[N] = Y);
  }
  function Oe() {
    var N;
    (N = O()) == null || N.focus();
  }
  function Ze() {
    var N;
    (N = O()) == null || N.blur();
  }
  function F() {
    if (s(P)) {
      const N = s(P).shouldFloat;
      s(P).notchOutline(N);
    }
  }
  function q() {
    return k;
  }
  var ee = { focus: Oe, blur: Ze, layout: F, getElement: q }, Ce = hp(), Tt = J(Ce);
  {
    var pt = (N) => {
      var Y = dp();
      He(Y, (Ke, nt, Xe) => ({ class: Ke, style: nt, for: void 0, ...Xe }), [
        () => Ne({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": c(),
          "mdc-text-field--textarea": h(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !h(),
          "mdc-text-field--no-label": v() || e.label == null,
          "mdc-text-field--label-floating": s(I) || g() != null && g() !== "",
          "mdc-text-field--with-leading-icon": r(T()) ? e.leadingIcon : T(),
          "mdc-text-field--with-trailing-icon": r(A()) ? e.trailingIcon : A(),
          "mdc-text-field--with-internal-counter": h() && e.internalCounter,
          "mdc-text-field--invalid": C(),
          ...z,
          [o()]: !0
        }),
        () => Object.entries(re).map(([Ke, nt]) => `${Ke}: ${nt};`).concat([u()]).join(" "),
        () => ir(j, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Pe = _e(Y);
      {
        var ct = (Ke) => {
          var nt = lp(), Xe = J(nt);
          {
            var Lt = (Et) => {
              var vt = sp();
              w(Et, vt);
            };
            he(Xe, (Et) => {
              f() === "filled" && Et(Lt);
            });
          }
          var fn = ye(Xe, 2);
          {
            var it = (Et) => {
              {
                let vt = /* @__PURE__ */ ve(() => s(I) || g() != null && g() !== "" && (typeof g() != "number" || !isNaN(g()))), Je = /* @__PURE__ */ ve(() => ot(j, "label$"));
                Se(
                  oo(Et, et(
                    {
                      get floatAbove() {
                        return s(vt);
                      },
                      get required() {
                        return d();
                      },
                      wrapped: !0
                    },
                    () => s(Je),
                    {
                      children: (Ot, Ln) => {
                        var sn = le(), lt = J(sn);
                        {
                          var jt = (Yt) => {
                          }, bn = (Yt) => {
                            var Ni = le(), In = J(Ni);
                            {
                              var ci = (yn) => {
                                var Yn = Bt();
                                Be(() => ft(Yn, e.label)), w(yn, Yn);
                              }, Zr = (yn) => {
                                var Yn = le(), Hn = J(Yn);
                                Ie(Hn, () => e.label), w(yn, Yn);
                              };
                              he(
                                In,
                                (yn) => {
                                  typeof e.label == "string" ? yn(ci) : yn(Zr, !1);
                                },
                                !0
                              );
                            }
                            w(Yt, Ni);
                          };
                          he(lt, (Yt) => {
                            e.label == null ? Yt(jt) : Yt(bn, !1);
                          });
                        }
                        w(Ot, sn);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (Ot) => B(Ot),
                  () => B()
                );
              }
            };
            he(fn, (Et) => {
              !v() && e.label != null && Et(it);
            });
          }
          w(Ke, nt);
        };
        he(Pe, (Ke) => {
          !h() && f() !== "outlined" && Ke(ct);
        });
      }
      var It = ye(Pe, 2);
      {
        var Pt = (Ke) => {
          {
            let nt = /* @__PURE__ */ ve(() => v() || e.label == null), Xe = /* @__PURE__ */ ve(() => ot(j, "outline$"));
            Se(
              Dc(Ke, et(
                {
                  get noLabel() {
                    return s(nt);
                  }
                },
                () => s(Xe),
                {
                  children: (Lt, fn) => {
                    var it = le(), Et = J(it);
                    {
                      var vt = (Je) => {
                        {
                          let Ot = /* @__PURE__ */ ve(() => s(I) || g() != null && g() !== "" && (typeof g() != "number" || !isNaN(g()))), Ln = /* @__PURE__ */ ve(() => ot(j, "label$"));
                          Se(
                            oo(Je, et(
                              {
                                get floatAbove() {
                                  return s(Ot);
                                },
                                get required() {
                                  return d();
                                },
                                wrapped: !0
                              },
                              () => s(Ln),
                              {
                                children: (sn, lt) => {
                                  var jt = le(), bn = J(jt);
                                  {
                                    var Yt = (In) => {
                                    }, Ni = (In) => {
                                      var ci = le(), Zr = J(ci);
                                      {
                                        var yn = (Hn) => {
                                          var Fi = Bt();
                                          Be(() => ft(Fi, e.label)), w(Hn, Fi);
                                        }, Yn = (Hn) => {
                                          var Fi = le(), Lo = J(Fi);
                                          Ie(Lo, () => e.label), w(Hn, Fi);
                                        };
                                        he(
                                          Zr,
                                          (Hn) => {
                                            typeof e.label == "string" ? Hn(yn) : Hn(Yn, !1);
                                          },
                                          !0
                                        );
                                      }
                                      w(In, ci);
                                    };
                                    he(bn, (In) => {
                                      e.label == null ? In(Yt) : In(Ni, !1);
                                    });
                                  }
                                  w(sn, jt);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (sn) => B(sn),
                            () => B()
                          );
                        }
                      };
                      he(Et, (Je) => {
                        !v() && e.label != null && Je(vt);
                      });
                    }
                    w(Lt, it);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (Lt) => G(Lt),
              () => G()
            );
          }
        };
        he(It, (Ke) => {
          (h() || f() === "outlined") && Ke(Pt);
        });
      }
      var _t = ye(It, 2);
      Er(_t, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (Ke, nt) => {
          var Xe = le(), Lt = J(Xe);
          Ie(Lt, () => e.leadingIcon ?? me), w(Ke, Xe);
        },
        $$slots: { default: !0 }
      });
      var Xn = ye(_t, 2);
      Ie(Xn, () => e.children ?? me);
      var ht = ye(Xn, 2);
      {
        var Nt = (Ke) => {
          var nt = up(), Xe = _e(nt);
          {
            let fn = /* @__PURE__ */ ve(() => ot(j, "input$"));
            Se(
              op(Xe, et(
                {
                  get disabled() {
                    return c();
                  },
                  get required() {
                    return d();
                  },
                  get updateInvalid() {
                    return x();
                  },
                  get initialInvalid() {
                    return s(L);
                  },
                  get "aria-controls"() {
                    return s(U);
                  },
                  get "aria-describedby"() {
                    return s(U);
                  }
                },
                () => s(fn),
                {
                  onblur: (it) => {
                    var Et;
                    ae(I, !1), ae(L, !0), ke(q(), "blur", it), (Et = e.input$onblur) == null || Et.call(e, it);
                  },
                  onfocus: (it) => {
                    var Et;
                    ae(I, !0), ke(q(), "focus", it), (Et = e.input$onfocus) == null || Et.call(e, it);
                  },
                  get value() {
                    return g();
                  },
                  set value(it) {
                    g(it);
                  },
                  get dirty() {
                    return b();
                  },
                  set dirty(it) {
                    b(it);
                  },
                  get invalid() {
                    return C();
                  },
                  set invalid(it) {
                    C(it);
                  }
                }
              )),
              (it) => O(it),
              () => O()
            );
          }
          var Lt = ye(Xe, 2);
          Ie(Lt, () => e.internalCounter ?? me), Be((fn) => $u(nt, 1, fn), [
            () => Ju(Ne({
              "mdc-text-field__resizer": !("input$resizable" in j) || e.input$resizable
            }))
          ]), w(Ke, nt);
        }, Gt = (Ke) => {
          var nt = cp(), Xe = J(nt);
          {
            var Lt = (vt) => {
              var Je = le(), Ot = J(Je);
              {
                var Ln = (lt) => {
                  tp(lt, {
                    children: (jt, bn) => {
                      var Yt = Bt();
                      Be(() => ft(Yt, e.prefix)), w(jt, Yt);
                    },
                    $$slots: { default: !0 }
                  });
                }, sn = (lt) => {
                  var jt = le(), bn = J(jt);
                  Ie(bn, () => e.prefix ?? me), w(lt, jt);
                };
                he(Ot, (lt) => {
                  typeof e.prefix == "string" ? lt(Ln) : lt(sn, !1);
                });
              }
              w(vt, Je);
            };
            he(Xe, (vt) => {
              e.prefix != null && vt(Lt);
            });
          }
          var fn = ye(Xe, 2);
          {
            let vt = /* @__PURE__ */ ve(() => ot(j, "input$"));
            Se(
              rp(fn, et(
                {
                  get type() {
                    return p();
                  },
                  get disabled() {
                    return c();
                  },
                  get required() {
                    return d();
                  },
                  get updateInvalid() {
                    return x();
                  },
                  get initialInvalid() {
                    return s(L);
                  },
                  get "aria-controls"() {
                    return s(U);
                  },
                  get "aria-describedby"() {
                    return s(U);
                  }
                },
                () => v() && e.label != null && typeof e.label == "string" ? { placeholder: e.label } : {},
                () => s(vt),
                {
                  onblur: (Je) => {
                    var Ot;
                    ae(I, !1), ae(L, !0), ke(q(), "blur", Je), (Ot = e.input$onblur) == null || Ot.call(e, Je);
                  },
                  onfocus: (Je) => {
                    var Ot;
                    ae(I, !0), ke(q(), "focus", Je), (Ot = e.input$onfocus) == null || Ot.call(e, Je);
                  },
                  get value() {
                    return g();
                  },
                  set value(Je) {
                    g(Je);
                  },
                  get files() {
                    return _();
                  },
                  set files(Je) {
                    _(Je);
                  },
                  get dirty() {
                    return b();
                  },
                  set dirty(Je) {
                    b(Je);
                  },
                  get invalid() {
                    return C();
                  },
                  set invalid(Je) {
                    C(Je);
                  }
                }
              )),
              (Je) => O(Je),
              () => O()
            );
          }
          var it = ye(fn, 2);
          {
            var Et = (vt) => {
              var Je = le(), Ot = J(Je);
              {
                var Ln = (lt) => {
                  np(lt, {
                    children: (jt, bn) => {
                      var Yt = Bt();
                      Be(() => ft(Yt, e.suffix)), w(jt, Yt);
                    },
                    $$slots: { default: !0 }
                  });
                }, sn = (lt) => {
                  var jt = le(), bn = J(jt);
                  Ie(bn, () => e.suffix ?? me), w(lt, jt);
                };
                he(Ot, (lt) => {
                  typeof e.suffix == "string" ? lt(Ln) : lt(sn, !1);
                });
              }
              w(vt, Je);
            };
            he(it, (vt) => {
              e.suffix != null && vt(Et);
            });
          }
          w(Ke, nt);
        };
        he(ht, (Ke) => {
          h() && typeof g() == "string" ? Ke(Nt) : Ke(Gt, !1);
        });
      }
      var Xt = ye(ht, 2);
      Er(Xt, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (Ke, nt) => {
          var Xe = le(), Lt = J(Xe);
          Ie(Lt, () => e.trailingIcon ?? me), w(Ke, Xe);
        },
        $$slots: { default: !0 }
      });
      var Pi = ye(Xt, 2);
      {
        var Fn = (Ke) => {
          {
            let nt = /* @__PURE__ */ ve(() => ot(j, "ripple$"));
            Se(Mc(Ke, et(() => s(nt))), (Xe) => Z(Xe), () => Z());
          }
        };
        he(Pi, (Ke) => {
          !h() && f() !== "outlined" && l() && Ke(Fn);
        });
      }
      Se(Y, (Ke) => k = Ke, () => k), Ue(Y, (Ke, nt) => Kt == null ? void 0 : Kt(Ke, nt), () => ({
        ripple: !h() && f() === "filled",
        unbounded: !1,
        addClass: De,
        removeClass: Le,
        addStyle: ue,
        eventTarget: s(ne),
        activeTarget: s(ne),
        initPromise: ce
      })), Ue(Y, (Ke, nt) => X == null ? void 0 : X(Ke, nt), a), w(N, Y);
    }, on = (N) => {
      var Y = fp();
      He(Y, (ht, Nt, Gt) => ({ class: ht, style: Nt, ...Gt }), [
        () => Ne({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": c(),
          "mdc-text-field--textarea": h(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !h(),
          "mdc-text-field--no-label": v() || e.label == null,
          "mdc-text-field--with-leading-icon": e.leadingIcon,
          "mdc-text-field--with-trailing-icon": e.trailingIcon,
          "mdc-text-field--invalid": C(),
          ...z,
          [o()]: !0
        }),
        () => Object.entries(re).map(([ht, Nt]) => `${ht}: ${Nt};`).concat([u()]).join(" "),
        () => ir(j, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Pe = _e(Y);
      {
        var ct = (ht) => {
          var Nt = le(), Gt = J(Nt);
          Ie(Gt, () => e.label ?? me), w(ht, Nt);
        };
        he(Pe, (ht) => {
          typeof e.label != "string" && ht(ct);
        });
      }
      var It = ye(Pe, 2);
      Er(It, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (ht, Nt) => {
          var Gt = le(), Xt = J(Gt);
          Ie(Xt, () => e.leadingIcon ?? me), w(ht, Gt);
        },
        $$slots: { default: !0 }
      });
      var Pt = ye(It, 2);
      Ie(Pt, () => e.children ?? me);
      var _t = ye(Pt, 2);
      Er(_t, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (ht, Nt) => {
          var Gt = le(), Xt = J(Gt);
          Ie(Xt, () => e.trailingIcon ?? me), w(ht, Gt);
        },
        $$slots: { default: !0 }
      });
      var Xn = ye(_t, 2);
      Ie(Xn, () => e.line ?? me), Se(Y, (ht) => k = ht, () => k), Ue(Y, (ht, Nt) => Kt == null ? void 0 : Kt(ht, Nt), () => ({
        ripple: l(),
        unbounded: !1,
        addClass: De,
        removeClass: Le,
        addStyle: ue
      })), Ue(Y, (ht, Nt) => X == null ? void 0 : X(ht, Nt), a), w(N, Y);
    };
    he(Tt, (N) => {
      K ? N(pt) : N(on, !1);
    });
  }
  var pe = ye(Tt, 2);
  {
    var H = (N) => {
      {
        let Y = /* @__PURE__ */ ve(() => ot(j, "helperLine$"));
        ep(N, et(() => s(Y), {
          children: (Pe, ct) => {
            var It = le(), Pt = J(It);
            Ie(Pt, () => e.helper ?? me), w(Pe, It);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    he(pe, (N) => {
      e.helper && N(H);
    });
  }
  return w(t, Ce), Re(ee);
}
var vp = /* @__PURE__ */ ge("<i><!></i>");
function mp(t, e) {
  we(e, !0);
  const n = () => Rt(p, "$leadingStore", i), [i, r] = gn();
  let a = m(e, "use", 19, () => []), o = m(e, "class", 3, ""), u = m(e, "tabindex", 19, () => e.role === "button" ? 0 : -1), l = m(e, "disabled", 3, !1), c = /* @__PURE__ */ Ve(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "role",
    "tabindex",
    "disabled",
    "children"
  ]), d, h = /* @__PURE__ */ xe(void 0), f = new Yr(), v = Ee({});
  const p = se("SMUI:textfield:icon:leading"), g = n();
  let _ = /* @__PURE__ */ xe(void 0);
  const C = /* @__PURE__ */ ve(() => ({ role: e.role, tabindex: u() })), x = se("SMUI:textfield:leading-icon:mount"), S = se("SMUI:textfield:leading-icon:unmount"), b = se("SMUI:textfield:trailing-icon:mount"), E = se("SMUI:textfield:trailing-icon:unmount");
  st(() => (ae(
    h,
    new Xm({
      getAttr: y,
      setAttr: T,
      removeAttr: A,
      setContent: (P) => {
        ae(_, P, !0);
      },
      registerInteractionHandler: (P, M) => f.on(O(), P, M),
      deregisterInteractionHandler: (P, M) => f.off(O(), P, M),
      notifyIconAction: () => ke(O(), "SMUITextFieldIcon")
    }),
    !0
  ), g ? x && x(s(h)) : b && b(s(h)), s(h).init(), () => {
    var P;
    s(h) && (g ? S && S(s(h)) : E && E(s(h))), (P = s(h)) == null || P.destroy(), f.clear();
  }));
  function y(P) {
    return P in v ? v[P] ?? null : O().getAttribute(P);
  }
  function T(P, M) {
    v[P] !== M && (v[P] = M);
  }
  function A(P) {
    (!(P in v) || v[P] != null) && (v[P] = void 0);
  }
  function O() {
    return d;
  }
  var B = { getElement: O }, Z = vp();
  He(
    Z,
    (P) => ({
      class: P,
      "aria-hidden": u() === -1 ? "true" : "false",
      "aria-disabled": e.role === "button" ? l() ? "true" : "false" : void 0,
      ...s(C),
      ...v,
      ...c
    }),
    [
      () => Ne({
        "mdc-text-field__icon": !0,
        "mdc-text-field__icon--leading": g,
        "mdc-text-field__icon--trailing": !g,
        [o()]: !0
      })
    ]
  );
  var G = _e(Z);
  {
    var j = (P) => {
      var M = le(), z = J(M);
      Ie(z, () => e.children ?? me), w(P, M);
    }, K = (P) => {
      var M = Bt();
      Be(() => ft(M, s(_))), w(P, M);
    };
    he(G, (P) => {
      s(_) == null ? P(j) : P(K, !1);
    });
  }
  Se(Z, (P) => d = P, () => d), Ue(Z, (P, M) => X == null ? void 0 : X(P, M), a), w(t, Z);
  var k = Re(B);
  return r(), k;
}
function pp(t, e) {
  we(e, !0);
  let n = m(e, "placeholder", 3, ""), i = m(e, "label", 3, ""), r = m(e, "icon", 3, ""), a = m(e, "value", 15, ""), o = m(e, "variant", 3, "standard"), u = m(e, "styles", 3, "");
  var l = le(), c = J(l);
  {
    var d = (f) => {
      {
        const v = (g) => {
          mp(g, {
            class: "material-icons",
            children: (_, C) => {
              var x = Bt();
              Be(() => ft(x, r())), w(_, x);
            },
            $$slots: { default: !0 }
          });
        };
        let p = /* @__PURE__ */ ve(() => `width: 100%; ${u()}`);
        Vl(f, {
          get label() {
            return i();
          },
          get placeholder() {
            return n();
          },
          get style() {
            return s(p);
          },
          get variant() {
            return o();
          },
          get value() {
            return a();
          },
          set value(g) {
            a(g);
          },
          leadingIcon: v,
          $$slots: { leadingIcon: !0 }
        });
      }
    }, h = (f) => {
      Vl(f, {
        get label() {
          return i();
        },
        get placeholder() {
          return n();
        },
        style: "width: 100%",
        get variant() {
          return o();
        },
        get value() {
          return a();
        },
        set value(v) {
          a(v);
        }
      });
    };
    he(c, (f) => {
      r() ? f(d) : f(h, !1);
    });
  }
  w(t, l), Re();
}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var gp = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, bp = {
  CLOSED_EVENT: "MDCMenuSurface:closed",
  CLOSING_EVENT: "MDCMenuSurface:closing",
  OPENED_EVENT: "MDCMenuSurface:opened",
  OPENING_EVENT: "MDCMenuSurface:opening",
  FOCUSABLE_ELEMENTS: [
    "button:not(:disabled)",
    '[href]:not([aria-disabled="true"])',
    "input:not(:disabled)",
    "select:not(:disabled)",
    "textarea:not(:disabled)",
    '[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'
  ].join(", ")
}, aa = {
  /** Total duration of menu-surface open animation. */
  TRANSITION_OPEN_DURATION: 120,
  /** Total duration of menu-surface close animation. */
  TRANSITION_CLOSE_DURATION: 75,
  /**
   * Margin left to the edge of the viewport when menu-surface is at maximum
   * possible height. Also used as a viewport margin.
   */
  MARGIN_TO_EDGE: 32,
  /**
   * Ratio of anchor width to menu-surface width for switching from corner
   * positioning to center positioning.
   */
  ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: 0.67,
  /**
   * Amount of time to wait before restoring focus when closing the menu
   * surface. This is important because if a touch event triggered the menu
   * close, and the subsequent mouse event occurs after focus is restored, then
   * the restored focus would be lost.
   */
  TOUCH_EVENT_WAIT_MS: 30
}, St;
(function(t) {
  t[t.BOTTOM = 1] = "BOTTOM", t[t.CENTER = 2] = "CENTER", t[t.RIGHT = 4] = "RIGHT", t[t.FLIP_RTL = 8] = "FLIP_RTL";
})(St || (St = {}));
var $i;
(function(t) {
  t[t.TOP_LEFT = 0] = "TOP_LEFT", t[t.TOP_RIGHT = 4] = "TOP_RIGHT", t[t.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", t[t.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", t[t.TOP_START = 8] = "TOP_START", t[t.TOP_END = 12] = "TOP_END", t[t.BOTTOM_START = 9] = "BOTTOM_START", t[t.BOTTOM_END = 13] = "BOTTOM_END";
})($i || ($i = {}));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var fi, $n, ze = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
fi = {}, fi["" + ze.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", fi["" + ze.LIST_ITEM_CLASS] = "mdc-list-item", fi["" + ze.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", fi["" + ze.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", fi["" + ze.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", fi["" + ze.ROOT] = "mdc-list";
var br = ($n = {}, $n["" + ze.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", $n["" + ze.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", $n["" + ze.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", $n["" + ze.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", $n["" + ze.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", $n["" + ze.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", $n["" + ze.ROOT] = "mdc-deprecated-list", $n), hi = {
  ACTION_EVENT: "MDCList:action",
  SELECTION_CHANGE_EVENT: "MDCList:selectionChange",
  ARIA_CHECKED: "aria-checked",
  ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
  ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
  ARIA_CURRENT: "aria-current",
  ARIA_DISABLED: "aria-disabled",
  ARIA_ORIENTATION: "aria-orientation",
  ARIA_ORIENTATION_HORIZONTAL: "horizontal",
  ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
  ARIA_SELECTED: "aria-selected",
  ARIA_INTERACTIVE_ROLES_SELECTOR: '[role="listbox"], [role="menu"]',
  ARIA_MULTI_SELECTABLE_SELECTOR: '[aria-multiselectable="true"]',
  CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: `
    .` + ze.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + ze.LIST_ITEM_CLASS + ` a,
    .` + br[ze.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + br[ze.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + ze.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + ze.LIST_ITEM_CLASS + ` a,
    .` + ze.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + ze.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + br[ze.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + br[ze.LIST_ITEM_CLASS] + ` a,
    .` + br[ze.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + br[ze.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, Ct = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Ip = ["input", "button", "textarea", "select"], _n = function(t) {
  var e = t.target;
  if (e) {
    var n = ("" + e.tagName).toLowerCase();
    Ip.indexOf(n) === -1 && t.preventDefault();
  }
};
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function yp() {
  var t = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return t;
}
function _p(t, e) {
  for (var n = /* @__PURE__ */ new Map(), i = 0; i < t; i++) {
    var r = e(i).trim();
    if (r) {
      var a = r[0].toLowerCase();
      n.has(a) || n.set(a, []), n.get(a).push({ text: r.toLowerCase(), index: i });
    }
  }
  return n.forEach(function(o) {
    o.sort(function(u, l) {
      return u.index - l.index;
    });
  }), n;
}
function gs(t, e) {
  var n = t.nextChar, i = t.focusItemAtIndex, r = t.sortedIndexByFirstChar, a = t.focusedItemIndex, o = t.skipFocus, u = t.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    Nc(e);
  }, Ct.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + n;
  var l;
  return e.typeaheadBuffer.length === 1 ? l = Ep(r, a, u, e) : l = Cp(r, u, e), l !== -1 && !o && i(l), l;
}
function Ep(t, e, n, i) {
  var r = i.typeaheadBuffer[0], a = t.get(r);
  if (!a)
    return -1;
  if (r === i.currentFirstChar && a[i.sortedIndexCursor].index === e) {
    i.sortedIndexCursor = (i.sortedIndexCursor + 1) % a.length;
    var o = a[i.sortedIndexCursor].index;
    if (!n(o))
      return o;
  }
  i.currentFirstChar = r;
  var u = -1, l;
  for (l = 0; l < a.length; l++)
    if (!n(a[l].index)) {
      u = l;
      break;
    }
  for (; l < a.length; l++)
    if (a[l].index > e && !n(a[l].index)) {
      u = l;
      break;
    }
  return u !== -1 ? (i.sortedIndexCursor = u, a[i.sortedIndexCursor].index) : -1;
}
function Cp(t, e, n) {
  var i = n.typeaheadBuffer[0], r = t.get(i);
  if (!r)
    return -1;
  var a = r[n.sortedIndexCursor];
  if (a.text.lastIndexOf(n.typeaheadBuffer, 0) === 0 && !e(a.index))
    return a.index;
  for (var o = (n.sortedIndexCursor + 1) % r.length, u = -1; o !== n.sortedIndexCursor; ) {
    var l = r[o], c = l.text.lastIndexOf(n.typeaheadBuffer, 0) === 0, d = !e(l.index);
    if (c && d) {
      u = o;
      break;
    }
    o = (o + 1) % r.length;
  }
  return u !== -1 ? (n.sortedIndexCursor = u, r[n.sortedIndexCursor].index) : -1;
}
function Pc(t) {
  return t.typeaheadBuffer.length > 0;
}
function Nc(t) {
  t.typeaheadBuffer = "";
}
function Gl(t, e) {
  var n = t.event, i = t.isTargetListItem, r = t.focusedItemIndex, a = t.focusItemAtIndex, o = t.sortedIndexByFirstChar, u = t.isItemAtIndexDisabled, l = yt(n) === "ArrowLeft", c = yt(n) === "ArrowUp", d = yt(n) === "ArrowRight", h = yt(n) === "ArrowDown", f = yt(n) === "Home", v = yt(n) === "End", p = yt(n) === "Enter", g = yt(n) === "Spacebar";
  if (n.altKey || n.ctrlKey || n.metaKey || l || c || d || h || f || v || p)
    return -1;
  var _ = !g && n.key.length === 1;
  if (_) {
    _n(n);
    var C = {
      focusItemAtIndex: a,
      focusedItemIndex: r,
      nextChar: n.key.toLowerCase(),
      sortedIndexByFirstChar: o,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return gs(C, e);
  }
  if (!g)
    return -1;
  i && _n(n);
  var x = i && Pc(e);
  if (x) {
    var C = {
      focusItemAtIndex: a,
      focusedItemIndex: r,
      nextChar: " ",
      sortedIndexByFirstChar: o,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return gs(C, e);
  }
  return -1;
}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function Ap(t) {
  return t instanceof Array;
}
var Sp = ["Alt", "Control", "Meta", "Shift"];
function jl(t) {
  var e = new Set(t ? Sp.filter(function(n) {
    return t.getModifierState(n);
  }) : []);
  return function(n) {
    return n.every(function(i) {
      return e.has(i);
    }) && n.length === e.size;
  };
}
var xp = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      var i = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return i.wrapFocus = !1, i.isVertical = !0, i.isSingleSelectionList = !1, i.areDisabledItemsFocusable = !0, i.selectedIndex = Ct.UNSET_INDEX, i.focusedItemIndex = Ct.UNSET_INDEX, i.useActivatedClass = !1, i.useSelectedAttr = !1, i.ariaCurrentAttrValue = null, i.isCheckboxList = !1, i.isRadioList = !1, i.lastSelectedIndex = null, i.hasTypeahead = !1, i.typeaheadState = yp(), i.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return hi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ze;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Ct;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClassForElementIndex: function() {
          },
          focusItemAtIndex: function() {
          },
          getAttributeForElementIndex: function() {
            return null;
          },
          getFocusedElementIndex: function() {
            return 0;
          },
          getListItemCount: function() {
            return 0;
          },
          hasCheckboxAtIndex: function() {
            return !1;
          },
          hasRadioAtIndex: function() {
            return !1;
          },
          isCheckboxCheckedAtIndex: function() {
            return !1;
          },
          isFocusInsideList: function() {
            return !1;
          },
          isRootFocused: function() {
            return !1;
          },
          listItemAtIndexHasClass: function() {
            return !1;
          },
          notifyAction: function() {
          },
          notifySelectionChange: function() {
          },
          removeClassForElementIndex: function() {
          },
          setAttributeForElementIndex: function() {
          },
          setCheckedCheckboxOrRadioAtIndex: function() {
          },
          setTabIndexForListItemChildren: function() {
          },
          getPrimaryTextAtIndex: function() {
            return "";
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.layout = function() {
      this.adapter.getListItemCount() !== 0 && (this.adapter.hasCheckboxAtIndex(0) ? this.isCheckboxList = !0 : this.adapter.hasRadioAtIndex(0) ? this.isRadioList = !0 : this.maybeInitializeSingleSelection(), this.hasTypeahead && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex()));
    }, e.prototype.getFocusedItemIndex = function() {
      return this.focusedItemIndex;
    }, e.prototype.setWrapFocus = function(n) {
      this.wrapFocus = n;
    }, e.prototype.setVerticalOrientation = function(n) {
      this.isVertical = n;
    }, e.prototype.setSingleSelection = function(n) {
      this.isSingleSelectionList = n, n && (this.maybeInitializeSingleSelection(), this.selectedIndex = this.getSelectedIndexFromDOM());
    }, e.prototype.setDisabledItemsFocusable = function(n) {
      this.areDisabledItemsFocusable = n;
    }, e.prototype.maybeInitializeSingleSelection = function() {
      var n = this.getSelectedIndexFromDOM();
      if (n !== Ct.UNSET_INDEX) {
        var i = this.adapter.listItemAtIndexHasClass(n, ze.LIST_ITEM_ACTIVATED_CLASS);
        i && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = n;
      }
    }, e.prototype.getSelectedIndexFromDOM = function() {
      for (var n = Ct.UNSET_INDEX, i = this.adapter.getListItemCount(), r = 0; r < i; r++) {
        var a = this.adapter.listItemAtIndexHasClass(r, ze.LIST_ITEM_SELECTED_CLASS), o = this.adapter.listItemAtIndexHasClass(r, ze.LIST_ITEM_ACTIVATED_CLASS);
        if (a || o) {
          n = r;
          break;
        }
      }
      return n;
    }, e.prototype.setHasTypeahead = function(n) {
      this.hasTypeahead = n, n && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex());
    }, e.prototype.isTypeaheadInProgress = function() {
      return this.hasTypeahead && Pc(this.typeaheadState);
    }, e.prototype.setUseActivatedClass = function(n) {
      this.useActivatedClass = n;
    }, e.prototype.setUseSelectedAttribute = function(n) {
      this.useSelectedAttr = n;
    }, e.prototype.getSelectedIndex = function() {
      return this.selectedIndex;
    }, e.prototype.setSelectedIndex = function(n, i) {
      i === void 0 && (i = {}), this.isIndexValid(n) && (this.isCheckboxList ? this.setCheckboxAtIndex(n, i) : this.isRadioList ? this.setRadioAtIndex(n, i) : this.setSingleSelectionAtIndex(n, i));
    }, e.prototype.handleFocusIn = function(n) {
      n >= 0 && (this.focusedItemIndex = n, this.adapter.setAttributeForElementIndex(n, "tabindex", "0"), this.adapter.setTabIndexForListItemChildren(n, "0"));
    }, e.prototype.handleFocusOut = function(n) {
      var i = this;
      n >= 0 && (this.adapter.setAttributeForElementIndex(n, "tabindex", "-1"), this.adapter.setTabIndexForListItemChildren(n, "-1")), setTimeout(function() {
        i.adapter.isFocusInsideList() || i.setTabindexToFirstSelectedOrFocusedItem();
      }, 0);
    }, e.prototype.isIndexDisabled = function(n) {
      return this.adapter.listItemAtIndexHasClass(n, ze.LIST_ITEM_DISABLED_CLASS);
    }, e.prototype.handleKeydown = function(n, i, r) {
      var a = this, o, u = yt(n) === "ArrowLeft", l = yt(n) === "ArrowUp", c = yt(n) === "ArrowRight", d = yt(n) === "ArrowDown", h = yt(n) === "Home", f = yt(n) === "End", v = yt(n) === "Enter", p = yt(n) === "Spacebar", g = this.isVertical && d || !this.isVertical && c, _ = this.isVertical && l || !this.isVertical && u, C = n.key === "A" || n.key === "a", x = jl(n);
      if (this.adapter.isRootFocused()) {
        if ((_ || f) && x([]))
          n.preventDefault(), this.focusLastElement();
        else if ((g || h) && x([]))
          n.preventDefault(), this.focusFirstElement();
        else if (_ && x(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var S = this.focusLastElement();
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        } else if (g && x(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var S = this.focusFirstElement();
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        }
        if (this.hasTypeahead) {
          var b = {
            event: n,
            focusItemAtIndex: function(T) {
              a.focusItemAtIndex(T);
            },
            focusedItemIndex: -1,
            isTargetListItem: i,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(T) {
              return a.isIndexDisabled(T);
            }
          };
          Gl(b, this.typeaheadState);
        }
        return;
      }
      var E = this.adapter.getFocusedElementIndex();
      if (!(E === -1 && (E = r, E < 0))) {
        if (g && x([]))
          _n(n), this.focusNextElement(E);
        else if (_ && x([]))
          _n(n), this.focusPrevElement(E);
        else if (g && x(["Shift"]) && this.isCheckboxList) {
          _n(n);
          var S = this.focusNextElement(E);
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        } else if (_ && x(["Shift"]) && this.isCheckboxList) {
          _n(n);
          var S = this.focusPrevElement(E);
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        } else if (h && x([]))
          _n(n), this.focusFirstElement();
        else if (f && x([]))
          _n(n), this.focusLastElement();
        else if (h && x(["Control", "Shift"]) && this.isCheckboxList) {
          if (_n(n), this.isIndexDisabled(E))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, E, E);
        } else if (f && x(["Control", "Shift"]) && this.isCheckboxList) {
          if (_n(n), this.isIndexDisabled(E))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(E, this.adapter.getListItemCount() - 1, E);
        } else if (C && x(["Control"]) && this.isCheckboxList)
          n.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === Ct.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((v || p) && x([])) {
          if (i) {
            var y = n.target;
            if (y && y.tagName === "A" && v || (_n(n), this.isIndexDisabled(E)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(E, !1), this.adapter.notifyAction(E));
          }
        } else if ((v || p) && x(["Shift"]) && this.isCheckboxList) {
          var y = n.target;
          if (y && y.tagName === "A" && v || (_n(n), this.isIndexDisabled(E)))
            return;
          this.isTypeaheadInProgress() || (this.toggleCheckboxRange((o = this.lastSelectedIndex) !== null && o !== void 0 ? o : E, E, E), this.adapter.notifyAction(E));
        }
        if (this.hasTypeahead) {
          var b = {
            event: n,
            focusItemAtIndex: function(A) {
              a.focusItemAtIndex(A);
            },
            focusedItemIndex: this.focusedItemIndex,
            isTargetListItem: i,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(A) {
              return a.isIndexDisabled(A);
            }
          };
          Gl(b, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(n, i, r) {
      var a, o = jl(r);
      n !== Ct.UNSET_INDEX && (this.isIndexDisabled(n) || (o([]) ? (this.isSelectableList() && this.setSelectedIndexOnAction(n, i), this.adapter.notifyAction(n)) : this.isCheckboxList && o(["Shift"]) && (this.toggleCheckboxRange((a = this.lastSelectedIndex) !== null && a !== void 0 ? a : n, n, n), this.adapter.notifyAction(n))));
    }, e.prototype.focusNextElement = function(n) {
      var i = this.adapter.getListItemCount(), r = n, a = null;
      do {
        if (r++, r >= i)
          if (this.wrapFocus)
            r = 0;
          else
            return n;
        if (r === a)
          return -1;
        a = a ?? r;
      } while (!this.areDisabledItemsFocusable && this.isIndexDisabled(r));
      return this.focusItemAtIndex(r), r;
    }, e.prototype.focusPrevElement = function(n) {
      var i = this.adapter.getListItemCount(), r = n, a = null;
      do {
        if (r--, r < 0)
          if (this.wrapFocus)
            r = i - 1;
          else
            return n;
        if (r === a)
          return -1;
        a = a ?? r;
      } while (!this.areDisabledItemsFocusable && this.isIndexDisabled(r));
      return this.focusItemAtIndex(r), r;
    }, e.prototype.focusFirstElement = function() {
      return this.focusNextElement(-1);
    }, e.prototype.focusLastElement = function() {
      return this.focusPrevElement(this.adapter.getListItemCount());
    }, e.prototype.focusInitialElement = function() {
      var n = this.getFirstSelectedOrFocusedItemIndex();
      return this.focusItemAtIndex(n), n;
    }, e.prototype.setEnabled = function(n, i) {
      this.isIndexValid(n, !1) && (i ? (this.adapter.removeClassForElementIndex(n, ze.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, hi.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(n, ze.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, hi.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(n, i) {
      if (i === void 0 && (i = {}), !(this.selectedIndex === n && !i.forceUpdate)) {
        var r = ze.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (r = ze.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== Ct.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, r), this.setAriaForSingleSelectionAtIndex(n), this.setTabindexAtIndex(n), n !== Ct.UNSET_INDEX && this.adapter.addClassForElementIndex(n, r), this.selectedIndex = n, i.isUserInteraction && !i.forceUpdate && this.adapter.notifySelectionChange([n]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(n) {
      this.selectedIndex === Ct.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(n, hi.ARIA_CURRENT));
      var i = this.ariaCurrentAttrValue !== null, r = i ? hi.ARIA_CURRENT : hi.ARIA_SELECTED;
      if (this.selectedIndex !== Ct.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, r, "false"), n !== Ct.UNSET_INDEX) {
        var a = i ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(n, r, a);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? hi.ARIA_SELECTED : hi.ARIA_CHECKED;
    }, e.prototype.setRadioAtIndex = function(n, i) {
      i === void 0 && (i = {});
      var r = this.getSelectionAttribute();
      this.adapter.setCheckedCheckboxOrRadioAtIndex(n, !0), !(this.selectedIndex === n && !i.forceUpdate) && (this.selectedIndex !== Ct.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, r, "false"), this.adapter.setAttributeForElementIndex(n, r, "true"), this.selectedIndex = n, i.isUserInteraction && !i.forceUpdate && this.adapter.notifySelectionChange([n]));
    }, e.prototype.setCheckboxAtIndex = function(n, i) {
      i === void 0 && (i = {});
      for (var r = this.selectedIndex, a = i.isUserInteraction ? new Set(r === Ct.UNSET_INDEX ? [] : r) : null, o = this.getSelectionAttribute(), u = [], l = 0; l < this.adapter.getListItemCount(); l++) {
        var c = a == null ? void 0 : a.has(l), d = n.indexOf(l) >= 0;
        d !== c && u.push(l), this.adapter.setCheckedCheckboxOrRadioAtIndex(l, d), this.adapter.setAttributeForElementIndex(l, o, d ? "true" : "false");
      }
      this.selectedIndex = n, i.isUserInteraction && u.length && this.adapter.notifySelectionChange(u);
    }, e.prototype.toggleCheckboxRange = function(n, i, r) {
      this.lastSelectedIndex = r;
      for (var a = new Set(this.selectedIndex === Ct.UNSET_INDEX ? [] : this.selectedIndex), o = !(a != null && a.has(r)), u = Vr([n, i].sort(), 2), l = u[0], c = u[1], d = this.getSelectionAttribute(), h = [], f = l; f <= c; f++)
        if (!this.isIndexDisabled(f)) {
          var v = a.has(f);
          o !== v && (h.push(f), this.adapter.setCheckedCheckboxOrRadioAtIndex(f, o), this.adapter.setAttributeForElementIndex(f, d, "" + o), o ? a.add(f) : a.delete(f));
        }
      h.length && (this.selectedIndex = Ai([], Vr(a)), this.adapter.notifySelectionChange(h));
    }, e.prototype.setTabindexAtIndex = function(n) {
      this.focusedItemIndex === Ct.UNSET_INDEX && n !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== n && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== n && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), n !== Ct.UNSET_INDEX && this.adapter.setAttributeForElementIndex(n, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var n = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(n);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== Ct.UNSET_INDEX ? this.selectedIndex : Ap(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(n, i) {
        return Math.min(n, i);
      }) : 0 : Math.max(this.focusedItemIndex, 0);
    }, e.prototype.isIndexValid = function(n, i) {
      var r = this;
      if (i === void 0 && (i = !0), n instanceof Array) {
        if (!this.isCheckboxList && i)
          throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
        return n.length === 0 ? !0 : n.some(function(a) {
          return r.isIndexInRange(a);
        });
      } else if (typeof n == "number") {
        if (this.isCheckboxList && i)
          throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + n);
        return this.isIndexInRange(n) || this.isSingleSelectionList && n === Ct.UNSET_INDEX;
      } else
        return !1;
    }, e.prototype.isIndexInRange = function(n) {
      var i = this.adapter.getListItemCount();
      return n >= 0 && n < i;
    }, e.prototype.setSelectedIndexOnAction = function(n, i) {
      this.lastSelectedIndex = n, this.isCheckboxList ? (this.toggleCheckboxAtIndex(n, i), this.adapter.notifySelectionChange([n])) : this.setSelectedIndex(n, { isUserInteraction: !0 });
    }, e.prototype.toggleCheckboxAtIndex = function(n, i) {
      var r = this.getSelectionAttribute(), a = this.adapter.isCheckboxCheckedAtIndex(n), o;
      i ? o = a : (o = !a, this.adapter.setCheckedCheckboxOrRadioAtIndex(n, o)), this.adapter.setAttributeForElementIndex(n, r, o ? "true" : "false");
      var u = this.selectedIndex === Ct.UNSET_INDEX ? [] : this.selectedIndex.slice();
      o ? u.push(n) : u = u.filter(function(l) {
        return l !== n;
      }), this.selectedIndex = u;
    }, e.prototype.focusItemAtIndex = function(n) {
      this.adapter.focusItemAtIndex(n), this.focusedItemIndex = n;
    }, e.prototype.checkboxListToggleAll = function(n, i) {
      var r = this.adapter.getListItemCount();
      if (n.length === r)
        this.setCheckboxAtIndex([], { isUserInteraction: i });
      else {
        for (var a = [], o = 0; o < r; o++)
          (!this.isIndexDisabled(o) || n.indexOf(o) > -1) && a.push(o);
        this.setCheckboxAtIndex(a, { isUserInteraction: i });
      }
    }, e.prototype.typeaheadMatchItem = function(n, i, r) {
      var a = this;
      r === void 0 && (r = !1);
      var o = {
        focusItemAtIndex: function(u) {
          a.focusItemAtIndex(u);
        },
        focusedItemIndex: i || this.focusedItemIndex,
        nextChar: n,
        sortedIndexByFirstChar: this.sortedIndexByFirstChar,
        skipFocus: r,
        isItemAtIndexDisabled: function(u) {
          return a.isIndexDisabled(u);
        }
      };
      return gs(o, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return _p(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      Nc(this.typeaheadState);
    }, e;
  }(Dt)
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Fc = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      var i = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return i.isSurfaceOpen = !1, i.isQuickOpen = !1, i.isHoistedElement = !1, i.isFixedPosition = !1, i.isHorizontallyCenteredOnViewport = !1, i.maxHeight = 0, i.openBottomBias = 0, i.openAnimationEndTimerId = 0, i.closeAnimationEndTimerId = 0, i.animationRequestId = 0, i.anchorCorner = $i.TOP_START, i.originCorner = $i.TOP_START, i.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, i.position = { x: 0, y: 0 }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return gp;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return bp;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return aa;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "Corner", {
      get: function() {
        return $i;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * @see {@link MDCMenuSurfaceAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !1;
          },
          hasAnchor: function() {
            return !1;
          },
          isElementInContainer: function() {
            return !1;
          },
          isFocused: function() {
            return !1;
          },
          isRtl: function() {
            return !1;
          },
          getInnerDimensions: function() {
            return { height: 0, width: 0 };
          },
          getAnchorDimensions: function() {
            return null;
          },
          getWindowDimensions: function() {
            return { height: 0, width: 0 };
          },
          getBodyDimensions: function() {
            return { height: 0, width: 0 };
          },
          getWindowScroll: function() {
            return { x: 0, y: 0 };
          },
          setPosition: function() {
          },
          setMaxHeight: function() {
          },
          setTransformOrigin: function() {
          },
          saveFocus: function() {
          },
          restoreFocus: function() {
          },
          notifyClose: function() {
          },
          notifyClosing: function() {
          },
          notifyOpen: function() {
          },
          notifyOpening: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var n = e.cssClasses, i = n.ROOT, r = n.OPEN;
      if (!this.adapter.hasClass(i))
        throw new Error(i + " class required in root element.");
      this.adapter.hasClass(r) && (this.isSurfaceOpen = !0);
    }, e.prototype.destroy = function() {
      clearTimeout(this.openAnimationEndTimerId), clearTimeout(this.closeAnimationEndTimerId), cancelAnimationFrame(this.animationRequestId);
    }, e.prototype.setAnchorCorner = function(n) {
      this.anchorCorner = n;
    }, e.prototype.flipCornerHorizontally = function() {
      this.originCorner = this.originCorner ^ St.RIGHT;
    }, e.prototype.setAnchorMargin = function(n) {
      this.anchorMargin.top = n.top || 0, this.anchorMargin.right = n.right || 0, this.anchorMargin.bottom = n.bottom || 0, this.anchorMargin.left = n.left || 0;
    }, e.prototype.setIsHoisted = function(n) {
      this.isHoistedElement = n;
    }, e.prototype.setFixedPosition = function(n) {
      this.isFixedPosition = n;
    }, e.prototype.isFixed = function() {
      return this.isFixedPosition;
    }, e.prototype.setAbsolutePosition = function(n, i) {
      this.position.x = this.isFinite(n) ? n : 0, this.position.y = this.isFinite(i) ? i : 0;
    }, e.prototype.setIsHorizontallyCenteredOnViewport = function(n) {
      this.isHorizontallyCenteredOnViewport = n;
    }, e.prototype.setQuickOpen = function(n) {
      this.isQuickOpen = n;
    }, e.prototype.setMaxHeight = function(n) {
      this.maxHeight = n;
    }, e.prototype.setOpenBottomBias = function(n) {
      this.openBottomBias = n;
    }, e.prototype.isOpen = function() {
      return this.isSurfaceOpen;
    }, e.prototype.open = function() {
      var n = this;
      this.isSurfaceOpen || (this.adapter.notifyOpening(), this.adapter.saveFocus(), this.isQuickOpen ? (this.isSurfaceOpen = !0, this.adapter.addClass(e.cssClasses.OPEN), this.dimensions = this.adapter.getInnerDimensions(), this.autoposition(), this.adapter.notifyOpen()) : (this.adapter.addClass(e.cssClasses.ANIMATING_OPEN), this.animationRequestId = requestAnimationFrame(function() {
        n.dimensions = n.adapter.getInnerDimensions(), n.autoposition(), n.adapter.addClass(e.cssClasses.OPEN), n.openAnimationEndTimerId = setTimeout(function() {
          n.openAnimationEndTimerId = 0, n.adapter.removeClass(e.cssClasses.ANIMATING_OPEN), n.adapter.notifyOpen();
        }, aa.TRANSITION_OPEN_DURATION);
      }), this.isSurfaceOpen = !0));
    }, e.prototype.close = function(n) {
      var i = this;
      if (n === void 0 && (n = !1), !!this.isSurfaceOpen) {
        if (this.adapter.notifyClosing(), this.isQuickOpen) {
          this.isSurfaceOpen = !1, n || this.maybeRestoreFocus(), this.adapter.removeClass(e.cssClasses.OPEN), this.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW), this.adapter.notifyClose();
          return;
        }
        this.adapter.addClass(e.cssClasses.ANIMATING_CLOSED), requestAnimationFrame(function() {
          i.adapter.removeClass(e.cssClasses.OPEN), i.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW), i.closeAnimationEndTimerId = setTimeout(function() {
            i.closeAnimationEndTimerId = 0, i.adapter.removeClass(e.cssClasses.ANIMATING_CLOSED), i.adapter.notifyClose();
          }, aa.TRANSITION_CLOSE_DURATION);
        }), this.isSurfaceOpen = !1, n || this.maybeRestoreFocus();
      }
    }, e.prototype.handleBodyClick = function(n) {
      var i = n.target;
      this.adapter.isElementInContainer(i) || this.close();
    }, e.prototype.handleKeydown = function(n) {
      var i = n.keyCode, r = n.key, a = r === "Escape" || i === 27;
      a && this.close();
    }, e.prototype.autoposition = function() {
      var n;
      this.measurements = this.getAutoLayoutmeasurements();
      var i = this.getoriginCorner(), r = this.getMenuSurfaceMaxHeight(i), a = this.hasBit(i, St.BOTTOM) ? "bottom" : "top", o = this.hasBit(i, St.RIGHT) ? "right" : "left", u = this.getHorizontalOriginOffset(i), l = this.getVerticalOriginOffset(i), c = this.measurements, d = c.anchorSize, h = c.surfaceSize, f = (n = {}, n[o] = u, n[a] = l, n);
      d.width / h.width > aa.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (o = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(f), this.adapter.setTransformOrigin(o + " " + a), this.adapter.setPosition(f), this.adapter.setMaxHeight(r ? r + "px" : ""), this.hasBit(i, St.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
    }, e.prototype.getAutoLayoutmeasurements = function() {
      var n = this.adapter.getAnchorDimensions(), i = this.adapter.getBodyDimensions(), r = this.adapter.getWindowDimensions(), a = this.adapter.getWindowScroll();
      return n || (n = {
        top: this.position.y,
        right: this.position.x,
        bottom: this.position.y,
        left: this.position.x,
        width: 0,
        height: 0
      }), {
        anchorSize: n,
        bodySize: i,
        surfaceSize: this.dimensions,
        viewportDistance: {
          // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
          top: n.top,
          right: r.width - n.right,
          bottom: r.height - n.bottom,
          left: n.left
          // tslint:enable:object-literal-sort-keys
        },
        viewportSize: r,
        windowScroll: a
      };
    }, e.prototype.getoriginCorner = function() {
      var n = this.originCorner, i = this.measurements, r = i.viewportDistance, a = i.anchorSize, o = i.surfaceSize, u = e.numbers.MARGIN_TO_EDGE, l = this.hasBit(this.anchorCorner, St.BOTTOM), c, d;
      l ? (c = r.top - u + this.anchorMargin.bottom, d = r.bottom - u - this.anchorMargin.bottom) : (c = r.top - u + this.anchorMargin.top, d = r.bottom - u + a.height - this.anchorMargin.top);
      var h = d - o.height > 0;
      !h && c > d + this.openBottomBias && (n = this.setBit(n, St.BOTTOM));
      var f = this.adapter.isRtl(), v = this.hasBit(this.anchorCorner, St.FLIP_RTL), p = this.hasBit(this.anchorCorner, St.RIGHT) || this.hasBit(n, St.RIGHT), g = !1;
      f && v ? g = !p : g = p;
      var _, C;
      g ? (_ = r.left + a.width + this.anchorMargin.right, C = r.right - this.anchorMargin.right) : (_ = r.left + this.anchorMargin.left, C = r.right + a.width - this.anchorMargin.left);
      var x = _ - o.width > 0, S = C - o.width > 0, b = this.hasBit(n, St.FLIP_RTL) && this.hasBit(n, St.RIGHT);
      return S && b && f || !x && b ? n = this.unsetBit(n, St.RIGHT) : (x && g && f || x && !g && p || !S && _ >= C) && (n = this.setBit(n, St.RIGHT)), n;
    }, e.prototype.getMenuSurfaceMaxHeight = function(n) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var i = this.measurements.viewportDistance, r = 0, a = this.hasBit(n, St.BOTTOM), o = this.hasBit(this.anchorCorner, St.BOTTOM), u = e.numbers.MARGIN_TO_EDGE;
      return a ? (r = i.top + this.anchorMargin.top - u, o || (r += this.measurements.anchorSize.height)) : (r = i.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - u, o && (r -= this.measurements.anchorSize.height)), r;
    }, e.prototype.getHorizontalOriginOffset = function(n) {
      var i = this.measurements.anchorSize, r = this.hasBit(n, St.RIGHT), a = this.hasBit(this.anchorCorner, St.RIGHT);
      if (r) {
        var o = a ? i.width - this.anchorMargin.left : this.anchorMargin.right;
        return this.isHoistedElement || this.isFixedPosition ? o - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : o;
      }
      return a ? i.width - this.anchorMargin.right : this.anchorMargin.left;
    }, e.prototype.getVerticalOriginOffset = function(n) {
      var i = this.measurements.anchorSize, r = this.hasBit(n, St.BOTTOM), a = this.hasBit(this.anchorCorner, St.BOTTOM), o = 0;
      return r ? o = a ? i.height - this.anchorMargin.top : -this.anchorMargin.bottom : o = a ? i.height + this.anchorMargin.bottom : this.anchorMargin.top, o;
    }, e.prototype.adjustPositionForHoistedElement = function(n) {
      var i, r, a = this.measurements, o = a.windowScroll, u = a.viewportDistance, l = a.surfaceSize, c = a.viewportSize, d = Object.keys(n);
      try {
        for (var h = Mt(d), f = h.next(); !f.done; f = h.next()) {
          var v = f.value, p = n[v] || 0;
          if (this.isHorizontallyCenteredOnViewport && (v === "left" || v === "right")) {
            n[v] = (c.width - l.width) / 2;
            continue;
          }
          p += u[v], this.isFixedPosition || (v === "top" ? p += o.y : v === "bottom" ? p -= o.y : v === "left" ? p += o.x : p -= o.x), n[v] = p;
        }
      } catch (g) {
        i = { error: g };
      } finally {
        try {
          f && !f.done && (r = h.return) && r.call(h);
        } finally {
          if (i) throw i.error;
        }
      }
    }, e.prototype.maybeRestoreFocus = function() {
      var n = this, i = this.adapter.isFocused(), r = this.adapter.getOwnerDocument ? this.adapter.getOwnerDocument() : document, a = r.activeElement && this.adapter.isElementInContainer(r.activeElement);
      (i || a) && setTimeout(function() {
        n.adapter.restoreFocus();
      }, aa.TOUCH_EVENT_WAIT_MS);
    }, e.prototype.hasBit = function(n, i) {
      return !!(n & i);
    }, e.prototype.setBit = function(n, i) {
      return n | i;
    }, e.prototype.unsetBit = function(n, i) {
      return n ^ i;
    }, e.prototype.isFinite = function(n) {
      return typeof n == "number" && isFinite(n);
    }, e;
  }(Dt)
);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Wl = {
  animation: {
    prefixed: "-webkit-animation",
    standard: "animation"
  },
  transform: {
    prefixed: "-webkit-transform",
    standard: "transform"
  },
  transition: {
    prefixed: "-webkit-transition",
    standard: "transition"
  }
};
function Tp(t) {
  return !!t.document && typeof t.document.createElement == "function";
}
function Lp(t, e) {
  if (Tp(t) && e in Wl) {
    var n = t.document.createElement("div"), i = Wl[e], r = i.standard, a = i.prefixed, o = r in n.style;
    return o ? r : a;
  }
  return e;
}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Lr = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
}, Ir = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected",
  SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
}, Op = {
  FOCUS_ROOT_INDEX: -1
}, Cr;
(function(t) {
  t[t.NONE = 0] = "NONE", t[t.LIST_ROOT = 1] = "LIST_ROOT", t[t.FIRST_ITEM = 2] = "FIRST_ITEM", t[t.LAST_ITEM = 3] = "LAST_ITEM";
})(Cr || (Cr = {}));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var wp = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      var i = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return i.closeAnimationEndTimerId = 0, i.defaultFocusState = Cr.LIST_ROOT, i.selectedIndex = -1, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Lr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Ir;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Op;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * @see {@link MDCMenuAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClassToElementAtIndex: function() {
          },
          removeClassFromElementAtIndex: function() {
          },
          addAttributeToElementAtIndex: function() {
          },
          removeAttributeFromElementAtIndex: function() {
          },
          getAttributeFromElementAtIndex: function() {
            return null;
          },
          elementContainsClass: function() {
            return !1;
          },
          closeSurface: function() {
          },
          getElementIndex: function() {
            return -1;
          },
          notifySelected: function() {
          },
          getMenuItemCount: function() {
            return 0;
          },
          focusItemAtIndex: function() {
          },
          focusListRoot: function() {
          },
          getSelectedSiblingOfItemAtIndex: function() {
            return -1;
          },
          isSelectableItemAtIndex: function() {
            return !1;
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.destroy = function() {
      this.closeAnimationEndTimerId && clearTimeout(this.closeAnimationEndTimerId), this.adapter.closeSurface();
    }, e.prototype.handleKeydown = function(n) {
      var i = n.key, r = n.keyCode, a = i === "Tab" || r === 9;
      a && this.adapter.closeSurface(
        /** skipRestoreFocus */
        !0
      );
    }, e.prototype.handleItemAction = function(n) {
      var i = this, r = this.adapter.getElementIndex(n);
      if (!(r < 0)) {
        this.adapter.notifySelected({ index: r });
        var a = this.adapter.getAttributeFromElementAtIndex(r, Ir.SKIP_RESTORE_FOCUS) === "true";
        this.adapter.closeSurface(a), this.closeAnimationEndTimerId = setTimeout(function() {
          var o = i.adapter.getElementIndex(n);
          o >= 0 && i.adapter.isSelectableItemAtIndex(o) && i.setSelectedIndex(o);
        }, Fc.numbers.TRANSITION_CLOSE_DURATION);
      }
    }, e.prototype.handleMenuSurfaceOpened = function() {
      switch (this.defaultFocusState) {
        case Cr.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case Cr.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case Cr.NONE:
          break;
        default:
          this.adapter.focusListRoot();
          break;
      }
    }, e.prototype.setDefaultFocusState = function(n) {
      this.defaultFocusState = n;
    }, e.prototype.getSelectedIndex = function() {
      return this.selectedIndex;
    }, e.prototype.setSelectedIndex = function(n) {
      if (this.validatedIndex(n), !this.adapter.isSelectableItemAtIndex(n))
        throw new Error("MDCMenuFoundation: No selection group at specified index.");
      var i = this.adapter.getSelectedSiblingOfItemAtIndex(n);
      i >= 0 && (this.adapter.removeAttributeFromElementAtIndex(i, Ir.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(i, Lr.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(n, Lr.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(n, Ir.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = n;
    }, e.prototype.setEnabled = function(n, i) {
      this.validatedIndex(n), i ? (this.adapter.removeClassFromElementAtIndex(n, ze.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, Ir.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(n, ze.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, Ir.ARIA_DISABLED_ATTR, "true"));
    }, e.prototype.validatedIndex = function(n) {
      var i = this.adapter.getMenuItemCount(), r = n >= 0 && n < i;
      if (!r)
        throw new Error("MDCMenuFoundation: No list item at specified index.");
    }, e;
  }(Dt)
);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var gt = {
  ACTIVATED: "mdc-select--activated",
  DISABLED: "mdc-select--disabled",
  FOCUSED: "mdc-select--focused",
  INVALID: "mdc-select--invalid",
  MENU_INVALID: "mdc-select__menu--invalid",
  OUTLINED: "mdc-select--outlined",
  REQUIRED: "mdc-select--required",
  ROOT: "mdc-select",
  WITH_LEADING_ICON: "mdc-select--with-leading-icon"
}, Wo = {
  ARIA_CONTROLS: "aria-controls",
  ARIA_DESCRIBEDBY: "aria-describedby",
  ARIA_SELECTED_ATTR: "aria-selected",
  CHANGE_EVENT: "MDCSelect:change",
  HIDDEN_INPUT_SELECTOR: 'input[type="hidden"]',
  LABEL_SELECTOR: ".mdc-floating-label",
  LEADING_ICON_SELECTOR: ".mdc-select__icon",
  LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
  MENU_SELECTOR: ".mdc-select__menu",
  OUTLINE_SELECTOR: ".mdc-notched-outline",
  SELECTED_TEXT_SELECTOR: ".mdc-select__selected-text",
  SELECT_ANCHOR_SELECTOR: ".mdc-select__anchor",
  VALUE_ATTR: "data-value"
}, Vi = {
  LABEL_SCALE: 0.75,
  UNSET_INDEX: -1,
  CLICK_DEBOUNCE_TIMEOUT_MS: 330
};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Rp = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n, i) {
      i === void 0 && (i = {});
      var r = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return r.disabled = !1, r.isMenuOpen = !1, r.useDefaultValidation = !0, r.customValidity = !0, r.lastSelectedIndex = Vi.UNSET_INDEX, r.clickDebounceTimeout = 0, r.recentlyClicked = !1, r.leadingIcon = i.leadingIcon, r.helperText = i.helperText, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return gt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Vi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Wo;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCSelectAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !1;
          },
          activateBottomLine: function() {
          },
          deactivateBottomLine: function() {
          },
          getSelectedIndex: function() {
            return -1;
          },
          setSelectedIndex: function() {
          },
          hasLabel: function() {
            return !1;
          },
          floatLabel: function() {
          },
          getLabelWidth: function() {
            return 0;
          },
          setLabelRequired: function() {
          },
          hasOutline: function() {
            return !1;
          },
          notchOutline: function() {
          },
          closeOutline: function() {
          },
          setRippleCenter: function() {
          },
          notifyChange: function() {
          },
          setSelectedText: function() {
          },
          isSelectAnchorFocused: function() {
            return !1;
          },
          getSelectAnchorAttr: function() {
            return "";
          },
          setSelectAnchorAttr: function() {
          },
          removeSelectAnchorAttr: function() {
          },
          addMenuClass: function() {
          },
          removeMenuClass: function() {
          },
          openMenu: function() {
          },
          closeMenu: function() {
          },
          getAnchorElement: function() {
            return null;
          },
          setMenuAnchorElement: function() {
          },
          setMenuAnchorCorner: function() {
          },
          setMenuWrapFocus: function() {
          },
          focusMenuItemAtIndex: function() {
          },
          getMenuItemCount: function() {
            return 0;
          },
          getMenuItemValues: function() {
            return [];
          },
          getMenuItemTextAtIndex: function() {
            return "";
          },
          isTypeaheadInProgress: function() {
            return !1;
          },
          typeaheadMatchItem: function() {
            return -1;
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.getSelectedIndex = function() {
      return this.adapter.getSelectedIndex();
    }, e.prototype.setSelectedIndex = function(n, i, r) {
      i === void 0 && (i = !1), r === void 0 && (r = !1), !(n >= this.adapter.getMenuItemCount()) && (n === Vi.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(n).trim()), this.adapter.setSelectedIndex(n), i && this.adapter.closeMenu(), !r && this.lastSelectedIndex !== n && this.handleChange(), this.lastSelectedIndex = n);
    }, e.prototype.setValue = function(n, i) {
      i === void 0 && (i = !1);
      var r = this.adapter.getMenuItemValues().indexOf(n);
      this.setSelectedIndex(
        r,
        /** closeMenu */
        !1,
        i
      );
    }, e.prototype.getValue = function() {
      var n = this.adapter.getSelectedIndex(), i = this.adapter.getMenuItemValues();
      return n !== Vi.UNSET_INDEX ? i[n] : "";
    }, e.prototype.getDisabled = function() {
      return this.disabled;
    }, e.prototype.setDisabled = function(n) {
      this.disabled = n, this.disabled ? (this.adapter.addClass(gt.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(gt.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
    }, e.prototype.openMenu = function() {
      this.adapter.addClass(gt.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true");
    }, e.prototype.setHelperTextContent = function(n) {
      this.helperText && this.helperText.setContent(n);
    }, e.prototype.layout = function() {
      if (this.adapter.hasLabel()) {
        var n = this.getValue().length > 0, i = this.adapter.hasClass(gt.FOCUSED), r = n || i, a = this.adapter.hasClass(gt.REQUIRED);
        this.notchOutline(r), this.adapter.floatLabel(r), this.adapter.setLabelRequired(a);
      }
    }, e.prototype.layoutOptions = function() {
      var n = this.adapter.getMenuItemValues(), i = n.indexOf(this.getValue());
      this.setSelectedIndex(
        i,
        /** closeMenu */
        !1,
        /** skipNotify */
        !0
      );
    }, e.prototype.handleMenuOpened = function() {
      if (this.adapter.getMenuItemValues().length !== 0) {
        var n = this.getSelectedIndex(), i = n >= 0 ? n : 0;
        this.adapter.focusMenuItemAtIndex(i);
      }
    }, e.prototype.handleMenuClosing = function() {
      this.adapter.setSelectAnchorAttr("aria-expanded", "false");
    }, e.prototype.handleMenuClosed = function() {
      this.adapter.removeClass(gt.ACTIVATED), this.isMenuOpen = !1, this.adapter.isSelectAnchorFocused() || this.blur();
    }, e.prototype.handleChange = function() {
      this.layout(), this.adapter.notifyChange(this.getValue());
      var n = this.adapter.hasClass(gt.REQUIRED);
      n && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.handleMenuItemAction = function(n) {
      this.setSelectedIndex(
        n,
        /** closeMenu */
        !0
      );
    }, e.prototype.handleFocus = function() {
      this.adapter.addClass(gt.FOCUSED), this.layout(), this.adapter.activateBottomLine();
    }, e.prototype.handleBlur = function() {
      this.isMenuOpen || this.blur();
    }, e.prototype.handleClick = function(n) {
      if (!(this.disabled || this.recentlyClicked)) {
        if (this.setClickDebounceTimeout(), this.isMenuOpen) {
          this.adapter.closeMenu();
          return;
        }
        this.adapter.setRippleCenter(n), this.openMenu();
      }
    }, e.prototype.handleKeydown = function(n) {
      if (!(this.isMenuOpen || !this.adapter.hasClass(gt.FOCUSED))) {
        var i = yt(n) === Me.ENTER, r = yt(n) === Me.SPACEBAR, a = yt(n) === Me.ARROW_UP, o = yt(n) === Me.ARROW_DOWN, u = n.ctrlKey || n.metaKey;
        if (!u && (!r && n.key && n.key.length === 1 || r && this.adapter.isTypeaheadInProgress())) {
          var l = r ? " " : n.key, c = this.adapter.typeaheadMatchItem(l, this.getSelectedIndex());
          c >= 0 && this.setSelectedIndex(c), n.preventDefault();
          return;
        }
        !i && !r && !a && !o || (this.openMenu(), n.preventDefault());
      }
    }, e.prototype.notchOutline = function(n) {
      if (this.adapter.hasOutline()) {
        var i = this.adapter.hasClass(gt.FOCUSED);
        if (n) {
          var r = Vi.LABEL_SCALE, a = this.adapter.getLabelWidth() * r;
          this.adapter.notchOutline(a);
        } else i || this.adapter.closeOutline();
      }
    }, e.prototype.setLeadingIconAriaLabel = function(n) {
      this.leadingIcon && this.leadingIcon.setAriaLabel(n);
    }, e.prototype.setLeadingIconContent = function(n) {
      this.leadingIcon && this.leadingIcon.setContent(n);
    }, e.prototype.getUseDefaultValidation = function() {
      return this.useDefaultValidation;
    }, e.prototype.setUseDefaultValidation = function(n) {
      this.useDefaultValidation = n;
    }, e.prototype.setValid = function(n) {
      this.useDefaultValidation || (this.customValidity = n), this.adapter.setSelectAnchorAttr("aria-invalid", (!n).toString()), n ? (this.adapter.removeClass(gt.INVALID), this.adapter.removeMenuClass(gt.MENU_INVALID)) : (this.adapter.addClass(gt.INVALID), this.adapter.addMenuClass(gt.MENU_INVALID)), this.syncHelperTextValidity(n);
    }, e.prototype.isValid = function() {
      return this.useDefaultValidation && this.adapter.hasClass(gt.REQUIRED) && !this.adapter.hasClass(gt.DISABLED) ? this.getSelectedIndex() !== Vi.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(n) {
      n ? this.adapter.addClass(gt.REQUIRED) : this.adapter.removeClass(gt.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", n.toString()), this.adapter.setLabelRequired(n);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var n = this.adapter.getAnchorElement();
      n && (this.adapter.setMenuAnchorElement(n), this.adapter.setMenuAnchorCorner($i.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(gt.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(gt.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(gt.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var n = this.adapter.hasClass(gt.REQUIRED);
      n && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.syncHelperTextValidity = function(n) {
      if (this.helperText) {
        this.helperText.setValidity(n);
        var i = this.helperText.isVisible(), r = this.helperText.getId();
        i && r ? this.adapter.setSelectAnchorAttr(Wo.ARIA_DESCRIBEDBY, r) : this.adapter.removeSelectAnchorAttr(Wo.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.setClickDebounceTimeout = function() {
      var n = this;
      clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout(function() {
        n.recentlyClicked = !1;
      }, Vi.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
    }, e;
  }(Dt)
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Gi = {
  ARIA_HIDDEN: "aria-hidden",
  ROLE: "role"
}, ei = {
  HELPER_TEXT_VALIDATION_MSG: "mdc-select-helper-text--validation-msg",
  HELPER_TEXT_VALIDATION_MSG_PERSISTENT: "mdc-select-helper-text--validation-msg-persistent"
};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Mp = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      return t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ei;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Gi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCSelectHelperTextAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !1;
          },
          setAttr: function() {
          },
          getAttr: function() {
            return null;
          },
          removeAttr: function() {
          },
          setContent: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.getId = function() {
      return this.adapter.getAttr("id");
    }, e.prototype.isVisible = function() {
      return this.adapter.getAttr(Gi.ARIA_HIDDEN) !== "true";
    }, e.prototype.setContent = function(n) {
      this.adapter.setContent(n);
    }, e.prototype.setValidation = function(n) {
      n ? this.adapter.addClass(ei.HELPER_TEXT_VALIDATION_MSG) : this.adapter.removeClass(ei.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.setValidationMsgPersistent = function(n) {
      n ? this.adapter.addClass(ei.HELPER_TEXT_VALIDATION_MSG_PERSISTENT) : this.adapter.removeClass(ei.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.getIsValidation = function() {
      return this.adapter.hasClass(ei.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.getIsValidationMsgPersistent = function() {
      return this.adapter.hasClass(ei.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.setValidity = function(n) {
      var i = this.adapter.hasClass(ei.HELPER_TEXT_VALIDATION_MSG);
      if (i) {
        var r = this.adapter.hasClass(ei.HELPER_TEXT_VALIDATION_MSG_PERSISTENT), a = !n || r;
        if (a) {
          this.showToScreenReader(), n ? this.adapter.removeAttr(Gi.ROLE) : this.adapter.setAttr(Gi.ROLE, "alert");
          return;
        }
        this.adapter.removeAttr(Gi.ROLE), this.hide();
      }
    }, e.prototype.showToScreenReader = function() {
      this.adapter.removeAttr(Gi.ARIA_HIDDEN);
    }, e.prototype.hide = function() {
      this.adapter.setAttr(Gi.ARIA_HIDDEN, "true");
    }, e;
  }(Dt)
), Dp = /* @__PURE__ */ ge("<div><!></div>");
function Pp(t, e) {
  we(e, !0);
  let n = m(e, "use", 19, () => []), i = m(e, "class", 3, ""), r = m(e, "style", 3, ""), a = m(e, "static", 3, !1), o = m(e, "anchor", 3, !0), u = m(e, "fixed", 3, !1), l = m(e, "open", 31, () => Ee(a())), c = m(e, "managed", 3, !1), d = m(e, "fullWidth", 3, !1), h = m(e, "quickOpen", 3, !1), f = m(e, "anchorElement", 15), v = m(e, "anchorMargin", 19, () => ({ top: 0, right: 0, bottom: 0, left: 0 })), p = m(e, "maxHeight", 3, 0), g = m(e, "horizontallyCenteredOnViewport", 3, !1), _ = m(e, "openBottomBias", 3, 0), C = m(e, "neverRestoreFocus", 3, !1), x = /* @__PURE__ */ Ve(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "static",
    "anchor",
    "fixed",
    "open",
    "managed",
    "fullWidth",
    "quickOpen",
    "anchorElement",
    "anchorCorner",
    "anchorMargin",
    "maxHeight",
    "horizontallyCenteredOnViewport",
    "openBottomBias",
    "neverRestoreFocus",
    "children"
  ]), S, b = /* @__PURE__ */ xe(void 0), E = Ee({}), y = Ee({}), T = /* @__PURE__ */ xe(void 0);
  te("SMUI:list:role", "menu"), te("SMUI:list:item:role", "menuitem"), Ae(() => {
    var V, oe;
    S && o() && !((V = S.parentElement) != null && V.classList.contains("mdc-menu-surface--anchor")) && ((oe = S.parentElement) == null || oe.classList.add("mdc-menu-surface--anchor"), f(S.parentElement ?? void 0));
  }), Ae(() => {
    s(b) && s(b).isOpen() !== l() && (l() ? s(b).open() : s(b).close());
  }), Ae(() => {
    s(b) && s(b).setQuickOpen(h());
  }), Ae(() => {
    s(b) && s(b).setFixedPosition(u());
  }), Ae(() => {
    s(b) && s(b).setMaxHeight(p());
  }), Ae(() => {
    s(b) && s(b).setIsHorizontallyCenteredOnViewport(g());
  });
  const A = $i;
  Ae(() => {
    s(b) && e.anchorCorner != null && (typeof e.anchorCorner == "string" ? s(b).setAnchorCorner(A[e.anchorCorner]) : s(b).setAnchorCorner(e.anchorCorner));
  }), Ae(() => {
    s(b) && s(b).setAnchorMargin(v());
  }), Ae(() => {
    s(b) && s(b).setOpenBottomBias(_());
  });
  const O = se("SMUI:menu-surface:mount"), B = se("SMUI:menu-surface:unmount");
  st(() => {
    ae(
      b,
      new Fc({
        addClass: G,
        removeClass: j,
        hasClass: Z,
        hasAnchor: () => !!f(),
        notifyClose: () => {
          c() || l(a()), l() || ke(L(), "SMUIMenuSurfaceClosed");
        },
        notifyClosing: () => {
          c() || l(a()), l() || ke(L(), "SMUIMenuSurfaceClosing");
        },
        notifyOpen: () => {
          c() || l(!0), l() && ke(L(), "SMUIMenuSurfaceOpened");
        },
        notifyOpening: () => {
          l() || ke(L(), "SMUIMenuSurfaceOpening");
        },
        isElementInContainer: (oe) => L().contains(oe),
        isRtl: () => getComputedStyle(L()).getPropertyValue("direction") === "rtl",
        setTransformOrigin: (oe) => {
          y["transform-origin"] = oe;
        },
        isFocused: () => document.activeElement === L(),
        saveFocus: () => {
          ae(T, document.activeElement ?? void 0, !0);
        },
        restoreFocus: () => {
          !C() && (!S || L().contains(document.activeElement)) && s(T) && document.contains(s(T)) && "focus" in s(T) && s(T).focus();
        },
        getInnerDimensions: () => ({
          width: L().offsetWidth,
          height: L().offsetHeight
        }),
        getAnchorDimensions: () => f() ? f().getBoundingClientRect() : null,
        getWindowDimensions: () => ({ width: window.innerWidth, height: window.innerHeight }),
        getBodyDimensions: () => ({
          width: document.body.clientWidth,
          height: document.body.clientHeight
        }),
        getWindowScroll: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
        setPosition: (oe) => {
          y.left = "left" in oe ? `${oe.left}px` : "", y.right = "right" in oe ? `${oe.right}px` : "", y.top = "top" in oe ? `${oe.top}px` : "", y.bottom = "bottom" in oe ? `${oe.bottom}px` : "";
        },
        setMaxHeight: (oe) => {
          y["max-height"] = oe;
        }
      }),
      !0
    );
    const V = {
      get open() {
        return l();
      },
      set open(oe) {
        l(oe);
      },
      closeProgrammatic: K
    };
    return O && O(V), s(b).init(), () => {
      var Q, de;
      B && B(V);
      const oe = s(b).isHoistedElement;
      (Q = s(b)) == null || Q.destroy(), oe && ((de = L().parentNode) == null || de.removeChild(L()));
    };
  }), Pn(() => {
    var V;
    o() && L() && ((V = L().parentElement) == null || V.classList.remove("mdc-menu-surface--anchor"));
  });
  function Z(V) {
    return V in E ? E[V] : L().classList.contains(V);
  }
  function G(V) {
    E[V] || (E[V] = !0);
  }
  function j(V) {
    (!(V in E) || E[V]) && (E[V] = !1);
  }
  function K(V) {
    var oe;
    (oe = s(b)) == null || oe.close(V), l(!1);
  }
  function k(V) {
    s(b) && l() && !c() && s(b).handleBodyClick(V);
  }
  function P() {
    return l();
  }
  function M(V) {
    l(V);
  }
  function z(V, oe) {
    if (s(b) == null)
      throw new Error("Instance is not defined.");
    return s(b).setAbsolutePosition(V, oe);
  }
  function re(V) {
    if (s(b) == null)
      throw new Error("Instance is not defined.");
    return s(b).setIsHoisted(V);
  }
  function U() {
    if (s(b) == null)
      throw new Error("Instance is not defined.");
    return s(b).isFixed();
  }
  function I() {
    if (s(b) == null)
      throw new Error("Instance is not defined.");
    return s(b).flipCornerHorizontally();
  }
  function L() {
    return S;
  }
  var $ = {
    isOpen: P,
    setOpen: M,
    setAbsolutePosition: z,
    setIsHoisted: re,
    isFixed: U,
    flipCornerHorizontally: I,
    getElement: L
  }, R = Dp();
  ca("click", Ds.body, k, !0);
  var W = (V) => {
    var oe;
    s(b) && !c() && s(b).handleKeydown(V), (oe = e.onkeydown) == null || oe.call(e, V);
  };
  He(
    R,
    (V, oe) => ({
      class: V,
      style: oe,
      role: "dialog",
      ...x,
      onkeydown: W
    }),
    [
      () => Ne({
        "mdc-menu-surface": !0,
        "mdc-menu-surface--fixed": u(),
        "mdc-menu-surface--open": a(),
        "smui-menu-surface--static": a(),
        "mdc-menu-surface--fullwidth": d(),
        ...E,
        [i()]: !0
      }),
      () => Object.entries(y).map(([V, oe]) => `${V}: ${oe};`).concat([r()]).join(" ")
    ]
  );
  var ce = _e(R);
  return Ie(ce, () => e.children ?? me), Se(R, (V) => S = V, () => S), Ue(R, (V, oe) => X == null ? void 0 : X(V, oe), n), w(t, R), Re($);
}
function qo(t, { addClass: e = (i) => t.classList.add(i), removeClass: n = (i) => t.classList.remove(i) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      n("mdc-menu-surface--anchor");
    }
  };
}
function Np(t, e) {
  we(e, !0);
  const { closest: n } = Ra;
  let i = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), a = m(e, "open", 15, !1), o = m(e, "anchorElement", 15), u = m(e, "managed", 3, !1), l = /* @__PURE__ */ Ve(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "open",
    "anchorElement",
    "managed",
    "children"
  ]), c, d = /* @__PURE__ */ xe(void 0), h = /* @__PURE__ */ xe(void 0), f = /* @__PURE__ */ xe(void 0);
  te("SMUI:menu-surface:mount", (A) => {
    s(h) || ae(h, A, !0);
  });
  const v = se("SMUI:list:mount");
  te("SMUI:list:mount", (A) => {
    s(f) || ae(f, A, !0), v && v(A);
  });
  const p = se("SMUI:menu:mount"), g = se("SMUI:menu:unmount");
  st(() => (ae(
    d,
    new wp({
      addClassToElementAtIndex: (A, O) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).addClassForElementIndex(A, O);
      },
      removeClassFromElementAtIndex: (A, O) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).removeClassForElementIndex(A, O);
      },
      addAttributeToElementAtIndex: (A, O, B) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).setAttributeForElementIndex(A, O, B);
      },
      removeAttributeFromElementAtIndex: (A, O) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).removeAttributeForElementIndex(A, O);
      },
      getAttributeFromElementAtIndex: (A, O) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).getAttributeFromElementIndex(A, O);
      },
      elementContainsClass: (A, O) => A.classList.contains(O),
      closeSurface: (A) => {
        var O;
        u() || ((O = s(h)) == null || O.closeProgrammatic(A), ke(y(), "SMUIMenuClosedProgrammatically"));
      },
      getElementIndex: (A) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).getOrderedList().map((O) => O.element).indexOf(A);
      },
      notifySelected: (A) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        ke(y(), "SMUIMenuSelected", {
          index: A.index,
          item: s(f).getOrderedList()[A.index].element
        });
      },
      getMenuItemCount: () => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).items.length;
      },
      focusItemAtIndex: (A) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).focusItemAtIndex(A);
      },
      focusListRoot: () => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        "focus" in s(f).element && s(f).element.focus();
      },
      isSelectableItemAtIndex: (A) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return !!n(s(f).getOrderedList()[A].element, `.${Lr.MENU_SELECTION_GROUP}`);
      },
      getSelectedSiblingOfItemAtIndex: (A) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        const O = s(f).getOrderedList(), B = n(O[A].element, `.${Lr.MENU_SELECTION_GROUP}`), Z = B == null ? void 0 : B.querySelector(`.${Lr.MENU_SELECTED_LIST_ITEM}`);
        return Z ? O.map((G) => G.element).indexOf(Z) : -1;
      }
    }),
    !0
  ), p && p(s(d)), s(d).init(), () => {
    var A;
    g && s(d) && g(s(d)), (A = s(d)) == null || A.destroy();
  }));
  function _(A) {
    s(d) && s(d).handleKeydown(A);
  }
  function C() {
    return a();
  }
  function x(A) {
    a(A);
  }
  function S(A) {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    s(d).setDefaultFocusState(A);
  }
  function b() {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    return s(d).getSelectedIndex();
  }
  function E() {
    return c;
  }
  function y() {
    return c.getElement();
  }
  var T = {
    isOpen: C,
    setOpen: x,
    setDefaultFocusState: S,
    getSelectedIndex: b,
    getMenuSurface: E,
    getElement: y
  };
  {
    let A = /* @__PURE__ */ ve(() => Ne({ "mdc-menu": !0, [r()]: !0 }));
    Se(
      Pp(t, et(
        {
          get use() {
            return i();
          },
          get class() {
            return s(A);
          },
          get managed() {
            return u();
          }
        },
        () => l,
        {
          onkeydown: (O) => {
            var B;
            _(O), (B = e.onkeydown) == null || B.call(e, O);
          },
          onSMUIMenuSurfaceOpened: (O) => {
            var B;
            s(d) && s(d).handleMenuSurfaceOpened(), (B = e.onSMUIMenuSurfaceOpened) == null || B.call(e, O);
          },
          onSMUIListAction: (O) => {
            var B;
            s(d) && s(f) && s(d).handleItemAction(s(f).getOrderedList()[O.detail.index].element), (B = e.onSMUIListAction) == null || B.call(e, O);
          },
          get open() {
            return a();
          },
          set open(O) {
            a(O);
          },
          get anchorElement() {
            return o();
          },
          set anchorElement(O) {
            o(O);
          },
          children: (O, B) => {
            var Z = le(), G = J(Z);
            Ie(G, () => e.children ?? me), w(O, Z);
          },
          $$slots: { default: !0 }
        }
      )),
      (O) => c = O,
      () => c
    );
  }
  return Re(T);
}
function Fp(t, e) {
  we(e, !0);
  const { closest: n, matches: i } = Ra;
  let r = se("SMUI:list:nav"), a = m(e, "use", 19, () => []), o = m(e, "class", 3, ""), u = m(e, "nonInteractive", 3, !1), l = m(e, "dense", 3, !1), c = m(e, "textualList", 3, !1), d = m(e, "avatarList", 3, !1), h = m(e, "iconList", 3, !1), f = m(e, "imageList", 3, !1), v = m(e, "thumbnailList", 3, !1), p = m(e, "videoList", 3, !1), g = m(e, "twoLine", 3, !1), _ = m(e, "threeLine", 3, !1), C = m(e, "vertical", 3, !0), x = m(e, "wrapFocus", 19, () => se("SMUI:list:wrapFocus") ?? !1), S = m(e, "singleSelection", 3, !1), b = m(e, "disabledItemsFocusable", 3, !1), E = m(e, "selectedIndex", 31, () => -1), y = m(e, "radioList", 3, !1), T = m(e, "checkList", 3, !1), A = m(e, "hasTypeahead", 3, !1), O = m(e, "component", 3, Mi), B = m(e, "tag", 3, r ? "nav" : "ul"), Z = /* @__PURE__ */ Ve(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "nonInteractive",
    "dense",
    "textualList",
    "avatarList",
    "iconList",
    "imageList",
    "thumbnailList",
    "videoList",
    "twoLine",
    "threeLine",
    "vertical",
    "wrapFocus",
    "singleSelection",
    "disabledItemsFocusable",
    "selectedIndex",
    "radioList",
    "checkList",
    "hasTypeahead",
    "component",
    "tag",
    "children"
  ]), G, j = /* @__PURE__ */ xe(void 0), K = [], k = se("SMUI:list:role");
  const P = /* @__PURE__ */ new WeakMap();
  let M = se("SMUI:dialog:selection"), z = se("SMUI:addLayoutListener"), re;
  te("SMUI:list:nonInteractive", u()), te("SMUI:separator:context", "list"), k || (S() ? (k = "listbox", te("SMUI:list:item:role", "option")) : y() ? (k = "radiogroup", te("SMUI:list:item:role", "radio")) : T() ? (k = "group", te("SMUI:list:item:role", "checkbox")) : (k = "list", te("SMUI:list:item:role", void 0))), Ae(() => {
    s(j) && s(j).setVerticalOrientation(C());
  }), Ae(() => {
    s(j) && s(j).setWrapFocus(x());
  }), Ae(() => {
    s(j) && s(j).setHasTypeahead(A());
  }), Ae(() => {
    s(j) && s(j).setSingleSelection(S());
  }), Ae(() => {
    s(j) && s(j).setDisabledItemsFocusable(b());
  }), Ae(() => {
    s(j) && S() && F() !== E() && s(j).setSelectedIndex(E());
  }), z && (re = z(ue)), te("SMUI:list:item:mount", (pe) => {
    K.push(pe), P.set(pe.element, pe), S() && pe.selected && E(Le(pe.element));
  }), te("SMUI:list:item:unmount", (pe) => {
    const H = (pe && K.findIndex((N) => N === pe)) ?? -1;
    H !== -1 && (K.splice(H, 1), P.delete(pe.element));
  });
  const U = se("SMUI:list:mount"), I = se("SMUI:list:unmount");
  st(() => {
    ae(
      j,
      new xp({
        addClassForElementIndex: Q,
        focusItemAtIndex: ee,
        getAttributeForElementIndex: (H, N) => {
          var Y;
          return ((Y = V()[H]) == null ? void 0 : Y.getAttr(N)) ?? null;
        },
        getFocusedElementIndex: () => document.activeElement ? V().map((H) => H.element).indexOf(document.activeElement) : -1,
        getListItemCount: () => K.length,
        getPrimaryTextAtIndex: De,
        hasCheckboxAtIndex: (H) => {
          var N;
          return ((N = V()[H]) == null ? void 0 : N.hasCheckbox) ?? !1;
        },
        hasRadioAtIndex: (H) => {
          var N;
          return ((N = V()[H]) == null ? void 0 : N.hasRadio) ?? !1;
        },
        isCheckboxCheckedAtIndex: (H) => {
          const N = V()[H];
          return ((N == null ? void 0 : N.hasCheckbox) && N.checked) ?? !1;
        },
        isFocusInsideList: () => G != null && Ce() !== document.activeElement && Ce().contains(document.activeElement),
        isRootFocused: () => G != null && document.activeElement === Ce(),
        listItemAtIndexHasClass: oe,
        notifyAction: (H) => {
          E(H), G != null && ke(Ce(), "SMUIListAction", { index: H });
        },
        notifySelectionChange: (H) => {
          G != null && ke(Ce(), "SMUIListSelectionChange", { changedIndices: H });
        },
        removeClassForElementIndex: de,
        setAttributeForElementIndex: ne,
        setCheckedCheckboxOrRadioAtIndex: (H, N) => {
          V()[H].checked = N;
        },
        setTabIndexForListItemChildren: (H, N) => {
          const Y = V()[H];
          Array.prototype.forEach.call(Y.element.querySelectorAll("button:not(:disabled), a"), (ct) => {
            ct.setAttribute("tabindex", N);
          });
        }
      }),
      !0
    );
    const pe = {
      get element() {
        return Ce();
      },
      get items() {
        return K;
      },
      get typeaheadInProgress() {
        if (!s(j))
          throw new Error("Instance is undefined.");
        return s(j).isTypeaheadInProgress();
      },
      typeaheadMatchItem(H, N) {
        if (!s(j))
          throw new Error("Instance is undefined.");
        return s(j).typeaheadMatchItem(
          H,
          N,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: V,
      focusItemAtIndex: ee,
      addClassForElementIndex: Q,
      removeClassForElementIndex: de,
      setAttributeForElementIndex: ne,
      removeAttributeForElementIndex: qe,
      getAttributeFromElementIndex: je,
      getPrimaryTextAtIndex: De
    };
    return U && U(pe), s(j).init(), s(j).layout(), () => {
      var H;
      I && I(pe), (H = s(j)) == null || H.destroy();
    };
  }), Pn(() => {
    re && re();
  });
  function L(pe) {
    s(j) && pe.target && s(j).handleKeydown(pe, pe.target.classList.contains("mdc-deprecated-list-item"), Le(pe.target));
  }
  function $(pe) {
    s(j) && pe.target && s(j).handleFocusIn(Le(pe.target));
  }
  function R(pe) {
    s(j) && pe.target && s(j).handleFocusOut(Le(pe.target));
  }
  function W(pe) {
    s(j) && pe.target && s(j).handleClick(Le(pe.target), !i(pe.target, 'input[type="checkbox"], input[type="radio"]'), pe);
  }
  function ce(pe) {
    if (y() || T()) {
      const H = Le(pe.target);
      if (H !== -1) {
        const N = V()[H];
        N && (y() && !N.checked || T()) && (i(pe.detail.target, 'input[type="checkbox"], input[type="radio"]') || (N.checked = !N.checked), N.activateRipple(), window.requestAnimationFrame(() => {
          N.deactivateRipple();
        }));
      }
    }
  }
  function V() {
    return G == null ? [] : [...Ce().children].map((pe) => P.get(pe)).filter((pe) => pe && pe._smui_list_item_accessor);
  }
  function oe(pe, H) {
    const N = V()[pe];
    return (N && N.hasClass(H)) ?? !1;
  }
  function Q(pe, H) {
    const N = V()[pe];
    N && N.addClass(H);
  }
  function de(pe, H) {
    const N = V()[pe];
    N && N.removeClass(H);
  }
  function ne(pe, H, N) {
    const Y = V()[pe];
    Y && Y.addAttr(H, N);
  }
  function qe(pe, H) {
    const N = V()[pe];
    N && N.removeAttr(H);
  }
  function je(pe, H) {
    const N = V()[pe];
    return N ? N.getAttr(H) : null;
  }
  function De(pe) {
    const H = V()[pe];
    return (H && H.getPrimaryText()) ?? "";
  }
  function Le(pe) {
    const H = n(pe, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return H && i(H, ".mdc-deprecated-list-item") ? V().map((N) => N == null ? void 0 : N.element).indexOf(H) : -1;
  }
  function ue() {
    if (!s(j))
      throw new Error("Instance is undefined.");
    return s(j).layout();
  }
  function Oe(pe, H) {
    if (!s(j))
      throw new Error("Instance is undefined.");
    return s(j).setEnabled(pe, H);
  }
  function Ze() {
    if (!s(j))
      throw new Error("Instance is undefined.");
    return s(j).isTypeaheadInProgress();
  }
  function F() {
    if (!s(j))
      throw new Error("Instance is undefined.");
    return s(j).getSelectedIndex();
  }
  function q() {
    if (!s(j))
      throw new Error("Instance is undefined.");
    return s(j).getFocusedItemIndex();
  }
  function ee(pe) {
    const H = V()[pe];
    H && "focus" in H.element && H.element.focus();
  }
  function Ce() {
    return G.getElement();
  }
  var Tt = {
    layout: ue,
    setEnabled: Oe,
    getTypeaheadInProgress: Ze,
    getSelectedIndex: F,
    getFocusedItemIndex: q,
    focusItemAtIndex: ee,
    getElement: Ce
  }, pt = le(), on = J(pt);
  {
    let pe = /* @__PURE__ */ ve(() => Ne({
      "mdc-deprecated-list": !0,
      "mdc-deprecated-list--non-interactive": u(),
      "mdc-deprecated-list--dense": l(),
      "mdc-deprecated-list--textual-list": c(),
      "mdc-deprecated-list--avatar-list": d() || M,
      "mdc-deprecated-list--icon-list": h(),
      "mdc-deprecated-list--image-list": f(),
      "mdc-deprecated-list--thumbnail-list": v(),
      "mdc-deprecated-list--video-list": p(),
      "mdc-deprecated-list--two-line": g(),
      "smui-list--three-line": _() && !g(),
      [o()]: !0
    }));
    wi(on, O, (H, N) => {
      Se(
        N(H, et(
          {
            get tag() {
              return B();
            },
            get use() {
              return a();
            },
            get class() {
              return s(pe);
            },
            get role() {
              return k;
            }
          },
          () => Z,
          {
            onkeydown: (Y) => {
              var Pe;
              L(Y), (Pe = e.onkeydown) == null || Pe.call(e, Y);
            },
            onfocusin: (Y) => {
              var Pe;
              $(Y), (Pe = e.onfocusin) == null || Pe.call(e, Y);
            },
            onfocusout: (Y) => {
              var Pe;
              R(Y), (Pe = e.onfocusout) == null || Pe.call(e, Y);
            },
            onclick: (Y) => {
              var Pe;
              W(Y), (Pe = e.onclick) == null || Pe.call(e, Y);
            },
            onSMUIAction: (Y) => {
              var Pe;
              ce(Y), (Pe = e.onSMUIAction) == null || Pe.call(e, Y);
            },
            children: (Y, Pe) => {
              var ct = le(), It = J(ct);
              Ie(It, () => e.children ?? me), w(Y, ct);
            },
            $$slots: { default: !0 }
          }
        )),
        (Y) => G = Y,
        () => G
      );
    });
  }
  return w(t, pt), Re(Tt);
}
let Hp = 0;
var Up = /* @__PURE__ */ ge('<span class="mdc-deprecated-list-item__ripple"></span>'), Bp = /* @__PURE__ */ ge("<!><!>", 1);
function kp(t, e) {
  we(e, !0);
  let n = () => {
  };
  function i(Q) {
    return Q === n;
  }
  let r = se("SMUI:list:item:nav"), a = m(e, "use", 19, () => []), o = m(e, "class", 3, ""), u = m(e, "style", 3, ""), l = m(e, "nonInteractive", 19, () => se("SMUI:list:nonInteractive") ?? !1), c = m(e, "ripple", 19, () => !l()), d = m(e, "wrapper", 3, !1), h = m(e, "activated", 15, !1), f = m(e, "role", 19, () => d() ? "presentation" : se("SMUI:list:item:role")), v = m(e, "selected", 15, !1), p = m(e, "disabled", 3, !1), g = m(e, "skipRestoreFocus", 3, !1), _ = m(e, "tabindex", 15, n), C = m(e, "inputId", 19, () => "SMUI-form-field-list-" + Hp++), x = m(e, "component", 3, Mi), S = m(e, "tag", 19, () => r ? e.href ? "a" : "span" : "li"), b = /* @__PURE__ */ Ve(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "color",
    "nonInteractive",
    "ripple",
    "wrapper",
    "activated",
    "role",
    "selected",
    "disabled",
    "skipRestoreFocus",
    "tabindex",
    "inputId",
    "href",
    "component",
    "tag",
    "children"
  ]);
  te("SMUI:list:nonInteractive", void 0), te("SMUI:list:item:role", void 0);
  let E, y = Ee({}), T = Ee({}), A = Ee({}), O = /* @__PURE__ */ xe(void 0), B = /* @__PURE__ */ xe(void 0);
  const Z = /* @__PURE__ */ ve(() => i(_()) ? !l() && !p() && (v() || s(O) && s(O).checked) ? 0 : -1 : _());
  te("SMUI:generic:input:props", { id: C() }), te("SMUI:separator:context", void 0), te("SMUI:generic:input:mount", (Q) => {
    ("_smui_checkbox_accessor" in Q || "_smui_radio_accessor" in Q) && ae(O, Q, !0);
  }), te("SMUI:generic:input:unmount", () => {
    ae(O, void 0);
  });
  const G = se("SMUI:list:item:mount"), j = se("SMUI:list:item:unmount");
  st(() => {
    if (!v() && !l()) {
      let de = !0, ne = E.getElement();
      for (; ne.previousElementSibling; )
        if (ne = ne.previousElementSibling, ne.nodeType === 1 && ne.classList.contains("mdc-deprecated-list-item") && !ne.classList.contains("mdc-deprecated-list-item--disabled")) {
          de = !1;
          break;
        }
      de && ae(B, window.requestAnimationFrame(() => I(ne)), !0);
    }
    const Q = {
      _smui_list_item_accessor: !0,
      get element() {
        return W();
      },
      get selected() {
        return v();
      },
      set selected(de) {
        v(de);
      },
      hasClass: K,
      addClass: k,
      removeClass: P,
      getAttr: z,
      addAttr: re,
      removeAttr: U,
      getPrimaryText: R,
      // For inputs within item.
      get checked() {
        return (s(O) && s(O).checked) ?? !1;
      },
      set checked(de) {
        s(O) && (s(O).checked = !!de);
      },
      get hasCheckbox() {
        return !!(s(O) && "_smui_checkbox_accessor" in s(O));
      },
      get hasRadio() {
        return !!(s(O) && "_smui_radio_accessor" in s(O));
      },
      activateRipple() {
        s(O) && s(O).activateRipple();
      },
      deactivateRipple() {
        s(O) && s(O).deactivateRipple();
      },
      // For select options.
      getValue() {
        return e.value;
      },
      // For autocomplete
      action: $,
      get tabindex() {
        return s(Z);
      },
      set tabindex(de) {
        _(de);
      },
      get disabled() {
        return p();
      },
      get activated() {
        return h();
      },
      set activated(de) {
        h(de);
      }
    };
    return G && G(Q), () => {
      j && j(Q);
    };
  }), Pn(() => {
    s(B) && window.cancelAnimationFrame(s(B));
  });
  function K(Q) {
    return Q in y ? y[Q] : W().classList.contains(Q);
  }
  function k(Q) {
    y[Q] || (y[Q] = !0);
  }
  function P(Q) {
    (!(Q in y) || y[Q]) && (y[Q] = !1);
  }
  function M(Q, de) {
    T[Q] != de && (de === "" || de == null ? delete T[Q] : T[Q] = de);
  }
  function z(Q) {
    return Q in A ? A[Q] ?? null : W().getAttribute(Q);
  }
  function re(Q, de) {
    A[Q] !== de && (A[Q] = de);
  }
  function U(Q) {
    (!(Q in A) || A[Q] != null) && (A[Q] = void 0);
  }
  function I(Q) {
    let de = !0;
    for (; Q.nextElementSibling; )
      if (Q = Q.nextElementSibling, Q.nodeType === 1 && Q.classList.contains("mdc-deprecated-list-item")) {
        const ne = Q.attributes.getNamedItem("tabindex");
        if (ne && ne.value === "0") {
          de = !1;
          break;
        }
      }
    de && _(0);
  }
  function L(Q) {
    const de = Q.key === "Enter", ne = Q.key === "Space";
    (de || ne) && $(Q);
  }
  function $(Q) {
    p() || ke(W(), "SMUIAction", Q);
  }
  function R() {
    const Q = W(), de = Q.querySelector(".mdc-deprecated-list-item__primary-text");
    if (de)
      return de.textContent ?? "";
    const ne = Q.querySelector(".mdc-deprecated-list-item__text");
    return ne ? ne.textContent ?? "" : Q.textContent ?? "";
  }
  function W() {
    return E.getElement();
  }
  var ce = { action: $, getPrimaryText: R, getElement: W }, V = le(), oe = J(V);
  {
    let Q = /* @__PURE__ */ ve(() => [
      ...l() ? [] : [
        [
          Kt,
          {
            ripple: !s(O),
            unbounded: !1,
            color: (h() || v()) && e.color == null ? "primary" : e.color,
            disabled: p(),
            addClass: k,
            removeClass: P,
            addStyle: M
          }
        ]
      ],
      ...a()
    ]), de = /* @__PURE__ */ ve(() => Ne({
      "mdc-deprecated-list-item": !d(),
      "mdc-deprecated-list-item__wrapper": d(),
      "mdc-deprecated-list-item--activated": h(),
      "mdc-deprecated-list-item--selected": v(),
      "mdc-deprecated-list-item--disabled": p(),
      "mdc-menu-item--selected": !r && f() === "menuitem" && v(),
      "smui-menu-item--non-interactive": l(),
      ...y,
      [o()]: !0
    })), ne = /* @__PURE__ */ ve(() => Object.entries(T).map(([je, De]) => `${je}: ${De};`).concat([u()]).join(" ")), qe = /* @__PURE__ */ ve(() => g() || void 0);
    wi(oe, x, (je, De) => {
      Se(
        De(je, et(
          {
            get tag() {
              return S();
            },
            get use() {
              return s(Q);
            },
            get class() {
              return s(de);
            },
            get style() {
              return s(ne);
            }
          },
          () => r && h() ? { "aria-current": "page" } : {},
          () => !r || d() ? { role: f() } : {},
          () => !r && f() === "option" ? { "aria-selected": v() ? "true" : "false" } : {},
          () => !r && (f() === "radio" || f() === "checkbox") ? {
            "aria-checked": s(O) && s(O).checked ? "true" : "false"
          } : {},
          () => r ? {} : { "aria-disabled": p() ? "true" : "false" },
          {
            get "data-menu-item-skip-restore-focus"() {
              return s(qe);
            },
            get tabindex() {
              return s(Z);
            },
            get href() {
              return e.href;
            }
          },
          () => A,
          () => b,
          {
            onclick: (Le) => {
              var ue;
              $(Le), (ue = e.onclick) == null || ue.call(e, Le);
            },
            onkeydown: (Le) => {
              var ue;
              L(Le), (ue = e.onkeydown) == null || ue.call(e, Le);
            },
            children: (Le, ue) => {
              var Oe = Bp(), Ze = J(Oe);
              {
                var F = (ee) => {
                  var Ce = Up();
                  w(ee, Ce);
                };
                he(Ze, (ee) => {
                  c() && ee(F);
                });
              }
              var q = ye(Ze);
              Ie(q, () => e.children ?? me), w(Le, Oe);
            },
            $$slots: { default: !0 }
          }
        )),
        (Le) => E = Le,
        () => E
      );
    });
  }
  return w(t, V), Re(ce);
}
let Vp = 0;
var Gp = /* @__PURE__ */ ge("<div><!></div>");
function jp(t, e) {
  we(e, !0);
  let n = m(e, "use", 19, () => []), i = m(e, "class", 3, ""), r = m(e, "id", 19, () => "SMUI-select-helper-text-" + Vp++), a = m(e, "persistent", 3, !1), o = m(e, "validationMsg", 3, !1), u = /* @__PURE__ */ Ve(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "id",
    "persistent",
    "validationMsg",
    "children"
  ]), l, c = /* @__PURE__ */ xe(void 0), d = Ee({}), h = Ee({}), f = /* @__PURE__ */ xe(void 0);
  const v = se("SMUI:select:helper-text:id"), p = se("SMUI:select:helper-text:mount"), g = se("SMUI:select:helper-text:unmount");
  st(() => (ae(
    c,
    new Mp({
      addClass: C,
      removeClass: x,
      hasClass: _,
      getAttr: S,
      setAttr: b,
      removeAttr: E,
      setContent: (G) => {
        ae(f, G, !0);
      }
    }),
    !0
  ), v && v(r()), p && p(s(c)), s(c).init(), () => {
    var G;
    g && s(c) && g(s(c)), (G = s(c)) == null || G.destroy();
  }));
  function _(G) {
    return G in d ? d[G] : y().classList.contains(G);
  }
  function C(G) {
    d[G] || (d[G] = !0);
  }
  function x(G) {
    (!(G in d) || d[G]) && (d[G] = !1);
  }
  function S(G) {
    return G in h ? h[G] ?? null : y().getAttribute(G);
  }
  function b(G, j) {
    h[G] !== j && (h[G] = j);
  }
  function E(G) {
    (!(G in h) || h[G] != null) && (h[G] = void 0);
  }
  function y() {
    return l;
  }
  var T = { getElement: y }, A = Gp();
  He(
    A,
    (G) => ({
      class: G,
      "aria-hidden": a() ? void 0 : "true",
      id: r(),
      ...h,
      ...u
    }),
    [
      () => Ne({
        "mdc-select-helper-text": !0,
        "mdc-select-helper-text--validation-msg": o(),
        "mdc-select-helper-text--validation-msg-persistent": a(),
        ...d,
        [i()]: !0
      })
    ]
  );
  var O = _e(A);
  {
    var B = (G) => {
      var j = le(), K = J(j);
      Ie(K, () => e.children ?? me), w(G, j);
    }, Z = (G) => {
      var j = Bt();
      Be(() => ft(j, s(f))), w(G, j);
    };
    he(O, (G) => {
      s(f) == null ? G(B) : G(Z, !1);
    });
  }
  return Se(A, (G) => l = G, () => l), Ue(A, (G, j) => X == null ? void 0 : X(G, j), n), w(t, A), Re(T);
}
let Wp = 0;
var qp = /* @__PURE__ */ ge("<input/>"), Kp = /* @__PURE__ */ ge('<span class="mdc-select__ripple"></span>'), zp = /* @__PURE__ */ ge('<div><!> <div><!> <!> <!> <!> <span><span> </span></span> <span><svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"><polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon><polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon></svg></span> <!></div> <!></div> <!>', 1);
function Xp(t, e) {
  we(e, !0);
  const n = () => Rt(Ce, "$selectedTextStore", i), [i, r] = gn();
  let a = () => {
  };
  function o(D) {
    return D === a;
  }
  let u = m(e, "use", 19, () => []), l = m(e, "class", 3, ""), c = m(e, "style", 3, ""), d = m(e, "ripple", 3, !0), h = m(e, "disabled", 3, !1), f = m(e, "variant", 3, "standard"), v = m(e, "noLabel", 3, !1), p = m(e, "label", 3, void 0), g = m(e, "value", 15), _ = m(e, "key", 3, (D) => D), C = m(e, "dirty", 15, !1), x = m(e, "invalid", 15, a), S = m(e, "updateInvalid", 19, () => o(x())), b = m(e, "required", 3, !1), E = m(e, "inputId", 19, () => "SMUI-select-" + Wp++), y = m(e, "hiddenInput", 3, !1), T = m(e, "withLeadingIcon", 3, a), A = m(e, "anchor$use", 19, () => []), O = m(e, "anchor$class", 3, ""), B = m(e, "selectedTextContainer$use", 19, () => []), Z = m(e, "selectedTextContainer$class", 3, ""), G = m(e, "selectedText$use", 19, () => []), j = m(e, "selectedText$class", 3, ""), K = m(e, "dropdownIcon$use", 19, () => []), k = m(e, "dropdownIcon$class", 3, ""), P = m(e, "menu$class", 3, ""), M = /* @__PURE__ */ Ve(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "ripple",
    "disabled",
    "variant",
    "noLabel",
    "label",
    "value",
    "key",
    "dirty",
    "invalid",
    "updateInvalid",
    "required",
    "inputId",
    "hiddenInput",
    "withLeadingIcon",
    "anchor$use",
    "anchor$class",
    "selectedTextContainer$use",
    "selectedTextContainer$class",
    "selectedText$use",
    "selectedText$class",
    "dropdownIcon$use",
    "dropdownIcon$class",
    "menu$class",
    "children",
    "leadingIcon",
    "helperText"
  ]);
  const z = o(x());
  o(x()) && x(!1);
  let re, U = /* @__PURE__ */ xe(void 0), I = Ee({}), L = Ee({}), $, R = Ee({}), W = /* @__PURE__ */ xe(-1);
  const ce = /* @__PURE__ */ ve(() => M.menu$id ?? E() + "-menu");
  let V = /* @__PURE__ */ xe(void 0), oe = se("SMUI:addLayoutListener"), Q, de = /* @__PURE__ */ xe(!1), ne = Ee({}), qe = /* @__PURE__ */ xe(void 0), je = /* @__PURE__ */ xe(void 0), De = /* @__PURE__ */ xe(!1), Le, ue = se("SMUI:select:context"), Oe, Ze, F, q, ee;
  te("SMUI:list:role", ""), te("SMUI:list:nav", !1);
  const Ce = bt("");
  te("SMUI:select:selectedText", Ce);
  const Tt = bt(g());
  Ae(() => {
    kt(Tt, g());
  }), te("SMUI:select:value", Tt), Ae(() => {
    s(U) && s(U).getValue() !== _()(g()) && s(U).setValue(_()(g()));
  });
  let pt = s(W);
  Ae(() => {
    if (pt !== s(W))
      if (pt = s(W), s(U))
        s(U).setSelectedIndex(
          s(W),
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const D = _t();
        g() !== D[s(W)] && g(D[s(W)]);
      }
  }), Ae(() => {
    s(U) && s(U).getDisabled() !== h() && s(U).setDisabled(h());
  }), Ae(() => {
    s(U) && C() && s(U).isValid() !== !x() && (S() ? x(!s(U).isValid()) : s(U).setValid(!x()));
  }), Ae(() => {
    s(U) && s(U).getRequired() !== b() && s(U).setRequired(b());
  }), oe && (Q = oe(Pi)), te("SMUI:select:leading-icon:mount", (D) => {
    Oe = D;
  }), te("SMUI:select:leading-icon:unmount", () => {
    Oe = void 0;
  }), te("SMUI:list:mount", (D) => {
    Le = D;
  }), te("SMUI:select:helper-text:id", (D) => {
    ae(V, D, !0);
  }), te("SMUI:select:helper-text:mount", (D) => {
    Ze = D;
  }), te("SMUI:select:helper-text:unmount", () => {
    ae(V, void 0), Ze = void 0;
  }), st(() => (ae(
    U,
    new Rp(
      {
        // getSelectAdapterMethods
        // getMenuItemAttr: (menuItem: Element, attr: string) =>
        //   menuItem.getAttribute(attr),
        setSelectedText: (D) => {
          kt(Ce, D);
        },
        isSelectAnchorFocused: () => document.activeElement === $,
        getSelectAnchorAttr: ct,
        setSelectAnchorAttr: It,
        removeSelectAnchorAttr: Pt,
        addMenuClass: Y,
        removeMenuClass: Pe,
        openMenu: () => {
          ae(de, !0);
        },
        closeMenu: () => {
          ae(de, !1);
        },
        getAnchorElement: () => $,
        setMenuAnchorElement: (D) => {
          ae(qe, D, !0);
        },
        setMenuAnchorCorner: (D) => {
          ae(je, D, !0);
        },
        setMenuWrapFocus: (D) => {
          ae(De, D, !0);
        },
        getSelectedIndex: () => s(W),
        setSelectedIndex: (D) => {
          pt = D, ae(W, D, !0), g(_t()[s(W)]);
        },
        focusMenuItemAtIndex: (D) => {
          Le.focusItemAtIndex(D);
        },
        getMenuItemCount: () => Le.items.length,
        getMenuItemValues: () => _t().map(_()),
        getMenuItemTextAtIndex: (D) => Le.getPrimaryTextAtIndex(D),
        isTypeaheadInProgress: () => Le.typeaheadInProgress,
        typeaheadMatchItem: (D, be) => Le.typeaheadMatchItem(D, be),
        // getCommonAdapterMethods
        addClass: pe,
        removeClass: H,
        hasClass: on,
        setRippleCenter: (D) => q && q.setRippleCenter(D),
        activateBottomLine: () => q && q.activate(),
        deactivateBottomLine: () => q && q.deactivate(),
        notifyChange: (D) => {
          var be;
          C(!0), S() && x(!((be = s(U)) != null && be.isValid())), ke(Fn(), "SMUISelectChange", { value: g(), index: s(W) });
        },
        // getOutlineAdapterMethods
        hasOutline: () => !!ee,
        notchOutline: (D) => ee && ee.notch(D),
        closeOutline: () => ee && ee.closeNotch(),
        // getLabelAdapterMethods
        hasLabel: () => !!F,
        floatLabel: (D) => F && F.float(D),
        getLabelWidth: () => F ? F.getWidth() : 0,
        setLabelRequired: (D) => F && F.setRequired(D)
      },
      {
        get helperText() {
          return Ze;
        },
        get leadingIcon() {
          return Oe;
        }
      }
    ),
    !0
  ), ae(W, _t().indexOf(g()), !0), s(U).init(), Gt(z), () => {
    var D;
    (D = s(U)) == null || D.destroy();
  })), Pn(() => {
    Q && Q();
  });
  function on(D) {
    return D in I ? I[D] : Fn().classList.contains(D);
  }
  function pe(D) {
    I[D] || (I[D] = !0);
  }
  function H(D) {
    (!(D in I) || I[D]) && (I[D] = !1);
  }
  function N(D, be) {
    L[D] != be && (be === "" || be == null ? delete L[D] : L[D] = be);
  }
  function Y(D) {
    ne[D] || (ne[D] = !0);
  }
  function Pe(D) {
    (!(D in ne) || ne[D]) && (ne[D] = !1);
  }
  function ct(D) {
    return D in R ? R[D] ?? null : Fn().getAttribute(D);
  }
  function It(D, be) {
    R[D] !== be && (R[D] = be);
  }
  function Pt(D) {
    (!(D in R) || R[D] != null) && (R[D] = void 0);
  }
  function _t() {
    return Le.getOrderedList().map((D) => D.getValue());
  }
  function Xn(D) {
    const be = D.currentTarget.getBoundingClientRect();
    return (ht(D) ? D.touches[0].clientX : D.clientX) - be.left;
  }
  function ht(D) {
    return "touches" in D;
  }
  function Nt() {
    if (s(U) == null)
      throw new Error("Instance is undefined.");
    return s(U).getUseDefaultValidation();
  }
  function Gt(D) {
    var be;
    (be = s(U)) == null || be.setUseDefaultValidation(D);
  }
  function Xt() {
    $.focus();
  }
  function Pi() {
    var D;
    (D = s(U)) == null || D.layout();
  }
  function Fn() {
    return re;
  }
  var Ke = {
    getUseDefaultValidation: Nt,
    setUseDefaultValidation: Gt,
    focus: Xt,
    layout: Pi,
    getElement: Fn
  }, nt = zp(), Xe = J(nt);
  He(Xe, (D, be, dt) => ({ class: D, style: be, ...dt }), [
    () => Ne({
      "mdc-select": !0,
      "mdc-select--required": b(),
      "mdc-select--disabled": h(),
      "mdc-select--filled": f() === "filled",
      "mdc-select--outlined": f() === "outlined",
      "smui-select--standard": f() === "standard",
      "mdc-select--with-leading-icon": o(T()) ? e.leadingIcon : T(),
      "mdc-select--no-label": v() || p() == null,
      "mdc-select--invalid": x(),
      "mdc-select--activated": s(de),
      "mdc-data-table__pagination-rows-per-page-select": ue === "data-table:pagination",
      ...I,
      [l()]: !0
    }),
    () => Object.entries(L).map(([D, be]) => `${D}: ${be};`).concat([c()]).join(" "),
    () => ir(M, [
      "input$",
      "anchor$",
      "label$",
      "outline$",
      "selectedTextContainer$",
      "selectedText$",
      "dropdownIcon$",
      "ripple$",
      "menu$",
      "list$",
      "helperText$"
    ])
  ]);
  var Lt = _e(Xe);
  {
    var fn = (D) => {
      var be = qp();
      He(
        be,
        (dt) => ({
          type: "hidden",
          required: b(),
          disabled: h(),
          value: g(),
          ...dt
        }),
        [() => ot(M, "input$")],
        void 0,
        void 0,
        !0
      ), w(D, be);
    };
    he(Lt, (D) => {
      y() && D(fn);
    });
  }
  var it = ye(Lt, 2), Et = (D) => {
    var be;
    $.focus(), s(U) && s(U).handleClick(Xn(D)), (be = e.anchor$onclick) == null || be.call(e, D);
  }, vt = (D) => {
    var be;
    s(U) && s(U).handleKeydown(D), (be = e.onkeydown) == null || be.call(e, D);
  }, Je = (D) => {
    var be;
    s(U) && s(U).handleBlur(), ke(Fn(), "blur", D), (be = e.anchor$onblur) == null || be.call(e, D);
  }, Ot = (D) => {
    var be;
    s(U) && s(U).handleFocus(), ke(Fn(), "focus", D), (be = e.anchor$onfocus) == null || be.call(e, D);
  };
  He(
    it,
    (D, be) => ({
      class: D,
      "aria-required": b() ? "true" : void 0,
      "aria-disabled": h() ? "true" : void 0,
      "aria-controls": s(ce),
      "aria-expanded": s(de) ? "true" : "false",
      "aria-describedby": s(V),
      role: "combobox",
      tabindex: "0",
      ...R,
      ...be,
      onclick: Et,
      onkeydown: vt,
      onblur: Je,
      onfocus: Ot
    }),
    [
      () => Ne({ "mdc-select__anchor": !0, [O()]: !0 }),
      () => ot(M, "anchor$")
    ]
  );
  var Ln = _e(it);
  {
    var sn = (D) => {
      var be = Kp();
      w(D, be);
    };
    he(Ln, (D) => {
      f() === "filled" && D(sn);
    });
  }
  var lt = ye(Ln, 2);
  {
    var jt = (D) => {
      {
        let be = /* @__PURE__ */ ve(() => E() + "-smui-label"), dt = /* @__PURE__ */ ve(() => n() !== ""), wt = /* @__PURE__ */ ve(() => ot(M, "label$"));
        Se(
          oo(D, et(
            {
              get id() {
                return s(be);
              },
              get floatAbove() {
                return s(dt);
              },
              get required() {
                return b();
              }
            },
            () => s(wt),
            {
              children: (Zn, Qn) => {
                var Qr = le(), hr = J(Qr);
                {
                  var Hi = (Ui) => {
                  }, Oo = (Ui) => {
                    var Da = le(), Jr = J(Da);
                    {
                      var Qs = (di) => {
                        var Bi = Bt();
                        Be(() => ft(Bi, p())), w(di, Bi);
                      }, Pa = (di) => {
                        var Bi = le(), wo = J(Bi);
                        Ie(wo, p), w(di, Bi);
                      };
                      he(
                        Jr,
                        (di) => {
                          typeof p() == "string" ? di(Qs) : di(Pa, !1);
                        },
                        !0
                      );
                    }
                    w(Ui, Da);
                  };
                  he(hr, (Ui) => {
                    p() == null ? Ui(Hi) : Ui(Oo, !1);
                  });
                }
                w(Zn, Qr);
              },
              $$slots: { default: !0 }
            }
          )),
          (Zn) => F = Zn,
          () => F
        );
      }
    };
    he(lt, (D) => {
      f() !== "outlined" && !v() && p() != null && D(jt);
    });
  }
  var bn = ye(lt, 2);
  {
    var Yt = (D) => {
      {
        let be = /* @__PURE__ */ ve(() => v() || p() == null), dt = /* @__PURE__ */ ve(() => ot(M, "outline$"));
        Se(
          Dc(D, et(
            {
              get noLabel() {
                return s(be);
              }
            },
            () => s(dt),
            {
              children: (wt, Zn) => {
                var Qn = le(), Qr = J(Qn);
                {
                  var hr = (Hi) => {
                    {
                      let Oo = /* @__PURE__ */ ve(() => E() + "-smui-label"), Ui = /* @__PURE__ */ ve(() => n() !== ""), Da = /* @__PURE__ */ ve(() => ot(M, "label$"));
                      Se(
                        oo(Hi, et(
                          {
                            get id() {
                              return s(Oo);
                            },
                            get floatAbove() {
                              return s(Ui);
                            },
                            get required() {
                              return b();
                            }
                          },
                          () => s(Da),
                          {
                            children: (Jr, Qs) => {
                              var Pa = le(), di = J(Pa);
                              {
                                var Bi = ($r) => {
                                }, wo = ($r) => {
                                  var Js = le(), vd = J(Js);
                                  {
                                    var md = (vr) => {
                                      var ea = Bt();
                                      Be(() => ft(ea, p())), w(vr, ea);
                                    }, pd = (vr) => {
                                      var ea = le(), gd = J(ea);
                                      Ie(gd, p), w(vr, ea);
                                    };
                                    he(
                                      vd,
                                      (vr) => {
                                        typeof p() == "string" ? vr(md) : vr(pd, !1);
                                      },
                                      !0
                                    );
                                  }
                                  w($r, Js);
                                };
                                he(di, ($r) => {
                                  p() == null ? $r(Bi) : $r(wo, !1);
                                });
                              }
                              w(Jr, Pa);
                            },
                            $$slots: { default: !0 }
                          }
                        )),
                        (Jr) => F = Jr,
                        () => F
                      );
                    }
                  };
                  he(Qr, (Hi) => {
                    !v() && p() != null && Hi(hr);
                  });
                }
                w(wt, Qn);
              },
              $$slots: { default: !0 }
            }
          )),
          (wt) => ee = wt,
          () => ee
        );
      }
    };
    he(bn, (D) => {
      f() === "outlined" && D(Yt);
    });
  }
  var Ni = ye(bn, 2);
  Ie(Ni, () => e.leadingIcon ?? me);
  var In = ye(Ni, 2);
  He(In, (D, be) => ({ class: D, ...be }), [
    () => Ne({
      "mdc-select__selected-text-container": !0,
      [Z()]: !0
    }),
    () => ot(M, "selectedTextContainer$")
  ]);
  var ci = _e(In);
  He(
    ci,
    (D, be) => ({
      id: E() + "-smui-selected-text",
      class: D,
      role: "button",
      "aria-haspopup": "listbox",
      "aria-labelledby": E() + "-smui-label",
      ...be
    }),
    [
      () => Ne({
        "mdc-select__selected-text": !0,
        [j()]: !0
      }),
      () => ot(M, "selectedText$")
    ]
  );
  var Zr = _e(ci);
  Ue(ci, (D, be) => X == null ? void 0 : X(D, be), G), Ue(In, (D, be) => X == null ? void 0 : X(D, be), B);
  var yn = ye(In, 2);
  He(yn, (D, be) => ({ class: D, ...be }), [
    () => Ne({
      "mdc-select__dropdown-icon": !0,
      [k()]: !0
    }),
    () => ot(M, "dropdownIcon$")
  ]), Ue(yn, (D, be) => X == null ? void 0 : X(D, be), K);
  var Yn = ye(yn, 2);
  {
    var Hn = (D) => {
      {
        let be = /* @__PURE__ */ ve(() => ot(M, "ripple$"));
        Se(Mc(D, et(() => s(be))), (dt) => q = dt, () => q);
      }
    };
    he(Yn, (D) => {
      f() !== "outlined" && d() && D(Hn);
    });
  }
  Se(it, (D) => $ = D, () => $), Ue(it, (D, be) => X == null ? void 0 : X(D, be), A);
  var Fi = ye(it, 2);
  {
    let D = /* @__PURE__ */ ve(() => Ne({
      "mdc-select__menu": !0,
      ...ne,
      [P()]: !0
    })), be = /* @__PURE__ */ ve(() => ot(M, "menu$"));
    Np(Fi, et(
      {
        get class() {
          return s(D);
        },
        get id() {
          return s(ce);
        },
        fullWidth: !0,
        anchor: !1,
        get anchorElement() {
          return s(qe);
        },
        get anchorCorner() {
          return s(je);
        }
      },
      () => s(be),
      {
        onSMUIMenuSelected: (dt) => {
          var wt;
          s(U) && s(U).handleMenuItemAction(dt.detail.index), (wt = e.onSMUIMenuSelected) == null || wt.call(e, dt);
        },
        onSMUIMenuSurfaceClosing: (dt) => {
          var wt;
          s(U) && s(U).handleMenuClosing(), (wt = e.onSMUIMenuSurfaceClosing) == null || wt.call(e, dt);
        },
        onSMUIMenuSurfaceClosed: (dt) => {
          var wt;
          s(U) && s(U).handleMenuClosed(), (wt = e.onSMUIMenuSurfaceClosed) == null || wt.call(e, dt);
        },
        onSMUIMenuSurfaceOpened: (dt) => {
          var wt;
          s(U) && s(U).handleMenuOpened(), (wt = e.onSMUIMenuSurfaceOpened) == null || wt.call(e, dt);
        },
        get open() {
          return s(de);
        },
        set open(dt) {
          ae(de, dt, !0);
        },
        children: (dt, wt) => {
          {
            let Zn = /* @__PURE__ */ ve(() => ot(M, "list$"));
            Fp(dt, et(
              {
                role: "listbox",
                get wrapFocus() {
                  return s(De);
                }
              },
              () => s(Zn),
              {
                get selectedIndex() {
                  return s(W);
                },
                set selectedIndex(Qn) {
                  ae(W, Qn, !0);
                },
                children: (Qn, Qr) => {
                  var hr = le(), Hi = J(hr);
                  Ie(Hi, () => e.children ?? me), w(Qn, hr);
                },
                $$slots: { default: !0 }
              }
            ));
          }
        },
        $$slots: { default: !0 }
      }
    ));
  }
  Se(Xe, (D) => re = D, () => re), Ue(Xe, (D, be) => Kt == null ? void 0 : Kt(D, be), () => ({
    ripple: f() === "filled",
    unbounded: !1,
    addClass: pe,
    removeClass: H,
    addStyle: N
  })), Ue(Xe, (D, be) => qo == null ? void 0 : qo(D, be), () => ({ addClass: pe, removeClass: H })), Ue(Xe, (D, be) => X == null ? void 0 : X(D, be), u);
  var Lo = ye(Xe, 2);
  {
    var fd = (D) => {
      {
        let be = /* @__PURE__ */ ve(() => ot(M, "helperText$"));
        jp(D, et(() => s(be), {
          children: (dt, wt) => {
            var Zn = le(), Qn = J(Zn);
            Ie(Qn, () => e.helperText ?? me), w(dt, Zn);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    he(Lo, (D) => {
      e.helperText && D(fd);
    });
  }
  Be(() => ft(Zr, n())), w(t, nt);
  var hd = Re(Ke);
  return r(), hd;
}
function Yp(t, e) {
  we(e, !0);
  const n = () => Rt(d, "$selectedValue", i), [i, r] = gn();
  let a = m(e, "use", 19, () => []);
  m(e, "class", 3, "");
  let o = m(e, "value", 3, ""), u = /* @__PURE__ */ Ve(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "value",
    "children"
  ]), l;
  const c = se("SMUI:select:selectedText"), d = se("SMUI:select:value");
  te("SMUI:list:item:role", "option");
  const h = /* @__PURE__ */ ve(() => o() != null && o() !== "" && n() === o());
  st(f), Pn(f);
  function f() {
    s(h) && l && kt(c, l.getPrimaryText());
  }
  function v() {
    return l.getElement();
  }
  var p = { getElement: v };
  Se(
    kp(t, et(
      {
        get use() {
          return a();
        },
        get "data-value"() {
          return o();
        },
        get value() {
          return o();
        },
        get selected() {
          return s(h);
        }
      },
      () => u,
      {
        children: (_, C) => {
          var x = le(), S = J(x);
          Ie(S, () => e.children ?? me), w(_, x);
        },
        $$slots: { default: !0 }
      }
    )),
    (_) => l = _,
    () => l
  );
  var g = Re(p);
  return r(), g;
}
function ql(t, e) {
  we(e, !0);
  let n = m(e, "data", 19, () => []);
  m(e, "placeholder", 3, "");
  let i = m(e, "label", 3, "");
  m(e, "description", 3, "");
  let r = m(e, "value", 15), a = m(e, "required", 3, !1);
  m(e, "size", 3, "sm");
  let o = m(e, "selectedOptionIndex", 31, () => -1), u = m(e, "disabled", 3, !1);
  function l(c) {
    return () => o(c);
  }
  Xp(t, {
    get disabled() {
      return u();
    },
    key: (c) => `${c ?? ""}`,
    get label() {
      return i();
    },
    style: "width: 100%;",
    get required() {
      return a();
    },
    get value() {
      return r();
    },
    set value(c) {
      r(c);
    },
    children: (c, d) => {
      var h = le(), f = J(h);
      _r(f, 17, n, Xa, (v, p, g) => {
        {
          let _ = /* @__PURE__ */ ve(() => l(g));
          Yp(v, {
            get onclick() {
              return s(_);
            },
            get value() {
              return s(p).value;
            },
            children: (C, x) => {
              var S = Bt();
              Be(() => ft(S, s(p).label)), w(C, S);
            },
            $$slots: { default: !0 }
          });
        }
      }), w(c, h);
    },
    $$slots: { default: !0 }
  }), Re();
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function Zp(t) {
  return t ? t.scrollHeight > t.offsetHeight : !1;
}
function Qp(t) {
  return t ? t.scrollTop === 0 : !1;
}
function Jp(t) {
  return t ? Math.ceil(t.scrollHeight - t.scrollTop) === t.clientHeight : !1;
}
function $p(t) {
  var e = /* @__PURE__ */ new Set();
  return [].forEach.call(t, function(n) {
    return e.add(n.offsetTop);
  }), e.size > 1;
}
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var eg = (
  /** @class */
  function() {
    function t() {
      this.rafIDs = /* @__PURE__ */ new Map();
    }
    return t.prototype.request = function(e, n) {
      var i = this;
      this.cancel(e);
      var r = requestAnimationFrame(function(a) {
        i.rafIDs.delete(e), n(a);
      });
      this.rafIDs.set(e, r);
    }, t.prototype.cancel = function(e) {
      var n = this.rafIDs.get(e);
      n && (cancelAnimationFrame(n), this.rafIDs.delete(e));
    }, t.prototype.cancelAll = function() {
      var e = this;
      this.rafIDs.forEach(function(n, i) {
        e.cancel(i);
      });
    }, t.prototype.getQueue = function() {
      var e = [];
      return this.rafIDs.forEach(function(n, i) {
        e.push(i);
      }), e;
    }, t;
  }()
);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var rt = {
  CLOSING: "mdc-dialog--closing",
  OPEN: "mdc-dialog--open",
  OPENING: "mdc-dialog--opening",
  SCROLLABLE: "mdc-dialog--scrollable",
  SCROLL_LOCK: "mdc-dialog-scroll-lock",
  STACKED: "mdc-dialog--stacked",
  FULLSCREEN: "mdc-dialog--fullscreen",
  // Class for showing a scroll divider on full-screen dialog header element.
  // Should only be displayed on scrollable content, when the dialog content is
  // scrolled "underneath" the header.
  SCROLL_DIVIDER_HEADER: "mdc-dialog-scroll-divider-header",
  // Class for showing a scroll divider on a full-screen dialog footer element.
  // Should only be displayed on scrolalble content, when the dialog content is
  // obscured "underneath" the footer.
  SCROLL_DIVIDER_FOOTER: "mdc-dialog-scroll-divider-footer",
  // The "surface scrim" is a scrim covering only the surface of a dialog. This
  // is used in situations where a confirmation dialog is shown over an already
  // opened full-screen dialog. On larger screen-sizes, the full-screen dialog
  // is sized as a modal and so in these situations we display a "surface scrim"
  // to prevent a "double scrim" (where the scrim from the secondary
  // confirmation dialog would overlap with the scrim from the full-screen
  // dialog).
  SURFACE_SCRIM_SHOWN: "mdc-dialog__surface-scrim--shown",
  // "Showing" animating class for the surface-scrim.
  SURFACE_SCRIM_SHOWING: "mdc-dialog__surface-scrim--showing",
  // "Hiding" animating class for the surface-scrim.
  SURFACE_SCRIM_HIDING: "mdc-dialog__surface-scrim--hiding",
  // Class to hide a dialog's scrim (used in conjunction with a surface-scrim).
  // Note that we only hide the original scrim rather than removing it entirely
  // to prevent interactions with the content behind this scrim, and to capture
  // scrim clicks.
  SCRIM_HIDDEN: "mdc-dialog__scrim--hidden"
}, oa = {
  ACTION_ATTRIBUTE: "data-mdc-dialog-action",
  BUTTON_DEFAULT_ATTRIBUTE: "data-mdc-dialog-button-default",
  BUTTON_SELECTOR: ".mdc-dialog__button",
  CLOSED_EVENT: "MDCDialog:closed",
  CLOSE_ACTION: "close",
  CLOSING_EVENT: "MDCDialog:closing",
  CONTAINER_SELECTOR: ".mdc-dialog__container",
  CONTENT_SELECTOR: ".mdc-dialog__content",
  DESTROY_ACTION: "destroy",
  INITIAL_FOCUS_ATTRIBUTE: "data-mdc-dialog-initial-focus",
  OPENED_EVENT: "MDCDialog:opened",
  OPENING_EVENT: "MDCDialog:opening",
  SCRIM_SELECTOR: ".mdc-dialog__scrim",
  SUPPRESS_DEFAULT_PRESS_SELECTOR: [
    "textarea",
    ".mdc-menu .mdc-list-item",
    ".mdc-menu .mdc-deprecated-list-item"
  ].join(", "),
  SURFACE_SELECTOR: ".mdc-dialog__surface"
}, Ko = {
  DIALOG_ANIMATION_CLOSE_TIME_MS: 75,
  DIALOG_ANIMATION_OPEN_TIME_MS: 150
};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var so;
(function(t) {
  t.POLL_SCROLL_POS = "poll_scroll_position", t.POLL_LAYOUT_CHANGE = "poll_layout_change";
})(so || (so = {}));
var tg = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      var i = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return i.dialogOpen = !1, i.isFullscreen = !1, i.animationFrame = 0, i.animationTimer = 0, i.escapeKeyAction = oa.CLOSE_ACTION, i.scrimClickAction = oa.CLOSE_ACTION, i.autoStackButtons = !0, i.areButtonsStacked = !1, i.suppressDefaultPressSelector = oa.SUPPRESS_DEFAULT_PRESS_SELECTOR, i.animFrame = new eg(), i.contentScrollHandler = function() {
        i.handleScrollEvent();
      }, i.windowResizeHandler = function() {
        i.layout();
      }, i.windowOrientationChangeHandler = function() {
        i.layout();
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return rt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return oa;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Ko;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addBodyClass: function() {
          },
          addClass: function() {
          },
          areButtonsStacked: function() {
            return !1;
          },
          clickDefaultButton: function() {
          },
          eventTargetMatches: function() {
            return !1;
          },
          getActionFromEvent: function() {
            return "";
          },
          getInitialFocusEl: function() {
            return null;
          },
          hasClass: function() {
            return !1;
          },
          isContentScrollable: function() {
            return !1;
          },
          notifyClosed: function() {
          },
          notifyClosing: function() {
          },
          notifyOpened: function() {
          },
          notifyOpening: function() {
          },
          releaseFocus: function() {
          },
          removeBodyClass: function() {
          },
          removeClass: function() {
          },
          reverseButtons: function() {
          },
          trapFocus: function() {
          },
          registerContentEventHandler: function() {
          },
          deregisterContentEventHandler: function() {
          },
          isScrollableContentAtTop: function() {
            return !1;
          },
          isScrollableContentAtBottom: function() {
            return !1;
          },
          registerWindowEventHandler: function() {
          },
          deregisterWindowEventHandler: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      this.adapter.hasClass(rt.STACKED) && this.setAutoStackButtons(!1), this.isFullscreen = this.adapter.hasClass(rt.FULLSCREEN);
    }, e.prototype.destroy = function() {
      this.animationTimer && (clearTimeout(this.animationTimer), this.handleAnimationTimerEnd()), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.animFrame.cancelAll(), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler);
    }, e.prototype.open = function(n) {
      var i = this;
      this.dialogOpen = !0, this.adapter.notifyOpening(), this.adapter.addClass(rt.OPENING), this.isFullscreen && this.adapter.registerContentEventHandler("scroll", this.contentScrollHandler), n && n.isAboveFullscreenDialog && this.adapter.addClass(rt.SCRIM_HIDDEN), this.adapter.registerWindowEventHandler("resize", this.windowResizeHandler), this.adapter.registerWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), this.runNextAnimationFrame(function() {
        i.adapter.addClass(rt.OPEN), i.adapter.addBodyClass(rt.SCROLL_LOCK), i.layout(), i.animationTimer = setTimeout(function() {
          i.handleAnimationTimerEnd(), i.adapter.trapFocus(i.adapter.getInitialFocusEl()), i.adapter.notifyOpened();
        }, Ko.DIALOG_ANIMATION_OPEN_TIME_MS);
      });
    }, e.prototype.close = function(n) {
      var i = this;
      n === void 0 && (n = ""), this.dialogOpen && (this.dialogOpen = !1, this.adapter.notifyClosing(n), this.adapter.addClass(rt.CLOSING), this.adapter.removeClass(rt.OPEN), this.adapter.removeBodyClass(rt.SCROLL_LOCK), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), cancelAnimationFrame(this.animationFrame), this.animationFrame = 0, clearTimeout(this.animationTimer), this.animationTimer = setTimeout(function() {
        i.adapter.releaseFocus(), i.handleAnimationTimerEnd(), i.adapter.notifyClosed(n);
      }, Ko.DIALOG_ANIMATION_CLOSE_TIME_MS));
    }, e.prototype.showSurfaceScrim = function() {
      var n = this;
      this.adapter.addClass(rt.SURFACE_SCRIM_SHOWING), this.runNextAnimationFrame(function() {
        n.adapter.addClass(rt.SURFACE_SCRIM_SHOWN);
      });
    }, e.prototype.hideSurfaceScrim = function() {
      this.adapter.removeClass(rt.SURFACE_SCRIM_SHOWN), this.adapter.addClass(rt.SURFACE_SCRIM_HIDING);
    }, e.prototype.handleSurfaceScrimTransitionEnd = function() {
      this.adapter.removeClass(rt.SURFACE_SCRIM_HIDING), this.adapter.removeClass(rt.SURFACE_SCRIM_SHOWING);
    }, e.prototype.isOpen = function() {
      return this.dialogOpen;
    }, e.prototype.getEscapeKeyAction = function() {
      return this.escapeKeyAction;
    }, e.prototype.setEscapeKeyAction = function(n) {
      this.escapeKeyAction = n;
    }, e.prototype.getScrimClickAction = function() {
      return this.scrimClickAction;
    }, e.prototype.setScrimClickAction = function(n) {
      this.scrimClickAction = n;
    }, e.prototype.getAutoStackButtons = function() {
      return this.autoStackButtons;
    }, e.prototype.setAutoStackButtons = function(n) {
      this.autoStackButtons = n;
    }, e.prototype.getSuppressDefaultPressSelector = function() {
      return this.suppressDefaultPressSelector;
    }, e.prototype.setSuppressDefaultPressSelector = function(n) {
      this.suppressDefaultPressSelector = n;
    }, e.prototype.layout = function() {
      var n = this;
      this.animFrame.request(so.POLL_LAYOUT_CHANGE, function() {
        n.layoutInternal();
      });
    }, e.prototype.handleClick = function(n) {
      var i = this.adapter.eventTargetMatches(n.target, oa.SCRIM_SELECTOR);
      if (i && this.scrimClickAction !== "")
        this.close(this.scrimClickAction);
      else {
        var r = this.adapter.getActionFromEvent(n);
        r && this.close(r);
      }
    }, e.prototype.handleKeydown = function(n) {
      var i = n.key === "Enter" || n.keyCode === 13;
      if (i) {
        var r = this.adapter.getActionFromEvent(n);
        if (!r) {
          var a = n.composedPath ? n.composedPath()[0] : n.target, o = this.suppressDefaultPressSelector ? !this.adapter.eventTargetMatches(a, this.suppressDefaultPressSelector) : !0;
          i && o && this.adapter.clickDefaultButton();
        }
      }
    }, e.prototype.handleDocumentKeydown = function(n) {
      var i = n.key === "Escape" || n.keyCode === 27;
      i && this.escapeKeyAction !== "" && this.close(this.escapeKeyAction);
    }, e.prototype.handleScrollEvent = function() {
      var n = this;
      this.animFrame.request(so.POLL_SCROLL_POS, function() {
        n.toggleScrollDividerHeader(), n.toggleScrollDividerFooter();
      });
    }, e.prototype.layoutInternal = function() {
      this.autoStackButtons && this.detectStackedButtons(), this.toggleScrollableClasses();
    }, e.prototype.handleAnimationTimerEnd = function() {
      this.animationTimer = 0, this.adapter.removeClass(rt.OPENING), this.adapter.removeClass(rt.CLOSING);
    }, e.prototype.runNextAnimationFrame = function(n) {
      var i = this;
      cancelAnimationFrame(this.animationFrame), this.animationFrame = requestAnimationFrame(function() {
        i.animationFrame = 0, clearTimeout(i.animationTimer), i.animationTimer = setTimeout(n, 0);
      });
    }, e.prototype.detectStackedButtons = function() {
      this.adapter.removeClass(rt.STACKED);
      var n = this.adapter.areButtonsStacked();
      n && this.adapter.addClass(rt.STACKED), n !== this.areButtonsStacked && (this.adapter.reverseButtons(), this.areButtonsStacked = n);
    }, e.prototype.toggleScrollableClasses = function() {
      this.adapter.removeClass(rt.SCROLLABLE), this.adapter.isContentScrollable() && (this.adapter.addClass(rt.SCROLLABLE), this.isFullscreen && (this.toggleScrollDividerHeader(), this.toggleScrollDividerFooter()));
    }, e.prototype.toggleScrollDividerHeader = function() {
      this.adapter.isScrollableContentAtTop() ? this.adapter.hasClass(rt.SCROLL_DIVIDER_HEADER) && this.adapter.removeClass(rt.SCROLL_DIVIDER_HEADER) : this.adapter.addClass(rt.SCROLL_DIVIDER_HEADER);
    }, e.prototype.toggleScrollDividerFooter = function() {
      this.adapter.isScrollableContentAtBottom() ? this.adapter.hasClass(rt.SCROLL_DIVIDER_FOOTER) && this.adapter.removeClass(rt.SCROLL_DIVIDER_FOOTER) : this.adapter.addClass(rt.SCROLL_DIVIDER_FOOTER);
    }, e;
  }(Dt)
), ng = /* @__PURE__ */ ge('<div class="mdc-dialog__surface-scrim"></div>'), ig = /* @__PURE__ */ ge('<div><div><div><!> <!></div></div> <div class="mdc-dialog__scrim"></div></div> <!>', 1);
function rg(t, e) {
  we(e, !0);
  const n = () => Rt(G, "$aboveFullscreenShown", i), [i, r] = gn(), { FocusTrap: a } = Em, { closest: o, matches: u } = Ra;
  let l = m(e, "use", 19, () => []), c = m(e, "class", 3, ""), d = m(e, "open", 15, !1), h = m(e, "selection", 3, !1), f = m(e, "escapeKeyAction", 3, "close"), v = m(e, "scrimClickAction", 3, "close"), p = m(e, "autoStackButtons", 3, !0), g = m(e, "fullscreen", 3, !1), _ = m(e, "sheet", 3, !1), C = m(e, "noContentPadding", 3, !1), x = m(e, "container$class", 3, ""), S = m(e, "surface$class", 3, ""), b = /* @__PURE__ */ Ve(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "open",
    "selection",
    "escapeKeyAction",
    "scrimClickAction",
    "autoStackButtons",
    "fullscreen",
    "sheet",
    "noContentPadding",
    "container$class",
    "surface$class",
    "children",
    "over"
  ]), E, y = /* @__PURE__ */ xe(void 0), T = new Yr(), A = Ee({}), O, B = bt(!1), Z = se("SMUI:dialog:aboveFullscreen"), G = se("SMUI:dialog:aboveFullscreenShown") ?? bt(!1), j = se("SMUI:addLayoutListener"), K, k = [], P = (H) => (k.push(H), () => {
    const N = k.indexOf(H);
    N >= 0 && k.splice(N, 1);
  });
  te("SMUI:dialog:actions:reversed", B), te("SMUI:addLayoutListener", P), te("SMUI:dialog:selection", h()), te("SMUI:dialog:aboveFullscreen", Z || g()), te("SMUI:dialog:aboveFullscreenShown", G), _() && te("SMUI:icon-button:context", "dialog:sheet"), Ae(() => {
    s(y) && s(y).getEscapeKeyAction() !== f() && s(y).setEscapeKeyAction(f());
  }), Ae(() => {
    s(y) && s(y).getScrimClickAction() !== v() && s(y).setScrimClickAction(v());
  }), Ae(() => {
    s(y) && s(y).getAutoStackButtons() !== p() && s(y).setAutoStackButtons(p());
  }), Ae(() => {
    p() || kt(B, !0);
  }), j && (K = j(de)), Ae(() => {
    s(y) && s(y).isOpen() !== d() && (d() ? s(y).open({ isAboveFullscreenDialog: !!Z }) : s(y).close());
  });
  let M = n();
  Ae(() => {
    g() && s(y) && M !== n() && (M = n(), n() ? s(y).showSurfaceScrim() : s(y).hideSurfaceScrim());
  }), st(() => (O = new a(E, { initialFocusEl: R() ?? void 0 }), ae(
    y,
    new tg({
      addBodyClass: (H) => document.body.classList.add(H),
      addClass: re,
      areButtonsStacked: () => $p(I()),
      clickDefaultButton: () => {
        const H = L();
        H && H.click();
      },
      eventTargetMatches: (H, N) => H ? u(H, N) : !1,
      getActionFromEvent: (H) => {
        if (!H.target)
          return "";
        const N = o(H.target, "[data-mdc-dialog-action]");
        return N && N.getAttribute("data-mdc-dialog-action");
      },
      getInitialFocusEl: R,
      hasClass: z,
      isContentScrollable: () => Zp($()),
      notifyClosed: (H) => {
        d(!1), ke(ne(), "SMUIDialogClosed", H ? { action: H } : {});
      },
      notifyClosing: (H) => ke(ne(), "SMUIDialogClosing", H ? { action: H } : {}),
      notifyOpened: () => ke(ne(), "SMUIDialogOpened", {}),
      notifyOpening: () => ke(ne(), "SMUIDialogOpening", {}),
      releaseFocus: () => O.releaseFocus(),
      removeBodyClass: (H) => document.body.classList.remove(H),
      removeClass: U,
      reverseButtons: () => {
        kt(B, !0);
      },
      trapFocus: () => O.trapFocus(),
      registerContentEventHandler: (H, N) => {
        const Y = $();
        Y instanceof HTMLElement && T.on(Y, H, N);
      },
      deregisterContentEventHandler: (H, N) => {
        const Y = $();
        Y instanceof HTMLElement && T.off(Y, H, N);
      },
      isScrollableContentAtTop: () => Qp($()),
      isScrollableContentAtBottom: () => Jp($()),
      registerWindowEventHandler: (H, N) => T.on(window, H, N),
      deregisterWindowEventHandler: (H, N) => T.off(window, H, N)
    }),
    !0
  ), s(y).init(), () => {
    var H;
    (H = s(y)) == null || H.destroy(), T.clear();
  })), Pn(() => {
    K && K();
  });
  function z(H) {
    return H in A ? A[H] : ne().classList.contains(H);
  }
  function re(H) {
    A[H] || (A[H] = !0);
  }
  function U(H) {
    (!(H in A) || A[H]) && (A[H] = !1);
  }
  function I() {
    return [].slice.call(ne().querySelectorAll(".mdc-dialog__button"));
  }
  function L() {
    return ne().querySelector("[data-mdc-dialog-button-default]");
  }
  function $() {
    return ne().querySelector(".mdc-dialog__content");
  }
  function R() {
    return ne().querySelector("[data-mdc-dialog-initial-focus]");
  }
  function W() {
    Z && kt(G, !0), requestAnimationFrame(() => {
      k.forEach((H) => H());
    });
  }
  function ce() {
    k.forEach((H) => H());
  }
  function V() {
    Z && kt(G, !1);
  }
  function oe() {
    return d();
  }
  function Q(H) {
    d(H);
  }
  function de() {
    var H;
    return (H = s(y)) == null ? void 0 : H.layout();
  }
  function ne() {
    return E;
  }
  var qe = { isOpen: oe, setOpen: Q, layout: de, getElement: ne }, je = ig();
  ca("resize", $a, () => d() && s(y) && s(y).layout()), ca("orientationchange", $a, () => d() && s(y) && s(y).layout()), ca("keydown", Ds.body, (H) => s(y) && s(y).handleDocumentKeydown(H));
  var De = J(je), Le = (H) => {
    var N;
    W(), (N = e.onSMUIDialogOpening) == null || N.call(e, H);
  }, ue = (H) => {
    var N;
    ce(), (N = e.onSMUIDialogOpened) == null || N.call(e, H);
  }, Oe = (H) => {
    var N;
    V(), (N = e.onSMUIDialogClosed) == null || N.call(e, H);
  }, Ze = (H) => {
    var N;
    s(y) && s(y).handleClick(H), (N = e.onclick) == null || N.call(e, H);
  }, F = (H) => {
    var N;
    s(y) && s(y).handleKeydown(H), (N = e.onkeydown) == null || N.call(e, H);
  };
  He(
    De,
    (H, N) => ({
      class: H,
      role: "alertdialog",
      "aria-modal": "true",
      ...N,
      onSMUIDialogOpening: Le,
      onSMUIDialogOpened: ue,
      onSMUIDialogClosed: Oe,
      onclick: Ze,
      onkeydown: F
    }),
    [
      () => Ne({
        "mdc-dialog": !0,
        "mdc-dialog--stacked": !p(),
        "mdc-dialog--fullscreen": g(),
        "mdc-dialog--sheet": _(),
        "mdc-dialog--no-content-padding": C(),
        "smui-dialog--selection": h(),
        ...A,
        [c()]: !0
      }),
      () => ir(b, ["container$", "surface$"])
    ]
  );
  var q = _e(De);
  He(q, (H, N) => ({ class: H, ...N }), [
    () => Ne({ "mdc-dialog__container": !0, [x()]: !0 }),
    () => ot(b, "container$")
  ]);
  var ee = _e(q);
  He(ee, (H, N) => ({ class: H, role: "alertdialog", "aria-modal": "true", ...N }), [
    () => Ne({ "mdc-dialog__surface": !0, [S()]: !0 }),
    () => ot(b, "surface$")
  ]);
  var Ce = _e(ee);
  Ie(Ce, () => e.children ?? me);
  var Tt = ye(Ce, 2);
  {
    var pt = (H) => {
      var N = ng();
      ca("transitionend", N, () => s(y) && s(y).handleSurfaceScrimTransitionEnd()), w(H, N);
    };
    he(Tt, (H) => {
      g() && H(pt);
    });
  }
  Se(De, (H) => E = H, () => E), Ue(De, (H, N) => X == null ? void 0 : X(H, N), l);
  var on = ye(De, 2);
  Ie(on, () => e.over ?? me), w(t, je);
  var pe = Re(qe);
  return r(), pe;
}
function ag(t, e) {
  we(e, !0);
  let n = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "children"]), i;
  function r() {
    return i.getElement();
  }
  var a = { getElement: r };
  return Se(
    Ma(t, et({ _smuiClass: "mdc-dialog__content", tag: "div" }, () => n, {
      children: (o, u) => {
        var l = le(), c = J(l);
        Ie(c, () => e.children ?? me), w(o, l);
      },
      $$slots: { default: !0 }
    })),
    (o) => i = o,
    () => i
  ), Re(a);
}
function og(t, e) {
  we(e, !0);
  let n = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "children"]), i;
  function r() {
    return i.getElement();
  }
  var a = { getElement: r };
  return Se(
    Ma(t, et(
      {
        _smuiClass: "mdc-dialog__actions",
        _smuiClassMap: {
          "smui-dialog__actions--reversed": "SMUI:dialog:actions:reversed"
        },
        _smuiContexts: { "SMUI:button:context": "dialog:action" },
        tag: "div"
      },
      () => n,
      {
        children: (o, u) => {
          var l = le(), c = J(l);
          Ie(c, () => e.children ?? me), w(o, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => i = o,
    () => i
  ), Re(a);
}
var sg = /* @__PURE__ */ ge('<div class="dialog-title svelte-187m1sc"><!></div> <!> <!>', 1);
function lg(t, e) {
  we(e, !0);
  let n = m(e, "open", 15, !1), i = m(e, "onClose", 3, () => {
  });
  rg(t, {
    "aria-labelledby": "large-scroll-title",
    "aria-describedby": "large-scroll-content",
    onSMUIDialogClosed: (r) => {
      n(!1), i()();
    },
    surface$style: "width: 1080px; max-width: calc(100vw - 32px);",
    get open() {
      return n();
    },
    set open(r) {
      n(r);
    },
    children: (r, a) => {
      var o = sg(), u = J(o), l = _e(u);
      Ie(l, () => e.title ?? me);
      var c = ye(u, 2);
      ag(c, {
        id: "large-scroll-content",
        children: (h, f) => {
          var v = le(), p = J(v);
          Ie(p, () => e.content ?? me), w(h, v);
        },
        $$slots: { default: !0 }
      });
      var d = ye(c, 2);
      og(d, {
        children: (h, f) => {
          var v = le(), p = J(v);
          Ie(p, () => e.actions ?? me), w(h, v);
        },
        $$slots: { default: !0 }
      }), w(r, o);
    },
    $$slots: { default: !0 }
  }), Re();
}
var ug = /* @__PURE__ */ ge("<div><!></div>");
function cg(t, e) {
  we(e, !0);
  let n = m(e, "use", 19, () => []), i = m(e, "class", 3, ""), r = m(e, "variant", 3, "raised"), a = m(e, "square", 3, !1), o = m(e, "color", 3, "default"), u = m(e, "elevation", 3, 1), l = m(e, "transition", 3, !1), c = /* @__PURE__ */ Ve(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "variant",
    "square",
    "color",
    "elevation",
    "transition",
    "children"
  ]), d;
  function h() {
    return d;
  }
  var f = { getElement: h }, v = ug();
  He(v, (g) => ({ class: g, ...c }), [
    () => Ne({
      "smui-paper": !0,
      "smui-paper--raised": r() === "raised",
      "smui-paper--unelevated": r() === "unelevated",
      "smui-paper--outlined": r() === "outlined",
      ["smui-paper--elevation-z" + u()]: u() !== 0 && r() === "raised",
      "smui-paper--rounded": !a(),
      ["smui-paper--color-" + o()]: o() !== "default",
      "smui-paper-transition": l(),
      [i()]: !0
    })
  ]);
  var p = _e(v);
  return Ie(p, () => e.children ?? me), Se(v, (g) => d = g, () => d), Ue(v, (g, _) => X == null ? void 0 : X(g, _), n), w(t, v), Re(f);
}
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var bs;
(function(t) {
  t.POLITE = "polite", t.ASSERTIVE = "assertive";
})(bs || (bs = {}));
var dg = "data-mdc-dom-announce";
function fg(t, e) {
  hg.getInstance().say(t, e);
}
var hg = (
  /** @class */
  function() {
    function t() {
      this.liveRegions = /* @__PURE__ */ new Map();
    }
    return t.getInstance = function() {
      return t.instance || (t.instance = new t()), t.instance;
    }, t.prototype.say = function(e, n) {
      var i, r, a = (i = n == null ? void 0 : n.priority) !== null && i !== void 0 ? i : bs.POLITE, o = (r = n == null ? void 0 : n.ownerDocument) !== null && r !== void 0 ? r : document, u = this.getLiveRegion(a, o);
      u.textContent = "", setTimeout(function() {
        u.textContent = e, o.addEventListener("click", l);
      }, 1);
      function l() {
        u.textContent = "", o.removeEventListener("click", l);
      }
    }, t.prototype.getLiveRegion = function(e, n) {
      var i = this.liveRegions.get(n);
      i || (i = /* @__PURE__ */ new Map(), this.liveRegions.set(n, i));
      var r = i.get(e);
      if (r && n.body.contains(r))
        return r;
      var a = this.createLiveRegion(e, n);
      return i.set(e, a), a;
    }, t.prototype.createLiveRegion = function(e, n) {
      var i = n.createElement("div");
      return i.style.position = "absolute", i.style.top = "-9999px", i.style.left = "-9999px", i.style.height = "1px", i.style.overflow = "hidden", i.setAttribute("aria-atomic", "true"), i.setAttribute("aria-live", e), i.setAttribute(dg, "true"), n.body.appendChild(i), i;
    }, t;
  }()
);
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var vi;
(function(t) {
  t[t.UNSPECIFIED = 0] = "UNSPECIFIED", t[t.CLICK = 1] = "CLICK", t[t.BACKSPACE_KEY = 2] = "BACKSPACE_KEY", t[t.DELETE_KEY = 3] = "DELETE_KEY", t[t.SPACEBAR_KEY = 4] = "SPACEBAR_KEY", t[t.ENTER_KEY = 5] = "ENTER_KEY";
})(vi || (vi = {}));
var Mn = {
  ARIA_HIDDEN: "aria-hidden",
  INTERACTION_EVENT: "MDCChipTrailingAction:interaction",
  NAVIGATION_EVENT: "MDCChipTrailingAction:navigation",
  TAB_INDEX: "tabindex"
};
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Hc = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      return t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Mn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          focus: function() {
          },
          getAttribute: function() {
            return null;
          },
          setAttribute: function() {
          },
          notifyInteraction: function() {
          },
          notifyNavigation: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.handleClick = function(n) {
      n.stopPropagation(), this.adapter.notifyInteraction(vi.CLICK);
    }, e.prototype.handleKeydown = function(n) {
      n.stopPropagation();
      var i = yt(n);
      if (this.shouldNotifyInteractionFromKey(i)) {
        var r = this.getTriggerFromKey(i);
        this.adapter.notifyInteraction(r);
        return;
      }
      if (Cm(n)) {
        this.adapter.notifyNavigation(i);
        return;
      }
    }, e.prototype.removeFocus = function() {
      this.adapter.setAttribute(Mn.TAB_INDEX, "-1");
    }, e.prototype.focus = function() {
      this.adapter.setAttribute(Mn.TAB_INDEX, "0"), this.adapter.focus();
    }, e.prototype.isNavigable = function() {
      return this.adapter.getAttribute(Mn.ARIA_HIDDEN) !== "true";
    }, e.prototype.shouldNotifyInteractionFromKey = function(n) {
      var i = n === Me.ENTER || n === Me.SPACEBAR, r = n === Me.BACKSPACE || n === Me.DELETE;
      return i || r;
    }, e.prototype.getTriggerFromKey = function(n) {
      return n === Me.SPACEBAR ? vi.SPACEBAR_KEY : n === Me.ENTER ? vi.ENTER_KEY : n === Me.DELETE ? vi.DELETE_KEY : n === Me.BACKSPACE ? vi.BACKSPACE_KEY : vi.UNSPECIFIED;
    }, e;
  }(Dt)
);
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Uc = (
  /** @class */
  function(t) {
    tt(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return Object.defineProperty(e.prototype, "ripple", {
      get: function() {
        return this.rippleSurface;
      },
      enumerable: !1,
      configurable: !0
    }), e.attachTo = function(n) {
      return new e(n);
    }, e.prototype.initialize = function(n) {
      n === void 0 && (n = function(r, a) {
        return new ro(r, a);
      });
      var i = ro.createAdapter(this);
      this.rippleSurface = n(this.root, new xo(i));
    }, e.prototype.initialSyncWithDOM = function() {
      var n = this;
      this.handleClick = function(i) {
        n.foundation.handleClick(i);
      }, this.handleKeydown = function(i) {
        n.foundation.handleKeydown(i);
      }, this.listen("click", this.handleClick), this.listen("keydown", this.handleKeydown);
    }, e.prototype.destroy = function() {
      this.rippleSurface.destroy(), this.unlisten("click", this.handleClick), this.unlisten("keydown", this.handleKeydown), t.prototype.destroy.call(this);
    }, e.prototype.getDefaultFoundation = function() {
      var n = this, i = {
        focus: function() {
          n.root.focus();
        },
        getAttribute: function(r) {
          return n.root.getAttribute(r);
        },
        notifyInteraction: function(r) {
          return n.emit(
            Mn.INTERACTION_EVENT,
            { trigger: r },
            !0
            /* shouldBubble */
          );
        },
        notifyNavigation: function(r) {
          n.emit(
            Mn.NAVIGATION_EVENT,
            { key: r },
            !0
            /* shouldBubble */
          );
        },
        setAttribute: function(r, a) {
          n.root.setAttribute(r, a);
        }
      };
      return new Hc(i);
    }, e.prototype.isNavigable = function() {
      return this.foundation.isNavigable();
    }, e.prototype.focus = function() {
      this.foundation.focus();
    }, e.prototype.removeFocus = function() {
      this.foundation.removeFocus();
    }, e;
  }(So)
);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var jn;
(function(t) {
  t.LEFT = "left", t.RIGHT = "right";
})(jn || (jn = {}));
var ii;
(function(t) {
  t.PRIMARY = "primary", t.TRAILING = "trailing", t.NONE = "none";
})(ii || (ii = {}));
var Te = {
  ADDED_ANNOUNCEMENT_ATTRIBUTE: "data-mdc-chip-added-announcement",
  ARIA_CHECKED: "aria-checked",
  ARROW_DOWN_KEY: "ArrowDown",
  ARROW_LEFT_KEY: "ArrowLeft",
  ARROW_RIGHT_KEY: "ArrowRight",
  ARROW_UP_KEY: "ArrowUp",
  BACKSPACE_KEY: "Backspace",
  CHECKMARK_SELECTOR: ".mdc-chip__checkmark",
  DELETE_KEY: "Delete",
  END_KEY: "End",
  ENTER_KEY: "Enter",
  ENTRY_ANIMATION_NAME: "mdc-chip-entry",
  HOME_KEY: "Home",
  IE_ARROW_DOWN_KEY: "Down",
  IE_ARROW_LEFT_KEY: "Left",
  IE_ARROW_RIGHT_KEY: "Right",
  IE_ARROW_UP_KEY: "Up",
  IE_DELETE_KEY: "Del",
  INTERACTION_EVENT: "MDCChip:interaction",
  LEADING_ICON_SELECTOR: ".mdc-chip__icon--leading",
  NAVIGATION_EVENT: "MDCChip:navigation",
  PRIMARY_ACTION_SELECTOR: ".mdc-chip__primary-action",
  REMOVED_ANNOUNCEMENT_ATTRIBUTE: "data-mdc-chip-removed-announcement",
  REMOVAL_EVENT: "MDCChip:removal",
  SELECTION_EVENT: "MDCChip:selection",
  SPACEBAR_KEY: " ",
  TAB_INDEX: "tabindex",
  TRAILING_ACTION_SELECTOR: ".mdc-chip-trailing-action",
  TRAILING_ICON_INTERACTION_EVENT: "MDCChip:trailingIconInteraction",
  TRAILING_ICON_SELECTOR: ".mdc-chip__icon--trailing"
}, At = {
  CHECKMARK: "mdc-chip__checkmark",
  CHIP_EXIT: "mdc-chip--exit",
  DELETABLE: "mdc-chip--deletable",
  EDITABLE: "mdc-chip--editable",
  EDITING: "mdc-chip--editing",
  HIDDEN_LEADING_ICON: "mdc-chip__icon--leading-hidden",
  LEADING_ICON: "mdc-chip__icon--leading",
  PRIMARY_ACTION: "mdc-chip__primary-action",
  PRIMARY_ACTION_FOCUSED: "mdc-chip--primary-action-focused",
  SELECTED: "mdc-chip--selected",
  TEXT: "mdc-chip__text",
  TRAILING_ACTION: "mdc-chip__trailing-action",
  TRAILING_ICON: "mdc-chip__icon--trailing"
}, Tn = /* @__PURE__ */ new Set();
Tn.add(Te.ARROW_LEFT_KEY);
Tn.add(Te.ARROW_RIGHT_KEY);
Tn.add(Te.ARROW_DOWN_KEY);
Tn.add(Te.ARROW_UP_KEY);
Tn.add(Te.END_KEY);
Tn.add(Te.HOME_KEY);
Tn.add(Te.IE_ARROW_LEFT_KEY);
Tn.add(Te.IE_ARROW_RIGHT_KEY);
Tn.add(Te.IE_ARROW_DOWN_KEY);
Tn.add(Te.IE_ARROW_UP_KEY);
var Di = /* @__PURE__ */ new Set();
Di.add(Te.ARROW_UP_KEY);
Di.add(Te.ARROW_DOWN_KEY);
Di.add(Te.HOME_KEY);
Di.add(Te.END_KEY);
Di.add(Te.IE_ARROW_UP_KEY);
Di.add(Te.IE_ARROW_DOWN_KEY);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Kl = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0
}, Ar;
(function(t) {
  t[t.SHOULD_FOCUS = 0] = "SHOULD_FOCUS", t[t.SHOULD_NOT_FOCUS = 1] = "SHOULD_NOT_FOCUS";
})(Ar || (Ar = {}));
var js = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      var i = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return i.shouldRemoveOnTrailingIconClick = !0, i.shouldFocusPrimaryActionOnClick = !0, i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Te;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return At;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          addClassToLeadingIcon: function() {
          },
          eventTargetHasClass: function() {
            return !1;
          },
          focusPrimaryAction: function() {
          },
          focusTrailingAction: function() {
          },
          getAttribute: function() {
            return null;
          },
          getCheckmarkBoundingClientRect: function() {
            return Kl;
          },
          getComputedStyleValue: function() {
            return "";
          },
          getRootBoundingClientRect: function() {
            return Kl;
          },
          hasClass: function() {
            return !1;
          },
          hasLeadingIcon: function() {
            return !1;
          },
          isRTL: function() {
            return !1;
          },
          isTrailingActionNavigable: function() {
            return !1;
          },
          notifyEditFinish: function() {
          },
          notifyEditStart: function() {
          },
          notifyInteraction: function() {
          },
          notifyNavigation: function() {
          },
          notifyRemoval: function() {
          },
          notifySelection: function() {
          },
          notifyTrailingIconInteraction: function() {
          },
          removeClass: function() {
          },
          removeClassFromLeadingIcon: function() {
          },
          removeTrailingActionFocus: function() {
          },
          setPrimaryActionAttr: function() {
          },
          setStyleProperty: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.isSelected = function() {
      return this.adapter.hasClass(At.SELECTED);
    }, e.prototype.isEditable = function() {
      return this.adapter.hasClass(At.EDITABLE);
    }, e.prototype.isEditing = function() {
      return this.adapter.hasClass(At.EDITING);
    }, e.prototype.setSelected = function(n) {
      this.setSelectedImpl(n), this.notifySelection(n);
    }, e.prototype.setSelectedFromChipSet = function(n, i) {
      this.setSelectedImpl(n), i && this.notifyIgnoredSelection(n);
    }, e.prototype.getShouldRemoveOnTrailingIconClick = function() {
      return this.shouldRemoveOnTrailingIconClick;
    }, e.prototype.setShouldRemoveOnTrailingIconClick = function(n) {
      this.shouldRemoveOnTrailingIconClick = n;
    }, e.prototype.setShouldFocusPrimaryActionOnClick = function(n) {
      this.shouldFocusPrimaryActionOnClick = n;
    }, e.prototype.getDimensions = function() {
      var n = this, i = function() {
        return n.adapter.getRootBoundingClientRect();
      }, r = function() {
        return n.adapter.getCheckmarkBoundingClientRect();
      };
      if (!this.adapter.hasLeadingIcon()) {
        var a = r();
        if (a) {
          var o = i();
          return {
            bottom: o.bottom,
            height: o.height,
            left: o.left,
            right: o.right,
            top: o.top,
            width: o.width + a.height
          };
        }
      }
      return i();
    }, e.prototype.beginExit = function() {
      this.adapter.addClass(At.CHIP_EXIT);
    }, e.prototype.handleClick = function() {
      this.adapter.notifyInteraction(), this.setPrimaryActionFocusable(this.getFocusBehavior());
    }, e.prototype.handleDoubleClick = function() {
      this.isEditable() && this.startEditing();
    }, e.prototype.handleTransitionEnd = function(n) {
      var i = this, r = this.adapter.eventTargetHasClass(n.target, At.CHIP_EXIT), a = n.propertyName === "width", o = n.propertyName === "opacity";
      if (r && o) {
        var u = this.adapter.getComputedStyleValue("width");
        requestAnimationFrame(function() {
          i.adapter.setStyleProperty("width", u), i.adapter.setStyleProperty("padding", "0"), i.adapter.setStyleProperty("margin", "0"), requestAnimationFrame(function() {
            i.adapter.setStyleProperty("width", "0");
          });
        });
        return;
      }
      if (r && a) {
        this.removeFocus();
        var l = this.adapter.getAttribute(Te.REMOVED_ANNOUNCEMENT_ATTRIBUTE);
        this.adapter.notifyRemoval(l);
      }
      if (o) {
        var c = this.adapter.eventTargetHasClass(n.target, At.LEADING_ICON) && this.adapter.hasClass(At.SELECTED), d = this.adapter.eventTargetHasClass(n.target, At.CHECKMARK) && !this.adapter.hasClass(At.SELECTED);
        if (c) {
          this.adapter.addClassToLeadingIcon(At.HIDDEN_LEADING_ICON);
          return;
        }
        if (d) {
          this.adapter.removeClassFromLeadingIcon(At.HIDDEN_LEADING_ICON);
          return;
        }
      }
    }, e.prototype.handleFocusIn = function(n) {
      this.eventFromPrimaryAction(n) && this.adapter.addClass(At.PRIMARY_ACTION_FOCUSED);
    }, e.prototype.handleFocusOut = function(n) {
      this.eventFromPrimaryAction(n) && (this.isEditing() && this.finishEditing(), this.adapter.removeClass(At.PRIMARY_ACTION_FOCUSED));
    }, e.prototype.handleTrailingActionInteraction = function() {
      this.adapter.notifyTrailingIconInteraction(), this.removeChip();
    }, e.prototype.handleKeydown = function(n) {
      if (this.isEditing()) {
        this.shouldFinishEditing(n) && (n.preventDefault(), this.finishEditing());
        return;
      }
      if (this.isEditable() && this.shouldStartEditing(n) && (n.preventDefault(), this.startEditing()), this.shouldNotifyInteraction(n)) {
        this.adapter.notifyInteraction(), this.setPrimaryActionFocusable(this.getFocusBehavior());
        return;
      }
      if (this.isDeleteAction(n)) {
        n.preventDefault(), this.removeChip();
        return;
      }
      Tn.has(n.key) && (n.preventDefault(), this.focusNextAction(n.key, ii.PRIMARY));
    }, e.prototype.handleTrailingActionNavigation = function(n) {
      this.focusNextAction(n.detail.key, ii.TRAILING);
    }, e.prototype.removeFocus = function() {
      this.adapter.setPrimaryActionAttr(Te.TAB_INDEX, "-1"), this.adapter.removeTrailingActionFocus();
    }, e.prototype.focusPrimaryAction = function() {
      this.setPrimaryActionFocusable(Ar.SHOULD_FOCUS);
    }, e.prototype.focusTrailingAction = function() {
      var n = this.adapter.isTrailingActionNavigable();
      if (n) {
        this.adapter.setPrimaryActionAttr(Te.TAB_INDEX, "-1"), this.adapter.focusTrailingAction();
        return;
      }
      this.focusPrimaryAction();
    }, e.prototype.setPrimaryActionFocusable = function(n) {
      this.adapter.setPrimaryActionAttr(Te.TAB_INDEX, "0"), n === Ar.SHOULD_FOCUS && this.adapter.focusPrimaryAction(), this.adapter.removeTrailingActionFocus();
    }, e.prototype.getFocusBehavior = function() {
      return this.shouldFocusPrimaryActionOnClick ? Ar.SHOULD_FOCUS : Ar.SHOULD_NOT_FOCUS;
    }, e.prototype.focusNextAction = function(n, i) {
      var r = this.adapter.isTrailingActionNavigable(), a = this.getDirection(n);
      if (Di.has(n) || !r) {
        this.adapter.notifyNavigation(n, i);
        return;
      }
      if (i === ii.PRIMARY && a === jn.RIGHT) {
        this.focusTrailingAction();
        return;
      }
      if (i === ii.TRAILING && a === jn.LEFT) {
        this.focusPrimaryAction();
        return;
      }
      this.adapter.notifyNavigation(n, ii.NONE);
    }, e.prototype.getDirection = function(n) {
      var i = this.adapter.isRTL(), r = n === Te.ARROW_LEFT_KEY || n === Te.IE_ARROW_LEFT_KEY, a = n === Te.ARROW_RIGHT_KEY || n === Te.IE_ARROW_RIGHT_KEY;
      return !i && r || i && a ? jn.LEFT : jn.RIGHT;
    }, e.prototype.removeChip = function() {
      this.shouldRemoveOnTrailingIconClick && this.beginExit();
    }, e.prototype.shouldStartEditing = function(n) {
      return this.eventFromPrimaryAction(n) && n.key === Te.ENTER_KEY;
    }, e.prototype.shouldFinishEditing = function(n) {
      return n.key === Te.ENTER_KEY;
    }, e.prototype.shouldNotifyInteraction = function(n) {
      return n.key === Te.ENTER_KEY || n.key === Te.SPACEBAR_KEY;
    }, e.prototype.isDeleteAction = function(n) {
      var i = this.adapter.hasClass(At.DELETABLE);
      return i && (n.key === Te.BACKSPACE_KEY || n.key === Te.DELETE_KEY || n.key === Te.IE_DELETE_KEY);
    }, e.prototype.setSelectedImpl = function(n) {
      n ? (this.adapter.addClass(At.SELECTED), this.adapter.setPrimaryActionAttr(Te.ARIA_CHECKED, "true")) : (this.adapter.removeClass(At.SELECTED), this.adapter.setPrimaryActionAttr(Te.ARIA_CHECKED, "false"));
    }, e.prototype.notifySelection = function(n) {
      this.adapter.notifySelection(n, !1);
    }, e.prototype.notifyIgnoredSelection = function(n) {
      this.adapter.notifySelection(n, !0);
    }, e.prototype.eventFromPrimaryAction = function(n) {
      return this.adapter.eventTargetHasClass(n.target, At.PRIMARY_ACTION);
    }, e.prototype.startEditing = function() {
      this.adapter.addClass(At.EDITING), this.adapter.notifyEditStart();
    }, e.prototype.finishEditing = function() {
      this.adapter.removeClass(At.EDITING), this.adapter.notifyEditFinish();
    }, e;
  }(Dt)
);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Bc = (
  /** @class */
  function(t) {
    tt(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return Object.defineProperty(e.prototype, "selected", {
      /**
       * @return Whether the chip is selected.
       */
      get: function() {
        return this.foundation.isSelected();
      },
      /**
       * Sets selected state on the chip.
       */
      set: function(n) {
        this.foundation.setSelected(n);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldRemoveOnTrailingIconClick", {
      /**
       * @return Whether a trailing icon click should trigger exit/removal of the chip.
       */
      get: function() {
        return this.foundation.getShouldRemoveOnTrailingIconClick();
      },
      /**
       * Sets whether a trailing icon click should trigger exit/removal of the chip.
       */
      set: function(n) {
        this.foundation.setShouldRemoveOnTrailingIconClick(n);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "setShouldFocusPrimaryActionOnClick", {
      /**
       * Sets whether a clicking on the chip should focus the primary action.
       */
      set: function(n) {
        this.foundation.setShouldFocusPrimaryActionOnClick(n);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "ripple", {
      get: function() {
        return this.rippleSurface;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "id", {
      get: function() {
        return this.root.id;
      },
      enumerable: !1,
      configurable: !0
    }), e.attachTo = function(n) {
      return new e(n);
    }, e.prototype.initialize = function(n, i) {
      var r = this;
      n === void 0 && (n = function(u, l) {
        return new ro(u, l);
      }), i === void 0 && (i = function(u) {
        return new Uc(u);
      }), this.leadingIcon = this.root.querySelector(Te.LEADING_ICON_SELECTOR), this.checkmark = this.root.querySelector(Te.CHECKMARK_SELECTOR), this.primaryAction = this.root.querySelector(Te.PRIMARY_ACTION_SELECTOR);
      var a = this.root.querySelector(Te.TRAILING_ACTION_SELECTOR);
      a && (this.trailingAction = i(a));
      var o = fe(fe({}, ro.createAdapter(this)), { computeBoundingRect: function() {
        return r.foundation.getDimensions();
      } });
      this.rippleSurface = n(this.root, new xo(o));
    }, e.prototype.initialSyncWithDOM = function() {
      var n = this;
      this.handleTrailingActionInteraction = function() {
        n.foundation.handleTrailingActionInteraction();
      }, this.handleTrailingActionNavigation = function(i) {
        n.foundation.handleTrailingActionNavigation(i);
      }, this.handleClick = function() {
        n.foundation.handleClick();
      }, this.handleKeydown = function(i) {
        n.foundation.handleKeydown(i);
      }, this.handleTransitionEnd = function(i) {
        n.foundation.handleTransitionEnd(i);
      }, this.handleFocusIn = function(i) {
        n.foundation.handleFocusIn(i);
      }, this.handleFocusOut = function(i) {
        n.foundation.handleFocusOut(i);
      }, this.listen("transitionend", this.handleTransitionEnd), this.listen("click", this.handleClick), this.listen("keydown", this.handleKeydown), this.listen("focusin", this.handleFocusIn), this.listen("focusout", this.handleFocusOut), this.trailingAction && (this.listen(Mn.INTERACTION_EVENT, this.handleTrailingActionInteraction), this.listen(Mn.NAVIGATION_EVENT, this.handleTrailingActionNavigation));
    }, e.prototype.destroy = function() {
      this.rippleSurface.destroy(), this.unlisten("transitionend", this.handleTransitionEnd), this.unlisten("keydown", this.handleKeydown), this.unlisten("click", this.handleClick), this.unlisten("focusin", this.handleFocusIn), this.unlisten("focusout", this.handleFocusOut), this.trailingAction && (this.unlisten(Mn.INTERACTION_EVENT, this.handleTrailingActionInteraction), this.unlisten(Mn.NAVIGATION_EVENT, this.handleTrailingActionNavigation)), t.prototype.destroy.call(this);
    }, e.prototype.beginExit = function() {
      this.foundation.beginExit();
    }, e.prototype.getDefaultFoundation = function() {
      var n = this, i = {
        addClass: function(r) {
          return n.root.classList.add(r);
        },
        addClassToLeadingIcon: function(r) {
          n.leadingIcon && n.leadingIcon.classList.add(r);
        },
        eventTargetHasClass: function(r, a) {
          return r ? r.classList.contains(a) : !1;
        },
        focusPrimaryAction: function() {
          n.primaryAction && n.primaryAction.focus();
        },
        focusTrailingAction: function() {
          n.trailingAction && n.trailingAction.focus();
        },
        getAttribute: function(r) {
          return n.root.getAttribute(r);
        },
        getCheckmarkBoundingClientRect: function() {
          return n.checkmark ? n.checkmark.getBoundingClientRect() : null;
        },
        getComputedStyleValue: function(r) {
          return window.getComputedStyle(n.root).getPropertyValue(r);
        },
        getRootBoundingClientRect: function() {
          return n.root.getBoundingClientRect();
        },
        hasClass: function(r) {
          return n.root.classList.contains(r);
        },
        hasLeadingIcon: function() {
          return !!n.leadingIcon;
        },
        isRTL: function() {
          return window.getComputedStyle(n.root).getPropertyValue("direction") === "rtl";
        },
        isTrailingActionNavigable: function() {
          return n.trailingAction ? n.trailingAction.isNavigable() : !1;
        },
        notifyInteraction: function() {
          return n.emit(
            Te.INTERACTION_EVENT,
            { chipId: n.id },
            !0
            /* shouldBubble */
          );
        },
        notifyNavigation: function(r, a) {
          return n.emit(
            Te.NAVIGATION_EVENT,
            { chipId: n.id, key: r, source: a },
            !0
            /* shouldBubble */
          );
        },
        notifyRemoval: function(r) {
          n.emit(
            Te.REMOVAL_EVENT,
            { chipId: n.id, removedAnnouncement: r },
            !0
            /* shouldBubble */
          );
        },
        notifySelection: function(r, a) {
          return n.emit(
            Te.SELECTION_EVENT,
            { chipId: n.id, selected: r, shouldIgnore: a },
            !0
            /* shouldBubble */
          );
        },
        notifyTrailingIconInteraction: function() {
          return n.emit(
            Te.TRAILING_ICON_INTERACTION_EVENT,
            { chipId: n.id },
            !0
            /* shouldBubble */
          );
        },
        notifyEditStart: function() {
        },
        notifyEditFinish: function() {
        },
        removeClass: function(r) {
          return n.root.classList.remove(r);
        },
        removeClassFromLeadingIcon: function(r) {
          n.leadingIcon && n.leadingIcon.classList.remove(r);
        },
        removeTrailingActionFocus: function() {
          n.trailingAction && n.trailingAction.removeFocus();
        },
        setPrimaryActionAttr: function(r, a) {
          n.primaryAction && n.primaryAction.setAttribute(r, a);
        },
        setStyleProperty: function(r, a) {
          return n.root.style.setProperty(r, a);
        }
      };
      return new js(i);
    }, e.prototype.setSelectedFromChipSet = function(n, i) {
      this.foundation.setSelectedFromChipSet(n, i);
    }, e.prototype.focusPrimaryAction = function() {
      this.foundation.focusPrimaryAction();
    }, e.prototype.focusTrailingAction = function() {
      this.foundation.focusTrailingAction();
    }, e.prototype.removeFocus = function() {
      this.foundation.removeFocus();
    }, e.prototype.remove = function() {
      var n = this.root.parentNode;
      n !== null && n.removeChild(this.root);
    }, e;
  }(So)
);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var kc = {
  CHIP_SELECTOR: ".mdc-chip"
}, va = {
  CHOICE: "mdc-chip-set--choice",
  FILTER: "mdc-chip-set--filter"
};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Ws = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      var i = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return i.selectedChipIds = [], i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return kc;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return va;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          announceMessage: function() {
          },
          focusChipPrimaryActionAtIndex: function() {
          },
          focusChipTrailingActionAtIndex: function() {
          },
          getChipListCount: function() {
            return -1;
          },
          getIndexOfChipById: function() {
            return -1;
          },
          hasClass: function() {
            return !1;
          },
          isRTL: function() {
            return !1;
          },
          removeChipAtIndex: function() {
          },
          removeFocusFromChipAtIndex: function() {
          },
          selectChipAtIndex: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.getSelectedChipIds = function() {
      return this.selectedChipIds.slice();
    }, e.prototype.select = function(n) {
      this.selectImpl(n, !1);
    }, e.prototype.handleChipInteraction = function(n) {
      var i = n.chipId, r = this.adapter.getIndexOfChipById(i);
      this.removeFocusFromChipsExcept(r), (this.adapter.hasClass(va.CHOICE) || this.adapter.hasClass(va.FILTER)) && this.toggleSelect(i);
    }, e.prototype.handleChipSelection = function(n) {
      var i = n.chipId, r = n.selected, a = n.shouldIgnore;
      if (!a) {
        var o = this.selectedChipIds.indexOf(i) >= 0;
        r && !o ? this.select(i) : !r && o && this.deselectImpl(i);
      }
    }, e.prototype.handleChipRemoval = function(n) {
      var i = n.chipId, r = n.removedAnnouncement;
      r && this.adapter.announceMessage(r);
      var a = this.adapter.getIndexOfChipById(i);
      this.deselectAndNotifyClients(i), this.adapter.removeChipAtIndex(a);
      var o = this.adapter.getChipListCount() - 1;
      if (!(o < 0)) {
        var u = Math.min(a, o);
        this.removeFocusFromChipsExcept(u), this.adapter.focusChipTrailingActionAtIndex(u);
      }
    }, e.prototype.handleChipNavigation = function(n) {
      var i = n.chipId, r = n.key, a = n.source, o = this.adapter.getChipListCount() - 1, u = this.adapter.getIndexOfChipById(i);
      if (!(u === -1 || !Tn.has(r))) {
        var l = this.adapter.isRTL(), c = r === Te.ARROW_LEFT_KEY || r === Te.IE_ARROW_LEFT_KEY, d = r === Te.ARROW_RIGHT_KEY || r === Te.IE_ARROW_RIGHT_KEY, h = r === Te.ARROW_DOWN_KEY || r === Te.IE_ARROW_DOWN_KEY, f = !l && d || l && c || h, v = r === Te.HOME_KEY, p = r === Te.END_KEY;
        f ? u++ : v ? u = 0 : p ? u = o : u--, !(u < 0 || u > o) && (this.removeFocusFromChipsExcept(u), this.focusChipAction(u, r, a));
      }
    }, e.prototype.focusChipAction = function(n, i, r) {
      var a = Di.has(i);
      if (a && r === ii.PRIMARY)
        return this.adapter.focusChipPrimaryActionAtIndex(n);
      if (a && r === ii.TRAILING)
        return this.adapter.focusChipTrailingActionAtIndex(n);
      var o = this.getDirection(i);
      if (o === jn.LEFT)
        return this.adapter.focusChipTrailingActionAtIndex(n);
      if (o === jn.RIGHT)
        return this.adapter.focusChipPrimaryActionAtIndex(n);
    }, e.prototype.getDirection = function(n) {
      var i = this.adapter.isRTL(), r = n === Te.ARROW_LEFT_KEY || n === Te.IE_ARROW_LEFT_KEY, a = n === Te.ARROW_RIGHT_KEY || n === Te.IE_ARROW_RIGHT_KEY;
      return !i && r || i && a ? jn.LEFT : jn.RIGHT;
    }, e.prototype.deselectImpl = function(n, i) {
      i === void 0 && (i = !1);
      var r = this.selectedChipIds.indexOf(n);
      if (r >= 0) {
        this.selectedChipIds.splice(r, 1);
        var a = this.adapter.getIndexOfChipById(n);
        this.adapter.selectChipAtIndex(
          a,
          /** isSelected */
          !1,
          i
        );
      }
    }, e.prototype.deselectAndNotifyClients = function(n) {
      this.deselectImpl(n, !0);
    }, e.prototype.toggleSelect = function(n) {
      this.selectedChipIds.indexOf(n) >= 0 ? this.deselectAndNotifyClients(n) : this.selectAndNotifyClients(n);
    }, e.prototype.removeFocusFromChipsExcept = function(n) {
      for (var i = this.adapter.getChipListCount(), r = 0; r < i; r++)
        r !== n && this.adapter.removeFocusFromChipAtIndex(r);
    }, e.prototype.selectAndNotifyClients = function(n) {
      this.selectImpl(n, !0);
    }, e.prototype.selectImpl = function(n, i) {
      if (!(this.selectedChipIds.indexOf(n) >= 0)) {
        if (this.adapter.hasClass(va.CHOICE) && this.selectedChipIds.length > 0) {
          var r = this.selectedChipIds[0], a = this.adapter.getIndexOfChipById(r);
          this.selectedChipIds = [], this.adapter.selectChipAtIndex(
            a,
            /** isSelected */
            !1,
            i
          );
        }
        this.selectedChipIds.push(n);
        var o = this.adapter.getIndexOfChipById(n);
        this.adapter.selectChipAtIndex(
          o,
          /** isSelected */
          !0,
          i
        );
      }
    }, e;
  }(Dt)
);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var To = js.strings, zl = To.INTERACTION_EVENT, Xl = To.SELECTION_EVENT, Yl = To.REMOVAL_EVENT, Zl = To.NAVIGATION_EVENT, vg = Ws.strings.CHIP_SELECTOR, Ql = 0, mg = (
  /** @class */
  function(t) {
    tt(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.attachTo = function(n) {
      return new e(n);
    }, Object.defineProperty(e.prototype, "chips", {
      get: function() {
        return this.chipsList.slice();
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "selectedChipIds", {
      /**
       * @return An array of the IDs of all selected chips.
       */
      get: function() {
        return this.foundation.getSelectedChipIds();
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.initialize = function(n) {
      n === void 0 && (n = function(i) {
        return new Bc(i);
      }), this.chipFactory = n, this.chipsList = this.instantiateChips(this.chipFactory);
    }, e.prototype.initialSyncWithDOM = function() {
      var n, i, r = this;
      try {
        for (var a = Mt(this.chipsList), o = a.next(); !o.done; o = a.next()) {
          var u = o.value;
          u.id && u.selected && this.foundation.select(u.id);
        }
      } catch (l) {
        n = { error: l };
      } finally {
        try {
          o && !o.done && (i = a.return) && i.call(a);
        } finally {
          if (n) throw n.error;
        }
      }
      this.handleChipInteraction = function(l) {
        return r.foundation.handleChipInteraction(l.detail);
      }, this.handleChipSelection = function(l) {
        return r.foundation.handleChipSelection(l.detail);
      }, this.handleChipRemoval = function(l) {
        return r.foundation.handleChipRemoval(l.detail);
      }, this.handleChipNavigation = function(l) {
        return r.foundation.handleChipNavigation(l.detail);
      }, this.listen(zl, this.handleChipInteraction), this.listen(Xl, this.handleChipSelection), this.listen(Yl, this.handleChipRemoval), this.listen(Zl, this.handleChipNavigation);
    }, e.prototype.destroy = function() {
      var n, i;
      try {
        for (var r = Mt(this.chipsList), a = r.next(); !a.done; a = r.next()) {
          var o = a.value;
          o.destroy();
        }
      } catch (u) {
        n = { error: u };
      } finally {
        try {
          a && !a.done && (i = r.return) && i.call(r);
        } finally {
          if (n) throw n.error;
        }
      }
      this.unlisten(zl, this.handleChipInteraction), this.unlisten(Xl, this.handleChipSelection), this.unlisten(Yl, this.handleChipRemoval), this.unlisten(Zl, this.handleChipNavigation), t.prototype.destroy.call(this);
    }, e.prototype.addChip = function(n) {
      n.id = n.id || "mdc-chip-" + ++Ql, this.chipsList.push(this.chipFactory(n));
    }, e.prototype.getDefaultFoundation = function() {
      var n = this, i = {
        announceMessage: function(r) {
          fg(r);
        },
        focusChipPrimaryActionAtIndex: function(r) {
          n.chipsList[r].focusPrimaryAction();
        },
        focusChipTrailingActionAtIndex: function(r) {
          n.chipsList[r].focusTrailingAction();
        },
        getChipListCount: function() {
          return n.chips.length;
        },
        getIndexOfChipById: function(r) {
          return n.findChipIndex(r);
        },
        hasClass: function(r) {
          return n.root.classList.contains(r);
        },
        isRTL: function() {
          return window.getComputedStyle(n.root).getPropertyValue("direction") === "rtl";
        },
        removeChipAtIndex: function(r) {
          r >= 0 && r < n.chips.length && (n.chipsList[r].destroy(), n.chipsList[r].remove(), n.chipsList.splice(r, 1));
        },
        removeFocusFromChipAtIndex: function(r) {
          n.chipsList[r].removeFocus();
        },
        selectChipAtIndex: function(r, a, o) {
          r >= 0 && r < n.chips.length && n.chipsList[r].setSelectedFromChipSet(a, o);
        }
      };
      return new Ws(i);
    }, e.prototype.instantiateChips = function(n) {
      var i = [].slice.call(this.root.querySelectorAll(vg));
      return i.map(function(r) {
        return r.id = r.id || "mdc-chip-" + ++Ql, n(r);
      });
    }, e.prototype.findChipIndex = function(n) {
      for (var i = 0; i < this.chips.length; i++)
        if (this.chipsList[i].id === n)
          return i;
      return -1;
    }, e;
  }(So)
);
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const qs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MDCChip: Bc,
  MDCChipFoundation: js,
  MDCChipSet: mg,
  MDCChipSetFoundation: Ws,
  MDCChipTrailingAction: Uc,
  MDCChipTrailingActionFoundation: Hc,
  chipCssClasses: At,
  chipSetCssClasses: va,
  chipSetStrings: kc,
  chipStrings: Te,
  trailingActionStrings: Mn
}, Symbol.toStringTag, { value: "Module" }));
var pg = /* @__PURE__ */ ge('<div class="mdc-chip__ripple"></div>'), gg = /* @__PURE__ */ ge('<div class="mdc-chip__touch"></div>'), bg = /* @__PURE__ */ ge("<!> <!> <!>", 1);
function Ig(t, e) {
  we(e, !0);
  const n = () => Rt(A, "$initialSelectedStore", o), i = () => Rt(j, "$choice", o), r = () => Rt(K, "$index", o), a = () => Rt(G, "$nonInteractive", o), [o, u] = gn(), { MDCChipFoundation: l } = qs;
  let c = m(e, "use", 19, () => []), d = m(e, "class", 3, ""), h = m(e, "style", 3, ""), f = m(e, "ripple", 3, !0), v = m(e, "touch", 3, !1), p = m(e, "shouldRemoveOnTrailingIconClick", 3, !0), g = m(e, "shouldFocusPrimaryActionOnClick", 3, !0), _ = m(e, "component", 3, Mi), C = m(e, "tag", 3, "div"), x = /* @__PURE__ */ Ve(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "chip",
    "ripple",
    "touch",
    "shouldRemoveOnTrailingIconClick",
    "shouldFocusPrimaryActionOnClick",
    "component",
    "tag",
    "children"
  ]), S, b = /* @__PURE__ */ xe(void 0), E = Ee({}), y = Ee({}), T = Ee({});
  const A = se("SMUI:chips:chip:initialSelected");
  let O = /* @__PURE__ */ xe(Ee(n())), B, Z;
  const G = se("SMUI:chips:nonInteractive"), j = se("SMUI:chips:choice"), K = se("SMUI:chips:chip:index"), k = bt(p());
  Ae(() => {
    kt(k, p());
  }), te("SMUI:chips:chip:shouldRemoveOnTrailingIconClick", k);
  const P = bt(s(O));
  Ae(() => {
    kt(P, s(O));
  }), te("SMUI:chips:chip:isSelected", P);
  const M = bt(y);
  Ae(() => {
    kt(M, y);
  }), te("SMUI:chips:chip:leadingIconClasses", M), te("SMUI:chips:chip:focusable", i() && s(O) || r() === 0), Ae(() => {
    s(b) && s(b).getShouldRemoveOnTrailingIconClick() !== p() && s(b).setShouldRemoveOnTrailingIconClick(p());
  }), Ae(() => {
    s(b) && s(b).setShouldFocusPrimaryActionOnClick(g());
  }), te("SMUI:chips:primary-action:mount", (ue) => {
    B = ue;
  }), te("SMUI:chips:primary-action:unmount", () => {
    B = void 0;
  }), te("SMUI:chips:trailing-action:mount", (ue) => {
    Z = ue;
  }), te("SMUI:chips:trailing-action:unmount", () => {
    Z = void 0;
  });
  const z = se("SMUI:chips:chip:mount"), re = se("SMUI:chips:chip:unmount");
  st(() => {
    ae(
      b,
      new l({
        addClass: I,
        addClassToLeadingIcon: $,
        eventTargetHasClass: (Oe, Ze) => Oe && "classList" in Oe ? Oe.classList.contains(Ze) : !1,
        focusPrimaryAction: () => {
          B && B.focus();
        },
        focusTrailingAction: () => {
          Z && Z.focus();
        },
        getAttribute: (Oe) => ne().getAttribute(Oe),
        getCheckmarkBoundingClientRect: () => {
          const Oe = ne().querySelector(".mdc-chip__checkmark");
          return Oe ? Oe.getBoundingClientRect() : null;
        },
        getComputedStyleValue: ce,
        getRootBoundingClientRect: () => ne().getBoundingClientRect(),
        hasClass: U,
        hasLeadingIcon: () => !!ne().querySelector(".mdc-chip__icon--leading"),
        isRTL: () => getComputedStyle(ne()).getPropertyValue("direction") === "rtl",
        isTrailingActionNavigable: () => Z ? Z.isNavigable() : !1,
        notifyInteraction: () => ke(ne(), "SMUIChipInteraction", { chipId: e.chip }),
        notifyNavigation: (Oe, Ze) => ke(ne(), "SMUIChipNavigation", { chipId: e.chip, key: Oe, source: Ze }),
        notifyRemoval: (Oe) => ke(ne(), "SMUIChipRemoval", { chipId: e.chip, removedAnnouncement: Oe }),
        notifySelection: (Oe, Ze) => ke(ne(), "SMUIChipSelection", { chipId: e.chip, selected: Oe, shouldIgnore: Ze }),
        notifyTrailingIconInteraction: () => ke(ne(), "SMUIChipTrailingIconInteraction", { chipId: e.chip }),
        notifyEditStart: () => {
        },
        notifyEditFinish: () => {
        },
        removeClass: L,
        removeClassFromLeadingIcon: R,
        removeTrailingActionFocus: () => {
          Z && Z.removeFocus();
        },
        setPrimaryActionAttr: (Oe, Ze) => {
          B && B.addAttr(Oe, Ze);
        },
        setStyleProperty: W
      }),
      !0
    );
    const ue = {
      chipId: e.chip,
      get selected() {
        return s(O);
      },
      focusPrimaryAction: oe,
      focusTrailingAction: Q,
      removeFocus: de,
      setSelectedFromChipSet: V
    };
    return z && z(ue), s(b).init(), () => {
      var Oe;
      re && re(ue), (Oe = s(b)) == null || Oe.destroy();
    };
  });
  function U(ue) {
    return ue in E ? E[ue] : ne().classList.contains(ue);
  }
  function I(ue) {
    E[ue] || (E[ue] = !0);
  }
  function L(ue) {
    (!(ue in E) || E[ue]) && (E[ue] = !1);
  }
  function $(ue) {
    y[ue] || (y[ue] = !0);
  }
  function R(ue) {
    (!(ue in y) || y[ue]) && (y[ue] = !1);
  }
  function W(ue, Oe) {
    T[ue] != Oe && (Oe === "" || Oe == null ? delete T[ue] : T[ue] = Oe);
  }
  function ce(ue) {
    return ue in T ? T[ue] : getComputedStyle(ne()).getPropertyValue(ue);
  }
  function V(ue, Oe) {
    var Ze;
    ae(O, ue, !0), (Ze = s(b)) == null || Ze.setSelectedFromChipSet(s(O), Oe);
  }
  function oe() {
    var ue;
    (ue = s(b)) == null || ue.focusPrimaryAction();
  }
  function Q() {
    var ue;
    (ue = s(b)) == null || ue.focusTrailingAction();
  }
  function de() {
    var ue;
    (ue = s(b)) == null || ue.removeFocus();
  }
  function ne() {
    return S.getElement();
  }
  var qe = { getElement: ne }, je = le(), De = J(je);
  {
    let ue = /* @__PURE__ */ ve(() => [
      [
        Kt,
        {
          ripple: f() && !a(),
          unbounded: !1,
          addClass: I,
          removeClass: L,
          addStyle: W
        }
      ],
      ...c()
    ]), Oe = /* @__PURE__ */ ve(() => Ne({
      "mdc-chip": !0,
      "mdc-chip--selected": s(O),
      "mdc-chip--touch": v(),
      ...E,
      [d()]: !0
    })), Ze = /* @__PURE__ */ ve(() => Object.entries(T).map(([F, q]) => `${F}: ${q};`).concat([h()]).join(" "));
    wi(De, _, (F, q) => {
      Se(
        q(F, et(
          {
            get tag() {
              return C();
            },
            get use() {
              return s(ue);
            },
            get class() {
              return s(Oe);
            },
            get style() {
              return s(Ze);
            },
            role: "row"
          },
          () => x,
          {
            ontransitionend: (ee) => {
              var Ce;
              s(b) && s(b).handleTransitionEnd(ee), (Ce = e.ontransitionend) == null || Ce.call(e, ee);
            },
            onclick: (ee) => {
              var Ce;
              s(b) && s(b).handleClick(), (Ce = e.onclick) == null || Ce.call(e, ee);
            },
            onkeydown: (ee) => {
              var Ce;
              s(b) && s(b).handleKeydown(ee), (Ce = e.onkeydown) == null || Ce.call(e, ee);
            },
            onfocusin: (ee) => {
              var Ce;
              s(b) && s(b).handleFocusIn(ee), (Ce = e.onfocusin) == null || Ce.call(e, ee);
            },
            onfocusout: (ee) => {
              var Ce;
              s(b) && s(b).handleFocusOut(ee), (Ce = e.onfocusout) == null || Ce.call(e, ee);
            },
            onSMUIChipTrailingActionInteraction: (ee) => {
              var Ce;
              s(b) && s(b).handleTrailingActionInteraction(), (Ce = e.onSMUIChipTrailingActionInteraction) == null || Ce.call(e, ee);
            },
            onSMUIChipTrailingActionNavigation: (ee) => {
              var Ce;
              s(b) && s(b).handleTrailingActionNavigation(ee), (Ce = e.onSMUIChipTrailingActionNavigation) == null || Ce.call(e, ee);
            },
            children: (ee, Ce) => {
              var Tt = bg(), pt = J(Tt);
              {
                var on = (Y) => {
                  var Pe = pg();
                  w(Y, Pe);
                };
                he(pt, (Y) => {
                  f() && !a() && Y(on);
                });
              }
              var pe = ye(pt, 2);
              Ie(pe, () => e.children ?? me);
              var H = ye(pe, 2);
              {
                var N = (Y) => {
                  var Pe = gg();
                  w(Y, Pe);
                };
                he(H, (Y) => {
                  v() && Y(N);
                });
              }
              w(ee, Tt);
            },
            $$slots: { default: !0 }
          }
        )),
        (ee) => S = ee,
        () => S
      );
    });
  }
  w(t, je);
  var Le = Re(qe);
  return u(), Le;
}
var yg = /* @__PURE__ */ ge("<div></div>");
function _g(t, e) {
  we(e, !0);
  const [n, i] = gn(), { MDCChipSetFoundation: r } = qs;
  let a = m(e, "use", 19, () => []), o = m(e, "class", 3, ""), u = m(e, "chips", 27, () => Ee([])), l = m(e, "key", 3, (R) => `${R}`), c = m(e, "selected", 15), d = m(e, "nonInteractive", 3, !1), h = m(e, "choice", 3, !1), f = m(e, "filter", 3, !1), v = m(e, "input", 3, !1), p = /* @__PURE__ */ Ve(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "chips",
    "key",
    "selected",
    "nonInteractive",
    "choice",
    "filter",
    "input",
    "chip"
  ]);
  if (f() && h())
    throw new Error("Chip sets can be either filter or choice, but not both.");
  if (h() && typeof c() == "object" && "findIndex" in c())
    throw new Error("Choice chips must not be given multiple selected chips.");
  if (f() && c() !== void 0 && (typeof c() != "object" || !("findIndex" in c())))
    throw new Error("Filter chips must be given an array of selected chips.");
  let g, _ = /* @__PURE__ */ xe(void 0), C = {}, x = /* @__PURE__ */ new WeakMap(), S = u().map((R) => h() && c() != null && l()(c()) === l()(R) || f() && c() != null && c().findIndex((W) => l()(W) === l()(R)) !== -1);
  te("SMUI:chips:key", l());
  const b = bt(d());
  Ae(() => {
    kt(b, d());
  }), te("SMUI:chips:nonInteractive", b);
  const E = bt(h());
  Ae(() => {
    kt(E, h());
  }), te("SMUI:chips:choice", E);
  const y = bt(f());
  Ae(() => {
    kt(y, f());
  }), te("SMUI:chips:filter", y);
  let T = f() ? new Set(c() ?? []) : c();
  Ae(() => {
    if (s(_) && h() && T !== c()) {
      const R = T;
      T = c(), c() != null ? s(_).select(l()(c())) : s(_).handleChipSelection({
        chipId: l()(R),
        selected: !1,
        shouldIgnore: !1
      });
    }
  }), Ae(() => {
    if (s(_) && f()) {
      const R = new Set(c() ?? []), W = A(T, R), ce = A(R, T);
      if (W.size || ce.size) {
        T = R;
        for (let V of W)
          u().findIndex((oe) => l()(oe) === l()(V)) !== -1 && s(_).handleChipSelection({ chipId: l()(V), selected: !1, shouldIgnore: !1 });
        for (let V of ce)
          s(_).handleChipSelection({ chipId: l()(V), selected: !0, shouldIgnore: !1 });
      }
    }
  });
  function A(R, W) {
    let ce = new Set(R);
    for (let V of W)
      ce.delete(V);
    return ce;
  }
  te("SMUI:chips:chip:mount", (R) => {
    K(R.chipId, R);
  }), te("SMUI:chips:chip:unmount", (R) => {
    k(R.chipId);
  }), st(() => {
    if (ae(
      _,
      new r({
        announceMessage: vm,
        focusChipPrimaryActionAtIndex: (R) => {
          var W;
          (W = j(u()[R])) == null || W.focusPrimaryAction();
        },
        focusChipTrailingActionAtIndex: (R) => {
          var W;
          (W = j(u()[R])) == null || W.focusTrailingAction();
        },
        getChipListCount: () => u().length,
        getIndexOfChipById: (R) => u().findIndex((W) => l()(W) === R),
        hasClass: (R) => P().classList.contains(R),
        isRTL: () => getComputedStyle(P()).getPropertyValue("direction") === "rtl",
        removeChipAtIndex: (R) => {
          if (R >= 0 && R < u().length) {
            const W = l()(u()[R]);
            if (h() && c() != null && l()(c()) === W)
              c(void 0);
            else if (f() && c() != null) {
              const ce = c().findIndex((V) => l()(V) === W);
              ce !== -1 && c().splice(ce, 1);
            }
            u().splice(R, 1);
          }
        },
        removeFocusFromChipAtIndex: (R) => {
          var W;
          (W = j(u()[R])) == null || W.removeFocus();
        },
        selectChipAtIndex: (R, W, ce) => {
          var V;
          if (R >= 0 && R < u().length) {
            if (f()) {
              c() == null && c([]);
              const oe = l()(u()[R]), Q = c().findIndex((de) => l()(de) === oe);
              W && Q === -1 ? c().push(u()[R]) : !W && Q !== -1 && c().splice(Q, 1);
            } else h() && (W || l()(c()) === l()(u()[R])) && c(W ? u()[R] : void 0);
            (V = j(u()[R])) == null || V.setSelectedFromChipSet(W, ce);
          }
        }
      }),
      !0
    ), s(_).init(), h() && c() != null)
      s(_).select(l()(c()));
    else if (f() && c() != null && c().length)
      for (const R of c())
        s(_).select(l()(R));
    return () => {
      var R;
      (R = s(_)) == null || R.destroy();
    };
  });
  function O(R) {
    s(_) && s(_).handleChipInteraction({ chipId: l()(R.detail.chipId) });
  }
  function B(R) {
    s(_) && s(_).handleChipSelection({
      chipId: l()(R.detail.chipId),
      selected: R.detail.selected,
      shouldIgnore: R.detail.shouldIgnore
    });
  }
  function Z(R) {
    s(_) && s(_).handleChipRemoval({
      chipId: l()(R.detail.chipId),
      removedAnnouncement: R.detail.removedAnnouncement
    });
  }
  function G(R) {
    s(_) && s(_).handleChipNavigation({
      chipId: l()(R.detail.chipId),
      key: R.detail.key,
      source: R.detail.source
    });
  }
  function j(R) {
    return R instanceof Object ? x.get(R) : C[R];
  }
  function K(R, W) {
    R instanceof Object ? x.set(R, W) : C[R] = W;
  }
  function k(R) {
    R instanceof Object ? x.delete(R) : delete C[R];
  }
  function P() {
    return g;
  }
  var M = { getElement: P }, z = yg(), re = (R) => {
    var W;
    O(R), (W = e.onSMUIChipInteraction) == null || W.call(e, R);
  }, U = (R) => {
    var W;
    B(R), (W = e.onSMUIChipSelection) == null || W.call(e, R);
  }, I = (R) => {
    var W;
    Z(R), (W = e.onSMUIChipRemoval) == null || W.call(e, R);
  }, L = (R) => {
    var W;
    G(R), (W = e.onSMUIChipNavigation) == null || W.call(e, R);
  };
  He(
    z,
    (R) => ({
      class: R,
      role: "grid",
      ...p,
      onSMUIChipInteraction: re,
      onSMUIChipSelection: U,
      onSMUIChipRemoval: I,
      onSMUIChipNavigation: L
    }),
    [
      () => Ne({
        "mdc-chip-set": !0,
        "smui-chip-set--non-interactive": d(),
        "mdc-chip-set--choice": h(),
        "mdc-chip-set--filter": f(),
        "mdc-chip-set--input": v(),
        [o()]: !0
      })
    ]
  ), _r(z, 23, u, (R) => l()(R), (R, W, ce) => {
    Er(R, {
      key: "SMUI:chips:chip:index",
      get value() {
        return s(ce);
      },
      children: (V, oe) => {
        Er(V, {
          key: "SMUI:chips:chip:initialSelected",
          get value() {
            return S[s(ce)];
          },
          children: (Q, de) => {
            var ne = le(), qe = J(ne);
            Ie(qe, () => e.chip, () => s(W)), w(Q, ne);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { default: !0 }
    });
  }), Se(z, (R) => g = R, () => g), Ue(z, (R, W) => X == null ? void 0 : X(R, W), a), w(t, z);
  var $ = Re(M);
  return i(), $;
}
var Eg = /* @__PURE__ */ cn('<svg class="mdc-chip__checkmark-svg" viewBox="-2 -3 30 30"><path class="mdc-chip__checkmark-path" fill="none" stroke="black" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg>'), Cg = /* @__PURE__ */ ge("<span><!></span>");
function Ag(t, e) {
  we(e, !0);
  let n = m(e, "use", 19, () => []), i = m(e, "class", 3, ""), r = /* @__PURE__ */ Ve(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "children"
  ]), a;
  function o() {
    return a;
  }
  var u = { getElement: o }, l = Cg();
  He(l, (f) => ({ class: f, ...r }), [
    () => Ne({ "mdc-chip__checkmark": !0, [i()]: !0 })
  ]);
  var c = _e(l);
  {
    var d = (f) => {
      var v = le(), p = J(v);
      Ie(p, () => e.children ?? me), w(f, v);
    }, h = (f) => {
      var v = Eg();
      w(f, v);
    };
    he(c, (f) => {
      e.children ? f(d) : f(h, !1);
    });
  }
  return Se(l, (f) => a = f, () => a), Ue(l, (f, v) => X == null ? void 0 : X(f, v), n), w(t, l), Re(u);
}
var Sg = /* @__PURE__ */ ge("<span><!></span>"), xg = /* @__PURE__ */ ge("<span><span><!></span></span>"), Tg = /* @__PURE__ */ ge("<!> <span><!></span>", 1);
function Lg(t, e) {
  we(e, !0);
  const n = () => Rt(x, "$filter", o), i = () => Rt(C, "$choice", o), r = () => Rt(_, "$nonInteractive", o), a = () => Rt(S, "$isSelected", o), [o, u] = gn();
  let l = m(e, "use", 19, () => []), c = m(e, "class", 3, ""), d = m(e, "tabindex", 19, () => se("SMUI:chips:chip:focusable") ? 0 : -1), h = /* @__PURE__ */ Ve(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "tabindex",
    "children",
    "checkbox"
  ]), f, v, p, g = Ee({});
  const _ = se("SMUI:chips:nonInteractive"), C = se("SMUI:chips:choice"), x = se("SMUI:chips:filter"), S = se("SMUI:chips:chip:isSelected"), b = /* @__PURE__ */ ve(() => ({
    role: n() ? "checkbox" : i() ? "radio" : "button",
    tabindex: d()
  })), E = se("SMUI:chips:primary-action:mount"), y = se("SMUI:chips:primary-action:unmount");
  st(() => {
    let I = { focus: O, addAttr: T };
    return E && E(I), () => {
      y && y(I);
    };
  });
  function T(I, L) {
    g[I] !== L && (g[I] = L);
  }
  function A(I) {
    g.tabindex !== Z().getAttribute("tabindex") ? Eo().then(I) : I();
  }
  function O() {
    A(() => {
      p && p.focus();
    });
  }
  function B() {
    return v && v.getElement();
  }
  function Z() {
    return f;
  }
  var G = { focus: O, getInput: B, getElement: Z }, j = Tg(), K = J(j);
  {
    var k = (I) => {
      {
        let L = /* @__PURE__ */ ve(() => ot(h, "checkmark$"));
        Se(
          Ag(I, et(
            {
              get children() {
                return e.checkbox;
              }
            },
            () => s(L)
          )),
          ($) => v = $,
          () => v
        );
      }
    };
    he(K, (I) => {
      n() && I(k);
    });
  }
  var P = ye(K, 2);
  He(P, (I) => ({ role: "gridcell", ...I }), [() => ot(h, "container$")]);
  var M = _e(P);
  {
    var z = (I) => {
      var L = Sg();
      He(L, (R) => ({ class: "mdc-chip__text", ...R }), [() => ot(h, "text$")]);
      var $ = _e(L);
      Ie($, () => e.children ?? me), w(I, L);
    }, re = (I) => {
      var L = xg();
      He(
        L,
        (W, ce) => ({
          class: W,
          ...n() || i() ? { "aria-selected": a() ? "true" : "false" } : {},
          ...s(b),
          ...g,
          ...ce
        }),
        [
          () => Ne({ "mdc-chip__primary-action": !0, [c()]: !0 }),
          () => ir(h, ["checkmark$", "container$", "text$"])
        ]
      );
      var $ = _e(L);
      He($, (W) => ({ class: "mdc-chip__text", ...W }), [() => ot(h, "text$")]);
      var R = _e($);
      Ie(R, () => e.children ?? me), Se(L, (W) => p = W, () => p), w(I, L);
    };
    he(M, (I) => {
      r() ? I(z) : I(re, !1);
    });
  }
  Se(P, (I) => f = I, () => f), Ue(P, (I, L) => X == null ? void 0 : X(I, L), l), w(t, j);
  var U = Re(G);
  return u(), U;
}
var Og = /* @__PURE__ */ ge('<span class="mdc-deprecated-chip-trailing-action__touch"></span>'), wg = /* @__PURE__ */ ge('<button><span class="mdc-deprecated-chip-trailing-action__ripple"></span> <!> <span><!></span></button>');
function Rg(t, e) {
  we(e, !0);
  const { MDCChipTrailingActionFoundation: n } = qs;
  let i = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), a = m(e, "style", 3, ""), o = m(e, "ripple", 3, !0), u = m(e, "touch", 3, !1), l = m(e, "nonNavigable", 3, !1), c = m(e, "icon$use", 19, () => []), d = m(e, "icon$class", 3, ""), h = /* @__PURE__ */ Ve(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "ripple",
    "touch",
    "nonNavigable",
    "icon$use",
    "icon$class",
    "children"
  ]), f, v = /* @__PURE__ */ xe(void 0), p = Ee({}), g = Ee({}), _ = Ee({});
  const C = se("SMUI:chips:trailing-action:mount"), x = se("SMUI:chips:trailing-action:unmount");
  st(() => {
    ae(
      v,
      new n({
        focus: () => {
          const L = G();
          A(() => {
            L.focus();
          });
        },
        getAttribute: y,
        notifyInteraction: (L) => ke(G(), "SMUIChipTrailingActionInteraction", { trigger: L }),
        notifyNavigation: (L) => ke(G(), "SMUIChipTrailingActionNavigation", { key: L }),
        setAttribute: T
      }),
      !0
    );
    const I = { isNavigable: O, focus: B, removeFocus: Z };
    return C && C(I), s(v).init(), () => {
      var L;
      x && x(I), (L = s(v)) == null || L.destroy();
    };
  });
  function S(I) {
    p[I] || (p[I] = !0);
  }
  function b(I) {
    (!(I in p) || p[I]) && (p[I] = !1);
  }
  function E(I, L) {
    g[I] != L && (L === "" || L == null ? delete g[I] : g[I] = L);
  }
  function y(I) {
    return I in _ ? _[I] ?? null : G().getAttribute(I);
  }
  function T(I, L) {
    _[I] !== L && (_[I] = L);
  }
  function A(I) {
    _.tabindex !== G().getAttribute("tabindex") ? Eo().then(I) : I();
  }
  function O() {
    if (s(v) == null)
      throw new Error("Instance is undefined.");
    return s(v).isNavigable();
  }
  function B() {
    var I;
    (I = s(v)) == null || I.focus();
  }
  function Z() {
    var I;
    (I = s(v)) == null || I.removeFocus();
  }
  function G() {
    return f;
  }
  var j = { isNavigable: O, focus: B, removeFocus: Z, getElement: G }, K = wg(), k = (I) => {
    var L;
    s(v) && s(v).handleClick(I), (L = e.onclick) == null || L.call(e, I);
  }, P = (I) => {
    var L;
    s(v) && s(v).handleKeydown(I), (L = e.onkeydown) == null || L.call(e, I);
  };
  He(
    K,
    (I, L, $) => ({
      type: "button",
      class: I,
      style: L,
      "aria-hidden": l() ? "true" : void 0,
      tabindex: "-1",
      ..._,
      ...$,
      onclick: k,
      onkeydown: P
    }),
    [
      () => Ne({
        "mdc-deprecated-chip-trailing-action": !0,
        ...p,
        [r()]: !0
      }),
      () => Object.entries(g).map(([I, L]) => `${I}: ${L};`).concat([a()]).join(" "),
      () => ir(h, ["icon$"])
    ]
  );
  var M = ye(_e(K), 2);
  {
    var z = (I) => {
      var L = Og();
      w(I, L);
    };
    he(M, (I) => {
      u() && I(z);
    });
  }
  var re = ye(M, 2);
  He(re, (I, L) => ({ class: I, ...L }), [
    () => Ne({
      "mdc-deprecated-chip-trailing-action__icon": !0,
      [d()]: !0
    }),
    () => ot(h, "icon$")
  ]);
  var U = _e(re);
  return Ie(U, () => e.children ?? me), Ue(re, (I, L) => X == null ? void 0 : X(I, L), c), Se(K, (I) => f = I, () => f), Ue(K, (I, L) => Kt == null ? void 0 : Kt(I, L), () => ({
    ripple: o(),
    unbounded: !1,
    addClass: S,
    removeClass: b,
    addStyle: E
  })), Ue(K, (I, L) => X == null ? void 0 : X(I, L), i), w(t, K), Re(j);
}
const Ht = [];
for (let t = 0; t < 256; ++t)
  Ht.push((t + 256).toString(16).slice(1));
function Mg(t, e = 0) {
  return (Ht[t[e + 0]] + Ht[t[e + 1]] + Ht[t[e + 2]] + Ht[t[e + 3]] + "-" + Ht[t[e + 4]] + Ht[t[e + 5]] + "-" + Ht[t[e + 6]] + Ht[t[e + 7]] + "-" + Ht[t[e + 8]] + Ht[t[e + 9]] + "-" + Ht[t[e + 10]] + Ht[t[e + 11]] + Ht[t[e + 12]] + Ht[t[e + 13]] + Ht[t[e + 14]] + Ht[t[e + 15]]).toLowerCase();
}
let zo;
const Dg = new Uint8Array(16);
function Pg() {
  if (!zo) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    zo = crypto.getRandomValues.bind(crypto);
  }
  return zo(Dg);
}
const Ng = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Jl = { randomUUID: Ng };
function Vc(t, e, n) {
  var r;
  if (Jl.randomUUID && !e && !t)
    return Jl.randomUUID();
  t = t || {};
  const i = t.random ?? ((r = t.rng) == null ? void 0 : r.call(t)) ?? Pg();
  if (i.length < 16)
    throw new Error("Random bytes length must be >= 16");
  if (i[6] = i[6] & 15 | 64, i[8] = i[8] & 63 | 128, e) {
    if (n = n || 0, n < 0 || n + 16 > e.length)
      throw new RangeError(`UUID byte range ${n}:${n + 15} is out of buffer bounds`);
    for (let a = 0; a < 16; ++a)
      e[n + a] = i[a];
    return e;
  }
  return Mg(i);
}
var Fg = /* @__PURE__ */ ge('<span class="oscd-icon"><!></span>');
function ui(t, e) {
  var n = Fg(), i = _e(n);
  Ie(i, () => e.children ?? me), w(t, n);
}
var Hg = /* @__PURE__ */ cn('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');
function Ug(t, e) {
  let n = m(e, "svgStyles", 3, "");
  ui(t, {
    children: (i, r) => {
      var a = Hg();
      Be(() => nn(a, n())), w(i, a);
    }
  });
}
var Bg = /* @__PURE__ */ cn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Ks(t, e) {
  let n = m(e, "svgStyles", 3, "");
  ui(t, {
    children: (i, r) => {
      var a = Bg();
      Be(() => nn(a, n())), w(i, a);
    }
  });
}
var kg = /* @__PURE__ */ cn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');
function Vg(t, e) {
  let n = m(e, "svgStyles", 3, "");
  ui(t, {
    children: (i, r) => {
      var a = kg();
      Be(() => nn(a, n())), w(i, a);
    }
  });
}
var Gg = /* @__PURE__ */ cn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"></path></svg>');
function jg(t, e) {
  let n = m(e, "svgStyles", 3, "");
  ui(t, {
    children: (i, r) => {
      var a = Gg();
      Be(() => nn(a, n())), w(i, a);
    }
  });
}
var Wg = /* @__PURE__ */ cn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"></path></svg>');
function qg(t, e) {
  let n = m(e, "svgStyles", 3, "");
  ui(t, {
    children: (i, r) => {
      var a = Wg();
      Be(() => nn(a, n())), w(i, a);
    }
  });
}
var Kg = /* @__PURE__ */ cn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"></path></svg>');
function zg(t, e) {
  let n = m(e, "svgStyles", 3, "");
  ui(t, {
    children: (i, r) => {
      var a = Kg();
      Be(() => nn(a, n())), w(i, a);
    }
  });
}
var Xg = /* @__PURE__ */ cn('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function Yg(t, e) {
  let n = m(e, "svgStyles", 3, "");
  ui(t, {
    children: (i, r) => {
      var a = Xg();
      Be(() => nn(a, n())), w(i, a);
    }
  });
}
var Zg = /* @__PURE__ */ cn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function Qg(t, e) {
  let n = m(e, "svgStyles", 3, "");
  ui(t, {
    children: (i, r) => {
      var a = Zg();
      Be(() => nn(a, n())), w(i, a);
    }
  });
}
var Jg = /* @__PURE__ */ cn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function $g(t, e) {
  let n = m(e, "svgStyles", 3, "");
  ui(t, {
    children: (i, r) => {
      var a = Jg();
      Be(() => nn(a, n())), w(i, a);
    }
  });
}
jd();
var eb = /* @__PURE__ */ ge("<!> <!>", 1);
function tb(t, e) {
  let n = m(e, "title", 3, ""), i = m(e, "closeable", 3, !0), r = m(e, "disabled", 3, !1);
  {
    let a = /* @__PURE__ */ ve(() => r() ? "disabled" : "");
    Ig(t, {
      get chip() {
        return n();
      },
      nonInteractive: !0,
      disabled: !0,
      get class() {
        return s(a);
      },
      children: (o, u) => {
        var l = eb(), c = J(l);
        Lg(c, {
          children: (f, v) => {
            var p = Bt();
            Be(() => ft(p, n())), w(f, p);
          },
          $$slots: { default: !0 }
        });
        var d = ye(c, 2);
        {
          var h = (f) => {
            Rg(f, {
              get onclick() {
                return e.callback;
              },
              children: (v, p) => {
                Ks(v, { svgStyles: "margin-left: 0; fill: unset;" });
              },
              $$slots: { default: !0 }
            });
          };
          he(d, (f) => {
            i() && !r() && f(h);
          });
        }
        w(o, l);
      },
      $$slots: { default: !0 }
    });
  }
}
function nb(t, e) {
  e(t.target.value);
}
var ib = /* @__PURE__ */ ge('<div class="custom-text-field svelte-1719vm0"><input type="date" id="datetime-picker" class="custom-text-field__input svelte-1719vm0" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-1719vm0"> </label> <span class="custom-line svelte-1719vm0"></span></div>');
function rb(t, e) {
  we(e, !0);
  let n = m(e, "label", 3, ""), i = m(e, "value", 15, "");
  var r = ib(), a = _e(r);
  a.__change = [nb, i];
  var o = ye(a, 2), u = _e(o);
  Be(() => ft(u, n())), ya(a, i), w(t, r), Re();
}
ur(["change"]);
var ab = /* @__PURE__ */ ge('<div class="filter-box-container"><div class="input-section"><div class="filter-input-controls"><!> <!> <!> <!> <!></div> <div class="filter-button-controls"><!> <!></div></div> <div class="separator"></div> <div class="chip-section"><!></div></div>');
function ob(t, e) {
  we(e, !0);
  let n = m(e, "filterTypes", 19, () => []), i = m(e, "activeFilters", 31, () => Ee([])), r = m(e, "useOptionLabelInChipText", 3, !1), a = m(e, "selectedOptionIndex", 31, () => -1), o = m(e, "disabled", 3, !1), u = m(e, "addFilterLabel", 3, "Add Filter"), l = m(e, "selectFilterLabel", 3, "Filter Types"), c = /* @__PURE__ */ xe(""), d = /* @__PURE__ */ xe(void 0), h = /* @__PURE__ */ ve(() => n().map((x) => ({ value: x.label, label: x.label }))), f = /* @__PURE__ */ ve(() => !s(d) || !s(c)), v = /* @__PURE__ */ ve(() => n().find((x) => x.label === s(d)));
  function p() {
    var S, b;
    if (!s(d) || !s(c)) {
      console.warn("Filter type or input value is empty");
      return;
    }
    if (!s(v)) {
      console.warn("Filter type not found");
      return;
    }
    const x = [
      ...i(),
      {
        id: Vc(),
        key: s(v).label.toLowerCase(),
        value: s(c),
        operation: "=",
        text: `${s(d)}: ${r() && ((S = s(v).inputType.options) != null && S.length) ? (b = s(v).inputType.options[a()]) == null ? void 0 : b.label : s(c)}`,
        disabled: !1
      }
    ];
    i(x), C(), _();
  }
  function g(x) {
    setTimeout(
      () => {
        i(i().filter((S) => S.id !== x)), C();
      },
      0
    );
  }
  function _() {
    ae(c, ""), ae(d, void 0);
  }
  function C() {
    const x = i().map((S) => ({ ...S }));
    x.find((S) => S.key === "uuid") ? x.filter((S) => S.key !== "uuid").forEach((S) => {
      S.disabled = !0;
    }) : x.forEach((S) => {
      S.disabled = !1;
    }), i(x);
  }
  cg(t, {
    children: (x, S) => {
      var b = ab(), E = _e(b), y = _e(E), T = _e(y);
      ql(T, {
        get disabled() {
          return o();
        },
        get label() {
          return l();
        },
        get data() {
          return s(h);
        },
        get value() {
          return s(d);
        },
        set value(I) {
          ae(d, I, !0);
        }
      });
      var A = ye(T, 2);
      {
        var O = (I) => {
          pp(I, {
            label: "Input",
            get value() {
              return s(c);
            },
            set value(L) {
              ae(c, L, !0);
            }
          });
        };
        he(A, (I) => {
          var L, $;
          (($ = (L = s(v)) == null ? void 0 : L.inputType) == null ? void 0 : $.type) === "string" && I(O);
        });
      }
      var B = ye(A, 2);
      {
        var Z = (I) => {
          {
            let L = /* @__PURE__ */ ve(() => {
              var $;
              return ($ = s(v).inputType) == null ? void 0 : $.options;
            });
            ql(I, {
              label: "Input",
              get data() {
                return s(L);
              },
              get value() {
                return s(c);
              },
              set value($) {
                ae(c, $, !0);
              },
              get selectedOptionIndex() {
                return a();
              },
              set selectedOptionIndex($) {
                a($);
              }
            });
          }
        };
        he(B, (I) => {
          var L, $;
          (($ = (L = s(v)) == null ? void 0 : L.inputType) == null ? void 0 : $.type) === "select" && I(Z);
        });
      }
      var G = ye(B, 2);
      {
        var j = (I) => {
          rb(I, {
            get value() {
              return s(c);
            },
            set value(L) {
              ae(c, L, !0);
            }
          });
        };
        he(G, (I) => {
          var L, $;
          (($ = (L = s(v)) == null ? void 0 : L.inputType) == null ? void 0 : $.type) === "datepicker" && I(j);
        });
      }
      var K = ye(G, 2);
      {
        var k = (I) => {
          fb(I, {
            get value() {
              return s(c);
            },
            set value(L) {
              ae(c, L, !0);
            }
          });
        };
        he(K, (I) => {
          var L, $;
          (($ = (L = s(v)) == null ? void 0 : L.inputType) == null ? void 0 : $.type) === "timepicker" && I(k);
        });
      }
      var P = ye(y, 2), M = _e(P);
      ao(M, {
        callback: p,
        get disabled() {
          return s(f);
        },
        children: (I, L) => {
          var $ = Bt();
          Be(() => ft($, u())), w(I, $);
        },
        $$slots: { default: !0 }
      });
      var z = ye(M, 2);
      Ie(z, () => e.filterControls ?? me);
      var re = ye(E, 4), U = _e(re);
      _g(U, {
        get chips() {
          return i();
        },
        key: (L) => L.id,
        chip: (L, $ = me) => {
          tb(L, {
            get title() {
              return $().text;
            },
            callback: () => g($().id),
            get disabled() {
              return $().disabled;
            }
          });
        },
        $$slots: { chip: !0 }
      }), w(x, b);
    },
    $$slots: { default: !0 }
  }), Re();
}
var sb = /* @__PURE__ */ ge('<div class="overlay svelte-14uvd2z"><div class="loading-spinner-container svelte-14uvd2z"><div class="loading-spinner svelte-14uvd2z"></div> <span class="loading-message svelte-14uvd2z"> </span></div></div>'), lb = /* @__PURE__ */ ge('<div class="svelte-14uvd2z"><!></div>');
function ub(t, e) {
  let n = m(e, "loadingDone", 3, !0), i = m(e, "message", 3, "Loading...");
  var r = lb(), a = _e(r);
  {
    var o = (u) => {
      var l = sb(), c = _e(l), d = ye(_e(c), 2), h = _e(d);
      Be(() => ft(h, i())), w(u, l);
    };
    he(a, (u) => {
      n() || u(o);
    });
  }
  w(t, r);
}
function cb(t, e) {
  e(t.target.value);
}
var db = /* @__PURE__ */ ge('<div class="custom-text-field svelte-6wdfbb"><input type="datetime-local" id="datetime-picker" class="custom-text-field__input svelte-6wdfbb" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-6wdfbb"> </label> <span class="custom-line svelte-6wdfbb"></span></div>');
function fb(t, e) {
  we(e, !0);
  let n = m(e, "label", 3, ""), i = m(e, "value", 15, "");
  var r = db(), a = _e(r);
  a.__change = [cb, i];
  var o = ye(a, 2), u = _e(o);
  Be(() => ft(u, n())), ya(a, i), w(t, r), Re();
}
ur(["change"]);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var hn = {
  CLOSED_CLASS: "mdc-linear-progress--closed",
  CLOSED_ANIMATION_OFF_CLASS: "mdc-linear-progress--closed-animation-off",
  INDETERMINATE_CLASS: "mdc-linear-progress--indeterminate",
  REVERSED_CLASS: "mdc-linear-progress--reversed",
  ANIMATION_READY_CLASS: "mdc-linear-progress--animation-ready"
}, On = {
  ARIA_HIDDEN: "aria-hidden",
  ARIA_VALUEMAX: "aria-valuemax",
  ARIA_VALUEMIN: "aria-valuemin",
  ARIA_VALUENOW: "aria-valuenow",
  BUFFER_BAR_SELECTOR: ".mdc-linear-progress__buffer-bar",
  FLEX_BASIS: "flex-basis",
  PRIMARY_BAR_SELECTOR: ".mdc-linear-progress__primary-bar"
}, sa = {
  PRIMARY_HALF: 0.8367142,
  PRIMARY_FULL: 2.00611057,
  SECONDARY_QUARTER: 0.37651913,
  SECONDARY_HALF: 0.84386165,
  SECONDARY_FULL: 1.60277782
};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var hb = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      var i = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return i.observer = null, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return hn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return On;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          attachResizeObserver: function() {
            return null;
          },
          forceLayout: function() {
          },
          getWidth: function() {
            return 0;
          },
          hasClass: function() {
            return !1;
          },
          setBufferBarStyle: function() {
            return null;
          },
          setPrimaryBarStyle: function() {
            return null;
          },
          setStyle: function() {
          },
          removeAttribute: function() {
          },
          removeClass: function() {
          },
          setAttribute: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var n = this;
      this.determinate = !this.adapter.hasClass(hn.INDETERMINATE_CLASS), this.adapter.addClass(hn.ANIMATION_READY_CLASS), this.progress = 0, this.buffer = 1, this.observer = this.adapter.attachResizeObserver(function(i) {
        var r, a;
        if (!n.determinate)
          try {
            for (var o = Mt(i), u = o.next(); !u.done; u = o.next()) {
              var l = u.value;
              l.contentRect && n.calculateAndSetDimensions(l.contentRect.width);
            }
          } catch (c) {
            r = { error: c };
          } finally {
            try {
              u && !u.done && (a = o.return) && a.call(o);
            } finally {
              if (r) throw r.error;
            }
          }
      }), !this.determinate && this.observer && this.calculateAndSetDimensions(this.adapter.getWidth());
    }, e.prototype.setDeterminate = function(n) {
      if (this.determinate = n, this.determinate) {
        this.adapter.removeClass(hn.INDETERMINATE_CLASS), this.adapter.setAttribute(On.ARIA_VALUENOW, this.progress.toString()), this.adapter.setAttribute(On.ARIA_VALUEMAX, "1"), this.adapter.setAttribute(On.ARIA_VALUEMIN, "0"), this.setPrimaryBarProgress(this.progress), this.setBufferBarProgress(this.buffer);
        return;
      }
      this.observer && this.calculateAndSetDimensions(this.adapter.getWidth()), this.adapter.addClass(hn.INDETERMINATE_CLASS), this.adapter.removeAttribute(On.ARIA_VALUENOW), this.adapter.removeAttribute(On.ARIA_VALUEMAX), this.adapter.removeAttribute(On.ARIA_VALUEMIN), this.setPrimaryBarProgress(1), this.setBufferBarProgress(1);
    }, e.prototype.isDeterminate = function() {
      return this.determinate;
    }, e.prototype.setProgress = function(n) {
      this.progress = n, this.determinate && (this.setPrimaryBarProgress(n), this.adapter.setAttribute(On.ARIA_VALUENOW, n.toString()));
    }, e.prototype.getProgress = function() {
      return this.progress;
    }, e.prototype.setBuffer = function(n) {
      this.buffer = n, this.determinate && this.setBufferBarProgress(n);
    }, e.prototype.getBuffer = function() {
      return this.buffer;
    }, e.prototype.open = function() {
      this.adapter.removeClass(hn.CLOSED_CLASS), this.adapter.removeClass(hn.CLOSED_ANIMATION_OFF_CLASS), this.adapter.removeAttribute(On.ARIA_HIDDEN);
    }, e.prototype.close = function() {
      this.adapter.addClass(hn.CLOSED_CLASS), this.adapter.setAttribute(On.ARIA_HIDDEN, "true");
    }, e.prototype.isClosed = function() {
      return this.adapter.hasClass(hn.CLOSED_CLASS);
    }, e.prototype.handleTransitionEnd = function() {
      this.adapter.hasClass(hn.CLOSED_CLASS) && this.adapter.addClass(hn.CLOSED_ANIMATION_OFF_CLASS);
    }, e.prototype.destroy = function() {
      t.prototype.destroy.call(this), this.observer && this.observer.disconnect();
    }, e.prototype.restartAnimation = function() {
      this.adapter.removeClass(hn.ANIMATION_READY_CLASS), this.adapter.forceLayout(), this.adapter.addClass(hn.ANIMATION_READY_CLASS);
    }, e.prototype.setPrimaryBarProgress = function(n) {
      var i = "scaleX(" + n + ")", r = typeof window < "u" ? Lp(window, "transform") : "transform";
      this.adapter.setPrimaryBarStyle(r, i);
    }, e.prototype.setBufferBarProgress = function(n) {
      var i = n * 100 + "%";
      this.adapter.setBufferBarStyle(On.FLEX_BASIS, i);
    }, e.prototype.calculateAndSetDimensions = function(n) {
      var i = n * sa.PRIMARY_HALF, r = n * sa.PRIMARY_FULL, a = n * sa.SECONDARY_QUARTER, o = n * sa.SECONDARY_HALF, u = n * sa.SECONDARY_FULL;
      this.adapter.setStyle("--mdc-linear-progress-primary-half", i + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-half-neg", -i + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full", r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full-neg", -r + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter", a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg", -a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half", o + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg", -o + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full", u + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg", -u + "px"), this.restartAnimation();
    }, e;
  }(Dt)
);
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ti = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, $l = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, ji = {
  ARIA_SELECTED: $l.ARIA_SELECTED,
  ARIA_SORT: $l.ARIA_SORT
}, mn;
(function(t) {
  t.ASCENDING = "ascending", t.DESCENDING = "descending", t.NONE = "none", t.OTHER = "other";
})(mn || (mn = {}));
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var vb = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      return t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          addClassAtRowIndex: function() {
          },
          getAttributeByHeaderCellIndex: function() {
            return "";
          },
          getHeaderCellCount: function() {
            return 0;
          },
          getHeaderCellElements: function() {
            return [];
          },
          getRowCount: function() {
            return 0;
          },
          getRowElements: function() {
            return [];
          },
          getRowIdAtIndex: function() {
            return "";
          },
          getRowIndexByChildElement: function() {
            return 0;
          },
          getSelectedRowCount: function() {
            return 0;
          },
          getTableContainerHeight: function() {
            return 0;
          },
          getTableHeaderHeight: function() {
            return 0;
          },
          isCheckboxAtRowIndexChecked: function() {
            return !1;
          },
          isHeaderRowCheckboxChecked: function() {
            return !1;
          },
          isRowsSelectable: function() {
            return !1;
          },
          notifyRowSelectionChanged: function() {
          },
          notifySelectedAll: function() {
          },
          notifySortAction: function() {
          },
          notifyUnselectedAll: function() {
          },
          notifyRowClick: function() {
          },
          registerHeaderRowCheckbox: function() {
          },
          registerRowCheckboxes: function() {
          },
          removeClass: function() {
          },
          removeClassAtRowIndex: function() {
          },
          removeClassNameByHeaderCellIndex: function() {
          },
          setAttributeAtRowIndex: function() {
          },
          setAttributeByHeaderCellIndex: function() {
          },
          setClassNameByHeaderCellIndex: function() {
          },
          setHeaderRowCheckboxChecked: function() {
          },
          setHeaderRowCheckboxIndeterminate: function() {
          },
          setProgressIndicatorStyles: function() {
          },
          setRowCheckboxCheckedAtIndex: function() {
          },
          setSortStatusLabelByHeaderCellIndex: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.layout = function() {
      this.adapter.isRowsSelectable() && (this.adapter.registerHeaderRowCheckbox(), this.adapter.registerRowCheckboxes(), this.setHeaderRowCheckboxState());
    }, e.prototype.layoutAsync = function() {
      return ac(this, void 0, void 0, function() {
        return Bs(this, function(n) {
          switch (n.label) {
            case 0:
              return this.adapter.isRowsSelectable() ? [4, this.adapter.registerHeaderRowCheckbox()] : [3, 3];
            case 1:
              return n.sent(), [4, this.adapter.registerRowCheckboxes()];
            case 2:
              n.sent(), this.setHeaderRowCheckboxState(), n.label = 3;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.getRows = function() {
      return this.adapter.getRowElements();
    }, e.prototype.getHeaderCells = function() {
      return this.adapter.getHeaderCellElements();
    }, e.prototype.setSelectedRowIds = function(n) {
      for (var i = 0; i < this.adapter.getRowCount(); i++) {
        var r = this.adapter.getRowIdAtIndex(i), a = !1;
        r && n.indexOf(r) >= 0 && (a = !0), this.adapter.setRowCheckboxCheckedAtIndex(i, a), this.selectRowAtIndex(i, a);
      }
      this.setHeaderRowCheckboxState();
    }, e.prototype.getRowIds = function() {
      for (var n = [], i = 0; i < this.adapter.getRowCount(); i++)
        n.push(this.adapter.getRowIdAtIndex(i));
      return n;
    }, e.prototype.getSelectedRowIds = function() {
      for (var n = [], i = 0; i < this.adapter.getRowCount(); i++)
        this.adapter.isCheckboxAtRowIndexChecked(i) && n.push(this.adapter.getRowIdAtIndex(i));
      return n;
    }, e.prototype.handleHeaderRowCheckboxChange = function() {
      for (var n = this.adapter.isHeaderRowCheckboxChecked(), i = 0; i < this.adapter.getRowCount(); i++)
        this.adapter.setRowCheckboxCheckedAtIndex(i, n), this.selectRowAtIndex(i, n);
      n ? this.adapter.notifySelectedAll() : this.adapter.notifyUnselectedAll();
    }, e.prototype.handleRowCheckboxChange = function(n) {
      var i = this.adapter.getRowIndexByChildElement(n.target);
      if (i !== -1) {
        var r = this.adapter.isCheckboxAtRowIndexChecked(i);
        this.selectRowAtIndex(i, r), this.setHeaderRowCheckboxState();
        var a = this.adapter.getRowIdAtIndex(i);
        this.adapter.notifyRowSelectionChanged({ rowId: a, rowIndex: i, selected: r });
      }
    }, e.prototype.handleSortAction = function(n) {
      for (var i = n.columnId, r = n.columnIndex, a = n.headerCell, o = 0; o < this.adapter.getHeaderCellCount(); o++)
        o !== r && (this.adapter.removeClassNameByHeaderCellIndex(o, ti.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(o, ti.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(o, ji.ARIA_SORT, mn.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(o, mn.NONE));
      this.adapter.setClassNameByHeaderCellIndex(r, ti.HEADER_CELL_SORTED);
      var u = this.adapter.getAttributeByHeaderCellIndex(r, ji.ARIA_SORT), l = mn.NONE;
      u === mn.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(r, ti.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(r, ji.ARIA_SORT, mn.DESCENDING), l = mn.DESCENDING) : u === mn.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(r, ti.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(r, ji.ARIA_SORT, mn.ASCENDING), l = mn.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(r, ji.ARIA_SORT, mn.ASCENDING), l = mn.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(r, l), this.adapter.notifySortAction({
        columnId: i,
        columnIndex: r,
        headerCell: a,
        sortValue: l
      });
    }, e.prototype.handleRowClick = function(n) {
      var i = n.rowId, r = n.row;
      this.adapter.notifyRowClick({
        rowId: i,
        row: r
      });
    }, e.prototype.showProgress = function() {
      var n = this.adapter.getTableHeaderHeight(), i = this.adapter.getTableContainerHeight() - n, r = n;
      this.adapter.setProgressIndicatorStyles({
        height: i + "px",
        top: r + "px"
      }), this.adapter.addClass(ti.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(ti.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(n, i) {
      i ? (this.adapter.addClassAtRowIndex(n, ti.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, ji.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(n, ti.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, ji.ARIA_SELECTED, "false"));
    }, e;
  }(Dt)
), mb = /* @__PURE__ */ ge('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), pb = /* @__PURE__ */ ge("<div><div><table><!></table></div> <!> <!></div>");
function gb(t, e) {
  we(e, !0);
  const n = () => Rt(j, "$progressClosed", i), [i, r] = gn(), { closest: a } = Ra;
  let o = m(e, "use", 19, () => []), u = m(e, "class", 3, ""), l = m(e, "stickyHeader", 3, !1), c = m(e, "sortable", 3, !1), d = m(e, "sort", 15, null), h = m(e, "sortDirection", 15, "ascending"), f = m(e, "sortAscendingAriaLabel", 3, "sorted, ascending"), v = m(e, "sortDescendingAriaLabel", 3, "sorted, descending"), p = m(e, "container$use", 19, () => []), g = m(e, "container$class", 3, ""), _ = m(e, "table$use", 19, () => []), C = m(e, "table$class", 3, ""), x = /* @__PURE__ */ Ve(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "stickyHeader",
    "sortable",
    "sort",
    "sortDirection",
    "sortAscendingAriaLabel",
    "sortDescendingAriaLabel",
    "container$use",
    "container$class",
    "table$use",
    "table$class",
    "children",
    "progress",
    "paginate"
  ]), S, b = /* @__PURE__ */ xe(void 0), E, y = /* @__PURE__ */ xe(void 0), T = /* @__PURE__ */ xe(void 0), A = Ee({}), O = /* @__PURE__ */ xe(Ee({ height: "auto", top: "initial" })), B = se("SMUI:addLayoutListener"), Z, G = !1, j = bt(!1), K = bt(d());
  Ae(() => {
    kt(K, d());
  });
  let k = bt(h());
  Ae(() => {
    kt(k, h());
  }), te("SMUI:checkbox:context", "data-table"), te("SMUI:linear-progress:context", "data-table"), te("SMUI:linear-progress:closed", j), te("SMUI:data-table:sortable", c()), te("SMUI:data-table:sort", K), te("SMUI:data-table:sortDirection", k), te("SMUI:data-table:sortAscendingAriaLabel", f()), te("SMUI:data-table:sortDescendingAriaLabel", v()), B && (Z = B(R));
  let P;
  Ae(() => {
    e.progress && s(b) && P !== n() && (P = n(), n() ? s(b).hideProgress() : s(b).showProgress());
  }), te("SMUI:checkbox:mount", () => {
    s(b) && G && s(b).layout();
  }), te("SMUI:data-table:header:mount", (F) => {
    ae(y, F, !0);
  }), te("SMUI:data-table:header:unmount", () => {
    ae(y, void 0);
  }), te("SMUI:data-table:body:mount", (F) => {
    ae(T, F, !0);
  }), te("SMUI:data-table:body:unmount", () => {
    ae(T, void 0);
  }), st(() => (ae(
    b,
    new vb({
      addClass: z,
      removeClass: re,
      getHeaderCellElements: () => {
        var F;
        return ((F = s(y)) == null ? void 0 : F.cells.map((q) => q.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var F;
        return ((F = s(y)) == null ? void 0 : F.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (F, q) => {
        var ee;
        return ((ee = s(y)) == null ? void 0 : ee.orderedCells[F].getAttr(q)) ?? null;
      },
      setAttributeByHeaderCellIndex: (F, q, ee) => {
        var Ce;
        (Ce = s(y)) == null || Ce.orderedCells[F].addAttr(q, ee);
      },
      setClassNameByHeaderCellIndex: (F, q) => {
        var ee;
        (ee = s(y)) == null || ee.orderedCells[F].addClass(q);
      },
      removeClassNameByHeaderCellIndex: (F, q) => {
        var ee;
        (ee = s(y)) == null || ee.orderedCells[F].removeClass(q);
      },
      notifySortAction: (F) => {
        d(F.columnId), h(F.sortValue), ke(W(), "SMUIDataTableSorted", F);
      },
      getTableContainerHeight: () => E.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const F = W().querySelector(".mdc-data-table__header-row");
        if (!F)
          throw new Error("MDCDataTable: Table header element not found.");
        return F.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (F) => {
        ae(O, F, !0);
      },
      addClassAtRowIndex: (F, q) => {
        var ee;
        (ee = s(T)) == null || ee.orderedRows[F].addClass(q);
      },
      getRowCount: () => {
        var F;
        return ((F = s(T)) == null ? void 0 : F.rows.length) ?? 0;
      },
      getRowElements: () => {
        var F;
        return ((F = s(T)) == null ? void 0 : F.rows.map((q) => q.element)) ?? [];
      },
      getRowIdAtIndex: (F) => {
        var q;
        return ((q = s(T)) == null ? void 0 : q.orderedRows[F].rowId) ?? null;
      },
      getRowIndexByChildElement: (F) => {
        var q;
        return ((q = s(T)) == null ? void 0 : q.orderedRows.map((ee) => ee.element).indexOf(a(F, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var F;
        return ((F = s(T)) == null ? void 0 : F.rows.filter((q) => q.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (F) => {
        var ee;
        const q = (ee = s(T)) == null ? void 0 : ee.orderedRows[F].checkbox;
        return q ? q.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var q;
        const F = (q = s(y)) == null ? void 0 : q.checkbox;
        return F ? F.checked : !1;
      },
      isRowsSelectable: () => !!W().querySelector(".mdc-data-table__row-checkbox") || !!W().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (F) => {
        var ee;
        const q = (ee = s(T)) == null ? void 0 : ee.orderedRows[F.rowIndex];
        q && ke(W(), "SMUIDataTableSelectionChanged", {
          row: q.element,
          rowId: q.rowId,
          rowIndex: F.rowIndex,
          selected: F.selected
        });
      },
      notifySelectedAll: () => {
        U(!1), ke(W(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        U(!1), ke(W(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (F) => ke(W(), "SMUIDataTableClickRow", F),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (F, q) => {
        var ee;
        (ee = s(T)) == null || ee.orderedRows[F].removeClass(q);
      },
      setAttributeAtRowIndex: (F, q, ee) => {
        var Ce;
        (Ce = s(T)) == null || Ce.orderedRows[F].addAttr(q, ee);
      },
      setHeaderRowCheckboxChecked: (F) => {
        var ee;
        const q = (ee = s(y)) == null ? void 0 : ee.checkbox;
        q && (q.checked = F);
      },
      setHeaderRowCheckboxIndeterminate: U,
      setRowCheckboxCheckedAtIndex: (F, q) => {
        var Ce;
        const ee = (Ce = s(T)) == null ? void 0 : Ce.orderedRows[F].checkbox;
        ee && (ee.checked = q);
      },
      setSortStatusLabelByHeaderCellIndex: (F, q) => {
      }
    }),
    !0
  ), s(b).init(), s(b).layout(), G = !0, () => {
    var F;
    (F = s(b)) == null || F.destroy();
  })), Pn(() => {
    Z && Z();
  });
  function M(F) {
    s(b) && s(b).handleRowCheckboxChange(F);
  }
  function z(F) {
    A[F] || (A[F] = !0);
  }
  function re(F) {
    (!(F in A) || A[F]) && (A[F] = !1);
  }
  function U(F) {
    var ee;
    const q = (ee = s(y)) == null ? void 0 : ee.checkbox;
    q && (q.indeterminate = F);
  }
  function I(F) {
    if (!s(b) || !F.detail.target)
      return;
    const q = a(F.detail.target, ".mdc-data-table__header-cell--with-sort");
    q && $(q);
  }
  function L(F) {
    if (!s(b) || !F.detail.target)
      return;
    const q = a(F.detail.target, ".mdc-data-table__row");
    q && s(b) && s(b).handleRowClick({ rowId: F.detail.rowId, row: q });
  }
  function $(F) {
    var Tt, pt;
    const q = ((Tt = s(y)) == null ? void 0 : Tt.orderedCells) ?? [], ee = q.map((on) => on.element).indexOf(F);
    if (ee === -1)
      return;
    const Ce = q[ee].columnId ?? null;
    (pt = s(b)) == null || pt.handleSortAction({ columnId: Ce, columnIndex: ee, headerCell: F });
  }
  function R() {
    var F;
    return (F = s(b)) == null ? void 0 : F.layout();
  }
  function W() {
    return S;
  }
  var ce = { layout: R, getElement: W }, V = pb(), oe = (F) => {
    var q;
    s(b) && s(b).handleHeaderRowCheckboxChange(), (q = e.onSMUIDataTableHeaderCheckboxChange) == null || q.call(e, F);
  }, Q = (F) => {
    var q;
    I(F), (q = e.onSMUIDataTableHeaderClick) == null || q.call(e, F);
  }, de = (F) => {
    var q;
    L(F), (q = e.onSMUIDataTableRowClick) == null || q.call(e, F);
  }, ne = (F) => {
    var q;
    M(F), (q = e.onSMUIDataTableBodyCheckboxChange) == null || q.call(e, F);
  };
  He(
    V,
    (F, q) => ({
      class: F,
      ...q,
      onSMUIDataTableHeaderCheckboxChange: oe,
      onSMUIDataTableHeaderClick: Q,
      onSMUIDataTableRowClick: de,
      onSMUIDataTableBodyCheckboxChange: ne
    }),
    [
      () => Ne({
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": l(),
        ...A,
        [u()]: !0
      }),
      () => ir(x, ["container$", "table$"])
    ]
  );
  var qe = _e(V);
  He(qe, (F, q) => ({ class: F, ...q }), [
    () => Ne({
      "mdc-data-table__table-container": !0,
      [g()]: !0
    }),
    () => ot(x, "container$")
  ]);
  var je = _e(qe);
  He(je, (F, q) => ({ class: F, ...q }), [
    () => Ne({ "mdc-data-table__table": !0, [C()]: !0 }),
    () => ot(x, "table$")
  ]);
  var De = _e(je);
  Ie(De, () => e.children ?? me), Ue(je, (F, q) => X == null ? void 0 : X(F, q), _), Se(qe, (F) => E = F, () => E), Ue(qe, (F, q) => X == null ? void 0 : X(F, q), p);
  var Le = ye(qe, 2);
  {
    var ue = (F) => {
      var q = mb(), ee = ye(_e(q), 2);
      Ie(ee, () => e.progress ?? me), Be((Ce) => nn(q, Ce), [
        () => Object.entries(s(O)).map(([Ce, Tt]) => `${Ce}: ${Tt};`).join(" ")
      ]), w(F, q);
    };
    he(Le, (F) => {
      e.progress && F(ue);
    });
  }
  var Oe = ye(Le, 2);
  Ie(Oe, () => e.paginate ?? me), Se(V, (F) => S = F, () => S), Ue(V, (F, q) => X == null ? void 0 : X(F, q), o), w(t, V);
  var Ze = Re(ce);
  return r(), Ze;
}
var bb = /* @__PURE__ */ ge("<thead><!></thead>");
function Ib(t, e) {
  we(e, !0);
  let n = m(e, "use", 19, () => []), i = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), r, a = /* @__PURE__ */ xe(void 0), o = [];
  const u = /* @__PURE__ */ new WeakMap();
  te("SMUI:data-table:row:header", !0);
  const l = se("SMUI:checkbox:mount");
  te("SMUI:checkbox:mount", (C) => {
    ae(a, C, !0), l && l(C);
  });
  const c = se("SMUI:checkbox:unmount");
  te("SMUI:checkbox:unmount", (C) => {
    ae(a, void 0), c && c(C);
  }), te("SMUI:data-table:cell:mount", (C) => {
    o.push(C), u.set(C.element, C);
  }), te("SMUI:data-table:cell:unmount", (C) => {
    const x = o.findIndex((S) => S === C);
    x !== -1 && o.splice(x, 1), u.delete(C.element);
  });
  const d = se("SMUI:data-table:header:mount"), h = se("SMUI:data-table:header:unmount");
  st(() => {
    const C = {
      get cells() {
        return o;
      },
      get orderedCells() {
        return f();
      },
      get checkbox() {
        return s(a);
      }
    };
    return d && d(C), () => {
      h && h(C);
    };
  });
  function f() {
    return [
      ...v().querySelectorAll(".mdc-data-table__header-cell")
    ].map((C) => u.get(C)).filter((C) => C && C._smui_data_table_header_cell_accessor);
  }
  function v() {
    return r;
  }
  var p = { getElement: v }, g = bb();
  He(g, () => ({ ...i }));
  var _ = _e(g);
  return Ie(_, () => e.children ?? me), Se(g, (C) => r = C, () => r), Ue(g, (C, x) => X == null ? void 0 : X(C, x), n), w(t, g), Re(p);
}
var yb = /* @__PURE__ */ ge("<tbody><!></tbody>");
function _b(t, e) {
  we(e, !0);
  let n = m(e, "use", 19, () => []), i = m(e, "class", 3, ""), r = /* @__PURE__ */ Ve(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "children"
  ]), a, o = [];
  const u = /* @__PURE__ */ new WeakMap();
  te("SMUI:data-table:row:header", !1), te("SMUI:data-table:row:mount", (g) => {
    o.push(g), u.set(g.element, g);
  }), te("SMUI:data-table:row:unmount", (g) => {
    const _ = o.findIndex((C) => C === g);
    _ !== -1 && o.splice(_, 1), u.delete(g.element);
  });
  const l = se("SMUI:data-table:body:mount"), c = se("SMUI:data-table:body:unmount");
  st(() => {
    const g = {
      get rows() {
        return o;
      },
      get orderedRows() {
        return d();
      }
    };
    return l && l(g), () => {
      c && c(g);
    };
  });
  function d() {
    return [...h().querySelectorAll(".mdc-data-table__row")].map((g) => u.get(g)).filter((g) => g && g._smui_data_table_row_accessor);
  }
  function h() {
    return a;
  }
  var f = { getElement: h }, v = yb();
  He(v, (g) => ({ class: g, ...r }), [
    () => Ne({ "mdc-data-table__content": !0, [i()]: !0 })
  ]);
  var p = _e(v);
  return Ie(p, () => e.children ?? me), Se(v, (g) => a = g, () => a), Ue(v, (g, _) => X == null ? void 0 : X(g, _), n), w(t, v), Re(f);
}
let Eb = 0;
var Cb = /* @__PURE__ */ ge("<tr><!></tr>");
function eu(t, e) {
  we(e, !0);
  let n = m(e, "use", 19, () => []), i = m(e, "class", 3, ""), r = m(e, "rowId", 19, () => "SMUI-data-table-row-" + Eb++), a = /* @__PURE__ */ Ve(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "rowId",
    "children"
  ]), o, u = /* @__PURE__ */ xe(void 0), l = Ee({}), c = Ee({}), d = se("SMUI:data-table:row:header");
  const h = se("SMUI:checkbox:mount");
  te("SMUI:checkbox:mount", (B) => {
    ae(u, B, !0), h && h(B);
  });
  const f = se("SMUI:checkbox:unmount");
  te("SMUI:checkbox:unmount", (B) => {
    ae(u, void 0), f && f(B);
  });
  const v = se("SMUI:data-table:row:mount"), p = se("SMUI:data-table:row:unmount");
  st(() => {
    const B = d ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return E();
      },
      get checkbox() {
        return s(u);
      },
      get rowId() {
      },
      get selected() {
        return (s(u) && s(u).checked) ?? !1;
      },
      addClass: g,
      removeClass: _,
      getAttr: C,
      addAttr: x
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return E();
      },
      get checkbox() {
        return s(u);
      },
      get rowId() {
        return r();
      },
      get selected() {
        return (s(u) && s(u).checked) ?? !1;
      },
      addClass: g,
      removeClass: _,
      getAttr: C,
      addAttr: x
    };
    return v && v(B), () => {
      p && p(B);
    };
  });
  function g(B) {
    l[B] || (l[B] = !0);
  }
  function _(B) {
    (!(B in l) || l[B]) && (l[B] = !1);
  }
  function C(B) {
    return B in c ? c[B] ?? null : E().getAttribute(B);
  }
  function x(B, Z) {
    c[B] !== Z && (c[B] = Z);
  }
  function S(B) {
    ke(E(), "SMUIDataTableHeaderClick", B);
  }
  function b(B) {
    ke(E(), "SMUIDataTableRowClick", { rowId: r(), target: B.target });
  }
  function E() {
    return o;
  }
  var y = { getElement: E }, T = Cb(), A = (B) => {
    var Z;
    d ? S(B) : b(B), (Z = e.onclick) == null || Z.call(e, B);
  };
  He(
    T,
    (B) => ({
      class: B,
      "aria-selected": s(u) ? s(u).checked ? "true" : "false" : void 0,
      ...c,
      ...a,
      onclick: A
    }),
    [
      () => Ne({
        "mdc-data-table__header-row": d,
        "mdc-data-table__row": !d,
        "mdc-data-table__row--selected": !d && s(u) && s(u).checked,
        ...l,
        [i()]: !0
      })
    ]
  );
  var O = _e(T);
  return Ie(O, () => e.children ?? me), Se(T, (B) => o = B, () => o), Ue(T, (B, Z) => X == null ? void 0 : X(B, Z), n), w(t, T), Re(y);
}
let Ab = 0;
var Sb = /* @__PURE__ */ ge('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), xb = /* @__PURE__ */ ge("<th><!></th>"), Tb = /* @__PURE__ */ ge("<td><!></td>");
function Xo(t, e) {
  we(e, !0);
  const n = () => Rt(C, "$sort", r), i = () => Rt(x, "$sortDirection", r), [r, a] = gn();
  let o = se("SMUI:data-table:row:header"), u = m(e, "use", 19, () => []), l = m(e, "class", 3, ""), c = m(e, "numeric", 3, !1), d = m(e, "checkbox", 3, !1), h = m(e, "columnId", 19, () => o ? "SMUI-data-table-column-" + Ab++ : "SMUI-data-table-unused"), f = m(e, "sortable", 19, () => se("SMUI:data-table:sortable")), v = /* @__PURE__ */ Ve(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "numeric",
    "checkbox",
    "columnId",
    "sortable",
    "children"
  ]), p, g = Ee({}), _ = Ee({}), C = se("SMUI:data-table:sort"), x = se("SMUI:data-table:sortDirection"), S = se("SMUI:data-table:sortAscendingAriaLabel"), b = se("SMUI:data-table:sortDescendingAriaLabel");
  f() && (te("SMUI:label:context", "data-table:sortable-header-cell"), te("SMUI:icon-button:context", "data-table:sortable-header-cell"), te("SMUI:icon-button:aria-describedby", h() + "-status-label"));
  const E = se("SMUI:data-table:cell:mount"), y = se("SMUI:data-table:cell:unmount");
  st(() => {
    const U = o ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return j();
      },
      get columnId() {
        return h();
      },
      addClass: T,
      removeClass: A,
      getAttr: O,
      addAttr: B
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return j();
      },
      get columnId() {
      },
      addClass: T,
      removeClass: A,
      getAttr: O,
      addAttr: B
    };
    return E && E(U), () => {
      y && y(U);
    };
  });
  function T(U) {
    g[U] || (g[U] = !0);
  }
  function A(U) {
    (!(U in g) || g[U]) && (g[U] = !1);
  }
  function O(U) {
    return U in _ ? _[U] ?? null : j().getAttribute(U);
  }
  function B(U, I) {
    _[U] !== I && (_[U] = I);
  }
  function Z(U) {
    ke(j(), "SMUIDataTableHeaderCheckboxChange", U);
  }
  function G(U) {
    ke(j(), "SMUIDataTableBodyCheckboxChange", U);
  }
  function j() {
    return p;
  }
  var K = { getElement: j }, k = le(), P = J(k);
  {
    var M = (U) => {
      var I = xb(), L = (ce) => {
        var V;
        d() && Z(ce), (V = e.onchange) == null || V.call(e, ce);
      };
      He(
        I,
        (ce) => ({
          class: ce,
          role: "columnheader",
          scope: "col",
          "data-column-id": h(),
          "aria-sort": f() ? n() === h() ? i() : "none" : void 0,
          ..._,
          ...v,
          onchange: L
        }),
        [
          () => Ne({
            "mdc-data-table__header-cell": !0,
            "mdc-data-table__header-cell--numeric": c(),
            "mdc-data-table__header-cell--checkbox": d(),
            "mdc-data-table__header-cell--with-sort": f(),
            "mdc-data-table__header-cell--sorted": f() && n() === h(),
            ...g,
            [l()]: !0
          })
        ]
      );
      var $ = _e(I);
      {
        var R = (ce) => {
          var V = Sb(), oe = _e(V);
          Ie(oe, () => e.children ?? me);
          var Q = ye(oe, 2), de = _e(Q);
          Be(() => {
            Ia(Q, "id", `${h() ?? ""}-status-label`), ft(de, n() === h() ? i() === "ascending" ? S : b : "");
          }), w(ce, V);
        }, W = (ce) => {
          var V = le(), oe = J(V);
          Ie(oe, () => e.children ?? me), w(ce, V);
        };
        he($, (ce) => {
          f() ? ce(R) : ce(W, !1);
        });
      }
      Se(I, (ce) => p = ce, () => p), Ue(I, (ce, V) => X == null ? void 0 : X(ce, V), u), w(U, I);
    }, z = (U) => {
      var I = Tb(), L = (R) => {
        var W;
        d() && G(R), (W = e.onchange) == null || W.call(e, R);
      };
      He(
        I,
        (R) => ({
          class: R,
          ..._,
          ...v,
          onchange: L
        }),
        [
          () => Ne({
            "mdc-data-table__cell": !0,
            "mdc-data-table__cell--numeric": c(),
            "mdc-data-table__cell--checkbox": d(),
            ...g,
            [l()]: !0
          })
        ]
      );
      var $ = _e(I);
      Ie($, () => e.children ?? me), Se(I, (R) => p = R, () => p), Ue(I, (R, W) => X == null ? void 0 : X(R, W), u), w(U, I);
    };
    he(P, (U) => {
      o ? U(M) : U(z, !1);
    });
  }
  w(t, k);
  var re = Re(K);
  return a(), re;
}
ur(["click"]);
ur(["click"]);
function Is(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
var Lb = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
Is({}, Lb.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
var Va, tu = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
};
Va = {}, Is(Va, tu.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), Is(Va, tu.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list");
const Ob = bt([]);
Ob.subscribe;
ur(["click", "pointerdown", "pointerup", "pointermove"]);
var wb = /* @__PURE__ */ ge('<div><div class="mdc-linear-progress__buffer"><div class="mdc-linear-progress__buffer-bar"></div> <div class="mdc-linear-progress__buffer-dots"></div></div> <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"><span class="mdc-linear-progress__bar-inner"></span></div> <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span class="mdc-linear-progress__bar-inner"></span></div></div>');
function Rb(t, e) {
  we(e, !0);
  const [n, i] = gn();
  let r = m(e, "use", 19, () => []), a = m(e, "class", 3, ""), o = m(e, "style", 3, ""), u = m(e, "indeterminate", 3, !1), l = m(e, "closed", 3, !1), c = m(e, "progress", 3, 0), d = m(e, "buffer", 3, void 0), h = /* @__PURE__ */ Ve(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "indeterminate",
    "closed",
    "progress",
    "buffer"
  ]), f, v = /* @__PURE__ */ xe(void 0), p = Ee({}), g = Ee({}), _ = Ee({}), C = Ee({}), x = Ee({}), S = se("SMUI:linear-progress:context"), b = se("SMUI:linear-progress:closed");
  Ae(() => {
    b && kt(b, l());
  }), Ae(() => {
    s(v) && s(v).isDeterminate() !== !u() && s(v).setDeterminate(!u());
  }), Ae(() => {
    s(v) && s(v).getProgress() !== c() && s(v).setProgress(c());
  }), Ae(() => {
    s(v) && (d() == null ? s(v).setBuffer(1) : s(v).setBuffer(d()));
  }), Ae(() => {
    s(v) && (l() ? s(v).close() : s(v).open());
  }), st(() => (ae(
    v,
    new hb({
      addClass: y,
      forceLayout: () => {
        j().getBoundingClientRect();
      },
      setBufferBarStyle: Z,
      setPrimaryBarStyle: G,
      hasClass: E,
      removeAttribute: O,
      removeClass: T,
      setAttribute: A,
      setStyle: B,
      attachResizeObserver: (I) => {
        const L = window.ResizeObserver;
        if (L) {
          const $ = new L(I);
          return $.observe(j()), $;
        }
        return null;
      },
      getWidth: () => j().offsetWidth
    }),
    !0
  ), s(v).init(), () => {
    var I;
    (I = s(v)) == null || I.destroy();
  }));
  function E(I) {
    return I in p ? p[I] : j().classList.contains(I);
  }
  function y(I) {
    p[I] || (p[I] = !0);
  }
  function T(I) {
    (!(I in p) || p[I]) && (p[I] = !1);
  }
  function A(I, L) {
    g[I] !== L && (g[I] = L);
  }
  function O(I) {
    (!(I in g) || g[I] != null) && (g[I] = void 0);
  }
  function B(I, L) {
    _[I] != L && (L === "" || L == null ? delete _[I] : _[I] = L);
  }
  function Z(I, L) {
    C[I] != L && (L === "" || L == null ? delete C[I] : C[I] = L);
  }
  function G(I, L) {
    x[I] != L && (L === "" || L == null ? delete x[I] : x[I] = L);
  }
  function j() {
    return f;
  }
  var K = { getElement: j }, k = wb(), P = (I) => {
    var L;
    s(v) && s(v).handleTransitionEnd(), (L = e.ontransitionend) == null || L.call(e, I);
  };
  He(
    k,
    (I, L) => ({
      class: I,
      style: L,
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 1,
      "aria-valuenow": u() ? void 0 : c(),
      ...g,
      ...h,
      ontransitionend: P
    }),
    [
      () => Ne({
        "mdc-linear-progress": !0,
        "mdc-linear-progress--indeterminate": u(),
        "mdc-linear-progress--closed": l(),
        "mdc-data-table__linear-progress": S === "data-table",
        ...p,
        [a()]: !0
      }),
      () => Object.entries(_).map(([I, L]) => `${I}: ${L};`).concat([o()]).join(" ")
    ]
  );
  var M = _e(k), z = _e(M), re = ye(M, 2);
  Se(k, (I) => f = I, () => f), Ue(k, (I, L) => X == null ? void 0 : X(I, L), r), Be(
    (I, L) => {
      nn(z, I), nn(re, L);
    },
    [
      () => Object.entries(C).map(([I, L]) => `${I}: ${L};`).join(" "),
      () => Object.entries(x).map(([I, L]) => `${I}: ${L};`).join(" ")
    ]
  ), w(t, k);
  var U = Re(K);
  return i(), U;
}
var Mb = /* @__PURE__ */ cn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 4l-8 8h16l-8-8z"></path></svg>'), Db = /* @__PURE__ */ cn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 20l8-8H4l8 8z"></path></svg>'), Pb = (t, e) => e(), Nb = /* @__PURE__ */ ge('<input type="text" class="svelte-1mj71p3"/>'), Fb = (t, e) => e(), Hb = /* @__PURE__ */ ge('<input type="number" class="svelte-1mj71p3"/>'), Ub = /* @__PURE__ */ ge("<!> <!>", 1), Bb = /* @__PURE__ */ ge('<div class="custom-cell-container svelte-1mj71p3"><div class="cell-header svelte-1mj71p3"><span class="header-title svelte-1mj71p3"> </span> <!></div> <!></div>'), kb = /* @__PURE__ */ ge('<div class="cell-actions svelte-1mj71p3"></div>'), Vb = /* @__PURE__ */ ge("<!> <!>", 1);
function nu(t, e) {
  we(e, !0);
  const n = () => Rt(g, "$sortColumn", a), i = () => Rt(_, "$sortDirection", a), r = () => Rt(p, "$filteredData", a), [a, o] = gn();
  let u = m(e, "loadingDone", 15, !0), l = m(e, "label", 19, Vc), c = m(e, "columnDefs", 19, () => []), d = m(e, "rowData", 31, () => Ee([])), h = m(e, "rowActions", 19, () => []), f = m(e, "searchInputLabel", 3, "Search"), v = Ee({ name: "", color: "", number: "" }), p = bt([]), g = bt(null), _ = bt(null);
  e.store.store.subscribe((b) => {
    d([...b]), C();
  });
  function C() {
    let b = d().filter((E) => c().every((y) => {
      const T = v[y.field], A = E[y.field];
      return T ? y.filterType === "number" ? A == T : A.toString().toLowerCase().includes(T.toLowerCase()) : !0;
    }));
    b = x(b), p.set(b);
  }
  function x(b) {
    let E, y;
    return g.subscribe((T) => E = T), _.subscribe((T) => y = T), !E || !y ? b : b.sort((T, A) => {
      let O = T[E], B = A[E];
      return O == null && (O = ""), B == null && (B = ""), y === "asc" ? O.toString().localeCompare(B.toString()) : B.toString().localeCompare(O.toString());
    });
  }
  function S(b) {
    g.update((E) => {
      if (E === b)
        _.update((y) => y === "asc" ? "desc" : y === "desc" ? null : "asc");
      else
        return _.set("asc"), b;
      return b;
    }), C();
  }
  p.set(d()), gb(t, {
    get "table$aria-label"() {
      return l();
    },
    style: "max-width: 100%; width: 100%;",
    progress: (E) => {
      Rb(E, {
        indeterminate: !0,
        "aria-label": "Data is being loaded...",
        get closed() {
          return u();
        },
        set closed(y) {
          u(y);
        }
      });
    },
    children: (E, y) => {
      var T = Vb(), A = J(T);
      Ib(A, {
        children: (B, Z) => {
          eu(B, {
            class: "header-row",
            children: (G, j) => {
              var K = le(), k = J(K);
              _r(k, 17, c, Xa, (P, M) => {
                Xo(P, {
                  get style() {
                    return s(M).headerStyle;
                  },
                  $$events: {
                    click: () => s(M).sortable && S(s(M).field)
                  },
                  children: (z, re) => {
                    var U = Bb(), I = _e(U), L = _e(I), $ = _e(L), R = ye(L, 2);
                    {
                      var W = (oe) => {
                        var Q = le(), de = J(Q);
                        {
                          var ne = (qe) => {
                            var je = le(), De = J(je);
                            {
                              var Le = (Oe) => {
                                var Ze = Mb();
                                w(Oe, Ze);
                              }, ue = (Oe) => {
                                var Ze = le(), F = J(Ze);
                                {
                                  var q = (ee) => {
                                    var Ce = Db();
                                    w(ee, Ce);
                                  };
                                  he(
                                    F,
                                    (ee) => {
                                      i() === "desc" && ee(q);
                                    },
                                    !0
                                  );
                                }
                                w(Oe, Ze);
                              };
                              he(De, (Oe) => {
                                i() === "asc" ? Oe(Le) : Oe(ue, !1);
                              });
                            }
                            w(qe, je);
                          };
                          he(de, (qe) => {
                            n() === s(M).field && i() !== null && qe(ne);
                          });
                        }
                        w(oe, Q);
                      };
                      he(R, (oe) => {
                        s(M).sortable && oe(W);
                      });
                    }
                    var ce = ye(I, 2);
                    {
                      var V = (oe) => {
                        var Q = Ub(), de = J(Q);
                        {
                          var ne = (De) => {
                            var Le = Nb();
                            Le.__input = [Pb, C], Be(() => Ia(Le, "placeholder", `${f()} ${s(M).headerName}`)), ya(Le, () => v[s(M).field], (ue) => v[s(M).field] = ue), w(De, Le);
                          };
                          he(de, (De) => {
                            s(M).filterType === "text" && De(ne);
                          });
                        }
                        var qe = ye(de, 2);
                        {
                          var je = (De) => {
                            var Le = Hb();
                            Le.__input = [Fb, C], Be(() => Ia(Le, "placeholder", `${f()} ${s(M).headerName}`)), ya(Le, () => v[s(M).field], (ue) => v[s(M).field] = ue), w(De, Le);
                          };
                          he(qe, (De) => {
                            s(M).filterType === "number" && De(je);
                          });
                        }
                        w(oe, Q);
                      };
                      he(ce, (oe) => {
                        s(M).filter && oe(V);
                      });
                    }
                    Be(() => {
                      nn(U, `min-width: ${s(M).minWidth ?? 0 ?? ""}`), ft($, s(M).headerName);
                    }), w(z, U);
                  },
                  $$slots: { default: !0 }
                });
              }), w(G, K);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var O = ye(A, 2);
      _b(O, {
        children: (B, Z) => {
          var G = le(), j = J(G);
          _r(j, 1, r, Xa, (K, k) => {
            eu(K, {
              children: (P, M) => {
                var z = le(), re = J(z);
                _r(re, 17, c, (U) => U.field, (U, I) => {
                  var L = le(), $ = J(L);
                  {
                    var R = (ce) => {
                      Xo(ce, {
                        children: (V, oe) => {
                          var Q = kb();
                          _r(Q, 21, h, Xa, (de, ne) => {
                            var qe = le(), je = J(qe);
                            {
                              var De = (ue) => {
                                {
                                  let Oe = /* @__PURE__ */ ve(() => s(ne).disabled(s(k)));
                                  Fm(ue, {
                                    get iconComponent() {
                                      return s(ne).iconComponent;
                                    },
                                    get iconStyles() {
                                      return s(ne).iconStyles;
                                    },
                                    callback: () => s(ne).callback(s(k)),
                                    get disabled() {
                                      return s(Oe);
                                    }
                                  });
                                }
                              }, Le = (ue) => {
                                {
                                  let Oe = /* @__PURE__ */ ve(() => s(ne).disabled(s(k)));
                                  ao(ue, {
                                    class: "button",
                                    variant: "raised",
                                    callback: () => s(ne).callback(s(k)),
                                    get disabled() {
                                      return s(Oe);
                                    },
                                    children: (Ze, F) => {
                                      var q = le(), ee = J(q);
                                      {
                                        var Ce = (pt) => {
                                          Ug(pt, { svgStyles: "margin: unset" });
                                        }, Tt = (pt) => {
                                          var on = le(), pe = J(on);
                                          {
                                            var H = (Y) => {
                                              Ks(Y, { svgStyles: "margin: unset" });
                                            }, N = (Y) => {
                                              var Pe = le(), ct = J(Pe);
                                              {
                                                var It = (_t) => {
                                                  Vg(_t, { svgStyles: "margin: unset" });
                                                }, Pt = (_t) => {
                                                  var Xn = le(), ht = J(Xn);
                                                  {
                                                    var Nt = (Xt) => {
                                                      jg(Xt, { svgStyles: "margin: unset" });
                                                    }, Gt = (Xt) => {
                                                      var Pi = le(), Fn = J(Pi);
                                                      {
                                                        var Ke = (Xe) => {
                                                          Yg(Xe, { svgStyles: "margin: unset" });
                                                        }, nt = (Xe) => {
                                                          var Lt = le(), fn = J(Lt);
                                                          {
                                                            var it = (vt) => {
                                                              Qg(vt, { svgStyles: "margin: unset" });
                                                            }, Et = (vt) => {
                                                              var Je = le(), Ot = J(Je);
                                                              {
                                                                var Ln = (lt) => {
                                                                  $g(lt, { svgStyles: "margin: unset" });
                                                                }, sn = (lt) => {
                                                                  qg(lt, { svgStyles: "margin: unset" });
                                                                };
                                                                he(
                                                                  Ot,
                                                                  (lt) => {
                                                                    s(ne).icon === "delete" ? lt(Ln) : lt(sn, !1);
                                                                  },
                                                                  !0
                                                                );
                                                              }
                                                              w(vt, Je);
                                                            };
                                                            he(
                                                              fn,
                                                              (vt) => {
                                                                s(ne).icon === "edit" ? vt(it) : vt(Et, !1);
                                                              },
                                                              !0
                                                            );
                                                          }
                                                          w(Xe, Lt);
                                                        };
                                                        he(
                                                          Fn,
                                                          (Xe) => {
                                                            s(ne).icon === "remove" ? Xe(Ke) : Xe(nt, !1);
                                                          },
                                                          !0
                                                        );
                                                      }
                                                      w(Xt, Pi);
                                                    };
                                                    he(
                                                      ht,
                                                      (Xt) => {
                                                        s(ne).icon === "find-in-page" ? Xt(Nt) : Xt(Gt, !1);
                                                      },
                                                      !0
                                                    );
                                                  }
                                                  w(_t, Xn);
                                                };
                                                he(
                                                  ct,
                                                  (_t) => {
                                                    s(ne).icon === "download" ? _t(It) : _t(Pt, !1);
                                                  },
                                                  !0
                                                );
                                              }
                                              w(Y, Pe);
                                            };
                                            he(
                                              pe,
                                              (Y) => {
                                                s(ne).icon === "cancel" ? Y(H) : Y(N, !1);
                                              },
                                              !0
                                            );
                                          }
                                          w(pt, on);
                                        };
                                        he(ee, (pt) => {
                                          s(ne).icon === "add" ? pt(Ce) : pt(Tt, !1);
                                        });
                                      }
                                      w(Ze, q);
                                    },
                                    $$slots: { default: !0 }
                                  });
                                }
                              };
                              he(je, (ue) => {
                                s(ne).iconComponent ? ue(De) : ue(Le, !1);
                              });
                            }
                            w(de, qe);
                          }), w(V, Q);
                        },
                        $$slots: { default: !0 }
                      });
                    }, W = (ce) => {
                      Xo(ce, {
                        get numeric() {
                          return s(I).numeric;
                        },
                        get style() {
                          return s(I).cellStyle;
                        },
                        children: (V, oe) => {
                          var Q = le(), de = J(Q);
                          {
                            var ne = (je) => {
                              var De = Bt();
                              Be((Le) => ft(De, Le), [
                                () => s(I).valueFormatter(s(k)[s(I).field])
                              ]), w(je, De);
                            }, qe = (je) => {
                              var De = Bt();
                              Be(() => ft(De, s(k)[s(I).field] ?? "")), w(je, De);
                            };
                            he(de, (je) => {
                              s(I).valueFormatter ? je(ne) : je(qe, !1);
                            });
                          }
                          w(V, Q);
                        },
                        $$slots: { default: !0 }
                      });
                    };
                    he($, (ce) => {
                      s(I).field === "actions" ? ce(R) : ce(W, !1);
                    });
                  }
                  w(U, L);
                }), w(P, z);
              },
              $$slots: { default: !0 }
            });
          }), w(B, G);
        },
        $$slots: { default: !0 }
      }), w(E, T);
    },
    $$slots: { progress: !0, default: !0 }
  }), Re(), o();
}
ur(["input"]);
var Gb = /* @__PURE__ */ ge("<div><!></div>");
function jb(t, e) {
  we(e, !0);
  let n = m(e, "use", 19, () => []), i = m(e, "class", 3, ""), r = m(e, "variant", 3, "raised"), a = m(e, "padded", 3, !1), o = /* @__PURE__ */ Ve(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "variant",
    "padded",
    "children"
  ]), u;
  function l() {
    return u;
  }
  var c = { getElement: l }, d = Gb();
  He(d, (f) => ({ class: f, ...o }), [
    () => Ne({
      "mdc-card": !0,
      "mdc-card--outlined": r() === "outlined",
      "smui-card--padded": a(),
      [i()]: !0
    })
  ]);
  var h = _e(d);
  return Ie(h, () => e.children ?? me), Se(d, (f) => u = f, () => u), Ue(d, (f, v) => X == null ? void 0 : X(f, v), n), w(t, d), Re(c);
}
function xt(t) {
  return typeof t == "function";
}
function Wb(t) {
  return xt(t == null ? void 0 : t.lift);
}
function zn(t) {
  return function(e) {
    if (Wb(e))
      return e.lift(function(n) {
        try {
          return t(n, this);
        } catch (i) {
          this.error(i);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
var Gc = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function jc(t) {
  return xt(t == null ? void 0 : t.then);
}
function Wc(t) {
  var e = function(i) {
    Error.call(i), i.stack = new Error().stack;
  }, n = t(e);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var Yo = Wc(function(t) {
  return function(n) {
    t(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(i, r) {
      return r + 1 + ") " + i.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function iu(t, e) {
  if (t) {
    var n = t.indexOf(e);
    0 <= n && t.splice(n, 1);
  }
}
var zs = function() {
  function t(e) {
    this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return t.prototype.unsubscribe = function() {
    var e, n, i, r, a;
    if (!this.closed) {
      this.closed = !0;
      var o = this._parentage;
      if (o)
        if (this._parentage = null, Array.isArray(o))
          try {
            for (var u = Mt(o), l = u.next(); !l.done; l = u.next()) {
              var c = l.value;
              c.remove(this);
            }
          } catch (g) {
            e = { error: g };
          } finally {
            try {
              l && !l.done && (n = u.return) && n.call(u);
            } finally {
              if (e) throw e.error;
            }
          }
        else
          o.remove(this);
      var d = this.initialTeardown;
      if (xt(d))
        try {
          d();
        } catch (g) {
          a = g instanceof Yo ? g.errors : [g];
        }
      var h = this._finalizers;
      if (h) {
        this._finalizers = null;
        try {
          for (var f = Mt(h), v = f.next(); !v.done; v = f.next()) {
            var p = v.value;
            try {
              ru(p);
            } catch (g) {
              a = a ?? [], g instanceof Yo ? a = Ai(Ai([], Vr(a)), Vr(g.errors)) : a.push(g);
            }
          }
        } catch (g) {
          i = { error: g };
        } finally {
          try {
            v && !v.done && (r = f.return) && r.call(f);
          } finally {
            if (i) throw i.error;
          }
        }
      }
      if (a)
        throw new Yo(a);
    }
  }, t.prototype.add = function(e) {
    var n;
    if (e && e !== this)
      if (this.closed)
        ru(e);
      else {
        if (e instanceof t) {
          if (e.closed || e._hasParent(this))
            return;
          e._addParent(this);
        }
        (this._finalizers = (n = this._finalizers) !== null && n !== void 0 ? n : []).push(e);
      }
  }, t.prototype._hasParent = function(e) {
    var n = this._parentage;
    return n === e || Array.isArray(n) && n.includes(e);
  }, t.prototype._addParent = function(e) {
    var n = this._parentage;
    this._parentage = Array.isArray(n) ? (n.push(e), n) : n ? [n, e] : e;
  }, t.prototype._removeParent = function(e) {
    var n = this._parentage;
    n === e ? this._parentage = null : Array.isArray(n) && iu(n, e);
  }, t.prototype.remove = function(e) {
    var n = this._finalizers;
    n && iu(n, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = function() {
    var e = new t();
    return e.closed = !0, e;
  }(), t;
}();
zs.EMPTY;
function qc(t) {
  return t instanceof zs || t && "closed" in t && xt(t.remove) && xt(t.add) && xt(t.unsubscribe);
}
function ru(t) {
  xt(t) ? t() : t.unsubscribe();
}
var qb = {
  Promise: void 0
}, Kb = {
  setTimeout: function(t, e) {
    for (var n = [], i = 2; i < arguments.length; i++)
      n[i - 2] = arguments[i];
    return setTimeout.apply(void 0, Ai([t, e], Vr(n)));
  },
  clearTimeout: function(t) {
    return clearTimeout(t);
  },
  delegate: void 0
};
function Kc(t) {
  Kb.setTimeout(function() {
    throw t;
  });
}
function au() {
}
function zb(t) {
  t();
}
var Xs = function(t) {
  tt(e, t);
  function e(n) {
    var i = t.call(this) || this;
    return i.isStopped = !1, n ? (i.destination = n, qc(n) && n.add(i)) : i.destination = Zb, i;
  }
  return e.create = function(n, i, r) {
    return new ys(n, i, r);
  }, e.prototype.next = function(n) {
    this.isStopped || this._next(n);
  }, e.prototype.error = function(n) {
    this.isStopped || (this.isStopped = !0, this._error(n));
  }, e.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, e.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this), this.destination = null);
  }, e.prototype._next = function(n) {
    this.destination.next(n);
  }, e.prototype._error = function(n) {
    try {
      this.destination.error(n);
    } finally {
      this.unsubscribe();
    }
  }, e.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, e;
}(zs), Xb = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(e);
      } catch (i) {
        Ga(i);
      }
  }, t.prototype.error = function(e) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(e);
      } catch (i) {
        Ga(i);
      }
    else
      Ga(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (n) {
        Ga(n);
      }
  }, t;
}(), ys = function(t) {
  tt(e, t);
  function e(n, i, r) {
    var a = t.call(this) || this, o;
    return xt(n) || !n ? o = {
      next: n ?? void 0,
      error: i ?? void 0,
      complete: r ?? void 0
    } : o = n, a.destination = new Xb(o), a;
  }
  return e;
}(Xs);
function Ga(t) {
  Kc(t);
}
function Yb(t) {
  throw t;
}
var Zb = {
  closed: !0,
  next: au,
  error: Yb,
  complete: au
}, Ys = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function zc(t) {
  return t;
}
function Qb(t) {
  return t.length === 0 ? zc : t.length === 1 ? t[0] : function(n) {
    return t.reduce(function(i, r) {
      return r(i);
    }, n);
  };
}
var Nn = function() {
  function t(e) {
    e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var n = new t();
    return n.source = this, n.operator = e, n;
  }, t.prototype.subscribe = function(e, n, i) {
    var r = this, a = $b(e) ? e : new ys(e, n, i);
    return zb(function() {
      var o = r, u = o.operator, l = o.source;
      a.add(u ? u.call(a, l) : l ? r._subscribe(a) : r._trySubscribe(a));
    }), a;
  }, t.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (n) {
      e.error(n);
    }
  }, t.prototype.forEach = function(e, n) {
    var i = this;
    return n = ou(n), new n(function(r, a) {
      var o = new ys({
        next: function(u) {
          try {
            e(u);
          } catch (l) {
            a(l), o.unsubscribe();
          }
        },
        error: a,
        complete: r
      });
      i.subscribe(o);
    });
  }, t.prototype._subscribe = function(e) {
    var n;
    return (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(e);
  }, t.prototype[Ys] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    return Qb(e)(this);
  }, t.prototype.toPromise = function(e) {
    var n = this;
    return e = ou(e), new e(function(i, r) {
      var a;
      n.subscribe(function(o) {
        return a = o;
      }, function(o) {
        return r(o);
      }, function() {
        return i(a);
      });
    });
  }, t.create = function(e) {
    return new t(e);
  }, t;
}();
function ou(t) {
  var e;
  return (e = t ?? qb.Promise) !== null && e !== void 0 ? e : Promise;
}
function Jb(t) {
  return t && xt(t.next) && xt(t.error) && xt(t.complete);
}
function $b(t) {
  return t && t instanceof Xs || Jb(t) && qc(t);
}
function Xc(t) {
  return xt(t[Ys]);
}
function Yc(t) {
  return Symbol.asyncIterator && xt(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function Zc(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function eI() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var Qc = eI();
function Jc(t) {
  return xt(t == null ? void 0 : t[Qc]);
}
function $c(t) {
  return hh(this, arguments, function() {
    var n, i, r, a;
    return Bs(this, function(o) {
      switch (o.label) {
        case 0:
          n = t.getReader(), o.label = 1;
        case 1:
          o.trys.push([1, , 9, 10]), o.label = 2;
        case 2:
          return [4, Tr(n.read())];
        case 3:
          return i = o.sent(), r = i.value, a = i.done, a ? [4, Tr(void 0)] : [3, 5];
        case 4:
          return [2, o.sent()];
        case 5:
          return [4, Tr(r)];
        case 6:
          return [4, o.sent()];
        case 7:
          return o.sent(), [3, 2];
        case 8:
          return [3, 10];
        case 9:
          return n.releaseLock(), [7];
        case 10:
          return [2];
      }
    });
  });
}
function ed(t) {
  return xt(t == null ? void 0 : t.getReader);
}
function dr(t) {
  if (t instanceof Nn)
    return t;
  if (t != null) {
    if (Xc(t))
      return tI(t);
    if (Gc(t))
      return nI(t);
    if (jc(t))
      return iI(t);
    if (Yc(t))
      return td(t);
    if (Jc(t))
      return rI(t);
    if (ed(t))
      return aI(t);
  }
  throw Zc(t);
}
function tI(t) {
  return new Nn(function(e) {
    var n = t[Ys]();
    if (xt(n.subscribe))
      return n.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function nI(t) {
  return new Nn(function(e) {
    for (var n = 0; n < t.length && !e.closed; n++)
      e.next(t[n]);
    e.complete();
  });
}
function iI(t) {
  return new Nn(function(e) {
    t.then(function(n) {
      e.closed || (e.next(n), e.complete());
    }, function(n) {
      return e.error(n);
    }).then(null, Kc);
  });
}
function rI(t) {
  return new Nn(function(e) {
    var n, i;
    try {
      for (var r = Mt(t), a = r.next(); !a.done; a = r.next()) {
        var o = a.value;
        if (e.next(o), e.closed)
          return;
      }
    } catch (u) {
      n = { error: u };
    } finally {
      try {
        a && !a.done && (i = r.return) && i.call(r);
      } finally {
        if (n) throw n.error;
      }
    }
    e.complete();
  });
}
function td(t) {
  return new Nn(function(e) {
    oI(t, e).catch(function(n) {
      return e.error(n);
    });
  });
}
function aI(t) {
  return td($c(t));
}
function oI(t, e) {
  var n, i, r, a;
  return ac(this, void 0, void 0, function() {
    var o, u;
    return Bs(this, function(l) {
      switch (l.label) {
        case 0:
          l.trys.push([0, 5, 6, 11]), n = vh(t), l.label = 1;
        case 1:
          return [4, n.next()];
        case 2:
          if (i = l.sent(), !!i.done) return [3, 4];
          if (o = i.value, e.next(o), e.closed)
            return [2];
          l.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return u = l.sent(), r = { error: u }, [3, 11];
        case 6:
          return l.trys.push([6, , 9, 10]), i && !i.done && (a = n.return) ? [4, a.call(n)] : [3, 8];
        case 7:
          l.sent(), l.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (r) throw r.error;
          return [7];
        case 10:
          return [7];
        case 11:
          return e.complete(), [2];
      }
    });
  });
}
function Kn(t, e, n, i, r) {
  return new sI(t, e, n, i, r);
}
var sI = function(t) {
  tt(e, t);
  function e(n, i, r, a, o, u) {
    var l = t.call(this, n) || this;
    return l.onFinalize = o, l.shouldUnsubscribe = u, l._next = i ? function(c) {
      try {
        i(c);
      } catch (d) {
        n.error(d);
      }
    } : t.prototype._next, l._error = a ? function(c) {
      try {
        a(c);
      } catch (d) {
        n.error(d);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._error, l._complete = r ? function() {
      try {
        r();
      } catch (c) {
        n.error(c);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._complete, l;
  }
  return e.prototype.unsubscribe = function() {
    var n;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var i = this.closed;
      t.prototype.unsubscribe.call(this), !i && ((n = this.onFinalize) === null || n === void 0 || n.call(this));
    }
  }, e;
}(Xs);
function lI(t) {
  return t && xt(t.schedule);
}
function uI(t) {
  return t[t.length - 1];
}
function cI(t) {
  return lI(uI(t)) ? t.pop() : void 0;
}
function er(t, e, n, i, r) {
  i === void 0 && (i = 0), r === void 0 && (r = !1);
  var a = e.schedule(function() {
    n(), r ? t.add(this.schedule(null, i)) : this.unsubscribe();
  }, i);
  if (t.add(a), !r)
    return a;
}
function nd(t) {
  return zn(function(e, n) {
    var i = null, r = !1, a;
    i = e.subscribe(Kn(n, void 0, void 0, function(o) {
      a = dr(t(o, nd(t)(e))), i ? (i.unsubscribe(), i = null, a.subscribe(n)) : r = !0;
    })), r && (i.unsubscribe(), i = null, a.subscribe(n));
  });
}
function id(t, e) {
  return e === void 0 && (e = 0), zn(function(n, i) {
    n.subscribe(Kn(i, function(r) {
      return er(i, t, function() {
        return i.next(r);
      }, e);
    }, function() {
      return er(i, t, function() {
        return i.complete();
      }, e);
    }, function(r) {
      return er(i, t, function() {
        return i.error(r);
      }, e);
    }));
  });
}
function rd(t, e) {
  return e === void 0 && (e = 0), zn(function(n, i) {
    i.add(t.schedule(function() {
      return n.subscribe(i);
    }, e));
  });
}
function dI(t, e) {
  return dr(t).pipe(rd(e), id(e));
}
function fI(t, e) {
  return dr(t).pipe(rd(e), id(e));
}
function hI(t, e) {
  return new Nn(function(n) {
    var i = 0;
    return e.schedule(function() {
      i === t.length ? n.complete() : (n.next(t[i++]), n.closed || this.schedule());
    });
  });
}
function vI(t, e) {
  return new Nn(function(n) {
    var i;
    return er(n, e, function() {
      i = t[Qc](), er(n, e, function() {
        var r, a, o;
        try {
          r = i.next(), a = r.value, o = r.done;
        } catch (u) {
          n.error(u);
          return;
        }
        o ? n.complete() : n.next(a);
      }, 0, !0);
    }), function() {
      return xt(i == null ? void 0 : i.return) && i.return();
    };
  });
}
function ad(t, e) {
  if (!t)
    throw new Error("Iterable cannot be null");
  return new Nn(function(n) {
    er(n, e, function() {
      var i = t[Symbol.asyncIterator]();
      er(n, e, function() {
        i.next().then(function(r) {
          r.done ? n.complete() : n.next(r.value);
        });
      }, 0, !0);
    });
  });
}
function mI(t, e) {
  return ad($c(t), e);
}
function pI(t, e) {
  if (t != null) {
    if (Xc(t))
      return dI(t, e);
    if (Gc(t))
      return hI(t, e);
    if (jc(t))
      return fI(t, e);
    if (Yc(t))
      return ad(t, e);
    if (Jc(t))
      return vI(t, e);
    if (ed(t))
      return mI(t, e);
  }
  throw Zc(t);
}
function od(t, e) {
  return e ? pI(t, e) : dr(t);
}
function ai(t, e) {
  return zn(function(n, i) {
    var r = 0;
    n.subscribe(Kn(i, function(a) {
      i.next(t.call(e, a, r++));
    }));
  });
}
function gI(t, e, n, i, r, a, o, u) {
  var l = [], c = 0, d = 0, h = !1, f = function() {
    h && !l.length && !c && e.complete();
  }, v = function(g) {
    return c < i ? p(g) : l.push(g);
  }, p = function(g) {
    c++;
    var _ = !1;
    dr(n(g, d++)).subscribe(Kn(e, function(C) {
      e.next(C);
    }, function() {
      _ = !0;
    }, void 0, function() {
      if (_)
        try {
          c--;
          for (var C = function() {
            var x = l.shift();
            o || p(x);
          }; l.length && c < i; )
            C();
          f();
        } catch (x) {
          e.error(x);
        }
    }));
  };
  return t.subscribe(Kn(e, v, function() {
    h = !0, f();
  })), function() {
  };
}
function _s(t, e, n) {
  return n === void 0 && (n = 1 / 0), xt(e) ? _s(function(i, r) {
    return ai(function(a, o) {
      return e(i, a, r, o);
    })(dr(t(i, r)));
  }, n) : (typeof e == "number" && (n = e), zn(function(i, r) {
    return gI(i, r, t, n);
  }));
}
function bI(t, e) {
  return xt(e) ? _s(t, e, 1) : _s(t, 1);
}
var II = new Nn(function(t) {
  return t.complete();
});
function la(t) {
  return t <= 0 ? function() {
    return II;
  } : zn(function(e, n) {
    var i = 0;
    e.subscribe(Kn(n, function(r) {
      ++i <= t && (n.next(r), t <= i && n.complete());
    }));
  });
}
function sd() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = cI(t);
  return od(t, n);
}
function su(t, e) {
  return zn(function(n, i) {
    var r = 0;
    n.subscribe(Kn(i, function(a) {
      return t.call(e, a, r++) && i.next(a);
    }));
  });
}
function lu(t) {
  return zn(function(e, n) {
    try {
      e.subscribe(n);
    } finally {
      n.add(t);
    }
  });
}
function yI(t, e) {
  return zn(function(n, i) {
    var r = null, a = 0, o = !1, u = function() {
      return o && !r && i.complete();
    };
    n.subscribe(Kn(i, function(l) {
      r == null || r.unsubscribe();
      var c = 0, d = a++;
      dr(t(l, d)).subscribe(r = Kn(i, function(h) {
        return i.next(e ? e(l, h, d, c++) : h);
      }, function() {
        r = null, u();
      }));
    }, function() {
      o = !0, u();
    }));
  });
}
function ua(t, e, n) {
  var i = xt(t) || e || n ? { next: t, error: e, complete: n } : t;
  return i ? zn(function(r, a) {
    var o;
    (o = i.subscribe) === null || o === void 0 || o.call(i);
    var u = !0;
    r.subscribe(Kn(a, function(l) {
      var c;
      (c = i.next) === null || c === void 0 || c.call(i, l), a.next(l);
    }, function() {
      var l;
      u = !1, (l = i.complete) === null || l === void 0 || l.call(i), a.complete();
    }, function(l) {
      var c;
      u = !1, (c = i.error) === null || c === void 0 || c.call(i, l), a.error(l);
    }, function() {
      var l, c;
      u && ((l = i.unsubscribe) === null || l === void 0 || l.call(i)), (c = i.finalize) === null || c === void 0 || c.call(i);
    }));
  }) : zc;
}
class _I {
  constructor(e, n, i, r, a, o, u, l, c) {
    this._uuid = e, this._filename = n, this._author = i, this._type = r, this._date = a, this._version = o, this._comment = u, this._archived = l, this._available = c;
  }
  get uuid() {
    return this._uuid;
  }
  get filename() {
    return this._filename;
  }
  get author() {
    return this._author;
  }
  get type() {
    return this._type;
  }
  get date() {
    return this._date;
  }
  get version() {
    return this._version;
  }
  get comment() {
    return this._comment;
  }
  get archived() {
    return this._archived;
  }
  get available() {
    return this._available;
  }
}
function ld(t) {
  switch (t.responseType) {
    case "json": {
      if ("response" in t)
        return t.response;
      var e = t;
      return JSON.parse(e.responseText);
    }
    case "document":
      return t.responseXML;
    case "text":
    default: {
      if ("response" in t)
        return t.response;
      var e = t;
      return e.responseText;
    }
  }
}
var EI = /* @__PURE__ */ function() {
  function t(e, n, i, r) {
    r === void 0 && (r = "download_load"), this.originalEvent = e, this.xhr = n, this.request = i, this.type = r;
    var a = n.status, o = n.responseType;
    this.status = a ?? 0, this.responseType = o ?? "";
    var u = n.getAllResponseHeaders();
    this.responseHeaders = u ? u.split(`
`).reduce(function(d, h) {
      var f = h.indexOf(": ");
      return d[h.slice(0, f)] = h.slice(f + 2), d;
    }, {}) : {}, this.response = ld(n);
    var l = e.loaded, c = e.total;
    this.loaded = l, this.total = c;
  }
  return t;
}(), lo = Wc(function(t) {
  return function(n, i, r) {
    this.message = n, this.name = "AjaxError", this.xhr = i, this.request = r, this.status = i.status, this.responseType = i.responseType;
    var a;
    try {
      a = ld(i);
    } catch {
      a = i.responseText;
    }
    this.response = a;
  };
}), CI = function() {
  function t(e, n) {
    return lo.call(this, "ajax timeout", e, n), this.name = "AjaxTimeoutError", this;
  }
  return t.prototype = Object.create(lo.prototype), t;
}();
function AI(t, e) {
  return fr({ method: "GET", url: t, headers: e });
}
function SI(t, e, n) {
  return fr({ method: "POST", url: t, body: e, headers: n });
}
function xI(t, e) {
  return fr({ method: "DELETE", url: t, headers: e });
}
function TI(t, e, n) {
  return fr({ method: "PUT", url: t, body: e, headers: n });
}
function LI(t, e, n) {
  return fr({ method: "PATCH", url: t, body: e, headers: n });
}
var OI = ai(function(t) {
  return t.response;
});
function wI(t, e) {
  return OI(fr({
    method: "GET",
    url: t,
    headers: e
  }));
}
var fr = function() {
  var t = function(e) {
    var n = typeof e == "string" ? {
      url: e
    } : e;
    return MI(n);
  };
  return t.get = AI, t.post = SI, t.delete = xI, t.put = TI, t.patch = LI, t.getJSON = wI, t;
}(), RI = "upload", uu = "download", Zo = "loadstart", Qo = "progress", cu = "load";
function MI(t) {
  return new Nn(function(e) {
    var n, i, r = fe({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, t), a = r.queryParams, o = r.body, u = r.headers, l = r.url;
    if (!l)
      throw new TypeError("url is required");
    if (a) {
      var c;
      if (l.includes("?")) {
        var d = l.split("?");
        if (2 < d.length)
          throw new TypeError("invalid url");
        c = new URLSearchParams(d[1]), new URLSearchParams(a).forEach(function(M, z) {
          return c.set(z, M);
        }), l = d[0] + "?" + c;
      } else
        c = new URLSearchParams(a), l = l + "?" + c;
    }
    var h = {};
    if (u)
      for (var f in u)
        u.hasOwnProperty(f) && (h[f.toLowerCase()] = u[f]);
    var v = r.crossDomain;
    !v && !("x-requested-with" in h) && (h["x-requested-with"] = "XMLHttpRequest");
    var p = r.withCredentials, g = r.xsrfCookieName, _ = r.xsrfHeaderName;
    if ((p || !v) && g && _) {
      var C = (i = (n = document == null ? void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + g + ")=([^;]*)"))) === null || n === void 0 ? void 0 : n.pop()) !== null && i !== void 0 ? i : "";
      C && (h[_] = C);
    }
    var x = DI(o, h), S = fe(fe({}, r), {
      url: l,
      headers: h,
      body: x
    }), b;
    b = t.createXHR ? t.createXHR() : new XMLHttpRequest();
    {
      var E = t.progressSubscriber, y = t.includeDownloadProgress, T = y === void 0 ? !1 : y, A = t.includeUploadProgress, O = A === void 0 ? !1 : A, B = function(M, z) {
        b.addEventListener(M, function() {
          var re, U = z();
          (re = E == null ? void 0 : E.error) === null || re === void 0 || re.call(E, U), e.error(U);
        });
      };
      B("timeout", function() {
        return new CI(b, S);
      }), B("abort", function() {
        return new lo("aborted", b, S);
      });
      var Z = function(M, z) {
        return new EI(z, b, S, M + "_" + z.type);
      }, G = function(M, z, re) {
        M.addEventListener(z, function(U) {
          e.next(Z(re, U));
        });
      };
      O && [Zo, Qo, cu].forEach(function(M) {
        return G(b.upload, M, RI);
      }), E && [Zo, Qo].forEach(function(M) {
        return b.upload.addEventListener(M, function(z) {
          var re;
          return (re = E == null ? void 0 : E.next) === null || re === void 0 ? void 0 : re.call(E, z);
        });
      }), T && [Zo, Qo].forEach(function(M) {
        return G(b, M, uu);
      });
      var j = function(M) {
        var z = "ajax error" + (M ? " " + M : "");
        e.error(new lo(z, b, S));
      };
      b.addEventListener("error", function(M) {
        var z;
        (z = E == null ? void 0 : E.error) === null || z === void 0 || z.call(E, M), j();
      }), b.addEventListener(cu, function(M) {
        var z, re, U = b.status;
        if (U < 400) {
          (z = E == null ? void 0 : E.complete) === null || z === void 0 || z.call(E);
          var I = void 0;
          try {
            I = Z(uu, M);
          } catch (L) {
            e.error(L);
            return;
          }
          e.next(I), e.complete();
        } else
          (re = E == null ? void 0 : E.error) === null || re === void 0 || re.call(E, M), j(U);
      });
    }
    var K = S.user, k = S.method, P = S.async;
    K ? b.open(k, l, P, K, S.password) : b.open(k, l, P), P && (b.timeout = S.timeout, b.responseType = S.responseType), "withCredentials" in b && (b.withCredentials = S.withCredentials);
    for (var f in h)
      h.hasOwnProperty(f) && b.setRequestHeader(f, h[f]);
    return x ? b.send(x) : b.send(), function() {
      b && b.readyState !== 4 && b.abort();
    };
  });
}
function DI(t, e) {
  var n;
  if (!t || typeof t == "string" || BI(t) || kI(t) || NI(t) || FI(t) || HI(t) || VI(t))
    return t;
  if (UI(t))
    return t.buffer;
  if (typeof t == "object")
    return e["content-type"] = (n = e["content-type"]) !== null && n !== void 0 ? n : "application/json;charset=utf-8", JSON.stringify(t);
  throw new TypeError("Unknown body type");
}
var PI = Object.prototype.toString;
function Zs(t, e) {
  return PI.call(t) === "[object " + e + "]";
}
function NI(t) {
  return Zs(t, "ArrayBuffer");
}
function FI(t) {
  return Zs(t, "File");
}
function HI(t) {
  return Zs(t, "Blob");
}
function UI(t) {
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView(t);
}
function BI(t) {
  return typeof FormData < "u" && t instanceof FormData;
}
function kI(t) {
  return typeof URLSearchParams < "u" && t instanceof URLSearchParams;
}
function VI(t) {
  return typeof ReadableStream < "u" && t instanceof ReadableStream;
}
class GI {
  constructor(e, n, i) {
    this.url = e, this.variableConfiguration = n, this.description = i;
  }
  /**
   * Sets the value of the variables of this server.
   *
   * @param variableConfiguration a partial variable configuration for the variables contained in the url
   */
  setVariables(e) {
    Object.assign(this.variableConfiguration, e);
  }
  getConfiguration() {
    return this.variableConfiguration;
  }
  getDescription() {
    return this.description;
  }
  /**
   * Constructions the URL this server using the url with variables
   * replaced with their respective values
   */
  getUrl() {
    let e = this.url;
    for (const n in this.variableConfiguration)
      if (this.variableConfiguration.hasOwnProperty(n)) {
        const i = new RegExp("{" + n + "}", "g");
        e = e.replace(i, this.variableConfiguration[n]);
      }
    return e;
  }
}
const jI = new GI("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), WI = [jI], qI = WI[0].getUrl();
class ud {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? qI;
  }
  get middleware() {
    return this.configuration.middleware ?? [];
  }
  get username() {
    return this.configuration.username;
  }
  get password() {
    return this.configuration.password;
  }
  get apiKey() {
    const { apiKey: e } = this.configuration;
    return e ? typeof e == "string" ? () => e : e : void 0;
  }
  get accessToken() {
    const { accessToken: e } = this.configuration;
    return e ? typeof e == "string" ? () => e : e : void 0;
  }
}
class KI {
  constructor(e = new ud()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (n) => {
      const i = this.clone();
      return i.middleware = i.middleware.concat(n), i;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((i) => ({ pre: i }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((i) => ({ post: i }))), this.createRequestArgs = ({ url: n, query: i, method: r, headers: a, body: o, responseType: u }) => ({
      url: `${this.configuration.basePath}${n}${i && Object.keys(i).length ? `?${zI(i)}` : ""}`,
      method: r,
      headers: a,
      body: o instanceof FormData ? o : JSON.stringify(o),
      responseType: u ?? "json"
    }), this.rxjsRequest = (n) => sd(n).pipe(
      ai((i) => (this.middleware.filter((r) => r.pre).forEach((r) => i = r.pre(i)), i)),
      bI(
        (i) => fr(i).pipe(
          ai((r) => (this.middleware.filter((a) => a.post).forEach((a) => r = a.post(r)), r))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, n) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      ai((i) => {
        const { status: r, response: a } = i;
        if (r >= 200 && r < 300)
          return (n == null ? void 0 : n.response) === "raw" ? i : a;
        throw i;
      })
    );
  }
}
const qi = (t) => encodeURIComponent(`${t}`), zI = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((i) => `${qi(e)}=${qi(i)}`).join("&") : `${qi(e)}=${qi(n)}`
).join("&"), ja = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class XI extends KI {
  retrieveDataResourceByVersion({ id: e, version: n }, i) {
    ja(e, "id", "retrieveDataResourceByVersion"), ja(n, "version", "retrieveDataResourceByVersion");
    const r = {};
    return this.request({
      url: "/api/scl/{id}/version/{version}".replace("{id}", qi(e)).replace("{version}", qi(n)),
      method: "GET",
      headers: r,
      responseType: "blob"
    }, i == null ? void 0 : i.responseOpts);
  }
  retrieveDataResourceHistory({ id: e }, n) {
    ja(e, "id", "retrieveDataResourceHistory");
    const i = {};
    return this.request({
      url: "/api/scl/{id}/versions".replace("{id}", qi(e)),
      method: "GET",
      headers: i
    }, n == null ? void 0 : n.responseOpts);
  }
  searchForResources({ dataResourceSearch: e }, n) {
    ja(e, "dataResourceSearch", "searchForResources");
    const i = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/scl/search",
      method: "POST",
      headers: i,
      body: e
    }, n == null ? void 0 : n.responseOpts);
  }
}
class Sr {
  constructor() {
    this.endpoint = "/compas-scl-data-service";
  }
  static getInstance() {
    return Sr.instance || (Sr.instance = new Sr()), Sr.instance;
  }
  searchFiles(e) {
    return this.generateApiClient(this.endpoint).searchForResources({
      dataResourceSearch: this.mapToDataResourceSearch(e)
    }).pipe(
      su((i) => !!i || !!i.results),
      ai((i) => i.results),
      ai(
        (i) => i.map((r) => this.mapToFileSearchResult(r))
      )
    );
  }
  getHistoryFiles(e) {
    return this.generateApiClient(this.endpoint).retrieveDataResourceHistory({
      id: e
    }).pipe(
      su((i) => !!i || !!i.versions),
      ai((i) => i.versions),
      ai(
        (i) => i.map((r) => this.mapToFileSearchResult(r))
      )
    );
  }
  downloadSclData(e, n, i) {
    return this.generateApiClient(this.endpoint).retrieveDataResourceByVersion({
      id: e,
      version: i
    });
  }
  mapToFileSearchResult(e) {
    return console.log("data", e), new _I(
      e.uuid,
      e.name,
      e.author,
      e.type,
      new Date(e.changedAt),
      e.version,
      e.comment,
      e.archived,
      e.available
    );
  }
  mapToDataResourceSearch(e) {
    return {
      uuid: e.uuid || null,
      type: e.type || null,
      name: e.filename || null,
      author: e.author || null,
      from: e.from || null,
      to: e.to || null
    };
  }
  generateApiClient(e) {
    const n = new ud({
      basePath: e
      // accessToken: authInfo.token,
    });
    return new XI(n);
  }
}
var bi;
class du {
  constructor() {
    $e(this, bi, bt([]));
  }
  get store() {
    return ie(this, bi);
  }
  updateData(e) {
    ie(this, bi).set(e);
  }
  addData(e) {
    ie(this, bi).update((n) => [...n, e]);
  }
  removeData(e) {
    ie(this, bi).update((n) => n.filter((i) => i.uuid !== e));
  }
  getData(e) {
    return ic(ie(this, bi)).find((n) => n.uuid === e);
  }
}
bi = new WeakMap();
jv({ en: hm, de: tm });
var YI = /* @__PURE__ */ ge("<h3> </h3>"), ZI = /* @__PURE__ */ ge("<div><!></div>"), QI = /* @__PURE__ */ ge("<!> <!>", 1), JI = /* @__PURE__ */ ge("<div><!></div>"), $I = /* @__PURE__ */ ge("<!> <!>", 1), ey = /* @__PURE__ */ ge('<h3 style="margin-bottom: 1rem;"> </h3> <!>', 1), ty = /* @__PURE__ */ ge('<div class="version-editor-container svelte-vqh57v"><!> <div class="search-filter svelte-vqh57v"><!></div> <div class="table-container svelte-vqh57v"><!></div></div>');
function ny(t, e) {
  we(e, !0);
  const n = () => Rt(Gv, "$_", i), [i, r] = gn(), a = Sr.getInstance();
  let o = /* @__PURE__ */ xe(void 0), u = m(e, "dataStore", 19, () => new du()), l = m(e, "historyStore", 19, () => new du()), c = /* @__PURE__ */ xe(!0), d = /* @__PURE__ */ xe(!1), h = /* @__PURE__ */ xe(!0);
  st(() => {
    setTimeout(
      () => {
        ae(h, !1);
      },
      1e3
    );
  });
  function f(K) {
    return new Date(K).toLocaleDateString();
  }
  const v = {
    headerName: "",
    field: "actions",
    numeric: !1,
    filter: !1,
    filterType: "text",
    minWidth: "100px",
    sortable: !1
  };
  let p = /* @__PURE__ */ ve(() => [
    {
      headerName: n()("uuid"),
      field: "uuid",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !1
    },
    {
      headerName: n()("filename"),
      field: "filename",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: n()("type"),
      field: "type",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: n()("author"),
      field: "author",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: n()("date"),
      field: "date",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0,
      valueFormatter: f
    },
    {
      headerName: n()("version"),
      field: "version",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    v
  ]), g = /* @__PURE__ */ ve(() => [
    ...s(p),
    {
      headerName: "Comment",
      field: "comment",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    }
  ]);
  const _ = [
    {
      icon: "edit",
      callback: (K) => O(K),
      disabled: (K) => !K.available
    },
    {
      icon: "find-in-page",
      callback: (K) => T(K),
      disabled: () => !1
    },
    {
      icon: "download",
      callback: (K) => b(K),
      disabled: (K) => !K.available
    }
  ], C = [
    {
      icon: "download",
      callback: (K) => b(K),
      disabled: (K) => !K.available
    }
  ], x = [
    {
      id: 1,
      label: "Filename",
      inputType: { id: 1, type: "string", validatorFn: () => !0, options: [] },
      allowedOperations: ["="]
    },
    {
      id: 2,
      label: "UUID",
      inputType: { id: 1, type: "string", validatorFn: () => !0, options: [] },
      allowedOperations: ["="]
    },
    {
      id: 3,
      label: "Type",
      inputType: {
        id: 2,
        type: "select",
        validatorFn: () => !0,
        options: [
          { value: "SSD", label: "SSD" },
          { value: "IID", label: "IID" },
          { value: "ICD", label: "ICD" },
          { value: "SCD", label: "SCD" },
          { value: "CID", label: "CID" },
          { value: "SED", label: "SED" },
          { value: "ISD", label: "ISD" },
          { value: "STD", label: "STD" }
        ]
      },
      allowedOperations: ["="]
    },
    {
      id: 4,
      label: "Author",
      inputType: { id: 1, type: "string", validatorFn: () => !0, options: [] },
      allowedOperations: ["="]
    },
    {
      id: 5,
      label: "From",
      inputType: {
        id: 3,
        type: "timepicker",
        validatorFn: () => !0,
        options: []
      },
      allowedOperations: ["="]
    },
    {
      id: 5,
      label: "To",
      inputType: {
        id: 3,
        type: "timepicker",
        validatorFn: () => !0,
        options: []
      },
      allowedOperations: ["="]
    }
  ];
  let S = /* @__PURE__ */ xe(Ee([]));
  function b(K) {
    console.log("Download file: ", K), a.downloadSclData(K.uuid, K.type, K.version).pipe(la(1), ua((k) => {
      const P = window.URL.createObjectURL(k), M = document.createElement("a");
      M.href = P, M.download = K.filename, M.style.display = "none", document.body.appendChild(M), M.click(), document.body.removeChild(M), window.URL.revokeObjectURL(P);
    })).subscribe();
  }
  function E() {
    const K = y(s(S));
    console.log("Search with params: ", K), ae(c, !1), a.searchFiles(K).pipe(
      la(1),
      ua((k) => {
        [...k], u().updateData(k);
      }),
      lu(() => {
        ae(c, !0);
      })
    ).subscribe();
  }
  function y(K) {
    const k = {
      uuid: null,
      filename: null,
      author: null,
      type: null,
      name: null,
      from: null,
      to: null
    };
    return console.log("Convert filter to search params: ", K), K.filter((P) => !P.disabled).forEach((P) => {
      console.log("KEY:", P.key), P.key === "from" || P.key === "to" ? k[P.key] = new Date(P.value).toISOString() : k[P.key] = P.value;
    }), k;
  }
  function T(K) {
    ae(o, K, !0), a.getHistoryFiles(K.uuid).pipe(la(1), ua((k) => {
      ae(d, !0), [...k], l().updateData(k);
    })).subscribe();
  }
  function A(K) {
    console.log("Dialog closed with result: ", K), ae(d, !1);
  }
  function O(K) {
    if (!confirm(`Open the selected file?

 Please make sure you save all changes on your current project.`))
      return;
    let k = "";
    a.downloadSclData(K.uuid, K.type, K.version).pipe(
      la(1),
      ua((P) => {
        k = window.URL.createObjectURL(P);
      }),
      yI(() => od(fetch(k).then((P) => {
        if (P.status === 200)
          return P.text();
        throw new Error(`Failed to load ${K.filename}: ${P.status} ${P.statusText}`);
      }))),
      la(1),
      nd((P) => (alert(P), console.error(P), sd(void 0))),
      ua((P) => {
        var re;
        if (!P)
          return;
        const M = K.filename, z = new DOMParser().parseFromString(P, "application/xml");
        (re = window.document.getElementsByTagName("open-scd")[0]) == null || re.dispatchEvent(new CustomEvent("open-doc", {
          bubbles: !0,
          composed: !0,
          detail: { localFile: !1, doc: z, docName: M }
        }));
      }),
      lu(() => k && window.URL.revokeObjectURL(k))
    ).subscribe();
  }
  var B = le(), Z = J(B);
  {
    var G = (K) => {
      {
        let k = /* @__PURE__ */ ve(() => !s(h));
        ub(K, {
          get loadingDone() {
            return s(k);
          }
        });
      }
    }, j = (K) => {
      var k = ty(), P = _e(k);
      lg(P, {
        onClose: A,
        get open() {
          return s(d);
        },
        set open(R) {
          ae(d, R, !0);
        },
        title: (R) => {
          var W = YI(), ce = _e(W);
          Be((V) => ft(ce, V), [
            () => {
              var V;
              return n()("versionHistory.title", { values: { filename: (V = s(o)) == null ? void 0 : V.filename } });
            }
          ]), w(R, W);
        },
        content: (R) => {
          var W = ZI(), ce = _e(W);
          {
            let V = /* @__PURE__ */ ve(() => n()("search"));
            nu(ce, {
              get columnDefs() {
                return s(g);
              },
              get store() {
                return l();
              },
              get loadingDone() {
                return s(c);
              },
              get rowActions() {
                return C;
              },
              get searchInputLabel() {
                return s(V);
              }
            });
          }
          w(R, W);
        },
        actions: (R) => {
          var W = JI(), ce = _e(W);
          ao(ce, {
            callback: A,
            variant: "raised",
            children: (V, oe) => {
              var Q = QI(), de = J(Q);
              Ks(de, {});
              var ne = ye(de, 2);
              Pl(ne, {
                children: (qe, je) => {
                  var De = Bt();
                  Be((Le) => ft(De, Le), [() => n()("done")]), w(qe, De);
                },
                $$slots: { default: !0 }
              }), w(V, Q);
            },
            $$slots: { default: !0 }
          }), w(R, W);
        },
        $$slots: { title: !0, content: !0, actions: !0 }
      });
      var M = ye(P, 2);
      {
        const I = (L) => {
          ao(L, {
            variant: "raised",
            callback: E,
            children: ($, R) => {
              var W = $I(), ce = J(W);
              zg(ce, {});
              var V = ye(ce, 2);
              Pl(V, {
                children: (oe, Q) => {
                  var de = Bt();
                  Be((ne) => ft(de, ne), [() => n()("search")]), w(oe, de);
                },
                $$slots: { default: !0 }
              }), w($, W);
            },
            $$slots: { default: !0 }
          });
        };
        var z = _e(M);
        {
          let L = /* @__PURE__ */ ve(() => n()("add_filter")), $ = /* @__PURE__ */ ve(() => n()("filter_types"));
          ob(z, {
            get filterControls() {
              return I;
            },
            get filterTypes() {
              return x;
            },
            get addFilterLabel() {
              return s(L);
            },
            get selectFilterLabel() {
              return s($);
            },
            get activeFilters() {
              return s(S);
            },
            set activeFilters(R) {
              ae(S, R, !0);
            }
          });
        }
      }
      var re = ye(M, 2), U = _e(re);
      jb(U, {
        style: "padding: 1rem; width: 100%; height: 100%;",
        children: (I, L) => {
          var $ = ey(), R = J($), W = _e(R), ce = ye(R, 2);
          {
            let V = /* @__PURE__ */ ve(() => n()("search"));
            nu(ce, {
              get columnDefs() {
                return s(p);
              },
              get store() {
                return u();
              },
              get loadingDone() {
                return s(c);
              },
              get rowActions() {
                return _;
              },
              get searchInputLabel() {
                return s(V);
              }
            });
          }
          Be((V) => ft(W, V), [() => n()("versionTable.heading")]), w(I, $);
        },
        $$slots: { default: !0 }
      }), w(K, k);
    };
    he(Z, (K) => {
      s(h) ? K(G) : K(j, !1);
    });
  }
  w(t, B), Re(), r();
}
const cd = "version-editor", dd = "0.0.1";
var iy = /* @__PURE__ */ ge('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function ry(t, e) {
  we(e, !0);
  let n = m(e, "dev", 3, !1);
  var i = iy(), r = J(i);
  {
    var a = (l) => {
      ny(l, {});
    };
    he(r, (l) => {
      (e.doc || n()) && l(a);
    });
  }
  var o = ye(r, 2), u = ye(o, 2);
  Be(() => {
    hl(o, cd), hl(u, dd);
  }), w(t, i), Re();
}
var Pr;
class uy extends HTMLElement {
  constructor() {
    super();
    $e(this, Pr);
    Fe(this, Pr, /* @__PURE__ */ xe(Ee({ doc: void 0, editCount: void 0 })));
  }
  get props() {
    return s(ie(this, Pr));
  }
  set props(n) {
    ae(ie(this, Pr), n, !0);
  }
  connectedCallback() {
    var i;
    this.attachShadow({ mode: "open" }), this.props.doc = this._doc, this.props.editCount = this.editCount, Mf(ry, { target: this.shadowRoot, props: this.props });
    const n = ay();
    (i = this.shadowRoot) == null || i.appendChild(n);
  }
  set doc(n) {
    this._doc = n, this.props.doc = n;
  }
  set editCount(n) {
    this.props.editCount = n;
  }
}
Pr = new WeakMap();
function ay() {
  const t = `${cd}-v${dd}-style`, e = oy(), n = document.createElement("link");
  return n.rel = "stylesheet", n.type = "text/css", n.href = e, n.id = t, n;
}
function oy() {
  const t = new URL(import.meta.url), e = t.origin, n = t.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, n, "style.css"].filter(Boolean).join("/");
}
export {
  uy as default
};
