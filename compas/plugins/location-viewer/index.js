var xd = Object.defineProperty;
var ol = (t) => {
  throw TypeError(t);
};
var Td = (t, e, n) => e in t ? xd(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var ct = (t, e, n) => Td(t, typeof e != "symbol" ? e + "" : e, n), Vo = (t, e, n) => e.has(t) || ol("Cannot " + n);
var ne = (t, e, n) => (Vo(t, e, "read from private field"), n ? n.call(t) : e.get(t)), tt = (t, e, n) => e.has(t) ? ol("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), He = (t, e, n, r) => (Vo(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), qt = (t, e, n) => (Vo(t, e, "access private method"), n);
const Ht = Symbol(), wd = "http://www.w3.org/1999/xhtml", Ld = "http://www.w3.org/2000/svg", Od = "@attach", gu = !1;
var To = Array.isArray, Rd = Array.prototype.indexOf, Ms = Array.from, oo = Object.defineProperty, Rr = Object.getOwnPropertyDescriptor, pu = Object.getOwnPropertyDescriptors, Md = Object.prototype, Dd = Array.prototype, Ds = Object.getPrototypeOf, sl = Object.isExtensible;
function wi(t) {
  return typeof t == "function";
}
const pe = () => {
};
function Pd(t) {
  return t();
}
function so(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function bu() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
const rn = 2, Ps = 4, wo = 8, Nr = 16, br = 32, vi = 64, Ns = 128, xn = 256, lo = 512, Kt = 1024, yn = 2048, Hr = 4096, kn = 8192, mi = 16384, Lo = 32768, Ur = 65536, ll = 1 << 17, Nd = 1 << 18, Zi = 1 << 19, _u = 1 << 20, os = 1 << 21, Oo = 1 << 22, oi = 1 << 23, Kn = Symbol("$state"), yu = Symbol("legacy props"), Hd = Symbol(""), Li = new class extends Error {
  constructor() {
    super(...arguments);
    ct(this, "name", "StaleReactionError");
    ct(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Hs(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Ud() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function kd(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Bd() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Fd(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Vd() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Gd(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function jd() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Wd() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function qd() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function zd() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Xd() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Kd() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let Yd = !1;
function Iu(t) {
  return t === this.v;
}
function Us(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Eu(t) {
  return !Us(t, this.v);
}
let Qi = !1, Zd = !1;
function Qd() {
  Qi = !0;
}
let lt = null;
function Vi(t) {
  lt = t;
}
function he(t) {
  return (
    /** @type {T} */
    Su().get(t)
  );
}
function ae(t, e) {
  return Su().set(t, e), e;
}
function xe(t, e = !1, n) {
  lt = {
    p: lt,
    c: null,
    e: null,
    s: t,
    x: null,
    l: Qi && !e ? { s: null, u: null, $: [] } : null
  };
}
function Te(t) {
  var e = (
    /** @type {ComponentContext} */
    lt
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      Fu(r);
  }
  return t !== void 0 && (e.x = t), lt = e.p, t ?? /** @type {T} */
  {};
}
function Ra() {
  return !Qi || lt !== null && lt.l === null;
}
function Su(t) {
  return lt === null && Hs(), lt.c ?? (lt.c = new Map(Jd(lt) || void 0));
}
function Jd(t) {
  let e = t.p;
  for (; e !== null; ) {
    const n = e.c;
    if (n !== null)
      return n;
    e = e.p;
  }
  return null;
}
let ei = [];
function Au() {
  var t = ei;
  ei = [], so(t);
}
function mr(t) {
  if (ei.length === 0 && !_a) {
    var e = ei;
    queueMicrotask(() => {
      e === ei && Au();
    });
  }
  ei.push(t);
}
function $d() {
  for (; ei.length > 0; )
    Au();
}
const ef = /* @__PURE__ */ new WeakMap();
function Cu(t) {
  var e = Ge;
  if (e === null)
    return Ve.f |= oi, t;
  if (e.f & Lo)
    Gi(t, e);
  else {
    if (!(e.f & Ns))
      throw !e.parent && t instanceof Error && xu(t), t;
    e.b.error(t);
  }
}
function Gi(t, e) {
  for (; e !== null; ) {
    if (e.f & Ns)
      try {
        e.b.error(t);
        return;
      } catch (n) {
        t = n;
      }
    e = e.parent;
  }
  throw t instanceof Error && xu(t), t;
}
function xu(t) {
  const e = ef.get(t);
  e && (oo(t, "message", {
    value: e.message
  }), oo(t, "stack", {
    value: e.stack
  }));
}
const Va = /* @__PURE__ */ new Set();
let ot = null, $a = null, Gt = null, ss = /* @__PURE__ */ new Set(), Xn = [], Ro = null, ls = !1, _a = !1;
var Ni, Hi, ti, wa, Ui, ki, ni, Bi, La, Oa, Tn, us, eo, cs;
const Ao = class Ao {
  constructor() {
    tt(this, Tn);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    ct(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    tt(this, Ni, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    tt(this, Hi, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    tt(this, ti, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    tt(this, wa, null);
    /**
     * Async effects inside a newly-created `<svelte:boundary>`
     * — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    tt(this, Ui, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    tt(this, ki, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    tt(this, ni, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    tt(this, Bi, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    tt(this, La, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    tt(this, Oa, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    ct(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var a;
    Xn = [], $a = null, this.apply();
    for (const o of e)
      qt(this, Tn, us).call(this, o);
    if (ne(this, ti) === 0) {
      var n = Gt;
      qt(this, Tn, cs).call(this);
      var r = ne(this, ki), i = ne(this, ni);
      He(this, ki, []), He(this, ni, []), He(this, Bi, []), $a = this, ot = null, Gt = n, ul(r), ul(i), $a = null, (a = ne(this, wa)) == null || a.resolve();
    } else
      qt(this, Tn, eo).call(this, ne(this, ki)), qt(this, Tn, eo).call(this, ne(this, ni)), qt(this, Tn, eo).call(this, ne(this, Bi));
    Gt = null;
    for (const o of ne(this, Ui))
      Aa(o);
    He(this, Ui, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    ne(this, Ni).has(e) || ne(this, Ni).set(e, n), this.current.set(e, e.v), Gt == null || Gt.set(e, e.v);
  }
  activate() {
    ot = this;
  }
  deactivate() {
    ot = null, Gt = null;
  }
  flush() {
    if (Xn.length > 0) {
      if (this.activate(), Tu(), ot !== null && ot !== this)
        return;
    } else ne(this, ti) === 0 && qt(this, Tn, cs).call(this);
    this.deactivate();
    for (const e of ss)
      if (ss.delete(e), e(), ot !== null)
        break;
  }
  increment() {
    He(this, ti, ne(this, ti) + 1);
  }
  decrement() {
    He(this, ti, ne(this, ti) - 1);
    for (const e of ne(this, La))
      en(e, yn), di(e);
    for (const e of ne(this, Oa))
      en(e, Hr), di(e);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    ne(this, Hi).add(e);
  }
  settled() {
    return (ne(this, wa) ?? He(this, wa, bu())).promise;
  }
  static ensure() {
    if (ot === null) {
      const e = ot = new Ao();
      Va.add(ot), _a || Ao.enqueue(() => {
        ot === e && e.flush();
      });
    }
    return ot;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    mr(e);
  }
  apply() {
  }
};
Ni = new WeakMap(), Hi = new WeakMap(), ti = new WeakMap(), wa = new WeakMap(), Ui = new WeakMap(), ki = new WeakMap(), ni = new WeakMap(), Bi = new WeakMap(), La = new WeakMap(), Oa = new WeakMap(), Tn = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
us = function(e) {
  var c;
  e.f ^= Kt;
  for (var n = e.first; n !== null; ) {
    var r = n.f, i = (r & (br | vi)) !== 0, a = i && (r & Kt) !== 0, o = a || (r & kn) !== 0 || this.skipped_effects.has(n);
    if (!o && n.fn !== null) {
      i ? n.f ^= Kt : r & Ps ? ne(this, ni).push(n) : r & Kt || (r & Oo && ((c = n.b) != null && c.is_pending()) ? ne(this, Ui).push(n) : Po(n) && (n.f & Nr && ne(this, Bi).push(n), Aa(n)));
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
eo = function(e) {
  for (const n of e)
    (n.f & yn ? ne(this, La) : ne(this, Oa)).push(n), en(n, Kt);
  e.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
cs = function() {
  var e;
  for (const n of ne(this, Hi))
    n();
  if (ne(this, Hi).clear(), Va.size > 1) {
    ne(this, Ni).clear();
    let n = !0;
    for (const r of Va) {
      if (r === this) {
        n = !1;
        continue;
      }
      const i = [];
      for (const [o, u] of this.current) {
        if (r.current.has(o))
          if (n && u !== r.current.get(o))
            r.current.set(o, u);
          else
            continue;
        i.push(o);
      }
      if (i.length === 0)
        continue;
      const a = [...r.current.keys()].filter((o) => !this.current.has(o));
      if (a.length > 0) {
        for (const o of i)
          wu(o, a);
        if (Xn.length > 0) {
          ot = r, r.apply();
          for (const o of Xn)
            qt(e = r, Tn, us).call(e, o);
          Xn = [], r.deactivate();
        }
      }
    }
    ot = null;
  }
  Va.delete(this);
};
let vr = Ao;
function tf(t) {
  var e = _a;
  _a = !0;
  try {
    for (var n; ; ) {
      if ($d(), Xn.length === 0 && (ot == null || ot.flush(), Xn.length === 0))
        return Ro = null, /** @type {T} */
        n;
      Tu();
    }
  } finally {
    _a = e;
  }
}
function Tu() {
  var t = Mi;
  ls = !0;
  try {
    var e = 0;
    for (hl(!0); Xn.length > 0; ) {
      var n = vr.ensure();
      if (e++ > 1e3) {
        var r, i;
        nf();
      }
      n.process(Xn), Mr.clear();
    }
  } finally {
    ls = !1, hl(t), Ro = null;
  }
}
function nf() {
  try {
    Vd();
  } catch (t) {
    Gi(t, Ro);
  }
}
let ur = null;
function ul(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if (!(r.f & (mi | kn)) && Po(r) && (ur = [], Aa(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Wu(r) : r.fn = null), (ur == null ? void 0 : ur.length) > 0)) {
        Mr.clear();
        for (const i of ur)
          Aa(i);
        ur = [];
      }
    }
    ur = null;
  }
}
function wu(t, e) {
  if (t.reactions !== null)
    for (const n of t.reactions) {
      const r = n.f;
      r & rn ? wu(
        /** @type {Derived} */
        n,
        e
      ) : r & (Oo | Nr) && Lu(n, e) && (en(n, yn), di(
        /** @type {Effect} */
        n
      ));
    }
}
function Lu(t, e) {
  if (t.deps !== null) {
    for (const n of t.deps)
      if (e.includes(n) || n.f & rn && Lu(
        /** @type {Derived} */
        n,
        e
      ))
        return !0;
  }
  return !1;
}
function di(t) {
  for (var e = Ro = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (ls && e === Ge && n & Nr)
      return;
    if (n & (vi | br)) {
      if (!(n & Kt)) return;
      e.f ^= Kt;
    }
  }
  Xn.push(e);
}
function rf(t) {
  let e = 0, n = fi(0), r;
  return () => {
    yf() && (s(n), Pa(() => (e === 0 && (r = Bn(() => t(() => ya(n)))), e += 1, () => {
      mr(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, ya(n));
      });
    })));
  };
}
var af = Ur | Zi | Ns;
function of(t, e, n) {
  new sf(t, e, n);
}
var Dn, An, Rs, Wn, ri, qn, Cn, dn, zn, xr, ii, Tr, ai, wr, Co, xo, nn, lf, uf, to, no, ds;
class sf {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    tt(this, nn);
    /** @type {Boundary | null} */
    ct(this, "parent");
    tt(this, Dn, !1);
    /** @type {TemplateNode} */
    tt(this, An);
    /** @type {TemplateNode | null} */
    tt(this, Rs, null);
    /** @type {BoundaryProps} */
    tt(this, Wn);
    /** @type {((anchor: Node) => void)} */
    tt(this, ri);
    /** @type {Effect} */
    tt(this, qn);
    /** @type {Effect | null} */
    tt(this, Cn, null);
    /** @type {Effect | null} */
    tt(this, dn, null);
    /** @type {Effect | null} */
    tt(this, zn, null);
    /** @type {DocumentFragment | null} */
    tt(this, xr, null);
    tt(this, ii, 0);
    tt(this, Tr, 0);
    tt(this, ai, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    tt(this, wr, null);
    tt(this, Co, () => {
      ne(this, wr) && ji(ne(this, wr), ne(this, ii));
    });
    tt(this, xo, rf(() => (He(this, wr, fi(ne(this, ii))), () => {
      He(this, wr, null);
    })));
    He(this, An, e), He(this, Wn, n), He(this, ri, r), this.parent = /** @type {Effect} */
    Ge.b, He(this, Dn, !!ne(this, Wn).pending), He(this, qn, Fr(() => {
      Ge.b = this;
      {
        try {
          He(this, Cn, zt(() => r(ne(this, An))));
        } catch (i) {
          this.error(i);
        }
        ne(this, Tr) > 0 ? qt(this, nn, no).call(this) : He(this, Dn, !1);
      }
    }, af));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return ne(this, Dn) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!ne(this, Wn).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    qt(this, nn, ds).call(this, e), He(this, ii, ne(this, ii) + e), ss.add(ne(this, Co));
  }
  get_effect_pending() {
    return ne(this, xo).call(this), s(
      /** @type {Source<number>} */
      ne(this, wr)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = ne(this, Wn).onerror;
    let r = ne(this, Wn).failed;
    if (ne(this, ai) || !n && !r)
      throw e;
    ne(this, Cn) && (jt(ne(this, Cn)), He(this, Cn, null)), ne(this, dn) && (jt(ne(this, dn)), He(this, dn, null)), ne(this, zn) && (jt(ne(this, zn)), He(this, zn, null));
    var i = !1, a = !1;
    const o = () => {
      if (i) {
        Kd();
        return;
      }
      i = !0, a && zd(), vr.ensure(), He(this, ii, 0), ne(this, zn) !== null && Dr(ne(this, zn), () => {
        He(this, zn, null);
      }), He(this, Dn, this.has_pending_snippet()), He(this, Cn, qt(this, nn, to).call(this, () => (He(this, ai, !1), zt(() => ne(this, ri).call(this, ne(this, An)))))), ne(this, Tr) > 0 ? qt(this, nn, no).call(this) : He(this, Dn, !1);
    };
    var u = Ve;
    try {
      fn(null), a = !0, n == null || n(e, o), a = !1;
    } catch (l) {
      Gi(l, ne(this, qn) && ne(this, qn).parent);
    } finally {
      fn(u);
    }
    r && mr(() => {
      He(this, zn, qt(this, nn, to).call(this, () => {
        He(this, ai, !0);
        try {
          return zt(() => {
            r(
              ne(this, An),
              () => e,
              () => o
            );
          });
        } catch (l) {
          return Gi(
            l,
            /** @type {Effect} */
            ne(this, qn).parent
          ), null;
        } finally {
          He(this, ai, !1);
        }
      }));
    });
  }
}
Dn = new WeakMap(), An = new WeakMap(), Rs = new WeakMap(), Wn = new WeakMap(), ri = new WeakMap(), qn = new WeakMap(), Cn = new WeakMap(), dn = new WeakMap(), zn = new WeakMap(), xr = new WeakMap(), ii = new WeakMap(), Tr = new WeakMap(), ai = new WeakMap(), wr = new WeakMap(), Co = new WeakMap(), xo = new WeakMap(), nn = new WeakSet(), lf = function() {
  try {
    He(this, Cn, zt(() => ne(this, ri).call(this, ne(this, An))));
  } catch (e) {
    this.error(e);
  }
  He(this, Dn, !1);
}, uf = function() {
  const e = ne(this, Wn).pending;
  e && (He(this, dn, zt(() => e(ne(this, An)))), vr.enqueue(() => {
    He(this, Cn, qt(this, nn, to).call(this, () => (vr.ensure(), zt(() => ne(this, ri).call(this, ne(this, An)))))), ne(this, Tr) > 0 ? qt(this, nn, no).call(this) : (Dr(
      /** @type {Effect} */
      ne(this, dn),
      () => {
        He(this, dn, null);
      }
    ), He(this, Dn, !1));
  }));
}, /**
 * @param {() => Effect | null} fn
 */
to = function(e) {
  var n = Ge, r = Ve, i = lt;
  Qn(ne(this, qn)), fn(ne(this, qn)), Vi(ne(this, qn).ctx);
  try {
    return e();
  } catch (a) {
    return Cu(a), null;
  } finally {
    Qn(n), fn(r), Vi(i);
  }
}, no = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    ne(this, Wn).pending
  );
  ne(this, Cn) !== null && (He(this, xr, document.createDocumentFragment()), cf(ne(this, Cn), ne(this, xr))), ne(this, dn) === null && He(this, dn, zt(() => e(ne(this, An))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
ds = function(e) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && qt(n = this.parent, nn, ds).call(n, e);
    return;
  }
  He(this, Tr, ne(this, Tr) + e), ne(this, Tr) === 0 && (He(this, Dn, !1), ne(this, dn) && Dr(ne(this, dn), () => {
    He(this, dn, null);
  }), ne(this, xr) && (ne(this, An).before(ne(this, xr)), He(this, xr, null)), mr(() => {
    vr.ensure().flush();
  }));
};
function cf(t, e) {
  for (var n = t.nodes_start, r = t.nodes_end; n !== null; ) {
    var i = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Da(n)
    );
    e.append(n), n = i;
  }
}
function Ou(t, e, n) {
  const r = Ra() ? Ma : ks;
  if (e.length === 0) {
    n(t.map(r));
    return;
  }
  var i = ot, a = (
    /** @type {Effect} */
    Ge
  ), o = df();
  Promise.all(e.map((u) => /* @__PURE__ */ ff(u))).then((u) => {
    o();
    try {
      n([...t.map(r), ...u]);
    } catch (l) {
      a.f & mi || Gi(l, a);
    }
    i == null || i.deactivate(), fs();
  }).catch((u) => {
    Gi(u, a);
  });
}
function df() {
  var t = Ge, e = Ve, n = lt, r = ot;
  return function() {
    Qn(t), fn(e), Vi(n), r == null || r.activate();
  };
}
function fs() {
  Qn(null), fn(null), Vi(null);
}
// @__NO_SIDE_EFFECTS__
function Ma(t) {
  var e = rn | yn, n = Ve !== null && Ve.f & rn ? (
    /** @type {Derived} */
    Ve
  ) : null;
  return Ge === null || n !== null && n.f & xn ? e |= xn : Ge.f |= Zi, {
    ctx: lt,
    deps: null,
    effects: null,
    equals: Iu,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Ht
    ),
    wv: 0,
    parent: n ?? Ge,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function ff(t, e) {
  let n = (
    /** @type {Effect | null} */
    Ge
  );
  n === null && Ud();
  var r = (
    /** @type {Boundary} */
    n.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = fi(
    /** @type {V} */
    Ht
  ), o = !Ve, u = /* @__PURE__ */ new Map();
  return Ef(() => {
    var f;
    var l = bu();
    i = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(fs);
    } catch (m) {
      l.reject(m), fs();
    }
    var c = (
      /** @type {Batch} */
      ot
    ), d = r.is_pending();
    o && (r.update_pending_count(1), d || (c.increment(), (f = u.get(c)) == null || f.reject(Li), u.delete(c), u.set(c, l)));
    const v = (m, h = void 0) => {
      if (d || c.activate(), h)
        h !== Li && (a.f |= oi, ji(a, h));
      else {
        a.f & oi && (a.f ^= oi), ji(a, m);
        for (const [g, b] of u) {
          if (u.delete(g), g === c) break;
          b.reject(Li);
        }
      }
      o && (r.update_pending_count(-1), d || c.decrement());
    };
    l.promise.then(v, (m) => v(null, m || "unknown"));
  }), Mo(() => {
    for (const l of u.values())
      l.reject(Li);
  }), new Promise((l) => {
    function c(d) {
      function v() {
        d === i ? l(a) : c(i);
      }
      d.then(v, v);
    }
    c(i);
  });
}
// @__NO_SIDE_EFFECTS__
function fe(t) {
  const e = /* @__PURE__ */ Ma(t);
  return Xu(e), e;
}
// @__NO_SIDE_EFFECTS__
function ks(t) {
  const e = /* @__PURE__ */ Ma(t);
  return e.equals = Eu, e;
}
function Ru(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      jt(
        /** @type {Effect} */
        e[n]
      );
  }
}
function hf(t) {
  for (var e = t.parent; e !== null; ) {
    if (!(e.f & rn))
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function Bs(t) {
  var e, n = Ge;
  Qn(hf(t));
  try {
    Ru(t), e = Qu(t);
  } finally {
    Qn(n);
  }
  return e;
}
function Mu(t) {
  var e = Bs(t);
  if (t.equals(e) || (t.v = e, t.wv = Yu()), !gi)
    if (Gt !== null)
      Gt.set(t, t.v);
    else {
      var n = (Lr || t.f & xn) && t.deps !== null ? Hr : Kt;
      en(t, n);
    }
}
const Mr = /* @__PURE__ */ new Map();
function fi(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Iu,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function ve(t, e) {
  const n = fi(t);
  return Xu(n), n;
}
// @__NO_SIDE_EFFECTS__
function Du(t, e = !1, n = !0) {
  var i;
  const r = fi(t);
  return e || (r.equals = Eu), Qi && n && lt !== null && lt.l !== null && ((i = lt.l).s ?? (i.s = [])).push(r), r;
}
function K(t, e, n = !1) {
  Ve !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Nn || Ve.f & ll) && Ra() && Ve.f & (rn | Nr | Oo | ll) && !($t != null && $t.includes(t)) && qd();
  let r = n ? ue(e) : e;
  return ji(t, r);
}
function ji(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    gi ? Mr.set(t, e) : Mr.set(t, n), t.v = e;
    var r = vr.ensure();
    r.capture(t, n), t.f & rn && (t.f & yn && Bs(
      /** @type {Derived} */
      t
    ), en(t, t.f & xn ? Hr : Kt)), t.wv = Yu(), Pu(t, yn), Ra() && Ge !== null && Ge.f & Kt && !(Ge.f & (br | vi)) && (Sn === null ? Cf([t]) : Sn.push(t));
  }
  return e;
}
function ya(t) {
  K(t, t.v + 1);
}
function Pu(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = Ra(), i = n.length, a = 0; a < i; a++) {
      var o = n[a], u = o.f;
      if (!(!r && o === Ge)) {
        var l = (u & yn) === 0;
        l && en(o, e), u & rn ? Pu(
          /** @type {Derived} */
          o,
          Hr
        ) : l && (u & Nr && ur !== null && ur.push(
          /** @type {Effect} */
          o
        ), di(
          /** @type {Effect} */
          o
        ));
      }
    }
}
function ue(t) {
  if (typeof t != "object" || t === null || Kn in t)
    return t;
  const e = Ds(t);
  if (e !== Md && e !== Dd)
    return t;
  var n = /* @__PURE__ */ new Map(), r = To(t), i = /* @__PURE__ */ ve(0), a = si, o = (u) => {
    if (si === a)
      return u();
    var l = Ve, c = si;
    fn(null), ml(a);
    var d = u();
    return fn(l), ml(c), d;
  };
  return r && n.set("length", /* @__PURE__ */ ve(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(u, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && jd();
        var d = n.get(l);
        return d === void 0 ? d = o(() => {
          var v = /* @__PURE__ */ ve(c.value);
          return n.set(l, v), v;
        }) : K(d, c.value, !0), !0;
      },
      deleteProperty(u, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in u) {
            const d = o(() => /* @__PURE__ */ ve(Ht));
            n.set(l, d), ya(i);
          }
        } else
          K(c, Ht), ya(i);
        return !0;
      },
      get(u, l, c) {
        var m;
        if (l === Kn)
          return t;
        var d = n.get(l), v = l in u;
        if (d === void 0 && (!v || (m = Rr(u, l)) != null && m.writable) && (d = o(() => {
          var h = ue(v ? u[l] : Ht), g = /* @__PURE__ */ ve(h);
          return g;
        }), n.set(l, d)), d !== void 0) {
          var f = s(d);
          return f === Ht ? void 0 : f;
        }
        return Reflect.get(u, l, c);
      },
      getOwnPropertyDescriptor(u, l) {
        var c = Reflect.getOwnPropertyDescriptor(u, l);
        if (c && "value" in c) {
          var d = n.get(l);
          d && (c.value = s(d));
        } else if (c === void 0) {
          var v = n.get(l), f = v == null ? void 0 : v.v;
          if (v !== void 0 && f !== Ht)
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
        if (l === Kn)
          return !0;
        var c = n.get(l), d = c !== void 0 && c.v !== Ht || Reflect.has(u, l);
        if (c !== void 0 || Ge !== null && (!d || (f = Rr(u, l)) != null && f.writable)) {
          c === void 0 && (c = o(() => {
            var m = d ? ue(u[l]) : Ht, h = /* @__PURE__ */ ve(m);
            return h;
          }), n.set(l, c));
          var v = s(c);
          if (v === Ht)
            return !1;
        }
        return d;
      },
      set(u, l, c, d) {
        var I;
        var v = n.get(l), f = l in u;
        if (r && l === "length")
          for (var m = c; m < /** @type {Source<number>} */
          v.v; m += 1) {
            var h = n.get(m + "");
            h !== void 0 ? K(h, Ht) : m in u && (h = o(() => /* @__PURE__ */ ve(Ht)), n.set(m + "", h));
          }
        if (v === void 0)
          (!f || (I = Rr(u, l)) != null && I.writable) && (v = o(() => /* @__PURE__ */ ve(void 0)), K(v, ue(c)), n.set(l, v));
        else {
          f = v.v !== Ht;
          var g = o(() => ue(c));
          K(v, g);
        }
        var b = Reflect.getOwnPropertyDescriptor(u, l);
        if (b != null && b.set && b.set.call(d, c), !f) {
          if (r && typeof l == "string") {
            var y = (
              /** @type {Source<number>} */
              n.get("length")
            ), S = Number(l);
            Number.isInteger(S) && S >= y.v && K(y, S + 1);
          }
          ya(i);
        }
        return !0;
      },
      ownKeys(u) {
        s(i);
        var l = Reflect.ownKeys(u).filter((v) => {
          var f = n.get(v);
          return f === void 0 || f.v !== Ht;
        });
        for (var [c, d] of n)
          d.v !== Ht && !(c in u) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        Wd();
      }
    }
  );
}
function cl(t) {
  try {
    if (t !== null && typeof t == "object" && Kn in t)
      return t[Kn];
  } catch {
  }
  return t;
}
function vf(t, e) {
  return Object.is(cl(t), cl(e));
}
var dl, Nu, Hu, Uu, ku;
function mf() {
  if (dl === void 0) {
    dl = window, Nu = document, Hu = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    Uu = Rr(e, "firstChild").get, ku = Rr(e, "nextSibling").get, sl(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), sl(n) && (n.__t = void 0);
  }
}
function kr(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Wi(t) {
  return Uu.call(t);
}
// @__NO_SIDE_EFFECTS__
function Da(t) {
  return ku.call(t);
}
function me(t, e) {
  return /* @__PURE__ */ Wi(t);
}
function Q(t, e = !1) {
  {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Wi(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Da(n) : n;
  }
}
function Ie(t, e = 1, n = !1) {
  let r = t;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Da(r);
  return r;
}
function gf(t) {
  t.textContent = "";
}
function Fs() {
  return !1;
}
function pf(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, mr(() => {
      document.activeElement === n && t.focus();
    });
  }
}
let fl = !1;
function bf() {
  fl || (fl = !0, document.addEventListener(
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
function Ji(t) {
  var e = Ve, n = Ge;
  fn(null), Qn(null);
  try {
    return t();
  } finally {
    fn(e), Qn(n);
  }
}
function Vs(t, e, n, r = n) {
  t.addEventListener(e, () => Ji(n));
  const i = t.__on_r;
  i ? t.__on_r = () => {
    i(), r(!0);
  } : t.__on_r = () => r(!0), bf();
}
function Bu(t) {
  Ge === null && Ve === null && Fd(), Ve !== null && Ve.f & xn && Ge === null && Bd(), gi && kd();
}
function _f(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function $n(t, e, n, r = !0) {
  var i = Ge;
  i !== null && i.f & kn && (t |= kn);
  var a = {
    ctx: lt,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | yn,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: i,
    b: i && i.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (n)
    try {
      Aa(a), a.f |= Lo;
    } catch (l) {
      throw jt(a), l;
    }
  else e !== null && di(a);
  if (r) {
    var o = a;
    if (n && o.deps === null && o.teardown === null && o.nodes_start === null && o.first === o.last && // either `null`, or a singular child
    !(o.f & Zi) && (o = o.first), o !== null && (o.parent = i, i !== null && _f(o, i), Ve !== null && Ve.f & rn && !(t & vi))) {
      var u = (
        /** @type {Derived} */
        Ve
      );
      (u.effects ?? (u.effects = [])).push(o);
    }
  }
  return a;
}
function yf() {
  return Ve !== null && !Nn;
}
function Mo(t) {
  const e = $n(wo, null, !1);
  return en(e, Kt), e.teardown = t, e;
}
function Ce(t) {
  Bu();
  var e = (
    /** @type {Effect} */
    Ge.f
  ), n = !Ve && (e & br) !== 0 && (e & Lo) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      lt
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return Fu(t);
}
function Fu(t) {
  return $n(Ps | _u, t, !1);
}
function Vu(t) {
  return Bu(), $n(wo | _u, t, !0);
}
function If(t) {
  vr.ensure();
  const e = $n(vi | Zi, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Dr(e, () => {
      jt(e), r(void 0);
    }) : (jt(e), r(void 0));
  });
}
function Br(t) {
  return $n(Ps, t, !1);
}
function Ef(t) {
  return $n(Oo | Zi, t, !0);
}
function Pa(t, e = 0) {
  return $n(wo | e, t, !0);
}
function Oe(t, e = [], n = []) {
  Ou(e, n, (r) => {
    $n(wo, () => t(...r.map(s)), !0);
  });
}
function Fr(t, e = 0) {
  var n = $n(Nr | e, t, !0);
  return n;
}
function zt(t, e = !0) {
  return $n(br | Zi, t, !0, e);
}
function Gu(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = gi, r = Ve;
    vl(!0), fn(null);
    try {
      e.call(null);
    } finally {
      vl(n), fn(r);
    }
  }
}
function ju(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && Ji(() => {
      i.abort(Li);
    });
    var r = n.next;
    n.f & vi ? n.parent = null : jt(n, e), n = r;
  }
}
function Sf(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    e.f & br || jt(e), e = n;
  }
}
function jt(t, e = !0) {
  var n = !1;
  (e || t.f & Nd) && t.nodes_start !== null && t.nodes_end !== null && (Af(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), ju(t, e && !n), uo(t, 0), en(t, mi);
  var r = t.transitions;
  if (r !== null)
    for (const a of r)
      a.stop();
  Gu(t);
  var i = t.parent;
  i !== null && i.first !== null && Wu(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function Af(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Da(t)
    );
    t.remove(), t = n;
  }
}
function Wu(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Dr(t, e) {
  var n = [];
  Gs(t, n, !0), qu(n, () => {
    jt(t), e && e();
  });
}
function qu(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var i of t)
      i.out(r);
  } else
    e();
}
function Gs(t, e, n) {
  if (!(t.f & kn)) {
    if (t.f ^= kn, t.transitions !== null)
      for (const o of t.transitions)
        (o.is_global || n) && e.push(o);
    for (var r = t.first; r !== null; ) {
      var i = r.next, a = (r.f & Ur) !== 0 || (r.f & br) !== 0;
      Gs(r, e, a ? n : !1), r = i;
    }
  }
}
function Do(t) {
  zu(t, !0);
}
function zu(t, e) {
  if (t.f & kn) {
    t.f ^= kn, t.f & Kt || (en(t, yn), di(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & Ur) !== 0 || (n.f & br) !== 0;
      zu(n, i ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || e) && a.in();
  }
}
let Mi = !1;
function hl(t) {
  Mi = t;
}
let gi = !1;
function vl(t) {
  gi = t;
}
let Ve = null, Nn = !1;
function fn(t) {
  Ve = t;
}
let Ge = null;
function Qn(t) {
  Ge = t;
}
let $t = null;
function Xu(t) {
  Ve !== null && ($t === null ? $t = [t] : $t.push(t));
}
let Qt = null, bn = 0, Sn = null;
function Cf(t) {
  Sn = t;
}
let Ku = 1, Sa = 0, si = Sa;
function ml(t) {
  si = t;
}
let Lr = !1;
function Yu() {
  return ++Ku;
}
function Po(t) {
  var v;
  var e = t.f;
  if (e & yn)
    return !0;
  if (e & Hr) {
    var n = t.deps, r = (e & xn) !== 0;
    if (n !== null) {
      var i, a, o = (e & lo) !== 0, u = r && Ge !== null && !Lr, l = n.length;
      if ((o || u) && (Ge === null || !(Ge.f & mi))) {
        var c = (
          /** @type {Derived} */
          t
        ), d = c.parent;
        for (i = 0; i < l; i++)
          a = n[i], (o || !((v = a == null ? void 0 : a.reactions) != null && v.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        o && (c.f ^= lo), u && d !== null && !(d.f & xn) && (c.f ^= xn);
      }
      for (i = 0; i < l; i++)
        if (a = n[i], Po(
          /** @type {Derived} */
          a
        ) && Mu(
          /** @type {Derived} */
          a
        ), a.wv > t.wv)
          return !0;
    }
    (!r || Ge !== null && !Lr) && en(t, Kt);
  }
  return !1;
}
function Zu(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !($t != null && $t.includes(t)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a.f & rn ? Zu(
        /** @type {Derived} */
        a,
        e,
        !1
      ) : e === a && (n ? en(a, yn) : a.f & Kt && en(a, Hr), di(
        /** @type {Effect} */
        a
      ));
    }
}
function Qu(t) {
  var g;
  var e = Qt, n = bn, r = Sn, i = Ve, a = Lr, o = $t, u = lt, l = Nn, c = si, d = t.f;
  Qt = /** @type {null | Value[]} */
  null, bn = 0, Sn = null, Lr = (d & xn) !== 0 && (Nn || !Mi || Ve === null), Ve = d & (br | vi) ? null : t, $t = null, Vi(t.ctx), Nn = !1, si = ++Sa, t.ac !== null && (Ji(() => {
    t.ac.abort(Li);
  }), t.ac = null);
  try {
    t.f |= os;
    var v = (
      /** @type {Function} */
      t.fn
    ), f = v(), m = t.deps;
    if (Qt !== null) {
      var h;
      if (uo(t, bn), m !== null && bn > 0)
        for (m.length = bn + Qt.length, h = 0; h < Qt.length; h++)
          m[bn + h] = Qt[h];
      else
        t.deps = m = Qt;
      if (!Lr || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      d & rn && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (h = bn; h < m.length; h++)
          ((g = m[h]).reactions ?? (g.reactions = [])).push(t);
    } else m !== null && bn < m.length && (uo(t, bn), m.length = bn);
    if (Ra() && Sn !== null && !Nn && m !== null && !(t.f & (rn | Hr | yn)))
      for (h = 0; h < /** @type {Source[]} */
      Sn.length; h++)
        Zu(
          Sn[h],
          /** @type {Effect} */
          t
        );
    return i !== null && i !== t && (Sa++, Sn !== null && (r === null ? r = Sn : r.push(.../** @type {Source[]} */
    Sn))), t.f & oi && (t.f ^= oi), f;
  } catch (b) {
    return Cu(b);
  } finally {
    t.f ^= os, Qt = e, bn = n, Sn = r, Ve = i, Lr = a, $t = o, Vi(u), Nn = l, si = c;
  }
}
function xf(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = Rd.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && e.f & rn && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Qt === null || !Qt.includes(e)) && (en(e, Hr), e.f & (xn | lo) || (e.f ^= lo), Ru(
    /** @type {Derived} **/
    e
  ), uo(
    /** @type {Derived} **/
    e,
    0
  ));
}
function uo(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      xf(t, n[r]);
}
function Aa(t) {
  var e = t.f;
  if (!(e & mi)) {
    en(t, Kt);
    var n = Ge, r = Mi;
    Ge = t, Mi = !0;
    try {
      e & Nr ? Sf(t) : ju(t), Gu(t);
      var i = Qu(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = Ku;
      var a;
      gu && Zd && t.f & yn && t.deps;
    } finally {
      Mi = r, Ge = n;
    }
  }
}
async function Ju() {
  await Promise.resolve(), tf();
}
function s(t) {
  var e = t.f, n = (e & rn) !== 0;
  if (Ve !== null && !Nn) {
    var r = Ge !== null && (Ge.f & mi) !== 0;
    if (!r && !($t != null && $t.includes(t))) {
      var i = Ve.deps;
      if (Ve.f & os)
        t.rv < Sa && (t.rv = Sa, Qt === null && i !== null && i[bn] === t ? bn++ : Qt === null ? Qt = [t] : (!Lr || !Qt.includes(t)) && Qt.push(t));
      else {
        (Ve.deps ?? (Ve.deps = [])).push(t);
        var a = t.reactions;
        a === null ? t.reactions = [Ve] : a.includes(Ve) || a.push(Ve);
      }
    }
  } else if (n && /** @type {Derived} */
  t.deps === null && /** @type {Derived} */
  t.effects === null) {
    var o = (
      /** @type {Derived} */
      t
    ), u = o.parent;
    u !== null && !(u.f & xn) && (o.f ^= xn);
  }
  if (gi) {
    if (Mr.has(t))
      return Mr.get(t);
    if (n) {
      o = /** @type {Derived} */
      t;
      var l = o.v;
      return (!(o.f & Kt) && o.reactions !== null || $u(o)) && (l = Bs(o)), Mr.set(o, l), l;
    }
  } else if (n) {
    if (o = /** @type {Derived} */
    t, Gt != null && Gt.has(o))
      return Gt.get(o);
    Po(o) && Mu(o);
  }
  if (Gt != null && Gt.has(t))
    return Gt.get(t);
  if (t.f & oi)
    throw t.v;
  return t.v;
}
function $u(t) {
  if (t.v === Ht) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (Mr.has(e) || e.f & rn && $u(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Bn(t) {
  var e = Nn;
  try {
    return Nn = !0, t();
  } finally {
    Nn = e;
  }
}
const Tf = -7169;
function en(t, e) {
  t.f = t.f & Tf | e;
}
function ec(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (Kn in t)
      hs(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && Kn in n && hs(n);
      }
  }
}
function hs(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        hs(t[r], e);
      } catch {
      }
    const n = Ds(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = pu(n);
      for (let i in r) {
        const a = r[i].get;
        if (a)
          try {
            a.call(t);
          } catch {
          }
      }
    }
  }
}
const tc = /* @__PURE__ */ new Set(), vs = /* @__PURE__ */ new Set();
function js(t, e, n, r = {}) {
  function i(a) {
    if (r.capture || pa.call(e, a), !a.cancelBubble)
      return Ji(() => n == null ? void 0 : n.call(this, a));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? mr(() => {
    e.addEventListener(t, i, r);
  }) : e.addEventListener(t, i, r), i;
}
function wf(t, e, n, r = {}) {
  var i = js(e, t, n, r);
  return () => {
    t.removeEventListener(e, i, r);
  };
}
function ga(t, e, n, r, i) {
  var a = { capture: r, passive: i }, o = js(t, e, n, a);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && Mo(() => {
    e.removeEventListener(t, o, a);
  });
}
function hn(t) {
  for (var e = 0; e < t.length; e++)
    tc.add(t[e]);
  for (var n of vs)
    n(t);
}
let gl = null;
function pa(t) {
  var S;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = ((S = t.composedPath) == null ? void 0 : S.call(t)) || [], a = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  gl = t;
  var o = 0, u = gl === t && t.__root;
  if (u) {
    var l = i.indexOf(u);
    if (l !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var c = i.indexOf(e);
    if (c === -1)
      return;
    l <= c && (o = l);
  }
  if (a = /** @type {Element} */
  i[o] || t.target, a !== e) {
    oo(t, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var d = Ve, v = Ge;
    fn(null), Qn(null);
    try {
      for (var f, m = []; a !== null; ) {
        var h = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var g = a["__" + r];
          if (g != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === a))
            if (To(g)) {
              var [b, ...y] = g;
              b.apply(a, [t, ...y]);
            } else
              g.call(a, t);
        } catch (I) {
          f ? m.push(I) : f = I;
        }
        if (t.cancelBubble || h === e || h === null)
          break;
        a = h;
      }
      if (f) {
        for (let I of m)
          queueMicrotask(() => {
            throw I;
          });
        throw f;
      }
    } finally {
      t.__root = e, delete t.currentTarget, fn(d), Qn(v);
    }
  }
}
function nc(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function qi(t, e) {
  var n = (
    /** @type {Effect} */
    Ge
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function be(t, e) {
  var n = (e & 1) !== 0, r = (e & 2) !== 0, i, a = !t.startsWith("<!>");
  return () => {
    i === void 0 && (i = nc(a ? t : "<!>" + t), n || (i = /** @type {Node} */
    /* @__PURE__ */ Wi(i)));
    var o = (
      /** @type {TemplateNode} */
      r || Hu ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Wi(o)
      ), l = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      qi(u, l);
    } else
      qi(o, o);
    return o;
  };
}
// @__NO_SIDE_EFFECTS__
function Lf(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, a;
  return () => {
    if (!a) {
      var o = (
        /** @type {DocumentFragment} */
        nc(i)
      ), u = (
        /** @type {Element} */
        /* @__PURE__ */ Wi(o)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ Wi(u);
    }
    var l = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return qi(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function an(t, e) {
  return /* @__PURE__ */ Lf(t, e, "svg");
}
function Mt(t = "") {
  {
    var e = kr(t + "");
    return qi(e, e), e;
  }
}
function re() {
  var t = document.createDocumentFragment(), e = document.createComment(""), n = kr();
  return t.append(e, n), qi(e, n), t;
}
function L(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function Of(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const Rf = [
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
function Mf(t) {
  return Rf.includes(t);
}
const Df = {
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
function Pf(t) {
  return t = t.toLowerCase(), Df[t] ?? t;
}
const Nf = ["touchstart", "touchmove"];
function Hf(t) {
  return Nf.includes(t);
}
let co = !0;
function pl(t) {
  co = t;
}
function st(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function Uf(t, e) {
  return kf(t, e);
}
const Si = /* @__PURE__ */ new Map();
function kf(t, { target: e, anchor: n, props: r = {}, events: i, context: a, intro: o = !0 }) {
  mf();
  var u = /* @__PURE__ */ new Set(), l = (v) => {
    for (var f = 0; f < v.length; f++) {
      var m = v[f];
      if (!u.has(m)) {
        u.add(m);
        var h = Hf(m);
        e.addEventListener(m, pa, { passive: h });
        var g = Si.get(m);
        g === void 0 ? (document.addEventListener(m, pa, { passive: h }), Si.set(m, 1)) : Si.set(m, g + 1);
      }
    }
  };
  l(Ms(tc)), vs.add(l);
  var c = void 0, d = If(() => {
    var v = n ?? e.appendChild(kr());
    return of(
      /** @type {TemplateNode} */
      v,
      {
        pending: () => {
        }
      },
      (f) => {
        if (a) {
          xe({});
          var m = (
            /** @type {ComponentContext} */
            lt
          );
          m.c = a;
        }
        i && (r.$$events = i), co = o, c = t(f, r) || {}, co = !0, a && Te();
      }
    ), () => {
      var h;
      for (var f of u) {
        e.removeEventListener(f, pa);
        var m = (
          /** @type {number} */
          Si.get(f)
        );
        --m === 0 ? (document.removeEventListener(f, pa), Si.delete(f)) : Si.set(f, m);
      }
      vs.delete(l), v !== n && ((h = v.parentNode) == null || h.removeChild(v));
    };
  });
  return Bf.set(c, d), c;
}
let Bf = /* @__PURE__ */ new WeakMap();
function Se(t, e, ...n) {
  var r = t, i = pe, a;
  Fr(() => {
    i !== (i = e()) && (a && (jt(a), a = null), a = zt(() => (
      /** @type {SnippetFn} */
      i(r, ...n)
    )));
  }, Ur);
}
function it(t) {
  lt === null && Hs(), Qi && lt.l !== null ? Ff(lt).m.push(t) : Ce(() => {
    const e = Bn(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Ln(t) {
  lt === null && Hs(), it(() => () => Bn(t));
}
function Ff(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
function oe(t, e, n = !1) {
  var r = t, i = null, a = null, o = Ht, u = n ? Ur : 0, l = !1;
  const c = (m, h = !0) => {
    l = !0, f(h, m);
  };
  var d = null;
  function v() {
    d !== null && (d.lastChild.remove(), r.before(d), d = null);
    var m = o ? i : a, h = o ? a : i;
    m && Do(m), h && Dr(h, () => {
      o ? a = null : i = null;
    });
  }
  const f = (m, h) => {
    if (o !== (o = m)) {
      var g = Fs(), b = r;
      if (g && (d = document.createDocumentFragment(), d.append(b = kr())), o ? i ?? (i = h && zt(() => h(b))) : a ?? (a = h && zt(() => h(b))), g) {
        var y = (
          /** @type {Batch} */
          ot
        ), S = o ? i : a, I = o ? a : i;
        S && y.skipped_effects.delete(S), I && y.skipped_effects.add(I), y.add_callback(v);
      } else
        v();
    }
  };
  Fr(() => {
    l = !1, e(c), l || f(null, null);
  }, u);
}
let li = null;
function bl(t) {
  li = t;
}
function Oi(t, e) {
  return e;
}
function Vf(t, e, n) {
  for (var r = t.items, i = [], a = e.length, o = 0; o < a; o++)
    Gs(e[o].e, i, !0);
  var u = a > 0 && i.length === 0 && n !== null;
  if (u) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    gf(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), jn(t, e[0].prev, e[a - 1].next);
  }
  qu(i, () => {
    for (var c = 0; c < a; c++) {
      var d = e[c];
      u || (r.delete(d.k), jn(t, d.prev, d.next)), jt(d.e, !u);
    }
  });
}
function Hn(t, e, n, r, i, a = null) {
  var o = t, u = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, l = (e & 4) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      t
    );
    o = c.appendChild(kr());
  }
  var d = null, v = !1, f = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ ks(() => {
    var y = n();
    return To(y) ? y : y == null ? [] : Ms(y);
  }), h, g;
  function b() {
    Gf(
      g,
      h,
      u,
      f,
      o,
      i,
      e,
      r,
      n
    ), a !== null && (h.length === 0 ? d ? Do(d) : d = zt(() => a(o)) : d !== null && Dr(d, () => {
      d = null;
    }));
  }
  Fr(() => {
    g ?? (g = /** @type {Effect} */
    Ge), h = /** @type {V[]} */
    s(m);
    var y = h.length;
    if (!(v && y === 0)) {
      v = y === 0;
      var S, I, _, E;
      if (Fs()) {
        var x = /* @__PURE__ */ new Set(), w = (
          /** @type {Batch} */
          ot
        );
        for (I = 0; I < y; I += 1) {
          _ = h[I], E = r(_, I);
          var C = u.items.get(E) ?? f.get(E);
          C ? e & 3 && rc(C, _, I, e) : (S = ic(
            null,
            u,
            null,
            null,
            _,
            E,
            I,
            i,
            e,
            n,
            !0
          ), f.set(E, S)), x.add(E);
        }
        for (const [A, M] of u.items)
          x.has(A) || w.skipped_effects.add(M.e);
        w.add_callback(b);
      } else
        b();
      s(m);
    }
  });
}
function Gf(t, e, n, r, i, a, o, u, l) {
  var J, P, R, W;
  var c = (o & 8) !== 0, d = (o & 3) !== 0, v = e.length, f = n.items, m = n.first, h = m, g, b = null, y, S = [], I = [], _, E, x, w;
  if (c)
    for (w = 0; w < v; w += 1)
      _ = e[w], E = u(_, w), x = f.get(E), x !== void 0 && ((J = x.a) == null || J.measure(), (y ?? (y = /* @__PURE__ */ new Set())).add(x));
  for (w = 0; w < v; w += 1) {
    if (_ = e[w], E = u(_, w), x = f.get(E), x === void 0) {
      var C = r.get(E);
      if (C !== void 0) {
        r.delete(E), f.set(E, C);
        var A = b ? b.next : h;
        jn(n, b, C), jn(n, C, A), Go(C, A, i), b = C;
      } else {
        var M = h ? (
          /** @type {TemplateNode} */
          h.e.nodes_start
        ) : i;
        b = ic(
          M,
          n,
          b,
          b === null ? n.first : b.next,
          _,
          E,
          w,
          a,
          o,
          l
        );
      }
      f.set(E, b), S = [], I = [], h = b.next;
      continue;
    }
    if (d && rc(x, _, w, o), x.e.f & kn && (Do(x.e), c && ((P = x.a) == null || P.unfix(), (y ?? (y = /* @__PURE__ */ new Set())).delete(x))), x !== h) {
      if (g !== void 0 && g.has(x)) {
        if (S.length < I.length) {
          var G = I[0], k;
          b = G.prev;
          var j = S[0], O = S[S.length - 1];
          for (k = 0; k < S.length; k += 1)
            Go(S[k], G, i);
          for (k = 0; k < I.length; k += 1)
            g.delete(I[k]);
          jn(n, j.prev, O.next), jn(n, b, j), jn(n, O, G), h = G, b = O, w -= 1, S = [], I = [];
        } else
          g.delete(x), Go(x, h, i), jn(n, x.prev, x.next), jn(n, x, b === null ? n.first : b.next), jn(n, b, x), b = x;
        continue;
      }
      for (S = [], I = []; h !== null && h.k !== E; )
        h.e.f & kn || (g ?? (g = /* @__PURE__ */ new Set())).add(h), I.push(h), h = h.next;
      if (h === null)
        continue;
      x = h;
    }
    S.push(x), b = x, h = x.next;
  }
  if (h !== null || g !== void 0) {
    for (var T = g === void 0 ? [] : Ms(g); h !== null; )
      h.e.f & kn || T.push(h), h = h.next;
    var H = T.length;
    if (H > 0) {
      var U = o & 4 && v === 0 ? i : null;
      if (c) {
        for (w = 0; w < H; w += 1)
          (R = T[w].a) == null || R.measure();
        for (w = 0; w < H; w += 1)
          (W = T[w].a) == null || W.fix();
      }
      Vf(n, T, U);
    }
  }
  c && mr(() => {
    var Ae;
    if (y !== void 0)
      for (x of y)
        (Ae = x.a) == null || Ae.apply();
  }), t.first = n.first && n.first.e, t.last = b && b.e;
  for (var z of r.values())
    jt(z.e);
  r.clear();
}
function rc(t, e, n, r) {
  r & 1 && ji(t.v, e), r & 2 ? ji(
    /** @type {Value<number>} */
    t.i,
    n
  ) : t.i = n;
}
function ic(t, e, n, r, i, a, o, u, l, c, d) {
  var v = li, f = (l & 1) !== 0, m = (l & 16) === 0, h = f ? m ? /* @__PURE__ */ Du(i, !1, !1) : fi(i) : i, g = l & 2 ? fi(o) : o, b = {
    i: g,
    v: h,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  li = b;
  try {
    if (t === null) {
      var y = document.createDocumentFragment();
      y.append(t = kr());
    }
    return b.e = zt(() => u(
      /** @type {Node} */
      t,
      h,
      g,
      c
    ), Yd), b.e.prev = n && n.e, b.e.next = r && r.e, n === null ? d || (e.first = b) : (n.next = b, n.e.next = b.e), r !== null && (r.prev = b, r.e.prev = b.e), b;
  } finally {
    li = v;
  }
}
function Go(t, e, n) {
  for (var r = t.next ? (
    /** @type {TemplateNode} */
    t.next.e.nodes_start
  ) : n, i = e ? (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ) : n, a = (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ); a !== null && a !== r; ) {
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Da(a)
    );
    i.before(a), a = o;
  }
}
function jn(t, e, n) {
  e === null ? t.first = n : (e.next = n, e.e.next = n && n.e), n !== null && (n.prev = e, n.e.prev = e && e.e);
}
function _r(t, e, n) {
  var r = t, i, a, o = null, u = null;
  function l() {
    a && (Dr(a), a = null), o && (o.lastChild.remove(), r.before(o), o = null), a = u, u = null;
  }
  Fr(() => {
    if (i !== (i = e())) {
      var c = Fs();
      if (i) {
        var d = r;
        c && (o = document.createDocumentFragment(), o.append(d = kr()), a && ot.skipped_effects.add(a)), u = zt(() => n(d, i));
      }
      c ? ot.add_callback(l) : l();
    }
  }, Ur);
}
function _l(t, e, n, r, i, a) {
  var o, u, l = null, c = (
    /** @type {TemplateNode} */
    t
  ), d, v = li;
  Fr(() => {
    const f = e() || null;
    var m = f === "svg" ? Ld : null;
    if (f !== o) {
      var h = li;
      bl(v), d && (f === null ? Dr(d, () => {
        d = null, u = null;
      }) : f === u ? Do(d) : (jt(d), pl(!1))), f && f !== u && (d = zt(() => {
        if (l = m ? document.createElementNS(m, f) : document.createElement(f), qi(l, l), r) {
          var g = (
            /** @type {TemplateNode} */
            l.appendChild(kr())
          );
          r(l, g);
        }
        Ge.nodes_end = l, c.before(l);
      })), o = f, o && (u = o), pl(!0), bl(h);
    }
  }, Ur);
}
function De(t, e, n) {
  Br(() => {
    var r = Bn(() => e(t, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      Pa(() => {
        var o = n();
        ec(o), i && Us(a, o) && (a = o, r.update(o));
      }), i = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function jf(t, e) {
  var n = void 0, r;
  Fr(() => {
    n !== (n = e()) && (r && (jt(r), r = null), n && (r = zt(() => {
      Br(() => (
        /** @type {(node: Element) => void} */
        n(t)
      ));
    })));
  });
}
function ac(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var i = t.length;
    for (e = 0; e < i; e++) t[e] && (n = ac(t[e])) && (r && (r += " "), r += n);
  } else for (n in t) t[n] && (r && (r += " "), r += n);
  return r;
}
function Wf() {
  for (var t, e, n = 0, r = "", i = arguments.length; n < i; n++) (t = arguments[n]) && (e = ac(t)) && (r && (r += " "), r += e);
  return r;
}
function oc(t) {
  return typeof t == "object" ? Wf(t) : t ?? "";
}
const yl = [...` 	
\r\f \v\uFEFF`];
function qf(t, e, n) {
  var r = t == null ? "" : "" + t;
  if (e && (r = r ? r + " " + e : e), n) {
    for (var i in n)
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0; ) {
          var u = o + a;
          (o === 0 || yl.includes(r[o - 1])) && (u === r.length || yl.includes(r[u])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(u + 1) : o = u;
        }
  }
  return r === "" ? null : r;
}
function Il(t, e = !1) {
  var n = e ? " !important;" : ";", r = "";
  for (var i in t) {
    var a = t[i];
    a != null && a !== "" && (r += " " + i + ": " + a + n);
  }
  return r;
}
function jo(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function zf(t, e) {
  if (e) {
    var n = "", r, i;
    if (Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, o = 0, u = !1, l = [];
      r && l.push(...Object.keys(r).map(jo)), i && l.push(...Object.keys(i).map(jo));
      var c = 0, d = -1;
      const g = t.length;
      for (var v = 0; v < g; v++) {
        var f = t[v];
        if (u ? f === "/" && t[v - 1] === "*" && (u = !1) : a ? a === f && (a = !1) : f === "/" && t[v + 1] === "*" ? u = !0 : f === '"' || f === "'" ? a = f : f === "(" ? o++ : f === ")" && o--, !u && a === !1 && o === 0) {
          if (f === ":" && d === -1)
            d = v;
          else if (f === ";" || v === g - 1) {
            if (d !== -1) {
              var m = jo(t.substring(c, d).trim());
              if (!l.includes(m)) {
                f !== ";" && v++;
                var h = t.substring(c, v).trim();
                n += " " + h + ";";
              }
            }
            c = v + 1, d = -1;
          }
        }
      }
    }
    return r && (n += Il(r)), i && (n += Il(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function Ws(t, e, n, r, i, a) {
  var o = t.__className;
  if (o !== n || o === void 0) {
    var u = qf(n, r, a);
    u == null ? t.removeAttribute("class") : e ? t.className = u : t.setAttribute("class", u), t.__className = n;
  } else if (a && i !== a)
    for (var l in a) {
      var c = !!a[l];
      (i == null || c !== !!i[l]) && t.classList.toggle(l, c);
    }
  return a;
}
function Wo(t, e = {}, n, r) {
  for (var i in n) {
    var a = n[i];
    e[i] !== a && (n[i] == null ? t.style.removeProperty(i) : t.style.setProperty(i, a, r));
  }
}
function kt(t, e, n, r) {
  var i = t.__style;
  if (i !== e) {
    var a = zf(e, r);
    a == null ? t.removeAttribute("style") : t.style.cssText = a, t.__style = e;
  } else r && (Array.isArray(r) ? (Wo(t, n == null ? void 0 : n[0], r[0]), Wo(t, n == null ? void 0 : n[1], r[1], "important")) : Wo(t, n, r));
  return r;
}
function fo(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!To(e))
      return Xd();
    for (var r of t.options)
      r.selected = e.includes(Ia(r));
    return;
  }
  for (r of t.options) {
    var i = Ia(r);
    if (vf(i, e)) {
      r.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function sc(t) {
  var e = new MutationObserver(() => {
    fo(t, t.__value);
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
  }), Mo(() => {
    e.disconnect();
  });
}
function Xf(t, e, n = e) {
  var r = !0;
  Vs(t, "change", (i) => {
    var a = i ? "[selected]" : ":checked", o;
    if (t.multiple)
      o = [].map.call(t.querySelectorAll(a), Ia);
    else {
      var u = t.querySelector(a) ?? // will fall back to first non-disabled option if no option is selected
      t.querySelector("option:not([disabled])");
      o = u && Ia(u);
    }
    n(o);
  }), Br(() => {
    var i = e();
    if (fo(t, i, r), r && i === void 0) {
      var a = t.querySelector(":checked");
      a !== null && (i = Ia(a), n(i));
    }
    t.__value = i, r = !1;
  }), sc(t);
}
function Ia(t) {
  return "__value" in t ? t.__value : t.value;
}
const la = Symbol("class"), ua = Symbol("style"), lc = Symbol("is custom element"), uc = Symbol("is html");
function El(t, e) {
  var n = qs(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== "PROGRESS") || (t.value = e ?? "");
}
function Kf(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function Pr(t, e, n, r) {
  var i = qs(t);
  i[e] !== (i[e] = n) && (e === "loading" && (t[Hd] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && cc(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function Yf(t, e, n, r, i = !1, a = !1) {
  var o = qs(t), u = o[lc], l = !o[uc], c = e || {}, d = t.tagName === "OPTION";
  for (var v in e)
    v in n || (n[v] = null);
  n.class ? n.class = oc(n.class) : n[la] && (n.class = null), n[ua] && (n.style ?? (n.style = null));
  var f = cc(t);
  for (const I in n) {
    let _ = n[I];
    if (d && I === "value" && _ == null) {
      t.value = t.__value = "", c[I] = _;
      continue;
    }
    if (I === "class") {
      var m = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      Ws(t, m, _, r, e == null ? void 0 : e[la], n[la]), c[I] = _, c[la] = n[la];
      continue;
    }
    if (I === "style") {
      kt(t, _, e == null ? void 0 : e[ua], n[ua]), c[I] = _, c[ua] = n[ua];
      continue;
    }
    var h = c[I];
    if (!(_ === h && !(_ === void 0 && t.hasAttribute(I)))) {
      c[I] = _;
      var g = I[0] + I[1];
      if (g !== "$$")
        if (g === "on") {
          const E = {}, x = "$$" + I;
          let w = I.slice(2);
          var b = Mf(w);
          if (Of(w) && (w = w.slice(0, -7), E.capture = !0), !b && h) {
            if (_ != null) continue;
            t.removeEventListener(w, c[x], E), c[x] = null;
          }
          if (_ != null)
            if (b)
              t[`__${w}`] = _, hn([w]);
            else {
              let C = function(A) {
                c[I].call(this, A);
              };
              c[x] = js(w, t, C, E);
            }
          else b && (t[`__${w}`] = void 0);
        } else if (I === "style")
          Pr(t, I, _);
        else if (I === "autofocus")
          pf(
            /** @type {HTMLElement} */
            t,
            !!_
          );
        else if (!u && (I === "__value" || I === "value" && _ != null))
          t.value = t.__value = _;
        else if (I === "selected" && d)
          Kf(
            /** @type {HTMLOptionElement} */
            t,
            _
          );
        else {
          var y = I;
          l || (y = Pf(y));
          var S = y === "defaultValue" || y === "defaultChecked";
          if (_ == null && !u && !S)
            if (o[I] = null, y === "value" || y === "checked") {
              let E = (
                /** @type {HTMLInputElement} */
                t
              );
              const x = e === void 0;
              if (y === "value") {
                let w = E.defaultValue;
                E.removeAttribute(y), E.defaultValue = w, E.value = E.__value = x ? w : null;
              } else {
                let w = E.defaultChecked;
                E.removeAttribute(y), E.defaultChecked = w, E.checked = x ? w : !1;
              }
            } else
              t.removeAttribute(I);
          else S || f.includes(y) && (u || typeof _ != "string") ? (t[y] = _, y in o && (o[y] = Ht)) : typeof _ != "function" && Pr(t, y, _);
        }
    }
  }
  return c;
}
function ke(t, e, n = [], r = [], i, a = !1, o = !1) {
  Ou(n, r, (u) => {
    var l = void 0, c = {}, d = t.nodeName === "SELECT", v = !1;
    if (Fr(() => {
      var m = e(...u.map(s)), h = Yf(
        t,
        l,
        m,
        i,
        a,
        o
      );
      v && d && "value" in m && fo(
        /** @type {HTMLSelectElement} */
        t,
        m.value
      );
      for (let b of Object.getOwnPropertySymbols(c))
        m[b] || jt(c[b]);
      for (let b of Object.getOwnPropertySymbols(m)) {
        var g = m[b];
        b.description === Od && (!l || g !== l[b]) && (c[b] && jt(c[b]), c[b] = zt(() => jf(t, () => g))), h[b] = g;
      }
      l = h;
    }), d) {
      var f = (
        /** @type {HTMLSelectElement} */
        t
      );
      Br(() => {
        fo(
          f,
          /** @type {Record<string | symbol, any>} */
          l.value,
          !0
        ), sc(f);
      });
    }
    v = !0;
  });
}
function qs(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ?? (t.__attributes = {
      [lc]: t.nodeName.includes("-"),
      [uc]: t.namespaceURI === wd
    })
  );
}
var Sl = /* @__PURE__ */ new Map();
function cc(t) {
  var e = t.getAttribute("is") || t.nodeName, n = Sl.get(e);
  if (n) return n;
  Sl.set(e, n = []);
  for (var r, i = t, a = Element.prototype; a !== i; ) {
    r = pu(i);
    for (var o in r)
      r[o].set && n.push(o);
    i = Ds(i);
  }
  return n;
}
const Zf = () => performance.now(), fr = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (t) => requestAnimationFrame(t)
  ),
  now: () => Zf(),
  tasks: /* @__PURE__ */ new Set()
};
function dc() {
  const t = fr.now();
  fr.tasks.forEach((e) => {
    e.c(t) || (fr.tasks.delete(e), e.f());
  }), fr.tasks.size !== 0 && fr.tick(dc);
}
function Qf(t) {
  let e;
  return fr.tasks.size === 0 && fr.tick(dc), {
    promise: new Promise((n) => {
      fr.tasks.add(e = { c: t, f: n });
    }),
    abort() {
      fr.tasks.delete(e);
    }
  };
}
function Ga(t, e) {
  Ji(() => {
    t.dispatchEvent(new CustomEvent(e));
  });
}
function Jf(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const e = t.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (n) => n[0].toUpperCase() + n.slice(1)
  ).join("");
}
function Al(t) {
  const e = {}, n = t.split(";");
  for (const r of n) {
    const [i, a] = r.split(":");
    if (!i || a === void 0) break;
    const o = Jf(i.trim());
    e[o] = a.trim();
  }
  return e;
}
const $f = (t) => t;
function eh(t, e, n) {
  var r = (
    /** @type {EachItem} */
    li
  ), i, a, o, u = null;
  r.a ?? (r.a = {
    element: t,
    measure() {
      i = this.element.getBoundingClientRect();
    },
    apply() {
      if (o == null || o.abort(), a = this.element.getBoundingClientRect(), i.left !== a.left || i.right !== a.right || i.top !== a.top || i.bottom !== a.bottom) {
        const l = e()(this.element, { from: i, to: a }, n == null ? void 0 : n());
        o = vo(this.element, l, void 0, 1, () => {
          o == null || o.abort(), o = void 0;
        });
      }
    },
    fix() {
      if (!t.getAnimations().length) {
        var { position: l, width: c, height: d } = getComputedStyle(t);
        if (l !== "absolute" && l !== "fixed") {
          var v = (
            /** @type {HTMLElement | SVGElement} */
            t.style
          );
          u = {
            position: v.position,
            width: v.width,
            height: v.height,
            transform: v.transform
          }, v.position = "absolute", v.width = c, v.height = d;
          var f = t.getBoundingClientRect();
          if (i.left !== f.left || i.top !== f.top) {
            var m = `translate(${i.left - f.left}px, ${i.top - f.top}px)`;
            v.transform = v.transform ? `${v.transform} ${m}` : m;
          }
        }
      }
    },
    unfix() {
      if (u) {
        var l = (
          /** @type {HTMLElement | SVGElement} */
          t.style
        );
        l.position = u.position, l.width = u.width, l.height = u.height, l.transform = u.transform;
      }
    }
  }), r.a.element = t;
}
function ho(t, e, n, r) {
  var i = (t & 1) !== 0, a = (t & 2) !== 0, o = i && a, u = (t & 4) !== 0, l = o ? "both" : i ? "in" : "out", c, d = e.inert, v = e.style.overflow, f, m;
  function h() {
    return Ji(() => c ?? (c = n()(e, (r == null ? void 0 : r()) ?? /** @type {P} */
    {}, {
      direction: l
    })));
  }
  var g = {
    is_global: u,
    in() {
      var I;
      if (e.inert = d, !i) {
        m == null || m.abort(), (I = m == null ? void 0 : m.reset) == null || I.call(m);
        return;
      }
      a || f == null || f.abort(), Ga(e, "introstart"), f = vo(e, h(), m, 1, () => {
        Ga(e, "introend"), f == null || f.abort(), f = c = void 0, e.style.overflow = v;
      });
    },
    out(I) {
      if (!a) {
        I == null || I(), c = void 0;
        return;
      }
      e.inert = !0, Ga(e, "outrostart"), m = vo(e, h(), f, 0, () => {
        Ga(e, "outroend"), I == null || I();
      });
    },
    stop: () => {
      f == null || f.abort(), m == null || m.abort();
    }
  }, b = (
    /** @type {Effect} */
    Ge
  );
  if ((b.transitions ?? (b.transitions = [])).push(g), i && co) {
    var y = u;
    if (!y) {
      for (var S = (
        /** @type {Effect | null} */
        b.parent
      ); S && S.f & Ur; )
        for (; (S = S.parent) && !(S.f & Nr); )
          ;
      y = !S || (S.f & Lo) !== 0;
    }
    y && Br(() => {
      Bn(() => g.in());
    });
  }
}
function vo(t, e, n, r, i) {
  var a = r === 1;
  if (wi(e)) {
    var o, u = !1;
    return mr(() => {
      if (!u) {
        var b = e({ direction: a ? "in" : "out" });
        o = vo(t, b, n, r, i);
      }
    }), {
      abort: () => {
        u = !0, o == null || o.abort();
      },
      deactivate: () => o.deactivate(),
      reset: () => o.reset(),
      t: () => o.t()
    };
  }
  if (n == null || n.deactivate(), !(e != null && e.duration))
    return i(), {
      abort: pe,
      deactivate: pe,
      reset: pe,
      t: () => r
    };
  const { delay: l = 0, css: c, tick: d, easing: v = $f } = e;
  var f = [];
  if (a && n === void 0 && (d && d(0, 1), c)) {
    var m = Al(c(0, 1));
    f.push(m, m);
  }
  var h = () => 1 - r, g = t.animate(f, { duration: l, fill: "forwards" });
  return g.onfinish = () => {
    g.cancel();
    var b = (n == null ? void 0 : n.t()) ?? 1 - r;
    n == null || n.abort();
    var y = r - b, S = (
      /** @type {number} */
      e.duration * Math.abs(y)
    ), I = [];
    if (S > 0) {
      var _ = !1;
      if (c)
        for (var E = Math.ceil(S / 16.666666666666668), x = 0; x <= E; x += 1) {
          var w = b + y * v(x / E), C = Al(c(w, 1 - w));
          I.push(C), _ || (_ = C.overflow === "hidden");
        }
      _ && (t.style.overflow = "hidden"), h = () => {
        var A = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          g.currentTime
        );
        return b + y * v(A / S);
      }, d && Qf(() => {
        if (g.playState !== "running") return !1;
        var A = h();
        return d(A, 1 - A), !0;
      });
    }
    g = t.animate(I, { duration: S, fill: "forwards" }), g.onfinish = () => {
      h = () => r, d == null || d(r, 1 - r), i();
    };
  }, {
    abort: () => {
      g && (g.cancel(), g.effect = null, g.onfinish = pe);
    },
    deactivate: () => {
      i = pe;
    },
    reset: () => {
      r === 0 && (d == null || d(1, 0));
    },
    t: () => h()
  };
}
function Ca(t, e, n = e) {
  var r = /* @__PURE__ */ new WeakSet();
  Vs(t, "input", async (i) => {
    var a = i ? t.defaultValue : t.value;
    if (a = qo(t) ? zo(a) : a, n(a), ot !== null && r.add(ot), await Ju(), a !== (a = e())) {
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
  Bn(e) == null && t.value && (n(qo(t) ? zo(t.value) : t.value), ot !== null && r.add(ot)), Pa(() => {
    var i = e();
    if (t === document.activeElement) {
      var a = (
        /** @type {Batch} */
        $a ?? ot
      );
      if (r.has(a))
        return;
    }
    qo(t) && i === zo(t.value) || t.type === "date" && !i && !t.value || i !== t.value && (t.value = i ?? "");
  });
}
function th(t, e, n = e) {
  Vs(t, "change", (r) => {
    var i = r ? t.defaultChecked : t.checked;
    n(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  // If defaultChecked is set, then checked == defaultChecked
  Bn(e) == null && n(t.checked), Pa(() => {
    var r = e();
    t.checked = !!r;
  });
}
function qo(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function zo(t) {
  return t === "" ? null : +t;
}
function Cl(t, e) {
  return t === e || (t == null ? void 0 : t[Kn]) === e;
}
function Ee(t = {}, e, n, r) {
  return Br(() => {
    var i, a;
    return Pa(() => {
      i = a, a = (r == null ? void 0 : r()) || [], Bn(() => {
        t !== n(...a) && (e(t, ...a), i && Cl(n(...i), t) && e(null, ...i));
      });
    }), () => {
      mr(() => {
        a && Cl(n(...a), t) && e(null, ...a);
      });
    };
  }), t;
}
function nh(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    lt
  ), n = e.l.u;
  if (!n) return;
  let r = () => ec(e.s);
  if (t) {
    let i = 0, a = (
      /** @type {Record<string, any>} */
      {}
    );
    const o = /* @__PURE__ */ Ma(() => {
      let u = !1;
      const l = e.s;
      for (const c in l)
        l[c] !== a[c] && (a[c] = l[c], u = !0);
      return u && i++, i;
    });
    r = () => s(o);
  }
  n.b.length && Vu(() => {
    xl(e, r), so(n.b);
  }), Ce(() => {
    const i = Bn(() => n.m.map(Pd));
    return () => {
      for (const a of i)
        typeof a == "function" && a();
    };
  }), n.a.length && Ce(() => {
    xl(e, r), so(n.a);
  });
}
function xl(t, e) {
  if (t.l.s)
    for (const n of t.l.s) s(n);
  e();
}
function zs(t, e, n) {
  if (t == null)
    return e(void 0), n && n(void 0), pe;
  const r = Bn(
    () => t.subscribe(
      e,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const Ai = [];
function rh(t, e) {
  return {
    subscribe: tn(t, e).subscribe
  };
}
function tn(t, e = pe) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function i(u) {
    if (Us(t, u) && (t = u, n)) {
      const l = !Ai.length;
      for (const c of r)
        c[1](), Ai.push(c, t);
      if (l) {
        for (let c = 0; c < Ai.length; c += 2)
          Ai[c][0](Ai[c + 1]);
        Ai.length = 0;
      }
    }
  }
  function a(u) {
    i(u(
      /** @type {T} */
      t
    ));
  }
  function o(u, l = pe) {
    const c = [u, l];
    return r.add(c), r.size === 1 && (n = e(i, a) || pe), u(
      /** @type {T} */
      t
    ), () => {
      r.delete(c), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: a, subscribe: o };
}
function $i(t, e, n) {
  const r = !Array.isArray(t), i = r ? [t] : t;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = e.length < 2;
  return rh(n, (o, u) => {
    let l = !1;
    const c = [];
    let d = 0, v = pe;
    const f = () => {
      if (d)
        return;
      v();
      const h = e(r ? c[0] : c, o, u);
      a ? o(h) : v = typeof h == "function" ? h : pe;
    }, m = i.map(
      (h, g) => zs(
        h,
        (b) => {
          c[g] = b, d &= ~(1 << g), l && f();
        },
        () => {
          d |= 1 << g;
        }
      )
    );
    return l = !0, f(), function() {
      so(m), v(), l = !1;
    };
  });
}
function fc(t) {
  let e;
  return zs(t, (n) => e = n)(), e;
}
let ja = !1, ms = Symbol();
function Yn(t, e, n) {
  const r = n[e] ?? (n[e] = {
    store: null,
    source: /* @__PURE__ */ Du(void 0),
    unsubscribe: pe
  });
  if (r.store !== t && !(ms in n))
    if (r.unsubscribe(), r.store = t ?? null, t == null)
      r.source.v = void 0, r.unsubscribe = pe;
    else {
      var i = !0;
      r.unsubscribe = zs(t, (a) => {
        i ? r.source.v = a : K(r.source, a);
      }), i = !1;
    }
  return t && ms in n ? fc(t) : s(r.source);
}
function hi(t, e) {
  return t.set(e), e;
}
function yr() {
  const t = {};
  function e() {
    Mo(() => {
      for (var n in t)
        t[n].unsubscribe();
      oo(t, ms, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [t, e];
}
function ih(t) {
  var e = ja;
  try {
    return ja = !1, [t(), ja];
  } finally {
    ja = e;
  }
}
const ah = {
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
function Xe(t, e, n) {
  return new Proxy(
    { props: t, exclude: e },
    ah
  );
}
const oh = {
  get(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (wi(r) && (r = r()), typeof r == "object" && r !== null && e in r) return r[e];
    }
  },
  set(t, e, n) {
    let r = t.props.length;
    for (; r--; ) {
      let i = t.props[r];
      wi(i) && (i = i());
      const a = Rr(i, e);
      if (a && a.set)
        return a.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (wi(r) && (r = r()), typeof r == "object" && r !== null && e in r) {
        const i = Rr(r, e);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(t, e) {
    if (e === Kn || e === yu) return !1;
    for (let n of t.props)
      if (wi(n) && (n = n()), n != null && e in n) return !0;
    return !1;
  },
  ownKeys(t) {
    const e = [];
    for (let n of t.props)
      if (wi(n) && (n = n()), !!n) {
        for (const r in n)
          e.includes(r) || e.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          e.includes(r) || e.push(r);
      }
    return e;
  }
};
function nt(...t) {
  return new Proxy({ props: t }, oh);
}
function p(t, e, n, r) {
  var I;
  var i = !Qi || (n & 2) !== 0, a = (n & 8) !== 0, o = (n & 16) !== 0, u = (
    /** @type {V} */
    r
  ), l = !0, c = () => (l && (l = !1, u = o ? Bn(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), u), d;
  if (a) {
    var v = Kn in t || yu in t;
    d = ((I = Rr(t, e)) == null ? void 0 : I.set) ?? (v && e in t ? (_) => t[e] = _ : void 0);
  }
  var f, m = !1;
  a ? [f, m] = ih(() => (
    /** @type {V} */
    t[e]
  )) : f = /** @type {V} */
  t[e], f === void 0 && r !== void 0 && (f = c(), d && (i && Gd(), d(f)));
  var h;
  if (i ? h = () => {
    var _ = (
      /** @type {V} */
      t[e]
    );
    return _ === void 0 ? c() : (l = !0, _);
  } : h = () => {
    var _ = (
      /** @type {V} */
      t[e]
    );
    return _ !== void 0 && (u = /** @type {V} */
    void 0), _ === void 0 ? u : _;
  }, i && !(n & 4))
    return h;
  if (d) {
    var g = t.$$legacy;
    return (
      /** @type {() => V} */
      function(_, E) {
        return arguments.length > 0 ? ((!i || !E || g || m) && d(E ? h() : _), _) : h();
      }
    );
  }
  var b = !1, y = (n & 1 ? Ma : ks)(() => (b = !1, h()));
  a && s(y);
  var S = (
    /** @type {Effect} */
    Ge
  );
  return (
    /** @type {() => V} */
    function(_, E) {
      if (arguments.length > 0) {
        const x = E ? s(y) : i && a ? ue(_) : _;
        return K(y, x), b = !0, u !== void 0 && (u = x), _;
      }
      return gi && b || S.f & mi ? y.v : s(y);
    }
  );
}
const sh = "5";
var mu;
typeof window < "u" && ((mu = window.__svelte ?? (window.__svelte = {})).v ?? (mu.v = /* @__PURE__ */ new Set())).add(sh);
function lh(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var uh = function(e) {
  return ch(e) && !dh(e);
};
function ch(t) {
  return !!t && typeof t == "object";
}
function dh(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || vh(t);
}
var fh = typeof Symbol == "function" && Symbol.for, hh = fh ? Symbol.for("react.element") : 60103;
function vh(t) {
  return t.$$typeof === hh;
}
function mh(t) {
  return Array.isArray(t) ? [] : {};
}
function xa(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? zi(mh(t), t, e) : t;
}
function gh(t, e, n) {
  return t.concat(e).map(function(r) {
    return xa(r, n);
  });
}
function ph(t, e) {
  if (!e.customMerge)
    return zi;
  var n = e.customMerge(t);
  return typeof n == "function" ? n : zi;
}
function bh(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function Tl(t) {
  return Object.keys(t).concat(bh(t));
}
function hc(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function _h(t, e) {
  return hc(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function yh(t, e, n) {
  var r = {};
  return n.isMergeableObject(t) && Tl(t).forEach(function(i) {
    r[i] = xa(t[i], n);
  }), Tl(e).forEach(function(i) {
    _h(t, i) || (hc(t, i) && n.isMergeableObject(e[i]) ? r[i] = ph(i, n)(t[i], e[i], n) : r[i] = xa(e[i], n));
  }), r;
}
function zi(t, e, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || gh, n.isMergeableObject = n.isMergeableObject || uh, n.cloneUnlessOtherwiseSpecified = xa;
  var r = Array.isArray(e), i = Array.isArray(t), a = r === i;
  return a ? r ? n.arrayMerge(t, e, n) : yh(t, e, n) : xa(e, n);
}
zi.all = function(e, n) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(r, i) {
    return zi(r, i, n);
  }, {});
};
var Ih = zi, Eh = Ih;
const Sh = /* @__PURE__ */ lh(Eh);
var gs = function(t, e) {
  return gs = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, gs(t, e);
};
function We(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  gs(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
var le = function() {
  return le = Object.assign || function(e) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, le.apply(this, arguments);
};
function Ah(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  return n;
}
function vc(t, e, n, r) {
  function i(a) {
    return a instanceof n ? a : new n(function(o) {
      o(a);
    });
  }
  return new (n || (n = Promise))(function(a, o) {
    function u(d) {
      try {
        c(r.next(d));
      } catch (v) {
        o(v);
      }
    }
    function l(d) {
      try {
        c(r.throw(d));
      } catch (v) {
        o(v);
      }
    }
    function c(d) {
      d.done ? a(d.value) : i(d.value).then(u, l);
    }
    c((r = r.apply(t, e || [])).next());
  });
}
function Xs(t, e) {
  var n = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, i, a, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return o.next = u(0), o.throw = u(1), o.return = u(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function u(c) {
    return function(d) {
      return l([c, d]);
    };
  }
  function l(c) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, c[0] && (n = 0)), n; ) try {
      if (r = 1, i && (a = c[0] & 2 ? i.return : c[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, c[1])).done) return a;
      switch (i = 0, a && (c = [c[0] & 2, a.value]), c[0]) {
        case 0:
        case 1:
          a = c;
          break;
        case 4:
          return n.label++, { value: c[1], done: !1 };
        case 5:
          n.label++, i = c[1], c = [0];
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
      c = [6, d], i = 0;
    } finally {
      r = a = 0;
    }
    if (c[0] & 5) throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function Ut(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, n = e && t[e], r = 0;
  if (n) return n.call(t);
  if (t && typeof t.length == "number") return {
    next: function() {
      return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function gr(t, e) {
  var n = typeof Symbol == "function" && t[Symbol.iterator];
  if (!n) return t;
  var r = n.call(t), i, a = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = r.next()).done; ) a.push(i.value);
  } catch (u) {
    o = { error: u };
  } finally {
    try {
      i && !i.done && (n = r.return) && n.call(r);
    } finally {
      if (o) throw o.error;
    }
  }
  return a;
}
function Zn(t, e, n) {
  if (n || arguments.length === 2) for (var r = 0, i = e.length, a; r < i; r++)
    (a || !(r in e)) && (a || (a = Array.prototype.slice.call(e, 0, r)), a[r] = e[r]);
  return t.concat(a || Array.prototype.slice.call(e));
}
function Di(t) {
  return this instanceof Di ? (this.v = t, this) : new Di(t);
}
function Ch(t, e, n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(t, e || []), i, a = [];
  return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), u("next"), u("throw"), u("return", o), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function o(m) {
    return function(h) {
      return Promise.resolve(h).then(m, v);
    };
  }
  function u(m, h) {
    r[m] && (i[m] = function(g) {
      return new Promise(function(b, y) {
        a.push([m, g, b, y]) > 1 || l(m, g);
      });
    }, h && (i[m] = h(i[m])));
  }
  function l(m, h) {
    try {
      c(r[m](h));
    } catch (g) {
      f(a[0][3], g);
    }
  }
  function c(m) {
    m.value instanceof Di ? Promise.resolve(m.value.v).then(d, v) : f(a[0][2], m);
  }
  function d(m) {
    l("next", m);
  }
  function v(m) {
    l("throw", m);
  }
  function f(m, h) {
    m(h), a.shift(), a.length && l(a[0][0], a[0][1]);
  }
}
function xh(t) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], n;
  return e ? e.call(t) : (t = typeof Ut == "function" ? Ut(t) : t[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n);
  function r(a) {
    n[a] = t[a] && function(o) {
      return new Promise(function(u, l) {
        o = t[a](o), i(u, l, o.done, o.value);
      });
    };
  }
  function i(a, o, u, l) {
    Promise.resolve(l).then(function(c) {
      a({ value: c, done: u });
    }, o);
  }
}
function Xo(t, e) {
  var n = e && e.cache ? e.cache : Dh, r = e && e.serializer ? e.serializer : Rh, i = e && e.strategy ? e.strategy : Lh;
  return i(t, {
    cache: n,
    serializer: r
  });
}
function Th(t) {
  return t == null || typeof t == "number" || typeof t == "boolean";
}
function wh(t, e, n, r) {
  var i = Th(r) ? r : n(r), a = e.get(i);
  return typeof a > "u" && (a = t.call(this, r), e.set(i, a)), a;
}
function mc(t, e, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = e.get(i);
  return typeof a > "u" && (a = t.apply(this, r), e.set(i, a)), a;
}
function gc(t, e, n, r, i) {
  return n.bind(e, t, r, i);
}
function Lh(t, e) {
  var n = t.length === 1 ? wh : mc;
  return gc(t, this, n, e.cache.create(), e.serializer);
}
function Oh(t, e) {
  return gc(t, this, mc, e.cache.create(), e.serializer);
}
var Rh = function() {
  return JSON.stringify(arguments);
}, Mh = (
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
), Dh = {
  create: function() {
    return new Mh();
  }
}, Ko = {
  variadic: Oh
}, Ye;
(function(t) {
  t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", t[t.INVALID_TAG = 23] = "INVALID_TAG", t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(Ye || (Ye = {}));
var mt;
(function(t) {
  t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag";
})(mt || (mt = {}));
var Xi;
(function(t) {
  t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime";
})(Xi || (Xi = {}));
function wl(t) {
  return t.type === mt.literal;
}
function Ph(t) {
  return t.type === mt.argument;
}
function pc(t) {
  return t.type === mt.number;
}
function bc(t) {
  return t.type === mt.date;
}
function _c(t) {
  return t.type === mt.time;
}
function yc(t) {
  return t.type === mt.select;
}
function Ic(t) {
  return t.type === mt.plural;
}
function Nh(t) {
  return t.type === mt.pound;
}
function Ec(t) {
  return t.type === mt.tag;
}
function Sc(t) {
  return !!(t && typeof t == "object" && t.type === Xi.number);
}
function ps(t) {
  return !!(t && typeof t == "object" && t.type === Xi.dateTime);
}
var Ac = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Hh = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Uh(t) {
  var e = {};
  return t.replace(Hh, function(n) {
    var r = n.length;
    switch (n[0]) {
      case "G":
        e.era = r === 4 ? "long" : r === 5 ? "narrow" : "short";
        break;
      case "y":
        e.year = r === 2 ? "2-digit" : "numeric";
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
        e.month = ["numeric", "2-digit", "short", "long", "narrow"][r - 1];
        break;
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        e.day = ["numeric", "2-digit"][r - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      case "E":
        e.weekday = r === 4 ? "long" : r === 5 ? "narrow" : "short";
        break;
      case "e":
        if (r < 4)
          throw new RangeError("`e..eee` (weekday) patterns are not supported");
        e.weekday = ["short", "long", "narrow", "short"][r - 4];
        break;
      case "c":
        if (r < 4)
          throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        e.weekday = ["short", "long", "narrow", "short"][r - 4];
        break;
      case "a":
        e.hour12 = !0;
        break;
      case "b":
      case "B":
        throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
      case "h":
        e.hourCycle = "h12", e.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "H":
        e.hourCycle = "h23", e.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "K":
        e.hourCycle = "h11", e.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "k":
        e.hourCycle = "h24", e.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      case "m":
        e.minute = ["numeric", "2-digit"][r - 1];
        break;
      case "s":
        e.second = ["numeric", "2-digit"][r - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
      case "z":
        e.timeZoneName = r < 4 ? "short" : "long";
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
var kh = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Bh(t) {
  if (t.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var e = t.split(kh).filter(function(f) {
    return f.length > 0;
  }), n = [], r = 0, i = e; r < i.length; r++) {
    var a = i[r], o = a.split("/");
    if (o.length === 0)
      throw new Error("Invalid number skeleton");
    for (var u = o[0], l = o.slice(1), c = 0, d = l; c < d.length; c++) {
      var v = d[c];
      if (v.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: u, options: l });
  }
  return n;
}
function Fh(t) {
  return t.replace(/^(.*?)-/, "");
}
var Ll = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Cc = /^(@+)?(\+|#+)?[rs]?$/g, Vh = /(\*)(0+)|(#+)(0+)|(0+)/g, xc = /^(0+)$/;
function Ol(t) {
  var e = {};
  return t[t.length - 1] === "r" ? e.roundingPriority = "morePrecision" : t[t.length - 1] === "s" && (e.roundingPriority = "lessPrecision"), t.replace(Cc, function(n, r, i) {
    return typeof i != "string" ? (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length) : i === "+" ? e.minimumSignificantDigits = r.length : r[0] === "#" ? e.maximumSignificantDigits = r.length : (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), e;
}
function Tc(t) {
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
function Gh(t) {
  var e;
  if (t[0] === "E" && t[1] === "E" ? (e = {
    notation: "engineering"
  }, t = t.slice(2)) : t[0] === "E" && (e = {
    notation: "scientific"
  }, t = t.slice(1)), e) {
    var n = t.slice(0, 2);
    if (n === "+!" ? (e.signDisplay = "always", t = t.slice(2)) : n === "+?" && (e.signDisplay = "exceptZero", t = t.slice(2)), !xc.test(t))
      throw new Error("Malformed concise eng/scientific notation");
    e.minimumIntegerDigits = t.length;
  }
  return e;
}
function Rl(t) {
  var e = {}, n = Tc(t);
  return n || e;
}
function jh(t) {
  for (var e = {}, n = 0, r = t; n < r.length; n++) {
    var i = r[n];
    switch (i.stem) {
      case "percent":
      case "%":
        e.style = "percent";
        continue;
      case "%x100":
        e.style = "percent", e.scale = 100;
        continue;
      case "currency":
        e.style = "currency", e.currency = i.options[0];
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
        e.style = "unit", e.unit = Fh(i.options[0]);
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
        e = le(le(le({}, e), { notation: "scientific" }), i.options.reduce(function(l, c) {
          return le(le({}, l), Rl(c));
        }, {}));
        continue;
      case "engineering":
        e = le(le(le({}, e), { notation: "engineering" }), i.options.reduce(function(l, c) {
          return le(le({}, l), Rl(c));
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
        e.scale = parseFloat(i.options[0]);
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
        if (i.options.length > 1)
          throw new RangeError("integer-width stems only accept a single optional option");
        i.options[0].replace(Vh, function(l, c, d, v, f, m) {
          if (c)
            e.minimumIntegerDigits = d.length;
          else {
            if (v && f)
              throw new Error("We currently do not support maximum integer digits");
            if (m)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (xc.test(i.stem)) {
      e.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (Ll.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(Ll, function(l, c, d, v, f, m) {
        return d === "*" ? e.minimumFractionDigits = c.length : v && v[0] === "#" ? e.maximumFractionDigits = v.length : f && m ? (e.minimumFractionDigits = f.length, e.maximumFractionDigits = f.length + m.length) : (e.minimumFractionDigits = c.length, e.maximumFractionDigits = c.length), "";
      });
      var a = i.options[0];
      a === "w" ? e = le(le({}, e), { trailingZeroDisplay: "stripIfInteger" }) : a && (e = le(le({}, e), Ol(a)));
      continue;
    }
    if (Cc.test(i.stem)) {
      e = le(le({}, e), Ol(i.stem));
      continue;
    }
    var o = Tc(i.stem);
    o && (e = le(le({}, e), o));
    var u = Gh(i.stem);
    u && (e = le(le({}, e), u));
  }
  return e;
}
var Wa = {
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
function Wh(t, e) {
  for (var n = "", r = 0; r < t.length; r++) {
    var i = t.charAt(r);
    if (i === "j") {
      for (var a = 0; r + 1 < t.length && t.charAt(r + 1) === i; )
        a++, r++;
      var o = 1 + (a & 1), u = a < 2 ? 1 : 3 + (a >> 1), l = "a", c = qh(e);
      for ((c == "H" || c == "k") && (u = 0); u-- > 0; )
        n += l;
      for (; o-- > 0; )
        n = c + n;
    } else i === "J" ? n += "H" : n += i;
  }
  return n;
}
function qh(t) {
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
  var n = t.language, r;
  n !== "root" && (r = t.maximize().region);
  var i = Wa[r || ""] || Wa[n || ""] || Wa["".concat(n, "-001")] || Wa["001"];
  return i[0];
}
var Yo, zh = new RegExp("^".concat(Ac.source, "*")), Xh = new RegExp("".concat(Ac.source, "*$"));
function Ze(t, e) {
  return { start: t, end: e };
}
var Kh = !!String.prototype.startsWith && "_a".startsWith("a", 1), Yh = !!String.fromCodePoint, Zh = !!Object.fromEntries, Qh = !!String.prototype.codePointAt, Jh = !!String.prototype.trimStart, $h = !!String.prototype.trimEnd, ev = !!Number.isSafeInteger, tv = ev ? Number.isSafeInteger : function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991;
}, bs = !0;
try {
  var nv = Lc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  bs = ((Yo = nv.exec("a")) === null || Yo === void 0 ? void 0 : Yo[0]) === "a";
} catch {
  bs = !1;
}
var Ml = Kh ? (
  // Native
  function(e, n, r) {
    return e.startsWith(n, r);
  }
) : (
  // For IE11
  function(e, n, r) {
    return e.slice(r, r + n.length) === n;
  }
), _s = Yh ? String.fromCodePoint : (
  // IE11
  function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    for (var r = "", i = e.length, a = 0, o; i > a; ) {
      if (o = e[a++], o > 1114111)
        throw RangeError(o + " is not a valid code point");
      r += o < 65536 ? String.fromCharCode(o) : String.fromCharCode(((o -= 65536) >> 10) + 55296, o % 1024 + 56320);
    }
    return r;
  }
), Dl = (
  // native
  Zh ? Object.fromEntries : (
    // Ponyfill
    function(e) {
      for (var n = {}, r = 0, i = e; r < i.length; r++) {
        var a = i[r], o = a[0], u = a[1];
        n[o] = u;
      }
      return n;
    }
  )
), wc = Qh ? (
  // Native
  function(e, n) {
    return e.codePointAt(n);
  }
) : (
  // IE 11
  function(e, n) {
    var r = e.length;
    if (!(n < 0 || n >= r)) {
      var i = e.charCodeAt(n), a;
      return i < 55296 || i > 56319 || n + 1 === r || (a = e.charCodeAt(n + 1)) < 56320 || a > 57343 ? i : (i - 55296 << 10) + (a - 56320) + 65536;
    }
  }
), rv = Jh ? (
  // Native
  function(e) {
    return e.trimStart();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(zh, "");
  }
), iv = $h ? (
  // Native
  function(e) {
    return e.trimEnd();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(Xh, "");
  }
);
function Lc(t, e) {
  return new RegExp(t, e);
}
var ys;
if (bs) {
  var Pl = Lc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  ys = function(e, n) {
    var r;
    Pl.lastIndex = n;
    var i = Pl.exec(e);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  ys = function(e, n) {
    for (var r = []; ; ) {
      var i = wc(e, n);
      if (i === void 0 || Oc(i) || lv(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return _s.apply(void 0, r);
  };
var av = (
  /** @class */
  function() {
    function t(e, n) {
      n === void 0 && (n = {}), this.message = e, this.position = { offset: 0, line: 1, column: 1 }, this.ignoreTag = !!n.ignoreTag, this.locale = n.locale, this.requiresOtherClause = !!n.requiresOtherClause, this.shouldParseSkeletons = !!n.shouldParseSkeletons;
    }
    return t.prototype.parse = function() {
      if (this.offset() !== 0)
        throw Error("parser can only be used once");
      return this.parseMessage(0, "", !1);
    }, t.prototype.parseMessage = function(e, n, r) {
      for (var i = []; !this.isEOF(); ) {
        var a = this.char();
        if (a === 123) {
          var o = this.parseArgument(e, r);
          if (o.err)
            return o;
          i.push(o.val);
        } else {
          if (a === 125 && e > 0)
            break;
          if (a === 35 && (n === "plural" || n === "selectordinal")) {
            var u = this.clonePosition();
            this.bump(), i.push({
              type: mt.pound,
              location: Ze(u, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(Ye.UNMATCHED_CLOSING_TAG, Ze(this.clonePosition(), this.clonePosition()));
          } else if (a === 60 && !this.ignoreTag && Is(this.peek() || 0)) {
            var o = this.parseTag(e, n);
            if (o.err)
              return o;
            i.push(o.val);
          } else {
            var o = this.parseLiteral(e, n);
            if (o.err)
              return o;
            i.push(o.val);
          }
        }
      }
      return { val: i, err: null };
    }, t.prototype.parseTag = function(e, n) {
      var r = this.clonePosition();
      this.bump();
      var i = this.parseTagName();
      if (this.bumpSpace(), this.bumpIf("/>"))
        return {
          val: {
            type: mt.literal,
            value: "<".concat(i, "/>"),
            location: Ze(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var a = this.parseMessage(e + 1, n, !0);
        if (a.err)
          return a;
        var o = a.val, u = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !Is(this.char()))
            return this.error(Ye.INVALID_TAG, Ze(u, this.clonePosition()));
          var l = this.clonePosition(), c = this.parseTagName();
          return i !== c ? this.error(Ye.UNMATCHED_CLOSING_TAG, Ze(l, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: mt.tag,
              value: i,
              children: o,
              location: Ze(r, this.clonePosition())
            },
            err: null
          } : this.error(Ye.INVALID_TAG, Ze(u, this.clonePosition())));
        } else
          return this.error(Ye.UNCLOSED_TAG, Ze(r, this.clonePosition()));
      } else
        return this.error(Ye.INVALID_TAG, Ze(r, this.clonePosition()));
    }, t.prototype.parseTagName = function() {
      var e = this.offset();
      for (this.bump(); !this.isEOF() && sv(this.char()); )
        this.bump();
      return this.message.slice(e, this.offset());
    }, t.prototype.parseLiteral = function(e, n) {
      for (var r = this.clonePosition(), i = ""; ; ) {
        var a = this.tryParseQuote(n);
        if (a) {
          i += a;
          continue;
        }
        var o = this.tryParseUnquoted(e, n);
        if (o) {
          i += o;
          continue;
        }
        var u = this.tryParseLeftAngleBracket();
        if (u) {
          i += u;
          continue;
        }
        break;
      }
      var l = Ze(r, this.clonePosition());
      return {
        val: { type: mt.literal, value: i, location: l },
        err: null
      };
    }, t.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !ov(this.peek() || 0)) ? (this.bump(), "<") : null;
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
        var r = this.char();
        if (r === 39)
          if (this.peek() === 39)
            n.push(39), this.bump();
          else {
            this.bump();
            break;
          }
        else
          n.push(r);
        this.bump();
      }
      return _s.apply(void 0, n);
    }, t.prototype.tryParseUnquoted = function(e, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && e > 0 ? null : (this.bump(), _s(r));
    }, t.prototype.parseArgument = function(e, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(Ye.EXPECT_ARGUMENT_CLOSING_BRACE, Ze(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(Ye.EMPTY_ARGUMENT, Ze(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(Ye.MALFORMED_ARGUMENT, Ze(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(Ye.EXPECT_ARGUMENT_CLOSING_BRACE, Ze(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: mt.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: Ze(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Ye.EXPECT_ARGUMENT_CLOSING_BRACE, Ze(r, this.clonePosition())) : this.parseArgumentOptions(e, n, i, r);
        default:
          return this.error(Ye.MALFORMED_ARGUMENT, Ze(r, this.clonePosition()));
      }
    }, t.prototype.parseIdentifierIfPossible = function() {
      var e = this.clonePosition(), n = this.offset(), r = ys(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var a = this.clonePosition(), o = Ze(e, a);
      return { value: r, location: o };
    }, t.prototype.parseArgumentOptions = function(e, n, r, i) {
      var a, o = this.clonePosition(), u = this.parseIdentifierIfPossible().value, l = this.clonePosition();
      switch (u) {
        case "":
          return this.error(Ye.EXPECT_ARGUMENT_TYPE, Ze(o, l));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var c = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var d = this.clonePosition(), v = this.parseSimpleArgStyleIfPossible();
            if (v.err)
              return v;
            var f = iv(v.val);
            if (f.length === 0)
              return this.error(Ye.EXPECT_ARGUMENT_STYLE, Ze(this.clonePosition(), this.clonePosition()));
            var m = Ze(d, this.clonePosition());
            c = { style: f, styleLocation: m };
          }
          var h = this.tryParseArgumentClose(i);
          if (h.err)
            return h;
          var g = Ze(i, this.clonePosition());
          if (c && Ml(c == null ? void 0 : c.style, "::", 0)) {
            var b = rv(c.style.slice(2));
            if (u === "number") {
              var v = this.parseNumberSkeletonFromString(b, c.styleLocation);
              return v.err ? v : {
                val: { type: mt.number, value: r, location: g, style: v.val },
                err: null
              };
            } else {
              if (b.length === 0)
                return this.error(Ye.EXPECT_DATE_TIME_SKELETON, g);
              var y = b;
              this.locale && (y = Wh(b, this.locale));
              var f = {
                type: Xi.dateTime,
                pattern: y,
                location: c.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Uh(y) : {}
              }, S = u === "date" ? mt.date : mt.time;
              return {
                val: { type: S, value: r, location: g, style: f },
                err: null
              };
            }
          }
          return {
            val: {
              type: u === "number" ? mt.number : u === "date" ? mt.date : mt.time,
              value: r,
              location: g,
              style: (a = c == null ? void 0 : c.style) !== null && a !== void 0 ? a : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var I = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(Ye.EXPECT_SELECT_ARGUMENT_OPTIONS, Ze(I, le({}, I)));
          this.bumpSpace();
          var _ = this.parseIdentifierIfPossible(), E = 0;
          if (u !== "select" && _.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(Ye.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Ze(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var v = this.tryParseDecimalInteger(Ye.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Ye.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (v.err)
              return v;
            this.bumpSpace(), _ = this.parseIdentifierIfPossible(), E = v.val;
          }
          var x = this.tryParsePluralOrSelectOptions(e, u, n, _);
          if (x.err)
            return x;
          var h = this.tryParseArgumentClose(i);
          if (h.err)
            return h;
          var w = Ze(i, this.clonePosition());
          return u === "select" ? {
            val: {
              type: mt.select,
              value: r,
              options: Dl(x.val),
              location: w
            },
            err: null
          } : {
            val: {
              type: mt.plural,
              value: r,
              options: Dl(x.val),
              offset: E,
              pluralType: u === "plural" ? "cardinal" : "ordinal",
              location: w
            },
            err: null
          };
        }
        default:
          return this.error(Ye.INVALID_ARGUMENT_TYPE, Ze(o, l));
      }
    }, t.prototype.tryParseArgumentClose = function(e) {
      return this.isEOF() || this.char() !== 125 ? this.error(Ye.EXPECT_ARGUMENT_CLOSING_BRACE, Ze(e, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, t.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var e = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(Ye.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Ze(i, this.clonePosition()));
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
      var r = [];
      try {
        r = Bh(e);
      } catch {
        return this.error(Ye.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: Xi.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? jh(r) : {}
        },
        err: null
      };
    }, t.prototype.tryParsePluralOrSelectOptions = function(e, n, r, i) {
      for (var a, o = !1, u = [], l = /* @__PURE__ */ new Set(), c = i.value, d = i.location; ; ) {
        if (c.length === 0) {
          var v = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var f = this.tryParseDecimalInteger(Ye.EXPECT_PLURAL_ARGUMENT_SELECTOR, Ye.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (f.err)
              return f;
            d = Ze(v, this.clonePosition()), c = this.message.slice(v.offset, this.offset());
          } else
            break;
        }
        if (l.has(c))
          return this.error(n === "select" ? Ye.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Ye.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, d);
        c === "other" && (o = !0), this.bumpSpace();
        var m = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? Ye.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Ye.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Ze(this.clonePosition(), this.clonePosition()));
        var h = this.parseMessage(e + 1, n, r);
        if (h.err)
          return h;
        var g = this.tryParseArgumentClose(m);
        if (g.err)
          return g;
        u.push([
          c,
          {
            value: h.val,
            location: Ze(m, this.clonePosition())
          }
        ]), l.add(c), this.bumpSpace(), a = this.parseIdentifierIfPossible(), c = a.value, d = a.location;
      }
      return u.length === 0 ? this.error(n === "select" ? Ye.EXPECT_SELECT_ARGUMENT_SELECTOR : Ye.EXPECT_PLURAL_ARGUMENT_SELECTOR, Ze(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(Ye.MISSING_OTHER_CLAUSE, Ze(this.clonePosition(), this.clonePosition())) : { val: u, err: null };
    }, t.prototype.tryParseDecimalInteger = function(e, n) {
      var r = 1, i = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (r = -1);
      for (var a = !1, o = 0; !this.isEOF(); ) {
        var u = this.char();
        if (u >= 48 && u <= 57)
          a = !0, o = o * 10 + (u - 48), this.bump();
        else
          break;
      }
      var l = Ze(i, this.clonePosition());
      return a ? (o *= r, tv(o) ? { val: o, err: null } : this.error(n, l)) : this.error(e, l);
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
      var n = wc(this.message, e);
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
      if (Ml(this.message, e, this.offset())) {
        for (var n = 0; n < e.length; n++)
          this.bump();
        return !0;
      }
      return !1;
    }, t.prototype.bumpUntil = function(e) {
      var n = this.offset(), r = this.message.indexOf(e, n);
      return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1);
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
      for (; !this.isEOF() && Oc(this.char()); )
        this.bump();
    }, t.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var e = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (e >= 65536 ? 2 : 1));
      return r ?? null;
    }, t;
  }()
);
function Is(t) {
  return t >= 97 && t <= 122 || t >= 65 && t <= 90;
}
function ov(t) {
  return Is(t) || t === 47;
}
function sv(t) {
  return t === 45 || t === 46 || t >= 48 && t <= 57 || t === 95 || t >= 97 && t <= 122 || t >= 65 && t <= 90 || t == 183 || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039;
}
function Oc(t) {
  return t >= 9 && t <= 13 || t === 32 || t === 133 || t >= 8206 && t <= 8207 || t === 8232 || t === 8233;
}
function lv(t) {
  return t >= 33 && t <= 35 || t === 36 || t >= 37 && t <= 39 || t === 40 || t === 41 || t === 42 || t === 43 || t === 44 || t === 45 || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || t === 91 || t === 92 || t === 93 || t === 94 || t === 96 || t === 123 || t === 124 || t === 125 || t === 126 || t === 161 || t >= 162 && t <= 165 || t === 166 || t === 167 || t === 169 || t === 171 || t === 172 || t === 174 || t === 176 || t === 177 || t === 182 || t === 187 || t === 191 || t === 215 || t === 247 || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || t === 8216 || t === 8217 || t === 8218 || t >= 8219 && t <= 8220 || t === 8221 || t === 8222 || t === 8223 || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || t === 8249 || t === 8250 || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || t === 8260 || t === 8261 || t === 8262 || t >= 8263 && t <= 8273 || t === 8274 || t === 8275 || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || t === 8608 || t >= 8609 && t <= 8610 || t === 8611 || t >= 8612 && t <= 8613 || t === 8614 || t >= 8615 && t <= 8621 || t === 8622 || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || t === 8658 || t === 8659 || t === 8660 || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || t === 8968 || t === 8969 || t === 8970 || t === 8971 || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9e3 || t === 9001 || t === 9002 || t >= 9003 && t <= 9083 || t === 9084 || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || t === 9655 || t >= 9656 && t <= 9664 || t === 9665 || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || t === 9839 || t >= 9840 && t <= 10087 || t === 10088 || t === 10089 || t === 10090 || t === 10091 || t === 10092 || t === 10093 || t === 10094 || t === 10095 || t === 10096 || t === 10097 || t === 10098 || t === 10099 || t === 10100 || t === 10101 || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || t === 10181 || t === 10182 || t >= 10183 && t <= 10213 || t === 10214 || t === 10215 || t === 10216 || t === 10217 || t === 10218 || t === 10219 || t === 10220 || t === 10221 || t === 10222 || t === 10223 || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || t === 10627 || t === 10628 || t === 10629 || t === 10630 || t === 10631 || t === 10632 || t === 10633 || t === 10634 || t === 10635 || t === 10636 || t === 10637 || t === 10638 || t === 10639 || t === 10640 || t === 10641 || t === 10642 || t === 10643 || t === 10644 || t === 10645 || t === 10646 || t === 10647 || t === 10648 || t >= 10649 && t <= 10711 || t === 10712 || t === 10713 || t === 10714 || t === 10715 || t >= 10716 && t <= 10747 || t === 10748 || t === 10749 || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || t === 11158 || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || t === 11778 || t === 11779 || t === 11780 || t === 11781 || t >= 11782 && t <= 11784 || t === 11785 || t === 11786 || t === 11787 || t === 11788 || t === 11789 || t >= 11790 && t <= 11798 || t === 11799 || t >= 11800 && t <= 11801 || t === 11802 || t === 11803 || t === 11804 || t === 11805 || t >= 11806 && t <= 11807 || t === 11808 || t === 11809 || t === 11810 || t === 11811 || t === 11812 || t === 11813 || t === 11814 || t === 11815 || t === 11816 || t === 11817 || t >= 11818 && t <= 11822 || t === 11823 || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || t === 11840 || t === 11841 || t === 11842 || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || t === 11858 || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || t === 12296 || t === 12297 || t === 12298 || t === 12299 || t === 12300 || t === 12301 || t === 12302 || t === 12303 || t === 12304 || t === 12305 || t >= 12306 && t <= 12307 || t === 12308 || t === 12309 || t === 12310 || t === 12311 || t === 12312 || t === 12313 || t === 12314 || t === 12315 || t === 12316 || t === 12317 || t >= 12318 && t <= 12319 || t === 12320 || t === 12336 || t === 64830 || t === 64831 || t >= 65093 && t <= 65094;
}
function Es(t) {
  t.forEach(function(e) {
    if (delete e.location, yc(e) || Ic(e))
      for (var n in e.options)
        delete e.options[n].location, Es(e.options[n].value);
    else pc(e) && Sc(e.style) || (bc(e) || _c(e)) && ps(e.style) ? delete e.style.location : Ec(e) && Es(e.children);
  });
}
function uv(t, e) {
  e === void 0 && (e = {}), e = le({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e);
  var n = new av(t, e).parse();
  if (n.err) {
    var r = SyntaxError(Ye[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return e != null && e.captureLocation || Es(n.val), n.val;
}
var Ki;
(function(t) {
  t.MISSING_VALUE = "MISSING_VALUE", t.INVALID_VALUE = "INVALID_VALUE", t.MISSING_INTL_API = "MISSING_INTL_API";
})(Ki || (Ki = {}));
var No = (
  /** @class */
  function(t) {
    We(e, t);
    function e(n, r, i) {
      var a = t.call(this, n) || this;
      return a.code = r, a.originalMessage = i, a;
    }
    return e.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, e;
  }(Error)
), Nl = (
  /** @class */
  function(t) {
    We(e, t);
    function e(n, r, i, a) {
      return t.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), Ki.INVALID_VALUE, a) || this;
    }
    return e;
  }(No)
), cv = (
  /** @class */
  function(t) {
    We(e, t);
    function e(n, r, i) {
      return t.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), Ki.INVALID_VALUE, i) || this;
    }
    return e;
  }(No)
), dv = (
  /** @class */
  function(t) {
    We(e, t);
    function e(n, r) {
      return t.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), Ki.MISSING_VALUE, r) || this;
    }
    return e;
  }(No)
), Zt;
(function(t) {
  t[t.literal = 0] = "literal", t[t.object = 1] = "object";
})(Zt || (Zt = {}));
function fv(t) {
  return t.length < 2 ? t : t.reduce(function(e, n) {
    var r = e[e.length - 1];
    return !r || r.type !== Zt.literal || n.type !== Zt.literal ? e.push(n) : r.value += n.value, e;
  }, []);
}
function hv(t) {
  return typeof t == "function";
}
function ro(t, e, n, r, i, a, o) {
  if (t.length === 1 && wl(t[0]))
    return [
      {
        type: Zt.literal,
        value: t[0].value
      }
    ];
  for (var u = [], l = 0, c = t; l < c.length; l++) {
    var d = c[l];
    if (wl(d)) {
      u.push({
        type: Zt.literal,
        value: d.value
      });
      continue;
    }
    if (Nh(d)) {
      typeof a == "number" && u.push({
        type: Zt.literal,
        value: n.getNumberFormat(e).format(a)
      });
      continue;
    }
    var v = d.value;
    if (!(i && v in i))
      throw new dv(v, o);
    var f = i[v];
    if (Ph(d)) {
      (!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), u.push({
        type: typeof f == "string" ? Zt.literal : Zt.object,
        value: f
      });
      continue;
    }
    if (bc(d)) {
      var m = typeof d.style == "string" ? r.date[d.style] : ps(d.style) ? d.style.parsedOptions : void 0;
      u.push({
        type: Zt.literal,
        value: n.getDateTimeFormat(e, m).format(f)
      });
      continue;
    }
    if (_c(d)) {
      var m = typeof d.style == "string" ? r.time[d.style] : ps(d.style) ? d.style.parsedOptions : r.time.medium;
      u.push({
        type: Zt.literal,
        value: n.getDateTimeFormat(e, m).format(f)
      });
      continue;
    }
    if (pc(d)) {
      var m = typeof d.style == "string" ? r.number[d.style] : Sc(d.style) ? d.style.parsedOptions : void 0;
      m && m.scale && (f = f * (m.scale || 1)), u.push({
        type: Zt.literal,
        value: n.getNumberFormat(e, m).format(f)
      });
      continue;
    }
    if (Ec(d)) {
      var h = d.children, g = d.value, b = i[g];
      if (!hv(b))
        throw new cv(g, "function", o);
      var y = ro(h, e, n, r, i, a), S = b(y.map(function(E) {
        return E.value;
      }));
      Array.isArray(S) || (S = [S]), u.push.apply(u, S.map(function(E) {
        return {
          type: typeof E == "string" ? Zt.literal : Zt.object,
          value: E
        };
      }));
    }
    if (yc(d)) {
      var I = d.options[f] || d.options.other;
      if (!I)
        throw new Nl(d.value, f, Object.keys(d.options), o);
      u.push.apply(u, ro(I.value, e, n, r, i));
      continue;
    }
    if (Ic(d)) {
      var I = d.options["=".concat(f)];
      if (!I) {
        if (!Intl.PluralRules)
          throw new No(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, Ki.MISSING_INTL_API, o);
        var _ = n.getPluralRules(e, { type: d.pluralType }).select(f - (d.offset || 0));
        I = d.options[_] || d.options.other;
      }
      if (!I)
        throw new Nl(d.value, f, Object.keys(d.options), o);
      u.push.apply(u, ro(I.value, e, n, r, i, f - (d.offset || 0)));
      continue;
    }
  }
  return fv(u);
}
function vv(t, e) {
  return e ? le(le(le({}, t || {}), e || {}), Object.keys(t).reduce(function(n, r) {
    return n[r] = le(le({}, t[r]), e[r] || {}), n;
  }, {})) : t;
}
function mv(t, e) {
  return e ? Object.keys(t).reduce(function(n, r) {
    return n[r] = vv(t[r], e[r]), n;
  }, le({}, t)) : t;
}
function Zo(t) {
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
function gv(t) {
  return t === void 0 && (t = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: Xo(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.NumberFormat).bind.apply(e, Zn([void 0], n, !1)))();
    }, {
      cache: Zo(t.number),
      strategy: Ko.variadic
    }),
    getDateTimeFormat: Xo(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.DateTimeFormat).bind.apply(e, Zn([void 0], n, !1)))();
    }, {
      cache: Zo(t.dateTime),
      strategy: Ko.variadic
    }),
    getPluralRules: Xo(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.PluralRules).bind.apply(e, Zn([void 0], n, !1)))();
    }, {
      cache: Zo(t.pluralRules),
      strategy: Ko.variadic
    })
  };
}
var Rc = (
  /** @class */
  function() {
    function t(e, n, r, i) {
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
        var d = c.reduce(function(v, f) {
          return !v.length || f.type !== Zt.literal || typeof v[v.length - 1] != "string" ? v.push(f.value) : v[v.length - 1] += f.value, v;
        }, []);
        return d.length <= 1 ? d[0] || "" : d;
      }, this.formatToParts = function(l) {
        return ro(a.ast, a.locales, a.formatters, a.formats, l, void 0, a.message);
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
        var o = i || {};
        o.formatters;
        var u = Ah(o, ["formatters"]);
        this.ast = t.__parse(e, le(le({}, u), { locale: this.resolvedLocale }));
      } else
        this.ast = e;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = mv(t.formats, r), this.formatters = i && i.formatters || gv(this.formatterCache);
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
    }, t.__parse = uv, t.formats = {
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
function pv(t, e) {
  if (e == null)
    return;
  if (e in t)
    return t[e];
  const n = e.split(".");
  let r = t;
  for (let i = 0; i < n.length; i++)
    if (typeof r == "object") {
      if (i > 0) {
        const a = n.slice(i, n.length).join(".");
        if (a in r) {
          r = r[a];
          break;
        }
      }
      r = r[n[i]];
    } else
      r = void 0;
  return r;
}
const Or = {}, bv = (t, e, n) => n && (e in Or || (Or[e] = {}), t in Or[e] || (Or[e][t] = n), n), Mc = (t, e) => {
  if (e == null)
    return;
  if (e in Or && t in Or[e])
    return Or[e][t];
  const n = Ha(e);
  for (let r = 0; r < n.length; r++) {
    const i = n[r], a = yv(i, t);
    if (a)
      return bv(t, e, a);
  }
};
let Ks;
const Na = tn({});
function _v(t) {
  return Ks[t] || null;
}
function Dc(t) {
  return t in Ks;
}
function yv(t, e) {
  if (!Dc(t))
    return null;
  const n = _v(t);
  return pv(n, e);
}
function Iv(t) {
  if (t == null)
    return;
  const e = Ha(t);
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (Dc(r))
      return r;
  }
}
function Pc(t, ...e) {
  delete Or[t], Na.update((n) => (n[t] = Sh.all([n[t] || {}, ...e]), n));
}
$i(
  [Na],
  ([t]) => Object.keys(t)
);
Na.subscribe((t) => Ks = t);
const io = {};
function Ev(t, e) {
  io[t].delete(e), io[t].size === 0 && delete io[t];
}
function Nc(t) {
  return io[t];
}
function Sv(t) {
  return Ha(t).map((e) => {
    const n = Nc(e);
    return [e, n ? [...n] : []];
  }).filter(([, e]) => e.length > 0);
}
function mo(t) {
  return t == null ? !1 : Ha(t).some(
    (e) => {
      var n;
      return (n = Nc(e)) == null ? void 0 : n.size;
    }
  );
}
function Av(t, e) {
  return Promise.all(
    e.map((r) => (Ev(t, r), r().then((i) => i.default || i)))
  ).then((r) => Pc(t, ...r));
}
const ca = {};
function Hc(t) {
  if (!mo(t))
    return t in ca ? ca[t] : Promise.resolve();
  const e = Sv(t);
  return ca[t] = Promise.all(
    e.map(
      ([n, r]) => Av(n, r)
    )
  ).then(() => {
    if (mo(t))
      return Hc(t);
    delete ca[t];
  }), ca[t];
}
var Hl = Object.getOwnPropertySymbols, Cv = Object.prototype.hasOwnProperty, xv = Object.prototype.propertyIsEnumerable, Tv = (t, e) => {
  var n = {};
  for (var r in t)
    Cv.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && Hl)
    for (var r of Hl(t))
      e.indexOf(r) < 0 && xv.call(t, r) && (n[r] = t[r]);
  return n;
};
const wv = {
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
function Lv({ locale: t, id: e }) {
  console.warn(
    `[svelte-i18n] The message "${e}" was not found in "${Ha(
      t
    ).join('", "')}".${mo(Vr()) ? `

Note: there are at least one loader still registered to this locale that wasn't executed.` : ""}`
  );
}
const Ov = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: wv,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, ba = Ov;
function Yi() {
  return ba;
}
function Rv(t) {
  const e = t, { formats: n } = e, r = Tv(e, ["formats"]);
  let i = t.fallbackLocale;
  if (t.initialLocale)
    try {
      Rc.resolveLocale(t.initialLocale) && (i = t.initialLocale);
    } catch {
      console.warn(
        `[svelte-i18n] The initial locale "${t.initialLocale}" is not a valid locale.`
      );
    }
  return r.warnOnMissingMessages && (delete r.warnOnMissingMessages, r.handleMissingMessage == null ? r.handleMissingMessage = Lv : console.warn(
    '[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.'
  )), Object.assign(ba, r, { initialLocale: i }), n && ("number" in n && Object.assign(ba.formats.number, n.number), "date" in n && Object.assign(ba.formats.date, n.date), "time" in n && Object.assign(ba.formats.time, n.time)), pi.set(i);
}
const Qo = tn(!1);
var Mv = Object.defineProperty, Dv = Object.defineProperties, Pv = Object.getOwnPropertyDescriptors, Ul = Object.getOwnPropertySymbols, Nv = Object.prototype.hasOwnProperty, Hv = Object.prototype.propertyIsEnumerable, kl = (t, e, n) => e in t ? Mv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Uv = (t, e) => {
  for (var n in e || (e = {}))
    Nv.call(e, n) && kl(t, n, e[n]);
  if (Ul)
    for (var n of Ul(e))
      Hv.call(e, n) && kl(t, n, e[n]);
  return t;
}, kv = (t, e) => Dv(t, Pv(e));
let Ss;
const go = tn(null);
function Bl(t) {
  return t.split("-").map((e, n, r) => r.slice(0, n + 1).join("-")).reverse();
}
function Ha(t, e = Yi().fallbackLocale) {
  const n = Bl(t);
  return e ? [.../* @__PURE__ */ new Set([...n, ...Bl(e)])] : n;
}
function Vr() {
  return Ss ?? void 0;
}
go.subscribe((t) => {
  Ss = t ?? void 0, typeof window < "u" && t != null && document.documentElement.setAttribute("lang", t);
});
const Bv = (t) => {
  if (t && Iv(t) && mo(t)) {
    const { loadingDelay: e } = Yi();
    let n;
    return typeof window < "u" && Vr() != null && e ? n = window.setTimeout(
      () => Qo.set(!0),
      e
    ) : Qo.set(!0), Hc(t).then(() => {
      go.set(t);
    }).finally(() => {
      clearTimeout(n), Qo.set(!1);
    });
  }
  return go.set(t);
}, pi = kv(Uv({}, go), {
  set: Bv
}), Fv = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0], Ho = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (r) => {
    const i = JSON.stringify(r);
    return i in e ? e[i] : e[i] = t(r);
  };
};
var Vv = Object.defineProperty, po = Object.getOwnPropertySymbols, Uc = Object.prototype.hasOwnProperty, kc = Object.prototype.propertyIsEnumerable, Fl = (t, e, n) => e in t ? Vv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Ys = (t, e) => {
  for (var n in e || (e = {}))
    Uc.call(e, n) && Fl(t, n, e[n]);
  if (po)
    for (var n of po(e))
      kc.call(e, n) && Fl(t, n, e[n]);
  return t;
}, ea = (t, e) => {
  var n = {};
  for (var r in t)
    Uc.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && po)
    for (var r of po(t))
      e.indexOf(r) < 0 && kc.call(t, r) && (n[r] = t[r]);
  return n;
};
const Ta = (t, e) => {
  const { formats: n } = Yi();
  if (t in n && e in n[t])
    return n[t][e];
  throw new Error(`[svelte-i18n] Unknown "${e}" ${t} format.`);
}, Gv = Ho(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = ea(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return r && (i = Ta("number", r)), new Intl.NumberFormat(n, i);
  }
), jv = Ho(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = ea(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return r ? i = Ta("date", r) : Object.keys(i).length === 0 && (i = Ta("date", "short")), new Intl.DateTimeFormat(n, i);
  }
), Wv = Ho(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = ea(e, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return r ? i = Ta("time", r) : Object.keys(i).length === 0 && (i = Ta("time", "short")), new Intl.DateTimeFormat(n, i);
  }
), qv = (t = {}) => {
  var e = t, {
    locale: n = Vr()
  } = e, r = ea(e, [
    "locale"
  ]);
  return Gv(Ys({ locale: n }, r));
}, zv = (t = {}) => {
  var e = t, {
    locale: n = Vr()
  } = e, r = ea(e, [
    "locale"
  ]);
  return jv(Ys({ locale: n }, r));
}, Xv = (t = {}) => {
  var e = t, {
    locale: n = Vr()
  } = e, r = ea(e, [
    "locale"
  ]);
  return Wv(Ys({ locale: n }, r));
}, Kv = Ho(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (t, e = Vr()) => new Rc(t, e, Yi().formats, {
    ignoreTag: Yi().ignoreTag
  })
), Yv = (t, e = {}) => {
  var n, r, i, a;
  let o = e;
  typeof t == "object" && (o = t, t = o.id);
  const {
    values: u,
    locale: l = Vr(),
    default: c
  } = o;
  if (l == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let d = Mc(t, l);
  if (!d)
    d = (a = (i = (r = (n = Yi()).handleMissingMessage) == null ? void 0 : r.call(n, { locale: l, id: t, defaultValue: c })) != null ? i : c) != null ? a : t;
  else if (typeof d != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${t}" must be of type "string", found: "${typeof d}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), d;
  if (!u)
    return d;
  let v = d;
  try {
    v = Kv(d, l).format(u);
  } catch (f) {
    f instanceof Error && console.warn(
      `[svelte-i18n] Message "${t}" has syntax error:`,
      f.message
    );
  }
  return v;
}, Zv = (t, e) => Xv(e).format(t), Qv = (t, e) => zv(e).format(t), Jv = (t, e) => qv(e).format(t), $v = (t, e = Vr()) => Mc(t, e), em = $i([pi, Na], () => Yv);
$i([pi], () => Zv);
$i([pi], () => Qv);
$i([pi], () => Jv);
$i([pi, Na], () => $v);
function tm(t, e) {
  Object.entries(t).forEach(([a, o]) => {
    Pc(a, o);
  });
  const n = localStorage.getItem("language"), r = "en", i = n ?? Fv();
  console.log("Initial: Setting the language to", i), Rv({
    fallbackLocale: r,
    initialLocale: i
  }), window.addEventListener("oscd-language-changed", (a) => {
    const o = a;
    if (!o.detail.language) {
      console.error("No translations for language");
      return;
    }
    console.log("Updating the language to", o.detail.language), pi.set(o.detail.language);
  });
}
const nm = "Ort", rm = "Suche", im = "UUID", am = "Name", om = "Autor", sm = "Typ", lm = "Version", um = "Geändert am", cm = "Von", dm = "Bis", fm = "Suchergebnis", hm = "Ort auswählen", vm = "Filter Hinzufügen", mm = "Filtertypen", gm = {
  location: nm,
  search: rm,
  uuid: im,
  name: am,
  author: om,
  type: sm,
  version: lm,
  changed_at: um,
  from: cm,
  to: dm,
  search_result: fm,
  select_location: hm,
  add_filter: vm,
  filter_types: mm
}, pm = "Location", bm = "Search", _m = "UUID", ym = "Name", Im = "Author", Em = "Type", Sm = "Version", Am = "Changed At", Cm = "From", xm = "To", Tm = "Search Result", wm = "Select Location", Lm = "Add Filter", Om = "Filter Types", Rm = {
  location: pm,
  search: bm,
  uuid: _m,
  name: ym,
  author: Im,
  type: Em,
  version: Sm,
  changed_at: Am,
  from: Cm,
  to: xm,
  search_result: Tm,
  select_location: wm,
  add_filter: Lm,
  filter_types: Om
};
function Pe(t) {
  return Object.entries(t).filter(([e, n]) => e !== "" && n).map(([e]) => e).join(" ");
}
function Je(t, e, n, r = { bubbles: !0 }) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  if (!t)
    throw new Error("Tried to dispatch event without element.");
  const i = new CustomEvent(e, Object.assign(Object.assign({}, r), { detail: n }));
  return t == null || t.dispatchEvent(i), i;
}
function Jn(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const a = n[i], o = a.indexOf("$");
    o !== -1 && e.indexOf(a.substring(0, o + 1)) !== -1 || e.indexOf(a) === -1 && (r[a] = t[a]);
  }
  return r;
}
function rt(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const a = n[i];
    a.substring(0, e.length) === e && (r[a.substring(e.length)] = t[a]);
  }
  return r;
}
class ta {
  constructor() {
    this.elementMap = /* @__PURE__ */ new Map();
  }
  /**
   * Listen to an event on an element.
   */
  on(e, n, r, i) {
    this.elementMap.has(e) || this.elementMap.set(e, {});
    const a = this.elementMap.get(e);
    if (a == null)
      throw new Error("Event map couldn't be created.");
    n in a || (a[n] = /* @__PURE__ */ new Map()), a[n].set(r, wf(e, n, r, i));
  }
  /**
   * Unlisten to an event on an element.
   */
  off(e, n, r) {
    const i = this.elementMap.get(e);
    if (i == null || !(n in i))
      return;
    const a = i[n], o = a.get(r);
    o != null && (o(), a.delete(r), a.size === 0 && (delete i[n], Object.keys(i).length === 0 && this.elementMap.delete(e)));
  }
  /**
   * Unlisten to all events managed by this instance.
   */
  clear() {
    this.elementMap.forEach((e, n) => {
      for (let [r, i] of Object.entries(e))
        i.forEach((a, o) => {
          a();
        });
    }), this.elementMap.clear();
  }
}
function q(t, e) {
  let n = [];
  if (e)
    for (let r = 0; r < e.length; r++) {
      const i = e[r], a = Array.isArray(i) ? i[0] : i;
      Array.isArray(i) && i.length > 1 ? n.push(a(t, i[1])) : n.push(a(t));
    }
  return {
    update(r) {
      if ((r && r.length || 0) != n.length)
        throw new Error("You must not change the length of an actions array.");
      if (r)
        for (let i = 0; i < r.length; i++) {
          const a = n[i];
          if (a && a.update) {
            const o = r[i];
            Array.isArray(o) && o.length > 1 ? a.update(o[1]) : a.update();
          }
        }
    },
    destroy() {
      for (let r = 0; r < n.length; r++) {
        const i = n[r];
        i && i.destroy && i.destroy();
      }
    }
  };
}
var qa;
function Mm(t, e) {
  e === void 0 && (e = !1);
  var n = t.CSS, r = qa;
  if (typeof qa == "boolean" && !e)
    return qa;
  var i = n && typeof n.supports == "function";
  if (!i)
    return !1;
  var a = n.supports("--css-vars", "yes"), o = n.supports("(--css-vars: yes)") && n.supports("color", "#00000000");
  return r = a || o, e || (qa = r), r;
}
function Dm(t, e, n) {
  if (!t)
    return { x: 0, y: 0 };
  var r = e.x, i = e.y, a = r + n.left, o = i + n.top, u, l;
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
var wt = (
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
function Pm(t) {
  return t === void 0 && (t = window), Nm(t) ? { passive: !0 } : !1;
}
function Nm(t) {
  t === void 0 && (t = window);
  var e = !1;
  try {
    var n = {
      // This function will be called when the browser
      // attempts to access the passive property.
      get passive() {
        return e = !0, !1;
      }
    }, r = function() {
    };
    t.document.addEventListener("test", r, n), t.document.removeEventListener("test", r, n);
  } catch {
    e = !1;
  }
  return e;
}
const Bc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: Pm
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
function Hm(t, e) {
  if (t.closest)
    return t.closest(e);
  for (var n = t; n; ) {
    if (Fc(n, e))
      return n;
    n = n.parentElement;
  }
  return null;
}
function Fc(t, e) {
  var n = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return n.call(t, e);
}
function Um(t) {
  var e = t;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var n = e.cloneNode(!0);
  n.style.setProperty("position", "absolute"), n.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(n);
  var r = n.scrollWidth;
  return document.documentElement.removeChild(n), r;
}
const Ua = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: Hm,
  estimateScrollWidth: Um,
  matches: Fc
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
var km = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Bm = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Vl = {
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
var Gl = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], jl = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], za = [], Fm = (
  /** @class */
  function(t) {
    We(e, t);
    function e(n) {
      var r = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return r.activationAnimationHasEnded = !1, r.activationTimer = 0, r.fgDeactivationRemovalTimer = 0, r.fgScale = "0", r.frame = { width: 0, height: 0 }, r.initialSize = 0, r.layoutFrame = 0, r.maxRadius = 0, r.unboundedCoords = { left: 0, top: 0 }, r.activationState = r.defaultActivationState(), r.activationTimerCallback = function() {
        r.activationAnimationHasEnded = !0, r.runDeactivationUXLogicIfReady();
      }, r.activateHandler = function(i) {
        r.activateImpl(i);
      }, r.deactivateHandler = function() {
        r.deactivateImpl();
      }, r.focusHandler = function() {
        r.handleFocus();
      }, r.blurHandler = function() {
        r.handleBlur();
      }, r.resizeHandler = function() {
        r.layout();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return km;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Bm;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Vl;
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
      var n = this, r = this.supportsPressRipple();
      if (this.registerRootHandlers(r), r) {
        var i = e.cssClasses, a = i.ROOT, o = i.UNBOUNDED;
        requestAnimationFrame(function() {
          n.adapter.addClass(a), n.adapter.isUnbounded() && (n.adapter.addClass(o), n.layoutInternal());
        });
      }
    }, e.prototype.destroy = function() {
      var n = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
        var r = e.cssClasses, i = r.ROOT, a = r.UNBOUNDED;
        requestAnimationFrame(function() {
          n.adapter.removeClass(i), n.adapter.removeClass(a), n.removeCssVars();
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
      var r = e.cssClasses.UNBOUNDED;
      n ? this.adapter.addClass(r) : this.adapter.removeClass(r);
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
      var r, i;
      if (n) {
        try {
          for (var a = Ut(Gl), o = a.next(); !o.done; o = a.next()) {
            var u = o.value;
            this.adapter.registerInteractionHandler(u, this.activateHandler);
          }
        } catch (l) {
          r = { error: l };
        } finally {
          try {
            o && !o.done && (i = a.return) && i.call(a);
          } finally {
            if (r) throw r.error;
          }
        }
        this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
      }
      this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
    }, e.prototype.registerDeactivationHandlers = function(n) {
      var r, i;
      if (n.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var a = Ut(jl), o = a.next(); !o.done; o = a.next()) {
            var u = o.value;
            this.adapter.registerDocumentInteractionHandler(u, this.deactivateHandler);
          }
        } catch (l) {
          r = { error: l };
        } finally {
          try {
            o && !o.done && (i = a.return) && i.call(a);
          } finally {
            if (r) throw r.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var n, r;
      try {
        for (var i = Ut(Gl), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          this.adapter.deregisterInteractionHandler(o, this.activateHandler);
        }
      } catch (u) {
        n = { error: u };
      } finally {
        try {
          a && !a.done && (r = i.return) && r.call(i);
        } finally {
          if (n) throw n.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, e.prototype.deregisterDeactivationHandlers = function() {
      var n, r;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var i = Ut(jl), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          this.adapter.deregisterDocumentInteractionHandler(o, this.deactivateHandler);
        }
      } catch (u) {
        n = { error: u };
      } finally {
        try {
          a && !a.done && (r = i.return) && r.call(i);
        } finally {
          if (n) throw n.error;
        }
      }
    }, e.prototype.removeCssVars = function() {
      var n = this, r = e.strings, i = Object.keys(r);
      i.forEach(function(a) {
        a.indexOf("VAR_") === 0 && n.adapter.updateCssVariable(r[a], null);
      });
    }, e.prototype.activateImpl = function(n) {
      var r = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var i = this.activationState;
        if (!i.isActivated) {
          var a = this.previousActivationEvent, o = a && n !== void 0 && a.type !== n.type;
          if (!o) {
            i.isActivated = !0, i.isProgrammatic = n === void 0, i.activationEvent = n, i.wasActivatedByPointer = i.isProgrammatic ? !1 : n !== void 0 && (n.type === "mousedown" || n.type === "touchstart" || n.type === "pointerdown");
            var u = n !== void 0 && za.length > 0 && za.some(function(l) {
              return r.adapter.containsEventTarget(l);
            });
            if (u) {
              this.resetActivationState();
              return;
            }
            n !== void 0 && (za.push(n.target), this.registerDeactivationHandlers(n)), i.wasElementMadeActive = this.checkElementMadeActive(n), i.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              za = [], !i.wasElementMadeActive && n !== void 0 && (n.key === " " || n.keyCode === 32) && (i.wasElementMadeActive = r.checkElementMadeActive(n), i.wasElementMadeActive && r.animateActivation()), i.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(n) {
      return n !== void 0 && n.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var n = this, r = e.strings, i = r.VAR_FG_TRANSLATE_START, a = r.VAR_FG_TRANSLATE_END, o = e.cssClasses, u = o.FG_DEACTIVATION, l = o.FG_ACTIVATION, c = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var d = "", v = "";
      if (!this.adapter.isUnbounded()) {
        var f = this.getFgTranslationCoordinates(), m = f.startPoint, h = f.endPoint;
        d = m.x + "px, " + m.y + "px", v = h.x + "px, " + h.y + "px";
      }
      this.adapter.updateCssVariable(i, d), this.adapter.updateCssVariable(a, v), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(u), this.adapter.computeBoundingRect(), this.adapter.addClass(l), this.activationTimer = setTimeout(function() {
        n.activationTimerCallback();
      }, c);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var n = this.activationState, r = n.activationEvent, i = n.wasActivatedByPointer, a;
      i ? a = Dm(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
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
      var n = this, r = e.cssClasses.FG_DEACTIVATION, i = this.activationState, a = i.hasDeactivationUXRun, o = i.isActivated, u = a || !o;
      u && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(r), this.fgDeactivationRemovalTimer = setTimeout(function() {
        n.adapter.removeClass(r);
      }, Vl.FG_DEACTIVATION_MS));
    }, e.prototype.rmBoundedActivationClasses = function() {
      var n = e.cssClasses.FG_ACTIVATION;
      this.adapter.removeClass(n), this.activationAnimationHasEnded = !1, this.adapter.computeBoundingRect();
    }, e.prototype.resetActivationState = function() {
      var n = this;
      this.previousActivationEvent = this.activationState.activationEvent, this.activationState = this.defaultActivationState(), setTimeout(function() {
        return n.previousActivationEvent = void 0;
      }, e.numbers.TAP_DELAY_MS);
    }, e.prototype.deactivateImpl = function() {
      var n = this, r = this.activationState;
      if (r.isActivated) {
        var i = le({}, r);
        r.isProgrammatic ? (requestAnimationFrame(function() {
          n.animateDeactivation(i);
        }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
          n.activationState.hasDeactivationUXRun = !0, n.animateDeactivation(i), n.resetActivationState();
        }));
      }
    }, e.prototype.animateDeactivation = function(n) {
      var r = n.wasActivatedByPointer, i = n.wasElementMadeActive;
      (r || i) && this.runDeactivationUXLogicIfReady();
    }, e.prototype.layoutInternal = function() {
      var n = this;
      this.frame = this.adapter.computeBoundingRect();
      var r = Math.max(this.frame.height, this.frame.width), i = function() {
        var o = Math.sqrt(Math.pow(n.frame.width, 2) + Math.pow(n.frame.height, 2));
        return o + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? r : i();
      var a = Math.floor(r * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && a % 2 !== 0 ? this.initialSize = a - 1 : this.initialSize = a, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var n = e.strings, r = n.VAR_FG_SIZE, i = n.VAR_LEFT, a = n.VAR_TOP, o = n.VAR_FG_SCALE;
      this.adapter.updateCssVariable(r, this.initialSize + "px"), this.adapter.updateCssVariable(o, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(i, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(a, this.unboundedCoords.top + "px"));
    }, e;
  }(wt)
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
var Be = {
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
}, on = /* @__PURE__ */ new Set();
on.add(Be.BACKSPACE);
on.add(Be.ENTER);
on.add(Be.SPACEBAR);
on.add(Be.PAGE_UP);
on.add(Be.PAGE_DOWN);
on.add(Be.END);
on.add(Be.HOME);
on.add(Be.ARROW_LEFT);
on.add(Be.ARROW_UP);
on.add(Be.ARROW_RIGHT);
on.add(Be.ARROW_DOWN);
on.add(Be.DELETE);
on.add(Be.ESCAPE);
on.add(Be.TAB);
var vn = {
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
}, sn = /* @__PURE__ */ new Map();
sn.set(vn.BACKSPACE, Be.BACKSPACE);
sn.set(vn.ENTER, Be.ENTER);
sn.set(vn.SPACEBAR, Be.SPACEBAR);
sn.set(vn.PAGE_UP, Be.PAGE_UP);
sn.set(vn.PAGE_DOWN, Be.PAGE_DOWN);
sn.set(vn.END, Be.END);
sn.set(vn.HOME, Be.HOME);
sn.set(vn.ARROW_LEFT, Be.ARROW_LEFT);
sn.set(vn.ARROW_UP, Be.ARROW_UP);
sn.set(vn.ARROW_RIGHT, Be.ARROW_RIGHT);
sn.set(vn.ARROW_DOWN, Be.ARROW_DOWN);
sn.set(vn.DELETE, Be.DELETE);
sn.set(vn.ESCAPE, Be.ESCAPE);
sn.set(vn.TAB, Be.TAB);
var Gr = /* @__PURE__ */ new Set();
Gr.add(Be.PAGE_UP);
Gr.add(Be.PAGE_DOWN);
Gr.add(Be.END);
Gr.add(Be.HOME);
Gr.add(Be.ARROW_LEFT);
Gr.add(Be.ARROW_UP);
Gr.add(Be.ARROW_RIGHT);
Gr.add(Be.ARROW_DOWN);
function xt(t) {
  var e = t.key;
  if (on.has(e))
    return e;
  var n = sn.get(t.keyCode);
  return n || Be.UNKNOWN;
}
const { applyPassive: Wl } = Bc, { matches: Vm } = Ua;
function Xt(t, { ripple: e = !0, surface: n = !1, unbounded: r = !1, disabled: i = !1, color: a, active: o, rippleElement: u, eventTarget: l, activeTarget: c, addClass: d = (h) => t.classList.add(h), removeClass: v = (h) => t.classList.remove(h), addStyle: f = (h, g) => t.style.setProperty(h, g), initPromise: m = Promise.resolve() } = {}) {
  let h, g = new ta(), b = he("SMUI:addLayoutListener"), y, S = o, I = l, _ = c;
  function E() {
    n ? (d("mdc-ripple-surface"), a === "primary" ? (d("smui-ripple-surface--primary"), v("smui-ripple-surface--secondary")) : a === "secondary" ? (v("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : (v("smui-ripple-surface--primary"), v("smui-ripple-surface--secondary"))) : (v("mdc-ripple-surface"), v("smui-ripple-surface--primary"), v("smui-ripple-surface--secondary")), h && S !== o && (S = o, o ? h.activate() : o === !1 && h.deactivate()), e && !h ? (h = new Fm({
      addClass: d,
      browserSupportsCssVars: () => Mm(window),
      computeBoundingRect: () => (u || t).getBoundingClientRect(),
      containsEventTarget: (w) => t.contains(w),
      deregisterDocumentInteractionHandler: (w, C) => g.off(document.documentElement, w, C),
      deregisterInteractionHandler: (w, C) => g.off(l || t, w, C),
      deregisterResizeHandler: (w) => window.removeEventListener("resize", w),
      getWindowPageOffset: () => {
        var w, C;
        return {
          x: (w = window.pageXOffset) !== null && w !== void 0 ? w : window.scrollX,
          y: (C = window.pageYOffset) !== null && C !== void 0 ? C : window.scrollY
        };
      },
      isSurfaceActive: () => o ?? Vm(c || t, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!r,
      registerDocumentInteractionHandler: (w, C) => {
        const A = Wl();
        g.on(document.documentElement, w, C, typeof A == "boolean" ? { capture: A } : A);
      },
      registerInteractionHandler: (w, C) => {
        const A = Wl();
        g.on(l || t, w, C, typeof A == "boolean" ? { capture: A } : A);
      },
      registerResizeHandler: (w) => g.on(window, "resize", w),
      removeClass: v,
      updateCssVariable: f
    }), m.then(() => {
      h && (h.init(), h.setUnbounded(r));
    })) : h && !e && m.then(() => {
      h && (h.destroy(), h = void 0, g.clear());
    }), h && (I !== l || _ !== c) && (I = l, _ = c, h.destroy(), requestAnimationFrame(() => {
      h && (h.init(), h.setUnbounded(r));
    })), !e && r && d("mdc-ripple-upgraded--unbounded");
  }
  E(), b && (y = b(x));
  function x() {
    h && h.layout();
  }
  return {
    update(w) {
      ({
        ripple: e,
        surface: n,
        unbounded: r,
        disabled: i,
        color: a,
        active: o,
        rippleElement: u,
        eventTarget: l,
        activeTarget: c,
        addClass: d,
        removeClass: v,
        addStyle: f,
        initPromise: m
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (C) => t.classList.add(C), removeClass: (C) => t.classList.remove(C), addStyle: (C, A) => t.style.setProperty(C, A), initPromise: Promise.resolve() }, w)), E();
    },
    destroy() {
      h && (h.destroy(), h = void 0, g.clear(), v("mdc-ripple-surface"), v("smui-ripple-surface--primary"), v("smui-ripple-surface--secondary")), y && y();
    }
  };
}
function Gm(t, e) {
  xe(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "component", 3, jr), a = p(e, "tag", 3, "span"), o = /* @__PURE__ */ Xe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "component",
    "tag",
    "children"
  ]), u;
  const l = he("SMUI:label:context"), c = he("SMUI:label:tabindex");
  function d() {
    return u.getElement();
  }
  var v = { getElement: d }, f = re(), m = Q(f);
  {
    let h = /* @__PURE__ */ fe(() => Pe({
      "mdc-button__label": l === "button",
      "mdc-fab__label": l === "fab",
      "mdc-tab__text-label": l === "tab",
      "mdc-image-list__label": l === "image-list",
      "mdc-snackbar__label": l === "snackbar",
      "mdc-banner__text": l === "banner",
      "mdc-segmented-button__label": l === "segmented-button",
      "mdc-data-table__pagination-rows-per-page-label": l === "data-table:pagination",
      "mdc-data-table__header-cell-label": l === "data-table:sortable-header-cell",
      [r()]: !0
    }));
    _r(m, i, (g, b) => {
      Ee(
        b(g, nt(
          {
            get tag() {
              return a();
            },
            get use() {
              return n();
            },
            get class() {
              return s(h);
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
            children: (y, S) => {
              var I = re(), _ = Q(I);
              Se(_, () => e.children ?? pe), L(y, I);
            },
            $$slots: { default: !0 }
          }
        )),
        (y) => u = y,
        () => u
      );
    });
  }
  return L(t, f), Te(v);
}
function As(t, e) {
  xe(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "on", 3, !1), a = p(e, "component", 3, jr), o = p(e, "tag", 3, "i"), u = /* @__PURE__ */ Xe(e, [
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
  const c = /* @__PURE__ */ fe(() => o() === "svg" || a() === qm), d = he("SMUI:icon:context");
  function v() {
    return l.getElement();
  }
  var f = { getElement: v }, m = re(), h = Q(m);
  {
    let g = /* @__PURE__ */ fe(() => Pe({
      "mdc-button__icon": d === "button",
      "mdc-fab__icon": d === "fab",
      "mdc-icon-button__icon": d === "icon-button",
      "mdc-icon-button__icon--on": d === "icon-button" && i(),
      "mdc-tab__icon": d === "tab",
      "mdc-banner__icon": d === "banner",
      "mdc-segmented-button__icon": d === "segmented-button",
      [r()]: !0
    }));
    _r(h, a, (b, y) => {
      Ee(
        y(b, nt(
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
            children: (S, I) => {
              var _ = re(), E = Q(_);
              Se(E, () => e.children ?? pe), L(S, _);
            },
            $$slots: { default: !0 }
          }
        )),
        (S) => l = S,
        () => l
      );
    });
  }
  return L(t, m), Te(f);
}
var jm = /* @__PURE__ */ an("<svg><!></svg>");
function jr(t, e) {
  xe(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "tag", 3, "div"), i = /* @__PURE__ */ Xe(e, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
  const a = /* @__PURE__ */ fe(() => [
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
  ].indexOf(r()) > -1);
  let o;
  function u() {
    return o;
  }
  var l = { getElement: u }, c = re(), d = Q(c);
  {
    var v = (m) => {
      var h = jm();
      ke(h, () => ({ ...i }));
      var g = me(h);
      Se(g, () => e.children ?? pe), Ee(h, (b) => o = b, () => o), De(h, (b, y) => q == null ? void 0 : q(b, y), n), L(m, h);
    }, f = (m) => {
      var h = re(), g = Q(h);
      {
        var b = (S) => {
          var I = re(), _ = Q(I);
          _l(_, r, !1, (E, x) => {
            Ee(E, (w) => o = w, () => o), De(E, (w, C) => q == null ? void 0 : q(w, C), n), ke(E, () => ({ ...i }));
          }), L(S, I);
        }, y = (S) => {
          var I = re(), _ = Q(I);
          _l(_, r, !1, (E, x) => {
            Ee(E, (A) => o = A, () => o), De(E, (A, M) => q == null ? void 0 : q(A, M), n), ke(E, () => ({ ...i }));
            var w = re(), C = Q(w);
            Se(C, () => e.children ?? pe), L(x, w);
          }), L(S, I);
        };
        oe(
          g,
          (S) => {
            s(a) ? S(b) : S(y, !1);
          },
          !0
        );
      }
      L(m, h);
    };
    oe(d, (m) => {
      r() === "svg" ? m(v) : m(f, !1);
    });
  }
  return L(t, c), Te(l);
}
var Wm = /* @__PURE__ */ an("<svg><!></svg>");
function qm(t, e) {
  xe(e, !0), console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let n = p(e, "use", 19, () => []), r = /* @__PURE__ */ Xe(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i;
  function a() {
    return i;
  }
  var o = { getElement: a }, u = Wm();
  ke(u, () => ({ ...r }));
  var l = me(u);
  return Se(l, () => e.children ?? pe), Ee(u, (c) => i = c, () => i), De(u, (c, d) => q == null ? void 0 : q(c, d), n), L(t, u), Te(o);
}
function Xa(t, e) {
  xe(e, !0);
  const [n, r] = yr(), i = tn(e.value);
  ae(e.key, i), Ce(() => {
    hi(i, e.value);
  }), Ln(() => {
    i.set(void 0);
  });
  var a = re(), o = Q(a);
  Se(o, () => e.children ?? pe), L(t, a), Te(), r();
}
var zm = /* @__PURE__ */ be('<div class="mdc-button__touch"></div>'), Xm = /* @__PURE__ */ be('<div class="mdc-button__ripple"></div> <!><!>', 1);
function Vc(t, e) {
  xe(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "ripple", 3, !0), o = p(e, "color", 3, "primary"), u = p(e, "variant", 3, "text"), l = p(e, "touch", 3, !1), c = p(e, "action", 3, "close"), d = p(e, "defaultAction", 3, !1), v = p(e, "secondary", 3, !1), f = p(e, "component", 3, jr), m = p(e, "tag", 19, () => e.href == null ? "button" : "a"), h = /* @__PURE__ */ Xe(e, [
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
  ]), g, b = ue({}), y = ue({}), S = he("SMUI:button:context");
  const I = /* @__PURE__ */ fe(() => S === "dialog:action" && c() != null ? { "data-mdc-dialog-action": c() } : { action: c() }), _ = /* @__PURE__ */ fe(() => S === "dialog:action" && d() ? { "data-mdc-dialog-button-default": "" } : {}), E = /* @__PURE__ */ fe(() => S === "banner" ? {} : { secondary: v() });
  let x = e.disabled;
  Ce(() => {
    if (x !== e.disabled) {
      if (g) {
        const T = G();
        "blur" in T && T.blur();
      }
      x = h.disabled;
    }
  }), ae("SMUI:label:context", "button"), ae("SMUI:icon:context", "button");
  function w(T) {
    b[T] || (b[T] = !0);
  }
  function C(T) {
    (!(T in b) || b[T]) && (b[T] = !1);
  }
  function A(T, H) {
    y[T] != H && (H === "" || H == null ? delete y[T] : y[T] = H);
  }
  function M() {
    S === "banner" && Je(G(), v() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function G() {
    return g.getElement();
  }
  var k = { getElement: G }, j = re(), O = Q(j);
  {
    let T = /* @__PURE__ */ fe(() => [
      [
        Xt,
        {
          ripple: a(),
          unbounded: !1,
          color: o(),
          disabled: !!e.disabled,
          addClass: w,
          removeClass: C,
          addStyle: A
        }
      ],
      ...n()
    ]), H = /* @__PURE__ */ fe(() => Pe({
      "mdc-button": !0,
      "mdc-button--raised": u() === "raised",
      "mdc-button--unelevated": u() === "unelevated",
      "mdc-button--outlined": u() === "outlined",
      "smui-button--color-secondary": o() === "secondary",
      "mdc-button--touch": l(),
      "mdc-card__action": S === "card:action",
      "mdc-card__action--button": S === "card:action",
      "mdc-dialog__button": S === "dialog:action",
      "mdc-top-app-bar__navigation-icon": S === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": S === "top-app-bar:action",
      "mdc-snackbar__action": S === "snackbar:actions",
      "mdc-banner__secondary-action": S === "banner" && v(),
      "mdc-banner__primary-action": S === "banner" && !v(),
      "mdc-tooltip__action": S === "tooltip:rich-actions",
      ...b,
      [r()]: !0
    })), U = /* @__PURE__ */ fe(() => Object.entries(y).map(([z, J]) => `${z}: ${J};`).concat([i()]).join(" "));
    _r(O, f, (z, J) => {
      Ee(
        J(z, nt(
          {
            get tag() {
              return m();
            },
            get use() {
              return s(T);
            },
            get class() {
              return s(H);
            },
            get style() {
              return s(U);
            }
          },
          () => s(I),
          () => s(_),
          () => s(E),
          {
            get href() {
              return e.href;
            }
          },
          () => h,
          {
            onclick: (P) => {
              var R;
              M(), (R = e.onclick) == null || R.call(e, P);
            },
            children: (P, R) => {
              var W = Xm(), Ae = Ie(Q(W), 2);
              Se(Ae, () => e.children ?? pe);
              var _e = Ie(Ae);
              {
                var F = (V) => {
                  var B = zm();
                  L(V, B);
                };
                oe(_e, (V) => {
                  l() && V(F);
                });
              }
              L(P, W);
            },
            $$slots: { default: !0 }
          }
        )),
        (P) => g = P,
        () => g
      );
    });
  }
  return L(t, j), Te(k);
}
function Km(t, e) {
  xe(e, !0);
  let n = p(e, "callback", 3, () => {
  }), r = p(e, "disabled", 3, !1), i = p(e, "variant", 3, "default"), a = p(e, "isAbortAction", 3, !1), o = p(e, "backgroundColor", 3, void 0);
  {
    let u = /* @__PURE__ */ fe(() => a() ? "background-color: #ff3e00;" : "background-color: " + o());
    Vc(t, {
      onclick: () => n()(),
      get variant() {
        return i();
      },
      get disabled() {
        return r();
      },
      get style() {
        return s(u);
      },
      children: (l, c) => {
        var d = re(), v = Q(d);
        Se(v, () => e.children ?? pe), L(l, d);
      },
      $$slots: { default: !0 }
    });
  }
  Te();
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
var Ka = {
  ICON_BUTTON_ON: "mdc-icon-button--on",
  ROOT: "mdc-icon-button"
}, ir = {
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
var Ym = (
  /** @class */
  function(t) {
    We(e, t);
    function e(n) {
      var r = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return r.hasToggledAriaLabel = !1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ka;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return ir;
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
      var n = this.adapter.getAttr(ir.DATA_ARIA_LABEL_ON), r = this.adapter.getAttr(ir.DATA_ARIA_LABEL_OFF);
      if (n && r) {
        if (this.adapter.getAttr(ir.ARIA_PRESSED) !== null)
          throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");
        this.hasToggledAriaLabel = !0;
      } else
        this.adapter.setAttr(ir.ARIA_PRESSED, String(this.isOn()));
    }, e.prototype.handleClick = function() {
      this.toggle(), this.adapter.notifyChange({ isOn: this.isOn() });
    }, e.prototype.isOn = function() {
      return this.adapter.hasClass(Ka.ICON_BUTTON_ON);
    }, e.prototype.toggle = function(n) {
      if (n === void 0 && (n = !this.isOn()), n ? this.adapter.addClass(Ka.ICON_BUTTON_ON) : this.adapter.removeClass(Ka.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var r = n ? this.adapter.getAttr(ir.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(ir.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr(ir.ARIA_LABEL, r || "");
      } else
        this.adapter.setAttr(ir.ARIA_PRESSED, "" + n);
    }, e;
  }(wt)
), Zm = /* @__PURE__ */ be('<div class="mdc-icon-button__touch"></div>'), Qm = /* @__PURE__ */ be('<div class="mdc-icon-button__ripple"></div> <!><!>', 1);
function Jm(t, e) {
  xe(e, !0);
  let n = () => {
  };
  function r(R) {
    return R === n;
  }
  let i = p(e, "use", 19, () => []), a = p(e, "class", 3, ""), o = p(e, "style", 3, ""), u = p(e, "ripple", 3, !0), l = p(e, "toggle", 3, !1), c = p(e, "pressed", 15, n), d = p(e, "touch", 3, !1), v = p(e, "displayFlex", 3, !0), f = p(e, "size", 3, "normal"), m = p(e, "component", 3, jr), h = p(e, "tag", 19, () => e.href == null ? "button" : "a"), g = /* @__PURE__ */ Xe(e, [
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
  ]), b, y, S = /* @__PURE__ */ ve(ue({})), I = ue({}), _ = /* @__PURE__ */ ve(ue({})), E = he("SMUI:icon-button:context"), x = he("SMUI:icon-button:aria-describedby");
  const w = /* @__PURE__ */ fe(() => {
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
  let C = !!e.disabled;
  Ce(() => {
    if (C != !!e.disabled) {
      if (b) {
        const R = U();
        "blur" in R && R.blur();
      }
      C = !!e.disabled;
    }
  }), ae("SMUI:icon:context", "icon-button");
  let A = null;
  Ce(() => {
    b && U() && l() !== A && (l() && !y ? (y = new Ym({
      addClass: G,
      hasClass: M,
      notifyChange: (R) => {
        H(R), Je(U(), "SMUIIconButtonToggleChange", R);
      },
      removeClass: k,
      getAttr: O,
      setAttr: T
    }), y.init()) : !l() && y && (y.destroy(), y = void 0, K(S, {}, !0), K(_, {}, !0)), A = l());
  }), Ce(() => {
    y && !r(c()) && y.isOn() !== c() && y.toggle(c());
  }), Ln(() => {
    y && y.destroy();
  });
  function M(R) {
    return R in s(S) ? s(S)[R] : U().classList.contains(R);
  }
  function G(R) {
    s(S)[R] || (s(S)[R] = !0);
  }
  function k(R) {
    (!(R in s(S)) || s(S)[R]) && (s(S)[R] = !1);
  }
  function j(R, W) {
    I[R] != W && (W === "" || W == null ? delete I[R] : I[R] = W);
  }
  function O(R) {
    return R in s(_) ? s(_)[R] ?? null : U().getAttribute(R);
  }
  function T(R, W) {
    s(_)[R] !== W && (s(_)[R] = W);
  }
  function H(R) {
    c(R.isOn);
  }
  function U() {
    return b.getElement();
  }
  var z = { getElement: U }, J = re(), P = Q(J);
  {
    let R = /* @__PURE__ */ fe(() => [
      [
        Xt,
        {
          ripple: u(),
          unbounded: !0,
          color: e.color,
          disabled: !!e.disabled,
          addClass: G,
          removeClass: k,
          addStyle: j
        }
      ],
      ...i()
    ]), W = /* @__PURE__ */ fe(() => Pe({
      "mdc-icon-button": !0,
      "mdc-icon-button--on": !r(c()) && c(),
      "mdc-icon-button--touch": d(),
      "mdc-icon-button--display-flex": v(),
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
      ...s(S),
      [a()]: !0
    })), Ae = /* @__PURE__ */ fe(() => Object.entries(I).map(([V, B]) => `${V}: ${B};`).concat([o()]).join(" ")), _e = /* @__PURE__ */ fe(() => r(c()) ? null : c() ? "true" : "false"), F = /* @__PURE__ */ fe(() => c() ? e.ariaLabelOn : e.ariaLabelOff);
    _r(P, m, (V, B) => {
      Ee(
        B(V, nt(
          {
            get tag() {
              return h();
            },
            get use() {
              return s(R);
            },
            get class() {
              return s(W);
            },
            get style() {
              return s(Ae);
            },
            get "aria-pressed"() {
              return s(_e);
            },
            get "aria-label"() {
              return s(F);
            },
            get "data-aria-label-on"() {
              return e.ariaLabelOn;
            },
            get "data-aria-label-off"() {
              return e.ariaLabelOff;
            },
            get "aria-describedby"() {
              return x;
            },
            get href() {
              return e.href;
            }
          },
          () => s(w),
          () => s(_),
          () => g,
          {
            onclick: (ee) => {
              var Z;
              y && y.handleClick(), E === "top-app-bar:navigation" && Je(U(), "SMUITopAppBarIconButtonNav"), (Z = e.onclick) == null || Z.call(e, ee);
            },
            children: (ee, Z) => {
              var ce = Qm(), we = Ie(Q(ce), 2);
              Se(we, () => e.children ?? pe);
              var $ = Ie(we);
              {
                var ie = (Me) => {
                  var Le = Zm();
                  L(Me, Le);
                };
                oe($, (Me) => {
                  d() && Me(ie);
                });
              }
              L(ee, ce);
            },
            $$slots: { default: !0 }
          }
        )),
        (ee) => b = ee,
        () => b
      );
    });
  }
  return L(t, J), Te(z);
}
function $m(t, e) {
  let n = p(e, "callback", 3, () => {
  }), r = p(e, "icon", 3, ""), i = p(e, "disabled", 3, !1);
  Jm(t, {
    get disabled() {
      return i();
    },
    style: "margin-bottom: 0;",
    $$events: {
      click(...a) {
        var o;
        (o = n()) == null || o.apply(this, a);
      }
    },
    children: (a, o) => {
      As(a, {
        class: "material-icons",
        children: (u, l) => {
          var c = Mt();
          Oe(() => st(c, r())), L(u, c);
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
var eg = {
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
var tg = (
  /** @class */
  function(t) {
    We(e, t);
    function e(n) {
      var r = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return r.shakeAnimationEndHandler = function() {
        r.handleShakeAnimationEnd();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return eg;
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
      var r = e.cssClasses.LABEL_SHAKE;
      n ? this.adapter.addClass(r) : this.adapter.removeClass(r);
    }, e.prototype.float = function(n) {
      var r = e.cssClasses, i = r.LABEL_FLOAT_ABOVE, a = r.LABEL_SHAKE;
      n ? this.adapter.addClass(i) : (this.adapter.removeClass(i), this.adapter.removeClass(a));
    }, e.prototype.setRequired = function(n) {
      var r = e.cssClasses.LABEL_REQUIRED;
      n ? this.adapter.addClass(r) : this.adapter.removeClass(r);
    }, e.prototype.handleShakeAnimationEnd = function() {
      var n = e.cssClasses.LABEL_SHAKE;
      this.adapter.removeClass(n);
    }, e;
  }(wt)
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
var Yr = {
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
var ng = (
  /** @class */
  function(t) {
    We(e, t);
    function e(n) {
      var r = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return r.transitionEndHandler = function(i) {
        r.handleTransitionEnd(i);
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Yr;
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
      this.adapter.removeClass(Yr.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(Yr.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(n) {
      this.adapter.setStyle("transform-origin", n + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(Yr.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(n) {
      var r = this.adapter.hasClass(Yr.LINE_RIPPLE_DEACTIVATING);
      n.propertyName === "opacity" && r && (this.adapter.removeClass(Yr.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(Yr.LINE_RIPPLE_DEACTIVATING));
    }, e;
  }(wt)
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
var rg = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, ql = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, ig = {
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
var ag = (
  /** @class */
  function(t) {
    We(e, t);
    function e(n) {
      return t.call(this, le(le({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return rg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ig;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return ql;
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
      var r = e.cssClasses.OUTLINE_NOTCHED;
      n > 0 && (n += ql.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(n), this.adapter.addClass(r);
    }, e.prototype.closeNotch = function() {
      var n = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(n), this.adapter.removeNotchWidthProperty();
    }, e;
  }(wt)
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
var Jo = {
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
}, og = {
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
}, zl = {
  LABEL_SCALE: 0.75
}, sg = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], lg = [
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
var Xl = ["mousedown", "touchstart"], Kl = ["click", "keydown"], ug = (
  /** @class */
  function(t) {
    We(e, t);
    function e(n, r) {
      r === void 0 && (r = {});
      var i = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return i.isFocused = !1, i.receivedUserInput = !1, i.valid = !0, i.useNativeValidation = !0, i.validateOnValueChange = !0, i.helperText = r.helperText, i.characterCounter = r.characterCounter, i.leadingIcon = r.leadingIcon, i.trailingIcon = r.trailingIcon, i.inputFocusHandler = function() {
        i.activateFocus();
      }, i.inputBlurHandler = function() {
        i.deactivateFocus();
      }, i.inputInputHandler = function() {
        i.handleInput();
      }, i.setPointerXOffset = function(a) {
        i.setTransformOrigin(a);
      }, i.textFieldInteractionHandler = function() {
        i.handleTextFieldInteraction();
      }, i.validationAttributeChangeHandler = function(a) {
        i.handleValidationAttributeChange(a);
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return og;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Jo;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return zl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var n = this.getNativeInput().type;
        return lg.indexOf(n) >= 0;
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
      var n, r, i, a;
      this.adapter.hasLabel() && this.getNativeInput().required && this.adapter.setLabelRequired(!0), this.adapter.isFocused() ? this.inputFocusHandler() : this.adapter.hasLabel() && this.shouldFloat && (this.notchOutline(!0), this.adapter.floatLabel(!0), this.styleFloating(!0)), this.adapter.registerInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.registerInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.registerInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var o = Ut(Xl), u = o.next(); !u.done; u = o.next()) {
          var l = u.value;
          this.adapter.registerInputInteractionHandler(l, this.setPointerXOffset);
        }
      } catch (v) {
        n = { error: v };
      } finally {
        try {
          u && !u.done && (r = o.return) && r.call(o);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var c = Ut(Kl), d = c.next(); !d.done; d = c.next()) {
          var l = d.value;
          this.adapter.registerTextFieldInteractionHandler(l, this.textFieldInteractionHandler);
        }
      } catch (v) {
        i = { error: v };
      } finally {
        try {
          d && !d.done && (a = c.return) && a.call(c);
        } finally {
          if (i) throw i.error;
        }
      }
      this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler), this.setcharacterCounter(this.getValue().length);
    }, e.prototype.destroy = function() {
      var n, r, i, a;
      this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var o = Ut(Xl), u = o.next(); !u.done; u = o.next()) {
          var l = u.value;
          this.adapter.deregisterInputInteractionHandler(l, this.setPointerXOffset);
        }
      } catch (v) {
        n = { error: v };
      } finally {
        try {
          u && !u.done && (r = o.return) && r.call(o);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var c = Ut(Kl), d = c.next(); !d.done; d = c.next()) {
          var l = d.value;
          this.adapter.deregisterTextFieldInteractionHandler(l, this.textFieldInteractionHandler);
        }
      } catch (v) {
        i = { error: v };
      } finally {
        try {
          d && !d.done && (a = c.return) && a.call(c);
        } finally {
          if (i) throw i.error;
        }
      }
      this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver);
    }, e.prototype.handleTextFieldInteraction = function() {
      var n = this.adapter.getNativeInput();
      n && n.disabled || (this.receivedUserInput = !0);
    }, e.prototype.handleValidationAttributeChange = function(n) {
      var r = this;
      n.some(function(i) {
        return sg.indexOf(i) > -1 ? (r.styleValidity(!0), r.adapter.setLabelRequired(r.getNativeInput().required), !0) : !1;
      }), n.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(n) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (n) {
          var r = this.adapter.getLabelWidth() * zl.LABEL_SCALE;
          this.adapter.notchOutline(r);
        } else
          this.adapter.closeOutline();
    }, e.prototype.activateFocus = function() {
      this.isFocused = !0, this.styleFocused(this.isFocused), this.adapter.activateLineRipple(), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.helperText && (this.helperText.isPersistent() || !this.helperText.isValidation() || !this.valid) && this.helperText.showToScreenReader();
    }, e.prototype.setTransformOrigin = function(n) {
      if (!(this.isDisabled() || this.adapter.hasOutline())) {
        var r = n.touches, i = r ? r[0] : n, a = i.target.getBoundingClientRect(), o = i.clientX - a.left;
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
        var r = this.isValid();
        this.styleValidity(r);
      }
      this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.validateOnValueChange && this.adapter.shakeLabel(this.shouldShake));
    }, e.prototype.isValid = function() {
      return this.useNativeValidation ? this.isNativeInputValid() : this.valid;
    }, e.prototype.setValid = function(n) {
      this.valid = n, this.styleValidity(n);
      var r = !n && !this.isFocused && !!this.getValue();
      this.adapter.hasLabel() && this.adapter.shakeLabel(r);
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
        var r = this.getNativeInput().maxLength;
        if (r === -1)
          throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");
        this.characterCounter.setCounterValue(n, r);
      }
    }, e.prototype.isBadInput = function() {
      return this.getNativeInput().validity.badInput || !1;
    }, e.prototype.isNativeInputValid = function() {
      return this.getNativeInput().validity.valid;
    }, e.prototype.styleValidity = function(n) {
      var r = e.cssClasses.INVALID;
      if (n ? this.adapter.removeClass(r) : this.adapter.addClass(r), this.helperText) {
        this.helperText.setValidity(n);
        var i = this.helperText.isValidation();
        if (!i)
          return;
        var a = this.helperText.isVisible(), o = this.helperText.getId();
        a && o ? this.adapter.setInputAttr(Jo.ARIA_DESCRIBEDBY, o) : this.adapter.removeInputAttr(Jo.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.styleFocused = function(n) {
      var r = e.cssClasses.FOCUSED;
      n ? this.adapter.addClass(r) : this.adapter.removeClass(r);
    }, e.prototype.styleDisabled = function(n) {
      var r = e.cssClasses, i = r.DISABLED, a = r.INVALID;
      n ? (this.adapter.addClass(i), this.adapter.removeClass(a)) : this.adapter.removeClass(i), this.leadingIcon && this.leadingIcon.setDisabled(n), this.trailingIcon && this.trailingIcon.setDisabled(n);
    }, e.prototype.styleFloating = function(n) {
      var r = e.cssClasses.LABEL_FLOATING;
      n ? this.adapter.addClass(r) : this.adapter.removeClass(r);
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
  }(wt)
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
var Yl = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, cg = {
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
var Zl = ["click", "keydown"], dg = (
  /** @class */
  function(t) {
    We(e, t);
    function e(n) {
      var r = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return r.savedTabIndex = null, r.interactionHandler = function(i) {
        r.handleInteraction(i);
      }, r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Yl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return cg;
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
      var n, r;
      this.savedTabIndex = this.adapter.getAttr("tabindex");
      try {
        for (var i = Ut(Zl), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          this.adapter.registerInteractionHandler(o, this.interactionHandler);
        }
      } catch (u) {
        n = { error: u };
      } finally {
        try {
          a && !a.done && (r = i.return) && r.call(i);
        } finally {
          if (n) throw n.error;
        }
      }
    }, e.prototype.destroy = function() {
      var n, r;
      try {
        for (var i = Ut(Zl), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          this.adapter.deregisterInteractionHandler(o, this.interactionHandler);
        }
      } catch (u) {
        n = { error: u };
      } finally {
        try {
          a && !a.done && (r = i.return) && r.call(i);
        } finally {
          if (n) throw n.error;
        }
      }
    }, e.prototype.setDisabled = function(n) {
      this.savedTabIndex && (n ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", Yl.ICON_ROLE)));
    }, e.prototype.setAriaLabel = function(n) {
      this.adapter.setAttr("aria-label", n);
    }, e.prototype.setContent = function(n) {
      this.adapter.setContent(n);
    }, e.prototype.handleInteraction = function(n) {
      var r = n.key === "Enter" || n.keyCode === 13;
      (n.type === "click" || r) && (n.preventDefault(), this.adapter.notifyIconAction());
    }, e;
  }(wt)
), fg = /* @__PURE__ */ be("<span><!></span>"), hg = /* @__PURE__ */ be("<label><!></label>");
function bo(t, e) {
  xe(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "floatAbove", 15, !1), o = p(e, "required", 15, !1), u = p(e, "wrapped", 3, !1), l = /* @__PURE__ */ Xe(e, [
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
  ]), c, d = /* @__PURE__ */ ve(void 0), v = new ta(), f = ue({}), m = ue({}), h = he("SMUI:generic:input:props") ?? {}, g = a();
  Ce(() => {
    s(d) && g !== a() && (g = a(), s(d).float(a()));
  });
  let b = o();
  Ce(() => {
    s(d) && b !== o() && (b = o(), s(d).setRequired(o()));
  });
  const y = he("SMUI:floating-label:mount"), S = he("SMUI:floating-label:unmount");
  it(() => {
    K(
      d,
      new tg({
        addClass: I,
        removeClass: _,
        getWidth: () => {
          var R, W;
          const z = G(), J = z.cloneNode(!0);
          (R = z.parentNode) == null || R.appendChild(J), J.classList.add("smui-floating-label--remove-transition"), J.classList.add("smui-floating-label--force-size"), J.classList.remove("mdc-floating-label--float-above");
          const P = J.scrollWidth;
          return (W = z.parentNode) == null || W.removeChild(J), P;
        },
        registerInteractionHandler: (z, J) => v.on(G(), z, J),
        deregisterInteractionHandler: (z, J) => v.off(G(), z, J)
      }),
      !0
    );
    const U = {
      get element() {
        return G();
      },
      addStyle: E,
      removeStyle: x
    };
    return y && y(U), s(d).init(), () => {
      var z;
      S && S(U), (z = s(d)) == null || z.destroy(), v.clear();
    };
  });
  function I(U) {
    f[U] || (f[U] = !0);
  }
  function _(U) {
    (!(U in f) || f[U]) && (f[U] = !1);
  }
  function E(U, z) {
    m[U] != z && (z === "" || z == null ? delete m[U] : m[U] = z);
  }
  function x(U) {
    U in m && delete m[U];
  }
  function w(U) {
    var z;
    (z = s(d)) == null || z.shake(U);
  }
  function C(U) {
    a(U);
  }
  function A(U) {
    o(U);
  }
  function M() {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    return s(d).getWidth();
  }
  function G() {
    return c;
  }
  var k = { shake: w, float: C, setRequired: A, getWidth: M, getElement: G }, j = re(), O = Q(j);
  {
    var T = (U) => {
      var z = fg();
      ke(z, (P, R) => ({ class: P, style: R, ...l }), [
        () => Pe({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": o(),
          ...f,
          [r()]: !0
        }),
        () => Object.entries(m).map(([P, R]) => `${P}: ${R};`).concat([i()]).join(" ")
      ]);
      var J = me(z);
      Se(J, () => e.children ?? pe), Ee(z, (P) => c = P, () => c), De(z, (P, R) => q == null ? void 0 : q(P, R), n), L(U, z);
    }, H = (U) => {
      var z = hg();
      ke(
        z,
        (P, R) => ({
          class: P,
          style: R,
          for: e.for || (h ? h.id : void 0),
          ...l
        }),
        [
          () => Pe({
            "mdc-floating-label": !0,
            "mdc-floating-label--float-above": a(),
            "mdc-floating-label--required": o(),
            ...f,
            [r()]: !0
          }),
          () => Object.entries(m).map(([P, R]) => `${P}: ${R};`).concat([i()]).join(" ")
        ]
      );
      var J = me(z);
      Se(J, () => e.children ?? pe), Ee(z, (P) => c = P, () => c), De(z, (P, R) => q == null ? void 0 : q(P, R), n), L(U, z);
    };
    oe(O, (U) => {
      u() ? U(T) : U(H, !1);
    });
  }
  return L(t, j), Te(k);
}
var vg = /* @__PURE__ */ be("<div></div>");
function Gc(t, e) {
  xe(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "active", 3, !1), o = /* @__PURE__ */ Xe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "active"
  ]), u, l = /* @__PURE__ */ ve(void 0), c = new ta(), d = ue({}), v = ue({});
  it(() => (K(
    l,
    new ng({
      addClass: m,
      removeClass: h,
      hasClass: f,
      setStyle: g,
      registerEventHandler: (x, w) => c.on(I(), x, w),
      deregisterEventHandler: (x, w) => c.off(I(), x, w)
    }),
    !0
  ), s(l).init(), () => {
    var x;
    (x = s(l)) == null || x.destroy(), c.clear();
  }));
  function f(x) {
    return x in d ? d[x] : I().classList.contains(x);
  }
  function m(x) {
    d[x] || (d[x] = !0);
  }
  function h(x) {
    (!(x in d) || d[x]) && (d[x] = !1);
  }
  function g(x, w) {
    v[x] != w && (w === "" || w == null ? delete v[x] : v[x] = w);
  }
  function b() {
    var x;
    (x = s(l)) == null || x.activate();
  }
  function y() {
    var x;
    (x = s(l)) == null || x.deactivate();
  }
  function S(x) {
    var w;
    (w = s(l)) == null || w.setRippleCenter(x);
  }
  function I() {
    return u;
  }
  var _ = { activate: b, deactivate: y, setRippleCenter: S, getElement: I }, E = vg();
  return ke(E, (x, w) => ({ class: x, style: w, ...o }), [
    () => Pe({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...d,
      [r()]: !0
    }),
    () => Object.entries(v).map(([x, w]) => `${x}: ${w};`).concat([i()]).join(" ")
  ]), Ee(E, (x) => u = x, () => u), De(E, (x, w) => q == null ? void 0 : q(x, w), n), L(t, E), Te(_);
}
var mg = /* @__PURE__ */ be('<div class="mdc-notched-outline__notch"><!></div>'), gg = /* @__PURE__ */ be('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function jc(t, e) {
  xe(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "notched", 3, !1), a = p(e, "noLabel", 3, !1), o = /* @__PURE__ */ Xe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "notched",
    "noLabel",
    "children"
  ]), u, l = /* @__PURE__ */ ve(void 0), c = /* @__PURE__ */ ve(void 0), d = ue({}), v = ue({}), f;
  Ce(() => {
    s(c) !== f && (s(c) ? (s(c).addStyle("transition-duration", "0s"), m("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      s(c) && s(c).removeStyle("transition-duration");
    })) : h("mdc-notched-outline--upgraded"), f = s(c));
  }), ae("SMUI:floating-label:mount", (C) => {
    K(c, C, !0);
  }), ae("SMUI:floating-label:unmount", () => {
    K(c, void 0);
  }), it(() => (K(
    l,
    new ag({
      addClass: m,
      removeClass: h,
      setNotchWidthProperty: (C) => g("width", C + "px"),
      removeNotchWidthProperty: () => b("width")
    }),
    !0
  ), s(l).init(), () => {
    var C;
    (C = s(l)) == null || C.destroy();
  }));
  function m(C) {
    d[C] || (d[C] = !0);
  }
  function h(C) {
    (!(C in d) || d[C]) && (d[C] = !1);
  }
  function g(C, A) {
    v[C] != A && (A === "" || A == null ? delete v[C] : v[C] = A);
  }
  function b(C) {
    C in v && delete v[C];
  }
  function y(C) {
    var A;
    (A = s(l)) == null || A.notch(C);
  }
  function S() {
    var C;
    (C = s(l)) == null || C.closeNotch();
  }
  function I() {
    return u;
  }
  var _ = { notch: y, closeNotch: S, getElement: I }, E = gg();
  ke(E, (C) => ({ class: C, ...o }), [
    () => Pe({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": i(),
      "mdc-notched-outline--no-label": a(),
      ...d,
      [r()]: !0
    })
  ]);
  var x = Ie(me(E), 2);
  {
    var w = (C) => {
      var A = mg(), M = me(A);
      Se(M, () => e.children ?? pe), Oe((G) => kt(A, G), [
        () => Object.entries(v).map(([G, k]) => `${G}: ${k};`).join(" ")
      ]), L(C, A);
    };
    oe(x, (C) => {
      a() || C(w);
    });
  }
  return Ee(E, (C) => u = C, () => u), De(E, (C, A) => q == null ? void 0 : q(C, A), n), L(t, E), Te(_);
}
function Zs(t, e) {
  xe(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "component", 3, jr), a = p(e, "tag", 3, "div"), o = p(e, "_smuiClass", 3, ""), u = p(e, "_smuiClassMap", 23, () => ({})), l = p(e, "_smuiContexts", 19, () => ({})), c = p(e, "_smuiProps", 19, () => ({})), d = /* @__PURE__ */ Xe(e, [
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
  ]), v;
  const f = [];
  Object.entries(u()).forEach(([y, S]) => {
    const I = he(S);
    I && "subscribe" in I && f.push(I.subscribe((_) => {
      u()[y] = _;
    }));
  });
  for (let y in l())
    l().hasOwnProperty(y) && ae(y, l()[y]);
  Ln(() => {
    for (const y of f)
      y();
  });
  function m() {
    return v.getElement();
  }
  var h = { getElement: m }, g = re(), b = Q(g);
  {
    let y = /* @__PURE__ */ fe(() => Pe({
      [o()]: !0,
      ...u(),
      [r()]: !0
    }));
    _r(b, i, (S, I) => {
      Ee(
        I(S, nt(
          {
            get tag() {
              return a();
            },
            get use() {
              return n();
            },
            get class() {
              return s(y);
            }
          },
          c,
          () => d,
          {
            children: (_, E) => {
              var x = re(), w = Q(x);
              Se(w, () => e.children ?? pe), L(_, x);
            },
            $$slots: { default: !0 }
          }
        )),
        (_) => v = _,
        () => v
      );
    });
  }
  return L(t, g), Te(h);
}
function pg(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ Xe(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ee(
    Zs(t, nt({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => n, {
      children: (o, u) => {
        var l = re(), c = Q(l);
        Se(c, () => e.children ?? pe), L(o, l);
      },
      $$slots: { default: !0 }
    })),
    (o) => r = o,
    () => r
  ), Te(a);
}
function bg(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ Xe(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ee(
    Zs(t, nt(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => n,
      {
        children: (o, u) => {
          var l = re(), c = Q(l);
          Se(c, () => e.children ?? pe), L(o, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), Te(a);
}
function _g(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ Xe(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ee(
    Zs(t, nt(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => n,
      {
        children: (o, u) => {
          var l = re(), c = Q(l);
          Se(c, () => e.children ?? pe), L(o, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), Te(a);
}
var yg = /* @__PURE__ */ be("<input/>");
function Ig(t, e) {
  xe(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "type", 3, "text"), a = p(e, "placeholder", 3, " "), o = p(e, "value", 15), u = p(e, "files", 15, null), l = p(e, "dirty", 15, !1), c = p(e, "invalid", 15, !1), d = p(e, "updateInvalid", 3, !0), v = p(e, "initialInvalid", 3, !1), f = p(e, "emptyValueNull", 19, () => o() === null), m = p(e, "emptyValueUndefined", 19, () => o() === void 0), h = /* @__PURE__ */ Xe(e, [
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
  ]), g, b = ue({}), y = ue({});
  Ce(() => {
    i() === "file" ? delete y.value : y.value = o() == null ? "" : o();
  }), it(() => {
    d() && v() && c(M().matches(":invalid"));
  });
  function S(T) {
    return T === "" ? Number.NaN : +T;
  }
  function I(T) {
    if (i() === "file") {
      u(T.currentTarget.files);
      return;
    }
    if (T.currentTarget.value === "" && f()) {
      o(null);
      return;
    }
    if (T.currentTarget.value === "" && m()) {
      o(void 0);
      return;
    }
    switch (i()) {
      case "number":
      case "range":
        o(S(T.currentTarget.value));
        break;
      default:
        o(T.currentTarget.value);
        break;
    }
  }
  function _(T) {
    (i() === "file" || i() === "range") && I(T), l(!0), d() && c(M().matches(":invalid"));
  }
  function E(T) {
    return T in b ? b[T] ?? null : M().getAttribute(T);
  }
  function x(T, H) {
    b[T] !== H && (b[T] = H);
  }
  function w(T) {
    (!(T in b) || b[T] != null) && (b[T] = void 0);
  }
  function C() {
    M().focus();
  }
  function A() {
    M().blur();
  }
  function M() {
    return g;
  }
  var G = { getAttr: E, addAttr: x, removeAttr: w, focus: C, blur: A, getElement: M }, k = yg(), j = (T) => {
    var H;
    i() !== "file" && I(T), (H = e.oninput) == null || H.call(e, T);
  }, O = (T) => {
    var H;
    _(T), (H = e.onchange) == null || H.call(e, T);
  };
  return ke(
    k,
    (T) => ({
      class: T,
      type: i(),
      placeholder: a(),
      ...y,
      ...b,
      ...h,
      oninput: j,
      onchange: O
    }),
    [
      () => Pe({ "mdc-text-field__input": !0, [r()]: !0 })
    ],
    void 0,
    void 0,
    !0
  ), Ee(k, (T) => g = T, () => g), De(k, (T, H) => q == null ? void 0 : q(T, H), n), L(t, k), Te(G);
}
var Eg = /* @__PURE__ */ be("<textarea></textarea>");
function Sg(t, e) {
  xe(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "value", 15, ""), o = p(e, "dirty", 15, !1), u = p(e, "invalid", 15, !1), l = p(e, "updateInvalid", 3, !0), c = p(e, "initialInvalid", 3, !1), d = p(e, "resizable", 3, !0), v = /* @__PURE__ */ Xe(e, [
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
  ]), f, m = ue({});
  it(() => {
    l() && c() && u(_().matches(":invalid"));
  });
  function h() {
    o(!0), l() && u(_().matches(":invalid"));
  }
  function g(C) {
    return C in m ? m[C] ?? null : _().getAttribute(C);
  }
  function b(C, A) {
    m[C] !== A && (m[C] = A);
  }
  function y(C) {
    (!(C in m) || m[C] != null) && (m[C] = void 0);
  }
  function S() {
    _().focus();
  }
  function I() {
    _().blur();
  }
  function _() {
    return f;
  }
  var E = { getAttr: g, addAttr: b, removeAttr: y, focus: S, blur: I, getElement: _ }, x = Eg(), w = (C) => {
    var A;
    h(), (A = e.onchange) == null || A.call(e, C);
  };
  return ke(
    x,
    (C) => ({
      class: C,
      style: `${d() ? "" : "resize: none; "}${i()}`,
      ...m,
      ...v,
      onchange: w
    }),
    [
      () => Pe({ "mdc-text-field__input": !0, [r()]: !0 })
    ]
  ), Ee(x, (C) => f = C, () => f), De(x, (C, A) => q == null ? void 0 : q(C, A), n), Br(() => Ca(x, a)), L(t, x), Te(E);
}
var Ag = /* @__PURE__ */ be('<span class="mdc-text-field__ripple"></span>'), Cg = /* @__PURE__ */ be("<!> <!>", 1), xg = /* @__PURE__ */ be("<span><!> <!></span>"), Tg = /* @__PURE__ */ be("<!> <!> <!>", 1), wg = /* @__PURE__ */ be("<label><!> <!> <!> <!> <!> <!> <!></label>"), Lg = /* @__PURE__ */ be("<div><!> <!> <!> <!> <!></div>"), Og = /* @__PURE__ */ be("<!> <!>", 1);
function Cs(t, e) {
  xe(e, !0);
  const { applyPassive: n } = Bc;
  let r = () => {
  };
  function i(Y) {
    return Y === r;
  }
  let a = p(e, "use", 19, () => []), o = p(e, "class", 3, ""), u = p(e, "style", 3, ""), l = p(e, "ripple", 3, !0), c = p(e, "disabled", 3, !1), d = p(e, "required", 3, !1), v = p(e, "textarea", 3, !1), f = p(e, "variant", 19, () => v() ? "outlined" : "standard"), m = p(e, "noLabel", 3, !1), h = p(e, "type", 3, "text"), g = p(e, "value", 15), b = p(e, "files", 15, r), y = p(e, "invalid", 15, r), S = p(e, "updateInvalid", 19, () => i(y())), I = p(e, "initialInvalid", 3, !1), _ = p(e, "dirty", 15, !1), E = p(e, "validateOnValueChange", 19, S), x = p(e, "useNativeValidation", 19, S), w = p(e, "withLeadingIcon", 3, r), C = p(e, "withTrailingIcon", 3, r), A = p(e, "input", 7), M = p(e, "floatingLabel", 7), G = p(e, "lineRipple", 7), k = p(e, "notchedOutline", 7), j = /* @__PURE__ */ Xe(e, [
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
  const O = g() !== void 0 || g() === void 0 && e.input$emptyValueUndefined || !i(b());
  i(b()) && b(null), i(y()) && y(!1);
  let T, H = /* @__PURE__ */ ve(void 0), U = new ta(), z = ue({}), J = ue({}), P = /* @__PURE__ */ ve(void 0), R = /* @__PURE__ */ ve(!1), W = /* @__PURE__ */ ve(ue(I())), Ae = he("SMUI:addLayoutListener"), _e, F, V = new Promise((Y) => F = Y), B, ee, Z, ce;
  const we = /* @__PURE__ */ fe(() => A() && A().getElement());
  Ce(() => {
    (_() || s(W) || !S()) && s(H) && s(H).isValid() !== !y() && (S() ? y(!s(H).isValid()) : s(H).setValid(!y()));
  }), Ce(() => {
    s(H) && s(H).getValidateOnValueChange() !== E() && s(H).setValidateOnValueChange(i(E()) ? !1 : E());
  }), Ce(() => {
    s(H) && s(H).setUseNativeValidation(i(x()) ? !0 : x());
  }), Ce(() => {
    s(H) && s(H).setDisabled(c());
  });
  let $ = g();
  Ce(() => {
    if (s(H) && O && $ !== g()) {
      $ = g();
      const Y = `${g() == null ? "" : g()}`;
      s(H).getValue() !== Y && s(H).setValue(Y);
    }
  }), Ae && (_e = Ae(N)), ae("SMUI:textfield:leading-icon:mount", (Y) => {
    B = Y;
  }), ae("SMUI:textfield:leading-icon:unmount", () => {
    B = void 0;
  }), ae("SMUI:textfield:trailing-icon:mount", (Y) => {
    ee = Y;
  }), ae("SMUI:textfield:trailing-icon:unmount", () => {
    ee = void 0;
  }), ae("SMUI:textfield:helper-text:id", (Y) => {
    K(P, Y, !0);
  }), ae("SMUI:textfield:helper-text:mount", (Y) => {
    Z = Y;
  }), ae("SMUI:textfield:helper-text:unmount", () => {
    K(P, void 0), Z = void 0;
  }), ae("SMUI:textfield:character-counter:mount", (Y) => {
    ce = Y;
  }), ae("SMUI:textfield:character-counter:unmount", () => {
    ce = void 0;
  }), it(() => {
    var Y;
    if (K(
      H,
      new ug(
        {
          // getRootAdapterMethods_
          addClass: Me,
          removeClass: Le,
          hasClass: ie,
          registerTextFieldInteractionHandler: (te, Ne) => U.on(X(), te, Ne),
          deregisterTextFieldInteractionHandler: (te, Ne) => U.off(X(), te, Ne),
          registerValidationAttributeChangeHandler: (te) => {
            const Ne = (gt) => gt.map((Bt) => Bt.attributeName).filter((Bt) => Bt), ft = new MutationObserver((gt) => {
              x() && te(Ne(gt));
            }), _t = { attributes: !0 };
            return A() && ft.observe(A().getElement(), _t), ft;
          },
          deregisterValidationAttributeChangeHandler: (te) => {
            te.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var te;
            return ((te = A()) == null ? void 0 : te.getElement()) ?? null;
          },
          setInputAttr: (te, Ne) => {
            var ft;
            (ft = A()) == null || ft.addAttr(te, Ne);
          },
          removeInputAttr: (te) => {
            var Ne;
            (Ne = A()) == null || Ne.removeAttr(te);
          },
          isFocused: () => {
            var te;
            return document.activeElement === ((te = A()) == null ? void 0 : te.getElement());
          },
          registerInputInteractionHandler: (te, Ne) => {
            var _t;
            const ft = (_t = A()) == null ? void 0 : _t.getElement();
            if (ft) {
              const gt = n();
              U.on(ft, te, Ne, typeof gt == "boolean" ? { capture: gt } : gt);
            }
          },
          deregisterInputInteractionHandler: (te, Ne) => {
            var _t;
            const ft = (_t = A()) == null ? void 0 : _t.getElement();
            ft && U.off(ft, te, Ne);
          },
          // getLabelAdapterMethods_
          floatLabel: (te) => M() && M().float(te),
          getLabelWidth: () => M() ? M().getWidth() : 0,
          hasLabel: () => !!M(),
          shakeLabel: (te) => M() && M().shake(te),
          setLabelRequired: (te) => M() && M().setRequired(te),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => G() && G().activate(),
          deactivateLineRipple: () => G() && G().deactivate(),
          setLineRippleTransformOrigin: (te) => G() && G().setRippleCenter(te),
          // getOutlineAdapterMethods_
          closeOutline: () => k() && k().closeNotch(),
          hasOutline: () => !!k(),
          notchOutline: (te) => k() && k().notch(te)
        },
        {
          get helperText() {
            return Z;
          },
          get characterCounter() {
            return ce;
          },
          get leadingIcon() {
            return B;
          },
          get trailingIcon() {
            return ee;
          }
        }
      ),
      !0
    ), O) {
      if (A() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (Y = s(H)) == null || Y.init();
    } else
      Ju().then(() => {
        var te;
        if (A() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (te = s(H)) == null || te.init();
      });
    return F(), () => {
      var te;
      (te = s(H)) == null || te.destroy(), U.clear();
    };
  }), Ln(() => {
    _e && _e();
  });
  function ie(Y) {
    return Y in z ? z[Y] ?? null : X().classList.contains(Y);
  }
  function Me(Y) {
    z[Y] || (z[Y] = !0);
  }
  function Le(Y) {
    (!(Y in z) || z[Y]) && (z[Y] = !1);
  }
  function je(Y, te) {
    J[Y] != te && (te === "" || te == null ? delete J[Y] : J[Y] = te);
  }
  function Ke() {
    var Y;
    (Y = A()) == null || Y.focus();
  }
  function Ue() {
    var Y;
    (Y = A()) == null || Y.blur();
  }
  function N() {
    if (s(H)) {
      const Y = s(H).shouldFloat;
      s(H).notchOutline(Y);
    }
  }
  function X() {
    return T;
  }
  var de = { focus: Ke, blur: Ue, layout: N, getElement: X }, Re = Og(), Fe = Q(Re);
  {
    var dt = (Y) => {
      var te = wg();
      ke(te, (qe, Qe, $e) => ({ class: qe, style: Qe, for: void 0, ...$e }), [
        () => Pe({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": c(),
          "mdc-text-field--textarea": v(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !v(),
          "mdc-text-field--no-label": m() || e.label == null,
          "mdc-text-field--label-floating": s(R) || g() != null && g() !== "",
          "mdc-text-field--with-leading-icon": i(w()) ? e.leadingIcon : w(),
          "mdc-text-field--with-trailing-icon": i(C()) ? e.trailingIcon : C(),
          "mdc-text-field--with-internal-counter": v() && e.internalCounter,
          "mdc-text-field--invalid": y(),
          ...z,
          [o()]: !0
        }),
        () => Object.entries(J).map(([qe, Qe]) => `${qe}: ${Qe};`).concat([u()]).join(" "),
        () => Jn(j, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Ne = me(te);
      {
        var ft = (qe) => {
          var Qe = Cg(), $e = Q(Qe);
          {
            var Pt = (ut) => {
              var Ct = Ag();
              L(ut, Ct);
            };
            oe($e, (ut) => {
              f() === "filled" && ut(Pt);
            });
          }
          var mn = Ie($e, 2);
          {
            var at = (ut) => {
              {
                let Ct = /* @__PURE__ */ fe(() => s(R) || g() != null && g() !== "" && (typeof g() != "number" || !isNaN(g()))), et = /* @__PURE__ */ fe(() => rt(j, "label$"));
                Ee(
                  bo(ut, nt(
                    {
                      get floatAbove() {
                        return s(Ct);
                      },
                      get required() {
                        return d();
                      },
                      wrapped: !0
                    },
                    () => s(et),
                    {
                      children: (Lt, Rn) => {
                        var Ot = re(), yt = Q(Ot);
                        {
                          var Nt = (Ft) => {
                          }, ln = (Ft) => {
                            var un = re(), Yt = Q(un);
                            {
                              var Gn = (cn) => {
                                var Wt = Mt();
                                Oe(() => st(Wt, e.label)), L(cn, Wt);
                              }, qr = (cn) => {
                                var Wt = re(), gn = Q(Wt);
                                Se(gn, () => e.label), L(cn, Wt);
                              };
                              oe(
                                Yt,
                                (cn) => {
                                  typeof e.label == "string" ? cn(Gn) : cn(qr, !1);
                                },
                                !0
                              );
                            }
                            L(Ft, un);
                          };
                          oe(yt, (Ft) => {
                            e.label == null ? Ft(Nt) : Ft(ln, !1);
                          });
                        }
                        L(Lt, Ot);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (Lt) => M(Lt),
                  () => M()
                );
              }
            };
            oe(mn, (ut) => {
              !m() && e.label != null && ut(at);
            });
          }
          L(qe, Qe);
        };
        oe(Ne, (qe) => {
          !v() && f() !== "outlined" && qe(ft);
        });
      }
      var _t = Ie(Ne, 2);
      {
        var gt = (qe) => {
          {
            let Qe = /* @__PURE__ */ fe(() => m() || e.label == null), $e = /* @__PURE__ */ fe(() => rt(j, "outline$"));
            Ee(
              jc(qe, nt(
                {
                  get noLabel() {
                    return s(Qe);
                  }
                },
                () => s($e),
                {
                  children: (Pt, mn) => {
                    var at = re(), ut = Q(at);
                    {
                      var Ct = (et) => {
                        {
                          let Lt = /* @__PURE__ */ fe(() => s(R) || g() != null && g() !== "" && (typeof g() != "number" || !isNaN(g()))), Rn = /* @__PURE__ */ fe(() => rt(j, "label$"));
                          Ee(
                            bo(et, nt(
                              {
                                get floatAbove() {
                                  return s(Lt);
                                },
                                get required() {
                                  return d();
                                },
                                wrapped: !0
                              },
                              () => s(Rn),
                              {
                                children: (Ot, yt) => {
                                  var Nt = re(), ln = Q(Nt);
                                  {
                                    var Ft = (Yt) => {
                                    }, un = (Yt) => {
                                      var Gn = re(), qr = Q(Gn);
                                      {
                                        var cn = (gn) => {
                                          var tr = Mt();
                                          Oe(() => st(tr, e.label)), L(gn, tr);
                                        }, Wt = (gn) => {
                                          var tr = re(), ra = Q(tr);
                                          Se(ra, () => e.label), L(gn, tr);
                                        };
                                        oe(
                                          qr,
                                          (gn) => {
                                            typeof e.label == "string" ? gn(cn) : gn(Wt, !1);
                                          },
                                          !0
                                        );
                                      }
                                      L(Yt, Gn);
                                    };
                                    oe(ln, (Yt) => {
                                      e.label == null ? Yt(Ft) : Yt(un, !1);
                                    });
                                  }
                                  L(Ot, Nt);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (Ot) => M(Ot),
                            () => M()
                          );
                        }
                      };
                      oe(ut, (et) => {
                        !m() && e.label != null && et(Ct);
                      });
                    }
                    L(Pt, at);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (Pt) => k(Pt),
              () => k()
            );
          }
        };
        oe(_t, (qe) => {
          (v() || f() === "outlined") && qe(gt);
        });
      }
      var Bt = Ie(_t, 2);
      Xa(Bt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (qe, Qe) => {
          var $e = re(), Pt = Q($e);
          Se(Pt, () => e.leadingIcon ?? pe), L(qe, $e);
        },
        $$slots: { default: !0 }
      });
      var Ir = Ie(Bt, 2);
      Se(Ir, () => e.children ?? pe);
      var vt = Ie(Ir, 2);
      {
        var Dt = (qe) => {
          var Qe = xg(), $e = me(Qe);
          {
            let mn = /* @__PURE__ */ fe(() => rt(j, "input$"));
            Ee(
              Sg($e, nt(
                {
                  get disabled() {
                    return c();
                  },
                  get required() {
                    return d();
                  },
                  get updateInvalid() {
                    return S();
                  },
                  get initialInvalid() {
                    return s(W);
                  },
                  get "aria-controls"() {
                    return s(P);
                  },
                  get "aria-describedby"() {
                    return s(P);
                  }
                },
                () => s(mn),
                {
                  onblur: (at) => {
                    var ut;
                    K(R, !1), K(W, !0), Je(X(), "blur", at), (ut = e.input$onblur) == null || ut.call(e, at);
                  },
                  onfocus: (at) => {
                    var ut;
                    K(R, !0), Je(X(), "focus", at), (ut = e.input$onfocus) == null || ut.call(e, at);
                  },
                  get value() {
                    return g();
                  },
                  set value(at) {
                    g(at);
                  },
                  get dirty() {
                    return _();
                  },
                  set dirty(at) {
                    _(at);
                  },
                  get invalid() {
                    return y();
                  },
                  set invalid(at) {
                    y(at);
                  }
                }
              )),
              (at) => A(at),
              () => A()
            );
          }
          var Pt = Ie($e, 2);
          Se(Pt, () => e.internalCounter ?? pe), Oe((mn) => Ws(Qe, 1, mn), [
            () => oc(Pe({
              "mdc-text-field__resizer": !("input$resizable" in j) || e.input$resizable
            }))
          ]), L(qe, Qe);
        }, It = (qe) => {
          var Qe = Tg(), $e = Q(Qe);
          {
            var Pt = (Ct) => {
              var et = re(), Lt = Q(et);
              {
                var Rn = (yt) => {
                  bg(yt, {
                    children: (Nt, ln) => {
                      var Ft = Mt();
                      Oe(() => st(Ft, e.prefix)), L(Nt, Ft);
                    },
                    $$slots: { default: !0 }
                  });
                }, Ot = (yt) => {
                  var Nt = re(), ln = Q(Nt);
                  Se(ln, () => e.prefix ?? pe), L(yt, Nt);
                };
                oe(Lt, (yt) => {
                  typeof e.prefix == "string" ? yt(Rn) : yt(Ot, !1);
                });
              }
              L(Ct, et);
            };
            oe($e, (Ct) => {
              e.prefix != null && Ct(Pt);
            });
          }
          var mn = Ie($e, 2);
          {
            let Ct = /* @__PURE__ */ fe(() => rt(j, "input$"));
            Ee(
              Ig(mn, nt(
                {
                  get type() {
                    return h();
                  },
                  get disabled() {
                    return c();
                  },
                  get required() {
                    return d();
                  },
                  get updateInvalid() {
                    return S();
                  },
                  get initialInvalid() {
                    return s(W);
                  },
                  get "aria-controls"() {
                    return s(P);
                  },
                  get "aria-describedby"() {
                    return s(P);
                  }
                },
                () => m() && e.label != null && typeof e.label == "string" ? { placeholder: e.label } : {},
                () => s(Ct),
                {
                  onblur: (et) => {
                    var Lt;
                    K(R, !1), K(W, !0), Je(X(), "blur", et), (Lt = e.input$onblur) == null || Lt.call(e, et);
                  },
                  onfocus: (et) => {
                    var Lt;
                    K(R, !0), Je(X(), "focus", et), (Lt = e.input$onfocus) == null || Lt.call(e, et);
                  },
                  get value() {
                    return g();
                  },
                  set value(et) {
                    g(et);
                  },
                  get files() {
                    return b();
                  },
                  set files(et) {
                    b(et);
                  },
                  get dirty() {
                    return _();
                  },
                  set dirty(et) {
                    _(et);
                  },
                  get invalid() {
                    return y();
                  },
                  set invalid(et) {
                    y(et);
                  }
                }
              )),
              (et) => A(et),
              () => A()
            );
          }
          var at = Ie(mn, 2);
          {
            var ut = (Ct) => {
              var et = re(), Lt = Q(et);
              {
                var Rn = (yt) => {
                  _g(yt, {
                    children: (Nt, ln) => {
                      var Ft = Mt();
                      Oe(() => st(Ft, e.suffix)), L(Nt, Ft);
                    },
                    $$slots: { default: !0 }
                  });
                }, Ot = (yt) => {
                  var Nt = re(), ln = Q(Nt);
                  Se(ln, () => e.suffix ?? pe), L(yt, Nt);
                };
                oe(Lt, (yt) => {
                  typeof e.suffix == "string" ? yt(Rn) : yt(Ot, !1);
                });
              }
              L(Ct, et);
            };
            oe(at, (Ct) => {
              e.suffix != null && Ct(ut);
            });
          }
          L(qe, Qe);
        };
        oe(vt, (qe) => {
          v() && typeof g() == "string" ? qe(Dt) : qe(It, !1);
        });
      }
      var On = Ie(vt, 2);
      Xa(On, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (qe, Qe) => {
          var $e = re(), Pt = Q($e);
          Se(Pt, () => e.trailingIcon ?? pe), L(qe, $e);
        },
        $$slots: { default: !0 }
      });
      var yi = Ie(On, 2);
      {
        var Vn = (qe) => {
          {
            let Qe = /* @__PURE__ */ fe(() => rt(j, "ripple$"));
            Ee(Gc(qe, nt(() => s(Qe))), ($e) => G($e), () => G());
          }
        };
        oe(yi, (qe) => {
          !v() && f() !== "outlined" && l() && qe(Vn);
        });
      }
      Ee(te, (qe) => T = qe, () => T), De(te, (qe, Qe) => Xt == null ? void 0 : Xt(qe, Qe), () => ({
        ripple: !v() && f() === "filled",
        unbounded: !1,
        addClass: Me,
        removeClass: Le,
        addStyle: je,
        eventTarget: s(we),
        activeTarget: s(we),
        initPromise: V
      })), De(te, (qe, Qe) => q == null ? void 0 : q(qe, Qe), a), L(Y, te);
    }, bt = (Y) => {
      var te = Lg();
      ke(te, (vt, Dt, It) => ({ class: vt, style: Dt, ...It }), [
        () => Pe({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": c(),
          "mdc-text-field--textarea": v(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !v(),
          "mdc-text-field--no-label": m() || e.label == null,
          "mdc-text-field--with-leading-icon": e.leadingIcon,
          "mdc-text-field--with-trailing-icon": e.trailingIcon,
          "mdc-text-field--invalid": y(),
          ...z,
          [o()]: !0
        }),
        () => Object.entries(J).map(([vt, Dt]) => `${vt}: ${Dt};`).concat([u()]).join(" "),
        () => Jn(j, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Ne = me(te);
      {
        var ft = (vt) => {
          var Dt = re(), It = Q(Dt);
          Se(It, () => e.label ?? pe), L(vt, Dt);
        };
        oe(Ne, (vt) => {
          typeof e.label != "string" && vt(ft);
        });
      }
      var _t = Ie(Ne, 2);
      Xa(_t, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (vt, Dt) => {
          var It = re(), On = Q(It);
          Se(On, () => e.leadingIcon ?? pe), L(vt, It);
        },
        $$slots: { default: !0 }
      });
      var gt = Ie(_t, 2);
      Se(gt, () => e.children ?? pe);
      var Bt = Ie(gt, 2);
      Xa(Bt, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (vt, Dt) => {
          var It = re(), On = Q(It);
          Se(On, () => e.trailingIcon ?? pe), L(vt, It);
        },
        $$slots: { default: !0 }
      });
      var Ir = Ie(Bt, 2);
      Se(Ir, () => e.line ?? pe), Ee(te, (vt) => T = vt, () => T), De(te, (vt, Dt) => Xt == null ? void 0 : Xt(vt, Dt), () => ({
        ripple: l(),
        unbounded: !1,
        addClass: Me,
        removeClass: Le,
        addStyle: je
      })), De(te, (vt, Dt) => q == null ? void 0 : q(vt, Dt), a), L(Y, te);
    };
    oe(Fe, (Y) => {
      O ? Y(dt) : Y(bt, !1);
    });
  }
  var se = Ie(Fe, 2);
  {
    var ye = (Y) => {
      {
        let te = /* @__PURE__ */ fe(() => rt(j, "helperLine$"));
        pg(Y, nt(() => s(te), {
          children: (Ne, ft) => {
            var _t = re(), gt = Q(_t);
            Se(gt, () => e.helper ?? pe), L(Ne, _t);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    oe(se, (Y) => {
      e.helper && Y(ye);
    });
  }
  return L(t, Re), Te(de);
}
var Rg = /* @__PURE__ */ be("<i><!></i>");
function Mg(t, e) {
  xe(e, !0);
  const n = () => Yn(h, "$leadingStore", r), [r, i] = yr();
  let a = p(e, "use", 19, () => []), o = p(e, "class", 3, ""), u = p(e, "tabindex", 19, () => e.role === "button" ? 0 : -1), l = p(e, "disabled", 3, !1), c = /* @__PURE__ */ Xe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "role",
    "tabindex",
    "disabled",
    "children"
  ]), d, v = /* @__PURE__ */ ve(void 0), f = new ta(), m = ue({});
  const h = he("SMUI:textfield:icon:leading"), g = n();
  let b = /* @__PURE__ */ ve(void 0);
  const y = /* @__PURE__ */ fe(() => ({ role: e.role, tabindex: u() })), S = he("SMUI:textfield:leading-icon:mount"), I = he("SMUI:textfield:leading-icon:unmount"), _ = he("SMUI:textfield:trailing-icon:mount"), E = he("SMUI:textfield:trailing-icon:unmount");
  it(() => (K(
    v,
    new dg({
      getAttr: x,
      setAttr: w,
      removeAttr: C,
      setContent: (H) => {
        K(b, H, !0);
      },
      registerInteractionHandler: (H, U) => f.on(A(), H, U),
      deregisterInteractionHandler: (H, U) => f.off(A(), H, U),
      notifyIconAction: () => Je(A(), "SMUITextFieldIcon")
    }),
    !0
  ), g ? S && S(s(v)) : _ && _(s(v)), s(v).init(), () => {
    var H;
    s(v) && (g ? I && I(s(v)) : E && E(s(v))), (H = s(v)) == null || H.destroy(), f.clear();
  }));
  function x(H) {
    return H in m ? m[H] ?? null : A().getAttribute(H);
  }
  function w(H, U) {
    m[H] !== U && (m[H] = U);
  }
  function C(H) {
    (!(H in m) || m[H] != null) && (m[H] = void 0);
  }
  function A() {
    return d;
  }
  var M = { getElement: A }, G = Rg();
  ke(
    G,
    (H) => ({
      class: H,
      "aria-hidden": u() === -1 ? "true" : "false",
      "aria-disabled": e.role === "button" ? l() ? "true" : "false" : void 0,
      ...s(y),
      ...m,
      ...c
    }),
    [
      () => Pe({
        "mdc-text-field__icon": !0,
        "mdc-text-field__icon--leading": g,
        "mdc-text-field__icon--trailing": !g,
        [o()]: !0
      })
    ]
  );
  var k = me(G);
  {
    var j = (H) => {
      var U = re(), z = Q(U);
      Se(z, () => e.children ?? pe), L(H, U);
    }, O = (H) => {
      var U = Mt();
      Oe(() => st(U, s(b))), L(H, U);
    };
    oe(k, (H) => {
      s(b) == null ? H(j) : H(O, !1);
    });
  }
  Ee(G, (H) => d = H, () => d), De(G, (H, U) => q == null ? void 0 : q(H, U), a), L(t, G);
  var T = Te(M);
  return i(), T;
}
function Dg(t, e) {
  xe(e, !0);
  let n = p(e, "placeholder", 3, ""), r = p(e, "label", 3, ""), i = p(e, "icon", 3, ""), a = p(e, "value", 15, ""), o = p(e, "variant", 3, "standard"), u = p(e, "styles", 3, ""), l = p(e, "required", 3, !1), c = p(e, "invalid", 3, !1), d = p(e, "oninput", 3, () => {
  });
  var v = re(), f = Q(v);
  {
    var m = (g) => {
      {
        const b = (S) => {
          Mg(S, {
            class: "material-icons",
            children: (I, _) => {
              var E = Mt();
              Oe(() => st(E, i())), L(I, E);
            },
            $$slots: { default: !0 }
          });
        };
        let y = /* @__PURE__ */ fe(() => `width: 100%; ${u()}`);
        Cs(g, {
          get label() {
            return r();
          },
          get required() {
            return l();
          },
          get invalid() {
            return c();
          },
          get placeholder() {
            return n();
          },
          get style() {
            return s(y);
          },
          get variant() {
            return o();
          },
          get oninput() {
            return d();
          },
          get value() {
            return a();
          },
          set value(S) {
            a(S);
          },
          leadingIcon: b,
          $$slots: { leadingIcon: !0 }
        });
      }
    }, h = (g) => {
      Cs(g, {
        get label() {
          return r();
        },
        get placeholder() {
          return n();
        },
        style: "width: 100%",
        get variant() {
          return o();
        },
        get required() {
          return l();
        },
        get invalid() {
          return c();
        },
        get oninput() {
          return d();
        },
        get value() {
          return a();
        },
        set value(b) {
          a(b);
        }
      });
    };
    oe(f, (g) => {
      i() ? g(m) : g(h, !1);
    });
  }
  L(t, v), Te();
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
var Pg = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, Ng = {
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
}, da = {
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
var ui;
(function(t) {
  t[t.TOP_LEFT = 0] = "TOP_LEFT", t[t.TOP_RIGHT = 4] = "TOP_RIGHT", t[t.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", t[t.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", t[t.TOP_START = 8] = "TOP_START", t[t.TOP_END = 12] = "TOP_END", t[t.BOTTOM_START = 9] = "BOTTOM_START", t[t.BOTTOM_END = 13] = "BOTTOM_END";
})(ui || (ui = {}));
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
var Ar, ar, ze = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
Ar = {}, Ar["" + ze.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", Ar["" + ze.LIST_ITEM_CLASS] = "mdc-list-item", Ar["" + ze.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", Ar["" + ze.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", Ar["" + ze.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", Ar["" + ze.ROOT] = "mdc-list";
var Ci = (ar = {}, ar["" + ze.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", ar["" + ze.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", ar["" + ze.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", ar["" + ze.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", ar["" + ze.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", ar["" + ze.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", ar["" + ze.ROOT] = "mdc-deprecated-list", ar), Cr = {
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
    .` + Ci[ze.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ci[ze.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + ze.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + ze.LIST_ITEM_CLASS + ` a,
    .` + ze.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + ze.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + Ci[ze.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ci[ze.LIST_ITEM_CLASS] + ` a,
    .` + Ci[ze.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + Ci[ze.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, Et = {
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
var Hg = ["input", "button", "textarea", "select"], En = function(t) {
  var e = t.target;
  if (e) {
    var n = ("" + e.tagName).toLowerCase();
    Hg.indexOf(n) === -1 && t.preventDefault();
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
function Ug() {
  var t = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return t;
}
function kg(t, e) {
  for (var n = /* @__PURE__ */ new Map(), r = 0; r < t; r++) {
    var i = e(r).trim();
    if (i) {
      var a = i[0].toLowerCase();
      n.has(a) || n.set(a, []), n.get(a).push({ text: i.toLowerCase(), index: r });
    }
  }
  return n.forEach(function(o) {
    o.sort(function(u, l) {
      return u.index - l.index;
    });
  }), n;
}
function xs(t, e) {
  var n = t.nextChar, r = t.focusItemAtIndex, i = t.sortedIndexByFirstChar, a = t.focusedItemIndex, o = t.skipFocus, u = t.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    qc(e);
  }, Et.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + n;
  var l;
  return e.typeaheadBuffer.length === 1 ? l = Bg(i, a, u, e) : l = Fg(i, u, e), l !== -1 && !o && r(l), l;
}
function Bg(t, e, n, r) {
  var i = r.typeaheadBuffer[0], a = t.get(i);
  if (!a)
    return -1;
  if (i === r.currentFirstChar && a[r.sortedIndexCursor].index === e) {
    r.sortedIndexCursor = (r.sortedIndexCursor + 1) % a.length;
    var o = a[r.sortedIndexCursor].index;
    if (!n(o))
      return o;
  }
  r.currentFirstChar = i;
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
  return u !== -1 ? (r.sortedIndexCursor = u, a[r.sortedIndexCursor].index) : -1;
}
function Fg(t, e, n) {
  var r = n.typeaheadBuffer[0], i = t.get(r);
  if (!i)
    return -1;
  var a = i[n.sortedIndexCursor];
  if (a.text.lastIndexOf(n.typeaheadBuffer, 0) === 0 && !e(a.index))
    return a.index;
  for (var o = (n.sortedIndexCursor + 1) % i.length, u = -1; o !== n.sortedIndexCursor; ) {
    var l = i[o], c = l.text.lastIndexOf(n.typeaheadBuffer, 0) === 0, d = !e(l.index);
    if (c && d) {
      u = o;
      break;
    }
    o = (o + 1) % i.length;
  }
  return u !== -1 ? (n.sortedIndexCursor = u, i[n.sortedIndexCursor].index) : -1;
}
function Wc(t) {
  return t.typeaheadBuffer.length > 0;
}
function qc(t) {
  t.typeaheadBuffer = "";
}
function Ql(t, e) {
  var n = t.event, r = t.isTargetListItem, i = t.focusedItemIndex, a = t.focusItemAtIndex, o = t.sortedIndexByFirstChar, u = t.isItemAtIndexDisabled, l = xt(n) === "ArrowLeft", c = xt(n) === "ArrowUp", d = xt(n) === "ArrowRight", v = xt(n) === "ArrowDown", f = xt(n) === "Home", m = xt(n) === "End", h = xt(n) === "Enter", g = xt(n) === "Spacebar";
  if (n.altKey || n.ctrlKey || n.metaKey || l || c || d || v || f || m || h)
    return -1;
  var b = !g && n.key.length === 1;
  if (b) {
    En(n);
    var y = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: n.key.toLowerCase(),
      sortedIndexByFirstChar: o,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return xs(y, e);
  }
  if (!g)
    return -1;
  r && En(n);
  var S = r && Wc(e);
  if (S) {
    var y = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: " ",
      sortedIndexByFirstChar: o,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return xs(y, e);
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
function Vg(t) {
  return t instanceof Array;
}
var Gg = ["Alt", "Control", "Meta", "Shift"];
function Jl(t) {
  var e = new Set(t ? Gg.filter(function(n) {
    return t.getModifierState(n);
  }) : []);
  return function(n) {
    return n.every(function(r) {
      return e.has(r);
    }) && n.length === e.size;
  };
}
var jg = (
  /** @class */
  function(t) {
    We(e, t);
    function e(n) {
      var r = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return r.wrapFocus = !1, r.isVertical = !0, r.isSingleSelectionList = !1, r.areDisabledItemsFocusable = !0, r.selectedIndex = Et.UNSET_INDEX, r.focusedItemIndex = Et.UNSET_INDEX, r.useActivatedClass = !1, r.useSelectedAttr = !1, r.ariaCurrentAttrValue = null, r.isCheckboxList = !1, r.isRadioList = !1, r.lastSelectedIndex = null, r.hasTypeahead = !1, r.typeaheadState = Ug(), r.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Cr;
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
        return Et;
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
      if (n !== Et.UNSET_INDEX) {
        var r = this.adapter.listItemAtIndexHasClass(n, ze.LIST_ITEM_ACTIVATED_CLASS);
        r && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = n;
      }
    }, e.prototype.getSelectedIndexFromDOM = function() {
      for (var n = Et.UNSET_INDEX, r = this.adapter.getListItemCount(), i = 0; i < r; i++) {
        var a = this.adapter.listItemAtIndexHasClass(i, ze.LIST_ITEM_SELECTED_CLASS), o = this.adapter.listItemAtIndexHasClass(i, ze.LIST_ITEM_ACTIVATED_CLASS);
        if (a || o) {
          n = i;
          break;
        }
      }
      return n;
    }, e.prototype.setHasTypeahead = function(n) {
      this.hasTypeahead = n, n && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex());
    }, e.prototype.isTypeaheadInProgress = function() {
      return this.hasTypeahead && Wc(this.typeaheadState);
    }, e.prototype.setUseActivatedClass = function(n) {
      this.useActivatedClass = n;
    }, e.prototype.setUseSelectedAttribute = function(n) {
      this.useSelectedAttr = n;
    }, e.prototype.getSelectedIndex = function() {
      return this.selectedIndex;
    }, e.prototype.setSelectedIndex = function(n, r) {
      r === void 0 && (r = {}), this.isIndexValid(n) && (this.isCheckboxList ? this.setCheckboxAtIndex(n, r) : this.isRadioList ? this.setRadioAtIndex(n, r) : this.setSingleSelectionAtIndex(n, r));
    }, e.prototype.handleFocusIn = function(n) {
      n >= 0 && (this.focusedItemIndex = n, this.adapter.setAttributeForElementIndex(n, "tabindex", "0"), this.adapter.setTabIndexForListItemChildren(n, "0"));
    }, e.prototype.handleFocusOut = function(n) {
      var r = this;
      n >= 0 && (this.adapter.setAttributeForElementIndex(n, "tabindex", "-1"), this.adapter.setTabIndexForListItemChildren(n, "-1")), setTimeout(function() {
        r.adapter.isFocusInsideList() || r.setTabindexToFirstSelectedOrFocusedItem();
      }, 0);
    }, e.prototype.isIndexDisabled = function(n) {
      return this.adapter.listItemAtIndexHasClass(n, ze.LIST_ITEM_DISABLED_CLASS);
    }, e.prototype.handleKeydown = function(n, r, i) {
      var a = this, o, u = xt(n) === "ArrowLeft", l = xt(n) === "ArrowUp", c = xt(n) === "ArrowRight", d = xt(n) === "ArrowDown", v = xt(n) === "Home", f = xt(n) === "End", m = xt(n) === "Enter", h = xt(n) === "Spacebar", g = this.isVertical && d || !this.isVertical && c, b = this.isVertical && l || !this.isVertical && u, y = n.key === "A" || n.key === "a", S = Jl(n);
      if (this.adapter.isRootFocused()) {
        if ((b || f) && S([]))
          n.preventDefault(), this.focusLastElement();
        else if ((g || v) && S([]))
          n.preventDefault(), this.focusFirstElement();
        else if (b && S(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var I = this.focusLastElement();
          I !== -1 && this.setSelectedIndexOnAction(I, !1);
        } else if (g && S(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var I = this.focusFirstElement();
          I !== -1 && this.setSelectedIndexOnAction(I, !1);
        }
        if (this.hasTypeahead) {
          var _ = {
            event: n,
            focusItemAtIndex: function(w) {
              a.focusItemAtIndex(w);
            },
            focusedItemIndex: -1,
            isTargetListItem: r,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(w) {
              return a.isIndexDisabled(w);
            }
          };
          Ql(_, this.typeaheadState);
        }
        return;
      }
      var E = this.adapter.getFocusedElementIndex();
      if (!(E === -1 && (E = i, E < 0))) {
        if (g && S([]))
          En(n), this.focusNextElement(E);
        else if (b && S([]))
          En(n), this.focusPrevElement(E);
        else if (g && S(["Shift"]) && this.isCheckboxList) {
          En(n);
          var I = this.focusNextElement(E);
          I !== -1 && this.setSelectedIndexOnAction(I, !1);
        } else if (b && S(["Shift"]) && this.isCheckboxList) {
          En(n);
          var I = this.focusPrevElement(E);
          I !== -1 && this.setSelectedIndexOnAction(I, !1);
        } else if (v && S([]))
          En(n), this.focusFirstElement();
        else if (f && S([]))
          En(n), this.focusLastElement();
        else if (v && S(["Control", "Shift"]) && this.isCheckboxList) {
          if (En(n), this.isIndexDisabled(E))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, E, E);
        } else if (f && S(["Control", "Shift"]) && this.isCheckboxList) {
          if (En(n), this.isIndexDisabled(E))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(E, this.adapter.getListItemCount() - 1, E);
        } else if (y && S(["Control"]) && this.isCheckboxList)
          n.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === Et.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((m || h) && S([])) {
          if (r) {
            var x = n.target;
            if (x && x.tagName === "A" && m || (En(n), this.isIndexDisabled(E)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(E, !1), this.adapter.notifyAction(E));
          }
        } else if ((m || h) && S(["Shift"]) && this.isCheckboxList) {
          var x = n.target;
          if (x && x.tagName === "A" && m || (En(n), this.isIndexDisabled(E)))
            return;
          this.isTypeaheadInProgress() || (this.toggleCheckboxRange((o = this.lastSelectedIndex) !== null && o !== void 0 ? o : E, E, E), this.adapter.notifyAction(E));
        }
        if (this.hasTypeahead) {
          var _ = {
            event: n,
            focusItemAtIndex: function(C) {
              a.focusItemAtIndex(C);
            },
            focusedItemIndex: this.focusedItemIndex,
            isTargetListItem: r,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(C) {
              return a.isIndexDisabled(C);
            }
          };
          Ql(_, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(n, r, i) {
      var a, o = Jl(i);
      n !== Et.UNSET_INDEX && (this.isIndexDisabled(n) || (o([]) ? (this.isSelectableList() && this.setSelectedIndexOnAction(n, r), this.adapter.notifyAction(n)) : this.isCheckboxList && o(["Shift"]) && (this.toggleCheckboxRange((a = this.lastSelectedIndex) !== null && a !== void 0 ? a : n, n, n), this.adapter.notifyAction(n))));
    }, e.prototype.focusNextElement = function(n) {
      var r = this.adapter.getListItemCount(), i = n, a = null;
      do {
        if (i++, i >= r)
          if (this.wrapFocus)
            i = 0;
          else
            return n;
        if (i === a)
          return -1;
        a = a ?? i;
      } while (!this.areDisabledItemsFocusable && this.isIndexDisabled(i));
      return this.focusItemAtIndex(i), i;
    }, e.prototype.focusPrevElement = function(n) {
      var r = this.adapter.getListItemCount(), i = n, a = null;
      do {
        if (i--, i < 0)
          if (this.wrapFocus)
            i = r - 1;
          else
            return n;
        if (i === a)
          return -1;
        a = a ?? i;
      } while (!this.areDisabledItemsFocusable && this.isIndexDisabled(i));
      return this.focusItemAtIndex(i), i;
    }, e.prototype.focusFirstElement = function() {
      return this.focusNextElement(-1);
    }, e.prototype.focusLastElement = function() {
      return this.focusPrevElement(this.adapter.getListItemCount());
    }, e.prototype.focusInitialElement = function() {
      var n = this.getFirstSelectedOrFocusedItemIndex();
      return this.focusItemAtIndex(n), n;
    }, e.prototype.setEnabled = function(n, r) {
      this.isIndexValid(n, !1) && (r ? (this.adapter.removeClassForElementIndex(n, ze.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, Cr.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(n, ze.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, Cr.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(n, r) {
      if (r === void 0 && (r = {}), !(this.selectedIndex === n && !r.forceUpdate)) {
        var i = ze.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (i = ze.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== Et.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, i), this.setAriaForSingleSelectionAtIndex(n), this.setTabindexAtIndex(n), n !== Et.UNSET_INDEX && this.adapter.addClassForElementIndex(n, i), this.selectedIndex = n, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([n]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(n) {
      this.selectedIndex === Et.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(n, Cr.ARIA_CURRENT));
      var r = this.ariaCurrentAttrValue !== null, i = r ? Cr.ARIA_CURRENT : Cr.ARIA_SELECTED;
      if (this.selectedIndex !== Et.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), n !== Et.UNSET_INDEX) {
        var a = r ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(n, i, a);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? Cr.ARIA_SELECTED : Cr.ARIA_CHECKED;
    }, e.prototype.setRadioAtIndex = function(n, r) {
      r === void 0 && (r = {});
      var i = this.getSelectionAttribute();
      this.adapter.setCheckedCheckboxOrRadioAtIndex(n, !0), !(this.selectedIndex === n && !r.forceUpdate) && (this.selectedIndex !== Et.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), this.adapter.setAttributeForElementIndex(n, i, "true"), this.selectedIndex = n, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([n]));
    }, e.prototype.setCheckboxAtIndex = function(n, r) {
      r === void 0 && (r = {});
      for (var i = this.selectedIndex, a = r.isUserInteraction ? new Set(i === Et.UNSET_INDEX ? [] : i) : null, o = this.getSelectionAttribute(), u = [], l = 0; l < this.adapter.getListItemCount(); l++) {
        var c = a == null ? void 0 : a.has(l), d = n.indexOf(l) >= 0;
        d !== c && u.push(l), this.adapter.setCheckedCheckboxOrRadioAtIndex(l, d), this.adapter.setAttributeForElementIndex(l, o, d ? "true" : "false");
      }
      this.selectedIndex = n, r.isUserInteraction && u.length && this.adapter.notifySelectionChange(u);
    }, e.prototype.toggleCheckboxRange = function(n, r, i) {
      this.lastSelectedIndex = i;
      for (var a = new Set(this.selectedIndex === Et.UNSET_INDEX ? [] : this.selectedIndex), o = !(a != null && a.has(i)), u = gr([n, r].sort(), 2), l = u[0], c = u[1], d = this.getSelectionAttribute(), v = [], f = l; f <= c; f++)
        if (!this.isIndexDisabled(f)) {
          var m = a.has(f);
          o !== m && (v.push(f), this.adapter.setCheckedCheckboxOrRadioAtIndex(f, o), this.adapter.setAttributeForElementIndex(f, d, "" + o), o ? a.add(f) : a.delete(f));
        }
      v.length && (this.selectedIndex = Zn([], gr(a)), this.adapter.notifySelectionChange(v));
    }, e.prototype.setTabindexAtIndex = function(n) {
      this.focusedItemIndex === Et.UNSET_INDEX && n !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== n && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== n && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), n !== Et.UNSET_INDEX && this.adapter.setAttributeForElementIndex(n, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var n = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(n);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== Et.UNSET_INDEX ? this.selectedIndex : Vg(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(n, r) {
        return Math.min(n, r);
      }) : 0 : Math.max(this.focusedItemIndex, 0);
    }, e.prototype.isIndexValid = function(n, r) {
      var i = this;
      if (r === void 0 && (r = !0), n instanceof Array) {
        if (!this.isCheckboxList && r)
          throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
        return n.length === 0 ? !0 : n.some(function(a) {
          return i.isIndexInRange(a);
        });
      } else if (typeof n == "number") {
        if (this.isCheckboxList && r)
          throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + n);
        return this.isIndexInRange(n) || this.isSingleSelectionList && n === Et.UNSET_INDEX;
      } else
        return !1;
    }, e.prototype.isIndexInRange = function(n) {
      var r = this.adapter.getListItemCount();
      return n >= 0 && n < r;
    }, e.prototype.setSelectedIndexOnAction = function(n, r) {
      this.lastSelectedIndex = n, this.isCheckboxList ? (this.toggleCheckboxAtIndex(n, r), this.adapter.notifySelectionChange([n])) : this.setSelectedIndex(n, { isUserInteraction: !0 });
    }, e.prototype.toggleCheckboxAtIndex = function(n, r) {
      var i = this.getSelectionAttribute(), a = this.adapter.isCheckboxCheckedAtIndex(n), o;
      r ? o = a : (o = !a, this.adapter.setCheckedCheckboxOrRadioAtIndex(n, o)), this.adapter.setAttributeForElementIndex(n, i, o ? "true" : "false");
      var u = this.selectedIndex === Et.UNSET_INDEX ? [] : this.selectedIndex.slice();
      o ? u.push(n) : u = u.filter(function(l) {
        return l !== n;
      }), this.selectedIndex = u;
    }, e.prototype.focusItemAtIndex = function(n) {
      this.adapter.focusItemAtIndex(n), this.focusedItemIndex = n;
    }, e.prototype.checkboxListToggleAll = function(n, r) {
      var i = this.adapter.getListItemCount();
      if (n.length === i)
        this.setCheckboxAtIndex([], { isUserInteraction: r });
      else {
        for (var a = [], o = 0; o < i; o++)
          (!this.isIndexDisabled(o) || n.indexOf(o) > -1) && a.push(o);
        this.setCheckboxAtIndex(a, { isUserInteraction: r });
      }
    }, e.prototype.typeaheadMatchItem = function(n, r, i) {
      var a = this;
      i === void 0 && (i = !1);
      var o = {
        focusItemAtIndex: function(u) {
          a.focusItemAtIndex(u);
        },
        focusedItemIndex: r || this.focusedItemIndex,
        nextChar: n,
        sortedIndexByFirstChar: this.sortedIndexByFirstChar,
        skipFocus: i,
        isItemAtIndexDisabled: function(u) {
          return a.isIndexDisabled(u);
        }
      };
      return xs(o, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return kg(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      qc(this.typeaheadState);
    }, e;
  }(wt)
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
var zc = (
  /** @class */
  function(t) {
    We(e, t);
    function e(n) {
      var r = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return r.isSurfaceOpen = !1, r.isQuickOpen = !1, r.isHoistedElement = !1, r.isFixedPosition = !1, r.isHorizontallyCenteredOnViewport = !1, r.maxHeight = 0, r.openBottomBias = 0, r.openAnimationEndTimerId = 0, r.closeAnimationEndTimerId = 0, r.animationRequestId = 0, r.anchorCorner = ui.TOP_START, r.originCorner = ui.TOP_START, r.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, r.position = { x: 0, y: 0 }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Pg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Ng;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return da;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "Corner", {
      get: function() {
        return ui;
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
      var n = e.cssClasses, r = n.ROOT, i = n.OPEN;
      if (!this.adapter.hasClass(r))
        throw new Error(r + " class required in root element.");
      this.adapter.hasClass(i) && (this.isSurfaceOpen = !0);
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
    }, e.prototype.setAbsolutePosition = function(n, r) {
      this.position.x = this.isFinite(n) ? n : 0, this.position.y = this.isFinite(r) ? r : 0;
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
        }, da.TRANSITION_OPEN_DURATION);
      }), this.isSurfaceOpen = !0));
    }, e.prototype.close = function(n) {
      var r = this;
      if (n === void 0 && (n = !1), !!this.isSurfaceOpen) {
        if (this.adapter.notifyClosing(), this.isQuickOpen) {
          this.isSurfaceOpen = !1, n || this.maybeRestoreFocus(), this.adapter.removeClass(e.cssClasses.OPEN), this.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW), this.adapter.notifyClose();
          return;
        }
        this.adapter.addClass(e.cssClasses.ANIMATING_CLOSED), requestAnimationFrame(function() {
          r.adapter.removeClass(e.cssClasses.OPEN), r.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW), r.closeAnimationEndTimerId = setTimeout(function() {
            r.closeAnimationEndTimerId = 0, r.adapter.removeClass(e.cssClasses.ANIMATING_CLOSED), r.adapter.notifyClose();
          }, da.TRANSITION_CLOSE_DURATION);
        }), this.isSurfaceOpen = !1, n || this.maybeRestoreFocus();
      }
    }, e.prototype.handleBodyClick = function(n) {
      var r = n.target;
      this.adapter.isElementInContainer(r) || this.close();
    }, e.prototype.handleKeydown = function(n) {
      var r = n.keyCode, i = n.key, a = i === "Escape" || r === 27;
      a && this.close();
    }, e.prototype.autoposition = function() {
      var n;
      this.measurements = this.getAutoLayoutmeasurements();
      var r = this.getoriginCorner(), i = this.getMenuSurfaceMaxHeight(r), a = this.hasBit(r, St.BOTTOM) ? "bottom" : "top", o = this.hasBit(r, St.RIGHT) ? "right" : "left", u = this.getHorizontalOriginOffset(r), l = this.getVerticalOriginOffset(r), c = this.measurements, d = c.anchorSize, v = c.surfaceSize, f = (n = {}, n[o] = u, n[a] = l, n);
      d.width / v.width > da.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (o = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(f), this.adapter.setTransformOrigin(o + " " + a), this.adapter.setPosition(f), this.adapter.setMaxHeight(i ? i + "px" : ""), this.hasBit(r, St.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
    }, e.prototype.getAutoLayoutmeasurements = function() {
      var n = this.adapter.getAnchorDimensions(), r = this.adapter.getBodyDimensions(), i = this.adapter.getWindowDimensions(), a = this.adapter.getWindowScroll();
      return n || (n = {
        top: this.position.y,
        right: this.position.x,
        bottom: this.position.y,
        left: this.position.x,
        width: 0,
        height: 0
      }), {
        anchorSize: n,
        bodySize: r,
        surfaceSize: this.dimensions,
        viewportDistance: {
          // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
          top: n.top,
          right: i.width - n.right,
          bottom: i.height - n.bottom,
          left: n.left
          // tslint:enable:object-literal-sort-keys
        },
        viewportSize: i,
        windowScroll: a
      };
    }, e.prototype.getoriginCorner = function() {
      var n = this.originCorner, r = this.measurements, i = r.viewportDistance, a = r.anchorSize, o = r.surfaceSize, u = e.numbers.MARGIN_TO_EDGE, l = this.hasBit(this.anchorCorner, St.BOTTOM), c, d;
      l ? (c = i.top - u + this.anchorMargin.bottom, d = i.bottom - u - this.anchorMargin.bottom) : (c = i.top - u + this.anchorMargin.top, d = i.bottom - u + a.height - this.anchorMargin.top);
      var v = d - o.height > 0;
      !v && c > d + this.openBottomBias && (n = this.setBit(n, St.BOTTOM));
      var f = this.adapter.isRtl(), m = this.hasBit(this.anchorCorner, St.FLIP_RTL), h = this.hasBit(this.anchorCorner, St.RIGHT) || this.hasBit(n, St.RIGHT), g = !1;
      f && m ? g = !h : g = h;
      var b, y;
      g ? (b = i.left + a.width + this.anchorMargin.right, y = i.right - this.anchorMargin.right) : (b = i.left + this.anchorMargin.left, y = i.right + a.width - this.anchorMargin.left);
      var S = b - o.width > 0, I = y - o.width > 0, _ = this.hasBit(n, St.FLIP_RTL) && this.hasBit(n, St.RIGHT);
      return I && _ && f || !S && _ ? n = this.unsetBit(n, St.RIGHT) : (S && g && f || S && !g && h || !I && b >= y) && (n = this.setBit(n, St.RIGHT)), n;
    }, e.prototype.getMenuSurfaceMaxHeight = function(n) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var r = this.measurements.viewportDistance, i = 0, a = this.hasBit(n, St.BOTTOM), o = this.hasBit(this.anchorCorner, St.BOTTOM), u = e.numbers.MARGIN_TO_EDGE;
      return a ? (i = r.top + this.anchorMargin.top - u, o || (i += this.measurements.anchorSize.height)) : (i = r.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - u, o && (i -= this.measurements.anchorSize.height)), i;
    }, e.prototype.getHorizontalOriginOffset = function(n) {
      var r = this.measurements.anchorSize, i = this.hasBit(n, St.RIGHT), a = this.hasBit(this.anchorCorner, St.RIGHT);
      if (i) {
        var o = a ? r.width - this.anchorMargin.left : this.anchorMargin.right;
        return this.isHoistedElement || this.isFixedPosition ? o - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : o;
      }
      return a ? r.width - this.anchorMargin.right : this.anchorMargin.left;
    }, e.prototype.getVerticalOriginOffset = function(n) {
      var r = this.measurements.anchorSize, i = this.hasBit(n, St.BOTTOM), a = this.hasBit(this.anchorCorner, St.BOTTOM), o = 0;
      return i ? o = a ? r.height - this.anchorMargin.top : -this.anchorMargin.bottom : o = a ? r.height + this.anchorMargin.bottom : this.anchorMargin.top, o;
    }, e.prototype.adjustPositionForHoistedElement = function(n) {
      var r, i, a = this.measurements, o = a.windowScroll, u = a.viewportDistance, l = a.surfaceSize, c = a.viewportSize, d = Object.keys(n);
      try {
        for (var v = Ut(d), f = v.next(); !f.done; f = v.next()) {
          var m = f.value, h = n[m] || 0;
          if (this.isHorizontallyCenteredOnViewport && (m === "left" || m === "right")) {
            n[m] = (c.width - l.width) / 2;
            continue;
          }
          h += u[m], this.isFixedPosition || (m === "top" ? h += o.y : m === "bottom" ? h -= o.y : m === "left" ? h += o.x : h -= o.x), n[m] = h;
        }
      } catch (g) {
        r = { error: g };
      } finally {
        try {
          f && !f.done && (i = v.return) && i.call(v);
        } finally {
          if (r) throw r.error;
        }
      }
    }, e.prototype.maybeRestoreFocus = function() {
      var n = this, r = this.adapter.isFocused(), i = this.adapter.getOwnerDocument ? this.adapter.getOwnerDocument() : document, a = i.activeElement && this.adapter.isElementInContainer(i.activeElement);
      (r || a) && setTimeout(function() {
        n.adapter.restoreFocus();
      }, da.TOUCH_EVENT_WAIT_MS);
    }, e.prototype.hasBit = function(n, r) {
      return !!(n & r);
    }, e.prototype.setBit = function(n, r) {
      return n | r;
    }, e.prototype.unsetBit = function(n, r) {
      return n ^ r;
    }, e.prototype.isFinite = function(n) {
      return typeof n == "number" && isFinite(n);
    }, e;
  }(wt)
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
var $l = {
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
function Wg(t) {
  return !!t.document && typeof t.document.createElement == "function";
}
function qg(t, e) {
  if (Wg(t) && e in $l) {
    var n = t.document.createElement("div"), r = $l[e], i = r.standard, a = r.prefixed, o = i in n.style;
    return o ? i : a;
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
var Pi = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
}, xi = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected",
  SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
}, zg = {
  FOCUS_ROOT_INDEX: -1
}, Ri;
(function(t) {
  t[t.NONE = 0] = "NONE", t[t.LIST_ROOT = 1] = "LIST_ROOT", t[t.FIRST_ITEM = 2] = "FIRST_ITEM", t[t.LAST_ITEM = 3] = "LAST_ITEM";
})(Ri || (Ri = {}));
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
var Xg = (
  /** @class */
  function(t) {
    We(e, t);
    function e(n) {
      var r = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return r.closeAnimationEndTimerId = 0, r.defaultFocusState = Ri.LIST_ROOT, r.selectedIndex = -1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Pi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return xi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return zg;
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
      var r = n.key, i = n.keyCode, a = r === "Tab" || i === 9;
      a && this.adapter.closeSurface(
        /** skipRestoreFocus */
        !0
      );
    }, e.prototype.handleItemAction = function(n) {
      var r = this, i = this.adapter.getElementIndex(n);
      if (!(i < 0)) {
        this.adapter.notifySelected({ index: i });
        var a = this.adapter.getAttributeFromElementAtIndex(i, xi.SKIP_RESTORE_FOCUS) === "true";
        this.adapter.closeSurface(a), this.closeAnimationEndTimerId = setTimeout(function() {
          var o = r.adapter.getElementIndex(n);
          o >= 0 && r.adapter.isSelectableItemAtIndex(o) && r.setSelectedIndex(o);
        }, zc.numbers.TRANSITION_CLOSE_DURATION);
      }
    }, e.prototype.handleMenuSurfaceOpened = function() {
      switch (this.defaultFocusState) {
        case Ri.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case Ri.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case Ri.NONE:
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
      var r = this.adapter.getSelectedSiblingOfItemAtIndex(n);
      r >= 0 && (this.adapter.removeAttributeFromElementAtIndex(r, xi.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(r, Pi.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(n, Pi.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(n, xi.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = n;
    }, e.prototype.setEnabled = function(n, r) {
      this.validatedIndex(n), r ? (this.adapter.removeClassFromElementAtIndex(n, ze.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, xi.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(n, ze.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, xi.ARIA_DISABLED_ATTR, "true"));
    }, e.prototype.validatedIndex = function(n) {
      var r = this.adapter.getMenuItemCount(), i = n >= 0 && n < r;
      if (!i)
        throw new Error("MDCMenuFoundation: No list item at specified index.");
    }, e;
  }(wt)
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
var pt = {
  ACTIVATED: "mdc-select--activated",
  DISABLED: "mdc-select--disabled",
  FOCUSED: "mdc-select--focused",
  INVALID: "mdc-select--invalid",
  MENU_INVALID: "mdc-select__menu--invalid",
  OUTLINED: "mdc-select--outlined",
  REQUIRED: "mdc-select--required",
  ROOT: "mdc-select",
  WITH_LEADING_ICON: "mdc-select--with-leading-icon"
}, $o = {
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
}, Zr = {
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
var Kg = (
  /** @class */
  function(t) {
    We(e, t);
    function e(n, r) {
      r === void 0 && (r = {});
      var i = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return i.disabled = !1, i.isMenuOpen = !1, i.useDefaultValidation = !0, i.customValidity = !0, i.lastSelectedIndex = Zr.UNSET_INDEX, i.clickDebounceTimeout = 0, i.recentlyClicked = !1, i.leadingIcon = r.leadingIcon, i.helperText = r.helperText, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return pt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Zr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return $o;
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
    }, e.prototype.setSelectedIndex = function(n, r, i) {
      r === void 0 && (r = !1), i === void 0 && (i = !1), !(n >= this.adapter.getMenuItemCount()) && (n === Zr.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(n).trim()), this.adapter.setSelectedIndex(n), r && this.adapter.closeMenu(), !i && this.lastSelectedIndex !== n && this.handleChange(), this.lastSelectedIndex = n);
    }, e.prototype.setValue = function(n, r) {
      r === void 0 && (r = !1);
      var i = this.adapter.getMenuItemValues().indexOf(n);
      this.setSelectedIndex(
        i,
        /** closeMenu */
        !1,
        r
      );
    }, e.prototype.getValue = function() {
      var n = this.adapter.getSelectedIndex(), r = this.adapter.getMenuItemValues();
      return n !== Zr.UNSET_INDEX ? r[n] : "";
    }, e.prototype.getDisabled = function() {
      return this.disabled;
    }, e.prototype.setDisabled = function(n) {
      this.disabled = n, this.disabled ? (this.adapter.addClass(pt.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(pt.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
    }, e.prototype.openMenu = function() {
      this.adapter.addClass(pt.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true");
    }, e.prototype.setHelperTextContent = function(n) {
      this.helperText && this.helperText.setContent(n);
    }, e.prototype.layout = function() {
      if (this.adapter.hasLabel()) {
        var n = this.getValue().length > 0, r = this.adapter.hasClass(pt.FOCUSED), i = n || r, a = this.adapter.hasClass(pt.REQUIRED);
        this.notchOutline(i), this.adapter.floatLabel(i), this.adapter.setLabelRequired(a);
      }
    }, e.prototype.layoutOptions = function() {
      var n = this.adapter.getMenuItemValues(), r = n.indexOf(this.getValue());
      this.setSelectedIndex(
        r,
        /** closeMenu */
        !1,
        /** skipNotify */
        !0
      );
    }, e.prototype.handleMenuOpened = function() {
      if (this.adapter.getMenuItemValues().length !== 0) {
        var n = this.getSelectedIndex(), r = n >= 0 ? n : 0;
        this.adapter.focusMenuItemAtIndex(r);
      }
    }, e.prototype.handleMenuClosing = function() {
      this.adapter.setSelectAnchorAttr("aria-expanded", "false");
    }, e.prototype.handleMenuClosed = function() {
      this.adapter.removeClass(pt.ACTIVATED), this.isMenuOpen = !1, this.adapter.isSelectAnchorFocused() || this.blur();
    }, e.prototype.handleChange = function() {
      this.layout(), this.adapter.notifyChange(this.getValue());
      var n = this.adapter.hasClass(pt.REQUIRED);
      n && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.handleMenuItemAction = function(n) {
      this.setSelectedIndex(
        n,
        /** closeMenu */
        !0
      );
    }, e.prototype.handleFocus = function() {
      this.adapter.addClass(pt.FOCUSED), this.layout(), this.adapter.activateBottomLine();
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
      if (!(this.isMenuOpen || !this.adapter.hasClass(pt.FOCUSED))) {
        var r = xt(n) === Be.ENTER, i = xt(n) === Be.SPACEBAR, a = xt(n) === Be.ARROW_UP, o = xt(n) === Be.ARROW_DOWN, u = n.ctrlKey || n.metaKey;
        if (!u && (!i && n.key && n.key.length === 1 || i && this.adapter.isTypeaheadInProgress())) {
          var l = i ? " " : n.key, c = this.adapter.typeaheadMatchItem(l, this.getSelectedIndex());
          c >= 0 && this.setSelectedIndex(c), n.preventDefault();
          return;
        }
        !r && !i && !a && !o || (this.openMenu(), n.preventDefault());
      }
    }, e.prototype.notchOutline = function(n) {
      if (this.adapter.hasOutline()) {
        var r = this.adapter.hasClass(pt.FOCUSED);
        if (n) {
          var i = Zr.LABEL_SCALE, a = this.adapter.getLabelWidth() * i;
          this.adapter.notchOutline(a);
        } else r || this.adapter.closeOutline();
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
      this.useDefaultValidation || (this.customValidity = n), this.adapter.setSelectAnchorAttr("aria-invalid", (!n).toString()), n ? (this.adapter.removeClass(pt.INVALID), this.adapter.removeMenuClass(pt.MENU_INVALID)) : (this.adapter.addClass(pt.INVALID), this.adapter.addMenuClass(pt.MENU_INVALID)), this.syncHelperTextValidity(n);
    }, e.prototype.isValid = function() {
      return this.useDefaultValidation && this.adapter.hasClass(pt.REQUIRED) && !this.adapter.hasClass(pt.DISABLED) ? this.getSelectedIndex() !== Zr.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(n) {
      n ? this.adapter.addClass(pt.REQUIRED) : this.adapter.removeClass(pt.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", n.toString()), this.adapter.setLabelRequired(n);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var n = this.adapter.getAnchorElement();
      n && (this.adapter.setMenuAnchorElement(n), this.adapter.setMenuAnchorCorner(ui.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(pt.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(pt.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(pt.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var n = this.adapter.hasClass(pt.REQUIRED);
      n && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.syncHelperTextValidity = function(n) {
      if (this.helperText) {
        this.helperText.setValidity(n);
        var r = this.helperText.isVisible(), i = this.helperText.getId();
        r && i ? this.adapter.setSelectAnchorAttr($o.ARIA_DESCRIBEDBY, i) : this.adapter.removeSelectAnchorAttr($o.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.setClickDebounceTimeout = function() {
      var n = this;
      clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout(function() {
        n.recentlyClicked = !1;
      }, Zr.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
    }, e;
  }(wt)
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
var Qr = {
  ARIA_HIDDEN: "aria-hidden",
  ROLE: "role"
}, or = {
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
var Yg = (
  /** @class */
  function(t) {
    We(e, t);
    function e(n) {
      return t.call(this, le(le({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return or;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Qr;
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
      return this.adapter.getAttr(Qr.ARIA_HIDDEN) !== "true";
    }, e.prototype.setContent = function(n) {
      this.adapter.setContent(n);
    }, e.prototype.setValidation = function(n) {
      n ? this.adapter.addClass(or.HELPER_TEXT_VALIDATION_MSG) : this.adapter.removeClass(or.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.setValidationMsgPersistent = function(n) {
      n ? this.adapter.addClass(or.HELPER_TEXT_VALIDATION_MSG_PERSISTENT) : this.adapter.removeClass(or.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.getIsValidation = function() {
      return this.adapter.hasClass(or.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.getIsValidationMsgPersistent = function() {
      return this.adapter.hasClass(or.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.setValidity = function(n) {
      var r = this.adapter.hasClass(or.HELPER_TEXT_VALIDATION_MSG);
      if (r) {
        var i = this.adapter.hasClass(or.HELPER_TEXT_VALIDATION_MSG_PERSISTENT), a = !n || i;
        if (a) {
          this.showToScreenReader(), n ? this.adapter.removeAttr(Qr.ROLE) : this.adapter.setAttr(Qr.ROLE, "alert");
          return;
        }
        this.adapter.removeAttr(Qr.ROLE), this.hide();
      }
    }, e.prototype.showToScreenReader = function() {
      this.adapter.removeAttr(Qr.ARIA_HIDDEN);
    }, e.prototype.hide = function() {
      this.adapter.setAttr(Qr.ARIA_HIDDEN, "true");
    }, e;
  }(wt)
), Zg = /* @__PURE__ */ be("<div><!></div>");
function Qg(t, e) {
  xe(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "static", 3, !1), o = p(e, "anchor", 3, !0), u = p(e, "fixed", 3, !1), l = p(e, "open", 31, () => ue(a())), c = p(e, "managed", 3, !1), d = p(e, "fullWidth", 3, !1), v = p(e, "quickOpen", 3, !1), f = p(e, "anchorElement", 15), m = p(e, "anchorMargin", 19, () => ({ top: 0, right: 0, bottom: 0, left: 0 })), h = p(e, "maxHeight", 3, 0), g = p(e, "horizontallyCenteredOnViewport", 3, !1), b = p(e, "openBottomBias", 3, 0), y = p(e, "neverRestoreFocus", 3, !1), S = /* @__PURE__ */ Xe(e, [
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
  ]), I, _ = /* @__PURE__ */ ve(void 0), E = ue({}), x = ue({}), w = /* @__PURE__ */ ve(void 0);
  ae("SMUI:list:role", "menu"), ae("SMUI:list:item:role", "menuitem"), Ce(() => {
    var B, ee;
    I && o() && !((B = I.parentElement) != null && B.classList.contains("mdc-menu-surface--anchor")) && ((ee = I.parentElement) == null || ee.classList.add("mdc-menu-surface--anchor"), f(I.parentElement ?? void 0));
  }), Ce(() => {
    s(_) && s(_).isOpen() !== l() && (l() ? s(_).open() : s(_).close());
  }), Ce(() => {
    s(_) && s(_).setQuickOpen(v());
  }), Ce(() => {
    s(_) && s(_).setFixedPosition(u());
  }), Ce(() => {
    s(_) && s(_).setMaxHeight(h());
  }), Ce(() => {
    s(_) && s(_).setIsHorizontallyCenteredOnViewport(g());
  });
  const C = ui;
  Ce(() => {
    s(_) && e.anchorCorner != null && (typeof e.anchorCorner == "string" ? s(_).setAnchorCorner(C[e.anchorCorner]) : s(_).setAnchorCorner(e.anchorCorner));
  }), Ce(() => {
    s(_) && s(_).setAnchorMargin(m());
  }), Ce(() => {
    s(_) && s(_).setOpenBottomBias(b());
  });
  const A = he("SMUI:menu-surface:mount"), M = he("SMUI:menu-surface:unmount");
  it(() => {
    K(
      _,
      new zc({
        addClass: k,
        removeClass: j,
        hasClass: G,
        hasAnchor: () => !!f(),
        notifyClose: () => {
          c() || l(a()), l() || Je(W(), "SMUIMenuSurfaceClosed");
        },
        notifyClosing: () => {
          c() || l(a()), l() || Je(W(), "SMUIMenuSurfaceClosing");
        },
        notifyOpen: () => {
          c() || l(!0), l() && Je(W(), "SMUIMenuSurfaceOpened");
        },
        notifyOpening: () => {
          l() || Je(W(), "SMUIMenuSurfaceOpening");
        },
        isElementInContainer: (ee) => W().contains(ee),
        isRtl: () => getComputedStyle(W()).getPropertyValue("direction") === "rtl",
        setTransformOrigin: (ee) => {
          x["transform-origin"] = ee;
        },
        isFocused: () => document.activeElement === W(),
        saveFocus: () => {
          K(w, document.activeElement ?? void 0, !0);
        },
        restoreFocus: () => {
          !y() && (!I || W().contains(document.activeElement)) && s(w) && document.contains(s(w)) && "focus" in s(w) && s(w).focus();
        },
        getInnerDimensions: () => ({
          width: W().offsetWidth,
          height: W().offsetHeight
        }),
        getAnchorDimensions: () => f() ? f().getBoundingClientRect() : null,
        getWindowDimensions: () => ({ width: window.innerWidth, height: window.innerHeight }),
        getBodyDimensions: () => ({
          width: document.body.clientWidth,
          height: document.body.clientHeight
        }),
        getWindowScroll: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
        setPosition: (ee) => {
          x.left = "left" in ee ? `${ee.left}px` : "", x.right = "right" in ee ? `${ee.right}px` : "", x.top = "top" in ee ? `${ee.top}px` : "", x.bottom = "bottom" in ee ? `${ee.bottom}px` : "";
        },
        setMaxHeight: (ee) => {
          x["max-height"] = ee;
        }
      }),
      !0
    );
    const B = {
      get open() {
        return l();
      },
      set open(ee) {
        l(ee);
      },
      closeProgrammatic: O
    };
    return A && A(B), s(_).init(), () => {
      var Z, ce;
      M && M(B);
      const ee = s(_).isHoistedElement;
      (Z = s(_)) == null || Z.destroy(), ee && ((ce = W().parentNode) == null || ce.removeChild(W()));
    };
  }), Ln(() => {
    var B;
    o() && W() && ((B = W().parentElement) == null || B.classList.remove("mdc-menu-surface--anchor"));
  });
  function G(B) {
    return B in E ? E[B] : W().classList.contains(B);
  }
  function k(B) {
    E[B] || (E[B] = !0);
  }
  function j(B) {
    (!(B in E) || E[B]) && (E[B] = !1);
  }
  function O(B) {
    var ee;
    (ee = s(_)) == null || ee.close(B), l(!1);
  }
  function T(B) {
    s(_) && l() && !c() && s(_).handleBodyClick(B);
  }
  function H() {
    return l();
  }
  function U(B) {
    l(B);
  }
  function z(B, ee) {
    if (s(_) == null)
      throw new Error("Instance is not defined.");
    return s(_).setAbsolutePosition(B, ee);
  }
  function J(B) {
    if (s(_) == null)
      throw new Error("Instance is not defined.");
    return s(_).setIsHoisted(B);
  }
  function P() {
    if (s(_) == null)
      throw new Error("Instance is not defined.");
    return s(_).isFixed();
  }
  function R() {
    if (s(_) == null)
      throw new Error("Instance is not defined.");
    return s(_).flipCornerHorizontally();
  }
  function W() {
    return I;
  }
  var Ae = {
    isOpen: H,
    setOpen: U,
    setAbsolutePosition: z,
    setIsHoisted: J,
    isFixed: P,
    flipCornerHorizontally: R,
    getElement: W
  }, _e = Zg();
  ga("click", Nu.body, T, !0);
  var F = (B) => {
    var ee;
    s(_) && !c() && s(_).handleKeydown(B), (ee = e.onkeydown) == null || ee.call(e, B);
  };
  ke(
    _e,
    (B, ee) => ({
      class: B,
      style: ee,
      role: "dialog",
      ...S,
      onkeydown: F
    }),
    [
      () => Pe({
        "mdc-menu-surface": !0,
        "mdc-menu-surface--fixed": u(),
        "mdc-menu-surface--open": a(),
        "smui-menu-surface--static": a(),
        "mdc-menu-surface--fullwidth": d(),
        ...E,
        [r()]: !0
      }),
      () => Object.entries(x).map(([B, ee]) => `${B}: ${ee};`).concat([i()]).join(" ")
    ]
  );
  var V = me(_e);
  return Se(V, () => e.children ?? pe), Ee(_e, (B) => I = B, () => I), De(_e, (B, ee) => q == null ? void 0 : q(B, ee), n), L(t, _e), Te(Ae);
}
function es(t, { addClass: e = (r) => t.classList.add(r), removeClass: n = (r) => t.classList.remove(r) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      n("mdc-menu-surface--anchor");
    }
  };
}
function Jg(t, e) {
  xe(e, !0);
  const { closest: n } = Ua;
  let r = p(e, "use", 19, () => []), i = p(e, "class", 3, ""), a = p(e, "open", 15, !1), o = p(e, "anchorElement", 15), u = p(e, "managed", 3, !1), l = /* @__PURE__ */ Xe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "open",
    "anchorElement",
    "managed",
    "children"
  ]), c, d = /* @__PURE__ */ ve(void 0), v = /* @__PURE__ */ ve(void 0), f = /* @__PURE__ */ ve(void 0);
  ae("SMUI:menu-surface:mount", (C) => {
    s(v) || K(v, C, !0);
  });
  const m = he("SMUI:list:mount");
  ae("SMUI:list:mount", (C) => {
    s(f) || K(f, C, !0), m && m(C);
  });
  const h = he("SMUI:menu:mount"), g = he("SMUI:menu:unmount");
  it(() => (K(
    d,
    new Xg({
      addClassToElementAtIndex: (C, A) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).addClassForElementIndex(C, A);
      },
      removeClassFromElementAtIndex: (C, A) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).removeClassForElementIndex(C, A);
      },
      addAttributeToElementAtIndex: (C, A, M) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).setAttributeForElementIndex(C, A, M);
      },
      removeAttributeFromElementAtIndex: (C, A) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).removeAttributeForElementIndex(C, A);
      },
      getAttributeFromElementAtIndex: (C, A) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).getAttributeFromElementIndex(C, A);
      },
      elementContainsClass: (C, A) => C.classList.contains(A),
      closeSurface: (C) => {
        var A;
        u() || ((A = s(v)) == null || A.closeProgrammatic(C), Je(x(), "SMUIMenuClosedProgrammatically"));
      },
      getElementIndex: (C) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).getOrderedList().map((A) => A.element).indexOf(C);
      },
      notifySelected: (C) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        Je(x(), "SMUIMenuSelected", {
          index: C.index,
          item: s(f).getOrderedList()[C.index].element
        });
      },
      getMenuItemCount: () => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).items.length;
      },
      focusItemAtIndex: (C) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).focusItemAtIndex(C);
      },
      focusListRoot: () => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        "focus" in s(f).element && s(f).element.focus();
      },
      isSelectableItemAtIndex: (C) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return !!n(s(f).getOrderedList()[C].element, `.${Pi.MENU_SELECTION_GROUP}`);
      },
      getSelectedSiblingOfItemAtIndex: (C) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        const A = s(f).getOrderedList(), M = n(A[C].element, `.${Pi.MENU_SELECTION_GROUP}`), G = M == null ? void 0 : M.querySelector(`.${Pi.MENU_SELECTED_LIST_ITEM}`);
        return G ? A.map((k) => k.element).indexOf(G) : -1;
      }
    }),
    !0
  ), h && h(s(d)), s(d).init(), () => {
    var C;
    g && s(d) && g(s(d)), (C = s(d)) == null || C.destroy();
  }));
  function b(C) {
    s(d) && s(d).handleKeydown(C);
  }
  function y() {
    return a();
  }
  function S(C) {
    a(C);
  }
  function I(C) {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    s(d).setDefaultFocusState(C);
  }
  function _() {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    return s(d).getSelectedIndex();
  }
  function E() {
    return c;
  }
  function x() {
    return c.getElement();
  }
  var w = {
    isOpen: y,
    setOpen: S,
    setDefaultFocusState: I,
    getSelectedIndex: _,
    getMenuSurface: E,
    getElement: x
  };
  {
    let C = /* @__PURE__ */ fe(() => Pe({ "mdc-menu": !0, [i()]: !0 }));
    Ee(
      Qg(t, nt(
        {
          get use() {
            return r();
          },
          get class() {
            return s(C);
          },
          get managed() {
            return u();
          }
        },
        () => l,
        {
          onkeydown: (A) => {
            var M;
            b(A), (M = e.onkeydown) == null || M.call(e, A);
          },
          onSMUIMenuSurfaceOpened: (A) => {
            var M;
            s(d) && s(d).handleMenuSurfaceOpened(), (M = e.onSMUIMenuSurfaceOpened) == null || M.call(e, A);
          },
          onSMUIListAction: (A) => {
            var M;
            s(d) && s(f) && s(d).handleItemAction(s(f).getOrderedList()[A.detail.index].element), (M = e.onSMUIListAction) == null || M.call(e, A);
          },
          get open() {
            return a();
          },
          set open(A) {
            a(A);
          },
          get anchorElement() {
            return o();
          },
          set anchorElement(A) {
            o(A);
          },
          children: (A, M) => {
            var G = re(), k = Q(G);
            Se(k, () => e.children ?? pe), L(A, G);
          },
          $$slots: { default: !0 }
        }
      )),
      (A) => c = A,
      () => c
    );
  }
  return Te(w);
}
function $g(t, e) {
  xe(e, !0);
  const { closest: n, matches: r } = Ua;
  let i = he("SMUI:list:nav"), a = p(e, "use", 19, () => []), o = p(e, "class", 3, ""), u = p(e, "nonInteractive", 3, !1), l = p(e, "dense", 3, !1), c = p(e, "textualList", 3, !1), d = p(e, "avatarList", 3, !1), v = p(e, "iconList", 3, !1), f = p(e, "imageList", 3, !1), m = p(e, "thumbnailList", 3, !1), h = p(e, "videoList", 3, !1), g = p(e, "twoLine", 3, !1), b = p(e, "threeLine", 3, !1), y = p(e, "vertical", 3, !0), S = p(e, "wrapFocus", 19, () => he("SMUI:list:wrapFocus") ?? !1), I = p(e, "singleSelection", 3, !1), _ = p(e, "disabledItemsFocusable", 3, !1), E = p(e, "selectedIndex", 31, () => -1), x = p(e, "radioList", 3, !1), w = p(e, "checkList", 3, !1), C = p(e, "hasTypeahead", 3, !1), A = p(e, "component", 3, jr), M = p(e, "tag", 3, i ? "nav" : "ul"), G = /* @__PURE__ */ Xe(e, [
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
  ]), k, j = /* @__PURE__ */ ve(void 0), O = [], T = he("SMUI:list:role");
  const H = /* @__PURE__ */ new WeakMap();
  let U = he("SMUI:dialog:selection"), z = he("SMUI:addLayoutListener"), J;
  ae("SMUI:list:nonInteractive", u()), ae("SMUI:separator:context", "list"), T || (I() ? (T = "listbox", ae("SMUI:list:item:role", "option")) : x() ? (T = "radiogroup", ae("SMUI:list:item:role", "radio")) : w() ? (T = "group", ae("SMUI:list:item:role", "checkbox")) : (T = "list", ae("SMUI:list:item:role", void 0))), Ce(() => {
    s(j) && s(j).setVerticalOrientation(y());
  }), Ce(() => {
    s(j) && s(j).setWrapFocus(S());
  }), Ce(() => {
    s(j) && s(j).setHasTypeahead(C());
  }), Ce(() => {
    s(j) && s(j).setSingleSelection(I());
  }), Ce(() => {
    s(j) && s(j).setDisabledItemsFocusable(_());
  }), Ce(() => {
    s(j) && I() && N() !== E() && s(j).setSelectedIndex(E());
  }), z && (J = z(je)), ae("SMUI:list:item:mount", (se) => {
    O.push(se), H.set(se.element, se), I() && se.selected && E(Le(se.element));
  }), ae("SMUI:list:item:unmount", (se) => {
    const ye = (se && O.findIndex((Y) => Y === se)) ?? -1;
    ye !== -1 && (O.splice(ye, 1), H.delete(se.element));
  });
  const P = he("SMUI:list:mount"), R = he("SMUI:list:unmount");
  it(() => {
    K(
      j,
      new jg({
        addClassForElementIndex: Z,
        focusItemAtIndex: de,
        getAttributeForElementIndex: (ye, Y) => {
          var te;
          return ((te = B()[ye]) == null ? void 0 : te.getAttr(Y)) ?? null;
        },
        getFocusedElementIndex: () => document.activeElement ? B().map((ye) => ye.element).indexOf(document.activeElement) : -1,
        getListItemCount: () => O.length,
        getPrimaryTextAtIndex: Me,
        hasCheckboxAtIndex: (ye) => {
          var Y;
          return ((Y = B()[ye]) == null ? void 0 : Y.hasCheckbox) ?? !1;
        },
        hasRadioAtIndex: (ye) => {
          var Y;
          return ((Y = B()[ye]) == null ? void 0 : Y.hasRadio) ?? !1;
        },
        isCheckboxCheckedAtIndex: (ye) => {
          const Y = B()[ye];
          return ((Y == null ? void 0 : Y.hasCheckbox) && Y.checked) ?? !1;
        },
        isFocusInsideList: () => k != null && Re() !== document.activeElement && Re().contains(document.activeElement),
        isRootFocused: () => k != null && document.activeElement === Re(),
        listItemAtIndexHasClass: ee,
        notifyAction: (ye) => {
          E(ye), k != null && Je(Re(), "SMUIListAction", { index: ye });
        },
        notifySelectionChange: (ye) => {
          k != null && Je(Re(), "SMUIListSelectionChange", { changedIndices: ye });
        },
        removeClassForElementIndex: ce,
        setAttributeForElementIndex: we,
        setCheckedCheckboxOrRadioAtIndex: (ye, Y) => {
          B()[ye].checked = Y;
        },
        setTabIndexForListItemChildren: (ye, Y) => {
          const te = B()[ye];
          Array.prototype.forEach.call(te.element.querySelectorAll("button:not(:disabled), a"), (ft) => {
            ft.setAttribute("tabindex", Y);
          });
        }
      }),
      !0
    );
    const se = {
      get element() {
        return Re();
      },
      get items() {
        return O;
      },
      get typeaheadInProgress() {
        if (!s(j))
          throw new Error("Instance is undefined.");
        return s(j).isTypeaheadInProgress();
      },
      typeaheadMatchItem(ye, Y) {
        if (!s(j))
          throw new Error("Instance is undefined.");
        return s(j).typeaheadMatchItem(
          ye,
          Y,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: B,
      focusItemAtIndex: de,
      addClassForElementIndex: Z,
      removeClassForElementIndex: ce,
      setAttributeForElementIndex: we,
      removeAttributeForElementIndex: $,
      getAttributeFromElementIndex: ie,
      getPrimaryTextAtIndex: Me
    };
    return P && P(se), s(j).init(), s(j).layout(), () => {
      var ye;
      R && R(se), (ye = s(j)) == null || ye.destroy();
    };
  }), Ln(() => {
    J && J();
  });
  function W(se) {
    s(j) && se.target && s(j).handleKeydown(se, se.target.classList.contains("mdc-deprecated-list-item"), Le(se.target));
  }
  function Ae(se) {
    s(j) && se.target && s(j).handleFocusIn(Le(se.target));
  }
  function _e(se) {
    s(j) && se.target && s(j).handleFocusOut(Le(se.target));
  }
  function F(se) {
    s(j) && se.target && s(j).handleClick(Le(se.target), !r(se.target, 'input[type="checkbox"], input[type="radio"]'), se);
  }
  function V(se) {
    if (x() || w()) {
      const ye = Le(se.target);
      if (ye !== -1) {
        const Y = B()[ye];
        Y && (x() && !Y.checked || w()) && (r(se.detail.target, 'input[type="checkbox"], input[type="radio"]') || (Y.checked = !Y.checked), Y.activateRipple(), window.requestAnimationFrame(() => {
          Y.deactivateRipple();
        }));
      }
    }
  }
  function B() {
    return k == null ? [] : [...Re().children].map((se) => H.get(se)).filter((se) => se && se._smui_list_item_accessor);
  }
  function ee(se, ye) {
    const Y = B()[se];
    return (Y && Y.hasClass(ye)) ?? !1;
  }
  function Z(se, ye) {
    const Y = B()[se];
    Y && Y.addClass(ye);
  }
  function ce(se, ye) {
    const Y = B()[se];
    Y && Y.removeClass(ye);
  }
  function we(se, ye, Y) {
    const te = B()[se];
    te && te.addAttr(ye, Y);
  }
  function $(se, ye) {
    const Y = B()[se];
    Y && Y.removeAttr(ye);
  }
  function ie(se, ye) {
    const Y = B()[se];
    return Y ? Y.getAttr(ye) : null;
  }
  function Me(se) {
    const ye = B()[se];
    return (ye && ye.getPrimaryText()) ?? "";
  }
  function Le(se) {
    const ye = n(se, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return ye && r(ye, ".mdc-deprecated-list-item") ? B().map((Y) => Y == null ? void 0 : Y.element).indexOf(ye) : -1;
  }
  function je() {
    if (!s(j))
      throw new Error("Instance is undefined.");
    return s(j).layout();
  }
  function Ke(se, ye) {
    if (!s(j))
      throw new Error("Instance is undefined.");
    return s(j).setEnabled(se, ye);
  }
  function Ue() {
    if (!s(j))
      throw new Error("Instance is undefined.");
    return s(j).isTypeaheadInProgress();
  }
  function N() {
    if (!s(j))
      throw new Error("Instance is undefined.");
    return s(j).getSelectedIndex();
  }
  function X() {
    if (!s(j))
      throw new Error("Instance is undefined.");
    return s(j).getFocusedItemIndex();
  }
  function de(se) {
    const ye = B()[se];
    ye && "focus" in ye.element && ye.element.focus();
  }
  function Re() {
    return k.getElement();
  }
  var Fe = {
    layout: je,
    setEnabled: Ke,
    getTypeaheadInProgress: Ue,
    getSelectedIndex: N,
    getFocusedItemIndex: X,
    focusItemAtIndex: de,
    getElement: Re
  }, dt = re(), bt = Q(dt);
  {
    let se = /* @__PURE__ */ fe(() => Pe({
      "mdc-deprecated-list": !0,
      "mdc-deprecated-list--non-interactive": u(),
      "mdc-deprecated-list--dense": l(),
      "mdc-deprecated-list--textual-list": c(),
      "mdc-deprecated-list--avatar-list": d() || U,
      "mdc-deprecated-list--icon-list": v(),
      "mdc-deprecated-list--image-list": f(),
      "mdc-deprecated-list--thumbnail-list": m(),
      "mdc-deprecated-list--video-list": h(),
      "mdc-deprecated-list--two-line": g(),
      "smui-list--three-line": b() && !g(),
      [o()]: !0
    }));
    _r(bt, A, (ye, Y) => {
      Ee(
        Y(ye, nt(
          {
            get tag() {
              return M();
            },
            get use() {
              return a();
            },
            get class() {
              return s(se);
            },
            get role() {
              return T;
            }
          },
          () => G,
          {
            onkeydown: (te) => {
              var Ne;
              W(te), (Ne = e.onkeydown) == null || Ne.call(e, te);
            },
            onfocusin: (te) => {
              var Ne;
              Ae(te), (Ne = e.onfocusin) == null || Ne.call(e, te);
            },
            onfocusout: (te) => {
              var Ne;
              _e(te), (Ne = e.onfocusout) == null || Ne.call(e, te);
            },
            onclick: (te) => {
              var Ne;
              F(te), (Ne = e.onclick) == null || Ne.call(e, te);
            },
            onSMUIAction: (te) => {
              var Ne;
              V(te), (Ne = e.onSMUIAction) == null || Ne.call(e, te);
            },
            children: (te, Ne) => {
              var ft = re(), _t = Q(ft);
              Se(_t, () => e.children ?? pe), L(te, ft);
            },
            $$slots: { default: !0 }
          }
        )),
        (te) => k = te,
        () => k
      );
    });
  }
  return L(t, dt), Te(Fe);
}
let ep = 0;
var tp = /* @__PURE__ */ be('<span class="mdc-deprecated-list-item__ripple"></span>'), np = /* @__PURE__ */ be("<!><!>", 1);
function rp(t, e) {
  xe(e, !0);
  let n = () => {
  };
  function r(Z) {
    return Z === n;
  }
  let i = he("SMUI:list:item:nav"), a = p(e, "use", 19, () => []), o = p(e, "class", 3, ""), u = p(e, "style", 3, ""), l = p(e, "nonInteractive", 19, () => he("SMUI:list:nonInteractive") ?? !1), c = p(e, "ripple", 19, () => !l()), d = p(e, "wrapper", 3, !1), v = p(e, "activated", 15, !1), f = p(e, "role", 19, () => d() ? "presentation" : he("SMUI:list:item:role")), m = p(e, "selected", 15, !1), h = p(e, "disabled", 3, !1), g = p(e, "skipRestoreFocus", 3, !1), b = p(e, "tabindex", 15, n), y = p(e, "inputId", 19, () => "SMUI-form-field-list-" + ep++), S = p(e, "component", 3, jr), I = p(e, "tag", 19, () => i ? e.href ? "a" : "span" : "li"), _ = /* @__PURE__ */ Xe(e, [
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
  ae("SMUI:list:nonInteractive", void 0), ae("SMUI:list:item:role", void 0);
  let E, x = ue({}), w = ue({}), C = ue({}), A = /* @__PURE__ */ ve(void 0), M = /* @__PURE__ */ ve(void 0);
  const G = /* @__PURE__ */ fe(() => r(b()) ? !l() && !h() && (m() || s(A) && s(A).checked) ? 0 : -1 : b());
  ae("SMUI:generic:input:props", { id: y() }), ae("SMUI:separator:context", void 0), ae("SMUI:generic:input:mount", (Z) => {
    ("_smui_checkbox_accessor" in Z || "_smui_radio_accessor" in Z) && K(A, Z, !0);
  }), ae("SMUI:generic:input:unmount", () => {
    K(A, void 0);
  });
  const k = he("SMUI:list:item:mount"), j = he("SMUI:list:item:unmount");
  it(() => {
    if (!m() && !l()) {
      let ce = !0, we = E.getElement();
      for (; we.previousElementSibling; )
        if (we = we.previousElementSibling, we.nodeType === 1 && we.classList.contains("mdc-deprecated-list-item") && !we.classList.contains("mdc-deprecated-list-item--disabled")) {
          ce = !1;
          break;
        }
      ce && K(M, window.requestAnimationFrame(() => R(we)), !0);
    }
    const Z = {
      _smui_list_item_accessor: !0,
      get element() {
        return F();
      },
      get selected() {
        return m();
      },
      set selected(ce) {
        m(ce);
      },
      hasClass: O,
      addClass: T,
      removeClass: H,
      getAttr: z,
      addAttr: J,
      removeAttr: P,
      getPrimaryText: _e,
      // For inputs within item.
      get checked() {
        return (s(A) && s(A).checked) ?? !1;
      },
      set checked(ce) {
        s(A) && (s(A).checked = !!ce);
      },
      get hasCheckbox() {
        return !!(s(A) && "_smui_checkbox_accessor" in s(A));
      },
      get hasRadio() {
        return !!(s(A) && "_smui_radio_accessor" in s(A));
      },
      activateRipple() {
        s(A) && s(A).activateRipple();
      },
      deactivateRipple() {
        s(A) && s(A).deactivateRipple();
      },
      // For select options.
      getValue() {
        return e.value;
      },
      // For autocomplete
      action: Ae,
      get tabindex() {
        return s(G);
      },
      set tabindex(ce) {
        b(ce);
      },
      get disabled() {
        return h();
      },
      get activated() {
        return v();
      },
      set activated(ce) {
        v(ce);
      }
    };
    return k && k(Z), () => {
      j && j(Z);
    };
  }), Ln(() => {
    s(M) && window.cancelAnimationFrame(s(M));
  });
  function O(Z) {
    return Z in x ? x[Z] : F().classList.contains(Z);
  }
  function T(Z) {
    x[Z] || (x[Z] = !0);
  }
  function H(Z) {
    (!(Z in x) || x[Z]) && (x[Z] = !1);
  }
  function U(Z, ce) {
    w[Z] != ce && (ce === "" || ce == null ? delete w[Z] : w[Z] = ce);
  }
  function z(Z) {
    return Z in C ? C[Z] ?? null : F().getAttribute(Z);
  }
  function J(Z, ce) {
    C[Z] !== ce && (C[Z] = ce);
  }
  function P(Z) {
    (!(Z in C) || C[Z] != null) && (C[Z] = void 0);
  }
  function R(Z) {
    let ce = !0;
    for (; Z.nextElementSibling; )
      if (Z = Z.nextElementSibling, Z.nodeType === 1 && Z.classList.contains("mdc-deprecated-list-item")) {
        const we = Z.attributes.getNamedItem("tabindex");
        if (we && we.value === "0") {
          ce = !1;
          break;
        }
      }
    ce && b(0);
  }
  function W(Z) {
    const ce = Z.key === "Enter", we = Z.key === "Space";
    (ce || we) && Ae(Z);
  }
  function Ae(Z) {
    h() || Je(F(), "SMUIAction", Z);
  }
  function _e() {
    const Z = F(), ce = Z.querySelector(".mdc-deprecated-list-item__primary-text");
    if (ce)
      return ce.textContent ?? "";
    const we = Z.querySelector(".mdc-deprecated-list-item__text");
    return we ? we.textContent ?? "" : Z.textContent ?? "";
  }
  function F() {
    return E.getElement();
  }
  var V = { action: Ae, getPrimaryText: _e, getElement: F }, B = re(), ee = Q(B);
  {
    let Z = /* @__PURE__ */ fe(() => [
      ...l() ? [] : [
        [
          Xt,
          {
            ripple: !s(A),
            unbounded: !1,
            color: (v() || m()) && e.color == null ? "primary" : e.color,
            disabled: h(),
            addClass: T,
            removeClass: H,
            addStyle: U
          }
        ]
      ],
      ...a()
    ]), ce = /* @__PURE__ */ fe(() => Pe({
      "mdc-deprecated-list-item": !d(),
      "mdc-deprecated-list-item__wrapper": d(),
      "mdc-deprecated-list-item--activated": v(),
      "mdc-deprecated-list-item--selected": m(),
      "mdc-deprecated-list-item--disabled": h(),
      "mdc-menu-item--selected": !i && f() === "menuitem" && m(),
      "smui-menu-item--non-interactive": l(),
      ...x,
      [o()]: !0
    })), we = /* @__PURE__ */ fe(() => Object.entries(w).map(([ie, Me]) => `${ie}: ${Me};`).concat([u()]).join(" ")), $ = /* @__PURE__ */ fe(() => g() || void 0);
    _r(ee, S, (ie, Me) => {
      Ee(
        Me(ie, nt(
          {
            get tag() {
              return I();
            },
            get use() {
              return s(Z);
            },
            get class() {
              return s(ce);
            },
            get style() {
              return s(we);
            }
          },
          () => i && v() ? { "aria-current": "page" } : {},
          () => !i || d() ? { role: f() } : {},
          () => !i && f() === "option" ? { "aria-selected": m() ? "true" : "false" } : {},
          () => !i && (f() === "radio" || f() === "checkbox") ? {
            "aria-checked": s(A) && s(A).checked ? "true" : "false"
          } : {},
          () => i ? {} : { "aria-disabled": h() ? "true" : "false" },
          {
            get "data-menu-item-skip-restore-focus"() {
              return s($);
            },
            get tabindex() {
              return s(G);
            },
            get href() {
              return e.href;
            }
          },
          () => C,
          () => _,
          {
            onclick: (Le) => {
              var je;
              Ae(Le), (je = e.onclick) == null || je.call(e, Le);
            },
            onkeydown: (Le) => {
              var je;
              W(Le), (je = e.onkeydown) == null || je.call(e, Le);
            },
            children: (Le, je) => {
              var Ke = np(), Ue = Q(Ke);
              {
                var N = (de) => {
                  var Re = tp();
                  L(de, Re);
                };
                oe(Ue, (de) => {
                  c() && de(N);
                });
              }
              var X = Ie(Ue);
              Se(X, () => e.children ?? pe), L(Le, Ke);
            },
            $$slots: { default: !0 }
          }
        )),
        (Le) => E = Le,
        () => E
      );
    });
  }
  return L(t, B), Te(V);
}
let ip = 0;
var ap = /* @__PURE__ */ be("<div><!></div>");
function op(t, e) {
  xe(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "id", 19, () => "SMUI-select-helper-text-" + ip++), a = p(e, "persistent", 3, !1), o = p(e, "validationMsg", 3, !1), u = /* @__PURE__ */ Xe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "id",
    "persistent",
    "validationMsg",
    "children"
  ]), l, c = /* @__PURE__ */ ve(void 0), d = ue({}), v = ue({}), f = /* @__PURE__ */ ve(void 0);
  const m = he("SMUI:select:helper-text:id"), h = he("SMUI:select:helper-text:mount"), g = he("SMUI:select:helper-text:unmount");
  it(() => (K(
    c,
    new Yg({
      addClass: y,
      removeClass: S,
      hasClass: b,
      getAttr: I,
      setAttr: _,
      removeAttr: E,
      setContent: (k) => {
        K(f, k, !0);
      }
    }),
    !0
  ), m && m(i()), h && h(s(c)), s(c).init(), () => {
    var k;
    g && s(c) && g(s(c)), (k = s(c)) == null || k.destroy();
  }));
  function b(k) {
    return k in d ? d[k] : x().classList.contains(k);
  }
  function y(k) {
    d[k] || (d[k] = !0);
  }
  function S(k) {
    (!(k in d) || d[k]) && (d[k] = !1);
  }
  function I(k) {
    return k in v ? v[k] ?? null : x().getAttribute(k);
  }
  function _(k, j) {
    v[k] !== j && (v[k] = j);
  }
  function E(k) {
    (!(k in v) || v[k] != null) && (v[k] = void 0);
  }
  function x() {
    return l;
  }
  var w = { getElement: x }, C = ap();
  ke(
    C,
    (k) => ({
      class: k,
      "aria-hidden": a() ? void 0 : "true",
      id: i(),
      ...v,
      ...u
    }),
    [
      () => Pe({
        "mdc-select-helper-text": !0,
        "mdc-select-helper-text--validation-msg": o(),
        "mdc-select-helper-text--validation-msg-persistent": a(),
        ...d,
        [r()]: !0
      })
    ]
  );
  var A = me(C);
  {
    var M = (k) => {
      var j = re(), O = Q(j);
      Se(O, () => e.children ?? pe), L(k, j);
    }, G = (k) => {
      var j = Mt();
      Oe(() => st(j, s(f))), L(k, j);
    };
    oe(A, (k) => {
      s(f) == null ? k(M) : k(G, !1);
    });
  }
  return Ee(C, (k) => l = k, () => l), De(C, (k, j) => q == null ? void 0 : q(k, j), n), L(t, C), Te(w);
}
let sp = 0;
var lp = /* @__PURE__ */ be("<input/>"), up = /* @__PURE__ */ be('<span class="mdc-select__ripple"></span>'), cp = /* @__PURE__ */ be('<div><!> <div><!> <!> <!> <!> <span><span> </span></span> <span><svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"><polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon><polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon></svg></span> <!></div> <!></div> <!>', 1);
function dp(t, e) {
  xe(e, !0);
  const n = () => Yn(Re, "$selectedTextStore", r), [r, i] = yr();
  let a = () => {
  };
  function o(D) {
    return D === a;
  }
  let u = p(e, "use", 19, () => []), l = p(e, "class", 3, ""), c = p(e, "style", 3, ""), d = p(e, "ripple", 3, !0), v = p(e, "disabled", 3, !1), f = p(e, "variant", 3, "standard"), m = p(e, "noLabel", 3, !1), h = p(e, "label", 3, void 0), g = p(e, "value", 15), b = p(e, "key", 3, (D) => D), y = p(e, "dirty", 15, !1), S = p(e, "invalid", 15, a), I = p(e, "updateInvalid", 19, () => o(S())), _ = p(e, "required", 3, !1), E = p(e, "inputId", 19, () => "SMUI-select-" + sp++), x = p(e, "hiddenInput", 3, !1), w = p(e, "withLeadingIcon", 3, a), C = p(e, "anchor$use", 19, () => []), A = p(e, "anchor$class", 3, ""), M = p(e, "selectedTextContainer$use", 19, () => []), G = p(e, "selectedTextContainer$class", 3, ""), k = p(e, "selectedText$use", 19, () => []), j = p(e, "selectedText$class", 3, ""), O = p(e, "dropdownIcon$use", 19, () => []), T = p(e, "dropdownIcon$class", 3, ""), H = p(e, "menu$class", 3, ""), U = /* @__PURE__ */ Xe(e, [
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
  const z = o(S());
  o(S()) && S(!1);
  let J, P = /* @__PURE__ */ ve(void 0), R = ue({}), W = ue({}), Ae, _e = ue({}), F = /* @__PURE__ */ ve(-1);
  const V = /* @__PURE__ */ fe(() => U.menu$id ?? E() + "-menu");
  let B = /* @__PURE__ */ ve(void 0), ee = he("SMUI:addLayoutListener"), Z, ce = /* @__PURE__ */ ve(!1), we = ue({}), $ = /* @__PURE__ */ ve(void 0), ie = /* @__PURE__ */ ve(void 0), Me = /* @__PURE__ */ ve(!1), Le, je = he("SMUI:select:context"), Ke, Ue, N, X, de;
  ae("SMUI:list:role", ""), ae("SMUI:list:nav", !1);
  const Re = tn("");
  ae("SMUI:select:selectedText", Re);
  const Fe = tn(g());
  Ce(() => {
    hi(Fe, g());
  }), ae("SMUI:select:value", Fe), Ce(() => {
    s(P) && s(P).getValue() !== b()(g()) && s(P).setValue(b()(g()));
  });
  let dt = s(F);
  Ce(() => {
    if (dt !== s(F))
      if (dt = s(F), s(P))
        s(P).setSelectedIndex(
          s(F),
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const D = Bt();
        g() !== D[s(F)] && g(D[s(F)]);
      }
  }), Ce(() => {
    s(P) && s(P).getDisabled() !== v() && s(P).setDisabled(v());
  }), Ce(() => {
    s(P) && y() && s(P).isValid() !== !S() && (I() ? S(!s(P).isValid()) : s(P).setValid(!S()));
  }), Ce(() => {
    s(P) && s(P).getRequired() !== _() && s(P).setRequired(_());
  }), ee && (Z = ee(yi)), ae("SMUI:select:leading-icon:mount", (D) => {
    Ke = D;
  }), ae("SMUI:select:leading-icon:unmount", () => {
    Ke = void 0;
  }), ae("SMUI:list:mount", (D) => {
    Le = D;
  }), ae("SMUI:select:helper-text:id", (D) => {
    K(B, D, !0);
  }), ae("SMUI:select:helper-text:mount", (D) => {
    Ue = D;
  }), ae("SMUI:select:helper-text:unmount", () => {
    K(B, void 0), Ue = void 0;
  }), it(() => (K(
    P,
    new Kg(
      {
        // getSelectAdapterMethods
        // getMenuItemAttr: (menuItem: Element, attr: string) =>
        //   menuItem.getAttribute(attr),
        setSelectedText: (D) => {
          hi(Re, D);
        },
        isSelectAnchorFocused: () => document.activeElement === Ae,
        getSelectAnchorAttr: ft,
        setSelectAnchorAttr: _t,
        removeSelectAnchorAttr: gt,
        addMenuClass: te,
        removeMenuClass: Ne,
        openMenu: () => {
          K(ce, !0);
        },
        closeMenu: () => {
          K(ce, !1);
        },
        getAnchorElement: () => Ae,
        setMenuAnchorElement: (D) => {
          K($, D, !0);
        },
        setMenuAnchorCorner: (D) => {
          K(ie, D, !0);
        },
        setMenuWrapFocus: (D) => {
          K(Me, D, !0);
        },
        getSelectedIndex: () => s(F),
        setSelectedIndex: (D) => {
          dt = D, K(F, D, !0), g(Bt()[s(F)]);
        },
        focusMenuItemAtIndex: (D) => {
          Le.focusItemAtIndex(D);
        },
        getMenuItemCount: () => Le.items.length,
        getMenuItemValues: () => Bt().map(b()),
        getMenuItemTextAtIndex: (D) => Le.getPrimaryTextAtIndex(D),
        isTypeaheadInProgress: () => Le.typeaheadInProgress,
        typeaheadMatchItem: (D, ge) => Le.typeaheadMatchItem(D, ge),
        // getCommonAdapterMethods
        addClass: se,
        removeClass: ye,
        hasClass: bt,
        setRippleCenter: (D) => X && X.setRippleCenter(D),
        activateBottomLine: () => X && X.activate(),
        deactivateBottomLine: () => X && X.deactivate(),
        notifyChange: (D) => {
          var ge;
          y(!0), I() && S(!((ge = s(P)) != null && ge.isValid())), Je(Vn(), "SMUISelectChange", { value: g(), index: s(F) });
        },
        // getOutlineAdapterMethods
        hasOutline: () => !!de,
        notchOutline: (D) => de && de.notch(D),
        closeOutline: () => de && de.closeNotch(),
        // getLabelAdapterMethods
        hasLabel: () => !!N,
        floatLabel: (D) => N && N.float(D),
        getLabelWidth: () => N ? N.getWidth() : 0,
        setLabelRequired: (D) => N && N.setRequired(D)
      },
      {
        get helperText() {
          return Ue;
        },
        get leadingIcon() {
          return Ke;
        }
      }
    ),
    !0
  ), K(F, Bt().indexOf(g()), !0), s(P).init(), It(z), () => {
    var D;
    (D = s(P)) == null || D.destroy();
  })), Ln(() => {
    Z && Z();
  });
  function bt(D) {
    return D in R ? R[D] : Vn().classList.contains(D);
  }
  function se(D) {
    R[D] || (R[D] = !0);
  }
  function ye(D) {
    (!(D in R) || R[D]) && (R[D] = !1);
  }
  function Y(D, ge) {
    W[D] != ge && (ge === "" || ge == null ? delete W[D] : W[D] = ge);
  }
  function te(D) {
    we[D] || (we[D] = !0);
  }
  function Ne(D) {
    (!(D in we) || we[D]) && (we[D] = !1);
  }
  function ft(D) {
    return D in _e ? _e[D] ?? null : Vn().getAttribute(D);
  }
  function _t(D, ge) {
    _e[D] !== ge && (_e[D] = ge);
  }
  function gt(D) {
    (!(D in _e) || _e[D] != null) && (_e[D] = void 0);
  }
  function Bt() {
    return Le.getOrderedList().map((D) => D.getValue());
  }
  function Ir(D) {
    const ge = D.currentTarget.getBoundingClientRect();
    return (vt(D) ? D.touches[0].clientX : D.clientX) - ge.left;
  }
  function vt(D) {
    return "touches" in D;
  }
  function Dt() {
    if (s(P) == null)
      throw new Error("Instance is undefined.");
    return s(P).getUseDefaultValidation();
  }
  function It(D) {
    var ge;
    (ge = s(P)) == null || ge.setUseDefaultValidation(D);
  }
  function On() {
    Ae.focus();
  }
  function yi() {
    var D;
    (D = s(P)) == null || D.layout();
  }
  function Vn() {
    return J;
  }
  var qe = {
    getUseDefaultValidation: Dt,
    setUseDefaultValidation: It,
    focus: On,
    layout: yi,
    getElement: Vn
  }, Qe = cp(), $e = Q(Qe);
  ke($e, (D, ge, ht) => ({ class: D, style: ge, ...ht }), [
    () => Pe({
      "mdc-select": !0,
      "mdc-select--required": _(),
      "mdc-select--disabled": v(),
      "mdc-select--filled": f() === "filled",
      "mdc-select--outlined": f() === "outlined",
      "smui-select--standard": f() === "standard",
      "mdc-select--with-leading-icon": o(w()) ? e.leadingIcon : w(),
      "mdc-select--no-label": m() || h() == null,
      "mdc-select--invalid": S(),
      "mdc-select--activated": s(ce),
      "mdc-data-table__pagination-rows-per-page-select": je === "data-table:pagination",
      ...R,
      [l()]: !0
    }),
    () => Object.entries(W).map(([D, ge]) => `${D}: ${ge};`).concat([c()]).join(" "),
    () => Jn(U, [
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
  var Pt = me($e);
  {
    var mn = (D) => {
      var ge = lp();
      ke(
        ge,
        (ht) => ({
          type: "hidden",
          required: _(),
          disabled: v(),
          value: g(),
          ...ht
        }),
        [() => rt(U, "input$")],
        void 0,
        void 0,
        !0
      ), L(D, ge);
    };
    oe(Pt, (D) => {
      x() && D(mn);
    });
  }
  var at = Ie(Pt, 2), ut = (D) => {
    var ge;
    Ae.focus(), s(P) && s(P).handleClick(Ir(D)), (ge = e.anchor$onclick) == null || ge.call(e, D);
  }, Ct = (D) => {
    var ge;
    s(P) && s(P).handleKeydown(D), (ge = e.onkeydown) == null || ge.call(e, D);
  }, et = (D) => {
    var ge;
    s(P) && s(P).handleBlur(), Je(Vn(), "blur", D), (ge = e.anchor$onblur) == null || ge.call(e, D);
  }, Lt = (D) => {
    var ge;
    s(P) && s(P).handleFocus(), Je(Vn(), "focus", D), (ge = e.anchor$onfocus) == null || ge.call(e, D);
  };
  ke(
    at,
    (D, ge) => ({
      class: D,
      "aria-required": _() ? "true" : void 0,
      "aria-disabled": v() ? "true" : void 0,
      "aria-controls": s(V),
      "aria-expanded": s(ce) ? "true" : "false",
      "aria-describedby": s(B),
      role: "combobox",
      tabindex: "0",
      ..._e,
      ...ge,
      onclick: ut,
      onkeydown: Ct,
      onblur: et,
      onfocus: Lt
    }),
    [
      () => Pe({ "mdc-select__anchor": !0, [A()]: !0 }),
      () => rt(U, "anchor$")
    ]
  );
  var Rn = me(at);
  {
    var Ot = (D) => {
      var ge = up();
      L(D, ge);
    };
    oe(Rn, (D) => {
      f() === "filled" && D(Ot);
    });
  }
  var yt = Ie(Rn, 2);
  {
    var Nt = (D) => {
      {
        let ge = /* @__PURE__ */ fe(() => E() + "-smui-label"), ht = /* @__PURE__ */ fe(() => n() !== ""), Rt = /* @__PURE__ */ fe(() => rt(U, "label$"));
        Ee(
          bo(D, nt(
            {
              get id() {
                return s(ge);
              },
              get floatAbove() {
                return s(ht);
              },
              get required() {
                return _();
              }
            },
            () => s(Rt),
            {
              children: (nr, rr) => {
                var ia = re(), Ii = Q(ia);
                {
                  var zr = (Xr) => {
                  }, Bo = (Xr) => {
                    var Ba = re(), aa = Q(Ba);
                    {
                      var il = (Sr) => {
                        var Kr = Mt();
                        Oe(() => st(Kr, h())), L(Sr, Kr);
                      }, Fa = (Sr) => {
                        var Kr = re(), Fo = Q(Kr);
                        Se(Fo, h), L(Sr, Kr);
                      };
                      oe(
                        aa,
                        (Sr) => {
                          typeof h() == "string" ? Sr(il) : Sr(Fa, !1);
                        },
                        !0
                      );
                    }
                    L(Xr, Ba);
                  };
                  oe(Ii, (Xr) => {
                    h() == null ? Xr(zr) : Xr(Bo, !1);
                  });
                }
                L(nr, ia);
              },
              $$slots: { default: !0 }
            }
          )),
          (nr) => N = nr,
          () => N
        );
      }
    };
    oe(yt, (D) => {
      f() !== "outlined" && !m() && h() != null && D(Nt);
    });
  }
  var ln = Ie(yt, 2);
  {
    var Ft = (D) => {
      {
        let ge = /* @__PURE__ */ fe(() => m() || h() == null), ht = /* @__PURE__ */ fe(() => rt(U, "outline$"));
        Ee(
          jc(D, nt(
            {
              get noLabel() {
                return s(ge);
              }
            },
            () => s(ht),
            {
              children: (Rt, nr) => {
                var rr = re(), ia = Q(rr);
                {
                  var Ii = (zr) => {
                    {
                      let Bo = /* @__PURE__ */ fe(() => E() + "-smui-label"), Xr = /* @__PURE__ */ fe(() => n() !== ""), Ba = /* @__PURE__ */ fe(() => rt(U, "label$"));
                      Ee(
                        bo(zr, nt(
                          {
                            get id() {
                              return s(Bo);
                            },
                            get floatAbove() {
                              return s(Xr);
                            },
                            get required() {
                              return _();
                            }
                          },
                          () => s(Ba),
                          {
                            children: (aa, il) => {
                              var Fa = re(), Sr = Q(Fa);
                              {
                                var Kr = (oa) => {
                                }, Fo = (oa) => {
                                  var al = re(), Ed = Q(al);
                                  {
                                    var Sd = (Ei) => {
                                      var sa = Mt();
                                      Oe(() => st(sa, h())), L(Ei, sa);
                                    }, Ad = (Ei) => {
                                      var sa = re(), Cd = Q(sa);
                                      Se(Cd, h), L(Ei, sa);
                                    };
                                    oe(
                                      Ed,
                                      (Ei) => {
                                        typeof h() == "string" ? Ei(Sd) : Ei(Ad, !1);
                                      },
                                      !0
                                    );
                                  }
                                  L(oa, al);
                                };
                                oe(Sr, (oa) => {
                                  h() == null ? oa(Kr) : oa(Fo, !1);
                                });
                              }
                              L(aa, Fa);
                            },
                            $$slots: { default: !0 }
                          }
                        )),
                        (aa) => N = aa,
                        () => N
                      );
                    }
                  };
                  oe(ia, (zr) => {
                    !m() && h() != null && zr(Ii);
                  });
                }
                L(Rt, rr);
              },
              $$slots: { default: !0 }
            }
          )),
          (Rt) => de = Rt,
          () => de
        );
      }
    };
    oe(ln, (D) => {
      f() === "outlined" && D(Ft);
    });
  }
  var un = Ie(ln, 2);
  Se(un, () => e.leadingIcon ?? pe);
  var Yt = Ie(un, 2);
  ke(Yt, (D, ge) => ({ class: D, ...ge }), [
    () => Pe({
      "mdc-select__selected-text-container": !0,
      [G()]: !0
    }),
    () => rt(U, "selectedTextContainer$")
  ]);
  var Gn = me(Yt);
  ke(
    Gn,
    (D, ge) => ({
      id: E() + "-smui-selected-text",
      class: D,
      role: "button",
      "aria-haspopup": "listbox",
      "aria-labelledby": E() + "-smui-label",
      ...ge
    }),
    [
      () => Pe({
        "mdc-select__selected-text": !0,
        [j()]: !0
      }),
      () => rt(U, "selectedText$")
    ]
  );
  var qr = me(Gn);
  De(Gn, (D, ge) => q == null ? void 0 : q(D, ge), k), De(Yt, (D, ge) => q == null ? void 0 : q(D, ge), M);
  var cn = Ie(Yt, 2);
  ke(cn, (D, ge) => ({ class: D, ...ge }), [
    () => Pe({
      "mdc-select__dropdown-icon": !0,
      [T()]: !0
    }),
    () => rt(U, "dropdownIcon$")
  ]), De(cn, (D, ge) => q == null ? void 0 : q(D, ge), O);
  var Wt = Ie(cn, 2);
  {
    var gn = (D) => {
      {
        let ge = /* @__PURE__ */ fe(() => rt(U, "ripple$"));
        Ee(Gc(D, nt(() => s(ge))), (ht) => X = ht, () => X);
      }
    };
    oe(Wt, (D) => {
      f() !== "outlined" && d() && D(gn);
    });
  }
  Ee(at, (D) => Ae = D, () => Ae), De(at, (D, ge) => q == null ? void 0 : q(D, ge), C);
  var tr = Ie(at, 2);
  {
    let D = /* @__PURE__ */ fe(() => Pe({
      "mdc-select__menu": !0,
      ...we,
      [H()]: !0
    })), ge = /* @__PURE__ */ fe(() => rt(U, "menu$"));
    Jg(tr, nt(
      {
        get class() {
          return s(D);
        },
        get id() {
          return s(V);
        },
        fullWidth: !0,
        anchor: !1,
        get anchorElement() {
          return s($);
        },
        get anchorCorner() {
          return s(ie);
        }
      },
      () => s(ge),
      {
        onSMUIMenuSelected: (ht) => {
          var Rt;
          s(P) && s(P).handleMenuItemAction(ht.detail.index), (Rt = e.onSMUIMenuSelected) == null || Rt.call(e, ht);
        },
        onSMUIMenuSurfaceClosing: (ht) => {
          var Rt;
          s(P) && s(P).handleMenuClosing(), (Rt = e.onSMUIMenuSurfaceClosing) == null || Rt.call(e, ht);
        },
        onSMUIMenuSurfaceClosed: (ht) => {
          var Rt;
          s(P) && s(P).handleMenuClosed(), (Rt = e.onSMUIMenuSurfaceClosed) == null || Rt.call(e, ht);
        },
        onSMUIMenuSurfaceOpened: (ht) => {
          var Rt;
          s(P) && s(P).handleMenuOpened(), (Rt = e.onSMUIMenuSurfaceOpened) == null || Rt.call(e, ht);
        },
        get open() {
          return s(ce);
        },
        set open(ht) {
          K(ce, ht, !0);
        },
        children: (ht, Rt) => {
          {
            let nr = /* @__PURE__ */ fe(() => rt(U, "list$"));
            $g(ht, nt(
              {
                role: "listbox",
                get wrapFocus() {
                  return s(Me);
                }
              },
              () => s(nr),
              {
                get selectedIndex() {
                  return s(F);
                },
                set selectedIndex(rr) {
                  K(F, rr, !0);
                },
                children: (rr, ia) => {
                  var Ii = re(), zr = Q(Ii);
                  Se(zr, () => e.children ?? pe), L(rr, Ii);
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
  Ee($e, (D) => J = D, () => J), De($e, (D, ge) => Xt == null ? void 0 : Xt(D, ge), () => ({
    ripple: f() === "filled",
    unbounded: !1,
    addClass: se,
    removeClass: ye,
    addStyle: Y
  })), De($e, (D, ge) => es == null ? void 0 : es(D, ge), () => ({ addClass: se, removeClass: ye })), De($e, (D, ge) => q == null ? void 0 : q(D, ge), u);
  var ra = Ie($e, 2);
  {
    var ko = (D) => {
      {
        let ge = /* @__PURE__ */ fe(() => rt(U, "helperText$"));
        op(D, nt(() => s(ge), {
          children: (ht, Rt) => {
            var nr = re(), rr = Q(nr);
            Se(rr, () => e.helperText ?? pe), L(ht, nr);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    oe(ra, (D) => {
      e.helperText && D(ko);
    });
  }
  Oe(() => st(qr, n())), L(t, Qe);
  var Er = Te(qe);
  return i(), Er;
}
function fp(t, e) {
  xe(e, !0);
  const n = () => Yn(d, "$selectedValue", r), [r, i] = yr();
  let a = p(e, "use", 19, () => []);
  p(e, "class", 3, "");
  let o = p(e, "value", 3, ""), u = /* @__PURE__ */ Xe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "value",
    "children"
  ]), l;
  const c = he("SMUI:select:selectedText"), d = he("SMUI:select:value");
  ae("SMUI:list:item:role", "option");
  const v = /* @__PURE__ */ fe(() => o() != null && o() !== "" && n() === o());
  it(f), Ln(f);
  function f() {
    s(v) && l && hi(c, l.getPrimaryText());
  }
  function m() {
    return l.getElement();
  }
  var h = { getElement: m };
  Ee(
    rp(t, nt(
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
          return s(v);
        }
      },
      () => u,
      {
        children: (b, y) => {
          var S = re(), I = Q(S);
          Se(I, () => e.children ?? pe), L(b, S);
        },
        $$slots: { default: !0 }
      }
    )),
    (b) => l = b,
    () => l
  );
  var g = Te(h);
  return i(), g;
}
function hp(t, e) {
  xe(e, !0);
  let n = p(e, "data", 19, () => []);
  p(e, "placeholder", 3, "");
  let r = p(e, "label", 3, "");
  p(e, "description", 3, "");
  let i = p(e, "value", 15), a = p(e, "required", 3, !1);
  p(e, "size", 3, "sm");
  let o = p(e, "variant", 3, "standard"), u = p(e, "selectedOptionIndex", 31, () => -1), l = p(e, "disabled", 3, !1);
  function c(d) {
    return () => u(d);
  }
  dp(t, {
    get disabled() {
      return l();
    },
    key: (d) => `${d ?? ""}`,
    get label() {
      return r();
    },
    style: "width: 100%;",
    get variant() {
      return o();
    },
    get required() {
      return a();
    },
    get value() {
      return i();
    },
    set value(d) {
      i(d);
    },
    children: (d, v) => {
      var f = re(), m = Q(f);
      Hn(m, 17, n, Oi, (h, g, b) => {
        {
          let y = /* @__PURE__ */ fe(() => c(b));
          fp(h, {
            get onclick() {
              return s(y);
            },
            get value() {
              return s(g).value;
            },
            children: (S, I) => {
              var _ = Mt();
              Oe(() => st(_, s(g).label)), L(S, _);
            },
            $$slots: { default: !0 }
          });
        }
      }), L(d, f);
    },
    $$slots: { default: !0 }
  }), Te();
}
const vp = tn([]);
vp.subscribe;
ue({ freeze: !1 });
const Vt = [];
for (let t = 0; t < 256; ++t)
  Vt.push((t + 256).toString(16).slice(1));
function mp(t, e = 0) {
  return (Vt[t[e + 0]] + Vt[t[e + 1]] + Vt[t[e + 2]] + Vt[t[e + 3]] + "-" + Vt[t[e + 4]] + Vt[t[e + 5]] + "-" + Vt[t[e + 6]] + Vt[t[e + 7]] + "-" + Vt[t[e + 8]] + Vt[t[e + 9]] + "-" + Vt[t[e + 10]] + Vt[t[e + 11]] + Vt[t[e + 12]] + Vt[t[e + 13]] + Vt[t[e + 14]] + Vt[t[e + 15]]).toLowerCase();
}
let ts;
const gp = new Uint8Array(16);
function pp() {
  if (!ts) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    ts = crypto.getRandomValues.bind(crypto);
  }
  return ts(gp);
}
const bp = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), eu = { randomUUID: bp };
function _p(t, e, n) {
  var i;
  if (eu.randomUUID && !e && !t)
    return eu.randomUUID();
  t = t || {};
  const r = t.random ?? ((i = t.rng) == null ? void 0 : i.call(t)) ?? pp();
  if (r.length < 16)
    throw new Error("Random bytes length must be >= 16");
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    if (n = n || 0, n < 0 || n + 16 > e.length)
      throw new RangeError(`UUID byte range ${n}:${n + 15} is out of buffer bounds`);
    for (let a = 0; a < 16; ++a)
      e[n + a] = r[a];
    return e;
  }
  return mp(r);
}
var yp = /* @__PURE__ */ be('<span class="oscd-icon"><!></span>');
function Fn(t, e) {
  var n = yp(), r = me(n);
  Se(r, () => e.children ?? pe), L(t, n);
}
var Ip = /* @__PURE__ */ an('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');
function Ep(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Fn(t, {
    children: (r, i) => {
      var a = Ip();
      Oe(() => kt(a, n())), L(r, a);
    }
  });
}
var Sp = /* @__PURE__ */ an('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Xc(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Fn(t, {
    children: (r, i) => {
      var a = Sp();
      Oe(() => kt(a, n())), L(r, a);
    }
  });
}
var Ap = /* @__PURE__ */ an('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');
function Cp(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Fn(t, {
    children: (r, i) => {
      var a = Ap();
      Oe(() => kt(a, n())), L(r, a);
    }
  });
}
var xp = /* @__PURE__ */ an('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"></path></svg>');
function Tp(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Fn(t, {
    children: (r, i) => {
      var a = xp();
      Oe(() => kt(a, n())), L(r, a);
    }
  });
}
var wp = /* @__PURE__ */ an('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"></path></svg>');
function Lp(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Fn(t, {
    children: (r, i) => {
      var a = wp();
      Oe(() => kt(a, n())), L(r, a);
    }
  });
}
var Op = /* @__PURE__ */ an('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function Rp(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Fn(t, {
    children: (r, i) => {
      var a = Op();
      Oe(() => kt(a, n())), L(r, a);
    }
  });
}
var Mp = /* @__PURE__ */ an('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function Dp(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Fn(t, {
    children: (r, i) => {
      var a = Mp();
      Oe(() => kt(a, n())), L(r, a);
    }
  });
}
var Pp = /* @__PURE__ */ an('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function Np(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Fn(t, {
    children: (r, i) => {
      var a = Pp();
      Oe(() => kt(a, n())), L(r, a);
    }
  });
}
Qd();
var Hp = /* @__PURE__ */ an('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"></path></svg>');
function Up(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Fn(t, {
    children: (r, i) => {
      var a = Hp();
      Oe(() => kt(a, n())), L(r, a);
    }
  });
}
var kp = /* @__PURE__ */ an('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3" cursor="pointer"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Bp(t, e) {
  let n = p(e, "svgStyles", 8, "");
  Fn(t, {
    children: (r, i) => {
      var a = kp();
      Oe(() => kt(a, n())), L(r, a);
    }
  });
}
var Fp = /* @__PURE__ */ an('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m480-240 160-160-56-56-64 64v-168h-80v168l-64-64-56 56 160 160ZM200-640v440h560v-440H200Zm0 520q-33 0-56.5-23.5T120-200v-499q0-14 4.5-27t13.5-24l50-61q11-14 27.5-21.5T250-840h460q18 0 34.5 7.5T772-811l50 61q9 11 13.5 24t4.5 27v499q0 33-23.5 56.5T760-120H200Zm16-600h528l-34-40H250l-34 40Zm264 300Z"></path></svg>');
function Vp(t, e) {
  let n = p(e, "svgStyles", 8, "");
  Fn(t, {
    children: (r, i) => {
      var a = Fp();
      Oe(() => kt(a, n())), L(r, a);
    }
  });
}
function Gp(t, e) {
  e(t.target.value);
}
var jp = /* @__PURE__ */ be('<div class="custom-text-field svelte-1719vm0"><input type="date" id="datetime-picker" class="custom-text-field__input svelte-1719vm0" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-1719vm0"> </label> <span class="custom-line svelte-1719vm0"></span></div>');
function Wp(t, e) {
  xe(e, !0);
  let n = p(e, "label", 3, ""), r = p(e, "value", 15, "");
  var i = jp(), a = me(i);
  a.__change = [Gp, r];
  var o = Ie(a, 2), u = me(o);
  Oe(() => st(u, n())), Ca(a, r), L(t, i), Te();
}
hn(["change"]);
function qp(t, e) {
  e(t.target.value);
}
var zp = /* @__PURE__ */ be('<div class="custom-text-field svelte-6wdfbb"><input type="datetime-local" id="datetime-picker" class="custom-text-field__input svelte-6wdfbb" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-6wdfbb"> </label> <span class="custom-line svelte-6wdfbb"></span></div>');
function Xp(t, e) {
  xe(e, !0);
  let n = p(e, "label", 3, ""), r = p(e, "value", 15, "");
  var i = zp(), a = me(i);
  a.__change = [qp, r];
  var o = Ie(a, 2), u = me(o);
  Oe(() => st(u, n())), Ca(a, r), L(t, i), Te();
}
hn(["change"]);
function Kp(t, e, n, r) {
  e() && ((t.key === "Enter" || t.key === " ") && (t.preventDefault(), n()), t.key === "Escape" && (t.preventDefault(), r()));
}
var Yp = /* @__PURE__ */ be('<span role="button" tabindex="0" aria-labelledby="tooltip"><!></span>');
function _o(t, e) {
  xe(e, !0);
  let n = p(e, "content", 3, ""), r = p(e, "side", 3, "top"), i = p(e, "hoverDelay", 3, 0), a = p(e, "transitionDuration", 3, 80), o = p(e, "disabled", 3, !1), u = p(e, "offset", 3, 8), l = p(e, "backgroundColor", 3, "#000"), c = p(e, "paddingY", 3, 6), d = p(e, "paddingX", 3, 10), v = p(e, "textColor", 3, "#fff");
  const f = `tt-${Math.random().toString(36).slice(2)}`;
  let m = /* @__PURE__ */ ve(null), h = /* @__PURE__ */ ve(null), g = /* @__PURE__ */ ve(null), b = /* @__PURE__ */ ve(null), y = /* @__PURE__ */ ve(!1), S = /* @__PURE__ */ ve(null), I = /* @__PURE__ */ ve(null);
  function _(T) {
    var W;
    if (!T || !T.trim().startsWith("var(")) return T;
    const H = T.match(/^var\(\s*([^,\s)]+)\s*(?:,\s*([^)]+)\s*)?\)$/);
    if (!H) return T;
    const U = H[1], z = (W = H[2]) == null ? void 0 : W.trim(), J = s(m) ? getComputedStyle(s(m)).getPropertyValue(U) : "", P = getComputedStyle(document.documentElement).getPropertyValue(U), R = (J || P).trim();
    return R || z || T;
  }
  function E() {
    !n() || o() || (s(S) && clearTimeout(s(S)), i() > 0 ? K(S, setTimeout(() => K(y, !0), i()), !0) : K(y, !0));
  }
  function x() {
    s(S) && clearTimeout(s(S)), K(y, !1);
  }
  function w() {
    E();
  }
  function C() {
    x();
  }
  function A() {
    E();
  }
  function M() {
    x();
  }
  function G() {
    if (!s(h) || !s(b) || !s(m) || o()) return;
    const T = s(m).getBoundingClientRect(), H = s(b).getBoundingClientRect();
    let U = 0, z = 0;
    const J = u();
    switch (r()) {
      case "top":
        U = T.top - H.height - J, z = T.left + T.width / 2 - H.width / 2;
        break;
      case "bottom":
        U = T.bottom + J, z = T.left + T.width / 2 - H.width / 2;
        break;
      case "left":
        U = T.top + T.height / 2 - H.height / 2, z = T.left - H.width - J;
        break;
      case "right":
        U = T.top + T.height / 2 - H.height / 2, z = T.right + J;
        break;
    }
    s(h).style.top = `${U + window.scrollY}px`, s(h).style.left = `${z + window.scrollX}px`;
  }
  function k() {
    var T;
    (T = s(I)) == null || T.disconnect(), K(I, null), s(h) && s(h).parentNode && s(h).parentNode.removeChild(s(h)), K(h, null), K(b, null), K(g, null), s(S) && clearTimeout(s(S));
  }
  Ln(k), Ce(() => {
    if (!(!s(y) || !n() || o())) {
      if (!s(h)) {
        K(h, document.createElement("div"), !0), s(h).style.position = "absolute", s(h).style.zIndex = "9999", s(h).style.pointerEvents = "none", s(h).style.opacity = "0", s(h).style.transition = `opacity ${a()}ms ease`, s(h).id = f, s(h).setAttribute("role", "tooltip"), document.body.appendChild(s(h)), K(g, s(h).attachShadow({ mode: "open" }), !0);
        const T = document.createElement("style"), H = _(l()), U = _(v());
        T.textContent = `
        .bubble {
          --pad-y: ${c()}px;
          --pad-x: ${d()}px;
          --radius: 4px;
          --bg: ${H};
          --fg: ${U};
          background: var(--bg);
          color: var(--fg);
          font-size: 0.85rem;
          line-height: 1.2;
          padding: var(--pad-y) var(--pad-x);
          border-radius: var(--radius);
          white-space: nowrap;
          box-shadow: 0 4px 14px rgba(0,0,0,.25);
          pointer-events: none;
          position: relative;
          transition: none;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
        }
        .bubble::after {
          content: "";
          position: absolute;
          background: var(--bg);
          width: 8px;
          height: 8px;
          transform: rotate(45deg);
        }
        .bubble.top::after { left: 50%; bottom: -4px; transform: translateX(-50%) rotate(45deg); }
        .bubble.bottom::after { left: 50%; top: -4px; transform: translateX(-50%) rotate(45deg); }
        .bubble.left::after { top: 50%; right: -4px; transform: translateY(-50%) rotate(45deg); }
        .bubble.right::after { top: 50%; left: -4px; transform: translateY(-50%) rotate(45deg); }
      `, s(g).appendChild(T), K(b, document.createElement("div"), !0), s(g).appendChild(s(b)), K(
          I,
          new MutationObserver(() => {
            s(y) && G();
          }),
          !0
        ), s(I).observe(document.body, { childList: !0, subtree: !0 });
      }
      s(b) && (s(b).className = `bubble ${r()}`, s(b).innerHTML = n()), s(h) && (s(h).style.opacity = "1", G());
    }
  }), Ce(() => {
    if (s(y) || !s(h))
      return;
    s(h).style.opacity = "0";
    const T = s(h), H = setTimeout(
      () => {
        T && T.parentNode && T.parentNode.removeChild(T), s(h) === T && k();
      },
      a()
    );
    return () => clearTimeout(H);
  });
  var j = Yp();
  j.__keydown = [Kp, n, E, x];
  var O = me(j);
  Se(O, () => e.children ?? pe), Ee(j, (T) => K(m, T), () => s(m)), Oe(() => {
    Pr(j, "aria-describedby", n() && !o() ? f : void 0), Pr(j, "aria-haspopup", n() ? "true" : void 0), Pr(j, "aria-expanded", n() ? s(y) ? "true" : "false" : void 0);
  }), ga("mouseenter", j, w), ga("mouseleave", j, C), ga("focus", j, A), ga("blur", j, M), L(t, j), Te();
}
hn(["keydown"]);
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
var fa = {
  ANIM_CHECKED_INDETERMINATE: "mdc-checkbox--anim-checked-indeterminate",
  ANIM_CHECKED_UNCHECKED: "mdc-checkbox--anim-checked-unchecked",
  ANIM_INDETERMINATE_CHECKED: "mdc-checkbox--anim-indeterminate-checked",
  ANIM_INDETERMINATE_UNCHECKED: "mdc-checkbox--anim-indeterminate-unchecked",
  ANIM_UNCHECKED_CHECKED: "mdc-checkbox--anim-unchecked-checked",
  ANIM_UNCHECKED_INDETERMINATE: "mdc-checkbox--anim-unchecked-indeterminate",
  BACKGROUND: "mdc-checkbox__background",
  CHECKED: "mdc-checkbox--checked",
  CHECKMARK: "mdc-checkbox__checkmark",
  CHECKMARK_PATH: "mdc-checkbox__checkmark-path",
  DISABLED: "mdc-checkbox--disabled",
  INDETERMINATE: "mdc-checkbox--indeterminate",
  MIXEDMARK: "mdc-checkbox__mixedmark",
  NATIVE_CONTROL: "mdc-checkbox__native-control",
  ROOT: "mdc-checkbox",
  SELECTED: "mdc-checkbox--selected",
  UPGRADED: "mdc-checkbox--upgraded"
}, In = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_CHECKED_INDETERMINATE_VALUE: "mixed",
  DATA_INDETERMINATE_ATTR: "data-indeterminate",
  NATIVE_CONTROL_SELECTOR: ".mdc-checkbox__native-control",
  TRANSITION_STATE_CHECKED: "checked",
  TRANSITION_STATE_INDETERMINATE: "indeterminate",
  TRANSITION_STATE_INIT: "init",
  TRANSITION_STATE_UNCHECKED: "unchecked"
}, tu = {
  ANIM_END_LATCH_MS: 250
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
var Zp = (
  /** @class */
  function(t) {
    We(e, t);
    function e(n) {
      var r = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return r.currentCheckState = In.TRANSITION_STATE_INIT, r.currentAnimationClass = "", r.animEndLatchTimer = 0, r.enableAnimationEndHandler = !1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return fa;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return In;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return tu;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          forceLayout: function() {
          },
          hasNativeControl: function() {
            return !1;
          },
          isAttachedToDOM: function() {
            return !1;
          },
          isChecked: function() {
            return !1;
          },
          isIndeterminate: function() {
            return !1;
          },
          removeClass: function() {
          },
          removeNativeControlAttr: function() {
          },
          setNativeControlAttr: function() {
          },
          setNativeControlDisabled: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      this.currentCheckState = this.determineCheckState(), this.updateAriaChecked(), this.adapter.addClass(fa.UPGRADED);
    }, e.prototype.destroy = function() {
      clearTimeout(this.animEndLatchTimer);
    }, e.prototype.setDisabled = function(n) {
      this.adapter.setNativeControlDisabled(n), n ? this.adapter.addClass(fa.DISABLED) : this.adapter.removeClass(fa.DISABLED);
    }, e.prototype.handleAnimationEnd = function() {
      var n = this;
      this.enableAnimationEndHandler && (clearTimeout(this.animEndLatchTimer), this.animEndLatchTimer = setTimeout(function() {
        n.adapter.removeClass(n.currentAnimationClass), n.enableAnimationEndHandler = !1;
      }, tu.ANIM_END_LATCH_MS));
    }, e.prototype.handleChange = function() {
      this.transitionCheckState();
    }, e.prototype.transitionCheckState = function() {
      if (this.adapter.hasNativeControl()) {
        var n = this.currentCheckState, r = this.determineCheckState();
        if (n !== r) {
          this.updateAriaChecked();
          var i = In.TRANSITION_STATE_UNCHECKED, a = fa.SELECTED;
          r === i ? this.adapter.removeClass(a) : this.adapter.addClass(a), this.currentAnimationClass.length > 0 && (clearTimeout(this.animEndLatchTimer), this.adapter.forceLayout(), this.adapter.removeClass(this.currentAnimationClass)), this.currentAnimationClass = this.getTransitionAnimationClass(n, r), this.currentCheckState = r, this.adapter.isAttachedToDOM() && this.currentAnimationClass.length > 0 && (this.adapter.addClass(this.currentAnimationClass), this.enableAnimationEndHandler = !0);
        }
      }
    }, e.prototype.determineCheckState = function() {
      var n = In.TRANSITION_STATE_INDETERMINATE, r = In.TRANSITION_STATE_CHECKED, i = In.TRANSITION_STATE_UNCHECKED;
      return this.adapter.isIndeterminate() ? n : this.adapter.isChecked() ? r : i;
    }, e.prototype.getTransitionAnimationClass = function(n, r) {
      var i = In.TRANSITION_STATE_INIT, a = In.TRANSITION_STATE_CHECKED, o = In.TRANSITION_STATE_UNCHECKED, u = e.cssClasses, l = u.ANIM_UNCHECKED_CHECKED, c = u.ANIM_UNCHECKED_INDETERMINATE, d = u.ANIM_CHECKED_UNCHECKED, v = u.ANIM_CHECKED_INDETERMINATE, f = u.ANIM_INDETERMINATE_CHECKED, m = u.ANIM_INDETERMINATE_UNCHECKED;
      switch (n) {
        case i:
          return r === o ? "" : r === a ? f : m;
        case o:
          return r === a ? l : c;
        case a:
          return r === o ? d : v;
        default:
          return r === a ? f : m;
      }
    }, e.prototype.updateAriaChecked = function() {
      this.adapter.isIndeterminate() ? this.adapter.setNativeControlAttr(In.ARIA_CHECKED_ATTR, In.ARIA_CHECKED_INDETERMINATE_VALUE) : this.adapter.removeNativeControlAttr(In.ARIA_CHECKED_ATTR);
    }, e;
  }(wt)
);
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
var pn = {
  CLOSED_CLASS: "mdc-linear-progress--closed",
  CLOSED_ANIMATION_OFF_CLASS: "mdc-linear-progress--closed-animation-off",
  INDETERMINATE_CLASS: "mdc-linear-progress--indeterminate",
  REVERSED_CLASS: "mdc-linear-progress--reversed",
  ANIMATION_READY_CLASS: "mdc-linear-progress--animation-ready"
}, Mn = {
  ARIA_HIDDEN: "aria-hidden",
  ARIA_VALUEMAX: "aria-valuemax",
  ARIA_VALUEMIN: "aria-valuemin",
  ARIA_VALUENOW: "aria-valuenow",
  BUFFER_BAR_SELECTOR: ".mdc-linear-progress__buffer-bar",
  FLEX_BASIS: "flex-basis",
  PRIMARY_BAR_SELECTOR: ".mdc-linear-progress__primary-bar"
}, ha = {
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
var Qp = (
  /** @class */
  function(t) {
    We(e, t);
    function e(n) {
      var r = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return r.observer = null, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return pn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Mn;
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
      this.determinate = !this.adapter.hasClass(pn.INDETERMINATE_CLASS), this.adapter.addClass(pn.ANIMATION_READY_CLASS), this.progress = 0, this.buffer = 1, this.observer = this.adapter.attachResizeObserver(function(r) {
        var i, a;
        if (!n.determinate)
          try {
            for (var o = Ut(r), u = o.next(); !u.done; u = o.next()) {
              var l = u.value;
              l.contentRect && n.calculateAndSetDimensions(l.contentRect.width);
            }
          } catch (c) {
            i = { error: c };
          } finally {
            try {
              u && !u.done && (a = o.return) && a.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
      }), !this.determinate && this.observer && this.calculateAndSetDimensions(this.adapter.getWidth());
    }, e.prototype.setDeterminate = function(n) {
      if (this.determinate = n, this.determinate) {
        this.adapter.removeClass(pn.INDETERMINATE_CLASS), this.adapter.setAttribute(Mn.ARIA_VALUENOW, this.progress.toString()), this.adapter.setAttribute(Mn.ARIA_VALUEMAX, "1"), this.adapter.setAttribute(Mn.ARIA_VALUEMIN, "0"), this.setPrimaryBarProgress(this.progress), this.setBufferBarProgress(this.buffer);
        return;
      }
      this.observer && this.calculateAndSetDimensions(this.adapter.getWidth()), this.adapter.addClass(pn.INDETERMINATE_CLASS), this.adapter.removeAttribute(Mn.ARIA_VALUENOW), this.adapter.removeAttribute(Mn.ARIA_VALUEMAX), this.adapter.removeAttribute(Mn.ARIA_VALUEMIN), this.setPrimaryBarProgress(1), this.setBufferBarProgress(1);
    }, e.prototype.isDeterminate = function() {
      return this.determinate;
    }, e.prototype.setProgress = function(n) {
      this.progress = n, this.determinate && (this.setPrimaryBarProgress(n), this.adapter.setAttribute(Mn.ARIA_VALUENOW, n.toString()));
    }, e.prototype.getProgress = function() {
      return this.progress;
    }, e.prototype.setBuffer = function(n) {
      this.buffer = n, this.determinate && this.setBufferBarProgress(n);
    }, e.prototype.getBuffer = function() {
      return this.buffer;
    }, e.prototype.open = function() {
      this.adapter.removeClass(pn.CLOSED_CLASS), this.adapter.removeClass(pn.CLOSED_ANIMATION_OFF_CLASS), this.adapter.removeAttribute(Mn.ARIA_HIDDEN);
    }, e.prototype.close = function() {
      this.adapter.addClass(pn.CLOSED_CLASS), this.adapter.setAttribute(Mn.ARIA_HIDDEN, "true");
    }, e.prototype.isClosed = function() {
      return this.adapter.hasClass(pn.CLOSED_CLASS);
    }, e.prototype.handleTransitionEnd = function() {
      this.adapter.hasClass(pn.CLOSED_CLASS) && this.adapter.addClass(pn.CLOSED_ANIMATION_OFF_CLASS);
    }, e.prototype.destroy = function() {
      t.prototype.destroy.call(this), this.observer && this.observer.disconnect();
    }, e.prototype.restartAnimation = function() {
      this.adapter.removeClass(pn.ANIMATION_READY_CLASS), this.adapter.forceLayout(), this.adapter.addClass(pn.ANIMATION_READY_CLASS);
    }, e.prototype.setPrimaryBarProgress = function(n) {
      var r = "scaleX(" + n + ")", i = typeof window < "u" ? qg(window, "transform") : "transform";
      this.adapter.setPrimaryBarStyle(i, r);
    }, e.prototype.setBufferBarProgress = function(n) {
      var r = n * 100 + "%";
      this.adapter.setBufferBarStyle(Mn.FLEX_BASIS, r);
    }, e.prototype.calculateAndSetDimensions = function(n) {
      var r = n * ha.PRIMARY_HALF, i = n * ha.PRIMARY_FULL, a = n * ha.SECONDARY_QUARTER, o = n * ha.SECONDARY_HALF, u = n * ha.SECONDARY_FULL;
      this.adapter.setStyle("--mdc-linear-progress-primary-half", r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-half-neg", -r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full", i + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full-neg", -i + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter", a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg", -a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half", o + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg", -o + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full", u + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg", -u + "px"), this.restartAnimation();
    }, e;
  }(wt)
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
var sr = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, nu = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, Jr = {
  ARIA_SELECTED: nu.ARIA_SELECTED,
  ARIA_SORT: nu.ARIA_SORT
}, _n;
(function(t) {
  t.ASCENDING = "ascending", t.DESCENDING = "descending", t.NONE = "none", t.OTHER = "other";
})(_n || (_n = {}));
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
var Jp = (
  /** @class */
  function(t) {
    We(e, t);
    function e(n) {
      return t.call(this, le(le({}, e.defaultAdapter), n)) || this;
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
      return vc(this, void 0, void 0, function() {
        return Xs(this, function(n) {
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
      for (var r = 0; r < this.adapter.getRowCount(); r++) {
        var i = this.adapter.getRowIdAtIndex(r), a = !1;
        i && n.indexOf(i) >= 0 && (a = !0), this.adapter.setRowCheckboxCheckedAtIndex(r, a), this.selectRowAtIndex(r, a);
      }
      this.setHeaderRowCheckboxState();
    }, e.prototype.getRowIds = function() {
      for (var n = [], r = 0; r < this.adapter.getRowCount(); r++)
        n.push(this.adapter.getRowIdAtIndex(r));
      return n;
    }, e.prototype.getSelectedRowIds = function() {
      for (var n = [], r = 0; r < this.adapter.getRowCount(); r++)
        this.adapter.isCheckboxAtRowIndexChecked(r) && n.push(this.adapter.getRowIdAtIndex(r));
      return n;
    }, e.prototype.handleHeaderRowCheckboxChange = function() {
      for (var n = this.adapter.isHeaderRowCheckboxChecked(), r = 0; r < this.adapter.getRowCount(); r++)
        this.adapter.setRowCheckboxCheckedAtIndex(r, n), this.selectRowAtIndex(r, n);
      n ? this.adapter.notifySelectedAll() : this.adapter.notifyUnselectedAll();
    }, e.prototype.handleRowCheckboxChange = function(n) {
      var r = this.adapter.getRowIndexByChildElement(n.target);
      if (r !== -1) {
        var i = this.adapter.isCheckboxAtRowIndexChecked(r);
        this.selectRowAtIndex(r, i), this.setHeaderRowCheckboxState();
        var a = this.adapter.getRowIdAtIndex(r);
        this.adapter.notifyRowSelectionChanged({ rowId: a, rowIndex: r, selected: i });
      }
    }, e.prototype.handleSortAction = function(n) {
      for (var r = n.columnId, i = n.columnIndex, a = n.headerCell, o = 0; o < this.adapter.getHeaderCellCount(); o++)
        o !== i && (this.adapter.removeClassNameByHeaderCellIndex(o, sr.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(o, sr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(o, Jr.ARIA_SORT, _n.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(o, _n.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, sr.HEADER_CELL_SORTED);
      var u = this.adapter.getAttributeByHeaderCellIndex(i, Jr.ARIA_SORT), l = _n.NONE;
      u === _n.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, sr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, Jr.ARIA_SORT, _n.DESCENDING), l = _n.DESCENDING) : u === _n.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, sr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, Jr.ARIA_SORT, _n.ASCENDING), l = _n.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, Jr.ARIA_SORT, _n.ASCENDING), l = _n.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, l), this.adapter.notifySortAction({
        columnId: r,
        columnIndex: i,
        headerCell: a,
        sortValue: l
      });
    }, e.prototype.handleRowClick = function(n) {
      var r = n.rowId, i = n.row;
      this.adapter.notifyRowClick({
        rowId: r,
        row: i
      });
    }, e.prototype.showProgress = function() {
      var n = this.adapter.getTableHeaderHeight(), r = this.adapter.getTableContainerHeight() - n, i = n;
      this.adapter.setProgressIndicatorStyles({
        height: r + "px",
        top: i + "px"
      }), this.adapter.addClass(sr.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(sr.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(n, r) {
      r ? (this.adapter.addClassAtRowIndex(n, sr.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, Jr.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(n, sr.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, Jr.ARIA_SELECTED, "false"));
    }, e;
  }(wt)
), $p = /* @__PURE__ */ be('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), eb = /* @__PURE__ */ be("<div><div><table><!></table></div> <!> <!></div>");
function tb(t, e) {
  xe(e, !0);
  const n = () => Yn(j, "$progressClosed", r), [r, i] = yr(), { closest: a } = Ua;
  let o = p(e, "use", 19, () => []), u = p(e, "class", 3, ""), l = p(e, "stickyHeader", 3, !1), c = p(e, "sortable", 3, !1), d = p(e, "sort", 15, null), v = p(e, "sortDirection", 15, "ascending"), f = p(e, "sortAscendingAriaLabel", 3, "sorted, ascending"), m = p(e, "sortDescendingAriaLabel", 3, "sorted, descending"), h = p(e, "container$use", 19, () => []), g = p(e, "container$class", 3, ""), b = p(e, "table$use", 19, () => []), y = p(e, "table$class", 3, ""), S = /* @__PURE__ */ Xe(e, [
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
  ]), I, _ = /* @__PURE__ */ ve(void 0), E, x = /* @__PURE__ */ ve(void 0), w = /* @__PURE__ */ ve(void 0), C = ue({}), A = /* @__PURE__ */ ve(ue({ height: "auto", top: "initial" })), M = he("SMUI:addLayoutListener"), G, k = !1, j = tn(!1), O = tn(d());
  Ce(() => {
    hi(O, d());
  });
  let T = tn(v());
  Ce(() => {
    hi(T, v());
  }), ae("SMUI:checkbox:context", "data-table"), ae("SMUI:linear-progress:context", "data-table"), ae("SMUI:linear-progress:closed", j), ae("SMUI:data-table:sortable", c()), ae("SMUI:data-table:sort", O), ae("SMUI:data-table:sortDirection", T), ae("SMUI:data-table:sortAscendingAriaLabel", f()), ae("SMUI:data-table:sortDescendingAriaLabel", m()), M && (G = M(_e));
  let H;
  Ce(() => {
    e.progress && s(_) && H !== n() && (H = n(), n() ? s(_).hideProgress() : s(_).showProgress());
  }), ae("SMUI:checkbox:mount", () => {
    s(_) && k && s(_).layout();
  }), ae("SMUI:data-table:header:mount", (N) => {
    K(x, N, !0);
  }), ae("SMUI:data-table:header:unmount", () => {
    K(x, void 0);
  }), ae("SMUI:data-table:body:mount", (N) => {
    K(w, N, !0);
  }), ae("SMUI:data-table:body:unmount", () => {
    K(w, void 0);
  }), it(() => (K(
    _,
    new Jp({
      addClass: z,
      removeClass: J,
      getHeaderCellElements: () => {
        var N;
        return ((N = s(x)) == null ? void 0 : N.cells.map((X) => X.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var N;
        return ((N = s(x)) == null ? void 0 : N.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (N, X) => {
        var de;
        return ((de = s(x)) == null ? void 0 : de.orderedCells[N].getAttr(X)) ?? null;
      },
      setAttributeByHeaderCellIndex: (N, X, de) => {
        var Re;
        (Re = s(x)) == null || Re.orderedCells[N].addAttr(X, de);
      },
      setClassNameByHeaderCellIndex: (N, X) => {
        var de;
        (de = s(x)) == null || de.orderedCells[N].addClass(X);
      },
      removeClassNameByHeaderCellIndex: (N, X) => {
        var de;
        (de = s(x)) == null || de.orderedCells[N].removeClass(X);
      },
      notifySortAction: (N) => {
        d(N.columnId), v(N.sortValue), Je(F(), "SMUIDataTableSorted", N);
      },
      getTableContainerHeight: () => E.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const N = F().querySelector(".mdc-data-table__header-row");
        if (!N)
          throw new Error("MDCDataTable: Table header element not found.");
        return N.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (N) => {
        K(A, N, !0);
      },
      addClassAtRowIndex: (N, X) => {
        var de;
        (de = s(w)) == null || de.orderedRows[N].addClass(X);
      },
      getRowCount: () => {
        var N;
        return ((N = s(w)) == null ? void 0 : N.rows.length) ?? 0;
      },
      getRowElements: () => {
        var N;
        return ((N = s(w)) == null ? void 0 : N.rows.map((X) => X.element)) ?? [];
      },
      getRowIdAtIndex: (N) => {
        var X;
        return ((X = s(w)) == null ? void 0 : X.orderedRows[N].rowId) ?? null;
      },
      getRowIndexByChildElement: (N) => {
        var X;
        return ((X = s(w)) == null ? void 0 : X.orderedRows.map((de) => de.element).indexOf(a(N, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var N;
        return ((N = s(w)) == null ? void 0 : N.rows.filter((X) => X.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (N) => {
        var de;
        const X = (de = s(w)) == null ? void 0 : de.orderedRows[N].checkbox;
        return X ? X.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var X;
        const N = (X = s(x)) == null ? void 0 : X.checkbox;
        return N ? N.checked : !1;
      },
      isRowsSelectable: () => !!F().querySelector(".mdc-data-table__row-checkbox") || !!F().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (N) => {
        var de;
        const X = (de = s(w)) == null ? void 0 : de.orderedRows[N.rowIndex];
        X && Je(F(), "SMUIDataTableSelectionChanged", {
          row: X.element,
          rowId: X.rowId,
          rowIndex: N.rowIndex,
          selected: N.selected
        });
      },
      notifySelectedAll: () => {
        P(!1), Je(F(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        P(!1), Je(F(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (N) => Je(F(), "SMUIDataTableClickRow", N),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (N, X) => {
        var de;
        (de = s(w)) == null || de.orderedRows[N].removeClass(X);
      },
      setAttributeAtRowIndex: (N, X, de) => {
        var Re;
        (Re = s(w)) == null || Re.orderedRows[N].addAttr(X, de);
      },
      setHeaderRowCheckboxChecked: (N) => {
        var de;
        const X = (de = s(x)) == null ? void 0 : de.checkbox;
        X && (X.checked = N);
      },
      setHeaderRowCheckboxIndeterminate: P,
      setRowCheckboxCheckedAtIndex: (N, X) => {
        var Re;
        const de = (Re = s(w)) == null ? void 0 : Re.orderedRows[N].checkbox;
        de && (de.checked = X);
      },
      setSortStatusLabelByHeaderCellIndex: (N, X) => {
      }
    }),
    !0
  ), s(_).init(), s(_).layout(), k = !0, () => {
    var N;
    (N = s(_)) == null || N.destroy();
  })), Ln(() => {
    G && G();
  });
  function U(N) {
    s(_) && s(_).handleRowCheckboxChange(N);
  }
  function z(N) {
    C[N] || (C[N] = !0);
  }
  function J(N) {
    (!(N in C) || C[N]) && (C[N] = !1);
  }
  function P(N) {
    var de;
    const X = (de = s(x)) == null ? void 0 : de.checkbox;
    X && (X.indeterminate = N);
  }
  function R(N) {
    if (!s(_) || !N.detail.target)
      return;
    const X = a(N.detail.target, ".mdc-data-table__header-cell--with-sort");
    X && Ae(X);
  }
  function W(N) {
    if (!s(_) || !N.detail.target)
      return;
    const X = a(N.detail.target, ".mdc-data-table__row");
    X && s(_) && s(_).handleRowClick({ rowId: N.detail.rowId, row: X });
  }
  function Ae(N) {
    var Fe, dt;
    const X = ((Fe = s(x)) == null ? void 0 : Fe.orderedCells) ?? [], de = X.map((bt) => bt.element).indexOf(N);
    if (de === -1)
      return;
    const Re = X[de].columnId ?? null;
    (dt = s(_)) == null || dt.handleSortAction({ columnId: Re, columnIndex: de, headerCell: N });
  }
  function _e() {
    var N;
    return (N = s(_)) == null ? void 0 : N.layout();
  }
  function F() {
    return I;
  }
  var V = { layout: _e, getElement: F }, B = eb(), ee = (N) => {
    var X;
    s(_) && s(_).handleHeaderRowCheckboxChange(), (X = e.onSMUIDataTableHeaderCheckboxChange) == null || X.call(e, N);
  }, Z = (N) => {
    var X;
    R(N), (X = e.onSMUIDataTableHeaderClick) == null || X.call(e, N);
  }, ce = (N) => {
    var X;
    W(N), (X = e.onSMUIDataTableRowClick) == null || X.call(e, N);
  }, we = (N) => {
    var X;
    U(N), (X = e.onSMUIDataTableBodyCheckboxChange) == null || X.call(e, N);
  };
  ke(
    B,
    (N, X) => ({
      class: N,
      ...X,
      onSMUIDataTableHeaderCheckboxChange: ee,
      onSMUIDataTableHeaderClick: Z,
      onSMUIDataTableRowClick: ce,
      onSMUIDataTableBodyCheckboxChange: we
    }),
    [
      () => Pe({
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": l(),
        ...C,
        [u()]: !0
      }),
      () => Jn(S, ["container$", "table$"])
    ]
  );
  var $ = me(B);
  ke($, (N, X) => ({ class: N, ...X }), [
    () => Pe({
      "mdc-data-table__table-container": !0,
      [g()]: !0
    }),
    () => rt(S, "container$")
  ]);
  var ie = me($);
  ke(ie, (N, X) => ({ class: N, ...X }), [
    () => Pe({ "mdc-data-table__table": !0, [y()]: !0 }),
    () => rt(S, "table$")
  ]);
  var Me = me(ie);
  Se(Me, () => e.children ?? pe), De(ie, (N, X) => q == null ? void 0 : q(N, X), b), Ee($, (N) => E = N, () => E), De($, (N, X) => q == null ? void 0 : q(N, X), h);
  var Le = Ie($, 2);
  {
    var je = (N) => {
      var X = $p(), de = Ie(me(X), 2);
      Se(de, () => e.progress ?? pe), Oe((Re) => kt(X, Re), [
        () => Object.entries(s(A)).map(([Re, Fe]) => `${Re}: ${Fe};`).join(" ")
      ]), L(N, X);
    };
    oe(Le, (N) => {
      e.progress && N(je);
    });
  }
  var Ke = Ie(Le, 2);
  Se(Ke, () => e.paginate ?? pe), Ee(B, (N) => I = N, () => I), De(B, (N, X) => q == null ? void 0 : q(N, X), o), L(t, B);
  var Ue = Te(V);
  return i(), Ue;
}
var nb = /* @__PURE__ */ be("<thead><!></thead>");
function rb(t, e) {
  xe(e, !0);
  let n = p(e, "use", 19, () => []), r = /* @__PURE__ */ Xe(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i, a = /* @__PURE__ */ ve(void 0), o = [];
  const u = /* @__PURE__ */ new WeakMap();
  ae("SMUI:data-table:row:header", !0);
  const l = he("SMUI:checkbox:mount");
  ae("SMUI:checkbox:mount", (y) => {
    K(a, y, !0), l && l(y);
  });
  const c = he("SMUI:checkbox:unmount");
  ae("SMUI:checkbox:unmount", (y) => {
    K(a, void 0), c && c(y);
  }), ae("SMUI:data-table:cell:mount", (y) => {
    o.push(y), u.set(y.element, y);
  }), ae("SMUI:data-table:cell:unmount", (y) => {
    const S = o.findIndex((I) => I === y);
    S !== -1 && o.splice(S, 1), u.delete(y.element);
  });
  const d = he("SMUI:data-table:header:mount"), v = he("SMUI:data-table:header:unmount");
  it(() => {
    const y = {
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
    return d && d(y), () => {
      v && v(y);
    };
  });
  function f() {
    return [
      ...m().querySelectorAll(".mdc-data-table__header-cell")
    ].map((y) => u.get(y)).filter((y) => y && y._smui_data_table_header_cell_accessor);
  }
  function m() {
    return i;
  }
  var h = { getElement: m }, g = nb();
  ke(g, () => ({ ...r }));
  var b = me(g);
  return Se(b, () => e.children ?? pe), Ee(g, (y) => i = y, () => i), De(g, (y, S) => q == null ? void 0 : q(y, S), n), L(t, g), Te(h);
}
var ib = /* @__PURE__ */ be("<tbody><!></tbody>");
function ab(t, e) {
  xe(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = /* @__PURE__ */ Xe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "children"
  ]), a, o = [];
  const u = /* @__PURE__ */ new WeakMap();
  ae("SMUI:data-table:row:header", !1), ae("SMUI:data-table:row:mount", (g) => {
    o.push(g), u.set(g.element, g);
  }), ae("SMUI:data-table:row:unmount", (g) => {
    const b = o.findIndex((y) => y === g);
    b !== -1 && o.splice(b, 1), u.delete(g.element);
  });
  const l = he("SMUI:data-table:body:mount"), c = he("SMUI:data-table:body:unmount");
  it(() => {
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
    return [...v().querySelectorAll(".mdc-data-table__row")].map((g) => u.get(g)).filter((g) => g && g._smui_data_table_row_accessor);
  }
  function v() {
    return a;
  }
  var f = { getElement: v }, m = ib();
  ke(m, (g) => ({ class: g, ...i }), [
    () => Pe({ "mdc-data-table__content": !0, [r()]: !0 })
  ]);
  var h = me(m);
  return Se(h, () => e.children ?? pe), Ee(m, (g) => a = g, () => a), De(m, (g, b) => q == null ? void 0 : q(g, b), n), L(t, m), Te(f);
}
let ob = 0;
var sb = /* @__PURE__ */ be("<tr><!></tr>");
function Ya(t, e) {
  xe(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "rowId", 19, () => "SMUI-data-table-row-" + ob++), a = /* @__PURE__ */ Xe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "rowId",
    "children"
  ]), o, u = /* @__PURE__ */ ve(void 0), l = ue({}), c = ue({}), d = he("SMUI:data-table:row:header");
  const v = he("SMUI:checkbox:mount");
  ae("SMUI:checkbox:mount", (M) => {
    K(u, M, !0), v && v(M);
  });
  const f = he("SMUI:checkbox:unmount");
  ae("SMUI:checkbox:unmount", (M) => {
    K(u, void 0), f && f(M);
  });
  const m = he("SMUI:data-table:row:mount"), h = he("SMUI:data-table:row:unmount");
  it(() => {
    const M = d ? {
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
      removeClass: b,
      getAttr: y,
      addAttr: S
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return E();
      },
      get checkbox() {
        return s(u);
      },
      get rowId() {
        return i();
      },
      get selected() {
        return (s(u) && s(u).checked) ?? !1;
      },
      addClass: g,
      removeClass: b,
      getAttr: y,
      addAttr: S
    };
    return m && m(M), () => {
      h && h(M);
    };
  });
  function g(M) {
    l[M] || (l[M] = !0);
  }
  function b(M) {
    (!(M in l) || l[M]) && (l[M] = !1);
  }
  function y(M) {
    return M in c ? c[M] ?? null : E().getAttribute(M);
  }
  function S(M, G) {
    c[M] !== G && (c[M] = G);
  }
  function I(M) {
    Je(E(), "SMUIDataTableHeaderClick", M);
  }
  function _(M) {
    Je(E(), "SMUIDataTableRowClick", { rowId: i(), target: M.target });
  }
  function E() {
    return o;
  }
  var x = { getElement: E }, w = sb(), C = (M) => {
    var G;
    d ? I(M) : _(M), (G = e.onclick) == null || G.call(e, M);
  };
  ke(
    w,
    (M) => ({
      class: M,
      "aria-selected": s(u) ? s(u).checked ? "true" : "false" : void 0,
      ...c,
      ...a,
      onclick: C
    }),
    [
      () => Pe({
        "mdc-data-table__header-row": d,
        "mdc-data-table__row": !d,
        "mdc-data-table__row--selected": !d && s(u) && s(u).checked,
        ...l,
        [r()]: !0
      })
    ]
  );
  var A = me(w);
  return Se(A, () => e.children ?? pe), Ee(w, (M) => o = M, () => o), De(w, (M, G) => q == null ? void 0 : q(M, G), n), L(t, w), Te(x);
}
let lb = 0;
var ub = /* @__PURE__ */ be('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), cb = /* @__PURE__ */ be("<th><!></th>"), db = /* @__PURE__ */ be("<td><!></td>");
function va(t, e) {
  xe(e, !0);
  const n = () => Yn(y, "$sort", i), r = () => Yn(S, "$sortDirection", i), [i, a] = yr();
  let o = he("SMUI:data-table:row:header"), u = p(e, "use", 19, () => []), l = p(e, "class", 3, ""), c = p(e, "numeric", 3, !1), d = p(e, "checkbox", 3, !1), v = p(e, "columnId", 19, () => o ? "SMUI-data-table-column-" + lb++ : "SMUI-data-table-unused"), f = p(e, "sortable", 19, () => he("SMUI:data-table:sortable")), m = /* @__PURE__ */ Xe(e, [
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
  ]), h, g = ue({}), b = ue({}), y = he("SMUI:data-table:sort"), S = he("SMUI:data-table:sortDirection"), I = he("SMUI:data-table:sortAscendingAriaLabel"), _ = he("SMUI:data-table:sortDescendingAriaLabel");
  f() && (ae("SMUI:label:context", "data-table:sortable-header-cell"), ae("SMUI:icon-button:context", "data-table:sortable-header-cell"), ae("SMUI:icon-button:aria-describedby", v() + "-status-label"));
  const E = he("SMUI:data-table:cell:mount"), x = he("SMUI:data-table:cell:unmount");
  it(() => {
    const P = o ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return j();
      },
      get columnId() {
        return v();
      },
      addClass: w,
      removeClass: C,
      getAttr: A,
      addAttr: M
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return j();
      },
      get columnId() {
      },
      addClass: w,
      removeClass: C,
      getAttr: A,
      addAttr: M
    };
    return E && E(P), () => {
      x && x(P);
    };
  });
  function w(P) {
    g[P] || (g[P] = !0);
  }
  function C(P) {
    (!(P in g) || g[P]) && (g[P] = !1);
  }
  function A(P) {
    return P in b ? b[P] ?? null : j().getAttribute(P);
  }
  function M(P, R) {
    b[P] !== R && (b[P] = R);
  }
  function G(P) {
    Je(j(), "SMUIDataTableHeaderCheckboxChange", P);
  }
  function k(P) {
    Je(j(), "SMUIDataTableBodyCheckboxChange", P);
  }
  function j() {
    return h;
  }
  var O = { getElement: j }, T = re(), H = Q(T);
  {
    var U = (P) => {
      var R = cb(), W = (V) => {
        var B;
        d() && G(V), (B = e.onchange) == null || B.call(e, V);
      };
      ke(
        R,
        (V) => ({
          class: V,
          role: "columnheader",
          scope: "col",
          "data-column-id": v(),
          "aria-sort": f() ? n() === v() ? r() : "none" : void 0,
          ...b,
          ...m,
          onchange: W
        }),
        [
          () => Pe({
            "mdc-data-table__header-cell": !0,
            "mdc-data-table__header-cell--numeric": c(),
            "mdc-data-table__header-cell--checkbox": d(),
            "mdc-data-table__header-cell--with-sort": f(),
            "mdc-data-table__header-cell--sorted": f() && n() === v(),
            ...g,
            [l()]: !0
          })
        ]
      );
      var Ae = me(R);
      {
        var _e = (V) => {
          var B = ub(), ee = me(B);
          Se(ee, () => e.children ?? pe);
          var Z = Ie(ee, 2), ce = me(Z);
          Oe(() => {
            Pr(Z, "id", `${v() ?? ""}-status-label`), st(ce, n() === v() ? r() === "ascending" ? I : _ : "");
          }), L(V, B);
        }, F = (V) => {
          var B = re(), ee = Q(B);
          Se(ee, () => e.children ?? pe), L(V, B);
        };
        oe(Ae, (V) => {
          f() ? V(_e) : V(F, !1);
        });
      }
      Ee(R, (V) => h = V, () => h), De(R, (V, B) => q == null ? void 0 : q(V, B), u), L(P, R);
    }, z = (P) => {
      var R = db(), W = (_e) => {
        var F;
        d() && k(_e), (F = e.onchange) == null || F.call(e, _e);
      };
      ke(
        R,
        (_e) => ({
          class: _e,
          ...b,
          ...m,
          onchange: W
        }),
        [
          () => Pe({
            "mdc-data-table__cell": !0,
            "mdc-data-table__cell--numeric": c(),
            "mdc-data-table__cell--checkbox": d(),
            ...g,
            [l()]: !0
          })
        ]
      );
      var Ae = me(R);
      Se(Ae, () => e.children ?? pe), Ee(R, (_e) => h = _e, () => h), De(R, (_e, F) => q == null ? void 0 : q(_e, F), u), L(P, R);
    };
    oe(H, (P) => {
      o ? P(U) : P(z, !1);
    });
  }
  L(t, T);
  var J = Te(O);
  return a(), J;
}
var fb = /* @__PURE__ */ be('<div><div class="mdc-linear-progress__buffer"><div class="mdc-linear-progress__buffer-bar"></div> <div class="mdc-linear-progress__buffer-dots"></div></div> <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"><span class="mdc-linear-progress__bar-inner"></span></div> <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span class="mdc-linear-progress__bar-inner"></span></div></div>');
function hb(t, e) {
  xe(e, !0);
  const [n, r] = yr();
  let i = p(e, "use", 19, () => []), a = p(e, "class", 3, ""), o = p(e, "style", 3, ""), u = p(e, "indeterminate", 3, !1), l = p(e, "closed", 3, !1), c = p(e, "progress", 3, 0), d = p(e, "buffer", 3, void 0), v = /* @__PURE__ */ Xe(e, [
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
  ]), f, m = /* @__PURE__ */ ve(void 0), h = ue({}), g = ue({}), b = ue({}), y = ue({}), S = ue({}), I = he("SMUI:linear-progress:context"), _ = he("SMUI:linear-progress:closed");
  Ce(() => {
    _ && hi(_, l());
  }), Ce(() => {
    s(m) && s(m).isDeterminate() !== !u() && s(m).setDeterminate(!u());
  }), Ce(() => {
    s(m) && s(m).getProgress() !== c() && s(m).setProgress(c());
  }), Ce(() => {
    s(m) && (d() == null ? s(m).setBuffer(1) : s(m).setBuffer(d()));
  }), Ce(() => {
    s(m) && (l() ? s(m).close() : s(m).open());
  }), it(() => (K(
    m,
    new Qp({
      addClass: x,
      forceLayout: () => {
        j().getBoundingClientRect();
      },
      setBufferBarStyle: G,
      setPrimaryBarStyle: k,
      hasClass: E,
      removeAttribute: A,
      removeClass: w,
      setAttribute: C,
      setStyle: M,
      attachResizeObserver: (R) => {
        const W = window.ResizeObserver;
        if (W) {
          const Ae = new W(R);
          return Ae.observe(j()), Ae;
        }
        return null;
      },
      getWidth: () => j().offsetWidth
    }),
    !0
  ), s(m).init(), () => {
    var R;
    (R = s(m)) == null || R.destroy();
  }));
  function E(R) {
    return R in h ? h[R] : j().classList.contains(R);
  }
  function x(R) {
    h[R] || (h[R] = !0);
  }
  function w(R) {
    (!(R in h) || h[R]) && (h[R] = !1);
  }
  function C(R, W) {
    g[R] !== W && (g[R] = W);
  }
  function A(R) {
    (!(R in g) || g[R] != null) && (g[R] = void 0);
  }
  function M(R, W) {
    b[R] != W && (W === "" || W == null ? delete b[R] : b[R] = W);
  }
  function G(R, W) {
    y[R] != W && (W === "" || W == null ? delete y[R] : y[R] = W);
  }
  function k(R, W) {
    S[R] != W && (W === "" || W == null ? delete S[R] : S[R] = W);
  }
  function j() {
    return f;
  }
  var O = { getElement: j }, T = fb(), H = (R) => {
    var W;
    s(m) && s(m).handleTransitionEnd(), (W = e.ontransitionend) == null || W.call(e, R);
  };
  ke(
    T,
    (R, W) => ({
      class: R,
      style: W,
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 1,
      "aria-valuenow": u() ? void 0 : c(),
      ...g,
      ...v,
      ontransitionend: H
    }),
    [
      () => Pe({
        "mdc-linear-progress": !0,
        "mdc-linear-progress--indeterminate": u(),
        "mdc-linear-progress--closed": l(),
        "mdc-data-table__linear-progress": I === "data-table",
        ...h,
        [a()]: !0
      }),
      () => Object.entries(b).map(([R, W]) => `${R}: ${W};`).concat([o()]).join(" ")
    ]
  );
  var U = me(T), z = me(U), J = Ie(U, 2);
  Ee(T, (R) => f = R, () => f), De(T, (R, W) => q == null ? void 0 : q(R, W), i), Oe(
    (R, W) => {
      kt(z, R), kt(J, W);
    },
    [
      () => Object.entries(y).map(([R, W]) => `${R}: ${W};`).join(" "),
      () => Object.entries(S).map(([R, W]) => `${R}: ${W};`).join(" ")
    ]
  ), L(t, T);
  var P = Te(O);
  return r(), P;
}
hn(["click"]);
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
var vb = {
  ROOT: "mdc-form-field"
}, mb = {
  LABEL_SELECTOR: ".mdc-form-field > label"
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
var gb = (
  /** @class */
  function(t) {
    We(e, t);
    function e(n) {
      var r = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return r.click = function() {
        r.handleClick();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return vb;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return mb;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          activateInputRipple: function() {
          },
          deactivateInputRipple: function() {
          },
          deregisterInteractionHandler: function() {
          },
          registerInteractionHandler: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      this.adapter.registerInteractionHandler("click", this.click);
    }, e.prototype.destroy = function() {
      this.adapter.deregisterInteractionHandler("click", this.click);
    }, e.prototype.handleClick = function() {
      var n = this;
      this.adapter.activateInputRipple(), requestAnimationFrame(function() {
        n.adapter.deactivateInputRipple();
      });
    }, e;
  }(wt)
);
let pb = 0;
var bb = /* @__PURE__ */ be("<div><!> <label><!></label></div>");
function _b(t, e) {
  xe(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "align", 3, "start"), a = p(e, "noWrap", 3, !1), o = p(e, "inputId", 19, () => "SMUI-form-field-" + pb++), u = p(e, "label$use", 19, () => []), l = /* @__PURE__ */ Xe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "align",
    "noWrap",
    "inputId",
    "label$use",
    "children",
    "label"
  ]), c, d = /* @__PURE__ */ ve(void 0), v = new ta(), f, m = /* @__PURE__ */ ve(void 0);
  ae("SMUI:generic:input:props", { id: o() }), ae("SMUI:generic:input:mount", (_) => {
    K(m, _, !0);
  }), ae("SMUI:generic:input:unmount", () => {
    K(m, void 0);
  }), it(() => (K(
    d,
    new gb({
      activateInputRipple: () => {
        s(m) && s(m).activateRipple();
      },
      deactivateInputRipple: () => {
        s(m) && s(m).deactivateRipple();
      },
      deregisterInteractionHandler: (_, E) => v.off(f, _, E),
      registerInteractionHandler: (_, E) => v.on(f, _, E)
    }),
    !0
  ), s(d).init(), () => {
    var _;
    (_ = s(d)) == null || _.destroy(), v.clear();
  }));
  function h() {
    return c;
  }
  var g = { getElement: h }, b = bb();
  ke(b, (_, E) => ({ class: _, ...E }), [
    () => Pe({
      "mdc-form-field": !0,
      "mdc-form-field--align-end": i() === "end",
      "mdc-form-field--nowrap": a(),
      [r()]: !0
    }),
    () => Jn(l, ["label$"])
  ]);
  var y = me(b);
  Se(y, () => e.children ?? pe);
  var S = Ie(y, 2);
  ke(S, (_) => ({ for: o(), ..._ }), [() => rt(l, "label$")]);
  var I = me(S);
  return Se(I, () => e.label ?? pe), Ee(S, (_) => f = _, () => f), De(S, (_, E) => q == null ? void 0 : q(_, E), u), Ee(b, (_) => c = _, () => c), De(b, (_, E) => q == null ? void 0 : q(_, E), n), L(t, b), Te(g);
}
hn(["click"]);
function Ts(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
var yb = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
Ts({}, yb.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
var Za, ru = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
};
Za = {}, Ts(Za, ru.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), Ts(Za, ru.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list");
function Ib(t) {
  return t * t * t;
}
function Kc(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function Eb(t, { from: e, to: n }, r = {}) {
  var { delay: i = 0, duration: a = (x) => Math.sqrt(x) * 120, easing: o = Kc } = r, u = getComputedStyle(t), l = u.transform === "none" ? "" : u.transform, [c, d] = u.transformOrigin.split(" ").map(parseFloat);
  c /= t.clientWidth, d /= t.clientHeight;
  var v = Sb(t), f = t.clientWidth / n.width / v, m = t.clientHeight / n.height / v, h = e.left + e.width * c, g = e.top + e.height * d, b = n.left + n.width * c, y = n.top + n.height * d, S = (h - b) * f, I = (g - y) * m, _ = e.width / n.width, E = e.height / n.height;
  return {
    delay: i,
    duration: typeof a == "function" ? a(Math.sqrt(S * S + I * I)) : a,
    easing: o,
    css: (x, w) => {
      var C = w * S, A = w * I, M = x + w * _, G = x + w * E;
      return `transform: ${l} translate(${C}px, ${A}px) scale(${M}, ${G});`;
    }
  };
}
function Sb(t) {
  if ("currentCSSZoom" in t)
    return (
      /** @type {number} */
      t.currentCSSZoom
    );
  for (var e = t, n = 1; e !== null; )
    n *= +getComputedStyle(e).zoom, e = /** @type {Element | null} */
    e.parentElement;
  return n;
}
function Ab(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function iu(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
function yo(t, { delay: e = 0, duration: n = 400, easing: r = Ab, x: i = 0, y: a = 0, opacity: o = 0 } = {}) {
  const u = getComputedStyle(t), l = +u.opacity, c = u.transform === "none" ? "" : u.transform, d = l * (1 - o), [v, f] = iu(i), [m, h] = iu(a);
  return {
    delay: e,
    duration: n,
    easing: r,
    css: (g, b) => `
			transform: ${c} translate(${(1 - g) * v}${f}, ${(1 - g) * m}${h});
			opacity: ${l - d * b}`
  };
}
hn([
  "click",
  "keydown",
  "pointerdown",
  "pointerup",
  "pointermove"
]);
function Cb(t, e) {
  var n;
  (n = e()) == null || n();
}
var xb = /* @__PURE__ */ be('<div class="detail svelte-4xu36c"> </div>'), Tb = /* @__PURE__ */ be('<div class="toast-card svelte-4xu36c"><div class="icon svelte-4xu36c"><!></div> <div class="content svelte-4xu36c"><div class="summary svelte-4xu36c"> </div> <!></div> <button class="close svelte-4xu36c"><!></button></div>');
function wb(t, e) {
  xe(e, !0);
  let n = p(e, "onClose", 3, () => {
  });
  const r = {
    success: "check_circle",
    error: "error",
    info: "info",
    warn: "warning"
  }, i = {
    success: "var(--oscd-status-success, #4CAF50)",
    error: "var(--oscd-status-error, #F44336)",
    info: "var(--oscd-status-info, #2196F3)",
    warn: "var(--oscd-status-warning, #FF9800)"
  };
  var a = Tb(), o = me(a), u = me(o);
  As(u, {
    class: "material-icons",
    children: (g, b) => {
      var y = Mt();
      Oe(() => st(y, r[e.type])), L(g, y);
    },
    $$slots: { default: !0 }
  });
  var l = Ie(o, 2), c = me(l), d = me(c), v = Ie(c, 2);
  {
    var f = (g) => {
      var b = xb(), y = me(b);
      Oe(() => st(y, e.detail)), L(g, b);
    };
    oe(v, (g) => {
      e.detail && g(f);
    });
  }
  var m = Ie(l, 2);
  m.__click = [Cb, n];
  var h = me(m);
  As(h, {
    class: "material-icons",
    children: (g, b) => {
      var y = Mt("close");
      L(g, y);
    },
    $$slots: { default: !0 }
  }), Oe(() => {
    kt(a, `--color:${i[e.type] ?? ""}`), st(d, e.summary);
  }), ho(1, a, () => yo, () => ({ x: 0, y: 30, duration: 150, easing: Ib })), ho(2, a, () => yo, () => ({ x: 50, y: 0, duration: 150, easing: Kc })), L(t, a), Te();
}
hn(["click"]);
const Lb = 4e3;
function Ob() {
  let t = ue({ items: [] }), e = 0;
  const n = (i) => {
    t.items = t.items.filter((a) => a.id !== i);
  }, r = (i, a, o, u = Lb) => {
    const l = e++, c = { id: l, summary: a, detail: o, type: i };
    return t.items = [...t.items, c], setTimeout(
      () => {
        n(l);
      },
      u
    ), l;
  };
  return {
    /** readonly state for UI host */
    get toasts() {
      return t;
    },
    success: (i, a, o) => r("success", i, a, o),
    error: (i, a, o) => r("error", i, a, o),
    info: (i, a, o) => r("info", i, a, o),
    warn: (i, a, o) => r("warn", i, a, o),
    remove: n
  };
}
const Ea = Ob();
var Rb = /* @__PURE__ */ be("<div><!></div>"), Mb = /* @__PURE__ */ be('<div class="toast-host svelte-11vwiay"></div>');
function Db(t, e) {
  xe(e, !1);
  const n = Ea.toasts;
  nh();
  var r = Mb();
  Hn(r, 13, () => n.items, (i) => i.id, (i, a) => {
    var o = Rb(), u = me(o);
    wb(u, {
      get summary() {
        return s(a).summary;
      },
      get detail() {
        return s(a).detail;
      },
      get type() {
        return s(a).type;
      },
      onClose: () => Ea.remove(s(a).id)
    }), eh(o, () => Eb, null), L(i, o);
  }), L(t, r), Te();
}
var Pb = (t, e) => {
  t.stopPropagation(), e.onOpen();
}, Nb = (t, e) => {
  t.stopPropagation(), e.onRemove();
}, Hb = /* @__PURE__ */ be('<button type="button" style="all: unset; display: flex; align-items: center; justify-content: center;" class="svelte-1mybgc7"><!></button>'), Ub = /* @__PURE__ */ be('<span class="filter-badge__seperator svelte-1mybgc7">|</span> <span class="filter-badge__value svelte-1mybgc7"> </span> <span class="filter-badge__arrow-down"><!></span>', 1), kb = /* @__PURE__ */ be('<button type="button"><div class="filter-badge__icon svelte-1mybgc7"><!></div> <span class="filter-badge__label svelte-1mybgc7"> </span> <!></button>');
function Bb(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ fe(() => !!e.value);
  var r = kb();
  r.__click = [Pb, e];
  var i = me(r), a = me(i);
  {
    var o = (f) => {
      _o(f, {
        content: "Remove Filter",
        hoverDelay: 500,
        side: "top",
        children: (m, h) => {
          var g = Hb();
          g.__click = [Nb, e];
          var b = me(g);
          Xc(b, {
            svgStyles: "fill: grey; height: filt-content; width: fit-content;"
          }), L(m, g);
        },
        $$slots: { default: !0 }
      });
    }, u = (f) => {
      _o(f, {
        content: "Add Filter",
        hoverDelay: 501,
        side: "top",
        children: (m, h) => {
          Bp(m, {
            svgStyles: "fill: grey; height: filt-content; width: fit-content;"
          });
        },
        $$slots: { default: !0 }
      });
    };
    oe(a, (f) => {
      s(n) ? f(o) : f(u, !1);
    });
  }
  var l = Ie(i, 2), c = me(l), d = Ie(l, 2);
  {
    var v = (f) => {
      var m = Ub(), h = Ie(Q(m), 2), g = me(h), b = Ie(h, 2), y = me(b);
      Up(y, { svgStyles: "fill: gray;" }), Oe(() => st(g, e.value)), L(f, m);
    };
    oe(d, (f) => {
      s(n) && f(v);
    });
  }
  Oe(() => {
    Ws(r, 1, `filter-badge ${s(n) ? "filter-badge--active" : "filter-badge--inactive"}`, "svelte-1mybgc7"), st(c, e.label);
  }), L(t, r), Te();
}
hn(["click"]);
var Fb = /* @__PURE__ */ be('<div><input/> <div class="mdc-checkbox__background"><svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24"><path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg> <div class="mdc-checkbox__mixedmark"></div></div> <div class="mdc-checkbox__ripple"></div></div>');
function Vb(t, e) {
  xe(e, !0);
  let n = () => {
  };
  function r($) {
    return $ === n;
  }
  let i = p(e, "use", 19, () => []), a = p(e, "class", 3, ""), o = p(e, "style", 3, ""), u = p(e, "disabled", 15, !1), l = p(e, "touch", 3, !1), c = p(e, "indeterminate", 15, n), d = p(e, "group", 11, n), v = p(e, "checked", 15, n), f = p(e, "value", 3, null), m = p(e, "valueKey", 3, n), h = p(e, "input$use", 19, () => []), g = p(e, "input$class", 3, ""), b = /* @__PURE__ */ Xe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "disabled",
    "touch",
    "indeterminate",
    "group",
    "checked",
    "value",
    "valueKey",
    "input$use",
    "input$class"
  ]), y, S = /* @__PURE__ */ ve(void 0), I = /* @__PURE__ */ ve(void 0), _ = ue({}), E = ue({}), x = ue({}), w = /* @__PURE__ */ ve(!1), C = ue(he("SMUI:generic:input:props") ?? {}), A = /* @__PURE__ */ ve(ue(r(d()) ? r(v()) ? !1 : !!v() : d().findIndex(($) => $ === f()) !== -1)), M = he("SMUI:checkbox:context"), G = he("SMUI:data-table:row:header"), k = v(), j = r(d()) ? [] : [...d()], O = s(A);
  Ce(() => {
    let $ = !1;
    if (!r(d()))
      if (O !== s(A)) {
        const ie = d().findIndex((Me) => Me === f());
        s(A) && ie === -1 ? d().push(f()) : !s(A) && ie !== -1 && d().splice(ie, 1), $ = !0;
      } else {
        const ie = j.findIndex((Le) => Le === f()), Me = d().findIndex((Le) => Le === f());
        ie > -1 && Me === -1 ? (K(A, !1), $ = !0) : Me > -1 && ie === -1 && (K(A, !0), $ = !0);
      }
    r(v()) ? O !== s(A) && ($ = !0) : (v() !== (c() ? null : s(A)) || s(A) !== O) && (v() === k && s(A) !== O ? (v(s(A)), r(c()) || c(!1)) : K(A, !!v()), $ = !0), s(I) && (r(c()) ? s(I).indeterminate && (s(I).indeterminate = !1, $ = !0) : !c() && s(I).indeterminate ? (s(I).indeterminate = !1, $ = !0) : c() && !s(I).indeterminate && (s(I).indeterminate = !0, K(A, !1), $ = !0)), k = v(), j = r(d()) ? [] : [...d()], O = s(A), $ && s(S) && s(S).handleChange();
  });
  const T = he("SMUI:generic:input:mount"), H = he("SMUI:generic:input:unmount"), U = he("SMUI:checkbox:mount"), z = he("SMUI:checkbox:unmount");
  it(() => {
    if (s(I) == null)
      throw new Error("Checkbox is not defined.");
    s(I).indeterminate = !r(c()) && c(), K(
      S,
      new Zp({
        addClass: J,
        forceLayout: () => F().offsetWidth,
        hasNativeControl: () => !0,
        isAttachedToDOM: () => !!F().parentNode,
        isChecked: () => s(A),
        isIndeterminate: () => r(c()) ? !1 : c(),
        removeClass: P,
        removeNativeControlAttr: Ae,
        setNativeControlAttr: W,
        setNativeControlDisabled: (ie) => u(ie)
      }),
      !0
    );
    const $ = {
      _smui_checkbox_accessor: !0,
      get element() {
        return F();
      },
      get checked() {
        return s(A);
      },
      set checked(ie) {
        s(A) !== ie && K(A, ie, !0);
      },
      get indeterminate() {
        return r(c()) ? !1 : c();
      },
      set indeterminate(ie) {
        c(ie);
      },
      activateRipple() {
        u() || K(w, !0);
      },
      deactivateRipple() {
        K(w, !1);
      }
    };
    return T && T($), U && U($), s(S).init(), () => {
      var ie;
      H && H($), z && z($), (ie = s(S)) == null || ie.destroy();
    };
  });
  function J($) {
    _[$] || (_[$] = !0);
  }
  function P($) {
    (!($ in _) || _[$]) && (_[$] = !1);
  }
  function R($, ie) {
    E[$] != ie && (ie === "" || ie == null ? delete E[$] : E[$] = ie);
  }
  function W($, ie) {
    x[$] !== ie && (x[$] = ie);
  }
  function Ae($) {
    (!($ in x) || x[$] != null) && (x[$] = void 0);
  }
  function _e() {
    return C && C.id;
  }
  function F() {
    return y;
  }
  var V = { getId: _e, getElement: F }, B = Fb(), ee = ($) => {
    var ie;
    s(S) && s(S).handleAnimationEnd(), (ie = e.onanimationend) == null || ie.call(e, $);
  };
  ke(B, ($, ie, Me) => ({ class: $, style: ie, ...Me, onanimationend: ee }), [
    () => Pe({
      "mdc-checkbox": !0,
      "mdc-checkbox--disabled": u(),
      "mdc-checkbox--touch": l(),
      "mdc-data-table__header-row-checkbox": M === "data-table" && G,
      "mdc-data-table__row-checkbox": M === "data-table" && !G,
      ..._,
      [a()]: !0
    }),
    () => Object.entries(E).map(([$, ie]) => `${$}: ${ie};`).concat([o()]).join(" "),
    () => Jn(b, ["input$"])
  ]);
  var Z = me(B), ce = ($) => {
    var ie;
    Je(F(), "blur", $), (ie = e.input$onblur) == null || ie.call(e, $);
  }, we = ($) => {
    var ie;
    Je(F(), "focus", $), (ie = e.input$onfocus) == null || ie.call(e, $);
  };
  return ke(
    Z,
    ($, ie, Me, Le) => ({
      class: $,
      type: "checkbox",
      ...C,
      disabled: u(),
      value: ie,
      "data-indeterminate": Me,
      ...x,
      ...Le,
      onblur: ce,
      onfocus: we
    }),
    [
      () => Pe({ "mdc-checkbox__native-control": !0, [g()]: !0 }),
      () => r(m()) ? f() : m(),
      () => !r(c()) && c() ? "true" : void 0,
      () => rt(b, "input$")
    ],
    void 0,
    void 0,
    !0
  ), Ee(Z, ($) => K(I, $), () => s(I)), De(Z, ($, ie) => q == null ? void 0 : q($, ie), h), Br(() => th(Z, () => s(A), ($) => K(A, $))), Ee(B, ($) => y = $, () => y), De(B, ($, ie) => q == null ? void 0 : q($, ie), i), De(B, ($, ie) => Xt == null ? void 0 : Xt($, ie), () => ({
    unbounded: !0,
    addClass: J,
    removeClass: P,
    addStyle: R,
    active: s(w),
    eventTarget: s(I)
  })), L(t, B), Te(V);
}
var Gb = /* @__PURE__ */ be('<div style="display: flex; flex-direction: column;"></div>');
function jb(t, e) {
  xe(e, !0);
  let n = p(e, "data", 19, () => []), r = p(e, "values", 31, () => ue([]));
  var i = Gb();
  Hn(i, 21, n, Oi, (a, o) => {
    _b(a, {
      label: (l) => {
        var c = Mt();
        Oe(() => st(c, s(o).label)), L(l, c);
      },
      children: (l, c) => {
        Vb(l, {
          get value() {
            return s(o).value;
          },
          get group() {
            return r();
          },
          set group(d) {
            r(d);
          }
        });
      },
      $$slots: { label: !0, default: !0 }
    });
  }), L(t, i), Te();
}
var Wb = (t) => t.stopPropagation(), qb = /* @__PURE__ */ be('<div class="custom-menu svelte-58jwwf"><div class="menu-arrow svelte-58jwwf"></div> <h4 class="svelte-58jwwf"> </h4> <div class="custom-menu__content"><!></div> <!></div>'), zb = /* @__PURE__ */ be('<div class="filter-wrapper svelte-58jwwf"><!> <!></div>'), Xb = /* @__PURE__ */ be('<div class="oscd-filters svelte-58jwwf"></div>');
function Kb(t, e) {
  xe(e, !0);
  let n = p(e, "filters", 15), r = /* @__PURE__ */ ve(null), i = [], a = [];
  function o(h) {
    var g;
    if (!(h.value === void 0 || h.value === null || h.value === ""))
      switch (h.type) {
        case "text":
          return String(h.value);
        case "number":
          return String(h.value);
        case "select":
          const b = (g = h.options) == null ? void 0 : g.find((I) => I.value === h.value);
          return b ? b.label : String(h.value);
        case "multiselect":
          if (!Array.isArray(h.value) || h.value.length === 0) return;
          const y = h.value.map((I) => {
            var E;
            const _ = (E = h.options) == null ? void 0 : E.find((x) => x.value === I);
            return _ ? _.label : String(I);
          }), S = 1;
          return y.length <= S ? y.join(", ") : `${y.slice(0, S).join(", ")} +${y.length - S} more`;
        case "date":
          try {
            const I = new Date(h.value);
            return isNaN(I.getTime()) ? String(h.value) : I.toLocaleDateString();
          } catch {
            return String(h.value);
          }
        case "datetime":
          try {
            const I = new Date(h.value);
            return isNaN(I.getTime()) ? String(h.value) : new Intl.DateTimeFormat("default", {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: !1
            }).format(I);
          } catch {
            return String(h.value);
          }
        default:
          return String(h.value);
      }
  }
  function u(h) {
    switch (h.type) {
      case "text":
      case "date":
      case "datetime":
        return h.value ?? "";
      case "number":
        return h.value ?? 0;
      case "select":
        return h.value ?? null;
      case "multiselect":
        return Array.isArray(h.value) ? [...h.value] : [];
      default:
        return h.value ?? "";
    }
  }
  function l(h) {
    s(r) === h ? K(r, null) : (K(r, h, !0), a[h] = u(n()[h]));
  }
  function c() {
    K(r, null), a[s(r)] = void 0;
  }
  function d(h) {
    var g;
    n(n().map((b, y) => y === h ? { ...b, value: a[h] } : b)), (g = e.onfiltersChanged) == null || g.call(e, [...n()]), K(r, null);
  }
  function v(h) {
    var g;
    n(n().map((b, y) => y === h ? { ...b, value: void 0 } : b)), a[h] = void 0, (g = e.onfiltersChanged) == null || g.call(e, [...n()]), c();
  }
  function f(h) {
    i.some((b) => b && b.contains(h.target)) || c();
  }
  it(() => {
    document.addEventListener("click", f);
  }), Ln(() => {
    document.removeEventListener("click", f);
  }), Ce(() => {
  });
  var m = Xb();
  Hn(m, 23, n, (h) => h.key, (h, g, b) => {
    var y = zb(), S = me(y);
    {
      let E = /* @__PURE__ */ fe(() => o(s(g)));
      Bb(S, {
        get label() {
          return s(g).label;
        },
        get value() {
          return s(E);
        },
        onOpen: () => l(s(b)),
        onRemove: () => v(s(b))
      });
    }
    var I = Ie(S, 2);
    {
      var _ = (E) => {
        var x = qb();
        x.__click = [Wb];
        var w = Ie(me(x), 2), C = me(w), A = Ie(w, 2), M = me(A);
        {
          var G = (O) => {
            Cs(O, {
              get label() {
                return s(g).label;
              },
              get placeholder() {
                return s(g).placeholder;
              },
              get type() {
                return s(g).type;
              },
              style: "width: 100%;",
              get value() {
                return a[s(b)];
              },
              set value(T) {
                a[s(b)] = T;
              }
            });
          }, k = (O) => {
            var T = re(), H = Q(T);
            {
              var U = (J) => {
                {
                  let P = /* @__PURE__ */ fe(() => {
                    var R;
                    return (R = s(g)) == null ? void 0 : R.options;
                  });
                  hp(J, {
                    get label() {
                      return s(g).label;
                    },
                    get data() {
                      return s(P);
                    },
                    get value() {
                      return a[s(b)];
                    },
                    set value(R) {
                      a[s(b)] = R;
                    }
                  });
                }
              }, z = (J) => {
                var P = re(), R = Q(P);
                {
                  var W = (_e) => {
                    {
                      let F = /* @__PURE__ */ fe(() => {
                        var V;
                        return (V = s(g)) == null ? void 0 : V.options;
                      });
                      jb(_e, {
                        get data() {
                          return s(F);
                        },
                        get values() {
                          return a[s(b)];
                        },
                        set values(V) {
                          a[s(b)] = V;
                        }
                      });
                    }
                  }, Ae = (_e) => {
                    var F = re(), V = Q(F);
                    {
                      var B = (Z) => {
                        Wp(Z, {
                          get value() {
                            return a[s(b)];
                          },
                          set value(ce) {
                            a[s(b)] = ce;
                          }
                        });
                      }, ee = (Z) => {
                        var ce = re(), we = Q(ce);
                        {
                          var $ = (ie) => {
                            Xp(ie, {
                              get value() {
                                return a[s(b)];
                              },
                              set value(Me) {
                                a[s(b)] = Me;
                              }
                            });
                          };
                          oe(
                            we,
                            (ie) => {
                              s(g).type === "datetime" && ie($);
                            },
                            !0
                          );
                        }
                        L(Z, ce);
                      };
                      oe(
                        V,
                        (Z) => {
                          s(g).type === "date" ? Z(B) : Z(ee, !1);
                        },
                        !0
                      );
                    }
                    L(_e, F);
                  };
                  oe(
                    R,
                    (_e) => {
                      s(g).type === "multiselect" ? _e(W) : _e(Ae, !1);
                    },
                    !0
                  );
                }
                L(J, P);
              };
              oe(
                H,
                (J) => {
                  s(g).type === "select" ? J(U) : J(z, !1);
                },
                !0
              );
            }
            L(O, T);
          };
          oe(M, (O) => {
            s(g).type === "text" || s(g).type === "number" ? O(G) : O(k, !1);
          });
        }
        var j = Ie(A, 2);
        Vc(j, {
          variant: "unelevated",
          style: "background: var(--secondary); color: white; width: 100%;",
          onclick: () => d(s(b)),
          children: (O, T) => {
            var H = Mt("Apply");
            L(O, H);
          },
          $$slots: { default: !0 }
        }), Oe(() => st(C, `Filter by ${s(g).label ?? ""}`)), ho(2, x, () => yo, () => ({ y: 5, duration: 120 })), ho(1, x, () => yo, () => ({ y: -5, duration: 120 })), L(E, x);
      };
      oe(I, (E) => {
        s(r) === s(b) && E(_);
      });
    }
    Ee(y, (E, x) => i[x] = E, (E) => i == null ? void 0 : i[E], () => [s(b)]), L(h, y);
  }), L(t, m), Te();
}
hn(["click"]);
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
var Yc = {
  ANIMATING: "mdc-tab-scroller--animating",
  SCROLL_AREA_SCROLL: "mdc-tab-scroller__scroll-area--scroll",
  SCROLL_TEST: "mdc-tab-scroller__test"
}, Yb = {
  AREA_SELECTOR: ".mdc-tab-scroller__scroll-area",
  CONTENT_SELECTOR: ".mdc-tab-scroller__scroll-content"
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
var Qs = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e) {
      this.adapter = e;
    }
    return t;
  }()
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
var Zb = (
  /** @class */
  function(t) {
    We(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.getScrollPositionRTL = function() {
      var n = this.adapter.getScrollAreaScrollLeft(), r = this.calculateScrollEdges().right;
      return Math.round(r - n);
    }, e.prototype.scrollToRTL = function(n) {
      var r = this.calculateScrollEdges(), i = this.adapter.getScrollAreaScrollLeft(), a = this.clampScrollValue(r.right - n);
      return {
        finalScrollPosition: a,
        scrollDelta: a - i
      };
    }, e.prototype.incrementScrollRTL = function(n) {
      var r = this.adapter.getScrollAreaScrollLeft(), i = this.clampScrollValue(r - n);
      return {
        finalScrollPosition: i,
        scrollDelta: i - r
      };
    }, e.prototype.getAnimatingScrollPosition = function(n) {
      return n;
    }, e.prototype.calculateScrollEdges = function() {
      var n = this.adapter.getScrollContentOffsetWidth(), r = this.adapter.getScrollAreaOffsetWidth();
      return {
        left: 0,
        right: n - r
      };
    }, e.prototype.clampScrollValue = function(n) {
      var r = this.calculateScrollEdges();
      return Math.min(Math.max(r.left, n), r.right);
    }, e;
  }(Qs)
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
var Qb = (
  /** @class */
  function(t) {
    We(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.getScrollPositionRTL = function(n) {
      var r = this.adapter.getScrollAreaScrollLeft();
      return Math.round(n - r);
    }, e.prototype.scrollToRTL = function(n) {
      var r = this.adapter.getScrollAreaScrollLeft(), i = this.clampScrollValue(-n);
      return {
        finalScrollPosition: i,
        scrollDelta: i - r
      };
    }, e.prototype.incrementScrollRTL = function(n) {
      var r = this.adapter.getScrollAreaScrollLeft(), i = this.clampScrollValue(r - n);
      return {
        finalScrollPosition: i,
        scrollDelta: i - r
      };
    }, e.prototype.getAnimatingScrollPosition = function(n, r) {
      return n - r;
    }, e.prototype.calculateScrollEdges = function() {
      var n = this.adapter.getScrollContentOffsetWidth(), r = this.adapter.getScrollAreaOffsetWidth();
      return {
        left: r - n,
        right: 0
      };
    }, e.prototype.clampScrollValue = function(n) {
      var r = this.calculateScrollEdges();
      return Math.max(Math.min(r.right, n), r.left);
    }, e;
  }(Qs)
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
var Jb = (
  /** @class */
  function(t) {
    We(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.getScrollPositionRTL = function(n) {
      var r = this.adapter.getScrollAreaScrollLeft();
      return Math.round(r - n);
    }, e.prototype.scrollToRTL = function(n) {
      var r = this.adapter.getScrollAreaScrollLeft(), i = this.clampScrollValue(n);
      return {
        finalScrollPosition: i,
        scrollDelta: r - i
      };
    }, e.prototype.incrementScrollRTL = function(n) {
      var r = this.adapter.getScrollAreaScrollLeft(), i = this.clampScrollValue(r + n);
      return {
        finalScrollPosition: i,
        scrollDelta: r - i
      };
    }, e.prototype.getAnimatingScrollPosition = function(n, r) {
      return n + r;
    }, e.prototype.calculateScrollEdges = function() {
      var n = this.adapter.getScrollContentOffsetWidth(), r = this.adapter.getScrollAreaOffsetWidth();
      return {
        left: n - r,
        right: 0
      };
    }, e.prototype.clampScrollValue = function(n) {
      var r = this.calculateScrollEdges();
      return Math.min(Math.max(r.right, n), r.left);
    }, e;
  }(Qs)
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
var $b = (
  /** @class */
  function(t) {
    We(e, t);
    function e(n) {
      var r = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return r.isAnimating = !1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Yc;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Yb;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          eventTargetMatchesSelector: function() {
            return !1;
          },
          addClass: function() {
          },
          removeClass: function() {
          },
          addScrollAreaClass: function() {
          },
          setScrollAreaStyleProperty: function() {
          },
          setScrollContentStyleProperty: function() {
          },
          getScrollContentStyleValue: function() {
            return "";
          },
          setScrollAreaScrollLeft: function() {
          },
          getScrollAreaScrollLeft: function() {
            return 0;
          },
          getScrollContentOffsetWidth: function() {
            return 0;
          },
          getScrollAreaOffsetWidth: function() {
            return 0;
          },
          computeScrollAreaClientRect: function() {
            return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
          },
          computeScrollContentClientRect: function() {
            return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
          },
          computeHorizontalScrollbarHeight: function() {
            return 0;
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var n = this.adapter.computeHorizontalScrollbarHeight();
      this.adapter.setScrollAreaStyleProperty("margin-bottom", -n + "px"), this.adapter.addScrollAreaClass(e.cssClasses.SCROLL_AREA_SCROLL);
    }, e.prototype.getScrollPosition = function() {
      if (this.isRTL())
        return this.computeCurrentScrollPositionRTL();
      var n = this.calculateCurrentTranslateX(), r = this.adapter.getScrollAreaScrollLeft();
      return r - n;
    }, e.prototype.handleInteraction = function() {
      this.isAnimating && this.stopScrollAnimation();
    }, e.prototype.handleTransitionEnd = function(n) {
      var r = n.target;
      !this.isAnimating || !this.adapter.eventTargetMatchesSelector(r, e.strings.CONTENT_SELECTOR) || (this.isAnimating = !1, this.adapter.removeClass(e.cssClasses.ANIMATING));
    }, e.prototype.incrementScroll = function(n) {
      n !== 0 && this.animate(this.getIncrementScrollOperation(n));
    }, e.prototype.incrementScrollImmediate = function(n) {
      if (n !== 0) {
        var r = this.getIncrementScrollOperation(n);
        r.scrollDelta !== 0 && (this.stopScrollAnimation(), this.adapter.setScrollAreaScrollLeft(r.finalScrollPosition));
      }
    }, e.prototype.scrollTo = function(n) {
      if (this.isRTL()) {
        this.scrollToImplRTL(n);
        return;
      }
      this.scrollToImpl(n);
    }, e.prototype.getRTLScroller = function() {
      return this.rtlScrollerInstance || (this.rtlScrollerInstance = this.rtlScrollerFactory()), this.rtlScrollerInstance;
    }, e.prototype.calculateCurrentTranslateX = function() {
      var n = this.adapter.getScrollContentStyleValue("transform");
      if (n === "none")
        return 0;
      var r = /\((.+?)\)/.exec(n);
      if (!r)
        return 0;
      var i = r[1], a = gr(i.split(","), 6);
      a[0], a[1], a[2], a[3];
      var o = a[4];
      return a[5], parseFloat(o);
    }, e.prototype.clampScrollValue = function(n) {
      var r = this.calculateScrollEdges();
      return Math.min(Math.max(r.left, n), r.right);
    }, e.prototype.computeCurrentScrollPositionRTL = function() {
      var n = this.calculateCurrentTranslateX();
      return this.getRTLScroller().getScrollPositionRTL(n);
    }, e.prototype.calculateScrollEdges = function() {
      var n = this.adapter.getScrollContentOffsetWidth(), r = this.adapter.getScrollAreaOffsetWidth();
      return {
        left: 0,
        right: n - r
      };
    }, e.prototype.scrollToImpl = function(n) {
      var r = this.getScrollPosition(), i = this.clampScrollValue(n), a = i - r;
      this.animate({
        finalScrollPosition: i,
        scrollDelta: a
      });
    }, e.prototype.scrollToImplRTL = function(n) {
      var r = this.getRTLScroller().scrollToRTL(n);
      this.animate(r);
    }, e.prototype.getIncrementScrollOperation = function(n) {
      if (this.isRTL())
        return this.getRTLScroller().incrementScrollRTL(n);
      var r = this.getScrollPosition(), i = n + r, a = this.clampScrollValue(i), o = a - r;
      return {
        finalScrollPosition: a,
        scrollDelta: o
      };
    }, e.prototype.animate = function(n) {
      var r = this;
      n.scrollDelta !== 0 && (this.stopScrollAnimation(), this.adapter.setScrollAreaScrollLeft(n.finalScrollPosition), this.adapter.setScrollContentStyleProperty("transform", "translateX(" + n.scrollDelta + "px)"), this.adapter.computeScrollAreaClientRect(), requestAnimationFrame(function() {
        r.adapter.addClass(e.cssClasses.ANIMATING), r.adapter.setScrollContentStyleProperty("transform", "none");
      }), this.isAnimating = !0);
    }, e.prototype.stopScrollAnimation = function() {
      this.isAnimating = !1;
      var n = this.getAnimatingScrollPosition();
      this.adapter.removeClass(e.cssClasses.ANIMATING), this.adapter.setScrollContentStyleProperty("transform", "translateX(0px)"), this.adapter.setScrollAreaScrollLeft(n);
    }, e.prototype.getAnimatingScrollPosition = function() {
      var n = this.calculateCurrentTranslateX(), r = this.adapter.getScrollAreaScrollLeft();
      return this.isRTL() ? this.getRTLScroller().getAnimatingScrollPosition(r, n) : r - n;
    }, e.prototype.rtlScrollerFactory = function() {
      var n = this.adapter.getScrollAreaScrollLeft();
      this.adapter.setScrollAreaScrollLeft(n - 1);
      var r = this.adapter.getScrollAreaScrollLeft();
      if (r < 0)
        return this.adapter.setScrollAreaScrollLeft(n), new Qb(this.adapter);
      var i = this.adapter.computeScrollAreaClientRect(), a = this.adapter.computeScrollContentClientRect(), o = Math.round(a.right - i.right);
      return this.adapter.setScrollAreaScrollLeft(n), o === r ? new Jb(this.adapter) : new Zb(this.adapter);
    }, e.prototype.isRTL = function() {
      return this.adapter.getScrollContentStyleValue("direction") === "rtl";
    }, e;
  }(wt)
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
var ns;
function e_(t, e) {
  if (e === void 0 && (e = !0), e && typeof ns < "u")
    return ns;
  var n = t.createElement("div");
  n.classList.add(Yc.SCROLL_TEST), t.body.appendChild(n);
  var r = n.offsetHeight - n.clientHeight;
  return t.body.removeChild(n), e && (ns = r), r;
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
var t_ = {
  ACTIVE: "mdc-tab-indicator--active",
  FADE: "mdc-tab-indicator--fade",
  NO_TRANSITION: "mdc-tab-indicator--no-transition"
}, n_ = {
  CONTENT_SELECTOR: ".mdc-tab-indicator__content"
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
var cr = (
  /** @class */
  function(t) {
    We(e, t);
    function e(n) {
      return t.call(this, le(le({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return t_;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return n_;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          computeContentClientRect: function() {
            return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
          },
          setContentStyleProperty: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.computeContentClientRect = function() {
      return this.adapter.computeContentClientRect();
    }, e;
  }(wt)
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
var r_ = (
  /** @class */
  function(t) {
    We(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.activate = function() {
      this.adapter.addClass(cr.cssClasses.ACTIVE);
    }, e.prototype.deactivate = function() {
      this.adapter.removeClass(cr.cssClasses.ACTIVE);
    }, e;
  }(cr)
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
var au = (
  /** @class */
  function(t) {
    We(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.activate = function(n) {
      if (!n) {
        this.adapter.addClass(cr.cssClasses.ACTIVE);
        return;
      }
      var r = this.computeContentClientRect(), i = n.width / r.width, a = n.left - r.left;
      this.adapter.addClass(cr.cssClasses.NO_TRANSITION), this.adapter.setContentStyleProperty("transform", "translateX(" + a + "px) scaleX(" + i + ")"), this.computeContentClientRect(), this.adapter.removeClass(cr.cssClasses.NO_TRANSITION), this.adapter.addClass(cr.cssClasses.ACTIVE), this.adapter.setContentStyleProperty("transform", "");
    }, e.prototype.deactivate = function() {
      this.adapter.removeClass(cr.cssClasses.ACTIVE);
    }, e;
  }(cr)
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
var Qa = {
  ACTIVE: "mdc-tab--active"
}, ma = {
  ARIA_SELECTED: "aria-selected",
  CONTENT_SELECTOR: ".mdc-tab__content",
  INTERACTED_EVENT: "MDCTab:interacted",
  RIPPLE_SELECTOR: ".mdc-tab__ripple",
  TABINDEX: "tabIndex",
  TAB_INDICATOR_SELECTOR: ".mdc-tab-indicator"
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
var i_ = (
  /** @class */
  function(t) {
    We(e, t);
    function e(n) {
      var r = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return r.focusOnActivate = !0, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Qa;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return ma;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
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
          activateIndicator: function() {
          },
          deactivateIndicator: function() {
          },
          notifyInteracted: function() {
          },
          getOffsetLeft: function() {
            return 0;
          },
          getOffsetWidth: function() {
            return 0;
          },
          getContentOffsetLeft: function() {
            return 0;
          },
          getContentOffsetWidth: function() {
            return 0;
          },
          focus: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.handleClick = function() {
      this.adapter.notifyInteracted();
    }, e.prototype.isActive = function() {
      return this.adapter.hasClass(Qa.ACTIVE);
    }, e.prototype.setFocusOnActivate = function(n) {
      this.focusOnActivate = n;
    }, e.prototype.activate = function(n) {
      this.adapter.addClass(Qa.ACTIVE), this.adapter.setAttr(ma.ARIA_SELECTED, "true"), this.adapter.setAttr(ma.TABINDEX, "0"), this.adapter.activateIndicator(n), this.focusOnActivate && this.adapter.focus();
    }, e.prototype.deactivate = function() {
      this.isActive() && (this.adapter.removeClass(Qa.ACTIVE), this.adapter.setAttr(ma.ARIA_SELECTED, "false"), this.adapter.setAttr(ma.TABINDEX, "-1"), this.adapter.deactivateIndicator());
    }, e.prototype.computeDimensions = function() {
      var n = this.adapter.getOffsetWidth(), r = this.adapter.getOffsetLeft(), i = this.adapter.getContentOffsetWidth(), a = this.adapter.getContentOffsetLeft();
      return {
        contentLeft: r + a,
        contentRight: r + a + i,
        rootLeft: r,
        rootRight: r + n
      };
    }, e;
  }(wt)
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
var Tt = {
  ARROW_LEFT_KEY: "ArrowLeft",
  ARROW_RIGHT_KEY: "ArrowRight",
  END_KEY: "End",
  ENTER_KEY: "Enter",
  HOME_KEY: "Home",
  SPACE_KEY: "Space",
  TAB_ACTIVATED_EVENT: "MDCTabBar:activated",
  TAB_SCROLLER_SELECTOR: ".mdc-tab-scroller",
  TAB_SELECTOR: ".mdc-tab"
}, Un = {
  ARROW_LEFT_KEYCODE: 37,
  ARROW_RIGHT_KEYCODE: 39,
  END_KEYCODE: 35,
  ENTER_KEYCODE: 13,
  EXTRA_SCROLL_AMOUNT: 20,
  HOME_KEYCODE: 36,
  SPACE_KEYCODE: 32
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
var bi = /* @__PURE__ */ new Set();
bi.add(Tt.ARROW_LEFT_KEY);
bi.add(Tt.ARROW_RIGHT_KEY);
bi.add(Tt.END_KEY);
bi.add(Tt.HOME_KEY);
bi.add(Tt.ENTER_KEY);
bi.add(Tt.SPACE_KEY);
var _i = /* @__PURE__ */ new Map();
_i.set(Un.ARROW_LEFT_KEYCODE, Tt.ARROW_LEFT_KEY);
_i.set(Un.ARROW_RIGHT_KEYCODE, Tt.ARROW_RIGHT_KEY);
_i.set(Un.END_KEYCODE, Tt.END_KEY);
_i.set(Un.HOME_KEYCODE, Tt.HOME_KEY);
_i.set(Un.ENTER_KEYCODE, Tt.ENTER_KEY);
_i.set(Un.SPACE_KEYCODE, Tt.SPACE_KEY);
var a_ = (
  /** @class */
  function(t) {
    We(e, t);
    function e(n) {
      var r = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return r.useAutomaticActivation = !1, r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Tt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Un;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          scrollTo: function() {
          },
          incrementScroll: function() {
          },
          getScrollPosition: function() {
            return 0;
          },
          getScrollContentWidth: function() {
            return 0;
          },
          getOffsetWidth: function() {
            return 0;
          },
          isRTL: function() {
            return !1;
          },
          setActiveTab: function() {
          },
          activateTabAtIndex: function() {
          },
          deactivateTabAtIndex: function() {
          },
          focusTabAtIndex: function() {
          },
          getTabIndicatorClientRectAtIndex: function() {
            return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
          },
          getTabDimensionsAtIndex: function() {
            return { rootLeft: 0, rootRight: 0, contentLeft: 0, contentRight: 0 };
          },
          getPreviousActiveTabIndex: function() {
            return -1;
          },
          getFocusedTabIndex: function() {
            return -1;
          },
          getIndexOfTabById: function() {
            return -1;
          },
          getTabListLength: function() {
            return 0;
          },
          notifyTabActivated: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.setUseAutomaticActivation = function(n) {
      this.useAutomaticActivation = n;
    }, e.prototype.activateTab = function(n) {
      var r = this.adapter.getPreviousActiveTabIndex();
      if (!(!this.indexIsInRange(n) || n === r)) {
        var i;
        r !== -1 && (this.adapter.deactivateTabAtIndex(r), i = this.adapter.getTabIndicatorClientRectAtIndex(r)), this.adapter.activateTabAtIndex(n, i), this.scrollIntoView(n), this.adapter.notifyTabActivated(n);
      }
    }, e.prototype.handleKeyDown = function(n) {
      var r = this.getKeyFromEvent(n);
      if (r !== void 0)
        if (this.isActivationKey(r) || n.preventDefault(), this.useAutomaticActivation) {
          if (this.isActivationKey(r))
            return;
          var i = this.determineTargetFromKey(this.adapter.getPreviousActiveTabIndex(), r);
          this.adapter.setActiveTab(i), this.scrollIntoView(i);
        } else {
          var a = this.adapter.getFocusedTabIndex();
          if (this.isActivationKey(r))
            this.adapter.setActiveTab(a);
          else {
            var i = this.determineTargetFromKey(a, r);
            this.adapter.focusTabAtIndex(i), this.scrollIntoView(i);
          }
        }
    }, e.prototype.handleTabInteraction = function(n) {
      this.adapter.setActiveTab(this.adapter.getIndexOfTabById(n.detail.tabId));
    }, e.prototype.scrollIntoView = function(n) {
      if (this.indexIsInRange(n)) {
        if (n === 0) {
          this.adapter.scrollTo(0);
          return;
        }
        if (n === this.adapter.getTabListLength() - 1) {
          this.adapter.scrollTo(this.adapter.getScrollContentWidth());
          return;
        }
        if (this.isRTL()) {
          this.scrollIntoViewImplRTL(n);
          return;
        }
        this.scrollIntoViewImpl(n);
      }
    }, e.prototype.determineTargetFromKey = function(n, r) {
      var i = this.isRTL(), a = this.adapter.getTabListLength() - 1, o = r === Tt.END_KEY, u = r === Tt.ARROW_LEFT_KEY && !i || r === Tt.ARROW_RIGHT_KEY && i, l = r === Tt.ARROW_RIGHT_KEY && !i || r === Tt.ARROW_LEFT_KEY && i, c = n;
      return o ? c = a : u ? c -= 1 : l ? c += 1 : c = 0, c < 0 ? c = a : c > a && (c = 0), c;
    }, e.prototype.calculateScrollIncrement = function(n, r, i, a) {
      var o = this.adapter.getTabDimensionsAtIndex(r), u = o.contentLeft - i - a, l = o.contentRight - i, c = l - Un.EXTRA_SCROLL_AMOUNT, d = u + Un.EXTRA_SCROLL_AMOUNT;
      return r < n ? Math.min(c, 0) : Math.max(d, 0);
    }, e.prototype.calculateScrollIncrementRTL = function(n, r, i, a, o) {
      var u = this.adapter.getTabDimensionsAtIndex(r), l = o - u.contentLeft - i, c = o - u.contentRight - i - a, d = c + Un.EXTRA_SCROLL_AMOUNT, v = l - Un.EXTRA_SCROLL_AMOUNT;
      return r > n ? Math.max(d, 0) : Math.min(v, 0);
    }, e.prototype.findAdjacentTabIndexClosestToEdge = function(n, r, i, a) {
      var o = r.rootLeft - i, u = r.rootRight - i - a, l = o + u, c = o < 0 || l < 0, d = u > 0 || l > 0;
      return c ? n - 1 : d ? n + 1 : -1;
    }, e.prototype.findAdjacentTabIndexClosestToEdgeRTL = function(n, r, i, a, o) {
      var u = o - r.rootLeft - a - i, l = o - r.rootRight - i, c = u + l, d = u > 0 || c > 0, v = l < 0 || c < 0;
      return d ? n + 1 : v ? n - 1 : -1;
    }, e.prototype.getKeyFromEvent = function(n) {
      return bi.has(n.key) ? n.key : _i.get(n.keyCode);
    }, e.prototype.isActivationKey = function(n) {
      return n === Tt.SPACE_KEY || n === Tt.ENTER_KEY;
    }, e.prototype.indexIsInRange = function(n) {
      return n >= 0 && n < this.adapter.getTabListLength();
    }, e.prototype.isRTL = function() {
      return this.adapter.isRTL();
    }, e.prototype.scrollIntoViewImpl = function(n) {
      var r = this.adapter.getScrollPosition(), i = this.adapter.getOffsetWidth(), a = this.adapter.getTabDimensionsAtIndex(n), o = this.findAdjacentTabIndexClosestToEdge(n, a, r, i);
      if (this.indexIsInRange(o)) {
        var u = this.calculateScrollIncrement(n, o, r, i);
        this.adapter.incrementScroll(u);
      }
    }, e.prototype.scrollIntoViewImplRTL = function(n) {
      var r = this.adapter.getScrollPosition(), i = this.adapter.getOffsetWidth(), a = this.adapter.getTabDimensionsAtIndex(n), o = this.adapter.getScrollContentWidth(), u = this.findAdjacentTabIndexClosestToEdgeRTL(n, a, r, i, o);
      if (this.indexIsInRange(u)) {
        var l = this.calculateScrollIncrementRTL(n, u, r, i, o);
        this.adapter.incrementScroll(l);
      }
    }, e;
  }(wt)
), o_ = /* @__PURE__ */ be("<div><div><div><!></div></div></div>");
function s_(t, e) {
  xe(e, !0);
  const { matches: n } = Ua;
  let r = p(e, "use", 19, () => []), i = p(e, "class", 3, ""), a = p(e, "align", 3, void 0), o = p(e, "scrollArea$use", 19, () => []), u = p(e, "scrollArea$class", 3, ""), l = p(e, "scrollContent$use", 19, () => []), c = p(e, "scrollContent$class", 3, ""), d = /* @__PURE__ */ Xe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "align",
    "scrollArea$use",
    "scrollArea$class",
    "scrollContent$use",
    "scrollContent$class",
    "children"
  ]), v, f = /* @__PURE__ */ ve(void 0), m, h, g = ue({}), b = ue({}), y = ue({}), S = ue({});
  it(() => (K(
    f,
    new $b({
      eventTargetMatchesSelector: (F, V) => n(F, V),
      addClass: I,
      removeClass: _,
      addScrollAreaClass: E,
      setScrollAreaStyleProperty: x,
      setScrollContentStyleProperty: w,
      getScrollContentStyleValue: C,
      setScrollAreaScrollLeft: (F) => m.scrollLeft = F,
      getScrollAreaScrollLeft: () => m.scrollLeft,
      getScrollContentOffsetWidth: () => h.offsetWidth,
      getScrollAreaOffsetWidth: () => m.offsetWidth,
      computeScrollAreaClientRect: () => m.getBoundingClientRect(),
      computeScrollContentClientRect: () => h.getBoundingClientRect(),
      computeHorizontalScrollbarHeight: () => e_(document)
    }),
    !0
  ), s(f).init(), () => {
    var F;
    (F = s(f)) == null || F.destroy();
  }));
  function I(F) {
    g[F] || (g[F] = !0);
  }
  function _(F) {
    (!(F in g) || g[F]) && (g[F] = !1);
  }
  function E(F) {
    b[F] || (b[F] = !0);
  }
  function x(F, V) {
    y[F] != V && (V === "" || V == null ? delete y[F] : y[F] = V);
  }
  function w(F, V) {
    S[F] != V && (V === "" || V == null ? delete S[F] : S[F] = V);
  }
  function C(F) {
    return F in S ? S[F] : getComputedStyle(h).getPropertyValue(F);
  }
  function A() {
    if (s(f) == null)
      throw new Error("Instance is undefined.");
    return s(f).getScrollPosition();
  }
  function M() {
    return h.offsetWidth;
  }
  function G(F) {
    var V;
    (V = s(f)) == null || V.incrementScroll(F);
  }
  function k(F) {
    var V;
    (V = s(f)) == null || V.scrollTo(F);
  }
  function j() {
    return v;
  }
  var O = {
    getScrollPosition: A,
    getScrollContentWidth: M,
    incrementScroll: G,
    scrollTo: k,
    getElement: j
  }, T = o_();
  ke(T, (F, V) => ({ class: F, ...V }), [
    () => Pe({
      "mdc-tab-scroller": !0,
      "mdc-tab-scroller--align-start": a() === "start",
      "mdc-tab-scroller--align-end": a() === "end",
      "mdc-tab-scroller--align-center": a() === "center",
      ...g,
      [i()]: !0
    }),
    () => Jn(d, ["scrollArea$", "scrollContent$"])
  ]);
  var H = me(T), U = (F) => {
    var V;
    s(f) && s(f).handleInteraction(), (V = e.scrollArea$onwheel) == null || V.call(e, F);
  }, z = (F) => {
    var V;
    s(f) && s(f).handleInteraction(), (V = e.scrollArea$ontouchstart) == null || V.call(e, F);
  }, J = (F) => {
    var V;
    s(f) && s(f).handleInteraction(), (V = e.scrollArea$onpointerdown) == null || V.call(e, F);
  }, P = (F) => {
    var V;
    s(f) && s(f).handleInteraction(), (V = e.scrollArea$onmousedown) == null || V.call(e, F);
  }, R = (F) => {
    var V;
    s(f) && s(f).handleInteraction(), (V = e.scrollArea$onkeydown) == null || V.call(e, F);
  };
  ke(
    H,
    (F, V, B) => ({
      class: F,
      style: V,
      ...B,
      onwheel: U,
      ontouchstart: z,
      onpointerdown: J,
      onmousedown: P,
      onkeydown: R
    }),
    [
      () => Pe({
        "mdc-tab-scroller__scroll-area": !0,
        ...b,
        [u()]: !0
      }),
      () => Object.entries(y).map(([F, V]) => `${F}: ${V};`).join(" "),
      () => rt(d, "scrollArea$")
    ]
  );
  var W = me(H), Ae = (F) => {
    var V;
    s(f) && s(f).handleTransitionEnd(F), (V = e.scrollContent$ontransitionend) == null || V.call(e, F);
  };
  ke(
    W,
    (F, V, B) => ({
      class: F,
      style: V,
      ...B,
      ontransitionend: Ae
    }),
    [
      () => Pe({
        "mdc-tab-scroller__scroll-content": !0,
        [c()]: !0
      }),
      () => Object.entries(S).map(([F, V]) => `${F}: ${V};`).join(" "),
      () => rt(d, "scrollContent$")
    ]
  );
  var _e = me(W);
  return Se(_e, () => e.children ?? pe), Ee(W, (F) => h = F, () => h), De(W, (F, V) => q == null ? void 0 : q(F, V), l), Ee(H, (F) => m = F, () => m), De(H, (F, V) => q == null ? void 0 : q(F, V), o), Ee(T, (F) => v = F, () => v), De(T, (F, V) => q == null ? void 0 : q(F, V), r), L(t, T), Te(O);
}
var l_ = /* @__PURE__ */ be("<div><!></div>");
function u_(t, e) {
  xe(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "tabs", 19, () => []), a = p(e, "key", 3, (O) => O), o = p(e, "focusOnActivate", 3, !0), u = p(e, "focusOnProgrammatic", 3, !1), l = p(e, "useAutomaticActivation", 3, !0), c = p(e, "active", 15), d = p(e, "tabindex", 3, 0), v = /* @__PURE__ */ Xe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "tabs",
    "key",
    "focusOnActivate",
    "focusOnProgrammatic",
    "useAutomaticActivation",
    "active",
    "tabindex",
    "tab"
  ]), f, m = /* @__PURE__ */ ve(void 0), h, g = /* @__PURE__ */ ve(ue(c() == null ? -1 : i().findIndex((O) => c() && a()(O) === a()(c())))), b = ue({}), y = /* @__PURE__ */ ve(/* @__PURE__ */ new WeakMap()), S = !1;
  ae("SMUI:tab:focusOnActivate", o()), ae("SMUI:tab:initialActive", {
    active: c() == null ? null : a()(c()),
    key: a()
  }), Ce(() => {
    (c() == null && s(g) !== -1 || c() != null && s(g) === -1 || c() != null && a()(c()) !== a()(i()[s(g)])) && (K(g, i().findIndex((O) => c() && a()(O) === a()(c())), !0), s(m) && (S = !u(), s(m).activateTab(s(g)), S = !1));
  }), Ce(() => {
    if (i().length) {
      const O = i()[0] instanceof Object ? s(y).get(i()[0]) : b[i()[0]];
      O && O.forceAccessible(s(g) === -1);
    }
  });
  let I = !1;
  Ce(() => {
    if (!s(m)) {
      I = !1;
      return;
    }
    I || (I = !0, s(m).setUseAutomaticActivation(l()));
  }), ae("SMUI:tab:mount", (O) => {
    E(O.tabId, O);
  }), ae("SMUI:tab:unmount", (O) => {
    x(O.tabId);
  }), it(() => (K(
    m,
    new a_({
      scrollTo: (O) => h.scrollTo(O),
      incrementScroll: (O) => h.incrementScroll(O),
      getScrollPosition: () => h.getScrollPosition(),
      getScrollContentWidth: () => h.getScrollContentWidth(),
      getOffsetWidth: () => C().offsetWidth,
      isRTL: () => getComputedStyle(C()).getPropertyValue("direction") === "rtl",
      setActiveTab: (O) => {
        var T;
        c(i()[O]), K(g, O, !0), (T = s(m)) == null || T.activateTab(O);
      },
      activateTabAtIndex: (O, T) => {
        var H;
        return (H = _(i()[O])) == null ? void 0 : H.activate(T, S);
      },
      deactivateTabAtIndex: (O) => {
        var T;
        return (T = _(i()[O])) == null ? void 0 : T.deactivate();
      },
      focusTabAtIndex: (O) => {
        var T;
        return (T = _(i()[O])) == null ? void 0 : T.focus();
      },
      getTabIndicatorClientRectAtIndex: (O) => {
        var T;
        return ((T = _(i()[O])) == null ? void 0 : T.computeIndicatorClientRect()) ?? new DOMRect();
      },
      getTabDimensionsAtIndex: (O) => {
        var T;
        return ((T = _(i()[O])) == null ? void 0 : T.computeDimensions()) ?? { rootLeft: 0, rootRight: 0, contentLeft: 0, contentRight: 0 };
      },
      getPreviousActiveTabIndex: () => {
        var O;
        for (let T = 0; T < i().length; T++)
          if ((O = _(i()[T])) != null && O.active)
            return T;
        return -1;
      },
      getFocusedTabIndex: () => {
        const O = i().map((H) => {
          var U;
          return (U = _(H)) == null ? void 0 : U.element;
        }), T = document.activeElement;
        return O.indexOf(T);
      },
      getIndexOfTabById: (O) => i().findIndex((T) => a()(T) === a()(O)),
      getTabListLength: () => i().length,
      notifyTabActivated: (O) => Je(C(), "SMUITabBarActivated", { index: O })
    }),
    !0
  ), s(m).init(), () => {
    var O;
    (O = s(m)) == null || O.destroy();
  }));
  function _(O) {
    return O instanceof Object ? s(y).get(O) : b[O];
  }
  function E(O, T) {
    O instanceof Object ? (s(y).set(O, T), K(y, s(y))) : b[O] = T;
  }
  function x(O) {
    O instanceof Object ? (s(y).delete(O), K(y, s(y))) : delete b[O];
  }
  function w(O) {
    var T;
    (T = s(m)) == null || T.scrollIntoView(O);
  }
  function C() {
    return f;
  }
  var A = { scrollIntoView: w, getElement: C }, M = l_(), G = (O) => {
    var T;
    s(m) && s(m).handleKeyDown(O), (T = e.onkeydown) == null || T.call(e, O);
  }, k = (O) => {
    var T;
    s(m) && s(m).handleTabInteraction(O), (T = e.onSMUITabInteracted) == null || T.call(e, O);
  };
  ke(
    M,
    (O, T) => ({
      class: O,
      role: "tablist",
      tabindex: d(),
      ...T,
      onkeydown: G,
      onSMUITabInteracted: k
    }),
    [
      () => Pe({ "mdc-tab-bar": !0, [r()]: !0 }),
      () => Jn(v, ["tabScroller$"])
    ]
  );
  var j = me(M);
  {
    let O = /* @__PURE__ */ fe(() => rt(v, "tabScroller$"));
    Ee(
      s_(j, nt(() => s(O), {
        children: (T, H) => {
          var U = re(), z = Q(U);
          Hn(z, 17, i, (J) => a()(J), (J, P) => {
            var R = re(), W = Q(R);
            Se(W, () => e.tab, () => s(P)), L(J, R);
          }), L(T, U);
        },
        $$slots: { default: !0 }
      })),
      (T) => h = T,
      () => h
    );
  }
  return Ee(M, (O) => f = O, () => f), De(M, (O, T) => q == null ? void 0 : q(O, T), n), L(t, M), Te(A);
}
var c_ = /* @__PURE__ */ be("<span><span><!></span></span>");
function d_(t, e) {
  xe(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "active", 15, !1), a = p(e, "type", 3, "underline"), o = p(e, "transition", 3, "slide"), u = p(e, "content$use", 19, () => []), l = p(e, "content$class", 3, ""), c = /* @__PURE__ */ Xe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "active",
    "type",
    "transition",
    "content$use",
    "content$class",
    "children"
  ]), d, v = /* @__PURE__ */ ve(void 0), f, m = /* @__PURE__ */ ve(ue({})), h = /* @__PURE__ */ ve(ue({})), g = ue([]), b = o();
  Ce(() => {
    b !== o() && (b = o(), s(v) && s(v).destroy(), K(m, {}, !0), K(h, {}, !0), K(v, y(), !0), s(v).init());
  }), Vu(() => {
    g.length && requestAnimationFrame(() => {
      const O = g.shift() ?? [];
      for (const T of O)
        T();
    });
  }), it(() => (K(v, y(), !0), s(v).init(), () => {
    var O;
    (O = s(v)) == null || O.destroy();
  }));
  function y() {
    const O = {
      fade: r_,
      slide: au
    }[o()] || au;
    return new O({
      addClass: (...T) => S(() => I(...T)),
      removeClass: (...T) => S(() => _(...T)),
      computeContentClientRect: C,
      setContentStyleProperty: (...T) => S(() => E(...T))
    });
  }
  function S(O) {
    g.length ? g[g.length - 1].push(O) : O();
  }
  function I(O) {
    s(m)[O] || (s(m)[O] = !0);
  }
  function _(O) {
    (!(O in s(m)) || s(m)[O]) && (s(m)[O] = !1);
  }
  function E(O, T) {
    s(h)[O] != T && (T === "" || T == null ? delete s(h)[O] : s(h)[O] = T);
  }
  function x(O) {
    var T;
    i(!0), (T = s(v)) == null || T.activate(O);
  }
  function w() {
    var O;
    i(!1), (O = s(v)) == null || O.deactivate();
  }
  function C() {
    return g.push([]), f.getBoundingClientRect();
  }
  function A() {
    return d;
  }
  var M = { activate: x, deactivate: w, computeContentClientRect: C, getElement: A }, G = c_();
  ke(G, (O, T) => ({ class: O, ...T }), [
    () => Pe({
      "mdc-tab-indicator": !0,
      "mdc-tab-indicator--active": i(),
      "mdc-tab-indicator--fade": o() === "fade",
      ...s(m),
      [r()]: !0
    }),
    () => Jn(c, ["content$"])
  ]);
  var k = me(G);
  ke(
    k,
    (O, T, H) => ({
      class: O,
      style: T,
      "aria-hidden": a() === "icon" ? "true" : void 0,
      ...H
    }),
    [
      () => Pe({
        "mdc-tab-indicator__content": !0,
        "mdc-tab-indicator__content--underline": a() === "underline",
        "mdc-tab-indicator__content--icon": a() === "icon",
        [l()]: !0
      }),
      () => Object.entries(s(h)).map(([O, T]) => `${O}: ${T};`).join(" "),
      () => rt(c, "content$")
    ]
  );
  var j = me(k);
  return Se(j, () => e.children ?? pe), Ee(k, (O) => f = O, () => f), De(k, (O, T) => q == null ? void 0 : q(O, T), u), Ee(G, (O) => d = O, () => d), De(G, (O, T) => q == null ? void 0 : q(O, T), n), L(t, G), Te(M);
}
var f_ = /* @__PURE__ */ be('<span><!> <!></span> <!> <span class="mdc-tab__ripple"></span>', 1);
function h_(t, e) {
  xe(e, !0);
  const n = (V) => {
    {
      let B = /* @__PURE__ */ fe(() => rt(g, "tabIndicator$"));
      Ee(
        d_(V, nt(() => s(B), {
          get active() {
            return s(A);
          },
          set active(ee) {
            K(A, ee, !0);
          },
          children: (ee, Z) => {
            var ce = re(), we = Q(ce);
            Se(we, () => e.tabIndicator ?? pe), L(ee, ce);
          },
          $$slots: { default: !0 }
        })),
        (ee) => I = ee,
        () => I
      );
    }
  };
  let r = p(e, "use", 19, () => []), i = p(e, "class", 3, ""), a = p(e, "style", 3, ""), o = p(e, "ripple", 3, !0), u = p(e, "stacked", 3, !1), l = p(e, "minWidth", 3, !1), c = p(e, "indicatorSpanOnlyContent", 3, !1), d = p(e, "href", 3, void 0), v = p(e, "content$use", 19, () => []), f = p(e, "content$class", 3, ""), m = p(e, "component", 3, jr), h = p(e, "tag", 19, () => d() == null ? "button" : "a"), g = /* @__PURE__ */ Xe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "tab",
    "ripple",
    "stacked",
    "minWidth",
    "indicatorSpanOnlyContent",
    "href",
    "content$use",
    "content$class",
    "component",
    "tag",
    "children",
    "tabIndicator"
  ]), b, y = /* @__PURE__ */ ve(void 0), S, I, _ = ue({}), E = ue({}), x = ue({}), w = he("SMUI:tab:focusOnActivate");
  const C = he("SMUI:tab:initialActive");
  let A = /* @__PURE__ */ ve(ue(C.active != null && C.key(e.tab) === C.active)), M = /* @__PURE__ */ ve(!1);
  if (ae("SMUI:label:context", "tab"), ae("SMUI:icon:context", "tab"), !e.tab)
    throw new Error("The tab property is required! It should be passed down from the TabBar to the Tab.");
  let G = !1;
  Ce(() => {
    if (!s(y)) {
      G = !1;
      return;
    }
    G || (G = !0, s(y).setFocusOnActivate(w));
  });
  const k = he("SMUI:tab:mount"), j = he("SMUI:tab:unmount");
  it(() => {
    K(
      y,
      new i_({
        setAttr: z,
        addClass: T,
        removeClass: H,
        hasClass: O,
        activateIndicator: (B) => I.activate(B),
        deactivateIndicator: () => I.deactivate(),
        notifyInteracted: () => Je(W(), "SMUITabInteracted", { tabId: e.tab }),
        getOffsetLeft: () => W().offsetLeft,
        getOffsetWidth: () => W().offsetWidth,
        getContentOffsetLeft: () => S.offsetLeft,
        getContentOffsetWidth: () => S.offsetWidth,
        focus: R
      }),
      !0
    );
    const V = {
      tabId: e.tab,
      get element() {
        return W();
      },
      get active() {
        return s(A);
      },
      forceAccessible(B) {
        K(M, B, !0);
      },
      computeIndicatorClientRect: () => I.computeContentClientRect(),
      computeDimensions: () => {
        if (s(y) == null)
          throw new Error("Instance is undefined.");
        return s(y).computeDimensions();
      },
      focus: R,
      activate: J,
      deactivate: P
    };
    return k && k(V), s(y).init(), () => {
      var B;
      j && j(V), (B = s(y)) == null || B.destroy();
    };
  });
  function O(V) {
    return V in _ ? _[V] : W().classList.contains(V);
  }
  function T(V) {
    _[V] || (_[V] = !0);
  }
  function H(V) {
    (!(V in _) || _[V]) && (_[V] = !1);
  }
  function U(V, B) {
    E[V] != B && (B === "" || B == null ? delete E[V] : E[V] = B);
  }
  function z(V, B) {
    x[V] !== B && (x[V] = B);
  }
  function J(V, B) {
    var ee, Z, ce;
    K(A, !0), B && ((ee = s(y)) == null || ee.setFocusOnActivate(!1)), (Z = s(y)) == null || Z.activate(V), B && ((ce = s(y)) == null || ce.setFocusOnActivate(w));
  }
  function P() {
    var V;
    K(A, !1), (V = s(y)) == null || V.deactivate();
  }
  function R() {
    W().focus();
  }
  function W() {
    return b.getElement();
  }
  var Ae = { activate: J, deactivate: P, focus: R, getElement: W }, _e = re(), F = Q(_e);
  {
    let V = /* @__PURE__ */ fe(() => [
      [
        Xt,
        {
          ripple: o(),
          unbounded: !1,
          addClass: T,
          removeClass: H,
          addStyle: U
        }
      ],
      ...r()
    ]), B = /* @__PURE__ */ fe(() => Pe({
      "mdc-tab": !0,
      "mdc-tab--active": s(A),
      "mdc-tab--stacked": u(),
      "mdc-tab--min-width": l(),
      ..._,
      [i()]: !0
    })), ee = /* @__PURE__ */ fe(() => Object.entries(E).map(([$, ie]) => `${$}: ${ie};`).concat([a()]).join(" ")), Z = /* @__PURE__ */ fe(() => s(A) ? "true" : "false"), ce = /* @__PURE__ */ fe(() => s(A) || s(M) ? "0" : "-1"), we = /* @__PURE__ */ fe(() => Jn(g, ["content$", "tabIndicator$"]));
    _r(F, m, ($, ie) => {
      Ee(
        ie($, nt(
          {
            get tag() {
              return h();
            },
            get use() {
              return s(V);
            },
            get class() {
              return s(B);
            },
            get style() {
              return s(ee);
            },
            role: "tab",
            get "aria-selected"() {
              return s(Z);
            },
            get tabindex() {
              return s(ce);
            },
            get href() {
              return d();
            }
          },
          () => x,
          () => s(we),
          {
            onclick: (Me) => {
              var Le;
              (Le = e.onclick) == null || Le.call(e, Me), !Me.defaultPrevented && s(y) && s(y).handleClick();
            },
            children: (Me, Le) => {
              var je = f_(), Ke = Q(je);
              ke(Ke, (Fe, dt) => ({ class: Fe, ...dt }), [
                () => Pe({ "mdc-tab__content": !0, [f()]: !0 }),
                () => rt(g, "content$")
              ]);
              var Ue = me(Ke);
              Se(Ue, () => e.children ?? pe);
              var N = Ie(Ue, 2);
              {
                var X = (Fe) => {
                  n(Fe);
                };
                oe(N, (Fe) => {
                  c() && Fe(X);
                });
              }
              Ee(Ke, (Fe) => S = Fe, () => S), De(Ke, (Fe, dt) => q == null ? void 0 : q(Fe, dt), v);
              var de = Ie(Ke, 2);
              {
                var Re = (Fe) => {
                  n(Fe);
                };
                oe(de, (Fe) => {
                  c() || Fe(Re);
                });
              }
              L(Me, je);
            },
            $$slots: { default: !0 }
          }
        )),
        (Me) => b = Me,
        () => b
      );
    });
  }
  return L(t, _e), Te(Ae);
}
var v_ = (t, e) => e(), m_ = /* @__PURE__ */ be('<button class="filter-tab__tabs__clear svelte-nj6sif">Clear Filters</button>'), g_ = /* @__PURE__ */ be('<div class="filter-tab__tabs svelte-nj6sif"><h4 style="all:unset; font-weight: bold; font-size: 1rem;">Filter by</h4> <!> <!></div>'), p_ = /* @__PURE__ */ be('<div class="filter-tab svelte-nj6sif"><!> <!> <!></div>');
function b_(t, e) {
  xe(e, !0);
  let n = p(e, "filters", 31, () => ue([])), r = p(e, "onFilterChange", 3, (I) => {
  }), i = p(e, "activeNavigationTab", 31, () => ue(e.navigationTabs ? e.navigationTabs[0] : void 0)), a = p(e, "searchText", 15, ""), o = p(e, "searchLabel", 3, "Search"), u = p(e, "searchPlaceholder", 3, "Type to search..."), l = p(e, "onSearchInput", 3, () => {
  }), c = p(e, "searchDisabled", 3, !1), d = /* @__PURE__ */ fe(() => n().some((I) => I.value !== void 0 && I.value !== null && I.value !== "")), v = () => {
    n(n().map((I) => ({ ...I, value: void 0 }))), r()(n());
  };
  var f = p_(), m = me(f);
  {
    var h = (I) => {
      Dg(I, {
        oninput: () => l()(),
        icon: "search",
        get label() {
          return o();
        },
        get placeholder() {
          return u();
        },
        variant: "outlined",
        styles: "background: var(--oscd-base2,#fff); max-width: 650px;",
        get value() {
          return a();
        },
        set value(_) {
          a(_);
        }
      });
    };
    oe(m, (I) => {
      c() || I(h);
    });
  }
  var g = Ie(m, 2);
  {
    var b = (I) => {
      u_(I, {
        get tabs() {
          return e.navigationTabs;
        },
        get active() {
          return i();
        },
        set active(E) {
          i(E);
        },
        tab: (E, x = pe) => {
          h_(E, {
            get tab() {
              return x();
            },
            minWidth: !0,
            children: (w, C) => {
              Gm(w, {
                children: (A, M) => {
                  var G = Mt();
                  Oe(() => st(G, x())), L(A, G);
                },
                $$slots: { default: !0 }
              });
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { tab: !0 }
      });
    };
    oe(g, (I) => {
      e.navigationTabs && I(b);
    });
  }
  var y = Ie(g, 2);
  {
    var S = (I) => {
      var _ = g_(), E = Ie(me(_), 2);
      Kb(E, {
        onfiltersChanged: (C) => r()(C),
        get filters() {
          return n();
        },
        set filters(C) {
          n(C);
        }
      });
      var x = Ie(E, 2);
      {
        var w = (C) => {
          var A = m_();
          A.__click = [v_, v], L(C, A);
        };
        oe(x, (C) => {
          s(d) && C(w);
        });
      }
      L(I, _);
    };
    oe(y, (I) => {
      n() && n().length > 0 && I(S);
    });
  }
  L(t, f), Te();
}
hn(["click"]);
hn(["change", "click"]);
var __ = /* @__PURE__ */ an('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 4l-8 8h16l-8-8z"></path></svg>'), y_ = /* @__PURE__ */ an('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 20l8-8H4l8 8z"></path></svg>'), I_ = /* @__PURE__ */ be('<div class="custom-cell-container svelte-1mj71p3"><div class="cell-header svelte-1mj71p3"><span class="header-title svelte-1mj71p3"> </span> <!></div></div>'), E_ = (t, e) => e(), S_ = /* @__PURE__ */ be('<input type="text" class="svelte-1mj71p3"/>'), A_ = (t, e) => e(), C_ = /* @__PURE__ */ be('<input type="number" class="svelte-1mj71p3"/>'), x_ = /* @__PURE__ */ be("<!> <!>", 1), T_ = /* @__PURE__ */ be("<!> <!>", 1), w_ = /* @__PURE__ */ be('<div class="cell-actions svelte-1mj71p3"></div>'), L_ = /* @__PURE__ */ be("<!> <!>", 1);
function O_(t, e) {
  xe(e, !0);
  const n = () => Yn(b, "$sortColumn", a), r = () => Yn(y, "$sortDirection", a), i = () => Yn(g, "$filteredData", a), [a, o] = yr();
  let u = p(e, "loadingDone", 15, !0), l = p(e, "label", 19, _p), c = p(e, "columnDefs", 19, () => []), d = p(e, "rowData", 31, () => ue([])), v = p(e, "rowActions", 19, () => []), f = p(e, "searchInputLabel", 3, "Search"), m = p(e, "emptyText", 3, "No data available"), h = ue({ name: "", color: "", number: "" }), g = tn([]), b = tn(null), y = tn(null), S = /* @__PURE__ */ fe(() => c().some((x) => x.filter));
  e.store.store.subscribe((x) => {
    d([...x]), I();
  });
  function I() {
    let x = d().filter((w) => c().every((C) => {
      const A = h[C.field], M = C.filterValueGetter ? C.filterValueGetter(w) : w[C.field];
      return A ? C.filterType === "number" ? M == A : M.toString().toLowerCase().includes(A.toLowerCase()) : !0;
    }));
    x = _(x), g.set(x);
  }
  function _(x) {
    let w, C;
    return b.subscribe((A) => w = A), y.subscribe((A) => C = A), !w || !C ? x : x.sort((A, M) => {
      let G = A[w], k = M[w];
      return G == null && (G = ""), k == null && (k = ""), C === "asc" ? G.toString().localeCompare(k.toString()) : k.toString().localeCompare(G.toString());
    });
  }
  function E(x) {
    b.update((w) => {
      if (w === x)
        y.update((C) => C === "asc" ? "desc" : C === "desc" ? null : "asc");
      else
        return y.set("asc"), x;
      return x;
    }), I();
  }
  g.set(d()), tb(t, {
    get "table$aria-label"() {
      return l();
    },
    style: "max-width: 100%; width: 100%;",
    progress: (w) => {
      hb(w, {
        indeterminate: !0,
        "aria-label": "Data is being loaded...",
        get closed() {
          return u();
        },
        set closed(C) {
          u(C);
        }
      });
    },
    children: (w, C) => {
      var A = L_(), M = Q(A);
      rb(M, {
        children: (k, j) => {
          var O = T_(), T = Q(O);
          Ya(T, {
            class: "header-title-row",
            children: (z, J) => {
              var P = re(), R = Q(P);
              Hn(R, 17, c, Oi, (W, Ae) => {
                va(W, {
                  onclick: () => s(Ae).sortable && E(s(Ae).field),
                  get style() {
                    return s(Ae).headerStyle;
                  },
                  children: (_e, F) => {
                    var V = I_(), B = me(V), ee = me(B), Z = me(ee), ce = Ie(ee, 2);
                    {
                      var we = ($) => {
                        var ie = re(), Me = Q(ie);
                        {
                          var Le = (je) => {
                            var Ke = re(), Ue = Q(Ke);
                            {
                              var N = (de) => {
                                var Re = __();
                                L(de, Re);
                              }, X = (de) => {
                                var Re = re(), Fe = Q(Re);
                                {
                                  var dt = (bt) => {
                                    var se = y_();
                                    L(bt, se);
                                  };
                                  oe(
                                    Fe,
                                    (bt) => {
                                      r() === "desc" && bt(dt);
                                    },
                                    !0
                                  );
                                }
                                L(de, Re);
                              };
                              oe(Ue, (de) => {
                                r() === "asc" ? de(N) : de(X, !1);
                              });
                            }
                            L(je, Ke);
                          };
                          oe(Me, (je) => {
                            n() === s(Ae).field && r() !== null && je(Le);
                          });
                        }
                        L($, ie);
                      };
                      oe(ce, ($) => {
                        s(Ae).sortable && $(we);
                      });
                    }
                    Oe(() => {
                      kt(V, `min-width: ${s(Ae).minWidth ?? 0 ?? ""}`), st(Z, s(Ae).headerName);
                    }), L(_e, V);
                  },
                  $$slots: { default: !0 }
                });
              }), L(z, P);
            },
            $$slots: { default: !0 }
          });
          var H = Ie(T, 2);
          {
            var U = (z) => {
              Ya(z, {
                class: "header-filter-row",
                children: (J, P) => {
                  var R = re(), W = Q(R);
                  Hn(W, 17, c, Oi, (Ae, _e) => {
                    va(Ae, {
                      children: (F, V) => {
                        var B = re(), ee = Q(B);
                        {
                          var Z = (ce) => {
                            var we = x_(), $ = Q(we);
                            {
                              var ie = (je) => {
                                var Ke = S_();
                                Ke.__input = [E_, I], Oe(() => Pr(Ke, "placeholder", `${f()} ${s(_e).headerName}`)), Ca(Ke, () => h[s(_e).field], (Ue) => h[s(_e).field] = Ue), L(je, Ke);
                              };
                              oe($, (je) => {
                                s(_e).filterType === "text" && je(ie);
                              });
                            }
                            var Me = Ie($, 2);
                            {
                              var Le = (je) => {
                                var Ke = C_();
                                Ke.__input = [A_, I], Oe(() => Pr(Ke, "placeholder", `${f()} ${s(_e).headerName}`)), Ca(Ke, () => h[s(_e).field], (Ue) => h[s(_e).field] = Ue), L(je, Ke);
                              };
                              oe(Me, (je) => {
                                s(_e).filterType === "number" && je(Le);
                              });
                            }
                            L(ce, we);
                          };
                          oe(ee, (ce) => {
                            s(_e).filter && ce(Z);
                          });
                        }
                        L(F, B);
                      },
                      $$slots: { default: !0 }
                    });
                  }), L(J, R);
                },
                $$slots: { default: !0 }
              });
            };
            oe(H, (z) => {
              s(S) && z(U);
            });
          }
          L(k, O);
        },
        $$slots: { default: !0 }
      });
      var G = Ie(M, 2);
      ab(G, {
        children: (k, j) => {
          var O = re(), T = Q(O);
          {
            var H = (z) => {
              Ya(z, {
                children: (J, P) => {
                  va(J, {
                    class: "oscd-basic-table__empty-row",
                    get colspan() {
                      return c().length;
                    },
                    style: "text-align:center; padding: 24px; opacity: 0.6; background: rgba(0,0,0,0.05);",
                    children: (R, W) => {
                      var Ae = Mt();
                      Oe(() => st(Ae, m())), L(R, Ae);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { default: !0 }
              });
            }, U = (z) => {
              var J = re(), P = Q(J);
              Hn(P, 1, i, Oi, (R, W) => {
                Ya(R, {
                  children: (Ae, _e) => {
                    var F = re(), V = Q(F);
                    Hn(V, 17, c, (B) => B.field, (B, ee) => {
                      var Z = re(), ce = Q(Z);
                      {
                        var we = (ie) => {
                          va(ie, {
                            children: (Me, Le) => {
                              var je = w_();
                              Hn(je, 21, v, Oi, (Ke, Ue) => {
                                var N = re(), X = Q(N);
                                {
                                  var de = (Fe) => {
                                    _o(Fe, {
                                      get content() {
                                        return s(Ue).tooltip;
                                      },
                                      hoverDelay: 500,
                                      children: (dt, bt) => {
                                        {
                                          let se = /* @__PURE__ */ fe(() => s(Ue).disabled(s(W)));
                                          $m(dt, {
                                            get iconComponent() {
                                              return s(Ue).iconComponent;
                                            },
                                            get iconStyles() {
                                              return s(Ue).iconStyles;
                                            },
                                            callback: () => s(Ue).callback(s(W)),
                                            get disabled() {
                                              return s(se);
                                            }
                                          });
                                        }
                                      },
                                      $$slots: { default: !0 }
                                    });
                                  }, Re = (Fe) => {
                                    _o(Fe, {
                                      get content() {
                                        return s(Ue).tooltip;
                                      },
                                      hoverDelay: 500,
                                      children: (dt, bt) => {
                                        {
                                          let se = /* @__PURE__ */ fe(() => s(Ue).disabled(s(W)));
                                          Km(dt, {
                                            class: "button",
                                            variant: "raised",
                                            callback: () => s(Ue).callback(s(W)),
                                            get disabled() {
                                              return s(se);
                                            },
                                            children: (ye, Y) => {
                                              var te = re(), Ne = Q(te);
                                              {
                                                var ft = (gt) => {
                                                  Ep(gt, { svgStyles: "margin: unset" });
                                                }, _t = (gt) => {
                                                  var Bt = re(), Ir = Q(Bt);
                                                  {
                                                    var vt = (It) => {
                                                      Xc(It, { svgStyles: "margin: unset" });
                                                    }, Dt = (It) => {
                                                      var On = re(), yi = Q(On);
                                                      {
                                                        var Vn = (Qe) => {
                                                          Cp(Qe, { svgStyles: "margin: unset" });
                                                        }, qe = (Qe) => {
                                                          var $e = re(), Pt = Q($e);
                                                          {
                                                            var mn = (ut) => {
                                                              Tp(ut, { svgStyles: "margin: unset" });
                                                            }, at = (ut) => {
                                                              var Ct = re(), et = Q(Ct);
                                                              {
                                                                var Lt = (Ot) => {
                                                                  Rp(Ot, { svgStyles: "margin: unset" });
                                                                }, Rn = (Ot) => {
                                                                  var yt = re(), Nt = Q(yt);
                                                                  {
                                                                    var ln = (un) => {
                                                                      Dp(un, { svgStyles: "margin: unset" });
                                                                    }, Ft = (un) => {
                                                                      var Yt = re(), Gn = Q(Yt);
                                                                      {
                                                                        var qr = (Wt) => {
                                                                          Np(Wt, { svgStyles: "margin: unset" });
                                                                        }, cn = (Wt) => {
                                                                          var gn = re(), tr = Q(gn);
                                                                          {
                                                                            var ra = (Er) => {
                                                                              Vp(Er, { svgStyles: "margin: unset" });
                                                                            }, ko = (Er) => {
                                                                              Lp(Er, { svgStyles: "margin: unset" });
                                                                            };
                                                                            oe(
                                                                              tr,
                                                                              (Er) => {
                                                                                s(Ue).icon === "archive" ? Er(ra) : Er(ko, !1);
                                                                              },
                                                                              !0
                                                                            );
                                                                          }
                                                                          L(Wt, gn);
                                                                        };
                                                                        oe(
                                                                          Gn,
                                                                          (Wt) => {
                                                                            s(Ue).icon === "delete" ? Wt(qr) : Wt(cn, !1);
                                                                          },
                                                                          !0
                                                                        );
                                                                      }
                                                                      L(un, Yt);
                                                                    };
                                                                    oe(
                                                                      Nt,
                                                                      (un) => {
                                                                        s(Ue).icon === "edit" ? un(ln) : un(Ft, !1);
                                                                      },
                                                                      !0
                                                                    );
                                                                  }
                                                                  L(Ot, yt);
                                                                };
                                                                oe(
                                                                  et,
                                                                  (Ot) => {
                                                                    s(Ue).icon === "remove" ? Ot(Lt) : Ot(Rn, !1);
                                                                  },
                                                                  !0
                                                                );
                                                              }
                                                              L(ut, Ct);
                                                            };
                                                            oe(
                                                              Pt,
                                                              (ut) => {
                                                                s(Ue).icon === "find-in-page" ? ut(mn) : ut(at, !1);
                                                              },
                                                              !0
                                                            );
                                                          }
                                                          L(Qe, $e);
                                                        };
                                                        oe(
                                                          yi,
                                                          (Qe) => {
                                                            s(Ue).icon === "download" ? Qe(Vn) : Qe(qe, !1);
                                                          },
                                                          !0
                                                        );
                                                      }
                                                      L(It, On);
                                                    };
                                                    oe(
                                                      Ir,
                                                      (It) => {
                                                        s(Ue).icon === "cancel" ? It(vt) : It(Dt, !1);
                                                      },
                                                      !0
                                                    );
                                                  }
                                                  L(gt, Bt);
                                                };
                                                oe(Ne, (gt) => {
                                                  s(Ue).icon === "add" ? gt(ft) : gt(_t, !1);
                                                });
                                              }
                                              L(ye, te);
                                            },
                                            $$slots: { default: !0 }
                                          });
                                        }
                                      },
                                      $$slots: { default: !0 }
                                    });
                                  };
                                  oe(X, (Fe) => {
                                    s(Ue).iconComponent ? Fe(de) : Fe(Re, !1);
                                  });
                                }
                                L(Ke, N);
                              }), L(Me, je);
                            },
                            $$slots: { default: !0 }
                          });
                        }, $ = (ie) => {
                          va(ie, {
                            get numeric() {
                              return s(ee).numeric;
                            },
                            get style() {
                              return s(ee).cellStyle;
                            },
                            children: (Me, Le) => {
                              var je = re(), Ke = Q(je);
                              {
                                var Ue = (X) => {
                                  const de = /* @__PURE__ */ fe(() => s(ee).cellRenderer);
                                  var Re = re(), Fe = Q(Re);
                                  _r(Fe, () => s(de), (dt, bt) => {
                                    bt(dt, nt(
                                      {
                                        get row() {
                                          return s(W);
                                        },
                                        get value() {
                                          return s(W)[s(ee).field];
                                        },
                                        get col() {
                                          return s(ee);
                                        }
                                      },
                                      () => s(ee).cellRendererProps ?? {}
                                    ));
                                  }), L(X, Re);
                                }, N = (X) => {
                                  var de = re(), Re = Q(de);
                                  {
                                    var Fe = (bt) => {
                                      var se = Mt();
                                      Oe((ye) => st(se, ye), [
                                        () => s(ee).valueFormatter(s(W)[s(ee).field])
                                      ]), L(bt, se);
                                    }, dt = (bt) => {
                                      var se = Mt();
                                      Oe(() => st(se, s(W)[s(ee).field] ?? "")), L(bt, se);
                                    };
                                    oe(
                                      Re,
                                      (bt) => {
                                        s(ee).valueFormatter ? bt(Fe) : bt(dt, !1);
                                      },
                                      !0
                                    );
                                  }
                                  L(X, de);
                                };
                                oe(Ke, (X) => {
                                  s(ee).cellRenderer ? X(Ue) : X(N, !1);
                                });
                              }
                              L(Me, je);
                            },
                            $$slots: { default: !0 }
                          });
                        };
                        oe(ce, (ie) => {
                          s(ee).field === "actions" ? ie(we) : ie($, !1);
                        });
                      }
                      L(B, Z);
                    }), L(Ae, F);
                  },
                  $$slots: { default: !0 }
                });
              }), L(z, J);
            };
            oe(T, (z) => {
              i().length === 0 ? z(H) : z(U, !1);
            });
          }
          L(k, O);
        },
        $$slots: { default: !0 }
      }), L(w, A);
    },
    $$slots: { progress: !0, default: !0 }
  }), Te(), o();
}
hn(["input"]);
function At(t) {
  return typeof t == "function";
}
function Js(t) {
  var e = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = t(e);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var rs = Js(function(t) {
  return function(n) {
    t(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(r, i) {
      return i + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function Io(t, e) {
  if (t) {
    var n = t.indexOf(e);
    0 <= n && t.splice(n, 1);
  }
}
var ka = function() {
  function t(e) {
    this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return t.prototype.unsubscribe = function() {
    var e, n, r, i, a;
    if (!this.closed) {
      this.closed = !0;
      var o = this._parentage;
      if (o)
        if (this._parentage = null, Array.isArray(o))
          try {
            for (var u = Ut(o), l = u.next(); !l.done; l = u.next()) {
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
      if (At(d))
        try {
          d();
        } catch (g) {
          a = g instanceof rs ? g.errors : [g];
        }
      var v = this._finalizers;
      if (v) {
        this._finalizers = null;
        try {
          for (var f = Ut(v), m = f.next(); !m.done; m = f.next()) {
            var h = m.value;
            try {
              ou(h);
            } catch (g) {
              a = a ?? [], g instanceof rs ? a = Zn(Zn([], gr(a)), gr(g.errors)) : a.push(g);
            }
          }
        } catch (g) {
          r = { error: g };
        } finally {
          try {
            m && !m.done && (i = f.return) && i.call(f);
          } finally {
            if (r) throw r.error;
          }
        }
      }
      if (a)
        throw new rs(a);
    }
  }, t.prototype.add = function(e) {
    var n;
    if (e && e !== this)
      if (this.closed)
        ou(e);
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
    n === e ? this._parentage = null : Array.isArray(n) && Io(n, e);
  }, t.prototype.remove = function(e) {
    var n = this._finalizers;
    n && Io(n, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = function() {
    var e = new t();
    return e.closed = !0, e;
  }(), t;
}(), Zc = ka.EMPTY;
function Qc(t) {
  return t instanceof ka || t && "closed" in t && At(t.remove) && At(t.add) && At(t.unsubscribe);
}
function ou(t) {
  At(t) ? t() : t.unsubscribe();
}
var R_ = {
  Promise: void 0
}, M_ = {
  setTimeout: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setTimeout.apply(void 0, Zn([t, e], gr(n)));
  },
  clearTimeout: function(t) {
    return clearTimeout(t);
  },
  delegate: void 0
};
function Jc(t) {
  M_.setTimeout(function() {
    throw t;
  });
}
function su() {
}
function ao(t) {
  t();
}
var $s = function(t) {
  We(e, t);
  function e(n) {
    var r = t.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, Qc(n) && n.add(r)) : r.destination = N_, r;
  }
  return e.create = function(n, r, i) {
    return new ws(n, r, i);
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
}(ka), D_ = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(e);
      } catch (r) {
        Ja(r);
      }
  }, t.prototype.error = function(e) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(e);
      } catch (r) {
        Ja(r);
      }
    else
      Ja(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (n) {
        Ja(n);
      }
  }, t;
}(), ws = function(t) {
  We(e, t);
  function e(n, r, i) {
    var a = t.call(this) || this, o;
    return At(n) || !n ? o = {
      next: n ?? void 0,
      error: r ?? void 0,
      complete: i ?? void 0
    } : o = n, a.destination = new D_(o), a;
  }
  return e;
}($s);
function Ja(t) {
  Jc(t);
}
function P_(t) {
  throw t;
}
var N_ = {
  closed: !0,
  next: su,
  error: P_,
  complete: su
}, el = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function Uo(t) {
  return t;
}
function H_(t) {
  return t.length === 0 ? Uo : t.length === 1 ? t[0] : function(n) {
    return t.reduce(function(r, i) {
      return i(r);
    }, n);
  };
}
var wn = function() {
  function t(e) {
    e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var n = new t();
    return n.source = this, n.operator = e, n;
  }, t.prototype.subscribe = function(e, n, r) {
    var i = this, a = k_(e) ? e : new ws(e, n, r);
    return ao(function() {
      var o = i, u = o.operator, l = o.source;
      a.add(u ? u.call(a, l) : l ? i._subscribe(a) : i._trySubscribe(a));
    }), a;
  }, t.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (n) {
      e.error(n);
    }
  }, t.prototype.forEach = function(e, n) {
    var r = this;
    return n = lu(n), new n(function(i, a) {
      var o = new ws({
        next: function(u) {
          try {
            e(u);
          } catch (l) {
            a(l), o.unsubscribe();
          }
        },
        error: a,
        complete: i
      });
      r.subscribe(o);
    });
  }, t.prototype._subscribe = function(e) {
    var n;
    return (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(e);
  }, t.prototype[el] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    return H_(e)(this);
  }, t.prototype.toPromise = function(e) {
    var n = this;
    return e = lu(e), new e(function(r, i) {
      var a;
      n.subscribe(function(o) {
        return a = o;
      }, function(o) {
        return i(o);
      }, function() {
        return r(a);
      });
    });
  }, t.create = function(e) {
    return new t(e);
  }, t;
}();
function lu(t) {
  var e;
  return (e = t ?? R_.Promise) !== null && e !== void 0 ? e : Promise;
}
function U_(t) {
  return t && At(t.next) && At(t.error) && At(t.complete);
}
function k_(t) {
  return t && t instanceof $s || U_(t) && Qc(t);
}
function B_(t) {
  return At(t == null ? void 0 : t.lift);
}
function er(t) {
  return function(e) {
    if (B_(e))
      return e.lift(function(n) {
        try {
          return t(n, this);
        } catch (r) {
          this.error(r);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function pr(t, e, n, r, i) {
  return new F_(t, e, n, r, i);
}
var F_ = function(t) {
  We(e, t);
  function e(n, r, i, a, o, u) {
    var l = t.call(this, n) || this;
    return l.onFinalize = o, l.shouldUnsubscribe = u, l._next = r ? function(c) {
      try {
        r(c);
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
    } : t.prototype._error, l._complete = i ? function() {
      try {
        i();
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
      var r = this.closed;
      t.prototype.unsubscribe.call(this), !r && ((n = this.onFinalize) === null || n === void 0 || n.call(this));
    }
  }, e;
}($s), V_ = Js(function(t) {
  return function() {
    t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), Ls = function(t) {
  We(e, t);
  function e() {
    var n = t.call(this) || this;
    return n.closed = !1, n.currentObservers = null, n.observers = [], n.isStopped = !1, n.hasError = !1, n.thrownError = null, n;
  }
  return e.prototype.lift = function(n) {
    var r = new uu(this, this);
    return r.operator = n, r;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new V_();
  }, e.prototype.next = function(n) {
    var r = this;
    ao(function() {
      var i, a;
      if (r._throwIfClosed(), !r.isStopped) {
        r.currentObservers || (r.currentObservers = Array.from(r.observers));
        try {
          for (var o = Ut(r.currentObservers), u = o.next(); !u.done; u = o.next()) {
            var l = u.value;
            l.next(n);
          }
        } catch (c) {
          i = { error: c };
        } finally {
          try {
            u && !u.done && (a = o.return) && a.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
      }
    });
  }, e.prototype.error = function(n) {
    var r = this;
    ao(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.hasError = r.isStopped = !0, r.thrownError = n;
        for (var i = r.observers; i.length; )
          i.shift().error(n);
      }
    });
  }, e.prototype.complete = function() {
    var n = this;
    ao(function() {
      if (n._throwIfClosed(), !n.isStopped) {
        n.isStopped = !0;
        for (var r = n.observers; r.length; )
          r.shift().complete();
      }
    });
  }, e.prototype.unsubscribe = function() {
    this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
  }, Object.defineProperty(e.prototype, "observed", {
    get: function() {
      var n;
      return ((n = this.observers) === null || n === void 0 ? void 0 : n.length) > 0;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype._trySubscribe = function(n) {
    return this._throwIfClosed(), t.prototype._trySubscribe.call(this, n);
  }, e.prototype._subscribe = function(n) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(n), this._innerSubscribe(n);
  }, e.prototype._innerSubscribe = function(n) {
    var r = this, i = this, a = i.hasError, o = i.isStopped, u = i.observers;
    return a || o ? Zc : (this.currentObservers = null, u.push(n), new ka(function() {
      r.currentObservers = null, Io(u, n);
    }));
  }, e.prototype._checkFinalizedStatuses = function(n) {
    var r = this, i = r.hasError, a = r.thrownError, o = r.isStopped;
    i ? n.error(a) : o && n.complete();
  }, e.prototype.asObservable = function() {
    var n = new wn();
    return n.source = this, n;
  }, e.create = function(n, r) {
    return new uu(n, r);
  }, e;
}(wn), uu = function(t) {
  We(e, t);
  function e(n, r) {
    var i = t.call(this) || this;
    return i.destination = n, i.source = r, i;
  }
  return e.prototype.next = function(n) {
    var r, i;
    (i = (r = this.destination) === null || r === void 0 ? void 0 : r.next) === null || i === void 0 || i.call(r, n);
  }, e.prototype.error = function(n) {
    var r, i;
    (i = (r = this.destination) === null || r === void 0 ? void 0 : r.error) === null || i === void 0 || i.call(r, n);
  }, e.prototype.complete = function() {
    var n, r;
    (r = (n = this.destination) === null || n === void 0 ? void 0 : n.complete) === null || r === void 0 || r.call(n);
  }, e.prototype._subscribe = function(n) {
    var r, i;
    return (i = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)) !== null && i !== void 0 ? i : Zc;
  }, e;
}(Ls), G_ = {
  now: function() {
    return Date.now();
  }
}, j_ = function(t) {
  We(e, t);
  function e(n, r) {
    return t.call(this) || this;
  }
  return e.prototype.schedule = function(n, r) {
    return this;
  }, e;
}(ka), cu = {
  setInterval: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setInterval.apply(void 0, Zn([t, e], gr(n)));
  },
  clearInterval: function(t) {
    return clearInterval(t);
  },
  delegate: void 0
}, W_ = function(t) {
  We(e, t);
  function e(n, r) {
    var i = t.call(this, n, r) || this;
    return i.scheduler = n, i.work = r, i.pending = !1, i;
  }
  return e.prototype.schedule = function(n, r) {
    var i;
    if (r === void 0 && (r = 0), this.closed)
      return this;
    this.state = n;
    var a = this.id, o = this.scheduler;
    return a != null && (this.id = this.recycleAsyncId(o, a, r)), this.pending = !0, this.delay = r, this.id = (i = this.id) !== null && i !== void 0 ? i : this.requestAsyncId(o, this.id, r), this;
  }, e.prototype.requestAsyncId = function(n, r, i) {
    return i === void 0 && (i = 0), cu.setInterval(n.flush.bind(n, this), i);
  }, e.prototype.recycleAsyncId = function(n, r, i) {
    if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === !1)
      return r;
    r != null && cu.clearInterval(r);
  }, e.prototype.execute = function(n, r) {
    if (this.closed)
      return new Error("executing a cancelled action");
    this.pending = !1;
    var i = this._execute(n, r);
    if (i)
      return i;
    this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }, e.prototype._execute = function(n, r) {
    var i = !1, a;
    try {
      this.work(n);
    } catch (o) {
      i = !0, a = o || new Error("Scheduled action threw falsy error");
    }
    if (i)
      return this.unsubscribe(), a;
  }, e.prototype.unsubscribe = function() {
    if (!this.closed) {
      var n = this, r = n.id, i = n.scheduler, a = i.actions;
      this.work = this.state = this.scheduler = null, this.pending = !1, Io(a, this), r != null && (this.id = this.recycleAsyncId(i, r, null)), this.delay = null, t.prototype.unsubscribe.call(this);
    }
  }, e;
}(j_), du = function() {
  function t(e, n) {
    n === void 0 && (n = t.now), this.schedulerActionCtor = e, this.now = n;
  }
  return t.prototype.schedule = function(e, n, r) {
    return n === void 0 && (n = 0), new this.schedulerActionCtor(this, e).schedule(r, n);
  }, t.now = G_.now, t;
}(), q_ = function(t) {
  We(e, t);
  function e(n, r) {
    r === void 0 && (r = du.now);
    var i = t.call(this, n, r) || this;
    return i.actions = [], i._active = !1, i;
  }
  return e.prototype.flush = function(n) {
    var r = this.actions;
    if (this._active) {
      r.push(n);
      return;
    }
    var i;
    this._active = !0;
    do
      if (i = n.execute(n.state, n.delay))
        break;
    while (n = r.shift());
    if (this._active = !1, i) {
      for (; n = r.shift(); )
        n.unsubscribe();
      throw i;
    }
  }, e;
}(du), z_ = new q_(W_);
function X_(t) {
  return t && At(t.schedule);
}
function $c(t) {
  return t[t.length - 1];
}
function ed(t) {
  return X_($c(t)) ? t.pop() : void 0;
}
function K_(t, e) {
  return typeof $c(t) == "number" ? t.pop() : e;
}
var td = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function nd(t) {
  return At(t == null ? void 0 : t.then);
}
function rd(t) {
  return At(t[el]);
}
function id(t) {
  return Symbol.asyncIterator && At(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function ad(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function Y_() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var od = Y_();
function sd(t) {
  return At(t == null ? void 0 : t[od]);
}
function ld(t) {
  return Ch(this, arguments, function() {
    var n, r, i, a;
    return Xs(this, function(o) {
      switch (o.label) {
        case 0:
          n = t.getReader(), o.label = 1;
        case 1:
          o.trys.push([1, , 9, 10]), o.label = 2;
        case 2:
          return [4, Di(n.read())];
        case 3:
          return r = o.sent(), i = r.value, a = r.done, a ? [4, Di(void 0)] : [3, 5];
        case 4:
          return [2, o.sent()];
        case 5:
          return [4, Di(i)];
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
function ud(t) {
  return At(t == null ? void 0 : t.getReader);
}
function na(t) {
  if (t instanceof wn)
    return t;
  if (t != null) {
    if (rd(t))
      return Z_(t);
    if (td(t))
      return Q_(t);
    if (nd(t))
      return J_(t);
    if (id(t))
      return cd(t);
    if (sd(t))
      return $_(t);
    if (ud(t))
      return ey(t);
  }
  throw ad(t);
}
function Z_(t) {
  return new wn(function(e) {
    var n = t[el]();
    if (At(n.subscribe))
      return n.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function Q_(t) {
  return new wn(function(e) {
    for (var n = 0; n < t.length && !e.closed; n++)
      e.next(t[n]);
    e.complete();
  });
}
function J_(t) {
  return new wn(function(e) {
    t.then(function(n) {
      e.closed || (e.next(n), e.complete());
    }, function(n) {
      return e.error(n);
    }).then(null, Jc);
  });
}
function $_(t) {
  return new wn(function(e) {
    var n, r;
    try {
      for (var i = Ut(t), a = i.next(); !a.done; a = i.next()) {
        var o = a.value;
        if (e.next(o), e.closed)
          return;
      }
    } catch (u) {
      n = { error: u };
    } finally {
      try {
        a && !a.done && (r = i.return) && r.call(i);
      } finally {
        if (n) throw n.error;
      }
    }
    e.complete();
  });
}
function cd(t) {
  return new wn(function(e) {
    ty(t, e).catch(function(n) {
      return e.error(n);
    });
  });
}
function ey(t) {
  return cd(ld(t));
}
function ty(t, e) {
  var n, r, i, a;
  return vc(this, void 0, void 0, function() {
    var o, u;
    return Xs(this, function(l) {
      switch (l.label) {
        case 0:
          l.trys.push([0, 5, 6, 11]), n = xh(t), l.label = 1;
        case 1:
          return [4, n.next()];
        case 2:
          if (r = l.sent(), !!r.done) return [3, 4];
          if (o = r.value, e.next(o), e.closed)
            return [2];
          l.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return u = l.sent(), i = { error: u }, [3, 11];
        case 6:
          return l.trys.push([6, , 9, 10]), r && !r.done && (a = n.return) ? [4, a.call(n)] : [3, 8];
        case 7:
          l.sent(), l.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (i) throw i.error;
          return [7];
        case 10:
          return [7];
        case 11:
          return e.complete(), [2];
      }
    });
  });
}
function ci(t, e, n, r, i) {
  r === void 0 && (r = 0), i === void 0 && (i = !1);
  var a = e.schedule(function() {
    n(), i ? t.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (t.add(a), !i)
    return a;
}
function dd(t, e) {
  return e === void 0 && (e = 0), er(function(n, r) {
    n.subscribe(pr(r, function(i) {
      return ci(r, t, function() {
        return r.next(i);
      }, e);
    }, function() {
      return ci(r, t, function() {
        return r.complete();
      }, e);
    }, function(i) {
      return ci(r, t, function() {
        return r.error(i);
      }, e);
    }));
  });
}
function fd(t, e) {
  return e === void 0 && (e = 0), er(function(n, r) {
    r.add(t.schedule(function() {
      return n.subscribe(r);
    }, e));
  });
}
function ny(t, e) {
  return na(t).pipe(fd(e), dd(e));
}
function ry(t, e) {
  return na(t).pipe(fd(e), dd(e));
}
function iy(t, e) {
  return new wn(function(n) {
    var r = 0;
    return e.schedule(function() {
      r === t.length ? n.complete() : (n.next(t[r++]), n.closed || this.schedule());
    });
  });
}
function ay(t, e) {
  return new wn(function(n) {
    var r;
    return ci(n, e, function() {
      r = t[od](), ci(n, e, function() {
        var i, a, o;
        try {
          i = r.next(), a = i.value, o = i.done;
        } catch (u) {
          n.error(u);
          return;
        }
        o ? n.complete() : n.next(a);
      }, 0, !0);
    }), function() {
      return At(r == null ? void 0 : r.return) && r.return();
    };
  });
}
function hd(t, e) {
  if (!t)
    throw new Error("Iterable cannot be null");
  return new wn(function(n) {
    ci(n, e, function() {
      var r = t[Symbol.asyncIterator]();
      ci(n, e, function() {
        r.next().then(function(i) {
          i.done ? n.complete() : n.next(i.value);
        });
      }, 0, !0);
    });
  });
}
function oy(t, e) {
  return hd(ld(t), e);
}
function sy(t, e) {
  if (t != null) {
    if (rd(t))
      return ny(t, e);
    if (td(t))
      return iy(t, e);
    if (nd(t))
      return ry(t, e);
    if (id(t))
      return hd(t, e);
    if (sd(t))
      return ay(t, e);
    if (ud(t))
      return oy(t, e);
  }
  throw ad(t);
}
function vd(t, e) {
  return e ? sy(t, e) : na(t);
}
function md() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = ed(t);
  return vd(t, n);
}
function Jt(t, e) {
  return er(function(n, r) {
    var i = 0;
    n.subscribe(pr(r, function(a) {
      r.next(t.call(e, a, i++));
    }));
  });
}
function ly(t, e, n, r, i, a, o, u) {
  var l = [], c = 0, d = 0, v = !1, f = function() {
    v && !l.length && !c && e.complete();
  }, m = function(g) {
    return c < r ? h(g) : l.push(g);
  }, h = function(g) {
    c++;
    var b = !1;
    na(n(g, d++)).subscribe(pr(e, function(y) {
      e.next(y);
    }, function() {
      b = !0;
    }, void 0, function() {
      if (b)
        try {
          c--;
          for (var y = function() {
            var S = l.shift();
            o || h(S);
          }; l.length && c < r; )
            y();
          f();
        } catch (S) {
          e.error(S);
        }
    }));
  };
  return t.subscribe(pr(e, m, function() {
    v = !0, f();
  })), function() {
  };
}
function Eo(t, e, n) {
  return n === void 0 && (n = 1 / 0), At(e) ? Eo(function(r, i) {
    return Jt(function(a, o) {
      return e(r, a, i, o);
    })(na(t(r, i)));
  }, n) : (typeof e == "number" && (n = e), er(function(r, i) {
    return ly(r, i, t, n);
  }));
}
function uy(t) {
  return t === void 0 && (t = 1 / 0), Eo(Uo, t);
}
function gd(t, e) {
  return At(e) ? Eo(t, e, 1) : Eo(t, 1);
}
function cy(t, e) {
  return e === void 0 && (e = z_), er(function(n, r) {
    var i = null, a = null, o = null, u = function() {
      if (i) {
        i.unsubscribe(), i = null;
        var c = a;
        a = null, r.next(c);
      }
    };
    function l() {
      var c = o + t, d = e.now();
      if (d < c) {
        i = this.schedule(void 0, c - d), r.add(i);
        return;
      }
      u();
    }
    n.subscribe(pr(r, function(c) {
      a = c, o = e.now(), i || (i = e.schedule(l, t), r.add(i));
    }, function() {
      u(), r.complete();
    }, void 0, function() {
      a = i = null;
    }));
  });
}
function dy(t, e) {
  return e === void 0 && (e = Uo), t = t ?? fy, er(function(n, r) {
    var i, a = !0;
    n.subscribe(pr(r, function(o) {
      var u = e(o);
      (a || !t(i, u)) && (a = !1, i = u, r.next(o));
    }));
  });
}
function fy(t, e) {
  return t === e;
}
function hy(t) {
  return er(function(e, n) {
    try {
      e.subscribe(n);
    } finally {
      n.add(t);
    }
  });
}
function vy() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = ed(t), r = K_(t, 1 / 0);
  return er(function(i, a) {
    uy(r)(vd(Zn([i], gr(t)), n)).subscribe(a);
  });
}
function my() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return vy.apply(void 0, Zn([], gr(t)));
}
function gy(t, e) {
  return er(function(n, r) {
    var i = null, a = 0, o = !1, u = function() {
      return o && !i && r.complete();
    };
    n.subscribe(pr(r, function(l) {
      i == null || i.unsubscribe();
      var c = 0, d = a++;
      na(t(l, d)).subscribe(i = pr(r, function(v) {
        return r.next(e ? e(l, v, d, c++) : v);
      }, function() {
        i = null, u();
      }));
    }, function() {
      o = !0, u();
    }));
  });
}
function fu(t, e, n) {
  var r = At(t) || e || n ? { next: t, error: e, complete: n } : t;
  return r ? er(function(i, a) {
    var o;
    (o = r.subscribe) === null || o === void 0 || o.call(r);
    var u = !0;
    i.subscribe(pr(a, function(l) {
      var c;
      (c = r.next) === null || c === void 0 || c.call(r, l), a.next(l);
    }, function() {
      var l;
      u = !1, (l = r.complete) === null || l === void 0 || l.call(r), a.complete();
    }, function(l) {
      var c;
      u = !1, (c = r.error) === null || c === void 0 || c.call(r, l), a.error(l);
    }, function() {
      var l, c;
      u && ((l = r.unsubscribe) === null || l === void 0 || l.call(r)), (c = r.finalize) === null || c === void 0 || c.call(r);
    }));
  }) : Uo;
}
function pd(t) {
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
var py = /* @__PURE__ */ function() {
  function t(e, n, r, i) {
    i === void 0 && (i = "download_load"), this.originalEvent = e, this.xhr = n, this.request = r, this.type = i;
    var a = n.status, o = n.responseType;
    this.status = a ?? 0, this.responseType = o ?? "";
    var u = n.getAllResponseHeaders();
    this.responseHeaders = u ? u.split(`
`).reduce(function(d, v) {
      var f = v.indexOf(": ");
      return d[v.slice(0, f)] = v.slice(f + 2), d;
    }, {}) : {}, this.response = pd(n);
    var l = e.loaded, c = e.total;
    this.loaded = l, this.total = c;
  }
  return t;
}(), So = Js(function(t) {
  return function(n, r, i) {
    this.message = n, this.name = "AjaxError", this.xhr = r, this.request = i, this.status = r.status, this.responseType = r.responseType;
    var a;
    try {
      a = pd(r);
    } catch {
      a = r.responseText;
    }
    this.response = a;
  };
}), by = function() {
  function t(e, n) {
    return So.call(this, "ajax timeout", e, n), this.name = "AjaxTimeoutError", this;
  }
  return t.prototype = Object.create(So.prototype), t;
}();
function _y(t, e) {
  return Wr({ method: "GET", url: t, headers: e });
}
function yy(t, e, n) {
  return Wr({ method: "POST", url: t, body: e, headers: n });
}
function Iy(t, e) {
  return Wr({ method: "DELETE", url: t, headers: e });
}
function Ey(t, e, n) {
  return Wr({ method: "PUT", url: t, body: e, headers: n });
}
function Sy(t, e, n) {
  return Wr({ method: "PATCH", url: t, body: e, headers: n });
}
var Ay = Jt(function(t) {
  return t.response;
});
function Cy(t, e) {
  return Ay(Wr({
    method: "GET",
    url: t,
    headers: e
  }));
}
var Wr = function() {
  var t = function(e) {
    var n = typeof e == "string" ? {
      url: e
    } : e;
    return Ty(n);
  };
  return t.get = _y, t.post = yy, t.delete = Iy, t.put = Ey, t.patch = Sy, t.getJSON = Cy, t;
}(), xy = "upload", hu = "download", is = "loadstart", as = "progress", vu = "load";
function Ty(t) {
  return new wn(function(e) {
    var n, r, i = le({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, t), a = i.queryParams, o = i.body, u = i.headers, l = i.url;
    if (!l)
      throw new TypeError("url is required");
    if (a) {
      var c;
      if (l.includes("?")) {
        var d = l.split("?");
        if (2 < d.length)
          throw new TypeError("invalid url");
        c = new URLSearchParams(d[1]), new URLSearchParams(a).forEach(function(U, z) {
          return c.set(z, U);
        }), l = d[0] + "?" + c;
      } else
        c = new URLSearchParams(a), l = l + "?" + c;
    }
    var v = {};
    if (u)
      for (var f in u)
        u.hasOwnProperty(f) && (v[f.toLowerCase()] = u[f]);
    var m = i.crossDomain;
    !m && !("x-requested-with" in v) && (v["x-requested-with"] = "XMLHttpRequest");
    var h = i.withCredentials, g = i.xsrfCookieName, b = i.xsrfHeaderName;
    if ((h || !m) && g && b) {
      var y = (r = (n = document == null ? void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + g + ")=([^;]*)"))) === null || n === void 0 ? void 0 : n.pop()) !== null && r !== void 0 ? r : "";
      y && (v[b] = y);
    }
    var S = wy(o, v), I = le(le({}, i), {
      url: l,
      headers: v,
      body: S
    }), _;
    _ = t.createXHR ? t.createXHR() : new XMLHttpRequest();
    {
      var E = t.progressSubscriber, x = t.includeDownloadProgress, w = x === void 0 ? !1 : x, C = t.includeUploadProgress, A = C === void 0 ? !1 : C, M = function(U, z) {
        _.addEventListener(U, function() {
          var J, P = z();
          (J = E == null ? void 0 : E.error) === null || J === void 0 || J.call(E, P), e.error(P);
        });
      };
      M("timeout", function() {
        return new by(_, I);
      }), M("abort", function() {
        return new So("aborted", _, I);
      });
      var G = function(U, z) {
        return new py(z, _, I, U + "_" + z.type);
      }, k = function(U, z, J) {
        U.addEventListener(z, function(P) {
          e.next(G(J, P));
        });
      };
      A && [is, as, vu].forEach(function(U) {
        return k(_.upload, U, xy);
      }), E && [is, as].forEach(function(U) {
        return _.upload.addEventListener(U, function(z) {
          var J;
          return (J = E == null ? void 0 : E.next) === null || J === void 0 ? void 0 : J.call(E, z);
        });
      }), w && [is, as].forEach(function(U) {
        return k(_, U, hu);
      });
      var j = function(U) {
        var z = "ajax error" + (U ? " " + U : "");
        e.error(new So(z, _, I));
      };
      _.addEventListener("error", function(U) {
        var z;
        (z = E == null ? void 0 : E.error) === null || z === void 0 || z.call(E, U), j();
      }), _.addEventListener(vu, function(U) {
        var z, J, P = _.status;
        if (P < 400) {
          (z = E == null ? void 0 : E.complete) === null || z === void 0 || z.call(E);
          var R = void 0;
          try {
            R = G(hu, U);
          } catch (W) {
            e.error(W);
            return;
          }
          e.next(R), e.complete();
        } else
          (J = E == null ? void 0 : E.error) === null || J === void 0 || J.call(E, U), j(P);
      });
    }
    var O = I.user, T = I.method, H = I.async;
    O ? _.open(T, l, H, O, I.password) : _.open(T, l, H), H && (_.timeout = I.timeout, _.responseType = I.responseType), "withCredentials" in _ && (_.withCredentials = I.withCredentials);
    for (var f in v)
      v.hasOwnProperty(f) && _.setRequestHeader(f, v[f]);
    return S ? _.send(S) : _.send(), function() {
      _ && _.readyState !== 4 && _.abort();
    };
  });
}
function wy(t, e) {
  var n;
  if (!t || typeof t == "string" || Py(t) || Ny(t) || Oy(t) || Ry(t) || My(t) || Hy(t))
    return t;
  if (Dy(t))
    return t.buffer;
  if (typeof t == "object")
    return e["content-type"] = (n = e["content-type"]) !== null && n !== void 0 ? n : "application/json;charset=utf-8", JSON.stringify(t);
  throw new TypeError("Unknown body type");
}
var Ly = Object.prototype.toString;
function tl(t, e) {
  return Ly.call(t) === "[object " + e + "]";
}
function Oy(t) {
  return tl(t, "ArrayBuffer");
}
function Ry(t) {
  return tl(t, "File");
}
function My(t) {
  return tl(t, "Blob");
}
function Dy(t) {
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView(t);
}
function Py(t) {
  return typeof FormData < "u" && t instanceof FormData;
}
function Ny(t) {
  return typeof URLSearchParams < "u" && t instanceof URLSearchParams;
}
function Hy(t) {
  return typeof ReadableStream < "u" && t instanceof ReadableStream;
}
let Uy = class {
  constructor(e, n, r) {
    this.url = e, this.variableConfiguration = n, this.description = r;
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
        const r = new RegExp("{" + n + "}", "g");
        e = e.replace(r, this.variableConfiguration[n]);
      }
    return e;
  }
};
const ky = new Uy("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), By = [ky], Fy = By[0].getUrl();
let bd = class {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? Fy;
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
}, Vy = class {
  constructor(e = new bd()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (n) => {
      const r = this.clone();
      return r.middleware = r.middleware.concat(n), r;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((r) => ({ pre: r }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((r) => ({ post: r }))), this.createRequestArgs = ({ url: n, query: r, method: i, headers: a, body: o, responseType: u }) => ({
      url: `${this.configuration.basePath}${n}${r && Object.keys(r).length ? `?${Gy(r)}` : ""}`,
      method: i,
      headers: a,
      body: o instanceof FormData ? o : JSON.stringify(o),
      responseType: u ?? "json"
    }), this.rxjsRequest = (n) => md(n).pipe(
      Jt((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      gd(
        (r) => Wr(r).pipe(
          Jt((i) => (this.middleware.filter((a) => a.post).forEach((a) => i = a.post(i)), i))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, n) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      Jt((r) => {
        const { status: i, response: a } = r;
        if (i >= 200 && i < 300)
          return (n == null ? void 0 : n.response) === "raw" ? r : a;
        throw r;
      })
    );
  }
};
const hr = (t) => encodeURIComponent(`${t}`), Gy = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((r) => `${hr(e)}=${hr(r)}`).join("&") : `${hr(e)}=${hr(n)}`
).join("&"), Ti = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class jy extends Vy {
  deleteAllSclFileVersions({ id: e, type: n }, r) {
    Ti(e, "id", "deleteAllSclFileVersions"), Ti(n, "type", "deleteAllSclFileVersions");
    const i = {};
    return this.request({
      url: "/scl/v1/{type}/{id}".replace("{id}", hr(e)).replace("{type}", hr(n)),
      method: "DELETE",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  retrieveDataResourceByVersion({ id: e, version: n }, r) {
    Ti(e, "id", "retrieveDataResourceByVersion"), Ti(n, "version", "retrieveDataResourceByVersion");
    const i = {};
    return this.request({
      url: "/api/scl/{id}/version/{version}".replace("{id}", hr(e)).replace("{version}", hr(n)),
      method: "GET",
      headers: i,
      responseType: "blob"
    }, r == null ? void 0 : r.responseOpts);
  }
  retrieveDataResourceHistory({ id: e }, n) {
    Ti(e, "id", "retrieveDataResourceHistory");
    const r = {};
    return this.request({
      url: "/api/scl/{id}/versions".replace("{id}", hr(e)),
      method: "GET",
      headers: r
    }, n == null ? void 0 : n.responseOpts);
  }
  searchForResources({ dataResourceSearch: e }, n) {
    Ti(e, "dataResourceSearch", "searchForResources");
    const r = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/scl/search",
      method: "POST",
      headers: r,
      body: e
    }, n == null ? void 0 : n.responseOpts);
  }
}
class nl {
  constructor(e, n, r, i, a, o, u, l, c) {
    ct(this, "uuid");
    ct(this, "name");
    ct(this, "author");
    ct(this, "type");
    ct(this, "changedAt");
    ct(this, "version");
    ct(this, "available");
    ct(this, "deleted");
    ct(this, "location");
    this.uuid = e, this.name = n, this.author = r, this.type = i, this.changedAt = a, this.version = o, this.available = u, this.deleted = l, this.location = c;
  }
  static from(e) {
    return new nl(
      e.uuid,
      e.name,
      e.author,
      e.type,
      e.changedAt,
      e.version,
      e.available,
      e.deleted,
      e.location
    );
  }
}
class Wy {
  constructor(e, n, r) {
    this.url = e, this.variableConfiguration = n, this.description = r;
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
        const r = new RegExp("{" + n + "}", "g");
        e = e.replace(r, this.variableConfiguration[n]);
      }
    return e;
  }
}
const qy = new Wy("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), zy = [qy], Xy = zy[0].getUrl();
class _d {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? Xy;
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
class Ky {
  constructor(e = new _d()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (n) => {
      const r = this.clone();
      return r.middleware = r.middleware.concat(n), r;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((r) => ({ pre: r }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((r) => ({ post: r }))), this.createRequestArgs = ({ url: n, query: r, method: i, headers: a, body: o, responseType: u }) => ({
      url: `${this.configuration.basePath}${n}${r && Object.keys(r).length ? `?${Yy(r)}` : ""}`,
      method: i,
      headers: a,
      body: o instanceof FormData ? o : JSON.stringify(o),
      responseType: u ?? "json"
    }), this.rxjsRequest = (n) => md(n).pipe(
      Jt((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      gd(
        (r) => Wr(r).pipe(
          Jt((i) => (this.middleware.filter((a) => a.post).forEach((a) => i = a.post(i)), i))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, n) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      Jt((r) => {
        const { status: i, response: a } = r;
        if (i >= 200 && i < 300)
          return (n == null ? void 0 : n.response) === "raw" ? r : a;
        throw r;
      })
    );
  }
}
const Pn = (t) => encodeURIComponent(`${t}`), Yy = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((r) => `${Pn(e)}=${Pn(r)}`).join("&") : `${Pn(e)}=${Pn(n)}`
).join("&"), lr = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class Zy extends Ky {
  assignResourceToLocation({ locationId: e, uuid: n }, r) {
    lr(e, "locationId", "assignResourceToLocation"), lr(n, "uuid", "assignResourceToLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/assign".replace("{locationId}", Pn(e)).replace("{uuid}", Pn(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  createLocation({ location: e }, n) {
    lr(e, "location", "createLocation");
    const r = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/locations",
      method: "POST",
      headers: r,
      body: e
    }, n == null ? void 0 : n.responseOpts);
  }
  deleteLocation({ locationId: e }, n) {
    lr(e, "locationId", "deleteLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", Pn(e)),
      method: "DELETE",
      headers: r
    }, n == null ? void 0 : n.responseOpts);
  }
  getLocation({ locationId: e }, n) {
    lr(e, "locationId", "getLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", Pn(e)),
      method: "GET",
      headers: r
    }, n == null ? void 0 : n.responseOpts);
  }
  getLocations({ page: e, pageSize: n }, r) {
    const i = {}, a = {};
    return e != null && (a.page = e), n != null && (a.pageSize = n), this.request({
      url: "/api/locations",
      method: "GET",
      headers: i,
      query: a
    }, r == null ? void 0 : r.responseOpts);
  }
  unassignResourceFromLocation({ locationId: e, uuid: n }, r) {
    lr(e, "locationId", "unassignResourceFromLocation"), lr(n, "uuid", "unassignResourceFromLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/unassign".replace("{locationId}", Pn(e)).replace("{uuid}", Pn(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  updateLocation({ locationId: e, location: n }, r) {
    lr(e, "locationId", "updateLocation"), lr(n, "location", "updateLocation");
    const i = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", Pn(e)),
      method: "PUT",
      headers: i,
      body: n
    }, r == null ? void 0 : r.responseOpts);
  }
}
class rl {
  constructor(e, n, r, i, a) {
    ct(this, "uuid");
    ct(this, "key");
    ct(this, "name");
    ct(this, "description");
    ct(this, "assignedResources");
    this.uuid = a, this.key = e, this.name = n, this.description = r, this.assignedResources = i;
  }
  static from(e) {
    return new rl(e.key, e.name, e.description, e.assignedResources, e.uuid);
  }
}
const $r = class $r {
  constructor() {
    ct(this, "endpoint", "/compas-scl-data-service");
    ct(this, "locationsApiClient");
    ct(this, "historyApiClient");
    this.locationsApiClient = this.createLocationsApiClient(this.endpoint), this.historyApiClient = this.createHistoryApiClient(this.endpoint);
  }
  static getInstance() {
    return $r.instance || ($r.instance = new $r()), $r.instance;
  }
  getLocations(e) {
    return this.locationsApiClient.getLocations({
      page: e == null ? void 0 : e.page,
      pageSize: e == null ? void 0 : e.pageSize
    }).pipe(
      Jt((n) => n || []),
      Jt((n) => n.map((r) => rl.from(r)))
    );
  }
  assignResourceToLocation(e, n) {
    return this.locationsApiClient.assignResourceToLocation({ locationId: e, uuid: n }).pipe(Jt(() => {
    }));
  }
  unassignResourceFromLocation(e, n) {
    return this.locationsApiClient.unassignResourceFromLocation({ locationId: e, uuid: n }).pipe(Jt(() => {
    }));
  }
  searchResources(e) {
    return this.historyApiClient.searchForResources({
      dataResourceSearch: this.mapToDataResourceSearch(e)
    }).pipe(
      Jt((n) => n.results),
      Jt(
        (n) => n.map((r) => nl.from(r))
      )
    );
  }
  mapToDataResourceSearch(e) {
    return {
      uuid: e.uuid || null,
      type: e.type || null,
      name: e.name || null,
      author: e.author || null,
      location: e.location || null,
      from: e.from || null,
      to: e.to || null
    };
  }
  createLocationsApiClient(e) {
    const n = new _d({
      basePath: e
      // accessToken: authInfo.token,
    });
    return new Zy(n);
  }
  createHistoryApiClient(e) {
    const n = new bd({
      basePath: e
      // accessToken: authInfo.token,
    });
    return new jy(n);
  }
};
ct($r, "instance");
let Os = $r;
var dr;
class Qy {
  constructor() {
    tt(this, dr, tn([]));
  }
  get store() {
    return ne(this, dr);
  }
  set(e) {
    ne(this, dr).set(e);
  }
  update(e) {
    ne(this, dr).update((n) => n.map((r) => r.uuid === e.uuid ? e : r));
  }
  add(e) {
    ne(this, dr).update((n) => [...n, e]);
  }
  remove(e) {
    ne(this, dr).update((n) => n.filter((r) => r.uuid !== e));
  }
  findById(e) {
    return fc(ne(this, dr)).find((n) => n.uuid === e);
  }
}
dr = new WeakMap();
var Jy = (t, e, n) => {
  var r;
  return (r = e.onChange) == null ? void 0 : r.call(e, e.row, s(n));
}, $y = /* @__PURE__ */ be("<option> </option>"), eI = /* @__PURE__ */ be(`<div style="min-width: 180px"><select><option>—</option><!></select> <style>select {
      width: 100%;
      min-width: 180px;
    }</style></div>`);
function tI(t, e) {
  xe(e, !0);
  let n = p(e, "locations", 19, () => []), r = /* @__PURE__ */ ve(ue(e.value ?? ""));
  Ce(() => {
    K(r, e.value ?? "", !0);
  }), Ce(() => {
    var l;
    s(r) !== (e.value ?? "") && ((l = e.onChange) == null || l.call(e, e.row, s(r)));
  });
  var i = eI(), a = me(i);
  a.__change = [Jy, e, r];
  var o = me(a);
  o.value = o.__value = "";
  var u = Ie(o);
  Hn(u, 17, n, (l) => l.value, (l, c) => {
    var d = $y(), v = me(d), f = {};
    Oe(() => {
      st(v, s(c).label), f !== (f = s(c).value) && (d.value = (d.__value = s(c).value) ?? "");
    }), L(l, d);
  }), Xf(a, () => s(r), (l) => K(r, l)), L(t, i), Te();
}
hn(["change"]);
tm({ en: Rm, de: gm });
var nI = /* @__PURE__ */ be('<div class="app-container svelte-1lw4l1e"><!> <!></div> <!>', 1);
function rI(t, e) {
  xe(e, !0);
  const n = () => Yn(em, "$_", r), [r, i] = yr(), a = Os.getInstance();
  let o = /* @__PURE__ */ ve(ue([])), u = "", l = /* @__PURE__ */ ve(!0), c = /* @__PURE__ */ ve("");
  const d = new Ls(), f = new Ls().pipe(my(d.pipe(cy(200)))).pipe(
    Jt(() => y(s(m))),
    dy((A, M) => JSON.stringify(A) === JSON.stringify(M)),
    fu(() => {
      K(l, !0);
    }),
    gy((A) => a.searchResources(A).pipe(
      fu((M) => {
        h.set(M.filter((G) => G.location !== u && G.deleted === !1));
      }),
      hy(() => {
        K(l, !1);
      })
    ))
  );
  it(() => {
    const A = f.subscribe();
    return a.getLocations().subscribe({
      next: (M) => {
        K(o, M.map((G) => ({ label: G.name, value: G.uuid })), !0), K(m, s(
          m
          // populate location filter options
        ).map((G) => G.key === "location" ? { ...G, options: s(o) } : G), !0);
      },
      error: (M) => {
        console.error("Error loading locations:", M), Ea.error("Failed to load locations.");
      }
    }), d.next(), () => A.unsubscribe();
  });
  let m = /* @__PURE__ */ ve(ue([
    {
      key: "type",
      label: "Type",
      type: "select",
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
    { key: "author", label: "Author", type: "text" },
    { key: "from", label: "Date from", type: "date" },
    { key: "to", label: "Date to", type: "date" },
    { key: "location", label: "Location", type: "select" }
  ]));
  const h = new Qy();
  function g(A) {
    return new Date(A).toLocaleDateString();
  }
  function b(A) {
    var M;
    return !s(o) || !A ? A || "" : ((M = s(o).find((G) => G.value === A)) == null ? void 0 : M.label) ?? A;
  }
  function y(A) {
    const M = {
      uuid: null,
      type: null,
      name: null,
      location: null,
      author: null,
      from: null,
      to: null
    };
    return A.forEach((G) => {
      if (G.value) {
        if (G.type === "date") {
          const k = new Date(G.value);
          G.key === "from" && (M.from = k.toISOString()), G.key === "to" && (k.setHours(23, 59, 59, 999), M.to = k.toISOString());
          return;
        }
        G.key in M && (M[G.key] = G.value);
      }
    }), s(c) && s(c).trim() !== "" && (M.name = s(c).trim()), M;
  }
  function S(A, M) {
    const G = A.location, k = M || null;
    if (G === k)
      return;
    const j = { ...A, location: k };
    h.update(j), (k ? a.assignResourceToLocation(k, A.uuid) : a.unassignResourceFromLocation(G ?? "", A.uuid)).subscribe({
      next: () => {
        d.next(), Ea.success("Resource location updated successfully.");
      },
      error: () => {
        Ea.error("Failed to update resource location.");
        const T = { ...A, location: G };
        h.update(T);
      }
    });
  }
  let I = /* @__PURE__ */ fe(() => [
    {
      headerName: n()("name"),
      field: "name",
      numeric: !1,
      filter: !1,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: n()("author"),
      field: "author",
      numeric: !1,
      filter: !1,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: n()("type"),
      field: "type",
      numeric: !1,
      filter: !1,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: n()("location"),
      field: "location",
      numeric: !1,
      filter: !1,
      filterType: "text",
      sortable: !0,
      cellRenderer: tI,
      cellRendererProps: {
        locations: s(o),
        onChange: S
      },
      filterValueGetter: (A) => b(A.location)
    },
    {
      headerName: n()("version"),
      field: "version",
      numeric: !1,
      filter: !1,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: n()("changed_at"),
      field: "changedAt",
      numeric: !1,
      filter: !1,
      filterType: "text",
      sortable: !0,
      valueFormatter: g
    }
  ]);
  Ce(() => {
  });
  var _ = nI(), E = Q(_), x = me(E);
  b_(x, {
    searchLabel: "Search name...",
    onFilterChange: () => d.next(null),
    onSearchInput: () => d.next(null),
    get filters() {
      return s(m);
    },
    set filters(A) {
      K(m, A, !0);
    },
    get searchText() {
      return s(c);
    },
    set searchText(A) {
      K(c, A, !0);
    }
  });
  var w = Ie(x, 2);
  {
    let A = /* @__PURE__ */ fe(() => !s(l)), M = /* @__PURE__ */ fe(() => n()("search"));
    O_(w, {
      get columnDefs() {
        return s(I);
      },
      get loadingDone() {
        return s(A);
      },
      get store() {
        return h;
      },
      get searchInputLabel() {
        return s(M);
      }
    });
  }
  var C = Ie(E, 2);
  Db(C, {}), L(t, _), Te(), i();
}
const yd = "location-viewer", Id = "0.0.1";
var iI = /* @__PURE__ */ be('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function aI(t, e) {
  xe(e, !0);
  let n = p(e, "dev", 3, !1);
  var r = iI(), i = Q(r);
  {
    var a = (l) => {
      rI(l, {});
    };
    oe(i, (l) => {
      (e.doc || n()) && l(a);
    });
  }
  var o = Ie(i, 2), u = Ie(o, 2);
  Oe(() => {
    El(o, yd), El(u, Id);
  }), L(t, r), Te();
}
var Fi;
class hI extends HTMLElement {
  constructor() {
    super();
    tt(this, Fi);
    ct(this, "_doc");
    ct(this, "_editCount");
    He(this, Fi, /* @__PURE__ */ ve(ue({ doc: void 0, editCount: void 0 })));
  }
  get props() {
    return s(ne(this, Fi));
  }
  set props(n) {
    K(ne(this, Fi), n, !0);
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.props.doc = this._doc, this.props.editCount = this._editCount;
    const n = oI();
    this.shadowRoot.appendChild(n);
    const r = () => Uf(aI, { target: this.shadowRoot, props: this.props });
    n.addEventListener("load", r, { once: !0 }), n.addEventListener("error", r, { once: !0 });
  }
  set doc(n) {
    this._doc = n, this.props.doc = n;
  }
  set editCount(n) {
    this._editCount = n, this.props.editCount = n;
  }
}
Fi = new WeakMap();
function oI() {
  const t = `${yd}-v${Id}-style`, e = sI(), n = document.createElement("link");
  return n.rel = "stylesheet", n.type = "text/css", n.href = e, n.id = t, n;
}
function sI() {
  const t = new URL(import.meta.url), e = t.origin, n = t.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, n, "style.css"].filter(Boolean).join("/");
}
export {
  hI as default
};
