var Nd = Object.defineProperty;
var pl = (t) => {
  throw TypeError(t);
};
var Ud = (t, e, n) => e in t ? Nd(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var yi = (t, e, n) => Ud(t, typeof e != "symbol" ? e + "" : e, n), Wo = (t, e, n) => e.has(t) || pl("Cannot " + n);
var $ = (t, e, n) => (Wo(t, e, "read from private field"), n ? n.call(t) : e.get(t)), Ye = (t, e, n) => e.has(t) ? pl("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), Ne = (t, e, n, r) => (Wo(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), jt = (t, e, n) => (Wo(t, e, "access private method"), n);
const Pt = Symbol(), Hd = "http://www.w3.org/1999/xhtml", Fd = "http://www.w3.org/2000/svg", Bd = "@attach", Lu = !1;
var Eo = Array.isArray, kd = Array.prototype.indexOf, Fs = Array.from, so = Object.defineProperty, Cr = Object.getOwnPropertyDescriptor, Ou = Object.getOwnPropertyDescriptors, Vd = Object.prototype, Gd = Array.prototype, Bs = Object.getPrototypeOf, ml = Object.isExtensible;
function da(t) {
  return typeof t == "function";
}
const me = () => {
};
function Ru(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function Mu() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
const tn = 2, ks = 4, Vs = 8, li = 16, sr = 32, ui = 64, Gs = 128, Tn = 256, lo = 512, zt = 1024, bn = 2048, Dr = 4096, Un = 8192, ci = 16384, js = 32768, di = 65536, gl = 1 << 17, jd = 1 << 18, na = 1 << 19, qd = 1 << 20, cs = 1 << 21, Ao = 1 << 22, ri = 1 << 23, zn = Symbol("$state"), Du = Symbol("legacy props"), Wd = Symbol(""), Ci = new class extends Error {
  constructor() {
    super(...arguments);
    yi(this, "name", "StaleReactionError");
    yi(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function qs(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Kd() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function zd(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Xd() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Yd(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Zd() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Qd(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Jd() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function $d() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ef() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function tf() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function nf() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function rf() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let af = !1;
function Pu(t) {
  return t === this.v;
}
function Ws(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Nu(t) {
  return !Ws(t, this.v);
}
let ra = !1, of = !1;
function sf() {
  ra = !0;
}
let lt = null;
function Ki(t) {
  lt = t;
}
function se(t) {
  return (
    /** @type {T} */
    Uu().get(t)
  );
}
function ne(t, e) {
  return Uu().set(t, e), e;
}
function Oe(t, e = !1, n) {
  lt = {
    p: lt,
    c: null,
    e: null,
    s: t,
    x: null,
    l: ra && !e ? { s: null, u: null, $: [] } : null
  };
}
function Re(t) {
  var e = (
    /** @type {ComponentContext} */
    lt
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      Ju(r);
  }
  return t !== void 0 && (e.x = t), lt = e.p, t ?? /** @type {T} */
  {};
}
function Fa() {
  return !ra || lt !== null && lt.l === null;
}
function Uu(t) {
  return lt === null && qs(), lt.c ?? (lt.c = new Map(lf(lt) || void 0));
}
function lf(t) {
  let e = t.p;
  for (; e !== null; ) {
    const n = e.c;
    if (n !== null)
      return n;
    e = e.p;
  }
  return null;
}
let Zr = [];
function Hu() {
  var t = Zr;
  Zr = [], Ru(t);
}
function Lr(t) {
  if (Zr.length === 0 && !Ca) {
    var e = Zr;
    queueMicrotask(() => {
      e === Zr && Hu();
    });
  }
  Zr.push(t);
}
function uf() {
  for (; Zr.length > 0; )
    Hu();
}
const cf = /* @__PURE__ */ new WeakMap();
function Fu(t) {
  var e = Ge;
  if (e === null)
    return Ve.f |= ri, t;
  if (e.f & js)
    zi(t, e);
  else {
    if (!(e.f & Gs))
      throw !e.parent && t instanceof Error && Bu(t), t;
    e.b.error(t);
  }
}
function zi(t, e) {
  for (; e !== null; ) {
    if (e.f & Gs)
      try {
        e.b.error(t);
        return;
      } catch (n) {
        t = n;
      }
    e = e.parent;
  }
  throw t instanceof Error && Bu(t), t;
}
function Bu(t) {
  const e = cf.get(t);
  e && (so(t, "message", {
    value: e.message
  }), so(t, "stack", {
    value: e.stack
  }));
}
const Ka = /* @__PURE__ */ new Set();
let it = null, to = null, Bt = null, ds = /* @__PURE__ */ new Set(), Wn = [], Co = null, fs = !1, Ca = !1;
var Hi, Fi, Jr, Pa, Bi, ki, $r, Vi, Na, Ua, wn, hs, no, vs;
const yo = class yo {
  constructor() {
    Ye(this, wn);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    yi(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    Ye(this, Hi, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    Ye(this, Fi, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    Ye(this, Jr, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    Ye(this, Pa, null);
    /**
     * Async effects inside a newly-created `<svelte:boundary>`
     * — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    Ye(this, Bi, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    Ye(this, ki, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    Ye(this, $r, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    Ye(this, Vi, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    Ye(this, Na, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    Ye(this, Ua, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    yi(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var a;
    Wn = [], to = null, this.apply();
    for (const o of e)
      jt(this, wn, hs).call(this, o);
    if ($(this, Jr) === 0) {
      var n = Bt;
      jt(this, wn, vs).call(this);
      var r = $(this, ki), i = $(this, $r);
      Ne(this, ki, []), Ne(this, $r, []), Ne(this, Vi, []), to = this, it = null, Bt = n, bl(r), bl(i), to = null, (a = $(this, Pa)) == null || a.resolve();
    } else
      jt(this, wn, no).call(this, $(this, ki)), jt(this, wn, no).call(this, $(this, $r)), jt(this, wn, no).call(this, $(this, Vi));
    Bt = null;
    for (const o of $(this, Bi))
      Ta(o);
    Ne(this, Bi, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    $(this, Hi).has(e) || $(this, Hi).set(e, n), this.current.set(e, e.v), Bt == null || Bt.set(e, e.v);
  }
  activate() {
    it = this;
  }
  deactivate() {
    it = null, Bt = null;
  }
  flush() {
    if (Wn.length > 0) {
      if (this.activate(), ku(), it !== null && it !== this)
        return;
    } else $(this, Jr) === 0 && jt(this, wn, vs).call(this);
    this.deactivate();
    for (const e of ds)
      if (ds.delete(e), e(), it !== null)
        break;
  }
  increment() {
    Ne(this, Jr, $(this, Jr) + 1);
  }
  decrement() {
    Ne(this, Jr, $(this, Jr) - 1);
    for (const e of $(this, Na))
      $t(e, bn), oi(e);
    for (const e of $(this, Ua))
      $t(e, Dr), oi(e);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    $(this, Fi).add(e);
  }
  settled() {
    return ($(this, Pa) ?? Ne(this, Pa, Mu())).promise;
  }
  static ensure() {
    if (it === null) {
      const e = it = new yo();
      Ka.add(it), Ca || yo.enqueue(() => {
        it === e && e.flush();
      });
    }
    return it;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    Lr(e);
  }
  apply() {
  }
};
Hi = new WeakMap(), Fi = new WeakMap(), Jr = new WeakMap(), Pa = new WeakMap(), Bi = new WeakMap(), ki = new WeakMap(), $r = new WeakMap(), Vi = new WeakMap(), Na = new WeakMap(), Ua = new WeakMap(), wn = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
hs = function(e) {
  var u;
  e.f ^= zt;
  for (var n = e.first; n !== null; ) {
    var r = n.f, i = (r & (sr | ui)) !== 0, a = i && (r & zt) !== 0, o = a || (r & Un) !== 0 || this.skipped_effects.has(n);
    if (!o && n.fn !== null) {
      i ? n.f ^= zt : r & ks ? $(this, $r).push(n) : r & zt || (r & Ao && ((u = n.b) != null && u.is_pending()) ? $(this, Bi).push(n) : Oo(n) && (n.f & li && $(this, Vi).push(n), Ta(n)));
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
no = function(e) {
  for (const n of e)
    (n.f & bn ? $(this, Na) : $(this, Ua)).push(n), $t(n, zt);
  e.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
vs = function() {
  var e;
  for (const n of $(this, Fi))
    n();
  if ($(this, Fi).clear(), Ka.size > 1) {
    $(this, Hi).clear();
    let n = !0;
    for (const r of Ka) {
      if (r === this) {
        n = !1;
        continue;
      }
      const i = [];
      for (const [o, c] of this.current) {
        if (r.current.has(o))
          if (n && c !== r.current.get(o))
            r.current.set(o, c);
          else
            continue;
        i.push(o);
      }
      if (i.length === 0)
        continue;
      const a = [...r.current.keys()].filter((o) => !this.current.has(o));
      if (a.length > 0) {
        for (const o of i)
          Vu(o, a);
        if (Wn.length > 0) {
          it = r, r.apply();
          for (const o of Wn)
            jt(e = r, wn, hs).call(e, o);
          Wn = [], r.deactivate();
        }
      }
    }
    it = null;
  }
  Ka.delete(this);
};
let or = yo;
function df(t) {
  var e = Ca;
  Ca = !0;
  try {
    for (var n; ; ) {
      if (uf(), Wn.length === 0 && (it == null || it.flush(), Wn.length === 0))
        return Co = null, /** @type {T} */
        n;
      ku();
    }
  } finally {
    Ca = e;
  }
}
function ku() {
  var t = Pi;
  fs = !0;
  try {
    var e = 0;
    for (El(!0); Wn.length > 0; ) {
      var n = or.ensure();
      if (e++ > 1e3) {
        var r, i;
        ff();
      }
      n.process(Wn), Sr.clear();
    }
  } finally {
    fs = !1, El(t), Co = null;
  }
}
function ff() {
  try {
    Zd();
  } catch (t) {
    zi(t, Co);
  }
}
let rr = null;
function bl(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if (!(r.f & (ci | Un)) && Oo(r) && (rr = [], Ta(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? tc(r) : r.fn = null), (rr == null ? void 0 : rr.length) > 0)) {
        Sr.clear();
        for (const i of rr)
          Ta(i);
        rr = [];
      }
    }
    rr = null;
  }
}
function Vu(t, e) {
  if (t.reactions !== null)
    for (const n of t.reactions) {
      const r = n.f;
      r & tn ? Vu(
        /** @type {Derived} */
        n,
        e
      ) : r & (Ao | li) && Gu(n, e) && ($t(n, bn), oi(
        /** @type {Effect} */
        n
      ));
    }
}
function Gu(t, e) {
  if (t.deps !== null) {
    for (const n of t.deps)
      if (e.includes(n) || n.f & tn && Gu(
        /** @type {Derived} */
        n,
        e
      ))
        return !0;
  }
  return !1;
}
function oi(t) {
  for (var e = Co = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (fs && e === Ge && n & li)
      return;
    if (n & (ui | sr)) {
      if (!(n & zt)) return;
      e.f ^= zt;
    }
  }
  Wn.push(e);
}
function hf(t) {
  let e = 0, n = si(0), r;
  return () => {
    Rf() && (s(n), wo(() => (e === 0 && (r = Ur(() => t(() => Sa(n)))), e += 1, () => {
      Lr(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, Sa(n));
      });
    })));
  };
}
var vf = di | na | Gs;
function pf(t, e, n) {
  new mf(t, e, n);
}
var Dn, Cn, Hs, Gn, ei, jn, Sn, sn, qn, yr, ti, Ir, ni, _r, Io, _o, en, gf, bf, ro, io, ps;
class mf {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    Ye(this, en);
    /** @type {Boundary | null} */
    yi(this, "parent");
    Ye(this, Dn, !1);
    /** @type {TemplateNode} */
    Ye(this, Cn);
    /** @type {TemplateNode | null} */
    Ye(this, Hs, null);
    /** @type {BoundaryProps} */
    Ye(this, Gn);
    /** @type {((anchor: Node) => void)} */
    Ye(this, ei);
    /** @type {Effect} */
    Ye(this, jn);
    /** @type {Effect | null} */
    Ye(this, Sn, null);
    /** @type {Effect | null} */
    Ye(this, sn, null);
    /** @type {Effect | null} */
    Ye(this, qn, null);
    /** @type {DocumentFragment | null} */
    Ye(this, yr, null);
    Ye(this, ti, 0);
    Ye(this, Ir, 0);
    Ye(this, ni, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    Ye(this, _r, null);
    Ye(this, Io, () => {
      $(this, _r) && Xi($(this, _r), $(this, ti));
    });
    Ye(this, _o, hf(() => (Ne(this, _r, si($(this, ti))), () => {
      Ne(this, _r, null);
    })));
    Ne(this, Cn, e), Ne(this, Gn, n), Ne(this, ei, r), this.parent = /** @type {Effect} */
    Ge.b, Ne(this, Dn, !!$(this, Gn).pending), Ne(this, jn, Nr(() => {
      Ge.b = this;
      {
        try {
          Ne(this, Sn, qt(() => r($(this, Cn))));
        } catch (i) {
          this.error(i);
        }
        $(this, Ir) > 0 ? jt(this, en, io).call(this) : Ne(this, Dn, !1);
      }
    }, vf));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return $(this, Dn) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!$(this, Gn).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    jt(this, en, ps).call(this, e), Ne(this, ti, $(this, ti) + e), ds.add($(this, Io));
  }
  get_effect_pending() {
    return $(this, _o).call(this), s(
      /** @type {Source<number>} */
      $(this, _r)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = $(this, Gn).onerror;
    let r = $(this, Gn).failed;
    if ($(this, ni) || !n && !r)
      throw e;
    $(this, Sn) && (kt($(this, Sn)), Ne(this, Sn, null)), $(this, sn) && (kt($(this, sn)), Ne(this, sn, null)), $(this, qn) && (kt($(this, qn)), Ne(this, qn, null));
    var i = !1, a = !1;
    const o = () => {
      if (i) {
        rf();
        return;
      }
      i = !0, a && tf(), or.ensure(), Ne(this, ti, 0), $(this, qn) !== null && xr($(this, qn), () => {
        Ne(this, qn, null);
      }), Ne(this, Dn, this.has_pending_snippet()), Ne(this, Sn, jt(this, en, ro).call(this, () => (Ne(this, ni, !1), qt(() => $(this, ei).call(this, $(this, Cn)))))), $(this, Ir) > 0 ? jt(this, en, io).call(this) : Ne(this, Dn, !1);
    };
    var c = Ve;
    try {
      un(null), a = !0, n == null || n(e, o), a = !1;
    } catch (l) {
      zi(l, $(this, jn) && $(this, jn).parent);
    } finally {
      un(c);
    }
    r && Lr(() => {
      Ne(this, qn, jt(this, en, ro).call(this, () => {
        Ne(this, ni, !0);
        try {
          return qt(() => {
            r(
              $(this, Cn),
              () => e,
              () => o
            );
          });
        } catch (l) {
          return zi(
            l,
            /** @type {Effect} */
            $(this, jn).parent
          ), null;
        } finally {
          Ne(this, ni, !1);
        }
      }));
    });
  }
}
Dn = new WeakMap(), Cn = new WeakMap(), Hs = new WeakMap(), Gn = new WeakMap(), ei = new WeakMap(), jn = new WeakMap(), Sn = new WeakMap(), sn = new WeakMap(), qn = new WeakMap(), yr = new WeakMap(), ti = new WeakMap(), Ir = new WeakMap(), ni = new WeakMap(), _r = new WeakMap(), Io = new WeakMap(), _o = new WeakMap(), en = new WeakSet(), gf = function() {
  try {
    Ne(this, Sn, qt(() => $(this, ei).call(this, $(this, Cn))));
  } catch (e) {
    this.error(e);
  }
  Ne(this, Dn, !1);
}, bf = function() {
  const e = $(this, Gn).pending;
  e && (Ne(this, sn, qt(() => e($(this, Cn)))), or.enqueue(() => {
    Ne(this, Sn, jt(this, en, ro).call(this, () => (or.ensure(), qt(() => $(this, ei).call(this, $(this, Cn)))))), $(this, Ir) > 0 ? jt(this, en, io).call(this) : (xr(
      /** @type {Effect} */
      $(this, sn),
      () => {
        Ne(this, sn, null);
      }
    ), Ne(this, Dn, !1));
  }));
}, /**
 * @param {() => Effect | null} fn
 */
ro = function(e) {
  var n = Ge, r = Ve, i = lt;
  Yn($(this, jn)), un($(this, jn)), Ki($(this, jn).ctx);
  try {
    return e();
  } catch (a) {
    return Fu(a), null;
  } finally {
    Yn(n), un(r), Ki(i);
  }
}, io = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    $(this, Gn).pending
  );
  $(this, Sn) !== null && (Ne(this, yr, document.createDocumentFragment()), yf($(this, Sn), $(this, yr))), $(this, sn) === null && Ne(this, sn, qt(() => e($(this, Cn))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
ps = function(e) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && jt(n = this.parent, en, ps).call(n, e);
    return;
  }
  Ne(this, Ir, $(this, Ir) + e), $(this, Ir) === 0 && (Ne(this, Dn, !1), $(this, sn) && xr($(this, sn), () => {
    Ne(this, sn, null);
  }), $(this, yr) && ($(this, Cn).before($(this, yr)), Ne(this, yr, null)), Lr(() => {
    or.ensure().flush();
  }));
};
function yf(t, e) {
  for (var n = t.nodes_start, r = t.nodes_end; n !== null; ) {
    var i = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ba(n)
    );
    e.append(n), n = i;
  }
}
function ju(t, e, n) {
  const r = Fa() ? So : Ks;
  if (e.length === 0) {
    n(t.map(r));
    return;
  }
  var i = it, a = (
    /** @type {Effect} */
    Ge
  ), o = If();
  Promise.all(e.map((c) => /* @__PURE__ */ _f(c))).then((c) => {
    o();
    try {
      n([...t.map(r), ...c]);
    } catch (l) {
      a.f & ci || zi(l, a);
    }
    i == null || i.deactivate(), ms();
  }).catch((c) => {
    zi(c, a);
  });
}
function If() {
  var t = Ge, e = Ve, n = lt, r = it;
  return function() {
    Yn(t), un(e), Ki(n), r == null || r.activate();
  };
}
function ms() {
  Yn(null), un(null), Ki(null);
}
// @__NO_SIDE_EFFECTS__
function So(t) {
  var e = tn | bn, n = Ve !== null && Ve.f & tn ? (
    /** @type {Derived} */
    Ve
  ) : null;
  return Ge === null || n !== null && n.f & Tn ? e |= Tn : Ge.f |= na, {
    ctx: lt,
    deps: null,
    effects: null,
    equals: Pu,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Pt
    ),
    wv: 0,
    parent: n ?? Ge,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function _f(t, e) {
  let n = (
    /** @type {Effect | null} */
    Ge
  );
  n === null && Kd();
  var r = (
    /** @type {Boundary} */
    n.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = si(
    /** @type {V} */
    Pt
  ), o = !Ve, c = /* @__PURE__ */ new Map();
  return Df(() => {
    var f;
    var l = Mu();
    i = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(ms);
    } catch (v) {
      l.reject(v), ms();
    }
    var u = (
      /** @type {Batch} */
      it
    ), d = r.is_pending();
    o && (r.update_pending_count(1), d || (u.increment(), (f = c.get(u)) == null || f.reject(Ci), c.delete(u), c.set(u, l)));
    const h = (v, p = void 0) => {
      if (d || u.activate(), p)
        p !== Ci && (a.f |= ri, Xi(a, p));
      else {
        a.f & ri && (a.f ^= ri), Xi(a, v);
        for (const [g, I] of c) {
          if (c.delete(g), g === u) break;
          I.reject(Ci);
        }
      }
      o && (r.update_pending_count(-1), d || u.decrement());
    };
    l.promise.then(h, (v) => h(null, v || "unknown"));
  }), To(() => {
    for (const l of c.values())
      l.reject(Ci);
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
function ae(t) {
  const e = /* @__PURE__ */ So(t);
  return ic(e), e;
}
// @__NO_SIDE_EFFECTS__
function Ks(t) {
  const e = /* @__PURE__ */ So(t);
  return e.equals = Nu, e;
}
function qu(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      kt(
        /** @type {Effect} */
        e[n]
      );
  }
}
function Ef(t) {
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
function zs(t) {
  var e, n = Ge;
  Yn(Ef(t));
  try {
    qu(t), e = lc(t);
  } finally {
    Yn(n);
  }
  return e;
}
function Wu(t) {
  var e = zs(t);
  if (t.equals(e) || (t.v = e, t.wv = oc()), !fi)
    if (Bt !== null)
      Bt.set(t, t.v);
    else {
      var n = (Er || t.f & Tn) && t.deps !== null ? Dr : zt;
      $t(t, n);
    }
}
const Sr = /* @__PURE__ */ new Map();
function si(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Pu,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function be(t, e) {
  const n = si(t);
  return ic(n), n;
}
// @__NO_SIDE_EFFECTS__
function Ku(t, e = !1, n = !0) {
  var i;
  const r = si(t);
  return e || (r.equals = Nu), ra && n && lt !== null && lt.l !== null && ((i = lt.l).s ?? (i.s = [])).push(r), r;
}
function Q(t, e, n = !1) {
  Ve !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Pn || Ve.f & gl) && Fa() && Ve.f & (tn | li | Ao | gl) && !(Jt != null && Jt.includes(t)) && ef();
  let r = n ? ye(e) : e;
  return Xi(t, r);
}
function Xi(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    fi ? Sr.set(t, e) : Sr.set(t, n), t.v = e;
    var r = or.ensure();
    r.capture(t, n), t.f & tn && (t.f & bn && zs(
      /** @type {Derived} */
      t
    ), $t(t, t.f & Tn ? Dr : zt)), t.wv = oc(), zu(t, bn), Fa() && Ge !== null && Ge.f & zt && !(Ge.f & (sr | ui)) && (An === null ? Uf([t]) : An.push(t));
  }
  return e;
}
function Sa(t) {
  Q(t, t.v + 1);
}
function zu(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = Fa(), i = n.length, a = 0; a < i; a++) {
      var o = n[a], c = o.f;
      if (!(!r && o === Ge)) {
        var l = (c & bn) === 0;
        l && $t(o, e), c & tn ? zu(
          /** @type {Derived} */
          o,
          Dr
        ) : l && (c & li && rr !== null && rr.push(
          /** @type {Effect} */
          o
        ), oi(
          /** @type {Effect} */
          o
        ));
      }
    }
}
function ye(t) {
  if (typeof t != "object" || t === null || zn in t)
    return t;
  const e = Bs(t);
  if (e !== Vd && e !== Gd)
    return t;
  var n = /* @__PURE__ */ new Map(), r = Eo(t), i = /* @__PURE__ */ be(0), a = ii, o = (c) => {
    if (ii === a)
      return c();
    var l = Ve, u = ii;
    un(null), Cl(a);
    var d = c();
    return un(l), Cl(u), d;
  };
  return r && n.set("length", /* @__PURE__ */ be(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(c, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Jd();
        var d = n.get(l);
        return d === void 0 ? d = o(() => {
          var h = /* @__PURE__ */ be(u.value);
          return n.set(l, h), h;
        }) : Q(d, u.value, !0), !0;
      },
      deleteProperty(c, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in c) {
            const d = o(() => /* @__PURE__ */ be(Pt));
            n.set(l, d), Sa(i);
          }
        } else
          Q(u, Pt), Sa(i);
        return !0;
      },
      get(c, l, u) {
        var v;
        if (l === zn)
          return t;
        var d = n.get(l), h = l in c;
        if (d === void 0 && (!h || (v = Cr(c, l)) != null && v.writable) && (d = o(() => {
          var p = ye(h ? c[l] : Pt), g = /* @__PURE__ */ be(p);
          return g;
        }), n.set(l, d)), d !== void 0) {
          var f = s(d);
          return f === Pt ? void 0 : f;
        }
        return Reflect.get(c, l, u);
      },
      getOwnPropertyDescriptor(c, l) {
        var u = Reflect.getOwnPropertyDescriptor(c, l);
        if (u && "value" in u) {
          var d = n.get(l);
          d && (u.value = s(d));
        } else if (u === void 0) {
          var h = n.get(l), f = h == null ? void 0 : h.v;
          if (h !== void 0 && f !== Pt)
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
        if (l === zn)
          return !0;
        var u = n.get(l), d = u !== void 0 && u.v !== Pt || Reflect.has(c, l);
        if (u !== void 0 || Ge !== null && (!d || (f = Cr(c, l)) != null && f.writable)) {
          u === void 0 && (u = o(() => {
            var v = d ? ye(c[l]) : Pt, p = /* @__PURE__ */ be(v);
            return p;
          }), n.set(l, u));
          var h = s(u);
          if (h === Pt)
            return !1;
        }
        return d;
      },
      set(c, l, u, d) {
        var x;
        var h = n.get(l), f = l in c;
        if (r && l === "length")
          for (var v = u; v < /** @type {Source<number>} */
          h.v; v += 1) {
            var p = n.get(v + "");
            p !== void 0 ? Q(p, Pt) : v in c && (p = o(() => /* @__PURE__ */ be(Pt)), n.set(v + "", p));
          }
        if (h === void 0)
          (!f || (x = Cr(c, l)) != null && x.writable) && (h = o(() => /* @__PURE__ */ be(void 0)), Q(h, ye(u)), n.set(l, h));
        else {
          f = h.v !== Pt;
          var g = o(() => ye(u));
          Q(h, g);
        }
        var I = Reflect.getOwnPropertyDescriptor(c, l);
        if (I != null && I.set && I.set.call(d, u), !f) {
          if (r && typeof l == "string") {
            var A = (
              /** @type {Source<number>} */
              n.get("length")
            ), S = Number(l);
            Number.isInteger(S) && S >= A.v && Q(A, S + 1);
          }
          Sa(i);
        }
        return !0;
      },
      ownKeys(c) {
        s(i);
        var l = Reflect.ownKeys(c).filter((h) => {
          var f = n.get(h);
          return f === void 0 || f.v !== Pt;
        });
        for (var [u, d] of n)
          d.v !== Pt && !(u in c) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        $d();
      }
    }
  );
}
function yl(t) {
  try {
    if (t !== null && typeof t == "object" && zn in t)
      return t[zn];
  } catch {
  }
  return t;
}
function Af(t, e) {
  return Object.is(yl(t), yl(e));
}
var Il, Xu, Yu, Zu, Qu;
function Cf() {
  if (Il === void 0) {
    Il = window, Xu = document, Yu = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    Zu = Cr(e, "firstChild").get, Qu = Cr(e, "nextSibling").get, ml(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), ml(n) && (n.__t = void 0);
  }
}
function Pr(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Yi(t) {
  return Zu.call(t);
}
// @__NO_SIDE_EFFECTS__
function Ba(t) {
  return Qu.call(t);
}
function Ie(t, e) {
  return /* @__PURE__ */ Yi(t);
}
function X(t, e = !1) {
  {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Yi(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Ba(n) : n;
  }
}
function Ee(t, e = 1, n = !1) {
  let r = t;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ba(r);
  return r;
}
function Sf(t) {
  t.textContent = "";
}
function Xs() {
  return !1;
}
function xf(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, Lr(() => {
      document.activeElement === n && t.focus();
    });
  }
}
let _l = !1;
function Tf() {
  _l || (_l = !0, document.addEventListener(
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
function xo(t) {
  var e = Ve, n = Ge;
  un(null), Yn(null);
  try {
    return t();
  } finally {
    un(e), Yn(n);
  }
}
function wf(t, e, n, r = n) {
  t.addEventListener(e, () => xo(n));
  const i = t.__on_r;
  i ? t.__on_r = () => {
    i(), r(!0);
  } : t.__on_r = () => r(!0), Tf();
}
function Lf(t) {
  Ge === null && Ve === null && Yd(), Ve !== null && Ve.f & Tn && Ge === null && Xd(), fi && zd();
}
function Of(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function lr(t, e, n, r = !0) {
  var i = Ge;
  i !== null && i.f & Un && (t |= Un);
  var a = {
    ctx: lt,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | bn,
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
      Ta(a), a.f |= js;
    } catch (l) {
      throw kt(a), l;
    }
  else e !== null && oi(a);
  if (r) {
    var o = a;
    if (n && o.deps === null && o.teardown === null && o.nodes_start === null && o.first === o.last && // either `null`, or a singular child
    !(o.f & na) && (o = o.first), o !== null && (o.parent = i, i !== null && Of(o, i), Ve !== null && Ve.f & tn && !(t & ui))) {
      var c = (
        /** @type {Derived} */
        Ve
      );
      (c.effects ?? (c.effects = [])).push(o);
    }
  }
  return a;
}
function Rf() {
  return Ve !== null && !Pn;
}
function To(t) {
  const e = lr(Vs, null, !1);
  return $t(e, zt), e.teardown = t, e;
}
function Te(t) {
  Lf();
  var e = (
    /** @type {Effect} */
    Ge.f
  ), n = !Ve && (e & sr) !== 0 && (e & js) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      lt
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return Ju(t);
}
function Ju(t) {
  return lr(ks | qd, t, !1);
}
function Mf(t) {
  or.ensure();
  const e = lr(ui | na, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? xr(e, () => {
      kt(e), r(void 0);
    }) : (kt(e), r(void 0));
  });
}
function ka(t) {
  return lr(ks, t, !1);
}
function Df(t) {
  return lr(Ao | na, t, !0);
}
function wo(t, e = 0) {
  return lr(Vs | e, t, !0);
}
function Fe(t, e = [], n = []) {
  ju(e, n, (r) => {
    lr(Vs, () => t(...r.map(s)), !0);
  });
}
function Nr(t, e = 0) {
  var n = lr(li | e, t, !0);
  return n;
}
function qt(t, e = !0) {
  return lr(sr | na, t, !0, e);
}
function $u(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = fi, r = Ve;
    Al(!0), un(null);
    try {
      e.call(null);
    } finally {
      Al(n), un(r);
    }
  }
}
function ec(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && xo(() => {
      i.abort(Ci);
    });
    var r = n.next;
    n.f & ui ? n.parent = null : kt(n, e), n = r;
  }
}
function Pf(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    e.f & sr || kt(e), e = n;
  }
}
function kt(t, e = !0) {
  var n = !1;
  (e || t.f & jd) && t.nodes_start !== null && t.nodes_end !== null && (Nf(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), ec(t, e && !n), uo(t, 0), $t(t, ci);
  var r = t.transitions;
  if (r !== null)
    for (const a of r)
      a.stop();
  $u(t);
  var i = t.parent;
  i !== null && i.first !== null && tc(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function Nf(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ba(t)
    );
    t.remove(), t = n;
  }
}
function tc(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function xr(t, e) {
  var n = [];
  Ys(t, n, !0), nc(n, () => {
    kt(t), e && e();
  });
}
function nc(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var i of t)
      i.out(r);
  } else
    e();
}
function Ys(t, e, n) {
  if (!(t.f & Un)) {
    if (t.f ^= Un, t.transitions !== null)
      for (const o of t.transitions)
        (o.is_global || n) && e.push(o);
    for (var r = t.first; r !== null; ) {
      var i = r.next, a = (r.f & di) !== 0 || (r.f & sr) !== 0;
      Ys(r, e, a ? n : !1), r = i;
    }
  }
}
function Lo(t) {
  rc(t, !0);
}
function rc(t, e) {
  if (t.f & Un) {
    t.f ^= Un, t.f & zt || ($t(t, bn), oi(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & di) !== 0 || (n.f & sr) !== 0;
      rc(n, i ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || e) && a.in();
  }
}
let Pi = !1;
function El(t) {
  Pi = t;
}
let fi = !1;
function Al(t) {
  fi = t;
}
let Ve = null, Pn = !1;
function un(t) {
  Ve = t;
}
let Ge = null;
function Yn(t) {
  Ge = t;
}
let Jt = null;
function ic(t) {
  Ve !== null && (Jt === null ? Jt = [t] : Jt.push(t));
}
let Qt = null, pn = 0, An = null;
function Uf(t) {
  An = t;
}
let ac = 1, xa = 0, ii = xa;
function Cl(t) {
  ii = t;
}
let Er = !1;
function oc() {
  return ++ac;
}
function Oo(t) {
  var h;
  var e = t.f;
  if (e & bn)
    return !0;
  if (e & Dr) {
    var n = t.deps, r = (e & Tn) !== 0;
    if (n !== null) {
      var i, a, o = (e & lo) !== 0, c = r && Ge !== null && !Er, l = n.length;
      if ((o || c) && (Ge === null || !(Ge.f & ci))) {
        var u = (
          /** @type {Derived} */
          t
        ), d = u.parent;
        for (i = 0; i < l; i++)
          a = n[i], (o || !((h = a == null ? void 0 : a.reactions) != null && h.includes(u))) && (a.reactions ?? (a.reactions = [])).push(u);
        o && (u.f ^= lo), c && d !== null && !(d.f & Tn) && (u.f ^= Tn);
      }
      for (i = 0; i < l; i++)
        if (a = n[i], Oo(
          /** @type {Derived} */
          a
        ) && Wu(
          /** @type {Derived} */
          a
        ), a.wv > t.wv)
          return !0;
    }
    (!r || Ge !== null && !Er) && $t(t, zt);
  }
  return !1;
}
function sc(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !(Jt != null && Jt.includes(t)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a.f & tn ? sc(
        /** @type {Derived} */
        a,
        e,
        !1
      ) : e === a && (n ? $t(a, bn) : a.f & zt && $t(a, Dr), oi(
        /** @type {Effect} */
        a
      ));
    }
}
function lc(t) {
  var g;
  var e = Qt, n = pn, r = An, i = Ve, a = Er, o = Jt, c = lt, l = Pn, u = ii, d = t.f;
  Qt = /** @type {null | Value[]} */
  null, pn = 0, An = null, Er = (d & Tn) !== 0 && (Pn || !Pi || Ve === null), Ve = d & (sr | ui) ? null : t, Jt = null, Ki(t.ctx), Pn = !1, ii = ++xa, t.ac !== null && (xo(() => {
    t.ac.abort(Ci);
  }), t.ac = null);
  try {
    t.f |= cs;
    var h = (
      /** @type {Function} */
      t.fn
    ), f = h(), v = t.deps;
    if (Qt !== null) {
      var p;
      if (uo(t, pn), v !== null && pn > 0)
        for (v.length = pn + Qt.length, p = 0; p < Qt.length; p++)
          v[pn + p] = Qt[p];
      else
        t.deps = v = Qt;
      if (!Er || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      d & tn && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (p = pn; p < v.length; p++)
          ((g = v[p]).reactions ?? (g.reactions = [])).push(t);
    } else v !== null && pn < v.length && (uo(t, pn), v.length = pn);
    if (Fa() && An !== null && !Pn && v !== null && !(t.f & (tn | Dr | bn)))
      for (p = 0; p < /** @type {Source[]} */
      An.length; p++)
        sc(
          An[p],
          /** @type {Effect} */
          t
        );
    return i !== null && i !== t && (xa++, An !== null && (r === null ? r = An : r.push(.../** @type {Source[]} */
    An))), t.f & ri && (t.f ^= ri), f;
  } catch (I) {
    return Fu(I);
  } finally {
    t.f ^= cs, Qt = e, pn = n, An = r, Ve = i, Er = a, Jt = o, Ki(c), Pn = l, ii = u;
  }
}
function Hf(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = kd.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && e.f & tn && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Qt === null || !Qt.includes(e)) && ($t(e, Dr), e.f & (Tn | lo) || (e.f ^= lo), qu(
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
      Hf(t, n[r]);
}
function Ta(t) {
  var e = t.f;
  if (!(e & ci)) {
    $t(t, zt);
    var n = Ge, r = Pi;
    Ge = t, Pi = !0;
    try {
      e & li ? Pf(t) : ec(t), $u(t);
      var i = lc(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = ac;
      var a;
      Lu && of && t.f & bn && t.deps;
    } finally {
      Pi = r, Ge = n;
    }
  }
}
async function Ro() {
  await Promise.resolve(), df();
}
function s(t) {
  var e = t.f, n = (e & tn) !== 0;
  if (Ve !== null && !Pn) {
    var r = Ge !== null && (Ge.f & ci) !== 0;
    if (!r && !(Jt != null && Jt.includes(t))) {
      var i = Ve.deps;
      if (Ve.f & cs)
        t.rv < xa && (t.rv = xa, Qt === null && i !== null && i[pn] === t ? pn++ : Qt === null ? Qt = [t] : (!Er || !Qt.includes(t)) && Qt.push(t));
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
    ), c = o.parent;
    c !== null && !(c.f & Tn) && (o.f ^= Tn);
  }
  if (fi) {
    if (Sr.has(t))
      return Sr.get(t);
    if (n) {
      o = /** @type {Derived} */
      t;
      var l = o.v;
      return (!(o.f & zt) && o.reactions !== null || uc(o)) && (l = zs(o)), Sr.set(o, l), l;
    }
  } else if (n) {
    if (o = /** @type {Derived} */
    t, Bt != null && Bt.has(o))
      return Bt.get(o);
    Oo(o) && Wu(o);
  }
  if (Bt != null && Bt.has(t))
    return Bt.get(t);
  if (t.f & ri)
    throw t.v;
  return t.v;
}
function uc(t) {
  if (t.v === Pt) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (Sr.has(e) || e.f & tn && uc(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Ur(t) {
  var e = Pn;
  try {
    return Pn = !0, t();
  } finally {
    Pn = e;
  }
}
const Ff = -7169;
function $t(t, e) {
  t.f = t.f & Ff | e;
}
function Bf(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (zn in t)
      gs(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && zn in n && gs(n);
      }
  }
}
function gs(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        gs(t[r], e);
      } catch {
      }
    const n = Bs(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Ou(n);
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
const cc = /* @__PURE__ */ new Set(), bs = /* @__PURE__ */ new Set();
function Zs(t, e, n, r = {}) {
  function i(a) {
    if (r.capture || ya.call(e, a), !a.cancelBubble)
      return xo(() => n == null ? void 0 : n.call(this, a));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? Lr(() => {
    e.addEventListener(t, i, r);
  }) : e.addEventListener(t, i, r), i;
}
function kf(t, e, n, r = {}) {
  var i = Zs(e, t, n, r);
  return () => {
    t.removeEventListener(e, i, r);
  };
}
function ba(t, e, n, r, i) {
  var a = { capture: r, passive: i }, o = Zs(t, e, n, a);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && To(() => {
    e.removeEventListener(t, o, a);
  });
}
function Ln(t) {
  for (var e = 0; e < t.length; e++)
    cc.add(t[e]);
  for (var n of bs)
    n(t);
}
let Sl = null;
function ya(t) {
  var S;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = ((S = t.composedPath) == null ? void 0 : S.call(t)) || [], a = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  Sl = t;
  var o = 0, c = Sl === t && t.__root;
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
    l <= u && (o = l);
  }
  if (a = /** @type {Element} */
  i[o] || t.target, a !== e) {
    so(t, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var d = Ve, h = Ge;
    un(null), Yn(null);
    try {
      for (var f, v = []; a !== null; ) {
        var p = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var g = a["__" + r];
          if (g != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === a))
            if (Eo(g)) {
              var [I, ...A] = g;
              I.apply(a, [t, ...A]);
            } else
              g.call(a, t);
        } catch (x) {
          f ? v.push(x) : f = x;
        }
        if (t.cancelBubble || p === e || p === null)
          break;
        a = p;
      }
      if (f) {
        for (let x of v)
          queueMicrotask(() => {
            throw x;
          });
        throw f;
      }
    } finally {
      t.__root = e, delete t.currentTarget, un(d), Yn(h);
    }
  }
}
function dc(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function Zi(t, e) {
  var n = (
    /** @type {Effect} */
    Ge
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function fe(t, e) {
  var n = (e & 1) !== 0, r = (e & 2) !== 0, i, a = !t.startsWith("<!>");
  return () => {
    i === void 0 && (i = dc(a ? t : "<!>" + t), n || (i = /** @type {Node} */
    /* @__PURE__ */ Yi(i)));
    var o = (
      /** @type {TemplateNode} */
      r || Yu ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Yi(o)
      ), l = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Zi(c, l);
    } else
      Zi(o, o);
    return o;
  };
}
// @__NO_SIDE_EFFECTS__
function Vf(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, a;
  return () => {
    if (!a) {
      var o = (
        /** @type {DocumentFragment} */
        dc(i)
      ), c = (
        /** @type {Element} */
        /* @__PURE__ */ Yi(o)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ Yi(c);
    }
    var l = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return Zi(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function cn(t, e) {
  return /* @__PURE__ */ Vf(t, e, "svg");
}
function Xt(t = "") {
  {
    var e = Pr(t + "");
    return Zi(e, e), e;
  }
}
function ie() {
  var t = document.createDocumentFragment(), e = document.createComment(""), n = Pr();
  return t.append(e, n), Zi(e, n), t;
}
function O(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function Gf(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const jf = [
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
function qf(t) {
  return jf.includes(t);
}
const Wf = {
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
function Kf(t) {
  return t = t.toLowerCase(), Wf[t] ?? t;
}
const zf = ["touchstart", "touchmove"];
function Xf(t) {
  return zf.includes(t);
}
function vt(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function Yf(t, e) {
  return Zf(t, e);
}
const Ii = /* @__PURE__ */ new Map();
function Zf(t, { target: e, anchor: n, props: r = {}, events: i, context: a, intro: o = !0 }) {
  Cf();
  var c = /* @__PURE__ */ new Set(), l = (h) => {
    for (var f = 0; f < h.length; f++) {
      var v = h[f];
      if (!c.has(v)) {
        c.add(v);
        var p = Xf(v);
        e.addEventListener(v, ya, { passive: p });
        var g = Ii.get(v);
        g === void 0 ? (document.addEventListener(v, ya, { passive: p }), Ii.set(v, 1)) : Ii.set(v, g + 1);
      }
    }
  };
  l(Fs(cc)), bs.add(l);
  var u = void 0, d = Mf(() => {
    var h = n ?? e.appendChild(Pr());
    return pf(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (f) => {
        if (a) {
          Oe({});
          var v = (
            /** @type {ComponentContext} */
            lt
          );
          v.c = a;
        }
        i && (r.$$events = i), u = t(f, r) || {}, a && Re();
      }
    ), () => {
      var p;
      for (var f of c) {
        e.removeEventListener(f, ya);
        var v = (
          /** @type {number} */
          Ii.get(f)
        );
        --v === 0 ? (document.removeEventListener(f, ya), Ii.delete(f)) : Ii.set(f, v);
      }
      bs.delete(l), h !== n && ((p = h.parentNode) == null || p.removeChild(h));
    };
  });
  return Qf.set(u, d), u;
}
let Qf = /* @__PURE__ */ new WeakMap();
function Ae(t, e, ...n) {
  var r = t, i = me, a;
  Nr(() => {
    i !== (i = e()) && (a && (kt(a), a = null), a = qt(() => (
      /** @type {SnippetFn} */
      i(r, ...n)
    )));
  }, di);
}
function at(t) {
  lt === null && qs(), ra && lt.l !== null ? Jf(lt).m.push(t) : Te(() => {
    const e = Ur(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Hn(t) {
  lt === null && qs(), at(() => () => Ur(t));
}
function Jf(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
function le(t, e, n = !1) {
  var r = t, i = null, a = null, o = Pt, c = n ? di : 0, l = !1;
  const u = (v, p = !0) => {
    l = !0, f(p, v);
  };
  var d = null;
  function h() {
    d !== null && (d.lastChild.remove(), r.before(d), d = null);
    var v = o ? i : a, p = o ? a : i;
    v && Lo(v), p && xr(p, () => {
      o ? a = null : i = null;
    });
  }
  const f = (v, p) => {
    if (o !== (o = v)) {
      var g = Xs(), I = r;
      if (g && (d = document.createDocumentFragment(), d.append(I = Pr())), o ? i ?? (i = p && qt(() => p(I))) : a ?? (a = p && qt(() => p(I))), g) {
        var A = (
          /** @type {Batch} */
          it
        ), S = o ? i : a, x = o ? a : i;
        S && A.skipped_effects.delete(S), x && A.skipped_effects.add(x), A.add_callback(h);
      } else
        h();
    }
  };
  Nr(() => {
    l = !1, e(u), l || f(null, null);
  }, c);
}
function Ia(t, e) {
  return e;
}
function $f(t, e, n) {
  for (var r = t.items, i = [], a = e.length, o = 0; o < a; o++)
    Ys(e[o].e, i, !0);
  var c = a > 0 && i.length === 0 && n !== null;
  if (c) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Sf(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), Vn(t, e[0].prev, e[a - 1].next);
  }
  nc(i, () => {
    for (var u = 0; u < a; u++) {
      var d = e[u];
      c || (r.delete(d.k), Vn(t, d.prev, d.next)), kt(d.e, !c);
    }
  });
}
function ir(t, e, n, r, i, a = null) {
  var o = t, c = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, l = (e & 4) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      t
    );
    o = u.appendChild(Pr());
  }
  var d = null, h = !1, f = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ Ks(() => {
    var A = n();
    return Eo(A) ? A : A == null ? [] : Fs(A);
  }), p, g;
  function I() {
    eh(
      g,
      p,
      c,
      f,
      o,
      i,
      e,
      r,
      n
    ), a !== null && (p.length === 0 ? d ? Lo(d) : d = qt(() => a(o)) : d !== null && xr(d, () => {
      d = null;
    }));
  }
  Nr(() => {
    g ?? (g = /** @type {Effect} */
    Ge), p = /** @type {V[]} */
    s(v);
    var A = p.length;
    if (!(h && A === 0)) {
      h = A === 0;
      var S, x, b, _;
      if (Xs()) {
        var T = /* @__PURE__ */ new Set(), w = (
          /** @type {Batch} */
          it
        );
        for (x = 0; x < A; x += 1) {
          b = p[x], _ = r(b, x);
          var E = c.items.get(_) ?? f.get(_);
          E ? e & 3 && fc(E, b, x, e) : (S = hc(
            null,
            c,
            null,
            null,
            b,
            _,
            x,
            i,
            e,
            n,
            !0
          ), f.set(_, S)), T.add(_);
        }
        for (const [C, D] of c.items)
          T.has(C) || w.skipped_effects.add(D.e);
        w.add_callback(I);
      } else
        I();
      s(v);
    }
  });
}
function eh(t, e, n, r, i, a, o, c, l) {
  var te, N, y, L;
  var u = (o & 8) !== 0, d = (o & 3) !== 0, h = e.length, f = n.items, v = n.first, p = v, g, I = null, A, S = [], x = [], b, _, T, w;
  if (u)
    for (w = 0; w < h; w += 1)
      b = e[w], _ = c(b, w), T = f.get(_), T !== void 0 && ((te = T.a) == null || te.measure(), (A ?? (A = /* @__PURE__ */ new Set())).add(T));
  for (w = 0; w < h; w += 1) {
    if (b = e[w], _ = c(b, w), T = f.get(_), T === void 0) {
      var E = r.get(_);
      if (E !== void 0) {
        r.delete(_), f.set(_, E);
        var C = I ? I.next : p;
        Vn(n, I, E), Vn(n, E, C), Ko(E, C, i), I = E;
      } else {
        var D = p ? (
          /** @type {TemplateNode} */
          p.e.nodes_start
        ) : i;
        I = hc(
          D,
          n,
          I,
          I === null ? n.first : I.next,
          b,
          _,
          w,
          a,
          o,
          l
        );
      }
      f.set(_, I), S = [], x = [], p = I.next;
      continue;
    }
    if (d && fc(T, b, w, o), T.e.f & Un && (Lo(T.e), u && ((N = T.a) == null || N.unfix(), (A ?? (A = /* @__PURE__ */ new Set())).delete(T))), T !== p) {
      if (g !== void 0 && g.has(T)) {
        if (S.length < x.length) {
          var j = x[0], H;
          I = j.prev;
          var B = S[0], _e = S[S.length - 1];
          for (H = 0; H < S.length; H += 1)
            Ko(S[H], j, i);
          for (H = 0; H < x.length; H += 1)
            g.delete(x[H]);
          Vn(n, B.prev, _e.next), Vn(n, I, B), Vn(n, _e, j), p = j, I = _e, w -= 1, S = [], x = [];
        } else
          g.delete(T), Ko(T, p, i), Vn(n, T.prev, T.next), Vn(n, T, I === null ? n.first : I.next), Vn(n, I, T), I = T;
        continue;
      }
      for (S = [], x = []; p !== null && p.k !== _; )
        p.e.f & Un || (g ?? (g = /* @__PURE__ */ new Set())).add(p), x.push(p), p = p.next;
      if (p === null)
        continue;
      T = p;
    }
    S.push(T), I = T, p = T.next;
  }
  if (p !== null || g !== void 0) {
    for (var q = g === void 0 ? [] : Fs(g); p !== null; )
      p.e.f & Un || q.push(p), p = p.next;
    var F = q.length;
    if (F > 0) {
      var U = o & 4 && h === 0 ? i : null;
      if (u) {
        for (w = 0; w < F; w += 1)
          (y = q[w].a) == null || y.measure();
        for (w = 0; w < F; w += 1)
          (L = q[w].a) == null || L.fix();
      }
      $f(n, q, U);
    }
  }
  u && Lr(() => {
    var J;
    if (A !== void 0)
      for (T of A)
        (J = T.a) == null || J.apply();
  }), t.first = n.first && n.first.e, t.last = I && I.e;
  for (var W of r.values())
    kt(W.e);
  r.clear();
}
function fc(t, e, n, r) {
  r & 1 && Xi(t.v, e), r & 2 ? Xi(
    /** @type {Value<number>} */
    t.i,
    n
  ) : t.i = n;
}
function hc(t, e, n, r, i, a, o, c, l, u, d) {
  var h = (l & 1) !== 0, f = (l & 16) === 0, v = h ? f ? /* @__PURE__ */ Ku(i, !1, !1) : si(i) : i, p = l & 2 ? si(o) : o, g = {
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
      var I = document.createDocumentFragment();
      I.append(t = Pr());
    }
    return g.e = qt(() => c(
      /** @type {Node} */
      t,
      v,
      p,
      u
    ), af), g.e.prev = n && n.e, g.e.next = r && r.e, n === null ? d || (e.first = g) : (n.next = g, n.e.next = g.e), r !== null && (r.prev = g, r.e.prev = g.e), g;
  } finally {
  }
}
function Ko(t, e, n) {
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
      /* @__PURE__ */ Ba(a)
    );
    i.before(a), a = o;
  }
}
function Vn(t, e, n) {
  e === null ? t.first = n : (e.next = n, e.e.next = n && n.e), n !== null && (n.prev = e, n.e.prev = e && e.e);
}
function ur(t, e, n) {
  var r = t, i, a, o = null, c = null;
  function l() {
    a && (xr(a), a = null), o && (o.lastChild.remove(), r.before(o), o = null), a = c, c = null;
  }
  Nr(() => {
    if (i !== (i = e())) {
      var u = Xs();
      if (i) {
        var d = r;
        u && (o = document.createDocumentFragment(), o.append(d = Pr()), a && it.skipped_effects.add(a)), c = qt(() => n(d, i));
      }
      u ? it.add_callback(l) : l();
    }
  }, di);
}
function xl(t, e, n, r, i, a) {
  var o, c, l = null, u = (
    /** @type {TemplateNode} */
    t
  ), d;
  Nr(() => {
    const h = e() || null;
    var f = h === "svg" ? Fd : null;
    h !== o && (d && (h === null ? xr(d, () => {
      d = null, c = null;
    }) : h === c ? Lo(d) : kt(d)), h && h !== c && (d = qt(() => {
      if (l = f ? document.createElementNS(f, h) : document.createElement(h), Zi(l, l), r) {
        var v = (
          /** @type {TemplateNode} */
          l.appendChild(Pr())
        );
        r(l, v);
      }
      Ge.nodes_end = l, u.before(l);
    })), o = h, o && (c = o));
  }, di);
}
function Be(t, e, n) {
  ka(() => {
    var r = Ur(() => e(t, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      wo(() => {
        var o = n();
        Bf(o), i && Ws(a, o) && (a = o, r.update(o));
      }), i = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function th(t, e) {
  var n = void 0, r;
  Nr(() => {
    n !== (n = e()) && (r && (kt(r), r = null), n && (r = qt(() => {
      ka(() => (
        /** @type {(node: Element) => void} */
        n(t)
      ));
    })));
  });
}
function vc(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var i = t.length;
    for (e = 0; e < i; e++) t[e] && (n = vc(t[e])) && (r && (r += " "), r += n);
  } else for (n in t) t[n] && (r && (r += " "), r += n);
  return r;
}
function nh() {
  for (var t, e, n = 0, r = "", i = arguments.length; n < i; n++) (t = arguments[n]) && (e = vc(t)) && (r && (r += " "), r += e);
  return r;
}
function pc(t) {
  return typeof t == "object" ? nh(t) : t ?? "";
}
const Tl = [...` 	
\r\f \v\uFEFF`];
function rh(t, e, n) {
  var r = t == null ? "" : "" + t;
  if (n) {
    for (var i in n)
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0; ) {
          var c = o + a;
          (o === 0 || Tl.includes(r[o - 1])) && (c === r.length || Tl.includes(r[c])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(c + 1) : o = c;
        }
  }
  return r === "" ? null : r;
}
function wl(t, e = !1) {
  var n = e ? " !important;" : ";", r = "";
  for (var i in t) {
    var a = t[i];
    a != null && a !== "" && (r += " " + i + ": " + a + n);
  }
  return r;
}
function zo(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function ih(t, e) {
  if (e) {
    var n = "", r, i;
    if (Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, o = 0, c = !1, l = [];
      r && l.push(...Object.keys(r).map(zo)), i && l.push(...Object.keys(i).map(zo));
      var u = 0, d = -1;
      const g = t.length;
      for (var h = 0; h < g; h++) {
        var f = t[h];
        if (c ? f === "/" && t[h - 1] === "*" && (c = !1) : a ? a === f && (a = !1) : f === "/" && t[h + 1] === "*" ? c = !0 : f === '"' || f === "'" ? a = f : f === "(" ? o++ : f === ")" && o--, !c && a === !1 && o === 0) {
          if (f === ":" && d === -1)
            d = h;
          else if (f === ";" || h === g - 1) {
            if (d !== -1) {
              var v = zo(t.substring(u, d).trim());
              if (!l.includes(v)) {
                f !== ";" && h++;
                var p = t.substring(u, h).trim();
                n += " " + p + ";";
              }
            }
            u = h + 1, d = -1;
          }
        }
      }
    }
    return r && (n += wl(r)), i && (n += wl(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function mc(t, e, n, r, i, a) {
  var o = t.__className;
  if (o !== n || o === void 0) {
    var c = rh(n, r, a);
    c == null ? t.removeAttribute("class") : e ? t.className = c : t.setAttribute("class", c), t.__className = n;
  } else if (a && i !== a)
    for (var l in a) {
      var u = !!a[l];
      (i == null || u !== !!i[l]) && t.classList.toggle(l, u);
    }
  return a;
}
function Xo(t, e = {}, n, r) {
  for (var i in n) {
    var a = n[i];
    e[i] !== a && (n[i] == null ? t.style.removeProperty(i) : t.style.setProperty(i, a, r));
  }
}
function nn(t, e, n, r) {
  var i = t.__style;
  if (i !== e) {
    var a = ih(e, r);
    a == null ? t.removeAttribute("style") : t.style.cssText = a, t.__style = e;
  } else r && (Array.isArray(r) ? (Xo(t, n == null ? void 0 : n[0], r[0]), Xo(t, n == null ? void 0 : n[1], r[1], "important")) : Xo(t, n, r));
  return r;
}
function ys(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!Eo(e))
      return nf();
    for (var r of t.options)
      r.selected = e.includes(Ll(r));
    return;
  }
  for (r of t.options) {
    var i = Ll(r);
    if (Af(i, e)) {
      r.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function ah(t) {
  var e = new MutationObserver(() => {
    ys(t, t.__value);
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
  }), To(() => {
    e.disconnect();
  });
}
function Ll(t) {
  return "__value" in t ? t.__value : t.value;
}
const fa = Symbol("class"), ha = Symbol("style"), gc = Symbol("is custom element"), bc = Symbol("is html");
function Ol(t, e) {
  var n = Qs(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== "PROGRESS") || (t.value = e ?? "");
}
function oh(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function Tr(t, e, n, r) {
  var i = Qs(t);
  i[e] !== (i[e] = n) && (e === "loading" && (t[Wd] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && yc(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function sh(t, e, n, r, i = !1, a = !1) {
  var o = Qs(t), c = o[gc], l = !o[bc], u = e || {}, d = t.tagName === "OPTION";
  for (var h in e)
    h in n || (n[h] = null);
  n.class ? n.class = pc(n.class) : n[fa] && (n.class = null), n[ha] && (n.style ?? (n.style = null));
  var f = yc(t);
  for (const x in n) {
    let b = n[x];
    if (d && x === "value" && b == null) {
      t.value = t.__value = "", u[x] = b;
      continue;
    }
    if (x === "class") {
      var v = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      mc(t, v, b, r, e == null ? void 0 : e[fa], n[fa]), u[x] = b, u[fa] = n[fa];
      continue;
    }
    if (x === "style") {
      nn(t, b, e == null ? void 0 : e[ha], n[ha]), u[x] = b, u[ha] = n[ha];
      continue;
    }
    var p = u[x];
    if (!(b === p && !(b === void 0 && t.hasAttribute(x)))) {
      u[x] = b;
      var g = x[0] + x[1];
      if (g !== "$$")
        if (g === "on") {
          const _ = {}, T = "$$" + x;
          let w = x.slice(2);
          var I = qf(w);
          if (Gf(w) && (w = w.slice(0, -7), _.capture = !0), !I && p) {
            if (b != null) continue;
            t.removeEventListener(w, u[T], _), u[T] = null;
          }
          if (b != null)
            if (I)
              t[`__${w}`] = b, Ln([w]);
            else {
              let E = function(C) {
                u[x].call(this, C);
              };
              u[T] = Zs(w, t, E, _);
            }
          else I && (t[`__${w}`] = void 0);
        } else if (x === "style")
          Tr(t, x, b);
        else if (x === "autofocus")
          xf(
            /** @type {HTMLElement} */
            t,
            !!b
          );
        else if (!c && (x === "__value" || x === "value" && b != null))
          t.value = t.__value = b;
        else if (x === "selected" && d)
          oh(
            /** @type {HTMLOptionElement} */
            t,
            b
          );
        else {
          var A = x;
          l || (A = Kf(A));
          var S = A === "defaultValue" || A === "defaultChecked";
          if (b == null && !c && !S)
            if (o[x] = null, A === "value" || A === "checked") {
              let _ = (
                /** @type {HTMLInputElement} */
                t
              );
              const T = e === void 0;
              if (A === "value") {
                let w = _.defaultValue;
                _.removeAttribute(A), _.defaultValue = w, _.value = _.__value = T ? w : null;
              } else {
                let w = _.defaultChecked;
                _.removeAttribute(A), _.defaultChecked = w, _.checked = T ? w : !1;
              }
            } else
              t.removeAttribute(x);
          else S || f.includes(A) && (c || typeof b != "string") ? (t[A] = b, A in o && (o[A] = Pt)) : typeof b != "function" && Tr(t, A, b);
        }
    }
  }
  return u;
}
function ke(t, e, n = [], r = [], i, a = !1, o = !1) {
  ju(n, r, (c) => {
    var l = void 0, u = {}, d = t.nodeName === "SELECT", h = !1;
    if (Nr(() => {
      var v = e(...c.map(s)), p = sh(
        t,
        l,
        v,
        i,
        a,
        o
      );
      h && d && "value" in v && ys(
        /** @type {HTMLSelectElement} */
        t,
        v.value
      );
      for (let I of Object.getOwnPropertySymbols(u))
        v[I] || kt(u[I]);
      for (let I of Object.getOwnPropertySymbols(v)) {
        var g = v[I];
        I.description === Bd && (!l || g !== l[I]) && (u[I] && kt(u[I]), u[I] = qt(() => th(t, () => g))), p[I] = g;
      }
      l = p;
    }), d) {
      var f = (
        /** @type {HTMLSelectElement} */
        t
      );
      ka(() => {
        ys(
          f,
          /** @type {Record<string | symbol, any>} */
          l.value,
          !0
        ), ah(f);
      });
    }
    h = !0;
  });
}
function Qs(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ?? (t.__attributes = {
      [gc]: t.nodeName.includes("-"),
      [bc]: t.namespaceURI === Hd
    })
  );
}
var Rl = /* @__PURE__ */ new Map();
function yc(t) {
  var e = t.getAttribute("is") || t.nodeName, n = Rl.get(e);
  if (n) return n;
  Rl.set(e, n = []);
  for (var r, i = t, a = Element.prototype; a !== i; ) {
    r = Ou(i);
    for (var o in r)
      r[o].set && n.push(o);
    i = Bs(i);
  }
  return n;
}
function wa(t, e, n = e) {
  var r = /* @__PURE__ */ new WeakSet();
  wf(t, "input", async (i) => {
    var a = i ? t.defaultValue : t.value;
    if (a = Yo(t) ? Zo(a) : a, n(a), it !== null && r.add(it), await Ro(), a !== (a = e())) {
      var o = t.selectionStart, c = t.selectionEnd, l = t.value.length;
      if (t.value = a ?? "", c !== null) {
        var u = t.value.length;
        o === c && c === l && u > l ? (t.selectionStart = u, t.selectionEnd = u) : (t.selectionStart = o, t.selectionEnd = Math.min(c, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Ur(e) == null && t.value && (n(Yo(t) ? Zo(t.value) : t.value), it !== null && r.add(it)), wo(() => {
    var i = e();
    if (t === document.activeElement) {
      var a = (
        /** @type {Batch} */
        to ?? it
      );
      if (r.has(a))
        return;
    }
    Yo(t) && i === Zo(t.value) || t.type === "date" && !i && !t.value || i !== t.value && (t.value = i ?? "");
  });
}
function Yo(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function Zo(t) {
  return t === "" ? null : +t;
}
function Ml(t, e) {
  return t === e || (t == null ? void 0 : t[zn]) === e;
}
function we(t = {}, e, n, r) {
  return ka(() => {
    var i, a;
    return wo(() => {
      i = a, a = [], Ur(() => {
        t !== n(...a) && (e(t, ...a), i && Ml(n(...i), t) && e(null, ...i));
      });
    }), () => {
      Lr(() => {
        a && Ml(n(...a), t) && e(null, ...a);
      });
    };
  }), t;
}
function Js(t, e, n) {
  if (t == null)
    return e(void 0), n && n(void 0), me;
  const r = Ur(
    () => t.subscribe(
      e,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const _i = [];
function lh(t, e) {
  return {
    subscribe: dt(t, e).subscribe
  };
}
function dt(t, e = me) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function i(c) {
    if (Ws(t, c) && (t = c, n)) {
      const l = !_i.length;
      for (const u of r)
        u[1](), _i.push(u, t);
      if (l) {
        for (let u = 0; u < _i.length; u += 2)
          _i[u][0](_i[u + 1]);
        _i.length = 0;
      }
    }
  }
  function a(c) {
    i(c(
      /** @type {T} */
      t
    ));
  }
  function o(c, l = me) {
    const u = [c, l];
    return r.add(u), r.size === 1 && (n = e(i, a) || me), c(
      /** @type {T} */
      t
    ), () => {
      r.delete(u), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: a, subscribe: o };
}
function ia(t, e, n) {
  const r = !Array.isArray(t), i = r ? [t] : t;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = e.length < 2;
  return lh(n, (o, c) => {
    let l = !1;
    const u = [];
    let d = 0, h = me;
    const f = () => {
      if (d)
        return;
      h();
      const p = e(r ? u[0] : u, o, c);
      a ? o(p) : h = typeof p == "function" ? p : me;
    }, v = i.map(
      (p, g) => Js(
        p,
        (I) => {
          u[g] = I, d &= ~(1 << g), l && f();
        },
        () => {
          d |= 1 << g;
        }
      )
    );
    return l = !0, f(), function() {
      Ru(v), h(), l = !1;
    };
  });
}
function Mo(t) {
  let e;
  return Js(t, (n) => e = n)(), e;
}
let za = !1, Is = Symbol();
function Nt(t, e, n) {
  const r = n[e] ?? (n[e] = {
    store: null,
    source: /* @__PURE__ */ Ku(void 0),
    unsubscribe: me
  });
  if (r.store !== t && !(Is in n))
    if (r.unsubscribe(), r.store = t ?? null, t == null)
      r.source.v = void 0, r.unsubscribe = me;
    else {
      var i = !0;
      r.unsubscribe = Js(t, (a) => {
        i ? r.source.v = a : Q(r.source, a);
      }), i = !1;
    }
  return t && Is in n ? Mo(t) : s(r.source);
}
function gn(t, e) {
  return t.set(e), e;
}
function On() {
  const t = {};
  function e() {
    To(() => {
      for (var n in t)
        t[n].unsubscribe();
      so(t, Is, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [t, e];
}
function uh(t) {
  var e = za;
  try {
    return za = !1, [t(), za];
  } finally {
    za = e;
  }
}
const ch = {
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
function We(t, e, n) {
  return new Proxy(
    { props: t, exclude: e },
    ch
  );
}
const dh = {
  get(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (da(r) && (r = r()), typeof r == "object" && r !== null && e in r) return r[e];
    }
  },
  set(t, e, n) {
    let r = t.props.length;
    for (; r--; ) {
      let i = t.props[r];
      da(i) && (i = i());
      const a = Cr(i, e);
      if (a && a.set)
        return a.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (da(r) && (r = r()), typeof r == "object" && r !== null && e in r) {
        const i = Cr(r, e);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(t, e) {
    if (e === zn || e === Du) return !1;
    for (let n of t.props)
      if (da(n) && (n = n()), n != null && e in n) return !0;
    return !1;
  },
  ownKeys(t) {
    const e = [];
    for (let n of t.props)
      if (da(n) && (n = n()), !!n) {
        for (const r in n)
          e.includes(r) || e.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          e.includes(r) || e.push(r);
      }
    return e;
  }
};
function nt(...t) {
  return new Proxy({ props: t }, dh);
}
function m(t, e, n, r) {
  var x;
  var i = !ra || (n & 2) !== 0, a = (n & 8) !== 0, o = (n & 16) !== 0, c = (
    /** @type {V} */
    r
  ), l = !0, u = () => (l && (l = !1, c = o ? Ur(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), c), d;
  if (a) {
    var h = zn in t || Du in t;
    d = ((x = Cr(t, e)) == null ? void 0 : x.set) ?? (h && e in t ? (b) => t[e] = b : void 0);
  }
  var f, v = !1;
  a ? [f, v] = uh(() => (
    /** @type {V} */
    t[e]
  )) : f = /** @type {V} */
  t[e], f === void 0 && r !== void 0 && (f = u(), d && (i && Qd(), d(f)));
  var p;
  if (i ? p = () => {
    var b = (
      /** @type {V} */
      t[e]
    );
    return b === void 0 ? u() : (l = !0, b);
  } : p = () => {
    var b = (
      /** @type {V} */
      t[e]
    );
    return b !== void 0 && (c = /** @type {V} */
    void 0), b === void 0 ? c : b;
  }, i && !(n & 4))
    return p;
  if (d) {
    var g = t.$$legacy;
    return (
      /** @type {() => V} */
      function(b, _) {
        return arguments.length > 0 ? ((!i || !_ || g || v) && d(_ ? p() : b), b) : p();
      }
    );
  }
  var I = !1, A = (n & 1 ? So : Ks)(() => (I = !1, p()));
  a && s(A);
  var S = (
    /** @type {Effect} */
    Ge
  );
  return (
    /** @type {() => V} */
    function(b, _) {
      if (arguments.length > 0) {
        const T = _ ? s(A) : i && a ? ye(b) : b;
        return Q(A, T), I = !0, c !== void 0 && (c = T), b;
      }
      return fi && I || S.f & ci ? A.v : s(A);
    }
  );
}
const fh = "5";
var wu;
typeof window < "u" && ((wu = window.__svelte ?? (window.__svelte = {})).v ?? (wu.v = /* @__PURE__ */ new Set())).add(fh);
function hh(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var vh = function(e) {
  return ph(e) && !mh(e);
};
function ph(t) {
  return !!t && typeof t == "object";
}
function mh(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || yh(t);
}
var gh = typeof Symbol == "function" && Symbol.for, bh = gh ? Symbol.for("react.element") : 60103;
function yh(t) {
  return t.$$typeof === bh;
}
function Ih(t) {
  return Array.isArray(t) ? [] : {};
}
function La(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? Qi(Ih(t), t, e) : t;
}
function _h(t, e, n) {
  return t.concat(e).map(function(r) {
    return La(r, n);
  });
}
function Eh(t, e) {
  if (!e.customMerge)
    return Qi;
  var n = e.customMerge(t);
  return typeof n == "function" ? n : Qi;
}
function Ah(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function Dl(t) {
  return Object.keys(t).concat(Ah(t));
}
function Ic(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function Ch(t, e) {
  return Ic(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function Sh(t, e, n) {
  var r = {};
  return n.isMergeableObject(t) && Dl(t).forEach(function(i) {
    r[i] = La(t[i], n);
  }), Dl(e).forEach(function(i) {
    Ch(t, i) || (Ic(t, i) && n.isMergeableObject(e[i]) ? r[i] = Eh(i, n)(t[i], e[i], n) : r[i] = La(e[i], n));
  }), r;
}
function Qi(t, e, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || _h, n.isMergeableObject = n.isMergeableObject || vh, n.cloneUnlessOtherwiseSpecified = La;
  var r = Array.isArray(e), i = Array.isArray(t), a = r === i;
  return a ? r ? n.arrayMerge(t, e, n) : Sh(t, e, n) : La(e, n);
}
Qi.all = function(e, n) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(r, i) {
    return Qi(r, i, n);
  }, {});
};
var xh = Qi, Th = xh;
const wh = /* @__PURE__ */ hh(Th);
var _s = function(t, e) {
  return _s = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, _s(t, e);
};
function $e(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  _s(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
var ce = function() {
  return ce = Object.assign || function(e) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ce.apply(this, arguments);
};
function Lh(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  return n;
}
function _c(t, e, n, r) {
  function i(a) {
    return a instanceof n ? a : new n(function(o) {
      o(a);
    });
  }
  return new (n || (n = Promise))(function(a, o) {
    function c(d) {
      try {
        u(r.next(d));
      } catch (h) {
        o(h);
      }
    }
    function l(d) {
      try {
        u(r.throw(d));
      } catch (h) {
        o(h);
      }
    }
    function u(d) {
      d.done ? a(d.value) : i(d.value).then(c, l);
    }
    u((r = r.apply(t, e || [])).next());
  });
}
function $s(t, e) {
  var n = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, i, a, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return o.next = c(0), o.throw = c(1), o.return = c(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function c(u) {
    return function(d) {
      return l([u, d]);
    };
  }
  function l(u) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, u[0] && (n = 0)), n; ) try {
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
function Or(t, e) {
  var n = typeof Symbol == "function" && t[Symbol.iterator];
  if (!n) return t;
  var r = n.call(t), i, a = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = r.next()).done; ) a.push(i.value);
  } catch (c) {
    o = { error: c };
  } finally {
    try {
      i && !i.done && (n = r.return) && n.call(r);
    } finally {
      if (o) throw o.error;
    }
  }
  return a;
}
function Xn(t, e, n) {
  if (n || arguments.length === 2) for (var r = 0, i = e.length, a; r < i; r++)
    (a || !(r in e)) && (a || (a = Array.prototype.slice.call(e, 0, r)), a[r] = e[r]);
  return t.concat(a || Array.prototype.slice.call(e));
}
function Ni(t) {
  return this instanceof Ni ? (this.v = t, this) : new Ni(t);
}
function Oh(t, e, n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(t, e || []), i, a = [];
  return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), c("next"), c("throw"), c("return", o), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function o(v) {
    return function(p) {
      return Promise.resolve(p).then(v, h);
    };
  }
  function c(v, p) {
    r[v] && (i[v] = function(g) {
      return new Promise(function(I, A) {
        a.push([v, g, I, A]) > 1 || l(v, g);
      });
    }, p && (i[v] = p(i[v])));
  }
  function l(v, p) {
    try {
      u(r[v](p));
    } catch (g) {
      f(a[0][3], g);
    }
  }
  function u(v) {
    v.value instanceof Ni ? Promise.resolve(v.value.v).then(d, h) : f(a[0][2], v);
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
function Rh(t) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], n;
  return e ? e.call(t) : (t = typeof Rt == "function" ? Rt(t) : t[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n);
  function r(a) {
    n[a] = t[a] && function(o) {
      return new Promise(function(c, l) {
        o = t[a](o), i(c, l, o.done, o.value);
      });
    };
  }
  function i(a, o, c, l) {
    Promise.resolve(l).then(function(u) {
      a({ value: u, done: c });
    }, o);
  }
}
function Qo(t, e) {
  var n = e && e.cache ? e.cache : Fh, r = e && e.serializer ? e.serializer : Uh, i = e && e.strategy ? e.strategy : Ph;
  return i(t, {
    cache: n,
    serializer: r
  });
}
function Mh(t) {
  return t == null || typeof t == "number" || typeof t == "boolean";
}
function Dh(t, e, n, r) {
  var i = Mh(r) ? r : n(r), a = e.get(i);
  return typeof a > "u" && (a = t.call(this, r), e.set(i, a)), a;
}
function Ec(t, e, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = e.get(i);
  return typeof a > "u" && (a = t.apply(this, r), e.set(i, a)), a;
}
function Ac(t, e, n, r, i) {
  return n.bind(e, t, r, i);
}
function Ph(t, e) {
  var n = t.length === 1 ? Dh : Ec;
  return Ac(t, this, n, e.cache.create(), e.serializer);
}
function Nh(t, e) {
  return Ac(t, this, Ec, e.cache.create(), e.serializer);
}
var Uh = function() {
  return JSON.stringify(arguments);
}, Hh = (
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
), Fh = {
  create: function() {
    return new Hh();
  }
}, Jo = {
  variadic: Nh
}, ze;
(function(t) {
  t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", t[t.INVALID_TAG = 23] = "INVALID_TAG", t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(ze || (ze = {}));
var ht;
(function(t) {
  t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag";
})(ht || (ht = {}));
var Ji;
(function(t) {
  t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime";
})(Ji || (Ji = {}));
function Pl(t) {
  return t.type === ht.literal;
}
function Bh(t) {
  return t.type === ht.argument;
}
function Cc(t) {
  return t.type === ht.number;
}
function Sc(t) {
  return t.type === ht.date;
}
function xc(t) {
  return t.type === ht.time;
}
function Tc(t) {
  return t.type === ht.select;
}
function wc(t) {
  return t.type === ht.plural;
}
function kh(t) {
  return t.type === ht.pound;
}
function Lc(t) {
  return t.type === ht.tag;
}
function Oc(t) {
  return !!(t && typeof t == "object" && t.type === Ji.number);
}
function Es(t) {
  return !!(t && typeof t == "object" && t.type === Ji.dateTime);
}
var Rc = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Vh = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Gh(t) {
  var e = {};
  return t.replace(Vh, function(n) {
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
var jh = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function qh(t) {
  if (t.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var e = t.split(jh).filter(function(f) {
    return f.length > 0;
  }), n = [], r = 0, i = e; r < i.length; r++) {
    var a = i[r], o = a.split("/");
    if (o.length === 0)
      throw new Error("Invalid number skeleton");
    for (var c = o[0], l = o.slice(1), u = 0, d = l; u < d.length; u++) {
      var h = d[u];
      if (h.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: c, options: l });
  }
  return n;
}
function Wh(t) {
  return t.replace(/^(.*?)-/, "");
}
var Nl = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Mc = /^(@+)?(\+|#+)?[rs]?$/g, Kh = /(\*)(0+)|(#+)(0+)|(0+)/g, Dc = /^(0+)$/;
function Ul(t) {
  var e = {};
  return t[t.length - 1] === "r" ? e.roundingPriority = "morePrecision" : t[t.length - 1] === "s" && (e.roundingPriority = "lessPrecision"), t.replace(Mc, function(n, r, i) {
    return typeof i != "string" ? (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length) : i === "+" ? e.minimumSignificantDigits = r.length : r[0] === "#" ? e.maximumSignificantDigits = r.length : (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), e;
}
function Pc(t) {
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
function zh(t) {
  var e;
  if (t[0] === "E" && t[1] === "E" ? (e = {
    notation: "engineering"
  }, t = t.slice(2)) : t[0] === "E" && (e = {
    notation: "scientific"
  }, t = t.slice(1)), e) {
    var n = t.slice(0, 2);
    if (n === "+!" ? (e.signDisplay = "always", t = t.slice(2)) : n === "+?" && (e.signDisplay = "exceptZero", t = t.slice(2)), !Dc.test(t))
      throw new Error("Malformed concise eng/scientific notation");
    e.minimumIntegerDigits = t.length;
  }
  return e;
}
function Hl(t) {
  var e = {}, n = Pc(t);
  return n || e;
}
function Xh(t) {
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
        e.style = "unit", e.unit = Wh(i.options[0]);
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
        e = ce(ce(ce({}, e), { notation: "scientific" }), i.options.reduce(function(l, u) {
          return ce(ce({}, l), Hl(u));
        }, {}));
        continue;
      case "engineering":
        e = ce(ce(ce({}, e), { notation: "engineering" }), i.options.reduce(function(l, u) {
          return ce(ce({}, l), Hl(u));
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
        i.options[0].replace(Kh, function(l, u, d, h, f, v) {
          if (u)
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
    if (Dc.test(i.stem)) {
      e.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (Nl.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(Nl, function(l, u, d, h, f, v) {
        return d === "*" ? e.minimumFractionDigits = u.length : h && h[0] === "#" ? e.maximumFractionDigits = h.length : f && v ? (e.minimumFractionDigits = f.length, e.maximumFractionDigits = f.length + v.length) : (e.minimumFractionDigits = u.length, e.maximumFractionDigits = u.length), "";
      });
      var a = i.options[0];
      a === "w" ? e = ce(ce({}, e), { trailingZeroDisplay: "stripIfInteger" }) : a && (e = ce(ce({}, e), Ul(a)));
      continue;
    }
    if (Mc.test(i.stem)) {
      e = ce(ce({}, e), Ul(i.stem));
      continue;
    }
    var o = Pc(i.stem);
    o && (e = ce(ce({}, e), o));
    var c = zh(i.stem);
    c && (e = ce(ce({}, e), c));
  }
  return e;
}
var Xa = {
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
function Yh(t, e) {
  for (var n = "", r = 0; r < t.length; r++) {
    var i = t.charAt(r);
    if (i === "j") {
      for (var a = 0; r + 1 < t.length && t.charAt(r + 1) === i; )
        a++, r++;
      var o = 1 + (a & 1), c = a < 2 ? 1 : 3 + (a >> 1), l = "a", u = Zh(e);
      for ((u == "H" || u == "k") && (c = 0); c-- > 0; )
        n += l;
      for (; o-- > 0; )
        n = u + n;
    } else i === "J" ? n += "H" : n += i;
  }
  return n;
}
function Zh(t) {
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
  var i = Xa[r || ""] || Xa[n || ""] || Xa["".concat(n, "-001")] || Xa["001"];
  return i[0];
}
var $o, Qh = new RegExp("^".concat(Rc.source, "*")), Jh = new RegExp("".concat(Rc.source, "*$"));
function Ze(t, e) {
  return { start: t, end: e };
}
var $h = !!String.prototype.startsWith && "_a".startsWith("a", 1), ev = !!String.fromCodePoint, tv = !!Object.fromEntries, nv = !!String.prototype.codePointAt, rv = !!String.prototype.trimStart, iv = !!String.prototype.trimEnd, av = !!Number.isSafeInteger, ov = av ? Number.isSafeInteger : function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991;
}, As = !0;
try {
  var sv = Uc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  As = (($o = sv.exec("a")) === null || $o === void 0 ? void 0 : $o[0]) === "a";
} catch {
  As = !1;
}
var Fl = $h ? (
  // Native
  function(e, n, r) {
    return e.startsWith(n, r);
  }
) : (
  // For IE11
  function(e, n, r) {
    return e.slice(r, r + n.length) === n;
  }
), Cs = ev ? String.fromCodePoint : (
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
), Bl = (
  // native
  tv ? Object.fromEntries : (
    // Ponyfill
    function(e) {
      for (var n = {}, r = 0, i = e; r < i.length; r++) {
        var a = i[r], o = a[0], c = a[1];
        n[o] = c;
      }
      return n;
    }
  )
), Nc = nv ? (
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
), lv = rv ? (
  // Native
  function(e) {
    return e.trimStart();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(Qh, "");
  }
), uv = iv ? (
  // Native
  function(e) {
    return e.trimEnd();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(Jh, "");
  }
);
function Uc(t, e) {
  return new RegExp(t, e);
}
var Ss;
if (As) {
  var kl = Uc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Ss = function(e, n) {
    var r;
    kl.lastIndex = n;
    var i = kl.exec(e);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  Ss = function(e, n) {
    for (var r = []; ; ) {
      var i = Nc(e, n);
      if (i === void 0 || Hc(i) || hv(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return Cs.apply(void 0, r);
  };
var cv = (
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
            var c = this.clonePosition();
            this.bump(), i.push({
              type: ht.pound,
              location: Ze(c, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(ze.UNMATCHED_CLOSING_TAG, Ze(this.clonePosition(), this.clonePosition()));
          } else if (a === 60 && !this.ignoreTag && xs(this.peek() || 0)) {
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
            type: ht.literal,
            value: "<".concat(i, "/>"),
            location: Ze(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var a = this.parseMessage(e + 1, n, !0);
        if (a.err)
          return a;
        var o = a.val, c = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !xs(this.char()))
            return this.error(ze.INVALID_TAG, Ze(c, this.clonePosition()));
          var l = this.clonePosition(), u = this.parseTagName();
          return i !== u ? this.error(ze.UNMATCHED_CLOSING_TAG, Ze(l, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: ht.tag,
              value: i,
              children: o,
              location: Ze(r, this.clonePosition())
            },
            err: null
          } : this.error(ze.INVALID_TAG, Ze(c, this.clonePosition())));
        } else
          return this.error(ze.UNCLOSED_TAG, Ze(r, this.clonePosition()));
      } else
        return this.error(ze.INVALID_TAG, Ze(r, this.clonePosition()));
    }, t.prototype.parseTagName = function() {
      var e = this.offset();
      for (this.bump(); !this.isEOF() && fv(this.char()); )
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
        var c = this.tryParseLeftAngleBracket();
        if (c) {
          i += c;
          continue;
        }
        break;
      }
      var l = Ze(r, this.clonePosition());
      return {
        val: { type: ht.literal, value: i, location: l },
        err: null
      };
    }, t.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !dv(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      return Cs.apply(void 0, n);
    }, t.prototype.tryParseUnquoted = function(e, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && e > 0 ? null : (this.bump(), Cs(r));
    }, t.prototype.parseArgument = function(e, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(ze.EXPECT_ARGUMENT_CLOSING_BRACE, Ze(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(ze.EMPTY_ARGUMENT, Ze(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(ze.MALFORMED_ARGUMENT, Ze(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(ze.EXPECT_ARGUMENT_CLOSING_BRACE, Ze(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: ht.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: Ze(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(ze.EXPECT_ARGUMENT_CLOSING_BRACE, Ze(r, this.clonePosition())) : this.parseArgumentOptions(e, n, i, r);
        default:
          return this.error(ze.MALFORMED_ARGUMENT, Ze(r, this.clonePosition()));
      }
    }, t.prototype.parseIdentifierIfPossible = function() {
      var e = this.clonePosition(), n = this.offset(), r = Ss(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var a = this.clonePosition(), o = Ze(e, a);
      return { value: r, location: o };
    }, t.prototype.parseArgumentOptions = function(e, n, r, i) {
      var a, o = this.clonePosition(), c = this.parseIdentifierIfPossible().value, l = this.clonePosition();
      switch (c) {
        case "":
          return this.error(ze.EXPECT_ARGUMENT_TYPE, Ze(o, l));
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
            var f = uv(h.val);
            if (f.length === 0)
              return this.error(ze.EXPECT_ARGUMENT_STYLE, Ze(this.clonePosition(), this.clonePosition()));
            var v = Ze(d, this.clonePosition());
            u = { style: f, styleLocation: v };
          }
          var p = this.tryParseArgumentClose(i);
          if (p.err)
            return p;
          var g = Ze(i, this.clonePosition());
          if (u && Fl(u == null ? void 0 : u.style, "::", 0)) {
            var I = lv(u.style.slice(2));
            if (c === "number") {
              var h = this.parseNumberSkeletonFromString(I, u.styleLocation);
              return h.err ? h : {
                val: { type: ht.number, value: r, location: g, style: h.val },
                err: null
              };
            } else {
              if (I.length === 0)
                return this.error(ze.EXPECT_DATE_TIME_SKELETON, g);
              var A = I;
              this.locale && (A = Yh(I, this.locale));
              var f = {
                type: Ji.dateTime,
                pattern: A,
                location: u.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Gh(A) : {}
              }, S = c === "date" ? ht.date : ht.time;
              return {
                val: { type: S, value: r, location: g, style: f },
                err: null
              };
            }
          }
          return {
            val: {
              type: c === "number" ? ht.number : c === "date" ? ht.date : ht.time,
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
          var x = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(ze.EXPECT_SELECT_ARGUMENT_OPTIONS, Ze(x, ce({}, x)));
          this.bumpSpace();
          var b = this.parseIdentifierIfPossible(), _ = 0;
          if (c !== "select" && b.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(ze.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Ze(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var h = this.tryParseDecimalInteger(ze.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ze.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (h.err)
              return h;
            this.bumpSpace(), b = this.parseIdentifierIfPossible(), _ = h.val;
          }
          var T = this.tryParsePluralOrSelectOptions(e, c, n, b);
          if (T.err)
            return T;
          var p = this.tryParseArgumentClose(i);
          if (p.err)
            return p;
          var w = Ze(i, this.clonePosition());
          return c === "select" ? {
            val: {
              type: ht.select,
              value: r,
              options: Bl(T.val),
              location: w
            },
            err: null
          } : {
            val: {
              type: ht.plural,
              value: r,
              options: Bl(T.val),
              offset: _,
              pluralType: c === "plural" ? "cardinal" : "ordinal",
              location: w
            },
            err: null
          };
        }
        default:
          return this.error(ze.INVALID_ARGUMENT_TYPE, Ze(o, l));
      }
    }, t.prototype.tryParseArgumentClose = function(e) {
      return this.isEOF() || this.char() !== 125 ? this.error(ze.EXPECT_ARGUMENT_CLOSING_BRACE, Ze(e, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, t.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var e = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(ze.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Ze(i, this.clonePosition()));
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
        r = qh(e);
      } catch {
        return this.error(ze.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: Ji.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? Xh(r) : {}
        },
        err: null
      };
    }, t.prototype.tryParsePluralOrSelectOptions = function(e, n, r, i) {
      for (var a, o = !1, c = [], l = /* @__PURE__ */ new Set(), u = i.value, d = i.location; ; ) {
        if (u.length === 0) {
          var h = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var f = this.tryParseDecimalInteger(ze.EXPECT_PLURAL_ARGUMENT_SELECTOR, ze.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (f.err)
              return f;
            d = Ze(h, this.clonePosition()), u = this.message.slice(h.offset, this.offset());
          } else
            break;
        }
        if (l.has(u))
          return this.error(n === "select" ? ze.DUPLICATE_SELECT_ARGUMENT_SELECTOR : ze.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, d);
        u === "other" && (o = !0), this.bumpSpace();
        var v = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? ze.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : ze.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Ze(this.clonePosition(), this.clonePosition()));
        var p = this.parseMessage(e + 1, n, r);
        if (p.err)
          return p;
        var g = this.tryParseArgumentClose(v);
        if (g.err)
          return g;
        c.push([
          u,
          {
            value: p.val,
            location: Ze(v, this.clonePosition())
          }
        ]), l.add(u), this.bumpSpace(), a = this.parseIdentifierIfPossible(), u = a.value, d = a.location;
      }
      return c.length === 0 ? this.error(n === "select" ? ze.EXPECT_SELECT_ARGUMENT_SELECTOR : ze.EXPECT_PLURAL_ARGUMENT_SELECTOR, Ze(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(ze.MISSING_OTHER_CLAUSE, Ze(this.clonePosition(), this.clonePosition())) : { val: c, err: null };
    }, t.prototype.tryParseDecimalInteger = function(e, n) {
      var r = 1, i = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (r = -1);
      for (var a = !1, o = 0; !this.isEOF(); ) {
        var c = this.char();
        if (c >= 48 && c <= 57)
          a = !0, o = o * 10 + (c - 48), this.bump();
        else
          break;
      }
      var l = Ze(i, this.clonePosition());
      return a ? (o *= r, ov(o) ? { val: o, err: null } : this.error(n, l)) : this.error(e, l);
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
      var n = Nc(this.message, e);
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
      if (Fl(this.message, e, this.offset())) {
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
      for (; !this.isEOF() && Hc(this.char()); )
        this.bump();
    }, t.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var e = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (e >= 65536 ? 2 : 1));
      return r ?? null;
    }, t;
  }()
);
function xs(t) {
  return t >= 97 && t <= 122 || t >= 65 && t <= 90;
}
function dv(t) {
  return xs(t) || t === 47;
}
function fv(t) {
  return t === 45 || t === 46 || t >= 48 && t <= 57 || t === 95 || t >= 97 && t <= 122 || t >= 65 && t <= 90 || t == 183 || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039;
}
function Hc(t) {
  return t >= 9 && t <= 13 || t === 32 || t === 133 || t >= 8206 && t <= 8207 || t === 8232 || t === 8233;
}
function hv(t) {
  return t >= 33 && t <= 35 || t === 36 || t >= 37 && t <= 39 || t === 40 || t === 41 || t === 42 || t === 43 || t === 44 || t === 45 || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || t === 91 || t === 92 || t === 93 || t === 94 || t === 96 || t === 123 || t === 124 || t === 125 || t === 126 || t === 161 || t >= 162 && t <= 165 || t === 166 || t === 167 || t === 169 || t === 171 || t === 172 || t === 174 || t === 176 || t === 177 || t === 182 || t === 187 || t === 191 || t === 215 || t === 247 || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || t === 8216 || t === 8217 || t === 8218 || t >= 8219 && t <= 8220 || t === 8221 || t === 8222 || t === 8223 || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || t === 8249 || t === 8250 || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || t === 8260 || t === 8261 || t === 8262 || t >= 8263 && t <= 8273 || t === 8274 || t === 8275 || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || t === 8608 || t >= 8609 && t <= 8610 || t === 8611 || t >= 8612 && t <= 8613 || t === 8614 || t >= 8615 && t <= 8621 || t === 8622 || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || t === 8658 || t === 8659 || t === 8660 || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || t === 8968 || t === 8969 || t === 8970 || t === 8971 || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9e3 || t === 9001 || t === 9002 || t >= 9003 && t <= 9083 || t === 9084 || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || t === 9655 || t >= 9656 && t <= 9664 || t === 9665 || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || t === 9839 || t >= 9840 && t <= 10087 || t === 10088 || t === 10089 || t === 10090 || t === 10091 || t === 10092 || t === 10093 || t === 10094 || t === 10095 || t === 10096 || t === 10097 || t === 10098 || t === 10099 || t === 10100 || t === 10101 || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || t === 10181 || t === 10182 || t >= 10183 && t <= 10213 || t === 10214 || t === 10215 || t === 10216 || t === 10217 || t === 10218 || t === 10219 || t === 10220 || t === 10221 || t === 10222 || t === 10223 || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || t === 10627 || t === 10628 || t === 10629 || t === 10630 || t === 10631 || t === 10632 || t === 10633 || t === 10634 || t === 10635 || t === 10636 || t === 10637 || t === 10638 || t === 10639 || t === 10640 || t === 10641 || t === 10642 || t === 10643 || t === 10644 || t === 10645 || t === 10646 || t === 10647 || t === 10648 || t >= 10649 && t <= 10711 || t === 10712 || t === 10713 || t === 10714 || t === 10715 || t >= 10716 && t <= 10747 || t === 10748 || t === 10749 || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || t === 11158 || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || t === 11778 || t === 11779 || t === 11780 || t === 11781 || t >= 11782 && t <= 11784 || t === 11785 || t === 11786 || t === 11787 || t === 11788 || t === 11789 || t >= 11790 && t <= 11798 || t === 11799 || t >= 11800 && t <= 11801 || t === 11802 || t === 11803 || t === 11804 || t === 11805 || t >= 11806 && t <= 11807 || t === 11808 || t === 11809 || t === 11810 || t === 11811 || t === 11812 || t === 11813 || t === 11814 || t === 11815 || t === 11816 || t === 11817 || t >= 11818 && t <= 11822 || t === 11823 || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || t === 11840 || t === 11841 || t === 11842 || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || t === 11858 || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || t === 12296 || t === 12297 || t === 12298 || t === 12299 || t === 12300 || t === 12301 || t === 12302 || t === 12303 || t === 12304 || t === 12305 || t >= 12306 && t <= 12307 || t === 12308 || t === 12309 || t === 12310 || t === 12311 || t === 12312 || t === 12313 || t === 12314 || t === 12315 || t === 12316 || t === 12317 || t >= 12318 && t <= 12319 || t === 12320 || t === 12336 || t === 64830 || t === 64831 || t >= 65093 && t <= 65094;
}
function Ts(t) {
  t.forEach(function(e) {
    if (delete e.location, Tc(e) || wc(e))
      for (var n in e.options)
        delete e.options[n].location, Ts(e.options[n].value);
    else Cc(e) && Oc(e.style) || (Sc(e) || xc(e)) && Es(e.style) ? delete e.style.location : Lc(e) && Ts(e.children);
  });
}
function vv(t, e) {
  e === void 0 && (e = {}), e = ce({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e);
  var n = new cv(t, e).parse();
  if (n.err) {
    var r = SyntaxError(ze[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return e != null && e.captureLocation || Ts(n.val), n.val;
}
var $i;
(function(t) {
  t.MISSING_VALUE = "MISSING_VALUE", t.INVALID_VALUE = "INVALID_VALUE", t.MISSING_INTL_API = "MISSING_INTL_API";
})($i || ($i = {}));
var Do = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n, r, i) {
      var a = t.call(this, n) || this;
      return a.code = r, a.originalMessage = i, a;
    }
    return e.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, e;
  }(Error)
), Vl = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n, r, i, a) {
      return t.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), $i.INVALID_VALUE, a) || this;
    }
    return e;
  }(Do)
), pv = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n, r, i) {
      return t.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), $i.INVALID_VALUE, i) || this;
    }
    return e;
  }(Do)
), mv = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n, r) {
      return t.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), $i.MISSING_VALUE, r) || this;
    }
    return e;
  }(Do)
), Zt;
(function(t) {
  t[t.literal = 0] = "literal", t[t.object = 1] = "object";
})(Zt || (Zt = {}));
function gv(t) {
  return t.length < 2 ? t : t.reduce(function(e, n) {
    var r = e[e.length - 1];
    return !r || r.type !== Zt.literal || n.type !== Zt.literal ? e.push(n) : r.value += n.value, e;
  }, []);
}
function bv(t) {
  return typeof t == "function";
}
function ao(t, e, n, r, i, a, o) {
  if (t.length === 1 && Pl(t[0]))
    return [
      {
        type: Zt.literal,
        value: t[0].value
      }
    ];
  for (var c = [], l = 0, u = t; l < u.length; l++) {
    var d = u[l];
    if (Pl(d)) {
      c.push({
        type: Zt.literal,
        value: d.value
      });
      continue;
    }
    if (kh(d)) {
      typeof a == "number" && c.push({
        type: Zt.literal,
        value: n.getNumberFormat(e).format(a)
      });
      continue;
    }
    var h = d.value;
    if (!(i && h in i))
      throw new mv(h, o);
    var f = i[h];
    if (Bh(d)) {
      (!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), c.push({
        type: typeof f == "string" ? Zt.literal : Zt.object,
        value: f
      });
      continue;
    }
    if (Sc(d)) {
      var v = typeof d.style == "string" ? r.date[d.style] : Es(d.style) ? d.style.parsedOptions : void 0;
      c.push({
        type: Zt.literal,
        value: n.getDateTimeFormat(e, v).format(f)
      });
      continue;
    }
    if (xc(d)) {
      var v = typeof d.style == "string" ? r.time[d.style] : Es(d.style) ? d.style.parsedOptions : r.time.medium;
      c.push({
        type: Zt.literal,
        value: n.getDateTimeFormat(e, v).format(f)
      });
      continue;
    }
    if (Cc(d)) {
      var v = typeof d.style == "string" ? r.number[d.style] : Oc(d.style) ? d.style.parsedOptions : void 0;
      v && v.scale && (f = f * (v.scale || 1)), c.push({
        type: Zt.literal,
        value: n.getNumberFormat(e, v).format(f)
      });
      continue;
    }
    if (Lc(d)) {
      var p = d.children, g = d.value, I = i[g];
      if (!bv(I))
        throw new pv(g, "function", o);
      var A = ao(p, e, n, r, i, a), S = I(A.map(function(_) {
        return _.value;
      }));
      Array.isArray(S) || (S = [S]), c.push.apply(c, S.map(function(_) {
        return {
          type: typeof _ == "string" ? Zt.literal : Zt.object,
          value: _
        };
      }));
    }
    if (Tc(d)) {
      var x = d.options[f] || d.options.other;
      if (!x)
        throw new Vl(d.value, f, Object.keys(d.options), o);
      c.push.apply(c, ao(x.value, e, n, r, i));
      continue;
    }
    if (wc(d)) {
      var x = d.options["=".concat(f)];
      if (!x) {
        if (!Intl.PluralRules)
          throw new Do(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, $i.MISSING_INTL_API, o);
        var b = n.getPluralRules(e, { type: d.pluralType }).select(f - (d.offset || 0));
        x = d.options[b] || d.options.other;
      }
      if (!x)
        throw new Vl(d.value, f, Object.keys(d.options), o);
      c.push.apply(c, ao(x.value, e, n, r, i, f - (d.offset || 0)));
      continue;
    }
  }
  return gv(c);
}
function yv(t, e) {
  return e ? ce(ce(ce({}, t || {}), e || {}), Object.keys(t).reduce(function(n, r) {
    return n[r] = ce(ce({}, t[r]), e[r] || {}), n;
  }, {})) : t;
}
function Iv(t, e) {
  return e ? Object.keys(t).reduce(function(n, r) {
    return n[r] = yv(t[r], e[r]), n;
  }, ce({}, t)) : t;
}
function es(t) {
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
function _v(t) {
  return t === void 0 && (t = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: Qo(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.NumberFormat).bind.apply(e, Xn([void 0], n, !1)))();
    }, {
      cache: es(t.number),
      strategy: Jo.variadic
    }),
    getDateTimeFormat: Qo(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.DateTimeFormat).bind.apply(e, Xn([void 0], n, !1)))();
    }, {
      cache: es(t.dateTime),
      strategy: Jo.variadic
    }),
    getPluralRules: Qo(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.PluralRules).bind.apply(e, Xn([void 0], n, !1)))();
    }, {
      cache: es(t.pluralRules),
      strategy: Jo.variadic
    })
  };
}
var Fc = (
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
          return !h.length || f.type !== Zt.literal || typeof h[h.length - 1] != "string" ? h.push(f.value) : h[h.length - 1] += f.value, h;
        }, []);
        return d.length <= 1 ? d[0] || "" : d;
      }, this.formatToParts = function(l) {
        return ao(a.ast, a.locales, a.formatters, a.formats, l, void 0, a.message);
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
        var c = Lh(o, ["formatters"]);
        this.ast = t.__parse(e, ce(ce({}, c), { locale: this.resolvedLocale }));
      } else
        this.ast = e;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = Iv(t.formats, r), this.formatters = i && i.formatters || _v(this.formatterCache);
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
    }, t.__parse = vv, t.formats = {
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
function Ev(t, e) {
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
const Ar = {}, Av = (t, e, n) => n && (e in Ar || (Ar[e] = {}), t in Ar[e] || (Ar[e][t] = n), n), Bc = (t, e) => {
  if (e == null)
    return;
  if (e in Ar && t in Ar[e])
    return Ar[e][t];
  const n = Ga(e);
  for (let r = 0; r < n.length; r++) {
    const i = n[r], a = Sv(i, t);
    if (a)
      return Av(t, e, a);
  }
};
let el;
const Va = dt({});
function Cv(t) {
  return el[t] || null;
}
function kc(t) {
  return t in el;
}
function Sv(t, e) {
  if (!kc(t))
    return null;
  const n = Cv(t);
  return Ev(n, e);
}
function xv(t) {
  if (t == null)
    return;
  const e = Ga(t);
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (kc(r))
      return r;
  }
}
function Vc(t, ...e) {
  delete Ar[t], Va.update((n) => (n[t] = wh.all([n[t] || {}, ...e]), n));
}
ia(
  [Va],
  ([t]) => Object.keys(t)
);
Va.subscribe((t) => el = t);
const oo = {};
function Tv(t, e) {
  oo[t].delete(e), oo[t].size === 0 && delete oo[t];
}
function Gc(t) {
  return oo[t];
}
function wv(t) {
  return Ga(t).map((e) => {
    const n = Gc(e);
    return [e, n ? [...n] : []];
  }).filter(([, e]) => e.length > 0);
}
function co(t) {
  return t == null ? !1 : Ga(t).some(
    (e) => {
      var n;
      return (n = Gc(e)) == null ? void 0 : n.size;
    }
  );
}
function Lv(t, e) {
  return Promise.all(
    e.map((r) => (Tv(t, r), r().then((i) => i.default || i)))
  ).then((r) => Vc(t, ...r));
}
const va = {};
function jc(t) {
  if (!co(t))
    return t in va ? va[t] : Promise.resolve();
  const e = wv(t);
  return va[t] = Promise.all(
    e.map(
      ([n, r]) => Lv(n, r)
    )
  ).then(() => {
    if (co(t))
      return jc(t);
    delete va[t];
  }), va[t];
}
var Gl = Object.getOwnPropertySymbols, Ov = Object.prototype.hasOwnProperty, Rv = Object.prototype.propertyIsEnumerable, Mv = (t, e) => {
  var n = {};
  for (var r in t)
    Ov.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && Gl)
    for (var r of Gl(t))
      e.indexOf(r) < 0 && Rv.call(t, r) && (n[r] = t[r]);
  return n;
};
const Dv = {
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
function Pv({ locale: t, id: e }) {
  console.warn(
    `[svelte-i18n] The message "${e}" was not found in "${Ga(
      t
    ).join('", "')}".${co(Hr()) ? `

Note: there are at least one loader still registered to this locale that wasn't executed.` : ""}`
  );
}
const Nv = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: Dv,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, _a = Nv;
function ea() {
  return _a;
}
function Uv(t) {
  const e = t, { formats: n } = e, r = Mv(e, ["formats"]);
  let i = t.fallbackLocale;
  if (t.initialLocale)
    try {
      Fc.resolveLocale(t.initialLocale) && (i = t.initialLocale);
    } catch {
      console.warn(
        `[svelte-i18n] The initial locale "${t.initialLocale}" is not a valid locale.`
      );
    }
  return r.warnOnMissingMessages && (delete r.warnOnMissingMessages, r.handleMissingMessage == null ? r.handleMissingMessage = Pv : console.warn(
    '[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.'
  )), Object.assign(_a, r, { initialLocale: i }), n && ("number" in n && Object.assign(_a.formats.number, n.number), "date" in n && Object.assign(_a.formats.date, n.date), "time" in n && Object.assign(_a.formats.time, n.time)), hi.set(i);
}
const ts = dt(!1);
var Hv = Object.defineProperty, Fv = Object.defineProperties, Bv = Object.getOwnPropertyDescriptors, jl = Object.getOwnPropertySymbols, kv = Object.prototype.hasOwnProperty, Vv = Object.prototype.propertyIsEnumerable, ql = (t, e, n) => e in t ? Hv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Gv = (t, e) => {
  for (var n in e || (e = {}))
    kv.call(e, n) && ql(t, n, e[n]);
  if (jl)
    for (var n of jl(e))
      Vv.call(e, n) && ql(t, n, e[n]);
  return t;
}, jv = (t, e) => Fv(t, Bv(e));
let ws;
const fo = dt(null);
function Wl(t) {
  return t.split("-").map((e, n, r) => r.slice(0, n + 1).join("-")).reverse();
}
function Ga(t, e = ea().fallbackLocale) {
  const n = Wl(t);
  return e ? [.../* @__PURE__ */ new Set([...n, ...Wl(e)])] : n;
}
function Hr() {
  return ws ?? void 0;
}
fo.subscribe((t) => {
  ws = t ?? void 0, typeof window < "u" && t != null && document.documentElement.setAttribute("lang", t);
});
const qv = (t) => {
  if (t && xv(t) && co(t)) {
    const { loadingDelay: e } = ea();
    let n;
    return typeof window < "u" && Hr() != null && e ? n = window.setTimeout(
      () => ts.set(!0),
      e
    ) : ts.set(!0), jc(t).then(() => {
      fo.set(t);
    }).finally(() => {
      clearTimeout(n), ts.set(!1);
    });
  }
  return fo.set(t);
}, hi = jv(Gv({}, fo), {
  set: qv
}), Wv = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0], Po = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (r) => {
    const i = JSON.stringify(r);
    return i in e ? e[i] : e[i] = t(r);
  };
};
var Kv = Object.defineProperty, ho = Object.getOwnPropertySymbols, qc = Object.prototype.hasOwnProperty, Wc = Object.prototype.propertyIsEnumerable, Kl = (t, e, n) => e in t ? Kv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, tl = (t, e) => {
  for (var n in e || (e = {}))
    qc.call(e, n) && Kl(t, n, e[n]);
  if (ho)
    for (var n of ho(e))
      Wc.call(e, n) && Kl(t, n, e[n]);
  return t;
}, aa = (t, e) => {
  var n = {};
  for (var r in t)
    qc.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && ho)
    for (var r of ho(t))
      e.indexOf(r) < 0 && Wc.call(t, r) && (n[r] = t[r]);
  return n;
};
const Oa = (t, e) => {
  const { formats: n } = ea();
  if (t in n && e in n[t])
    return n[t][e];
  throw new Error(`[svelte-i18n] Unknown "${e}" ${t} format.`);
}, zv = Po(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = aa(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return r && (i = Oa("number", r)), new Intl.NumberFormat(n, i);
  }
), Xv = Po(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = aa(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return r ? i = Oa("date", r) : Object.keys(i).length === 0 && (i = Oa("date", "short")), new Intl.DateTimeFormat(n, i);
  }
), Yv = Po(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = aa(e, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return r ? i = Oa("time", r) : Object.keys(i).length === 0 && (i = Oa("time", "short")), new Intl.DateTimeFormat(n, i);
  }
), Zv = (t = {}) => {
  var e = t, {
    locale: n = Hr()
  } = e, r = aa(e, [
    "locale"
  ]);
  return zv(tl({ locale: n }, r));
}, Qv = (t = {}) => {
  var e = t, {
    locale: n = Hr()
  } = e, r = aa(e, [
    "locale"
  ]);
  return Xv(tl({ locale: n }, r));
}, Jv = (t = {}) => {
  var e = t, {
    locale: n = Hr()
  } = e, r = aa(e, [
    "locale"
  ]);
  return Yv(tl({ locale: n }, r));
}, $v = Po(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (t, e = Hr()) => new Fc(t, e, ea().formats, {
    ignoreTag: ea().ignoreTag
  })
), ep = (t, e = {}) => {
  var n, r, i, a;
  let o = e;
  typeof t == "object" && (o = t, t = o.id);
  const {
    values: c,
    locale: l = Hr(),
    default: u
  } = o;
  if (l == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let d = Bc(t, l);
  if (!d)
    d = (a = (i = (r = (n = ea()).handleMissingMessage) == null ? void 0 : r.call(n, { locale: l, id: t, defaultValue: u })) != null ? i : u) != null ? a : t;
  else if (typeof d != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${t}" must be of type "string", found: "${typeof d}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), d;
  if (!c)
    return d;
  let h = d;
  try {
    h = $v(d, l).format(c);
  } catch (f) {
    f instanceof Error && console.warn(
      `[svelte-i18n] Message "${t}" has syntax error:`,
      f.message
    );
  }
  return h;
}, tp = (t, e) => Jv(e).format(t), np = (t, e) => Qv(e).format(t), rp = (t, e) => Zv(e).format(t), ip = (t, e = Hr()) => Bc(t, e), ap = ia([hi, Va], () => ep);
ia([hi], () => tp);
ia([hi], () => np);
ia([hi], () => rp);
ia([hi, Va], () => ip);
function op(t, e) {
  Object.entries(t).forEach(([a, o]) => {
    Vc(a, o);
  });
  const n = localStorage.getItem("language"), r = "en", i = n ?? Wv();
  console.log("Initial: Setting the language to", i), Uv({
    fallbackLocale: r,
    initialLocale: i
  }), window.addEventListener("oscd-language-changed", (a) => {
    const o = a;
    if (!o.detail.language) {
      console.error("No translations for language");
      return;
    }
    console.log("Updating the language to", o.detail.language), hi.set(o.detail.language);
  });
}
const sp = "Suche", lp = "Filtertypen", up = "Filter hinzufügen", cp = "Keine Ressourcen gefunden.", dp = "Loading...", fp = {
  search: sp,
  filter_types: lp,
  add_filter: up,
  no_resources_found: cp,
  loading: dp
}, hp = "Search", vp = "Filter Types", pp = "Add Filter", mp = "No resources found.", gp = "Loading...", bp = {
  search: hp,
  filter_types: vp,
  add_filter: pp,
  no_resources_found: mp,
  loading: gp
};
function yp(t, e = {}) {
  const n = e.priority || "polite", r = e.ownerDocument || document, i = r.querySelectorAll("[data-smui-dom-announce]");
  i.length && i.forEach((o) => {
    var c;
    (c = o.parentNode) === null || c === void 0 || c.removeChild(o);
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
function He(t) {
  return Object.entries(t).filter(([e, n]) => e !== "" && n).map(([e]) => e).join(" ");
}
function qe(t, e, n, r = { bubbles: !0 }) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  if (!t)
    throw new Error("Tried to dispatch event without element.");
  const i = new CustomEvent(e, Object.assign(Object.assign({}, r), { detail: n }));
  return t == null || t.dispatchEvent(i), i;
}
function ta(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const a = n[i], o = a.indexOf("$");
    o !== -1 && e.indexOf(a.substring(0, o + 1)) !== -1 || e.indexOf(a) === -1 && (r[a] = t[a]);
  }
  return r;
}
function st(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const a = n[i];
    a.substring(0, e.length) === e && (r[a.substring(e.length)] = t[a]);
  }
  return r;
}
class ja {
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
    n in a || (a[n] = /* @__PURE__ */ new Map()), a[n].set(r, kf(e, n, r, i));
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
var Ya;
function Kc(t, e) {
  e === void 0 && (e = !1);
  var n = t.CSS, r = Ya;
  if (typeof Ya == "boolean" && !e)
    return Ya;
  var i = n && typeof n.supports == "function";
  if (!i)
    return !1;
  var a = n.supports("--css-vars", "yes"), o = n.supports("(--css-vars: yes)") && n.supports("color", "#00000000");
  return r = a || o, e || (Ya = r), r;
}
function Ip(t, e, n) {
  if (!t)
    return { x: 0, y: 0 };
  var r = e.x, i = e.y, a = r + n.left, o = i + n.top, c, l;
  if (t.type === "touchstart") {
    var u = t;
    c = u.changedTouches[0].pageX - a, l = u.changedTouches[0].pageY - o;
  } else {
    var d = t;
    c = d.pageX - a, l = d.pageY - o;
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
var Ut = (
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
var No = (
  /** @class */
  function() {
    function t(e, n) {
      for (var r = [], i = 2; i < arguments.length; i++)
        r[i - 2] = arguments[i];
      this.root = e, this.initialize.apply(this, Xn([], Or(r))), this.foundation = n === void 0 ? this.getDefaultFoundation() : n, this.foundation.init(), this.initialSyncWithDOM();
    }
    return t.attachTo = function(e) {
      return new t(e, new Ut({}));
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
function Ea(t) {
  return t === void 0 && (t = window), _p(t) ? { passive: !0 } : !1;
}
function _p(t) {
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
const zc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: Ea
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
function Ep(t, e) {
  if (t.closest)
    return t.closest(e);
  for (var n = t; n; ) {
    if (nl(n, e))
      return n;
    n = n.parentElement;
  }
  return null;
}
function nl(t, e) {
  var n = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return n.call(t, e);
}
function Ap(t) {
  var e = t;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var n = e.cloneNode(!0);
  n.style.setProperty("position", "absolute"), n.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(n);
  var r = n.scrollWidth;
  return document.documentElement.removeChild(n), r;
}
const Uo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: Ep,
  estimateScrollWidth: Ap,
  matches: nl
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
var Cp = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Sp = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, zl = {
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
var Xl = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Yl = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Za = [], Ho = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n) {
      var r = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
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
        return Cp;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Sp;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return zl;
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
          for (var a = Rt(Xl), o = a.next(); !o.done; o = a.next()) {
            var c = o.value;
            this.adapter.registerInteractionHandler(c, this.activateHandler);
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
          for (var a = Rt(Yl), o = a.next(); !o.done; o = a.next()) {
            var c = o.value;
            this.adapter.registerDocumentInteractionHandler(c, this.deactivateHandler);
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
        for (var i = Rt(Xl), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          this.adapter.deregisterInteractionHandler(o, this.activateHandler);
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
        for (var i = Rt(Yl), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          this.adapter.deregisterDocumentInteractionHandler(o, this.deactivateHandler);
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
          var a = this.previousActivationEvent, o = a && n !== void 0 && a.type !== n.type;
          if (!o) {
            i.isActivated = !0, i.isProgrammatic = n === void 0, i.activationEvent = n, i.wasActivatedByPointer = i.isProgrammatic ? !1 : n !== void 0 && (n.type === "mousedown" || n.type === "touchstart" || n.type === "pointerdown");
            var c = n !== void 0 && Za.length > 0 && Za.some(function(l) {
              return r.adapter.containsEventTarget(l);
            });
            if (c) {
              this.resetActivationState();
              return;
            }
            n !== void 0 && (Za.push(n.target), this.registerDeactivationHandlers(n)), i.wasElementMadeActive = this.checkElementMadeActive(n), i.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Za = [], !i.wasElementMadeActive && n !== void 0 && (n.key === " " || n.keyCode === 32) && (i.wasElementMadeActive = r.checkElementMadeActive(n), i.wasElementMadeActive && r.animateActivation()), i.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(n) {
      return n !== void 0 && n.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var n = this, r = e.strings, i = r.VAR_FG_TRANSLATE_START, a = r.VAR_FG_TRANSLATE_END, o = e.cssClasses, c = o.FG_DEACTIVATION, l = o.FG_ACTIVATION, u = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var d = "", h = "";
      if (!this.adapter.isUnbounded()) {
        var f = this.getFgTranslationCoordinates(), v = f.startPoint, p = f.endPoint;
        d = v.x + "px, " + v.y + "px", h = p.x + "px, " + p.y + "px";
      }
      this.adapter.updateCssVariable(i, d), this.adapter.updateCssVariable(a, h), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(c), this.adapter.computeBoundingRect(), this.adapter.addClass(l), this.activationTimer = setTimeout(function() {
        n.activationTimerCallback();
      }, u);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var n = this.activationState, r = n.activationEvent, i = n.wasActivatedByPointer, a;
      i ? a = Ip(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
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
      var n = this, r = e.cssClasses.FG_DEACTIVATION, i = this.activationState, a = i.hasDeactivationUXRun, o = i.isActivated, c = a || !o;
      c && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(r), this.fgDeactivationRemovalTimer = setTimeout(function() {
        n.adapter.removeClass(r);
      }, zl.FG_DEACTIVATION_MS));
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
        var i = ce({}, r);
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
  }(Ut)
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
var vo = (
  /** @class */
  function(t) {
    $e(e, t);
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
          return Kc(window);
        },
        computeBoundingRect: function() {
          return n.root.getBoundingClientRect();
        },
        containsEventTarget: function(r) {
          return n.root.contains(r);
        },
        deregisterDocumentInteractionHandler: function(r, i) {
          return document.documentElement.removeEventListener(r, i, Ea());
        },
        deregisterInteractionHandler: function(r, i) {
          return n.root.removeEventListener(r, i, Ea());
        },
        deregisterResizeHandler: function(r) {
          return window.removeEventListener("resize", r);
        },
        getWindowPageOffset: function() {
          return { x: window.pageXOffset, y: window.pageYOffset };
        },
        isSurfaceActive: function() {
          return nl(n.root, ":active");
        },
        isSurfaceDisabled: function() {
          return !!n.disabled;
        },
        isUnbounded: function() {
          return !!n.unbounded;
        },
        registerDocumentInteractionHandler: function(r, i) {
          return document.documentElement.addEventListener(r, i, Ea());
        },
        registerInteractionHandler: function(r, i) {
          return n.root.addEventListener(r, i, Ea());
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
      return new Ho(e.createAdapter(this));
    }, e.prototype.initialSyncWithDOM = function() {
      var n = this.root;
      this.isUnbounded = "mdcRippleIsUnbounded" in n.dataset;
    }, e.prototype.setUnbounded = function() {
      this.foundation.setUnbounded(!!this.isUnbounded);
    }, e;
  }(No)
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
var cr = /* @__PURE__ */ new Set();
cr.add(Me.PAGE_UP);
cr.add(Me.PAGE_DOWN);
cr.add(Me.END);
cr.add(Me.HOME);
cr.add(Me.ARROW_LEFT);
cr.add(Me.ARROW_UP);
cr.add(Me.ARROW_RIGHT);
cr.add(Me.ARROW_DOWN);
function yt(t) {
  var e = t.key;
  if (rn.has(e))
    return e;
  var n = an.get(t.keyCode);
  return n || Me.UNKNOWN;
}
function xp(t) {
  return cr.has(yt(t));
}
const { applyPassive: Zl } = zc, { matches: Tp } = Uo;
function Kt(t, { ripple: e = !0, surface: n = !1, unbounded: r = !1, disabled: i = !1, color: a, active: o, rippleElement: c, eventTarget: l, activeTarget: u, addClass: d = (p) => t.classList.add(p), removeClass: h = (p) => t.classList.remove(p), addStyle: f = (p, g) => t.style.setProperty(p, g), initPromise: v = Promise.resolve() } = {}) {
  let p, g = new ja(), I = se("SMUI:addLayoutListener"), A, S = o, x = l, b = u;
  function _() {
    n ? (d("mdc-ripple-surface"), a === "primary" ? (d("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")) : a === "secondary" ? (h("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : (h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary"))) : (h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), p && S !== o && (S = o, o ? p.activate() : o === !1 && p.deactivate()), e && !p ? (p = new Ho({
      addClass: d,
      browserSupportsCssVars: () => Kc(window),
      computeBoundingRect: () => (c || t).getBoundingClientRect(),
      containsEventTarget: (w) => t.contains(w),
      deregisterDocumentInteractionHandler: (w, E) => g.off(document.documentElement, w, E),
      deregisterInteractionHandler: (w, E) => g.off(l || t, w, E),
      deregisterResizeHandler: (w) => window.removeEventListener("resize", w),
      getWindowPageOffset: () => {
        var w, E;
        return {
          x: (w = window.pageXOffset) !== null && w !== void 0 ? w : window.scrollX,
          y: (E = window.pageYOffset) !== null && E !== void 0 ? E : window.scrollY
        };
      },
      isSurfaceActive: () => o ?? Tp(u || t, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!r,
      registerDocumentInteractionHandler: (w, E) => {
        const C = Zl();
        g.on(document.documentElement, w, E, typeof C == "boolean" ? { capture: C } : C);
      },
      registerInteractionHandler: (w, E) => {
        const C = Zl();
        g.on(l || t, w, E, typeof C == "boolean" ? { capture: C } : C);
      },
      registerResizeHandler: (w) => g.on(window, "resize", w),
      removeClass: h,
      updateCssVariable: f
    }), v.then(() => {
      p && (p.init(), p.setUnbounded(r));
    })) : p && !e && v.then(() => {
      p && (p.destroy(), p = void 0, g.clear());
    }), p && (x !== l || b !== u) && (x = l, b = u, p.destroy(), requestAnimationFrame(() => {
      p && (p.init(), p.setUnbounded(r));
    })), !e && r && d("mdc-ripple-upgraded--unbounded");
  }
  _(), I && (A = I(T));
  function T() {
    p && p.layout();
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
        rippleElement: c,
        eventTarget: l,
        activeTarget: u,
        addClass: d,
        removeClass: h,
        addStyle: f,
        initPromise: v
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (E) => t.classList.add(E), removeClass: (E) => t.classList.remove(E), addStyle: (E, C) => t.style.setProperty(E, C), initPromise: Promise.resolve() }, w)), _();
    },
    destroy() {
      p && (p.destroy(), p = void 0, g.clear(), h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), A && A();
    }
  };
}
function wp(t, e) {
  Oe(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "component", 3, Fr), a = m(e, "tag", 3, "span"), o = /* @__PURE__ */ We(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "component",
    "tag",
    "children"
  ]), c;
  const l = se("SMUI:label:context"), u = se("SMUI:label:tabindex");
  function d() {
    return c.getElement();
  }
  var h = { getElement: d }, f = ie(), v = X(f);
  {
    let p = /* @__PURE__ */ ae(() => He({
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
    ur(v, i, (g, I) => {
      we(
        I(g, nt(
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
              return u;
            }
          },
          () => o,
          {
            children: (A, S) => {
              var x = ie(), b = X(x);
              Ae(b, () => e.children ?? me), O(A, x);
            },
            $$slots: { default: !0 }
          }
        )),
        (A) => c = A,
        () => c
      );
    });
  }
  return O(t, f), Re(h);
}
function Lp(t, e) {
  Oe(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "on", 3, !1), a = m(e, "component", 3, Fr), o = m(e, "tag", 3, "i"), c = /* @__PURE__ */ We(e, [
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
  const u = /* @__PURE__ */ ae(() => o() === "svg" || a() === Mp), d = se("SMUI:icon:context");
  function h() {
    return l.getElement();
  }
  var f = { getElement: h }, v = ie(), p = X(v);
  {
    let g = /* @__PURE__ */ ae(() => He({
      "mdc-button__icon": d === "button",
      "mdc-fab__icon": d === "fab",
      "mdc-icon-button__icon": d === "icon-button",
      "mdc-icon-button__icon--on": d === "icon-button" && i(),
      "mdc-tab__icon": d === "tab",
      "mdc-banner__icon": d === "banner",
      "mdc-segmented-button__icon": d === "segmented-button",
      [r()]: !0
    }));
    ur(p, a, (I, A) => {
      we(
        A(I, nt(
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
          () => s(u) ? { focusable: "false", tabindex: "-1" } : {},
          () => c,
          {
            children: (S, x) => {
              var b = ie(), _ = X(b);
              Ae(_, () => e.children ?? me), O(S, b);
            },
            $$slots: { default: !0 }
          }
        )),
        (S) => l = S,
        () => l
      );
    });
  }
  return O(t, v), Re(f);
}
var Op = /* @__PURE__ */ cn("<svg><!></svg>");
function Fr(t, e) {
  Oe(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "tag", 3, "div"), i = /* @__PURE__ */ We(e, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
  const a = /* @__PURE__ */ ae(() => [
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
  function c() {
    return o;
  }
  var l = { getElement: c }, u = ie(), d = X(u);
  {
    var h = (v) => {
      var p = Op();
      ke(p, () => ({ ...i }));
      var g = Ie(p);
      Ae(g, () => e.children ?? me), we(p, (I) => o = I, () => o), Be(p, (I, A) => z == null ? void 0 : z(I, A), n), O(v, p);
    }, f = (v) => {
      var p = ie(), g = X(p);
      {
        var I = (S) => {
          var x = ie(), b = X(x);
          xl(b, r, !1, (_, T) => {
            we(_, (w) => o = w, () => o), Be(_, (w, E) => z == null ? void 0 : z(w, E), n), ke(_, () => ({ ...i }));
          }), O(S, x);
        }, A = (S) => {
          var x = ie(), b = X(x);
          xl(b, r, !1, (_, T) => {
            we(_, (C) => o = C, () => o), Be(_, (C, D) => z == null ? void 0 : z(C, D), n), ke(_, () => ({ ...i }));
            var w = ie(), E = X(w);
            Ae(E, () => e.children ?? me), O(T, w);
          }), O(S, x);
        };
        le(
          g,
          (S) => {
            s(a) ? S(I) : S(A, !1);
          },
          !0
        );
      }
      O(v, p);
    };
    le(d, (v) => {
      r() === "svg" ? v(h) : v(f, !1);
    });
  }
  return O(t, u), Re(l);
}
var Rp = /* @__PURE__ */ cn("<svg><!></svg>");
function Mp(t, e) {
  Oe(e, !0), console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let n = m(e, "use", 19, () => []), r = /* @__PURE__ */ We(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i;
  function a() {
    return i;
  }
  var o = { getElement: a }, c = Rp();
  ke(c, () => ({ ...r }));
  var l = Ie(c);
  return Ae(l, () => e.children ?? me), we(c, (u) => i = u, () => i), Be(c, (u, d) => z == null ? void 0 : z(u, d), n), O(t, c), Re(o);
}
function Si(t, e) {
  Oe(e, !0);
  const [n, r] = On(), i = dt(e.value);
  ne(e.key, i), Te(() => {
    gn(i, e.value);
  }), Hn(() => {
    i.set(void 0);
  });
  var a = ie(), o = X(a);
  Ae(o, () => e.children ?? me), O(t, a), Re(), r();
}
var Dp = /* @__PURE__ */ fe('<div class="mdc-button__touch"></div>'), Pp = /* @__PURE__ */ fe('<div class="mdc-button__ripple"></div> <!><!>', 1);
function Np(t, e) {
  Oe(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "ripple", 3, !0), o = m(e, "color", 3, "primary"), c = m(e, "variant", 3, "text"), l = m(e, "touch", 3, !1), u = m(e, "action", 3, "close"), d = m(e, "defaultAction", 3, !1), h = m(e, "secondary", 3, !1), f = m(e, "component", 3, Fr), v = m(e, "tag", 19, () => e.href == null ? "button" : "a"), p = /* @__PURE__ */ We(e, [
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
  ]), g, I = ye({}), A = ye({}), S = se("SMUI:button:context");
  const x = /* @__PURE__ */ ae(() => S === "dialog:action" && u() != null ? { "data-mdc-dialog-action": u() } : { action: u() }), b = /* @__PURE__ */ ae(() => S === "dialog:action" && d() ? { "data-mdc-dialog-button-default": "" } : {}), _ = /* @__PURE__ */ ae(() => S === "banner" ? {} : { secondary: h() });
  let T = e.disabled;
  Te(() => {
    if (T !== e.disabled) {
      if (g) {
        const q = j();
        "blur" in q && q.blur();
      }
      T = p.disabled;
    }
  }), ne("SMUI:label:context", "button"), ne("SMUI:icon:context", "button");
  function w(q) {
    I[q] || (I[q] = !0);
  }
  function E(q) {
    (!(q in I) || I[q]) && (I[q] = !1);
  }
  function C(q, F) {
    A[q] != F && (F === "" || F == null ? delete A[q] : A[q] = F);
  }
  function D() {
    S === "banner" && qe(j(), h() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function j() {
    return g.getElement();
  }
  var H = { getElement: j }, B = ie(), _e = X(B);
  {
    let q = /* @__PURE__ */ ae(() => [
      [
        Kt,
        {
          ripple: a(),
          unbounded: !1,
          color: o(),
          disabled: !!e.disabled,
          addClass: w,
          removeClass: E,
          addStyle: C
        }
      ],
      ...n()
    ]), F = /* @__PURE__ */ ae(() => He({
      "mdc-button": !0,
      "mdc-button--raised": c() === "raised",
      "mdc-button--unelevated": c() === "unelevated",
      "mdc-button--outlined": c() === "outlined",
      "smui-button--color-secondary": o() === "secondary",
      "mdc-button--touch": l(),
      "mdc-card__action": S === "card:action",
      "mdc-card__action--button": S === "card:action",
      "mdc-dialog__button": S === "dialog:action",
      "mdc-top-app-bar__navigation-icon": S === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": S === "top-app-bar:action",
      "mdc-snackbar__action": S === "snackbar:actions",
      "mdc-banner__secondary-action": S === "banner" && h(),
      "mdc-banner__primary-action": S === "banner" && !h(),
      "mdc-tooltip__action": S === "tooltip:rich-actions",
      ...I,
      [r()]: !0
    })), U = /* @__PURE__ */ ae(() => Object.entries(A).map(([W, te]) => `${W}: ${te};`).concat([i()]).join(" "));
    ur(_e, f, (W, te) => {
      we(
        te(W, nt(
          {
            get tag() {
              return v();
            },
            get use() {
              return s(q);
            },
            get class() {
              return s(F);
            },
            get style() {
              return s(U);
            }
          },
          () => s(x),
          () => s(b),
          () => s(_),
          {
            get href() {
              return e.href;
            }
          },
          () => p,
          {
            onclick: (N) => {
              var y;
              D(), (y = e.onclick) == null || y.call(e, N);
            },
            children: (N, y) => {
              var L = Pp(), J = Ee(X(L), 2);
              Ae(J, () => e.children ?? me);
              var P = Ee(J);
              {
                var G = (ge) => {
                  var k = Dp();
                  O(ge, k);
                };
                le(P, (ge) => {
                  l() && ge(G);
                });
              }
              O(N, L);
            },
            $$slots: { default: !0 }
          }
        )),
        (N) => g = N,
        () => g
      );
    });
  }
  return O(t, B), Re(H);
}
function rl(t, e) {
  Oe(e, !0);
  let n = m(e, "callback", 3, () => {
  }), r = m(e, "disabled", 3, !1), i = m(e, "variant", 3, "default"), a = m(e, "isAbortAction", 3, !1), o = m(e, "backgroundColor", 3, void 0);
  {
    let c = /* @__PURE__ */ ae(() => a() ? "background-color: #ff3e00;" : "background-color: " + o());
    Np(t, {
      onclick: () => n()(),
      get variant() {
        return i();
      },
      get disabled() {
        return r();
      },
      get style() {
        return s(c);
      },
      children: (l, u) => {
        var d = ie(), h = X(d);
        Ae(h, () => e.children ?? me), O(l, d);
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
var Qa = {
  ICON_BUTTON_ON: "mdc-icon-button--on",
  ROOT: "mdc-icon-button"
}, $n = {
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
var Up = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n) {
      var r = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
      return r.hasToggledAriaLabel = !1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Qa;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return $n;
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
      var n = this.adapter.getAttr($n.DATA_ARIA_LABEL_ON), r = this.adapter.getAttr($n.DATA_ARIA_LABEL_OFF);
      if (n && r) {
        if (this.adapter.getAttr($n.ARIA_PRESSED) !== null)
          throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");
        this.hasToggledAriaLabel = !0;
      } else
        this.adapter.setAttr($n.ARIA_PRESSED, String(this.isOn()));
    }, e.prototype.handleClick = function() {
      this.toggle(), this.adapter.notifyChange({ isOn: this.isOn() });
    }, e.prototype.isOn = function() {
      return this.adapter.hasClass(Qa.ICON_BUTTON_ON);
    }, e.prototype.toggle = function(n) {
      if (n === void 0 && (n = !this.isOn()), n ? this.adapter.addClass(Qa.ICON_BUTTON_ON) : this.adapter.removeClass(Qa.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var r = n ? this.adapter.getAttr($n.DATA_ARIA_LABEL_ON) : this.adapter.getAttr($n.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr($n.ARIA_LABEL, r || "");
      } else
        this.adapter.setAttr($n.ARIA_PRESSED, "" + n);
    }, e;
  }(Ut)
), Hp = /* @__PURE__ */ fe('<div class="mdc-icon-button__touch"></div>'), Fp = /* @__PURE__ */ fe('<div class="mdc-icon-button__ripple"></div> <!><!>', 1);
function Bp(t, e) {
  Oe(e, !0);
  let n = () => {
  };
  function r(y) {
    return y === n;
  }
  let i = m(e, "use", 19, () => []), a = m(e, "class", 3, ""), o = m(e, "style", 3, ""), c = m(e, "ripple", 3, !0), l = m(e, "toggle", 3, !1), u = m(e, "pressed", 15, n), d = m(e, "touch", 3, !1), h = m(e, "displayFlex", 3, !0), f = m(e, "size", 3, "normal"), v = m(e, "component", 3, Fr), p = m(e, "tag", 19, () => e.href == null ? "button" : "a"), g = /* @__PURE__ */ We(e, [
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
  ]), I, A, S = /* @__PURE__ */ be(ye({})), x = ye({}), b = /* @__PURE__ */ be(ye({})), _ = se("SMUI:icon-button:context"), T = se("SMUI:icon-button:aria-describedby");
  const w = /* @__PURE__ */ ae(() => {
    if (_ === "data-table:pagination")
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
    else return _ === "dialog:header" || _ === "dialog:sheet" ? { "data-mdc-dialog-action": e.action } : { action: e.action };
  });
  let E = !!e.disabled;
  Te(() => {
    if (E != !!e.disabled) {
      if (I) {
        const y = U();
        "blur" in y && y.blur();
      }
      E = !!e.disabled;
    }
  }), ne("SMUI:icon:context", "icon-button");
  let C = null;
  Te(() => {
    I && U() && l() !== C && (l() && !A ? (A = new Up({
      addClass: j,
      hasClass: D,
      notifyChange: (y) => {
        F(y), qe(U(), "SMUIIconButtonToggleChange", y);
      },
      removeClass: H,
      getAttr: _e,
      setAttr: q
    }), A.init()) : !l() && A && (A.destroy(), A = void 0, Q(S, {}, !0), Q(b, {}, !0)), C = l());
  }), Te(() => {
    A && !r(u()) && A.isOn() !== u() && A.toggle(u());
  }), Hn(() => {
    A && A.destroy();
  });
  function D(y) {
    return y in s(S) ? s(S)[y] : U().classList.contains(y);
  }
  function j(y) {
    s(S)[y] || (s(S)[y] = !0);
  }
  function H(y) {
    (!(y in s(S)) || s(S)[y]) && (s(S)[y] = !1);
  }
  function B(y, L) {
    x[y] != L && (L === "" || L == null ? delete x[y] : x[y] = L);
  }
  function _e(y) {
    return y in s(b) ? s(b)[y] ?? null : U().getAttribute(y);
  }
  function q(y, L) {
    s(b)[y] !== L && (s(b)[y] = L);
  }
  function F(y) {
    u(y.isOn);
  }
  function U() {
    return I.getElement();
  }
  var W = { getElement: U }, te = ie(), N = X(te);
  {
    let y = /* @__PURE__ */ ae(() => [
      [
        Kt,
        {
          ripple: c(),
          unbounded: !0,
          color: e.color,
          disabled: !!e.disabled,
          addClass: j,
          removeClass: H,
          addStyle: B
        }
      ],
      ...i()
    ]), L = /* @__PURE__ */ ae(() => He({
      "mdc-icon-button": !0,
      "mdc-icon-button--on": !r(u()) && u(),
      "mdc-icon-button--touch": d(),
      "mdc-icon-button--display-flex": h(),
      "smui-icon-button--size-button": f() === "button",
      "smui-icon-button--size-mini": f() === "mini",
      "mdc-icon-button--reduced-size": f() === "mini" || f() === "button",
      "mdc-card__action": _ === "card:action",
      "mdc-card__action--icon": _ === "card:action",
      "mdc-top-app-bar__navigation-icon": _ === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": _ === "top-app-bar:action",
      "mdc-snackbar__dismiss": _ === "snackbar:actions",
      "mdc-data-table__pagination-button": _ === "data-table:pagination",
      "mdc-data-table__sort-icon-button": _ === "data-table:sortable-header-cell",
      "mdc-dialog__close": (_ === "dialog:header" || _ === "dialog:sheet") && e.action === "close",
      ...s(S),
      [a()]: !0
    })), J = /* @__PURE__ */ ae(() => Object.entries(x).map(([ge, k]) => `${ge}: ${k};`).concat([o()]).join(" ")), P = /* @__PURE__ */ ae(() => r(u()) ? null : u() ? "true" : "false"), G = /* @__PURE__ */ ae(() => u() ? e.ariaLabelOn : e.ariaLabelOff);
    ur(N, v, (ge, k) => {
      we(
        k(ge, nt(
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
              return s(J);
            },
            get "aria-pressed"() {
              return s(P);
            },
            get "aria-label"() {
              return s(G);
            },
            get "data-aria-label-on"() {
              return e.ariaLabelOn;
            },
            get "data-aria-label-off"() {
              return e.ariaLabelOff;
            },
            get "aria-describedby"() {
              return T;
            },
            get href() {
              return e.href;
            }
          },
          () => s(w),
          () => s(b),
          () => g,
          {
            onclick: (oe) => {
              var Z;
              A && A.handleClick(), _ === "top-app-bar:navigation" && qe(U(), "SMUITopAppBarIconButtonNav"), (Z = e.onclick) == null || Z.call(e, oe);
            },
            children: (oe, Z) => {
              var ue = Fp(), pe = Ee(X(ue), 2);
              Ae(pe, () => e.children ?? me);
              var Pe = Ee(pe);
              {
                var rt = (Xe) => {
                  var Le = Hp();
                  O(Xe, Le);
                };
                le(Pe, (Xe) => {
                  d() && Xe(rt);
                });
              }
              O(oe, ue);
            },
            $$slots: { default: !0 }
          }
        )),
        (oe) => I = oe,
        () => I
      );
    });
  }
  return O(t, te), Re(W);
}
function kp(t, e) {
  let n = m(e, "callback", 3, () => {
  }), r = m(e, "icon", 3, ""), i = m(e, "disabled", 3, !1);
  Bp(t, {
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
      Lp(a, {
        class: "material-icons",
        children: (c, l) => {
          var u = Xt();
          Fe(() => vt(u, r())), O(c, u);
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
var Vp = {
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
var Gp = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n) {
      var r = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
      return r.shakeAnimationEndHandler = function() {
        r.handleShakeAnimationEnd();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Vp;
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
  }(Ut)
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
var Kr = {
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
var jp = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n) {
      var r = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
      return r.transitionEndHandler = function(i) {
        r.handleTransitionEnd(i);
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Kr;
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
      this.adapter.removeClass(Kr.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(Kr.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(n) {
      this.adapter.setStyle("transform-origin", n + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(Kr.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(n) {
      var r = this.adapter.hasClass(Kr.LINE_RIPPLE_DEACTIVATING);
      n.propertyName === "opacity" && r && (this.adapter.removeClass(Kr.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(Kr.LINE_RIPPLE_DEACTIVATING));
    }, e;
  }(Ut)
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
var qp = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Ql = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, Wp = {
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
var Kp = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n) {
      return t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return qp;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Wp;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Ql;
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
      n > 0 && (n += Ql.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(n), this.adapter.addClass(r);
    }, e.prototype.closeNotch = function() {
      var n = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(n), this.adapter.removeNotchWidthProperty();
    }, e;
  }(Ut)
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
var ns = {
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
}, zp = {
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
}, Jl = {
  LABEL_SCALE: 0.75
}, Xp = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], Yp = [
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
var $l = ["mousedown", "touchstart"], eu = ["click", "keydown"], Zp = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n, r) {
      r === void 0 && (r = {});
      var i = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
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
        return zp;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return ns;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Jl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var n = this.getNativeInput().type;
        return Yp.indexOf(n) >= 0;
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
        for (var o = Rt($l), c = o.next(); !c.done; c = o.next()) {
          var l = c.value;
          this.adapter.registerInputInteractionHandler(l, this.setPointerXOffset);
        }
      } catch (h) {
        n = { error: h };
      } finally {
        try {
          c && !c.done && (r = o.return) && r.call(o);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var u = Rt(eu), d = u.next(); !d.done; d = u.next()) {
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
        for (var o = Rt($l), c = o.next(); !c.done; c = o.next()) {
          var l = c.value;
          this.adapter.deregisterInputInteractionHandler(l, this.setPointerXOffset);
        }
      } catch (h) {
        n = { error: h };
      } finally {
        try {
          c && !c.done && (r = o.return) && r.call(o);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var u = Rt(eu), d = u.next(); !d.done; d = u.next()) {
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
        return Xp.indexOf(i) > -1 ? (r.styleValidity(!0), r.adapter.setLabelRequired(r.getNativeInput().required), !0) : !1;
      }), n.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(n) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (n) {
          var r = this.adapter.getLabelWidth() * Jl.LABEL_SCALE;
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
        a && o ? this.adapter.setInputAttr(ns.ARIA_DESCRIBEDBY, o) : this.adapter.removeInputAttr(ns.ARIA_DESCRIBEDBY);
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
  }(Ut)
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
var tu = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, Qp = {
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
var nu = ["click", "keydown"], Jp = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n) {
      var r = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
      return r.savedTabIndex = null, r.interactionHandler = function(i) {
        r.handleInteraction(i);
      }, r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return tu;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Qp;
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
        for (var i = Rt(nu), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          this.adapter.registerInteractionHandler(o, this.interactionHandler);
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
        for (var i = Rt(nu), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          this.adapter.deregisterInteractionHandler(o, this.interactionHandler);
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
      this.savedTabIndex && (n ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", tu.ICON_ROLE)));
    }, e.prototype.setAriaLabel = function(n) {
      this.adapter.setAttr("aria-label", n);
    }, e.prototype.setContent = function(n) {
      this.adapter.setContent(n);
    }, e.prototype.handleInteraction = function(n) {
      var r = n.key === "Enter" || n.keyCode === 13;
      (n.type === "click" || r) && (n.preventDefault(), this.adapter.notifyIconAction());
    }, e;
  }(Ut)
), $p = /* @__PURE__ */ fe("<span><!></span>"), em = /* @__PURE__ */ fe("<label><!></label>");
function po(t, e) {
  Oe(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "floatAbove", 15, !1), o = m(e, "required", 15, !1), c = m(e, "wrapped", 3, !1), l = /* @__PURE__ */ We(e, [
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
  ]), u, d = /* @__PURE__ */ be(void 0), h = new ja(), f = ye({}), v = ye({}), p = se("SMUI:generic:input:props") ?? {}, g = a();
  Te(() => {
    s(d) && g !== a() && (g = a(), s(d).float(a()));
  });
  let I = o();
  Te(() => {
    s(d) && I !== o() && (I = o(), s(d).setRequired(o()));
  });
  const A = se("SMUI:floating-label:mount"), S = se("SMUI:floating-label:unmount");
  at(() => {
    Q(
      d,
      new Gp({
        addClass: x,
        removeClass: b,
        getWidth: () => {
          var y, L;
          const W = j(), te = W.cloneNode(!0);
          (y = W.parentNode) == null || y.appendChild(te), te.classList.add("smui-floating-label--remove-transition"), te.classList.add("smui-floating-label--force-size"), te.classList.remove("mdc-floating-label--float-above");
          const N = te.scrollWidth;
          return (L = W.parentNode) == null || L.removeChild(te), N;
        },
        registerInteractionHandler: (W, te) => h.on(j(), W, te),
        deregisterInteractionHandler: (W, te) => h.off(j(), W, te)
      }),
      !0
    );
    const U = {
      get element() {
        return j();
      },
      addStyle: _,
      removeStyle: T
    };
    return A && A(U), s(d).init(), () => {
      var W;
      S && S(U), (W = s(d)) == null || W.destroy(), h.clear();
    };
  });
  function x(U) {
    f[U] || (f[U] = !0);
  }
  function b(U) {
    (!(U in f) || f[U]) && (f[U] = !1);
  }
  function _(U, W) {
    v[U] != W && (W === "" || W == null ? delete v[U] : v[U] = W);
  }
  function T(U) {
    U in v && delete v[U];
  }
  function w(U) {
    var W;
    (W = s(d)) == null || W.shake(U);
  }
  function E(U) {
    a(U);
  }
  function C(U) {
    o(U);
  }
  function D() {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    return s(d).getWidth();
  }
  function j() {
    return u;
  }
  var H = { shake: w, float: E, setRequired: C, getWidth: D, getElement: j }, B = ie(), _e = X(B);
  {
    var q = (U) => {
      var W = $p();
      ke(W, (N, y) => ({ class: N, style: y, ...l }), [
        () => He({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": o(),
          ...f,
          [r()]: !0
        }),
        () => Object.entries(v).map(([N, y]) => `${N}: ${y};`).concat([i()]).join(" ")
      ]);
      var te = Ie(W);
      Ae(te, () => e.children ?? me), we(W, (N) => u = N, () => u), Be(W, (N, y) => z == null ? void 0 : z(N, y), n), O(U, W);
    }, F = (U) => {
      var W = em();
      ke(
        W,
        (N, y) => ({
          class: N,
          style: y,
          for: e.for || (p ? p.id : void 0),
          ...l
        }),
        [
          () => He({
            "mdc-floating-label": !0,
            "mdc-floating-label--float-above": a(),
            "mdc-floating-label--required": o(),
            ...f,
            [r()]: !0
          }),
          () => Object.entries(v).map(([N, y]) => `${N}: ${y};`).concat([i()]).join(" ")
        ]
      );
      var te = Ie(W);
      Ae(te, () => e.children ?? me), we(W, (N) => u = N, () => u), Be(W, (N, y) => z == null ? void 0 : z(N, y), n), O(U, W);
    };
    le(_e, (U) => {
      c() ? U(q) : U(F, !1);
    });
  }
  return O(t, B), Re(H);
}
var tm = /* @__PURE__ */ fe("<div></div>");
function Xc(t, e) {
  Oe(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "active", 3, !1), o = /* @__PURE__ */ We(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "active"
  ]), c, l = /* @__PURE__ */ be(void 0), u = new ja(), d = ye({}), h = ye({});
  at(() => (Q(
    l,
    new jp({
      addClass: v,
      removeClass: p,
      hasClass: f,
      setStyle: g,
      registerEventHandler: (T, w) => u.on(x(), T, w),
      deregisterEventHandler: (T, w) => u.off(x(), T, w)
    }),
    !0
  ), s(l).init(), () => {
    var T;
    (T = s(l)) == null || T.destroy(), u.clear();
  }));
  function f(T) {
    return T in d ? d[T] : x().classList.contains(T);
  }
  function v(T) {
    d[T] || (d[T] = !0);
  }
  function p(T) {
    (!(T in d) || d[T]) && (d[T] = !1);
  }
  function g(T, w) {
    h[T] != w && (w === "" || w == null ? delete h[T] : h[T] = w);
  }
  function I() {
    var T;
    (T = s(l)) == null || T.activate();
  }
  function A() {
    var T;
    (T = s(l)) == null || T.deactivate();
  }
  function S(T) {
    var w;
    (w = s(l)) == null || w.setRippleCenter(T);
  }
  function x() {
    return c;
  }
  var b = { activate: I, deactivate: A, setRippleCenter: S, getElement: x }, _ = tm();
  return ke(_, (T, w) => ({ class: T, style: w, ...o }), [
    () => He({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...d,
      [r()]: !0
    }),
    () => Object.entries(h).map(([T, w]) => `${T}: ${w};`).concat([i()]).join(" ")
  ]), we(_, (T) => c = T, () => c), Be(_, (T, w) => z == null ? void 0 : z(T, w), n), O(t, _), Re(b);
}
var nm = /* @__PURE__ */ fe('<div class="mdc-notched-outline__notch"><!></div>'), rm = /* @__PURE__ */ fe('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function Yc(t, e) {
  Oe(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "notched", 3, !1), a = m(e, "noLabel", 3, !1), o = /* @__PURE__ */ We(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "notched",
    "noLabel",
    "children"
  ]), c, l = /* @__PURE__ */ be(void 0), u = /* @__PURE__ */ be(void 0), d = ye({}), h = ye({}), f;
  Te(() => {
    s(u) !== f && (s(u) ? (s(u).addStyle("transition-duration", "0s"), v("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      s(u) && s(u).removeStyle("transition-duration");
    })) : p("mdc-notched-outline--upgraded"), f = s(u));
  }), ne("SMUI:floating-label:mount", (E) => {
    Q(u, E, !0);
  }), ne("SMUI:floating-label:unmount", () => {
    Q(u, void 0);
  }), at(() => (Q(
    l,
    new Kp({
      addClass: v,
      removeClass: p,
      setNotchWidthProperty: (E) => g("width", E + "px"),
      removeNotchWidthProperty: () => I("width")
    }),
    !0
  ), s(l).init(), () => {
    var E;
    (E = s(l)) == null || E.destroy();
  }));
  function v(E) {
    d[E] || (d[E] = !0);
  }
  function p(E) {
    (!(E in d) || d[E]) && (d[E] = !1);
  }
  function g(E, C) {
    h[E] != C && (C === "" || C == null ? delete h[E] : h[E] = C);
  }
  function I(E) {
    E in h && delete h[E];
  }
  function A(E) {
    var C;
    (C = s(l)) == null || C.notch(E);
  }
  function S() {
    var E;
    (E = s(l)) == null || E.closeNotch();
  }
  function x() {
    return c;
  }
  var b = { notch: A, closeNotch: S, getElement: x }, _ = rm();
  ke(_, (E) => ({ class: E, ...o }), [
    () => He({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": i(),
      "mdc-notched-outline--no-label": a(),
      ...d,
      [r()]: !0
    })
  ]);
  var T = Ee(Ie(_), 2);
  {
    var w = (E) => {
      var C = nm(), D = Ie(C);
      Ae(D, () => e.children ?? me), Fe((j) => nn(C, j), [
        () => Object.entries(h).map(([j, H]) => `${j}: ${H};`).join(" ")
      ]), O(E, C);
    };
    le(T, (E) => {
      a() || E(w);
    });
  }
  return we(_, (E) => c = E, () => c), Be(_, (E, C) => z == null ? void 0 : z(E, C), n), O(t, _), Re(b);
}
function il(t, e) {
  Oe(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "component", 3, Fr), a = m(e, "tag", 3, "div"), o = m(e, "_smuiClass", 3, ""), c = m(e, "_smuiClassMap", 23, () => ({})), l = m(e, "_smuiContexts", 19, () => ({})), u = m(e, "_smuiProps", 19, () => ({})), d = /* @__PURE__ */ We(e, [
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
  Object.entries(c()).forEach(([A, S]) => {
    const x = se(S);
    x && "subscribe" in x && f.push(x.subscribe((b) => {
      c()[A] = b;
    }));
  });
  for (let A in l())
    l().hasOwnProperty(A) && ne(A, l()[A]);
  Hn(() => {
    for (const A of f)
      A();
  });
  function v() {
    return h.getElement();
  }
  var p = { getElement: v }, g = ie(), I = X(g);
  {
    let A = /* @__PURE__ */ ae(() => He({
      [o()]: !0,
      ...c(),
      [r()]: !0
    }));
    ur(I, i, (S, x) => {
      we(
        x(S, nt(
          {
            get tag() {
              return a();
            },
            get use() {
              return n();
            },
            get class() {
              return s(A);
            }
          },
          u,
          () => d,
          {
            children: (b, _) => {
              var T = ie(), w = X(T);
              Ae(w, () => e.children ?? me), O(b, T);
            },
            $$slots: { default: !0 }
          }
        )),
        (b) => h = b,
        () => h
      );
    });
  }
  return O(t, g), Re(p);
}
function im(t, e) {
  Oe(e, !0);
  let n = /* @__PURE__ */ We(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return we(
    il(t, nt({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => n, {
      children: (o, c) => {
        var l = ie(), u = X(l);
        Ae(u, () => e.children ?? me), O(o, l);
      },
      $$slots: { default: !0 }
    })),
    (o) => r = o,
    () => r
  ), Re(a);
}
function am(t, e) {
  Oe(e, !0);
  let n = /* @__PURE__ */ We(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return we(
    il(t, nt(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => n,
      {
        children: (o, c) => {
          var l = ie(), u = X(l);
          Ae(u, () => e.children ?? me), O(o, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), Re(a);
}
function om(t, e) {
  Oe(e, !0);
  let n = /* @__PURE__ */ We(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return we(
    il(t, nt(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => n,
      {
        children: (o, c) => {
          var l = ie(), u = X(l);
          Ae(u, () => e.children ?? me), O(o, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), Re(a);
}
var sm = /* @__PURE__ */ fe("<input/>");
function lm(t, e) {
  Oe(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "type", 3, "text"), a = m(e, "placeholder", 3, " "), o = m(e, "value", 15), c = m(e, "files", 15, null), l = m(e, "dirty", 15, !1), u = m(e, "invalid", 15, !1), d = m(e, "updateInvalid", 3, !0), h = m(e, "initialInvalid", 3, !1), f = m(e, "emptyValueNull", 19, () => o() === null), v = m(e, "emptyValueUndefined", 19, () => o() === void 0), p = /* @__PURE__ */ We(e, [
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
  ]), g, I = ye({}), A = ye({});
  Te(() => {
    i() === "file" ? delete A.value : A.value = o() == null ? "" : o();
  }), at(() => {
    d() && h() && u(D().matches(":invalid"));
  });
  function S(q) {
    return q === "" ? Number.NaN : +q;
  }
  function x(q) {
    if (i() === "file") {
      c(q.currentTarget.files);
      return;
    }
    if (q.currentTarget.value === "" && f()) {
      o(null);
      return;
    }
    if (q.currentTarget.value === "" && v()) {
      o(void 0);
      return;
    }
    switch (i()) {
      case "number":
      case "range":
        o(S(q.currentTarget.value));
        break;
      default:
        o(q.currentTarget.value);
        break;
    }
  }
  function b(q) {
    (i() === "file" || i() === "range") && x(q), l(!0), d() && u(D().matches(":invalid"));
  }
  function _(q) {
    return q in I ? I[q] ?? null : D().getAttribute(q);
  }
  function T(q, F) {
    I[q] !== F && (I[q] = F);
  }
  function w(q) {
    (!(q in I) || I[q] != null) && (I[q] = void 0);
  }
  function E() {
    D().focus();
  }
  function C() {
    D().blur();
  }
  function D() {
    return g;
  }
  var j = { getAttr: _, addAttr: T, removeAttr: w, focus: E, blur: C, getElement: D }, H = sm(), B = (q) => {
    var F;
    i() !== "file" && x(q), (F = e.oninput) == null || F.call(e, q);
  }, _e = (q) => {
    var F;
    b(q), (F = e.onchange) == null || F.call(e, q);
  };
  return ke(
    H,
    (q) => ({
      class: q,
      type: i(),
      placeholder: a(),
      ...A,
      ...I,
      ...p,
      oninput: B,
      onchange: _e
    }),
    [
      () => He({ "mdc-text-field__input": !0, [r()]: !0 })
    ],
    void 0,
    void 0,
    !0
  ), we(H, (q) => g = q, () => g), Be(H, (q, F) => z == null ? void 0 : z(q, F), n), O(t, H), Re(j);
}
var um = /* @__PURE__ */ fe("<textarea></textarea>");
function cm(t, e) {
  Oe(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "value", 15, ""), o = m(e, "dirty", 15, !1), c = m(e, "invalid", 15, !1), l = m(e, "updateInvalid", 3, !0), u = m(e, "initialInvalid", 3, !1), d = m(e, "resizable", 3, !0), h = /* @__PURE__ */ We(e, [
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
  ]), f, v = ye({});
  at(() => {
    l() && u() && c(b().matches(":invalid"));
  });
  function p() {
    o(!0), l() && c(b().matches(":invalid"));
  }
  function g(E) {
    return E in v ? v[E] ?? null : b().getAttribute(E);
  }
  function I(E, C) {
    v[E] !== C && (v[E] = C);
  }
  function A(E) {
    (!(E in v) || v[E] != null) && (v[E] = void 0);
  }
  function S() {
    b().focus();
  }
  function x() {
    b().blur();
  }
  function b() {
    return f;
  }
  var _ = { getAttr: g, addAttr: I, removeAttr: A, focus: S, blur: x, getElement: b }, T = um(), w = (E) => {
    var C;
    p(), (C = e.onchange) == null || C.call(e, E);
  };
  return ke(
    T,
    (E) => ({
      class: E,
      style: `${d() ? "" : "resize: none; "}${i()}`,
      ...v,
      ...h,
      onchange: w
    }),
    [
      () => He({ "mdc-text-field__input": !0, [r()]: !0 })
    ]
  ), we(T, (E) => f = E, () => f), Be(T, (E, C) => z == null ? void 0 : z(E, C), n), ka(() => wa(T, a)), O(t, T), Re(_);
}
var dm = /* @__PURE__ */ fe('<span class="mdc-text-field__ripple"></span>'), fm = /* @__PURE__ */ fe("<!> <!>", 1), hm = /* @__PURE__ */ fe("<span><!> <!></span>"), vm = /* @__PURE__ */ fe("<!> <!> <!>", 1), pm = /* @__PURE__ */ fe("<label><!> <!> <!> <!> <!> <!> <!></label>"), mm = /* @__PURE__ */ fe("<div><!> <!> <!> <!> <!></div>"), gm = /* @__PURE__ */ fe("<!> <!>", 1);
function ru(t, e) {
  Oe(e, !0);
  const { applyPassive: n } = zc;
  let r = () => {
  };
  function i(K) {
    return K === r;
  }
  let a = m(e, "use", 19, () => []), o = m(e, "class", 3, ""), c = m(e, "style", 3, ""), l = m(e, "ripple", 3, !0), u = m(e, "disabled", 3, !1), d = m(e, "required", 3, !1), h = m(e, "textarea", 3, !1), f = m(e, "variant", 19, () => h() ? "outlined" : "standard"), v = m(e, "noLabel", 3, !1), p = m(e, "type", 3, "text"), g = m(e, "value", 15), I = m(e, "files", 15, r), A = m(e, "invalid", 15, r), S = m(e, "updateInvalid", 19, () => i(A())), x = m(e, "initialInvalid", 3, !1), b = m(e, "dirty", 15, !1), _ = m(e, "validateOnValueChange", 19, S), T = m(e, "useNativeValidation", 19, S), w = m(e, "withLeadingIcon", 3, r), E = m(e, "withTrailingIcon", 3, r), C = m(e, "input", 7), D = m(e, "floatingLabel", 7), j = m(e, "lineRipple", 7), H = m(e, "notchedOutline", 7), B = /* @__PURE__ */ We(e, [
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
  const _e = g() !== void 0 || g() === void 0 && e.input$emptyValueUndefined || !i(I());
  i(I()) && I(null), i(A()) && A(!1);
  let q, F = /* @__PURE__ */ be(void 0), U = new ja(), W = ye({}), te = ye({}), N = /* @__PURE__ */ be(void 0), y = /* @__PURE__ */ be(!1), L = /* @__PURE__ */ be(ye(x())), J = se("SMUI:addLayoutListener"), P, G, ge = new Promise((K) => G = K), k, oe, Z, ue;
  const pe = /* @__PURE__ */ ae(() => C() && C().getElement());
  Te(() => {
    (b() || s(L) || !S()) && s(F) && s(F).isValid() !== !A() && (S() ? A(!s(F).isValid()) : s(F).setValid(!A()));
  }), Te(() => {
    s(F) && s(F).getValidateOnValueChange() !== _() && s(F).setValidateOnValueChange(i(_()) ? !1 : _());
  }), Te(() => {
    s(F) && s(F).setUseNativeValidation(i(T()) ? !0 : T());
  }), Te(() => {
    s(F) && s(F).setDisabled(u());
  });
  let Pe = g();
  Te(() => {
    if (s(F) && _e && Pe !== g()) {
      Pe = g();
      const K = `${g() == null ? "" : g()}`;
      s(F).getValue() !== K && s(F).setValue(K);
    }
  }), J && (P = J(M)), ne("SMUI:textfield:leading-icon:mount", (K) => {
    k = K;
  }), ne("SMUI:textfield:leading-icon:unmount", () => {
    k = void 0;
  }), ne("SMUI:textfield:trailing-icon:mount", (K) => {
    oe = K;
  }), ne("SMUI:textfield:trailing-icon:unmount", () => {
    oe = void 0;
  }), ne("SMUI:textfield:helper-text:id", (K) => {
    Q(N, K, !0);
  }), ne("SMUI:textfield:helper-text:mount", (K) => {
    Z = K;
  }), ne("SMUI:textfield:helper-text:unmount", () => {
    Q(N, void 0), Z = void 0;
  }), ne("SMUI:textfield:character-counter:mount", (K) => {
    ue = K;
  }), ne("SMUI:textfield:character-counter:unmount", () => {
    ue = void 0;
  }), at(() => {
    var K;
    if (Q(
      F,
      new Zp(
        {
          // getRootAdapterMethods_
          addClass: Xe,
          removeClass: Le,
          hasClass: rt,
          registerTextFieldInteractionHandler: (Y, De) => U.on(V(), Y, De),
          deregisterTextFieldInteractionHandler: (Y, De) => U.off(V(), Y, De),
          registerValidationAttributeChangeHandler: (Y) => {
            const De = (Tt) => Tt.map((Vt) => Vt.attributeName).filter((Vt) => Vt), ut = new MutationObserver((Tt) => {
              T() && Y(De(Tt));
            }), ot = { attributes: !0 };
            return C() && ut.observe(C().getElement(), ot), ut;
          },
          deregisterValidationAttributeChangeHandler: (Y) => {
            Y.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var Y;
            return ((Y = C()) == null ? void 0 : Y.getElement()) ?? null;
          },
          setInputAttr: (Y, De) => {
            var ut;
            (ut = C()) == null || ut.addAttr(Y, De);
          },
          removeInputAttr: (Y) => {
            var De;
            (De = C()) == null || De.removeAttr(Y);
          },
          isFocused: () => {
            var Y;
            return document.activeElement === ((Y = C()) == null ? void 0 : Y.getElement());
          },
          registerInputInteractionHandler: (Y, De) => {
            var ot;
            const ut = (ot = C()) == null ? void 0 : ot.getElement();
            if (ut) {
              const Tt = n();
              U.on(ut, Y, De, typeof Tt == "boolean" ? { capture: Tt } : Tt);
            }
          },
          deregisterInputInteractionHandler: (Y, De) => {
            var ot;
            const ut = (ot = C()) == null ? void 0 : ot.getElement();
            ut && U.off(ut, Y, De);
          },
          // getLabelAdapterMethods_
          floatLabel: (Y) => D() && D().float(Y),
          getLabelWidth: () => D() ? D().getWidth() : 0,
          hasLabel: () => !!D(),
          shakeLabel: (Y) => D() && D().shake(Y),
          setLabelRequired: (Y) => D() && D().setRequired(Y),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => j() && j().activate(),
          deactivateLineRipple: () => j() && j().deactivate(),
          setLineRippleTransformOrigin: (Y) => j() && j().setRippleCenter(Y),
          // getOutlineAdapterMethods_
          closeOutline: () => H() && H().closeNotch(),
          hasOutline: () => !!H(),
          notchOutline: (Y) => H() && H().notch(Y)
        },
        {
          get helperText() {
            return Z;
          },
          get characterCounter() {
            return ue;
          },
          get leadingIcon() {
            return k;
          },
          get trailingIcon() {
            return oe;
          }
        }
      ),
      !0
    ), _e) {
      if (C() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (K = s(F)) == null || K.init();
    } else
      Ro().then(() => {
        var Y;
        if (C() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (Y = s(F)) == null || Y.init();
      });
    return G(), () => {
      var Y;
      (Y = s(F)) == null || Y.destroy(), U.clear();
    };
  }), Hn(() => {
    P && P();
  });
  function rt(K) {
    return K in W ? W[K] ?? null : V().classList.contains(K);
  }
  function Xe(K) {
    W[K] || (W[K] = !0);
  }
  function Le(K) {
    (!(K in W) || W[K]) && (W[K] = !1);
  }
  function re(K, Y) {
    te[K] != Y && (Y === "" || Y == null ? delete te[K] : te[K] = Y);
  }
  function Ce() {
    var K;
    (K = C()) == null || K.focus();
  }
  function Ke() {
    var K;
    (K = C()) == null || K.blur();
  }
  function M() {
    if (s(F)) {
      const K = s(F).shouldFloat;
      s(F).notchOutline(K);
    }
  }
  function V() {
    return q;
  }
  var ee = { focus: Ce, blur: Ke, layout: M, getElement: V }, Se = gm(), St = X(Se);
  {
    var xt = (K) => {
      var Y = pm();
      ke(Y, (Ue, tt, et) => ({ class: Ue, style: tt, for: void 0, ...et }), [
        () => He({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": u(),
          "mdc-text-field--textarea": h(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !h(),
          "mdc-text-field--no-label": v() || e.label == null,
          "mdc-text-field--label-floating": s(y) || g() != null && g() !== "",
          "mdc-text-field--with-leading-icon": i(w()) ? e.leadingIcon : w(),
          "mdc-text-field--with-trailing-icon": i(E()) ? e.trailingIcon : E(),
          "mdc-text-field--with-internal-counter": h() && e.internalCounter,
          "mdc-text-field--invalid": A(),
          ...W,
          [o()]: !0
        }),
        () => Object.entries(te).map(([Ue, tt]) => `${Ue}: ${tt};`).concat([c()]).join(" "),
        () => ta(B, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var De = Ie(Y);
      {
        var ut = (Ue) => {
          var tt = fm(), et = X(tt);
          {
            var Mt = (gt) => {
              var wt = dm();
              O(gt, wt);
            };
            le(et, (gt) => {
              f() === "filled" && gt(Mt);
            });
          }
          var hn = Ee(et, 2);
          {
            var Qe = (gt) => {
              {
                let wt = /* @__PURE__ */ ae(() => s(y) || g() != null && g() !== "" && (typeof g() != "number" || !isNaN(g()))), Je = /* @__PURE__ */ ae(() => st(B, "label$"));
                we(
                  po(gt, nt(
                    {
                      get floatAbove() {
                        return s(wt);
                      },
                      get required() {
                        return d();
                      },
                      wrapped: !0
                    },
                    () => s(Je),
                    {
                      children: (Lt, Gt) => {
                        var Yt = ie(), _t = X(Yt);
                        {
                          var Dt = (bt) => {
                          }, on = (bt) => {
                            var Vr = ie(), In = X(Vr);
                            {
                              var hr = (_n) => {
                                var Zn = Xt();
                                Fe(() => vt(Zn, e.label)), O(_n, Zn);
                              }, oa = (_n) => {
                                var Zn = ie(), kn = X(Zn);
                                Ae(kn, () => e.label), O(_n, Zn);
                              };
                              le(
                                In,
                                (_n) => {
                                  typeof e.label == "string" ? _n(hr) : _n(oa, !1);
                                },
                                !0
                              );
                            }
                            O(bt, Vr);
                          };
                          le(_t, (bt) => {
                            e.label == null ? bt(Dt) : bt(on, !1);
                          });
                        }
                        O(Lt, Yt);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (Lt) => D(Lt),
                  () => D()
                );
              }
            };
            le(hn, (gt) => {
              !v() && e.label != null && gt(Qe);
            });
          }
          O(Ue, tt);
        };
        le(De, (Ue) => {
          !h() && f() !== "outlined" && Ue(ut);
        });
      }
      var ot = Ee(De, 2);
      {
        var Tt = (Ue) => {
          {
            let tt = /* @__PURE__ */ ae(() => v() || e.label == null), et = /* @__PURE__ */ ae(() => st(B, "outline$"));
            we(
              Yc(Ue, nt(
                {
                  get noLabel() {
                    return s(tt);
                  }
                },
                () => s(et),
                {
                  children: (Mt, hn) => {
                    var Qe = ie(), gt = X(Qe);
                    {
                      var wt = (Je) => {
                        {
                          let Lt = /* @__PURE__ */ ae(() => s(y) || g() != null && g() !== "" && (typeof g() != "number" || !isNaN(g()))), Gt = /* @__PURE__ */ ae(() => st(B, "label$"));
                          we(
                            po(Je, nt(
                              {
                                get floatAbove() {
                                  return s(Lt);
                                },
                                get required() {
                                  return d();
                                },
                                wrapped: !0
                              },
                              () => s(Gt),
                              {
                                children: (Yt, _t) => {
                                  var Dt = ie(), on = X(Dt);
                                  {
                                    var bt = (In) => {
                                    }, Vr = (In) => {
                                      var hr = ie(), oa = X(hr);
                                      {
                                        var _n = (kn) => {
                                          var Gr = Xt();
                                          Fe(() => vt(Gr, e.label)), O(kn, Gr);
                                        }, Zn = (kn) => {
                                          var Gr = ie(), Go = X(Gr);
                                          Ae(Go, () => e.label), O(kn, Gr);
                                        };
                                        le(
                                          oa,
                                          (kn) => {
                                            typeof e.label == "string" ? kn(_n) : kn(Zn, !1);
                                          },
                                          !0
                                        );
                                      }
                                      O(In, hr);
                                    };
                                    le(on, (In) => {
                                      e.label == null ? In(bt) : In(Vr, !1);
                                    });
                                  }
                                  O(Yt, Dt);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (Yt) => D(Yt),
                            () => D()
                          );
                        }
                      };
                      le(gt, (Je) => {
                        !v() && e.label != null && Je(wt);
                      });
                    }
                    O(Mt, Qe);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (Mt) => H(Mt),
              () => H()
            );
          }
        };
        le(ot, (Ue) => {
          (h() || f() === "outlined") && Ue(Tt);
        });
      }
      var Vt = Ee(ot, 2);
      Si(Vt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (Ue, tt) => {
          var et = ie(), Mt = X(et);
          Ae(Mt, () => e.leadingIcon ?? me), O(Ue, et);
        },
        $$slots: { default: !0 }
      });
      var fr = Ee(Vt, 2);
      Ae(fr, () => e.children ?? me);
      var ft = Ee(fr, 2);
      {
        var pt = (Ue) => {
          var tt = hm(), et = Ie(tt);
          {
            let hn = /* @__PURE__ */ ae(() => st(B, "input$"));
            we(
              cm(et, nt(
                {
                  get disabled() {
                    return u();
                  },
                  get required() {
                    return d();
                  },
                  get updateInvalid() {
                    return S();
                  },
                  get initialInvalid() {
                    return s(L);
                  },
                  get "aria-controls"() {
                    return s(N);
                  },
                  get "aria-describedby"() {
                    return s(N);
                  }
                },
                () => s(hn),
                {
                  onblur: (Qe) => {
                    var gt;
                    Q(y, !1), Q(L, !0), qe(V(), "blur", Qe), (gt = e.input$onblur) == null || gt.call(e, Qe);
                  },
                  onfocus: (Qe) => {
                    var gt;
                    Q(y, !0), qe(V(), "focus", Qe), (gt = e.input$onfocus) == null || gt.call(e, Qe);
                  },
                  get value() {
                    return g();
                  },
                  set value(Qe) {
                    g(Qe);
                  },
                  get dirty() {
                    return b();
                  },
                  set dirty(Qe) {
                    b(Qe);
                  },
                  get invalid() {
                    return A();
                  },
                  set invalid(Qe) {
                    A(Qe);
                  }
                }
              )),
              (Qe) => C(Qe),
              () => C()
            );
          }
          var Mt = Ee(et, 2);
          Ae(Mt, () => e.internalCounter ?? me), Fe((hn) => mc(tt, 1, hn), [
            () => pc(He({
              "mdc-text-field__resizer": !("input$resizable" in B) || e.input$resizable
            }))
          ]), O(Ue, tt);
        }, Ht = (Ue) => {
          var tt = vm(), et = X(tt);
          {
            var Mt = (wt) => {
              var Je = ie(), Lt = X(Je);
              {
                var Gt = (_t) => {
                  am(_t, {
                    children: (Dt, on) => {
                      var bt = Xt();
                      Fe(() => vt(bt, e.prefix)), O(Dt, bt);
                    },
                    $$slots: { default: !0 }
                  });
                }, Yt = (_t) => {
                  var Dt = ie(), on = X(Dt);
                  Ae(on, () => e.prefix ?? me), O(_t, Dt);
                };
                le(Lt, (_t) => {
                  typeof e.prefix == "string" ? _t(Gt) : _t(Yt, !1);
                });
              }
              O(wt, Je);
            };
            le(et, (wt) => {
              e.prefix != null && wt(Mt);
            });
          }
          var hn = Ee(et, 2);
          {
            let wt = /* @__PURE__ */ ae(() => st(B, "input$"));
            we(
              lm(hn, nt(
                {
                  get type() {
                    return p();
                  },
                  get disabled() {
                    return u();
                  },
                  get required() {
                    return d();
                  },
                  get updateInvalid() {
                    return S();
                  },
                  get initialInvalid() {
                    return s(L);
                  },
                  get "aria-controls"() {
                    return s(N);
                  },
                  get "aria-describedby"() {
                    return s(N);
                  }
                },
                () => v() && e.label != null && typeof e.label == "string" ? { placeholder: e.label } : {},
                () => s(wt),
                {
                  onblur: (Je) => {
                    var Lt;
                    Q(y, !1), Q(L, !0), qe(V(), "blur", Je), (Lt = e.input$onblur) == null || Lt.call(e, Je);
                  },
                  onfocus: (Je) => {
                    var Lt;
                    Q(y, !0), qe(V(), "focus", Je), (Lt = e.input$onfocus) == null || Lt.call(e, Je);
                  },
                  get value() {
                    return g();
                  },
                  set value(Je) {
                    g(Je);
                  },
                  get files() {
                    return I();
                  },
                  set files(Je) {
                    I(Je);
                  },
                  get dirty() {
                    return b();
                  },
                  set dirty(Je) {
                    b(Je);
                  },
                  get invalid() {
                    return A();
                  },
                  set invalid(Je) {
                    A(Je);
                  }
                }
              )),
              (Je) => C(Je),
              () => C()
            );
          }
          var Qe = Ee(hn, 2);
          {
            var gt = (wt) => {
              var Je = ie(), Lt = X(Je);
              {
                var Gt = (_t) => {
                  om(_t, {
                    children: (Dt, on) => {
                      var bt = Xt();
                      Fe(() => vt(bt, e.suffix)), O(Dt, bt);
                    },
                    $$slots: { default: !0 }
                  });
                }, Yt = (_t) => {
                  var Dt = ie(), on = X(Dt);
                  Ae(on, () => e.suffix ?? me), O(_t, Dt);
                };
                le(Lt, (_t) => {
                  typeof e.suffix == "string" ? _t(Gt) : _t(Yt, !1);
                });
              }
              O(wt, Je);
            };
            le(Qe, (wt) => {
              e.suffix != null && wt(gt);
            });
          }
          O(Ue, tt);
        };
        le(ft, (Ue) => {
          h() && typeof g() == "string" ? Ue(pt) : Ue(Ht, !1);
        });
      }
      var Fn = Ee(ft, 2);
      Si(Fn, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (Ue, tt) => {
          var et = ie(), Mt = X(et);
          Ae(Mt, () => e.trailingIcon ?? me), O(Ue, et);
        },
        $$slots: { default: !0 }
      });
      var mi = Ee(Fn, 2);
      {
        var Bn = (Ue) => {
          {
            let tt = /* @__PURE__ */ ae(() => st(B, "ripple$"));
            we(Xc(Ue, nt(() => s(tt))), (et) => j(et), () => j());
          }
        };
        le(mi, (Ue) => {
          !h() && f() !== "outlined" && l() && Ue(Bn);
        });
      }
      we(Y, (Ue) => q = Ue, () => q), Be(Y, (Ue, tt) => Kt == null ? void 0 : Kt(Ue, tt), () => ({
        ripple: !h() && f() === "filled",
        unbounded: !1,
        addClass: Xe,
        removeClass: Le,
        addStyle: re,
        eventTarget: s(pe),
        activeTarget: s(pe),
        initPromise: ge
      })), Be(Y, (Ue, tt) => z == null ? void 0 : z(Ue, tt), a), O(K, Y);
    }, fn = (K) => {
      var Y = mm();
      ke(Y, (ft, pt, Ht) => ({ class: ft, style: pt, ...Ht }), [
        () => He({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": u(),
          "mdc-text-field--textarea": h(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !h(),
          "mdc-text-field--no-label": v() || e.label == null,
          "mdc-text-field--with-leading-icon": e.leadingIcon,
          "mdc-text-field--with-trailing-icon": e.trailingIcon,
          "mdc-text-field--invalid": A(),
          ...W,
          [o()]: !0
        }),
        () => Object.entries(te).map(([ft, pt]) => `${ft}: ${pt};`).concat([c()]).join(" "),
        () => ta(B, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var De = Ie(Y);
      {
        var ut = (ft) => {
          var pt = ie(), Ht = X(pt);
          Ae(Ht, () => e.label ?? me), O(ft, pt);
        };
        le(De, (ft) => {
          typeof e.label != "string" && ft(ut);
        });
      }
      var ot = Ee(De, 2);
      Si(ot, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (ft, pt) => {
          var Ht = ie(), Fn = X(Ht);
          Ae(Fn, () => e.leadingIcon ?? me), O(ft, Ht);
        },
        $$slots: { default: !0 }
      });
      var Tt = Ee(ot, 2);
      Ae(Tt, () => e.children ?? me);
      var Vt = Ee(Tt, 2);
      Si(Vt, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (ft, pt) => {
          var Ht = ie(), Fn = X(Ht);
          Ae(Fn, () => e.trailingIcon ?? me), O(ft, Ht);
        },
        $$slots: { default: !0 }
      });
      var fr = Ee(Vt, 2);
      Ae(fr, () => e.line ?? me), we(Y, (ft) => q = ft, () => q), Be(Y, (ft, pt) => Kt == null ? void 0 : Kt(ft, pt), () => ({
        ripple: l(),
        unbounded: !1,
        addClass: Xe,
        removeClass: Le,
        addStyle: re
      })), Be(Y, (ft, pt) => z == null ? void 0 : z(ft, pt), a), O(K, Y);
    };
    le(St, (K) => {
      _e ? K(xt) : K(fn, !1);
    });
  }
  var ve = Ee(St, 2);
  {
    var de = (K) => {
      {
        let Y = /* @__PURE__ */ ae(() => st(B, "helperLine$"));
        im(K, nt(() => s(Y), {
          children: (De, ut) => {
            var ot = ie(), Tt = X(ot);
            Ae(Tt, () => e.helper ?? me), O(De, ot);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    le(ve, (K) => {
      e.helper && K(de);
    });
  }
  return O(t, Se), Re(ee);
}
var bm = /* @__PURE__ */ fe("<i><!></i>");
function ym(t, e) {
  Oe(e, !0);
  const n = () => Nt(p, "$leadingStore", r), [r, i] = On();
  let a = m(e, "use", 19, () => []), o = m(e, "class", 3, ""), c = m(e, "tabindex", 19, () => e.role === "button" ? 0 : -1), l = m(e, "disabled", 3, !1), u = /* @__PURE__ */ We(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "role",
    "tabindex",
    "disabled",
    "children"
  ]), d, h = /* @__PURE__ */ be(void 0), f = new ja(), v = ye({});
  const p = se("SMUI:textfield:icon:leading"), g = n();
  let I = /* @__PURE__ */ be(void 0);
  const A = /* @__PURE__ */ ae(() => ({ role: e.role, tabindex: c() })), S = se("SMUI:textfield:leading-icon:mount"), x = se("SMUI:textfield:leading-icon:unmount"), b = se("SMUI:textfield:trailing-icon:mount"), _ = se("SMUI:textfield:trailing-icon:unmount");
  at(() => (Q(
    h,
    new Jp({
      getAttr: T,
      setAttr: w,
      removeAttr: E,
      setContent: (F) => {
        Q(I, F, !0);
      },
      registerInteractionHandler: (F, U) => f.on(C(), F, U),
      deregisterInteractionHandler: (F, U) => f.off(C(), F, U),
      notifyIconAction: () => qe(C(), "SMUITextFieldIcon")
    }),
    !0
  ), g ? S && S(s(h)) : b && b(s(h)), s(h).init(), () => {
    var F;
    s(h) && (g ? x && x(s(h)) : _ && _(s(h))), (F = s(h)) == null || F.destroy(), f.clear();
  }));
  function T(F) {
    return F in v ? v[F] ?? null : C().getAttribute(F);
  }
  function w(F, U) {
    v[F] !== U && (v[F] = U);
  }
  function E(F) {
    (!(F in v) || v[F] != null) && (v[F] = void 0);
  }
  function C() {
    return d;
  }
  var D = { getElement: C }, j = bm();
  ke(
    j,
    (F) => ({
      class: F,
      "aria-hidden": c() === -1 ? "true" : "false",
      "aria-disabled": e.role === "button" ? l() ? "true" : "false" : void 0,
      ...s(A),
      ...v,
      ...u
    }),
    [
      () => He({
        "mdc-text-field__icon": !0,
        "mdc-text-field__icon--leading": g,
        "mdc-text-field__icon--trailing": !g,
        [o()]: !0
      })
    ]
  );
  var H = Ie(j);
  {
    var B = (F) => {
      var U = ie(), W = X(U);
      Ae(W, () => e.children ?? me), O(F, U);
    }, _e = (F) => {
      var U = Xt();
      Fe(() => vt(U, s(I))), O(F, U);
    };
    le(H, (F) => {
      s(I) == null ? F(B) : F(_e, !1);
    });
  }
  we(j, (F) => d = F, () => d), Be(j, (F, U) => z == null ? void 0 : z(F, U), a), O(t, j);
  var q = Re(D);
  return i(), q;
}
function Im(t, e) {
  Oe(e, !0);
  let n = m(e, "placeholder", 3, ""), r = m(e, "label", 3, ""), i = m(e, "icon", 3, ""), a = m(e, "value", 15, ""), o = m(e, "variant", 3, "standard"), c = m(e, "styles", 3, ""), l = m(e, "required", 3, !1), u = m(e, "oninput", 3, () => {
  });
  var d = ie(), h = X(d);
  {
    var f = (p) => {
      {
        const g = (A) => {
          ym(A, {
            class: "material-icons",
            children: (S, x) => {
              var b = Xt();
              Fe(() => vt(b, i())), O(S, b);
            },
            $$slots: { default: !0 }
          });
        };
        let I = /* @__PURE__ */ ae(() => `width: 100%; ${c()}`);
        ru(p, {
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
            return s(I);
          },
          get variant() {
            return o();
          },
          get oninput() {
            return u();
          },
          get value() {
            return a();
          },
          set value(A) {
            a(A);
          },
          leadingIcon: g,
          $$slots: { leadingIcon: !0 }
        });
      }
    }, v = (p) => {
      ru(p, {
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
    le(h, (p) => {
      i() ? p(f) : p(v, !1);
    });
  }
  O(t, d), Re();
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
var _m = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, Em = {
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
}, pa = {
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
var ai;
(function(t) {
  t[t.TOP_LEFT = 0] = "TOP_LEFT", t[t.TOP_RIGHT = 4] = "TOP_RIGHT", t[t.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", t[t.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", t[t.TOP_START = 8] = "TOP_START", t[t.TOP_END = 12] = "TOP_END", t[t.BOTTOM_START = 9] = "BOTTOM_START", t[t.BOTTOM_END = 13] = "BOTTOM_END";
})(ai || (ai = {}));
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
var pr, er, je = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
pr = {}, pr["" + je.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", pr["" + je.LIST_ITEM_CLASS] = "mdc-list-item", pr["" + je.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", pr["" + je.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", pr["" + je.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", pr["" + je.ROOT] = "mdc-list";
var Ei = (er = {}, er["" + je.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", er["" + je.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", er["" + je.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", er["" + je.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", er["" + je.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", er["" + je.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", er["" + je.ROOT] = "mdc-deprecated-list", er), mr = {
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
    .` + je.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + je.LIST_ITEM_CLASS + ` a,
    .` + Ei[je.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ei[je.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + je.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + je.LIST_ITEM_CLASS + ` a,
    .` + je.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + je.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + Ei[je.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ei[je.LIST_ITEM_CLASS] + ` a,
    .` + Ei[je.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + Ei[je.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
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
var Am = ["input", "button", "textarea", "select"], En = function(t) {
  var e = t.target;
  if (e) {
    var n = ("" + e.tagName).toLowerCase();
    Am.indexOf(n) === -1 && t.preventDefault();
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
function Cm() {
  var t = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return t;
}
function Sm(t, e) {
  for (var n = /* @__PURE__ */ new Map(), r = 0; r < t; r++) {
    var i = e(r).trim();
    if (i) {
      var a = i[0].toLowerCase();
      n.has(a) || n.set(a, []), n.get(a).push({ text: i.toLowerCase(), index: r });
    }
  }
  return n.forEach(function(o) {
    o.sort(function(c, l) {
      return c.index - l.index;
    });
  }), n;
}
function Ls(t, e) {
  var n = t.nextChar, r = t.focusItemAtIndex, i = t.sortedIndexByFirstChar, a = t.focusedItemIndex, o = t.skipFocus, c = t.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    Qc(e);
  }, Et.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + n;
  var l;
  return e.typeaheadBuffer.length === 1 ? l = xm(i, a, c, e) : l = Tm(i, c, e), l !== -1 && !o && r(l), l;
}
function xm(t, e, n, r) {
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
function Tm(t, e, n) {
  var r = n.typeaheadBuffer[0], i = t.get(r);
  if (!i)
    return -1;
  var a = i[n.sortedIndexCursor];
  if (a.text.lastIndexOf(n.typeaheadBuffer, 0) === 0 && !e(a.index))
    return a.index;
  for (var o = (n.sortedIndexCursor + 1) % i.length, c = -1; o !== n.sortedIndexCursor; ) {
    var l = i[o], u = l.text.lastIndexOf(n.typeaheadBuffer, 0) === 0, d = !e(l.index);
    if (u && d) {
      c = o;
      break;
    }
    o = (o + 1) % i.length;
  }
  return c !== -1 ? (n.sortedIndexCursor = c, i[n.sortedIndexCursor].index) : -1;
}
function Zc(t) {
  return t.typeaheadBuffer.length > 0;
}
function Qc(t) {
  t.typeaheadBuffer = "";
}
function iu(t, e) {
  var n = t.event, r = t.isTargetListItem, i = t.focusedItemIndex, a = t.focusItemAtIndex, o = t.sortedIndexByFirstChar, c = t.isItemAtIndexDisabled, l = yt(n) === "ArrowLeft", u = yt(n) === "ArrowUp", d = yt(n) === "ArrowRight", h = yt(n) === "ArrowDown", f = yt(n) === "Home", v = yt(n) === "End", p = yt(n) === "Enter", g = yt(n) === "Spacebar";
  if (n.altKey || n.ctrlKey || n.metaKey || l || u || d || h || f || v || p)
    return -1;
  var I = !g && n.key.length === 1;
  if (I) {
    En(n);
    var A = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: n.key.toLowerCase(),
      sortedIndexByFirstChar: o,
      skipFocus: !1,
      isItemAtIndexDisabled: c
    };
    return Ls(A, e);
  }
  if (!g)
    return -1;
  r && En(n);
  var S = r && Zc(e);
  if (S) {
    var A = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: " ",
      sortedIndexByFirstChar: o,
      skipFocus: !1,
      isItemAtIndexDisabled: c
    };
    return Ls(A, e);
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
function wm(t) {
  return t instanceof Array;
}
var Lm = ["Alt", "Control", "Meta", "Shift"];
function au(t) {
  var e = new Set(t ? Lm.filter(function(n) {
    return t.getModifierState(n);
  }) : []);
  return function(n) {
    return n.every(function(r) {
      return e.has(r);
    }) && n.length === e.size;
  };
}
var Om = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n) {
      var r = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
      return r.wrapFocus = !1, r.isVertical = !0, r.isSingleSelectionList = !1, r.areDisabledItemsFocusable = !0, r.selectedIndex = Et.UNSET_INDEX, r.focusedItemIndex = Et.UNSET_INDEX, r.useActivatedClass = !1, r.useSelectedAttr = !1, r.ariaCurrentAttrValue = null, r.isCheckboxList = !1, r.isRadioList = !1, r.lastSelectedIndex = null, r.hasTypeahead = !1, r.typeaheadState = Cm(), r.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return mr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return je;
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
        var r = this.adapter.listItemAtIndexHasClass(n, je.LIST_ITEM_ACTIVATED_CLASS);
        r && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = n;
      }
    }, e.prototype.getSelectedIndexFromDOM = function() {
      for (var n = Et.UNSET_INDEX, r = this.adapter.getListItemCount(), i = 0; i < r; i++) {
        var a = this.adapter.listItemAtIndexHasClass(i, je.LIST_ITEM_SELECTED_CLASS), o = this.adapter.listItemAtIndexHasClass(i, je.LIST_ITEM_ACTIVATED_CLASS);
        if (a || o) {
          n = i;
          break;
        }
      }
      return n;
    }, e.prototype.setHasTypeahead = function(n) {
      this.hasTypeahead = n, n && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex());
    }, e.prototype.isTypeaheadInProgress = function() {
      return this.hasTypeahead && Zc(this.typeaheadState);
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
      return this.adapter.listItemAtIndexHasClass(n, je.LIST_ITEM_DISABLED_CLASS);
    }, e.prototype.handleKeydown = function(n, r, i) {
      var a = this, o, c = yt(n) === "ArrowLeft", l = yt(n) === "ArrowUp", u = yt(n) === "ArrowRight", d = yt(n) === "ArrowDown", h = yt(n) === "Home", f = yt(n) === "End", v = yt(n) === "Enter", p = yt(n) === "Spacebar", g = this.isVertical && d || !this.isVertical && u, I = this.isVertical && l || !this.isVertical && c, A = n.key === "A" || n.key === "a", S = au(n);
      if (this.adapter.isRootFocused()) {
        if ((I || f) && S([]))
          n.preventDefault(), this.focusLastElement();
        else if ((g || h) && S([]))
          n.preventDefault(), this.focusFirstElement();
        else if (I && S(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var x = this.focusLastElement();
          x !== -1 && this.setSelectedIndexOnAction(x, !1);
        } else if (g && S(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var x = this.focusFirstElement();
          x !== -1 && this.setSelectedIndexOnAction(x, !1);
        }
        if (this.hasTypeahead) {
          var b = {
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
          iu(b, this.typeaheadState);
        }
        return;
      }
      var _ = this.adapter.getFocusedElementIndex();
      if (!(_ === -1 && (_ = i, _ < 0))) {
        if (g && S([]))
          En(n), this.focusNextElement(_);
        else if (I && S([]))
          En(n), this.focusPrevElement(_);
        else if (g && S(["Shift"]) && this.isCheckboxList) {
          En(n);
          var x = this.focusNextElement(_);
          x !== -1 && this.setSelectedIndexOnAction(x, !1);
        } else if (I && S(["Shift"]) && this.isCheckboxList) {
          En(n);
          var x = this.focusPrevElement(_);
          x !== -1 && this.setSelectedIndexOnAction(x, !1);
        } else if (h && S([]))
          En(n), this.focusFirstElement();
        else if (f && S([]))
          En(n), this.focusLastElement();
        else if (h && S(["Control", "Shift"]) && this.isCheckboxList) {
          if (En(n), this.isIndexDisabled(_))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, _, _);
        } else if (f && S(["Control", "Shift"]) && this.isCheckboxList) {
          if (En(n), this.isIndexDisabled(_))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(_, this.adapter.getListItemCount() - 1, _);
        } else if (A && S(["Control"]) && this.isCheckboxList)
          n.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === Et.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((v || p) && S([])) {
          if (r) {
            var T = n.target;
            if (T && T.tagName === "A" && v || (En(n), this.isIndexDisabled(_)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(_, !1), this.adapter.notifyAction(_));
          }
        } else if ((v || p) && S(["Shift"]) && this.isCheckboxList) {
          var T = n.target;
          if (T && T.tagName === "A" && v || (En(n), this.isIndexDisabled(_)))
            return;
          this.isTypeaheadInProgress() || (this.toggleCheckboxRange((o = this.lastSelectedIndex) !== null && o !== void 0 ? o : _, _, _), this.adapter.notifyAction(_));
        }
        if (this.hasTypeahead) {
          var b = {
            event: n,
            focusItemAtIndex: function(E) {
              a.focusItemAtIndex(E);
            },
            focusedItemIndex: this.focusedItemIndex,
            isTargetListItem: r,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(E) {
              return a.isIndexDisabled(E);
            }
          };
          iu(b, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(n, r, i) {
      var a, o = au(i);
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
      this.isIndexValid(n, !1) && (r ? (this.adapter.removeClassForElementIndex(n, je.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, mr.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(n, je.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, mr.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(n, r) {
      if (r === void 0 && (r = {}), !(this.selectedIndex === n && !r.forceUpdate)) {
        var i = je.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (i = je.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== Et.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, i), this.setAriaForSingleSelectionAtIndex(n), this.setTabindexAtIndex(n), n !== Et.UNSET_INDEX && this.adapter.addClassForElementIndex(n, i), this.selectedIndex = n, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([n]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(n) {
      this.selectedIndex === Et.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(n, mr.ARIA_CURRENT));
      var r = this.ariaCurrentAttrValue !== null, i = r ? mr.ARIA_CURRENT : mr.ARIA_SELECTED;
      if (this.selectedIndex !== Et.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), n !== Et.UNSET_INDEX) {
        var a = r ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(n, i, a);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? mr.ARIA_SELECTED : mr.ARIA_CHECKED;
    }, e.prototype.setRadioAtIndex = function(n, r) {
      r === void 0 && (r = {});
      var i = this.getSelectionAttribute();
      this.adapter.setCheckedCheckboxOrRadioAtIndex(n, !0), !(this.selectedIndex === n && !r.forceUpdate) && (this.selectedIndex !== Et.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), this.adapter.setAttributeForElementIndex(n, i, "true"), this.selectedIndex = n, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([n]));
    }, e.prototype.setCheckboxAtIndex = function(n, r) {
      r === void 0 && (r = {});
      for (var i = this.selectedIndex, a = r.isUserInteraction ? new Set(i === Et.UNSET_INDEX ? [] : i) : null, o = this.getSelectionAttribute(), c = [], l = 0; l < this.adapter.getListItemCount(); l++) {
        var u = a == null ? void 0 : a.has(l), d = n.indexOf(l) >= 0;
        d !== u && c.push(l), this.adapter.setCheckedCheckboxOrRadioAtIndex(l, d), this.adapter.setAttributeForElementIndex(l, o, d ? "true" : "false");
      }
      this.selectedIndex = n, r.isUserInteraction && c.length && this.adapter.notifySelectionChange(c);
    }, e.prototype.toggleCheckboxRange = function(n, r, i) {
      this.lastSelectedIndex = i;
      for (var a = new Set(this.selectedIndex === Et.UNSET_INDEX ? [] : this.selectedIndex), o = !(a != null && a.has(i)), c = Or([n, r].sort(), 2), l = c[0], u = c[1], d = this.getSelectionAttribute(), h = [], f = l; f <= u; f++)
        if (!this.isIndexDisabled(f)) {
          var v = a.has(f);
          o !== v && (h.push(f), this.adapter.setCheckedCheckboxOrRadioAtIndex(f, o), this.adapter.setAttributeForElementIndex(f, d, "" + o), o ? a.add(f) : a.delete(f));
        }
      h.length && (this.selectedIndex = Xn([], Or(a)), this.adapter.notifySelectionChange(h));
    }, e.prototype.setTabindexAtIndex = function(n) {
      this.focusedItemIndex === Et.UNSET_INDEX && n !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== n && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== n && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), n !== Et.UNSET_INDEX && this.adapter.setAttributeForElementIndex(n, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var n = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(n);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== Et.UNSET_INDEX ? this.selectedIndex : wm(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(n, r) {
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
      var c = this.selectedIndex === Et.UNSET_INDEX ? [] : this.selectedIndex.slice();
      o ? c.push(n) : c = c.filter(function(l) {
        return l !== n;
      }), this.selectedIndex = c;
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
      return Ls(o, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return Sm(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      Qc(this.typeaheadState);
    }, e;
  }(Ut)
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
var Jc = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n) {
      var r = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
      return r.isSurfaceOpen = !1, r.isQuickOpen = !1, r.isHoistedElement = !1, r.isFixedPosition = !1, r.isHorizontallyCenteredOnViewport = !1, r.maxHeight = 0, r.openBottomBias = 0, r.openAnimationEndTimerId = 0, r.closeAnimationEndTimerId = 0, r.animationRequestId = 0, r.anchorCorner = ai.TOP_START, r.originCorner = ai.TOP_START, r.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, r.position = { x: 0, y: 0 }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return _m;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Em;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return pa;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "Corner", {
      get: function() {
        return ai;
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
        }, pa.TRANSITION_OPEN_DURATION);
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
          }, pa.TRANSITION_CLOSE_DURATION);
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
      var r = this.getoriginCorner(), i = this.getMenuSurfaceMaxHeight(r), a = this.hasBit(r, Ct.BOTTOM) ? "bottom" : "top", o = this.hasBit(r, Ct.RIGHT) ? "right" : "left", c = this.getHorizontalOriginOffset(r), l = this.getVerticalOriginOffset(r), u = this.measurements, d = u.anchorSize, h = u.surfaceSize, f = (n = {}, n[o] = c, n[a] = l, n);
      d.width / h.width > pa.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (o = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(f), this.adapter.setTransformOrigin(o + " " + a), this.adapter.setPosition(f), this.adapter.setMaxHeight(i ? i + "px" : ""), this.hasBit(r, Ct.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
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
      var n = this.originCorner, r = this.measurements, i = r.viewportDistance, a = r.anchorSize, o = r.surfaceSize, c = e.numbers.MARGIN_TO_EDGE, l = this.hasBit(this.anchorCorner, Ct.BOTTOM), u, d;
      l ? (u = i.top - c + this.anchorMargin.bottom, d = i.bottom - c - this.anchorMargin.bottom) : (u = i.top - c + this.anchorMargin.top, d = i.bottom - c + a.height - this.anchorMargin.top);
      var h = d - o.height > 0;
      !h && u > d + this.openBottomBias && (n = this.setBit(n, Ct.BOTTOM));
      var f = this.adapter.isRtl(), v = this.hasBit(this.anchorCorner, Ct.FLIP_RTL), p = this.hasBit(this.anchorCorner, Ct.RIGHT) || this.hasBit(n, Ct.RIGHT), g = !1;
      f && v ? g = !p : g = p;
      var I, A;
      g ? (I = i.left + a.width + this.anchorMargin.right, A = i.right - this.anchorMargin.right) : (I = i.left + this.anchorMargin.left, A = i.right + a.width - this.anchorMargin.left);
      var S = I - o.width > 0, x = A - o.width > 0, b = this.hasBit(n, Ct.FLIP_RTL) && this.hasBit(n, Ct.RIGHT);
      return x && b && f || !S && b ? n = this.unsetBit(n, Ct.RIGHT) : (S && g && f || S && !g && p || !x && I >= A) && (n = this.setBit(n, Ct.RIGHT)), n;
    }, e.prototype.getMenuSurfaceMaxHeight = function(n) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var r = this.measurements.viewportDistance, i = 0, a = this.hasBit(n, Ct.BOTTOM), o = this.hasBit(this.anchorCorner, Ct.BOTTOM), c = e.numbers.MARGIN_TO_EDGE;
      return a ? (i = r.top + this.anchorMargin.top - c, o || (i += this.measurements.anchorSize.height)) : (i = r.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - c, o && (i -= this.measurements.anchorSize.height)), i;
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
      var r, i, a = this.measurements, o = a.windowScroll, c = a.viewportDistance, l = a.surfaceSize, u = a.viewportSize, d = Object.keys(n);
      try {
        for (var h = Rt(d), f = h.next(); !f.done; f = h.next()) {
          var v = f.value, p = n[v] || 0;
          if (this.isHorizontallyCenteredOnViewport && (v === "left" || v === "right")) {
            n[v] = (u.width - l.width) / 2;
            continue;
          }
          p += c[v], this.isFixedPosition || (v === "top" ? p += o.y : v === "bottom" ? p -= o.y : v === "left" ? p += o.x : p -= o.x), n[v] = p;
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
      }, pa.TOUCH_EVENT_WAIT_MS);
    }, e.prototype.hasBit = function(n, r) {
      return !!(n & r);
    }, e.prototype.setBit = function(n, r) {
      return n | r;
    }, e.prototype.unsetBit = function(n, r) {
      return n ^ r;
    }, e.prototype.isFinite = function(n) {
      return typeof n == "number" && isFinite(n);
    }, e;
  }(Ut)
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
var ou = {
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
function Rm(t) {
  return !!t.document && typeof t.document.createElement == "function";
}
function Mm(t, e) {
  if (Rm(t) && e in ou) {
    var n = t.document.createElement("div"), r = ou[e], i = r.standard, a = r.prefixed, o = i in n.style;
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
var Ui = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
}, Ai = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected",
  SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
}, Dm = {
  FOCUS_ROOT_INDEX: -1
}, xi;
(function(t) {
  t[t.NONE = 0] = "NONE", t[t.LIST_ROOT = 1] = "LIST_ROOT", t[t.FIRST_ITEM = 2] = "FIRST_ITEM", t[t.LAST_ITEM = 3] = "LAST_ITEM";
})(xi || (xi = {}));
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
var Pm = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n) {
      var r = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
      return r.closeAnimationEndTimerId = 0, r.defaultFocusState = xi.LIST_ROOT, r.selectedIndex = -1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ui;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Ai;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Dm;
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
        var a = this.adapter.getAttributeFromElementAtIndex(i, Ai.SKIP_RESTORE_FOCUS) === "true";
        this.adapter.closeSurface(a), this.closeAnimationEndTimerId = setTimeout(function() {
          var o = r.adapter.getElementIndex(n);
          o >= 0 && r.adapter.isSelectableItemAtIndex(o) && r.setSelectedIndex(o);
        }, Jc.numbers.TRANSITION_CLOSE_DURATION);
      }
    }, e.prototype.handleMenuSurfaceOpened = function() {
      switch (this.defaultFocusState) {
        case xi.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case xi.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case xi.NONE:
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
      r >= 0 && (this.adapter.removeAttributeFromElementAtIndex(r, Ai.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(r, Ui.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(n, Ui.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(n, Ai.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = n;
    }, e.prototype.setEnabled = function(n, r) {
      this.validatedIndex(n), r ? (this.adapter.removeClassFromElementAtIndex(n, je.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, Ai.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(n, je.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, Ai.ARIA_DISABLED_ATTR, "true"));
    }, e.prototype.validatedIndex = function(n) {
      var r = this.adapter.getMenuItemCount(), i = n >= 0 && n < r;
      if (!i)
        throw new Error("MDCMenuFoundation: No list item at specified index.");
    }, e;
  }(Ut)
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
var mt = {
  ACTIVATED: "mdc-select--activated",
  DISABLED: "mdc-select--disabled",
  FOCUSED: "mdc-select--focused",
  INVALID: "mdc-select--invalid",
  MENU_INVALID: "mdc-select__menu--invalid",
  OUTLINED: "mdc-select--outlined",
  REQUIRED: "mdc-select--required",
  ROOT: "mdc-select",
  WITH_LEADING_ICON: "mdc-select--with-leading-icon"
}, rs = {
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
}, zr = {
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
var Nm = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n, r) {
      r === void 0 && (r = {});
      var i = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
      return i.disabled = !1, i.isMenuOpen = !1, i.useDefaultValidation = !0, i.customValidity = !0, i.lastSelectedIndex = zr.UNSET_INDEX, i.clickDebounceTimeout = 0, i.recentlyClicked = !1, i.leadingIcon = r.leadingIcon, i.helperText = r.helperText, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return mt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return zr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return rs;
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
      r === void 0 && (r = !1), i === void 0 && (i = !1), !(n >= this.adapter.getMenuItemCount()) && (n === zr.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(n).trim()), this.adapter.setSelectedIndex(n), r && this.adapter.closeMenu(), !i && this.lastSelectedIndex !== n && this.handleChange(), this.lastSelectedIndex = n);
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
      return n !== zr.UNSET_INDEX ? r[n] : "";
    }, e.prototype.getDisabled = function() {
      return this.disabled;
    }, e.prototype.setDisabled = function(n) {
      this.disabled = n, this.disabled ? (this.adapter.addClass(mt.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(mt.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
    }, e.prototype.openMenu = function() {
      this.adapter.addClass(mt.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true");
    }, e.prototype.setHelperTextContent = function(n) {
      this.helperText && this.helperText.setContent(n);
    }, e.prototype.layout = function() {
      if (this.adapter.hasLabel()) {
        var n = this.getValue().length > 0, r = this.adapter.hasClass(mt.FOCUSED), i = n || r, a = this.adapter.hasClass(mt.REQUIRED);
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
      this.adapter.removeClass(mt.ACTIVATED), this.isMenuOpen = !1, this.adapter.isSelectAnchorFocused() || this.blur();
    }, e.prototype.handleChange = function() {
      this.layout(), this.adapter.notifyChange(this.getValue());
      var n = this.adapter.hasClass(mt.REQUIRED);
      n && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.handleMenuItemAction = function(n) {
      this.setSelectedIndex(
        n,
        /** closeMenu */
        !0
      );
    }, e.prototype.handleFocus = function() {
      this.adapter.addClass(mt.FOCUSED), this.layout(), this.adapter.activateBottomLine();
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
      if (!(this.isMenuOpen || !this.adapter.hasClass(mt.FOCUSED))) {
        var r = yt(n) === Me.ENTER, i = yt(n) === Me.SPACEBAR, a = yt(n) === Me.ARROW_UP, o = yt(n) === Me.ARROW_DOWN, c = n.ctrlKey || n.metaKey;
        if (!c && (!i && n.key && n.key.length === 1 || i && this.adapter.isTypeaheadInProgress())) {
          var l = i ? " " : n.key, u = this.adapter.typeaheadMatchItem(l, this.getSelectedIndex());
          u >= 0 && this.setSelectedIndex(u), n.preventDefault();
          return;
        }
        !r && !i && !a && !o || (this.openMenu(), n.preventDefault());
      }
    }, e.prototype.notchOutline = function(n) {
      if (this.adapter.hasOutline()) {
        var r = this.adapter.hasClass(mt.FOCUSED);
        if (n) {
          var i = zr.LABEL_SCALE, a = this.adapter.getLabelWidth() * i;
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
      this.useDefaultValidation || (this.customValidity = n), this.adapter.setSelectAnchorAttr("aria-invalid", (!n).toString()), n ? (this.adapter.removeClass(mt.INVALID), this.adapter.removeMenuClass(mt.MENU_INVALID)) : (this.adapter.addClass(mt.INVALID), this.adapter.addMenuClass(mt.MENU_INVALID)), this.syncHelperTextValidity(n);
    }, e.prototype.isValid = function() {
      return this.useDefaultValidation && this.adapter.hasClass(mt.REQUIRED) && !this.adapter.hasClass(mt.DISABLED) ? this.getSelectedIndex() !== zr.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(n) {
      n ? this.adapter.addClass(mt.REQUIRED) : this.adapter.removeClass(mt.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", n.toString()), this.adapter.setLabelRequired(n);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var n = this.adapter.getAnchorElement();
      n && (this.adapter.setMenuAnchorElement(n), this.adapter.setMenuAnchorCorner(ai.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(mt.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(mt.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(mt.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var n = this.adapter.hasClass(mt.REQUIRED);
      n && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.syncHelperTextValidity = function(n) {
      if (this.helperText) {
        this.helperText.setValidity(n);
        var r = this.helperText.isVisible(), i = this.helperText.getId();
        r && i ? this.adapter.setSelectAnchorAttr(rs.ARIA_DESCRIBEDBY, i) : this.adapter.removeSelectAnchorAttr(rs.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.setClickDebounceTimeout = function() {
      var n = this;
      clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout(function() {
        n.recentlyClicked = !1;
      }, zr.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
    }, e;
  }(Ut)
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
var Xr = {
  ARIA_HIDDEN: "aria-hidden",
  ROLE: "role"
}, tr = {
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
var Um = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n) {
      return t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return tr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Xr;
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
      return this.adapter.getAttr(Xr.ARIA_HIDDEN) !== "true";
    }, e.prototype.setContent = function(n) {
      this.adapter.setContent(n);
    }, e.prototype.setValidation = function(n) {
      n ? this.adapter.addClass(tr.HELPER_TEXT_VALIDATION_MSG) : this.adapter.removeClass(tr.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.setValidationMsgPersistent = function(n) {
      n ? this.adapter.addClass(tr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT) : this.adapter.removeClass(tr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.getIsValidation = function() {
      return this.adapter.hasClass(tr.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.getIsValidationMsgPersistent = function() {
      return this.adapter.hasClass(tr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.setValidity = function(n) {
      var r = this.adapter.hasClass(tr.HELPER_TEXT_VALIDATION_MSG);
      if (r) {
        var i = this.adapter.hasClass(tr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT), a = !n || i;
        if (a) {
          this.showToScreenReader(), n ? this.adapter.removeAttr(Xr.ROLE) : this.adapter.setAttr(Xr.ROLE, "alert");
          return;
        }
        this.adapter.removeAttr(Xr.ROLE), this.hide();
      }
    }, e.prototype.showToScreenReader = function() {
      this.adapter.removeAttr(Xr.ARIA_HIDDEN);
    }, e.prototype.hide = function() {
      this.adapter.setAttr(Xr.ARIA_HIDDEN, "true");
    }, e;
  }(Ut)
), Hm = /* @__PURE__ */ fe("<div><!></div>");
function Fm(t, e) {
  Oe(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "static", 3, !1), o = m(e, "anchor", 3, !0), c = m(e, "fixed", 3, !1), l = m(e, "open", 31, () => ye(a())), u = m(e, "managed", 3, !1), d = m(e, "fullWidth", 3, !1), h = m(e, "quickOpen", 3, !1), f = m(e, "anchorElement", 15), v = m(e, "anchorMargin", 19, () => ({ top: 0, right: 0, bottom: 0, left: 0 })), p = m(e, "maxHeight", 3, 0), g = m(e, "horizontallyCenteredOnViewport", 3, !1), I = m(e, "openBottomBias", 3, 0), A = m(e, "neverRestoreFocus", 3, !1), S = /* @__PURE__ */ We(e, [
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
  ]), x, b = /* @__PURE__ */ be(void 0), _ = ye({}), T = ye({}), w = /* @__PURE__ */ be(void 0);
  ne("SMUI:list:role", "menu"), ne("SMUI:list:item:role", "menuitem"), Te(() => {
    var k, oe;
    x && o() && !((k = x.parentElement) != null && k.classList.contains("mdc-menu-surface--anchor")) && ((oe = x.parentElement) == null || oe.classList.add("mdc-menu-surface--anchor"), f(x.parentElement ?? void 0));
  }), Te(() => {
    s(b) && s(b).isOpen() !== l() && (l() ? s(b).open() : s(b).close());
  }), Te(() => {
    s(b) && s(b).setQuickOpen(h());
  }), Te(() => {
    s(b) && s(b).setFixedPosition(c());
  }), Te(() => {
    s(b) && s(b).setMaxHeight(p());
  }), Te(() => {
    s(b) && s(b).setIsHorizontallyCenteredOnViewport(g());
  });
  const E = ai;
  Te(() => {
    s(b) && e.anchorCorner != null && (typeof e.anchorCorner == "string" ? s(b).setAnchorCorner(E[e.anchorCorner]) : s(b).setAnchorCorner(e.anchorCorner));
  }), Te(() => {
    s(b) && s(b).setAnchorMargin(v());
  }), Te(() => {
    s(b) && s(b).setOpenBottomBias(I());
  });
  const C = se("SMUI:menu-surface:mount"), D = se("SMUI:menu-surface:unmount");
  at(() => {
    Q(
      b,
      new Jc({
        addClass: H,
        removeClass: B,
        hasClass: j,
        hasAnchor: () => !!f(),
        notifyClose: () => {
          u() || l(a()), l() || qe(L(), "SMUIMenuSurfaceClosed");
        },
        notifyClosing: () => {
          u() || l(a()), l() || qe(L(), "SMUIMenuSurfaceClosing");
        },
        notifyOpen: () => {
          u() || l(!0), l() && qe(L(), "SMUIMenuSurfaceOpened");
        },
        notifyOpening: () => {
          l() || qe(L(), "SMUIMenuSurfaceOpening");
        },
        isElementInContainer: (oe) => L().contains(oe),
        isRtl: () => getComputedStyle(L()).getPropertyValue("direction") === "rtl",
        setTransformOrigin: (oe) => {
          T["transform-origin"] = oe;
        },
        isFocused: () => document.activeElement === L(),
        saveFocus: () => {
          Q(w, document.activeElement ?? void 0, !0);
        },
        restoreFocus: () => {
          !A() && (!x || L().contains(document.activeElement)) && s(w) && document.contains(s(w)) && "focus" in s(w) && s(w).focus();
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
          T.left = "left" in oe ? `${oe.left}px` : "", T.right = "right" in oe ? `${oe.right}px` : "", T.top = "top" in oe ? `${oe.top}px` : "", T.bottom = "bottom" in oe ? `${oe.bottom}px` : "";
        },
        setMaxHeight: (oe) => {
          T["max-height"] = oe;
        }
      }),
      !0
    );
    const k = {
      get open() {
        return l();
      },
      set open(oe) {
        l(oe);
      },
      closeProgrammatic: _e
    };
    return C && C(k), s(b).init(), () => {
      var Z, ue;
      D && D(k);
      const oe = s(b).isHoistedElement;
      (Z = s(b)) == null || Z.destroy(), oe && ((ue = L().parentNode) == null || ue.removeChild(L()));
    };
  }), Hn(() => {
    var k;
    o() && L() && ((k = L().parentElement) == null || k.classList.remove("mdc-menu-surface--anchor"));
  });
  function j(k) {
    return k in _ ? _[k] : L().classList.contains(k);
  }
  function H(k) {
    _[k] || (_[k] = !0);
  }
  function B(k) {
    (!(k in _) || _[k]) && (_[k] = !1);
  }
  function _e(k) {
    var oe;
    (oe = s(b)) == null || oe.close(k), l(!1);
  }
  function q(k) {
    s(b) && l() && !u() && s(b).handleBodyClick(k);
  }
  function F() {
    return l();
  }
  function U(k) {
    l(k);
  }
  function W(k, oe) {
    if (s(b) == null)
      throw new Error("Instance is not defined.");
    return s(b).setAbsolutePosition(k, oe);
  }
  function te(k) {
    if (s(b) == null)
      throw new Error("Instance is not defined.");
    return s(b).setIsHoisted(k);
  }
  function N() {
    if (s(b) == null)
      throw new Error("Instance is not defined.");
    return s(b).isFixed();
  }
  function y() {
    if (s(b) == null)
      throw new Error("Instance is not defined.");
    return s(b).flipCornerHorizontally();
  }
  function L() {
    return x;
  }
  var J = {
    isOpen: F,
    setOpen: U,
    setAbsolutePosition: W,
    setIsHoisted: te,
    isFixed: N,
    flipCornerHorizontally: y,
    getElement: L
  }, P = Hm();
  ba("click", Xu.body, q, !0);
  var G = (k) => {
    var oe;
    s(b) && !u() && s(b).handleKeydown(k), (oe = e.onkeydown) == null || oe.call(e, k);
  };
  ke(
    P,
    (k, oe) => ({
      class: k,
      style: oe,
      role: "dialog",
      ...S,
      onkeydown: G
    }),
    [
      () => He({
        "mdc-menu-surface": !0,
        "mdc-menu-surface--fixed": c(),
        "mdc-menu-surface--open": a(),
        "smui-menu-surface--static": a(),
        "mdc-menu-surface--fullwidth": d(),
        ..._,
        [r()]: !0
      }),
      () => Object.entries(T).map(([k, oe]) => `${k}: ${oe};`).concat([i()]).join(" ")
    ]
  );
  var ge = Ie(P);
  return Ae(ge, () => e.children ?? me), we(P, (k) => x = k, () => x), Be(P, (k, oe) => z == null ? void 0 : z(k, oe), n), O(t, P), Re(J);
}
function is(t, { addClass: e = (r) => t.classList.add(r), removeClass: n = (r) => t.classList.remove(r) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      n("mdc-menu-surface--anchor");
    }
  };
}
function Bm(t, e) {
  Oe(e, !0);
  const { closest: n } = Uo;
  let r = m(e, "use", 19, () => []), i = m(e, "class", 3, ""), a = m(e, "open", 15, !1), o = m(e, "anchorElement", 15), c = m(e, "managed", 3, !1), l = /* @__PURE__ */ We(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "open",
    "anchorElement",
    "managed",
    "children"
  ]), u, d = /* @__PURE__ */ be(void 0), h = /* @__PURE__ */ be(void 0), f = /* @__PURE__ */ be(void 0);
  ne("SMUI:menu-surface:mount", (E) => {
    s(h) || Q(h, E, !0);
  });
  const v = se("SMUI:list:mount");
  ne("SMUI:list:mount", (E) => {
    s(f) || Q(f, E, !0), v && v(E);
  });
  const p = se("SMUI:menu:mount"), g = se("SMUI:menu:unmount");
  at(() => (Q(
    d,
    new Pm({
      addClassToElementAtIndex: (E, C) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).addClassForElementIndex(E, C);
      },
      removeClassFromElementAtIndex: (E, C) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).removeClassForElementIndex(E, C);
      },
      addAttributeToElementAtIndex: (E, C, D) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).setAttributeForElementIndex(E, C, D);
      },
      removeAttributeFromElementAtIndex: (E, C) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).removeAttributeForElementIndex(E, C);
      },
      getAttributeFromElementAtIndex: (E, C) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).getAttributeFromElementIndex(E, C);
      },
      elementContainsClass: (E, C) => E.classList.contains(C),
      closeSurface: (E) => {
        var C;
        c() || ((C = s(h)) == null || C.closeProgrammatic(E), qe(T(), "SMUIMenuClosedProgrammatically"));
      },
      getElementIndex: (E) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).getOrderedList().map((C) => C.element).indexOf(E);
      },
      notifySelected: (E) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        qe(T(), "SMUIMenuSelected", {
          index: E.index,
          item: s(f).getOrderedList()[E.index].element
        });
      },
      getMenuItemCount: () => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).items.length;
      },
      focusItemAtIndex: (E) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).focusItemAtIndex(E);
      },
      focusListRoot: () => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        "focus" in s(f).element && s(f).element.focus();
      },
      isSelectableItemAtIndex: (E) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return !!n(s(f).getOrderedList()[E].element, `.${Ui.MENU_SELECTION_GROUP}`);
      },
      getSelectedSiblingOfItemAtIndex: (E) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        const C = s(f).getOrderedList(), D = n(C[E].element, `.${Ui.MENU_SELECTION_GROUP}`), j = D == null ? void 0 : D.querySelector(`.${Ui.MENU_SELECTED_LIST_ITEM}`);
        return j ? C.map((H) => H.element).indexOf(j) : -1;
      }
    }),
    !0
  ), p && p(s(d)), s(d).init(), () => {
    var E;
    g && s(d) && g(s(d)), (E = s(d)) == null || E.destroy();
  }));
  function I(E) {
    s(d) && s(d).handleKeydown(E);
  }
  function A() {
    return a();
  }
  function S(E) {
    a(E);
  }
  function x(E) {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    s(d).setDefaultFocusState(E);
  }
  function b() {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    return s(d).getSelectedIndex();
  }
  function _() {
    return u;
  }
  function T() {
    return u.getElement();
  }
  var w = {
    isOpen: A,
    setOpen: S,
    setDefaultFocusState: x,
    getSelectedIndex: b,
    getMenuSurface: _,
    getElement: T
  };
  {
    let E = /* @__PURE__ */ ae(() => He({ "mdc-menu": !0, [i()]: !0 }));
    we(
      Fm(t, nt(
        {
          get use() {
            return r();
          },
          get class() {
            return s(E);
          },
          get managed() {
            return c();
          }
        },
        () => l,
        {
          onkeydown: (C) => {
            var D;
            I(C), (D = e.onkeydown) == null || D.call(e, C);
          },
          onSMUIMenuSurfaceOpened: (C) => {
            var D;
            s(d) && s(d).handleMenuSurfaceOpened(), (D = e.onSMUIMenuSurfaceOpened) == null || D.call(e, C);
          },
          onSMUIListAction: (C) => {
            var D;
            s(d) && s(f) && s(d).handleItemAction(s(f).getOrderedList()[C.detail.index].element), (D = e.onSMUIListAction) == null || D.call(e, C);
          },
          get open() {
            return a();
          },
          set open(C) {
            a(C);
          },
          get anchorElement() {
            return o();
          },
          set anchorElement(C) {
            o(C);
          },
          children: (C, D) => {
            var j = ie(), H = X(j);
            Ae(H, () => e.children ?? me), O(C, j);
          },
          $$slots: { default: !0 }
        }
      )),
      (C) => u = C,
      () => u
    );
  }
  return Re(w);
}
function km(t, e) {
  Oe(e, !0);
  const { closest: n, matches: r } = Uo;
  let i = se("SMUI:list:nav"), a = m(e, "use", 19, () => []), o = m(e, "class", 3, ""), c = m(e, "nonInteractive", 3, !1), l = m(e, "dense", 3, !1), u = m(e, "textualList", 3, !1), d = m(e, "avatarList", 3, !1), h = m(e, "iconList", 3, !1), f = m(e, "imageList", 3, !1), v = m(e, "thumbnailList", 3, !1), p = m(e, "videoList", 3, !1), g = m(e, "twoLine", 3, !1), I = m(e, "threeLine", 3, !1), A = m(e, "vertical", 3, !0), S = m(e, "wrapFocus", 19, () => se("SMUI:list:wrapFocus") ?? !1), x = m(e, "singleSelection", 3, !1), b = m(e, "disabledItemsFocusable", 3, !1), _ = m(e, "selectedIndex", 31, () => -1), T = m(e, "radioList", 3, !1), w = m(e, "checkList", 3, !1), E = m(e, "hasTypeahead", 3, !1), C = m(e, "component", 3, Fr), D = m(e, "tag", 3, i ? "nav" : "ul"), j = /* @__PURE__ */ We(e, [
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
  ]), H, B = /* @__PURE__ */ be(void 0), _e = [], q = se("SMUI:list:role");
  const F = /* @__PURE__ */ new WeakMap();
  let U = se("SMUI:dialog:selection"), W = se("SMUI:addLayoutListener"), te;
  ne("SMUI:list:nonInteractive", c()), ne("SMUI:separator:context", "list"), q || (x() ? (q = "listbox", ne("SMUI:list:item:role", "option")) : T() ? (q = "radiogroup", ne("SMUI:list:item:role", "radio")) : w() ? (q = "group", ne("SMUI:list:item:role", "checkbox")) : (q = "list", ne("SMUI:list:item:role", void 0))), Te(() => {
    s(B) && s(B).setVerticalOrientation(A());
  }), Te(() => {
    s(B) && s(B).setWrapFocus(S());
  }), Te(() => {
    s(B) && s(B).setHasTypeahead(E());
  }), Te(() => {
    s(B) && s(B).setSingleSelection(x());
  }), Te(() => {
    s(B) && s(B).setDisabledItemsFocusable(b());
  }), Te(() => {
    s(B) && x() && M() !== _() && s(B).setSelectedIndex(_());
  }), W && (te = W(re)), ne("SMUI:list:item:mount", (ve) => {
    _e.push(ve), F.set(ve.element, ve), x() && ve.selected && _(Le(ve.element));
  }), ne("SMUI:list:item:unmount", (ve) => {
    const de = (ve && _e.findIndex((K) => K === ve)) ?? -1;
    de !== -1 && (_e.splice(de, 1), F.delete(ve.element));
  });
  const N = se("SMUI:list:mount"), y = se("SMUI:list:unmount");
  at(() => {
    Q(
      B,
      new Om({
        addClassForElementIndex: Z,
        focusItemAtIndex: ee,
        getAttributeForElementIndex: (de, K) => {
          var Y;
          return ((Y = k()[de]) == null ? void 0 : Y.getAttr(K)) ?? null;
        },
        getFocusedElementIndex: () => document.activeElement ? k().map((de) => de.element).indexOf(document.activeElement) : -1,
        getListItemCount: () => _e.length,
        getPrimaryTextAtIndex: Xe,
        hasCheckboxAtIndex: (de) => {
          var K;
          return ((K = k()[de]) == null ? void 0 : K.hasCheckbox) ?? !1;
        },
        hasRadioAtIndex: (de) => {
          var K;
          return ((K = k()[de]) == null ? void 0 : K.hasRadio) ?? !1;
        },
        isCheckboxCheckedAtIndex: (de) => {
          const K = k()[de];
          return ((K == null ? void 0 : K.hasCheckbox) && K.checked) ?? !1;
        },
        isFocusInsideList: () => H != null && Se() !== document.activeElement && Se().contains(document.activeElement),
        isRootFocused: () => H != null && document.activeElement === Se(),
        listItemAtIndexHasClass: oe,
        notifyAction: (de) => {
          _(de), H != null && qe(Se(), "SMUIListAction", { index: de });
        },
        notifySelectionChange: (de) => {
          H != null && qe(Se(), "SMUIListSelectionChange", { changedIndices: de });
        },
        removeClassForElementIndex: ue,
        setAttributeForElementIndex: pe,
        setCheckedCheckboxOrRadioAtIndex: (de, K) => {
          k()[de].checked = K;
        },
        setTabIndexForListItemChildren: (de, K) => {
          const Y = k()[de];
          Array.prototype.forEach.call(Y.element.querySelectorAll("button:not(:disabled), a"), (ut) => {
            ut.setAttribute("tabindex", K);
          });
        }
      }),
      !0
    );
    const ve = {
      get element() {
        return Se();
      },
      get items() {
        return _e;
      },
      get typeaheadInProgress() {
        if (!s(B))
          throw new Error("Instance is undefined.");
        return s(B).isTypeaheadInProgress();
      },
      typeaheadMatchItem(de, K) {
        if (!s(B))
          throw new Error("Instance is undefined.");
        return s(B).typeaheadMatchItem(
          de,
          K,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: k,
      focusItemAtIndex: ee,
      addClassForElementIndex: Z,
      removeClassForElementIndex: ue,
      setAttributeForElementIndex: pe,
      removeAttributeForElementIndex: Pe,
      getAttributeFromElementIndex: rt,
      getPrimaryTextAtIndex: Xe
    };
    return N && N(ve), s(B).init(), s(B).layout(), () => {
      var de;
      y && y(ve), (de = s(B)) == null || de.destroy();
    };
  }), Hn(() => {
    te && te();
  });
  function L(ve) {
    s(B) && ve.target && s(B).handleKeydown(ve, ve.target.classList.contains("mdc-deprecated-list-item"), Le(ve.target));
  }
  function J(ve) {
    s(B) && ve.target && s(B).handleFocusIn(Le(ve.target));
  }
  function P(ve) {
    s(B) && ve.target && s(B).handleFocusOut(Le(ve.target));
  }
  function G(ve) {
    s(B) && ve.target && s(B).handleClick(Le(ve.target), !r(ve.target, 'input[type="checkbox"], input[type="radio"]'), ve);
  }
  function ge(ve) {
    if (T() || w()) {
      const de = Le(ve.target);
      if (de !== -1) {
        const K = k()[de];
        K && (T() && !K.checked || w()) && (r(ve.detail.target, 'input[type="checkbox"], input[type="radio"]') || (K.checked = !K.checked), K.activateRipple(), window.requestAnimationFrame(() => {
          K.deactivateRipple();
        }));
      }
    }
  }
  function k() {
    return H == null ? [] : [...Se().children].map((ve) => F.get(ve)).filter((ve) => ve && ve._smui_list_item_accessor);
  }
  function oe(ve, de) {
    const K = k()[ve];
    return (K && K.hasClass(de)) ?? !1;
  }
  function Z(ve, de) {
    const K = k()[ve];
    K && K.addClass(de);
  }
  function ue(ve, de) {
    const K = k()[ve];
    K && K.removeClass(de);
  }
  function pe(ve, de, K) {
    const Y = k()[ve];
    Y && Y.addAttr(de, K);
  }
  function Pe(ve, de) {
    const K = k()[ve];
    K && K.removeAttr(de);
  }
  function rt(ve, de) {
    const K = k()[ve];
    return K ? K.getAttr(de) : null;
  }
  function Xe(ve) {
    const de = k()[ve];
    return (de && de.getPrimaryText()) ?? "";
  }
  function Le(ve) {
    const de = n(ve, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return de && r(de, ".mdc-deprecated-list-item") ? k().map((K) => K == null ? void 0 : K.element).indexOf(de) : -1;
  }
  function re() {
    if (!s(B))
      throw new Error("Instance is undefined.");
    return s(B).layout();
  }
  function Ce(ve, de) {
    if (!s(B))
      throw new Error("Instance is undefined.");
    return s(B).setEnabled(ve, de);
  }
  function Ke() {
    if (!s(B))
      throw new Error("Instance is undefined.");
    return s(B).isTypeaheadInProgress();
  }
  function M() {
    if (!s(B))
      throw new Error("Instance is undefined.");
    return s(B).getSelectedIndex();
  }
  function V() {
    if (!s(B))
      throw new Error("Instance is undefined.");
    return s(B).getFocusedItemIndex();
  }
  function ee(ve) {
    const de = k()[ve];
    de && "focus" in de.element && de.element.focus();
  }
  function Se() {
    return H.getElement();
  }
  var St = {
    layout: re,
    setEnabled: Ce,
    getTypeaheadInProgress: Ke,
    getSelectedIndex: M,
    getFocusedItemIndex: V,
    focusItemAtIndex: ee,
    getElement: Se
  }, xt = ie(), fn = X(xt);
  {
    let ve = /* @__PURE__ */ ae(() => He({
      "mdc-deprecated-list": !0,
      "mdc-deprecated-list--non-interactive": c(),
      "mdc-deprecated-list--dense": l(),
      "mdc-deprecated-list--textual-list": u(),
      "mdc-deprecated-list--avatar-list": d() || U,
      "mdc-deprecated-list--icon-list": h(),
      "mdc-deprecated-list--image-list": f(),
      "mdc-deprecated-list--thumbnail-list": v(),
      "mdc-deprecated-list--video-list": p(),
      "mdc-deprecated-list--two-line": g(),
      "smui-list--three-line": I() && !g(),
      [o()]: !0
    }));
    ur(fn, C, (de, K) => {
      we(
        K(de, nt(
          {
            get tag() {
              return D();
            },
            get use() {
              return a();
            },
            get class() {
              return s(ve);
            },
            get role() {
              return q;
            }
          },
          () => j,
          {
            onkeydown: (Y) => {
              var De;
              L(Y), (De = e.onkeydown) == null || De.call(e, Y);
            },
            onfocusin: (Y) => {
              var De;
              J(Y), (De = e.onfocusin) == null || De.call(e, Y);
            },
            onfocusout: (Y) => {
              var De;
              P(Y), (De = e.onfocusout) == null || De.call(e, Y);
            },
            onclick: (Y) => {
              var De;
              G(Y), (De = e.onclick) == null || De.call(e, Y);
            },
            onSMUIAction: (Y) => {
              var De;
              ge(Y), (De = e.onSMUIAction) == null || De.call(e, Y);
            },
            children: (Y, De) => {
              var ut = ie(), ot = X(ut);
              Ae(ot, () => e.children ?? me), O(Y, ut);
            },
            $$slots: { default: !0 }
          }
        )),
        (Y) => H = Y,
        () => H
      );
    });
  }
  return O(t, xt), Re(St);
}
let Vm = 0;
var Gm = /* @__PURE__ */ fe('<span class="mdc-deprecated-list-item__ripple"></span>'), jm = /* @__PURE__ */ fe("<!><!>", 1);
function qm(t, e) {
  Oe(e, !0);
  let n = () => {
  };
  function r(Z) {
    return Z === n;
  }
  let i = se("SMUI:list:item:nav"), a = m(e, "use", 19, () => []), o = m(e, "class", 3, ""), c = m(e, "style", 3, ""), l = m(e, "nonInteractive", 19, () => se("SMUI:list:nonInteractive") ?? !1), u = m(e, "ripple", 19, () => !l()), d = m(e, "wrapper", 3, !1), h = m(e, "activated", 15, !1), f = m(e, "role", 19, () => d() ? "presentation" : se("SMUI:list:item:role")), v = m(e, "selected", 15, !1), p = m(e, "disabled", 3, !1), g = m(e, "skipRestoreFocus", 3, !1), I = m(e, "tabindex", 15, n), A = m(e, "inputId", 19, () => "SMUI-form-field-list-" + Vm++), S = m(e, "component", 3, Fr), x = m(e, "tag", 19, () => i ? e.href ? "a" : "span" : "li"), b = /* @__PURE__ */ We(e, [
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
  ne("SMUI:list:nonInteractive", void 0), ne("SMUI:list:item:role", void 0);
  let _, T = ye({}), w = ye({}), E = ye({}), C = /* @__PURE__ */ be(void 0), D = /* @__PURE__ */ be(void 0);
  const j = /* @__PURE__ */ ae(() => r(I()) ? !l() && !p() && (v() || s(C) && s(C).checked) ? 0 : -1 : I());
  ne("SMUI:generic:input:props", { id: A() }), ne("SMUI:separator:context", void 0), ne("SMUI:generic:input:mount", (Z) => {
    ("_smui_checkbox_accessor" in Z || "_smui_radio_accessor" in Z) && Q(C, Z, !0);
  }), ne("SMUI:generic:input:unmount", () => {
    Q(C, void 0);
  });
  const H = se("SMUI:list:item:mount"), B = se("SMUI:list:item:unmount");
  at(() => {
    if (!v() && !l()) {
      let ue = !0, pe = _.getElement();
      for (; pe.previousElementSibling; )
        if (pe = pe.previousElementSibling, pe.nodeType === 1 && pe.classList.contains("mdc-deprecated-list-item") && !pe.classList.contains("mdc-deprecated-list-item--disabled")) {
          ue = !1;
          break;
        }
      ue && Q(D, window.requestAnimationFrame(() => y(pe)), !0);
    }
    const Z = {
      _smui_list_item_accessor: !0,
      get element() {
        return G();
      },
      get selected() {
        return v();
      },
      set selected(ue) {
        v(ue);
      },
      hasClass: _e,
      addClass: q,
      removeClass: F,
      getAttr: W,
      addAttr: te,
      removeAttr: N,
      getPrimaryText: P,
      // For inputs within item.
      get checked() {
        return (s(C) && s(C).checked) ?? !1;
      },
      set checked(ue) {
        s(C) && (s(C).checked = !!ue);
      },
      get hasCheckbox() {
        return !!(s(C) && "_smui_checkbox_accessor" in s(C));
      },
      get hasRadio() {
        return !!(s(C) && "_smui_radio_accessor" in s(C));
      },
      activateRipple() {
        s(C) && s(C).activateRipple();
      },
      deactivateRipple() {
        s(C) && s(C).deactivateRipple();
      },
      // For select options.
      getValue() {
        return e.value;
      },
      // For autocomplete
      action: J,
      get tabindex() {
        return s(j);
      },
      set tabindex(ue) {
        I(ue);
      },
      get disabled() {
        return p();
      },
      get activated() {
        return h();
      },
      set activated(ue) {
        h(ue);
      }
    };
    return H && H(Z), () => {
      B && B(Z);
    };
  }), Hn(() => {
    s(D) && window.cancelAnimationFrame(s(D));
  });
  function _e(Z) {
    return Z in T ? T[Z] : G().classList.contains(Z);
  }
  function q(Z) {
    T[Z] || (T[Z] = !0);
  }
  function F(Z) {
    (!(Z in T) || T[Z]) && (T[Z] = !1);
  }
  function U(Z, ue) {
    w[Z] != ue && (ue === "" || ue == null ? delete w[Z] : w[Z] = ue);
  }
  function W(Z) {
    return Z in E ? E[Z] ?? null : G().getAttribute(Z);
  }
  function te(Z, ue) {
    E[Z] !== ue && (E[Z] = ue);
  }
  function N(Z) {
    (!(Z in E) || E[Z] != null) && (E[Z] = void 0);
  }
  function y(Z) {
    let ue = !0;
    for (; Z.nextElementSibling; )
      if (Z = Z.nextElementSibling, Z.nodeType === 1 && Z.classList.contains("mdc-deprecated-list-item")) {
        const pe = Z.attributes.getNamedItem("tabindex");
        if (pe && pe.value === "0") {
          ue = !1;
          break;
        }
      }
    ue && I(0);
  }
  function L(Z) {
    const ue = Z.key === "Enter", pe = Z.key === "Space";
    (ue || pe) && J(Z);
  }
  function J(Z) {
    p() || qe(G(), "SMUIAction", Z);
  }
  function P() {
    const Z = G(), ue = Z.querySelector(".mdc-deprecated-list-item__primary-text");
    if (ue)
      return ue.textContent ?? "";
    const pe = Z.querySelector(".mdc-deprecated-list-item__text");
    return pe ? pe.textContent ?? "" : Z.textContent ?? "";
  }
  function G() {
    return _.getElement();
  }
  var ge = { action: J, getPrimaryText: P, getElement: G }, k = ie(), oe = X(k);
  {
    let Z = /* @__PURE__ */ ae(() => [
      ...l() ? [] : [
        [
          Kt,
          {
            ripple: !s(C),
            unbounded: !1,
            color: (h() || v()) && e.color == null ? "primary" : e.color,
            disabled: p(),
            addClass: q,
            removeClass: F,
            addStyle: U
          }
        ]
      ],
      ...a()
    ]), ue = /* @__PURE__ */ ae(() => He({
      "mdc-deprecated-list-item": !d(),
      "mdc-deprecated-list-item__wrapper": d(),
      "mdc-deprecated-list-item--activated": h(),
      "mdc-deprecated-list-item--selected": v(),
      "mdc-deprecated-list-item--disabled": p(),
      "mdc-menu-item--selected": !i && f() === "menuitem" && v(),
      "smui-menu-item--non-interactive": l(),
      ...T,
      [o()]: !0
    })), pe = /* @__PURE__ */ ae(() => Object.entries(w).map(([rt, Xe]) => `${rt}: ${Xe};`).concat([c()]).join(" ")), Pe = /* @__PURE__ */ ae(() => g() || void 0);
    ur(oe, S, (rt, Xe) => {
      we(
        Xe(rt, nt(
          {
            get tag() {
              return x();
            },
            get use() {
              return s(Z);
            },
            get class() {
              return s(ue);
            },
            get style() {
              return s(pe);
            }
          },
          () => i && h() ? { "aria-current": "page" } : {},
          () => !i || d() ? { role: f() } : {},
          () => !i && f() === "option" ? { "aria-selected": v() ? "true" : "false" } : {},
          () => !i && (f() === "radio" || f() === "checkbox") ? {
            "aria-checked": s(C) && s(C).checked ? "true" : "false"
          } : {},
          () => i ? {} : { "aria-disabled": p() ? "true" : "false" },
          {
            get "data-menu-item-skip-restore-focus"() {
              return s(Pe);
            },
            get tabindex() {
              return s(j);
            },
            get href() {
              return e.href;
            }
          },
          () => E,
          () => b,
          {
            onclick: (Le) => {
              var re;
              J(Le), (re = e.onclick) == null || re.call(e, Le);
            },
            onkeydown: (Le) => {
              var re;
              L(Le), (re = e.onkeydown) == null || re.call(e, Le);
            },
            children: (Le, re) => {
              var Ce = jm(), Ke = X(Ce);
              {
                var M = (ee) => {
                  var Se = Gm();
                  O(ee, Se);
                };
                le(Ke, (ee) => {
                  u() && ee(M);
                });
              }
              var V = Ee(Ke);
              Ae(V, () => e.children ?? me), O(Le, Ce);
            },
            $$slots: { default: !0 }
          }
        )),
        (Le) => _ = Le,
        () => _
      );
    });
  }
  return O(t, k), Re(ge);
}
let Wm = 0;
var Km = /* @__PURE__ */ fe("<div><!></div>");
function zm(t, e) {
  Oe(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "id", 19, () => "SMUI-select-helper-text-" + Wm++), a = m(e, "persistent", 3, !1), o = m(e, "validationMsg", 3, !1), c = /* @__PURE__ */ We(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "id",
    "persistent",
    "validationMsg",
    "children"
  ]), l, u = /* @__PURE__ */ be(void 0), d = ye({}), h = ye({}), f = /* @__PURE__ */ be(void 0);
  const v = se("SMUI:select:helper-text:id"), p = se("SMUI:select:helper-text:mount"), g = se("SMUI:select:helper-text:unmount");
  at(() => (Q(
    u,
    new Um({
      addClass: A,
      removeClass: S,
      hasClass: I,
      getAttr: x,
      setAttr: b,
      removeAttr: _,
      setContent: (H) => {
        Q(f, H, !0);
      }
    }),
    !0
  ), v && v(i()), p && p(s(u)), s(u).init(), () => {
    var H;
    g && s(u) && g(s(u)), (H = s(u)) == null || H.destroy();
  }));
  function I(H) {
    return H in d ? d[H] : T().classList.contains(H);
  }
  function A(H) {
    d[H] || (d[H] = !0);
  }
  function S(H) {
    (!(H in d) || d[H]) && (d[H] = !1);
  }
  function x(H) {
    return H in h ? h[H] ?? null : T().getAttribute(H);
  }
  function b(H, B) {
    h[H] !== B && (h[H] = B);
  }
  function _(H) {
    (!(H in h) || h[H] != null) && (h[H] = void 0);
  }
  function T() {
    return l;
  }
  var w = { getElement: T }, E = Km();
  ke(
    E,
    (H) => ({
      class: H,
      "aria-hidden": a() ? void 0 : "true",
      id: i(),
      ...h,
      ...c
    }),
    [
      () => He({
        "mdc-select-helper-text": !0,
        "mdc-select-helper-text--validation-msg": o(),
        "mdc-select-helper-text--validation-msg-persistent": a(),
        ...d,
        [r()]: !0
      })
    ]
  );
  var C = Ie(E);
  {
    var D = (H) => {
      var B = ie(), _e = X(B);
      Ae(_e, () => e.children ?? me), O(H, B);
    }, j = (H) => {
      var B = Xt();
      Fe(() => vt(B, s(f))), O(H, B);
    };
    le(C, (H) => {
      s(f) == null ? H(D) : H(j, !1);
    });
  }
  return we(E, (H) => l = H, () => l), Be(E, (H, B) => z == null ? void 0 : z(H, B), n), O(t, E), Re(w);
}
let Xm = 0;
var Ym = /* @__PURE__ */ fe("<input/>"), Zm = /* @__PURE__ */ fe('<span class="mdc-select__ripple"></span>'), Qm = /* @__PURE__ */ fe('<div><!> <div><!> <!> <!> <!> <span><span> </span></span> <span><svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"><polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon><polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon></svg></span> <!></div> <!></div> <!>', 1);
function Jm(t, e) {
  Oe(e, !0);
  const n = () => Nt(Se, "$selectedTextStore", r), [r, i] = On();
  let a = () => {
  };
  function o(R) {
    return R === a;
  }
  let c = m(e, "use", 19, () => []), l = m(e, "class", 3, ""), u = m(e, "style", 3, ""), d = m(e, "ripple", 3, !0), h = m(e, "disabled", 3, !1), f = m(e, "variant", 3, "standard"), v = m(e, "noLabel", 3, !1), p = m(e, "label", 3, void 0), g = m(e, "value", 15), I = m(e, "key", 3, (R) => R), A = m(e, "dirty", 15, !1), S = m(e, "invalid", 15, a), x = m(e, "updateInvalid", 19, () => o(S())), b = m(e, "required", 3, !1), _ = m(e, "inputId", 19, () => "SMUI-select-" + Xm++), T = m(e, "hiddenInput", 3, !1), w = m(e, "withLeadingIcon", 3, a), E = m(e, "anchor$use", 19, () => []), C = m(e, "anchor$class", 3, ""), D = m(e, "selectedTextContainer$use", 19, () => []), j = m(e, "selectedTextContainer$class", 3, ""), H = m(e, "selectedText$use", 19, () => []), B = m(e, "selectedText$class", 3, ""), _e = m(e, "dropdownIcon$use", 19, () => []), q = m(e, "dropdownIcon$class", 3, ""), F = m(e, "menu$class", 3, ""), U = /* @__PURE__ */ We(e, [
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
  const W = o(S());
  o(S()) && S(!1);
  let te, N = /* @__PURE__ */ be(void 0), y = ye({}), L = ye({}), J, P = ye({}), G = /* @__PURE__ */ be(-1);
  const ge = /* @__PURE__ */ ae(() => U.menu$id ?? _() + "-menu");
  let k = /* @__PURE__ */ be(void 0), oe = se("SMUI:addLayoutListener"), Z, ue = /* @__PURE__ */ be(!1), pe = ye({}), Pe = /* @__PURE__ */ be(void 0), rt = /* @__PURE__ */ be(void 0), Xe = /* @__PURE__ */ be(!1), Le, re = se("SMUI:select:context"), Ce, Ke, M, V, ee;
  ne("SMUI:list:role", ""), ne("SMUI:list:nav", !1);
  const Se = dt("");
  ne("SMUI:select:selectedText", Se);
  const St = dt(g());
  Te(() => {
    gn(St, g());
  }), ne("SMUI:select:value", St), Te(() => {
    s(N) && s(N).getValue() !== I()(g()) && s(N).setValue(I()(g()));
  });
  let xt = s(G);
  Te(() => {
    if (xt !== s(G))
      if (xt = s(G), s(N))
        s(N).setSelectedIndex(
          s(G),
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const R = Vt();
        g() !== R[s(G)] && g(R[s(G)]);
      }
  }), Te(() => {
    s(N) && s(N).getDisabled() !== h() && s(N).setDisabled(h());
  }), Te(() => {
    s(N) && A() && s(N).isValid() !== !S() && (x() ? S(!s(N).isValid()) : s(N).setValid(!S()));
  }), Te(() => {
    s(N) && s(N).getRequired() !== b() && s(N).setRequired(b());
  }), oe && (Z = oe(mi)), ne("SMUI:select:leading-icon:mount", (R) => {
    Ce = R;
  }), ne("SMUI:select:leading-icon:unmount", () => {
    Ce = void 0;
  }), ne("SMUI:list:mount", (R) => {
    Le = R;
  }), ne("SMUI:select:helper-text:id", (R) => {
    Q(k, R, !0);
  }), ne("SMUI:select:helper-text:mount", (R) => {
    Ke = R;
  }), ne("SMUI:select:helper-text:unmount", () => {
    Q(k, void 0), Ke = void 0;
  }), at(() => (Q(
    N,
    new Nm(
      {
        // getSelectAdapterMethods
        // getMenuItemAttr: (menuItem: Element, attr: string) =>
        //   menuItem.getAttribute(attr),
        setSelectedText: (R) => {
          gn(Se, R);
        },
        isSelectAnchorFocused: () => document.activeElement === J,
        getSelectAnchorAttr: ut,
        setSelectAnchorAttr: ot,
        removeSelectAnchorAttr: Tt,
        addMenuClass: Y,
        removeMenuClass: De,
        openMenu: () => {
          Q(ue, !0);
        },
        closeMenu: () => {
          Q(ue, !1);
        },
        getAnchorElement: () => J,
        setMenuAnchorElement: (R) => {
          Q(Pe, R, !0);
        },
        setMenuAnchorCorner: (R) => {
          Q(rt, R, !0);
        },
        setMenuWrapFocus: (R) => {
          Q(Xe, R, !0);
        },
        getSelectedIndex: () => s(G),
        setSelectedIndex: (R) => {
          xt = R, Q(G, R, !0), g(Vt()[s(G)]);
        },
        focusMenuItemAtIndex: (R) => {
          Le.focusItemAtIndex(R);
        },
        getMenuItemCount: () => Le.items.length,
        getMenuItemValues: () => Vt().map(I()),
        getMenuItemTextAtIndex: (R) => Le.getPrimaryTextAtIndex(R),
        isTypeaheadInProgress: () => Le.typeaheadInProgress,
        typeaheadMatchItem: (R, he) => Le.typeaheadMatchItem(R, he),
        // getCommonAdapterMethods
        addClass: ve,
        removeClass: de,
        hasClass: fn,
        setRippleCenter: (R) => V && V.setRippleCenter(R),
        activateBottomLine: () => V && V.activate(),
        deactivateBottomLine: () => V && V.deactivate(),
        notifyChange: (R) => {
          var he;
          A(!0), x() && S(!((he = s(N)) != null && he.isValid())), qe(Bn(), "SMUISelectChange", { value: g(), index: s(G) });
        },
        // getOutlineAdapterMethods
        hasOutline: () => !!ee,
        notchOutline: (R) => ee && ee.notch(R),
        closeOutline: () => ee && ee.closeNotch(),
        // getLabelAdapterMethods
        hasLabel: () => !!M,
        floatLabel: (R) => M && M.float(R),
        getLabelWidth: () => M ? M.getWidth() : 0,
        setLabelRequired: (R) => M && M.setRequired(R)
      },
      {
        get helperText() {
          return Ke;
        },
        get leadingIcon() {
          return Ce;
        }
      }
    ),
    !0
  ), Q(G, Vt().indexOf(g()), !0), s(N).init(), Ht(W), () => {
    var R;
    (R = s(N)) == null || R.destroy();
  })), Hn(() => {
    Z && Z();
  });
  function fn(R) {
    return R in y ? y[R] : Bn().classList.contains(R);
  }
  function ve(R) {
    y[R] || (y[R] = !0);
  }
  function de(R) {
    (!(R in y) || y[R]) && (y[R] = !1);
  }
  function K(R, he) {
    L[R] != he && (he === "" || he == null ? delete L[R] : L[R] = he);
  }
  function Y(R) {
    pe[R] || (pe[R] = !0);
  }
  function De(R) {
    (!(R in pe) || pe[R]) && (pe[R] = !1);
  }
  function ut(R) {
    return R in P ? P[R] ?? null : Bn().getAttribute(R);
  }
  function ot(R, he) {
    P[R] !== he && (P[R] = he);
  }
  function Tt(R) {
    (!(R in P) || P[R] != null) && (P[R] = void 0);
  }
  function Vt() {
    return Le.getOrderedList().map((R) => R.getValue());
  }
  function fr(R) {
    const he = R.currentTarget.getBoundingClientRect();
    return (ft(R) ? R.touches[0].clientX : R.clientX) - he.left;
  }
  function ft(R) {
    return "touches" in R;
  }
  function pt() {
    if (s(N) == null)
      throw new Error("Instance is undefined.");
    return s(N).getUseDefaultValidation();
  }
  function Ht(R) {
    var he;
    (he = s(N)) == null || he.setUseDefaultValidation(R);
  }
  function Fn() {
    J.focus();
  }
  function mi() {
    var R;
    (R = s(N)) == null || R.layout();
  }
  function Bn() {
    return te;
  }
  var Ue = {
    getUseDefaultValidation: pt,
    setUseDefaultValidation: Ht,
    focus: Fn,
    layout: mi,
    getElement: Bn
  }, tt = Qm(), et = X(tt);
  ke(et, (R, he, ct) => ({ class: R, style: he, ...ct }), [
    () => He({
      "mdc-select": !0,
      "mdc-select--required": b(),
      "mdc-select--disabled": h(),
      "mdc-select--filled": f() === "filled",
      "mdc-select--outlined": f() === "outlined",
      "smui-select--standard": f() === "standard",
      "mdc-select--with-leading-icon": o(w()) ? e.leadingIcon : w(),
      "mdc-select--no-label": v() || p() == null,
      "mdc-select--invalid": S(),
      "mdc-select--activated": s(ue),
      "mdc-data-table__pagination-rows-per-page-select": re === "data-table:pagination",
      ...y,
      [l()]: !0
    }),
    () => Object.entries(L).map(([R, he]) => `${R}: ${he};`).concat([u()]).join(" "),
    () => ta(U, [
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
  var Mt = Ie(et);
  {
    var hn = (R) => {
      var he = Ym();
      ke(
        he,
        (ct) => ({
          type: "hidden",
          required: b(),
          disabled: h(),
          value: g(),
          ...ct
        }),
        [() => st(U, "input$")],
        void 0,
        void 0,
        !0
      ), O(R, he);
    };
    le(Mt, (R) => {
      T() && R(hn);
    });
  }
  var Qe = Ee(Mt, 2), gt = (R) => {
    var he;
    J.focus(), s(N) && s(N).handleClick(fr(R)), (he = e.anchor$onclick) == null || he.call(e, R);
  }, wt = (R) => {
    var he;
    s(N) && s(N).handleKeydown(R), (he = e.onkeydown) == null || he.call(e, R);
  }, Je = (R) => {
    var he;
    s(N) && s(N).handleBlur(), qe(Bn(), "blur", R), (he = e.anchor$onblur) == null || he.call(e, R);
  }, Lt = (R) => {
    var he;
    s(N) && s(N).handleFocus(), qe(Bn(), "focus", R), (he = e.anchor$onfocus) == null || he.call(e, R);
  };
  ke(
    Qe,
    (R, he) => ({
      class: R,
      "aria-required": b() ? "true" : void 0,
      "aria-disabled": h() ? "true" : void 0,
      "aria-controls": s(ge),
      "aria-expanded": s(ue) ? "true" : "false",
      "aria-describedby": s(k),
      role: "combobox",
      tabindex: "0",
      ...P,
      ...he,
      onclick: gt,
      onkeydown: wt,
      onblur: Je,
      onfocus: Lt
    }),
    [
      () => He({ "mdc-select__anchor": !0, [C()]: !0 }),
      () => st(U, "anchor$")
    ]
  );
  var Gt = Ie(Qe);
  {
    var Yt = (R) => {
      var he = Zm();
      O(R, he);
    };
    le(Gt, (R) => {
      f() === "filled" && R(Yt);
    });
  }
  var _t = Ee(Gt, 2);
  {
    var Dt = (R) => {
      {
        let he = /* @__PURE__ */ ae(() => _() + "-smui-label"), ct = /* @__PURE__ */ ae(() => n() !== ""), Ot = /* @__PURE__ */ ae(() => st(U, "label$"));
        we(
          po(R, nt(
            {
              get id() {
                return s(he);
              },
              get floatAbove() {
                return s(ct);
              },
              get required() {
                return b();
              }
            },
            () => s(Ot),
            {
              children: (Qn, Jn) => {
                var sa = ie(), gi = X(sa);
                {
                  var jr = (qr) => {
                  }, jo = (qr) => {
                    var qa = ie(), la = X(qa);
                    {
                      var hl = (vr) => {
                        var Wr = Xt();
                        Fe(() => vt(Wr, p())), O(vr, Wr);
                      }, Wa = (vr) => {
                        var Wr = ie(), qo = X(Wr);
                        Ae(qo, p), O(vr, Wr);
                      };
                      le(
                        la,
                        (vr) => {
                          typeof p() == "string" ? vr(hl) : vr(Wa, !1);
                        },
                        !0
                      );
                    }
                    O(qr, qa);
                  };
                  le(gi, (qr) => {
                    p() == null ? qr(jr) : qr(jo, !1);
                  });
                }
                O(Qn, sa);
              },
              $$slots: { default: !0 }
            }
          )),
          (Qn) => M = Qn,
          () => M
        );
      }
    };
    le(_t, (R) => {
      f() !== "outlined" && !v() && p() != null && R(Dt);
    });
  }
  var on = Ee(_t, 2);
  {
    var bt = (R) => {
      {
        let he = /* @__PURE__ */ ae(() => v() || p() == null), ct = /* @__PURE__ */ ae(() => st(U, "outline$"));
        we(
          Yc(R, nt(
            {
              get noLabel() {
                return s(he);
              }
            },
            () => s(ct),
            {
              children: (Ot, Qn) => {
                var Jn = ie(), sa = X(Jn);
                {
                  var gi = (jr) => {
                    {
                      let jo = /* @__PURE__ */ ae(() => _() + "-smui-label"), qr = /* @__PURE__ */ ae(() => n() !== ""), qa = /* @__PURE__ */ ae(() => st(U, "label$"));
                      we(
                        po(jr, nt(
                          {
                            get id() {
                              return s(jo);
                            },
                            get floatAbove() {
                              return s(qr);
                            },
                            get required() {
                              return b();
                            }
                          },
                          () => s(qa),
                          {
                            children: (la, hl) => {
                              var Wa = ie(), vr = X(Wa);
                              {
                                var Wr = (ua) => {
                                }, qo = (ua) => {
                                  var vl = ie(), Rd = X(vl);
                                  {
                                    var Md = (bi) => {
                                      var ca = Xt();
                                      Fe(() => vt(ca, p())), O(bi, ca);
                                    }, Dd = (bi) => {
                                      var ca = ie(), Pd = X(ca);
                                      Ae(Pd, p), O(bi, ca);
                                    };
                                    le(
                                      Rd,
                                      (bi) => {
                                        typeof p() == "string" ? bi(Md) : bi(Dd, !1);
                                      },
                                      !0
                                    );
                                  }
                                  O(ua, vl);
                                };
                                le(vr, (ua) => {
                                  p() == null ? ua(Wr) : ua(qo, !1);
                                });
                              }
                              O(la, Wa);
                            },
                            $$slots: { default: !0 }
                          }
                        )),
                        (la) => M = la,
                        () => M
                      );
                    }
                  };
                  le(sa, (jr) => {
                    !v() && p() != null && jr(gi);
                  });
                }
                O(Ot, Jn);
              },
              $$slots: { default: !0 }
            }
          )),
          (Ot) => ee = Ot,
          () => ee
        );
      }
    };
    le(on, (R) => {
      f() === "outlined" && R(bt);
    });
  }
  var Vr = Ee(on, 2);
  Ae(Vr, () => e.leadingIcon ?? me);
  var In = Ee(Vr, 2);
  ke(In, (R, he) => ({ class: R, ...he }), [
    () => He({
      "mdc-select__selected-text-container": !0,
      [j()]: !0
    }),
    () => st(U, "selectedTextContainer$")
  ]);
  var hr = Ie(In);
  ke(
    hr,
    (R, he) => ({
      id: _() + "-smui-selected-text",
      class: R,
      role: "button",
      "aria-haspopup": "listbox",
      "aria-labelledby": _() + "-smui-label",
      ...he
    }),
    [
      () => He({
        "mdc-select__selected-text": !0,
        [B()]: !0
      }),
      () => st(U, "selectedText$")
    ]
  );
  var oa = Ie(hr);
  Be(hr, (R, he) => z == null ? void 0 : z(R, he), H), Be(In, (R, he) => z == null ? void 0 : z(R, he), D);
  var _n = Ee(In, 2);
  ke(_n, (R, he) => ({ class: R, ...he }), [
    () => He({
      "mdc-select__dropdown-icon": !0,
      [q()]: !0
    }),
    () => st(U, "dropdownIcon$")
  ]), Be(_n, (R, he) => z == null ? void 0 : z(R, he), _e);
  var Zn = Ee(_n, 2);
  {
    var kn = (R) => {
      {
        let he = /* @__PURE__ */ ae(() => st(U, "ripple$"));
        we(Xc(R, nt(() => s(he))), (ct) => V = ct, () => V);
      }
    };
    le(Zn, (R) => {
      f() !== "outlined" && d() && R(kn);
    });
  }
  we(Qe, (R) => J = R, () => J), Be(Qe, (R, he) => z == null ? void 0 : z(R, he), E);
  var Gr = Ee(Qe, 2);
  {
    let R = /* @__PURE__ */ ae(() => He({
      "mdc-select__menu": !0,
      ...pe,
      [F()]: !0
    })), he = /* @__PURE__ */ ae(() => st(U, "menu$"));
    Bm(Gr, nt(
      {
        get class() {
          return s(R);
        },
        get id() {
          return s(ge);
        },
        fullWidth: !0,
        anchor: !1,
        get anchorElement() {
          return s(Pe);
        },
        get anchorCorner() {
          return s(rt);
        }
      },
      () => s(he),
      {
        onSMUIMenuSelected: (ct) => {
          var Ot;
          s(N) && s(N).handleMenuItemAction(ct.detail.index), (Ot = e.onSMUIMenuSelected) == null || Ot.call(e, ct);
        },
        onSMUIMenuSurfaceClosing: (ct) => {
          var Ot;
          s(N) && s(N).handleMenuClosing(), (Ot = e.onSMUIMenuSurfaceClosing) == null || Ot.call(e, ct);
        },
        onSMUIMenuSurfaceClosed: (ct) => {
          var Ot;
          s(N) && s(N).handleMenuClosed(), (Ot = e.onSMUIMenuSurfaceClosed) == null || Ot.call(e, ct);
        },
        onSMUIMenuSurfaceOpened: (ct) => {
          var Ot;
          s(N) && s(N).handleMenuOpened(), (Ot = e.onSMUIMenuSurfaceOpened) == null || Ot.call(e, ct);
        },
        get open() {
          return s(ue);
        },
        set open(ct) {
          Q(ue, ct, !0);
        },
        children: (ct, Ot) => {
          {
            let Qn = /* @__PURE__ */ ae(() => st(U, "list$"));
            km(ct, nt(
              {
                role: "listbox",
                get wrapFocus() {
                  return s(Xe);
                }
              },
              () => s(Qn),
              {
                get selectedIndex() {
                  return s(G);
                },
                set selectedIndex(Jn) {
                  Q(G, Jn, !0);
                },
                children: (Jn, sa) => {
                  var gi = ie(), jr = X(gi);
                  Ae(jr, () => e.children ?? me), O(Jn, gi);
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
  we(et, (R) => te = R, () => te), Be(et, (R, he) => Kt == null ? void 0 : Kt(R, he), () => ({
    ripple: f() === "filled",
    unbounded: !1,
    addClass: ve,
    removeClass: de,
    addStyle: K
  })), Be(et, (R, he) => is == null ? void 0 : is(R, he), () => ({ addClass: ve, removeClass: de })), Be(et, (R, he) => z == null ? void 0 : z(R, he), c);
  var Go = Ee(et, 2);
  {
    var Ld = (R) => {
      {
        let he = /* @__PURE__ */ ae(() => st(U, "helperText$"));
        zm(R, nt(() => s(he), {
          children: (ct, Ot) => {
            var Qn = ie(), Jn = X(Qn);
            Ae(Jn, () => e.helperText ?? me), O(ct, Qn);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    le(Go, (R) => {
      e.helperText && R(Ld);
    });
  }
  Fe(() => vt(oa, n())), O(t, tt);
  var Od = Re(Ue);
  return i(), Od;
}
function $m(t, e) {
  Oe(e, !0);
  const n = () => Nt(d, "$selectedValue", r), [r, i] = On();
  let a = m(e, "use", 19, () => []);
  m(e, "class", 3, "");
  let o = m(e, "value", 3, ""), c = /* @__PURE__ */ We(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "value",
    "children"
  ]), l;
  const u = se("SMUI:select:selectedText"), d = se("SMUI:select:value");
  ne("SMUI:list:item:role", "option");
  const h = /* @__PURE__ */ ae(() => o() != null && o() !== "" && n() === o());
  at(f), Hn(f);
  function f() {
    s(h) && l && gn(u, l.getPrimaryText());
  }
  function v() {
    return l.getElement();
  }
  var p = { getElement: v };
  we(
    qm(t, nt(
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
      () => c,
      {
        children: (I, A) => {
          var S = ie(), x = X(S);
          Ae(x, () => e.children ?? me), O(I, S);
        },
        $$slots: { default: !0 }
      }
    )),
    (I) => l = I,
    () => l
  );
  var g = Re(p);
  return i(), g;
}
function su(t, e) {
  Oe(e, !0);
  let n = m(e, "data", 19, () => []);
  m(e, "placeholder", 3, "");
  let r = m(e, "label", 3, "");
  m(e, "description", 3, "");
  let i = m(e, "value", 15), a = m(e, "required", 3, !1);
  m(e, "size", 3, "sm");
  let o = m(e, "variant", 3, "standard"), c = m(e, "selectedOptionIndex", 31, () => -1), l = m(e, "disabled", 3, !1);
  function u(d) {
    return () => c(d);
  }
  Jm(t, {
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
      var f = ie(), v = X(f);
      ir(v, 17, n, Ia, (p, g, I) => {
        {
          let A = /* @__PURE__ */ ae(() => u(I));
          $m(p, {
            get onclick() {
              return s(A);
            },
            get value() {
              return s(g).value;
            },
            children: (S, x) => {
              var b = Xt();
              Fe(() => vt(b, s(g).label)), O(S, b);
            },
            $$slots: { default: !0 }
          });
        }
      }), O(d, f);
    },
    $$slots: { default: !0 }
  }), Re();
}
var eg = /* @__PURE__ */ fe("<div><!></div>");
function $c(t, e) {
  Oe(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "variant", 3, "raised"), a = m(e, "square", 3, !1), o = m(e, "color", 3, "default"), c = m(e, "elevation", 3, 1), l = m(e, "transition", 3, !1), u = /* @__PURE__ */ We(e, [
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
  var f = { getElement: h }, v = eg();
  ke(v, (g) => ({ class: g, ...u }), [
    () => He({
      "smui-paper": !0,
      "smui-paper--raised": i() === "raised",
      "smui-paper--unelevated": i() === "unelevated",
      "smui-paper--outlined": i() === "outlined",
      ["smui-paper--elevation-z" + c()]: c() !== 0 && i() === "raised",
      "smui-paper--rounded": !a(),
      ["smui-paper--color-" + o()]: o() !== "default",
      "smui-paper-transition": l(),
      [r()]: !0
    })
  ]);
  var p = Ie(v);
  return Ae(p, () => e.children ?? me), we(v, (g) => d = g, () => d), Be(v, (g, I) => z == null ? void 0 : z(g, I), n), O(t, v), Re(f);
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
var Os;
(function(t) {
  t.POLITE = "polite", t.ASSERTIVE = "assertive";
})(Os || (Os = {}));
var tg = "data-mdc-dom-announce";
function ng(t, e) {
  rg.getInstance().say(t, e);
}
var rg = (
  /** @class */
  function() {
    function t() {
      this.liveRegions = /* @__PURE__ */ new Map();
    }
    return t.getInstance = function() {
      return t.instance || (t.instance = new t()), t.instance;
    }, t.prototype.say = function(e, n) {
      var r, i, a = (r = n == null ? void 0 : n.priority) !== null && r !== void 0 ? r : Os.POLITE, o = (i = n == null ? void 0 : n.ownerDocument) !== null && i !== void 0 ? i : document, c = this.getLiveRegion(a, o);
      c.textContent = "", setTimeout(function() {
        c.textContent = e, o.addEventListener("click", l);
      }, 1);
      function l() {
        c.textContent = "", o.removeEventListener("click", l);
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
      return r.style.position = "absolute", r.style.top = "-9999px", r.style.left = "-9999px", r.style.height = "1px", r.style.overflow = "hidden", r.setAttribute("aria-atomic", "true"), r.setAttribute("aria-live", e), r.setAttribute(tg, "true"), n.body.appendChild(r), r;
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
var gr;
(function(t) {
  t[t.UNSPECIFIED = 0] = "UNSPECIFIED", t[t.CLICK = 1] = "CLICK", t[t.BACKSPACE_KEY = 2] = "BACKSPACE_KEY", t[t.DELETE_KEY = 3] = "DELETE_KEY", t[t.SPACEBAR_KEY = 4] = "SPACEBAR_KEY", t[t.ENTER_KEY = 5] = "ENTER_KEY";
})(gr || (gr = {}));
var Nn = {
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
var ed = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n) {
      return t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Nn;
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
      n.stopPropagation(), this.adapter.notifyInteraction(gr.CLICK);
    }, e.prototype.handleKeydown = function(n) {
      n.stopPropagation();
      var r = yt(n);
      if (this.shouldNotifyInteractionFromKey(r)) {
        var i = this.getTriggerFromKey(r);
        this.adapter.notifyInteraction(i);
        return;
      }
      if (xp(n)) {
        this.adapter.notifyNavigation(r);
        return;
      }
    }, e.prototype.removeFocus = function() {
      this.adapter.setAttribute(Nn.TAB_INDEX, "-1");
    }, e.prototype.focus = function() {
      this.adapter.setAttribute(Nn.TAB_INDEX, "0"), this.adapter.focus();
    }, e.prototype.isNavigable = function() {
      return this.adapter.getAttribute(Nn.ARIA_HIDDEN) !== "true";
    }, e.prototype.shouldNotifyInteractionFromKey = function(n) {
      var r = n === Me.ENTER || n === Me.SPACEBAR, i = n === Me.BACKSPACE || n === Me.DELETE;
      return r || i;
    }, e.prototype.getTriggerFromKey = function(n) {
      return n === Me.SPACEBAR ? gr.SPACEBAR_KEY : n === Me.ENTER ? gr.ENTER_KEY : n === Me.DELETE ? gr.DELETE_KEY : n === Me.BACKSPACE ? gr.BACKSPACE_KEY : gr.UNSPECIFIED;
    }, e;
  }(Ut)
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
var td = (
  /** @class */
  function(t) {
    $e(e, t);
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
        return new vo(i, a);
      });
      var r = vo.createAdapter(this);
      this.rippleSurface = n(this.root, new Ho(r));
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
            Nn.INTERACTION_EVENT,
            { trigger: i },
            !0
            /* shouldBubble */
          );
        },
        notifyNavigation: function(i) {
          n.emit(
            Nn.NAVIGATION_EVENT,
            { key: i },
            !0
            /* shouldBubble */
          );
        },
        setAttribute: function(i, a) {
          n.root.setAttribute(i, a);
        }
      };
      return new ed(r);
    }, e.prototype.isNavigable = function() {
      return this.foundation.isNavigable();
    }, e.prototype.focus = function() {
      this.foundation.focus();
    }, e.prototype.removeFocus = function() {
      this.foundation.removeFocus();
    }, e;
  }(No)
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
var Kn;
(function(t) {
  t.LEFT = "left", t.RIGHT = "right";
})(Kn || (Kn = {}));
var ar;
(function(t) {
  t.PRIMARY = "primary", t.TRAILING = "trailing", t.NONE = "none";
})(ar || (ar = {}));
var xe = {
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
}, Rn = /* @__PURE__ */ new Set();
Rn.add(xe.ARROW_LEFT_KEY);
Rn.add(xe.ARROW_RIGHT_KEY);
Rn.add(xe.ARROW_DOWN_KEY);
Rn.add(xe.ARROW_UP_KEY);
Rn.add(xe.END_KEY);
Rn.add(xe.HOME_KEY);
Rn.add(xe.IE_ARROW_LEFT_KEY);
Rn.add(xe.IE_ARROW_RIGHT_KEY);
Rn.add(xe.IE_ARROW_DOWN_KEY);
Rn.add(xe.IE_ARROW_UP_KEY);
var Br = /* @__PURE__ */ new Set();
Br.add(xe.ARROW_UP_KEY);
Br.add(xe.ARROW_DOWN_KEY);
Br.add(xe.HOME_KEY);
Br.add(xe.END_KEY);
Br.add(xe.IE_ARROW_UP_KEY);
Br.add(xe.IE_ARROW_DOWN_KEY);
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
var lu = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0
}, Ti;
(function(t) {
  t[t.SHOULD_FOCUS = 0] = "SHOULD_FOCUS", t[t.SHOULD_NOT_FOCUS = 1] = "SHOULD_NOT_FOCUS";
})(Ti || (Ti = {}));
var al = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n) {
      var r = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
      return r.shouldRemoveOnTrailingIconClick = !0, r.shouldFocusPrimaryActionOnClick = !0, r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return xe;
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
            return lu;
          },
          getComputedStyleValue: function() {
            return "";
          },
          getRootBoundingClientRect: function() {
            return lu;
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
      this.adapter.addClass(At.CHIP_EXIT);
    }, e.prototype.handleClick = function() {
      this.adapter.notifyInteraction(), this.setPrimaryActionFocusable(this.getFocusBehavior());
    }, e.prototype.handleDoubleClick = function() {
      this.isEditable() && this.startEditing();
    }, e.prototype.handleTransitionEnd = function(n) {
      var r = this, i = this.adapter.eventTargetHasClass(n.target, At.CHIP_EXIT), a = n.propertyName === "width", o = n.propertyName === "opacity";
      if (i && o) {
        var c = this.adapter.getComputedStyleValue("width");
        requestAnimationFrame(function() {
          r.adapter.setStyleProperty("width", c), r.adapter.setStyleProperty("padding", "0"), r.adapter.setStyleProperty("margin", "0"), requestAnimationFrame(function() {
            r.adapter.setStyleProperty("width", "0");
          });
        });
        return;
      }
      if (i && a) {
        this.removeFocus();
        var l = this.adapter.getAttribute(xe.REMOVED_ANNOUNCEMENT_ATTRIBUTE);
        this.adapter.notifyRemoval(l);
      }
      if (o) {
        var u = this.adapter.eventTargetHasClass(n.target, At.LEADING_ICON) && this.adapter.hasClass(At.SELECTED), d = this.adapter.eventTargetHasClass(n.target, At.CHECKMARK) && !this.adapter.hasClass(At.SELECTED);
        if (u) {
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
      Rn.has(n.key) && (n.preventDefault(), this.focusNextAction(n.key, ar.PRIMARY));
    }, e.prototype.handleTrailingActionNavigation = function(n) {
      this.focusNextAction(n.detail.key, ar.TRAILING);
    }, e.prototype.removeFocus = function() {
      this.adapter.setPrimaryActionAttr(xe.TAB_INDEX, "-1"), this.adapter.removeTrailingActionFocus();
    }, e.prototype.focusPrimaryAction = function() {
      this.setPrimaryActionFocusable(Ti.SHOULD_FOCUS);
    }, e.prototype.focusTrailingAction = function() {
      var n = this.adapter.isTrailingActionNavigable();
      if (n) {
        this.adapter.setPrimaryActionAttr(xe.TAB_INDEX, "-1"), this.adapter.focusTrailingAction();
        return;
      }
      this.focusPrimaryAction();
    }, e.prototype.setPrimaryActionFocusable = function(n) {
      this.adapter.setPrimaryActionAttr(xe.TAB_INDEX, "0"), n === Ti.SHOULD_FOCUS && this.adapter.focusPrimaryAction(), this.adapter.removeTrailingActionFocus();
    }, e.prototype.getFocusBehavior = function() {
      return this.shouldFocusPrimaryActionOnClick ? Ti.SHOULD_FOCUS : Ti.SHOULD_NOT_FOCUS;
    }, e.prototype.focusNextAction = function(n, r) {
      var i = this.adapter.isTrailingActionNavigable(), a = this.getDirection(n);
      if (Br.has(n) || !i) {
        this.adapter.notifyNavigation(n, r);
        return;
      }
      if (r === ar.PRIMARY && a === Kn.RIGHT) {
        this.focusTrailingAction();
        return;
      }
      if (r === ar.TRAILING && a === Kn.LEFT) {
        this.focusPrimaryAction();
        return;
      }
      this.adapter.notifyNavigation(n, ar.NONE);
    }, e.prototype.getDirection = function(n) {
      var r = this.adapter.isRTL(), i = n === xe.ARROW_LEFT_KEY || n === xe.IE_ARROW_LEFT_KEY, a = n === xe.ARROW_RIGHT_KEY || n === xe.IE_ARROW_RIGHT_KEY;
      return !r && i || r && a ? Kn.LEFT : Kn.RIGHT;
    }, e.prototype.removeChip = function() {
      this.shouldRemoveOnTrailingIconClick && this.beginExit();
    }, e.prototype.shouldStartEditing = function(n) {
      return this.eventFromPrimaryAction(n) && n.key === xe.ENTER_KEY;
    }, e.prototype.shouldFinishEditing = function(n) {
      return n.key === xe.ENTER_KEY;
    }, e.prototype.shouldNotifyInteraction = function(n) {
      return n.key === xe.ENTER_KEY || n.key === xe.SPACEBAR_KEY;
    }, e.prototype.isDeleteAction = function(n) {
      var r = this.adapter.hasClass(At.DELETABLE);
      return r && (n.key === xe.BACKSPACE_KEY || n.key === xe.DELETE_KEY || n.key === xe.IE_DELETE_KEY);
    }, e.prototype.setSelectedImpl = function(n) {
      n ? (this.adapter.addClass(At.SELECTED), this.adapter.setPrimaryActionAttr(xe.ARIA_CHECKED, "true")) : (this.adapter.removeClass(At.SELECTED), this.adapter.setPrimaryActionAttr(xe.ARIA_CHECKED, "false"));
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
  }(Ut)
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
var nd = (
  /** @class */
  function(t) {
    $e(e, t);
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
      n === void 0 && (n = function(c, l) {
        return new vo(c, l);
      }), r === void 0 && (r = function(c) {
        return new td(c);
      }), this.leadingIcon = this.root.querySelector(xe.LEADING_ICON_SELECTOR), this.checkmark = this.root.querySelector(xe.CHECKMARK_SELECTOR), this.primaryAction = this.root.querySelector(xe.PRIMARY_ACTION_SELECTOR);
      var a = this.root.querySelector(xe.TRAILING_ACTION_SELECTOR);
      a && (this.trailingAction = r(a));
      var o = ce(ce({}, vo.createAdapter(this)), { computeBoundingRect: function() {
        return i.foundation.getDimensions();
      } });
      this.rippleSurface = n(this.root, new Ho(o));
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
      }, this.listen("transitionend", this.handleTransitionEnd), this.listen("click", this.handleClick), this.listen("keydown", this.handleKeydown), this.listen("focusin", this.handleFocusIn), this.listen("focusout", this.handleFocusOut), this.trailingAction && (this.listen(Nn.INTERACTION_EVENT, this.handleTrailingActionInteraction), this.listen(Nn.NAVIGATION_EVENT, this.handleTrailingActionNavigation));
    }, e.prototype.destroy = function() {
      this.rippleSurface.destroy(), this.unlisten("transitionend", this.handleTransitionEnd), this.unlisten("keydown", this.handleKeydown), this.unlisten("click", this.handleClick), this.unlisten("focusin", this.handleFocusIn), this.unlisten("focusout", this.handleFocusOut), this.trailingAction && (this.unlisten(Nn.INTERACTION_EVENT, this.handleTrailingActionInteraction), this.unlisten(Nn.NAVIGATION_EVENT, this.handleTrailingActionNavigation)), t.prototype.destroy.call(this);
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
            xe.INTERACTION_EVENT,
            { chipId: n.id },
            !0
            /* shouldBubble */
          );
        },
        notifyNavigation: function(i, a) {
          return n.emit(
            xe.NAVIGATION_EVENT,
            { chipId: n.id, key: i, source: a },
            !0
            /* shouldBubble */
          );
        },
        notifyRemoval: function(i) {
          n.emit(
            xe.REMOVAL_EVENT,
            { chipId: n.id, removedAnnouncement: i },
            !0
            /* shouldBubble */
          );
        },
        notifySelection: function(i, a) {
          return n.emit(
            xe.SELECTION_EVENT,
            { chipId: n.id, selected: i, shouldIgnore: a },
            !0
            /* shouldBubble */
          );
        },
        notifyTrailingIconInteraction: function() {
          return n.emit(
            xe.TRAILING_ICON_INTERACTION_EVENT,
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
      return new al(r);
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
  }(No)
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
var rd = {
  CHIP_SELECTOR: ".mdc-chip"
}, Aa = {
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
var ol = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n) {
      var r = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
      return r.selectedChipIds = [], r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return rd;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Aa;
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
      this.removeFocusFromChipsExcept(i), (this.adapter.hasClass(Aa.CHOICE) || this.adapter.hasClass(Aa.FILTER)) && this.toggleSelect(r);
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
        var c = Math.min(a, o);
        this.removeFocusFromChipsExcept(c), this.adapter.focusChipTrailingActionAtIndex(c);
      }
    }, e.prototype.handleChipNavigation = function(n) {
      var r = n.chipId, i = n.key, a = n.source, o = this.adapter.getChipListCount() - 1, c = this.adapter.getIndexOfChipById(r);
      if (!(c === -1 || !Rn.has(i))) {
        var l = this.adapter.isRTL(), u = i === xe.ARROW_LEFT_KEY || i === xe.IE_ARROW_LEFT_KEY, d = i === xe.ARROW_RIGHT_KEY || i === xe.IE_ARROW_RIGHT_KEY, h = i === xe.ARROW_DOWN_KEY || i === xe.IE_ARROW_DOWN_KEY, f = !l && d || l && u || h, v = i === xe.HOME_KEY, p = i === xe.END_KEY;
        f ? c++ : v ? c = 0 : p ? c = o : c--, !(c < 0 || c > o) && (this.removeFocusFromChipsExcept(c), this.focusChipAction(c, i, a));
      }
    }, e.prototype.focusChipAction = function(n, r, i) {
      var a = Br.has(r);
      if (a && i === ar.PRIMARY)
        return this.adapter.focusChipPrimaryActionAtIndex(n);
      if (a && i === ar.TRAILING)
        return this.adapter.focusChipTrailingActionAtIndex(n);
      var o = this.getDirection(r);
      if (o === Kn.LEFT)
        return this.adapter.focusChipTrailingActionAtIndex(n);
      if (o === Kn.RIGHT)
        return this.adapter.focusChipPrimaryActionAtIndex(n);
    }, e.prototype.getDirection = function(n) {
      var r = this.adapter.isRTL(), i = n === xe.ARROW_LEFT_KEY || n === xe.IE_ARROW_LEFT_KEY, a = n === xe.ARROW_RIGHT_KEY || n === xe.IE_ARROW_RIGHT_KEY;
      return !r && i || r && a ? Kn.LEFT : Kn.RIGHT;
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
        if (this.adapter.hasClass(Aa.CHOICE) && this.selectedChipIds.length > 0) {
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
  }(Ut)
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
var Fo = al.strings, uu = Fo.INTERACTION_EVENT, cu = Fo.SELECTION_EVENT, du = Fo.REMOVAL_EVENT, fu = Fo.NAVIGATION_EVENT, ig = ol.strings.CHIP_SELECTOR, hu = 0, ag = (
  /** @class */
  function(t) {
    $e(e, t);
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
        return new nd(r);
      }), this.chipFactory = n, this.chipsList = this.instantiateChips(this.chipFactory);
    }, e.prototype.initialSyncWithDOM = function() {
      var n, r, i = this;
      try {
        for (var a = Rt(this.chipsList), o = a.next(); !o.done; o = a.next()) {
          var c = o.value;
          c.id && c.selected && this.foundation.select(c.id);
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
      }, this.listen(uu, this.handleChipInteraction), this.listen(cu, this.handleChipSelection), this.listen(du, this.handleChipRemoval), this.listen(fu, this.handleChipNavigation);
    }, e.prototype.destroy = function() {
      var n, r;
      try {
        for (var i = Rt(this.chipsList), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          o.destroy();
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
      this.unlisten(uu, this.handleChipInteraction), this.unlisten(cu, this.handleChipSelection), this.unlisten(du, this.handleChipRemoval), this.unlisten(fu, this.handleChipNavigation), t.prototype.destroy.call(this);
    }, e.prototype.addChip = function(n) {
      n.id = n.id || "mdc-chip-" + ++hu, this.chipsList.push(this.chipFactory(n));
    }, e.prototype.getDefaultFoundation = function() {
      var n = this, r = {
        announceMessage: function(i) {
          ng(i);
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
      return new ol(r);
    }, e.prototype.instantiateChips = function(n) {
      var r = [].slice.call(this.root.querySelectorAll(ig));
      return r.map(function(i) {
        return i.id = i.id || "mdc-chip-" + ++hu, n(i);
      });
    }, e.prototype.findChipIndex = function(n) {
      for (var r = 0; r < this.chips.length; r++)
        if (this.chipsList[r].id === n)
          return r;
      return -1;
    }, e;
  }(No)
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
const sl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MDCChip: nd,
  MDCChipFoundation: al,
  MDCChipSet: ag,
  MDCChipSetFoundation: ol,
  MDCChipTrailingAction: td,
  MDCChipTrailingActionFoundation: ed,
  chipCssClasses: At,
  chipSetCssClasses: Aa,
  chipSetStrings: rd,
  chipStrings: xe,
  trailingActionStrings: Nn
}, Symbol.toStringTag, { value: "Module" }));
var og = /* @__PURE__ */ fe('<div class="mdc-chip__ripple"></div>'), sg = /* @__PURE__ */ fe('<div class="mdc-chip__touch"></div>'), lg = /* @__PURE__ */ fe("<!> <!> <!>", 1);
function ug(t, e) {
  Oe(e, !0);
  const n = () => Nt(E, "$initialSelectedStore", o), r = () => Nt(B, "$choice", o), i = () => Nt(_e, "$index", o), a = () => Nt(H, "$nonInteractive", o), [o, c] = On(), { MDCChipFoundation: l } = sl;
  let u = m(e, "use", 19, () => []), d = m(e, "class", 3, ""), h = m(e, "style", 3, ""), f = m(e, "ripple", 3, !0), v = m(e, "touch", 3, !1), p = m(e, "shouldRemoveOnTrailingIconClick", 3, !0), g = m(e, "shouldFocusPrimaryActionOnClick", 3, !0), I = m(e, "component", 3, Fr), A = m(e, "tag", 3, "div"), S = /* @__PURE__ */ We(e, [
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
  ]), x, b = /* @__PURE__ */ be(void 0), _ = ye({}), T = ye({}), w = ye({});
  const E = se("SMUI:chips:chip:initialSelected");
  let C = /* @__PURE__ */ be(ye(n())), D, j;
  const H = se("SMUI:chips:nonInteractive"), B = se("SMUI:chips:choice"), _e = se("SMUI:chips:chip:index"), q = dt(p());
  Te(() => {
    gn(q, p());
  }), ne("SMUI:chips:chip:shouldRemoveOnTrailingIconClick", q);
  const F = dt(s(C));
  Te(() => {
    gn(F, s(C));
  }), ne("SMUI:chips:chip:isSelected", F);
  const U = dt(T);
  Te(() => {
    gn(U, T);
  }), ne("SMUI:chips:chip:leadingIconClasses", U), ne("SMUI:chips:chip:focusable", r() && s(C) || i() === 0), Te(() => {
    s(b) && s(b).getShouldRemoveOnTrailingIconClick() !== p() && s(b).setShouldRemoveOnTrailingIconClick(p());
  }), Te(() => {
    s(b) && s(b).setShouldFocusPrimaryActionOnClick(g());
  }), ne("SMUI:chips:primary-action:mount", (re) => {
    D = re;
  }), ne("SMUI:chips:primary-action:unmount", () => {
    D = void 0;
  }), ne("SMUI:chips:trailing-action:mount", (re) => {
    j = re;
  }), ne("SMUI:chips:trailing-action:unmount", () => {
    j = void 0;
  });
  const W = se("SMUI:chips:chip:mount"), te = se("SMUI:chips:chip:unmount");
  at(() => {
    Q(
      b,
      new l({
        addClass: y,
        addClassToLeadingIcon: J,
        eventTargetHasClass: (Ce, Ke) => Ce && "classList" in Ce ? Ce.classList.contains(Ke) : !1,
        focusPrimaryAction: () => {
          D && D.focus();
        },
        focusTrailingAction: () => {
          j && j.focus();
        },
        getAttribute: (Ce) => pe().getAttribute(Ce),
        getCheckmarkBoundingClientRect: () => {
          const Ce = pe().querySelector(".mdc-chip__checkmark");
          return Ce ? Ce.getBoundingClientRect() : null;
        },
        getComputedStyleValue: ge,
        getRootBoundingClientRect: () => pe().getBoundingClientRect(),
        hasClass: N,
        hasLeadingIcon: () => !!pe().querySelector(".mdc-chip__icon--leading"),
        isRTL: () => getComputedStyle(pe()).getPropertyValue("direction") === "rtl",
        isTrailingActionNavigable: () => j ? j.isNavigable() : !1,
        notifyInteraction: () => qe(pe(), "SMUIChipInteraction", { chipId: e.chip }),
        notifyNavigation: (Ce, Ke) => qe(pe(), "SMUIChipNavigation", { chipId: e.chip, key: Ce, source: Ke }),
        notifyRemoval: (Ce) => qe(pe(), "SMUIChipRemoval", { chipId: e.chip, removedAnnouncement: Ce }),
        notifySelection: (Ce, Ke) => qe(pe(), "SMUIChipSelection", { chipId: e.chip, selected: Ce, shouldIgnore: Ke }),
        notifyTrailingIconInteraction: () => qe(pe(), "SMUIChipTrailingIconInteraction", { chipId: e.chip }),
        notifyEditStart: () => {
        },
        notifyEditFinish: () => {
        },
        removeClass: L,
        removeClassFromLeadingIcon: P,
        removeTrailingActionFocus: () => {
          j && j.removeFocus();
        },
        setPrimaryActionAttr: (Ce, Ke) => {
          D && D.addAttr(Ce, Ke);
        },
        setStyleProperty: G
      }),
      !0
    );
    const re = {
      chipId: e.chip,
      get selected() {
        return s(C);
      },
      focusPrimaryAction: oe,
      focusTrailingAction: Z,
      removeFocus: ue,
      setSelectedFromChipSet: k
    };
    return W && W(re), s(b).init(), () => {
      var Ce;
      te && te(re), (Ce = s(b)) == null || Ce.destroy();
    };
  });
  function N(re) {
    return re in _ ? _[re] : pe().classList.contains(re);
  }
  function y(re) {
    _[re] || (_[re] = !0);
  }
  function L(re) {
    (!(re in _) || _[re]) && (_[re] = !1);
  }
  function J(re) {
    T[re] || (T[re] = !0);
  }
  function P(re) {
    (!(re in T) || T[re]) && (T[re] = !1);
  }
  function G(re, Ce) {
    w[re] != Ce && (Ce === "" || Ce == null ? delete w[re] : w[re] = Ce);
  }
  function ge(re) {
    return re in w ? w[re] : getComputedStyle(pe()).getPropertyValue(re);
  }
  function k(re, Ce) {
    var Ke;
    Q(C, re, !0), (Ke = s(b)) == null || Ke.setSelectedFromChipSet(s(C), Ce);
  }
  function oe() {
    var re;
    (re = s(b)) == null || re.focusPrimaryAction();
  }
  function Z() {
    var re;
    (re = s(b)) == null || re.focusTrailingAction();
  }
  function ue() {
    var re;
    (re = s(b)) == null || re.removeFocus();
  }
  function pe() {
    return x.getElement();
  }
  var Pe = { getElement: pe }, rt = ie(), Xe = X(rt);
  {
    let re = /* @__PURE__ */ ae(() => [
      [
        Kt,
        {
          ripple: f() && !a(),
          unbounded: !1,
          addClass: y,
          removeClass: L,
          addStyle: G
        }
      ],
      ...u()
    ]), Ce = /* @__PURE__ */ ae(() => He({
      "mdc-chip": !0,
      "mdc-chip--selected": s(C),
      "mdc-chip--touch": v(),
      ..._,
      [d()]: !0
    })), Ke = /* @__PURE__ */ ae(() => Object.entries(w).map(([M, V]) => `${M}: ${V};`).concat([h()]).join(" "));
    ur(Xe, I, (M, V) => {
      we(
        V(M, nt(
          {
            get tag() {
              return A();
            },
            get use() {
              return s(re);
            },
            get class() {
              return s(Ce);
            },
            get style() {
              return s(Ke);
            },
            role: "row"
          },
          () => S,
          {
            ontransitionend: (ee) => {
              var Se;
              s(b) && s(b).handleTransitionEnd(ee), (Se = e.ontransitionend) == null || Se.call(e, ee);
            },
            onclick: (ee) => {
              var Se;
              s(b) && s(b).handleClick(), (Se = e.onclick) == null || Se.call(e, ee);
            },
            onkeydown: (ee) => {
              var Se;
              s(b) && s(b).handleKeydown(ee), (Se = e.onkeydown) == null || Se.call(e, ee);
            },
            onfocusin: (ee) => {
              var Se;
              s(b) && s(b).handleFocusIn(ee), (Se = e.onfocusin) == null || Se.call(e, ee);
            },
            onfocusout: (ee) => {
              var Se;
              s(b) && s(b).handleFocusOut(ee), (Se = e.onfocusout) == null || Se.call(e, ee);
            },
            onSMUIChipTrailingActionInteraction: (ee) => {
              var Se;
              s(b) && s(b).handleTrailingActionInteraction(), (Se = e.onSMUIChipTrailingActionInteraction) == null || Se.call(e, ee);
            },
            onSMUIChipTrailingActionNavigation: (ee) => {
              var Se;
              s(b) && s(b).handleTrailingActionNavigation(ee), (Se = e.onSMUIChipTrailingActionNavigation) == null || Se.call(e, ee);
            },
            children: (ee, Se) => {
              var St = lg(), xt = X(St);
              {
                var fn = (Y) => {
                  var De = og();
                  O(Y, De);
                };
                le(xt, (Y) => {
                  f() && !a() && Y(fn);
                });
              }
              var ve = Ee(xt, 2);
              Ae(ve, () => e.children ?? me);
              var de = Ee(ve, 2);
              {
                var K = (Y) => {
                  var De = sg();
                  O(Y, De);
                };
                le(de, (Y) => {
                  v() && Y(K);
                });
              }
              O(ee, St);
            },
            $$slots: { default: !0 }
          }
        )),
        (ee) => x = ee,
        () => x
      );
    });
  }
  O(t, rt);
  var Le = Re(Pe);
  return c(), Le;
}
var cg = /* @__PURE__ */ fe("<div></div>");
function dg(t, e) {
  Oe(e, !0);
  const [n, r] = On(), { MDCChipSetFoundation: i } = sl;
  let a = m(e, "use", 19, () => []), o = m(e, "class", 3, ""), c = m(e, "chips", 27, () => ye([])), l = m(e, "key", 3, (P) => `${P}`), u = m(e, "selected", 15), d = m(e, "nonInteractive", 3, !1), h = m(e, "choice", 3, !1), f = m(e, "filter", 3, !1), v = m(e, "input", 3, !1), p = /* @__PURE__ */ We(e, [
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
  if (h() && typeof u() == "object" && "findIndex" in u())
    throw new Error("Choice chips must not be given multiple selected chips.");
  if (f() && u() !== void 0 && (typeof u() != "object" || !("findIndex" in u())))
    throw new Error("Filter chips must be given an array of selected chips.");
  let g, I = /* @__PURE__ */ be(void 0), A = {}, S = /* @__PURE__ */ new WeakMap(), x = c().map((P) => h() && u() != null && l()(u()) === l()(P) || f() && u() != null && u().findIndex((G) => l()(G) === l()(P)) !== -1);
  ne("SMUI:chips:key", l());
  const b = dt(d());
  Te(() => {
    gn(b, d());
  }), ne("SMUI:chips:nonInteractive", b);
  const _ = dt(h());
  Te(() => {
    gn(_, h());
  }), ne("SMUI:chips:choice", _);
  const T = dt(f());
  Te(() => {
    gn(T, f());
  }), ne("SMUI:chips:filter", T);
  let w = f() ? new Set(u() ?? []) : u();
  Te(() => {
    if (s(I) && h() && w !== u()) {
      const P = w;
      w = u(), u() != null ? s(I).select(l()(u())) : s(I).handleChipSelection({
        chipId: l()(P),
        selected: !1,
        shouldIgnore: !1
      });
    }
  }), Te(() => {
    if (s(I) && f()) {
      const P = new Set(u() ?? []), G = E(w, P), ge = E(P, w);
      if (G.size || ge.size) {
        w = P;
        for (let k of G)
          c().findIndex((oe) => l()(oe) === l()(k)) !== -1 && s(I).handleChipSelection({ chipId: l()(k), selected: !1, shouldIgnore: !1 });
        for (let k of ge)
          s(I).handleChipSelection({ chipId: l()(k), selected: !0, shouldIgnore: !1 });
      }
    }
  });
  function E(P, G) {
    let ge = new Set(P);
    for (let k of G)
      ge.delete(k);
    return ge;
  }
  ne("SMUI:chips:chip:mount", (P) => {
    _e(P.chipId, P);
  }), ne("SMUI:chips:chip:unmount", (P) => {
    q(P.chipId);
  }), at(() => {
    if (Q(
      I,
      new i({
        announceMessage: yp,
        focusChipPrimaryActionAtIndex: (P) => {
          var G;
          (G = B(c()[P])) == null || G.focusPrimaryAction();
        },
        focusChipTrailingActionAtIndex: (P) => {
          var G;
          (G = B(c()[P])) == null || G.focusTrailingAction();
        },
        getChipListCount: () => c().length,
        getIndexOfChipById: (P) => c().findIndex((G) => l()(G) === P),
        hasClass: (P) => F().classList.contains(P),
        isRTL: () => getComputedStyle(F()).getPropertyValue("direction") === "rtl",
        removeChipAtIndex: (P) => {
          if (P >= 0 && P < c().length) {
            const G = l()(c()[P]);
            if (h() && u() != null && l()(u()) === G)
              u(void 0);
            else if (f() && u() != null) {
              const ge = u().findIndex((k) => l()(k) === G);
              ge !== -1 && u().splice(ge, 1);
            }
            c().splice(P, 1);
          }
        },
        removeFocusFromChipAtIndex: (P) => {
          var G;
          (G = B(c()[P])) == null || G.removeFocus();
        },
        selectChipAtIndex: (P, G, ge) => {
          var k;
          if (P >= 0 && P < c().length) {
            if (f()) {
              u() == null && u([]);
              const oe = l()(c()[P]), Z = u().findIndex((ue) => l()(ue) === oe);
              G && Z === -1 ? u().push(c()[P]) : !G && Z !== -1 && u().splice(Z, 1);
            } else h() && (G || l()(u()) === l()(c()[P])) && u(G ? c()[P] : void 0);
            (k = B(c()[P])) == null || k.setSelectedFromChipSet(G, ge);
          }
        }
      }),
      !0
    ), s(I).init(), h() && u() != null)
      s(I).select(l()(u()));
    else if (f() && u() != null && u().length)
      for (const P of u())
        s(I).select(l()(P));
    return () => {
      var P;
      (P = s(I)) == null || P.destroy();
    };
  });
  function C(P) {
    s(I) && s(I).handleChipInteraction({ chipId: l()(P.detail.chipId) });
  }
  function D(P) {
    s(I) && s(I).handleChipSelection({
      chipId: l()(P.detail.chipId),
      selected: P.detail.selected,
      shouldIgnore: P.detail.shouldIgnore
    });
  }
  function j(P) {
    s(I) && s(I).handleChipRemoval({
      chipId: l()(P.detail.chipId),
      removedAnnouncement: P.detail.removedAnnouncement
    });
  }
  function H(P) {
    s(I) && s(I).handleChipNavigation({
      chipId: l()(P.detail.chipId),
      key: P.detail.key,
      source: P.detail.source
    });
  }
  function B(P) {
    return P instanceof Object ? S.get(P) : A[P];
  }
  function _e(P, G) {
    P instanceof Object ? S.set(P, G) : A[P] = G;
  }
  function q(P) {
    P instanceof Object ? S.delete(P) : delete A[P];
  }
  function F() {
    return g;
  }
  var U = { getElement: F }, W = cg(), te = (P) => {
    var G;
    C(P), (G = e.onSMUIChipInteraction) == null || G.call(e, P);
  }, N = (P) => {
    var G;
    D(P), (G = e.onSMUIChipSelection) == null || G.call(e, P);
  }, y = (P) => {
    var G;
    j(P), (G = e.onSMUIChipRemoval) == null || G.call(e, P);
  }, L = (P) => {
    var G;
    H(P), (G = e.onSMUIChipNavigation) == null || G.call(e, P);
  };
  ke(
    W,
    (P) => ({
      class: P,
      role: "grid",
      ...p,
      onSMUIChipInteraction: te,
      onSMUIChipSelection: N,
      onSMUIChipRemoval: y,
      onSMUIChipNavigation: L
    }),
    [
      () => He({
        "mdc-chip-set": !0,
        "smui-chip-set--non-interactive": d(),
        "mdc-chip-set--choice": h(),
        "mdc-chip-set--filter": f(),
        "mdc-chip-set--input": v(),
        [o()]: !0
      })
    ]
  ), ir(W, 23, c, (P) => l()(P), (P, G, ge) => {
    Si(P, {
      key: "SMUI:chips:chip:index",
      get value() {
        return s(ge);
      },
      children: (k, oe) => {
        Si(k, {
          key: "SMUI:chips:chip:initialSelected",
          get value() {
            return x[s(ge)];
          },
          children: (Z, ue) => {
            var pe = ie(), Pe = X(pe);
            Ae(Pe, () => e.chip, () => s(G)), O(Z, pe);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { default: !0 }
    });
  }), we(W, (P) => g = P, () => g), Be(W, (P, G) => z == null ? void 0 : z(P, G), a), O(t, W);
  var J = Re(U);
  return r(), J;
}
var fg = /* @__PURE__ */ cn('<svg class="mdc-chip__checkmark-svg" viewBox="-2 -3 30 30"><path class="mdc-chip__checkmark-path" fill="none" stroke="black" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg>'), hg = /* @__PURE__ */ fe("<span><!></span>");
function vg(t, e) {
  Oe(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = /* @__PURE__ */ We(e, [
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
  var c = { getElement: o }, l = hg();
  ke(l, (f) => ({ class: f, ...i }), [
    () => He({ "mdc-chip__checkmark": !0, [r()]: !0 })
  ]);
  var u = Ie(l);
  {
    var d = (f) => {
      var v = ie(), p = X(v);
      Ae(p, () => e.children ?? me), O(f, v);
    }, h = (f) => {
      var v = fg();
      O(f, v);
    };
    le(u, (f) => {
      e.children ? f(d) : f(h, !1);
    });
  }
  return we(l, (f) => a = f, () => a), Be(l, (f, v) => z == null ? void 0 : z(f, v), n), O(t, l), Re(c);
}
var pg = /* @__PURE__ */ fe("<span><!></span>"), mg = /* @__PURE__ */ fe("<span><span><!></span></span>"), gg = /* @__PURE__ */ fe("<!> <span><!></span>", 1);
function bg(t, e) {
  Oe(e, !0);
  const n = () => Nt(S, "$filter", o), r = () => Nt(A, "$choice", o), i = () => Nt(I, "$nonInteractive", o), a = () => Nt(x, "$isSelected", o), [o, c] = On();
  let l = m(e, "use", 19, () => []), u = m(e, "class", 3, ""), d = m(e, "tabindex", 19, () => se("SMUI:chips:chip:focusable") ? 0 : -1), h = /* @__PURE__ */ We(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "tabindex",
    "children",
    "checkbox"
  ]), f, v, p, g = ye({});
  const I = se("SMUI:chips:nonInteractive"), A = se("SMUI:chips:choice"), S = se("SMUI:chips:filter"), x = se("SMUI:chips:chip:isSelected"), b = /* @__PURE__ */ ae(() => ({
    role: n() ? "checkbox" : r() ? "radio" : "button",
    tabindex: d()
  })), _ = se("SMUI:chips:primary-action:mount"), T = se("SMUI:chips:primary-action:unmount");
  at(() => {
    let y = { focus: C, addAttr: w };
    return _ && _(y), () => {
      T && T(y);
    };
  });
  function w(y, L) {
    g[y] !== L && (g[y] = L);
  }
  function E(y) {
    g.tabindex !== j().getAttribute("tabindex") ? Ro().then(y) : y();
  }
  function C() {
    E(() => {
      p && p.focus();
    });
  }
  function D() {
    return v && v.getElement();
  }
  function j() {
    return f;
  }
  var H = { focus: C, getInput: D, getElement: j }, B = gg(), _e = X(B);
  {
    var q = (y) => {
      {
        let L = /* @__PURE__ */ ae(() => st(h, "checkmark$"));
        we(
          vg(y, nt(
            {
              get children() {
                return e.checkbox;
              }
            },
            () => s(L)
          )),
          (J) => v = J,
          () => v
        );
      }
    };
    le(_e, (y) => {
      n() && y(q);
    });
  }
  var F = Ee(_e, 2);
  ke(F, (y) => ({ role: "gridcell", ...y }), [() => st(h, "container$")]);
  var U = Ie(F);
  {
    var W = (y) => {
      var L = pg();
      ke(L, (P) => ({ class: "mdc-chip__text", ...P }), [() => st(h, "text$")]);
      var J = Ie(L);
      Ae(J, () => e.children ?? me), O(y, L);
    }, te = (y) => {
      var L = mg();
      ke(
        L,
        (G, ge) => ({
          class: G,
          ...n() || r() ? { "aria-selected": a() ? "true" : "false" } : {},
          ...s(b),
          ...g,
          ...ge
        }),
        [
          () => He({ "mdc-chip__primary-action": !0, [u()]: !0 }),
          () => ta(h, ["checkmark$", "container$", "text$"])
        ]
      );
      var J = Ie(L);
      ke(J, (G) => ({ class: "mdc-chip__text", ...G }), [() => st(h, "text$")]);
      var P = Ie(J);
      Ae(P, () => e.children ?? me), we(L, (G) => p = G, () => p), O(y, L);
    };
    le(U, (y) => {
      i() ? y(W) : y(te, !1);
    });
  }
  we(F, (y) => f = y, () => f), Be(F, (y, L) => z == null ? void 0 : z(y, L), l), O(t, B);
  var N = Re(H);
  return c(), N;
}
var yg = /* @__PURE__ */ fe('<span class="mdc-deprecated-chip-trailing-action__touch"></span>'), Ig = /* @__PURE__ */ fe('<button><span class="mdc-deprecated-chip-trailing-action__ripple"></span> <!> <span><!></span></button>');
function _g(t, e) {
  Oe(e, !0);
  const { MDCChipTrailingActionFoundation: n } = sl;
  let r = m(e, "use", 19, () => []), i = m(e, "class", 3, ""), a = m(e, "style", 3, ""), o = m(e, "ripple", 3, !0), c = m(e, "touch", 3, !1), l = m(e, "nonNavigable", 3, !1), u = m(e, "icon$use", 19, () => []), d = m(e, "icon$class", 3, ""), h = /* @__PURE__ */ We(e, [
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
  ]), f, v = /* @__PURE__ */ be(void 0), p = ye({}), g = ye({}), I = ye({});
  const A = se("SMUI:chips:trailing-action:mount"), S = se("SMUI:chips:trailing-action:unmount");
  at(() => {
    Q(
      v,
      new n({
        focus: () => {
          const L = H();
          E(() => {
            L.focus();
          });
        },
        getAttribute: T,
        notifyInteraction: (L) => qe(H(), "SMUIChipTrailingActionInteraction", { trigger: L }),
        notifyNavigation: (L) => qe(H(), "SMUIChipTrailingActionNavigation", { key: L }),
        setAttribute: w
      }),
      !0
    );
    const y = { isNavigable: C, focus: D, removeFocus: j };
    return A && A(y), s(v).init(), () => {
      var L;
      S && S(y), (L = s(v)) == null || L.destroy();
    };
  });
  function x(y) {
    p[y] || (p[y] = !0);
  }
  function b(y) {
    (!(y in p) || p[y]) && (p[y] = !1);
  }
  function _(y, L) {
    g[y] != L && (L === "" || L == null ? delete g[y] : g[y] = L);
  }
  function T(y) {
    return y in I ? I[y] ?? null : H().getAttribute(y);
  }
  function w(y, L) {
    I[y] !== L && (I[y] = L);
  }
  function E(y) {
    I.tabindex !== H().getAttribute("tabindex") ? Ro().then(y) : y();
  }
  function C() {
    if (s(v) == null)
      throw new Error("Instance is undefined.");
    return s(v).isNavigable();
  }
  function D() {
    var y;
    (y = s(v)) == null || y.focus();
  }
  function j() {
    var y;
    (y = s(v)) == null || y.removeFocus();
  }
  function H() {
    return f;
  }
  var B = { isNavigable: C, focus: D, removeFocus: j, getElement: H }, _e = Ig(), q = (y) => {
    var L;
    s(v) && s(v).handleClick(y), (L = e.onclick) == null || L.call(e, y);
  }, F = (y) => {
    var L;
    s(v) && s(v).handleKeydown(y), (L = e.onkeydown) == null || L.call(e, y);
  };
  ke(
    _e,
    (y, L, J) => ({
      type: "button",
      class: y,
      style: L,
      "aria-hidden": l() ? "true" : void 0,
      tabindex: "-1",
      ...I,
      ...J,
      onclick: q,
      onkeydown: F
    }),
    [
      () => He({
        "mdc-deprecated-chip-trailing-action": !0,
        ...p,
        [i()]: !0
      }),
      () => Object.entries(g).map(([y, L]) => `${y}: ${L};`).concat([a()]).join(" "),
      () => ta(h, ["icon$"])
    ]
  );
  var U = Ee(Ie(_e), 2);
  {
    var W = (y) => {
      var L = yg();
      O(y, L);
    };
    le(U, (y) => {
      c() && y(W);
    });
  }
  var te = Ee(U, 2);
  ke(te, (y, L) => ({ class: y, ...L }), [
    () => He({
      "mdc-deprecated-chip-trailing-action__icon": !0,
      [d()]: !0
    }),
    () => st(h, "icon$")
  ]);
  var N = Ie(te);
  return Ae(N, () => e.children ?? me), Be(te, (y, L) => z == null ? void 0 : z(y, L), u), we(_e, (y) => f = y, () => f), Be(_e, (y, L) => Kt == null ? void 0 : Kt(y, L), () => ({
    ripple: o(),
    unbounded: !1,
    addClass: x,
    removeClass: b,
    addStyle: _
  })), Be(_e, (y, L) => z == null ? void 0 : z(y, L), r), O(t, _e), Re(B);
}
const Ft = [];
for (let t = 0; t < 256; ++t)
  Ft.push((t + 256).toString(16).slice(1));
function Eg(t, e = 0) {
  return (Ft[t[e + 0]] + Ft[t[e + 1]] + Ft[t[e + 2]] + Ft[t[e + 3]] + "-" + Ft[t[e + 4]] + Ft[t[e + 5]] + "-" + Ft[t[e + 6]] + Ft[t[e + 7]] + "-" + Ft[t[e + 8]] + Ft[t[e + 9]] + "-" + Ft[t[e + 10]] + Ft[t[e + 11]] + Ft[t[e + 12]] + Ft[t[e + 13]] + Ft[t[e + 14]] + Ft[t[e + 15]]).toLowerCase();
}
let as;
const Ag = new Uint8Array(16);
function Cg() {
  if (!as) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    as = crypto.getRandomValues.bind(crypto);
  }
  return as(Ag);
}
const Sg = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), vu = { randomUUID: Sg };
function br(t, e, n) {
  var i;
  if (vu.randomUUID && !e && !t)
    return vu.randomUUID();
  t = t || {};
  const r = t.random ?? ((i = t.rng) == null ? void 0 : i.call(t)) ?? Cg();
  if (r.length < 16)
    throw new Error("Random bytes length must be >= 16");
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    if (n = n || 0, n < 0 || n + 16 > e.length)
      throw new RangeError(`UUID byte range ${n}:${n + 15} is out of buffer bounds`);
    for (let a = 0; a < 16; ++a)
      e[n + a] = r[a];
    return e;
  }
  return Eg(r);
}
var xg = /* @__PURE__ */ fe('<span class="oscd-icon"><!></span>');
function dr(t, e) {
  var n = xg(), r = Ie(n);
  Ae(r, () => e.children ?? me), O(t, n);
}
var Tg = /* @__PURE__ */ cn('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');
function wg(t, e) {
  let n = m(e, "svgStyles", 3, "");
  dr(t, {
    children: (r, i) => {
      var a = Tg();
      Fe(() => nn(a, n())), O(r, a);
    }
  });
}
var Lg = /* @__PURE__ */ cn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function id(t, e) {
  let n = m(e, "svgStyles", 3, "");
  dr(t, {
    children: (r, i) => {
      var a = Lg();
      Fe(() => nn(a, n())), O(r, a);
    }
  });
}
var Og = /* @__PURE__ */ cn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');
function Rg(t, e) {
  let n = m(e, "svgStyles", 3, "");
  dr(t, {
    children: (r, i) => {
      var a = Og();
      Fe(() => nn(a, n())), O(r, a);
    }
  });
}
var Mg = /* @__PURE__ */ cn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"></path></svg>');
function Dg(t, e) {
  let n = m(e, "svgStyles", 3, "");
  dr(t, {
    children: (r, i) => {
      var a = Mg();
      Fe(() => nn(a, n())), O(r, a);
    }
  });
}
var Pg = /* @__PURE__ */ cn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"></path></svg>');
function Ng(t, e) {
  let n = m(e, "svgStyles", 3, "");
  dr(t, {
    children: (r, i) => {
      var a = Pg();
      Fe(() => nn(a, n())), O(r, a);
    }
  });
}
var Ug = /* @__PURE__ */ cn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"></path></svg>');
function Hg(t, e) {
  let n = m(e, "svgStyles", 3, "");
  dr(t, {
    children: (r, i) => {
      var a = Ug();
      Fe(() => nn(a, n())), O(r, a);
    }
  });
}
var Fg = /* @__PURE__ */ cn('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function Bg(t, e) {
  let n = m(e, "svgStyles", 3, "");
  dr(t, {
    children: (r, i) => {
      var a = Fg();
      Fe(() => nn(a, n())), O(r, a);
    }
  });
}
var kg = /* @__PURE__ */ cn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function Vg(t, e) {
  let n = m(e, "svgStyles", 3, "");
  dr(t, {
    children: (r, i) => {
      var a = kg();
      Fe(() => nn(a, n())), O(r, a);
    }
  });
}
var Gg = /* @__PURE__ */ cn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function jg(t, e) {
  let n = m(e, "svgStyles", 3, "");
  dr(t, {
    children: (r, i) => {
      var a = Gg();
      Fe(() => nn(a, n())), O(r, a);
    }
  });
}
sf();
var qg = /* @__PURE__ */ fe("<!> <!>", 1);
function Wg(t, e) {
  let n = m(e, "title", 3, ""), r = m(e, "closeable", 3, !0), i = m(e, "disabled", 3, !1);
  {
    let a = /* @__PURE__ */ ae(() => i() ? "disabled" : "");
    ug(t, {
      get chip() {
        return n();
      },
      nonInteractive: !0,
      disabled: !0,
      get class() {
        return s(a);
      },
      children: (o, c) => {
        var l = qg(), u = X(l);
        bg(u, {
          children: (f, v) => {
            var p = Xt();
            Fe(() => vt(p, n())), O(f, p);
          },
          $$slots: { default: !0 }
        });
        var d = Ee(u, 2);
        {
          var h = (f) => {
            _g(f, {
              get onclick() {
                return e.callback;
              },
              children: (v, p) => {
                id(v, { svgStyles: "margin-left: 0; fill: unset;" });
              },
              $$slots: { default: !0 }
            });
          };
          le(d, (f) => {
            r() && !i() && f(h);
          });
        }
        O(o, l);
      },
      $$slots: { default: !0 }
    });
  }
}
function Kg(t, e) {
  e(t.target.value);
}
var zg = /* @__PURE__ */ fe('<div class="custom-text-field svelte-1719vm0"><input type="date" id="datetime-picker" class="custom-text-field__input svelte-1719vm0" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-1719vm0"> </label> <span class="custom-line svelte-1719vm0"></span></div>');
function Xg(t, e) {
  Oe(e, !0);
  let n = m(e, "label", 3, ""), r = m(e, "value", 15, "");
  var i = zg(), a = Ie(i);
  a.__change = [Kg, r];
  var o = Ee(a, 2), c = Ie(o);
  Fe(() => vt(c, n())), wa(a, r), O(t, i), Re();
}
Ln(["change"]);
var Yg = /* @__PURE__ */ fe('<div class="filter-box-container"><div class="input-section"><div class="filter-input-controls svelte-xdvqlf"><!> <!> <!> <!> <!></div> <div class="filter-button-controls"><!> <!></div></div> <div class="separator"></div> <div class="chip-section"><!></div></div>');
function pu(t, e) {
  Oe(e, !0);
  let n = m(e, "filterTypes", 19, () => []), r = m(e, "activeFilters", 31, () => ye([])), i = m(e, "useOptionLabelInChipText", 3, !1), a = m(e, "selectedOptionIndex", 31, () => -1), o = m(e, "disabled", 3, !1), c = m(e, "addFilterLabel", 3, "Add Filter"), l = m(e, "selectFilterLabel", 3, "Filter Types"), u = /* @__PURE__ */ be(""), d = /* @__PURE__ */ be(void 0), h = /* @__PURE__ */ ae(() => n().map((S) => ({ value: S.label, label: S.label }))), f = /* @__PURE__ */ ae(() => !s(d) || !s(u)), v = /* @__PURE__ */ ae(() => n().find((S) => S.label === s(d)));
  function p() {
    var x, b;
    if (!s(d) || !s(u)) {
      console.warn("Filter type or input value is empty");
      return;
    }
    if (!s(v)) {
      console.warn("Filter type not found");
      return;
    }
    const S = [
      ...r(),
      {
        id: br(),
        key: s(v).key,
        value: s(u),
        operation: "=",
        text: `${s(d)}: ${i() && ((x = s(v).inputType.options) != null && x.length) ? (b = s(v).inputType.options[a()]) == null ? void 0 : b.label : s(u)}`,
        disabled: !1
      }
    ];
    r(S), A(), I();
  }
  function g(S) {
    setTimeout(
      () => {
        r(r().filter((x) => x.id !== S)), A();
      },
      0
    );
  }
  function I() {
    Q(u, ""), Q(d, void 0);
  }
  function A() {
    const S = r().map((x) => ({ ...x }));
    S.find((x) => x.key === "uuid") ? S.filter((x) => x.key !== "uuid").forEach((x) => {
      x.disabled = !0;
    }) : S.forEach((x) => {
      x.disabled = !1;
    }), r(S);
  }
  $c(t, {
    children: (S, x) => {
      var b = Yg(), _ = Ie(b), T = Ie(_), w = Ie(T);
      su(w, {
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
          Q(d, y, !0);
        }
      });
      var E = Ee(w, 2);
      {
        var C = (y) => {
          Im(y, {
            label: "Input",
            get value() {
              return s(u);
            },
            set value(L) {
              Q(u, L, !0);
            }
          });
        };
        le(E, (y) => {
          var L, J;
          ((J = (L = s(v)) == null ? void 0 : L.inputType) == null ? void 0 : J.type) === "string" && y(C);
        });
      }
      var D = Ee(E, 2);
      {
        var j = (y) => {
          {
            let L = /* @__PURE__ */ ae(() => {
              var J;
              return (J = s(v).inputType) == null ? void 0 : J.options;
            });
            su(y, {
              label: "Input",
              get data() {
                return s(L);
              },
              get value() {
                return s(u);
              },
              set value(J) {
                Q(u, J, !0);
              },
              get selectedOptionIndex() {
                return a();
              },
              set selectedOptionIndex(J) {
                a(J);
              }
            });
          }
        };
        le(D, (y) => {
          var L, J;
          ((J = (L = s(v)) == null ? void 0 : L.inputType) == null ? void 0 : J.type) === "select" && y(j);
        });
      }
      var H = Ee(D, 2);
      {
        var B = (y) => {
          Xg(y, {
            get value() {
              return s(u);
            },
            set value(L) {
              Q(u, L, !0);
            }
          });
        };
        le(H, (y) => {
          var L, J;
          ((J = (L = s(v)) == null ? void 0 : L.inputType) == null ? void 0 : J.type) === "datepicker" && y(B);
        });
      }
      var _e = Ee(H, 2);
      {
        var q = (y) => {
          eb(y, {
            get value() {
              return s(u);
            },
            set value(L) {
              Q(u, L, !0);
            }
          });
        };
        le(_e, (y) => {
          var L, J;
          ((J = (L = s(v)) == null ? void 0 : L.inputType) == null ? void 0 : J.type) === "timepicker" && y(q);
        });
      }
      var F = Ee(T, 2), U = Ie(F);
      rl(U, {
        callback: p,
        get disabled() {
          return s(f);
        },
        children: (y, L) => {
          var J = Xt();
          Fe(() => vt(J, c())), O(y, J);
        },
        $$slots: { default: !0 }
      });
      var W = Ee(U, 2);
      Ae(W, () => e.filterControls ?? me);
      var te = Ee(_, 4), N = Ie(te);
      dg(N, {
        get chips() {
          return r();
        },
        key: (L) => L.id,
        chip: (L, J = me) => {
          Wg(L, {
            get title() {
              return J().text;
            },
            callback: () => g(J().id),
            get disabled() {
              return J().disabled;
            }
          });
        },
        $$slots: { chip: !0 }
      }), O(S, b);
    },
    $$slots: { default: !0 }
  }), Re();
}
var Zg = /* @__PURE__ */ fe('<div class="overlay svelte-14uvd2z"><div class="loading-spinner-container svelte-14uvd2z"><div class="loading-spinner svelte-14uvd2z"></div> <span class="loading-message svelte-14uvd2z"> </span></div></div>'), Qg = /* @__PURE__ */ fe('<div class="svelte-14uvd2z"><!></div>');
function mu(t, e) {
  let n = m(e, "loadingDone", 3, !0), r = m(e, "message", 3, "Loading...");
  var i = Qg(), a = Ie(i);
  {
    var o = (c) => {
      var l = Zg(), u = Ie(l), d = Ee(Ie(u), 2), h = Ie(d);
      Fe(() => vt(h, r())), O(c, l);
    };
    le(a, (c) => {
      n() || c(o);
    });
  }
  O(t, i);
}
function Jg(t, e) {
  e(t.target.value);
}
var $g = /* @__PURE__ */ fe('<div class="custom-text-field svelte-6wdfbb"><input type="datetime-local" id="datetime-picker" class="custom-text-field__input svelte-6wdfbb" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-6wdfbb"> </label> <span class="custom-line svelte-6wdfbb"></span></div>');
function eb(t, e) {
  Oe(e, !0);
  let n = m(e, "label", 3, ""), r = m(e, "value", 15, "");
  var i = $g(), a = Ie(i);
  a.__change = [Jg, r];
  var o = Ee(a, 2), c = Ie(o);
  Fe(() => vt(c, n())), wa(a, r), O(t, i), Re();
}
Ln(["change"]);
var tb = /* @__PURE__ */ fe('<details class="svelte-1sq8fnx"><summary class="svelte-1sq8fnx"> </summary> <div class="expandable-content svelte-1sq8fnx"><!></div></details>');
function ad(t, e) {
  Oe(e, !0);
  let n = m(e, "title", 3, ""), r = m(e, "open", 11, !1);
  $c(t, {
    children: (i, a) => {
      var o = tb(), c = Ie(o), l = Ie(c), u = Ee(c, 2), d = Ie(u);
      Ae(d, () => e.content ?? me), Fe(() => {
        o.open = r(), vt(l, n());
      }), O(i, o);
    },
    $$slots: { default: !0 }
  }), Re();
}
function nb(t, e, n, r) {
  e() && ((t.key === "Enter" || t.key === " ") && (t.preventDefault(), n()), t.key === "Escape" && (t.preventDefault(), r()));
}
var rb = /* @__PURE__ */ fe('<span role="button" tabindex="0" aria-labelledby="tooltip"><!></span>');
function gu(t, e) {
  Oe(e, !0);
  let n = m(e, "content", 3, ""), r = m(e, "side", 3, "top"), i = m(e, "hoverDelay", 3, 0), a = m(e, "transitionDuration", 3, 80), o = m(e, "disabled", 3, !1);
  const c = `tt-${Math.random().toString(36).slice(2)}`;
  let l = /* @__PURE__ */ be(null), u = /* @__PURE__ */ be(null), d = /* @__PURE__ */ be(null), h = /* @__PURE__ */ be(null), f = /* @__PURE__ */ be(!1), v = /* @__PURE__ */ be(null), p = /* @__PURE__ */ be(null);
  function g() {
    !n() || o() || (s(v) && clearTimeout(s(v)), i() > 0 ? Q(v, setTimeout(() => Q(f, !0), i()), !0) : Q(f, !0));
  }
  function I() {
    s(v) && clearTimeout(s(v)), Q(f, !1);
  }
  function A() {
    g();
  }
  function S() {
    I();
  }
  function x() {
    g();
  }
  function b() {
    I();
  }
  function _() {
    if (!s(u) || !s(h) || !s(l) || o()) return;
    const C = s(l).getBoundingClientRect(), D = s(h).getBoundingClientRect();
    let j = 0, H = 0;
    const B = 8;
    switch (r()) {
      case "top":
        j = C.top - D.height - B, H = C.left + C.width / 2 - D.width / 2;
        break;
      case "bottom":
        j = C.bottom + B, H = C.left + C.width / 2 - D.width / 2;
        break;
      case "left":
        j = C.top + C.height / 2 - D.height / 2, H = C.left - D.width - B;
        break;
      case "right":
        j = C.top + C.height / 2 - D.height / 2, H = C.right + B;
        break;
    }
    s(u).style.top = `${j + window.scrollY}px`, s(u).style.left = `${H + window.scrollX}px`;
  }
  function T() {
    var C;
    (C = s(p)) == null || C.disconnect(), Q(p, null), s(u) && s(u).parentNode && s(u).parentNode.removeChild(s(u)), Q(u, null), Q(h, null), Q(d, null), s(v) && clearTimeout(s(v));
  }
  Hn(T), Te(() => {
    if (!(!s(f) || !n() || o())) {
      if (!s(u)) {
        Q(u, document.createElement("div"), !0), s(u).style.position = "absolute", s(u).style.zIndex = "9999", s(u).style.pointerEvents = "none", s(u).style.opacity = "0", s(u).style.transition = `opacity ${a()}ms ease`, s(u).id = c, s(u).setAttribute("role", "tooltip"), document.body.appendChild(s(u)), Q(d, s(u).attachShadow({ mode: "open" }), !0);
        const C = document.createElement("style");
        C.textContent = `
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
      `, s(d).appendChild(C), Q(h, document.createElement("div"), !0), s(d).appendChild(s(h)), Q(
          p,
          new MutationObserver(() => {
            s(f) && _();
          }),
          !0
        ), s(p).observe(document.body, { childList: !0, subtree: !0 });
      }
      s(h) && (s(h).className = `bubble ${r()}`, s(h).innerHTML = n()), s(u) && (s(u).style.opacity = "1", _());
    }
  }), Te(() => {
    if (s(f) || !s(u))
      return;
    s(u).style.opacity = "0";
    const C = s(u), D = setTimeout(
      () => {
        C && C.parentNode && C.parentNode.removeChild(C), s(u) === C && T();
      },
      a()
    );
    return () => clearTimeout(D);
  });
  var w = rb();
  w.__keydown = [nb, n, g, I];
  var E = Ie(w);
  Ae(E, () => e.children ?? me), we(w, (C) => Q(l, C), () => s(l)), Fe(() => {
    Tr(w, "aria-describedby", n() && !o() ? c : void 0), Tr(w, "aria-haspopup", n() ? "true" : void 0), Tr(w, "aria-expanded", n() ? s(f) ? "true" : "false" : void 0);
  }), ba("mouseenter", w, A), ba("mouseleave", w, S), ba("focus", w, x), ba("blur", w, b), O(t, w), Re();
}
Ln(["keydown"]);
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
}, Mn = {
  ARIA_HIDDEN: "aria-hidden",
  ARIA_VALUEMAX: "aria-valuemax",
  ARIA_VALUEMIN: "aria-valuemin",
  ARIA_VALUENOW: "aria-valuenow",
  BUFFER_BAR_SELECTOR: ".mdc-linear-progress__buffer-bar",
  FLEX_BASIS: "flex-basis",
  PRIMARY_BAR_SELECTOR: ".mdc-linear-progress__primary-bar"
}, ma = {
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
var ib = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n) {
      var r = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
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
      this.determinate = !this.adapter.hasClass(vn.INDETERMINATE_CLASS), this.adapter.addClass(vn.ANIMATION_READY_CLASS), this.progress = 0, this.buffer = 1, this.observer = this.adapter.attachResizeObserver(function(r) {
        var i, a;
        if (!n.determinate)
          try {
            for (var o = Rt(r), c = o.next(); !c.done; c = o.next()) {
              var l = c.value;
              l.contentRect && n.calculateAndSetDimensions(l.contentRect.width);
            }
          } catch (u) {
            i = { error: u };
          } finally {
            try {
              c && !c.done && (a = o.return) && a.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
      }), !this.determinate && this.observer && this.calculateAndSetDimensions(this.adapter.getWidth());
    }, e.prototype.setDeterminate = function(n) {
      if (this.determinate = n, this.determinate) {
        this.adapter.removeClass(vn.INDETERMINATE_CLASS), this.adapter.setAttribute(Mn.ARIA_VALUENOW, this.progress.toString()), this.adapter.setAttribute(Mn.ARIA_VALUEMAX, "1"), this.adapter.setAttribute(Mn.ARIA_VALUEMIN, "0"), this.setPrimaryBarProgress(this.progress), this.setBufferBarProgress(this.buffer);
        return;
      }
      this.observer && this.calculateAndSetDimensions(this.adapter.getWidth()), this.adapter.addClass(vn.INDETERMINATE_CLASS), this.adapter.removeAttribute(Mn.ARIA_VALUENOW), this.adapter.removeAttribute(Mn.ARIA_VALUEMAX), this.adapter.removeAttribute(Mn.ARIA_VALUEMIN), this.setPrimaryBarProgress(1), this.setBufferBarProgress(1);
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
      this.adapter.removeClass(vn.CLOSED_CLASS), this.adapter.removeClass(vn.CLOSED_ANIMATION_OFF_CLASS), this.adapter.removeAttribute(Mn.ARIA_HIDDEN);
    }, e.prototype.close = function() {
      this.adapter.addClass(vn.CLOSED_CLASS), this.adapter.setAttribute(Mn.ARIA_HIDDEN, "true");
    }, e.prototype.isClosed = function() {
      return this.adapter.hasClass(vn.CLOSED_CLASS);
    }, e.prototype.handleTransitionEnd = function() {
      this.adapter.hasClass(vn.CLOSED_CLASS) && this.adapter.addClass(vn.CLOSED_ANIMATION_OFF_CLASS);
    }, e.prototype.destroy = function() {
      t.prototype.destroy.call(this), this.observer && this.observer.disconnect();
    }, e.prototype.restartAnimation = function() {
      this.adapter.removeClass(vn.ANIMATION_READY_CLASS), this.adapter.forceLayout(), this.adapter.addClass(vn.ANIMATION_READY_CLASS);
    }, e.prototype.setPrimaryBarProgress = function(n) {
      var r = "scaleX(" + n + ")", i = typeof window < "u" ? Mm(window, "transform") : "transform";
      this.adapter.setPrimaryBarStyle(i, r);
    }, e.prototype.setBufferBarProgress = function(n) {
      var r = n * 100 + "%";
      this.adapter.setBufferBarStyle(Mn.FLEX_BASIS, r);
    }, e.prototype.calculateAndSetDimensions = function(n) {
      var r = n * ma.PRIMARY_HALF, i = n * ma.PRIMARY_FULL, a = n * ma.SECONDARY_QUARTER, o = n * ma.SECONDARY_HALF, c = n * ma.SECONDARY_FULL;
      this.adapter.setStyle("--mdc-linear-progress-primary-half", r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-half-neg", -r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full", i + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full-neg", -i + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter", a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg", -a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half", o + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg", -o + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full", c + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg", -c + "px"), this.restartAnimation();
    }, e;
  }(Ut)
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
var nr = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, bu = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, Yr = {
  ARIA_SELECTED: bu.ARIA_SELECTED,
  ARIA_SORT: bu.ARIA_SORT
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
var ab = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n) {
      return t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
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
      return _c(this, void 0, void 0, function() {
        return $s(this, function(n) {
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
        o !== i && (this.adapter.removeClassNameByHeaderCellIndex(o, nr.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(o, nr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(o, Yr.ARIA_SORT, mn.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(o, mn.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, nr.HEADER_CELL_SORTED);
      var c = this.adapter.getAttributeByHeaderCellIndex(i, Yr.ARIA_SORT), l = mn.NONE;
      c === mn.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, nr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, Yr.ARIA_SORT, mn.DESCENDING), l = mn.DESCENDING) : c === mn.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, nr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, Yr.ARIA_SORT, mn.ASCENDING), l = mn.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, Yr.ARIA_SORT, mn.ASCENDING), l = mn.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, l), this.adapter.notifySortAction({
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
      }), this.adapter.addClass(nr.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(nr.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(n, r) {
      r ? (this.adapter.addClassAtRowIndex(n, nr.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, Yr.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(n, nr.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, Yr.ARIA_SELECTED, "false"));
    }, e;
  }(Ut)
), ob = /* @__PURE__ */ fe('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), sb = /* @__PURE__ */ fe("<div><div><table><!></table></div> <!> <!></div>");
function lb(t, e) {
  Oe(e, !0);
  const n = () => Nt(B, "$progressClosed", r), [r, i] = On(), { closest: a } = Uo;
  let o = m(e, "use", 19, () => []), c = m(e, "class", 3, ""), l = m(e, "stickyHeader", 3, !1), u = m(e, "sortable", 3, !1), d = m(e, "sort", 15, null), h = m(e, "sortDirection", 15, "ascending"), f = m(e, "sortAscendingAriaLabel", 3, "sorted, ascending"), v = m(e, "sortDescendingAriaLabel", 3, "sorted, descending"), p = m(e, "container$use", 19, () => []), g = m(e, "container$class", 3, ""), I = m(e, "table$use", 19, () => []), A = m(e, "table$class", 3, ""), S = /* @__PURE__ */ We(e, [
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
  ]), x, b = /* @__PURE__ */ be(void 0), _, T = /* @__PURE__ */ be(void 0), w = /* @__PURE__ */ be(void 0), E = ye({}), C = /* @__PURE__ */ be(ye({ height: "auto", top: "initial" })), D = se("SMUI:addLayoutListener"), j, H = !1, B = dt(!1), _e = dt(d());
  Te(() => {
    gn(_e, d());
  });
  let q = dt(h());
  Te(() => {
    gn(q, h());
  }), ne("SMUI:checkbox:context", "data-table"), ne("SMUI:linear-progress:context", "data-table"), ne("SMUI:linear-progress:closed", B), ne("SMUI:data-table:sortable", u()), ne("SMUI:data-table:sort", _e), ne("SMUI:data-table:sortDirection", q), ne("SMUI:data-table:sortAscendingAriaLabel", f()), ne("SMUI:data-table:sortDescendingAriaLabel", v()), D && (j = D(P));
  let F;
  Te(() => {
    e.progress && s(b) && F !== n() && (F = n(), n() ? s(b).hideProgress() : s(b).showProgress());
  }), ne("SMUI:checkbox:mount", () => {
    s(b) && H && s(b).layout();
  }), ne("SMUI:data-table:header:mount", (M) => {
    Q(T, M, !0);
  }), ne("SMUI:data-table:header:unmount", () => {
    Q(T, void 0);
  }), ne("SMUI:data-table:body:mount", (M) => {
    Q(w, M, !0);
  }), ne("SMUI:data-table:body:unmount", () => {
    Q(w, void 0);
  }), at(() => (Q(
    b,
    new ab({
      addClass: W,
      removeClass: te,
      getHeaderCellElements: () => {
        var M;
        return ((M = s(T)) == null ? void 0 : M.cells.map((V) => V.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var M;
        return ((M = s(T)) == null ? void 0 : M.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (M, V) => {
        var ee;
        return ((ee = s(T)) == null ? void 0 : ee.orderedCells[M].getAttr(V)) ?? null;
      },
      setAttributeByHeaderCellIndex: (M, V, ee) => {
        var Se;
        (Se = s(T)) == null || Se.orderedCells[M].addAttr(V, ee);
      },
      setClassNameByHeaderCellIndex: (M, V) => {
        var ee;
        (ee = s(T)) == null || ee.orderedCells[M].addClass(V);
      },
      removeClassNameByHeaderCellIndex: (M, V) => {
        var ee;
        (ee = s(T)) == null || ee.orderedCells[M].removeClass(V);
      },
      notifySortAction: (M) => {
        d(M.columnId), h(M.sortValue), qe(G(), "SMUIDataTableSorted", M);
      },
      getTableContainerHeight: () => _.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const M = G().querySelector(".mdc-data-table__header-row");
        if (!M)
          throw new Error("MDCDataTable: Table header element not found.");
        return M.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (M) => {
        Q(C, M, !0);
      },
      addClassAtRowIndex: (M, V) => {
        var ee;
        (ee = s(w)) == null || ee.orderedRows[M].addClass(V);
      },
      getRowCount: () => {
        var M;
        return ((M = s(w)) == null ? void 0 : M.rows.length) ?? 0;
      },
      getRowElements: () => {
        var M;
        return ((M = s(w)) == null ? void 0 : M.rows.map((V) => V.element)) ?? [];
      },
      getRowIdAtIndex: (M) => {
        var V;
        return ((V = s(w)) == null ? void 0 : V.orderedRows[M].rowId) ?? null;
      },
      getRowIndexByChildElement: (M) => {
        var V;
        return ((V = s(w)) == null ? void 0 : V.orderedRows.map((ee) => ee.element).indexOf(a(M, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var M;
        return ((M = s(w)) == null ? void 0 : M.rows.filter((V) => V.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (M) => {
        var ee;
        const V = (ee = s(w)) == null ? void 0 : ee.orderedRows[M].checkbox;
        return V ? V.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var V;
        const M = (V = s(T)) == null ? void 0 : V.checkbox;
        return M ? M.checked : !1;
      },
      isRowsSelectable: () => !!G().querySelector(".mdc-data-table__row-checkbox") || !!G().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (M) => {
        var ee;
        const V = (ee = s(w)) == null ? void 0 : ee.orderedRows[M.rowIndex];
        V && qe(G(), "SMUIDataTableSelectionChanged", {
          row: V.element,
          rowId: V.rowId,
          rowIndex: M.rowIndex,
          selected: M.selected
        });
      },
      notifySelectedAll: () => {
        N(!1), qe(G(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        N(!1), qe(G(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (M) => qe(G(), "SMUIDataTableClickRow", M),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (M, V) => {
        var ee;
        (ee = s(w)) == null || ee.orderedRows[M].removeClass(V);
      },
      setAttributeAtRowIndex: (M, V, ee) => {
        var Se;
        (Se = s(w)) == null || Se.orderedRows[M].addAttr(V, ee);
      },
      setHeaderRowCheckboxChecked: (M) => {
        var ee;
        const V = (ee = s(T)) == null ? void 0 : ee.checkbox;
        V && (V.checked = M);
      },
      setHeaderRowCheckboxIndeterminate: N,
      setRowCheckboxCheckedAtIndex: (M, V) => {
        var Se;
        const ee = (Se = s(w)) == null ? void 0 : Se.orderedRows[M].checkbox;
        ee && (ee.checked = V);
      },
      setSortStatusLabelByHeaderCellIndex: (M, V) => {
      }
    }),
    !0
  ), s(b).init(), s(b).layout(), H = !0, () => {
    var M;
    (M = s(b)) == null || M.destroy();
  })), Hn(() => {
    j && j();
  });
  function U(M) {
    s(b) && s(b).handleRowCheckboxChange(M);
  }
  function W(M) {
    E[M] || (E[M] = !0);
  }
  function te(M) {
    (!(M in E) || E[M]) && (E[M] = !1);
  }
  function N(M) {
    var ee;
    const V = (ee = s(T)) == null ? void 0 : ee.checkbox;
    V && (V.indeterminate = M);
  }
  function y(M) {
    if (!s(b) || !M.detail.target)
      return;
    const V = a(M.detail.target, ".mdc-data-table__header-cell--with-sort");
    V && J(V);
  }
  function L(M) {
    if (!s(b) || !M.detail.target)
      return;
    const V = a(M.detail.target, ".mdc-data-table__row");
    V && s(b) && s(b).handleRowClick({ rowId: M.detail.rowId, row: V });
  }
  function J(M) {
    var St, xt;
    const V = ((St = s(T)) == null ? void 0 : St.orderedCells) ?? [], ee = V.map((fn) => fn.element).indexOf(M);
    if (ee === -1)
      return;
    const Se = V[ee].columnId ?? null;
    (xt = s(b)) == null || xt.handleSortAction({ columnId: Se, columnIndex: ee, headerCell: M });
  }
  function P() {
    var M;
    return (M = s(b)) == null ? void 0 : M.layout();
  }
  function G() {
    return x;
  }
  var ge = { layout: P, getElement: G }, k = sb(), oe = (M) => {
    var V;
    s(b) && s(b).handleHeaderRowCheckboxChange(), (V = e.onSMUIDataTableHeaderCheckboxChange) == null || V.call(e, M);
  }, Z = (M) => {
    var V;
    y(M), (V = e.onSMUIDataTableHeaderClick) == null || V.call(e, M);
  }, ue = (M) => {
    var V;
    L(M), (V = e.onSMUIDataTableRowClick) == null || V.call(e, M);
  }, pe = (M) => {
    var V;
    U(M), (V = e.onSMUIDataTableBodyCheckboxChange) == null || V.call(e, M);
  };
  ke(
    k,
    (M, V) => ({
      class: M,
      ...V,
      onSMUIDataTableHeaderCheckboxChange: oe,
      onSMUIDataTableHeaderClick: Z,
      onSMUIDataTableRowClick: ue,
      onSMUIDataTableBodyCheckboxChange: pe
    }),
    [
      () => He({
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": l(),
        ...E,
        [c()]: !0
      }),
      () => ta(S, ["container$", "table$"])
    ]
  );
  var Pe = Ie(k);
  ke(Pe, (M, V) => ({ class: M, ...V }), [
    () => He({
      "mdc-data-table__table-container": !0,
      [g()]: !0
    }),
    () => st(S, "container$")
  ]);
  var rt = Ie(Pe);
  ke(rt, (M, V) => ({ class: M, ...V }), [
    () => He({ "mdc-data-table__table": !0, [A()]: !0 }),
    () => st(S, "table$")
  ]);
  var Xe = Ie(rt);
  Ae(Xe, () => e.children ?? me), Be(rt, (M, V) => z == null ? void 0 : z(M, V), I), we(Pe, (M) => _ = M, () => _), Be(Pe, (M, V) => z == null ? void 0 : z(M, V), p);
  var Le = Ee(Pe, 2);
  {
    var re = (M) => {
      var V = ob(), ee = Ee(Ie(V), 2);
      Ae(ee, () => e.progress ?? me), Fe((Se) => nn(V, Se), [
        () => Object.entries(s(C)).map(([Se, St]) => `${Se}: ${St};`).join(" ")
      ]), O(M, V);
    };
    le(Le, (M) => {
      e.progress && M(re);
    });
  }
  var Ce = Ee(Le, 2);
  Ae(Ce, () => e.paginate ?? me), we(k, (M) => x = M, () => x), Be(k, (M, V) => z == null ? void 0 : z(M, V), o), O(t, k);
  var Ke = Re(ge);
  return i(), Ke;
}
var ub = /* @__PURE__ */ fe("<thead><!></thead>");
function cb(t, e) {
  Oe(e, !0);
  let n = m(e, "use", 19, () => []), r = /* @__PURE__ */ We(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i, a = /* @__PURE__ */ be(void 0), o = [];
  const c = /* @__PURE__ */ new WeakMap();
  ne("SMUI:data-table:row:header", !0);
  const l = se("SMUI:checkbox:mount");
  ne("SMUI:checkbox:mount", (A) => {
    Q(a, A, !0), l && l(A);
  });
  const u = se("SMUI:checkbox:unmount");
  ne("SMUI:checkbox:unmount", (A) => {
    Q(a, void 0), u && u(A);
  }), ne("SMUI:data-table:cell:mount", (A) => {
    o.push(A), c.set(A.element, A);
  }), ne("SMUI:data-table:cell:unmount", (A) => {
    const S = o.findIndex((x) => x === A);
    S !== -1 && o.splice(S, 1), c.delete(A.element);
  });
  const d = se("SMUI:data-table:header:mount"), h = se("SMUI:data-table:header:unmount");
  at(() => {
    const A = {
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
    return d && d(A), () => {
      h && h(A);
    };
  });
  function f() {
    return [
      ...v().querySelectorAll(".mdc-data-table__header-cell")
    ].map((A) => c.get(A)).filter((A) => A && A._smui_data_table_header_cell_accessor);
  }
  function v() {
    return i;
  }
  var p = { getElement: v }, g = ub();
  ke(g, () => ({ ...r }));
  var I = Ie(g);
  return Ae(I, () => e.children ?? me), we(g, (A) => i = A, () => i), Be(g, (A, S) => z == null ? void 0 : z(A, S), n), O(t, g), Re(p);
}
var db = /* @__PURE__ */ fe("<tbody><!></tbody>");
function fb(t, e) {
  Oe(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = /* @__PURE__ */ We(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "children"
  ]), a, o = [];
  const c = /* @__PURE__ */ new WeakMap();
  ne("SMUI:data-table:row:header", !1), ne("SMUI:data-table:row:mount", (g) => {
    o.push(g), c.set(g.element, g);
  }), ne("SMUI:data-table:row:unmount", (g) => {
    const I = o.findIndex((A) => A === g);
    I !== -1 && o.splice(I, 1), c.delete(g.element);
  });
  const l = se("SMUI:data-table:body:mount"), u = se("SMUI:data-table:body:unmount");
  at(() => {
    const g = {
      get rows() {
        return o;
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
  var f = { getElement: h }, v = db();
  ke(v, (g) => ({ class: g, ...i }), [
    () => He({ "mdc-data-table__content": !0, [r()]: !0 })
  ]);
  var p = Ie(v);
  return Ae(p, () => e.children ?? me), we(v, (g) => a = g, () => a), Be(v, (g, I) => z == null ? void 0 : z(g, I), n), O(t, v), Re(f);
}
let hb = 0;
var vb = /* @__PURE__ */ fe("<tr><!></tr>");
function os(t, e) {
  Oe(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "rowId", 19, () => "SMUI-data-table-row-" + hb++), a = /* @__PURE__ */ We(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "rowId",
    "children"
  ]), o, c = /* @__PURE__ */ be(void 0), l = ye({}), u = ye({}), d = se("SMUI:data-table:row:header");
  const h = se("SMUI:checkbox:mount");
  ne("SMUI:checkbox:mount", (D) => {
    Q(c, D, !0), h && h(D);
  });
  const f = se("SMUI:checkbox:unmount");
  ne("SMUI:checkbox:unmount", (D) => {
    Q(c, void 0), f && f(D);
  });
  const v = se("SMUI:data-table:row:mount"), p = se("SMUI:data-table:row:unmount");
  at(() => {
    const D = d ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return _();
      },
      get checkbox() {
        return s(c);
      },
      get rowId() {
      },
      get selected() {
        return (s(c) && s(c).checked) ?? !1;
      },
      addClass: g,
      removeClass: I,
      getAttr: A,
      addAttr: S
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return _();
      },
      get checkbox() {
        return s(c);
      },
      get rowId() {
        return i();
      },
      get selected() {
        return (s(c) && s(c).checked) ?? !1;
      },
      addClass: g,
      removeClass: I,
      getAttr: A,
      addAttr: S
    };
    return v && v(D), () => {
      p && p(D);
    };
  });
  function g(D) {
    l[D] || (l[D] = !0);
  }
  function I(D) {
    (!(D in l) || l[D]) && (l[D] = !1);
  }
  function A(D) {
    return D in u ? u[D] ?? null : _().getAttribute(D);
  }
  function S(D, j) {
    u[D] !== j && (u[D] = j);
  }
  function x(D) {
    qe(_(), "SMUIDataTableHeaderClick", D);
  }
  function b(D) {
    qe(_(), "SMUIDataTableRowClick", { rowId: i(), target: D.target });
  }
  function _() {
    return o;
  }
  var T = { getElement: _ }, w = vb(), E = (D) => {
    var j;
    d ? x(D) : b(D), (j = e.onclick) == null || j.call(e, D);
  };
  ke(
    w,
    (D) => ({
      class: D,
      "aria-selected": s(c) ? s(c).checked ? "true" : "false" : void 0,
      ...u,
      ...a,
      onclick: E
    }),
    [
      () => He({
        "mdc-data-table__header-row": d,
        "mdc-data-table__row": !d,
        "mdc-data-table__row--selected": !d && s(c) && s(c).checked,
        ...l,
        [r()]: !0
      })
    ]
  );
  var C = Ie(w);
  return Ae(C, () => e.children ?? me), we(w, (D) => o = D, () => o), Be(w, (D, j) => z == null ? void 0 : z(D, j), n), O(t, w), Re(T);
}
let pb = 0;
var mb = /* @__PURE__ */ fe('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), gb = /* @__PURE__ */ fe("<th><!></th>"), bb = /* @__PURE__ */ fe("<td><!></td>");
function Ja(t, e) {
  Oe(e, !0);
  const n = () => Nt(A, "$sort", i), r = () => Nt(S, "$sortDirection", i), [i, a] = On();
  let o = se("SMUI:data-table:row:header"), c = m(e, "use", 19, () => []), l = m(e, "class", 3, ""), u = m(e, "numeric", 3, !1), d = m(e, "checkbox", 3, !1), h = m(e, "columnId", 19, () => o ? "SMUI-data-table-column-" + pb++ : "SMUI-data-table-unused"), f = m(e, "sortable", 19, () => se("SMUI:data-table:sortable")), v = /* @__PURE__ */ We(e, [
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
  ]), p, g = ye({}), I = ye({}), A = se("SMUI:data-table:sort"), S = se("SMUI:data-table:sortDirection"), x = se("SMUI:data-table:sortAscendingAriaLabel"), b = se("SMUI:data-table:sortDescendingAriaLabel");
  f() && (ne("SMUI:label:context", "data-table:sortable-header-cell"), ne("SMUI:icon-button:context", "data-table:sortable-header-cell"), ne("SMUI:icon-button:aria-describedby", h() + "-status-label"));
  const _ = se("SMUI:data-table:cell:mount"), T = se("SMUI:data-table:cell:unmount");
  at(() => {
    const N = o ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return B();
      },
      get columnId() {
        return h();
      },
      addClass: w,
      removeClass: E,
      getAttr: C,
      addAttr: D
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return B();
      },
      get columnId() {
      },
      addClass: w,
      removeClass: E,
      getAttr: C,
      addAttr: D
    };
    return _ && _(N), () => {
      T && T(N);
    };
  });
  function w(N) {
    g[N] || (g[N] = !0);
  }
  function E(N) {
    (!(N in g) || g[N]) && (g[N] = !1);
  }
  function C(N) {
    return N in I ? I[N] ?? null : B().getAttribute(N);
  }
  function D(N, y) {
    I[N] !== y && (I[N] = y);
  }
  function j(N) {
    qe(B(), "SMUIDataTableHeaderCheckboxChange", N);
  }
  function H(N) {
    qe(B(), "SMUIDataTableBodyCheckboxChange", N);
  }
  function B() {
    return p;
  }
  var _e = { getElement: B }, q = ie(), F = X(q);
  {
    var U = (N) => {
      var y = gb(), L = (ge) => {
        var k;
        d() && j(ge), (k = e.onchange) == null || k.call(e, ge);
      };
      ke(
        y,
        (ge) => ({
          class: ge,
          role: "columnheader",
          scope: "col",
          "data-column-id": h(),
          "aria-sort": f() ? n() === h() ? r() : "none" : void 0,
          ...I,
          ...v,
          onchange: L
        }),
        [
          () => He({
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
      var J = Ie(y);
      {
        var P = (ge) => {
          var k = mb(), oe = Ie(k);
          Ae(oe, () => e.children ?? me);
          var Z = Ee(oe, 2), ue = Ie(Z);
          Fe(() => {
            Tr(Z, "id", `${h() ?? ""}-status-label`), vt(ue, n() === h() ? r() === "ascending" ? x : b : "");
          }), O(ge, k);
        }, G = (ge) => {
          var k = ie(), oe = X(k);
          Ae(oe, () => e.children ?? me), O(ge, k);
        };
        le(J, (ge) => {
          f() ? ge(P) : ge(G, !1);
        });
      }
      we(y, (ge) => p = ge, () => p), Be(y, (ge, k) => z == null ? void 0 : z(ge, k), c), O(N, y);
    }, W = (N) => {
      var y = bb(), L = (P) => {
        var G;
        d() && H(P), (G = e.onchange) == null || G.call(e, P);
      };
      ke(
        y,
        (P) => ({
          class: P,
          ...I,
          ...v,
          onchange: L
        }),
        [
          () => He({
            "mdc-data-table__cell": !0,
            "mdc-data-table__cell--numeric": u(),
            "mdc-data-table__cell--checkbox": d(),
            ...g,
            [l()]: !0
          })
        ]
      );
      var J = Ie(y);
      Ae(J, () => e.children ?? me), we(y, (P) => p = P, () => p), Be(y, (P, G) => z == null ? void 0 : z(P, G), c), O(N, y);
    };
    le(F, (N) => {
      o ? N(U) : N(W, !1);
    });
  }
  O(t, q);
  var te = Re(_e);
  return a(), te;
}
Ln(["click"]);
Ln(["click"]);
function Rs(t, e, n) {
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
Rs({}, yb.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
var $a, yu = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
};
$a = {}, Rs($a, yu.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), Rs($a, yu.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list");
const Ib = dt([]);
Ib.subscribe;
Ln([
  "click",
  "keydown",
  "pointerdown",
  "pointerup",
  "pointermove"
]);
Ln(["click"]);
const _b = 4e3;
function Eb() {
  let t = ye({ items: [] }), e = 0;
  const n = (i) => {
    t.items = t.items.filter((a) => a.id !== i);
  }, r = (i, a, o, c = _b) => {
    const l = e++, u = { id: l, summary: a, detail: o, type: i };
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
    success: (i, a, o) => r("success", i, a, o),
    error: (i, a, o) => r("error", i, a, o),
    info: (i, a, o) => r("info", i, a, o),
    warn: (i, a, o) => r("warn", i, a, o),
    remove: n
  };
}
Eb();
Ln(["click"]);
Ln(["click"]);
Ln(["click"]);
var Ab = /* @__PURE__ */ fe('<div><div class="mdc-linear-progress__buffer"><div class="mdc-linear-progress__buffer-bar"></div> <div class="mdc-linear-progress__buffer-dots"></div></div> <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"><span class="mdc-linear-progress__bar-inner"></span></div> <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span class="mdc-linear-progress__bar-inner"></span></div></div>');
function Cb(t, e) {
  Oe(e, !0);
  const [n, r] = On();
  let i = m(e, "use", 19, () => []), a = m(e, "class", 3, ""), o = m(e, "style", 3, ""), c = m(e, "indeterminate", 3, !1), l = m(e, "closed", 3, !1), u = m(e, "progress", 3, 0), d = m(e, "buffer", 3, void 0), h = /* @__PURE__ */ We(e, [
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
  ]), f, v = /* @__PURE__ */ be(void 0), p = ye({}), g = ye({}), I = ye({}), A = ye({}), S = ye({}), x = se("SMUI:linear-progress:context"), b = se("SMUI:linear-progress:closed");
  Te(() => {
    b && gn(b, l());
  }), Te(() => {
    s(v) && s(v).isDeterminate() !== !c() && s(v).setDeterminate(!c());
  }), Te(() => {
    s(v) && s(v).getProgress() !== u() && s(v).setProgress(u());
  }), Te(() => {
    s(v) && (d() == null ? s(v).setBuffer(1) : s(v).setBuffer(d()));
  }), Te(() => {
    s(v) && (l() ? s(v).close() : s(v).open());
  }), at(() => (Q(
    v,
    new ib({
      addClass: T,
      forceLayout: () => {
        B().getBoundingClientRect();
      },
      setBufferBarStyle: j,
      setPrimaryBarStyle: H,
      hasClass: _,
      removeAttribute: C,
      removeClass: w,
      setAttribute: E,
      setStyle: D,
      attachResizeObserver: (y) => {
        const L = window.ResizeObserver;
        if (L) {
          const J = new L(y);
          return J.observe(B()), J;
        }
        return null;
      },
      getWidth: () => B().offsetWidth
    }),
    !0
  ), s(v).init(), () => {
    var y;
    (y = s(v)) == null || y.destroy();
  }));
  function _(y) {
    return y in p ? p[y] : B().classList.contains(y);
  }
  function T(y) {
    p[y] || (p[y] = !0);
  }
  function w(y) {
    (!(y in p) || p[y]) && (p[y] = !1);
  }
  function E(y, L) {
    g[y] !== L && (g[y] = L);
  }
  function C(y) {
    (!(y in g) || g[y] != null) && (g[y] = void 0);
  }
  function D(y, L) {
    I[y] != L && (L === "" || L == null ? delete I[y] : I[y] = L);
  }
  function j(y, L) {
    A[y] != L && (L === "" || L == null ? delete A[y] : A[y] = L);
  }
  function H(y, L) {
    S[y] != L && (L === "" || L == null ? delete S[y] : S[y] = L);
  }
  function B() {
    return f;
  }
  var _e = { getElement: B }, q = Ab(), F = (y) => {
    var L;
    s(v) && s(v).handleTransitionEnd(), (L = e.ontransitionend) == null || L.call(e, y);
  };
  ke(
    q,
    (y, L) => ({
      class: y,
      style: L,
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 1,
      "aria-valuenow": c() ? void 0 : u(),
      ...g,
      ...h,
      ontransitionend: F
    }),
    [
      () => He({
        "mdc-linear-progress": !0,
        "mdc-linear-progress--indeterminate": c(),
        "mdc-linear-progress--closed": l(),
        "mdc-data-table__linear-progress": x === "data-table",
        ...p,
        [a()]: !0
      }),
      () => Object.entries(I).map(([y, L]) => `${y}: ${L};`).concat([o()]).join(" ")
    ]
  );
  var U = Ie(q), W = Ie(U), te = Ee(U, 2);
  we(q, (y) => f = y, () => f), Be(q, (y, L) => z == null ? void 0 : z(y, L), i), Fe(
    (y, L) => {
      nn(W, y), nn(te, L);
    },
    [
      () => Object.entries(A).map(([y, L]) => `${y}: ${L};`).join(" "),
      () => Object.entries(S).map(([y, L]) => `${y}: ${L};`).join(" ")
    ]
  ), O(t, q);
  var N = Re(_e);
  return r(), N;
}
var Sb = /* @__PURE__ */ cn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 4l-8 8h16l-8-8z"></path></svg>'), xb = /* @__PURE__ */ cn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 20l8-8H4l8 8z"></path></svg>'), Tb = /* @__PURE__ */ fe('<div class="custom-cell-container svelte-1mj71p3"><div class="cell-header svelte-1mj71p3"><span class="header-title svelte-1mj71p3"> </span> <!></div></div>'), wb = (t, e) => e(), Lb = /* @__PURE__ */ fe('<input type="text" class="svelte-1mj71p3"/>'), Ob = (t, e) => e(), Rb = /* @__PURE__ */ fe('<input type="number" class="svelte-1mj71p3"/>'), Mb = /* @__PURE__ */ fe("<!> <!>", 1), Db = /* @__PURE__ */ fe("<!> <!>", 1), Pb = /* @__PURE__ */ fe('<div class="cell-actions svelte-1mj71p3"></div>'), Nb = /* @__PURE__ */ fe("<!> <!>", 1);
function Ub(t, e) {
  Oe(e, !0);
  const n = () => Nt(g, "$sortColumn", a), r = () => Nt(I, "$sortDirection", a), i = () => Nt(p, "$filteredData", a), [a, o] = On();
  let c = m(e, "loadingDone", 15, !0), l = m(e, "label", 19, br), u = m(e, "columnDefs", 19, () => []), d = m(e, "rowData", 31, () => ye([])), h = m(e, "rowActions", 19, () => []), f = m(e, "searchInputLabel", 3, "Search"), v = ye({ name: "", color: "", number: "" }), p = dt([]), g = dt(null), I = dt(null), A = /* @__PURE__ */ ae(() => u().some((_) => _.filter));
  e.store.store.subscribe((_) => {
    d([..._]), S();
  });
  function S() {
    let _ = d().filter((T) => u().every((w) => {
      const E = v[w.field], C = w.filterValueGetter ? w.filterValueGetter(T) : T[w.field];
      return E ? w.filterType === "number" ? C == E : C.toString().toLowerCase().includes(E.toLowerCase()) : !0;
    }));
    _ = x(_), p.set(_);
  }
  function x(_) {
    let T, w;
    return g.subscribe((E) => T = E), I.subscribe((E) => w = E), !T || !w ? _ : _.sort((E, C) => {
      let D = E[T], j = C[T];
      return D == null && (D = ""), j == null && (j = ""), w === "asc" ? D.toString().localeCompare(j.toString()) : j.toString().localeCompare(D.toString());
    });
  }
  function b(_) {
    g.update((T) => {
      if (T === _)
        I.update((w) => w === "asc" ? "desc" : w === "desc" ? null : "asc");
      else
        return I.set("asc"), _;
      return _;
    }), S();
  }
  p.set(d()), lb(t, {
    get "table$aria-label"() {
      return l();
    },
    style: "max-width: 100%; width: 100%;",
    progress: (T) => {
      Cb(T, {
        indeterminate: !0,
        "aria-label": "Data is being loaded...",
        get closed() {
          return c();
        },
        set closed(w) {
          c(w);
        }
      });
    },
    children: (T, w) => {
      var E = Nb(), C = X(E);
      cb(C, {
        children: (j, H) => {
          var B = Db(), _e = X(B);
          os(_e, {
            class: "header-title-row",
            children: (U, W) => {
              var te = ie(), N = X(te);
              ir(N, 17, u, Ia, (y, L) => {
                Ja(y, {
                  onclick: () => s(L).sortable && b(s(L).field),
                  get style() {
                    return s(L).headerStyle;
                  },
                  children: (J, P) => {
                    var G = Tb(), ge = Ie(G), k = Ie(ge), oe = Ie(k), Z = Ee(k, 2);
                    {
                      var ue = (pe) => {
                        var Pe = ie(), rt = X(Pe);
                        {
                          var Xe = (Le) => {
                            var re = ie(), Ce = X(re);
                            {
                              var Ke = (V) => {
                                var ee = Sb();
                                O(V, ee);
                              }, M = (V) => {
                                var ee = ie(), Se = X(ee);
                                {
                                  var St = (xt) => {
                                    var fn = xb();
                                    O(xt, fn);
                                  };
                                  le(
                                    Se,
                                    (xt) => {
                                      r() === "desc" && xt(St);
                                    },
                                    !0
                                  );
                                }
                                O(V, ee);
                              };
                              le(Ce, (V) => {
                                r() === "asc" ? V(Ke) : V(M, !1);
                              });
                            }
                            O(Le, re);
                          };
                          le(rt, (Le) => {
                            n() === s(L).field && r() !== null && Le(Xe);
                          });
                        }
                        O(pe, Pe);
                      };
                      le(Z, (pe) => {
                        s(L).sortable && pe(ue);
                      });
                    }
                    Fe(() => {
                      nn(G, `min-width: ${s(L).minWidth ?? 0 ?? ""}`), vt(oe, s(L).headerName);
                    }), O(J, G);
                  },
                  $$slots: { default: !0 }
                });
              }), O(U, te);
            },
            $$slots: { default: !0 }
          });
          var q = Ee(_e, 2);
          {
            var F = (U) => {
              os(U, {
                class: "header-filter-row",
                children: (W, te) => {
                  var N = ie(), y = X(N);
                  ir(y, 17, u, Ia, (L, J) => {
                    Ja(L, {
                      children: (P, G) => {
                        var ge = ie(), k = X(ge);
                        {
                          var oe = (Z) => {
                            var ue = Mb(), pe = X(ue);
                            {
                              var Pe = (Le) => {
                                var re = Lb();
                                re.__input = [wb, S], Fe(() => Tr(re, "placeholder", `${f()} ${s(J).headerName}`)), wa(re, () => v[s(J).field], (Ce) => v[s(J).field] = Ce), O(Le, re);
                              };
                              le(pe, (Le) => {
                                s(J).filterType === "text" && Le(Pe);
                              });
                            }
                            var rt = Ee(pe, 2);
                            {
                              var Xe = (Le) => {
                                var re = Rb();
                                re.__input = [Ob, S], Fe(() => Tr(re, "placeholder", `${f()} ${s(J).headerName}`)), wa(re, () => v[s(J).field], (Ce) => v[s(J).field] = Ce), O(Le, re);
                              };
                              le(rt, (Le) => {
                                s(J).filterType === "number" && Le(Xe);
                              });
                            }
                            O(Z, ue);
                          };
                          le(k, (Z) => {
                            s(J).filter && Z(oe);
                          });
                        }
                        O(P, ge);
                      },
                      $$slots: { default: !0 }
                    });
                  }), O(W, N);
                },
                $$slots: { default: !0 }
              });
            };
            le(q, (U) => {
              s(A) && U(F);
            });
          }
          O(j, B);
        },
        $$slots: { default: !0 }
      });
      var D = Ee(C, 2);
      fb(D, {
        children: (j, H) => {
          var B = ie(), _e = X(B);
          ir(_e, 1, i, Ia, (q, F) => {
            os(q, {
              children: (U, W) => {
                var te = ie(), N = X(te);
                ir(N, 17, u, (y) => y.field, (y, L) => {
                  var J = ie(), P = X(J);
                  {
                    var G = (k) => {
                      Ja(k, {
                        children: (oe, Z) => {
                          var ue = Pb();
                          ir(ue, 21, h, Ia, (pe, Pe) => {
                            var rt = ie(), Xe = X(rt);
                            {
                              var Le = (Ce) => {
                                gu(Ce, {
                                  get content() {
                                    return s(Pe).tooltip;
                                  },
                                  hoverDelay: 500,
                                  children: (Ke, M) => {
                                    {
                                      let V = /* @__PURE__ */ ae(() => s(Pe).disabled(s(F)));
                                      kp(Ke, {
                                        get iconComponent() {
                                          return s(Pe).iconComponent;
                                        },
                                        get iconStyles() {
                                          return s(Pe).iconStyles;
                                        },
                                        callback: () => s(Pe).callback(s(F)),
                                        get disabled() {
                                          return s(V);
                                        }
                                      });
                                    }
                                  },
                                  $$slots: { default: !0 }
                                });
                              }, re = (Ce) => {
                                gu(Ce, {
                                  get content() {
                                    return s(Pe).tooltip;
                                  },
                                  hoverDelay: 500,
                                  children: (Ke, M) => {
                                    {
                                      let V = /* @__PURE__ */ ae(() => s(Pe).disabled(s(F)));
                                      rl(Ke, {
                                        class: "button",
                                        variant: "raised",
                                        callback: () => s(Pe).callback(s(F)),
                                        get disabled() {
                                          return s(V);
                                        },
                                        children: (ee, Se) => {
                                          var St = ie(), xt = X(St);
                                          {
                                            var fn = (de) => {
                                              wg(de, { svgStyles: "margin: unset" });
                                            }, ve = (de) => {
                                              var K = ie(), Y = X(K);
                                              {
                                                var De = (ot) => {
                                                  id(ot, { svgStyles: "margin: unset" });
                                                }, ut = (ot) => {
                                                  var Tt = ie(), Vt = X(Tt);
                                                  {
                                                    var fr = (pt) => {
                                                      Rg(pt, { svgStyles: "margin: unset" });
                                                    }, ft = (pt) => {
                                                      var Ht = ie(), Fn = X(Ht);
                                                      {
                                                        var mi = (Ue) => {
                                                          Dg(Ue, { svgStyles: "margin: unset" });
                                                        }, Bn = (Ue) => {
                                                          var tt = ie(), et = X(tt);
                                                          {
                                                            var Mt = (Qe) => {
                                                              Bg(Qe, { svgStyles: "margin: unset" });
                                                            }, hn = (Qe) => {
                                                              var gt = ie(), wt = X(gt);
                                                              {
                                                                var Je = (Gt) => {
                                                                  Vg(Gt, { svgStyles: "margin: unset" });
                                                                }, Lt = (Gt) => {
                                                                  var Yt = ie(), _t = X(Yt);
                                                                  {
                                                                    var Dt = (bt) => {
                                                                      jg(bt, { svgStyles: "margin: unset" });
                                                                    }, on = (bt) => {
                                                                      Ng(bt, { svgStyles: "margin: unset" });
                                                                    };
                                                                    le(
                                                                      _t,
                                                                      (bt) => {
                                                                        s(Pe).icon === "delete" ? bt(Dt) : bt(on, !1);
                                                                      },
                                                                      !0
                                                                    );
                                                                  }
                                                                  O(Gt, Yt);
                                                                };
                                                                le(
                                                                  wt,
                                                                  (Gt) => {
                                                                    s(Pe).icon === "edit" ? Gt(Je) : Gt(Lt, !1);
                                                                  },
                                                                  !0
                                                                );
                                                              }
                                                              O(Qe, gt);
                                                            };
                                                            le(
                                                              et,
                                                              (Qe) => {
                                                                s(Pe).icon === "remove" ? Qe(Mt) : Qe(hn, !1);
                                                              },
                                                              !0
                                                            );
                                                          }
                                                          O(Ue, tt);
                                                        };
                                                        le(
                                                          Fn,
                                                          (Ue) => {
                                                            s(Pe).icon === "find-in-page" ? Ue(mi) : Ue(Bn, !1);
                                                          },
                                                          !0
                                                        );
                                                      }
                                                      O(pt, Ht);
                                                    };
                                                    le(
                                                      Vt,
                                                      (pt) => {
                                                        s(Pe).icon === "download" ? pt(fr) : pt(ft, !1);
                                                      },
                                                      !0
                                                    );
                                                  }
                                                  O(ot, Tt);
                                                };
                                                le(
                                                  Y,
                                                  (ot) => {
                                                    s(Pe).icon === "cancel" ? ot(De) : ot(ut, !1);
                                                  },
                                                  !0
                                                );
                                              }
                                              O(de, K);
                                            };
                                            le(xt, (de) => {
                                              s(Pe).icon === "add" ? de(fn) : de(ve, !1);
                                            });
                                          }
                                          O(ee, St);
                                        },
                                        $$slots: { default: !0 }
                                      });
                                    }
                                  },
                                  $$slots: { default: !0 }
                                });
                              };
                              le(Xe, (Ce) => {
                                s(Pe).iconComponent ? Ce(Le) : Ce(re, !1);
                              });
                            }
                            O(pe, rt);
                          }), O(oe, ue);
                        },
                        $$slots: { default: !0 }
                      });
                    }, ge = (k) => {
                      Ja(k, {
                        get numeric() {
                          return s(L).numeric;
                        },
                        get style() {
                          return s(L).cellStyle;
                        },
                        children: (oe, Z) => {
                          var ue = ie(), pe = X(ue);
                          {
                            var Pe = (Xe) => {
                              const Le = /* @__PURE__ */ ae(() => s(L).cellRenderer);
                              var re = ie(), Ce = X(re);
                              ur(Ce, () => s(Le), (Ke, M) => {
                                M(Ke, nt(
                                  {
                                    get row() {
                                      return s(F);
                                    },
                                    get value() {
                                      return s(F)[s(L).field];
                                    },
                                    get col() {
                                      return s(L);
                                    }
                                  },
                                  () => s(L).cellRendererProps ?? {}
                                ));
                              }), O(Xe, re);
                            }, rt = (Xe) => {
                              var Le = ie(), re = X(Le);
                              {
                                var Ce = (M) => {
                                  var V = Xt();
                                  Fe((ee) => vt(V, ee), [
                                    () => s(L).valueFormatter(s(F)[s(L).field])
                                  ]), O(M, V);
                                }, Ke = (M) => {
                                  var V = Xt();
                                  Fe(() => vt(V, s(F)[s(L).field] ?? "")), O(M, V);
                                };
                                le(
                                  re,
                                  (M) => {
                                    s(L).valueFormatter ? M(Ce) : M(Ke, !1);
                                  },
                                  !0
                                );
                              }
                              O(Xe, Le);
                            };
                            le(pe, (Xe) => {
                              s(L).cellRenderer ? Xe(Pe) : Xe(rt, !1);
                            });
                          }
                          O(oe, ue);
                        },
                        $$slots: { default: !0 }
                      });
                    };
                    le(P, (k) => {
                      s(L).field === "actions" ? k(G) : k(ge, !1);
                    });
                  }
                  O(y, J);
                }), O(U, te);
              },
              $$slots: { default: !0 }
            });
          }), O(j, B);
        },
        $$slots: { default: !0 }
      }), O(T, E);
    },
    $$slots: { progress: !0, default: !0 }
  }), Re(), o();
}
Ln(["input"]);
function It(t) {
  return typeof t == "function";
}
function ll(t) {
  var e = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = t(e);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var ss = ll(function(t) {
  return function(n) {
    t(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(r, i) {
      return i + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function Ms(t, e) {
  if (t) {
    var n = t.indexOf(e);
    0 <= n && t.splice(n, 1);
  }
}
var Bo = function() {
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
            for (var c = Rt(o), l = c.next(); !l.done; l = c.next()) {
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
          o.remove(this);
      var d = this.initialTeardown;
      if (It(d))
        try {
          d();
        } catch (g) {
          a = g instanceof ss ? g.errors : [g];
        }
      var h = this._finalizers;
      if (h) {
        this._finalizers = null;
        try {
          for (var f = Rt(h), v = f.next(); !v.done; v = f.next()) {
            var p = v.value;
            try {
              Iu(p);
            } catch (g) {
              a = a ?? [], g instanceof ss ? a = Xn(Xn([], Or(a)), Or(g.errors)) : a.push(g);
            }
          }
        } catch (g) {
          r = { error: g };
        } finally {
          try {
            v && !v.done && (i = f.return) && i.call(f);
          } finally {
            if (r) throw r.error;
          }
        }
      }
      if (a)
        throw new ss(a);
    }
  }, t.prototype.add = function(e) {
    var n;
    if (e && e !== this)
      if (this.closed)
        Iu(e);
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
    n === e ? this._parentage = null : Array.isArray(n) && Ms(n, e);
  }, t.prototype.remove = function(e) {
    var n = this._finalizers;
    n && Ms(n, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = function() {
    var e = new t();
    return e.closed = !0, e;
  }(), t;
}();
Bo.EMPTY;
function od(t) {
  return t instanceof Bo || t && "closed" in t && It(t.remove) && It(t.add) && It(t.unsubscribe);
}
function Iu(t) {
  It(t) ? t() : t.unsubscribe();
}
var Hb = {
  Promise: void 0
}, Fb = {
  setTimeout: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setTimeout.apply(void 0, Xn([t, e], Or(n)));
  },
  clearTimeout: function(t) {
    return clearTimeout(t);
  },
  delegate: void 0
};
function sd(t) {
  Fb.setTimeout(function() {
    throw t;
  });
}
function _u() {
}
function Bb(t) {
  t();
}
var ul = function(t) {
  $e(e, t);
  function e(n) {
    var r = t.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, od(n) && n.add(r)) : r.destination = Gb, r;
  }
  return e.create = function(n, r, i) {
    return new Ds(n, r, i);
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
}(Bo), kb = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(e);
      } catch (r) {
        eo(r);
      }
  }, t.prototype.error = function(e) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(e);
      } catch (r) {
        eo(r);
      }
    else
      eo(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (n) {
        eo(n);
      }
  }, t;
}(), Ds = function(t) {
  $e(e, t);
  function e(n, r, i) {
    var a = t.call(this) || this, o;
    return It(n) || !n ? o = {
      next: n ?? void 0,
      error: r ?? void 0,
      complete: i ?? void 0
    } : o = n, a.destination = new kb(o), a;
  }
  return e;
}(ul);
function eo(t) {
  sd(t);
}
function Vb(t) {
  throw t;
}
var Gb = {
  closed: !0,
  next: _u,
  error: Vb,
  complete: _u
}, cl = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function ko(t) {
  return t;
}
function jb(t) {
  return t.length === 0 ? ko : t.length === 1 ? t[0] : function(n) {
    return t.reduce(function(r, i) {
      return i(r);
    }, n);
  };
}
var yn = function() {
  function t(e) {
    e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var n = new t();
    return n.source = this, n.operator = e, n;
  }, t.prototype.subscribe = function(e, n, r) {
    var i = this, a = Wb(e) ? e : new Ds(e, n, r);
    return Bb(function() {
      var o = i, c = o.operator, l = o.source;
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
    return n = Eu(n), new n(function(i, a) {
      var o = new Ds({
        next: function(c) {
          try {
            e(c);
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
  }, t.prototype[cl] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    return jb(e)(this);
  }, t.prototype.toPromise = function(e) {
    var n = this;
    return e = Eu(e), new e(function(r, i) {
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
function Eu(t) {
  var e;
  return (e = t ?? Hb.Promise) !== null && e !== void 0 ? e : Promise;
}
function qb(t) {
  return t && It(t.next) && It(t.error) && It(t.complete);
}
function Wb(t) {
  return t && t instanceof ul || qb(t) && od(t);
}
function Kb(t) {
  return It(t == null ? void 0 : t.lift);
}
function kr(t) {
  return function(e) {
    if (Kb(e))
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
function Rr(t, e, n, r, i) {
  return new zb(t, e, n, r, i);
}
var zb = function(t) {
  $e(e, t);
  function e(n, r, i, a, o, c) {
    var l = t.call(this, n) || this;
    return l.onFinalize = o, l.shouldUnsubscribe = c, l._next = r ? function(u) {
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
}(ul), Xb = {
  now: function() {
    return Date.now();
  }
}, Yb = function(t) {
  $e(e, t);
  function e(n, r) {
    return t.call(this) || this;
  }
  return e.prototype.schedule = function(n, r) {
    return this;
  }, e;
}(Bo), Au = {
  setInterval: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setInterval.apply(void 0, Xn([t, e], Or(n)));
  },
  clearInterval: function(t) {
    return clearInterval(t);
  },
  delegate: void 0
}, Zb = function(t) {
  $e(e, t);
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
    return i === void 0 && (i = 0), Au.setInterval(n.flush.bind(n, this), i);
  }, e.prototype.recycleAsyncId = function(n, r, i) {
    if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === !1)
      return r;
    r != null && Au.clearInterval(r);
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
      this.work = this.state = this.scheduler = null, this.pending = !1, Ms(a, this), r != null && (this.id = this.recycleAsyncId(i, r, null)), this.delay = null, t.prototype.unsubscribe.call(this);
    }
  }, e;
}(Yb), Cu = function() {
  function t(e, n) {
    n === void 0 && (n = t.now), this.schedulerActionCtor = e, this.now = n;
  }
  return t.prototype.schedule = function(e, n, r) {
    return n === void 0 && (n = 0), new this.schedulerActionCtor(this, e).schedule(r, n);
  }, t.now = Xb.now, t;
}(), Qb = function(t) {
  $e(e, t);
  function e(n, r) {
    r === void 0 && (r = Cu.now);
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
}(Cu), ld = new Qb(Zb), Jb = ld, $b = new yn(function(t) {
  return t.complete();
});
function ud(t) {
  return t && It(t.schedule);
}
function cd(t) {
  return t[t.length - 1];
}
function ey(t) {
  return It(cd(t)) ? t.pop() : void 0;
}
function dd(t) {
  return ud(cd(t)) ? t.pop() : void 0;
}
var fd = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function hd(t) {
  return It(t == null ? void 0 : t.then);
}
function vd(t) {
  return It(t[cl]);
}
function pd(t) {
  return Symbol.asyncIterator && It(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function md(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function ty() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var gd = ty();
function bd(t) {
  return It(t == null ? void 0 : t[gd]);
}
function yd(t) {
  return Oh(this, arguments, function() {
    var n, r, i, a;
    return $s(this, function(o) {
      switch (o.label) {
        case 0:
          n = t.getReader(), o.label = 1;
        case 1:
          o.trys.push([1, , 9, 10]), o.label = 2;
        case 2:
          return [4, Ni(n.read())];
        case 3:
          return r = o.sent(), i = r.value, a = r.done, a ? [4, Ni(void 0)] : [3, 5];
        case 4:
          return [2, o.sent()];
        case 5:
          return [4, Ni(i)];
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
function Id(t) {
  return It(t == null ? void 0 : t.getReader);
}
function vi(t) {
  if (t instanceof yn)
    return t;
  if (t != null) {
    if (vd(t))
      return ny(t);
    if (fd(t))
      return ry(t);
    if (hd(t))
      return iy(t);
    if (pd(t))
      return _d(t);
    if (bd(t))
      return ay(t);
    if (Id(t))
      return oy(t);
  }
  throw md(t);
}
function ny(t) {
  return new yn(function(e) {
    var n = t[cl]();
    if (It(n.subscribe))
      return n.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function ry(t) {
  return new yn(function(e) {
    for (var n = 0; n < t.length && !e.closed; n++)
      e.next(t[n]);
    e.complete();
  });
}
function iy(t) {
  return new yn(function(e) {
    t.then(function(n) {
      e.closed || (e.next(n), e.complete());
    }, function(n) {
      return e.error(n);
    }).then(null, sd);
  });
}
function ay(t) {
  return new yn(function(e) {
    var n, r;
    try {
      for (var i = Rt(t), a = i.next(); !a.done; a = i.next()) {
        var o = a.value;
        if (e.next(o), e.closed)
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
function _d(t) {
  return new yn(function(e) {
    sy(t, e).catch(function(n) {
      return e.error(n);
    });
  });
}
function oy(t) {
  return _d(yd(t));
}
function sy(t, e) {
  var n, r, i, a;
  return _c(this, void 0, void 0, function() {
    var o, c;
    return $s(this, function(l) {
      switch (l.label) {
        case 0:
          l.trys.push([0, 5, 6, 11]), n = Rh(t), l.label = 1;
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
function wr(t, e, n, r, i) {
  r === void 0 && (r = 0), i === void 0 && (i = !1);
  var a = e.schedule(function() {
    n(), i ? t.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (t.add(a), !i)
    return a;
}
function Ed(t, e) {
  return e === void 0 && (e = 0), kr(function(n, r) {
    n.subscribe(Rr(r, function(i) {
      return wr(r, t, function() {
        return r.next(i);
      }, e);
    }, function() {
      return wr(r, t, function() {
        return r.complete();
      }, e);
    }, function(i) {
      return wr(r, t, function() {
        return r.error(i);
      }, e);
    }));
  });
}
function Ad(t, e) {
  return e === void 0 && (e = 0), kr(function(n, r) {
    r.add(t.schedule(function() {
      return n.subscribe(r);
    }, e));
  });
}
function ly(t, e) {
  return vi(t).pipe(Ad(e), Ed(e));
}
function uy(t, e) {
  return vi(t).pipe(Ad(e), Ed(e));
}
function cy(t, e) {
  return new yn(function(n) {
    var r = 0;
    return e.schedule(function() {
      r === t.length ? n.complete() : (n.next(t[r++]), n.closed || this.schedule());
    });
  });
}
function dy(t, e) {
  return new yn(function(n) {
    var r;
    return wr(n, e, function() {
      r = t[gd](), wr(n, e, function() {
        var i, a, o;
        try {
          i = r.next(), a = i.value, o = i.done;
        } catch (c) {
          n.error(c);
          return;
        }
        o ? n.complete() : n.next(a);
      }, 0, !0);
    }), function() {
      return It(r == null ? void 0 : r.return) && r.return();
    };
  });
}
function Cd(t, e) {
  if (!t)
    throw new Error("Iterable cannot be null");
  return new yn(function(n) {
    wr(n, e, function() {
      var r = t[Symbol.asyncIterator]();
      wr(n, e, function() {
        r.next().then(function(i) {
          i.done ? n.complete() : n.next(i.value);
        });
      }, 0, !0);
    });
  });
}
function fy(t, e) {
  return Cd(yd(t), e);
}
function hy(t, e) {
  if (t != null) {
    if (vd(t))
      return ly(t, e);
    if (fd(t))
      return cy(t, e);
    if (hd(t))
      return uy(t, e);
    if (pd(t))
      return Cd(t, e);
    if (bd(t))
      return dy(t, e);
    if (Id(t))
      return fy(t, e);
  }
  throw md(t);
}
function Vo(t, e) {
  return e ? hy(t, e) : vi(t);
}
function Ra() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = dd(t);
  return Vo(t, n);
}
var vy = ll(function(t) {
  return function() {
    t(this), this.name = "EmptyError", this.message = "no elements in sequence";
  };
});
function py(t, e) {
  return new Promise(function(n, r) {
    var i = !1, a;
    t.subscribe({
      next: function(o) {
        a = o, i = !0;
      },
      error: r,
      complete: function() {
        i ? n(a) : r(new vy());
      }
    });
  });
}
function my(t) {
  return t instanceof Date && !isNaN(t);
}
function xn(t, e) {
  return kr(function(n, r) {
    var i = 0;
    n.subscribe(Rr(r, function(a) {
      r.next(t.call(e, a, i++));
    }));
  });
}
var gy = Array.isArray;
function by(t, e) {
  return gy(e) ? t.apply(void 0, Xn([], Or(e))) : t(e);
}
function yy(t) {
  return xn(function(e) {
    return by(t, e);
  });
}
var Iy = Array.isArray, _y = Object.getPrototypeOf, Ey = Object.prototype, Ay = Object.keys;
function Cy(t) {
  if (t.length === 1) {
    var e = t[0];
    if (Iy(e))
      return { args: e, keys: null };
    if (Sy(e)) {
      var n = Ay(e);
      return {
        args: n.map(function(r) {
          return e[r];
        }),
        keys: n
      };
    }
  }
  return { args: t, keys: null };
}
function Sy(t) {
  return t && typeof t == "object" && _y(t) === Ey;
}
function xy(t, e) {
  return t.reduce(function(n, r, i) {
    return n[r] = e[i], n;
  }, {});
}
function Ty() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = dd(t), r = ey(t), i = Cy(t), a = i.args, o = i.keys;
  if (a.length === 0)
    return Vo([], n);
  var c = new yn(wy(a, n, o ? function(l) {
    return xy(o, l);
  } : ko));
  return r ? c.pipe(yy(r)) : c;
}
function wy(t, e, n) {
  return n === void 0 && (n = ko), function(r) {
    Su(e, function() {
      for (var i = t.length, a = new Array(i), o = i, c = i, l = function(d) {
        Su(e, function() {
          var h = Vo(t[d], e), f = !1;
          h.subscribe(Rr(r, function(v) {
            a[d] = v, f || (f = !0, c--), c || r.next(n(a.slice()));
          }, function() {
            --o || r.complete();
          }));
        }, r);
      }, u = 0; u < i; u++)
        l(u);
    }, r);
  };
}
function Su(t, e, n) {
  t ? wr(n, t, e) : e();
}
function Ly(t, e, n, r, i, a, o, c) {
  var l = [], u = 0, d = 0, h = !1, f = function() {
    h && !l.length && !u && e.complete();
  }, v = function(g) {
    return u < r ? p(g) : l.push(g);
  }, p = function(g) {
    u++;
    var I = !1;
    vi(n(g, d++)).subscribe(Rr(e, function(A) {
      e.next(A);
    }, function() {
      I = !0;
    }, void 0, function() {
      if (I)
        try {
          u--;
          for (var A = function() {
            var S = l.shift();
            o || p(S);
          }; l.length && u < r; )
            A();
          f();
        } catch (S) {
          e.error(S);
        }
    }));
  };
  return t.subscribe(Rr(e, v, function() {
    h = !0, f();
  })), function() {
  };
}
function mo(t, e, n) {
  return n === void 0 && (n = 1 / 0), It(e) ? mo(function(r, i) {
    return xn(function(a, o) {
      return e(r, a, i, o);
    })(vi(t(r, i)));
  }, n) : (typeof e == "number" && (n = e), kr(function(r, i) {
    return Ly(r, i, t, n);
  }));
}
function Oy(t, e, n) {
  n === void 0 && (n = Jb);
  var r = -1;
  return e != null && (ud(e) ? n = e : r = e), new yn(function(i) {
    var a = my(t) ? +t - n.now() : t;
    a < 0 && (a = 0);
    var o = 0;
    return n.schedule(function() {
      i.closed || (i.next(o++), 0 <= r ? this.schedule(void 0, r) : i.complete());
    }, a);
  });
}
function Ma(t) {
  return kr(function(e, n) {
    var r = null, i = !1, a;
    r = e.subscribe(Rr(n, void 0, void 0, function(o) {
      a = vi(t(o, Ma(t)(e))), r ? (r.unsubscribe(), r = null, a.subscribe(n)) : i = !0;
    })), i && (r.unsubscribe(), r = null, a.subscribe(n));
  });
}
function Ry(t, e) {
  return It(e) ? mo(t, e, 1) : mo(t, 1);
}
function Mr(t) {
  return t <= 0 ? function() {
    return $b;
  } : kr(function(e, n) {
    var r = 0;
    e.subscribe(Rr(n, function(i) {
      ++r <= t && (n.next(i), t <= r && n.complete());
    }));
  });
}
function My(t) {
  return xn(function() {
    return t;
  });
}
function Dy(t, e) {
  return mo(function(n, r) {
    return vi(t(n, r)).pipe(Mr(1), My(n));
  });
}
function Py(t, e) {
  e === void 0 && (e = ld);
  var n = Oy(t, e);
  return Dy(function() {
    return n;
  });
}
function Ny(t) {
  return kr(function(e, n) {
    try {
      e.subscribe(n);
    } finally {
      n.add(t);
    }
  });
}
function Da(t, e, n) {
  var r = It(t) || e || n ? { next: t, error: e, complete: n } : t;
  return r ? kr(function(i, a) {
    var o;
    (o = r.subscribe) === null || o === void 0 || o.call(r);
    var c = !0;
    i.subscribe(Rr(a, function(l) {
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
  }) : ko;
}
function Sd(t) {
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
var Uy = /* @__PURE__ */ function() {
  function t(e, n, r, i) {
    i === void 0 && (i = "download_load"), this.originalEvent = e, this.xhr = n, this.request = r, this.type = i;
    var a = n.status, o = n.responseType;
    this.status = a ?? 0, this.responseType = o ?? "";
    var c = n.getAllResponseHeaders();
    this.responseHeaders = c ? c.split(`
`).reduce(function(d, h) {
      var f = h.indexOf(": ");
      return d[h.slice(0, f)] = h.slice(f + 2), d;
    }, {}) : {}, this.response = Sd(n);
    var l = e.loaded, u = e.total;
    this.loaded = l, this.total = u;
  }
  return t;
}(), go = ll(function(t) {
  return function(n, r, i) {
    this.message = n, this.name = "AjaxError", this.xhr = r, this.request = i, this.status = r.status, this.responseType = r.responseType;
    var a;
    try {
      a = Sd(r);
    } catch {
      a = r.responseText;
    }
    this.response = a;
  };
}), Hy = function() {
  function t(e, n) {
    return go.call(this, "ajax timeout", e, n), this.name = "AjaxTimeoutError", this;
  }
  return t.prototype = Object.create(go.prototype), t;
}();
function Fy(t, e) {
  return pi({ method: "GET", url: t, headers: e });
}
function By(t, e, n) {
  return pi({ method: "POST", url: t, body: e, headers: n });
}
function ky(t, e) {
  return pi({ method: "DELETE", url: t, headers: e });
}
function Vy(t, e, n) {
  return pi({ method: "PUT", url: t, body: e, headers: n });
}
function Gy(t, e, n) {
  return pi({ method: "PATCH", url: t, body: e, headers: n });
}
var jy = xn(function(t) {
  return t.response;
});
function qy(t, e) {
  return jy(pi({
    method: "GET",
    url: t,
    headers: e
  }));
}
var pi = function() {
  var t = function(e) {
    var n = typeof e == "string" ? {
      url: e
    } : e;
    return Ky(n);
  };
  return t.get = Fy, t.post = By, t.delete = ky, t.put = Vy, t.patch = Gy, t.getJSON = qy, t;
}(), Wy = "upload", xu = "download", ls = "loadstart", us = "progress", Tu = "load";
function Ky(t) {
  return new yn(function(e) {
    var n, r, i = ce({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, t), a = i.queryParams, o = i.body, c = i.headers, l = i.url;
    if (!l)
      throw new TypeError("url is required");
    if (a) {
      var u;
      if (l.includes("?")) {
        var d = l.split("?");
        if (2 < d.length)
          throw new TypeError("invalid url");
        u = new URLSearchParams(d[1]), new URLSearchParams(a).forEach(function(U, W) {
          return u.set(W, U);
        }), l = d[0] + "?" + u;
      } else
        u = new URLSearchParams(a), l = l + "?" + u;
    }
    var h = {};
    if (c)
      for (var f in c)
        c.hasOwnProperty(f) && (h[f.toLowerCase()] = c[f]);
    var v = i.crossDomain;
    !v && !("x-requested-with" in h) && (h["x-requested-with"] = "XMLHttpRequest");
    var p = i.withCredentials, g = i.xsrfCookieName, I = i.xsrfHeaderName;
    if ((p || !v) && g && I) {
      var A = (r = (n = document == null ? void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + g + ")=([^;]*)"))) === null || n === void 0 ? void 0 : n.pop()) !== null && r !== void 0 ? r : "";
      A && (h[I] = A);
    }
    var S = zy(o, h), x = ce(ce({}, i), {
      url: l,
      headers: h,
      body: S
    }), b;
    b = t.createXHR ? t.createXHR() : new XMLHttpRequest();
    {
      var _ = t.progressSubscriber, T = t.includeDownloadProgress, w = T === void 0 ? !1 : T, E = t.includeUploadProgress, C = E === void 0 ? !1 : E, D = function(U, W) {
        b.addEventListener(U, function() {
          var te, N = W();
          (te = _ == null ? void 0 : _.error) === null || te === void 0 || te.call(_, N), e.error(N);
        });
      };
      D("timeout", function() {
        return new Hy(b, x);
      }), D("abort", function() {
        return new go("aborted", b, x);
      });
      var j = function(U, W) {
        return new Uy(W, b, x, U + "_" + W.type);
      }, H = function(U, W, te) {
        U.addEventListener(W, function(N) {
          e.next(j(te, N));
        });
      };
      C && [ls, us, Tu].forEach(function(U) {
        return H(b.upload, U, Wy);
      }), _ && [ls, us].forEach(function(U) {
        return b.upload.addEventListener(U, function(W) {
          var te;
          return (te = _ == null ? void 0 : _.next) === null || te === void 0 ? void 0 : te.call(_, W);
        });
      }), w && [ls, us].forEach(function(U) {
        return H(b, U, xu);
      });
      var B = function(U) {
        var W = "ajax error" + (U ? " " + U : "");
        e.error(new go(W, b, x));
      };
      b.addEventListener("error", function(U) {
        var W;
        (W = _ == null ? void 0 : _.error) === null || W === void 0 || W.call(_, U), B();
      }), b.addEventListener(Tu, function(U) {
        var W, te, N = b.status;
        if (N < 400) {
          (W = _ == null ? void 0 : _.complete) === null || W === void 0 || W.call(_);
          var y = void 0;
          try {
            y = j(xu, U);
          } catch (L) {
            e.error(L);
            return;
          }
          e.next(y), e.complete();
        } else
          (te = _ == null ? void 0 : _.error) === null || te === void 0 || te.call(_, U), B(N);
      });
    }
    var _e = x.user, q = x.method, F = x.async;
    _e ? b.open(q, l, F, _e, x.password) : b.open(q, l, F), F && (b.timeout = x.timeout, b.responseType = x.responseType), "withCredentials" in b && (b.withCredentials = x.withCredentials);
    for (var f in h)
      h.hasOwnProperty(f) && b.setRequestHeader(f, h[f]);
    return S ? b.send(S) : b.send(), function() {
      b && b.readyState !== 4 && b.abort();
    };
  });
}
function zy(t, e) {
  var n;
  if (!t || typeof t == "string" || $y(t) || eI(t) || Yy(t) || Zy(t) || Qy(t) || tI(t))
    return t;
  if (Jy(t))
    return t.buffer;
  if (typeof t == "object")
    return e["content-type"] = (n = e["content-type"]) !== null && n !== void 0 ? n : "application/json;charset=utf-8", JSON.stringify(t);
  throw new TypeError("Unknown body type");
}
var Xy = Object.prototype.toString;
function dl(t, e) {
  return Xy.call(t) === "[object " + e + "]";
}
function Yy(t) {
  return dl(t, "ArrayBuffer");
}
function Zy(t) {
  return dl(t, "File");
}
function Qy(t) {
  return dl(t, "Blob");
}
function Jy(t) {
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView(t);
}
function $y(t) {
  return typeof FormData < "u" && t instanceof FormData;
}
function eI(t) {
  return typeof URLSearchParams < "u" && t instanceof URLSearchParams;
}
function tI(t) {
  return typeof ReadableStream < "u" && t instanceof ReadableStream;
}
class nI {
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
const rI = new nI("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), iI = [rI], aI = iI[0].getUrl();
class fl {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? aI;
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
class xd {
  constructor(e = new fl()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (n) => {
      const r = this.clone();
      return r.middleware = r.middleware.concat(n), r;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((r) => ({ pre: r }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((r) => ({ post: r }))), this.createRequestArgs = ({ url: n, query: r, method: i, headers: a, body: o, responseType: c }) => ({
      url: `${this.configuration.basePath}${n}${r && Object.keys(r).length ? `?${oI(r)}` : ""}`,
      method: i,
      headers: a,
      body: o instanceof FormData ? o : JSON.stringify(o),
      responseType: c ?? "json"
    }), this.rxjsRequest = (n) => Ra(n).pipe(
      xn((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      Ry(
        (r) => pi(r).pipe(
          xn((i) => (this.middleware.filter((a) => a.post).forEach((a) => i = a.post(i)), i))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, n) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      xn((r) => {
        const { status: i, response: a } = r;
        if (i >= 200 && i < 300)
          return (n == null ? void 0 : n.response) === "raw" ? r : a;
        throw r;
      })
    );
  }
}
const Wt = (t) => encodeURIComponent(`${t}`), oI = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((r) => `${Wt(e)}=${Wt(r)}`).join("&") : `${Wt(e)}=${Wt(n)}`
).join("&"), ln = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class sI extends xd {
  archiveResource({ id: e, version: n, xAuthor: r, xApprover: i, contentType: a, xFilename: o, body: c }, l) {
    ln(e, "id", "archiveResource"), ln(n, "version", "archiveResource");
    const u = {
      "Content-Type": "application/octet-stream",
      ...r != null ? { "X-author": String(r) } : void 0,
      ...i != null ? { "X-approver": String(i) } : void 0,
      ...a != null ? { "Content-Type": String(a) } : void 0,
      ...o != null ? { "X-filename": String(o) } : void 0
    };
    return this.request({
      url: "/api/archive/referenced-resource/{id}/versions/{version}".replace("{id}", Wt(e)).replace("{version}", Wt(n)),
      method: "POST",
      headers: u,
      body: c
    }, l == null ? void 0 : l.responseOpts);
  }
  archiveSclResource({ id: e, version: n }, r) {
    ln(e, "id", "archiveSclResource"), ln(n, "version", "archiveSclResource");
    const i = {};
    return this.request({
      url: "/api/archive/scl/{id}/versions/{version}".replace("{id}", Wt(e)).replace("{version}", Wt(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  retrieveArchivedResourceHistory({ id: e }, n) {
    ln(e, "id", "retrieveArchivedResourceHistory");
    const r = {};
    return this.request({
      url: "/api/archive/resources/{id}/versions".replace("{id}", Wt(e)),
      method: "GET",
      headers: r
    }, n == null ? void 0 : n.responseOpts);
  }
  searchArchivedResources({ archivedResourcesSearch: e }, n) {
    const r = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/archive/resources/search",
      method: "POST",
      headers: r,
      body: e
    }, n == null ? void 0 : n.responseOpts);
  }
}
class lI extends xd {
  assignResourceToLocation({ locationId: e, uuid: n }, r) {
    ln(e, "locationId", "assignResourceToLocation"), ln(n, "uuid", "assignResourceToLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/assign".replace("{locationId}", Wt(e)).replace("{uuid}", Wt(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  createLocation({ location: e }, n) {
    ln(e, "location", "createLocation");
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
    ln(e, "locationId", "deleteLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", Wt(e)),
      method: "DELETE",
      headers: r
    }, n == null ? void 0 : n.responseOpts);
  }
  getLocation({ locationId: e }, n) {
    ln(e, "locationId", "getLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", Wt(e)),
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
    ln(e, "locationId", "unassignResourceFromLocation"), ln(n, "uuid", "unassignResourceFromLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/unassign".replace("{locationId}", Wt(e)).replace("{uuid}", Wt(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  updateLocation({ locationId: e, location: n }, r) {
    ln(e, "locationId", "updateLocation"), ln(n, "location", "updateLocation");
    const i = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", Wt(e)),
      method: "PUT",
      headers: i,
      body: n
    }, r == null ? void 0 : r.responseOpts);
  }
}
class ga {
  constructor(e, n, r, i, a, o, c, l, u, d, h, f) {
    this._uuid = e, this._name = n, this._note = r, this._author = i, this._approver = a, this._type = o, this._voltage = c, this._modifiedAt = l, this._archivedAt = u, this._contentType = d, this._version = h, this._fields = f;
  }
  get uuid() {
    return this._uuid;
  }
  get filename() {
    return this._name;
  }
  get author() {
    return this._author;
  }
  get version() {
    return this._version;
  }
  get type() {
    return this._type;
  }
  get name() {
    return this._name;
  }
  get note() {
    return this._note;
  }
  get approver() {
    return this._approver;
  }
  get voltage() {
    return this._voltage;
  }
  get modifiedAt() {
    return this._modifiedAt;
  }
  get archivedAt() {
    return this._archivedAt;
  }
  get contentType() {
    return this._contentType;
  }
  get fields() {
    return this._fields;
  }
}
class Qr {
  constructor() {
    this.baseUrl = "/compas-scl-data-service", this.dummySearchResults = [
      new ga(
        br(),
        "Dummy name",
        "My Note",
        "Jane Doe",
        "John Doe",
        "SCD",
        "220",
        this.formatDate((/* @__PURE__ */ new Date()).toISOString()),
        this.formatDate((/* @__PURE__ */ new Date()).toISOString()),
        "application/xml",
        "1.0.0",
        [{ key: "SOURCE_RESOURCE_ID", value: "GUID_FROM_FIELD :)" }]
      ),
      new ga(
        br(),
        "Dummy name 2",
        "My Note 2",
        "Jane Doe",
        "John Doe",
        "SCD",
        "220",
        this.formatDate((/* @__PURE__ */ new Date()).toISOString()),
        this.formatDate((/* @__PURE__ */ new Date()).toISOString()),
        "application/xml",
        "4.1.0",
        [{ key: "SOURCE_RESOURCE_ID", value: "GUID2_FROM_FIELD :)" }]
      )
    ];
  }
  static getInstance() {
    return Qr.instance || (Qr.instance = new Qr()), Qr.instance;
  }
  searchArchive(e) {
    return this.generateApiClient().searchArchivedResources({ archivedResourcesSearch: e }).pipe(
      Mr(1),
      xn((n) => n.resources),
      xn(
        (n) => n.map((r) => this.mapToArchiveSearchResult(r))
      ),
      Ma(() => Ra(this.dummySearchResults)),
      Py(500)
    );
  }
  retrieveArchivedResourceHistory(e) {
    return this.generateApiClient().retrieveArchivedResourceHistory({ id: e }).pipe(
      Mr(1),
      xn((n) => n.versions),
      xn(
        (n) => n.map((r) => this.mapToArchiveSearchResult(r))
      ),
      Ma(() => Ra([
        new ga(
          br(),
          "Dummy name",
          "My Note",
          "Jane Doe",
          "John Doe",
          "SCD",
          "220",
          (/* @__PURE__ */ new Date()).toDateString(),
          (/* @__PURE__ */ new Date()).toDateString(),
          "application/xml",
          "2.0.0",
          [{ key: "SOURCE_RESOURCE_ID", value: br() }]
        ),
        new ga(
          br(),
          "Dummy name",
          "My Note 2",
          "Jane Doe",
          "John Doe",
          "SCD",
          "220",
          (/* @__PURE__ */ new Date()).toDateString(),
          (/* @__PURE__ */ new Date()).toDateString(),
          "application/xml",
          "5.1.0",
          [{ key: "SOURCE_RESOURCE_ID", value: br() }]
        )
      ]))
    );
  }
  findByUUIDAndVersion(e, n, r) {
    return Vo(
      fetch(`${this.baseUrl}/scl/v1/${n}/${e}/${r}`).then((i) => {
        if (i.status >= 200 && i.status < 300)
          return i.blob();
        throw new Error(
          "Unable to download resource: " + i.status + " " + i.statusText
        );
      })
    );
  }
  mapToArchiveSearchResult(e) {
    return new ga(
      e.uuid,
      e.name,
      e.note,
      e.author,
      e.approver,
      e.type,
      e.voltage,
      new Date(e.modifiedAt).toDateString(),
      new Date(e.archivedAt).toDateString(),
      e.contentType,
      e.version,
      e.fields
    );
  }
  formatDate(e) {
    if (!e)
      return "";
    const n = new Date(e);
    return isNaN(n.getTime()) ? "" : Intl.DateTimeFormat("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }).format(n);
  }
  generateApiClient() {
    const e = new fl({
      basePath: this.baseUrl
      // accessToken: authInfo.token,
    });
    return new sI(e);
  }
}
class wi {
  constructor() {
    this.baseUrl = "/compas-scl-data-service";
  }
  static getInstance() {
    return wi.instance || (wi.instance = new wi()), wi.instance;
  }
  listLocations() {
    return this.generateApiClient().getLocations({}).pipe(
      Mr(1),
      Ma(() => Ra([
        {
          uuid: "912e83a1-f84e-4d0d-9432-b5381e2b9e0d",
          name: "Location 1",
          description: "",
          key: ""
        },
        {
          uuid: "b9d01044-7bc7-4430-93b3-86ff093319e6",
          name: "Location 2",
          description: "",
          key: ""
        },
        {
          uuid: "f8435ba3-0c92-4ea3-ade0-5d72458c95c7",
          name: "Location 3",
          description: "",
          key: ""
        }
      ]))
    );
  }
  generateApiClient() {
    const e = new fl({
      basePath: this.baseUrl
      // accessToken: authInfo.token,
    });
    return new lI(e);
  }
}
var Ha;
const Oi = class Oi {
  constructor() {
    Ye(this, Ha, dt(/* @__PURE__ */ new Map()));
  }
  static getInstance() {
    return Oi.instance || (Oi.instance = new Oi()), Oi.instance;
  }
  get store() {
    return $(this, Ha);
  }
  updateData(e) {
    $(this, Ha).set(e);
  }
};
Ha = new WeakMap();
let Ps = Oi;
var Gi;
const Ri = class Ri {
  constructor() {
    Ye(this, Gi, dt(/* @__PURE__ */ new Map()));
  }
  static getInstance() {
    return Ri.instance || (Ri.instance = new Ri()), Ri.instance;
  }
  get store() {
    return $(this, Gi);
  }
  updateData(e) {
    $(this, Gi).set(e);
  }
  getLocationNameByUuid(e) {
    return Mo($(this, Gi)).get(e);
  }
};
Gi = new WeakMap();
let bo = Ri;
var ji;
const Mi = class Mi {
  constructor() {
    Ye(this, ji, dt([]));
  }
  static getInstance() {
    return Mi.instance || (Mi.instance = new Mi()), Mi.instance;
  }
  get store() {
    return $(this, ji);
  }
  get currentData() {
    return Mo($(this, ji));
  }
  updateData(e) {
    $(this, ji).set(e);
  }
};
ji = new WeakMap();
let Ns = Mi;
var qi;
const Di = class Di {
  constructor() {
    Ye(this, qi, dt([]));
  }
  static getInstance() {
    return Di.instance || (Di.instance = new Di()), Di.instance;
  }
  get store() {
    return $(this, qi);
  }
  get currentData() {
    return Mo($(this, qi));
  }
  updateData(e) {
    $(this, qi).set(e);
  }
};
qi = new WeakMap();
let Us = Di;
class Li {
  constructor() {
    this.locationService = wi.getInstance(), this.archiveExplorerLocationStore = bo.getInstance();
  }
  static getInstance() {
    return Li.instance || (Li.instance = new Li()), Li.instance;
  }
  convertFilterToSearchParams(e) {
    const n = {
      uuid: null,
      type: null,
      contentType: null,
      name: null,
      location: null,
      approver: null,
      voltage: null,
      from: null,
      to: null
    };
    return e.filter((r) => !r.disabled).forEach((r) => {
      console.log("KEY:", r.key), r.key === "from" || r.key === "to" ? n[r.key] = new Date(r.value).toISOString() : n[r.key] = r.value;
    }), n;
  }
  createLocationFilter() {
    return py(
      this.locationService.listLocations().pipe(
        Mr(1),
        Da((e) => {
          const n = /* @__PURE__ */ new Map();
          e.forEach((r) => {
            n.set(r.uuid, r.name);
          }), this.archiveExplorerLocationStore.updateData(n);
        }),
        xn((e) => [
          {
            id: 1,
            key: "location",
            label: "Location",
            inputType: {
              id: 2,
              type: "select",
              validatorFn: () => !0,
              options: (e == null ? void 0 : e.map((n) => ({
                value: n.uuid,
                label: n.name
              }))) || []
            },
            allowedOperations: ["="]
          }
        ])
      )
    );
  }
  createArchiveFilter() {
    return [
      {
        id: 2,
        label: "UUID",
        inputType: {
          id: 1,
          type: "string",
          validatorFn: () => !0,
          options: []
        },
        allowedOperations: ["="]
      },
      {
        id: 4,
        label: "Approver",
        inputType: {
          id: 1,
          type: "string",
          validatorFn: () => !0,
          options: []
        },
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
      }
      // {
      //   id: 4,
      //   label: 'Type',
      //   inputType: {
      //     id: 2,
      //     type: 'select',
      //     validatorFn: () => true,
      //     options: [
      //       { value: 'Schütz', label: 'Schütz' },
      //       { value: 'Leittechnik', label: 'Leittechnik' },
      //     ],
      //   },
      //   allowedOperations: ['='],
      // },
      // {
      //   id: 5,
      //   label: 'Voltage',
      //   inputType: {
      //     id: 2,
      //     type: 'select',
      //     validatorFn: () => true,
      //     options: [
      //       { value: '380', label: '380' },
      //       { value: '220', label: '220' },
      //       { value: '110', label: '110' },
      //     ],
      //   },
      //   allowedOperations: ['='],
      // },
    ];
  }
}
function uI(t, e) {
  Oe(e, !0);
  const n = Qr.getInstance(), r = { store: dt([]) };
  let i = /* @__PURE__ */ be(!1);
  const a = [
    {
      headerName: "Type",
      field: "type",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: "Content type",
      field: "contentType",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: "Approver",
      field: "approver",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: "Author",
      field: "author",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: "Modifed",
      field: "modifiedAt",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0,
      valueFormatter: c
    },
    {
      headerName: "Note",
      field: "note",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: "Version",
      field: "version",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: "UUID",
      field: "uuid",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !1,
      cellStyle: "font-weight: bold;",
      headerStyle: "font-weight: bold;"
    },
    {
      headerName: "",
      field: "actions",
      numeric: !1,
      filter: !1,
      filterType: "text",
      minWidth: "100px",
      sortable: !1
    }
  ], o = [
    {
      icon: "download",
      callback: (u) => l(u),
      disabled: () => !1
    }
  ];
  function c(u) {
    return new Date(u).toLocaleDateString();
  }
  at(() => {
    e.searchResult && n.retrieveArchivedResourceHistory(e.searchResult.uuid).pipe(Mr(1), Da((u) => {
      r.store.set(u), Q(i, !0);
    })).subscribe();
  });
  function l(u) {
    var h;
    let d;
    u.fields && u.fields.length && (d = (h = u.fields.find((f) => f.key === "SOURCE_RESOURCE_ID")) == null ? void 0 : h.value), n.findByUUIDAndVersion(d, u.type, u.version).pipe(
      Mr(1),
      Da((f) => {
        const v = window.URL.createObjectURL(f), p = document.createElement("a");
        p.href = v, p.download = u.filename, p.style.display = "none", document.body.appendChild(p), p.click(), document.body.removeChild(p), window.URL.revokeObjectURL(v);
      }),
      Ma((f) => (console.error(f), alert(f), Ra(void 0)))
    ).subscribe();
  }
  Ub(t, {
    get columnDefs() {
      return a;
    },
    get store() {
      return r;
    },
    get loadingDone() {
      return s(i);
    },
    get rowActions() {
      return o;
    }
  }), Re();
}
var cI = /* @__PURE__ */ fe("<span><!></span>"), dI = /* @__PURE__ */ fe("<!> <br/>", 1), fI = /* @__PURE__ */ fe("<i> </i>"), hI = /* @__PURE__ */ fe('<div class="result-container"><div class="content"><!></div></div>');
function vI(t, e) {
  Oe(e, !0);
  let n = m(e, "searchResults", 19, () => []), r = m(e, "noResourcesLabel", 3, "No resources found.");
  var i = hI(), a = Ie(i), o = Ie(a);
  {
    var c = (u) => {
      var d = ie(), h = X(d);
      ir(h, 17, n, (f) => f.uuid, (f, v) => {
        var p = dI(), g = X(p);
        ad(g, {
          get title() {
            return s(v).name;
          },
          content: (A) => {
            var S = cI(), x = Ie(S);
            uI(x, {
              get searchResult() {
                return s(v);
              }
            }), O(A, S);
          },
          $$slots: { content: !0 }
        }), O(f, p);
      }), O(u, d);
    }, l = (u) => {
      var d = fI(), h = Ie(d);
      Fe(() => vt(h, r())), O(u, d);
    };
    le(o, (u) => {
      n().length ? u(c) : u(l, !1);
    });
  }
  O(t, i), Re();
}
op({ en: bp, de: fp });
var pI = /* @__PURE__ */ fe("<!> <!>", 1), mI = /* @__PURE__ */ fe("<span><!></span>"), gI = /* @__PURE__ */ fe('<!> <div class="separator svelte-1gp5xzm"></div>', 1), bI = /* @__PURE__ */ fe('<div class="archive-explorer-container svelte-1gp5xzm" style="display: none;"><!> <div class="search-filter svelte-1gp5xzm"><!> <!></div> <div class="content-container svelte-1gp5xzm"><!></div></div>');
function yI(t, e) {
  Oe(e, !0);
  const n = () => Nt(ap, "$_", r), [r, i] = On(), a = Qr.getInstance(), o = Li.getInstance(), c = Ps.getInstance(), l = Ns.getInstance(), u = Us.getInstance(), d = bo.getInstance();
  let h = /* @__PURE__ */ be(ye([])), f = /* @__PURE__ */ be(ye([])), v = /* @__PURE__ */ be(ye(l.currentData)), p = /* @__PURE__ */ be(ye(u.currentData)), g = /* @__PURE__ */ be(ye(/* @__PURE__ */ new Map())), I = /* @__PURE__ */ be(!1), A = /* @__PURE__ */ be(!0);
  at(() => {
    setTimeout(
      () => {
        Q(A, !1);
      },
      1e3
    );
  });
  let S = /* @__PURE__ */ ae(() => {
    var E;
    return s(v).length && !!((E = s(v)) != null && E.find((C) => C.key === "uuid"));
  });
  at(async () => {
    Q(h, o.createArchiveFilter(), !0), Q(f, await o.createLocationFilter(), !0), Q(I, !0);
  });
  function x() {
    Q(I, !1);
    const E = [], C = /* @__PURE__ */ new Map();
    s(p).forEach((D) => {
      const j = o.convertFilterToSearchParams(s(v));
      j.location = D.value, E.push(a.searchArchive(j).pipe(Mr(1), Da((H) => C.set(D.value, H)), Ny(() => Q(I, !0))));
    }), l.updateData(s(v)), u.updateData(s(p)), Ty(E).pipe(Da(() => {
      c.updateData(C), Q(g, C, !0);
    })).subscribe();
  }
  var b = ie(), _ = X(b);
  {
    var T = (E) => {
      {
        let C = /* @__PURE__ */ ae(() => !s(A));
        mu(E, {
          get loadingDone() {
            return s(C);
          }
        });
      }
    }, w = (E) => {
      var C = bI(), D = Ie(C);
      mu(D, {
        get loadingDone() {
          return s(I);
        }
      });
      var j = Ee(D, 2), H = Ie(j);
      {
        let U = /* @__PURE__ */ ae(() => n()("add_filter")), W = /* @__PURE__ */ ae(() => n()("filter_types"));
        pu(H, {
          get filterTypes() {
            return s(f);
          },
          useOptionLabelInChipText: !0,
          get addFilterLabel() {
            return s(U);
          },
          get selectFilterLabel() {
            return s(W);
          },
          get activeFilters() {
            return s(p);
          },
          set activeFilters(te) {
            Q(p, te, !0);
          }
        });
      }
      var B = Ee(H, 2);
      {
        const U = (y) => {
          {
            let L = /* @__PURE__ */ ae(() => !s(p).length);
            rl(y, {
              variant: "raised",
              callback: x,
              get disabled() {
                return s(L);
              },
              children: (J, P) => {
                var G = pI(), ge = X(G);
                Hg(ge, {});
                var k = Ee(ge, 2);
                wp(k, {
                  children: (oe, Z) => {
                    var ue = Xt();
                    Fe((pe) => vt(ue, pe), [() => n()("search")]), O(oe, ue);
                  },
                  $$slots: { default: !0 }
                }), O(J, G);
              },
              $$slots: { default: !0 }
            });
          }
        };
        let W = /* @__PURE__ */ ae(() => s(S) || !s(p).length), te = /* @__PURE__ */ ae(() => n()("add_filter")), N = /* @__PURE__ */ ae(() => n()("filter_types"));
        pu(B, {
          get disabled() {
            return s(W);
          },
          get filterTypes() {
            return s(h);
          },
          get addFilterLabel() {
            return s(te);
          },
          get selectFilterLabel() {
            return s(N);
          },
          get activeFilters() {
            return s(v);
          },
          set activeFilters(y) {
            Q(v, y, !0);
          },
          filterControls: U,
          $$slots: { filterControls: !0 }
        });
      }
      var _e = Ee(j, 2), q = Ie(_e);
      {
        var F = (U) => {
          var W = ie(), te = X(W);
          ir(te, 18, () => s(g), (N) => N, (N, y, L) => {
            var J = gI(), P = X(J);
            {
              const G = (oe) => {
                var Z = mI(), ue = Ie(Z);
                {
                  let pe = /* @__PURE__ */ ae(() => n()("no_resources_found"));
                  vI(ue, {
                    get searchResults() {
                      return y[1];
                    },
                    get noResourcesLabel() {
                      return s(pe);
                    }
                  });
                }
                O(oe, Z);
              };
              let ge = /* @__PURE__ */ ae(() => s(L) === 0), k = /* @__PURE__ */ ae(() => d.getLocationNameByUuid(y[0]));
              ad(P, {
                get open() {
                  return s(ge);
                },
                get title() {
                  return s(k);
                },
                content: G,
                $$slots: { content: !0 }
              });
            }
            O(N, J);
          }), O(U, W);
        };
        le(q, (U) => {
          s(g).size && U(F);
        });
      }
      O(E, C);
    };
    le(_, (E) => {
      s(A) ? E(T) : E(w, !1);
    });
  }
  O(t, b), Re(), i();
}
const Td = "archive-explorer", wd = "0.0.1";
var II = /* @__PURE__ */ fe('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function _I(t, e) {
  Oe(e, !0);
  let n = m(e, "dev", 3, !1);
  var r = II(), i = X(r);
  {
    var a = (l) => {
      yI(l, {});
    };
    le(i, (l) => {
      (e.doc || n()) && l(a);
    });
  }
  var o = Ee(i, 2), c = Ee(o, 2);
  Fe(() => {
    Ol(o, Td), Ol(c, wd);
  }), O(t, r), Re();
}
var Wi;
class xI extends HTMLElement {
  constructor() {
    super();
    Ye(this, Wi);
    Ne(this, Wi, /* @__PURE__ */ be(ye({ doc: void 0, editCount: void 0 })));
  }
  get props() {
    return s($(this, Wi));
  }
  set props(n) {
    Q($(this, Wi), n, !0);
  }
  connectedCallback() {
    var r;
    this.attachShadow({ mode: "open" }), this.props.doc = this._doc, this.props.editCount = this.editCount, Yf(_I, { target: this.shadowRoot, props: this.props });
    const n = EI();
    (r = this.shadowRoot) == null || r.appendChild(n);
  }
  set doc(n) {
    this._doc = n, this.props.doc = n;
  }
  set editCount(n) {
    this._editCount = n, this.props.editCount = n;
  }
}
Wi = new WeakMap();
function EI() {
  const t = `${Td}-v${wd}-style`, e = AI(), n = document.createElement("link");
  return n.rel = "stylesheet", n.type = "text/css", n.href = e, n.id = t, n;
}
function AI() {
  const t = new URL(import.meta.url), e = t.origin, n = t.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, n, "style.css"].filter(Boolean).join("/");
}
export {
  xI as default
};
