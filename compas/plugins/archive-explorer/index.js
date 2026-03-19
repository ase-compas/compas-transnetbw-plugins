var Nd = Object.defineProperty;
var ll = (t) => {
  throw TypeError(t);
};
var Hd = (t, e, n) => e in t ? Nd(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Si = (t, e, n) => Hd(t, typeof e != "symbol" ? e + "" : e, n), Wo = (t, e, n) => e.has(t) || ll("Cannot " + n);
var re = (t, e, n) => (Wo(t, e, "read from private field"), n ? n.call(t) : e.get(t)), tt = (t, e, n) => e.has(t) ? ll("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), He = (t, e, n, r) => (Wo(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), Wt = (t, e, n) => (Wo(t, e, "access private method"), n);
const Nt = Symbol(), Ud = "http://www.w3.org/1999/xhtml", kd = "http://www.w3.org/2000/svg", Bd = "@attach", xu = !1;
var Lo = Array.isArray, Fd = Array.prototype.indexOf, Ps = Array.from, co = Object.defineProperty, Tr = Object.getOwnPropertyDescriptor, Tu = Object.getOwnPropertyDescriptors, Vd = Object.prototype, Gd = Array.prototype, Ns = Object.getPrototypeOf, ul = Object.isExtensible;
function wi(t) {
  return typeof t == "function";
}
const pe = () => {
};
function jd(t) {
  return t();
}
function fo(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function wu() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
const rn = 2, Hs = 4, Oo = 8, Mr = 16, mr = 32, fi = 64, Us = 128, Tn = 256, ho = 512, Kt = 1024, yn = 2048, Dr = 4096, Bn = 8192, hi = 16384, Ro = 32768, Pr = 65536, cl = 1 << 17, Wd = 1 << 18, Ji = 1 << 19, Lu = 1 << 20, cs = 1 << 21, Mo = 1 << 22, ri = 1 << 23, Yn = Symbol("$state"), Ou = Symbol("legacy props"), qd = Symbol(""), Li = new class extends Error {
  constructor() {
    super(...arguments);
    Si(this, "name", "StaleReactionError");
    Si(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function ks(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function zd() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Xd(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Kd() {
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
function Ru(t) {
  return t === this.v;
}
function Bs(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Mu(t) {
  return !Bs(t, this.v);
}
let $i = !1, of = !1;
function sf() {
  $i = !0;
}
let lt = null;
function Gi(t) {
  lt = t;
}
function me(t) {
  return (
    /** @type {T} */
    Du().get(t)
  );
}
function oe(t, e) {
  return Du().set(t, e), e;
}
function Ce(t, e = !1, n) {
  lt = {
    p: lt,
    c: null,
    e: null,
    s: t,
    x: null,
    l: $i && !e ? { s: null, u: null, $: [] } : null
  };
}
function xe(t) {
  var e = (
    /** @type {ComponentContext} */
    lt
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      Qu(r);
  }
  return t !== void 0 && (e.x = t), lt = e.p, t ?? /** @type {T} */
  {};
}
function Pa() {
  return !$i || lt !== null && lt.l === null;
}
function Du(t) {
  return lt === null && ks(), lt.c ?? (lt.c = new Map(lf(lt) || void 0));
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
function Pu() {
  var t = Zr;
  Zr = [], fo(t);
}
function hr(t) {
  if (Zr.length === 0 && !Ia) {
    var e = Zr;
    queueMicrotask(() => {
      e === Zr && Pu();
    });
  }
  Zr.push(t);
}
function uf() {
  for (; Zr.length > 0; )
    Pu();
}
const cf = /* @__PURE__ */ new WeakMap();
function Nu(t) {
  var e = je;
  if (e === null)
    return Ge.f |= ri, t;
  if (e.f & Ro)
    ji(t, e);
  else {
    if (!(e.f & Us))
      throw !e.parent && t instanceof Error && Hu(t), t;
    e.b.error(t);
  }
}
function ji(t, e) {
  for (; e !== null; ) {
    if (e.f & Us)
      try {
        e.b.error(t);
        return;
      } catch (n) {
        t = n;
      }
    e = e.parent;
  }
  throw t instanceof Error && Hu(t), t;
}
function Hu(t) {
  const e = cf.get(t);
  e && (co(t, "message", {
    value: e.message
  }), co(t, "stack", {
    value: e.stack
  }));
}
const qa = /* @__PURE__ */ new Set();
let st = null, ro = null, Ft = null, ds = /* @__PURE__ */ new Set(), Kn = [], Do = null, fs = !1, Ia = !1;
var Hi, Ui, Jr, Ra, ki, Bi, $r, Fi, Ma, Da, wn, hs, io, vs;
const xo = class xo {
  constructor() {
    tt(this, wn);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    Si(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    tt(this, Hi, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    tt(this, Ui, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    tt(this, Jr, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    tt(this, Ra, null);
    /**
     * Async effects inside a newly-created `<svelte:boundary>`
     * — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    tt(this, ki, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    tt(this, Bi, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    tt(this, $r, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    tt(this, Fi, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    tt(this, Ma, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    tt(this, Da, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    Si(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var a;
    Kn = [], ro = null, this.apply();
    for (const o of e)
      Wt(this, wn, hs).call(this, o);
    if (re(this, Jr) === 0) {
      var n = Ft;
      Wt(this, wn, vs).call(this);
      var r = re(this, Bi), i = re(this, $r);
      He(this, Bi, []), He(this, $r, []), He(this, Fi, []), ro = this, st = null, Ft = n, dl(r), dl(i), ro = null, (a = re(this, Ra)) == null || a.resolve();
    } else
      Wt(this, wn, io).call(this, re(this, Bi)), Wt(this, wn, io).call(this, re(this, $r)), Wt(this, wn, io).call(this, re(this, Fi));
    Ft = null;
    for (const o of re(this, ki))
      Aa(o);
    He(this, ki, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    re(this, Hi).has(e) || re(this, Hi).set(e, n), this.current.set(e, e.v), Ft == null || Ft.set(e, e.v);
  }
  activate() {
    st = this;
  }
  deactivate() {
    st = null, Ft = null;
  }
  flush() {
    if (Kn.length > 0) {
      if (this.activate(), Uu(), st !== null && st !== this)
        return;
    } else re(this, Jr) === 0 && Wt(this, wn, vs).call(this);
    this.deactivate();
    for (const e of ds)
      if (ds.delete(e), e(), st !== null)
        break;
  }
  increment() {
    He(this, Jr, re(this, Jr) + 1);
  }
  decrement() {
    He(this, Jr, re(this, Jr) - 1);
    for (const e of re(this, Ma))
      en(e, yn), si(e);
    for (const e of re(this, Da))
      en(e, Dr), si(e);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    re(this, Ui).add(e);
  }
  settled() {
    return (re(this, Ra) ?? He(this, Ra, wu())).promise;
  }
  static ensure() {
    if (st === null) {
      const e = st = new xo();
      qa.add(st), Ia || xo.enqueue(() => {
        st === e && e.flush();
      });
    }
    return st;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    hr(e);
  }
  apply() {
  }
};
Hi = new WeakMap(), Ui = new WeakMap(), Jr = new WeakMap(), Ra = new WeakMap(), ki = new WeakMap(), Bi = new WeakMap(), $r = new WeakMap(), Fi = new WeakMap(), Ma = new WeakMap(), Da = new WeakMap(), wn = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
hs = function(e) {
  var l;
  e.f ^= Kt;
  for (var n = e.first; n !== null; ) {
    var r = n.f, i = (r & (mr | fi)) !== 0, a = i && (r & Kt) !== 0, o = a || (r & Bn) !== 0 || this.skipped_effects.has(n);
    if (!o && n.fn !== null) {
      i ? n.f ^= Kt : r & Hs ? re(this, $r).push(n) : r & Kt || (r & Mo && ((l = n.b) != null && l.is_pending()) ? re(this, ki).push(n) : Ho(n) && (n.f & Mr && re(this, Fi).push(n), Aa(n)));
      var c = n.first;
      if (c !== null) {
        n = c;
        continue;
      }
    }
    var u = n.parent;
    for (n = n.next; n === null && u !== null; )
      n = u.next, u = u.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
io = function(e) {
  for (const n of e)
    (n.f & yn ? re(this, Ma) : re(this, Da)).push(n), en(n, Kt);
  e.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
vs = function() {
  var e;
  for (const n of re(this, Ui))
    n();
  if (re(this, Ui).clear(), qa.size > 1) {
    re(this, Hi).clear();
    let n = !0;
    for (const r of qa) {
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
          ku(o, a);
        if (Kn.length > 0) {
          st = r, r.apply();
          for (const o of Kn)
            Wt(e = r, wn, hs).call(e, o);
          Kn = [], r.deactivate();
        }
      }
    }
    st = null;
  }
  qa.delete(this);
};
let fr = xo;
function df(t) {
  var e = Ia;
  Ia = !0;
  try {
    for (var n; ; ) {
      if (uf(), Kn.length === 0 && (st == null || st.flush(), Kn.length === 0))
        return Do = null, /** @type {T} */
        n;
      Uu();
    }
  } finally {
    Ia = e;
  }
}
function Uu() {
  var t = Di;
  fs = !0;
  try {
    var e = 0;
    for (ml(!0); Kn.length > 0; ) {
      var n = fr.ensure();
      if (e++ > 1e3) {
        var r, i;
        ff();
      }
      n.process(Kn), wr.clear();
    }
  } finally {
    fs = !1, ml(t), Do = null;
  }
}
function ff() {
  try {
    Zd();
  } catch (t) {
    ji(t, Do);
  }
}
let ur = null;
function dl(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if (!(r.f & (hi | Bn)) && Ho(r) && (ur = [], Aa(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? tc(r) : r.fn = null), (ur == null ? void 0 : ur.length) > 0)) {
        wr.clear();
        for (const i of ur)
          Aa(i);
        ur = [];
      }
    }
    ur = null;
  }
}
function ku(t, e) {
  if (t.reactions !== null)
    for (const n of t.reactions) {
      const r = n.f;
      r & rn ? ku(
        /** @type {Derived} */
        n,
        e
      ) : r & (Mo | Mr) && Bu(n, e) && (en(n, yn), si(
        /** @type {Effect} */
        n
      ));
    }
}
function Bu(t, e) {
  if (t.deps !== null) {
    for (const n of t.deps)
      if (e.includes(n) || n.f & rn && Bu(
        /** @type {Derived} */
        n,
        e
      ))
        return !0;
  }
  return !1;
}
function si(t) {
  for (var e = Do = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (fs && e === je && n & Mr)
      return;
    if (n & (fi | mr)) {
      if (!(n & Kt)) return;
      e.f ^= Kt;
    }
  }
  Kn.push(e);
}
function hf(t) {
  let e = 0, n = li(0), r;
  return () => {
    Lf() && (s(n), Ua(() => (e === 0 && (r = Fn(() => t(() => Ea(n)))), e += 1, () => {
      hr(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, Ea(n));
      });
    })));
  };
}
var vf = Pr | Ji | Us;
function mf(t, e, n) {
  new gf(t, e, n);
}
var Hn, An, Ds, qn, ei, zn, Cn, dn, Xn, Er, ti, Sr, ni, Ar, To, wo, nn, pf, bf, ao, oo, ms;
class gf {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    tt(this, nn);
    /** @type {Boundary | null} */
    Si(this, "parent");
    tt(this, Hn, !1);
    /** @type {TemplateNode} */
    tt(this, An);
    /** @type {TemplateNode | null} */
    tt(this, Ds, null);
    /** @type {BoundaryProps} */
    tt(this, qn);
    /** @type {((anchor: Node) => void)} */
    tt(this, ei);
    /** @type {Effect} */
    tt(this, zn);
    /** @type {Effect | null} */
    tt(this, Cn, null);
    /** @type {Effect | null} */
    tt(this, dn, null);
    /** @type {Effect | null} */
    tt(this, Xn, null);
    /** @type {DocumentFragment | null} */
    tt(this, Er, null);
    tt(this, ti, 0);
    tt(this, Sr, 0);
    tt(this, ni, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    tt(this, Ar, null);
    tt(this, To, () => {
      re(this, Ar) && Wi(re(this, Ar), re(this, ti));
    });
    tt(this, wo, hf(() => (He(this, Ar, li(re(this, ti))), () => {
      He(this, Ar, null);
    })));
    He(this, An, e), He(this, qn, n), He(this, ei, r), this.parent = /** @type {Effect} */
    je.b, He(this, Hn, !!re(this, qn).pending), He(this, zn, Hr(() => {
      je.b = this;
      {
        try {
          He(this, Cn, qt(() => r(re(this, An))));
        } catch (i) {
          this.error(i);
        }
        re(this, Sr) > 0 ? Wt(this, nn, oo).call(this) : He(this, Hn, !1);
      }
    }, vf));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return re(this, Hn) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!re(this, qn).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    Wt(this, nn, ms).call(this, e), He(this, ti, re(this, ti) + e), ds.add(re(this, To));
  }
  get_effect_pending() {
    return re(this, wo).call(this), s(
      /** @type {Source<number>} */
      re(this, Ar)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = re(this, qn).onerror;
    let r = re(this, qn).failed;
    if (re(this, ni) || !n && !r)
      throw e;
    re(this, Cn) && (Vt(re(this, Cn)), He(this, Cn, null)), re(this, dn) && (Vt(re(this, dn)), He(this, dn, null)), re(this, Xn) && (Vt(re(this, Xn)), He(this, Xn, null));
    var i = !1, a = !1;
    const o = () => {
      if (i) {
        rf();
        return;
      }
      i = !0, a && tf(), fr.ensure(), He(this, ti, 0), re(this, Xn) !== null && Lr(re(this, Xn), () => {
        He(this, Xn, null);
      }), He(this, Hn, this.has_pending_snippet()), He(this, Cn, Wt(this, nn, ao).call(this, () => (He(this, ni, !1), qt(() => re(this, ei).call(this, re(this, An)))))), re(this, Sr) > 0 ? Wt(this, nn, oo).call(this) : He(this, Hn, !1);
    };
    var c = Ge;
    try {
      hn(null), a = !0, n == null || n(e, o), a = !1;
    } catch (u) {
      ji(u, re(this, zn) && re(this, zn).parent);
    } finally {
      hn(c);
    }
    r && hr(() => {
      He(this, Xn, Wt(this, nn, ao).call(this, () => {
        He(this, ni, !0);
        try {
          return qt(() => {
            r(
              re(this, An),
              () => e,
              () => o
            );
          });
        } catch (u) {
          return ji(
            u,
            /** @type {Effect} */
            re(this, zn).parent
          ), null;
        } finally {
          He(this, ni, !1);
        }
      }));
    });
  }
}
Hn = new WeakMap(), An = new WeakMap(), Ds = new WeakMap(), qn = new WeakMap(), ei = new WeakMap(), zn = new WeakMap(), Cn = new WeakMap(), dn = new WeakMap(), Xn = new WeakMap(), Er = new WeakMap(), ti = new WeakMap(), Sr = new WeakMap(), ni = new WeakMap(), Ar = new WeakMap(), To = new WeakMap(), wo = new WeakMap(), nn = new WeakSet(), pf = function() {
  try {
    He(this, Cn, qt(() => re(this, ei).call(this, re(this, An))));
  } catch (e) {
    this.error(e);
  }
  He(this, Hn, !1);
}, bf = function() {
  const e = re(this, qn).pending;
  e && (He(this, dn, qt(() => e(re(this, An)))), fr.enqueue(() => {
    He(this, Cn, Wt(this, nn, ao).call(this, () => (fr.ensure(), qt(() => re(this, ei).call(this, re(this, An)))))), re(this, Sr) > 0 ? Wt(this, nn, oo).call(this) : (Lr(
      /** @type {Effect} */
      re(this, dn),
      () => {
        He(this, dn, null);
      }
    ), He(this, Hn, !1));
  }));
}, /**
 * @param {() => Effect | null} fn
 */
ao = function(e) {
  var n = je, r = Ge, i = lt;
  Jn(re(this, zn)), hn(re(this, zn)), Gi(re(this, zn).ctx);
  try {
    return e();
  } catch (a) {
    return Nu(a), null;
  } finally {
    Jn(n), hn(r), Gi(i);
  }
}, oo = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    re(this, qn).pending
  );
  re(this, Cn) !== null && (He(this, Er, document.createDocumentFragment()), _f(re(this, Cn), re(this, Er))), re(this, dn) === null && He(this, dn, qt(() => e(re(this, An))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
ms = function(e) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && Wt(n = this.parent, nn, ms).call(n, e);
    return;
  }
  He(this, Sr, re(this, Sr) + e), re(this, Sr) === 0 && (He(this, Hn, !1), re(this, dn) && Lr(re(this, dn), () => {
    He(this, dn, null);
  }), re(this, Er) && (re(this, An).before(re(this, Er)), He(this, Er, null)), hr(() => {
    fr.ensure().flush();
  }));
};
function _f(t, e) {
  for (var n = t.nodes_start, r = t.nodes_end; n !== null; ) {
    var i = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ha(n)
    );
    e.append(n), n = i;
  }
}
function Fu(t, e, n) {
  const r = Pa() ? Na : Fs;
  if (e.length === 0) {
    n(t.map(r));
    return;
  }
  var i = st, a = (
    /** @type {Effect} */
    je
  ), o = yf();
  Promise.all(e.map((c) => /* @__PURE__ */ If(c))).then((c) => {
    o();
    try {
      n([...t.map(r), ...c]);
    } catch (u) {
      a.f & hi || ji(u, a);
    }
    i == null || i.deactivate(), gs();
  }).catch((c) => {
    ji(c, a);
  });
}
function yf() {
  var t = je, e = Ge, n = lt, r = st;
  return function() {
    Jn(t), hn(e), Gi(n), r == null || r.activate();
  };
}
function gs() {
  Jn(null), hn(null), Gi(null);
}
// @__NO_SIDE_EFFECTS__
function Na(t) {
  var e = rn | yn, n = Ge !== null && Ge.f & rn ? (
    /** @type {Derived} */
    Ge
  ) : null;
  return je === null || n !== null && n.f & Tn ? e |= Tn : je.f |= Ji, {
    ctx: lt,
    deps: null,
    effects: null,
    equals: Ru,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Nt
    ),
    wv: 0,
    parent: n ?? je,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function If(t, e) {
  let n = (
    /** @type {Effect | null} */
    je
  );
  n === null && zd();
  var r = (
    /** @type {Boundary} */
    n.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = li(
    /** @type {V} */
    Nt
  ), o = !Ge, c = /* @__PURE__ */ new Map();
  return Rf(() => {
    var f;
    var u = wu();
    i = u.promise;
    try {
      Promise.resolve(t()).then(u.resolve, u.reject).then(gs);
    } catch (m) {
      u.reject(m), gs();
    }
    var l = (
      /** @type {Batch} */
      st
    ), d = r.is_pending();
    o && (r.update_pending_count(1), d || (l.increment(), (f = c.get(l)) == null || f.reject(Li), c.delete(l), c.set(l, u)));
    const h = (m, v = void 0) => {
      if (d || l.activate(), v)
        v !== Li && (a.f |= ri, Wi(a, v));
      else {
        a.f & ri && (a.f ^= ri), Wi(a, m);
        for (const [g, b] of c) {
          if (c.delete(g), g === l) break;
          b.reject(Li);
        }
      }
      o && (r.update_pending_count(-1), d || l.decrement());
    };
    u.promise.then(h, (m) => h(null, m || "unknown"));
  }), Po(() => {
    for (const u of c.values())
      u.reject(Li);
  }), new Promise((u) => {
    function l(d) {
      function h() {
        d === i ? u(a) : l(i);
      }
      d.then(h, h);
    }
    l(i);
  });
}
// @__NO_SIDE_EFFECTS__
function ge(t) {
  const e = /* @__PURE__ */ Na(t);
  return ic(e), e;
}
// @__NO_SIDE_EFFECTS__
function Fs(t) {
  const e = /* @__PURE__ */ Na(t);
  return e.equals = Mu, e;
}
function Vu(t) {
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
function Ef(t) {
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
function Vs(t) {
  var e, n = je;
  Jn(Ef(t));
  try {
    Vu(t), e = lc(t);
  } finally {
    Jn(n);
  }
  return e;
}
function Gu(t) {
  var e = Vs(t);
  if (t.equals(e) || (t.v = e, t.wv = oc()), !mi)
    if (Ft !== null)
      Ft.set(t, t.v);
    else {
      var n = (Cr || t.f & Tn) && t.deps !== null ? Dr : Kt;
      en(t, n);
    }
}
const wr = /* @__PURE__ */ new Map();
function li(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Ru,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function ve(t, e) {
  const n = li(t);
  return ic(n), n;
}
// @__NO_SIDE_EFFECTS__
function ju(t, e = !1, n = !0) {
  var i;
  const r = li(t);
  return e || (r.equals = Mu), $i && n && lt !== null && lt.l !== null && ((i = lt.l).s ?? (i.s = [])).push(r), r;
}
function z(t, e, n = !1) {
  Ge !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Un || Ge.f & cl) && Pa() && Ge.f & (rn | Mr | Mo | cl) && !($t != null && $t.includes(t)) && ef();
  let r = n ? ce(e) : e;
  return Wi(t, r);
}
function Wi(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    mi ? wr.set(t, e) : wr.set(t, n), t.v = e;
    var r = fr.ensure();
    r.capture(t, n), t.f & rn && (t.f & yn && Vs(
      /** @type {Derived} */
      t
    ), en(t, t.f & Tn ? Dr : Kt)), t.wv = oc(), Wu(t, yn), Pa() && je !== null && je.f & Kt && !(je.f & (mr | fi)) && (Sn === null ? Pf([t]) : Sn.push(t));
  }
  return e;
}
function Ea(t) {
  z(t, t.v + 1);
}
function Wu(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = Pa(), i = n.length, a = 0; a < i; a++) {
      var o = n[a], c = o.f;
      if (!(!r && o === je)) {
        var u = (c & yn) === 0;
        u && en(o, e), c & rn ? Wu(
          /** @type {Derived} */
          o,
          Dr
        ) : u && (c & Mr && ur !== null && ur.push(
          /** @type {Effect} */
          o
        ), si(
          /** @type {Effect} */
          o
        ));
      }
    }
}
function ce(t) {
  if (typeof t != "object" || t === null || Yn in t)
    return t;
  const e = Ns(t);
  if (e !== Vd && e !== Gd)
    return t;
  var n = /* @__PURE__ */ new Map(), r = Lo(t), i = /* @__PURE__ */ ve(0), a = ii, o = (c) => {
    if (ii === a)
      return c();
    var u = Ge, l = ii;
    hn(null), pl(a);
    var d = c();
    return hn(u), pl(l), d;
  };
  return r && n.set("length", /* @__PURE__ */ ve(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(c, u, l) {
        (!("value" in l) || l.configurable === !1 || l.enumerable === !1 || l.writable === !1) && Jd();
        var d = n.get(u);
        return d === void 0 ? d = o(() => {
          var h = /* @__PURE__ */ ve(l.value);
          return n.set(u, h), h;
        }) : z(d, l.value, !0), !0;
      },
      deleteProperty(c, u) {
        var l = n.get(u);
        if (l === void 0) {
          if (u in c) {
            const d = o(() => /* @__PURE__ */ ve(Nt));
            n.set(u, d), Ea(i);
          }
        } else
          z(l, Nt), Ea(i);
        return !0;
      },
      get(c, u, l) {
        var m;
        if (u === Yn)
          return t;
        var d = n.get(u), h = u in c;
        if (d === void 0 && (!h || (m = Tr(c, u)) != null && m.writable) && (d = o(() => {
          var v = ce(h ? c[u] : Nt), g = /* @__PURE__ */ ve(v);
          return g;
        }), n.set(u, d)), d !== void 0) {
          var f = s(d);
          return f === Nt ? void 0 : f;
        }
        return Reflect.get(c, u, l);
      },
      getOwnPropertyDescriptor(c, u) {
        var l = Reflect.getOwnPropertyDescriptor(c, u);
        if (l && "value" in l) {
          var d = n.get(u);
          d && (l.value = s(d));
        } else if (l === void 0) {
          var h = n.get(u), f = h == null ? void 0 : h.v;
          if (h !== void 0 && f !== Nt)
            return {
              enumerable: !0,
              configurable: !0,
              value: f,
              writable: !0
            };
        }
        return l;
      },
      has(c, u) {
        var f;
        if (u === Yn)
          return !0;
        var l = n.get(u), d = l !== void 0 && l.v !== Nt || Reflect.has(c, u);
        if (l !== void 0 || je !== null && (!d || (f = Tr(c, u)) != null && f.writable)) {
          l === void 0 && (l = o(() => {
            var m = d ? ce(c[u]) : Nt, v = /* @__PURE__ */ ve(m);
            return v;
          }), n.set(u, l));
          var h = s(l);
          if (h === Nt)
            return !1;
        }
        return d;
      },
      set(c, u, l, d) {
        var I;
        var h = n.get(u), f = u in c;
        if (r && u === "length")
          for (var m = l; m < /** @type {Source<number>} */
          h.v; m += 1) {
            var v = n.get(m + "");
            v !== void 0 ? z(v, Nt) : m in c && (v = o(() => /* @__PURE__ */ ve(Nt)), n.set(m + "", v));
          }
        if (h === void 0)
          (!f || (I = Tr(c, u)) != null && I.writable) && (h = o(() => /* @__PURE__ */ ve(void 0)), z(h, ce(l)), n.set(u, h));
        else {
          f = h.v !== Nt;
          var g = o(() => ce(l));
          z(h, g);
        }
        var b = Reflect.getOwnPropertyDescriptor(c, u);
        if (b != null && b.set && b.set.call(d, l), !f) {
          if (r && typeof u == "string") {
            var y = (
              /** @type {Source<number>} */
              n.get("length")
            ), A = Number(u);
            Number.isInteger(A) && A >= y.v && z(y, A + 1);
          }
          Ea(i);
        }
        return !0;
      },
      ownKeys(c) {
        s(i);
        var u = Reflect.ownKeys(c).filter((h) => {
          var f = n.get(h);
          return f === void 0 || f.v !== Nt;
        });
        for (var [l, d] of n)
          d.v !== Nt && !(l in c) && u.push(l);
        return u;
      },
      setPrototypeOf() {
        $d();
      }
    }
  );
}
function fl(t) {
  try {
    if (t !== null && typeof t == "object" && Yn in t)
      return t[Yn];
  } catch {
  }
  return t;
}
function Sf(t, e) {
  return Object.is(fl(t), fl(e));
}
var hl, qu, zu, Xu, Ku;
function Af() {
  if (hl === void 0) {
    hl = window, qu = document, zu = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    Xu = Tr(e, "firstChild").get, Ku = Tr(e, "nextSibling").get, ul(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), ul(n) && (n.__t = void 0);
  }
}
function Nr(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function qi(t) {
  return Xu.call(t);
}
// @__NO_SIDE_EFFECTS__
function Ha(t) {
  return Ku.call(t);
}
function se(t, e) {
  return /* @__PURE__ */ qi(t);
}
function Z(t, e = !1) {
  {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ qi(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Ha(n) : n;
  }
}
function Ie(t, e = 1, n = !1) {
  let r = t;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ha(r);
  return r;
}
function Cf(t) {
  t.textContent = "";
}
function Gs() {
  return !1;
}
function xf(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, hr(() => {
      document.activeElement === n && t.focus();
    });
  }
}
let vl = !1;
function Tf() {
  vl || (vl = !0, document.addEventListener(
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
function ea(t) {
  var e = Ge, n = je;
  hn(null), Jn(null);
  try {
    return t();
  } finally {
    hn(e), Jn(n);
  }
}
function Yu(t, e, n, r = n) {
  t.addEventListener(e, () => ea(n));
  const i = t.__on_r;
  i ? t.__on_r = () => {
    i(), r(!0);
  } : t.__on_r = () => r(!0), Tf();
}
function Zu(t) {
  je === null && Ge === null && Yd(), Ge !== null && Ge.f & Tn && je === null && Kd(), mi && Xd();
}
function wf(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function er(t, e, n, r = !0) {
  var i = je;
  i !== null && i.f & Bn && (t |= Bn);
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
      Aa(a), a.f |= Ro;
    } catch (u) {
      throw Vt(a), u;
    }
  else e !== null && si(a);
  if (r) {
    var o = a;
    if (n && o.deps === null && o.teardown === null && o.nodes_start === null && o.first === o.last && // either `null`, or a singular child
    !(o.f & Ji) && (o = o.first), o !== null && (o.parent = i, i !== null && wf(o, i), Ge !== null && Ge.f & rn && !(t & fi))) {
      var c = (
        /** @type {Derived} */
        Ge
      );
      (c.effects ?? (c.effects = [])).push(o);
    }
  }
  return a;
}
function Lf() {
  return Ge !== null && !Un;
}
function Po(t) {
  const e = er(Oo, null, !1);
  return en(e, Kt), e.teardown = t, e;
}
function Te(t) {
  Zu();
  var e = (
    /** @type {Effect} */
    je.f
  ), n = !Ge && (e & mr) !== 0 && (e & Ro) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      lt
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return Qu(t);
}
function Qu(t) {
  return er(Hs | Lu, t, !1);
}
function Ju(t) {
  return Zu(), er(Oo | Lu, t, !0);
}
function Of(t) {
  fr.ensure();
  const e = er(fi | Ji, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Lr(e, () => {
      Vt(e), r(void 0);
    }) : (Vt(e), r(void 0));
  });
}
function vi(t) {
  return er(Hs, t, !1);
}
function Rf(t) {
  return er(Mo | Ji, t, !0);
}
function Ua(t, e = 0) {
  return er(Oo | e, t, !0);
}
function Oe(t, e = [], n = []) {
  Fu(e, n, (r) => {
    er(Oo, () => t(...r.map(s)), !0);
  });
}
function Hr(t, e = 0) {
  var n = er(Mr | e, t, !0);
  return n;
}
function qt(t, e = !0) {
  return er(mr | Ji, t, !0, e);
}
function $u(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = mi, r = Ge;
    gl(!0), hn(null);
    try {
      e.call(null);
    } finally {
      gl(n), hn(r);
    }
  }
}
function ec(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && ea(() => {
      i.abort(Li);
    });
    var r = n.next;
    n.f & fi ? n.parent = null : Vt(n, e), n = r;
  }
}
function Mf(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    e.f & mr || Vt(e), e = n;
  }
}
function Vt(t, e = !0) {
  var n = !1;
  (e || t.f & Wd) && t.nodes_start !== null && t.nodes_end !== null && (Df(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), ec(t, e && !n), vo(t, 0), en(t, hi);
  var r = t.transitions;
  if (r !== null)
    for (const a of r)
      a.stop();
  $u(t);
  var i = t.parent;
  i !== null && i.first !== null && tc(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function Df(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ha(t)
    );
    t.remove(), t = n;
  }
}
function tc(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Lr(t, e) {
  var n = [];
  js(t, n, !0), nc(n, () => {
    Vt(t), e && e();
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
function js(t, e, n) {
  if (!(t.f & Bn)) {
    if (t.f ^= Bn, t.transitions !== null)
      for (const o of t.transitions)
        (o.is_global || n) && e.push(o);
    for (var r = t.first; r !== null; ) {
      var i = r.next, a = (r.f & Pr) !== 0 || (r.f & mr) !== 0;
      js(r, e, a ? n : !1), r = i;
    }
  }
}
function No(t) {
  rc(t, !0);
}
function rc(t, e) {
  if (t.f & Bn) {
    t.f ^= Bn, t.f & Kt || (en(t, yn), si(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & Pr) !== 0 || (n.f & mr) !== 0;
      rc(n, i ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || e) && a.in();
  }
}
let Di = !1;
function ml(t) {
  Di = t;
}
let mi = !1;
function gl(t) {
  mi = t;
}
let Ge = null, Un = !1;
function hn(t) {
  Ge = t;
}
let je = null;
function Jn(t) {
  je = t;
}
let $t = null;
function ic(t) {
  Ge !== null && ($t === null ? $t = [t] : $t.push(t));
}
let Qt = null, bn = 0, Sn = null;
function Pf(t) {
  Sn = t;
}
let ac = 1, Sa = 0, ii = Sa;
function pl(t) {
  ii = t;
}
let Cr = !1;
function oc() {
  return ++ac;
}
function Ho(t) {
  var h;
  var e = t.f;
  if (e & yn)
    return !0;
  if (e & Dr) {
    var n = t.deps, r = (e & Tn) !== 0;
    if (n !== null) {
      var i, a, o = (e & ho) !== 0, c = r && je !== null && !Cr, u = n.length;
      if ((o || c) && (je === null || !(je.f & hi))) {
        var l = (
          /** @type {Derived} */
          t
        ), d = l.parent;
        for (i = 0; i < u; i++)
          a = n[i], (o || !((h = a == null ? void 0 : a.reactions) != null && h.includes(l))) && (a.reactions ?? (a.reactions = [])).push(l);
        o && (l.f ^= ho), c && d !== null && !(d.f & Tn) && (l.f ^= Tn);
      }
      for (i = 0; i < u; i++)
        if (a = n[i], Ho(
          /** @type {Derived} */
          a
        ) && Gu(
          /** @type {Derived} */
          a
        ), a.wv > t.wv)
          return !0;
    }
    (!r || je !== null && !Cr) && en(t, Kt);
  }
  return !1;
}
function sc(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !($t != null && $t.includes(t)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a.f & rn ? sc(
        /** @type {Derived} */
        a,
        e,
        !1
      ) : e === a && (n ? en(a, yn) : a.f & Kt && en(a, Dr), si(
        /** @type {Effect} */
        a
      ));
    }
}
function lc(t) {
  var g;
  var e = Qt, n = bn, r = Sn, i = Ge, a = Cr, o = $t, c = lt, u = Un, l = ii, d = t.f;
  Qt = /** @type {null | Value[]} */
  null, bn = 0, Sn = null, Cr = (d & Tn) !== 0 && (Un || !Di || Ge === null), Ge = d & (mr | fi) ? null : t, $t = null, Gi(t.ctx), Un = !1, ii = ++Sa, t.ac !== null && (ea(() => {
    t.ac.abort(Li);
  }), t.ac = null);
  try {
    t.f |= cs;
    var h = (
      /** @type {Function} */
      t.fn
    ), f = h(), m = t.deps;
    if (Qt !== null) {
      var v;
      if (vo(t, bn), m !== null && bn > 0)
        for (m.length = bn + Qt.length, v = 0; v < Qt.length; v++)
          m[bn + v] = Qt[v];
      else
        t.deps = m = Qt;
      if (!Cr || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      d & rn && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (v = bn; v < m.length; v++)
          ((g = m[v]).reactions ?? (g.reactions = [])).push(t);
    } else m !== null && bn < m.length && (vo(t, bn), m.length = bn);
    if (Pa() && Sn !== null && !Un && m !== null && !(t.f & (rn | Dr | yn)))
      for (v = 0; v < /** @type {Source[]} */
      Sn.length; v++)
        sc(
          Sn[v],
          /** @type {Effect} */
          t
        );
    return i !== null && i !== t && (Sa++, Sn !== null && (r === null ? r = Sn : r.push(.../** @type {Source[]} */
    Sn))), t.f & ri && (t.f ^= ri), f;
  } catch (b) {
    return Nu(b);
  } finally {
    t.f ^= cs, Qt = e, bn = n, Sn = r, Ge = i, Cr = a, $t = o, Gi(c), Un = u, ii = l;
  }
}
function Nf(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = Fd.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && e.f & rn && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Qt === null || !Qt.includes(e)) && (en(e, Dr), e.f & (Tn | ho) || (e.f ^= ho), Vu(
    /** @type {Derived} **/
    e
  ), vo(
    /** @type {Derived} **/
    e,
    0
  ));
}
function vo(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      Nf(t, n[r]);
}
function Aa(t) {
  var e = t.f;
  if (!(e & hi)) {
    en(t, Kt);
    var n = je, r = Di;
    je = t, Di = !0;
    try {
      e & Mr ? Mf(t) : ec(t), $u(t);
      var i = lc(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = ac;
      var a;
      xu && of && t.f & yn && t.deps;
    } finally {
      Di = r, je = n;
    }
  }
}
async function uc() {
  await Promise.resolve(), df();
}
function s(t) {
  var e = t.f, n = (e & rn) !== 0;
  if (Ge !== null && !Un) {
    var r = je !== null && (je.f & hi) !== 0;
    if (!r && !($t != null && $t.includes(t))) {
      var i = Ge.deps;
      if (Ge.f & cs)
        t.rv < Sa && (t.rv = Sa, Qt === null && i !== null && i[bn] === t ? bn++ : Qt === null ? Qt = [t] : (!Cr || !Qt.includes(t)) && Qt.push(t));
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
    ), c = o.parent;
    c !== null && !(c.f & Tn) && (o.f ^= Tn);
  }
  if (mi) {
    if (wr.has(t))
      return wr.get(t);
    if (n) {
      o = /** @type {Derived} */
      t;
      var u = o.v;
      return (!(o.f & Kt) && o.reactions !== null || cc(o)) && (u = Vs(o)), wr.set(o, u), u;
    }
  } else if (n) {
    if (o = /** @type {Derived} */
    t, Ft != null && Ft.has(o))
      return Ft.get(o);
    Ho(o) && Gu(o);
  }
  if (Ft != null && Ft.has(t))
    return Ft.get(t);
  if (t.f & ri)
    throw t.v;
  return t.v;
}
function cc(t) {
  if (t.v === Nt) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (wr.has(e) || e.f & rn && cc(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Fn(t) {
  var e = Un;
  try {
    return Un = !0, t();
  } finally {
    Un = e;
  }
}
const Hf = -7169;
function en(t, e) {
  t.f = t.f & Hf | e;
}
function dc(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (Yn in t)
      ps(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && Yn in n && ps(n);
      }
  }
}
function ps(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        ps(t[r], e);
      } catch {
      }
    const n = Ns(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Tu(n);
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
const fc = /* @__PURE__ */ new Set(), bs = /* @__PURE__ */ new Set();
function Ws(t, e, n, r = {}) {
  function i(a) {
    if (r.capture || _a.call(e, a), !a.cancelBubble)
      return ea(() => n == null ? void 0 : n.call(this, a));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? hr(() => {
    e.addEventListener(t, i, r);
  }) : e.addEventListener(t, i, r), i;
}
function Uf(t, e, n, r = {}) {
  var i = Ws(e, t, n, r);
  return () => {
    t.removeEventListener(e, i, r);
  };
}
function ba(t, e, n, r, i) {
  var a = { capture: r, passive: i }, o = Ws(t, e, n, a);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && Po(() => {
    e.removeEventListener(t, o, a);
  });
}
function On(t) {
  for (var e = 0; e < t.length; e++)
    fc.add(t[e]);
  for (var n of bs)
    n(t);
}
let bl = null;
function _a(t) {
  var A;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = ((A = t.composedPath) == null ? void 0 : A.call(t)) || [], a = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  bl = t;
  var o = 0, c = bl === t && t.__root;
  if (c) {
    var u = i.indexOf(c);
    if (u !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var l = i.indexOf(e);
    if (l === -1)
      return;
    u <= l && (o = u);
  }
  if (a = /** @type {Element} */
  i[o] || t.target, a !== e) {
    co(t, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var d = Ge, h = je;
    hn(null), Jn(null);
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
            if (Lo(g)) {
              var [b, ...y] = g;
              b.apply(a, [t, ...y]);
            } else
              g.call(a, t);
        } catch (I) {
          f ? m.push(I) : f = I;
        }
        if (t.cancelBubble || v === e || v === null)
          break;
        a = v;
      }
      if (f) {
        for (let I of m)
          queueMicrotask(() => {
            throw I;
          });
        throw f;
      }
    } finally {
      t.__root = e, delete t.currentTarget, hn(d), Jn(h);
    }
  }
}
function hc(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function zi(t, e) {
  var n = (
    /** @type {Effect} */
    je
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function de(t, e) {
  var n = (e & 1) !== 0, r = (e & 2) !== 0, i, a = !t.startsWith("<!>");
  return () => {
    i === void 0 && (i = hc(a ? t : "<!>" + t), n || (i = /** @type {Node} */
    /* @__PURE__ */ qi(i)));
    var o = (
      /** @type {TemplateNode} */
      r || zu ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ qi(o)
      ), u = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      zi(c, u);
    } else
      zi(o, o);
    return o;
  };
}
// @__NO_SIDE_EFFECTS__
function kf(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, a;
  return () => {
    if (!a) {
      var o = (
        /** @type {DocumentFragment} */
        hc(i)
      ), c = (
        /** @type {Element} */
        /* @__PURE__ */ qi(o)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ qi(c);
    }
    var u = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return zi(u, u), u;
  };
}
// @__NO_SIDE_EFFECTS__
function vn(t, e) {
  return /* @__PURE__ */ kf(t, e, "svg");
}
function Rt(t = "") {
  {
    var e = Nr(t + "");
    return zi(e, e), e;
  }
}
function ne() {
  var t = document.createDocumentFragment(), e = document.createComment(""), n = Nr();
  return t.append(e, n), zi(e, n), t;
}
function L(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function Bf(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const Ff = [
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
function Vf(t) {
  return Ff.includes(t);
}
const Gf = {
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
function jf(t) {
  return t = t.toLowerCase(), Gf[t] ?? t;
}
const Wf = ["touchstart", "touchmove"];
function qf(t) {
  return Wf.includes(t);
}
let mo = !0;
function _l(t) {
  mo = t;
}
function at(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function zf(t, e) {
  return Xf(t, e);
}
const Ai = /* @__PURE__ */ new Map();
function Xf(t, { target: e, anchor: n, props: r = {}, events: i, context: a, intro: o = !0 }) {
  Af();
  var c = /* @__PURE__ */ new Set(), u = (h) => {
    for (var f = 0; f < h.length; f++) {
      var m = h[f];
      if (!c.has(m)) {
        c.add(m);
        var v = qf(m);
        e.addEventListener(m, _a, { passive: v });
        var g = Ai.get(m);
        g === void 0 ? (document.addEventListener(m, _a, { passive: v }), Ai.set(m, 1)) : Ai.set(m, g + 1);
      }
    }
  };
  u(Ps(fc)), bs.add(u);
  var l = void 0, d = Of(() => {
    var h = n ?? e.appendChild(Nr());
    return mf(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (f) => {
        if (a) {
          Ce({});
          var m = (
            /** @type {ComponentContext} */
            lt
          );
          m.c = a;
        }
        i && (r.$$events = i), mo = o, l = t(f, r) || {}, mo = !0, a && xe();
      }
    ), () => {
      var v;
      for (var f of c) {
        e.removeEventListener(f, _a);
        var m = (
          /** @type {number} */
          Ai.get(f)
        );
        --m === 0 ? (document.removeEventListener(f, _a), Ai.delete(f)) : Ai.set(f, m);
      }
      bs.delete(u), h !== n && ((v = h.parentNode) == null || v.removeChild(h));
    };
  });
  return Kf.set(l, d), l;
}
let Kf = /* @__PURE__ */ new WeakMap();
function Se(t, e, ...n) {
  var r = t, i = pe, a;
  Hr(() => {
    i !== (i = e()) && (a && (Vt(a), a = null), a = qt(() => (
      /** @type {SnippetFn} */
      i(r, ...n)
    )));
  }, Pr);
}
function rt(t) {
  lt === null && ks(), $i && lt.l !== null ? Yf(lt).m.push(t) : Te(() => {
    const e = Fn(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Rn(t) {
  lt === null && ks(), rt(() => () => Fn(t));
}
function Yf(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
function ae(t, e, n = !1) {
  var r = t, i = null, a = null, o = Nt, c = n ? Pr : 0, u = !1;
  const l = (m, v = !0) => {
    u = !0, f(v, m);
  };
  var d = null;
  function h() {
    d !== null && (d.lastChild.remove(), r.before(d), d = null);
    var m = o ? i : a, v = o ? a : i;
    m && No(m), v && Lr(v, () => {
      o ? a = null : i = null;
    });
  }
  const f = (m, v) => {
    if (o !== (o = m)) {
      var g = Gs(), b = r;
      if (g && (d = document.createDocumentFragment(), d.append(b = Nr())), o ? i ?? (i = v && qt(() => v(b))) : a ?? (a = v && qt(() => v(b))), g) {
        var y = (
          /** @type {Batch} */
          st
        ), A = o ? i : a, I = o ? a : i;
        A && y.skipped_effects.delete(A), I && y.skipped_effects.add(I), y.add_callback(h);
      } else
        h();
    }
  };
  Hr(() => {
    u = !1, e(l), u || f(null, null);
  }, c);
}
let ai = null;
function yl(t) {
  ai = t;
}
function Oi(t, e) {
  return e;
}
function Zf(t, e, n) {
  for (var r = t.items, i = [], a = e.length, o = 0; o < a; o++)
    js(e[o].e, i, !0);
  var c = a > 0 && i.length === 0 && n !== null;
  if (c) {
    var u = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Cf(u), u.append(
      /** @type {Element} */
      n
    ), r.clear(), Wn(t, e[0].prev, e[a - 1].next);
  }
  nc(i, () => {
    for (var l = 0; l < a; l++) {
      var d = e[l];
      c || (r.delete(d.k), Wn(t, d.prev, d.next)), Vt(d.e, !c);
    }
  });
}
function xn(t, e, n, r, i, a = null) {
  var o = t, c = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, u = (e & 4) !== 0;
  if (u) {
    var l = (
      /** @type {Element} */
      t
    );
    o = l.appendChild(Nr());
  }
  var d = null, h = !1, f = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ Fs(() => {
    var y = n();
    return Lo(y) ? y : y == null ? [] : Ps(y);
  }), v, g;
  function b() {
    Qf(
      g,
      v,
      c,
      f,
      o,
      i,
      e,
      r,
      n
    ), a !== null && (v.length === 0 ? d ? No(d) : d = qt(() => a(o)) : d !== null && Lr(d, () => {
      d = null;
    }));
  }
  Hr(() => {
    g ?? (g = /** @type {Effect} */
    je), v = /** @type {V[]} */
    s(m);
    var y = v.length;
    if (!(h && y === 0)) {
      h = y === 0;
      var A, I, _, E;
      if (Gs()) {
        var C = /* @__PURE__ */ new Set(), T = (
          /** @type {Batch} */
          st
        );
        for (I = 0; I < y; I += 1) {
          _ = v[I], E = r(_, I);
          var x = c.items.get(E) ?? f.get(E);
          x ? e & 3 && vc(x, _, I, e) : (A = mc(
            null,
            c,
            null,
            null,
            _,
            E,
            I,
            i,
            e,
            n,
            !0
          ), f.set(E, A)), C.add(E);
        }
        for (const [S, P] of c.items)
          C.has(S) || T.skipped_effects.add(P.e);
        T.add_callback(b);
      } else
        b();
      s(m);
    }
  });
}
function Qf(t, e, n, r, i, a, o, c, u) {
  var ee, H, R, j;
  var l = (o & 8) !== 0, d = (o & 3) !== 0, h = e.length, f = n.items, m = n.first, v = m, g, b = null, y, A = [], I = [], _, E, C, T;
  if (l)
    for (T = 0; T < h; T += 1)
      _ = e[T], E = c(_, T), C = f.get(E), C !== void 0 && ((ee = C.a) == null || ee.measure(), (y ?? (y = /* @__PURE__ */ new Set())).add(C));
  for (T = 0; T < h; T += 1) {
    if (_ = e[T], E = c(_, T), C = f.get(E), C === void 0) {
      var x = r.get(E);
      if (x !== void 0) {
        r.delete(E), f.set(E, x);
        var S = b ? b.next : v;
        Wn(n, b, x), Wn(n, x, S), qo(x, S, i), b = x;
      } else {
        var P = v ? (
          /** @type {TemplateNode} */
          v.e.nodes_start
        ) : i;
        b = mc(
          P,
          n,
          b,
          b === null ? n.first : b.next,
          _,
          E,
          T,
          a,
          o,
          u
        );
      }
      f.set(E, b), A = [], I = [], v = b.next;
      continue;
    }
    if (d && vc(C, _, T, o), C.e.f & Bn && (No(C.e), l && ((H = C.a) == null || H.unfix(), (y ?? (y = /* @__PURE__ */ new Set())).delete(C))), C !== v) {
      if (g !== void 0 && g.has(C)) {
        if (A.length < I.length) {
          var X = I[0], M;
          b = X.prev;
          var N = A[0], O = A[A.length - 1];
          for (M = 0; M < A.length; M += 1)
            qo(A[M], X, i);
          for (M = 0; M < I.length; M += 1)
            g.delete(I[M]);
          Wn(n, N.prev, O.next), Wn(n, b, N), Wn(n, O, X), v = X, b = O, T -= 1, A = [], I = [];
        } else
          g.delete(C), qo(C, v, i), Wn(n, C.prev, C.next), Wn(n, C, b === null ? n.first : b.next), Wn(n, b, C), b = C;
        continue;
      }
      for (A = [], I = []; v !== null && v.k !== E; )
        v.e.f & Bn || (g ?? (g = /* @__PURE__ */ new Set())).add(v), I.push(v), v = v.next;
      if (v === null)
        continue;
      C = v;
    }
    A.push(C), b = C, v = C.next;
  }
  if (v !== null || g !== void 0) {
    for (var w = g === void 0 ? [] : Ps(g); v !== null; )
      v.e.f & Bn || w.push(v), v = v.next;
    var k = w.length;
    if (k > 0) {
      var F = o & 4 && h === 0 ? i : null;
      if (l) {
        for (T = 0; T < k; T += 1)
          (R = w[T].a) == null || R.measure();
        for (T = 0; T < k; T += 1)
          (j = w[T].a) == null || j.fix();
      }
      Zf(n, w, F);
    }
  }
  l && hr(() => {
    var Ae;
    if (y !== void 0)
      for (C of y)
        (Ae = C.a) == null || Ae.apply();
  }), t.first = n.first && n.first.e, t.last = b && b.e;
  for (var K of r.values())
    Vt(K.e);
  r.clear();
}
function vc(t, e, n, r) {
  r & 1 && Wi(t.v, e), r & 2 ? Wi(
    /** @type {Value<number>} */
    t.i,
    n
  ) : t.i = n;
}
function mc(t, e, n, r, i, a, o, c, u, l, d) {
  var h = ai, f = (u & 1) !== 0, m = (u & 16) === 0, v = f ? m ? /* @__PURE__ */ ju(i, !1, !1) : li(i) : i, g = u & 2 ? li(o) : o, b = {
    i: g,
    v,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  ai = b;
  try {
    if (t === null) {
      var y = document.createDocumentFragment();
      y.append(t = Nr());
    }
    return b.e = qt(() => c(
      /** @type {Node} */
      t,
      v,
      g,
      l
    ), af), b.e.prev = n && n.e, b.e.next = r && r.e, n === null ? d || (e.first = b) : (n.next = b, n.e.next = b.e), r !== null && (r.prev = b, r.e.prev = b.e), b;
  } finally {
    ai = h;
  }
}
function qo(t, e, n) {
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
      /* @__PURE__ */ Ha(a)
    );
    i.before(a), a = o;
  }
}
function Wn(t, e, n) {
  e === null ? t.first = n : (e.next = n, e.e.next = n && n.e), n !== null && (n.prev = e, n.e.prev = e && e.e);
}
function gr(t, e, n) {
  var r = t, i, a, o = null, c = null;
  function u() {
    a && (Lr(a), a = null), o && (o.lastChild.remove(), r.before(o), o = null), a = c, c = null;
  }
  Hr(() => {
    if (i !== (i = e())) {
      var l = Gs();
      if (i) {
        var d = r;
        l && (o = document.createDocumentFragment(), o.append(d = Nr()), a && st.skipped_effects.add(a)), c = qt(() => n(d, i));
      }
      l ? st.add_callback(u) : u();
    }
  }, Pr);
}
function Il(t, e, n, r, i, a) {
  var o, c, u = null, l = (
    /** @type {TemplateNode} */
    t
  ), d, h = ai;
  Hr(() => {
    const f = e() || null;
    var m = f === "svg" ? kd : null;
    if (f !== o) {
      var v = ai;
      yl(h), d && (f === null ? Lr(d, () => {
        d = null, c = null;
      }) : f === c ? No(d) : (Vt(d), _l(!1))), f && f !== c && (d = qt(() => {
        if (u = m ? document.createElementNS(m, f) : document.createElement(f), zi(u, u), r) {
          var g = (
            /** @type {TemplateNode} */
            u.appendChild(Nr())
          );
          r(u, g);
        }
        je.nodes_end = u, l.before(u);
      })), o = f, o && (c = o), _l(!0), yl(v);
    }
  }, Pr);
}
function Me(t, e, n) {
  vi(() => {
    var r = Fn(() => e(t, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      Ua(() => {
        var o = n();
        dc(o), i && Bs(a, o) && (a = o, r.update(o));
      }), i = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Jf(t, e) {
  var n = void 0, r;
  Hr(() => {
    n !== (n = e()) && (r && (Vt(r), r = null), n && (r = qt(() => {
      vi(() => (
        /** @type {(node: Element) => void} */
        n(t)
      ));
    })));
  });
}
function gc(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var i = t.length;
    for (e = 0; e < i; e++) t[e] && (n = gc(t[e])) && (r && (r += " "), r += n);
  } else for (n in t) t[n] && (r && (r += " "), r += n);
  return r;
}
function $f() {
  for (var t, e, n = 0, r = "", i = arguments.length; n < i; n++) (t = arguments[n]) && (e = gc(t)) && (r && (r += " "), r += e);
  return r;
}
function pc(t) {
  return typeof t == "object" ? $f(t) : t ?? "";
}
const El = [...` 	
\r\f \v\uFEFF`];
function eh(t, e, n) {
  var r = t == null ? "" : "" + t;
  if (e && (r = r ? r + " " + e : e), n) {
    for (var i in n)
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0; ) {
          var c = o + a;
          (o === 0 || El.includes(r[o - 1])) && (c === r.length || El.includes(r[c])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(c + 1) : o = c;
        }
  }
  return r === "" ? null : r;
}
function Sl(t, e = !1) {
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
function th(t, e) {
  if (e) {
    var n = "", r, i;
    if (Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, o = 0, c = !1, u = [];
      r && u.push(...Object.keys(r).map(zo)), i && u.push(...Object.keys(i).map(zo));
      var l = 0, d = -1;
      const g = t.length;
      for (var h = 0; h < g; h++) {
        var f = t[h];
        if (c ? f === "/" && t[h - 1] === "*" && (c = !1) : a ? a === f && (a = !1) : f === "/" && t[h + 1] === "*" ? c = !0 : f === '"' || f === "'" ? a = f : f === "(" ? o++ : f === ")" && o--, !c && a === !1 && o === 0) {
          if (f === ":" && d === -1)
            d = h;
          else if (f === ";" || h === g - 1) {
            if (d !== -1) {
              var m = zo(t.substring(l, d).trim());
              if (!u.includes(m)) {
                f !== ";" && h++;
                var v = t.substring(l, h).trim();
                n += " " + v + ";";
              }
            }
            l = h + 1, d = -1;
          }
        }
      }
    }
    return r && (n += Sl(r)), i && (n += Sl(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function qs(t, e, n, r, i, a) {
  var o = t.__className;
  if (o !== n || o === void 0) {
    var c = eh(n, r, a);
    c == null ? t.removeAttribute("class") : e ? t.className = c : t.setAttribute("class", c), t.__className = n;
  } else if (a && i !== a)
    for (var u in a) {
      var l = !!a[u];
      (i == null || l !== !!i[u]) && t.classList.toggle(u, l);
    }
  return a;
}
function Xo(t, e = {}, n, r) {
  for (var i in n) {
    var a = n[i];
    e[i] !== a && (n[i] == null ? t.style.removeProperty(i) : t.style.setProperty(i, a, r));
  }
}
function Gt(t, e, n, r) {
  var i = t.__style;
  if (i !== e) {
    var a = th(e, r);
    a == null ? t.removeAttribute("style") : t.style.cssText = a, t.__style = e;
  } else r && (Array.isArray(r) ? (Xo(t, n == null ? void 0 : n[0], r[0]), Xo(t, n == null ? void 0 : n[1], r[1], "important")) : Xo(t, n, r));
  return r;
}
function _s(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!Lo(e))
      return nf();
    for (var r of t.options)
      r.selected = e.includes(Al(r));
    return;
  }
  for (r of t.options) {
    var i = Al(r);
    if (Sf(i, e)) {
      r.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function nh(t) {
  var e = new MutationObserver(() => {
    _s(t, t.__value);
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
  }), Po(() => {
    e.disconnect();
  });
}
function Al(t) {
  return "__value" in t ? t.__value : t.value;
}
const ua = Symbol("class"), ca = Symbol("style"), bc = Symbol("is custom element"), _c = Symbol("is html");
function Cl(t, e) {
  var n = zs(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== "PROGRESS") || (t.value = e ?? "");
}
function rh(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function Or(t, e, n, r) {
  var i = zs(t);
  i[e] !== (i[e] = n) && (e === "loading" && (t[qd] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && yc(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function ih(t, e, n, r, i = !1, a = !1) {
  var o = zs(t), c = o[bc], u = !o[_c], l = e || {}, d = t.tagName === "OPTION";
  for (var h in e)
    h in n || (n[h] = null);
  n.class ? n.class = pc(n.class) : n[ua] && (n.class = null), n[ca] && (n.style ?? (n.style = null));
  var f = yc(t);
  for (const I in n) {
    let _ = n[I];
    if (d && I === "value" && _ == null) {
      t.value = t.__value = "", l[I] = _;
      continue;
    }
    if (I === "class") {
      var m = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      qs(t, m, _, r, e == null ? void 0 : e[ua], n[ua]), l[I] = _, l[ua] = n[ua];
      continue;
    }
    if (I === "style") {
      Gt(t, _, e == null ? void 0 : e[ca], n[ca]), l[I] = _, l[ca] = n[ca];
      continue;
    }
    var v = l[I];
    if (!(_ === v && !(_ === void 0 && t.hasAttribute(I)))) {
      l[I] = _;
      var g = I[0] + I[1];
      if (g !== "$$")
        if (g === "on") {
          const E = {}, C = "$$" + I;
          let T = I.slice(2);
          var b = Vf(T);
          if (Bf(T) && (T = T.slice(0, -7), E.capture = !0), !b && v) {
            if (_ != null) continue;
            t.removeEventListener(T, l[C], E), l[C] = null;
          }
          if (_ != null)
            if (b)
              t[`__${T}`] = _, On([T]);
            else {
              let x = function(S) {
                l[I].call(this, S);
              };
              l[C] = Ws(T, t, x, E);
            }
          else b && (t[`__${T}`] = void 0);
        } else if (I === "style")
          Or(t, I, _);
        else if (I === "autofocus")
          xf(
            /** @type {HTMLElement} */
            t,
            !!_
          );
        else if (!c && (I === "__value" || I === "value" && _ != null))
          t.value = t.__value = _;
        else if (I === "selected" && d)
          rh(
            /** @type {HTMLOptionElement} */
            t,
            _
          );
        else {
          var y = I;
          u || (y = jf(y));
          var A = y === "defaultValue" || y === "defaultChecked";
          if (_ == null && !c && !A)
            if (o[I] = null, y === "value" || y === "checked") {
              let E = (
                /** @type {HTMLInputElement} */
                t
              );
              const C = e === void 0;
              if (y === "value") {
                let T = E.defaultValue;
                E.removeAttribute(y), E.defaultValue = T, E.value = E.__value = C ? T : null;
              } else {
                let T = E.defaultChecked;
                E.removeAttribute(y), E.defaultChecked = T, E.checked = C ? T : !1;
              }
            } else
              t.removeAttribute(I);
          else A || f.includes(y) && (c || typeof _ != "string") ? (t[y] = _, y in o && (o[y] = Nt)) : typeof _ != "function" && Or(t, y, _);
        }
    }
  }
  return l;
}
function Ue(t, e, n = [], r = [], i, a = !1, o = !1) {
  Fu(n, r, (c) => {
    var u = void 0, l = {}, d = t.nodeName === "SELECT", h = !1;
    if (Hr(() => {
      var m = e(...c.map(s)), v = ih(
        t,
        u,
        m,
        i,
        a,
        o
      );
      h && d && "value" in m && _s(
        /** @type {HTMLSelectElement} */
        t,
        m.value
      );
      for (let b of Object.getOwnPropertySymbols(l))
        m[b] || Vt(l[b]);
      for (let b of Object.getOwnPropertySymbols(m)) {
        var g = m[b];
        b.description === Bd && (!u || g !== u[b]) && (l[b] && Vt(l[b]), l[b] = qt(() => Jf(t, () => g))), v[b] = g;
      }
      u = v;
    }), d) {
      var f = (
        /** @type {HTMLSelectElement} */
        t
      );
      vi(() => {
        _s(
          f,
          /** @type {Record<string | symbol, any>} */
          u.value,
          !0
        ), nh(f);
      });
    }
    h = !0;
  });
}
function zs(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ?? (t.__attributes = {
      [bc]: t.nodeName.includes("-"),
      [_c]: t.namespaceURI === Ud
    })
  );
}
var xl = /* @__PURE__ */ new Map();
function yc(t) {
  var e = t.getAttribute("is") || t.nodeName, n = xl.get(e);
  if (n) return n;
  xl.set(e, n = []);
  for (var r, i = t, a = Element.prototype; a !== i; ) {
    r = Tu(i);
    for (var o in r)
      r[o].set && n.push(o);
    i = Ns(i);
  }
  return n;
}
const ah = () => performance.now(), dr = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (t) => requestAnimationFrame(t)
  ),
  now: () => ah(),
  tasks: /* @__PURE__ */ new Set()
};
function Ic() {
  const t = dr.now();
  dr.tasks.forEach((e) => {
    e.c(t) || (dr.tasks.delete(e), e.f());
  }), dr.tasks.size !== 0 && dr.tick(Ic);
}
function oh(t) {
  let e;
  return dr.tasks.size === 0 && dr.tick(Ic), {
    promise: new Promise((n) => {
      dr.tasks.add(e = { c: t, f: n });
    }),
    abort() {
      dr.tasks.delete(e);
    }
  };
}
function za(t, e) {
  ea(() => {
    t.dispatchEvent(new CustomEvent(e));
  });
}
function sh(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const e = t.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (n) => n[0].toUpperCase() + n.slice(1)
  ).join("");
}
function Tl(t) {
  const e = {}, n = t.split(";");
  for (const r of n) {
    const [i, a] = r.split(":");
    if (!i || a === void 0) break;
    const o = sh(i.trim());
    e[o] = a.trim();
  }
  return e;
}
const lh = (t) => t;
function uh(t, e, n) {
  var r = (
    /** @type {EachItem} */
    ai
  ), i, a, o, c = null;
  r.a ?? (r.a = {
    element: t,
    measure() {
      i = this.element.getBoundingClientRect();
    },
    apply() {
      if (o == null || o.abort(), a = this.element.getBoundingClientRect(), i.left !== a.left || i.right !== a.right || i.top !== a.top || i.bottom !== a.bottom) {
        const u = e()(this.element, { from: i, to: a }, n == null ? void 0 : n());
        o = po(this.element, u, void 0, 1, () => {
          o == null || o.abort(), o = void 0;
        });
      }
    },
    fix() {
      if (!t.getAnimations().length) {
        var { position: u, width: l, height: d } = getComputedStyle(t);
        if (u !== "absolute" && u !== "fixed") {
          var h = (
            /** @type {HTMLElement | SVGElement} */
            t.style
          );
          c = {
            position: h.position,
            width: h.width,
            height: h.height,
            transform: h.transform
          }, h.position = "absolute", h.width = l, h.height = d;
          var f = t.getBoundingClientRect();
          if (i.left !== f.left || i.top !== f.top) {
            var m = `translate(${i.left - f.left}px, ${i.top - f.top}px)`;
            h.transform = h.transform ? `${h.transform} ${m}` : m;
          }
        }
      }
    },
    unfix() {
      if (c) {
        var u = (
          /** @type {HTMLElement | SVGElement} */
          t.style
        );
        u.position = c.position, u.width = c.width, u.height = c.height, u.transform = c.transform;
      }
    }
  }), r.a.element = t;
}
function go(t, e, n, r) {
  var i = (t & 1) !== 0, a = (t & 2) !== 0, o = i && a, c = (t & 4) !== 0, u = o ? "both" : i ? "in" : "out", l, d = e.inert, h = e.style.overflow, f, m;
  function v() {
    return ea(() => l ?? (l = n()(e, (r == null ? void 0 : r()) ?? /** @type {P} */
    {}, {
      direction: u
    })));
  }
  var g = {
    is_global: c,
    in() {
      var I;
      if (e.inert = d, !i) {
        m == null || m.abort(), (I = m == null ? void 0 : m.reset) == null || I.call(m);
        return;
      }
      a || f == null || f.abort(), za(e, "introstart"), f = po(e, v(), m, 1, () => {
        za(e, "introend"), f == null || f.abort(), f = l = void 0, e.style.overflow = h;
      });
    },
    out(I) {
      if (!a) {
        I == null || I(), l = void 0;
        return;
      }
      e.inert = !0, za(e, "outrostart"), m = po(e, v(), f, 0, () => {
        za(e, "outroend"), I == null || I();
      });
    },
    stop: () => {
      f == null || f.abort(), m == null || m.abort();
    }
  }, b = (
    /** @type {Effect} */
    je
  );
  if ((b.transitions ?? (b.transitions = [])).push(g), i && mo) {
    var y = c;
    if (!y) {
      for (var A = (
        /** @type {Effect | null} */
        b.parent
      ); A && A.f & Pr; )
        for (; (A = A.parent) && !(A.f & Mr); )
          ;
      y = !A || (A.f & Ro) !== 0;
    }
    y && vi(() => {
      Fn(() => g.in());
    });
  }
}
function po(t, e, n, r, i) {
  var a = r === 1;
  if (wi(e)) {
    var o, c = !1;
    return hr(() => {
      if (!c) {
        var b = e({ direction: a ? "in" : "out" });
        o = po(t, b, n, r, i);
      }
    }), {
      abort: () => {
        c = !0, o == null || o.abort();
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
  const { delay: u = 0, css: l, tick: d, easing: h = lh } = e;
  var f = [];
  if (a && n === void 0 && (d && d(0, 1), l)) {
    var m = Tl(l(0, 1));
    f.push(m, m);
  }
  var v = () => 1 - r, g = t.animate(f, { duration: u, fill: "forwards" });
  return g.onfinish = () => {
    g.cancel();
    var b = (n == null ? void 0 : n.t()) ?? 1 - r;
    n == null || n.abort();
    var y = r - b, A = (
      /** @type {number} */
      e.duration * Math.abs(y)
    ), I = [];
    if (A > 0) {
      var _ = !1;
      if (l)
        for (var E = Math.ceil(A / 16.666666666666668), C = 0; C <= E; C += 1) {
          var T = b + y * h(C / E), x = Tl(l(T, 1 - T));
          I.push(x), _ || (_ = x.overflow === "hidden");
        }
      _ && (t.style.overflow = "hidden"), v = () => {
        var S = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          g.currentTime
        );
        return b + y * h(S / A);
      }, d && oh(() => {
        if (g.playState !== "running") return !1;
        var S = v();
        return d(S, 1 - S), !0;
      });
    }
    g = t.animate(I, { duration: A, fill: "forwards" }), g.onfinish = () => {
      v = () => r, d == null || d(r, 1 - r), i();
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
    t: () => v()
  };
}
function Ca(t, e, n = e) {
  var r = /* @__PURE__ */ new WeakSet();
  Yu(t, "input", async (i) => {
    var a = i ? t.defaultValue : t.value;
    if (a = Ko(t) ? Yo(a) : a, n(a), st !== null && r.add(st), await uc(), a !== (a = e())) {
      var o = t.selectionStart, c = t.selectionEnd, u = t.value.length;
      if (t.value = a ?? "", c !== null) {
        var l = t.value.length;
        o === c && c === u && l > u ? (t.selectionStart = l, t.selectionEnd = l) : (t.selectionStart = o, t.selectionEnd = Math.min(c, l));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Fn(e) == null && t.value && (n(Ko(t) ? Yo(t.value) : t.value), st !== null && r.add(st)), Ua(() => {
    var i = e();
    if (t === document.activeElement) {
      var a = (
        /** @type {Batch} */
        ro ?? st
      );
      if (r.has(a))
        return;
    }
    Ko(t) && i === Yo(t.value) || t.type === "date" && !i && !t.value || i !== t.value && (t.value = i ?? "");
  });
}
function ch(t, e, n = e) {
  Yu(t, "change", (r) => {
    var i = r ? t.defaultChecked : t.checked;
    n(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  // If defaultChecked is set, then checked == defaultChecked
  Fn(e) == null && n(t.checked), Ua(() => {
    var r = e();
    t.checked = !!r;
  });
}
function Ko(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function Yo(t) {
  return t === "" ? null : +t;
}
function wl(t, e) {
  return t === e || (t == null ? void 0 : t[Yn]) === e;
}
function Ee(t = {}, e, n, r) {
  return vi(() => {
    var i, a;
    return Ua(() => {
      i = a, a = (r == null ? void 0 : r()) || [], Fn(() => {
        t !== n(...a) && (e(t, ...a), i && wl(n(...i), t) && e(null, ...i));
      });
    }), () => {
      hr(() => {
        a && wl(n(...a), t) && e(null, ...a);
      });
    };
  }), t;
}
function dh(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    lt
  ), n = e.l.u;
  if (!n) return;
  let r = () => dc(e.s);
  if (t) {
    let i = 0, a = (
      /** @type {Record<string, any>} */
      {}
    );
    const o = /* @__PURE__ */ Na(() => {
      let c = !1;
      const u = e.s;
      for (const l in u)
        u[l] !== a[l] && (a[l] = u[l], c = !0);
      return c && i++, i;
    });
    r = () => s(o);
  }
  n.b.length && Ju(() => {
    Ll(e, r), fo(n.b);
  }), Te(() => {
    const i = Fn(() => n.m.map(jd));
    return () => {
      for (const a of i)
        typeof a == "function" && a();
    };
  }), n.a.length && Te(() => {
    Ll(e, r), fo(n.a);
  });
}
function Ll(t, e) {
  if (t.l.s)
    for (const n of t.l.s) s(n);
  e();
}
function Xs(t, e, n) {
  if (t == null)
    return e(void 0), n && n(void 0), pe;
  const r = Fn(
    () => t.subscribe(
      e,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const Ci = [];
function fh(t, e) {
  return {
    subscribe: tn(t, e).subscribe
  };
}
function tn(t, e = pe) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function i(c) {
    if (Bs(t, c) && (t = c, n)) {
      const u = !Ci.length;
      for (const l of r)
        l[1](), Ci.push(l, t);
      if (u) {
        for (let l = 0; l < Ci.length; l += 2)
          Ci[l][0](Ci[l + 1]);
        Ci.length = 0;
      }
    }
  }
  function a(c) {
    i(c(
      /** @type {T} */
      t
    ));
  }
  function o(c, u = pe) {
    const l = [c, u];
    return r.add(l), r.size === 1 && (n = e(i, a) || pe), c(
      /** @type {T} */
      t
    ), () => {
      r.delete(l), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: a, subscribe: o };
}
function ta(t, e, n) {
  const r = !Array.isArray(t), i = r ? [t] : t;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = e.length < 2;
  return fh(n, (o, c) => {
    let u = !1;
    const l = [];
    let d = 0, h = pe;
    const f = () => {
      if (d)
        return;
      h();
      const v = e(r ? l[0] : l, o, c);
      a ? o(v) : h = typeof v == "function" ? v : pe;
    }, m = i.map(
      (v, g) => Xs(
        v,
        (b) => {
          l[g] = b, d &= ~(1 << g), u && f();
        },
        () => {
          d |= 1 << g;
        }
      )
    );
    return u = !0, f(), function() {
      fo(m), h(), u = !1;
    };
  });
}
function hh(t) {
  let e;
  return Xs(t, (n) => e = n)(), e;
}
let Xa = !1, ys = Symbol();
function Zn(t, e, n) {
  const r = n[e] ?? (n[e] = {
    store: null,
    source: /* @__PURE__ */ ju(void 0),
    unsubscribe: pe
  });
  if (r.store !== t && !(ys in n))
    if (r.unsubscribe(), r.store = t ?? null, t == null)
      r.source.v = void 0, r.unsubscribe = pe;
    else {
      var i = !0;
      r.unsubscribe = Xs(t, (a) => {
        i ? r.source.v = a : z(r.source, a);
      }), i = !1;
    }
  return t && ys in n ? hh(t) : s(r.source);
}
function ui(t, e) {
  return t.set(e), e;
}
function pr() {
  const t = {};
  function e() {
    Po(() => {
      for (var n in t)
        t[n].unsubscribe();
      co(t, ys, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [t, e];
}
function vh(t) {
  var e = Xa;
  try {
    return Xa = !1, [t(), Xa];
  } finally {
    Xa = e;
  }
}
const mh = {
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
function qe(t, e, n) {
  return new Proxy(
    { props: t, exclude: e },
    mh
  );
}
const gh = {
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
      const a = Tr(i, e);
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
        const i = Tr(r, e);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(t, e) {
    if (e === Yn || e === Ou) return !1;
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
  return new Proxy({ props: t }, gh);
}
function p(t, e, n, r) {
  var I;
  var i = !$i || (n & 2) !== 0, a = (n & 8) !== 0, o = (n & 16) !== 0, c = (
    /** @type {V} */
    r
  ), u = !0, l = () => (u && (u = !1, c = o ? Fn(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), c), d;
  if (a) {
    var h = Yn in t || Ou in t;
    d = ((I = Tr(t, e)) == null ? void 0 : I.set) ?? (h && e in t ? (_) => t[e] = _ : void 0);
  }
  var f, m = !1;
  a ? [f, m] = vh(() => (
    /** @type {V} */
    t[e]
  )) : f = /** @type {V} */
  t[e], f === void 0 && r !== void 0 && (f = l(), d && (i && Qd(), d(f)));
  var v;
  if (i ? v = () => {
    var _ = (
      /** @type {V} */
      t[e]
    );
    return _ === void 0 ? l() : (u = !0, _);
  } : v = () => {
    var _ = (
      /** @type {V} */
      t[e]
    );
    return _ !== void 0 && (c = /** @type {V} */
    void 0), _ === void 0 ? c : _;
  }, i && !(n & 4))
    return v;
  if (d) {
    var g = t.$$legacy;
    return (
      /** @type {() => V} */
      function(_, E) {
        return arguments.length > 0 ? ((!i || !E || g || m) && d(E ? v() : _), _) : v();
      }
    );
  }
  var b = !1, y = (n & 1 ? Na : Fs)(() => (b = !1, v()));
  a && s(y);
  var A = (
    /** @type {Effect} */
    je
  );
  return (
    /** @type {() => V} */
    function(_, E) {
      if (arguments.length > 0) {
        const C = E ? s(y) : i && a ? ce(_) : _;
        return z(y, C), b = !0, c !== void 0 && (c = C), _;
      }
      return mi && b || A.f & hi ? y.v : s(y);
    }
  );
}
const ph = "5";
var Cu;
typeof window < "u" && ((Cu = window.__svelte ?? (window.__svelte = {})).v ?? (Cu.v = /* @__PURE__ */ new Set())).add(ph);
function bh(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var _h = function(e) {
  return yh(e) && !Ih(e);
};
function yh(t) {
  return !!t && typeof t == "object";
}
function Ih(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || Ah(t);
}
var Eh = typeof Symbol == "function" && Symbol.for, Sh = Eh ? Symbol.for("react.element") : 60103;
function Ah(t) {
  return t.$$typeof === Sh;
}
function Ch(t) {
  return Array.isArray(t) ? [] : {};
}
function xa(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? Xi(Ch(t), t, e) : t;
}
function xh(t, e, n) {
  return t.concat(e).map(function(r) {
    return xa(r, n);
  });
}
function Th(t, e) {
  if (!e.customMerge)
    return Xi;
  var n = e.customMerge(t);
  return typeof n == "function" ? n : Xi;
}
function wh(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function Ol(t) {
  return Object.keys(t).concat(wh(t));
}
function Ec(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function Lh(t, e) {
  return Ec(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function Oh(t, e, n) {
  var r = {};
  return n.isMergeableObject(t) && Ol(t).forEach(function(i) {
    r[i] = xa(t[i], n);
  }), Ol(e).forEach(function(i) {
    Lh(t, i) || (Ec(t, i) && n.isMergeableObject(e[i]) ? r[i] = Th(i, n)(t[i], e[i], n) : r[i] = xa(e[i], n));
  }), r;
}
function Xi(t, e, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || xh, n.isMergeableObject = n.isMergeableObject || _h, n.cloneUnlessOtherwiseSpecified = xa;
  var r = Array.isArray(e), i = Array.isArray(t), a = r === i;
  return a ? r ? n.arrayMerge(t, e, n) : Oh(t, e, n) : xa(e, n);
}
Xi.all = function(e, n) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(r, i) {
    return Xi(r, i, n);
  }, {});
};
var Rh = Xi, Mh = Rh;
const Dh = /* @__PURE__ */ bh(Mh);
var Is = function(t, e) {
  return Is = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, Is(t, e);
};
function Ve(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Is(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
var ue = function() {
  return ue = Object.assign || function(e) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ue.apply(this, arguments);
};
function Ph(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  return n;
}
function Sc(t, e, n, r) {
  function i(a) {
    return a instanceof n ? a : new n(function(o) {
      o(a);
    });
  }
  return new (n || (n = Promise))(function(a, o) {
    function c(d) {
      try {
        l(r.next(d));
      } catch (h) {
        o(h);
      }
    }
    function u(d) {
      try {
        l(r.throw(d));
      } catch (h) {
        o(h);
      }
    }
    function l(d) {
      d.done ? a(d.value) : i(d.value).then(c, u);
    }
    l((r = r.apply(t, e || [])).next());
  });
}
function Ks(t, e) {
  var n = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, i, a, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return o.next = c(0), o.throw = c(1), o.return = c(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function c(l) {
    return function(d) {
      return u([l, d]);
    };
  }
  function u(l) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, l[0] && (n = 0)), n; ) try {
      if (r = 1, i && (a = l[0] & 2 ? i.return : l[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, l[1])).done) return a;
      switch (i = 0, a && (l = [l[0] & 2, a.value]), l[0]) {
        case 0:
        case 1:
          a = l;
          break;
        case 4:
          return n.label++, { value: l[1], done: !1 };
        case 5:
          n.label++, i = l[1], l = [0];
          continue;
        case 7:
          l = n.ops.pop(), n.trys.pop();
          continue;
        default:
          if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (l[0] === 6 || l[0] === 2)) {
            n = 0;
            continue;
          }
          if (l[0] === 3 && (!a || l[1] > a[0] && l[1] < a[3])) {
            n.label = l[1];
            break;
          }
          if (l[0] === 6 && n.label < a[1]) {
            n.label = a[1], a = l;
            break;
          }
          if (a && n.label < a[2]) {
            n.label = a[2], n.ops.push(l);
            break;
          }
          a[2] && n.ops.pop(), n.trys.pop();
          continue;
      }
      l = e.call(t, n);
    } catch (d) {
      l = [6, d], i = 0;
    } finally {
      r = a = 0;
    }
    if (l[0] & 5) throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
function Ht(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, n = e && t[e], r = 0;
  if (n) return n.call(t);
  if (t && typeof t.length == "number") return {
    next: function() {
      return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function vr(t, e) {
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
function Qn(t, e, n) {
  if (n || arguments.length === 2) for (var r = 0, i = e.length, a; r < i; r++)
    (a || !(r in e)) && (a || (a = Array.prototype.slice.call(e, 0, r)), a[r] = e[r]);
  return t.concat(a || Array.prototype.slice.call(e));
}
function Pi(t) {
  return this instanceof Pi ? (this.v = t, this) : new Pi(t);
}
function Nh(t, e, n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(t, e || []), i, a = [];
  return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), c("next"), c("throw"), c("return", o), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function o(m) {
    return function(v) {
      return Promise.resolve(v).then(m, h);
    };
  }
  function c(m, v) {
    r[m] && (i[m] = function(g) {
      return new Promise(function(b, y) {
        a.push([m, g, b, y]) > 1 || u(m, g);
      });
    }, v && (i[m] = v(i[m])));
  }
  function u(m, v) {
    try {
      l(r[m](v));
    } catch (g) {
      f(a[0][3], g);
    }
  }
  function l(m) {
    m.value instanceof Pi ? Promise.resolve(m.value.v).then(d, h) : f(a[0][2], m);
  }
  function d(m) {
    u("next", m);
  }
  function h(m) {
    u("throw", m);
  }
  function f(m, v) {
    m(v), a.shift(), a.length && u(a[0][0], a[0][1]);
  }
}
function Hh(t) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], n;
  return e ? e.call(t) : (t = typeof Ht == "function" ? Ht(t) : t[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n);
  function r(a) {
    n[a] = t[a] && function(o) {
      return new Promise(function(c, u) {
        o = t[a](o), i(c, u, o.done, o.value);
      });
    };
  }
  function i(a, o, c, u) {
    Promise.resolve(u).then(function(l) {
      a({ value: l, done: c });
    }, o);
  }
}
function Zo(t, e) {
  var n = e && e.cache ? e.cache : jh, r = e && e.serializer ? e.serializer : Vh, i = e && e.strategy ? e.strategy : Bh;
  return i(t, {
    cache: n,
    serializer: r
  });
}
function Uh(t) {
  return t == null || typeof t == "number" || typeof t == "boolean";
}
function kh(t, e, n, r) {
  var i = Uh(r) ? r : n(r), a = e.get(i);
  return typeof a > "u" && (a = t.call(this, r), e.set(i, a)), a;
}
function Ac(t, e, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = e.get(i);
  return typeof a > "u" && (a = t.apply(this, r), e.set(i, a)), a;
}
function Cc(t, e, n, r, i) {
  return n.bind(e, t, r, i);
}
function Bh(t, e) {
  var n = t.length === 1 ? kh : Ac;
  return Cc(t, this, n, e.cache.create(), e.serializer);
}
function Fh(t, e) {
  return Cc(t, this, Ac, e.cache.create(), e.serializer);
}
var Vh = function() {
  return JSON.stringify(arguments);
}, Gh = (
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
), jh = {
  create: function() {
    return new Gh();
  }
}, Qo = {
  variadic: Fh
}, Ye;
(function(t) {
  t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", t[t.INVALID_TAG = 23] = "INVALID_TAG", t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(Ye || (Ye = {}));
var vt;
(function(t) {
  t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag";
})(vt || (vt = {}));
var Ki;
(function(t) {
  t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime";
})(Ki || (Ki = {}));
function Rl(t) {
  return t.type === vt.literal;
}
function Wh(t) {
  return t.type === vt.argument;
}
function xc(t) {
  return t.type === vt.number;
}
function Tc(t) {
  return t.type === vt.date;
}
function wc(t) {
  return t.type === vt.time;
}
function Lc(t) {
  return t.type === vt.select;
}
function Oc(t) {
  return t.type === vt.plural;
}
function qh(t) {
  return t.type === vt.pound;
}
function Rc(t) {
  return t.type === vt.tag;
}
function Mc(t) {
  return !!(t && typeof t == "object" && t.type === Ki.number);
}
function Es(t) {
  return !!(t && typeof t == "object" && t.type === Ki.dateTime);
}
var Dc = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, zh = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Xh(t) {
  var e = {};
  return t.replace(zh, function(n) {
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
var Kh = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Yh(t) {
  if (t.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var e = t.split(Kh).filter(function(f) {
    return f.length > 0;
  }), n = [], r = 0, i = e; r < i.length; r++) {
    var a = i[r], o = a.split("/");
    if (o.length === 0)
      throw new Error("Invalid number skeleton");
    for (var c = o[0], u = o.slice(1), l = 0, d = u; l < d.length; l++) {
      var h = d[l];
      if (h.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: c, options: u });
  }
  return n;
}
function Zh(t) {
  return t.replace(/^(.*?)-/, "");
}
var Ml = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Pc = /^(@+)?(\+|#+)?[rs]?$/g, Qh = /(\*)(0+)|(#+)(0+)|(0+)/g, Nc = /^(0+)$/;
function Dl(t) {
  var e = {};
  return t[t.length - 1] === "r" ? e.roundingPriority = "morePrecision" : t[t.length - 1] === "s" && (e.roundingPriority = "lessPrecision"), t.replace(Pc, function(n, r, i) {
    return typeof i != "string" ? (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length) : i === "+" ? e.minimumSignificantDigits = r.length : r[0] === "#" ? e.maximumSignificantDigits = r.length : (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), e;
}
function Hc(t) {
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
function Jh(t) {
  var e;
  if (t[0] === "E" && t[1] === "E" ? (e = {
    notation: "engineering"
  }, t = t.slice(2)) : t[0] === "E" && (e = {
    notation: "scientific"
  }, t = t.slice(1)), e) {
    var n = t.slice(0, 2);
    if (n === "+!" ? (e.signDisplay = "always", t = t.slice(2)) : n === "+?" && (e.signDisplay = "exceptZero", t = t.slice(2)), !Nc.test(t))
      throw new Error("Malformed concise eng/scientific notation");
    e.minimumIntegerDigits = t.length;
  }
  return e;
}
function Pl(t) {
  var e = {}, n = Hc(t);
  return n || e;
}
function $h(t) {
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
        e.style = "unit", e.unit = Zh(i.options[0]);
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
        e = ue(ue(ue({}, e), { notation: "scientific" }), i.options.reduce(function(u, l) {
          return ue(ue({}, u), Pl(l));
        }, {}));
        continue;
      case "engineering":
        e = ue(ue(ue({}, e), { notation: "engineering" }), i.options.reduce(function(u, l) {
          return ue(ue({}, u), Pl(l));
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
        i.options[0].replace(Qh, function(u, l, d, h, f, m) {
          if (l)
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
    if (Nc.test(i.stem)) {
      e.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (Ml.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(Ml, function(u, l, d, h, f, m) {
        return d === "*" ? e.minimumFractionDigits = l.length : h && h[0] === "#" ? e.maximumFractionDigits = h.length : f && m ? (e.minimumFractionDigits = f.length, e.maximumFractionDigits = f.length + m.length) : (e.minimumFractionDigits = l.length, e.maximumFractionDigits = l.length), "";
      });
      var a = i.options[0];
      a === "w" ? e = ue(ue({}, e), { trailingZeroDisplay: "stripIfInteger" }) : a && (e = ue(ue({}, e), Dl(a)));
      continue;
    }
    if (Pc.test(i.stem)) {
      e = ue(ue({}, e), Dl(i.stem));
      continue;
    }
    var o = Hc(i.stem);
    o && (e = ue(ue({}, e), o));
    var c = Jh(i.stem);
    c && (e = ue(ue({}, e), c));
  }
  return e;
}
var Ka = {
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
function ev(t, e) {
  for (var n = "", r = 0; r < t.length; r++) {
    var i = t.charAt(r);
    if (i === "j") {
      for (var a = 0; r + 1 < t.length && t.charAt(r + 1) === i; )
        a++, r++;
      var o = 1 + (a & 1), c = a < 2 ? 1 : 3 + (a >> 1), u = "a", l = tv(e);
      for ((l == "H" || l == "k") && (c = 0); c-- > 0; )
        n += u;
      for (; o-- > 0; )
        n = l + n;
    } else i === "J" ? n += "H" : n += i;
  }
  return n;
}
function tv(t) {
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
  var i = Ka[r || ""] || Ka[n || ""] || Ka["".concat(n, "-001")] || Ka["001"];
  return i[0];
}
var Jo, nv = new RegExp("^".concat(Dc.source, "*")), rv = new RegExp("".concat(Dc.source, "*$"));
function Ze(t, e) {
  return { start: t, end: e };
}
var iv = !!String.prototype.startsWith && "_a".startsWith("a", 1), av = !!String.fromCodePoint, ov = !!Object.fromEntries, sv = !!String.prototype.codePointAt, lv = !!String.prototype.trimStart, uv = !!String.prototype.trimEnd, cv = !!Number.isSafeInteger, dv = cv ? Number.isSafeInteger : function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991;
}, Ss = !0;
try {
  var fv = kc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Ss = ((Jo = fv.exec("a")) === null || Jo === void 0 ? void 0 : Jo[0]) === "a";
} catch {
  Ss = !1;
}
var Nl = iv ? (
  // Native
  function(e, n, r) {
    return e.startsWith(n, r);
  }
) : (
  // For IE11
  function(e, n, r) {
    return e.slice(r, r + n.length) === n;
  }
), As = av ? String.fromCodePoint : (
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
), Hl = (
  // native
  ov ? Object.fromEntries : (
    // Ponyfill
    function(e) {
      for (var n = {}, r = 0, i = e; r < i.length; r++) {
        var a = i[r], o = a[0], c = a[1];
        n[o] = c;
      }
      return n;
    }
  )
), Uc = sv ? (
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
), hv = lv ? (
  // Native
  function(e) {
    return e.trimStart();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(nv, "");
  }
), vv = uv ? (
  // Native
  function(e) {
    return e.trimEnd();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(rv, "");
  }
);
function kc(t, e) {
  return new RegExp(t, e);
}
var Cs;
if (Ss) {
  var Ul = kc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Cs = function(e, n) {
    var r;
    Ul.lastIndex = n;
    var i = Ul.exec(e);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  Cs = function(e, n) {
    for (var r = []; ; ) {
      var i = Uc(e, n);
      if (i === void 0 || Bc(i) || bv(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return As.apply(void 0, r);
  };
var mv = (
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
              type: vt.pound,
              location: Ze(c, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(Ye.UNMATCHED_CLOSING_TAG, Ze(this.clonePosition(), this.clonePosition()));
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
        var o = a.val, c = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !xs(this.char()))
            return this.error(Ye.INVALID_TAG, Ze(c, this.clonePosition()));
          var u = this.clonePosition(), l = this.parseTagName();
          return i !== l ? this.error(Ye.UNMATCHED_CLOSING_TAG, Ze(u, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: vt.tag,
              value: i,
              children: o,
              location: Ze(r, this.clonePosition())
            },
            err: null
          } : this.error(Ye.INVALID_TAG, Ze(c, this.clonePosition())));
        } else
          return this.error(Ye.UNCLOSED_TAG, Ze(r, this.clonePosition()));
      } else
        return this.error(Ye.INVALID_TAG, Ze(r, this.clonePosition()));
    }, t.prototype.parseTagName = function() {
      var e = this.offset();
      for (this.bump(); !this.isEOF() && pv(this.char()); )
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
      var u = Ze(r, this.clonePosition());
      return {
        val: { type: vt.literal, value: i, location: u },
        err: null
      };
    }, t.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !gv(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      return As.apply(void 0, n);
    }, t.prototype.tryParseUnquoted = function(e, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && e > 0 ? null : (this.bump(), As(r));
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
      var e = this.clonePosition(), n = this.offset(), r = Cs(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var a = this.clonePosition(), o = Ze(e, a);
      return { value: r, location: o };
    }, t.prototype.parseArgumentOptions = function(e, n, r, i) {
      var a, o = this.clonePosition(), c = this.parseIdentifierIfPossible().value, u = this.clonePosition();
      switch (c) {
        case "":
          return this.error(Ye.EXPECT_ARGUMENT_TYPE, Ze(o, u));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var l = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var d = this.clonePosition(), h = this.parseSimpleArgStyleIfPossible();
            if (h.err)
              return h;
            var f = vv(h.val);
            if (f.length === 0)
              return this.error(Ye.EXPECT_ARGUMENT_STYLE, Ze(this.clonePosition(), this.clonePosition()));
            var m = Ze(d, this.clonePosition());
            l = { style: f, styleLocation: m };
          }
          var v = this.tryParseArgumentClose(i);
          if (v.err)
            return v;
          var g = Ze(i, this.clonePosition());
          if (l && Nl(l == null ? void 0 : l.style, "::", 0)) {
            var b = hv(l.style.slice(2));
            if (c === "number") {
              var h = this.parseNumberSkeletonFromString(b, l.styleLocation);
              return h.err ? h : {
                val: { type: vt.number, value: r, location: g, style: h.val },
                err: null
              };
            } else {
              if (b.length === 0)
                return this.error(Ye.EXPECT_DATE_TIME_SKELETON, g);
              var y = b;
              this.locale && (y = ev(b, this.locale));
              var f = {
                type: Ki.dateTime,
                pattern: y,
                location: l.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Xh(y) : {}
              }, A = c === "date" ? vt.date : vt.time;
              return {
                val: { type: A, value: r, location: g, style: f },
                err: null
              };
            }
          }
          return {
            val: {
              type: c === "number" ? vt.number : c === "date" ? vt.date : vt.time,
              value: r,
              location: g,
              style: (a = l == null ? void 0 : l.style) !== null && a !== void 0 ? a : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var I = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(Ye.EXPECT_SELECT_ARGUMENT_OPTIONS, Ze(I, ue({}, I)));
          this.bumpSpace();
          var _ = this.parseIdentifierIfPossible(), E = 0;
          if (c !== "select" && _.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(Ye.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Ze(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var h = this.tryParseDecimalInteger(Ye.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Ye.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (h.err)
              return h;
            this.bumpSpace(), _ = this.parseIdentifierIfPossible(), E = h.val;
          }
          var C = this.tryParsePluralOrSelectOptions(e, c, n, _);
          if (C.err)
            return C;
          var v = this.tryParseArgumentClose(i);
          if (v.err)
            return v;
          var T = Ze(i, this.clonePosition());
          return c === "select" ? {
            val: {
              type: vt.select,
              value: r,
              options: Hl(C.val),
              location: T
            },
            err: null
          } : {
            val: {
              type: vt.plural,
              value: r,
              options: Hl(C.val),
              offset: E,
              pluralType: c === "plural" ? "cardinal" : "ordinal",
              location: T
            },
            err: null
          };
        }
        default:
          return this.error(Ye.INVALID_ARGUMENT_TYPE, Ze(o, u));
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
        r = Yh(e);
      } catch {
        return this.error(Ye.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: Ki.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? $h(r) : {}
        },
        err: null
      };
    }, t.prototype.tryParsePluralOrSelectOptions = function(e, n, r, i) {
      for (var a, o = !1, c = [], u = /* @__PURE__ */ new Set(), l = i.value, d = i.location; ; ) {
        if (l.length === 0) {
          var h = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var f = this.tryParseDecimalInteger(Ye.EXPECT_PLURAL_ARGUMENT_SELECTOR, Ye.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (f.err)
              return f;
            d = Ze(h, this.clonePosition()), l = this.message.slice(h.offset, this.offset());
          } else
            break;
        }
        if (u.has(l))
          return this.error(n === "select" ? Ye.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Ye.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, d);
        l === "other" && (o = !0), this.bumpSpace();
        var m = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? Ye.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Ye.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Ze(this.clonePosition(), this.clonePosition()));
        var v = this.parseMessage(e + 1, n, r);
        if (v.err)
          return v;
        var g = this.tryParseArgumentClose(m);
        if (g.err)
          return g;
        c.push([
          l,
          {
            value: v.val,
            location: Ze(m, this.clonePosition())
          }
        ]), u.add(l), this.bumpSpace(), a = this.parseIdentifierIfPossible(), l = a.value, d = a.location;
      }
      return c.length === 0 ? this.error(n === "select" ? Ye.EXPECT_SELECT_ARGUMENT_SELECTOR : Ye.EXPECT_PLURAL_ARGUMENT_SELECTOR, Ze(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(Ye.MISSING_OTHER_CLAUSE, Ze(this.clonePosition(), this.clonePosition())) : { val: c, err: null };
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
      var u = Ze(i, this.clonePosition());
      return a ? (o *= r, dv(o) ? { val: o, err: null } : this.error(n, u)) : this.error(e, u);
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
      var n = Uc(this.message, e);
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
      if (Nl(this.message, e, this.offset())) {
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
      for (; !this.isEOF() && Bc(this.char()); )
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
function gv(t) {
  return xs(t) || t === 47;
}
function pv(t) {
  return t === 45 || t === 46 || t >= 48 && t <= 57 || t === 95 || t >= 97 && t <= 122 || t >= 65 && t <= 90 || t == 183 || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039;
}
function Bc(t) {
  return t >= 9 && t <= 13 || t === 32 || t === 133 || t >= 8206 && t <= 8207 || t === 8232 || t === 8233;
}
function bv(t) {
  return t >= 33 && t <= 35 || t === 36 || t >= 37 && t <= 39 || t === 40 || t === 41 || t === 42 || t === 43 || t === 44 || t === 45 || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || t === 91 || t === 92 || t === 93 || t === 94 || t === 96 || t === 123 || t === 124 || t === 125 || t === 126 || t === 161 || t >= 162 && t <= 165 || t === 166 || t === 167 || t === 169 || t === 171 || t === 172 || t === 174 || t === 176 || t === 177 || t === 182 || t === 187 || t === 191 || t === 215 || t === 247 || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || t === 8216 || t === 8217 || t === 8218 || t >= 8219 && t <= 8220 || t === 8221 || t === 8222 || t === 8223 || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || t === 8249 || t === 8250 || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || t === 8260 || t === 8261 || t === 8262 || t >= 8263 && t <= 8273 || t === 8274 || t === 8275 || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || t === 8608 || t >= 8609 && t <= 8610 || t === 8611 || t >= 8612 && t <= 8613 || t === 8614 || t >= 8615 && t <= 8621 || t === 8622 || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || t === 8658 || t === 8659 || t === 8660 || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || t === 8968 || t === 8969 || t === 8970 || t === 8971 || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9e3 || t === 9001 || t === 9002 || t >= 9003 && t <= 9083 || t === 9084 || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || t === 9655 || t >= 9656 && t <= 9664 || t === 9665 || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || t === 9839 || t >= 9840 && t <= 10087 || t === 10088 || t === 10089 || t === 10090 || t === 10091 || t === 10092 || t === 10093 || t === 10094 || t === 10095 || t === 10096 || t === 10097 || t === 10098 || t === 10099 || t === 10100 || t === 10101 || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || t === 10181 || t === 10182 || t >= 10183 && t <= 10213 || t === 10214 || t === 10215 || t === 10216 || t === 10217 || t === 10218 || t === 10219 || t === 10220 || t === 10221 || t === 10222 || t === 10223 || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || t === 10627 || t === 10628 || t === 10629 || t === 10630 || t === 10631 || t === 10632 || t === 10633 || t === 10634 || t === 10635 || t === 10636 || t === 10637 || t === 10638 || t === 10639 || t === 10640 || t === 10641 || t === 10642 || t === 10643 || t === 10644 || t === 10645 || t === 10646 || t === 10647 || t === 10648 || t >= 10649 && t <= 10711 || t === 10712 || t === 10713 || t === 10714 || t === 10715 || t >= 10716 && t <= 10747 || t === 10748 || t === 10749 || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || t === 11158 || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || t === 11778 || t === 11779 || t === 11780 || t === 11781 || t >= 11782 && t <= 11784 || t === 11785 || t === 11786 || t === 11787 || t === 11788 || t === 11789 || t >= 11790 && t <= 11798 || t === 11799 || t >= 11800 && t <= 11801 || t === 11802 || t === 11803 || t === 11804 || t === 11805 || t >= 11806 && t <= 11807 || t === 11808 || t === 11809 || t === 11810 || t === 11811 || t === 11812 || t === 11813 || t === 11814 || t === 11815 || t === 11816 || t === 11817 || t >= 11818 && t <= 11822 || t === 11823 || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || t === 11840 || t === 11841 || t === 11842 || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || t === 11858 || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || t === 12296 || t === 12297 || t === 12298 || t === 12299 || t === 12300 || t === 12301 || t === 12302 || t === 12303 || t === 12304 || t === 12305 || t >= 12306 && t <= 12307 || t === 12308 || t === 12309 || t === 12310 || t === 12311 || t === 12312 || t === 12313 || t === 12314 || t === 12315 || t === 12316 || t === 12317 || t >= 12318 && t <= 12319 || t === 12320 || t === 12336 || t === 64830 || t === 64831 || t >= 65093 && t <= 65094;
}
function Ts(t) {
  t.forEach(function(e) {
    if (delete e.location, Lc(e) || Oc(e))
      for (var n in e.options)
        delete e.options[n].location, Ts(e.options[n].value);
    else xc(e) && Mc(e.style) || (Tc(e) || wc(e)) && Es(e.style) ? delete e.style.location : Rc(e) && Ts(e.children);
  });
}
function _v(t, e) {
  e === void 0 && (e = {}), e = ue({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e);
  var n = new mv(t, e).parse();
  if (n.err) {
    var r = SyntaxError(Ye[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return e != null && e.captureLocation || Ts(n.val), n.val;
}
var Yi;
(function(t) {
  t.MISSING_VALUE = "MISSING_VALUE", t.INVALID_VALUE = "INVALID_VALUE", t.MISSING_INTL_API = "MISSING_INTL_API";
})(Yi || (Yi = {}));
var Uo = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n, r, i) {
      var a = t.call(this, n) || this;
      return a.code = r, a.originalMessage = i, a;
    }
    return e.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, e;
  }(Error)
), kl = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n, r, i, a) {
      return t.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), Yi.INVALID_VALUE, a) || this;
    }
    return e;
  }(Uo)
), yv = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n, r, i) {
      return t.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), Yi.INVALID_VALUE, i) || this;
    }
    return e;
  }(Uo)
), Iv = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n, r) {
      return t.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), Yi.MISSING_VALUE, r) || this;
    }
    return e;
  }(Uo)
), Zt;
(function(t) {
  t[t.literal = 0] = "literal", t[t.object = 1] = "object";
})(Zt || (Zt = {}));
function Ev(t) {
  return t.length < 2 ? t : t.reduce(function(e, n) {
    var r = e[e.length - 1];
    return !r || r.type !== Zt.literal || n.type !== Zt.literal ? e.push(n) : r.value += n.value, e;
  }, []);
}
function Sv(t) {
  return typeof t == "function";
}
function so(t, e, n, r, i, a, o) {
  if (t.length === 1 && Rl(t[0]))
    return [
      {
        type: Zt.literal,
        value: t[0].value
      }
    ];
  for (var c = [], u = 0, l = t; u < l.length; u++) {
    var d = l[u];
    if (Rl(d)) {
      c.push({
        type: Zt.literal,
        value: d.value
      });
      continue;
    }
    if (qh(d)) {
      typeof a == "number" && c.push({
        type: Zt.literal,
        value: n.getNumberFormat(e).format(a)
      });
      continue;
    }
    var h = d.value;
    if (!(i && h in i))
      throw new Iv(h, o);
    var f = i[h];
    if (Wh(d)) {
      (!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), c.push({
        type: typeof f == "string" ? Zt.literal : Zt.object,
        value: f
      });
      continue;
    }
    if (Tc(d)) {
      var m = typeof d.style == "string" ? r.date[d.style] : Es(d.style) ? d.style.parsedOptions : void 0;
      c.push({
        type: Zt.literal,
        value: n.getDateTimeFormat(e, m).format(f)
      });
      continue;
    }
    if (wc(d)) {
      var m = typeof d.style == "string" ? r.time[d.style] : Es(d.style) ? d.style.parsedOptions : r.time.medium;
      c.push({
        type: Zt.literal,
        value: n.getDateTimeFormat(e, m).format(f)
      });
      continue;
    }
    if (xc(d)) {
      var m = typeof d.style == "string" ? r.number[d.style] : Mc(d.style) ? d.style.parsedOptions : void 0;
      m && m.scale && (f = f * (m.scale || 1)), c.push({
        type: Zt.literal,
        value: n.getNumberFormat(e, m).format(f)
      });
      continue;
    }
    if (Rc(d)) {
      var v = d.children, g = d.value, b = i[g];
      if (!Sv(b))
        throw new yv(g, "function", o);
      var y = so(v, e, n, r, i, a), A = b(y.map(function(E) {
        return E.value;
      }));
      Array.isArray(A) || (A = [A]), c.push.apply(c, A.map(function(E) {
        return {
          type: typeof E == "string" ? Zt.literal : Zt.object,
          value: E
        };
      }));
    }
    if (Lc(d)) {
      var I = d.options[f] || d.options.other;
      if (!I)
        throw new kl(d.value, f, Object.keys(d.options), o);
      c.push.apply(c, so(I.value, e, n, r, i));
      continue;
    }
    if (Oc(d)) {
      var I = d.options["=".concat(f)];
      if (!I) {
        if (!Intl.PluralRules)
          throw new Uo(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, Yi.MISSING_INTL_API, o);
        var _ = n.getPluralRules(e, { type: d.pluralType }).select(f - (d.offset || 0));
        I = d.options[_] || d.options.other;
      }
      if (!I)
        throw new kl(d.value, f, Object.keys(d.options), o);
      c.push.apply(c, so(I.value, e, n, r, i, f - (d.offset || 0)));
      continue;
    }
  }
  return Ev(c);
}
function Av(t, e) {
  return e ? ue(ue(ue({}, t || {}), e || {}), Object.keys(t).reduce(function(n, r) {
    return n[r] = ue(ue({}, t[r]), e[r] || {}), n;
  }, {})) : t;
}
function Cv(t, e) {
  return e ? Object.keys(t).reduce(function(n, r) {
    return n[r] = Av(t[r], e[r]), n;
  }, ue({}, t)) : t;
}
function $o(t) {
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
function xv(t) {
  return t === void 0 && (t = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: Zo(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.NumberFormat).bind.apply(e, Qn([void 0], n, !1)))();
    }, {
      cache: $o(t.number),
      strategy: Qo.variadic
    }),
    getDateTimeFormat: Zo(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.DateTimeFormat).bind.apply(e, Qn([void 0], n, !1)))();
    }, {
      cache: $o(t.dateTime),
      strategy: Qo.variadic
    }),
    getPluralRules: Zo(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.PluralRules).bind.apply(e, Qn([void 0], n, !1)))();
    }, {
      cache: $o(t.pluralRules),
      strategy: Qo.variadic
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
      }, this.format = function(u) {
        var l = a.formatToParts(u);
        if (l.length === 1)
          return l[0].value;
        var d = l.reduce(function(h, f) {
          return !h.length || f.type !== Zt.literal || typeof h[h.length - 1] != "string" ? h.push(f.value) : h[h.length - 1] += f.value, h;
        }, []);
        return d.length <= 1 ? d[0] || "" : d;
      }, this.formatToParts = function(u) {
        return so(a.ast, a.locales, a.formatters, a.formats, u, void 0, a.message);
      }, this.resolvedOptions = function() {
        var u;
        return {
          locale: ((u = a.resolvedLocale) === null || u === void 0 ? void 0 : u.toString()) || Intl.NumberFormat.supportedLocalesOf(a.locales)[0]
        };
      }, this.getAst = function() {
        return a.ast;
      }, this.locales = n, this.resolvedLocale = t.resolveLocale(n), typeof e == "string") {
        if (this.message = e, !t.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        var o = i || {};
        o.formatters;
        var c = Ph(o, ["formatters"]);
        this.ast = t.__parse(e, ue(ue({}, c), { locale: this.resolvedLocale }));
      } else
        this.ast = e;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = Cv(t.formats, r), this.formatters = i && i.formatters || xv(this.formatterCache);
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
    }, t.__parse = _v, t.formats = {
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
function Tv(t, e) {
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
const xr = {}, wv = (t, e, n) => n && (e in xr || (xr[e] = {}), t in xr[e] || (xr[e][t] = n), n), Vc = (t, e) => {
  if (e == null)
    return;
  if (e in xr && t in xr[e])
    return xr[e][t];
  const n = Ba(e);
  for (let r = 0; r < n.length; r++) {
    const i = n[r], a = Ov(i, t);
    if (a)
      return wv(t, e, a);
  }
};
let Ys;
const ka = tn({});
function Lv(t) {
  return Ys[t] || null;
}
function Gc(t) {
  return t in Ys;
}
function Ov(t, e) {
  if (!Gc(t))
    return null;
  const n = Lv(t);
  return Tv(n, e);
}
function Rv(t) {
  if (t == null)
    return;
  const e = Ba(t);
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (Gc(r))
      return r;
  }
}
function jc(t, ...e) {
  delete xr[t], ka.update((n) => (n[t] = Dh.all([n[t] || {}, ...e]), n));
}
ta(
  [ka],
  ([t]) => Object.keys(t)
);
ka.subscribe((t) => Ys = t);
const lo = {};
function Mv(t, e) {
  lo[t].delete(e), lo[t].size === 0 && delete lo[t];
}
function Wc(t) {
  return lo[t];
}
function Dv(t) {
  return Ba(t).map((e) => {
    const n = Wc(e);
    return [e, n ? [...n] : []];
  }).filter(([, e]) => e.length > 0);
}
function bo(t) {
  return t == null ? !1 : Ba(t).some(
    (e) => {
      var n;
      return (n = Wc(e)) == null ? void 0 : n.size;
    }
  );
}
function Pv(t, e) {
  return Promise.all(
    e.map((r) => (Mv(t, r), r().then((i) => i.default || i)))
  ).then((r) => jc(t, ...r));
}
const da = {};
function qc(t) {
  if (!bo(t))
    return t in da ? da[t] : Promise.resolve();
  const e = Dv(t);
  return da[t] = Promise.all(
    e.map(
      ([n, r]) => Pv(n, r)
    )
  ).then(() => {
    if (bo(t))
      return qc(t);
    delete da[t];
  }), da[t];
}
var Bl = Object.getOwnPropertySymbols, Nv = Object.prototype.hasOwnProperty, Hv = Object.prototype.propertyIsEnumerable, Uv = (t, e) => {
  var n = {};
  for (var r in t)
    Nv.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && Bl)
    for (var r of Bl(t))
      e.indexOf(r) < 0 && Hv.call(t, r) && (n[r] = t[r]);
  return n;
};
const kv = {
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
function Bv({ locale: t, id: e }) {
  console.warn(
    `[svelte-i18n] The message "${e}" was not found in "${Ba(
      t
    ).join('", "')}".${bo(Ur()) ? `

Note: there are at least one loader still registered to this locale that wasn't executed.` : ""}`
  );
}
const Fv = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: kv,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, ya = Fv;
function Zi() {
  return ya;
}
function Vv(t) {
  const e = t, { formats: n } = e, r = Uv(e, ["formats"]);
  let i = t.fallbackLocale;
  if (t.initialLocale)
    try {
      Fc.resolveLocale(t.initialLocale) && (i = t.initialLocale);
    } catch {
      console.warn(
        `[svelte-i18n] The initial locale "${t.initialLocale}" is not a valid locale.`
      );
    }
  return r.warnOnMissingMessages && (delete r.warnOnMissingMessages, r.handleMissingMessage == null ? r.handleMissingMessage = Bv : console.warn(
    '[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.'
  )), Object.assign(ya, r, { initialLocale: i }), n && ("number" in n && Object.assign(ya.formats.number, n.number), "date" in n && Object.assign(ya.formats.date, n.date), "time" in n && Object.assign(ya.formats.time, n.time)), gi.set(i);
}
const es = tn(!1);
var Gv = Object.defineProperty, jv = Object.defineProperties, Wv = Object.getOwnPropertyDescriptors, Fl = Object.getOwnPropertySymbols, qv = Object.prototype.hasOwnProperty, zv = Object.prototype.propertyIsEnumerable, Vl = (t, e, n) => e in t ? Gv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Xv = (t, e) => {
  for (var n in e || (e = {}))
    qv.call(e, n) && Vl(t, n, e[n]);
  if (Fl)
    for (var n of Fl(e))
      zv.call(e, n) && Vl(t, n, e[n]);
  return t;
}, Kv = (t, e) => jv(t, Wv(e));
let ws;
const _o = tn(null);
function Gl(t) {
  return t.split("-").map((e, n, r) => r.slice(0, n + 1).join("-")).reverse();
}
function Ba(t, e = Zi().fallbackLocale) {
  const n = Gl(t);
  return e ? [.../* @__PURE__ */ new Set([...n, ...Gl(e)])] : n;
}
function Ur() {
  return ws ?? void 0;
}
_o.subscribe((t) => {
  ws = t ?? void 0, typeof window < "u" && t != null && document.documentElement.setAttribute("lang", t);
});
const Yv = (t) => {
  if (t && Rv(t) && bo(t)) {
    const { loadingDelay: e } = Zi();
    let n;
    return typeof window < "u" && Ur() != null && e ? n = window.setTimeout(
      () => es.set(!0),
      e
    ) : es.set(!0), qc(t).then(() => {
      _o.set(t);
    }).finally(() => {
      clearTimeout(n), es.set(!1);
    });
  }
  return _o.set(t);
}, gi = Kv(Xv({}, _o), {
  set: Yv
}), Zv = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0], ko = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (r) => {
    const i = JSON.stringify(r);
    return i in e ? e[i] : e[i] = t(r);
  };
};
var Qv = Object.defineProperty, yo = Object.getOwnPropertySymbols, zc = Object.prototype.hasOwnProperty, Xc = Object.prototype.propertyIsEnumerable, jl = (t, e, n) => e in t ? Qv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Zs = (t, e) => {
  for (var n in e || (e = {}))
    zc.call(e, n) && jl(t, n, e[n]);
  if (yo)
    for (var n of yo(e))
      Xc.call(e, n) && jl(t, n, e[n]);
  return t;
}, na = (t, e) => {
  var n = {};
  for (var r in t)
    zc.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && yo)
    for (var r of yo(t))
      e.indexOf(r) < 0 && Xc.call(t, r) && (n[r] = t[r]);
  return n;
};
const Ta = (t, e) => {
  const { formats: n } = Zi();
  if (t in n && e in n[t])
    return n[t][e];
  throw new Error(`[svelte-i18n] Unknown "${e}" ${t} format.`);
}, Jv = ko(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = na(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return r && (i = Ta("number", r)), new Intl.NumberFormat(n, i);
  }
), $v = ko(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = na(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return r ? i = Ta("date", r) : Object.keys(i).length === 0 && (i = Ta("date", "short")), new Intl.DateTimeFormat(n, i);
  }
), em = ko(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = na(e, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return r ? i = Ta("time", r) : Object.keys(i).length === 0 && (i = Ta("time", "short")), new Intl.DateTimeFormat(n, i);
  }
), tm = (t = {}) => {
  var e = t, {
    locale: n = Ur()
  } = e, r = na(e, [
    "locale"
  ]);
  return Jv(Zs({ locale: n }, r));
}, nm = (t = {}) => {
  var e = t, {
    locale: n = Ur()
  } = e, r = na(e, [
    "locale"
  ]);
  return $v(Zs({ locale: n }, r));
}, rm = (t = {}) => {
  var e = t, {
    locale: n = Ur()
  } = e, r = na(e, [
    "locale"
  ]);
  return em(Zs({ locale: n }, r));
}, im = ko(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (t, e = Ur()) => new Fc(t, e, Zi().formats, {
    ignoreTag: Zi().ignoreTag
  })
), am = (t, e = {}) => {
  var n, r, i, a;
  let o = e;
  typeof t == "object" && (o = t, t = o.id);
  const {
    values: c,
    locale: u = Ur(),
    default: l
  } = o;
  if (u == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let d = Vc(t, u);
  if (!d)
    d = (a = (i = (r = (n = Zi()).handleMissingMessage) == null ? void 0 : r.call(n, { locale: u, id: t, defaultValue: l })) != null ? i : l) != null ? a : t;
  else if (typeof d != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${t}" must be of type "string", found: "${typeof d}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), d;
  if (!c)
    return d;
  let h = d;
  try {
    h = im(d, u).format(c);
  } catch (f) {
    f instanceof Error && console.warn(
      `[svelte-i18n] Message "${t}" has syntax error:`,
      f.message
    );
  }
  return h;
}, om = (t, e) => rm(e).format(t), sm = (t, e) => nm(e).format(t), lm = (t, e) => tm(e).format(t), um = (t, e = Ur()) => Vc(t, e), cm = ta([gi, ka], () => am);
ta([gi], () => om);
ta([gi], () => sm);
ta([gi], () => lm);
ta([gi, ka], () => um);
function dm(t, e) {
  Object.entries(t).forEach(([a, o]) => {
    jc(a, o);
  });
  const n = localStorage.getItem("language"), r = "en", i = n ?? Zv();
  console.log("Initial: Setting the language to", i), Vv({
    fallbackLocale: r,
    initialLocale: i
  }), window.addEventListener("oscd-language-changed", (a) => {
    const o = a;
    if (!o.detail.language) {
      console.error("No translations for language");
      return;
    }
    console.log("Updating the language to", o.detail.language), gi.set(o.detail.language);
  });
}
const fm = "Suche", hm = "Filtertypen", vm = "Filter hinzufügen", mm = "Keine Ressourcen gefunden.", gm = "Loading...", pm = {
  search: fm,
  filter_types: hm,
  add_filter: vm,
  no_resources_found: mm,
  loading: gm
}, bm = "Search", _m = "Filter Types", ym = "Add Filter", Im = "No resources found.", Em = "Loading...", Sm = {
  search: bm,
  filter_types: _m,
  add_filter: ym,
  no_resources_found: Im,
  loading: Em
};
function De(t) {
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
function $n(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const a = n[i], o = a.indexOf("$");
    o !== -1 && e.indexOf(a.substring(0, o + 1)) !== -1 || e.indexOf(a) === -1 && (r[a] = t[a]);
  }
  return r;
}
function it(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const a = n[i];
    a.substring(0, e.length) === e && (r[a.substring(e.length)] = t[a]);
  }
  return r;
}
class ra {
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
    n in a || (a[n] = /* @__PURE__ */ new Map()), a[n].set(r, Uf(e, n, r, i));
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
function W(t, e) {
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
function Am(t, e) {
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
function Cm(t, e, n) {
  if (!t)
    return { x: 0, y: 0 };
  var r = e.x, i = e.y, a = r + n.left, o = i + n.top, c, u;
  if (t.type === "touchstart") {
    var l = t;
    c = l.changedTouches[0].pageX - a, u = l.changedTouches[0].pageY - o;
  } else {
    var d = t;
    c = d.pageX - a, u = d.pageY - o;
  }
  return { x: c, y: u };
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
var Tt = (
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
function xm(t) {
  return t === void 0 && (t = window), Tm(t) ? { passive: !0 } : !1;
}
function Tm(t) {
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
const Kc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: xm
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
function wm(t, e) {
  if (t.closest)
    return t.closest(e);
  for (var n = t; n; ) {
    if (Yc(n, e))
      return n;
    n = n.parentElement;
  }
  return null;
}
function Yc(t, e) {
  var n = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return n.call(t, e);
}
function Lm(t) {
  var e = t;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var n = e.cloneNode(!0);
  n.style.setProperty("position", "absolute"), n.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(n);
  var r = n.scrollWidth;
  return document.documentElement.removeChild(n), r;
}
const Fa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: wm,
  estimateScrollWidth: Lm,
  matches: Yc
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
var Om = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Rm = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Wl = {
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
var ql = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], zl = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Za = [], Mm = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n) {
      var r = t.call(this, ue(ue({}, e.defaultAdapter), n)) || this;
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
        return Om;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Rm;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Wl;
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
          for (var a = Ht(ql), o = a.next(); !o.done; o = a.next()) {
            var c = o.value;
            this.adapter.registerInteractionHandler(c, this.activateHandler);
          }
        } catch (u) {
          r = { error: u };
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
          for (var a = Ht(zl), o = a.next(); !o.done; o = a.next()) {
            var c = o.value;
            this.adapter.registerDocumentInteractionHandler(c, this.deactivateHandler);
          }
        } catch (u) {
          r = { error: u };
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
        for (var i = Ht(ql), a = i.next(); !a.done; a = i.next()) {
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
        for (var i = Ht(zl), a = i.next(); !a.done; a = i.next()) {
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
            var c = n !== void 0 && Za.length > 0 && Za.some(function(u) {
              return r.adapter.containsEventTarget(u);
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
      var n = this, r = e.strings, i = r.VAR_FG_TRANSLATE_START, a = r.VAR_FG_TRANSLATE_END, o = e.cssClasses, c = o.FG_DEACTIVATION, u = o.FG_ACTIVATION, l = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var d = "", h = "";
      if (!this.adapter.isUnbounded()) {
        var f = this.getFgTranslationCoordinates(), m = f.startPoint, v = f.endPoint;
        d = m.x + "px, " + m.y + "px", h = v.x + "px, " + v.y + "px";
      }
      this.adapter.updateCssVariable(i, d), this.adapter.updateCssVariable(a, h), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(c), this.adapter.computeBoundingRect(), this.adapter.addClass(u), this.activationTimer = setTimeout(function() {
        n.activationTimerCallback();
      }, l);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var n = this.activationState, r = n.activationEvent, i = n.wasActivatedByPointer, a;
      i ? a = Cm(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
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
      }, Wl.FG_DEACTIVATION_MS));
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
        var i = ue({}, r);
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
  }(Tt)
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
var ke = {
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
on.add(ke.BACKSPACE);
on.add(ke.ENTER);
on.add(ke.SPACEBAR);
on.add(ke.PAGE_UP);
on.add(ke.PAGE_DOWN);
on.add(ke.END);
on.add(ke.HOME);
on.add(ke.ARROW_LEFT);
on.add(ke.ARROW_UP);
on.add(ke.ARROW_RIGHT);
on.add(ke.ARROW_DOWN);
on.add(ke.DELETE);
on.add(ke.ESCAPE);
on.add(ke.TAB);
var mn = {
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
sn.set(mn.BACKSPACE, ke.BACKSPACE);
sn.set(mn.ENTER, ke.ENTER);
sn.set(mn.SPACEBAR, ke.SPACEBAR);
sn.set(mn.PAGE_UP, ke.PAGE_UP);
sn.set(mn.PAGE_DOWN, ke.PAGE_DOWN);
sn.set(mn.END, ke.END);
sn.set(mn.HOME, ke.HOME);
sn.set(mn.ARROW_LEFT, ke.ARROW_LEFT);
sn.set(mn.ARROW_UP, ke.ARROW_UP);
sn.set(mn.ARROW_RIGHT, ke.ARROW_RIGHT);
sn.set(mn.ARROW_DOWN, ke.ARROW_DOWN);
sn.set(mn.DELETE, ke.DELETE);
sn.set(mn.ESCAPE, ke.ESCAPE);
sn.set(mn.TAB, ke.TAB);
var kr = /* @__PURE__ */ new Set();
kr.add(ke.PAGE_UP);
kr.add(ke.PAGE_DOWN);
kr.add(ke.END);
kr.add(ke.HOME);
kr.add(ke.ARROW_LEFT);
kr.add(ke.ARROW_UP);
kr.add(ke.ARROW_RIGHT);
kr.add(ke.ARROW_DOWN);
function Ct(t) {
  var e = t.key;
  if (on.has(e))
    return e;
  var n = sn.get(t.keyCode);
  return n || ke.UNKNOWN;
}
const { applyPassive: Xl } = Kc, { matches: Dm } = Fa;
function Xt(t, { ripple: e = !0, surface: n = !1, unbounded: r = !1, disabled: i = !1, color: a, active: o, rippleElement: c, eventTarget: u, activeTarget: l, addClass: d = (v) => t.classList.add(v), removeClass: h = (v) => t.classList.remove(v), addStyle: f = (v, g) => t.style.setProperty(v, g), initPromise: m = Promise.resolve() } = {}) {
  let v, g = new ra(), b = me("SMUI:addLayoutListener"), y, A = o, I = u, _ = l;
  function E() {
    n ? (d("mdc-ripple-surface"), a === "primary" ? (d("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")) : a === "secondary" ? (h("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : (h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary"))) : (h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), v && A !== o && (A = o, o ? v.activate() : o === !1 && v.deactivate()), e && !v ? (v = new Mm({
      addClass: d,
      browserSupportsCssVars: () => Am(window),
      computeBoundingRect: () => (c || t).getBoundingClientRect(),
      containsEventTarget: (T) => t.contains(T),
      deregisterDocumentInteractionHandler: (T, x) => g.off(document.documentElement, T, x),
      deregisterInteractionHandler: (T, x) => g.off(u || t, T, x),
      deregisterResizeHandler: (T) => window.removeEventListener("resize", T),
      getWindowPageOffset: () => {
        var T, x;
        return {
          x: (T = window.pageXOffset) !== null && T !== void 0 ? T : window.scrollX,
          y: (x = window.pageYOffset) !== null && x !== void 0 ? x : window.scrollY
        };
      },
      isSurfaceActive: () => o ?? Dm(l || t, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!r,
      registerDocumentInteractionHandler: (T, x) => {
        const S = Xl();
        g.on(document.documentElement, T, x, typeof S == "boolean" ? { capture: S } : S);
      },
      registerInteractionHandler: (T, x) => {
        const S = Xl();
        g.on(u || t, T, x, typeof S == "boolean" ? { capture: S } : S);
      },
      registerResizeHandler: (T) => g.on(window, "resize", T),
      removeClass: h,
      updateCssVariable: f
    }), m.then(() => {
      v && (v.init(), v.setUnbounded(r));
    })) : v && !e && m.then(() => {
      v && (v.destroy(), v = void 0, g.clear());
    }), v && (I !== u || _ !== l) && (I = u, _ = l, v.destroy(), requestAnimationFrame(() => {
      v && (v.init(), v.setUnbounded(r));
    })), !e && r && d("mdc-ripple-upgraded--unbounded");
  }
  E(), b && (y = b(C));
  function C() {
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
        active: o,
        rippleElement: c,
        eventTarget: u,
        activeTarget: l,
        addClass: d,
        removeClass: h,
        addStyle: f,
        initPromise: m
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (x) => t.classList.add(x), removeClass: (x) => t.classList.remove(x), addStyle: (x, S) => t.style.setProperty(x, S), initPromise: Promise.resolve() }, T)), E();
    },
    destroy() {
      v && (v.destroy(), v = void 0, g.clear(), h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), y && y();
    }
  };
}
function Pm(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "component", 3, Br), a = p(e, "tag", 3, "span"), o = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "component",
    "tag",
    "children"
  ]), c;
  const u = me("SMUI:label:context"), l = me("SMUI:label:tabindex");
  function d() {
    return c.getElement();
  }
  var h = { getElement: d }, f = ne(), m = Z(f);
  {
    let v = /* @__PURE__ */ ge(() => De({
      "mdc-button__label": u === "button",
      "mdc-fab__label": u === "fab",
      "mdc-tab__text-label": u === "tab",
      "mdc-image-list__label": u === "image-list",
      "mdc-snackbar__label": u === "snackbar",
      "mdc-banner__text": u === "banner",
      "mdc-segmented-button__label": u === "segmented-button",
      "mdc-data-table__pagination-rows-per-page-label": u === "data-table:pagination",
      "mdc-data-table__header-cell-label": u === "data-table:sortable-header-cell",
      [r()]: !0
    }));
    gr(m, i, (g, b) => {
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
              return s(v);
            }
          },
          () => u === "snackbar" ? { "aria-atomic": "false" } : {},
          {
            get tabindex() {
              return l;
            }
          },
          () => o,
          {
            children: (y, A) => {
              var I = ne(), _ = Z(I);
              Se(_, () => e.children ?? pe), L(y, I);
            },
            $$slots: { default: !0 }
          }
        )),
        (y) => c = y,
        () => c
      );
    });
  }
  return L(t, f), xe(h);
}
function Ls(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "on", 3, !1), a = p(e, "component", 3, Br), o = p(e, "tag", 3, "i"), c = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "on",
    "component",
    "tag",
    "children"
  ]), u;
  const l = /* @__PURE__ */ ge(() => o() === "svg" || a() === Um), d = me("SMUI:icon:context");
  function h() {
    return u.getElement();
  }
  var f = { getElement: h }, m = ne(), v = Z(m);
  {
    let g = /* @__PURE__ */ ge(() => De({
      "mdc-button__icon": d === "button",
      "mdc-fab__icon": d === "fab",
      "mdc-icon-button__icon": d === "icon-button",
      "mdc-icon-button__icon--on": d === "icon-button" && i(),
      "mdc-tab__icon": d === "tab",
      "mdc-banner__icon": d === "banner",
      "mdc-segmented-button__icon": d === "segmented-button",
      [r()]: !0
    }));
    gr(v, a, (b, y) => {
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
          () => s(l) ? { focusable: "false", tabindex: "-1" } : {},
          () => c,
          {
            children: (A, I) => {
              var _ = ne(), E = Z(_);
              Se(E, () => e.children ?? pe), L(A, _);
            },
            $$slots: { default: !0 }
          }
        )),
        (A) => u = A,
        () => u
      );
    });
  }
  return L(t, m), xe(f);
}
var Nm = /* @__PURE__ */ vn("<svg><!></svg>");
function Br(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "tag", 3, "div"), i = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
  const a = /* @__PURE__ */ ge(() => [
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
  var u = { getElement: c }, l = ne(), d = Z(l);
  {
    var h = (m) => {
      var v = Nm();
      Ue(v, () => ({ ...i }));
      var g = se(v);
      Se(g, () => e.children ?? pe), Ee(v, (b) => o = b, () => o), Me(v, (b, y) => W == null ? void 0 : W(b, y), n), L(m, v);
    }, f = (m) => {
      var v = ne(), g = Z(v);
      {
        var b = (A) => {
          var I = ne(), _ = Z(I);
          Il(_, r, !1, (E, C) => {
            Ee(E, (T) => o = T, () => o), Me(E, (T, x) => W == null ? void 0 : W(T, x), n), Ue(E, () => ({ ...i }));
          }), L(A, I);
        }, y = (A) => {
          var I = ne(), _ = Z(I);
          Il(_, r, !1, (E, C) => {
            Ee(E, (S) => o = S, () => o), Me(E, (S, P) => W == null ? void 0 : W(S, P), n), Ue(E, () => ({ ...i }));
            var T = ne(), x = Z(T);
            Se(x, () => e.children ?? pe), L(C, T);
          }), L(A, I);
        };
        ae(
          g,
          (A) => {
            s(a) ? A(b) : A(y, !1);
          },
          !0
        );
      }
      L(m, v);
    };
    ae(d, (m) => {
      r() === "svg" ? m(h) : m(f, !1);
    });
  }
  return L(t, l), xe(u);
}
var Hm = /* @__PURE__ */ vn("<svg><!></svg>");
function Um(t, e) {
  Ce(e, !0), console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let n = p(e, "use", 19, () => []), r = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i;
  function a() {
    return i;
  }
  var o = { getElement: a }, c = Hm();
  Ue(c, () => ({ ...r }));
  var u = se(c);
  return Se(u, () => e.children ?? pe), Ee(c, (l) => i = l, () => i), Me(c, (l, d) => W == null ? void 0 : W(l, d), n), L(t, c), xe(o);
}
function Qa(t, e) {
  Ce(e, !0);
  const [n, r] = pr(), i = tn(e.value);
  oe(e.key, i), Te(() => {
    ui(i, e.value);
  }), Rn(() => {
    i.set(void 0);
  });
  var a = ne(), o = Z(a);
  Se(o, () => e.children ?? pe), L(t, a), xe(), r();
}
var km = /* @__PURE__ */ de('<div class="mdc-button__touch"></div>'), Bm = /* @__PURE__ */ de('<div class="mdc-button__ripple"></div> <!><!>', 1);
function Zc(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "ripple", 3, !0), o = p(e, "color", 3, "primary"), c = p(e, "variant", 3, "text"), u = p(e, "touch", 3, !1), l = p(e, "action", 3, "close"), d = p(e, "defaultAction", 3, !1), h = p(e, "secondary", 3, !1), f = p(e, "component", 3, Br), m = p(e, "tag", 19, () => e.href == null ? "button" : "a"), v = /* @__PURE__ */ qe(e, [
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
  ]), g, b = ce({}), y = ce({}), A = me("SMUI:button:context");
  const I = /* @__PURE__ */ ge(() => A === "dialog:action" && l() != null ? { "data-mdc-dialog-action": l() } : { action: l() }), _ = /* @__PURE__ */ ge(() => A === "dialog:action" && d() ? { "data-mdc-dialog-button-default": "" } : {}), E = /* @__PURE__ */ ge(() => A === "banner" ? {} : { secondary: h() });
  let C = e.disabled;
  Te(() => {
    if (C !== e.disabled) {
      if (g) {
        const w = X();
        "blur" in w && w.blur();
      }
      C = v.disabled;
    }
  }), oe("SMUI:label:context", "button"), oe("SMUI:icon:context", "button");
  function T(w) {
    b[w] || (b[w] = !0);
  }
  function x(w) {
    (!(w in b) || b[w]) && (b[w] = !1);
  }
  function S(w, k) {
    y[w] != k && (k === "" || k == null ? delete y[w] : y[w] = k);
  }
  function P() {
    A === "banner" && Je(X(), h() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function X() {
    return g.getElement();
  }
  var M = { getElement: X }, N = ne(), O = Z(N);
  {
    let w = /* @__PURE__ */ ge(() => [
      [
        Xt,
        {
          ripple: a(),
          unbounded: !1,
          color: o(),
          disabled: !!e.disabled,
          addClass: T,
          removeClass: x,
          addStyle: S
        }
      ],
      ...n()
    ]), k = /* @__PURE__ */ ge(() => De({
      "mdc-button": !0,
      "mdc-button--raised": c() === "raised",
      "mdc-button--unelevated": c() === "unelevated",
      "mdc-button--outlined": c() === "outlined",
      "smui-button--color-secondary": o() === "secondary",
      "mdc-button--touch": u(),
      "mdc-card__action": A === "card:action",
      "mdc-card__action--button": A === "card:action",
      "mdc-dialog__button": A === "dialog:action",
      "mdc-top-app-bar__navigation-icon": A === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": A === "top-app-bar:action",
      "mdc-snackbar__action": A === "snackbar:actions",
      "mdc-banner__secondary-action": A === "banner" && h(),
      "mdc-banner__primary-action": A === "banner" && !h(),
      "mdc-tooltip__action": A === "tooltip:rich-actions",
      ...b,
      [r()]: !0
    })), F = /* @__PURE__ */ ge(() => Object.entries(y).map(([K, ee]) => `${K}: ${ee};`).concat([i()]).join(" "));
    gr(O, f, (K, ee) => {
      Ee(
        ee(K, nt(
          {
            get tag() {
              return m();
            },
            get use() {
              return s(w);
            },
            get class() {
              return s(k);
            },
            get style() {
              return s(F);
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
          () => v,
          {
            onclick: (H) => {
              var R;
              P(), (R = e.onclick) == null || R.call(e, H);
            },
            children: (H, R) => {
              var j = Bm(), Ae = Ie(Z(j), 2);
              Se(Ae, () => e.children ?? pe);
              var be = Ie(Ae);
              {
                var V = (G) => {
                  var B = km();
                  L(G, B);
                };
                ae(be, (G) => {
                  u() && G(V);
                });
              }
              L(H, j);
            },
            $$slots: { default: !0 }
          }
        )),
        (H) => g = H,
        () => g
      );
    });
  }
  return L(t, N), xe(M);
}
function Fm(t, e) {
  Ce(e, !0);
  let n = p(e, "callback", 3, () => {
  }), r = p(e, "disabled", 3, !1), i = p(e, "variant", 3, "default"), a = p(e, "isAbortAction", 3, !1), o = p(e, "backgroundColor", 3, void 0);
  {
    let c = /* @__PURE__ */ ge(() => a() ? "background-color: #ff3e00;" : "background-color: " + o());
    Zc(t, {
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
      children: (u, l) => {
        var d = ne(), h = Z(d);
        Se(h, () => e.children ?? pe), L(u, d);
      },
      $$slots: { default: !0 }
    });
  }
  xe();
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
var Ja = {
  ICON_BUTTON_ON: "mdc-icon-button--on",
  ROOT: "mdc-icon-button"
}, ar = {
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
var Vm = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n) {
      var r = t.call(this, ue(ue({}, e.defaultAdapter), n)) || this;
      return r.hasToggledAriaLabel = !1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ja;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return ar;
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
      var n = this.adapter.getAttr(ar.DATA_ARIA_LABEL_ON), r = this.adapter.getAttr(ar.DATA_ARIA_LABEL_OFF);
      if (n && r) {
        if (this.adapter.getAttr(ar.ARIA_PRESSED) !== null)
          throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");
        this.hasToggledAriaLabel = !0;
      } else
        this.adapter.setAttr(ar.ARIA_PRESSED, String(this.isOn()));
    }, e.prototype.handleClick = function() {
      this.toggle(), this.adapter.notifyChange({ isOn: this.isOn() });
    }, e.prototype.isOn = function() {
      return this.adapter.hasClass(Ja.ICON_BUTTON_ON);
    }, e.prototype.toggle = function(n) {
      if (n === void 0 && (n = !this.isOn()), n ? this.adapter.addClass(Ja.ICON_BUTTON_ON) : this.adapter.removeClass(Ja.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var r = n ? this.adapter.getAttr(ar.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(ar.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr(ar.ARIA_LABEL, r || "");
      } else
        this.adapter.setAttr(ar.ARIA_PRESSED, "" + n);
    }, e;
  }(Tt)
), Gm = /* @__PURE__ */ de('<div class="mdc-icon-button__touch"></div>'), jm = /* @__PURE__ */ de('<div class="mdc-icon-button__ripple"></div> <!><!>', 1);
function Wm(t, e) {
  Ce(e, !0);
  let n = () => {
  };
  function r(R) {
    return R === n;
  }
  let i = p(e, "use", 19, () => []), a = p(e, "class", 3, ""), o = p(e, "style", 3, ""), c = p(e, "ripple", 3, !0), u = p(e, "toggle", 3, !1), l = p(e, "pressed", 15, n), d = p(e, "touch", 3, !1), h = p(e, "displayFlex", 3, !0), f = p(e, "size", 3, "normal"), m = p(e, "component", 3, Br), v = p(e, "tag", 19, () => e.href == null ? "button" : "a"), g = /* @__PURE__ */ qe(e, [
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
  ]), b, y, A = /* @__PURE__ */ ve(ce({})), I = ce({}), _ = /* @__PURE__ */ ve(ce({})), E = me("SMUI:icon-button:context"), C = me("SMUI:icon-button:aria-describedby");
  const T = /* @__PURE__ */ ge(() => {
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
  let x = !!e.disabled;
  Te(() => {
    if (x != !!e.disabled) {
      if (b) {
        const R = F();
        "blur" in R && R.blur();
      }
      x = !!e.disabled;
    }
  }), oe("SMUI:icon:context", "icon-button");
  let S = null;
  Te(() => {
    b && F() && u() !== S && (u() && !y ? (y = new Vm({
      addClass: X,
      hasClass: P,
      notifyChange: (R) => {
        k(R), Je(F(), "SMUIIconButtonToggleChange", R);
      },
      removeClass: M,
      getAttr: O,
      setAttr: w
    }), y.init()) : !u() && y && (y.destroy(), y = void 0, z(A, {}, !0), z(_, {}, !0)), S = u());
  }), Te(() => {
    y && !r(l()) && y.isOn() !== l() && y.toggle(l());
  }), Rn(() => {
    y && y.destroy();
  });
  function P(R) {
    return R in s(A) ? s(A)[R] : F().classList.contains(R);
  }
  function X(R) {
    s(A)[R] || (s(A)[R] = !0);
  }
  function M(R) {
    (!(R in s(A)) || s(A)[R]) && (s(A)[R] = !1);
  }
  function N(R, j) {
    I[R] != j && (j === "" || j == null ? delete I[R] : I[R] = j);
  }
  function O(R) {
    return R in s(_) ? s(_)[R] ?? null : F().getAttribute(R);
  }
  function w(R, j) {
    s(_)[R] !== j && (s(_)[R] = j);
  }
  function k(R) {
    l(R.isOn);
  }
  function F() {
    return b.getElement();
  }
  var K = { getElement: F }, ee = ne(), H = Z(ee);
  {
    let R = /* @__PURE__ */ ge(() => [
      [
        Xt,
        {
          ripple: c(),
          unbounded: !0,
          color: e.color,
          disabled: !!e.disabled,
          addClass: X,
          removeClass: M,
          addStyle: N
        }
      ],
      ...i()
    ]), j = /* @__PURE__ */ ge(() => De({
      "mdc-icon-button": !0,
      "mdc-icon-button--on": !r(l()) && l(),
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
      ...s(A),
      [a()]: !0
    })), Ae = /* @__PURE__ */ ge(() => Object.entries(I).map(([G, B]) => `${G}: ${B};`).concat([o()]).join(" ")), be = /* @__PURE__ */ ge(() => r(l()) ? null : l() ? "true" : "false"), V = /* @__PURE__ */ ge(() => l() ? e.ariaLabelOn : e.ariaLabelOff);
    gr(H, m, (G, B) => {
      Ee(
        B(G, nt(
          {
            get tag() {
              return v();
            },
            get use() {
              return s(R);
            },
            get class() {
              return s(j);
            },
            get style() {
              return s(Ae);
            },
            get "aria-pressed"() {
              return s(be);
            },
            get "aria-label"() {
              return s(V);
            },
            get "data-aria-label-on"() {
              return e.ariaLabelOn;
            },
            get "data-aria-label-off"() {
              return e.ariaLabelOff;
            },
            get "aria-describedby"() {
              return C;
            },
            get href() {
              return e.href;
            }
          },
          () => s(T),
          () => s(_),
          () => g,
          {
            onclick: ($) => {
              var Q;
              y && y.handleClick(), E === "top-app-bar:navigation" && Je(F(), "SMUITopAppBarIconButtonNav"), (Q = e.onclick) == null || Q.call(e, $);
            },
            children: ($, Q) => {
              var fe = jm(), we = Ie(Z(fe), 2);
              Se(we, () => e.children ?? pe);
              var J = Ie(we);
              {
                var ie = (Pe) => {
                  var Le = Gm();
                  L(Pe, Le);
                };
                ae(J, (Pe) => {
                  d() && Pe(ie);
                });
              }
              L($, fe);
            },
            $$slots: { default: !0 }
          }
        )),
        ($) => b = $,
        () => b
      );
    });
  }
  return L(t, ee), xe(K);
}
function qm(t, e) {
  let n = p(e, "callback", 3, () => {
  }), r = p(e, "icon", 3, ""), i = p(e, "disabled", 3, !1);
  Wm(t, {
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
      Ls(a, {
        class: "material-icons",
        children: (c, u) => {
          var l = Rt();
          Oe(() => at(l, r())), L(c, l);
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
var zm = {
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
var Xm = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n) {
      var r = t.call(this, ue(ue({}, e.defaultAdapter), n)) || this;
      return r.shakeAnimationEndHandler = function() {
        r.handleShakeAnimationEnd();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return zm;
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
  }(Tt)
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
var qr = {
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
var Km = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n) {
      var r = t.call(this, ue(ue({}, e.defaultAdapter), n)) || this;
      return r.transitionEndHandler = function(i) {
        r.handleTransitionEnd(i);
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return qr;
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
      this.adapter.removeClass(qr.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(qr.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(n) {
      this.adapter.setStyle("transform-origin", n + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(qr.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(n) {
      var r = this.adapter.hasClass(qr.LINE_RIPPLE_DEACTIVATING);
      n.propertyName === "opacity" && r && (this.adapter.removeClass(qr.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(qr.LINE_RIPPLE_DEACTIVATING));
    }, e;
  }(Tt)
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
var Ym = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Kl = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, Zm = {
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
var Qm = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n) {
      return t.call(this, ue(ue({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Ym;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Zm;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Kl;
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
      n > 0 && (n += Kl.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(n), this.adapter.addClass(r);
    }, e.prototype.closeNotch = function() {
      var n = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(n), this.adapter.removeNotchWidthProperty();
    }, e;
  }(Tt)
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
var ts = {
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
}, Jm = {
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
}, Yl = {
  LABEL_SCALE: 0.75
}, $m = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], eg = [
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
var Zl = ["mousedown", "touchstart"], Ql = ["click", "keydown"], tg = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n, r) {
      r === void 0 && (r = {});
      var i = t.call(this, ue(ue({}, e.defaultAdapter), n)) || this;
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
        return Jm;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return ts;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Yl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var n = this.getNativeInput().type;
        return eg.indexOf(n) >= 0;
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
        for (var o = Ht(Zl), c = o.next(); !c.done; c = o.next()) {
          var u = c.value;
          this.adapter.registerInputInteractionHandler(u, this.setPointerXOffset);
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
        for (var l = Ht(Ql), d = l.next(); !d.done; d = l.next()) {
          var u = d.value;
          this.adapter.registerTextFieldInteractionHandler(u, this.textFieldInteractionHandler);
        }
      } catch (h) {
        i = { error: h };
      } finally {
        try {
          d && !d.done && (a = l.return) && a.call(l);
        } finally {
          if (i) throw i.error;
        }
      }
      this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler), this.setcharacterCounter(this.getValue().length);
    }, e.prototype.destroy = function() {
      var n, r, i, a;
      this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var o = Ht(Zl), c = o.next(); !c.done; c = o.next()) {
          var u = c.value;
          this.adapter.deregisterInputInteractionHandler(u, this.setPointerXOffset);
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
        for (var l = Ht(Ql), d = l.next(); !d.done; d = l.next()) {
          var u = d.value;
          this.adapter.deregisterTextFieldInteractionHandler(u, this.textFieldInteractionHandler);
        }
      } catch (h) {
        i = { error: h };
      } finally {
        try {
          d && !d.done && (a = l.return) && a.call(l);
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
        return $m.indexOf(i) > -1 ? (r.styleValidity(!0), r.adapter.setLabelRequired(r.getNativeInput().required), !0) : !1;
      }), n.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(n) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (n) {
          var r = this.adapter.getLabelWidth() * Yl.LABEL_SCALE;
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
        a && o ? this.adapter.setInputAttr(ts.ARIA_DESCRIBEDBY, o) : this.adapter.removeInputAttr(ts.ARIA_DESCRIBEDBY);
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
  }(Tt)
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
var Jl = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, ng = {
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
var $l = ["click", "keydown"], rg = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n) {
      var r = t.call(this, ue(ue({}, e.defaultAdapter), n)) || this;
      return r.savedTabIndex = null, r.interactionHandler = function(i) {
        r.handleInteraction(i);
      }, r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Jl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ng;
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
        for (var i = Ht($l), a = i.next(); !a.done; a = i.next()) {
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
        for (var i = Ht($l), a = i.next(); !a.done; a = i.next()) {
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
      this.savedTabIndex && (n ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", Jl.ICON_ROLE)));
    }, e.prototype.setAriaLabel = function(n) {
      this.adapter.setAttr("aria-label", n);
    }, e.prototype.setContent = function(n) {
      this.adapter.setContent(n);
    }, e.prototype.handleInteraction = function(n) {
      var r = n.key === "Enter" || n.keyCode === 13;
      (n.type === "click" || r) && (n.preventDefault(), this.adapter.notifyIconAction());
    }, e;
  }(Tt)
), ig = /* @__PURE__ */ de("<span><!></span>"), ag = /* @__PURE__ */ de("<label><!></label>");
function Io(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "floatAbove", 15, !1), o = p(e, "required", 15, !1), c = p(e, "wrapped", 3, !1), u = /* @__PURE__ */ qe(e, [
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
  ]), l, d = /* @__PURE__ */ ve(void 0), h = new ra(), f = ce({}), m = ce({}), v = me("SMUI:generic:input:props") ?? {}, g = a();
  Te(() => {
    s(d) && g !== a() && (g = a(), s(d).float(a()));
  });
  let b = o();
  Te(() => {
    s(d) && b !== o() && (b = o(), s(d).setRequired(o()));
  });
  const y = me("SMUI:floating-label:mount"), A = me("SMUI:floating-label:unmount");
  rt(() => {
    z(
      d,
      new Xm({
        addClass: I,
        removeClass: _,
        getWidth: () => {
          var R, j;
          const K = X(), ee = K.cloneNode(!0);
          (R = K.parentNode) == null || R.appendChild(ee), ee.classList.add("smui-floating-label--remove-transition"), ee.classList.add("smui-floating-label--force-size"), ee.classList.remove("mdc-floating-label--float-above");
          const H = ee.scrollWidth;
          return (j = K.parentNode) == null || j.removeChild(ee), H;
        },
        registerInteractionHandler: (K, ee) => h.on(X(), K, ee),
        deregisterInteractionHandler: (K, ee) => h.off(X(), K, ee)
      }),
      !0
    );
    const F = {
      get element() {
        return X();
      },
      addStyle: E,
      removeStyle: C
    };
    return y && y(F), s(d).init(), () => {
      var K;
      A && A(F), (K = s(d)) == null || K.destroy(), h.clear();
    };
  });
  function I(F) {
    f[F] || (f[F] = !0);
  }
  function _(F) {
    (!(F in f) || f[F]) && (f[F] = !1);
  }
  function E(F, K) {
    m[F] != K && (K === "" || K == null ? delete m[F] : m[F] = K);
  }
  function C(F) {
    F in m && delete m[F];
  }
  function T(F) {
    var K;
    (K = s(d)) == null || K.shake(F);
  }
  function x(F) {
    a(F);
  }
  function S(F) {
    o(F);
  }
  function P() {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    return s(d).getWidth();
  }
  function X() {
    return l;
  }
  var M = { shake: T, float: x, setRequired: S, getWidth: P, getElement: X }, N = ne(), O = Z(N);
  {
    var w = (F) => {
      var K = ig();
      Ue(K, (H, R) => ({ class: H, style: R, ...u }), [
        () => De({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": o(),
          ...f,
          [r()]: !0
        }),
        () => Object.entries(m).map(([H, R]) => `${H}: ${R};`).concat([i()]).join(" ")
      ]);
      var ee = se(K);
      Se(ee, () => e.children ?? pe), Ee(K, (H) => l = H, () => l), Me(K, (H, R) => W == null ? void 0 : W(H, R), n), L(F, K);
    }, k = (F) => {
      var K = ag();
      Ue(
        K,
        (H, R) => ({
          class: H,
          style: R,
          for: e.for || (v ? v.id : void 0),
          ...u
        }),
        [
          () => De({
            "mdc-floating-label": !0,
            "mdc-floating-label--float-above": a(),
            "mdc-floating-label--required": o(),
            ...f,
            [r()]: !0
          }),
          () => Object.entries(m).map(([H, R]) => `${H}: ${R};`).concat([i()]).join(" ")
        ]
      );
      var ee = se(K);
      Se(ee, () => e.children ?? pe), Ee(K, (H) => l = H, () => l), Me(K, (H, R) => W == null ? void 0 : W(H, R), n), L(F, K);
    };
    ae(O, (F) => {
      c() ? F(w) : F(k, !1);
    });
  }
  return L(t, N), xe(M);
}
var og = /* @__PURE__ */ de("<div></div>");
function Qc(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "active", 3, !1), o = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "active"
  ]), c, u = /* @__PURE__ */ ve(void 0), l = new ra(), d = ce({}), h = ce({});
  rt(() => (z(
    u,
    new Km({
      addClass: m,
      removeClass: v,
      hasClass: f,
      setStyle: g,
      registerEventHandler: (C, T) => l.on(I(), C, T),
      deregisterEventHandler: (C, T) => l.off(I(), C, T)
    }),
    !0
  ), s(u).init(), () => {
    var C;
    (C = s(u)) == null || C.destroy(), l.clear();
  }));
  function f(C) {
    return C in d ? d[C] : I().classList.contains(C);
  }
  function m(C) {
    d[C] || (d[C] = !0);
  }
  function v(C) {
    (!(C in d) || d[C]) && (d[C] = !1);
  }
  function g(C, T) {
    h[C] != T && (T === "" || T == null ? delete h[C] : h[C] = T);
  }
  function b() {
    var C;
    (C = s(u)) == null || C.activate();
  }
  function y() {
    var C;
    (C = s(u)) == null || C.deactivate();
  }
  function A(C) {
    var T;
    (T = s(u)) == null || T.setRippleCenter(C);
  }
  function I() {
    return c;
  }
  var _ = { activate: b, deactivate: y, setRippleCenter: A, getElement: I }, E = og();
  return Ue(E, (C, T) => ({ class: C, style: T, ...o }), [
    () => De({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...d,
      [r()]: !0
    }),
    () => Object.entries(h).map(([C, T]) => `${C}: ${T};`).concat([i()]).join(" ")
  ]), Ee(E, (C) => c = C, () => c), Me(E, (C, T) => W == null ? void 0 : W(C, T), n), L(t, E), xe(_);
}
var sg = /* @__PURE__ */ de('<div class="mdc-notched-outline__notch"><!></div>'), lg = /* @__PURE__ */ de('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function Jc(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "notched", 3, !1), a = p(e, "noLabel", 3, !1), o = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "notched",
    "noLabel",
    "children"
  ]), c, u = /* @__PURE__ */ ve(void 0), l = /* @__PURE__ */ ve(void 0), d = ce({}), h = ce({}), f;
  Te(() => {
    s(l) !== f && (s(l) ? (s(l).addStyle("transition-duration", "0s"), m("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      s(l) && s(l).removeStyle("transition-duration");
    })) : v("mdc-notched-outline--upgraded"), f = s(l));
  }), oe("SMUI:floating-label:mount", (x) => {
    z(l, x, !0);
  }), oe("SMUI:floating-label:unmount", () => {
    z(l, void 0);
  }), rt(() => (z(
    u,
    new Qm({
      addClass: m,
      removeClass: v,
      setNotchWidthProperty: (x) => g("width", x + "px"),
      removeNotchWidthProperty: () => b("width")
    }),
    !0
  ), s(u).init(), () => {
    var x;
    (x = s(u)) == null || x.destroy();
  }));
  function m(x) {
    d[x] || (d[x] = !0);
  }
  function v(x) {
    (!(x in d) || d[x]) && (d[x] = !1);
  }
  function g(x, S) {
    h[x] != S && (S === "" || S == null ? delete h[x] : h[x] = S);
  }
  function b(x) {
    x in h && delete h[x];
  }
  function y(x) {
    var S;
    (S = s(u)) == null || S.notch(x);
  }
  function A() {
    var x;
    (x = s(u)) == null || x.closeNotch();
  }
  function I() {
    return c;
  }
  var _ = { notch: y, closeNotch: A, getElement: I }, E = lg();
  Ue(E, (x) => ({ class: x, ...o }), [
    () => De({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": i(),
      "mdc-notched-outline--no-label": a(),
      ...d,
      [r()]: !0
    })
  ]);
  var C = Ie(se(E), 2);
  {
    var T = (x) => {
      var S = sg(), P = se(S);
      Se(P, () => e.children ?? pe), Oe((X) => Gt(S, X), [
        () => Object.entries(h).map(([X, M]) => `${X}: ${M};`).join(" ")
      ]), L(x, S);
    };
    ae(C, (x) => {
      a() || x(T);
    });
  }
  return Ee(E, (x) => c = x, () => c), Me(E, (x, S) => W == null ? void 0 : W(x, S), n), L(t, E), xe(_);
}
function Qs(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "component", 3, Br), a = p(e, "tag", 3, "div"), o = p(e, "_smuiClass", 3, ""), c = p(e, "_smuiClassMap", 23, () => ({})), u = p(e, "_smuiContexts", 19, () => ({})), l = p(e, "_smuiProps", 19, () => ({})), d = /* @__PURE__ */ qe(e, [
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
  Object.entries(c()).forEach(([y, A]) => {
    const I = me(A);
    I && "subscribe" in I && f.push(I.subscribe((_) => {
      c()[y] = _;
    }));
  });
  for (let y in u())
    u().hasOwnProperty(y) && oe(y, u()[y]);
  Rn(() => {
    for (const y of f)
      y();
  });
  function m() {
    return h.getElement();
  }
  var v = { getElement: m }, g = ne(), b = Z(g);
  {
    let y = /* @__PURE__ */ ge(() => De({
      [o()]: !0,
      ...c(),
      [r()]: !0
    }));
    gr(b, i, (A, I) => {
      Ee(
        I(A, nt(
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
          l,
          () => d,
          {
            children: (_, E) => {
              var C = ne(), T = Z(C);
              Se(T, () => e.children ?? pe), L(_, C);
            },
            $$slots: { default: !0 }
          }
        )),
        (_) => h = _,
        () => h
      );
    });
  }
  return L(t, g), xe(v);
}
function ug(t, e) {
  Ce(e, !0);
  let n = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ee(
    Qs(t, nt({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => n, {
      children: (o, c) => {
        var u = ne(), l = Z(u);
        Se(l, () => e.children ?? pe), L(o, u);
      },
      $$slots: { default: !0 }
    })),
    (o) => r = o,
    () => r
  ), xe(a);
}
function cg(t, e) {
  Ce(e, !0);
  let n = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ee(
    Qs(t, nt(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => n,
      {
        children: (o, c) => {
          var u = ne(), l = Z(u);
          Se(l, () => e.children ?? pe), L(o, u);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), xe(a);
}
function dg(t, e) {
  Ce(e, !0);
  let n = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ee(
    Qs(t, nt(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => n,
      {
        children: (o, c) => {
          var u = ne(), l = Z(u);
          Se(l, () => e.children ?? pe), L(o, u);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), xe(a);
}
var fg = /* @__PURE__ */ de("<input/>");
function hg(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "type", 3, "text"), a = p(e, "placeholder", 3, " "), o = p(e, "value", 15), c = p(e, "files", 15, null), u = p(e, "dirty", 15, !1), l = p(e, "invalid", 15, !1), d = p(e, "updateInvalid", 3, !0), h = p(e, "initialInvalid", 3, !1), f = p(e, "emptyValueNull", 19, () => o() === null), m = p(e, "emptyValueUndefined", 19, () => o() === void 0), v = /* @__PURE__ */ qe(e, [
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
  ]), g, b = ce({}), y = ce({});
  Te(() => {
    i() === "file" ? delete y.value : y.value = o() == null ? "" : o();
  }), rt(() => {
    d() && h() && l(P().matches(":invalid"));
  });
  function A(w) {
    return w === "" ? Number.NaN : +w;
  }
  function I(w) {
    if (i() === "file") {
      c(w.currentTarget.files);
      return;
    }
    if (w.currentTarget.value === "" && f()) {
      o(null);
      return;
    }
    if (w.currentTarget.value === "" && m()) {
      o(void 0);
      return;
    }
    switch (i()) {
      case "number":
      case "range":
        o(A(w.currentTarget.value));
        break;
      default:
        o(w.currentTarget.value);
        break;
    }
  }
  function _(w) {
    (i() === "file" || i() === "range") && I(w), u(!0), d() && l(P().matches(":invalid"));
  }
  function E(w) {
    return w in b ? b[w] ?? null : P().getAttribute(w);
  }
  function C(w, k) {
    b[w] !== k && (b[w] = k);
  }
  function T(w) {
    (!(w in b) || b[w] != null) && (b[w] = void 0);
  }
  function x() {
    P().focus();
  }
  function S() {
    P().blur();
  }
  function P() {
    return g;
  }
  var X = { getAttr: E, addAttr: C, removeAttr: T, focus: x, blur: S, getElement: P }, M = fg(), N = (w) => {
    var k;
    i() !== "file" && I(w), (k = e.oninput) == null || k.call(e, w);
  }, O = (w) => {
    var k;
    _(w), (k = e.onchange) == null || k.call(e, w);
  };
  return Ue(
    M,
    (w) => ({
      class: w,
      type: i(),
      placeholder: a(),
      ...y,
      ...b,
      ...v,
      oninput: N,
      onchange: O
    }),
    [
      () => De({ "mdc-text-field__input": !0, [r()]: !0 })
    ],
    void 0,
    void 0,
    !0
  ), Ee(M, (w) => g = w, () => g), Me(M, (w, k) => W == null ? void 0 : W(w, k), n), L(t, M), xe(X);
}
var vg = /* @__PURE__ */ de("<textarea></textarea>");
function mg(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "value", 15, ""), o = p(e, "dirty", 15, !1), c = p(e, "invalid", 15, !1), u = p(e, "updateInvalid", 3, !0), l = p(e, "initialInvalid", 3, !1), d = p(e, "resizable", 3, !0), h = /* @__PURE__ */ qe(e, [
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
  ]), f, m = ce({});
  rt(() => {
    u() && l() && c(_().matches(":invalid"));
  });
  function v() {
    o(!0), u() && c(_().matches(":invalid"));
  }
  function g(x) {
    return x in m ? m[x] ?? null : _().getAttribute(x);
  }
  function b(x, S) {
    m[x] !== S && (m[x] = S);
  }
  function y(x) {
    (!(x in m) || m[x] != null) && (m[x] = void 0);
  }
  function A() {
    _().focus();
  }
  function I() {
    _().blur();
  }
  function _() {
    return f;
  }
  var E = { getAttr: g, addAttr: b, removeAttr: y, focus: A, blur: I, getElement: _ }, C = vg(), T = (x) => {
    var S;
    v(), (S = e.onchange) == null || S.call(e, x);
  };
  return Ue(
    C,
    (x) => ({
      class: x,
      style: `${d() ? "" : "resize: none; "}${i()}`,
      ...m,
      ...h,
      onchange: T
    }),
    [
      () => De({ "mdc-text-field__input": !0, [r()]: !0 })
    ]
  ), Ee(C, (x) => f = x, () => f), Me(C, (x, S) => W == null ? void 0 : W(x, S), n), vi(() => Ca(C, a)), L(t, C), xe(E);
}
var gg = /* @__PURE__ */ de('<span class="mdc-text-field__ripple"></span>'), pg = /* @__PURE__ */ de("<!> <!>", 1), bg = /* @__PURE__ */ de("<span><!> <!></span>"), _g = /* @__PURE__ */ de("<!> <!> <!>", 1), yg = /* @__PURE__ */ de("<label><!> <!> <!> <!> <!> <!> <!></label>"), Ig = /* @__PURE__ */ de("<div><!> <!> <!> <!> <!></div>"), Eg = /* @__PURE__ */ de("<!> <!>", 1);
function Os(t, e) {
  Ce(e, !0);
  const { applyPassive: n } = Kc;
  let r = () => {
  };
  function i(Y) {
    return Y === r;
  }
  let a = p(e, "use", 19, () => []), o = p(e, "class", 3, ""), c = p(e, "style", 3, ""), u = p(e, "ripple", 3, !0), l = p(e, "disabled", 3, !1), d = p(e, "required", 3, !1), h = p(e, "textarea", 3, !1), f = p(e, "variant", 19, () => h() ? "outlined" : "standard"), m = p(e, "noLabel", 3, !1), v = p(e, "type", 3, "text"), g = p(e, "value", 15), b = p(e, "files", 15, r), y = p(e, "invalid", 15, r), A = p(e, "updateInvalid", 19, () => i(y())), I = p(e, "initialInvalid", 3, !1), _ = p(e, "dirty", 15, !1), E = p(e, "validateOnValueChange", 19, A), C = p(e, "useNativeValidation", 19, A), T = p(e, "withLeadingIcon", 3, r), x = p(e, "withTrailingIcon", 3, r), S = p(e, "input", 7), P = p(e, "floatingLabel", 7), X = p(e, "lineRipple", 7), M = p(e, "notchedOutline", 7), N = /* @__PURE__ */ qe(e, [
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
  let w, k = /* @__PURE__ */ ve(void 0), F = new ra(), K = ce({}), ee = ce({}), H = /* @__PURE__ */ ve(void 0), R = /* @__PURE__ */ ve(!1), j = /* @__PURE__ */ ve(ce(I())), Ae = me("SMUI:addLayoutListener"), be, V, G = new Promise((Y) => V = Y), B, $, Q, fe;
  const we = /* @__PURE__ */ ge(() => S() && S().getElement());
  Te(() => {
    (_() || s(j) || !A()) && s(k) && s(k).isValid() !== !y() && (A() ? y(!s(k).isValid()) : s(k).setValid(!y()));
  }), Te(() => {
    s(k) && s(k).getValidateOnValueChange() !== E() && s(k).setValidateOnValueChange(i(E()) ? !1 : E());
  }), Te(() => {
    s(k) && s(k).setUseNativeValidation(i(C()) ? !0 : C());
  }), Te(() => {
    s(k) && s(k).setDisabled(l());
  });
  let J = g();
  Te(() => {
    if (s(k) && O && J !== g()) {
      J = g();
      const Y = `${g() == null ? "" : g()}`;
      s(k).getValue() !== Y && s(k).setValue(Y);
    }
  }), Ae && (be = Ae(U)), oe("SMUI:textfield:leading-icon:mount", (Y) => {
    B = Y;
  }), oe("SMUI:textfield:leading-icon:unmount", () => {
    B = void 0;
  }), oe("SMUI:textfield:trailing-icon:mount", (Y) => {
    $ = Y;
  }), oe("SMUI:textfield:trailing-icon:unmount", () => {
    $ = void 0;
  }), oe("SMUI:textfield:helper-text:id", (Y) => {
    z(H, Y, !0);
  }), oe("SMUI:textfield:helper-text:mount", (Y) => {
    Q = Y;
  }), oe("SMUI:textfield:helper-text:unmount", () => {
    z(H, void 0), Q = void 0;
  }), oe("SMUI:textfield:character-counter:mount", (Y) => {
    fe = Y;
  }), oe("SMUI:textfield:character-counter:unmount", () => {
    fe = void 0;
  }), rt(() => {
    var Y;
    if (z(
      k,
      new tg(
        {
          // getRootAdapterMethods_
          addClass: Pe,
          removeClass: Le,
          hasClass: ie,
          registerTextFieldInteractionHandler: (te, Ne) => F.on(q(), te, Ne),
          deregisterTextFieldInteractionHandler: (te, Ne) => F.off(q(), te, Ne),
          registerValidationAttributeChangeHandler: (te) => {
            const Ne = (mt) => mt.map((Ut) => Ut.attributeName).filter((Ut) => Ut), dt = new MutationObserver((mt) => {
              C() && te(Ne(mt));
            }), bt = { attributes: !0 };
            return S() && dt.observe(S().getElement(), bt), dt;
          },
          deregisterValidationAttributeChangeHandler: (te) => {
            te.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var te;
            return ((te = S()) == null ? void 0 : te.getElement()) ?? null;
          },
          setInputAttr: (te, Ne) => {
            var dt;
            (dt = S()) == null || dt.addAttr(te, Ne);
          },
          removeInputAttr: (te) => {
            var Ne;
            (Ne = S()) == null || Ne.removeAttr(te);
          },
          isFocused: () => {
            var te;
            return document.activeElement === ((te = S()) == null ? void 0 : te.getElement());
          },
          registerInputInteractionHandler: (te, Ne) => {
            var bt;
            const dt = (bt = S()) == null ? void 0 : bt.getElement();
            if (dt) {
              const mt = n();
              F.on(dt, te, Ne, typeof mt == "boolean" ? { capture: mt } : mt);
            }
          },
          deregisterInputInteractionHandler: (te, Ne) => {
            var bt;
            const dt = (bt = S()) == null ? void 0 : bt.getElement();
            dt && F.off(dt, te, Ne);
          },
          // getLabelAdapterMethods_
          floatLabel: (te) => P() && P().float(te),
          getLabelWidth: () => P() ? P().getWidth() : 0,
          hasLabel: () => !!P(),
          shakeLabel: (te) => P() && P().shake(te),
          setLabelRequired: (te) => P() && P().setRequired(te),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => X() && X().activate(),
          deactivateLineRipple: () => X() && X().deactivate(),
          setLineRippleTransformOrigin: (te) => X() && X().setRippleCenter(te),
          // getOutlineAdapterMethods_
          closeOutline: () => M() && M().closeNotch(),
          hasOutline: () => !!M(),
          notchOutline: (te) => M() && M().notch(te)
        },
        {
          get helperText() {
            return Q;
          },
          get characterCounter() {
            return fe;
          },
          get leadingIcon() {
            return B;
          },
          get trailingIcon() {
            return $;
          }
        }
      ),
      !0
    ), O) {
      if (S() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (Y = s(k)) == null || Y.init();
    } else
      uc().then(() => {
        var te;
        if (S() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (te = s(k)) == null || te.init();
      });
    return V(), () => {
      var te;
      (te = s(k)) == null || te.destroy(), F.clear();
    };
  }), Rn(() => {
    be && be();
  });
  function ie(Y) {
    return Y in K ? K[Y] ?? null : q().classList.contains(Y);
  }
  function Pe(Y) {
    K[Y] || (K[Y] = !0);
  }
  function Le(Y) {
    (!(Y in K) || K[Y]) && (K[Y] = !1);
  }
  function We(Y, te) {
    ee[Y] != te && (te === "" || te == null ? delete ee[Y] : ee[Y] = te);
  }
  function Ke() {
    var Y;
    (Y = S()) == null || Y.focus();
  }
  function Be() {
    var Y;
    (Y = S()) == null || Y.blur();
  }
  function U() {
    if (s(k)) {
      const Y = s(k).shouldFloat;
      s(k).notchOutline(Y);
    }
  }
  function q() {
    return w;
  }
  var he = { focus: Ke, blur: Be, layout: U, getElement: q }, Re = Eg(), Fe = Z(Re);
  {
    var ct = (Y) => {
      var te = yg();
      Ue(te, (ze, Qe, $e) => ({ class: ze, style: Qe, for: void 0, ...$e }), [
        () => De({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": l(),
          "mdc-text-field--textarea": h(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !h(),
          "mdc-text-field--no-label": m() || e.label == null,
          "mdc-text-field--label-floating": s(R) || g() != null && g() !== "",
          "mdc-text-field--with-leading-icon": i(T()) ? e.leadingIcon : T(),
          "mdc-text-field--with-trailing-icon": i(x()) ? e.trailingIcon : x(),
          "mdc-text-field--with-internal-counter": h() && e.internalCounter,
          "mdc-text-field--invalid": y(),
          ...K,
          [o()]: !0
        }),
        () => Object.entries(ee).map(([ze, Qe]) => `${ze}: ${Qe};`).concat([c()]).join(" "),
        () => $n(N, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Ne = se(te);
      {
        var dt = (ze) => {
          var Qe = pg(), $e = Z(Qe);
          {
            var Dt = (ut) => {
              var At = gg();
              L(ut, At);
            };
            ae($e, (ut) => {
              f() === "filled" && ut(Dt);
            });
          }
          var gn = Ie($e, 2);
          {
            var ot = (ut) => {
              {
                let At = /* @__PURE__ */ ge(() => s(R) || g() != null && g() !== "" && (typeof g() != "number" || !isNaN(g()))), et = /* @__PURE__ */ ge(() => it(N, "label$"));
                Ee(
                  Io(ut, nt(
                    {
                      get floatAbove() {
                        return s(At);
                      },
                      get required() {
                        return d();
                      },
                      wrapped: !0
                    },
                    () => s(et),
                    {
                      children: (wt, Pn) => {
                        var Lt = ne(), _t = Z(Lt);
                        {
                          var Pt = (kt) => {
                          }, ln = (kt) => {
                            var un = ne(), Yt = Z(un);
                            {
                              var Gn = (cn) => {
                                var jt = Rt();
                                Oe(() => at(jt, e.label)), L(cn, jt);
                              }, Fr = (cn) => {
                                var jt = ne(), jn = Z(jt);
                                Se(jn, () => e.label), L(cn, jt);
                              };
                              ae(
                                Yt,
                                (cn) => {
                                  typeof e.label == "string" ? cn(Gn) : cn(Fr, !1);
                                },
                                !0
                              );
                            }
                            L(kt, un);
                          };
                          ae(_t, (kt) => {
                            e.label == null ? kt(Pt) : kt(ln, !1);
                          });
                        }
                        L(wt, Lt);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (wt) => P(wt),
                  () => P()
                );
              }
            };
            ae(gn, (ut) => {
              !m() && e.label != null && ut(ot);
            });
          }
          L(ze, Qe);
        };
        ae(Ne, (ze) => {
          !h() && f() !== "outlined" && ze(dt);
        });
      }
      var bt = Ie(Ne, 2);
      {
        var mt = (ze) => {
          {
            let Qe = /* @__PURE__ */ ge(() => m() || e.label == null), $e = /* @__PURE__ */ ge(() => it(N, "outline$"));
            Ee(
              Jc(ze, nt(
                {
                  get noLabel() {
                    return s(Qe);
                  }
                },
                () => s($e),
                {
                  children: (Dt, gn) => {
                    var ot = ne(), ut = Z(ot);
                    {
                      var At = (et) => {
                        {
                          let wt = /* @__PURE__ */ ge(() => s(R) || g() != null && g() !== "" && (typeof g() != "number" || !isNaN(g()))), Pn = /* @__PURE__ */ ge(() => it(N, "label$"));
                          Ee(
                            Io(et, nt(
                              {
                                get floatAbove() {
                                  return s(wt);
                                },
                                get required() {
                                  return d();
                                },
                                wrapped: !0
                              },
                              () => s(Pn),
                              {
                                children: (Lt, _t) => {
                                  var Pt = ne(), ln = Z(Pt);
                                  {
                                    var kt = (Yt) => {
                                    }, un = (Yt) => {
                                      var Gn = ne(), Fr = Z(Gn);
                                      {
                                        var cn = (jn) => {
                                          var Vr = Rt();
                                          Oe(() => at(Vr, e.label)), L(jn, Vr);
                                        }, jt = (jn) => {
                                          var Vr = ne(), Vo = Z(Vr);
                                          Se(Vo, () => e.label), L(jn, Vr);
                                        };
                                        ae(
                                          Fr,
                                          (jn) => {
                                            typeof e.label == "string" ? jn(cn) : jn(jt, !1);
                                          },
                                          !0
                                        );
                                      }
                                      L(Yt, Gn);
                                    };
                                    ae(ln, (Yt) => {
                                      e.label == null ? Yt(kt) : Yt(un, !1);
                                    });
                                  }
                                  L(Lt, Pt);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (Lt) => P(Lt),
                            () => P()
                          );
                        }
                      };
                      ae(ut, (et) => {
                        !m() && e.label != null && et(At);
                      });
                    }
                    L(Dt, ot);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (Dt) => M(Dt),
              () => M()
            );
          }
        };
        ae(bt, (ze) => {
          (h() || f() === "outlined") && ze(mt);
        });
      }
      var Ut = Ie(bt, 2);
      Qa(Ut, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (ze, Qe) => {
          var $e = ne(), Dt = Z($e);
          Se(Dt, () => e.leadingIcon ?? pe), L(ze, $e);
        },
        $$slots: { default: !0 }
      });
      var br = Ie(Ut, 2);
      Se(br, () => e.children ?? pe);
      var ht = Ie(br, 2);
      {
        var Mt = (ze) => {
          var Qe = bg(), $e = se(Qe);
          {
            let gn = /* @__PURE__ */ ge(() => it(N, "input$"));
            Ee(
              mg($e, nt(
                {
                  get disabled() {
                    return l();
                  },
                  get required() {
                    return d();
                  },
                  get updateInvalid() {
                    return A();
                  },
                  get initialInvalid() {
                    return s(j);
                  },
                  get "aria-controls"() {
                    return s(H);
                  },
                  get "aria-describedby"() {
                    return s(H);
                  }
                },
                () => s(gn),
                {
                  onblur: (ot) => {
                    var ut;
                    z(R, !1), z(j, !0), Je(q(), "blur", ot), (ut = e.input$onblur) == null || ut.call(e, ot);
                  },
                  onfocus: (ot) => {
                    var ut;
                    z(R, !0), Je(q(), "focus", ot), (ut = e.input$onfocus) == null || ut.call(e, ot);
                  },
                  get value() {
                    return g();
                  },
                  set value(ot) {
                    g(ot);
                  },
                  get dirty() {
                    return _();
                  },
                  set dirty(ot) {
                    _(ot);
                  },
                  get invalid() {
                    return y();
                  },
                  set invalid(ot) {
                    y(ot);
                  }
                }
              )),
              (ot) => S(ot),
              () => S()
            );
          }
          var Dt = Ie($e, 2);
          Se(Dt, () => e.internalCounter ?? pe), Oe((gn) => qs(Qe, 1, gn), [
            () => pc(De({
              "mdc-text-field__resizer": !("input$resizable" in N) || e.input$resizable
            }))
          ]), L(ze, Qe);
        }, It = (ze) => {
          var Qe = _g(), $e = Z(Qe);
          {
            var Dt = (At) => {
              var et = ne(), wt = Z(et);
              {
                var Pn = (_t) => {
                  cg(_t, {
                    children: (Pt, ln) => {
                      var kt = Rt();
                      Oe(() => at(kt, e.prefix)), L(Pt, kt);
                    },
                    $$slots: { default: !0 }
                  });
                }, Lt = (_t) => {
                  var Pt = ne(), ln = Z(Pt);
                  Se(ln, () => e.prefix ?? pe), L(_t, Pt);
                };
                ae(wt, (_t) => {
                  typeof e.prefix == "string" ? _t(Pn) : _t(Lt, !1);
                });
              }
              L(At, et);
            };
            ae($e, (At) => {
              e.prefix != null && At(Dt);
            });
          }
          var gn = Ie($e, 2);
          {
            let At = /* @__PURE__ */ ge(() => it(N, "input$"));
            Ee(
              hg(gn, nt(
                {
                  get type() {
                    return v();
                  },
                  get disabled() {
                    return l();
                  },
                  get required() {
                    return d();
                  },
                  get updateInvalid() {
                    return A();
                  },
                  get initialInvalid() {
                    return s(j);
                  },
                  get "aria-controls"() {
                    return s(H);
                  },
                  get "aria-describedby"() {
                    return s(H);
                  }
                },
                () => m() && e.label != null && typeof e.label == "string" ? { placeholder: e.label } : {},
                () => s(At),
                {
                  onblur: (et) => {
                    var wt;
                    z(R, !1), z(j, !0), Je(q(), "blur", et), (wt = e.input$onblur) == null || wt.call(e, et);
                  },
                  onfocus: (et) => {
                    var wt;
                    z(R, !0), Je(q(), "focus", et), (wt = e.input$onfocus) == null || wt.call(e, et);
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
              (et) => S(et),
              () => S()
            );
          }
          var ot = Ie(gn, 2);
          {
            var ut = (At) => {
              var et = ne(), wt = Z(et);
              {
                var Pn = (_t) => {
                  dg(_t, {
                    children: (Pt, ln) => {
                      var kt = Rt();
                      Oe(() => at(kt, e.suffix)), L(Pt, kt);
                    },
                    $$slots: { default: !0 }
                  });
                }, Lt = (_t) => {
                  var Pt = ne(), ln = Z(Pt);
                  Se(ln, () => e.suffix ?? pe), L(_t, Pt);
                };
                ae(wt, (_t) => {
                  typeof e.suffix == "string" ? _t(Pn) : _t(Lt, !1);
                });
              }
              L(At, et);
            };
            ae(ot, (At) => {
              e.suffix != null && At(ut);
            });
          }
          L(ze, Qe);
        };
        ae(ht, (ze) => {
          h() && typeof g() == "string" ? ze(Mt) : ze(It, !1);
        });
      }
      var Dn = Ie(ht, 2);
      Qa(Dn, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (ze, Qe) => {
          var $e = ne(), Dt = Z($e);
          Se(Dt, () => e.trailingIcon ?? pe), L(ze, $e);
        },
        $$slots: { default: !0 }
      });
      var yi = Ie(Dn, 2);
      {
        var Vn = (ze) => {
          {
            let Qe = /* @__PURE__ */ ge(() => it(N, "ripple$"));
            Ee(Qc(ze, nt(() => s(Qe))), ($e) => X($e), () => X());
          }
        };
        ae(yi, (ze) => {
          !h() && f() !== "outlined" && u() && ze(Vn);
        });
      }
      Ee(te, (ze) => w = ze, () => w), Me(te, (ze, Qe) => Xt == null ? void 0 : Xt(ze, Qe), () => ({
        ripple: !h() && f() === "filled",
        unbounded: !1,
        addClass: Pe,
        removeClass: Le,
        addStyle: We,
        eventTarget: s(we),
        activeTarget: s(we),
        initPromise: G
      })), Me(te, (ze, Qe) => W == null ? void 0 : W(ze, Qe), a), L(Y, te);
    }, pt = (Y) => {
      var te = Ig();
      Ue(te, (ht, Mt, It) => ({ class: ht, style: Mt, ...It }), [
        () => De({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": l(),
          "mdc-text-field--textarea": h(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !h(),
          "mdc-text-field--no-label": m() || e.label == null,
          "mdc-text-field--with-leading-icon": e.leadingIcon,
          "mdc-text-field--with-trailing-icon": e.trailingIcon,
          "mdc-text-field--invalid": y(),
          ...K,
          [o()]: !0
        }),
        () => Object.entries(ee).map(([ht, Mt]) => `${ht}: ${Mt};`).concat([c()]).join(" "),
        () => $n(N, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Ne = se(te);
      {
        var dt = (ht) => {
          var Mt = ne(), It = Z(Mt);
          Se(It, () => e.label ?? pe), L(ht, Mt);
        };
        ae(Ne, (ht) => {
          typeof e.label != "string" && ht(dt);
        });
      }
      var bt = Ie(Ne, 2);
      Qa(bt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (ht, Mt) => {
          var It = ne(), Dn = Z(It);
          Se(Dn, () => e.leadingIcon ?? pe), L(ht, It);
        },
        $$slots: { default: !0 }
      });
      var mt = Ie(bt, 2);
      Se(mt, () => e.children ?? pe);
      var Ut = Ie(mt, 2);
      Qa(Ut, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (ht, Mt) => {
          var It = ne(), Dn = Z(It);
          Se(Dn, () => e.trailingIcon ?? pe), L(ht, It);
        },
        $$slots: { default: !0 }
      });
      var br = Ie(Ut, 2);
      Se(br, () => e.line ?? pe), Ee(te, (ht) => w = ht, () => w), Me(te, (ht, Mt) => Xt == null ? void 0 : Xt(ht, Mt), () => ({
        ripple: u(),
        unbounded: !1,
        addClass: Pe,
        removeClass: Le,
        addStyle: We
      })), Me(te, (ht, Mt) => W == null ? void 0 : W(ht, Mt), a), L(Y, te);
    };
    ae(Fe, (Y) => {
      O ? Y(ct) : Y(pt, !1);
    });
  }
  var le = Ie(Fe, 2);
  {
    var ye = (Y) => {
      {
        let te = /* @__PURE__ */ ge(() => it(N, "helperLine$"));
        ug(Y, nt(() => s(te), {
          children: (Ne, dt) => {
            var bt = ne(), mt = Z(bt);
            Se(mt, () => e.helper ?? pe), L(Ne, bt);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    ae(le, (Y) => {
      e.helper && Y(ye);
    });
  }
  return L(t, Re), xe(he);
}
var Sg = /* @__PURE__ */ de("<i><!></i>");
function Ag(t, e) {
  Ce(e, !0);
  const n = () => Zn(v, "$leadingStore", r), [r, i] = pr();
  let a = p(e, "use", 19, () => []), o = p(e, "class", 3, ""), c = p(e, "tabindex", 19, () => e.role === "button" ? 0 : -1), u = p(e, "disabled", 3, !1), l = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "role",
    "tabindex",
    "disabled",
    "children"
  ]), d, h = /* @__PURE__ */ ve(void 0), f = new ra(), m = ce({});
  const v = me("SMUI:textfield:icon:leading"), g = n();
  let b = /* @__PURE__ */ ve(void 0);
  const y = /* @__PURE__ */ ge(() => ({ role: e.role, tabindex: c() })), A = me("SMUI:textfield:leading-icon:mount"), I = me("SMUI:textfield:leading-icon:unmount"), _ = me("SMUI:textfield:trailing-icon:mount"), E = me("SMUI:textfield:trailing-icon:unmount");
  rt(() => (z(
    h,
    new rg({
      getAttr: C,
      setAttr: T,
      removeAttr: x,
      setContent: (k) => {
        z(b, k, !0);
      },
      registerInteractionHandler: (k, F) => f.on(S(), k, F),
      deregisterInteractionHandler: (k, F) => f.off(S(), k, F),
      notifyIconAction: () => Je(S(), "SMUITextFieldIcon")
    }),
    !0
  ), g ? A && A(s(h)) : _ && _(s(h)), s(h).init(), () => {
    var k;
    s(h) && (g ? I && I(s(h)) : E && E(s(h))), (k = s(h)) == null || k.destroy(), f.clear();
  }));
  function C(k) {
    return k in m ? m[k] ?? null : S().getAttribute(k);
  }
  function T(k, F) {
    m[k] !== F && (m[k] = F);
  }
  function x(k) {
    (!(k in m) || m[k] != null) && (m[k] = void 0);
  }
  function S() {
    return d;
  }
  var P = { getElement: S }, X = Sg();
  Ue(
    X,
    (k) => ({
      class: k,
      "aria-hidden": c() === -1 ? "true" : "false",
      "aria-disabled": e.role === "button" ? u() ? "true" : "false" : void 0,
      ...s(y),
      ...m,
      ...l
    }),
    [
      () => De({
        "mdc-text-field__icon": !0,
        "mdc-text-field__icon--leading": g,
        "mdc-text-field__icon--trailing": !g,
        [o()]: !0
      })
    ]
  );
  var M = se(X);
  {
    var N = (k) => {
      var F = ne(), K = Z(F);
      Se(K, () => e.children ?? pe), L(k, F);
    }, O = (k) => {
      var F = Rt();
      Oe(() => at(F, s(b))), L(k, F);
    };
    ae(M, (k) => {
      s(b) == null ? k(N) : k(O, !1);
    });
  }
  Ee(X, (k) => d = k, () => d), Me(X, (k, F) => W == null ? void 0 : W(k, F), a), L(t, X);
  var w = xe(P);
  return i(), w;
}
function Cg(t, e) {
  Ce(e, !0);
  let n = p(e, "placeholder", 3, ""), r = p(e, "label", 3, ""), i = p(e, "icon", 3, ""), a = p(e, "value", 15, ""), o = p(e, "variant", 3, "standard"), c = p(e, "styles", 3, ""), u = p(e, "required", 3, !1), l = p(e, "oninput", 3, () => {
  });
  var d = ne(), h = Z(d);
  {
    var f = (v) => {
      {
        const g = (y) => {
          Ag(y, {
            class: "material-icons",
            children: (A, I) => {
              var _ = Rt();
              Oe(() => at(_, i())), L(A, _);
            },
            $$slots: { default: !0 }
          });
        };
        let b = /* @__PURE__ */ ge(() => `width: 100%; ${c()}`);
        Os(v, {
          get label() {
            return r();
          },
          get required() {
            return u();
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
          get oninput() {
            return l();
          },
          get value() {
            return a();
          },
          set value(y) {
            a(y);
          },
          leadingIcon: g,
          $$slots: { leadingIcon: !0 }
        });
      }
    }, m = (v) => {
      Os(v, {
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
          return u();
        },
        get oninput() {
          return l();
        },
        get value() {
          return a();
        },
        set value(g) {
          a(g);
        }
      });
    };
    ae(h, (v) => {
      i() ? v(f) : v(m, !1);
    });
  }
  L(t, d), xe();
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
var xg = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, Tg = {
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
}, fa = {
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
var oi;
(function(t) {
  t[t.TOP_LEFT = 0] = "TOP_LEFT", t[t.TOP_RIGHT = 4] = "TOP_RIGHT", t[t.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", t[t.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", t[t.TOP_START = 8] = "TOP_START", t[t.TOP_END = 12] = "TOP_END", t[t.BOTTOM_START = 9] = "BOTTOM_START", t[t.BOTTOM_END = 13] = "BOTTOM_END";
})(oi || (oi = {}));
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
var yr, or, Xe = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
yr = {}, yr["" + Xe.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", yr["" + Xe.LIST_ITEM_CLASS] = "mdc-list-item", yr["" + Xe.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", yr["" + Xe.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", yr["" + Xe.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", yr["" + Xe.ROOT] = "mdc-list";
var xi = (or = {}, or["" + Xe.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", or["" + Xe.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", or["" + Xe.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", or["" + Xe.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", or["" + Xe.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", or["" + Xe.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", or["" + Xe.ROOT] = "mdc-deprecated-list", or), Ir = {
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
    .` + xi[Xe.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + xi[Xe.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + Xe.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + Xe.LIST_ITEM_CLASS + ` a,
    .` + Xe.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + Xe.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + xi[Xe.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + xi[Xe.LIST_ITEM_CLASS] + ` a,
    .` + xi[Xe.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + xi[Xe.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
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
var wg = ["input", "button", "textarea", "select"], En = function(t) {
  var e = t.target;
  if (e) {
    var n = ("" + e.tagName).toLowerCase();
    wg.indexOf(n) === -1 && t.preventDefault();
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
function Lg() {
  var t = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return t;
}
function Og(t, e) {
  for (var n = /* @__PURE__ */ new Map(), r = 0; r < t; r++) {
    var i = e(r).trim();
    if (i) {
      var a = i[0].toLowerCase();
      n.has(a) || n.set(a, []), n.get(a).push({ text: i.toLowerCase(), index: r });
    }
  }
  return n.forEach(function(o) {
    o.sort(function(c, u) {
      return c.index - u.index;
    });
  }), n;
}
function Rs(t, e) {
  var n = t.nextChar, r = t.focusItemAtIndex, i = t.sortedIndexByFirstChar, a = t.focusedItemIndex, o = t.skipFocus, c = t.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    ed(e);
  }, Et.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + n;
  var u;
  return e.typeaheadBuffer.length === 1 ? u = Rg(i, a, c, e) : u = Mg(i, c, e), u !== -1 && !o && r(u), u;
}
function Rg(t, e, n, r) {
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
  var c = -1, u;
  for (u = 0; u < a.length; u++)
    if (!n(a[u].index)) {
      c = u;
      break;
    }
  for (; u < a.length; u++)
    if (a[u].index > e && !n(a[u].index)) {
      c = u;
      break;
    }
  return c !== -1 ? (r.sortedIndexCursor = c, a[r.sortedIndexCursor].index) : -1;
}
function Mg(t, e, n) {
  var r = n.typeaheadBuffer[0], i = t.get(r);
  if (!i)
    return -1;
  var a = i[n.sortedIndexCursor];
  if (a.text.lastIndexOf(n.typeaheadBuffer, 0) === 0 && !e(a.index))
    return a.index;
  for (var o = (n.sortedIndexCursor + 1) % i.length, c = -1; o !== n.sortedIndexCursor; ) {
    var u = i[o], l = u.text.lastIndexOf(n.typeaheadBuffer, 0) === 0, d = !e(u.index);
    if (l && d) {
      c = o;
      break;
    }
    o = (o + 1) % i.length;
  }
  return c !== -1 ? (n.sortedIndexCursor = c, i[n.sortedIndexCursor].index) : -1;
}
function $c(t) {
  return t.typeaheadBuffer.length > 0;
}
function ed(t) {
  t.typeaheadBuffer = "";
}
function eu(t, e) {
  var n = t.event, r = t.isTargetListItem, i = t.focusedItemIndex, a = t.focusItemAtIndex, o = t.sortedIndexByFirstChar, c = t.isItemAtIndexDisabled, u = Ct(n) === "ArrowLeft", l = Ct(n) === "ArrowUp", d = Ct(n) === "ArrowRight", h = Ct(n) === "ArrowDown", f = Ct(n) === "Home", m = Ct(n) === "End", v = Ct(n) === "Enter", g = Ct(n) === "Spacebar";
  if (n.altKey || n.ctrlKey || n.metaKey || u || l || d || h || f || m || v)
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
      isItemAtIndexDisabled: c
    };
    return Rs(y, e);
  }
  if (!g)
    return -1;
  r && En(n);
  var A = r && $c(e);
  if (A) {
    var y = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: " ",
      sortedIndexByFirstChar: o,
      skipFocus: !1,
      isItemAtIndexDisabled: c
    };
    return Rs(y, e);
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
function Dg(t) {
  return t instanceof Array;
}
var Pg = ["Alt", "Control", "Meta", "Shift"];
function tu(t) {
  var e = new Set(t ? Pg.filter(function(n) {
    return t.getModifierState(n);
  }) : []);
  return function(n) {
    return n.every(function(r) {
      return e.has(r);
    }) && n.length === e.size;
  };
}
var Ng = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n) {
      var r = t.call(this, ue(ue({}, e.defaultAdapter), n)) || this;
      return r.wrapFocus = !1, r.isVertical = !0, r.isSingleSelectionList = !1, r.areDisabledItemsFocusable = !0, r.selectedIndex = Et.UNSET_INDEX, r.focusedItemIndex = Et.UNSET_INDEX, r.useActivatedClass = !1, r.useSelectedAttr = !1, r.ariaCurrentAttrValue = null, r.isCheckboxList = !1, r.isRadioList = !1, r.lastSelectedIndex = null, r.hasTypeahead = !1, r.typeaheadState = Lg(), r.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Ir;
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
        var r = this.adapter.listItemAtIndexHasClass(n, Xe.LIST_ITEM_ACTIVATED_CLASS);
        r && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = n;
      }
    }, e.prototype.getSelectedIndexFromDOM = function() {
      for (var n = Et.UNSET_INDEX, r = this.adapter.getListItemCount(), i = 0; i < r; i++) {
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
      return this.hasTypeahead && $c(this.typeaheadState);
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
      var a = this, o, c = Ct(n) === "ArrowLeft", u = Ct(n) === "ArrowUp", l = Ct(n) === "ArrowRight", d = Ct(n) === "ArrowDown", h = Ct(n) === "Home", f = Ct(n) === "End", m = Ct(n) === "Enter", v = Ct(n) === "Spacebar", g = this.isVertical && d || !this.isVertical && l, b = this.isVertical && u || !this.isVertical && c, y = n.key === "A" || n.key === "a", A = tu(n);
      if (this.adapter.isRootFocused()) {
        if ((b || f) && A([]))
          n.preventDefault(), this.focusLastElement();
        else if ((g || h) && A([]))
          n.preventDefault(), this.focusFirstElement();
        else if (b && A(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var I = this.focusLastElement();
          I !== -1 && this.setSelectedIndexOnAction(I, !1);
        } else if (g && A(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var I = this.focusFirstElement();
          I !== -1 && this.setSelectedIndexOnAction(I, !1);
        }
        if (this.hasTypeahead) {
          var _ = {
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
          eu(_, this.typeaheadState);
        }
        return;
      }
      var E = this.adapter.getFocusedElementIndex();
      if (!(E === -1 && (E = i, E < 0))) {
        if (g && A([]))
          En(n), this.focusNextElement(E);
        else if (b && A([]))
          En(n), this.focusPrevElement(E);
        else if (g && A(["Shift"]) && this.isCheckboxList) {
          En(n);
          var I = this.focusNextElement(E);
          I !== -1 && this.setSelectedIndexOnAction(I, !1);
        } else if (b && A(["Shift"]) && this.isCheckboxList) {
          En(n);
          var I = this.focusPrevElement(E);
          I !== -1 && this.setSelectedIndexOnAction(I, !1);
        } else if (h && A([]))
          En(n), this.focusFirstElement();
        else if (f && A([]))
          En(n), this.focusLastElement();
        else if (h && A(["Control", "Shift"]) && this.isCheckboxList) {
          if (En(n), this.isIndexDisabled(E))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, E, E);
        } else if (f && A(["Control", "Shift"]) && this.isCheckboxList) {
          if (En(n), this.isIndexDisabled(E))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(E, this.adapter.getListItemCount() - 1, E);
        } else if (y && A(["Control"]) && this.isCheckboxList)
          n.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === Et.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((m || v) && A([])) {
          if (r) {
            var C = n.target;
            if (C && C.tagName === "A" && m || (En(n), this.isIndexDisabled(E)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(E, !1), this.adapter.notifyAction(E));
          }
        } else if ((m || v) && A(["Shift"]) && this.isCheckboxList) {
          var C = n.target;
          if (C && C.tagName === "A" && m || (En(n), this.isIndexDisabled(E)))
            return;
          this.isTypeaheadInProgress() || (this.toggleCheckboxRange((o = this.lastSelectedIndex) !== null && o !== void 0 ? o : E, E, E), this.adapter.notifyAction(E));
        }
        if (this.hasTypeahead) {
          var _ = {
            event: n,
            focusItemAtIndex: function(x) {
              a.focusItemAtIndex(x);
            },
            focusedItemIndex: this.focusedItemIndex,
            isTargetListItem: r,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(x) {
              return a.isIndexDisabled(x);
            }
          };
          eu(_, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(n, r, i) {
      var a, o = tu(i);
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
      this.isIndexValid(n, !1) && (r ? (this.adapter.removeClassForElementIndex(n, Xe.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, Ir.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(n, Xe.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, Ir.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(n, r) {
      if (r === void 0 && (r = {}), !(this.selectedIndex === n && !r.forceUpdate)) {
        var i = Xe.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (i = Xe.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== Et.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, i), this.setAriaForSingleSelectionAtIndex(n), this.setTabindexAtIndex(n), n !== Et.UNSET_INDEX && this.adapter.addClassForElementIndex(n, i), this.selectedIndex = n, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([n]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(n) {
      this.selectedIndex === Et.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(n, Ir.ARIA_CURRENT));
      var r = this.ariaCurrentAttrValue !== null, i = r ? Ir.ARIA_CURRENT : Ir.ARIA_SELECTED;
      if (this.selectedIndex !== Et.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), n !== Et.UNSET_INDEX) {
        var a = r ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(n, i, a);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? Ir.ARIA_SELECTED : Ir.ARIA_CHECKED;
    }, e.prototype.setRadioAtIndex = function(n, r) {
      r === void 0 && (r = {});
      var i = this.getSelectionAttribute();
      this.adapter.setCheckedCheckboxOrRadioAtIndex(n, !0), !(this.selectedIndex === n && !r.forceUpdate) && (this.selectedIndex !== Et.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), this.adapter.setAttributeForElementIndex(n, i, "true"), this.selectedIndex = n, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([n]));
    }, e.prototype.setCheckboxAtIndex = function(n, r) {
      r === void 0 && (r = {});
      for (var i = this.selectedIndex, a = r.isUserInteraction ? new Set(i === Et.UNSET_INDEX ? [] : i) : null, o = this.getSelectionAttribute(), c = [], u = 0; u < this.adapter.getListItemCount(); u++) {
        var l = a == null ? void 0 : a.has(u), d = n.indexOf(u) >= 0;
        d !== l && c.push(u), this.adapter.setCheckedCheckboxOrRadioAtIndex(u, d), this.adapter.setAttributeForElementIndex(u, o, d ? "true" : "false");
      }
      this.selectedIndex = n, r.isUserInteraction && c.length && this.adapter.notifySelectionChange(c);
    }, e.prototype.toggleCheckboxRange = function(n, r, i) {
      this.lastSelectedIndex = i;
      for (var a = new Set(this.selectedIndex === Et.UNSET_INDEX ? [] : this.selectedIndex), o = !(a != null && a.has(i)), c = vr([n, r].sort(), 2), u = c[0], l = c[1], d = this.getSelectionAttribute(), h = [], f = u; f <= l; f++)
        if (!this.isIndexDisabled(f)) {
          var m = a.has(f);
          o !== m && (h.push(f), this.adapter.setCheckedCheckboxOrRadioAtIndex(f, o), this.adapter.setAttributeForElementIndex(f, d, "" + o), o ? a.add(f) : a.delete(f));
        }
      h.length && (this.selectedIndex = Qn([], vr(a)), this.adapter.notifySelectionChange(h));
    }, e.prototype.setTabindexAtIndex = function(n) {
      this.focusedItemIndex === Et.UNSET_INDEX && n !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== n && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== n && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), n !== Et.UNSET_INDEX && this.adapter.setAttributeForElementIndex(n, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var n = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(n);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== Et.UNSET_INDEX ? this.selectedIndex : Dg(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(n, r) {
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
      o ? c.push(n) : c = c.filter(function(u) {
        return u !== n;
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
      return Rs(o, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return Og(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      ed(this.typeaheadState);
    }, e;
  }(Tt)
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
var td = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n) {
      var r = t.call(this, ue(ue({}, e.defaultAdapter), n)) || this;
      return r.isSurfaceOpen = !1, r.isQuickOpen = !1, r.isHoistedElement = !1, r.isFixedPosition = !1, r.isHorizontallyCenteredOnViewport = !1, r.maxHeight = 0, r.openBottomBias = 0, r.openAnimationEndTimerId = 0, r.closeAnimationEndTimerId = 0, r.animationRequestId = 0, r.anchorCorner = oi.TOP_START, r.originCorner = oi.TOP_START, r.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, r.position = { x: 0, y: 0 }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return xg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Tg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return fa;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "Corner", {
      get: function() {
        return oi;
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
        }, fa.TRANSITION_OPEN_DURATION);
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
          }, fa.TRANSITION_CLOSE_DURATION);
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
      var r = this.getoriginCorner(), i = this.getMenuSurfaceMaxHeight(r), a = this.hasBit(r, St.BOTTOM) ? "bottom" : "top", o = this.hasBit(r, St.RIGHT) ? "right" : "left", c = this.getHorizontalOriginOffset(r), u = this.getVerticalOriginOffset(r), l = this.measurements, d = l.anchorSize, h = l.surfaceSize, f = (n = {}, n[o] = c, n[a] = u, n);
      d.width / h.width > fa.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (o = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(f), this.adapter.setTransformOrigin(o + " " + a), this.adapter.setPosition(f), this.adapter.setMaxHeight(i ? i + "px" : ""), this.hasBit(r, St.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
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
      var n = this.originCorner, r = this.measurements, i = r.viewportDistance, a = r.anchorSize, o = r.surfaceSize, c = e.numbers.MARGIN_TO_EDGE, u = this.hasBit(this.anchorCorner, St.BOTTOM), l, d;
      u ? (l = i.top - c + this.anchorMargin.bottom, d = i.bottom - c - this.anchorMargin.bottom) : (l = i.top - c + this.anchorMargin.top, d = i.bottom - c + a.height - this.anchorMargin.top);
      var h = d - o.height > 0;
      !h && l > d + this.openBottomBias && (n = this.setBit(n, St.BOTTOM));
      var f = this.adapter.isRtl(), m = this.hasBit(this.anchorCorner, St.FLIP_RTL), v = this.hasBit(this.anchorCorner, St.RIGHT) || this.hasBit(n, St.RIGHT), g = !1;
      f && m ? g = !v : g = v;
      var b, y;
      g ? (b = i.left + a.width + this.anchorMargin.right, y = i.right - this.anchorMargin.right) : (b = i.left + this.anchorMargin.left, y = i.right + a.width - this.anchorMargin.left);
      var A = b - o.width > 0, I = y - o.width > 0, _ = this.hasBit(n, St.FLIP_RTL) && this.hasBit(n, St.RIGHT);
      return I && _ && f || !A && _ ? n = this.unsetBit(n, St.RIGHT) : (A && g && f || A && !g && v || !I && b >= y) && (n = this.setBit(n, St.RIGHT)), n;
    }, e.prototype.getMenuSurfaceMaxHeight = function(n) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var r = this.measurements.viewportDistance, i = 0, a = this.hasBit(n, St.BOTTOM), o = this.hasBit(this.anchorCorner, St.BOTTOM), c = e.numbers.MARGIN_TO_EDGE;
      return a ? (i = r.top + this.anchorMargin.top - c, o || (i += this.measurements.anchorSize.height)) : (i = r.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - c, o && (i -= this.measurements.anchorSize.height)), i;
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
      var r, i, a = this.measurements, o = a.windowScroll, c = a.viewportDistance, u = a.surfaceSize, l = a.viewportSize, d = Object.keys(n);
      try {
        for (var h = Ht(d), f = h.next(); !f.done; f = h.next()) {
          var m = f.value, v = n[m] || 0;
          if (this.isHorizontallyCenteredOnViewport && (m === "left" || m === "right")) {
            n[m] = (l.width - u.width) / 2;
            continue;
          }
          v += c[m], this.isFixedPosition || (m === "top" ? v += o.y : m === "bottom" ? v -= o.y : m === "left" ? v += o.x : v -= o.x), n[m] = v;
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
      }, fa.TOUCH_EVENT_WAIT_MS);
    }, e.prototype.hasBit = function(n, r) {
      return !!(n & r);
    }, e.prototype.setBit = function(n, r) {
      return n | r;
    }, e.prototype.unsetBit = function(n, r) {
      return n ^ r;
    }, e.prototype.isFinite = function(n) {
      return typeof n == "number" && isFinite(n);
    }, e;
  }(Tt)
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
var nu = {
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
function Hg(t) {
  return !!t.document && typeof t.document.createElement == "function";
}
function Ug(t, e) {
  if (Hg(t) && e in nu) {
    var n = t.document.createElement("div"), r = nu[e], i = r.standard, a = r.prefixed, o = i in n.style;
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
var Ni = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
}, Ti = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected",
  SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
}, kg = {
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
var Bg = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n) {
      var r = t.call(this, ue(ue({}, e.defaultAdapter), n)) || this;
      return r.closeAnimationEndTimerId = 0, r.defaultFocusState = Ri.LIST_ROOT, r.selectedIndex = -1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ni;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Ti;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return kg;
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
        var a = this.adapter.getAttributeFromElementAtIndex(i, Ti.SKIP_RESTORE_FOCUS) === "true";
        this.adapter.closeSurface(a), this.closeAnimationEndTimerId = setTimeout(function() {
          var o = r.adapter.getElementIndex(n);
          o >= 0 && r.adapter.isSelectableItemAtIndex(o) && r.setSelectedIndex(o);
        }, td.numbers.TRANSITION_CLOSE_DURATION);
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
      r >= 0 && (this.adapter.removeAttributeFromElementAtIndex(r, Ti.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(r, Ni.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(n, Ni.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(n, Ti.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = n;
    }, e.prototype.setEnabled = function(n, r) {
      this.validatedIndex(n), r ? (this.adapter.removeClassFromElementAtIndex(n, Xe.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, Ti.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(n, Xe.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, Ti.ARIA_DISABLED_ATTR, "true"));
    }, e.prototype.validatedIndex = function(n) {
      var r = this.adapter.getMenuItemCount(), i = n >= 0 && n < r;
      if (!i)
        throw new Error("MDCMenuFoundation: No list item at specified index.");
    }, e;
  }(Tt)
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
}, ns = {
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
var Fg = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n, r) {
      r === void 0 && (r = {});
      var i = t.call(this, ue(ue({}, e.defaultAdapter), n)) || this;
      return i.disabled = !1, i.isMenuOpen = !1, i.useDefaultValidation = !0, i.customValidity = !0, i.lastSelectedIndex = zr.UNSET_INDEX, i.clickDebounceTimeout = 0, i.recentlyClicked = !1, i.leadingIcon = r.leadingIcon, i.helperText = r.helperText, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return gt;
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
        return ns;
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
      this.disabled = n, this.disabled ? (this.adapter.addClass(gt.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(gt.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
    }, e.prototype.openMenu = function() {
      this.adapter.addClass(gt.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true");
    }, e.prototype.setHelperTextContent = function(n) {
      this.helperText && this.helperText.setContent(n);
    }, e.prototype.layout = function() {
      if (this.adapter.hasLabel()) {
        var n = this.getValue().length > 0, r = this.adapter.hasClass(gt.FOCUSED), i = n || r, a = this.adapter.hasClass(gt.REQUIRED);
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
        var r = Ct(n) === ke.ENTER, i = Ct(n) === ke.SPACEBAR, a = Ct(n) === ke.ARROW_UP, o = Ct(n) === ke.ARROW_DOWN, c = n.ctrlKey || n.metaKey;
        if (!c && (!i && n.key && n.key.length === 1 || i && this.adapter.isTypeaheadInProgress())) {
          var u = i ? " " : n.key, l = this.adapter.typeaheadMatchItem(u, this.getSelectedIndex());
          l >= 0 && this.setSelectedIndex(l), n.preventDefault();
          return;
        }
        !r && !i && !a && !o || (this.openMenu(), n.preventDefault());
      }
    }, e.prototype.notchOutline = function(n) {
      if (this.adapter.hasOutline()) {
        var r = this.adapter.hasClass(gt.FOCUSED);
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
      this.useDefaultValidation || (this.customValidity = n), this.adapter.setSelectAnchorAttr("aria-invalid", (!n).toString()), n ? (this.adapter.removeClass(gt.INVALID), this.adapter.removeMenuClass(gt.MENU_INVALID)) : (this.adapter.addClass(gt.INVALID), this.adapter.addMenuClass(gt.MENU_INVALID)), this.syncHelperTextValidity(n);
    }, e.prototype.isValid = function() {
      return this.useDefaultValidation && this.adapter.hasClass(gt.REQUIRED) && !this.adapter.hasClass(gt.DISABLED) ? this.getSelectedIndex() !== zr.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(n) {
      n ? this.adapter.addClass(gt.REQUIRED) : this.adapter.removeClass(gt.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", n.toString()), this.adapter.setLabelRequired(n);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var n = this.adapter.getAnchorElement();
      n && (this.adapter.setMenuAnchorElement(n), this.adapter.setMenuAnchorCorner(oi.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(gt.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(gt.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(gt.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var n = this.adapter.hasClass(gt.REQUIRED);
      n && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.syncHelperTextValidity = function(n) {
      if (this.helperText) {
        this.helperText.setValidity(n);
        var r = this.helperText.isVisible(), i = this.helperText.getId();
        r && i ? this.adapter.setSelectAnchorAttr(ns.ARIA_DESCRIBEDBY, i) : this.adapter.removeSelectAnchorAttr(ns.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.setClickDebounceTimeout = function() {
      var n = this;
      clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout(function() {
        n.recentlyClicked = !1;
      }, zr.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
    }, e;
  }(Tt)
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
}, sr = {
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
var Vg = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n) {
      return t.call(this, ue(ue({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return sr;
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
      n ? this.adapter.addClass(sr.HELPER_TEXT_VALIDATION_MSG) : this.adapter.removeClass(sr.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.setValidationMsgPersistent = function(n) {
      n ? this.adapter.addClass(sr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT) : this.adapter.removeClass(sr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.getIsValidation = function() {
      return this.adapter.hasClass(sr.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.getIsValidationMsgPersistent = function() {
      return this.adapter.hasClass(sr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.setValidity = function(n) {
      var r = this.adapter.hasClass(sr.HELPER_TEXT_VALIDATION_MSG);
      if (r) {
        var i = this.adapter.hasClass(sr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT), a = !n || i;
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
  }(Tt)
), Gg = /* @__PURE__ */ de("<div><!></div>");
function jg(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "static", 3, !1), o = p(e, "anchor", 3, !0), c = p(e, "fixed", 3, !1), u = p(e, "open", 31, () => ce(a())), l = p(e, "managed", 3, !1), d = p(e, "fullWidth", 3, !1), h = p(e, "quickOpen", 3, !1), f = p(e, "anchorElement", 15), m = p(e, "anchorMargin", 19, () => ({ top: 0, right: 0, bottom: 0, left: 0 })), v = p(e, "maxHeight", 3, 0), g = p(e, "horizontallyCenteredOnViewport", 3, !1), b = p(e, "openBottomBias", 3, 0), y = p(e, "neverRestoreFocus", 3, !1), A = /* @__PURE__ */ qe(e, [
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
  ]), I, _ = /* @__PURE__ */ ve(void 0), E = ce({}), C = ce({}), T = /* @__PURE__ */ ve(void 0);
  oe("SMUI:list:role", "menu"), oe("SMUI:list:item:role", "menuitem"), Te(() => {
    var B, $;
    I && o() && !((B = I.parentElement) != null && B.classList.contains("mdc-menu-surface--anchor")) && (($ = I.parentElement) == null || $.classList.add("mdc-menu-surface--anchor"), f(I.parentElement ?? void 0));
  }), Te(() => {
    s(_) && s(_).isOpen() !== u() && (u() ? s(_).open() : s(_).close());
  }), Te(() => {
    s(_) && s(_).setQuickOpen(h());
  }), Te(() => {
    s(_) && s(_).setFixedPosition(c());
  }), Te(() => {
    s(_) && s(_).setMaxHeight(v());
  }), Te(() => {
    s(_) && s(_).setIsHorizontallyCenteredOnViewport(g());
  });
  const x = oi;
  Te(() => {
    s(_) && e.anchorCorner != null && (typeof e.anchorCorner == "string" ? s(_).setAnchorCorner(x[e.anchorCorner]) : s(_).setAnchorCorner(e.anchorCorner));
  }), Te(() => {
    s(_) && s(_).setAnchorMargin(m());
  }), Te(() => {
    s(_) && s(_).setOpenBottomBias(b());
  });
  const S = me("SMUI:menu-surface:mount"), P = me("SMUI:menu-surface:unmount");
  rt(() => {
    z(
      _,
      new td({
        addClass: M,
        removeClass: N,
        hasClass: X,
        hasAnchor: () => !!f(),
        notifyClose: () => {
          l() || u(a()), u() || Je(j(), "SMUIMenuSurfaceClosed");
        },
        notifyClosing: () => {
          l() || u(a()), u() || Je(j(), "SMUIMenuSurfaceClosing");
        },
        notifyOpen: () => {
          l() || u(!0), u() && Je(j(), "SMUIMenuSurfaceOpened");
        },
        notifyOpening: () => {
          u() || Je(j(), "SMUIMenuSurfaceOpening");
        },
        isElementInContainer: ($) => j().contains($),
        isRtl: () => getComputedStyle(j()).getPropertyValue("direction") === "rtl",
        setTransformOrigin: ($) => {
          C["transform-origin"] = $;
        },
        isFocused: () => document.activeElement === j(),
        saveFocus: () => {
          z(T, document.activeElement ?? void 0, !0);
        },
        restoreFocus: () => {
          !y() && (!I || j().contains(document.activeElement)) && s(T) && document.contains(s(T)) && "focus" in s(T) && s(T).focus();
        },
        getInnerDimensions: () => ({
          width: j().offsetWidth,
          height: j().offsetHeight
        }),
        getAnchorDimensions: () => f() ? f().getBoundingClientRect() : null,
        getWindowDimensions: () => ({ width: window.innerWidth, height: window.innerHeight }),
        getBodyDimensions: () => ({
          width: document.body.clientWidth,
          height: document.body.clientHeight
        }),
        getWindowScroll: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
        setPosition: ($) => {
          C.left = "left" in $ ? `${$.left}px` : "", C.right = "right" in $ ? `${$.right}px` : "", C.top = "top" in $ ? `${$.top}px` : "", C.bottom = "bottom" in $ ? `${$.bottom}px` : "";
        },
        setMaxHeight: ($) => {
          C["max-height"] = $;
        }
      }),
      !0
    );
    const B = {
      get open() {
        return u();
      },
      set open($) {
        u($);
      },
      closeProgrammatic: O
    };
    return S && S(B), s(_).init(), () => {
      var Q, fe;
      P && P(B);
      const $ = s(_).isHoistedElement;
      (Q = s(_)) == null || Q.destroy(), $ && ((fe = j().parentNode) == null || fe.removeChild(j()));
    };
  }), Rn(() => {
    var B;
    o() && j() && ((B = j().parentElement) == null || B.classList.remove("mdc-menu-surface--anchor"));
  });
  function X(B) {
    return B in E ? E[B] : j().classList.contains(B);
  }
  function M(B) {
    E[B] || (E[B] = !0);
  }
  function N(B) {
    (!(B in E) || E[B]) && (E[B] = !1);
  }
  function O(B) {
    var $;
    ($ = s(_)) == null || $.close(B), u(!1);
  }
  function w(B) {
    s(_) && u() && !l() && s(_).handleBodyClick(B);
  }
  function k() {
    return u();
  }
  function F(B) {
    u(B);
  }
  function K(B, $) {
    if (s(_) == null)
      throw new Error("Instance is not defined.");
    return s(_).setAbsolutePosition(B, $);
  }
  function ee(B) {
    if (s(_) == null)
      throw new Error("Instance is not defined.");
    return s(_).setIsHoisted(B);
  }
  function H() {
    if (s(_) == null)
      throw new Error("Instance is not defined.");
    return s(_).isFixed();
  }
  function R() {
    if (s(_) == null)
      throw new Error("Instance is not defined.");
    return s(_).flipCornerHorizontally();
  }
  function j() {
    return I;
  }
  var Ae = {
    isOpen: k,
    setOpen: F,
    setAbsolutePosition: K,
    setIsHoisted: ee,
    isFixed: H,
    flipCornerHorizontally: R,
    getElement: j
  }, be = Gg();
  ba("click", qu.body, w, !0);
  var V = (B) => {
    var $;
    s(_) && !l() && s(_).handleKeydown(B), ($ = e.onkeydown) == null || $.call(e, B);
  };
  Ue(
    be,
    (B, $) => ({
      class: B,
      style: $,
      role: "dialog",
      ...A,
      onkeydown: V
    }),
    [
      () => De({
        "mdc-menu-surface": !0,
        "mdc-menu-surface--fixed": c(),
        "mdc-menu-surface--open": a(),
        "smui-menu-surface--static": a(),
        "mdc-menu-surface--fullwidth": d(),
        ...E,
        [r()]: !0
      }),
      () => Object.entries(C).map(([B, $]) => `${B}: ${$};`).concat([i()]).join(" ")
    ]
  );
  var G = se(be);
  return Se(G, () => e.children ?? pe), Ee(be, (B) => I = B, () => I), Me(be, (B, $) => W == null ? void 0 : W(B, $), n), L(t, be), xe(Ae);
}
function rs(t, { addClass: e = (r) => t.classList.add(r), removeClass: n = (r) => t.classList.remove(r) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      n("mdc-menu-surface--anchor");
    }
  };
}
function Wg(t, e) {
  Ce(e, !0);
  const { closest: n } = Fa;
  let r = p(e, "use", 19, () => []), i = p(e, "class", 3, ""), a = p(e, "open", 15, !1), o = p(e, "anchorElement", 15), c = p(e, "managed", 3, !1), u = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "open",
    "anchorElement",
    "managed",
    "children"
  ]), l, d = /* @__PURE__ */ ve(void 0), h = /* @__PURE__ */ ve(void 0), f = /* @__PURE__ */ ve(void 0);
  oe("SMUI:menu-surface:mount", (x) => {
    s(h) || z(h, x, !0);
  });
  const m = me("SMUI:list:mount");
  oe("SMUI:list:mount", (x) => {
    s(f) || z(f, x, !0), m && m(x);
  });
  const v = me("SMUI:menu:mount"), g = me("SMUI:menu:unmount");
  rt(() => (z(
    d,
    new Bg({
      addClassToElementAtIndex: (x, S) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).addClassForElementIndex(x, S);
      },
      removeClassFromElementAtIndex: (x, S) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).removeClassForElementIndex(x, S);
      },
      addAttributeToElementAtIndex: (x, S, P) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).setAttributeForElementIndex(x, S, P);
      },
      removeAttributeFromElementAtIndex: (x, S) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).removeAttributeForElementIndex(x, S);
      },
      getAttributeFromElementAtIndex: (x, S) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).getAttributeFromElementIndex(x, S);
      },
      elementContainsClass: (x, S) => x.classList.contains(S),
      closeSurface: (x) => {
        var S;
        c() || ((S = s(h)) == null || S.closeProgrammatic(x), Je(C(), "SMUIMenuClosedProgrammatically"));
      },
      getElementIndex: (x) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).getOrderedList().map((S) => S.element).indexOf(x);
      },
      notifySelected: (x) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        Je(C(), "SMUIMenuSelected", {
          index: x.index,
          item: s(f).getOrderedList()[x.index].element
        });
      },
      getMenuItemCount: () => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).items.length;
      },
      focusItemAtIndex: (x) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).focusItemAtIndex(x);
      },
      focusListRoot: () => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        "focus" in s(f).element && s(f).element.focus();
      },
      isSelectableItemAtIndex: (x) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return !!n(s(f).getOrderedList()[x].element, `.${Ni.MENU_SELECTION_GROUP}`);
      },
      getSelectedSiblingOfItemAtIndex: (x) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        const S = s(f).getOrderedList(), P = n(S[x].element, `.${Ni.MENU_SELECTION_GROUP}`), X = P == null ? void 0 : P.querySelector(`.${Ni.MENU_SELECTED_LIST_ITEM}`);
        return X ? S.map((M) => M.element).indexOf(X) : -1;
      }
    }),
    !0
  ), v && v(s(d)), s(d).init(), () => {
    var x;
    g && s(d) && g(s(d)), (x = s(d)) == null || x.destroy();
  }));
  function b(x) {
    s(d) && s(d).handleKeydown(x);
  }
  function y() {
    return a();
  }
  function A(x) {
    a(x);
  }
  function I(x) {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    s(d).setDefaultFocusState(x);
  }
  function _() {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    return s(d).getSelectedIndex();
  }
  function E() {
    return l;
  }
  function C() {
    return l.getElement();
  }
  var T = {
    isOpen: y,
    setOpen: A,
    setDefaultFocusState: I,
    getSelectedIndex: _,
    getMenuSurface: E,
    getElement: C
  };
  {
    let x = /* @__PURE__ */ ge(() => De({ "mdc-menu": !0, [i()]: !0 }));
    Ee(
      jg(t, nt(
        {
          get use() {
            return r();
          },
          get class() {
            return s(x);
          },
          get managed() {
            return c();
          }
        },
        () => u,
        {
          onkeydown: (S) => {
            var P;
            b(S), (P = e.onkeydown) == null || P.call(e, S);
          },
          onSMUIMenuSurfaceOpened: (S) => {
            var P;
            s(d) && s(d).handleMenuSurfaceOpened(), (P = e.onSMUIMenuSurfaceOpened) == null || P.call(e, S);
          },
          onSMUIListAction: (S) => {
            var P;
            s(d) && s(f) && s(d).handleItemAction(s(f).getOrderedList()[S.detail.index].element), (P = e.onSMUIListAction) == null || P.call(e, S);
          },
          get open() {
            return a();
          },
          set open(S) {
            a(S);
          },
          get anchorElement() {
            return o();
          },
          set anchorElement(S) {
            o(S);
          },
          children: (S, P) => {
            var X = ne(), M = Z(X);
            Se(M, () => e.children ?? pe), L(S, X);
          },
          $$slots: { default: !0 }
        }
      )),
      (S) => l = S,
      () => l
    );
  }
  return xe(T);
}
function qg(t, e) {
  Ce(e, !0);
  const { closest: n, matches: r } = Fa;
  let i = me("SMUI:list:nav"), a = p(e, "use", 19, () => []), o = p(e, "class", 3, ""), c = p(e, "nonInteractive", 3, !1), u = p(e, "dense", 3, !1), l = p(e, "textualList", 3, !1), d = p(e, "avatarList", 3, !1), h = p(e, "iconList", 3, !1), f = p(e, "imageList", 3, !1), m = p(e, "thumbnailList", 3, !1), v = p(e, "videoList", 3, !1), g = p(e, "twoLine", 3, !1), b = p(e, "threeLine", 3, !1), y = p(e, "vertical", 3, !0), A = p(e, "wrapFocus", 19, () => me("SMUI:list:wrapFocus") ?? !1), I = p(e, "singleSelection", 3, !1), _ = p(e, "disabledItemsFocusable", 3, !1), E = p(e, "selectedIndex", 31, () => -1), C = p(e, "radioList", 3, !1), T = p(e, "checkList", 3, !1), x = p(e, "hasTypeahead", 3, !1), S = p(e, "component", 3, Br), P = p(e, "tag", 3, i ? "nav" : "ul"), X = /* @__PURE__ */ qe(e, [
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
  ]), M, N = /* @__PURE__ */ ve(void 0), O = [], w = me("SMUI:list:role");
  const k = /* @__PURE__ */ new WeakMap();
  let F = me("SMUI:dialog:selection"), K = me("SMUI:addLayoutListener"), ee;
  oe("SMUI:list:nonInteractive", c()), oe("SMUI:separator:context", "list"), w || (I() ? (w = "listbox", oe("SMUI:list:item:role", "option")) : C() ? (w = "radiogroup", oe("SMUI:list:item:role", "radio")) : T() ? (w = "group", oe("SMUI:list:item:role", "checkbox")) : (w = "list", oe("SMUI:list:item:role", void 0))), Te(() => {
    s(N) && s(N).setVerticalOrientation(y());
  }), Te(() => {
    s(N) && s(N).setWrapFocus(A());
  }), Te(() => {
    s(N) && s(N).setHasTypeahead(x());
  }), Te(() => {
    s(N) && s(N).setSingleSelection(I());
  }), Te(() => {
    s(N) && s(N).setDisabledItemsFocusable(_());
  }), Te(() => {
    s(N) && I() && U() !== E() && s(N).setSelectedIndex(E());
  }), K && (ee = K(We)), oe("SMUI:list:item:mount", (le) => {
    O.push(le), k.set(le.element, le), I() && le.selected && E(Le(le.element));
  }), oe("SMUI:list:item:unmount", (le) => {
    const ye = (le && O.findIndex((Y) => Y === le)) ?? -1;
    ye !== -1 && (O.splice(ye, 1), k.delete(le.element));
  });
  const H = me("SMUI:list:mount"), R = me("SMUI:list:unmount");
  rt(() => {
    z(
      N,
      new Ng({
        addClassForElementIndex: Q,
        focusItemAtIndex: he,
        getAttributeForElementIndex: (ye, Y) => {
          var te;
          return ((te = B()[ye]) == null ? void 0 : te.getAttr(Y)) ?? null;
        },
        getFocusedElementIndex: () => document.activeElement ? B().map((ye) => ye.element).indexOf(document.activeElement) : -1,
        getListItemCount: () => O.length,
        getPrimaryTextAtIndex: Pe,
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
        isFocusInsideList: () => M != null && Re() !== document.activeElement && Re().contains(document.activeElement),
        isRootFocused: () => M != null && document.activeElement === Re(),
        listItemAtIndexHasClass: $,
        notifyAction: (ye) => {
          E(ye), M != null && Je(Re(), "SMUIListAction", { index: ye });
        },
        notifySelectionChange: (ye) => {
          M != null && Je(Re(), "SMUIListSelectionChange", { changedIndices: ye });
        },
        removeClassForElementIndex: fe,
        setAttributeForElementIndex: we,
        setCheckedCheckboxOrRadioAtIndex: (ye, Y) => {
          B()[ye].checked = Y;
        },
        setTabIndexForListItemChildren: (ye, Y) => {
          const te = B()[ye];
          Array.prototype.forEach.call(te.element.querySelectorAll("button:not(:disabled), a"), (dt) => {
            dt.setAttribute("tabindex", Y);
          });
        }
      }),
      !0
    );
    const le = {
      get element() {
        return Re();
      },
      get items() {
        return O;
      },
      get typeaheadInProgress() {
        if (!s(N))
          throw new Error("Instance is undefined.");
        return s(N).isTypeaheadInProgress();
      },
      typeaheadMatchItem(ye, Y) {
        if (!s(N))
          throw new Error("Instance is undefined.");
        return s(N).typeaheadMatchItem(
          ye,
          Y,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: B,
      focusItemAtIndex: he,
      addClassForElementIndex: Q,
      removeClassForElementIndex: fe,
      setAttributeForElementIndex: we,
      removeAttributeForElementIndex: J,
      getAttributeFromElementIndex: ie,
      getPrimaryTextAtIndex: Pe
    };
    return H && H(le), s(N).init(), s(N).layout(), () => {
      var ye;
      R && R(le), (ye = s(N)) == null || ye.destroy();
    };
  }), Rn(() => {
    ee && ee();
  });
  function j(le) {
    s(N) && le.target && s(N).handleKeydown(le, le.target.classList.contains("mdc-deprecated-list-item"), Le(le.target));
  }
  function Ae(le) {
    s(N) && le.target && s(N).handleFocusIn(Le(le.target));
  }
  function be(le) {
    s(N) && le.target && s(N).handleFocusOut(Le(le.target));
  }
  function V(le) {
    s(N) && le.target && s(N).handleClick(Le(le.target), !r(le.target, 'input[type="checkbox"], input[type="radio"]'), le);
  }
  function G(le) {
    if (C() || T()) {
      const ye = Le(le.target);
      if (ye !== -1) {
        const Y = B()[ye];
        Y && (C() && !Y.checked || T()) && (r(le.detail.target, 'input[type="checkbox"], input[type="radio"]') || (Y.checked = !Y.checked), Y.activateRipple(), window.requestAnimationFrame(() => {
          Y.deactivateRipple();
        }));
      }
    }
  }
  function B() {
    return M == null ? [] : [...Re().children].map((le) => k.get(le)).filter((le) => le && le._smui_list_item_accessor);
  }
  function $(le, ye) {
    const Y = B()[le];
    return (Y && Y.hasClass(ye)) ?? !1;
  }
  function Q(le, ye) {
    const Y = B()[le];
    Y && Y.addClass(ye);
  }
  function fe(le, ye) {
    const Y = B()[le];
    Y && Y.removeClass(ye);
  }
  function we(le, ye, Y) {
    const te = B()[le];
    te && te.addAttr(ye, Y);
  }
  function J(le, ye) {
    const Y = B()[le];
    Y && Y.removeAttr(ye);
  }
  function ie(le, ye) {
    const Y = B()[le];
    return Y ? Y.getAttr(ye) : null;
  }
  function Pe(le) {
    const ye = B()[le];
    return (ye && ye.getPrimaryText()) ?? "";
  }
  function Le(le) {
    const ye = n(le, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return ye && r(ye, ".mdc-deprecated-list-item") ? B().map((Y) => Y == null ? void 0 : Y.element).indexOf(ye) : -1;
  }
  function We() {
    if (!s(N))
      throw new Error("Instance is undefined.");
    return s(N).layout();
  }
  function Ke(le, ye) {
    if (!s(N))
      throw new Error("Instance is undefined.");
    return s(N).setEnabled(le, ye);
  }
  function Be() {
    if (!s(N))
      throw new Error("Instance is undefined.");
    return s(N).isTypeaheadInProgress();
  }
  function U() {
    if (!s(N))
      throw new Error("Instance is undefined.");
    return s(N).getSelectedIndex();
  }
  function q() {
    if (!s(N))
      throw new Error("Instance is undefined.");
    return s(N).getFocusedItemIndex();
  }
  function he(le) {
    const ye = B()[le];
    ye && "focus" in ye.element && ye.element.focus();
  }
  function Re() {
    return M.getElement();
  }
  var Fe = {
    layout: We,
    setEnabled: Ke,
    getTypeaheadInProgress: Be,
    getSelectedIndex: U,
    getFocusedItemIndex: q,
    focusItemAtIndex: he,
    getElement: Re
  }, ct = ne(), pt = Z(ct);
  {
    let le = /* @__PURE__ */ ge(() => De({
      "mdc-deprecated-list": !0,
      "mdc-deprecated-list--non-interactive": c(),
      "mdc-deprecated-list--dense": u(),
      "mdc-deprecated-list--textual-list": l(),
      "mdc-deprecated-list--avatar-list": d() || F,
      "mdc-deprecated-list--icon-list": h(),
      "mdc-deprecated-list--image-list": f(),
      "mdc-deprecated-list--thumbnail-list": m(),
      "mdc-deprecated-list--video-list": v(),
      "mdc-deprecated-list--two-line": g(),
      "smui-list--three-line": b() && !g(),
      [o()]: !0
    }));
    gr(pt, S, (ye, Y) => {
      Ee(
        Y(ye, nt(
          {
            get tag() {
              return P();
            },
            get use() {
              return a();
            },
            get class() {
              return s(le);
            },
            get role() {
              return w;
            }
          },
          () => X,
          {
            onkeydown: (te) => {
              var Ne;
              j(te), (Ne = e.onkeydown) == null || Ne.call(e, te);
            },
            onfocusin: (te) => {
              var Ne;
              Ae(te), (Ne = e.onfocusin) == null || Ne.call(e, te);
            },
            onfocusout: (te) => {
              var Ne;
              be(te), (Ne = e.onfocusout) == null || Ne.call(e, te);
            },
            onclick: (te) => {
              var Ne;
              V(te), (Ne = e.onclick) == null || Ne.call(e, te);
            },
            onSMUIAction: (te) => {
              var Ne;
              G(te), (Ne = e.onSMUIAction) == null || Ne.call(e, te);
            },
            children: (te, Ne) => {
              var dt = ne(), bt = Z(dt);
              Se(bt, () => e.children ?? pe), L(te, dt);
            },
            $$slots: { default: !0 }
          }
        )),
        (te) => M = te,
        () => M
      );
    });
  }
  return L(t, ct), xe(Fe);
}
let zg = 0;
var Xg = /* @__PURE__ */ de('<span class="mdc-deprecated-list-item__ripple"></span>'), Kg = /* @__PURE__ */ de("<!><!>", 1);
function Yg(t, e) {
  Ce(e, !0);
  let n = () => {
  };
  function r(Q) {
    return Q === n;
  }
  let i = me("SMUI:list:item:nav"), a = p(e, "use", 19, () => []), o = p(e, "class", 3, ""), c = p(e, "style", 3, ""), u = p(e, "nonInteractive", 19, () => me("SMUI:list:nonInteractive") ?? !1), l = p(e, "ripple", 19, () => !u()), d = p(e, "wrapper", 3, !1), h = p(e, "activated", 15, !1), f = p(e, "role", 19, () => d() ? "presentation" : me("SMUI:list:item:role")), m = p(e, "selected", 15, !1), v = p(e, "disabled", 3, !1), g = p(e, "skipRestoreFocus", 3, !1), b = p(e, "tabindex", 15, n), y = p(e, "inputId", 19, () => "SMUI-form-field-list-" + zg++), A = p(e, "component", 3, Br), I = p(e, "tag", 19, () => i ? e.href ? "a" : "span" : "li"), _ = /* @__PURE__ */ qe(e, [
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
  oe("SMUI:list:nonInteractive", void 0), oe("SMUI:list:item:role", void 0);
  let E, C = ce({}), T = ce({}), x = ce({}), S = /* @__PURE__ */ ve(void 0), P = /* @__PURE__ */ ve(void 0);
  const X = /* @__PURE__ */ ge(() => r(b()) ? !u() && !v() && (m() || s(S) && s(S).checked) ? 0 : -1 : b());
  oe("SMUI:generic:input:props", { id: y() }), oe("SMUI:separator:context", void 0), oe("SMUI:generic:input:mount", (Q) => {
    ("_smui_checkbox_accessor" in Q || "_smui_radio_accessor" in Q) && z(S, Q, !0);
  }), oe("SMUI:generic:input:unmount", () => {
    z(S, void 0);
  });
  const M = me("SMUI:list:item:mount"), N = me("SMUI:list:item:unmount");
  rt(() => {
    if (!m() && !u()) {
      let fe = !0, we = E.getElement();
      for (; we.previousElementSibling; )
        if (we = we.previousElementSibling, we.nodeType === 1 && we.classList.contains("mdc-deprecated-list-item") && !we.classList.contains("mdc-deprecated-list-item--disabled")) {
          fe = !1;
          break;
        }
      fe && z(P, window.requestAnimationFrame(() => R(we)), !0);
    }
    const Q = {
      _smui_list_item_accessor: !0,
      get element() {
        return V();
      },
      get selected() {
        return m();
      },
      set selected(fe) {
        m(fe);
      },
      hasClass: O,
      addClass: w,
      removeClass: k,
      getAttr: K,
      addAttr: ee,
      removeAttr: H,
      getPrimaryText: be,
      // For inputs within item.
      get checked() {
        return (s(S) && s(S).checked) ?? !1;
      },
      set checked(fe) {
        s(S) && (s(S).checked = !!fe);
      },
      get hasCheckbox() {
        return !!(s(S) && "_smui_checkbox_accessor" in s(S));
      },
      get hasRadio() {
        return !!(s(S) && "_smui_radio_accessor" in s(S));
      },
      activateRipple() {
        s(S) && s(S).activateRipple();
      },
      deactivateRipple() {
        s(S) && s(S).deactivateRipple();
      },
      // For select options.
      getValue() {
        return e.value;
      },
      // For autocomplete
      action: Ae,
      get tabindex() {
        return s(X);
      },
      set tabindex(fe) {
        b(fe);
      },
      get disabled() {
        return v();
      },
      get activated() {
        return h();
      },
      set activated(fe) {
        h(fe);
      }
    };
    return M && M(Q), () => {
      N && N(Q);
    };
  }), Rn(() => {
    s(P) && window.cancelAnimationFrame(s(P));
  });
  function O(Q) {
    return Q in C ? C[Q] : V().classList.contains(Q);
  }
  function w(Q) {
    C[Q] || (C[Q] = !0);
  }
  function k(Q) {
    (!(Q in C) || C[Q]) && (C[Q] = !1);
  }
  function F(Q, fe) {
    T[Q] != fe && (fe === "" || fe == null ? delete T[Q] : T[Q] = fe);
  }
  function K(Q) {
    return Q in x ? x[Q] ?? null : V().getAttribute(Q);
  }
  function ee(Q, fe) {
    x[Q] !== fe && (x[Q] = fe);
  }
  function H(Q) {
    (!(Q in x) || x[Q] != null) && (x[Q] = void 0);
  }
  function R(Q) {
    let fe = !0;
    for (; Q.nextElementSibling; )
      if (Q = Q.nextElementSibling, Q.nodeType === 1 && Q.classList.contains("mdc-deprecated-list-item")) {
        const we = Q.attributes.getNamedItem("tabindex");
        if (we && we.value === "0") {
          fe = !1;
          break;
        }
      }
    fe && b(0);
  }
  function j(Q) {
    const fe = Q.key === "Enter", we = Q.key === "Space";
    (fe || we) && Ae(Q);
  }
  function Ae(Q) {
    v() || Je(V(), "SMUIAction", Q);
  }
  function be() {
    const Q = V(), fe = Q.querySelector(".mdc-deprecated-list-item__primary-text");
    if (fe)
      return fe.textContent ?? "";
    const we = Q.querySelector(".mdc-deprecated-list-item__text");
    return we ? we.textContent ?? "" : Q.textContent ?? "";
  }
  function V() {
    return E.getElement();
  }
  var G = { action: Ae, getPrimaryText: be, getElement: V }, B = ne(), $ = Z(B);
  {
    let Q = /* @__PURE__ */ ge(() => [
      ...u() ? [] : [
        [
          Xt,
          {
            ripple: !s(S),
            unbounded: !1,
            color: (h() || m()) && e.color == null ? "primary" : e.color,
            disabled: v(),
            addClass: w,
            removeClass: k,
            addStyle: F
          }
        ]
      ],
      ...a()
    ]), fe = /* @__PURE__ */ ge(() => De({
      "mdc-deprecated-list-item": !d(),
      "mdc-deprecated-list-item__wrapper": d(),
      "mdc-deprecated-list-item--activated": h(),
      "mdc-deprecated-list-item--selected": m(),
      "mdc-deprecated-list-item--disabled": v(),
      "mdc-menu-item--selected": !i && f() === "menuitem" && m(),
      "smui-menu-item--non-interactive": u(),
      ...C,
      [o()]: !0
    })), we = /* @__PURE__ */ ge(() => Object.entries(T).map(([ie, Pe]) => `${ie}: ${Pe};`).concat([c()]).join(" ")), J = /* @__PURE__ */ ge(() => g() || void 0);
    gr($, A, (ie, Pe) => {
      Ee(
        Pe(ie, nt(
          {
            get tag() {
              return I();
            },
            get use() {
              return s(Q);
            },
            get class() {
              return s(fe);
            },
            get style() {
              return s(we);
            }
          },
          () => i && h() ? { "aria-current": "page" } : {},
          () => !i || d() ? { role: f() } : {},
          () => !i && f() === "option" ? { "aria-selected": m() ? "true" : "false" } : {},
          () => !i && (f() === "radio" || f() === "checkbox") ? {
            "aria-checked": s(S) && s(S).checked ? "true" : "false"
          } : {},
          () => i ? {} : { "aria-disabled": v() ? "true" : "false" },
          {
            get "data-menu-item-skip-restore-focus"() {
              return s(J);
            },
            get tabindex() {
              return s(X);
            },
            get href() {
              return e.href;
            }
          },
          () => x,
          () => _,
          {
            onclick: (Le) => {
              var We;
              Ae(Le), (We = e.onclick) == null || We.call(e, Le);
            },
            onkeydown: (Le) => {
              var We;
              j(Le), (We = e.onkeydown) == null || We.call(e, Le);
            },
            children: (Le, We) => {
              var Ke = Kg(), Be = Z(Ke);
              {
                var U = (he) => {
                  var Re = Xg();
                  L(he, Re);
                };
                ae(Be, (he) => {
                  l() && he(U);
                });
              }
              var q = Ie(Be);
              Se(q, () => e.children ?? pe), L(Le, Ke);
            },
            $$slots: { default: !0 }
          }
        )),
        (Le) => E = Le,
        () => E
      );
    });
  }
  return L(t, B), xe(G);
}
let Zg = 0;
var Qg = /* @__PURE__ */ de("<div><!></div>");
function Jg(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "id", 19, () => "SMUI-select-helper-text-" + Zg++), a = p(e, "persistent", 3, !1), o = p(e, "validationMsg", 3, !1), c = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "id",
    "persistent",
    "validationMsg",
    "children"
  ]), u, l = /* @__PURE__ */ ve(void 0), d = ce({}), h = ce({}), f = /* @__PURE__ */ ve(void 0);
  const m = me("SMUI:select:helper-text:id"), v = me("SMUI:select:helper-text:mount"), g = me("SMUI:select:helper-text:unmount");
  rt(() => (z(
    l,
    new Vg({
      addClass: y,
      removeClass: A,
      hasClass: b,
      getAttr: I,
      setAttr: _,
      removeAttr: E,
      setContent: (M) => {
        z(f, M, !0);
      }
    }),
    !0
  ), m && m(i()), v && v(s(l)), s(l).init(), () => {
    var M;
    g && s(l) && g(s(l)), (M = s(l)) == null || M.destroy();
  }));
  function b(M) {
    return M in d ? d[M] : C().classList.contains(M);
  }
  function y(M) {
    d[M] || (d[M] = !0);
  }
  function A(M) {
    (!(M in d) || d[M]) && (d[M] = !1);
  }
  function I(M) {
    return M in h ? h[M] ?? null : C().getAttribute(M);
  }
  function _(M, N) {
    h[M] !== N && (h[M] = N);
  }
  function E(M) {
    (!(M in h) || h[M] != null) && (h[M] = void 0);
  }
  function C() {
    return u;
  }
  var T = { getElement: C }, x = Qg();
  Ue(
    x,
    (M) => ({
      class: M,
      "aria-hidden": a() ? void 0 : "true",
      id: i(),
      ...h,
      ...c
    }),
    [
      () => De({
        "mdc-select-helper-text": !0,
        "mdc-select-helper-text--validation-msg": o(),
        "mdc-select-helper-text--validation-msg-persistent": a(),
        ...d,
        [r()]: !0
      })
    ]
  );
  var S = se(x);
  {
    var P = (M) => {
      var N = ne(), O = Z(N);
      Se(O, () => e.children ?? pe), L(M, N);
    }, X = (M) => {
      var N = Rt();
      Oe(() => at(N, s(f))), L(M, N);
    };
    ae(S, (M) => {
      s(f) == null ? M(P) : M(X, !1);
    });
  }
  return Ee(x, (M) => u = M, () => u), Me(x, (M, N) => W == null ? void 0 : W(M, N), n), L(t, x), xe(T);
}
let $g = 0;
var ep = /* @__PURE__ */ de("<input/>"), tp = /* @__PURE__ */ de('<span class="mdc-select__ripple"></span>'), np = /* @__PURE__ */ de('<div><!> <div><!> <!> <!> <!> <span><span> </span></span> <span><svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"><polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon><polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon></svg></span> <!></div> <!></div> <!>', 1);
function rp(t, e) {
  Ce(e, !0);
  const n = () => Zn(Re, "$selectedTextStore", r), [r, i] = pr();
  let a = () => {
  };
  function o(D) {
    return D === a;
  }
  let c = p(e, "use", 19, () => []), u = p(e, "class", 3, ""), l = p(e, "style", 3, ""), d = p(e, "ripple", 3, !0), h = p(e, "disabled", 3, !1), f = p(e, "variant", 3, "standard"), m = p(e, "noLabel", 3, !1), v = p(e, "label", 3, void 0), g = p(e, "value", 15), b = p(e, "key", 3, (D) => D), y = p(e, "dirty", 15, !1), A = p(e, "invalid", 15, a), I = p(e, "updateInvalid", 19, () => o(A())), _ = p(e, "required", 3, !1), E = p(e, "inputId", 19, () => "SMUI-select-" + $g++), C = p(e, "hiddenInput", 3, !1), T = p(e, "withLeadingIcon", 3, a), x = p(e, "anchor$use", 19, () => []), S = p(e, "anchor$class", 3, ""), P = p(e, "selectedTextContainer$use", 19, () => []), X = p(e, "selectedTextContainer$class", 3, ""), M = p(e, "selectedText$use", 19, () => []), N = p(e, "selectedText$class", 3, ""), O = p(e, "dropdownIcon$use", 19, () => []), w = p(e, "dropdownIcon$class", 3, ""), k = p(e, "menu$class", 3, ""), F = /* @__PURE__ */ qe(e, [
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
  const K = o(A());
  o(A()) && A(!1);
  let ee, H = /* @__PURE__ */ ve(void 0), R = ce({}), j = ce({}), Ae, be = ce({}), V = /* @__PURE__ */ ve(-1);
  const G = /* @__PURE__ */ ge(() => F.menu$id ?? E() + "-menu");
  let B = /* @__PURE__ */ ve(void 0), $ = me("SMUI:addLayoutListener"), Q, fe = /* @__PURE__ */ ve(!1), we = ce({}), J = /* @__PURE__ */ ve(void 0), ie = /* @__PURE__ */ ve(void 0), Pe = /* @__PURE__ */ ve(!1), Le, We = me("SMUI:select:context"), Ke, Be, U, q, he;
  oe("SMUI:list:role", ""), oe("SMUI:list:nav", !1);
  const Re = tn("");
  oe("SMUI:select:selectedText", Re);
  const Fe = tn(g());
  Te(() => {
    ui(Fe, g());
  }), oe("SMUI:select:value", Fe), Te(() => {
    s(H) && s(H).getValue() !== b()(g()) && s(H).setValue(b()(g()));
  });
  let ct = s(V);
  Te(() => {
    if (ct !== s(V))
      if (ct = s(V), s(H))
        s(H).setSelectedIndex(
          s(V),
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const D = Ut();
        g() !== D[s(V)] && g(D[s(V)]);
      }
  }), Te(() => {
    s(H) && s(H).getDisabled() !== h() && s(H).setDisabled(h());
  }), Te(() => {
    s(H) && y() && s(H).isValid() !== !A() && (I() ? A(!s(H).isValid()) : s(H).setValid(!A()));
  }), Te(() => {
    s(H) && s(H).getRequired() !== _() && s(H).setRequired(_());
  }), $ && (Q = $(yi)), oe("SMUI:select:leading-icon:mount", (D) => {
    Ke = D;
  }), oe("SMUI:select:leading-icon:unmount", () => {
    Ke = void 0;
  }), oe("SMUI:list:mount", (D) => {
    Le = D;
  }), oe("SMUI:select:helper-text:id", (D) => {
    z(B, D, !0);
  }), oe("SMUI:select:helper-text:mount", (D) => {
    Be = D;
  }), oe("SMUI:select:helper-text:unmount", () => {
    z(B, void 0), Be = void 0;
  }), rt(() => (z(
    H,
    new Fg(
      {
        // getSelectAdapterMethods
        // getMenuItemAttr: (menuItem: Element, attr: string) =>
        //   menuItem.getAttribute(attr),
        setSelectedText: (D) => {
          ui(Re, D);
        },
        isSelectAnchorFocused: () => document.activeElement === Ae,
        getSelectAnchorAttr: dt,
        setSelectAnchorAttr: bt,
        removeSelectAnchorAttr: mt,
        addMenuClass: te,
        removeMenuClass: Ne,
        openMenu: () => {
          z(fe, !0);
        },
        closeMenu: () => {
          z(fe, !1);
        },
        getAnchorElement: () => Ae,
        setMenuAnchorElement: (D) => {
          z(J, D, !0);
        },
        setMenuAnchorCorner: (D) => {
          z(ie, D, !0);
        },
        setMenuWrapFocus: (D) => {
          z(Pe, D, !0);
        },
        getSelectedIndex: () => s(V),
        setSelectedIndex: (D) => {
          ct = D, z(V, D, !0), g(Ut()[s(V)]);
        },
        focusMenuItemAtIndex: (D) => {
          Le.focusItemAtIndex(D);
        },
        getMenuItemCount: () => Le.items.length,
        getMenuItemValues: () => Ut().map(b()),
        getMenuItemTextAtIndex: (D) => Le.getPrimaryTextAtIndex(D),
        isTypeaheadInProgress: () => Le.typeaheadInProgress,
        typeaheadMatchItem: (D, _e) => Le.typeaheadMatchItem(D, _e),
        // getCommonAdapterMethods
        addClass: le,
        removeClass: ye,
        hasClass: pt,
        setRippleCenter: (D) => q && q.setRippleCenter(D),
        activateBottomLine: () => q && q.activate(),
        deactivateBottomLine: () => q && q.deactivate(),
        notifyChange: (D) => {
          var _e;
          y(!0), I() && A(!((_e = s(H)) != null && _e.isValid())), Je(Vn(), "SMUISelectChange", { value: g(), index: s(V) });
        },
        // getOutlineAdapterMethods
        hasOutline: () => !!he,
        notchOutline: (D) => he && he.notch(D),
        closeOutline: () => he && he.closeNotch(),
        // getLabelAdapterMethods
        hasLabel: () => !!U,
        floatLabel: (D) => U && U.float(D),
        getLabelWidth: () => U ? U.getWidth() : 0,
        setLabelRequired: (D) => U && U.setRequired(D)
      },
      {
        get helperText() {
          return Be;
        },
        get leadingIcon() {
          return Ke;
        }
      }
    ),
    !0
  ), z(V, Ut().indexOf(g()), !0), s(H).init(), It(K), () => {
    var D;
    (D = s(H)) == null || D.destroy();
  })), Rn(() => {
    Q && Q();
  });
  function pt(D) {
    return D in R ? R[D] : Vn().classList.contains(D);
  }
  function le(D) {
    R[D] || (R[D] = !0);
  }
  function ye(D) {
    (!(D in R) || R[D]) && (R[D] = !1);
  }
  function Y(D, _e) {
    j[D] != _e && (_e === "" || _e == null ? delete j[D] : j[D] = _e);
  }
  function te(D) {
    we[D] || (we[D] = !0);
  }
  function Ne(D) {
    (!(D in we) || we[D]) && (we[D] = !1);
  }
  function dt(D) {
    return D in be ? be[D] ?? null : Vn().getAttribute(D);
  }
  function bt(D, _e) {
    be[D] !== _e && (be[D] = _e);
  }
  function mt(D) {
    (!(D in be) || be[D] != null) && (be[D] = void 0);
  }
  function Ut() {
    return Le.getOrderedList().map((D) => D.getValue());
  }
  function br(D) {
    const _e = D.currentTarget.getBoundingClientRect();
    return (ht(D) ? D.touches[0].clientX : D.clientX) - _e.left;
  }
  function ht(D) {
    return "touches" in D;
  }
  function Mt() {
    if (s(H) == null)
      throw new Error("Instance is undefined.");
    return s(H).getUseDefaultValidation();
  }
  function It(D) {
    var _e;
    (_e = s(H)) == null || _e.setUseDefaultValidation(D);
  }
  function Dn() {
    Ae.focus();
  }
  function yi() {
    var D;
    (D = s(H)) == null || D.layout();
  }
  function Vn() {
    return ee;
  }
  var ze = {
    getUseDefaultValidation: Mt,
    setUseDefaultValidation: It,
    focus: Dn,
    layout: yi,
    getElement: Vn
  }, Qe = np(), $e = Z(Qe);
  Ue($e, (D, _e, ft) => ({ class: D, style: _e, ...ft }), [
    () => De({
      "mdc-select": !0,
      "mdc-select--required": _(),
      "mdc-select--disabled": h(),
      "mdc-select--filled": f() === "filled",
      "mdc-select--outlined": f() === "outlined",
      "smui-select--standard": f() === "standard",
      "mdc-select--with-leading-icon": o(T()) ? e.leadingIcon : T(),
      "mdc-select--no-label": m() || v() == null,
      "mdc-select--invalid": A(),
      "mdc-select--activated": s(fe),
      "mdc-data-table__pagination-rows-per-page-select": We === "data-table:pagination",
      ...R,
      [u()]: !0
    }),
    () => Object.entries(j).map(([D, _e]) => `${D}: ${_e};`).concat([l()]).join(" "),
    () => $n(F, [
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
  var Dt = se($e);
  {
    var gn = (D) => {
      var _e = ep();
      Ue(
        _e,
        (ft) => ({
          type: "hidden",
          required: _(),
          disabled: h(),
          value: g(),
          ...ft
        }),
        [() => it(F, "input$")],
        void 0,
        void 0,
        !0
      ), L(D, _e);
    };
    ae(Dt, (D) => {
      C() && D(gn);
    });
  }
  var ot = Ie(Dt, 2), ut = (D) => {
    var _e;
    Ae.focus(), s(H) && s(H).handleClick(br(D)), (_e = e.anchor$onclick) == null || _e.call(e, D);
  }, At = (D) => {
    var _e;
    s(H) && s(H).handleKeydown(D), (_e = e.onkeydown) == null || _e.call(e, D);
  }, et = (D) => {
    var _e;
    s(H) && s(H).handleBlur(), Je(Vn(), "blur", D), (_e = e.anchor$onblur) == null || _e.call(e, D);
  }, wt = (D) => {
    var _e;
    s(H) && s(H).handleFocus(), Je(Vn(), "focus", D), (_e = e.anchor$onfocus) == null || _e.call(e, D);
  };
  Ue(
    ot,
    (D, _e) => ({
      class: D,
      "aria-required": _() ? "true" : void 0,
      "aria-disabled": h() ? "true" : void 0,
      "aria-controls": s(G),
      "aria-expanded": s(fe) ? "true" : "false",
      "aria-describedby": s(B),
      role: "combobox",
      tabindex: "0",
      ...be,
      ..._e,
      onclick: ut,
      onkeydown: At,
      onblur: et,
      onfocus: wt
    }),
    [
      () => De({ "mdc-select__anchor": !0, [S()]: !0 }),
      () => it(F, "anchor$")
    ]
  );
  var Pn = se(ot);
  {
    var Lt = (D) => {
      var _e = tp();
      L(D, _e);
    };
    ae(Pn, (D) => {
      f() === "filled" && D(Lt);
    });
  }
  var _t = Ie(Pn, 2);
  {
    var Pt = (D) => {
      {
        let _e = /* @__PURE__ */ ge(() => E() + "-smui-label"), ft = /* @__PURE__ */ ge(() => n() !== ""), Ot = /* @__PURE__ */ ge(() => it(F, "label$"));
        Ee(
          Io(D, nt(
            {
              get id() {
                return s(_e);
              },
              get floatAbove() {
                return s(ft);
              },
              get required() {
                return _();
              }
            },
            () => s(Ot),
            {
              children: (rr, ir) => {
                var aa = ne(), Ii = Z(aa);
                {
                  var Gr = (jr) => {
                  }, Go = (jr) => {
                    var ja = ne(), oa = Z(ja);
                    {
                      var ol = (_r) => {
                        var Wr = Rt();
                        Oe(() => at(Wr, v())), L(_r, Wr);
                      }, Wa = (_r) => {
                        var Wr = ne(), jo = Z(Wr);
                        Se(jo, v), L(_r, Wr);
                      };
                      ae(
                        oa,
                        (_r) => {
                          typeof v() == "string" ? _r(ol) : _r(Wa, !1);
                        },
                        !0
                      );
                    }
                    L(jr, ja);
                  };
                  ae(Ii, (jr) => {
                    v() == null ? jr(Gr) : jr(Go, !1);
                  });
                }
                L(rr, aa);
              },
              $$slots: { default: !0 }
            }
          )),
          (rr) => U = rr,
          () => U
        );
      }
    };
    ae(_t, (D) => {
      f() !== "outlined" && !m() && v() != null && D(Pt);
    });
  }
  var ln = Ie(_t, 2);
  {
    var kt = (D) => {
      {
        let _e = /* @__PURE__ */ ge(() => m() || v() == null), ft = /* @__PURE__ */ ge(() => it(F, "outline$"));
        Ee(
          Jc(D, nt(
            {
              get noLabel() {
                return s(_e);
              }
            },
            () => s(ft),
            {
              children: (Ot, rr) => {
                var ir = ne(), aa = Z(ir);
                {
                  var Ii = (Gr) => {
                    {
                      let Go = /* @__PURE__ */ ge(() => E() + "-smui-label"), jr = /* @__PURE__ */ ge(() => n() !== ""), ja = /* @__PURE__ */ ge(() => it(F, "label$"));
                      Ee(
                        Io(Gr, nt(
                          {
                            get id() {
                              return s(Go);
                            },
                            get floatAbove() {
                              return s(jr);
                            },
                            get required() {
                              return _();
                            }
                          },
                          () => s(ja),
                          {
                            children: (oa, ol) => {
                              var Wa = ne(), _r = Z(Wa);
                              {
                                var Wr = (sa) => {
                                }, jo = (sa) => {
                                  var sl = ne(), Rd = Z(sl);
                                  {
                                    var Md = (Ei) => {
                                      var la = Rt();
                                      Oe(() => at(la, v())), L(Ei, la);
                                    }, Dd = (Ei) => {
                                      var la = ne(), Pd = Z(la);
                                      Se(Pd, v), L(Ei, la);
                                    };
                                    ae(
                                      Rd,
                                      (Ei) => {
                                        typeof v() == "string" ? Ei(Md) : Ei(Dd, !1);
                                      },
                                      !0
                                    );
                                  }
                                  L(sa, sl);
                                };
                                ae(_r, (sa) => {
                                  v() == null ? sa(Wr) : sa(jo, !1);
                                });
                              }
                              L(oa, Wa);
                            },
                            $$slots: { default: !0 }
                          }
                        )),
                        (oa) => U = oa,
                        () => U
                      );
                    }
                  };
                  ae(aa, (Gr) => {
                    !m() && v() != null && Gr(Ii);
                  });
                }
                L(Ot, ir);
              },
              $$slots: { default: !0 }
            }
          )),
          (Ot) => he = Ot,
          () => he
        );
      }
    };
    ae(ln, (D) => {
      f() === "outlined" && D(kt);
    });
  }
  var un = Ie(ln, 2);
  Se(un, () => e.leadingIcon ?? pe);
  var Yt = Ie(un, 2);
  Ue(Yt, (D, _e) => ({ class: D, ..._e }), [
    () => De({
      "mdc-select__selected-text-container": !0,
      [X()]: !0
    }),
    () => it(F, "selectedTextContainer$")
  ]);
  var Gn = se(Yt);
  Ue(
    Gn,
    (D, _e) => ({
      id: E() + "-smui-selected-text",
      class: D,
      role: "button",
      "aria-haspopup": "listbox",
      "aria-labelledby": E() + "-smui-label",
      ..._e
    }),
    [
      () => De({
        "mdc-select__selected-text": !0,
        [N()]: !0
      }),
      () => it(F, "selectedText$")
    ]
  );
  var Fr = se(Gn);
  Me(Gn, (D, _e) => W == null ? void 0 : W(D, _e), M), Me(Yt, (D, _e) => W == null ? void 0 : W(D, _e), P);
  var cn = Ie(Yt, 2);
  Ue(cn, (D, _e) => ({ class: D, ..._e }), [
    () => De({
      "mdc-select__dropdown-icon": !0,
      [w()]: !0
    }),
    () => it(F, "dropdownIcon$")
  ]), Me(cn, (D, _e) => W == null ? void 0 : W(D, _e), O);
  var jt = Ie(cn, 2);
  {
    var jn = (D) => {
      {
        let _e = /* @__PURE__ */ ge(() => it(F, "ripple$"));
        Ee(Qc(D, nt(() => s(_e))), (ft) => q = ft, () => q);
      }
    };
    ae(jt, (D) => {
      f() !== "outlined" && d() && D(jn);
    });
  }
  Ee(ot, (D) => Ae = D, () => Ae), Me(ot, (D, _e) => W == null ? void 0 : W(D, _e), x);
  var Vr = Ie(ot, 2);
  {
    let D = /* @__PURE__ */ ge(() => De({
      "mdc-select__menu": !0,
      ...we,
      [k()]: !0
    })), _e = /* @__PURE__ */ ge(() => it(F, "menu$"));
    Wg(Vr, nt(
      {
        get class() {
          return s(D);
        },
        get id() {
          return s(G);
        },
        fullWidth: !0,
        anchor: !1,
        get anchorElement() {
          return s(J);
        },
        get anchorCorner() {
          return s(ie);
        }
      },
      () => s(_e),
      {
        onSMUIMenuSelected: (ft) => {
          var Ot;
          s(H) && s(H).handleMenuItemAction(ft.detail.index), (Ot = e.onSMUIMenuSelected) == null || Ot.call(e, ft);
        },
        onSMUIMenuSurfaceClosing: (ft) => {
          var Ot;
          s(H) && s(H).handleMenuClosing(), (Ot = e.onSMUIMenuSurfaceClosing) == null || Ot.call(e, ft);
        },
        onSMUIMenuSurfaceClosed: (ft) => {
          var Ot;
          s(H) && s(H).handleMenuClosed(), (Ot = e.onSMUIMenuSurfaceClosed) == null || Ot.call(e, ft);
        },
        onSMUIMenuSurfaceOpened: (ft) => {
          var Ot;
          s(H) && s(H).handleMenuOpened(), (Ot = e.onSMUIMenuSurfaceOpened) == null || Ot.call(e, ft);
        },
        get open() {
          return s(fe);
        },
        set open(ft) {
          z(fe, ft, !0);
        },
        children: (ft, Ot) => {
          {
            let rr = /* @__PURE__ */ ge(() => it(F, "list$"));
            qg(ft, nt(
              {
                role: "listbox",
                get wrapFocus() {
                  return s(Pe);
                }
              },
              () => s(rr),
              {
                get selectedIndex() {
                  return s(V);
                },
                set selectedIndex(ir) {
                  z(V, ir, !0);
                },
                children: (ir, aa) => {
                  var Ii = ne(), Gr = Z(Ii);
                  Se(Gr, () => e.children ?? pe), L(ir, Ii);
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
  Ee($e, (D) => ee = D, () => ee), Me($e, (D, _e) => Xt == null ? void 0 : Xt(D, _e), () => ({
    ripple: f() === "filled",
    unbounded: !1,
    addClass: le,
    removeClass: ye,
    addStyle: Y
  })), Me($e, (D, _e) => rs == null ? void 0 : rs(D, _e), () => ({ addClass: le, removeClass: ye })), Me($e, (D, _e) => W == null ? void 0 : W(D, _e), c);
  var Vo = Ie($e, 2);
  {
    var Ld = (D) => {
      {
        let _e = /* @__PURE__ */ ge(() => it(F, "helperText$"));
        Jg(D, nt(() => s(_e), {
          children: (ft, Ot) => {
            var rr = ne(), ir = Z(rr);
            Se(ir, () => e.helperText ?? pe), L(ft, rr);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    ae(Vo, (D) => {
      e.helperText && D(Ld);
    });
  }
  Oe(() => at(Fr, n())), L(t, Qe);
  var Od = xe(ze);
  return i(), Od;
}
function ip(t, e) {
  Ce(e, !0);
  const n = () => Zn(d, "$selectedValue", r), [r, i] = pr();
  let a = p(e, "use", 19, () => []);
  p(e, "class", 3, "");
  let o = p(e, "value", 3, ""), c = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "value",
    "children"
  ]), u;
  const l = me("SMUI:select:selectedText"), d = me("SMUI:select:value");
  oe("SMUI:list:item:role", "option");
  const h = /* @__PURE__ */ ge(() => o() != null && o() !== "" && n() === o());
  rt(f), Rn(f);
  function f() {
    s(h) && u && ui(l, u.getPrimaryText());
  }
  function m() {
    return u.getElement();
  }
  var v = { getElement: m };
  Ee(
    Yg(t, nt(
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
        children: (b, y) => {
          var A = ne(), I = Z(A);
          Se(I, () => e.children ?? pe), L(b, A);
        },
        $$slots: { default: !0 }
      }
    )),
    (b) => u = b,
    () => u
  );
  var g = xe(v);
  return i(), g;
}
function ap(t, e) {
  Ce(e, !0);
  let n = p(e, "data", 19, () => []);
  p(e, "placeholder", 3, "");
  let r = p(e, "label", 3, "");
  p(e, "description", 3, "");
  let i = p(e, "value", 15), a = p(e, "required", 3, !1);
  p(e, "size", 3, "sm");
  let o = p(e, "variant", 3, "standard"), c = p(e, "selectedOptionIndex", 31, () => -1), u = p(e, "disabled", 3, !1);
  function l(d) {
    return () => c(d);
  }
  rp(t, {
    get disabled() {
      return u();
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
      var f = ne(), m = Z(f);
      xn(m, 17, n, Oi, (v, g, b) => {
        {
          let y = /* @__PURE__ */ ge(() => l(b));
          ip(v, {
            get onclick() {
              return s(y);
            },
            get value() {
              return s(g).value;
            },
            children: (A, I) => {
              var _ = Rt();
              Oe(() => at(_, s(g).label)), L(A, _);
            },
            $$slots: { default: !0 }
          });
        }
      }), L(d, f);
    },
    $$slots: { default: !0 }
  }), xe();
}
const op = tn([]);
op.subscribe;
ce({ freeze: !1 });
var sp = /* @__PURE__ */ de("<div><!></div>");
function lp(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "variant", 3, "raised"), a = p(e, "square", 3, !1), o = p(e, "color", 3, "default"), c = p(e, "elevation", 3, 1), u = p(e, "transition", 3, !1), l = /* @__PURE__ */ qe(e, [
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
  var f = { getElement: h }, m = sp();
  Ue(m, (g) => ({ class: g, ...l }), [
    () => De({
      "smui-paper": !0,
      "smui-paper--raised": i() === "raised",
      "smui-paper--unelevated": i() === "unelevated",
      "smui-paper--outlined": i() === "outlined",
      ["smui-paper--elevation-z" + c()]: c() !== 0 && i() === "raised",
      "smui-paper--rounded": !a(),
      ["smui-paper--color-" + o()]: o() !== "default",
      "smui-paper-transition": u(),
      [r()]: !0
    })
  ]);
  var v = se(m);
  return Se(v, () => e.children ?? pe), Ee(m, (g) => d = g, () => d), Me(m, (g, b) => W == null ? void 0 : W(g, b), n), L(t, m), xe(f);
}
const Bt = [];
for (let t = 0; t < 256; ++t)
  Bt.push((t + 256).toString(16).slice(1));
function up(t, e = 0) {
  return (Bt[t[e + 0]] + Bt[t[e + 1]] + Bt[t[e + 2]] + Bt[t[e + 3]] + "-" + Bt[t[e + 4]] + Bt[t[e + 5]] + "-" + Bt[t[e + 6]] + Bt[t[e + 7]] + "-" + Bt[t[e + 8]] + Bt[t[e + 9]] + "-" + Bt[t[e + 10]] + Bt[t[e + 11]] + Bt[t[e + 12]] + Bt[t[e + 13]] + Bt[t[e + 14]] + Bt[t[e + 15]]).toLowerCase();
}
let is;
const cp = new Uint8Array(16);
function dp() {
  if (!is) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    is = crypto.getRandomValues.bind(crypto);
  }
  return is(cp);
}
const fp = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), ru = { randomUUID: fp };
function Yr(t, e, n) {
  var i;
  if (ru.randomUUID && !e && !t)
    return ru.randomUUID();
  t = t || {};
  const r = t.random ?? ((i = t.rng) == null ? void 0 : i.call(t)) ?? dp();
  if (r.length < 16)
    throw new Error("Random bytes length must be >= 16");
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    if (n = n || 0, n < 0 || n + 16 > e.length)
      throw new RangeError(`UUID byte range ${n}:${n + 15} is out of buffer bounds`);
    for (let a = 0; a < 16; ++a)
      e[n + a] = r[a];
    return e;
  }
  return up(r);
}
var hp = /* @__PURE__ */ de('<span class="oscd-icon"><!></span>');
function tr(t, e) {
  var n = hp(), r = se(n);
  Se(r, () => e.children ?? pe), L(t, n);
}
var vp = /* @__PURE__ */ vn('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');
function mp(t, e) {
  let n = p(e, "svgStyles", 3, "");
  tr(t, {
    children: (r, i) => {
      var a = vp();
      Oe(() => Gt(a, n())), L(r, a);
    }
  });
}
var gp = /* @__PURE__ */ vn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function nd(t, e) {
  let n = p(e, "svgStyles", 3, "");
  tr(t, {
    children: (r, i) => {
      var a = gp();
      Oe(() => Gt(a, n())), L(r, a);
    }
  });
}
var pp = /* @__PURE__ */ vn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');
function bp(t, e) {
  let n = p(e, "svgStyles", 3, "");
  tr(t, {
    children: (r, i) => {
      var a = pp();
      Oe(() => Gt(a, n())), L(r, a);
    }
  });
}
var _p = /* @__PURE__ */ vn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"></path></svg>');
function yp(t, e) {
  let n = p(e, "svgStyles", 3, "");
  tr(t, {
    children: (r, i) => {
      var a = _p();
      Oe(() => Gt(a, n())), L(r, a);
    }
  });
}
var Ip = /* @__PURE__ */ vn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"></path></svg>');
function Ep(t, e) {
  let n = p(e, "svgStyles", 3, "");
  tr(t, {
    children: (r, i) => {
      var a = Ip();
      Oe(() => Gt(a, n())), L(r, a);
    }
  });
}
var Sp = /* @__PURE__ */ vn('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function Ap(t, e) {
  let n = p(e, "svgStyles", 3, "");
  tr(t, {
    children: (r, i) => {
      var a = Sp();
      Oe(() => Gt(a, n())), L(r, a);
    }
  });
}
var Cp = /* @__PURE__ */ vn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function xp(t, e) {
  let n = p(e, "svgStyles", 3, "");
  tr(t, {
    children: (r, i) => {
      var a = Cp();
      Oe(() => Gt(a, n())), L(r, a);
    }
  });
}
var Tp = /* @__PURE__ */ vn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function wp(t, e) {
  let n = p(e, "svgStyles", 3, "");
  tr(t, {
    children: (r, i) => {
      var a = Tp();
      Oe(() => Gt(a, n())), L(r, a);
    }
  });
}
sf();
var Lp = /* @__PURE__ */ vn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"></path></svg>');
function Op(t, e) {
  let n = p(e, "svgStyles", 3, "");
  tr(t, {
    children: (r, i) => {
      var a = Lp();
      Oe(() => Gt(a, n())), L(r, a);
    }
  });
}
var Rp = /* @__PURE__ */ vn('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3" cursor="pointer"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Mp(t, e) {
  let n = p(e, "svgStyles", 8, "");
  tr(t, {
    children: (r, i) => {
      var a = Rp();
      Oe(() => Gt(a, n())), L(r, a);
    }
  });
}
function Dp(t, e) {
  e(t.target.value);
}
var Pp = /* @__PURE__ */ de('<div class="custom-text-field svelte-1719vm0"><input type="date" id="datetime-picker" class="custom-text-field__input svelte-1719vm0" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-1719vm0"> </label> <span class="custom-line svelte-1719vm0"></span></div>');
function Np(t, e) {
  Ce(e, !0);
  let n = p(e, "label", 3, ""), r = p(e, "value", 15, "");
  var i = Pp(), a = se(i);
  a.__change = [Dp, r];
  var o = Ie(a, 2), c = se(o);
  Oe(() => at(c, n())), Ca(a, r), L(t, i), xe();
}
On(["change"]);
function Hp(t, e) {
  e(t.target.value);
}
var Up = /* @__PURE__ */ de('<div class="custom-text-field svelte-6wdfbb"><input type="datetime-local" id="datetime-picker" class="custom-text-field__input svelte-6wdfbb" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-6wdfbb"> </label> <span class="custom-line svelte-6wdfbb"></span></div>');
function kp(t, e) {
  Ce(e, !0);
  let n = p(e, "label", 3, ""), r = p(e, "value", 15, "");
  var i = Up(), a = se(i);
  a.__change = [Hp, r];
  var o = Ie(a, 2), c = se(o);
  Oe(() => at(c, n())), Ca(a, r), L(t, i), xe();
}
On(["change"]);
var Bp = /* @__PURE__ */ de('<details class="svelte-1sq8fnx"><summary class="svelte-1sq8fnx"> </summary> <div class="expandable-content svelte-1sq8fnx"><!></div></details>');
function rd(t, e) {
  Ce(e, !0);
  let n = p(e, "title", 3, ""), r = p(e, "open", 11, !1);
  lp(t, {
    children: (i, a) => {
      var o = Bp(), c = se(o), u = se(c), l = Ie(c, 2), d = se(l);
      Se(d, () => e.content ?? pe), Oe(() => {
        o.open = r(), at(u, n());
      }), L(i, o);
    },
    $$slots: { default: !0 }
  }), xe();
}
function Fp(t, e, n, r) {
  e() && ((t.key === "Enter" || t.key === " ") && (t.preventDefault(), n()), t.key === "Escape" && (t.preventDefault(), r()));
}
var Vp = /* @__PURE__ */ de('<span role="button" tabindex="0" aria-labelledby="tooltip"><!></span>');
function Eo(t, e) {
  Ce(e, !0);
  let n = p(e, "content", 3, ""), r = p(e, "side", 3, "top"), i = p(e, "hoverDelay", 3, 0), a = p(e, "transitionDuration", 3, 80), o = p(e, "disabled", 3, !1);
  const c = `tt-${Math.random().toString(36).slice(2)}`;
  let u = /* @__PURE__ */ ve(null), l = /* @__PURE__ */ ve(null), d = /* @__PURE__ */ ve(null), h = /* @__PURE__ */ ve(null), f = /* @__PURE__ */ ve(!1), m = /* @__PURE__ */ ve(null), v = /* @__PURE__ */ ve(null);
  function g() {
    !n() || o() || (s(m) && clearTimeout(s(m)), i() > 0 ? z(m, setTimeout(() => z(f, !0), i()), !0) : z(f, !0));
  }
  function b() {
    s(m) && clearTimeout(s(m)), z(f, !1);
  }
  function y() {
    g();
  }
  function A() {
    b();
  }
  function I() {
    g();
  }
  function _() {
    b();
  }
  function E() {
    if (!s(l) || !s(h) || !s(u) || o()) return;
    const S = s(u).getBoundingClientRect(), P = s(h).getBoundingClientRect();
    let X = 0, M = 0;
    const N = 8;
    switch (r()) {
      case "top":
        X = S.top - P.height - N, M = S.left + S.width / 2 - P.width / 2;
        break;
      case "bottom":
        X = S.bottom + N, M = S.left + S.width / 2 - P.width / 2;
        break;
      case "left":
        X = S.top + S.height / 2 - P.height / 2, M = S.left - P.width - N;
        break;
      case "right":
        X = S.top + S.height / 2 - P.height / 2, M = S.right + N;
        break;
    }
    s(l).style.top = `${X + window.scrollY}px`, s(l).style.left = `${M + window.scrollX}px`;
  }
  function C() {
    var S;
    (S = s(v)) == null || S.disconnect(), z(v, null), s(l) && s(l).parentNode && s(l).parentNode.removeChild(s(l)), z(l, null), z(h, null), z(d, null), s(m) && clearTimeout(s(m));
  }
  Rn(C), Te(() => {
    if (!(!s(f) || !n() || o())) {
      if (!s(l)) {
        z(l, document.createElement("div"), !0), s(l).style.position = "absolute", s(l).style.zIndex = "9999", s(l).style.pointerEvents = "none", s(l).style.opacity = "0", s(l).style.transition = `opacity ${a()}ms ease`, s(l).id = c, s(l).setAttribute("role", "tooltip"), document.body.appendChild(s(l)), z(d, s(l).attachShadow({ mode: "open" }), !0);
        const S = document.createElement("style");
        S.textContent = `
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
      `, s(d).appendChild(S), z(h, document.createElement("div"), !0), s(d).appendChild(s(h)), z(
          v,
          new MutationObserver(() => {
            s(f) && E();
          }),
          !0
        ), s(v).observe(document.body, { childList: !0, subtree: !0 });
      }
      s(h) && (s(h).className = `bubble ${r()}`, s(h).innerHTML = n()), s(l) && (s(l).style.opacity = "1", E());
    }
  }), Te(() => {
    if (s(f) || !s(l))
      return;
    s(l).style.opacity = "0";
    const S = s(l), P = setTimeout(
      () => {
        S && S.parentNode && S.parentNode.removeChild(S), s(l) === S && C();
      },
      a()
    );
    return () => clearTimeout(P);
  });
  var T = Vp();
  T.__keydown = [Fp, n, g, b];
  var x = se(T);
  Se(x, () => e.children ?? pe), Ee(T, (S) => z(u, S), () => s(u)), Oe(() => {
    Or(T, "aria-describedby", n() && !o() ? c : void 0), Or(T, "aria-haspopup", n() ? "true" : void 0), Or(T, "aria-expanded", n() ? s(f) ? "true" : "false" : void 0);
  }), ba("mouseenter", T, y), ba("mouseleave", T, A), ba("focus", T, I), ba("blur", T, _), L(t, T), xe();
}
On(["keydown"]);
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
var ha = {
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
}, iu = {
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
var Gp = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n) {
      var r = t.call(this, ue(ue({}, e.defaultAdapter), n)) || this;
      return r.currentCheckState = In.TRANSITION_STATE_INIT, r.currentAnimationClass = "", r.animEndLatchTimer = 0, r.enableAnimationEndHandler = !1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ha;
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
        return iu;
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
      this.currentCheckState = this.determineCheckState(), this.updateAriaChecked(), this.adapter.addClass(ha.UPGRADED);
    }, e.prototype.destroy = function() {
      clearTimeout(this.animEndLatchTimer);
    }, e.prototype.setDisabled = function(n) {
      this.adapter.setNativeControlDisabled(n), n ? this.adapter.addClass(ha.DISABLED) : this.adapter.removeClass(ha.DISABLED);
    }, e.prototype.handleAnimationEnd = function() {
      var n = this;
      this.enableAnimationEndHandler && (clearTimeout(this.animEndLatchTimer), this.animEndLatchTimer = setTimeout(function() {
        n.adapter.removeClass(n.currentAnimationClass), n.enableAnimationEndHandler = !1;
      }, iu.ANIM_END_LATCH_MS));
    }, e.prototype.handleChange = function() {
      this.transitionCheckState();
    }, e.prototype.transitionCheckState = function() {
      if (this.adapter.hasNativeControl()) {
        var n = this.currentCheckState, r = this.determineCheckState();
        if (n !== r) {
          this.updateAriaChecked();
          var i = In.TRANSITION_STATE_UNCHECKED, a = ha.SELECTED;
          r === i ? this.adapter.removeClass(a) : this.adapter.addClass(a), this.currentAnimationClass.length > 0 && (clearTimeout(this.animEndLatchTimer), this.adapter.forceLayout(), this.adapter.removeClass(this.currentAnimationClass)), this.currentAnimationClass = this.getTransitionAnimationClass(n, r), this.currentCheckState = r, this.adapter.isAttachedToDOM() && this.currentAnimationClass.length > 0 && (this.adapter.addClass(this.currentAnimationClass), this.enableAnimationEndHandler = !0);
        }
      }
    }, e.prototype.determineCheckState = function() {
      var n = In.TRANSITION_STATE_INDETERMINATE, r = In.TRANSITION_STATE_CHECKED, i = In.TRANSITION_STATE_UNCHECKED;
      return this.adapter.isIndeterminate() ? n : this.adapter.isChecked() ? r : i;
    }, e.prototype.getTransitionAnimationClass = function(n, r) {
      var i = In.TRANSITION_STATE_INIT, a = In.TRANSITION_STATE_CHECKED, o = In.TRANSITION_STATE_UNCHECKED, c = e.cssClasses, u = c.ANIM_UNCHECKED_CHECKED, l = c.ANIM_UNCHECKED_INDETERMINATE, d = c.ANIM_CHECKED_UNCHECKED, h = c.ANIM_CHECKED_INDETERMINATE, f = c.ANIM_INDETERMINATE_CHECKED, m = c.ANIM_INDETERMINATE_UNCHECKED;
      switch (n) {
        case i:
          return r === o ? "" : r === a ? f : m;
        case o:
          return r === a ? u : l;
        case a:
          return r === o ? d : h;
        default:
          return r === a ? f : m;
      }
    }, e.prototype.updateAriaChecked = function() {
      this.adapter.isIndeterminate() ? this.adapter.setNativeControlAttr(In.ARIA_CHECKED_ATTR, In.ARIA_CHECKED_INDETERMINATE_VALUE) : this.adapter.removeNativeControlAttr(In.ARIA_CHECKED_ATTR);
    }, e;
  }(Tt)
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
}, Nn = {
  ARIA_HIDDEN: "aria-hidden",
  ARIA_VALUEMAX: "aria-valuemax",
  ARIA_VALUEMIN: "aria-valuemin",
  ARIA_VALUENOW: "aria-valuenow",
  BUFFER_BAR_SELECTOR: ".mdc-linear-progress__buffer-bar",
  FLEX_BASIS: "flex-basis",
  PRIMARY_BAR_SELECTOR: ".mdc-linear-progress__primary-bar"
}, va = {
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
var jp = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n) {
      var r = t.call(this, ue(ue({}, e.defaultAdapter), n)) || this;
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
        return Nn;
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
            for (var o = Ht(r), c = o.next(); !c.done; c = o.next()) {
              var u = c.value;
              u.contentRect && n.calculateAndSetDimensions(u.contentRect.width);
            }
          } catch (l) {
            i = { error: l };
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
        this.adapter.removeClass(pn.INDETERMINATE_CLASS), this.adapter.setAttribute(Nn.ARIA_VALUENOW, this.progress.toString()), this.adapter.setAttribute(Nn.ARIA_VALUEMAX, "1"), this.adapter.setAttribute(Nn.ARIA_VALUEMIN, "0"), this.setPrimaryBarProgress(this.progress), this.setBufferBarProgress(this.buffer);
        return;
      }
      this.observer && this.calculateAndSetDimensions(this.adapter.getWidth()), this.adapter.addClass(pn.INDETERMINATE_CLASS), this.adapter.removeAttribute(Nn.ARIA_VALUENOW), this.adapter.removeAttribute(Nn.ARIA_VALUEMAX), this.adapter.removeAttribute(Nn.ARIA_VALUEMIN), this.setPrimaryBarProgress(1), this.setBufferBarProgress(1);
    }, e.prototype.isDeterminate = function() {
      return this.determinate;
    }, e.prototype.setProgress = function(n) {
      this.progress = n, this.determinate && (this.setPrimaryBarProgress(n), this.adapter.setAttribute(Nn.ARIA_VALUENOW, n.toString()));
    }, e.prototype.getProgress = function() {
      return this.progress;
    }, e.prototype.setBuffer = function(n) {
      this.buffer = n, this.determinate && this.setBufferBarProgress(n);
    }, e.prototype.getBuffer = function() {
      return this.buffer;
    }, e.prototype.open = function() {
      this.adapter.removeClass(pn.CLOSED_CLASS), this.adapter.removeClass(pn.CLOSED_ANIMATION_OFF_CLASS), this.adapter.removeAttribute(Nn.ARIA_HIDDEN);
    }, e.prototype.close = function() {
      this.adapter.addClass(pn.CLOSED_CLASS), this.adapter.setAttribute(Nn.ARIA_HIDDEN, "true");
    }, e.prototype.isClosed = function() {
      return this.adapter.hasClass(pn.CLOSED_CLASS);
    }, e.prototype.handleTransitionEnd = function() {
      this.adapter.hasClass(pn.CLOSED_CLASS) && this.adapter.addClass(pn.CLOSED_ANIMATION_OFF_CLASS);
    }, e.prototype.destroy = function() {
      t.prototype.destroy.call(this), this.observer && this.observer.disconnect();
    }, e.prototype.restartAnimation = function() {
      this.adapter.removeClass(pn.ANIMATION_READY_CLASS), this.adapter.forceLayout(), this.adapter.addClass(pn.ANIMATION_READY_CLASS);
    }, e.prototype.setPrimaryBarProgress = function(n) {
      var r = "scaleX(" + n + ")", i = typeof window < "u" ? Ug(window, "transform") : "transform";
      this.adapter.setPrimaryBarStyle(i, r);
    }, e.prototype.setBufferBarProgress = function(n) {
      var r = n * 100 + "%";
      this.adapter.setBufferBarStyle(Nn.FLEX_BASIS, r);
    }, e.prototype.calculateAndSetDimensions = function(n) {
      var r = n * va.PRIMARY_HALF, i = n * va.PRIMARY_FULL, a = n * va.SECONDARY_QUARTER, o = n * va.SECONDARY_HALF, c = n * va.SECONDARY_FULL;
      this.adapter.setStyle("--mdc-linear-progress-primary-half", r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-half-neg", -r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full", i + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full-neg", -i + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter", a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg", -a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half", o + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg", -o + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full", c + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg", -c + "px"), this.restartAnimation();
    }, e;
  }(Tt)
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
var lr = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, au = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, Kr = {
  ARIA_SELECTED: au.ARIA_SELECTED,
  ARIA_SORT: au.ARIA_SORT
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
var Wp = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n) {
      return t.call(this, ue(ue({}, e.defaultAdapter), n)) || this;
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
      return Sc(this, void 0, void 0, function() {
        return Ks(this, function(n) {
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
        o !== i && (this.adapter.removeClassNameByHeaderCellIndex(o, lr.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(o, lr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(o, Kr.ARIA_SORT, _n.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(o, _n.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, lr.HEADER_CELL_SORTED);
      var c = this.adapter.getAttributeByHeaderCellIndex(i, Kr.ARIA_SORT), u = _n.NONE;
      c === _n.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, lr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, Kr.ARIA_SORT, _n.DESCENDING), u = _n.DESCENDING) : c === _n.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, lr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, Kr.ARIA_SORT, _n.ASCENDING), u = _n.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, Kr.ARIA_SORT, _n.ASCENDING), u = _n.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, u), this.adapter.notifySortAction({
        columnId: r,
        columnIndex: i,
        headerCell: a,
        sortValue: u
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
      }), this.adapter.addClass(lr.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(lr.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(n, r) {
      r ? (this.adapter.addClassAtRowIndex(n, lr.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, Kr.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(n, lr.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, Kr.ARIA_SELECTED, "false"));
    }, e;
  }(Tt)
), qp = /* @__PURE__ */ de('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), zp = /* @__PURE__ */ de("<div><div><table><!></table></div> <!> <!></div>");
function Xp(t, e) {
  Ce(e, !0);
  const n = () => Zn(N, "$progressClosed", r), [r, i] = pr(), { closest: a } = Fa;
  let o = p(e, "use", 19, () => []), c = p(e, "class", 3, ""), u = p(e, "stickyHeader", 3, !1), l = p(e, "sortable", 3, !1), d = p(e, "sort", 15, null), h = p(e, "sortDirection", 15, "ascending"), f = p(e, "sortAscendingAriaLabel", 3, "sorted, ascending"), m = p(e, "sortDescendingAriaLabel", 3, "sorted, descending"), v = p(e, "container$use", 19, () => []), g = p(e, "container$class", 3, ""), b = p(e, "table$use", 19, () => []), y = p(e, "table$class", 3, ""), A = /* @__PURE__ */ qe(e, [
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
  ]), I, _ = /* @__PURE__ */ ve(void 0), E, C = /* @__PURE__ */ ve(void 0), T = /* @__PURE__ */ ve(void 0), x = ce({}), S = /* @__PURE__ */ ve(ce({ height: "auto", top: "initial" })), P = me("SMUI:addLayoutListener"), X, M = !1, N = tn(!1), O = tn(d());
  Te(() => {
    ui(O, d());
  });
  let w = tn(h());
  Te(() => {
    ui(w, h());
  }), oe("SMUI:checkbox:context", "data-table"), oe("SMUI:linear-progress:context", "data-table"), oe("SMUI:linear-progress:closed", N), oe("SMUI:data-table:sortable", l()), oe("SMUI:data-table:sort", O), oe("SMUI:data-table:sortDirection", w), oe("SMUI:data-table:sortAscendingAriaLabel", f()), oe("SMUI:data-table:sortDescendingAriaLabel", m()), P && (X = P(be));
  let k;
  Te(() => {
    e.progress && s(_) && k !== n() && (k = n(), n() ? s(_).hideProgress() : s(_).showProgress());
  }), oe("SMUI:checkbox:mount", () => {
    s(_) && M && s(_).layout();
  }), oe("SMUI:data-table:header:mount", (U) => {
    z(C, U, !0);
  }), oe("SMUI:data-table:header:unmount", () => {
    z(C, void 0);
  }), oe("SMUI:data-table:body:mount", (U) => {
    z(T, U, !0);
  }), oe("SMUI:data-table:body:unmount", () => {
    z(T, void 0);
  }), rt(() => (z(
    _,
    new Wp({
      addClass: K,
      removeClass: ee,
      getHeaderCellElements: () => {
        var U;
        return ((U = s(C)) == null ? void 0 : U.cells.map((q) => q.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var U;
        return ((U = s(C)) == null ? void 0 : U.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (U, q) => {
        var he;
        return ((he = s(C)) == null ? void 0 : he.orderedCells[U].getAttr(q)) ?? null;
      },
      setAttributeByHeaderCellIndex: (U, q, he) => {
        var Re;
        (Re = s(C)) == null || Re.orderedCells[U].addAttr(q, he);
      },
      setClassNameByHeaderCellIndex: (U, q) => {
        var he;
        (he = s(C)) == null || he.orderedCells[U].addClass(q);
      },
      removeClassNameByHeaderCellIndex: (U, q) => {
        var he;
        (he = s(C)) == null || he.orderedCells[U].removeClass(q);
      },
      notifySortAction: (U) => {
        d(U.columnId), h(U.sortValue), Je(V(), "SMUIDataTableSorted", U);
      },
      getTableContainerHeight: () => E.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const U = V().querySelector(".mdc-data-table__header-row");
        if (!U)
          throw new Error("MDCDataTable: Table header element not found.");
        return U.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (U) => {
        z(S, U, !0);
      },
      addClassAtRowIndex: (U, q) => {
        var he;
        (he = s(T)) == null || he.orderedRows[U].addClass(q);
      },
      getRowCount: () => {
        var U;
        return ((U = s(T)) == null ? void 0 : U.rows.length) ?? 0;
      },
      getRowElements: () => {
        var U;
        return ((U = s(T)) == null ? void 0 : U.rows.map((q) => q.element)) ?? [];
      },
      getRowIdAtIndex: (U) => {
        var q;
        return ((q = s(T)) == null ? void 0 : q.orderedRows[U].rowId) ?? null;
      },
      getRowIndexByChildElement: (U) => {
        var q;
        return ((q = s(T)) == null ? void 0 : q.orderedRows.map((he) => he.element).indexOf(a(U, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var U;
        return ((U = s(T)) == null ? void 0 : U.rows.filter((q) => q.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (U) => {
        var he;
        const q = (he = s(T)) == null ? void 0 : he.orderedRows[U].checkbox;
        return q ? q.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var q;
        const U = (q = s(C)) == null ? void 0 : q.checkbox;
        return U ? U.checked : !1;
      },
      isRowsSelectable: () => !!V().querySelector(".mdc-data-table__row-checkbox") || !!V().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (U) => {
        var he;
        const q = (he = s(T)) == null ? void 0 : he.orderedRows[U.rowIndex];
        q && Je(V(), "SMUIDataTableSelectionChanged", {
          row: q.element,
          rowId: q.rowId,
          rowIndex: U.rowIndex,
          selected: U.selected
        });
      },
      notifySelectedAll: () => {
        H(!1), Je(V(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        H(!1), Je(V(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (U) => Je(V(), "SMUIDataTableClickRow", U),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (U, q) => {
        var he;
        (he = s(T)) == null || he.orderedRows[U].removeClass(q);
      },
      setAttributeAtRowIndex: (U, q, he) => {
        var Re;
        (Re = s(T)) == null || Re.orderedRows[U].addAttr(q, he);
      },
      setHeaderRowCheckboxChecked: (U) => {
        var he;
        const q = (he = s(C)) == null ? void 0 : he.checkbox;
        q && (q.checked = U);
      },
      setHeaderRowCheckboxIndeterminate: H,
      setRowCheckboxCheckedAtIndex: (U, q) => {
        var Re;
        const he = (Re = s(T)) == null ? void 0 : Re.orderedRows[U].checkbox;
        he && (he.checked = q);
      },
      setSortStatusLabelByHeaderCellIndex: (U, q) => {
      }
    }),
    !0
  ), s(_).init(), s(_).layout(), M = !0, () => {
    var U;
    (U = s(_)) == null || U.destroy();
  })), Rn(() => {
    X && X();
  });
  function F(U) {
    s(_) && s(_).handleRowCheckboxChange(U);
  }
  function K(U) {
    x[U] || (x[U] = !0);
  }
  function ee(U) {
    (!(U in x) || x[U]) && (x[U] = !1);
  }
  function H(U) {
    var he;
    const q = (he = s(C)) == null ? void 0 : he.checkbox;
    q && (q.indeterminate = U);
  }
  function R(U) {
    if (!s(_) || !U.detail.target)
      return;
    const q = a(U.detail.target, ".mdc-data-table__header-cell--with-sort");
    q && Ae(q);
  }
  function j(U) {
    if (!s(_) || !U.detail.target)
      return;
    const q = a(U.detail.target, ".mdc-data-table__row");
    q && s(_) && s(_).handleRowClick({ rowId: U.detail.rowId, row: q });
  }
  function Ae(U) {
    var Fe, ct;
    const q = ((Fe = s(C)) == null ? void 0 : Fe.orderedCells) ?? [], he = q.map((pt) => pt.element).indexOf(U);
    if (he === -1)
      return;
    const Re = q[he].columnId ?? null;
    (ct = s(_)) == null || ct.handleSortAction({ columnId: Re, columnIndex: he, headerCell: U });
  }
  function be() {
    var U;
    return (U = s(_)) == null ? void 0 : U.layout();
  }
  function V() {
    return I;
  }
  var G = { layout: be, getElement: V }, B = zp(), $ = (U) => {
    var q;
    s(_) && s(_).handleHeaderRowCheckboxChange(), (q = e.onSMUIDataTableHeaderCheckboxChange) == null || q.call(e, U);
  }, Q = (U) => {
    var q;
    R(U), (q = e.onSMUIDataTableHeaderClick) == null || q.call(e, U);
  }, fe = (U) => {
    var q;
    j(U), (q = e.onSMUIDataTableRowClick) == null || q.call(e, U);
  }, we = (U) => {
    var q;
    F(U), (q = e.onSMUIDataTableBodyCheckboxChange) == null || q.call(e, U);
  };
  Ue(
    B,
    (U, q) => ({
      class: U,
      ...q,
      onSMUIDataTableHeaderCheckboxChange: $,
      onSMUIDataTableHeaderClick: Q,
      onSMUIDataTableRowClick: fe,
      onSMUIDataTableBodyCheckboxChange: we
    }),
    [
      () => De({
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": u(),
        ...x,
        [c()]: !0
      }),
      () => $n(A, ["container$", "table$"])
    ]
  );
  var J = se(B);
  Ue(J, (U, q) => ({ class: U, ...q }), [
    () => De({
      "mdc-data-table__table-container": !0,
      [g()]: !0
    }),
    () => it(A, "container$")
  ]);
  var ie = se(J);
  Ue(ie, (U, q) => ({ class: U, ...q }), [
    () => De({ "mdc-data-table__table": !0, [y()]: !0 }),
    () => it(A, "table$")
  ]);
  var Pe = se(ie);
  Se(Pe, () => e.children ?? pe), Me(ie, (U, q) => W == null ? void 0 : W(U, q), b), Ee(J, (U) => E = U, () => E), Me(J, (U, q) => W == null ? void 0 : W(U, q), v);
  var Le = Ie(J, 2);
  {
    var We = (U) => {
      var q = qp(), he = Ie(se(q), 2);
      Se(he, () => e.progress ?? pe), Oe((Re) => Gt(q, Re), [
        () => Object.entries(s(S)).map(([Re, Fe]) => `${Re}: ${Fe};`).join(" ")
      ]), L(U, q);
    };
    ae(Le, (U) => {
      e.progress && U(We);
    });
  }
  var Ke = Ie(Le, 2);
  Se(Ke, () => e.paginate ?? pe), Ee(B, (U) => I = U, () => I), Me(B, (U, q) => W == null ? void 0 : W(U, q), o), L(t, B);
  var Be = xe(G);
  return i(), Be;
}
var Kp = /* @__PURE__ */ de("<thead><!></thead>");
function Yp(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i, a = /* @__PURE__ */ ve(void 0), o = [];
  const c = /* @__PURE__ */ new WeakMap();
  oe("SMUI:data-table:row:header", !0);
  const u = me("SMUI:checkbox:mount");
  oe("SMUI:checkbox:mount", (y) => {
    z(a, y, !0), u && u(y);
  });
  const l = me("SMUI:checkbox:unmount");
  oe("SMUI:checkbox:unmount", (y) => {
    z(a, void 0), l && l(y);
  }), oe("SMUI:data-table:cell:mount", (y) => {
    o.push(y), c.set(y.element, y);
  }), oe("SMUI:data-table:cell:unmount", (y) => {
    const A = o.findIndex((I) => I === y);
    A !== -1 && o.splice(A, 1), c.delete(y.element);
  });
  const d = me("SMUI:data-table:header:mount"), h = me("SMUI:data-table:header:unmount");
  rt(() => {
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
      h && h(y);
    };
  });
  function f() {
    return [
      ...m().querySelectorAll(".mdc-data-table__header-cell")
    ].map((y) => c.get(y)).filter((y) => y && y._smui_data_table_header_cell_accessor);
  }
  function m() {
    return i;
  }
  var v = { getElement: m }, g = Kp();
  Ue(g, () => ({ ...r }));
  var b = se(g);
  return Se(b, () => e.children ?? pe), Ee(g, (y) => i = y, () => i), Me(g, (y, A) => W == null ? void 0 : W(y, A), n), L(t, g), xe(v);
}
var Zp = /* @__PURE__ */ de("<tbody><!></tbody>");
function Qp(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "children"
  ]), a, o = [];
  const c = /* @__PURE__ */ new WeakMap();
  oe("SMUI:data-table:row:header", !1), oe("SMUI:data-table:row:mount", (g) => {
    o.push(g), c.set(g.element, g);
  }), oe("SMUI:data-table:row:unmount", (g) => {
    const b = o.findIndex((y) => y === g);
    b !== -1 && o.splice(b, 1), c.delete(g.element);
  });
  const u = me("SMUI:data-table:body:mount"), l = me("SMUI:data-table:body:unmount");
  rt(() => {
    const g = {
      get rows() {
        return o;
      },
      get orderedRows() {
        return d();
      }
    };
    return u && u(g), () => {
      l && l(g);
    };
  });
  function d() {
    return [...h().querySelectorAll(".mdc-data-table__row")].map((g) => c.get(g)).filter((g) => g && g._smui_data_table_row_accessor);
  }
  function h() {
    return a;
  }
  var f = { getElement: h }, m = Zp();
  Ue(m, (g) => ({ class: g, ...i }), [
    () => De({ "mdc-data-table__content": !0, [r()]: !0 })
  ]);
  var v = se(m);
  return Se(v, () => e.children ?? pe), Ee(m, (g) => a = g, () => a), Me(m, (g, b) => W == null ? void 0 : W(g, b), n), L(t, m), xe(f);
}
let Jp = 0;
var $p = /* @__PURE__ */ de("<tr><!></tr>");
function $a(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "rowId", 19, () => "SMUI-data-table-row-" + Jp++), a = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "rowId",
    "children"
  ]), o, c = /* @__PURE__ */ ve(void 0), u = ce({}), l = ce({}), d = me("SMUI:data-table:row:header");
  const h = me("SMUI:checkbox:mount");
  oe("SMUI:checkbox:mount", (P) => {
    z(c, P, !0), h && h(P);
  });
  const f = me("SMUI:checkbox:unmount");
  oe("SMUI:checkbox:unmount", (P) => {
    z(c, void 0), f && f(P);
  });
  const m = me("SMUI:data-table:row:mount"), v = me("SMUI:data-table:row:unmount");
  rt(() => {
    const P = d ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return E();
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
      removeClass: b,
      getAttr: y,
      addAttr: A
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return E();
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
      removeClass: b,
      getAttr: y,
      addAttr: A
    };
    return m && m(P), () => {
      v && v(P);
    };
  });
  function g(P) {
    u[P] || (u[P] = !0);
  }
  function b(P) {
    (!(P in u) || u[P]) && (u[P] = !1);
  }
  function y(P) {
    return P in l ? l[P] ?? null : E().getAttribute(P);
  }
  function A(P, X) {
    l[P] !== X && (l[P] = X);
  }
  function I(P) {
    Je(E(), "SMUIDataTableHeaderClick", P);
  }
  function _(P) {
    Je(E(), "SMUIDataTableRowClick", { rowId: i(), target: P.target });
  }
  function E() {
    return o;
  }
  var C = { getElement: E }, T = $p(), x = (P) => {
    var X;
    d ? I(P) : _(P), (X = e.onclick) == null || X.call(e, P);
  };
  Ue(
    T,
    (P) => ({
      class: P,
      "aria-selected": s(c) ? s(c).checked ? "true" : "false" : void 0,
      ...l,
      ...a,
      onclick: x
    }),
    [
      () => De({
        "mdc-data-table__header-row": d,
        "mdc-data-table__row": !d,
        "mdc-data-table__row--selected": !d && s(c) && s(c).checked,
        ...u,
        [r()]: !0
      })
    ]
  );
  var S = se(T);
  return Se(S, () => e.children ?? pe), Ee(T, (P) => o = P, () => o), Me(T, (P, X) => W == null ? void 0 : W(P, X), n), L(t, T), xe(C);
}
let eb = 0;
var tb = /* @__PURE__ */ de('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), nb = /* @__PURE__ */ de("<th><!></th>"), rb = /* @__PURE__ */ de("<td><!></td>");
function ma(t, e) {
  Ce(e, !0);
  const n = () => Zn(y, "$sort", i), r = () => Zn(A, "$sortDirection", i), [i, a] = pr();
  let o = me("SMUI:data-table:row:header"), c = p(e, "use", 19, () => []), u = p(e, "class", 3, ""), l = p(e, "numeric", 3, !1), d = p(e, "checkbox", 3, !1), h = p(e, "columnId", 19, () => o ? "SMUI-data-table-column-" + eb++ : "SMUI-data-table-unused"), f = p(e, "sortable", 19, () => me("SMUI:data-table:sortable")), m = /* @__PURE__ */ qe(e, [
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
  ]), v, g = ce({}), b = ce({}), y = me("SMUI:data-table:sort"), A = me("SMUI:data-table:sortDirection"), I = me("SMUI:data-table:sortAscendingAriaLabel"), _ = me("SMUI:data-table:sortDescendingAriaLabel");
  f() && (oe("SMUI:label:context", "data-table:sortable-header-cell"), oe("SMUI:icon-button:context", "data-table:sortable-header-cell"), oe("SMUI:icon-button:aria-describedby", h() + "-status-label"));
  const E = me("SMUI:data-table:cell:mount"), C = me("SMUI:data-table:cell:unmount");
  rt(() => {
    const H = o ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return N();
      },
      get columnId() {
        return h();
      },
      addClass: T,
      removeClass: x,
      getAttr: S,
      addAttr: P
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return N();
      },
      get columnId() {
      },
      addClass: T,
      removeClass: x,
      getAttr: S,
      addAttr: P
    };
    return E && E(H), () => {
      C && C(H);
    };
  });
  function T(H) {
    g[H] || (g[H] = !0);
  }
  function x(H) {
    (!(H in g) || g[H]) && (g[H] = !1);
  }
  function S(H) {
    return H in b ? b[H] ?? null : N().getAttribute(H);
  }
  function P(H, R) {
    b[H] !== R && (b[H] = R);
  }
  function X(H) {
    Je(N(), "SMUIDataTableHeaderCheckboxChange", H);
  }
  function M(H) {
    Je(N(), "SMUIDataTableBodyCheckboxChange", H);
  }
  function N() {
    return v;
  }
  var O = { getElement: N }, w = ne(), k = Z(w);
  {
    var F = (H) => {
      var R = nb(), j = (G) => {
        var B;
        d() && X(G), (B = e.onchange) == null || B.call(e, G);
      };
      Ue(
        R,
        (G) => ({
          class: G,
          role: "columnheader",
          scope: "col",
          "data-column-id": h(),
          "aria-sort": f() ? n() === h() ? r() : "none" : void 0,
          ...b,
          ...m,
          onchange: j
        }),
        [
          () => De({
            "mdc-data-table__header-cell": !0,
            "mdc-data-table__header-cell--numeric": l(),
            "mdc-data-table__header-cell--checkbox": d(),
            "mdc-data-table__header-cell--with-sort": f(),
            "mdc-data-table__header-cell--sorted": f() && n() === h(),
            ...g,
            [u()]: !0
          })
        ]
      );
      var Ae = se(R);
      {
        var be = (G) => {
          var B = tb(), $ = se(B);
          Se($, () => e.children ?? pe);
          var Q = Ie($, 2), fe = se(Q);
          Oe(() => {
            Or(Q, "id", `${h() ?? ""}-status-label`), at(fe, n() === h() ? r() === "ascending" ? I : _ : "");
          }), L(G, B);
        }, V = (G) => {
          var B = ne(), $ = Z(B);
          Se($, () => e.children ?? pe), L(G, B);
        };
        ae(Ae, (G) => {
          f() ? G(be) : G(V, !1);
        });
      }
      Ee(R, (G) => v = G, () => v), Me(R, (G, B) => W == null ? void 0 : W(G, B), c), L(H, R);
    }, K = (H) => {
      var R = rb(), j = (be) => {
        var V;
        d() && M(be), (V = e.onchange) == null || V.call(e, be);
      };
      Ue(
        R,
        (be) => ({
          class: be,
          ...b,
          ...m,
          onchange: j
        }),
        [
          () => De({
            "mdc-data-table__cell": !0,
            "mdc-data-table__cell--numeric": l(),
            "mdc-data-table__cell--checkbox": d(),
            ...g,
            [u()]: !0
          })
        ]
      );
      var Ae = se(R);
      Se(Ae, () => e.children ?? pe), Ee(R, (be) => v = be, () => v), Me(R, (be, V) => W == null ? void 0 : W(be, V), c), L(H, R);
    };
    ae(k, (H) => {
      o ? H(F) : H(K, !1);
    });
  }
  L(t, w);
  var ee = xe(O);
  return a(), ee;
}
On(["click"]);
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
var ib = {
  ROOT: "mdc-form-field"
}, ab = {
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
var ob = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n) {
      var r = t.call(this, ue(ue({}, e.defaultAdapter), n)) || this;
      return r.click = function() {
        r.handleClick();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ib;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return ab;
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
  }(Tt)
);
let sb = 0;
var lb = /* @__PURE__ */ de("<div><!> <label><!></label></div>");
function ub(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "align", 3, "start"), a = p(e, "noWrap", 3, !1), o = p(e, "inputId", 19, () => "SMUI-form-field-" + sb++), c = p(e, "label$use", 19, () => []), u = /* @__PURE__ */ qe(e, [
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
  ]), l, d = /* @__PURE__ */ ve(void 0), h = new ra(), f, m = /* @__PURE__ */ ve(void 0);
  oe("SMUI:generic:input:props", { id: o() }), oe("SMUI:generic:input:mount", (_) => {
    z(m, _, !0);
  }), oe("SMUI:generic:input:unmount", () => {
    z(m, void 0);
  }), rt(() => (z(
    d,
    new ob({
      activateInputRipple: () => {
        s(m) && s(m).activateRipple();
      },
      deactivateInputRipple: () => {
        s(m) && s(m).deactivateRipple();
      },
      deregisterInteractionHandler: (_, E) => h.off(f, _, E),
      registerInteractionHandler: (_, E) => h.on(f, _, E)
    }),
    !0
  ), s(d).init(), () => {
    var _;
    (_ = s(d)) == null || _.destroy(), h.clear();
  }));
  function v() {
    return l;
  }
  var g = { getElement: v }, b = lb();
  Ue(b, (_, E) => ({ class: _, ...E }), [
    () => De({
      "mdc-form-field": !0,
      "mdc-form-field--align-end": i() === "end",
      "mdc-form-field--nowrap": a(),
      [r()]: !0
    }),
    () => $n(u, ["label$"])
  ]);
  var y = se(b);
  Se(y, () => e.children ?? pe);
  var A = Ie(y, 2);
  Ue(A, (_) => ({ for: o(), ..._ }), [() => it(u, "label$")]);
  var I = se(A);
  return Se(I, () => e.label ?? pe), Ee(A, (_) => f = _, () => f), Me(A, (_, E) => W == null ? void 0 : W(_, E), c), Ee(b, (_) => l = _, () => l), Me(b, (_, E) => W == null ? void 0 : W(_, E), n), L(t, b), xe(g);
}
On(["click"]);
function Ms(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
var cb = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
Ms({}, cb.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
var eo, ou = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
};
eo = {}, Ms(eo, ou.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), Ms(eo, ou.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list");
function db(t) {
  return t * t * t;
}
function id(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function fb(t, { from: e, to: n }, r = {}) {
  var { delay: i = 0, duration: a = (C) => Math.sqrt(C) * 120, easing: o = id } = r, c = getComputedStyle(t), u = c.transform === "none" ? "" : c.transform, [l, d] = c.transformOrigin.split(" ").map(parseFloat);
  l /= t.clientWidth, d /= t.clientHeight;
  var h = hb(t), f = t.clientWidth / n.width / h, m = t.clientHeight / n.height / h, v = e.left + e.width * l, g = e.top + e.height * d, b = n.left + n.width * l, y = n.top + n.height * d, A = (v - b) * f, I = (g - y) * m, _ = e.width / n.width, E = e.height / n.height;
  return {
    delay: i,
    duration: typeof a == "function" ? a(Math.sqrt(A * A + I * I)) : a,
    easing: o,
    css: (C, T) => {
      var x = T * A, S = T * I, P = C + T * _, X = C + T * E;
      return `transform: ${u} translate(${x}px, ${S}px) scale(${P}, ${X});`;
    }
  };
}
function hb(t) {
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
function vb(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function su(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
function So(t, { delay: e = 0, duration: n = 400, easing: r = vb, x: i = 0, y: a = 0, opacity: o = 0 } = {}) {
  const c = getComputedStyle(t), u = +c.opacity, l = c.transform === "none" ? "" : c.transform, d = u * (1 - o), [h, f] = su(i), [m, v] = su(a);
  return {
    delay: e,
    duration: n,
    easing: r,
    css: (g, b) => `
			transform: ${l} translate(${(1 - g) * h}${f}, ${(1 - g) * m}${v});
			opacity: ${u - d * b}`
  };
}
On([
  "click",
  "keydown",
  "pointerdown",
  "pointerup",
  "pointermove"
]);
function mb(t, e) {
  var n;
  (n = e()) == null || n();
}
var gb = /* @__PURE__ */ de('<div class="detail svelte-4xu36c"> </div>'), pb = /* @__PURE__ */ de('<div class="toast-card svelte-4xu36c"><div class="icon svelte-4xu36c"><!></div> <div class="content svelte-4xu36c"><div class="summary svelte-4xu36c"> </div> <!></div> <button class="close svelte-4xu36c"><!></button></div>');
function bb(t, e) {
  Ce(e, !0);
  let n = p(e, "onClose", 3, () => {
  });
  const r = {
    success: "check_circle",
    error: "error",
    info: "info",
    warn: "warning"
  }, i = {
    success: "#4CAF50",
    error: "#F44336",
    info: "#2196F3",
    warn: "#FF9800"
  };
  var a = pb(), o = se(a), c = se(o);
  Ls(c, {
    class: "material-icons",
    children: (g, b) => {
      var y = Rt();
      Oe(() => at(y, r[e.type])), L(g, y);
    },
    $$slots: { default: !0 }
  });
  var u = Ie(o, 2), l = se(u), d = se(l), h = Ie(l, 2);
  {
    var f = (g) => {
      var b = gb(), y = se(b);
      Oe(() => at(y, e.detail)), L(g, b);
    };
    ae(h, (g) => {
      e.detail && g(f);
    });
  }
  var m = Ie(u, 2);
  m.__click = [mb, n];
  var v = se(m);
  Ls(v, {
    class: "material-icons",
    children: (g, b) => {
      var y = Rt("close");
      L(g, y);
    },
    $$slots: { default: !0 }
  }), Oe(() => {
    Gt(a, `--color:${i[e.type] ?? ""}`), at(d, e.summary);
  }), go(1, a, () => So, () => ({ x: 0, y: 30, duration: 150, easing: db })), go(2, a, () => So, () => ({ x: 50, y: 0, duration: 150, easing: id })), L(t, a), xe();
}
On(["click"]);
const _b = 4e3;
function yb() {
  let t = ce({ items: [] }), e = 0;
  const n = (i) => {
    t.items = t.items.filter((a) => a.id !== i);
  }, r = (i, a, o, c = _b) => {
    const u = e++, l = { id: u, summary: a, detail: o, type: i };
    return t.items = [...t.items, l], setTimeout(
      () => {
        n(u);
      },
      c
    ), u;
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
const wa = yb();
var Ib = /* @__PURE__ */ de("<div><!></div>"), Eb = /* @__PURE__ */ de('<div class="toast-host svelte-11vwiay"></div>');
function Sb(t, e) {
  Ce(e, !1);
  const n = wa.toasts;
  dh();
  var r = Eb();
  xn(r, 13, () => n.items, (i) => i.id, (i, a) => {
    var o = Ib(), c = se(o);
    bb(c, {
      get summary() {
        return s(a).summary;
      },
      get detail() {
        return s(a).detail;
      },
      get type() {
        return s(a).type;
      },
      onClose: () => wa.remove(s(a).id)
    }), uh(o, () => fb, null), L(i, o);
  }), L(t, r), xe();
}
var Ab = (t, e) => {
  t.stopPropagation(), e.onOpen();
}, Cb = (t, e) => {
  t.stopPropagation(), e.onRemove();
}, xb = /* @__PURE__ */ de('<button type="button" style="all: unset; display: flex; align-items: center; justify-content: center;" class="svelte-1mybgc7"><!></button>'), Tb = /* @__PURE__ */ de('<span class="filter-badge__seperator svelte-1mybgc7">|</span> <span class="filter-badge__value svelte-1mybgc7"> </span> <span class="filter-badge__arrow-down"><!></span>', 1), wb = /* @__PURE__ */ de('<button type="button"><div class="filter-badge__icon svelte-1mybgc7"><!></div> <span class="filter-badge__label svelte-1mybgc7"> </span> <!></button>');
function Lb(t, e) {
  Ce(e, !0);
  let n = /* @__PURE__ */ ge(() => !!e.value);
  var r = wb();
  r.__click = [Ab, e];
  var i = se(r), a = se(i);
  {
    var o = (f) => {
      Eo(f, {
        content: "Remove Filter",
        hoverDelay: 500,
        side: "top",
        children: (m, v) => {
          var g = xb();
          g.__click = [Cb, e];
          var b = se(g);
          nd(b, {
            svgStyles: "fill: grey; height: filt-content; width: fit-content;"
          }), L(m, g);
        },
        $$slots: { default: !0 }
      });
    }, c = (f) => {
      Eo(f, {
        content: "Add Filter",
        hoverDelay: 501,
        side: "top",
        children: (m, v) => {
          Mp(m, {
            svgStyles: "fill: grey; height: filt-content; width: fit-content;"
          });
        },
        $$slots: { default: !0 }
      });
    };
    ae(a, (f) => {
      s(n) ? f(o) : f(c, !1);
    });
  }
  var u = Ie(i, 2), l = se(u), d = Ie(u, 2);
  {
    var h = (f) => {
      var m = Tb(), v = Ie(Z(m), 2), g = se(v), b = Ie(v, 2), y = se(b);
      Op(y, { svgStyles: "fill: gray;" }), Oe(() => at(g, e.value)), L(f, m);
    };
    ae(d, (f) => {
      s(n) && f(h);
    });
  }
  Oe(() => {
    qs(r, 1, `filter-badge ${s(n) ? "filter-badge--active" : "filter-badge--inactive"}`, "svelte-1mybgc7"), at(l, e.label);
  }), L(t, r), xe();
}
On(["click"]);
var Ob = /* @__PURE__ */ de('<div><input/> <div class="mdc-checkbox__background"><svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24"><path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg> <div class="mdc-checkbox__mixedmark"></div></div> <div class="mdc-checkbox__ripple"></div></div>');
function Rb(t, e) {
  Ce(e, !0);
  let n = () => {
  };
  function r(J) {
    return J === n;
  }
  let i = p(e, "use", 19, () => []), a = p(e, "class", 3, ""), o = p(e, "style", 3, ""), c = p(e, "disabled", 15, !1), u = p(e, "touch", 3, !1), l = p(e, "indeterminate", 15, n), d = p(e, "group", 11, n), h = p(e, "checked", 15, n), f = p(e, "value", 3, null), m = p(e, "valueKey", 3, n), v = p(e, "input$use", 19, () => []), g = p(e, "input$class", 3, ""), b = /* @__PURE__ */ qe(e, [
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
  ]), y, A = /* @__PURE__ */ ve(void 0), I = /* @__PURE__ */ ve(void 0), _ = ce({}), E = ce({}), C = ce({}), T = /* @__PURE__ */ ve(!1), x = ce(me("SMUI:generic:input:props") ?? {}), S = /* @__PURE__ */ ve(ce(r(d()) ? r(h()) ? !1 : !!h() : d().findIndex((J) => J === f()) !== -1)), P = me("SMUI:checkbox:context"), X = me("SMUI:data-table:row:header"), M = h(), N = r(d()) ? [] : [...d()], O = s(S);
  Te(() => {
    let J = !1;
    if (!r(d()))
      if (O !== s(S)) {
        const ie = d().findIndex((Pe) => Pe === f());
        s(S) && ie === -1 ? d().push(f()) : !s(S) && ie !== -1 && d().splice(ie, 1), J = !0;
      } else {
        const ie = N.findIndex((Le) => Le === f()), Pe = d().findIndex((Le) => Le === f());
        ie > -1 && Pe === -1 ? (z(S, !1), J = !0) : Pe > -1 && ie === -1 && (z(S, !0), J = !0);
      }
    r(h()) ? O !== s(S) && (J = !0) : (h() !== (l() ? null : s(S)) || s(S) !== O) && (h() === M && s(S) !== O ? (h(s(S)), r(l()) || l(!1)) : z(S, !!h()), J = !0), s(I) && (r(l()) ? s(I).indeterminate && (s(I).indeterminate = !1, J = !0) : !l() && s(I).indeterminate ? (s(I).indeterminate = !1, J = !0) : l() && !s(I).indeterminate && (s(I).indeterminate = !0, z(S, !1), J = !0)), M = h(), N = r(d()) ? [] : [...d()], O = s(S), J && s(A) && s(A).handleChange();
  });
  const w = me("SMUI:generic:input:mount"), k = me("SMUI:generic:input:unmount"), F = me("SMUI:checkbox:mount"), K = me("SMUI:checkbox:unmount");
  rt(() => {
    if (s(I) == null)
      throw new Error("Checkbox is not defined.");
    s(I).indeterminate = !r(l()) && l(), z(
      A,
      new Gp({
        addClass: ee,
        forceLayout: () => V().offsetWidth,
        hasNativeControl: () => !0,
        isAttachedToDOM: () => !!V().parentNode,
        isChecked: () => s(S),
        isIndeterminate: () => r(l()) ? !1 : l(),
        removeClass: H,
        removeNativeControlAttr: Ae,
        setNativeControlAttr: j,
        setNativeControlDisabled: (ie) => c(ie)
      }),
      !0
    );
    const J = {
      _smui_checkbox_accessor: !0,
      get element() {
        return V();
      },
      get checked() {
        return s(S);
      },
      set checked(ie) {
        s(S) !== ie && z(S, ie, !0);
      },
      get indeterminate() {
        return r(l()) ? !1 : l();
      },
      set indeterminate(ie) {
        l(ie);
      },
      activateRipple() {
        c() || z(T, !0);
      },
      deactivateRipple() {
        z(T, !1);
      }
    };
    return w && w(J), F && F(J), s(A).init(), () => {
      var ie;
      k && k(J), K && K(J), (ie = s(A)) == null || ie.destroy();
    };
  });
  function ee(J) {
    _[J] || (_[J] = !0);
  }
  function H(J) {
    (!(J in _) || _[J]) && (_[J] = !1);
  }
  function R(J, ie) {
    E[J] != ie && (ie === "" || ie == null ? delete E[J] : E[J] = ie);
  }
  function j(J, ie) {
    C[J] !== ie && (C[J] = ie);
  }
  function Ae(J) {
    (!(J in C) || C[J] != null) && (C[J] = void 0);
  }
  function be() {
    return x && x.id;
  }
  function V() {
    return y;
  }
  var G = { getId: be, getElement: V }, B = Ob(), $ = (J) => {
    var ie;
    s(A) && s(A).handleAnimationEnd(), (ie = e.onanimationend) == null || ie.call(e, J);
  };
  Ue(B, (J, ie, Pe) => ({ class: J, style: ie, ...Pe, onanimationend: $ }), [
    () => De({
      "mdc-checkbox": !0,
      "mdc-checkbox--disabled": c(),
      "mdc-checkbox--touch": u(),
      "mdc-data-table__header-row-checkbox": P === "data-table" && X,
      "mdc-data-table__row-checkbox": P === "data-table" && !X,
      ..._,
      [a()]: !0
    }),
    () => Object.entries(E).map(([J, ie]) => `${J}: ${ie};`).concat([o()]).join(" "),
    () => $n(b, ["input$"])
  ]);
  var Q = se(B), fe = (J) => {
    var ie;
    Je(V(), "blur", J), (ie = e.input$onblur) == null || ie.call(e, J);
  }, we = (J) => {
    var ie;
    Je(V(), "focus", J), (ie = e.input$onfocus) == null || ie.call(e, J);
  };
  return Ue(
    Q,
    (J, ie, Pe, Le) => ({
      class: J,
      type: "checkbox",
      ...x,
      disabled: c(),
      value: ie,
      "data-indeterminate": Pe,
      ...C,
      ...Le,
      onblur: fe,
      onfocus: we
    }),
    [
      () => De({ "mdc-checkbox__native-control": !0, [g()]: !0 }),
      () => r(m()) ? f() : m(),
      () => !r(l()) && l() ? "true" : void 0,
      () => it(b, "input$")
    ],
    void 0,
    void 0,
    !0
  ), Ee(Q, (J) => z(I, J), () => s(I)), Me(Q, (J, ie) => W == null ? void 0 : W(J, ie), v), vi(() => ch(Q, () => s(S), (J) => z(S, J))), Ee(B, (J) => y = J, () => y), Me(B, (J, ie) => W == null ? void 0 : W(J, ie), i), Me(B, (J, ie) => Xt == null ? void 0 : Xt(J, ie), () => ({
    unbounded: !0,
    addClass: ee,
    removeClass: H,
    addStyle: R,
    active: s(T),
    eventTarget: s(I)
  })), L(t, B), xe(G);
}
var Mb = /* @__PURE__ */ de('<div style="display: flex; flex-direction: column;"></div>');
function Db(t, e) {
  Ce(e, !0);
  let n = p(e, "data", 19, () => []), r = p(e, "values", 31, () => ce([]));
  var i = Mb();
  xn(i, 21, n, Oi, (a, o) => {
    ub(a, {
      label: (u) => {
        var l = Rt();
        Oe(() => at(l, s(o).label)), L(u, l);
      },
      children: (u, l) => {
        Rb(u, {
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
  }), L(t, i), xe();
}
var Pb = (t) => t.stopPropagation(), Nb = /* @__PURE__ */ de('<div class="custom-menu svelte-58jwwf"><div class="menu-arrow svelte-58jwwf"></div> <h4 class="svelte-58jwwf"> </h4> <div class="custom-menu__content"><!></div> <!></div>'), Hb = /* @__PURE__ */ de('<div class="filter-wrapper svelte-58jwwf"><!> <!></div>'), Ub = /* @__PURE__ */ de('<div class="oscd-filters svelte-58jwwf"></div>');
function kb(t, e) {
  Ce(e, !0);
  let n = p(e, "filters", 15), r = /* @__PURE__ */ ve(null), i = [], a = [];
  function o(v) {
    var g;
    if (!(v.value === void 0 || v.value === null || v.value === ""))
      switch (v.type) {
        case "text":
          return String(v.value);
        case "number":
          return String(v.value);
        case "select":
          const b = (g = v.options) == null ? void 0 : g.find((I) => I.value === v.value);
          return b ? b.label : String(v.value);
        case "multiselect":
          if (!Array.isArray(v.value) || v.value.length === 0) return;
          const y = v.value.map((I) => {
            var E;
            const _ = (E = v.options) == null ? void 0 : E.find((C) => C.value === I);
            return _ ? _.label : String(I);
          }), A = 1;
          return y.length <= A ? y.join(", ") : `${y.slice(0, A).join(", ")} +${y.length - A} more`;
        case "date":
          try {
            const I = new Date(v.value);
            return isNaN(I.getTime()) ? String(v.value) : I.toLocaleDateString();
          } catch {
            return String(v.value);
          }
        case "datetime":
          try {
            const I = new Date(v.value);
            return isNaN(I.getTime()) ? String(v.value) : new Intl.DateTimeFormat("default", {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: !1
            }).format(I);
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
  function u(v) {
    s(r) === v ? z(r, null) : (z(r, v, !0), a[v] = c(n()[v]));
  }
  function l() {
    z(r, null), a[s(r)] = void 0;
  }
  function d(v) {
    var g;
    n(n().map((b, y) => y === v ? { ...b, value: a[v] } : b)), (g = e.onfiltersChanged) == null || g.call(e, [...n()]), z(r, null);
  }
  function h(v) {
    var g;
    n(n().map((b, y) => y === v ? { ...b, value: void 0 } : b)), a[v] = void 0, (g = e.onfiltersChanged) == null || g.call(e, [...n()]), l();
  }
  function f(v) {
    i.some((b) => b && b.contains(v.target)) || l();
  }
  rt(() => {
    document.addEventListener("click", f);
  }), Rn(() => {
    document.removeEventListener("click", f);
  }), Te(() => {
  });
  var m = Ub();
  xn(m, 23, n, (v) => v.key, (v, g, b) => {
    var y = Hb(), A = se(y);
    {
      let E = /* @__PURE__ */ ge(() => o(s(g)));
      Lb(A, {
        get label() {
          return s(g).label;
        },
        get value() {
          return s(E);
        },
        onOpen: () => u(s(b)),
        onRemove: () => h(s(b))
      });
    }
    var I = Ie(A, 2);
    {
      var _ = (E) => {
        var C = Nb();
        C.__click = [Pb];
        var T = Ie(se(C), 2), x = se(T), S = Ie(T, 2), P = se(S);
        {
          var X = (O) => {
            Os(O, {
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
              set value(w) {
                a[s(b)] = w;
              }
            });
          }, M = (O) => {
            var w = ne(), k = Z(w);
            {
              var F = (ee) => {
                {
                  let H = /* @__PURE__ */ ge(() => {
                    var R;
                    return (R = s(g)) == null ? void 0 : R.options;
                  });
                  ap(ee, {
                    get label() {
                      return s(g).label;
                    },
                    get data() {
                      return s(H);
                    },
                    get value() {
                      return a[s(b)];
                    },
                    set value(R) {
                      a[s(b)] = R;
                    }
                  });
                }
              }, K = (ee) => {
                var H = ne(), R = Z(H);
                {
                  var j = (be) => {
                    {
                      let V = /* @__PURE__ */ ge(() => {
                        var G;
                        return (G = s(g)) == null ? void 0 : G.options;
                      });
                      Db(be, {
                        get data() {
                          return s(V);
                        },
                        get values() {
                          return a[s(b)];
                        },
                        set values(G) {
                          a[s(b)] = G;
                        }
                      });
                    }
                  }, Ae = (be) => {
                    var V = ne(), G = Z(V);
                    {
                      var B = (Q) => {
                        Np(Q, {
                          get value() {
                            return a[s(b)];
                          },
                          set value(fe) {
                            a[s(b)] = fe;
                          }
                        });
                      }, $ = (Q) => {
                        var fe = ne(), we = Z(fe);
                        {
                          var J = (ie) => {
                            kp(ie, {
                              get value() {
                                return a[s(b)];
                              },
                              set value(Pe) {
                                a[s(b)] = Pe;
                              }
                            });
                          };
                          ae(
                            we,
                            (ie) => {
                              s(g).type === "datetime" && ie(J);
                            },
                            !0
                          );
                        }
                        L(Q, fe);
                      };
                      ae(
                        G,
                        (Q) => {
                          s(g).type === "date" ? Q(B) : Q($, !1);
                        },
                        !0
                      );
                    }
                    L(be, V);
                  };
                  ae(
                    R,
                    (be) => {
                      s(g).type === "multiselect" ? be(j) : be(Ae, !1);
                    },
                    !0
                  );
                }
                L(ee, H);
              };
              ae(
                k,
                (ee) => {
                  s(g).type === "select" ? ee(F) : ee(K, !1);
                },
                !0
              );
            }
            L(O, w);
          };
          ae(P, (O) => {
            s(g).type === "text" || s(g).type === "number" ? O(X) : O(M, !1);
          });
        }
        var N = Ie(S, 2);
        Zc(N, {
          variant: "unelevated",
          style: "background: var(--secondary); color: white; width: 100%;",
          onclick: () => d(s(b)),
          children: (O, w) => {
            var k = Rt("Apply");
            L(O, k);
          },
          $$slots: { default: !0 }
        }), Oe(() => at(x, `Filter by ${s(g).label ?? ""}`)), go(2, C, () => So, () => ({ y: 5, duration: 120 })), go(1, C, () => So, () => ({ y: -5, duration: 120 })), L(E, C);
      };
      ae(I, (E) => {
        s(r) === s(b) && E(_);
      });
    }
    Ee(y, (E, C) => i[C] = E, (E) => i == null ? void 0 : i[E], () => [s(b)]), L(v, y);
  }), L(t, m), xe();
}
On(["click"]);
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
var ad = {
  ANIMATING: "mdc-tab-scroller--animating",
  SCROLL_AREA_SCROLL: "mdc-tab-scroller__scroll-area--scroll",
  SCROLL_TEST: "mdc-tab-scroller__test"
}, Bb = {
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
var Js = (
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
var Fb = (
  /** @class */
  function(t) {
    Ve(e, t);
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
  }(Js)
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
var Vb = (
  /** @class */
  function(t) {
    Ve(e, t);
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
  }(Js)
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
var Gb = (
  /** @class */
  function(t) {
    Ve(e, t);
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
  }(Js)
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
var jb = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n) {
      var r = t.call(this, ue(ue({}, e.defaultAdapter), n)) || this;
      return r.isAnimating = !1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ad;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Bb;
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
      var i = r[1], a = vr(i.split(","), 6);
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
        return this.adapter.setScrollAreaScrollLeft(n), new Vb(this.adapter);
      var i = this.adapter.computeScrollAreaClientRect(), a = this.adapter.computeScrollContentClientRect(), o = Math.round(a.right - i.right);
      return this.adapter.setScrollAreaScrollLeft(n), o === r ? new Gb(this.adapter) : new Fb(this.adapter);
    }, e.prototype.isRTL = function() {
      return this.adapter.getScrollContentStyleValue("direction") === "rtl";
    }, e;
  }(Tt)
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
var as;
function Wb(t, e) {
  if (e === void 0 && (e = !0), e && typeof as < "u")
    return as;
  var n = t.createElement("div");
  n.classList.add(ad.SCROLL_TEST), t.body.appendChild(n);
  var r = n.offsetHeight - n.clientHeight;
  return t.body.removeChild(n), e && (as = r), r;
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
var qb = {
  ACTIVE: "mdc-tab-indicator--active",
  FADE: "mdc-tab-indicator--fade",
  NO_TRANSITION: "mdc-tab-indicator--no-transition"
}, zb = {
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
    Ve(e, t);
    function e(n) {
      return t.call(this, ue(ue({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return qb;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return zb;
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
  }(Tt)
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
var Xb = (
  /** @class */
  function(t) {
    Ve(e, t);
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
var lu = (
  /** @class */
  function(t) {
    Ve(e, t);
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
var to = {
  ACTIVE: "mdc-tab--active"
}, ga = {
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
var Kb = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n) {
      var r = t.call(this, ue(ue({}, e.defaultAdapter), n)) || this;
      return r.focusOnActivate = !0, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return to;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return ga;
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
      return this.adapter.hasClass(to.ACTIVE);
    }, e.prototype.setFocusOnActivate = function(n) {
      this.focusOnActivate = n;
    }, e.prototype.activate = function(n) {
      this.adapter.addClass(to.ACTIVE), this.adapter.setAttr(ga.ARIA_SELECTED, "true"), this.adapter.setAttr(ga.TABINDEX, "0"), this.adapter.activateIndicator(n), this.focusOnActivate && this.adapter.focus();
    }, e.prototype.deactivate = function() {
      this.isActive() && (this.adapter.removeClass(to.ACTIVE), this.adapter.setAttr(ga.ARIA_SELECTED, "false"), this.adapter.setAttr(ga.TABINDEX, "-1"), this.adapter.deactivateIndicator());
    }, e.prototype.computeDimensions = function() {
      var n = this.adapter.getOffsetWidth(), r = this.adapter.getOffsetLeft(), i = this.adapter.getContentOffsetWidth(), a = this.adapter.getContentOffsetLeft();
      return {
        contentLeft: r + a,
        contentRight: r + a + i,
        rootLeft: r,
        rootRight: r + n
      };
    }, e;
  }(Tt)
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
var xt = {
  ARROW_LEFT_KEY: "ArrowLeft",
  ARROW_RIGHT_KEY: "ArrowRight",
  END_KEY: "End",
  ENTER_KEY: "Enter",
  HOME_KEY: "Home",
  SPACE_KEY: "Space",
  TAB_ACTIVATED_EVENT: "MDCTabBar:activated",
  TAB_SCROLLER_SELECTOR: ".mdc-tab-scroller",
  TAB_SELECTOR: ".mdc-tab"
}, kn = {
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
var pi = /* @__PURE__ */ new Set();
pi.add(xt.ARROW_LEFT_KEY);
pi.add(xt.ARROW_RIGHT_KEY);
pi.add(xt.END_KEY);
pi.add(xt.HOME_KEY);
pi.add(xt.ENTER_KEY);
pi.add(xt.SPACE_KEY);
var bi = /* @__PURE__ */ new Map();
bi.set(kn.ARROW_LEFT_KEYCODE, xt.ARROW_LEFT_KEY);
bi.set(kn.ARROW_RIGHT_KEYCODE, xt.ARROW_RIGHT_KEY);
bi.set(kn.END_KEYCODE, xt.END_KEY);
bi.set(kn.HOME_KEYCODE, xt.HOME_KEY);
bi.set(kn.ENTER_KEYCODE, xt.ENTER_KEY);
bi.set(kn.SPACE_KEYCODE, xt.SPACE_KEY);
var Yb = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n) {
      var r = t.call(this, ue(ue({}, e.defaultAdapter), n)) || this;
      return r.useAutomaticActivation = !1, r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return xt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return kn;
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
      var i = this.isRTL(), a = this.adapter.getTabListLength() - 1, o = r === xt.END_KEY, c = r === xt.ARROW_LEFT_KEY && !i || r === xt.ARROW_RIGHT_KEY && i, u = r === xt.ARROW_RIGHT_KEY && !i || r === xt.ARROW_LEFT_KEY && i, l = n;
      return o ? l = a : c ? l -= 1 : u ? l += 1 : l = 0, l < 0 ? l = a : l > a && (l = 0), l;
    }, e.prototype.calculateScrollIncrement = function(n, r, i, a) {
      var o = this.adapter.getTabDimensionsAtIndex(r), c = o.contentLeft - i - a, u = o.contentRight - i, l = u - kn.EXTRA_SCROLL_AMOUNT, d = c + kn.EXTRA_SCROLL_AMOUNT;
      return r < n ? Math.min(l, 0) : Math.max(d, 0);
    }, e.prototype.calculateScrollIncrementRTL = function(n, r, i, a, o) {
      var c = this.adapter.getTabDimensionsAtIndex(r), u = o - c.contentLeft - i, l = o - c.contentRight - i - a, d = l + kn.EXTRA_SCROLL_AMOUNT, h = u - kn.EXTRA_SCROLL_AMOUNT;
      return r > n ? Math.max(d, 0) : Math.min(h, 0);
    }, e.prototype.findAdjacentTabIndexClosestToEdge = function(n, r, i, a) {
      var o = r.rootLeft - i, c = r.rootRight - i - a, u = o + c, l = o < 0 || u < 0, d = c > 0 || u > 0;
      return l ? n - 1 : d ? n + 1 : -1;
    }, e.prototype.findAdjacentTabIndexClosestToEdgeRTL = function(n, r, i, a, o) {
      var c = o - r.rootLeft - a - i, u = o - r.rootRight - i, l = c + u, d = c > 0 || l > 0, h = u < 0 || l < 0;
      return d ? n + 1 : h ? n - 1 : -1;
    }, e.prototype.getKeyFromEvent = function(n) {
      return pi.has(n.key) ? n.key : bi.get(n.keyCode);
    }, e.prototype.isActivationKey = function(n) {
      return n === xt.SPACE_KEY || n === xt.ENTER_KEY;
    }, e.prototype.indexIsInRange = function(n) {
      return n >= 0 && n < this.adapter.getTabListLength();
    }, e.prototype.isRTL = function() {
      return this.adapter.isRTL();
    }, e.prototype.scrollIntoViewImpl = function(n) {
      var r = this.adapter.getScrollPosition(), i = this.adapter.getOffsetWidth(), a = this.adapter.getTabDimensionsAtIndex(n), o = this.findAdjacentTabIndexClosestToEdge(n, a, r, i);
      if (this.indexIsInRange(o)) {
        var c = this.calculateScrollIncrement(n, o, r, i);
        this.adapter.incrementScroll(c);
      }
    }, e.prototype.scrollIntoViewImplRTL = function(n) {
      var r = this.adapter.getScrollPosition(), i = this.adapter.getOffsetWidth(), a = this.adapter.getTabDimensionsAtIndex(n), o = this.adapter.getScrollContentWidth(), c = this.findAdjacentTabIndexClosestToEdgeRTL(n, a, r, i, o);
      if (this.indexIsInRange(c)) {
        var u = this.calculateScrollIncrementRTL(n, c, r, i, o);
        this.adapter.incrementScroll(u);
      }
    }, e;
  }(Tt)
), Zb = /* @__PURE__ */ de("<div><div><div><!></div></div></div>");
function Qb(t, e) {
  Ce(e, !0);
  const { matches: n } = Fa;
  let r = p(e, "use", 19, () => []), i = p(e, "class", 3, ""), a = p(e, "align", 3, void 0), o = p(e, "scrollArea$use", 19, () => []), c = p(e, "scrollArea$class", 3, ""), u = p(e, "scrollContent$use", 19, () => []), l = p(e, "scrollContent$class", 3, ""), d = /* @__PURE__ */ qe(e, [
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
  ]), h, f = /* @__PURE__ */ ve(void 0), m, v, g = ce({}), b = ce({}), y = ce({}), A = ce({});
  rt(() => (z(
    f,
    new jb({
      eventTargetMatchesSelector: (V, G) => n(V, G),
      addClass: I,
      removeClass: _,
      addScrollAreaClass: E,
      setScrollAreaStyleProperty: C,
      setScrollContentStyleProperty: T,
      getScrollContentStyleValue: x,
      setScrollAreaScrollLeft: (V) => m.scrollLeft = V,
      getScrollAreaScrollLeft: () => m.scrollLeft,
      getScrollContentOffsetWidth: () => v.offsetWidth,
      getScrollAreaOffsetWidth: () => m.offsetWidth,
      computeScrollAreaClientRect: () => m.getBoundingClientRect(),
      computeScrollContentClientRect: () => v.getBoundingClientRect(),
      computeHorizontalScrollbarHeight: () => Wb(document)
    }),
    !0
  ), s(f).init(), () => {
    var V;
    (V = s(f)) == null || V.destroy();
  }));
  function I(V) {
    g[V] || (g[V] = !0);
  }
  function _(V) {
    (!(V in g) || g[V]) && (g[V] = !1);
  }
  function E(V) {
    b[V] || (b[V] = !0);
  }
  function C(V, G) {
    y[V] != G && (G === "" || G == null ? delete y[V] : y[V] = G);
  }
  function T(V, G) {
    A[V] != G && (G === "" || G == null ? delete A[V] : A[V] = G);
  }
  function x(V) {
    return V in A ? A[V] : getComputedStyle(v).getPropertyValue(V);
  }
  function S() {
    if (s(f) == null)
      throw new Error("Instance is undefined.");
    return s(f).getScrollPosition();
  }
  function P() {
    return v.offsetWidth;
  }
  function X(V) {
    var G;
    (G = s(f)) == null || G.incrementScroll(V);
  }
  function M(V) {
    var G;
    (G = s(f)) == null || G.scrollTo(V);
  }
  function N() {
    return h;
  }
  var O = {
    getScrollPosition: S,
    getScrollContentWidth: P,
    incrementScroll: X,
    scrollTo: M,
    getElement: N
  }, w = Zb();
  Ue(w, (V, G) => ({ class: V, ...G }), [
    () => De({
      "mdc-tab-scroller": !0,
      "mdc-tab-scroller--align-start": a() === "start",
      "mdc-tab-scroller--align-end": a() === "end",
      "mdc-tab-scroller--align-center": a() === "center",
      ...g,
      [i()]: !0
    }),
    () => $n(d, ["scrollArea$", "scrollContent$"])
  ]);
  var k = se(w), F = (V) => {
    var G;
    s(f) && s(f).handleInteraction(), (G = e.scrollArea$onwheel) == null || G.call(e, V);
  }, K = (V) => {
    var G;
    s(f) && s(f).handleInteraction(), (G = e.scrollArea$ontouchstart) == null || G.call(e, V);
  }, ee = (V) => {
    var G;
    s(f) && s(f).handleInteraction(), (G = e.scrollArea$onpointerdown) == null || G.call(e, V);
  }, H = (V) => {
    var G;
    s(f) && s(f).handleInteraction(), (G = e.scrollArea$onmousedown) == null || G.call(e, V);
  }, R = (V) => {
    var G;
    s(f) && s(f).handleInteraction(), (G = e.scrollArea$onkeydown) == null || G.call(e, V);
  };
  Ue(
    k,
    (V, G, B) => ({
      class: V,
      style: G,
      ...B,
      onwheel: F,
      ontouchstart: K,
      onpointerdown: ee,
      onmousedown: H,
      onkeydown: R
    }),
    [
      () => De({
        "mdc-tab-scroller__scroll-area": !0,
        ...b,
        [c()]: !0
      }),
      () => Object.entries(y).map(([V, G]) => `${V}: ${G};`).join(" "),
      () => it(d, "scrollArea$")
    ]
  );
  var j = se(k), Ae = (V) => {
    var G;
    s(f) && s(f).handleTransitionEnd(V), (G = e.scrollContent$ontransitionend) == null || G.call(e, V);
  };
  Ue(
    j,
    (V, G, B) => ({
      class: V,
      style: G,
      ...B,
      ontransitionend: Ae
    }),
    [
      () => De({
        "mdc-tab-scroller__scroll-content": !0,
        [l()]: !0
      }),
      () => Object.entries(A).map(([V, G]) => `${V}: ${G};`).join(" "),
      () => it(d, "scrollContent$")
    ]
  );
  var be = se(j);
  return Se(be, () => e.children ?? pe), Ee(j, (V) => v = V, () => v), Me(j, (V, G) => W == null ? void 0 : W(V, G), u), Ee(k, (V) => m = V, () => m), Me(k, (V, G) => W == null ? void 0 : W(V, G), o), Ee(w, (V) => h = V, () => h), Me(w, (V, G) => W == null ? void 0 : W(V, G), r), L(t, w), xe(O);
}
var Jb = /* @__PURE__ */ de("<div><!></div>");
function $b(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "tabs", 19, () => []), a = p(e, "key", 3, (O) => O), o = p(e, "focusOnActivate", 3, !0), c = p(e, "focusOnProgrammatic", 3, !1), u = p(e, "useAutomaticActivation", 3, !0), l = p(e, "active", 15), d = p(e, "tabindex", 3, 0), h = /* @__PURE__ */ qe(e, [
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
  ]), f, m = /* @__PURE__ */ ve(void 0), v, g = /* @__PURE__ */ ve(ce(l() == null ? -1 : i().findIndex((O) => l() && a()(O) === a()(l())))), b = ce({}), y = /* @__PURE__ */ ve(/* @__PURE__ */ new WeakMap()), A = !1;
  oe("SMUI:tab:focusOnActivate", o()), oe("SMUI:tab:initialActive", {
    active: l() == null ? null : a()(l()),
    key: a()
  }), Te(() => {
    (l() == null && s(g) !== -1 || l() != null && s(g) === -1 || l() != null && a()(l()) !== a()(i()[s(g)])) && (z(g, i().findIndex((O) => l() && a()(O) === a()(l())), !0), s(m) && (A = !c(), s(m).activateTab(s(g)), A = !1));
  }), Te(() => {
    if (i().length) {
      const O = i()[0] instanceof Object ? s(y).get(i()[0]) : b[i()[0]];
      O && O.forceAccessible(s(g) === -1);
    }
  });
  let I = !1;
  Te(() => {
    if (!s(m)) {
      I = !1;
      return;
    }
    I || (I = !0, s(m).setUseAutomaticActivation(u()));
  }), oe("SMUI:tab:mount", (O) => {
    E(O.tabId, O);
  }), oe("SMUI:tab:unmount", (O) => {
    C(O.tabId);
  }), rt(() => (z(
    m,
    new Yb({
      scrollTo: (O) => v.scrollTo(O),
      incrementScroll: (O) => v.incrementScroll(O),
      getScrollPosition: () => v.getScrollPosition(),
      getScrollContentWidth: () => v.getScrollContentWidth(),
      getOffsetWidth: () => x().offsetWidth,
      isRTL: () => getComputedStyle(x()).getPropertyValue("direction") === "rtl",
      setActiveTab: (O) => {
        var w;
        l(i()[O]), z(g, O, !0), (w = s(m)) == null || w.activateTab(O);
      },
      activateTabAtIndex: (O, w) => {
        var k;
        return (k = _(i()[O])) == null ? void 0 : k.activate(w, A);
      },
      deactivateTabAtIndex: (O) => {
        var w;
        return (w = _(i()[O])) == null ? void 0 : w.deactivate();
      },
      focusTabAtIndex: (O) => {
        var w;
        return (w = _(i()[O])) == null ? void 0 : w.focus();
      },
      getTabIndicatorClientRectAtIndex: (O) => {
        var w;
        return ((w = _(i()[O])) == null ? void 0 : w.computeIndicatorClientRect()) ?? new DOMRect();
      },
      getTabDimensionsAtIndex: (O) => {
        var w;
        return ((w = _(i()[O])) == null ? void 0 : w.computeDimensions()) ?? { rootLeft: 0, rootRight: 0, contentLeft: 0, contentRight: 0 };
      },
      getPreviousActiveTabIndex: () => {
        var O;
        for (let w = 0; w < i().length; w++)
          if ((O = _(i()[w])) != null && O.active)
            return w;
        return -1;
      },
      getFocusedTabIndex: () => {
        const O = i().map((k) => {
          var F;
          return (F = _(k)) == null ? void 0 : F.element;
        }), w = document.activeElement;
        return O.indexOf(w);
      },
      getIndexOfTabById: (O) => i().findIndex((w) => a()(w) === a()(O)),
      getTabListLength: () => i().length,
      notifyTabActivated: (O) => Je(x(), "SMUITabBarActivated", { index: O })
    }),
    !0
  ), s(m).init(), () => {
    var O;
    (O = s(m)) == null || O.destroy();
  }));
  function _(O) {
    return O instanceof Object ? s(y).get(O) : b[O];
  }
  function E(O, w) {
    O instanceof Object ? (s(y).set(O, w), z(y, s(y))) : b[O] = w;
  }
  function C(O) {
    O instanceof Object ? (s(y).delete(O), z(y, s(y))) : delete b[O];
  }
  function T(O) {
    var w;
    (w = s(m)) == null || w.scrollIntoView(O);
  }
  function x() {
    return f;
  }
  var S = { scrollIntoView: T, getElement: x }, P = Jb(), X = (O) => {
    var w;
    s(m) && s(m).handleKeyDown(O), (w = e.onkeydown) == null || w.call(e, O);
  }, M = (O) => {
    var w;
    s(m) && s(m).handleTabInteraction(O), (w = e.onSMUITabInteracted) == null || w.call(e, O);
  };
  Ue(
    P,
    (O, w) => ({
      class: O,
      role: "tablist",
      tabindex: d(),
      ...w,
      onkeydown: X,
      onSMUITabInteracted: M
    }),
    [
      () => De({ "mdc-tab-bar": !0, [r()]: !0 }),
      () => $n(h, ["tabScroller$"])
    ]
  );
  var N = se(P);
  {
    let O = /* @__PURE__ */ ge(() => it(h, "tabScroller$"));
    Ee(
      Qb(N, nt(() => s(O), {
        children: (w, k) => {
          var F = ne(), K = Z(F);
          xn(K, 17, i, (ee) => a()(ee), (ee, H) => {
            var R = ne(), j = Z(R);
            Se(j, () => e.tab, () => s(H)), L(ee, R);
          }), L(w, F);
        },
        $$slots: { default: !0 }
      })),
      (w) => v = w,
      () => v
    );
  }
  return Ee(P, (O) => f = O, () => f), Me(P, (O, w) => W == null ? void 0 : W(O, w), n), L(t, P), xe(S);
}
var e_ = /* @__PURE__ */ de("<span><span><!></span></span>");
function t_(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "active", 15, !1), a = p(e, "type", 3, "underline"), o = p(e, "transition", 3, "slide"), c = p(e, "content$use", 19, () => []), u = p(e, "content$class", 3, ""), l = /* @__PURE__ */ qe(e, [
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
  ]), d, h = /* @__PURE__ */ ve(void 0), f, m = /* @__PURE__ */ ve(ce({})), v = /* @__PURE__ */ ve(ce({})), g = ce([]), b = o();
  Te(() => {
    b !== o() && (b = o(), s(h) && s(h).destroy(), z(m, {}, !0), z(v, {}, !0), z(h, y(), !0), s(h).init());
  }), Ju(() => {
    g.length && requestAnimationFrame(() => {
      const O = g.shift() ?? [];
      for (const w of O)
        w();
    });
  }), rt(() => (z(h, y(), !0), s(h).init(), () => {
    var O;
    (O = s(h)) == null || O.destroy();
  }));
  function y() {
    const O = {
      fade: Xb,
      slide: lu
    }[o()] || lu;
    return new O({
      addClass: (...w) => A(() => I(...w)),
      removeClass: (...w) => A(() => _(...w)),
      computeContentClientRect: x,
      setContentStyleProperty: (...w) => A(() => E(...w))
    });
  }
  function A(O) {
    g.length ? g[g.length - 1].push(O) : O();
  }
  function I(O) {
    s(m)[O] || (s(m)[O] = !0);
  }
  function _(O) {
    (!(O in s(m)) || s(m)[O]) && (s(m)[O] = !1);
  }
  function E(O, w) {
    s(v)[O] != w && (w === "" || w == null ? delete s(v)[O] : s(v)[O] = w);
  }
  function C(O) {
    var w;
    i(!0), (w = s(h)) == null || w.activate(O);
  }
  function T() {
    var O;
    i(!1), (O = s(h)) == null || O.deactivate();
  }
  function x() {
    return g.push([]), f.getBoundingClientRect();
  }
  function S() {
    return d;
  }
  var P = { activate: C, deactivate: T, computeContentClientRect: x, getElement: S }, X = e_();
  Ue(X, (O, w) => ({ class: O, ...w }), [
    () => De({
      "mdc-tab-indicator": !0,
      "mdc-tab-indicator--active": i(),
      "mdc-tab-indicator--fade": o() === "fade",
      ...s(m),
      [r()]: !0
    }),
    () => $n(l, ["content$"])
  ]);
  var M = se(X);
  Ue(
    M,
    (O, w, k) => ({
      class: O,
      style: w,
      "aria-hidden": a() === "icon" ? "true" : void 0,
      ...k
    }),
    [
      () => De({
        "mdc-tab-indicator__content": !0,
        "mdc-tab-indicator__content--underline": a() === "underline",
        "mdc-tab-indicator__content--icon": a() === "icon",
        [u()]: !0
      }),
      () => Object.entries(s(v)).map(([O, w]) => `${O}: ${w};`).join(" "),
      () => it(l, "content$")
    ]
  );
  var N = se(M);
  return Se(N, () => e.children ?? pe), Ee(M, (O) => f = O, () => f), Me(M, (O, w) => W == null ? void 0 : W(O, w), c), Ee(X, (O) => d = O, () => d), Me(X, (O, w) => W == null ? void 0 : W(O, w), n), L(t, X), xe(P);
}
var n_ = /* @__PURE__ */ de('<span><!> <!></span> <!> <span class="mdc-tab__ripple"></span>', 1);
function r_(t, e) {
  Ce(e, !0);
  const n = (G) => {
    {
      let B = /* @__PURE__ */ ge(() => it(g, "tabIndicator$"));
      Ee(
        t_(G, nt(() => s(B), {
          get active() {
            return s(S);
          },
          set active($) {
            z(S, $, !0);
          },
          children: ($, Q) => {
            var fe = ne(), we = Z(fe);
            Se(we, () => e.tabIndicator ?? pe), L($, fe);
          },
          $$slots: { default: !0 }
        })),
        ($) => I = $,
        () => I
      );
    }
  };
  let r = p(e, "use", 19, () => []), i = p(e, "class", 3, ""), a = p(e, "style", 3, ""), o = p(e, "ripple", 3, !0), c = p(e, "stacked", 3, !1), u = p(e, "minWidth", 3, !1), l = p(e, "indicatorSpanOnlyContent", 3, !1), d = p(e, "href", 3, void 0), h = p(e, "content$use", 19, () => []), f = p(e, "content$class", 3, ""), m = p(e, "component", 3, Br), v = p(e, "tag", 19, () => d() == null ? "button" : "a"), g = /* @__PURE__ */ qe(e, [
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
  ]), b, y = /* @__PURE__ */ ve(void 0), A, I, _ = ce({}), E = ce({}), C = ce({}), T = me("SMUI:tab:focusOnActivate");
  const x = me("SMUI:tab:initialActive");
  let S = /* @__PURE__ */ ve(ce(x.active != null && x.key(e.tab) === x.active)), P = /* @__PURE__ */ ve(!1);
  if (oe("SMUI:label:context", "tab"), oe("SMUI:icon:context", "tab"), !e.tab)
    throw new Error("The tab property is required! It should be passed down from the TabBar to the Tab.");
  let X = !1;
  Te(() => {
    if (!s(y)) {
      X = !1;
      return;
    }
    X || (X = !0, s(y).setFocusOnActivate(T));
  });
  const M = me("SMUI:tab:mount"), N = me("SMUI:tab:unmount");
  rt(() => {
    z(
      y,
      new Kb({
        setAttr: K,
        addClass: w,
        removeClass: k,
        hasClass: O,
        activateIndicator: (B) => I.activate(B),
        deactivateIndicator: () => I.deactivate(),
        notifyInteracted: () => Je(j(), "SMUITabInteracted", { tabId: e.tab }),
        getOffsetLeft: () => j().offsetLeft,
        getOffsetWidth: () => j().offsetWidth,
        getContentOffsetLeft: () => A.offsetLeft,
        getContentOffsetWidth: () => A.offsetWidth,
        focus: R
      }),
      !0
    );
    const G = {
      tabId: e.tab,
      get element() {
        return j();
      },
      get active() {
        return s(S);
      },
      forceAccessible(B) {
        z(P, B, !0);
      },
      computeIndicatorClientRect: () => I.computeContentClientRect(),
      computeDimensions: () => {
        if (s(y) == null)
          throw new Error("Instance is undefined.");
        return s(y).computeDimensions();
      },
      focus: R,
      activate: ee,
      deactivate: H
    };
    return M && M(G), s(y).init(), () => {
      var B;
      N && N(G), (B = s(y)) == null || B.destroy();
    };
  });
  function O(G) {
    return G in _ ? _[G] : j().classList.contains(G);
  }
  function w(G) {
    _[G] || (_[G] = !0);
  }
  function k(G) {
    (!(G in _) || _[G]) && (_[G] = !1);
  }
  function F(G, B) {
    E[G] != B && (B === "" || B == null ? delete E[G] : E[G] = B);
  }
  function K(G, B) {
    C[G] !== B && (C[G] = B);
  }
  function ee(G, B) {
    var $, Q, fe;
    z(S, !0), B && (($ = s(y)) == null || $.setFocusOnActivate(!1)), (Q = s(y)) == null || Q.activate(G), B && ((fe = s(y)) == null || fe.setFocusOnActivate(T));
  }
  function H() {
    var G;
    z(S, !1), (G = s(y)) == null || G.deactivate();
  }
  function R() {
    j().focus();
  }
  function j() {
    return b.getElement();
  }
  var Ae = { activate: ee, deactivate: H, focus: R, getElement: j }, be = ne(), V = Z(be);
  {
    let G = /* @__PURE__ */ ge(() => [
      [
        Xt,
        {
          ripple: o(),
          unbounded: !1,
          addClass: w,
          removeClass: k,
          addStyle: F
        }
      ],
      ...r()
    ]), B = /* @__PURE__ */ ge(() => De({
      "mdc-tab": !0,
      "mdc-tab--active": s(S),
      "mdc-tab--stacked": c(),
      "mdc-tab--min-width": u(),
      ..._,
      [i()]: !0
    })), $ = /* @__PURE__ */ ge(() => Object.entries(E).map(([J, ie]) => `${J}: ${ie};`).concat([a()]).join(" ")), Q = /* @__PURE__ */ ge(() => s(S) ? "true" : "false"), fe = /* @__PURE__ */ ge(() => s(S) || s(P) ? "0" : "-1"), we = /* @__PURE__ */ ge(() => $n(g, ["content$", "tabIndicator$"]));
    gr(V, m, (J, ie) => {
      Ee(
        ie(J, nt(
          {
            get tag() {
              return v();
            },
            get use() {
              return s(G);
            },
            get class() {
              return s(B);
            },
            get style() {
              return s($);
            },
            role: "tab",
            get "aria-selected"() {
              return s(Q);
            },
            get tabindex() {
              return s(fe);
            },
            get href() {
              return d();
            }
          },
          () => C,
          () => s(we),
          {
            onclick: (Pe) => {
              var Le;
              (Le = e.onclick) == null || Le.call(e, Pe), !Pe.defaultPrevented && s(y) && s(y).handleClick();
            },
            children: (Pe, Le) => {
              var We = n_(), Ke = Z(We);
              Ue(Ke, (Fe, ct) => ({ class: Fe, ...ct }), [
                () => De({ "mdc-tab__content": !0, [f()]: !0 }),
                () => it(g, "content$")
              ]);
              var Be = se(Ke);
              Se(Be, () => e.children ?? pe);
              var U = Ie(Be, 2);
              {
                var q = (Fe) => {
                  n(Fe);
                };
                ae(U, (Fe) => {
                  l() && Fe(q);
                });
              }
              Ee(Ke, (Fe) => A = Fe, () => A), Me(Ke, (Fe, ct) => W == null ? void 0 : W(Fe, ct), h);
              var he = Ie(Ke, 2);
              {
                var Re = (Fe) => {
                  n(Fe);
                };
                ae(he, (Fe) => {
                  l() || Fe(Re);
                });
              }
              L(Pe, We);
            },
            $$slots: { default: !0 }
          }
        )),
        (Pe) => b = Pe,
        () => b
      );
    });
  }
  return L(t, be), xe(Ae);
}
var i_ = (t, e) => e(), a_ = /* @__PURE__ */ de('<button class="filter-tab__tabs__clear svelte-nj6sif">Clear Filters</button>'), o_ = /* @__PURE__ */ de('<div class="filter-tab__tabs svelte-nj6sif"><h4 style="all:unset; font-weight: bold; font-size: 1rem;">Filter by</h4> <!> <!></div>'), s_ = /* @__PURE__ */ de('<div class="filter-tab svelte-nj6sif"><!> <!> <!></div>');
function l_(t, e) {
  Ce(e, !0);
  let n = p(e, "filters", 31, () => ce([])), r = p(e, "onFilterChange", 3, (I) => {
  }), i = p(e, "activeNavigationTab", 31, () => ce(e.navigationTabs ? e.navigationTabs[0] : void 0)), a = p(e, "searchText", 15, ""), o = p(e, "searchLabel", 3, "Search"), c = p(e, "searchPlaceholder", 3, "Type to search..."), u = p(e, "onSearchInput", 3, () => {
  }), l = p(e, "searchDisabled", 3, !1), d = /* @__PURE__ */ ge(() => n().some((I) => I.value !== void 0 && I.value !== null && I.value !== "")), h = () => {
    n(n().map((I) => ({ ...I, value: void 0 }))), r()(n());
  };
  var f = s_(), m = se(f);
  {
    var v = (I) => {
      Cg(I, {
        oninput: () => u()(),
        icon: "search",
        get label() {
          return o();
        },
        get placeholder() {
          return c();
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
    ae(m, (I) => {
      l() || I(v);
    });
  }
  var g = Ie(m, 2);
  {
    var b = (I) => {
      $b(I, {
        get tabs() {
          return e.navigationTabs;
        },
        get active() {
          return i();
        },
        set active(E) {
          i(E);
        },
        tab: (E, C = pe) => {
          r_(E, {
            get tab() {
              return C();
            },
            minWidth: !0,
            children: (T, x) => {
              Pm(T, {
                children: (S, P) => {
                  var X = Rt();
                  Oe(() => at(X, C())), L(S, X);
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
    ae(g, (I) => {
      e.navigationTabs && I(b);
    });
  }
  var y = Ie(g, 2);
  {
    var A = (I) => {
      var _ = o_(), E = Ie(se(_), 2);
      kb(E, {
        onfiltersChanged: (x) => r()(x),
        get filters() {
          return n();
        },
        set filters(x) {
          n(x);
        }
      });
      var C = Ie(E, 2);
      {
        var T = (x) => {
          var S = a_();
          S.__click = [i_, h], L(x, S);
        };
        ae(C, (x) => {
          s(d) && x(T);
        });
      }
      L(I, _);
    };
    ae(y, (I) => {
      n() && n().length > 0 && I(A);
    });
  }
  L(t, f), xe();
}
On(["click"]);
var u_ = /* @__PURE__ */ de('<div><div class="mdc-linear-progress__buffer"><div class="mdc-linear-progress__buffer-bar"></div> <div class="mdc-linear-progress__buffer-dots"></div></div> <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"><span class="mdc-linear-progress__bar-inner"></span></div> <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span class="mdc-linear-progress__bar-inner"></span></div></div>');
function od(t, e) {
  Ce(e, !0);
  const [n, r] = pr();
  let i = p(e, "use", 19, () => []), a = p(e, "class", 3, ""), o = p(e, "style", 3, ""), c = p(e, "indeterminate", 3, !1), u = p(e, "closed", 3, !1), l = p(e, "progress", 3, 0), d = p(e, "buffer", 3, void 0), h = /* @__PURE__ */ qe(e, [
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
  ]), f, m = /* @__PURE__ */ ve(void 0), v = ce({}), g = ce({}), b = ce({}), y = ce({}), A = ce({}), I = me("SMUI:linear-progress:context"), _ = me("SMUI:linear-progress:closed");
  Te(() => {
    _ && ui(_, u());
  }), Te(() => {
    s(m) && s(m).isDeterminate() !== !c() && s(m).setDeterminate(!c());
  }), Te(() => {
    s(m) && s(m).getProgress() !== l() && s(m).setProgress(l());
  }), Te(() => {
    s(m) && (d() == null ? s(m).setBuffer(1) : s(m).setBuffer(d()));
  }), Te(() => {
    s(m) && (u() ? s(m).close() : s(m).open());
  }), rt(() => (z(
    m,
    new jp({
      addClass: C,
      forceLayout: () => {
        N().getBoundingClientRect();
      },
      setBufferBarStyle: X,
      setPrimaryBarStyle: M,
      hasClass: E,
      removeAttribute: S,
      removeClass: T,
      setAttribute: x,
      setStyle: P,
      attachResizeObserver: (R) => {
        const j = window.ResizeObserver;
        if (j) {
          const Ae = new j(R);
          return Ae.observe(N()), Ae;
        }
        return null;
      },
      getWidth: () => N().offsetWidth
    }),
    !0
  ), s(m).init(), () => {
    var R;
    (R = s(m)) == null || R.destroy();
  }));
  function E(R) {
    return R in v ? v[R] : N().classList.contains(R);
  }
  function C(R) {
    v[R] || (v[R] = !0);
  }
  function T(R) {
    (!(R in v) || v[R]) && (v[R] = !1);
  }
  function x(R, j) {
    g[R] !== j && (g[R] = j);
  }
  function S(R) {
    (!(R in g) || g[R] != null) && (g[R] = void 0);
  }
  function P(R, j) {
    b[R] != j && (j === "" || j == null ? delete b[R] : b[R] = j);
  }
  function X(R, j) {
    y[R] != j && (j === "" || j == null ? delete y[R] : y[R] = j);
  }
  function M(R, j) {
    A[R] != j && (j === "" || j == null ? delete A[R] : A[R] = j);
  }
  function N() {
    return f;
  }
  var O = { getElement: N }, w = u_(), k = (R) => {
    var j;
    s(m) && s(m).handleTransitionEnd(), (j = e.ontransitionend) == null || j.call(e, R);
  };
  Ue(
    w,
    (R, j) => ({
      class: R,
      style: j,
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 1,
      "aria-valuenow": c() ? void 0 : l(),
      ...g,
      ...h,
      ontransitionend: k
    }),
    [
      () => De({
        "mdc-linear-progress": !0,
        "mdc-linear-progress--indeterminate": c(),
        "mdc-linear-progress--closed": u(),
        "mdc-data-table__linear-progress": I === "data-table",
        ...v,
        [a()]: !0
      }),
      () => Object.entries(b).map(([R, j]) => `${R}: ${j};`).concat([o()]).join(" ")
    ]
  );
  var F = se(w), K = se(F), ee = Ie(F, 2);
  Ee(w, (R) => f = R, () => f), Me(w, (R, j) => W == null ? void 0 : W(R, j), i), Oe(
    (R, j) => {
      Gt(K, R), Gt(ee, j);
    },
    [
      () => Object.entries(y).map(([R, j]) => `${R}: ${j};`).join(" "),
      () => Object.entries(A).map(([R, j]) => `${R}: ${j};`).join(" ")
    ]
  ), L(t, w);
  var H = xe(O);
  return r(), H;
}
var c_ = /* @__PURE__ */ vn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 4l-8 8h16l-8-8z"></path></svg>'), d_ = /* @__PURE__ */ vn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 20l8-8H4l8 8z"></path></svg>'), f_ = /* @__PURE__ */ de('<div class="custom-cell-container svelte-1mj71p3"><div class="cell-header svelte-1mj71p3"><span class="header-title svelte-1mj71p3"> </span> <!></div></div>'), h_ = (t, e) => e(), v_ = /* @__PURE__ */ de('<input type="text" class="svelte-1mj71p3"/>'), m_ = (t, e) => e(), g_ = /* @__PURE__ */ de('<input type="number" class="svelte-1mj71p3"/>'), p_ = /* @__PURE__ */ de("<!> <!>", 1), b_ = /* @__PURE__ */ de("<!> <!>", 1), __ = /* @__PURE__ */ de('<div class="cell-actions svelte-1mj71p3"></div>'), y_ = /* @__PURE__ */ de("<!> <!>", 1);
function I_(t, e) {
  Ce(e, !0);
  const n = () => Zn(b, "$sortColumn", a), r = () => Zn(y, "$sortDirection", a), i = () => Zn(g, "$filteredData", a), [a, o] = pr();
  let c = p(e, "loadingDone", 15, !0), u = p(e, "label", 19, Yr), l = p(e, "columnDefs", 19, () => []), d = p(e, "rowData", 31, () => ce([])), h = p(e, "rowActions", 19, () => []), f = p(e, "searchInputLabel", 3, "Search"), m = p(e, "emptyText", 3, "No data available"), v = ce({ name: "", color: "", number: "" }), g = tn([]), b = tn(null), y = tn(null), A = /* @__PURE__ */ ge(() => l().some((C) => C.filter));
  e.store.store.subscribe((C) => {
    d([...C]), I();
  });
  function I() {
    let C = d().filter((T) => l().every((x) => {
      const S = v[x.field], P = x.filterValueGetter ? x.filterValueGetter(T) : T[x.field];
      return S ? x.filterType === "number" ? P == S : P.toString().toLowerCase().includes(S.toLowerCase()) : !0;
    }));
    C = _(C), g.set(C);
  }
  function _(C) {
    let T, x;
    return b.subscribe((S) => T = S), y.subscribe((S) => x = S), !T || !x ? C : C.sort((S, P) => {
      let X = S[T], M = P[T];
      return X == null && (X = ""), M == null && (M = ""), x === "asc" ? X.toString().localeCompare(M.toString()) : M.toString().localeCompare(X.toString());
    });
  }
  function E(C) {
    b.update((T) => {
      if (T === C)
        y.update((x) => x === "asc" ? "desc" : x === "desc" ? null : "asc");
      else
        return y.set("asc"), C;
      return C;
    }), I();
  }
  g.set(d()), Xp(t, {
    get "table$aria-label"() {
      return u();
    },
    style: "max-width: 100%; width: 100%;",
    progress: (T) => {
      od(T, {
        indeterminate: !0,
        "aria-label": "Data is being loaded...",
        get closed() {
          return c();
        },
        set closed(x) {
          c(x);
        }
      });
    },
    children: (T, x) => {
      var S = y_(), P = Z(S);
      Yp(P, {
        children: (M, N) => {
          var O = b_(), w = Z(O);
          $a(w, {
            class: "header-title-row",
            children: (K, ee) => {
              var H = ne(), R = Z(H);
              xn(R, 17, l, Oi, (j, Ae) => {
                ma(j, {
                  onclick: () => s(Ae).sortable && E(s(Ae).field),
                  get style() {
                    return s(Ae).headerStyle;
                  },
                  children: (be, V) => {
                    var G = f_(), B = se(G), $ = se(B), Q = se($), fe = Ie($, 2);
                    {
                      var we = (J) => {
                        var ie = ne(), Pe = Z(ie);
                        {
                          var Le = (We) => {
                            var Ke = ne(), Be = Z(Ke);
                            {
                              var U = (he) => {
                                var Re = c_();
                                L(he, Re);
                              }, q = (he) => {
                                var Re = ne(), Fe = Z(Re);
                                {
                                  var ct = (pt) => {
                                    var le = d_();
                                    L(pt, le);
                                  };
                                  ae(
                                    Fe,
                                    (pt) => {
                                      r() === "desc" && pt(ct);
                                    },
                                    !0
                                  );
                                }
                                L(he, Re);
                              };
                              ae(Be, (he) => {
                                r() === "asc" ? he(U) : he(q, !1);
                              });
                            }
                            L(We, Ke);
                          };
                          ae(Pe, (We) => {
                            n() === s(Ae).field && r() !== null && We(Le);
                          });
                        }
                        L(J, ie);
                      };
                      ae(fe, (J) => {
                        s(Ae).sortable && J(we);
                      });
                    }
                    Oe(() => {
                      Gt(G, `min-width: ${s(Ae).minWidth ?? 0 ?? ""}`), at(Q, s(Ae).headerName);
                    }), L(be, G);
                  },
                  $$slots: { default: !0 }
                });
              }), L(K, H);
            },
            $$slots: { default: !0 }
          });
          var k = Ie(w, 2);
          {
            var F = (K) => {
              $a(K, {
                class: "header-filter-row",
                children: (ee, H) => {
                  var R = ne(), j = Z(R);
                  xn(j, 17, l, Oi, (Ae, be) => {
                    ma(Ae, {
                      children: (V, G) => {
                        var B = ne(), $ = Z(B);
                        {
                          var Q = (fe) => {
                            var we = p_(), J = Z(we);
                            {
                              var ie = (We) => {
                                var Ke = v_();
                                Ke.__input = [h_, I], Oe(() => Or(Ke, "placeholder", `${f()} ${s(be).headerName}`)), Ca(Ke, () => v[s(be).field], (Be) => v[s(be).field] = Be), L(We, Ke);
                              };
                              ae(J, (We) => {
                                s(be).filterType === "text" && We(ie);
                              });
                            }
                            var Pe = Ie(J, 2);
                            {
                              var Le = (We) => {
                                var Ke = g_();
                                Ke.__input = [m_, I], Oe(() => Or(Ke, "placeholder", `${f()} ${s(be).headerName}`)), Ca(Ke, () => v[s(be).field], (Be) => v[s(be).field] = Be), L(We, Ke);
                              };
                              ae(Pe, (We) => {
                                s(be).filterType === "number" && We(Le);
                              });
                            }
                            L(fe, we);
                          };
                          ae($, (fe) => {
                            s(be).filter && fe(Q);
                          });
                        }
                        L(V, B);
                      },
                      $$slots: { default: !0 }
                    });
                  }), L(ee, R);
                },
                $$slots: { default: !0 }
              });
            };
            ae(k, (K) => {
              s(A) && K(F);
            });
          }
          L(M, O);
        },
        $$slots: { default: !0 }
      });
      var X = Ie(P, 2);
      Qp(X, {
        children: (M, N) => {
          var O = ne(), w = Z(O);
          {
            var k = (K) => {
              $a(K, {
                children: (ee, H) => {
                  ma(ee, {
                    class: "oscd-basic-table__empty-row",
                    get colspan() {
                      return l().length;
                    },
                    style: "text-align:center; padding: 24px; opacity: 0.6; background: rgba(0,0,0,0.05);",
                    children: (R, j) => {
                      var Ae = Rt();
                      Oe(() => at(Ae, m())), L(R, Ae);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { default: !0 }
              });
            }, F = (K) => {
              var ee = ne(), H = Z(ee);
              xn(H, 1, i, Oi, (R, j) => {
                $a(R, {
                  children: (Ae, be) => {
                    var V = ne(), G = Z(V);
                    xn(G, 17, l, (B) => B.field, (B, $) => {
                      var Q = ne(), fe = Z(Q);
                      {
                        var we = (ie) => {
                          ma(ie, {
                            children: (Pe, Le) => {
                              var We = __();
                              xn(We, 21, h, Oi, (Ke, Be) => {
                                var U = ne(), q = Z(U);
                                {
                                  var he = (Fe) => {
                                    Eo(Fe, {
                                      get content() {
                                        return s(Be).tooltip;
                                      },
                                      hoverDelay: 500,
                                      children: (ct, pt) => {
                                        {
                                          let le = /* @__PURE__ */ ge(() => s(Be).disabled(s(j)));
                                          qm(ct, {
                                            get iconComponent() {
                                              return s(Be).iconComponent;
                                            },
                                            get iconStyles() {
                                              return s(Be).iconStyles;
                                            },
                                            callback: () => s(Be).callback(s(j)),
                                            get disabled() {
                                              return s(le);
                                            }
                                          });
                                        }
                                      },
                                      $$slots: { default: !0 }
                                    });
                                  }, Re = (Fe) => {
                                    Eo(Fe, {
                                      get content() {
                                        return s(Be).tooltip;
                                      },
                                      hoverDelay: 500,
                                      children: (ct, pt) => {
                                        {
                                          let le = /* @__PURE__ */ ge(() => s(Be).disabled(s(j)));
                                          Fm(ct, {
                                            class: "button",
                                            variant: "raised",
                                            callback: () => s(Be).callback(s(j)),
                                            get disabled() {
                                              return s(le);
                                            },
                                            children: (ye, Y) => {
                                              var te = ne(), Ne = Z(te);
                                              {
                                                var dt = (mt) => {
                                                  mp(mt, { svgStyles: "margin: unset" });
                                                }, bt = (mt) => {
                                                  var Ut = ne(), br = Z(Ut);
                                                  {
                                                    var ht = (It) => {
                                                      nd(It, { svgStyles: "margin: unset" });
                                                    }, Mt = (It) => {
                                                      var Dn = ne(), yi = Z(Dn);
                                                      {
                                                        var Vn = (Qe) => {
                                                          bp(Qe, { svgStyles: "margin: unset" });
                                                        }, ze = (Qe) => {
                                                          var $e = ne(), Dt = Z($e);
                                                          {
                                                            var gn = (ut) => {
                                                              yp(ut, { svgStyles: "margin: unset" });
                                                            }, ot = (ut) => {
                                                              var At = ne(), et = Z(At);
                                                              {
                                                                var wt = (Lt) => {
                                                                  Ap(Lt, { svgStyles: "margin: unset" });
                                                                }, Pn = (Lt) => {
                                                                  var _t = ne(), Pt = Z(_t);
                                                                  {
                                                                    var ln = (un) => {
                                                                      xp(un, { svgStyles: "margin: unset" });
                                                                    }, kt = (un) => {
                                                                      var Yt = ne(), Gn = Z(Yt);
                                                                      {
                                                                        var Fr = (jt) => {
                                                                          wp(jt, { svgStyles: "margin: unset" });
                                                                        }, cn = (jt) => {
                                                                          Ep(jt, { svgStyles: "margin: unset" });
                                                                        };
                                                                        ae(
                                                                          Gn,
                                                                          (jt) => {
                                                                            s(Be).icon === "delete" ? jt(Fr) : jt(cn, !1);
                                                                          },
                                                                          !0
                                                                        );
                                                                      }
                                                                      L(un, Yt);
                                                                    };
                                                                    ae(
                                                                      Pt,
                                                                      (un) => {
                                                                        s(Be).icon === "edit" ? un(ln) : un(kt, !1);
                                                                      },
                                                                      !0
                                                                    );
                                                                  }
                                                                  L(Lt, _t);
                                                                };
                                                                ae(
                                                                  et,
                                                                  (Lt) => {
                                                                    s(Be).icon === "remove" ? Lt(wt) : Lt(Pn, !1);
                                                                  },
                                                                  !0
                                                                );
                                                              }
                                                              L(ut, At);
                                                            };
                                                            ae(
                                                              Dt,
                                                              (ut) => {
                                                                s(Be).icon === "find-in-page" ? ut(gn) : ut(ot, !1);
                                                              },
                                                              !0
                                                            );
                                                          }
                                                          L(Qe, $e);
                                                        };
                                                        ae(
                                                          yi,
                                                          (Qe) => {
                                                            s(Be).icon === "download" ? Qe(Vn) : Qe(ze, !1);
                                                          },
                                                          !0
                                                        );
                                                      }
                                                      L(It, Dn);
                                                    };
                                                    ae(
                                                      br,
                                                      (It) => {
                                                        s(Be).icon === "cancel" ? It(ht) : It(Mt, !1);
                                                      },
                                                      !0
                                                    );
                                                  }
                                                  L(mt, Ut);
                                                };
                                                ae(Ne, (mt) => {
                                                  s(Be).icon === "add" ? mt(dt) : mt(bt, !1);
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
                                  ae(q, (Fe) => {
                                    s(Be).iconComponent ? Fe(he) : Fe(Re, !1);
                                  });
                                }
                                L(Ke, U);
                              }), L(Pe, We);
                            },
                            $$slots: { default: !0 }
                          });
                        }, J = (ie) => {
                          ma(ie, {
                            get numeric() {
                              return s($).numeric;
                            },
                            get style() {
                              return s($).cellStyle;
                            },
                            children: (Pe, Le) => {
                              var We = ne(), Ke = Z(We);
                              {
                                var Be = (q) => {
                                  const he = /* @__PURE__ */ ge(() => s($).cellRenderer);
                                  var Re = ne(), Fe = Z(Re);
                                  gr(Fe, () => s(he), (ct, pt) => {
                                    pt(ct, nt(
                                      {
                                        get row() {
                                          return s(j);
                                        },
                                        get value() {
                                          return s(j)[s($).field];
                                        },
                                        get col() {
                                          return s($);
                                        }
                                      },
                                      () => s($).cellRendererProps ?? {}
                                    ));
                                  }), L(q, Re);
                                }, U = (q) => {
                                  var he = ne(), Re = Z(he);
                                  {
                                    var Fe = (pt) => {
                                      var le = Rt();
                                      Oe((ye) => at(le, ye), [
                                        () => s($).valueFormatter(s(j)[s($).field])
                                      ]), L(pt, le);
                                    }, ct = (pt) => {
                                      var le = Rt();
                                      Oe(() => at(le, s(j)[s($).field] ?? "")), L(pt, le);
                                    };
                                    ae(
                                      Re,
                                      (pt) => {
                                        s($).valueFormatter ? pt(Fe) : pt(ct, !1);
                                      },
                                      !0
                                    );
                                  }
                                  L(q, he);
                                };
                                ae(Ke, (q) => {
                                  s($).cellRenderer ? q(Be) : q(U, !1);
                                });
                              }
                              L(Pe, We);
                            },
                            $$slots: { default: !0 }
                          });
                        };
                        ae(fe, (ie) => {
                          s($).field === "actions" ? ie(we) : ie(J, !1);
                        });
                      }
                      L(B, Q);
                    }), L(Ae, V);
                  },
                  $$slots: { default: !0 }
                });
              }), L(K, ee);
            };
            ae(w, (K) => {
              i().length === 0 ? K(k) : K(F, !1);
            });
          }
          L(M, O);
        },
        $$slots: { default: !0 }
      }), L(T, S);
    },
    $$slots: { progress: !0, default: !0 }
  }), xe(), o();
}
On(["input"]);
function yt(t) {
  return typeof t == "function";
}
function $s(t) {
  var e = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = t(e);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var os = $s(function(t) {
  return function(n) {
    t(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(r, i) {
      return i + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function Ao(t, e) {
  if (t) {
    var n = t.indexOf(e);
    0 <= n && t.splice(n, 1);
  }
}
var Va = function() {
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
            for (var c = Ht(o), u = c.next(); !u.done; u = c.next()) {
              var l = u.value;
              l.remove(this);
            }
          } catch (g) {
            e = { error: g };
          } finally {
            try {
              u && !u.done && (n = c.return) && n.call(c);
            } finally {
              if (e) throw e.error;
            }
          }
        else
          o.remove(this);
      var d = this.initialTeardown;
      if (yt(d))
        try {
          d();
        } catch (g) {
          a = g instanceof os ? g.errors : [g];
        }
      var h = this._finalizers;
      if (h) {
        this._finalizers = null;
        try {
          for (var f = Ht(h), m = f.next(); !m.done; m = f.next()) {
            var v = m.value;
            try {
              uu(v);
            } catch (g) {
              a = a ?? [], g instanceof os ? a = Qn(Qn([], vr(a)), vr(g.errors)) : a.push(g);
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
        throw new os(a);
    }
  }, t.prototype.add = function(e) {
    var n;
    if (e && e !== this)
      if (this.closed)
        uu(e);
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
    n === e ? this._parentage = null : Array.isArray(n) && Ao(n, e);
  }, t.prototype.remove = function(e) {
    var n = this._finalizers;
    n && Ao(n, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = function() {
    var e = new t();
    return e.closed = !0, e;
  }(), t;
}(), sd = Va.EMPTY;
function ld(t) {
  return t instanceof Va || t && "closed" in t && yt(t.remove) && yt(t.add) && yt(t.unsubscribe);
}
function uu(t) {
  yt(t) ? t() : t.unsubscribe();
}
var E_ = {
  Promise: void 0
}, S_ = {
  setTimeout: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setTimeout.apply(void 0, Qn([t, e], vr(n)));
  },
  clearTimeout: function(t) {
    return clearTimeout(t);
  },
  delegate: void 0
};
function ud(t) {
  S_.setTimeout(function() {
    throw t;
  });
}
function cu() {
}
function uo(t) {
  t();
}
var el = function(t) {
  Ve(e, t);
  function e(n) {
    var r = t.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, ld(n) && n.add(r)) : r.destination = x_, r;
  }
  return e.create = function(n, r, i) {
    return new La(n, r, i);
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
}(Va), A_ = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(e);
      } catch (r) {
        no(r);
      }
  }, t.prototype.error = function(e) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(e);
      } catch (r) {
        no(r);
      }
    else
      no(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (n) {
        no(n);
      }
  }, t;
}(), La = function(t) {
  Ve(e, t);
  function e(n, r, i) {
    var a = t.call(this) || this, o;
    return yt(n) || !n ? o = {
      next: n ?? void 0,
      error: r ?? void 0,
      complete: i ?? void 0
    } : o = n, a.destination = new A_(o), a;
  }
  return e;
}(el);
function no(t) {
  ud(t);
}
function C_(t) {
  throw t;
}
var x_ = {
  closed: !0,
  next: cu,
  error: C_,
  complete: cu
}, tl = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function ia(t) {
  return t;
}
function T_(t) {
  return t.length === 0 ? ia : t.length === 1 ? t[0] : function(n) {
    return t.reduce(function(r, i) {
      return i(r);
    }, n);
  };
}
var an = function() {
  function t(e) {
    e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var n = new t();
    return n.source = this, n.operator = e, n;
  }, t.prototype.subscribe = function(e, n, r) {
    var i = this, a = L_(e) ? e : new La(e, n, r);
    return uo(function() {
      var o = i, c = o.operator, u = o.source;
      a.add(c ? c.call(a, u) : u ? i._subscribe(a) : i._trySubscribe(a));
    }), a;
  }, t.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (n) {
      e.error(n);
    }
  }, t.prototype.forEach = function(e, n) {
    var r = this;
    return n = du(n), new n(function(i, a) {
      var o = new La({
        next: function(c) {
          try {
            e(c);
          } catch (u) {
            a(u), o.unsubscribe();
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
  }, t.prototype[tl] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    return T_(e)(this);
  }, t.prototype.toPromise = function(e) {
    var n = this;
    return e = du(e), new e(function(r, i) {
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
function du(t) {
  var e;
  return (e = t ?? E_.Promise) !== null && e !== void 0 ? e : Promise;
}
function w_(t) {
  return t && yt(t.next) && yt(t.error) && yt(t.complete);
}
function L_(t) {
  return t && t instanceof el || w_(t) && ld(t);
}
function O_(t) {
  return yt(t == null ? void 0 : t.lift);
}
function Mn(t) {
  return function(e) {
    if (O_(e))
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
function Ln(t, e, n, r, i) {
  return new R_(t, e, n, r, i);
}
var R_ = function(t) {
  Ve(e, t);
  function e(n, r, i, a, o, c) {
    var u = t.call(this, n) || this;
    return u.onFinalize = o, u.shouldUnsubscribe = c, u._next = r ? function(l) {
      try {
        r(l);
      } catch (d) {
        n.error(d);
      }
    } : t.prototype._next, u._error = a ? function(l) {
      try {
        a(l);
      } catch (d) {
        n.error(d);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._error, u._complete = i ? function() {
      try {
        i();
      } catch (l) {
        n.error(l);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._complete, u;
  }
  return e.prototype.unsubscribe = function() {
    var n;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var r = this.closed;
      t.prototype.unsubscribe.call(this), !r && ((n = this.onFinalize) === null || n === void 0 || n.call(this));
    }
  }, e;
}(el), M_ = $s(function(t) {
  return function() {
    t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), Bo = function(t) {
  Ve(e, t);
  function e() {
    var n = t.call(this) || this;
    return n.closed = !1, n.currentObservers = null, n.observers = [], n.isStopped = !1, n.hasError = !1, n.thrownError = null, n;
  }
  return e.prototype.lift = function(n) {
    var r = new fu(this, this);
    return r.operator = n, r;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new M_();
  }, e.prototype.next = function(n) {
    var r = this;
    uo(function() {
      var i, a;
      if (r._throwIfClosed(), !r.isStopped) {
        r.currentObservers || (r.currentObservers = Array.from(r.observers));
        try {
          for (var o = Ht(r.currentObservers), c = o.next(); !c.done; c = o.next()) {
            var u = c.value;
            u.next(n);
          }
        } catch (l) {
          i = { error: l };
        } finally {
          try {
            c && !c.done && (a = o.return) && a.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
      }
    });
  }, e.prototype.error = function(n) {
    var r = this;
    uo(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.hasError = r.isStopped = !0, r.thrownError = n;
        for (var i = r.observers; i.length; )
          i.shift().error(n);
      }
    });
  }, e.prototype.complete = function() {
    var n = this;
    uo(function() {
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
    var r = this, i = this, a = i.hasError, o = i.isStopped, c = i.observers;
    return a || o ? sd : (this.currentObservers = null, c.push(n), new Va(function() {
      r.currentObservers = null, Ao(c, n);
    }));
  }, e.prototype._checkFinalizedStatuses = function(n) {
    var r = this, i = r.hasError, a = r.thrownError, o = r.isStopped;
    i ? n.error(a) : o && n.complete();
  }, e.prototype.asObservable = function() {
    var n = new an();
    return n.source = this, n;
  }, e.create = function(n, r) {
    return new fu(n, r);
  }, e;
}(an), fu = function(t) {
  Ve(e, t);
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
    return (i = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)) !== null && i !== void 0 ? i : sd;
  }, e;
}(Bo), hu = function(t) {
  Ve(e, t);
  function e(n) {
    var r = t.call(this) || this;
    return r._value = n, r;
  }
  return Object.defineProperty(e.prototype, "value", {
    get: function() {
      return this.getValue();
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype._subscribe = function(n) {
    var r = t.prototype._subscribe.call(this, n);
    return !r.closed && n.next(this._value), r;
  }, e.prototype.getValue = function() {
    var n = this, r = n.hasError, i = n.thrownError, a = n._value;
    if (r)
      throw i;
    return this._throwIfClosed(), a;
  }, e.prototype.next = function(n) {
    t.prototype.next.call(this, this._value = n);
  }, e;
}(Bo), nl = {
  now: function() {
    return (nl.delegate || Date).now();
  },
  delegate: void 0
}, D_ = function(t) {
  Ve(e, t);
  function e(n, r, i) {
    n === void 0 && (n = 1 / 0), r === void 0 && (r = 1 / 0), i === void 0 && (i = nl);
    var a = t.call(this) || this;
    return a._bufferSize = n, a._windowTime = r, a._timestampProvider = i, a._buffer = [], a._infiniteTimeWindow = !0, a._infiniteTimeWindow = r === 1 / 0, a._bufferSize = Math.max(1, n), a._windowTime = Math.max(1, r), a;
  }
  return e.prototype.next = function(n) {
    var r = this, i = r.isStopped, a = r._buffer, o = r._infiniteTimeWindow, c = r._timestampProvider, u = r._windowTime;
    i || (a.push(n), !o && a.push(c.now() + u)), this._trimBuffer(), t.prototype.next.call(this, n);
  }, e.prototype._subscribe = function(n) {
    this._throwIfClosed(), this._trimBuffer();
    for (var r = this._innerSubscribe(n), i = this, a = i._infiniteTimeWindow, o = i._buffer, c = o.slice(), u = 0; u < c.length && !n.closed; u += a ? 1 : 2)
      n.next(c[u]);
    return this._checkFinalizedStatuses(n), r;
  }, e.prototype._trimBuffer = function() {
    var n = this, r = n._bufferSize, i = n._timestampProvider, a = n._buffer, o = n._infiniteTimeWindow, c = (o ? 1 : 2) * r;
    if (r < 1 / 0 && c < a.length && a.splice(0, a.length - c), !o) {
      for (var u = i.now(), l = 0, d = 1; d < a.length && a[d] <= u; d += 2)
        l = d;
      l && a.splice(0, l + 1);
    }
  }, e;
}(Bo), P_ = function(t) {
  Ve(e, t);
  function e(n, r) {
    return t.call(this) || this;
  }
  return e.prototype.schedule = function(n, r) {
    return this;
  }, e;
}(Va), vu = {
  setInterval: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setInterval.apply(void 0, Qn([t, e], vr(n)));
  },
  clearInterval: function(t) {
    return clearInterval(t);
  },
  delegate: void 0
}, N_ = function(t) {
  Ve(e, t);
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
    return i === void 0 && (i = 0), vu.setInterval(n.flush.bind(n, this), i);
  }, e.prototype.recycleAsyncId = function(n, r, i) {
    if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === !1)
      return r;
    r != null && vu.clearInterval(r);
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
      this.work = this.state = this.scheduler = null, this.pending = !1, Ao(a, this), r != null && (this.id = this.recycleAsyncId(i, r, null)), this.delay = null, t.prototype.unsubscribe.call(this);
    }
  }, e;
}(P_), mu = function() {
  function t(e, n) {
    n === void 0 && (n = t.now), this.schedulerActionCtor = e, this.now = n;
  }
  return t.prototype.schedule = function(e, n, r) {
    return n === void 0 && (n = 0), new this.schedulerActionCtor(this, e).schedule(r, n);
  }, t.now = nl.now, t;
}(), H_ = function(t) {
  Ve(e, t);
  function e(n, r) {
    r === void 0 && (r = mu.now);
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
}(mu), rl = new H_(N_), U_ = rl, k_ = new an(function(t) {
  return t.complete();
});
function cd(t) {
  return t && yt(t.schedule);
}
function dd(t) {
  return t[t.length - 1];
}
function B_(t) {
  return yt(dd(t)) ? t.pop() : void 0;
}
function Fo(t) {
  return cd(dd(t)) ? t.pop() : void 0;
}
var fd = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function hd(t) {
  return yt(t == null ? void 0 : t.then);
}
function vd(t) {
  return yt(t[tl]);
}
function md(t) {
  return Symbol.asyncIterator && yt(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function gd(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function F_() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var pd = F_();
function bd(t) {
  return yt(t == null ? void 0 : t[pd]);
}
function _d(t) {
  return Nh(this, arguments, function() {
    var n, r, i, a;
    return Ks(this, function(o) {
      switch (o.label) {
        case 0:
          n = t.getReader(), o.label = 1;
        case 1:
          o.trys.push([1, , 9, 10]), o.label = 2;
        case 2:
          return [4, Pi(n.read())];
        case 3:
          return r = o.sent(), i = r.value, a = r.done, a ? [4, Pi(void 0)] : [3, 5];
        case 4:
          return [2, o.sent()];
        case 5:
          return [4, Pi(i)];
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
function yd(t) {
  return yt(t == null ? void 0 : t.getReader);
}
function nr(t) {
  if (t instanceof an)
    return t;
  if (t != null) {
    if (vd(t))
      return V_(t);
    if (fd(t))
      return G_(t);
    if (hd(t))
      return j_(t);
    if (md(t))
      return Id(t);
    if (bd(t))
      return W_(t);
    if (yd(t))
      return q_(t);
  }
  throw gd(t);
}
function V_(t) {
  return new an(function(e) {
    var n = t[tl]();
    if (yt(n.subscribe))
      return n.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function G_(t) {
  return new an(function(e) {
    for (var n = 0; n < t.length && !e.closed; n++)
      e.next(t[n]);
    e.complete();
  });
}
function j_(t) {
  return new an(function(e) {
    t.then(function(n) {
      e.closed || (e.next(n), e.complete());
    }, function(n) {
      return e.error(n);
    }).then(null, ud);
  });
}
function W_(t) {
  return new an(function(e) {
    var n, r;
    try {
      for (var i = Ht(t), a = i.next(); !a.done; a = i.next()) {
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
function Id(t) {
  return new an(function(e) {
    z_(t, e).catch(function(n) {
      return e.error(n);
    });
  });
}
function q_(t) {
  return Id(_d(t));
}
function z_(t, e) {
  var n, r, i, a;
  return Sc(this, void 0, void 0, function() {
    var o, c;
    return Ks(this, function(u) {
      switch (u.label) {
        case 0:
          u.trys.push([0, 5, 6, 11]), n = Hh(t), u.label = 1;
        case 1:
          return [4, n.next()];
        case 2:
          if (r = u.sent(), !!r.done) return [3, 4];
          if (o = r.value, e.next(o), e.closed)
            return [2];
          u.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return c = u.sent(), i = { error: c }, [3, 11];
        case 6:
          return u.trys.push([6, , 9, 10]), r && !r.done && (a = n.return) ? [4, a.call(n)] : [3, 8];
        case 7:
          u.sent(), u.label = 8;
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
function Rr(t, e, n, r, i) {
  r === void 0 && (r = 0), i === void 0 && (i = !1);
  var a = e.schedule(function() {
    n(), i ? t.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (t.add(a), !i)
    return a;
}
function Ed(t, e) {
  return e === void 0 && (e = 0), Mn(function(n, r) {
    n.subscribe(Ln(r, function(i) {
      return Rr(r, t, function() {
        return r.next(i);
      }, e);
    }, function() {
      return Rr(r, t, function() {
        return r.complete();
      }, e);
    }, function(i) {
      return Rr(r, t, function() {
        return r.error(i);
      }, e);
    }));
  });
}
function Sd(t, e) {
  return e === void 0 && (e = 0), Mn(function(n, r) {
    r.add(t.schedule(function() {
      return n.subscribe(r);
    }, e));
  });
}
function X_(t, e) {
  return nr(t).pipe(Sd(e), Ed(e));
}
function K_(t, e) {
  return nr(t).pipe(Sd(e), Ed(e));
}
function Y_(t, e) {
  return new an(function(n) {
    var r = 0;
    return e.schedule(function() {
      r === t.length ? n.complete() : (n.next(t[r++]), n.closed || this.schedule());
    });
  });
}
function Z_(t, e) {
  return new an(function(n) {
    var r;
    return Rr(n, e, function() {
      r = t[pd](), Rr(n, e, function() {
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
      return yt(r == null ? void 0 : r.return) && r.return();
    };
  });
}
function Ad(t, e) {
  if (!t)
    throw new Error("Iterable cannot be null");
  return new an(function(n) {
    Rr(n, e, function() {
      var r = t[Symbol.asyncIterator]();
      Rr(n, e, function() {
        r.next().then(function(i) {
          i.done ? n.complete() : n.next(i.value);
        });
      }, 0, !0);
    });
  });
}
function Q_(t, e) {
  return Ad(_d(t), e);
}
function J_(t, e) {
  if (t != null) {
    if (vd(t))
      return X_(t, e);
    if (fd(t))
      return Y_(t, e);
    if (hd(t))
      return K_(t, e);
    if (md(t))
      return Ad(t, e);
    if (bd(t))
      return Z_(t, e);
    if (yd(t))
      return Q_(t, e);
  }
  throw gd(t);
}
function Ga(t, e) {
  return e ? J_(t, e) : nr(t);
}
function ci() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = Fo(t);
  return Ga(t, n);
}
function $_(t) {
  return t instanceof Date && !isNaN(t);
}
function Jt(t, e) {
  return Mn(function(n, r) {
    var i = 0;
    n.subscribe(Ln(r, function(a) {
      r.next(t.call(e, a, i++));
    }));
  });
}
var ey = Array.isArray;
function ty(t, e) {
  return ey(e) ? t.apply(void 0, Qn([], vr(e))) : t(e);
}
function ny(t) {
  return Jt(function(e) {
    return ty(t, e);
  });
}
var ry = Array.isArray, iy = Object.getPrototypeOf, ay = Object.prototype, oy = Object.keys;
function sy(t) {
  if (t.length === 1) {
    var e = t[0];
    if (ry(e))
      return { args: e, keys: null };
    if (ly(e)) {
      var n = oy(e);
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
function ly(t) {
  return t && typeof t == "object" && iy(t) === ay;
}
function uy(t, e) {
  return t.reduce(function(n, r, i) {
    return n[r] = e[i], n;
  }, {});
}
function gu() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = Fo(t), r = B_(t), i = sy(t), a = i.args, o = i.keys;
  if (a.length === 0)
    return Ga([], n);
  var c = new an(cy(a, n, o ? function(u) {
    return uy(o, u);
  } : ia));
  return r ? c.pipe(ny(r)) : c;
}
function cy(t, e, n) {
  return n === void 0 && (n = ia), function(r) {
    pu(e, function() {
      for (var i = t.length, a = new Array(i), o = i, c = i, u = function(d) {
        pu(e, function() {
          var h = Ga(t[d], e), f = !1;
          h.subscribe(Ln(r, function(m) {
            a[d] = m, f || (f = !0, c--), c || r.next(n(a.slice()));
          }, function() {
            --o || r.complete();
          }));
        }, r);
      }, l = 0; l < i; l++)
        u(l);
    }, r);
  };
}
function pu(t, e, n) {
  t ? Rr(n, t, e) : e();
}
function dy(t, e, n, r, i, a, o, c) {
  var u = [], l = 0, d = 0, h = !1, f = function() {
    h && !u.length && !l && e.complete();
  }, m = function(g) {
    return l < r ? v(g) : u.push(g);
  }, v = function(g) {
    l++;
    var b = !1;
    nr(n(g, d++)).subscribe(Ln(e, function(y) {
      e.next(y);
    }, function() {
      b = !0;
    }, void 0, function() {
      if (b)
        try {
          l--;
          for (var y = function() {
            var A = u.shift();
            o || v(A);
          }; u.length && l < r; )
            y();
          f();
        } catch (A) {
          e.error(A);
        }
    }));
  };
  return t.subscribe(Ln(e, m, function() {
    h = !0, f();
  })), function() {
  };
}
function Oa(t, e, n) {
  return n === void 0 && (n = 1 / 0), yt(e) ? Oa(function(r, i) {
    return Jt(function(a, o) {
      return e(r, a, i, o);
    })(nr(t(r, i)));
  }, n) : (typeof e == "number" && (n = e), Mn(function(r, i) {
    return dy(r, i, t, n);
  }));
}
function fy(t) {
  return Oa(ia, t);
}
function hy() {
  return fy(1);
}
function bu() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return hy()(Ga(t, Fo(t)));
}
function vy(t, e, n) {
  n === void 0 && (n = U_);
  var r = -1;
  return e != null && (cd(e) ? n = e : r = e), new an(function(i) {
    var a = $_(t) ? +t - n.now() : t;
    a < 0 && (a = 0);
    var o = 0;
    return n.schedule(function() {
      i.closed || (i.next(o++), 0 <= r ? this.schedule(void 0, r) : i.complete());
    }, a);
  });
}
function di(t) {
  return Mn(function(e, n) {
    var r = null, i = !1, a;
    r = e.subscribe(Ln(n, void 0, void 0, function(o) {
      a = nr(t(o, di(t)(e))), r ? (r.unsubscribe(), r = null, a.subscribe(n)) : i = !0;
    })), i && (r.unsubscribe(), r = null, a.subscribe(n));
  });
}
function my(t, e) {
  return yt(e) ? Oa(t, e, 1) : Oa(t, 1);
}
function gy(t, e) {
  return e === void 0 && (e = rl), Mn(function(n, r) {
    var i = null, a = null, o = null, c = function() {
      if (i) {
        i.unsubscribe(), i = null;
        var l = a;
        a = null, r.next(l);
      }
    };
    function u() {
      var l = o + t, d = e.now();
      if (d < l) {
        i = this.schedule(void 0, l - d), r.add(i);
        return;
      }
      c();
    }
    n.subscribe(Ln(r, function(l) {
      a = l, o = e.now(), i || (i = e.schedule(u, t), r.add(i));
    }, function() {
      c(), r.complete();
    }, void 0, function() {
      a = i = null;
    }));
  });
}
function Qi(t) {
  return t <= 0 ? function() {
    return k_;
  } : Mn(function(e, n) {
    var r = 0;
    e.subscribe(Ln(n, function(i) {
      ++r <= t && (n.next(i), t <= r && n.complete());
    }));
  });
}
function py(t) {
  return Jt(function() {
    return t;
  });
}
function by(t, e) {
  return Oa(function(n, r) {
    return nr(t(n, r)).pipe(Qi(1), py(n));
  });
}
function _y(t, e) {
  e === void 0 && (e = rl);
  var n = vy(t, e);
  return by(function() {
    return n;
  });
}
function yy(t, e) {
  return e === void 0 && (e = ia), t = t ?? Iy, Mn(function(n, r) {
    var i, a = !0;
    n.subscribe(Ln(r, function(o) {
      var c = e(o);
      (a || !t(i, c)) && (a = !1, i = c, r.next(o));
    }));
  });
}
function Iy(t, e) {
  return t === e;
}
function Ey(t) {
  t === void 0 && (t = {});
  var e = t.connector, n = e === void 0 ? function() {
    return new Bo();
  } : e, r = t.resetOnError, i = r === void 0 ? !0 : r, a = t.resetOnComplete, o = a === void 0 ? !0 : a, c = t.resetOnRefCountZero, u = c === void 0 ? !0 : c;
  return function(l) {
    var d, h, f, m = 0, v = !1, g = !1, b = function() {
      h == null || h.unsubscribe(), h = void 0;
    }, y = function() {
      b(), d = f = void 0, v = g = !1;
    }, A = function() {
      var I = d;
      y(), I == null || I.unsubscribe();
    };
    return Mn(function(I, _) {
      m++, !g && !v && b();
      var E = f = f ?? n();
      _.add(function() {
        m--, m === 0 && !g && !v && (h = ss(A, u));
      }), E.subscribe(_), !d && m > 0 && (d = new La({
        next: function(C) {
          return E.next(C);
        },
        error: function(C) {
          g = !0, b(), h = ss(y, i, C), E.error(C);
        },
        complete: function() {
          v = !0, b(), h = ss(y, o), E.complete();
        }
      }), nr(I).subscribe(d));
    })(l);
  };
}
function ss(t, e) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  if (e === !0) {
    t();
    return;
  }
  if (e !== !1) {
    var i = new La({
      next: function() {
        i.unsubscribe(), t();
      }
    });
    return nr(e.apply(void 0, Qn([], vr(n)))).subscribe(i);
  }
}
function _u(t, e, n) {
  var r, i = !1;
  return r = t, Ey({
    connector: function() {
      return new D_(r, e, n);
    },
    resetOnError: !0,
    resetOnComplete: !1,
    resetOnRefCountZero: i
  });
}
function yu() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = Fo(t);
  return Mn(function(r, i) {
    (n ? bu(t, r, n) : bu(t, r)).subscribe(i);
  });
}
function Iu(t, e) {
  return Mn(function(n, r) {
    var i = null, a = 0, o = !1, c = function() {
      return o && !i && r.complete();
    };
    n.subscribe(Ln(r, function(u) {
      i == null || i.unsubscribe();
      var l = 0, d = a++;
      nr(t(u, d)).subscribe(i = Ln(r, function(h) {
        return r.next(e ? e(u, h, d, l++) : h);
      }, function() {
        i = null, c();
      }));
    }, function() {
      o = !0, c();
    }));
  });
}
function Eu(t, e, n) {
  var r = yt(t) || e || n ? { next: t, error: e, complete: n } : t;
  return r ? Mn(function(i, a) {
    var o;
    (o = r.subscribe) === null || o === void 0 || o.call(r);
    var c = !0;
    i.subscribe(Ln(a, function(u) {
      var l;
      (l = r.next) === null || l === void 0 || l.call(r, u), a.next(u);
    }, function() {
      var u;
      c = !1, (u = r.complete) === null || u === void 0 || u.call(r), a.complete();
    }, function(u) {
      var l;
      c = !1, (l = r.error) === null || l === void 0 || l.call(r, u), a.error(u);
    }, function() {
      var u, l;
      c && ((u = r.unsubscribe) === null || u === void 0 || u.call(r)), (l = r.finalize) === null || l === void 0 || l.call(r);
    }));
  }) : ia;
}
function Cd(t) {
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
var Sy = /* @__PURE__ */ function() {
  function t(e, n, r, i) {
    i === void 0 && (i = "download_load"), this.originalEvent = e, this.xhr = n, this.request = r, this.type = i;
    var a = n.status, o = n.responseType;
    this.status = a ?? 0, this.responseType = o ?? "";
    var c = n.getAllResponseHeaders();
    this.responseHeaders = c ? c.split(`
`).reduce(function(d, h) {
      var f = h.indexOf(": ");
      return d[h.slice(0, f)] = h.slice(f + 2), d;
    }, {}) : {}, this.response = Cd(n);
    var u = e.loaded, l = e.total;
    this.loaded = u, this.total = l;
  }
  return t;
}(), Co = $s(function(t) {
  return function(n, r, i) {
    this.message = n, this.name = "AjaxError", this.xhr = r, this.request = i, this.status = r.status, this.responseType = r.responseType;
    var a;
    try {
      a = Cd(r);
    } catch {
      a = r.responseText;
    }
    this.response = a;
  };
}), Ay = function() {
  function t(e, n) {
    return Co.call(this, "ajax timeout", e, n), this.name = "AjaxTimeoutError", this;
  }
  return t.prototype = Object.create(Co.prototype), t;
}();
function Cy(t, e) {
  return _i({ method: "GET", url: t, headers: e });
}
function xy(t, e, n) {
  return _i({ method: "POST", url: t, body: e, headers: n });
}
function Ty(t, e) {
  return _i({ method: "DELETE", url: t, headers: e });
}
function wy(t, e, n) {
  return _i({ method: "PUT", url: t, body: e, headers: n });
}
function Ly(t, e, n) {
  return _i({ method: "PATCH", url: t, body: e, headers: n });
}
var Oy = Jt(function(t) {
  return t.response;
});
function Ry(t, e) {
  return Oy(_i({
    method: "GET",
    url: t,
    headers: e
  }));
}
var _i = function() {
  var t = function(e) {
    var n = typeof e == "string" ? {
      url: e
    } : e;
    return Dy(n);
  };
  return t.get = Cy, t.post = xy, t.delete = Ty, t.put = wy, t.patch = Ly, t.getJSON = Ry, t;
}(), My = "upload", Su = "download", ls = "loadstart", us = "progress", Au = "load";
function Dy(t) {
  return new an(function(e) {
    var n, r, i = ue({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, t), a = i.queryParams, o = i.body, c = i.headers, u = i.url;
    if (!u)
      throw new TypeError("url is required");
    if (a) {
      var l;
      if (u.includes("?")) {
        var d = u.split("?");
        if (2 < d.length)
          throw new TypeError("invalid url");
        l = new URLSearchParams(d[1]), new URLSearchParams(a).forEach(function(F, K) {
          return l.set(K, F);
        }), u = d[0] + "?" + l;
      } else
        l = new URLSearchParams(a), u = u + "?" + l;
    }
    var h = {};
    if (c)
      for (var f in c)
        c.hasOwnProperty(f) && (h[f.toLowerCase()] = c[f]);
    var m = i.crossDomain;
    !m && !("x-requested-with" in h) && (h["x-requested-with"] = "XMLHttpRequest");
    var v = i.withCredentials, g = i.xsrfCookieName, b = i.xsrfHeaderName;
    if ((v || !m) && g && b) {
      var y = (r = (n = document == null ? void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + g + ")=([^;]*)"))) === null || n === void 0 ? void 0 : n.pop()) !== null && r !== void 0 ? r : "";
      y && (h[b] = y);
    }
    var A = Py(o, h), I = ue(ue({}, i), {
      url: u,
      headers: h,
      body: A
    }), _;
    _ = t.createXHR ? t.createXHR() : new XMLHttpRequest();
    {
      var E = t.progressSubscriber, C = t.includeDownloadProgress, T = C === void 0 ? !1 : C, x = t.includeUploadProgress, S = x === void 0 ? !1 : x, P = function(F, K) {
        _.addEventListener(F, function() {
          var ee, H = K();
          (ee = E == null ? void 0 : E.error) === null || ee === void 0 || ee.call(E, H), e.error(H);
        });
      };
      P("timeout", function() {
        return new Ay(_, I);
      }), P("abort", function() {
        return new Co("aborted", _, I);
      });
      var X = function(F, K) {
        return new Sy(K, _, I, F + "_" + K.type);
      }, M = function(F, K, ee) {
        F.addEventListener(K, function(H) {
          e.next(X(ee, H));
        });
      };
      S && [ls, us, Au].forEach(function(F) {
        return M(_.upload, F, My);
      }), E && [ls, us].forEach(function(F) {
        return _.upload.addEventListener(F, function(K) {
          var ee;
          return (ee = E == null ? void 0 : E.next) === null || ee === void 0 ? void 0 : ee.call(E, K);
        });
      }), T && [ls, us].forEach(function(F) {
        return M(_, F, Su);
      });
      var N = function(F) {
        var K = "ajax error" + (F ? " " + F : "");
        e.error(new Co(K, _, I));
      };
      _.addEventListener("error", function(F) {
        var K;
        (K = E == null ? void 0 : E.error) === null || K === void 0 || K.call(E, F), N();
      }), _.addEventListener(Au, function(F) {
        var K, ee, H = _.status;
        if (H < 400) {
          (K = E == null ? void 0 : E.complete) === null || K === void 0 || K.call(E);
          var R = void 0;
          try {
            R = X(Su, F);
          } catch (j) {
            e.error(j);
            return;
          }
          e.next(R), e.complete();
        } else
          (ee = E == null ? void 0 : E.error) === null || ee === void 0 || ee.call(E, F), N(H);
      });
    }
    var O = I.user, w = I.method, k = I.async;
    O ? _.open(w, u, k, O, I.password) : _.open(w, u, k), k && (_.timeout = I.timeout, _.responseType = I.responseType), "withCredentials" in _ && (_.withCredentials = I.withCredentials);
    for (var f in h)
      h.hasOwnProperty(f) && _.setRequestHeader(f, h[f]);
    return A ? _.send(A) : _.send(), function() {
      _ && _.readyState !== 4 && _.abort();
    };
  });
}
function Py(t, e) {
  var n;
  if (!t || typeof t == "string" || Fy(t) || Vy(t) || Hy(t) || Uy(t) || ky(t) || Gy(t))
    return t;
  if (By(t))
    return t.buffer;
  if (typeof t == "object")
    return e["content-type"] = (n = e["content-type"]) !== null && n !== void 0 ? n : "application/json;charset=utf-8", JSON.stringify(t);
  throw new TypeError("Unknown body type");
}
var Ny = Object.prototype.toString;
function il(t, e) {
  return Ny.call(t) === "[object " + e + "]";
}
function Hy(t) {
  return il(t, "ArrayBuffer");
}
function Uy(t) {
  return il(t, "File");
}
function ky(t) {
  return il(t, "Blob");
}
function By(t) {
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView(t);
}
function Fy(t) {
  return typeof FormData < "u" && t instanceof FormData;
}
function Vy(t) {
  return typeof URLSearchParams < "u" && t instanceof URLSearchParams;
}
function Gy(t) {
  return typeof ReadableStream < "u" && t instanceof ReadableStream;
}
class jy {
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
const Wy = new jy("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), qy = [Wy], zy = qy[0].getUrl();
class al {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? zy;
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
  constructor(e = new al()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (n) => {
      const r = this.clone();
      return r.middleware = r.middleware.concat(n), r;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((r) => ({ pre: r }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((r) => ({ post: r }))), this.createRequestArgs = ({ url: n, query: r, method: i, headers: a, body: o, responseType: c }) => ({
      url: `${this.configuration.basePath}${n}${r && Object.keys(r).length ? `?${Xy(r)}` : ""}`,
      method: i,
      headers: a,
      body: o instanceof FormData ? o : JSON.stringify(o),
      responseType: c ?? "json"
    }), this.rxjsRequest = (n) => ci(n).pipe(
      Jt((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      my(
        (r) => _i(r).pipe(
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
const zt = (t) => encodeURIComponent(`${t}`), Xy = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((r) => `${zt(e)}=${zt(r)}`).join("&") : `${zt(e)}=${zt(n)}`
).join("&"), fn = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class Ky extends xd {
  archiveResource({ id: e, version: n, xAuthor: r, xApprover: i, contentType: a, xFilename: o, body: c }, u) {
    fn(e, "id", "archiveResource"), fn(n, "version", "archiveResource");
    const l = {
      "Content-Type": "application/octet-stream",
      ...r != null ? { "X-author": String(r) } : void 0,
      ...i != null ? { "X-approver": String(i) } : void 0,
      ...a != null ? { "Content-Type": String(a) } : void 0,
      ...o != null ? { "X-filename": String(o) } : void 0
    };
    return this.request({
      url: "/api/archive/referenced-resource/{id}/versions/{version}".replace("{id}", zt(e)).replace("{version}", zt(n)),
      method: "POST",
      headers: l,
      body: c
    }, u == null ? void 0 : u.responseOpts);
  }
  archiveSclResource({ id: e, version: n }, r) {
    fn(e, "id", "archiveSclResource"), fn(n, "version", "archiveSclResource");
    const i = {};
    return this.request({
      url: "/api/archive/scl/{id}/versions/{version}".replace("{id}", zt(e)).replace("{version}", zt(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  retrieveArchivedResourceHistory({ id: e }, n) {
    fn(e, "id", "retrieveArchivedResourceHistory");
    const r = {};
    return this.request({
      url: "/api/archive/resources/{id}/versions".replace("{id}", zt(e)),
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
class Yy extends xd {
  assignResourceToLocation({ locationId: e, uuid: n }, r) {
    fn(e, "locationId", "assignResourceToLocation"), fn(n, "uuid", "assignResourceToLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/assign".replace("{locationId}", zt(e)).replace("{uuid}", zt(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  createLocation({ location: e }, n) {
    fn(e, "location", "createLocation");
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
    fn(e, "locationId", "deleteLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", zt(e)),
      method: "DELETE",
      headers: r
    }, n == null ? void 0 : n.responseOpts);
  }
  getLocation({ locationId: e }, n) {
    fn(e, "locationId", "getLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", zt(e)),
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
    fn(e, "locationId", "unassignResourceFromLocation"), fn(n, "uuid", "unassignResourceFromLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/unassign".replace("{locationId}", zt(e)).replace("{uuid}", zt(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  updateLocation({ locationId: e, location: n }, r) {
    fn(e, "locationId", "updateLocation"), fn(n, "location", "updateLocation");
    const i = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", zt(e)),
      method: "PUT",
      headers: i,
      body: n
    }, r == null ? void 0 : r.responseOpts);
  }
}
class pa {
  constructor(e, n, r, i, a, o, c, u, l, d, h, f, m) {
    this._uuid = e, this._name = n, this._location = r, this._note = i, this._author = a, this._approver = o, this._type = c, this._voltage = u, this._modifiedAt = l, this._archivedAt = d, this._contentType = h, this._version = f, this._fields = m;
  }
  get uuid() {
    return this._uuid;
  }
  get filename() {
    return this._name;
  }
  get location() {
    return this._location;
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
      new pa(
        Yr(),
        "Dummy name",
        "z1b2c3d4-e5f6-7890-1234-56789abcdef1",
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
      new pa(
        Yr(),
        "Dummy name 2",
        "e1b2c3d4-e5f6-7890-1234-56789abcdef1",
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
      Qi(1),
      Jt((n) => n.resources),
      Jt(
        (n) => n.map((r) => this.mapToArchiveSearchResult(r))
      ),
      di(() => ci(this.dummySearchResults)),
      _y(500)
    );
  }
  retrieveArchivedResourceHistory(e) {
    return this.generateApiClient().retrieveArchivedResourceHistory({ id: e }).pipe(
      Qi(1),
      Jt((n) => n.versions),
      Jt(
        (n) => n.map((r) => this.mapToArchiveSearchResult(r))
      ),
      di(() => ci([
        new pa(
          Yr(),
          "Dummy name",
          "e1b2c3d4-e5f6-7890-1234-56789abcdef1",
          "My Note",
          "Jane Doe",
          "John Doe",
          "SCD",
          "220",
          (/* @__PURE__ */ new Date()).toDateString(),
          (/* @__PURE__ */ new Date()).toDateString(),
          "application/xml",
          "2.0.0",
          [{ key: "SOURCE_RESOURCE_ID", value: Yr() }]
        ),
        new pa(
          Yr(),
          "Dummy name",
          "3c4b2a7e-4c8b-49da-9627-5b783d85745f",
          "My Note 2",
          "Jane Doe",
          "John Doe",
          "SCD",
          "220",
          (/* @__PURE__ */ new Date()).toDateString(),
          (/* @__PURE__ */ new Date()).toDateString(),
          "application/xml",
          "5.1.0",
          [{ key: "SOURCE_RESOURCE_ID", value: Yr() }]
        )
      ]))
    );
  }
  findByUUIDAndVersion(e, n, r) {
    return Ga(
      fetch(`${this.baseUrl}/scl/v1/${n}/${e}/${r}`).then((i) => {
        if (i.status >= 200 && i.status < 300)
          return i.blob();
        throw new Error(
          "Unable to download resource: " + i.status + " " + i.statusText
        );
      })
    );
  }
  archiveSclFile(e, n) {
    return this.generateApiClient().archiveSclResource({ id: e, version: n });
  }
  mapToArchiveSearchResult(e) {
    return new pa(
      e.uuid,
      e.name,
      e.location,
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
    const e = new al({
      basePath: this.baseUrl
      // accessToken: authInfo.token,
    });
    return new Ky(e);
  }
}
class Mi {
  constructor() {
    this.baseUrl = "/compas-scl-data-service";
  }
  static getInstance() {
    return Mi.instance || (Mi.instance = new Mi()), Mi.instance;
  }
  listLocations() {
    return this.generateApiClient().getLocations({}).pipe(
      Qi(1),
      di(() => ci([
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
    const e = new al({
      basePath: this.baseUrl
      // accessToken: authInfo.token,
    });
    return new Yy(e);
  }
}
function Zy(t, e) {
  Ce(e, !0);
  const n = Qr.getInstance(), r = { store: tn([]) };
  let i = /* @__PURE__ */ ve(!1);
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
      callback: (l) => u(l),
      disabled: () => !1
    }
  ];
  function c(l) {
    return new Date(l).toLocaleDateString();
  }
  rt(() => {
    e.searchResult && n.retrieveArchivedResourceHistory(e.searchResult.uuid).pipe(Qi(1), Eu((l) => {
      r.store.set(l), z(i, !0);
    })).subscribe();
  });
  function u(l) {
    var h;
    let d;
    l.fields && l.fields.length && (d = (h = l.fields.find((f) => f.key === "SOURCE_RESOURCE_ID")) == null ? void 0 : h.value), n.findByUUIDAndVersion(d, l.type, l.version).pipe(
      Qi(1),
      Eu((f) => {
        const m = window.URL.createObjectURL(f), v = document.createElement("a");
        v.href = m, v.download = l.filename, v.style.display = "none", document.body.appendChild(v), v.click(), document.body.removeChild(v), window.URL.revokeObjectURL(m);
      }),
      di((f) => (console.error(f), wa.error("Download failed", "An error occurred while trying to download the resource.", 5e3), ci(void 0)))
    ).subscribe();
  }
  I_(t, {
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
  }), xe();
}
var Qy = /* @__PURE__ */ de("<span><!></span>"), Jy = /* @__PURE__ */ de("<!> <br/>", 1), $y = /* @__PURE__ */ de("<i> </i>"), eI = /* @__PURE__ */ de('<div class="result-container"><div class="content"><!></div></div>');
function tI(t, e) {
  Ce(e, !0);
  let n = p(e, "searchResults", 19, () => []), r = p(e, "noResourcesLabel", 3, "No resources found.");
  var i = eI(), a = se(i), o = se(a);
  {
    var c = (l) => {
      var d = ne(), h = Z(d);
      xn(h, 17, n, (f) => f.uuid, (f, m) => {
        var v = Jy(), g = Z(v);
        rd(g, {
          get title() {
            return s(m).name;
          },
          open: !0,
          content: (y) => {
            var A = Qy(), I = se(A);
            Zy(I, {
              get searchResult() {
                return s(m);
              }
            }), L(y, A);
          },
          $$slots: { content: !0 }
        }), L(f, v);
      }), L(l, d);
    }, u = (l) => {
      var d = $y(), h = se(d);
      Oe(() => at(h, r())), L(l, d);
    };
    ae(o, (l) => {
      n().length ? l(c) : l(u, !1);
    });
  }
  L(t, i), xe();
}
dm({ en: Sm, de: pm });
var nI = /* @__PURE__ */ de("<span><!></span>"), rI = /* @__PURE__ */ de('<!> <div class="separator svelte-1gp5xzm"></div>', 1), iI = /* @__PURE__ */ de('<div class="oscd-app"><div class="search-filter svelte-1gp5xzm"><!></div> <div class="content-container svelte-1gp5xzm"><!></div></div> <!>', 1);
function aI(t, e) {
  Ce(e, !0);
  const n = () => Zn(cm, "$_", r), [r, i] = pr(), a = Qr.getInstance(), o = Mi.getInstance();
  let c = /* @__PURE__ */ ve(ce(/* @__PURE__ */ new Map())), u = /* @__PURE__ */ ve(!0), l = /* @__PURE__ */ ve(ce(/* @__PURE__ */ new Map())), d = /* @__PURE__ */ ve(ce([
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
  ])), h = /* @__PURE__ */ ve("");
  const f = new hu([]), m = new hu(""), v = m.pipe(
    yu(),
    // emit the initial value immediately
    Iu((M, N) => N === 0 ? [M] : m.pipe(gy(300)))
  ), g = o.listLocations().pipe(
    Jt((M) => {
      const N = new Map(M.map((w) => [w.uuid, w.name])), O = s(d).find((w) => w.key === "location");
      return O && (O.options = M.map((w) => ({ value: w.uuid, label: w.name }))), z(l, N, !0), N;
    }),
    di((M) => (console.error("Error fetching locations:", M), wa.error("Failed to load locations."), ci(/* @__PURE__ */ new Map()))),
    _u(1)
  );
  function b(M, N) {
    const O = {
      uuid: null,
      type: null,
      name: null,
      location: null,
      from: null,
      to: null
    };
    return M.forEach((w) => {
      if (w.value) {
        if (w.type === "date") {
          const k = new Date(w.value);
          w.key === "from" && (O.from = k.toISOString()), w.key === "to" && (k.setHours(23, 59, 59, 999), O.to = k.toISOString());
          return;
        }
        w.key in O && (O[w.key] = w.value);
      }
    }), N && N.trim() !== "" && (O.name = N.trim()), O;
  }
  const A = gu([f, v]).pipe(yy((M, N) => JSON.stringify(M) === JSON.stringify(N)), Jt(([M, N]) => b(M, N))).pipe(
    Iu((M) => gu({
      results: a.searchArchive(M).pipe(di((N) => (console.error("Search error:", N), wa.error("Search failed. Please try again later."), ci([])))),
      locations: g
    }).pipe(
      Jt(({ results: N, locations: O }) => {
        const w = /* @__PURE__ */ new Map();
        for (const k of N) {
          const F = k.location ?? "Default";
          w.has(F) || w.set(F, []), w.get(F).push(k);
        }
        return { grouped: w, locations: O };
      }),
      Jt((N) => ({ loading: !1, ...N })),
      yu({ loading: !0 })
      // loading state at start of each search
    )),
    _u(1)
  );
  rt(() => {
    const M = A.subscribe((N) => {
      z(u, N.loading, !0), N.loading || (z(c, N.grouped, !0), z(l, N.locations, !0));
    });
    return () => M.unsubscribe();
  });
  var I = iI(), _ = Z(I), E = se(_), C = se(E);
  l_(C, {
    searchLabel: "Search file name...",
    onFilterChange: () => f.next(s(d)),
    onSearchInput: () => m.next(s(h)),
    get filters() {
      return s(d);
    },
    set filters(M) {
      z(d, M, !0);
    },
    get searchText() {
      return s(h);
    },
    set searchText(M) {
      z(h, M, !0);
    }
  });
  var T = Ie(E, 2), x = se(T);
  {
    var S = (M) => {
      od(M, { indeterminate: !0 });
    }, P = (M) => {
      var N = ne(), O = Z(N);
      {
        var w = (k) => {
          var F = ne(), K = Z(F);
          xn(K, 18, () => s(c), (ee) => ee, (ee, H) => {
            var R = rI(), j = Z(R);
            {
              const Ae = (V) => {
                var G = nI(), B = se(G);
                {
                  let $ = /* @__PURE__ */ ge(() => n()("no_resources_found"));
                  tI(B, {
                    get searchResults() {
                      return H[1];
                    },
                    get noResourcesLabel() {
                      return s($);
                    }
                  });
                }
                L(V, G);
              };
              let be = /* @__PURE__ */ ge(() => s(l).get(H[0]) ?? "Unknown");
              rd(j, {
                open: !0,
                get title() {
                  return s(be);
                },
                content: Ae,
                $$slots: { content: !0 }
              });
            }
            L(ee, R);
          }), L(k, F);
        };
        ae(O, (k) => {
          s(c).size && k(w);
        });
      }
      L(M, N);
    };
    ae(x, (M) => {
      s(u) ? M(S) : M(P, !1);
    });
  }
  var X = Ie(_, 2);
  Sb(X, {}), L(t, I), xe(), i();
}
const Td = "archive-explorer", wd = "0.0.1";
var oI = /* @__PURE__ */ de('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function sI(t, e) {
  Ce(e, !0);
  let n = p(e, "dev", 3, !1);
  var r = oI(), i = Z(r);
  {
    var a = (u) => {
      aI(u, {});
    };
    ae(i, (u) => {
      (e.doc || n()) && u(a);
    });
  }
  var o = Ie(i, 2), c = Ie(o, 2);
  Oe(() => {
    Cl(o, Td), Cl(c, wd);
  }), L(t, r), xe();
}
var Vi;
class fI extends HTMLElement {
  constructor() {
    super();
    tt(this, Vi);
    He(this, Vi, /* @__PURE__ */ ve(ce({ doc: void 0, editCount: void 0 })));
  }
  get props() {
    return s(re(this, Vi));
  }
  set props(n) {
    z(re(this, Vi), n, !0);
  }
  connectedCallback() {
    var r;
    this.attachShadow({ mode: "open" }), this.props.doc = this._doc, this.props.editCount = this.editCount, zf(sI, { target: this.shadowRoot, props: this.props });
    const n = lI();
    (r = this.shadowRoot) == null || r.appendChild(n);
  }
  set doc(n) {
    this._doc = n, this.props.doc = n;
  }
  set editCount(n) {
    this._editCount = n, this.props.editCount = n;
  }
}
Vi = new WeakMap();
function lI() {
  const t = `${Td}-v${wd}-style`, e = uI(), n = document.createElement("link");
  return n.rel = "stylesheet", n.type = "text/css", n.href = e, n.id = t, n;
}
function uI() {
  const t = new URL(import.meta.url), e = t.origin, n = t.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, n, "style.css"].filter(Boolean).join("/");
}
export {
  fI as default
};
