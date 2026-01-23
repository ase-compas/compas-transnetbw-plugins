var rc = Object.defineProperty;
var ll = (n) => {
  throw TypeError(n);
};
var ic = (n, e, t) => e in n ? rc(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Di = (n, e, t) => ic(n, typeof e != "symbol" ? e + "" : e, t), js = (n, e, t) => e.has(n) || ll("Cannot " + t);
var ae = (n, e, t) => (js(n, e, "read from private field"), t ? t.call(n) : e.get(n)), Ve = (n, e, t) => e.has(n) ? ll("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), we = (n, e, t, r) => (js(n, e, "write to private field"), r ? r.call(n, t) : e.set(n, t), t), Vt = (n, e, t) => (js(n, e, "access private method"), t);
const St = Symbol(), ac = "http://www.w3.org/1999/xhtml", sc = "http://www.w3.org/2000/svg", oc = "@attach", au = !1;
var Ma = Array.isArray, lc = Array.prototype.indexOf, Oo = Array.from, us = Object.defineProperty, Nr = Object.getOwnPropertyDescriptor, su = Object.getOwnPropertyDescriptors, ou = Object.prototype, uc = Array.prototype, Es = Object.getPrototypeOf, ul = Object.isExtensible;
function Pi(n) {
  return typeof n == "function";
}
const pe = () => {
};
function dc(n) {
  for (var e = 0; e < n.length; e++)
    n[e]();
}
function lu() {
  var n, e, t = new Promise((r, i) => {
    n = r, e = i;
  });
  return { promise: t, resolve: n, reject: e };
}
const en = 2, Ro = 4, Mo = 8, bi = 16, br = 32, Wr = 64, Po = 128, Ln = 256, ds = 512, jt = 1024, pn = 2048, jr = 4096, Gn = 8192, yi = 16384, ko = 32768, Ci = 65536, dl = 1 << 17, uu = 1 << 18, Ai = 1 << 19, cc = 1 << 20, oo = 1 << 21, Ss = 1 << 22, fi = 1 << 23, $n = Symbol("$state"), du = Symbol("legacy props"), fc = Symbol(""), ki = new class extends Error {
  constructor() {
    super(...arguments);
    Di(this, "name", "StaleReactionError");
    Di(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Fo(n) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function hc() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function vc(n) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function gc() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function mc(n) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function pc() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function _c(n) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Ic() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function bc() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function yc() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Cc() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Ac() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Ec() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let Sc = !1;
function cu(n) {
  return n === this.v;
}
function No(n, e) {
  return n != n ? e == e : n !== e || n !== null && typeof n == "object" || typeof n == "function";
}
function fu(n) {
  return !No(n, this.v);
}
let aa = !1, xc = !1;
function wc() {
  aa = !0;
}
const Tc = [];
function xs(n, e = !1, t = !1) {
  return ts(n, /* @__PURE__ */ new Map(), "", Tc, null, t);
}
function ts(n, e, t, r, i = null, a = !1) {
  if (typeof n == "object" && n !== null) {
    var s = e.get(n);
    if (s !== void 0) return s;
    if (n instanceof Map) return (
      /** @type {Snapshot<T>} */
      new Map(n)
    );
    if (n instanceof Set) return (
      /** @type {Snapshot<T>} */
      new Set(n)
    );
    if (Ma(n)) {
      var u = (
        /** @type {Snapshot<any>} */
        Array(n.length)
      );
      e.set(n, u), i !== null && e.set(i, u);
      for (var l = 0; l < n.length; l += 1) {
        var d = n[l];
        l in n && (u[l] = ts(d, e, t, r, null, a));
      }
      return u;
    }
    if (Es(n) === ou) {
      u = {}, e.set(n, u), i !== null && e.set(i, u);
      for (var c in n)
        u[c] = ts(
          // @ts-expect-error
          n[c],
          e,
          t,
          r,
          null,
          a
        );
      return u;
    }
    if (n instanceof Date)
      return (
        /** @type {Snapshot<T>} */
        structuredClone(n)
      );
    if (typeof /** @type {T & { toJSON?: any } } */
    n.toJSON == "function" && !a)
      return ts(
        /** @type {T & { toJSON(): any } } */
        n.toJSON(),
        e,
        t,
        r,
        // Associate the instance with the toJSON clone
        n
      );
  }
  if (n instanceof EventTarget)
    return (
      /** @type {Snapshot<T>} */
      n
    );
  try {
    return (
      /** @type {Snapshot<T>} */
      structuredClone(n)
    );
  } catch {
    return (
      /** @type {Snapshot<T>} */
      n
    );
  }
}
let et = null;
function Yi(n) {
  et = n;
}
function ye(n) {
  return (
    /** @type {T} */
    hu().get(n)
  );
}
function de(n, e) {
  return hu().set(n, e), e;
}
function Ae(n, e = !1, t) {
  et = {
    p: et,
    c: null,
    e: null,
    s: n,
    x: null,
    l: aa && !e ? { s: null, u: null, $: [] } : null
  };
}
function Ee(n) {
  var e = (
    /** @type {ComponentContext} */
    et
  ), t = e.e;
  if (t !== null) {
    e.e = null;
    for (var r of t)
      Tu(r);
  }
  return n !== void 0 && (e.x = n), et = e.p, n ?? /** @type {T} */
  {};
}
function Pa() {
  return !aa || et !== null && et.l === null;
}
function hu(n) {
  return et === null && Fo(), et.c ?? (et.c = new Map(Dc(et) || void 0));
}
function Dc(n) {
  let e = n.p;
  for (; e !== null; ) {
    const t = e.c;
    if (t !== null)
      return t;
    e = e.p;
  }
  return null;
}
let si = [];
function vu() {
  var n = si;
  si = [], dc(n);
}
function pr(n) {
  if (si.length === 0 && !ya) {
    var e = si;
    queueMicrotask(() => {
      e === si && vu();
    });
  }
  si.push(n);
}
function Lc() {
  for (; si.length > 0; )
    vu();
}
const Oc = /* @__PURE__ */ new WeakMap();
function gu(n) {
  var e = ke;
  if (e === null)
    return Re.f |= fi, n;
  if (e.f & ko)
    Ji(n, e);
  else {
    if (!(e.f & Po))
      throw !e.parent && n instanceof Error && mu(n), n;
    e.b.error(n);
  }
}
function Ji(n, e) {
  for (; e !== null; ) {
    if (e.f & Po)
      try {
        e.b.error(n);
        return;
      } catch (t) {
        n = t;
      }
    e = e.parent;
  }
  throw n instanceof Error && mu(n), n;
}
function mu(n) {
  const e = Oc.get(n);
  e && (us(n, "message", {
    value: e.message
  }), us(n, "stack", {
    value: e.stack
  }));
}
const ja = /* @__PURE__ */ new Set();
let Xe = null, ns = null, Mt = null, lo = /* @__PURE__ */ new Set(), Kn = [], ws = null, uo = !1, ya = !1;
var qi, Wi, oi, La, ji, Zi, li, Xi, Oa, Ra, On, co, rs, fo;
const ys = class ys {
  constructor() {
    Ve(this, On);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    Di(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    Ve(this, qi, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    Ve(this, Wi, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    Ve(this, oi, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    Ve(this, La, null);
    /**
     * Async effects inside a newly-created `<svelte:boundary>`
     * — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    Ve(this, ji, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    Ve(this, Zi, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    Ve(this, li, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    Ve(this, Xi, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    Ve(this, Oa, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    Ve(this, Ra, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    Di(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var a;
    Kn = [], ns = null, this.apply();
    for (const s of e)
      Vt(this, On, co).call(this, s);
    if (ae(this, oi) === 0) {
      var t = Mt;
      Vt(this, On, fo).call(this);
      var r = ae(this, Zi), i = ae(this, li);
      we(this, Zi, []), we(this, li, []), we(this, Xi, []), ns = this, Xe = null, Mt = t, cl(r), cl(i), ns = null, (a = ae(this, La)) == null || a.resolve();
    } else
      Vt(this, On, rs).call(this, ae(this, Zi)), Vt(this, On, rs).call(this, ae(this, li)), Vt(this, On, rs).call(this, ae(this, Xi));
    Mt = null;
    for (const s of ae(this, ji))
      Sa(s);
    we(this, ji, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, t) {
    ae(this, qi).has(e) || ae(this, qi).set(e, t), this.current.set(e, e.v), Mt == null || Mt.set(e, e.v);
  }
  activate() {
    Xe = this;
  }
  deactivate() {
    Xe = null, Mt = null;
  }
  flush() {
    if (Kn.length > 0) {
      if (this.activate(), pu(), Xe !== null && Xe !== this)
        return;
    } else ae(this, oi) === 0 && Vt(this, On, fo).call(this);
    this.deactivate();
    for (const e of lo)
      if (lo.delete(e), e(), Xe !== null)
        break;
  }
  increment() {
    we(this, oi, ae(this, oi) + 1);
  }
  decrement() {
    we(this, oi, ae(this, oi) - 1);
    for (const e of ae(this, Oa))
      Qt(e, pn), pi(e);
    for (const e of ae(this, Ra))
      Qt(e, jr), pi(e);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    ae(this, Wi).add(e);
  }
  settled() {
    return (ae(this, La) ?? we(this, La, lu())).promise;
  }
  static ensure() {
    if (Xe === null) {
      const e = Xe = new ys();
      ja.add(Xe), ya || ys.enqueue(() => {
        Xe === e && e.flush();
      });
    }
    return Xe;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    pr(e);
  }
  apply() {
  }
};
qi = new WeakMap(), Wi = new WeakMap(), oi = new WeakMap(), La = new WeakMap(), ji = new WeakMap(), Zi = new WeakMap(), li = new WeakMap(), Xi = new WeakMap(), Oa = new WeakMap(), Ra = new WeakMap(), On = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
co = function(e) {
  var d;
  e.f ^= jt;
  for (var t = e.first; t !== null; ) {
    var r = t.f, i = (r & (br | Wr)) !== 0, a = i && (r & jt) !== 0, s = a || (r & Gn) !== 0 || this.skipped_effects.has(t);
    if (!s && t.fn !== null) {
      i ? t.f ^= jt : r & Ro ? ae(this, li).push(t) : r & jt || (r & Ss && ((d = t.b) != null && d.is_pending()) ? ae(this, ji).push(t) : Ms(t) && (t.f & bi && ae(this, Xi).push(t), Sa(t)));
      var u = t.first;
      if (u !== null) {
        t = u;
        continue;
      }
    }
    var l = t.parent;
    for (t = t.next; t === null && l !== null; )
      t = l.next, l = l.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
rs = function(e) {
  for (const t of e)
    (t.f & pn ? ae(this, Oa) : ae(this, Ra)).push(t), Qt(t, jt);
  e.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
fo = function() {
  var e;
  for (const t of ae(this, Wi))
    t();
  if (ae(this, Wi).clear(), ja.size > 1) {
    ae(this, qi).clear();
    let t = !0;
    for (const r of ja) {
      if (r === this) {
        t = !1;
        continue;
      }
      const i = [];
      for (const [s, u] of this.current) {
        if (r.current.has(s))
          if (t && u !== r.current.get(s))
            r.current.set(s, u);
          else
            continue;
        i.push(s);
      }
      if (i.length === 0)
        continue;
      const a = [...r.current.keys()].filter((s) => !this.current.has(s));
      if (a.length > 0) {
        for (const s of i)
          _u(s, a);
        if (Kn.length > 0) {
          Xe = r, r.apply();
          for (const s of Kn)
            Vt(e = r, On, co).call(e, s);
          Kn = [], r.deactivate();
        }
      }
    }
    Xe = null;
  }
  ja.delete(this);
};
let Jn = ys;
function Rc(n) {
  var e = ya;
  ya = !0;
  try {
    for (var t; ; ) {
      if (Lc(), Kn.length === 0 && (Xe == null || Xe.flush(), Kn.length === 0))
        return ws = null, /** @type {T} */
        t;
      pu();
    }
  } finally {
    ya = e;
  }
}
function pu() {
  var n = Hi;
  uo = !0;
  try {
    var e = 0;
    for (vl(!0); Kn.length > 0; ) {
      var t = Jn.ensure();
      if (e++ > 1e3) {
        var r, i;
        Mc();
      }
      t.process(Kn), Ur.clear();
    }
  } finally {
    uo = !1, vl(n), ws = null;
  }
}
function Mc() {
  try {
    pc();
  } catch (n) {
    Ji(n, ws);
  }
}
let fr = null;
function cl(n) {
  var e = n.length;
  if (e !== 0) {
    for (var t = 0; t < e; ) {
      var r = n[t++];
      if (!(r.f & (yi | Gn)) && Ms(r) && (fr = [], Sa(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Ru(r) : r.fn = null), (fr == null ? void 0 : fr.length) > 0)) {
        Ur.clear();
        for (const i of fr)
          Sa(i);
        fr = [];
      }
    }
    fr = null;
  }
}
function _u(n, e) {
  if (n.reactions !== null)
    for (const t of n.reactions) {
      const r = t.f;
      r & en ? _u(
        /** @type {Derived} */
        t,
        e
      ) : r & (Ss | bi) && Iu(t, e) && (Qt(t, pn), pi(
        /** @type {Effect} */
        t
      ));
    }
}
function Iu(n, e) {
  if (n.deps !== null) {
    for (const t of n.deps)
      if (e.includes(t) || t.f & en && Iu(
        /** @type {Derived} */
        t,
        e
      ))
        return !0;
  }
  return !1;
}
function pi(n) {
  for (var e = ws = n; e.parent !== null; ) {
    e = e.parent;
    var t = e.f;
    if (uo && e === ke && t & bi)
      return;
    if (t & (Wr | br)) {
      if (!(t & jt)) return;
      e.f ^= jt;
    }
  }
  Kn.push(e);
}
function Pc(n) {
  let e = 0, t = _i(0), r;
  return () => {
    Qc() && (o(t), Os(() => (e === 0 && (r = Zr(() => n(() => Ca(t)))), e += 1, () => {
      pr(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, Ca(t));
      });
    })));
  };
}
var kc = Ci | Ai | Po;
function Fc(n, e, t) {
  new Nc(n, e, t);
}
var Pn, xn, Lo, jn, ui, Zn, wn, on, Xn, Lr, di, Or, ci, Rr, Cs, As, $t, Uc, Hc, is, as, ho;
class Nc {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, t, r) {
    Ve(this, $t);
    /** @type {Boundary | null} */
    Di(this, "parent");
    Ve(this, Pn, !1);
    /** @type {TemplateNode} */
    Ve(this, xn);
    /** @type {TemplateNode | null} */
    Ve(this, Lo, null);
    /** @type {BoundaryProps} */
    Ve(this, jn);
    /** @type {((anchor: Node) => void)} */
    Ve(this, ui);
    /** @type {Effect} */
    Ve(this, Zn);
    /** @type {Effect | null} */
    Ve(this, wn, null);
    /** @type {Effect | null} */
    Ve(this, on, null);
    /** @type {Effect | null} */
    Ve(this, Xn, null);
    /** @type {DocumentFragment | null} */
    Ve(this, Lr, null);
    Ve(this, di, 0);
    Ve(this, Or, 0);
    Ve(this, ci, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    Ve(this, Rr, null);
    Ve(this, Cs, () => {
      ae(this, Rr) && Qi(ae(this, Rr), ae(this, di));
    });
    Ve(this, As, Pc(() => (we(this, Rr, _i(ae(this, di))), () => {
      we(this, Rr, null);
    })));
    we(this, xn, e), we(this, jn, t), we(this, ui, r), this.parent = /** @type {Effect} */
    ke.b, we(this, Pn, !!ae(this, jn).pending), we(this, Zn, Cr(() => {
      ke.b = this;
      {
        try {
          we(this, wn, qt(() => r(ae(this, xn))));
        } catch (i) {
          this.error(i);
        }
        ae(this, Or) > 0 ? Vt(this, $t, as).call(this) : we(this, Pn, !1);
      }
    }, kc));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return ae(this, Pn) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!ae(this, jn).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    Vt(this, $t, ho).call(this, e), we(this, di, ae(this, di) + e), lo.add(ae(this, Cs));
  }
  get_effect_pending() {
    return ae(this, As).call(this), o(
      /** @type {Source<number>} */
      ae(this, Rr)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var t = ae(this, jn).onerror;
    let r = ae(this, jn).failed;
    if (ae(this, ci) || !t && !r)
      throw e;
    ae(this, wn) && (Tt(ae(this, wn)), we(this, wn, null)), ae(this, on) && (Tt(ae(this, on)), we(this, on, null)), ae(this, Xn) && (Tt(ae(this, Xn)), we(this, Xn, null));
    var i = !1, a = !1;
    const s = () => {
      if (i) {
        Ec();
        return;
      }
      i = !0, a && Cc(), Jn.ensure(), we(this, di, 0), ae(this, Xn) !== null && Hr(ae(this, Xn), () => {
        we(this, Xn, null);
      }), we(this, Pn, this.has_pending_snippet()), we(this, wn, Vt(this, $t, is).call(this, () => (we(this, ci, !1), qt(() => ae(this, ui).call(this, ae(this, xn)))))), ae(this, Or) > 0 ? Vt(this, $t, as).call(this) : we(this, Pn, !1);
    };
    var u = Re;
    try {
      dn(null), a = !0, t == null || t(e, s), a = !1;
    } catch (l) {
      Ji(l, ae(this, Zn) && ae(this, Zn).parent);
    } finally {
      dn(u);
    }
    r && pr(() => {
      we(this, Xn, Vt(this, $t, is).call(this, () => {
        we(this, ci, !0);
        try {
          return qt(() => {
            r(
              ae(this, xn),
              () => e,
              () => s
            );
          });
        } catch (l) {
          return Ji(
            l,
            /** @type {Effect} */
            ae(this, Zn).parent
          ), null;
        } finally {
          we(this, ci, !1);
        }
      }));
    });
  }
}
Pn = new WeakMap(), xn = new WeakMap(), Lo = new WeakMap(), jn = new WeakMap(), ui = new WeakMap(), Zn = new WeakMap(), wn = new WeakMap(), on = new WeakMap(), Xn = new WeakMap(), Lr = new WeakMap(), di = new WeakMap(), Or = new WeakMap(), ci = new WeakMap(), Rr = new WeakMap(), Cs = new WeakMap(), As = new WeakMap(), $t = new WeakSet(), Uc = function() {
  try {
    we(this, wn, qt(() => ae(this, ui).call(this, ae(this, xn))));
  } catch (e) {
    this.error(e);
  }
  we(this, Pn, !1);
}, Hc = function() {
  const e = ae(this, jn).pending;
  e && (we(this, on, qt(() => e(ae(this, xn)))), Jn.enqueue(() => {
    we(this, wn, Vt(this, $t, is).call(this, () => (Jn.ensure(), qt(() => ae(this, ui).call(this, ae(this, xn)))))), ae(this, Or) > 0 ? Vt(this, $t, as).call(this) : (Hr(
      /** @type {Effect} */
      ae(this, on),
      () => {
        we(this, on, null);
      }
    ), we(this, Pn, !1));
  }));
}, /**
 * @param {() => Effect | null} fn
 */
is = function(e) {
  var t = ke, r = Re, i = et;
  nr(ae(this, Zn)), dn(ae(this, Zn)), Yi(ae(this, Zn).ctx);
  try {
    return e();
  } catch (a) {
    return gu(a), null;
  } finally {
    nr(t), dn(r), Yi(i);
  }
}, as = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    ae(this, jn).pending
  );
  ae(this, wn) !== null && (we(this, Lr, document.createDocumentFragment()), Bc(ae(this, wn), ae(this, Lr))), ae(this, on) === null && we(this, on, qt(() => e(ae(this, xn))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
ho = function(e) {
  var t;
  if (!this.has_pending_snippet()) {
    this.parent && Vt(t = this.parent, $t, ho).call(t, e);
    return;
  }
  we(this, Or, ae(this, Or) + e), ae(this, Or) === 0 && (we(this, Pn, !1), ae(this, on) && Hr(ae(this, on), () => {
    we(this, on, null);
  }), ae(this, Lr) && (ae(this, xn).before(ae(this, Lr)), we(this, Lr, null)), pr(() => {
    Jn.ensure().flush();
  }));
};
function Bc(n, e) {
  for (var t = n.nodes_start, r = n.nodes_end; t !== null; ) {
    var i = t === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ka(t)
    );
    e.append(t), t = i;
  }
}
function bu(n, e, t) {
  const r = Pa() ? Ts : Uo;
  if (e.length === 0) {
    t(n.map(r));
    return;
  }
  var i = Xe, a = (
    /** @type {Effect} */
    ke
  ), s = Gc();
  Promise.all(e.map((u) => /* @__PURE__ */ Vc(u))).then((u) => {
    s();
    try {
      t([...n.map(r), ...u]);
    } catch (l) {
      a.f & yi || Ji(l, a);
    }
    i == null || i.deactivate(), vo();
  }).catch((u) => {
    Ji(u, a);
  });
}
function Gc() {
  var n = ke, e = Re, t = et, r = Xe;
  return function() {
    nr(n), dn(e), Yi(t), r == null || r.activate();
  };
}
function vo() {
  nr(null), dn(null), Yi(null);
}
// @__NO_SIDE_EFFECTS__
function Ts(n) {
  var e = en | pn, t = Re !== null && Re.f & en ? (
    /** @type {Derived} */
    Re
  ) : null;
  return ke === null || t !== null && t.f & Ln ? e |= Ln : ke.f |= Ai, {
    ctx: et,
    deps: null,
    effects: null,
    equals: cu,
    f: e,
    fn: n,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      St
    ),
    wv: 0,
    parent: t ?? ke,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Vc(n, e) {
  let t = (
    /** @type {Effect | null} */
    ke
  );
  t === null && hc();
  var r = (
    /** @type {Boundary} */
    t.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = _i(
    /** @type {V} */
    St
  ), s = !Re, u = /* @__PURE__ */ new Map();
  return ef(() => {
    var f;
    var l = lu();
    i = l.promise;
    try {
      Promise.resolve(n()).then(l.resolve, l.reject).then(vo);
    } catch (g) {
      l.reject(g), vo();
    }
    var d = (
      /** @type {Batch} */
      Xe
    ), c = r.is_pending();
    s && (r.update_pending_count(1), c || (d.increment(), (f = u.get(d)) == null || f.reject(ki), u.delete(d), u.set(d, l)));
    const h = (g, v = void 0) => {
      if (c || d.activate(), v)
        v !== ki && (a.f |= fi, Qi(a, v));
      else {
        a.f & fi && (a.f ^= fi), Qi(a, g);
        for (const [p, _] of u) {
          if (u.delete(p), p === d) break;
          _.reject(ki);
        }
      }
      s && (r.update_pending_count(-1), c || d.decrement());
    };
    l.promise.then(h, (g) => h(null, g || "unknown"));
  }), Ls(() => {
    for (const l of u.values())
      l.reject(ki);
  }), new Promise((l) => {
    function d(c) {
      function h() {
        c === i ? l(a) : d(i);
      }
      c.then(h, h);
    }
    d(i);
  });
}
// @__NO_SIDE_EFFECTS__
function te(n) {
  const e = /* @__PURE__ */ Ts(n);
  return ku(e), e;
}
// @__NO_SIDE_EFFECTS__
function Uo(n) {
  const e = /* @__PURE__ */ Ts(n);
  return e.equals = fu, e;
}
function yu(n) {
  var e = n.effects;
  if (e !== null) {
    n.effects = null;
    for (var t = 0; t < e.length; t += 1)
      Tt(
        /** @type {Effect} */
        e[t]
      );
  }
}
function zc(n) {
  for (var e = n.parent; e !== null; ) {
    if (!(e.f & en))
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function Ho(n) {
  var e, t = ke;
  nr(zc(n));
  try {
    yu(n), e = Hu(n);
  } finally {
    nr(t);
  }
  return e;
}
function Cu(n) {
  var e = Ho(n);
  if (n.equals(e) || (n.v = e, n.wv = Nu()), !Ei)
    if (Mt !== null)
      Mt.set(n, n.v);
    else {
      var t = (Mr || n.f & Ln) && n.deps !== null ? jr : jt;
      Qt(n, t);
    }
}
const Ur = /* @__PURE__ */ new Map();
function _i(n, e) {
  var t = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: n,
    reactions: null,
    equals: cu,
    rv: 0,
    wv: 0
  };
  return t;
}
// @__NO_SIDE_EFFECTS__
function le(n, e) {
  const t = _i(n);
  return ku(t), t;
}
// @__NO_SIDE_EFFECTS__
function Au(n, e = !1, t = !0) {
  var i;
  const r = _i(n);
  return e || (r.equals = fu), aa && t && et !== null && et.l !== null && ((i = et.l).s ?? (i.s = [])).push(r), r;
}
function G(n, e, t = !1) {
  Re !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Nn || Re.f & dl) && Pa() && Re.f & (en | bi | Ss | dl) && !(Jt != null && Jt.includes(n)) && yc();
  let r = t ? Ce(e) : e;
  return Qi(n, r);
}
function Qi(n, e) {
  if (!n.equals(e)) {
    var t = n.v;
    Ei ? Ur.set(n, e) : Ur.set(n, t), n.v = e;
    var r = Jn.ensure();
    r.capture(n, t), n.f & en && (n.f & pn && Ho(
      /** @type {Derived} */
      n
    ), Qt(n, n.f & Ln ? jr : jt)), n.wv = Nu(), Eu(n, pn), Pa() && ke !== null && ke.f & jt && !(ke.f & (br | Wr)) && (Sn === null ? rf([n]) : Sn.push(n));
  }
  return e;
}
function Ca(n) {
  G(n, n.v + 1);
}
function Eu(n, e) {
  var t = n.reactions;
  if (t !== null)
    for (var r = Pa(), i = t.length, a = 0; a < i; a++) {
      var s = t[a], u = s.f;
      if (!(!r && s === ke)) {
        var l = (u & pn) === 0;
        l && Qt(s, e), u & en ? Eu(
          /** @type {Derived} */
          s,
          jr
        ) : l && (u & bi && fr !== null && fr.push(
          /** @type {Effect} */
          s
        ), pi(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function Ce(n) {
  if (typeof n != "object" || n === null || $n in n)
    return n;
  const e = Es(n);
  if (e !== ou && e !== uc)
    return n;
  var t = /* @__PURE__ */ new Map(), r = Ma(n), i = /* @__PURE__ */ le(0), a = hi, s = (u) => {
    if (hi === a)
      return u();
    var l = Re, d = hi;
    dn(null), ml(a);
    var c = u();
    return dn(l), ml(d), c;
  };
  return r && t.set("length", /* @__PURE__ */ le(
    /** @type {any[]} */
    n.length
  )), new Proxy(
    /** @type {any} */
    n,
    {
      defineProperty(u, l, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && Ic();
        var c = t.get(l);
        return c === void 0 ? c = s(() => {
          var h = /* @__PURE__ */ le(d.value);
          return t.set(l, h), h;
        }) : G(c, d.value, !0), !0;
      },
      deleteProperty(u, l) {
        var d = t.get(l);
        if (d === void 0) {
          if (l in u) {
            const c = s(() => /* @__PURE__ */ le(St));
            t.set(l, c), Ca(i);
          }
        } else
          G(d, St), Ca(i);
        return !0;
      },
      get(u, l, d) {
        var g;
        if (l === $n)
          return n;
        var c = t.get(l), h = l in u;
        if (c === void 0 && (!h || (g = Nr(u, l)) != null && g.writable) && (c = s(() => {
          var v = Ce(h ? u[l] : St), p = /* @__PURE__ */ le(v);
          return p;
        }), t.set(l, c)), c !== void 0) {
          var f = o(c);
          return f === St ? void 0 : f;
        }
        return Reflect.get(u, l, d);
      },
      getOwnPropertyDescriptor(u, l) {
        var d = Reflect.getOwnPropertyDescriptor(u, l);
        if (d && "value" in d) {
          var c = t.get(l);
          c && (d.value = o(c));
        } else if (d === void 0) {
          var h = t.get(l), f = h == null ? void 0 : h.v;
          if (h !== void 0 && f !== St)
            return {
              enumerable: !0,
              configurable: !0,
              value: f,
              writable: !0
            };
        }
        return d;
      },
      has(u, l) {
        var f;
        if (l === $n)
          return !0;
        var d = t.get(l), c = d !== void 0 && d.v !== St || Reflect.has(u, l);
        if (d !== void 0 || ke !== null && (!c || (f = Nr(u, l)) != null && f.writable)) {
          d === void 0 && (d = s(() => {
            var g = c ? Ce(u[l]) : St, v = /* @__PURE__ */ le(g);
            return v;
          }), t.set(l, d));
          var h = o(d);
          if (h === St)
            return !1;
        }
        return c;
      },
      set(u, l, d, c) {
        var S;
        var h = t.get(l), f = l in u;
        if (r && l === "length")
          for (var g = d; g < /** @type {Source<number>} */
          h.v; g += 1) {
            var v = t.get(g + "");
            v !== void 0 ? G(v, St) : g in u && (v = s(() => /* @__PURE__ */ le(St)), t.set(g + "", v));
          }
        if (h === void 0)
          (!f || (S = Nr(u, l)) != null && S.writable) && (h = s(() => /* @__PURE__ */ le(void 0)), G(h, Ce(d)), t.set(l, h));
        else {
          f = h.v !== St;
          var p = s(() => Ce(d));
          G(h, p);
        }
        var _ = Reflect.getOwnPropertyDescriptor(u, l);
        if (_ != null && _.set && _.set.call(c, d), !f) {
          if (r && typeof l == "string") {
            var y = (
              /** @type {Source<number>} */
              t.get("length")
            ), w = Number(l);
            Number.isInteger(w) && w >= y.v && G(y, w + 1);
          }
          Ca(i);
        }
        return !0;
      },
      ownKeys(u) {
        o(i);
        var l = Reflect.ownKeys(u).filter((h) => {
          var f = t.get(h);
          return f === void 0 || f.v !== St;
        });
        for (var [d, c] of t)
          c.v !== St && !(d in u) && l.push(d);
        return l;
      },
      setPrototypeOf() {
        bc();
      }
    }
  );
}
function fl(n) {
  try {
    if (n !== null && typeof n == "object" && $n in n)
      return n[$n];
  } catch {
  }
  return n;
}
function qc(n, e) {
  return Object.is(fl(n), fl(e));
}
var cs, Bo, Su, xu, wu;
function Wc() {
  if (cs === void 0) {
    cs = window, Bo = document, Su = /Firefox/.test(navigator.userAgent);
    var n = Element.prototype, e = Node.prototype, t = Text.prototype;
    xu = Nr(e, "firstChild").get, wu = Nr(e, "nextSibling").get, ul(n) && (n.__click = void 0, n.__className = void 0, n.__attributes = null, n.__style = void 0, n.__e = void 0), ul(t) && (t.__t = void 0);
  }
}
function yr(n = "") {
  return document.createTextNode(n);
}
// @__NO_SIDE_EFFECTS__
function $i(n) {
  return xu.call(n);
}
// @__NO_SIDE_EFFECTS__
function ka(n) {
  return wu.call(n);
}
function V(n, e) {
  return /* @__PURE__ */ $i(n);
}
function K(n, e = !1) {
  {
    var t = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ $i(
        /** @type {Node} */
        n
      )
    );
    return t instanceof Comment && t.data === "" ? /* @__PURE__ */ ka(t) : t;
  }
}
function Y(n, e = 1, t = !1) {
  let r = n;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ ka(r);
  return r;
}
function jc(n) {
  n.textContent = "";
}
function Go() {
  return !1;
}
function Zc(n, e) {
  if (e) {
    const t = document.body;
    n.autofocus = !0, pr(() => {
      document.activeElement === t && n.focus();
    });
  }
}
let hl = !1;
function Xc() {
  hl || (hl = !0, document.addEventListener(
    "reset",
    (n) => {
      Promise.resolve().then(() => {
        var e;
        if (!n.defaultPrevented)
          for (
            const t of
            /**@type {HTMLFormElement} */
            n.target.elements
          )
            (e = t.__on_r) == null || e.call(t);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function Ds(n) {
  var e = Re, t = ke;
  dn(null), nr(null);
  try {
    return n();
  } finally {
    dn(e), nr(t);
  }
}
function Kc(n, e, t, r = t) {
  n.addEventListener(e, () => Ds(t));
  const i = n.__on_r;
  i ? n.__on_r = () => {
    i(), r(!0);
  } : n.__on_r = () => r(!0), Xc();
}
function Yc(n) {
  ke === null && Re === null && mc(), Re !== null && Re.f & Ln && ke === null && gc(), Ei && vc();
}
function Jc(n, e) {
  var t = e.last;
  t === null ? e.last = e.first = n : (t.next = n, n.prev = t, e.last = n);
}
function rr(n, e, t, r = !0) {
  var i = ke;
  i !== null && i.f & Gn && (n |= Gn);
  var a = {
    ctx: et,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: n | pn,
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
  if (t)
    try {
      Sa(a), a.f |= ko;
    } catch (l) {
      throw Tt(a), l;
    }
  else e !== null && pi(a);
  if (r) {
    var s = a;
    if (t && s.deps === null && s.teardown === null && s.nodes_start === null && s.first === s.last && // either `null`, or a singular child
    !(s.f & Ai) && (s = s.first), s !== null && (s.parent = i, i !== null && Jc(s, i), Re !== null && Re.f & en && !(n & Wr))) {
      var u = (
        /** @type {Derived} */
        Re
      );
      (u.effects ?? (u.effects = [])).push(s);
    }
  }
  return a;
}
function Qc() {
  return Re !== null && !Nn;
}
function Ls(n) {
  const e = rr(Mo, null, !1);
  return Qt(e, jt), e.teardown = n, e;
}
function Se(n) {
  Yc();
  var e = (
    /** @type {Effect} */
    ke.f
  ), t = !Re && (e & br) !== 0 && (e & ko) === 0;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      et
    );
    (r.e ?? (r.e = [])).push(n);
  } else
    return Tu(n);
}
function Tu(n) {
  return rr(Ro | cc, n, !1);
}
function Du(n) {
  Jn.ensure();
  const e = rr(Wr | Ai, n, !0);
  return () => {
    Tt(e);
  };
}
function $c(n) {
  Jn.ensure();
  const e = rr(Wr | Ai, n, !0);
  return (t = {}) => new Promise((r) => {
    t.outro ? Hr(e, () => {
      Tt(e), r(void 0);
    }) : (Tt(e), r(void 0));
  });
}
function Fa(n) {
  return rr(Ro, n, !1);
}
function ef(n) {
  return rr(Ss | Ai, n, !0);
}
function Os(n, e = 0) {
  return rr(Mo | e, n, !0);
}
function ce(n, e = [], t = []) {
  bu(e, t, (r) => {
    rr(Mo, () => n(...r.map(o)), !0);
  });
}
function Cr(n, e = 0) {
  var t = rr(bi | e, n, !0);
  return t;
}
function qt(n, e = !0) {
  return rr(br | Ai, n, !0, e);
}
function Lu(n) {
  var e = n.teardown;
  if (e !== null) {
    const t = Ei, r = Re;
    gl(!0), dn(null);
    try {
      e.call(null);
    } finally {
      gl(t), dn(r);
    }
  }
}
function Ou(n, e = !1) {
  var t = n.first;
  for (n.first = n.last = null; t !== null; ) {
    const i = t.ac;
    i !== null && Ds(() => {
      i.abort(ki);
    });
    var r = t.next;
    t.f & Wr ? t.parent = null : Tt(t, e), t = r;
  }
}
function tf(n) {
  for (var e = n.first; e !== null; ) {
    var t = e.next;
    e.f & br || Tt(e), e = t;
  }
}
function Tt(n, e = !0) {
  var t = !1;
  (e || n.f & uu) && n.nodes_start !== null && n.nodes_end !== null && (nf(
    n.nodes_start,
    /** @type {TemplateNode} */
    n.nodes_end
  ), t = !0), Ou(n, e && !t), fs(n, 0), Qt(n, yi);
  var r = n.transitions;
  if (r !== null)
    for (const a of r)
      a.stop();
  Lu(n);
  var i = n.parent;
  i !== null && i.first !== null && Ru(n), n.next = n.prev = n.teardown = n.ctx = n.deps = n.fn = n.nodes_start = n.nodes_end = n.ac = null;
}
function nf(n, e) {
  for (; n !== null; ) {
    var t = n === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ka(n)
    );
    n.remove(), n = t;
  }
}
function Ru(n) {
  var e = n.parent, t = n.prev, r = n.next;
  t !== null && (t.next = r), r !== null && (r.prev = t), e !== null && (e.first === n && (e.first = r), e.last === n && (e.last = t));
}
function Hr(n, e) {
  var t = [];
  Vo(n, t, !0), Mu(t, () => {
    Tt(n), e && e();
  });
}
function Mu(n, e) {
  var t = n.length;
  if (t > 0) {
    var r = () => --t || e();
    for (var i of n)
      i.out(r);
  } else
    e();
}
function Vo(n, e, t) {
  if (!(n.f & Gn)) {
    if (n.f ^= Gn, n.transitions !== null)
      for (const s of n.transitions)
        (s.is_global || t) && e.push(s);
    for (var r = n.first; r !== null; ) {
      var i = r.next, a = (r.f & Ci) !== 0 || (r.f & br) !== 0;
      Vo(r, e, a ? t : !1), r = i;
    }
  }
}
function Rs(n) {
  Pu(n, !0);
}
function Pu(n, e) {
  if (n.f & Gn) {
    n.f ^= Gn, n.f & jt || (Qt(n, pn), pi(n));
    for (var t = n.first; t !== null; ) {
      var r = t.next, i = (t.f & Ci) !== 0 || (t.f & br) !== 0;
      Pu(t, i ? e : !1), t = r;
    }
    if (n.transitions !== null)
      for (const a of n.transitions)
        (a.is_global || e) && a.in();
  }
}
let Hi = !1;
function vl(n) {
  Hi = n;
}
let Ei = !1;
function gl(n) {
  Ei = n;
}
let Re = null, Nn = !1;
function dn(n) {
  Re = n;
}
let ke = null;
function nr(n) {
  ke = n;
}
let Jt = null;
function ku(n) {
  Re !== null && (Jt === null ? Jt = [n] : Jt.push(n));
}
let Kt = null, hn = 0, Sn = null;
function rf(n) {
  Sn = n;
}
let Fu = 1, Ea = 0, hi = Ea;
function ml(n) {
  hi = n;
}
let Mr = !1;
function Nu() {
  return ++Fu;
}
function Ms(n) {
  var h;
  var e = n.f;
  if (e & pn)
    return !0;
  if (e & jr) {
    var t = n.deps, r = (e & Ln) !== 0;
    if (t !== null) {
      var i, a, s = (e & ds) !== 0, u = r && ke !== null && !Mr, l = t.length;
      if ((s || u) && (ke === null || !(ke.f & yi))) {
        var d = (
          /** @type {Derived} */
          n
        ), c = d.parent;
        for (i = 0; i < l; i++)
          a = t[i], (s || !((h = a == null ? void 0 : a.reactions) != null && h.includes(d))) && (a.reactions ?? (a.reactions = [])).push(d);
        s && (d.f ^= ds), u && c !== null && !(c.f & Ln) && (d.f ^= Ln);
      }
      for (i = 0; i < l; i++)
        if (a = t[i], Ms(
          /** @type {Derived} */
          a
        ) && Cu(
          /** @type {Derived} */
          a
        ), a.wv > n.wv)
          return !0;
    }
    (!r || ke !== null && !Mr) && Qt(n, jt);
  }
  return !1;
}
function Uu(n, e, t = !0) {
  var r = n.reactions;
  if (r !== null && !(Jt != null && Jt.includes(n)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a.f & en ? Uu(
        /** @type {Derived} */
        a,
        e,
        !1
      ) : e === a && (t ? Qt(a, pn) : a.f & jt && Qt(a, jr), pi(
        /** @type {Effect} */
        a
      ));
    }
}
function Hu(n) {
  var p;
  var e = Kt, t = hn, r = Sn, i = Re, a = Mr, s = Jt, u = et, l = Nn, d = hi, c = n.f;
  Kt = /** @type {null | Value[]} */
  null, hn = 0, Sn = null, Mr = (c & Ln) !== 0 && (Nn || !Hi || Re === null), Re = c & (br | Wr) ? null : n, Jt = null, Yi(n.ctx), Nn = !1, hi = ++Ea, n.ac !== null && (Ds(() => {
    n.ac.abort(ki);
  }), n.ac = null);
  try {
    n.f |= oo;
    var h = (
      /** @type {Function} */
      n.fn
    ), f = h(), g = n.deps;
    if (Kt !== null) {
      var v;
      if (fs(n, hn), g !== null && hn > 0)
        for (g.length = hn + Kt.length, v = 0; v < Kt.length; v++)
          g[hn + v] = Kt[v];
      else
        n.deps = g = Kt;
      if (!Mr || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      c & en && /** @type {import('#client').Derived} */
      n.reactions !== null)
        for (v = hn; v < g.length; v++)
          ((p = g[v]).reactions ?? (p.reactions = [])).push(n);
    } else g !== null && hn < g.length && (fs(n, hn), g.length = hn);
    if (Pa() && Sn !== null && !Nn && g !== null && !(n.f & (en | jr | pn)))
      for (v = 0; v < /** @type {Source[]} */
      Sn.length; v++)
        Uu(
          Sn[v],
          /** @type {Effect} */
          n
        );
    return i !== null && i !== n && (Ea++, Sn !== null && (r === null ? r = Sn : r.push(.../** @type {Source[]} */
    Sn))), n.f & fi && (n.f ^= fi), f;
  } catch (_) {
    return gu(_);
  } finally {
    n.f ^= oo, Kt = e, hn = t, Sn = r, Re = i, Mr = a, Jt = s, Yi(u), Nn = l, hi = d;
  }
}
function af(n, e) {
  let t = e.reactions;
  if (t !== null) {
    var r = lc.call(t, n);
    if (r !== -1) {
      var i = t.length - 1;
      i === 0 ? t = e.reactions = null : (t[r] = t[i], t.pop());
    }
  }
  t === null && e.f & en && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Kt === null || !Kt.includes(e)) && (Qt(e, jr), e.f & (Ln | ds) || (e.f ^= ds), yu(
    /** @type {Derived} **/
    e
  ), fs(
    /** @type {Derived} **/
    e,
    0
  ));
}
function fs(n, e) {
  var t = n.deps;
  if (t !== null)
    for (var r = e; r < t.length; r++)
      af(n, t[r]);
}
function Sa(n) {
  var e = n.f;
  if (!(e & yi)) {
    Qt(n, jt);
    var t = ke, r = Hi;
    ke = n, Hi = !0;
    try {
      e & bi ? tf(n) : Ou(n), Lu(n);
      var i = Hu(n);
      n.teardown = typeof i == "function" ? i : null, n.wv = Fu;
      var a;
      au && xc && n.f & pn && n.deps;
    } finally {
      Hi = r, ke = t;
    }
  }
}
async function Bu() {
  await Promise.resolve(), Rc();
}
function o(n) {
  var e = n.f, t = (e & en) !== 0;
  if (Re !== null && !Nn) {
    var r = ke !== null && (ke.f & yi) !== 0;
    if (!r && !(Jt != null && Jt.includes(n))) {
      var i = Re.deps;
      if (Re.f & oo)
        n.rv < Ea && (n.rv = Ea, Kt === null && i !== null && i[hn] === n ? hn++ : Kt === null ? Kt = [n] : (!Mr || !Kt.includes(n)) && Kt.push(n));
      else {
        (Re.deps ?? (Re.deps = [])).push(n);
        var a = n.reactions;
        a === null ? n.reactions = [Re] : a.includes(Re) || a.push(Re);
      }
    }
  } else if (t && /** @type {Derived} */
  n.deps === null && /** @type {Derived} */
  n.effects === null) {
    var s = (
      /** @type {Derived} */
      n
    ), u = s.parent;
    u !== null && !(u.f & Ln) && (s.f ^= Ln);
  }
  if (Ei) {
    if (Ur.has(n))
      return Ur.get(n);
    if (t) {
      s = /** @type {Derived} */
      n;
      var l = s.v;
      return (!(s.f & jt) && s.reactions !== null || Gu(s)) && (l = Ho(s)), Ur.set(s, l), l;
    }
  } else if (t) {
    if (s = /** @type {Derived} */
    n, Mt != null && Mt.has(s))
      return Mt.get(s);
    Ms(s) && Cu(s);
  }
  if (Mt != null && Mt.has(n))
    return Mt.get(n);
  if (n.f & fi)
    throw n.v;
  return n.v;
}
function Gu(n) {
  if (n.v === St) return !0;
  if (n.deps === null) return !1;
  for (const e of n.deps)
    if (Ur.has(e) || e.f & en && Gu(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Zr(n) {
  var e = Nn;
  try {
    return Nn = !0, n();
  } finally {
    Nn = e;
  }
}
const sf = -7169;
function Qt(n, e) {
  n.f = n.f & sf | e;
}
function of(n) {
  if (!(typeof n != "object" || !n || n instanceof EventTarget)) {
    if ($n in n)
      go(n);
    else if (!Array.isArray(n))
      for (let e in n) {
        const t = n[e];
        typeof t == "object" && t && $n in t && go(t);
      }
  }
}
function go(n, e = /* @__PURE__ */ new Set()) {
  if (typeof n == "object" && n !== null && // We don't want to traverse DOM elements
  !(n instanceof EventTarget) && !e.has(n)) {
    e.add(n), n instanceof Date && n.getTime();
    for (let r in n)
      try {
        go(n[r], e);
      } catch {
      }
    const t = Es(n);
    if (t !== Object.prototype && t !== Array.prototype && t !== Map.prototype && t !== Set.prototype && t !== Date.prototype) {
      const r = su(t);
      for (let i in r) {
        const a = r[i].get;
        if (a)
          try {
            a.call(n);
          } catch {
          }
      }
    }
  }
}
const Vu = /* @__PURE__ */ new Set(), mo = /* @__PURE__ */ new Set();
function zo(n, e, t, r = {}) {
  function i(a) {
    if (r.capture || Ia.call(e, a), !a.cancelBubble)
      return Ds(() => t == null ? void 0 : t.call(this, a));
  }
  return n.startsWith("pointer") || n.startsWith("touch") || n === "wheel" ? pr(() => {
    e.addEventListener(n, i, r);
  }) : e.addEventListener(n, i, r), i;
}
function lf(n, e, t, r = {}) {
  var i = zo(e, n, t, r);
  return () => {
    n.removeEventListener(e, i, r);
  };
}
function Yt(n, e, t, r, i) {
  var a = { capture: r, passive: i }, s = zo(n, e, t, a);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && Ls(() => {
    e.removeEventListener(n, s, a);
  });
}
function ct(n) {
  for (var e = 0; e < n.length; e++)
    Vu.add(n[e]);
  for (var t of mo)
    t(n);
}
let pl = null;
function Ia(n) {
  var w;
  var e = this, t = (
    /** @type {Node} */
    e.ownerDocument
  ), r = n.type, i = ((w = n.composedPath) == null ? void 0 : w.call(n)) || [], a = (
    /** @type {null | Element} */
    i[0] || n.target
  );
  pl = n;
  var s = 0, u = pl === n && n.__root;
  if (u) {
    var l = i.indexOf(u);
    if (l !== -1 && (e === document || e === /** @type {any} */
    window)) {
      n.__root = e;
      return;
    }
    var d = i.indexOf(e);
    if (d === -1)
      return;
    l <= d && (s = l);
  }
  if (a = /** @type {Element} */
  i[s] || n.target, a !== e) {
    us(n, "currentTarget", {
      configurable: !0,
      get() {
        return a || t;
      }
    });
    var c = Re, h = ke;
    dn(null), nr(null);
    try {
      for (var f, g = []; a !== null; ) {
        var v = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var p = a["__" + r];
          if (p != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          n.target === a))
            if (Ma(p)) {
              var [_, ...y] = p;
              _.apply(a, [n, ...y]);
            } else
              p.call(a, n);
        } catch (S) {
          f ? g.push(S) : f = S;
        }
        if (n.cancelBubble || v === e || v === null)
          break;
        a = v;
      }
      if (f) {
        for (let S of g)
          queueMicrotask(() => {
            throw S;
          });
        throw f;
      }
    } finally {
      n.__root = e, delete n.currentTarget, dn(c), nr(h);
    }
  }
}
function uf(n) {
  var e;
  e = document.head.appendChild(yr());
  try {
    Cr(() => n(e), uu);
  } finally {
  }
}
function zu(n) {
  var e = document.createElement("template");
  return e.innerHTML = n.replaceAll("<!>", "<!---->"), e.content;
}
function ea(n, e) {
  var t = (
    /** @type {Effect} */
    ke
  );
  t.nodes_start === null && (t.nodes_start = n, t.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function Z(n, e) {
  var t = (e & 1) !== 0, r = (e & 2) !== 0, i, a = !n.startsWith("<!>");
  return () => {
    i === void 0 && (i = zu(a ? n : "<!>" + n), t || (i = /** @type {Node} */
    /* @__PURE__ */ $i(i)));
    var s = (
      /** @type {TemplateNode} */
      r || Su ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (t) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ $i(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      ea(u, l);
    } else
      ea(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function df(n, e, t = "svg") {
  var r = !n.startsWith("<!>"), i = `<${t}>${r ? n : "<!>" + n}</${t}>`, a;
  return () => {
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        zu(i)
      ), u = (
        /** @type {Element} */
        /* @__PURE__ */ $i(s)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ $i(u);
    }
    var l = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return ea(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function st(n, e) {
  return /* @__PURE__ */ df(n, e, "svg");
}
function at(n = "") {
  {
    var e = yr(n + "");
    return ea(e, e), e;
  }
}
function oe() {
  var n = document.createDocumentFragment(), e = document.createComment(""), t = yr();
  return n.append(e, t), ea(e, t), n;
}
function E(n, e) {
  n !== null && n.before(
    /** @type {Node} */
    e
  );
}
function cf(n) {
  return n.endsWith("capture") && n !== "gotpointercapture" && n !== "lostpointercapture";
}
const ff = [
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
function hf(n) {
  return ff.includes(n);
}
const vf = {
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
function gf(n) {
  return n = n.toLowerCase(), vf[n] ?? n;
}
const mf = ["touchstart", "touchmove"];
function pf(n) {
  return mf.includes(n);
}
function Me(n, e) {
  var t = e == null ? "" : typeof e == "object" ? e + "" : e;
  t !== (n.__t ?? (n.__t = n.nodeValue)) && (n.__t = t, n.nodeValue = t + "");
}
function _f(n, e) {
  return If(n, e);
}
const Li = /* @__PURE__ */ new Map();
function If(n, { target: e, anchor: t, props: r = {}, events: i, context: a, intro: s = !0 }) {
  Wc();
  var u = /* @__PURE__ */ new Set(), l = (h) => {
    for (var f = 0; f < h.length; f++) {
      var g = h[f];
      if (!u.has(g)) {
        u.add(g);
        var v = pf(g);
        e.addEventListener(g, Ia, { passive: v });
        var p = Li.get(g);
        p === void 0 ? (document.addEventListener(g, Ia, { passive: v }), Li.set(g, 1)) : Li.set(g, p + 1);
      }
    }
  };
  l(Oo(Vu)), mo.add(l);
  var d = void 0, c = $c(() => {
    var h = t ?? e.appendChild(yr());
    return Fc(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (f) => {
        if (a) {
          Ae({});
          var g = (
            /** @type {ComponentContext} */
            et
          );
          g.c = a;
        }
        i && (r.$$events = i), d = n(f, r) || {}, a && Ee();
      }
    ), () => {
      var v;
      for (var f of u) {
        e.removeEventListener(f, Ia);
        var g = (
          /** @type {number} */
          Li.get(f)
        );
        --g === 0 ? (document.removeEventListener(f, Ia), Li.delete(f)) : Li.set(f, g);
      }
      mo.delete(l), h !== t && ((v = h.parentNode) == null || v.removeChild(h));
    };
  });
  return bf.set(d, c), d;
}
let bf = /* @__PURE__ */ new WeakMap();
function Ie(n, e, ...t) {
  var r = n, i = pe, a;
  Cr(() => {
    i !== (i = e()) && (a && (Tt(a), a = null), a = qt(() => (
      /** @type {SnippetFn} */
      i(r, ...t)
    )));
  }, Ci);
}
function rt(n) {
  et === null && Fo(), aa && et.l !== null ? yf(et).m.push(n) : Se(() => {
    const e = Zr(n);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Rn(n) {
  et === null && Fo(), rt(() => () => Zr(n));
}
function yf(n) {
  var e = (
    /** @type {ComponentContextLegacy} */
    n.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
function ee(n, e, t = !1) {
  var r = n, i = null, a = null, s = St, u = t ? Ci : 0, l = !1;
  const d = (g, v = !0) => {
    l = !0, f(v, g);
  };
  var c = null;
  function h() {
    c !== null && (c.lastChild.remove(), r.before(c), c = null);
    var g = s ? i : a, v = s ? a : i;
    g && Rs(g), v && Hr(v, () => {
      s ? a = null : i = null;
    });
  }
  const f = (g, v) => {
    if (s !== (s = g)) {
      var p = Go(), _ = r;
      if (p && (c = document.createDocumentFragment(), c.append(_ = yr())), s ? i ?? (i = v && qt(() => v(_))) : a ?? (a = v && qt(() => v(_))), p) {
        var y = (
          /** @type {Batch} */
          Xe
        ), w = s ? i : a, S = s ? a : i;
        w && y.skipped_effects.delete(w), S && y.skipped_effects.add(S), y.add_callback(h);
      } else
        h();
    }
  };
  Cr(() => {
    l = !1, e(d), l || f(null, null);
  }, u);
}
let vi = null;
function _l(n) {
  vi = n;
}
function _r(n, e) {
  return e;
}
function Cf(n, e, t) {
  for (var r = n.items, i = [], a = e.length, s = 0; s < a; s++)
    Vo(e[s].e, i, !0);
  var u = a > 0 && i.length === 0 && t !== null;
  if (u) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      t.parentNode
    );
    jc(l), l.append(
      /** @type {Element} */
      t
    ), r.clear(), zn(n, e[0].prev, e[a - 1].next);
  }
  Mu(i, () => {
    for (var d = 0; d < a; d++) {
      var c = e[d];
      u || (r.delete(c.k), zn(n, c.prev, c.next)), Tt(c.e, !u);
    }
  });
}
function mn(n, e, t, r, i, a = null) {
  var s = n, u = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, l = (e & 4) !== 0;
  if (l) {
    var d = (
      /** @type {Element} */
      n
    );
    s = d.appendChild(yr());
  }
  var c = null, h = !1, f = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ Uo(() => {
    var y = t();
    return Ma(y) ? y : y == null ? [] : Oo(y);
  }), v, p;
  function _() {
    Af(
      p,
      v,
      u,
      f,
      s,
      i,
      e,
      r,
      t
    ), a !== null && (v.length === 0 ? c ? Rs(c) : c = qt(() => a(s)) : c !== null && Hr(c, () => {
      c = null;
    }));
  }
  Cr(() => {
    p ?? (p = /** @type {Effect} */
    ke), v = /** @type {V[]} */
    o(g);
    var y = v.length;
    if (!(h && y === 0)) {
      h = y === 0;
      var w, S, A, T;
      if (Go()) {
        var I = /* @__PURE__ */ new Set(), b = (
          /** @type {Batch} */
          Xe
        );
        for (S = 0; S < y; S += 1) {
          A = v[S], T = r(A, S);
          var C = u.items.get(T) ?? f.get(T);
          C ? e & 3 && qu(C, A, S, e) : (w = Wu(
            null,
            u,
            null,
            null,
            A,
            T,
            S,
            i,
            e,
            t,
            !0
          ), f.set(T, w)), I.add(T);
        }
        for (const [x, D] of u.items)
          I.has(x) || b.skipped_effects.add(D.e);
        b.add_callback(_);
      } else
        _();
      o(g);
    }
  });
}
function Af(n, e, t, r, i, a, s, u, l) {
  var ue, F, $, se;
  var d = (s & 8) !== 0, c = (s & 3) !== 0, h = e.length, f = t.items, g = t.first, v = g, p, _ = null, y, w = [], S = [], A, T, I, b;
  if (d)
    for (b = 0; b < h; b += 1)
      A = e[b], T = u(A, b), I = f.get(T), I !== void 0 && ((ue = I.a) == null || ue.measure(), (y ?? (y = /* @__PURE__ */ new Set())).add(I));
  for (b = 0; b < h; b += 1) {
    if (A = e[b], T = u(A, b), I = f.get(T), I === void 0) {
      var C = r.get(T);
      if (C !== void 0) {
        r.delete(T), f.set(T, C);
        var x = _ ? _.next : v;
        zn(t, _, C), zn(t, C, x), Zs(C, x, i), _ = C;
      } else {
        var D = v ? (
          /** @type {TemplateNode} */
          v.e.nodes_start
        ) : i;
        _ = Wu(
          D,
          t,
          _,
          _ === null ? t.first : _.next,
          A,
          T,
          b,
          a,
          s,
          l
        );
      }
      f.set(T, _), w = [], S = [], v = _.next;
      continue;
    }
    if (c && qu(I, A, b, s), I.e.f & Gn && (Rs(I.e), d && ((F = I.a) == null || F.unfix(), (y ?? (y = /* @__PURE__ */ new Set())).delete(I))), I !== v) {
      if (p !== void 0 && p.has(I)) {
        if (w.length < S.length) {
          var L = S[0], O;
          _ = L.prev;
          var R = w[0], re = w[w.length - 1];
          for (O = 0; O < w.length; O += 1)
            Zs(w[O], L, i);
          for (O = 0; O < S.length; O += 1)
            p.delete(S[O]);
          zn(t, R.prev, re.next), zn(t, _, R), zn(t, re, L), v = L, _ = re, b -= 1, w = [], S = [];
        } else
          p.delete(I), Zs(I, v, i), zn(t, I.prev, I.next), zn(t, I, _ === null ? t.first : _.next), zn(t, _, I), _ = I;
        continue;
      }
      for (w = [], S = []; v !== null && v.k !== T; )
        v.e.f & Gn || (p ?? (p = /* @__PURE__ */ new Set())).add(v), S.push(v), v = v.next;
      if (v === null)
        continue;
      I = v;
    }
    w.push(I), _ = I, v = I.next;
  }
  if (v !== null || p !== void 0) {
    for (var q = p === void 0 ? [] : Oo(p); v !== null; )
      v.e.f & Gn || q.push(v), v = v.next;
    var N = q.length;
    if (N > 0) {
      var H = s & 4 && h === 0 ? i : null;
      if (d) {
        for (b = 0; b < N; b += 1)
          ($ = q[b].a) == null || $.measure();
        for (b = 0; b < N; b += 1)
          (se = q[b].a) == null || se.fix();
      }
      Cf(t, q, H);
    }
  }
  d && pr(() => {
    var _e;
    if (y !== void 0)
      for (I of y)
        (_e = I.a) == null || _e.apply();
  }), n.first = t.first && t.first.e, n.last = _ && _.e;
  for (var J of r.values())
    Tt(J.e);
  r.clear();
}
function qu(n, e, t, r) {
  r & 1 && Qi(n.v, e), r & 2 ? Qi(
    /** @type {Value<number>} */
    n.i,
    t
  ) : n.i = t;
}
function Wu(n, e, t, r, i, a, s, u, l, d, c) {
  var h = vi, f = (l & 1) !== 0, g = (l & 16) === 0, v = f ? g ? /* @__PURE__ */ Au(i, !1, !1) : _i(i) : i, p = l & 2 ? _i(s) : s, _ = {
    i: p,
    v,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: t,
    next: r
  };
  vi = _;
  try {
    if (n === null) {
      var y = document.createDocumentFragment();
      y.append(n = yr());
    }
    return _.e = qt(() => u(
      /** @type {Node} */
      n,
      v,
      p,
      d
    ), Sc), _.e.prev = t && t.e, _.e.next = r && r.e, t === null ? c || (e.first = _) : (t.next = _, t.e.next = _.e), r !== null && (r.prev = _, r.e.prev = _.e), _;
  } finally {
    vi = h;
  }
}
function Zs(n, e, t) {
  for (var r = n.next ? (
    /** @type {TemplateNode} */
    n.next.e.nodes_start
  ) : t, i = e ? (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ) : t, a = (
    /** @type {TemplateNode} */
    n.e.nodes_start
  ); a !== null && a !== r; ) {
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ka(a)
    );
    i.before(a), a = s;
  }
}
function zn(n, e, t) {
  e === null ? n.first = t : (e.next = t, e.e.next = t && t.e), t !== null && (t.prev = e, t.e.prev = e && e.e);
}
function Na(n, e, t) {
  var r = n, i, a, s = null, u = null;
  function l() {
    a && (Hr(a), a = null), s && (s.lastChild.remove(), r.before(s), s = null), a = u, u = null;
  }
  Cr(() => {
    if (i !== (i = e())) {
      var d = Go();
      if (i) {
        var c = r;
        d && (s = document.createDocumentFragment(), s.append(c = yr()), a && Xe.skipped_effects.add(a)), u = qt(() => t(c, i));
      }
      d ? Xe.add_callback(l) : l();
    }
  }, Ci);
}
function po(n, e, t, r, i, a) {
  var s, u, l = null, d = (
    /** @type {TemplateNode} */
    n
  ), c, h = vi;
  Cr(() => {
    const f = e() || null;
    var g = f === "svg" ? sc : null;
    if (f !== s) {
      var v = vi;
      _l(h), c && (f === null ? Hr(c, () => {
        c = null, u = null;
      }) : f === u ? Rs(c) : Tt(c)), f && f !== u && (c = qt(() => {
        if (l = g ? document.createElementNS(g, f) : document.createElement(f), ea(l, l), r) {
          var p = (
            /** @type {TemplateNode} */
            l.appendChild(yr())
          );
          r(l, p);
        }
        ke.nodes_end = l, d.before(l);
      })), s = f, s && (u = s), _l(v);
    }
  }, Ci);
}
function Le(n, e, t) {
  Fa(() => {
    var r = Zr(() => e(n, t == null ? void 0 : t()) || {});
    if (t && (r != null && r.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      Os(() => {
        var s = t();
        of(s), i && No(a, s) && (a = s, r.update(s));
      }), i = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Ef(n, e) {
  var t = void 0, r;
  Cr(() => {
    t !== (t = e()) && (r && (Tt(r), r = null), t && (r = qt(() => {
      Fa(() => (
        /** @type {(node: Element) => void} */
        t(n)
      ));
    })));
  });
}
function ju(n) {
  var e, t, r = "";
  if (typeof n == "string" || typeof n == "number") r += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var i = n.length;
    for (e = 0; e < i; e++) n[e] && (t = ju(n[e])) && (r && (r += " "), r += t);
  } else for (t in n) n[t] && (r && (r += " "), r += t);
  return r;
}
function Sf() {
  for (var n, e, t = 0, r = "", i = arguments.length; t < i; t++) (n = arguments[t]) && (e = ju(n)) && (r && (r += " "), r += e);
  return r;
}
function Zu(n) {
  return typeof n == "object" ? Sf(n) : n ?? "";
}
const Il = [...` 	
\r\f \v\uFEFF`];
function xf(n, e, t) {
  var r = n == null ? "" : "" + n;
  if (e && (r = r ? r + " " + e : e), t) {
    for (var i in t)
      if (t[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var a = i.length, s = 0; (s = r.indexOf(i, s)) >= 0; ) {
          var u = s + a;
          (s === 0 || Il.includes(r[s - 1])) && (u === r.length || Il.includes(r[u])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(u + 1) : s = u;
        }
  }
  return r === "" ? null : r;
}
function bl(n, e = !1) {
  var t = e ? " !important;" : ";", r = "";
  for (var i in n) {
    var a = n[i];
    a != null && a !== "" && (r += " " + i + ": " + a + t);
  }
  return r;
}
function Xs(n) {
  return n[0] !== "-" || n[1] !== "-" ? n.toLowerCase() : n;
}
function wf(n, e) {
  if (e) {
    var t = "", r, i;
    if (Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, n) {
      n = String(n).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, s = 0, u = !1, l = [];
      r && l.push(...Object.keys(r).map(Xs)), i && l.push(...Object.keys(i).map(Xs));
      var d = 0, c = -1;
      const p = n.length;
      for (var h = 0; h < p; h++) {
        var f = n[h];
        if (u ? f === "/" && n[h - 1] === "*" && (u = !1) : a ? a === f && (a = !1) : f === "/" && n[h + 1] === "*" ? u = !0 : f === '"' || f === "'" ? a = f : f === "(" ? s++ : f === ")" && s--, !u && a === !1 && s === 0) {
          if (f === ":" && c === -1)
            c = h;
          else if (f === ";" || h === p - 1) {
            if (c !== -1) {
              var g = Xs(n.substring(d, c).trim());
              if (!l.includes(g)) {
                f !== ";" && h++;
                var v = n.substring(d, h).trim();
                t += " " + v + ";";
              }
            }
            d = h + 1, c = -1;
          }
        }
      }
    }
    return r && (t += bl(r)), i && (t += bl(i, !0)), t = t.trim(), t === "" ? null : t;
  }
  return n == null ? null : String(n);
}
function Ir(n, e, t, r, i, a) {
  var s = n.__className;
  if (s !== t || s === void 0) {
    var u = xf(t, r, a);
    u == null ? n.removeAttribute("class") : e ? n.className = u : n.setAttribute("class", u), n.__className = t;
  } else if (a && i !== a)
    for (var l in a) {
      var d = !!a[l];
      (i == null || d !== !!i[l]) && n.classList.toggle(l, d);
    }
  return a;
}
function Ks(n, e = {}, t, r) {
  for (var i in t) {
    var a = t[i];
    e[i] !== a && (t[i] == null ? n.style.removeProperty(i) : n.style.setProperty(i, a, r));
  }
}
function Ke(n, e, t, r) {
  var i = n.__style;
  if (i !== e) {
    var a = wf(e, r);
    a == null ? n.removeAttribute("style") : n.style.cssText = a, n.__style = e;
  } else r && (Array.isArray(r) ? (Ks(n, t == null ? void 0 : t[0], r[0]), Ks(n, t == null ? void 0 : t[1], r[1], "important")) : Ks(n, t, r));
  return r;
}
function _o(n, e, t = !1) {
  if (n.multiple) {
    if (e == null)
      return;
    if (!Ma(e))
      return Ac();
    for (var r of n.options)
      r.selected = e.includes(yl(r));
    return;
  }
  for (r of n.options) {
    var i = yl(r);
    if (qc(i, e)) {
      r.selected = !0;
      return;
    }
  }
  (!t || e !== void 0) && (n.selectedIndex = -1);
}
function Tf(n) {
  var e = new MutationObserver(() => {
    _o(n, n.__value);
  });
  e.observe(n, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), Ls(() => {
    e.disconnect();
  });
}
function yl(n) {
  return "__value" in n ? n.__value : n.value;
}
const ha = Symbol("class"), va = Symbol("style"), Xu = Symbol("is custom element"), Ku = Symbol("is html");
function Cl(n, e) {
  var t = qo(n);
  t.value === (t.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  n.value === e && (e !== 0 || n.nodeName !== "PROGRESS") || (n.value = e ?? "");
}
function Df(n, e) {
  e ? n.hasAttribute("selected") || n.setAttribute("selected", "") : n.removeAttribute("selected");
}
function bt(n, e, t, r) {
  var i = qo(n);
  i[e] !== (i[e] = t) && (e === "loading" && (n[fc] = t), t == null ? n.removeAttribute(e) : typeof t != "string" && Yu(n).includes(e) ? n[e] = t : n.setAttribute(e, t));
}
function Lf(n, e, t, r, i = !1, a = !1) {
  var s = qo(n), u = s[Xu], l = !s[Ku], d = e || {}, c = n.tagName === "OPTION";
  for (var h in e)
    h in t || (t[h] = null);
  t.class ? t.class = Zu(t.class) : t[ha] && (t.class = null), t[va] && (t.style ?? (t.style = null));
  var f = Yu(n);
  for (const S in t) {
    let A = t[S];
    if (c && S === "value" && A == null) {
      n.value = n.__value = "", d[S] = A;
      continue;
    }
    if (S === "class") {
      var g = n.namespaceURI === "http://www.w3.org/1999/xhtml";
      Ir(n, g, A, r, e == null ? void 0 : e[ha], t[ha]), d[S] = A, d[ha] = t[ha];
      continue;
    }
    if (S === "style") {
      Ke(n, A, e == null ? void 0 : e[va], t[va]), d[S] = A, d[va] = t[va];
      continue;
    }
    var v = d[S];
    if (!(A === v && !(A === void 0 && n.hasAttribute(S)))) {
      d[S] = A;
      var p = S[0] + S[1];
      if (p !== "$$")
        if (p === "on") {
          const T = {}, I = "$$" + S;
          let b = S.slice(2);
          var _ = hf(b);
          if (cf(b) && (b = b.slice(0, -7), T.capture = !0), !_ && v) {
            if (A != null) continue;
            n.removeEventListener(b, d[I], T), d[I] = null;
          }
          if (A != null)
            if (_)
              n[`__${b}`] = A, ct([b]);
            else {
              let C = function(x) {
                d[S].call(this, x);
              };
              d[I] = zo(b, n, C, T);
            }
          else _ && (n[`__${b}`] = void 0);
        } else if (S === "style")
          bt(n, S, A);
        else if (S === "autofocus")
          Zc(
            /** @type {HTMLElement} */
            n,
            !!A
          );
        else if (!u && (S === "__value" || S === "value" && A != null))
          n.value = n.__value = A;
        else if (S === "selected" && c)
          Df(
            /** @type {HTMLOptionElement} */
            n,
            A
          );
        else {
          var y = S;
          l || (y = gf(y));
          var w = y === "defaultValue" || y === "defaultChecked";
          if (A == null && !u && !w)
            if (s[S] = null, y === "value" || y === "checked") {
              let T = (
                /** @type {HTMLInputElement} */
                n
              );
              const I = e === void 0;
              if (y === "value") {
                let b = T.defaultValue;
                T.removeAttribute(y), T.defaultValue = b, T.value = T.__value = I ? b : null;
              } else {
                let b = T.defaultChecked;
                T.removeAttribute(y), T.defaultChecked = b, T.checked = I ? b : !1;
              }
            } else
              n.removeAttribute(S);
          else w || f.includes(y) && (u || typeof A != "string") ? (n[y] = A, y in s && (s[y] = St)) : typeof A != "function" && bt(n, y, A);
        }
    }
  }
  return d;
}
function Be(n, e, t = [], r = [], i, a = !1, s = !1) {
  bu(t, r, (u) => {
    var l = void 0, d = {}, c = n.nodeName === "SELECT", h = !1;
    if (Cr(() => {
      var g = e(...u.map(o)), v = Lf(
        n,
        l,
        g,
        i,
        a,
        s
      );
      h && c && "value" in g && _o(
        /** @type {HTMLSelectElement} */
        n,
        g.value
      );
      for (let _ of Object.getOwnPropertySymbols(d))
        g[_] || Tt(d[_]);
      for (let _ of Object.getOwnPropertySymbols(g)) {
        var p = g[_];
        _.description === oc && (!l || p !== l[_]) && (d[_] && Tt(d[_]), d[_] = qt(() => Ef(n, () => p))), v[_] = p;
      }
      l = v;
    }), c) {
      var f = (
        /** @type {HTMLSelectElement} */
        n
      );
      Fa(() => {
        _o(
          f,
          /** @type {Record<string | symbol, any>} */
          l.value,
          !0
        ), Tf(f);
      });
    }
    h = !0;
  });
}
function qo(n) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    n.__attributes ?? (n.__attributes = {
      [Xu]: n.nodeName.includes("-"),
      [Ku]: n.namespaceURI === ac
    })
  );
}
var Al = /* @__PURE__ */ new Map();
function Yu(n) {
  var e = n.getAttribute("is") || n.nodeName, t = Al.get(e);
  if (t) return t;
  Al.set(e, t = []);
  for (var r, i = n, a = Element.prototype; a !== i; ) {
    r = su(i);
    for (var s in r)
      r[s].set && t.push(s);
    i = Es(i);
  }
  return t;
}
const Of = () => performance.now(), hr = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (n) => requestAnimationFrame(n)
  ),
  now: () => Of(),
  tasks: /* @__PURE__ */ new Set()
};
function Ju() {
  const n = hr.now();
  hr.tasks.forEach((e) => {
    e.c(n) || (hr.tasks.delete(e), e.f());
  }), hr.tasks.size !== 0 && hr.tick(Ju);
}
function Rf(n) {
  let e;
  return hr.tasks.size === 0 && hr.tick(Ju), {
    promise: new Promise((t) => {
      hr.tasks.add(e = { c: n, f: t });
    }),
    abort() {
      hr.tasks.delete(e);
    }
  };
}
function Mf(n) {
  if (n === "float") return "cssFloat";
  if (n === "offset") return "cssOffset";
  if (n.startsWith("--")) return n;
  const e = n.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (t) => t[0].toUpperCase() + t.slice(1)
  ).join("");
}
function El(n) {
  const e = {}, t = n.split(";");
  for (const r of t) {
    const [i, a] = r.split(":");
    if (!i || a === void 0) break;
    const s = Mf(i.trim());
    e[s] = a.trim();
  }
  return e;
}
const Pf = (n) => n;
function Wo(n, e, t) {
  var r = (
    /** @type {EachItem} */
    vi
  ), i, a, s, u = null;
  r.a ?? (r.a = {
    element: n,
    measure() {
      i = this.element.getBoundingClientRect();
    },
    apply() {
      if (s == null || s.abort(), a = this.element.getBoundingClientRect(), i.left !== a.left || i.right !== a.right || i.top !== a.top || i.bottom !== a.bottom) {
        const l = e()(this.element, { from: i, to: a }, t == null ? void 0 : t());
        s = Qu(this.element, l, void 0, 1, () => {
          s == null || s.abort(), s = void 0;
        });
      }
    },
    fix() {
      if (!n.getAnimations().length) {
        var { position: l, width: d, height: c } = getComputedStyle(n);
        if (l !== "absolute" && l !== "fixed") {
          var h = (
            /** @type {HTMLElement | SVGElement} */
            n.style
          );
          u = {
            position: h.position,
            width: h.width,
            height: h.height,
            transform: h.transform
          }, h.position = "absolute", h.width = d, h.height = c;
          var f = n.getBoundingClientRect();
          if (i.left !== f.left || i.top !== f.top) {
            var g = `translate(${i.left - f.left}px, ${i.top - f.top}px)`;
            h.transform = h.transform ? `${h.transform} ${g}` : g;
          }
        }
      }
    },
    unfix() {
      if (u) {
        var l = (
          /** @type {HTMLElement | SVGElement} */
          n.style
        );
        l.position = u.position, l.width = u.width, l.height = u.height, l.transform = u.transform;
      }
    }
  }), r.a.element = n;
}
function Qu(n, e, t, r, i) {
  if (Pi(e)) {
    var a, s = !1;
    return pr(() => {
      if (!s) {
        var p = e({ direction: "in" });
        a = Qu(n, p, t, r, i);
      }
    }), {
      abort: () => {
        s = !0, a == null || a.abort();
      },
      deactivate: () => a.deactivate(),
      reset: () => a.reset(),
      t: () => a.t()
    };
  }
  if (!(e != null && e.duration))
    return i(), {
      abort: pe,
      deactivate: pe,
      reset: pe,
      t: () => r
    };
  const { delay: u = 0, css: l, tick: d, easing: c = Pf } = e;
  var h = [];
  if (d && d(0, 1), l) {
    var f = El(l(0, 1));
    h.push(f, f);
  }
  var g = () => 1 - r, v = n.animate(h, { duration: u, fill: "forwards" });
  return v.onfinish = () => {
    v.cancel();
    var p = 1 - r, _ = r - p, y = (
      /** @type {number} */
      e.duration * Math.abs(_)
    ), w = [];
    if (y > 0) {
      var S = !1;
      if (l)
        for (var A = Math.ceil(y / 16.666666666666668), T = 0; T <= A; T += 1) {
          var I = p + _ * c(T / A), b = El(l(I, 1 - I));
          w.push(b), S || (S = b.overflow === "hidden");
        }
      S && (n.style.overflow = "hidden"), g = () => {
        var C = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          v.currentTime
        );
        return p + _ * c(C / y);
      }, d && Rf(() => {
        if (v.playState !== "running") return !1;
        var C = g();
        return d(C, 1 - C), !0;
      });
    }
    v = n.animate(w, { duration: y, fill: "forwards" }), v.onfinish = () => {
      g = () => r, d == null || d(r, 1 - r), i();
    };
  }, {
    abort: () => {
      v && (v.cancel(), v.effect = null, v.onfinish = pe);
    },
    deactivate: () => {
      i = pe;
    },
    reset: () => {
    },
    t: () => g()
  };
}
function kf(n, e, t = e) {
  var r = /* @__PURE__ */ new WeakSet();
  Kc(n, "input", async (i) => {
    var a = i ? n.defaultValue : n.value;
    if (a = Ys(n) ? Js(a) : a, t(a), Xe !== null && r.add(Xe), await Bu(), a !== (a = e())) {
      var s = n.selectionStart, u = n.selectionEnd, l = n.value.length;
      if (n.value = a ?? "", u !== null) {
        var d = n.value.length;
        s === u && u === l && d > l ? (n.selectionStart = d, n.selectionEnd = d) : (n.selectionStart = s, n.selectionEnd = Math.min(u, d));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Zr(e) == null && n.value && (t(Ys(n) ? Js(n.value) : n.value), Xe !== null && r.add(Xe)), Os(() => {
    var i = e();
    if (n === document.activeElement) {
      var a = (
        /** @type {Batch} */
        ns ?? Xe
      );
      if (r.has(a))
        return;
    }
    Ys(n) && i === Js(n.value) || n.type === "date" && !i && !n.value || i !== n.value && (n.value = i ?? "");
  });
}
function Ys(n) {
  var e = n.type;
  return e === "number" || e === "range";
}
function Js(n) {
  return n === "" ? null : +n;
}
function Sl(n, e) {
  return n === e || (n == null ? void 0 : n[$n]) === e;
}
function xe(n = {}, e, t, r) {
  return Fa(() => {
    var i, a;
    return Os(() => {
      i = a, a = [], Zr(() => {
        n !== t(...a) && (e(n, ...a), i && Sl(t(...i), n) && e(null, ...i));
      });
    }), () => {
      pr(() => {
        a && Sl(t(...a), n) && e(null, ...a);
      });
    };
  }), n;
}
function $u(n, e, t) {
  if (n == null)
    return e(void 0), pe;
  const r = Zr(
    () => n.subscribe(
      e,
      // @ts-expect-error
      t
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const Oi = [];
function er(n, e = pe) {
  let t = null;
  const r = /* @__PURE__ */ new Set();
  function i(u) {
    if (No(n, u) && (n = u, t)) {
      const l = !Oi.length;
      for (const d of r)
        d[1](), Oi.push(d, n);
      if (l) {
        for (let d = 0; d < Oi.length; d += 2)
          Oi[d][0](Oi[d + 1]);
        Oi.length = 0;
      }
    }
  }
  function a(u) {
    i(u(
      /** @type {T} */
      n
    ));
  }
  function s(u, l = pe) {
    const d = [u, l];
    return r.add(d), r.size === 1 && (t = e(i, a) || pe), u(
      /** @type {T} */
      n
    ), () => {
      r.delete(d), r.size === 0 && t && (t(), t = null);
    };
  }
  return { set: i, update: a, subscribe: s };
}
function Ff(n) {
  let e;
  return $u(n, (t) => e = t)(), e;
}
let Za = !1, Io = Symbol();
function Ii(n, e, t) {
  const r = t[e] ?? (t[e] = {
    store: null,
    source: /* @__PURE__ */ Au(void 0),
    unsubscribe: pe
  });
  if (r.store !== n && !(Io in t))
    if (r.unsubscribe(), r.store = n ?? null, n == null)
      r.source.v = void 0, r.unsubscribe = pe;
    else {
      var i = !0;
      r.unsubscribe = $u(n, (a) => {
        i ? r.source.v = a : G(r.source, a);
      }), i = !1;
    }
  return n && Io in t ? Ff(n) : o(r.source);
}
function Qn(n, e) {
  return n.set(e), e;
}
function Si() {
  const n = {};
  function e() {
    Ls(() => {
      for (var t in n)
        n[t].unsubscribe();
      us(n, Io, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [n, e];
}
function Nf(n) {
  var e = Za;
  try {
    return Za = !1, [n(), Za];
  } finally {
    Za = e;
  }
}
const Uf = {
  get(n, e) {
    if (!n.exclude.includes(e))
      return n.props[e];
  },
  set(n, e) {
    return !1;
  },
  getOwnPropertyDescriptor(n, e) {
    if (!n.exclude.includes(e) && e in n.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: n.props[e]
      };
  },
  has(n, e) {
    return n.exclude.includes(e) ? !1 : e in n.props;
  },
  ownKeys(n) {
    return Reflect.ownKeys(n.props).filter((e) => !n.exclude.includes(e));
  }
};
// @__NO_SIDE_EFFECTS__
function We(n, e, t) {
  return new Proxy(
    { props: n, exclude: e },
    Uf
  );
}
const Hf = {
  get(n, e) {
    let t = n.props.length;
    for (; t--; ) {
      let r = n.props[t];
      if (Pi(r) && (r = r()), typeof r == "object" && r !== null && e in r) return r[e];
    }
  },
  set(n, e, t) {
    let r = n.props.length;
    for (; r--; ) {
      let i = n.props[r];
      Pi(i) && (i = i());
      const a = Nr(i, e);
      if (a && a.set)
        return a.set(t), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(n, e) {
    let t = n.props.length;
    for (; t--; ) {
      let r = n.props[t];
      if (Pi(r) && (r = r()), typeof r == "object" && r !== null && e in r) {
        const i = Nr(r, e);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(n, e) {
    if (e === $n || e === du) return !1;
    for (let t of n.props)
      if (Pi(t) && (t = t()), t != null && e in t) return !0;
    return !1;
  },
  ownKeys(n) {
    const e = [];
    for (let t of n.props)
      if (Pi(t) && (t = t()), !!t) {
        for (const r in t)
          e.includes(r) || e.push(r);
        for (const r of Object.getOwnPropertySymbols(t))
          e.includes(r) || e.push(r);
      }
    return e;
  }
};
function Ye(...n) {
  return new Proxy({ props: n }, Hf);
}
function m(n, e, t, r) {
  var S;
  var i = !aa || (t & 2) !== 0, a = (t & 8) !== 0, s = (t & 16) !== 0, u = (
    /** @type {V} */
    r
  ), l = !0, d = () => (l && (l = !1, u = s ? Zr(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), u), c;
  if (a) {
    var h = $n in n || du in n;
    c = ((S = Nr(n, e)) == null ? void 0 : S.set) ?? (h && e in n ? (A) => n[e] = A : void 0);
  }
  var f, g = !1;
  a ? [f, g] = Nf(() => (
    /** @type {V} */
    n[e]
  )) : f = /** @type {V} */
  n[e], f === void 0 && r !== void 0 && (f = d(), c && (i && _c(), c(f)));
  var v;
  if (i ? v = () => {
    var A = (
      /** @type {V} */
      n[e]
    );
    return A === void 0 ? d() : (l = !0, A);
  } : v = () => {
    var A = (
      /** @type {V} */
      n[e]
    );
    return A !== void 0 && (u = /** @type {V} */
    void 0), A === void 0 ? u : A;
  }, i && !(t & 4))
    return v;
  if (c) {
    var p = n.$$legacy;
    return (
      /** @type {() => V} */
      function(A, T) {
        return arguments.length > 0 ? ((!i || !T || p || g) && c(T ? v() : A), A) : v();
      }
    );
  }
  var _ = !1, y = (t & 1 ? Ts : Uo)(() => (_ = !1, v()));
  a && o(y);
  var w = (
    /** @type {Effect} */
    ke
  );
  return (
    /** @type {() => V} */
    function(A, T) {
      if (arguments.length > 0) {
        const I = T ? o(y) : i && a ? Ce(A) : A;
        return G(y, I), _ = !0, u !== void 0 && (u = I), A;
      }
      return Ei && _ || w.f & yi ? y.v : o(y);
    }
  );
}
const Bf = "5";
var iu;
typeof window < "u" && ((iu = window.__svelte ?? (window.__svelte = {})).v ?? (iu.v = /* @__PURE__ */ new Set())).add(Bf);
var bo = function(n, e) {
  return bo = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
  }, bo(n, e);
};
function _n(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  bo(n, e);
  function t() {
    this.constructor = n;
  }
  n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var qe = function() {
  return qe = Object.assign || function(e) {
    for (var t, r = 1, i = arguments.length; r < i; r++) {
      t = arguments[r];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, qe.apply(this, arguments);
};
function Gf(n, e, t, r) {
  function i(a) {
    return a instanceof t ? a : new t(function(s) {
      s(a);
    });
  }
  return new (t || (t = Promise))(function(a, s) {
    function u(c) {
      try {
        d(r.next(c));
      } catch (h) {
        s(h);
      }
    }
    function l(c) {
      try {
        d(r.throw(c));
      } catch (h) {
        s(h);
      }
    }
    function d(c) {
      c.done ? a(c.value) : i(c.value).then(u, l);
    }
    d((r = r.apply(n, e || [])).next());
  });
}
function Vf(n, e) {
  var t = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, i, a, s = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return s.next = u(0), s.throw = u(1), s.return = u(2), typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function u(d) {
    return function(c) {
      return l([d, c]);
    };
  }
  function l(d) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, d[0] && (t = 0)), t; ) try {
      if (r = 1, i && (a = d[0] & 2 ? i.return : d[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, d[1])).done) return a;
      switch (i = 0, a && (d = [d[0] & 2, a.value]), d[0]) {
        case 0:
        case 1:
          a = d;
          break;
        case 4:
          return t.label++, { value: d[1], done: !1 };
        case 5:
          t.label++, i = d[1], d = [0];
          continue;
        case 7:
          d = t.ops.pop(), t.trys.pop();
          continue;
        default:
          if (a = t.trys, !(a = a.length > 0 && a[a.length - 1]) && (d[0] === 6 || d[0] === 2)) {
            t = 0;
            continue;
          }
          if (d[0] === 3 && (!a || d[1] > a[0] && d[1] < a[3])) {
            t.label = d[1];
            break;
          }
          if (d[0] === 6 && t.label < a[1]) {
            t.label = a[1], a = d;
            break;
          }
          if (a && t.label < a[2]) {
            t.label = a[2], t.ops.push(d);
            break;
          }
          a[2] && t.ops.pop(), t.trys.pop();
          continue;
      }
      d = e.call(n, t);
    } catch (c) {
      d = [6, c], i = 0;
    } finally {
      r = a = 0;
    }
    if (d[0] & 5) throw d[1];
    return { value: d[0] ? d[1] : void 0, done: !0 };
  }
}
function Hn(n) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && n[e], r = 0;
  if (t) return t.call(n);
  if (n && typeof n.length == "number") return {
    next: function() {
      return n && r >= n.length && (n = void 0), { value: n && n[r++], done: !n };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function xl(n, e) {
  var t = typeof Symbol == "function" && n[Symbol.iterator];
  if (!t) return n;
  var r = t.call(n), i, a = [], s;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = r.next()).done; ) a.push(i.value);
  } catch (u) {
    s = { error: u };
  } finally {
    try {
      i && !i.done && (t = r.return) && t.call(r);
    } finally {
      if (s) throw s.error;
    }
  }
  return a;
}
function zf(n, e, t) {
  if (t || arguments.length === 2) for (var r = 0, i = e.length, a; r < i; r++)
    (a || !(r in e)) && (a || (a = Array.prototype.slice.call(e, 0, r)), a[r] = e[r]);
  return n.concat(a || Array.prototype.slice.call(e));
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
var In = (
  /** @class */
  function() {
    function n(e) {
      e === void 0 && (e = {}), this.adapter = e;
    }
    return Object.defineProperty(n, "cssClasses", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n, "strings", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n, "numbers", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n, "defaultAdapter", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.init = function() {
    }, n.prototype.destroy = function() {
    }, n;
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
function qf(n) {
  return n === void 0 && (n = window), Wf(n) ? { passive: !0 } : !1;
}
function Wf(n) {
  n === void 0 && (n = window);
  var e = !1;
  try {
    var t = {
      // This function will be called when the browser
      // attempts to access the passive property.
      get passive() {
        return e = !0, !1;
      }
    }, r = function() {
    };
    n.document.addEventListener("test", r, t), n.document.removeEventListener("test", r, t);
  } catch {
    e = !1;
  }
  return e;
}
const ed = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: qf
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
function jf(n, e) {
  if (n.closest)
    return n.closest(e);
  for (var t = n; t; ) {
    if (td(t, e))
      return t;
    t = t.parentElement;
  }
  return null;
}
function td(n, e) {
  var t = n.matches || n.webkitMatchesSelector || n.msMatchesSelector;
  return t.call(n, e);
}
function Zf(n) {
  var e = n;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var t = e.cloneNode(!0);
  t.style.setProperty("position", "absolute"), t.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(t);
  var r = t.scrollWidth;
  return document.documentElement.removeChild(t), r;
}
const Ua = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: jf,
  estimateScrollWidth: Zf,
  matches: td
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
var Xf = {
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
var Kf = (
  /** @class */
  function(n) {
    _n(e, n);
    function e(t) {
      var r = n.call(this, qe(qe({}, e.defaultAdapter), t)) || this;
      return r.shakeAnimationEndHandler = function() {
        r.handleShakeAnimationEnd();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Xf;
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
    }, e.prototype.shake = function(t) {
      var r = e.cssClasses.LABEL_SHAKE;
      t ? this.adapter.addClass(r) : this.adapter.removeClass(r);
    }, e.prototype.float = function(t) {
      var r = e.cssClasses, i = r.LABEL_FLOAT_ABOVE, a = r.LABEL_SHAKE;
      t ? this.adapter.addClass(i) : (this.adapter.removeClass(i), this.adapter.removeClass(a));
    }, e.prototype.setRequired = function(t) {
      var r = e.cssClasses.LABEL_REQUIRED;
      t ? this.adapter.addClass(r) : this.adapter.removeClass(r);
    }, e.prototype.handleShakeAnimationEnd = function() {
      var t = e.cssClasses.LABEL_SHAKE;
      this.adapter.removeClass(t);
    }, e;
  }(In)
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
var ei = {
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
var Yf = (
  /** @class */
  function(n) {
    _n(e, n);
    function e(t) {
      var r = n.call(this, qe(qe({}, e.defaultAdapter), t)) || this;
      return r.transitionEndHandler = function(i) {
        r.handleTransitionEnd(i);
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ei;
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
      this.adapter.removeClass(ei.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(ei.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(t) {
      this.adapter.setStyle("transform-origin", t + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(ei.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(t) {
      var r = this.adapter.hasClass(ei.LINE_RIPPLE_DEACTIVATING);
      t.propertyName === "opacity" && r && (this.adapter.removeClass(ei.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(ei.LINE_RIPPLE_DEACTIVATING));
    }, e;
  }(In)
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
var Jf = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, wl = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, Qf = {
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
var $f = (
  /** @class */
  function(n) {
    _n(e, n);
    function e(t) {
      return n.call(this, qe(qe({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Jf;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Qf;
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
    }), e.prototype.notch = function(t) {
      var r = e.cssClasses.OUTLINE_NOTCHED;
      t > 0 && (t += wl.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(t), this.adapter.addClass(r);
    }, e.prototype.closeNotch = function() {
      var t = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(t), this.adapter.removeNotchWidthProperty();
    }, e;
  }(In)
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
var eh = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, th = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Tl = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
}, Xa;
function nh(n, e) {
  e === void 0 && (e = !1);
  var t = n.CSS, r = Xa;
  if (typeof Xa == "boolean" && !e)
    return Xa;
  var i = t && typeof t.supports == "function";
  if (!i)
    return !1;
  var a = t.supports("--css-vars", "yes"), s = t.supports("(--css-vars: yes)") && t.supports("color", "#00000000");
  return r = a || s, e || (Xa = r), r;
}
function rh(n, e, t) {
  if (!n)
    return { x: 0, y: 0 };
  var r = e.x, i = e.y, a = r + t.left, s = i + t.top, u, l;
  if (n.type === "touchstart") {
    var d = n;
    u = d.changedTouches[0].pageX - a, l = d.changedTouches[0].pageY - s;
  } else {
    var c = n;
    u = c.pageX - a, l = c.pageY - s;
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
var Dl = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Ll = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Ka = [], ih = (
  /** @class */
  function(n) {
    _n(e, n);
    function e(t) {
      var r = n.call(this, qe(qe({}, e.defaultAdapter), t)) || this;
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
        return eh;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return th;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Tl;
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
      var t = this, r = this.supportsPressRipple();
      if (this.registerRootHandlers(r), r) {
        var i = e.cssClasses, a = i.ROOT, s = i.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.addClass(a), t.adapter.isUnbounded() && (t.adapter.addClass(s), t.layoutInternal());
        });
      }
    }, e.prototype.destroy = function() {
      var t = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
        var r = e.cssClasses, i = r.ROOT, a = r.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.removeClass(i), t.adapter.removeClass(a), t.removeCssVars();
        });
      }
      this.deregisterRootHandlers(), this.deregisterDeactivationHandlers();
    }, e.prototype.activate = function(t) {
      this.activateImpl(t);
    }, e.prototype.deactivate = function() {
      this.deactivateImpl();
    }, e.prototype.layout = function() {
      var t = this;
      this.layoutFrame && cancelAnimationFrame(this.layoutFrame), this.layoutFrame = requestAnimationFrame(function() {
        t.layoutInternal(), t.layoutFrame = 0;
      });
    }, e.prototype.setUnbounded = function(t) {
      var r = e.cssClasses.UNBOUNDED;
      t ? this.adapter.addClass(r) : this.adapter.removeClass(r);
    }, e.prototype.handleFocus = function() {
      var t = this;
      requestAnimationFrame(function() {
        return t.adapter.addClass(e.cssClasses.BG_FOCUSED);
      });
    }, e.prototype.handleBlur = function() {
      var t = this;
      requestAnimationFrame(function() {
        return t.adapter.removeClass(e.cssClasses.BG_FOCUSED);
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
    }, e.prototype.registerRootHandlers = function(t) {
      var r, i;
      if (t) {
        try {
          for (var a = Hn(Dl), s = a.next(); !s.done; s = a.next()) {
            var u = s.value;
            this.adapter.registerInteractionHandler(u, this.activateHandler);
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
    }, e.prototype.registerDeactivationHandlers = function(t) {
      var r, i;
      if (t.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var a = Hn(Ll), s = a.next(); !s.done; s = a.next()) {
            var u = s.value;
            this.adapter.registerDocumentInteractionHandler(u, this.deactivateHandler);
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
      var t, r;
      try {
        for (var i = Hn(Dl), a = i.next(); !a.done; a = i.next()) {
          var s = a.value;
          this.adapter.deregisterInteractionHandler(s, this.activateHandler);
        }
      } catch (u) {
        t = { error: u };
      } finally {
        try {
          a && !a.done && (r = i.return) && r.call(i);
        } finally {
          if (t) throw t.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, e.prototype.deregisterDeactivationHandlers = function() {
      var t, r;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var i = Hn(Ll), a = i.next(); !a.done; a = i.next()) {
          var s = a.value;
          this.adapter.deregisterDocumentInteractionHandler(s, this.deactivateHandler);
        }
      } catch (u) {
        t = { error: u };
      } finally {
        try {
          a && !a.done && (r = i.return) && r.call(i);
        } finally {
          if (t) throw t.error;
        }
      }
    }, e.prototype.removeCssVars = function() {
      var t = this, r = e.strings, i = Object.keys(r);
      i.forEach(function(a) {
        a.indexOf("VAR_") === 0 && t.adapter.updateCssVariable(r[a], null);
      });
    }, e.prototype.activateImpl = function(t) {
      var r = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var i = this.activationState;
        if (!i.isActivated) {
          var a = this.previousActivationEvent, s = a && t !== void 0 && a.type !== t.type;
          if (!s) {
            i.isActivated = !0, i.isProgrammatic = t === void 0, i.activationEvent = t, i.wasActivatedByPointer = i.isProgrammatic ? !1 : t !== void 0 && (t.type === "mousedown" || t.type === "touchstart" || t.type === "pointerdown");
            var u = t !== void 0 && Ka.length > 0 && Ka.some(function(l) {
              return r.adapter.containsEventTarget(l);
            });
            if (u) {
              this.resetActivationState();
              return;
            }
            t !== void 0 && (Ka.push(t.target), this.registerDeactivationHandlers(t)), i.wasElementMadeActive = this.checkElementMadeActive(t), i.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Ka = [], !i.wasElementMadeActive && t !== void 0 && (t.key === " " || t.keyCode === 32) && (i.wasElementMadeActive = r.checkElementMadeActive(t), i.wasElementMadeActive && r.animateActivation()), i.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(t) {
      return t !== void 0 && t.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var t = this, r = e.strings, i = r.VAR_FG_TRANSLATE_START, a = r.VAR_FG_TRANSLATE_END, s = e.cssClasses, u = s.FG_DEACTIVATION, l = s.FG_ACTIVATION, d = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var c = "", h = "";
      if (!this.adapter.isUnbounded()) {
        var f = this.getFgTranslationCoordinates(), g = f.startPoint, v = f.endPoint;
        c = g.x + "px, " + g.y + "px", h = v.x + "px, " + v.y + "px";
      }
      this.adapter.updateCssVariable(i, c), this.adapter.updateCssVariable(a, h), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(u), this.adapter.computeBoundingRect(), this.adapter.addClass(l), this.activationTimer = setTimeout(function() {
        t.activationTimerCallback();
      }, d);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var t = this.activationState, r = t.activationEvent, i = t.wasActivatedByPointer, a;
      i ? a = rh(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
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
      var t = this, r = e.cssClasses.FG_DEACTIVATION, i = this.activationState, a = i.hasDeactivationUXRun, s = i.isActivated, u = a || !s;
      u && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(r), this.fgDeactivationRemovalTimer = setTimeout(function() {
        t.adapter.removeClass(r);
      }, Tl.FG_DEACTIVATION_MS));
    }, e.prototype.rmBoundedActivationClasses = function() {
      var t = e.cssClasses.FG_ACTIVATION;
      this.adapter.removeClass(t), this.activationAnimationHasEnded = !1, this.adapter.computeBoundingRect();
    }, e.prototype.resetActivationState = function() {
      var t = this;
      this.previousActivationEvent = this.activationState.activationEvent, this.activationState = this.defaultActivationState(), setTimeout(function() {
        return t.previousActivationEvent = void 0;
      }, e.numbers.TAP_DELAY_MS);
    }, e.prototype.deactivateImpl = function() {
      var t = this, r = this.activationState;
      if (r.isActivated) {
        var i = qe({}, r);
        r.isProgrammatic ? (requestAnimationFrame(function() {
          t.animateDeactivation(i);
        }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
          t.activationState.hasDeactivationUXRun = !0, t.animateDeactivation(i), t.resetActivationState();
        }));
      }
    }, e.prototype.animateDeactivation = function(t) {
      var r = t.wasActivatedByPointer, i = t.wasElementMadeActive;
      (r || i) && this.runDeactivationUXLogicIfReady();
    }, e.prototype.layoutInternal = function() {
      var t = this;
      this.frame = this.adapter.computeBoundingRect();
      var r = Math.max(this.frame.height, this.frame.width), i = function() {
        var s = Math.sqrt(Math.pow(t.frame.width, 2) + Math.pow(t.frame.height, 2));
        return s + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? r : i();
      var a = Math.floor(r * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && a % 2 !== 0 ? this.initialSize = a - 1 : this.initialSize = a, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var t = e.strings, r = t.VAR_FG_SIZE, i = t.VAR_LEFT, a = t.VAR_TOP, s = t.VAR_FG_SCALE;
      this.adapter.updateCssVariable(r, this.initialSize + "px"), this.adapter.updateCssVariable(s, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(i, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(a, this.unboundedCoords.top + "px"));
    }, e;
  }(In)
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
var Qs = {
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
}, ah = {
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
}, Ol = {
  LABEL_SCALE: 0.75
}, sh = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], oh = [
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
var Rl = ["mousedown", "touchstart"], Ml = ["click", "keydown"], lh = (
  /** @class */
  function(n) {
    _n(e, n);
    function e(t, r) {
      r === void 0 && (r = {});
      var i = n.call(this, qe(qe({}, e.defaultAdapter), t)) || this;
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
        return ah;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Qs;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Ol;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var t = this.getNativeInput().type;
        return oh.indexOf(t) >= 0;
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
      var t, r, i, a;
      this.adapter.hasLabel() && this.getNativeInput().required && this.adapter.setLabelRequired(!0), this.adapter.isFocused() ? this.inputFocusHandler() : this.adapter.hasLabel() && this.shouldFloat && (this.notchOutline(!0), this.adapter.floatLabel(!0), this.styleFloating(!0)), this.adapter.registerInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.registerInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.registerInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var s = Hn(Rl), u = s.next(); !u.done; u = s.next()) {
          var l = u.value;
          this.adapter.registerInputInteractionHandler(l, this.setPointerXOffset);
        }
      } catch (h) {
        t = { error: h };
      } finally {
        try {
          u && !u.done && (r = s.return) && r.call(s);
        } finally {
          if (t) throw t.error;
        }
      }
      try {
        for (var d = Hn(Ml), c = d.next(); !c.done; c = d.next()) {
          var l = c.value;
          this.adapter.registerTextFieldInteractionHandler(l, this.textFieldInteractionHandler);
        }
      } catch (h) {
        i = { error: h };
      } finally {
        try {
          c && !c.done && (a = d.return) && a.call(d);
        } finally {
          if (i) throw i.error;
        }
      }
      this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler), this.setcharacterCounter(this.getValue().length);
    }, e.prototype.destroy = function() {
      var t, r, i, a;
      this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var s = Hn(Rl), u = s.next(); !u.done; u = s.next()) {
          var l = u.value;
          this.adapter.deregisterInputInteractionHandler(l, this.setPointerXOffset);
        }
      } catch (h) {
        t = { error: h };
      } finally {
        try {
          u && !u.done && (r = s.return) && r.call(s);
        } finally {
          if (t) throw t.error;
        }
      }
      try {
        for (var d = Hn(Ml), c = d.next(); !c.done; c = d.next()) {
          var l = c.value;
          this.adapter.deregisterTextFieldInteractionHandler(l, this.textFieldInteractionHandler);
        }
      } catch (h) {
        i = { error: h };
      } finally {
        try {
          c && !c.done && (a = d.return) && a.call(d);
        } finally {
          if (i) throw i.error;
        }
      }
      this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver);
    }, e.prototype.handleTextFieldInteraction = function() {
      var t = this.adapter.getNativeInput();
      t && t.disabled || (this.receivedUserInput = !0);
    }, e.prototype.handleValidationAttributeChange = function(t) {
      var r = this;
      t.some(function(i) {
        return sh.indexOf(i) > -1 ? (r.styleValidity(!0), r.adapter.setLabelRequired(r.getNativeInput().required), !0) : !1;
      }), t.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(t) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (t) {
          var r = this.adapter.getLabelWidth() * Ol.LABEL_SCALE;
          this.adapter.notchOutline(r);
        } else
          this.adapter.closeOutline();
    }, e.prototype.activateFocus = function() {
      this.isFocused = !0, this.styleFocused(this.isFocused), this.adapter.activateLineRipple(), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.helperText && (this.helperText.isPersistent() || !this.helperText.isValidation() || !this.valid) && this.helperText.showToScreenReader();
    }, e.prototype.setTransformOrigin = function(t) {
      if (!(this.isDisabled() || this.adapter.hasOutline())) {
        var r = t.touches, i = r ? r[0] : t, a = i.target.getBoundingClientRect(), s = i.clientX - a.left;
        this.adapter.setLineRippleTransformOrigin(s);
      }
    }, e.prototype.handleInput = function() {
      this.autoCompleteFocus(), this.setcharacterCounter(this.getValue().length);
    }, e.prototype.autoCompleteFocus = function() {
      this.receivedUserInput || this.activateFocus();
    }, e.prototype.deactivateFocus = function() {
      this.isFocused = !1, this.adapter.deactivateLineRipple();
      var t = this.isValid();
      this.styleValidity(t), this.styleFocused(this.isFocused), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.shouldFloat || (this.receivedUserInput = !1);
    }, e.prototype.getValue = function() {
      return this.getNativeInput().value;
    }, e.prototype.setValue = function(t) {
      if (this.getValue() !== t && (this.getNativeInput().value = t), this.setcharacterCounter(t.length), this.validateOnValueChange) {
        var r = this.isValid();
        this.styleValidity(r);
      }
      this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.validateOnValueChange && this.adapter.shakeLabel(this.shouldShake));
    }, e.prototype.isValid = function() {
      return this.useNativeValidation ? this.isNativeInputValid() : this.valid;
    }, e.prototype.setValid = function(t) {
      this.valid = t, this.styleValidity(t);
      var r = !t && !this.isFocused && !!this.getValue();
      this.adapter.hasLabel() && this.adapter.shakeLabel(r);
    }, e.prototype.setValidateOnValueChange = function(t) {
      this.validateOnValueChange = t;
    }, e.prototype.getValidateOnValueChange = function() {
      return this.validateOnValueChange;
    }, e.prototype.setUseNativeValidation = function(t) {
      this.useNativeValidation = t;
    }, e.prototype.isDisabled = function() {
      return this.getNativeInput().disabled;
    }, e.prototype.setDisabled = function(t) {
      this.getNativeInput().disabled = t, this.styleDisabled(t);
    }, e.prototype.setHelperTextContent = function(t) {
      this.helperText && this.helperText.setContent(t);
    }, e.prototype.setLeadingIconAriaLabel = function(t) {
      this.leadingIcon && this.leadingIcon.setAriaLabel(t);
    }, e.prototype.setLeadingIconContent = function(t) {
      this.leadingIcon && this.leadingIcon.setContent(t);
    }, e.prototype.setTrailingIconAriaLabel = function(t) {
      this.trailingIcon && this.trailingIcon.setAriaLabel(t);
    }, e.prototype.setTrailingIconContent = function(t) {
      this.trailingIcon && this.trailingIcon.setContent(t);
    }, e.prototype.setcharacterCounter = function(t) {
      if (this.characterCounter) {
        var r = this.getNativeInput().maxLength;
        if (r === -1)
          throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");
        this.characterCounter.setCounterValue(t, r);
      }
    }, e.prototype.isBadInput = function() {
      return this.getNativeInput().validity.badInput || !1;
    }, e.prototype.isNativeInputValid = function() {
      return this.getNativeInput().validity.valid;
    }, e.prototype.styleValidity = function(t) {
      var r = e.cssClasses.INVALID;
      if (t ? this.adapter.removeClass(r) : this.adapter.addClass(r), this.helperText) {
        this.helperText.setValidity(t);
        var i = this.helperText.isValidation();
        if (!i)
          return;
        var a = this.helperText.isVisible(), s = this.helperText.getId();
        a && s ? this.adapter.setInputAttr(Qs.ARIA_DESCRIBEDBY, s) : this.adapter.removeInputAttr(Qs.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.styleFocused = function(t) {
      var r = e.cssClasses.FOCUSED;
      t ? this.adapter.addClass(r) : this.adapter.removeClass(r);
    }, e.prototype.styleDisabled = function(t) {
      var r = e.cssClasses, i = r.DISABLED, a = r.INVALID;
      t ? (this.adapter.addClass(i), this.adapter.removeClass(a)) : this.adapter.removeClass(i), this.leadingIcon && this.leadingIcon.setDisabled(t), this.trailingIcon && this.trailingIcon.setDisabled(t);
    }, e.prototype.styleFloating = function(t) {
      var r = e.cssClasses.LABEL_FLOATING;
      t ? this.adapter.addClass(r) : this.adapter.removeClass(r);
    }, e.prototype.getNativeInput = function() {
      var t = this.adapter ? this.adapter.getNativeInput() : null;
      return t || {
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
  }(In)
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
var Pl = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, uh = {
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
var kl = ["click", "keydown"], dh = (
  /** @class */
  function(n) {
    _n(e, n);
    function e(t) {
      var r = n.call(this, qe(qe({}, e.defaultAdapter), t)) || this;
      return r.savedTabIndex = null, r.interactionHandler = function(i) {
        r.handleInteraction(i);
      }, r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Pl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return uh;
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
      var t, r;
      this.savedTabIndex = this.adapter.getAttr("tabindex");
      try {
        for (var i = Hn(kl), a = i.next(); !a.done; a = i.next()) {
          var s = a.value;
          this.adapter.registerInteractionHandler(s, this.interactionHandler);
        }
      } catch (u) {
        t = { error: u };
      } finally {
        try {
          a && !a.done && (r = i.return) && r.call(i);
        } finally {
          if (t) throw t.error;
        }
      }
    }, e.prototype.destroy = function() {
      var t, r;
      try {
        for (var i = Hn(kl), a = i.next(); !a.done; a = i.next()) {
          var s = a.value;
          this.adapter.deregisterInteractionHandler(s, this.interactionHandler);
        }
      } catch (u) {
        t = { error: u };
      } finally {
        try {
          a && !a.done && (r = i.return) && r.call(i);
        } finally {
          if (t) throw t.error;
        }
      }
    }, e.prototype.setDisabled = function(t) {
      this.savedTabIndex && (t ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", Pl.ICON_ROLE)));
    }, e.prototype.setAriaLabel = function(t) {
      this.adapter.setAttr("aria-label", t);
    }, e.prototype.setContent = function(t) {
      this.adapter.setContent(t);
    }, e.prototype.handleInteraction = function(t) {
      var r = t.key === "Enter" || t.keyCode === 13;
      (t.type === "click" || r) && (t.preventDefault(), this.adapter.notifyIconAction());
    }, e;
  }(In)
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
var $s = "mdc-dom-focus-sentinel", ch = (
  /** @class */
  function() {
    function n(e, t) {
      t === void 0 && (t = {}), this.root = e, this.options = t, this.elFocusedBeforeTrapFocus = null;
    }
    return n.prototype.trapFocus = function() {
      var e = this.getFocusableElements(this.root);
      if (e.length === 0)
        throw new Error("FocusTrap: Element must have at least one focusable child.");
      this.elFocusedBeforeTrapFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null, this.wrapTabFocus(this.root), this.options.skipInitialFocus || this.focusInitialElement(e, this.options.initialFocusEl);
    }, n.prototype.releaseFocus = function() {
      [].slice.call(this.root.querySelectorAll("." + $s)).forEach(function(e) {
        e.parentElement.removeChild(e);
      }), !this.options.skipRestoreFocus && this.elFocusedBeforeTrapFocus && this.elFocusedBeforeTrapFocus.focus();
    }, n.prototype.wrapTabFocus = function(e) {
      var t = this, r = this.createSentinel(), i = this.createSentinel();
      r.addEventListener("focus", function() {
        var a = t.getFocusableElements(e);
        a.length > 0 && a[a.length - 1].focus();
      }), i.addEventListener("focus", function() {
        var a = t.getFocusableElements(e);
        a.length > 0 && a[0].focus();
      }), e.insertBefore(r, e.children[0]), e.appendChild(i);
    }, n.prototype.focusInitialElement = function(e, t) {
      var r = 0;
      t && (r = Math.max(e.indexOf(t), 0)), e[r].focus();
    }, n.prototype.getFocusableElements = function(e) {
      var t = [].slice.call(e.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));
      return t.filter(function(r) {
        var i = r.getAttribute("aria-disabled") === "true" || r.getAttribute("disabled") != null || r.getAttribute("hidden") != null || r.getAttribute("aria-hidden") === "true", a = r.tabIndex >= 0 && r.getBoundingClientRect().width > 0 && !r.classList.contains($s) && !i, s = !1;
        if (a) {
          var u = getComputedStyle(r);
          s = u.display === "none" || u.visibility === "hidden";
        }
        return a && !s;
      });
    }, n.prototype.createSentinel = function() {
      var e = document.createElement("div");
      return e.setAttribute("tabindex", "0"), e.setAttribute("aria-hidden", "true"), e.classList.add($s), e;
    }, n;
  }()
);
const fh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FocusTrap: ch
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
var De = {
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
}, nn = /* @__PURE__ */ new Set();
nn.add(De.BACKSPACE);
nn.add(De.ENTER);
nn.add(De.SPACEBAR);
nn.add(De.PAGE_UP);
nn.add(De.PAGE_DOWN);
nn.add(De.END);
nn.add(De.HOME);
nn.add(De.ARROW_LEFT);
nn.add(De.ARROW_UP);
nn.add(De.ARROW_RIGHT);
nn.add(De.ARROW_DOWN);
nn.add(De.DELETE);
nn.add(De.ESCAPE);
nn.add(De.TAB);
var cn = {
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
}, rn = /* @__PURE__ */ new Map();
rn.set(cn.BACKSPACE, De.BACKSPACE);
rn.set(cn.ENTER, De.ENTER);
rn.set(cn.SPACEBAR, De.SPACEBAR);
rn.set(cn.PAGE_UP, De.PAGE_UP);
rn.set(cn.PAGE_DOWN, De.PAGE_DOWN);
rn.set(cn.END, De.END);
rn.set(cn.HOME, De.HOME);
rn.set(cn.ARROW_LEFT, De.ARROW_LEFT);
rn.set(cn.ARROW_UP, De.ARROW_UP);
rn.set(cn.ARROW_RIGHT, De.ARROW_RIGHT);
rn.set(cn.ARROW_DOWN, De.ARROW_DOWN);
rn.set(cn.DELETE, De.DELETE);
rn.set(cn.ESCAPE, De.ESCAPE);
rn.set(cn.TAB, De.TAB);
var Xr = /* @__PURE__ */ new Set();
Xr.add(De.PAGE_UP);
Xr.add(De.PAGE_DOWN);
Xr.add(De.END);
Xr.add(De.HOME);
Xr.add(De.ARROW_LEFT);
Xr.add(De.ARROW_UP);
Xr.add(De.ARROW_RIGHT);
Xr.add(De.ARROW_DOWN);
function It(n) {
  var e = n.key;
  if (nn.has(e))
    return e;
  var t = rn.get(n.keyCode);
  return t || De.UNKNOWN;
}
function He(n) {
  return Object.entries(n).filter(([e, t]) => e !== "" && t).map(([e]) => e).join(" ");
}
function Ge(n, e, t, r = { bubbles: !0 }) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  if (!n)
    throw new Error("Tried to dispatch event without element.");
  const i = new CustomEvent(e, Object.assign(Object.assign({}, r), { detail: t }));
  return n == null || n.dispatchEvent(i), i;
}
function xa(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const r = {};
  for (let i = 0; i < t.length; i++) {
    const a = t[i], s = a.indexOf("$");
    s !== -1 && e.indexOf(a.substring(0, s + 1)) !== -1 || e.indexOf(a) === -1 && (r[a] = n[a]);
  }
  return r;
}
function ut(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const r = {};
  for (let i = 0; i < t.length; i++) {
    const a = t[i];
    a.substring(0, e.length) === e && (r[a.substring(e.length)] = n[a]);
  }
  return r;
}
class sa {
  constructor() {
    this.elementMap = /* @__PURE__ */ new Map();
  }
  /**
   * Listen to an event on an element.
   */
  on(e, t, r, i) {
    this.elementMap.has(e) || this.elementMap.set(e, {});
    const a = this.elementMap.get(e);
    if (a == null)
      throw new Error("Event map couldn't be created.");
    t in a || (a[t] = /* @__PURE__ */ new Map()), a[t].set(r, lf(e, t, r, i));
  }
  /**
   * Unlisten to an event on an element.
   */
  off(e, t, r) {
    const i = this.elementMap.get(e);
    if (i == null || !(t in i))
      return;
    const a = i[t], s = a.get(r);
    s != null && (s(), a.delete(r), a.size === 0 && (delete i[t], Object.keys(i).length === 0 && this.elementMap.delete(e)));
  }
  /**
   * Unlisten to all events managed by this instance.
   */
  clear() {
    this.elementMap.forEach((e, t) => {
      for (let [r, i] of Object.entries(e))
        i.forEach((a, s) => {
          a();
        });
    }), this.elementMap.clear();
  }
}
function ie(n, e) {
  let t = [];
  if (e)
    for (let r = 0; r < e.length; r++) {
      const i = e[r], a = Array.isArray(i) ? i[0] : i;
      Array.isArray(i) && i.length > 1 ? t.push(a(n, i[1])) : t.push(a(n));
    }
  return {
    update(r) {
      if ((r && r.length || 0) != t.length)
        throw new Error("You must not change the length of an actions array.");
      if (r)
        for (let i = 0; i < r.length; i++) {
          const a = t[i];
          if (a && a.update) {
            const s = r[i];
            Array.isArray(s) && s.length > 1 ? a.update(s[1]) : a.update();
          }
        }
    },
    destroy() {
      for (let r = 0; r < t.length; r++) {
        const i = t[r];
        i && i.destroy && i.destroy();
      }
    }
  };
}
var hh = /* @__PURE__ */ st("<svg><!></svg>");
function Ps(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "tag", 3, "div"), i = /* @__PURE__ */ We(e, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
  const a = /* @__PURE__ */ te(() => [
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
  function u() {
    return s;
  }
  var l = { getElement: u }, d = oe(), c = K(d);
  {
    var h = (g) => {
      var v = hh();
      Be(v, () => ({ ...i }));
      var p = V(v);
      Ie(p, () => e.children ?? pe), xe(v, (_) => s = _, () => s), Le(v, (_, y) => ie == null ? void 0 : ie(_, y), t), E(g, v);
    }, f = (g) => {
      var v = oe(), p = K(v);
      {
        var _ = (w) => {
          var S = oe(), A = K(S);
          po(A, r, !1, (T, I) => {
            xe(T, (b) => s = b, () => s), Le(T, (b, C) => ie == null ? void 0 : ie(b, C), t), Be(T, () => ({ ...i }));
          }), E(w, S);
        }, y = (w) => {
          var S = oe(), A = K(S);
          po(A, r, !1, (T, I) => {
            xe(T, (x) => s = x, () => s), Le(T, (x, D) => ie == null ? void 0 : ie(x, D), t), Be(T, () => ({ ...i }));
            var b = oe(), C = K(b);
            Ie(C, () => e.children ?? pe), E(I, b);
          }), E(w, S);
        };
        ee(
          p,
          (w) => {
            o(a) ? w(_) : w(y, !1);
          },
          !0
        );
      }
      E(g, v);
    };
    ee(c, (g) => {
      r() === "svg" ? g(h) : g(f, !1);
    });
  }
  return E(n, d), Ee(l);
}
function Ya(n, e) {
  Ae(e, !0);
  const [t, r] = Si(), i = er(e.value);
  de(e.key, i), Se(() => {
    Qn(i, e.value);
  }), Rn(() => {
    i.set(void 0);
  });
  var a = oe(), s = K(a);
  Ie(s, () => e.children ?? pe), E(n, a), Ee(), r();
}
const { applyPassive: Fl } = ed, { matches: vh } = Ua;
function kn(n, { ripple: e = !0, surface: t = !1, unbounded: r = !1, disabled: i = !1, color: a, active: s, rippleElement: u, eventTarget: l, activeTarget: d, addClass: c = (v) => n.classList.add(v), removeClass: h = (v) => n.classList.remove(v), addStyle: f = (v, p) => n.style.setProperty(v, p), initPromise: g = Promise.resolve() } = {}) {
  let v, p = new sa(), _ = ye("SMUI:addLayoutListener"), y, w = s, S = l, A = d;
  function T() {
    t ? (c("mdc-ripple-surface"), a === "primary" ? (c("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")) : a === "secondary" ? (h("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")) : (h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary"))) : (h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), v && w !== s && (w = s, s ? v.activate() : s === !1 && v.deactivate()), e && !v ? (v = new ih({
      addClass: c,
      browserSupportsCssVars: () => nh(window),
      computeBoundingRect: () => (u || n).getBoundingClientRect(),
      containsEventTarget: (b) => n.contains(b),
      deregisterDocumentInteractionHandler: (b, C) => p.off(document.documentElement, b, C),
      deregisterInteractionHandler: (b, C) => p.off(l || n, b, C),
      deregisterResizeHandler: (b) => window.removeEventListener("resize", b),
      getWindowPageOffset: () => {
        var b, C;
        return {
          x: (b = window.pageXOffset) !== null && b !== void 0 ? b : window.scrollX,
          y: (C = window.pageYOffset) !== null && C !== void 0 ? C : window.scrollY
        };
      },
      isSurfaceActive: () => s ?? vh(d || n, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!r,
      registerDocumentInteractionHandler: (b, C) => {
        const x = Fl();
        p.on(document.documentElement, b, C, typeof x == "boolean" ? { capture: x } : x);
      },
      registerInteractionHandler: (b, C) => {
        const x = Fl();
        p.on(l || n, b, C, typeof x == "boolean" ? { capture: x } : x);
      },
      registerResizeHandler: (b) => p.on(window, "resize", b),
      removeClass: h,
      updateCssVariable: f
    }), g.then(() => {
      v && (v.init(), v.setUnbounded(r));
    })) : v && !e && g.then(() => {
      v && (v.destroy(), v = void 0, p.clear());
    }), v && (S !== l || A !== d) && (S = l, A = d, v.destroy(), requestAnimationFrame(() => {
      v && (v.init(), v.setUnbounded(r));
    })), !e && r && c("mdc-ripple-upgraded--unbounded");
  }
  T(), _ && (y = _(I));
  function I() {
    v && v.layout();
  }
  return {
    update(b) {
      ({
        ripple: e,
        surface: t,
        unbounded: r,
        disabled: i,
        color: a,
        active: s,
        rippleElement: u,
        eventTarget: l,
        activeTarget: d,
        addClass: c,
        removeClass: h,
        addStyle: f,
        initPromise: g
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (C) => n.classList.add(C), removeClass: (C) => n.classList.remove(C), addStyle: (C, x) => n.style.setProperty(C, x), initPromise: Promise.resolve() }, b)), T();
    },
    destroy() {
      v && (v.destroy(), v = void 0, p.clear(), h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), y && y();
    }
  };
}
var gh = /* @__PURE__ */ Z("<span><!></span>"), mh = /* @__PURE__ */ Z("<label><!></label>");
function hs(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "floatAbove", 15, !1), s = m(e, "required", 15, !1), u = m(e, "wrapped", 3, !1), l = /* @__PURE__ */ We(e, [
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
  ]), d, c = /* @__PURE__ */ le(void 0), h = new sa(), f = Ce({}), g = Ce({}), v = ye("SMUI:generic:input:props") ?? {}, p = a();
  Se(() => {
    o(c) && p !== a() && (p = a(), o(c).float(a()));
  });
  let _ = s();
  Se(() => {
    o(c) && _ !== s() && (_ = s(), o(c).setRequired(s()));
  });
  const y = ye("SMUI:floating-label:mount"), w = ye("SMUI:floating-label:unmount");
  rt(() => {
    G(
      c,
      new Kf({
        addClass: S,
        removeClass: A,
        getWidth: () => {
          var $, se;
          const J = L(), ue = J.cloneNode(!0);
          ($ = J.parentNode) == null || $.appendChild(ue), ue.classList.add("smui-floating-label--remove-transition"), ue.classList.add("smui-floating-label--force-size"), ue.classList.remove("mdc-floating-label--float-above");
          const F = ue.scrollWidth;
          return (se = J.parentNode) == null || se.removeChild(ue), F;
        },
        registerInteractionHandler: (J, ue) => h.on(L(), J, ue),
        deregisterInteractionHandler: (J, ue) => h.off(L(), J, ue)
      }),
      !0
    );
    const H = {
      get element() {
        return L();
      },
      addStyle: T,
      removeStyle: I
    };
    return y && y(H), o(c).init(), () => {
      var J;
      w && w(H), (J = o(c)) == null || J.destroy(), h.clear();
    };
  });
  function S(H) {
    f[H] || (f[H] = !0);
  }
  function A(H) {
    (!(H in f) || f[H]) && (f[H] = !1);
  }
  function T(H, J) {
    g[H] != J && (J === "" || J == null ? delete g[H] : g[H] = J);
  }
  function I(H) {
    H in g && delete g[H];
  }
  function b(H) {
    var J;
    (J = o(c)) == null || J.shake(H);
  }
  function C(H) {
    a(H);
  }
  function x(H) {
    s(H);
  }
  function D() {
    if (o(c) == null)
      throw new Error("Instance is undefined.");
    return o(c).getWidth();
  }
  function L() {
    return d;
  }
  var O = { shake: b, float: C, setRequired: x, getWidth: D, getElement: L }, R = oe(), re = K(R);
  {
    var q = (H) => {
      var J = gh();
      Be(J, (F, $) => ({ class: F, style: $, ...l }), [
        () => He({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": s(),
          ...f,
          [r()]: !0
        }),
        () => Object.entries(g).map(([F, $]) => `${F}: ${$};`).concat([i()]).join(" ")
      ]);
      var ue = V(J);
      Ie(ue, () => e.children ?? pe), xe(J, (F) => d = F, () => d), Le(J, (F, $) => ie == null ? void 0 : ie(F, $), t), E(H, J);
    }, N = (H) => {
      var J = mh();
      Be(
        J,
        (F, $) => ({
          class: F,
          style: $,
          for: e.for || (v ? v.id : void 0),
          ...l
        }),
        [
          () => He({
            "mdc-floating-label": !0,
            "mdc-floating-label--float-above": a(),
            "mdc-floating-label--required": s(),
            ...f,
            [r()]: !0
          }),
          () => Object.entries(g).map(([F, $]) => `${F}: ${$};`).concat([i()]).join(" ")
        ]
      );
      var ue = V(J);
      Ie(ue, () => e.children ?? pe), xe(J, (F) => d = F, () => d), Le(J, (F, $) => ie == null ? void 0 : ie(F, $), t), E(H, J);
    };
    ee(re, (H) => {
      u() ? H(q) : H(N, !1);
    });
  }
  return E(n, R), Ee(O);
}
var ph = /* @__PURE__ */ Z("<div></div>");
function nd(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "active", 3, !1), s = /* @__PURE__ */ We(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "active"
  ]), u, l = /* @__PURE__ */ le(void 0), d = new sa(), c = Ce({}), h = Ce({});
  rt(() => (G(
    l,
    new Yf({
      addClass: g,
      removeClass: v,
      hasClass: f,
      setStyle: p,
      registerEventHandler: (I, b) => d.on(S(), I, b),
      deregisterEventHandler: (I, b) => d.off(S(), I, b)
    }),
    !0
  ), o(l).init(), () => {
    var I;
    (I = o(l)) == null || I.destroy(), d.clear();
  }));
  function f(I) {
    return I in c ? c[I] : S().classList.contains(I);
  }
  function g(I) {
    c[I] || (c[I] = !0);
  }
  function v(I) {
    (!(I in c) || c[I]) && (c[I] = !1);
  }
  function p(I, b) {
    h[I] != b && (b === "" || b == null ? delete h[I] : h[I] = b);
  }
  function _() {
    var I;
    (I = o(l)) == null || I.activate();
  }
  function y() {
    var I;
    (I = o(l)) == null || I.deactivate();
  }
  function w(I) {
    var b;
    (b = o(l)) == null || b.setRippleCenter(I);
  }
  function S() {
    return u;
  }
  var A = { activate: _, deactivate: y, setRippleCenter: w, getElement: S }, T = ph();
  return Be(T, (I, b) => ({ class: I, style: b, ...s }), [
    () => He({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...c,
      [r()]: !0
    }),
    () => Object.entries(h).map(([I, b]) => `${I}: ${b};`).concat([i()]).join(" ")
  ]), xe(T, (I) => u = I, () => u), Le(T, (I, b) => ie == null ? void 0 : ie(I, b), t), E(n, T), Ee(A);
}
var _h = /* @__PURE__ */ Z('<div class="mdc-notched-outline__notch"><!></div>'), Ih = /* @__PURE__ */ Z('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function rd(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "notched", 3, !1), a = m(e, "noLabel", 3, !1), s = /* @__PURE__ */ We(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "notched",
    "noLabel",
    "children"
  ]), u, l = /* @__PURE__ */ le(void 0), d = /* @__PURE__ */ le(void 0), c = Ce({}), h = Ce({}), f;
  Se(() => {
    o(d) !== f && (o(d) ? (o(d).addStyle("transition-duration", "0s"), g("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      o(d) && o(d).removeStyle("transition-duration");
    })) : v("mdc-notched-outline--upgraded"), f = o(d));
  }), de("SMUI:floating-label:mount", (C) => {
    G(d, C, !0);
  }), de("SMUI:floating-label:unmount", () => {
    G(d, void 0);
  }), rt(() => (G(
    l,
    new $f({
      addClass: g,
      removeClass: v,
      setNotchWidthProperty: (C) => p("width", C + "px"),
      removeNotchWidthProperty: () => _("width")
    }),
    !0
  ), o(l).init(), () => {
    var C;
    (C = o(l)) == null || C.destroy();
  }));
  function g(C) {
    c[C] || (c[C] = !0);
  }
  function v(C) {
    (!(C in c) || c[C]) && (c[C] = !1);
  }
  function p(C, x) {
    h[C] != x && (x === "" || x == null ? delete h[C] : h[C] = x);
  }
  function _(C) {
    C in h && delete h[C];
  }
  function y(C) {
    var x;
    (x = o(l)) == null || x.notch(C);
  }
  function w() {
    var C;
    (C = o(l)) == null || C.closeNotch();
  }
  function S() {
    return u;
  }
  var A = { notch: y, closeNotch: w, getElement: S }, T = Ih();
  Be(T, (C) => ({ class: C, ...s }), [
    () => He({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": i(),
      "mdc-notched-outline--no-label": a(),
      ...c,
      [r()]: !0
    })
  ]);
  var I = Y(V(T), 2);
  {
    var b = (C) => {
      var x = _h(), D = V(x);
      Ie(D, () => e.children ?? pe), ce((L) => Ke(x, L), [
        () => Object.entries(h).map(([L, O]) => `${L}: ${O};`).join(" ")
      ]), E(C, x);
    };
    ee(I, (C) => {
      a() || C(b);
    });
  }
  return xe(T, (C) => u = C, () => u), Le(T, (C, x) => ie == null ? void 0 : ie(C, x), t), E(n, T), Ee(A);
}
function oa(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "component", 3, Ps), a = m(e, "tag", 3, "div"), s = m(e, "_smuiClass", 3, ""), u = m(e, "_smuiClassMap", 23, () => ({})), l = m(e, "_smuiContexts", 19, () => ({})), d = m(e, "_smuiProps", 19, () => ({})), c = /* @__PURE__ */ We(e, [
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
  Object.entries(u()).forEach(([y, w]) => {
    const S = ye(w);
    S && "subscribe" in S && f.push(S.subscribe((A) => {
      u()[y] = A;
    }));
  });
  for (let y in l())
    l().hasOwnProperty(y) && de(y, l()[y]);
  Rn(() => {
    for (const y of f)
      y();
  });
  function g() {
    return h.getElement();
  }
  var v = { getElement: g }, p = oe(), _ = K(p);
  {
    let y = /* @__PURE__ */ te(() => He({
      [s()]: !0,
      ...u(),
      [r()]: !0
    }));
    Na(_, i, (w, S) => {
      xe(
        S(w, Ye(
          {
            get tag() {
              return a();
            },
            get use() {
              return t();
            },
            get class() {
              return o(y);
            }
          },
          d,
          () => c,
          {
            children: (A, T) => {
              var I = oe(), b = K(I);
              Ie(b, () => e.children ?? pe), E(A, I);
            },
            $$slots: { default: !0 }
          }
        )),
        (A) => h = A,
        () => h
      );
    });
  }
  return E(n, p), Ee(v);
}
function bh(n, e) {
  Ae(e, !0);
  let t = /* @__PURE__ */ We(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return xe(
    oa(n, Ye({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => t, {
      children: (s, u) => {
        var l = oe(), d = K(l);
        Ie(d, () => e.children ?? pe), E(s, l);
      },
      $$slots: { default: !0 }
    })),
    (s) => r = s,
    () => r
  ), Ee(a);
}
function yh(n, e) {
  Ae(e, !0);
  let t = /* @__PURE__ */ We(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return xe(
    oa(n, Ye(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => t,
      {
        children: (s, u) => {
          var l = oe(), d = K(l);
          Ie(d, () => e.children ?? pe), E(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Ee(a);
}
function Ch(n, e) {
  Ae(e, !0);
  let t = /* @__PURE__ */ We(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return xe(
    oa(n, Ye(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => t,
      {
        children: (s, u) => {
          var l = oe(), d = K(l);
          Ie(d, () => e.children ?? pe), E(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Ee(a);
}
var Ah = /* @__PURE__ */ Z("<input/>");
function Eh(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "type", 3, "text"), a = m(e, "placeholder", 3, " "), s = m(e, "value", 15), u = m(e, "files", 15, null), l = m(e, "dirty", 15, !1), d = m(e, "invalid", 15, !1), c = m(e, "updateInvalid", 3, !0), h = m(e, "initialInvalid", 3, !1), f = m(e, "emptyValueNull", 19, () => s() === null), g = m(e, "emptyValueUndefined", 19, () => s() === void 0), v = /* @__PURE__ */ We(e, [
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
  ]), p, _ = Ce({}), y = Ce({});
  Se(() => {
    i() === "file" ? delete y.value : y.value = s() == null ? "" : s();
  }), rt(() => {
    c() && h() && d(D().matches(":invalid"));
  });
  function w(q) {
    return q === "" ? Number.NaN : +q;
  }
  function S(q) {
    if (i() === "file") {
      u(q.currentTarget.files);
      return;
    }
    if (q.currentTarget.value === "" && f()) {
      s(null);
      return;
    }
    if (q.currentTarget.value === "" && g()) {
      s(void 0);
      return;
    }
    switch (i()) {
      case "number":
      case "range":
        s(w(q.currentTarget.value));
        break;
      default:
        s(q.currentTarget.value);
        break;
    }
  }
  function A(q) {
    (i() === "file" || i() === "range") && S(q), l(!0), c() && d(D().matches(":invalid"));
  }
  function T(q) {
    return q in _ ? _[q] ?? null : D().getAttribute(q);
  }
  function I(q, N) {
    _[q] !== N && (_[q] = N);
  }
  function b(q) {
    (!(q in _) || _[q] != null) && (_[q] = void 0);
  }
  function C() {
    D().focus();
  }
  function x() {
    D().blur();
  }
  function D() {
    return p;
  }
  var L = { getAttr: T, addAttr: I, removeAttr: b, focus: C, blur: x, getElement: D }, O = Ah(), R = (q) => {
    var N;
    i() !== "file" && S(q), (N = e.oninput) == null || N.call(e, q);
  }, re = (q) => {
    var N;
    A(q), (N = e.onchange) == null || N.call(e, q);
  };
  return Be(
    O,
    (q) => ({
      class: q,
      type: i(),
      placeholder: a(),
      ...y,
      ..._,
      ...v,
      oninput: R,
      onchange: re
    }),
    [
      () => He({ "mdc-text-field__input": !0, [r()]: !0 })
    ],
    void 0,
    void 0,
    !0
  ), xe(O, (q) => p = q, () => p), Le(O, (q, N) => ie == null ? void 0 : ie(q, N), t), E(n, O), Ee(L);
}
var Sh = /* @__PURE__ */ Z("<textarea></textarea>");
function xh(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "value", 15, ""), s = m(e, "dirty", 15, !1), u = m(e, "invalid", 15, !1), l = m(e, "updateInvalid", 3, !0), d = m(e, "initialInvalid", 3, !1), c = m(e, "resizable", 3, !0), h = /* @__PURE__ */ We(e, [
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
  ]), f, g = Ce({});
  rt(() => {
    l() && d() && u(A().matches(":invalid"));
  });
  function v() {
    s(!0), l() && u(A().matches(":invalid"));
  }
  function p(C) {
    return C in g ? g[C] ?? null : A().getAttribute(C);
  }
  function _(C, x) {
    g[C] !== x && (g[C] = x);
  }
  function y(C) {
    (!(C in g) || g[C] != null) && (g[C] = void 0);
  }
  function w() {
    A().focus();
  }
  function S() {
    A().blur();
  }
  function A() {
    return f;
  }
  var T = { getAttr: p, addAttr: _, removeAttr: y, focus: w, blur: S, getElement: A }, I = Sh(), b = (C) => {
    var x;
    v(), (x = e.onchange) == null || x.call(e, C);
  };
  return Be(
    I,
    (C) => ({
      class: C,
      style: `${c() ? "" : "resize: none; "}${i()}`,
      ...g,
      ...h,
      onchange: b
    }),
    [
      () => He({ "mdc-text-field__input": !0, [r()]: !0 })
    ]
  ), xe(I, (C) => f = C, () => f), Le(I, (C, x) => ie == null ? void 0 : ie(C, x), t), Fa(() => kf(I, a)), E(n, I), Ee(T);
}
var wh = /* @__PURE__ */ Z('<span class="mdc-text-field__ripple"></span>'), Th = /* @__PURE__ */ Z("<!> <!>", 1), Dh = /* @__PURE__ */ Z("<span><!> <!></span>"), Lh = /* @__PURE__ */ Z("<!> <!> <!>", 1), Oh = /* @__PURE__ */ Z("<label><!> <!> <!> <!> <!> <!> <!></label>"), Rh = /* @__PURE__ */ Z("<div><!> <!> <!> <!> <!></div>"), Mh = /* @__PURE__ */ Z("<!> <!>", 1);
function Pr(n, e) {
  Ae(e, !0);
  const { applyPassive: t } = ed;
  let r = () => {
  };
  function i(U) {
    return U === r;
  }
  let a = m(e, "use", 19, () => []), s = m(e, "class", 3, ""), u = m(e, "style", 3, ""), l = m(e, "ripple", 3, !0), d = m(e, "disabled", 3, !1), c = m(e, "required", 3, !1), h = m(e, "textarea", 3, !1), f = m(e, "variant", 19, () => h() ? "outlined" : "standard"), g = m(e, "noLabel", 3, !1), v = m(e, "type", 3, "text"), p = m(e, "value", 15), _ = m(e, "files", 15, r), y = m(e, "invalid", 15, r), w = m(e, "updateInvalid", 19, () => i(y())), S = m(e, "initialInvalid", 3, !1), A = m(e, "dirty", 15, !1), T = m(e, "validateOnValueChange", 19, w), I = m(e, "useNativeValidation", 19, w), b = m(e, "withLeadingIcon", 3, r), C = m(e, "withTrailingIcon", 3, r), x = m(e, "input", 7), D = m(e, "floatingLabel", 7), L = m(e, "lineRipple", 7), O = m(e, "notchedOutline", 7), R = /* @__PURE__ */ We(e, [
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
  const re = p() !== void 0 || p() === void 0 && e.input$emptyValueUndefined || !i(_());
  i(_()) && _(null), i(y()) && y(!1);
  let q, N = /* @__PURE__ */ le(void 0), H = new sa(), J = Ce({}), ue = Ce({}), F = /* @__PURE__ */ le(void 0), $ = /* @__PURE__ */ le(!1), se = /* @__PURE__ */ le(Ce(S())), _e = ye("SMUI:addLayoutListener"), he, z, W = new Promise((U) => z = U), k, Q, X, fe;
  const be = /* @__PURE__ */ te(() => x() && x().getElement());
  Se(() => {
    (A() || o(se) || !w()) && o(N) && o(N).isValid() !== !y() && (w() ? y(!o(N).isValid()) : o(N).setValid(!y()));
  }), Se(() => {
    o(N) && o(N).getValidateOnValueChange() !== T() && o(N).setValidateOnValueChange(i(T()) ? !1 : T());
  }), Se(() => {
    o(N) && o(N).setUseNativeValidation(i(I()) ? !0 : I());
  }), Se(() => {
    o(N) && o(N).setDisabled(d());
  });
  let Ne = p();
  Se(() => {
    if (o(N) && re && Ne !== p()) {
      Ne = p();
      const U = `${p() == null ? "" : p()}`;
      o(N).getValue() !== U && o(N).setValue(U);
    }
  }), _e && (he = _e(P)), de("SMUI:textfield:leading-icon:mount", (U) => {
    k = U;
  }), de("SMUI:textfield:leading-icon:unmount", () => {
    k = void 0;
  }), de("SMUI:textfield:trailing-icon:mount", (U) => {
    Q = U;
  }), de("SMUI:textfield:trailing-icon:unmount", () => {
    Q = void 0;
  }), de("SMUI:textfield:helper-text:id", (U) => {
    G(F, U, !0);
  }), de("SMUI:textfield:helper-text:mount", (U) => {
    X = U;
  }), de("SMUI:textfield:helper-text:unmount", () => {
    G(F, void 0), X = void 0;
  }), de("SMUI:textfield:character-counter:mount", (U) => {
    fe = U;
  }), de("SMUI:textfield:character-counter:unmount", () => {
    fe = void 0;
  }), rt(() => {
    var U;
    if (G(
      N,
      new lh(
        {
          // getRootAdapterMethods_
          addClass: Je,
          removeClass: Oe,
          hasClass: tt,
          registerTextFieldInteractionHandler: (ne, Te) => H.on(j(), ne, Te),
          deregisterTextFieldInteractionHandler: (ne, Te) => H.off(j(), ne, Te),
          registerValidationAttributeChangeHandler: (ne) => {
            const Te = (Ut) => Ut.map((an) => an.attributeName).filter((an) => an), ot = new MutationObserver((Ut) => {
              I() && ne(Te(Ut));
            }), pt = { attributes: !0 };
            return x() && ot.observe(x().getElement(), pt), ot;
          },
          deregisterValidationAttributeChangeHandler: (ne) => {
            ne.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var ne;
            return ((ne = x()) == null ? void 0 : ne.getElement()) ?? null;
          },
          setInputAttr: (ne, Te) => {
            var ot;
            (ot = x()) == null || ot.addAttr(ne, Te);
          },
          removeInputAttr: (ne) => {
            var Te;
            (Te = x()) == null || Te.removeAttr(ne);
          },
          isFocused: () => {
            var ne;
            return document.activeElement === ((ne = x()) == null ? void 0 : ne.getElement());
          },
          registerInputInteractionHandler: (ne, Te) => {
            var pt;
            const ot = (pt = x()) == null ? void 0 : pt.getElement();
            if (ot) {
              const Ut = t();
              H.on(ot, ne, Te, typeof Ut == "boolean" ? { capture: Ut } : Ut);
            }
          },
          deregisterInputInteractionHandler: (ne, Te) => {
            var pt;
            const ot = (pt = x()) == null ? void 0 : pt.getElement();
            ot && H.off(ot, ne, Te);
          },
          // getLabelAdapterMethods_
          floatLabel: (ne) => D() && D().float(ne),
          getLabelWidth: () => D() ? D().getWidth() : 0,
          hasLabel: () => !!D(),
          shakeLabel: (ne) => D() && D().shake(ne),
          setLabelRequired: (ne) => D() && D().setRequired(ne),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => L() && L().activate(),
          deactivateLineRipple: () => L() && L().deactivate(),
          setLineRippleTransformOrigin: (ne) => L() && L().setRippleCenter(ne),
          // getOutlineAdapterMethods_
          closeOutline: () => O() && O().closeNotch(),
          hasOutline: () => !!O(),
          notchOutline: (ne) => O() && O().notch(ne)
        },
        {
          get helperText() {
            return X;
          },
          get characterCounter() {
            return fe;
          },
          get leadingIcon() {
            return k;
          },
          get trailingIcon() {
            return Q;
          }
        }
      ),
      !0
    ), re) {
      if (x() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (U = o(N)) == null || U.init();
    } else
      Bu().then(() => {
        var ne;
        if (x() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (ne = o(N)) == null || ne.init();
      });
    return z(), () => {
      var ne;
      (ne = o(N)) == null || ne.destroy(), H.clear();
    };
  }), Rn(() => {
    he && he();
  });
  function tt(U) {
    return U in J ? J[U] ?? null : j().classList.contains(U);
  }
  function Je(U) {
    J[U] || (J[U] = !0);
  }
  function Oe(U) {
    (!(U in J) || J[U]) && (J[U] = !1);
  }
  function mt(U, ne) {
    ue[U] != ne && (ne === "" || ne == null ? delete ue[U] : ue[U] = ne);
  }
  function kt() {
    var U;
    (U = x()) == null || U.focus();
  }
  function Ft() {
    var U;
    (U = x()) == null || U.blur();
  }
  function P() {
    if (o(N)) {
      const U = o(N).shouldFloat;
      o(N).notchOutline(U);
    }
  }
  function j() {
    return q;
  }
  var ve = { focus: kt, blur: Ft, layout: P, getElement: j }, Pe = Mh(), Nt = K(Pe);
  {
    var fn = (U) => {
      var ne = Oh();
      Be(ne, (Ue, Qe, je) => ({ class: Ue, style: Qe, for: void 0, ...je }), [
        () => He({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": d(),
          "mdc-text-field--textarea": h(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !h(),
          "mdc-text-field--no-label": g() || e.label == null,
          "mdc-text-field--label-floating": o($) || p() != null && p() !== "",
          "mdc-text-field--with-leading-icon": i(b()) ? e.leadingIcon : b(),
          "mdc-text-field--with-trailing-icon": i(C()) ? e.trailingIcon : C(),
          "mdc-text-field--with-internal-counter": h() && e.internalCounter,
          "mdc-text-field--invalid": y(),
          ...J,
          [s()]: !0
        }),
        () => Object.entries(ue).map(([Ue, Qe]) => `${Ue}: ${Qe};`).concat([u()]).join(" "),
        () => xa(R, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Te = V(ne);
      {
        var ot = (Ue) => {
          var Qe = Th(), je = K(Qe);
          {
            var Bt = (Ct) => {
              var Lt = wh();
              E(Ct, Lt);
            };
            ee(je, (Ct) => {
              f() === "filled" && Ct(Bt);
            });
          }
          var Mn = Y(je, 2);
          {
            var $e = (Ct) => {
              {
                let Lt = /* @__PURE__ */ te(() => o($) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), ze = /* @__PURE__ */ te(() => ut(R, "label$"));
                xe(
                  hs(Ct, Ye(
                    {
                      get floatAbove() {
                        return o(Lt);
                      },
                      get required() {
                        return c();
                      },
                      wrapped: !0
                    },
                    () => o(ze),
                    {
                      children: (Ot, ar) => {
                        var bn = oe(), At = K(bn);
                        {
                          var Gt = (Xt) => {
                          }, yn = (Xt) => {
                            var Kr = oe(), Cn = K(Kr);
                            {
                              var Sr = (An) => {
                                var sr = at();
                                ce(() => Me(sr, e.label)), E(An, sr);
                              }, la = (An) => {
                                var sr = oe(), Vn = K(sr);
                                Ie(Vn, () => e.label), E(An, sr);
                              };
                              ee(
                                Cn,
                                (An) => {
                                  typeof e.label == "string" ? An(Sr) : An(la, !1);
                                },
                                !0
                              );
                            }
                            E(Xt, Kr);
                          };
                          ee(At, (Xt) => {
                            e.label == null ? Xt(Gt) : Xt(yn, !1);
                          });
                        }
                        E(Ot, bn);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (Ot) => D(Ot),
                  () => D()
                );
              }
            };
            ee(Mn, (Ct) => {
              !g() && e.label != null && Ct($e);
            });
          }
          E(Ue, Qe);
        };
        ee(Te, (Ue) => {
          !h() && f() !== "outlined" && Ue(ot);
        });
      }
      var pt = Y(Te, 2);
      {
        var Ut = (Ue) => {
          {
            let Qe = /* @__PURE__ */ te(() => g() || e.label == null), je = /* @__PURE__ */ te(() => ut(R, "outline$"));
            xe(
              rd(Ue, Ye(
                {
                  get noLabel() {
                    return o(Qe);
                  }
                },
                () => o(je),
                {
                  children: (Bt, Mn) => {
                    var $e = oe(), Ct = K($e);
                    {
                      var Lt = (ze) => {
                        {
                          let Ot = /* @__PURE__ */ te(() => o($) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), ar = /* @__PURE__ */ te(() => ut(R, "label$"));
                          xe(
                            hs(ze, Ye(
                              {
                                get floatAbove() {
                                  return o(Ot);
                                },
                                get required() {
                                  return c();
                                },
                                wrapped: !0
                              },
                              () => o(ar),
                              {
                                children: (bn, At) => {
                                  var Gt = oe(), yn = K(Gt);
                                  {
                                    var Xt = (Cn) => {
                                    }, Kr = (Cn) => {
                                      var Sr = oe(), la = K(Sr);
                                      {
                                        var An = (Vn) => {
                                          var Yr = at();
                                          ce(() => Me(Yr, e.label)), E(Vn, Yr);
                                        }, sr = (Vn) => {
                                          var Yr = oe(), zs = K(Yr);
                                          Ie(zs, () => e.label), E(Vn, Yr);
                                        };
                                        ee(
                                          la,
                                          (Vn) => {
                                            typeof e.label == "string" ? Vn(An) : Vn(sr, !1);
                                          },
                                          !0
                                        );
                                      }
                                      E(Cn, Sr);
                                    };
                                    ee(yn, (Cn) => {
                                      e.label == null ? Cn(Xt) : Cn(Kr, !1);
                                    });
                                  }
                                  E(bn, Gt);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (bn) => D(bn),
                            () => D()
                          );
                        }
                      };
                      ee(Ct, (ze) => {
                        !g() && e.label != null && ze(Lt);
                      });
                    }
                    E(Bt, $e);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (Bt) => O(Bt),
              () => O()
            );
          }
        };
        ee(pt, (Ue) => {
          (h() || f() === "outlined") && Ue(Ut);
        });
      }
      var an = Y(pt, 2);
      Ya(an, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (Ue, Qe) => {
          var je = oe(), Bt = K(je);
          Ie(Bt, () => e.leadingIcon ?? pe), E(Ue, je);
        },
        $$slots: { default: !0 }
      });
      var xi = Y(an, 2);
      Ie(xi, () => e.children ?? pe);
      var ft = Y(xi, 2);
      {
        var Ht = (Ue) => {
          var Qe = Dh(), je = V(Qe);
          {
            let Mn = /* @__PURE__ */ te(() => ut(R, "input$"));
            xe(
              xh(je, Ye(
                {
                  get disabled() {
                    return d();
                  },
                  get required() {
                    return c();
                  },
                  get updateInvalid() {
                    return w();
                  },
                  get initialInvalid() {
                    return o(se);
                  },
                  get "aria-controls"() {
                    return o(F);
                  },
                  get "aria-describedby"() {
                    return o(F);
                  }
                },
                () => o(Mn),
                {
                  onblur: ($e) => {
                    var Ct;
                    G($, !1), G(se, !0), Ge(j(), "blur", $e), (Ct = e.input$onblur) == null || Ct.call(e, $e);
                  },
                  onfocus: ($e) => {
                    var Ct;
                    G($, !0), Ge(j(), "focus", $e), (Ct = e.input$onfocus) == null || Ct.call(e, $e);
                  },
                  get value() {
                    return p();
                  },
                  set value($e) {
                    p($e);
                  },
                  get dirty() {
                    return A();
                  },
                  set dirty($e) {
                    A($e);
                  },
                  get invalid() {
                    return y();
                  },
                  set invalid($e) {
                    y($e);
                  }
                }
              )),
              ($e) => x($e),
              () => x()
            );
          }
          var Bt = Y(je, 2);
          Ie(Bt, () => e.internalCounter ?? pe), ce((Mn) => Ir(Qe, 1, Mn), [
            () => Zu(He({
              "mdc-text-field__resizer": !("input$resizable" in R) || e.input$resizable
            }))
          ]), E(Ue, Qe);
        }, sn = (Ue) => {
          var Qe = Lh(), je = K(Qe);
          {
            var Bt = (Lt) => {
              var ze = oe(), Ot = K(ze);
              {
                var ar = (At) => {
                  yh(At, {
                    children: (Gt, yn) => {
                      var Xt = at();
                      ce(() => Me(Xt, e.prefix)), E(Gt, Xt);
                    },
                    $$slots: { default: !0 }
                  });
                }, bn = (At) => {
                  var Gt = oe(), yn = K(Gt);
                  Ie(yn, () => e.prefix ?? pe), E(At, Gt);
                };
                ee(Ot, (At) => {
                  typeof e.prefix == "string" ? At(ar) : At(bn, !1);
                });
              }
              E(Lt, ze);
            };
            ee(je, (Lt) => {
              e.prefix != null && Lt(Bt);
            });
          }
          var Mn = Y(je, 2);
          {
            let Lt = /* @__PURE__ */ te(() => ut(R, "input$"));
            xe(
              Eh(Mn, Ye(
                {
                  get type() {
                    return v();
                  },
                  get disabled() {
                    return d();
                  },
                  get required() {
                    return c();
                  },
                  get updateInvalid() {
                    return w();
                  },
                  get initialInvalid() {
                    return o(se);
                  },
                  get "aria-controls"() {
                    return o(F);
                  },
                  get "aria-describedby"() {
                    return o(F);
                  }
                },
                () => g() && e.label != null && typeof e.label == "string" ? { placeholder: e.label } : {},
                () => o(Lt),
                {
                  onblur: (ze) => {
                    var Ot;
                    G($, !1), G(se, !0), Ge(j(), "blur", ze), (Ot = e.input$onblur) == null || Ot.call(e, ze);
                  },
                  onfocus: (ze) => {
                    var Ot;
                    G($, !0), Ge(j(), "focus", ze), (Ot = e.input$onfocus) == null || Ot.call(e, ze);
                  },
                  get value() {
                    return p();
                  },
                  set value(ze) {
                    p(ze);
                  },
                  get files() {
                    return _();
                  },
                  set files(ze) {
                    _(ze);
                  },
                  get dirty() {
                    return A();
                  },
                  set dirty(ze) {
                    A(ze);
                  },
                  get invalid() {
                    return y();
                  },
                  set invalid(ze) {
                    y(ze);
                  }
                }
              )),
              (ze) => x(ze),
              () => x()
            );
          }
          var $e = Y(Mn, 2);
          {
            var Ct = (Lt) => {
              var ze = oe(), Ot = K(ze);
              {
                var ar = (At) => {
                  Ch(At, {
                    children: (Gt, yn) => {
                      var Xt = at();
                      ce(() => Me(Xt, e.suffix)), E(Gt, Xt);
                    },
                    $$slots: { default: !0 }
                  });
                }, bn = (At) => {
                  var Gt = oe(), yn = K(Gt);
                  Ie(yn, () => e.suffix ?? pe), E(At, Gt);
                };
                ee(Ot, (At) => {
                  typeof e.suffix == "string" ? At(ar) : At(bn, !1);
                });
              }
              E(Lt, ze);
            };
            ee($e, (Lt) => {
              e.suffix != null && Lt(Ct);
            });
          }
          E(Ue, Qe);
        };
        ee(ft, (Ue) => {
          h() && typeof p() == "string" ? Ue(Ht) : Ue(sn, !1);
        });
      }
      var Ar = Y(ft, 2);
      Ya(Ar, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (Ue, Qe) => {
          var je = oe(), Bt = K(je);
          Ie(Bt, () => e.trailingIcon ?? pe), E(Ue, je);
        },
        $$slots: { default: !0 }
      });
      var za = Y(Ar, 2);
      {
        var Er = (Ue) => {
          {
            let Qe = /* @__PURE__ */ te(() => ut(R, "ripple$"));
            xe(nd(Ue, Ye(() => o(Qe))), (je) => L(je), () => L());
          }
        };
        ee(za, (Ue) => {
          !h() && f() !== "outlined" && l() && Ue(Er);
        });
      }
      xe(ne, (Ue) => q = Ue, () => q), Le(ne, (Ue, Qe) => kn == null ? void 0 : kn(Ue, Qe), () => ({
        ripple: !h() && f() === "filled",
        unbounded: !1,
        addClass: Je,
        removeClass: Oe,
        addStyle: mt,
        eventTarget: o(be),
        activeTarget: o(be),
        initPromise: W
      })), Le(ne, (Ue, Qe) => ie == null ? void 0 : ie(Ue, Qe), a), E(U, ne);
    }, ir = (U) => {
      var ne = Rh();
      Be(ne, (ft, Ht, sn) => ({ class: ft, style: Ht, ...sn }), [
        () => He({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": d(),
          "mdc-text-field--textarea": h(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !h(),
          "mdc-text-field--no-label": g() || e.label == null,
          "mdc-text-field--with-leading-icon": e.leadingIcon,
          "mdc-text-field--with-trailing-icon": e.trailingIcon,
          "mdc-text-field--invalid": y(),
          ...J,
          [s()]: !0
        }),
        () => Object.entries(ue).map(([ft, Ht]) => `${ft}: ${Ht};`).concat([u()]).join(" "),
        () => xa(R, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Te = V(ne);
      {
        var ot = (ft) => {
          var Ht = oe(), sn = K(Ht);
          Ie(sn, () => e.label ?? pe), E(ft, Ht);
        };
        ee(Te, (ft) => {
          typeof e.label != "string" && ft(ot);
        });
      }
      var pt = Y(Te, 2);
      Ya(pt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (ft, Ht) => {
          var sn = oe(), Ar = K(sn);
          Ie(Ar, () => e.leadingIcon ?? pe), E(ft, sn);
        },
        $$slots: { default: !0 }
      });
      var Ut = Y(pt, 2);
      Ie(Ut, () => e.children ?? pe);
      var an = Y(Ut, 2);
      Ya(an, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (ft, Ht) => {
          var sn = oe(), Ar = K(sn);
          Ie(Ar, () => e.trailingIcon ?? pe), E(ft, sn);
        },
        $$slots: { default: !0 }
      });
      var xi = Y(an, 2);
      Ie(xi, () => e.line ?? pe), xe(ne, (ft) => q = ft, () => q), Le(ne, (ft, Ht) => kn == null ? void 0 : kn(ft, Ht), () => ({
        ripple: l(),
        unbounded: !1,
        addClass: Je,
        removeClass: Oe,
        addStyle: mt
      })), Le(ne, (ft, Ht) => ie == null ? void 0 : ie(ft, Ht), a), E(U, ne);
    };
    ee(Nt, (U) => {
      re ? U(fn) : U(ir, !1);
    });
  }
  var me = Y(Nt, 2);
  {
    var B = (U) => {
      {
        let ne = /* @__PURE__ */ te(() => ut(R, "helperLine$"));
        bh(U, Ye(() => o(ne), {
          children: (Te, ot) => {
            var pt = oe(), Ut = K(pt);
            Ie(Ut, () => e.helper ?? pe), E(Te, pt);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    ee(me, (U) => {
      e.helper && U(B);
    });
  }
  return E(n, Pe), Ee(ve);
}
var Ph = /* @__PURE__ */ Z('<div class="mdc-button__touch"></div>'), kh = /* @__PURE__ */ Z('<div class="mdc-button__ripple"></div> <!><!>', 1);
function tr(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "ripple", 3, !0), s = m(e, "color", 3, "primary"), u = m(e, "variant", 3, "text"), l = m(e, "touch", 3, !1), d = m(e, "action", 3, "close"), c = m(e, "defaultAction", 3, !1), h = m(e, "secondary", 3, !1), f = m(e, "component", 3, Ps), g = m(e, "tag", 19, () => e.href == null ? "button" : "a"), v = /* @__PURE__ */ We(e, [
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
  ]), p, _ = Ce({}), y = Ce({}), w = ye("SMUI:button:context");
  const S = /* @__PURE__ */ te(() => w === "dialog:action" && d() != null ? { "data-mdc-dialog-action": d() } : { action: d() }), A = /* @__PURE__ */ te(() => w === "dialog:action" && c() ? { "data-mdc-dialog-button-default": "" } : {}), T = /* @__PURE__ */ te(() => w === "banner" ? {} : { secondary: h() });
  let I = e.disabled;
  Se(() => {
    if (I !== e.disabled) {
      if (p) {
        const q = L();
        "blur" in q && q.blur();
      }
      I = v.disabled;
    }
  }), de("SMUI:label:context", "button"), de("SMUI:icon:context", "button");
  function b(q) {
    _[q] || (_[q] = !0);
  }
  function C(q) {
    (!(q in _) || _[q]) && (_[q] = !1);
  }
  function x(q, N) {
    y[q] != N && (N === "" || N == null ? delete y[q] : y[q] = N);
  }
  function D() {
    w === "banner" && Ge(L(), h() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function L() {
    return p.getElement();
  }
  var O = { getElement: L }, R = oe(), re = K(R);
  {
    let q = /* @__PURE__ */ te(() => [
      [
        kn,
        {
          ripple: a(),
          unbounded: !1,
          color: s(),
          disabled: !!e.disabled,
          addClass: b,
          removeClass: C,
          addStyle: x
        }
      ],
      ...t()
    ]), N = /* @__PURE__ */ te(() => He({
      "mdc-button": !0,
      "mdc-button--raised": u() === "raised",
      "mdc-button--unelevated": u() === "unelevated",
      "mdc-button--outlined": u() === "outlined",
      "smui-button--color-secondary": s() === "secondary",
      "mdc-button--touch": l(),
      "mdc-card__action": w === "card:action",
      "mdc-card__action--button": w === "card:action",
      "mdc-dialog__button": w === "dialog:action",
      "mdc-top-app-bar__navigation-icon": w === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": w === "top-app-bar:action",
      "mdc-snackbar__action": w === "snackbar:actions",
      "mdc-banner__secondary-action": w === "banner" && h(),
      "mdc-banner__primary-action": w === "banner" && !h(),
      "mdc-tooltip__action": w === "tooltip:rich-actions",
      ..._,
      [r()]: !0
    })), H = /* @__PURE__ */ te(() => Object.entries(y).map(([J, ue]) => `${J}: ${ue};`).concat([i()]).join(" "));
    Na(re, f, (J, ue) => {
      xe(
        ue(J, Ye(
          {
            get tag() {
              return g();
            },
            get use() {
              return o(q);
            },
            get class() {
              return o(N);
            },
            get style() {
              return o(H);
            }
          },
          () => o(S),
          () => o(A),
          () => o(T),
          {
            get href() {
              return e.href;
            }
          },
          () => v,
          {
            onclick: (F) => {
              var $;
              D(), ($ = e.onclick) == null || $.call(e, F);
            },
            children: (F, $) => {
              var se = kh(), _e = Y(K(se), 2);
              Ie(_e, () => e.children ?? pe);
              var he = Y(_e);
              {
                var z = (W) => {
                  var k = Ph();
                  E(W, k);
                };
                ee(he, (W) => {
                  l() && W(z);
                });
              }
              E(F, se);
            },
            $$slots: { default: !0 }
          }
        )),
        (F) => p = F,
        () => p
      );
    });
  }
  return E(n, R), Ee(O);
}
var Fh = /* @__PURE__ */ Z("<i><!></i>");
function Nh(n, e) {
  Ae(e, !0);
  const t = () => Ii(v, "$leadingStore", r), [r, i] = Si();
  let a = m(e, "use", 19, () => []), s = m(e, "class", 3, ""), u = m(e, "tabindex", 19, () => e.role === "button" ? 0 : -1), l = m(e, "disabled", 3, !1), d = /* @__PURE__ */ We(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "role",
    "tabindex",
    "disabled",
    "children"
  ]), c, h = /* @__PURE__ */ le(void 0), f = new sa(), g = Ce({});
  const v = ye("SMUI:textfield:icon:leading"), p = t();
  let _ = /* @__PURE__ */ le(void 0);
  const y = /* @__PURE__ */ te(() => ({ role: e.role, tabindex: u() })), w = ye("SMUI:textfield:leading-icon:mount"), S = ye("SMUI:textfield:leading-icon:unmount"), A = ye("SMUI:textfield:trailing-icon:mount"), T = ye("SMUI:textfield:trailing-icon:unmount");
  rt(() => (G(
    h,
    new dh({
      getAttr: I,
      setAttr: b,
      removeAttr: C,
      setContent: (N) => {
        G(_, N, !0);
      },
      registerInteractionHandler: (N, H) => f.on(x(), N, H),
      deregisterInteractionHandler: (N, H) => f.off(x(), N, H),
      notifyIconAction: () => Ge(x(), "SMUITextFieldIcon")
    }),
    !0
  ), p ? w && w(o(h)) : A && A(o(h)), o(h).init(), () => {
    var N;
    o(h) && (p ? S && S(o(h)) : T && T(o(h))), (N = o(h)) == null || N.destroy(), f.clear();
  }));
  function I(N) {
    return N in g ? g[N] ?? null : x().getAttribute(N);
  }
  function b(N, H) {
    g[N] !== H && (g[N] = H);
  }
  function C(N) {
    (!(N in g) || g[N] != null) && (g[N] = void 0);
  }
  function x() {
    return c;
  }
  var D = { getElement: x }, L = Fh();
  Be(
    L,
    (N) => ({
      class: N,
      "aria-hidden": u() === -1 ? "true" : "false",
      "aria-disabled": e.role === "button" ? l() ? "true" : "false" : void 0,
      ...o(y),
      ...g,
      ...d
    }),
    [
      () => He({
        "mdc-text-field__icon": !0,
        "mdc-text-field__icon--leading": p,
        "mdc-text-field__icon--trailing": !p,
        [s()]: !0
      })
    ]
  );
  var O = V(L);
  {
    var R = (N) => {
      var H = oe(), J = K(H);
      Ie(J, () => e.children ?? pe), E(N, H);
    }, re = (N) => {
      var H = at();
      ce(() => Me(H, o(_))), E(N, H);
    };
    ee(O, (N) => {
      o(_) == null ? N(R) : N(re, !1);
    });
  }
  xe(L, (N) => c = N, () => c), Le(L, (N, H) => ie == null ? void 0 : ie(N, H), a), E(n, L);
  var q = Ee(D);
  return i(), q;
}
function id(n, e) {
  Ae(e, !0);
  let t = m(e, "placeholder", 3, ""), r = m(e, "label", 3, ""), i = m(e, "icon", 3, ""), a = m(e, "value", 15, ""), s = m(e, "variant", 3, "standard"), u = m(e, "styles", 3, ""), l = m(e, "required", 3, !1), d = m(e, "oninput", 3, () => {
  });
  var c = oe(), h = K(c);
  {
    var f = (v) => {
      {
        const p = (y) => {
          Nh(y, {
            class: "material-icons",
            children: (w, S) => {
              var A = at();
              ce(() => Me(A, i())), E(w, A);
            },
            $$slots: { default: !0 }
          });
        };
        let _ = /* @__PURE__ */ te(() => `width: 100%; ${u()}`);
        Pr(v, {
          get label() {
            return r();
          },
          get required() {
            return l();
          },
          get placeholder() {
            return t();
          },
          get style() {
            return o(_);
          },
          get variant() {
            return s();
          },
          get oninput() {
            return d();
          },
          get value() {
            return a();
          },
          set value(y) {
            a(y);
          },
          leadingIcon: p,
          $$slots: { leadingIcon: !0 }
        });
      }
    }, g = (v) => {
      Pr(v, {
        get label() {
          return r();
        },
        get placeholder() {
          return t();
        },
        style: "width: 100%",
        get variant() {
          return s();
        },
        get required() {
          return l();
        },
        get oninput() {
          return d();
        },
        get value() {
          return a();
        },
        set value(p) {
          a(p);
        }
      });
    };
    ee(h, (v) => {
      i() ? v(f) : v(g, !1);
    });
  }
  E(n, c), Ee();
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
var Uh = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, Hh = {
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
}, ga = {
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
}, vt;
(function(n) {
  n[n.BOTTOM = 1] = "BOTTOM", n[n.CENTER = 2] = "CENTER", n[n.RIGHT = 4] = "RIGHT", n[n.FLIP_RTL = 8] = "FLIP_RTL";
})(vt || (vt = {}));
var gi;
(function(n) {
  n[n.TOP_LEFT = 0] = "TOP_LEFT", n[n.TOP_RIGHT = 4] = "TOP_RIGHT", n[n.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", n[n.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", n[n.TOP_START = 8] = "TOP_START", n[n.TOP_END = 12] = "TOP_END", n[n.BOTTOM_START = 9] = "BOTTOM_START", n[n.BOTTOM_END = 13] = "BOTTOM_END";
})(gi || (gi = {}));
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
var wr, ur, Fe = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
wr = {}, wr["" + Fe.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", wr["" + Fe.LIST_ITEM_CLASS] = "mdc-list-item", wr["" + Fe.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", wr["" + Fe.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", wr["" + Fe.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", wr["" + Fe.ROOT] = "mdc-list";
var Ri = (ur = {}, ur["" + Fe.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", ur["" + Fe.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", ur["" + Fe.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", ur["" + Fe.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", ur["" + Fe.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", ur["" + Fe.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", ur["" + Fe.ROOT] = "mdc-deprecated-list", ur), Tr = {
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
    .` + Ri[Fe.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ri[Fe.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + Fe.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + Fe.LIST_ITEM_CLASS + ` a,
    .` + Fe.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + Fe.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + Ri[Fe.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ri[Fe.LIST_ITEM_CLASS] + ` a,
    .` + Ri[Fe.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + Ri[Fe.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, ht = {
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
var Bh = ["input", "button", "textarea", "select"], En = function(n) {
  var e = n.target;
  if (e) {
    var t = ("" + e.tagName).toLowerCase();
    Bh.indexOf(t) === -1 && n.preventDefault();
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
function Gh() {
  var n = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return n;
}
function Vh(n, e) {
  for (var t = /* @__PURE__ */ new Map(), r = 0; r < n; r++) {
    var i = e(r).trim();
    if (i) {
      var a = i[0].toLowerCase();
      t.has(a) || t.set(a, []), t.get(a).push({ text: i.toLowerCase(), index: r });
    }
  }
  return t.forEach(function(s) {
    s.sort(function(u, l) {
      return u.index - l.index;
    });
  }), t;
}
function yo(n, e) {
  var t = n.nextChar, r = n.focusItemAtIndex, i = n.sortedIndexByFirstChar, a = n.focusedItemIndex, s = n.skipFocus, u = n.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    sd(e);
  }, ht.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + t;
  var l;
  return e.typeaheadBuffer.length === 1 ? l = zh(i, a, u, e) : l = qh(i, u, e), l !== -1 && !s && r(l), l;
}
function zh(n, e, t, r) {
  var i = r.typeaheadBuffer[0], a = n.get(i);
  if (!a)
    return -1;
  if (i === r.currentFirstChar && a[r.sortedIndexCursor].index === e) {
    r.sortedIndexCursor = (r.sortedIndexCursor + 1) % a.length;
    var s = a[r.sortedIndexCursor].index;
    if (!t(s))
      return s;
  }
  r.currentFirstChar = i;
  var u = -1, l;
  for (l = 0; l < a.length; l++)
    if (!t(a[l].index)) {
      u = l;
      break;
    }
  for (; l < a.length; l++)
    if (a[l].index > e && !t(a[l].index)) {
      u = l;
      break;
    }
  return u !== -1 ? (r.sortedIndexCursor = u, a[r.sortedIndexCursor].index) : -1;
}
function qh(n, e, t) {
  var r = t.typeaheadBuffer[0], i = n.get(r);
  if (!i)
    return -1;
  var a = i[t.sortedIndexCursor];
  if (a.text.lastIndexOf(t.typeaheadBuffer, 0) === 0 && !e(a.index))
    return a.index;
  for (var s = (t.sortedIndexCursor + 1) % i.length, u = -1; s !== t.sortedIndexCursor; ) {
    var l = i[s], d = l.text.lastIndexOf(t.typeaheadBuffer, 0) === 0, c = !e(l.index);
    if (d && c) {
      u = s;
      break;
    }
    s = (s + 1) % i.length;
  }
  return u !== -1 ? (t.sortedIndexCursor = u, i[t.sortedIndexCursor].index) : -1;
}
function ad(n) {
  return n.typeaheadBuffer.length > 0;
}
function sd(n) {
  n.typeaheadBuffer = "";
}
function Nl(n, e) {
  var t = n.event, r = n.isTargetListItem, i = n.focusedItemIndex, a = n.focusItemAtIndex, s = n.sortedIndexByFirstChar, u = n.isItemAtIndexDisabled, l = It(t) === "ArrowLeft", d = It(t) === "ArrowUp", c = It(t) === "ArrowRight", h = It(t) === "ArrowDown", f = It(t) === "Home", g = It(t) === "End", v = It(t) === "Enter", p = It(t) === "Spacebar";
  if (t.altKey || t.ctrlKey || t.metaKey || l || d || c || h || f || g || v)
    return -1;
  var _ = !p && t.key.length === 1;
  if (_) {
    En(t);
    var y = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: t.key.toLowerCase(),
      sortedIndexByFirstChar: s,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return yo(y, e);
  }
  if (!p)
    return -1;
  r && En(t);
  var w = r && ad(e);
  if (w) {
    var y = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: " ",
      sortedIndexByFirstChar: s,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return yo(y, e);
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
function Wh(n) {
  return n instanceof Array;
}
var jh = ["Alt", "Control", "Meta", "Shift"];
function Ul(n) {
  var e = new Set(n ? jh.filter(function(t) {
    return n.getModifierState(t);
  }) : []);
  return function(t) {
    return t.every(function(r) {
      return e.has(r);
    }) && t.length === e.size;
  };
}
var Zh = (
  /** @class */
  function(n) {
    _n(e, n);
    function e(t) {
      var r = n.call(this, qe(qe({}, e.defaultAdapter), t)) || this;
      return r.wrapFocus = !1, r.isVertical = !0, r.isSingleSelectionList = !1, r.areDisabledItemsFocusable = !0, r.selectedIndex = ht.UNSET_INDEX, r.focusedItemIndex = ht.UNSET_INDEX, r.useActivatedClass = !1, r.useSelectedAttr = !1, r.ariaCurrentAttrValue = null, r.isCheckboxList = !1, r.isRadioList = !1, r.lastSelectedIndex = null, r.hasTypeahead = !1, r.typeaheadState = Gh(), r.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Tr;
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
        return ht;
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
    }, e.prototype.setWrapFocus = function(t) {
      this.wrapFocus = t;
    }, e.prototype.setVerticalOrientation = function(t) {
      this.isVertical = t;
    }, e.prototype.setSingleSelection = function(t) {
      this.isSingleSelectionList = t, t && (this.maybeInitializeSingleSelection(), this.selectedIndex = this.getSelectedIndexFromDOM());
    }, e.prototype.setDisabledItemsFocusable = function(t) {
      this.areDisabledItemsFocusable = t;
    }, e.prototype.maybeInitializeSingleSelection = function() {
      var t = this.getSelectedIndexFromDOM();
      if (t !== ht.UNSET_INDEX) {
        var r = this.adapter.listItemAtIndexHasClass(t, Fe.LIST_ITEM_ACTIVATED_CLASS);
        r && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = t;
      }
    }, e.prototype.getSelectedIndexFromDOM = function() {
      for (var t = ht.UNSET_INDEX, r = this.adapter.getListItemCount(), i = 0; i < r; i++) {
        var a = this.adapter.listItemAtIndexHasClass(i, Fe.LIST_ITEM_SELECTED_CLASS), s = this.adapter.listItemAtIndexHasClass(i, Fe.LIST_ITEM_ACTIVATED_CLASS);
        if (a || s) {
          t = i;
          break;
        }
      }
      return t;
    }, e.prototype.setHasTypeahead = function(t) {
      this.hasTypeahead = t, t && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex());
    }, e.prototype.isTypeaheadInProgress = function() {
      return this.hasTypeahead && ad(this.typeaheadState);
    }, e.prototype.setUseActivatedClass = function(t) {
      this.useActivatedClass = t;
    }, e.prototype.setUseSelectedAttribute = function(t) {
      this.useSelectedAttr = t;
    }, e.prototype.getSelectedIndex = function() {
      return this.selectedIndex;
    }, e.prototype.setSelectedIndex = function(t, r) {
      r === void 0 && (r = {}), this.isIndexValid(t) && (this.isCheckboxList ? this.setCheckboxAtIndex(t, r) : this.isRadioList ? this.setRadioAtIndex(t, r) : this.setSingleSelectionAtIndex(t, r));
    }, e.prototype.handleFocusIn = function(t) {
      t >= 0 && (this.focusedItemIndex = t, this.adapter.setAttributeForElementIndex(t, "tabindex", "0"), this.adapter.setTabIndexForListItemChildren(t, "0"));
    }, e.prototype.handleFocusOut = function(t) {
      var r = this;
      t >= 0 && (this.adapter.setAttributeForElementIndex(t, "tabindex", "-1"), this.adapter.setTabIndexForListItemChildren(t, "-1")), setTimeout(function() {
        r.adapter.isFocusInsideList() || r.setTabindexToFirstSelectedOrFocusedItem();
      }, 0);
    }, e.prototype.isIndexDisabled = function(t) {
      return this.adapter.listItemAtIndexHasClass(t, Fe.LIST_ITEM_DISABLED_CLASS);
    }, e.prototype.handleKeydown = function(t, r, i) {
      var a = this, s, u = It(t) === "ArrowLeft", l = It(t) === "ArrowUp", d = It(t) === "ArrowRight", c = It(t) === "ArrowDown", h = It(t) === "Home", f = It(t) === "End", g = It(t) === "Enter", v = It(t) === "Spacebar", p = this.isVertical && c || !this.isVertical && d, _ = this.isVertical && l || !this.isVertical && u, y = t.key === "A" || t.key === "a", w = Ul(t);
      if (this.adapter.isRootFocused()) {
        if ((_ || f) && w([]))
          t.preventDefault(), this.focusLastElement();
        else if ((p || h) && w([]))
          t.preventDefault(), this.focusFirstElement();
        else if (_ && w(["Shift"]) && this.isCheckboxList) {
          t.preventDefault();
          var S = this.focusLastElement();
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        } else if (p && w(["Shift"]) && this.isCheckboxList) {
          t.preventDefault();
          var S = this.focusFirstElement();
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        }
        if (this.hasTypeahead) {
          var A = {
            event: t,
            focusItemAtIndex: function(b) {
              a.focusItemAtIndex(b);
            },
            focusedItemIndex: -1,
            isTargetListItem: r,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(b) {
              return a.isIndexDisabled(b);
            }
          };
          Nl(A, this.typeaheadState);
        }
        return;
      }
      var T = this.adapter.getFocusedElementIndex();
      if (!(T === -1 && (T = i, T < 0))) {
        if (p && w([]))
          En(t), this.focusNextElement(T);
        else if (_ && w([]))
          En(t), this.focusPrevElement(T);
        else if (p && w(["Shift"]) && this.isCheckboxList) {
          En(t);
          var S = this.focusNextElement(T);
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        } else if (_ && w(["Shift"]) && this.isCheckboxList) {
          En(t);
          var S = this.focusPrevElement(T);
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        } else if (h && w([]))
          En(t), this.focusFirstElement();
        else if (f && w([]))
          En(t), this.focusLastElement();
        else if (h && w(["Control", "Shift"]) && this.isCheckboxList) {
          if (En(t), this.isIndexDisabled(T))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, T, T);
        } else if (f && w(["Control", "Shift"]) && this.isCheckboxList) {
          if (En(t), this.isIndexDisabled(T))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(T, this.adapter.getListItemCount() - 1, T);
        } else if (y && w(["Control"]) && this.isCheckboxList)
          t.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === ht.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((g || v) && w([])) {
          if (r) {
            var I = t.target;
            if (I && I.tagName === "A" && g || (En(t), this.isIndexDisabled(T)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(T, !1), this.adapter.notifyAction(T));
          }
        } else if ((g || v) && w(["Shift"]) && this.isCheckboxList) {
          var I = t.target;
          if (I && I.tagName === "A" && g || (En(t), this.isIndexDisabled(T)))
            return;
          this.isTypeaheadInProgress() || (this.toggleCheckboxRange((s = this.lastSelectedIndex) !== null && s !== void 0 ? s : T, T, T), this.adapter.notifyAction(T));
        }
        if (this.hasTypeahead) {
          var A = {
            event: t,
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
          Nl(A, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(t, r, i) {
      var a, s = Ul(i);
      t !== ht.UNSET_INDEX && (this.isIndexDisabled(t) || (s([]) ? (this.isSelectableList() && this.setSelectedIndexOnAction(t, r), this.adapter.notifyAction(t)) : this.isCheckboxList && s(["Shift"]) && (this.toggleCheckboxRange((a = this.lastSelectedIndex) !== null && a !== void 0 ? a : t, t, t), this.adapter.notifyAction(t))));
    }, e.prototype.focusNextElement = function(t) {
      var r = this.adapter.getListItemCount(), i = t, a = null;
      do {
        if (i++, i >= r)
          if (this.wrapFocus)
            i = 0;
          else
            return t;
        if (i === a)
          return -1;
        a = a ?? i;
      } while (!this.areDisabledItemsFocusable && this.isIndexDisabled(i));
      return this.focusItemAtIndex(i), i;
    }, e.prototype.focusPrevElement = function(t) {
      var r = this.adapter.getListItemCount(), i = t, a = null;
      do {
        if (i--, i < 0)
          if (this.wrapFocus)
            i = r - 1;
          else
            return t;
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
      var t = this.getFirstSelectedOrFocusedItemIndex();
      return this.focusItemAtIndex(t), t;
    }, e.prototype.setEnabled = function(t, r) {
      this.isIndexValid(t, !1) && (r ? (this.adapter.removeClassForElementIndex(t, Fe.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(t, Tr.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(t, Fe.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(t, Tr.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(t, r) {
      if (r === void 0 && (r = {}), !(this.selectedIndex === t && !r.forceUpdate)) {
        var i = Fe.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (i = Fe.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== ht.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, i), this.setAriaForSingleSelectionAtIndex(t), this.setTabindexAtIndex(t), t !== ht.UNSET_INDEX && this.adapter.addClassForElementIndex(t, i), this.selectedIndex = t, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([t]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(t) {
      this.selectedIndex === ht.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(t, Tr.ARIA_CURRENT));
      var r = this.ariaCurrentAttrValue !== null, i = r ? Tr.ARIA_CURRENT : Tr.ARIA_SELECTED;
      if (this.selectedIndex !== ht.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), t !== ht.UNSET_INDEX) {
        var a = r ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(t, i, a);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? Tr.ARIA_SELECTED : Tr.ARIA_CHECKED;
    }, e.prototype.setRadioAtIndex = function(t, r) {
      r === void 0 && (r = {});
      var i = this.getSelectionAttribute();
      this.adapter.setCheckedCheckboxOrRadioAtIndex(t, !0), !(this.selectedIndex === t && !r.forceUpdate) && (this.selectedIndex !== ht.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), this.adapter.setAttributeForElementIndex(t, i, "true"), this.selectedIndex = t, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([t]));
    }, e.prototype.setCheckboxAtIndex = function(t, r) {
      r === void 0 && (r = {});
      for (var i = this.selectedIndex, a = r.isUserInteraction ? new Set(i === ht.UNSET_INDEX ? [] : i) : null, s = this.getSelectionAttribute(), u = [], l = 0; l < this.adapter.getListItemCount(); l++) {
        var d = a == null ? void 0 : a.has(l), c = t.indexOf(l) >= 0;
        c !== d && u.push(l), this.adapter.setCheckedCheckboxOrRadioAtIndex(l, c), this.adapter.setAttributeForElementIndex(l, s, c ? "true" : "false");
      }
      this.selectedIndex = t, r.isUserInteraction && u.length && this.adapter.notifySelectionChange(u);
    }, e.prototype.toggleCheckboxRange = function(t, r, i) {
      this.lastSelectedIndex = i;
      for (var a = new Set(this.selectedIndex === ht.UNSET_INDEX ? [] : this.selectedIndex), s = !(a != null && a.has(i)), u = xl([t, r].sort(), 2), l = u[0], d = u[1], c = this.getSelectionAttribute(), h = [], f = l; f <= d; f++)
        if (!this.isIndexDisabled(f)) {
          var g = a.has(f);
          s !== g && (h.push(f), this.adapter.setCheckedCheckboxOrRadioAtIndex(f, s), this.adapter.setAttributeForElementIndex(f, c, "" + s), s ? a.add(f) : a.delete(f));
        }
      h.length && (this.selectedIndex = zf([], xl(a)), this.adapter.notifySelectionChange(h));
    }, e.prototype.setTabindexAtIndex = function(t) {
      this.focusedItemIndex === ht.UNSET_INDEX && t !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== t && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== t && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), t !== ht.UNSET_INDEX && this.adapter.setAttributeForElementIndex(t, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var t = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(t);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== ht.UNSET_INDEX ? this.selectedIndex : Wh(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(t, r) {
        return Math.min(t, r);
      }) : 0 : Math.max(this.focusedItemIndex, 0);
    }, e.prototype.isIndexValid = function(t, r) {
      var i = this;
      if (r === void 0 && (r = !0), t instanceof Array) {
        if (!this.isCheckboxList && r)
          throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
        return t.length === 0 ? !0 : t.some(function(a) {
          return i.isIndexInRange(a);
        });
      } else if (typeof t == "number") {
        if (this.isCheckboxList && r)
          throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + t);
        return this.isIndexInRange(t) || this.isSingleSelectionList && t === ht.UNSET_INDEX;
      } else
        return !1;
    }, e.prototype.isIndexInRange = function(t) {
      var r = this.adapter.getListItemCount();
      return t >= 0 && t < r;
    }, e.prototype.setSelectedIndexOnAction = function(t, r) {
      this.lastSelectedIndex = t, this.isCheckboxList ? (this.toggleCheckboxAtIndex(t, r), this.adapter.notifySelectionChange([t])) : this.setSelectedIndex(t, { isUserInteraction: !0 });
    }, e.prototype.toggleCheckboxAtIndex = function(t, r) {
      var i = this.getSelectionAttribute(), a = this.adapter.isCheckboxCheckedAtIndex(t), s;
      r ? s = a : (s = !a, this.adapter.setCheckedCheckboxOrRadioAtIndex(t, s)), this.adapter.setAttributeForElementIndex(t, i, s ? "true" : "false");
      var u = this.selectedIndex === ht.UNSET_INDEX ? [] : this.selectedIndex.slice();
      s ? u.push(t) : u = u.filter(function(l) {
        return l !== t;
      }), this.selectedIndex = u;
    }, e.prototype.focusItemAtIndex = function(t) {
      this.adapter.focusItemAtIndex(t), this.focusedItemIndex = t;
    }, e.prototype.checkboxListToggleAll = function(t, r) {
      var i = this.adapter.getListItemCount();
      if (t.length === i)
        this.setCheckboxAtIndex([], { isUserInteraction: r });
      else {
        for (var a = [], s = 0; s < i; s++)
          (!this.isIndexDisabled(s) || t.indexOf(s) > -1) && a.push(s);
        this.setCheckboxAtIndex(a, { isUserInteraction: r });
      }
    }, e.prototype.typeaheadMatchItem = function(t, r, i) {
      var a = this;
      i === void 0 && (i = !1);
      var s = {
        focusItemAtIndex: function(u) {
          a.focusItemAtIndex(u);
        },
        focusedItemIndex: r || this.focusedItemIndex,
        nextChar: t,
        sortedIndexByFirstChar: this.sortedIndexByFirstChar,
        skipFocus: i,
        isItemAtIndexDisabled: function(u) {
          return a.isIndexDisabled(u);
        }
      };
      return yo(s, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return Vh(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      sd(this.typeaheadState);
    }, e;
  }(In)
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
var od = (
  /** @class */
  function(n) {
    _n(e, n);
    function e(t) {
      var r = n.call(this, qe(qe({}, e.defaultAdapter), t)) || this;
      return r.isSurfaceOpen = !1, r.isQuickOpen = !1, r.isHoistedElement = !1, r.isFixedPosition = !1, r.isHorizontallyCenteredOnViewport = !1, r.maxHeight = 0, r.openBottomBias = 0, r.openAnimationEndTimerId = 0, r.closeAnimationEndTimerId = 0, r.animationRequestId = 0, r.anchorCorner = gi.TOP_START, r.originCorner = gi.TOP_START, r.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, r.position = { x: 0, y: 0 }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Uh;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Hh;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return ga;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "Corner", {
      get: function() {
        return gi;
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
      var t = e.cssClasses, r = t.ROOT, i = t.OPEN;
      if (!this.adapter.hasClass(r))
        throw new Error(r + " class required in root element.");
      this.adapter.hasClass(i) && (this.isSurfaceOpen = !0);
    }, e.prototype.destroy = function() {
      clearTimeout(this.openAnimationEndTimerId), clearTimeout(this.closeAnimationEndTimerId), cancelAnimationFrame(this.animationRequestId);
    }, e.prototype.setAnchorCorner = function(t) {
      this.anchorCorner = t;
    }, e.prototype.flipCornerHorizontally = function() {
      this.originCorner = this.originCorner ^ vt.RIGHT;
    }, e.prototype.setAnchorMargin = function(t) {
      this.anchorMargin.top = t.top || 0, this.anchorMargin.right = t.right || 0, this.anchorMargin.bottom = t.bottom || 0, this.anchorMargin.left = t.left || 0;
    }, e.prototype.setIsHoisted = function(t) {
      this.isHoistedElement = t;
    }, e.prototype.setFixedPosition = function(t) {
      this.isFixedPosition = t;
    }, e.prototype.isFixed = function() {
      return this.isFixedPosition;
    }, e.prototype.setAbsolutePosition = function(t, r) {
      this.position.x = this.isFinite(t) ? t : 0, this.position.y = this.isFinite(r) ? r : 0;
    }, e.prototype.setIsHorizontallyCenteredOnViewport = function(t) {
      this.isHorizontallyCenteredOnViewport = t;
    }, e.prototype.setQuickOpen = function(t) {
      this.isQuickOpen = t;
    }, e.prototype.setMaxHeight = function(t) {
      this.maxHeight = t;
    }, e.prototype.setOpenBottomBias = function(t) {
      this.openBottomBias = t;
    }, e.prototype.isOpen = function() {
      return this.isSurfaceOpen;
    }, e.prototype.open = function() {
      var t = this;
      this.isSurfaceOpen || (this.adapter.notifyOpening(), this.adapter.saveFocus(), this.isQuickOpen ? (this.isSurfaceOpen = !0, this.adapter.addClass(e.cssClasses.OPEN), this.dimensions = this.adapter.getInnerDimensions(), this.autoposition(), this.adapter.notifyOpen()) : (this.adapter.addClass(e.cssClasses.ANIMATING_OPEN), this.animationRequestId = requestAnimationFrame(function() {
        t.dimensions = t.adapter.getInnerDimensions(), t.autoposition(), t.adapter.addClass(e.cssClasses.OPEN), t.openAnimationEndTimerId = setTimeout(function() {
          t.openAnimationEndTimerId = 0, t.adapter.removeClass(e.cssClasses.ANIMATING_OPEN), t.adapter.notifyOpen();
        }, ga.TRANSITION_OPEN_DURATION);
      }), this.isSurfaceOpen = !0));
    }, e.prototype.close = function(t) {
      var r = this;
      if (t === void 0 && (t = !1), !!this.isSurfaceOpen) {
        if (this.adapter.notifyClosing(), this.isQuickOpen) {
          this.isSurfaceOpen = !1, t || this.maybeRestoreFocus(), this.adapter.removeClass(e.cssClasses.OPEN), this.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW), this.adapter.notifyClose();
          return;
        }
        this.adapter.addClass(e.cssClasses.ANIMATING_CLOSED), requestAnimationFrame(function() {
          r.adapter.removeClass(e.cssClasses.OPEN), r.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW), r.closeAnimationEndTimerId = setTimeout(function() {
            r.closeAnimationEndTimerId = 0, r.adapter.removeClass(e.cssClasses.ANIMATING_CLOSED), r.adapter.notifyClose();
          }, ga.TRANSITION_CLOSE_DURATION);
        }), this.isSurfaceOpen = !1, t || this.maybeRestoreFocus();
      }
    }, e.prototype.handleBodyClick = function(t) {
      var r = t.target;
      this.adapter.isElementInContainer(r) || this.close();
    }, e.prototype.handleKeydown = function(t) {
      var r = t.keyCode, i = t.key, a = i === "Escape" || r === 27;
      a && this.close();
    }, e.prototype.autoposition = function() {
      var t;
      this.measurements = this.getAutoLayoutmeasurements();
      var r = this.getoriginCorner(), i = this.getMenuSurfaceMaxHeight(r), a = this.hasBit(r, vt.BOTTOM) ? "bottom" : "top", s = this.hasBit(r, vt.RIGHT) ? "right" : "left", u = this.getHorizontalOriginOffset(r), l = this.getVerticalOriginOffset(r), d = this.measurements, c = d.anchorSize, h = d.surfaceSize, f = (t = {}, t[s] = u, t[a] = l, t);
      c.width / h.width > ga.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (s = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(f), this.adapter.setTransformOrigin(s + " " + a), this.adapter.setPosition(f), this.adapter.setMaxHeight(i ? i + "px" : ""), this.hasBit(r, vt.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
    }, e.prototype.getAutoLayoutmeasurements = function() {
      var t = this.adapter.getAnchorDimensions(), r = this.adapter.getBodyDimensions(), i = this.adapter.getWindowDimensions(), a = this.adapter.getWindowScroll();
      return t || (t = {
        top: this.position.y,
        right: this.position.x,
        bottom: this.position.y,
        left: this.position.x,
        width: 0,
        height: 0
      }), {
        anchorSize: t,
        bodySize: r,
        surfaceSize: this.dimensions,
        viewportDistance: {
          // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
          top: t.top,
          right: i.width - t.right,
          bottom: i.height - t.bottom,
          left: t.left
          // tslint:enable:object-literal-sort-keys
        },
        viewportSize: i,
        windowScroll: a
      };
    }, e.prototype.getoriginCorner = function() {
      var t = this.originCorner, r = this.measurements, i = r.viewportDistance, a = r.anchorSize, s = r.surfaceSize, u = e.numbers.MARGIN_TO_EDGE, l = this.hasBit(this.anchorCorner, vt.BOTTOM), d, c;
      l ? (d = i.top - u + this.anchorMargin.bottom, c = i.bottom - u - this.anchorMargin.bottom) : (d = i.top - u + this.anchorMargin.top, c = i.bottom - u + a.height - this.anchorMargin.top);
      var h = c - s.height > 0;
      !h && d > c + this.openBottomBias && (t = this.setBit(t, vt.BOTTOM));
      var f = this.adapter.isRtl(), g = this.hasBit(this.anchorCorner, vt.FLIP_RTL), v = this.hasBit(this.anchorCorner, vt.RIGHT) || this.hasBit(t, vt.RIGHT), p = !1;
      f && g ? p = !v : p = v;
      var _, y;
      p ? (_ = i.left + a.width + this.anchorMargin.right, y = i.right - this.anchorMargin.right) : (_ = i.left + this.anchorMargin.left, y = i.right + a.width - this.anchorMargin.left);
      var w = _ - s.width > 0, S = y - s.width > 0, A = this.hasBit(t, vt.FLIP_RTL) && this.hasBit(t, vt.RIGHT);
      return S && A && f || !w && A ? t = this.unsetBit(t, vt.RIGHT) : (w && p && f || w && !p && v || !S && _ >= y) && (t = this.setBit(t, vt.RIGHT)), t;
    }, e.prototype.getMenuSurfaceMaxHeight = function(t) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var r = this.measurements.viewportDistance, i = 0, a = this.hasBit(t, vt.BOTTOM), s = this.hasBit(this.anchorCorner, vt.BOTTOM), u = e.numbers.MARGIN_TO_EDGE;
      return a ? (i = r.top + this.anchorMargin.top - u, s || (i += this.measurements.anchorSize.height)) : (i = r.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - u, s && (i -= this.measurements.anchorSize.height)), i;
    }, e.prototype.getHorizontalOriginOffset = function(t) {
      var r = this.measurements.anchorSize, i = this.hasBit(t, vt.RIGHT), a = this.hasBit(this.anchorCorner, vt.RIGHT);
      if (i) {
        var s = a ? r.width - this.anchorMargin.left : this.anchorMargin.right;
        return this.isHoistedElement || this.isFixedPosition ? s - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : s;
      }
      return a ? r.width - this.anchorMargin.right : this.anchorMargin.left;
    }, e.prototype.getVerticalOriginOffset = function(t) {
      var r = this.measurements.anchorSize, i = this.hasBit(t, vt.BOTTOM), a = this.hasBit(this.anchorCorner, vt.BOTTOM), s = 0;
      return i ? s = a ? r.height - this.anchorMargin.top : -this.anchorMargin.bottom : s = a ? r.height + this.anchorMargin.bottom : this.anchorMargin.top, s;
    }, e.prototype.adjustPositionForHoistedElement = function(t) {
      var r, i, a = this.measurements, s = a.windowScroll, u = a.viewportDistance, l = a.surfaceSize, d = a.viewportSize, c = Object.keys(t);
      try {
        for (var h = Hn(c), f = h.next(); !f.done; f = h.next()) {
          var g = f.value, v = t[g] || 0;
          if (this.isHorizontallyCenteredOnViewport && (g === "left" || g === "right")) {
            t[g] = (d.width - l.width) / 2;
            continue;
          }
          v += u[g], this.isFixedPosition || (g === "top" ? v += s.y : g === "bottom" ? v -= s.y : g === "left" ? v += s.x : v -= s.x), t[g] = v;
        }
      } catch (p) {
        r = { error: p };
      } finally {
        try {
          f && !f.done && (i = h.return) && i.call(h);
        } finally {
          if (r) throw r.error;
        }
      }
    }, e.prototype.maybeRestoreFocus = function() {
      var t = this, r = this.adapter.isFocused(), i = this.adapter.getOwnerDocument ? this.adapter.getOwnerDocument() : document, a = i.activeElement && this.adapter.isElementInContainer(i.activeElement);
      (r || a) && setTimeout(function() {
        t.adapter.restoreFocus();
      }, ga.TOUCH_EVENT_WAIT_MS);
    }, e.prototype.hasBit = function(t, r) {
      return !!(t & r);
    }, e.prototype.setBit = function(t, r) {
      return t | r;
    }, e.prototype.unsetBit = function(t, r) {
      return t ^ r;
    }, e.prototype.isFinite = function(t) {
      return typeof t == "number" && isFinite(t);
    }, e;
  }(In)
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
var Bi = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
}, Mi = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected",
  SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
}, Xh = {
  FOCUS_ROOT_INDEX: -1
}, Fi;
(function(n) {
  n[n.NONE = 0] = "NONE", n[n.LIST_ROOT = 1] = "LIST_ROOT", n[n.FIRST_ITEM = 2] = "FIRST_ITEM", n[n.LAST_ITEM = 3] = "LAST_ITEM";
})(Fi || (Fi = {}));
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
var Kh = (
  /** @class */
  function(n) {
    _n(e, n);
    function e(t) {
      var r = n.call(this, qe(qe({}, e.defaultAdapter), t)) || this;
      return r.closeAnimationEndTimerId = 0, r.defaultFocusState = Fi.LIST_ROOT, r.selectedIndex = -1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Bi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Mi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Xh;
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
    }, e.prototype.handleKeydown = function(t) {
      var r = t.key, i = t.keyCode, a = r === "Tab" || i === 9;
      a && this.adapter.closeSurface(
        /** skipRestoreFocus */
        !0
      );
    }, e.prototype.handleItemAction = function(t) {
      var r = this, i = this.adapter.getElementIndex(t);
      if (!(i < 0)) {
        this.adapter.notifySelected({ index: i });
        var a = this.adapter.getAttributeFromElementAtIndex(i, Mi.SKIP_RESTORE_FOCUS) === "true";
        this.adapter.closeSurface(a), this.closeAnimationEndTimerId = setTimeout(function() {
          var s = r.adapter.getElementIndex(t);
          s >= 0 && r.adapter.isSelectableItemAtIndex(s) && r.setSelectedIndex(s);
        }, od.numbers.TRANSITION_CLOSE_DURATION);
      }
    }, e.prototype.handleMenuSurfaceOpened = function() {
      switch (this.defaultFocusState) {
        case Fi.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case Fi.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case Fi.NONE:
          break;
        default:
          this.adapter.focusListRoot();
          break;
      }
    }, e.prototype.setDefaultFocusState = function(t) {
      this.defaultFocusState = t;
    }, e.prototype.getSelectedIndex = function() {
      return this.selectedIndex;
    }, e.prototype.setSelectedIndex = function(t) {
      if (this.validatedIndex(t), !this.adapter.isSelectableItemAtIndex(t))
        throw new Error("MDCMenuFoundation: No selection group at specified index.");
      var r = this.adapter.getSelectedSiblingOfItemAtIndex(t);
      r >= 0 && (this.adapter.removeAttributeFromElementAtIndex(r, Mi.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(r, Bi.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(t, Bi.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(t, Mi.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = t;
    }, e.prototype.setEnabled = function(t, r) {
      this.validatedIndex(t), r ? (this.adapter.removeClassFromElementAtIndex(t, Fe.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(t, Mi.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(t, Fe.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(t, Mi.ARIA_DISABLED_ATTR, "true"));
    }, e.prototype.validatedIndex = function(t) {
      var r = this.adapter.getMenuItemCount(), i = t >= 0 && t < r;
      if (!i)
        throw new Error("MDCMenuFoundation: No list item at specified index.");
    }, e;
  }(In)
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
var lt = {
  ACTIVATED: "mdc-select--activated",
  DISABLED: "mdc-select--disabled",
  FOCUSED: "mdc-select--focused",
  INVALID: "mdc-select--invalid",
  MENU_INVALID: "mdc-select__menu--invalid",
  OUTLINED: "mdc-select--outlined",
  REQUIRED: "mdc-select--required",
  ROOT: "mdc-select",
  WITH_LEADING_ICON: "mdc-select--with-leading-icon"
}, eo = {
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
}, ti = {
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
var Yh = (
  /** @class */
  function(n) {
    _n(e, n);
    function e(t, r) {
      r === void 0 && (r = {});
      var i = n.call(this, qe(qe({}, e.defaultAdapter), t)) || this;
      return i.disabled = !1, i.isMenuOpen = !1, i.useDefaultValidation = !0, i.customValidity = !0, i.lastSelectedIndex = ti.UNSET_INDEX, i.clickDebounceTimeout = 0, i.recentlyClicked = !1, i.leadingIcon = r.leadingIcon, i.helperText = r.helperText, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return lt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return ti;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return eo;
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
    }, e.prototype.setSelectedIndex = function(t, r, i) {
      r === void 0 && (r = !1), i === void 0 && (i = !1), !(t >= this.adapter.getMenuItemCount()) && (t === ti.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(t).trim()), this.adapter.setSelectedIndex(t), r && this.adapter.closeMenu(), !i && this.lastSelectedIndex !== t && this.handleChange(), this.lastSelectedIndex = t);
    }, e.prototype.setValue = function(t, r) {
      r === void 0 && (r = !1);
      var i = this.adapter.getMenuItemValues().indexOf(t);
      this.setSelectedIndex(
        i,
        /** closeMenu */
        !1,
        r
      );
    }, e.prototype.getValue = function() {
      var t = this.adapter.getSelectedIndex(), r = this.adapter.getMenuItemValues();
      return t !== ti.UNSET_INDEX ? r[t] : "";
    }, e.prototype.getDisabled = function() {
      return this.disabled;
    }, e.prototype.setDisabled = function(t) {
      this.disabled = t, this.disabled ? (this.adapter.addClass(lt.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(lt.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
    }, e.prototype.openMenu = function() {
      this.adapter.addClass(lt.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true");
    }, e.prototype.setHelperTextContent = function(t) {
      this.helperText && this.helperText.setContent(t);
    }, e.prototype.layout = function() {
      if (this.adapter.hasLabel()) {
        var t = this.getValue().length > 0, r = this.adapter.hasClass(lt.FOCUSED), i = t || r, a = this.adapter.hasClass(lt.REQUIRED);
        this.notchOutline(i), this.adapter.floatLabel(i), this.adapter.setLabelRequired(a);
      }
    }, e.prototype.layoutOptions = function() {
      var t = this.adapter.getMenuItemValues(), r = t.indexOf(this.getValue());
      this.setSelectedIndex(
        r,
        /** closeMenu */
        !1,
        /** skipNotify */
        !0
      );
    }, e.prototype.handleMenuOpened = function() {
      if (this.adapter.getMenuItemValues().length !== 0) {
        var t = this.getSelectedIndex(), r = t >= 0 ? t : 0;
        this.adapter.focusMenuItemAtIndex(r);
      }
    }, e.prototype.handleMenuClosing = function() {
      this.adapter.setSelectAnchorAttr("aria-expanded", "false");
    }, e.prototype.handleMenuClosed = function() {
      this.adapter.removeClass(lt.ACTIVATED), this.isMenuOpen = !1, this.adapter.isSelectAnchorFocused() || this.blur();
    }, e.prototype.handleChange = function() {
      this.layout(), this.adapter.notifyChange(this.getValue());
      var t = this.adapter.hasClass(lt.REQUIRED);
      t && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.handleMenuItemAction = function(t) {
      this.setSelectedIndex(
        t,
        /** closeMenu */
        !0
      );
    }, e.prototype.handleFocus = function() {
      this.adapter.addClass(lt.FOCUSED), this.layout(), this.adapter.activateBottomLine();
    }, e.prototype.handleBlur = function() {
      this.isMenuOpen || this.blur();
    }, e.prototype.handleClick = function(t) {
      if (!(this.disabled || this.recentlyClicked)) {
        if (this.setClickDebounceTimeout(), this.isMenuOpen) {
          this.adapter.closeMenu();
          return;
        }
        this.adapter.setRippleCenter(t), this.openMenu();
      }
    }, e.prototype.handleKeydown = function(t) {
      if (!(this.isMenuOpen || !this.adapter.hasClass(lt.FOCUSED))) {
        var r = It(t) === De.ENTER, i = It(t) === De.SPACEBAR, a = It(t) === De.ARROW_UP, s = It(t) === De.ARROW_DOWN, u = t.ctrlKey || t.metaKey;
        if (!u && (!i && t.key && t.key.length === 1 || i && this.adapter.isTypeaheadInProgress())) {
          var l = i ? " " : t.key, d = this.adapter.typeaheadMatchItem(l, this.getSelectedIndex());
          d >= 0 && this.setSelectedIndex(d), t.preventDefault();
          return;
        }
        !r && !i && !a && !s || (this.openMenu(), t.preventDefault());
      }
    }, e.prototype.notchOutline = function(t) {
      if (this.adapter.hasOutline()) {
        var r = this.adapter.hasClass(lt.FOCUSED);
        if (t) {
          var i = ti.LABEL_SCALE, a = this.adapter.getLabelWidth() * i;
          this.adapter.notchOutline(a);
        } else r || this.adapter.closeOutline();
      }
    }, e.prototype.setLeadingIconAriaLabel = function(t) {
      this.leadingIcon && this.leadingIcon.setAriaLabel(t);
    }, e.prototype.setLeadingIconContent = function(t) {
      this.leadingIcon && this.leadingIcon.setContent(t);
    }, e.prototype.getUseDefaultValidation = function() {
      return this.useDefaultValidation;
    }, e.prototype.setUseDefaultValidation = function(t) {
      this.useDefaultValidation = t;
    }, e.prototype.setValid = function(t) {
      this.useDefaultValidation || (this.customValidity = t), this.adapter.setSelectAnchorAttr("aria-invalid", (!t).toString()), t ? (this.adapter.removeClass(lt.INVALID), this.adapter.removeMenuClass(lt.MENU_INVALID)) : (this.adapter.addClass(lt.INVALID), this.adapter.addMenuClass(lt.MENU_INVALID)), this.syncHelperTextValidity(t);
    }, e.prototype.isValid = function() {
      return this.useDefaultValidation && this.adapter.hasClass(lt.REQUIRED) && !this.adapter.hasClass(lt.DISABLED) ? this.getSelectedIndex() !== ti.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(t) {
      t ? this.adapter.addClass(lt.REQUIRED) : this.adapter.removeClass(lt.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", t.toString()), this.adapter.setLabelRequired(t);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var t = this.adapter.getAnchorElement();
      t && (this.adapter.setMenuAnchorElement(t), this.adapter.setMenuAnchorCorner(gi.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(lt.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(lt.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(lt.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var t = this.adapter.hasClass(lt.REQUIRED);
      t && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.syncHelperTextValidity = function(t) {
      if (this.helperText) {
        this.helperText.setValidity(t);
        var r = this.helperText.isVisible(), i = this.helperText.getId();
        r && i ? this.adapter.setSelectAnchorAttr(eo.ARIA_DESCRIBEDBY, i) : this.adapter.removeSelectAnchorAttr(eo.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.setClickDebounceTimeout = function() {
      var t = this;
      clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout(function() {
        t.recentlyClicked = !1;
      }, ti.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
    }, e;
  }(In)
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
var ni = {
  ARIA_HIDDEN: "aria-hidden",
  ROLE: "role"
}, dr = {
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
var Jh = (
  /** @class */
  function(n) {
    _n(e, n);
    function e(t) {
      return n.call(this, qe(qe({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return dr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return ni;
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
      return this.adapter.getAttr(ni.ARIA_HIDDEN) !== "true";
    }, e.prototype.setContent = function(t) {
      this.adapter.setContent(t);
    }, e.prototype.setValidation = function(t) {
      t ? this.adapter.addClass(dr.HELPER_TEXT_VALIDATION_MSG) : this.adapter.removeClass(dr.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.setValidationMsgPersistent = function(t) {
      t ? this.adapter.addClass(dr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT) : this.adapter.removeClass(dr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.getIsValidation = function() {
      return this.adapter.hasClass(dr.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.getIsValidationMsgPersistent = function() {
      return this.adapter.hasClass(dr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.setValidity = function(t) {
      var r = this.adapter.hasClass(dr.HELPER_TEXT_VALIDATION_MSG);
      if (r) {
        var i = this.adapter.hasClass(dr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT), a = !t || i;
        if (a) {
          this.showToScreenReader(), t ? this.adapter.removeAttr(ni.ROLE) : this.adapter.setAttr(ni.ROLE, "alert");
          return;
        }
        this.adapter.removeAttr(ni.ROLE), this.hide();
      }
    }, e.prototype.showToScreenReader = function() {
      this.adapter.removeAttr(ni.ARIA_HIDDEN);
    }, e.prototype.hide = function() {
      this.adapter.setAttr(ni.ARIA_HIDDEN, "true");
    }, e;
  }(In)
), Qh = /* @__PURE__ */ Z("<div><!></div>");
function $h(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "static", 3, !1), s = m(e, "anchor", 3, !0), u = m(e, "fixed", 3, !1), l = m(e, "open", 31, () => Ce(a())), d = m(e, "managed", 3, !1), c = m(e, "fullWidth", 3, !1), h = m(e, "quickOpen", 3, !1), f = m(e, "anchorElement", 15), g = m(e, "anchorMargin", 19, () => ({ top: 0, right: 0, bottom: 0, left: 0 })), v = m(e, "maxHeight", 3, 0), p = m(e, "horizontallyCenteredOnViewport", 3, !1), _ = m(e, "openBottomBias", 3, 0), y = m(e, "neverRestoreFocus", 3, !1), w = /* @__PURE__ */ We(e, [
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
  ]), S, A = /* @__PURE__ */ le(void 0), T = Ce({}), I = Ce({}), b = /* @__PURE__ */ le(void 0);
  de("SMUI:list:role", "menu"), de("SMUI:list:item:role", "menuitem"), Se(() => {
    var k, Q;
    S && s() && !((k = S.parentElement) != null && k.classList.contains("mdc-menu-surface--anchor")) && ((Q = S.parentElement) == null || Q.classList.add("mdc-menu-surface--anchor"), f(S.parentElement ?? void 0));
  }), Se(() => {
    o(A) && o(A).isOpen() !== l() && (l() ? o(A).open() : o(A).close());
  }), Se(() => {
    o(A) && o(A).setQuickOpen(h());
  }), Se(() => {
    o(A) && o(A).setFixedPosition(u());
  }), Se(() => {
    o(A) && o(A).setMaxHeight(v());
  }), Se(() => {
    o(A) && o(A).setIsHorizontallyCenteredOnViewport(p());
  });
  const C = gi;
  Se(() => {
    o(A) && e.anchorCorner != null && (typeof e.anchorCorner == "string" ? o(A).setAnchorCorner(C[e.anchorCorner]) : o(A).setAnchorCorner(e.anchorCorner));
  }), Se(() => {
    o(A) && o(A).setAnchorMargin(g());
  }), Se(() => {
    o(A) && o(A).setOpenBottomBias(_());
  });
  const x = ye("SMUI:menu-surface:mount"), D = ye("SMUI:menu-surface:unmount");
  rt(() => {
    G(
      A,
      new od({
        addClass: O,
        removeClass: R,
        hasClass: L,
        hasAnchor: () => !!f(),
        notifyClose: () => {
          d() || l(a()), l() || Ge(se(), "SMUIMenuSurfaceClosed");
        },
        notifyClosing: () => {
          d() || l(a()), l() || Ge(se(), "SMUIMenuSurfaceClosing");
        },
        notifyOpen: () => {
          d() || l(!0), l() && Ge(se(), "SMUIMenuSurfaceOpened");
        },
        notifyOpening: () => {
          l() || Ge(se(), "SMUIMenuSurfaceOpening");
        },
        isElementInContainer: (Q) => se().contains(Q),
        isRtl: () => getComputedStyle(se()).getPropertyValue("direction") === "rtl",
        setTransformOrigin: (Q) => {
          I["transform-origin"] = Q;
        },
        isFocused: () => document.activeElement === se(),
        saveFocus: () => {
          G(b, document.activeElement ?? void 0, !0);
        },
        restoreFocus: () => {
          !y() && (!S || se().contains(document.activeElement)) && o(b) && document.contains(o(b)) && "focus" in o(b) && o(b).focus();
        },
        getInnerDimensions: () => ({
          width: se().offsetWidth,
          height: se().offsetHeight
        }),
        getAnchorDimensions: () => f() ? f().getBoundingClientRect() : null,
        getWindowDimensions: () => ({ width: window.innerWidth, height: window.innerHeight }),
        getBodyDimensions: () => ({
          width: document.body.clientWidth,
          height: document.body.clientHeight
        }),
        getWindowScroll: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
        setPosition: (Q) => {
          I.left = "left" in Q ? `${Q.left}px` : "", I.right = "right" in Q ? `${Q.right}px` : "", I.top = "top" in Q ? `${Q.top}px` : "", I.bottom = "bottom" in Q ? `${Q.bottom}px` : "";
        },
        setMaxHeight: (Q) => {
          I["max-height"] = Q;
        }
      }),
      !0
    );
    const k = {
      get open() {
        return l();
      },
      set open(Q) {
        l(Q);
      },
      closeProgrammatic: re
    };
    return x && x(k), o(A).init(), () => {
      var X, fe;
      D && D(k);
      const Q = o(A).isHoistedElement;
      (X = o(A)) == null || X.destroy(), Q && ((fe = se().parentNode) == null || fe.removeChild(se()));
    };
  }), Rn(() => {
    var k;
    s() && se() && ((k = se().parentElement) == null || k.classList.remove("mdc-menu-surface--anchor"));
  });
  function L(k) {
    return k in T ? T[k] : se().classList.contains(k);
  }
  function O(k) {
    T[k] || (T[k] = !0);
  }
  function R(k) {
    (!(k in T) || T[k]) && (T[k] = !1);
  }
  function re(k) {
    var Q;
    (Q = o(A)) == null || Q.close(k), l(!1);
  }
  function q(k) {
    o(A) && l() && !d() && o(A).handleBodyClick(k);
  }
  function N() {
    return l();
  }
  function H(k) {
    l(k);
  }
  function J(k, Q) {
    if (o(A) == null)
      throw new Error("Instance is not defined.");
    return o(A).setAbsolutePosition(k, Q);
  }
  function ue(k) {
    if (o(A) == null)
      throw new Error("Instance is not defined.");
    return o(A).setIsHoisted(k);
  }
  function F() {
    if (o(A) == null)
      throw new Error("Instance is not defined.");
    return o(A).isFixed();
  }
  function $() {
    if (o(A) == null)
      throw new Error("Instance is not defined.");
    return o(A).flipCornerHorizontally();
  }
  function se() {
    return S;
  }
  var _e = {
    isOpen: N,
    setOpen: H,
    setAbsolutePosition: J,
    setIsHoisted: ue,
    isFixed: F,
    flipCornerHorizontally: $,
    getElement: se
  }, he = Qh();
  Yt("click", Bo.body, q, !0);
  var z = (k) => {
    var Q;
    o(A) && !d() && o(A).handleKeydown(k), (Q = e.onkeydown) == null || Q.call(e, k);
  };
  Be(
    he,
    (k, Q) => ({
      class: k,
      style: Q,
      role: "dialog",
      ...w,
      onkeydown: z
    }),
    [
      () => He({
        "mdc-menu-surface": !0,
        "mdc-menu-surface--fixed": u(),
        "mdc-menu-surface--open": a(),
        "smui-menu-surface--static": a(),
        "mdc-menu-surface--fullwidth": c(),
        ...T,
        [r()]: !0
      }),
      () => Object.entries(I).map(([k, Q]) => `${k}: ${Q};`).concat([i()]).join(" ")
    ]
  );
  var W = V(he);
  return Ie(W, () => e.children ?? pe), xe(he, (k) => S = k, () => S), Le(he, (k, Q) => ie == null ? void 0 : ie(k, Q), t), E(n, he), Ee(_e);
}
function to(n, { addClass: e = (r) => n.classList.add(r), removeClass: t = (r) => n.classList.remove(r) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      t("mdc-menu-surface--anchor");
    }
  };
}
function ev(n, e) {
  Ae(e, !0);
  const { closest: t } = Ua;
  let r = m(e, "use", 19, () => []), i = m(e, "class", 3, ""), a = m(e, "open", 15, !1), s = m(e, "anchorElement", 15), u = m(e, "managed", 3, !1), l = /* @__PURE__ */ We(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "open",
    "anchorElement",
    "managed",
    "children"
  ]), d, c = /* @__PURE__ */ le(void 0), h = /* @__PURE__ */ le(void 0), f = /* @__PURE__ */ le(void 0);
  de("SMUI:menu-surface:mount", (C) => {
    o(h) || G(h, C, !0);
  });
  const g = ye("SMUI:list:mount");
  de("SMUI:list:mount", (C) => {
    o(f) || G(f, C, !0), g && g(C);
  });
  const v = ye("SMUI:menu:mount"), p = ye("SMUI:menu:unmount");
  rt(() => (G(
    c,
    new Kh({
      addClassToElementAtIndex: (C, x) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).addClassForElementIndex(C, x);
      },
      removeClassFromElementAtIndex: (C, x) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).removeClassForElementIndex(C, x);
      },
      addAttributeToElementAtIndex: (C, x, D) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).setAttributeForElementIndex(C, x, D);
      },
      removeAttributeFromElementAtIndex: (C, x) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).removeAttributeForElementIndex(C, x);
      },
      getAttributeFromElementAtIndex: (C, x) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return o(f).getAttributeFromElementIndex(C, x);
      },
      elementContainsClass: (C, x) => C.classList.contains(x),
      closeSurface: (C) => {
        var x;
        u() || ((x = o(h)) == null || x.closeProgrammatic(C), Ge(I(), "SMUIMenuClosedProgrammatically"));
      },
      getElementIndex: (C) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return o(f).getOrderedList().map((x) => x.element).indexOf(C);
      },
      notifySelected: (C) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        Ge(I(), "SMUIMenuSelected", {
          index: C.index,
          item: o(f).getOrderedList()[C.index].element
        });
      },
      getMenuItemCount: () => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return o(f).items.length;
      },
      focusItemAtIndex: (C) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).focusItemAtIndex(C);
      },
      focusListRoot: () => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        "focus" in o(f).element && o(f).element.focus();
      },
      isSelectableItemAtIndex: (C) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return !!t(o(f).getOrderedList()[C].element, `.${Bi.MENU_SELECTION_GROUP}`);
      },
      getSelectedSiblingOfItemAtIndex: (C) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        const x = o(f).getOrderedList(), D = t(x[C].element, `.${Bi.MENU_SELECTION_GROUP}`), L = D == null ? void 0 : D.querySelector(`.${Bi.MENU_SELECTED_LIST_ITEM}`);
        return L ? x.map((O) => O.element).indexOf(L) : -1;
      }
    }),
    !0
  ), v && v(o(c)), o(c).init(), () => {
    var C;
    p && o(c) && p(o(c)), (C = o(c)) == null || C.destroy();
  }));
  function _(C) {
    o(c) && o(c).handleKeydown(C);
  }
  function y() {
    return a();
  }
  function w(C) {
    a(C);
  }
  function S(C) {
    if (o(c) == null)
      throw new Error("Instance is undefined.");
    o(c).setDefaultFocusState(C);
  }
  function A() {
    if (o(c) == null)
      throw new Error("Instance is undefined.");
    return o(c).getSelectedIndex();
  }
  function T() {
    return d;
  }
  function I() {
    return d.getElement();
  }
  var b = {
    isOpen: y,
    setOpen: w,
    setDefaultFocusState: S,
    getSelectedIndex: A,
    getMenuSurface: T,
    getElement: I
  };
  {
    let C = /* @__PURE__ */ te(() => He({ "mdc-menu": !0, [i()]: !0 }));
    xe(
      $h(n, Ye(
        {
          get use() {
            return r();
          },
          get class() {
            return o(C);
          },
          get managed() {
            return u();
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
            o(c) && o(c).handleMenuSurfaceOpened(), (D = e.onSMUIMenuSurfaceOpened) == null || D.call(e, x);
          },
          onSMUIListAction: (x) => {
            var D;
            o(c) && o(f) && o(c).handleItemAction(o(f).getOrderedList()[x.detail.index].element), (D = e.onSMUIListAction) == null || D.call(e, x);
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
            var L = oe(), O = K(L);
            Ie(O, () => e.children ?? pe), E(x, L);
          },
          $$slots: { default: !0 }
        }
      )),
      (x) => d = x,
      () => d
    );
  }
  return Ee(b);
}
function tv(n, e) {
  Ae(e, !0);
  const { closest: t, matches: r } = Ua;
  let i = ye("SMUI:list:nav"), a = m(e, "use", 19, () => []), s = m(e, "class", 3, ""), u = m(e, "nonInteractive", 3, !1), l = m(e, "dense", 3, !1), d = m(e, "textualList", 3, !1), c = m(e, "avatarList", 3, !1), h = m(e, "iconList", 3, !1), f = m(e, "imageList", 3, !1), g = m(e, "thumbnailList", 3, !1), v = m(e, "videoList", 3, !1), p = m(e, "twoLine", 3, !1), _ = m(e, "threeLine", 3, !1), y = m(e, "vertical", 3, !0), w = m(e, "wrapFocus", 19, () => ye("SMUI:list:wrapFocus") ?? !1), S = m(e, "singleSelection", 3, !1), A = m(e, "disabledItemsFocusable", 3, !1), T = m(e, "selectedIndex", 31, () => -1), I = m(e, "radioList", 3, !1), b = m(e, "checkList", 3, !1), C = m(e, "hasTypeahead", 3, !1), x = m(e, "component", 3, Ps), D = m(e, "tag", 3, i ? "nav" : "ul"), L = /* @__PURE__ */ We(e, [
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
  ]), O, R = /* @__PURE__ */ le(void 0), re = [], q = ye("SMUI:list:role");
  const N = /* @__PURE__ */ new WeakMap();
  let H = ye("SMUI:dialog:selection"), J = ye("SMUI:addLayoutListener"), ue;
  de("SMUI:list:nonInteractive", u()), de("SMUI:separator:context", "list"), q || (S() ? (q = "listbox", de("SMUI:list:item:role", "option")) : I() ? (q = "radiogroup", de("SMUI:list:item:role", "radio")) : b() ? (q = "group", de("SMUI:list:item:role", "checkbox")) : (q = "list", de("SMUI:list:item:role", void 0))), Se(() => {
    o(R) && o(R).setVerticalOrientation(y());
  }), Se(() => {
    o(R) && o(R).setWrapFocus(w());
  }), Se(() => {
    o(R) && o(R).setHasTypeahead(C());
  }), Se(() => {
    o(R) && o(R).setSingleSelection(S());
  }), Se(() => {
    o(R) && o(R).setDisabledItemsFocusable(A());
  }), Se(() => {
    o(R) && S() && P() !== T() && o(R).setSelectedIndex(T());
  }), J && (ue = J(mt)), de("SMUI:list:item:mount", (me) => {
    re.push(me), N.set(me.element, me), S() && me.selected && T(Oe(me.element));
  }), de("SMUI:list:item:unmount", (me) => {
    const B = (me && re.findIndex((U) => U === me)) ?? -1;
    B !== -1 && (re.splice(B, 1), N.delete(me.element));
  });
  const F = ye("SMUI:list:mount"), $ = ye("SMUI:list:unmount");
  rt(() => {
    G(
      R,
      new Zh({
        addClassForElementIndex: X,
        focusItemAtIndex: ve,
        getAttributeForElementIndex: (B, U) => {
          var ne;
          return ((ne = k()[B]) == null ? void 0 : ne.getAttr(U)) ?? null;
        },
        getFocusedElementIndex: () => document.activeElement ? k().map((B) => B.element).indexOf(document.activeElement) : -1,
        getListItemCount: () => re.length,
        getPrimaryTextAtIndex: Je,
        hasCheckboxAtIndex: (B) => {
          var U;
          return ((U = k()[B]) == null ? void 0 : U.hasCheckbox) ?? !1;
        },
        hasRadioAtIndex: (B) => {
          var U;
          return ((U = k()[B]) == null ? void 0 : U.hasRadio) ?? !1;
        },
        isCheckboxCheckedAtIndex: (B) => {
          const U = k()[B];
          return ((U == null ? void 0 : U.hasCheckbox) && U.checked) ?? !1;
        },
        isFocusInsideList: () => O != null && Pe() !== document.activeElement && Pe().contains(document.activeElement),
        isRootFocused: () => O != null && document.activeElement === Pe(),
        listItemAtIndexHasClass: Q,
        notifyAction: (B) => {
          T(B), O != null && Ge(Pe(), "SMUIListAction", { index: B });
        },
        notifySelectionChange: (B) => {
          O != null && Ge(Pe(), "SMUIListSelectionChange", { changedIndices: B });
        },
        removeClassForElementIndex: fe,
        setAttributeForElementIndex: be,
        setCheckedCheckboxOrRadioAtIndex: (B, U) => {
          k()[B].checked = U;
        },
        setTabIndexForListItemChildren: (B, U) => {
          const ne = k()[B];
          Array.prototype.forEach.call(ne.element.querySelectorAll("button:not(:disabled), a"), (ot) => {
            ot.setAttribute("tabindex", U);
          });
        }
      }),
      !0
    );
    const me = {
      get element() {
        return Pe();
      },
      get items() {
        return re;
      },
      get typeaheadInProgress() {
        if (!o(R))
          throw new Error("Instance is undefined.");
        return o(R).isTypeaheadInProgress();
      },
      typeaheadMatchItem(B, U) {
        if (!o(R))
          throw new Error("Instance is undefined.");
        return o(R).typeaheadMatchItem(
          B,
          U,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: k,
      focusItemAtIndex: ve,
      addClassForElementIndex: X,
      removeClassForElementIndex: fe,
      setAttributeForElementIndex: be,
      removeAttributeForElementIndex: Ne,
      getAttributeFromElementIndex: tt,
      getPrimaryTextAtIndex: Je
    };
    return F && F(me), o(R).init(), o(R).layout(), () => {
      var B;
      $ && $(me), (B = o(R)) == null || B.destroy();
    };
  }), Rn(() => {
    ue && ue();
  });
  function se(me) {
    o(R) && me.target && o(R).handleKeydown(me, me.target.classList.contains("mdc-deprecated-list-item"), Oe(me.target));
  }
  function _e(me) {
    o(R) && me.target && o(R).handleFocusIn(Oe(me.target));
  }
  function he(me) {
    o(R) && me.target && o(R).handleFocusOut(Oe(me.target));
  }
  function z(me) {
    o(R) && me.target && o(R).handleClick(Oe(me.target), !r(me.target, 'input[type="checkbox"], input[type="radio"]'), me);
  }
  function W(me) {
    if (I() || b()) {
      const B = Oe(me.target);
      if (B !== -1) {
        const U = k()[B];
        U && (I() && !U.checked || b()) && (r(me.detail.target, 'input[type="checkbox"], input[type="radio"]') || (U.checked = !U.checked), U.activateRipple(), window.requestAnimationFrame(() => {
          U.deactivateRipple();
        }));
      }
    }
  }
  function k() {
    return O == null ? [] : [...Pe().children].map((me) => N.get(me)).filter((me) => me && me._smui_list_item_accessor);
  }
  function Q(me, B) {
    const U = k()[me];
    return (U && U.hasClass(B)) ?? !1;
  }
  function X(me, B) {
    const U = k()[me];
    U && U.addClass(B);
  }
  function fe(me, B) {
    const U = k()[me];
    U && U.removeClass(B);
  }
  function be(me, B, U) {
    const ne = k()[me];
    ne && ne.addAttr(B, U);
  }
  function Ne(me, B) {
    const U = k()[me];
    U && U.removeAttr(B);
  }
  function tt(me, B) {
    const U = k()[me];
    return U ? U.getAttr(B) : null;
  }
  function Je(me) {
    const B = k()[me];
    return (B && B.getPrimaryText()) ?? "";
  }
  function Oe(me) {
    const B = t(me, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return B && r(B, ".mdc-deprecated-list-item") ? k().map((U) => U == null ? void 0 : U.element).indexOf(B) : -1;
  }
  function mt() {
    if (!o(R))
      throw new Error("Instance is undefined.");
    return o(R).layout();
  }
  function kt(me, B) {
    if (!o(R))
      throw new Error("Instance is undefined.");
    return o(R).setEnabled(me, B);
  }
  function Ft() {
    if (!o(R))
      throw new Error("Instance is undefined.");
    return o(R).isTypeaheadInProgress();
  }
  function P() {
    if (!o(R))
      throw new Error("Instance is undefined.");
    return o(R).getSelectedIndex();
  }
  function j() {
    if (!o(R))
      throw new Error("Instance is undefined.");
    return o(R).getFocusedItemIndex();
  }
  function ve(me) {
    const B = k()[me];
    B && "focus" in B.element && B.element.focus();
  }
  function Pe() {
    return O.getElement();
  }
  var Nt = {
    layout: mt,
    setEnabled: kt,
    getTypeaheadInProgress: Ft,
    getSelectedIndex: P,
    getFocusedItemIndex: j,
    focusItemAtIndex: ve,
    getElement: Pe
  }, fn = oe(), ir = K(fn);
  {
    let me = /* @__PURE__ */ te(() => He({
      "mdc-deprecated-list": !0,
      "mdc-deprecated-list--non-interactive": u(),
      "mdc-deprecated-list--dense": l(),
      "mdc-deprecated-list--textual-list": d(),
      "mdc-deprecated-list--avatar-list": c() || H,
      "mdc-deprecated-list--icon-list": h(),
      "mdc-deprecated-list--image-list": f(),
      "mdc-deprecated-list--thumbnail-list": g(),
      "mdc-deprecated-list--video-list": v(),
      "mdc-deprecated-list--two-line": p(),
      "smui-list--three-line": _() && !p(),
      [s()]: !0
    }));
    Na(ir, x, (B, U) => {
      xe(
        U(B, Ye(
          {
            get tag() {
              return D();
            },
            get use() {
              return a();
            },
            get class() {
              return o(me);
            },
            get role() {
              return q;
            }
          },
          () => L,
          {
            onkeydown: (ne) => {
              var Te;
              se(ne), (Te = e.onkeydown) == null || Te.call(e, ne);
            },
            onfocusin: (ne) => {
              var Te;
              _e(ne), (Te = e.onfocusin) == null || Te.call(e, ne);
            },
            onfocusout: (ne) => {
              var Te;
              he(ne), (Te = e.onfocusout) == null || Te.call(e, ne);
            },
            onclick: (ne) => {
              var Te;
              z(ne), (Te = e.onclick) == null || Te.call(e, ne);
            },
            onSMUIAction: (ne) => {
              var Te;
              W(ne), (Te = e.onSMUIAction) == null || Te.call(e, ne);
            },
            children: (ne, Te) => {
              var ot = oe(), pt = K(ot);
              Ie(pt, () => e.children ?? pe), E(ne, ot);
            },
            $$slots: { default: !0 }
          }
        )),
        (ne) => O = ne,
        () => O
      );
    });
  }
  return E(n, fn), Ee(Nt);
}
let nv = 0;
var rv = /* @__PURE__ */ Z('<span class="mdc-deprecated-list-item__ripple"></span>'), iv = /* @__PURE__ */ Z("<!><!>", 1);
function av(n, e) {
  Ae(e, !0);
  let t = () => {
  };
  function r(X) {
    return X === t;
  }
  let i = ye("SMUI:list:item:nav"), a = m(e, "use", 19, () => []), s = m(e, "class", 3, ""), u = m(e, "style", 3, ""), l = m(e, "nonInteractive", 19, () => ye("SMUI:list:nonInteractive") ?? !1), d = m(e, "ripple", 19, () => !l()), c = m(e, "wrapper", 3, !1), h = m(e, "activated", 15, !1), f = m(e, "role", 19, () => c() ? "presentation" : ye("SMUI:list:item:role")), g = m(e, "selected", 15, !1), v = m(e, "disabled", 3, !1), p = m(e, "skipRestoreFocus", 3, !1), _ = m(e, "tabindex", 15, t), y = m(e, "inputId", 19, () => "SMUI-form-field-list-" + nv++), w = m(e, "component", 3, Ps), S = m(e, "tag", 19, () => i ? e.href ? "a" : "span" : "li"), A = /* @__PURE__ */ We(e, [
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
  de("SMUI:list:nonInteractive", void 0), de("SMUI:list:item:role", void 0);
  let T, I = Ce({}), b = Ce({}), C = Ce({}), x = /* @__PURE__ */ le(void 0), D = /* @__PURE__ */ le(void 0);
  const L = /* @__PURE__ */ te(() => r(_()) ? !l() && !v() && (g() || o(x) && o(x).checked) ? 0 : -1 : _());
  de("SMUI:generic:input:props", { id: y() }), de("SMUI:separator:context", void 0), de("SMUI:generic:input:mount", (X) => {
    ("_smui_checkbox_accessor" in X || "_smui_radio_accessor" in X) && G(x, X, !0);
  }), de("SMUI:generic:input:unmount", () => {
    G(x, void 0);
  });
  const O = ye("SMUI:list:item:mount"), R = ye("SMUI:list:item:unmount");
  rt(() => {
    if (!g() && !l()) {
      let fe = !0, be = T.getElement();
      for (; be.previousElementSibling; )
        if (be = be.previousElementSibling, be.nodeType === 1 && be.classList.contains("mdc-deprecated-list-item") && !be.classList.contains("mdc-deprecated-list-item--disabled")) {
          fe = !1;
          break;
        }
      fe && G(D, window.requestAnimationFrame(() => $(be)), !0);
    }
    const X = {
      _smui_list_item_accessor: !0,
      get element() {
        return z();
      },
      get selected() {
        return g();
      },
      set selected(fe) {
        g(fe);
      },
      hasClass: re,
      addClass: q,
      removeClass: N,
      getAttr: J,
      addAttr: ue,
      removeAttr: F,
      getPrimaryText: he,
      // For inputs within item.
      get checked() {
        return (o(x) && o(x).checked) ?? !1;
      },
      set checked(fe) {
        o(x) && (o(x).checked = !!fe);
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
      action: _e,
      get tabindex() {
        return o(L);
      },
      set tabindex(fe) {
        _(fe);
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
    return O && O(X), () => {
      R && R(X);
    };
  }), Rn(() => {
    o(D) && window.cancelAnimationFrame(o(D));
  });
  function re(X) {
    return X in I ? I[X] : z().classList.contains(X);
  }
  function q(X) {
    I[X] || (I[X] = !0);
  }
  function N(X) {
    (!(X in I) || I[X]) && (I[X] = !1);
  }
  function H(X, fe) {
    b[X] != fe && (fe === "" || fe == null ? delete b[X] : b[X] = fe);
  }
  function J(X) {
    return X in C ? C[X] ?? null : z().getAttribute(X);
  }
  function ue(X, fe) {
    C[X] !== fe && (C[X] = fe);
  }
  function F(X) {
    (!(X in C) || C[X] != null) && (C[X] = void 0);
  }
  function $(X) {
    let fe = !0;
    for (; X.nextElementSibling; )
      if (X = X.nextElementSibling, X.nodeType === 1 && X.classList.contains("mdc-deprecated-list-item")) {
        const be = X.attributes.getNamedItem("tabindex");
        if (be && be.value === "0") {
          fe = !1;
          break;
        }
      }
    fe && _(0);
  }
  function se(X) {
    const fe = X.key === "Enter", be = X.key === "Space";
    (fe || be) && _e(X);
  }
  function _e(X) {
    v() || Ge(z(), "SMUIAction", X);
  }
  function he() {
    const X = z(), fe = X.querySelector(".mdc-deprecated-list-item__primary-text");
    if (fe)
      return fe.textContent ?? "";
    const be = X.querySelector(".mdc-deprecated-list-item__text");
    return be ? be.textContent ?? "" : X.textContent ?? "";
  }
  function z() {
    return T.getElement();
  }
  var W = { action: _e, getPrimaryText: he, getElement: z }, k = oe(), Q = K(k);
  {
    let X = /* @__PURE__ */ te(() => [
      ...l() ? [] : [
        [
          kn,
          {
            ripple: !o(x),
            unbounded: !1,
            color: (h() || g()) && e.color == null ? "primary" : e.color,
            disabled: v(),
            addClass: q,
            removeClass: N,
            addStyle: H
          }
        ]
      ],
      ...a()
    ]), fe = /* @__PURE__ */ te(() => He({
      "mdc-deprecated-list-item": !c(),
      "mdc-deprecated-list-item__wrapper": c(),
      "mdc-deprecated-list-item--activated": h(),
      "mdc-deprecated-list-item--selected": g(),
      "mdc-deprecated-list-item--disabled": v(),
      "mdc-menu-item--selected": !i && f() === "menuitem" && g(),
      "smui-menu-item--non-interactive": l(),
      ...I,
      [s()]: !0
    })), be = /* @__PURE__ */ te(() => Object.entries(b).map(([tt, Je]) => `${tt}: ${Je};`).concat([u()]).join(" ")), Ne = /* @__PURE__ */ te(() => p() || void 0);
    Na(Q, w, (tt, Je) => {
      xe(
        Je(tt, Ye(
          {
            get tag() {
              return S();
            },
            get use() {
              return o(X);
            },
            get class() {
              return o(fe);
            },
            get style() {
              return o(be);
            }
          },
          () => i && h() ? { "aria-current": "page" } : {},
          () => !i || c() ? { role: f() } : {},
          () => !i && f() === "option" ? { "aria-selected": g() ? "true" : "false" } : {},
          () => !i && (f() === "radio" || f() === "checkbox") ? {
            "aria-checked": o(x) && o(x).checked ? "true" : "false"
          } : {},
          () => i ? {} : { "aria-disabled": v() ? "true" : "false" },
          {
            get "data-menu-item-skip-restore-focus"() {
              return o(Ne);
            },
            get tabindex() {
              return o(L);
            },
            get href() {
              return e.href;
            }
          },
          () => C,
          () => A,
          {
            onclick: (Oe) => {
              var mt;
              _e(Oe), (mt = e.onclick) == null || mt.call(e, Oe);
            },
            onkeydown: (Oe) => {
              var mt;
              se(Oe), (mt = e.onkeydown) == null || mt.call(e, Oe);
            },
            children: (Oe, mt) => {
              var kt = iv(), Ft = K(kt);
              {
                var P = (ve) => {
                  var Pe = rv();
                  E(ve, Pe);
                };
                ee(Ft, (ve) => {
                  d() && ve(P);
                });
              }
              var j = Y(Ft);
              Ie(j, () => e.children ?? pe), E(Oe, kt);
            },
            $$slots: { default: !0 }
          }
        )),
        (Oe) => T = Oe,
        () => T
      );
    });
  }
  return E(n, k), Ee(W);
}
let sv = 0;
var ov = /* @__PURE__ */ Z("<div><!></div>");
function lv(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "id", 19, () => "SMUI-select-helper-text-" + sv++), a = m(e, "persistent", 3, !1), s = m(e, "validationMsg", 3, !1), u = /* @__PURE__ */ We(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "id",
    "persistent",
    "validationMsg",
    "children"
  ]), l, d = /* @__PURE__ */ le(void 0), c = Ce({}), h = Ce({}), f = /* @__PURE__ */ le(void 0);
  const g = ye("SMUI:select:helper-text:id"), v = ye("SMUI:select:helper-text:mount"), p = ye("SMUI:select:helper-text:unmount");
  rt(() => (G(
    d,
    new Jh({
      addClass: y,
      removeClass: w,
      hasClass: _,
      getAttr: S,
      setAttr: A,
      removeAttr: T,
      setContent: (O) => {
        G(f, O, !0);
      }
    }),
    !0
  ), g && g(i()), v && v(o(d)), o(d).init(), () => {
    var O;
    p && o(d) && p(o(d)), (O = o(d)) == null || O.destroy();
  }));
  function _(O) {
    return O in c ? c[O] : I().classList.contains(O);
  }
  function y(O) {
    c[O] || (c[O] = !0);
  }
  function w(O) {
    (!(O in c) || c[O]) && (c[O] = !1);
  }
  function S(O) {
    return O in h ? h[O] ?? null : I().getAttribute(O);
  }
  function A(O, R) {
    h[O] !== R && (h[O] = R);
  }
  function T(O) {
    (!(O in h) || h[O] != null) && (h[O] = void 0);
  }
  function I() {
    return l;
  }
  var b = { getElement: I }, C = ov();
  Be(
    C,
    (O) => ({
      class: O,
      "aria-hidden": a() ? void 0 : "true",
      id: i(),
      ...h,
      ...u
    }),
    [
      () => He({
        "mdc-select-helper-text": !0,
        "mdc-select-helper-text--validation-msg": s(),
        "mdc-select-helper-text--validation-msg-persistent": a(),
        ...c,
        [r()]: !0
      })
    ]
  );
  var x = V(C);
  {
    var D = (O) => {
      var R = oe(), re = K(R);
      Ie(re, () => e.children ?? pe), E(O, R);
    }, L = (O) => {
      var R = at();
      ce(() => Me(R, o(f))), E(O, R);
    };
    ee(x, (O) => {
      o(f) == null ? O(D) : O(L, !1);
    });
  }
  return xe(C, (O) => l = O, () => l), Le(C, (O, R) => ie == null ? void 0 : ie(O, R), t), E(n, C), Ee(b);
}
let uv = 0;
var dv = /* @__PURE__ */ Z("<input/>"), cv = /* @__PURE__ */ Z('<span class="mdc-select__ripple"></span>'), fv = /* @__PURE__ */ Z('<div><!> <div><!> <!> <!> <!> <span><span> </span></span> <span><svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"><polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon><polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon></svg></span> <!></div> <!></div> <!>', 1);
function hv(n, e) {
  Ae(e, !0);
  const t = () => Ii(Pe, "$selectedTextStore", r), [r, i] = Si();
  let a = () => {
  };
  function s(M) {
    return M === a;
  }
  let u = m(e, "use", 19, () => []), l = m(e, "class", 3, ""), d = m(e, "style", 3, ""), c = m(e, "ripple", 3, !0), h = m(e, "disabled", 3, !1), f = m(e, "variant", 3, "standard"), g = m(e, "noLabel", 3, !1), v = m(e, "label", 3, void 0), p = m(e, "value", 15), _ = m(e, "key", 3, (M) => M), y = m(e, "dirty", 15, !1), w = m(e, "invalid", 15, a), S = m(e, "updateInvalid", 19, () => s(w())), A = m(e, "required", 3, !1), T = m(e, "inputId", 19, () => "SMUI-select-" + uv++), I = m(e, "hiddenInput", 3, !1), b = m(e, "withLeadingIcon", 3, a), C = m(e, "anchor$use", 19, () => []), x = m(e, "anchor$class", 3, ""), D = m(e, "selectedTextContainer$use", 19, () => []), L = m(e, "selectedTextContainer$class", 3, ""), O = m(e, "selectedText$use", 19, () => []), R = m(e, "selectedText$class", 3, ""), re = m(e, "dropdownIcon$use", 19, () => []), q = m(e, "dropdownIcon$class", 3, ""), N = m(e, "menu$class", 3, ""), H = /* @__PURE__ */ We(e, [
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
  const J = s(w());
  s(w()) && w(!1);
  let ue, F = /* @__PURE__ */ le(void 0), $ = Ce({}), se = Ce({}), _e, he = Ce({}), z = /* @__PURE__ */ le(-1);
  const W = /* @__PURE__ */ te(() => H.menu$id ?? T() + "-menu");
  let k = /* @__PURE__ */ le(void 0), Q = ye("SMUI:addLayoutListener"), X, fe = /* @__PURE__ */ le(!1), be = Ce({}), Ne = /* @__PURE__ */ le(void 0), tt = /* @__PURE__ */ le(void 0), Je = /* @__PURE__ */ le(!1), Oe, mt = ye("SMUI:select:context"), kt, Ft, P, j, ve;
  de("SMUI:list:role", ""), de("SMUI:list:nav", !1);
  const Pe = er("");
  de("SMUI:select:selectedText", Pe);
  const Nt = er(p());
  Se(() => {
    Qn(Nt, p());
  }), de("SMUI:select:value", Nt), Se(() => {
    o(F) && o(F).getValue() !== _()(p()) && o(F).setValue(_()(p()));
  });
  let fn = o(z);
  Se(() => {
    if (fn !== o(z))
      if (fn = o(z), o(F))
        o(F).setSelectedIndex(
          o(z),
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const M = an();
        p() !== M[o(z)] && p(M[o(z)]);
      }
  }), Se(() => {
    o(F) && o(F).getDisabled() !== h() && o(F).setDisabled(h());
  }), Se(() => {
    o(F) && y() && o(F).isValid() !== !w() && (S() ? w(!o(F).isValid()) : o(F).setValid(!w()));
  }), Se(() => {
    o(F) && o(F).getRequired() !== A() && o(F).setRequired(A());
  }), Q && (X = Q(za)), de("SMUI:select:leading-icon:mount", (M) => {
    kt = M;
  }), de("SMUI:select:leading-icon:unmount", () => {
    kt = void 0;
  }), de("SMUI:list:mount", (M) => {
    Oe = M;
  }), de("SMUI:select:helper-text:id", (M) => {
    G(k, M, !0);
  }), de("SMUI:select:helper-text:mount", (M) => {
    Ft = M;
  }), de("SMUI:select:helper-text:unmount", () => {
    G(k, void 0), Ft = void 0;
  }), rt(() => (G(
    F,
    new Yh(
      {
        // getSelectAdapterMethods
        // getMenuItemAttr: (menuItem: Element, attr: string) =>
        //   menuItem.getAttribute(attr),
        setSelectedText: (M) => {
          Qn(Pe, M);
        },
        isSelectAnchorFocused: () => document.activeElement === _e,
        getSelectAnchorAttr: ot,
        setSelectAnchorAttr: pt,
        removeSelectAnchorAttr: Ut,
        addMenuClass: ne,
        removeMenuClass: Te,
        openMenu: () => {
          G(fe, !0);
        },
        closeMenu: () => {
          G(fe, !1);
        },
        getAnchorElement: () => _e,
        setMenuAnchorElement: (M) => {
          G(Ne, M, !0);
        },
        setMenuAnchorCorner: (M) => {
          G(tt, M, !0);
        },
        setMenuWrapFocus: (M) => {
          G(Je, M, !0);
        },
        getSelectedIndex: () => o(z),
        setSelectedIndex: (M) => {
          fn = M, G(z, M, !0), p(an()[o(z)]);
        },
        focusMenuItemAtIndex: (M) => {
          Oe.focusItemAtIndex(M);
        },
        getMenuItemCount: () => Oe.items.length,
        getMenuItemValues: () => an().map(_()),
        getMenuItemTextAtIndex: (M) => Oe.getPrimaryTextAtIndex(M),
        isTypeaheadInProgress: () => Oe.typeaheadInProgress,
        typeaheadMatchItem: (M, ge) => Oe.typeaheadMatchItem(M, ge),
        // getCommonAdapterMethods
        addClass: me,
        removeClass: B,
        hasClass: ir,
        setRippleCenter: (M) => j && j.setRippleCenter(M),
        activateBottomLine: () => j && j.activate(),
        deactivateBottomLine: () => j && j.deactivate(),
        notifyChange: (M) => {
          var ge;
          y(!0), S() && w(!((ge = o(F)) != null && ge.isValid())), Ge(Er(), "SMUISelectChange", { value: p(), index: o(z) });
        },
        // getOutlineAdapterMethods
        hasOutline: () => !!ve,
        notchOutline: (M) => ve && ve.notch(M),
        closeOutline: () => ve && ve.closeNotch(),
        // getLabelAdapterMethods
        hasLabel: () => !!P,
        floatLabel: (M) => P && P.float(M),
        getLabelWidth: () => P ? P.getWidth() : 0,
        setLabelRequired: (M) => P && P.setRequired(M)
      },
      {
        get helperText() {
          return Ft;
        },
        get leadingIcon() {
          return kt;
        }
      }
    ),
    !0
  ), G(z, an().indexOf(p()), !0), o(F).init(), sn(J), () => {
    var M;
    (M = o(F)) == null || M.destroy();
  })), Rn(() => {
    X && X();
  });
  function ir(M) {
    return M in $ ? $[M] : Er().classList.contains(M);
  }
  function me(M) {
    $[M] || ($[M] = !0);
  }
  function B(M) {
    (!(M in $) || $[M]) && ($[M] = !1);
  }
  function U(M, ge) {
    se[M] != ge && (ge === "" || ge == null ? delete se[M] : se[M] = ge);
  }
  function ne(M) {
    be[M] || (be[M] = !0);
  }
  function Te(M) {
    (!(M in be) || be[M]) && (be[M] = !1);
  }
  function ot(M) {
    return M in he ? he[M] ?? null : Er().getAttribute(M);
  }
  function pt(M, ge) {
    he[M] !== ge && (he[M] = ge);
  }
  function Ut(M) {
    (!(M in he) || he[M] != null) && (he[M] = void 0);
  }
  function an() {
    return Oe.getOrderedList().map((M) => M.getValue());
  }
  function xi(M) {
    const ge = M.currentTarget.getBoundingClientRect();
    return (ft(M) ? M.touches[0].clientX : M.clientX) - ge.left;
  }
  function ft(M) {
    return "touches" in M;
  }
  function Ht() {
    if (o(F) == null)
      throw new Error("Instance is undefined.");
    return o(F).getUseDefaultValidation();
  }
  function sn(M) {
    var ge;
    (ge = o(F)) == null || ge.setUseDefaultValidation(M);
  }
  function Ar() {
    _e.focus();
  }
  function za() {
    var M;
    (M = o(F)) == null || M.layout();
  }
  function Er() {
    return ue;
  }
  var Ue = {
    getUseDefaultValidation: Ht,
    setUseDefaultValidation: sn,
    focus: Ar,
    layout: za,
    getElement: Er
  }, Qe = fv(), je = K(Qe);
  Be(je, (M, ge, nt) => ({ class: M, style: ge, ...nt }), [
    () => He({
      "mdc-select": !0,
      "mdc-select--required": A(),
      "mdc-select--disabled": h(),
      "mdc-select--filled": f() === "filled",
      "mdc-select--outlined": f() === "outlined",
      "smui-select--standard": f() === "standard",
      "mdc-select--with-leading-icon": s(b()) ? e.leadingIcon : b(),
      "mdc-select--no-label": g() || v() == null,
      "mdc-select--invalid": w(),
      "mdc-select--activated": o(fe),
      "mdc-data-table__pagination-rows-per-page-select": mt === "data-table:pagination",
      ...$,
      [l()]: !0
    }),
    () => Object.entries(se).map(([M, ge]) => `${M}: ${ge};`).concat([d()]).join(" "),
    () => xa(H, [
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
  var Bt = V(je);
  {
    var Mn = (M) => {
      var ge = dv();
      Be(
        ge,
        (nt) => ({
          type: "hidden",
          required: A(),
          disabled: h(),
          value: p(),
          ...nt
        }),
        [() => ut(H, "input$")],
        void 0,
        void 0,
        !0
      ), E(M, ge);
    };
    ee(Bt, (M) => {
      I() && M(Mn);
    });
  }
  var $e = Y(Bt, 2), Ct = (M) => {
    var ge;
    _e.focus(), o(F) && o(F).handleClick(xi(M)), (ge = e.anchor$onclick) == null || ge.call(e, M);
  }, Lt = (M) => {
    var ge;
    o(F) && o(F).handleKeydown(M), (ge = e.onkeydown) == null || ge.call(e, M);
  }, ze = (M) => {
    var ge;
    o(F) && o(F).handleBlur(), Ge(Er(), "blur", M), (ge = e.anchor$onblur) == null || ge.call(e, M);
  }, Ot = (M) => {
    var ge;
    o(F) && o(F).handleFocus(), Ge(Er(), "focus", M), (ge = e.anchor$onfocus) == null || ge.call(e, M);
  };
  Be(
    $e,
    (M, ge) => ({
      class: M,
      "aria-required": A() ? "true" : void 0,
      "aria-disabled": h() ? "true" : void 0,
      "aria-controls": o(W),
      "aria-expanded": o(fe) ? "true" : "false",
      "aria-describedby": o(k),
      role: "combobox",
      tabindex: "0",
      ...he,
      ...ge,
      onclick: Ct,
      onkeydown: Lt,
      onblur: ze,
      onfocus: Ot
    }),
    [
      () => He({ "mdc-select__anchor": !0, [x()]: !0 }),
      () => ut(H, "anchor$")
    ]
  );
  var ar = V($e);
  {
    var bn = (M) => {
      var ge = cv();
      E(M, ge);
    };
    ee(ar, (M) => {
      f() === "filled" && M(bn);
    });
  }
  var At = Y(ar, 2);
  {
    var Gt = (M) => {
      {
        let ge = /* @__PURE__ */ te(() => T() + "-smui-label"), nt = /* @__PURE__ */ te(() => t() !== ""), Et = /* @__PURE__ */ te(() => ut(H, "label$"));
        xe(
          hs(M, Ye(
            {
              get id() {
                return o(ge);
              },
              get floatAbove() {
                return o(nt);
              },
              get required() {
                return A();
              }
            },
            () => o(Et),
            {
              children: (or, lr) => {
                var ua = oe(), wi = K(ua);
                {
                  var Jr = (Qr) => {
                  }, qs = (Qr) => {
                    var qa = oe(), da = K(qa);
                    {
                      var sl = (xr) => {
                        var $r = at();
                        ce(() => Me($r, v())), E(xr, $r);
                      }, Wa = (xr) => {
                        var $r = oe(), Ws = K($r);
                        Ie(Ws, v), E(xr, $r);
                      };
                      ee(
                        da,
                        (xr) => {
                          typeof v() == "string" ? xr(sl) : xr(Wa, !1);
                        },
                        !0
                      );
                    }
                    E(Qr, qa);
                  };
                  ee(wi, (Qr) => {
                    v() == null ? Qr(Jr) : Qr(qs, !1);
                  });
                }
                E(or, ua);
              },
              $$slots: { default: !0 }
            }
          )),
          (or) => P = or,
          () => P
        );
      }
    };
    ee(At, (M) => {
      f() !== "outlined" && !g() && v() != null && M(Gt);
    });
  }
  var yn = Y(At, 2);
  {
    var Xt = (M) => {
      {
        let ge = /* @__PURE__ */ te(() => g() || v() == null), nt = /* @__PURE__ */ te(() => ut(H, "outline$"));
        xe(
          rd(M, Ye(
            {
              get noLabel() {
                return o(ge);
              }
            },
            () => o(nt),
            {
              children: (Et, or) => {
                var lr = oe(), ua = K(lr);
                {
                  var wi = (Jr) => {
                    {
                      let qs = /* @__PURE__ */ te(() => T() + "-smui-label"), Qr = /* @__PURE__ */ te(() => t() !== ""), qa = /* @__PURE__ */ te(() => ut(H, "label$"));
                      xe(
                        hs(Jr, Ye(
                          {
                            get id() {
                              return o(qs);
                            },
                            get floatAbove() {
                              return o(Qr);
                            },
                            get required() {
                              return A();
                            }
                          },
                          () => o(qa),
                          {
                            children: (da, sl) => {
                              var Wa = oe(), xr = K(Wa);
                              {
                                var $r = (ca) => {
                                }, Ws = (ca) => {
                                  var ol = oe(), $d = K(ol);
                                  {
                                    var ec = (Ti) => {
                                      var fa = at();
                                      ce(() => Me(fa, v())), E(Ti, fa);
                                    }, tc = (Ti) => {
                                      var fa = oe(), nc = K(fa);
                                      Ie(nc, v), E(Ti, fa);
                                    };
                                    ee(
                                      $d,
                                      (Ti) => {
                                        typeof v() == "string" ? Ti(ec) : Ti(tc, !1);
                                      },
                                      !0
                                    );
                                  }
                                  E(ca, ol);
                                };
                                ee(xr, (ca) => {
                                  v() == null ? ca($r) : ca(Ws, !1);
                                });
                              }
                              E(da, Wa);
                            },
                            $$slots: { default: !0 }
                          }
                        )),
                        (da) => P = da,
                        () => P
                      );
                    }
                  };
                  ee(ua, (Jr) => {
                    !g() && v() != null && Jr(wi);
                  });
                }
                E(Et, lr);
              },
              $$slots: { default: !0 }
            }
          )),
          (Et) => ve = Et,
          () => ve
        );
      }
    };
    ee(yn, (M) => {
      f() === "outlined" && M(Xt);
    });
  }
  var Kr = Y(yn, 2);
  Ie(Kr, () => e.leadingIcon ?? pe);
  var Cn = Y(Kr, 2);
  Be(Cn, (M, ge) => ({ class: M, ...ge }), [
    () => He({
      "mdc-select__selected-text-container": !0,
      [L()]: !0
    }),
    () => ut(H, "selectedTextContainer$")
  ]);
  var Sr = V(Cn);
  Be(
    Sr,
    (M, ge) => ({
      id: T() + "-smui-selected-text",
      class: M,
      role: "button",
      "aria-haspopup": "listbox",
      "aria-labelledby": T() + "-smui-label",
      ...ge
    }),
    [
      () => He({
        "mdc-select__selected-text": !0,
        [R()]: !0
      }),
      () => ut(H, "selectedText$")
    ]
  );
  var la = V(Sr);
  Le(Sr, (M, ge) => ie == null ? void 0 : ie(M, ge), O), Le(Cn, (M, ge) => ie == null ? void 0 : ie(M, ge), D);
  var An = Y(Cn, 2);
  Be(An, (M, ge) => ({ class: M, ...ge }), [
    () => He({
      "mdc-select__dropdown-icon": !0,
      [q()]: !0
    }),
    () => ut(H, "dropdownIcon$")
  ]), Le(An, (M, ge) => ie == null ? void 0 : ie(M, ge), re);
  var sr = Y(An, 2);
  {
    var Vn = (M) => {
      {
        let ge = /* @__PURE__ */ te(() => ut(H, "ripple$"));
        xe(nd(M, Ye(() => o(ge))), (nt) => j = nt, () => j);
      }
    };
    ee(sr, (M) => {
      f() !== "outlined" && c() && M(Vn);
    });
  }
  xe($e, (M) => _e = M, () => _e), Le($e, (M, ge) => ie == null ? void 0 : ie(M, ge), C);
  var Yr = Y($e, 2);
  {
    let M = /* @__PURE__ */ te(() => He({
      "mdc-select__menu": !0,
      ...be,
      [N()]: !0
    })), ge = /* @__PURE__ */ te(() => ut(H, "menu$"));
    ev(Yr, Ye(
      {
        get class() {
          return o(M);
        },
        get id() {
          return o(W);
        },
        fullWidth: !0,
        anchor: !1,
        get anchorElement() {
          return o(Ne);
        },
        get anchorCorner() {
          return o(tt);
        }
      },
      () => o(ge),
      {
        onSMUIMenuSelected: (nt) => {
          var Et;
          o(F) && o(F).handleMenuItemAction(nt.detail.index), (Et = e.onSMUIMenuSelected) == null || Et.call(e, nt);
        },
        onSMUIMenuSurfaceClosing: (nt) => {
          var Et;
          o(F) && o(F).handleMenuClosing(), (Et = e.onSMUIMenuSurfaceClosing) == null || Et.call(e, nt);
        },
        onSMUIMenuSurfaceClosed: (nt) => {
          var Et;
          o(F) && o(F).handleMenuClosed(), (Et = e.onSMUIMenuSurfaceClosed) == null || Et.call(e, nt);
        },
        onSMUIMenuSurfaceOpened: (nt) => {
          var Et;
          o(F) && o(F).handleMenuOpened(), (Et = e.onSMUIMenuSurfaceOpened) == null || Et.call(e, nt);
        },
        get open() {
          return o(fe);
        },
        set open(nt) {
          G(fe, nt, !0);
        },
        children: (nt, Et) => {
          {
            let or = /* @__PURE__ */ te(() => ut(H, "list$"));
            tv(nt, Ye(
              {
                role: "listbox",
                get wrapFocus() {
                  return o(Je);
                }
              },
              () => o(or),
              {
                get selectedIndex() {
                  return o(z);
                },
                set selectedIndex(lr) {
                  G(z, lr, !0);
                },
                children: (lr, ua) => {
                  var wi = oe(), Jr = K(wi);
                  Ie(Jr, () => e.children ?? pe), E(lr, wi);
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
  xe(je, (M) => ue = M, () => ue), Le(je, (M, ge) => kn == null ? void 0 : kn(M, ge), () => ({
    ripple: f() === "filled",
    unbounded: !1,
    addClass: me,
    removeClass: B,
    addStyle: U
  })), Le(je, (M, ge) => to == null ? void 0 : to(M, ge), () => ({ addClass: me, removeClass: B })), Le(je, (M, ge) => ie == null ? void 0 : ie(M, ge), u);
  var zs = Y(je, 2);
  {
    var Jd = (M) => {
      {
        let ge = /* @__PURE__ */ te(() => ut(H, "helperText$"));
        lv(M, Ye(() => o(ge), {
          children: (nt, Et) => {
            var or = oe(), lr = K(or);
            Ie(lr, () => e.helperText ?? pe), E(nt, or);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    ee(zs, (M) => {
      e.helperText && M(Jd);
    });
  }
  ce(() => Me(la, t())), E(n, Qe);
  var Qd = Ee(Ue);
  return i(), Qd;
}
function vv(n, e) {
  Ae(e, !0);
  const t = () => Ii(c, "$selectedValue", r), [r, i] = Si();
  let a = m(e, "use", 19, () => []);
  m(e, "class", 3, "");
  let s = m(e, "value", 3, ""), u = /* @__PURE__ */ We(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "value",
    "children"
  ]), l;
  const d = ye("SMUI:select:selectedText"), c = ye("SMUI:select:value");
  de("SMUI:list:item:role", "option");
  const h = /* @__PURE__ */ te(() => s() != null && s() !== "" && t() === s());
  rt(f), Rn(f);
  function f() {
    o(h) && l && Qn(d, l.getPrimaryText());
  }
  function g() {
    return l.getElement();
  }
  var v = { getElement: g };
  xe(
    av(n, Ye(
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
      () => u,
      {
        children: (_, y) => {
          var w = oe(), S = K(w);
          Ie(S, () => e.children ?? pe), E(_, w);
        },
        $$slots: { default: !0 }
      }
    )),
    (_) => l = _,
    () => l
  );
  var p = Ee(v);
  return i(), p;
}
function gv(n, e) {
  Ae(e, !0);
  let t = m(e, "data", 19, () => []);
  m(e, "placeholder", 3, "");
  let r = m(e, "label", 3, "");
  m(e, "description", 3, "");
  let i = m(e, "value", 15), a = m(e, "required", 3, !1);
  m(e, "size", 3, "sm");
  let s = m(e, "variant", 3, "standard"), u = m(e, "selectedOptionIndex", 31, () => -1), l = m(e, "disabled", 3, !1);
  function d(c) {
    return () => u(c);
  }
  hv(n, {
    get disabled() {
      return l();
    },
    key: (c) => `${c ?? ""}`,
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
    set value(c) {
      i(c);
    },
    children: (c, h) => {
      var f = oe(), g = K(f);
      mn(g, 17, t, _r, (v, p, _) => {
        {
          let y = /* @__PURE__ */ te(() => d(_));
          vv(v, {
            get onclick() {
              return o(y);
            },
            get value() {
              return o(p).value;
            },
            children: (w, S) => {
              var A = at();
              ce(() => Me(A, o(p).label)), E(w, A);
            },
            $$slots: { default: !0 }
          });
        }
      }), E(c, f);
    },
    $$slots: { default: !0 }
  }), Ee();
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
function mv(n) {
  return n ? n.scrollHeight > n.offsetHeight : !1;
}
function pv(n) {
  return n ? n.scrollTop === 0 : !1;
}
function _v(n) {
  return n ? Math.ceil(n.scrollHeight - n.scrollTop) === n.clientHeight : !1;
}
function Iv(n) {
  var e = /* @__PURE__ */ new Set();
  return [].forEach.call(n, function(t) {
    return e.add(t.offsetTop);
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
var bv = (
  /** @class */
  function() {
    function n() {
      this.rafIDs = /* @__PURE__ */ new Map();
    }
    return n.prototype.request = function(e, t) {
      var r = this;
      this.cancel(e);
      var i = requestAnimationFrame(function(a) {
        r.rafIDs.delete(e), t(a);
      });
      this.rafIDs.set(e, i);
    }, n.prototype.cancel = function(e) {
      var t = this.rafIDs.get(e);
      t && (cancelAnimationFrame(t), this.rafIDs.delete(e));
    }, n.prototype.cancelAll = function() {
      var e = this;
      this.rafIDs.forEach(function(t, r) {
        e.cancel(r);
      });
    }, n.prototype.getQueue = function() {
      var e = [];
      return this.rafIDs.forEach(function(t, r) {
        e.push(r);
      }), e;
    }, n;
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
var Ze = {
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
}, ma = {
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
}, no = {
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
var vs;
(function(n) {
  n.POLL_SCROLL_POS = "poll_scroll_position", n.POLL_LAYOUT_CHANGE = "poll_layout_change";
})(vs || (vs = {}));
var yv = (
  /** @class */
  function(n) {
    _n(e, n);
    function e(t) {
      var r = n.call(this, qe(qe({}, e.defaultAdapter), t)) || this;
      return r.dialogOpen = !1, r.isFullscreen = !1, r.animationFrame = 0, r.animationTimer = 0, r.escapeKeyAction = ma.CLOSE_ACTION, r.scrimClickAction = ma.CLOSE_ACTION, r.autoStackButtons = !0, r.areButtonsStacked = !1, r.suppressDefaultPressSelector = ma.SUPPRESS_DEFAULT_PRESS_SELECTOR, r.animFrame = new bv(), r.contentScrollHandler = function() {
        r.handleScrollEvent();
      }, r.windowResizeHandler = function() {
        r.layout();
      }, r.windowOrientationChangeHandler = function() {
        r.layout();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ze;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return ma;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return no;
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
      this.adapter.hasClass(Ze.STACKED) && this.setAutoStackButtons(!1), this.isFullscreen = this.adapter.hasClass(Ze.FULLSCREEN);
    }, e.prototype.destroy = function() {
      this.animationTimer && (clearTimeout(this.animationTimer), this.handleAnimationTimerEnd()), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.animFrame.cancelAll(), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler);
    }, e.prototype.open = function(t) {
      var r = this;
      this.dialogOpen = !0, this.adapter.notifyOpening(), this.adapter.addClass(Ze.OPENING), this.isFullscreen && this.adapter.registerContentEventHandler("scroll", this.contentScrollHandler), t && t.isAboveFullscreenDialog && this.adapter.addClass(Ze.SCRIM_HIDDEN), this.adapter.registerWindowEventHandler("resize", this.windowResizeHandler), this.adapter.registerWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), this.runNextAnimationFrame(function() {
        r.adapter.addClass(Ze.OPEN), r.adapter.addBodyClass(Ze.SCROLL_LOCK), r.layout(), r.animationTimer = setTimeout(function() {
          r.handleAnimationTimerEnd(), r.adapter.trapFocus(r.adapter.getInitialFocusEl()), r.adapter.notifyOpened();
        }, no.DIALOG_ANIMATION_OPEN_TIME_MS);
      });
    }, e.prototype.close = function(t) {
      var r = this;
      t === void 0 && (t = ""), this.dialogOpen && (this.dialogOpen = !1, this.adapter.notifyClosing(t), this.adapter.addClass(Ze.CLOSING), this.adapter.removeClass(Ze.OPEN), this.adapter.removeBodyClass(Ze.SCROLL_LOCK), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), cancelAnimationFrame(this.animationFrame), this.animationFrame = 0, clearTimeout(this.animationTimer), this.animationTimer = setTimeout(function() {
        r.adapter.releaseFocus(), r.handleAnimationTimerEnd(), r.adapter.notifyClosed(t);
      }, no.DIALOG_ANIMATION_CLOSE_TIME_MS));
    }, e.prototype.showSurfaceScrim = function() {
      var t = this;
      this.adapter.addClass(Ze.SURFACE_SCRIM_SHOWING), this.runNextAnimationFrame(function() {
        t.adapter.addClass(Ze.SURFACE_SCRIM_SHOWN);
      });
    }, e.prototype.hideSurfaceScrim = function() {
      this.adapter.removeClass(Ze.SURFACE_SCRIM_SHOWN), this.adapter.addClass(Ze.SURFACE_SCRIM_HIDING);
    }, e.prototype.handleSurfaceScrimTransitionEnd = function() {
      this.adapter.removeClass(Ze.SURFACE_SCRIM_HIDING), this.adapter.removeClass(Ze.SURFACE_SCRIM_SHOWING);
    }, e.prototype.isOpen = function() {
      return this.dialogOpen;
    }, e.prototype.getEscapeKeyAction = function() {
      return this.escapeKeyAction;
    }, e.prototype.setEscapeKeyAction = function(t) {
      this.escapeKeyAction = t;
    }, e.prototype.getScrimClickAction = function() {
      return this.scrimClickAction;
    }, e.prototype.setScrimClickAction = function(t) {
      this.scrimClickAction = t;
    }, e.prototype.getAutoStackButtons = function() {
      return this.autoStackButtons;
    }, e.prototype.setAutoStackButtons = function(t) {
      this.autoStackButtons = t;
    }, e.prototype.getSuppressDefaultPressSelector = function() {
      return this.suppressDefaultPressSelector;
    }, e.prototype.setSuppressDefaultPressSelector = function(t) {
      this.suppressDefaultPressSelector = t;
    }, e.prototype.layout = function() {
      var t = this;
      this.animFrame.request(vs.POLL_LAYOUT_CHANGE, function() {
        t.layoutInternal();
      });
    }, e.prototype.handleClick = function(t) {
      var r = this.adapter.eventTargetMatches(t.target, ma.SCRIM_SELECTOR);
      if (r && this.scrimClickAction !== "")
        this.close(this.scrimClickAction);
      else {
        var i = this.adapter.getActionFromEvent(t);
        i && this.close(i);
      }
    }, e.prototype.handleKeydown = function(t) {
      var r = t.key === "Enter" || t.keyCode === 13;
      if (r) {
        var i = this.adapter.getActionFromEvent(t);
        if (!i) {
          var a = t.composedPath ? t.composedPath()[0] : t.target, s = this.suppressDefaultPressSelector ? !this.adapter.eventTargetMatches(a, this.suppressDefaultPressSelector) : !0;
          r && s && this.adapter.clickDefaultButton();
        }
      }
    }, e.prototype.handleDocumentKeydown = function(t) {
      var r = t.key === "Escape" || t.keyCode === 27;
      r && this.escapeKeyAction !== "" && this.close(this.escapeKeyAction);
    }, e.prototype.handleScrollEvent = function() {
      var t = this;
      this.animFrame.request(vs.POLL_SCROLL_POS, function() {
        t.toggleScrollDividerHeader(), t.toggleScrollDividerFooter();
      });
    }, e.prototype.layoutInternal = function() {
      this.autoStackButtons && this.detectStackedButtons(), this.toggleScrollableClasses();
    }, e.prototype.handleAnimationTimerEnd = function() {
      this.animationTimer = 0, this.adapter.removeClass(Ze.OPENING), this.adapter.removeClass(Ze.CLOSING);
    }, e.prototype.runNextAnimationFrame = function(t) {
      var r = this;
      cancelAnimationFrame(this.animationFrame), this.animationFrame = requestAnimationFrame(function() {
        r.animationFrame = 0, clearTimeout(r.animationTimer), r.animationTimer = setTimeout(t, 0);
      });
    }, e.prototype.detectStackedButtons = function() {
      this.adapter.removeClass(Ze.STACKED);
      var t = this.adapter.areButtonsStacked();
      t && this.adapter.addClass(Ze.STACKED), t !== this.areButtonsStacked && (this.adapter.reverseButtons(), this.areButtonsStacked = t);
    }, e.prototype.toggleScrollableClasses = function() {
      this.adapter.removeClass(Ze.SCROLLABLE), this.adapter.isContentScrollable() && (this.adapter.addClass(Ze.SCROLLABLE), this.isFullscreen && (this.toggleScrollDividerHeader(), this.toggleScrollDividerFooter()));
    }, e.prototype.toggleScrollDividerHeader = function() {
      this.adapter.isScrollableContentAtTop() ? this.adapter.hasClass(Ze.SCROLL_DIVIDER_HEADER) && this.adapter.removeClass(Ze.SCROLL_DIVIDER_HEADER) : this.adapter.addClass(Ze.SCROLL_DIVIDER_HEADER);
    }, e.prototype.toggleScrollDividerFooter = function() {
      this.adapter.isScrollableContentAtBottom() ? this.adapter.hasClass(Ze.SCROLL_DIVIDER_FOOTER) && this.adapter.removeClass(Ze.SCROLL_DIVIDER_FOOTER) : this.adapter.addClass(Ze.SCROLL_DIVIDER_FOOTER);
    }, e;
  }(In)
), Cv = /* @__PURE__ */ Z('<div class="mdc-dialog__surface-scrim"></div>'), Av = /* @__PURE__ */ Z('<div><div><div><!> <!></div></div> <div class="mdc-dialog__scrim"></div></div> <!>', 1);
function Ev(n, e) {
  Ae(e, !0);
  const t = () => Ii(O, "$aboveFullscreenShown", r), [r, i] = Si(), { FocusTrap: a } = fh, { closest: s, matches: u } = Ua;
  let l = m(e, "use", 19, () => []), d = m(e, "class", 3, ""), c = m(e, "open", 15, !1), h = m(e, "selection", 3, !1), f = m(e, "escapeKeyAction", 3, "close"), g = m(e, "scrimClickAction", 3, "close"), v = m(e, "autoStackButtons", 3, !0), p = m(e, "fullscreen", 3, !1), _ = m(e, "sheet", 3, !1), y = m(e, "noContentPadding", 3, !1), w = m(e, "container$class", 3, ""), S = m(e, "surface$class", 3, ""), A = /* @__PURE__ */ We(e, [
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
  ]), T, I = /* @__PURE__ */ le(void 0), b = new sa(), C = Ce({}), x, D = er(!1), L = ye("SMUI:dialog:aboveFullscreen"), O = ye("SMUI:dialog:aboveFullscreenShown") ?? er(!1), R = ye("SMUI:addLayoutListener"), re, q = [], N = (B) => (q.push(B), () => {
    const U = q.indexOf(B);
    U >= 0 && q.splice(U, 1);
  });
  de("SMUI:dialog:actions:reversed", D), de("SMUI:addLayoutListener", N), de("SMUI:dialog:selection", h()), de("SMUI:dialog:aboveFullscreen", L || p()), de("SMUI:dialog:aboveFullscreenShown", O), _() && de("SMUI:icon-button:context", "dialog:sheet"), Se(() => {
    o(I) && o(I).getEscapeKeyAction() !== f() && o(I).setEscapeKeyAction(f());
  }), Se(() => {
    o(I) && o(I).getScrimClickAction() !== g() && o(I).setScrimClickAction(g());
  }), Se(() => {
    o(I) && o(I).getAutoStackButtons() !== v() && o(I).setAutoStackButtons(v());
  }), Se(() => {
    v() || Qn(D, !0);
  }), R && (re = R(fe)), Se(() => {
    o(I) && o(I).isOpen() !== c() && (c() ? o(I).open({ isAboveFullscreenDialog: !!L }) : o(I).close());
  });
  let H = t();
  Se(() => {
    p() && o(I) && H !== t() && (H = t(), t() ? o(I).showSurfaceScrim() : o(I).hideSurfaceScrim());
  }), rt(() => (x = new a(T, { initialFocusEl: he() ?? void 0 }), G(
    I,
    new yv({
      addBodyClass: (B) => document.body.classList.add(B),
      addClass: ue,
      areButtonsStacked: () => Iv($()),
      clickDefaultButton: () => {
        const B = se();
        B && B.click();
      },
      eventTargetMatches: (B, U) => B ? u(B, U) : !1,
      getActionFromEvent: (B) => {
        if (!B.target)
          return "";
        const U = s(B.target, "[data-mdc-dialog-action]");
        return U && U.getAttribute("data-mdc-dialog-action");
      },
      getInitialFocusEl: he,
      hasClass: J,
      isContentScrollable: () => mv(_e()),
      notifyClosed: (B) => {
        c(!1), Ge(be(), "SMUIDialogClosed", B ? { action: B } : {});
      },
      notifyClosing: (B) => Ge(be(), "SMUIDialogClosing", B ? { action: B } : {}),
      notifyOpened: () => Ge(be(), "SMUIDialogOpened", {}),
      notifyOpening: () => Ge(be(), "SMUIDialogOpening", {}),
      releaseFocus: () => x.releaseFocus(),
      removeBodyClass: (B) => document.body.classList.remove(B),
      removeClass: F,
      reverseButtons: () => {
        Qn(D, !0);
      },
      trapFocus: () => x.trapFocus(),
      registerContentEventHandler: (B, U) => {
        const ne = _e();
        ne instanceof HTMLElement && b.on(ne, B, U);
      },
      deregisterContentEventHandler: (B, U) => {
        const ne = _e();
        ne instanceof HTMLElement && b.off(ne, B, U);
      },
      isScrollableContentAtTop: () => pv(_e()),
      isScrollableContentAtBottom: () => _v(_e()),
      registerWindowEventHandler: (B, U) => b.on(window, B, U),
      deregisterWindowEventHandler: (B, U) => b.off(window, B, U)
    }),
    !0
  ), o(I).init(), () => {
    var B;
    (B = o(I)) == null || B.destroy(), b.clear();
  })), Rn(() => {
    re && re();
  });
  function J(B) {
    return B in C ? C[B] : be().classList.contains(B);
  }
  function ue(B) {
    C[B] || (C[B] = !0);
  }
  function F(B) {
    (!(B in C) || C[B]) && (C[B] = !1);
  }
  function $() {
    return [].slice.call(be().querySelectorAll(".mdc-dialog__button"));
  }
  function se() {
    return be().querySelector("[data-mdc-dialog-button-default]");
  }
  function _e() {
    return be().querySelector(".mdc-dialog__content");
  }
  function he() {
    return be().querySelector("[data-mdc-dialog-initial-focus]");
  }
  function z() {
    L && Qn(O, !0), requestAnimationFrame(() => {
      q.forEach((B) => B());
    });
  }
  function W() {
    q.forEach((B) => B());
  }
  function k() {
    L && Qn(O, !1);
  }
  function Q() {
    return c();
  }
  function X(B) {
    c(B);
  }
  function fe() {
    var B;
    return (B = o(I)) == null ? void 0 : B.layout();
  }
  function be() {
    return T;
  }
  var Ne = { isOpen: Q, setOpen: X, layout: fe, getElement: be }, tt = Av();
  Yt("resize", cs, () => c() && o(I) && o(I).layout()), Yt("orientationchange", cs, () => c() && o(I) && o(I).layout()), Yt("keydown", Bo.body, (B) => o(I) && o(I).handleDocumentKeydown(B));
  var Je = K(tt), Oe = (B) => {
    var U;
    z(), (U = e.onSMUIDialogOpening) == null || U.call(e, B);
  }, mt = (B) => {
    var U;
    W(), (U = e.onSMUIDialogOpened) == null || U.call(e, B);
  }, kt = (B) => {
    var U;
    k(), (U = e.onSMUIDialogClosed) == null || U.call(e, B);
  }, Ft = (B) => {
    var U;
    o(I) && o(I).handleClick(B), (U = e.onclick) == null || U.call(e, B);
  }, P = (B) => {
    var U;
    o(I) && o(I).handleKeydown(B), (U = e.onkeydown) == null || U.call(e, B);
  };
  Be(
    Je,
    (B, U) => ({
      class: B,
      role: "alertdialog",
      "aria-modal": "true",
      ...U,
      onSMUIDialogOpening: Oe,
      onSMUIDialogOpened: mt,
      onSMUIDialogClosed: kt,
      onclick: Ft,
      onkeydown: P
    }),
    [
      () => He({
        "mdc-dialog": !0,
        "mdc-dialog--stacked": !v(),
        "mdc-dialog--fullscreen": p(),
        "mdc-dialog--sheet": _(),
        "mdc-dialog--no-content-padding": y(),
        "smui-dialog--selection": h(),
        ...C,
        [d()]: !0
      }),
      () => xa(A, ["container$", "surface$"])
    ]
  );
  var j = V(Je);
  Be(j, (B, U) => ({ class: B, ...U }), [
    () => He({ "mdc-dialog__container": !0, [w()]: !0 }),
    () => ut(A, "container$")
  ]);
  var ve = V(j);
  Be(ve, (B, U) => ({ class: B, role: "alertdialog", "aria-modal": "true", ...U }), [
    () => He({ "mdc-dialog__surface": !0, [S()]: !0 }),
    () => ut(A, "surface$")
  ]);
  var Pe = V(ve);
  Ie(Pe, () => e.children ?? pe);
  var Nt = Y(Pe, 2);
  {
    var fn = (B) => {
      var U = Cv();
      Yt("transitionend", U, () => o(I) && o(I).handleSurfaceScrimTransitionEnd()), E(B, U);
    };
    ee(Nt, (B) => {
      p() && B(fn);
    });
  }
  xe(Je, (B) => T = B, () => T), Le(Je, (B, U) => ie == null ? void 0 : ie(B, U), l);
  var ir = Y(Je, 2);
  Ie(ir, () => e.over ?? pe), E(n, tt);
  var me = Ee(Ne);
  return i(), me;
}
function Sv(n, e) {
  Ae(e, !0);
  let t = /* @__PURE__ */ We(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return xe(
    oa(n, Ye(
      {
        _smuiClass: "mdc-dialog__header",
        _smuiContexts: { "SMUI:icon-button:context": "dialog:header" },
        tag: "div"
      },
      () => t,
      {
        children: (s, u) => {
          var l = oe(), d = K(l);
          Ie(d, () => e.children ?? pe), E(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Ee(a);
}
function ld(n, e) {
  Ae(e, !0);
  let t = /* @__PURE__ */ We(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return xe(
    oa(n, Ye({ _smuiClass: "mdc-dialog__content", tag: "div" }, () => t, {
      children: (s, u) => {
        var l = oe(), d = K(l);
        Ie(d, () => e.children ?? pe), E(s, l);
      },
      $$slots: { default: !0 }
    })),
    (s) => r = s,
    () => r
  ), Ee(a);
}
function xv(n, e) {
  Ae(e, !0);
  let t = /* @__PURE__ */ We(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return xe(
    oa(n, Ye(
      {
        _smuiClass: "mdc-dialog__actions",
        _smuiClassMap: {
          "smui-dialog__actions--reversed": "SMUI:dialog:actions:reversed"
        },
        _smuiContexts: { "SMUI:button:context": "dialog:action" },
        tag: "div"
      },
      () => t,
      {
        children: (s, u) => {
          var l = oe(), d = K(l);
          Ie(d, () => e.children ?? pe), E(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Ee(a);
}
const ks = er({
  component: null,
  props: {},
  isOpen: !1
});
function wv(n, e) {
  Ae(e, !0);
  let t = /* @__PURE__ */ le(void 0), r = /* @__PURE__ */ le(!1);
  const i = ks.subscribe((l) => {
    G(t, l, !0), G(r, l.isOpen, !0);
  });
  rt(() => () => i());
  var a = oe(), s = K(a);
  {
    var u = (l) => {
      var d = oe(), c = K(d);
      Na(c, () => o(t).component, (h, f) => {
        f(h, Ye(() => o(t).props, {
          get open() {
            return o(r);
          },
          set open(g) {
            G(r, g, !0);
          }
        }));
      }), E(l, d);
    };
    ee(s, (l) => {
      o(t).isOpen && o(t).component && l(u);
    });
  }
  E(n, a), Ee();
}
function ta(n, e = {}) {
  return new Promise((t) => {
    ks.set({
      component: n,
      props: e,
      isOpen: !0,
      resolve: t
    });
  });
}
function Br(n, e) {
  ks.update((t) => {
    var r;
    return (r = t.resolve) == null || r.call(t, { type: n, data: e }), { component: null, props: {}, isOpen: !1 };
  });
}
function Tv(n) {
  ks.update((e) => e.isOpen ? { ...e, props: { ...e.props, ...n } } : e);
}
var Dv = /* @__PURE__ */ Z('<div class="oscd-confirm-dialog__content svelte-1eipd40"> </div>');
function jo(n, e) {
  Ae(e, !0);
  let t = m(e, "open", 15, !1), r = m(e, "title", 3, ""), i = m(e, "message", 3, ""), a = m(e, "confirmActionText", 3, "OK"), s = m(e, "confirmActionColor", 3, "primary"), u = m(e, "cancelActionText", 3, "Cancel"), l = m(e, "color", 3, "var(--mdc-theme-primary, #ff3e00)");
  function d() {
    Br("confirm");
  }
  function c() {
    Br("cancel");
  }
  Zo(n, {
    get title() {
      return r();
    },
    get confirmActionText() {
      return a();
    },
    get confirmActionColor() {
      return s();
    },
    get cancelActionText() {
      return u();
    },
    get color() {
      return l();
    },
    onConfirm: () => d(),
    onCancel: () => c(),
    onClose: () => Br("cancel"),
    width: "100%",
    maxWidth: "500px",
    height: "auto",
    maxHeight: "auto",
    get open() {
      return t();
    },
    set open(f) {
      t(f);
    },
    content: (f) => {
      ld(f, {
        children: (g, v) => {
          var p = Dv(), _ = V(p);
          ce(() => Me(_, i())), E(g, p);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { content: !0 }
  }), Ee();
}
var Lv = /* @__PURE__ */ Z('<div class="dialog__title svelte-ec2c4h"><h4 class="svelte-ec2c4h"> </h4> <!></div>'), Ov = /* @__PURE__ */ Z("<!> <!>", 1), Rv = /* @__PURE__ */ Z('<!> <!> <div class="dialog__actions svelte-ec2c4h"><!></div>', 1);
function Zo(n, e) {
  Ae(e, !0);
  let t = m(e, "open", 15, !1), r = m(e, "title", 3, ""), i = m(e, "confirmActionText", 3, "Confirm"), a = m(e, "confirmActionColor", 3, "primary"), s = m(e, "cancelActionText", 3, "Cancel"), u = m(e, "width", 3, "80vw"), l = m(e, "maxWidth", 3, "85vw"), d = m(e, "height", 3, "85vh"), c = m(e, "maxHeight", 3, "85vh"), h = m(e, "confirmDisabled", 3, !1), f = m(e, "color", 3, "var(--mdc-theme-primary, #ff3e00)"), g = m(e, "showCloseButton", 3, !0), v = m(e, "onClose", 3, () => {
  }), p = m(e, "onCancel", 3, () => {
  }), _ = m(e, "onConfirm", 3, () => {
  });
  function y(S) {
    S.detail.action === "cancel" ? p()() : S.detail.action === "confirm" ? _()() : (S.detail.action, v()());
  }
  let w = /* @__PURE__ */ te(() => {
    let S;
    return a() === "primary" ? S = f() : S = "#FF203A", h() ? "" : `background-color: ${S}; color: white;`;
  });
  {
    let S = /* @__PURE__ */ te(() => `width: ${u()}; max-width: ${l()}; height: ${d()}; max-height: ${c()};`);
    Ev(n, {
      "aria-labelledby": "large-scroll-title",
      "aria-describedby": "large-scroll-content",
      onSMUIDialogClosed: y,
      get surface$style() {
        return o(S);
      },
      get open() {
        return t();
      },
      set open(A) {
        t(A);
      },
      children: (A, T) => {
        var I = Rv(), b = K(I);
        Sv(b, {
          children: (L, O) => {
            var R = Lv(), re = V(R), q = V(re), N = Y(re, 2);
            {
              var H = (J) => {
                pd(J, {
                  onClick: () => {
                    t(!1), v()();
                  },
                  tooltip: "Close",
                  tooltipSide: "left",
                  type: "close",
                  fillColor: "white"
                });
              };
              ee(N, (J) => {
                g() && J(H);
              });
            }
            ce(() => {
              Ke(R, `background-color: ${f()};`), Me(q, r());
            }), E(L, R);
          },
          $$slots: { default: !0 }
        });
        var C = Y(b, 2);
        ld(C, {
          id: "dialog__content",
          children: (L, O) => {
            var R = oe(), re = K(R);
            Ie(re, () => e.content ?? pe), E(L, R);
          },
          $$slots: { default: !0 }
        });
        var x = Y(C, 2), D = V(x);
        xv(D, {
          class: "oscd-dialog__actions",
          children: (L, O) => {
            var R = Ov(), re = K(R);
            {
              var q = (H) => {
                tr(H, {
                  action: "cancel",
                  color: "secondary",
                  tabindex: "1",
                  children: (J, ue) => {
                    var F = at();
                    ce(() => Me(F, s())), E(J, F);
                  },
                  $$slots: { default: !0 }
                });
              };
              ee(re, (H) => {
                s() && H(q);
              });
            }
            var N = Y(re, 2);
            tr(N, {
              action: "confirm",
              get disabled() {
                return h();
              },
              get style() {
                return o(w);
              },
              tabindex: "0",
              children: (H, J) => {
                var ue = at();
                ce(() => Me(ue, i())), E(H, ue);
              },
              $$slots: { default: !0 }
            }), E(L, R);
          },
          $$slots: { default: !0 }
        }), E(A, I);
      },
      $$slots: { default: !0 }
    });
  }
  Ee();
}
var Mv = /* @__PURE__ */ Z('<span class="oscd-icon"><!></span>');
function yt(n, e) {
  var t = Mv(), r = V(t);
  Ie(r, () => e.children ?? pe), E(n, t);
}
var Pv = /* @__PURE__ */ st('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function ud(n, e) {
  let t = m(e, "svgStyles", 3, "");
  yt(n, {
    children: (r, i) => {
      var a = Pv();
      ce(() => Ke(a, t())), E(r, a);
    }
  });
}
var kv = /* @__PURE__ */ st('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function dd(n, e) {
  let t = m(e, "svgStyles", 3, "");
  yt(n, {
    children: (r, i) => {
      var a = kv();
      ce(() => Ke(a, t())), E(r, a);
    }
  });
}
var Fv = /* @__PURE__ */ st('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function cd(n, e) {
  let t = m(e, "svgStyles", 3, "");
  yt(n, {
    children: (r, i) => {
      var a = Fv();
      ce(() => Ke(a, t())), E(r, a);
    }
  });
}
var Nv = /* @__PURE__ */ st('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"></path></svg>');
function fd(n, e) {
  let t = m(e, "svgStyles", 3, "");
  yt(n, {
    children: (r, i) => {
      var a = Nv();
      ce(() => Ke(a, t())), E(r, a);
    }
  });
}
var Uv = /* @__PURE__ */ st('<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM2 12c0-2.79 1.64-5.2 4.01-6.32V3.52C2.52 4.76 0 8.09 0 12s2.52 7.24 6.01 8.48v-2.16C3.64 17.2 2 14.79 2 12zm13-9c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"></path></svg>');
function Hv(n, e) {
  let t = m(e, "svgStyles", 3, "");
  yt(n, {
    children: (r, i) => {
      var a = Uv();
      ce(() => Ke(a, t())), E(r, a);
    }
  });
}
wc();
var Bv = /* @__PURE__ */ st('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24" height="24" fill="#004552"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"></path></svg>');
function hd(n) {
  var e = Bv();
  E(n, e);
}
var Gv = /* @__PURE__ */ st('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#004552"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Vv(n) {
  var e = Gv();
  E(n, e);
}
var zv = /* @__PURE__ */ st('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"></path></svg>');
function qv(n, e) {
  let t = m(e, "size", 3, "24px"), r = m(e, "fill", 3, "#004552");
  var i = zv();
  ce(() => {
    bt(i, "height", t()), bt(i, "width", t()), bt(i, "fill", r());
  }), E(n, i);
}
var Wv = /* @__PURE__ */ st('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Hl(n, e) {
  let t = m(e, "svgStyles", 3, "");
  yt(n, {
    children: (r, i) => {
      var a = Wv();
      ce(() => Ke(a, t())), E(r, a);
    }
  });
}
var jv = /* @__PURE__ */ st('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Zv(n, e) {
  let t = m(e, "svgStyles", 3, "");
  yt(n, {
    children: (r, i) => {
      var a = jv();
      ce(() => Ke(a, t())), E(r, a);
    }
  });
}
var Xv = /* @__PURE__ */ st('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"></path></svg>');
function Kv(n, e) {
  let t = m(e, "svgStyles", 3, "");
  yt(n, {
    children: (r, i) => {
      var a = Xv();
      ce(() => Ke(a, t())), E(r, a);
    }
  });
}
var Yv = /* @__PURE__ */ st('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"></path></svg>');
function Jv(n, e) {
  let t = m(e, "svgStyles", 3, "");
  yt(n, {
    children: (r, i) => {
      var a = Yv();
      ce(() => Ke(a, t())), E(r, a);
    }
  });
}
var Qv = /* @__PURE__ */ st('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"><path d="m176-120-56-56 301-302-181-45 198-123-17-234 179 151 216-88-87 217 151 178-234-16-124 198-45-181-301 301Zm24-520-80-80 80-80 80 80-80 80Zm355 197 48-79 93 7-60-71 35-86-86 35-71-59 7 92-79 49 90 22 23 90Zm165 323-80-80 80-80 80 80-80 80ZM569-570Z"></path></svg>');
function $v(n, e) {
  let t = m(e, "svgStyles", 3, "");
  yt(n, {
    children: (r, i) => {
      var a = Qv();
      ce(() => Ke(a, t())), E(r, a);
    }
  });
}
var eg = /* @__PURE__ */ st('<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m770-302-60-62q40-11 65-42.5t25-73.5q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 57-29.5 105T770-302ZM634-440l-80-80h86v80h-6ZM792-56 56-792l56-56 736 736-56 56ZM440-280H280q-83 0-141.5-58.5T80-480q0-69 42-123t108-71l74 74h-24q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h65l79 80H320Z"></path></svg>');
function tg(n, e) {
  let t = m(e, "svgStyles", 3, "");
  yt(n, {
    children: (r, i) => {
      var a = eg();
      ce(() => Ke(a, t())), E(r, a);
    }
  });
}
var ng = /* @__PURE__ */ st('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"></path></svg>');
function rg(n, e) {
  let t = m(e, "svgStyles", 3, "");
  yt(n, {
    children: (r, i) => {
      var a = ng();
      ce(() => Ke(a, t())), E(r, a);
    }
  });
}
var ig = /* @__PURE__ */ st('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"></path></svg>');
function ag(n, e) {
  let t = m(e, "svgStyles", 8, "");
  yt(n, {
    children: (r, i) => {
      var a = ig();
      ce(() => Ke(a, t())), E(r, a);
    }
  });
}
var sg = /* @__PURE__ */ st('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3" cursor="pointer"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function vd(n, e) {
  let t = m(e, "svgStyles", 8, "");
  yt(n, {
    children: (r, i) => {
      var a = sg();
      ce(() => Ke(a, t())), E(r, a);
    }
  });
}
var og = /* @__PURE__ */ st('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m320-160-56-57 103-103H80v-80h287L264-503l56-57 200 200-200 200Zm320-240L440-600l200-200 56 57-103 103h287v80H593l103 103-56 57Z"></path></svg>');
function gd(n, e) {
  let t = m(e, "svgStyles", 8, "");
  yt(n, {
    children: (r, i) => {
      var a = og();
      ce(() => Ke(a, t())), E(r, a);
    }
  });
}
var lg = /* @__PURE__ */ st('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M360-160q-33 0-56.5-23.5T280-240q0-33 23.5-56.5T360-320q33 0 56.5 23.5T440-240q0 33-23.5 56.5T360-160Zm240 0q-33 0-56.5-23.5T520-240q0-33 23.5-56.5T600-320q33 0 56.5 23.5T680-240q0 33-23.5 56.5T600-160ZM360-400q-33 0-56.5-23.5T280-480q0-33 23.5-56.5T360-560q33 0 56.5 23.5T440-480q0 33-23.5 56.5T360-400Zm240 0q-33 0-56.5-23.5T520-480q0-33 23.5-56.5T600-560q33 0 56.5 23.5T680-480q0 33-23.5 56.5T600-400ZM360-640q-33 0-56.5-23.5T280-720q0-33 23.5-56.5T360-800q33 0 56.5 23.5T440-720q0 33-23.5 56.5T360-640Zm240 0q-33 0-56.5-23.5T520-720q0-33 23.5-56.5T600-800q33 0 56.5 23.5T680-720q0 33-23.5 56.5T600-640Z"></path></svg>');
function Xo(n, e) {
  let t = m(e, "svgStyles", 3, "fill: gray; width: 25px; height: 25px");
  yt(n, {
    children: (r, i) => {
      var a = lg();
      ce(() => Ke(a, t())), E(r, a);
    }
  });
}
var ug = /* @__PURE__ */ st('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-80 200-360l56-56 184 183v-647h80v647l184-184 56 57L480-80Z"></path></svg>');
function dg(n, e) {
  let t = m(e, "svgStyles", 3, "");
  yt(n, {
    children: (r, i) => {
      var a = ug();
      ce(() => Ke(a, t())), E(r, a);
    }
  });
}
var cg = /* @__PURE__ */ st('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"></path></svg>');
function fg(n, e) {
  let t = m(e, "svgStyles", 3, "");
  yt(n, {
    children: (r, i) => {
      var a = cg();
      ce(() => Ke(a, t())), E(r, a);
    }
  });
}
var hg = /* @__PURE__ */ st('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"></path></svg>');
function vg(n, e) {
  let t = m(e, "svgStyles", 3, "");
  yt(n, {
    children: (r, i) => {
      var a = hg();
      ce(() => Ke(a, t())), E(r, a);
    }
  });
}
ct(["change"]);
ct(["change"]);
function gg(n, e, t, r) {
  e() && ((n.key === "Enter" || n.key === " ") && (n.preventDefault(), t()), n.key === "Escape" && (n.preventDefault(), r()));
}
var mg = /* @__PURE__ */ Z('<span role="button" tabindex="0" aria-labelledby="tooltip"><!></span>');
function md(n, e) {
  Ae(e, !0);
  let t = m(e, "content", 3, ""), r = m(e, "side", 3, "top"), i = m(e, "hoverDelay", 3, 0), a = m(e, "transitionDuration", 3, 80), s = m(e, "disabled", 3, !1);
  const u = `tt-${Math.random().toString(36).slice(2)}`;
  let l = /* @__PURE__ */ le(null), d = /* @__PURE__ */ le(null), c = /* @__PURE__ */ le(null), h = /* @__PURE__ */ le(null), f = /* @__PURE__ */ le(!1), g = /* @__PURE__ */ le(null), v = /* @__PURE__ */ le(null);
  function p() {
    !t() || s() || (o(g) && clearTimeout(o(g)), i() > 0 ? G(g, setTimeout(() => G(f, !0), i()), !0) : G(f, !0));
  }
  function _() {
    o(g) && clearTimeout(o(g)), G(f, !1);
  }
  function y() {
    p();
  }
  function w() {
    _();
  }
  function S() {
    p();
  }
  function A() {
    _();
  }
  function T() {
    if (!o(d) || !o(h) || !o(l) || s()) return;
    const x = o(l).getBoundingClientRect(), D = o(h).getBoundingClientRect();
    let L = 0, O = 0;
    const R = 8;
    switch (r()) {
      case "top":
        L = x.top - D.height - R, O = x.left + x.width / 2 - D.width / 2;
        break;
      case "bottom":
        L = x.bottom + R, O = x.left + x.width / 2 - D.width / 2;
        break;
      case "left":
        L = x.top + x.height / 2 - D.height / 2, O = x.left - D.width - R;
        break;
      case "right":
        L = x.top + x.height / 2 - D.height / 2, O = x.right + R;
        break;
    }
    o(d).style.top = `${L + window.scrollY}px`, o(d).style.left = `${O + window.scrollX}px`;
  }
  function I() {
    var x;
    (x = o(v)) == null || x.disconnect(), G(v, null), o(d) && o(d).parentNode && o(d).parentNode.removeChild(o(d)), G(d, null), G(h, null), G(c, null), o(g) && clearTimeout(o(g));
  }
  Rn(I), Se(() => {
    if (!(!o(f) || !t() || s())) {
      if (!o(d)) {
        G(d, document.createElement("div"), !0), o(d).style.position = "absolute", o(d).style.zIndex = "9999", o(d).style.pointerEvents = "none", o(d).style.opacity = "0", o(d).style.transition = `opacity ${a()}ms ease`, o(d).id = u, o(d).setAttribute("role", "tooltip"), document.body.appendChild(o(d)), G(c, o(d).attachShadow({ mode: "open" }), !0);
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
      `, o(c).appendChild(x), G(h, document.createElement("div"), !0), o(c).appendChild(o(h)), G(
          v,
          new MutationObserver(() => {
            o(f) && T();
          }),
          !0
        ), o(v).observe(document.body, { childList: !0, subtree: !0 });
      }
      o(h) && (o(h).className = `bubble ${r()}`, o(h).innerHTML = t()), o(d) && (o(d).style.opacity = "1", T());
    }
  }), Se(() => {
    if (o(f) || !o(d))
      return;
    o(d).style.opacity = "0";
    const x = o(d), D = setTimeout(
      () => {
        x && x.parentNode && x.parentNode.removeChild(x), o(d) === x && I();
      },
      a()
    );
    return () => clearTimeout(D);
  });
  var b = mg();
  b.__keydown = [gg, t, p, _];
  var C = V(b);
  Ie(C, () => e.children ?? pe), xe(b, (x) => G(l, x), () => o(l)), ce(() => {
    bt(b, "aria-describedby", t() && !s() ? u : void 0), bt(b, "aria-haspopup", t() ? "true" : void 0), bt(b, "aria-expanded", t() ? o(f) ? "true" : "false" : void 0);
  }), Yt("mouseenter", b, y), Yt("mouseleave", b, w), Yt("focus", b, S), Yt("blur", b, A), E(n, b), Ee();
}
ct(["keydown"]);
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
var cr = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, Bl = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, ri = {
  ARIA_SELECTED: Bl.ARIA_SELECTED,
  ARIA_SORT: Bl.ARIA_SORT
}, vn;
(function(n) {
  n.ASCENDING = "ascending", n.DESCENDING = "descending", n.NONE = "none", n.OTHER = "other";
})(vn || (vn = {}));
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
var pg = (
  /** @class */
  function(n) {
    _n(e, n);
    function e(t) {
      return n.call(this, qe(qe({}, e.defaultAdapter), t)) || this;
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
      return Gf(this, void 0, void 0, function() {
        return Vf(this, function(t) {
          switch (t.label) {
            case 0:
              return this.adapter.isRowsSelectable() ? [4, this.adapter.registerHeaderRowCheckbox()] : [3, 3];
            case 1:
              return t.sent(), [4, this.adapter.registerRowCheckboxes()];
            case 2:
              t.sent(), this.setHeaderRowCheckboxState(), t.label = 3;
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
    }, e.prototype.setSelectedRowIds = function(t) {
      for (var r = 0; r < this.adapter.getRowCount(); r++) {
        var i = this.adapter.getRowIdAtIndex(r), a = !1;
        i && t.indexOf(i) >= 0 && (a = !0), this.adapter.setRowCheckboxCheckedAtIndex(r, a), this.selectRowAtIndex(r, a);
      }
      this.setHeaderRowCheckboxState();
    }, e.prototype.getRowIds = function() {
      for (var t = [], r = 0; r < this.adapter.getRowCount(); r++)
        t.push(this.adapter.getRowIdAtIndex(r));
      return t;
    }, e.prototype.getSelectedRowIds = function() {
      for (var t = [], r = 0; r < this.adapter.getRowCount(); r++)
        this.adapter.isCheckboxAtRowIndexChecked(r) && t.push(this.adapter.getRowIdAtIndex(r));
      return t;
    }, e.prototype.handleHeaderRowCheckboxChange = function() {
      for (var t = this.adapter.isHeaderRowCheckboxChecked(), r = 0; r < this.adapter.getRowCount(); r++)
        this.adapter.setRowCheckboxCheckedAtIndex(r, t), this.selectRowAtIndex(r, t);
      t ? this.adapter.notifySelectedAll() : this.adapter.notifyUnselectedAll();
    }, e.prototype.handleRowCheckboxChange = function(t) {
      var r = this.adapter.getRowIndexByChildElement(t.target);
      if (r !== -1) {
        var i = this.adapter.isCheckboxAtRowIndexChecked(r);
        this.selectRowAtIndex(r, i), this.setHeaderRowCheckboxState();
        var a = this.adapter.getRowIdAtIndex(r);
        this.adapter.notifyRowSelectionChanged({ rowId: a, rowIndex: r, selected: i });
      }
    }, e.prototype.handleSortAction = function(t) {
      for (var r = t.columnId, i = t.columnIndex, a = t.headerCell, s = 0; s < this.adapter.getHeaderCellCount(); s++)
        s !== i && (this.adapter.removeClassNameByHeaderCellIndex(s, cr.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(s, cr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(s, ri.ARIA_SORT, vn.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(s, vn.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, cr.HEADER_CELL_SORTED);
      var u = this.adapter.getAttributeByHeaderCellIndex(i, ri.ARIA_SORT), l = vn.NONE;
      u === vn.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, cr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, ri.ARIA_SORT, vn.DESCENDING), l = vn.DESCENDING) : u === vn.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, cr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, ri.ARIA_SORT, vn.ASCENDING), l = vn.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, ri.ARIA_SORT, vn.ASCENDING), l = vn.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, l), this.adapter.notifySortAction({
        columnId: r,
        columnIndex: i,
        headerCell: a,
        sortValue: l
      });
    }, e.prototype.handleRowClick = function(t) {
      var r = t.rowId, i = t.row;
      this.adapter.notifyRowClick({
        rowId: r,
        row: i
      });
    }, e.prototype.showProgress = function() {
      var t = this.adapter.getTableHeaderHeight(), r = this.adapter.getTableContainerHeight() - t, i = t;
      this.adapter.setProgressIndicatorStyles({
        height: r + "px",
        top: i + "px"
      }), this.adapter.addClass(cr.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(cr.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(t, r) {
      r ? (this.adapter.addClassAtRowIndex(t, cr.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, ri.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(t, cr.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, ri.ARIA_SELECTED, "false"));
    }, e;
  }(In)
), _g = /* @__PURE__ */ Z('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), Ig = /* @__PURE__ */ Z("<div><div><table><!></table></div> <!> <!></div>");
function bg(n, e) {
  Ae(e, !0);
  const t = () => Ii(R, "$progressClosed", r), [r, i] = Si(), { closest: a } = Ua;
  let s = m(e, "use", 19, () => []), u = m(e, "class", 3, ""), l = m(e, "stickyHeader", 3, !1), d = m(e, "sortable", 3, !1), c = m(e, "sort", 15, null), h = m(e, "sortDirection", 15, "ascending"), f = m(e, "sortAscendingAriaLabel", 3, "sorted, ascending"), g = m(e, "sortDescendingAriaLabel", 3, "sorted, descending"), v = m(e, "container$use", 19, () => []), p = m(e, "container$class", 3, ""), _ = m(e, "table$use", 19, () => []), y = m(e, "table$class", 3, ""), w = /* @__PURE__ */ We(e, [
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
  ]), S, A = /* @__PURE__ */ le(void 0), T, I = /* @__PURE__ */ le(void 0), b = /* @__PURE__ */ le(void 0), C = Ce({}), x = /* @__PURE__ */ le(Ce({ height: "auto", top: "initial" })), D = ye("SMUI:addLayoutListener"), L, O = !1, R = er(!1), re = er(c());
  Se(() => {
    Qn(re, c());
  });
  let q = er(h());
  Se(() => {
    Qn(q, h());
  }), de("SMUI:checkbox:context", "data-table"), de("SMUI:linear-progress:context", "data-table"), de("SMUI:linear-progress:closed", R), de("SMUI:data-table:sortable", d()), de("SMUI:data-table:sort", re), de("SMUI:data-table:sortDirection", q), de("SMUI:data-table:sortAscendingAriaLabel", f()), de("SMUI:data-table:sortDescendingAriaLabel", g()), D && (L = D(he));
  let N;
  Se(() => {
    e.progress && o(A) && N !== t() && (N = t(), t() ? o(A).hideProgress() : o(A).showProgress());
  }), de("SMUI:checkbox:mount", () => {
    o(A) && O && o(A).layout();
  }), de("SMUI:data-table:header:mount", (P) => {
    G(I, P, !0);
  }), de("SMUI:data-table:header:unmount", () => {
    G(I, void 0);
  }), de("SMUI:data-table:body:mount", (P) => {
    G(b, P, !0);
  }), de("SMUI:data-table:body:unmount", () => {
    G(b, void 0);
  }), rt(() => (G(
    A,
    new pg({
      addClass: J,
      removeClass: ue,
      getHeaderCellElements: () => {
        var P;
        return ((P = o(I)) == null ? void 0 : P.cells.map((j) => j.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var P;
        return ((P = o(I)) == null ? void 0 : P.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (P, j) => {
        var ve;
        return ((ve = o(I)) == null ? void 0 : ve.orderedCells[P].getAttr(j)) ?? null;
      },
      setAttributeByHeaderCellIndex: (P, j, ve) => {
        var Pe;
        (Pe = o(I)) == null || Pe.orderedCells[P].addAttr(j, ve);
      },
      setClassNameByHeaderCellIndex: (P, j) => {
        var ve;
        (ve = o(I)) == null || ve.orderedCells[P].addClass(j);
      },
      removeClassNameByHeaderCellIndex: (P, j) => {
        var ve;
        (ve = o(I)) == null || ve.orderedCells[P].removeClass(j);
      },
      notifySortAction: (P) => {
        c(P.columnId), h(P.sortValue), Ge(z(), "SMUIDataTableSorted", P);
      },
      getTableContainerHeight: () => T.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const P = z().querySelector(".mdc-data-table__header-row");
        if (!P)
          throw new Error("MDCDataTable: Table header element not found.");
        return P.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (P) => {
        G(x, P, !0);
      },
      addClassAtRowIndex: (P, j) => {
        var ve;
        (ve = o(b)) == null || ve.orderedRows[P].addClass(j);
      },
      getRowCount: () => {
        var P;
        return ((P = o(b)) == null ? void 0 : P.rows.length) ?? 0;
      },
      getRowElements: () => {
        var P;
        return ((P = o(b)) == null ? void 0 : P.rows.map((j) => j.element)) ?? [];
      },
      getRowIdAtIndex: (P) => {
        var j;
        return ((j = o(b)) == null ? void 0 : j.orderedRows[P].rowId) ?? null;
      },
      getRowIndexByChildElement: (P) => {
        var j;
        return ((j = o(b)) == null ? void 0 : j.orderedRows.map((ve) => ve.element).indexOf(a(P, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var P;
        return ((P = o(b)) == null ? void 0 : P.rows.filter((j) => j.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (P) => {
        var ve;
        const j = (ve = o(b)) == null ? void 0 : ve.orderedRows[P].checkbox;
        return j ? j.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var j;
        const P = (j = o(I)) == null ? void 0 : j.checkbox;
        return P ? P.checked : !1;
      },
      isRowsSelectable: () => !!z().querySelector(".mdc-data-table__row-checkbox") || !!z().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (P) => {
        var ve;
        const j = (ve = o(b)) == null ? void 0 : ve.orderedRows[P.rowIndex];
        j && Ge(z(), "SMUIDataTableSelectionChanged", {
          row: j.element,
          rowId: j.rowId,
          rowIndex: P.rowIndex,
          selected: P.selected
        });
      },
      notifySelectedAll: () => {
        F(!1), Ge(z(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        F(!1), Ge(z(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (P) => Ge(z(), "SMUIDataTableClickRow", P),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (P, j) => {
        var ve;
        (ve = o(b)) == null || ve.orderedRows[P].removeClass(j);
      },
      setAttributeAtRowIndex: (P, j, ve) => {
        var Pe;
        (Pe = o(b)) == null || Pe.orderedRows[P].addAttr(j, ve);
      },
      setHeaderRowCheckboxChecked: (P) => {
        var ve;
        const j = (ve = o(I)) == null ? void 0 : ve.checkbox;
        j && (j.checked = P);
      },
      setHeaderRowCheckboxIndeterminate: F,
      setRowCheckboxCheckedAtIndex: (P, j) => {
        var Pe;
        const ve = (Pe = o(b)) == null ? void 0 : Pe.orderedRows[P].checkbox;
        ve && (ve.checked = j);
      },
      setSortStatusLabelByHeaderCellIndex: (P, j) => {
      }
    }),
    !0
  ), o(A).init(), o(A).layout(), O = !0, () => {
    var P;
    (P = o(A)) == null || P.destroy();
  })), Rn(() => {
    L && L();
  });
  function H(P) {
    o(A) && o(A).handleRowCheckboxChange(P);
  }
  function J(P) {
    C[P] || (C[P] = !0);
  }
  function ue(P) {
    (!(P in C) || C[P]) && (C[P] = !1);
  }
  function F(P) {
    var ve;
    const j = (ve = o(I)) == null ? void 0 : ve.checkbox;
    j && (j.indeterminate = P);
  }
  function $(P) {
    if (!o(A) || !P.detail.target)
      return;
    const j = a(P.detail.target, ".mdc-data-table__header-cell--with-sort");
    j && _e(j);
  }
  function se(P) {
    if (!o(A) || !P.detail.target)
      return;
    const j = a(P.detail.target, ".mdc-data-table__row");
    j && o(A) && o(A).handleRowClick({ rowId: P.detail.rowId, row: j });
  }
  function _e(P) {
    var Nt, fn;
    const j = ((Nt = o(I)) == null ? void 0 : Nt.orderedCells) ?? [], ve = j.map((ir) => ir.element).indexOf(P);
    if (ve === -1)
      return;
    const Pe = j[ve].columnId ?? null;
    (fn = o(A)) == null || fn.handleSortAction({ columnId: Pe, columnIndex: ve, headerCell: P });
  }
  function he() {
    var P;
    return (P = o(A)) == null ? void 0 : P.layout();
  }
  function z() {
    return S;
  }
  var W = { layout: he, getElement: z }, k = Ig(), Q = (P) => {
    var j;
    o(A) && o(A).handleHeaderRowCheckboxChange(), (j = e.onSMUIDataTableHeaderCheckboxChange) == null || j.call(e, P);
  }, X = (P) => {
    var j;
    $(P), (j = e.onSMUIDataTableHeaderClick) == null || j.call(e, P);
  }, fe = (P) => {
    var j;
    se(P), (j = e.onSMUIDataTableRowClick) == null || j.call(e, P);
  }, be = (P) => {
    var j;
    H(P), (j = e.onSMUIDataTableBodyCheckboxChange) == null || j.call(e, P);
  };
  Be(
    k,
    (P, j) => ({
      class: P,
      ...j,
      onSMUIDataTableHeaderCheckboxChange: Q,
      onSMUIDataTableHeaderClick: X,
      onSMUIDataTableRowClick: fe,
      onSMUIDataTableBodyCheckboxChange: be
    }),
    [
      () => He({
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": l(),
        ...C,
        [u()]: !0
      }),
      () => xa(w, ["container$", "table$"])
    ]
  );
  var Ne = V(k);
  Be(Ne, (P, j) => ({ class: P, ...j }), [
    () => He({
      "mdc-data-table__table-container": !0,
      [p()]: !0
    }),
    () => ut(w, "container$")
  ]);
  var tt = V(Ne);
  Be(tt, (P, j) => ({ class: P, ...j }), [
    () => He({ "mdc-data-table__table": !0, [y()]: !0 }),
    () => ut(w, "table$")
  ]);
  var Je = V(tt);
  Ie(Je, () => e.children ?? pe), Le(tt, (P, j) => ie == null ? void 0 : ie(P, j), _), xe(Ne, (P) => T = P, () => T), Le(Ne, (P, j) => ie == null ? void 0 : ie(P, j), v);
  var Oe = Y(Ne, 2);
  {
    var mt = (P) => {
      var j = _g(), ve = Y(V(j), 2);
      Ie(ve, () => e.progress ?? pe), ce((Pe) => Ke(j, Pe), [
        () => Object.entries(o(x)).map(([Pe, Nt]) => `${Pe}: ${Nt};`).join(" ")
      ]), E(P, j);
    };
    ee(Oe, (P) => {
      e.progress && P(mt);
    });
  }
  var kt = Y(Oe, 2);
  Ie(kt, () => e.paginate ?? pe), xe(k, (P) => S = P, () => S), Le(k, (P, j) => ie == null ? void 0 : ie(P, j), s), E(n, k);
  var Ft = Ee(W);
  return i(), Ft;
}
var yg = /* @__PURE__ */ Z("<thead><!></thead>");
function Cg(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = /* @__PURE__ */ We(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i, a = /* @__PURE__ */ le(void 0), s = [];
  const u = /* @__PURE__ */ new WeakMap();
  de("SMUI:data-table:row:header", !0);
  const l = ye("SMUI:checkbox:mount");
  de("SMUI:checkbox:mount", (y) => {
    G(a, y, !0), l && l(y);
  });
  const d = ye("SMUI:checkbox:unmount");
  de("SMUI:checkbox:unmount", (y) => {
    G(a, void 0), d && d(y);
  }), de("SMUI:data-table:cell:mount", (y) => {
    s.push(y), u.set(y.element, y);
  }), de("SMUI:data-table:cell:unmount", (y) => {
    const w = s.findIndex((S) => S === y);
    w !== -1 && s.splice(w, 1), u.delete(y.element);
  });
  const c = ye("SMUI:data-table:header:mount"), h = ye("SMUI:data-table:header:unmount");
  rt(() => {
    const y = {
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
    return c && c(y), () => {
      h && h(y);
    };
  });
  function f() {
    return [
      ...g().querySelectorAll(".mdc-data-table__header-cell")
    ].map((y) => u.get(y)).filter((y) => y && y._smui_data_table_header_cell_accessor);
  }
  function g() {
    return i;
  }
  var v = { getElement: g }, p = yg();
  Be(p, () => ({ ...r }));
  var _ = V(p);
  return Ie(_, () => e.children ?? pe), xe(p, (y) => i = y, () => i), Le(p, (y, w) => ie == null ? void 0 : ie(y, w), t), E(n, p), Ee(v);
}
var Ag = /* @__PURE__ */ Z("<tbody><!></tbody>");
function Eg(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = /* @__PURE__ */ We(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "children"
  ]), a, s = [];
  const u = /* @__PURE__ */ new WeakMap();
  de("SMUI:data-table:row:header", !1), de("SMUI:data-table:row:mount", (p) => {
    s.push(p), u.set(p.element, p);
  }), de("SMUI:data-table:row:unmount", (p) => {
    const _ = s.findIndex((y) => y === p);
    _ !== -1 && s.splice(_, 1), u.delete(p.element);
  });
  const l = ye("SMUI:data-table:body:mount"), d = ye("SMUI:data-table:body:unmount");
  rt(() => {
    const p = {
      get rows() {
        return s;
      },
      get orderedRows() {
        return c();
      }
    };
    return l && l(p), () => {
      d && d(p);
    };
  });
  function c() {
    return [...h().querySelectorAll(".mdc-data-table__row")].map((p) => u.get(p)).filter((p) => p && p._smui_data_table_row_accessor);
  }
  function h() {
    return a;
  }
  var f = { getElement: h }, g = Ag();
  Be(g, (p) => ({ class: p, ...i }), [
    () => He({ "mdc-data-table__content": !0, [r()]: !0 })
  ]);
  var v = V(g);
  return Ie(v, () => e.children ?? pe), xe(g, (p) => a = p, () => a), Le(g, (p, _) => ie == null ? void 0 : ie(p, _), t), E(n, g), Ee(f);
}
let Sg = 0;
var xg = /* @__PURE__ */ Z("<tr><!></tr>");
function Gl(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "rowId", 19, () => "SMUI-data-table-row-" + Sg++), a = /* @__PURE__ */ We(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "rowId",
    "children"
  ]), s, u = /* @__PURE__ */ le(void 0), l = Ce({}), d = Ce({}), c = ye("SMUI:data-table:row:header");
  const h = ye("SMUI:checkbox:mount");
  de("SMUI:checkbox:mount", (D) => {
    G(u, D, !0), h && h(D);
  });
  const f = ye("SMUI:checkbox:unmount");
  de("SMUI:checkbox:unmount", (D) => {
    G(u, void 0), f && f(D);
  });
  const g = ye("SMUI:data-table:row:mount"), v = ye("SMUI:data-table:row:unmount");
  rt(() => {
    const D = c ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return T();
      },
      get checkbox() {
        return o(u);
      },
      get rowId() {
      },
      get selected() {
        return (o(u) && o(u).checked) ?? !1;
      },
      addClass: p,
      removeClass: _,
      getAttr: y,
      addAttr: w
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return T();
      },
      get checkbox() {
        return o(u);
      },
      get rowId() {
        return i();
      },
      get selected() {
        return (o(u) && o(u).checked) ?? !1;
      },
      addClass: p,
      removeClass: _,
      getAttr: y,
      addAttr: w
    };
    return g && g(D), () => {
      v && v(D);
    };
  });
  function p(D) {
    l[D] || (l[D] = !0);
  }
  function _(D) {
    (!(D in l) || l[D]) && (l[D] = !1);
  }
  function y(D) {
    return D in d ? d[D] ?? null : T().getAttribute(D);
  }
  function w(D, L) {
    d[D] !== L && (d[D] = L);
  }
  function S(D) {
    Ge(T(), "SMUIDataTableHeaderClick", D);
  }
  function A(D) {
    Ge(T(), "SMUIDataTableRowClick", { rowId: i(), target: D.target });
  }
  function T() {
    return s;
  }
  var I = { getElement: T }, b = xg(), C = (D) => {
    var L;
    c ? S(D) : A(D), (L = e.onclick) == null || L.call(e, D);
  };
  Be(
    b,
    (D) => ({
      class: D,
      "aria-selected": o(u) ? o(u).checked ? "true" : "false" : void 0,
      ...d,
      ...a,
      onclick: C
    }),
    [
      () => He({
        "mdc-data-table__header-row": c,
        "mdc-data-table__row": !c,
        "mdc-data-table__row--selected": !c && o(u) && o(u).checked,
        ...l,
        [r()]: !0
      })
    ]
  );
  var x = V(b);
  return Ie(x, () => e.children ?? pe), xe(b, (D) => s = D, () => s), Le(b, (D, L) => ie == null ? void 0 : ie(D, L), t), E(n, b), Ee(I);
}
let wg = 0;
var Tg = /* @__PURE__ */ Z('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), Dg = /* @__PURE__ */ Z("<th><!></th>"), Lg = /* @__PURE__ */ Z("<td><!></td>");
function Ja(n, e) {
  Ae(e, !0);
  const t = () => Ii(y, "$sort", i), r = () => Ii(w, "$sortDirection", i), [i, a] = Si();
  let s = ye("SMUI:data-table:row:header"), u = m(e, "use", 19, () => []), l = m(e, "class", 3, ""), d = m(e, "numeric", 3, !1), c = m(e, "checkbox", 3, !1), h = m(e, "columnId", 19, () => s ? "SMUI-data-table-column-" + wg++ : "SMUI-data-table-unused"), f = m(e, "sortable", 19, () => ye("SMUI:data-table:sortable")), g = /* @__PURE__ */ We(e, [
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
  ]), v, p = Ce({}), _ = Ce({}), y = ye("SMUI:data-table:sort"), w = ye("SMUI:data-table:sortDirection"), S = ye("SMUI:data-table:sortAscendingAriaLabel"), A = ye("SMUI:data-table:sortDescendingAriaLabel");
  f() && (de("SMUI:label:context", "data-table:sortable-header-cell"), de("SMUI:icon-button:context", "data-table:sortable-header-cell"), de("SMUI:icon-button:aria-describedby", h() + "-status-label"));
  const T = ye("SMUI:data-table:cell:mount"), I = ye("SMUI:data-table:cell:unmount");
  rt(() => {
    const F = s ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return R();
      },
      get columnId() {
        return h();
      },
      addClass: b,
      removeClass: C,
      getAttr: x,
      addAttr: D
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return R();
      },
      get columnId() {
      },
      addClass: b,
      removeClass: C,
      getAttr: x,
      addAttr: D
    };
    return T && T(F), () => {
      I && I(F);
    };
  });
  function b(F) {
    p[F] || (p[F] = !0);
  }
  function C(F) {
    (!(F in p) || p[F]) && (p[F] = !1);
  }
  function x(F) {
    return F in _ ? _[F] ?? null : R().getAttribute(F);
  }
  function D(F, $) {
    _[F] !== $ && (_[F] = $);
  }
  function L(F) {
    Ge(R(), "SMUIDataTableHeaderCheckboxChange", F);
  }
  function O(F) {
    Ge(R(), "SMUIDataTableBodyCheckboxChange", F);
  }
  function R() {
    return v;
  }
  var re = { getElement: R }, q = oe(), N = K(q);
  {
    var H = (F) => {
      var $ = Dg(), se = (W) => {
        var k;
        c() && L(W), (k = e.onchange) == null || k.call(e, W);
      };
      Be(
        $,
        (W) => ({
          class: W,
          role: "columnheader",
          scope: "col",
          "data-column-id": h(),
          "aria-sort": f() ? t() === h() ? r() : "none" : void 0,
          ..._,
          ...g,
          onchange: se
        }),
        [
          () => He({
            "mdc-data-table__header-cell": !0,
            "mdc-data-table__header-cell--numeric": d(),
            "mdc-data-table__header-cell--checkbox": c(),
            "mdc-data-table__header-cell--with-sort": f(),
            "mdc-data-table__header-cell--sorted": f() && t() === h(),
            ...p,
            [l()]: !0
          })
        ]
      );
      var _e = V($);
      {
        var he = (W) => {
          var k = Tg(), Q = V(k);
          Ie(Q, () => e.children ?? pe);
          var X = Y(Q, 2), fe = V(X);
          ce(() => {
            bt(X, "id", `${h() ?? ""}-status-label`), Me(fe, t() === h() ? r() === "ascending" ? S : A : "");
          }), E(W, k);
        }, z = (W) => {
          var k = oe(), Q = K(k);
          Ie(Q, () => e.children ?? pe), E(W, k);
        };
        ee(_e, (W) => {
          f() ? W(he) : W(z, !1);
        });
      }
      xe($, (W) => v = W, () => v), Le($, (W, k) => ie == null ? void 0 : ie(W, k), u), E(F, $);
    }, J = (F) => {
      var $ = Lg(), se = (he) => {
        var z;
        c() && O(he), (z = e.onchange) == null || z.call(e, he);
      };
      Be(
        $,
        (he) => ({
          class: he,
          ..._,
          ...g,
          onchange: se
        }),
        [
          () => He({
            "mdc-data-table__cell": !0,
            "mdc-data-table__cell--numeric": d(),
            "mdc-data-table__cell--checkbox": c(),
            ...p,
            [l()]: !0
          })
        ]
      );
      var _e = V($);
      Ie(_e, () => e.children ?? pe), xe($, (he) => v = he, () => v), Le($, (he, z) => ie == null ? void 0 : ie(he, z), u), E(F, $);
    };
    ee(N, (F) => {
      s ? F(H) : F(J, !1);
    });
  }
  E(n, q);
  var ue = Ee(re);
  return a(), ue;
}
var Og = /* @__PURE__ */ Z('<p class="status svelte-185z1ay">Loading…</p>'), Rg = /* @__PURE__ */ Z('<p class="status error svelte-185z1ay"> </p>'), Mg = /* @__PURE__ */ Z('<p class="status svelte-185z1ay"> </p>'), Pg = /* @__PURE__ */ Z("<!> <!>", 1), kg = /* @__PURE__ */ Z("<!> <!>", 1), Fg = /* @__PURE__ */ Z("<!> <!>", 1);
function Ng(n, e) {
  Ae(e, !0);
  let t = m(e, "items", 19, () => []), r = m(e, "columns", 19, () => []), i = m(e, "loading", 3, !1), a = m(e, "errorMsg", 3, ""), s = m(e, "emptyText", 3, "Nothing to show."), u = m(e, "getRowId", 3, (_, y) => (_ && (_.id ?? _.key)) ?? y), l = m(e, "headerBg", 3, null), d = m(e, "rowBg", 3, null), c = m(e, "hasActions", 3, !1), h = /* @__PURE__ */ te(() => c() || !!e.actions);
  var f = oe(), g = K(f);
  {
    var v = (_) => {
      var y = Og();
      E(_, y);
    }, p = (_) => {
      var y = oe(), w = K(y);
      {
        var S = (T) => {
          var I = Rg(), b = V(I);
          ce(() => Me(b, a())), E(T, I);
        }, A = (T) => {
          var I = oe(), b = K(I);
          {
            var C = (D) => {
              var L = Mg(), O = V(L);
              ce(() => Me(O, s())), E(D, L);
            }, x = (D) => {
              bg(D, {
                style: "width: 100%;",
                children: (L, O) => {
                  var R = Fg(), re = K(R);
                  {
                    let N = /* @__PURE__ */ te(() => l() ? `background-color:${l()}` : void 0);
                    Cg(re, {
                      get style() {
                        return o(N);
                      },
                      children: (H, J) => {
                        Gl(H, {
                          children: (ue, F) => {
                            var $ = Pg(), se = K($);
                            mn(se, 17, r, _r, (z, W) => {
                              {
                                let k = /* @__PURE__ */ te(() => [
                                  o(W).width ? `width:${o(W).width}` : "",
                                  l() ? `background-color:${l()}` : ""
                                ].filter(Boolean).join(";"));
                                Ja(z, {
                                  header: !0,
                                  get style() {
                                    return o(k);
                                  },
                                  children: (Q, X) => {
                                    var fe = at();
                                    ce(() => Me(fe, o(W).header)), E(Q, fe);
                                  },
                                  $$slots: { default: !0 }
                                });
                              }
                            });
                            var _e = Y(se, 2);
                            {
                              var he = (z) => {
                                {
                                  let W = /* @__PURE__ */ te(() => l() ? `background-color:${l()}` : void 0);
                                  Ja(z, {
                                    header: !0,
                                    get style() {
                                      return o(W);
                                    }
                                  });
                                }
                              };
                              ee(_e, (z) => {
                                o(h) && z(he);
                              });
                            }
                            E(ue, $);
                          },
                          $$slots: { default: !0 }
                        });
                      },
                      $$slots: { default: !0 }
                    });
                  }
                  var q = Y(re, 2);
                  Eg(q, {
                    children: (N, H) => {
                      var J = oe(), ue = K(J);
                      mn(ue, 19, t, (F, $) => u()(F, $), (F, $) => {
                        {
                          let se = /* @__PURE__ */ te(() => d() ? `background-color:${d()}` : void 0);
                          Gl(F, {
                            get style() {
                              return o(se);
                            },
                            children: (_e, he) => {
                              var z = kg(), W = K(z);
                              mn(W, 17, r, _r, (X, fe) => {
                                {
                                  let be = /* @__PURE__ */ te(() => o(fe).bold ? "cell-bold" : "");
                                  Ja(X, {
                                    get class() {
                                      return o(be);
                                    },
                                    children: (Ne, tt) => {
                                      var Je = at();
                                      ce(() => {
                                        var Oe;
                                        return Me(Je, ((Oe = o($)) == null ? void 0 : Oe[o(fe).key]) ?? "");
                                      }), E(Ne, Je);
                                    },
                                    $$slots: { default: !0 }
                                  });
                                }
                              });
                              var k = Y(W, 2);
                              {
                                var Q = (X) => {
                                  Ja(X, {
                                    numeric: !0,
                                    children: (fe, be) => {
                                      var Ne = oe(), tt = K(Ne);
                                      Ie(tt, () => e.actions ?? pe, () => ({ item: o($) })), E(fe, Ne);
                                    },
                                    $$slots: { default: !0 }
                                  });
                                };
                                ee(k, (X) => {
                                  o(h) && X(Q);
                                });
                              }
                              E(_e, z);
                            },
                            $$slots: { default: !0 }
                          });
                        }
                      }), E(N, J);
                    },
                    $$slots: { default: !0 }
                  }), E(L, R);
                },
                $$slots: { default: !0 }
              });
            };
            ee(
              b,
              (D) => {
                !t() || t().length === 0 ? D(C) : D(x, !1);
              },
              !0
            );
          }
          E(T, I);
        };
        ee(
          w,
          (T) => {
            a() ? T(S) : T(A, !1);
          },
          !0
        );
      }
      E(_, y);
    };
    ee(g, (_) => {
      i() ? _(v) : _(p, !1);
    });
  }
  E(n, f), Ee();
}
var Ug = /* @__PURE__ */ st('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"></path></svg>');
function Hg(n, e) {
  let t = m(e, "svgStyles", 3, "");
  yt(n, {
    children: (r, i) => {
      var a = Ug();
      ce(() => Ke(a, t())), E(r, a);
    }
  });
}
var Bg = /* @__PURE__ */ Z('<span class="secondary-label svelte-17mxdlc"> </span>'), Gg = /* @__PURE__ */ Z('<div class="separator svelte-17mxdlc"><!></div>'), Vg = /* @__PURE__ */ Z('<div class="breadcrumb-wrapper svelte-17mxdlc"><button type="button"><span class="label svelte-17mxdlc"> </span> <!></button> <!></div>'), zg = /* @__PURE__ */ Z('<nav class="oscd-breadcrumbs svelte-17mxdlc" aria-label="Breadcrumb"></nav>');
function qg(n, e) {
  Ae(e, !0);
  let t = m(e, "breadcrumbs", 19, () => []), r = m(e, "activeIndex", 3, 0);
  const i = (s) => {
    var l;
    const u = t()[s];
    !(u != null && u.enabled) || s === r() || (l = e.handleClick) == null || l.call(e, s);
  };
  var a = zg();
  mn(a, 21, t, _r, (s, u, l) => {
    var d = Vg(), c = V(d);
    let h;
    c.__click = () => i(l);
    let f;
    var g = V(c), v = V(g), p = Y(g, 2);
    {
      var _ = (S) => {
        var A = Bg();
        let T;
        var I = V(A);
        ce(
          (b) => {
            T = Ke(A, "", T, b), Me(I, o(u).secondaryLabel);
          },
          [() => ({ color: e.color ? e.color : null })]
        ), E(S, A);
      };
      ee(p, (S) => {
        o(u).secondaryLabel && S(_);
      });
    }
    var y = Y(c, 2);
    {
      var w = (S) => {
        var A = Gg(), T = V(A);
        {
          let I = /* @__PURE__ */ te(() => e.color ? e.color : "#004552");
          Hg(T, {
            get svgStyles() {
              return `fill: ${o(I) ?? ""}`;
            }
          });
        }
        E(S, A);
      };
      ee(y, (S) => {
        l < t().length - 1 && S(w);
      });
    }
    ce(
      (S, A) => {
        h = Ir(c, 1, "breadcrumb svelte-17mxdlc", null, h, S), bt(c, "aria-current", l === r() ? "page" : void 0), bt(c, "aria-disabled", o(u).enabled ? void 0 : "true"), f = Ke(c, "", f, A), Me(v, o(u).label);
      },
      [
        () => ({
          "br-disabled": !o(u).enabled,
          "br-active": l === r()
        }),
        () => ({ color: e.color ? e.color : null })
      ]
    ), E(s, d);
  }), E(n, a), Ee();
}
ct(["click"]);
var Wg = (n, e) => {
  var t;
  n.stopPropagation(), (t = e.onClick) == null || t.call(e, n);
}, jg = /* @__PURE__ */ Z('<button class="icon-button svelte-jv2py4"><!></button>');
function pd(n, e) {
  Ae(e, !0);
  let t = m(e, "tooltipSide", 3, "top"), r = m(e, "showDelay", 3, 1e3), i = m(e, "fillColor", 3, "var(--mdc-theme-primary)"), a = m(e, "size", 3, "25px"), s = /* @__PURE__ */ te(() => `fill: ${i()}; margin: 0; width: ${a()}; height: ${a()};`);
  md(n, {
    get content() {
      return e.tooltip;
    },
    get hoverDelay() {
      return r();
    },
    get side() {
      return t();
    },
    children: (u, l) => {
      var d = jg();
      d.__click = [Wg, e];
      var c = V(d);
      {
        var h = (g) => {
          cd(g, {
            get svgStyles() {
              return o(s);
            }
          });
        }, f = (g) => {
          var v = oe(), p = K(v);
          {
            var _ = (w) => {
              Hv(w, {
                get svgStyles() {
                  return o(s);
                }
              });
            }, y = (w) => {
              var S = oe(), A = K(S);
              {
                var T = (b) => {
                  dd(b, {
                    get svgStyles() {
                      return o(s);
                    }
                  });
                }, I = (b) => {
                  var C = oe(), x = K(C);
                  {
                    var D = (O) => {
                      fd(O, {
                        get svgStyles() {
                          return o(s);
                        }
                      });
                    }, L = (O) => {
                      var R = oe(), re = K(R);
                      {
                        var q = (H) => {
                          $v(H, {
                            get svgStyles() {
                              return o(s);
                            }
                          });
                        }, N = (H) => {
                          var J = oe(), ue = K(J);
                          {
                            var F = (se) => {
                              tg(se, {
                                get svgStyles() {
                                  return o(s);
                                }
                              });
                            }, $ = (se) => {
                              var _e = oe(), he = K(_e);
                              {
                                var z = (k) => {
                                  rg(k, {
                                    get svgStyles() {
                                      return o(s);
                                    }
                                  });
                                }, W = (k) => {
                                  var Q = oe(), X = K(Q);
                                  {
                                    var fe = (Ne) => {
                                      ag(Ne, {
                                        get svgStyles() {
                                          return o(s);
                                        }
                                      });
                                    }, be = (Ne) => {
                                      var tt = at();
                                      ce(() => Me(tt, `Unsupported supported type: ${e.type ?? ""}`)), E(Ne, tt);
                                    };
                                    ee(
                                      X,
                                      (Ne) => {
                                        e.type === "star" ? Ne(fe) : Ne(be, !1);
                                      },
                                      !0
                                    );
                                  }
                                  E(k, Q);
                                };
                                ee(
                                  he,
                                  (k) => {
                                    e.type === "close" ? k(z) : k(W, !1);
                                  },
                                  !0
                                );
                              }
                              E(se, _e);
                            };
                            ee(
                              ue,
                              (se) => {
                                e.type === "link-off" ? se(F) : se($, !1);
                              },
                              !0
                            );
                          }
                          E(H, J);
                        };
                        ee(
                          re,
                          (H) => {
                            e.type === "wand-stars" ? H(q) : H(N, !1);
                          },
                          !0
                        );
                      }
                      E(O, R);
                    };
                    ee(
                      x,
                      (O) => {
                        e.type === "visibility" ? O(D) : O(L, !1);
                      },
                      !0
                    );
                  }
                  E(b, C);
                };
                ee(
                  A,
                  (b) => {
                    e.type === "edit" ? b(T) : b(I, !1);
                  },
                  !0
                );
              }
              E(w, S);
            };
            ee(
              p,
              (w) => {
                e.type === "duplicate" ? w(_) : w(y, !1);
              },
              !0
            );
          }
          E(g, v);
        };
        ee(c, (g) => {
          e.type === "delete" ? g(h) : g(f, !1);
        });
      }
      ce(() => bt(d, "aria-label", e.tooltip)), E(u, d);
    },
    $$slots: { default: !0 }
  }), Ee();
}
ct(["click"]);
function Vl(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function kr(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Vl(Object(t), !0).forEach(function(r) {
      na(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Vl(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function Ni(n) {
  "@babel/helpers - typeof";
  return Ni = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ni(n);
}
function na(n, e, t) {
  return e in n ? Object.defineProperty(n, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[e] = t, n;
}
function Zg(n, e) {
  if (n == null) return {};
  var t = {}, r = Object.keys(n), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(e.indexOf(i) >= 0) && (t[i] = n[i]);
  return t;
}
function Xg(n, e) {
  if (n == null) return {};
  var t = Zg(n, e), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    for (i = 0; i < a.length; i++)
      r = a[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(n, r) && (t[r] = n[r]);
  }
  return t;
}
function Kg(n, e) {
  return Jg(n) || $g(n, e) || Ko(n, e) || tm();
}
function Dn(n) {
  return Yg(n) || Qg(n) || Ko(n) || em();
}
function Yg(n) {
  if (Array.isArray(n)) return Co(n);
}
function Jg(n) {
  if (Array.isArray(n)) return n;
}
function Qg(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function $g(n, e) {
  var t = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (t != null) {
    var r = [], i = !0, a = !1, s, u;
    try {
      for (t = t.call(n); !(i = (s = t.next()).done) && (r.push(s.value), !(e && r.length === e)); i = !0)
        ;
    } catch (l) {
      a = !0, u = l;
    } finally {
      try {
        !i && t.return != null && t.return();
      } finally {
        if (a) throw u;
      }
    }
    return r;
  }
}
function Ko(n, e) {
  if (n) {
    if (typeof n == "string") return Co(n, e);
    var t = Object.prototype.toString.call(n).slice(8, -1);
    if (t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set") return Array.from(n);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Co(n, e);
  }
}
function Co(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
  return r;
}
function em() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function tm() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ha(n, e) {
  var t = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (!t) {
    if (Array.isArray(n) || (t = Ko(n)) || e) {
      t && (n = t);
      var r = 0, i = function() {
      };
      return {
        s: i,
        n: function() {
          return r >= n.length ? {
            done: !0
          } : {
            done: !1,
            value: n[r++]
          };
        },
        e: function(l) {
          throw l;
        },
        f: i
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a = !0, s = !1, u;
  return {
    s: function() {
      t = t.call(n);
    },
    n: function() {
      var l = t.next();
      return a = l.done, l;
    },
    e: function(l) {
      s = !0, u = l;
    },
    f: function() {
      try {
        !a && t.return != null && t.return();
      } finally {
        if (s) throw u;
      }
    }
  };
}
var nm = "finalize", rm = "consider";
function ra(n, e, t) {
  n.dispatchEvent(new CustomEvent(nm, {
    detail: {
      items: e,
      info: t
    }
  }));
}
function zr(n, e, t) {
  n.dispatchEvent(new CustomEvent(rm, {
    detail: {
      items: e,
      info: t
    }
  }));
}
var Fs = "draggedEntered", Ba = "draggedLeft", Ns = "draggedOverIndex", Yo = "draggedLeftDocument", gs = {
  LEFT_FOR_ANOTHER: "leftForAnother",
  OUTSIDE_OF_ANY: "outsideOfAny"
};
function im(n, e, t) {
  n.dispatchEvent(new CustomEvent(Fs, {
    detail: {
      indexObj: e,
      draggedEl: t
    }
  }));
}
function am(n, e, t) {
  n.dispatchEvent(new CustomEvent(Ba, {
    detail: {
      draggedEl: e,
      type: gs.LEFT_FOR_ANOTHER,
      theOtherDz: t
    }
  }));
}
function sm(n, e) {
  n.dispatchEvent(new CustomEvent(Ba, {
    detail: {
      draggedEl: e,
      type: gs.OUTSIDE_OF_ANY
    }
  }));
}
function om(n, e, t) {
  n.dispatchEvent(new CustomEvent(Ns, {
    detail: {
      indexObj: e,
      draggedEl: t
    }
  }));
}
function lm(n) {
  window.dispatchEvent(new CustomEvent(Yo, {
    detail: {
      draggedEl: n
    }
  }));
}
var Dt = {
  DRAG_STARTED: "dragStarted",
  DRAGGED_ENTERED: Fs,
  DRAGGED_ENTERED_ANOTHER: "dragEnteredAnother",
  DRAGGED_OVER_INDEX: Ns,
  DRAGGED_LEFT: Ba,
  DRAGGED_LEFT_ALL: "draggedLeftAll",
  DROPPED_INTO_ZONE: "droppedIntoZone",
  DROPPED_INTO_ANOTHER: "droppedIntoAnother",
  DROPPED_OUTSIDE_OF_ANY: "droppedOutsideOfAny",
  DRAG_STOPPED: "dragStopped"
}, Zt = {
  POINTER: "pointer",
  KEYBOARD: "keyboard"
}, Ga = "isDndShadowItem", Us = "data-is-dnd-shadow-item-internal", um = "data-is-dnd-shadow-item-hint", dm = "id:dnd-shadow-placeholder-0000", cm = "dnd-action-dragged-el", wt = "id", Ao = 0;
function _d() {
  Ao++;
}
function Id() {
  if (Ao === 0)
    throw new Error("Bug! trying to decrement when there are no dropzones");
  Ao--;
}
var Jo = typeof window > "u";
function Eo(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, t, r = e ? vm(n) : n.getBoundingClientRect(), i = getComputedStyle(n), a = i.transform;
  if (a) {
    var s, u, l, d;
    if (a.startsWith("matrix3d("))
      t = a.slice(9, -1).split(/, /), s = +t[0], u = +t[5], l = +t[12], d = +t[13];
    else if (a.startsWith("matrix("))
      t = a.slice(7, -1).split(/, /), s = +t[0], u = +t[3], l = +t[4], d = +t[5];
    else
      return r;
    var c = i.transformOrigin, h = r.x - l - (1 - s) * parseFloat(c), f = r.y - d - (1 - u) * parseFloat(c.slice(c.indexOf(" ") + 1)), g = s ? r.width / s : n.offsetWidth, v = u ? r.height / u : n.offsetHeight;
    return {
      x: h,
      y: f,
      width: g,
      height: v,
      top: f,
      right: h + g,
      bottom: f + v,
      left: h
    };
  } else
    return r;
}
function bd(n) {
  var e = Eo(n);
  return {
    top: e.top + window.scrollY,
    bottom: e.bottom + window.scrollY,
    left: e.left + window.scrollX,
    right: e.right + window.scrollX
  };
}
function yd(n) {
  var e = n.getBoundingClientRect();
  return {
    top: e.top + window.scrollY,
    bottom: e.bottom + window.scrollY,
    left: e.left + window.scrollX,
    right: e.right + window.scrollX
  };
}
function Cd(n) {
  return {
    x: (n.left + n.right) / 2,
    y: (n.top + n.bottom) / 2
  };
}
function fm(n, e) {
  return Math.sqrt(Math.pow(n.x - e.x, 2) + Math.pow(n.y - e.y, 2));
}
function Hs(n, e) {
  return n.y <= e.bottom && n.y >= e.top && n.x >= e.left && n.x <= e.right;
}
function wa(n) {
  return Cd(yd(n));
}
function zl(n, e) {
  var t = wa(n), r = bd(e);
  return Hs(t, r);
}
function ql(n, e) {
  var t = wa(n), r = wa(e);
  return fm(t, r);
}
function hm(n) {
  var e = yd(n);
  return e.right < 0 || e.left > document.documentElement.scrollWidth || e.bottom < 0 || e.top > document.documentElement.scrollHeight;
}
function vm(n) {
  for (var e = n.getBoundingClientRect(), t = {
    top: e.top,
    bottom: e.bottom,
    left: e.left,
    right: e.right
  }, r = n.parentElement; r && r !== document.body; ) {
    var i = r.getBoundingClientRect(), a = window.getComputedStyle(r).overflowY, s = window.getComputedStyle(r).overflowX, u = a === "scroll" || a === "auto", l = s === "scroll" || s === "auto";
    u && (t.top = Math.max(t.top, i.top), t.bottom = Math.min(t.bottom, i.bottom)), l && (t.left = Math.max(t.left, i.left), t.right = Math.min(t.right, i.right)), r = r.parentElement;
  }
  return t.top = Math.max(t.top, 0), t.bottom = Math.min(t.bottom, window.innerHeight), t.left = Math.max(t.left, 0), t.right = Math.min(t.right, window.innerWidth), {
    top: t.top,
    bottom: t.bottom,
    left: t.left,
    right: t.right,
    width: Math.max(0, t.right - t.left),
    height: Math.max(0, t.bottom - t.top)
  };
}
var Gi;
function Qo() {
  Gi = /* @__PURE__ */ new Map();
}
Qo();
function gm(n) {
  var e = Array.from(n.children).findIndex(function(t) {
    return t.getAttribute(Us);
  });
  if (e >= 0)
    return Gi.has(n) || Gi.set(n, /* @__PURE__ */ new Map()), Gi.get(n).set(e, bd(n.children[e])), e;
}
function mm(n, e) {
  if (!zl(n, e))
    return null;
  var t = e.children;
  if (t.length === 0)
    return {
      index: 0,
      isProximityBased: !0
    };
  for (var r = gm(e), i = 0; i < t.length; i++)
    if (zl(n, t[i])) {
      var a = Gi.has(e) && Gi.get(e).get(i);
      return a && !Hs(wa(n), a) ? {
        index: r,
        isProximityBased: !1
      } : {
        index: i,
        isProximityBased: !1
      };
    }
  for (var s = Number.MAX_VALUE, u = void 0, l = 0; l < t.length; l++) {
    var d = ql(n, t[l]);
    d < s && (s = d, u = l);
  }
  if (t.length > 0) {
    var c = t.length, h = t[c - 1], f = h.cloneNode(!1);
    f.style.visibility = "hidden", f.style.pointerEvents = "none", e.appendChild(f);
    var g = ql(n, f);
    g < s && (u = c), e.removeChild(f);
  }
  return {
    index: u,
    isProximityBased: !0
  };
}
function pa(n) {
  return JSON.stringify(n, null, 2);
}
function ms(n) {
  if (!n)
    throw new Error("cannot get depth of a falsy node");
  return Ad(n, 0);
}
function Ad(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return n.parentElement ? Ad(n.parentElement, e + 1) : e - 1;
}
function pm(n, e) {
  if (Object.keys(n).length !== Object.keys(e).length)
    return !1;
  for (var t in n)
    if (!{}.hasOwnProperty.call(e, t) || e[t] !== n[t])
      return !1;
  return !0;
}
function _m(n, e) {
  if (n.length !== e.length)
    return !1;
  for (var t = 0; t < n.length; t++)
    if (n[t] !== e[t])
      return !1;
  return !0;
}
var Im = 200, Wl = 10, So;
function bm(n, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Im, r = arguments.length > 3 ? arguments[3] : void 0, i, a, s = !1, u, l = Array.from(e).sort(function(c, h) {
    return ms(h) - ms(c);
  });
  function d() {
    var c = wa(n), h = r.multiScrollIfNeeded();
    if (!h && u && Math.abs(u.x - c.x) < Wl && Math.abs(u.y - c.y) < Wl) {
      So = window.setTimeout(d, t);
      return;
    }
    if (hm(n)) {
      lm(n);
      return;
    }
    u = c;
    var f = !1, g = Ha(l), v;
    try {
      for (g.s(); !(v = g.n()).done; ) {
        var p = v.value;
        h && Qo();
        var _ = mm(n, p);
        if (_ !== null) {
          var y = _.index;
          f = !0, p !== i ? (i && am(i, n, p), im(p, _, n), i = p) : y !== a && (om(p, _, n), a = y);
          break;
        }
      }
    } catch (w) {
      g.e(w);
    } finally {
      g.f();
    }
    !f && s && i ? (sm(i, n), i = void 0, a = void 0, s = !1) : s = !0, So = window.setTimeout(d, t);
  }
  d();
}
function ym() {
  clearTimeout(So), Qo();
}
var _a = 30;
function Cm() {
  var n;
  function e() {
    n = {
      directionObj: void 0,
      stepPx: 0
    };
  }
  e();
  function t(a) {
    var s = n, u = s.directionObj, l = s.stepPx;
    u && (a.scrollBy(u.x * l, u.y * l), window.requestAnimationFrame(function() {
      return t(a);
    }));
  }
  function r(a) {
    return _a - a;
  }
  function i(a, s) {
    if (!s)
      return !1;
    var u = Am(a, s), l = !!n.directionObj;
    if (u === null)
      return l && e(), !1;
    var d = !1, c = !1;
    return s.scrollHeight > s.clientHeight && (u.bottom < _a ? (d = !0, n.directionObj = {
      x: 0,
      y: 1
    }, n.stepPx = r(u.bottom)) : u.top < _a && (d = !0, n.directionObj = {
      x: 0,
      y: -1
    }, n.stepPx = r(u.top)), !l && d) || s.scrollWidth > s.clientWidth && (u.right < _a ? (c = !0, n.directionObj = {
      x: 1,
      y: 0
    }, n.stepPx = r(u.right)) : u.left < _a && (c = !0, n.directionObj = {
      x: -1,
      y: 0
    }, n.stepPx = r(u.left)), !l && c) ? (t(s), !0) : (e(), !1);
  }
  return {
    scrollIfNeeded: i,
    resetScrolling: e
  };
}
function Am(n, e) {
  var t = e === document.scrollingElement ? {
    top: 0,
    bottom: window.innerHeight,
    left: 0,
    right: window.innerWidth
  } : e.getBoundingClientRect();
  return Hs(n, t) ? {
    top: n.y - t.top,
    bottom: t.bottom - n.y,
    left: n.x - t.left,
    right: t.right - n.x
  } : null;
}
function Em() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e = arguments.length > 1 ? arguments[1] : void 0, t = xm(n), r = Array.from(t).sort(function(l, d) {
    return ms(d) - ms(l);
  }), i = Cm(), a = i.scrollIfNeeded, s = i.resetScrolling;
  function u() {
    var l = e();
    if (!l || !r)
      return !1;
    for (var d = r.filter(function(f) {
      return Hs(l, f.getBoundingClientRect()) || f === document.scrollingElement;
    }), c = 0; c < d.length; c++) {
      var h = a(l, d[c]);
      if (h)
        return !0;
    }
    return !1;
  }
  return {
    multiScrollIfNeeded: t.size > 0 ? u : function() {
      return !1;
    },
    destroy: function() {
      return s();
    }
  };
}
function Sm(n) {
  if (!n)
    return [];
  for (var e = [], t = n; t; ) {
    var r = window.getComputedStyle(t), i = r.overflow;
    i.split(" ").some(function(a) {
      return a.includes("auto") || a.includes("scroll");
    }) && e.push(t), t = t.parentElement;
  }
  return e;
}
function xm(n) {
  var e = /* @__PURE__ */ new Set(), t = Ha(n), r;
  try {
    for (t.s(); !(r = t.n()).done; ) {
      var i = r.value;
      Sm(i).forEach(function(a) {
        return e.add(a);
      });
    }
  } catch (a) {
    t.e(a);
  } finally {
    t.f();
  }
  return (document.scrollingElement.scrollHeight > document.scrollingElement.clientHeight || document.scrollingElement.scrollWidth > document.scrollingElement.clientHeight) && e.add(document.scrollingElement), e;
}
function wm(n) {
  var e = n.cloneNode(!0), t = [], r = n.tagName === "SELECT", i = r ? [n] : Dn(n.querySelectorAll("select")), a = Ha(i), s;
  try {
    for (a.s(); !(s = a.n()).done; ) {
      var u = s.value;
      t.push(u.value);
    }
  } catch (S) {
    a.e(S);
  } finally {
    a.f();
  }
  if (i.length > 0)
    for (var l = r ? [e] : Dn(e.querySelectorAll("select")), d = 0; d < l.length; d++) {
      var c = l[d], h = t[d], f = c.querySelector('option[value="'.concat(h, '"'));
      f && f.setAttribute("selected", !0);
    }
  var g = n.tagName === "CANVAS", v = g ? [n] : Dn(n.querySelectorAll("canvas"));
  if (v.length > 0)
    for (var p = g ? [e] : Dn(e.querySelectorAll("canvas")), _ = 0; _ < p.length; _++) {
      var y = v[_], w = p[_];
      w.width = y.width, w.height = y.height, y.width > 0 && y.height > 0 && w.getContext("2d").drawImage(y, 0, 0);
    }
  return e;
}
var Ta = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
}), Tm = na({}, Ta.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
function Ed(n) {
  if (!Ta[n]) throw new Error("Can't get non existing feature flag ".concat(n, "! Supported flags: ").concat(Object.keys(Ta)));
  return Tm[n];
}
var Dm = 0.2;
function ii(n) {
  return "".concat(n, " ").concat(Dm, "s ease");
}
function Lm(n, e) {
  var t = n.getBoundingClientRect(), r = wm(n);
  Sd(n, r), r.id = cm, r.style.position = "fixed";
  var i = t.top, a = t.left;
  if (r.style.top = "".concat(i, "px"), r.style.left = "".concat(a, "px"), e) {
    var s = Cd(t);
    i -= s.y - e.y, a -= s.x - e.x, window.setTimeout(function() {
      r.style.top = "".concat(i, "px"), r.style.left = "".concat(a, "px");
    }, 0);
  }
  return r.style.margin = "0", r.style.boxSizing = "border-box", r.style.height = "".concat(t.height, "px"), r.style.width = "".concat(t.width, "px"), r.style.transition = "".concat(ii("top"), ", ").concat(ii("left"), ", ").concat(ii("background-color"), ", ").concat(ii("opacity"), ", ").concat(ii("color"), " "), window.setTimeout(function() {
    return r.style.transition += ", ".concat(ii("width"), ", ").concat(ii("height"));
  }, 0), r.style.zIndex = "9999", r.style.cursor = "grabbing", r;
}
function Om(n) {
  n.style.cursor = "grab";
}
function Rm(n, e, t, r) {
  Sd(e, n);
  var i = e.getBoundingClientRect(), a = n.getBoundingClientRect(), s = i.width - a.width, u = i.height - a.height;
  if (s || u) {
    var l = {
      left: (t - a.left) / a.width,
      top: (r - a.top) / a.height
    };
    Ed(Ta.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT) || (n.style.height = "".concat(i.height, "px"), n.style.width = "".concat(i.width, "px")), n.style.left = "".concat(parseFloat(n.style.left) - l.left * s, "px"), n.style.top = "".concat(parseFloat(n.style.top) - l.top * u, "px");
  }
}
function Sd(n, e) {
  var t = window.getComputedStyle(n);
  Array.from(t).filter(function(r) {
    return r.startsWith("background") || r.startsWith("padding") || r.startsWith("font") || r.startsWith("text") || r.startsWith("align") || r.startsWith("justify") || r.startsWith("display") || r.startsWith("flex") || r.startsWith("border") || r === "opacity" || r === "color" || r === "list-style-type" || // copying with and height to make up for rect update timing issues in some browsers
    Ed(Ta.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT) && (r === "width" || r === "height");
  }).forEach(function(r) {
    return e.style.setProperty(r, t.getPropertyValue(r), t.getPropertyPriority(r));
  });
}
function Mm(n, e) {
  n.draggable = !1, n.ondragstart = function() {
    return !1;
  }, e ? (n.style.userSelect = "", n.style.WebkitUserSelect = "", n.style.cursor = "") : (n.style.userSelect = "none", n.style.WebkitUserSelect = "none", n.style.cursor = "grab");
}
function xd(n) {
  n.style.display = "none", n.style.position = "fixed", n.style.zIndex = "-5";
}
function Pm(n) {
  n.style.visibility = "hidden", n.setAttribute(Us, "true");
}
function km(n) {
  n.style.visibility = "", n.removeAttribute(Us);
}
function ss(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function() {
  }, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
    return [];
  };
  n.forEach(function(r) {
    var i = e(r);
    Object.keys(i).forEach(function(a) {
      r.style[a] = i[a];
    }), t(r).forEach(function(a) {
      return r.classList.add(a);
    });
  });
}
function ps(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function() {
  }, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
    return [];
  };
  n.forEach(function(r) {
    var i = e(r);
    Object.keys(i).forEach(function(a) {
      r.style[a] = "";
    }), t(r).forEach(function(a) {
      return r.classList.contains(a) && r.classList.remove(a);
    });
  });
}
function Fm(n) {
  var e = n.style.minHeight;
  n.style.minHeight = window.getComputedStyle(n).getPropertyValue("height");
  var t = n.style.minWidth;
  return n.style.minWidth = window.getComputedStyle(n).getPropertyValue("width"), function() {
    n.style.minHeight = e, n.style.minWidth = t;
  };
}
var Nm = "--any--", Um = 100, Hm = 20, Qa = 3, Bm = 80, jl = {
  outline: "rgba(255, 255, 102, 0.7) solid 2px"
}, Zl = "data-is-dnd-original-dragged-item", ln, xt, un, Bs, it, Gs, Gr, Pt, qn, zt, Dr = !1, $o = !1, el, Va = !1, os = [], Aa, Wn, ba = !1, Bn = /* @__PURE__ */ new Map(), gt = /* @__PURE__ */ new Map(), ro = /* @__PURE__ */ new WeakMap();
function Gm(n, e) {
  Bn.has(e) || Bn.set(e, /* @__PURE__ */ new Set()), Bn.get(e).has(n) || (Bn.get(e).add(n), _d());
}
function Xl(n, e) {
  Bn.get(e).delete(n), Id(), Bn.get(e).size === 0 && Bn.delete(e);
}
function Vm() {
  var n = Bn.get(Bs), e = Ha(n), t;
  try {
    for (e.s(); !(t = e.n()).done; ) {
      var r = t.value;
      r.addEventListener(Fs, wd), r.addEventListener(Ba, Td), r.addEventListener(Ns, Dd);
    }
  } catch (s) {
    e.e(s);
  } finally {
    e.f();
  }
  window.addEventListener(Yo, ia);
  var i = Math.max.apply(Math, Dn(Array.from(n.keys()).map(function(s) {
    return gt.get(s).dropAnimationDurationMs;
  }))), a = i === 0 ? Hm : Math.max(i, Um);
  Aa = Em(n, function() {
    return zt;
  }), bm(xt, n, a * 1.07, Aa);
}
function zm() {
  var n = Bn.get(Bs), e = Ha(n), t;
  try {
    for (e.s(); !(t = e.n()).done; ) {
      var r = t.value;
      r.removeEventListener(Fs, wd), r.removeEventListener(Ba, Td), r.removeEventListener(Ns, Dd);
    }
  } catch (i) {
    e.e(i);
  } finally {
    e.f();
  }
  window.removeEventListener(Yo, ia), Aa && (Aa.destroy(), Aa = void 0), ym();
}
function Vs(n) {
  return n.findIndex(function(e) {
    return !!e[Ga];
  });
}
function qm(n) {
  var e;
  return kr(kr({}, n), {}, (e = {}, na(e, Ga, !0), na(e, wt, dm), e));
}
function wd(n) {
  var e = gt.get(n.currentTarget), t = e.items, r = e.dropFromOthersDisabled;
  if (!(r && n.currentTarget !== it)) {
    if (Va = !1, t = t.filter(function(u) {
      return u[wt] !== Gr[wt];
    }), it !== n.currentTarget) {
      var i = gt.get(it).items, a = i.filter(function(u) {
        return !u[Ga];
      });
      zr(it, a, {
        trigger: Dt.DRAGGED_ENTERED_ANOTHER,
        id: un[wt],
        source: Zt.POINTER
      });
    }
    var s = n.detail.indexObj.index;
    Pt = n.currentTarget, t.splice(s, 0, Gr), zr(n.currentTarget, t, {
      trigger: Dt.DRAGGED_ENTERED,
      id: un[wt],
      source: Zt.POINTER
    });
  }
}
function Td(n) {
  if (Dr) {
    var e = gt.get(n.currentTarget), t = e.items, r = e.dropFromOthersDisabled;
    if (!(r && n.currentTarget !== it && n.currentTarget !== Pt)) {
      var i = Dn(t), a = Vs(i);
      a !== -1 && i.splice(a, 1);
      var s = Pt;
      Pt = void 0;
      var u = n.detail, l = u.type, d = u.theOtherDz;
      if (l === gs.OUTSIDE_OF_ANY || l === gs.LEFT_FOR_ANOTHER && d !== it && gt.get(d).dropFromOthersDisabled) {
        Va = !0, Pt = it;
        var c = s === it ? i : Dn(gt.get(it).items);
        c.splice(Gs, 0, Gr), zr(it, c, {
          trigger: Dt.DRAGGED_LEFT_ALL,
          id: un[wt],
          source: Zt.POINTER
        });
      }
      zr(n.currentTarget, i, {
        trigger: Dt.DRAGGED_LEFT,
        id: un[wt],
        source: Zt.POINTER
      });
    }
  }
}
function Dd(n) {
  var e = gt.get(n.currentTarget), t = e.items, r = e.dropFromOthersDisabled;
  if (!(r && n.currentTarget !== it)) {
    var i = Dn(t);
    Va = !1;
    var a = n.detail.indexObj.index, s = Vs(i);
    s !== -1 && i.splice(s, 1), i.splice(a, 0, Gr), zr(n.currentTarget, i, {
      trigger: Dt.DRAGGED_OVER_INDEX,
      id: un[wt],
      source: Zt.POINTER
    });
  }
}
function _s(n) {
  n.preventDefault();
  var e = n.touches ? n.touches[0] : n;
  zt = {
    x: e.clientX,
    y: e.clientY
  }, xt.style.transform = "translate3d(".concat(zt.x - qn.x, "px, ").concat(zt.y - qn.y, "px, 0)");
}
function ia() {
  $o = !0, window.removeEventListener("mousemove", _s), window.removeEventListener("touchmove", _s), window.removeEventListener("mouseup", ia), window.removeEventListener("touchend", ia), zm(), Om(xt), Pt || (Pt = it);
  var n = gt.get(Pt), e = n.items, t = n.type;
  ps(Bn.get(t), function(a) {
    return gt.get(a).dropTargetStyle;
  }, function(a) {
    return gt.get(a).dropTargetClasses;
  });
  var r = Vs(e);
  r === -1 && Pt === it && (r = Gs), e = e.map(function(a) {
    return a[Ga] ? un : a;
  });
  function i() {
    el(), ra(Pt, e, {
      trigger: Va ? Dt.DROPPED_OUTSIDE_OF_ANY : Dt.DROPPED_INTO_ZONE,
      id: un[wt],
      source: Zt.POINTER
    }), Pt !== it && ra(it, gt.get(it).items, {
      trigger: Dt.DROPPED_INTO_ANOTHER,
      id: un[wt],
      source: Zt.POINTER
    });
    var a = Array.from(Pt.children).find(function(s) {
      return s.getAttribute(Us);
    });
    a && km(a), Zm();
  }
  gt.get(Pt).dropAnimationDisabled ? i() : Wm(r, i);
}
function Wm(n, e) {
  var t = n > -1 ? Eo(Pt.children[n], !1) : Eo(Pt, !1), r = {
    x: t.left - parseFloat(xt.style.left),
    y: t.top - parseFloat(xt.style.top)
  }, i = gt.get(Pt), a = i.dropAnimationDurationMs, s = "transform ".concat(a, "ms ease");
  xt.style.transition = xt.style.transition ? xt.style.transition + "," + s : s, xt.style.transform = "translate3d(".concat(r.x, "px, ").concat(r.y, "px, 0)"), window.setTimeout(e, a);
}
function jm(n, e) {
  os.push({
    dz: n,
    destroy: e
  }), window.requestAnimationFrame(function() {
    xd(n), document.body.appendChild(n);
  });
}
function Zm() {
  xt && xt.remove && xt.remove(), ln && ln.remove && ln.remove(), xt = void 0, ln = void 0, un = void 0, Bs = void 0, it = void 0, Gs = void 0, Gr = void 0, Pt = void 0, qn = void 0, zt = void 0, Dr = !1, $o = !1, el = void 0, Va = !1, Wn && clearTimeout(Wn), Wn = void 0, ba = !1, os.length && (os.forEach(function(n) {
    var e = n.dz, t = n.destroy;
    t(), e.remove();
  }), os = []);
}
function Xm(n, e) {
  var t = !1, r = {
    items: void 0,
    type: void 0,
    flipDurationMs: 0,
    dragDisabled: !1,
    morphDisabled: !1,
    dropFromOthersDisabled: !1,
    dropTargetStyle: jl,
    dropTargetClasses: [],
    transformDraggedElement: function() {
    },
    centreDraggedOnCursor: !1,
    dropAnimationDisabled: !1,
    delayTouchStartMs: 0
  }, i = /* @__PURE__ */ new Map();
  function a() {
    window.addEventListener("mousemove", l, {
      passive: !1
    }), window.addEventListener("touchmove", l, {
      passive: !1,
      capture: !1
    }), window.addEventListener("mouseup", u, {
      passive: !1
    }), window.addEventListener("touchend", u, {
      passive: !1
    });
  }
  function s() {
    window.removeEventListener("mousemove", l), window.removeEventListener("touchmove", l), window.removeEventListener("mouseup", u), window.removeEventListener("touchend", u), Wn && (clearTimeout(Wn), Wn = void 0, ba = !1);
  }
  function u(f) {
    if (s(), ln = void 0, qn = void 0, zt = void 0, f.type === "touchend") {
      var g = new Event("click", {
        bubbles: !0,
        cancelable: !0
      });
      f.target.dispatchEvent(g);
    }
  }
  function l(f) {
    var g = !!f.touches, v = g ? f.touches[0] : f;
    if (g && r.delayTouchStartMs > 0 && !ba) {
      zt = {
        x: v.clientX,
        y: v.clientY
      }, (Math.abs(zt.x - qn.x) >= Qa || Math.abs(zt.y - qn.y) >= Qa) && (Wn && (clearTimeout(Wn), Wn = void 0), u(f));
      return;
    }
    f.preventDefault(), zt = {
      x: v.clientX,
      y: v.clientY
    }, (Math.abs(zt.x - qn.x) >= Qa || Math.abs(zt.y - qn.y) >= Qa) && (s(), c());
  }
  function d(f) {
    if (!(f.target !== f.currentTarget && (f.target.value !== void 0 || f.target.isContentEditable)) && !f.button && !Dr) {
      var g = !!f.touches, v = g && r.delayTouchStartMs > 0;
      v || f.preventDefault(), f.stopPropagation();
      var p = g ? f.touches[0] : f;
      qn = {
        x: p.clientX,
        y: p.clientY
      }, zt = kr({}, qn), ln = f.currentTarget, v && (ba = !1, Wn = window.setTimeout(function() {
        ln && (ba = !0, s(), c());
      }, r.delayTouchStartMs)), a();
    }
  }
  function c() {
    Dr = !0;
    var f = i.get(ln);
    Gs = f, it = ln.parentElement;
    var g = it.closest("dialog") || it.closest("[popover]") || it.getRootNode(), v = g.body || g, p = r.items, _ = r.type, y = r.centreDraggedOnCursor, w = Dn(p);
    un = w[f], Bs = _, Gr = qm(un), xt = Lm(ln, y && zt), v.appendChild(xt);
    function S() {
      ln.parentElement ? window.requestAnimationFrame(S) : (ln.setAttribute(Zl, !0), v.appendChild(ln), Vm(), xd(ln), Gr[wt] = un[wt], xt.focus());
    }
    window.requestAnimationFrame(S), ss(Array.from(Bn.get(r.type)).filter(function(A) {
      return A === it || !gt.get(A).dropFromOthersDisabled;
    }), function(A) {
      return gt.get(A).dropTargetStyle;
    }, function(A) {
      return gt.get(A).dropTargetClasses;
    }), w.splice(f, 1, Gr), el = Fm(it), zr(it, w, {
      trigger: Dt.DRAG_STARTED,
      id: un[wt],
      source: Zt.POINTER
    }), window.addEventListener("mousemove", _s, {
      passive: !1
    }), window.addEventListener("touchmove", _s, {
      passive: !1,
      capture: !1
    }), window.addEventListener("mouseup", ia, {
      passive: !1
    }), window.addEventListener("touchend", ia, {
      passive: !1
    });
  }
  function h(f) {
    var g = f.items, v = g === void 0 ? void 0 : g, p = f.flipDurationMs, _ = p === void 0 ? 0 : p, y = f.type, w = y === void 0 ? Nm : y, S = f.dragDisabled, A = S === void 0 ? !1 : S, T = f.morphDisabled, I = T === void 0 ? !1 : T, b = f.dropFromOthersDisabled, C = b === void 0 ? !1 : b, x = f.dropTargetStyle, D = x === void 0 ? jl : x, L = f.dropTargetClasses, O = L === void 0 ? [] : L, R = f.transformDraggedElement, re = R === void 0 ? function() {
    } : R, q = f.centreDraggedOnCursor, N = q === void 0 ? !1 : q, H = f.dropAnimationDisabled, J = H === void 0 ? !1 : H, ue = f.delayTouchStart, F = ue === void 0 ? !1 : ue;
    r.dropAnimationDurationMs = _;
    var $ = 0;
    F === !0 ? $ = Bm : typeof F == "number" && isFinite(F) && F >= 0 && ($ = F), r.delayTouchStartMs = $, r.type && w !== r.type && Xl(n, r.type), r.type = w, r.items = Dn(v), r.dragDisabled = A, r.morphDisabled = I, r.transformDraggedElement = re, r.centreDraggedOnCursor = N, r.dropAnimationDisabled = J, t && Dr && !$o && (!pm(D, r.dropTargetStyle) || !_m(O, r.dropTargetClasses)) && (ps([n], function() {
      return r.dropTargetStyle;
    }, function() {
      return O;
    }), ss([n], function() {
      return D;
    }, function() {
      return O;
    })), r.dropTargetStyle = D, r.dropTargetClasses = Dn(O);
    function se(W, k) {
      return gt.get(W) ? gt.get(W)[k] : r[k];
    }
    t && Dr && r.dropFromOthersDisabled !== C && (C ? ps([n], function(W) {
      return se(W, "dropTargetStyle");
    }, function(W) {
      return se(W, "dropTargetClasses");
    }) : ss([n], function(W) {
      return se(W, "dropTargetStyle");
    }, function(W) {
      return se(W, "dropTargetClasses");
    })), r.dropFromOthersDisabled = C, gt.set(n, r), Gm(n, w);
    for (var _e = Dr ? Vs(r.items) : -1, he = 0; he < n.children.length; he++) {
      var z = n.children[he];
      if (Mm(z, A), he === _e) {
        I || Rm(xt, z, zt.x, zt.y), r.transformDraggedElement(xt, un, he), Pm(z);
        continue;
      }
      z.removeEventListener("mousedown", ro.get(z)), z.removeEventListener("touchstart", ro.get(z)), A || (z.addEventListener("mousedown", d), z.addEventListener("touchstart", d), ro.set(z, d)), i.set(z, he), t || (t = !0);
    }
  }
  return h(e), {
    update: function(g) {
      h(g);
    },
    destroy: function() {
      function g() {
        Xl(n, gt.get(n).type), gt.delete(n);
      }
      Dr && !n.closest("[".concat(Zl, "]")) ? jm(n, g) : g();
    }
  };
}
var $a, xo = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
}, Ld = ($a = {}, na($a, xo.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), na($a, xo.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list"), $a), Km = "dnd-action-aria-alert", _t;
function wo() {
  _t || (_t = document.createElement("div"), function() {
    _t.id = Km, _t.style.position = "fixed", _t.style.bottom = "0", _t.style.left = "0", _t.style.zIndex = "-5", _t.style.opacity = "0", _t.style.height = "0", _t.style.width = "0", _t.setAttribute("role", "alert");
  }(), document.body.prepend(_t), Object.entries(Ld).forEach(function(n) {
    var e = Kg(n, 2), t = e[0], r = e[1];
    return document.body.prepend(Qm(t, r));
  }));
}
function Ym() {
  return Jo ? null : (document.readyState === "complete" ? wo() : window.addEventListener("DOMContentLoaded", wo), kr({}, xo));
}
function Jm() {
  Jo || !_t || (Object.keys(Ld).forEach(function(n) {
    var e;
    return (e = document.getElementById(n)) === null || e === void 0 ? void 0 : e.remove();
  }), _t.remove(), _t = void 0);
}
function Qm(n, e) {
  var t = document.createElement("div");
  return t.id = n, t.innerHTML = "<p>".concat(e, "</p>"), t.style.display = "none", t.style.position = "fixed", t.style.zIndex = "-5", t;
}
function Vi(n) {
  if (!Jo) {
    _t || wo(), _t.innerHTML = "";
    var e = document.createTextNode(n);
    _t.appendChild(e), _t.style.display = "none", _t.style.display = "inline";
  }
}
var $m = "--any--", Kl = {
  outline: "rgba(255, 255, 102, 0.7) solid 2px"
}, Tn = !1, To, Wt, mi = "", ai, Yn, Fr = "", Is = /* @__PURE__ */ new WeakSet(), Yl = /* @__PURE__ */ new WeakMap(), Jl = /* @__PURE__ */ new WeakMap(), Do = /* @__PURE__ */ new Map(), Rt = /* @__PURE__ */ new Map(), Un = /* @__PURE__ */ new Map(), bs;
function ep(n, e) {
  Un.size === 0 && (bs = Ym(), window.addEventListener("keydown", Od), window.addEventListener("click", Rd)), Un.has(e) || Un.set(e, /* @__PURE__ */ new Set()), Un.get(e).has(n) || (Un.get(e).add(n), _d());
}
function Ql(n, e) {
  Wt === n && Da(), Un.get(e).delete(n), Id(), Un.get(e).size === 0 && Un.delete(e), Un.size === 0 && (window.removeEventListener("keydown", Od), window.removeEventListener("click", Rd), bs = void 0, Jm());
}
function Od(n) {
  if (Tn)
    switch (n.key) {
      case "Escape": {
        Da();
        break;
      }
    }
}
function Rd() {
  Tn && (Is.has(document.activeElement) || Da());
}
function tp(n) {
  if (Tn) {
    var e = n.currentTarget;
    if (e !== Wt) {
      mi = e.getAttribute("aria-label") || "";
      var t = Rt.get(Wt), r = t.items, i = r.find(function(h) {
        return h[wt] === Yn;
      }), a = r.indexOf(i), s = r.splice(a, 1)[0], u = Rt.get(e), l = u.items, d = u.autoAriaDisabled;
      e.getBoundingClientRect().top < Wt.getBoundingClientRect().top || e.getBoundingClientRect().left < Wt.getBoundingClientRect().left ? (l.push(s), d || Vi("Moved item ".concat(Fr, " to the end of the list ").concat(mi))) : (l.unshift(s), d || Vi("Moved item ".concat(Fr, " to the beginning of the list ").concat(mi)));
      var c = Wt;
      ra(c, r, {
        trigger: Dt.DROPPED_INTO_ANOTHER,
        id: Yn,
        source: Zt.KEYBOARD
      }), ra(e, l, {
        trigger: Dt.DROPPED_INTO_ZONE,
        id: Yn,
        source: Zt.KEYBOARD
      }), Wt = e;
    }
  }
}
function Md() {
  Do.forEach(function(n, e) {
    var t = n.update;
    return t(Rt.get(e));
  });
}
function Da() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  Rt.get(Wt).autoAriaDisabled || Vi("Stopped dragging item ".concat(Fr)), Is.has(document.activeElement) && document.activeElement.blur(), n && zr(Wt, Rt.get(Wt).items, {
    trigger: Dt.DRAG_STOPPED,
    id: Yn,
    source: Zt.KEYBOARD
  }), ps(Un.get(To), function(e) {
    return Rt.get(e).dropTargetStyle;
  }, function(e) {
    return Rt.get(e).dropTargetClasses;
  }), ai = null, Yn = null, Fr = "", To = null, Wt = null, mi = "", Tn = !1, Md();
}
function np(n, e) {
  var t = {
    items: void 0,
    type: void 0,
    dragDisabled: !1,
    zoneTabIndex: 0,
    zoneItemTabIndex: 0,
    dropFromOthersDisabled: !1,
    dropTargetStyle: Kl,
    dropTargetClasses: [],
    autoAriaDisabled: !1
  };
  function r(c, h, f) {
    c.length <= 1 || c.splice(f, 1, c.splice(h, 1, c[f])[0]);
  }
  function i(c) {
    switch (c.key) {
      case "Enter":
      case " ": {
        if ((c.target.disabled !== void 0 || c.target.href || c.target.isContentEditable) && !Is.has(c.target))
          return;
        c.preventDefault(), c.stopPropagation(), Tn ? Da() : a(c);
        break;
      }
      case "ArrowDown":
      case "ArrowRight": {
        if (!Tn) return;
        c.preventDefault(), c.stopPropagation();
        var h = Rt.get(n), f = h.items, g = Array.from(n.children), v = g.indexOf(c.currentTarget);
        v < g.length - 1 && (t.autoAriaDisabled || Vi("Moved item ".concat(Fr, " to position ").concat(v + 2, " in the list ").concat(mi)), r(f, v, v + 1), ra(n, f, {
          trigger: Dt.DROPPED_INTO_ZONE,
          id: Yn,
          source: Zt.KEYBOARD
        }));
        break;
      }
      case "ArrowUp":
      case "ArrowLeft": {
        if (!Tn) return;
        c.preventDefault(), c.stopPropagation();
        var p = Rt.get(n), _ = p.items, y = Array.from(n.children), w = y.indexOf(c.currentTarget);
        w > 0 && (t.autoAriaDisabled || Vi("Moved item ".concat(Fr, " to position ").concat(w, " in the list ").concat(mi)), r(_, w, w - 1), ra(n, _, {
          trigger: Dt.DROPPED_INTO_ZONE,
          id: Yn,
          source: Zt.KEYBOARD
        }));
        break;
      }
    }
  }
  function a(c) {
    u(c.currentTarget), Wt = n, To = t.type, Tn = !0;
    var h = Array.from(Un.get(t.type)).filter(function(g) {
      return g === Wt || !Rt.get(g).dropFromOthersDisabled;
    });
    if (ss(h, function(g) {
      return Rt.get(g).dropTargetStyle;
    }, function(g) {
      return Rt.get(g).dropTargetClasses;
    }), !t.autoAriaDisabled) {
      var f = "Started dragging item ".concat(Fr, ". Use the arrow keys to move it within its list ").concat(mi);
      h.length > 1 && (f += ", or tab to another list in order to move the item into it"), Vi(f);
    }
    zr(n, Rt.get(n).items, {
      trigger: Dt.DRAG_STARTED,
      id: Yn,
      source: Zt.KEYBOARD
    }), Md();
  }
  function s(c) {
    Tn && c.currentTarget !== ai && (c.stopPropagation(), Da(!1), a(c));
  }
  function u(c) {
    var h = Rt.get(n), f = h.items, g = Array.from(n.children), v = g.indexOf(c);
    ai = c, ai.tabIndex = t.zoneItemTabIndex, Yn = f[v][wt], Fr = g[v].getAttribute("aria-label") || "";
  }
  function l(c) {
    var h = c.items, f = h === void 0 ? [] : h, g = c.type, v = g === void 0 ? $m : g, p = c.dragDisabled, _ = p === void 0 ? !1 : p, y = c.zoneTabIndex, w = y === void 0 ? 0 : y, S = c.zoneItemTabIndex, A = S === void 0 ? 0 : S, T = c.dropFromOthersDisabled, I = T === void 0 ? !1 : T, b = c.dropTargetStyle, C = b === void 0 ? Kl : b, x = c.dropTargetClasses, D = x === void 0 ? [] : x, L = c.autoAriaDisabled, O = L === void 0 ? !1 : L;
    t.items = Dn(f), t.dragDisabled = _, t.dropFromOthersDisabled = I, t.zoneTabIndex = w, t.zoneItemTabIndex = A, t.dropTargetStyle = C, t.dropTargetClasses = D, t.autoAriaDisabled = O, t.type && v !== t.type && Ql(n, t.type), t.type = v, ep(n, v), O || (n.setAttribute("aria-disabled", _), n.setAttribute("role", "list"), n.setAttribute("aria-describedby", _ ? bs.DND_ZONE_DRAG_DISABLED : bs.DND_ZONE_ACTIVE)), Rt.set(n, t), Tn ? n.tabIndex = n === Wt || ai.contains(n) || t.dropFromOthersDisabled || Wt && t.type !== Rt.get(Wt).type ? -1 : 0 : n.tabIndex = t.zoneTabIndex, n.addEventListener("focus", tp);
    for (var R = function(N) {
      var H = n.children[N];
      Is.add(H), H.tabIndex = Tn ? -1 : t.zoneItemTabIndex, O || H.setAttribute("role", "listitem"), H.removeEventListener("keydown", Yl.get(H)), H.removeEventListener("click", Jl.get(H)), _ || (H.addEventListener("keydown", i), Yl.set(H, i), H.addEventListener("click", s), Jl.set(H, s)), Tn && t.items[N][wt] === Yn && (ai = H, ai.tabIndex = t.zoneItemTabIndex, H.focus());
    }, re = 0; re < n.children.length; re++)
      R(re);
  }
  l(e);
  var d = {
    update: function(h) {
      l(h);
    },
    destroy: function() {
      Ql(n, t.type), Rt.delete(n), Do.delete(n);
    }
  };
  return Do.set(n, d), d;
}
var rp = ["items", "flipDurationMs", "type", "dragDisabled", "morphDisabled", "dropFromOthersDisabled", "zoneTabIndex", "zoneItemTabIndex", "dropTargetStyle", "dropTargetClasses", "transformDraggedElement", "autoAriaDisabled", "centreDraggedOnCursor", "delayTouchStart", "dropAnimationDisabled"];
function ip(n, e) {
  if (ap(n))
    return {
      update: function() {
      },
      destroy: function() {
      }
    };
  $l(e);
  var t = Xm(n, e), r = np(n, e);
  return {
    update: function(a) {
      $l(a), t.update(a), r.update(a);
    },
    destroy: function() {
      t.destroy(), r.destroy();
    }
  };
}
function ap(n) {
  return !!n.closest("[".concat(um, '="true"]'));
}
function $l(n) {
  var e = n.items;
  n.flipDurationMs, n.type, n.dragDisabled, n.morphDisabled, n.dropFromOthersDisabled;
  var t = n.zoneTabIndex, r = n.zoneItemTabIndex;
  n.dropTargetStyle;
  var i = n.dropTargetClasses;
  n.transformDraggedElement, n.autoAriaDisabled, n.centreDraggedOnCursor;
  var a = n.delayTouchStart;
  n.dropAnimationDisabled;
  var s = Xg(n, rp);
  if (Object.keys(s).length > 0 && console.warn("dndzone will ignore unknown options", s), !e)
    throw new Error("no 'items' key provided to dndzone");
  var u = e.find(function(c) {
    return !{}.hasOwnProperty.call(c, wt);
  });
  if (u)
    throw new Error("missing '".concat(wt, "' property for item ").concat(pa(u)));
  if (i && !Array.isArray(i))
    throw new Error("dropTargetClasses should be an array but instead it is a ".concat(Ni(i), ", ").concat(pa(i)));
  if (t && !eu(t))
    throw new Error("zoneTabIndex should be a number but instead it is a ".concat(Ni(t), ", ").concat(pa(t)));
  if (r && !eu(r))
    throw new Error("zoneItemTabIndex should be a number but instead it is a ".concat(Ni(r), ", ").concat(pa(r)));
  if (a !== void 0 && a !== !1) {
    var l = a === !0, d = typeof a == "number" && isFinite(a) && a >= 0;
    if (!l && !d)
      throw new Error("delayTouchStart should be a boolean (true/false) or a non-negative number but instead it is a ".concat(Ni(a), ", ").concat(pa(a)));
  }
}
function eu(n) {
  return !isNaN(n) && function(e) {
    return (e | 0) === e;
  }(parseFloat(n));
}
function Pd(n) {
  var e = n, t = /* @__PURE__ */ new Set();
  return {
    get: function() {
      return e;
    },
    set: function(i) {
      e = i, Array.from(t).forEach(function(a) {
        return a(e);
      });
    },
    subscribe: function(i) {
      t.add(i), i(e);
    },
    unsubscribe: function(i) {
      t.delete(i);
    }
  };
}
var Fn = Pd(!0), zi = Pd(!1);
function tu() {
  return {
    dragDisabled: zi.get() || Fn.get(),
    zoneItemTabIndex: -1
  };
}
function gr(n, e) {
  var t;
  zi.set((t = e == null ? void 0 : e.dragDisabled) !== null && t !== void 0 ? t : !1);
  var r = e, i = ip(n, kr(kr({}, r), tu()));
  function a() {
    i.update(kr(kr({}, r), tu()));
  }
  Fn.subscribe(a);
  function s(l) {
    var d = l.detail.info, c = d.source, h = d.trigger;
    c === Zt.KEYBOARD && h === Dt.DRAG_STOPPED && Fn.set(!0);
  }
  function u(l) {
    var d = l.detail.info.source;
    d === Zt.POINTER && Fn.set(!0);
  }
  return n.addEventListener("consider", s), n.addEventListener("finalize", u), {
    update: function(d) {
      var c, h;
      r = d, zi.set((c = (h = r) === null || h === void 0 ? void 0 : h.dragDisabled) !== null && c !== void 0 ? c : !1), a();
    },
    destroy: function() {
      n.removeEventListener("consider", s), n.removeEventListener("finalize", u), Fn.unsubscribe(a);
    }
  };
}
function mr(n) {
  n.setAttribute("role", "button");
  function e(a) {
    a.preventDefault(), Fn.set(!1), window.addEventListener("mouseup", r), window.addEventListener("touchend", r);
  }
  function t(a) {
    (a.key === "Enter" || a.key === " ") && Fn.set(!1);
  }
  function r() {
    Fn.set(!0), window.removeEventListener("mouseup", r), window.removeEventListener("touchend", r);
  }
  var i = function() {
    var s = zi.get(), u = Fn.get();
    s ? (n.tabIndex = -1, n.style.cursor = "") : (n.tabIndex = u ? 0 : -1, n.style.cursor = u ? "grab" : "grabbing");
  };
  return zi.subscribe(i), Fn.subscribe(i), n.addEventListener("mousedown", e), n.addEventListener("touchstart", e), n.addEventListener("keydown", t), {
    update: function() {
    },
    destroy: function() {
      n.removeEventListener("mousedown", e), n.removeEventListener("touchstart", e), n.removeEventListener("keydown", t), zi.unsubscribe(i), Fn.unsubscribe(i);
    }
  };
}
function sp(n) {
  const e = n - 1;
  return e * e * e + 1;
}
function tl(n, { from: e, to: t }, r = {}) {
  var { delay: i = 0, duration: a = (I) => Math.sqrt(I) * 120, easing: s = sp } = r, u = getComputedStyle(n), l = u.transform === "none" ? "" : u.transform, [d, c] = u.transformOrigin.split(" ").map(parseFloat);
  d /= n.clientWidth, c /= n.clientHeight;
  var h = op(n), f = n.clientWidth / t.width / h, g = n.clientHeight / t.height / h, v = e.left + e.width * d, p = e.top + e.height * c, _ = t.left + t.width * d, y = t.top + t.height * c, w = (v - _) * f, S = (p - y) * g, A = e.width / t.width, T = e.height / t.height;
  return {
    delay: i,
    duration: typeof a == "function" ? a(Math.sqrt(w * w + S * S)) : a,
    easing: s,
    css: (I, b) => {
      var C = b * w, x = b * S, D = I + b * A, L = I + b * T;
      return `transform: ${l} translate(${C}px, ${x}px) scale(${D}, ${L});`;
    }
  };
}
function op(n) {
  if ("currentCSSZoom" in n)
    return (
      /** @type {number} */
      n.currentCSSZoom
    );
  for (var e = n, t = 1; e !== null; )
    t *= +getComputedStyle(e).zoom, e = /** @type {Element | null} */
    e.parentElement;
  return t;
}
const lp = er([]);
lp.subscribe;
ct([
  "click",
  "keydown",
  "pointerdown",
  "pointerup",
  "pointermove"
]);
var up = /* @__PURE__ */ Z("<div><!></div>");
function kd(n, e) {
  let t = m(e, "variant", 3, "secondary");
  var r = up(), i = V(r);
  Ie(i, () => e.children ?? pe), ce(() => Ir(r, 1, `osc-card osc-card--${t()}`, "svelte-14hhvrx")), E(n, r);
}
var dp = /* @__PURE__ */ Z('<div class="panel-parent__header svelte-1rw2lbw"><!></div>'), cp = /* @__PURE__ */ Z('<div class="panel-parent__body svelte-1rw2lbw"><!></div>'), fp = /* @__PURE__ */ Z('<div class="panel-parent__footer svelte-1rw2lbw"><!></div>'), hp = /* @__PURE__ */ Z('<div class="panel-parent svelte-1rw2lbw"><!> <!> <!></div>');
function Fd(n, e) {
  let t = m(e, "backgroundColor", 3, "");
  var r = hp(), i = V(r);
  {
    var a = (c) => {
      var h = dp(), f = V(h);
      Ie(f, () => e.header), E(c, h);
    };
    ee(i, (c) => {
      e.header && c(a);
    });
  }
  var s = Y(i, 2);
  {
    var u = (c) => {
      var h = cp(), f = V(h);
      Ie(f, () => e.content), E(c, h);
    };
    ee(s, (c) => {
      e.content && c(u);
    });
  }
  var l = Y(s, 2);
  {
    var d = (c) => {
      var h = fp(), f = V(h);
      Ie(f, () => e.additional), E(c, h);
    };
    ee(l, (c) => {
      e.additional && c(d);
    });
  }
  ce(() => Ke(r, `--bg-color: ${t() ?? ""}`)), E(n, r);
}
ct(["click"]);
const vp = 4e3;
function gp() {
  let n = Ce({ items: [] }), e = 0;
  const t = (i) => {
    n.items = n.items.filter((a) => a.id !== i);
  }, r = (i, a, s, u = vp) => {
    const l = e++, d = { id: l, summary: a, detail: s, type: i };
    return n.items = [...n.items, d], setTimeout(
      () => {
        t(l);
      },
      u
    ), l;
  };
  return {
    /** readonly state for UI host */
    get toasts() {
      return n;
    },
    success: (i, a, s) => r("success", i, a, s),
    error: (i, a, s) => r("error", i, a, s),
    info: (i, a, s) => r("info", i, a, s),
    warn: (i, a, s) => r("warn", i, a, s),
    remove: t
  };
}
gp();
ct(["click"]);
ct(["click"]);
ct(["click"]);
ct(["input"]);
const mp = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHByb2Nlc3Nlcz4KICA8cHJvY2Vzcz4KICAgIDxpZD5zdGFuZGFyZC1wcm9jZXNzLTE8L2lkPgogICAgPHZlcnNpb24+MC4wLjE8L3ZlcnNpb24+CiAgICA8bmFtZT5TdGFuZGFyZCBQcm9jZXNzIDE8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+CiAgICAgIFRoaXMgaXMgYSBzdGFuZGFyZGl6ZWQgcHJvY2VzcyB1c2VkIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHkKICAgIDwvZGVzY3JpcHRpb24+CgogICAgPHBsdWdpbnMtc2VxdWVuY2U+CiAgICAgIDxncm91cD4KICAgICAgICA8dGl0bGU+VHlwZXM8L3RpdGxlPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+dGVtcGxhdGUtZ2VuZXJhdG9yLXh5ejwvaWQ+CiAgICAgICAgICA8bmFtZT5UZW1wbGF0ZSBHZW5lcmF0b3I8L25hbWU+CiAgICAgICAgICA8c3JjIHR5cGU9ImV4dGVybmFsIj4KICAgICAgICAgICAgaHR0cHM6Ly9hc2UtY29tcGFzLmdpdGh1Yi5pby9jb21wYXMtdHJhbnNuZXRidy1wbHVnaW5zL2JlYXJpbmdwb2ludC9jb21wYXMvcGx1Z2lucy90ZW1wbGF0ZS1nZW5lcmF0b3IvaW5kZXguanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+dHlwZS1kZXNpZ25lci14eXo8L2lkPgogICAgICAgICAgPG5hbWU+VHlwZSBEZXNpZ25lcjwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iZXh0ZXJuYWwiPgogICAgICAgICAgICBodHRwczovL3NwcmludGVpbnMuZ2l0aHViLmlvL29zY2QtcGx1Z2lucy90eXBlLWRlc2lnbmVyL2luZGV4LmpzCiAgICAgICAgICA8L3NyYz4KICAgICAgICA8L3BsdWdpbj4KCiAgICAgICAgPHBsdWdpbj4KICAgICAgICAgIDxpZD50eXBlLWRpc3RyaWJ1dG9yLXh5ejwvaWQ+CiAgICAgICAgICA8bmFtZT5UeXBlIERpc3RyaWJ1dG9yPC9uYW1lPgogICAgICAgICAgPHNyYyB0eXBlPSJleHRlcm5hbCI+CiAgICAgICAgICAgIGh0dHBzOi8vYXNlLWNvbXBhcy5naXRodWIuaW8vY29tcGFzLXRyYW5zbmV0YnctcGx1Z2lucy9iZWFyaW5ncG9pbnQvY29tcGFzL3BsdWdpbnMvdHlwZS1kaXN0cmlidXRvci9pbmRleC5qcwogICAgICAgICAgPC9zcmM+CiAgICAgICAgPC9wbHVnaW4+CiAgICAgIDwvZ3JvdXA+CgogICAgICA8Z3JvdXA+CiAgICAgICAgPHRpdGxlPkNvbmZpZ3VyYXRpb248L3RpdGxlPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+Y29tbXVuaWNhdGlvbi14eXo8L2lkPgogICAgICAgICAgPG5hbWU+Q29tbXVuaWNhdGlvbjwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iaW50ZXJuYWwiPgogICAgICAgICAgICAvcGx1Z2lucy9zcmMvZWRpdG9ycy9Db21tdW5pY2F0aW9uLmpzCiAgICAgICAgICA8L3NyYz4KICAgICAgICA8L3BsdWdpbj4KCiAgICAgICAgPHBsdWdpbj4KICAgICAgICAgIDxpZD5zdWJzdGF0aW9uLXh5ejwvaWQ+CiAgICAgICAgICA8bmFtZT5TdWJzdGF0aW9uPC9uYW1lPgogICAgICAgICAgPHNyYyB0eXBlPSJpbnRlcm5hbCI+CiAgICAgICAgICAgIC9wbHVnaW5zL3NyYy9lZGl0b3JzL1N1YnN0YXRpb24uanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+cHVibGlzaGVyLXh5ejwvaWQ+CiAgICAgICAgICA8bmFtZT5QdWJsaXNoZXI8L25hbWU+CiAgICAgICAgICA8c3JjIHR5cGU9ImludGVybmFsIj4KICAgICAgICAgICAgL2V4dGVybmFsLXBsdWdpbnMvb3NjZC1wdWJsaXNoZXIvb3NjZC1wdWJsaXNoZXIuanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+c3Vic2NyaWJlLWxhdGVyLWJpbmRpbmcteHl6PC9pZD4KICAgICAgICAgIDxuYW1lPlN1YnNjcmliZTwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iaW50ZXJuYWwiPgogICAgICAgICAgICAvZXh0ZXJuYWwtcGx1Z2lucy9vc2NkLXN1YnNjcmliZXItbGF0ZXItYmluZGluZy9vc2NkLXN1YnNjcmliZXItbGF0ZXItYmluZGluZy5qcwogICAgICAgICAgPC9zcmM+CiAgICAgICAgPC9wbHVnaW4+CiAgICAgIDwvZ3JvdXA+CgogICAgICA8Z3JvdXA+CiAgICAgICAgPHRpdGxlPkRvY3VtZW50YXRpb248L3RpdGxlPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+YXV0b2RvYy14eXo8L2lkPgogICAgICAgICAgPG5hbWU+QXV0b0RvYzwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iZXh0ZXJuYWwiPgogICAgICAgICAgICBodHRwczovL3NwcmludGVpbnMuZ2l0aHViLmlvL29zY2QtcGx1Z2lucy9hdXRvLWRvYy9pbmRleC5qcwogICAgICAgICAgPC9zcmM+CiAgICAgICAgPC9wbHVnaW4+CgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+bG9jYXRpb24tbWFuYWdlci14eXo8L2lkPgogICAgICAgICAgPG5hbWU+TG9jYXRpb24gTWFuYWdlcjwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iZXh0ZXJuYWwiPgogICAgICAgICAgICBodHRwczovL2FzZS1jb21wYXMuZ2l0aHViLmlvL2NvbXBhcy10cmFuc25ldGJ3LXBsdWdpbnMvYmVhcmluZ3BvaW50L2NvbXBhcy9wbHVnaW5zL2xvY2F0aW9uLW1hbmFnZXIvaW5kZXguanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgoKICAgICAgICA8cGx1Z2luPgogICAgICAgICAgPGlkPmhpc3Rvcnktdmlld2VyLXh5ejwvaWQ+CiAgICAgICAgICA8bmFtZT5IaXN0b3J5IFZpZXdlcjwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iZXh0ZXJuYWwiPgogICAgICAgICAgICBodHRwczovL2FzZS1jb21wYXMuZ2l0aHViLmlvL2NvbXBhcy10cmFuc25ldGJ3LXBsdWdpbnMvYmVhcmluZ3BvaW50L2NvbXBhcy9wbHVnaW5zL2hpc3Rvcnktdmlld2VyL2luZGV4LmpzCiAgICAgICAgICA8L3NyYz4KICAgICAgICA8L3BsdWdpbj4KICAgICAgPC9ncm91cD4KICAgIDwvcGx1Z2lucy1zZXF1ZW5jZT4KICA8L3Byb2Nlc3M+CjwvcHJvY2Vzc2VzPgo=", pp = mp, Nd = "engineeringWizardProcesses", _p = "external", tn = Ce({ processes: [] }), Ui = Ce({ loading: !1, error: "" }), dt = Ce({ process: null }), gn = Ce({ isEditing: !1 }), qr = Ce({ process: null, lastSelectedPluginId: null }), nl = Ce({ plugins: [] });
function Ip() {
  if (typeof localStorage > "u") return;
  const n = localStorage.getItem(Nd);
  if (n)
    try {
      const e = JSON.parse(n);
      Array.isArray(e) && (tn.processes = e);
    } catch {
    }
}
function bp() {
  tn.processes.forEach((e) => {
    var t;
    (t = e.pluginGroups) == null || t.forEach((r) => {
      var i;
      return (i = r.plugins) == null ? void 0 : i.length;
    });
  });
  const n = xs(tn.processes);
  if (!(typeof localStorage > "u"))
    try {
      localStorage.setItem(Nd, JSON.stringify(n));
    } catch {
    }
}
Ip();
Du(() => {
  Se(() => {
    console.log("[processes] persistence module loaded"), bp();
  });
});
function yp(n, e, t) {
  o(e) && t.handleStart(o(e));
}
var Cp = /* @__PURE__ */ Z('<div class="process-banner svelte-au6aaq"><div class="process-banner__info svelte-au6aaq"><!> <span class="svelte-au6aaq"> </span></div> <button type="button" class="banner-continue svelte-au6aaq">CONTINUE</button></div>'), Ap = (n, e, t) => e.handleView(t()), Ep = (n, e, t) => e.handleStart(t()), Sp = /* @__PURE__ */ Z('<button type="button" class="icon svelte-au6aaq" aria-label="Start process"><!></button>'), xp = (n, e, t) => e.handleStart(t()), wp = /* @__PURE__ */ Z('<button type="button" class="icon svelte-au6aaq" aria-label="Start process"><!></button>'), Tp = /* @__PURE__ */ Z('<button type="button" class="icon svelte-au6aaq" aria-label="View process"><!></button> <!>', 1), Dp = /* @__PURE__ */ Z('<div class="processes svelte-au6aaq"><!> <div class="process-toolbar svelte-au6aaq"><!> <!></div> <!></div>');
function Lp(n, e) {
  Ae(e, !0);
  let t = /* @__PURE__ */ le("");
  const r = /* @__PURE__ */ te(() => tn.processes ?? []), i = /* @__PURE__ */ te(() => o(r).map((b) => ({ ...b, displayName: b.name || b.id }))), a = /* @__PURE__ */ te(() => o(t).trim().toLowerCase()), s = /* @__PURE__ */ te(() => o(a) ? o(i).filter((b) => b.displayName.toLowerCase().includes(o(a))) : o(i)), u = [
    { key: "displayName", header: "Name", bold: !0 },
    { key: "description", header: "Description" }
  ], l = /* @__PURE__ */ te(() => qr.process), d = /* @__PURE__ */ te(() => {
    var b, C;
    return ((b = o(l)) == null ? void 0 : b.name) || ((C = o(l)) == null ? void 0 : C.id) || "";
  }), c = /* @__PURE__ */ te(() => qr.lastSelectedPluginId);
  function h(b, C) {
    var x;
    if (!C) return "";
    for (const D of (b == null ? void 0 : b.pluginGroups) ?? []) {
      const L = (x = D.plugins) == null ? void 0 : x.find((O) => O.id === C);
      if (L) return L.name || L.id;
    }
    return "";
  }
  const f = /* @__PURE__ */ te(() => h(o(l), o(c)));
  function g() {
    const b = `A process “${o(d)}” has already been started`, C = [
      e.docName ? ` for the ${e.docName}` : "",
      o(f) ? ` at “${o(f)}”` : ""
    ];
    return `${b}${C.join("")}. Would you like to continue where you left off?`;
  }
  const v = /* @__PURE__ */ te(g);
  function p(b) {
    return !!o(l) && (b == null ? void 0 : b.id) === o(l).id;
  }
  var _ = Dp(), y = V(_);
  {
    var w = (b) => {
      var C = Cp(), x = V(C), D = V(x);
      Zv(D, {});
      var L = Y(D, 2), O = V(L), R = Y(x, 2);
      R.__click = [yp, l, e], ce(() => Me(O, o(v))), E(b, C);
    };
    ee(y, (b) => {
      o(l) && b(w);
    });
  }
  var S = Y(y, 2), A = V(S);
  Pr(A, {
    variant: "outlined",
    label: "Search Processes",
    get value() {
      return o(t);
    },
    set value(b) {
      G(t, b, !0);
    }
  });
  var T = Y(A, 2);
  tr(T, {
    variant: "raised",
    style: "--mdc-theme-primary: var(--brand); --mdc-theme-on-primary: var(--on-brand)",
    get onclick() {
      return e.handleAddNew;
    },
    "aria-label": "Start process",
    children: (b, C) => {
      var x = at("ADD NEW PROCESS");
      E(b, x);
    },
    $$slots: { default: !0 }
  });
  var I = Y(S, 2);
  Ng(I, {
    get items() {
      return o(s);
    },
    get columns() {
      return u;
    },
    get loading() {
      return Ui.loading;
    },
    get errorMsg() {
      return Ui.error;
    },
    emptyText: "No processes available.",
    hasActions: !0,
    headerBg: "#DAE3E6",
    rowBg: "#ffffff",
    actions: (C, x) => {
      let D = () => x == null ? void 0 : x().item;
      var L = Tp(), O = K(L);
      O.__click = [Ap, e, D];
      var R = V(O);
      fd(R, { svgStyles: "fill: #002B37; width: 100%; height: 100%;" });
      var re = Y(O, 2);
      {
        var q = (H) => {
          var J = Sp();
          J.__click = [Ep, e, D];
          var ue = V(J);
          Hl(ue, { svgStyles: "fill: #002B37; width: 100%; height: 100%;" }), E(H, J);
        }, N = (H) => {
          var J = wp();
          J.__click = [xp, e, D];
          var ue = V(J);
          Hl(ue, { svgStyles: "fill: #002B37; width: 100%; height: 100%;" }), E(H, J);
        };
        ee(re, (H) => {
          p(D()) ? H(q) : H(N, !1);
        });
      }
      E(C, L);
    },
    $$slots: { actions: !0 }
  }), E(n, _), Ee();
}
ct(["click"]);
var Op = /* @__PURE__ */ Z("<div><!></div>");
function rl(n, e) {
  const t = m(e, "active", 3, !1), r = m(e, "visited", 3, !1);
  var i = Op(), a = V(i);
  {
    var s = (l) => {
      var d = oe(), c = K(d);
      {
        var h = (g) => {
          hd(g);
        }, f = (g) => {
          var v = oe(), p = K(v);
          {
            var _ = (w) => {
              Vv(w);
            }, y = (w) => {
              var S = oe(), A = K(S);
              {
                var T = (I) => {
                  qv(I, {});
                };
                ee(
                  A,
                  (I) => {
                    e.status === "warning" && I(T);
                  },
                  !0
                );
              }
              E(w, S);
            };
            ee(
              p,
              (w) => {
                e.status === "error" ? w(_) : w(y, !1);
              },
              !0
            );
          }
          E(g, v);
        };
        ee(c, (g) => {
          e.status === "check" ? g(h) : g(f, !1);
        });
      }
      E(l, d);
    }, u = (l) => {
      var d = at();
      ce(() => Me(d, e.number)), E(l, d);
    };
    ee(a, (l) => {
      r() && e.status ? l(s) : l(u, !1);
    });
  }
  ce(() => Ir(i, 1, `step-circle ${t() ? "active" : ""} ${r() ? "visited" : ""}`, "svelte-1as5ana")), E(n, i);
}
var Rp = (n, e, t) => e.onSelect(o(t).id), Mp = /* @__PURE__ */ Z('<button class="step-button svelte-de8jn9"><!></button>'), Pp = /* @__PURE__ */ Z('<div class="step-line svelte-de8jn9" aria-hidden="true"></div>'), kp = /* @__PURE__ */ Z('<div class="step svelte-de8jn9"><!> <p> </p></div> <!>', 1), Fp = /* @__PURE__ */ Z('<div class="steps svelte-de8jn9"></div>');
function Np(n, e) {
  Ae(e, !0);
  let t = m(e, "items", 19, () => []), r = m(e, "visited", 19, () => []), i = m(e, "currentId", 3, null), a = m(e, "status", 19, () => ({})), s = m(e, "tooltipMap", 19, () => ({}));
  var u = Fp();
  mn(u, 21, t, _r, (l, d, c) => {
    var h = kp(), f = K(h), g = V(f);
    {
      let w = /* @__PURE__ */ te(() => s()[o(d).id] ?? "");
      md(g, {
        get content() {
          return o(w);
        },
        side: "bottom",
        children: (S, A) => {
          var T = Mp();
          T.__click = [Rp, e, d];
          var I = V(T);
          {
            let b = /* @__PURE__ */ te(() => o(d).id === i()), C = /* @__PURE__ */ te(() => r().includes(o(d).id) && o(d).id !== i());
            rl(I, {
              number: c + 1,
              get active() {
                return o(b);
              },
              get visited() {
                return o(C);
              },
              get status() {
                return a()[o(d).id];
              }
            });
          }
          ce(() => bt(T, "aria-current", o(d).id === i() ? "step" : void 0)), E(S, T);
        },
        $$slots: { default: !0 }
      });
    }
    var v = Y(g, 2), p = V(v), _ = Y(f, 2);
    {
      var y = (w) => {
        var S = Pp();
        E(w, S);
      };
      ee(_, (w) => {
        c < t().length - 1 && w(y);
      });
    }
    ce(() => Me(p, o(d).label)), E(l, h);
  }), E(n, u), Ee();
}
ct(["click"]);
function Up(n, e) {
  const t = [
    { id: "process-definition", label: "Process Definition" },
    {
      id: "validator-configuration",
      label: "Validator Configuration"
    }
  ];
  let r = m(e, "currentId", 3, null), i = m(e, "visited", 19, () => []);
  Np(n, {
    get items() {
      return t;
    },
    get visited() {
      return i();
    },
    get currentId() {
      return r();
    },
    status: {},
    tooltipMap: {},
    get onSelect() {
      return e.onSelect;
    }
  });
}
var Hp = /* @__PURE__ */ Z('<div class="add-group-form svelte-dyj28k"><!> <!></div>');
function Bp(n, e) {
  Ae(e, !0);
  let t = m(e, "open", 15, !1), r = /* @__PURE__ */ le(""), i = /* @__PURE__ */ le(Ce((e.groups + 1).toString()));
  const a = () => Br("cancel"), s = () => Br("confirm", { name: o(r), position: Number(o(i)) });
  let u = /* @__PURE__ */ te(() => [
    ...Array.from({ length: e.groups + 1 }, (d, c) => ({ value: (c + 1).toString(), label: (c + 1).toString() }))
    // iterate from 1..groups+1
  ]), l = /* @__PURE__ */ te(() => o(r) && o(i));
  {
    const d = (h) => {
      var f = Hp(), g = V(f);
      id(g, {
        label: "Name",
        placeholder: "Group 1",
        variant: "outlined",
        required: !0,
        get value() {
          return o(r);
        },
        set value(p) {
          G(r, p, !0);
        }
      });
      var v = Y(g, 2);
      gv(v, {
        get data() {
          return o(u);
        },
        label: "Position",
        variant: "outlined",
        required: !0,
        get value() {
          return o(i);
        },
        set value(p) {
          G(i, p, !0);
        }
      }), E(h, f);
    };
    let c = /* @__PURE__ */ te(() => !o(l));
    Zo(n, {
      title: "Add Groups",
      confirmActionText: "Add",
      maxWidth: "600px",
      onConfirm: s,
      onCancel: a,
      onClose: a,
      get confirmDisabled() {
        return o(c);
      },
      get open() {
        return t();
      },
      set open(h) {
        t(h);
      },
      content: d,
      $$slots: { content: !0 }
    });
  }
  Ee();
}
var Gp = /* @__PURE__ */ Z('<div class="group-list-item svelte-15ukemk"><div><!></div> <div><!></div> <!> <!></div>'), Vp = /* @__PURE__ */ Z('<div class="edit-groups-form"><h3>Drag & Drop to change Order</h3> <div></div></div>');
function zp(n, e) {
  Ae(e, !0);
  const t = 100;
  let r = m(e, "open", 15, !1), i = /* @__PURE__ */ le(Ce([...e.groups]));
  const a = () => Br("cancel"), s = () => {
    Br("confirm", { groups: o(i).map((h) => ({ ...h })) });
  }, u = (h) => () => {
    G(i, o(i).filter((f) => f.id !== h), !0);
  }, l = (h) => {
    G(i, h.detail.items, !0);
  };
  function d(h, f, g) {
    const v = h.querySelector(".step-circle");
    v && (v.innerHTML = g + 1);
  }
  let c = /* @__PURE__ */ te(() => o(i).every((h) => h.title.trim().length > 0));
  {
    const h = (g) => {
      var v = Vp(), p = Y(V(v), 2);
      mn(p, 31, () => o(i), (_) => _.id, (_, y, w) => {
        var S = Gp(), A = V(S), T = V(A);
        {
          let D = /* @__PURE__ */ te(() => o(w) + 1);
          rl(T, {
            get number() {
              return o(D);
            }
          });
        }
        var I = Y(A, 2), b = V(I);
        Xo(b, {}), Le(I, (D) => mr == null ? void 0 : mr(D));
        var C = Y(I, 2);
        id(C, {
          label: "Name",
          variant: "outlined",
          required: !0,
          get value() {
            return o(y).title;
          },
          set value(D) {
            o(y).title = D;
          }
        });
        var x = Y(C, 2);
        {
          let D = /* @__PURE__ */ te(() => u(o(y).id));
          pd(x, {
            type: "delete",
            tooltip: "Delete",
            fillColor: "#FF203A",
            get onClick() {
              return o(D);
            }
          });
        }
        ce(() => bt(S, "data-id", o(y).id)), Wo(S, () => tl, () => ({ duration: t })), E(_, S);
      }), Le(p, (_, y) => gr == null ? void 0 : gr(_, y), () => ({
        items: o(i),
        flipDurationMs: t,
        dropTargetStyle: {},
        transformDraggedElement: d,
        type: "order-ew-groups-zone"
      })), Yt("consider", p, l), Yt("finalize", p, l), E(g, v);
    };
    let f = /* @__PURE__ */ te(() => !o(c));
    Zo(n, {
      title: "Edit Groups",
      confirmActionText: "Save",
      maxWidth: "600px",
      onConfirm: s,
      onCancel: a,
      onClose: a,
      get confirmDisabled() {
        return o(f);
      },
      get open() {
        return r();
      },
      set open(g) {
        r(g);
      },
      content: h,
      $$slots: { content: !0 }
    });
  }
  Ee();
}
async function qp(n, e, t) {
  const r = await ta(Bp, { groups: e().length });
  r.type === "confirm" && t()(r.data.name, r.data.position);
}
async function Wp(n, e, t) {
  const r = e().map((s, u) => ({ id: u.toString(), title: s.title })), i = await ta(zp, { groups: r });
  if (i.type !== "confirm") return;
  const a = i.data.groups.map((s) => {
    const u = parseInt(s.id, 10);
    return { ...e()[u], title: s.title };
  });
  t()(a);
}
var jp = /* @__PURE__ */ Z('<div class="plugin-list__header-action svelte-s6osjd"><!></div>'), Zp = /* @__PURE__ */ Z('<header class="plugin-list__header svelte-s6osjd"><p class="plugin-list__title svelte-s6osjd"> </p> <!></header>'), Xp = /* @__PURE__ */ Z('<div aria-label="drag-handle"><!></div>'), Kp = /* @__PURE__ */ Z('<div class="plugin-list__item-action svelte-s6osjd"><!></div>'), Yp = /* @__PURE__ */ Z('<div class="plugin-list__item-row svelte-s6osjd"><div class="plugin-list__item-row__left svelte-s6osjd"><!> <span class="plugin-list__item-name svelte-s6osjd"> </span></div> <!></div>'), Jp = /* @__PURE__ */ Z("<div><!></div>"), Qp = /* @__PURE__ */ Z('<div style="display: flex; justify-content: center; margin-top: 0.4rem;"><!></div>'), $p = /* @__PURE__ */ Z('<section class="plugin-list__group svelte-s6osjd"><header class="plugin-list__group-header svelte-s6osjd"><span class="plugin-list__group-index plugin-list__group-plugins__indicator svelte-s6osjd"><!></span> <span class="plugin-list__group-title svelte-s6osjd"> </span></header> <div class="plugin-list__group-plugins-section svelte-s6osjd"><div></div></div> <!></section>'), e_ = /* @__PURE__ */ Z('<div class="plugin-list__body svelte-s6osjd"></div>'), t_ = /* @__PURE__ */ Z('<div class="plugin-list__footer svelte-s6osjd"><button type="button" class="plugin-list__footer-button plugin-list__footer-button--edit svelte-s6osjd"><!> <span>Edit groups</span></button> <button type="button" class="plugin-list__footer-button plugin-list__footer-button--add svelte-s6osjd"><!> <span>Add group</span></button></div>');
function il(n, e) {
  Ae(e, !0);
  const t = (h) => {
    var f = Zp(), g = V(f), v = V(g), p = Y(g, 2);
    {
      var _ = (y) => {
        var w = jp(), S = V(w);
        Ie(S, () => e.headerAction), E(y, w);
      };
      ee(p, (y) => {
        e.headerAction && y(_);
      });
    }
    ce(() => Me(v, s())), E(h, f);
  }, r = (h) => {
    var f = e_();
    mn(f, 21, a, _r, (g, v, p) => {
      var _ = $p(), y = V(_), w = V(y), S = V(w);
      rl(S, { number: p + 1 });
      var A = Y(w, 2), T = V(A), I = Y(y, 2), b = V(I);
      let C;
      mn(b, 31, () => o(v).plugins, (L) => L.id, (L, O, R) => {
        var re = Jp(), q = V(re);
        kd(q, {
          variant: "secondary",
          children: (N, H) => {
            var J = Yp(), ue = V(J), F = V(ue);
            {
              var $ = (W) => {
                var k = Xp(), Q = V(k);
                Xo(Q, {}), Le(k, (X) => mr == null ? void 0 : mr(X)), E(W, k);
              };
              ee(F, (W) => {
                gn.isEditing && W($);
              });
            }
            var se = Y(F, 2), _e = V(se), he = Y(ue, 2);
            {
              var z = (W) => {
                var k = Kp(), Q = V(k);
                Ie(Q, () => e.itemAction, () => ({
                  group: o(v),
                  plugin: o(O),
                  groupIndex: p,
                  pluginIndex: o(R)
                })), E(W, k);
              };
              ee(he, (W) => {
                e.itemAction && W(z);
              });
            }
            ce(() => Me(_e, o(O).name)), E(N, J);
          },
          $$slots: { default: !0 }
        }), ce(() => bt(re, "data-id", o(O).id)), Wo(re, () => tl, () => ({ duration: 100 })), E(L, re);
      }), Le(b, (L, O) => gr == null ? void 0 : gr(L, O), () => ({
        items: o(v).plugins,
        flipDurationMs: 100,
        dropTargetStyle: {}
      }));
      var x = Y(I, 2);
      {
        var D = (L) => {
          var O = Qp(), R = V(O);
          dg(R, { svgStyles: "fill: #6B9197;" }), E(L, O);
        };
        ee(x, (L) => {
          p < a().length - 1 && L(D);
        });
      }
      ce(
        (L) => {
          Me(T, o(v).title), C = Ir(b, 1, "plugin-list__group-plugins svelte-s6osjd", null, C, L);
        },
        [
          () => ({
            "plugin_list__group-plugins--dashed": gn.isEditing
          })
        ]
      ), Yt("consider", b, (L) => d(L, o(v))), Yt("finalize", b, (L) => c(L, o(v))), E(g, _);
    }), E(h, f);
  }, i = (h) => {
    var f = oe(), g = K(f);
    {
      var v = (p) => {
        var _ = t_(), y = V(_);
        y.__click = [Wp, a, l];
        var w = V(y);
        dd(w, {
          svgStyles: "fill: var(--primary-base);",
          "aria-hidden": "true"
        });
        var S = Y(y, 2);
        S.__click = [qp, a, u];
        var A = V(S);
        vd(A, {
          svgStyles: "fill: var(--primary-base);",
          "aria-hidden": "true"
        }), E(p, _);
      };
      ee(g, (p) => {
        gn.isEditing && p(v);
      });
    }
    E(h, f);
  };
  let a = m(e, "pluginGroups", 19, () => []), s = m(e, "title", 3, "Process"), u = m(e, "onAddGroup", 3, () => {
  }), l = m(e, "onUpdateGroups", 3, (h) => {
  });
  function d(h, f) {
    f.plugins = h.detail.items;
  }
  function c(h, f) {
    h.detail.info.trigger === Dt.DROPPED_OUTSIDE_OF_ANY ? f.plugins = h.detail.items.filter((g) => h.detail.info.id !== g.id) : f.plugins = h.detail.items, l()(a());
  }
  Fd(n, {
    class: "plugin-list",
    backgroundColor: "var(--brand)",
    get header() {
      return t;
    },
    get content() {
      return r;
    },
    get additional() {
      return i;
    }
  }), Ee();
}
ct(["click"]);
function n_(n, e) {
  const t = (i) => {
    tr(i, {
      variant: "raised",
      style: "--mdc-theme-primary: var(--on-brand); --mdc-theme-on-primary: var(--brand)",
      "aria-label": "Edit process",
      get onclick() {
        return e.requestEdit;
      },
      children: (a, s) => {
        var u = at("EDIT");
        E(a, u);
      },
      $$slots: { default: !0 }
    });
  };
  let r = m(e, "pluginGroups", 19, () => []);
  il(n, {
    get pluginGroups() {
      return r();
    },
    get headerAction() {
      return t;
    }
  });
}
function r_(n) {
  const e = (n || "").trim() || "process", t = new Set((tn.processes ?? []).map((a) => a.id));
  if (!t.has(e)) return e;
  let r = 2, i = `${e}-${r}`;
  for (; t.has(i); )
    r += 1, i = `${e}-${r}`;
  return i;
}
function i_(n) {
  var a;
  const e = xs(n), t = (e.id || e.name || "process").trim(), r = r_(t), i = {
    id: r,
    version: e.version || "1.0.0",
    name: e.name || r,
    description: e.description || "",
    pluginGroups: (a = e.pluginGroups) != null && a.length ? e.pluginGroups : [{ title: "Ungrouped", plugins: [] }]
  };
  return tn.processes = [...tn.processes ?? [], i], i;
}
function a_(n, e, t) {
  const r = "Ungrouped", i = tn.processes.find((u) => u.id === n);
  if (!i) return;
  const a = i.pluginGroups ?? (i.pluginGroups = []);
  let s = a.find((u) => u.title === r);
  s || (s = { title: r, plugins: [] }, a.push(s)), s.plugins ?? (s.plugins = []), s.plugins.push(e);
}
function s_(n, e) {
  const t = tn.processes.find((r) => r.id === n);
  if (!t || !t.pluginGroups) return !1;
  for (const r of t.pluginGroups) {
    if (!(r != null && r.plugins)) continue;
    const i = r.plugins.findIndex((a) => a.id === e);
    if (i !== -1) {
      if (r.plugins.splice(i, 1), r.plugins.length === 0) {
        const a = t.pluginGroups.indexOf(r);
        a !== -1 && t.pluginGroups.splice(a, 1);
      }
      return !0;
    }
  }
  return !1;
}
function o_(n) {
  var t;
  const e = tn.processes.find((r) => r.id === n);
  if (!(!e || !e.pluginGroups))
    for (const r of e.pluginGroups)
      (t = r.plugins) == null || t.splice(0, r.plugins.length);
}
function l_(n, e, t) {
  const r = tn.processes.find((s) => s.id === n);
  if (!r) return;
  const i = r.pluginGroups ?? (r.pluginGroups = []);
  if (i.some((s) => s.title === e)) return;
  const a = { title: e, plugins: [] };
  if (t === void 0)
    i.push(a);
  else {
    const s = Math.max(0, t - 1);
    i.splice(s, 0, a);
  }
}
function u_(n, e) {
  const t = tn.processes.find((r) => r.id === n);
  t && (t.pluginGroups ?? (t.pluginGroups = []), t.pluginGroups.splice(0, t.pluginGroups.length, ...e));
}
function d_(n) {
  nl.plugins = [...n];
}
function io(n, e = null) {
  qr.process = n ?? null, qr.lastSelectedPluginId = e ?? null;
}
function c_(n) {
  qr.lastSelectedPluginId = n ?? null;
}
var f_ = (n, e, t) => e(t().id), h_ = /* @__PURE__ */ Z('<button type="button" class="plugin-list__removeBtn svelte-1qh2g9"><!></button>');
function v_(n, e) {
  Ae(e, !0);
  const t = (c) => {
    var h = oe(), f = K(h);
    {
      var g = (v) => {
        tr(v, {
          variant: "raised",
          style: "background-color: #FF203A",
          "aria-label": "Remove all plugins",
          onclick: a,
          children: (p, _) => {
            var y = at("REMOVE ALL");
            E(p, y);
          },
          $$slots: { default: !0 }
        });
      };
      ee(f, (v) => {
        o(d) && v(g);
      });
    }
    E(c, h);
  }, r = (c, h) => {
    let f = () => h == null ? void 0 : h().plugin;
    var g = h_();
    g.__click = [f_, s, f];
    var v = V(g);
    ud(v, { svgStyles: "fill: #FF203A" }), ce(() => bt(g, "aria-label", `Remove ${f().name}`)), E(c, g);
  };
  let i = m(e, "pluginGroups", 19, () => []);
  async function a() {
    (await ta(jo, {
      title: "Remove all entries?",
      message: "This action cannot be undone. You will need to manually search for and re-add each item, and rearrange them again.",
      confirmActionText: "Remove All",
      cancelActionText: "Cancel",
      confirmActionColor: "danger"
    })).type === "confirm" && o_(dt.process.id);
  }
  function s(c) {
    s_(dt.process.id, c);
  }
  function u(c, h) {
    l_(dt.process.id, c, h);
  }
  function l(c) {
    u_(dt.process.id, c);
  }
  let d = /* @__PURE__ */ te(() => i().flatMap((c) => c.plugins).length > 0);
  il(n, {
    get pluginGroups() {
      return i();
    },
    get headerAction() {
      return t;
    },
    get itemAction() {
      return r;
    },
    onAddGroup: (c, h) => u(c, h),
    onUpdateGroups: (c) => l(c)
  }), Ee();
}
ct(["click"]);
var g_ = /* @__PURE__ */ Z('<div class="card-header svelte-1sbzvyb"><p class="header-info svelte-1sbzvyb">Add External Plugins</p> <div class="search-input svelte-1sbzvyb"><!></div></div>'), m_ = (n, e, t) => e(o(t)), p_ = /* @__PURE__ */ Z('<div class="card-item-content svelte-1sbzvyb"><div class="card-item-content__left svelte-1sbzvyb"><div aria-label="drag-handle"><!></div> <p class="plugin-name svelte-1sbzvyb"> </p></div> <button class="plugin-add-btn svelte-1sbzvyb"><!></button></div>'), __ = /* @__PURE__ */ Z("<div><!></div>"), I_ = /* @__PURE__ */ Z('<div class="card-parent-content svelte-1sbzvyb"></div>');
function Ud(n, e) {
  Ae(e, !0);
  const t = (h) => {
    var f = g_(), g = Y(V(f), 2), v = V(g);
    Pr(v, {
      variant: "outlined",
      label: "Search Plugins",
      get value() {
        return a();
      },
      set value(p) {
        a(p);
      }
    }), E(h, f);
  }, r = (h) => {
    var f = I_();
    mn(f, 29, i, (g) => g.id, (g, v) => {
      var p = __(), _ = V(p);
      kd(_, {
        variant: "secondary",
        children: (y, w) => {
          var S = p_(), A = V(S), T = V(A), I = V(T);
          Xo(I, {}), Le(T, (L) => mr == null ? void 0 : mr(L));
          var b = Y(T, 2), C = V(b), x = Y(A, 2);
          x.__click = [m_, c, v];
          var D = V(x);
          vd(D, { svgStyles: "fill: var(--brand);" }), ce(() => {
            Me(C, o(v).name), bt(x, "aria-label", `Add ${o(v).name}`);
          }), E(y, S);
        },
        $$slots: { default: !0 }
      }), ce(() => bt(p, "data-id", o(v).id)), Wo(p, () => tl, () => ({ duration: 100 })), E(g, p);
    }), Le(f, (g, v) => gr == null ? void 0 : gr(g, v), () => ({
      items: i(),
      flipDurationMs: 100,
      dropTargetStyle: {},
      dropFromOthersDisabled: !0
    })), Yt("consider", f, l), Yt("finalize", f, u), E(h, f);
  };
  let i = m(e, "plugins", 23, () => []), a = m(e, "searchTerm", 15, ""), s = m(e, "onAddPlugin", 3, () => {
  });
  const u = (h) => {
    i(h.detail.items);
  }, l = (h) => {
    const { trigger: f, id: g } = h.detail.info;
    if (f === Dt.DRAG_STARTED) {
      const v = i().findIndex((_) => _.id === g);
      if (v < 0) return;
      const p = `${g}_copy`;
      h.detail.items = h.detail.items.filter((_) => !_[Ga]), h.detail.items.splice(v, 0, { ...i()[v], id: p }), i(h.detail.items);
    } else
      i([...i()]);
  };
  function d(h) {
    const f = h.id.endsWith("_copy") ? h.id.slice(0, -5) : h.id;
    return i().find((g) => g.id === f) ?? { ...h, id: f };
  }
  function c(h) {
    s()(d(h));
  }
  Fd(n, {
    backgroundColor: "#DAE3E6",
    get header() {
      return t;
    },
    get content() {
      return r;
    }
  }), Ee();
}
ct(["click"]);
function Hd(n) {
  var r;
  const e = n.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "").slice(0, 32), t = ((r = crypto.randomUUID) == null ? void 0 : r.call(crypto).split("-")[0]) ?? Math.random().toString(36).slice(2, 10);
  return `ext-${e || "plugin"}-${t}`;
}
var b_ = /* @__PURE__ */ Z('<div class="process-definition-view svelte-ws8xx1"><!> <div class="drag-and-drop-info svelte-ws8xx1"><!> <p class="svelte-ws8xx1">SELECT OR DRAG & DROP PLUGINS</p></div> <!></div>');
function y_(n, e) {
  Ae(e, !0);
  let t = m(e, "pluginGroups", 19, () => []), r = /* @__PURE__ */ le(""), i = /* @__PURE__ */ te(() => {
    const f = nl.plugins.map((v) => ({
      id: Hd(v.name),
      name: v.name,
      src: v.src,
      type: "internal"
    })), g = o(r).toLowerCase().trim();
    return g ? f.filter((v) => v.name.toLowerCase().includes(g)) : f;
  });
  function a(h) {
    const f = dt.process.id;
    a_(f, h);
  }
  var s = b_(), u = V(s);
  v_(u, {
    get pluginGroups() {
      return t();
    }
  });
  var l = Y(u, 2), d = V(l);
  gd(d, { svgStyles: "fill: #6B9197" });
  var c = Y(l, 2);
  Ud(c, {
    get plugins() {
      return o(i);
    },
    onAddPlugin: a,
    get searchTerm() {
      return o(r);
    },
    set searchTerm(h) {
      G(r, h, !0);
    }
  }), E(n, s), Ee();
}
var C_ = /* @__PURE__ */ Z('<button type="button"><span> </span></button>'), A_ = /* @__PURE__ */ Z('<div><button type="button" class="validation-groups__group-title svelte-4zr9uj"> </button> <!></div>'), E_ = /* @__PURE__ */ Z('<div class="validation-groups svelte-4zr9uj"></div>');
function Bd(n, e) {
  Ae(e, !0);
  let t = m(e, "pluginGroups", 19, () => []), r = m(e, "selectedGroupIndex", 15, null), i = m(e, "selectedPluginIndex", 15, null), a = m(e, "expandedGroupBackground", 3, "var(--brand)"), s = m(e, "expandedGroupBorderColor", 3, "var(--brand)");
  Se(() => {
    var h, f;
    if (!((h = t()) != null && h.length)) {
      r(null), i(null);
      return;
    }
    (r() === null || r() >= t().length) && r(0);
    const c = t()[r()];
    if (!((f = c == null ? void 0 : c.plugins) != null && f.length)) {
      i(null);
      return;
    }
    (i() === null || i() >= c.plugins.length) && i(0);
  });
  function u(c) {
    var f;
    const h = t()[c];
    r(c), i((f = h == null ? void 0 : h.plugins) != null && f.length ? 0 : null);
  }
  function l(c, h) {
    r(c), i(h);
  }
  var d = E_();
  mn(d, 21, t, _r, (c, h, f) => {
    var g = A_();
    let v;
    var p = V(g);
    p.__click = () => u(f);
    var _ = V(p), y = Y(p, 2);
    {
      var w = (S) => {
        var A = oe(), T = K(A);
        mn(T, 17, () => o(h).plugins, _r, (I, b, C) => {
          var x = C_();
          let D;
          x.__click = () => l(f, C);
          var L = V(x), O = V(L);
          ce(
            (R) => {
              D = Ir(x, 1, "validation-groups__plugin svelte-4zr9uj", null, D, R), Me(O, o(b).name);
            },
            [() => ({ active: C === i() })]
          ), E(I, x);
        }), E(S, A);
      };
      ee(y, (S) => {
        f === r() && S(w);
      });
    }
    ce(
      (S) => {
        v = Ir(g, 1, "validation-groups__group svelte-4zr9uj", null, v, S), bt(p, "aria-pressed", f === r()), Me(_, o(h).title);
      },
      [() => ({ expanded: f === r() })]
    ), E(c, g);
  }), ce(() => Ke(d, `--expanded-group-bg:${a()}; --expanded-group-border:${s()};`)), E(n, d), Ee();
}
ct(["click"]);
var S_ = /* @__PURE__ */ Z("<p>Loading…</p>"), x_ = /* @__PURE__ */ Z('<p class="error svelte-zata8z"> </p>'), w_ = /* @__PURE__ */ Z('<div class="xml-viewer svelte-zata8z"><h4 class="xml-viewer__title svelte-zata8z"> </h4> <div class="xml-viewer__box svelte-zata8z"><pre class="svelte-zata8z"> </pre></div></div>'), T_ = /* @__PURE__ */ Z('<span class="validation-xml-container__description svelte-zata8z"> </span>'), D_ = /* @__PURE__ */ Z('<button type="button" class="toggle-btn svelte-zata8z" aria-expanded="true" title="Collapse"><!></button>'), L_ = /* @__PURE__ */ Z('<button type="button" class="toggle-btn svelte-zata8z" aria-expanded="false" title="Expand"><!></button>'), O_ = /* @__PURE__ */ Z('<div class="xml-viewer svelte-zata8z"><div class="xml-viewer__box svelte-zata8z"><pre class="svelte-zata8z"> </pre></div></div>'), R_ = /* @__PURE__ */ Z('<div class="validation-xml-container svelte-zata8z"><div class="validation-xml-container__meta svelte-zata8z"><span class="validation-xml-container__name svelte-zata8z"> </span> <!> <div class="validation-xml-container__actions svelte-zata8z"><button type="button" class="delete-btn svelte-zata8z" title="Remove"><!></button> <!></div></div> <!></div>'), M_ = /* @__PURE__ */ Z('<div class="validation-xml-list svelte-zata8z"></div>'), P_ = /* @__PURE__ */ Z("<!> <!>", 1);
function k_(n, e) {
  Ae(e, !0);
  let t = m(e, "pluginGroups", 19, () => []), r = /* @__PURE__ */ le(null), i = /* @__PURE__ */ le(null);
  const a = /* @__PURE__ */ te(() => o(r) !== null ? t()[o(r)] : null), s = /* @__PURE__ */ te(() => o(a) && o(i) !== null ? o(a).plugins[o(i)] : null);
  Se(() => {
    var I, b;
    if (!((I = t()) != null && I.length)) {
      G(r, null), G(i, null);
      return;
    }
    (o(r) === null || o(r) >= t().length) && G(r, 0);
    const T = t()[o(r)];
    if (!((b = T == null ? void 0 : T.plugins) != null && b.length)) {
      G(i, null);
      return;
    }
    (o(i) === null || o(i) >= T.plugins.length) && G(i, 0);
  });
  let u = /* @__PURE__ */ le(""), l = /* @__PURE__ */ le(!1), d = /* @__PURE__ */ le(""), c = null, h = /* @__PURE__ */ le(Ce([])), f = /* @__PURE__ */ le(Ce(/* @__PURE__ */ new Set()));
  async function g(T) {
    G(l, !0), G(d, ""), G(u, ""), G(h, [], !0), G(f, /* @__PURE__ */ new Set(), !0), c == null || c.abort(), c = new AbortController();
    try {
      const I = new URL((/* @__PURE__ */ Object.assign({}))[`../../assets/validations/${T}.xml`], import.meta.url).href, b = await fetch(I, { cache: "no-cache", signal: c.signal });
      if (!b.ok) {
        if (b.status === 404) {
          G(u, "(No XML found for this plugin.)");
          return;
        }
        throw new Error(`HTTP ${b.status}`);
      }
      G(u, await b.text(), !0);
      const x = new DOMParser().parseFromString(o(u), "application/xml");
      if (x.querySelector("parsererror"))
        throw new Error("Invalid XML format.");
      const L = new XMLSerializer(), O = Array.from(x.getElementsByTagName("validation"));
      G(
        h,
        O.map((R, re) => {
          var _e, he, z, W, k, Q, X;
          const q = (_e = R.getAttribute("name")) == null ? void 0 : _e.trim(), N = (he = R.getAttribute("id")) == null ? void 0 : he.trim(), H = (W = (z = R.querySelector("name")) == null ? void 0 : z.textContent) == null ? void 0 : W.trim(), J = (k = R.getAttribute("description")) == null ? void 0 : k.trim(), ue = (X = (Q = R.querySelector("description")) == null ? void 0 : Q.textContent) == null ? void 0 : X.trim(), F = q || N || H || `Validation ${re + 1}`, $ = J || ue || void 0, se = L.serializeToString(R);
          return { name: F, description: $, xml: se };
        }),
        !0
      ), G(f, new Set(o(h).map((R, re) => re)), !0);
    } catch (I) {
      if ((I == null ? void 0 : I.name) === "AbortError")
        return;
      G(d, (I == null ? void 0 : I.message) || "Failed to load XML.", !0);
    } finally {
      G(l, !1);
    }
  }
  let v = /* @__PURE__ */ te(() => {
    var T;
    return ((T = o(s)) == null ? void 0 : T.id) ?? null;
  }), p = null;
  Se(() => {
    !o(v) || o(v) === p || (p = o(v), g(o(v)));
  });
  function _(T) {
    o(f).has(T) ? o(f).delete(T) : o(f).add(T), G(f, new Set(o(f)), !0);
  }
  var y = P_(), w = K(y);
  Bd(w, {
    get pluginGroups() {
      return t();
    },
    get selectedGroupIndex() {
      return o(r);
    },
    set selectedGroupIndex(T) {
      G(r, T, !0);
    },
    get selectedPluginIndex() {
      return o(i);
    },
    set selectedPluginIndex(T) {
      G(i, T, !0);
    }
  });
  var S = Y(w, 2);
  {
    var A = (T) => {
      var I = oe(), b = K(I);
      {
        var C = (D) => {
          var L = S_();
          E(D, L);
        }, x = (D) => {
          var L = oe(), O = K(L);
          {
            var R = (q) => {
              var N = x_(), H = V(N);
              ce(() => Me(H, o(d))), E(q, N);
            }, re = (q) => {
              var N = oe(), H = K(N);
              {
                var J = (F) => {
                  var $ = w_(), se = V($), _e = V(se), he = Y(se, 2), z = V(he), W = V(z);
                  ce(() => {
                    Me(_e, `XML for: ${o(s).name ?? ""}`), Me(W, o(u));
                  }), E(F, $);
                }, ue = (F) => {
                  var $ = M_();
                  mn($, 21, () => o(h), _r, (se, _e, he) => {
                    var z = R_(), W = V(z), k = V(W), Q = V(k), X = Y(k, 2);
                    {
                      var fe = (P) => {
                        var j = T_(), ve = V(j);
                        ce(() => Me(ve, o(_e).description)), E(P, j);
                      };
                      ee(X, (P) => {
                        o(_e).description && P(fe);
                      });
                    }
                    var be = Y(X, 2), Ne = V(be), tt = V(Ne);
                    cd(tt, { svgStyles: "fill: #FF203A" });
                    var Je = Y(Ne, 2);
                    {
                      var Oe = (P) => {
                        var j = D_();
                        j.__click = () => _(he);
                        var ve = V(j);
                        Kv(ve, { svgStyles: "fill: #004552" }), E(P, j);
                      }, mt = (P) => {
                        var j = L_();
                        j.__click = () => _(he);
                        var ve = V(j);
                        Jv(ve, { svgStyles: "fill: #004552" }), E(P, j);
                      };
                      ee(Je, (P) => {
                        o(f).has(he) ? P(Oe) : P(mt, !1);
                      });
                    }
                    var kt = Y(W, 2);
                    {
                      var Ft = (P) => {
                        var j = O_(), ve = V(j), Pe = V(ve), Nt = V(Pe);
                        ce(() => Me(Nt, o(_e).xml)), E(P, j);
                      };
                      ee(kt, (P) => {
                        o(f).has(he) && P(Ft);
                      });
                    }
                    ce(() => Me(Q, o(_e).name)), E(se, z);
                  }), E(F, $);
                };
                ee(H, (F) => {
                  o(h).length === 0 ? F(J) : F(ue, !1);
                });
              }
              E(q, N);
            };
            ee(
              O,
              (q) => {
                o(d) ? q(R) : q(re, !1);
              },
              !0
            );
          }
          E(D, L);
        };
        ee(b, (D) => {
          o(l) ? D(C) : D(x, !1);
        });
      }
      E(T, I);
    };
    ee(S, (T) => {
      o(s) && T(A);
    });
  }
  E(n, y), Ee();
}
ct(["click"]);
function F_(n, e) {
  const t = (n == null ? void 0 : n.name) ?? "—";
  return [
    { label: "Engineering-Wizard", enabled: !0 },
    { label: e != null && e.edit ? `Edit ${t}` : t, enabled: !1 }
  ];
}
var N_ = /* @__PURE__ */ Z('<div class="stepper-actions svelte-1jrjxrv"><div class="stepper-navigation svelte-1jrjxrv"><button type="button" class="btn btn--back svelte-1jrjxrv" aria-label="Previous step"><span><!></span> <span>Back</span></button> <button type="button" class="btn btn--next svelte-1jrjxrv" aria-label="Next step"><span>Next</span> <span><!></span></button></div> <button type="button" class="btn btn--done svelte-1jrjxrv" aria-label="Done"><span><!></span> <span>Done</span></button></div>');
function Gd(n, e) {
  const t = m(e, "isAtFirstStep", 3, !1), r = m(e, "isAtLastStep", 3, !1), i = m(e, "doneDisabled", 3, !1);
  var a = N_(), s = V(a), u = V(s);
  u.__click = function(..._) {
    var y;
    (y = e.onGoToPreviousStep) == null || y.apply(this, _);
  };
  var l = V(u), d = V(l);
  vg(d, { svgStyles: "fill: #ffffff" });
  var c = Y(u, 2);
  c.__click = function(..._) {
    var y;
    (y = e.onGoToNextStep) == null || y.apply(this, _);
  };
  var h = Y(V(c), 2), f = V(h);
  fg(f, { svgStyles: "fill: var(--brand);" });
  var g = Y(s, 2);
  g.__click = function(..._) {
    var y;
    (y = e.onDone) == null || y.apply(this, _);
  };
  var v = V(g), p = V(v);
  hd(p), ce(() => {
    u.disabled = t(), c.disabled = r(), g.disabled = i();
  }), E(n, a);
}
ct(["click"]);
var U_ = /* @__PURE__ */ Z('<button class="btn-engineering-wizard_title svelte-qwuvgs">Engineering Wizard</button>');
function Vd(n, e) {
  var t = U_();
  t.__click = function(...r) {
    var i;
    (i = e.onClick) == null || i.apply(this, r);
  }, E(n, t);
}
ct(["click"]);
function H_() {
  var e;
  const n = document.querySelector("open-scd");
  return ((e = n == null ? void 0 : n.shadowRoot) == null ? void 0 : e.querySelector("compas-layout")) ?? null;
}
function B_(n) {
  var e;
  (e = H_()) == null || e.dispatchEvent(new CustomEvent("toggle-editor-tabs", { detail: { visible: n }, bubbles: !0, composed: !0 }));
}
const Vr = Ce({ visible: !0 });
Du(() => {
  Se(() => {
    B_(Vr.visible);
  });
});
var G_ = /* @__PURE__ */ Z('<div class="header header--right svelte-1qlms77"><!></div> <!>', 1), V_ = /* @__PURE__ */ Z('<div class="stepper svelte-1qlms77"><!> <!> <!></div> <div class="step-content svelte-1qlms77"><!></div>', 1), z_ = /* @__PURE__ */ Z('<div class="step-content svelte-1qlms77"><div class="header svelte-1qlms77"><!> <!></div> <!></div>'), q_ = /* @__PURE__ */ Z('<div class="page-content svelte-1qlms77"><!></div>');
function W_(n, e) {
  Ae(e, !0);
  const t = ["process-definition", "validator-configuration"];
  let r = /* @__PURE__ */ le(0), i = /* @__PURE__ */ te(() => t[o(r)] ?? t[0]), a = /* @__PURE__ */ te(() => o(r) === 0), s = /* @__PURE__ */ te(() => o(r) === t.length - 1), u = /* @__PURE__ */ te(() => F_(dt.process, { edit: gn.isEditing })), l = /* @__PURE__ */ te(() => dt.process.pluginGroups), d = /* @__PURE__ */ le(Ce([]));
  function c(I) {
    I === 0 && (Vr.visible = !0, dt.process = null);
  }
  function h() {
    console.log("EDITING"), gn.isEditing = !0, Vr.visible = !1, G(r, 0), G(d, [], !0);
  }
  function f() {
    gn.isEditing = !1, Vr.visible = !0, dt.process = null;
  }
  function g(I) {
    const b = t.indexOf(I);
    b !== -1 && G(r, b, !0);
  }
  function v(I) {
    o(d).includes(I) || G(d, [...o(d), I], !0);
  }
  function p() {
    o(s) || (v(o(i)), G(r, o(r) + 1));
  }
  function _() {
    o(a) || G(r, o(r) - 1);
  }
  function y() {
    alert("Add New Validation clicked!");
  }
  var w = q_(), S = V(w);
  {
    var A = (I) => {
      var b = V_(), C = K(b), x = V(C);
      Vd(x, { onClick: f });
      var D = Y(x, 2);
      Up(D, {
        get currentId() {
          return o(i);
        },
        get visited() {
          return o(d);
        },
        onSelect: g
      });
      var L = Y(D, 2);
      Gd(L, {
        onGoToPreviousStep: _,
        onGoToNextStep: p,
        onDone: f,
        get isAtFirstStep() {
          return o(a);
        },
        get isAtLastStep() {
          return o(s);
        }
      });
      var O = Y(C, 2), R = V(O);
      {
        var re = (N) => {
          y_(N, {
            get pluginGroups() {
              return o(l);
            }
          });
        }, q = (N) => {
          var H = oe(), J = K(H);
          {
            var ue = (F) => {
              var $ = G_(), se = K($), _e = V(se);
              {
                let z = /* @__PURE__ */ te(() => !dt.process);
                tr(_e, {
                  variant: "raised",
                  style: "--mdc-theme-primary: var(--brand); --mdc-theme-on-primary: var(--on-brand)",
                  onclick: y,
                  get disabled() {
                    return o(z);
                  },
                  "aria-label": "Add validation",
                  children: (W, k) => {
                    var Q = at("ADD NEW VALIDATION");
                    E(W, Q);
                  },
                  $$slots: { default: !0 }
                });
              }
              var he = Y(se, 2);
              k_(he, {
                get pluginGroups() {
                  return o(l);
                },
                get breadcrumbs() {
                  return o(u);
                },
                activeBreadcrumbIndex: 2,
                $$events: {
                  addValidation: y,
                  breadcrumbClick: c
                }
              }), E(F, $);
            };
            ee(
              J,
              (F) => {
                o(i) === "validator-configuration" && F(ue);
              },
              !0
            );
          }
          E(N, H);
        };
        ee(R, (N) => {
          o(i) === "process-definition" ? N(re) : N(q, !1);
        });
      }
      E(I, b);
    }, T = (I) => {
      var b = z_(), C = V(b), x = V(C);
      qg(x, {
        get breadcrumbs() {
          return o(u);
        },
        activeIndex: 1,
        handleClick: c
      });
      var D = Y(x, 2);
      {
        let O = /* @__PURE__ */ te(() => !dt.process);
        tr(D, {
          variant: "raised",
          style: "--mdc-theme-primary: var(--brand); --mdc-theme-on-primary: var(--on-brand)",
          onclick: () => e.handleStart(dt.process),
          get disabled() {
            return o(O);
          },
          "aria-label": "Start process",
          children: (R, re) => {
            var q = at("START PROCESS");
            E(R, q);
          },
          $$slots: { default: !0 }
        });
      }
      var L = Y(C, 2);
      n_(L, {
        get pluginGroups() {
          return o(l);
        },
        requestEdit: h
      }), E(I, b);
    };
    ee(S, (I) => {
      gn.isEditing ? I(A) : I(T, !1);
    });
  }
  E(n, w), Ee();
}
var j_ = /* @__PURE__ */ Z("<div></div>");
function Z_(n, e) {
  Ae(e, !0);
  function t(d) {
    let c = 3735928559, h = 1103547991;
    for (let f = 0, g; f < d.length; f++)
      g = d.charCodeAt(f), c = Math.imul(c ^ g, 2654435761), h = Math.imul(h ^ g, 1597334677);
    return c = Math.imul(c ^ c >>> 16, 2246822507) ^ Math.imul(h ^ h >>> 13, 3266489909), h = Math.imul(h ^ h >>> 16, 2246822507) ^ Math.imul(c ^ c >>> 13, 3266489909), "oscd-plugin" + ((h >>> 0).toString(16).padStart(8, "0") + (c >>> 0).toString(16).padStart(8, "0"));
  }
  let r = m(e, "editCount", 19, () => -1), i = m(e, "plugins", 19, () => []), a = null, s = null, u = "";
  Se(() => {
    var c;
    if (!a) return;
    if (!((c = e.plugin) != null && c.src)) {
      a.innerHTML = "", s = null, u = "";
      return;
    }
    const d = t(e.plugin.src);
    d !== u ? (u = d, a.innerHTML = "", s = document.createElement(d), s.doc = e.doc, s.editCount = r(), s.plugins = i(), s.nsdoc = e.nsdoc, s.docName = e.docName, s.docId = e.docId, s.docs = e.docs, s.locale = e.locale, e.oscdApi && (s.oscdApi = e.oscdApi), a.appendChild(s)) : s && (s.doc = e.doc, s.editCount = r(), s.plugins = i(), s.nsdoc = e.nsdoc, s.docName = e.docName, s.docId = e.docId, s.docs = e.docs, s.locale = e.locale, e.oscdApi && (s.oscdApi = e.oscdApi));
  });
  var l = j_();
  xe(l, (d) => a = d, () => a), E(n, l), Ee();
}
const ao = /* @__PURE__ */ new Map();
function so(n) {
  return !!customElements.get(n);
}
function X_(n) {
  if (!n.includes("-"))
    throw new Error(
      `Invalid custom element name "${n}". Custom element names must contain a dash.`
    );
}
async function zd(n) {
  if (n.type !== "external") return;
  const e = n.id;
  if (X_(e), so(e)) return;
  const t = ao.get(e);
  if (t) return t;
  const r = (async () => {
    const i = await import(
      /* @vite-ignore */
      n.src
    ), a = (i == null ? void 0 : i.default) ?? (i == null ? void 0 : i.element);
    if (!a)
      throw new Error(
        `Plugin "${n.id}" did not export a custom element constructor.`
      );
    const s = a, u = class extends s {
    };
    if (!so(e))
      try {
        customElements.define(e, u);
      } catch (l) {
        if (!so(e)) throw l;
      }
    await customElements.whenDefined(e);
  })().finally(() => {
    ao.delete(e);
  });
  return ao.set(e, r), r;
}
async function K_(n) {
  await Promise.all(
    n.filter((e) => e.type === "external").map(async (e) => {
      try {
        await zd(e);
      } catch (t) {
        console.error("Failed to preload plugin", e.id, t);
      }
    })
  );
}
function Y_(n, e, t = null) {
  return { parent: n, node: e, reference: t };
}
function J_(n) {
  return { node: n };
}
function Q_(n, e) {
  return { element: n, textContent: e };
}
function $_(n, e) {
  return new CustomEvent("oscd-edit-v2", {
    composed: !0,
    bubbles: !0,
    detail: { ...e, edit: n }
  });
}
function eI(n, e) {
  if (!n)
    return console.warn("Host element is undefined, cannot dispatch event"), !1;
  const t = $_(e);
  return n.dispatchEvent(t);
}
const qd = "compas", Wd = `${qd}:workflowProcessId`, jd = `${qd}:workflowLastPluginId`;
function al(n) {
  return n.documentElement;
}
function Zd(n, e) {
  return al(n).querySelector(`:scope > Private[type="${e}"]`);
}
function tI(n, e, t) {
  const r = n.createElementNS(al(n).namespaceURI, "Private");
  return r.setAttribute("type", e), r.textContent = t, r;
}
function nu(n, e, t, r) {
  const i = Zd(n, t), a = (r ?? "").trim();
  if (!a) {
    i && e.push(J_(i));
    return;
  }
  i ? e.push(Q_(i, a)) : e.push(Y_(al(n), tI(n, t, a), null));
}
function Xd(n) {
  const e = (t) => {
    var r, i;
    return ((i = (r = Zd(n, t)) == null ? void 0 : r.textContent) == null ? void 0 : i.trim()) || null;
  };
  return {
    processId: e(Wd),
    lastPluginId: e(jd)
  };
}
function ls(n, e, t) {
  const r = [];
  return "processId" in t && nu(n, r, Wd, t.processId), "lastPluginId" in t && nu(
    n,
    r,
    jd,
    t.lastPluginId
  ), r.length ? eI(e, r) : !1;
}
var nI = /* @__PURE__ */ Z('<div class="plugin-container svelte-1xkxjkz"><!></div>'), rI = /* @__PURE__ */ Z('<div class="stepper svelte-1xkxjkz"><!> <!> <!></div> <!>', 1);
function iI(n, e) {
  Ae(e, !0);
  const t = ["check", "warning", "error"];
  let r = m(e, "editCount", 19, () => -1), i = m(e, "plugins", 19, () => []), a = Ce({ plugin: null }), s = /* @__PURE__ */ le(Ce([])), u = /* @__PURE__ */ le(Ce({})), l = /* @__PURE__ */ te(() => i().length > 0), d = /* @__PURE__ */ te(() => a.plugin && o(l) ? i().findIndex((L) => L.id === a.plugin.id) : -1), c = /* @__PURE__ */ te(() => dt.process.pluginGroups), h = /* @__PURE__ */ le(null), f = /* @__PURE__ */ le(null);
  function g(L) {
    var O, R;
    if (!((O = o(c)) != null && O.length)) return { groupIndex: null, pluginIndex: null };
    for (let re = 0; re < o(c).length; re++) {
      const N = ((R = o(c)[re].plugins) == null ? void 0 : R.findIndex((H) => H.id === L)) ?? -1;
      if (N >= 0) return { groupIndex: re, pluginIndex: N };
    }
    return { groupIndex: null, pluginIndex: null };
  }
  async function v(L) {
    if (!L) return;
    await zd(L), a.plugin = L;
    const { groupIndex: O, pluginIndex: R } = g(L.id);
    G(h, O, !0), G(f, R, !0);
    try {
      e.doc && e.host && ls(e.doc, e.host, { lastPluginId: L.id });
    } catch {
    }
    if (c_(L.id), !o(s).includes(L.id)) {
      G(s, [...o(s), L.id], !0);
      const re = i().findIndex((q) => q.id === L.id);
      if (re !== -1) {
        const q = t[re % t.length];
        G(u, { ...o(u), [L.id]: q }, !0);
      }
    }
  }
  function p(L) {
    if (!o(l)) return;
    const R = ((o(d) < 0 ? 0 : o(d)) + L + i().length) % i().length;
    v(i()[R]);
  }
  const _ = () => p(1), y = () => p(-1);
  function w(L, O) {
    return Object.assign(L, O), {
      update(R) {
        Object.assign(L, R);
      }
    };
  }
  Se(() => {
    var re;
    if (!o(l)) return;
    const O = (e.doc ? Xd(e.doc) : { lastPluginId: null }).lastPluginId || qr.lastSelectedPluginId;
    if (!O || ((re = a.plugin) == null ? void 0 : re.id) === O) return;
    const R = g(O);
    if (R.groupIndex !== null && R.pluginIndex !== null) {
      G(h, R.groupIndex, !0), G(f, R.pluginIndex, !0);
      const q = i().find((N) => N.id === O);
      if (q) {
        v(q);
        return;
      }
    }
    o(d) === -1 && i().length && v(i()[0]);
  }), Se(() => {
    var re, q, N;
    if (o(h) === null || o(f) === null) return;
    const L = (re = o(c)) == null ? void 0 : re[o(h)], O = (q = L == null ? void 0 : L.plugins) == null ? void 0 : q[o(f)];
    if (!O) return;
    const R = i().find((H) => H.id === O.id);
    R && ((N = a.plugin) == null ? void 0 : N.id) !== R.id && v(R);
  }), Se(() => {
    if (!o(l)) {
      a.plugin = null, G(s, [], !0), G(u, {}, !0), G(h, null), G(f, null);
      return;
    }
    o(d) === -1 && (qr.lastSelectedPluginId || v(i()[0]));
  }), rt(() => (i().length && K_(i()).catch(console.error), Vr.visible = !1, () => {
    Vr.visible = !0;
  }));
  function S() {
    var L;
    Vr.visible = !0, (L = e.onExit) == null || L.call(e);
  }
  var A = rI(), T = K(A), I = V(T);
  Vd(I, { onClick: S });
  var b = Y(I, 2);
  Bd(b, {
    get pluginGroups() {
      return o(c);
    },
    expandedGroupBackground: "var(--primary-base)",
    expandedGroupBorderColor: "white",
    get selectedGroupIndex() {
      return o(h);
    },
    set selectedGroupIndex(L) {
      G(h, L, !0);
    },
    get selectedPluginIndex() {
      return o(f);
    },
    set selectedPluginIndex(L) {
      G(f, L, !0);
    }
  });
  var C = Y(b, 2);
  {
    let L = /* @__PURE__ */ te(() => !o(l)), O = /* @__PURE__ */ te(() => !o(l));
    Gd(C, {
      onGoToPreviousStep: y,
      onGoToNextStep: _,
      onDone: S,
      get isAtFirstStep() {
        return o(L);
      },
      get isAtLastStep() {
        return o(O);
      }
    });
  }
  var x = Y(T, 2);
  {
    var D = (L) => {
      var O = nI(), R = V(O);
      {
        var re = (N) => {
          Z_(N, {
            get plugin() {
              return a.plugin;
            },
            get doc() {
              return e.doc;
            },
            get editCount() {
              return r();
            },
            get plugins() {
              return i();
            },
            get nsdoc() {
              return e.nsdoc;
            },
            get docName() {
              return e.docName;
            },
            get docId() {
              return e.docId;
            },
            get docs() {
              return e.docs;
            },
            get locale() {
              return e.locale;
            },
            get oscdApi() {
              return e.oscdApi;
            }
          });
        }, q = (N) => {
          var H = oe(), J = K(H);
          po(J, () => a.plugin.id, !1, (ue, F) => {
            Le(ue, ($, se) => w == null ? void 0 : w($, se), () => ({
              doc: e.doc,
              editCount: r(),
              docs: e.docs,
              nsdoc: e.nsdoc,
              docName: e.docName,
              docId: e.docId,
              locale: e.locale,
              oscdApi: e.oscdApi,
              host: e.host
            })), Ir(ue, 0, "svelte-1xkxjkz");
          }), E(N, H);
        };
        ee(R, (N) => {
          a.plugin.type === "internal" ? N(re) : N(q, !1);
        });
      }
      E(L, O);
    };
    ee(x, (L) => {
      a.plugin && L(D);
    });
  }
  E(n, A), Ee();
}
const aI = (n, e, t) => {
  n.target === n.currentTarget && (n.key === "Escape" && (n.preventDefault(), e("exit")), (n.key === "Enter" || n.key === " ") && (n.preventDefault(), t()));
};
var sI = (n, e) => {
  n.target === n.currentTarget && e("exit");
}, oI = /* @__PURE__ */ Z('<div class="ewf-dialog-backdrop svelte-12xjguj" role="dialog" aria-modal="true" aria-labelledby="ewf-title" tabindex="-1"><div class="ewf-dialog-panel svelte-12xjguj" role="document"><h2 id="ewf-title" class="sr-only svelte-12xjguj">Engineering Workflow</h2> <!></div></div>');
function lI(n, e) {
  Ae(e, !0);
  let t = m(e, "editCount", 19, () => -1), r = m(e, "plugins", 19, () => []), i = /* @__PURE__ */ le(!1), a = /* @__PURE__ */ le(void 0), s = /* @__PURE__ */ le(null);
  const u = (f) => {
    o(i) || (G(i, !0), dt.process = null, Vr.visible = !0, Br(f));
  }, l = () => u("exit");
  Se(() => {
    var f;
    e.open !== o(a) && (G(a, e.open, !0), e.open ? (G(i, !1), (f = o(s)) == null || f.focus()) : u("cancel"));
  });
  var d = oe(), c = K(d);
  {
    var h = (f) => {
      var g = oI();
      g.__keydown = [aI, u, l], g.__click = [sI, u];
      var v = V(g), p = Y(V(v), 2);
      iI(p, {
        get doc() {
          return e.doc;
        },
        get editCount() {
          return t();
        },
        get host() {
          return e.host;
        },
        get plugins() {
          return r();
        },
        get docName() {
          return e.docName;
        },
        get nsdoc() {
          return e.nsdoc;
        },
        get docs() {
          return e.docs;
        },
        get docId() {
          return e.docId;
        },
        get locale() {
          return e.locale;
        },
        get oscdApi() {
          return e.oscdApi;
        },
        onExit: () => u("exit")
      }), xe(g, (_) => G(s, _), () => o(s)), E(f, g);
    };
    ee(c, (f) => {
      e.open && f(h);
    });
  }
  E(n, d), Ee();
}
ct(["keydown", "click"]);
var uI = (n, e, t) => e(t().id), dI = /* @__PURE__ */ Z('<button type="button" class="plugin-list__removeBtn svelte-fxwg3t"><!></button>'), cI = /* @__PURE__ */ Z('<div class="page svelte-fxwg3t"><div class="topbar svelte-fxwg3t"><div class="topbar__left svelte-fxwg3t"><h2 class="title svelte-fxwg3t">Create new process</h2></div> <div class="topbar__actions svelte-fxwg3t"><!> <!></div></div> <div class="form svelte-fxwg3t"><!> <!> <!> <!></div> <div class="process-definition-view svelte-fxwg3t"><!> <div class="drag-and-drop-info svelte-fxwg3t"><!> <p class="svelte-fxwg3t">SELECT OR DRAG &amp; DROP PLUGINS</p></div> <!></div></div>');
function fI(n, e) {
  Ae(e, !0);
  const t = (z) => {
    var W = oe(), k = K(W);
    {
      var Q = (X) => {
        tr(X, {
          style: "background-color: #FF203A",
          variant: "raised",
          "aria-label": "Remove all plugins",
          onclick: y,
          children: (fe, be) => {
            var Ne = at("REMOVE ALL");
            E(fe, Ne);
          },
          $$slots: { default: !0 }
        });
      };
      ee(k, (X) => {
        o(T) && X(Q);
      });
    }
    E(z, W);
  }, r = (z, W) => {
    let k = () => W == null ? void 0 : W().plugin;
    var Q = dI();
    Q.__click = [uI, w, k];
    var X = V(Q);
    ud(X, { svgStyles: "fill: #FF203A" }), ce(() => bt(Q, "aria-label", `Remove ${k().name}`)), E(z, Q);
  };
  let i = /* @__PURE__ */ le(""), a = /* @__PURE__ */ le(""), s = /* @__PURE__ */ le("1.0.0"), u = /* @__PURE__ */ le(""), l = /* @__PURE__ */ le(!1), d = /* @__PURE__ */ le(Ce([{ title: "Ungrouped", plugins: [] }])), c = /* @__PURE__ */ le("");
  const h = (z) => z.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  Se(() => {
    o(l) || G(u, h(o(i)), !0);
  });
  function f(z) {
    const W = /* @__PURE__ */ new Set();
    for (const k of z ?? []) for (const Q of k.plugins ?? []) W.add(Q.id);
    return W;
  }
  function g(z, W) {
    const k = f(W);
    if (!k.has(z)) return z;
    let Q = 2, X = `${z}-${Q}`;
    for (; k.has(X); )
      Q += 1, X = `${z}-${Q}`;
    return X;
  }
  function v(z = "Ungrouped") {
    let W = o(d).find((k) => k.title === z);
    return W || (W = { title: z, plugins: [] }, G(d, [...o(d), W], !0)), W.plugins ?? (W.plugins = []), W;
  }
  function p(z) {
    const W = [], k = /* @__PURE__ */ new Set();
    for (const Q of z ?? []) {
      const X = [];
      for (const fe of Q.plugins ?? []) {
        let be = fe.id;
        k.has(be) && (be = g(be, W.concat([{ ...Q, plugins: X }]))), k.add(be), X.push({ ...fe, id: be });
      }
      W.push({ ...Q, plugins: X });
    }
    return W;
  }
  function _(z, W = "Ungrouped") {
    const k = v(W), Q = g(z.id, o(d));
    k.plugins.push({ ...z, id: Q }), G(d, [...o(d)], !0);
  }
  async function y() {
    if ((await ta(jo, {
      title: "Remove all entries?",
      message: "This action cannot be undone. You will need to manually search for and re-add each item, and rearrange them again.",
      confirmActionText: "Remove All",
      cancelActionText: "Cancel",
      confirmActionColor: "danger"
    })).type === "confirm") {
      for (const W of o(d)) (W.plugins ?? (W.plugins = [])).length = 0;
      G(d, [...o(d)], !0);
    }
  }
  function w(z) {
    for (let W = 0; W < o(d).length; W += 1) {
      const k = o(d)[W], Q = (k.plugins ?? []).findIndex((X) => X.id === z);
      if (Q !== -1) {
        k.plugins.splice(Q, 1), k.plugins.length === 0 && o(d).splice(W, 1), G(d, [...o(d)], !0);
        return;
      }
    }
  }
  function S(z, W) {
    const k = z.trim();
    if (!k || o(d).some((be) => be.title === k)) return;
    const Q = { title: k, plugins: [] };
    if (W === void 0) {
      G(d, [...o(d), Q], !0);
      return;
    }
    const X = Math.max(0, W - 1), fe = [...o(d)];
    fe.splice(X, 0, Q), G(d, fe, !0);
  }
  function A(z) {
    G(d, p(z), !0);
  }
  let T = /* @__PURE__ */ te(() => o(d).flatMap((z) => z.plugins ?? []).length > 0), I = /* @__PURE__ */ te(() => {
    const z = o(c).toLowerCase().trim(), W = (nl.plugins ?? []).map((k) => ({
      id: Hd(k.name),
      name: k.name,
      src: k.src,
      type: "internal"
    }));
    return z ? W.filter((k) => k.name.toLowerCase().includes(z)) : W;
  }), b = /* @__PURE__ */ te(() => !!o(i).trim());
  function C() {
    if (!o(b)) return;
    const z = {
      id: o(u).trim() || h(o(i)) || "process",
      version: o(s).trim() || "1.0.0",
      name: o(i).trim(),
      description: o(a).trim(),
      pluginGroups: xs(o(d))
    }, W = i_(z);
    gn.isEditing = !1, e.handleSaved(W);
  }
  function x() {
    gn.isEditing = !1, e.handleCancel();
  }
  rt(() => {
    gn.isEditing = !0;
  }), Rn(() => {
    gn.isEditing = !1;
  });
  var D = cI(), L = V(D), O = Y(V(L), 2), R = V(O);
  tr(R, {
    variant: "outlined",
    style: "--mdc-theme-primary: var(--brand); --mdc-theme-on-primary: var(--on-brand)",
    onclick: x,
    children: (z, W) => {
      var k = at("CANCEL");
      E(z, k);
    },
    $$slots: { default: !0 }
  });
  var re = Y(R, 2);
  {
    let z = /* @__PURE__ */ te(() => !o(b));
    tr(re, {
      variant: "raised",
      style: "--mdc-theme-primary: var(--brand); --mdc-theme-on-primary: var(--on-brand)",
      onclick: C,
      get disabled() {
        return o(z);
      },
      children: (W, k) => {
        var Q = at("SAVE");
        E(W, Q);
      },
      $$slots: { default: !0 }
    });
  }
  var q = Y(L, 2), N = V(q);
  Pr(N, {
    variant: "outlined",
    label: "Process name",
    get value() {
      return o(i);
    },
    set value(z) {
      G(i, z, !0);
    }
  });
  var H = Y(N, 2);
  Pr(H, {
    variant: "outlined",
    label: "Process id",
    get value() {
      return o(u);
    },
    set value(z) {
      G(u, z, !0);
    },
    $$events: { input: () => G(l, !0) }
  });
  var J = Y(H, 2);
  Pr(J, {
    variant: "outlined",
    label: "Version",
    get value() {
      return o(s);
    },
    set value(z) {
      G(s, z, !0);
    }
  });
  var ue = Y(J, 2);
  Pr(ue, {
    variant: "outlined",
    label: "Description",
    get value() {
      return o(a);
    },
    set value(z) {
      G(a, z, !0);
    }
  });
  var F = Y(q, 2), $ = V(F);
  il($, {
    get pluginGroups() {
      return o(d);
    },
    title: "Process",
    get headerAction() {
      return t;
    },
    get itemAction() {
      return r;
    },
    onAddGroup: (z, W) => S(z, W),
    onUpdateGroups: (z) => A(z)
  });
  var se = Y($, 2), _e = V(se);
  gd(_e, { svgStyles: "fill: #6B9197" });
  var he = Y(se, 2);
  Ud(he, {
    get plugins() {
      return o(I);
    },
    onAddPlugin: (z) => _(z, "Ungrouped"),
    get searchTerm() {
      return o(c);
    },
    set searchTerm(z) {
      G(c, z, !0);
    }
  }), E(n, D), Ee();
}
ct(["click"]);
const vr = (n) => {
  var e;
  return ((e = n == null ? void 0 : n.textContent) == null ? void 0 : e.trim()) ?? "";
}, hI = (n, e) => (n == null ? void 0 : n.getAttribute(e)) ?? void 0, es = (n, e) => Array.from(n.querySelectorAll(e));
function vI(n) {
  const e = hI(n.querySelector("src"), "type") ?? "";
  return e === "internal" || e === "external" ? e : _p;
}
function ru(n) {
  return {
    id: vr(n.querySelector("id")),
    name: vr(n.querySelector("name")),
    src: vr(n.querySelector("src")) || void 0,
    sourceUrl: vr(n.querySelector("sourceUrl")) || void 0,
    type: vI(n)
  };
}
function gI(n) {
  return es(n, "process").map((e) => {
    const t = es(e, ":scope > plugins-sequence > group"), r = t.length ? t.map((i) => ({
      title: vr(i.querySelector(":scope > title")) || "Untitled",
      plugins: es(i, ":scope > plugin").map(ru)
    })) : [
      {
        title: "Ungrouped",
        plugins: es(e, ":scope > plugins-sequence > plugin").map(
          ru
        )
      }
    ];
    return {
      id: vr(e.querySelector(":scope > id")),
      version: vr(e.querySelector(":scope > version")),
      name: vr(e.querySelector(":scope > name")),
      description: vr(e.querySelector(":scope > description")),
      pluginGroups: r
    };
  });
}
function mI(n) {
  if (typeof DOMParser > "u")
    throw new Error("DOMParser is not available in this environment.");
  const e = new DOMParser().parseFromString(n, "application/xml");
  if (e.getElementsByTagName("parsererror").length)
    throw new Error("Invalid XML file format.");
  return e;
}
function pI(n, e) {
  const t = /* @__PURE__ */ new Map();
  for (const r of n) t.set(r.id, r);
  for (const r of e) t.set(r.id, r);
  return Array.from(t.values());
}
async function _I() {
  Ui.loading = !0, Ui.error = "";
  try {
    const n = await fetch(pp, { cache: "no-cache" });
    if (!n.ok)
      throw new Error(`HTTP ${n.status}${n.statusText ? `: ${n.statusText}` : ""}`);
    const e = await n.text(), t = mI(e), r = gI(t), i = xs(tn.processes), a = Array.isArray(i) && i.length ? pI(r, i) : r;
    return tn.processes = a, a;
  } catch (n) {
    throw Ui.error = n instanceof Error ? n.message : "Failed to load processes.", n;
  } finally {
    Ui.loading = !1;
  }
}
function II(n) {
  return (n.pluginGroups ?? []).flatMap((e) => e.plugins ?? []);
}
var bI = /* @__PURE__ */ Z('<link rel="stylesheet" href="/material-icon.css"/>'), yI = /* @__PURE__ */ Z("<!> <!>", 1);
function CI(n, e) {
  Ae(e, !0);
  let t = /* @__PURE__ */ le(!1);
  rt(async () => {
    await _I();
    try {
      if (e.doc) {
        const { processId: v, lastPluginId: p } = Xd(e.doc);
        if (v) {
          const _ = (tn.processes ?? []).find((y) => y.id === v);
          _ && io(_, p ?? null);
        }
      }
    } catch {
    }
  });
  async function r(v) {
    const p = qr.process;
    if (p && p.id !== v.id) {
      if ((await ta(jo, {
        title: "Do you want to start a new process?",
        message: "Starting a new process will stop the current running process. Any unsaved progress will be lost.",
        confirmActionText: "Start New Process",
        cancelActionText: "Cancel"
      })).type === "cancel")
        return;
      io(v, null), e.doc && e.host && ls(e.doc, e.host, { processId: v.id, lastPluginId: null });
    } else p ? e.doc && e.host && ls(e.doc, e.host, { processId: v.id }) : (io(v, null), e.doc && e.host && ls(e.doc, e.host, { processId: v.id, lastPluginId: null }));
    (!dt.process || dt.process.id !== v.id) && (dt.process = v);
    const _ = II(dt.process);
    ta(lI, {
      doc: e.doc,
      editCount: e.editCount,
      host: e.host,
      plugins: _,
      nsdoc: e.nsdoc,
      docId: e.docId,
      docName: e.docName,
      docs: e.docs,
      locale: e.locale,
      oscdApi: e.oscdApi
    });
  }
  Se(() => {
    Tv({ editCount: e.editCount, doc: e.doc });
  });
  function i(v) {
    dt.process = v;
  }
  function a() {
    dt.process = null;
  }
  function s() {
    gn.isEditing = !1, dt.process = null, G(t, !0);
  }
  function u() {
    gn.isEditing = !1, G(t, !1);
  }
  function l(v) {
    G(t, !1), dt.process = v;
  }
  var d = yI();
  uf((v) => {
    var p = bI();
    E(v, p);
  });
  var c = K(d);
  wv(c, {});
  var h = Y(c, 2);
  {
    var f = (v) => {
      fI(v, { handleCancel: u, handleSaved: l });
    }, g = (v) => {
      var p = oe(), _ = K(p);
      {
        var y = (S) => {
          W_(S, { handleBack: a, handleStart: r });
        }, w = (S) => {
          Lp(S, {
            handleView: i,
            handleStart: r,
            handleAddNew: s,
            get docName() {
              return e.docName;
            }
          });
        };
        ee(
          _,
          (S) => {
            dt.process ? S(y) : S(w, !1);
          },
          !0
        );
      }
      E(v, p);
    };
    ee(h, (v) => {
      o(t) ? v(f) : v(g, !1);
    });
  }
  E(n, d), Ee();
}
const Kd = "archive-explorer", Yd = "0.0.1";
var AI = /* @__PURE__ */ Z('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function EI(n, e) {
  Ae(e, !0);
  let t = m(e, "dev", 3, !1), r = m(e, "editCount", 3, 0), i = m(e, "plugins", 19, () => []);
  var a = AI(), s = K(a);
  {
    var u = (c) => {
      CI(c, {
        get doc() {
          return e.doc;
        },
        get editCount() {
          return r();
        },
        get plugins() {
          return i();
        },
        get docId() {
          return e.docId;
        },
        get pluginId() {
          return e.pluginId;
        },
        get docName() {
          return e.docName;
        },
        get nsdoc() {
          return e.nsdoc;
        },
        get docs() {
          return e.docs;
        },
        get locale() {
          return e.locale;
        },
        get oscdApi() {
          return e.oscdApi;
        },
        get host() {
          return e.host;
        }
      });
    };
    ee(s, (c) => {
      (e.doc || t()) && c(u);
    });
  }
  var l = Y(s, 2), d = Y(l, 2);
  ce(() => {
    Cl(l, Kd), Cl(d, Yd);
  }), E(n, a), Ee();
}
var Ki;
class DI extends HTMLElement {
  constructor() {
    super();
    Ve(this, Ki);
    we(this, Ki, /* @__PURE__ */ le(Ce({
      doc: this._doc,
      editCount: -1,
      host: this,
      plugins: [],
      docId: null,
      pluginId: null,
      docName: null,
      nsdoc: null,
      docs: {},
      locale: navigator.language ?? "en-US",
      oscdApi: null
    })));
  }
  get _props() {
    return o(ae(this, Ki));
  }
  set _props(t) {
    G(ae(this, Ki), t, !0);
  }
  connectedCallback() {
    if (this.shadowRoot) return;
    this.attachShadow({ mode: "open" }), _f(EI, { target: this.shadowRoot, props: this._props });
    const t = SI();
    this.shadowRoot.appendChild(t);
  }
  set doc(t) {
    this._doc = t, this._props.doc = t;
  }
  get doc() {
    return this._doc;
  }
  set plugins(t) {
    this._props.plugins = t;
    const r = t.filter((i) => i.kind === "editor");
    d_(r);
  }
  set editCount(t) {
    this._props.editCount = t;
  }
  set docId(t) {
    this._props.docId = t;
  }
  set pluginId(t) {
    this._props.pluginId = t;
  }
  set docName(t) {
    this._props.docName = t;
  }
  set nsdoc(t) {
    this._props.nsdoc = t;
  }
  set docs(t) {
    this._props.docs = t;
  }
  set locale(t) {
    this._props.locale = t;
  }
  set oscdApi(t) {
    this._props.oscdApi = t;
  }
}
Ki = new WeakMap();
function SI() {
  const n = `${Kd}-v${Yd}-style`, e = xI(), t = document.createElement("link");
  return t.rel = "stylesheet", t.type = "text/css", t.href = e, t.id = n, t;
}
function xI() {
  const n = new URL(import.meta.url), e = n.origin, t = n.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, t, "style.css"].filter(Boolean).join("/");
}
export {
  DI as default
};
