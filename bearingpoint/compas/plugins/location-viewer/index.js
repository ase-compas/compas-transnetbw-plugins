var td = Object.defineProperty;
var Vo = (t) => {
  throw TypeError(t);
};
var nd = (t, e, n) => e in t ? td(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var ci = (t, e, n) => nd(t, typeof e != "symbol" ? e + "" : e, n), ys = (t, e, n) => e.has(t) || Vo("Cannot " + n);
var Q = (t, e, n) => (ys(t, e, "read from private field"), n ? n.call(t) : e.get(t)), Ke = (t, e, n) => e.has(t) ? Vo("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), Me = (t, e, n, r) => (ys(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), kt = (t, e, n) => (ys(t, e, "access private method"), n);
const wt = Symbol(), rd = "http://www.w3.org/1999/xhtml", id = "http://www.w3.org/2000/svg", ad = "@attach", Yl = !1;
var os = Array.isArray, sd = Array.prototype.indexOf, fo = Array.from, Wa = Object.defineProperty, Ir = Object.getOwnPropertyDescriptor, Ql = Object.getOwnPropertyDescriptors, od = Object.prototype, ld = Array.prototype, ho = Object.getPrototypeOf, Go = Object.isExtensible;
function gi(t) {
  return typeof t == "function";
}
const he = () => {
};
function Jl(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function $l() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
const $t = 2, vo = 4, mo = 8, Cr = 16, sr = 32, ni = 64, go = 128, yn = 256, Xa = 512, Ft = 1024, fn = 2048, xr = 4096, On = 8192, ri = 16384, ls = 32768, Tr = 65536, jo = 1 << 17, ud = 1 << 18, Vi = 1 << 19, cd = 1 << 20, Fs = 1 << 21, us = 1 << 22, Zr = 1 << 23, Bn = Symbol("$state"), eu = Symbol("legacy props"), dd = Symbol(""), pi = new class extends Error {
  constructor() {
    super(...arguments);
    ci(this, "name", "StaleReactionError");
    ci(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function po(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function fd() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function hd(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function vd() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function md(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function gd() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function pd(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function bd() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function _d() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Id() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function yd() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Ed() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Ad() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let Sd = !1;
function tu(t) {
  return t === this.v;
}
function bo(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function nu(t) {
  return !bo(t, this.v);
}
let Gi = !1, Cd = !1;
function xd() {
  Gi = !0;
}
let it = null;
function Oi(t) {
  it = t;
}
function ue(t) {
  return (
    /** @type {T} */
    ru().get(t)
  );
}
function te(t, e) {
  return ru().set(t, e), e;
}
function we(t, e = !1, n) {
  it = {
    p: it,
    c: null,
    e: null,
    s: t,
    x: null,
    l: Gi && !e ? { s: null, u: null, $: [] } : null
  };
}
function Le(t) {
  var e = (
    /** @type {ComponentContext} */
    it
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      _u(r);
  }
  return t !== void 0 && (e.x = t), it = e.p, t ?? /** @type {T} */
  {};
}
function Ia() {
  return !Gi || it !== null && it.l === null;
}
function ru(t) {
  return it === null && po(), it.c ?? (it.c = new Map(Td(it) || void 0));
}
function Td(t) {
  let e = t.p;
  for (; e !== null; ) {
    const n = e.c;
    if (n !== null)
      return n;
    e = e.p;
  }
  return null;
}
let jr = [];
function iu() {
  var t = jr;
  jr = [], Jl(t);
}
function ir(t) {
  if (jr.length === 0 && !ua) {
    var e = jr;
    queueMicrotask(() => {
      e === jr && iu();
    });
  }
  jr.push(t);
}
function wd() {
  for (; jr.length > 0; )
    iu();
}
const Ld = /* @__PURE__ */ new WeakMap();
function au(t) {
  var e = ke;
  if (e === null)
    return Ne.f |= Zr, t;
  if (e.f & ls)
    Ri(t, e);
  else {
    if (!(e.f & go))
      throw !e.parent && t instanceof Error && su(t), t;
    e.b.error(t);
  }
}
function Ri(t, e) {
  for (; e !== null; ) {
    if (e.f & go)
      try {
        e.b.error(t);
        return;
      } catch (n) {
        t = n;
      }
    e = e.parent;
  }
  throw t instanceof Error && su(t), t;
}
function su(t) {
  const e = Ld.get(t);
  e && (Wa(t, "message", {
    value: e.message
  }), Wa(t, "stack", {
    value: e.stack
  }));
}
const wa = /* @__PURE__ */ new Set();
let et = null, Ba = null, Ht = null, Vs = /* @__PURE__ */ new Set(), kn = [], cs = null, Gs = !1, ua = !1;
var Si, Ci, qr, pa, xi, Ti, zr, wi, ba, _a, En, js, Fa, qs;
const is = class is {
  constructor() {
    Ke(this, En);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    ci(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    Ke(this, Si, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    Ke(this, Ci, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    Ke(this, qr, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    Ke(this, pa, null);
    /**
     * Async effects inside a newly-created `<svelte:boundary>`
     * — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    Ke(this, xi, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    Ke(this, Ti, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    Ke(this, zr, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    Ke(this, wi, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    Ke(this, ba, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    Ke(this, _a, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    ci(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var a;
    kn = [], Ba = null, this.apply();
    for (const s of e)
      kt(this, En, js).call(this, s);
    if (Q(this, qr) === 0) {
      var n = Ht;
      kt(this, En, qs).call(this);
      var r = Q(this, Ti), i = Q(this, zr);
      Me(this, Ti, []), Me(this, zr, []), Me(this, wi, []), Ba = this, et = null, Ht = n, qo(r), qo(i), Ba = null, (a = Q(this, pa)) == null || a.resolve();
    } else
      kt(this, En, Fa).call(this, Q(this, Ti)), kt(this, En, Fa).call(this, Q(this, zr)), kt(this, En, Fa).call(this, Q(this, wi));
    Ht = null;
    for (const s of Q(this, xi))
      ha(s);
    Me(this, xi, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    Q(this, Si).has(e) || Q(this, Si).set(e, n), this.current.set(e, e.v), Ht == null || Ht.set(e, e.v);
  }
  activate() {
    et = this;
  }
  deactivate() {
    et = null, Ht = null;
  }
  flush() {
    if (kn.length > 0) {
      if (this.activate(), ou(), et !== null && et !== this)
        return;
    } else Q(this, qr) === 0 && kt(this, En, qs).call(this);
    this.deactivate();
    for (const e of Vs)
      if (Vs.delete(e), e(), et !== null)
        break;
  }
  increment() {
    Me(this, qr, Q(this, qr) + 1);
  }
  decrement() {
    Me(this, qr, Q(this, qr) - 1);
    for (const e of Q(this, ba))
      Yt(e, fn), $r(e);
    for (const e of Q(this, _a))
      Yt(e, xr), $r(e);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    Q(this, Ci).add(e);
  }
  settled() {
    return (Q(this, pa) ?? Me(this, pa, $l())).promise;
  }
  static ensure() {
    if (et === null) {
      const e = et = new is();
      wa.add(et), ua || is.enqueue(() => {
        et === e && e.flush();
      });
    }
    return et;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    ir(e);
  }
  apply() {
  }
};
Si = new WeakMap(), Ci = new WeakMap(), qr = new WeakMap(), pa = new WeakMap(), xi = new WeakMap(), Ti = new WeakMap(), zr = new WeakMap(), wi = new WeakMap(), ba = new WeakMap(), _a = new WeakMap(), En = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
js = function(e) {
  var u;
  e.f ^= Ft;
  for (var n = e.first; n !== null; ) {
    var r = n.f, i = (r & (sr | ni)) !== 0, a = i && (r & Ft) !== 0, s = a || (r & On) !== 0 || this.skipped_effects.has(n);
    if (!s && n.fn !== null) {
      i ? n.f ^= Ft : r & vo ? Q(this, zr).push(n) : r & Ft || (r & us && ((u = n.b) != null && u.is_pending()) ? Q(this, xi).push(n) : vs(n) && (n.f & Cr && Q(this, wi).push(n), ha(n)));
      var c = n.first;
      if (c !== null) {
        n = c;
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
Fa = function(e) {
  for (const n of e)
    (n.f & fn ? Q(this, ba) : Q(this, _a)).push(n), Yt(n, Ft);
  e.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
qs = function() {
  var e;
  for (const n of Q(this, Ci))
    n();
  if (Q(this, Ci).clear(), wa.size > 1) {
    Q(this, Si).clear();
    let n = !0;
    for (const r of wa) {
      if (r === this) {
        n = !1;
        continue;
      }
      const i = [];
      for (const [s, c] of this.current) {
        if (r.current.has(s))
          if (n && c !== r.current.get(s))
            r.current.set(s, c);
          else
            continue;
        i.push(s);
      }
      if (i.length === 0)
        continue;
      const a = [...r.current.keys()].filter((s) => !this.current.has(s));
      if (a.length > 0) {
        for (const s of i)
          lu(s, a);
        if (kn.length > 0) {
          et = r, r.apply();
          for (const s of kn)
            kt(e = r, En, js).call(e, s);
          kn = [], r.deactivate();
        }
      }
    }
    et = null;
  }
  wa.delete(this);
};
let rr = is;
function Od(t) {
  var e = ua;
  ua = !0;
  try {
    for (var n; ; ) {
      if (wd(), kn.length === 0 && (et == null || et.flush(), kn.length === 0))
        return cs = null, /** @type {T} */
        n;
      ou();
    }
  } finally {
    ua = e;
  }
}
function ou() {
  var t = yi;
  Gs = !0;
  try {
    var e = 0;
    for (Ko(!0); kn.length > 0; ) {
      var n = rr.ensure();
      if (e++ > 1e3) {
        var r, i;
        Rd();
      }
      n.process(kn), yr.clear();
    }
  } finally {
    Gs = !1, Ko(t), cs = null;
  }
}
function Rd() {
  try {
    gd();
  } catch (t) {
    Ri(t, cs);
  }
}
let Jn = null;
function qo(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if (!(r.f & (ri | On)) && vs(r) && (Jn = [], ha(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Eu(r) : r.fn = null), (Jn == null ? void 0 : Jn.length) > 0)) {
        yr.clear();
        for (const i of Jn)
          ha(i);
        Jn = [];
      }
    }
    Jn = null;
  }
}
function lu(t, e) {
  if (t.reactions !== null)
    for (const n of t.reactions) {
      const r = n.f;
      r & $t ? lu(
        /** @type {Derived} */
        n,
        e
      ) : r & (us | Cr) && uu(n, e) && (Yt(n, fn), $r(
        /** @type {Effect} */
        n
      ));
    }
}
function uu(t, e) {
  if (t.deps !== null) {
    for (const n of t.deps)
      if (e.includes(n) || n.f & $t && uu(
        /** @type {Derived} */
        n,
        e
      ))
        return !0;
  }
  return !1;
}
function $r(t) {
  for (var e = cs = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (Gs && e === ke && n & Cr)
      return;
    if (n & (ni | sr)) {
      if (!(n & Ft)) return;
      e.f ^= Ft;
    }
  }
  kn.push(e);
}
function Md(t) {
  let e = 0, n = ei(0), r;
  return () => {
    Zd() && (o(n), Ea(() => (e === 0 && (r = Gn(() => t(() => ca(n)))), e += 1, () => {
      ir(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, ca(n));
      });
    })));
  };
}
var Dd = Tr | Vi | go;
function Hd(t, e, n) {
  new Pd(t, e, n);
}
var Tn, _n, co, Pn, Wr, Nn, In, rn, Un, mr, Xr, gr, Kr, pr, as, ss, Jt, Nd, Ud, Va, Ga, zs;
class Pd {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    Ke(this, Jt);
    /** @type {Boundary | null} */
    ci(this, "parent");
    Ke(this, Tn, !1);
    /** @type {TemplateNode} */
    Ke(this, _n);
    /** @type {TemplateNode | null} */
    Ke(this, co, null);
    /** @type {BoundaryProps} */
    Ke(this, Pn);
    /** @type {((anchor: Node) => void)} */
    Ke(this, Wr);
    /** @type {Effect} */
    Ke(this, Nn);
    /** @type {Effect | null} */
    Ke(this, In, null);
    /** @type {Effect | null} */
    Ke(this, rn, null);
    /** @type {Effect | null} */
    Ke(this, Un, null);
    /** @type {DocumentFragment | null} */
    Ke(this, mr, null);
    Ke(this, Xr, 0);
    Ke(this, gr, 0);
    Ke(this, Kr, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    Ke(this, pr, null);
    Ke(this, as, () => {
      Q(this, pr) && Mi(Q(this, pr), Q(this, Xr));
    });
    Ke(this, ss, Md(() => (Me(this, pr, ei(Q(this, Xr))), () => {
      Me(this, pr, null);
    })));
    Me(this, _n, e), Me(this, Pn, n), Me(this, Wr, r), this.parent = /** @type {Effect} */
    ke.b, Me(this, Tn, !!Q(this, Pn).pending), Me(this, Nn, Or(() => {
      ke.b = this;
      {
        try {
          Me(this, In, Bt(() => r(Q(this, _n))));
        } catch (i) {
          this.error(i);
        }
        Q(this, gr) > 0 ? kt(this, Jt, Ga).call(this) : Me(this, Tn, !1);
      }
    }, Dd));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return Q(this, Tn) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!Q(this, Pn).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    kt(this, Jt, zs).call(this, e), Me(this, Xr, Q(this, Xr) + e), Vs.add(Q(this, as));
  }
  get_effect_pending() {
    return Q(this, ss).call(this), o(
      /** @type {Source<number>} */
      Q(this, pr)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = Q(this, Pn).onerror;
    let r = Q(this, Pn).failed;
    if (Q(this, Kr) || !n && !r)
      throw e;
    Q(this, In) && (Pt(Q(this, In)), Me(this, In, null)), Q(this, rn) && (Pt(Q(this, rn)), Me(this, rn, null)), Q(this, Un) && (Pt(Q(this, Un)), Me(this, Un, null));
    var i = !1, a = !1;
    const s = () => {
      if (i) {
        Ad();
        return;
      }
      i = !0, a && yd(), rr.ensure(), Me(this, Xr, 0), Q(this, Un) !== null && Er(Q(this, Un), () => {
        Me(this, Un, null);
      }), Me(this, Tn, this.has_pending_snippet()), Me(this, In, kt(this, Jt, Va).call(this, () => (Me(this, Kr, !1), Bt(() => Q(this, Wr).call(this, Q(this, _n)))))), Q(this, gr) > 0 ? kt(this, Jt, Ga).call(this) : Me(this, Tn, !1);
    };
    var c = Ne;
    try {
      an(null), a = !0, n == null || n(e, s), a = !1;
    } catch (l) {
      Ri(l, Q(this, Nn) && Q(this, Nn).parent);
    } finally {
      an(c);
    }
    r && ir(() => {
      Me(this, Un, kt(this, Jt, Va).call(this, () => {
        Me(this, Kr, !0);
        try {
          return Bt(() => {
            r(
              Q(this, _n),
              () => e,
              () => s
            );
          });
        } catch (l) {
          return Ri(
            l,
            /** @type {Effect} */
            Q(this, Nn).parent
          ), null;
        } finally {
          Me(this, Kr, !1);
        }
      }));
    });
  }
}
Tn = new WeakMap(), _n = new WeakMap(), co = new WeakMap(), Pn = new WeakMap(), Wr = new WeakMap(), Nn = new WeakMap(), In = new WeakMap(), rn = new WeakMap(), Un = new WeakMap(), mr = new WeakMap(), Xr = new WeakMap(), gr = new WeakMap(), Kr = new WeakMap(), pr = new WeakMap(), as = new WeakMap(), ss = new WeakMap(), Jt = new WeakSet(), Nd = function() {
  try {
    Me(this, In, Bt(() => Q(this, Wr).call(this, Q(this, _n))));
  } catch (e) {
    this.error(e);
  }
  Me(this, Tn, !1);
}, Ud = function() {
  const e = Q(this, Pn).pending;
  e && (Me(this, rn, Bt(() => e(Q(this, _n)))), rr.enqueue(() => {
    Me(this, In, kt(this, Jt, Va).call(this, () => (rr.ensure(), Bt(() => Q(this, Wr).call(this, Q(this, _n)))))), Q(this, gr) > 0 ? kt(this, Jt, Ga).call(this) : (Er(
      /** @type {Effect} */
      Q(this, rn),
      () => {
        Me(this, rn, null);
      }
    ), Me(this, Tn, !1));
  }));
}, /**
 * @param {() => Effect | null} fn
 */
Va = function(e) {
  var n = ke, r = Ne, i = it;
  Vn(Q(this, Nn)), an(Q(this, Nn)), Oi(Q(this, Nn).ctx);
  try {
    return e();
  } catch (a) {
    return au(a), null;
  } finally {
    Vn(n), an(r), Oi(i);
  }
}, Ga = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    Q(this, Pn).pending
  );
  Q(this, In) !== null && (Me(this, mr, document.createDocumentFragment()), kd(Q(this, In), Q(this, mr))), Q(this, rn) === null && Me(this, rn, Bt(() => e(Q(this, _n))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
zs = function(e) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && kt(n = this.parent, Jt, zs).call(n, e);
    return;
  }
  Me(this, gr, Q(this, gr) + e), Q(this, gr) === 0 && (Me(this, Tn, !1), Q(this, rn) && Er(Q(this, rn), () => {
    Me(this, rn, null);
  }), Q(this, mr) && (Q(this, _n).before(Q(this, mr)), Me(this, mr, null)), ir(() => {
    rr.ensure().flush();
  }));
};
function kd(t, e) {
  for (var n = t.nodes_start, r = t.nodes_end; n !== null; ) {
    var i = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ya(n)
    );
    e.append(n), n = i;
  }
}
function cu(t, e, n) {
  const r = Ia() ? ds : _o;
  if (e.length === 0) {
    n(t.map(r));
    return;
  }
  var i = et, a = (
    /** @type {Effect} */
    ke
  ), s = Bd();
  Promise.all(e.map((c) => /* @__PURE__ */ Fd(c))).then((c) => {
    s();
    try {
      n([...t.map(r), ...c]);
    } catch (l) {
      a.f & ri || Ri(l, a);
    }
    i == null || i.deactivate(), Ws();
  }).catch((c) => {
    Ri(c, a);
  });
}
function Bd() {
  var t = ke, e = Ne, n = it, r = et;
  return function() {
    Vn(t), an(e), Oi(n), r == null || r.activate();
  };
}
function Ws() {
  Vn(null), an(null), Oi(null);
}
// @__NO_SIDE_EFFECTS__
function ds(t) {
  var e = $t | fn, n = Ne !== null && Ne.f & $t ? (
    /** @type {Derived} */
    Ne
  ) : null;
  return ke === null || n !== null && n.f & yn ? e |= yn : ke.f |= Vi, {
    ctx: it,
    deps: null,
    effects: null,
    equals: tu,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      wt
    ),
    wv: 0,
    parent: n ?? ke,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Fd(t, e) {
  let n = (
    /** @type {Effect | null} */
    ke
  );
  n === null && fd();
  var r = (
    /** @type {Boundary} */
    n.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = ei(
    /** @type {V} */
    wt
  ), s = !Ne, c = /* @__PURE__ */ new Map();
  return Qd(() => {
    var f;
    var l = $l();
    i = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(Ws);
    } catch (m) {
      l.reject(m), Ws();
    }
    var u = (
      /** @type {Batch} */
      et
    ), d = r.is_pending();
    s && (r.update_pending_count(1), d || (u.increment(), (f = c.get(u)) == null || f.reject(pi), c.delete(u), c.set(u, l)));
    const h = (m, v = void 0) => {
      if (d || u.activate(), v)
        v !== pi && (a.f |= Zr, Mi(a, v));
      else {
        a.f & Zr && (a.f ^= Zr), Mi(a, m);
        for (const [g, _] of c) {
          if (c.delete(g), g === u) break;
          _.reject(pi);
        }
      }
      s && (r.update_pending_count(-1), d || u.decrement());
    };
    l.promise.then(h, (m) => h(null, m || "unknown"));
  }), fs(() => {
    for (const l of c.values())
      l.reject(pi);
  }), new Promise((l) => {
    function u(d) {
      function h() {
        d === i ? l(a) : u(i);
      }
      d.then(h, h);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function fe(t) {
  const e = /* @__PURE__ */ ds(t);
  return Cu(e), e;
}
// @__NO_SIDE_EFFECTS__
function _o(t) {
  const e = /* @__PURE__ */ ds(t);
  return e.equals = nu, e;
}
function du(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      Pt(
        /** @type {Effect} */
        e[n]
      );
  }
}
function Vd(t) {
  for (var e = t.parent; e !== null; ) {
    if (!(e.f & $t))
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function Io(t) {
  var e, n = ke;
  Vn(Vd(t));
  try {
    du(t), e = Lu(t);
  } finally {
    Vn(n);
  }
  return e;
}
function fu(t) {
  var e = Io(t);
  if (t.equals(e) || (t.v = e, t.wv = Tu()), !ii)
    if (Ht !== null)
      Ht.set(t, t.v);
    else {
      var n = (br || t.f & yn) && t.deps !== null ? xr : Ft;
      Yt(t, n);
    }
}
const yr = /* @__PURE__ */ new Map();
function ei(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: tu,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function ve(t, e) {
  const n = ei(t);
  return Cu(n), n;
}
// @__NO_SIDE_EFFECTS__
function hu(t, e = !1, n = !0) {
  var i;
  const r = ei(t);
  return e || (r.equals = nu), Gi && n && it !== null && it.l !== null && ((i = it.l).s ?? (i.s = [])).push(r), r;
}
function q(t, e, n = !1) {
  Ne !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ln || Ne.f & jo) && Ia() && Ne.f & ($t | Cr | us | jo) && !(Zt != null && Zt.includes(t)) && Id();
  let r = n ? ge(e) : e;
  return Mi(t, r);
}
function Mi(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    ii ? yr.set(t, e) : yr.set(t, n), t.v = e;
    var r = rr.ensure();
    r.capture(t, n), t.f & $t && (t.f & fn && Io(
      /** @type {Derived} */
      t
    ), Yt(t, t.f & yn ? xr : Ft)), t.wv = Tu(), vu(t, fn), Ia() && ke !== null && ke.f & Ft && !(ke.f & (sr | ni)) && (bn === null ? ef([t]) : bn.push(t));
  }
  return e;
}
function ca(t) {
  q(t, t.v + 1);
}
function vu(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = Ia(), i = n.length, a = 0; a < i; a++) {
      var s = n[a], c = s.f;
      if (!(!r && s === ke)) {
        var l = (c & fn) === 0;
        l && Yt(s, e), c & $t ? vu(
          /** @type {Derived} */
          s,
          xr
        ) : l && (c & Cr && Jn !== null && Jn.push(
          /** @type {Effect} */
          s
        ), $r(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function ge(t) {
  if (typeof t != "object" || t === null || Bn in t)
    return t;
  const e = ho(t);
  if (e !== od && e !== ld)
    return t;
  var n = /* @__PURE__ */ new Map(), r = os(t), i = /* @__PURE__ */ ve(0), a = Yr, s = (c) => {
    if (Yr === a)
      return c();
    var l = Ne, u = Yr;
    an(null), Yo(a);
    var d = c();
    return an(l), Yo(u), d;
  };
  return r && n.set("length", /* @__PURE__ */ ve(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(c, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && bd();
        var d = n.get(l);
        return d === void 0 ? d = s(() => {
          var h = /* @__PURE__ */ ve(u.value);
          return n.set(l, h), h;
        }) : q(d, u.value, !0), !0;
      },
      deleteProperty(c, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in c) {
            const d = s(() => /* @__PURE__ */ ve(wt));
            n.set(l, d), ca(i);
          }
        } else
          q(u, wt), ca(i);
        return !0;
      },
      get(c, l, u) {
        var m;
        if (l === Bn)
          return t;
        var d = n.get(l), h = l in c;
        if (d === void 0 && (!h || (m = Ir(c, l)) != null && m.writable) && (d = s(() => {
          var v = ge(h ? c[l] : wt), g = /* @__PURE__ */ ve(v);
          return g;
        }), n.set(l, d)), d !== void 0) {
          var f = o(d);
          return f === wt ? void 0 : f;
        }
        return Reflect.get(c, l, u);
      },
      getOwnPropertyDescriptor(c, l) {
        var u = Reflect.getOwnPropertyDescriptor(c, l);
        if (u && "value" in u) {
          var d = n.get(l);
          d && (u.value = o(d));
        } else if (u === void 0) {
          var h = n.get(l), f = h == null ? void 0 : h.v;
          if (h !== void 0 && f !== wt)
            return {
              enumerable: !0,
              configurable: !0,
              value: f,
              writable: !0
            };
        }
        return u;
      },
      has(c, l) {
        var f;
        if (l === Bn)
          return !0;
        var u = n.get(l), d = u !== void 0 && u.v !== wt || Reflect.has(c, l);
        if (u !== void 0 || ke !== null && (!d || (f = Ir(c, l)) != null && f.writable)) {
          u === void 0 && (u = s(() => {
            var m = d ? ge(c[l]) : wt, v = /* @__PURE__ */ ve(m);
            return v;
          }), n.set(l, u));
          var h = o(u);
          if (h === wt)
            return !1;
        }
        return d;
      },
      set(c, l, u, d) {
        var C;
        var h = n.get(l), f = l in c;
        if (r && l === "length")
          for (var m = u; m < /** @type {Source<number>} */
          h.v; m += 1) {
            var v = n.get(m + "");
            v !== void 0 ? q(v, wt) : m in c && (v = s(() => /* @__PURE__ */ ve(wt)), n.set(m + "", v));
          }
        if (h === void 0)
          (!f || (C = Ir(c, l)) != null && C.writable) && (h = s(() => /* @__PURE__ */ ve(void 0)), q(h, ge(u)), n.set(l, h));
        else {
          f = h.v !== wt;
          var g = s(() => ge(u));
          q(h, g);
        }
        var _ = Reflect.getOwnPropertyDescriptor(c, l);
        if (_ != null && _.set && _.set.call(d, u), !f) {
          if (r && typeof l == "string") {
            var S = (
              /** @type {Source<number>} */
              n.get("length")
            ), E = Number(l);
            Number.isInteger(E) && E >= S.v && q(S, E + 1);
          }
          ca(i);
        }
        return !0;
      },
      ownKeys(c) {
        o(i);
        var l = Reflect.ownKeys(c).filter((h) => {
          var f = n.get(h);
          return f === void 0 || f.v !== wt;
        });
        for (var [u, d] of n)
          d.v !== wt && !(u in c) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        _d();
      }
    }
  );
}
function zo(t) {
  try {
    if (t !== null && typeof t == "object" && Bn in t)
      return t[Bn];
  } catch {
  }
  return t;
}
function Gd(t, e) {
  return Object.is(zo(t), zo(e));
}
var Wo, mu, gu, pu, bu;
function jd() {
  if (Wo === void 0) {
    Wo = window, mu = document, gu = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    pu = Ir(e, "firstChild").get, bu = Ir(e, "nextSibling").get, Go(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), Go(n) && (n.__t = void 0);
  }
}
function wr(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Di(t) {
  return pu.call(t);
}
// @__NO_SIDE_EFFECTS__
function ya(t) {
  return bu.call(t);
}
function Ie(t, e) {
  return /* @__PURE__ */ Di(t);
}
function Z(t, e = !1) {
  {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Di(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ ya(n) : n;
  }
}
function _e(t, e = 1, n = !1) {
  let r = t;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ ya(r);
  return r;
}
function qd(t) {
  t.textContent = "";
}
function yo() {
  return !1;
}
function zd(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, ir(() => {
      document.activeElement === n && t.focus();
    });
  }
}
let Xo = !1;
function Wd() {
  Xo || (Xo = !0, document.addEventListener(
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
function ji(t) {
  var e = Ne, n = ke;
  an(null), Vn(null);
  try {
    return t();
  } finally {
    an(e), Vn(n);
  }
}
function Eo(t, e, n, r = n) {
  t.addEventListener(e, () => ji(n));
  const i = t.__on_r;
  i ? t.__on_r = () => {
    i(), r(!0);
  } : t.__on_r = () => r(!0), Wd();
}
function Xd(t) {
  ke === null && Ne === null && md(), Ne !== null && Ne.f & yn && ke === null && vd(), ii && hd();
}
function Kd(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function or(t, e, n, r = !0) {
  var i = ke;
  i !== null && i.f & On && (t |= On);
  var a = {
    ctx: it,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | fn,
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
      ha(a), a.f |= ls;
    } catch (l) {
      throw Pt(a), l;
    }
  else e !== null && $r(a);
  if (r) {
    var s = a;
    if (n && s.deps === null && s.teardown === null && s.nodes_start === null && s.first === s.last && // either `null`, or a singular child
    !(s.f & Vi) && (s = s.first), s !== null && (s.parent = i, i !== null && Kd(s, i), Ne !== null && Ne.f & $t && !(t & ni))) {
      var c = (
        /** @type {Derived} */
        Ne
      );
      (c.effects ?? (c.effects = [])).push(s);
    }
  }
  return a;
}
function Zd() {
  return Ne !== null && !Ln;
}
function fs(t) {
  const e = or(mo, null, !1);
  return Yt(e, Ft), e.teardown = t, e;
}
function xe(t) {
  Xd();
  var e = (
    /** @type {Effect} */
    ke.f
  ), n = !Ne && (e & sr) !== 0 && (e & ls) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      it
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return _u(t);
}
function _u(t) {
  return or(vo | cd, t, !1);
}
function Yd(t) {
  rr.ensure();
  const e = or(ni | Vi, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Er(e, () => {
      Pt(e), r(void 0);
    }) : (Pt(e), r(void 0));
  });
}
function Lr(t) {
  return or(vo, t, !1);
}
function Qd(t) {
  return or(us | Vi, t, !0);
}
function Ea(t, e = 0) {
  return or(mo | e, t, !0);
}
function He(t, e = [], n = []) {
  cu(e, n, (r) => {
    or(mo, () => t(...r.map(o)), !0);
  });
}
function Or(t, e = 0) {
  var n = or(Cr | e, t, !0);
  return n;
}
function Bt(t, e = !0) {
  return or(sr | Vi, t, !0, e);
}
function Iu(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = ii, r = Ne;
    Zo(!0), an(null);
    try {
      e.call(null);
    } finally {
      Zo(n), an(r);
    }
  }
}
function yu(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && ji(() => {
      i.abort(pi);
    });
    var r = n.next;
    n.f & ni ? n.parent = null : Pt(n, e), n = r;
  }
}
function Jd(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    e.f & sr || Pt(e), e = n;
  }
}
function Pt(t, e = !0) {
  var n = !1;
  (e || t.f & ud) && t.nodes_start !== null && t.nodes_end !== null && ($d(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), yu(t, e && !n), Ka(t, 0), Yt(t, ri);
  var r = t.transitions;
  if (r !== null)
    for (const a of r)
      a.stop();
  Iu(t);
  var i = t.parent;
  i !== null && i.first !== null && Eu(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function $d(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ya(t)
    );
    t.remove(), t = n;
  }
}
function Eu(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Er(t, e) {
  var n = [];
  Ao(t, n, !0), Au(n, () => {
    Pt(t), e && e();
  });
}
function Au(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var i of t)
      i.out(r);
  } else
    e();
}
function Ao(t, e, n) {
  if (!(t.f & On)) {
    if (t.f ^= On, t.transitions !== null)
      for (const s of t.transitions)
        (s.is_global || n) && e.push(s);
    for (var r = t.first; r !== null; ) {
      var i = r.next, a = (r.f & Tr) !== 0 || (r.f & sr) !== 0;
      Ao(r, e, a ? n : !1), r = i;
    }
  }
}
function hs(t) {
  Su(t, !0);
}
function Su(t, e) {
  if (t.f & On) {
    t.f ^= On, t.f & Ft || (Yt(t, fn), $r(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & Tr) !== 0 || (n.f & sr) !== 0;
      Su(n, i ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || e) && a.in();
  }
}
let yi = !1;
function Ko(t) {
  yi = t;
}
let ii = !1;
function Zo(t) {
  ii = t;
}
let Ne = null, Ln = !1;
function an(t) {
  Ne = t;
}
let ke = null;
function Vn(t) {
  ke = t;
}
let Zt = null;
function Cu(t) {
  Ne !== null && (Zt === null ? Zt = [t] : Zt.push(t));
}
let zt = null, cn = 0, bn = null;
function ef(t) {
  bn = t;
}
let xu = 1, fa = 0, Yr = fa;
function Yo(t) {
  Yr = t;
}
let br = !1;
function Tu() {
  return ++xu;
}
function vs(t) {
  var h;
  var e = t.f;
  if (e & fn)
    return !0;
  if (e & xr) {
    var n = t.deps, r = (e & yn) !== 0;
    if (n !== null) {
      var i, a, s = (e & Xa) !== 0, c = r && ke !== null && !br, l = n.length;
      if ((s || c) && (ke === null || !(ke.f & ri))) {
        var u = (
          /** @type {Derived} */
          t
        ), d = u.parent;
        for (i = 0; i < l; i++)
          a = n[i], (s || !((h = a == null ? void 0 : a.reactions) != null && h.includes(u))) && (a.reactions ?? (a.reactions = [])).push(u);
        s && (u.f ^= Xa), c && d !== null && !(d.f & yn) && (u.f ^= yn);
      }
      for (i = 0; i < l; i++)
        if (a = n[i], vs(
          /** @type {Derived} */
          a
        ) && fu(
          /** @type {Derived} */
          a
        ), a.wv > t.wv)
          return !0;
    }
    (!r || ke !== null && !br) && Yt(t, Ft);
  }
  return !1;
}
function wu(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !(Zt != null && Zt.includes(t)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a.f & $t ? wu(
        /** @type {Derived} */
        a,
        e,
        !1
      ) : e === a && (n ? Yt(a, fn) : a.f & Ft && Yt(a, xr), $r(
        /** @type {Effect} */
        a
      ));
    }
}
function Lu(t) {
  var g;
  var e = zt, n = cn, r = bn, i = Ne, a = br, s = Zt, c = it, l = Ln, u = Yr, d = t.f;
  zt = /** @type {null | Value[]} */
  null, cn = 0, bn = null, br = (d & yn) !== 0 && (Ln || !yi || Ne === null), Ne = d & (sr | ni) ? null : t, Zt = null, Oi(t.ctx), Ln = !1, Yr = ++fa, t.ac !== null && (ji(() => {
    t.ac.abort(pi);
  }), t.ac = null);
  try {
    t.f |= Fs;
    var h = (
      /** @type {Function} */
      t.fn
    ), f = h(), m = t.deps;
    if (zt !== null) {
      var v;
      if (Ka(t, cn), m !== null && cn > 0)
        for (m.length = cn + zt.length, v = 0; v < zt.length; v++)
          m[cn + v] = zt[v];
      else
        t.deps = m = zt;
      if (!br || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      d & $t && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (v = cn; v < m.length; v++)
          ((g = m[v]).reactions ?? (g.reactions = [])).push(t);
    } else m !== null && cn < m.length && (Ka(t, cn), m.length = cn);
    if (Ia() && bn !== null && !Ln && m !== null && !(t.f & ($t | xr | fn)))
      for (v = 0; v < /** @type {Source[]} */
      bn.length; v++)
        wu(
          bn[v],
          /** @type {Effect} */
          t
        );
    return i !== null && i !== t && (fa++, bn !== null && (r === null ? r = bn : r.push(.../** @type {Source[]} */
    bn))), t.f & Zr && (t.f ^= Zr), f;
  } catch (_) {
    return au(_);
  } finally {
    t.f ^= Fs, zt = e, cn = n, bn = r, Ne = i, br = a, Zt = s, Oi(c), Ln = l, Yr = u;
  }
}
function tf(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = sd.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && e.f & $t && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (zt === null || !zt.includes(e)) && (Yt(e, xr), e.f & (yn | Xa) || (e.f ^= Xa), du(
    /** @type {Derived} **/
    e
  ), Ka(
    /** @type {Derived} **/
    e,
    0
  ));
}
function Ka(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      tf(t, n[r]);
}
function ha(t) {
  var e = t.f;
  if (!(e & ri)) {
    Yt(t, Ft);
    var n = ke, r = yi;
    ke = t, yi = !0;
    try {
      e & Cr ? Jd(t) : yu(t), Iu(t);
      var i = Lu(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = xu;
      var a;
      Yl && Cd && t.f & fn && t.deps;
    } finally {
      yi = r, ke = n;
    }
  }
}
async function Ou() {
  await Promise.resolve(), Od();
}
function o(t) {
  var e = t.f, n = (e & $t) !== 0;
  if (Ne !== null && !Ln) {
    var r = ke !== null && (ke.f & ri) !== 0;
    if (!r && !(Zt != null && Zt.includes(t))) {
      var i = Ne.deps;
      if (Ne.f & Fs)
        t.rv < fa && (t.rv = fa, zt === null && i !== null && i[cn] === t ? cn++ : zt === null ? zt = [t] : (!br || !zt.includes(t)) && zt.push(t));
      else {
        (Ne.deps ?? (Ne.deps = [])).push(t);
        var a = t.reactions;
        a === null ? t.reactions = [Ne] : a.includes(Ne) || a.push(Ne);
      }
    }
  } else if (n && /** @type {Derived} */
  t.deps === null && /** @type {Derived} */
  t.effects === null) {
    var s = (
      /** @type {Derived} */
      t
    ), c = s.parent;
    c !== null && !(c.f & yn) && (s.f ^= yn);
  }
  if (ii) {
    if (yr.has(t))
      return yr.get(t);
    if (n) {
      s = /** @type {Derived} */
      t;
      var l = s.v;
      return (!(s.f & Ft) && s.reactions !== null || Ru(s)) && (l = Io(s)), yr.set(s, l), l;
    }
  } else if (n) {
    if (s = /** @type {Derived} */
    t, Ht != null && Ht.has(s))
      return Ht.get(s);
    vs(s) && fu(s);
  }
  if (Ht != null && Ht.has(t))
    return Ht.get(t);
  if (t.f & Zr)
    throw t.v;
  return t.v;
}
function Ru(t) {
  if (t.v === wt) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (yr.has(e) || e.f & $t && Ru(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Gn(t) {
  var e = Ln;
  try {
    return Ln = !0, t();
  } finally {
    Ln = e;
  }
}
const nf = -7169;
function Yt(t, e) {
  t.f = t.f & nf | e;
}
function rf(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (Bn in t)
      Xs(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && Bn in n && Xs(n);
      }
  }
}
function Xs(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        Xs(t[r], e);
      } catch {
      }
    const n = ho(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Ql(n);
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
const Mu = /* @__PURE__ */ new Set(), Ks = /* @__PURE__ */ new Set();
function So(t, e, n, r = {}) {
  function i(a) {
    if (r.capture || oa.call(e, a), !a.cancelBubble)
      return ji(() => n == null ? void 0 : n.call(this, a));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? ir(() => {
    e.addEventListener(t, i, r);
  }) : e.addEventListener(t, i, r), i;
}
function af(t, e, n, r = {}) {
  var i = So(e, t, n, r);
  return () => {
    t.removeEventListener(e, i, r);
  };
}
function sa(t, e, n, r, i) {
  var a = { capture: r, passive: i }, s = So(t, e, n, a);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && fs(() => {
    e.removeEventListener(t, s, a);
  });
}
function hn(t) {
  for (var e = 0; e < t.length; e++)
    Mu.add(t[e]);
  for (var n of Ks)
    n(t);
}
let Qo = null;
function oa(t) {
  var E;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = ((E = t.composedPath) == null ? void 0 : E.call(t)) || [], a = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  Qo = t;
  var s = 0, c = Qo === t && t.__root;
  if (c) {
    var l = i.indexOf(c);
    if (l !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var u = i.indexOf(e);
    if (u === -1)
      return;
    l <= u && (s = l);
  }
  if (a = /** @type {Element} */
  i[s] || t.target, a !== e) {
    Wa(t, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var d = Ne, h = ke;
    an(null), Vn(null);
    try {
      for (var f, m = []; a !== null; ) {
        var v = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var g = a["__" + r];
          if (g != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === a))
            if (os(g)) {
              var [_, ...S] = g;
              _.apply(a, [t, ...S]);
            } else
              g.call(a, t);
        } catch (C) {
          f ? m.push(C) : f = C;
        }
        if (t.cancelBubble || v === e || v === null)
          break;
        a = v;
      }
      if (f) {
        for (let C of m)
          queueMicrotask(() => {
            throw C;
          });
        throw f;
      }
    } finally {
      t.__root = e, delete t.currentTarget, an(d), Vn(h);
    }
  }
}
function Du(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function Hi(t, e) {
  var n = (
    /** @type {Effect} */
    ke
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function pe(t, e) {
  var n = (e & 1) !== 0, r = (e & 2) !== 0, i, a = !t.startsWith("<!>");
  return () => {
    i === void 0 && (i = Du(a ? t : "<!>" + t), n || (i = /** @type {Node} */
    /* @__PURE__ */ Di(i)));
    var s = (
      /** @type {TemplateNode} */
      r || gu ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Di(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Hi(c, l);
    } else
      Hi(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function sf(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, a;
  return () => {
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        Du(i)
      ), c = (
        /** @type {Element} */
        /* @__PURE__ */ Di(s)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ Di(c);
    }
    var l = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return Hi(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function sn(t, e) {
  return /* @__PURE__ */ sf(t, e, "svg");
}
function Kt(t = "") {
  {
    var e = wr(t + "");
    return Hi(e, e), e;
  }
}
function $() {
  var t = document.createDocumentFragment(), e = document.createComment(""), n = wr();
  return t.append(e, n), Hi(e, n), t;
}
function w(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function of(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const lf = [
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
function uf(t) {
  return lf.includes(t);
}
const cf = {
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
function df(t) {
  return t = t.toLowerCase(), cf[t] ?? t;
}
const ff = ["touchstart", "touchmove"];
function hf(t) {
  return ff.includes(t);
}
let Za = !0;
function Jo(t) {
  Za = t;
}
function ht(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function vf(t, e) {
  return mf(t, e);
}
const di = /* @__PURE__ */ new Map();
function mf(t, { target: e, anchor: n, props: r = {}, events: i, context: a, intro: s = !0 }) {
  jd();
  var c = /* @__PURE__ */ new Set(), l = (h) => {
    for (var f = 0; f < h.length; f++) {
      var m = h[f];
      if (!c.has(m)) {
        c.add(m);
        var v = hf(m);
        e.addEventListener(m, oa, { passive: v });
        var g = di.get(m);
        g === void 0 ? (document.addEventListener(m, oa, { passive: v }), di.set(m, 1)) : di.set(m, g + 1);
      }
    }
  };
  l(fo(Mu)), Ks.add(l);
  var u = void 0, d = Yd(() => {
    var h = n ?? e.appendChild(wr());
    return Hd(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (f) => {
        if (a) {
          we({});
          var m = (
            /** @type {ComponentContext} */
            it
          );
          m.c = a;
        }
        i && (r.$$events = i), Za = s, u = t(f, r) || {}, Za = !0, a && Le();
      }
    ), () => {
      var v;
      for (var f of c) {
        e.removeEventListener(f, oa);
        var m = (
          /** @type {number} */
          di.get(f)
        );
        --m === 0 ? (document.removeEventListener(f, oa), di.delete(f)) : di.set(f, m);
      }
      Ks.delete(l), h !== n && ((v = h.parentNode) == null || v.removeChild(h));
    };
  });
  return gf.set(u, d), u;
}
let gf = /* @__PURE__ */ new WeakMap();
function Ae(t, e, ...n) {
  var r = t, i = he, a;
  Or(() => {
    i !== (i = e()) && (a && (Pt(a), a = null), a = Bt(() => (
      /** @type {SnippetFn} */
      i(r, ...n)
    )));
  }, Tr);
}
function ot(t) {
  it === null && po(), Gi && it.l !== null ? pf(it).m.push(t) : xe(() => {
    const e = Gn(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Sn(t) {
  it === null && po(), ot(() => () => Gn(t));
}
function pf(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
function ne(t, e, n = !1) {
  var r = t, i = null, a = null, s = wt, c = n ? Tr : 0, l = !1;
  const u = (m, v = !0) => {
    l = !0, f(v, m);
  };
  var d = null;
  function h() {
    d !== null && (d.lastChild.remove(), r.before(d), d = null);
    var m = s ? i : a, v = s ? a : i;
    m && hs(m), v && Er(v, () => {
      s ? a = null : i = null;
    });
  }
  const f = (m, v) => {
    if (s !== (s = m)) {
      var g = yo(), _ = r;
      if (g && (d = document.createDocumentFragment(), d.append(_ = wr())), s ? i ?? (i = v && Bt(() => v(_))) : a ?? (a = v && Bt(() => v(_))), g) {
        var S = (
          /** @type {Batch} */
          et
        ), E = s ? i : a, C = s ? a : i;
        E && S.skipped_effects.delete(E), C && S.skipped_effects.add(C), S.add_callback(h);
      } else
        h();
    }
  };
  Or(() => {
    l = !1, e(u), l || f(null, null);
  }, c);
}
function bi(t, e) {
  return e;
}
function bf(t, e, n) {
  for (var r = t.items, i = [], a = e.length, s = 0; s < a; s++)
    Ao(e[s].e, i, !0);
  var c = a > 0 && i.length === 0 && n !== null;
  if (c) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    qd(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), Hn(t, e[0].prev, e[a - 1].next);
  }
  Au(i, () => {
    for (var u = 0; u < a; u++) {
      var d = e[u];
      c || (r.delete(d.k), Hn(t, d.prev, d.next)), Pt(d.e, !c);
    }
  });
}
function er(t, e, n, r, i, a = null) {
  var s = t, c = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, l = (e & 4) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      t
    );
    s = u.appendChild(wr());
  }
  var d = null, h = !1, f = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ _o(() => {
    var S = n();
    return os(S) ? S : S == null ? [] : fo(S);
  }), v, g;
  function _() {
    _f(
      g,
      v,
      c,
      f,
      s,
      i,
      e,
      r,
      n
    ), a !== null && (v.length === 0 ? d ? hs(d) : d = Bt(() => a(s)) : d !== null && Er(d, () => {
      d = null;
    }));
  }
  Or(() => {
    g ?? (g = /** @type {Effect} */
    ke), v = /** @type {V[]} */
    o(m);
    var S = v.length;
    if (!(h && S === 0)) {
      h = S === 0;
      var E, C, b, y;
      if (yo()) {
        var I = /* @__PURE__ */ new Set(), T = (
          /** @type {Batch} */
          et
        );
        for (C = 0; C < S; C += 1) {
          b = v[C], y = r(b, C);
          var A = c.items.get(y) ?? f.get(y);
          A ? e & 3 && Hu(A, b, C, e) : (E = Pu(
            null,
            c,
            null,
            null,
            b,
            y,
            C,
            i,
            e,
            n,
            !0
          ), f.set(y, E)), I.add(y);
        }
        for (const [x, D] of c.items)
          I.has(x) || T.skipped_effects.add(D.e);
        T.add_callback(_);
      } else
        _();
      o(m);
    }
  });
}
function _f(t, e, n, r, i, a, s, c, l) {
  var J, M, L, P;
  var u = (s & 8) !== 0, d = (s & 3) !== 0, h = e.length, f = n.items, m = n.first, v = m, g, _ = null, S, E = [], C = [], b, y, I, T;
  if (u)
    for (T = 0; T < h; T += 1)
      b = e[T], y = c(b, T), I = f.get(y), I !== void 0 && ((J = I.a) == null || J.measure(), (S ?? (S = /* @__PURE__ */ new Set())).add(I));
  for (T = 0; T < h; T += 1) {
    if (b = e[T], y = c(b, T), I = f.get(y), I === void 0) {
      var A = r.get(y);
      if (A !== void 0) {
        r.delete(y), f.set(y, A);
        var x = _ ? _.next : v;
        Hn(n, _, A), Hn(n, A, x), Es(A, x, i), _ = A;
      } else {
        var D = v ? (
          /** @type {TemplateNode} */
          v.e.nodes_start
        ) : i;
        _ = Pu(
          D,
          n,
          _,
          _ === null ? n.first : _.next,
          b,
          y,
          T,
          a,
          s,
          l
        );
      }
      f.set(y, _), E = [], C = [], v = _.next;
      continue;
    }
    if (d && Hu(I, b, T, s), I.e.f & On && (hs(I.e), u && ((M = I.a) == null || M.unfix(), (S ?? (S = /* @__PURE__ */ new Set())).delete(I))), I !== v) {
      if (g !== void 0 && g.has(I)) {
        if (E.length < C.length) {
          var X = C[0], k;
          _ = X.prev;
          var B = E[0], me = E[E.length - 1];
          for (k = 0; k < E.length; k += 1)
            Es(E[k], X, i);
          for (k = 0; k < C.length; k += 1)
            g.delete(C[k]);
          Hn(n, B.prev, me.next), Hn(n, _, B), Hn(n, me, X), v = X, _ = me, T -= 1, E = [], C = [];
        } else
          g.delete(I), Es(I, v, i), Hn(n, I.prev, I.next), Hn(n, I, _ === null ? n.first : _.next), Hn(n, _, I), _ = I;
        continue;
      }
      for (E = [], C = []; v !== null && v.k !== y; )
        v.e.f & On || (g ?? (g = /* @__PURE__ */ new Set())).add(v), C.push(v), v = v.next;
      if (v === null)
        continue;
      I = v;
    }
    E.push(I), _ = I, v = I.next;
  }
  if (v !== null || g !== void 0) {
    for (var V = g === void 0 ? [] : fo(g); v !== null; )
      v.e.f & On || V.push(v), v = v.next;
    var N = V.length;
    if (N > 0) {
      var H = s & 4 && h === 0 ? i : null;
      if (u) {
        for (T = 0; T < N; T += 1)
          (L = V[T].a) == null || L.measure();
        for (T = 0; T < N; T += 1)
          (P = V[T].a) == null || P.fix();
      }
      bf(n, V, H);
    }
  }
  u && ir(() => {
    var Ee;
    if (S !== void 0)
      for (I of S)
        (Ee = I.a) == null || Ee.apply();
  }), t.first = n.first && n.first.e, t.last = _ && _.e;
  for (var K of r.values())
    Pt(K.e);
  r.clear();
}
function Hu(t, e, n, r) {
  r & 1 && Mi(t.v, e), r & 2 ? Mi(
    /** @type {Value<number>} */
    t.i,
    n
  ) : t.i = n;
}
function Pu(t, e, n, r, i, a, s, c, l, u, d) {
  var h = (l & 1) !== 0, f = (l & 16) === 0, m = h ? f ? /* @__PURE__ */ hu(i, !1, !1) : ei(i) : i, v = l & 2 ? ei(s) : s, g = {
    i: v,
    v: m,
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
      _.append(t = wr());
    }
    return g.e = Bt(() => c(
      /** @type {Node} */
      t,
      m,
      v,
      u
    ), Sd), g.e.prev = n && n.e, g.e.next = r && r.e, n === null ? d || (e.first = g) : (n.next = g, n.e.next = g.e), r !== null && (r.prev = g, r.e.prev = g.e), g;
  } finally {
  }
}
function Es(t, e, n) {
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
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ya(a)
    );
    i.before(a), a = s;
  }
}
function Hn(t, e, n) {
  e === null ? t.first = n : (e.next = n, e.e.next = n && n.e), n !== null && (n.prev = e, n.e.prev = e && e.e);
}
function ai(t, e, n) {
  var r = t, i, a, s = null, c = null;
  function l() {
    a && (Er(a), a = null), s && (s.lastChild.remove(), r.before(s), s = null), a = c, c = null;
  }
  Or(() => {
    if (i !== (i = e())) {
      var u = yo();
      if (i) {
        var d = r;
        u && (s = document.createDocumentFragment(), s.append(d = wr()), a && et.skipped_effects.add(a)), c = Bt(() => n(d, i));
      }
      u ? et.add_callback(l) : l();
    }
  }, Tr);
}
function $o(t, e, n, r, i, a) {
  var s, c, l = null, u = (
    /** @type {TemplateNode} */
    t
  ), d;
  Or(() => {
    const h = e() || null;
    var f = h === "svg" ? id : null;
    h !== s && (d && (h === null ? Er(d, () => {
      d = null, c = null;
    }) : h === c ? hs(d) : (Pt(d), Jo(!1))), h && h !== c && (d = Bt(() => {
      if (l = f ? document.createElementNS(f, h) : document.createElement(h), Hi(l, l), r) {
        var m = (
          /** @type {TemplateNode} */
          l.appendChild(wr())
        );
        r(l, m);
      }
      ke.nodes_end = l, u.before(l);
    })), s = h, s && (c = s), Jo(!0));
  }, Tr);
}
function Ue(t, e, n) {
  Lr(() => {
    var r = Gn(() => e(t, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      Ea(() => {
        var s = n();
        rf(s), i && bo(a, s) && (a = s, r.update(s));
      }), i = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function If(t, e) {
  var n = void 0, r;
  Or(() => {
    n !== (n = e()) && (r && (Pt(r), r = null), n && (r = Bt(() => {
      Lr(() => (
        /** @type {(node: Element) => void} */
        n(t)
      ));
    })));
  });
}
function Nu(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var i = t.length;
    for (e = 0; e < i; e++) t[e] && (n = Nu(t[e])) && (r && (r += " "), r += n);
  } else for (n in t) t[n] && (r && (r += " "), r += n);
  return r;
}
function yf() {
  for (var t, e, n = 0, r = "", i = arguments.length; n < i; n++) (t = arguments[n]) && (e = Nu(t)) && (r && (r += " "), r += e);
  return r;
}
function Uu(t) {
  return typeof t == "object" ? yf(t) : t ?? "";
}
const el = [...` 	
\r\f \v\uFEFF`];
function Ef(t, e, n) {
  var r = t == null ? "" : "" + t;
  if (e && (r = r ? r + " " + e : e), n) {
    for (var i in n)
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var a = i.length, s = 0; (s = r.indexOf(i, s)) >= 0; ) {
          var c = s + a;
          (s === 0 || el.includes(r[s - 1])) && (c === r.length || el.includes(r[c])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(c + 1) : s = c;
        }
  }
  return r === "" ? null : r;
}
function tl(t, e = !1) {
  var n = e ? " !important;" : ";", r = "";
  for (var i in t) {
    var a = t[i];
    a != null && a !== "" && (r += " " + i + ": " + a + n);
  }
  return r;
}
function As(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function Af(t, e) {
  if (e) {
    var n = "", r, i;
    if (Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, s = 0, c = !1, l = [];
      r && l.push(...Object.keys(r).map(As)), i && l.push(...Object.keys(i).map(As));
      var u = 0, d = -1;
      const g = t.length;
      for (var h = 0; h < g; h++) {
        var f = t[h];
        if (c ? f === "/" && t[h - 1] === "*" && (c = !1) : a ? a === f && (a = !1) : f === "/" && t[h + 1] === "*" ? c = !0 : f === '"' || f === "'" ? a = f : f === "(" ? s++ : f === ")" && s--, !c && a === !1 && s === 0) {
          if (f === ":" && d === -1)
            d = h;
          else if (f === ";" || h === g - 1) {
            if (d !== -1) {
              var m = As(t.substring(u, d).trim());
              if (!l.includes(m)) {
                f !== ";" && h++;
                var v = t.substring(u, h).trim();
                n += " " + v + ";";
              }
            }
            u = h + 1, d = -1;
          }
        }
      }
    }
    return r && (n += tl(r)), i && (n += tl(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function Co(t, e, n, r, i, a) {
  var s = t.__className;
  if (s !== n || s === void 0) {
    var c = Ef(n, r, a);
    c == null ? t.removeAttribute("class") : e ? t.className = c : t.setAttribute("class", c), t.__className = n;
  } else if (a && i !== a)
    for (var l in a) {
      var u = !!a[l];
      (i == null || u !== !!i[l]) && t.classList.toggle(l, u);
    }
  return a;
}
function Ss(t, e = {}, n, r) {
  for (var i in n) {
    var a = n[i];
    e[i] !== a && (n[i] == null ? t.style.removeProperty(i) : t.style.setProperty(i, a, r));
  }
}
function Vt(t, e, n, r) {
  var i = t.__style;
  if (i !== e) {
    var a = Af(e, r);
    a == null ? t.removeAttribute("style") : t.style.cssText = a, t.__style = e;
  } else r && (Array.isArray(r) ? (Ss(t, n == null ? void 0 : n[0], r[0]), Ss(t, n == null ? void 0 : n[1], r[1], "important")) : Ss(t, n, r));
  return r;
}
function Ya(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!os(e))
      return Ed();
    for (var r of t.options)
      r.selected = e.includes(da(r));
    return;
  }
  for (r of t.options) {
    var i = da(r);
    if (Gd(i, e)) {
      r.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function ku(t) {
  var e = new MutationObserver(() => {
    Ya(t, t.__value);
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
  }), fs(() => {
    e.disconnect();
  });
}
function Sf(t, e, n = e) {
  var r = !0;
  Eo(t, "change", (i) => {
    var a = i ? "[selected]" : ":checked", s;
    if (t.multiple)
      s = [].map.call(t.querySelectorAll(a), da);
    else {
      var c = t.querySelector(a) ?? // will fall back to first non-disabled option if no option is selected
      t.querySelector("option:not([disabled])");
      s = c && da(c);
    }
    n(s);
  }), Lr(() => {
    var i = e();
    if (Ya(t, i, r), r && i === void 0) {
      var a = t.querySelector(":checked");
      a !== null && (i = da(a), n(i));
    }
    t.__value = i, r = !1;
  }), ku(t);
}
function da(t) {
  return "__value" in t ? t.__value : t.value;
}
const ea = Symbol("class"), ta = Symbol("style"), Bu = Symbol("is custom element"), Fu = Symbol("is html");
function nl(t, e) {
  var n = xo(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== "PROGRESS") || (t.value = e ?? "");
}
function Cf(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function Ar(t, e, n, r) {
  var i = xo(t);
  i[e] !== (i[e] = n) && (e === "loading" && (t[dd] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && Vu(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function xf(t, e, n, r, i = !1, a = !1) {
  var s = xo(t), c = s[Bu], l = !s[Fu], u = e || {}, d = t.tagName === "OPTION";
  for (var h in e)
    h in n || (n[h] = null);
  n.class ? n.class = Uu(n.class) : n[ea] && (n.class = null), n[ta] && (n.style ?? (n.style = null));
  var f = Vu(t);
  for (const C in n) {
    let b = n[C];
    if (d && C === "value" && b == null) {
      t.value = t.__value = "", u[C] = b;
      continue;
    }
    if (C === "class") {
      var m = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      Co(t, m, b, r, e == null ? void 0 : e[ea], n[ea]), u[C] = b, u[ea] = n[ea];
      continue;
    }
    if (C === "style") {
      Vt(t, b, e == null ? void 0 : e[ta], n[ta]), u[C] = b, u[ta] = n[ta];
      continue;
    }
    var v = u[C];
    if (!(b === v && !(b === void 0 && t.hasAttribute(C)))) {
      u[C] = b;
      var g = C[0] + C[1];
      if (g !== "$$")
        if (g === "on") {
          const y = {}, I = "$$" + C;
          let T = C.slice(2);
          var _ = uf(T);
          if (of(T) && (T = T.slice(0, -7), y.capture = !0), !_ && v) {
            if (b != null) continue;
            t.removeEventListener(T, u[I], y), u[I] = null;
          }
          if (b != null)
            if (_)
              t[`__${T}`] = b, hn([T]);
            else {
              let A = function(x) {
                u[C].call(this, x);
              };
              u[I] = So(T, t, A, y);
            }
          else _ && (t[`__${T}`] = void 0);
        } else if (C === "style")
          Ar(t, C, b);
        else if (C === "autofocus")
          zd(
            /** @type {HTMLElement} */
            t,
            !!b
          );
        else if (!c && (C === "__value" || C === "value" && b != null))
          t.value = t.__value = b;
        else if (C === "selected" && d)
          Cf(
            /** @type {HTMLOptionElement} */
            t,
            b
          );
        else {
          var S = C;
          l || (S = df(S));
          var E = S === "defaultValue" || S === "defaultChecked";
          if (b == null && !c && !E)
            if (s[C] = null, S === "value" || S === "checked") {
              let y = (
                /** @type {HTMLInputElement} */
                t
              );
              const I = e === void 0;
              if (S === "value") {
                let T = y.defaultValue;
                y.removeAttribute(S), y.defaultValue = T, y.value = y.__value = I ? T : null;
              } else {
                let T = y.defaultChecked;
                y.removeAttribute(S), y.defaultChecked = T, y.checked = I ? T : !1;
              }
            } else
              t.removeAttribute(C);
          else E || f.includes(S) && (c || typeof b != "string") ? (t[S] = b, S in s && (s[S] = wt)) : typeof b != "function" && Ar(t, S, b);
        }
    }
  }
  return u;
}
function ze(t, e, n = [], r = [], i, a = !1, s = !1) {
  cu(n, r, (c) => {
    var l = void 0, u = {}, d = t.nodeName === "SELECT", h = !1;
    if (Or(() => {
      var m = e(...c.map(o)), v = xf(
        t,
        l,
        m,
        i,
        a,
        s
      );
      h && d && "value" in m && Ya(
        /** @type {HTMLSelectElement} */
        t,
        m.value
      );
      for (let _ of Object.getOwnPropertySymbols(u))
        m[_] || Pt(u[_]);
      for (let _ of Object.getOwnPropertySymbols(m)) {
        var g = m[_];
        _.description === ad && (!l || g !== l[_]) && (u[_] && Pt(u[_]), u[_] = Bt(() => If(t, () => g))), v[_] = g;
      }
      l = v;
    }), d) {
      var f = (
        /** @type {HTMLSelectElement} */
        t
      );
      Lr(() => {
        Ya(
          f,
          /** @type {Record<string | symbol, any>} */
          l.value,
          !0
        ), ku(f);
      });
    }
    h = !0;
  });
}
function xo(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ?? (t.__attributes = {
      [Bu]: t.nodeName.includes("-"),
      [Fu]: t.namespaceURI === rd
    })
  );
}
var rl = /* @__PURE__ */ new Map();
function Vu(t) {
  var e = t.getAttribute("is") || t.nodeName, n = rl.get(e);
  if (n) return n;
  rl.set(e, n = []);
  for (var r, i = t, a = Element.prototype; a !== i; ) {
    r = Ql(i);
    for (var s in r)
      r[s].set && n.push(s);
    i = ho(i);
  }
  return n;
}
const Tf = () => performance.now(), tr = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (t) => requestAnimationFrame(t)
  ),
  now: () => Tf(),
  tasks: /* @__PURE__ */ new Set()
};
function Gu() {
  const t = tr.now();
  tr.tasks.forEach((e) => {
    e.c(t) || (tr.tasks.delete(e), e.f());
  }), tr.tasks.size !== 0 && tr.tick(Gu);
}
function wf(t) {
  let e;
  return tr.tasks.size === 0 && tr.tick(Gu), {
    promise: new Promise((n) => {
      tr.tasks.add(e = { c: t, f: n });
    }),
    abort() {
      tr.tasks.delete(e);
    }
  };
}
function La(t, e) {
  ji(() => {
    t.dispatchEvent(new CustomEvent(e));
  });
}
function Lf(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const e = t.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (n) => n[0].toUpperCase() + n.slice(1)
  ).join("");
}
function il(t) {
  const e = {}, n = t.split(";");
  for (const r of n) {
    const [i, a] = r.split(":");
    if (!i || a === void 0) break;
    const s = Lf(i.trim());
    e[s] = a.trim();
  }
  return e;
}
const Of = (t) => t;
function al(t, e, n, r) {
  var i = (t & 1) !== 0, a = (t & 2) !== 0, s = i && a, c = (t & 4) !== 0, l = s ? "both" : i ? "in" : "out", u, d = e.inert, h = e.style.overflow, f, m;
  function v() {
    return ji(() => u ?? (u = n()(e, (r == null ? void 0 : r()) ?? /** @type {P} */
    {}, {
      direction: l
    })));
  }
  var g = {
    is_global: c,
    in() {
      var C;
      if (e.inert = d, !i) {
        m == null || m.abort(), (C = m == null ? void 0 : m.reset) == null || C.call(m);
        return;
      }
      a || f == null || f.abort(), La(e, "introstart"), f = Zs(e, v(), m, 1, () => {
        La(e, "introend"), f == null || f.abort(), f = u = void 0, e.style.overflow = h;
      });
    },
    out(C) {
      if (!a) {
        C == null || C(), u = void 0;
        return;
      }
      e.inert = !0, La(e, "outrostart"), m = Zs(e, v(), f, 0, () => {
        La(e, "outroend"), C == null || C();
      });
    },
    stop: () => {
      f == null || f.abort(), m == null || m.abort();
    }
  }, _ = (
    /** @type {Effect} */
    ke
  );
  if ((_.transitions ?? (_.transitions = [])).push(g), i && Za) {
    var S = c;
    if (!S) {
      for (var E = (
        /** @type {Effect | null} */
        _.parent
      ); E && E.f & Tr; )
        for (; (E = E.parent) && !(E.f & Cr); )
          ;
      S = !E || (E.f & ls) !== 0;
    }
    S && Lr(() => {
      Gn(() => g.in());
    });
  }
}
function Zs(t, e, n, r, i) {
  var a = r === 1;
  if (gi(e)) {
    var s, c = !1;
    return ir(() => {
      if (!c) {
        var _ = e({ direction: a ? "in" : "out" });
        s = Zs(t, _, n, r, i);
      }
    }), {
      abort: () => {
        c = !0, s == null || s.abort();
      },
      deactivate: () => s.deactivate(),
      reset: () => s.reset(),
      t: () => s.t()
    };
  }
  if (n == null || n.deactivate(), !(e != null && e.duration))
    return i(), {
      abort: he,
      deactivate: he,
      reset: he,
      t: () => r
    };
  const { delay: l = 0, css: u, tick: d, easing: h = Of } = e;
  var f = [];
  if (a && n === void 0 && (d && d(0, 1), u)) {
    var m = il(u(0, 1));
    f.push(m, m);
  }
  var v = () => 1 - r, g = t.animate(f, { duration: l, fill: "forwards" });
  return g.onfinish = () => {
    g.cancel();
    var _ = (n == null ? void 0 : n.t()) ?? 1 - r;
    n == null || n.abort();
    var S = r - _, E = (
      /** @type {number} */
      e.duration * Math.abs(S)
    ), C = [];
    if (E > 0) {
      var b = !1;
      if (u)
        for (var y = Math.ceil(E / 16.666666666666668), I = 0; I <= y; I += 1) {
          var T = _ + S * h(I / y), A = il(u(T, 1 - T));
          C.push(A), b || (b = A.overflow === "hidden");
        }
      b && (t.style.overflow = "hidden"), v = () => {
        var x = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          g.currentTime
        );
        return _ + S * h(x / E);
      }, d && wf(() => {
        if (g.playState !== "running") return !1;
        var x = v();
        return d(x, 1 - x), !0;
      });
    }
    g = t.animate(C, { duration: E, fill: "forwards" }), g.onfinish = () => {
      v = () => r, d == null || d(r, 1 - r), i();
    };
  }, {
    abort: () => {
      g && (g.cancel(), g.effect = null, g.onfinish = he);
    },
    deactivate: () => {
      i = he;
    },
    reset: () => {
      r === 0 && (d == null || d(1, 0));
    },
    t: () => v()
  };
}
function va(t, e, n = e) {
  var r = /* @__PURE__ */ new WeakSet();
  Eo(t, "input", async (i) => {
    var a = i ? t.defaultValue : t.value;
    if (a = Cs(t) ? xs(a) : a, n(a), et !== null && r.add(et), await Ou(), a !== (a = e())) {
      var s = t.selectionStart, c = t.selectionEnd, l = t.value.length;
      if (t.value = a ?? "", c !== null) {
        var u = t.value.length;
        s === c && c === l && u > l ? (t.selectionStart = u, t.selectionEnd = u) : (t.selectionStart = s, t.selectionEnd = Math.min(c, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Gn(e) == null && t.value && (n(Cs(t) ? xs(t.value) : t.value), et !== null && r.add(et)), Ea(() => {
    var i = e();
    if (t === document.activeElement) {
      var a = (
        /** @type {Batch} */
        Ba ?? et
      );
      if (r.has(a))
        return;
    }
    Cs(t) && i === xs(t.value) || t.type === "date" && !i && !t.value || i !== t.value && (t.value = i ?? "");
  });
}
function Rf(t, e, n = e) {
  Eo(t, "change", (r) => {
    var i = r ? t.defaultChecked : t.checked;
    n(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  // If defaultChecked is set, then checked == defaultChecked
  Gn(e) == null && n(t.checked), Ea(() => {
    var r = e();
    t.checked = !!r;
  });
}
function Cs(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function xs(t) {
  return t === "" ? null : +t;
}
function sl(t, e) {
  return t === e || (t == null ? void 0 : t[Bn]) === e;
}
function Ce(t = {}, e, n, r) {
  return Lr(() => {
    var i, a;
    return Ea(() => {
      i = a, a = (r == null ? void 0 : r()) || [], Gn(() => {
        t !== n(...a) && (e(t, ...a), i && sl(n(...i), t) && e(null, ...i));
      });
    }), () => {
      ir(() => {
        a && sl(n(...a), t) && e(null, ...a);
      });
    };
  }), t;
}
function To(t, e, n) {
  if (t == null)
    return e(void 0), n && n(void 0), he;
  const r = Gn(
    () => t.subscribe(
      e,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const fi = [];
function Mf(t, e) {
  return {
    subscribe: Qt(t, e).subscribe
  };
}
function Qt(t, e = he) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function i(c) {
    if (bo(t, c) && (t = c, n)) {
      const l = !fi.length;
      for (const u of r)
        u[1](), fi.push(u, t);
      if (l) {
        for (let u = 0; u < fi.length; u += 2)
          fi[u][0](fi[u + 1]);
        fi.length = 0;
      }
    }
  }
  function a(c) {
    i(c(
      /** @type {T} */
      t
    ));
  }
  function s(c, l = he) {
    const u = [c, l];
    return r.add(u), r.size === 1 && (n = e(i, a) || he), c(
      /** @type {T} */
      t
    ), () => {
      r.delete(u), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: a, subscribe: s };
}
function qi(t, e, n) {
  const r = !Array.isArray(t), i = r ? [t] : t;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = e.length < 2;
  return Mf(n, (s, c) => {
    let l = !1;
    const u = [];
    let d = 0, h = he;
    const f = () => {
      if (d)
        return;
      h();
      const v = e(r ? u[0] : u, s, c);
      a ? s(v) : h = typeof v == "function" ? v : he;
    }, m = i.map(
      (v, g) => To(
        v,
        (_) => {
          u[g] = _, d &= ~(1 << g), l && f();
        },
        () => {
          d |= 1 << g;
        }
      )
    );
    return l = !0, f(), function() {
      Jl(m), h(), l = !1;
    };
  });
}
function ju(t) {
  let e;
  return To(t, (n) => e = n)(), e;
}
let Oa = !1, Ys = Symbol();
function Fn(t, e, n) {
  const r = n[e] ?? (n[e] = {
    store: null,
    source: /* @__PURE__ */ hu(void 0),
    unsubscribe: he
  });
  if (r.store !== t && !(Ys in n))
    if (r.unsubscribe(), r.store = t ?? null, t == null)
      r.source.v = void 0, r.unsubscribe = he;
    else {
      var i = !0;
      r.unsubscribe = To(t, (a) => {
        i ? r.source.v = a : q(r.source, a);
      }), i = !1;
    }
  return t && Ys in n ? ju(t) : o(r.source);
}
function ti(t, e) {
  return t.set(e), e;
}
function lr() {
  const t = {};
  function e() {
    fs(() => {
      for (var n in t)
        t[n].unsubscribe();
      Wa(t, Ys, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [t, e];
}
function Df(t) {
  var e = Oa;
  try {
    return Oa = !1, [t(), Oa];
  } finally {
    Oa = e;
  }
}
const Hf = {
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
function Ye(t, e, n) {
  return new Proxy(
    { props: t, exclude: e },
    Hf
  );
}
const Pf = {
  get(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (gi(r) && (r = r()), typeof r == "object" && r !== null && e in r) return r[e];
    }
  },
  set(t, e, n) {
    let r = t.props.length;
    for (; r--; ) {
      let i = t.props[r];
      gi(i) && (i = i());
      const a = Ir(i, e);
      if (a && a.set)
        return a.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (gi(r) && (r = r()), typeof r == "object" && r !== null && e in r) {
        const i = Ir(r, e);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(t, e) {
    if (e === Bn || e === eu) return !1;
    for (let n of t.props)
      if (gi(n) && (n = n()), n != null && e in n) return !0;
    return !1;
  },
  ownKeys(t) {
    const e = [];
    for (let n of t.props)
      if (gi(n) && (n = n()), !!n) {
        for (const r in n)
          e.includes(r) || e.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          e.includes(r) || e.push(r);
      }
    return e;
  }
};
function rt(...t) {
  return new Proxy({ props: t }, Pf);
}
function p(t, e, n, r) {
  var C;
  var i = !Gi || (n & 2) !== 0, a = (n & 8) !== 0, s = (n & 16) !== 0, c = (
    /** @type {V} */
    r
  ), l = !0, u = () => (l && (l = !1, c = s ? Gn(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), c), d;
  if (a) {
    var h = Bn in t || eu in t;
    d = ((C = Ir(t, e)) == null ? void 0 : C.set) ?? (h && e in t ? (b) => t[e] = b : void 0);
  }
  var f, m = !1;
  a ? [f, m] = Df(() => (
    /** @type {V} */
    t[e]
  )) : f = /** @type {V} */
  t[e], f === void 0 && r !== void 0 && (f = u(), d && (i && pd(), d(f)));
  var v;
  if (i ? v = () => {
    var b = (
      /** @type {V} */
      t[e]
    );
    return b === void 0 ? u() : (l = !0, b);
  } : v = () => {
    var b = (
      /** @type {V} */
      t[e]
    );
    return b !== void 0 && (c = /** @type {V} */
    void 0), b === void 0 ? c : b;
  }, i && !(n & 4))
    return v;
  if (d) {
    var g = t.$$legacy;
    return (
      /** @type {() => V} */
      function(b, y) {
        return arguments.length > 0 ? ((!i || !y || g || m) && d(y ? v() : b), b) : v();
      }
    );
  }
  var _ = !1, S = (n & 1 ? ds : _o)(() => (_ = !1, v()));
  a && o(S);
  var E = (
    /** @type {Effect} */
    ke
  );
  return (
    /** @type {() => V} */
    function(b, y) {
      if (arguments.length > 0) {
        const I = y ? o(S) : i && a ? ge(b) : b;
        return q(S, I), _ = !0, c !== void 0 && (c = I), b;
      }
      return ii && _ || E.f & ri ? S.v : o(S);
    }
  );
}
const Nf = "5";
var Zl;
typeof window < "u" && ((Zl = window.__svelte ?? (window.__svelte = {})).v ?? (Zl.v = /* @__PURE__ */ new Set())).add(Nf);
function Uf(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var kf = function(e) {
  return Bf(e) && !Ff(e);
};
function Bf(t) {
  return !!t && typeof t == "object";
}
function Ff(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || jf(t);
}
var Vf = typeof Symbol == "function" && Symbol.for, Gf = Vf ? Symbol.for("react.element") : 60103;
function jf(t) {
  return t.$$typeof === Gf;
}
function qf(t) {
  return Array.isArray(t) ? [] : {};
}
function ma(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? Pi(qf(t), t, e) : t;
}
function zf(t, e, n) {
  return t.concat(e).map(function(r) {
    return ma(r, n);
  });
}
function Wf(t, e) {
  if (!e.customMerge)
    return Pi;
  var n = e.customMerge(t);
  return typeof n == "function" ? n : Pi;
}
function Xf(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function ol(t) {
  return Object.keys(t).concat(Xf(t));
}
function qu(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function Kf(t, e) {
  return qu(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function Zf(t, e, n) {
  var r = {};
  return n.isMergeableObject(t) && ol(t).forEach(function(i) {
    r[i] = ma(t[i], n);
  }), ol(e).forEach(function(i) {
    Kf(t, i) || (qu(t, i) && n.isMergeableObject(e[i]) ? r[i] = Wf(i, n)(t[i], e[i], n) : r[i] = ma(e[i], n));
  }), r;
}
function Pi(t, e, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || zf, n.isMergeableObject = n.isMergeableObject || kf, n.cloneUnlessOtherwiseSpecified = ma;
  var r = Array.isArray(e), i = Array.isArray(t), a = r === i;
  return a ? r ? n.arrayMerge(t, e, n) : Zf(t, e, n) : ma(e, n);
}
Pi.all = function(e, n) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(r, i) {
    return Pi(r, i, n);
  }, {});
};
var Yf = Pi, Qf = Yf;
const Jf = /* @__PURE__ */ Uf(Qf);
var Qs = function(t, e) {
  return Qs = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, Qs(t, e);
};
function tt(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Qs(t, e);
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
function $f(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  return n;
}
function zu(t, e, n, r) {
  function i(a) {
    return a instanceof n ? a : new n(function(s) {
      s(a);
    });
  }
  return new (n || (n = Promise))(function(a, s) {
    function c(d) {
      try {
        u(r.next(d));
      } catch (h) {
        s(h);
      }
    }
    function l(d) {
      try {
        u(r.throw(d));
      } catch (h) {
        s(h);
      }
    }
    function u(d) {
      d.done ? a(d.value) : i(d.value).then(c, l);
    }
    u((r = r.apply(t, e || [])).next());
  });
}
function wo(t, e) {
  var n = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, i, a, s = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return s.next = c(0), s.throw = c(1), s.return = c(2), typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function c(u) {
    return function(d) {
      return l([u, d]);
    };
  }
  function l(u) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, u[0] && (n = 0)), n; ) try {
      if (r = 1, i && (a = u[0] & 2 ? i.return : u[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, u[1])).done) return a;
      switch (i = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
        case 0:
        case 1:
          a = u;
          break;
        case 4:
          return n.label++, { value: u[1], done: !1 };
        case 5:
          n.label++, i = u[1], u = [0];
          continue;
        case 7:
          u = n.ops.pop(), n.trys.pop();
          continue;
        default:
          if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
            n = 0;
            continue;
          }
          if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
            n.label = u[1];
            break;
          }
          if (u[0] === 6 && n.label < a[1]) {
            n.label = a[1], a = u;
            break;
          }
          if (a && n.label < a[2]) {
            n.label = a[2], n.ops.push(u);
            break;
          }
          a[2] && n.ops.pop(), n.trys.pop();
          continue;
      }
      u = e.call(t, n);
    } catch (d) {
      u = [6, d], i = 0;
    } finally {
      r = a = 0;
    }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function Lt(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, n = e && t[e], r = 0;
  if (n) return n.call(t);
  if (t && typeof t.length == "number") return {
    next: function() {
      return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Ni(t, e) {
  var n = typeof Symbol == "function" && t[Symbol.iterator];
  if (!n) return t;
  var r = n.call(t), i, a = [], s;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = r.next()).done; ) a.push(i.value);
  } catch (c) {
    s = { error: c };
  } finally {
    try {
      i && !i.done && (n = r.return) && n.call(r);
    } finally {
      if (s) throw s.error;
    }
  }
  return a;
}
function Sr(t, e, n) {
  if (n || arguments.length === 2) for (var r = 0, i = e.length, a; r < i; r++)
    (a || !(r in e)) && (a || (a = Array.prototype.slice.call(e, 0, r)), a[r] = e[r]);
  return t.concat(a || Array.prototype.slice.call(e));
}
function Ei(t) {
  return this instanceof Ei ? (this.v = t, this) : new Ei(t);
}
function eh(t, e, n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(t, e || []), i, a = [];
  return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), c("next"), c("throw"), c("return", s), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function s(m) {
    return function(v) {
      return Promise.resolve(v).then(m, h);
    };
  }
  function c(m, v) {
    r[m] && (i[m] = function(g) {
      return new Promise(function(_, S) {
        a.push([m, g, _, S]) > 1 || l(m, g);
      });
    }, v && (i[m] = v(i[m])));
  }
  function l(m, v) {
    try {
      u(r[m](v));
    } catch (g) {
      f(a[0][3], g);
    }
  }
  function u(m) {
    m.value instanceof Ei ? Promise.resolve(m.value.v).then(d, h) : f(a[0][2], m);
  }
  function d(m) {
    l("next", m);
  }
  function h(m) {
    l("throw", m);
  }
  function f(m, v) {
    m(v), a.shift(), a.length && l(a[0][0], a[0][1]);
  }
}
function th(t) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], n;
  return e ? e.call(t) : (t = typeof Lt == "function" ? Lt(t) : t[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n);
  function r(a) {
    n[a] = t[a] && function(s) {
      return new Promise(function(c, l) {
        s = t[a](s), i(c, l, s.done, s.value);
      });
    };
  }
  function i(a, s, c, l) {
    Promise.resolve(l).then(function(u) {
      a({ value: u, done: c });
    }, s);
  }
}
function Ts(t, e) {
  var n = e && e.cache ? e.cache : lh, r = e && e.serializer ? e.serializer : sh, i = e && e.strategy ? e.strategy : ih;
  return i(t, {
    cache: n,
    serializer: r
  });
}
function nh(t) {
  return t == null || typeof t == "number" || typeof t == "boolean";
}
function rh(t, e, n, r) {
  var i = nh(r) ? r : n(r), a = e.get(i);
  return typeof a > "u" && (a = t.call(this, r), e.set(i, a)), a;
}
function Wu(t, e, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = e.get(i);
  return typeof a > "u" && (a = t.apply(this, r), e.set(i, a)), a;
}
function Xu(t, e, n, r, i) {
  return n.bind(e, t, r, i);
}
function ih(t, e) {
  var n = t.length === 1 ? rh : Wu;
  return Xu(t, this, n, e.cache.create(), e.serializer);
}
function ah(t, e) {
  return Xu(t, this, Wu, e.cache.create(), e.serializer);
}
var sh = function() {
  return JSON.stringify(arguments);
}, oh = (
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
), lh = {
  create: function() {
    return new oh();
  }
}, ws = {
  variadic: ah
}, je;
(function(t) {
  t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", t[t.INVALID_TAG = 23] = "INVALID_TAG", t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(je || (je = {}));
var ut;
(function(t) {
  t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag";
})(ut || (ut = {}));
var Ui;
(function(t) {
  t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime";
})(Ui || (Ui = {}));
function ll(t) {
  return t.type === ut.literal;
}
function uh(t) {
  return t.type === ut.argument;
}
function Ku(t) {
  return t.type === ut.number;
}
function Zu(t) {
  return t.type === ut.date;
}
function Yu(t) {
  return t.type === ut.time;
}
function Qu(t) {
  return t.type === ut.select;
}
function Ju(t) {
  return t.type === ut.plural;
}
function ch(t) {
  return t.type === ut.pound;
}
function $u(t) {
  return t.type === ut.tag;
}
function ec(t) {
  return !!(t && typeof t == "object" && t.type === Ui.number);
}
function Js(t) {
  return !!(t && typeof t == "object" && t.type === Ui.dateTime);
}
var tc = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, dh = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function fh(t) {
  var e = {};
  return t.replace(dh, function(n) {
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
var hh = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function vh(t) {
  if (t.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var e = t.split(hh).filter(function(f) {
    return f.length > 0;
  }), n = [], r = 0, i = e; r < i.length; r++) {
    var a = i[r], s = a.split("/");
    if (s.length === 0)
      throw new Error("Invalid number skeleton");
    for (var c = s[0], l = s.slice(1), u = 0, d = l; u < d.length; u++) {
      var h = d[u];
      if (h.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: c, options: l });
  }
  return n;
}
function mh(t) {
  return t.replace(/^(.*?)-/, "");
}
var ul = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, nc = /^(@+)?(\+|#+)?[rs]?$/g, gh = /(\*)(0+)|(#+)(0+)|(0+)/g, rc = /^(0+)$/;
function cl(t) {
  var e = {};
  return t[t.length - 1] === "r" ? e.roundingPriority = "morePrecision" : t[t.length - 1] === "s" && (e.roundingPriority = "lessPrecision"), t.replace(nc, function(n, r, i) {
    return typeof i != "string" ? (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length) : i === "+" ? e.minimumSignificantDigits = r.length : r[0] === "#" ? e.maximumSignificantDigits = r.length : (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), e;
}
function ic(t) {
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
function ph(t) {
  var e;
  if (t[0] === "E" && t[1] === "E" ? (e = {
    notation: "engineering"
  }, t = t.slice(2)) : t[0] === "E" && (e = {
    notation: "scientific"
  }, t = t.slice(1)), e) {
    var n = t.slice(0, 2);
    if (n === "+!" ? (e.signDisplay = "always", t = t.slice(2)) : n === "+?" && (e.signDisplay = "exceptZero", t = t.slice(2)), !rc.test(t))
      throw new Error("Malformed concise eng/scientific notation");
    e.minimumIntegerDigits = t.length;
  }
  return e;
}
function dl(t) {
  var e = {}, n = ic(t);
  return n || e;
}
function bh(t) {
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
        e.style = "unit", e.unit = mh(i.options[0]);
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
        e = le(le(le({}, e), { notation: "scientific" }), i.options.reduce(function(l, u) {
          return le(le({}, l), dl(u));
        }, {}));
        continue;
      case "engineering":
        e = le(le(le({}, e), { notation: "engineering" }), i.options.reduce(function(l, u) {
          return le(le({}, l), dl(u));
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
        i.options[0].replace(gh, function(l, u, d, h, f, m) {
          if (u)
            e.minimumIntegerDigits = d.length;
          else {
            if (h && f)
              throw new Error("We currently do not support maximum integer digits");
            if (m)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (rc.test(i.stem)) {
      e.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (ul.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(ul, function(l, u, d, h, f, m) {
        return d === "*" ? e.minimumFractionDigits = u.length : h && h[0] === "#" ? e.maximumFractionDigits = h.length : f && m ? (e.minimumFractionDigits = f.length, e.maximumFractionDigits = f.length + m.length) : (e.minimumFractionDigits = u.length, e.maximumFractionDigits = u.length), "";
      });
      var a = i.options[0];
      a === "w" ? e = le(le({}, e), { trailingZeroDisplay: "stripIfInteger" }) : a && (e = le(le({}, e), cl(a)));
      continue;
    }
    if (nc.test(i.stem)) {
      e = le(le({}, e), cl(i.stem));
      continue;
    }
    var s = ic(i.stem);
    s && (e = le(le({}, e), s));
    var c = ph(i.stem);
    c && (e = le(le({}, e), c));
  }
  return e;
}
var Ra = {
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
function _h(t, e) {
  for (var n = "", r = 0; r < t.length; r++) {
    var i = t.charAt(r);
    if (i === "j") {
      for (var a = 0; r + 1 < t.length && t.charAt(r + 1) === i; )
        a++, r++;
      var s = 1 + (a & 1), c = a < 2 ? 1 : 3 + (a >> 1), l = "a", u = Ih(e);
      for ((u == "H" || u == "k") && (c = 0); c-- > 0; )
        n += l;
      for (; s-- > 0; )
        n = u + n;
    } else i === "J" ? n += "H" : n += i;
  }
  return n;
}
function Ih(t) {
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
  var i = Ra[r || ""] || Ra[n || ""] || Ra["".concat(n, "-001")] || Ra["001"];
  return i[0];
}
var Ls, yh = new RegExp("^".concat(tc.source, "*")), Eh = new RegExp("".concat(tc.source, "*$"));
function qe(t, e) {
  return { start: t, end: e };
}
var Ah = !!String.prototype.startsWith && "_a".startsWith("a", 1), Sh = !!String.fromCodePoint, Ch = !!Object.fromEntries, xh = !!String.prototype.codePointAt, Th = !!String.prototype.trimStart, wh = !!String.prototype.trimEnd, Lh = !!Number.isSafeInteger, Oh = Lh ? Number.isSafeInteger : function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991;
}, $s = !0;
try {
  var Rh = sc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  $s = ((Ls = Rh.exec("a")) === null || Ls === void 0 ? void 0 : Ls[0]) === "a";
} catch {
  $s = !1;
}
var fl = Ah ? (
  // Native
  function(e, n, r) {
    return e.startsWith(n, r);
  }
) : (
  // For IE11
  function(e, n, r) {
    return e.slice(r, r + n.length) === n;
  }
), eo = Sh ? String.fromCodePoint : (
  // IE11
  function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    for (var r = "", i = e.length, a = 0, s; i > a; ) {
      if (s = e[a++], s > 1114111)
        throw RangeError(s + " is not a valid code point");
      r += s < 65536 ? String.fromCharCode(s) : String.fromCharCode(((s -= 65536) >> 10) + 55296, s % 1024 + 56320);
    }
    return r;
  }
), hl = (
  // native
  Ch ? Object.fromEntries : (
    // Ponyfill
    function(e) {
      for (var n = {}, r = 0, i = e; r < i.length; r++) {
        var a = i[r], s = a[0], c = a[1];
        n[s] = c;
      }
      return n;
    }
  )
), ac = xh ? (
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
), Mh = Th ? (
  // Native
  function(e) {
    return e.trimStart();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(yh, "");
  }
), Dh = wh ? (
  // Native
  function(e) {
    return e.trimEnd();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(Eh, "");
  }
);
function sc(t, e) {
  return new RegExp(t, e);
}
var to;
if ($s) {
  var vl = sc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  to = function(e, n) {
    var r;
    vl.lastIndex = n;
    var i = vl.exec(e);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  to = function(e, n) {
    for (var r = []; ; ) {
      var i = ac(e, n);
      if (i === void 0 || oc(i) || Uh(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return eo.apply(void 0, r);
  };
var Hh = (
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
          var s = this.parseArgument(e, r);
          if (s.err)
            return s;
          i.push(s.val);
        } else {
          if (a === 125 && e > 0)
            break;
          if (a === 35 && (n === "plural" || n === "selectordinal")) {
            var c = this.clonePosition();
            this.bump(), i.push({
              type: ut.pound,
              location: qe(c, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(je.UNMATCHED_CLOSING_TAG, qe(this.clonePosition(), this.clonePosition()));
          } else if (a === 60 && !this.ignoreTag && no(this.peek() || 0)) {
            var s = this.parseTag(e, n);
            if (s.err)
              return s;
            i.push(s.val);
          } else {
            var s = this.parseLiteral(e, n);
            if (s.err)
              return s;
            i.push(s.val);
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
            type: ut.literal,
            value: "<".concat(i, "/>"),
            location: qe(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var a = this.parseMessage(e + 1, n, !0);
        if (a.err)
          return a;
        var s = a.val, c = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !no(this.char()))
            return this.error(je.INVALID_TAG, qe(c, this.clonePosition()));
          var l = this.clonePosition(), u = this.parseTagName();
          return i !== u ? this.error(je.UNMATCHED_CLOSING_TAG, qe(l, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: ut.tag,
              value: i,
              children: s,
              location: qe(r, this.clonePosition())
            },
            err: null
          } : this.error(je.INVALID_TAG, qe(c, this.clonePosition())));
        } else
          return this.error(je.UNCLOSED_TAG, qe(r, this.clonePosition()));
      } else
        return this.error(je.INVALID_TAG, qe(r, this.clonePosition()));
    }, t.prototype.parseTagName = function() {
      var e = this.offset();
      for (this.bump(); !this.isEOF() && Nh(this.char()); )
        this.bump();
      return this.message.slice(e, this.offset());
    }, t.prototype.parseLiteral = function(e, n) {
      for (var r = this.clonePosition(), i = ""; ; ) {
        var a = this.tryParseQuote(n);
        if (a) {
          i += a;
          continue;
        }
        var s = this.tryParseUnquoted(e, n);
        if (s) {
          i += s;
          continue;
        }
        var c = this.tryParseLeftAngleBracket();
        if (c) {
          i += c;
          continue;
        }
        break;
      }
      var l = qe(r, this.clonePosition());
      return {
        val: { type: ut.literal, value: i, location: l },
        err: null
      };
    }, t.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !Ph(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      return eo.apply(void 0, n);
    }, t.prototype.tryParseUnquoted = function(e, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && e > 0 ? null : (this.bump(), eo(r));
    }, t.prototype.parseArgument = function(e, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(je.EXPECT_ARGUMENT_CLOSING_BRACE, qe(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(je.EMPTY_ARGUMENT, qe(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(je.MALFORMED_ARGUMENT, qe(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(je.EXPECT_ARGUMENT_CLOSING_BRACE, qe(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: ut.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: qe(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(je.EXPECT_ARGUMENT_CLOSING_BRACE, qe(r, this.clonePosition())) : this.parseArgumentOptions(e, n, i, r);
        default:
          return this.error(je.MALFORMED_ARGUMENT, qe(r, this.clonePosition()));
      }
    }, t.prototype.parseIdentifierIfPossible = function() {
      var e = this.clonePosition(), n = this.offset(), r = to(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var a = this.clonePosition(), s = qe(e, a);
      return { value: r, location: s };
    }, t.prototype.parseArgumentOptions = function(e, n, r, i) {
      var a, s = this.clonePosition(), c = this.parseIdentifierIfPossible().value, l = this.clonePosition();
      switch (c) {
        case "":
          return this.error(je.EXPECT_ARGUMENT_TYPE, qe(s, l));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var u = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var d = this.clonePosition(), h = this.parseSimpleArgStyleIfPossible();
            if (h.err)
              return h;
            var f = Dh(h.val);
            if (f.length === 0)
              return this.error(je.EXPECT_ARGUMENT_STYLE, qe(this.clonePosition(), this.clonePosition()));
            var m = qe(d, this.clonePosition());
            u = { style: f, styleLocation: m };
          }
          var v = this.tryParseArgumentClose(i);
          if (v.err)
            return v;
          var g = qe(i, this.clonePosition());
          if (u && fl(u == null ? void 0 : u.style, "::", 0)) {
            var _ = Mh(u.style.slice(2));
            if (c === "number") {
              var h = this.parseNumberSkeletonFromString(_, u.styleLocation);
              return h.err ? h : {
                val: { type: ut.number, value: r, location: g, style: h.val },
                err: null
              };
            } else {
              if (_.length === 0)
                return this.error(je.EXPECT_DATE_TIME_SKELETON, g);
              var S = _;
              this.locale && (S = _h(_, this.locale));
              var f = {
                type: Ui.dateTime,
                pattern: S,
                location: u.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? fh(S) : {}
              }, E = c === "date" ? ut.date : ut.time;
              return {
                val: { type: E, value: r, location: g, style: f },
                err: null
              };
            }
          }
          return {
            val: {
              type: c === "number" ? ut.number : c === "date" ? ut.date : ut.time,
              value: r,
              location: g,
              style: (a = u == null ? void 0 : u.style) !== null && a !== void 0 ? a : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var C = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(je.EXPECT_SELECT_ARGUMENT_OPTIONS, qe(C, le({}, C)));
          this.bumpSpace();
          var b = this.parseIdentifierIfPossible(), y = 0;
          if (c !== "select" && b.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(je.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, qe(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var h = this.tryParseDecimalInteger(je.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, je.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (h.err)
              return h;
            this.bumpSpace(), b = this.parseIdentifierIfPossible(), y = h.val;
          }
          var I = this.tryParsePluralOrSelectOptions(e, c, n, b);
          if (I.err)
            return I;
          var v = this.tryParseArgumentClose(i);
          if (v.err)
            return v;
          var T = qe(i, this.clonePosition());
          return c === "select" ? {
            val: {
              type: ut.select,
              value: r,
              options: hl(I.val),
              location: T
            },
            err: null
          } : {
            val: {
              type: ut.plural,
              value: r,
              options: hl(I.val),
              offset: y,
              pluralType: c === "plural" ? "cardinal" : "ordinal",
              location: T
            },
            err: null
          };
        }
        default:
          return this.error(je.INVALID_ARGUMENT_TYPE, qe(s, l));
      }
    }, t.prototype.tryParseArgumentClose = function(e) {
      return this.isEOF() || this.char() !== 125 ? this.error(je.EXPECT_ARGUMENT_CLOSING_BRACE, qe(e, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, t.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var e = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(je.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, qe(i, this.clonePosition()));
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
        r = vh(e);
      } catch {
        return this.error(je.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: Ui.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? bh(r) : {}
        },
        err: null
      };
    }, t.prototype.tryParsePluralOrSelectOptions = function(e, n, r, i) {
      for (var a, s = !1, c = [], l = /* @__PURE__ */ new Set(), u = i.value, d = i.location; ; ) {
        if (u.length === 0) {
          var h = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var f = this.tryParseDecimalInteger(je.EXPECT_PLURAL_ARGUMENT_SELECTOR, je.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (f.err)
              return f;
            d = qe(h, this.clonePosition()), u = this.message.slice(h.offset, this.offset());
          } else
            break;
        }
        if (l.has(u))
          return this.error(n === "select" ? je.DUPLICATE_SELECT_ARGUMENT_SELECTOR : je.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, d);
        u === "other" && (s = !0), this.bumpSpace();
        var m = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? je.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : je.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, qe(this.clonePosition(), this.clonePosition()));
        var v = this.parseMessage(e + 1, n, r);
        if (v.err)
          return v;
        var g = this.tryParseArgumentClose(m);
        if (g.err)
          return g;
        c.push([
          u,
          {
            value: v.val,
            location: qe(m, this.clonePosition())
          }
        ]), l.add(u), this.bumpSpace(), a = this.parseIdentifierIfPossible(), u = a.value, d = a.location;
      }
      return c.length === 0 ? this.error(n === "select" ? je.EXPECT_SELECT_ARGUMENT_SELECTOR : je.EXPECT_PLURAL_ARGUMENT_SELECTOR, qe(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !s ? this.error(je.MISSING_OTHER_CLAUSE, qe(this.clonePosition(), this.clonePosition())) : { val: c, err: null };
    }, t.prototype.tryParseDecimalInteger = function(e, n) {
      var r = 1, i = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (r = -1);
      for (var a = !1, s = 0; !this.isEOF(); ) {
        var c = this.char();
        if (c >= 48 && c <= 57)
          a = !0, s = s * 10 + (c - 48), this.bump();
        else
          break;
      }
      var l = qe(i, this.clonePosition());
      return a ? (s *= r, Oh(s) ? { val: s, err: null } : this.error(n, l)) : this.error(e, l);
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
      var n = ac(this.message, e);
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
      if (fl(this.message, e, this.offset())) {
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
      for (; !this.isEOF() && oc(this.char()); )
        this.bump();
    }, t.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var e = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (e >= 65536 ? 2 : 1));
      return r ?? null;
    }, t;
  }()
);
function no(t) {
  return t >= 97 && t <= 122 || t >= 65 && t <= 90;
}
function Ph(t) {
  return no(t) || t === 47;
}
function Nh(t) {
  return t === 45 || t === 46 || t >= 48 && t <= 57 || t === 95 || t >= 97 && t <= 122 || t >= 65 && t <= 90 || t == 183 || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039;
}
function oc(t) {
  return t >= 9 && t <= 13 || t === 32 || t === 133 || t >= 8206 && t <= 8207 || t === 8232 || t === 8233;
}
function Uh(t) {
  return t >= 33 && t <= 35 || t === 36 || t >= 37 && t <= 39 || t === 40 || t === 41 || t === 42 || t === 43 || t === 44 || t === 45 || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || t === 91 || t === 92 || t === 93 || t === 94 || t === 96 || t === 123 || t === 124 || t === 125 || t === 126 || t === 161 || t >= 162 && t <= 165 || t === 166 || t === 167 || t === 169 || t === 171 || t === 172 || t === 174 || t === 176 || t === 177 || t === 182 || t === 187 || t === 191 || t === 215 || t === 247 || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || t === 8216 || t === 8217 || t === 8218 || t >= 8219 && t <= 8220 || t === 8221 || t === 8222 || t === 8223 || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || t === 8249 || t === 8250 || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || t === 8260 || t === 8261 || t === 8262 || t >= 8263 && t <= 8273 || t === 8274 || t === 8275 || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || t === 8608 || t >= 8609 && t <= 8610 || t === 8611 || t >= 8612 && t <= 8613 || t === 8614 || t >= 8615 && t <= 8621 || t === 8622 || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || t === 8658 || t === 8659 || t === 8660 || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || t === 8968 || t === 8969 || t === 8970 || t === 8971 || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9e3 || t === 9001 || t === 9002 || t >= 9003 && t <= 9083 || t === 9084 || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || t === 9655 || t >= 9656 && t <= 9664 || t === 9665 || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || t === 9839 || t >= 9840 && t <= 10087 || t === 10088 || t === 10089 || t === 10090 || t === 10091 || t === 10092 || t === 10093 || t === 10094 || t === 10095 || t === 10096 || t === 10097 || t === 10098 || t === 10099 || t === 10100 || t === 10101 || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || t === 10181 || t === 10182 || t >= 10183 && t <= 10213 || t === 10214 || t === 10215 || t === 10216 || t === 10217 || t === 10218 || t === 10219 || t === 10220 || t === 10221 || t === 10222 || t === 10223 || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || t === 10627 || t === 10628 || t === 10629 || t === 10630 || t === 10631 || t === 10632 || t === 10633 || t === 10634 || t === 10635 || t === 10636 || t === 10637 || t === 10638 || t === 10639 || t === 10640 || t === 10641 || t === 10642 || t === 10643 || t === 10644 || t === 10645 || t === 10646 || t === 10647 || t === 10648 || t >= 10649 && t <= 10711 || t === 10712 || t === 10713 || t === 10714 || t === 10715 || t >= 10716 && t <= 10747 || t === 10748 || t === 10749 || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || t === 11158 || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || t === 11778 || t === 11779 || t === 11780 || t === 11781 || t >= 11782 && t <= 11784 || t === 11785 || t === 11786 || t === 11787 || t === 11788 || t === 11789 || t >= 11790 && t <= 11798 || t === 11799 || t >= 11800 && t <= 11801 || t === 11802 || t === 11803 || t === 11804 || t === 11805 || t >= 11806 && t <= 11807 || t === 11808 || t === 11809 || t === 11810 || t === 11811 || t === 11812 || t === 11813 || t === 11814 || t === 11815 || t === 11816 || t === 11817 || t >= 11818 && t <= 11822 || t === 11823 || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || t === 11840 || t === 11841 || t === 11842 || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || t === 11858 || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || t === 12296 || t === 12297 || t === 12298 || t === 12299 || t === 12300 || t === 12301 || t === 12302 || t === 12303 || t === 12304 || t === 12305 || t >= 12306 && t <= 12307 || t === 12308 || t === 12309 || t === 12310 || t === 12311 || t === 12312 || t === 12313 || t === 12314 || t === 12315 || t === 12316 || t === 12317 || t >= 12318 && t <= 12319 || t === 12320 || t === 12336 || t === 64830 || t === 64831 || t >= 65093 && t <= 65094;
}
function ro(t) {
  t.forEach(function(e) {
    if (delete e.location, Qu(e) || Ju(e))
      for (var n in e.options)
        delete e.options[n].location, ro(e.options[n].value);
    else Ku(e) && ec(e.style) || (Zu(e) || Yu(e)) && Js(e.style) ? delete e.style.location : $u(e) && ro(e.children);
  });
}
function kh(t, e) {
  e === void 0 && (e = {}), e = le({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e);
  var n = new Hh(t, e).parse();
  if (n.err) {
    var r = SyntaxError(je[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return e != null && e.captureLocation || ro(n.val), n.val;
}
var ki;
(function(t) {
  t.MISSING_VALUE = "MISSING_VALUE", t.INVALID_VALUE = "INVALID_VALUE", t.MISSING_INTL_API = "MISSING_INTL_API";
})(ki || (ki = {}));
var ms = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n, r, i) {
      var a = t.call(this, n) || this;
      return a.code = r, a.originalMessage = i, a;
    }
    return e.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, e;
  }(Error)
), ml = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n, r, i, a) {
      return t.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), ki.INVALID_VALUE, a) || this;
    }
    return e;
  }(ms)
), Bh = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n, r, i) {
      return t.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), ki.INVALID_VALUE, i) || this;
    }
    return e;
  }(ms)
), Fh = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n, r) {
      return t.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), ki.MISSING_VALUE, r) || this;
    }
    return e;
  }(ms)
), qt;
(function(t) {
  t[t.literal = 0] = "literal", t[t.object = 1] = "object";
})(qt || (qt = {}));
function Vh(t) {
  return t.length < 2 ? t : t.reduce(function(e, n) {
    var r = e[e.length - 1];
    return !r || r.type !== qt.literal || n.type !== qt.literal ? e.push(n) : r.value += n.value, e;
  }, []);
}
function Gh(t) {
  return typeof t == "function";
}
function ja(t, e, n, r, i, a, s) {
  if (t.length === 1 && ll(t[0]))
    return [
      {
        type: qt.literal,
        value: t[0].value
      }
    ];
  for (var c = [], l = 0, u = t; l < u.length; l++) {
    var d = u[l];
    if (ll(d)) {
      c.push({
        type: qt.literal,
        value: d.value
      });
      continue;
    }
    if (ch(d)) {
      typeof a == "number" && c.push({
        type: qt.literal,
        value: n.getNumberFormat(e).format(a)
      });
      continue;
    }
    var h = d.value;
    if (!(i && h in i))
      throw new Fh(h, s);
    var f = i[h];
    if (uh(d)) {
      (!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), c.push({
        type: typeof f == "string" ? qt.literal : qt.object,
        value: f
      });
      continue;
    }
    if (Zu(d)) {
      var m = typeof d.style == "string" ? r.date[d.style] : Js(d.style) ? d.style.parsedOptions : void 0;
      c.push({
        type: qt.literal,
        value: n.getDateTimeFormat(e, m).format(f)
      });
      continue;
    }
    if (Yu(d)) {
      var m = typeof d.style == "string" ? r.time[d.style] : Js(d.style) ? d.style.parsedOptions : r.time.medium;
      c.push({
        type: qt.literal,
        value: n.getDateTimeFormat(e, m).format(f)
      });
      continue;
    }
    if (Ku(d)) {
      var m = typeof d.style == "string" ? r.number[d.style] : ec(d.style) ? d.style.parsedOptions : void 0;
      m && m.scale && (f = f * (m.scale || 1)), c.push({
        type: qt.literal,
        value: n.getNumberFormat(e, m).format(f)
      });
      continue;
    }
    if ($u(d)) {
      var v = d.children, g = d.value, _ = i[g];
      if (!Gh(_))
        throw new Bh(g, "function", s);
      var S = ja(v, e, n, r, i, a), E = _(S.map(function(y) {
        return y.value;
      }));
      Array.isArray(E) || (E = [E]), c.push.apply(c, E.map(function(y) {
        return {
          type: typeof y == "string" ? qt.literal : qt.object,
          value: y
        };
      }));
    }
    if (Qu(d)) {
      var C = d.options[f] || d.options.other;
      if (!C)
        throw new ml(d.value, f, Object.keys(d.options), s);
      c.push.apply(c, ja(C.value, e, n, r, i));
      continue;
    }
    if (Ju(d)) {
      var C = d.options["=".concat(f)];
      if (!C) {
        if (!Intl.PluralRules)
          throw new ms(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, ki.MISSING_INTL_API, s);
        var b = n.getPluralRules(e, { type: d.pluralType }).select(f - (d.offset || 0));
        C = d.options[b] || d.options.other;
      }
      if (!C)
        throw new ml(d.value, f, Object.keys(d.options), s);
      c.push.apply(c, ja(C.value, e, n, r, i, f - (d.offset || 0)));
      continue;
    }
  }
  return Vh(c);
}
function jh(t, e) {
  return e ? le(le(le({}, t || {}), e || {}), Object.keys(t).reduce(function(n, r) {
    return n[r] = le(le({}, t[r]), e[r] || {}), n;
  }, {})) : t;
}
function qh(t, e) {
  return e ? Object.keys(t).reduce(function(n, r) {
    return n[r] = jh(t[r], e[r]), n;
  }, le({}, t)) : t;
}
function Os(t) {
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
function zh(t) {
  return t === void 0 && (t = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: Ts(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.NumberFormat).bind.apply(e, Sr([void 0], n, !1)))();
    }, {
      cache: Os(t.number),
      strategy: ws.variadic
    }),
    getDateTimeFormat: Ts(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.DateTimeFormat).bind.apply(e, Sr([void 0], n, !1)))();
    }, {
      cache: Os(t.dateTime),
      strategy: ws.variadic
    }),
    getPluralRules: Ts(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.PluralRules).bind.apply(e, Sr([void 0], n, !1)))();
    }, {
      cache: Os(t.pluralRules),
      strategy: ws.variadic
    })
  };
}
var lc = (
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
        var u = a.formatToParts(l);
        if (u.length === 1)
          return u[0].value;
        var d = u.reduce(function(h, f) {
          return !h.length || f.type !== qt.literal || typeof h[h.length - 1] != "string" ? h.push(f.value) : h[h.length - 1] += f.value, h;
        }, []);
        return d.length <= 1 ? d[0] || "" : d;
      }, this.formatToParts = function(l) {
        return ja(a.ast, a.locales, a.formatters, a.formats, l, void 0, a.message);
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
        var s = i || {};
        s.formatters;
        var c = $f(s, ["formatters"]);
        this.ast = t.__parse(e, le(le({}, c), { locale: this.resolvedLocale }));
      } else
        this.ast = e;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = qh(t.formats, r), this.formatters = i && i.formatters || zh(this.formatterCache);
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
    }, t.__parse = kh, t.formats = {
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
function Wh(t, e) {
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
const _r = {}, Xh = (t, e, n) => n && (e in _r || (_r[e] = {}), t in _r[e] || (_r[e][t] = n), n), uc = (t, e) => {
  if (e == null)
    return;
  if (e in _r && t in _r[e])
    return _r[e][t];
  const n = Sa(e);
  for (let r = 0; r < n.length; r++) {
    const i = n[r], a = Zh(i, t);
    if (a)
      return Xh(t, e, a);
  }
};
let Lo;
const Aa = Qt({});
function Kh(t) {
  return Lo[t] || null;
}
function cc(t) {
  return t in Lo;
}
function Zh(t, e) {
  if (!cc(t))
    return null;
  const n = Kh(t);
  return Wh(n, e);
}
function Yh(t) {
  if (t == null)
    return;
  const e = Sa(t);
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (cc(r))
      return r;
  }
}
function dc(t, ...e) {
  delete _r[t], Aa.update((n) => (n[t] = Jf.all([n[t] || {}, ...e]), n));
}
qi(
  [Aa],
  ([t]) => Object.keys(t)
);
Aa.subscribe((t) => Lo = t);
const qa = {};
function Qh(t, e) {
  qa[t].delete(e), qa[t].size === 0 && delete qa[t];
}
function fc(t) {
  return qa[t];
}
function Jh(t) {
  return Sa(t).map((e) => {
    const n = fc(e);
    return [e, n ? [...n] : []];
  }).filter(([, e]) => e.length > 0);
}
function Qa(t) {
  return t == null ? !1 : Sa(t).some(
    (e) => {
      var n;
      return (n = fc(e)) == null ? void 0 : n.size;
    }
  );
}
function $h(t, e) {
  return Promise.all(
    e.map((r) => (Qh(t, r), r().then((i) => i.default || i)))
  ).then((r) => dc(t, ...r));
}
const na = {};
function hc(t) {
  if (!Qa(t))
    return t in na ? na[t] : Promise.resolve();
  const e = Jh(t);
  return na[t] = Promise.all(
    e.map(
      ([n, r]) => $h(n, r)
    )
  ).then(() => {
    if (Qa(t))
      return hc(t);
    delete na[t];
  }), na[t];
}
var gl = Object.getOwnPropertySymbols, ev = Object.prototype.hasOwnProperty, tv = Object.prototype.propertyIsEnumerable, nv = (t, e) => {
  var n = {};
  for (var r in t)
    ev.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && gl)
    for (var r of gl(t))
      e.indexOf(r) < 0 && tv.call(t, r) && (n[r] = t[r]);
  return n;
};
const rv = {
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
function iv({ locale: t, id: e }) {
  console.warn(
    `[svelte-i18n] The message "${e}" was not found in "${Sa(
      t
    ).join('", "')}".${Qa(Rr()) ? `

Note: there are at least one loader still registered to this locale that wasn't executed.` : ""}`
  );
}
const av = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: rv,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, la = av;
function Bi() {
  return la;
}
function sv(t) {
  const e = t, { formats: n } = e, r = nv(e, ["formats"]);
  let i = t.fallbackLocale;
  if (t.initialLocale)
    try {
      lc.resolveLocale(t.initialLocale) && (i = t.initialLocale);
    } catch {
      console.warn(
        `[svelte-i18n] The initial locale "${t.initialLocale}" is not a valid locale.`
      );
    }
  return r.warnOnMissingMessages && (delete r.warnOnMissingMessages, r.handleMissingMessage == null ? r.handleMissingMessage = iv : console.warn(
    '[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.'
  )), Object.assign(la, r, { initialLocale: i }), n && ("number" in n && Object.assign(la.formats.number, n.number), "date" in n && Object.assign(la.formats.date, n.date), "time" in n && Object.assign(la.formats.time, n.time)), si.set(i);
}
const Rs = Qt(!1);
var ov = Object.defineProperty, lv = Object.defineProperties, uv = Object.getOwnPropertyDescriptors, pl = Object.getOwnPropertySymbols, cv = Object.prototype.hasOwnProperty, dv = Object.prototype.propertyIsEnumerable, bl = (t, e, n) => e in t ? ov(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, fv = (t, e) => {
  for (var n in e || (e = {}))
    cv.call(e, n) && bl(t, n, e[n]);
  if (pl)
    for (var n of pl(e))
      dv.call(e, n) && bl(t, n, e[n]);
  return t;
}, hv = (t, e) => lv(t, uv(e));
let io;
const Ja = Qt(null);
function _l(t) {
  return t.split("-").map((e, n, r) => r.slice(0, n + 1).join("-")).reverse();
}
function Sa(t, e = Bi().fallbackLocale) {
  const n = _l(t);
  return e ? [.../* @__PURE__ */ new Set([...n, ..._l(e)])] : n;
}
function Rr() {
  return io ?? void 0;
}
Ja.subscribe((t) => {
  io = t ?? void 0, typeof window < "u" && t != null && document.documentElement.setAttribute("lang", t);
});
const vv = (t) => {
  if (t && Yh(t) && Qa(t)) {
    const { loadingDelay: e } = Bi();
    let n;
    return typeof window < "u" && Rr() != null && e ? n = window.setTimeout(
      () => Rs.set(!0),
      e
    ) : Rs.set(!0), hc(t).then(() => {
      Ja.set(t);
    }).finally(() => {
      clearTimeout(n), Rs.set(!1);
    });
  }
  return Ja.set(t);
}, si = hv(fv({}, Ja), {
  set: vv
}), mv = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0], gs = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (r) => {
    const i = JSON.stringify(r);
    return i in e ? e[i] : e[i] = t(r);
  };
};
var gv = Object.defineProperty, $a = Object.getOwnPropertySymbols, vc = Object.prototype.hasOwnProperty, mc = Object.prototype.propertyIsEnumerable, Il = (t, e, n) => e in t ? gv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Oo = (t, e) => {
  for (var n in e || (e = {}))
    vc.call(e, n) && Il(t, n, e[n]);
  if ($a)
    for (var n of $a(e))
      mc.call(e, n) && Il(t, n, e[n]);
  return t;
}, zi = (t, e) => {
  var n = {};
  for (var r in t)
    vc.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && $a)
    for (var r of $a(t))
      e.indexOf(r) < 0 && mc.call(t, r) && (n[r] = t[r]);
  return n;
};
const ga = (t, e) => {
  const { formats: n } = Bi();
  if (t in n && e in n[t])
    return n[t][e];
  throw new Error(`[svelte-i18n] Unknown "${e}" ${t} format.`);
}, pv = gs(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = zi(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return r && (i = ga("number", r)), new Intl.NumberFormat(n, i);
  }
), bv = gs(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = zi(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return r ? i = ga("date", r) : Object.keys(i).length === 0 && (i = ga("date", "short")), new Intl.DateTimeFormat(n, i);
  }
), _v = gs(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = zi(e, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return r ? i = ga("time", r) : Object.keys(i).length === 0 && (i = ga("time", "short")), new Intl.DateTimeFormat(n, i);
  }
), Iv = (t = {}) => {
  var e = t, {
    locale: n = Rr()
  } = e, r = zi(e, [
    "locale"
  ]);
  return pv(Oo({ locale: n }, r));
}, yv = (t = {}) => {
  var e = t, {
    locale: n = Rr()
  } = e, r = zi(e, [
    "locale"
  ]);
  return bv(Oo({ locale: n }, r));
}, Ev = (t = {}) => {
  var e = t, {
    locale: n = Rr()
  } = e, r = zi(e, [
    "locale"
  ]);
  return _v(Oo({ locale: n }, r));
}, Av = gs(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (t, e = Rr()) => new lc(t, e, Bi().formats, {
    ignoreTag: Bi().ignoreTag
  })
), Sv = (t, e = {}) => {
  var n, r, i, a;
  let s = e;
  typeof t == "object" && (s = t, t = s.id);
  const {
    values: c,
    locale: l = Rr(),
    default: u
  } = s;
  if (l == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let d = uc(t, l);
  if (!d)
    d = (a = (i = (r = (n = Bi()).handleMissingMessage) == null ? void 0 : r.call(n, { locale: l, id: t, defaultValue: u })) != null ? i : u) != null ? a : t;
  else if (typeof d != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${t}" must be of type "string", found: "${typeof d}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), d;
  if (!c)
    return d;
  let h = d;
  try {
    h = Av(d, l).format(c);
  } catch (f) {
    f instanceof Error && console.warn(
      `[svelte-i18n] Message "${t}" has syntax error:`,
      f.message
    );
  }
  return h;
}, Cv = (t, e) => Ev(e).format(t), xv = (t, e) => yv(e).format(t), Tv = (t, e) => Iv(e).format(t), wv = (t, e = Rr()) => uc(t, e), Lv = qi([si, Aa], () => Sv);
qi([si], () => Cv);
qi([si], () => xv);
qi([si], () => Tv);
qi([si, Aa], () => wv);
function Ov(t, e) {
  Object.entries(t).forEach(([a, s]) => {
    dc(a, s);
  });
  const n = localStorage.getItem("language"), r = "en", i = n ?? mv();
  console.log("Initial: Setting the language to", i), sv({
    fallbackLocale: r,
    initialLocale: i
  }), window.addEventListener("oscd-language-changed", (a) => {
    const s = a;
    if (!s.detail.language) {
      console.error("No translations for language");
      return;
    }
    console.log("Updating the language to", s.detail.language), si.set(s.detail.language);
  });
}
const Rv = "Ort", Mv = "Suche", Dv = "UUID", Hv = "Name", Pv = "Autor", Nv = "Typ", Uv = "Version", kv = "Geändert am", Bv = "Von", Fv = "Bis", Vv = "Suchergebnis", Gv = "Ort auswählen", jv = "Filter Hinzufügen", qv = "Filtertypen", zv = {
  location: Rv,
  search: Mv,
  uuid: Dv,
  name: Hv,
  author: Pv,
  type: Nv,
  version: Uv,
  changed_at: kv,
  from: Bv,
  to: Fv,
  search_result: Vv,
  select_location: Gv,
  add_filter: jv,
  filter_types: qv
}, Wv = "Location", Xv = "Search", Kv = "UUID", Zv = "Name", Yv = "Author", Qv = "Type", Jv = "Version", $v = "Changed At", em = "From", tm = "To", nm = "Search Result", rm = "Select Location", im = "Add Filter", am = "Filter Types", sm = {
  location: Wv,
  search: Xv,
  uuid: Kv,
  name: Zv,
  author: Yv,
  type: Qv,
  version: Jv,
  changed_at: $v,
  from: em,
  to: tm,
  search_result: nm,
  select_location: rm,
  add_filter: im,
  filter_types: am
};
function Ve(t) {
  return Object.entries(t).filter(([e, n]) => e !== "" && n).map(([e]) => e).join(" ");
}
function Ze(t, e, n, r = { bubbles: !0 }) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  if (!t)
    throw new Error("Tried to dispatch event without element.");
  const i = new CustomEvent(e, Object.assign(Object.assign({}, r), { detail: n }));
  return t == null || t.dispatchEvent(i), i;
}
function Fi(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const a = n[i], s = a.indexOf("$");
    s !== -1 && e.indexOf(a.substring(0, s + 1)) !== -1 || e.indexOf(a) === -1 && (r[a] = t[a]);
  }
  return r;
}
function ft(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const a = n[i];
    a.substring(0, e.length) === e && (r[a.substring(e.length)] = t[a]);
  }
  return r;
}
class Wi {
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
    n in a || (a[n] = /* @__PURE__ */ new Map()), a[n].set(r, af(e, n, r, i));
  }
  /**
   * Unlisten to an event on an element.
   */
  off(e, n, r) {
    const i = this.elementMap.get(e);
    if (i == null || !(n in i))
      return;
    const a = i[n], s = a.get(r);
    s != null && (s(), a.delete(r), a.size === 0 && (delete i[n], Object.keys(i).length === 0 && this.elementMap.delete(e)));
  }
  /**
   * Unlisten to all events managed by this instance.
   */
  clear() {
    this.elementMap.forEach((e, n) => {
      for (let [r, i] of Object.entries(e))
        i.forEach((a, s) => {
          a();
        });
    }), this.elementMap.clear();
  }
}
function z(t, e) {
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
            const s = r[i];
            Array.isArray(s) && s.length > 1 ? a.update(s[1]) : a.update();
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
var Ma;
function om(t, e) {
  e === void 0 && (e = !1);
  var n = t.CSS, r = Ma;
  if (typeof Ma == "boolean" && !e)
    return Ma;
  var i = n && typeof n.supports == "function";
  if (!i)
    return !1;
  var a = n.supports("--css-vars", "yes"), s = n.supports("(--css-vars: yes)") && n.supports("color", "#00000000");
  return r = a || s, e || (Ma = r), r;
}
function lm(t, e, n) {
  if (!t)
    return { x: 0, y: 0 };
  var r = e.x, i = e.y, a = r + n.left, s = i + n.top, c, l;
  if (t.type === "touchstart") {
    var u = t;
    c = u.changedTouches[0].pageX - a, l = u.changedTouches[0].pageY - s;
  } else {
    var d = t;
    c = d.pageX - a, l = d.pageY - s;
  }
  return { x: c, y: l };
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
var Gt = (
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
function um(t) {
  return t === void 0 && (t = window), cm(t) ? { passive: !0 } : !1;
}
function cm(t) {
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
const gc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: um
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
function dm(t, e) {
  if (t.closest)
    return t.closest(e);
  for (var n = t; n; ) {
    if (pc(n, e))
      return n;
    n = n.parentElement;
  }
  return null;
}
function pc(t, e) {
  var n = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return n.call(t, e);
}
function fm(t) {
  var e = t;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var n = e.cloneNode(!0);
  n.style.setProperty("position", "absolute"), n.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(n);
  var r = n.scrollWidth;
  return document.documentElement.removeChild(n), r;
}
const ps = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: dm,
  estimateScrollWidth: fm,
  matches: pc
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
var hm = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, vm = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, yl = {
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
var El = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Al = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Da = [], mm = (
  /** @class */
  function(t) {
    tt(e, t);
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
        return hm;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return vm;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return yl;
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
        var i = e.cssClasses, a = i.ROOT, s = i.UNBOUNDED;
        requestAnimationFrame(function() {
          n.adapter.addClass(a), n.adapter.isUnbounded() && (n.adapter.addClass(s), n.layoutInternal());
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
          for (var a = Lt(El), s = a.next(); !s.done; s = a.next()) {
            var c = s.value;
            this.adapter.registerInteractionHandler(c, this.activateHandler);
          }
        } catch (l) {
          r = { error: l };
        } finally {
          try {
            s && !s.done && (i = a.return) && i.call(a);
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
          for (var a = Lt(Al), s = a.next(); !s.done; s = a.next()) {
            var c = s.value;
            this.adapter.registerDocumentInteractionHandler(c, this.deactivateHandler);
          }
        } catch (l) {
          r = { error: l };
        } finally {
          try {
            s && !s.done && (i = a.return) && i.call(a);
          } finally {
            if (r) throw r.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var n, r;
      try {
        for (var i = Lt(El), a = i.next(); !a.done; a = i.next()) {
          var s = a.value;
          this.adapter.deregisterInteractionHandler(s, this.activateHandler);
        }
      } catch (c) {
        n = { error: c };
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
        for (var i = Lt(Al), a = i.next(); !a.done; a = i.next()) {
          var s = a.value;
          this.adapter.deregisterDocumentInteractionHandler(s, this.deactivateHandler);
        }
      } catch (c) {
        n = { error: c };
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
          var a = this.previousActivationEvent, s = a && n !== void 0 && a.type !== n.type;
          if (!s) {
            i.isActivated = !0, i.isProgrammatic = n === void 0, i.activationEvent = n, i.wasActivatedByPointer = i.isProgrammatic ? !1 : n !== void 0 && (n.type === "mousedown" || n.type === "touchstart" || n.type === "pointerdown");
            var c = n !== void 0 && Da.length > 0 && Da.some(function(l) {
              return r.adapter.containsEventTarget(l);
            });
            if (c) {
              this.resetActivationState();
              return;
            }
            n !== void 0 && (Da.push(n.target), this.registerDeactivationHandlers(n)), i.wasElementMadeActive = this.checkElementMadeActive(n), i.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Da = [], !i.wasElementMadeActive && n !== void 0 && (n.key === " " || n.keyCode === 32) && (i.wasElementMadeActive = r.checkElementMadeActive(n), i.wasElementMadeActive && r.animateActivation()), i.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(n) {
      return n !== void 0 && n.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var n = this, r = e.strings, i = r.VAR_FG_TRANSLATE_START, a = r.VAR_FG_TRANSLATE_END, s = e.cssClasses, c = s.FG_DEACTIVATION, l = s.FG_ACTIVATION, u = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var d = "", h = "";
      if (!this.adapter.isUnbounded()) {
        var f = this.getFgTranslationCoordinates(), m = f.startPoint, v = f.endPoint;
        d = m.x + "px, " + m.y + "px", h = v.x + "px, " + v.y + "px";
      }
      this.adapter.updateCssVariable(i, d), this.adapter.updateCssVariable(a, h), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(c), this.adapter.computeBoundingRect(), this.adapter.addClass(l), this.activationTimer = setTimeout(function() {
        n.activationTimerCallback();
      }, u);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var n = this.activationState, r = n.activationEvent, i = n.wasActivatedByPointer, a;
      i ? a = lm(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, a = {
        x: a.x - this.initialSize / 2,
        y: a.y - this.initialSize / 2
      };
      var s = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: a, endPoint: s };
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var n = this, r = e.cssClasses.FG_DEACTIVATION, i = this.activationState, a = i.hasDeactivationUXRun, s = i.isActivated, c = a || !s;
      c && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(r), this.fgDeactivationRemovalTimer = setTimeout(function() {
        n.adapter.removeClass(r);
      }, yl.FG_DEACTIVATION_MS));
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
        var s = Math.sqrt(Math.pow(n.frame.width, 2) + Math.pow(n.frame.height, 2));
        return s + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? r : i();
      var a = Math.floor(r * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && a % 2 !== 0 ? this.initialSize = a - 1 : this.initialSize = a, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var n = e.strings, r = n.VAR_FG_SIZE, i = n.VAR_LEFT, a = n.VAR_TOP, s = n.VAR_FG_SCALE;
      this.adapter.updateCssVariable(r, this.initialSize + "px"), this.adapter.updateCssVariable(s, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(i, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(a, this.unboundedCoords.top + "px"));
    }, e;
  }(Gt)
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
var Pe = {
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
}, en = /* @__PURE__ */ new Set();
en.add(Pe.BACKSPACE);
en.add(Pe.ENTER);
en.add(Pe.SPACEBAR);
en.add(Pe.PAGE_UP);
en.add(Pe.PAGE_DOWN);
en.add(Pe.END);
en.add(Pe.HOME);
en.add(Pe.ARROW_LEFT);
en.add(Pe.ARROW_UP);
en.add(Pe.ARROW_RIGHT);
en.add(Pe.ARROW_DOWN);
en.add(Pe.DELETE);
en.add(Pe.ESCAPE);
en.add(Pe.TAB);
var on = {
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
}, tn = /* @__PURE__ */ new Map();
tn.set(on.BACKSPACE, Pe.BACKSPACE);
tn.set(on.ENTER, Pe.ENTER);
tn.set(on.SPACEBAR, Pe.SPACEBAR);
tn.set(on.PAGE_UP, Pe.PAGE_UP);
tn.set(on.PAGE_DOWN, Pe.PAGE_DOWN);
tn.set(on.END, Pe.END);
tn.set(on.HOME, Pe.HOME);
tn.set(on.ARROW_LEFT, Pe.ARROW_LEFT);
tn.set(on.ARROW_UP, Pe.ARROW_UP);
tn.set(on.ARROW_RIGHT, Pe.ARROW_RIGHT);
tn.set(on.ARROW_DOWN, Pe.ARROW_DOWN);
tn.set(on.DELETE, Pe.DELETE);
tn.set(on.ESCAPE, Pe.ESCAPE);
tn.set(on.TAB, Pe.TAB);
var Mr = /* @__PURE__ */ new Set();
Mr.add(Pe.PAGE_UP);
Mr.add(Pe.PAGE_DOWN);
Mr.add(Pe.END);
Mr.add(Pe.HOME);
Mr.add(Pe.ARROW_LEFT);
Mr.add(Pe.ARROW_UP);
Mr.add(Pe.ARROW_RIGHT);
Mr.add(Pe.ARROW_DOWN);
function yt(t) {
  var e = t.key;
  if (en.has(e))
    return e;
  var n = tn.get(t.keyCode);
  return n || Pe.UNKNOWN;
}
const { applyPassive: Sl } = gc, { matches: gm } = ps;
function Wt(t, { ripple: e = !0, surface: n = !1, unbounded: r = !1, disabled: i = !1, color: a, active: s, rippleElement: c, eventTarget: l, activeTarget: u, addClass: d = (v) => t.classList.add(v), removeClass: h = (v) => t.classList.remove(v), addStyle: f = (v, g) => t.style.setProperty(v, g), initPromise: m = Promise.resolve() } = {}) {
  let v, g = new Wi(), _ = ue("SMUI:addLayoutListener"), S, E = s, C = l, b = u;
  function y() {
    n ? (d("mdc-ripple-surface"), a === "primary" ? (d("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")) : a === "secondary" ? (h("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : (h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary"))) : (h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), v && E !== s && (E = s, s ? v.activate() : s === !1 && v.deactivate()), e && !v ? (v = new mm({
      addClass: d,
      browserSupportsCssVars: () => om(window),
      computeBoundingRect: () => (c || t).getBoundingClientRect(),
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
      isSurfaceActive: () => s ?? gm(u || t, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!r,
      registerDocumentInteractionHandler: (T, A) => {
        const x = Sl();
        g.on(document.documentElement, T, A, typeof x == "boolean" ? { capture: x } : x);
      },
      registerInteractionHandler: (T, A) => {
        const x = Sl();
        g.on(l || t, T, A, typeof x == "boolean" ? { capture: x } : x);
      },
      registerResizeHandler: (T) => g.on(window, "resize", T),
      removeClass: h,
      updateCssVariable: f
    }), m.then(() => {
      v && (v.init(), v.setUnbounded(r));
    })) : v && !e && m.then(() => {
      v && (v.destroy(), v = void 0, g.clear());
    }), v && (C !== l || b !== u) && (C = l, b = u, v.destroy(), requestAnimationFrame(() => {
      v && (v.init(), v.setUnbounded(r));
    })), !e && r && d("mdc-ripple-upgraded--unbounded");
  }
  y(), _ && (S = _(I));
  function I() {
    v && v.layout();
  }
  return {
    update(T) {
      ({
        ripple: e,
        surface: n,
        unbounded: r,
        disabled: i,
        color: a,
        active: s,
        rippleElement: c,
        eventTarget: l,
        activeTarget: u,
        addClass: d,
        removeClass: h,
        addStyle: f,
        initPromise: m
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (A) => t.classList.add(A), removeClass: (A) => t.classList.remove(A), addStyle: (A, x) => t.style.setProperty(A, x), initPromise: Promise.resolve() }, T)), y();
    },
    destroy() {
      v && (v.destroy(), v = void 0, g.clear(), h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), S && S();
    }
  };
}
function pm(t, e) {
  we(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "on", 3, !1), a = p(e, "component", 3, Xi), s = p(e, "tag", 3, "i"), c = /* @__PURE__ */ Ye(e, [
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
  const u = /* @__PURE__ */ fe(() => s() === "svg" || a() === Im), d = ue("SMUI:icon:context");
  function h() {
    return l.getElement();
  }
  var f = { getElement: h }, m = $(), v = Z(m);
  {
    let g = /* @__PURE__ */ fe(() => Ve({
      "mdc-button__icon": d === "button",
      "mdc-fab__icon": d === "fab",
      "mdc-icon-button__icon": d === "icon-button",
      "mdc-icon-button__icon--on": d === "icon-button" && i(),
      "mdc-tab__icon": d === "tab",
      "mdc-banner__icon": d === "banner",
      "mdc-segmented-button__icon": d === "segmented-button",
      [r()]: !0
    }));
    ai(v, a, (_, S) => {
      Ce(
        S(_, rt(
          {
            get tag() {
              return s();
            },
            get use() {
              return n();
            },
            get class() {
              return o(g);
            },
            "aria-hidden": "true"
          },
          () => o(u) ? { focusable: "false", tabindex: "-1" } : {},
          () => c,
          {
            children: (E, C) => {
              var b = $(), y = Z(b);
              Ae(y, () => e.children ?? he), w(E, b);
            },
            $$slots: { default: !0 }
          }
        )),
        (E) => l = E,
        () => l
      );
    });
  }
  return w(t, m), Le(f);
}
var bm = /* @__PURE__ */ sn("<svg><!></svg>");
function Xi(t, e) {
  we(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "tag", 3, "div"), i = /* @__PURE__ */ Ye(e, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
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
  let s;
  function c() {
    return s;
  }
  var l = { getElement: c }, u = $(), d = Z(u);
  {
    var h = (m) => {
      var v = bm();
      ze(v, () => ({ ...i }));
      var g = Ie(v);
      Ae(g, () => e.children ?? he), Ce(v, (_) => s = _, () => s), Ue(v, (_, S) => z == null ? void 0 : z(_, S), n), w(m, v);
    }, f = (m) => {
      var v = $(), g = Z(v);
      {
        var _ = (E) => {
          var C = $(), b = Z(C);
          $o(b, r, !1, (y, I) => {
            Ce(y, (T) => s = T, () => s), Ue(y, (T, A) => z == null ? void 0 : z(T, A), n), ze(y, () => ({ ...i }));
          }), w(E, C);
        }, S = (E) => {
          var C = $(), b = Z(C);
          $o(b, r, !1, (y, I) => {
            Ce(y, (x) => s = x, () => s), Ue(y, (x, D) => z == null ? void 0 : z(x, D), n), ze(y, () => ({ ...i }));
            var T = $(), A = Z(T);
            Ae(A, () => e.children ?? he), w(I, T);
          }), w(E, C);
        };
        ne(
          g,
          (E) => {
            o(a) ? E(_) : E(S, !1);
          },
          !0
        );
      }
      w(m, v);
    };
    ne(d, (m) => {
      r() === "svg" ? m(h) : m(f, !1);
    });
  }
  return w(t, u), Le(l);
}
var _m = /* @__PURE__ */ sn("<svg><!></svg>");
function Im(t, e) {
  we(e, !0), console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let n = p(e, "use", 19, () => []), r = /* @__PURE__ */ Ye(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i;
  function a() {
    return i;
  }
  var s = { getElement: a }, c = _m();
  ze(c, () => ({ ...r }));
  var l = Ie(c);
  return Ae(l, () => e.children ?? he), Ce(c, (u) => i = u, () => i), Ue(c, (u, d) => z == null ? void 0 : z(u, d), n), w(t, c), Le(s);
}
function Ha(t, e) {
  we(e, !0);
  const [n, r] = lr(), i = Qt(e.value);
  te(e.key, i), xe(() => {
    ti(i, e.value);
  }), Sn(() => {
    i.set(void 0);
  });
  var a = $(), s = Z(a);
  Ae(s, () => e.children ?? he), w(t, a), Le(), r();
}
var ym = /* @__PURE__ */ pe('<div class="mdc-button__touch"></div>'), Em = /* @__PURE__ */ pe('<div class="mdc-button__ripple"></div> <!><!>', 1);
function bc(t, e) {
  we(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "ripple", 3, !0), s = p(e, "color", 3, "primary"), c = p(e, "variant", 3, "text"), l = p(e, "touch", 3, !1), u = p(e, "action", 3, "close"), d = p(e, "defaultAction", 3, !1), h = p(e, "secondary", 3, !1), f = p(e, "component", 3, Xi), m = p(e, "tag", 19, () => e.href == null ? "button" : "a"), v = /* @__PURE__ */ Ye(e, [
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
  ]), g, _ = ge({}), S = ge({}), E = ue("SMUI:button:context");
  const C = /* @__PURE__ */ fe(() => E === "dialog:action" && u() != null ? { "data-mdc-dialog-action": u() } : { action: u() }), b = /* @__PURE__ */ fe(() => E === "dialog:action" && d() ? { "data-mdc-dialog-button-default": "" } : {}), y = /* @__PURE__ */ fe(() => E === "banner" ? {} : { secondary: h() });
  let I = e.disabled;
  xe(() => {
    if (I !== e.disabled) {
      if (g) {
        const V = X();
        "blur" in V && V.blur();
      }
      I = v.disabled;
    }
  }), te("SMUI:label:context", "button"), te("SMUI:icon:context", "button");
  function T(V) {
    _[V] || (_[V] = !0);
  }
  function A(V) {
    (!(V in _) || _[V]) && (_[V] = !1);
  }
  function x(V, N) {
    S[V] != N && (N === "" || N == null ? delete S[V] : S[V] = N);
  }
  function D() {
    E === "banner" && Ze(X(), h() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function X() {
    return g.getElement();
  }
  var k = { getElement: X }, B = $(), me = Z(B);
  {
    let V = /* @__PURE__ */ fe(() => [
      [
        Wt,
        {
          ripple: a(),
          unbounded: !1,
          color: s(),
          disabled: !!e.disabled,
          addClass: T,
          removeClass: A,
          addStyle: x
        }
      ],
      ...n()
    ]), N = /* @__PURE__ */ fe(() => Ve({
      "mdc-button": !0,
      "mdc-button--raised": c() === "raised",
      "mdc-button--unelevated": c() === "unelevated",
      "mdc-button--outlined": c() === "outlined",
      "smui-button--color-secondary": s() === "secondary",
      "mdc-button--touch": l(),
      "mdc-card__action": E === "card:action",
      "mdc-card__action--button": E === "card:action",
      "mdc-dialog__button": E === "dialog:action",
      "mdc-top-app-bar__navigation-icon": E === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": E === "top-app-bar:action",
      "mdc-snackbar__action": E === "snackbar:actions",
      "mdc-banner__secondary-action": E === "banner" && h(),
      "mdc-banner__primary-action": E === "banner" && !h(),
      "mdc-tooltip__action": E === "tooltip:rich-actions",
      ..._,
      [r()]: !0
    })), H = /* @__PURE__ */ fe(() => Object.entries(S).map(([K, J]) => `${K}: ${J};`).concat([i()]).join(" "));
    ai(me, f, (K, J) => {
      Ce(
        J(K, rt(
          {
            get tag() {
              return m();
            },
            get use() {
              return o(V);
            },
            get class() {
              return o(N);
            },
            get style() {
              return o(H);
            }
          },
          () => o(C),
          () => o(b),
          () => o(y),
          {
            get href() {
              return e.href;
            }
          },
          () => v,
          {
            onclick: (M) => {
              var L;
              D(), (L = e.onclick) == null || L.call(e, M);
            },
            children: (M, L) => {
              var P = Em(), Ee = _e(Z(P), 2);
              Ae(Ee, () => e.children ?? he);
              var ye = _e(Ee);
              {
                var ce = (Se) => {
                  var F = ym();
                  w(Se, F);
                };
                ne(ye, (Se) => {
                  l() && Se(ce);
                });
              }
              w(M, P);
            },
            $$slots: { default: !0 }
          }
        )),
        (M) => g = M,
        () => g
      );
    });
  }
  return w(t, B), Le(k);
}
function Am(t, e) {
  we(e, !0);
  let n = p(e, "callback", 3, () => {
  }), r = p(e, "disabled", 3, !1), i = p(e, "variant", 3, "default"), a = p(e, "isAbortAction", 3, !1), s = p(e, "backgroundColor", 3, void 0);
  {
    let c = /* @__PURE__ */ fe(() => a() ? "background-color: #ff3e00;" : "background-color: " + s());
    bc(t, {
      onclick: () => n()(),
      get variant() {
        return i();
      },
      get disabled() {
        return r();
      },
      get style() {
        return o(c);
      },
      children: (l, u) => {
        var d = $(), h = Z(d);
        Ae(h, () => e.children ?? he), w(l, d);
      },
      $$slots: { default: !0 }
    });
  }
  Le();
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
var Pa = {
  ICON_BUTTON_ON: "mdc-icon-button--on",
  ROOT: "mdc-icon-button"
}, Xn = {
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
var Sm = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      var r = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return r.hasToggledAriaLabel = !1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Pa;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Xn;
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
      var n = this.adapter.getAttr(Xn.DATA_ARIA_LABEL_ON), r = this.adapter.getAttr(Xn.DATA_ARIA_LABEL_OFF);
      if (n && r) {
        if (this.adapter.getAttr(Xn.ARIA_PRESSED) !== null)
          throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");
        this.hasToggledAriaLabel = !0;
      } else
        this.adapter.setAttr(Xn.ARIA_PRESSED, String(this.isOn()));
    }, e.prototype.handleClick = function() {
      this.toggle(), this.adapter.notifyChange({ isOn: this.isOn() });
    }, e.prototype.isOn = function() {
      return this.adapter.hasClass(Pa.ICON_BUTTON_ON);
    }, e.prototype.toggle = function(n) {
      if (n === void 0 && (n = !this.isOn()), n ? this.adapter.addClass(Pa.ICON_BUTTON_ON) : this.adapter.removeClass(Pa.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var r = n ? this.adapter.getAttr(Xn.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(Xn.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr(Xn.ARIA_LABEL, r || "");
      } else
        this.adapter.setAttr(Xn.ARIA_PRESSED, "" + n);
    }, e;
  }(Gt)
), Cm = /* @__PURE__ */ pe('<div class="mdc-icon-button__touch"></div>'), xm = /* @__PURE__ */ pe('<div class="mdc-icon-button__ripple"></div> <!><!>', 1);
function Tm(t, e) {
  we(e, !0);
  let n = () => {
  };
  function r(L) {
    return L === n;
  }
  let i = p(e, "use", 19, () => []), a = p(e, "class", 3, ""), s = p(e, "style", 3, ""), c = p(e, "ripple", 3, !0), l = p(e, "toggle", 3, !1), u = p(e, "pressed", 15, n), d = p(e, "touch", 3, !1), h = p(e, "displayFlex", 3, !0), f = p(e, "size", 3, "normal"), m = p(e, "component", 3, Xi), v = p(e, "tag", 19, () => e.href == null ? "button" : "a"), g = /* @__PURE__ */ Ye(e, [
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
  ]), _, S, E = /* @__PURE__ */ ve(ge({})), C = ge({}), b = /* @__PURE__ */ ve(ge({})), y = ue("SMUI:icon-button:context"), I = ue("SMUI:icon-button:aria-describedby");
  const T = /* @__PURE__ */ fe(() => {
    if (y === "data-table:pagination")
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
    else return y === "dialog:header" || y === "dialog:sheet" ? { "data-mdc-dialog-action": e.action } : { action: e.action };
  });
  let A = !!e.disabled;
  xe(() => {
    if (A != !!e.disabled) {
      if (_) {
        const L = H();
        "blur" in L && L.blur();
      }
      A = !!e.disabled;
    }
  }), te("SMUI:icon:context", "icon-button");
  let x = null;
  xe(() => {
    _ && H() && l() !== x && (l() && !S ? (S = new Sm({
      addClass: X,
      hasClass: D,
      notifyChange: (L) => {
        N(L), Ze(H(), "SMUIIconButtonToggleChange", L);
      },
      removeClass: k,
      getAttr: me,
      setAttr: V
    }), S.init()) : !l() && S && (S.destroy(), S = void 0, q(E, {}, !0), q(b, {}, !0)), x = l());
  }), xe(() => {
    S && !r(u()) && S.isOn() !== u() && S.toggle(u());
  }), Sn(() => {
    S && S.destroy();
  });
  function D(L) {
    return L in o(E) ? o(E)[L] : H().classList.contains(L);
  }
  function X(L) {
    o(E)[L] || (o(E)[L] = !0);
  }
  function k(L) {
    (!(L in o(E)) || o(E)[L]) && (o(E)[L] = !1);
  }
  function B(L, P) {
    C[L] != P && (P === "" || P == null ? delete C[L] : C[L] = P);
  }
  function me(L) {
    return L in o(b) ? o(b)[L] ?? null : H().getAttribute(L);
  }
  function V(L, P) {
    o(b)[L] !== P && (o(b)[L] = P);
  }
  function N(L) {
    u(L.isOn);
  }
  function H() {
    return _.getElement();
  }
  var K = { getElement: H }, J = $(), M = Z(J);
  {
    let L = /* @__PURE__ */ fe(() => [
      [
        Wt,
        {
          ripple: c(),
          unbounded: !0,
          color: e.color,
          disabled: !!e.disabled,
          addClass: X,
          removeClass: k,
          addStyle: B
        }
      ],
      ...i()
    ]), P = /* @__PURE__ */ fe(() => Ve({
      "mdc-icon-button": !0,
      "mdc-icon-button--on": !r(u()) && u(),
      "mdc-icon-button--touch": d(),
      "mdc-icon-button--display-flex": h(),
      "smui-icon-button--size-button": f() === "button",
      "smui-icon-button--size-mini": f() === "mini",
      "mdc-icon-button--reduced-size": f() === "mini" || f() === "button",
      "mdc-card__action": y === "card:action",
      "mdc-card__action--icon": y === "card:action",
      "mdc-top-app-bar__navigation-icon": y === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": y === "top-app-bar:action",
      "mdc-snackbar__dismiss": y === "snackbar:actions",
      "mdc-data-table__pagination-button": y === "data-table:pagination",
      "mdc-data-table__sort-icon-button": y === "data-table:sortable-header-cell",
      "mdc-dialog__close": (y === "dialog:header" || y === "dialog:sheet") && e.action === "close",
      ...o(E),
      [a()]: !0
    })), Ee = /* @__PURE__ */ fe(() => Object.entries(C).map(([Se, F]) => `${Se}: ${F};`).concat([s()]).join(" ")), ye = /* @__PURE__ */ fe(() => r(u()) ? null : u() ? "true" : "false"), ce = /* @__PURE__ */ fe(() => u() ? e.ariaLabelOn : e.ariaLabelOff);
    ai(M, m, (Se, F) => {
      Ce(
        F(Se, rt(
          {
            get tag() {
              return v();
            },
            get use() {
              return o(L);
            },
            get class() {
              return o(P);
            },
            get style() {
              return o(Ee);
            },
            get "aria-pressed"() {
              return o(ye);
            },
            get "aria-label"() {
              return o(ce);
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
          () => o(T),
          () => o(b),
          () => g,
          {
            onclick: (re) => {
              var W;
              S && S.handleClick(), y === "top-app-bar:navigation" && Ze(H(), "SMUITopAppBarIconButtonNav"), (W = e.onclick) == null || W.call(e, re);
            },
            children: (re, W) => {
              var ie = xm(), Te = _e(Z(ie), 2);
              Ae(Te, () => e.children ?? he);
              var j = _e(Te);
              {
                var ee = (Oe) => {
                  var be = Cm();
                  w(Oe, be);
                };
                ne(j, (Oe) => {
                  d() && Oe(ee);
                });
              }
              w(re, ie);
            },
            $$slots: { default: !0 }
          }
        )),
        (re) => _ = re,
        () => _
      );
    });
  }
  return w(t, J), Le(K);
}
function wm(t, e) {
  let n = p(e, "callback", 3, () => {
  }), r = p(e, "icon", 3, ""), i = p(e, "disabled", 3, !1);
  Tm(t, {
    get disabled() {
      return i();
    },
    style: "margin-bottom: 0;",
    $$events: {
      click(...a) {
        var s;
        (s = n()) == null || s.apply(this, a);
      }
    },
    children: (a, s) => {
      pm(a, {
        class: "material-icons",
        children: (c, l) => {
          var u = Kt();
          He(() => ht(u, r())), w(c, u);
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
var Lm = {
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
var Om = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      var r = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return r.shakeAnimationEndHandler = function() {
        r.handleShakeAnimationEnd();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Lm;
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
  }(Gt)
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
var Br = {
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
var Rm = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      var r = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return r.transitionEndHandler = function(i) {
        r.handleTransitionEnd(i);
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Br;
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
      this.adapter.removeClass(Br.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(Br.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(n) {
      this.adapter.setStyle("transform-origin", n + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(Br.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(n) {
      var r = this.adapter.hasClass(Br.LINE_RIPPLE_DEACTIVATING);
      n.propertyName === "opacity" && r && (this.adapter.removeClass(Br.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(Br.LINE_RIPPLE_DEACTIVATING));
    }, e;
  }(Gt)
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
var Mm = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Cl = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, Dm = {
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
var Hm = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      return t.call(this, le(le({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Mm;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Dm;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Cl;
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
      n > 0 && (n += Cl.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(n), this.adapter.addClass(r);
    }, e.prototype.closeNotch = function() {
      var n = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(n), this.adapter.removeNotchWidthProperty();
    }, e;
  }(Gt)
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
var Ms = {
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
}, Pm = {
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
}, xl = {
  LABEL_SCALE: 0.75
}, Nm = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], Um = [
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
var Tl = ["mousedown", "touchstart"], wl = ["click", "keydown"], km = (
  /** @class */
  function(t) {
    tt(e, t);
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
        return Pm;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Ms;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return xl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var n = this.getNativeInput().type;
        return Um.indexOf(n) >= 0;
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
        for (var s = Lt(Tl), c = s.next(); !c.done; c = s.next()) {
          var l = c.value;
          this.adapter.registerInputInteractionHandler(l, this.setPointerXOffset);
        }
      } catch (h) {
        n = { error: h };
      } finally {
        try {
          c && !c.done && (r = s.return) && r.call(s);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var u = Lt(wl), d = u.next(); !d.done; d = u.next()) {
          var l = d.value;
          this.adapter.registerTextFieldInteractionHandler(l, this.textFieldInteractionHandler);
        }
      } catch (h) {
        i = { error: h };
      } finally {
        try {
          d && !d.done && (a = u.return) && a.call(u);
        } finally {
          if (i) throw i.error;
        }
      }
      this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler), this.setcharacterCounter(this.getValue().length);
    }, e.prototype.destroy = function() {
      var n, r, i, a;
      this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var s = Lt(Tl), c = s.next(); !c.done; c = s.next()) {
          var l = c.value;
          this.adapter.deregisterInputInteractionHandler(l, this.setPointerXOffset);
        }
      } catch (h) {
        n = { error: h };
      } finally {
        try {
          c && !c.done && (r = s.return) && r.call(s);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var u = Lt(wl), d = u.next(); !d.done; d = u.next()) {
          var l = d.value;
          this.adapter.deregisterTextFieldInteractionHandler(l, this.textFieldInteractionHandler);
        }
      } catch (h) {
        i = { error: h };
      } finally {
        try {
          d && !d.done && (a = u.return) && a.call(u);
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
        return Nm.indexOf(i) > -1 ? (r.styleValidity(!0), r.adapter.setLabelRequired(r.getNativeInput().required), !0) : !1;
      }), n.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(n) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (n) {
          var r = this.adapter.getLabelWidth() * xl.LABEL_SCALE;
          this.adapter.notchOutline(r);
        } else
          this.adapter.closeOutline();
    }, e.prototype.activateFocus = function() {
      this.isFocused = !0, this.styleFocused(this.isFocused), this.adapter.activateLineRipple(), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.helperText && (this.helperText.isPersistent() || !this.helperText.isValidation() || !this.valid) && this.helperText.showToScreenReader();
    }, e.prototype.setTransformOrigin = function(n) {
      if (!(this.isDisabled() || this.adapter.hasOutline())) {
        var r = n.touches, i = r ? r[0] : n, a = i.target.getBoundingClientRect(), s = i.clientX - a.left;
        this.adapter.setLineRippleTransformOrigin(s);
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
        var a = this.helperText.isVisible(), s = this.helperText.getId();
        a && s ? this.adapter.setInputAttr(Ms.ARIA_DESCRIBEDBY, s) : this.adapter.removeInputAttr(Ms.ARIA_DESCRIBEDBY);
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
  }(Gt)
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
var Ll = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, Bm = {
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
var Ol = ["click", "keydown"], Fm = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      var r = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return r.savedTabIndex = null, r.interactionHandler = function(i) {
        r.handleInteraction(i);
      }, r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Ll;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Bm;
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
        for (var i = Lt(Ol), a = i.next(); !a.done; a = i.next()) {
          var s = a.value;
          this.adapter.registerInteractionHandler(s, this.interactionHandler);
        }
      } catch (c) {
        n = { error: c };
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
        for (var i = Lt(Ol), a = i.next(); !a.done; a = i.next()) {
          var s = a.value;
          this.adapter.deregisterInteractionHandler(s, this.interactionHandler);
        }
      } catch (c) {
        n = { error: c };
      } finally {
        try {
          a && !a.done && (r = i.return) && r.call(i);
        } finally {
          if (n) throw n.error;
        }
      }
    }, e.prototype.setDisabled = function(n) {
      this.savedTabIndex && (n ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", Ll.ICON_ROLE)));
    }, e.prototype.setAriaLabel = function(n) {
      this.adapter.setAttr("aria-label", n);
    }, e.prototype.setContent = function(n) {
      this.adapter.setContent(n);
    }, e.prototype.handleInteraction = function(n) {
      var r = n.key === "Enter" || n.keyCode === 13;
      (n.type === "click" || r) && (n.preventDefault(), this.adapter.notifyIconAction());
    }, e;
  }(Gt)
), Vm = /* @__PURE__ */ pe("<span><!></span>"), Gm = /* @__PURE__ */ pe("<label><!></label>");
function es(t, e) {
  we(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "floatAbove", 15, !1), s = p(e, "required", 15, !1), c = p(e, "wrapped", 3, !1), l = /* @__PURE__ */ Ye(e, [
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
  ]), u, d = /* @__PURE__ */ ve(void 0), h = new Wi(), f = ge({}), m = ge({}), v = ue("SMUI:generic:input:props") ?? {}, g = a();
  xe(() => {
    o(d) && g !== a() && (g = a(), o(d).float(a()));
  });
  let _ = s();
  xe(() => {
    o(d) && _ !== s() && (_ = s(), o(d).setRequired(s()));
  });
  const S = ue("SMUI:floating-label:mount"), E = ue("SMUI:floating-label:unmount");
  ot(() => {
    q(
      d,
      new Om({
        addClass: C,
        removeClass: b,
        getWidth: () => {
          var L, P;
          const K = X(), J = K.cloneNode(!0);
          (L = K.parentNode) == null || L.appendChild(J), J.classList.add("smui-floating-label--remove-transition"), J.classList.add("smui-floating-label--force-size"), J.classList.remove("mdc-floating-label--float-above");
          const M = J.scrollWidth;
          return (P = K.parentNode) == null || P.removeChild(J), M;
        },
        registerInteractionHandler: (K, J) => h.on(X(), K, J),
        deregisterInteractionHandler: (K, J) => h.off(X(), K, J)
      }),
      !0
    );
    const H = {
      get element() {
        return X();
      },
      addStyle: y,
      removeStyle: I
    };
    return S && S(H), o(d).init(), () => {
      var K;
      E && E(H), (K = o(d)) == null || K.destroy(), h.clear();
    };
  });
  function C(H) {
    f[H] || (f[H] = !0);
  }
  function b(H) {
    (!(H in f) || f[H]) && (f[H] = !1);
  }
  function y(H, K) {
    m[H] != K && (K === "" || K == null ? delete m[H] : m[H] = K);
  }
  function I(H) {
    H in m && delete m[H];
  }
  function T(H) {
    var K;
    (K = o(d)) == null || K.shake(H);
  }
  function A(H) {
    a(H);
  }
  function x(H) {
    s(H);
  }
  function D() {
    if (o(d) == null)
      throw new Error("Instance is undefined.");
    return o(d).getWidth();
  }
  function X() {
    return u;
  }
  var k = { shake: T, float: A, setRequired: x, getWidth: D, getElement: X }, B = $(), me = Z(B);
  {
    var V = (H) => {
      var K = Vm();
      ze(K, (M, L) => ({ class: M, style: L, ...l }), [
        () => Ve({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": s(),
          ...f,
          [r()]: !0
        }),
        () => Object.entries(m).map(([M, L]) => `${M}: ${L};`).concat([i()]).join(" ")
      ]);
      var J = Ie(K);
      Ae(J, () => e.children ?? he), Ce(K, (M) => u = M, () => u), Ue(K, (M, L) => z == null ? void 0 : z(M, L), n), w(H, K);
    }, N = (H) => {
      var K = Gm();
      ze(
        K,
        (M, L) => ({
          class: M,
          style: L,
          for: e.for || (v ? v.id : void 0),
          ...l
        }),
        [
          () => Ve({
            "mdc-floating-label": !0,
            "mdc-floating-label--float-above": a(),
            "mdc-floating-label--required": s(),
            ...f,
            [r()]: !0
          }),
          () => Object.entries(m).map(([M, L]) => `${M}: ${L};`).concat([i()]).join(" ")
        ]
      );
      var J = Ie(K);
      Ae(J, () => e.children ?? he), Ce(K, (M) => u = M, () => u), Ue(K, (M, L) => z == null ? void 0 : z(M, L), n), w(H, K);
    };
    ne(me, (H) => {
      c() ? H(V) : H(N, !1);
    });
  }
  return w(t, B), Le(k);
}
var jm = /* @__PURE__ */ pe("<div></div>");
function _c(t, e) {
  we(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "active", 3, !1), s = /* @__PURE__ */ Ye(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "active"
  ]), c, l = /* @__PURE__ */ ve(void 0), u = new Wi(), d = ge({}), h = ge({});
  ot(() => (q(
    l,
    new Rm({
      addClass: m,
      removeClass: v,
      hasClass: f,
      setStyle: g,
      registerEventHandler: (I, T) => u.on(C(), I, T),
      deregisterEventHandler: (I, T) => u.off(C(), I, T)
    }),
    !0
  ), o(l).init(), () => {
    var I;
    (I = o(l)) == null || I.destroy(), u.clear();
  }));
  function f(I) {
    return I in d ? d[I] : C().classList.contains(I);
  }
  function m(I) {
    d[I] || (d[I] = !0);
  }
  function v(I) {
    (!(I in d) || d[I]) && (d[I] = !1);
  }
  function g(I, T) {
    h[I] != T && (T === "" || T == null ? delete h[I] : h[I] = T);
  }
  function _() {
    var I;
    (I = o(l)) == null || I.activate();
  }
  function S() {
    var I;
    (I = o(l)) == null || I.deactivate();
  }
  function E(I) {
    var T;
    (T = o(l)) == null || T.setRippleCenter(I);
  }
  function C() {
    return c;
  }
  var b = { activate: _, deactivate: S, setRippleCenter: E, getElement: C }, y = jm();
  return ze(y, (I, T) => ({ class: I, style: T, ...s }), [
    () => Ve({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...d,
      [r()]: !0
    }),
    () => Object.entries(h).map(([I, T]) => `${I}: ${T};`).concat([i()]).join(" ")
  ]), Ce(y, (I) => c = I, () => c), Ue(y, (I, T) => z == null ? void 0 : z(I, T), n), w(t, y), Le(b);
}
var qm = /* @__PURE__ */ pe('<div class="mdc-notched-outline__notch"><!></div>'), zm = /* @__PURE__ */ pe('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function Ic(t, e) {
  we(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "notched", 3, !1), a = p(e, "noLabel", 3, !1), s = /* @__PURE__ */ Ye(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "notched",
    "noLabel",
    "children"
  ]), c, l = /* @__PURE__ */ ve(void 0), u = /* @__PURE__ */ ve(void 0), d = ge({}), h = ge({}), f;
  xe(() => {
    o(u) !== f && (o(u) ? (o(u).addStyle("transition-duration", "0s"), m("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      o(u) && o(u).removeStyle("transition-duration");
    })) : v("mdc-notched-outline--upgraded"), f = o(u));
  }), te("SMUI:floating-label:mount", (A) => {
    q(u, A, !0);
  }), te("SMUI:floating-label:unmount", () => {
    q(u, void 0);
  }), ot(() => (q(
    l,
    new Hm({
      addClass: m,
      removeClass: v,
      setNotchWidthProperty: (A) => g("width", A + "px"),
      removeNotchWidthProperty: () => _("width")
    }),
    !0
  ), o(l).init(), () => {
    var A;
    (A = o(l)) == null || A.destroy();
  }));
  function m(A) {
    d[A] || (d[A] = !0);
  }
  function v(A) {
    (!(A in d) || d[A]) && (d[A] = !1);
  }
  function g(A, x) {
    h[A] != x && (x === "" || x == null ? delete h[A] : h[A] = x);
  }
  function _(A) {
    A in h && delete h[A];
  }
  function S(A) {
    var x;
    (x = o(l)) == null || x.notch(A);
  }
  function E() {
    var A;
    (A = o(l)) == null || A.closeNotch();
  }
  function C() {
    return c;
  }
  var b = { notch: S, closeNotch: E, getElement: C }, y = zm();
  ze(y, (A) => ({ class: A, ...s }), [
    () => Ve({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": i(),
      "mdc-notched-outline--no-label": a(),
      ...d,
      [r()]: !0
    })
  ]);
  var I = _e(Ie(y), 2);
  {
    var T = (A) => {
      var x = qm(), D = Ie(x);
      Ae(D, () => e.children ?? he), He((X) => Vt(x, X), [
        () => Object.entries(h).map(([X, k]) => `${X}: ${k};`).join(" ")
      ]), w(A, x);
    };
    ne(I, (A) => {
      a() || A(T);
    });
  }
  return Ce(y, (A) => c = A, () => c), Ue(y, (A, x) => z == null ? void 0 : z(A, x), n), w(t, y), Le(b);
}
function Ro(t, e) {
  we(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "component", 3, Xi), a = p(e, "tag", 3, "div"), s = p(e, "_smuiClass", 3, ""), c = p(e, "_smuiClassMap", 23, () => ({})), l = p(e, "_smuiContexts", 19, () => ({})), u = p(e, "_smuiProps", 19, () => ({})), d = /* @__PURE__ */ Ye(e, [
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
  Object.entries(c()).forEach(([S, E]) => {
    const C = ue(E);
    C && "subscribe" in C && f.push(C.subscribe((b) => {
      c()[S] = b;
    }));
  });
  for (let S in l())
    l().hasOwnProperty(S) && te(S, l()[S]);
  Sn(() => {
    for (const S of f)
      S();
  });
  function m() {
    return h.getElement();
  }
  var v = { getElement: m }, g = $(), _ = Z(g);
  {
    let S = /* @__PURE__ */ fe(() => Ve({
      [s()]: !0,
      ...c(),
      [r()]: !0
    }));
    ai(_, i, (E, C) => {
      Ce(
        C(E, rt(
          {
            get tag() {
              return a();
            },
            get use() {
              return n();
            },
            get class() {
              return o(S);
            }
          },
          u,
          () => d,
          {
            children: (b, y) => {
              var I = $(), T = Z(I);
              Ae(T, () => e.children ?? he), w(b, I);
            },
            $$slots: { default: !0 }
          }
        )),
        (b) => h = b,
        () => h
      );
    });
  }
  return w(t, g), Le(v);
}
function Wm(t, e) {
  we(e, !0);
  let n = /* @__PURE__ */ Ye(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ce(
    Ro(t, rt({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => n, {
      children: (s, c) => {
        var l = $(), u = Z(l);
        Ae(u, () => e.children ?? he), w(s, l);
      },
      $$slots: { default: !0 }
    })),
    (s) => r = s,
    () => r
  ), Le(a);
}
function Xm(t, e) {
  we(e, !0);
  let n = /* @__PURE__ */ Ye(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ce(
    Ro(t, rt(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => n,
      {
        children: (s, c) => {
          var l = $(), u = Z(l);
          Ae(u, () => e.children ?? he), w(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Le(a);
}
function Km(t, e) {
  we(e, !0);
  let n = /* @__PURE__ */ Ye(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ce(
    Ro(t, rt(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => n,
      {
        children: (s, c) => {
          var l = $(), u = Z(l);
          Ae(u, () => e.children ?? he), w(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Le(a);
}
var Zm = /* @__PURE__ */ pe("<input/>");
function Ym(t, e) {
  we(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "type", 3, "text"), a = p(e, "placeholder", 3, " "), s = p(e, "value", 15), c = p(e, "files", 15, null), l = p(e, "dirty", 15, !1), u = p(e, "invalid", 15, !1), d = p(e, "updateInvalid", 3, !0), h = p(e, "initialInvalid", 3, !1), f = p(e, "emptyValueNull", 19, () => s() === null), m = p(e, "emptyValueUndefined", 19, () => s() === void 0), v = /* @__PURE__ */ Ye(e, [
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
  ]), g, _ = ge({}), S = ge({});
  xe(() => {
    i() === "file" ? delete S.value : S.value = s() == null ? "" : s();
  }), ot(() => {
    d() && h() && u(D().matches(":invalid"));
  });
  function E(V) {
    return V === "" ? Number.NaN : +V;
  }
  function C(V) {
    if (i() === "file") {
      c(V.currentTarget.files);
      return;
    }
    if (V.currentTarget.value === "" && f()) {
      s(null);
      return;
    }
    if (V.currentTarget.value === "" && m()) {
      s(void 0);
      return;
    }
    switch (i()) {
      case "number":
      case "range":
        s(E(V.currentTarget.value));
        break;
      default:
        s(V.currentTarget.value);
        break;
    }
  }
  function b(V) {
    (i() === "file" || i() === "range") && C(V), l(!0), d() && u(D().matches(":invalid"));
  }
  function y(V) {
    return V in _ ? _[V] ?? null : D().getAttribute(V);
  }
  function I(V, N) {
    _[V] !== N && (_[V] = N);
  }
  function T(V) {
    (!(V in _) || _[V] != null) && (_[V] = void 0);
  }
  function A() {
    D().focus();
  }
  function x() {
    D().blur();
  }
  function D() {
    return g;
  }
  var X = { getAttr: y, addAttr: I, removeAttr: T, focus: A, blur: x, getElement: D }, k = Zm(), B = (V) => {
    var N;
    i() !== "file" && C(V), (N = e.oninput) == null || N.call(e, V);
  }, me = (V) => {
    var N;
    b(V), (N = e.onchange) == null || N.call(e, V);
  };
  return ze(
    k,
    (V) => ({
      class: V,
      type: i(),
      placeholder: a(),
      ...S,
      ..._,
      ...v,
      oninput: B,
      onchange: me
    }),
    [
      () => Ve({ "mdc-text-field__input": !0, [r()]: !0 })
    ],
    void 0,
    void 0,
    !0
  ), Ce(k, (V) => g = V, () => g), Ue(k, (V, N) => z == null ? void 0 : z(V, N), n), w(t, k), Le(X);
}
var Qm = /* @__PURE__ */ pe("<textarea></textarea>");
function Jm(t, e) {
  we(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "value", 15, ""), s = p(e, "dirty", 15, !1), c = p(e, "invalid", 15, !1), l = p(e, "updateInvalid", 3, !0), u = p(e, "initialInvalid", 3, !1), d = p(e, "resizable", 3, !0), h = /* @__PURE__ */ Ye(e, [
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
  ]), f, m = ge({});
  ot(() => {
    l() && u() && c(b().matches(":invalid"));
  });
  function v() {
    s(!0), l() && c(b().matches(":invalid"));
  }
  function g(A) {
    return A in m ? m[A] ?? null : b().getAttribute(A);
  }
  function _(A, x) {
    m[A] !== x && (m[A] = x);
  }
  function S(A) {
    (!(A in m) || m[A] != null) && (m[A] = void 0);
  }
  function E() {
    b().focus();
  }
  function C() {
    b().blur();
  }
  function b() {
    return f;
  }
  var y = { getAttr: g, addAttr: _, removeAttr: S, focus: E, blur: C, getElement: b }, I = Qm(), T = (A) => {
    var x;
    v(), (x = e.onchange) == null || x.call(e, A);
  };
  return ze(
    I,
    (A) => ({
      class: A,
      style: `${d() ? "" : "resize: none; "}${i()}`,
      ...m,
      ...h,
      onchange: T
    }),
    [
      () => Ve({ "mdc-text-field__input": !0, [r()]: !0 })
    ]
  ), Ce(I, (A) => f = A, () => f), Ue(I, (A, x) => z == null ? void 0 : z(A, x), n), Lr(() => va(I, a)), w(t, I), Le(y);
}
var $m = /* @__PURE__ */ pe('<span class="mdc-text-field__ripple"></span>'), eg = /* @__PURE__ */ pe("<!> <!>", 1), tg = /* @__PURE__ */ pe("<span><!> <!></span>"), ng = /* @__PURE__ */ pe("<!> <!> <!>", 1), rg = /* @__PURE__ */ pe("<label><!> <!> <!> <!> <!> <!> <!></label>"), ig = /* @__PURE__ */ pe("<div><!> <!> <!> <!> <!></div>"), ag = /* @__PURE__ */ pe("<!> <!>", 1);
function ao(t, e) {
  we(e, !0);
  const { applyPassive: n } = gc;
  let r = () => {
  };
  function i(G) {
    return G === r;
  }
  let a = p(e, "use", 19, () => []), s = p(e, "class", 3, ""), c = p(e, "style", 3, ""), l = p(e, "ripple", 3, !0), u = p(e, "disabled", 3, !1), d = p(e, "required", 3, !1), h = p(e, "textarea", 3, !1), f = p(e, "variant", 19, () => h() ? "outlined" : "standard"), m = p(e, "noLabel", 3, !1), v = p(e, "type", 3, "text"), g = p(e, "value", 15), _ = p(e, "files", 15, r), S = p(e, "invalid", 15, r), E = p(e, "updateInvalid", 19, () => i(S())), C = p(e, "initialInvalid", 3, !1), b = p(e, "dirty", 15, !1), y = p(e, "validateOnValueChange", 19, E), I = p(e, "useNativeValidation", 19, E), T = p(e, "withLeadingIcon", 3, r), A = p(e, "withTrailingIcon", 3, r), x = p(e, "input", 7), D = p(e, "floatingLabel", 7), X = p(e, "lineRipple", 7), k = p(e, "notchedOutline", 7), B = /* @__PURE__ */ Ye(e, [
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
  const me = g() !== void 0 || g() === void 0 && e.input$emptyValueUndefined || !i(_());
  i(_()) && _(null), i(S()) && S(!1);
  let V, N = /* @__PURE__ */ ve(void 0), H = new Wi(), K = ge({}), J = ge({}), M = /* @__PURE__ */ ve(void 0), L = /* @__PURE__ */ ve(!1), P = /* @__PURE__ */ ve(ge(C())), Ee = ue("SMUI:addLayoutListener"), ye, ce, Se = new Promise((G) => ce = G), F, re, W, ie;
  const Te = /* @__PURE__ */ fe(() => x() && x().getElement());
  xe(() => {
    (b() || o(P) || !E()) && o(N) && o(N).isValid() !== !S() && (E() ? S(!o(N).isValid()) : o(N).setValid(!S()));
  }), xe(() => {
    o(N) && o(N).getValidateOnValueChange() !== y() && o(N).setValidateOnValueChange(i(y()) ? !1 : y());
  }), xe(() => {
    o(N) && o(N).setUseNativeValidation(i(I()) ? !0 : I());
  }), xe(() => {
    o(N) && o(N).setDisabled(u());
  });
  let j = g();
  xe(() => {
    if (o(N) && me && j !== g()) {
      j = g();
      const G = `${g() == null ? "" : g()}`;
      o(N).getValue() !== G && o(N).setValue(G);
    }
  }), Ee && (ye = Ee(R)), te("SMUI:textfield:leading-icon:mount", (G) => {
    F = G;
  }), te("SMUI:textfield:leading-icon:unmount", () => {
    F = void 0;
  }), te("SMUI:textfield:trailing-icon:mount", (G) => {
    re = G;
  }), te("SMUI:textfield:trailing-icon:unmount", () => {
    re = void 0;
  }), te("SMUI:textfield:helper-text:id", (G) => {
    q(M, G, !0);
  }), te("SMUI:textfield:helper-text:mount", (G) => {
    W = G;
  }), te("SMUI:textfield:helper-text:unmount", () => {
    q(M, void 0), W = void 0;
  }), te("SMUI:textfield:character-counter:mount", (G) => {
    ie = G;
  }), te("SMUI:textfield:character-counter:unmount", () => {
    ie = void 0;
  }), ot(() => {
    var G;
    if (q(
      N,
      new km(
        {
          // getRootAdapterMethods_
          addClass: Oe,
          removeClass: be,
          hasClass: ee,
          registerTextFieldInteractionHandler: (Y, Re) => H.on(U(), Y, Re),
          deregisterTextFieldInteractionHandler: (Y, Re) => H.off(U(), Y, Re),
          registerValidationAttributeChangeHandler: (Y) => {
            const Re = (Et) => Et.map((Nt) => Nt.attributeName).filter((Nt) => Nt), at = new MutationObserver((Et) => {
              I() && Y(Re(Et));
            }), nt = { attributes: !0 };
            return x() && at.observe(x().getElement(), nt), at;
          },
          deregisterValidationAttributeChangeHandler: (Y) => {
            Y.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var Y;
            return ((Y = x()) == null ? void 0 : Y.getElement()) ?? null;
          },
          setInputAttr: (Y, Re) => {
            var at;
            (at = x()) == null || at.addAttr(Y, Re);
          },
          removeInputAttr: (Y) => {
            var Re;
            (Re = x()) == null || Re.removeAttr(Y);
          },
          isFocused: () => {
            var Y;
            return document.activeElement === ((Y = x()) == null ? void 0 : Y.getElement());
          },
          registerInputInteractionHandler: (Y, Re) => {
            var nt;
            const at = (nt = x()) == null ? void 0 : nt.getElement();
            if (at) {
              const Et = n();
              H.on(at, Y, Re, typeof Et == "boolean" ? { capture: Et } : Et);
            }
          },
          deregisterInputInteractionHandler: (Y, Re) => {
            var nt;
            const at = (nt = x()) == null ? void 0 : nt.getElement();
            at && H.off(at, Y, Re);
          },
          // getLabelAdapterMethods_
          floatLabel: (Y) => D() && D().float(Y),
          getLabelWidth: () => D() ? D().getWidth() : 0,
          hasLabel: () => !!D(),
          shakeLabel: (Y) => D() && D().shake(Y),
          setLabelRequired: (Y) => D() && D().setRequired(Y),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => X() && X().activate(),
          deactivateLineRipple: () => X() && X().deactivate(),
          setLineRippleTransformOrigin: (Y) => X() && X().setRippleCenter(Y),
          // getOutlineAdapterMethods_
          closeOutline: () => k() && k().closeNotch(),
          hasOutline: () => !!k(),
          notchOutline: (Y) => k() && k().notch(Y)
        },
        {
          get helperText() {
            return W;
          },
          get characterCounter() {
            return ie;
          },
          get leadingIcon() {
            return F;
          },
          get trailingIcon() {
            return re;
          }
        }
      ),
      !0
    ), me) {
      if (x() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (G = o(N)) == null || G.init();
    } else
      Ou().then(() => {
        var Y;
        if (x() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (Y = o(N)) == null || Y.init();
      });
    return ce(), () => {
      var Y;
      (Y = o(N)) == null || Y.destroy(), H.clear();
    };
  }), Sn(() => {
    ye && ye();
  });
  function ee(G) {
    return G in K ? K[G] ?? null : U().classList.contains(G);
  }
  function Oe(G) {
    K[G] || (K[G] = !0);
  }
  function be(G) {
    (!(G in K) || K[G]) && (K[G] = !1);
  }
  function Be(G, Y) {
    J[G] != Y && (Y === "" || Y == null ? delete J[G] : J[G] = Y);
  }
  function Je() {
    var G;
    (G = x()) == null || G.focus();
  }
  function vt() {
    var G;
    (G = x()) == null || G.blur();
  }
  function R() {
    if (o(N)) {
      const G = o(N).shouldFloat;
      o(N).notchOutline(G);
    }
  }
  function U() {
    return V;
  }
  var oe = { focus: Je, blur: vt, layout: R, getElement: U }, Ge = ag(), Ot = Z(Ge);
  {
    var Rt = (G) => {
      var Y = rg();
      ze(Y, (De, $e, Qe) => ({ class: De, style: $e, for: void 0, ...Qe }), [
        () => Ve({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": u(),
          "mdc-text-field--textarea": h(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !h(),
          "mdc-text-field--no-label": m() || e.label == null,
          "mdc-text-field--label-floating": o(L) || g() != null && g() !== "",
          "mdc-text-field--with-leading-icon": i(T()) ? e.leadingIcon : T(),
          "mdc-text-field--with-trailing-icon": i(A()) ? e.trailingIcon : A(),
          "mdc-text-field--with-internal-counter": h() && e.internalCounter,
          "mdc-text-field--invalid": S(),
          ...K,
          [s()]: !0
        }),
        () => Object.entries(J).map(([De, $e]) => `${De}: ${$e};`).concat([c()]).join(" "),
        () => Fi(B, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Re = Ie(Y);
      {
        var at = (De) => {
          var $e = eg(), Qe = Z($e);
          {
            var xt = (mt) => {
              var At = $m();
              w(mt, At);
            };
            ne(Qe, (mt) => {
              f() === "filled" && mt(xt);
            });
          }
          var ln = _e(Qe, 2);
          {
            var We = (mt) => {
              {
                let At = /* @__PURE__ */ fe(() => o(L) || g() != null && g() !== "" && (typeof g() != "number" || !isNaN(g()))), Xe = /* @__PURE__ */ fe(() => ft(B, "label$"));
                Ce(
                  es(mt, rt(
                    {
                      get floatAbove() {
                        return o(At);
                      },
                      get required() {
                        return d();
                      },
                      wrapped: !0
                    },
                    () => o(Xe),
                    {
                      children: (St, Ut) => {
                        var jt = $(), pt = Z(jt);
                        {
                          var Tt = (gt) => {
                          }, nn = (gt) => {
                            var Hr = $(), vn = Z(Hr);
                            {
                              var dr = (mn) => {
                                var qn = Kt();
                                He(() => ht(qn, e.label)), w(mn, qn);
                              }, Zi = (mn) => {
                                var qn = $(), Dn = Z(qn);
                                Ae(Dn, () => e.label), w(mn, qn);
                              };
                              ne(
                                vn,
                                (mn) => {
                                  typeof e.label == "string" ? mn(dr) : mn(Zi, !1);
                                },
                                !0
                              );
                            }
                            w(gt, Hr);
                          };
                          ne(pt, (gt) => {
                            e.label == null ? gt(Tt) : gt(nn, !1);
                          });
                        }
                        w(St, jt);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (St) => D(St),
                  () => D()
                );
              }
            };
            ne(ln, (mt) => {
              !m() && e.label != null && mt(We);
            });
          }
          w(De, $e);
        };
        ne(Re, (De) => {
          !h() && f() !== "outlined" && De(at);
        });
      }
      var nt = _e(Re, 2);
      {
        var Et = (De) => {
          {
            let $e = /* @__PURE__ */ fe(() => m() || e.label == null), Qe = /* @__PURE__ */ fe(() => ft(B, "outline$"));
            Ce(
              Ic(De, rt(
                {
                  get noLabel() {
                    return o($e);
                  }
                },
                () => o(Qe),
                {
                  children: (xt, ln) => {
                    var We = $(), mt = Z(We);
                    {
                      var At = (Xe) => {
                        {
                          let St = /* @__PURE__ */ fe(() => o(L) || g() != null && g() !== "" && (typeof g() != "number" || !isNaN(g()))), Ut = /* @__PURE__ */ fe(() => ft(B, "label$"));
                          Ce(
                            es(Xe, rt(
                              {
                                get floatAbove() {
                                  return o(St);
                                },
                                get required() {
                                  return d();
                                },
                                wrapped: !0
                              },
                              () => o(Ut),
                              {
                                children: (jt, pt) => {
                                  var Tt = $(), nn = Z(Tt);
                                  {
                                    var gt = (vn) => {
                                    }, Hr = (vn) => {
                                      var dr = $(), Zi = Z(dr);
                                      {
                                        var mn = (Dn) => {
                                          var Pr = Kt();
                                          He(() => ht(Pr, e.label)), w(Dn, Pr);
                                        }, qn = (Dn) => {
                                          var Pr = $(), bs = Z(Pr);
                                          Ae(bs, () => e.label), w(Dn, Pr);
                                        };
                                        ne(
                                          Zi,
                                          (Dn) => {
                                            typeof e.label == "string" ? Dn(mn) : Dn(qn, !1);
                                          },
                                          !0
                                        );
                                      }
                                      w(vn, dr);
                                    };
                                    ne(nn, (vn) => {
                                      e.label == null ? vn(gt) : vn(Hr, !1);
                                    });
                                  }
                                  w(jt, Tt);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (jt) => D(jt),
                            () => D()
                          );
                        }
                      };
                      ne(mt, (Xe) => {
                        !m() && e.label != null && Xe(At);
                      });
                    }
                    w(xt, We);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (xt) => k(xt),
              () => k()
            );
          }
        };
        ne(nt, (De) => {
          (h() || f() === "outlined") && De(Et);
        });
      }
      var Nt = _e(nt, 2);
      Ha(Nt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (De, $e) => {
          var Qe = $(), xt = Z(Qe);
          Ae(xt, () => e.leadingIcon ?? he), w(De, Qe);
        },
        $$slots: { default: !0 }
      });
      var cr = _e(Nt, 2);
      Ae(cr, () => e.children ?? he);
      var lt = _e(cr, 2);
      {
        var ct = (De) => {
          var $e = tg(), Qe = Ie($e);
          {
            let ln = /* @__PURE__ */ fe(() => ft(B, "input$"));
            Ce(
              Jm(Qe, rt(
                {
                  get disabled() {
                    return u();
                  },
                  get required() {
                    return d();
                  },
                  get updateInvalid() {
                    return E();
                  },
                  get initialInvalid() {
                    return o(P);
                  },
                  get "aria-controls"() {
                    return o(M);
                  },
                  get "aria-describedby"() {
                    return o(M);
                  }
                },
                () => o(ln),
                {
                  onblur: (We) => {
                    var mt;
                    q(L, !1), q(P, !0), Ze(U(), "blur", We), (mt = e.input$onblur) == null || mt.call(e, We);
                  },
                  onfocus: (We) => {
                    var mt;
                    q(L, !0), Ze(U(), "focus", We), (mt = e.input$onfocus) == null || mt.call(e, We);
                  },
                  get value() {
                    return g();
                  },
                  set value(We) {
                    g(We);
                  },
                  get dirty() {
                    return b();
                  },
                  set dirty(We) {
                    b(We);
                  },
                  get invalid() {
                    return S();
                  },
                  set invalid(We) {
                    S(We);
                  }
                }
              )),
              (We) => x(We),
              () => x()
            );
          }
          var xt = _e(Qe, 2);
          Ae(xt, () => e.internalCounter ?? he), He((ln) => Co($e, 1, ln), [
            () => Uu(Ve({
              "mdc-text-field__resizer": !("input$resizable" in B) || e.input$resizable
            }))
          ]), w(De, $e);
        }, Mt = (De) => {
          var $e = ng(), Qe = Z($e);
          {
            var xt = (At) => {
              var Xe = $(), St = Z(Xe);
              {
                var Ut = (pt) => {
                  Xm(pt, {
                    children: (Tt, nn) => {
                      var gt = Kt();
                      He(() => ht(gt, e.prefix)), w(Tt, gt);
                    },
                    $$slots: { default: !0 }
                  });
                }, jt = (pt) => {
                  var Tt = $(), nn = Z(Tt);
                  Ae(nn, () => e.prefix ?? he), w(pt, Tt);
                };
                ne(St, (pt) => {
                  typeof e.prefix == "string" ? pt(Ut) : pt(jt, !1);
                });
              }
              w(At, Xe);
            };
            ne(Qe, (At) => {
              e.prefix != null && At(xt);
            });
          }
          var ln = _e(Qe, 2);
          {
            let At = /* @__PURE__ */ fe(() => ft(B, "input$"));
            Ce(
              Ym(ln, rt(
                {
                  get type() {
                    return v();
                  },
                  get disabled() {
                    return u();
                  },
                  get required() {
                    return d();
                  },
                  get updateInvalid() {
                    return E();
                  },
                  get initialInvalid() {
                    return o(P);
                  },
                  get "aria-controls"() {
                    return o(M);
                  },
                  get "aria-describedby"() {
                    return o(M);
                  }
                },
                () => m() && e.label != null && typeof e.label == "string" ? { placeholder: e.label } : {},
                () => o(At),
                {
                  onblur: (Xe) => {
                    var St;
                    q(L, !1), q(P, !0), Ze(U(), "blur", Xe), (St = e.input$onblur) == null || St.call(e, Xe);
                  },
                  onfocus: (Xe) => {
                    var St;
                    q(L, !0), Ze(U(), "focus", Xe), (St = e.input$onfocus) == null || St.call(e, Xe);
                  },
                  get value() {
                    return g();
                  },
                  set value(Xe) {
                    g(Xe);
                  },
                  get files() {
                    return _();
                  },
                  set files(Xe) {
                    _(Xe);
                  },
                  get dirty() {
                    return b();
                  },
                  set dirty(Xe) {
                    b(Xe);
                  },
                  get invalid() {
                    return S();
                  },
                  set invalid(Xe) {
                    S(Xe);
                  }
                }
              )),
              (Xe) => x(Xe),
              () => x()
            );
          }
          var We = _e(ln, 2);
          {
            var mt = (At) => {
              var Xe = $(), St = Z(Xe);
              {
                var Ut = (pt) => {
                  Km(pt, {
                    children: (Tt, nn) => {
                      var gt = Kt();
                      He(() => ht(gt, e.suffix)), w(Tt, gt);
                    },
                    $$slots: { default: !0 }
                  });
                }, jt = (pt) => {
                  var Tt = $(), nn = Z(Tt);
                  Ae(nn, () => e.suffix ?? he), w(pt, Tt);
                };
                ne(St, (pt) => {
                  typeof e.suffix == "string" ? pt(Ut) : pt(jt, !1);
                });
              }
              w(At, Xe);
            };
            ne(We, (At) => {
              e.suffix != null && At(mt);
            });
          }
          w(De, $e);
        };
        ne(lt, (De) => {
          h() && typeof g() == "string" ? De(ct) : De(Mt, !1);
        });
      }
      var Rn = _e(lt, 2);
      Ha(Rn, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (De, $e) => {
          var Qe = $(), xt = Z(Qe);
          Ae(xt, () => e.trailingIcon ?? he), w(De, Qe);
        },
        $$slots: { default: !0 }
      });
      var oi = _e(Rn, 2);
      {
        var Mn = (De) => {
          {
            let $e = /* @__PURE__ */ fe(() => ft(B, "ripple$"));
            Ce(_c(De, rt(() => o($e))), (Qe) => X(Qe), () => X());
          }
        };
        ne(oi, (De) => {
          !h() && f() !== "outlined" && l() && De(Mn);
        });
      }
      Ce(Y, (De) => V = De, () => V), Ue(Y, (De, $e) => Wt == null ? void 0 : Wt(De, $e), () => ({
        ripple: !h() && f() === "filled",
        unbounded: !1,
        addClass: Oe,
        removeClass: be,
        addStyle: Be,
        eventTarget: o(Te),
        activeTarget: o(Te),
        initPromise: Se
      })), Ue(Y, (De, $e) => z == null ? void 0 : z(De, $e), a), w(G, Y);
    }, Cn = (G) => {
      var Y = ig();
      ze(Y, (lt, ct, Mt) => ({ class: lt, style: ct, ...Mt }), [
        () => Ve({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": u(),
          "mdc-text-field--textarea": h(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !h(),
          "mdc-text-field--no-label": m() || e.label == null,
          "mdc-text-field--with-leading-icon": e.leadingIcon,
          "mdc-text-field--with-trailing-icon": e.trailingIcon,
          "mdc-text-field--invalid": S(),
          ...K,
          [s()]: !0
        }),
        () => Object.entries(J).map(([lt, ct]) => `${lt}: ${ct};`).concat([c()]).join(" "),
        () => Fi(B, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Re = Ie(Y);
      {
        var at = (lt) => {
          var ct = $(), Mt = Z(ct);
          Ae(Mt, () => e.label ?? he), w(lt, ct);
        };
        ne(Re, (lt) => {
          typeof e.label != "string" && lt(at);
        });
      }
      var nt = _e(Re, 2);
      Ha(nt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (lt, ct) => {
          var Mt = $(), Rn = Z(Mt);
          Ae(Rn, () => e.leadingIcon ?? he), w(lt, Mt);
        },
        $$slots: { default: !0 }
      });
      var Et = _e(nt, 2);
      Ae(Et, () => e.children ?? he);
      var Nt = _e(Et, 2);
      Ha(Nt, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (lt, ct) => {
          var Mt = $(), Rn = Z(Mt);
          Ae(Rn, () => e.trailingIcon ?? he), w(lt, Mt);
        },
        $$slots: { default: !0 }
      });
      var cr = _e(Nt, 2);
      Ae(cr, () => e.line ?? he), Ce(Y, (lt) => V = lt, () => V), Ue(Y, (lt, ct) => Wt == null ? void 0 : Wt(lt, ct), () => ({
        ripple: l(),
        unbounded: !1,
        addClass: Oe,
        removeClass: be,
        addStyle: Be
      })), Ue(Y, (lt, ct) => z == null ? void 0 : z(lt, ct), a), w(G, Y);
    };
    ne(Ot, (G) => {
      me ? G(Rt) : G(Cn, !1);
    });
  }
  var de = _e(Ot, 2);
  {
    var se = (G) => {
      {
        let Y = /* @__PURE__ */ fe(() => ft(B, "helperLine$"));
        Wm(G, rt(() => o(Y), {
          children: (Re, at) => {
            var nt = $(), Et = Z(nt);
            Ae(Et, () => e.helper ?? he), w(Re, nt);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    ne(de, (G) => {
      e.helper && G(se);
    });
  }
  return w(t, Ge), Le(oe);
}
var sg = /* @__PURE__ */ pe("<i><!></i>");
function og(t, e) {
  we(e, !0);
  const n = () => Fn(v, "$leadingStore", r), [r, i] = lr();
  let a = p(e, "use", 19, () => []), s = p(e, "class", 3, ""), c = p(e, "tabindex", 19, () => e.role === "button" ? 0 : -1), l = p(e, "disabled", 3, !1), u = /* @__PURE__ */ Ye(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "role",
    "tabindex",
    "disabled",
    "children"
  ]), d, h = /* @__PURE__ */ ve(void 0), f = new Wi(), m = ge({});
  const v = ue("SMUI:textfield:icon:leading"), g = n();
  let _ = /* @__PURE__ */ ve(void 0);
  const S = /* @__PURE__ */ fe(() => ({ role: e.role, tabindex: c() })), E = ue("SMUI:textfield:leading-icon:mount"), C = ue("SMUI:textfield:leading-icon:unmount"), b = ue("SMUI:textfield:trailing-icon:mount"), y = ue("SMUI:textfield:trailing-icon:unmount");
  ot(() => (q(
    h,
    new Fm({
      getAttr: I,
      setAttr: T,
      removeAttr: A,
      setContent: (N) => {
        q(_, N, !0);
      },
      registerInteractionHandler: (N, H) => f.on(x(), N, H),
      deregisterInteractionHandler: (N, H) => f.off(x(), N, H),
      notifyIconAction: () => Ze(x(), "SMUITextFieldIcon")
    }),
    !0
  ), g ? E && E(o(h)) : b && b(o(h)), o(h).init(), () => {
    var N;
    o(h) && (g ? C && C(o(h)) : y && y(o(h))), (N = o(h)) == null || N.destroy(), f.clear();
  }));
  function I(N) {
    return N in m ? m[N] ?? null : x().getAttribute(N);
  }
  function T(N, H) {
    m[N] !== H && (m[N] = H);
  }
  function A(N) {
    (!(N in m) || m[N] != null) && (m[N] = void 0);
  }
  function x() {
    return d;
  }
  var D = { getElement: x }, X = sg();
  ze(
    X,
    (N) => ({
      class: N,
      "aria-hidden": c() === -1 ? "true" : "false",
      "aria-disabled": e.role === "button" ? l() ? "true" : "false" : void 0,
      ...o(S),
      ...m,
      ...u
    }),
    [
      () => Ve({
        "mdc-text-field__icon": !0,
        "mdc-text-field__icon--leading": g,
        "mdc-text-field__icon--trailing": !g,
        [s()]: !0
      })
    ]
  );
  var k = Ie(X);
  {
    var B = (N) => {
      var H = $(), K = Z(H);
      Ae(K, () => e.children ?? he), w(N, H);
    }, me = (N) => {
      var H = Kt();
      He(() => ht(H, o(_))), w(N, H);
    };
    ne(k, (N) => {
      o(_) == null ? N(B) : N(me, !1);
    });
  }
  Ce(X, (N) => d = N, () => d), Ue(X, (N, H) => z == null ? void 0 : z(N, H), a), w(t, X);
  var V = Le(D);
  return i(), V;
}
function lg(t, e) {
  we(e, !0);
  let n = p(e, "placeholder", 3, ""), r = p(e, "label", 3, ""), i = p(e, "icon", 3, ""), a = p(e, "value", 15, ""), s = p(e, "variant", 3, "standard"), c = p(e, "styles", 3, ""), l = p(e, "required", 3, !1), u = p(e, "oninput", 3, () => {
  });
  var d = $(), h = Z(d);
  {
    var f = (v) => {
      {
        const g = (S) => {
          og(S, {
            class: "material-icons",
            children: (E, C) => {
              var b = Kt();
              He(() => ht(b, i())), w(E, b);
            },
            $$slots: { default: !0 }
          });
        };
        let _ = /* @__PURE__ */ fe(() => `width: 100%; ${c()}`);
        ao(v, {
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
            return o(_);
          },
          get variant() {
            return s();
          },
          get oninput() {
            return u();
          },
          get value() {
            return a();
          },
          set value(S) {
            a(S);
          },
          leadingIcon: g,
          $$slots: { leadingIcon: !0 }
        });
      }
    }, m = (v) => {
      ao(v, {
        get label() {
          return r();
        },
        get placeholder() {
          return n();
        },
        style: "width: 100%",
        get variant() {
          return s();
        },
        get required() {
          return l();
        },
        get oninput() {
          return u();
        },
        get value() {
          return a();
        },
        set value(g) {
          a(g);
        }
      });
    };
    ne(h, (v) => {
      i() ? v(f) : v(m, !1);
    });
  }
  w(t, d), Le();
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
var ug = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, cg = {
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
}, ra = {
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
}, _t;
(function(t) {
  t[t.BOTTOM = 1] = "BOTTOM", t[t.CENTER = 2] = "CENTER", t[t.RIGHT = 4] = "RIGHT", t[t.FLIP_RTL = 8] = "FLIP_RTL";
})(_t || (_t = {}));
var Qr;
(function(t) {
  t[t.TOP_LEFT = 0] = "TOP_LEFT", t[t.TOP_RIGHT = 4] = "TOP_RIGHT", t[t.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", t[t.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", t[t.TOP_START = 8] = "TOP_START", t[t.TOP_END = 12] = "TOP_END", t[t.BOTTOM_START = 9] = "BOTTOM_START", t[t.BOTTOM_END = 13] = "BOTTOM_END";
})(Qr || (Qr = {}));
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
var hr, Kn, Fe = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
hr = {}, hr["" + Fe.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", hr["" + Fe.LIST_ITEM_CLASS] = "mdc-list-item", hr["" + Fe.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", hr["" + Fe.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", hr["" + Fe.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", hr["" + Fe.ROOT] = "mdc-list";
var hi = (Kn = {}, Kn["" + Fe.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", Kn["" + Fe.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", Kn["" + Fe.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", Kn["" + Fe.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", Kn["" + Fe.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", Kn["" + Fe.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", Kn["" + Fe.ROOT] = "mdc-deprecated-list", Kn), vr = {
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
    .` + Fe.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + Fe.LIST_ITEM_CLASS + ` a,
    .` + hi[Fe.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + hi[Fe.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + Fe.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + Fe.LIST_ITEM_CLASS + ` a,
    .` + Fe.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + Fe.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + hi[Fe.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + hi[Fe.LIST_ITEM_CLASS] + ` a,
    .` + hi[Fe.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + hi[Fe.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, bt = {
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
var dg = ["input", "button", "textarea", "select"], pn = function(t) {
  var e = t.target;
  if (e) {
    var n = ("" + e.tagName).toLowerCase();
    dg.indexOf(n) === -1 && t.preventDefault();
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
function fg() {
  var t = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return t;
}
function hg(t, e) {
  for (var n = /* @__PURE__ */ new Map(), r = 0; r < t; r++) {
    var i = e(r).trim();
    if (i) {
      var a = i[0].toLowerCase();
      n.has(a) || n.set(a, []), n.get(a).push({ text: i.toLowerCase(), index: r });
    }
  }
  return n.forEach(function(s) {
    s.sort(function(c, l) {
      return c.index - l.index;
    });
  }), n;
}
function so(t, e) {
  var n = t.nextChar, r = t.focusItemAtIndex, i = t.sortedIndexByFirstChar, a = t.focusedItemIndex, s = t.skipFocus, c = t.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    Ec(e);
  }, bt.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + n;
  var l;
  return e.typeaheadBuffer.length === 1 ? l = vg(i, a, c, e) : l = mg(i, c, e), l !== -1 && !s && r(l), l;
}
function vg(t, e, n, r) {
  var i = r.typeaheadBuffer[0], a = t.get(i);
  if (!a)
    return -1;
  if (i === r.currentFirstChar && a[r.sortedIndexCursor].index === e) {
    r.sortedIndexCursor = (r.sortedIndexCursor + 1) % a.length;
    var s = a[r.sortedIndexCursor].index;
    if (!n(s))
      return s;
  }
  r.currentFirstChar = i;
  var c = -1, l;
  for (l = 0; l < a.length; l++)
    if (!n(a[l].index)) {
      c = l;
      break;
    }
  for (; l < a.length; l++)
    if (a[l].index > e && !n(a[l].index)) {
      c = l;
      break;
    }
  return c !== -1 ? (r.sortedIndexCursor = c, a[r.sortedIndexCursor].index) : -1;
}
function mg(t, e, n) {
  var r = n.typeaheadBuffer[0], i = t.get(r);
  if (!i)
    return -1;
  var a = i[n.sortedIndexCursor];
  if (a.text.lastIndexOf(n.typeaheadBuffer, 0) === 0 && !e(a.index))
    return a.index;
  for (var s = (n.sortedIndexCursor + 1) % i.length, c = -1; s !== n.sortedIndexCursor; ) {
    var l = i[s], u = l.text.lastIndexOf(n.typeaheadBuffer, 0) === 0, d = !e(l.index);
    if (u && d) {
      c = s;
      break;
    }
    s = (s + 1) % i.length;
  }
  return c !== -1 ? (n.sortedIndexCursor = c, i[n.sortedIndexCursor].index) : -1;
}
function yc(t) {
  return t.typeaheadBuffer.length > 0;
}
function Ec(t) {
  t.typeaheadBuffer = "";
}
function Rl(t, e) {
  var n = t.event, r = t.isTargetListItem, i = t.focusedItemIndex, a = t.focusItemAtIndex, s = t.sortedIndexByFirstChar, c = t.isItemAtIndexDisabled, l = yt(n) === "ArrowLeft", u = yt(n) === "ArrowUp", d = yt(n) === "ArrowRight", h = yt(n) === "ArrowDown", f = yt(n) === "Home", m = yt(n) === "End", v = yt(n) === "Enter", g = yt(n) === "Spacebar";
  if (n.altKey || n.ctrlKey || n.metaKey || l || u || d || h || f || m || v)
    return -1;
  var _ = !g && n.key.length === 1;
  if (_) {
    pn(n);
    var S = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: n.key.toLowerCase(),
      sortedIndexByFirstChar: s,
      skipFocus: !1,
      isItemAtIndexDisabled: c
    };
    return so(S, e);
  }
  if (!g)
    return -1;
  r && pn(n);
  var E = r && yc(e);
  if (E) {
    var S = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: " ",
      sortedIndexByFirstChar: s,
      skipFocus: !1,
      isItemAtIndexDisabled: c
    };
    return so(S, e);
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
function gg(t) {
  return t instanceof Array;
}
var pg = ["Alt", "Control", "Meta", "Shift"];
function Ml(t) {
  var e = new Set(t ? pg.filter(function(n) {
    return t.getModifierState(n);
  }) : []);
  return function(n) {
    return n.every(function(r) {
      return e.has(r);
    }) && n.length === e.size;
  };
}
var bg = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      var r = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return r.wrapFocus = !1, r.isVertical = !0, r.isSingleSelectionList = !1, r.areDisabledItemsFocusable = !0, r.selectedIndex = bt.UNSET_INDEX, r.focusedItemIndex = bt.UNSET_INDEX, r.useActivatedClass = !1, r.useSelectedAttr = !1, r.ariaCurrentAttrValue = null, r.isCheckboxList = !1, r.isRadioList = !1, r.lastSelectedIndex = null, r.hasTypeahead = !1, r.typeaheadState = fg(), r.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return vr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Fe;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return bt;
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
      if (n !== bt.UNSET_INDEX) {
        var r = this.adapter.listItemAtIndexHasClass(n, Fe.LIST_ITEM_ACTIVATED_CLASS);
        r && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = n;
      }
    }, e.prototype.getSelectedIndexFromDOM = function() {
      for (var n = bt.UNSET_INDEX, r = this.adapter.getListItemCount(), i = 0; i < r; i++) {
        var a = this.adapter.listItemAtIndexHasClass(i, Fe.LIST_ITEM_SELECTED_CLASS), s = this.adapter.listItemAtIndexHasClass(i, Fe.LIST_ITEM_ACTIVATED_CLASS);
        if (a || s) {
          n = i;
          break;
        }
      }
      return n;
    }, e.prototype.setHasTypeahead = function(n) {
      this.hasTypeahead = n, n && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex());
    }, e.prototype.isTypeaheadInProgress = function() {
      return this.hasTypeahead && yc(this.typeaheadState);
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
      return this.adapter.listItemAtIndexHasClass(n, Fe.LIST_ITEM_DISABLED_CLASS);
    }, e.prototype.handleKeydown = function(n, r, i) {
      var a = this, s, c = yt(n) === "ArrowLeft", l = yt(n) === "ArrowUp", u = yt(n) === "ArrowRight", d = yt(n) === "ArrowDown", h = yt(n) === "Home", f = yt(n) === "End", m = yt(n) === "Enter", v = yt(n) === "Spacebar", g = this.isVertical && d || !this.isVertical && u, _ = this.isVertical && l || !this.isVertical && c, S = n.key === "A" || n.key === "a", E = Ml(n);
      if (this.adapter.isRootFocused()) {
        if ((_ || f) && E([]))
          n.preventDefault(), this.focusLastElement();
        else if ((g || h) && E([]))
          n.preventDefault(), this.focusFirstElement();
        else if (_ && E(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var C = this.focusLastElement();
          C !== -1 && this.setSelectedIndexOnAction(C, !1);
        } else if (g && E(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var C = this.focusFirstElement();
          C !== -1 && this.setSelectedIndexOnAction(C, !1);
        }
        if (this.hasTypeahead) {
          var b = {
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
          Rl(b, this.typeaheadState);
        }
        return;
      }
      var y = this.adapter.getFocusedElementIndex();
      if (!(y === -1 && (y = i, y < 0))) {
        if (g && E([]))
          pn(n), this.focusNextElement(y);
        else if (_ && E([]))
          pn(n), this.focusPrevElement(y);
        else if (g && E(["Shift"]) && this.isCheckboxList) {
          pn(n);
          var C = this.focusNextElement(y);
          C !== -1 && this.setSelectedIndexOnAction(C, !1);
        } else if (_ && E(["Shift"]) && this.isCheckboxList) {
          pn(n);
          var C = this.focusPrevElement(y);
          C !== -1 && this.setSelectedIndexOnAction(C, !1);
        } else if (h && E([]))
          pn(n), this.focusFirstElement();
        else if (f && E([]))
          pn(n), this.focusLastElement();
        else if (h && E(["Control", "Shift"]) && this.isCheckboxList) {
          if (pn(n), this.isIndexDisabled(y))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, y, y);
        } else if (f && E(["Control", "Shift"]) && this.isCheckboxList) {
          if (pn(n), this.isIndexDisabled(y))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(y, this.adapter.getListItemCount() - 1, y);
        } else if (S && E(["Control"]) && this.isCheckboxList)
          n.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === bt.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((m || v) && E([])) {
          if (r) {
            var I = n.target;
            if (I && I.tagName === "A" && m || (pn(n), this.isIndexDisabled(y)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(y, !1), this.adapter.notifyAction(y));
          }
        } else if ((m || v) && E(["Shift"]) && this.isCheckboxList) {
          var I = n.target;
          if (I && I.tagName === "A" && m || (pn(n), this.isIndexDisabled(y)))
            return;
          this.isTypeaheadInProgress() || (this.toggleCheckboxRange((s = this.lastSelectedIndex) !== null && s !== void 0 ? s : y, y, y), this.adapter.notifyAction(y));
        }
        if (this.hasTypeahead) {
          var b = {
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
          Rl(b, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(n, r, i) {
      var a, s = Ml(i);
      n !== bt.UNSET_INDEX && (this.isIndexDisabled(n) || (s([]) ? (this.isSelectableList() && this.setSelectedIndexOnAction(n, r), this.adapter.notifyAction(n)) : this.isCheckboxList && s(["Shift"]) && (this.toggleCheckboxRange((a = this.lastSelectedIndex) !== null && a !== void 0 ? a : n, n, n), this.adapter.notifyAction(n))));
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
      this.isIndexValid(n, !1) && (r ? (this.adapter.removeClassForElementIndex(n, Fe.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, vr.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(n, Fe.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, vr.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(n, r) {
      if (r === void 0 && (r = {}), !(this.selectedIndex === n && !r.forceUpdate)) {
        var i = Fe.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (i = Fe.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== bt.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, i), this.setAriaForSingleSelectionAtIndex(n), this.setTabindexAtIndex(n), n !== bt.UNSET_INDEX && this.adapter.addClassForElementIndex(n, i), this.selectedIndex = n, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([n]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(n) {
      this.selectedIndex === bt.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(n, vr.ARIA_CURRENT));
      var r = this.ariaCurrentAttrValue !== null, i = r ? vr.ARIA_CURRENT : vr.ARIA_SELECTED;
      if (this.selectedIndex !== bt.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), n !== bt.UNSET_INDEX) {
        var a = r ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(n, i, a);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? vr.ARIA_SELECTED : vr.ARIA_CHECKED;
    }, e.prototype.setRadioAtIndex = function(n, r) {
      r === void 0 && (r = {});
      var i = this.getSelectionAttribute();
      this.adapter.setCheckedCheckboxOrRadioAtIndex(n, !0), !(this.selectedIndex === n && !r.forceUpdate) && (this.selectedIndex !== bt.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), this.adapter.setAttributeForElementIndex(n, i, "true"), this.selectedIndex = n, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([n]));
    }, e.prototype.setCheckboxAtIndex = function(n, r) {
      r === void 0 && (r = {});
      for (var i = this.selectedIndex, a = r.isUserInteraction ? new Set(i === bt.UNSET_INDEX ? [] : i) : null, s = this.getSelectionAttribute(), c = [], l = 0; l < this.adapter.getListItemCount(); l++) {
        var u = a == null ? void 0 : a.has(l), d = n.indexOf(l) >= 0;
        d !== u && c.push(l), this.adapter.setCheckedCheckboxOrRadioAtIndex(l, d), this.adapter.setAttributeForElementIndex(l, s, d ? "true" : "false");
      }
      this.selectedIndex = n, r.isUserInteraction && c.length && this.adapter.notifySelectionChange(c);
    }, e.prototype.toggleCheckboxRange = function(n, r, i) {
      this.lastSelectedIndex = i;
      for (var a = new Set(this.selectedIndex === bt.UNSET_INDEX ? [] : this.selectedIndex), s = !(a != null && a.has(i)), c = Ni([n, r].sort(), 2), l = c[0], u = c[1], d = this.getSelectionAttribute(), h = [], f = l; f <= u; f++)
        if (!this.isIndexDisabled(f)) {
          var m = a.has(f);
          s !== m && (h.push(f), this.adapter.setCheckedCheckboxOrRadioAtIndex(f, s), this.adapter.setAttributeForElementIndex(f, d, "" + s), s ? a.add(f) : a.delete(f));
        }
      h.length && (this.selectedIndex = Sr([], Ni(a)), this.adapter.notifySelectionChange(h));
    }, e.prototype.setTabindexAtIndex = function(n) {
      this.focusedItemIndex === bt.UNSET_INDEX && n !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== n && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== n && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), n !== bt.UNSET_INDEX && this.adapter.setAttributeForElementIndex(n, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var n = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(n);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== bt.UNSET_INDEX ? this.selectedIndex : gg(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(n, r) {
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
        return this.isIndexInRange(n) || this.isSingleSelectionList && n === bt.UNSET_INDEX;
      } else
        return !1;
    }, e.prototype.isIndexInRange = function(n) {
      var r = this.adapter.getListItemCount();
      return n >= 0 && n < r;
    }, e.prototype.setSelectedIndexOnAction = function(n, r) {
      this.lastSelectedIndex = n, this.isCheckboxList ? (this.toggleCheckboxAtIndex(n, r), this.adapter.notifySelectionChange([n])) : this.setSelectedIndex(n, { isUserInteraction: !0 });
    }, e.prototype.toggleCheckboxAtIndex = function(n, r) {
      var i = this.getSelectionAttribute(), a = this.adapter.isCheckboxCheckedAtIndex(n), s;
      r ? s = a : (s = !a, this.adapter.setCheckedCheckboxOrRadioAtIndex(n, s)), this.adapter.setAttributeForElementIndex(n, i, s ? "true" : "false");
      var c = this.selectedIndex === bt.UNSET_INDEX ? [] : this.selectedIndex.slice();
      s ? c.push(n) : c = c.filter(function(l) {
        return l !== n;
      }), this.selectedIndex = c;
    }, e.prototype.focusItemAtIndex = function(n) {
      this.adapter.focusItemAtIndex(n), this.focusedItemIndex = n;
    }, e.prototype.checkboxListToggleAll = function(n, r) {
      var i = this.adapter.getListItemCount();
      if (n.length === i)
        this.setCheckboxAtIndex([], { isUserInteraction: r });
      else {
        for (var a = [], s = 0; s < i; s++)
          (!this.isIndexDisabled(s) || n.indexOf(s) > -1) && a.push(s);
        this.setCheckboxAtIndex(a, { isUserInteraction: r });
      }
    }, e.prototype.typeaheadMatchItem = function(n, r, i) {
      var a = this;
      i === void 0 && (i = !1);
      var s = {
        focusItemAtIndex: function(c) {
          a.focusItemAtIndex(c);
        },
        focusedItemIndex: r || this.focusedItemIndex,
        nextChar: n,
        sortedIndexByFirstChar: this.sortedIndexByFirstChar,
        skipFocus: i,
        isItemAtIndexDisabled: function(c) {
          return a.isIndexDisabled(c);
        }
      };
      return so(s, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return hg(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      Ec(this.typeaheadState);
    }, e;
  }(Gt)
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
var Ac = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      var r = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return r.isSurfaceOpen = !1, r.isQuickOpen = !1, r.isHoistedElement = !1, r.isFixedPosition = !1, r.isHorizontallyCenteredOnViewport = !1, r.maxHeight = 0, r.openBottomBias = 0, r.openAnimationEndTimerId = 0, r.closeAnimationEndTimerId = 0, r.animationRequestId = 0, r.anchorCorner = Qr.TOP_START, r.originCorner = Qr.TOP_START, r.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, r.position = { x: 0, y: 0 }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ug;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return cg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return ra;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "Corner", {
      get: function() {
        return Qr;
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
      this.originCorner = this.originCorner ^ _t.RIGHT;
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
        }, ra.TRANSITION_OPEN_DURATION);
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
          }, ra.TRANSITION_CLOSE_DURATION);
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
      var r = this.getoriginCorner(), i = this.getMenuSurfaceMaxHeight(r), a = this.hasBit(r, _t.BOTTOM) ? "bottom" : "top", s = this.hasBit(r, _t.RIGHT) ? "right" : "left", c = this.getHorizontalOriginOffset(r), l = this.getVerticalOriginOffset(r), u = this.measurements, d = u.anchorSize, h = u.surfaceSize, f = (n = {}, n[s] = c, n[a] = l, n);
      d.width / h.width > ra.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (s = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(f), this.adapter.setTransformOrigin(s + " " + a), this.adapter.setPosition(f), this.adapter.setMaxHeight(i ? i + "px" : ""), this.hasBit(r, _t.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
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
      var n = this.originCorner, r = this.measurements, i = r.viewportDistance, a = r.anchorSize, s = r.surfaceSize, c = e.numbers.MARGIN_TO_EDGE, l = this.hasBit(this.anchorCorner, _t.BOTTOM), u, d;
      l ? (u = i.top - c + this.anchorMargin.bottom, d = i.bottom - c - this.anchorMargin.bottom) : (u = i.top - c + this.anchorMargin.top, d = i.bottom - c + a.height - this.anchorMargin.top);
      var h = d - s.height > 0;
      !h && u > d + this.openBottomBias && (n = this.setBit(n, _t.BOTTOM));
      var f = this.adapter.isRtl(), m = this.hasBit(this.anchorCorner, _t.FLIP_RTL), v = this.hasBit(this.anchorCorner, _t.RIGHT) || this.hasBit(n, _t.RIGHT), g = !1;
      f && m ? g = !v : g = v;
      var _, S;
      g ? (_ = i.left + a.width + this.anchorMargin.right, S = i.right - this.anchorMargin.right) : (_ = i.left + this.anchorMargin.left, S = i.right + a.width - this.anchorMargin.left);
      var E = _ - s.width > 0, C = S - s.width > 0, b = this.hasBit(n, _t.FLIP_RTL) && this.hasBit(n, _t.RIGHT);
      return C && b && f || !E && b ? n = this.unsetBit(n, _t.RIGHT) : (E && g && f || E && !g && v || !C && _ >= S) && (n = this.setBit(n, _t.RIGHT)), n;
    }, e.prototype.getMenuSurfaceMaxHeight = function(n) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var r = this.measurements.viewportDistance, i = 0, a = this.hasBit(n, _t.BOTTOM), s = this.hasBit(this.anchorCorner, _t.BOTTOM), c = e.numbers.MARGIN_TO_EDGE;
      return a ? (i = r.top + this.anchorMargin.top - c, s || (i += this.measurements.anchorSize.height)) : (i = r.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - c, s && (i -= this.measurements.anchorSize.height)), i;
    }, e.prototype.getHorizontalOriginOffset = function(n) {
      var r = this.measurements.anchorSize, i = this.hasBit(n, _t.RIGHT), a = this.hasBit(this.anchorCorner, _t.RIGHT);
      if (i) {
        var s = a ? r.width - this.anchorMargin.left : this.anchorMargin.right;
        return this.isHoistedElement || this.isFixedPosition ? s - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : s;
      }
      return a ? r.width - this.anchorMargin.right : this.anchorMargin.left;
    }, e.prototype.getVerticalOriginOffset = function(n) {
      var r = this.measurements.anchorSize, i = this.hasBit(n, _t.BOTTOM), a = this.hasBit(this.anchorCorner, _t.BOTTOM), s = 0;
      return i ? s = a ? r.height - this.anchorMargin.top : -this.anchorMargin.bottom : s = a ? r.height + this.anchorMargin.bottom : this.anchorMargin.top, s;
    }, e.prototype.adjustPositionForHoistedElement = function(n) {
      var r, i, a = this.measurements, s = a.windowScroll, c = a.viewportDistance, l = a.surfaceSize, u = a.viewportSize, d = Object.keys(n);
      try {
        for (var h = Lt(d), f = h.next(); !f.done; f = h.next()) {
          var m = f.value, v = n[m] || 0;
          if (this.isHorizontallyCenteredOnViewport && (m === "left" || m === "right")) {
            n[m] = (u.width - l.width) / 2;
            continue;
          }
          v += c[m], this.isFixedPosition || (m === "top" ? v += s.y : m === "bottom" ? v -= s.y : m === "left" ? v += s.x : v -= s.x), n[m] = v;
        }
      } catch (g) {
        r = { error: g };
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
      }, ra.TOUCH_EVENT_WAIT_MS);
    }, e.prototype.hasBit = function(n, r) {
      return !!(n & r);
    }, e.prototype.setBit = function(n, r) {
      return n | r;
    }, e.prototype.unsetBit = function(n, r) {
      return n ^ r;
    }, e.prototype.isFinite = function(n) {
      return typeof n == "number" && isFinite(n);
    }, e;
  }(Gt)
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
var Dl = {
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
function _g(t) {
  return !!t.document && typeof t.document.createElement == "function";
}
function Ig(t, e) {
  if (_g(t) && e in Dl) {
    var n = t.document.createElement("div"), r = Dl[e], i = r.standard, a = r.prefixed, s = i in n.style;
    return s ? i : a;
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
var Ai = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
}, vi = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected",
  SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
}, yg = {
  FOCUS_ROOT_INDEX: -1
}, _i;
(function(t) {
  t[t.NONE = 0] = "NONE", t[t.LIST_ROOT = 1] = "LIST_ROOT", t[t.FIRST_ITEM = 2] = "FIRST_ITEM", t[t.LAST_ITEM = 3] = "LAST_ITEM";
})(_i || (_i = {}));
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
var Eg = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      var r = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return r.closeAnimationEndTimerId = 0, r.defaultFocusState = _i.LIST_ROOT, r.selectedIndex = -1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ai;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return vi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return yg;
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
        var a = this.adapter.getAttributeFromElementAtIndex(i, vi.SKIP_RESTORE_FOCUS) === "true";
        this.adapter.closeSurface(a), this.closeAnimationEndTimerId = setTimeout(function() {
          var s = r.adapter.getElementIndex(n);
          s >= 0 && r.adapter.isSelectableItemAtIndex(s) && r.setSelectedIndex(s);
        }, Ac.numbers.TRANSITION_CLOSE_DURATION);
      }
    }, e.prototype.handleMenuSurfaceOpened = function() {
      switch (this.defaultFocusState) {
        case _i.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case _i.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case _i.NONE:
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
      r >= 0 && (this.adapter.removeAttributeFromElementAtIndex(r, vi.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(r, Ai.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(n, Ai.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(n, vi.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = n;
    }, e.prototype.setEnabled = function(n, r) {
      this.validatedIndex(n), r ? (this.adapter.removeClassFromElementAtIndex(n, Fe.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, vi.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(n, Fe.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, vi.ARIA_DISABLED_ATTR, "true"));
    }, e.prototype.validatedIndex = function(n) {
      var r = this.adapter.getMenuItemCount(), i = n >= 0 && n < r;
      if (!i)
        throw new Error("MDCMenuFoundation: No list item at specified index.");
    }, e;
  }(Gt)
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
var dt = {
  ACTIVATED: "mdc-select--activated",
  DISABLED: "mdc-select--disabled",
  FOCUSED: "mdc-select--focused",
  INVALID: "mdc-select--invalid",
  MENU_INVALID: "mdc-select__menu--invalid",
  OUTLINED: "mdc-select--outlined",
  REQUIRED: "mdc-select--required",
  ROOT: "mdc-select",
  WITH_LEADING_ICON: "mdc-select--with-leading-icon"
}, Ds = {
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
}, Fr = {
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
var Ag = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n, r) {
      r === void 0 && (r = {});
      var i = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return i.disabled = !1, i.isMenuOpen = !1, i.useDefaultValidation = !0, i.customValidity = !0, i.lastSelectedIndex = Fr.UNSET_INDEX, i.clickDebounceTimeout = 0, i.recentlyClicked = !1, i.leadingIcon = r.leadingIcon, i.helperText = r.helperText, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return dt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Fr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Ds;
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
      r === void 0 && (r = !1), i === void 0 && (i = !1), !(n >= this.adapter.getMenuItemCount()) && (n === Fr.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(n).trim()), this.adapter.setSelectedIndex(n), r && this.adapter.closeMenu(), !i && this.lastSelectedIndex !== n && this.handleChange(), this.lastSelectedIndex = n);
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
      return n !== Fr.UNSET_INDEX ? r[n] : "";
    }, e.prototype.getDisabled = function() {
      return this.disabled;
    }, e.prototype.setDisabled = function(n) {
      this.disabled = n, this.disabled ? (this.adapter.addClass(dt.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(dt.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
    }, e.prototype.openMenu = function() {
      this.adapter.addClass(dt.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true");
    }, e.prototype.setHelperTextContent = function(n) {
      this.helperText && this.helperText.setContent(n);
    }, e.prototype.layout = function() {
      if (this.adapter.hasLabel()) {
        var n = this.getValue().length > 0, r = this.adapter.hasClass(dt.FOCUSED), i = n || r, a = this.adapter.hasClass(dt.REQUIRED);
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
      this.adapter.removeClass(dt.ACTIVATED), this.isMenuOpen = !1, this.adapter.isSelectAnchorFocused() || this.blur();
    }, e.prototype.handleChange = function() {
      this.layout(), this.adapter.notifyChange(this.getValue());
      var n = this.adapter.hasClass(dt.REQUIRED);
      n && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.handleMenuItemAction = function(n) {
      this.setSelectedIndex(
        n,
        /** closeMenu */
        !0
      );
    }, e.prototype.handleFocus = function() {
      this.adapter.addClass(dt.FOCUSED), this.layout(), this.adapter.activateBottomLine();
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
      if (!(this.isMenuOpen || !this.adapter.hasClass(dt.FOCUSED))) {
        var r = yt(n) === Pe.ENTER, i = yt(n) === Pe.SPACEBAR, a = yt(n) === Pe.ARROW_UP, s = yt(n) === Pe.ARROW_DOWN, c = n.ctrlKey || n.metaKey;
        if (!c && (!i && n.key && n.key.length === 1 || i && this.adapter.isTypeaheadInProgress())) {
          var l = i ? " " : n.key, u = this.adapter.typeaheadMatchItem(l, this.getSelectedIndex());
          u >= 0 && this.setSelectedIndex(u), n.preventDefault();
          return;
        }
        !r && !i && !a && !s || (this.openMenu(), n.preventDefault());
      }
    }, e.prototype.notchOutline = function(n) {
      if (this.adapter.hasOutline()) {
        var r = this.adapter.hasClass(dt.FOCUSED);
        if (n) {
          var i = Fr.LABEL_SCALE, a = this.adapter.getLabelWidth() * i;
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
      this.useDefaultValidation || (this.customValidity = n), this.adapter.setSelectAnchorAttr("aria-invalid", (!n).toString()), n ? (this.adapter.removeClass(dt.INVALID), this.adapter.removeMenuClass(dt.MENU_INVALID)) : (this.adapter.addClass(dt.INVALID), this.adapter.addMenuClass(dt.MENU_INVALID)), this.syncHelperTextValidity(n);
    }, e.prototype.isValid = function() {
      return this.useDefaultValidation && this.adapter.hasClass(dt.REQUIRED) && !this.adapter.hasClass(dt.DISABLED) ? this.getSelectedIndex() !== Fr.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(n) {
      n ? this.adapter.addClass(dt.REQUIRED) : this.adapter.removeClass(dt.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", n.toString()), this.adapter.setLabelRequired(n);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var n = this.adapter.getAnchorElement();
      n && (this.adapter.setMenuAnchorElement(n), this.adapter.setMenuAnchorCorner(Qr.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(dt.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(dt.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(dt.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var n = this.adapter.hasClass(dt.REQUIRED);
      n && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.syncHelperTextValidity = function(n) {
      if (this.helperText) {
        this.helperText.setValidity(n);
        var r = this.helperText.isVisible(), i = this.helperText.getId();
        r && i ? this.adapter.setSelectAnchorAttr(Ds.ARIA_DESCRIBEDBY, i) : this.adapter.removeSelectAnchorAttr(Ds.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.setClickDebounceTimeout = function() {
      var n = this;
      clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout(function() {
        n.recentlyClicked = !1;
      }, Fr.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
    }, e;
  }(Gt)
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
var Vr = {
  ARIA_HIDDEN: "aria-hidden",
  ROLE: "role"
}, Zn = {
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
var Sg = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      return t.call(this, le(le({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Zn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Vr;
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
      return this.adapter.getAttr(Vr.ARIA_HIDDEN) !== "true";
    }, e.prototype.setContent = function(n) {
      this.adapter.setContent(n);
    }, e.prototype.setValidation = function(n) {
      n ? this.adapter.addClass(Zn.HELPER_TEXT_VALIDATION_MSG) : this.adapter.removeClass(Zn.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.setValidationMsgPersistent = function(n) {
      n ? this.adapter.addClass(Zn.HELPER_TEXT_VALIDATION_MSG_PERSISTENT) : this.adapter.removeClass(Zn.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.getIsValidation = function() {
      return this.adapter.hasClass(Zn.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.getIsValidationMsgPersistent = function() {
      return this.adapter.hasClass(Zn.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.setValidity = function(n) {
      var r = this.adapter.hasClass(Zn.HELPER_TEXT_VALIDATION_MSG);
      if (r) {
        var i = this.adapter.hasClass(Zn.HELPER_TEXT_VALIDATION_MSG_PERSISTENT), a = !n || i;
        if (a) {
          this.showToScreenReader(), n ? this.adapter.removeAttr(Vr.ROLE) : this.adapter.setAttr(Vr.ROLE, "alert");
          return;
        }
        this.adapter.removeAttr(Vr.ROLE), this.hide();
      }
    }, e.prototype.showToScreenReader = function() {
      this.adapter.removeAttr(Vr.ARIA_HIDDEN);
    }, e.prototype.hide = function() {
      this.adapter.setAttr(Vr.ARIA_HIDDEN, "true");
    }, e;
  }(Gt)
), Cg = /* @__PURE__ */ pe("<div><!></div>");
function xg(t, e) {
  we(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "static", 3, !1), s = p(e, "anchor", 3, !0), c = p(e, "fixed", 3, !1), l = p(e, "open", 31, () => ge(a())), u = p(e, "managed", 3, !1), d = p(e, "fullWidth", 3, !1), h = p(e, "quickOpen", 3, !1), f = p(e, "anchorElement", 15), m = p(e, "anchorMargin", 19, () => ({ top: 0, right: 0, bottom: 0, left: 0 })), v = p(e, "maxHeight", 3, 0), g = p(e, "horizontallyCenteredOnViewport", 3, !1), _ = p(e, "openBottomBias", 3, 0), S = p(e, "neverRestoreFocus", 3, !1), E = /* @__PURE__ */ Ye(e, [
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
  ]), C, b = /* @__PURE__ */ ve(void 0), y = ge({}), I = ge({}), T = /* @__PURE__ */ ve(void 0);
  te("SMUI:list:role", "menu"), te("SMUI:list:item:role", "menuitem"), xe(() => {
    var F, re;
    C && s() && !((F = C.parentElement) != null && F.classList.contains("mdc-menu-surface--anchor")) && ((re = C.parentElement) == null || re.classList.add("mdc-menu-surface--anchor"), f(C.parentElement ?? void 0));
  }), xe(() => {
    o(b) && o(b).isOpen() !== l() && (l() ? o(b).open() : o(b).close());
  }), xe(() => {
    o(b) && o(b).setQuickOpen(h());
  }), xe(() => {
    o(b) && o(b).setFixedPosition(c());
  }), xe(() => {
    o(b) && o(b).setMaxHeight(v());
  }), xe(() => {
    o(b) && o(b).setIsHorizontallyCenteredOnViewport(g());
  });
  const A = Qr;
  xe(() => {
    o(b) && e.anchorCorner != null && (typeof e.anchorCorner == "string" ? o(b).setAnchorCorner(A[e.anchorCorner]) : o(b).setAnchorCorner(e.anchorCorner));
  }), xe(() => {
    o(b) && o(b).setAnchorMargin(m());
  }), xe(() => {
    o(b) && o(b).setOpenBottomBias(_());
  });
  const x = ue("SMUI:menu-surface:mount"), D = ue("SMUI:menu-surface:unmount");
  ot(() => {
    q(
      b,
      new Ac({
        addClass: k,
        removeClass: B,
        hasClass: X,
        hasAnchor: () => !!f(),
        notifyClose: () => {
          u() || l(a()), l() || Ze(P(), "SMUIMenuSurfaceClosed");
        },
        notifyClosing: () => {
          u() || l(a()), l() || Ze(P(), "SMUIMenuSurfaceClosing");
        },
        notifyOpen: () => {
          u() || l(!0), l() && Ze(P(), "SMUIMenuSurfaceOpened");
        },
        notifyOpening: () => {
          l() || Ze(P(), "SMUIMenuSurfaceOpening");
        },
        isElementInContainer: (re) => P().contains(re),
        isRtl: () => getComputedStyle(P()).getPropertyValue("direction") === "rtl",
        setTransformOrigin: (re) => {
          I["transform-origin"] = re;
        },
        isFocused: () => document.activeElement === P(),
        saveFocus: () => {
          q(T, document.activeElement ?? void 0, !0);
        },
        restoreFocus: () => {
          !S() && (!C || P().contains(document.activeElement)) && o(T) && document.contains(o(T)) && "focus" in o(T) && o(T).focus();
        },
        getInnerDimensions: () => ({
          width: P().offsetWidth,
          height: P().offsetHeight
        }),
        getAnchorDimensions: () => f() ? f().getBoundingClientRect() : null,
        getWindowDimensions: () => ({ width: window.innerWidth, height: window.innerHeight }),
        getBodyDimensions: () => ({
          width: document.body.clientWidth,
          height: document.body.clientHeight
        }),
        getWindowScroll: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
        setPosition: (re) => {
          I.left = "left" in re ? `${re.left}px` : "", I.right = "right" in re ? `${re.right}px` : "", I.top = "top" in re ? `${re.top}px` : "", I.bottom = "bottom" in re ? `${re.bottom}px` : "";
        },
        setMaxHeight: (re) => {
          I["max-height"] = re;
        }
      }),
      !0
    );
    const F = {
      get open() {
        return l();
      },
      set open(re) {
        l(re);
      },
      closeProgrammatic: me
    };
    return x && x(F), o(b).init(), () => {
      var W, ie;
      D && D(F);
      const re = o(b).isHoistedElement;
      (W = o(b)) == null || W.destroy(), re && ((ie = P().parentNode) == null || ie.removeChild(P()));
    };
  }), Sn(() => {
    var F;
    s() && P() && ((F = P().parentElement) == null || F.classList.remove("mdc-menu-surface--anchor"));
  });
  function X(F) {
    return F in y ? y[F] : P().classList.contains(F);
  }
  function k(F) {
    y[F] || (y[F] = !0);
  }
  function B(F) {
    (!(F in y) || y[F]) && (y[F] = !1);
  }
  function me(F) {
    var re;
    (re = o(b)) == null || re.close(F), l(!1);
  }
  function V(F) {
    o(b) && l() && !u() && o(b).handleBodyClick(F);
  }
  function N() {
    return l();
  }
  function H(F) {
    l(F);
  }
  function K(F, re) {
    if (o(b) == null)
      throw new Error("Instance is not defined.");
    return o(b).setAbsolutePosition(F, re);
  }
  function J(F) {
    if (o(b) == null)
      throw new Error("Instance is not defined.");
    return o(b).setIsHoisted(F);
  }
  function M() {
    if (o(b) == null)
      throw new Error("Instance is not defined.");
    return o(b).isFixed();
  }
  function L() {
    if (o(b) == null)
      throw new Error("Instance is not defined.");
    return o(b).flipCornerHorizontally();
  }
  function P() {
    return C;
  }
  var Ee = {
    isOpen: N,
    setOpen: H,
    setAbsolutePosition: K,
    setIsHoisted: J,
    isFixed: M,
    flipCornerHorizontally: L,
    getElement: P
  }, ye = Cg();
  sa("click", mu.body, V, !0);
  var ce = (F) => {
    var re;
    o(b) && !u() && o(b).handleKeydown(F), (re = e.onkeydown) == null || re.call(e, F);
  };
  ze(
    ye,
    (F, re) => ({
      class: F,
      style: re,
      role: "dialog",
      ...E,
      onkeydown: ce
    }),
    [
      () => Ve({
        "mdc-menu-surface": !0,
        "mdc-menu-surface--fixed": c(),
        "mdc-menu-surface--open": a(),
        "smui-menu-surface--static": a(),
        "mdc-menu-surface--fullwidth": d(),
        ...y,
        [r()]: !0
      }),
      () => Object.entries(I).map(([F, re]) => `${F}: ${re};`).concat([i()]).join(" ")
    ]
  );
  var Se = Ie(ye);
  return Ae(Se, () => e.children ?? he), Ce(ye, (F) => C = F, () => C), Ue(ye, (F, re) => z == null ? void 0 : z(F, re), n), w(t, ye), Le(Ee);
}
function Hs(t, { addClass: e = (r) => t.classList.add(r), removeClass: n = (r) => t.classList.remove(r) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      n("mdc-menu-surface--anchor");
    }
  };
}
function Tg(t, e) {
  we(e, !0);
  const { closest: n } = ps;
  let r = p(e, "use", 19, () => []), i = p(e, "class", 3, ""), a = p(e, "open", 15, !1), s = p(e, "anchorElement", 15), c = p(e, "managed", 3, !1), l = /* @__PURE__ */ Ye(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "open",
    "anchorElement",
    "managed",
    "children"
  ]), u, d = /* @__PURE__ */ ve(void 0), h = /* @__PURE__ */ ve(void 0), f = /* @__PURE__ */ ve(void 0);
  te("SMUI:menu-surface:mount", (A) => {
    o(h) || q(h, A, !0);
  });
  const m = ue("SMUI:list:mount");
  te("SMUI:list:mount", (A) => {
    o(f) || q(f, A, !0), m && m(A);
  });
  const v = ue("SMUI:menu:mount"), g = ue("SMUI:menu:unmount");
  ot(() => (q(
    d,
    new Eg({
      addClassToElementAtIndex: (A, x) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).addClassForElementIndex(A, x);
      },
      removeClassFromElementAtIndex: (A, x) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).removeClassForElementIndex(A, x);
      },
      addAttributeToElementAtIndex: (A, x, D) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).setAttributeForElementIndex(A, x, D);
      },
      removeAttributeFromElementAtIndex: (A, x) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).removeAttributeForElementIndex(A, x);
      },
      getAttributeFromElementAtIndex: (A, x) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return o(f).getAttributeFromElementIndex(A, x);
      },
      elementContainsClass: (A, x) => A.classList.contains(x),
      closeSurface: (A) => {
        var x;
        c() || ((x = o(h)) == null || x.closeProgrammatic(A), Ze(I(), "SMUIMenuClosedProgrammatically"));
      },
      getElementIndex: (A) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return o(f).getOrderedList().map((x) => x.element).indexOf(A);
      },
      notifySelected: (A) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        Ze(I(), "SMUIMenuSelected", {
          index: A.index,
          item: o(f).getOrderedList()[A.index].element
        });
      },
      getMenuItemCount: () => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return o(f).items.length;
      },
      focusItemAtIndex: (A) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).focusItemAtIndex(A);
      },
      focusListRoot: () => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        "focus" in o(f).element && o(f).element.focus();
      },
      isSelectableItemAtIndex: (A) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return !!n(o(f).getOrderedList()[A].element, `.${Ai.MENU_SELECTION_GROUP}`);
      },
      getSelectedSiblingOfItemAtIndex: (A) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        const x = o(f).getOrderedList(), D = n(x[A].element, `.${Ai.MENU_SELECTION_GROUP}`), X = D == null ? void 0 : D.querySelector(`.${Ai.MENU_SELECTED_LIST_ITEM}`);
        return X ? x.map((k) => k.element).indexOf(X) : -1;
      }
    }),
    !0
  ), v && v(o(d)), o(d).init(), () => {
    var A;
    g && o(d) && g(o(d)), (A = o(d)) == null || A.destroy();
  }));
  function _(A) {
    o(d) && o(d).handleKeydown(A);
  }
  function S() {
    return a();
  }
  function E(A) {
    a(A);
  }
  function C(A) {
    if (o(d) == null)
      throw new Error("Instance is undefined.");
    o(d).setDefaultFocusState(A);
  }
  function b() {
    if (o(d) == null)
      throw new Error("Instance is undefined.");
    return o(d).getSelectedIndex();
  }
  function y() {
    return u;
  }
  function I() {
    return u.getElement();
  }
  var T = {
    isOpen: S,
    setOpen: E,
    setDefaultFocusState: C,
    getSelectedIndex: b,
    getMenuSurface: y,
    getElement: I
  };
  {
    let A = /* @__PURE__ */ fe(() => Ve({ "mdc-menu": !0, [i()]: !0 }));
    Ce(
      xg(t, rt(
        {
          get use() {
            return r();
          },
          get class() {
            return o(A);
          },
          get managed() {
            return c();
          }
        },
        () => l,
        {
          onkeydown: (x) => {
            var D;
            _(x), (D = e.onkeydown) == null || D.call(e, x);
          },
          onSMUIMenuSurfaceOpened: (x) => {
            var D;
            o(d) && o(d).handleMenuSurfaceOpened(), (D = e.onSMUIMenuSurfaceOpened) == null || D.call(e, x);
          },
          onSMUIListAction: (x) => {
            var D;
            o(d) && o(f) && o(d).handleItemAction(o(f).getOrderedList()[x.detail.index].element), (D = e.onSMUIListAction) == null || D.call(e, x);
          },
          get open() {
            return a();
          },
          set open(x) {
            a(x);
          },
          get anchorElement() {
            return s();
          },
          set anchorElement(x) {
            s(x);
          },
          children: (x, D) => {
            var X = $(), k = Z(X);
            Ae(k, () => e.children ?? he), w(x, X);
          },
          $$slots: { default: !0 }
        }
      )),
      (x) => u = x,
      () => u
    );
  }
  return Le(T);
}
function wg(t, e) {
  we(e, !0);
  const { closest: n, matches: r } = ps;
  let i = ue("SMUI:list:nav"), a = p(e, "use", 19, () => []), s = p(e, "class", 3, ""), c = p(e, "nonInteractive", 3, !1), l = p(e, "dense", 3, !1), u = p(e, "textualList", 3, !1), d = p(e, "avatarList", 3, !1), h = p(e, "iconList", 3, !1), f = p(e, "imageList", 3, !1), m = p(e, "thumbnailList", 3, !1), v = p(e, "videoList", 3, !1), g = p(e, "twoLine", 3, !1), _ = p(e, "threeLine", 3, !1), S = p(e, "vertical", 3, !0), E = p(e, "wrapFocus", 19, () => ue("SMUI:list:wrapFocus") ?? !1), C = p(e, "singleSelection", 3, !1), b = p(e, "disabledItemsFocusable", 3, !1), y = p(e, "selectedIndex", 31, () => -1), I = p(e, "radioList", 3, !1), T = p(e, "checkList", 3, !1), A = p(e, "hasTypeahead", 3, !1), x = p(e, "component", 3, Xi), D = p(e, "tag", 3, i ? "nav" : "ul"), X = /* @__PURE__ */ Ye(e, [
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
  ]), k, B = /* @__PURE__ */ ve(void 0), me = [], V = ue("SMUI:list:role");
  const N = /* @__PURE__ */ new WeakMap();
  let H = ue("SMUI:dialog:selection"), K = ue("SMUI:addLayoutListener"), J;
  te("SMUI:list:nonInteractive", c()), te("SMUI:separator:context", "list"), V || (C() ? (V = "listbox", te("SMUI:list:item:role", "option")) : I() ? (V = "radiogroup", te("SMUI:list:item:role", "radio")) : T() ? (V = "group", te("SMUI:list:item:role", "checkbox")) : (V = "list", te("SMUI:list:item:role", void 0))), xe(() => {
    o(B) && o(B).setVerticalOrientation(S());
  }), xe(() => {
    o(B) && o(B).setWrapFocus(E());
  }), xe(() => {
    o(B) && o(B).setHasTypeahead(A());
  }), xe(() => {
    o(B) && o(B).setSingleSelection(C());
  }), xe(() => {
    o(B) && o(B).setDisabledItemsFocusable(b());
  }), xe(() => {
    o(B) && C() && R() !== y() && o(B).setSelectedIndex(y());
  }), K && (J = K(Be)), te("SMUI:list:item:mount", (de) => {
    me.push(de), N.set(de.element, de), C() && de.selected && y(be(de.element));
  }), te("SMUI:list:item:unmount", (de) => {
    const se = (de && me.findIndex((G) => G === de)) ?? -1;
    se !== -1 && (me.splice(se, 1), N.delete(de.element));
  });
  const M = ue("SMUI:list:mount"), L = ue("SMUI:list:unmount");
  ot(() => {
    q(
      B,
      new bg({
        addClassForElementIndex: W,
        focusItemAtIndex: oe,
        getAttributeForElementIndex: (se, G) => {
          var Y;
          return ((Y = F()[se]) == null ? void 0 : Y.getAttr(G)) ?? null;
        },
        getFocusedElementIndex: () => document.activeElement ? F().map((se) => se.element).indexOf(document.activeElement) : -1,
        getListItemCount: () => me.length,
        getPrimaryTextAtIndex: Oe,
        hasCheckboxAtIndex: (se) => {
          var G;
          return ((G = F()[se]) == null ? void 0 : G.hasCheckbox) ?? !1;
        },
        hasRadioAtIndex: (se) => {
          var G;
          return ((G = F()[se]) == null ? void 0 : G.hasRadio) ?? !1;
        },
        isCheckboxCheckedAtIndex: (se) => {
          const G = F()[se];
          return ((G == null ? void 0 : G.hasCheckbox) && G.checked) ?? !1;
        },
        isFocusInsideList: () => k != null && Ge() !== document.activeElement && Ge().contains(document.activeElement),
        isRootFocused: () => k != null && document.activeElement === Ge(),
        listItemAtIndexHasClass: re,
        notifyAction: (se) => {
          y(se), k != null && Ze(Ge(), "SMUIListAction", { index: se });
        },
        notifySelectionChange: (se) => {
          k != null && Ze(Ge(), "SMUIListSelectionChange", { changedIndices: se });
        },
        removeClassForElementIndex: ie,
        setAttributeForElementIndex: Te,
        setCheckedCheckboxOrRadioAtIndex: (se, G) => {
          F()[se].checked = G;
        },
        setTabIndexForListItemChildren: (se, G) => {
          const Y = F()[se];
          Array.prototype.forEach.call(Y.element.querySelectorAll("button:not(:disabled), a"), (at) => {
            at.setAttribute("tabindex", G);
          });
        }
      }),
      !0
    );
    const de = {
      get element() {
        return Ge();
      },
      get items() {
        return me;
      },
      get typeaheadInProgress() {
        if (!o(B))
          throw new Error("Instance is undefined.");
        return o(B).isTypeaheadInProgress();
      },
      typeaheadMatchItem(se, G) {
        if (!o(B))
          throw new Error("Instance is undefined.");
        return o(B).typeaheadMatchItem(
          se,
          G,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: F,
      focusItemAtIndex: oe,
      addClassForElementIndex: W,
      removeClassForElementIndex: ie,
      setAttributeForElementIndex: Te,
      removeAttributeForElementIndex: j,
      getAttributeFromElementIndex: ee,
      getPrimaryTextAtIndex: Oe
    };
    return M && M(de), o(B).init(), o(B).layout(), () => {
      var se;
      L && L(de), (se = o(B)) == null || se.destroy();
    };
  }), Sn(() => {
    J && J();
  });
  function P(de) {
    o(B) && de.target && o(B).handleKeydown(de, de.target.classList.contains("mdc-deprecated-list-item"), be(de.target));
  }
  function Ee(de) {
    o(B) && de.target && o(B).handleFocusIn(be(de.target));
  }
  function ye(de) {
    o(B) && de.target && o(B).handleFocusOut(be(de.target));
  }
  function ce(de) {
    o(B) && de.target && o(B).handleClick(be(de.target), !r(de.target, 'input[type="checkbox"], input[type="radio"]'), de);
  }
  function Se(de) {
    if (I() || T()) {
      const se = be(de.target);
      if (se !== -1) {
        const G = F()[se];
        G && (I() && !G.checked || T()) && (r(de.detail.target, 'input[type="checkbox"], input[type="radio"]') || (G.checked = !G.checked), G.activateRipple(), window.requestAnimationFrame(() => {
          G.deactivateRipple();
        }));
      }
    }
  }
  function F() {
    return k == null ? [] : [...Ge().children].map((de) => N.get(de)).filter((de) => de && de._smui_list_item_accessor);
  }
  function re(de, se) {
    const G = F()[de];
    return (G && G.hasClass(se)) ?? !1;
  }
  function W(de, se) {
    const G = F()[de];
    G && G.addClass(se);
  }
  function ie(de, se) {
    const G = F()[de];
    G && G.removeClass(se);
  }
  function Te(de, se, G) {
    const Y = F()[de];
    Y && Y.addAttr(se, G);
  }
  function j(de, se) {
    const G = F()[de];
    G && G.removeAttr(se);
  }
  function ee(de, se) {
    const G = F()[de];
    return G ? G.getAttr(se) : null;
  }
  function Oe(de) {
    const se = F()[de];
    return (se && se.getPrimaryText()) ?? "";
  }
  function be(de) {
    const se = n(de, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return se && r(se, ".mdc-deprecated-list-item") ? F().map((G) => G == null ? void 0 : G.element).indexOf(se) : -1;
  }
  function Be() {
    if (!o(B))
      throw new Error("Instance is undefined.");
    return o(B).layout();
  }
  function Je(de, se) {
    if (!o(B))
      throw new Error("Instance is undefined.");
    return o(B).setEnabled(de, se);
  }
  function vt() {
    if (!o(B))
      throw new Error("Instance is undefined.");
    return o(B).isTypeaheadInProgress();
  }
  function R() {
    if (!o(B))
      throw new Error("Instance is undefined.");
    return o(B).getSelectedIndex();
  }
  function U() {
    if (!o(B))
      throw new Error("Instance is undefined.");
    return o(B).getFocusedItemIndex();
  }
  function oe(de) {
    const se = F()[de];
    se && "focus" in se.element && se.element.focus();
  }
  function Ge() {
    return k.getElement();
  }
  var Ot = {
    layout: Be,
    setEnabled: Je,
    getTypeaheadInProgress: vt,
    getSelectedIndex: R,
    getFocusedItemIndex: U,
    focusItemAtIndex: oe,
    getElement: Ge
  }, Rt = $(), Cn = Z(Rt);
  {
    let de = /* @__PURE__ */ fe(() => Ve({
      "mdc-deprecated-list": !0,
      "mdc-deprecated-list--non-interactive": c(),
      "mdc-deprecated-list--dense": l(),
      "mdc-deprecated-list--textual-list": u(),
      "mdc-deprecated-list--avatar-list": d() || H,
      "mdc-deprecated-list--icon-list": h(),
      "mdc-deprecated-list--image-list": f(),
      "mdc-deprecated-list--thumbnail-list": m(),
      "mdc-deprecated-list--video-list": v(),
      "mdc-deprecated-list--two-line": g(),
      "smui-list--three-line": _() && !g(),
      [s()]: !0
    }));
    ai(Cn, x, (se, G) => {
      Ce(
        G(se, rt(
          {
            get tag() {
              return D();
            },
            get use() {
              return a();
            },
            get class() {
              return o(de);
            },
            get role() {
              return V;
            }
          },
          () => X,
          {
            onkeydown: (Y) => {
              var Re;
              P(Y), (Re = e.onkeydown) == null || Re.call(e, Y);
            },
            onfocusin: (Y) => {
              var Re;
              Ee(Y), (Re = e.onfocusin) == null || Re.call(e, Y);
            },
            onfocusout: (Y) => {
              var Re;
              ye(Y), (Re = e.onfocusout) == null || Re.call(e, Y);
            },
            onclick: (Y) => {
              var Re;
              ce(Y), (Re = e.onclick) == null || Re.call(e, Y);
            },
            onSMUIAction: (Y) => {
              var Re;
              Se(Y), (Re = e.onSMUIAction) == null || Re.call(e, Y);
            },
            children: (Y, Re) => {
              var at = $(), nt = Z(at);
              Ae(nt, () => e.children ?? he), w(Y, at);
            },
            $$slots: { default: !0 }
          }
        )),
        (Y) => k = Y,
        () => k
      );
    });
  }
  return w(t, Rt), Le(Ot);
}
let Lg = 0;
var Og = /* @__PURE__ */ pe('<span class="mdc-deprecated-list-item__ripple"></span>'), Rg = /* @__PURE__ */ pe("<!><!>", 1);
function Mg(t, e) {
  we(e, !0);
  let n = () => {
  };
  function r(W) {
    return W === n;
  }
  let i = ue("SMUI:list:item:nav"), a = p(e, "use", 19, () => []), s = p(e, "class", 3, ""), c = p(e, "style", 3, ""), l = p(e, "nonInteractive", 19, () => ue("SMUI:list:nonInteractive") ?? !1), u = p(e, "ripple", 19, () => !l()), d = p(e, "wrapper", 3, !1), h = p(e, "activated", 15, !1), f = p(e, "role", 19, () => d() ? "presentation" : ue("SMUI:list:item:role")), m = p(e, "selected", 15, !1), v = p(e, "disabled", 3, !1), g = p(e, "skipRestoreFocus", 3, !1), _ = p(e, "tabindex", 15, n), S = p(e, "inputId", 19, () => "SMUI-form-field-list-" + Lg++), E = p(e, "component", 3, Xi), C = p(e, "tag", 19, () => i ? e.href ? "a" : "span" : "li"), b = /* @__PURE__ */ Ye(e, [
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
  let y, I = ge({}), T = ge({}), A = ge({}), x = /* @__PURE__ */ ve(void 0), D = /* @__PURE__ */ ve(void 0);
  const X = /* @__PURE__ */ fe(() => r(_()) ? !l() && !v() && (m() || o(x) && o(x).checked) ? 0 : -1 : _());
  te("SMUI:generic:input:props", { id: S() }), te("SMUI:separator:context", void 0), te("SMUI:generic:input:mount", (W) => {
    ("_smui_checkbox_accessor" in W || "_smui_radio_accessor" in W) && q(x, W, !0);
  }), te("SMUI:generic:input:unmount", () => {
    q(x, void 0);
  });
  const k = ue("SMUI:list:item:mount"), B = ue("SMUI:list:item:unmount");
  ot(() => {
    if (!m() && !l()) {
      let ie = !0, Te = y.getElement();
      for (; Te.previousElementSibling; )
        if (Te = Te.previousElementSibling, Te.nodeType === 1 && Te.classList.contains("mdc-deprecated-list-item") && !Te.classList.contains("mdc-deprecated-list-item--disabled")) {
          ie = !1;
          break;
        }
      ie && q(D, window.requestAnimationFrame(() => L(Te)), !0);
    }
    const W = {
      _smui_list_item_accessor: !0,
      get element() {
        return ce();
      },
      get selected() {
        return m();
      },
      set selected(ie) {
        m(ie);
      },
      hasClass: me,
      addClass: V,
      removeClass: N,
      getAttr: K,
      addAttr: J,
      removeAttr: M,
      getPrimaryText: ye,
      // For inputs within item.
      get checked() {
        return (o(x) && o(x).checked) ?? !1;
      },
      set checked(ie) {
        o(x) && (o(x).checked = !!ie);
      },
      get hasCheckbox() {
        return !!(o(x) && "_smui_checkbox_accessor" in o(x));
      },
      get hasRadio() {
        return !!(o(x) && "_smui_radio_accessor" in o(x));
      },
      activateRipple() {
        o(x) && o(x).activateRipple();
      },
      deactivateRipple() {
        o(x) && o(x).deactivateRipple();
      },
      // For select options.
      getValue() {
        return e.value;
      },
      // For autocomplete
      action: Ee,
      get tabindex() {
        return o(X);
      },
      set tabindex(ie) {
        _(ie);
      },
      get disabled() {
        return v();
      },
      get activated() {
        return h();
      },
      set activated(ie) {
        h(ie);
      }
    };
    return k && k(W), () => {
      B && B(W);
    };
  }), Sn(() => {
    o(D) && window.cancelAnimationFrame(o(D));
  });
  function me(W) {
    return W in I ? I[W] : ce().classList.contains(W);
  }
  function V(W) {
    I[W] || (I[W] = !0);
  }
  function N(W) {
    (!(W in I) || I[W]) && (I[W] = !1);
  }
  function H(W, ie) {
    T[W] != ie && (ie === "" || ie == null ? delete T[W] : T[W] = ie);
  }
  function K(W) {
    return W in A ? A[W] ?? null : ce().getAttribute(W);
  }
  function J(W, ie) {
    A[W] !== ie && (A[W] = ie);
  }
  function M(W) {
    (!(W in A) || A[W] != null) && (A[W] = void 0);
  }
  function L(W) {
    let ie = !0;
    for (; W.nextElementSibling; )
      if (W = W.nextElementSibling, W.nodeType === 1 && W.classList.contains("mdc-deprecated-list-item")) {
        const Te = W.attributes.getNamedItem("tabindex");
        if (Te && Te.value === "0") {
          ie = !1;
          break;
        }
      }
    ie && _(0);
  }
  function P(W) {
    const ie = W.key === "Enter", Te = W.key === "Space";
    (ie || Te) && Ee(W);
  }
  function Ee(W) {
    v() || Ze(ce(), "SMUIAction", W);
  }
  function ye() {
    const W = ce(), ie = W.querySelector(".mdc-deprecated-list-item__primary-text");
    if (ie)
      return ie.textContent ?? "";
    const Te = W.querySelector(".mdc-deprecated-list-item__text");
    return Te ? Te.textContent ?? "" : W.textContent ?? "";
  }
  function ce() {
    return y.getElement();
  }
  var Se = { action: Ee, getPrimaryText: ye, getElement: ce }, F = $(), re = Z(F);
  {
    let W = /* @__PURE__ */ fe(() => [
      ...l() ? [] : [
        [
          Wt,
          {
            ripple: !o(x),
            unbounded: !1,
            color: (h() || m()) && e.color == null ? "primary" : e.color,
            disabled: v(),
            addClass: V,
            removeClass: N,
            addStyle: H
          }
        ]
      ],
      ...a()
    ]), ie = /* @__PURE__ */ fe(() => Ve({
      "mdc-deprecated-list-item": !d(),
      "mdc-deprecated-list-item__wrapper": d(),
      "mdc-deprecated-list-item--activated": h(),
      "mdc-deprecated-list-item--selected": m(),
      "mdc-deprecated-list-item--disabled": v(),
      "mdc-menu-item--selected": !i && f() === "menuitem" && m(),
      "smui-menu-item--non-interactive": l(),
      ...I,
      [s()]: !0
    })), Te = /* @__PURE__ */ fe(() => Object.entries(T).map(([ee, Oe]) => `${ee}: ${Oe};`).concat([c()]).join(" ")), j = /* @__PURE__ */ fe(() => g() || void 0);
    ai(re, E, (ee, Oe) => {
      Ce(
        Oe(ee, rt(
          {
            get tag() {
              return C();
            },
            get use() {
              return o(W);
            },
            get class() {
              return o(ie);
            },
            get style() {
              return o(Te);
            }
          },
          () => i && h() ? { "aria-current": "page" } : {},
          () => !i || d() ? { role: f() } : {},
          () => !i && f() === "option" ? { "aria-selected": m() ? "true" : "false" } : {},
          () => !i && (f() === "radio" || f() === "checkbox") ? {
            "aria-checked": o(x) && o(x).checked ? "true" : "false"
          } : {},
          () => i ? {} : { "aria-disabled": v() ? "true" : "false" },
          {
            get "data-menu-item-skip-restore-focus"() {
              return o(j);
            },
            get tabindex() {
              return o(X);
            },
            get href() {
              return e.href;
            }
          },
          () => A,
          () => b,
          {
            onclick: (be) => {
              var Be;
              Ee(be), (Be = e.onclick) == null || Be.call(e, be);
            },
            onkeydown: (be) => {
              var Be;
              P(be), (Be = e.onkeydown) == null || Be.call(e, be);
            },
            children: (be, Be) => {
              var Je = Rg(), vt = Z(Je);
              {
                var R = (oe) => {
                  var Ge = Og();
                  w(oe, Ge);
                };
                ne(vt, (oe) => {
                  u() && oe(R);
                });
              }
              var U = _e(vt);
              Ae(U, () => e.children ?? he), w(be, Je);
            },
            $$slots: { default: !0 }
          }
        )),
        (be) => y = be,
        () => y
      );
    });
  }
  return w(t, F), Le(Se);
}
let Dg = 0;
var Hg = /* @__PURE__ */ pe("<div><!></div>");
function Pg(t, e) {
  we(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "id", 19, () => "SMUI-select-helper-text-" + Dg++), a = p(e, "persistent", 3, !1), s = p(e, "validationMsg", 3, !1), c = /* @__PURE__ */ Ye(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "id",
    "persistent",
    "validationMsg",
    "children"
  ]), l, u = /* @__PURE__ */ ve(void 0), d = ge({}), h = ge({}), f = /* @__PURE__ */ ve(void 0);
  const m = ue("SMUI:select:helper-text:id"), v = ue("SMUI:select:helper-text:mount"), g = ue("SMUI:select:helper-text:unmount");
  ot(() => (q(
    u,
    new Sg({
      addClass: S,
      removeClass: E,
      hasClass: _,
      getAttr: C,
      setAttr: b,
      removeAttr: y,
      setContent: (k) => {
        q(f, k, !0);
      }
    }),
    !0
  ), m && m(i()), v && v(o(u)), o(u).init(), () => {
    var k;
    g && o(u) && g(o(u)), (k = o(u)) == null || k.destroy();
  }));
  function _(k) {
    return k in d ? d[k] : I().classList.contains(k);
  }
  function S(k) {
    d[k] || (d[k] = !0);
  }
  function E(k) {
    (!(k in d) || d[k]) && (d[k] = !1);
  }
  function C(k) {
    return k in h ? h[k] ?? null : I().getAttribute(k);
  }
  function b(k, B) {
    h[k] !== B && (h[k] = B);
  }
  function y(k) {
    (!(k in h) || h[k] != null) && (h[k] = void 0);
  }
  function I() {
    return l;
  }
  var T = { getElement: I }, A = Hg();
  ze(
    A,
    (k) => ({
      class: k,
      "aria-hidden": a() ? void 0 : "true",
      id: i(),
      ...h,
      ...c
    }),
    [
      () => Ve({
        "mdc-select-helper-text": !0,
        "mdc-select-helper-text--validation-msg": s(),
        "mdc-select-helper-text--validation-msg-persistent": a(),
        ...d,
        [r()]: !0
      })
    ]
  );
  var x = Ie(A);
  {
    var D = (k) => {
      var B = $(), me = Z(B);
      Ae(me, () => e.children ?? he), w(k, B);
    }, X = (k) => {
      var B = Kt();
      He(() => ht(B, o(f))), w(k, B);
    };
    ne(x, (k) => {
      o(f) == null ? k(D) : k(X, !1);
    });
  }
  return Ce(A, (k) => l = k, () => l), Ue(A, (k, B) => z == null ? void 0 : z(k, B), n), w(t, A), Le(T);
}
let Ng = 0;
var Ug = /* @__PURE__ */ pe("<input/>"), kg = /* @__PURE__ */ pe('<span class="mdc-select__ripple"></span>'), Bg = /* @__PURE__ */ pe('<div><!> <div><!> <!> <!> <!> <span><span> </span></span> <span><svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"><polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon><polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon></svg></span> <!></div> <!></div> <!>', 1);
function Fg(t, e) {
  we(e, !0);
  const n = () => Fn(Ge, "$selectedTextStore", r), [r, i] = lr();
  let a = () => {
  };
  function s(O) {
    return O === a;
  }
  let c = p(e, "use", 19, () => []), l = p(e, "class", 3, ""), u = p(e, "style", 3, ""), d = p(e, "ripple", 3, !0), h = p(e, "disabled", 3, !1), f = p(e, "variant", 3, "standard"), m = p(e, "noLabel", 3, !1), v = p(e, "label", 3, void 0), g = p(e, "value", 15), _ = p(e, "key", 3, (O) => O), S = p(e, "dirty", 15, !1), E = p(e, "invalid", 15, a), C = p(e, "updateInvalid", 19, () => s(E())), b = p(e, "required", 3, !1), y = p(e, "inputId", 19, () => "SMUI-select-" + Ng++), I = p(e, "hiddenInput", 3, !1), T = p(e, "withLeadingIcon", 3, a), A = p(e, "anchor$use", 19, () => []), x = p(e, "anchor$class", 3, ""), D = p(e, "selectedTextContainer$use", 19, () => []), X = p(e, "selectedTextContainer$class", 3, ""), k = p(e, "selectedText$use", 19, () => []), B = p(e, "selectedText$class", 3, ""), me = p(e, "dropdownIcon$use", 19, () => []), V = p(e, "dropdownIcon$class", 3, ""), N = p(e, "menu$class", 3, ""), H = /* @__PURE__ */ Ye(e, [
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
  const K = s(E());
  s(E()) && E(!1);
  let J, M = /* @__PURE__ */ ve(void 0), L = ge({}), P = ge({}), Ee, ye = ge({}), ce = /* @__PURE__ */ ve(-1);
  const Se = /* @__PURE__ */ fe(() => H.menu$id ?? y() + "-menu");
  let F = /* @__PURE__ */ ve(void 0), re = ue("SMUI:addLayoutListener"), W, ie = /* @__PURE__ */ ve(!1), Te = ge({}), j = /* @__PURE__ */ ve(void 0), ee = /* @__PURE__ */ ve(void 0), Oe = /* @__PURE__ */ ve(!1), be, Be = ue("SMUI:select:context"), Je, vt, R, U, oe;
  te("SMUI:list:role", ""), te("SMUI:list:nav", !1);
  const Ge = Qt("");
  te("SMUI:select:selectedText", Ge);
  const Ot = Qt(g());
  xe(() => {
    ti(Ot, g());
  }), te("SMUI:select:value", Ot), xe(() => {
    o(M) && o(M).getValue() !== _()(g()) && o(M).setValue(_()(g()));
  });
  let Rt = o(ce);
  xe(() => {
    if (Rt !== o(ce))
      if (Rt = o(ce), o(M))
        o(M).setSelectedIndex(
          o(ce),
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const O = Nt();
        g() !== O[o(ce)] && g(O[o(ce)]);
      }
  }), xe(() => {
    o(M) && o(M).getDisabled() !== h() && o(M).setDisabled(h());
  }), xe(() => {
    o(M) && S() && o(M).isValid() !== !E() && (C() ? E(!o(M).isValid()) : o(M).setValid(!E()));
  }), xe(() => {
    o(M) && o(M).getRequired() !== b() && o(M).setRequired(b());
  }), re && (W = re(oi)), te("SMUI:select:leading-icon:mount", (O) => {
    Je = O;
  }), te("SMUI:select:leading-icon:unmount", () => {
    Je = void 0;
  }), te("SMUI:list:mount", (O) => {
    be = O;
  }), te("SMUI:select:helper-text:id", (O) => {
    q(F, O, !0);
  }), te("SMUI:select:helper-text:mount", (O) => {
    vt = O;
  }), te("SMUI:select:helper-text:unmount", () => {
    q(F, void 0), vt = void 0;
  }), ot(() => (q(
    M,
    new Ag(
      {
        // getSelectAdapterMethods
        // getMenuItemAttr: (menuItem: Element, attr: string) =>
        //   menuItem.getAttribute(attr),
        setSelectedText: (O) => {
          ti(Ge, O);
        },
        isSelectAnchorFocused: () => document.activeElement === Ee,
        getSelectAnchorAttr: at,
        setSelectAnchorAttr: nt,
        removeSelectAnchorAttr: Et,
        addMenuClass: Y,
        removeMenuClass: Re,
        openMenu: () => {
          q(ie, !0);
        },
        closeMenu: () => {
          q(ie, !1);
        },
        getAnchorElement: () => Ee,
        setMenuAnchorElement: (O) => {
          q(j, O, !0);
        },
        setMenuAnchorCorner: (O) => {
          q(ee, O, !0);
        },
        setMenuWrapFocus: (O) => {
          q(Oe, O, !0);
        },
        getSelectedIndex: () => o(ce),
        setSelectedIndex: (O) => {
          Rt = O, q(ce, O, !0), g(Nt()[o(ce)]);
        },
        focusMenuItemAtIndex: (O) => {
          be.focusItemAtIndex(O);
        },
        getMenuItemCount: () => be.items.length,
        getMenuItemValues: () => Nt().map(_()),
        getMenuItemTextAtIndex: (O) => be.getPrimaryTextAtIndex(O),
        isTypeaheadInProgress: () => be.typeaheadInProgress,
        typeaheadMatchItem: (O, ae) => be.typeaheadMatchItem(O, ae),
        // getCommonAdapterMethods
        addClass: de,
        removeClass: se,
        hasClass: Cn,
        setRippleCenter: (O) => U && U.setRippleCenter(O),
        activateBottomLine: () => U && U.activate(),
        deactivateBottomLine: () => U && U.deactivate(),
        notifyChange: (O) => {
          var ae;
          S(!0), C() && E(!((ae = o(M)) != null && ae.isValid())), Ze(Mn(), "SMUISelectChange", { value: g(), index: o(ce) });
        },
        // getOutlineAdapterMethods
        hasOutline: () => !!oe,
        notchOutline: (O) => oe && oe.notch(O),
        closeOutline: () => oe && oe.closeNotch(),
        // getLabelAdapterMethods
        hasLabel: () => !!R,
        floatLabel: (O) => R && R.float(O),
        getLabelWidth: () => R ? R.getWidth() : 0,
        setLabelRequired: (O) => R && R.setRequired(O)
      },
      {
        get helperText() {
          return vt;
        },
        get leadingIcon() {
          return Je;
        }
      }
    ),
    !0
  ), q(ce, Nt().indexOf(g()), !0), o(M).init(), Mt(K), () => {
    var O;
    (O = o(M)) == null || O.destroy();
  })), Sn(() => {
    W && W();
  });
  function Cn(O) {
    return O in L ? L[O] : Mn().classList.contains(O);
  }
  function de(O) {
    L[O] || (L[O] = !0);
  }
  function se(O) {
    (!(O in L) || L[O]) && (L[O] = !1);
  }
  function G(O, ae) {
    P[O] != ae && (ae === "" || ae == null ? delete P[O] : P[O] = ae);
  }
  function Y(O) {
    Te[O] || (Te[O] = !0);
  }
  function Re(O) {
    (!(O in Te) || Te[O]) && (Te[O] = !1);
  }
  function at(O) {
    return O in ye ? ye[O] ?? null : Mn().getAttribute(O);
  }
  function nt(O, ae) {
    ye[O] !== ae && (ye[O] = ae);
  }
  function Et(O) {
    (!(O in ye) || ye[O] != null) && (ye[O] = void 0);
  }
  function Nt() {
    return be.getOrderedList().map((O) => O.getValue());
  }
  function cr(O) {
    const ae = O.currentTarget.getBoundingClientRect();
    return (lt(O) ? O.touches[0].clientX : O.clientX) - ae.left;
  }
  function lt(O) {
    return "touches" in O;
  }
  function ct() {
    if (o(M) == null)
      throw new Error("Instance is undefined.");
    return o(M).getUseDefaultValidation();
  }
  function Mt(O) {
    var ae;
    (ae = o(M)) == null || ae.setUseDefaultValidation(O);
  }
  function Rn() {
    Ee.focus();
  }
  function oi() {
    var O;
    (O = o(M)) == null || O.layout();
  }
  function Mn() {
    return J;
  }
  var De = {
    getUseDefaultValidation: ct,
    setUseDefaultValidation: Mt,
    focus: Rn,
    layout: oi,
    getElement: Mn
  }, $e = Bg(), Qe = Z($e);
  ze(Qe, (O, ae, st) => ({ class: O, style: ae, ...st }), [
    () => Ve({
      "mdc-select": !0,
      "mdc-select--required": b(),
      "mdc-select--disabled": h(),
      "mdc-select--filled": f() === "filled",
      "mdc-select--outlined": f() === "outlined",
      "smui-select--standard": f() === "standard",
      "mdc-select--with-leading-icon": s(T()) ? e.leadingIcon : T(),
      "mdc-select--no-label": m() || v() == null,
      "mdc-select--invalid": E(),
      "mdc-select--activated": o(ie),
      "mdc-data-table__pagination-rows-per-page-select": Be === "data-table:pagination",
      ...L,
      [l()]: !0
    }),
    () => Object.entries(P).map(([O, ae]) => `${O}: ${ae};`).concat([u()]).join(" "),
    () => Fi(H, [
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
  var xt = Ie(Qe);
  {
    var ln = (O) => {
      var ae = Ug();
      ze(
        ae,
        (st) => ({
          type: "hidden",
          required: b(),
          disabled: h(),
          value: g(),
          ...st
        }),
        [() => ft(H, "input$")],
        void 0,
        void 0,
        !0
      ), w(O, ae);
    };
    ne(xt, (O) => {
      I() && O(ln);
    });
  }
  var We = _e(xt, 2), mt = (O) => {
    var ae;
    Ee.focus(), o(M) && o(M).handleClick(cr(O)), (ae = e.anchor$onclick) == null || ae.call(e, O);
  }, At = (O) => {
    var ae;
    o(M) && o(M).handleKeydown(O), (ae = e.onkeydown) == null || ae.call(e, O);
  }, Xe = (O) => {
    var ae;
    o(M) && o(M).handleBlur(), Ze(Mn(), "blur", O), (ae = e.anchor$onblur) == null || ae.call(e, O);
  }, St = (O) => {
    var ae;
    o(M) && o(M).handleFocus(), Ze(Mn(), "focus", O), (ae = e.anchor$onfocus) == null || ae.call(e, O);
  };
  ze(
    We,
    (O, ae) => ({
      class: O,
      "aria-required": b() ? "true" : void 0,
      "aria-disabled": h() ? "true" : void 0,
      "aria-controls": o(Se),
      "aria-expanded": o(ie) ? "true" : "false",
      "aria-describedby": o(F),
      role: "combobox",
      tabindex: "0",
      ...ye,
      ...ae,
      onclick: mt,
      onkeydown: At,
      onblur: Xe,
      onfocus: St
    }),
    [
      () => Ve({ "mdc-select__anchor": !0, [x()]: !0 }),
      () => ft(H, "anchor$")
    ]
  );
  var Ut = Ie(We);
  {
    var jt = (O) => {
      var ae = kg();
      w(O, ae);
    };
    ne(Ut, (O) => {
      f() === "filled" && O(jt);
    });
  }
  var pt = _e(Ut, 2);
  {
    var Tt = (O) => {
      {
        let ae = /* @__PURE__ */ fe(() => y() + "-smui-label"), st = /* @__PURE__ */ fe(() => n() !== ""), Ct = /* @__PURE__ */ fe(() => ft(H, "label$"));
        Ce(
          es(O, rt(
            {
              get id() {
                return o(ae);
              },
              get floatAbove() {
                return o(st);
              },
              get required() {
                return b();
              }
            },
            () => o(Ct),
            {
              children: (zn, Wn) => {
                var Yi = $(), li = Z(Yi);
                {
                  var Nr = (Ur) => {
                  }, _s = (Ur) => {
                    var xa = $(), Qi = Z(xa);
                    {
                      var Bo = (fr) => {
                        var kr = Kt();
                        He(() => ht(kr, v())), w(fr, kr);
                      }, Ta = (fr) => {
                        var kr = $(), Is = Z(kr);
                        Ae(Is, v), w(fr, kr);
                      };
                      ne(
                        Qi,
                        (fr) => {
                          typeof v() == "string" ? fr(Bo) : fr(Ta, !1);
                        },
                        !0
                      );
                    }
                    w(Ur, xa);
                  };
                  ne(li, (Ur) => {
                    v() == null ? Ur(Nr) : Ur(_s, !1);
                  });
                }
                w(zn, Yi);
              },
              $$slots: { default: !0 }
            }
          )),
          (zn) => R = zn,
          () => R
        );
      }
    };
    ne(pt, (O) => {
      f() !== "outlined" && !m() && v() != null && O(Tt);
    });
  }
  var nn = _e(pt, 2);
  {
    var gt = (O) => {
      {
        let ae = /* @__PURE__ */ fe(() => m() || v() == null), st = /* @__PURE__ */ fe(() => ft(H, "outline$"));
        Ce(
          Ic(O, rt(
            {
              get noLabel() {
                return o(ae);
              }
            },
            () => o(st),
            {
              children: (Ct, zn) => {
                var Wn = $(), Yi = Z(Wn);
                {
                  var li = (Nr) => {
                    {
                      let _s = /* @__PURE__ */ fe(() => y() + "-smui-label"), Ur = /* @__PURE__ */ fe(() => n() !== ""), xa = /* @__PURE__ */ fe(() => ft(H, "label$"));
                      Ce(
                        es(Nr, rt(
                          {
                            get id() {
                              return o(_s);
                            },
                            get floatAbove() {
                              return o(Ur);
                            },
                            get required() {
                              return b();
                            }
                          },
                          () => o(xa),
                          {
                            children: (Qi, Bo) => {
                              var Ta = $(), fr = Z(Ta);
                              {
                                var kr = (Ji) => {
                                }, Is = (Ji) => {
                                  var Fo = $(), Qc = Z(Fo);
                                  {
                                    var Jc = (ui) => {
                                      var $i = Kt();
                                      He(() => ht($i, v())), w(ui, $i);
                                    }, $c = (ui) => {
                                      var $i = $(), ed = Z($i);
                                      Ae(ed, v), w(ui, $i);
                                    };
                                    ne(
                                      Qc,
                                      (ui) => {
                                        typeof v() == "string" ? ui(Jc) : ui($c, !1);
                                      },
                                      !0
                                    );
                                  }
                                  w(Ji, Fo);
                                };
                                ne(fr, (Ji) => {
                                  v() == null ? Ji(kr) : Ji(Is, !1);
                                });
                              }
                              w(Qi, Ta);
                            },
                            $$slots: { default: !0 }
                          }
                        )),
                        (Qi) => R = Qi,
                        () => R
                      );
                    }
                  };
                  ne(Yi, (Nr) => {
                    !m() && v() != null && Nr(li);
                  });
                }
                w(Ct, Wn);
              },
              $$slots: { default: !0 }
            }
          )),
          (Ct) => oe = Ct,
          () => oe
        );
      }
    };
    ne(nn, (O) => {
      f() === "outlined" && O(gt);
    });
  }
  var Hr = _e(nn, 2);
  Ae(Hr, () => e.leadingIcon ?? he);
  var vn = _e(Hr, 2);
  ze(vn, (O, ae) => ({ class: O, ...ae }), [
    () => Ve({
      "mdc-select__selected-text-container": !0,
      [X()]: !0
    }),
    () => ft(H, "selectedTextContainer$")
  ]);
  var dr = Ie(vn);
  ze(
    dr,
    (O, ae) => ({
      id: y() + "-smui-selected-text",
      class: O,
      role: "button",
      "aria-haspopup": "listbox",
      "aria-labelledby": y() + "-smui-label",
      ...ae
    }),
    [
      () => Ve({
        "mdc-select__selected-text": !0,
        [B()]: !0
      }),
      () => ft(H, "selectedText$")
    ]
  );
  var Zi = Ie(dr);
  Ue(dr, (O, ae) => z == null ? void 0 : z(O, ae), k), Ue(vn, (O, ae) => z == null ? void 0 : z(O, ae), D);
  var mn = _e(vn, 2);
  ze(mn, (O, ae) => ({ class: O, ...ae }), [
    () => Ve({
      "mdc-select__dropdown-icon": !0,
      [V()]: !0
    }),
    () => ft(H, "dropdownIcon$")
  ]), Ue(mn, (O, ae) => z == null ? void 0 : z(O, ae), me);
  var qn = _e(mn, 2);
  {
    var Dn = (O) => {
      {
        let ae = /* @__PURE__ */ fe(() => ft(H, "ripple$"));
        Ce(_c(O, rt(() => o(ae))), (st) => U = st, () => U);
      }
    };
    ne(qn, (O) => {
      f() !== "outlined" && d() && O(Dn);
    });
  }
  Ce(We, (O) => Ee = O, () => Ee), Ue(We, (O, ae) => z == null ? void 0 : z(O, ae), A);
  var Pr = _e(We, 2);
  {
    let O = /* @__PURE__ */ fe(() => Ve({
      "mdc-select__menu": !0,
      ...Te,
      [N()]: !0
    })), ae = /* @__PURE__ */ fe(() => ft(H, "menu$"));
    Tg(Pr, rt(
      {
        get class() {
          return o(O);
        },
        get id() {
          return o(Se);
        },
        fullWidth: !0,
        anchor: !1,
        get anchorElement() {
          return o(j);
        },
        get anchorCorner() {
          return o(ee);
        }
      },
      () => o(ae),
      {
        onSMUIMenuSelected: (st) => {
          var Ct;
          o(M) && o(M).handleMenuItemAction(st.detail.index), (Ct = e.onSMUIMenuSelected) == null || Ct.call(e, st);
        },
        onSMUIMenuSurfaceClosing: (st) => {
          var Ct;
          o(M) && o(M).handleMenuClosing(), (Ct = e.onSMUIMenuSurfaceClosing) == null || Ct.call(e, st);
        },
        onSMUIMenuSurfaceClosed: (st) => {
          var Ct;
          o(M) && o(M).handleMenuClosed(), (Ct = e.onSMUIMenuSurfaceClosed) == null || Ct.call(e, st);
        },
        onSMUIMenuSurfaceOpened: (st) => {
          var Ct;
          o(M) && o(M).handleMenuOpened(), (Ct = e.onSMUIMenuSurfaceOpened) == null || Ct.call(e, st);
        },
        get open() {
          return o(ie);
        },
        set open(st) {
          q(ie, st, !0);
        },
        children: (st, Ct) => {
          {
            let zn = /* @__PURE__ */ fe(() => ft(H, "list$"));
            wg(st, rt(
              {
                role: "listbox",
                get wrapFocus() {
                  return o(Oe);
                }
              },
              () => o(zn),
              {
                get selectedIndex() {
                  return o(ce);
                },
                set selectedIndex(Wn) {
                  q(ce, Wn, !0);
                },
                children: (Wn, Yi) => {
                  var li = $(), Nr = Z(li);
                  Ae(Nr, () => e.children ?? he), w(Wn, li);
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
  Ce(Qe, (O) => J = O, () => J), Ue(Qe, (O, ae) => Wt == null ? void 0 : Wt(O, ae), () => ({
    ripple: f() === "filled",
    unbounded: !1,
    addClass: de,
    removeClass: se,
    addStyle: G
  })), Ue(Qe, (O, ae) => Hs == null ? void 0 : Hs(O, ae), () => ({ addClass: de, removeClass: se })), Ue(Qe, (O, ae) => z == null ? void 0 : z(O, ae), c);
  var bs = _e(Qe, 2);
  {
    var Zc = (O) => {
      {
        let ae = /* @__PURE__ */ fe(() => ft(H, "helperText$"));
        Pg(O, rt(() => o(ae), {
          children: (st, Ct) => {
            var zn = $(), Wn = Z(zn);
            Ae(Wn, () => e.helperText ?? he), w(st, zn);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    ne(bs, (O) => {
      e.helperText && O(Zc);
    });
  }
  He(() => ht(Zi, n())), w(t, $e);
  var Yc = Le(De);
  return i(), Yc;
}
function Vg(t, e) {
  we(e, !0);
  const n = () => Fn(d, "$selectedValue", r), [r, i] = lr();
  let a = p(e, "use", 19, () => []);
  p(e, "class", 3, "");
  let s = p(e, "value", 3, ""), c = /* @__PURE__ */ Ye(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "value",
    "children"
  ]), l;
  const u = ue("SMUI:select:selectedText"), d = ue("SMUI:select:value");
  te("SMUI:list:item:role", "option");
  const h = /* @__PURE__ */ fe(() => s() != null && s() !== "" && n() === s());
  ot(f), Sn(f);
  function f() {
    o(h) && l && ti(u, l.getPrimaryText());
  }
  function m() {
    return l.getElement();
  }
  var v = { getElement: m };
  Ce(
    Mg(t, rt(
      {
        get use() {
          return a();
        },
        get "data-value"() {
          return s();
        },
        get value() {
          return s();
        },
        get selected() {
          return o(h);
        }
      },
      () => c,
      {
        children: (_, S) => {
          var E = $(), C = Z(E);
          Ae(C, () => e.children ?? he), w(_, E);
        },
        $$slots: { default: !0 }
      }
    )),
    (_) => l = _,
    () => l
  );
  var g = Le(v);
  return i(), g;
}
function Gg(t, e) {
  we(e, !0);
  let n = p(e, "data", 19, () => []);
  p(e, "placeholder", 3, "");
  let r = p(e, "label", 3, "");
  p(e, "description", 3, "");
  let i = p(e, "value", 15), a = p(e, "required", 3, !1);
  p(e, "size", 3, "sm");
  let s = p(e, "variant", 3, "standard"), c = p(e, "selectedOptionIndex", 31, () => -1), l = p(e, "disabled", 3, !1);
  function u(d) {
    return () => c(d);
  }
  Fg(t, {
    get disabled() {
      return l();
    },
    key: (d) => `${d ?? ""}`,
    get label() {
      return r();
    },
    style: "width: 100%;",
    get variant() {
      return s();
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
      var f = $(), m = Z(f);
      er(m, 17, n, bi, (v, g, _) => {
        {
          let S = /* @__PURE__ */ fe(() => u(_));
          Vg(v, {
            get onclick() {
              return o(S);
            },
            get value() {
              return o(g).value;
            },
            children: (E, C) => {
              var b = Kt();
              He(() => ht(b, o(g).label)), w(E, b);
            },
            $$slots: { default: !0 }
          });
        }
      }), w(d, f);
    },
    $$slots: { default: !0 }
  }), Le();
}
const jg = Qt([]);
jg.subscribe;
ge({ freeze: !1 });
const Dt = [];
for (let t = 0; t < 256; ++t)
  Dt.push((t + 256).toString(16).slice(1));
function qg(t, e = 0) {
  return (Dt[t[e + 0]] + Dt[t[e + 1]] + Dt[t[e + 2]] + Dt[t[e + 3]] + "-" + Dt[t[e + 4]] + Dt[t[e + 5]] + "-" + Dt[t[e + 6]] + Dt[t[e + 7]] + "-" + Dt[t[e + 8]] + Dt[t[e + 9]] + "-" + Dt[t[e + 10]] + Dt[t[e + 11]] + Dt[t[e + 12]] + Dt[t[e + 13]] + Dt[t[e + 14]] + Dt[t[e + 15]]).toLowerCase();
}
let Ps;
const zg = new Uint8Array(16);
function Wg() {
  if (!Ps) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    Ps = crypto.getRandomValues.bind(crypto);
  }
  return Ps(zg);
}
const Xg = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Hl = { randomUUID: Xg };
function Kg(t, e, n) {
  var i;
  if (Hl.randomUUID && !e && !t)
    return Hl.randomUUID();
  t = t || {};
  const r = t.random ?? ((i = t.rng) == null ? void 0 : i.call(t)) ?? Wg();
  if (r.length < 16)
    throw new Error("Random bytes length must be >= 16");
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    if (n = n || 0, n < 0 || n + 16 > e.length)
      throw new RangeError(`UUID byte range ${n}:${n + 15} is out of buffer bounds`);
    for (let a = 0; a < 16; ++a)
      e[n + a] = r[a];
    return e;
  }
  return qg(r);
}
var Zg = /* @__PURE__ */ pe('<span class="oscd-icon"><!></span>');
function jn(t, e) {
  var n = Zg(), r = Ie(n);
  Ae(r, () => e.children ?? he), w(t, n);
}
var Yg = /* @__PURE__ */ sn('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');
function Qg(t, e) {
  let n = p(e, "svgStyles", 3, "");
  jn(t, {
    children: (r, i) => {
      var a = Yg();
      He(() => Vt(a, n())), w(r, a);
    }
  });
}
var Jg = /* @__PURE__ */ sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Sc(t, e) {
  let n = p(e, "svgStyles", 3, "");
  jn(t, {
    children: (r, i) => {
      var a = Jg();
      He(() => Vt(a, n())), w(r, a);
    }
  });
}
var $g = /* @__PURE__ */ sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');
function ep(t, e) {
  let n = p(e, "svgStyles", 3, "");
  jn(t, {
    children: (r, i) => {
      var a = $g();
      He(() => Vt(a, n())), w(r, a);
    }
  });
}
var tp = /* @__PURE__ */ sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"></path></svg>');
function np(t, e) {
  let n = p(e, "svgStyles", 3, "");
  jn(t, {
    children: (r, i) => {
      var a = tp();
      He(() => Vt(a, n())), w(r, a);
    }
  });
}
var rp = /* @__PURE__ */ sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"></path></svg>');
function ip(t, e) {
  let n = p(e, "svgStyles", 3, "");
  jn(t, {
    children: (r, i) => {
      var a = rp();
      He(() => Vt(a, n())), w(r, a);
    }
  });
}
var ap = /* @__PURE__ */ sn('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function sp(t, e) {
  let n = p(e, "svgStyles", 3, "");
  jn(t, {
    children: (r, i) => {
      var a = ap();
      He(() => Vt(a, n())), w(r, a);
    }
  });
}
var op = /* @__PURE__ */ sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function lp(t, e) {
  let n = p(e, "svgStyles", 3, "");
  jn(t, {
    children: (r, i) => {
      var a = op();
      He(() => Vt(a, n())), w(r, a);
    }
  });
}
var up = /* @__PURE__ */ sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function cp(t, e) {
  let n = p(e, "svgStyles", 3, "");
  jn(t, {
    children: (r, i) => {
      var a = up();
      He(() => Vt(a, n())), w(r, a);
    }
  });
}
xd();
var dp = /* @__PURE__ */ sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"></path></svg>');
function fp(t, e) {
  let n = p(e, "svgStyles", 3, "");
  jn(t, {
    children: (r, i) => {
      var a = dp();
      He(() => Vt(a, n())), w(r, a);
    }
  });
}
var hp = /* @__PURE__ */ sn('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3" cursor="pointer"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function vp(t, e) {
  let n = p(e, "svgStyles", 8, "");
  jn(t, {
    children: (r, i) => {
      var a = hp();
      He(() => Vt(a, n())), w(r, a);
    }
  });
}
function mp(t, e) {
  e(t.target.value);
}
var gp = /* @__PURE__ */ pe('<div class="custom-text-field svelte-1719vm0"><input type="date" id="datetime-picker" class="custom-text-field__input svelte-1719vm0" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-1719vm0"> </label> <span class="custom-line svelte-1719vm0"></span></div>');
function pp(t, e) {
  we(e, !0);
  let n = p(e, "label", 3, ""), r = p(e, "value", 15, "");
  var i = gp(), a = Ie(i);
  a.__change = [mp, r];
  var s = _e(a, 2), c = Ie(s);
  He(() => ht(c, n())), va(a, r), w(t, i), Le();
}
hn(["change"]);
function bp(t, e) {
  e(t.target.value);
}
var _p = /* @__PURE__ */ pe('<div class="custom-text-field svelte-6wdfbb"><input type="datetime-local" id="datetime-picker" class="custom-text-field__input svelte-6wdfbb" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-6wdfbb"> </label> <span class="custom-line svelte-6wdfbb"></span></div>');
function Ip(t, e) {
  we(e, !0);
  let n = p(e, "label", 3, ""), r = p(e, "value", 15, "");
  var i = _p(), a = Ie(i);
  a.__change = [bp, r];
  var s = _e(a, 2), c = Ie(s);
  He(() => ht(c, n())), va(a, r), w(t, i), Le();
}
hn(["change"]);
function yp(t, e, n, r) {
  e() && ((t.key === "Enter" || t.key === " ") && (t.preventDefault(), n()), t.key === "Escape" && (t.preventDefault(), r()));
}
var Ep = /* @__PURE__ */ pe('<span role="button" tabindex="0" aria-labelledby="tooltip"><!></span>');
function ts(t, e) {
  we(e, !0);
  let n = p(e, "content", 3, ""), r = p(e, "side", 3, "top"), i = p(e, "hoverDelay", 3, 0), a = p(e, "transitionDuration", 3, 80), s = p(e, "disabled", 3, !1);
  const c = `tt-${Math.random().toString(36).slice(2)}`;
  let l = /* @__PURE__ */ ve(null), u = /* @__PURE__ */ ve(null), d = /* @__PURE__ */ ve(null), h = /* @__PURE__ */ ve(null), f = /* @__PURE__ */ ve(!1), m = /* @__PURE__ */ ve(null), v = /* @__PURE__ */ ve(null);
  function g() {
    !n() || s() || (o(m) && clearTimeout(o(m)), i() > 0 ? q(m, setTimeout(() => q(f, !0), i()), !0) : q(f, !0));
  }
  function _() {
    o(m) && clearTimeout(o(m)), q(f, !1);
  }
  function S() {
    g();
  }
  function E() {
    _();
  }
  function C() {
    g();
  }
  function b() {
    _();
  }
  function y() {
    if (!o(u) || !o(h) || !o(l) || s()) return;
    const x = o(l).getBoundingClientRect(), D = o(h).getBoundingClientRect();
    let X = 0, k = 0;
    const B = 8;
    switch (r()) {
      case "top":
        X = x.top - D.height - B, k = x.left + x.width / 2 - D.width / 2;
        break;
      case "bottom":
        X = x.bottom + B, k = x.left + x.width / 2 - D.width / 2;
        break;
      case "left":
        X = x.top + x.height / 2 - D.height / 2, k = x.left - D.width - B;
        break;
      case "right":
        X = x.top + x.height / 2 - D.height / 2, k = x.right + B;
        break;
    }
    o(u).style.top = `${X + window.scrollY}px`, o(u).style.left = `${k + window.scrollX}px`;
  }
  function I() {
    var x;
    (x = o(v)) == null || x.disconnect(), q(v, null), o(u) && o(u).parentNode && o(u).parentNode.removeChild(o(u)), q(u, null), q(h, null), q(d, null), o(m) && clearTimeout(o(m));
  }
  Sn(I), xe(() => {
    if (!(!o(f) || !n() || s())) {
      if (!o(u)) {
        q(u, document.createElement("div"), !0), o(u).style.position = "absolute", o(u).style.zIndex = "9999", o(u).style.pointerEvents = "none", o(u).style.opacity = "0", o(u).style.transition = `opacity ${a()}ms ease`, o(u).id = c, o(u).setAttribute("role", "tooltip"), document.body.appendChild(o(u)), q(d, o(u).attachShadow({ mode: "open" }), !0);
        const x = document.createElement("style");
        x.textContent = `
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
      `, o(d).appendChild(x), q(h, document.createElement("div"), !0), o(d).appendChild(o(h)), q(
          v,
          new MutationObserver(() => {
            o(f) && y();
          }),
          !0
        ), o(v).observe(document.body, { childList: !0, subtree: !0 });
      }
      o(h) && (o(h).className = `bubble ${r()}`, o(h).innerHTML = n()), o(u) && (o(u).style.opacity = "1", y());
    }
  }), xe(() => {
    if (o(f) || !o(u))
      return;
    o(u).style.opacity = "0";
    const x = o(u), D = setTimeout(
      () => {
        x && x.parentNode && x.parentNode.removeChild(x), o(u) === x && I();
      },
      a()
    );
    return () => clearTimeout(D);
  });
  var T = Ep();
  T.__keydown = [yp, n, g, _];
  var A = Ie(T);
  Ae(A, () => e.children ?? he), Ce(T, (x) => q(l, x), () => o(l)), He(() => {
    Ar(T, "aria-describedby", n() && !s() ? c : void 0), Ar(T, "aria-haspopup", n() ? "true" : void 0), Ar(T, "aria-expanded", n() ? o(f) ? "true" : "false" : void 0);
  }), sa("mouseenter", T, S), sa("mouseleave", T, E), sa("focus", T, C), sa("blur", T, b), w(t, T), Le();
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
var ia = {
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
}, gn = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_CHECKED_INDETERMINATE_VALUE: "mixed",
  DATA_INDETERMINATE_ATTR: "data-indeterminate",
  NATIVE_CONTROL_SELECTOR: ".mdc-checkbox__native-control",
  TRANSITION_STATE_CHECKED: "checked",
  TRANSITION_STATE_INDETERMINATE: "indeterminate",
  TRANSITION_STATE_INIT: "init",
  TRANSITION_STATE_UNCHECKED: "unchecked"
}, Pl = {
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
var Ap = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      var r = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return r.currentCheckState = gn.TRANSITION_STATE_INIT, r.currentAnimationClass = "", r.animEndLatchTimer = 0, r.enableAnimationEndHandler = !1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ia;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return gn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Pl;
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
      this.currentCheckState = this.determineCheckState(), this.updateAriaChecked(), this.adapter.addClass(ia.UPGRADED);
    }, e.prototype.destroy = function() {
      clearTimeout(this.animEndLatchTimer);
    }, e.prototype.setDisabled = function(n) {
      this.adapter.setNativeControlDisabled(n), n ? this.adapter.addClass(ia.DISABLED) : this.adapter.removeClass(ia.DISABLED);
    }, e.prototype.handleAnimationEnd = function() {
      var n = this;
      this.enableAnimationEndHandler && (clearTimeout(this.animEndLatchTimer), this.animEndLatchTimer = setTimeout(function() {
        n.adapter.removeClass(n.currentAnimationClass), n.enableAnimationEndHandler = !1;
      }, Pl.ANIM_END_LATCH_MS));
    }, e.prototype.handleChange = function() {
      this.transitionCheckState();
    }, e.prototype.transitionCheckState = function() {
      if (this.adapter.hasNativeControl()) {
        var n = this.currentCheckState, r = this.determineCheckState();
        if (n !== r) {
          this.updateAriaChecked();
          var i = gn.TRANSITION_STATE_UNCHECKED, a = ia.SELECTED;
          r === i ? this.adapter.removeClass(a) : this.adapter.addClass(a), this.currentAnimationClass.length > 0 && (clearTimeout(this.animEndLatchTimer), this.adapter.forceLayout(), this.adapter.removeClass(this.currentAnimationClass)), this.currentAnimationClass = this.getTransitionAnimationClass(n, r), this.currentCheckState = r, this.adapter.isAttachedToDOM() && this.currentAnimationClass.length > 0 && (this.adapter.addClass(this.currentAnimationClass), this.enableAnimationEndHandler = !0);
        }
      }
    }, e.prototype.determineCheckState = function() {
      var n = gn.TRANSITION_STATE_INDETERMINATE, r = gn.TRANSITION_STATE_CHECKED, i = gn.TRANSITION_STATE_UNCHECKED;
      return this.adapter.isIndeterminate() ? n : this.adapter.isChecked() ? r : i;
    }, e.prototype.getTransitionAnimationClass = function(n, r) {
      var i = gn.TRANSITION_STATE_INIT, a = gn.TRANSITION_STATE_CHECKED, s = gn.TRANSITION_STATE_UNCHECKED, c = e.cssClasses, l = c.ANIM_UNCHECKED_CHECKED, u = c.ANIM_UNCHECKED_INDETERMINATE, d = c.ANIM_CHECKED_UNCHECKED, h = c.ANIM_CHECKED_INDETERMINATE, f = c.ANIM_INDETERMINATE_CHECKED, m = c.ANIM_INDETERMINATE_UNCHECKED;
      switch (n) {
        case i:
          return r === s ? "" : r === a ? f : m;
        case s:
          return r === a ? l : u;
        case a:
          return r === s ? d : h;
        default:
          return r === a ? f : m;
      }
    }, e.prototype.updateAriaChecked = function() {
      this.adapter.isIndeterminate() ? this.adapter.setNativeControlAttr(gn.ARIA_CHECKED_ATTR, gn.ARIA_CHECKED_INDETERMINATE_VALUE) : this.adapter.removeNativeControlAttr(gn.ARIA_CHECKED_ATTR);
    }, e;
  }(Gt)
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
var un = {
  CLOSED_CLASS: "mdc-linear-progress--closed",
  CLOSED_ANIMATION_OFF_CLASS: "mdc-linear-progress--closed-animation-off",
  INDETERMINATE_CLASS: "mdc-linear-progress--indeterminate",
  REVERSED_CLASS: "mdc-linear-progress--reversed",
  ANIMATION_READY_CLASS: "mdc-linear-progress--animation-ready"
}, xn = {
  ARIA_HIDDEN: "aria-hidden",
  ARIA_VALUEMAX: "aria-valuemax",
  ARIA_VALUEMIN: "aria-valuemin",
  ARIA_VALUENOW: "aria-valuenow",
  BUFFER_BAR_SELECTOR: ".mdc-linear-progress__buffer-bar",
  FLEX_BASIS: "flex-basis",
  PRIMARY_BAR_SELECTOR: ".mdc-linear-progress__primary-bar"
}, aa = {
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
var Sp = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      var r = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return r.observer = null, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return un;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return xn;
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
      this.determinate = !this.adapter.hasClass(un.INDETERMINATE_CLASS), this.adapter.addClass(un.ANIMATION_READY_CLASS), this.progress = 0, this.buffer = 1, this.observer = this.adapter.attachResizeObserver(function(r) {
        var i, a;
        if (!n.determinate)
          try {
            for (var s = Lt(r), c = s.next(); !c.done; c = s.next()) {
              var l = c.value;
              l.contentRect && n.calculateAndSetDimensions(l.contentRect.width);
            }
          } catch (u) {
            i = { error: u };
          } finally {
            try {
              c && !c.done && (a = s.return) && a.call(s);
            } finally {
              if (i) throw i.error;
            }
          }
      }), !this.determinate && this.observer && this.calculateAndSetDimensions(this.adapter.getWidth());
    }, e.prototype.setDeterminate = function(n) {
      if (this.determinate = n, this.determinate) {
        this.adapter.removeClass(un.INDETERMINATE_CLASS), this.adapter.setAttribute(xn.ARIA_VALUENOW, this.progress.toString()), this.adapter.setAttribute(xn.ARIA_VALUEMAX, "1"), this.adapter.setAttribute(xn.ARIA_VALUEMIN, "0"), this.setPrimaryBarProgress(this.progress), this.setBufferBarProgress(this.buffer);
        return;
      }
      this.observer && this.calculateAndSetDimensions(this.adapter.getWidth()), this.adapter.addClass(un.INDETERMINATE_CLASS), this.adapter.removeAttribute(xn.ARIA_VALUENOW), this.adapter.removeAttribute(xn.ARIA_VALUEMAX), this.adapter.removeAttribute(xn.ARIA_VALUEMIN), this.setPrimaryBarProgress(1), this.setBufferBarProgress(1);
    }, e.prototype.isDeterminate = function() {
      return this.determinate;
    }, e.prototype.setProgress = function(n) {
      this.progress = n, this.determinate && (this.setPrimaryBarProgress(n), this.adapter.setAttribute(xn.ARIA_VALUENOW, n.toString()));
    }, e.prototype.getProgress = function() {
      return this.progress;
    }, e.prototype.setBuffer = function(n) {
      this.buffer = n, this.determinate && this.setBufferBarProgress(n);
    }, e.prototype.getBuffer = function() {
      return this.buffer;
    }, e.prototype.open = function() {
      this.adapter.removeClass(un.CLOSED_CLASS), this.adapter.removeClass(un.CLOSED_ANIMATION_OFF_CLASS), this.adapter.removeAttribute(xn.ARIA_HIDDEN);
    }, e.prototype.close = function() {
      this.adapter.addClass(un.CLOSED_CLASS), this.adapter.setAttribute(xn.ARIA_HIDDEN, "true");
    }, e.prototype.isClosed = function() {
      return this.adapter.hasClass(un.CLOSED_CLASS);
    }, e.prototype.handleTransitionEnd = function() {
      this.adapter.hasClass(un.CLOSED_CLASS) && this.adapter.addClass(un.CLOSED_ANIMATION_OFF_CLASS);
    }, e.prototype.destroy = function() {
      t.prototype.destroy.call(this), this.observer && this.observer.disconnect();
    }, e.prototype.restartAnimation = function() {
      this.adapter.removeClass(un.ANIMATION_READY_CLASS), this.adapter.forceLayout(), this.adapter.addClass(un.ANIMATION_READY_CLASS);
    }, e.prototype.setPrimaryBarProgress = function(n) {
      var r = "scaleX(" + n + ")", i = typeof window < "u" ? Ig(window, "transform") : "transform";
      this.adapter.setPrimaryBarStyle(i, r);
    }, e.prototype.setBufferBarProgress = function(n) {
      var r = n * 100 + "%";
      this.adapter.setBufferBarStyle(xn.FLEX_BASIS, r);
    }, e.prototype.calculateAndSetDimensions = function(n) {
      var r = n * aa.PRIMARY_HALF, i = n * aa.PRIMARY_FULL, a = n * aa.SECONDARY_QUARTER, s = n * aa.SECONDARY_HALF, c = n * aa.SECONDARY_FULL;
      this.adapter.setStyle("--mdc-linear-progress-primary-half", r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-half-neg", -r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full", i + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full-neg", -i + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter", a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg", -a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half", s + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg", -s + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full", c + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg", -c + "px"), this.restartAnimation();
    }, e;
  }(Gt)
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
var Yn = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, Nl = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, Gr = {
  ARIA_SELECTED: Nl.ARIA_SELECTED,
  ARIA_SORT: Nl.ARIA_SORT
}, dn;
(function(t) {
  t.ASCENDING = "ascending", t.DESCENDING = "descending", t.NONE = "none", t.OTHER = "other";
})(dn || (dn = {}));
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
var Cp = (
  /** @class */
  function(t) {
    tt(e, t);
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
      return zu(this, void 0, void 0, function() {
        return wo(this, function(n) {
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
      for (var r = n.columnId, i = n.columnIndex, a = n.headerCell, s = 0; s < this.adapter.getHeaderCellCount(); s++)
        s !== i && (this.adapter.removeClassNameByHeaderCellIndex(s, Yn.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(s, Yn.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(s, Gr.ARIA_SORT, dn.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(s, dn.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, Yn.HEADER_CELL_SORTED);
      var c = this.adapter.getAttributeByHeaderCellIndex(i, Gr.ARIA_SORT), l = dn.NONE;
      c === dn.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, Yn.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, Gr.ARIA_SORT, dn.DESCENDING), l = dn.DESCENDING) : c === dn.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, Yn.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, Gr.ARIA_SORT, dn.ASCENDING), l = dn.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, Gr.ARIA_SORT, dn.ASCENDING), l = dn.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, l), this.adapter.notifySortAction({
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
      }), this.adapter.addClass(Yn.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(Yn.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(n, r) {
      r ? (this.adapter.addClassAtRowIndex(n, Yn.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, Gr.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(n, Yn.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, Gr.ARIA_SELECTED, "false"));
    }, e;
  }(Gt)
), xp = /* @__PURE__ */ pe('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), Tp = /* @__PURE__ */ pe("<div><div><table><!></table></div> <!> <!></div>");
function wp(t, e) {
  we(e, !0);
  const n = () => Fn(B, "$progressClosed", r), [r, i] = lr(), { closest: a } = ps;
  let s = p(e, "use", 19, () => []), c = p(e, "class", 3, ""), l = p(e, "stickyHeader", 3, !1), u = p(e, "sortable", 3, !1), d = p(e, "sort", 15, null), h = p(e, "sortDirection", 15, "ascending"), f = p(e, "sortAscendingAriaLabel", 3, "sorted, ascending"), m = p(e, "sortDescendingAriaLabel", 3, "sorted, descending"), v = p(e, "container$use", 19, () => []), g = p(e, "container$class", 3, ""), _ = p(e, "table$use", 19, () => []), S = p(e, "table$class", 3, ""), E = /* @__PURE__ */ Ye(e, [
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
  ]), C, b = /* @__PURE__ */ ve(void 0), y, I = /* @__PURE__ */ ve(void 0), T = /* @__PURE__ */ ve(void 0), A = ge({}), x = /* @__PURE__ */ ve(ge({ height: "auto", top: "initial" })), D = ue("SMUI:addLayoutListener"), X, k = !1, B = Qt(!1), me = Qt(d());
  xe(() => {
    ti(me, d());
  });
  let V = Qt(h());
  xe(() => {
    ti(V, h());
  }), te("SMUI:checkbox:context", "data-table"), te("SMUI:linear-progress:context", "data-table"), te("SMUI:linear-progress:closed", B), te("SMUI:data-table:sortable", u()), te("SMUI:data-table:sort", me), te("SMUI:data-table:sortDirection", V), te("SMUI:data-table:sortAscendingAriaLabel", f()), te("SMUI:data-table:sortDescendingAriaLabel", m()), D && (X = D(ye));
  let N;
  xe(() => {
    e.progress && o(b) && N !== n() && (N = n(), n() ? o(b).hideProgress() : o(b).showProgress());
  }), te("SMUI:checkbox:mount", () => {
    o(b) && k && o(b).layout();
  }), te("SMUI:data-table:header:mount", (R) => {
    q(I, R, !0);
  }), te("SMUI:data-table:header:unmount", () => {
    q(I, void 0);
  }), te("SMUI:data-table:body:mount", (R) => {
    q(T, R, !0);
  }), te("SMUI:data-table:body:unmount", () => {
    q(T, void 0);
  }), ot(() => (q(
    b,
    new Cp({
      addClass: K,
      removeClass: J,
      getHeaderCellElements: () => {
        var R;
        return ((R = o(I)) == null ? void 0 : R.cells.map((U) => U.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var R;
        return ((R = o(I)) == null ? void 0 : R.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (R, U) => {
        var oe;
        return ((oe = o(I)) == null ? void 0 : oe.orderedCells[R].getAttr(U)) ?? null;
      },
      setAttributeByHeaderCellIndex: (R, U, oe) => {
        var Ge;
        (Ge = o(I)) == null || Ge.orderedCells[R].addAttr(U, oe);
      },
      setClassNameByHeaderCellIndex: (R, U) => {
        var oe;
        (oe = o(I)) == null || oe.orderedCells[R].addClass(U);
      },
      removeClassNameByHeaderCellIndex: (R, U) => {
        var oe;
        (oe = o(I)) == null || oe.orderedCells[R].removeClass(U);
      },
      notifySortAction: (R) => {
        d(R.columnId), h(R.sortValue), Ze(ce(), "SMUIDataTableSorted", R);
      },
      getTableContainerHeight: () => y.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const R = ce().querySelector(".mdc-data-table__header-row");
        if (!R)
          throw new Error("MDCDataTable: Table header element not found.");
        return R.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (R) => {
        q(x, R, !0);
      },
      addClassAtRowIndex: (R, U) => {
        var oe;
        (oe = o(T)) == null || oe.orderedRows[R].addClass(U);
      },
      getRowCount: () => {
        var R;
        return ((R = o(T)) == null ? void 0 : R.rows.length) ?? 0;
      },
      getRowElements: () => {
        var R;
        return ((R = o(T)) == null ? void 0 : R.rows.map((U) => U.element)) ?? [];
      },
      getRowIdAtIndex: (R) => {
        var U;
        return ((U = o(T)) == null ? void 0 : U.orderedRows[R].rowId) ?? null;
      },
      getRowIndexByChildElement: (R) => {
        var U;
        return ((U = o(T)) == null ? void 0 : U.orderedRows.map((oe) => oe.element).indexOf(a(R, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var R;
        return ((R = o(T)) == null ? void 0 : R.rows.filter((U) => U.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (R) => {
        var oe;
        const U = (oe = o(T)) == null ? void 0 : oe.orderedRows[R].checkbox;
        return U ? U.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var U;
        const R = (U = o(I)) == null ? void 0 : U.checkbox;
        return R ? R.checked : !1;
      },
      isRowsSelectable: () => !!ce().querySelector(".mdc-data-table__row-checkbox") || !!ce().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (R) => {
        var oe;
        const U = (oe = o(T)) == null ? void 0 : oe.orderedRows[R.rowIndex];
        U && Ze(ce(), "SMUIDataTableSelectionChanged", {
          row: U.element,
          rowId: U.rowId,
          rowIndex: R.rowIndex,
          selected: R.selected
        });
      },
      notifySelectedAll: () => {
        M(!1), Ze(ce(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        M(!1), Ze(ce(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (R) => Ze(ce(), "SMUIDataTableClickRow", R),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (R, U) => {
        var oe;
        (oe = o(T)) == null || oe.orderedRows[R].removeClass(U);
      },
      setAttributeAtRowIndex: (R, U, oe) => {
        var Ge;
        (Ge = o(T)) == null || Ge.orderedRows[R].addAttr(U, oe);
      },
      setHeaderRowCheckboxChecked: (R) => {
        var oe;
        const U = (oe = o(I)) == null ? void 0 : oe.checkbox;
        U && (U.checked = R);
      },
      setHeaderRowCheckboxIndeterminate: M,
      setRowCheckboxCheckedAtIndex: (R, U) => {
        var Ge;
        const oe = (Ge = o(T)) == null ? void 0 : Ge.orderedRows[R].checkbox;
        oe && (oe.checked = U);
      },
      setSortStatusLabelByHeaderCellIndex: (R, U) => {
      }
    }),
    !0
  ), o(b).init(), o(b).layout(), k = !0, () => {
    var R;
    (R = o(b)) == null || R.destroy();
  })), Sn(() => {
    X && X();
  });
  function H(R) {
    o(b) && o(b).handleRowCheckboxChange(R);
  }
  function K(R) {
    A[R] || (A[R] = !0);
  }
  function J(R) {
    (!(R in A) || A[R]) && (A[R] = !1);
  }
  function M(R) {
    var oe;
    const U = (oe = o(I)) == null ? void 0 : oe.checkbox;
    U && (U.indeterminate = R);
  }
  function L(R) {
    if (!o(b) || !R.detail.target)
      return;
    const U = a(R.detail.target, ".mdc-data-table__header-cell--with-sort");
    U && Ee(U);
  }
  function P(R) {
    if (!o(b) || !R.detail.target)
      return;
    const U = a(R.detail.target, ".mdc-data-table__row");
    U && o(b) && o(b).handleRowClick({ rowId: R.detail.rowId, row: U });
  }
  function Ee(R) {
    var Ot, Rt;
    const U = ((Ot = o(I)) == null ? void 0 : Ot.orderedCells) ?? [], oe = U.map((Cn) => Cn.element).indexOf(R);
    if (oe === -1)
      return;
    const Ge = U[oe].columnId ?? null;
    (Rt = o(b)) == null || Rt.handleSortAction({ columnId: Ge, columnIndex: oe, headerCell: R });
  }
  function ye() {
    var R;
    return (R = o(b)) == null ? void 0 : R.layout();
  }
  function ce() {
    return C;
  }
  var Se = { layout: ye, getElement: ce }, F = Tp(), re = (R) => {
    var U;
    o(b) && o(b).handleHeaderRowCheckboxChange(), (U = e.onSMUIDataTableHeaderCheckboxChange) == null || U.call(e, R);
  }, W = (R) => {
    var U;
    L(R), (U = e.onSMUIDataTableHeaderClick) == null || U.call(e, R);
  }, ie = (R) => {
    var U;
    P(R), (U = e.onSMUIDataTableRowClick) == null || U.call(e, R);
  }, Te = (R) => {
    var U;
    H(R), (U = e.onSMUIDataTableBodyCheckboxChange) == null || U.call(e, R);
  };
  ze(
    F,
    (R, U) => ({
      class: R,
      ...U,
      onSMUIDataTableHeaderCheckboxChange: re,
      onSMUIDataTableHeaderClick: W,
      onSMUIDataTableRowClick: ie,
      onSMUIDataTableBodyCheckboxChange: Te
    }),
    [
      () => Ve({
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": l(),
        ...A,
        [c()]: !0
      }),
      () => Fi(E, ["container$", "table$"])
    ]
  );
  var j = Ie(F);
  ze(j, (R, U) => ({ class: R, ...U }), [
    () => Ve({
      "mdc-data-table__table-container": !0,
      [g()]: !0
    }),
    () => ft(E, "container$")
  ]);
  var ee = Ie(j);
  ze(ee, (R, U) => ({ class: R, ...U }), [
    () => Ve({ "mdc-data-table__table": !0, [S()]: !0 }),
    () => ft(E, "table$")
  ]);
  var Oe = Ie(ee);
  Ae(Oe, () => e.children ?? he), Ue(ee, (R, U) => z == null ? void 0 : z(R, U), _), Ce(j, (R) => y = R, () => y), Ue(j, (R, U) => z == null ? void 0 : z(R, U), v);
  var be = _e(j, 2);
  {
    var Be = (R) => {
      var U = xp(), oe = _e(Ie(U), 2);
      Ae(oe, () => e.progress ?? he), He((Ge) => Vt(U, Ge), [
        () => Object.entries(o(x)).map(([Ge, Ot]) => `${Ge}: ${Ot};`).join(" ")
      ]), w(R, U);
    };
    ne(be, (R) => {
      e.progress && R(Be);
    });
  }
  var Je = _e(be, 2);
  Ae(Je, () => e.paginate ?? he), Ce(F, (R) => C = R, () => C), Ue(F, (R, U) => z == null ? void 0 : z(R, U), s), w(t, F);
  var vt = Le(Se);
  return i(), vt;
}
var Lp = /* @__PURE__ */ pe("<thead><!></thead>");
function Op(t, e) {
  we(e, !0);
  let n = p(e, "use", 19, () => []), r = /* @__PURE__ */ Ye(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i, a = /* @__PURE__ */ ve(void 0), s = [];
  const c = /* @__PURE__ */ new WeakMap();
  te("SMUI:data-table:row:header", !0);
  const l = ue("SMUI:checkbox:mount");
  te("SMUI:checkbox:mount", (S) => {
    q(a, S, !0), l && l(S);
  });
  const u = ue("SMUI:checkbox:unmount");
  te("SMUI:checkbox:unmount", (S) => {
    q(a, void 0), u && u(S);
  }), te("SMUI:data-table:cell:mount", (S) => {
    s.push(S), c.set(S.element, S);
  }), te("SMUI:data-table:cell:unmount", (S) => {
    const E = s.findIndex((C) => C === S);
    E !== -1 && s.splice(E, 1), c.delete(S.element);
  });
  const d = ue("SMUI:data-table:header:mount"), h = ue("SMUI:data-table:header:unmount");
  ot(() => {
    const S = {
      get cells() {
        return s;
      },
      get orderedCells() {
        return f();
      },
      get checkbox() {
        return o(a);
      }
    };
    return d && d(S), () => {
      h && h(S);
    };
  });
  function f() {
    return [
      ...m().querySelectorAll(".mdc-data-table__header-cell")
    ].map((S) => c.get(S)).filter((S) => S && S._smui_data_table_header_cell_accessor);
  }
  function m() {
    return i;
  }
  var v = { getElement: m }, g = Lp();
  ze(g, () => ({ ...r }));
  var _ = Ie(g);
  return Ae(_, () => e.children ?? he), Ce(g, (S) => i = S, () => i), Ue(g, (S, E) => z == null ? void 0 : z(S, E), n), w(t, g), Le(v);
}
var Rp = /* @__PURE__ */ pe("<tbody><!></tbody>");
function Mp(t, e) {
  we(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = /* @__PURE__ */ Ye(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "children"
  ]), a, s = [];
  const c = /* @__PURE__ */ new WeakMap();
  te("SMUI:data-table:row:header", !1), te("SMUI:data-table:row:mount", (g) => {
    s.push(g), c.set(g.element, g);
  }), te("SMUI:data-table:row:unmount", (g) => {
    const _ = s.findIndex((S) => S === g);
    _ !== -1 && s.splice(_, 1), c.delete(g.element);
  });
  const l = ue("SMUI:data-table:body:mount"), u = ue("SMUI:data-table:body:unmount");
  ot(() => {
    const g = {
      get rows() {
        return s;
      },
      get orderedRows() {
        return d();
      }
    };
    return l && l(g), () => {
      u && u(g);
    };
  });
  function d() {
    return [...h().querySelectorAll(".mdc-data-table__row")].map((g) => c.get(g)).filter((g) => g && g._smui_data_table_row_accessor);
  }
  function h() {
    return a;
  }
  var f = { getElement: h }, m = Rp();
  ze(m, (g) => ({ class: g, ...i }), [
    () => Ve({ "mdc-data-table__content": !0, [r()]: !0 })
  ]);
  var v = Ie(m);
  return Ae(v, () => e.children ?? he), Ce(m, (g) => a = g, () => a), Ue(m, (g, _) => z == null ? void 0 : z(g, _), n), w(t, m), Le(f);
}
let Dp = 0;
var Hp = /* @__PURE__ */ pe("<tr><!></tr>");
function Ns(t, e) {
  we(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "rowId", 19, () => "SMUI-data-table-row-" + Dp++), a = /* @__PURE__ */ Ye(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "rowId",
    "children"
  ]), s, c = /* @__PURE__ */ ve(void 0), l = ge({}), u = ge({}), d = ue("SMUI:data-table:row:header");
  const h = ue("SMUI:checkbox:mount");
  te("SMUI:checkbox:mount", (D) => {
    q(c, D, !0), h && h(D);
  });
  const f = ue("SMUI:checkbox:unmount");
  te("SMUI:checkbox:unmount", (D) => {
    q(c, void 0), f && f(D);
  });
  const m = ue("SMUI:data-table:row:mount"), v = ue("SMUI:data-table:row:unmount");
  ot(() => {
    const D = d ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return y();
      },
      get checkbox() {
        return o(c);
      },
      get rowId() {
      },
      get selected() {
        return (o(c) && o(c).checked) ?? !1;
      },
      addClass: g,
      removeClass: _,
      getAttr: S,
      addAttr: E
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return y();
      },
      get checkbox() {
        return o(c);
      },
      get rowId() {
        return i();
      },
      get selected() {
        return (o(c) && o(c).checked) ?? !1;
      },
      addClass: g,
      removeClass: _,
      getAttr: S,
      addAttr: E
    };
    return m && m(D), () => {
      v && v(D);
    };
  });
  function g(D) {
    l[D] || (l[D] = !0);
  }
  function _(D) {
    (!(D in l) || l[D]) && (l[D] = !1);
  }
  function S(D) {
    return D in u ? u[D] ?? null : y().getAttribute(D);
  }
  function E(D, X) {
    u[D] !== X && (u[D] = X);
  }
  function C(D) {
    Ze(y(), "SMUIDataTableHeaderClick", D);
  }
  function b(D) {
    Ze(y(), "SMUIDataTableRowClick", { rowId: i(), target: D.target });
  }
  function y() {
    return s;
  }
  var I = { getElement: y }, T = Hp(), A = (D) => {
    var X;
    d ? C(D) : b(D), (X = e.onclick) == null || X.call(e, D);
  };
  ze(
    T,
    (D) => ({
      class: D,
      "aria-selected": o(c) ? o(c).checked ? "true" : "false" : void 0,
      ...u,
      ...a,
      onclick: A
    }),
    [
      () => Ve({
        "mdc-data-table__header-row": d,
        "mdc-data-table__row": !d,
        "mdc-data-table__row--selected": !d && o(c) && o(c).checked,
        ...l,
        [r()]: !0
      })
    ]
  );
  var x = Ie(T);
  return Ae(x, () => e.children ?? he), Ce(T, (D) => s = D, () => s), Ue(T, (D, X) => z == null ? void 0 : z(D, X), n), w(t, T), Le(I);
}
let Pp = 0;
var Np = /* @__PURE__ */ pe('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), Up = /* @__PURE__ */ pe("<th><!></th>"), kp = /* @__PURE__ */ pe("<td><!></td>");
function Na(t, e) {
  we(e, !0);
  const n = () => Fn(S, "$sort", i), r = () => Fn(E, "$sortDirection", i), [i, a] = lr();
  let s = ue("SMUI:data-table:row:header"), c = p(e, "use", 19, () => []), l = p(e, "class", 3, ""), u = p(e, "numeric", 3, !1), d = p(e, "checkbox", 3, !1), h = p(e, "columnId", 19, () => s ? "SMUI-data-table-column-" + Pp++ : "SMUI-data-table-unused"), f = p(e, "sortable", 19, () => ue("SMUI:data-table:sortable")), m = /* @__PURE__ */ Ye(e, [
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
  ]), v, g = ge({}), _ = ge({}), S = ue("SMUI:data-table:sort"), E = ue("SMUI:data-table:sortDirection"), C = ue("SMUI:data-table:sortAscendingAriaLabel"), b = ue("SMUI:data-table:sortDescendingAriaLabel");
  f() && (te("SMUI:label:context", "data-table:sortable-header-cell"), te("SMUI:icon-button:context", "data-table:sortable-header-cell"), te("SMUI:icon-button:aria-describedby", h() + "-status-label"));
  const y = ue("SMUI:data-table:cell:mount"), I = ue("SMUI:data-table:cell:unmount");
  ot(() => {
    const M = s ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return B();
      },
      get columnId() {
        return h();
      },
      addClass: T,
      removeClass: A,
      getAttr: x,
      addAttr: D
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return B();
      },
      get columnId() {
      },
      addClass: T,
      removeClass: A,
      getAttr: x,
      addAttr: D
    };
    return y && y(M), () => {
      I && I(M);
    };
  });
  function T(M) {
    g[M] || (g[M] = !0);
  }
  function A(M) {
    (!(M in g) || g[M]) && (g[M] = !1);
  }
  function x(M) {
    return M in _ ? _[M] ?? null : B().getAttribute(M);
  }
  function D(M, L) {
    _[M] !== L && (_[M] = L);
  }
  function X(M) {
    Ze(B(), "SMUIDataTableHeaderCheckboxChange", M);
  }
  function k(M) {
    Ze(B(), "SMUIDataTableBodyCheckboxChange", M);
  }
  function B() {
    return v;
  }
  var me = { getElement: B }, V = $(), N = Z(V);
  {
    var H = (M) => {
      var L = Up(), P = (Se) => {
        var F;
        d() && X(Se), (F = e.onchange) == null || F.call(e, Se);
      };
      ze(
        L,
        (Se) => ({
          class: Se,
          role: "columnheader",
          scope: "col",
          "data-column-id": h(),
          "aria-sort": f() ? n() === h() ? r() : "none" : void 0,
          ..._,
          ...m,
          onchange: P
        }),
        [
          () => Ve({
            "mdc-data-table__header-cell": !0,
            "mdc-data-table__header-cell--numeric": u(),
            "mdc-data-table__header-cell--checkbox": d(),
            "mdc-data-table__header-cell--with-sort": f(),
            "mdc-data-table__header-cell--sorted": f() && n() === h(),
            ...g,
            [l()]: !0
          })
        ]
      );
      var Ee = Ie(L);
      {
        var ye = (Se) => {
          var F = Np(), re = Ie(F);
          Ae(re, () => e.children ?? he);
          var W = _e(re, 2), ie = Ie(W);
          He(() => {
            Ar(W, "id", `${h() ?? ""}-status-label`), ht(ie, n() === h() ? r() === "ascending" ? C : b : "");
          }), w(Se, F);
        }, ce = (Se) => {
          var F = $(), re = Z(F);
          Ae(re, () => e.children ?? he), w(Se, F);
        };
        ne(Ee, (Se) => {
          f() ? Se(ye) : Se(ce, !1);
        });
      }
      Ce(L, (Se) => v = Se, () => v), Ue(L, (Se, F) => z == null ? void 0 : z(Se, F), c), w(M, L);
    }, K = (M) => {
      var L = kp(), P = (ye) => {
        var ce;
        d() && k(ye), (ce = e.onchange) == null || ce.call(e, ye);
      };
      ze(
        L,
        (ye) => ({
          class: ye,
          ..._,
          ...m,
          onchange: P
        }),
        [
          () => Ve({
            "mdc-data-table__cell": !0,
            "mdc-data-table__cell--numeric": u(),
            "mdc-data-table__cell--checkbox": d(),
            ...g,
            [l()]: !0
          })
        ]
      );
      var Ee = Ie(L);
      Ae(Ee, () => e.children ?? he), Ce(L, (ye) => v = ye, () => v), Ue(L, (ye, ce) => z == null ? void 0 : z(ye, ce), c), w(M, L);
    };
    ne(N, (M) => {
      s ? M(H) : M(K, !1);
    });
  }
  w(t, V);
  var J = Le(me);
  return a(), J;
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
var Bp = {
  ROOT: "mdc-form-field"
}, Fp = {
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
var Vp = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      var r = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return r.click = function() {
        r.handleClick();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Bp;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Fp;
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
  }(Gt)
);
let Gp = 0;
var jp = /* @__PURE__ */ pe("<div><!> <label><!></label></div>");
function qp(t, e) {
  we(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "align", 3, "start"), a = p(e, "noWrap", 3, !1), s = p(e, "inputId", 19, () => "SMUI-form-field-" + Gp++), c = p(e, "label$use", 19, () => []), l = /* @__PURE__ */ Ye(e, [
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
  ]), u, d = /* @__PURE__ */ ve(void 0), h = new Wi(), f, m = /* @__PURE__ */ ve(void 0);
  te("SMUI:generic:input:props", { id: s() }), te("SMUI:generic:input:mount", (b) => {
    q(m, b, !0);
  }), te("SMUI:generic:input:unmount", () => {
    q(m, void 0);
  }), ot(() => (q(
    d,
    new Vp({
      activateInputRipple: () => {
        o(m) && o(m).activateRipple();
      },
      deactivateInputRipple: () => {
        o(m) && o(m).deactivateRipple();
      },
      deregisterInteractionHandler: (b, y) => h.off(f, b, y),
      registerInteractionHandler: (b, y) => h.on(f, b, y)
    }),
    !0
  ), o(d).init(), () => {
    var b;
    (b = o(d)) == null || b.destroy(), h.clear();
  }));
  function v() {
    return u;
  }
  var g = { getElement: v }, _ = jp();
  ze(_, (b, y) => ({ class: b, ...y }), [
    () => Ve({
      "mdc-form-field": !0,
      "mdc-form-field--align-end": i() === "end",
      "mdc-form-field--nowrap": a(),
      [r()]: !0
    }),
    () => Fi(l, ["label$"])
  ]);
  var S = Ie(_);
  Ae(S, () => e.children ?? he);
  var E = _e(S, 2);
  ze(E, (b) => ({ for: s(), ...b }), [() => ft(l, "label$")]);
  var C = Ie(E);
  return Ae(C, () => e.label ?? he), Ce(E, (b) => f = b, () => f), Ue(E, (b, y) => z == null ? void 0 : z(b, y), c), Ce(_, (b) => u = b, () => u), Ue(_, (b, y) => z == null ? void 0 : z(b, y), n), w(t, _), Le(g);
}
hn(["click"]);
function oo(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
var zp = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
oo({}, zp.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
var Ua, Ul = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
};
Ua = {}, oo(Ua, Ul.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), oo(Ua, Ul.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list");
function Wp(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function kl(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
function Bl(t, { delay: e = 0, duration: n = 400, easing: r = Wp, x: i = 0, y: a = 0, opacity: s = 0 } = {}) {
  const c = getComputedStyle(t), l = +c.opacity, u = c.transform === "none" ? "" : c.transform, d = l * (1 - s), [h, f] = kl(i), [m, v] = kl(a);
  return {
    delay: e,
    duration: n,
    easing: r,
    css: (g, _) => `
			transform: ${u} translate(${(1 - g) * h}${f}, ${(1 - g) * m}${v});
			opacity: ${l - d * _}`
  };
}
hn([
  "click",
  "keydown",
  "pointerdown",
  "pointerup",
  "pointermove"
]);
hn(["click"]);
const Xp = 4e3;
function Kp() {
  let t = ge({ items: [] }), e = 0;
  const n = (i) => {
    t.items = t.items.filter((a) => a.id !== i);
  }, r = (i, a, s, c = Xp) => {
    const l = e++, u = { id: l, summary: a, detail: s, type: i };
    return t.items = [...t.items, u], setTimeout(
      () => {
        n(l);
      },
      c
    ), l;
  };
  return {
    /** readonly state for UI host */
    get toasts() {
      return t;
    },
    success: (i, a, s) => r("success", i, a, s),
    error: (i, a, s) => r("error", i, a, s),
    info: (i, a, s) => r("info", i, a, s),
    warn: (i, a, s) => r("warn", i, a, s),
    remove: n
  };
}
Kp();
var Zp = (t, e) => {
  t.stopPropagation(), e.onOpen();
}, Yp = (t, e) => {
  t.stopPropagation(), e.onRemove();
}, Qp = /* @__PURE__ */ pe('<button type="button" style="all: unset; display: flex; align-items: center; justify-content: center;" class="svelte-1mybgc7"><!></button>'), Jp = /* @__PURE__ */ pe('<span class="filter-badge__seperator svelte-1mybgc7">|</span> <span class="filter-badge__value svelte-1mybgc7"> </span> <span class="filter-badge__arrow-down"><!></span>', 1), $p = /* @__PURE__ */ pe('<button type="button"><div class="filter-badge__icon svelte-1mybgc7"><!></div> <span class="filter-badge__label svelte-1mybgc7"> </span> <!></button>');
function eb(t, e) {
  we(e, !0);
  let n = /* @__PURE__ */ fe(() => !!e.value);
  var r = $p();
  r.__click = [Zp, e];
  var i = Ie(r), a = Ie(i);
  {
    var s = (f) => {
      ts(f, {
        content: "Remove Filter",
        hoverDelay: 500,
        side: "top",
        children: (m, v) => {
          var g = Qp();
          g.__click = [Yp, e];
          var _ = Ie(g);
          Sc(_, {
            svgStyles: "fill: grey; height: filt-content; width: fit-content;"
          }), w(m, g);
        },
        $$slots: { default: !0 }
      });
    }, c = (f) => {
      ts(f, {
        content: "Add Filter",
        hoverDelay: 501,
        side: "top",
        children: (m, v) => {
          vp(m, {
            svgStyles: "fill: grey; height: filt-content; width: fit-content;"
          });
        },
        $$slots: { default: !0 }
      });
    };
    ne(a, (f) => {
      o(n) ? f(s) : f(c, !1);
    });
  }
  var l = _e(i, 2), u = Ie(l), d = _e(l, 2);
  {
    var h = (f) => {
      var m = Jp(), v = _e(Z(m), 2), g = Ie(v), _ = _e(v, 2), S = Ie(_);
      fp(S, { svgStyles: "fill: gray;" }), He(() => ht(g, e.value)), w(f, m);
    };
    ne(d, (f) => {
      o(n) && f(h);
    });
  }
  He(() => {
    Co(r, 1, `filter-badge ${o(n) ? "filter-badge--active" : "filter-badge--inactive"}`, "svelte-1mybgc7"), ht(u, e.label);
  }), w(t, r), Le();
}
hn(["click"]);
var tb = /* @__PURE__ */ pe('<div><input/> <div class="mdc-checkbox__background"><svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24"><path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg> <div class="mdc-checkbox__mixedmark"></div></div> <div class="mdc-checkbox__ripple"></div></div>');
function nb(t, e) {
  we(e, !0);
  let n = () => {
  };
  function r(j) {
    return j === n;
  }
  let i = p(e, "use", 19, () => []), a = p(e, "class", 3, ""), s = p(e, "style", 3, ""), c = p(e, "disabled", 15, !1), l = p(e, "touch", 3, !1), u = p(e, "indeterminate", 15, n), d = p(e, "group", 11, n), h = p(e, "checked", 15, n), f = p(e, "value", 3, null), m = p(e, "valueKey", 3, n), v = p(e, "input$use", 19, () => []), g = p(e, "input$class", 3, ""), _ = /* @__PURE__ */ Ye(e, [
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
  ]), S, E = /* @__PURE__ */ ve(void 0), C = /* @__PURE__ */ ve(void 0), b = ge({}), y = ge({}), I = ge({}), T = /* @__PURE__ */ ve(!1), A = ge(ue("SMUI:generic:input:props") ?? {}), x = /* @__PURE__ */ ve(ge(r(d()) ? r(h()) ? !1 : !!h() : d().findIndex((j) => j === f()) !== -1)), D = ue("SMUI:checkbox:context"), X = ue("SMUI:data-table:row:header"), k = h(), B = r(d()) ? [] : [...d()], me = o(x);
  xe(() => {
    let j = !1;
    if (!r(d()))
      if (me !== o(x)) {
        const ee = d().findIndex((Oe) => Oe === f());
        o(x) && ee === -1 ? d().push(f()) : !o(x) && ee !== -1 && d().splice(ee, 1), j = !0;
      } else {
        const ee = B.findIndex((be) => be === f()), Oe = d().findIndex((be) => be === f());
        ee > -1 && Oe === -1 ? (q(x, !1), j = !0) : Oe > -1 && ee === -1 && (q(x, !0), j = !0);
      }
    r(h()) ? me !== o(x) && (j = !0) : (h() !== (u() ? null : o(x)) || o(x) !== me) && (h() === k && o(x) !== me ? (h(o(x)), r(u()) || u(!1)) : q(x, !!h()), j = !0), o(C) && (r(u()) ? o(C).indeterminate && (o(C).indeterminate = !1, j = !0) : !u() && o(C).indeterminate ? (o(C).indeterminate = !1, j = !0) : u() && !o(C).indeterminate && (o(C).indeterminate = !0, q(x, !1), j = !0)), k = h(), B = r(d()) ? [] : [...d()], me = o(x), j && o(E) && o(E).handleChange();
  });
  const V = ue("SMUI:generic:input:mount"), N = ue("SMUI:generic:input:unmount"), H = ue("SMUI:checkbox:mount"), K = ue("SMUI:checkbox:unmount");
  ot(() => {
    if (o(C) == null)
      throw new Error("Checkbox is not defined.");
    o(C).indeterminate = !r(u()) && u(), q(
      E,
      new Ap({
        addClass: J,
        forceLayout: () => ce().offsetWidth,
        hasNativeControl: () => !0,
        isAttachedToDOM: () => !!ce().parentNode,
        isChecked: () => o(x),
        isIndeterminate: () => r(u()) ? !1 : u(),
        removeClass: M,
        removeNativeControlAttr: Ee,
        setNativeControlAttr: P,
        setNativeControlDisabled: (ee) => c(ee)
      }),
      !0
    );
    const j = {
      _smui_checkbox_accessor: !0,
      get element() {
        return ce();
      },
      get checked() {
        return o(x);
      },
      set checked(ee) {
        o(x) !== ee && q(x, ee, !0);
      },
      get indeterminate() {
        return r(u()) ? !1 : u();
      },
      set indeterminate(ee) {
        u(ee);
      },
      activateRipple() {
        c() || q(T, !0);
      },
      deactivateRipple() {
        q(T, !1);
      }
    };
    return V && V(j), H && H(j), o(E).init(), () => {
      var ee;
      N && N(j), K && K(j), (ee = o(E)) == null || ee.destroy();
    };
  });
  function J(j) {
    b[j] || (b[j] = !0);
  }
  function M(j) {
    (!(j in b) || b[j]) && (b[j] = !1);
  }
  function L(j, ee) {
    y[j] != ee && (ee === "" || ee == null ? delete y[j] : y[j] = ee);
  }
  function P(j, ee) {
    I[j] !== ee && (I[j] = ee);
  }
  function Ee(j) {
    (!(j in I) || I[j] != null) && (I[j] = void 0);
  }
  function ye() {
    return A && A.id;
  }
  function ce() {
    return S;
  }
  var Se = { getId: ye, getElement: ce }, F = tb(), re = (j) => {
    var ee;
    o(E) && o(E).handleAnimationEnd(), (ee = e.onanimationend) == null || ee.call(e, j);
  };
  ze(F, (j, ee, Oe) => ({ class: j, style: ee, ...Oe, onanimationend: re }), [
    () => Ve({
      "mdc-checkbox": !0,
      "mdc-checkbox--disabled": c(),
      "mdc-checkbox--touch": l(),
      "mdc-data-table__header-row-checkbox": D === "data-table" && X,
      "mdc-data-table__row-checkbox": D === "data-table" && !X,
      ...b,
      [a()]: !0
    }),
    () => Object.entries(y).map(([j, ee]) => `${j}: ${ee};`).concat([s()]).join(" "),
    () => Fi(_, ["input$"])
  ]);
  var W = Ie(F), ie = (j) => {
    var ee;
    Ze(ce(), "blur", j), (ee = e.input$onblur) == null || ee.call(e, j);
  }, Te = (j) => {
    var ee;
    Ze(ce(), "focus", j), (ee = e.input$onfocus) == null || ee.call(e, j);
  };
  return ze(
    W,
    (j, ee, Oe, be) => ({
      class: j,
      type: "checkbox",
      ...A,
      disabled: c(),
      value: ee,
      "data-indeterminate": Oe,
      ...I,
      ...be,
      onblur: ie,
      onfocus: Te
    }),
    [
      () => Ve({ "mdc-checkbox__native-control": !0, [g()]: !0 }),
      () => r(m()) ? f() : m(),
      () => !r(u()) && u() ? "true" : void 0,
      () => ft(_, "input$")
    ],
    void 0,
    void 0,
    !0
  ), Ce(W, (j) => q(C, j), () => o(C)), Ue(W, (j, ee) => z == null ? void 0 : z(j, ee), v), Lr(() => Rf(W, () => o(x), (j) => q(x, j))), Ce(F, (j) => S = j, () => S), Ue(F, (j, ee) => z == null ? void 0 : z(j, ee), i), Ue(F, (j, ee) => Wt == null ? void 0 : Wt(j, ee), () => ({
    unbounded: !0,
    addClass: J,
    removeClass: M,
    addStyle: L,
    active: o(T),
    eventTarget: o(C)
  })), w(t, F), Le(Se);
}
var rb = /* @__PURE__ */ pe('<div style="display: flex; flex-direction: column;"></div>');
function ib(t, e) {
  we(e, !0);
  let n = p(e, "data", 19, () => []), r = p(e, "values", 31, () => ge([]));
  var i = rb();
  er(i, 21, n, bi, (a, s) => {
    qp(a, {
      label: (l) => {
        var u = Kt();
        He(() => ht(u, o(s).label)), w(l, u);
      },
      children: (l, u) => {
        nb(l, {
          get value() {
            return o(s).value;
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
  }), w(t, i), Le();
}
var ab = (t) => t.stopPropagation(), sb = /* @__PURE__ */ pe('<div class="custom-menu svelte-58jwwf"><div class="menu-arrow svelte-58jwwf"></div> <h4 class="svelte-58jwwf"> </h4> <div class="custom-menu__content"><!></div> <!></div>'), ob = /* @__PURE__ */ pe('<div class="filter-wrapper svelte-58jwwf"><!> <!></div>'), lb = /* @__PURE__ */ pe('<div class="oscd-filters svelte-58jwwf"></div>');
function ub(t, e) {
  we(e, !0);
  let n = p(e, "filters", 15), r = /* @__PURE__ */ ve(null), i = [], a = [];
  function s(v) {
    var g;
    if (!(v.value === void 0 || v.value === null || v.value === ""))
      switch (v.type) {
        case "text":
          return String(v.value);
        case "number":
          return String(v.value);
        case "select":
          const _ = (g = v.options) == null ? void 0 : g.find((C) => C.value === v.value);
          return _ ? _.label : String(v.value);
        case "multiselect":
          if (!Array.isArray(v.value) || v.value.length === 0) return;
          const S = v.value.map((C) => {
            var y;
            const b = (y = v.options) == null ? void 0 : y.find((I) => I.value === C);
            return b ? b.label : String(C);
          }), E = 1;
          return S.length <= E ? S.join(", ") : `${S.slice(0, E).join(", ")} +${S.length - E} more`;
        case "date":
          try {
            const C = new Date(v.value);
            return isNaN(C.getTime()) ? String(v.value) : C.toLocaleDateString();
          } catch {
            return String(v.value);
          }
        case "datetime":
          try {
            const C = new Date(v.value);
            return isNaN(C.getTime()) ? String(v.value) : new Intl.DateTimeFormat("default", {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: !1
            }).format(C);
          } catch {
            return String(v.value);
          }
        default:
          return String(v.value);
      }
  }
  function c(v) {
    switch (v.type) {
      case "text":
      case "date":
      case "datetime":
        return v.value ?? "";
      case "number":
        return v.value ?? 0;
      case "select":
        return v.value ?? null;
      case "multiselect":
        return Array.isArray(v.value) ? [...v.value] : [];
      default:
        return v.value ?? "";
    }
  }
  function l(v) {
    o(r) === v ? q(r, null) : (q(r, v, !0), a[v] = c(n()[v]));
  }
  function u() {
    q(r, null), a[o(r)] = void 0;
  }
  function d(v) {
    var g;
    n(n().map((_, S) => S === v ? { ..._, value: a[v] } : _)), (g = e.onfiltersChanged) == null || g.call(e, [...n()]), q(r, null);
  }
  function h(v) {
    var g;
    n(n().map((_, S) => S === v ? { ..._, value: void 0 } : _)), a[v] = void 0, (g = e.onfiltersChanged) == null || g.call(e, [...n()]), u();
  }
  function f(v) {
    i.some((_) => _ && _.contains(v.target)) || u();
  }
  ot(() => {
    document.addEventListener("click", f);
  }), Sn(() => {
    document.removeEventListener("click", f);
  }), xe(() => {
  });
  var m = lb();
  er(m, 23, n, (v) => v.key, (v, g, _) => {
    var S = ob(), E = Ie(S);
    {
      let y = /* @__PURE__ */ fe(() => s(o(g)));
      eb(E, {
        get label() {
          return o(g).label;
        },
        get value() {
          return o(y);
        },
        onOpen: () => l(o(_)),
        onRemove: () => h(o(_))
      });
    }
    var C = _e(E, 2);
    {
      var b = (y) => {
        var I = sb();
        I.__click = [ab];
        var T = _e(Ie(I), 2), A = Ie(T), x = _e(T, 2), D = Ie(x);
        {
          var X = (me) => {
            ao(me, {
              get label() {
                return o(g).label;
              },
              get placeholder() {
                return o(g).placeholder;
              },
              get type() {
                return o(g).type;
              },
              style: "width: 100%;",
              get value() {
                return a[o(_)];
              },
              set value(V) {
                a[o(_)] = V;
              }
            });
          }, k = (me) => {
            var V = $(), N = Z(V);
            {
              var H = (J) => {
                {
                  let M = /* @__PURE__ */ fe(() => {
                    var L;
                    return (L = o(g)) == null ? void 0 : L.options;
                  });
                  Gg(J, {
                    get label() {
                      return o(g).label;
                    },
                    get data() {
                      return o(M);
                    },
                    get value() {
                      return a[o(_)];
                    },
                    set value(L) {
                      a[o(_)] = L;
                    }
                  });
                }
              }, K = (J) => {
                var M = $(), L = Z(M);
                {
                  var P = (ye) => {
                    {
                      let ce = /* @__PURE__ */ fe(() => {
                        var Se;
                        return (Se = o(g)) == null ? void 0 : Se.options;
                      });
                      ib(ye, {
                        get data() {
                          return o(ce);
                        },
                        get values() {
                          return a[o(_)];
                        },
                        set values(Se) {
                          a[o(_)] = Se;
                        }
                      });
                    }
                  }, Ee = (ye) => {
                    var ce = $(), Se = Z(ce);
                    {
                      var F = (W) => {
                        pp(W, {
                          get value() {
                            return a[o(_)];
                          },
                          set value(ie) {
                            a[o(_)] = ie;
                          }
                        });
                      }, re = (W) => {
                        var ie = $(), Te = Z(ie);
                        {
                          var j = (ee) => {
                            Ip(ee, {
                              get value() {
                                return a[o(_)];
                              },
                              set value(Oe) {
                                a[o(_)] = Oe;
                              }
                            });
                          };
                          ne(
                            Te,
                            (ee) => {
                              o(g).type === "datetime" && ee(j);
                            },
                            !0
                          );
                        }
                        w(W, ie);
                      };
                      ne(
                        Se,
                        (W) => {
                          o(g).type === "date" ? W(F) : W(re, !1);
                        },
                        !0
                      );
                    }
                    w(ye, ce);
                  };
                  ne(
                    L,
                    (ye) => {
                      o(g).type === "multiselect" ? ye(P) : ye(Ee, !1);
                    },
                    !0
                  );
                }
                w(J, M);
              };
              ne(
                N,
                (J) => {
                  o(g).type === "select" ? J(H) : J(K, !1);
                },
                !0
              );
            }
            w(me, V);
          };
          ne(D, (me) => {
            o(g).type === "text" || o(g).type === "number" ? me(X) : me(k, !1);
          });
        }
        var B = _e(x, 2);
        bc(B, {
          variant: "unelevated",
          style: "background: var(--secondary); color: white; width: 100%;",
          onclick: () => d(o(_)),
          children: (me, V) => {
            var N = Kt("Apply");
            w(me, N);
          },
          $$slots: { default: !0 }
        }), He(() => ht(A, `Filter by ${o(g).label ?? ""}`)), al(2, I, () => Bl, () => ({ y: 5, duration: 120 })), al(1, I, () => Bl, () => ({ y: -5, duration: 120 })), w(y, I);
      };
      ne(C, (y) => {
        o(r) === o(_) && y(b);
      });
    }
    Ce(S, (y, I) => i[I] = y, (y) => i == null ? void 0 : i[y], () => [o(_)]), w(v, S);
  }), w(t, m), Le();
}
hn(["click"]);
var cb = (t, e) => e(), db = /* @__PURE__ */ pe('<button class="filter-tab__tabs__clear svelte-nj6sif">Clear Filters</button>'), fb = /* @__PURE__ */ pe('<div class="filter-tab svelte-nj6sif"><!> <div class="filter-tab__tabs svelte-nj6sif"><h4 style="all:unset; font-weight: bold; font-size: 1rem;">Filter by</h4> <!> <!></div></div>');
function hb(t, e) {
  we(e, !0);
  let n = p(e, "filters", 15), r = p(e, "onFilterChange", 3, (E) => {
  }), i = p(e, "searchText", 15, ""), a = p(e, "searchLabel", 3, "Search"), s = p(e, "searchPlaceholder", 3, "Type to search..."), c = p(e, "onSearchInput", 3, () => {
  }), l = p(e, "searchDisabled", 3, !1), u = /* @__PURE__ */ fe(() => n().some((E) => E.value !== void 0 && E.value !== null && E.value !== "")), d = () => {
    n(n().map((E) => ({ ...E, value: void 0 }))), r()(n());
  };
  var h = fb(), f = Ie(h);
  {
    var m = (E) => {
      lg(E, {
        oninput: () => c()(),
        icon: "search",
        get label() {
          return a();
        },
        get placeholder() {
          return s();
        },
        variant: "outlined",
        styles: "background: var(--oscd-base2,#fff); max-width: 650px;",
        get value() {
          return i();
        },
        set value(C) {
          i(C);
        }
      });
    };
    ne(f, (E) => {
      l() || E(m);
    });
  }
  var v = _e(f, 2), g = _e(Ie(v), 2);
  ub(g, {
    onfiltersChanged: (E) => r()(E),
    get filters() {
      return n();
    },
    set filters(E) {
      n(E);
    }
  });
  var _ = _e(g, 2);
  {
    var S = (E) => {
      var C = db();
      C.__click = [cb, d], w(E, C);
    };
    ne(_, (E) => {
      o(u) && E(S);
    });
  }
  w(t, h), Le();
}
hn(["click"]);
var vb = /* @__PURE__ */ pe('<div><div class="mdc-linear-progress__buffer"><div class="mdc-linear-progress__buffer-bar"></div> <div class="mdc-linear-progress__buffer-dots"></div></div> <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"><span class="mdc-linear-progress__bar-inner"></span></div> <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span class="mdc-linear-progress__bar-inner"></span></div></div>');
function mb(t, e) {
  we(e, !0);
  const [n, r] = lr();
  let i = p(e, "use", 19, () => []), a = p(e, "class", 3, ""), s = p(e, "style", 3, ""), c = p(e, "indeterminate", 3, !1), l = p(e, "closed", 3, !1), u = p(e, "progress", 3, 0), d = p(e, "buffer", 3, void 0), h = /* @__PURE__ */ Ye(e, [
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
  ]), f, m = /* @__PURE__ */ ve(void 0), v = ge({}), g = ge({}), _ = ge({}), S = ge({}), E = ge({}), C = ue("SMUI:linear-progress:context"), b = ue("SMUI:linear-progress:closed");
  xe(() => {
    b && ti(b, l());
  }), xe(() => {
    o(m) && o(m).isDeterminate() !== !c() && o(m).setDeterminate(!c());
  }), xe(() => {
    o(m) && o(m).getProgress() !== u() && o(m).setProgress(u());
  }), xe(() => {
    o(m) && (d() == null ? o(m).setBuffer(1) : o(m).setBuffer(d()));
  }), xe(() => {
    o(m) && (l() ? o(m).close() : o(m).open());
  }), ot(() => (q(
    m,
    new Sp({
      addClass: I,
      forceLayout: () => {
        B().getBoundingClientRect();
      },
      setBufferBarStyle: X,
      setPrimaryBarStyle: k,
      hasClass: y,
      removeAttribute: x,
      removeClass: T,
      setAttribute: A,
      setStyle: D,
      attachResizeObserver: (L) => {
        const P = window.ResizeObserver;
        if (P) {
          const Ee = new P(L);
          return Ee.observe(B()), Ee;
        }
        return null;
      },
      getWidth: () => B().offsetWidth
    }),
    !0
  ), o(m).init(), () => {
    var L;
    (L = o(m)) == null || L.destroy();
  }));
  function y(L) {
    return L in v ? v[L] : B().classList.contains(L);
  }
  function I(L) {
    v[L] || (v[L] = !0);
  }
  function T(L) {
    (!(L in v) || v[L]) && (v[L] = !1);
  }
  function A(L, P) {
    g[L] !== P && (g[L] = P);
  }
  function x(L) {
    (!(L in g) || g[L] != null) && (g[L] = void 0);
  }
  function D(L, P) {
    _[L] != P && (P === "" || P == null ? delete _[L] : _[L] = P);
  }
  function X(L, P) {
    S[L] != P && (P === "" || P == null ? delete S[L] : S[L] = P);
  }
  function k(L, P) {
    E[L] != P && (P === "" || P == null ? delete E[L] : E[L] = P);
  }
  function B() {
    return f;
  }
  var me = { getElement: B }, V = vb(), N = (L) => {
    var P;
    o(m) && o(m).handleTransitionEnd(), (P = e.ontransitionend) == null || P.call(e, L);
  };
  ze(
    V,
    (L, P) => ({
      class: L,
      style: P,
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 1,
      "aria-valuenow": c() ? void 0 : u(),
      ...g,
      ...h,
      ontransitionend: N
    }),
    [
      () => Ve({
        "mdc-linear-progress": !0,
        "mdc-linear-progress--indeterminate": c(),
        "mdc-linear-progress--closed": l(),
        "mdc-data-table__linear-progress": C === "data-table",
        ...v,
        [a()]: !0
      }),
      () => Object.entries(_).map(([L, P]) => `${L}: ${P};`).concat([s()]).join(" ")
    ]
  );
  var H = Ie(V), K = Ie(H), J = _e(H, 2);
  Ce(V, (L) => f = L, () => f), Ue(V, (L, P) => z == null ? void 0 : z(L, P), i), He(
    (L, P) => {
      Vt(K, L), Vt(J, P);
    },
    [
      () => Object.entries(S).map(([L, P]) => `${L}: ${P};`).join(" "),
      () => Object.entries(E).map(([L, P]) => `${L}: ${P};`).join(" ")
    ]
  ), w(t, V);
  var M = Le(me);
  return r(), M;
}
var gb = /* @__PURE__ */ sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 4l-8 8h16l-8-8z"></path></svg>'), pb = /* @__PURE__ */ sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 20l8-8H4l8 8z"></path></svg>'), bb = /* @__PURE__ */ pe('<div class="custom-cell-container svelte-1mj71p3"><div class="cell-header svelte-1mj71p3"><span class="header-title svelte-1mj71p3"> </span> <!></div></div>'), _b = (t, e) => e(), Ib = /* @__PURE__ */ pe('<input type="text" class="svelte-1mj71p3"/>'), yb = (t, e) => e(), Eb = /* @__PURE__ */ pe('<input type="number" class="svelte-1mj71p3"/>'), Ab = /* @__PURE__ */ pe("<!> <!>", 1), Sb = /* @__PURE__ */ pe("<!> <!>", 1), Cb = /* @__PURE__ */ pe('<div class="cell-actions svelte-1mj71p3"></div>'), xb = /* @__PURE__ */ pe("<!> <!>", 1);
function Tb(t, e) {
  we(e, !0);
  const n = () => Fn(g, "$sortColumn", a), r = () => Fn(_, "$sortDirection", a), i = () => Fn(v, "$filteredData", a), [a, s] = lr();
  let c = p(e, "loadingDone", 15, !0), l = p(e, "label", 19, Kg), u = p(e, "columnDefs", 19, () => []), d = p(e, "rowData", 31, () => ge([])), h = p(e, "rowActions", 19, () => []), f = p(e, "searchInputLabel", 3, "Search"), m = ge({ name: "", color: "", number: "" }), v = Qt([]), g = Qt(null), _ = Qt(null), S = /* @__PURE__ */ fe(() => u().some((y) => y.filter));
  e.store.store.subscribe((y) => {
    d([...y]), E();
  });
  function E() {
    let y = d().filter((I) => u().every((T) => {
      const A = m[T.field], x = T.filterValueGetter ? T.filterValueGetter(I) : I[T.field];
      return A ? T.filterType === "number" ? x == A : x.toString().toLowerCase().includes(A.toLowerCase()) : !0;
    }));
    y = C(y), v.set(y);
  }
  function C(y) {
    let I, T;
    return g.subscribe((A) => I = A), _.subscribe((A) => T = A), !I || !T ? y : y.sort((A, x) => {
      let D = A[I], X = x[I];
      return D == null && (D = ""), X == null && (X = ""), T === "asc" ? D.toString().localeCompare(X.toString()) : X.toString().localeCompare(D.toString());
    });
  }
  function b(y) {
    g.update((I) => {
      if (I === y)
        _.update((T) => T === "asc" ? "desc" : T === "desc" ? null : "asc");
      else
        return _.set("asc"), y;
      return y;
    }), E();
  }
  v.set(d()), wp(t, {
    get "table$aria-label"() {
      return l();
    },
    style: "max-width: 100%; width: 100%;",
    progress: (I) => {
      mb(I, {
        indeterminate: !0,
        "aria-label": "Data is being loaded...",
        get closed() {
          return c();
        },
        set closed(T) {
          c(T);
        }
      });
    },
    children: (I, T) => {
      var A = xb(), x = Z(A);
      Op(x, {
        children: (X, k) => {
          var B = Sb(), me = Z(B);
          Ns(me, {
            class: "header-title-row",
            children: (H, K) => {
              var J = $(), M = Z(J);
              er(M, 17, u, bi, (L, P) => {
                Na(L, {
                  onclick: () => o(P).sortable && b(o(P).field),
                  get style() {
                    return o(P).headerStyle;
                  },
                  children: (Ee, ye) => {
                    var ce = bb(), Se = Ie(ce), F = Ie(Se), re = Ie(F), W = _e(F, 2);
                    {
                      var ie = (Te) => {
                        var j = $(), ee = Z(j);
                        {
                          var Oe = (be) => {
                            var Be = $(), Je = Z(Be);
                            {
                              var vt = (U) => {
                                var oe = gb();
                                w(U, oe);
                              }, R = (U) => {
                                var oe = $(), Ge = Z(oe);
                                {
                                  var Ot = (Rt) => {
                                    var Cn = pb();
                                    w(Rt, Cn);
                                  };
                                  ne(
                                    Ge,
                                    (Rt) => {
                                      r() === "desc" && Rt(Ot);
                                    },
                                    !0
                                  );
                                }
                                w(U, oe);
                              };
                              ne(Je, (U) => {
                                r() === "asc" ? U(vt) : U(R, !1);
                              });
                            }
                            w(be, Be);
                          };
                          ne(ee, (be) => {
                            n() === o(P).field && r() !== null && be(Oe);
                          });
                        }
                        w(Te, j);
                      };
                      ne(W, (Te) => {
                        o(P).sortable && Te(ie);
                      });
                    }
                    He(() => {
                      Vt(ce, `min-width: ${o(P).minWidth ?? 0 ?? ""}`), ht(re, o(P).headerName);
                    }), w(Ee, ce);
                  },
                  $$slots: { default: !0 }
                });
              }), w(H, J);
            },
            $$slots: { default: !0 }
          });
          var V = _e(me, 2);
          {
            var N = (H) => {
              Ns(H, {
                class: "header-filter-row",
                children: (K, J) => {
                  var M = $(), L = Z(M);
                  er(L, 17, u, bi, (P, Ee) => {
                    Na(P, {
                      children: (ye, ce) => {
                        var Se = $(), F = Z(Se);
                        {
                          var re = (W) => {
                            var ie = Ab(), Te = Z(ie);
                            {
                              var j = (be) => {
                                var Be = Ib();
                                Be.__input = [_b, E], He(() => Ar(Be, "placeholder", `${f()} ${o(Ee).headerName}`)), va(Be, () => m[o(Ee).field], (Je) => m[o(Ee).field] = Je), w(be, Be);
                              };
                              ne(Te, (be) => {
                                o(Ee).filterType === "text" && be(j);
                              });
                            }
                            var ee = _e(Te, 2);
                            {
                              var Oe = (be) => {
                                var Be = Eb();
                                Be.__input = [yb, E], He(() => Ar(Be, "placeholder", `${f()} ${o(Ee).headerName}`)), va(Be, () => m[o(Ee).field], (Je) => m[o(Ee).field] = Je), w(be, Be);
                              };
                              ne(ee, (be) => {
                                o(Ee).filterType === "number" && be(Oe);
                              });
                            }
                            w(W, ie);
                          };
                          ne(F, (W) => {
                            o(Ee).filter && W(re);
                          });
                        }
                        w(ye, Se);
                      },
                      $$slots: { default: !0 }
                    });
                  }), w(K, M);
                },
                $$slots: { default: !0 }
              });
            };
            ne(V, (H) => {
              o(S) && H(N);
            });
          }
          w(X, B);
        },
        $$slots: { default: !0 }
      });
      var D = _e(x, 2);
      Mp(D, {
        children: (X, k) => {
          var B = $(), me = Z(B);
          er(me, 1, i, bi, (V, N) => {
            Ns(V, {
              children: (H, K) => {
                var J = $(), M = Z(J);
                er(M, 17, u, (L) => L.field, (L, P) => {
                  var Ee = $(), ye = Z(Ee);
                  {
                    var ce = (F) => {
                      Na(F, {
                        children: (re, W) => {
                          var ie = Cb();
                          er(ie, 21, h, bi, (Te, j) => {
                            var ee = $(), Oe = Z(ee);
                            {
                              var be = (Je) => {
                                ts(Je, {
                                  get content() {
                                    return o(j).tooltip;
                                  },
                                  hoverDelay: 500,
                                  children: (vt, R) => {
                                    {
                                      let U = /* @__PURE__ */ fe(() => o(j).disabled(o(N)));
                                      wm(vt, {
                                        get iconComponent() {
                                          return o(j).iconComponent;
                                        },
                                        get iconStyles() {
                                          return o(j).iconStyles;
                                        },
                                        callback: () => o(j).callback(o(N)),
                                        get disabled() {
                                          return o(U);
                                        }
                                      });
                                    }
                                  },
                                  $$slots: { default: !0 }
                                });
                              }, Be = (Je) => {
                                ts(Je, {
                                  get content() {
                                    return o(j).tooltip;
                                  },
                                  hoverDelay: 500,
                                  children: (vt, R) => {
                                    {
                                      let U = /* @__PURE__ */ fe(() => o(j).disabled(o(N)));
                                      Am(vt, {
                                        class: "button",
                                        variant: "raised",
                                        callback: () => o(j).callback(o(N)),
                                        get disabled() {
                                          return o(U);
                                        },
                                        children: (oe, Ge) => {
                                          var Ot = $(), Rt = Z(Ot);
                                          {
                                            var Cn = (se) => {
                                              Qg(se, { svgStyles: "margin: unset" });
                                            }, de = (se) => {
                                              var G = $(), Y = Z(G);
                                              {
                                                var Re = (nt) => {
                                                  Sc(nt, { svgStyles: "margin: unset" });
                                                }, at = (nt) => {
                                                  var Et = $(), Nt = Z(Et);
                                                  {
                                                    var cr = (ct) => {
                                                      ep(ct, { svgStyles: "margin: unset" });
                                                    }, lt = (ct) => {
                                                      var Mt = $(), Rn = Z(Mt);
                                                      {
                                                        var oi = (De) => {
                                                          np(De, { svgStyles: "margin: unset" });
                                                        }, Mn = (De) => {
                                                          var $e = $(), Qe = Z($e);
                                                          {
                                                            var xt = (We) => {
                                                              sp(We, { svgStyles: "margin: unset" });
                                                            }, ln = (We) => {
                                                              var mt = $(), At = Z(mt);
                                                              {
                                                                var Xe = (Ut) => {
                                                                  lp(Ut, { svgStyles: "margin: unset" });
                                                                }, St = (Ut) => {
                                                                  var jt = $(), pt = Z(jt);
                                                                  {
                                                                    var Tt = (gt) => {
                                                                      cp(gt, { svgStyles: "margin: unset" });
                                                                    }, nn = (gt) => {
                                                                      ip(gt, { svgStyles: "margin: unset" });
                                                                    };
                                                                    ne(
                                                                      pt,
                                                                      (gt) => {
                                                                        o(j).icon === "delete" ? gt(Tt) : gt(nn, !1);
                                                                      },
                                                                      !0
                                                                    );
                                                                  }
                                                                  w(Ut, jt);
                                                                };
                                                                ne(
                                                                  At,
                                                                  (Ut) => {
                                                                    o(j).icon === "edit" ? Ut(Xe) : Ut(St, !1);
                                                                  },
                                                                  !0
                                                                );
                                                              }
                                                              w(We, mt);
                                                            };
                                                            ne(
                                                              Qe,
                                                              (We) => {
                                                                o(j).icon === "remove" ? We(xt) : We(ln, !1);
                                                              },
                                                              !0
                                                            );
                                                          }
                                                          w(De, $e);
                                                        };
                                                        ne(
                                                          Rn,
                                                          (De) => {
                                                            o(j).icon === "find-in-page" ? De(oi) : De(Mn, !1);
                                                          },
                                                          !0
                                                        );
                                                      }
                                                      w(ct, Mt);
                                                    };
                                                    ne(
                                                      Nt,
                                                      (ct) => {
                                                        o(j).icon === "download" ? ct(cr) : ct(lt, !1);
                                                      },
                                                      !0
                                                    );
                                                  }
                                                  w(nt, Et);
                                                };
                                                ne(
                                                  Y,
                                                  (nt) => {
                                                    o(j).icon === "cancel" ? nt(Re) : nt(at, !1);
                                                  },
                                                  !0
                                                );
                                              }
                                              w(se, G);
                                            };
                                            ne(Rt, (se) => {
                                              o(j).icon === "add" ? se(Cn) : se(de, !1);
                                            });
                                          }
                                          w(oe, Ot);
                                        },
                                        $$slots: { default: !0 }
                                      });
                                    }
                                  },
                                  $$slots: { default: !0 }
                                });
                              };
                              ne(Oe, (Je) => {
                                o(j).iconComponent ? Je(be) : Je(Be, !1);
                              });
                            }
                            w(Te, ee);
                          }), w(re, ie);
                        },
                        $$slots: { default: !0 }
                      });
                    }, Se = (F) => {
                      Na(F, {
                        get numeric() {
                          return o(P).numeric;
                        },
                        get style() {
                          return o(P).cellStyle;
                        },
                        children: (re, W) => {
                          var ie = $(), Te = Z(ie);
                          {
                            var j = (Oe) => {
                              const be = /* @__PURE__ */ fe(() => o(P).cellRenderer);
                              var Be = $(), Je = Z(Be);
                              ai(Je, () => o(be), (vt, R) => {
                                R(vt, rt(
                                  {
                                    get row() {
                                      return o(N);
                                    },
                                    get value() {
                                      return o(N)[o(P).field];
                                    },
                                    get col() {
                                      return o(P);
                                    }
                                  },
                                  () => o(P).cellRendererProps ?? {}
                                ));
                              }), w(Oe, Be);
                            }, ee = (Oe) => {
                              var be = $(), Be = Z(be);
                              {
                                var Je = (R) => {
                                  var U = Kt();
                                  He((oe) => ht(U, oe), [
                                    () => o(P).valueFormatter(o(N)[o(P).field])
                                  ]), w(R, U);
                                }, vt = (R) => {
                                  var U = Kt();
                                  He(() => ht(U, o(N)[o(P).field] ?? "")), w(R, U);
                                };
                                ne(
                                  Be,
                                  (R) => {
                                    o(P).valueFormatter ? R(Je) : R(vt, !1);
                                  },
                                  !0
                                );
                              }
                              w(Oe, be);
                            };
                            ne(Te, (Oe) => {
                              o(P).cellRenderer ? Oe(j) : Oe(ee, !1);
                            });
                          }
                          w(re, ie);
                        },
                        $$slots: { default: !0 }
                      });
                    };
                    ne(ye, (F) => {
                      o(P).field === "actions" ? F(ce) : F(Se, !1);
                    });
                  }
                  w(L, Ee);
                }), w(H, J);
              },
              $$slots: { default: !0 }
            });
          }), w(X, B);
        },
        $$slots: { default: !0 }
      }), w(I, A);
    },
    $$slots: { progress: !0, default: !0 }
  }), Le(), s();
}
hn(["input"]);
function It(t) {
  return typeof t == "function";
}
function Mo(t) {
  var e = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = t(e);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var Us = Mo(function(t) {
  return function(n) {
    t(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(r, i) {
      return i + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function ns(t, e) {
  if (t) {
    var n = t.indexOf(e);
    0 <= n && t.splice(n, 1);
  }
}
var Ca = function() {
  function t(e) {
    this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return t.prototype.unsubscribe = function() {
    var e, n, r, i, a;
    if (!this.closed) {
      this.closed = !0;
      var s = this._parentage;
      if (s)
        if (this._parentage = null, Array.isArray(s))
          try {
            for (var c = Lt(s), l = c.next(); !l.done; l = c.next()) {
              var u = l.value;
              u.remove(this);
            }
          } catch (g) {
            e = { error: g };
          } finally {
            try {
              l && !l.done && (n = c.return) && n.call(c);
            } finally {
              if (e) throw e.error;
            }
          }
        else
          s.remove(this);
      var d = this.initialTeardown;
      if (It(d))
        try {
          d();
        } catch (g) {
          a = g instanceof Us ? g.errors : [g];
        }
      var h = this._finalizers;
      if (h) {
        this._finalizers = null;
        try {
          for (var f = Lt(h), m = f.next(); !m.done; m = f.next()) {
            var v = m.value;
            try {
              Fl(v);
            } catch (g) {
              a = a ?? [], g instanceof Us ? a = Sr(Sr([], Ni(a)), Ni(g.errors)) : a.push(g);
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
        throw new Us(a);
    }
  }, t.prototype.add = function(e) {
    var n;
    if (e && e !== this)
      if (this.closed)
        Fl(e);
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
    n === e ? this._parentage = null : Array.isArray(n) && ns(n, e);
  }, t.prototype.remove = function(e) {
    var n = this._finalizers;
    n && ns(n, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = function() {
    var e = new t();
    return e.closed = !0, e;
  }(), t;
}(), Cc = Ca.EMPTY;
function xc(t) {
  return t instanceof Ca || t && "closed" in t && It(t.remove) && It(t.add) && It(t.unsubscribe);
}
function Fl(t) {
  It(t) ? t() : t.unsubscribe();
}
var wb = {
  Promise: void 0
}, Lb = {
  setTimeout: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setTimeout.apply(void 0, Sr([t, e], Ni(n)));
  },
  clearTimeout: function(t) {
    return clearTimeout(t);
  },
  delegate: void 0
};
function Tc(t) {
  Lb.setTimeout(function() {
    throw t;
  });
}
function Vl() {
}
function za(t) {
  t();
}
var Do = function(t) {
  tt(e, t);
  function e(n) {
    var r = t.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, xc(n) && n.add(r)) : r.destination = Mb, r;
  }
  return e.create = function(n, r, i) {
    return new lo(n, r, i);
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
}(Ca), Ob = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(e);
      } catch (r) {
        ka(r);
      }
  }, t.prototype.error = function(e) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(e);
      } catch (r) {
        ka(r);
      }
    else
      ka(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (n) {
        ka(n);
      }
  }, t;
}(), lo = function(t) {
  tt(e, t);
  function e(n, r, i) {
    var a = t.call(this) || this, s;
    return It(n) || !n ? s = {
      next: n ?? void 0,
      error: r ?? void 0,
      complete: i ?? void 0
    } : s = n, a.destination = new Ob(s), a;
  }
  return e;
}(Do);
function ka(t) {
  Tc(t);
}
function Rb(t) {
  throw t;
}
var Mb = {
  closed: !0,
  next: Vl,
  error: Rb,
  complete: Vl
}, Ho = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function Po(t) {
  return t;
}
function Db(t) {
  return t.length === 0 ? Po : t.length === 1 ? t[0] : function(n) {
    return t.reduce(function(r, i) {
      return i(r);
    }, n);
  };
}
var An = function() {
  function t(e) {
    e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var n = new t();
    return n.source = this, n.operator = e, n;
  }, t.prototype.subscribe = function(e, n, r) {
    var i = this, a = Pb(e) ? e : new lo(e, n, r);
    return za(function() {
      var s = i, c = s.operator, l = s.source;
      a.add(c ? c.call(a, l) : l ? i._subscribe(a) : i._trySubscribe(a));
    }), a;
  }, t.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (n) {
      e.error(n);
    }
  }, t.prototype.forEach = function(e, n) {
    var r = this;
    return n = Gl(n), new n(function(i, a) {
      var s = new lo({
        next: function(c) {
          try {
            e(c);
          } catch (l) {
            a(l), s.unsubscribe();
          }
        },
        error: a,
        complete: i
      });
      r.subscribe(s);
    });
  }, t.prototype._subscribe = function(e) {
    var n;
    return (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(e);
  }, t.prototype[Ho] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    return Db(e)(this);
  }, t.prototype.toPromise = function(e) {
    var n = this;
    return e = Gl(e), new e(function(r, i) {
      var a;
      n.subscribe(function(s) {
        return a = s;
      }, function(s) {
        return i(s);
      }, function() {
        return r(a);
      });
    });
  }, t.create = function(e) {
    return new t(e);
  }, t;
}();
function Gl(t) {
  var e;
  return (e = t ?? wb.Promise) !== null && e !== void 0 ? e : Promise;
}
function Hb(t) {
  return t && It(t.next) && It(t.error) && It(t.complete);
}
function Pb(t) {
  return t && t instanceof Do || Hb(t) && xc(t);
}
function Nb(t) {
  return It(t == null ? void 0 : t.lift);
}
function ur(t) {
  return function(e) {
    if (Nb(e))
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
function ar(t, e, n, r, i) {
  return new Ub(t, e, n, r, i);
}
var Ub = function(t) {
  tt(e, t);
  function e(n, r, i, a, s, c) {
    var l = t.call(this, n) || this;
    return l.onFinalize = s, l.shouldUnsubscribe = c, l._next = r ? function(u) {
      try {
        r(u);
      } catch (d) {
        n.error(d);
      }
    } : t.prototype._next, l._error = a ? function(u) {
      try {
        a(u);
      } catch (d) {
        n.error(d);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._error, l._complete = i ? function() {
      try {
        i();
      } catch (u) {
        n.error(u);
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
}(Do), kb = Mo(function(t) {
  return function() {
    t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), wc = function(t) {
  tt(e, t);
  function e() {
    var n = t.call(this) || this;
    return n.closed = !1, n.currentObservers = null, n.observers = [], n.isStopped = !1, n.hasError = !1, n.thrownError = null, n;
  }
  return e.prototype.lift = function(n) {
    var r = new jl(this, this);
    return r.operator = n, r;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new kb();
  }, e.prototype.next = function(n) {
    var r = this;
    za(function() {
      var i, a;
      if (r._throwIfClosed(), !r.isStopped) {
        r.currentObservers || (r.currentObservers = Array.from(r.observers));
        try {
          for (var s = Lt(r.currentObservers), c = s.next(); !c.done; c = s.next()) {
            var l = c.value;
            l.next(n);
          }
        } catch (u) {
          i = { error: u };
        } finally {
          try {
            c && !c.done && (a = s.return) && a.call(s);
          } finally {
            if (i) throw i.error;
          }
        }
      }
    });
  }, e.prototype.error = function(n) {
    var r = this;
    za(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.hasError = r.isStopped = !0, r.thrownError = n;
        for (var i = r.observers; i.length; )
          i.shift().error(n);
      }
    });
  }, e.prototype.complete = function() {
    var n = this;
    za(function() {
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
    var r = this, i = this, a = i.hasError, s = i.isStopped, c = i.observers;
    return a || s ? Cc : (this.currentObservers = null, c.push(n), new Ca(function() {
      r.currentObservers = null, ns(c, n);
    }));
  }, e.prototype._checkFinalizedStatuses = function(n) {
    var r = this, i = r.hasError, a = r.thrownError, s = r.isStopped;
    i ? n.error(a) : s && n.complete();
  }, e.prototype.asObservable = function() {
    var n = new An();
    return n.source = this, n;
  }, e.create = function(n, r) {
    return new jl(n, r);
  }, e;
}(An), jl = function(t) {
  tt(e, t);
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
    return (i = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)) !== null && i !== void 0 ? i : Cc;
  }, e;
}(wc), Bb = {
  now: function() {
    return Date.now();
  }
}, Fb = function(t) {
  tt(e, t);
  function e(n, r) {
    return t.call(this) || this;
  }
  return e.prototype.schedule = function(n, r) {
    return this;
  }, e;
}(Ca), ql = {
  setInterval: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setInterval.apply(void 0, Sr([t, e], Ni(n)));
  },
  clearInterval: function(t) {
    return clearInterval(t);
  },
  delegate: void 0
}, Vb = function(t) {
  tt(e, t);
  function e(n, r) {
    var i = t.call(this, n, r) || this;
    return i.scheduler = n, i.work = r, i.pending = !1, i;
  }
  return e.prototype.schedule = function(n, r) {
    var i;
    if (r === void 0 && (r = 0), this.closed)
      return this;
    this.state = n;
    var a = this.id, s = this.scheduler;
    return a != null && (this.id = this.recycleAsyncId(s, a, r)), this.pending = !0, this.delay = r, this.id = (i = this.id) !== null && i !== void 0 ? i : this.requestAsyncId(s, this.id, r), this;
  }, e.prototype.requestAsyncId = function(n, r, i) {
    return i === void 0 && (i = 0), ql.setInterval(n.flush.bind(n, this), i);
  }, e.prototype.recycleAsyncId = function(n, r, i) {
    if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === !1)
      return r;
    r != null && ql.clearInterval(r);
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
    } catch (s) {
      i = !0, a = s || new Error("Scheduled action threw falsy error");
    }
    if (i)
      return this.unsubscribe(), a;
  }, e.prototype.unsubscribe = function() {
    if (!this.closed) {
      var n = this, r = n.id, i = n.scheduler, a = i.actions;
      this.work = this.state = this.scheduler = null, this.pending = !1, ns(a, this), r != null && (this.id = this.recycleAsyncId(i, r, null)), this.delay = null, t.prototype.unsubscribe.call(this);
    }
  }, e;
}(Fb), zl = function() {
  function t(e, n) {
    n === void 0 && (n = t.now), this.schedulerActionCtor = e, this.now = n;
  }
  return t.prototype.schedule = function(e, n, r) {
    return n === void 0 && (n = 0), new this.schedulerActionCtor(this, e).schedule(r, n);
  }, t.now = Bb.now, t;
}(), Gb = function(t) {
  tt(e, t);
  function e(n, r) {
    r === void 0 && (r = zl.now);
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
}(zl), jb = new Gb(Vb);
function qb(t) {
  return t && It(t.schedule);
}
function zb(t) {
  return t[t.length - 1];
}
function Wb(t) {
  return qb(zb(t)) ? t.pop() : void 0;
}
var Lc = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function Oc(t) {
  return It(t == null ? void 0 : t.then);
}
function Rc(t) {
  return It(t[Ho]);
}
function Mc(t) {
  return Symbol.asyncIterator && It(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function Dc(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function Xb() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var Hc = Xb();
function Pc(t) {
  return It(t == null ? void 0 : t[Hc]);
}
function Nc(t) {
  return eh(this, arguments, function() {
    var n, r, i, a;
    return wo(this, function(s) {
      switch (s.label) {
        case 0:
          n = t.getReader(), s.label = 1;
        case 1:
          s.trys.push([1, , 9, 10]), s.label = 2;
        case 2:
          return [4, Ei(n.read())];
        case 3:
          return r = s.sent(), i = r.value, a = r.done, a ? [4, Ei(void 0)] : [3, 5];
        case 4:
          return [2, s.sent()];
        case 5:
          return [4, Ei(i)];
        case 6:
          return [4, s.sent()];
        case 7:
          return s.sent(), [3, 2];
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
function Uc(t) {
  return It(t == null ? void 0 : t.getReader);
}
function Ki(t) {
  if (t instanceof An)
    return t;
  if (t != null) {
    if (Rc(t))
      return Kb(t);
    if (Lc(t))
      return Zb(t);
    if (Oc(t))
      return Yb(t);
    if (Mc(t))
      return kc(t);
    if (Pc(t))
      return Qb(t);
    if (Uc(t))
      return Jb(t);
  }
  throw Dc(t);
}
function Kb(t) {
  return new An(function(e) {
    var n = t[Ho]();
    if (It(n.subscribe))
      return n.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function Zb(t) {
  return new An(function(e) {
    for (var n = 0; n < t.length && !e.closed; n++)
      e.next(t[n]);
    e.complete();
  });
}
function Yb(t) {
  return new An(function(e) {
    t.then(function(n) {
      e.closed || (e.next(n), e.complete());
    }, function(n) {
      return e.error(n);
    }).then(null, Tc);
  });
}
function Qb(t) {
  return new An(function(e) {
    var n, r;
    try {
      for (var i = Lt(t), a = i.next(); !a.done; a = i.next()) {
        var s = a.value;
        if (e.next(s), e.closed)
          return;
      }
    } catch (c) {
      n = { error: c };
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
function kc(t) {
  return new An(function(e) {
    $b(t, e).catch(function(n) {
      return e.error(n);
    });
  });
}
function Jb(t) {
  return kc(Nc(t));
}
function $b(t, e) {
  var n, r, i, a;
  return zu(this, void 0, void 0, function() {
    var s, c;
    return wo(this, function(l) {
      switch (l.label) {
        case 0:
          l.trys.push([0, 5, 6, 11]), n = th(t), l.label = 1;
        case 1:
          return [4, n.next()];
        case 2:
          if (r = l.sent(), !!r.done) return [3, 4];
          if (s = r.value, e.next(s), e.closed)
            return [2];
          l.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return c = l.sent(), i = { error: c }, [3, 11];
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
function Jr(t, e, n, r, i) {
  r === void 0 && (r = 0), i === void 0 && (i = !1);
  var a = e.schedule(function() {
    n(), i ? t.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (t.add(a), !i)
    return a;
}
function Bc(t, e) {
  return e === void 0 && (e = 0), ur(function(n, r) {
    n.subscribe(ar(r, function(i) {
      return Jr(r, t, function() {
        return r.next(i);
      }, e);
    }, function() {
      return Jr(r, t, function() {
        return r.complete();
      }, e);
    }, function(i) {
      return Jr(r, t, function() {
        return r.error(i);
      }, e);
    }));
  });
}
function Fc(t, e) {
  return e === void 0 && (e = 0), ur(function(n, r) {
    r.add(t.schedule(function() {
      return n.subscribe(r);
    }, e));
  });
}
function e_(t, e) {
  return Ki(t).pipe(Fc(e), Bc(e));
}
function t_(t, e) {
  return Ki(t).pipe(Fc(e), Bc(e));
}
function n_(t, e) {
  return new An(function(n) {
    var r = 0;
    return e.schedule(function() {
      r === t.length ? n.complete() : (n.next(t[r++]), n.closed || this.schedule());
    });
  });
}
function r_(t, e) {
  return new An(function(n) {
    var r;
    return Jr(n, e, function() {
      r = t[Hc](), Jr(n, e, function() {
        var i, a, s;
        try {
          i = r.next(), a = i.value, s = i.done;
        } catch (c) {
          n.error(c);
          return;
        }
        s ? n.complete() : n.next(a);
      }, 0, !0);
    }), function() {
      return It(r == null ? void 0 : r.return) && r.return();
    };
  });
}
function Vc(t, e) {
  if (!t)
    throw new Error("Iterable cannot be null");
  return new An(function(n) {
    Jr(n, e, function() {
      var r = t[Symbol.asyncIterator]();
      Jr(n, e, function() {
        r.next().then(function(i) {
          i.done ? n.complete() : n.next(i.value);
        });
      }, 0, !0);
    });
  });
}
function i_(t, e) {
  return Vc(Nc(t), e);
}
function a_(t, e) {
  if (t != null) {
    if (Rc(t))
      return e_(t, e);
    if (Lc(t))
      return n_(t, e);
    if (Oc(t))
      return t_(t, e);
    if (Mc(t))
      return Vc(t, e);
    if (Pc(t))
      return r_(t, e);
    if (Uc(t))
      return i_(t, e);
  }
  throw Dc(t);
}
function s_(t, e) {
  return e ? a_(t, e) : Ki(t);
}
function Gc() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = Wb(t);
  return s_(t, n);
}
function Xt(t, e) {
  return ur(function(n, r) {
    var i = 0;
    n.subscribe(ar(r, function(a) {
      r.next(t.call(e, a, i++));
    }));
  });
}
function o_(t, e, n, r, i, a, s, c) {
  var l = [], u = 0, d = 0, h = !1, f = function() {
    h && !l.length && !u && e.complete();
  }, m = function(g) {
    return u < r ? v(g) : l.push(g);
  }, v = function(g) {
    u++;
    var _ = !1;
    Ki(n(g, d++)).subscribe(ar(e, function(S) {
      e.next(S);
    }, function() {
      _ = !0;
    }, void 0, function() {
      if (_)
        try {
          u--;
          for (var S = function() {
            var E = l.shift();
            s || v(E);
          }; l.length && u < r; )
            S();
          f();
        } catch (E) {
          e.error(E);
        }
    }));
  };
  return t.subscribe(ar(e, m, function() {
    h = !0, f();
  })), function() {
  };
}
function uo(t, e, n) {
  return n === void 0 && (n = 1 / 0), It(e) ? uo(function(r, i) {
    return Xt(function(a, s) {
      return e(r, a, i, s);
    })(Ki(t(r, i)));
  }, n) : (typeof e == "number" && (n = e), ur(function(r, i) {
    return o_(r, i, t, n);
  }));
}
function jc(t, e) {
  return It(e) ? uo(t, e, 1) : uo(t, 1);
}
function l_(t, e) {
  return e === void 0 && (e = jb), ur(function(n, r) {
    var i = null, a = null, s = null, c = function() {
      if (i) {
        i.unsubscribe(), i = null;
        var u = a;
        a = null, r.next(u);
      }
    };
    function l() {
      var u = s + t, d = e.now();
      if (d < u) {
        i = this.schedule(void 0, u - d), r.add(i);
        return;
      }
      c();
    }
    n.subscribe(ar(r, function(u) {
      a = u, s = e.now(), i || (i = e.schedule(l, t), r.add(i));
    }, function() {
      c(), r.complete();
    }, void 0, function() {
      a = i = null;
    }));
  });
}
function u_(t, e) {
  return e === void 0 && (e = Po), t = t ?? c_, ur(function(n, r) {
    var i, a = !0;
    n.subscribe(ar(r, function(s) {
      var c = e(s);
      (a || !t(i, c)) && (a = !1, i = c, r.next(s));
    }));
  });
}
function c_(t, e) {
  return t === e;
}
function d_(t) {
  return ur(function(e, n) {
    try {
      e.subscribe(n);
    } finally {
      n.add(t);
    }
  });
}
function f_(t, e) {
  return ur(function(n, r) {
    var i = null, a = 0, s = !1, c = function() {
      return s && !i && r.complete();
    };
    n.subscribe(ar(r, function(l) {
      i == null || i.unsubscribe();
      var u = 0, d = a++;
      Ki(t(l, d)).subscribe(i = ar(r, function(h) {
        return r.next(e ? e(l, h, d, u++) : h);
      }, function() {
        i = null, c();
      }));
    }, function() {
      s = !0, c();
    }));
  });
}
function Wl(t, e, n) {
  var r = It(t) || e || n ? { next: t, error: e, complete: n } : t;
  return r ? ur(function(i, a) {
    var s;
    (s = r.subscribe) === null || s === void 0 || s.call(r);
    var c = !0;
    i.subscribe(ar(a, function(l) {
      var u;
      (u = r.next) === null || u === void 0 || u.call(r, l), a.next(l);
    }, function() {
      var l;
      c = !1, (l = r.complete) === null || l === void 0 || l.call(r), a.complete();
    }, function(l) {
      var u;
      c = !1, (u = r.error) === null || u === void 0 || u.call(r, l), a.error(l);
    }, function() {
      var l, u;
      c && ((l = r.unsubscribe) === null || l === void 0 || l.call(r)), (u = r.finalize) === null || u === void 0 || u.call(r);
    }));
  }) : Po;
}
function qc(t) {
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
var h_ = /* @__PURE__ */ function() {
  function t(e, n, r, i) {
    i === void 0 && (i = "download_load"), this.originalEvent = e, this.xhr = n, this.request = r, this.type = i;
    var a = n.status, s = n.responseType;
    this.status = a ?? 0, this.responseType = s ?? "";
    var c = n.getAllResponseHeaders();
    this.responseHeaders = c ? c.split(`
`).reduce(function(d, h) {
      var f = h.indexOf(": ");
      return d[h.slice(0, f)] = h.slice(f + 2), d;
    }, {}) : {}, this.response = qc(n);
    var l = e.loaded, u = e.total;
    this.loaded = l, this.total = u;
  }
  return t;
}(), rs = Mo(function(t) {
  return function(n, r, i) {
    this.message = n, this.name = "AjaxError", this.xhr = r, this.request = i, this.status = r.status, this.responseType = r.responseType;
    var a;
    try {
      a = qc(r);
    } catch {
      a = r.responseText;
    }
    this.response = a;
  };
}), v_ = function() {
  function t(e, n) {
    return rs.call(this, "ajax timeout", e, n), this.name = "AjaxTimeoutError", this;
  }
  return t.prototype = Object.create(rs.prototype), t;
}();
function m_(t, e) {
  return Dr({ method: "GET", url: t, headers: e });
}
function g_(t, e, n) {
  return Dr({ method: "POST", url: t, body: e, headers: n });
}
function p_(t, e) {
  return Dr({ method: "DELETE", url: t, headers: e });
}
function b_(t, e, n) {
  return Dr({ method: "PUT", url: t, body: e, headers: n });
}
function __(t, e, n) {
  return Dr({ method: "PATCH", url: t, body: e, headers: n });
}
var I_ = Xt(function(t) {
  return t.response;
});
function y_(t, e) {
  return I_(Dr({
    method: "GET",
    url: t,
    headers: e
  }));
}
var Dr = function() {
  var t = function(e) {
    var n = typeof e == "string" ? {
      url: e
    } : e;
    return A_(n);
  };
  return t.get = m_, t.post = g_, t.delete = p_, t.put = b_, t.patch = __, t.getJSON = y_, t;
}(), E_ = "upload", Xl = "download", ks = "loadstart", Bs = "progress", Kl = "load";
function A_(t) {
  return new An(function(e) {
    var n, r, i = le({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, t), a = i.queryParams, s = i.body, c = i.headers, l = i.url;
    if (!l)
      throw new TypeError("url is required");
    if (a) {
      var u;
      if (l.includes("?")) {
        var d = l.split("?");
        if (2 < d.length)
          throw new TypeError("invalid url");
        u = new URLSearchParams(d[1]), new URLSearchParams(a).forEach(function(H, K) {
          return u.set(K, H);
        }), l = d[0] + "?" + u;
      } else
        u = new URLSearchParams(a), l = l + "?" + u;
    }
    var h = {};
    if (c)
      for (var f in c)
        c.hasOwnProperty(f) && (h[f.toLowerCase()] = c[f]);
    var m = i.crossDomain;
    !m && !("x-requested-with" in h) && (h["x-requested-with"] = "XMLHttpRequest");
    var v = i.withCredentials, g = i.xsrfCookieName, _ = i.xsrfHeaderName;
    if ((v || !m) && g && _) {
      var S = (r = (n = document == null ? void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + g + ")=([^;]*)"))) === null || n === void 0 ? void 0 : n.pop()) !== null && r !== void 0 ? r : "";
      S && (h[_] = S);
    }
    var E = S_(s, h), C = le(le({}, i), {
      url: l,
      headers: h,
      body: E
    }), b;
    b = t.createXHR ? t.createXHR() : new XMLHttpRequest();
    {
      var y = t.progressSubscriber, I = t.includeDownloadProgress, T = I === void 0 ? !1 : I, A = t.includeUploadProgress, x = A === void 0 ? !1 : A, D = function(H, K) {
        b.addEventListener(H, function() {
          var J, M = K();
          (J = y == null ? void 0 : y.error) === null || J === void 0 || J.call(y, M), e.error(M);
        });
      };
      D("timeout", function() {
        return new v_(b, C);
      }), D("abort", function() {
        return new rs("aborted", b, C);
      });
      var X = function(H, K) {
        return new h_(K, b, C, H + "_" + K.type);
      }, k = function(H, K, J) {
        H.addEventListener(K, function(M) {
          e.next(X(J, M));
        });
      };
      x && [ks, Bs, Kl].forEach(function(H) {
        return k(b.upload, H, E_);
      }), y && [ks, Bs].forEach(function(H) {
        return b.upload.addEventListener(H, function(K) {
          var J;
          return (J = y == null ? void 0 : y.next) === null || J === void 0 ? void 0 : J.call(y, K);
        });
      }), T && [ks, Bs].forEach(function(H) {
        return k(b, H, Xl);
      });
      var B = function(H) {
        var K = "ajax error" + (H ? " " + H : "");
        e.error(new rs(K, b, C));
      };
      b.addEventListener("error", function(H) {
        var K;
        (K = y == null ? void 0 : y.error) === null || K === void 0 || K.call(y, H), B();
      }), b.addEventListener(Kl, function(H) {
        var K, J, M = b.status;
        if (M < 400) {
          (K = y == null ? void 0 : y.complete) === null || K === void 0 || K.call(y);
          var L = void 0;
          try {
            L = X(Xl, H);
          } catch (P) {
            e.error(P);
            return;
          }
          e.next(L), e.complete();
        } else
          (J = y == null ? void 0 : y.error) === null || J === void 0 || J.call(y, H), B(M);
      });
    }
    var me = C.user, V = C.method, N = C.async;
    me ? b.open(V, l, N, me, C.password) : b.open(V, l, N), N && (b.timeout = C.timeout, b.responseType = C.responseType), "withCredentials" in b && (b.withCredentials = C.withCredentials);
    for (var f in h)
      h.hasOwnProperty(f) && b.setRequestHeader(f, h[f]);
    return E ? b.send(E) : b.send(), function() {
      b && b.readyState !== 4 && b.abort();
    };
  });
}
function S_(t, e) {
  var n;
  if (!t || typeof t == "string" || O_(t) || R_(t) || x_(t) || T_(t) || w_(t) || M_(t))
    return t;
  if (L_(t))
    return t.buffer;
  if (typeof t == "object")
    return e["content-type"] = (n = e["content-type"]) !== null && n !== void 0 ? n : "application/json;charset=utf-8", JSON.stringify(t);
  throw new TypeError("Unknown body type");
}
var C_ = Object.prototype.toString;
function No(t, e) {
  return C_.call(t) === "[object " + e + "]";
}
function x_(t) {
  return No(t, "ArrayBuffer");
}
function T_(t) {
  return No(t, "File");
}
function w_(t) {
  return No(t, "Blob");
}
function L_(t) {
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView(t);
}
function O_(t) {
  return typeof FormData < "u" && t instanceof FormData;
}
function R_(t) {
  return typeof URLSearchParams < "u" && t instanceof URLSearchParams;
}
function M_(t) {
  return typeof ReadableStream < "u" && t instanceof ReadableStream;
}
let D_ = class {
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
const H_ = new D_("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), P_ = [H_], N_ = P_[0].getUrl();
let zc = class {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? N_;
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
}, U_ = class {
  constructor(e = new zc()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (n) => {
      const r = this.clone();
      return r.middleware = r.middleware.concat(n), r;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((r) => ({ pre: r }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((r) => ({ post: r }))), this.createRequestArgs = ({ url: n, query: r, method: i, headers: a, body: s, responseType: c }) => ({
      url: `${this.configuration.basePath}${n}${r && Object.keys(r).length ? `?${k_(r)}` : ""}`,
      method: i,
      headers: a,
      body: s instanceof FormData ? s : JSON.stringify(s),
      responseType: c ?? "json"
    }), this.rxjsRequest = (n) => Gc(n).pipe(
      Xt((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      jc(
        (r) => Dr(r).pipe(
          Xt((i) => (this.middleware.filter((a) => a.post).forEach((a) => i = a.post(i)), i))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, n) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      Xt((r) => {
        const { status: i, response: a } = r;
        if (i >= 200 && i < 300)
          return (n == null ? void 0 : n.response) === "raw" ? r : a;
        throw r;
      })
    );
  }
};
const nr = (t) => encodeURIComponent(`${t}`), k_ = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((r) => `${nr(e)}=${nr(r)}`).join("&") : `${nr(e)}=${nr(n)}`
).join("&"), mi = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class B_ extends U_ {
  deleteAllSclFileVersions({ id: e, type: n }, r) {
    mi(e, "id", "deleteAllSclFileVersions"), mi(n, "type", "deleteAllSclFileVersions");
    const i = {};
    return this.request({
      url: "/api/scl/{type}/{id}".replace("{id}", nr(e)).replace("{type}", nr(n)),
      method: "DELETE",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  retrieveDataResourceByVersion({ id: e, version: n }, r) {
    mi(e, "id", "retrieveDataResourceByVersion"), mi(n, "version", "retrieveDataResourceByVersion");
    const i = {};
    return this.request({
      url: "/api/scl/{id}/version/{version}".replace("{id}", nr(e)).replace("{version}", nr(n)),
      method: "GET",
      headers: i,
      responseType: "blob"
    }, r == null ? void 0 : r.responseOpts);
  }
  retrieveDataResourceHistory({ id: e }, n) {
    mi(e, "id", "retrieveDataResourceHistory");
    const r = {};
    return this.request({
      url: "/api/scl/{id}/versions".replace("{id}", nr(e)),
      method: "GET",
      headers: r
    }, n == null ? void 0 : n.responseOpts);
  }
  searchForResources({ dataResourceSearch: e }, n) {
    mi(e, "dataResourceSearch", "searchForResources");
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
class Uo {
  constructor(e, n, r, i, a, s, c, l, u) {
    this.uuid = e, this.name = n, this.author = r, this.type = i, this.changedAt = a, this.version = s, this.available = c, this.deleted = l, this.location = u;
  }
  static from(e) {
    return new Uo(
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
class F_ {
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
const V_ = new F_("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), G_ = [V_], j_ = G_[0].getUrl();
class Wc {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? j_;
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
class q_ {
  constructor(e = new Wc()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (n) => {
      const r = this.clone();
      return r.middleware = r.middleware.concat(n), r;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((r) => ({ pre: r }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((r) => ({ post: r }))), this.createRequestArgs = ({ url: n, query: r, method: i, headers: a, body: s, responseType: c }) => ({
      url: `${this.configuration.basePath}${n}${r && Object.keys(r).length ? `?${z_(r)}` : ""}`,
      method: i,
      headers: a,
      body: s instanceof FormData ? s : JSON.stringify(s),
      responseType: c ?? "json"
    }), this.rxjsRequest = (n) => Gc(n).pipe(
      Xt((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      jc(
        (r) => Dr(r).pipe(
          Xt((i) => (this.middleware.filter((a) => a.post).forEach((a) => i = a.post(i)), i))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, n) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      Xt((r) => {
        const { status: i, response: a } = r;
        if (i >= 200 && i < 300)
          return (n == null ? void 0 : n.response) === "raw" ? r : a;
        throw r;
      })
    );
  }
}
const wn = (t) => encodeURIComponent(`${t}`), z_ = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((r) => `${wn(e)}=${wn(r)}`).join("&") : `${wn(e)}=${wn(n)}`
).join("&"), Qn = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class W_ extends q_ {
  assignResourceToLocation({ locationId: e, uuid: n }, r) {
    Qn(e, "locationId", "assignResourceToLocation"), Qn(n, "uuid", "assignResourceToLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/assign".replace("{locationId}", wn(e)).replace("{uuid}", wn(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  createLocation({ location: e }, n) {
    Qn(e, "location", "createLocation");
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
    Qn(e, "locationId", "deleteLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", wn(e)),
      method: "DELETE",
      headers: r
    }, n == null ? void 0 : n.responseOpts);
  }
  getLocation({ locationId: e }, n) {
    Qn(e, "locationId", "getLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", wn(e)),
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
    Qn(e, "locationId", "unassignResourceFromLocation"), Qn(n, "uuid", "unassignResourceFromLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/unassign".replace("{locationId}", wn(e)).replace("{uuid}", wn(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  updateLocation({ locationId: e, location: n }, r) {
    Qn(e, "locationId", "updateLocation"), Qn(n, "location", "updateLocation");
    const i = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", wn(e)),
      method: "PUT",
      headers: i,
      body: n
    }, r == null ? void 0 : r.responseOpts);
  }
}
class ko {
  constructor(e, n, r, i, a) {
    this.uuid = a, this.key = e, this.name = n, this.description = r, this.assignedResources = i;
  }
  static from(e) {
    return new ko(e.key, e.name, e.description, e.assignedResources, e.uuid);
  }
}
class Ii {
  constructor() {
    this.endpoint = "/compas-scl-data-service", this.locationsApiClient = this.createLocationsApiClient(this.endpoint), this.historyApiClient = this.createHistoryApiClient(this.endpoint);
  }
  static getInstance() {
    return Ii.instance || (Ii.instance = new Ii()), Ii.instance;
  }
  getLocations(e) {
    return this.locationsApiClient.getLocations({
      page: e == null ? void 0 : e.page,
      pageSize: e == null ? void 0 : e.pageSize
    }).pipe(
      Xt((n) => n || []),
      Xt((n) => n.map((r) => ko.from(r)))
    );
  }
  assignResourceToLocation(e, n) {
    return this.locationsApiClient.assignResourceToLocation({ locationId: e, uuid: n }).pipe(Xt(() => {
    }));
  }
  unassignResourceFromLocation(e, n) {
    return this.locationsApiClient.unassignResourceFromLocation({ locationId: e, uuid: n }).pipe(Xt(() => {
    }));
  }
  searchResources(e) {
    return this.historyApiClient.searchForResources({
      dataResourceSearch: this.mapToDataResourceSearch(e)
    }).pipe(
      Xt((n) => n.results),
      Xt(
        (n) => n.map((r) => Uo.from(r))
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
    const n = new Wc({
      basePath: e
      // accessToken: authInfo.token,
    });
    return new W_(n);
  }
  createHistoryApiClient(e) {
    const n = new zc({
      basePath: e
      // accessToken: authInfo.token,
    });
    return new B_(n);
  }
}
var $n;
class X_ {
  constructor() {
    Ke(this, $n, Qt([]));
  }
  get store() {
    return Q(this, $n);
  }
  set(e) {
    Q(this, $n).set(e);
  }
  update(e) {
    Q(this, $n).update((n) => n.map((r) => r.uuid === e.uuid ? e : r));
  }
  add(e) {
    Q(this, $n).update((n) => [...n, e]);
  }
  remove(e) {
    Q(this, $n).update((n) => n.filter((r) => r.uuid !== e));
  }
  findById(e) {
    return ju(Q(this, $n)).find((n) => n.uuid === e);
  }
}
$n = new WeakMap();
var K_ = (t, e, n) => {
  var r;
  return (r = e.onChange) == null ? void 0 : r.call(e, e.row, o(n));
}, Z_ = /* @__PURE__ */ pe("<option> </option>"), Y_ = /* @__PURE__ */ pe(`<div style="min-width: 180px"><select><option>—</option><!></select> <style>select {
      width: 100%;
      min-width: 180px;
    }</style></div>`);
function Q_(t, e) {
  we(e, !0);
  let n = p(e, "locations", 19, () => []), r = /* @__PURE__ */ ve(ge(e.value ?? ""));
  xe(() => {
    q(r, e.value ?? "", !0);
  }), xe(() => {
    var l;
    o(r) !== (e.value ?? "") && ((l = e.onChange) == null || l.call(e, e.row, o(r)));
  });
  var i = Y_(), a = Ie(i);
  a.__change = [K_, e, r];
  var s = Ie(a);
  s.value = s.__value = "";
  var c = _e(s);
  er(c, 17, n, (l) => l.value, (l, u) => {
    var d = Z_(), h = Ie(d), f = {};
    He(() => {
      ht(h, o(u).label), f !== (f = o(u).value) && (d.value = (d.__value = o(u).value) ?? "");
    }), w(l, d);
  }), Sf(a, () => o(r), (l) => q(r, l)), w(t, i), Le();
}
hn(["change"]);
Ov({ en: sm, de: zv });
var J_ = /* @__PURE__ */ pe('<div class="app-container svelte-1lw4l1e"><!> <!></div>');
function $_(t, e) {
  we(e, !0);
  const n = () => Fn(Lv, "$_", r), [r, i] = lr(), a = Ii.getInstance();
  let s = /* @__PURE__ */ ve(ge([])), c = "", l = /* @__PURE__ */ ve(!0), u = /* @__PURE__ */ ve("");
  const d = new wc(), h = d.pipe(
    l_(150),
    Xt(() => _(o(f))),
    u_((I, T) => JSON.stringify(I) === JSON.stringify(T)),
    Wl(() => {
      q(l, !0);
    }),
    f_((I) => a.searchResources(I).pipe(
      Wl((T) => {
        m.set(T.filter((A) => A.location !== c));
      }),
      d_(() => {
        q(l, !1);
      })
    ))
  );
  ot(() => {
    const I = h.subscribe();
    return a.getLocations().subscribe({
      next: (T) => {
        q(s, T.map((A) => ({ label: A.name, value: A.uuid })), !0), q(f, o(
          f
          // populate location filter options
        ).map((A) => A.key === "location" ? { ...A, options: o(s) } : A), !0);
      }
    }), d.next(), () => I.unsubscribe();
  });
  let f = /* @__PURE__ */ ve(ge([
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
  const m = new X_();
  function v(I) {
    return new Date(I).toLocaleDateString();
  }
  function g(I) {
    var T;
    return !o(s) || !I ? I || "" : ((T = o(s).find((A) => A.value === I)) == null ? void 0 : T.label) ?? I;
  }
  function _(I) {
    const T = {
      uuid: null,
      type: null,
      name: null,
      location: null,
      author: null,
      from: null,
      to: null
    };
    return I.forEach((A) => {
      if (A.value) {
        if (A.type === "date") {
          const x = new Date(A.value);
          A.key === "from" && (T.from = x.toISOString()), A.key === "to" && (x.setHours(23, 59, 59, 999), T.to = x.toISOString());
          return;
        }
        A.key in T && (T[A.key] = A.value);
      }
    }), o(u) && o(u).trim() !== "" && (T.name = o(u).trim()), T;
  }
  function S(I, T) {
    const A = I.location, x = T || null;
    if (A === x)
      return;
    const D = { ...I, location: x };
    m.update(D), (x ? a.assignResourceToLocation(x, I.uuid) : a.unassignResourceFromLocation(A ?? "", I.uuid)).subscribe({
      next: () => {
        d.next();
      },
      error: () => {
        const k = { ...I, location: A };
        m.update(k);
      }
    });
  }
  let E = /* @__PURE__ */ fe(() => [
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
      cellRenderer: Q_,
      cellRendererProps: {
        locations: o(s),
        onChange: S
      },
      filterValueGetter: (I) => g(I.location)
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
      valueFormatter: v
    }
  ]);
  xe(() => {
  });
  var C = J_(), b = Ie(C);
  hb(b, {
    searchLabel: "Search name...",
    onFilterChange: () => d.next(null),
    onSearchInput: () => d.next(null),
    get filters() {
      return o(f);
    },
    set filters(I) {
      q(f, I, !0);
    },
    get searchText() {
      return o(u);
    },
    set searchText(I) {
      q(u, I, !0);
    }
  });
  var y = _e(b, 2);
  {
    let I = /* @__PURE__ */ fe(() => !o(l)), T = /* @__PURE__ */ fe(() => n()("search"));
    Tb(y, {
      get columnDefs() {
        return o(E);
      },
      get loadingDone() {
        return o(I);
      },
      get store() {
        return m;
      },
      get searchInputLabel() {
        return o(T);
      }
    });
  }
  w(t, C), Le(), i();
}
const Xc = "location-viewer", Kc = "0.0.1";
var eI = /* @__PURE__ */ pe('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function tI(t, e) {
  we(e, !0);
  let n = p(e, "dev", 3, !1);
  var r = eI(), i = Z(r);
  {
    var a = (l) => {
      $_(l, {});
    };
    ne(i, (l) => {
      (e.doc || n()) && l(a);
    });
  }
  var s = _e(i, 2), c = _e(s, 2);
  He(() => {
    nl(s, Xc), nl(c, Kc);
  }), w(t, r), Le();
}
var Li;
class uI extends HTMLElement {
  constructor() {
    super();
    Ke(this, Li);
    Me(this, Li, /* @__PURE__ */ ve(ge({ doc: void 0, editCount: void 0 })));
  }
  get props() {
    return o(Q(this, Li));
  }
  set props(n) {
    q(Q(this, Li), n, !0);
  }
  connectedCallback() {
    var r;
    this.attachShadow({ mode: "open" }), this.props.doc = this._doc, this.props.editCount = this.editCount, vf(tI, { target: this.shadowRoot, props: this.props });
    const n = nI();
    (r = this.shadowRoot) == null || r.appendChild(n);
  }
  set doc(n) {
    this._doc = n, this.props.doc = n;
  }
  set editCount(n) {
    this.props.editCount = n;
  }
}
Li = new WeakMap();
function nI() {
  const t = `${Xc}-v${Kc}-style`, e = rI(), n = document.createElement("link");
  return n.rel = "stylesheet", n.type = "text/css", n.href = e, n.id = t, n;
}
function rI() {
  const t = new URL(import.meta.url), e = t.origin, n = t.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, n, "style.css"].filter(Boolean).join("/");
}
export {
  uI as default
};
