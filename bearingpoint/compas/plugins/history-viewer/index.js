var yd = Object.defineProperty;
var $s = (t) => {
  throw TypeError(t);
};
var Id = (t, e, n) => e in t ? yd(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var pi = (t, e, n) => Id(t, typeof e != "symbol" ? e + "" : e, n), Ro = (t, e, n) => e.has(t) || $s("Cannot " + n);
var ie = (t, e, n) => (Ro(t, e, "read from private field"), n ? n.call(t) : e.get(t)), Je = (t, e, n) => e.has(t) ? $s("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), He = (t, e, n, r) => (Ro(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), Kt = (t, e, n) => (Ro(t, e, "access private method"), n);
const Ut = Symbol(), _d = "http://www.w3.org/1999/xhtml", Ed = "http://www.w3.org/2000/svg", Cd = "@attach", vu = !1;
var ho = Array.isArray, Ad = Array.prototype.indexOf, Cs = Array.from, Qa = Object.defineProperty, Er = Object.getOwnPropertyDescriptor, mu = Object.getOwnPropertyDescriptors, Sd = Object.prototype, xd = Array.prototype, As = Object.getPrototypeOf, el = Object.isExtensible;
function ra(t) {
  return typeof t == "function";
}
const pe = () => {
};
function pu(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function gu() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
const rn = 2, Ss = 4, xs = 8, ai = 16, ar = 32, oi = 64, Ts = 128, xn = 256, Ja = 512, Yt = 1024, gn = 2048, Tr = 4096, Pn = 8192, si = 16384, Ls = 32768, li = 65536, tl = 1 << 17, Td = 1 << 18, zi = 1 << 19, Ld = 1 << 20, Jo = 1 << 21, vo = 1 << 22, Jr = 1 << 23, Wn = Symbol("$state"), bu = Symbol("legacy props"), Od = Symbol(""), _i = new class extends Error {
  constructor() {
    super(...arguments);
    pi(this, "name", "StaleReactionError");
    pi(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Os(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function wd() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Rd(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Md() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Dd(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Pd() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Nd(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Fd() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Hd() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ud() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Bd() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function kd() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Vd() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let Gd = !1;
function yu(t) {
  return t === this.v;
}
function ws(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Iu(t) {
  return !ws(t, this.v);
}
let Xi = !1, jd = !1;
function Wd() {
  Xi = !0;
}
let ct = null;
function Fi(t) {
  ct = t;
}
function ue(t) {
  return (
    /** @type {T} */
    _u().get(t)
  );
}
function te(t, e) {
  return _u().set(t, e), e;
}
function we(t, e = !1, n) {
  ct = {
    p: ct,
    c: null,
    e: null,
    s: t,
    x: null,
    l: Xi && !e ? { s: null, u: null, $: [] } : null
  };
}
function Re(t) {
  var e = (
    /** @type {ComponentContext} */
    ct
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      Fu(r);
  }
  return t !== void 0 && (e.x = t), ct = e.p, t ?? /** @type {T} */
  {};
}
function xa() {
  return !Xi || ct !== null && ct.l === null;
}
function _u(t) {
  return ct === null && Os(), ct.c ?? (ct.c = new Map(qd(ct) || void 0));
}
function qd(t) {
  let e = t.p;
  for (; e !== null; ) {
    const n = e.c;
    if (n !== null)
      return n;
    e = e.p;
  }
  return null;
}
let Wr = [];
function Eu() {
  var t = Wr;
  Wr = [], pu(t);
}
function xr(t) {
  if (Wr.length === 0 && !pa) {
    var e = Wr;
    queueMicrotask(() => {
      e === Wr && Eu();
    });
  }
  Wr.push(t);
}
function Kd() {
  for (; Wr.length > 0; )
    Eu();
}
const zd = /* @__PURE__ */ new WeakMap();
function Cu(t) {
  var e = Ke;
  if (e === null)
    return je.f |= Jr, t;
  if (e.f & Ls)
    Hi(t, e);
  else {
    if (!(e.f & Ts))
      throw !e.parent && t instanceof Error && Au(t), t;
    e.b.error(t);
  }
}
function Hi(t, e) {
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
  throw t instanceof Error && Au(t), t;
}
function Au(t) {
  const e = zd.get(t);
  e && (Qa(t, "message", {
    value: e.message
  }), Qa(t, "stack", {
    value: e.stack
  }));
}
const Na = /* @__PURE__ */ new Set();
let st = null, Wa = null, kt = null, $o = /* @__PURE__ */ new Set(), Gn = [], mo = null, es = !1, pa = !1;
var wi, Ri, zr, Ca, Mi, Di, Xr, Pi, Aa, Sa, Tn, ts, qa, ns;
const uo = class uo {
  constructor() {
    Je(this, Tn);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    pi(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    Je(this, wi, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    Je(this, Ri, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    Je(this, zr, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    Je(this, Ca, null);
    /**
     * Async effects inside a newly-created `<svelte:boundary>`
     * — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    Je(this, Mi, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    Je(this, Di, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    Je(this, Xr, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    Je(this, Pi, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    Je(this, Aa, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    Je(this, Sa, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    pi(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var a;
    Gn = [], Wa = null, this.apply();
    for (const o of e)
      Kt(this, Tn, ts).call(this, o);
    if (ie(this, zr) === 0) {
      var n = kt;
      Kt(this, Tn, ns).call(this);
      var r = ie(this, Di), i = ie(this, Xr);
      He(this, Di, []), He(this, Xr, []), He(this, Pi, []), Wa = this, st = null, kt = n, nl(r), nl(i), Wa = null, (a = ie(this, Ca)) == null || a.resolve();
    } else
      Kt(this, Tn, qa).call(this, ie(this, Di)), Kt(this, Tn, qa).call(this, ie(this, Xr)), Kt(this, Tn, qa).call(this, ie(this, Pi));
    kt = null;
    for (const o of ie(this, Mi))
      ya(o);
    He(this, Mi, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    ie(this, wi).has(e) || ie(this, wi).set(e, n), this.current.set(e, e.v), kt == null || kt.set(e, e.v);
  }
  activate() {
    st = this;
  }
  deactivate() {
    st = null, kt = null;
  }
  flush() {
    if (Gn.length > 0) {
      if (this.activate(), Su(), st !== null && st !== this)
        return;
    } else ie(this, zr) === 0 && Kt(this, Tn, ns).call(this);
    this.deactivate();
    for (const e of $o)
      if ($o.delete(e), e(), st !== null)
        break;
  }
  increment() {
    He(this, zr, ie(this, zr) + 1);
  }
  decrement() {
    He(this, zr, ie(this, zr) - 1);
    for (const e of ie(this, Aa))
      tn(e, gn), ni(e);
    for (const e of ie(this, Sa))
      tn(e, Tr), ni(e);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    ie(this, Ri).add(e);
  }
  settled() {
    return (ie(this, Ca) ?? He(this, Ca, gu())).promise;
  }
  static ensure() {
    if (st === null) {
      const e = st = new uo();
      Na.add(st), pa || uo.enqueue(() => {
        st === e && e.flush();
      });
    }
    return st;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    xr(e);
  }
  apply() {
  }
};
wi = new WeakMap(), Ri = new WeakMap(), zr = new WeakMap(), Ca = new WeakMap(), Mi = new WeakMap(), Di = new WeakMap(), Xr = new WeakMap(), Pi = new WeakMap(), Aa = new WeakMap(), Sa = new WeakMap(), Tn = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
ts = function(e) {
  var c;
  e.f ^= Yt;
  for (var n = e.first; n !== null; ) {
    var r = n.f, i = (r & (ar | oi)) !== 0, a = i && (r & Yt) !== 0, o = a || (r & Pn) !== 0 || this.skipped_effects.has(n);
    if (!o && n.fn !== null) {
      i ? n.f ^= Yt : r & Ss ? ie(this, Xr).push(n) : r & Yt || (r & vo && ((c = n.b) != null && c.is_pending()) ? ie(this, Mi).push(n) : _o(n) && (n.f & ai && ie(this, Pi).push(n), ya(n)));
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
    (n.f & gn ? ie(this, Aa) : ie(this, Sa)).push(n), tn(n, Yt);
  e.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
ns = function() {
  var e;
  for (const n of ie(this, Ri))
    n();
  if (ie(this, Ri).clear(), Na.size > 1) {
    ie(this, wi).clear();
    let n = !0;
    for (const r of Na) {
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
          xu(o, a);
        if (Gn.length > 0) {
          st = r, r.apply();
          for (const o of Gn)
            Kt(e = r, Tn, ts).call(e, o);
          Gn = [], r.deactivate();
        }
      }
    }
    st = null;
  }
  Na.delete(this);
};
let rr = uo;
function Xd(t) {
  var e = pa;
  pa = !0;
  try {
    for (var n; ; ) {
      if (Kd(), Gn.length === 0 && (st == null || st.flush(), Gn.length === 0))
        return mo = null, /** @type {T} */
        n;
      Su();
    }
  } finally {
    pa = e;
  }
}
function Su() {
  var t = Ti;
  es = !0;
  try {
    var e = 0;
    for (al(!0); Gn.length > 0; ) {
      var n = rr.ensure();
      if (e++ > 1e3) {
        var r, i;
        Yd();
      }
      n.process(Gn), Cr.clear();
    }
  } finally {
    es = !1, al(t), mo = null;
  }
}
function Yd() {
  try {
    Pd();
  } catch (t) {
    Hi(t, mo);
  }
}
let tr = null;
function nl(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if (!(r.f & (si | Pn)) && _o(r) && (tr = [], ya(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Bu(r) : r.fn = null), (tr == null ? void 0 : tr.length) > 0)) {
        Cr.clear();
        for (const i of tr)
          ya(i);
        tr = [];
      }
    }
    tr = null;
  }
}
function xu(t, e) {
  if (t.reactions !== null)
    for (const n of t.reactions) {
      const r = n.f;
      r & rn ? xu(
        /** @type {Derived} */
        n,
        e
      ) : r & (vo | ai) && Tu(n, e) && (tn(n, gn), ni(
        /** @type {Effect} */
        n
      ));
    }
}
function Tu(t, e) {
  if (t.deps !== null) {
    for (const n of t.deps)
      if (e.includes(n) || n.f & rn && Tu(
        /** @type {Derived} */
        n,
        e
      ))
        return !0;
  }
  return !1;
}
function ni(t) {
  for (var e = mo = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (es && e === Ke && n & ai)
      return;
    if (n & (oi | ar)) {
      if (!(n & Yt)) return;
      e.f ^= Yt;
    }
  }
  Gn.push(e);
}
function Zd(t) {
  let e = 0, n = ri(0), r;
  return () => {
    mf() && (s(n), yo(() => (e === 0 && (r = wr(() => t(() => ga(n)))), e += 1, () => {
      xr(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, ga(n));
      });
    })));
  };
}
var Qd = li | zi | Ts;
function Jd(t, e, n) {
  new $d(t, e, n);
}
var Rn, An, Es, Bn, Yr, kn, Sn, un, Vn, pr, Zr, gr, Qr, br, co, fo, nn, ef, tf, Ka, za, rs;
class $d {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    Je(this, nn);
    /** @type {Boundary | null} */
    pi(this, "parent");
    Je(this, Rn, !1);
    /** @type {TemplateNode} */
    Je(this, An);
    /** @type {TemplateNode | null} */
    Je(this, Es, null);
    /** @type {BoundaryProps} */
    Je(this, Bn);
    /** @type {((anchor: Node) => void)} */
    Je(this, Yr);
    /** @type {Effect} */
    Je(this, kn);
    /** @type {Effect | null} */
    Je(this, Sn, null);
    /** @type {Effect | null} */
    Je(this, un, null);
    /** @type {Effect | null} */
    Je(this, Vn, null);
    /** @type {DocumentFragment | null} */
    Je(this, pr, null);
    Je(this, Zr, 0);
    Je(this, gr, 0);
    Je(this, Qr, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    Je(this, br, null);
    Je(this, co, () => {
      ie(this, br) && Ui(ie(this, br), ie(this, Zr));
    });
    Je(this, fo, Zd(() => (He(this, br, ri(ie(this, Zr))), () => {
      He(this, br, null);
    })));
    He(this, An, e), He(this, Bn, n), He(this, Yr, r), this.parent = /** @type {Effect} */
    Ke.b, He(this, Rn, !!ie(this, Bn).pending), He(this, kn, Or(() => {
      Ke.b = this;
      {
        try {
          He(this, Sn, zt(() => r(ie(this, An))));
        } catch (i) {
          this.error(i);
        }
        ie(this, gr) > 0 ? Kt(this, nn, za).call(this) : He(this, Rn, !1);
      }
    }, Qd));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return ie(this, Rn) || !!this.parent && this.parent.is_pending();
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
    Kt(this, nn, rs).call(this, e), He(this, Zr, ie(this, Zr) + e), $o.add(ie(this, co));
  }
  get_effect_pending() {
    return ie(this, fo).call(this), s(
      /** @type {Source<number>} */
      ie(this, br)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = ie(this, Bn).onerror;
    let r = ie(this, Bn).failed;
    if (ie(this, Qr) || !n && !r)
      throw e;
    ie(this, Sn) && (jt(ie(this, Sn)), He(this, Sn, null)), ie(this, un) && (jt(ie(this, un)), He(this, un, null)), ie(this, Vn) && (jt(ie(this, Vn)), He(this, Vn, null));
    var i = !1, a = !1;
    const o = () => {
      if (i) {
        Vd();
        return;
      }
      i = !0, a && Bd(), rr.ensure(), He(this, Zr, 0), ie(this, Vn) !== null && Ar(ie(this, Vn), () => {
        He(this, Vn, null);
      }), He(this, Rn, this.has_pending_snippet()), He(this, Sn, Kt(this, nn, Ka).call(this, () => (He(this, Qr, !1), zt(() => ie(this, Yr).call(this, ie(this, An)))))), ie(this, gr) > 0 ? Kt(this, nn, za).call(this) : He(this, Rn, !1);
    };
    var u = je;
    try {
      cn(null), a = !0, n == null || n(e, o), a = !1;
    } catch (l) {
      Hi(l, ie(this, kn) && ie(this, kn).parent);
    } finally {
      cn(u);
    }
    r && xr(() => {
      He(this, Vn, Kt(this, nn, Ka).call(this, () => {
        He(this, Qr, !0);
        try {
          return zt(() => {
            r(
              ie(this, An),
              () => e,
              () => o
            );
          });
        } catch (l) {
          return Hi(
            l,
            /** @type {Effect} */
            ie(this, kn).parent
          ), null;
        } finally {
          He(this, Qr, !1);
        }
      }));
    });
  }
}
Rn = new WeakMap(), An = new WeakMap(), Es = new WeakMap(), Bn = new WeakMap(), Yr = new WeakMap(), kn = new WeakMap(), Sn = new WeakMap(), un = new WeakMap(), Vn = new WeakMap(), pr = new WeakMap(), Zr = new WeakMap(), gr = new WeakMap(), Qr = new WeakMap(), br = new WeakMap(), co = new WeakMap(), fo = new WeakMap(), nn = new WeakSet(), ef = function() {
  try {
    He(this, Sn, zt(() => ie(this, Yr).call(this, ie(this, An))));
  } catch (e) {
    this.error(e);
  }
  He(this, Rn, !1);
}, tf = function() {
  const e = ie(this, Bn).pending;
  e && (He(this, un, zt(() => e(ie(this, An)))), rr.enqueue(() => {
    He(this, Sn, Kt(this, nn, Ka).call(this, () => (rr.ensure(), zt(() => ie(this, Yr).call(this, ie(this, An)))))), ie(this, gr) > 0 ? Kt(this, nn, za).call(this) : (Ar(
      /** @type {Effect} */
      ie(this, un),
      () => {
        He(this, un, null);
      }
    ), He(this, Rn, !1));
  }));
}, /**
 * @param {() => Effect | null} fn
 */
Ka = function(e) {
  var n = Ke, r = je, i = ct;
  qn(ie(this, kn)), cn(ie(this, kn)), Fi(ie(this, kn).ctx);
  try {
    return e();
  } catch (a) {
    return Cu(a), null;
  } finally {
    qn(n), cn(r), Fi(i);
  }
}, za = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    ie(this, Bn).pending
  );
  ie(this, Sn) !== null && (He(this, pr, document.createDocumentFragment()), nf(ie(this, Sn), ie(this, pr))), ie(this, un) === null && He(this, un, zt(() => e(ie(this, An))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
rs = function(e) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && Kt(n = this.parent, nn, rs).call(n, e);
    return;
  }
  He(this, gr, ie(this, gr) + e), ie(this, gr) === 0 && (He(this, Rn, !1), ie(this, un) && Ar(ie(this, un), () => {
    He(this, un, null);
  }), ie(this, pr) && (ie(this, An).before(ie(this, pr)), He(this, pr, null)), xr(() => {
    rr.ensure().flush();
  }));
};
function nf(t, e) {
  for (var n = t.nodes_start, r = t.nodes_end; n !== null; ) {
    var i = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ta(n)
    );
    e.append(n), n = i;
  }
}
function Lu(t, e, n) {
  const r = xa() ? po : Rs;
  if (e.length === 0) {
    n(t.map(r));
    return;
  }
  var i = st, a = (
    /** @type {Effect} */
    Ke
  ), o = rf();
  Promise.all(e.map((u) => /* @__PURE__ */ af(u))).then((u) => {
    o();
    try {
      n([...t.map(r), ...u]);
    } catch (l) {
      a.f & si || Hi(l, a);
    }
    i == null || i.deactivate(), is();
  }).catch((u) => {
    Hi(u, a);
  });
}
function rf() {
  var t = Ke, e = je, n = ct, r = st;
  return function() {
    qn(t), cn(e), Fi(n), r == null || r.activate();
  };
}
function is() {
  qn(null), cn(null), Fi(null);
}
// @__NO_SIDE_EFFECTS__
function po(t) {
  var e = rn | gn, n = je !== null && je.f & rn ? (
    /** @type {Derived} */
    je
  ) : null;
  return Ke === null || n !== null && n.f & xn ? e |= xn : Ke.f |= zi, {
    ctx: ct,
    deps: null,
    effects: null,
    equals: yu,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Ut
    ),
    wv: 0,
    parent: n ?? Ke,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function af(t, e) {
  let n = (
    /** @type {Effect | null} */
    Ke
  );
  n === null && wd();
  var r = (
    /** @type {Boundary} */
    n.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = ri(
    /** @type {V} */
    Ut
  ), o = !je, u = /* @__PURE__ */ new Map();
  return gf(() => {
    var f;
    var l = gu();
    i = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(is);
    } catch (v) {
      l.reject(v), is();
    }
    var c = (
      /** @type {Batch} */
      st
    ), d = r.is_pending();
    o && (r.update_pending_count(1), d || (c.increment(), (f = u.get(c)) == null || f.reject(_i), u.delete(c), u.set(c, l)));
    const h = (v, p = void 0) => {
      if (d || c.activate(), p)
        p !== _i && (a.f |= Jr, Ui(a, p));
      else {
        a.f & Jr && (a.f ^= Jr), Ui(a, v);
        for (const [b, _] of u) {
          if (u.delete(b), b === c) break;
          _.reject(_i);
        }
      }
      o && (r.update_pending_count(-1), d || c.decrement());
    };
    l.promise.then(h, (v) => h(null, v || "unknown"));
  }), bo(() => {
    for (const l of u.values())
      l.reject(_i);
  }), new Promise((l) => {
    function c(d) {
      function h() {
        d === i ? l(a) : c(i);
      }
      d.then(h, h);
    }
    c(i);
  });
}
// @__NO_SIDE_EFFECTS__
function me(t) {
  const e = /* @__PURE__ */ po(t);
  return Gu(e), e;
}
// @__NO_SIDE_EFFECTS__
function Rs(t) {
  const e = /* @__PURE__ */ po(t);
  return e.equals = Iu, e;
}
function Ou(t) {
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
function of(t) {
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
function Ms(t) {
  var e, n = Ke;
  qn(of(t));
  try {
    Ou(t), e = Ku(t);
  } finally {
    qn(n);
  }
  return e;
}
function wu(t) {
  var e = Ms(t);
  if (t.equals(e) || (t.v = e, t.wv = Wu()), !ui)
    if (kt !== null)
      kt.set(t, t.v);
    else {
      var n = (Ir || t.f & xn) && t.deps !== null ? Tr : Yt;
      tn(t, n);
    }
}
const Cr = /* @__PURE__ */ new Map();
function ri(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: yu,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function Ee(t, e) {
  const n = ri(t);
  return Gu(n), n;
}
// @__NO_SIDE_EFFECTS__
function Ru(t, e = !1, n = !0) {
  var i;
  const r = ri(t);
  return e || (r.equals = Iu), Xi && n && ct !== null && ct.l !== null && ((i = ct.l).s ?? (i.s = [])).push(r), r;
}
function $(t, e, n = !1) {
  je !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Mn || je.f & tl) && xa() && je.f & (rn | ai | vo | tl) && !(en != null && en.includes(t)) && Ud();
  let r = n ? Ce(e) : e;
  return Ui(t, r);
}
function Ui(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    ui ? Cr.set(t, e) : Cr.set(t, n), t.v = e;
    var r = rr.ensure();
    r.capture(t, n), t.f & rn && (t.f & gn && Ms(
      /** @type {Derived} */
      t
    ), tn(t, t.f & xn ? Tr : Yt)), t.wv = Wu(), Mu(t, gn), xa() && Ke !== null && Ke.f & Yt && !(Ke.f & (ar | oi)) && (Cn === null ? If([t]) : Cn.push(t));
  }
  return e;
}
function ga(t) {
  $(t, t.v + 1);
}
function Mu(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = xa(), i = n.length, a = 0; a < i; a++) {
      var o = n[a], u = o.f;
      if (!(!r && o === Ke)) {
        var l = (u & gn) === 0;
        l && tn(o, e), u & rn ? Mu(
          /** @type {Derived} */
          o,
          Tr
        ) : l && (u & ai && tr !== null && tr.push(
          /** @type {Effect} */
          o
        ), ni(
          /** @type {Effect} */
          o
        ));
      }
    }
}
function Ce(t) {
  if (typeof t != "object" || t === null || Wn in t)
    return t;
  const e = As(t);
  if (e !== Sd && e !== xd)
    return t;
  var n = /* @__PURE__ */ new Map(), r = ho(t), i = /* @__PURE__ */ Ee(0), a = $r, o = (u) => {
    if ($r === a)
      return u();
    var l = je, c = $r;
    cn(null), sl(a);
    var d = u();
    return cn(l), sl(c), d;
  };
  return r && n.set("length", /* @__PURE__ */ Ee(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(u, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Fd();
        var d = n.get(l);
        return d === void 0 ? d = o(() => {
          var h = /* @__PURE__ */ Ee(c.value);
          return n.set(l, h), h;
        }) : $(d, c.value, !0), !0;
      },
      deleteProperty(u, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in u) {
            const d = o(() => /* @__PURE__ */ Ee(Ut));
            n.set(l, d), ga(i);
          }
        } else
          $(c, Ut), ga(i);
        return !0;
      },
      get(u, l, c) {
        var v;
        if (l === Wn)
          return t;
        var d = n.get(l), h = l in u;
        if (d === void 0 && (!h || (v = Er(u, l)) != null && v.writable) && (d = o(() => {
          var p = Ce(h ? u[l] : Ut), b = /* @__PURE__ */ Ee(p);
          return b;
        }), n.set(l, d)), d !== void 0) {
          var f = s(d);
          return f === Ut ? void 0 : f;
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
          if (h !== void 0 && f !== Ut)
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
        var c = n.get(l), d = c !== void 0 && c.v !== Ut || Reflect.has(u, l);
        if (c !== void 0 || Ke !== null && (!d || (f = Er(u, l)) != null && f.writable)) {
          c === void 0 && (c = o(() => {
            var v = d ? Ce(u[l]) : Ut, p = /* @__PURE__ */ Ee(v);
            return p;
          }), n.set(l, c));
          var h = s(c);
          if (h === Ut)
            return !1;
        }
        return d;
      },
      set(u, l, c, d) {
        var S;
        var h = n.get(l), f = l in u;
        if (r && l === "length")
          for (var v = c; v < /** @type {Source<number>} */
          h.v; v += 1) {
            var p = n.get(v + "");
            p !== void 0 ? $(p, Ut) : v in u && (p = o(() => /* @__PURE__ */ Ee(Ut)), n.set(v + "", p));
          }
        if (h === void 0)
          (!f || (S = Er(u, l)) != null && S.writable) && (h = o(() => /* @__PURE__ */ Ee(void 0)), $(h, Ce(c)), n.set(l, h));
        else {
          f = h.v !== Ut;
          var b = o(() => Ce(c));
          $(h, b);
        }
        var _ = Reflect.getOwnPropertyDescriptor(u, l);
        if (_ != null && _.set && _.set.call(d, c), !f) {
          if (r && typeof l == "string") {
            var C = (
              /** @type {Source<number>} */
              n.get("length")
            ), x = Number(l);
            Number.isInteger(x) && x >= C.v && $(C, x + 1);
          }
          ga(i);
        }
        return !0;
      },
      ownKeys(u) {
        s(i);
        var l = Reflect.ownKeys(u).filter((h) => {
          var f = n.get(h);
          return f === void 0 || f.v !== Ut;
        });
        for (var [c, d] of n)
          d.v !== Ut && !(c in u) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        Hd();
      }
    }
  );
}
function rl(t) {
  try {
    if (t !== null && typeof t == "object" && Wn in t)
      return t[Wn];
  } catch {
  }
  return t;
}
function sf(t, e) {
  return Object.is(rl(t), rl(e));
}
var $a, Ds, Du, Pu, Nu;
function lf() {
  if ($a === void 0) {
    $a = window, Ds = document, Du = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    Pu = Er(e, "firstChild").get, Nu = Er(e, "nextSibling").get, el(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), el(n) && (n.__t = void 0);
  }
}
function Lr(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Bi(t) {
  return Pu.call(t);
}
// @__NO_SIDE_EFFECTS__
function Ta(t) {
  return Nu.call(t);
}
function Ie(t, e) {
  return /* @__PURE__ */ Bi(t);
}
function J(t, e = !1) {
  {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Bi(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Ta(n) : n;
  }
}
function _e(t, e = 1, n = !1) {
  let r = t;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ta(r);
  return r;
}
function uf(t) {
  t.textContent = "";
}
function Ps() {
  return !1;
}
function cf(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, xr(() => {
      document.activeElement === n && t.focus();
    });
  }
}
let il = !1;
function df() {
  il || (il = !0, document.addEventListener(
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
  var e = je, n = Ke;
  cn(null), qn(null);
  try {
    return t();
  } finally {
    cn(e), qn(n);
  }
}
function ff(t, e, n, r = n) {
  t.addEventListener(e, () => go(n));
  const i = t.__on_r;
  i ? t.__on_r = () => {
    i(), r(!0);
  } : t.__on_r = () => r(!0), df();
}
function hf(t) {
  Ke === null && je === null && Dd(), je !== null && je.f & xn && Ke === null && Md(), ui && Rd();
}
function vf(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function or(t, e, n, r = !0) {
  var i = Ke;
  i !== null && i.f & Pn && (t |= Pn);
  var a = {
    ctx: ct,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | gn,
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
      ya(a), a.f |= Ls;
    } catch (l) {
      throw jt(a), l;
    }
  else e !== null && ni(a);
  if (r) {
    var o = a;
    if (n && o.deps === null && o.teardown === null && o.nodes_start === null && o.first === o.last && // either `null`, or a singular child
    !(o.f & zi) && (o = o.first), o !== null && (o.parent = i, i !== null && vf(o, i), je !== null && je.f & rn && !(t & oi))) {
      var u = (
        /** @type {Derived} */
        je
      );
      (u.effects ?? (u.effects = [])).push(o);
    }
  }
  return a;
}
function mf() {
  return je !== null && !Mn;
}
function bo(t) {
  const e = or(xs, null, !1);
  return tn(e, Yt), e.teardown = t, e;
}
function Se(t) {
  hf();
  var e = (
    /** @type {Effect} */
    Ke.f
  ), n = !je && (e & ar) !== 0 && (e & Ls) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      ct
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return Fu(t);
}
function Fu(t) {
  return or(Ss | Ld, t, !1);
}
function pf(t) {
  rr.ensure();
  const e = or(oi | zi, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Ar(e, () => {
      jt(e), r(void 0);
    }) : (jt(e), r(void 0));
  });
}
function La(t) {
  return or(Ss, t, !1);
}
function gf(t) {
  return or(vo | zi, t, !0);
}
function yo(t, e = 0) {
  return or(xs | e, t, !0);
}
function ke(t, e = [], n = []) {
  Lu(e, n, (r) => {
    or(xs, () => t(...r.map(s)), !0);
  });
}
function Or(t, e = 0) {
  var n = or(ai | e, t, !0);
  return n;
}
function zt(t, e = !0) {
  return or(ar | zi, t, !0, e);
}
function Hu(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = ui, r = je;
    ol(!0), cn(null);
    try {
      e.call(null);
    } finally {
      ol(n), cn(r);
    }
  }
}
function Uu(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && go(() => {
      i.abort(_i);
    });
    var r = n.next;
    n.f & oi ? n.parent = null : jt(n, e), n = r;
  }
}
function bf(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    e.f & ar || jt(e), e = n;
  }
}
function jt(t, e = !0) {
  var n = !1;
  (e || t.f & Td) && t.nodes_start !== null && t.nodes_end !== null && (yf(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), Uu(t, e && !n), eo(t, 0), tn(t, si);
  var r = t.transitions;
  if (r !== null)
    for (const a of r)
      a.stop();
  Hu(t);
  var i = t.parent;
  i !== null && i.first !== null && Bu(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function yf(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ta(t)
    );
    t.remove(), t = n;
  }
}
function Bu(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Ar(t, e) {
  var n = [];
  Ns(t, n, !0), ku(n, () => {
    jt(t), e && e();
  });
}
function ku(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var i of t)
      i.out(r);
  } else
    e();
}
function Ns(t, e, n) {
  if (!(t.f & Pn)) {
    if (t.f ^= Pn, t.transitions !== null)
      for (const o of t.transitions)
        (o.is_global || n) && e.push(o);
    for (var r = t.first; r !== null; ) {
      var i = r.next, a = (r.f & li) !== 0 || (r.f & ar) !== 0;
      Ns(r, e, a ? n : !1), r = i;
    }
  }
}
function Io(t) {
  Vu(t, !0);
}
function Vu(t, e) {
  if (t.f & Pn) {
    t.f ^= Pn, t.f & Yt || (tn(t, gn), ni(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & li) !== 0 || (n.f & ar) !== 0;
      Vu(n, i ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || e) && a.in();
  }
}
let Ti = !1;
function al(t) {
  Ti = t;
}
let ui = !1;
function ol(t) {
  ui = t;
}
let je = null, Mn = !1;
function cn(t) {
  je = t;
}
let Ke = null;
function qn(t) {
  Ke = t;
}
let en = null;
function Gu(t) {
  je !== null && (en === null ? en = [t] : en.push(t));
}
let $t = null, mn = 0, Cn = null;
function If(t) {
  Cn = t;
}
let ju = 1, ba = 0, $r = ba;
function sl(t) {
  $r = t;
}
let Ir = !1;
function Wu() {
  return ++ju;
}
function _o(t) {
  var h;
  var e = t.f;
  if (e & gn)
    return !0;
  if (e & Tr) {
    var n = t.deps, r = (e & xn) !== 0;
    if (n !== null) {
      var i, a, o = (e & Ja) !== 0, u = r && Ke !== null && !Ir, l = n.length;
      if ((o || u) && (Ke === null || !(Ke.f & si))) {
        var c = (
          /** @type {Derived} */
          t
        ), d = c.parent;
        for (i = 0; i < l; i++)
          a = n[i], (o || !((h = a == null ? void 0 : a.reactions) != null && h.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        o && (c.f ^= Ja), u && d !== null && !(d.f & xn) && (c.f ^= xn);
      }
      for (i = 0; i < l; i++)
        if (a = n[i], _o(
          /** @type {Derived} */
          a
        ) && wu(
          /** @type {Derived} */
          a
        ), a.wv > t.wv)
          return !0;
    }
    (!r || Ke !== null && !Ir) && tn(t, Yt);
  }
  return !1;
}
function qu(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !(en != null && en.includes(t)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a.f & rn ? qu(
        /** @type {Derived} */
        a,
        e,
        !1
      ) : e === a && (n ? tn(a, gn) : a.f & Yt && tn(a, Tr), ni(
        /** @type {Effect} */
        a
      ));
    }
}
function Ku(t) {
  var b;
  var e = $t, n = mn, r = Cn, i = je, a = Ir, o = en, u = ct, l = Mn, c = $r, d = t.f;
  $t = /** @type {null | Value[]} */
  null, mn = 0, Cn = null, Ir = (d & xn) !== 0 && (Mn || !Ti || je === null), je = d & (ar | oi) ? null : t, en = null, Fi(t.ctx), Mn = !1, $r = ++ba, t.ac !== null && (go(() => {
    t.ac.abort(_i);
  }), t.ac = null);
  try {
    t.f |= Jo;
    var h = (
      /** @type {Function} */
      t.fn
    ), f = h(), v = t.deps;
    if ($t !== null) {
      var p;
      if (eo(t, mn), v !== null && mn > 0)
        for (v.length = mn + $t.length, p = 0; p < $t.length; p++)
          v[mn + p] = $t[p];
      else
        t.deps = v = $t;
      if (!Ir || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      d & rn && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (p = mn; p < v.length; p++)
          ((b = v[p]).reactions ?? (b.reactions = [])).push(t);
    } else v !== null && mn < v.length && (eo(t, mn), v.length = mn);
    if (xa() && Cn !== null && !Mn && v !== null && !(t.f & (rn | Tr | gn)))
      for (p = 0; p < /** @type {Source[]} */
      Cn.length; p++)
        qu(
          Cn[p],
          /** @type {Effect} */
          t
        );
    return i !== null && i !== t && (ba++, Cn !== null && (r === null ? r = Cn : r.push(.../** @type {Source[]} */
    Cn))), t.f & Jr && (t.f ^= Jr), f;
  } catch (_) {
    return Cu(_);
  } finally {
    t.f ^= Jo, $t = e, mn = n, Cn = r, je = i, Ir = a, en = o, Fi(u), Mn = l, $r = c;
  }
}
function _f(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = Ad.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && e.f & rn && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  ($t === null || !$t.includes(e)) && (tn(e, Tr), e.f & (xn | Ja) || (e.f ^= Ja), Ou(
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
    for (var r = e; r < n.length; r++)
      _f(t, n[r]);
}
function ya(t) {
  var e = t.f;
  if (!(e & si)) {
    tn(t, Yt);
    var n = Ke, r = Ti;
    Ke = t, Ti = !0;
    try {
      e & ai ? bf(t) : Uu(t), Hu(t);
      var i = Ku(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = ju;
      var a;
      vu && jd && t.f & gn && t.deps;
    } finally {
      Ti = r, Ke = n;
    }
  }
}
async function Eo() {
  await Promise.resolve(), Xd();
}
function s(t) {
  var e = t.f, n = (e & rn) !== 0;
  if (je !== null && !Mn) {
    var r = Ke !== null && (Ke.f & si) !== 0;
    if (!r && !(en != null && en.includes(t))) {
      var i = je.deps;
      if (je.f & Jo)
        t.rv < ba && (t.rv = ba, $t === null && i !== null && i[mn] === t ? mn++ : $t === null ? $t = [t] : (!Ir || !$t.includes(t)) && $t.push(t));
      else {
        (je.deps ?? (je.deps = [])).push(t);
        var a = t.reactions;
        a === null ? t.reactions = [je] : a.includes(je) || a.push(je);
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
  if (ui) {
    if (Cr.has(t))
      return Cr.get(t);
    if (n) {
      o = /** @type {Derived} */
      t;
      var l = o.v;
      return (!(o.f & Yt) && o.reactions !== null || zu(o)) && (l = Ms(o)), Cr.set(o, l), l;
    }
  } else if (n) {
    if (o = /** @type {Derived} */
    t, kt != null && kt.has(o))
      return kt.get(o);
    _o(o) && wu(o);
  }
  if (kt != null && kt.has(t))
    return kt.get(t);
  if (t.f & Jr)
    throw t.v;
  return t.v;
}
function zu(t) {
  if (t.v === Ut) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (Cr.has(e) || e.f & rn && zu(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function wr(t) {
  var e = Mn;
  try {
    return Mn = !0, t();
  } finally {
    Mn = e;
  }
}
const Ef = -7169;
function tn(t, e) {
  t.f = t.f & Ef | e;
}
function Cf(t) {
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
    for (let r in t)
      try {
        as(t[r], e);
      } catch {
      }
    const n = As(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = mu(n);
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
const Xu = /* @__PURE__ */ new Set(), os = /* @__PURE__ */ new Set();
function Fs(t, e, n, r = {}) {
  function i(a) {
    if (r.capture || fa.call(e, a), !a.cancelBubble)
      return go(() => n == null ? void 0 : n.call(this, a));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? xr(() => {
    e.addEventListener(t, i, r);
  }) : e.addEventListener(t, i, r), i;
}
function Af(t, e, n, r = {}) {
  var i = Fs(e, t, n, r);
  return () => {
    t.removeEventListener(e, i, r);
  };
}
function qr(t, e, n, r, i) {
  var a = { capture: r, passive: i }, o = Fs(t, e, n, a);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && bo(() => {
    e.removeEventListener(t, o, a);
  });
}
function Rr(t) {
  for (var e = 0; e < t.length; e++)
    Xu.add(t[e]);
  for (var n of os)
    n(t);
}
let ll = null;
function fa(t) {
  var x;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = ((x = t.composedPath) == null ? void 0 : x.call(t)) || [], a = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  ll = t;
  var o = 0, u = ll === t && t.__root;
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
    Qa(t, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var d = je, h = Ke;
    cn(null), qn(null);
    try {
      for (var f, v = []; a !== null; ) {
        var p = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var b = a["__" + r];
          if (b != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === a))
            if (ho(b)) {
              var [_, ...C] = b;
              _.apply(a, [t, ...C]);
            } else
              b.call(a, t);
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
      t.__root = e, delete t.currentTarget, cn(d), qn(h);
    }
  }
}
function Yu(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function ki(t, e) {
  var n = (
    /** @type {Effect} */
    Ke
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function ge(t, e) {
  var n = (e & 1) !== 0, r = (e & 2) !== 0, i, a = !t.startsWith("<!>");
  return () => {
    i === void 0 && (i = Yu(a ? t : "<!>" + t), n || (i = /** @type {Node} */
    /* @__PURE__ */ Bi(i)));
    var o = (
      /** @type {TemplateNode} */
      r || Du ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Bi(o)
      ), l = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      ki(u, l);
    } else
      ki(o, o);
    return o;
  };
}
// @__NO_SIDE_EFFECTS__
function Sf(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, a;
  return () => {
    if (!a) {
      var o = (
        /** @type {DocumentFragment} */
        Yu(i)
      ), u = (
        /** @type {Element} */
        /* @__PURE__ */ Bi(o)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ Bi(u);
    }
    var l = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return ki(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function dn(t, e) {
  return /* @__PURE__ */ Sf(t, e, "svg");
}
function Vt(t = "") {
  {
    var e = Lr(t + "");
    return ki(e, e), e;
  }
}
function oe() {
  var t = document.createDocumentFragment(), e = document.createComment(""), n = Lr();
  return t.append(e, n), ki(e, n), t;
}
function O(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function xf(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const Tf = [
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
function Lf(t) {
  return Tf.includes(t);
}
const Of = {
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
function wf(t) {
  return t = t.toLowerCase(), Of[t] ?? t;
}
const Rf = ["touchstart", "touchmove"];
function Mf(t) {
  return Rf.includes(t);
}
function ft(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function Df(t, e) {
  return Pf(t, e);
}
const gi = /* @__PURE__ */ new Map();
function Pf(t, { target: e, anchor: n, props: r = {}, events: i, context: a, intro: o = !0 }) {
  lf();
  var u = /* @__PURE__ */ new Set(), l = (h) => {
    for (var f = 0; f < h.length; f++) {
      var v = h[f];
      if (!u.has(v)) {
        u.add(v);
        var p = Mf(v);
        e.addEventListener(v, fa, { passive: p });
        var b = gi.get(v);
        b === void 0 ? (document.addEventListener(v, fa, { passive: p }), gi.set(v, 1)) : gi.set(v, b + 1);
      }
    }
  };
  l(Cs(Xu)), os.add(l);
  var c = void 0, d = pf(() => {
    var h = n ?? e.appendChild(Lr());
    return Jd(
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
            ct
          );
          v.c = a;
        }
        i && (r.$$events = i), c = t(f, r) || {}, a && Re();
      }
    ), () => {
      var p;
      for (var f of u) {
        e.removeEventListener(f, fa);
        var v = (
          /** @type {number} */
          gi.get(f)
        );
        --v === 0 ? (document.removeEventListener(f, fa), gi.delete(f)) : gi.set(f, v);
      }
      os.delete(l), h !== n && ((p = h.parentNode) == null || p.removeChild(h));
    };
  });
  return Nf.set(c, d), c;
}
let Nf = /* @__PURE__ */ new WeakMap();
function ye(t, e, ...n) {
  var r = t, i = pe, a;
  Or(() => {
    i !== (i = e()) && (a && (jt(a), a = null), a = zt(() => (
      /** @type {SnippetFn} */
      i(r, ...n)
    )));
  }, li);
}
function ut(t) {
  ct === null && Os(), Xi && ct.l !== null ? Ff(ct).m.push(t) : Se(() => {
    const e = wr(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Ln(t) {
  ct === null && Os(), ut(() => () => wr(t));
}
function Ff(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
function he(t, e, n = !1) {
  var r = t, i = null, a = null, o = Ut, u = n ? li : 0, l = !1;
  const c = (v, p = !0) => {
    l = !0, f(p, v);
  };
  var d = null;
  function h() {
    d !== null && (d.lastChild.remove(), r.before(d), d = null);
    var v = o ? i : a, p = o ? a : i;
    v && Io(v), p && Ar(p, () => {
      o ? a = null : i = null;
    });
  }
  const f = (v, p) => {
    if (o !== (o = v)) {
      var b = Ps(), _ = r;
      if (b && (d = document.createDocumentFragment(), d.append(_ = Lr())), o ? i ?? (i = p && zt(() => p(_))) : a ?? (a = p && zt(() => p(_))), b) {
        var C = (
          /** @type {Batch} */
          st
        ), x = o ? i : a, S = o ? a : i;
        x && C.skipped_effects.delete(x), S && C.skipped_effects.add(S), C.add_callback(h);
      } else
        h();
    }
  };
  Or(() => {
    l = !1, e(c), l || f(null, null);
  }, u);
}
function Xa(t, e) {
  return e;
}
function Hf(t, e, n) {
  for (var r = t.items, i = [], a = e.length, o = 0; o < a; o++)
    Ns(e[o].e, i, !0);
  var u = a > 0 && i.length === 0 && n !== null;
  if (u) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    uf(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), Un(t, e[0].prev, e[a - 1].next);
  }
  ku(i, () => {
    for (var c = 0; c < a; c++) {
      var d = e[c];
      u || (r.delete(d.k), Un(t, d.prev, d.next)), jt(d.e, !u);
    }
  });
}
function Ei(t, e, n, r, i, a = null) {
  var o = t, u = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, l = (e & 4) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      t
    );
    o = c.appendChild(Lr());
  }
  var d = null, h = !1, f = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ Rs(() => {
    var C = n();
    return ho(C) ? C : C == null ? [] : Cs(C);
  }), p, b;
  function _() {
    Uf(
      b,
      p,
      u,
      f,
      o,
      i,
      e,
      r,
      n
    ), a !== null && (p.length === 0 ? d ? Io(d) : d = zt(() => a(o)) : d !== null && Ar(d, () => {
      d = null;
    }));
  }
  Or(() => {
    b ?? (b = /** @type {Effect} */
    Ke), p = /** @type {V[]} */
    s(v);
    var C = p.length;
    if (!(h && C === 0)) {
      h = C === 0;
      var x, S, g, E;
      if (Ps()) {
        var I = /* @__PURE__ */ new Set(), T = (
          /** @type {Batch} */
          st
        );
        for (S = 0; S < C; S += 1) {
          g = p[S], E = r(g, S);
          var A = u.items.get(E) ?? f.get(E);
          A ? e & 3 && Zu(A, g, S, e) : (x = Qu(
            null,
            u,
            null,
            null,
            g,
            E,
            S,
            i,
            e,
            n,
            !0
          ), f.set(E, x)), I.add(E);
        }
        for (const [w, k] of u.items)
          I.has(w) || T.skipped_effects.add(k.e);
        T.add_callback(_);
      } else
        _();
      s(v);
    }
  });
}
function Uf(t, e, n, r, i, a, o, u, l) {
  var ae, B, y, L;
  var c = (o & 8) !== 0, d = (o & 3) !== 0, h = e.length, f = n.items, v = n.first, p = v, b, _ = null, C, x = [], S = [], g, E, I, T;
  if (c)
    for (T = 0; T < h; T += 1)
      g = e[T], E = u(g, T), I = f.get(E), I !== void 0 && ((ae = I.a) == null || ae.measure(), (C ?? (C = /* @__PURE__ */ new Set())).add(I));
  for (T = 0; T < h; T += 1) {
    if (g = e[T], E = u(g, T), I = f.get(E), I === void 0) {
      var A = r.get(E);
      if (A !== void 0) {
        r.delete(E), f.set(E, A);
        var w = _ ? _.next : p;
        Un(n, _, A), Un(n, A, w), Mo(A, w, i), _ = A;
      } else {
        var k = p ? (
          /** @type {TemplateNode} */
          p.e.nodes_start
        ) : i;
        _ = Qu(
          k,
          n,
          _,
          _ === null ? n.first : _.next,
          g,
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
    if (d && Zu(I, g, T, o), I.e.f & Pn && (Io(I.e), c && ((B = I.a) == null || B.unfix(), (C ?? (C = /* @__PURE__ */ new Set())).delete(I))), I !== p) {
      if (b !== void 0 && b.has(I)) {
        if (x.length < S.length) {
          var Z = S[0], G;
          _ = Z.prev;
          var j = x[0], K = x[x.length - 1];
          for (G = 0; G < x.length; G += 1)
            Mo(x[G], Z, i);
          for (G = 0; G < S.length; G += 1)
            b.delete(S[G]);
          Un(n, j.prev, K.next), Un(n, _, j), Un(n, K, Z), p = Z, _ = K, T -= 1, x = [], S = [];
        } else
          b.delete(I), Mo(I, p, i), Un(n, I.prev, I.next), Un(n, I, _ === null ? n.first : _.next), Un(n, _, I), _ = I;
        continue;
      }
      for (x = [], S = []; p !== null && p.k !== E; )
        p.e.f & Pn || (b ?? (b = /* @__PURE__ */ new Set())).add(p), S.push(p), p = p.next;
      if (p === null)
        continue;
      I = p;
    }
    x.push(I), _ = I, p = I.next;
  }
  if (p !== null || b !== void 0) {
    for (var U = b === void 0 ? [] : Cs(b); p !== null; )
      p.e.f & Pn || U.push(p), p = p.next;
    var N = U.length;
    if (N > 0) {
      var M = o & 4 && h === 0 ? i : null;
      if (c) {
        for (T = 0; T < N; T += 1)
          (y = U[T].a) == null || y.measure();
        for (T = 0; T < N; T += 1)
          (L = U[T].a) == null || L.fix();
      }
      Hf(n, U, M);
    }
  }
  c && xr(() => {
    var ee;
    if (C !== void 0)
      for (I of C)
        (ee = I.a) == null || ee.apply();
  }), t.first = n.first && n.first.e, t.last = _ && _.e;
  for (var z of r.values())
    jt(z.e);
  r.clear();
}
function Zu(t, e, n, r) {
  r & 1 && Ui(t.v, e), r & 2 ? Ui(
    /** @type {Value<number>} */
    t.i,
    n
  ) : t.i = n;
}
function Qu(t, e, n, r, i, a, o, u, l, c, d) {
  var h = (l & 1) !== 0, f = (l & 16) === 0, v = h ? f ? /* @__PURE__ */ Ru(i, !1, !1) : ri(i) : i, p = l & 2 ? ri(o) : o, b = {
    i: p,
    v,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  try {
    if (t === null) {
      var _ = document.createDocumentFragment();
      _.append(t = Lr());
    }
    return b.e = zt(() => u(
      /** @type {Node} */
      t,
      v,
      p,
      c
    ), Gd), b.e.prev = n && n.e, b.e.next = r && r.e, n === null ? d || (e.first = b) : (n.next = b, n.e.next = b.e), r !== null && (r.prev = b, r.e.prev = b.e), b;
  } finally {
  }
}
function Mo(t, e, n) {
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
      /* @__PURE__ */ Ta(a)
    );
    i.before(a), a = o;
  }
}
function Un(t, e, n) {
  e === null ? t.first = n : (e.next = n, e.e.next = n && n.e), n !== null && (n.prev = e, n.e.prev = e && e.e);
}
function sr(t, e, n) {
  var r = t, i, a, o = null, u = null;
  function l() {
    a && (Ar(a), a = null), o && (o.lastChild.remove(), r.before(o), o = null), a = u, u = null;
  }
  Or(() => {
    if (i !== (i = e())) {
      var c = Ps();
      if (i) {
        var d = r;
        c && (o = document.createDocumentFragment(), o.append(d = Lr()), a && st.skipped_effects.add(a)), u = zt(() => n(d, i));
      }
      c ? st.add_callback(l) : l();
    }
  }, li);
}
function ul(t, e, n, r, i, a) {
  var o, u, l = null, c = (
    /** @type {TemplateNode} */
    t
  ), d;
  Or(() => {
    const h = e() || null;
    var f = h === "svg" ? Ed : null;
    h !== o && (d && (h === null ? Ar(d, () => {
      d = null, u = null;
    }) : h === u ? Io(d) : jt(d)), h && h !== u && (d = zt(() => {
      if (l = f ? document.createElementNS(f, h) : document.createElement(h), ki(l, l), r) {
        var v = (
          /** @type {TemplateNode} */
          l.appendChild(Lr())
        );
        r(l, v);
      }
      Ke.nodes_end = l, c.before(l);
    })), o = h, o && (u = o));
  }, li);
}
function Be(t, e, n) {
  La(() => {
    var r = wr(() => e(t, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      yo(() => {
        var o = n();
        Cf(o), i && ws(a, o) && (a = o, r.update(o));
      }), i = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Bf(t, e) {
  var n = void 0, r;
  Or(() => {
    n !== (n = e()) && (r && (jt(r), r = null), n && (r = zt(() => {
      La(() => (
        /** @type {(node: Element) => void} */
        n(t)
      ));
    })));
  });
}
function Ju(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var i = t.length;
    for (e = 0; e < i; e++) t[e] && (n = Ju(t[e])) && (r && (r += " "), r += n);
  } else for (n in t) t[n] && (r && (r += " "), r += n);
  return r;
}
function kf() {
  for (var t, e, n = 0, r = "", i = arguments.length; n < i; n++) (t = arguments[n]) && (e = Ju(t)) && (r && (r += " "), r += e);
  return r;
}
function $u(t) {
  return typeof t == "object" ? kf(t) : t ?? "";
}
const cl = [...` 	
\r\f \v\uFEFF`];
function Vf(t, e, n) {
  var r = t == null ? "" : "" + t;
  if (n) {
    for (var i in n)
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0; ) {
          var u = o + a;
          (o === 0 || cl.includes(r[o - 1])) && (u === r.length || cl.includes(r[u])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(u + 1) : o = u;
        }
  }
  return r === "" ? null : r;
}
function dl(t, e = !1) {
  var n = e ? " !important;" : ";", r = "";
  for (var i in t) {
    var a = t[i];
    a != null && a !== "" && (r += " " + i + ": " + a + n);
  }
  return r;
}
function Do(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function Gf(t, e) {
  if (e) {
    var n = "", r, i;
    if (Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, o = 0, u = !1, l = [];
      r && l.push(...Object.keys(r).map(Do)), i && l.push(...Object.keys(i).map(Do));
      var c = 0, d = -1;
      const b = t.length;
      for (var h = 0; h < b; h++) {
        var f = t[h];
        if (u ? f === "/" && t[h - 1] === "*" && (u = !1) : a ? a === f && (a = !1) : f === "/" && t[h + 1] === "*" ? u = !0 : f === '"' || f === "'" ? a = f : f === "(" ? o++ : f === ")" && o--, !u && a === !1 && o === 0) {
          if (f === ":" && d === -1)
            d = h;
          else if (f === ";" || h === b - 1) {
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
    return r && (n += dl(r)), i && (n += dl(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function ec(t, e, n, r, i, a) {
  var o = t.__className;
  if (o !== n || o === void 0) {
    var u = Vf(n, r, a);
    u == null ? t.removeAttribute("class") : e ? t.className = u : t.setAttribute("class", u), t.__className = n;
  } else if (a && i !== a)
    for (var l in a) {
      var c = !!a[l];
      (i == null || c !== !!i[l]) && t.classList.toggle(l, c);
    }
  return a;
}
function Po(t, e = {}, n, r) {
  for (var i in n) {
    var a = n[i];
    e[i] !== a && (n[i] == null ? t.style.removeProperty(i) : t.style.setProperty(i, a, r));
  }
}
function an(t, e, n, r) {
  var i = t.__style;
  if (i !== e) {
    var a = Gf(e, r);
    a == null ? t.removeAttribute("style") : t.style.cssText = a, t.__style = e;
  } else r && (Array.isArray(r) ? (Po(t, n == null ? void 0 : n[0], r[0]), Po(t, n == null ? void 0 : n[1], r[1], "important")) : Po(t, n, r));
  return r;
}
function ss(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!ho(e))
      return kd();
    for (var r of t.options)
      r.selected = e.includes(fl(r));
    return;
  }
  for (r of t.options) {
    var i = fl(r);
    if (sf(i, e)) {
      r.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function jf(t) {
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
const ia = Symbol("class"), aa = Symbol("style"), tc = Symbol("is custom element"), nc = Symbol("is html");
function hl(t, e) {
  var n = Hs(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== "PROGRESS") || (t.value = e ?? "");
}
function Wf(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function Vi(t, e, n, r) {
  var i = Hs(t);
  i[e] !== (i[e] = n) && (e === "loading" && (t[Od] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && rc(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function qf(t, e, n, r, i = !1, a = !1) {
  var o = Hs(t), u = o[tc], l = !o[nc], c = e || {}, d = t.tagName === "OPTION";
  for (var h in e)
    h in n || (n[h] = null);
  n.class ? n.class = $u(n.class) : n[ia] && (n.class = null), n[aa] && (n.style ?? (n.style = null));
  var f = rc(t);
  for (const S in n) {
    let g = n[S];
    if (d && S === "value" && g == null) {
      t.value = t.__value = "", c[S] = g;
      continue;
    }
    if (S === "class") {
      var v = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      ec(t, v, g, r, e == null ? void 0 : e[ia], n[ia]), c[S] = g, c[ia] = n[ia];
      continue;
    }
    if (S === "style") {
      an(t, g, e == null ? void 0 : e[aa], n[aa]), c[S] = g, c[aa] = n[aa];
      continue;
    }
    var p = c[S];
    if (!(g === p && !(g === void 0 && t.hasAttribute(S)))) {
      c[S] = g;
      var b = S[0] + S[1];
      if (b !== "$$")
        if (b === "on") {
          const E = {}, I = "$$" + S;
          let T = S.slice(2);
          var _ = Lf(T);
          if (xf(T) && (T = T.slice(0, -7), E.capture = !0), !_ && p) {
            if (g != null) continue;
            t.removeEventListener(T, c[I], E), c[I] = null;
          }
          if (g != null)
            if (_)
              t[`__${T}`] = g, Rr([T]);
            else {
              let A = function(w) {
                c[S].call(this, w);
              };
              c[I] = Fs(T, t, A, E);
            }
          else _ && (t[`__${T}`] = void 0);
        } else if (S === "style")
          Vi(t, S, g);
        else if (S === "autofocus")
          cf(
            /** @type {HTMLElement} */
            t,
            !!g
          );
        else if (!u && (S === "__value" || S === "value" && g != null))
          t.value = t.__value = g;
        else if (S === "selected" && d)
          Wf(
            /** @type {HTMLOptionElement} */
            t,
            g
          );
        else {
          var C = S;
          l || (C = wf(C));
          var x = C === "defaultValue" || C === "defaultChecked";
          if (g == null && !u && !x)
            if (o[S] = null, C === "value" || C === "checked") {
              let E = (
                /** @type {HTMLInputElement} */
                t
              );
              const I = e === void 0;
              if (C === "value") {
                let T = E.defaultValue;
                E.removeAttribute(C), E.defaultValue = T, E.value = E.__value = I ? T : null;
              } else {
                let T = E.defaultChecked;
                E.removeAttribute(C), E.defaultChecked = T, E.checked = I ? T : !1;
              }
            } else
              t.removeAttribute(S);
          else x || f.includes(C) && (u || typeof g != "string") ? (t[C] = g, C in o && (o[C] = Ut)) : typeof g != "function" && Vi(t, C, g);
        }
    }
  }
  return c;
}
function Ue(t, e, n = [], r = [], i, a = !1, o = !1) {
  Lu(n, r, (u) => {
    var l = void 0, c = {}, d = t.nodeName === "SELECT", h = !1;
    if (Or(() => {
      var v = e(...u.map(s)), p = qf(
        t,
        l,
        v,
        i,
        a,
        o
      );
      h && d && "value" in v && ss(
        /** @type {HTMLSelectElement} */
        t,
        v.value
      );
      for (let _ of Object.getOwnPropertySymbols(c))
        v[_] || jt(c[_]);
      for (let _ of Object.getOwnPropertySymbols(v)) {
        var b = v[_];
        _.description === Cd && (!l || b !== l[_]) && (c[_] && jt(c[_]), c[_] = zt(() => Bf(t, () => b))), p[_] = b;
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
        ), jf(f);
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
      [tc]: t.nodeName.includes("-"),
      [nc]: t.namespaceURI === _d
    })
  );
}
var vl = /* @__PURE__ */ new Map();
function rc(t) {
  var e = t.getAttribute("is") || t.nodeName, n = vl.get(e);
  if (n) return n;
  vl.set(e, n = []);
  for (var r, i = t, a = Element.prototype; a !== i; ) {
    r = mu(i);
    for (var o in r)
      r[o].set && n.push(o);
    i = As(i);
  }
  return n;
}
function Ia(t, e, n = e) {
  var r = /* @__PURE__ */ new WeakSet();
  ff(t, "input", async (i) => {
    var a = i ? t.defaultValue : t.value;
    if (a = No(t) ? Fo(a) : a, n(a), st !== null && r.add(st), await Eo(), a !== (a = e())) {
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
  wr(e) == null && t.value && (n(No(t) ? Fo(t.value) : t.value), st !== null && r.add(st)), yo(() => {
    var i = e();
    if (t === document.activeElement) {
      var a = (
        /** @type {Batch} */
        Wa ?? st
      );
      if (r.has(a))
        return;
    }
    No(t) && i === Fo(t.value) || t.type === "date" && !i && !t.value || i !== t.value && (t.value = i ?? "");
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
function xe(t = {}, e, n, r) {
  return La(() => {
    var i, a;
    return yo(() => {
      i = a, a = [], wr(() => {
        t !== n(...a) && (e(t, ...a), i && ml(n(...i), t) && e(null, ...i));
      });
    }), () => {
      xr(() => {
        a && ml(n(...a), t) && e(null, ...a);
      });
    };
  }), t;
}
function Us(t, e, n) {
  if (t == null)
    return e(void 0), n && n(void 0), pe;
  const r = wr(
    () => t.subscribe(
      e,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const bi = [];
function Kf(t, e) {
  return {
    subscribe: gt(t, e).subscribe
  };
}
function gt(t, e = pe) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function i(u) {
    if (ws(t, u) && (t = u, n)) {
      const l = !bi.length;
      for (const c of r)
        c[1](), bi.push(c, t);
      if (l) {
        for (let c = 0; c < bi.length; c += 2)
          bi[c][0](bi[c + 1]);
        bi.length = 0;
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
function Yi(t, e, n) {
  const r = !Array.isArray(t), i = r ? [t] : t;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = e.length < 2;
  return Kf(n, (o, u) => {
    let l = !1;
    const c = [];
    let d = 0, h = pe;
    const f = () => {
      if (d)
        return;
      h();
      const p = e(r ? c[0] : c, o, u);
      a ? o(p) : h = typeof p == "function" ? p : pe;
    }, v = i.map(
      (p, b) => Us(
        p,
        (_) => {
          c[b] = _, d &= ~(1 << b), l && f();
        },
        () => {
          d |= 1 << b;
        }
      )
    );
    return l = !0, f(), function() {
      pu(v), h(), l = !1;
    };
  });
}
function ic(t) {
  let e;
  return Us(t, (n) => e = n)(), e;
}
let Fa = !1, ls = Symbol();
function wt(t, e, n) {
  const r = n[e] ?? (n[e] = {
    store: null,
    source: /* @__PURE__ */ Ru(void 0),
    unsubscribe: pe
  });
  if (r.store !== t && !(ls in n))
    if (r.unsubscribe(), r.store = t ?? null, t == null)
      r.source.v = void 0, r.unsubscribe = pe;
    else {
      var i = !0;
      r.unsubscribe = Us(t, (a) => {
        i ? r.source.v = a : $(r.source, a);
      }), i = !1;
    }
  return t && ls in n ? ic(t) : s(r.source);
}
function Gt(t, e) {
  return t.set(e), e;
}
function bn() {
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
function zf(t) {
  var e = Fa;
  try {
    return Fa = !1, [t(), Fa];
  } finally {
    Fa = e;
  }
}
const Xf = {
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
function Ge(t, e, n) {
  return new Proxy(
    { props: t, exclude: e },
    Xf
  );
}
const Yf = {
  get(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (ra(r) && (r = r()), typeof r == "object" && r !== null && e in r) return r[e];
    }
  },
  set(t, e, n) {
    let r = t.props.length;
    for (; r--; ) {
      let i = t.props[r];
      ra(i) && (i = i());
      const a = Er(i, e);
      if (a && a.set)
        return a.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (ra(r) && (r = r()), typeof r == "object" && r !== null && e in r) {
        const i = Er(r, e);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(t, e) {
    if (e === Wn || e === bu) return !1;
    for (let n of t.props)
      if (ra(n) && (n = n()), n != null && e in n) return !0;
    return !1;
  },
  ownKeys(t) {
    const e = [];
    for (let n of t.props)
      if (ra(n) && (n = n()), !!n) {
        for (const r in n)
          e.includes(r) || e.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          e.includes(r) || e.push(r);
      }
    return e;
  }
};
function $e(...t) {
  return new Proxy({ props: t }, Yf);
}
function m(t, e, n, r) {
  var S;
  var i = !Xi || (n & 2) !== 0, a = (n & 8) !== 0, o = (n & 16) !== 0, u = (
    /** @type {V} */
    r
  ), l = !0, c = () => (l && (l = !1, u = o ? wr(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), u), d;
  if (a) {
    var h = Wn in t || bu in t;
    d = ((S = Er(t, e)) == null ? void 0 : S.set) ?? (h && e in t ? (g) => t[e] = g : void 0);
  }
  var f, v = !1;
  a ? [f, v] = zf(() => (
    /** @type {V} */
    t[e]
  )) : f = /** @type {V} */
  t[e], f === void 0 && r !== void 0 && (f = c(), d && (i && Nd(), d(f)));
  var p;
  if (i ? p = () => {
    var g = (
      /** @type {V} */
      t[e]
    );
    return g === void 0 ? c() : (l = !0, g);
  } : p = () => {
    var g = (
      /** @type {V} */
      t[e]
    );
    return g !== void 0 && (u = /** @type {V} */
    void 0), g === void 0 ? u : g;
  }, i && !(n & 4))
    return p;
  if (d) {
    var b = t.$$legacy;
    return (
      /** @type {() => V} */
      function(g, E) {
        return arguments.length > 0 ? ((!i || !E || b || v) && d(E ? p() : g), g) : p();
      }
    );
  }
  var _ = !1, C = (n & 1 ? po : Rs)(() => (_ = !1, p()));
  a && s(C);
  var x = (
    /** @type {Effect} */
    Ke
  );
  return (
    /** @type {() => V} */
    function(g, E) {
      if (arguments.length > 0) {
        const I = E ? s(C) : i && a ? Ce(g) : g;
        return $(C, I), _ = !0, u !== void 0 && (u = I), g;
      }
      return ui && _ || x.f & si ? C.v : s(C);
    }
  );
}
const Zf = "5";
var hu;
typeof window < "u" && ((hu = window.__svelte ?? (window.__svelte = {})).v ?? (hu.v = /* @__PURE__ */ new Set())).add(Zf);
function Qf(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Jf = function(e) {
  return $f(e) && !eh(e);
};
function $f(t) {
  return !!t && typeof t == "object";
}
function eh(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || rh(t);
}
var th = typeof Symbol == "function" && Symbol.for, nh = th ? Symbol.for("react.element") : 60103;
function rh(t) {
  return t.$$typeof === nh;
}
function ih(t) {
  return Array.isArray(t) ? [] : {};
}
function _a(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? Gi(ih(t), t, e) : t;
}
function ah(t, e, n) {
  return t.concat(e).map(function(r) {
    return _a(r, n);
  });
}
function oh(t, e) {
  if (!e.customMerge)
    return Gi;
  var n = e.customMerge(t);
  return typeof n == "function" ? n : Gi;
}
function sh(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function pl(t) {
  return Object.keys(t).concat(sh(t));
}
function ac(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function lh(t, e) {
  return ac(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function uh(t, e, n) {
  var r = {};
  return n.isMergeableObject(t) && pl(t).forEach(function(i) {
    r[i] = _a(t[i], n);
  }), pl(e).forEach(function(i) {
    lh(t, i) || (ac(t, i) && n.isMergeableObject(e[i]) ? r[i] = oh(i, n)(t[i], e[i], n) : r[i] = _a(e[i], n));
  }), r;
}
function Gi(t, e, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || ah, n.isMergeableObject = n.isMergeableObject || Jf, n.cloneUnlessOtherwiseSpecified = _a;
  var r = Array.isArray(e), i = Array.isArray(t), a = r === i;
  return a ? r ? n.arrayMerge(t, e, n) : uh(t, e, n) : _a(e, n);
}
Gi.all = function(e, n) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(r, i) {
    return Gi(r, i, n);
  }, {});
};
var ch = Gi, dh = ch;
const fh = /* @__PURE__ */ Qf(dh);
var us = function(t, e) {
  return us = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, us(t, e);
};
function it(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  us(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
var ve = function() {
  return ve = Object.assign || function(e) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ve.apply(this, arguments);
};
function hh(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  return n;
}
function oc(t, e, n, r) {
  function i(a) {
    return a instanceof n ? a : new n(function(o) {
      o(a);
    });
  }
  return new (n || (n = Promise))(function(a, o) {
    function u(d) {
      try {
        c(r.next(d));
      } catch (h) {
        o(h);
      }
    }
    function l(d) {
      try {
        c(r.throw(d));
      } catch (h) {
        o(h);
      }
    }
    function c(d) {
      d.done ? a(d.value) : i(d.value).then(u, l);
    }
    c((r = r.apply(t, e || [])).next());
  });
}
function Bs(t, e) {
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
function Rt(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, n = e && t[e], r = 0;
  if (n) return n.call(t);
  if (t && typeof t.length == "number") return {
    next: function() {
      return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function ji(t, e) {
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
function Sr(t, e, n) {
  if (n || arguments.length === 2) for (var r = 0, i = e.length, a; r < i; r++)
    (a || !(r in e)) && (a || (a = Array.prototype.slice.call(e, 0, r)), a[r] = e[r]);
  return t.concat(a || Array.prototype.slice.call(e));
}
function Li(t) {
  return this instanceof Li ? (this.v = t, this) : new Li(t);
}
function vh(t, e, n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(t, e || []), i, a = [];
  return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), u("next"), u("throw"), u("return", o), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function o(v) {
    return function(p) {
      return Promise.resolve(p).then(v, h);
    };
  }
  function u(v, p) {
    r[v] && (i[v] = function(b) {
      return new Promise(function(_, C) {
        a.push([v, b, _, C]) > 1 || l(v, b);
      });
    }, p && (i[v] = p(i[v])));
  }
  function l(v, p) {
    try {
      c(r[v](p));
    } catch (b) {
      f(a[0][3], b);
    }
  }
  function c(v) {
    v.value instanceof Li ? Promise.resolve(v.value.v).then(d, h) : f(a[0][2], v);
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
function mh(t) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], n;
  return e ? e.call(t) : (t = typeof Rt == "function" ? Rt(t) : t[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
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
function Ho(t, e) {
  var n = e && e.cache ? e.cache : Eh, r = e && e.serializer ? e.serializer : Ih, i = e && e.strategy ? e.strategy : bh;
  return i(t, {
    cache: n,
    serializer: r
  });
}
function ph(t) {
  return t == null || typeof t == "number" || typeof t == "boolean";
}
function gh(t, e, n, r) {
  var i = ph(r) ? r : n(r), a = e.get(i);
  return typeof a > "u" && (a = t.call(this, r), e.set(i, a)), a;
}
function sc(t, e, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = e.get(i);
  return typeof a > "u" && (a = t.apply(this, r), e.set(i, a)), a;
}
function lc(t, e, n, r, i) {
  return n.bind(e, t, r, i);
}
function bh(t, e) {
  var n = t.length === 1 ? gh : sc;
  return lc(t, this, n, e.cache.create(), e.serializer);
}
function yh(t, e) {
  return lc(t, this, sc, e.cache.create(), e.serializer);
}
var Ih = function() {
  return JSON.stringify(arguments);
}, _h = (
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
), Eh = {
  create: function() {
    return new _h();
  }
}, Uo = {
  variadic: yh
}, Ye;
(function(t) {
  t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", t[t.INVALID_TAG = 23] = "INVALID_TAG", t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(Ye || (Ye = {}));
var vt;
(function(t) {
  t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag";
})(vt || (vt = {}));
var Wi;
(function(t) {
  t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime";
})(Wi || (Wi = {}));
function gl(t) {
  return t.type === vt.literal;
}
function Ch(t) {
  return t.type === vt.argument;
}
function uc(t) {
  return t.type === vt.number;
}
function cc(t) {
  return t.type === vt.date;
}
function dc(t) {
  return t.type === vt.time;
}
function fc(t) {
  return t.type === vt.select;
}
function hc(t) {
  return t.type === vt.plural;
}
function Ah(t) {
  return t.type === vt.pound;
}
function vc(t) {
  return t.type === vt.tag;
}
function mc(t) {
  return !!(t && typeof t == "object" && t.type === Wi.number);
}
function cs(t) {
  return !!(t && typeof t == "object" && t.type === Wi.dateTime);
}
var pc = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Sh = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function xh(t) {
  var e = {};
  return t.replace(Sh, function(n) {
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
var Th = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Lh(t) {
  if (t.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var e = t.split(Th).filter(function(f) {
    return f.length > 0;
  }), n = [], r = 0, i = e; r < i.length; r++) {
    var a = i[r], o = a.split("/");
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
function Oh(t) {
  return t.replace(/^(.*?)-/, "");
}
var bl = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, gc = /^(@+)?(\+|#+)?[rs]?$/g, wh = /(\*)(0+)|(#+)(0+)|(0+)/g, bc = /^(0+)$/;
function yl(t) {
  var e = {};
  return t[t.length - 1] === "r" ? e.roundingPriority = "morePrecision" : t[t.length - 1] === "s" && (e.roundingPriority = "lessPrecision"), t.replace(gc, function(n, r, i) {
    return typeof i != "string" ? (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length) : i === "+" ? e.minimumSignificantDigits = r.length : r[0] === "#" ? e.maximumSignificantDigits = r.length : (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), e;
}
function yc(t) {
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
function Rh(t) {
  var e;
  if (t[0] === "E" && t[1] === "E" ? (e = {
    notation: "engineering"
  }, t = t.slice(2)) : t[0] === "E" && (e = {
    notation: "scientific"
  }, t = t.slice(1)), e) {
    var n = t.slice(0, 2);
    if (n === "+!" ? (e.signDisplay = "always", t = t.slice(2)) : n === "+?" && (e.signDisplay = "exceptZero", t = t.slice(2)), !bc.test(t))
      throw new Error("Malformed concise eng/scientific notation");
    e.minimumIntegerDigits = t.length;
  }
  return e;
}
function Il(t) {
  var e = {}, n = yc(t);
  return n || e;
}
function Mh(t) {
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
        e.style = "unit", e.unit = Oh(i.options[0]);
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
        e = ve(ve(ve({}, e), { notation: "scientific" }), i.options.reduce(function(l, c) {
          return ve(ve({}, l), Il(c));
        }, {}));
        continue;
      case "engineering":
        e = ve(ve(ve({}, e), { notation: "engineering" }), i.options.reduce(function(l, c) {
          return ve(ve({}, l), Il(c));
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
        i.options[0].replace(wh, function(l, c, d, h, f, v) {
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
    if (bc.test(i.stem)) {
      e.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (bl.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(bl, function(l, c, d, h, f, v) {
        return d === "*" ? e.minimumFractionDigits = c.length : h && h[0] === "#" ? e.maximumFractionDigits = h.length : f && v ? (e.minimumFractionDigits = f.length, e.maximumFractionDigits = f.length + v.length) : (e.minimumFractionDigits = c.length, e.maximumFractionDigits = c.length), "";
      });
      var a = i.options[0];
      a === "w" ? e = ve(ve({}, e), { trailingZeroDisplay: "stripIfInteger" }) : a && (e = ve(ve({}, e), yl(a)));
      continue;
    }
    if (gc.test(i.stem)) {
      e = ve(ve({}, e), yl(i.stem));
      continue;
    }
    var o = yc(i.stem);
    o && (e = ve(ve({}, e), o));
    var u = Rh(i.stem);
    u && (e = ve(ve({}, e), u));
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
function Dh(t, e) {
  for (var n = "", r = 0; r < t.length; r++) {
    var i = t.charAt(r);
    if (i === "j") {
      for (var a = 0; r + 1 < t.length && t.charAt(r + 1) === i; )
        a++, r++;
      var o = 1 + (a & 1), u = a < 2 ? 1 : 3 + (a >> 1), l = "a", c = Ph(e);
      for ((c == "H" || c == "k") && (u = 0); u-- > 0; )
        n += l;
      for (; o-- > 0; )
        n = c + n;
    } else i === "J" ? n += "H" : n += i;
  }
  return n;
}
function Ph(t) {
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
  var i = Ha[r || ""] || Ha[n || ""] || Ha["".concat(n, "-001")] || Ha["001"];
  return i[0];
}
var Bo, Nh = new RegExp("^".concat(pc.source, "*")), Fh = new RegExp("".concat(pc.source, "*$"));
function Ze(t, e) {
  return { start: t, end: e };
}
var Hh = !!String.prototype.startsWith && "_a".startsWith("a", 1), Uh = !!String.fromCodePoint, Bh = !!Object.fromEntries, kh = !!String.prototype.codePointAt, Vh = !!String.prototype.trimStart, Gh = !!String.prototype.trimEnd, jh = !!Number.isSafeInteger, Wh = jh ? Number.isSafeInteger : function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991;
}, ds = !0;
try {
  var qh = _c("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  ds = ((Bo = qh.exec("a")) === null || Bo === void 0 ? void 0 : Bo[0]) === "a";
} catch {
  ds = !1;
}
var _l = Hh ? (
  // Native
  function(e, n, r) {
    return e.startsWith(n, r);
  }
) : (
  // For IE11
  function(e, n, r) {
    return e.slice(r, r + n.length) === n;
  }
), fs = Uh ? String.fromCodePoint : (
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
), El = (
  // native
  Bh ? Object.fromEntries : (
    // Ponyfill
    function(e) {
      for (var n = {}, r = 0, i = e; r < i.length; r++) {
        var a = i[r], o = a[0], u = a[1];
        n[o] = u;
      }
      return n;
    }
  )
), Ic = kh ? (
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
), Kh = Vh ? (
  // Native
  function(e) {
    return e.trimStart();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(Nh, "");
  }
), zh = Gh ? (
  // Native
  function(e) {
    return e.trimEnd();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(Fh, "");
  }
);
function _c(t, e) {
  return new RegExp(t, e);
}
var hs;
if (ds) {
  var Cl = _c("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  hs = function(e, n) {
    var r;
    Cl.lastIndex = n;
    var i = Cl.exec(e);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  hs = function(e, n) {
    for (var r = []; ; ) {
      var i = Ic(e, n);
      if (i === void 0 || Ec(i) || Qh(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return fs.apply(void 0, r);
  };
var Xh = (
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
              type: vt.pound,
              location: Ze(u, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(Ye.UNMATCHED_CLOSING_TAG, Ze(this.clonePosition(), this.clonePosition()));
          } else if (a === 60 && !this.ignoreTag && vs(this.peek() || 0)) {
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
            type: vt.literal,
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
          if (this.isEOF() || !vs(this.char()))
            return this.error(Ye.INVALID_TAG, Ze(u, this.clonePosition()));
          var l = this.clonePosition(), c = this.parseTagName();
          return i !== c ? this.error(Ye.UNMATCHED_CLOSING_TAG, Ze(l, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: vt.tag,
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
      for (this.bump(); !this.isEOF() && Zh(this.char()); )
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
        val: { type: vt.literal, value: i, location: l },
        err: null
      };
    }, t.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !Yh(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      return fs.apply(void 0, n);
    }, t.prototype.tryParseUnquoted = function(e, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && e > 0 ? null : (this.bump(), fs(r));
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
              type: vt.argument,
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
      var e = this.clonePosition(), n = this.offset(), r = hs(this.message, n), i = n + r.length;
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
            var d = this.clonePosition(), h = this.parseSimpleArgStyleIfPossible();
            if (h.err)
              return h;
            var f = zh(h.val);
            if (f.length === 0)
              return this.error(Ye.EXPECT_ARGUMENT_STYLE, Ze(this.clonePosition(), this.clonePosition()));
            var v = Ze(d, this.clonePosition());
            c = { style: f, styleLocation: v };
          }
          var p = this.tryParseArgumentClose(i);
          if (p.err)
            return p;
          var b = Ze(i, this.clonePosition());
          if (c && _l(c == null ? void 0 : c.style, "::", 0)) {
            var _ = Kh(c.style.slice(2));
            if (u === "number") {
              var h = this.parseNumberSkeletonFromString(_, c.styleLocation);
              return h.err ? h : {
                val: { type: vt.number, value: r, location: b, style: h.val },
                err: null
              };
            } else {
              if (_.length === 0)
                return this.error(Ye.EXPECT_DATE_TIME_SKELETON, b);
              var C = _;
              this.locale && (C = Dh(_, this.locale));
              var f = {
                type: Wi.dateTime,
                pattern: C,
                location: c.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? xh(C) : {}
              }, x = u === "date" ? vt.date : vt.time;
              return {
                val: { type: x, value: r, location: b, style: f },
                err: null
              };
            }
          }
          return {
            val: {
              type: u === "number" ? vt.number : u === "date" ? vt.date : vt.time,
              value: r,
              location: b,
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
            return this.error(Ye.EXPECT_SELECT_ARGUMENT_OPTIONS, Ze(S, ve({}, S)));
          this.bumpSpace();
          var g = this.parseIdentifierIfPossible(), E = 0;
          if (u !== "select" && g.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(Ye.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Ze(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var h = this.tryParseDecimalInteger(Ye.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Ye.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (h.err)
              return h;
            this.bumpSpace(), g = this.parseIdentifierIfPossible(), E = h.val;
          }
          var I = this.tryParsePluralOrSelectOptions(e, u, n, g);
          if (I.err)
            return I;
          var p = this.tryParseArgumentClose(i);
          if (p.err)
            return p;
          var T = Ze(i, this.clonePosition());
          return u === "select" ? {
            val: {
              type: vt.select,
              value: r,
              options: El(I.val),
              location: T
            },
            err: null
          } : {
            val: {
              type: vt.plural,
              value: r,
              options: El(I.val),
              offset: E,
              pluralType: u === "plural" ? "cardinal" : "ordinal",
              location: T
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
        r = Lh(e);
      } catch {
        return this.error(Ye.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: Wi.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? Mh(r) : {}
        },
        err: null
      };
    }, t.prototype.tryParsePluralOrSelectOptions = function(e, n, r, i) {
      for (var a, o = !1, u = [], l = /* @__PURE__ */ new Set(), c = i.value, d = i.location; ; ) {
        if (c.length === 0) {
          var h = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var f = this.tryParseDecimalInteger(Ye.EXPECT_PLURAL_ARGUMENT_SELECTOR, Ye.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (f.err)
              return f;
            d = Ze(h, this.clonePosition()), c = this.message.slice(h.offset, this.offset());
          } else
            break;
        }
        if (l.has(c))
          return this.error(n === "select" ? Ye.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Ye.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, d);
        c === "other" && (o = !0), this.bumpSpace();
        var v = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? Ye.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Ye.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Ze(this.clonePosition(), this.clonePosition()));
        var p = this.parseMessage(e + 1, n, r);
        if (p.err)
          return p;
        var b = this.tryParseArgumentClose(v);
        if (b.err)
          return b;
        u.push([
          c,
          {
            value: p.val,
            location: Ze(v, this.clonePosition())
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
      return a ? (o *= r, Wh(o) ? { val: o, err: null } : this.error(n, l)) : this.error(e, l);
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
      for (; !this.isEOF() && Ec(this.char()); )
        this.bump();
    }, t.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var e = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (e >= 65536 ? 2 : 1));
      return r ?? null;
    }, t;
  }()
);
function vs(t) {
  return t >= 97 && t <= 122 || t >= 65 && t <= 90;
}
function Yh(t) {
  return vs(t) || t === 47;
}
function Zh(t) {
  return t === 45 || t === 46 || t >= 48 && t <= 57 || t === 95 || t >= 97 && t <= 122 || t >= 65 && t <= 90 || t == 183 || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039;
}
function Ec(t) {
  return t >= 9 && t <= 13 || t === 32 || t === 133 || t >= 8206 && t <= 8207 || t === 8232 || t === 8233;
}
function Qh(t) {
  return t >= 33 && t <= 35 || t === 36 || t >= 37 && t <= 39 || t === 40 || t === 41 || t === 42 || t === 43 || t === 44 || t === 45 || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || t === 91 || t === 92 || t === 93 || t === 94 || t === 96 || t === 123 || t === 124 || t === 125 || t === 126 || t === 161 || t >= 162 && t <= 165 || t === 166 || t === 167 || t === 169 || t === 171 || t === 172 || t === 174 || t === 176 || t === 177 || t === 182 || t === 187 || t === 191 || t === 215 || t === 247 || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || t === 8216 || t === 8217 || t === 8218 || t >= 8219 && t <= 8220 || t === 8221 || t === 8222 || t === 8223 || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || t === 8249 || t === 8250 || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || t === 8260 || t === 8261 || t === 8262 || t >= 8263 && t <= 8273 || t === 8274 || t === 8275 || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || t === 8608 || t >= 8609 && t <= 8610 || t === 8611 || t >= 8612 && t <= 8613 || t === 8614 || t >= 8615 && t <= 8621 || t === 8622 || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || t === 8658 || t === 8659 || t === 8660 || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || t === 8968 || t === 8969 || t === 8970 || t === 8971 || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9e3 || t === 9001 || t === 9002 || t >= 9003 && t <= 9083 || t === 9084 || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || t === 9655 || t >= 9656 && t <= 9664 || t === 9665 || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || t === 9839 || t >= 9840 && t <= 10087 || t === 10088 || t === 10089 || t === 10090 || t === 10091 || t === 10092 || t === 10093 || t === 10094 || t === 10095 || t === 10096 || t === 10097 || t === 10098 || t === 10099 || t === 10100 || t === 10101 || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || t === 10181 || t === 10182 || t >= 10183 && t <= 10213 || t === 10214 || t === 10215 || t === 10216 || t === 10217 || t === 10218 || t === 10219 || t === 10220 || t === 10221 || t === 10222 || t === 10223 || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || t === 10627 || t === 10628 || t === 10629 || t === 10630 || t === 10631 || t === 10632 || t === 10633 || t === 10634 || t === 10635 || t === 10636 || t === 10637 || t === 10638 || t === 10639 || t === 10640 || t === 10641 || t === 10642 || t === 10643 || t === 10644 || t === 10645 || t === 10646 || t === 10647 || t === 10648 || t >= 10649 && t <= 10711 || t === 10712 || t === 10713 || t === 10714 || t === 10715 || t >= 10716 && t <= 10747 || t === 10748 || t === 10749 || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || t === 11158 || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || t === 11778 || t === 11779 || t === 11780 || t === 11781 || t >= 11782 && t <= 11784 || t === 11785 || t === 11786 || t === 11787 || t === 11788 || t === 11789 || t >= 11790 && t <= 11798 || t === 11799 || t >= 11800 && t <= 11801 || t === 11802 || t === 11803 || t === 11804 || t === 11805 || t >= 11806 && t <= 11807 || t === 11808 || t === 11809 || t === 11810 || t === 11811 || t === 11812 || t === 11813 || t === 11814 || t === 11815 || t === 11816 || t === 11817 || t >= 11818 && t <= 11822 || t === 11823 || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || t === 11840 || t === 11841 || t === 11842 || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || t === 11858 || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || t === 12296 || t === 12297 || t === 12298 || t === 12299 || t === 12300 || t === 12301 || t === 12302 || t === 12303 || t === 12304 || t === 12305 || t >= 12306 && t <= 12307 || t === 12308 || t === 12309 || t === 12310 || t === 12311 || t === 12312 || t === 12313 || t === 12314 || t === 12315 || t === 12316 || t === 12317 || t >= 12318 && t <= 12319 || t === 12320 || t === 12336 || t === 64830 || t === 64831 || t >= 65093 && t <= 65094;
}
function ms(t) {
  t.forEach(function(e) {
    if (delete e.location, fc(e) || hc(e))
      for (var n in e.options)
        delete e.options[n].location, ms(e.options[n].value);
    else uc(e) && mc(e.style) || (cc(e) || dc(e)) && cs(e.style) ? delete e.style.location : vc(e) && ms(e.children);
  });
}
function Jh(t, e) {
  e === void 0 && (e = {}), e = ve({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e);
  var n = new Xh(t, e).parse();
  if (n.err) {
    var r = SyntaxError(Ye[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return e != null && e.captureLocation || ms(n.val), n.val;
}
var qi;
(function(t) {
  t.MISSING_VALUE = "MISSING_VALUE", t.INVALID_VALUE = "INVALID_VALUE", t.MISSING_INTL_API = "MISSING_INTL_API";
})(qi || (qi = {}));
var Co = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n, r, i) {
      var a = t.call(this, n) || this;
      return a.code = r, a.originalMessage = i, a;
    }
    return e.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, e;
  }(Error)
), Al = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n, r, i, a) {
      return t.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), qi.INVALID_VALUE, a) || this;
    }
    return e;
  }(Co)
), $h = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n, r, i) {
      return t.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), qi.INVALID_VALUE, i) || this;
    }
    return e;
  }(Co)
), ev = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n, r) {
      return t.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), qi.MISSING_VALUE, r) || this;
    }
    return e;
  }(Co)
), Jt;
(function(t) {
  t[t.literal = 0] = "literal", t[t.object = 1] = "object";
})(Jt || (Jt = {}));
function tv(t) {
  return t.length < 2 ? t : t.reduce(function(e, n) {
    var r = e[e.length - 1];
    return !r || r.type !== Jt.literal || n.type !== Jt.literal ? e.push(n) : r.value += n.value, e;
  }, []);
}
function nv(t) {
  return typeof t == "function";
}
function Ya(t, e, n, r, i, a, o) {
  if (t.length === 1 && gl(t[0]))
    return [
      {
        type: Jt.literal,
        value: t[0].value
      }
    ];
  for (var u = [], l = 0, c = t; l < c.length; l++) {
    var d = c[l];
    if (gl(d)) {
      u.push({
        type: Jt.literal,
        value: d.value
      });
      continue;
    }
    if (Ah(d)) {
      typeof a == "number" && u.push({
        type: Jt.literal,
        value: n.getNumberFormat(e).format(a)
      });
      continue;
    }
    var h = d.value;
    if (!(i && h in i))
      throw new ev(h, o);
    var f = i[h];
    if (Ch(d)) {
      (!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), u.push({
        type: typeof f == "string" ? Jt.literal : Jt.object,
        value: f
      });
      continue;
    }
    if (cc(d)) {
      var v = typeof d.style == "string" ? r.date[d.style] : cs(d.style) ? d.style.parsedOptions : void 0;
      u.push({
        type: Jt.literal,
        value: n.getDateTimeFormat(e, v).format(f)
      });
      continue;
    }
    if (dc(d)) {
      var v = typeof d.style == "string" ? r.time[d.style] : cs(d.style) ? d.style.parsedOptions : r.time.medium;
      u.push({
        type: Jt.literal,
        value: n.getDateTimeFormat(e, v).format(f)
      });
      continue;
    }
    if (uc(d)) {
      var v = typeof d.style == "string" ? r.number[d.style] : mc(d.style) ? d.style.parsedOptions : void 0;
      v && v.scale && (f = f * (v.scale || 1)), u.push({
        type: Jt.literal,
        value: n.getNumberFormat(e, v).format(f)
      });
      continue;
    }
    if (vc(d)) {
      var p = d.children, b = d.value, _ = i[b];
      if (!nv(_))
        throw new $h(b, "function", o);
      var C = Ya(p, e, n, r, i, a), x = _(C.map(function(E) {
        return E.value;
      }));
      Array.isArray(x) || (x = [x]), u.push.apply(u, x.map(function(E) {
        return {
          type: typeof E == "string" ? Jt.literal : Jt.object,
          value: E
        };
      }));
    }
    if (fc(d)) {
      var S = d.options[f] || d.options.other;
      if (!S)
        throw new Al(d.value, f, Object.keys(d.options), o);
      u.push.apply(u, Ya(S.value, e, n, r, i));
      continue;
    }
    if (hc(d)) {
      var S = d.options["=".concat(f)];
      if (!S) {
        if (!Intl.PluralRules)
          throw new Co(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, qi.MISSING_INTL_API, o);
        var g = n.getPluralRules(e, { type: d.pluralType }).select(f - (d.offset || 0));
        S = d.options[g] || d.options.other;
      }
      if (!S)
        throw new Al(d.value, f, Object.keys(d.options), o);
      u.push.apply(u, Ya(S.value, e, n, r, i, f - (d.offset || 0)));
      continue;
    }
  }
  return tv(u);
}
function rv(t, e) {
  return e ? ve(ve(ve({}, t || {}), e || {}), Object.keys(t).reduce(function(n, r) {
    return n[r] = ve(ve({}, t[r]), e[r] || {}), n;
  }, {})) : t;
}
function iv(t, e) {
  return e ? Object.keys(t).reduce(function(n, r) {
    return n[r] = rv(t[r], e[r]), n;
  }, ve({}, t)) : t;
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
function av(t) {
  return t === void 0 && (t = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: Ho(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.NumberFormat).bind.apply(e, Sr([void 0], n, !1)))();
    }, {
      cache: ko(t.number),
      strategy: Uo.variadic
    }),
    getDateTimeFormat: Ho(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.DateTimeFormat).bind.apply(e, Sr([void 0], n, !1)))();
    }, {
      cache: ko(t.dateTime),
      strategy: Uo.variadic
    }),
    getPluralRules: Ho(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.PluralRules).bind.apply(e, Sr([void 0], n, !1)))();
    }, {
      cache: ko(t.pluralRules),
      strategy: Uo.variadic
    })
  };
}
var Cc = (
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
        var d = c.reduce(function(h, f) {
          return !h.length || f.type !== Jt.literal || typeof h[h.length - 1] != "string" ? h.push(f.value) : h[h.length - 1] += f.value, h;
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
        var o = i || {};
        o.formatters;
        var u = hh(o, ["formatters"]);
        this.ast = t.__parse(e, ve(ve({}, u), { locale: this.resolvedLocale }));
      } else
        this.ast = e;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = iv(t.formats, r), this.formatters = i && i.formatters || av(this.formatterCache);
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
    }, t.__parse = Jh, t.formats = {
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
function ov(t, e) {
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
const _r = {}, sv = (t, e, n) => n && (e in _r || (_r[e] = {}), t in _r[e] || (_r[e][t] = n), n), Ac = (t, e) => {
  if (e == null)
    return;
  if (e in _r && t in _r[e])
    return _r[e][t];
  const n = wa(e);
  for (let r = 0; r < n.length; r++) {
    const i = n[r], a = uv(i, t);
    if (a)
      return sv(t, e, a);
  }
};
let ks;
const Oa = gt({});
function lv(t) {
  return ks[t] || null;
}
function Sc(t) {
  return t in ks;
}
function uv(t, e) {
  if (!Sc(t))
    return null;
  const n = lv(t);
  return ov(n, e);
}
function cv(t) {
  if (t == null)
    return;
  const e = wa(t);
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (Sc(r))
      return r;
  }
}
function xc(t, ...e) {
  delete _r[t], Oa.update((n) => (n[t] = fh.all([n[t] || {}, ...e]), n));
}
Yi(
  [Oa],
  ([t]) => Object.keys(t)
);
Oa.subscribe((t) => ks = t);
const Za = {};
function dv(t, e) {
  Za[t].delete(e), Za[t].size === 0 && delete Za[t];
}
function Tc(t) {
  return Za[t];
}
function fv(t) {
  return wa(t).map((e) => {
    const n = Tc(e);
    return [e, n ? [...n] : []];
  }).filter(([, e]) => e.length > 0);
}
function to(t) {
  return t == null ? !1 : wa(t).some(
    (e) => {
      var n;
      return (n = Tc(e)) == null ? void 0 : n.size;
    }
  );
}
function hv(t, e) {
  return Promise.all(
    e.map((r) => (dv(t, r), r().then((i) => i.default || i)))
  ).then((r) => xc(t, ...r));
}
const oa = {};
function Lc(t) {
  if (!to(t))
    return t in oa ? oa[t] : Promise.resolve();
  const e = fv(t);
  return oa[t] = Promise.all(
    e.map(
      ([n, r]) => hv(n, r)
    )
  ).then(() => {
    if (to(t))
      return Lc(t);
    delete oa[t];
  }), oa[t];
}
var Sl = Object.getOwnPropertySymbols, vv = Object.prototype.hasOwnProperty, mv = Object.prototype.propertyIsEnumerable, pv = (t, e) => {
  var n = {};
  for (var r in t)
    vv.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && Sl)
    for (var r of Sl(t))
      e.indexOf(r) < 0 && mv.call(t, r) && (n[r] = t[r]);
  return n;
};
const gv = {
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
function bv({ locale: t, id: e }) {
  console.warn(
    `[svelte-i18n] The message "${e}" was not found in "${wa(
      t
    ).join('", "')}".${to(Mr()) ? `

Note: there are at least one loader still registered to this locale that wasn't executed.` : ""}`
  );
}
const yv = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: gv,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, ha = yv;
function Ki() {
  return ha;
}
function Iv(t) {
  const e = t, { formats: n } = e, r = pv(e, ["formats"]);
  let i = t.fallbackLocale;
  if (t.initialLocale)
    try {
      Cc.resolveLocale(t.initialLocale) && (i = t.initialLocale);
    } catch {
      console.warn(
        `[svelte-i18n] The initial locale "${t.initialLocale}" is not a valid locale.`
      );
    }
  return r.warnOnMissingMessages && (delete r.warnOnMissingMessages, r.handleMissingMessage == null ? r.handleMissingMessage = bv : console.warn(
    '[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.'
  )), Object.assign(ha, r, { initialLocale: i }), n && ("number" in n && Object.assign(ha.formats.number, n.number), "date" in n && Object.assign(ha.formats.date, n.date), "time" in n && Object.assign(ha.formats.time, n.time)), ci.set(i);
}
const Vo = gt(!1);
var _v = Object.defineProperty, Ev = Object.defineProperties, Cv = Object.getOwnPropertyDescriptors, xl = Object.getOwnPropertySymbols, Av = Object.prototype.hasOwnProperty, Sv = Object.prototype.propertyIsEnumerable, Tl = (t, e, n) => e in t ? _v(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, xv = (t, e) => {
  for (var n in e || (e = {}))
    Av.call(e, n) && Tl(t, n, e[n]);
  if (xl)
    for (var n of xl(e))
      Sv.call(e, n) && Tl(t, n, e[n]);
  return t;
}, Tv = (t, e) => Ev(t, Cv(e));
let ps;
const no = gt(null);
function Ll(t) {
  return t.split("-").map((e, n, r) => r.slice(0, n + 1).join("-")).reverse();
}
function wa(t, e = Ki().fallbackLocale) {
  const n = Ll(t);
  return e ? [.../* @__PURE__ */ new Set([...n, ...Ll(e)])] : n;
}
function Mr() {
  return ps ?? void 0;
}
no.subscribe((t) => {
  ps = t ?? void 0, typeof window < "u" && t != null && document.documentElement.setAttribute("lang", t);
});
const Lv = (t) => {
  if (t && cv(t) && to(t)) {
    const { loadingDelay: e } = Ki();
    let n;
    return typeof window < "u" && Mr() != null && e ? n = window.setTimeout(
      () => Vo.set(!0),
      e
    ) : Vo.set(!0), Lc(t).then(() => {
      no.set(t);
    }).finally(() => {
      clearTimeout(n), Vo.set(!1);
    });
  }
  return no.set(t);
}, ci = Tv(xv({}, no), {
  set: Lv
}), Ov = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0], Ao = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (r) => {
    const i = JSON.stringify(r);
    return i in e ? e[i] : e[i] = t(r);
  };
};
var wv = Object.defineProperty, ro = Object.getOwnPropertySymbols, Oc = Object.prototype.hasOwnProperty, wc = Object.prototype.propertyIsEnumerable, Ol = (t, e, n) => e in t ? wv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Vs = (t, e) => {
  for (var n in e || (e = {}))
    Oc.call(e, n) && Ol(t, n, e[n]);
  if (ro)
    for (var n of ro(e))
      wc.call(e, n) && Ol(t, n, e[n]);
  return t;
}, Zi = (t, e) => {
  var n = {};
  for (var r in t)
    Oc.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && ro)
    for (var r of ro(t))
      e.indexOf(r) < 0 && wc.call(t, r) && (n[r] = t[r]);
  return n;
};
const Ea = (t, e) => {
  const { formats: n } = Ki();
  if (t in n && e in n[t])
    return n[t][e];
  throw new Error(`[svelte-i18n] Unknown "${e}" ${t} format.`);
}, Rv = Ao(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = Zi(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return r && (i = Ea("number", r)), new Intl.NumberFormat(n, i);
  }
), Mv = Ao(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = Zi(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return r ? i = Ea("date", r) : Object.keys(i).length === 0 && (i = Ea("date", "short")), new Intl.DateTimeFormat(n, i);
  }
), Dv = Ao(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = Zi(e, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return r ? i = Ea("time", r) : Object.keys(i).length === 0 && (i = Ea("time", "short")), new Intl.DateTimeFormat(n, i);
  }
), Pv = (t = {}) => {
  var e = t, {
    locale: n = Mr()
  } = e, r = Zi(e, [
    "locale"
  ]);
  return Rv(Vs({ locale: n }, r));
}, Nv = (t = {}) => {
  var e = t, {
    locale: n = Mr()
  } = e, r = Zi(e, [
    "locale"
  ]);
  return Mv(Vs({ locale: n }, r));
}, Fv = (t = {}) => {
  var e = t, {
    locale: n = Mr()
  } = e, r = Zi(e, [
    "locale"
  ]);
  return Dv(Vs({ locale: n }, r));
}, Hv = Ao(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (t, e = Mr()) => new Cc(t, e, Ki().formats, {
    ignoreTag: Ki().ignoreTag
  })
), Uv = (t, e = {}) => {
  var n, r, i, a;
  let o = e;
  typeof t == "object" && (o = t, t = o.id);
  const {
    values: u,
    locale: l = Mr(),
    default: c
  } = o;
  if (l == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let d = Ac(t, l);
  if (!d)
    d = (a = (i = (r = (n = Ki()).handleMissingMessage) == null ? void 0 : r.call(n, { locale: l, id: t, defaultValue: c })) != null ? i : c) != null ? a : t;
  else if (typeof d != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${t}" must be of type "string", found: "${typeof d}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), d;
  if (!u)
    return d;
  let h = d;
  try {
    h = Hv(d, l).format(u);
  } catch (f) {
    f instanceof Error && console.warn(
      `[svelte-i18n] Message "${t}" has syntax error:`,
      f.message
    );
  }
  return h;
}, Bv = (t, e) => Fv(e).format(t), kv = (t, e) => Nv(e).format(t), Vv = (t, e) => Pv(e).format(t), Gv = (t, e = Mr()) => Ac(t, e), jv = Yi([ci, Oa], () => Uv);
Yi([ci], () => Bv);
Yi([ci], () => kv);
Yi([ci], () => Vv);
Yi([ci, Oa], () => Gv);
function Wv(t, e) {
  Object.entries(t).forEach(([a, o]) => {
    xc(a, o);
  });
  const n = localStorage.getItem("language"), r = "en", i = n ?? Ov();
  console.log("Initial: Setting the language to", i), Iv({
    fallbackLocale: r,
    initialLocale: i
  }), window.addEventListener("oscd-language-changed", (a) => {
    const o = a;
    if (!o.detail.language) {
      console.error("No translations for language");
      return;
    }
    console.log("Updating the language to", o.detail.language), ci.set(o.detail.language);
  });
}
const qv = "Ort", Kv = "Suche", zv = "UUID", Xv = "File Name", Yv = "Autor", Zv = "Typ", Qv = "Version", Jv = "Datum", $v = "Fertig", em = "Filtertypen", tm = "Filter Hinzufügen", nm = {
  location: qv,
  search: Kv,
  uuid: zv,
  filename: Xv,
  author: Yv,
  type: Zv,
  version: Qv,
  date: Jv,
  "versionHistory.title": "Versionsverlauf der Datei {filename}",
  "versionTable.heading": "Versionstabelle",
  done: $v,
  filter_types: em,
  add_filter: tm
}, rm = "Location", im = "Search", am = "UUID", om = "Filename", sm = "Author", lm = "Type", um = "Version", cm = "Date", dm = "Done", fm = "Filter Types", hm = "Add Filter", vm = {
  location: rm,
  search: im,
  uuid: am,
  filename: om,
  author: sm,
  type: lm,
  version: um,
  date: cm,
  "versionHistory.title": "Version History of file {filename}",
  "versionTable.heading": "Version Table",
  done: dm,
  filter_types: fm,
  add_filter: hm
};
function mm(t, e = {}) {
  const n = e.priority || "polite", r = e.ownerDocument || document, i = r.querySelectorAll("[data-smui-dom-announce]");
  i.length && i.forEach((o) => {
    var u;
    (u = o.parentNode) === null || u === void 0 || u.removeChild(o);
  });
  const a = r.createElement("div");
  a.style.position = "absolute", a.style.top = "-9999px", a.style.left = "-9999px", a.style.height = "1px", a.style.overflow = "hidden", a.setAttribute("aria-atomic", "true"), a.setAttribute("aria-live", n), a.setAttribute("data-mdc-dom-announce", "true"), a.setAttribute("data-smui-dom-announce", "true"), r.body.appendChild(a), window.setTimeout(() => {
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
function Ve(t, e, n, r = { bubbles: !0 }) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  if (!t)
    throw new Error("Tried to dispatch event without element.");
  const i = new CustomEvent(e, Object.assign(Object.assign({}, r), { detail: n }));
  return t == null || t.dispatchEvent(i), i;
}
function ii(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const a = n[i], o = a.indexOf("$");
    o !== -1 && e.indexOf(a.substring(0, o + 1)) !== -1 || e.indexOf(a) === -1 && (r[a] = t[a]);
  }
  return r;
}
function lt(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const a = n[i];
    a.substring(0, e.length) === e && (r[a.substring(e.length)] = t[a]);
  }
  return r;
}
class Qi {
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
    n in a || (a[n] = /* @__PURE__ */ new Map()), a[n].set(r, Af(e, n, r, i));
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
function X(t, e) {
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
var Ua;
function Rc(t, e) {
  e === void 0 && (e = !1);
  var n = t.CSS, r = Ua;
  if (typeof Ua == "boolean" && !e)
    return Ua;
  var i = n && typeof n.supports == "function";
  if (!i)
    return !1;
  var a = n.supports("--css-vars", "yes"), o = n.supports("(--css-vars: yes)") && n.supports("color", "#00000000");
  return r = a || o, e || (Ua = r), r;
}
function pm(t, e, n) {
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
var Mt = (
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
      for (var r = [], i = 2; i < arguments.length; i++)
        r[i - 2] = arguments[i];
      this.root = e, this.initialize.apply(this, Sr([], ji(r))), this.foundation = n === void 0 ? this.getDefaultFoundation() : n, this.foundation.init(), this.initialSyncWithDOM();
    }
    return t.attachTo = function(e) {
      return new t(e, new Mt({}));
    }, t.prototype.initialize = function() {
    }, t.prototype.getDefaultFoundation = function() {
      throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class");
    }, t.prototype.initialSyncWithDOM = function() {
    }, t.prototype.destroy = function() {
      this.foundation.destroy();
    }, t.prototype.listen = function(e, n, r) {
      this.root.addEventListener(e, n, r);
    }, t.prototype.unlisten = function(e, n, r) {
      this.root.removeEventListener(e, n, r);
    }, t.prototype.emit = function(e, n, r) {
      r === void 0 && (r = !1);
      var i;
      typeof CustomEvent == "function" ? i = new CustomEvent(e, {
        bubbles: r,
        detail: n
      }) : (i = document.createEvent("CustomEvent"), i.initCustomEvent(e, r, !1, n)), this.root.dispatchEvent(i);
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
function va(t) {
  return t === void 0 && (t = window), gm(t) ? { passive: !0 } : !1;
}
function gm(t) {
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
const Mc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: va
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
function bm(t, e) {
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
function ym(t) {
  var e = t;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var n = e.cloneNode(!0);
  n.style.setProperty("position", "absolute"), n.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(n);
  var r = n.scrollWidth;
  return document.documentElement.removeChild(n), r;
}
const Ra = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: bm,
  estimateScrollWidth: ym,
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
}, _m = {
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
    it(e, t);
    function e(n) {
      var r = t.call(this, ve(ve({}, e.defaultAdapter), n)) || this;
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
        return Im;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return _m;
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
          for (var a = Rt(Rl), o = a.next(); !o.done; o = a.next()) {
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
          for (var a = Rt(Ml), o = a.next(); !o.done; o = a.next()) {
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
        for (var i = Rt(Rl), a = i.next(); !a.done; a = i.next()) {
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
        for (var i = Rt(Ml), a = i.next(); !a.done; a = i.next()) {
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
            var u = n !== void 0 && Ba.length > 0 && Ba.some(function(l) {
              return r.adapter.containsEventTarget(l);
            });
            if (u) {
              this.resetActivationState();
              return;
            }
            n !== void 0 && (Ba.push(n.target), this.registerDeactivationHandlers(n)), i.wasElementMadeActive = this.checkElementMadeActive(n), i.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Ba = [], !i.wasElementMadeActive && n !== void 0 && (n.key === " " || n.keyCode === 32) && (i.wasElementMadeActive = r.checkElementMadeActive(n), i.wasElementMadeActive && r.animateActivation()), i.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(n) {
      return n !== void 0 && n.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var n = this, r = e.strings, i = r.VAR_FG_TRANSLATE_START, a = r.VAR_FG_TRANSLATE_END, o = e.cssClasses, u = o.FG_DEACTIVATION, l = o.FG_ACTIVATION, c = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var d = "", h = "";
      if (!this.adapter.isUnbounded()) {
        var f = this.getFgTranslationCoordinates(), v = f.startPoint, p = f.endPoint;
        d = v.x + "px, " + v.y + "px", h = p.x + "px, " + p.y + "px";
      }
      this.adapter.updateCssVariable(i, d), this.adapter.updateCssVariable(a, h), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(u), this.adapter.computeBoundingRect(), this.adapter.addClass(l), this.activationTimer = setTimeout(function() {
        n.activationTimerCallback();
      }, c);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var n = this.activationState, r = n.activationEvent, i = n.wasActivatedByPointer, a;
      i ? a = pm(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
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
      var n = this, r = this.activationState;
      if (r.isActivated) {
        var i = ve({}, r);
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
  }(Mt)
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
var io = (
  /** @class */
  function(t) {
    it(e, t);
    function e() {
      var n = t !== null && t.apply(this, arguments) || this;
      return n.disabled = !1, n;
    }
    return e.attachTo = function(n, r) {
      r === void 0 && (r = {
        isUnbounded: void 0
      });
      var i = new e(n);
      return r.isUnbounded !== void 0 && (i.unbounded = r.isUnbounded), i;
    }, e.createAdapter = function(n) {
      return {
        addClass: function(r) {
          return n.root.classList.add(r);
        },
        browserSupportsCssVars: function() {
          return Rc(window);
        },
        computeBoundingRect: function() {
          return n.root.getBoundingClientRect();
        },
        containsEventTarget: function(r) {
          return n.root.contains(r);
        },
        deregisterDocumentInteractionHandler: function(r, i) {
          return document.documentElement.removeEventListener(r, i, va());
        },
        deregisterInteractionHandler: function(r, i) {
          return n.root.removeEventListener(r, i, va());
        },
        deregisterResizeHandler: function(r) {
          return window.removeEventListener("resize", r);
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
        registerDocumentInteractionHandler: function(r, i) {
          return document.documentElement.addEventListener(r, i, va());
        },
        registerInteractionHandler: function(r, i) {
          return n.root.addEventListener(r, i, va());
        },
        registerResizeHandler: function(r) {
          return window.addEventListener("resize", r);
        },
        removeClass: function(r) {
          return n.root.classList.remove(r);
        },
        updateCssVariable: function(r, i) {
          return n.root.style.setProperty(r, i);
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
var Go = "mdc-dom-focus-sentinel", Em = (
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
      var n = this, r = this.createSentinel(), i = this.createSentinel();
      r.addEventListener("focus", function() {
        var a = n.getFocusableElements(e);
        a.length > 0 && a[a.length - 1].focus();
      }), i.addEventListener("focus", function() {
        var a = n.getFocusableElements(e);
        a.length > 0 && a[0].focus();
      }), e.insertBefore(r, e.children[0]), e.appendChild(i);
    }, t.prototype.focusInitialElement = function(e, n) {
      var r = 0;
      n && (r = Math.max(e.indexOf(n), 0)), e[r].focus();
    }, t.prototype.getFocusableElements = function(e) {
      var n = [].slice.call(e.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));
      return n.filter(function(r) {
        var i = r.getAttribute("aria-disabled") === "true" || r.getAttribute("disabled") != null || r.getAttribute("hidden") != null || r.getAttribute("aria-hidden") === "true", a = r.tabIndex >= 0 && r.getBoundingClientRect().width > 0 && !r.classList.contains(Go) && !i, o = !1;
        if (a) {
          var u = getComputedStyle(r);
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
const Cm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FocusTrap: Em
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
}, on = /* @__PURE__ */ new Set();
on.add(Me.BACKSPACE);
on.add(Me.ENTER);
on.add(Me.SPACEBAR);
on.add(Me.PAGE_UP);
on.add(Me.PAGE_DOWN);
on.add(Me.END);
on.add(Me.HOME);
on.add(Me.ARROW_LEFT);
on.add(Me.ARROW_UP);
on.add(Me.ARROW_RIGHT);
on.add(Me.ARROW_DOWN);
on.add(Me.DELETE);
on.add(Me.ESCAPE);
on.add(Me.TAB);
var fn = {
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
sn.set(fn.BACKSPACE, Me.BACKSPACE);
sn.set(fn.ENTER, Me.ENTER);
sn.set(fn.SPACEBAR, Me.SPACEBAR);
sn.set(fn.PAGE_UP, Me.PAGE_UP);
sn.set(fn.PAGE_DOWN, Me.PAGE_DOWN);
sn.set(fn.END, Me.END);
sn.set(fn.HOME, Me.HOME);
sn.set(fn.ARROW_LEFT, Me.ARROW_LEFT);
sn.set(fn.ARROW_UP, Me.ARROW_UP);
sn.set(fn.ARROW_RIGHT, Me.ARROW_RIGHT);
sn.set(fn.ARROW_DOWN, Me.ARROW_DOWN);
sn.set(fn.DELETE, Me.DELETE);
sn.set(fn.ESCAPE, Me.ESCAPE);
sn.set(fn.TAB, Me.TAB);
var lr = /* @__PURE__ */ new Set();
lr.add(Me.PAGE_UP);
lr.add(Me.PAGE_DOWN);
lr.add(Me.END);
lr.add(Me.HOME);
lr.add(Me.ARROW_LEFT);
lr.add(Me.ARROW_UP);
lr.add(Me.ARROW_RIGHT);
lr.add(Me.ARROW_DOWN);
function bt(t) {
  var e = t.key;
  if (on.has(e))
    return e;
  var n = sn.get(t.keyCode);
  return n || Me.UNKNOWN;
}
function Am(t) {
  return lr.has(bt(t));
}
const { applyPassive: Dl } = Mc, { matches: Sm } = Ra;
function Xt(t, { ripple: e = !0, surface: n = !1, unbounded: r = !1, disabled: i = !1, color: a, active: o, rippleElement: u, eventTarget: l, activeTarget: c, addClass: d = (p) => t.classList.add(p), removeClass: h = (p) => t.classList.remove(p), addStyle: f = (p, b) => t.style.setProperty(p, b), initPromise: v = Promise.resolve() } = {}) {
  let p, b = new Qi(), _ = ue("SMUI:addLayoutListener"), C, x = o, S = l, g = c;
  function E() {
    n ? (d("mdc-ripple-surface"), a === "primary" ? (d("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")) : a === "secondary" ? (h("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : (h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary"))) : (h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), p && x !== o && (x = o, o ? p.activate() : o === !1 && p.deactivate()), e && !p ? (p = new xo({
      addClass: d,
      browserSupportsCssVars: () => Rc(window),
      computeBoundingRect: () => (u || t).getBoundingClientRect(),
      containsEventTarget: (T) => t.contains(T),
      deregisterDocumentInteractionHandler: (T, A) => b.off(document.documentElement, T, A),
      deregisterInteractionHandler: (T, A) => b.off(l || t, T, A),
      deregisterResizeHandler: (T) => window.removeEventListener("resize", T),
      getWindowPageOffset: () => {
        var T, A;
        return {
          x: (T = window.pageXOffset) !== null && T !== void 0 ? T : window.scrollX,
          y: (A = window.pageYOffset) !== null && A !== void 0 ? A : window.scrollY
        };
      },
      isSurfaceActive: () => o ?? Sm(c || t, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!r,
      registerDocumentInteractionHandler: (T, A) => {
        const w = Dl();
        b.on(document.documentElement, T, A, typeof w == "boolean" ? { capture: w } : w);
      },
      registerInteractionHandler: (T, A) => {
        const w = Dl();
        b.on(l || t, T, A, typeof w == "boolean" ? { capture: w } : w);
      },
      registerResizeHandler: (T) => b.on(window, "resize", T),
      removeClass: h,
      updateCssVariable: f
    }), v.then(() => {
      p && (p.init(), p.setUnbounded(r));
    })) : p && !e && v.then(() => {
      p && (p.destroy(), p = void 0, b.clear());
    }), p && (S !== l || g !== c) && (S = l, g = c, p.destroy(), requestAnimationFrame(() => {
      p && (p.init(), p.setUnbounded(r));
    })), !e && r && d("mdc-ripple-upgraded--unbounded");
  }
  E(), _ && (C = _(I));
  function I() {
    p && p.layout();
  }
  return {
    update(T) {
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
        removeClass: h,
        addStyle: f,
        initPromise: v
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (A) => t.classList.add(A), removeClass: (A) => t.classList.remove(A), addStyle: (A, w) => t.style.setProperty(A, w), initPromise: Promise.resolve() }, T)), E();
    },
    destroy() {
      p && (p.destroy(), p = void 0, b.clear(), h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), C && C();
    }
  };
}
function Pl(t, e) {
  we(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "component", 3, Dr), a = m(e, "tag", 3, "span"), o = /* @__PURE__ */ Ge(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "component",
    "tag",
    "children"
  ]), u;
  const l = ue("SMUI:label:context"), c = ue("SMUI:label:tabindex");
  function d() {
    return u.getElement();
  }
  var h = { getElement: d }, f = oe(), v = J(f);
  {
    let p = /* @__PURE__ */ me(() => Ne({
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
    sr(v, i, (b, _) => {
      xe(
        _(b, $e(
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
              var S = oe(), g = J(S);
              ye(g, () => e.children ?? pe), O(C, S);
            },
            $$slots: { default: !0 }
          }
        )),
        (C) => u = C,
        () => u
      );
    });
  }
  return O(t, f), Re(h);
}
function xm(t, e) {
  we(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "on", 3, !1), a = m(e, "component", 3, Dr), o = m(e, "tag", 3, "i"), u = /* @__PURE__ */ Ge(e, [
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
  const c = /* @__PURE__ */ me(() => o() === "svg" || a() === Om), d = ue("SMUI:icon:context");
  function h() {
    return l.getElement();
  }
  var f = { getElement: h }, v = oe(), p = J(v);
  {
    let b = /* @__PURE__ */ me(() => Ne({
      "mdc-button__icon": d === "button",
      "mdc-fab__icon": d === "fab",
      "mdc-icon-button__icon": d === "icon-button",
      "mdc-icon-button__icon--on": d === "icon-button" && i(),
      "mdc-tab__icon": d === "tab",
      "mdc-banner__icon": d === "banner",
      "mdc-segmented-button__icon": d === "segmented-button",
      [r()]: !0
    }));
    sr(p, a, (_, C) => {
      xe(
        C(_, $e(
          {
            get tag() {
              return o();
            },
            get use() {
              return n();
            },
            get class() {
              return s(b);
            },
            "aria-hidden": "true"
          },
          () => s(c) ? { focusable: "false", tabindex: "-1" } : {},
          () => u,
          {
            children: (x, S) => {
              var g = oe(), E = J(g);
              ye(E, () => e.children ?? pe), O(x, g);
            },
            $$slots: { default: !0 }
          }
        )),
        (x) => l = x,
        () => l
      );
    });
  }
  return O(t, v), Re(f);
}
var Tm = /* @__PURE__ */ dn("<svg><!></svg>");
function Dr(t, e) {
  we(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "tag", 3, "div"), i = /* @__PURE__ */ Ge(e, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
  const a = /* @__PURE__ */ me(() => [
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
  var l = { getElement: u }, c = oe(), d = J(c);
  {
    var h = (v) => {
      var p = Tm();
      Ue(p, () => ({ ...i }));
      var b = Ie(p);
      ye(b, () => e.children ?? pe), xe(p, (_) => o = _, () => o), Be(p, (_, C) => X == null ? void 0 : X(_, C), n), O(v, p);
    }, f = (v) => {
      var p = oe(), b = J(p);
      {
        var _ = (x) => {
          var S = oe(), g = J(S);
          ul(g, r, !1, (E, I) => {
            xe(E, (T) => o = T, () => o), Be(E, (T, A) => X == null ? void 0 : X(T, A), n), Ue(E, () => ({ ...i }));
          }), O(x, S);
        }, C = (x) => {
          var S = oe(), g = J(S);
          ul(g, r, !1, (E, I) => {
            xe(E, (w) => o = w, () => o), Be(E, (w, k) => X == null ? void 0 : X(w, k), n), Ue(E, () => ({ ...i }));
            var T = oe(), A = J(T);
            ye(A, () => e.children ?? pe), O(I, T);
          }), O(x, S);
        };
        he(
          b,
          (x) => {
            s(a) ? x(_) : x(C, !1);
          },
          !0
        );
      }
      O(v, p);
    };
    he(d, (v) => {
      r() === "svg" ? v(h) : v(f, !1);
    });
  }
  return O(t, c), Re(l);
}
var Lm = /* @__PURE__ */ dn("<svg><!></svg>");
function Om(t, e) {
  we(e, !0), console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let n = m(e, "use", 19, () => []), r = /* @__PURE__ */ Ge(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i;
  function a() {
    return i;
  }
  var o = { getElement: a }, u = Lm();
  Ue(u, () => ({ ...r }));
  var l = Ie(u);
  return ye(l, () => e.children ?? pe), xe(u, (c) => i = c, () => i), Be(u, (c, d) => X == null ? void 0 : X(c, d), n), O(t, u), Re(o);
}
function Ci(t, e) {
  we(e, !0);
  const [n, r] = bn(), i = gt(e.value);
  te(e.key, i), Se(() => {
    Gt(i, e.value);
  }), Ln(() => {
    i.set(void 0);
  });
  var a = oe(), o = J(a);
  ye(o, () => e.children ?? pe), O(t, a), Re(), r();
}
var wm = /* @__PURE__ */ ge('<div class="mdc-button__touch"></div>'), Rm = /* @__PURE__ */ ge('<div class="mdc-button__ripple"></div> <!><!>', 1);
function Mm(t, e) {
  we(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "ripple", 3, !0), o = m(e, "color", 3, "primary"), u = m(e, "variant", 3, "text"), l = m(e, "touch", 3, !1), c = m(e, "action", 3, "close"), d = m(e, "defaultAction", 3, !1), h = m(e, "secondary", 3, !1), f = m(e, "component", 3, Dr), v = m(e, "tag", 19, () => e.href == null ? "button" : "a"), p = /* @__PURE__ */ Ge(e, [
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
  ]), b, _ = Ce({}), C = Ce({}), x = ue("SMUI:button:context");
  const S = /* @__PURE__ */ me(() => x === "dialog:action" && c() != null ? { "data-mdc-dialog-action": c() } : { action: c() }), g = /* @__PURE__ */ me(() => x === "dialog:action" && d() ? { "data-mdc-dialog-button-default": "" } : {}), E = /* @__PURE__ */ me(() => x === "banner" ? {} : { secondary: h() });
  let I = e.disabled;
  Se(() => {
    if (I !== e.disabled) {
      if (b) {
        const U = Z();
        "blur" in U && U.blur();
      }
      I = p.disabled;
    }
  }), te("SMUI:label:context", "button"), te("SMUI:icon:context", "button");
  function T(U) {
    _[U] || (_[U] = !0);
  }
  function A(U) {
    (!(U in _) || _[U]) && (_[U] = !1);
  }
  function w(U, N) {
    C[U] != N && (N === "" || N == null ? delete C[U] : C[U] = N);
  }
  function k() {
    x === "banner" && Ve(Z(), h() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function Z() {
    return b.getElement();
  }
  var G = { getElement: Z }, j = oe(), K = J(j);
  {
    let U = /* @__PURE__ */ me(() => [
      [
        Xt,
        {
          ripple: a(),
          unbounded: !1,
          color: o(),
          disabled: !!e.disabled,
          addClass: T,
          removeClass: A,
          addStyle: w
        }
      ],
      ...n()
    ]), N = /* @__PURE__ */ me(() => Ne({
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
      [r()]: !0
    })), M = /* @__PURE__ */ me(() => Object.entries(C).map(([z, ae]) => `${z}: ${ae};`).concat([i()]).join(" "));
    sr(K, f, (z, ae) => {
      xe(
        ae(z, $e(
          {
            get tag() {
              return v();
            },
            get use() {
              return s(U);
            },
            get class() {
              return s(N);
            },
            get style() {
              return s(M);
            }
          },
          () => s(S),
          () => s(g),
          () => s(E),
          {
            get href() {
              return e.href;
            }
          },
          () => p,
          {
            onclick: (B) => {
              var y;
              k(), (y = e.onclick) == null || y.call(e, B);
            },
            children: (B, y) => {
              var L = Rm(), ee = _e(J(L), 2);
              ye(ee, () => e.children ?? pe);
              var R = _e(ee);
              {
                var W = (ce) => {
                  var V = wm();
                  O(ce, V);
                };
                he(R, (ce) => {
                  l() && ce(W);
                });
              }
              O(B, L);
            },
            $$slots: { default: !0 }
          }
        )),
        (B) => b = B,
        () => b
      );
    });
  }
  return O(t, j), Re(G);
}
function ao(t, e) {
  we(e, !0);
  let n = m(e, "callback", 3, () => {
  }), r = m(e, "disabled", 3, !1), i = m(e, "variant", 3, "default"), a = m(e, "isAbortAction", 3, !1), o = m(e, "backgroundColor", 3, void 0);
  {
    let u = /* @__PURE__ */ me(() => a() ? "background-color: #ff3e00;" : "background-color: " + o());
    Mm(t, {
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
        var d = oe(), h = J(d);
        ye(h, () => e.children ?? pe), O(l, d);
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
}, Qn = {
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
var Dm = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n) {
      var r = t.call(this, ve(ve({}, e.defaultAdapter), n)) || this;
      return r.hasToggledAriaLabel = !1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ka;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Qn;
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
      var n = this.adapter.getAttr(Qn.DATA_ARIA_LABEL_ON), r = this.adapter.getAttr(Qn.DATA_ARIA_LABEL_OFF);
      if (n && r) {
        if (this.adapter.getAttr(Qn.ARIA_PRESSED) !== null)
          throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");
        this.hasToggledAriaLabel = !0;
      } else
        this.adapter.setAttr(Qn.ARIA_PRESSED, String(this.isOn()));
    }, e.prototype.handleClick = function() {
      this.toggle(), this.adapter.notifyChange({ isOn: this.isOn() });
    }, e.prototype.isOn = function() {
      return this.adapter.hasClass(ka.ICON_BUTTON_ON);
    }, e.prototype.toggle = function(n) {
      if (n === void 0 && (n = !this.isOn()), n ? this.adapter.addClass(ka.ICON_BUTTON_ON) : this.adapter.removeClass(ka.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var r = n ? this.adapter.getAttr(Qn.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(Qn.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr(Qn.ARIA_LABEL, r || "");
      } else
        this.adapter.setAttr(Qn.ARIA_PRESSED, "" + n);
    }, e;
  }(Mt)
), Pm = /* @__PURE__ */ ge('<div class="mdc-icon-button__touch"></div>'), Nm = /* @__PURE__ */ ge('<div class="mdc-icon-button__ripple"></div> <!><!>', 1);
function Fm(t, e) {
  we(e, !0);
  let n = () => {
  };
  function r(y) {
    return y === n;
  }
  let i = m(e, "use", 19, () => []), a = m(e, "class", 3, ""), o = m(e, "style", 3, ""), u = m(e, "ripple", 3, !0), l = m(e, "toggle", 3, !1), c = m(e, "pressed", 15, n), d = m(e, "touch", 3, !1), h = m(e, "displayFlex", 3, !0), f = m(e, "size", 3, "normal"), v = m(e, "component", 3, Dr), p = m(e, "tag", 19, () => e.href == null ? "button" : "a"), b = /* @__PURE__ */ Ge(e, [
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
  ]), _, C, x = /* @__PURE__ */ Ee(Ce({})), S = Ce({}), g = /* @__PURE__ */ Ee(Ce({})), E = ue("SMUI:icon-button:context"), I = ue("SMUI:icon-button:aria-describedby");
  const T = /* @__PURE__ */ me(() => {
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
  Se(() => {
    if (A != !!e.disabled) {
      if (_) {
        const y = M();
        "blur" in y && y.blur();
      }
      A = !!e.disabled;
    }
  }), te("SMUI:icon:context", "icon-button");
  let w = null;
  Se(() => {
    _ && M() && l() !== w && (l() && !C ? (C = new Dm({
      addClass: Z,
      hasClass: k,
      notifyChange: (y) => {
        N(y), Ve(M(), "SMUIIconButtonToggleChange", y);
      },
      removeClass: G,
      getAttr: K,
      setAttr: U
    }), C.init()) : !l() && C && (C.destroy(), C = void 0, $(x, {}, !0), $(g, {}, !0)), w = l());
  }), Se(() => {
    C && !r(c()) && C.isOn() !== c() && C.toggle(c());
  }), Ln(() => {
    C && C.destroy();
  });
  function k(y) {
    return y in s(x) ? s(x)[y] : M().classList.contains(y);
  }
  function Z(y) {
    s(x)[y] || (s(x)[y] = !0);
  }
  function G(y) {
    (!(y in s(x)) || s(x)[y]) && (s(x)[y] = !1);
  }
  function j(y, L) {
    S[y] != L && (L === "" || L == null ? delete S[y] : S[y] = L);
  }
  function K(y) {
    return y in s(g) ? s(g)[y] ?? null : M().getAttribute(y);
  }
  function U(y, L) {
    s(g)[y] !== L && (s(g)[y] = L);
  }
  function N(y) {
    c(y.isOn);
  }
  function M() {
    return _.getElement();
  }
  var z = { getElement: M }, ae = oe(), B = J(ae);
  {
    let y = /* @__PURE__ */ me(() => [
      [
        Xt,
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
      ...i()
    ]), L = /* @__PURE__ */ me(() => Ne({
      "mdc-icon-button": !0,
      "mdc-icon-button--on": !r(c()) && c(),
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
    })), ee = /* @__PURE__ */ me(() => Object.entries(S).map(([ce, V]) => `${ce}: ${V};`).concat([o()]).join(" ")), R = /* @__PURE__ */ me(() => r(c()) ? null : c() ? "true" : "false"), W = /* @__PURE__ */ me(() => c() ? e.ariaLabelOn : e.ariaLabelOff);
    sr(B, v, (ce, V) => {
      xe(
        V(ce, $e(
          {
            get tag() {
              return p();
            },
            get use() {
              return s(y);
            },
            get class() {
              return s(L);
            },
            get style() {
              return s(ee);
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
              return I;
            },
            get href() {
              return e.href;
            }
          },
          () => s(T),
          () => s(g),
          () => b,
          {
            onclick: (se) => {
              var Q;
              C && C.handleClick(), E === "top-app-bar:navigation" && Ve(M(), "SMUITopAppBarIconButtonNav"), (Q = e.onclick) == null || Q.call(e, se);
            },
            children: (se, Q) => {
              var fe = Nm(), ne = _e(J(fe), 2);
              ye(ne, () => e.children ?? pe);
              var ze = _e(ne);
              {
                var We = (De) => {
                  var Le = Pm();
                  O(De, Le);
                };
                he(ze, (De) => {
                  d() && De(We);
                });
              }
              O(se, fe);
            },
            $$slots: { default: !0 }
          }
        )),
        (se) => _ = se,
        () => _
      );
    });
  }
  return O(t, ae), Re(z);
}
function Hm(t, e) {
  let n = m(e, "callback", 3, () => {
  }), r = m(e, "icon", 3, ""), i = m(e, "disabled", 3, !1);
  Fm(t, {
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
      xm(a, {
        class: "material-icons",
        children: (u, l) => {
          var c = Vt();
          ke(() => ft(c, r())), O(u, c);
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
var Um = {
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
var Bm = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n) {
      var r = t.call(this, ve(ve({}, e.defaultAdapter), n)) || this;
      return r.shakeAnimationEndHandler = function() {
        r.handleShakeAnimationEnd();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Um;
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
  }(Mt)
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
var kr = {
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
var km = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n) {
      var r = t.call(this, ve(ve({}, e.defaultAdapter), n)) || this;
      return r.transitionEndHandler = function(i) {
        r.handleTransitionEnd(i);
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return kr;
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
      this.adapter.removeClass(kr.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(kr.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(n) {
      this.adapter.setStyle("transform-origin", n + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(kr.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(n) {
      var r = this.adapter.hasClass(kr.LINE_RIPPLE_DEACTIVATING);
      n.propertyName === "opacity" && r && (this.adapter.removeClass(kr.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(kr.LINE_RIPPLE_DEACTIVATING));
    }, e;
  }(Mt)
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
var Vm = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Nl = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, Gm = {
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
var jm = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n) {
      return t.call(this, ve(ve({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Vm;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Gm;
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
      var r = e.cssClasses.OUTLINE_NOTCHED;
      n > 0 && (n += Nl.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(n), this.adapter.addClass(r);
    }, e.prototype.closeNotch = function() {
      var n = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(n), this.adapter.removeNotchWidthProperty();
    }, e;
  }(Mt)
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
}, Wm = {
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
}, qm = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], Km = [
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
var Hl = ["mousedown", "touchstart"], Ul = ["click", "keydown"], zm = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n, r) {
      r === void 0 && (r = {});
      var i = t.call(this, ve(ve({}, e.defaultAdapter), n)) || this;
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
        return Wm;
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
        return Km.indexOf(n) >= 0;
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
        for (var o = Rt(Hl), u = o.next(); !u.done; u = o.next()) {
          var l = u.value;
          this.adapter.registerInputInteractionHandler(l, this.setPointerXOffset);
        }
      } catch (h) {
        n = { error: h };
      } finally {
        try {
          u && !u.done && (r = o.return) && r.call(o);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var c = Rt(Ul), d = c.next(); !d.done; d = c.next()) {
          var l = d.value;
          this.adapter.registerTextFieldInteractionHandler(l, this.textFieldInteractionHandler);
        }
      } catch (h) {
        i = { error: h };
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
        for (var o = Rt(Hl), u = o.next(); !u.done; u = o.next()) {
          var l = u.value;
          this.adapter.deregisterInputInteractionHandler(l, this.setPointerXOffset);
        }
      } catch (h) {
        n = { error: h };
      } finally {
        try {
          u && !u.done && (r = o.return) && r.call(o);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var c = Rt(Ul), d = c.next(); !d.done; d = c.next()) {
          var l = d.value;
          this.adapter.deregisterTextFieldInteractionHandler(l, this.textFieldInteractionHandler);
        }
      } catch (h) {
        i = { error: h };
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
        return qm.indexOf(i) > -1 ? (r.styleValidity(!0), r.adapter.setLabelRequired(r.getNativeInput().required), !0) : !1;
      }), n.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(n) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (n) {
          var r = this.adapter.getLabelWidth() * Fl.LABEL_SCALE;
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
        a && o ? this.adapter.setInputAttr(jo.ARIA_DESCRIBEDBY, o) : this.adapter.removeInputAttr(jo.ARIA_DESCRIBEDBY);
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
  }(Mt)
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
}, Xm = {
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
var kl = ["click", "keydown"], Ym = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n) {
      var r = t.call(this, ve(ve({}, e.defaultAdapter), n)) || this;
      return r.savedTabIndex = null, r.interactionHandler = function(i) {
        r.handleInteraction(i);
      }, r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Bl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Xm;
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
        for (var i = Rt(kl), a = i.next(); !a.done; a = i.next()) {
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
        for (var i = Rt(kl), a = i.next(); !a.done; a = i.next()) {
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
      this.savedTabIndex && (n ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", Bl.ICON_ROLE)));
    }, e.prototype.setAriaLabel = function(n) {
      this.adapter.setAttr("aria-label", n);
    }, e.prototype.setContent = function(n) {
      this.adapter.setContent(n);
    }, e.prototype.handleInteraction = function(n) {
      var r = n.key === "Enter" || n.keyCode === 13;
      (n.type === "click" || r) && (n.preventDefault(), this.adapter.notifyIconAction());
    }, e;
  }(Mt)
), Zm = /* @__PURE__ */ ge("<span><!></span>"), Qm = /* @__PURE__ */ ge("<label><!></label>");
function oo(t, e) {
  we(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "floatAbove", 15, !1), o = m(e, "required", 15, !1), u = m(e, "wrapped", 3, !1), l = /* @__PURE__ */ Ge(e, [
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
  ]), c, d = /* @__PURE__ */ Ee(void 0), h = new Qi(), f = Ce({}), v = Ce({}), p = ue("SMUI:generic:input:props") ?? {}, b = a();
  Se(() => {
    s(d) && b !== a() && (b = a(), s(d).float(a()));
  });
  let _ = o();
  Se(() => {
    s(d) && _ !== o() && (_ = o(), s(d).setRequired(o()));
  });
  const C = ue("SMUI:floating-label:mount"), x = ue("SMUI:floating-label:unmount");
  ut(() => {
    $(
      d,
      new Bm({
        addClass: S,
        removeClass: g,
        getWidth: () => {
          var y, L;
          const z = Z(), ae = z.cloneNode(!0);
          (y = z.parentNode) == null || y.appendChild(ae), ae.classList.add("smui-floating-label--remove-transition"), ae.classList.add("smui-floating-label--force-size"), ae.classList.remove("mdc-floating-label--float-above");
          const B = ae.scrollWidth;
          return (L = z.parentNode) == null || L.removeChild(ae), B;
        },
        registerInteractionHandler: (z, ae) => h.on(Z(), z, ae),
        deregisterInteractionHandler: (z, ae) => h.off(Z(), z, ae)
      }),
      !0
    );
    const M = {
      get element() {
        return Z();
      },
      addStyle: E,
      removeStyle: I
    };
    return C && C(M), s(d).init(), () => {
      var z;
      x && x(M), (z = s(d)) == null || z.destroy(), h.clear();
    };
  });
  function S(M) {
    f[M] || (f[M] = !0);
  }
  function g(M) {
    (!(M in f) || f[M]) && (f[M] = !1);
  }
  function E(M, z) {
    v[M] != z && (z === "" || z == null ? delete v[M] : v[M] = z);
  }
  function I(M) {
    M in v && delete v[M];
  }
  function T(M) {
    var z;
    (z = s(d)) == null || z.shake(M);
  }
  function A(M) {
    a(M);
  }
  function w(M) {
    o(M);
  }
  function k() {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    return s(d).getWidth();
  }
  function Z() {
    return c;
  }
  var G = { shake: T, float: A, setRequired: w, getWidth: k, getElement: Z }, j = oe(), K = J(j);
  {
    var U = (M) => {
      var z = Zm();
      Ue(z, (B, y) => ({ class: B, style: y, ...l }), [
        () => Ne({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": o(),
          ...f,
          [r()]: !0
        }),
        () => Object.entries(v).map(([B, y]) => `${B}: ${y};`).concat([i()]).join(" ")
      ]);
      var ae = Ie(z);
      ye(ae, () => e.children ?? pe), xe(z, (B) => c = B, () => c), Be(z, (B, y) => X == null ? void 0 : X(B, y), n), O(M, z);
    }, N = (M) => {
      var z = Qm();
      Ue(
        z,
        (B, y) => ({
          class: B,
          style: y,
          for: e.for || (p ? p.id : void 0),
          ...l
        }),
        [
          () => Ne({
            "mdc-floating-label": !0,
            "mdc-floating-label--float-above": a(),
            "mdc-floating-label--required": o(),
            ...f,
            [r()]: !0
          }),
          () => Object.entries(v).map(([B, y]) => `${B}: ${y};`).concat([i()]).join(" ")
        ]
      );
      var ae = Ie(z);
      ye(ae, () => e.children ?? pe), xe(z, (B) => c = B, () => c), Be(z, (B, y) => X == null ? void 0 : X(B, y), n), O(M, z);
    };
    he(K, (M) => {
      u() ? M(U) : M(N, !1);
    });
  }
  return O(t, j), Re(G);
}
var Jm = /* @__PURE__ */ ge("<div></div>");
function Dc(t, e) {
  we(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "active", 3, !1), o = /* @__PURE__ */ Ge(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "active"
  ]), u, l = /* @__PURE__ */ Ee(void 0), c = new Qi(), d = Ce({}), h = Ce({});
  ut(() => ($(
    l,
    new km({
      addClass: v,
      removeClass: p,
      hasClass: f,
      setStyle: b,
      registerEventHandler: (I, T) => c.on(S(), I, T),
      deregisterEventHandler: (I, T) => c.off(S(), I, T)
    }),
    !0
  ), s(l).init(), () => {
    var I;
    (I = s(l)) == null || I.destroy(), c.clear();
  }));
  function f(I) {
    return I in d ? d[I] : S().classList.contains(I);
  }
  function v(I) {
    d[I] || (d[I] = !0);
  }
  function p(I) {
    (!(I in d) || d[I]) && (d[I] = !1);
  }
  function b(I, T) {
    h[I] != T && (T === "" || T == null ? delete h[I] : h[I] = T);
  }
  function _() {
    var I;
    (I = s(l)) == null || I.activate();
  }
  function C() {
    var I;
    (I = s(l)) == null || I.deactivate();
  }
  function x(I) {
    var T;
    (T = s(l)) == null || T.setRippleCenter(I);
  }
  function S() {
    return u;
  }
  var g = { activate: _, deactivate: C, setRippleCenter: x, getElement: S }, E = Jm();
  return Ue(E, (I, T) => ({ class: I, style: T, ...o }), [
    () => Ne({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...d,
      [r()]: !0
    }),
    () => Object.entries(h).map(([I, T]) => `${I}: ${T};`).concat([i()]).join(" ")
  ]), xe(E, (I) => u = I, () => u), Be(E, (I, T) => X == null ? void 0 : X(I, T), n), O(t, E), Re(g);
}
var $m = /* @__PURE__ */ ge('<div class="mdc-notched-outline__notch"><!></div>'), ep = /* @__PURE__ */ ge('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function Pc(t, e) {
  we(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "notched", 3, !1), a = m(e, "noLabel", 3, !1), o = /* @__PURE__ */ Ge(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "notched",
    "noLabel",
    "children"
  ]), u, l = /* @__PURE__ */ Ee(void 0), c = /* @__PURE__ */ Ee(void 0), d = Ce({}), h = Ce({}), f;
  Se(() => {
    s(c) !== f && (s(c) ? (s(c).addStyle("transition-duration", "0s"), v("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      s(c) && s(c).removeStyle("transition-duration");
    })) : p("mdc-notched-outline--upgraded"), f = s(c));
  }), te("SMUI:floating-label:mount", (A) => {
    $(c, A, !0);
  }), te("SMUI:floating-label:unmount", () => {
    $(c, void 0);
  }), ut(() => ($(
    l,
    new jm({
      addClass: v,
      removeClass: p,
      setNotchWidthProperty: (A) => b("width", A + "px"),
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
  function b(A, w) {
    h[A] != w && (w === "" || w == null ? delete h[A] : h[A] = w);
  }
  function _(A) {
    A in h && delete h[A];
  }
  function C(A) {
    var w;
    (w = s(l)) == null || w.notch(A);
  }
  function x() {
    var A;
    (A = s(l)) == null || A.closeNotch();
  }
  function S() {
    return u;
  }
  var g = { notch: C, closeNotch: x, getElement: S }, E = ep();
  Ue(E, (A) => ({ class: A, ...o }), [
    () => Ne({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": i(),
      "mdc-notched-outline--no-label": a(),
      ...d,
      [r()]: !0
    })
  ]);
  var I = _e(Ie(E), 2);
  {
    var T = (A) => {
      var w = $m(), k = Ie(w);
      ye(k, () => e.children ?? pe), ke((Z) => an(w, Z), [
        () => Object.entries(h).map(([Z, G]) => `${Z}: ${G};`).join(" ")
      ]), O(A, w);
    };
    he(I, (A) => {
      a() || A(T);
    });
  }
  return xe(E, (A) => u = A, () => u), Be(E, (A, w) => X == null ? void 0 : X(A, w), n), O(t, E), Re(g);
}
function Ma(t, e) {
  we(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "component", 3, Dr), a = m(e, "tag", 3, "div"), o = m(e, "_smuiClass", 3, ""), u = m(e, "_smuiClassMap", 23, () => ({})), l = m(e, "_smuiContexts", 19, () => ({})), c = m(e, "_smuiProps", 19, () => ({})), d = /* @__PURE__ */ Ge(e, [
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
    const S = ue(x);
    S && "subscribe" in S && f.push(S.subscribe((g) => {
      u()[C] = g;
    }));
  });
  for (let C in l())
    l().hasOwnProperty(C) && te(C, l()[C]);
  Ln(() => {
    for (const C of f)
      C();
  });
  function v() {
    return h.getElement();
  }
  var p = { getElement: v }, b = oe(), _ = J(b);
  {
    let C = /* @__PURE__ */ me(() => Ne({
      [o()]: !0,
      ...u(),
      [r()]: !0
    }));
    sr(_, i, (x, S) => {
      xe(
        S(x, $e(
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
            children: (g, E) => {
              var I = oe(), T = J(I);
              ye(T, () => e.children ?? pe), O(g, I);
            },
            $$slots: { default: !0 }
          }
        )),
        (g) => h = g,
        () => h
      );
    });
  }
  return O(t, b), Re(p);
}
function tp(t, e) {
  we(e, !0);
  let n = /* @__PURE__ */ Ge(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return xe(
    Ma(t, $e({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => n, {
      children: (o, u) => {
        var l = oe(), c = J(l);
        ye(c, () => e.children ?? pe), O(o, l);
      },
      $$slots: { default: !0 }
    })),
    (o) => r = o,
    () => r
  ), Re(a);
}
function np(t, e) {
  we(e, !0);
  let n = /* @__PURE__ */ Ge(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return xe(
    Ma(t, $e(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => n,
      {
        children: (o, u) => {
          var l = oe(), c = J(l);
          ye(c, () => e.children ?? pe), O(o, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), Re(a);
}
function rp(t, e) {
  we(e, !0);
  let n = /* @__PURE__ */ Ge(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return xe(
    Ma(t, $e(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => n,
      {
        children: (o, u) => {
          var l = oe(), c = J(l);
          ye(c, () => e.children ?? pe), O(o, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), Re(a);
}
var ip = /* @__PURE__ */ ge("<input/>");
function ap(t, e) {
  we(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "type", 3, "text"), a = m(e, "placeholder", 3, " "), o = m(e, "value", 15), u = m(e, "files", 15, null), l = m(e, "dirty", 15, !1), c = m(e, "invalid", 15, !1), d = m(e, "updateInvalid", 3, !0), h = m(e, "initialInvalid", 3, !1), f = m(e, "emptyValueNull", 19, () => o() === null), v = m(e, "emptyValueUndefined", 19, () => o() === void 0), p = /* @__PURE__ */ Ge(e, [
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
  ]), b, _ = Ce({}), C = Ce({});
  Se(() => {
    i() === "file" ? delete C.value : C.value = o() == null ? "" : o();
  }), ut(() => {
    d() && h() && c(k().matches(":invalid"));
  });
  function x(U) {
    return U === "" ? Number.NaN : +U;
  }
  function S(U) {
    if (i() === "file") {
      u(U.currentTarget.files);
      return;
    }
    if (U.currentTarget.value === "" && f()) {
      o(null);
      return;
    }
    if (U.currentTarget.value === "" && v()) {
      o(void 0);
      return;
    }
    switch (i()) {
      case "number":
      case "range":
        o(x(U.currentTarget.value));
        break;
      default:
        o(U.currentTarget.value);
        break;
    }
  }
  function g(U) {
    (i() === "file" || i() === "range") && S(U), l(!0), d() && c(k().matches(":invalid"));
  }
  function E(U) {
    return U in _ ? _[U] ?? null : k().getAttribute(U);
  }
  function I(U, N) {
    _[U] !== N && (_[U] = N);
  }
  function T(U) {
    (!(U in _) || _[U] != null) && (_[U] = void 0);
  }
  function A() {
    k().focus();
  }
  function w() {
    k().blur();
  }
  function k() {
    return b;
  }
  var Z = { getAttr: E, addAttr: I, removeAttr: T, focus: A, blur: w, getElement: k }, G = ip(), j = (U) => {
    var N;
    i() !== "file" && S(U), (N = e.oninput) == null || N.call(e, U);
  }, K = (U) => {
    var N;
    g(U), (N = e.onchange) == null || N.call(e, U);
  };
  return Ue(
    G,
    (U) => ({
      class: U,
      type: i(),
      placeholder: a(),
      ...C,
      ..._,
      ...p,
      oninput: j,
      onchange: K
    }),
    [
      () => Ne({ "mdc-text-field__input": !0, [r()]: !0 })
    ],
    void 0,
    void 0,
    !0
  ), xe(G, (U) => b = U, () => b), Be(G, (U, N) => X == null ? void 0 : X(U, N), n), O(t, G), Re(Z);
}
var op = /* @__PURE__ */ ge("<textarea></textarea>");
function sp(t, e) {
  we(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "value", 15, ""), o = m(e, "dirty", 15, !1), u = m(e, "invalid", 15, !1), l = m(e, "updateInvalid", 3, !0), c = m(e, "initialInvalid", 3, !1), d = m(e, "resizable", 3, !0), h = /* @__PURE__ */ Ge(e, [
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
  ]), f, v = Ce({});
  ut(() => {
    l() && c() && u(g().matches(":invalid"));
  });
  function p() {
    o(!0), l() && u(g().matches(":invalid"));
  }
  function b(A) {
    return A in v ? v[A] ?? null : g().getAttribute(A);
  }
  function _(A, w) {
    v[A] !== w && (v[A] = w);
  }
  function C(A) {
    (!(A in v) || v[A] != null) && (v[A] = void 0);
  }
  function x() {
    g().focus();
  }
  function S() {
    g().blur();
  }
  function g() {
    return f;
  }
  var E = { getAttr: b, addAttr: _, removeAttr: C, focus: x, blur: S, getElement: g }, I = op(), T = (A) => {
    var w;
    p(), (w = e.onchange) == null || w.call(e, A);
  };
  return Ue(
    I,
    (A) => ({
      class: A,
      style: `${d() ? "" : "resize: none; "}${i()}`,
      ...v,
      ...h,
      onchange: T
    }),
    [
      () => Ne({ "mdc-text-field__input": !0, [r()]: !0 })
    ]
  ), xe(I, (A) => f = A, () => f), Be(I, (A, w) => X == null ? void 0 : X(A, w), n), La(() => Ia(I, a)), O(t, I), Re(E);
}
var lp = /* @__PURE__ */ ge('<span class="mdc-text-field__ripple"></span>'), up = /* @__PURE__ */ ge("<!> <!>", 1), cp = /* @__PURE__ */ ge("<span><!> <!></span>"), dp = /* @__PURE__ */ ge("<!> <!> <!>", 1), fp = /* @__PURE__ */ ge("<label><!> <!> <!> <!> <!> <!> <!></label>"), hp = /* @__PURE__ */ ge("<div><!> <!> <!> <!> <!></div>"), vp = /* @__PURE__ */ ge("<!> <!>", 1);
function Vl(t, e) {
  we(e, !0);
  const { applyPassive: n } = Mc;
  let r = () => {
  };
  function i(F) {
    return F === r;
  }
  let a = m(e, "use", 19, () => []), o = m(e, "class", 3, ""), u = m(e, "style", 3, ""), l = m(e, "ripple", 3, !0), c = m(e, "disabled", 3, !1), d = m(e, "required", 3, !1), h = m(e, "textarea", 3, !1), f = m(e, "variant", 19, () => h() ? "outlined" : "standard"), v = m(e, "noLabel", 3, !1), p = m(e, "type", 3, "text"), b = m(e, "value", 15), _ = m(e, "files", 15, r), C = m(e, "invalid", 15, r), x = m(e, "updateInvalid", 19, () => i(C())), S = m(e, "initialInvalid", 3, !1), g = m(e, "dirty", 15, !1), E = m(e, "validateOnValueChange", 19, x), I = m(e, "useNativeValidation", 19, x), T = m(e, "withLeadingIcon", 3, r), A = m(e, "withTrailingIcon", 3, r), w = m(e, "input", 7), k = m(e, "floatingLabel", 7), Z = m(e, "lineRipple", 7), G = m(e, "notchedOutline", 7), j = /* @__PURE__ */ Ge(e, [
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
  const K = b() !== void 0 || b() === void 0 && e.input$emptyValueUndefined || !i(_());
  i(_()) && _(null), i(C()) && C(!1);
  let U, N = /* @__PURE__ */ Ee(void 0), M = new Qi(), z = Ce({}), ae = Ce({}), B = /* @__PURE__ */ Ee(void 0), y = /* @__PURE__ */ Ee(!1), L = /* @__PURE__ */ Ee(Ce(S())), ee = ue("SMUI:addLayoutListener"), R, W, ce = new Promise((F) => W = F), V, se, Q, fe;
  const ne = /* @__PURE__ */ me(() => w() && w().getElement());
  Se(() => {
    (g() || s(L) || !x()) && s(N) && s(N).isValid() !== !C() && (x() ? C(!s(N).isValid()) : s(N).setValid(!C()));
  }), Se(() => {
    s(N) && s(N).getValidateOnValueChange() !== E() && s(N).setValidateOnValueChange(i(E()) ? !1 : E());
  }), Se(() => {
    s(N) && s(N).setUseNativeValidation(i(I()) ? !0 : I());
  }), Se(() => {
    s(N) && s(N).setDisabled(c());
  });
  let ze = b();
  Se(() => {
    if (s(N) && K && ze !== b()) {
      ze = b();
      const F = `${b() == null ? "" : b()}`;
      s(N).getValue() !== F && s(N).setValue(F);
    }
  }), ee && (R = ee(P)), te("SMUI:textfield:leading-icon:mount", (F) => {
    V = F;
  }), te("SMUI:textfield:leading-icon:unmount", () => {
    V = void 0;
  }), te("SMUI:textfield:trailing-icon:mount", (F) => {
    se = F;
  }), te("SMUI:textfield:trailing-icon:unmount", () => {
    se = void 0;
  }), te("SMUI:textfield:helper-text:id", (F) => {
    $(B, F, !0);
  }), te("SMUI:textfield:helper-text:mount", (F) => {
    Q = F;
  }), te("SMUI:textfield:helper-text:unmount", () => {
    $(B, void 0), Q = void 0;
  }), te("SMUI:textfield:character-counter:mount", (F) => {
    fe = F;
  }), te("SMUI:textfield:character-counter:unmount", () => {
    fe = void 0;
  }), ut(() => {
    var F;
    if ($(
      N,
      new zm(
        {
          // getRootAdapterMethods_
          addClass: De,
          removeClass: Le,
          hasClass: We,
          registerTextFieldInteractionHandler: (Y, Pe) => M.on(q(), Y, Pe),
          deregisterTextFieldInteractionHandler: (Y, Pe) => M.off(q(), Y, Pe),
          registerValidationAttributeChangeHandler: (Y) => {
            const Pe = (Pt) => Pt.map((Wt) => Wt.attributeName).filter((Wt) => Wt), et = new MutationObserver((Pt) => {
              I() && Y(Pe(Pt));
            }), mt = { attributes: !0 };
            return w() && et.observe(w().getElement(), mt), et;
          },
          deregisterValidationAttributeChangeHandler: (Y) => {
            Y.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var Y;
            return ((Y = w()) == null ? void 0 : Y.getElement()) ?? null;
          },
          setInputAttr: (Y, Pe) => {
            var et;
            (et = w()) == null || et.addAttr(Y, Pe);
          },
          removeInputAttr: (Y) => {
            var Pe;
            (Pe = w()) == null || Pe.removeAttr(Y);
          },
          isFocused: () => {
            var Y;
            return document.activeElement === ((Y = w()) == null ? void 0 : Y.getElement());
          },
          registerInputInteractionHandler: (Y, Pe) => {
            var mt;
            const et = (mt = w()) == null ? void 0 : mt.getElement();
            if (et) {
              const Pt = n();
              M.on(et, Y, Pe, typeof Pt == "boolean" ? { capture: Pt } : Pt);
            }
          },
          deregisterInputInteractionHandler: (Y, Pe) => {
            var mt;
            const et = (mt = w()) == null ? void 0 : mt.getElement();
            et && M.off(et, Y, Pe);
          },
          // getLabelAdapterMethods_
          floatLabel: (Y) => k() && k().float(Y),
          getLabelWidth: () => k() ? k().getWidth() : 0,
          hasLabel: () => !!k(),
          shakeLabel: (Y) => k() && k().shake(Y),
          setLabelRequired: (Y) => k() && k().setRequired(Y),
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
            return fe;
          },
          get leadingIcon() {
            return V;
          },
          get trailingIcon() {
            return se;
          }
        }
      ),
      !0
    ), K) {
      if (w() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (F = s(N)) == null || F.init();
    } else
      Eo().then(() => {
        var Y;
        if (w() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (Y = s(N)) == null || Y.init();
      });
    return W(), () => {
      var Y;
      (Y = s(N)) == null || Y.destroy(), M.clear();
    };
  }), Ln(() => {
    R && R();
  });
  function We(F) {
    return F in z ? z[F] ?? null : q().classList.contains(F);
  }
  function De(F) {
    z[F] || (z[F] = !0);
  }
  function Le(F) {
    (!(F in z) || z[F]) && (z[F] = !1);
  }
  function le(F, Y) {
    ae[F] != Y && (Y === "" || Y == null ? delete ae[F] : ae[F] = Y);
  }
  function Te() {
    var F;
    (F = w()) == null || F.focus();
  }
  function Fe() {
    var F;
    (F = w()) == null || F.blur();
  }
  function P() {
    if (s(N)) {
      const F = s(N).shouldFloat;
      s(N).notchOutline(F);
    }
  }
  function q() {
    return U;
  }
  var re = { focus: Te, blur: Fe, layout: P, getElement: q }, Ae = vp(), St = J(Ae);
  {
    var Dt = (F) => {
      var Y = fp();
      Ue(Y, (qe, at, tt) => ({ class: qe, style: at, for: void 0, ...tt }), [
        () => Ne({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": c(),
          "mdc-text-field--textarea": h(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !h(),
          "mdc-text-field--no-label": v() || e.label == null,
          "mdc-text-field--label-floating": s(y) || b() != null && b() !== "",
          "mdc-text-field--with-leading-icon": i(T()) ? e.leadingIcon : T(),
          "mdc-text-field--with-trailing-icon": i(A()) ? e.trailingIcon : A(),
          "mdc-text-field--with-internal-counter": h() && e.internalCounter,
          "mdc-text-field--invalid": C(),
          ...z,
          [o()]: !0
        }),
        () => Object.entries(ae).map(([qe, at]) => `${qe}: ${at};`).concat([u()]).join(" "),
        () => ii(j, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Pe = Ie(Y);
      {
        var et = (qe) => {
          var at = up(), tt = J(at);
          {
            var Nt = (yt) => {
              var Tt = lp();
              O(yt, Tt);
            };
            he(tt, (yt) => {
              f() === "filled" && yt(Nt);
            });
          }
          var Ft = _e(tt, 2);
          {
            var rt = (yt) => {
              {
                let Tt = /* @__PURE__ */ me(() => s(y) || b() != null && b() !== "" && (typeof b() != "number" || !isNaN(b()))), Qe = /* @__PURE__ */ me(() => lt(j, "label$"));
                xe(
                  oo(yt, $e(
                    {
                      get floatAbove() {
                        return s(Tt);
                      },
                      get required() {
                        return d();
                      },
                      wrapped: !0
                    },
                    () => s(Qe),
                    {
                      children: (ht, yn) => {
                        var ln = oe(), It = J(ln);
                        {
                          var Ht = (Qt) => {
                          }, Lt = (Qt) => {
                            var Nr = oe(), In = J(Nr);
                            {
                              var dr = (_n) => {
                                var Xn = Vt();
                                ke(() => ft(Xn, e.label)), O(_n, Xn);
                              }, Ji = (_n) => {
                                var Xn = oe(), Hn = J(Xn);
                                ye(Hn, () => e.label), O(_n, Xn);
                              };
                              he(
                                In,
                                (_n) => {
                                  typeof e.label == "string" ? _n(dr) : _n(Ji, !1);
                                },
                                !0
                              );
                            }
                            O(Qt, Nr);
                          };
                          he(It, (Qt) => {
                            e.label == null ? Qt(Ht) : Qt(Lt, !1);
                          });
                        }
                        O(ht, ln);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (ht) => k(ht),
                  () => k()
                );
              }
            };
            he(Ft, (yt) => {
              !v() && e.label != null && yt(rt);
            });
          }
          O(qe, at);
        };
        he(Pe, (qe) => {
          !h() && f() !== "outlined" && qe(et);
        });
      }
      var mt = _e(Pe, 2);
      {
        var Pt = (qe) => {
          {
            let at = /* @__PURE__ */ me(() => v() || e.label == null), tt = /* @__PURE__ */ me(() => lt(j, "outline$"));
            xe(
              Pc(qe, $e(
                {
                  get noLabel() {
                    return s(at);
                  }
                },
                () => s(tt),
                {
                  children: (Nt, Ft) => {
                    var rt = oe(), yt = J(rt);
                    {
                      var Tt = (Qe) => {
                        {
                          let ht = /* @__PURE__ */ me(() => s(y) || b() != null && b() !== "" && (typeof b() != "number" || !isNaN(b()))), yn = /* @__PURE__ */ me(() => lt(j, "label$"));
                          xe(
                            oo(Qe, $e(
                              {
                                get floatAbove() {
                                  return s(ht);
                                },
                                get required() {
                                  return d();
                                },
                                wrapped: !0
                              },
                              () => s(yn),
                              {
                                children: (ln, It) => {
                                  var Ht = oe(), Lt = J(Ht);
                                  {
                                    var Qt = (In) => {
                                    }, Nr = (In) => {
                                      var dr = oe(), Ji = J(dr);
                                      {
                                        var _n = (Hn) => {
                                          var Fr = Vt();
                                          ke(() => ft(Fr, e.label)), O(Hn, Fr);
                                        }, Xn = (Hn) => {
                                          var Fr = oe(), Lo = J(Fr);
                                          ye(Lo, () => e.label), O(Hn, Fr);
                                        };
                                        he(
                                          Ji,
                                          (Hn) => {
                                            typeof e.label == "string" ? Hn(_n) : Hn(Xn, !1);
                                          },
                                          !0
                                        );
                                      }
                                      O(In, dr);
                                    };
                                    he(Lt, (In) => {
                                      e.label == null ? In(Qt) : In(Nr, !1);
                                    });
                                  }
                                  O(ln, Ht);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (ln) => k(ln),
                            () => k()
                          );
                        }
                      };
                      he(yt, (Qe) => {
                        !v() && e.label != null && Qe(Tt);
                      });
                    }
                    O(Nt, rt);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (Nt) => G(Nt),
              () => G()
            );
          }
        };
        he(mt, (qe) => {
          (h() || f() === "outlined") && qe(Pt);
        });
      }
      var Wt = _e(mt, 2);
      Ci(Wt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (qe, at) => {
          var tt = oe(), Nt = J(tt);
          ye(Nt, () => e.leadingIcon ?? pe), O(qe, tt);
        },
        $$slots: { default: !0 }
      });
      var cr = _e(Wt, 2);
      ye(cr, () => e.children ?? pe);
      var nt = _e(cr, 2);
      {
        var xt = (qe) => {
          var at = cp(), tt = Ie(at);
          {
            let Ft = /* @__PURE__ */ me(() => lt(j, "input$"));
            xe(
              sp(tt, $e(
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
                    return s(B);
                  },
                  get "aria-describedby"() {
                    return s(B);
                  }
                },
                () => s(Ft),
                {
                  onblur: (rt) => {
                    var yt;
                    $(y, !1), $(L, !0), Ve(q(), "blur", rt), (yt = e.input$onblur) == null || yt.call(e, rt);
                  },
                  onfocus: (rt) => {
                    var yt;
                    $(y, !0), Ve(q(), "focus", rt), (yt = e.input$onfocus) == null || yt.call(e, rt);
                  },
                  get value() {
                    return b();
                  },
                  set value(rt) {
                    b(rt);
                  },
                  get dirty() {
                    return g();
                  },
                  set dirty(rt) {
                    g(rt);
                  },
                  get invalid() {
                    return C();
                  },
                  set invalid(rt) {
                    C(rt);
                  }
                }
              )),
              (rt) => w(rt),
              () => w()
            );
          }
          var Nt = _e(tt, 2);
          ye(Nt, () => e.internalCounter ?? pe), ke((Ft) => ec(at, 1, Ft), [
            () => $u(Ne({
              "mdc-text-field__resizer": !("input$resizable" in j) || e.input$resizable
            }))
          ]), O(qe, at);
        }, qt = (qe) => {
          var at = dp(), tt = J(at);
          {
            var Nt = (Tt) => {
              var Qe = oe(), ht = J(Qe);
              {
                var yn = (It) => {
                  np(It, {
                    children: (Ht, Lt) => {
                      var Qt = Vt();
                      ke(() => ft(Qt, e.prefix)), O(Ht, Qt);
                    },
                    $$slots: { default: !0 }
                  });
                }, ln = (It) => {
                  var Ht = oe(), Lt = J(Ht);
                  ye(Lt, () => e.prefix ?? pe), O(It, Ht);
                };
                he(ht, (It) => {
                  typeof e.prefix == "string" ? It(yn) : It(ln, !1);
                });
              }
              O(Tt, Qe);
            };
            he(tt, (Tt) => {
              e.prefix != null && Tt(Nt);
            });
          }
          var Ft = _e(tt, 2);
          {
            let Tt = /* @__PURE__ */ me(() => lt(j, "input$"));
            xe(
              ap(Ft, $e(
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
                    return s(B);
                  },
                  get "aria-describedby"() {
                    return s(B);
                  }
                },
                () => v() && e.label != null && typeof e.label == "string" ? { placeholder: e.label } : {},
                () => s(Tt),
                {
                  onblur: (Qe) => {
                    var ht;
                    $(y, !1), $(L, !0), Ve(q(), "blur", Qe), (ht = e.input$onblur) == null || ht.call(e, Qe);
                  },
                  onfocus: (Qe) => {
                    var ht;
                    $(y, !0), Ve(q(), "focus", Qe), (ht = e.input$onfocus) == null || ht.call(e, Qe);
                  },
                  get value() {
                    return b();
                  },
                  set value(Qe) {
                    b(Qe);
                  },
                  get files() {
                    return _();
                  },
                  set files(Qe) {
                    _(Qe);
                  },
                  get dirty() {
                    return g();
                  },
                  set dirty(Qe) {
                    g(Qe);
                  },
                  get invalid() {
                    return C();
                  },
                  set invalid(Qe) {
                    C(Qe);
                  }
                }
              )),
              (Qe) => w(Qe),
              () => w()
            );
          }
          var rt = _e(Ft, 2);
          {
            var yt = (Tt) => {
              var Qe = oe(), ht = J(Qe);
              {
                var yn = (It) => {
                  rp(It, {
                    children: (Ht, Lt) => {
                      var Qt = Vt();
                      ke(() => ft(Qt, e.suffix)), O(Ht, Qt);
                    },
                    $$slots: { default: !0 }
                  });
                }, ln = (It) => {
                  var Ht = oe(), Lt = J(Ht);
                  ye(Lt, () => e.suffix ?? pe), O(It, Ht);
                };
                he(ht, (It) => {
                  typeof e.suffix == "string" ? It(yn) : It(ln, !1);
                });
              }
              O(Tt, Qe);
            };
            he(rt, (Tt) => {
              e.suffix != null && Tt(yt);
            });
          }
          O(qe, at);
        };
        he(nt, (qe) => {
          h() && typeof b() == "string" ? qe(xt) : qe(qt, !1);
        });
      }
      var Fn = _e(nt, 2);
      Ci(Fn, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (qe, at) => {
          var tt = oe(), Nt = J(tt);
          ye(Nt, () => e.trailingIcon ?? pe), O(qe, tt);
        },
        $$slots: { default: !0 }
      });
      var hi = _e(Fn, 2);
      {
        var Zt = (qe) => {
          {
            let at = /* @__PURE__ */ me(() => lt(j, "ripple$"));
            xe(Dc(qe, $e(() => s(at))), (tt) => Z(tt), () => Z());
          }
        };
        he(hi, (qe) => {
          !h() && f() !== "outlined" && l() && qe(Zt);
        });
      }
      xe(Y, (qe) => U = qe, () => U), Be(Y, (qe, at) => Xt == null ? void 0 : Xt(qe, at), () => ({
        ripple: !h() && f() === "filled",
        unbounded: !1,
        addClass: De,
        removeClass: Le,
        addStyle: le,
        eventTarget: s(ne),
        activeTarget: s(ne),
        initPromise: ce
      })), Be(Y, (qe, at) => X == null ? void 0 : X(qe, at), a), O(F, Y);
    }, hn = (F) => {
      var Y = hp();
      Ue(Y, (nt, xt, qt) => ({ class: nt, style: xt, ...qt }), [
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
        () => Object.entries(ae).map(([nt, xt]) => `${nt}: ${xt};`).concat([u()]).join(" "),
        () => ii(j, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Pe = Ie(Y);
      {
        var et = (nt) => {
          var xt = oe(), qt = J(xt);
          ye(qt, () => e.label ?? pe), O(nt, xt);
        };
        he(Pe, (nt) => {
          typeof e.label != "string" && nt(et);
        });
      }
      var mt = _e(Pe, 2);
      Ci(mt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (nt, xt) => {
          var qt = oe(), Fn = J(qt);
          ye(Fn, () => e.leadingIcon ?? pe), O(nt, qt);
        },
        $$slots: { default: !0 }
      });
      var Pt = _e(mt, 2);
      ye(Pt, () => e.children ?? pe);
      var Wt = _e(Pt, 2);
      Ci(Wt, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (nt, xt) => {
          var qt = oe(), Fn = J(qt);
          ye(Fn, () => e.trailingIcon ?? pe), O(nt, qt);
        },
        $$slots: { default: !0 }
      });
      var cr = _e(Wt, 2);
      ye(cr, () => e.line ?? pe), xe(Y, (nt) => U = nt, () => U), Be(Y, (nt, xt) => Xt == null ? void 0 : Xt(nt, xt), () => ({
        ripple: l(),
        unbounded: !1,
        addClass: De,
        removeClass: Le,
        addStyle: le
      })), Be(Y, (nt, xt) => X == null ? void 0 : X(nt, xt), a), O(F, Y);
    };
    he(St, (F) => {
      K ? F(Dt) : F(hn, !1);
    });
  }
  var de = _e(St, 2);
  {
    var H = (F) => {
      {
        let Y = /* @__PURE__ */ me(() => lt(j, "helperLine$"));
        tp(F, $e(() => s(Y), {
          children: (Pe, et) => {
            var mt = oe(), Pt = J(mt);
            ye(Pt, () => e.helper ?? pe), O(Pe, mt);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    he(de, (F) => {
      e.helper && F(H);
    });
  }
  return O(t, Ae), Re(re);
}
var mp = /* @__PURE__ */ ge("<i><!></i>");
function pp(t, e) {
  we(e, !0);
  const n = () => wt(p, "$leadingStore", r), [r, i] = bn();
  let a = m(e, "use", 19, () => []), o = m(e, "class", 3, ""), u = m(e, "tabindex", 19, () => e.role === "button" ? 0 : -1), l = m(e, "disabled", 3, !1), c = /* @__PURE__ */ Ge(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "role",
    "tabindex",
    "disabled",
    "children"
  ]), d, h = /* @__PURE__ */ Ee(void 0), f = new Qi(), v = Ce({});
  const p = ue("SMUI:textfield:icon:leading"), b = n();
  let _ = /* @__PURE__ */ Ee(void 0);
  const C = /* @__PURE__ */ me(() => ({ role: e.role, tabindex: u() })), x = ue("SMUI:textfield:leading-icon:mount"), S = ue("SMUI:textfield:leading-icon:unmount"), g = ue("SMUI:textfield:trailing-icon:mount"), E = ue("SMUI:textfield:trailing-icon:unmount");
  ut(() => ($(
    h,
    new Ym({
      getAttr: I,
      setAttr: T,
      removeAttr: A,
      setContent: (N) => {
        $(_, N, !0);
      },
      registerInteractionHandler: (N, M) => f.on(w(), N, M),
      deregisterInteractionHandler: (N, M) => f.off(w(), N, M),
      notifyIconAction: () => Ve(w(), "SMUITextFieldIcon")
    }),
    !0
  ), b ? x && x(s(h)) : g && g(s(h)), s(h).init(), () => {
    var N;
    s(h) && (b ? S && S(s(h)) : E && E(s(h))), (N = s(h)) == null || N.destroy(), f.clear();
  }));
  function I(N) {
    return N in v ? v[N] ?? null : w().getAttribute(N);
  }
  function T(N, M) {
    v[N] !== M && (v[N] = M);
  }
  function A(N) {
    (!(N in v) || v[N] != null) && (v[N] = void 0);
  }
  function w() {
    return d;
  }
  var k = { getElement: w }, Z = mp();
  Ue(
    Z,
    (N) => ({
      class: N,
      "aria-hidden": u() === -1 ? "true" : "false",
      "aria-disabled": e.role === "button" ? l() ? "true" : "false" : void 0,
      ...s(C),
      ...v,
      ...c
    }),
    [
      () => Ne({
        "mdc-text-field__icon": !0,
        "mdc-text-field__icon--leading": b,
        "mdc-text-field__icon--trailing": !b,
        [o()]: !0
      })
    ]
  );
  var G = Ie(Z);
  {
    var j = (N) => {
      var M = oe(), z = J(M);
      ye(z, () => e.children ?? pe), O(N, M);
    }, K = (N) => {
      var M = Vt();
      ke(() => ft(M, s(_))), O(N, M);
    };
    he(G, (N) => {
      s(_) == null ? N(j) : N(K, !1);
    });
  }
  xe(Z, (N) => d = N, () => d), Be(Z, (N, M) => X == null ? void 0 : X(N, M), a), O(t, Z);
  var U = Re(k);
  return i(), U;
}
function gp(t, e) {
  we(e, !0);
  let n = m(e, "placeholder", 3, ""), r = m(e, "label", 3, ""), i = m(e, "icon", 3, ""), a = m(e, "value", 15, ""), o = m(e, "variant", 3, "standard"), u = m(e, "styles", 3, ""), l = m(e, "required", 3, !1);
  var c = oe(), d = J(c);
  {
    var h = (v) => {
      {
        const p = (_) => {
          pp(_, {
            class: "material-icons",
            children: (C, x) => {
              var S = Vt();
              ke(() => ft(S, i())), O(C, S);
            },
            $$slots: { default: !0 }
          });
        };
        let b = /* @__PURE__ */ me(() => `width: 100%; ${u()}`);
        Vl(v, {
          get label() {
            return r();
          },
          get required() {
            return l();
          },
          get placeholder() {
            return n();
          },
          get style() {
            return s(b);
          },
          get variant() {
            return o();
          },
          get value() {
            return a();
          },
          set value(_) {
            a(_);
          },
          leadingIcon: p,
          $$slots: { leadingIcon: !0 }
        });
      }
    }, f = (v) => {
      Vl(v, {
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
        get value() {
          return a();
        },
        set value(p) {
          a(p);
        }
      });
    };
    he(d, (v) => {
      i() ? v(h) : v(f, !1);
    });
  }
  O(t, c), Re();
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
var bp = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, yp = {
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
}, sa = {
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
}, Ct;
(function(t) {
  t[t.BOTTOM = 1] = "BOTTOM", t[t.CENTER = 2] = "CENTER", t[t.RIGHT = 4] = "RIGHT", t[t.FLIP_RTL = 8] = "FLIP_RTL";
})(Ct || (Ct = {}));
var ei;
(function(t) {
  t[t.TOP_LEFT = 0] = "TOP_LEFT", t[t.TOP_RIGHT = 4] = "TOP_RIGHT", t[t.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", t[t.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", t[t.TOP_START = 8] = "TOP_START", t[t.TOP_END = 12] = "TOP_END", t[t.BOTTOM_START = 9] = "BOTTOM_START", t[t.BOTTOM_END = 13] = "BOTTOM_END";
})(ei || (ei = {}));
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
var hr, Jn, Xe = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
hr = {}, hr["" + Xe.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", hr["" + Xe.LIST_ITEM_CLASS] = "mdc-list-item", hr["" + Xe.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", hr["" + Xe.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", hr["" + Xe.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", hr["" + Xe.ROOT] = "mdc-list";
var yi = (Jn = {}, Jn["" + Xe.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", Jn["" + Xe.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", Jn["" + Xe.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", Jn["" + Xe.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", Jn["" + Xe.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", Jn["" + Xe.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", Jn["" + Xe.ROOT] = "mdc-deprecated-list", Jn), vr = {
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
    .` + Xe.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + Xe.LIST_ITEM_CLASS + ` a,
    .` + yi[Xe.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + yi[Xe.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + Xe.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + Xe.LIST_ITEM_CLASS + ` a,
    .` + Xe.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + Xe.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + yi[Xe.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + yi[Xe.LIST_ITEM_CLASS] + ` a,
    .` + yi[Xe.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + yi[Xe.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, _t = {
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
var Ip = ["input", "button", "textarea", "select"], En = function(t) {
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
function _p() {
  var t = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return t;
}
function Ep(t, e) {
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
function gs(t, e) {
  var n = t.nextChar, r = t.focusItemAtIndex, i = t.sortedIndexByFirstChar, a = t.focusedItemIndex, o = t.skipFocus, u = t.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    Fc(e);
  }, _t.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + n;
  var l;
  return e.typeaheadBuffer.length === 1 ? l = Cp(i, a, u, e) : l = Ap(i, u, e), l !== -1 && !o && r(l), l;
}
function Cp(t, e, n, r) {
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
function Ap(t, e, n) {
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
function Nc(t) {
  return t.typeaheadBuffer.length > 0;
}
function Fc(t) {
  t.typeaheadBuffer = "";
}
function Gl(t, e) {
  var n = t.event, r = t.isTargetListItem, i = t.focusedItemIndex, a = t.focusItemAtIndex, o = t.sortedIndexByFirstChar, u = t.isItemAtIndexDisabled, l = bt(n) === "ArrowLeft", c = bt(n) === "ArrowUp", d = bt(n) === "ArrowRight", h = bt(n) === "ArrowDown", f = bt(n) === "Home", v = bt(n) === "End", p = bt(n) === "Enter", b = bt(n) === "Spacebar";
  if (n.altKey || n.ctrlKey || n.metaKey || l || c || d || h || f || v || p)
    return -1;
  var _ = !b && n.key.length === 1;
  if (_) {
    En(n);
    var C = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: n.key.toLowerCase(),
      sortedIndexByFirstChar: o,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return gs(C, e);
  }
  if (!b)
    return -1;
  r && En(n);
  var x = r && Nc(e);
  if (x) {
    var C = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
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
function Sp(t) {
  return t instanceof Array;
}
var xp = ["Alt", "Control", "Meta", "Shift"];
function jl(t) {
  var e = new Set(t ? xp.filter(function(n) {
    return t.getModifierState(n);
  }) : []);
  return function(n) {
    return n.every(function(r) {
      return e.has(r);
    }) && n.length === e.size;
  };
}
var Tp = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n) {
      var r = t.call(this, ve(ve({}, e.defaultAdapter), n)) || this;
      return r.wrapFocus = !1, r.isVertical = !0, r.isSingleSelectionList = !1, r.areDisabledItemsFocusable = !0, r.selectedIndex = _t.UNSET_INDEX, r.focusedItemIndex = _t.UNSET_INDEX, r.useActivatedClass = !1, r.useSelectedAttr = !1, r.ariaCurrentAttrValue = null, r.isCheckboxList = !1, r.isRadioList = !1, r.lastSelectedIndex = null, r.hasTypeahead = !1, r.typeaheadState = _p(), r.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return vr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Xe;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return _t;
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
      if (n !== _t.UNSET_INDEX) {
        var r = this.adapter.listItemAtIndexHasClass(n, Xe.LIST_ITEM_ACTIVATED_CLASS);
        r && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = n;
      }
    }, e.prototype.getSelectedIndexFromDOM = function() {
      for (var n = _t.UNSET_INDEX, r = this.adapter.getListItemCount(), i = 0; i < r; i++) {
        var a = this.adapter.listItemAtIndexHasClass(i, Xe.LIST_ITEM_SELECTED_CLASS), o = this.adapter.listItemAtIndexHasClass(i, Xe.LIST_ITEM_ACTIVATED_CLASS);
        if (a || o) {
          n = i;
          break;
        }
      }
      return n;
    }, e.prototype.setHasTypeahead = function(n) {
      this.hasTypeahead = n, n && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex());
    }, e.prototype.isTypeaheadInProgress = function() {
      return this.hasTypeahead && Nc(this.typeaheadState);
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
      return this.adapter.listItemAtIndexHasClass(n, Xe.LIST_ITEM_DISABLED_CLASS);
    }, e.prototype.handleKeydown = function(n, r, i) {
      var a = this, o, u = bt(n) === "ArrowLeft", l = bt(n) === "ArrowUp", c = bt(n) === "ArrowRight", d = bt(n) === "ArrowDown", h = bt(n) === "Home", f = bt(n) === "End", v = bt(n) === "Enter", p = bt(n) === "Spacebar", b = this.isVertical && d || !this.isVertical && c, _ = this.isVertical && l || !this.isVertical && u, C = n.key === "A" || n.key === "a", x = jl(n);
      if (this.adapter.isRootFocused()) {
        if ((_ || f) && x([]))
          n.preventDefault(), this.focusLastElement();
        else if ((b || h) && x([]))
          n.preventDefault(), this.focusFirstElement();
        else if (_ && x(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var S = this.focusLastElement();
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        } else if (b && x(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var S = this.focusFirstElement();
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        }
        if (this.hasTypeahead) {
          var g = {
            event: n,
            focusItemAtIndex: function(T) {
              a.focusItemAtIndex(T);
            },
            focusedItemIndex: -1,
            isTargetListItem: r,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(T) {
              return a.isIndexDisabled(T);
            }
          };
          Gl(g, this.typeaheadState);
        }
        return;
      }
      var E = this.adapter.getFocusedElementIndex();
      if (!(E === -1 && (E = i, E < 0))) {
        if (b && x([]))
          En(n), this.focusNextElement(E);
        else if (_ && x([]))
          En(n), this.focusPrevElement(E);
        else if (b && x(["Shift"]) && this.isCheckboxList) {
          En(n);
          var S = this.focusNextElement(E);
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        } else if (_ && x(["Shift"]) && this.isCheckboxList) {
          En(n);
          var S = this.focusPrevElement(E);
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        } else if (h && x([]))
          En(n), this.focusFirstElement();
        else if (f && x([]))
          En(n), this.focusLastElement();
        else if (h && x(["Control", "Shift"]) && this.isCheckboxList) {
          if (En(n), this.isIndexDisabled(E))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, E, E);
        } else if (f && x(["Control", "Shift"]) && this.isCheckboxList) {
          if (En(n), this.isIndexDisabled(E))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(E, this.adapter.getListItemCount() - 1, E);
        } else if (C && x(["Control"]) && this.isCheckboxList)
          n.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === _t.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((v || p) && x([])) {
          if (r) {
            var I = n.target;
            if (I && I.tagName === "A" && v || (En(n), this.isIndexDisabled(E)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(E, !1), this.adapter.notifyAction(E));
          }
        } else if ((v || p) && x(["Shift"]) && this.isCheckboxList) {
          var I = n.target;
          if (I && I.tagName === "A" && v || (En(n), this.isIndexDisabled(E)))
            return;
          this.isTypeaheadInProgress() || (this.toggleCheckboxRange((o = this.lastSelectedIndex) !== null && o !== void 0 ? o : E, E, E), this.adapter.notifyAction(E));
        }
        if (this.hasTypeahead) {
          var g = {
            event: n,
            focusItemAtIndex: function(A) {
              a.focusItemAtIndex(A);
            },
            focusedItemIndex: this.focusedItemIndex,
            isTargetListItem: r,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(A) {
              return a.isIndexDisabled(A);
            }
          };
          Gl(g, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(n, r, i) {
      var a, o = jl(i);
      n !== _t.UNSET_INDEX && (this.isIndexDisabled(n) || (o([]) ? (this.isSelectableList() && this.setSelectedIndexOnAction(n, r), this.adapter.notifyAction(n)) : this.isCheckboxList && o(["Shift"]) && (this.toggleCheckboxRange((a = this.lastSelectedIndex) !== null && a !== void 0 ? a : n, n, n), this.adapter.notifyAction(n))));
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
      this.isIndexValid(n, !1) && (r ? (this.adapter.removeClassForElementIndex(n, Xe.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, vr.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(n, Xe.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, vr.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(n, r) {
      if (r === void 0 && (r = {}), !(this.selectedIndex === n && !r.forceUpdate)) {
        var i = Xe.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (i = Xe.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== _t.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, i), this.setAriaForSingleSelectionAtIndex(n), this.setTabindexAtIndex(n), n !== _t.UNSET_INDEX && this.adapter.addClassForElementIndex(n, i), this.selectedIndex = n, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([n]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(n) {
      this.selectedIndex === _t.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(n, vr.ARIA_CURRENT));
      var r = this.ariaCurrentAttrValue !== null, i = r ? vr.ARIA_CURRENT : vr.ARIA_SELECTED;
      if (this.selectedIndex !== _t.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), n !== _t.UNSET_INDEX) {
        var a = r ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(n, i, a);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? vr.ARIA_SELECTED : vr.ARIA_CHECKED;
    }, e.prototype.setRadioAtIndex = function(n, r) {
      r === void 0 && (r = {});
      var i = this.getSelectionAttribute();
      this.adapter.setCheckedCheckboxOrRadioAtIndex(n, !0), !(this.selectedIndex === n && !r.forceUpdate) && (this.selectedIndex !== _t.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), this.adapter.setAttributeForElementIndex(n, i, "true"), this.selectedIndex = n, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([n]));
    }, e.prototype.setCheckboxAtIndex = function(n, r) {
      r === void 0 && (r = {});
      for (var i = this.selectedIndex, a = r.isUserInteraction ? new Set(i === _t.UNSET_INDEX ? [] : i) : null, o = this.getSelectionAttribute(), u = [], l = 0; l < this.adapter.getListItemCount(); l++) {
        var c = a == null ? void 0 : a.has(l), d = n.indexOf(l) >= 0;
        d !== c && u.push(l), this.adapter.setCheckedCheckboxOrRadioAtIndex(l, d), this.adapter.setAttributeForElementIndex(l, o, d ? "true" : "false");
      }
      this.selectedIndex = n, r.isUserInteraction && u.length && this.adapter.notifySelectionChange(u);
    }, e.prototype.toggleCheckboxRange = function(n, r, i) {
      this.lastSelectedIndex = i;
      for (var a = new Set(this.selectedIndex === _t.UNSET_INDEX ? [] : this.selectedIndex), o = !(a != null && a.has(i)), u = ji([n, r].sort(), 2), l = u[0], c = u[1], d = this.getSelectionAttribute(), h = [], f = l; f <= c; f++)
        if (!this.isIndexDisabled(f)) {
          var v = a.has(f);
          o !== v && (h.push(f), this.adapter.setCheckedCheckboxOrRadioAtIndex(f, o), this.adapter.setAttributeForElementIndex(f, d, "" + o), o ? a.add(f) : a.delete(f));
        }
      h.length && (this.selectedIndex = Sr([], ji(a)), this.adapter.notifySelectionChange(h));
    }, e.prototype.setTabindexAtIndex = function(n) {
      this.focusedItemIndex === _t.UNSET_INDEX && n !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== n && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== n && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), n !== _t.UNSET_INDEX && this.adapter.setAttributeForElementIndex(n, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var n = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(n);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== _t.UNSET_INDEX ? this.selectedIndex : Sp(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(n, r) {
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
        return this.isIndexInRange(n) || this.isSingleSelectionList && n === _t.UNSET_INDEX;
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
      var u = this.selectedIndex === _t.UNSET_INDEX ? [] : this.selectedIndex.slice();
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
      return gs(o, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return Ep(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      Fc(this.typeaheadState);
    }, e;
  }(Mt)
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
var Hc = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n) {
      var r = t.call(this, ve(ve({}, e.defaultAdapter), n)) || this;
      return r.isSurfaceOpen = !1, r.isQuickOpen = !1, r.isHoistedElement = !1, r.isFixedPosition = !1, r.isHorizontallyCenteredOnViewport = !1, r.maxHeight = 0, r.openBottomBias = 0, r.openAnimationEndTimerId = 0, r.closeAnimationEndTimerId = 0, r.animationRequestId = 0, r.anchorCorner = ei.TOP_START, r.originCorner = ei.TOP_START, r.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, r.position = { x: 0, y: 0 }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return bp;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return yp;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return sa;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "Corner", {
      get: function() {
        return ei;
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
      this.originCorner = this.originCorner ^ Ct.RIGHT;
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
        }, sa.TRANSITION_OPEN_DURATION);
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
          }, sa.TRANSITION_CLOSE_DURATION);
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
      var r = this.getoriginCorner(), i = this.getMenuSurfaceMaxHeight(r), a = this.hasBit(r, Ct.BOTTOM) ? "bottom" : "top", o = this.hasBit(r, Ct.RIGHT) ? "right" : "left", u = this.getHorizontalOriginOffset(r), l = this.getVerticalOriginOffset(r), c = this.measurements, d = c.anchorSize, h = c.surfaceSize, f = (n = {}, n[o] = u, n[a] = l, n);
      d.width / h.width > sa.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (o = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(f), this.adapter.setTransformOrigin(o + " " + a), this.adapter.setPosition(f), this.adapter.setMaxHeight(i ? i + "px" : ""), this.hasBit(r, Ct.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
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
      var n = this.originCorner, r = this.measurements, i = r.viewportDistance, a = r.anchorSize, o = r.surfaceSize, u = e.numbers.MARGIN_TO_EDGE, l = this.hasBit(this.anchorCorner, Ct.BOTTOM), c, d;
      l ? (c = i.top - u + this.anchorMargin.bottom, d = i.bottom - u - this.anchorMargin.bottom) : (c = i.top - u + this.anchorMargin.top, d = i.bottom - u + a.height - this.anchorMargin.top);
      var h = d - o.height > 0;
      !h && c > d + this.openBottomBias && (n = this.setBit(n, Ct.BOTTOM));
      var f = this.adapter.isRtl(), v = this.hasBit(this.anchorCorner, Ct.FLIP_RTL), p = this.hasBit(this.anchorCorner, Ct.RIGHT) || this.hasBit(n, Ct.RIGHT), b = !1;
      f && v ? b = !p : b = p;
      var _, C;
      b ? (_ = i.left + a.width + this.anchorMargin.right, C = i.right - this.anchorMargin.right) : (_ = i.left + this.anchorMargin.left, C = i.right + a.width - this.anchorMargin.left);
      var x = _ - o.width > 0, S = C - o.width > 0, g = this.hasBit(n, Ct.FLIP_RTL) && this.hasBit(n, Ct.RIGHT);
      return S && g && f || !x && g ? n = this.unsetBit(n, Ct.RIGHT) : (x && b && f || x && !b && p || !S && _ >= C) && (n = this.setBit(n, Ct.RIGHT)), n;
    }, e.prototype.getMenuSurfaceMaxHeight = function(n) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var r = this.measurements.viewportDistance, i = 0, a = this.hasBit(n, Ct.BOTTOM), o = this.hasBit(this.anchorCorner, Ct.BOTTOM), u = e.numbers.MARGIN_TO_EDGE;
      return a ? (i = r.top + this.anchorMargin.top - u, o || (i += this.measurements.anchorSize.height)) : (i = r.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - u, o && (i -= this.measurements.anchorSize.height)), i;
    }, e.prototype.getHorizontalOriginOffset = function(n) {
      var r = this.measurements.anchorSize, i = this.hasBit(n, Ct.RIGHT), a = this.hasBit(this.anchorCorner, Ct.RIGHT);
      if (i) {
        var o = a ? r.width - this.anchorMargin.left : this.anchorMargin.right;
        return this.isHoistedElement || this.isFixedPosition ? o - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : o;
      }
      return a ? r.width - this.anchorMargin.right : this.anchorMargin.left;
    }, e.prototype.getVerticalOriginOffset = function(n) {
      var r = this.measurements.anchorSize, i = this.hasBit(n, Ct.BOTTOM), a = this.hasBit(this.anchorCorner, Ct.BOTTOM), o = 0;
      return i ? o = a ? r.height - this.anchorMargin.top : -this.anchorMargin.bottom : o = a ? r.height + this.anchorMargin.bottom : this.anchorMargin.top, o;
    }, e.prototype.adjustPositionForHoistedElement = function(n) {
      var r, i, a = this.measurements, o = a.windowScroll, u = a.viewportDistance, l = a.surfaceSize, c = a.viewportSize, d = Object.keys(n);
      try {
        for (var h = Rt(d), f = h.next(); !f.done; f = h.next()) {
          var v = f.value, p = n[v] || 0;
          if (this.isHorizontallyCenteredOnViewport && (v === "left" || v === "right")) {
            n[v] = (c.width - l.width) / 2;
            continue;
          }
          p += u[v], this.isFixedPosition || (v === "top" ? p += o.y : v === "bottom" ? p -= o.y : v === "left" ? p += o.x : p -= o.x), n[v] = p;
        }
      } catch (b) {
        r = { error: b };
      } finally {
        try {
          f && !f.done && (i = h.return) && i.call(h);
        } finally {
          if (r) throw r.error;
        }
      }
    }, e.prototype.maybeRestoreFocus = function() {
      var n = this, r = this.adapter.isFocused(), i = this.adapter.getOwnerDocument ? this.adapter.getOwnerDocument() : document, a = i.activeElement && this.adapter.isElementInContainer(i.activeElement);
      (r || a) && setTimeout(function() {
        n.adapter.restoreFocus();
      }, sa.TOUCH_EVENT_WAIT_MS);
    }, e.prototype.hasBit = function(n, r) {
      return !!(n & r);
    }, e.prototype.setBit = function(n, r) {
      return n | r;
    }, e.prototype.unsetBit = function(n, r) {
      return n ^ r;
    }, e.prototype.isFinite = function(n) {
      return typeof n == "number" && isFinite(n);
    }, e;
  }(Mt)
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
function Lp(t) {
  return !!t.document && typeof t.document.createElement == "function";
}
function Op(t, e) {
  if (Lp(t) && e in Wl) {
    var n = t.document.createElement("div"), r = Wl[e], i = r.standard, a = r.prefixed, o = i in n.style;
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
var Oi = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
}, Ii = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected",
  SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
}, wp = {
  FOCUS_ROOT_INDEX: -1
}, Ai;
(function(t) {
  t[t.NONE = 0] = "NONE", t[t.LIST_ROOT = 1] = "LIST_ROOT", t[t.FIRST_ITEM = 2] = "FIRST_ITEM", t[t.LAST_ITEM = 3] = "LAST_ITEM";
})(Ai || (Ai = {}));
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
var Rp = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n) {
      var r = t.call(this, ve(ve({}, e.defaultAdapter), n)) || this;
      return r.closeAnimationEndTimerId = 0, r.defaultFocusState = Ai.LIST_ROOT, r.selectedIndex = -1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Oi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Ii;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return wp;
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
        var a = this.adapter.getAttributeFromElementAtIndex(i, Ii.SKIP_RESTORE_FOCUS) === "true";
        this.adapter.closeSurface(a), this.closeAnimationEndTimerId = setTimeout(function() {
          var o = r.adapter.getElementIndex(n);
          o >= 0 && r.adapter.isSelectableItemAtIndex(o) && r.setSelectedIndex(o);
        }, Hc.numbers.TRANSITION_CLOSE_DURATION);
      }
    }, e.prototype.handleMenuSurfaceOpened = function() {
      switch (this.defaultFocusState) {
        case Ai.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case Ai.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case Ai.NONE:
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
      r >= 0 && (this.adapter.removeAttributeFromElementAtIndex(r, Ii.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(r, Oi.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(n, Oi.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(n, Ii.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = n;
    }, e.prototype.setEnabled = function(n, r) {
      this.validatedIndex(n), r ? (this.adapter.removeClassFromElementAtIndex(n, Xe.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, Ii.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(n, Xe.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, Ii.ARIA_DISABLED_ATTR, "true"));
    }, e.prototype.validatedIndex = function(n) {
      var r = this.adapter.getMenuItemCount(), i = n >= 0 && n < r;
      if (!i)
        throw new Error("MDCMenuFoundation: No list item at specified index.");
    }, e;
  }(Mt)
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
}, Vr = {
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
var Mp = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n, r) {
      r === void 0 && (r = {});
      var i = t.call(this, ve(ve({}, e.defaultAdapter), n)) || this;
      return i.disabled = !1, i.isMenuOpen = !1, i.useDefaultValidation = !0, i.customValidity = !0, i.lastSelectedIndex = Vr.UNSET_INDEX, i.clickDebounceTimeout = 0, i.recentlyClicked = !1, i.leadingIcon = r.leadingIcon, i.helperText = r.helperText, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return pt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Vr;
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
    }, e.prototype.setSelectedIndex = function(n, r, i) {
      r === void 0 && (r = !1), i === void 0 && (i = !1), !(n >= this.adapter.getMenuItemCount()) && (n === Vr.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(n).trim()), this.adapter.setSelectedIndex(n), r && this.adapter.closeMenu(), !i && this.lastSelectedIndex !== n && this.handleChange(), this.lastSelectedIndex = n);
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
      return n !== Vr.UNSET_INDEX ? r[n] : "";
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
        var r = bt(n) === Me.ENTER, i = bt(n) === Me.SPACEBAR, a = bt(n) === Me.ARROW_UP, o = bt(n) === Me.ARROW_DOWN, u = n.ctrlKey || n.metaKey;
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
          var i = Vr.LABEL_SCALE, a = this.adapter.getLabelWidth() * i;
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
      return this.useDefaultValidation && this.adapter.hasClass(pt.REQUIRED) && !this.adapter.hasClass(pt.DISABLED) ? this.getSelectedIndex() !== Vr.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(n) {
      n ? this.adapter.addClass(pt.REQUIRED) : this.adapter.removeClass(pt.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", n.toString()), this.adapter.setLabelRequired(n);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var n = this.adapter.getAnchorElement();
      n && (this.adapter.setMenuAnchorElement(n), this.adapter.setMenuAnchorCorner(ei.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(pt.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(pt.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(pt.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var n = this.adapter.hasClass(pt.REQUIRED);
      n && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.syncHelperTextValidity = function(n) {
      if (this.helperText) {
        this.helperText.setValidity(n);
        var r = this.helperText.isVisible(), i = this.helperText.getId();
        r && i ? this.adapter.setSelectAnchorAttr(Wo.ARIA_DESCRIBEDBY, i) : this.adapter.removeSelectAnchorAttr(Wo.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.setClickDebounceTimeout = function() {
      var n = this;
      clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout(function() {
        n.recentlyClicked = !1;
      }, Vr.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
    }, e;
  }(Mt)
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
var Gr = {
  ARIA_HIDDEN: "aria-hidden",
  ROLE: "role"
}, $n = {
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
var Dp = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n) {
      return t.call(this, ve(ve({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return $n;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Gr;
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
      return this.adapter.getAttr(Gr.ARIA_HIDDEN) !== "true";
    }, e.prototype.setContent = function(n) {
      this.adapter.setContent(n);
    }, e.prototype.setValidation = function(n) {
      n ? this.adapter.addClass($n.HELPER_TEXT_VALIDATION_MSG) : this.adapter.removeClass($n.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.setValidationMsgPersistent = function(n) {
      n ? this.adapter.addClass($n.HELPER_TEXT_VALIDATION_MSG_PERSISTENT) : this.adapter.removeClass($n.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.getIsValidation = function() {
      return this.adapter.hasClass($n.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.getIsValidationMsgPersistent = function() {
      return this.adapter.hasClass($n.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.setValidity = function(n) {
      var r = this.adapter.hasClass($n.HELPER_TEXT_VALIDATION_MSG);
      if (r) {
        var i = this.adapter.hasClass($n.HELPER_TEXT_VALIDATION_MSG_PERSISTENT), a = !n || i;
        if (a) {
          this.showToScreenReader(), n ? this.adapter.removeAttr(Gr.ROLE) : this.adapter.setAttr(Gr.ROLE, "alert");
          return;
        }
        this.adapter.removeAttr(Gr.ROLE), this.hide();
      }
    }, e.prototype.showToScreenReader = function() {
      this.adapter.removeAttr(Gr.ARIA_HIDDEN);
    }, e.prototype.hide = function() {
      this.adapter.setAttr(Gr.ARIA_HIDDEN, "true");
    }, e;
  }(Mt)
), Pp = /* @__PURE__ */ ge("<div><!></div>");
function Np(t, e) {
  we(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "static", 3, !1), o = m(e, "anchor", 3, !0), u = m(e, "fixed", 3, !1), l = m(e, "open", 31, () => Ce(a())), c = m(e, "managed", 3, !1), d = m(e, "fullWidth", 3, !1), h = m(e, "quickOpen", 3, !1), f = m(e, "anchorElement", 15), v = m(e, "anchorMargin", 19, () => ({ top: 0, right: 0, bottom: 0, left: 0 })), p = m(e, "maxHeight", 3, 0), b = m(e, "horizontallyCenteredOnViewport", 3, !1), _ = m(e, "openBottomBias", 3, 0), C = m(e, "neverRestoreFocus", 3, !1), x = /* @__PURE__ */ Ge(e, [
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
  ]), S, g = /* @__PURE__ */ Ee(void 0), E = Ce({}), I = Ce({}), T = /* @__PURE__ */ Ee(void 0);
  te("SMUI:list:role", "menu"), te("SMUI:list:item:role", "menuitem"), Se(() => {
    var V, se;
    S && o() && !((V = S.parentElement) != null && V.classList.contains("mdc-menu-surface--anchor")) && ((se = S.parentElement) == null || se.classList.add("mdc-menu-surface--anchor"), f(S.parentElement ?? void 0));
  }), Se(() => {
    s(g) && s(g).isOpen() !== l() && (l() ? s(g).open() : s(g).close());
  }), Se(() => {
    s(g) && s(g).setQuickOpen(h());
  }), Se(() => {
    s(g) && s(g).setFixedPosition(u());
  }), Se(() => {
    s(g) && s(g).setMaxHeight(p());
  }), Se(() => {
    s(g) && s(g).setIsHorizontallyCenteredOnViewport(b());
  });
  const A = ei;
  Se(() => {
    s(g) && e.anchorCorner != null && (typeof e.anchorCorner == "string" ? s(g).setAnchorCorner(A[e.anchorCorner]) : s(g).setAnchorCorner(e.anchorCorner));
  }), Se(() => {
    s(g) && s(g).setAnchorMargin(v());
  }), Se(() => {
    s(g) && s(g).setOpenBottomBias(_());
  });
  const w = ue("SMUI:menu-surface:mount"), k = ue("SMUI:menu-surface:unmount");
  ut(() => {
    $(
      g,
      new Hc({
        addClass: G,
        removeClass: j,
        hasClass: Z,
        hasAnchor: () => !!f(),
        notifyClose: () => {
          c() || l(a()), l() || Ve(L(), "SMUIMenuSurfaceClosed");
        },
        notifyClosing: () => {
          c() || l(a()), l() || Ve(L(), "SMUIMenuSurfaceClosing");
        },
        notifyOpen: () => {
          c() || l(!0), l() && Ve(L(), "SMUIMenuSurfaceOpened");
        },
        notifyOpening: () => {
          l() || Ve(L(), "SMUIMenuSurfaceOpening");
        },
        isElementInContainer: (se) => L().contains(se),
        isRtl: () => getComputedStyle(L()).getPropertyValue("direction") === "rtl",
        setTransformOrigin: (se) => {
          I["transform-origin"] = se;
        },
        isFocused: () => document.activeElement === L(),
        saveFocus: () => {
          $(T, document.activeElement ?? void 0, !0);
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
        setPosition: (se) => {
          I.left = "left" in se ? `${se.left}px` : "", I.right = "right" in se ? `${se.right}px` : "", I.top = "top" in se ? `${se.top}px` : "", I.bottom = "bottom" in se ? `${se.bottom}px` : "";
        },
        setMaxHeight: (se) => {
          I["max-height"] = se;
        }
      }),
      !0
    );
    const V = {
      get open() {
        return l();
      },
      set open(se) {
        l(se);
      },
      closeProgrammatic: K
    };
    return w && w(V), s(g).init(), () => {
      var Q, fe;
      k && k(V);
      const se = s(g).isHoistedElement;
      (Q = s(g)) == null || Q.destroy(), se && ((fe = L().parentNode) == null || fe.removeChild(L()));
    };
  }), Ln(() => {
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
    var se;
    (se = s(g)) == null || se.close(V), l(!1);
  }
  function U(V) {
    s(g) && l() && !c() && s(g).handleBodyClick(V);
  }
  function N() {
    return l();
  }
  function M(V) {
    l(V);
  }
  function z(V, se) {
    if (s(g) == null)
      throw new Error("Instance is not defined.");
    return s(g).setAbsolutePosition(V, se);
  }
  function ae(V) {
    if (s(g) == null)
      throw new Error("Instance is not defined.");
    return s(g).setIsHoisted(V);
  }
  function B() {
    if (s(g) == null)
      throw new Error("Instance is not defined.");
    return s(g).isFixed();
  }
  function y() {
    if (s(g) == null)
      throw new Error("Instance is not defined.");
    return s(g).flipCornerHorizontally();
  }
  function L() {
    return S;
  }
  var ee = {
    isOpen: N,
    setOpen: M,
    setAbsolutePosition: z,
    setIsHoisted: ae,
    isFixed: B,
    flipCornerHorizontally: y,
    getElement: L
  }, R = Pp();
  qr("click", Ds.body, U, !0);
  var W = (V) => {
    var se;
    s(g) && !c() && s(g).handleKeydown(V), (se = e.onkeydown) == null || se.call(e, V);
  };
  Ue(
    R,
    (V, se) => ({
      class: V,
      style: se,
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
        [r()]: !0
      }),
      () => Object.entries(I).map(([V, se]) => `${V}: ${se};`).concat([i()]).join(" ")
    ]
  );
  var ce = Ie(R);
  return ye(ce, () => e.children ?? pe), xe(R, (V) => S = V, () => S), Be(R, (V, se) => X == null ? void 0 : X(V, se), n), O(t, R), Re(ee);
}
function qo(t, { addClass: e = (r) => t.classList.add(r), removeClass: n = (r) => t.classList.remove(r) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      n("mdc-menu-surface--anchor");
    }
  };
}
function Fp(t, e) {
  we(e, !0);
  const { closest: n } = Ra;
  let r = m(e, "use", 19, () => []), i = m(e, "class", 3, ""), a = m(e, "open", 15, !1), o = m(e, "anchorElement", 15), u = m(e, "managed", 3, !1), l = /* @__PURE__ */ Ge(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "open",
    "anchorElement",
    "managed",
    "children"
  ]), c, d = /* @__PURE__ */ Ee(void 0), h = /* @__PURE__ */ Ee(void 0), f = /* @__PURE__ */ Ee(void 0);
  te("SMUI:menu-surface:mount", (A) => {
    s(h) || $(h, A, !0);
  });
  const v = ue("SMUI:list:mount");
  te("SMUI:list:mount", (A) => {
    s(f) || $(f, A, !0), v && v(A);
  });
  const p = ue("SMUI:menu:mount"), b = ue("SMUI:menu:unmount");
  ut(() => ($(
    d,
    new Rp({
      addClassToElementAtIndex: (A, w) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).addClassForElementIndex(A, w);
      },
      removeClassFromElementAtIndex: (A, w) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).removeClassForElementIndex(A, w);
      },
      addAttributeToElementAtIndex: (A, w, k) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).setAttributeForElementIndex(A, w, k);
      },
      removeAttributeFromElementAtIndex: (A, w) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).removeAttributeForElementIndex(A, w);
      },
      getAttributeFromElementAtIndex: (A, w) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).getAttributeFromElementIndex(A, w);
      },
      elementContainsClass: (A, w) => A.classList.contains(w),
      closeSurface: (A) => {
        var w;
        u() || ((w = s(h)) == null || w.closeProgrammatic(A), Ve(I(), "SMUIMenuClosedProgrammatically"));
      },
      getElementIndex: (A) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).getOrderedList().map((w) => w.element).indexOf(A);
      },
      notifySelected: (A) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        Ve(I(), "SMUIMenuSelected", {
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
        return !!n(s(f).getOrderedList()[A].element, `.${Oi.MENU_SELECTION_GROUP}`);
      },
      getSelectedSiblingOfItemAtIndex: (A) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        const w = s(f).getOrderedList(), k = n(w[A].element, `.${Oi.MENU_SELECTION_GROUP}`), Z = k == null ? void 0 : k.querySelector(`.${Oi.MENU_SELECTED_LIST_ITEM}`);
        return Z ? w.map((G) => G.element).indexOf(Z) : -1;
      }
    }),
    !0
  ), p && p(s(d)), s(d).init(), () => {
    var A;
    b && s(d) && b(s(d)), (A = s(d)) == null || A.destroy();
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
  function g() {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    return s(d).getSelectedIndex();
  }
  function E() {
    return c;
  }
  function I() {
    return c.getElement();
  }
  var T = {
    isOpen: C,
    setOpen: x,
    setDefaultFocusState: S,
    getSelectedIndex: g,
    getMenuSurface: E,
    getElement: I
  };
  {
    let A = /* @__PURE__ */ me(() => Ne({ "mdc-menu": !0, [i()]: !0 }));
    xe(
      Np(t, $e(
        {
          get use() {
            return r();
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
          onkeydown: (w) => {
            var k;
            _(w), (k = e.onkeydown) == null || k.call(e, w);
          },
          onSMUIMenuSurfaceOpened: (w) => {
            var k;
            s(d) && s(d).handleMenuSurfaceOpened(), (k = e.onSMUIMenuSurfaceOpened) == null || k.call(e, w);
          },
          onSMUIListAction: (w) => {
            var k;
            s(d) && s(f) && s(d).handleItemAction(s(f).getOrderedList()[w.detail.index].element), (k = e.onSMUIListAction) == null || k.call(e, w);
          },
          get open() {
            return a();
          },
          set open(w) {
            a(w);
          },
          get anchorElement() {
            return o();
          },
          set anchorElement(w) {
            o(w);
          },
          children: (w, k) => {
            var Z = oe(), G = J(Z);
            ye(G, () => e.children ?? pe), O(w, Z);
          },
          $$slots: { default: !0 }
        }
      )),
      (w) => c = w,
      () => c
    );
  }
  return Re(T);
}
function Hp(t, e) {
  we(e, !0);
  const { closest: n, matches: r } = Ra;
  let i = ue("SMUI:list:nav"), a = m(e, "use", 19, () => []), o = m(e, "class", 3, ""), u = m(e, "nonInteractive", 3, !1), l = m(e, "dense", 3, !1), c = m(e, "textualList", 3, !1), d = m(e, "avatarList", 3, !1), h = m(e, "iconList", 3, !1), f = m(e, "imageList", 3, !1), v = m(e, "thumbnailList", 3, !1), p = m(e, "videoList", 3, !1), b = m(e, "twoLine", 3, !1), _ = m(e, "threeLine", 3, !1), C = m(e, "vertical", 3, !0), x = m(e, "wrapFocus", 19, () => ue("SMUI:list:wrapFocus") ?? !1), S = m(e, "singleSelection", 3, !1), g = m(e, "disabledItemsFocusable", 3, !1), E = m(e, "selectedIndex", 31, () => -1), I = m(e, "radioList", 3, !1), T = m(e, "checkList", 3, !1), A = m(e, "hasTypeahead", 3, !1), w = m(e, "component", 3, Dr), k = m(e, "tag", 3, i ? "nav" : "ul"), Z = /* @__PURE__ */ Ge(e, [
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
  ]), G, j = /* @__PURE__ */ Ee(void 0), K = [], U = ue("SMUI:list:role");
  const N = /* @__PURE__ */ new WeakMap();
  let M = ue("SMUI:dialog:selection"), z = ue("SMUI:addLayoutListener"), ae;
  te("SMUI:list:nonInteractive", u()), te("SMUI:separator:context", "list"), U || (S() ? (U = "listbox", te("SMUI:list:item:role", "option")) : I() ? (U = "radiogroup", te("SMUI:list:item:role", "radio")) : T() ? (U = "group", te("SMUI:list:item:role", "checkbox")) : (U = "list", te("SMUI:list:item:role", void 0))), Se(() => {
    s(j) && s(j).setVerticalOrientation(C());
  }), Se(() => {
    s(j) && s(j).setWrapFocus(x());
  }), Se(() => {
    s(j) && s(j).setHasTypeahead(A());
  }), Se(() => {
    s(j) && s(j).setSingleSelection(S());
  }), Se(() => {
    s(j) && s(j).setDisabledItemsFocusable(g());
  }), Se(() => {
    s(j) && S() && P() !== E() && s(j).setSelectedIndex(E());
  }), z && (ae = z(le)), te("SMUI:list:item:mount", (de) => {
    K.push(de), N.set(de.element, de), S() && de.selected && E(Le(de.element));
  }), te("SMUI:list:item:unmount", (de) => {
    const H = (de && K.findIndex((F) => F === de)) ?? -1;
    H !== -1 && (K.splice(H, 1), N.delete(de.element));
  });
  const B = ue("SMUI:list:mount"), y = ue("SMUI:list:unmount");
  ut(() => {
    $(
      j,
      new Tp({
        addClassForElementIndex: Q,
        focusItemAtIndex: re,
        getAttributeForElementIndex: (H, F) => {
          var Y;
          return ((Y = V()[H]) == null ? void 0 : Y.getAttr(F)) ?? null;
        },
        getFocusedElementIndex: () => document.activeElement ? V().map((H) => H.element).indexOf(document.activeElement) : -1,
        getListItemCount: () => K.length,
        getPrimaryTextAtIndex: De,
        hasCheckboxAtIndex: (H) => {
          var F;
          return ((F = V()[H]) == null ? void 0 : F.hasCheckbox) ?? !1;
        },
        hasRadioAtIndex: (H) => {
          var F;
          return ((F = V()[H]) == null ? void 0 : F.hasRadio) ?? !1;
        },
        isCheckboxCheckedAtIndex: (H) => {
          const F = V()[H];
          return ((F == null ? void 0 : F.hasCheckbox) && F.checked) ?? !1;
        },
        isFocusInsideList: () => G != null && Ae() !== document.activeElement && Ae().contains(document.activeElement),
        isRootFocused: () => G != null && document.activeElement === Ae(),
        listItemAtIndexHasClass: se,
        notifyAction: (H) => {
          E(H), G != null && Ve(Ae(), "SMUIListAction", { index: H });
        },
        notifySelectionChange: (H) => {
          G != null && Ve(Ae(), "SMUIListSelectionChange", { changedIndices: H });
        },
        removeClassForElementIndex: fe,
        setAttributeForElementIndex: ne,
        setCheckedCheckboxOrRadioAtIndex: (H, F) => {
          V()[H].checked = F;
        },
        setTabIndexForListItemChildren: (H, F) => {
          const Y = V()[H];
          Array.prototype.forEach.call(Y.element.querySelectorAll("button:not(:disabled), a"), (et) => {
            et.setAttribute("tabindex", F);
          });
        }
      }),
      !0
    );
    const de = {
      get element() {
        return Ae();
      },
      get items() {
        return K;
      },
      get typeaheadInProgress() {
        if (!s(j))
          throw new Error("Instance is undefined.");
        return s(j).isTypeaheadInProgress();
      },
      typeaheadMatchItem(H, F) {
        if (!s(j))
          throw new Error("Instance is undefined.");
        return s(j).typeaheadMatchItem(
          H,
          F,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: V,
      focusItemAtIndex: re,
      addClassForElementIndex: Q,
      removeClassForElementIndex: fe,
      setAttributeForElementIndex: ne,
      removeAttributeForElementIndex: ze,
      getAttributeFromElementIndex: We,
      getPrimaryTextAtIndex: De
    };
    return B && B(de), s(j).init(), s(j).layout(), () => {
      var H;
      y && y(de), (H = s(j)) == null || H.destroy();
    };
  }), Ln(() => {
    ae && ae();
  });
  function L(de) {
    s(j) && de.target && s(j).handleKeydown(de, de.target.classList.contains("mdc-deprecated-list-item"), Le(de.target));
  }
  function ee(de) {
    s(j) && de.target && s(j).handleFocusIn(Le(de.target));
  }
  function R(de) {
    s(j) && de.target && s(j).handleFocusOut(Le(de.target));
  }
  function W(de) {
    s(j) && de.target && s(j).handleClick(Le(de.target), !r(de.target, 'input[type="checkbox"], input[type="radio"]'), de);
  }
  function ce(de) {
    if (I() || T()) {
      const H = Le(de.target);
      if (H !== -1) {
        const F = V()[H];
        F && (I() && !F.checked || T()) && (r(de.detail.target, 'input[type="checkbox"], input[type="radio"]') || (F.checked = !F.checked), F.activateRipple(), window.requestAnimationFrame(() => {
          F.deactivateRipple();
        }));
      }
    }
  }
  function V() {
    return G == null ? [] : [...Ae().children].map((de) => N.get(de)).filter((de) => de && de._smui_list_item_accessor);
  }
  function se(de, H) {
    const F = V()[de];
    return (F && F.hasClass(H)) ?? !1;
  }
  function Q(de, H) {
    const F = V()[de];
    F && F.addClass(H);
  }
  function fe(de, H) {
    const F = V()[de];
    F && F.removeClass(H);
  }
  function ne(de, H, F) {
    const Y = V()[de];
    Y && Y.addAttr(H, F);
  }
  function ze(de, H) {
    const F = V()[de];
    F && F.removeAttr(H);
  }
  function We(de, H) {
    const F = V()[de];
    return F ? F.getAttr(H) : null;
  }
  function De(de) {
    const H = V()[de];
    return (H && H.getPrimaryText()) ?? "";
  }
  function Le(de) {
    const H = n(de, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return H && r(H, ".mdc-deprecated-list-item") ? V().map((F) => F == null ? void 0 : F.element).indexOf(H) : -1;
  }
  function le() {
    if (!s(j))
      throw new Error("Instance is undefined.");
    return s(j).layout();
  }
  function Te(de, H) {
    if (!s(j))
      throw new Error("Instance is undefined.");
    return s(j).setEnabled(de, H);
  }
  function Fe() {
    if (!s(j))
      throw new Error("Instance is undefined.");
    return s(j).isTypeaheadInProgress();
  }
  function P() {
    if (!s(j))
      throw new Error("Instance is undefined.");
    return s(j).getSelectedIndex();
  }
  function q() {
    if (!s(j))
      throw new Error("Instance is undefined.");
    return s(j).getFocusedItemIndex();
  }
  function re(de) {
    const H = V()[de];
    H && "focus" in H.element && H.element.focus();
  }
  function Ae() {
    return G.getElement();
  }
  var St = {
    layout: le,
    setEnabled: Te,
    getTypeaheadInProgress: Fe,
    getSelectedIndex: P,
    getFocusedItemIndex: q,
    focusItemAtIndex: re,
    getElement: Ae
  }, Dt = oe(), hn = J(Dt);
  {
    let de = /* @__PURE__ */ me(() => Ne({
      "mdc-deprecated-list": !0,
      "mdc-deprecated-list--non-interactive": u(),
      "mdc-deprecated-list--dense": l(),
      "mdc-deprecated-list--textual-list": c(),
      "mdc-deprecated-list--avatar-list": d() || M,
      "mdc-deprecated-list--icon-list": h(),
      "mdc-deprecated-list--image-list": f(),
      "mdc-deprecated-list--thumbnail-list": v(),
      "mdc-deprecated-list--video-list": p(),
      "mdc-deprecated-list--two-line": b(),
      "smui-list--three-line": _() && !b(),
      [o()]: !0
    }));
    sr(hn, w, (H, F) => {
      xe(
        F(H, $e(
          {
            get tag() {
              return k();
            },
            get use() {
              return a();
            },
            get class() {
              return s(de);
            },
            get role() {
              return U;
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
              ee(Y), (Pe = e.onfocusin) == null || Pe.call(e, Y);
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
              var et = oe(), mt = J(et);
              ye(mt, () => e.children ?? pe), O(Y, et);
            },
            $$slots: { default: !0 }
          }
        )),
        (Y) => G = Y,
        () => G
      );
    });
  }
  return O(t, Dt), Re(St);
}
let Up = 0;
var Bp = /* @__PURE__ */ ge('<span class="mdc-deprecated-list-item__ripple"></span>'), kp = /* @__PURE__ */ ge("<!><!>", 1);
function Vp(t, e) {
  we(e, !0);
  let n = () => {
  };
  function r(Q) {
    return Q === n;
  }
  let i = ue("SMUI:list:item:nav"), a = m(e, "use", 19, () => []), o = m(e, "class", 3, ""), u = m(e, "style", 3, ""), l = m(e, "nonInteractive", 19, () => ue("SMUI:list:nonInteractive") ?? !1), c = m(e, "ripple", 19, () => !l()), d = m(e, "wrapper", 3, !1), h = m(e, "activated", 15, !1), f = m(e, "role", 19, () => d() ? "presentation" : ue("SMUI:list:item:role")), v = m(e, "selected", 15, !1), p = m(e, "disabled", 3, !1), b = m(e, "skipRestoreFocus", 3, !1), _ = m(e, "tabindex", 15, n), C = m(e, "inputId", 19, () => "SMUI-form-field-list-" + Up++), x = m(e, "component", 3, Dr), S = m(e, "tag", 19, () => i ? e.href ? "a" : "span" : "li"), g = /* @__PURE__ */ Ge(e, [
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
  let E, I = Ce({}), T = Ce({}), A = Ce({}), w = /* @__PURE__ */ Ee(void 0), k = /* @__PURE__ */ Ee(void 0);
  const Z = /* @__PURE__ */ me(() => r(_()) ? !l() && !p() && (v() || s(w) && s(w).checked) ? 0 : -1 : _());
  te("SMUI:generic:input:props", { id: C() }), te("SMUI:separator:context", void 0), te("SMUI:generic:input:mount", (Q) => {
    ("_smui_checkbox_accessor" in Q || "_smui_radio_accessor" in Q) && $(w, Q, !0);
  }), te("SMUI:generic:input:unmount", () => {
    $(w, void 0);
  });
  const G = ue("SMUI:list:item:mount"), j = ue("SMUI:list:item:unmount");
  ut(() => {
    if (!v() && !l()) {
      let fe = !0, ne = E.getElement();
      for (; ne.previousElementSibling; )
        if (ne = ne.previousElementSibling, ne.nodeType === 1 && ne.classList.contains("mdc-deprecated-list-item") && !ne.classList.contains("mdc-deprecated-list-item--disabled")) {
          fe = !1;
          break;
        }
      fe && $(k, window.requestAnimationFrame(() => y(ne)), !0);
    }
    const Q = {
      _smui_list_item_accessor: !0,
      get element() {
        return W();
      },
      get selected() {
        return v();
      },
      set selected(fe) {
        v(fe);
      },
      hasClass: K,
      addClass: U,
      removeClass: N,
      getAttr: z,
      addAttr: ae,
      removeAttr: B,
      getPrimaryText: R,
      // For inputs within item.
      get checked() {
        return (s(w) && s(w).checked) ?? !1;
      },
      set checked(fe) {
        s(w) && (s(w).checked = !!fe);
      },
      get hasCheckbox() {
        return !!(s(w) && "_smui_checkbox_accessor" in s(w));
      },
      get hasRadio() {
        return !!(s(w) && "_smui_radio_accessor" in s(w));
      },
      activateRipple() {
        s(w) && s(w).activateRipple();
      },
      deactivateRipple() {
        s(w) && s(w).deactivateRipple();
      },
      // For select options.
      getValue() {
        return e.value;
      },
      // For autocomplete
      action: ee,
      get tabindex() {
        return s(Z);
      },
      set tabindex(fe) {
        _(fe);
      },
      get disabled() {
        return p();
      },
      get activated() {
        return h();
      },
      set activated(fe) {
        h(fe);
      }
    };
    return G && G(Q), () => {
      j && j(Q);
    };
  }), Ln(() => {
    s(k) && window.cancelAnimationFrame(s(k));
  });
  function K(Q) {
    return Q in I ? I[Q] : W().classList.contains(Q);
  }
  function U(Q) {
    I[Q] || (I[Q] = !0);
  }
  function N(Q) {
    (!(Q in I) || I[Q]) && (I[Q] = !1);
  }
  function M(Q, fe) {
    T[Q] != fe && (fe === "" || fe == null ? delete T[Q] : T[Q] = fe);
  }
  function z(Q) {
    return Q in A ? A[Q] ?? null : W().getAttribute(Q);
  }
  function ae(Q, fe) {
    A[Q] !== fe && (A[Q] = fe);
  }
  function B(Q) {
    (!(Q in A) || A[Q] != null) && (A[Q] = void 0);
  }
  function y(Q) {
    let fe = !0;
    for (; Q.nextElementSibling; )
      if (Q = Q.nextElementSibling, Q.nodeType === 1 && Q.classList.contains("mdc-deprecated-list-item")) {
        const ne = Q.attributes.getNamedItem("tabindex");
        if (ne && ne.value === "0") {
          fe = !1;
          break;
        }
      }
    fe && _(0);
  }
  function L(Q) {
    const fe = Q.key === "Enter", ne = Q.key === "Space";
    (fe || ne) && ee(Q);
  }
  function ee(Q) {
    p() || Ve(W(), "SMUIAction", Q);
  }
  function R() {
    const Q = W(), fe = Q.querySelector(".mdc-deprecated-list-item__primary-text");
    if (fe)
      return fe.textContent ?? "";
    const ne = Q.querySelector(".mdc-deprecated-list-item__text");
    return ne ? ne.textContent ?? "" : Q.textContent ?? "";
  }
  function W() {
    return E.getElement();
  }
  var ce = { action: ee, getPrimaryText: R, getElement: W }, V = oe(), se = J(V);
  {
    let Q = /* @__PURE__ */ me(() => [
      ...l() ? [] : [
        [
          Xt,
          {
            ripple: !s(w),
            unbounded: !1,
            color: (h() || v()) && e.color == null ? "primary" : e.color,
            disabled: p(),
            addClass: U,
            removeClass: N,
            addStyle: M
          }
        ]
      ],
      ...a()
    ]), fe = /* @__PURE__ */ me(() => Ne({
      "mdc-deprecated-list-item": !d(),
      "mdc-deprecated-list-item__wrapper": d(),
      "mdc-deprecated-list-item--activated": h(),
      "mdc-deprecated-list-item--selected": v(),
      "mdc-deprecated-list-item--disabled": p(),
      "mdc-menu-item--selected": !i && f() === "menuitem" && v(),
      "smui-menu-item--non-interactive": l(),
      ...I,
      [o()]: !0
    })), ne = /* @__PURE__ */ me(() => Object.entries(T).map(([We, De]) => `${We}: ${De};`).concat([u()]).join(" ")), ze = /* @__PURE__ */ me(() => b() || void 0);
    sr(se, x, (We, De) => {
      xe(
        De(We, $e(
          {
            get tag() {
              return S();
            },
            get use() {
              return s(Q);
            },
            get class() {
              return s(fe);
            },
            get style() {
              return s(ne);
            }
          },
          () => i && h() ? { "aria-current": "page" } : {},
          () => !i || d() ? { role: f() } : {},
          () => !i && f() === "option" ? { "aria-selected": v() ? "true" : "false" } : {},
          () => !i && (f() === "radio" || f() === "checkbox") ? {
            "aria-checked": s(w) && s(w).checked ? "true" : "false"
          } : {},
          () => i ? {} : { "aria-disabled": p() ? "true" : "false" },
          {
            get "data-menu-item-skip-restore-focus"() {
              return s(ze);
            },
            get tabindex() {
              return s(Z);
            },
            get href() {
              return e.href;
            }
          },
          () => A,
          () => g,
          {
            onclick: (Le) => {
              var le;
              ee(Le), (le = e.onclick) == null || le.call(e, Le);
            },
            onkeydown: (Le) => {
              var le;
              L(Le), (le = e.onkeydown) == null || le.call(e, Le);
            },
            children: (Le, le) => {
              var Te = kp(), Fe = J(Te);
              {
                var P = (re) => {
                  var Ae = Bp();
                  O(re, Ae);
                };
                he(Fe, (re) => {
                  c() && re(P);
                });
              }
              var q = _e(Fe);
              ye(q, () => e.children ?? pe), O(Le, Te);
            },
            $$slots: { default: !0 }
          }
        )),
        (Le) => E = Le,
        () => E
      );
    });
  }
  return O(t, V), Re(ce);
}
let Gp = 0;
var jp = /* @__PURE__ */ ge("<div><!></div>");
function Wp(t, e) {
  we(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "id", 19, () => "SMUI-select-helper-text-" + Gp++), a = m(e, "persistent", 3, !1), o = m(e, "validationMsg", 3, !1), u = /* @__PURE__ */ Ge(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "id",
    "persistent",
    "validationMsg",
    "children"
  ]), l, c = /* @__PURE__ */ Ee(void 0), d = Ce({}), h = Ce({}), f = /* @__PURE__ */ Ee(void 0);
  const v = ue("SMUI:select:helper-text:id"), p = ue("SMUI:select:helper-text:mount"), b = ue("SMUI:select:helper-text:unmount");
  ut(() => ($(
    c,
    new Dp({
      addClass: C,
      removeClass: x,
      hasClass: _,
      getAttr: S,
      setAttr: g,
      removeAttr: E,
      setContent: (G) => {
        $(f, G, !0);
      }
    }),
    !0
  ), v && v(i()), p && p(s(c)), s(c).init(), () => {
    var G;
    b && s(c) && b(s(c)), (G = s(c)) == null || G.destroy();
  }));
  function _(G) {
    return G in d ? d[G] : I().classList.contains(G);
  }
  function C(G) {
    d[G] || (d[G] = !0);
  }
  function x(G) {
    (!(G in d) || d[G]) && (d[G] = !1);
  }
  function S(G) {
    return G in h ? h[G] ?? null : I().getAttribute(G);
  }
  function g(G, j) {
    h[G] !== j && (h[G] = j);
  }
  function E(G) {
    (!(G in h) || h[G] != null) && (h[G] = void 0);
  }
  function I() {
    return l;
  }
  var T = { getElement: I }, A = jp();
  Ue(
    A,
    (G) => ({
      class: G,
      "aria-hidden": a() ? void 0 : "true",
      id: i(),
      ...h,
      ...u
    }),
    [
      () => Ne({
        "mdc-select-helper-text": !0,
        "mdc-select-helper-text--validation-msg": o(),
        "mdc-select-helper-text--validation-msg-persistent": a(),
        ...d,
        [r()]: !0
      })
    ]
  );
  var w = Ie(A);
  {
    var k = (G) => {
      var j = oe(), K = J(j);
      ye(K, () => e.children ?? pe), O(G, j);
    }, Z = (G) => {
      var j = Vt();
      ke(() => ft(j, s(f))), O(G, j);
    };
    he(w, (G) => {
      s(f) == null ? G(k) : G(Z, !1);
    });
  }
  return xe(A, (G) => l = G, () => l), Be(A, (G, j) => X == null ? void 0 : X(G, j), n), O(t, A), Re(T);
}
let qp = 0;
var Kp = /* @__PURE__ */ ge("<input/>"), zp = /* @__PURE__ */ ge('<span class="mdc-select__ripple"></span>'), Xp = /* @__PURE__ */ ge('<div><!> <div><!> <!> <!> <!> <span><span> </span></span> <span><svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"><polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon><polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon></svg></span> <!></div> <!></div> <!>', 1);
function Yp(t, e) {
  we(e, !0);
  const n = () => wt(Ae, "$selectedTextStore", r), [r, i] = bn();
  let a = () => {
  };
  function o(D) {
    return D === a;
  }
  let u = m(e, "use", 19, () => []), l = m(e, "class", 3, ""), c = m(e, "style", 3, ""), d = m(e, "ripple", 3, !0), h = m(e, "disabled", 3, !1), f = m(e, "variant", 3, "standard"), v = m(e, "noLabel", 3, !1), p = m(e, "label", 3, void 0), b = m(e, "value", 15), _ = m(e, "key", 3, (D) => D), C = m(e, "dirty", 15, !1), x = m(e, "invalid", 15, a), S = m(e, "updateInvalid", 19, () => o(x())), g = m(e, "required", 3, !1), E = m(e, "inputId", 19, () => "SMUI-select-" + qp++), I = m(e, "hiddenInput", 3, !1), T = m(e, "withLeadingIcon", 3, a), A = m(e, "anchor$use", 19, () => []), w = m(e, "anchor$class", 3, ""), k = m(e, "selectedTextContainer$use", 19, () => []), Z = m(e, "selectedTextContainer$class", 3, ""), G = m(e, "selectedText$use", 19, () => []), j = m(e, "selectedText$class", 3, ""), K = m(e, "dropdownIcon$use", 19, () => []), U = m(e, "dropdownIcon$class", 3, ""), N = m(e, "menu$class", 3, ""), M = /* @__PURE__ */ Ge(e, [
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
  let ae, B = /* @__PURE__ */ Ee(void 0), y = Ce({}), L = Ce({}), ee, R = Ce({}), W = /* @__PURE__ */ Ee(-1);
  const ce = /* @__PURE__ */ me(() => M.menu$id ?? E() + "-menu");
  let V = /* @__PURE__ */ Ee(void 0), se = ue("SMUI:addLayoutListener"), Q, fe = /* @__PURE__ */ Ee(!1), ne = Ce({}), ze = /* @__PURE__ */ Ee(void 0), We = /* @__PURE__ */ Ee(void 0), De = /* @__PURE__ */ Ee(!1), Le, le = ue("SMUI:select:context"), Te, Fe, P, q, re;
  te("SMUI:list:role", ""), te("SMUI:list:nav", !1);
  const Ae = gt("");
  te("SMUI:select:selectedText", Ae);
  const St = gt(b());
  Se(() => {
    Gt(St, b());
  }), te("SMUI:select:value", St), Se(() => {
    s(B) && s(B).getValue() !== _()(b()) && s(B).setValue(_()(b()));
  });
  let Dt = s(W);
  Se(() => {
    if (Dt !== s(W))
      if (Dt = s(W), s(B))
        s(B).setSelectedIndex(
          s(W),
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const D = Wt();
        b() !== D[s(W)] && b(D[s(W)]);
      }
  }), Se(() => {
    s(B) && s(B).getDisabled() !== h() && s(B).setDisabled(h());
  }), Se(() => {
    s(B) && C() && s(B).isValid() !== !x() && (S() ? x(!s(B).isValid()) : s(B).setValid(!x()));
  }), Se(() => {
    s(B) && s(B).getRequired() !== g() && s(B).setRequired(g());
  }), se && (Q = se(hi)), te("SMUI:select:leading-icon:mount", (D) => {
    Te = D;
  }), te("SMUI:select:leading-icon:unmount", () => {
    Te = void 0;
  }), te("SMUI:list:mount", (D) => {
    Le = D;
  }), te("SMUI:select:helper-text:id", (D) => {
    $(V, D, !0);
  }), te("SMUI:select:helper-text:mount", (D) => {
    Fe = D;
  }), te("SMUI:select:helper-text:unmount", () => {
    $(V, void 0), Fe = void 0;
  }), ut(() => ($(
    B,
    new Mp(
      {
        // getSelectAdapterMethods
        // getMenuItemAttr: (menuItem: Element, attr: string) =>
        //   menuItem.getAttribute(attr),
        setSelectedText: (D) => {
          Gt(Ae, D);
        },
        isSelectAnchorFocused: () => document.activeElement === ee,
        getSelectAnchorAttr: et,
        setSelectAnchorAttr: mt,
        removeSelectAnchorAttr: Pt,
        addMenuClass: Y,
        removeMenuClass: Pe,
        openMenu: () => {
          $(fe, !0);
        },
        closeMenu: () => {
          $(fe, !1);
        },
        getAnchorElement: () => ee,
        setMenuAnchorElement: (D) => {
          $(ze, D, !0);
        },
        setMenuAnchorCorner: (D) => {
          $(We, D, !0);
        },
        setMenuWrapFocus: (D) => {
          $(De, D, !0);
        },
        getSelectedIndex: () => s(W),
        setSelectedIndex: (D) => {
          Dt = D, $(W, D, !0), b(Wt()[s(W)]);
        },
        focusMenuItemAtIndex: (D) => {
          Le.focusItemAtIndex(D);
        },
        getMenuItemCount: () => Le.items.length,
        getMenuItemValues: () => Wt().map(_()),
        getMenuItemTextAtIndex: (D) => Le.getPrimaryTextAtIndex(D),
        isTypeaheadInProgress: () => Le.typeaheadInProgress,
        typeaheadMatchItem: (D, be) => Le.typeaheadMatchItem(D, be),
        // getCommonAdapterMethods
        addClass: de,
        removeClass: H,
        hasClass: hn,
        setRippleCenter: (D) => q && q.setRippleCenter(D),
        activateBottomLine: () => q && q.activate(),
        deactivateBottomLine: () => q && q.deactivate(),
        notifyChange: (D) => {
          var be;
          C(!0), S() && x(!((be = s(B)) != null && be.isValid())), Ve(Zt(), "SMUISelectChange", { value: b(), index: s(W) });
        },
        // getOutlineAdapterMethods
        hasOutline: () => !!re,
        notchOutline: (D) => re && re.notch(D),
        closeOutline: () => re && re.closeNotch(),
        // getLabelAdapterMethods
        hasLabel: () => !!P,
        floatLabel: (D) => P && P.float(D),
        getLabelWidth: () => P ? P.getWidth() : 0,
        setLabelRequired: (D) => P && P.setRequired(D)
      },
      {
        get helperText() {
          return Fe;
        },
        get leadingIcon() {
          return Te;
        }
      }
    ),
    !0
  ), $(W, Wt().indexOf(b()), !0), s(B).init(), qt(z), () => {
    var D;
    (D = s(B)) == null || D.destroy();
  })), Ln(() => {
    Q && Q();
  });
  function hn(D) {
    return D in y ? y[D] : Zt().classList.contains(D);
  }
  function de(D) {
    y[D] || (y[D] = !0);
  }
  function H(D) {
    (!(D in y) || y[D]) && (y[D] = !1);
  }
  function F(D, be) {
    L[D] != be && (be === "" || be == null ? delete L[D] : L[D] = be);
  }
  function Y(D) {
    ne[D] || (ne[D] = !0);
  }
  function Pe(D) {
    (!(D in ne) || ne[D]) && (ne[D] = !1);
  }
  function et(D) {
    return D in R ? R[D] ?? null : Zt().getAttribute(D);
  }
  function mt(D, be) {
    R[D] !== be && (R[D] = be);
  }
  function Pt(D) {
    (!(D in R) || R[D] != null) && (R[D] = void 0);
  }
  function Wt() {
    return Le.getOrderedList().map((D) => D.getValue());
  }
  function cr(D) {
    const be = D.currentTarget.getBoundingClientRect();
    return (nt(D) ? D.touches[0].clientX : D.clientX) - be.left;
  }
  function nt(D) {
    return "touches" in D;
  }
  function xt() {
    if (s(B) == null)
      throw new Error("Instance is undefined.");
    return s(B).getUseDefaultValidation();
  }
  function qt(D) {
    var be;
    (be = s(B)) == null || be.setUseDefaultValidation(D);
  }
  function Fn() {
    ee.focus();
  }
  function hi() {
    var D;
    (D = s(B)) == null || D.layout();
  }
  function Zt() {
    return ae;
  }
  var qe = {
    getUseDefaultValidation: xt,
    setUseDefaultValidation: qt,
    focus: Fn,
    layout: hi,
    getElement: Zt
  }, at = Xp(), tt = J(at);
  Ue(tt, (D, be, dt) => ({ class: D, style: be, ...dt }), [
    () => Ne({
      "mdc-select": !0,
      "mdc-select--required": g(),
      "mdc-select--disabled": h(),
      "mdc-select--filled": f() === "filled",
      "mdc-select--outlined": f() === "outlined",
      "smui-select--standard": f() === "standard",
      "mdc-select--with-leading-icon": o(T()) ? e.leadingIcon : T(),
      "mdc-select--no-label": v() || p() == null,
      "mdc-select--invalid": x(),
      "mdc-select--activated": s(fe),
      "mdc-data-table__pagination-rows-per-page-select": le === "data-table:pagination",
      ...y,
      [l()]: !0
    }),
    () => Object.entries(L).map(([D, be]) => `${D}: ${be};`).concat([c()]).join(" "),
    () => ii(M, [
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
  var Nt = Ie(tt);
  {
    var Ft = (D) => {
      var be = Kp();
      Ue(
        be,
        (dt) => ({
          type: "hidden",
          required: g(),
          disabled: h(),
          value: b(),
          ...dt
        }),
        [() => lt(M, "input$")],
        void 0,
        void 0,
        !0
      ), O(D, be);
    };
    he(Nt, (D) => {
      I() && D(Ft);
    });
  }
  var rt = _e(Nt, 2), yt = (D) => {
    var be;
    ee.focus(), s(B) && s(B).handleClick(cr(D)), (be = e.anchor$onclick) == null || be.call(e, D);
  }, Tt = (D) => {
    var be;
    s(B) && s(B).handleKeydown(D), (be = e.onkeydown) == null || be.call(e, D);
  }, Qe = (D) => {
    var be;
    s(B) && s(B).handleBlur(), Ve(Zt(), "blur", D), (be = e.anchor$onblur) == null || be.call(e, D);
  }, ht = (D) => {
    var be;
    s(B) && s(B).handleFocus(), Ve(Zt(), "focus", D), (be = e.anchor$onfocus) == null || be.call(e, D);
  };
  Ue(
    rt,
    (D, be) => ({
      class: D,
      "aria-required": g() ? "true" : void 0,
      "aria-disabled": h() ? "true" : void 0,
      "aria-controls": s(ce),
      "aria-expanded": s(fe) ? "true" : "false",
      "aria-describedby": s(V),
      role: "combobox",
      tabindex: "0",
      ...R,
      ...be,
      onclick: yt,
      onkeydown: Tt,
      onblur: Qe,
      onfocus: ht
    }),
    [
      () => Ne({ "mdc-select__anchor": !0, [w()]: !0 }),
      () => lt(M, "anchor$")
    ]
  );
  var yn = Ie(rt);
  {
    var ln = (D) => {
      var be = zp();
      O(D, be);
    };
    he(yn, (D) => {
      f() === "filled" && D(ln);
    });
  }
  var It = _e(yn, 2);
  {
    var Ht = (D) => {
      {
        let be = /* @__PURE__ */ me(() => E() + "-smui-label"), dt = /* @__PURE__ */ me(() => n() !== ""), Ot = /* @__PURE__ */ me(() => lt(M, "label$"));
        xe(
          oo(D, $e(
            {
              get id() {
                return s(be);
              },
              get floatAbove() {
                return s(dt);
              },
              get required() {
                return g();
              }
            },
            () => s(Ot),
            {
              children: (Yn, Zn) => {
                var $i = oe(), vi = J($i);
                {
                  var Hr = (Ur) => {
                  }, Oo = (Ur) => {
                    var Da = oe(), ea = J(Da);
                    {
                      var Qs = (fr) => {
                        var Br = Vt();
                        ke(() => ft(Br, p())), O(fr, Br);
                      }, Pa = (fr) => {
                        var Br = oe(), wo = J(Br);
                        ye(wo, p), O(fr, Br);
                      };
                      he(
                        ea,
                        (fr) => {
                          typeof p() == "string" ? fr(Qs) : fr(Pa, !1);
                        },
                        !0
                      );
                    }
                    O(Ur, Da);
                  };
                  he(vi, (Ur) => {
                    p() == null ? Ur(Hr) : Ur(Oo, !1);
                  });
                }
                O(Yn, $i);
              },
              $$slots: { default: !0 }
            }
          )),
          (Yn) => P = Yn,
          () => P
        );
      }
    };
    he(It, (D) => {
      f() !== "outlined" && !v() && p() != null && D(Ht);
    });
  }
  var Lt = _e(It, 2);
  {
    var Qt = (D) => {
      {
        let be = /* @__PURE__ */ me(() => v() || p() == null), dt = /* @__PURE__ */ me(() => lt(M, "outline$"));
        xe(
          Pc(D, $e(
            {
              get noLabel() {
                return s(be);
              }
            },
            () => s(dt),
            {
              children: (Ot, Yn) => {
                var Zn = oe(), $i = J(Zn);
                {
                  var vi = (Hr) => {
                    {
                      let Oo = /* @__PURE__ */ me(() => E() + "-smui-label"), Ur = /* @__PURE__ */ me(() => n() !== ""), Da = /* @__PURE__ */ me(() => lt(M, "label$"));
                      xe(
                        oo(Hr, $e(
                          {
                            get id() {
                              return s(Oo);
                            },
                            get floatAbove() {
                              return s(Ur);
                            },
                            get required() {
                              return g();
                            }
                          },
                          () => s(Da),
                          {
                            children: (ea, Qs) => {
                              var Pa = oe(), fr = J(Pa);
                              {
                                var Br = (ta) => {
                                }, wo = (ta) => {
                                  var Js = oe(), md = J(Js);
                                  {
                                    var pd = (mi) => {
                                      var na = Vt();
                                      ke(() => ft(na, p())), O(mi, na);
                                    }, gd = (mi) => {
                                      var na = oe(), bd = J(na);
                                      ye(bd, p), O(mi, na);
                                    };
                                    he(
                                      md,
                                      (mi) => {
                                        typeof p() == "string" ? mi(pd) : mi(gd, !1);
                                      },
                                      !0
                                    );
                                  }
                                  O(ta, Js);
                                };
                                he(fr, (ta) => {
                                  p() == null ? ta(Br) : ta(wo, !1);
                                });
                              }
                              O(ea, Pa);
                            },
                            $$slots: { default: !0 }
                          }
                        )),
                        (ea) => P = ea,
                        () => P
                      );
                    }
                  };
                  he($i, (Hr) => {
                    !v() && p() != null && Hr(vi);
                  });
                }
                O(Ot, Zn);
              },
              $$slots: { default: !0 }
            }
          )),
          (Ot) => re = Ot,
          () => re
        );
      }
    };
    he(Lt, (D) => {
      f() === "outlined" && D(Qt);
    });
  }
  var Nr = _e(Lt, 2);
  ye(Nr, () => e.leadingIcon ?? pe);
  var In = _e(Nr, 2);
  Ue(In, (D, be) => ({ class: D, ...be }), [
    () => Ne({
      "mdc-select__selected-text-container": !0,
      [Z()]: !0
    }),
    () => lt(M, "selectedTextContainer$")
  ]);
  var dr = Ie(In);
  Ue(
    dr,
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
      () => lt(M, "selectedText$")
    ]
  );
  var Ji = Ie(dr);
  Be(dr, (D, be) => X == null ? void 0 : X(D, be), G), Be(In, (D, be) => X == null ? void 0 : X(D, be), k);
  var _n = _e(In, 2);
  Ue(_n, (D, be) => ({ class: D, ...be }), [
    () => Ne({
      "mdc-select__dropdown-icon": !0,
      [U()]: !0
    }),
    () => lt(M, "dropdownIcon$")
  ]), Be(_n, (D, be) => X == null ? void 0 : X(D, be), K);
  var Xn = _e(_n, 2);
  {
    var Hn = (D) => {
      {
        let be = /* @__PURE__ */ me(() => lt(M, "ripple$"));
        xe(Dc(D, $e(() => s(be))), (dt) => q = dt, () => q);
      }
    };
    he(Xn, (D) => {
      f() !== "outlined" && d() && D(Hn);
    });
  }
  xe(rt, (D) => ee = D, () => ee), Be(rt, (D, be) => X == null ? void 0 : X(D, be), A);
  var Fr = _e(rt, 2);
  {
    let D = /* @__PURE__ */ me(() => Ne({
      "mdc-select__menu": !0,
      ...ne,
      [N()]: !0
    })), be = /* @__PURE__ */ me(() => lt(M, "menu$"));
    Fp(Fr, $e(
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
          return s(ze);
        },
        get anchorCorner() {
          return s(We);
        }
      },
      () => s(be),
      {
        onSMUIMenuSelected: (dt) => {
          var Ot;
          s(B) && s(B).handleMenuItemAction(dt.detail.index), (Ot = e.onSMUIMenuSelected) == null || Ot.call(e, dt);
        },
        onSMUIMenuSurfaceClosing: (dt) => {
          var Ot;
          s(B) && s(B).handleMenuClosing(), (Ot = e.onSMUIMenuSurfaceClosing) == null || Ot.call(e, dt);
        },
        onSMUIMenuSurfaceClosed: (dt) => {
          var Ot;
          s(B) && s(B).handleMenuClosed(), (Ot = e.onSMUIMenuSurfaceClosed) == null || Ot.call(e, dt);
        },
        onSMUIMenuSurfaceOpened: (dt) => {
          var Ot;
          s(B) && s(B).handleMenuOpened(), (Ot = e.onSMUIMenuSurfaceOpened) == null || Ot.call(e, dt);
        },
        get open() {
          return s(fe);
        },
        set open(dt) {
          $(fe, dt, !0);
        },
        children: (dt, Ot) => {
          {
            let Yn = /* @__PURE__ */ me(() => lt(M, "list$"));
            Hp(dt, $e(
              {
                role: "listbox",
                get wrapFocus() {
                  return s(De);
                }
              },
              () => s(Yn),
              {
                get selectedIndex() {
                  return s(W);
                },
                set selectedIndex(Zn) {
                  $(W, Zn, !0);
                },
                children: (Zn, $i) => {
                  var vi = oe(), Hr = J(vi);
                  ye(Hr, () => e.children ?? pe), O(Zn, vi);
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
  xe(tt, (D) => ae = D, () => ae), Be(tt, (D, be) => Xt == null ? void 0 : Xt(D, be), () => ({
    ripple: f() === "filled",
    unbounded: !1,
    addClass: de,
    removeClass: H,
    addStyle: F
  })), Be(tt, (D, be) => qo == null ? void 0 : qo(D, be), () => ({ addClass: de, removeClass: H })), Be(tt, (D, be) => X == null ? void 0 : X(D, be), u);
  var Lo = _e(tt, 2);
  {
    var hd = (D) => {
      {
        let be = /* @__PURE__ */ me(() => lt(M, "helperText$"));
        Wp(D, $e(() => s(be), {
          children: (dt, Ot) => {
            var Yn = oe(), Zn = J(Yn);
            ye(Zn, () => e.helperText ?? pe), O(dt, Yn);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    he(Lo, (D) => {
      e.helperText && D(hd);
    });
  }
  ke(() => ft(Ji, n())), O(t, at);
  var vd = Re(qe);
  return i(), vd;
}
function Zp(t, e) {
  we(e, !0);
  const n = () => wt(d, "$selectedValue", r), [r, i] = bn();
  let a = m(e, "use", 19, () => []);
  m(e, "class", 3, "");
  let o = m(e, "value", 3, ""), u = /* @__PURE__ */ Ge(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "value",
    "children"
  ]), l;
  const c = ue("SMUI:select:selectedText"), d = ue("SMUI:select:value");
  te("SMUI:list:item:role", "option");
  const h = /* @__PURE__ */ me(() => o() != null && o() !== "" && n() === o());
  ut(f), Ln(f);
  function f() {
    s(h) && l && Gt(c, l.getPrimaryText());
  }
  function v() {
    return l.getElement();
  }
  var p = { getElement: v };
  xe(
    Vp(t, $e(
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
          var x = oe(), S = J(x);
          ye(S, () => e.children ?? pe), O(_, x);
        },
        $$slots: { default: !0 }
      }
    )),
    (_) => l = _,
    () => l
  );
  var b = Re(p);
  return i(), b;
}
function ql(t, e) {
  we(e, !0);
  let n = m(e, "data", 19, () => []);
  m(e, "placeholder", 3, "");
  let r = m(e, "label", 3, "");
  m(e, "description", 3, "");
  let i = m(e, "value", 15), a = m(e, "required", 3, !1);
  m(e, "size", 3, "sm");
  let o = m(e, "variant", 3, "standard"), u = m(e, "selectedOptionIndex", 31, () => -1), l = m(e, "disabled", 3, !1);
  function c(d) {
    return () => u(d);
  }
  Yp(t, {
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
    children: (d, h) => {
      var f = oe(), v = J(f);
      Ei(v, 17, n, Xa, (p, b, _) => {
        {
          let C = /* @__PURE__ */ me(() => c(_));
          Zp(p, {
            get onclick() {
              return s(C);
            },
            get value() {
              return s(b).value;
            },
            children: (x, S) => {
              var g = Vt();
              ke(() => ft(g, s(b).label)), O(x, g);
            },
            $$slots: { default: !0 }
          });
        }
      }), O(d, f);
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
function Qp(t) {
  return t ? t.scrollHeight > t.offsetHeight : !1;
}
function Jp(t) {
  return t ? t.scrollTop === 0 : !1;
}
function $p(t) {
  return t ? Math.ceil(t.scrollHeight - t.scrollTop) === t.clientHeight : !1;
}
function eg(t) {
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
var tg = (
  /** @class */
  function() {
    function t() {
      this.rafIDs = /* @__PURE__ */ new Map();
    }
    return t.prototype.request = function(e, n) {
      var r = this;
      this.cancel(e);
      var i = requestAnimationFrame(function(a) {
        r.rafIDs.delete(e), n(a);
      });
      this.rafIDs.set(e, i);
    }, t.prototype.cancel = function(e) {
      var n = this.rafIDs.get(e);
      n && (cancelAnimationFrame(n), this.rafIDs.delete(e));
    }, t.prototype.cancelAll = function() {
      var e = this;
      this.rafIDs.forEach(function(n, r) {
        e.cancel(r);
      });
    }, t.prototype.getQueue = function() {
      var e = [];
      return this.rafIDs.forEach(function(n, r) {
        e.push(r);
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
var ot = {
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
}, la = {
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
var ng = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n) {
      var r = t.call(this, ve(ve({}, e.defaultAdapter), n)) || this;
      return r.dialogOpen = !1, r.isFullscreen = !1, r.animationFrame = 0, r.animationTimer = 0, r.escapeKeyAction = la.CLOSE_ACTION, r.scrimClickAction = la.CLOSE_ACTION, r.autoStackButtons = !0, r.areButtonsStacked = !1, r.suppressDefaultPressSelector = la.SUPPRESS_DEFAULT_PRESS_SELECTOR, r.animFrame = new tg(), r.contentScrollHandler = function() {
        r.handleScrollEvent();
      }, r.windowResizeHandler = function() {
        r.layout();
      }, r.windowOrientationChangeHandler = function() {
        r.layout();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ot;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return la;
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
      this.adapter.hasClass(ot.STACKED) && this.setAutoStackButtons(!1), this.isFullscreen = this.adapter.hasClass(ot.FULLSCREEN);
    }, e.prototype.destroy = function() {
      this.animationTimer && (clearTimeout(this.animationTimer), this.handleAnimationTimerEnd()), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.animFrame.cancelAll(), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler);
    }, e.prototype.open = function(n) {
      var r = this;
      this.dialogOpen = !0, this.adapter.notifyOpening(), this.adapter.addClass(ot.OPENING), this.isFullscreen && this.adapter.registerContentEventHandler("scroll", this.contentScrollHandler), n && n.isAboveFullscreenDialog && this.adapter.addClass(ot.SCRIM_HIDDEN), this.adapter.registerWindowEventHandler("resize", this.windowResizeHandler), this.adapter.registerWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), this.runNextAnimationFrame(function() {
        r.adapter.addClass(ot.OPEN), r.adapter.addBodyClass(ot.SCROLL_LOCK), r.layout(), r.animationTimer = setTimeout(function() {
          r.handleAnimationTimerEnd(), r.adapter.trapFocus(r.adapter.getInitialFocusEl()), r.adapter.notifyOpened();
        }, Ko.DIALOG_ANIMATION_OPEN_TIME_MS);
      });
    }, e.prototype.close = function(n) {
      var r = this;
      n === void 0 && (n = ""), this.dialogOpen && (this.dialogOpen = !1, this.adapter.notifyClosing(n), this.adapter.addClass(ot.CLOSING), this.adapter.removeClass(ot.OPEN), this.adapter.removeBodyClass(ot.SCROLL_LOCK), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), cancelAnimationFrame(this.animationFrame), this.animationFrame = 0, clearTimeout(this.animationTimer), this.animationTimer = setTimeout(function() {
        r.adapter.releaseFocus(), r.handleAnimationTimerEnd(), r.adapter.notifyClosed(n);
      }, Ko.DIALOG_ANIMATION_CLOSE_TIME_MS));
    }, e.prototype.showSurfaceScrim = function() {
      var n = this;
      this.adapter.addClass(ot.SURFACE_SCRIM_SHOWING), this.runNextAnimationFrame(function() {
        n.adapter.addClass(ot.SURFACE_SCRIM_SHOWN);
      });
    }, e.prototype.hideSurfaceScrim = function() {
      this.adapter.removeClass(ot.SURFACE_SCRIM_SHOWN), this.adapter.addClass(ot.SURFACE_SCRIM_HIDING);
    }, e.prototype.handleSurfaceScrimTransitionEnd = function() {
      this.adapter.removeClass(ot.SURFACE_SCRIM_HIDING), this.adapter.removeClass(ot.SURFACE_SCRIM_SHOWING);
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
      var r = this.adapter.eventTargetMatches(n.target, la.SCRIM_SELECTOR);
      if (r && this.scrimClickAction !== "")
        this.close(this.scrimClickAction);
      else {
        var i = this.adapter.getActionFromEvent(n);
        i && this.close(i);
      }
    }, e.prototype.handleKeydown = function(n) {
      var r = n.key === "Enter" || n.keyCode === 13;
      if (r) {
        var i = this.adapter.getActionFromEvent(n);
        if (!i) {
          var a = n.composedPath ? n.composedPath()[0] : n.target, o = this.suppressDefaultPressSelector ? !this.adapter.eventTargetMatches(a, this.suppressDefaultPressSelector) : !0;
          r && o && this.adapter.clickDefaultButton();
        }
      }
    }, e.prototype.handleDocumentKeydown = function(n) {
      var r = n.key === "Escape" || n.keyCode === 27;
      r && this.escapeKeyAction !== "" && this.close(this.escapeKeyAction);
    }, e.prototype.handleScrollEvent = function() {
      var n = this;
      this.animFrame.request(so.POLL_SCROLL_POS, function() {
        n.toggleScrollDividerHeader(), n.toggleScrollDividerFooter();
      });
    }, e.prototype.layoutInternal = function() {
      this.autoStackButtons && this.detectStackedButtons(), this.toggleScrollableClasses();
    }, e.prototype.handleAnimationTimerEnd = function() {
      this.animationTimer = 0, this.adapter.removeClass(ot.OPENING), this.adapter.removeClass(ot.CLOSING);
    }, e.prototype.runNextAnimationFrame = function(n) {
      var r = this;
      cancelAnimationFrame(this.animationFrame), this.animationFrame = requestAnimationFrame(function() {
        r.animationFrame = 0, clearTimeout(r.animationTimer), r.animationTimer = setTimeout(n, 0);
      });
    }, e.prototype.detectStackedButtons = function() {
      this.adapter.removeClass(ot.STACKED);
      var n = this.adapter.areButtonsStacked();
      n && this.adapter.addClass(ot.STACKED), n !== this.areButtonsStacked && (this.adapter.reverseButtons(), this.areButtonsStacked = n);
    }, e.prototype.toggleScrollableClasses = function() {
      this.adapter.removeClass(ot.SCROLLABLE), this.adapter.isContentScrollable() && (this.adapter.addClass(ot.SCROLLABLE), this.isFullscreen && (this.toggleScrollDividerHeader(), this.toggleScrollDividerFooter()));
    }, e.prototype.toggleScrollDividerHeader = function() {
      this.adapter.isScrollableContentAtTop() ? this.adapter.hasClass(ot.SCROLL_DIVIDER_HEADER) && this.adapter.removeClass(ot.SCROLL_DIVIDER_HEADER) : this.adapter.addClass(ot.SCROLL_DIVIDER_HEADER);
    }, e.prototype.toggleScrollDividerFooter = function() {
      this.adapter.isScrollableContentAtBottom() ? this.adapter.hasClass(ot.SCROLL_DIVIDER_FOOTER) && this.adapter.removeClass(ot.SCROLL_DIVIDER_FOOTER) : this.adapter.addClass(ot.SCROLL_DIVIDER_FOOTER);
    }, e;
  }(Mt)
), rg = /* @__PURE__ */ ge('<div class="mdc-dialog__surface-scrim"></div>'), ig = /* @__PURE__ */ ge('<div><div><div><!> <!></div></div> <div class="mdc-dialog__scrim"></div></div> <!>', 1);
function ag(t, e) {
  we(e, !0);
  const n = () => wt(G, "$aboveFullscreenShown", r), [r, i] = bn(), { FocusTrap: a } = Cm, { closest: o, matches: u } = Ra;
  let l = m(e, "use", 19, () => []), c = m(e, "class", 3, ""), d = m(e, "open", 15, !1), h = m(e, "selection", 3, !1), f = m(e, "escapeKeyAction", 3, "close"), v = m(e, "scrimClickAction", 3, "close"), p = m(e, "autoStackButtons", 3, !0), b = m(e, "fullscreen", 3, !1), _ = m(e, "sheet", 3, !1), C = m(e, "noContentPadding", 3, !1), x = m(e, "container$class", 3, ""), S = m(e, "surface$class", 3, ""), g = /* @__PURE__ */ Ge(e, [
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
  ]), E, I = /* @__PURE__ */ Ee(void 0), T = new Qi(), A = Ce({}), w, k = gt(!1), Z = ue("SMUI:dialog:aboveFullscreen"), G = ue("SMUI:dialog:aboveFullscreenShown") ?? gt(!1), j = ue("SMUI:addLayoutListener"), K, U = [], N = (H) => (U.push(H), () => {
    const F = U.indexOf(H);
    F >= 0 && U.splice(F, 1);
  });
  te("SMUI:dialog:actions:reversed", k), te("SMUI:addLayoutListener", N), te("SMUI:dialog:selection", h()), te("SMUI:dialog:aboveFullscreen", Z || b()), te("SMUI:dialog:aboveFullscreenShown", G), _() && te("SMUI:icon-button:context", "dialog:sheet"), Se(() => {
    s(I) && s(I).getEscapeKeyAction() !== f() && s(I).setEscapeKeyAction(f());
  }), Se(() => {
    s(I) && s(I).getScrimClickAction() !== v() && s(I).setScrimClickAction(v());
  }), Se(() => {
    s(I) && s(I).getAutoStackButtons() !== p() && s(I).setAutoStackButtons(p());
  }), Se(() => {
    p() || Gt(k, !0);
  }), j && (K = j(fe)), Se(() => {
    s(I) && s(I).isOpen() !== d() && (d() ? s(I).open({ isAboveFullscreenDialog: !!Z }) : s(I).close());
  });
  let M = n();
  Se(() => {
    b() && s(I) && M !== n() && (M = n(), n() ? s(I).showSurfaceScrim() : s(I).hideSurfaceScrim());
  }), ut(() => (w = new a(E, { initialFocusEl: R() ?? void 0 }), $(
    I,
    new ng({
      addBodyClass: (H) => document.body.classList.add(H),
      addClass: ae,
      areButtonsStacked: () => eg(y()),
      clickDefaultButton: () => {
        const H = L();
        H && H.click();
      },
      eventTargetMatches: (H, F) => H ? u(H, F) : !1,
      getActionFromEvent: (H) => {
        if (!H.target)
          return "";
        const F = o(H.target, "[data-mdc-dialog-action]");
        return F && F.getAttribute("data-mdc-dialog-action");
      },
      getInitialFocusEl: R,
      hasClass: z,
      isContentScrollable: () => Qp(ee()),
      notifyClosed: (H) => {
        d(!1), Ve(ne(), "SMUIDialogClosed", H ? { action: H } : {});
      },
      notifyClosing: (H) => Ve(ne(), "SMUIDialogClosing", H ? { action: H } : {}),
      notifyOpened: () => Ve(ne(), "SMUIDialogOpened", {}),
      notifyOpening: () => Ve(ne(), "SMUIDialogOpening", {}),
      releaseFocus: () => w.releaseFocus(),
      removeBodyClass: (H) => document.body.classList.remove(H),
      removeClass: B,
      reverseButtons: () => {
        Gt(k, !0);
      },
      trapFocus: () => w.trapFocus(),
      registerContentEventHandler: (H, F) => {
        const Y = ee();
        Y instanceof HTMLElement && T.on(Y, H, F);
      },
      deregisterContentEventHandler: (H, F) => {
        const Y = ee();
        Y instanceof HTMLElement && T.off(Y, H, F);
      },
      isScrollableContentAtTop: () => Jp(ee()),
      isScrollableContentAtBottom: () => $p(ee()),
      registerWindowEventHandler: (H, F) => T.on(window, H, F),
      deregisterWindowEventHandler: (H, F) => T.off(window, H, F)
    }),
    !0
  ), s(I).init(), () => {
    var H;
    (H = s(I)) == null || H.destroy(), T.clear();
  })), Ln(() => {
    K && K();
  });
  function z(H) {
    return H in A ? A[H] : ne().classList.contains(H);
  }
  function ae(H) {
    A[H] || (A[H] = !0);
  }
  function B(H) {
    (!(H in A) || A[H]) && (A[H] = !1);
  }
  function y() {
    return [].slice.call(ne().querySelectorAll(".mdc-dialog__button"));
  }
  function L() {
    return ne().querySelector("[data-mdc-dialog-button-default]");
  }
  function ee() {
    return ne().querySelector(".mdc-dialog__content");
  }
  function R() {
    return ne().querySelector("[data-mdc-dialog-initial-focus]");
  }
  function W() {
    Z && Gt(G, !0), requestAnimationFrame(() => {
      U.forEach((H) => H());
    });
  }
  function ce() {
    U.forEach((H) => H());
  }
  function V() {
    Z && Gt(G, !1);
  }
  function se() {
    return d();
  }
  function Q(H) {
    d(H);
  }
  function fe() {
    var H;
    return (H = s(I)) == null ? void 0 : H.layout();
  }
  function ne() {
    return E;
  }
  var ze = { isOpen: se, setOpen: Q, layout: fe, getElement: ne }, We = ig();
  qr("resize", $a, () => d() && s(I) && s(I).layout()), qr("orientationchange", $a, () => d() && s(I) && s(I).layout()), qr("keydown", Ds.body, (H) => s(I) && s(I).handleDocumentKeydown(H));
  var De = J(We), Le = (H) => {
    var F;
    W(), (F = e.onSMUIDialogOpening) == null || F.call(e, H);
  }, le = (H) => {
    var F;
    ce(), (F = e.onSMUIDialogOpened) == null || F.call(e, H);
  }, Te = (H) => {
    var F;
    V(), (F = e.onSMUIDialogClosed) == null || F.call(e, H);
  }, Fe = (H) => {
    var F;
    s(I) && s(I).handleClick(H), (F = e.onclick) == null || F.call(e, H);
  }, P = (H) => {
    var F;
    s(I) && s(I).handleKeydown(H), (F = e.onkeydown) == null || F.call(e, H);
  };
  Ue(
    De,
    (H, F) => ({
      class: H,
      role: "alertdialog",
      "aria-modal": "true",
      ...F,
      onSMUIDialogOpening: Le,
      onSMUIDialogOpened: le,
      onSMUIDialogClosed: Te,
      onclick: Fe,
      onkeydown: P
    }),
    [
      () => Ne({
        "mdc-dialog": !0,
        "mdc-dialog--stacked": !p(),
        "mdc-dialog--fullscreen": b(),
        "mdc-dialog--sheet": _(),
        "mdc-dialog--no-content-padding": C(),
        "smui-dialog--selection": h(),
        ...A,
        [c()]: !0
      }),
      () => ii(g, ["container$", "surface$"])
    ]
  );
  var q = Ie(De);
  Ue(q, (H, F) => ({ class: H, ...F }), [
    () => Ne({ "mdc-dialog__container": !0, [x()]: !0 }),
    () => lt(g, "container$")
  ]);
  var re = Ie(q);
  Ue(re, (H, F) => ({ class: H, role: "alertdialog", "aria-modal": "true", ...F }), [
    () => Ne({ "mdc-dialog__surface": !0, [S()]: !0 }),
    () => lt(g, "surface$")
  ]);
  var Ae = Ie(re);
  ye(Ae, () => e.children ?? pe);
  var St = _e(Ae, 2);
  {
    var Dt = (H) => {
      var F = rg();
      qr("transitionend", F, () => s(I) && s(I).handleSurfaceScrimTransitionEnd()), O(H, F);
    };
    he(St, (H) => {
      b() && H(Dt);
    });
  }
  xe(De, (H) => E = H, () => E), Be(De, (H, F) => X == null ? void 0 : X(H, F), l);
  var hn = _e(De, 2);
  ye(hn, () => e.over ?? pe), O(t, We);
  var de = Re(ze);
  return i(), de;
}
function og(t, e) {
  we(e, !0);
  let n = /* @__PURE__ */ Ge(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return xe(
    Ma(t, $e({ _smuiClass: "mdc-dialog__content", tag: "div" }, () => n, {
      children: (o, u) => {
        var l = oe(), c = J(l);
        ye(c, () => e.children ?? pe), O(o, l);
      },
      $$slots: { default: !0 }
    })),
    (o) => r = o,
    () => r
  ), Re(a);
}
function sg(t, e) {
  we(e, !0);
  let n = /* @__PURE__ */ Ge(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return xe(
    Ma(t, $e(
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
          var l = oe(), c = J(l);
          ye(c, () => e.children ?? pe), O(o, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), Re(a);
}
var lg = /* @__PURE__ */ ge('<div class="dialog-title svelte-187m1sc"><!></div> <!> <!>', 1);
function ug(t, e) {
  we(e, !0);
  let n = m(e, "open", 15, !1), r = m(e, "onClose", 3, () => {
  });
  ag(t, {
    "aria-labelledby": "large-scroll-title",
    "aria-describedby": "large-scroll-content",
    onSMUIDialogClosed: (i) => {
      n(!1), r()();
    },
    surface$style: "width: 1080px; max-width: calc(100vw - 32px);",
    get open() {
      return n();
    },
    set open(i) {
      n(i);
    },
    children: (i, a) => {
      var o = lg(), u = J(o), l = Ie(u);
      ye(l, () => e.title ?? pe);
      var c = _e(u, 2);
      og(c, {
        id: "large-scroll-content",
        children: (h, f) => {
          var v = oe(), p = J(v);
          ye(p, () => e.content ?? pe), O(h, v);
        },
        $$slots: { default: !0 }
      });
      var d = _e(c, 2);
      sg(d, {
        children: (h, f) => {
          var v = oe(), p = J(v);
          ye(p, () => e.actions ?? pe), O(h, v);
        },
        $$slots: { default: !0 }
      }), O(i, o);
    },
    $$slots: { default: !0 }
  }), Re();
}
var cg = /* @__PURE__ */ ge("<div><!></div>");
function dg(t, e) {
  we(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "variant", 3, "raised"), a = m(e, "square", 3, !1), o = m(e, "color", 3, "default"), u = m(e, "elevation", 3, 1), l = m(e, "transition", 3, !1), c = /* @__PURE__ */ Ge(e, [
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
  var f = { getElement: h }, v = cg();
  Ue(v, (b) => ({ class: b, ...c }), [
    () => Ne({
      "smui-paper": !0,
      "smui-paper--raised": i() === "raised",
      "smui-paper--unelevated": i() === "unelevated",
      "smui-paper--outlined": i() === "outlined",
      ["smui-paper--elevation-z" + u()]: u() !== 0 && i() === "raised",
      "smui-paper--rounded": !a(),
      ["smui-paper--color-" + o()]: o() !== "default",
      "smui-paper-transition": l(),
      [r()]: !0
    })
  ]);
  var p = Ie(v);
  return ye(p, () => e.children ?? pe), xe(v, (b) => d = b, () => d), Be(v, (b, _) => X == null ? void 0 : X(b, _), n), O(t, v), Re(f);
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
var fg = "data-mdc-dom-announce";
function hg(t, e) {
  vg.getInstance().say(t, e);
}
var vg = (
  /** @class */
  function() {
    function t() {
      this.liveRegions = /* @__PURE__ */ new Map();
    }
    return t.getInstance = function() {
      return t.instance || (t.instance = new t()), t.instance;
    }, t.prototype.say = function(e, n) {
      var r, i, a = (r = n == null ? void 0 : n.priority) !== null && r !== void 0 ? r : bs.POLITE, o = (i = n == null ? void 0 : n.ownerDocument) !== null && i !== void 0 ? i : document, u = this.getLiveRegion(a, o);
      u.textContent = "", setTimeout(function() {
        u.textContent = e, o.addEventListener("click", l);
      }, 1);
      function l() {
        u.textContent = "", o.removeEventListener("click", l);
      }
    }, t.prototype.getLiveRegion = function(e, n) {
      var r = this.liveRegions.get(n);
      r || (r = /* @__PURE__ */ new Map(), this.liveRegions.set(n, r));
      var i = r.get(e);
      if (i && n.body.contains(i))
        return i;
      var a = this.createLiveRegion(e, n);
      return r.set(e, a), a;
    }, t.prototype.createLiveRegion = function(e, n) {
      var r = n.createElement("div");
      return r.style.position = "absolute", r.style.top = "-9999px", r.style.left = "-9999px", r.style.height = "1px", r.style.overflow = "hidden", r.setAttribute("aria-atomic", "true"), r.setAttribute("aria-live", e), r.setAttribute(fg, "true"), n.body.appendChild(r), r;
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
var mr;
(function(t) {
  t[t.UNSPECIFIED = 0] = "UNSPECIFIED", t[t.CLICK = 1] = "CLICK", t[t.BACKSPACE_KEY = 2] = "BACKSPACE_KEY", t[t.DELETE_KEY = 3] = "DELETE_KEY", t[t.SPACEBAR_KEY = 4] = "SPACEBAR_KEY", t[t.ENTER_KEY = 5] = "ENTER_KEY";
})(mr || (mr = {}));
var Dn = {
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
var Uc = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n) {
      return t.call(this, ve(ve({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Dn;
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
      n.stopPropagation(), this.adapter.notifyInteraction(mr.CLICK);
    }, e.prototype.handleKeydown = function(n) {
      n.stopPropagation();
      var r = bt(n);
      if (this.shouldNotifyInteractionFromKey(r)) {
        var i = this.getTriggerFromKey(r);
        this.adapter.notifyInteraction(i);
        return;
      }
      if (Am(n)) {
        this.adapter.notifyNavigation(r);
        return;
      }
    }, e.prototype.removeFocus = function() {
      this.adapter.setAttribute(Dn.TAB_INDEX, "-1");
    }, e.prototype.focus = function() {
      this.adapter.setAttribute(Dn.TAB_INDEX, "0"), this.adapter.focus();
    }, e.prototype.isNavigable = function() {
      return this.adapter.getAttribute(Dn.ARIA_HIDDEN) !== "true";
    }, e.prototype.shouldNotifyInteractionFromKey = function(n) {
      var r = n === Me.ENTER || n === Me.SPACEBAR, i = n === Me.BACKSPACE || n === Me.DELETE;
      return r || i;
    }, e.prototype.getTriggerFromKey = function(n) {
      return n === Me.SPACEBAR ? mr.SPACEBAR_KEY : n === Me.ENTER ? mr.ENTER_KEY : n === Me.DELETE ? mr.DELETE_KEY : n === Me.BACKSPACE ? mr.BACKSPACE_KEY : mr.UNSPECIFIED;
    }, e;
  }(Mt)
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
var Bc = (
  /** @class */
  function(t) {
    it(e, t);
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
      n === void 0 && (n = function(i, a) {
        return new io(i, a);
      });
      var r = io.createAdapter(this);
      this.rippleSurface = n(this.root, new xo(r));
    }, e.prototype.initialSyncWithDOM = function() {
      var n = this;
      this.handleClick = function(r) {
        n.foundation.handleClick(r);
      }, this.handleKeydown = function(r) {
        n.foundation.handleKeydown(r);
      }, this.listen("click", this.handleClick), this.listen("keydown", this.handleKeydown);
    }, e.prototype.destroy = function() {
      this.rippleSurface.destroy(), this.unlisten("click", this.handleClick), this.unlisten("keydown", this.handleKeydown), t.prototype.destroy.call(this);
    }, e.prototype.getDefaultFoundation = function() {
      var n = this, r = {
        focus: function() {
          n.root.focus();
        },
        getAttribute: function(i) {
          return n.root.getAttribute(i);
        },
        notifyInteraction: function(i) {
          return n.emit(
            Dn.INTERACTION_EVENT,
            { trigger: i },
            !0
            /* shouldBubble */
          );
        },
        notifyNavigation: function(i) {
          n.emit(
            Dn.NAVIGATION_EVENT,
            { key: i },
            !0
            /* shouldBubble */
          );
        },
        setAttribute: function(i, a) {
          n.root.setAttribute(i, a);
        }
      };
      return new Uc(r);
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
var nr;
(function(t) {
  t.PRIMARY = "primary", t.TRAILING = "trailing", t.NONE = "none";
})(nr || (nr = {}));
var Oe = {
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
}, Et = {
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
}, On = /* @__PURE__ */ new Set();
On.add(Oe.ARROW_LEFT_KEY);
On.add(Oe.ARROW_RIGHT_KEY);
On.add(Oe.ARROW_DOWN_KEY);
On.add(Oe.ARROW_UP_KEY);
On.add(Oe.END_KEY);
On.add(Oe.HOME_KEY);
On.add(Oe.IE_ARROW_LEFT_KEY);
On.add(Oe.IE_ARROW_RIGHT_KEY);
On.add(Oe.IE_ARROW_DOWN_KEY);
On.add(Oe.IE_ARROW_UP_KEY);
var Pr = /* @__PURE__ */ new Set();
Pr.add(Oe.ARROW_UP_KEY);
Pr.add(Oe.ARROW_DOWN_KEY);
Pr.add(Oe.HOME_KEY);
Pr.add(Oe.END_KEY);
Pr.add(Oe.IE_ARROW_UP_KEY);
Pr.add(Oe.IE_ARROW_DOWN_KEY);
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
}, Si;
(function(t) {
  t[t.SHOULD_FOCUS = 0] = "SHOULD_FOCUS", t[t.SHOULD_NOT_FOCUS = 1] = "SHOULD_NOT_FOCUS";
})(Si || (Si = {}));
var js = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n) {
      var r = t.call(this, ve(ve({}, e.defaultAdapter), n)) || this;
      return r.shouldRemoveOnTrailingIconClick = !0, r.shouldFocusPrimaryActionOnClick = !0, r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Oe;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Et;
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
      return this.adapter.hasClass(Et.SELECTED);
    }, e.prototype.isEditable = function() {
      return this.adapter.hasClass(Et.EDITABLE);
    }, e.prototype.isEditing = function() {
      return this.adapter.hasClass(Et.EDITING);
    }, e.prototype.setSelected = function(n) {
      this.setSelectedImpl(n), this.notifySelection(n);
    }, e.prototype.setSelectedFromChipSet = function(n, r) {
      this.setSelectedImpl(n), r && this.notifyIgnoredSelection(n);
    }, e.prototype.getShouldRemoveOnTrailingIconClick = function() {
      return this.shouldRemoveOnTrailingIconClick;
    }, e.prototype.setShouldRemoveOnTrailingIconClick = function(n) {
      this.shouldRemoveOnTrailingIconClick = n;
    }, e.prototype.setShouldFocusPrimaryActionOnClick = function(n) {
      this.shouldFocusPrimaryActionOnClick = n;
    }, e.prototype.getDimensions = function() {
      var n = this, r = function() {
        return n.adapter.getRootBoundingClientRect();
      }, i = function() {
        return n.adapter.getCheckmarkBoundingClientRect();
      };
      if (!this.adapter.hasLeadingIcon()) {
        var a = i();
        if (a) {
          var o = r();
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
      return r();
    }, e.prototype.beginExit = function() {
      this.adapter.addClass(Et.CHIP_EXIT);
    }, e.prototype.handleClick = function() {
      this.adapter.notifyInteraction(), this.setPrimaryActionFocusable(this.getFocusBehavior());
    }, e.prototype.handleDoubleClick = function() {
      this.isEditable() && this.startEditing();
    }, e.prototype.handleTransitionEnd = function(n) {
      var r = this, i = this.adapter.eventTargetHasClass(n.target, Et.CHIP_EXIT), a = n.propertyName === "width", o = n.propertyName === "opacity";
      if (i && o) {
        var u = this.adapter.getComputedStyleValue("width");
        requestAnimationFrame(function() {
          r.adapter.setStyleProperty("width", u), r.adapter.setStyleProperty("padding", "0"), r.adapter.setStyleProperty("margin", "0"), requestAnimationFrame(function() {
            r.adapter.setStyleProperty("width", "0");
          });
        });
        return;
      }
      if (i && a) {
        this.removeFocus();
        var l = this.adapter.getAttribute(Oe.REMOVED_ANNOUNCEMENT_ATTRIBUTE);
        this.adapter.notifyRemoval(l);
      }
      if (o) {
        var c = this.adapter.eventTargetHasClass(n.target, Et.LEADING_ICON) && this.adapter.hasClass(Et.SELECTED), d = this.adapter.eventTargetHasClass(n.target, Et.CHECKMARK) && !this.adapter.hasClass(Et.SELECTED);
        if (c) {
          this.adapter.addClassToLeadingIcon(Et.HIDDEN_LEADING_ICON);
          return;
        }
        if (d) {
          this.adapter.removeClassFromLeadingIcon(Et.HIDDEN_LEADING_ICON);
          return;
        }
      }
    }, e.prototype.handleFocusIn = function(n) {
      this.eventFromPrimaryAction(n) && this.adapter.addClass(Et.PRIMARY_ACTION_FOCUSED);
    }, e.prototype.handleFocusOut = function(n) {
      this.eventFromPrimaryAction(n) && (this.isEditing() && this.finishEditing(), this.adapter.removeClass(Et.PRIMARY_ACTION_FOCUSED));
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
      On.has(n.key) && (n.preventDefault(), this.focusNextAction(n.key, nr.PRIMARY));
    }, e.prototype.handleTrailingActionNavigation = function(n) {
      this.focusNextAction(n.detail.key, nr.TRAILING);
    }, e.prototype.removeFocus = function() {
      this.adapter.setPrimaryActionAttr(Oe.TAB_INDEX, "-1"), this.adapter.removeTrailingActionFocus();
    }, e.prototype.focusPrimaryAction = function() {
      this.setPrimaryActionFocusable(Si.SHOULD_FOCUS);
    }, e.prototype.focusTrailingAction = function() {
      var n = this.adapter.isTrailingActionNavigable();
      if (n) {
        this.adapter.setPrimaryActionAttr(Oe.TAB_INDEX, "-1"), this.adapter.focusTrailingAction();
        return;
      }
      this.focusPrimaryAction();
    }, e.prototype.setPrimaryActionFocusable = function(n) {
      this.adapter.setPrimaryActionAttr(Oe.TAB_INDEX, "0"), n === Si.SHOULD_FOCUS && this.adapter.focusPrimaryAction(), this.adapter.removeTrailingActionFocus();
    }, e.prototype.getFocusBehavior = function() {
      return this.shouldFocusPrimaryActionOnClick ? Si.SHOULD_FOCUS : Si.SHOULD_NOT_FOCUS;
    }, e.prototype.focusNextAction = function(n, r) {
      var i = this.adapter.isTrailingActionNavigable(), a = this.getDirection(n);
      if (Pr.has(n) || !i) {
        this.adapter.notifyNavigation(n, r);
        return;
      }
      if (r === nr.PRIMARY && a === jn.RIGHT) {
        this.focusTrailingAction();
        return;
      }
      if (r === nr.TRAILING && a === jn.LEFT) {
        this.focusPrimaryAction();
        return;
      }
      this.adapter.notifyNavigation(n, nr.NONE);
    }, e.prototype.getDirection = function(n) {
      var r = this.adapter.isRTL(), i = n === Oe.ARROW_LEFT_KEY || n === Oe.IE_ARROW_LEFT_KEY, a = n === Oe.ARROW_RIGHT_KEY || n === Oe.IE_ARROW_RIGHT_KEY;
      return !r && i || r && a ? jn.LEFT : jn.RIGHT;
    }, e.prototype.removeChip = function() {
      this.shouldRemoveOnTrailingIconClick && this.beginExit();
    }, e.prototype.shouldStartEditing = function(n) {
      return this.eventFromPrimaryAction(n) && n.key === Oe.ENTER_KEY;
    }, e.prototype.shouldFinishEditing = function(n) {
      return n.key === Oe.ENTER_KEY;
    }, e.prototype.shouldNotifyInteraction = function(n) {
      return n.key === Oe.ENTER_KEY || n.key === Oe.SPACEBAR_KEY;
    }, e.prototype.isDeleteAction = function(n) {
      var r = this.adapter.hasClass(Et.DELETABLE);
      return r && (n.key === Oe.BACKSPACE_KEY || n.key === Oe.DELETE_KEY || n.key === Oe.IE_DELETE_KEY);
    }, e.prototype.setSelectedImpl = function(n) {
      n ? (this.adapter.addClass(Et.SELECTED), this.adapter.setPrimaryActionAttr(Oe.ARIA_CHECKED, "true")) : (this.adapter.removeClass(Et.SELECTED), this.adapter.setPrimaryActionAttr(Oe.ARIA_CHECKED, "false"));
    }, e.prototype.notifySelection = function(n) {
      this.adapter.notifySelection(n, !1);
    }, e.prototype.notifyIgnoredSelection = function(n) {
      this.adapter.notifySelection(n, !0);
    }, e.prototype.eventFromPrimaryAction = function(n) {
      return this.adapter.eventTargetHasClass(n.target, Et.PRIMARY_ACTION);
    }, e.prototype.startEditing = function() {
      this.adapter.addClass(Et.EDITING), this.adapter.notifyEditStart();
    }, e.prototype.finishEditing = function() {
      this.adapter.removeClass(Et.EDITING), this.adapter.notifyEditFinish();
    }, e;
  }(Mt)
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
var kc = (
  /** @class */
  function(t) {
    it(e, t);
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
    }, e.prototype.initialize = function(n, r) {
      var i = this;
      n === void 0 && (n = function(u, l) {
        return new io(u, l);
      }), r === void 0 && (r = function(u) {
        return new Bc(u);
      }), this.leadingIcon = this.root.querySelector(Oe.LEADING_ICON_SELECTOR), this.checkmark = this.root.querySelector(Oe.CHECKMARK_SELECTOR), this.primaryAction = this.root.querySelector(Oe.PRIMARY_ACTION_SELECTOR);
      var a = this.root.querySelector(Oe.TRAILING_ACTION_SELECTOR);
      a && (this.trailingAction = r(a));
      var o = ve(ve({}, io.createAdapter(this)), { computeBoundingRect: function() {
        return i.foundation.getDimensions();
      } });
      this.rippleSurface = n(this.root, new xo(o));
    }, e.prototype.initialSyncWithDOM = function() {
      var n = this;
      this.handleTrailingActionInteraction = function() {
        n.foundation.handleTrailingActionInteraction();
      }, this.handleTrailingActionNavigation = function(r) {
        n.foundation.handleTrailingActionNavigation(r);
      }, this.handleClick = function() {
        n.foundation.handleClick();
      }, this.handleKeydown = function(r) {
        n.foundation.handleKeydown(r);
      }, this.handleTransitionEnd = function(r) {
        n.foundation.handleTransitionEnd(r);
      }, this.handleFocusIn = function(r) {
        n.foundation.handleFocusIn(r);
      }, this.handleFocusOut = function(r) {
        n.foundation.handleFocusOut(r);
      }, this.listen("transitionend", this.handleTransitionEnd), this.listen("click", this.handleClick), this.listen("keydown", this.handleKeydown), this.listen("focusin", this.handleFocusIn), this.listen("focusout", this.handleFocusOut), this.trailingAction && (this.listen(Dn.INTERACTION_EVENT, this.handleTrailingActionInteraction), this.listen(Dn.NAVIGATION_EVENT, this.handleTrailingActionNavigation));
    }, e.prototype.destroy = function() {
      this.rippleSurface.destroy(), this.unlisten("transitionend", this.handleTransitionEnd), this.unlisten("keydown", this.handleKeydown), this.unlisten("click", this.handleClick), this.unlisten("focusin", this.handleFocusIn), this.unlisten("focusout", this.handleFocusOut), this.trailingAction && (this.unlisten(Dn.INTERACTION_EVENT, this.handleTrailingActionInteraction), this.unlisten(Dn.NAVIGATION_EVENT, this.handleTrailingActionNavigation)), t.prototype.destroy.call(this);
    }, e.prototype.beginExit = function() {
      this.foundation.beginExit();
    }, e.prototype.getDefaultFoundation = function() {
      var n = this, r = {
        addClass: function(i) {
          return n.root.classList.add(i);
        },
        addClassToLeadingIcon: function(i) {
          n.leadingIcon && n.leadingIcon.classList.add(i);
        },
        eventTargetHasClass: function(i, a) {
          return i ? i.classList.contains(a) : !1;
        },
        focusPrimaryAction: function() {
          n.primaryAction && n.primaryAction.focus();
        },
        focusTrailingAction: function() {
          n.trailingAction && n.trailingAction.focus();
        },
        getAttribute: function(i) {
          return n.root.getAttribute(i);
        },
        getCheckmarkBoundingClientRect: function() {
          return n.checkmark ? n.checkmark.getBoundingClientRect() : null;
        },
        getComputedStyleValue: function(i) {
          return window.getComputedStyle(n.root).getPropertyValue(i);
        },
        getRootBoundingClientRect: function() {
          return n.root.getBoundingClientRect();
        },
        hasClass: function(i) {
          return n.root.classList.contains(i);
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
            Oe.INTERACTION_EVENT,
            { chipId: n.id },
            !0
            /* shouldBubble */
          );
        },
        notifyNavigation: function(i, a) {
          return n.emit(
            Oe.NAVIGATION_EVENT,
            { chipId: n.id, key: i, source: a },
            !0
            /* shouldBubble */
          );
        },
        notifyRemoval: function(i) {
          n.emit(
            Oe.REMOVAL_EVENT,
            { chipId: n.id, removedAnnouncement: i },
            !0
            /* shouldBubble */
          );
        },
        notifySelection: function(i, a) {
          return n.emit(
            Oe.SELECTION_EVENT,
            { chipId: n.id, selected: i, shouldIgnore: a },
            !0
            /* shouldBubble */
          );
        },
        notifyTrailingIconInteraction: function() {
          return n.emit(
            Oe.TRAILING_ICON_INTERACTION_EVENT,
            { chipId: n.id },
            !0
            /* shouldBubble */
          );
        },
        notifyEditStart: function() {
        },
        notifyEditFinish: function() {
        },
        removeClass: function(i) {
          return n.root.classList.remove(i);
        },
        removeClassFromLeadingIcon: function(i) {
          n.leadingIcon && n.leadingIcon.classList.remove(i);
        },
        removeTrailingActionFocus: function() {
          n.trailingAction && n.trailingAction.removeFocus();
        },
        setPrimaryActionAttr: function(i, a) {
          n.primaryAction && n.primaryAction.setAttribute(i, a);
        },
        setStyleProperty: function(i, a) {
          return n.root.style.setProperty(i, a);
        }
      };
      return new js(r);
    }, e.prototype.setSelectedFromChipSet = function(n, r) {
      this.foundation.setSelectedFromChipSet(n, r);
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
var Vc = {
  CHIP_SELECTOR: ".mdc-chip"
}, ma = {
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
    it(e, t);
    function e(n) {
      var r = t.call(this, ve(ve({}, e.defaultAdapter), n)) || this;
      return r.selectedChipIds = [], r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Vc;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ma;
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
      var r = n.chipId, i = this.adapter.getIndexOfChipById(r);
      this.removeFocusFromChipsExcept(i), (this.adapter.hasClass(ma.CHOICE) || this.adapter.hasClass(ma.FILTER)) && this.toggleSelect(r);
    }, e.prototype.handleChipSelection = function(n) {
      var r = n.chipId, i = n.selected, a = n.shouldIgnore;
      if (!a) {
        var o = this.selectedChipIds.indexOf(r) >= 0;
        i && !o ? this.select(r) : !i && o && this.deselectImpl(r);
      }
    }, e.prototype.handleChipRemoval = function(n) {
      var r = n.chipId, i = n.removedAnnouncement;
      i && this.adapter.announceMessage(i);
      var a = this.adapter.getIndexOfChipById(r);
      this.deselectAndNotifyClients(r), this.adapter.removeChipAtIndex(a);
      var o = this.adapter.getChipListCount() - 1;
      if (!(o < 0)) {
        var u = Math.min(a, o);
        this.removeFocusFromChipsExcept(u), this.adapter.focusChipTrailingActionAtIndex(u);
      }
    }, e.prototype.handleChipNavigation = function(n) {
      var r = n.chipId, i = n.key, a = n.source, o = this.adapter.getChipListCount() - 1, u = this.adapter.getIndexOfChipById(r);
      if (!(u === -1 || !On.has(i))) {
        var l = this.adapter.isRTL(), c = i === Oe.ARROW_LEFT_KEY || i === Oe.IE_ARROW_LEFT_KEY, d = i === Oe.ARROW_RIGHT_KEY || i === Oe.IE_ARROW_RIGHT_KEY, h = i === Oe.ARROW_DOWN_KEY || i === Oe.IE_ARROW_DOWN_KEY, f = !l && d || l && c || h, v = i === Oe.HOME_KEY, p = i === Oe.END_KEY;
        f ? u++ : v ? u = 0 : p ? u = o : u--, !(u < 0 || u > o) && (this.removeFocusFromChipsExcept(u), this.focusChipAction(u, i, a));
      }
    }, e.prototype.focusChipAction = function(n, r, i) {
      var a = Pr.has(r);
      if (a && i === nr.PRIMARY)
        return this.adapter.focusChipPrimaryActionAtIndex(n);
      if (a && i === nr.TRAILING)
        return this.adapter.focusChipTrailingActionAtIndex(n);
      var o = this.getDirection(r);
      if (o === jn.LEFT)
        return this.adapter.focusChipTrailingActionAtIndex(n);
      if (o === jn.RIGHT)
        return this.adapter.focusChipPrimaryActionAtIndex(n);
    }, e.prototype.getDirection = function(n) {
      var r = this.adapter.isRTL(), i = n === Oe.ARROW_LEFT_KEY || n === Oe.IE_ARROW_LEFT_KEY, a = n === Oe.ARROW_RIGHT_KEY || n === Oe.IE_ARROW_RIGHT_KEY;
      return !r && i || r && a ? jn.LEFT : jn.RIGHT;
    }, e.prototype.deselectImpl = function(n, r) {
      r === void 0 && (r = !1);
      var i = this.selectedChipIds.indexOf(n);
      if (i >= 0) {
        this.selectedChipIds.splice(i, 1);
        var a = this.adapter.getIndexOfChipById(n);
        this.adapter.selectChipAtIndex(
          a,
          /** isSelected */
          !1,
          r
        );
      }
    }, e.prototype.deselectAndNotifyClients = function(n) {
      this.deselectImpl(n, !0);
    }, e.prototype.toggleSelect = function(n) {
      this.selectedChipIds.indexOf(n) >= 0 ? this.deselectAndNotifyClients(n) : this.selectAndNotifyClients(n);
    }, e.prototype.removeFocusFromChipsExcept = function(n) {
      for (var r = this.adapter.getChipListCount(), i = 0; i < r; i++)
        i !== n && this.adapter.removeFocusFromChipAtIndex(i);
    }, e.prototype.selectAndNotifyClients = function(n) {
      this.selectImpl(n, !0);
    }, e.prototype.selectImpl = function(n, r) {
      if (!(this.selectedChipIds.indexOf(n) >= 0)) {
        if (this.adapter.hasClass(ma.CHOICE) && this.selectedChipIds.length > 0) {
          var i = this.selectedChipIds[0], a = this.adapter.getIndexOfChipById(i);
          this.selectedChipIds = [], this.adapter.selectChipAtIndex(
            a,
            /** isSelected */
            !1,
            r
          );
        }
        this.selectedChipIds.push(n);
        var o = this.adapter.getIndexOfChipById(n);
        this.adapter.selectChipAtIndex(
          o,
          /** isSelected */
          !0,
          r
        );
      }
    }, e;
  }(Mt)
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
var To = js.strings, zl = To.INTERACTION_EVENT, Xl = To.SELECTION_EVENT, Yl = To.REMOVAL_EVENT, Zl = To.NAVIGATION_EVENT, mg = Ws.strings.CHIP_SELECTOR, Ql = 0, pg = (
  /** @class */
  function(t) {
    it(e, t);
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
      n === void 0 && (n = function(r) {
        return new kc(r);
      }), this.chipFactory = n, this.chipsList = this.instantiateChips(this.chipFactory);
    }, e.prototype.initialSyncWithDOM = function() {
      var n, r, i = this;
      try {
        for (var a = Rt(this.chipsList), o = a.next(); !o.done; o = a.next()) {
          var u = o.value;
          u.id && u.selected && this.foundation.select(u.id);
        }
      } catch (l) {
        n = { error: l };
      } finally {
        try {
          o && !o.done && (r = a.return) && r.call(a);
        } finally {
          if (n) throw n.error;
        }
      }
      this.handleChipInteraction = function(l) {
        return i.foundation.handleChipInteraction(l.detail);
      }, this.handleChipSelection = function(l) {
        return i.foundation.handleChipSelection(l.detail);
      }, this.handleChipRemoval = function(l) {
        return i.foundation.handleChipRemoval(l.detail);
      }, this.handleChipNavigation = function(l) {
        return i.foundation.handleChipNavigation(l.detail);
      }, this.listen(zl, this.handleChipInteraction), this.listen(Xl, this.handleChipSelection), this.listen(Yl, this.handleChipRemoval), this.listen(Zl, this.handleChipNavigation);
    }, e.prototype.destroy = function() {
      var n, r;
      try {
        for (var i = Rt(this.chipsList), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          o.destroy();
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
      this.unlisten(zl, this.handleChipInteraction), this.unlisten(Xl, this.handleChipSelection), this.unlisten(Yl, this.handleChipRemoval), this.unlisten(Zl, this.handleChipNavigation), t.prototype.destroy.call(this);
    }, e.prototype.addChip = function(n) {
      n.id = n.id || "mdc-chip-" + ++Ql, this.chipsList.push(this.chipFactory(n));
    }, e.prototype.getDefaultFoundation = function() {
      var n = this, r = {
        announceMessage: function(i) {
          hg(i);
        },
        focusChipPrimaryActionAtIndex: function(i) {
          n.chipsList[i].focusPrimaryAction();
        },
        focusChipTrailingActionAtIndex: function(i) {
          n.chipsList[i].focusTrailingAction();
        },
        getChipListCount: function() {
          return n.chips.length;
        },
        getIndexOfChipById: function(i) {
          return n.findChipIndex(i);
        },
        hasClass: function(i) {
          return n.root.classList.contains(i);
        },
        isRTL: function() {
          return window.getComputedStyle(n.root).getPropertyValue("direction") === "rtl";
        },
        removeChipAtIndex: function(i) {
          i >= 0 && i < n.chips.length && (n.chipsList[i].destroy(), n.chipsList[i].remove(), n.chipsList.splice(i, 1));
        },
        removeFocusFromChipAtIndex: function(i) {
          n.chipsList[i].removeFocus();
        },
        selectChipAtIndex: function(i, a, o) {
          i >= 0 && i < n.chips.length && n.chipsList[i].setSelectedFromChipSet(a, o);
        }
      };
      return new Ws(r);
    }, e.prototype.instantiateChips = function(n) {
      var r = [].slice.call(this.root.querySelectorAll(mg));
      return r.map(function(i) {
        return i.id = i.id || "mdc-chip-" + ++Ql, n(i);
      });
    }, e.prototype.findChipIndex = function(n) {
      for (var r = 0; r < this.chips.length; r++)
        if (this.chipsList[r].id === n)
          return r;
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
  MDCChip: kc,
  MDCChipFoundation: js,
  MDCChipSet: pg,
  MDCChipSetFoundation: Ws,
  MDCChipTrailingAction: Bc,
  MDCChipTrailingActionFoundation: Uc,
  chipCssClasses: Et,
  chipSetCssClasses: ma,
  chipSetStrings: Vc,
  chipStrings: Oe,
  trailingActionStrings: Dn
}, Symbol.toStringTag, { value: "Module" }));
var gg = /* @__PURE__ */ ge('<div class="mdc-chip__ripple"></div>'), bg = /* @__PURE__ */ ge('<div class="mdc-chip__touch"></div>'), yg = /* @__PURE__ */ ge("<!> <!> <!>", 1);
function Ig(t, e) {
  we(e, !0);
  const n = () => wt(A, "$initialSelectedStore", o), r = () => wt(j, "$choice", o), i = () => wt(K, "$index", o), a = () => wt(G, "$nonInteractive", o), [o, u] = bn(), { MDCChipFoundation: l } = qs;
  let c = m(e, "use", 19, () => []), d = m(e, "class", 3, ""), h = m(e, "style", 3, ""), f = m(e, "ripple", 3, !0), v = m(e, "touch", 3, !1), p = m(e, "shouldRemoveOnTrailingIconClick", 3, !0), b = m(e, "shouldFocusPrimaryActionOnClick", 3, !0), _ = m(e, "component", 3, Dr), C = m(e, "tag", 3, "div"), x = /* @__PURE__ */ Ge(e, [
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
  ]), S, g = /* @__PURE__ */ Ee(void 0), E = Ce({}), I = Ce({}), T = Ce({});
  const A = ue("SMUI:chips:chip:initialSelected");
  let w = /* @__PURE__ */ Ee(Ce(n())), k, Z;
  const G = ue("SMUI:chips:nonInteractive"), j = ue("SMUI:chips:choice"), K = ue("SMUI:chips:chip:index"), U = gt(p());
  Se(() => {
    Gt(U, p());
  }), te("SMUI:chips:chip:shouldRemoveOnTrailingIconClick", U);
  const N = gt(s(w));
  Se(() => {
    Gt(N, s(w));
  }), te("SMUI:chips:chip:isSelected", N);
  const M = gt(I);
  Se(() => {
    Gt(M, I);
  }), te("SMUI:chips:chip:leadingIconClasses", M), te("SMUI:chips:chip:focusable", r() && s(w) || i() === 0), Se(() => {
    s(g) && s(g).getShouldRemoveOnTrailingIconClick() !== p() && s(g).setShouldRemoveOnTrailingIconClick(p());
  }), Se(() => {
    s(g) && s(g).setShouldFocusPrimaryActionOnClick(b());
  }), te("SMUI:chips:primary-action:mount", (le) => {
    k = le;
  }), te("SMUI:chips:primary-action:unmount", () => {
    k = void 0;
  }), te("SMUI:chips:trailing-action:mount", (le) => {
    Z = le;
  }), te("SMUI:chips:trailing-action:unmount", () => {
    Z = void 0;
  });
  const z = ue("SMUI:chips:chip:mount"), ae = ue("SMUI:chips:chip:unmount");
  ut(() => {
    $(
      g,
      new l({
        addClass: y,
        addClassToLeadingIcon: ee,
        eventTargetHasClass: (Te, Fe) => Te && "classList" in Te ? Te.classList.contains(Fe) : !1,
        focusPrimaryAction: () => {
          k && k.focus();
        },
        focusTrailingAction: () => {
          Z && Z.focus();
        },
        getAttribute: (Te) => ne().getAttribute(Te),
        getCheckmarkBoundingClientRect: () => {
          const Te = ne().querySelector(".mdc-chip__checkmark");
          return Te ? Te.getBoundingClientRect() : null;
        },
        getComputedStyleValue: ce,
        getRootBoundingClientRect: () => ne().getBoundingClientRect(),
        hasClass: B,
        hasLeadingIcon: () => !!ne().querySelector(".mdc-chip__icon--leading"),
        isRTL: () => getComputedStyle(ne()).getPropertyValue("direction") === "rtl",
        isTrailingActionNavigable: () => Z ? Z.isNavigable() : !1,
        notifyInteraction: () => Ve(ne(), "SMUIChipInteraction", { chipId: e.chip }),
        notifyNavigation: (Te, Fe) => Ve(ne(), "SMUIChipNavigation", { chipId: e.chip, key: Te, source: Fe }),
        notifyRemoval: (Te) => Ve(ne(), "SMUIChipRemoval", { chipId: e.chip, removedAnnouncement: Te }),
        notifySelection: (Te, Fe) => Ve(ne(), "SMUIChipSelection", { chipId: e.chip, selected: Te, shouldIgnore: Fe }),
        notifyTrailingIconInteraction: () => Ve(ne(), "SMUIChipTrailingIconInteraction", { chipId: e.chip }),
        notifyEditStart: () => {
        },
        notifyEditFinish: () => {
        },
        removeClass: L,
        removeClassFromLeadingIcon: R,
        removeTrailingActionFocus: () => {
          Z && Z.removeFocus();
        },
        setPrimaryActionAttr: (Te, Fe) => {
          k && k.addAttr(Te, Fe);
        },
        setStyleProperty: W
      }),
      !0
    );
    const le = {
      chipId: e.chip,
      get selected() {
        return s(w);
      },
      focusPrimaryAction: se,
      focusTrailingAction: Q,
      removeFocus: fe,
      setSelectedFromChipSet: V
    };
    return z && z(le), s(g).init(), () => {
      var Te;
      ae && ae(le), (Te = s(g)) == null || Te.destroy();
    };
  });
  function B(le) {
    return le in E ? E[le] : ne().classList.contains(le);
  }
  function y(le) {
    E[le] || (E[le] = !0);
  }
  function L(le) {
    (!(le in E) || E[le]) && (E[le] = !1);
  }
  function ee(le) {
    I[le] || (I[le] = !0);
  }
  function R(le) {
    (!(le in I) || I[le]) && (I[le] = !1);
  }
  function W(le, Te) {
    T[le] != Te && (Te === "" || Te == null ? delete T[le] : T[le] = Te);
  }
  function ce(le) {
    return le in T ? T[le] : getComputedStyle(ne()).getPropertyValue(le);
  }
  function V(le, Te) {
    var Fe;
    $(w, le, !0), (Fe = s(g)) == null || Fe.setSelectedFromChipSet(s(w), Te);
  }
  function se() {
    var le;
    (le = s(g)) == null || le.focusPrimaryAction();
  }
  function Q() {
    var le;
    (le = s(g)) == null || le.focusTrailingAction();
  }
  function fe() {
    var le;
    (le = s(g)) == null || le.removeFocus();
  }
  function ne() {
    return S.getElement();
  }
  var ze = { getElement: ne }, We = oe(), De = J(We);
  {
    let le = /* @__PURE__ */ me(() => [
      [
        Xt,
        {
          ripple: f() && !a(),
          unbounded: !1,
          addClass: y,
          removeClass: L,
          addStyle: W
        }
      ],
      ...c()
    ]), Te = /* @__PURE__ */ me(() => Ne({
      "mdc-chip": !0,
      "mdc-chip--selected": s(w),
      "mdc-chip--touch": v(),
      ...E,
      [d()]: !0
    })), Fe = /* @__PURE__ */ me(() => Object.entries(T).map(([P, q]) => `${P}: ${q};`).concat([h()]).join(" "));
    sr(De, _, (P, q) => {
      xe(
        q(P, $e(
          {
            get tag() {
              return C();
            },
            get use() {
              return s(le);
            },
            get class() {
              return s(Te);
            },
            get style() {
              return s(Fe);
            },
            role: "row"
          },
          () => x,
          {
            ontransitionend: (re) => {
              var Ae;
              s(g) && s(g).handleTransitionEnd(re), (Ae = e.ontransitionend) == null || Ae.call(e, re);
            },
            onclick: (re) => {
              var Ae;
              s(g) && s(g).handleClick(), (Ae = e.onclick) == null || Ae.call(e, re);
            },
            onkeydown: (re) => {
              var Ae;
              s(g) && s(g).handleKeydown(re), (Ae = e.onkeydown) == null || Ae.call(e, re);
            },
            onfocusin: (re) => {
              var Ae;
              s(g) && s(g).handleFocusIn(re), (Ae = e.onfocusin) == null || Ae.call(e, re);
            },
            onfocusout: (re) => {
              var Ae;
              s(g) && s(g).handleFocusOut(re), (Ae = e.onfocusout) == null || Ae.call(e, re);
            },
            onSMUIChipTrailingActionInteraction: (re) => {
              var Ae;
              s(g) && s(g).handleTrailingActionInteraction(), (Ae = e.onSMUIChipTrailingActionInteraction) == null || Ae.call(e, re);
            },
            onSMUIChipTrailingActionNavigation: (re) => {
              var Ae;
              s(g) && s(g).handleTrailingActionNavigation(re), (Ae = e.onSMUIChipTrailingActionNavigation) == null || Ae.call(e, re);
            },
            children: (re, Ae) => {
              var St = yg(), Dt = J(St);
              {
                var hn = (Y) => {
                  var Pe = gg();
                  O(Y, Pe);
                };
                he(Dt, (Y) => {
                  f() && !a() && Y(hn);
                });
              }
              var de = _e(Dt, 2);
              ye(de, () => e.children ?? pe);
              var H = _e(de, 2);
              {
                var F = (Y) => {
                  var Pe = bg();
                  O(Y, Pe);
                };
                he(H, (Y) => {
                  v() && Y(F);
                });
              }
              O(re, St);
            },
            $$slots: { default: !0 }
          }
        )),
        (re) => S = re,
        () => S
      );
    });
  }
  O(t, We);
  var Le = Re(ze);
  return u(), Le;
}
var _g = /* @__PURE__ */ ge("<div></div>");
function Eg(t, e) {
  we(e, !0);
  const [n, r] = bn(), { MDCChipSetFoundation: i } = qs;
  let a = m(e, "use", 19, () => []), o = m(e, "class", 3, ""), u = m(e, "chips", 27, () => Ce([])), l = m(e, "key", 3, (R) => `${R}`), c = m(e, "selected", 15), d = m(e, "nonInteractive", 3, !1), h = m(e, "choice", 3, !1), f = m(e, "filter", 3, !1), v = m(e, "input", 3, !1), p = /* @__PURE__ */ Ge(e, [
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
  let b, _ = /* @__PURE__ */ Ee(void 0), C = {}, x = /* @__PURE__ */ new WeakMap(), S = u().map((R) => h() && c() != null && l()(c()) === l()(R) || f() && c() != null && c().findIndex((W) => l()(W) === l()(R)) !== -1);
  te("SMUI:chips:key", l());
  const g = gt(d());
  Se(() => {
    Gt(g, d());
  }), te("SMUI:chips:nonInteractive", g);
  const E = gt(h());
  Se(() => {
    Gt(E, h());
  }), te("SMUI:chips:choice", E);
  const I = gt(f());
  Se(() => {
    Gt(I, f());
  }), te("SMUI:chips:filter", I);
  let T = f() ? new Set(c() ?? []) : c();
  Se(() => {
    if (s(_) && h() && T !== c()) {
      const R = T;
      T = c(), c() != null ? s(_).select(l()(c())) : s(_).handleChipSelection({
        chipId: l()(R),
        selected: !1,
        shouldIgnore: !1
      });
    }
  }), Se(() => {
    if (s(_) && f()) {
      const R = new Set(c() ?? []), W = A(T, R), ce = A(R, T);
      if (W.size || ce.size) {
        T = R;
        for (let V of W)
          u().findIndex((se) => l()(se) === l()(V)) !== -1 && s(_).handleChipSelection({ chipId: l()(V), selected: !1, shouldIgnore: !1 });
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
    U(R.chipId);
  }), ut(() => {
    if ($(
      _,
      new i({
        announceMessage: mm,
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
        hasClass: (R) => N().classList.contains(R),
        isRTL: () => getComputedStyle(N()).getPropertyValue("direction") === "rtl",
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
              const se = l()(u()[R]), Q = c().findIndex((fe) => l()(fe) === se);
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
  function w(R) {
    s(_) && s(_).handleChipInteraction({ chipId: l()(R.detail.chipId) });
  }
  function k(R) {
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
  function U(R) {
    R instanceof Object ? x.delete(R) : delete C[R];
  }
  function N() {
    return b;
  }
  var M = { getElement: N }, z = _g(), ae = (R) => {
    var W;
    w(R), (W = e.onSMUIChipInteraction) == null || W.call(e, R);
  }, B = (R) => {
    var W;
    k(R), (W = e.onSMUIChipSelection) == null || W.call(e, R);
  }, y = (R) => {
    var W;
    Z(R), (W = e.onSMUIChipRemoval) == null || W.call(e, R);
  }, L = (R) => {
    var W;
    G(R), (W = e.onSMUIChipNavigation) == null || W.call(e, R);
  };
  Ue(
    z,
    (R) => ({
      class: R,
      role: "grid",
      ...p,
      onSMUIChipInteraction: ae,
      onSMUIChipSelection: B,
      onSMUIChipRemoval: y,
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
  ), Ei(z, 23, u, (R) => l()(R), (R, W, ce) => {
    Ci(R, {
      key: "SMUI:chips:chip:index",
      get value() {
        return s(ce);
      },
      children: (V, se) => {
        Ci(V, {
          key: "SMUI:chips:chip:initialSelected",
          get value() {
            return S[s(ce)];
          },
          children: (Q, fe) => {
            var ne = oe(), ze = J(ne);
            ye(ze, () => e.chip, () => s(W)), O(Q, ne);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { default: !0 }
    });
  }), xe(z, (R) => b = R, () => b), Be(z, (R, W) => X == null ? void 0 : X(R, W), a), O(t, z);
  var ee = Re(M);
  return r(), ee;
}
var Cg = /* @__PURE__ */ dn('<svg class="mdc-chip__checkmark-svg" viewBox="-2 -3 30 30"><path class="mdc-chip__checkmark-path" fill="none" stroke="black" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg>'), Ag = /* @__PURE__ */ ge("<span><!></span>");
function Sg(t, e) {
  we(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = /* @__PURE__ */ Ge(e, [
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
  var u = { getElement: o }, l = Ag();
  Ue(l, (f) => ({ class: f, ...i }), [
    () => Ne({ "mdc-chip__checkmark": !0, [r()]: !0 })
  ]);
  var c = Ie(l);
  {
    var d = (f) => {
      var v = oe(), p = J(v);
      ye(p, () => e.children ?? pe), O(f, v);
    }, h = (f) => {
      var v = Cg();
      O(f, v);
    };
    he(c, (f) => {
      e.children ? f(d) : f(h, !1);
    });
  }
  return xe(l, (f) => a = f, () => a), Be(l, (f, v) => X == null ? void 0 : X(f, v), n), O(t, l), Re(u);
}
var xg = /* @__PURE__ */ ge("<span><!></span>"), Tg = /* @__PURE__ */ ge("<span><span><!></span></span>"), Lg = /* @__PURE__ */ ge("<!> <span><!></span>", 1);
function Og(t, e) {
  we(e, !0);
  const n = () => wt(x, "$filter", o), r = () => wt(C, "$choice", o), i = () => wt(_, "$nonInteractive", o), a = () => wt(S, "$isSelected", o), [o, u] = bn();
  let l = m(e, "use", 19, () => []), c = m(e, "class", 3, ""), d = m(e, "tabindex", 19, () => ue("SMUI:chips:chip:focusable") ? 0 : -1), h = /* @__PURE__ */ Ge(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "tabindex",
    "children",
    "checkbox"
  ]), f, v, p, b = Ce({});
  const _ = ue("SMUI:chips:nonInteractive"), C = ue("SMUI:chips:choice"), x = ue("SMUI:chips:filter"), S = ue("SMUI:chips:chip:isSelected"), g = /* @__PURE__ */ me(() => ({
    role: n() ? "checkbox" : r() ? "radio" : "button",
    tabindex: d()
  })), E = ue("SMUI:chips:primary-action:mount"), I = ue("SMUI:chips:primary-action:unmount");
  ut(() => {
    let y = { focus: w, addAttr: T };
    return E && E(y), () => {
      I && I(y);
    };
  });
  function T(y, L) {
    b[y] !== L && (b[y] = L);
  }
  function A(y) {
    b.tabindex !== Z().getAttribute("tabindex") ? Eo().then(y) : y();
  }
  function w() {
    A(() => {
      p && p.focus();
    });
  }
  function k() {
    return v && v.getElement();
  }
  function Z() {
    return f;
  }
  var G = { focus: w, getInput: k, getElement: Z }, j = Lg(), K = J(j);
  {
    var U = (y) => {
      {
        let L = /* @__PURE__ */ me(() => lt(h, "checkmark$"));
        xe(
          Sg(y, $e(
            {
              get children() {
                return e.checkbox;
              }
            },
            () => s(L)
          )),
          (ee) => v = ee,
          () => v
        );
      }
    };
    he(K, (y) => {
      n() && y(U);
    });
  }
  var N = _e(K, 2);
  Ue(N, (y) => ({ role: "gridcell", ...y }), [() => lt(h, "container$")]);
  var M = Ie(N);
  {
    var z = (y) => {
      var L = xg();
      Ue(L, (R) => ({ class: "mdc-chip__text", ...R }), [() => lt(h, "text$")]);
      var ee = Ie(L);
      ye(ee, () => e.children ?? pe), O(y, L);
    }, ae = (y) => {
      var L = Tg();
      Ue(
        L,
        (W, ce) => ({
          class: W,
          ...n() || r() ? { "aria-selected": a() ? "true" : "false" } : {},
          ...s(g),
          ...b,
          ...ce
        }),
        [
          () => Ne({ "mdc-chip__primary-action": !0, [c()]: !0 }),
          () => ii(h, ["checkmark$", "container$", "text$"])
        ]
      );
      var ee = Ie(L);
      Ue(ee, (W) => ({ class: "mdc-chip__text", ...W }), [() => lt(h, "text$")]);
      var R = Ie(ee);
      ye(R, () => e.children ?? pe), xe(L, (W) => p = W, () => p), O(y, L);
    };
    he(M, (y) => {
      i() ? y(z) : y(ae, !1);
    });
  }
  xe(N, (y) => f = y, () => f), Be(N, (y, L) => X == null ? void 0 : X(y, L), l), O(t, j);
  var B = Re(G);
  return u(), B;
}
var wg = /* @__PURE__ */ ge('<span class="mdc-deprecated-chip-trailing-action__touch"></span>'), Rg = /* @__PURE__ */ ge('<button><span class="mdc-deprecated-chip-trailing-action__ripple"></span> <!> <span><!></span></button>');
function Mg(t, e) {
  we(e, !0);
  const { MDCChipTrailingActionFoundation: n } = qs;
  let r = m(e, "use", 19, () => []), i = m(e, "class", 3, ""), a = m(e, "style", 3, ""), o = m(e, "ripple", 3, !0), u = m(e, "touch", 3, !1), l = m(e, "nonNavigable", 3, !1), c = m(e, "icon$use", 19, () => []), d = m(e, "icon$class", 3, ""), h = /* @__PURE__ */ Ge(e, [
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
  ]), f, v = /* @__PURE__ */ Ee(void 0), p = Ce({}), b = Ce({}), _ = Ce({});
  const C = ue("SMUI:chips:trailing-action:mount"), x = ue("SMUI:chips:trailing-action:unmount");
  ut(() => {
    $(
      v,
      new n({
        focus: () => {
          const L = G();
          A(() => {
            L.focus();
          });
        },
        getAttribute: I,
        notifyInteraction: (L) => Ve(G(), "SMUIChipTrailingActionInteraction", { trigger: L }),
        notifyNavigation: (L) => Ve(G(), "SMUIChipTrailingActionNavigation", { key: L }),
        setAttribute: T
      }),
      !0
    );
    const y = { isNavigable: w, focus: k, removeFocus: Z };
    return C && C(y), s(v).init(), () => {
      var L;
      x && x(y), (L = s(v)) == null || L.destroy();
    };
  });
  function S(y) {
    p[y] || (p[y] = !0);
  }
  function g(y) {
    (!(y in p) || p[y]) && (p[y] = !1);
  }
  function E(y, L) {
    b[y] != L && (L === "" || L == null ? delete b[y] : b[y] = L);
  }
  function I(y) {
    return y in _ ? _[y] ?? null : G().getAttribute(y);
  }
  function T(y, L) {
    _[y] !== L && (_[y] = L);
  }
  function A(y) {
    _.tabindex !== G().getAttribute("tabindex") ? Eo().then(y) : y();
  }
  function w() {
    if (s(v) == null)
      throw new Error("Instance is undefined.");
    return s(v).isNavigable();
  }
  function k() {
    var y;
    (y = s(v)) == null || y.focus();
  }
  function Z() {
    var y;
    (y = s(v)) == null || y.removeFocus();
  }
  function G() {
    return f;
  }
  var j = { isNavigable: w, focus: k, removeFocus: Z, getElement: G }, K = Rg(), U = (y) => {
    var L;
    s(v) && s(v).handleClick(y), (L = e.onclick) == null || L.call(e, y);
  }, N = (y) => {
    var L;
    s(v) && s(v).handleKeydown(y), (L = e.onkeydown) == null || L.call(e, y);
  };
  Ue(
    K,
    (y, L, ee) => ({
      type: "button",
      class: y,
      style: L,
      "aria-hidden": l() ? "true" : void 0,
      tabindex: "-1",
      ..._,
      ...ee,
      onclick: U,
      onkeydown: N
    }),
    [
      () => Ne({
        "mdc-deprecated-chip-trailing-action": !0,
        ...p,
        [i()]: !0
      }),
      () => Object.entries(b).map(([y, L]) => `${y}: ${L};`).concat([a()]).join(" "),
      () => ii(h, ["icon$"])
    ]
  );
  var M = _e(Ie(K), 2);
  {
    var z = (y) => {
      var L = wg();
      O(y, L);
    };
    he(M, (y) => {
      u() && y(z);
    });
  }
  var ae = _e(M, 2);
  Ue(ae, (y, L) => ({ class: y, ...L }), [
    () => Ne({
      "mdc-deprecated-chip-trailing-action__icon": !0,
      [d()]: !0
    }),
    () => lt(h, "icon$")
  ]);
  var B = Ie(ae);
  return ye(B, () => e.children ?? pe), Be(ae, (y, L) => X == null ? void 0 : X(y, L), c), xe(K, (y) => f = y, () => f), Be(K, (y, L) => Xt == null ? void 0 : Xt(y, L), () => ({
    ripple: o(),
    unbounded: !1,
    addClass: S,
    removeClass: g,
    addStyle: E
  })), Be(K, (y, L) => X == null ? void 0 : X(y, L), r), O(t, K), Re(j);
}
const Bt = [];
for (let t = 0; t < 256; ++t)
  Bt.push((t + 256).toString(16).slice(1));
function Dg(t, e = 0) {
  return (Bt[t[e + 0]] + Bt[t[e + 1]] + Bt[t[e + 2]] + Bt[t[e + 3]] + "-" + Bt[t[e + 4]] + Bt[t[e + 5]] + "-" + Bt[t[e + 6]] + Bt[t[e + 7]] + "-" + Bt[t[e + 8]] + Bt[t[e + 9]] + "-" + Bt[t[e + 10]] + Bt[t[e + 11]] + Bt[t[e + 12]] + Bt[t[e + 13]] + Bt[t[e + 14]] + Bt[t[e + 15]]).toLowerCase();
}
let zo;
const Pg = new Uint8Array(16);
function Ng() {
  if (!zo) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    zo = crypto.getRandomValues.bind(crypto);
  }
  return zo(Pg);
}
const Fg = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Jl = { randomUUID: Fg };
function Gc(t, e, n) {
  var i;
  if (Jl.randomUUID && !e && !t)
    return Jl.randomUUID();
  t = t || {};
  const r = t.random ?? ((i = t.rng) == null ? void 0 : i.call(t)) ?? Ng();
  if (r.length < 16)
    throw new Error("Random bytes length must be >= 16");
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    if (n = n || 0, n < 0 || n + 16 > e.length)
      throw new RangeError(`UUID byte range ${n}:${n + 15} is out of buffer bounds`);
    for (let a = 0; a < 16; ++a)
      e[n + a] = r[a];
    return e;
  }
  return Dg(r);
}
var Hg = /* @__PURE__ */ ge('<span class="oscd-icon"><!></span>');
function ur(t, e) {
  var n = Hg(), r = Ie(n);
  ye(r, () => e.children ?? pe), O(t, n);
}
var Ug = /* @__PURE__ */ dn('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');
function Bg(t, e) {
  let n = m(e, "svgStyles", 3, "");
  ur(t, {
    children: (r, i) => {
      var a = Ug();
      ke(() => an(a, n())), O(r, a);
    }
  });
}
var kg = /* @__PURE__ */ dn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Ks(t, e) {
  let n = m(e, "svgStyles", 3, "");
  ur(t, {
    children: (r, i) => {
      var a = kg();
      ke(() => an(a, n())), O(r, a);
    }
  });
}
var Vg = /* @__PURE__ */ dn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');
function Gg(t, e) {
  let n = m(e, "svgStyles", 3, "");
  ur(t, {
    children: (r, i) => {
      var a = Vg();
      ke(() => an(a, n())), O(r, a);
    }
  });
}
var jg = /* @__PURE__ */ dn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"></path></svg>');
function Wg(t, e) {
  let n = m(e, "svgStyles", 3, "");
  ur(t, {
    children: (r, i) => {
      var a = jg();
      ke(() => an(a, n())), O(r, a);
    }
  });
}
var qg = /* @__PURE__ */ dn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"></path></svg>');
function Kg(t, e) {
  let n = m(e, "svgStyles", 3, "");
  ur(t, {
    children: (r, i) => {
      var a = qg();
      ke(() => an(a, n())), O(r, a);
    }
  });
}
var zg = /* @__PURE__ */ dn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"></path></svg>');
function Xg(t, e) {
  let n = m(e, "svgStyles", 3, "");
  ur(t, {
    children: (r, i) => {
      var a = zg();
      ke(() => an(a, n())), O(r, a);
    }
  });
}
var Yg = /* @__PURE__ */ dn('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function Zg(t, e) {
  let n = m(e, "svgStyles", 3, "");
  ur(t, {
    children: (r, i) => {
      var a = Yg();
      ke(() => an(a, n())), O(r, a);
    }
  });
}
var Qg = /* @__PURE__ */ dn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function Jg(t, e) {
  let n = m(e, "svgStyles", 3, "");
  ur(t, {
    children: (r, i) => {
      var a = Qg();
      ke(() => an(a, n())), O(r, a);
    }
  });
}
var $g = /* @__PURE__ */ dn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function eb(t, e) {
  let n = m(e, "svgStyles", 3, "");
  ur(t, {
    children: (r, i) => {
      var a = $g();
      ke(() => an(a, n())), O(r, a);
    }
  });
}
Wd();
var tb = /* @__PURE__ */ ge("<!> <!>", 1);
function nb(t, e) {
  let n = m(e, "title", 3, ""), r = m(e, "closeable", 3, !0), i = m(e, "disabled", 3, !1);
  {
    let a = /* @__PURE__ */ me(() => i() ? "disabled" : "");
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
        var l = tb(), c = J(l);
        Og(c, {
          children: (f, v) => {
            var p = Vt();
            ke(() => ft(p, n())), O(f, p);
          },
          $$slots: { default: !0 }
        });
        var d = _e(c, 2);
        {
          var h = (f) => {
            Mg(f, {
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
            r() && !i() && f(h);
          });
        }
        O(o, l);
      },
      $$slots: { default: !0 }
    });
  }
}
function rb(t, e) {
  e(t.target.value);
}
var ib = /* @__PURE__ */ ge('<div class="custom-text-field svelte-1719vm0"><input type="date" id="datetime-picker" class="custom-text-field__input svelte-1719vm0" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-1719vm0"> </label> <span class="custom-line svelte-1719vm0"></span></div>');
function ab(t, e) {
  we(e, !0);
  let n = m(e, "label", 3, ""), r = m(e, "value", 15, "");
  var i = ib(), a = Ie(i);
  a.__change = [rb, r];
  var o = _e(a, 2), u = Ie(o);
  ke(() => ft(u, n())), Ia(a, r), O(t, i), Re();
}
Rr(["change"]);
var ob = /* @__PURE__ */ ge('<div class="filter-box-container"><div class="input-section"><div class="filter-input-controls svelte-xdvqlf"><!> <!> <!> <!> <!></div> <div class="filter-button-controls"><!> <!></div></div> <div class="separator"></div> <div class="chip-section"><!></div></div>');
function sb(t, e) {
  we(e, !0);
  let n = m(e, "filterTypes", 19, () => []), r = m(e, "activeFilters", 31, () => Ce([])), i = m(e, "useOptionLabelInChipText", 3, !1), a = m(e, "selectedOptionIndex", 31, () => -1), o = m(e, "disabled", 3, !1), u = m(e, "addFilterLabel", 3, "Add Filter"), l = m(e, "selectFilterLabel", 3, "Filter Types"), c = /* @__PURE__ */ Ee(""), d = /* @__PURE__ */ Ee(void 0), h = /* @__PURE__ */ me(() => n().map((x) => ({ value: x.label, label: x.label }))), f = /* @__PURE__ */ me(() => !s(d) || !s(c)), v = /* @__PURE__ */ me(() => n().find((x) => x.label === s(d)));
  function p() {
    var S, g;
    if (!s(d) || !s(c)) {
      console.warn("Filter type or input value is empty");
      return;
    }
    if (!s(v)) {
      console.warn("Filter type not found");
      return;
    }
    const x = [
      ...r(),
      {
        id: Gc(),
        key: s(v).key,
        value: s(c),
        operation: "=",
        text: `${s(d)}: ${i() && ((S = s(v).inputType.options) != null && S.length) ? (g = s(v).inputType.options[a()]) == null ? void 0 : g.label : s(c)}`,
        disabled: !1
      }
    ];
    r(x), C(), _();
  }
  function b(x) {
    setTimeout(
      () => {
        r(r().filter((S) => S.id !== x)), C();
      },
      0
    );
  }
  function _() {
    $(c, ""), $(d, void 0);
  }
  function C() {
    const x = r().map((S) => ({ ...S }));
    x.find((S) => S.key === "uuid") ? x.filter((S) => S.key !== "uuid").forEach((S) => {
      S.disabled = !0;
    }) : x.forEach((S) => {
      S.disabled = !1;
    }), r(x);
  }
  dg(t, {
    children: (x, S) => {
      var g = ob(), E = Ie(g), I = Ie(E), T = Ie(I);
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
        set value(y) {
          $(d, y, !0);
        }
      });
      var A = _e(T, 2);
      {
        var w = (y) => {
          gp(y, {
            label: "Input",
            get value() {
              return s(c);
            },
            set value(L) {
              $(c, L, !0);
            }
          });
        };
        he(A, (y) => {
          var L, ee;
          ((ee = (L = s(v)) == null ? void 0 : L.inputType) == null ? void 0 : ee.type) === "string" && y(w);
        });
      }
      var k = _e(A, 2);
      {
        var Z = (y) => {
          {
            let L = /* @__PURE__ */ me(() => {
              var ee;
              return (ee = s(v).inputType) == null ? void 0 : ee.options;
            });
            ql(y, {
              label: "Input",
              get data() {
                return s(L);
              },
              get value() {
                return s(c);
              },
              set value(ee) {
                $(c, ee, !0);
              },
              get selectedOptionIndex() {
                return a();
              },
              set selectedOptionIndex(ee) {
                a(ee);
              }
            });
          }
        };
        he(k, (y) => {
          var L, ee;
          ((ee = (L = s(v)) == null ? void 0 : L.inputType) == null ? void 0 : ee.type) === "select" && y(Z);
        });
      }
      var G = _e(k, 2);
      {
        var j = (y) => {
          ab(y, {
            get value() {
              return s(c);
            },
            set value(L) {
              $(c, L, !0);
            }
          });
        };
        he(G, (y) => {
          var L, ee;
          ((ee = (L = s(v)) == null ? void 0 : L.inputType) == null ? void 0 : ee.type) === "datepicker" && y(j);
        });
      }
      var K = _e(G, 2);
      {
        var U = (y) => {
          hb(y, {
            get value() {
              return s(c);
            },
            set value(L) {
              $(c, L, !0);
            }
          });
        };
        he(K, (y) => {
          var L, ee;
          ((ee = (L = s(v)) == null ? void 0 : L.inputType) == null ? void 0 : ee.type) === "timepicker" && y(U);
        });
      }
      var N = _e(I, 2), M = Ie(N);
      ao(M, {
        callback: p,
        get disabled() {
          return s(f);
        },
        children: (y, L) => {
          var ee = Vt();
          ke(() => ft(ee, u())), O(y, ee);
        },
        $$slots: { default: !0 }
      });
      var z = _e(M, 2);
      ye(z, () => e.filterControls ?? pe);
      var ae = _e(E, 4), B = Ie(ae);
      Eg(B, {
        get chips() {
          return r();
        },
        key: (L) => L.id,
        chip: (L, ee = pe) => {
          nb(L, {
            get title() {
              return ee().text;
            },
            callback: () => b(ee().id),
            get disabled() {
              return ee().disabled;
            }
          });
        },
        $$slots: { chip: !0 }
      }), O(x, g);
    },
    $$slots: { default: !0 }
  }), Re();
}
var lb = /* @__PURE__ */ ge('<div class="overlay svelte-14uvd2z"><div class="loading-spinner-container svelte-14uvd2z"><div class="loading-spinner svelte-14uvd2z"></div> <span class="loading-message svelte-14uvd2z"> </span></div></div>'), ub = /* @__PURE__ */ ge('<div class="svelte-14uvd2z"><!></div>');
function cb(t, e) {
  let n = m(e, "loadingDone", 3, !0), r = m(e, "message", 3, "Loading...");
  var i = ub(), a = Ie(i);
  {
    var o = (u) => {
      var l = lb(), c = Ie(l), d = _e(Ie(c), 2), h = Ie(d);
      ke(() => ft(h, r())), O(u, l);
    };
    he(a, (u) => {
      n() || u(o);
    });
  }
  O(t, i);
}
function db(t, e) {
  e(t.target.value);
}
var fb = /* @__PURE__ */ ge('<div class="custom-text-field svelte-6wdfbb"><input type="datetime-local" id="datetime-picker" class="custom-text-field__input svelte-6wdfbb" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-6wdfbb"> </label> <span class="custom-line svelte-6wdfbb"></span></div>');
function hb(t, e) {
  we(e, !0);
  let n = m(e, "label", 3, ""), r = m(e, "value", 15, "");
  var i = fb(), a = Ie(i);
  a.__change = [db, r];
  var o = _e(a, 2), u = Ie(o);
  ke(() => ft(u, n())), Ia(a, r), O(t, i), Re();
}
Rr(["change"]);
var vb = /* @__PURE__ */ ge('<span role="tooltip" aria-labelledby="tooltip"><!></span>');
function $l(t, e) {
  we(e, !0);
  let n = m(e, "content", 3, ""), r = m(e, "side", 3, "top"), i = m(e, "hoverDelay", 3, 0), a = m(e, "transitionDuration", 3, 80);
  const o = `tt-${Math.random().toString(36).slice(2)}`;
  let u = /* @__PURE__ */ Ee(null), l = /* @__PURE__ */ Ee(null), c = /* @__PURE__ */ Ee(null), d = /* @__PURE__ */ Ee(null), h = /* @__PURE__ */ Ee(!1), f = /* @__PURE__ */ Ee(null), v = /* @__PURE__ */ Ee(null);
  function p() {
    n() && (i() > 0 ? $(f, setTimeout(() => $(h, !0), i()), !0) : $(h, !0));
  }
  function b() {
    s(f) && clearTimeout(s(f)), $(h, !1);
  }
  function _() {
    if (!s(l) || !s(d) || !s(u)) return;
    const g = s(u).getBoundingClientRect(), E = s(d).getBoundingClientRect();
    let I = 0, T = 0;
    const A = 8;
    switch (r()) {
      case "top":
        I = g.top - E.height - A, T = g.left + g.width / 2 - E.width / 2;
        break;
      case "bottom":
        I = g.bottom + A, T = g.left + g.width / 2 - E.width / 2;
        break;
      case "left":
        I = g.top + g.height / 2 - E.height / 2, T = g.left - E.width - A;
        break;
      case "right":
        I = g.top + g.height / 2 - E.height / 2, T = g.right + A;
        break;
    }
    s(l).style.top = `${I + window.scrollY}px`, s(l).style.left = `${T + window.scrollX}px`;
  }
  function C() {
    var g;
    (g = s(v)) == null || g.disconnect(), $(v, null), s(l) && s(l).parentNode && s(l).parentNode.removeChild(s(l)), $(l, null), $(d, null), $(c, null), s(f) && clearTimeout(s(f));
  }
  Ln(C), Se(() => {
    if (!(!s(h) || !n())) {
      if (!s(l)) {
        $(l, document.createElement("div"), !0), s(l).style.position = "absolute", s(l).style.zIndex = "9999", s(l).style.pointerEvents = "none", s(l).style.opacity = "0", s(l).style.transition = `opacity ${a()}ms ease`, s(l).id = o, s(l).setAttribute("role", "tooltip"), document.body.appendChild(s(l)), $(c, s(l).attachShadow({ mode: "open" }), !0);
        const g = document.createElement("style");
        g.textContent = `
        .bubble {
          --pad-y: 6px;
          --pad-x: 10px;
          --radius: 4px;
          background: #000;
          color: #fff;
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
          background: #000;
          width: 8px;
          height: 8px;
          transform: rotate(45deg);
        }
        .bubble.top::after {
          left: 50%;
          bottom: -4px;
          transform: translateX(-50%) rotate(45deg);
        }
        .bubble.bottom::after {
          left: 50%;
          top: -4px;
          transform: translateX(-50%) rotate(45deg);
        }
        .bubble.left::after {
          top: 50%;
          right: -4px;
          transform: translateY(-50%) rotate(45deg);
        }
        .bubble.right::after {
          top: 50%;
          left: -4px;
          transform: translateY(-50%) rotate(45deg);
        }
      `, s(c).appendChild(g), $(d, document.createElement("div"), !0), s(c).appendChild(s(d)), $(
          v,
          new MutationObserver(() => {
            s(h) && _();
          }),
          !0
        ), s(v).observe(document.body, { childList: !0, subtree: !0 });
      }
      s(d) && (s(d).className = `bubble ${r()}`, s(d).innerHTML = n()), s(l) && (s(l).style.opacity = "1", _());
    }
  }), Se(() => {
    if (s(h) || !s(l))
      return;
    s(l).style.opacity = "0";
    const g = s(l), E = setTimeout(
      () => {
        g && g.parentNode && g.parentNode.removeChild(g), s(l) === g && C();
      },
      a()
    );
    return () => clearTimeout(E);
  });
  var x = vb(), S = Ie(x);
  ye(S, () => e.children ?? pe), xe(x, (g) => $(u, g), () => s(u)), ke(() => Vi(x, "aria-describedby", n() ? o : void 0)), qr("mouseenter", x, p), qr("mouseleave", x, b), O(t, x), Re();
}
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
var vn = {
  CLOSED_CLASS: "mdc-linear-progress--closed",
  CLOSED_ANIMATION_OFF_CLASS: "mdc-linear-progress--closed-animation-off",
  INDETERMINATE_CLASS: "mdc-linear-progress--indeterminate",
  REVERSED_CLASS: "mdc-linear-progress--reversed",
  ANIMATION_READY_CLASS: "mdc-linear-progress--animation-ready"
}, wn = {
  ARIA_HIDDEN: "aria-hidden",
  ARIA_VALUEMAX: "aria-valuemax",
  ARIA_VALUEMIN: "aria-valuemin",
  ARIA_VALUENOW: "aria-valuenow",
  BUFFER_BAR_SELECTOR: ".mdc-linear-progress__buffer-bar",
  FLEX_BASIS: "flex-basis",
  PRIMARY_BAR_SELECTOR: ".mdc-linear-progress__primary-bar"
}, ua = {
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
var mb = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n) {
      var r = t.call(this, ve(ve({}, e.defaultAdapter), n)) || this;
      return r.observer = null, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return vn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return wn;
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
      this.determinate = !this.adapter.hasClass(vn.INDETERMINATE_CLASS), this.adapter.addClass(vn.ANIMATION_READY_CLASS), this.progress = 0, this.buffer = 1, this.observer = this.adapter.attachResizeObserver(function(r) {
        var i, a;
        if (!n.determinate)
          try {
            for (var o = Rt(r), u = o.next(); !u.done; u = o.next()) {
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
        this.adapter.removeClass(vn.INDETERMINATE_CLASS), this.adapter.setAttribute(wn.ARIA_VALUENOW, this.progress.toString()), this.adapter.setAttribute(wn.ARIA_VALUEMAX, "1"), this.adapter.setAttribute(wn.ARIA_VALUEMIN, "0"), this.setPrimaryBarProgress(this.progress), this.setBufferBarProgress(this.buffer);
        return;
      }
      this.observer && this.calculateAndSetDimensions(this.adapter.getWidth()), this.adapter.addClass(vn.INDETERMINATE_CLASS), this.adapter.removeAttribute(wn.ARIA_VALUENOW), this.adapter.removeAttribute(wn.ARIA_VALUEMAX), this.adapter.removeAttribute(wn.ARIA_VALUEMIN), this.setPrimaryBarProgress(1), this.setBufferBarProgress(1);
    }, e.prototype.isDeterminate = function() {
      return this.determinate;
    }, e.prototype.setProgress = function(n) {
      this.progress = n, this.determinate && (this.setPrimaryBarProgress(n), this.adapter.setAttribute(wn.ARIA_VALUENOW, n.toString()));
    }, e.prototype.getProgress = function() {
      return this.progress;
    }, e.prototype.setBuffer = function(n) {
      this.buffer = n, this.determinate && this.setBufferBarProgress(n);
    }, e.prototype.getBuffer = function() {
      return this.buffer;
    }, e.prototype.open = function() {
      this.adapter.removeClass(vn.CLOSED_CLASS), this.adapter.removeClass(vn.CLOSED_ANIMATION_OFF_CLASS), this.adapter.removeAttribute(wn.ARIA_HIDDEN);
    }, e.prototype.close = function() {
      this.adapter.addClass(vn.CLOSED_CLASS), this.adapter.setAttribute(wn.ARIA_HIDDEN, "true");
    }, e.prototype.isClosed = function() {
      return this.adapter.hasClass(vn.CLOSED_CLASS);
    }, e.prototype.handleTransitionEnd = function() {
      this.adapter.hasClass(vn.CLOSED_CLASS) && this.adapter.addClass(vn.CLOSED_ANIMATION_OFF_CLASS);
    }, e.prototype.destroy = function() {
      t.prototype.destroy.call(this), this.observer && this.observer.disconnect();
    }, e.prototype.restartAnimation = function() {
      this.adapter.removeClass(vn.ANIMATION_READY_CLASS), this.adapter.forceLayout(), this.adapter.addClass(vn.ANIMATION_READY_CLASS);
    }, e.prototype.setPrimaryBarProgress = function(n) {
      var r = "scaleX(" + n + ")", i = typeof window < "u" ? Op(window, "transform") : "transform";
      this.adapter.setPrimaryBarStyle(i, r);
    }, e.prototype.setBufferBarProgress = function(n) {
      var r = n * 100 + "%";
      this.adapter.setBufferBarStyle(wn.FLEX_BASIS, r);
    }, e.prototype.calculateAndSetDimensions = function(n) {
      var r = n * ua.PRIMARY_HALF, i = n * ua.PRIMARY_FULL, a = n * ua.SECONDARY_QUARTER, o = n * ua.SECONDARY_HALF, u = n * ua.SECONDARY_FULL;
      this.adapter.setStyle("--mdc-linear-progress-primary-half", r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-half-neg", -r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full", i + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full-neg", -i + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter", a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg", -a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half", o + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg", -o + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full", u + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg", -u + "px"), this.restartAnimation();
    }, e;
  }(Mt)
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
var er = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, eu = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, jr = {
  ARIA_SELECTED: eu.ARIA_SELECTED,
  ARIA_SORT: eu.ARIA_SORT
}, pn;
(function(t) {
  t.ASCENDING = "ascending", t.DESCENDING = "descending", t.NONE = "none", t.OTHER = "other";
})(pn || (pn = {}));
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
var pb = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n) {
      return t.call(this, ve(ve({}, e.defaultAdapter), n)) || this;
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
      return oc(this, void 0, void 0, function() {
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
        o !== i && (this.adapter.removeClassNameByHeaderCellIndex(o, er.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(o, er.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(o, jr.ARIA_SORT, pn.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(o, pn.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, er.HEADER_CELL_SORTED);
      var u = this.adapter.getAttributeByHeaderCellIndex(i, jr.ARIA_SORT), l = pn.NONE;
      u === pn.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, er.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, jr.ARIA_SORT, pn.DESCENDING), l = pn.DESCENDING) : u === pn.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, er.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, jr.ARIA_SORT, pn.ASCENDING), l = pn.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, jr.ARIA_SORT, pn.ASCENDING), l = pn.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, l), this.adapter.notifySortAction({
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
      }), this.adapter.addClass(er.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(er.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(n, r) {
      r ? (this.adapter.addClassAtRowIndex(n, er.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, jr.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(n, er.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, jr.ARIA_SELECTED, "false"));
    }, e;
  }(Mt)
), gb = /* @__PURE__ */ ge('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), bb = /* @__PURE__ */ ge("<div><div><table><!></table></div> <!> <!></div>");
function yb(t, e) {
  we(e, !0);
  const n = () => wt(j, "$progressClosed", r), [r, i] = bn(), { closest: a } = Ra;
  let o = m(e, "use", 19, () => []), u = m(e, "class", 3, ""), l = m(e, "stickyHeader", 3, !1), c = m(e, "sortable", 3, !1), d = m(e, "sort", 15, null), h = m(e, "sortDirection", 15, "ascending"), f = m(e, "sortAscendingAriaLabel", 3, "sorted, ascending"), v = m(e, "sortDescendingAriaLabel", 3, "sorted, descending"), p = m(e, "container$use", 19, () => []), b = m(e, "container$class", 3, ""), _ = m(e, "table$use", 19, () => []), C = m(e, "table$class", 3, ""), x = /* @__PURE__ */ Ge(e, [
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
  ]), S, g = /* @__PURE__ */ Ee(void 0), E, I = /* @__PURE__ */ Ee(void 0), T = /* @__PURE__ */ Ee(void 0), A = Ce({}), w = /* @__PURE__ */ Ee(Ce({ height: "auto", top: "initial" })), k = ue("SMUI:addLayoutListener"), Z, G = !1, j = gt(!1), K = gt(d());
  Se(() => {
    Gt(K, d());
  });
  let U = gt(h());
  Se(() => {
    Gt(U, h());
  }), te("SMUI:checkbox:context", "data-table"), te("SMUI:linear-progress:context", "data-table"), te("SMUI:linear-progress:closed", j), te("SMUI:data-table:sortable", c()), te("SMUI:data-table:sort", K), te("SMUI:data-table:sortDirection", U), te("SMUI:data-table:sortAscendingAriaLabel", f()), te("SMUI:data-table:sortDescendingAriaLabel", v()), k && (Z = k(R));
  let N;
  Se(() => {
    e.progress && s(g) && N !== n() && (N = n(), n() ? s(g).hideProgress() : s(g).showProgress());
  }), te("SMUI:checkbox:mount", () => {
    s(g) && G && s(g).layout();
  }), te("SMUI:data-table:header:mount", (P) => {
    $(I, P, !0);
  }), te("SMUI:data-table:header:unmount", () => {
    $(I, void 0);
  }), te("SMUI:data-table:body:mount", (P) => {
    $(T, P, !0);
  }), te("SMUI:data-table:body:unmount", () => {
    $(T, void 0);
  }), ut(() => ($(
    g,
    new pb({
      addClass: z,
      removeClass: ae,
      getHeaderCellElements: () => {
        var P;
        return ((P = s(I)) == null ? void 0 : P.cells.map((q) => q.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var P;
        return ((P = s(I)) == null ? void 0 : P.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (P, q) => {
        var re;
        return ((re = s(I)) == null ? void 0 : re.orderedCells[P].getAttr(q)) ?? null;
      },
      setAttributeByHeaderCellIndex: (P, q, re) => {
        var Ae;
        (Ae = s(I)) == null || Ae.orderedCells[P].addAttr(q, re);
      },
      setClassNameByHeaderCellIndex: (P, q) => {
        var re;
        (re = s(I)) == null || re.orderedCells[P].addClass(q);
      },
      removeClassNameByHeaderCellIndex: (P, q) => {
        var re;
        (re = s(I)) == null || re.orderedCells[P].removeClass(q);
      },
      notifySortAction: (P) => {
        d(P.columnId), h(P.sortValue), Ve(W(), "SMUIDataTableSorted", P);
      },
      getTableContainerHeight: () => E.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const P = W().querySelector(".mdc-data-table__header-row");
        if (!P)
          throw new Error("MDCDataTable: Table header element not found.");
        return P.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (P) => {
        $(w, P, !0);
      },
      addClassAtRowIndex: (P, q) => {
        var re;
        (re = s(T)) == null || re.orderedRows[P].addClass(q);
      },
      getRowCount: () => {
        var P;
        return ((P = s(T)) == null ? void 0 : P.rows.length) ?? 0;
      },
      getRowElements: () => {
        var P;
        return ((P = s(T)) == null ? void 0 : P.rows.map((q) => q.element)) ?? [];
      },
      getRowIdAtIndex: (P) => {
        var q;
        return ((q = s(T)) == null ? void 0 : q.orderedRows[P].rowId) ?? null;
      },
      getRowIndexByChildElement: (P) => {
        var q;
        return ((q = s(T)) == null ? void 0 : q.orderedRows.map((re) => re.element).indexOf(a(P, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var P;
        return ((P = s(T)) == null ? void 0 : P.rows.filter((q) => q.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (P) => {
        var re;
        const q = (re = s(T)) == null ? void 0 : re.orderedRows[P].checkbox;
        return q ? q.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var q;
        const P = (q = s(I)) == null ? void 0 : q.checkbox;
        return P ? P.checked : !1;
      },
      isRowsSelectable: () => !!W().querySelector(".mdc-data-table__row-checkbox") || !!W().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (P) => {
        var re;
        const q = (re = s(T)) == null ? void 0 : re.orderedRows[P.rowIndex];
        q && Ve(W(), "SMUIDataTableSelectionChanged", {
          row: q.element,
          rowId: q.rowId,
          rowIndex: P.rowIndex,
          selected: P.selected
        });
      },
      notifySelectedAll: () => {
        B(!1), Ve(W(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        B(!1), Ve(W(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (P) => Ve(W(), "SMUIDataTableClickRow", P),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (P, q) => {
        var re;
        (re = s(T)) == null || re.orderedRows[P].removeClass(q);
      },
      setAttributeAtRowIndex: (P, q, re) => {
        var Ae;
        (Ae = s(T)) == null || Ae.orderedRows[P].addAttr(q, re);
      },
      setHeaderRowCheckboxChecked: (P) => {
        var re;
        const q = (re = s(I)) == null ? void 0 : re.checkbox;
        q && (q.checked = P);
      },
      setHeaderRowCheckboxIndeterminate: B,
      setRowCheckboxCheckedAtIndex: (P, q) => {
        var Ae;
        const re = (Ae = s(T)) == null ? void 0 : Ae.orderedRows[P].checkbox;
        re && (re.checked = q);
      },
      setSortStatusLabelByHeaderCellIndex: (P, q) => {
      }
    }),
    !0
  ), s(g).init(), s(g).layout(), G = !0, () => {
    var P;
    (P = s(g)) == null || P.destroy();
  })), Ln(() => {
    Z && Z();
  });
  function M(P) {
    s(g) && s(g).handleRowCheckboxChange(P);
  }
  function z(P) {
    A[P] || (A[P] = !0);
  }
  function ae(P) {
    (!(P in A) || A[P]) && (A[P] = !1);
  }
  function B(P) {
    var re;
    const q = (re = s(I)) == null ? void 0 : re.checkbox;
    q && (q.indeterminate = P);
  }
  function y(P) {
    if (!s(g) || !P.detail.target)
      return;
    const q = a(P.detail.target, ".mdc-data-table__header-cell--with-sort");
    q && ee(q);
  }
  function L(P) {
    if (!s(g) || !P.detail.target)
      return;
    const q = a(P.detail.target, ".mdc-data-table__row");
    q && s(g) && s(g).handleRowClick({ rowId: P.detail.rowId, row: q });
  }
  function ee(P) {
    var St, Dt;
    const q = ((St = s(I)) == null ? void 0 : St.orderedCells) ?? [], re = q.map((hn) => hn.element).indexOf(P);
    if (re === -1)
      return;
    const Ae = q[re].columnId ?? null;
    (Dt = s(g)) == null || Dt.handleSortAction({ columnId: Ae, columnIndex: re, headerCell: P });
  }
  function R() {
    var P;
    return (P = s(g)) == null ? void 0 : P.layout();
  }
  function W() {
    return S;
  }
  var ce = { layout: R, getElement: W }, V = bb(), se = (P) => {
    var q;
    s(g) && s(g).handleHeaderRowCheckboxChange(), (q = e.onSMUIDataTableHeaderCheckboxChange) == null || q.call(e, P);
  }, Q = (P) => {
    var q;
    y(P), (q = e.onSMUIDataTableHeaderClick) == null || q.call(e, P);
  }, fe = (P) => {
    var q;
    L(P), (q = e.onSMUIDataTableRowClick) == null || q.call(e, P);
  }, ne = (P) => {
    var q;
    M(P), (q = e.onSMUIDataTableBodyCheckboxChange) == null || q.call(e, P);
  };
  Ue(
    V,
    (P, q) => ({
      class: P,
      ...q,
      onSMUIDataTableHeaderCheckboxChange: se,
      onSMUIDataTableHeaderClick: Q,
      onSMUIDataTableRowClick: fe,
      onSMUIDataTableBodyCheckboxChange: ne
    }),
    [
      () => Ne({
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": l(),
        ...A,
        [u()]: !0
      }),
      () => ii(x, ["container$", "table$"])
    ]
  );
  var ze = Ie(V);
  Ue(ze, (P, q) => ({ class: P, ...q }), [
    () => Ne({
      "mdc-data-table__table-container": !0,
      [b()]: !0
    }),
    () => lt(x, "container$")
  ]);
  var We = Ie(ze);
  Ue(We, (P, q) => ({ class: P, ...q }), [
    () => Ne({ "mdc-data-table__table": !0, [C()]: !0 }),
    () => lt(x, "table$")
  ]);
  var De = Ie(We);
  ye(De, () => e.children ?? pe), Be(We, (P, q) => X == null ? void 0 : X(P, q), _), xe(ze, (P) => E = P, () => E), Be(ze, (P, q) => X == null ? void 0 : X(P, q), p);
  var Le = _e(ze, 2);
  {
    var le = (P) => {
      var q = gb(), re = _e(Ie(q), 2);
      ye(re, () => e.progress ?? pe), ke((Ae) => an(q, Ae), [
        () => Object.entries(s(w)).map(([Ae, St]) => `${Ae}: ${St};`).join(" ")
      ]), O(P, q);
    };
    he(Le, (P) => {
      e.progress && P(le);
    });
  }
  var Te = _e(Le, 2);
  ye(Te, () => e.paginate ?? pe), xe(V, (P) => S = P, () => S), Be(V, (P, q) => X == null ? void 0 : X(P, q), o), O(t, V);
  var Fe = Re(ce);
  return i(), Fe;
}
var Ib = /* @__PURE__ */ ge("<thead><!></thead>");
function _b(t, e) {
  we(e, !0);
  let n = m(e, "use", 19, () => []), r = /* @__PURE__ */ Ge(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i, a = /* @__PURE__ */ Ee(void 0), o = [];
  const u = /* @__PURE__ */ new WeakMap();
  te("SMUI:data-table:row:header", !0);
  const l = ue("SMUI:checkbox:mount");
  te("SMUI:checkbox:mount", (C) => {
    $(a, C, !0), l && l(C);
  });
  const c = ue("SMUI:checkbox:unmount");
  te("SMUI:checkbox:unmount", (C) => {
    $(a, void 0), c && c(C);
  }), te("SMUI:data-table:cell:mount", (C) => {
    o.push(C), u.set(C.element, C);
  }), te("SMUI:data-table:cell:unmount", (C) => {
    const x = o.findIndex((S) => S === C);
    x !== -1 && o.splice(x, 1), u.delete(C.element);
  });
  const d = ue("SMUI:data-table:header:mount"), h = ue("SMUI:data-table:header:unmount");
  ut(() => {
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
    return i;
  }
  var p = { getElement: v }, b = Ib();
  Ue(b, () => ({ ...r }));
  var _ = Ie(b);
  return ye(_, () => e.children ?? pe), xe(b, (C) => i = C, () => i), Be(b, (C, x) => X == null ? void 0 : X(C, x), n), O(t, b), Re(p);
}
var Eb = /* @__PURE__ */ ge("<tbody><!></tbody>");
function Cb(t, e) {
  we(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = /* @__PURE__ */ Ge(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "children"
  ]), a, o = [];
  const u = /* @__PURE__ */ new WeakMap();
  te("SMUI:data-table:row:header", !1), te("SMUI:data-table:row:mount", (b) => {
    o.push(b), u.set(b.element, b);
  }), te("SMUI:data-table:row:unmount", (b) => {
    const _ = o.findIndex((C) => C === b);
    _ !== -1 && o.splice(_, 1), u.delete(b.element);
  });
  const l = ue("SMUI:data-table:body:mount"), c = ue("SMUI:data-table:body:unmount");
  ut(() => {
    const b = {
      get rows() {
        return o;
      },
      get orderedRows() {
        return d();
      }
    };
    return l && l(b), () => {
      c && c(b);
    };
  });
  function d() {
    return [...h().querySelectorAll(".mdc-data-table__row")].map((b) => u.get(b)).filter((b) => b && b._smui_data_table_row_accessor);
  }
  function h() {
    return a;
  }
  var f = { getElement: h }, v = Eb();
  Ue(v, (b) => ({ class: b, ...i }), [
    () => Ne({ "mdc-data-table__content": !0, [r()]: !0 })
  ]);
  var p = Ie(v);
  return ye(p, () => e.children ?? pe), xe(v, (b) => a = b, () => a), Be(v, (b, _) => X == null ? void 0 : X(b, _), n), O(t, v), Re(f);
}
let Ab = 0;
var Sb = /* @__PURE__ */ ge("<tr><!></tr>");
function tu(t, e) {
  we(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "rowId", 19, () => "SMUI-data-table-row-" + Ab++), a = /* @__PURE__ */ Ge(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "rowId",
    "children"
  ]), o, u = /* @__PURE__ */ Ee(void 0), l = Ce({}), c = Ce({}), d = ue("SMUI:data-table:row:header");
  const h = ue("SMUI:checkbox:mount");
  te("SMUI:checkbox:mount", (k) => {
    $(u, k, !0), h && h(k);
  });
  const f = ue("SMUI:checkbox:unmount");
  te("SMUI:checkbox:unmount", (k) => {
    $(u, void 0), f && f(k);
  });
  const v = ue("SMUI:data-table:row:mount"), p = ue("SMUI:data-table:row:unmount");
  ut(() => {
    const k = d ? {
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
      addClass: b,
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
        return i();
      },
      get selected() {
        return (s(u) && s(u).checked) ?? !1;
      },
      addClass: b,
      removeClass: _,
      getAttr: C,
      addAttr: x
    };
    return v && v(k), () => {
      p && p(k);
    };
  });
  function b(k) {
    l[k] || (l[k] = !0);
  }
  function _(k) {
    (!(k in l) || l[k]) && (l[k] = !1);
  }
  function C(k) {
    return k in c ? c[k] ?? null : E().getAttribute(k);
  }
  function x(k, Z) {
    c[k] !== Z && (c[k] = Z);
  }
  function S(k) {
    Ve(E(), "SMUIDataTableHeaderClick", k);
  }
  function g(k) {
    Ve(E(), "SMUIDataTableRowClick", { rowId: i(), target: k.target });
  }
  function E() {
    return o;
  }
  var I = { getElement: E }, T = Sb(), A = (k) => {
    var Z;
    d ? S(k) : g(k), (Z = e.onclick) == null || Z.call(e, k);
  };
  Ue(
    T,
    (k) => ({
      class: k,
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
        [r()]: !0
      })
    ]
  );
  var w = Ie(T);
  return ye(w, () => e.children ?? pe), xe(T, (k) => o = k, () => o), Be(T, (k, Z) => X == null ? void 0 : X(k, Z), n), O(t, T), Re(I);
}
let xb = 0;
var Tb = /* @__PURE__ */ ge('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), Lb = /* @__PURE__ */ ge("<th><!></th>"), Ob = /* @__PURE__ */ ge("<td><!></td>");
function Xo(t, e) {
  we(e, !0);
  const n = () => wt(C, "$sort", i), r = () => wt(x, "$sortDirection", i), [i, a] = bn();
  let o = ue("SMUI:data-table:row:header"), u = m(e, "use", 19, () => []), l = m(e, "class", 3, ""), c = m(e, "numeric", 3, !1), d = m(e, "checkbox", 3, !1), h = m(e, "columnId", 19, () => o ? "SMUI-data-table-column-" + xb++ : "SMUI-data-table-unused"), f = m(e, "sortable", 19, () => ue("SMUI:data-table:sortable")), v = /* @__PURE__ */ Ge(e, [
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
  ]), p, b = Ce({}), _ = Ce({}), C = ue("SMUI:data-table:sort"), x = ue("SMUI:data-table:sortDirection"), S = ue("SMUI:data-table:sortAscendingAriaLabel"), g = ue("SMUI:data-table:sortDescendingAriaLabel");
  f() && (te("SMUI:label:context", "data-table:sortable-header-cell"), te("SMUI:icon-button:context", "data-table:sortable-header-cell"), te("SMUI:icon-button:aria-describedby", h() + "-status-label"));
  const E = ue("SMUI:data-table:cell:mount"), I = ue("SMUI:data-table:cell:unmount");
  ut(() => {
    const B = o ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return j();
      },
      get columnId() {
        return h();
      },
      addClass: T,
      removeClass: A,
      getAttr: w,
      addAttr: k
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return j();
      },
      get columnId() {
      },
      addClass: T,
      removeClass: A,
      getAttr: w,
      addAttr: k
    };
    return E && E(B), () => {
      I && I(B);
    };
  });
  function T(B) {
    b[B] || (b[B] = !0);
  }
  function A(B) {
    (!(B in b) || b[B]) && (b[B] = !1);
  }
  function w(B) {
    return B in _ ? _[B] ?? null : j().getAttribute(B);
  }
  function k(B, y) {
    _[B] !== y && (_[B] = y);
  }
  function Z(B) {
    Ve(j(), "SMUIDataTableHeaderCheckboxChange", B);
  }
  function G(B) {
    Ve(j(), "SMUIDataTableBodyCheckboxChange", B);
  }
  function j() {
    return p;
  }
  var K = { getElement: j }, U = oe(), N = J(U);
  {
    var M = (B) => {
      var y = Lb(), L = (ce) => {
        var V;
        d() && Z(ce), (V = e.onchange) == null || V.call(e, ce);
      };
      Ue(
        y,
        (ce) => ({
          class: ce,
          role: "columnheader",
          scope: "col",
          "data-column-id": h(),
          "aria-sort": f() ? n() === h() ? r() : "none" : void 0,
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
            ...b,
            [l()]: !0
          })
        ]
      );
      var ee = Ie(y);
      {
        var R = (ce) => {
          var V = Tb(), se = Ie(V);
          ye(se, () => e.children ?? pe);
          var Q = _e(se, 2), fe = Ie(Q);
          ke(() => {
            Vi(Q, "id", `${h() ?? ""}-status-label`), ft(fe, n() === h() ? r() === "ascending" ? S : g : "");
          }), O(ce, V);
        }, W = (ce) => {
          var V = oe(), se = J(V);
          ye(se, () => e.children ?? pe), O(ce, V);
        };
        he(ee, (ce) => {
          f() ? ce(R) : ce(W, !1);
        });
      }
      xe(y, (ce) => p = ce, () => p), Be(y, (ce, V) => X == null ? void 0 : X(ce, V), u), O(B, y);
    }, z = (B) => {
      var y = Ob(), L = (R) => {
        var W;
        d() && G(R), (W = e.onchange) == null || W.call(e, R);
      };
      Ue(
        y,
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
            ...b,
            [l()]: !0
          })
        ]
      );
      var ee = Ie(y);
      ye(ee, () => e.children ?? pe), xe(y, (R) => p = R, () => p), Be(y, (R, W) => X == null ? void 0 : X(R, W), u), O(B, y);
    };
    he(N, (B) => {
      o ? B(M) : B(z, !1);
    });
  }
  O(t, U);
  var ae = Re(K);
  return a(), ae;
}
Rr(["click"]);
Rr(["click"]);
function ys(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
var wb = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
ys({}, wb.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
var Va, nu = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
};
Va = {}, ys(Va, nu.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), ys(Va, nu.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list");
const Rb = gt([]);
Rb.subscribe;
Rr(["click", "pointerdown", "pointerup", "pointermove"]);
Rr(["click"]);
const Mb = 4e3;
function Db() {
  let t = Ce({ items: [] }), e = 0;
  const n = (i) => {
    t.items = t.items.filter((a) => a.id !== i);
  }, r = (i, a, o, u = Mb) => {
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
Db();
var Pb = /* @__PURE__ */ ge('<div><div class="mdc-linear-progress__buffer"><div class="mdc-linear-progress__buffer-bar"></div> <div class="mdc-linear-progress__buffer-dots"></div></div> <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"><span class="mdc-linear-progress__bar-inner"></span></div> <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span class="mdc-linear-progress__bar-inner"></span></div></div>');
function Nb(t, e) {
  we(e, !0);
  const [n, r] = bn();
  let i = m(e, "use", 19, () => []), a = m(e, "class", 3, ""), o = m(e, "style", 3, ""), u = m(e, "indeterminate", 3, !1), l = m(e, "closed", 3, !1), c = m(e, "progress", 3, 0), d = m(e, "buffer", 3, void 0), h = /* @__PURE__ */ Ge(e, [
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
  ]), f, v = /* @__PURE__ */ Ee(void 0), p = Ce({}), b = Ce({}), _ = Ce({}), C = Ce({}), x = Ce({}), S = ue("SMUI:linear-progress:context"), g = ue("SMUI:linear-progress:closed");
  Se(() => {
    g && Gt(g, l());
  }), Se(() => {
    s(v) && s(v).isDeterminate() !== !u() && s(v).setDeterminate(!u());
  }), Se(() => {
    s(v) && s(v).getProgress() !== c() && s(v).setProgress(c());
  }), Se(() => {
    s(v) && (d() == null ? s(v).setBuffer(1) : s(v).setBuffer(d()));
  }), Se(() => {
    s(v) && (l() ? s(v).close() : s(v).open());
  }), ut(() => ($(
    v,
    new mb({
      addClass: I,
      forceLayout: () => {
        j().getBoundingClientRect();
      },
      setBufferBarStyle: Z,
      setPrimaryBarStyle: G,
      hasClass: E,
      removeAttribute: w,
      removeClass: T,
      setAttribute: A,
      setStyle: k,
      attachResizeObserver: (y) => {
        const L = window.ResizeObserver;
        if (L) {
          const ee = new L(y);
          return ee.observe(j()), ee;
        }
        return null;
      },
      getWidth: () => j().offsetWidth
    }),
    !0
  ), s(v).init(), () => {
    var y;
    (y = s(v)) == null || y.destroy();
  }));
  function E(y) {
    return y in p ? p[y] : j().classList.contains(y);
  }
  function I(y) {
    p[y] || (p[y] = !0);
  }
  function T(y) {
    (!(y in p) || p[y]) && (p[y] = !1);
  }
  function A(y, L) {
    b[y] !== L && (b[y] = L);
  }
  function w(y) {
    (!(y in b) || b[y] != null) && (b[y] = void 0);
  }
  function k(y, L) {
    _[y] != L && (L === "" || L == null ? delete _[y] : _[y] = L);
  }
  function Z(y, L) {
    C[y] != L && (L === "" || L == null ? delete C[y] : C[y] = L);
  }
  function G(y, L) {
    x[y] != L && (L === "" || L == null ? delete x[y] : x[y] = L);
  }
  function j() {
    return f;
  }
  var K = { getElement: j }, U = Pb(), N = (y) => {
    var L;
    s(v) && s(v).handleTransitionEnd(), (L = e.ontransitionend) == null || L.call(e, y);
  };
  Ue(
    U,
    (y, L) => ({
      class: y,
      style: L,
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 1,
      "aria-valuenow": u() ? void 0 : c(),
      ...b,
      ...h,
      ontransitionend: N
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
      () => Object.entries(_).map(([y, L]) => `${y}: ${L};`).concat([o()]).join(" ")
    ]
  );
  var M = Ie(U), z = Ie(M), ae = _e(M, 2);
  xe(U, (y) => f = y, () => f), Be(U, (y, L) => X == null ? void 0 : X(y, L), i), ke(
    (y, L) => {
      an(z, y), an(ae, L);
    },
    [
      () => Object.entries(C).map(([y, L]) => `${y}: ${L};`).join(" "),
      () => Object.entries(x).map(([y, L]) => `${y}: ${L};`).join(" ")
    ]
  ), O(t, U);
  var B = Re(K);
  return r(), B;
}
var Fb = /* @__PURE__ */ dn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 4l-8 8h16l-8-8z"></path></svg>'), Hb = /* @__PURE__ */ dn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 20l8-8H4l8 8z"></path></svg>'), Ub = (t, e) => e(), Bb = /* @__PURE__ */ ge('<input type="text" class="svelte-1mj71p3"/>'), kb = (t, e) => e(), Vb = /* @__PURE__ */ ge('<input type="number" class="svelte-1mj71p3"/>'), Gb = /* @__PURE__ */ ge("<!> <!>", 1), jb = /* @__PURE__ */ ge('<div class="custom-cell-container svelte-1mj71p3"><div class="cell-header svelte-1mj71p3"><span class="header-title svelte-1mj71p3"> </span> <!></div> <!></div>'), Wb = /* @__PURE__ */ ge('<div class="cell-actions svelte-1mj71p3"></div>'), qb = /* @__PURE__ */ ge("<!> <!>", 1);
function ru(t, e) {
  we(e, !0);
  const n = () => wt(b, "$sortColumn", a), r = () => wt(_, "$sortDirection", a), i = () => wt(p, "$filteredData", a), [a, o] = bn();
  let u = m(e, "loadingDone", 15, !0), l = m(e, "label", 19, Gc), c = m(e, "columnDefs", 19, () => []), d = m(e, "rowData", 31, () => Ce([])), h = m(e, "rowActions", 19, () => []), f = m(e, "searchInputLabel", 3, "Search"), v = Ce({ name: "", color: "", number: "" }), p = gt([]), b = gt(null), _ = gt(null);
  e.store.store.subscribe((g) => {
    d([...g]), C();
  });
  function C() {
    let g = d().filter((E) => c().every((I) => {
      const T = v[I.field], A = I.filterValueGetter ? I.filterValueGetter(E) : E[I.field];
      return T ? I.filterType === "number" ? A == T : A.toString().toLowerCase().includes(T.toLowerCase()) : !0;
    }));
    g = x(g), p.set(g);
  }
  function x(g) {
    let E, I;
    return b.subscribe((T) => E = T), _.subscribe((T) => I = T), !E || !I ? g : g.sort((T, A) => {
      let w = T[E], k = A[E];
      return w == null && (w = ""), k == null && (k = ""), I === "asc" ? w.toString().localeCompare(k.toString()) : k.toString().localeCompare(w.toString());
    });
  }
  function S(g) {
    b.update((E) => {
      if (E === g)
        _.update((I) => I === "asc" ? "desc" : I === "desc" ? null : "asc");
      else
        return _.set("asc"), g;
      return g;
    }), C();
  }
  p.set(d()), yb(t, {
    get "table$aria-label"() {
      return l();
    },
    style: "max-width: 100%; width: 100%;",
    progress: (E) => {
      Nb(E, {
        indeterminate: !0,
        "aria-label": "Data is being loaded...",
        get closed() {
          return u();
        },
        set closed(I) {
          u(I);
        }
      });
    },
    children: (E, I) => {
      var T = qb(), A = J(T);
      _b(A, {
        children: (k, Z) => {
          tu(k, {
            class: "header-row",
            children: (G, j) => {
              var K = oe(), U = J(K);
              Ei(U, 17, c, Xa, (N, M) => {
                Xo(N, {
                  onclick: () => s(M).sortable && S(s(M).field),
                  get style() {
                    return s(M).headerStyle;
                  },
                  children: (z, ae) => {
                    var B = jb(), y = Ie(B), L = Ie(y), ee = Ie(L), R = _e(L, 2);
                    {
                      var W = (se) => {
                        var Q = oe(), fe = J(Q);
                        {
                          var ne = (ze) => {
                            var We = oe(), De = J(We);
                            {
                              var Le = (Te) => {
                                var Fe = Fb();
                                O(Te, Fe);
                              }, le = (Te) => {
                                var Fe = oe(), P = J(Fe);
                                {
                                  var q = (re) => {
                                    var Ae = Hb();
                                    O(re, Ae);
                                  };
                                  he(
                                    P,
                                    (re) => {
                                      r() === "desc" && re(q);
                                    },
                                    !0
                                  );
                                }
                                O(Te, Fe);
                              };
                              he(De, (Te) => {
                                r() === "asc" ? Te(Le) : Te(le, !1);
                              });
                            }
                            O(ze, We);
                          };
                          he(fe, (ze) => {
                            n() === s(M).field && r() !== null && ze(ne);
                          });
                        }
                        O(se, Q);
                      };
                      he(R, (se) => {
                        s(M).sortable && se(W);
                      });
                    }
                    var ce = _e(y, 2);
                    {
                      var V = (se) => {
                        var Q = Gb(), fe = J(Q);
                        {
                          var ne = (De) => {
                            var Le = Bb();
                            Le.__input = [Ub, C], ke(() => Vi(Le, "placeholder", `${f()} ${s(M).headerName}`)), Ia(Le, () => v[s(M).field], (le) => v[s(M).field] = le), O(De, Le);
                          };
                          he(fe, (De) => {
                            s(M).filterType === "text" && De(ne);
                          });
                        }
                        var ze = _e(fe, 2);
                        {
                          var We = (De) => {
                            var Le = Vb();
                            Le.__input = [kb, C], ke(() => Vi(Le, "placeholder", `${f()} ${s(M).headerName}`)), Ia(Le, () => v[s(M).field], (le) => v[s(M).field] = le), O(De, Le);
                          };
                          he(ze, (De) => {
                            s(M).filterType === "number" && De(We);
                          });
                        }
                        O(se, Q);
                      };
                      he(ce, (se) => {
                        s(M).filter && se(V);
                      });
                    }
                    ke(() => {
                      an(B, `min-width: ${s(M).minWidth ?? 0 ?? ""}`), ft(ee, s(M).headerName);
                    }), O(z, B);
                  },
                  $$slots: { default: !0 }
                });
              }), O(G, K);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var w = _e(A, 2);
      Cb(w, {
        children: (k, Z) => {
          var G = oe(), j = J(G);
          Ei(j, 1, i, Xa, (K, U) => {
            tu(K, {
              children: (N, M) => {
                var z = oe(), ae = J(z);
                Ei(ae, 17, c, (B) => B.field, (B, y) => {
                  var L = oe(), ee = J(L);
                  {
                    var R = (ce) => {
                      Xo(ce, {
                        children: (V, se) => {
                          var Q = Wb();
                          Ei(Q, 21, h, Xa, (fe, ne) => {
                            var ze = oe(), We = J(ze);
                            {
                              var De = (le) => {
                                $l(le, {
                                  get content() {
                                    return s(ne).tooltip;
                                  },
                                  hoverDelay: 500,
                                  children: (Te, Fe) => {
                                    {
                                      let P = /* @__PURE__ */ me(() => s(ne).disabled(s(U)));
                                      Hm(Te, {
                                        get iconComponent() {
                                          return s(ne).iconComponent;
                                        },
                                        get iconStyles() {
                                          return s(ne).iconStyles;
                                        },
                                        callback: () => s(ne).callback(s(U)),
                                        get disabled() {
                                          return s(P);
                                        }
                                      });
                                    }
                                  },
                                  $$slots: { default: !0 }
                                });
                              }, Le = (le) => {
                                $l(le, {
                                  get content() {
                                    return s(ne).tooltip;
                                  },
                                  hoverDelay: 500,
                                  children: (Te, Fe) => {
                                    {
                                      let P = /* @__PURE__ */ me(() => s(ne).disabled(s(U)));
                                      ao(Te, {
                                        class: "button",
                                        variant: "raised",
                                        callback: () => s(ne).callback(s(U)),
                                        get disabled() {
                                          return s(P);
                                        },
                                        children: (q, re) => {
                                          var Ae = oe(), St = J(Ae);
                                          {
                                            var Dt = (de) => {
                                              Bg(de, { svgStyles: "margin: unset" });
                                            }, hn = (de) => {
                                              var H = oe(), F = J(H);
                                              {
                                                var Y = (et) => {
                                                  Ks(et, { svgStyles: "margin: unset" });
                                                }, Pe = (et) => {
                                                  var mt = oe(), Pt = J(mt);
                                                  {
                                                    var Wt = (nt) => {
                                                      Gg(nt, { svgStyles: "margin: unset" });
                                                    }, cr = (nt) => {
                                                      var xt = oe(), qt = J(xt);
                                                      {
                                                        var Fn = (Zt) => {
                                                          Wg(Zt, { svgStyles: "margin: unset" });
                                                        }, hi = (Zt) => {
                                                          var qe = oe(), at = J(qe);
                                                          {
                                                            var tt = (Ft) => {
                                                              Zg(Ft, { svgStyles: "margin: unset" });
                                                            }, Nt = (Ft) => {
                                                              var rt = oe(), yt = J(rt);
                                                              {
                                                                var Tt = (ht) => {
                                                                  Jg(ht, { svgStyles: "margin: unset" });
                                                                }, Qe = (ht) => {
                                                                  var yn = oe(), ln = J(yn);
                                                                  {
                                                                    var It = (Lt) => {
                                                                      eb(Lt, { svgStyles: "margin: unset" });
                                                                    }, Ht = (Lt) => {
                                                                      Kg(Lt, { svgStyles: "margin: unset" });
                                                                    };
                                                                    he(
                                                                      ln,
                                                                      (Lt) => {
                                                                        s(ne).icon === "delete" ? Lt(It) : Lt(Ht, !1);
                                                                      },
                                                                      !0
                                                                    );
                                                                  }
                                                                  O(ht, yn);
                                                                };
                                                                he(
                                                                  yt,
                                                                  (ht) => {
                                                                    s(ne).icon === "edit" ? ht(Tt) : ht(Qe, !1);
                                                                  },
                                                                  !0
                                                                );
                                                              }
                                                              O(Ft, rt);
                                                            };
                                                            he(
                                                              at,
                                                              (Ft) => {
                                                                s(ne).icon === "remove" ? Ft(tt) : Ft(Nt, !1);
                                                              },
                                                              !0
                                                            );
                                                          }
                                                          O(Zt, qe);
                                                        };
                                                        he(
                                                          qt,
                                                          (Zt) => {
                                                            s(ne).icon === "find-in-page" ? Zt(Fn) : Zt(hi, !1);
                                                          },
                                                          !0
                                                        );
                                                      }
                                                      O(nt, xt);
                                                    };
                                                    he(
                                                      Pt,
                                                      (nt) => {
                                                        s(ne).icon === "download" ? nt(Wt) : nt(cr, !1);
                                                      },
                                                      !0
                                                    );
                                                  }
                                                  O(et, mt);
                                                };
                                                he(
                                                  F,
                                                  (et) => {
                                                    s(ne).icon === "cancel" ? et(Y) : et(Pe, !1);
                                                  },
                                                  !0
                                                );
                                              }
                                              O(de, H);
                                            };
                                            he(St, (de) => {
                                              s(ne).icon === "add" ? de(Dt) : de(hn, !1);
                                            });
                                          }
                                          O(q, Ae);
                                        },
                                        $$slots: { default: !0 }
                                      });
                                    }
                                  },
                                  $$slots: { default: !0 }
                                });
                              };
                              he(We, (le) => {
                                s(ne).iconComponent ? le(De) : le(Le, !1);
                              });
                            }
                            O(fe, ze);
                          }), O(V, Q);
                        },
                        $$slots: { default: !0 }
                      });
                    }, W = (ce) => {
                      Xo(ce, {
                        get numeric() {
                          return s(y).numeric;
                        },
                        get style() {
                          return s(y).cellStyle;
                        },
                        children: (V, se) => {
                          var Q = oe(), fe = J(Q);
                          {
                            var ne = (We) => {
                              const De = /* @__PURE__ */ me(() => s(y).cellRenderer);
                              var Le = oe(), le = J(Le);
                              sr(le, () => s(De), (Te, Fe) => {
                                Fe(Te, $e(
                                  {
                                    get row() {
                                      return s(U);
                                    },
                                    get value() {
                                      return s(U)[s(y).field];
                                    },
                                    get col() {
                                      return s(y);
                                    }
                                  },
                                  () => s(y).cellRendererProps ?? {}
                                ));
                              }), O(We, Le);
                            }, ze = (We) => {
                              var De = oe(), Le = J(De);
                              {
                                var le = (Fe) => {
                                  var P = Vt();
                                  ke((q) => ft(P, q), [
                                    () => s(y).valueFormatter(s(U)[s(y).field])
                                  ]), O(Fe, P);
                                }, Te = (Fe) => {
                                  var P = Vt();
                                  ke(() => ft(P, s(U)[s(y).field] ?? "")), O(Fe, P);
                                };
                                he(
                                  Le,
                                  (Fe) => {
                                    s(y).valueFormatter ? Fe(le) : Fe(Te, !1);
                                  },
                                  !0
                                );
                              }
                              O(We, De);
                            };
                            he(fe, (We) => {
                              s(y).cellRenderer ? We(ne) : We(ze, !1);
                            });
                          }
                          O(V, Q);
                        },
                        $$slots: { default: !0 }
                      });
                    };
                    he(ee, (ce) => {
                      s(y).field === "actions" ? ce(R) : ce(W, !1);
                    });
                  }
                  O(B, L);
                }), O(N, z);
              },
              $$slots: { default: !0 }
            });
          }), O(k, G);
        },
        $$slots: { default: !0 }
      }), O(E, T);
    },
    $$slots: { progress: !0, default: !0 }
  }), Re(), o();
}
Rr(["input"]);
var Kb = /* @__PURE__ */ ge("<div><!></div>");
function zb(t, e) {
  we(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "variant", 3, "raised"), a = m(e, "padded", 3, !1), o = /* @__PURE__ */ Ge(e, [
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
  var c = { getElement: l }, d = Kb();
  Ue(d, (f) => ({ class: f, ...o }), [
    () => Ne({
      "mdc-card": !0,
      "mdc-card--outlined": i() === "outlined",
      "smui-card--padded": a(),
      [r()]: !0
    })
  ]);
  var h = Ie(d);
  return ye(h, () => e.children ?? pe), xe(d, (f) => u = f, () => u), Be(d, (f, v) => X == null ? void 0 : X(f, v), n), O(t, d), Re(c);
}
function At(t) {
  return typeof t == "function";
}
function Xb(t) {
  return At(t == null ? void 0 : t.lift);
}
function zn(t) {
  return function(e) {
    if (Xb(e))
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
var jc = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function Wc(t) {
  return At(t == null ? void 0 : t.then);
}
function qc(t) {
  var e = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = t(e);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var Yo = qc(function(t) {
  return function(n) {
    t(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(r, i) {
      return i + 1 + ") " + r.toString();
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
    var e, n, r, i, a;
    if (!this.closed) {
      this.closed = !0;
      var o = this._parentage;
      if (o)
        if (this._parentage = null, Array.isArray(o))
          try {
            for (var u = Rt(o), l = u.next(); !l.done; l = u.next()) {
              var c = l.value;
              c.remove(this);
            }
          } catch (b) {
            e = { error: b };
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
        } catch (b) {
          a = b instanceof Yo ? b.errors : [b];
        }
      var h = this._finalizers;
      if (h) {
        this._finalizers = null;
        try {
          for (var f = Rt(h), v = f.next(); !v.done; v = f.next()) {
            var p = v.value;
            try {
              au(p);
            } catch (b) {
              a = a ?? [], b instanceof Yo ? a = Sr(Sr([], ji(a)), ji(b.errors)) : a.push(b);
            }
          }
        } catch (b) {
          r = { error: b };
        } finally {
          try {
            v && !v.done && (i = f.return) && i.call(f);
          } finally {
            if (r) throw r.error;
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
        au(e);
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
function Kc(t) {
  return t instanceof zs || t && "closed" in t && At(t.remove) && At(t.add) && At(t.unsubscribe);
}
function au(t) {
  At(t) ? t() : t.unsubscribe();
}
var Yb = {
  Promise: void 0
}, Zb = {
  setTimeout: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setTimeout.apply(void 0, Sr([t, e], ji(n)));
  },
  clearTimeout: function(t) {
    return clearTimeout(t);
  },
  delegate: void 0
};
function zc(t) {
  Zb.setTimeout(function() {
    throw t;
  });
}
function ou() {
}
function Qb(t) {
  t();
}
var Xs = function(t) {
  it(e, t);
  function e(n) {
    var r = t.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, Kc(n) && n.add(r)) : r.destination = ey, r;
  }
  return e.create = function(n, r, i) {
    return new Is(n, r, i);
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
}(zs), Jb = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(e);
      } catch (r) {
        Ga(r);
      }
  }, t.prototype.error = function(e) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(e);
      } catch (r) {
        Ga(r);
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
}(), Is = function(t) {
  it(e, t);
  function e(n, r, i) {
    var a = t.call(this) || this, o;
    return At(n) || !n ? o = {
      next: n ?? void 0,
      error: r ?? void 0,
      complete: i ?? void 0
    } : o = n, a.destination = new Jb(o), a;
  }
  return e;
}(Xs);
function Ga(t) {
  zc(t);
}
function $b(t) {
  throw t;
}
var ey = {
  closed: !0,
  next: ou,
  error: $b,
  complete: ou
}, Ys = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function Xc(t) {
  return t;
}
function ty(t) {
  return t.length === 0 ? Xc : t.length === 1 ? t[0] : function(n) {
    return t.reduce(function(r, i) {
      return i(r);
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
  }, t.prototype.subscribe = function(e, n, r) {
    var i = this, a = ry(e) ? e : new Is(e, n, r);
    return Qb(function() {
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
    return n = su(n), new n(function(i, a) {
      var o = new Is({
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
  }, t.prototype[Ys] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    return ty(e)(this);
  }, t.prototype.toPromise = function(e) {
    var n = this;
    return e = su(e), new e(function(r, i) {
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
function su(t) {
  var e;
  return (e = t ?? Yb.Promise) !== null && e !== void 0 ? e : Promise;
}
function ny(t) {
  return t && At(t.next) && At(t.error) && At(t.complete);
}
function ry(t) {
  return t && t instanceof Xs || ny(t) && Kc(t);
}
function Yc(t) {
  return At(t[Ys]);
}
function Zc(t) {
  return Symbol.asyncIterator && At(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function Qc(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function iy() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var Jc = iy();
function $c(t) {
  return At(t == null ? void 0 : t[Jc]);
}
function ed(t) {
  return vh(this, arguments, function() {
    var n, r, i, a;
    return Bs(this, function(o) {
      switch (o.label) {
        case 0:
          n = t.getReader(), o.label = 1;
        case 1:
          o.trys.push([1, , 9, 10]), o.label = 2;
        case 2:
          return [4, Li(n.read())];
        case 3:
          return r = o.sent(), i = r.value, a = r.done, a ? [4, Li(void 0)] : [3, 5];
        case 4:
          return [2, o.sent()];
        case 5:
          return [4, Li(i)];
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
function td(t) {
  return At(t == null ? void 0 : t.getReader);
}
function di(t) {
  if (t instanceof Nn)
    return t;
  if (t != null) {
    if (Yc(t))
      return ay(t);
    if (jc(t))
      return oy(t);
    if (Wc(t))
      return sy(t);
    if (Zc(t))
      return nd(t);
    if ($c(t))
      return ly(t);
    if (td(t))
      return uy(t);
  }
  throw Qc(t);
}
function ay(t) {
  return new Nn(function(e) {
    var n = t[Ys]();
    if (At(n.subscribe))
      return n.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function oy(t) {
  return new Nn(function(e) {
    for (var n = 0; n < t.length && !e.closed; n++)
      e.next(t[n]);
    e.complete();
  });
}
function sy(t) {
  return new Nn(function(e) {
    t.then(function(n) {
      e.closed || (e.next(n), e.complete());
    }, function(n) {
      return e.error(n);
    }).then(null, zc);
  });
}
function ly(t) {
  return new Nn(function(e) {
    var n, r;
    try {
      for (var i = Rt(t), a = i.next(); !a.done; a = i.next()) {
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
function nd(t) {
  return new Nn(function(e) {
    cy(t, e).catch(function(n) {
      return e.error(n);
    });
  });
}
function uy(t) {
  return nd(ed(t));
}
function cy(t, e) {
  var n, r, i, a;
  return oc(this, void 0, void 0, function() {
    var o, u;
    return Bs(this, function(l) {
      switch (l.label) {
        case 0:
          l.trys.push([0, 5, 6, 11]), n = mh(t), l.label = 1;
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
function Kn(t, e, n, r, i) {
  return new dy(t, e, n, r, i);
}
var dy = function(t) {
  it(e, t);
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
}(Xs);
function fy(t) {
  return t && At(t.schedule);
}
function hy(t) {
  return t[t.length - 1];
}
function vy(t) {
  return fy(hy(t)) ? t.pop() : void 0;
}
function ti(t, e, n, r, i) {
  r === void 0 && (r = 0), i === void 0 && (i = !1);
  var a = e.schedule(function() {
    n(), i ? t.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (t.add(a), !i)
    return a;
}
function rd(t) {
  return zn(function(e, n) {
    var r = null, i = !1, a;
    r = e.subscribe(Kn(n, void 0, void 0, function(o) {
      a = di(t(o, rd(t)(e))), r ? (r.unsubscribe(), r = null, a.subscribe(n)) : i = !0;
    })), i && (r.unsubscribe(), r = null, a.subscribe(n));
  });
}
function id(t, e) {
  return e === void 0 && (e = 0), zn(function(n, r) {
    n.subscribe(Kn(r, function(i) {
      return ti(r, t, function() {
        return r.next(i);
      }, e);
    }, function() {
      return ti(r, t, function() {
        return r.complete();
      }, e);
    }, function(i) {
      return ti(r, t, function() {
        return r.error(i);
      }, e);
    }));
  });
}
function ad(t, e) {
  return e === void 0 && (e = 0), zn(function(n, r) {
    r.add(t.schedule(function() {
      return n.subscribe(r);
    }, e));
  });
}
function my(t, e) {
  return di(t).pipe(ad(e), id(e));
}
function py(t, e) {
  return di(t).pipe(ad(e), id(e));
}
function gy(t, e) {
  return new Nn(function(n) {
    var r = 0;
    return e.schedule(function() {
      r === t.length ? n.complete() : (n.next(t[r++]), n.closed || this.schedule());
    });
  });
}
function by(t, e) {
  return new Nn(function(n) {
    var r;
    return ti(n, e, function() {
      r = t[Jc](), ti(n, e, function() {
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
function od(t, e) {
  if (!t)
    throw new Error("Iterable cannot be null");
  return new Nn(function(n) {
    ti(n, e, function() {
      var r = t[Symbol.asyncIterator]();
      ti(n, e, function() {
        r.next().then(function(i) {
          i.done ? n.complete() : n.next(i.value);
        });
      }, 0, !0);
    });
  });
}
function yy(t, e) {
  return od(ed(t), e);
}
function Iy(t, e) {
  if (t != null) {
    if (Yc(t))
      return my(t, e);
    if (jc(t))
      return gy(t, e);
    if (Wc(t))
      return py(t, e);
    if (Zc(t))
      return od(t, e);
    if ($c(t))
      return by(t, e);
    if (td(t))
      return yy(t, e);
  }
  throw Qc(t);
}
function sd(t, e) {
  return e ? Iy(t, e) : di(t);
}
function ir(t, e) {
  return zn(function(n, r) {
    var i = 0;
    n.subscribe(Kn(r, function(a) {
      r.next(t.call(e, a, i++));
    }));
  });
}
function _y(t, e, n, r, i, a, o, u) {
  var l = [], c = 0, d = 0, h = !1, f = function() {
    h && !l.length && !c && e.complete();
  }, v = function(b) {
    return c < r ? p(b) : l.push(b);
  }, p = function(b) {
    c++;
    var _ = !1;
    di(n(b, d++)).subscribe(Kn(e, function(C) {
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
          }; l.length && c < r; )
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
  return n === void 0 && (n = 1 / 0), At(e) ? _s(function(r, i) {
    return ir(function(a, o) {
      return e(r, a, i, o);
    })(di(t(r, i)));
  }, n) : (typeof e == "number" && (n = e), zn(function(r, i) {
    return _y(r, i, t, n);
  }));
}
function Ey(t, e) {
  return At(e) ? _s(t, e, 1) : _s(t, 1);
}
var Cy = new Nn(function(t) {
  return t.complete();
});
function ca(t) {
  return t <= 0 ? function() {
    return Cy;
  } : zn(function(e, n) {
    var r = 0;
    e.subscribe(Kn(n, function(i) {
      ++r <= t && (n.next(i), t <= r && n.complete());
    }));
  });
}
function ld() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = vy(t);
  return sd(t, n);
}
function lu(t, e) {
  return zn(function(n, r) {
    var i = 0;
    n.subscribe(Kn(r, function(a) {
      return t.call(e, a, i++) && r.next(a);
    }));
  });
}
function uu(t) {
  return zn(function(e, n) {
    try {
      e.subscribe(n);
    } finally {
      n.add(t);
    }
  });
}
function Ay(t, e) {
  return zn(function(n, r) {
    var i = null, a = 0, o = !1, u = function() {
      return o && !i && r.complete();
    };
    n.subscribe(Kn(r, function(l) {
      i == null || i.unsubscribe();
      var c = 0, d = a++;
      di(t(l, d)).subscribe(i = Kn(r, function(h) {
        return r.next(e ? e(l, h, d, c++) : h);
      }, function() {
        i = null, u();
      }));
    }, function() {
      o = !0, u();
    }));
  });
}
function da(t, e, n) {
  var r = At(t) || e || n ? { next: t, error: e, complete: n } : t;
  return r ? zn(function(i, a) {
    var o;
    (o = r.subscribe) === null || o === void 0 || o.call(r);
    var u = !0;
    i.subscribe(Kn(a, function(l) {
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
  }) : Xc;
}
class Sy {
  constructor(e, n, r, i, a, o, u, l, c) {
    this._uuid = e, this._filename = n, this._author = r, this._type = i, this._date = a, this._version = o, this._comment = u, this._archived = l, this._available = c;
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
function ud(t) {
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
var xy = /* @__PURE__ */ function() {
  function t(e, n, r, i) {
    i === void 0 && (i = "download_load"), this.originalEvent = e, this.xhr = n, this.request = r, this.type = i;
    var a = n.status, o = n.responseType;
    this.status = a ?? 0, this.responseType = o ?? "";
    var u = n.getAllResponseHeaders();
    this.responseHeaders = u ? u.split(`
`).reduce(function(d, h) {
      var f = h.indexOf(": ");
      return d[h.slice(0, f)] = h.slice(f + 2), d;
    }, {}) : {}, this.response = ud(n);
    var l = e.loaded, c = e.total;
    this.loaded = l, this.total = c;
  }
  return t;
}(), lo = qc(function(t) {
  return function(n, r, i) {
    this.message = n, this.name = "AjaxError", this.xhr = r, this.request = i, this.status = r.status, this.responseType = r.responseType;
    var a;
    try {
      a = ud(r);
    } catch {
      a = r.responseText;
    }
    this.response = a;
  };
}), Ty = function() {
  function t(e, n) {
    return lo.call(this, "ajax timeout", e, n), this.name = "AjaxTimeoutError", this;
  }
  return t.prototype = Object.create(lo.prototype), t;
}();
function Ly(t, e) {
  return fi({ method: "GET", url: t, headers: e });
}
function Oy(t, e, n) {
  return fi({ method: "POST", url: t, body: e, headers: n });
}
function wy(t, e) {
  return fi({ method: "DELETE", url: t, headers: e });
}
function Ry(t, e, n) {
  return fi({ method: "PUT", url: t, body: e, headers: n });
}
function My(t, e, n) {
  return fi({ method: "PATCH", url: t, body: e, headers: n });
}
var Dy = ir(function(t) {
  return t.response;
});
function Py(t, e) {
  return Dy(fi({
    method: "GET",
    url: t,
    headers: e
  }));
}
var fi = function() {
  var t = function(e) {
    var n = typeof e == "string" ? {
      url: e
    } : e;
    return Fy(n);
  };
  return t.get = Ly, t.post = Oy, t.delete = wy, t.put = Ry, t.patch = My, t.getJSON = Py, t;
}(), Ny = "upload", cu = "download", Zo = "loadstart", Qo = "progress", du = "load";
function Fy(t) {
  return new Nn(function(e) {
    var n, r, i = ve({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, t), a = i.queryParams, o = i.body, u = i.headers, l = i.url;
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
    var v = i.crossDomain;
    !v && !("x-requested-with" in h) && (h["x-requested-with"] = "XMLHttpRequest");
    var p = i.withCredentials, b = i.xsrfCookieName, _ = i.xsrfHeaderName;
    if ((p || !v) && b && _) {
      var C = (r = (n = document == null ? void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + b + ")=([^;]*)"))) === null || n === void 0 ? void 0 : n.pop()) !== null && r !== void 0 ? r : "";
      C && (h[_] = C);
    }
    var x = Hy(o, h), S = ve(ve({}, i), {
      url: l,
      headers: h,
      body: x
    }), g;
    g = t.createXHR ? t.createXHR() : new XMLHttpRequest();
    {
      var E = t.progressSubscriber, I = t.includeDownloadProgress, T = I === void 0 ? !1 : I, A = t.includeUploadProgress, w = A === void 0 ? !1 : A, k = function(M, z) {
        g.addEventListener(M, function() {
          var ae, B = z();
          (ae = E == null ? void 0 : E.error) === null || ae === void 0 || ae.call(E, B), e.error(B);
        });
      };
      k("timeout", function() {
        return new Ty(g, S);
      }), k("abort", function() {
        return new lo("aborted", g, S);
      });
      var Z = function(M, z) {
        return new xy(z, g, S, M + "_" + z.type);
      }, G = function(M, z, ae) {
        M.addEventListener(z, function(B) {
          e.next(Z(ae, B));
        });
      };
      w && [Zo, Qo, du].forEach(function(M) {
        return G(g.upload, M, Ny);
      }), E && [Zo, Qo].forEach(function(M) {
        return g.upload.addEventListener(M, function(z) {
          var ae;
          return (ae = E == null ? void 0 : E.next) === null || ae === void 0 ? void 0 : ae.call(E, z);
        });
      }), T && [Zo, Qo].forEach(function(M) {
        return G(g, M, cu);
      });
      var j = function(M) {
        var z = "ajax error" + (M ? " " + M : "");
        e.error(new lo(z, g, S));
      };
      g.addEventListener("error", function(M) {
        var z;
        (z = E == null ? void 0 : E.error) === null || z === void 0 || z.call(E, M), j();
      }), g.addEventListener(du, function(M) {
        var z, ae, B = g.status;
        if (B < 400) {
          (z = E == null ? void 0 : E.complete) === null || z === void 0 || z.call(E);
          var y = void 0;
          try {
            y = Z(cu, M);
          } catch (L) {
            e.error(L);
            return;
          }
          e.next(y), e.complete();
        } else
          (ae = E == null ? void 0 : E.error) === null || ae === void 0 || ae.call(E, M), j(B);
      });
    }
    var K = S.user, U = S.method, N = S.async;
    K ? g.open(U, l, N, K, S.password) : g.open(U, l, N), N && (g.timeout = S.timeout, g.responseType = S.responseType), "withCredentials" in g && (g.withCredentials = S.withCredentials);
    for (var f in h)
      h.hasOwnProperty(f) && g.setRequestHeader(f, h[f]);
    return x ? g.send(x) : g.send(), function() {
      g && g.readyState !== 4 && g.abort();
    };
  });
}
function Hy(t, e) {
  var n;
  if (!t || typeof t == "string" || jy(t) || Wy(t) || By(t) || ky(t) || Vy(t) || qy(t))
    return t;
  if (Gy(t))
    return t.buffer;
  if (typeof t == "object")
    return e["content-type"] = (n = e["content-type"]) !== null && n !== void 0 ? n : "application/json;charset=utf-8", JSON.stringify(t);
  throw new TypeError("Unknown body type");
}
var Uy = Object.prototype.toString;
function Zs(t, e) {
  return Uy.call(t) === "[object " + e + "]";
}
function By(t) {
  return Zs(t, "ArrayBuffer");
}
function ky(t) {
  return Zs(t, "File");
}
function Vy(t) {
  return Zs(t, "Blob");
}
function Gy(t) {
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView(t);
}
function jy(t) {
  return typeof FormData < "u" && t instanceof FormData;
}
function Wy(t) {
  return typeof URLSearchParams < "u" && t instanceof URLSearchParams;
}
function qy(t) {
  return typeof ReadableStream < "u" && t instanceof ReadableStream;
}
class Ky {
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
const zy = new Ky("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), Xy = [zy], Yy = Xy[0].getUrl();
class cd {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? Yy;
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
class Zy {
  constructor(e = new cd()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (n) => {
      const r = this.clone();
      return r.middleware = r.middleware.concat(n), r;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((r) => ({ pre: r }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((r) => ({ post: r }))), this.createRequestArgs = ({ url: n, query: r, method: i, headers: a, body: o, responseType: u }) => ({
      url: `${this.configuration.basePath}${n}${r && Object.keys(r).length ? `?${Qy(r)}` : ""}`,
      method: i,
      headers: a,
      body: o instanceof FormData ? o : JSON.stringify(o),
      responseType: u ?? "json"
    }), this.rxjsRequest = (n) => ld(n).pipe(
      ir((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      Ey(
        (r) => fi(r).pipe(
          ir((i) => (this.middleware.filter((a) => a.post).forEach((a) => i = a.post(i)), i))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, n) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      ir((r) => {
        const { status: i, response: a } = r;
        if (i >= 200 && i < 300)
          return (n == null ? void 0 : n.response) === "raw" ? r : a;
        throw r;
      })
    );
  }
}
const Kr = (t) => encodeURIComponent(`${t}`), Qy = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((r) => `${Kr(e)}=${Kr(r)}`).join("&") : `${Kr(e)}=${Kr(n)}`
).join("&"), ja = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class Jy extends Zy {
  retrieveDataResourceByVersion({ id: e, version: n }, r) {
    ja(e, "id", "retrieveDataResourceByVersion"), ja(n, "version", "retrieveDataResourceByVersion");
    const i = {};
    return this.request({
      url: "/api/scl/{id}/version/{version}".replace("{id}", Kr(e)).replace("{version}", Kr(n)),
      method: "GET",
      headers: i,
      responseType: "blob"
    }, r == null ? void 0 : r.responseOpts);
  }
  retrieveDataResourceHistory({ id: e }, n) {
    ja(e, "id", "retrieveDataResourceHistory");
    const r = {};
    return this.request({
      url: "/api/scl/{id}/versions".replace("{id}", Kr(e)),
      method: "GET",
      headers: r
    }, n == null ? void 0 : n.responseOpts);
  }
  searchForResources({ dataResourceSearch: e }, n) {
    ja(e, "dataResourceSearch", "searchForResources");
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
class xi {
  constructor() {
    this.endpoint = "/compas-scl-data-service";
  }
  static getInstance() {
    return xi.instance || (xi.instance = new xi()), xi.instance;
  }
  searchFiles(e) {
    return this.generateApiClient(this.endpoint).searchForResources({
      dataResourceSearch: this.mapToDataResourceSearch(e)
    }).pipe(
      lu((r) => !!r || !!r.results),
      ir((r) => r.results),
      ir(
        (r) => r.map((i) => this.mapToFileSearchResult(i))
      )
    );
  }
  getHistoryFiles(e) {
    return this.generateApiClient(this.endpoint).retrieveDataResourceHistory({
      id: e
    }).pipe(
      lu((r) => !!r || !!r.versions),
      ir((r) => r.versions),
      ir(
        (r) => r.map((i) => this.mapToFileSearchResult(i))
      )
    );
  }
  downloadSclData(e, n, r) {
    return this.generateApiClient(this.endpoint).retrieveDataResourceByVersion({
      id: e,
      version: r
    });
  }
  mapToFileSearchResult(e) {
    return console.log("data", e), new Sy(
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
    const n = new cd({
      basePath: e
      // accessToken: authInfo.token,
    });
    return new Jy(n);
  }
}
var yr;
class fu {
  constructor() {
    Je(this, yr, gt([]));
  }
  get store() {
    return ie(this, yr);
  }
  updateData(e) {
    ie(this, yr).set(e);
  }
  addData(e) {
    ie(this, yr).update((n) => [...n, e]);
  }
  removeData(e) {
    ie(this, yr).update((n) => n.filter((r) => r.uuid !== e));
  }
  getData(e) {
    return ic(ie(this, yr)).find((n) => n.uuid === e);
  }
}
yr = new WeakMap();
Wv({ en: vm, de: nm });
var $y = /* @__PURE__ */ ge("<h3> </h3>"), eI = /* @__PURE__ */ ge("<div><!></div>"), tI = /* @__PURE__ */ ge("<!> <!>", 1), nI = /* @__PURE__ */ ge("<div><!></div>"), rI = /* @__PURE__ */ ge("<!> <!>", 1), iI = /* @__PURE__ */ ge('<h3 style="margin-bottom: 1rem;"> </h3> <!>', 1), aI = /* @__PURE__ */ ge('<div class="version-editor-container svelte-vqh57v"><!> <div class="search-filter svelte-vqh57v"><!></div> <div class="table-container svelte-vqh57v"><!></div></div>');
function oI(t, e) {
  we(e, !0);
  const n = () => wt(jv, "$_", r), [r, i] = bn(), a = xi.getInstance();
  let o = /* @__PURE__ */ Ee(void 0), u = m(e, "dataStore", 19, () => new fu()), l = m(e, "historyStore", 19, () => new fu()), c = /* @__PURE__ */ Ee(!0), d = /* @__PURE__ */ Ee(!1), h = /* @__PURE__ */ Ee(!0);
  ut(() => {
    setTimeout(
      () => {
        $(h, !1);
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
  let p = /* @__PURE__ */ me(() => [
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
  ]), b = /* @__PURE__ */ me(() => [
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
      tooltip: "Edit",
      callback: (K) => w(K),
      disabled: (K) => !K.available
    },
    {
      icon: "find-in-page",
      tooltip: "Find in page",
      callback: (K) => T(K),
      disabled: () => !1
    },
    {
      icon: "download",
      tooltip: "Download",
      callback: (K) => g(K),
      disabled: (K) => !K.available
    }
  ], C = [
    {
      icon: "download",
      tooltip: "Download",
      callback: (K) => g(K),
      disabled: (K) => !K.available
    }
  ], x = [
    {
      id: 1,
      key: "filename",
      label: "Filename",
      inputType: { id: 1, type: "string", validatorFn: () => !0, options: [] },
      allowedOperations: ["="]
    },
    {
      id: 2,
      key: "uuid",
      label: "UUID",
      inputType: { id: 1, type: "string", validatorFn: () => !0, options: [] },
      allowedOperations: ["="]
    },
    {
      id: 3,
      key: "type",
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
      key: "author",
      label: "Author",
      inputType: { id: 1, type: "string", validatorFn: () => !0, options: [] },
      allowedOperations: ["="]
    },
    {
      id: 5,
      key: "from",
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
      key: "to",
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
  let S = /* @__PURE__ */ Ee(Ce([]));
  function g(K) {
    console.log("Download file: ", K), a.downloadSclData(K.uuid, K.type, K.version).pipe(ca(1), da((U) => {
      const N = window.URL.createObjectURL(U), M = document.createElement("a");
      M.href = N, M.download = K.filename, M.style.display = "none", document.body.appendChild(M), M.click(), document.body.removeChild(M), window.URL.revokeObjectURL(N);
    })).subscribe();
  }
  function E() {
    const K = I(s(S));
    console.log("Search with params: ", K), $(c, !1), a.searchFiles(K).pipe(
      ca(1),
      da((U) => {
        [...U], u().updateData(U);
      }),
      uu(() => {
        $(c, !0);
      })
    ).subscribe();
  }
  function I(K) {
    const U = {
      uuid: null,
      filename: null,
      author: null,
      type: null,
      name: null,
      from: null,
      to: null
    };
    return console.log("Convert filter to search params: ", K), K.filter((N) => !N.disabled).forEach((N) => {
      console.log("KEY:", N.key), N.key === "from" || N.key === "to" ? U[N.key] = new Date(N.value).toISOString() : U[N.key] = N.value;
    }), U;
  }
  function T(K) {
    $(o, K, !0), a.getHistoryFiles(K.uuid).pipe(ca(1), da((U) => {
      $(d, !0), [...U], l().updateData(U);
    })).subscribe();
  }
  function A(K) {
    console.log("Dialog closed with result: ", K), $(d, !1);
  }
  function w(K) {
    if (!confirm(`Open the selected file?

 Please make sure you save all changes on your current project.`))
      return;
    let U = "";
    a.downloadSclData(K.uuid, K.type, K.version).pipe(
      ca(1),
      da((N) => {
        U = window.URL.createObjectURL(N);
      }),
      Ay(() => sd(fetch(U).then((N) => {
        if (N.status === 200)
          return N.text();
        throw new Error(`Failed to load ${K.filename}: ${N.status} ${N.statusText}`);
      }))),
      ca(1),
      rd((N) => (alert(N), console.error(N), ld(void 0))),
      da((N) => {
        var ae;
        if (!N)
          return;
        const M = K.filename, z = new DOMParser().parseFromString(N, "application/xml");
        (ae = window.document.getElementsByTagName("open-scd")[0]) == null || ae.dispatchEvent(new CustomEvent("open-doc", {
          bubbles: !0,
          composed: !0,
          detail: { localFile: !1, doc: z, docName: M }
        }));
      }),
      uu(() => U && window.URL.revokeObjectURL(U))
    ).subscribe();
  }
  var k = oe(), Z = J(k);
  {
    var G = (K) => {
      {
        let U = /* @__PURE__ */ me(() => !s(h));
        cb(K, {
          get loadingDone() {
            return s(U);
          }
        });
      }
    }, j = (K) => {
      var U = aI(), N = Ie(U);
      ug(N, {
        onClose: A,
        get open() {
          return s(d);
        },
        set open(R) {
          $(d, R, !0);
        },
        title: (R) => {
          var W = $y(), ce = Ie(W);
          ke((V) => ft(ce, V), [
            () => {
              var V;
              return n()("versionHistory.title", { values: { filename: (V = s(o)) == null ? void 0 : V.filename } });
            }
          ]), O(R, W);
        },
        content: (R) => {
          var W = eI(), ce = Ie(W);
          {
            let V = /* @__PURE__ */ me(() => n()("search"));
            ru(ce, {
              get columnDefs() {
                return s(b);
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
          O(R, W);
        },
        actions: (R) => {
          var W = nI(), ce = Ie(W);
          ao(ce, {
            callback: A,
            variant: "raised",
            children: (V, se) => {
              var Q = tI(), fe = J(Q);
              Ks(fe, {});
              var ne = _e(fe, 2);
              Pl(ne, {
                children: (ze, We) => {
                  var De = Vt();
                  ke((Le) => ft(De, Le), [() => n()("done")]), O(ze, De);
                },
                $$slots: { default: !0 }
              }), O(V, Q);
            },
            $$slots: { default: !0 }
          }), O(R, W);
        },
        $$slots: { title: !0, content: !0, actions: !0 }
      });
      var M = _e(N, 2);
      {
        const y = (L) => {
          ao(L, {
            variant: "raised",
            callback: E,
            children: (ee, R) => {
              var W = rI(), ce = J(W);
              Xg(ce, {});
              var V = _e(ce, 2);
              Pl(V, {
                children: (se, Q) => {
                  var fe = Vt();
                  ke((ne) => ft(fe, ne), [() => n()("search")]), O(se, fe);
                },
                $$slots: { default: !0 }
              }), O(ee, W);
            },
            $$slots: { default: !0 }
          });
        };
        var z = Ie(M);
        {
          let L = /* @__PURE__ */ me(() => n()("add_filter")), ee = /* @__PURE__ */ me(() => n()("filter_types"));
          sb(z, {
            get filterControls() {
              return y;
            },
            get filterTypes() {
              return x;
            },
            get addFilterLabel() {
              return s(L);
            },
            get selectFilterLabel() {
              return s(ee);
            },
            get activeFilters() {
              return s(S);
            },
            set activeFilters(R) {
              $(S, R, !0);
            }
          });
        }
      }
      var ae = _e(M, 2), B = Ie(ae);
      zb(B, {
        style: "padding: 1rem; width: 100%; height: 100%;",
        children: (y, L) => {
          var ee = iI(), R = J(ee), W = Ie(R), ce = _e(R, 2);
          {
            let V = /* @__PURE__ */ me(() => n()("search"));
            ru(ce, {
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
          ke((V) => ft(W, V), [() => n()("versionTable.heading")]), O(y, ee);
        },
        $$slots: { default: !0 }
      }), O(K, U);
    };
    he(Z, (K) => {
      s(h) ? K(G) : K(j, !1);
    });
  }
  O(t, k), Re(), i();
}
const dd = "version-editor", fd = "0.0.1";
var sI = /* @__PURE__ */ ge('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function lI(t, e) {
  we(e, !0);
  let n = m(e, "dev", 3, !1);
  var r = sI(), i = J(r);
  {
    var a = (l) => {
      oI(l, {});
    };
    he(i, (l) => {
      (e.doc || n()) && l(a);
    });
  }
  var o = _e(i, 2), u = _e(o, 2);
  ke(() => {
    hl(o, dd), hl(u, fd);
  }), O(t, r), Re();
}
var Ni;
class hI extends HTMLElement {
  constructor() {
    super();
    Je(this, Ni);
    He(this, Ni, /* @__PURE__ */ Ee(Ce({ doc: void 0, editCount: void 0 })));
  }
  get props() {
    return s(ie(this, Ni));
  }
  set props(n) {
    $(ie(this, Ni), n, !0);
  }
  connectedCallback() {
    var r;
    this.attachShadow({ mode: "open" }), this.props.doc = this._doc, this.props.editCount = this.editCount, Df(lI, { target: this.shadowRoot, props: this.props });
    const n = uI();
    (r = this.shadowRoot) == null || r.appendChild(n);
  }
  set doc(n) {
    this._doc = n, this.props.doc = n;
  }
  set editCount(n) {
    this.props.editCount = n;
  }
}
Ni = new WeakMap();
function uI() {
  const t = `${dd}-v${fd}-style`, e = cI(), n = document.createElement("link");
  return n.rel = "stylesheet", n.type = "text/css", n.href = e, n.id = t, n;
}
function cI() {
  const t = new URL(import.meta.url), e = t.origin, n = t.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, n, "style.css"].filter(Boolean).join("/");
}
export {
  hI as default
};
