var nc = Object.defineProperty;
var fl = (n) => {
  throw TypeError(n);
};
var rc = (n, e, t) => e in n ? nc(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Di = (n, e, t) => rc(n, typeof e != "symbol" ? e + "" : e, t), Ys = (n, e, t) => e.has(n) || fl("Cannot " + t);
var se = (n, e, t) => (Ys(n, e, "read from private field"), t ? t.call(n) : e.get(n)), We = (n, e, t) => e.has(n) ? fl("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), we = (n, e, t, r) => (Ys(n, e, "write to private field"), r ? r.call(n, t) : e.set(n, t), t), Ut = (n, e, t) => (Ys(n, e, "access private method"), t);
const xt = Symbol(), ic = "http://www.w3.org/1999/xhtml", ac = "http://www.w3.org/2000/svg", sc = "@attach", dd = !1;
var Ma = Array.isArray, oc = Array.prototype.indexOf, Po = Array.from, ls = Object.defineProperty, Gr = Object.getOwnPropertyDescriptor, ud = Object.getOwnPropertyDescriptors, cd = Object.prototype, lc = Array.prototype, As = Object.getPrototypeOf, vl = Object.isExtensible;
function Fi(n) {
  return typeof n == "function";
}
const Ie = () => {
};
function dc(n) {
  for (var e = 0; e < n.length; e++)
    n[e]();
}
function fd() {
  var n, e, t = new Promise((r, i) => {
    n = r, e = i;
  });
  return { promise: t, resolve: n, reject: e };
}
const tn = 2, ko = 4, Go = 8, _i = 16, yr = 32, Vr = 64, No = 128, Ln = 256, ds = 512, Xt = 1024, pn = 2048, zr = 4096, Un = 8192, yi = 16384, Zo = 32768, Ci = 65536, hl = 1 << 17, vd = 1 << 18, Ai = 1 << 19, uc = 1 << 20, uo = 1 << 21, Es = 1 << 22, fi = 1 << 23, nr = Symbol("$state"), hd = Symbol("legacy props"), cc = Symbol(""), Pi = new class extends Error {
  constructor() {
    super(...arguments);
    Di(this, "name", "StaleReactionError");
    Di(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Ho(n) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function fc() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function vc(n) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function hc() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function gc(n) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function mc() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function pc(n) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Ic() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function bc() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function _c() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function yc() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Cc() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Ac() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let Ec = !1;
function gd(n) {
  return n === this.v;
}
function Bo(n, e) {
  return n != n ? e == e : n !== e || n !== null && typeof n == "object" || typeof n == "function";
}
function md(n) {
  return !Bo(n, this.v);
}
let ia = !1, Sc = !1;
function xc() {
  ia = !0;
}
const wc = [];
function Ss(n, e = !1, t = !1) {
  return es(n, /* @__PURE__ */ new Map(), "", wc, null, t);
}
function es(n, e, t, r, i = null, a = !1) {
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
        var c = n[l];
        l in n && (u[l] = es(c, e, t, r, null, a));
      }
      return u;
    }
    if (As(n) === cd) {
      u = {}, e.set(n, u), i !== null && e.set(i, u);
      for (var d in n)
        u[d] = es(
          // @ts-expect-error
          n[d],
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
      return es(
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
function qi(n) {
  et = n;
}
function ye(n) {
  return (
    /** @type {T} */
    pd().get(n)
  );
}
function ce(n, e) {
  return pd().set(n, e), e;
}
function Ae(n, e = !1, t) {
  et = {
    p: et,
    c: null,
    e: null,
    s: n,
    x: null,
    l: ia && !e ? { s: null, u: null, $: [] } : null
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
      Od(r);
  }
  return n !== void 0 && (e.x = n), et = e.p, n ?? /** @type {T} */
  {};
}
function Fa() {
  return !ia || et !== null && et.l === null;
}
function pd(n) {
  return et === null && Ho(), et.c ?? (et.c = new Map(Tc(et) || void 0));
}
function Tc(n) {
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
function Id() {
  var n = si;
  si = [], dc(n);
}
function Ir(n) {
  if (si.length === 0 && !ya) {
    var e = si;
    queueMicrotask(() => {
      e === si && Id();
    });
  }
  si.push(n);
}
function Dc() {
  for (; si.length > 0; )
    Id();
}
const Lc = /* @__PURE__ */ new WeakMap();
function bd(n) {
  var e = Pe;
  if (e === null)
    return Me.f |= fi, n;
  if (e.f & Zo)
    Ki(n, e);
  else {
    if (!(e.f & No))
      throw !e.parent && n instanceof Error && _d(n), n;
    e.b.error(n);
  }
}
function Ki(n, e) {
  for (; e !== null; ) {
    if (e.f & No)
      try {
        e.b.error(n);
        return;
      } catch (t) {
        n = t;
      }
    e = e.parent;
  }
  throw n instanceof Error && _d(n), n;
}
function _d(n) {
  const e = Lc.get(n);
  e && (ls(n, "message", {
    value: e.message
  }), ls(n, "stack", {
    value: e.stack
  }));
}
const Va = /* @__PURE__ */ new Set();
let Ye = null, ts = null, Mt = null, co = /* @__PURE__ */ new Set(), Jn = [], xs = null, fo = !1, ya = !1;
var Ui, ji, oi, La, Vi, zi, li, Xi, Ra, Oa, Mn, vo, ns, ho;
const _s = class _s {
  constructor() {
    We(this, Mn);
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
    We(this, Ui, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    We(this, ji, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    We(this, oi, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    We(this, La, null);
    /**
     * Async effects inside a newly-created `<svelte:boundary>`
     * — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    We(this, Vi, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    We(this, zi, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    We(this, li, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    We(this, Xi, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    We(this, Ra, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    We(this, Oa, []);
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
    Jn = [], ts = null, this.apply();
    for (const s of e)
      Ut(this, Mn, vo).call(this, s);
    if (se(this, oi) === 0) {
      var t = Mt;
      Ut(this, Mn, ho).call(this);
      var r = se(this, zi), i = se(this, li);
      we(this, zi, []), we(this, li, []), we(this, Xi, []), ts = this, Ye = null, Mt = t, gl(r), gl(i), ts = null, (a = se(this, La)) == null || a.resolve();
    } else
      Ut(this, Mn, ns).call(this, se(this, zi)), Ut(this, Mn, ns).call(this, se(this, li)), Ut(this, Mn, ns).call(this, se(this, Xi));
    Mt = null;
    for (const s of se(this, Vi))
      Sa(s);
    we(this, Vi, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, t) {
    se(this, Ui).has(e) || se(this, Ui).set(e, t), this.current.set(e, e.v), Mt == null || Mt.set(e, e.v);
  }
  activate() {
    Ye = this;
  }
  deactivate() {
    Ye = null, Mt = null;
  }
  flush() {
    if (Jn.length > 0) {
      if (this.activate(), yd(), Ye !== null && Ye !== this)
        return;
    } else se(this, oi) === 0 && Ut(this, Mn, ho).call(this);
    this.deactivate();
    for (const e of co)
      if (co.delete(e), e(), Ye !== null)
        break;
  }
  increment() {
    we(this, oi, se(this, oi) + 1);
  }
  decrement() {
    we(this, oi, se(this, oi) - 1);
    for (const e of se(this, Ra))
      $t(e, pn), pi(e);
    for (const e of se(this, Oa))
      $t(e, zr), pi(e);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    se(this, ji).add(e);
  }
  settled() {
    return (se(this, La) ?? we(this, La, fd())).promise;
  }
  static ensure() {
    if (Ye === null) {
      const e = Ye = new _s();
      Va.add(Ye), ya || _s.enqueue(() => {
        Ye === e && e.flush();
      });
    }
    return Ye;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    Ir(e);
  }
  apply() {
  }
};
Ui = new WeakMap(), ji = new WeakMap(), oi = new WeakMap(), La = new WeakMap(), Vi = new WeakMap(), zi = new WeakMap(), li = new WeakMap(), Xi = new WeakMap(), Ra = new WeakMap(), Oa = new WeakMap(), Mn = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
vo = function(e) {
  var c;
  e.f ^= Xt;
  for (var t = e.first; t !== null; ) {
    var r = t.f, i = (r & (yr | Vr)) !== 0, a = i && (r & Xt) !== 0, s = a || (r & Un) !== 0 || this.skipped_effects.has(t);
    if (!s && t.fn !== null) {
      i ? t.f ^= Xt : r & ko ? se(this, li).push(t) : r & Xt || (r & Es && ((c = t.b) != null && c.is_pending()) ? se(this, Vi).push(t) : Os(t) && (t.f & _i && se(this, Xi).push(t), Sa(t)));
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
ns = function(e) {
  for (const t of e)
    (t.f & pn ? se(this, Ra) : se(this, Oa)).push(t), $t(t, Xt);
  e.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
ho = function() {
  var e;
  for (const t of se(this, ji))
    t();
  if (se(this, ji).clear(), Va.size > 1) {
    se(this, Ui).clear();
    let t = !0;
    for (const r of Va) {
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
          Cd(s, a);
        if (Jn.length > 0) {
          Ye = r, r.apply();
          for (const s of Jn)
            Ut(e = r, Mn, vo).call(e, s);
          Jn = [], r.deactivate();
        }
      }
    }
    Ye = null;
  }
  Va.delete(this);
};
let er = _s;
function Rc(n) {
  var e = ya;
  ya = !0;
  try {
    for (var t; ; ) {
      if (Dc(), Jn.length === 0 && (Ye == null || Ye.flush(), Jn.length === 0))
        return xs = null, /** @type {T} */
        t;
      yd();
    }
  } finally {
    ya = e;
  }
}
function yd() {
  var n = Ni;
  fo = !0;
  try {
    var e = 0;
    for (Il(!0); Jn.length > 0; ) {
      var t = er.ensure();
      if (e++ > 1e3) {
        var r, i;
        Oc();
      }
      t.process(Jn), Nr.clear();
    }
  } finally {
    fo = !1, Il(n), xs = null;
  }
}
function Oc() {
  try {
    mc();
  } catch (n) {
    Ki(n, xs);
  }
}
let vr = null;
function gl(n) {
  var e = n.length;
  if (e !== 0) {
    for (var t = 0; t < e; ) {
      var r = n[t++];
      if (!(r.f & (yi | Un)) && Os(r) && (vr = [], Sa(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Pd(r) : r.fn = null), (vr == null ? void 0 : vr.length) > 0)) {
        Nr.clear();
        for (const i of vr)
          Sa(i);
        vr = [];
      }
    }
    vr = null;
  }
}
function Cd(n, e) {
  if (n.reactions !== null)
    for (const t of n.reactions) {
      const r = t.f;
      r & tn ? Cd(
        /** @type {Derived} */
        t,
        e
      ) : r & (Es | _i) && Ad(t, e) && ($t(t, pn), pi(
        /** @type {Effect} */
        t
      ));
    }
}
function Ad(n, e) {
  if (n.deps !== null) {
    for (const t of n.deps)
      if (e.includes(t) || t.f & tn && Ad(
        /** @type {Derived} */
        t,
        e
      ))
        return !0;
  }
  return !1;
}
function pi(n) {
  for (var e = xs = n; e.parent !== null; ) {
    e = e.parent;
    var t = e.f;
    if (fo && e === Pe && t & _i)
      return;
    if (t & (Vr | yr)) {
      if (!(t & Xt)) return;
      e.f ^= Xt;
    }
  }
  Jn.push(e);
}
function Mc(n) {
  let e = 0, t = Ii(0), r;
  return () => {
    Qc() && (o(t), Ls(() => (e === 0 && (r = Xr(() => n(() => Ca(t)))), e += 1, () => {
      Ir(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, Ca(t));
      });
    })));
  };
}
var Fc = Ci | Ai | No;
function Pc(n, e, t) {
  new kc(n, e, t);
}
var kn, xn, Fo, qn, di, Kn, wn, on, Qn, Rr, ui, Or, ci, Mr, ys, Cs, en, Gc, Nc, rs, is, go;
class kc {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, t, r) {
    We(this, en);
    /** @type {Boundary | null} */
    Di(this, "parent");
    We(this, kn, !1);
    /** @type {TemplateNode} */
    We(this, xn);
    /** @type {TemplateNode | null} */
    We(this, Fo, null);
    /** @type {BoundaryProps} */
    We(this, qn);
    /** @type {((anchor: Node) => void)} */
    We(this, di);
    /** @type {Effect} */
    We(this, Kn);
    /** @type {Effect | null} */
    We(this, wn, null);
    /** @type {Effect | null} */
    We(this, on, null);
    /** @type {Effect | null} */
    We(this, Qn, null);
    /** @type {DocumentFragment | null} */
    We(this, Rr, null);
    We(this, ui, 0);
    We(this, Or, 0);
    We(this, ci, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    We(this, Mr, null);
    We(this, ys, () => {
      se(this, Mr) && Qi(se(this, Mr), se(this, ui));
    });
    We(this, Cs, Mc(() => (we(this, Mr, Ii(se(this, ui))), () => {
      we(this, Mr, null);
    })));
    we(this, xn, e), we(this, qn, t), we(this, di, r), this.parent = /** @type {Effect} */
    Pe.b, we(this, kn, !!se(this, qn).pending), we(this, Kn, Ar(() => {
      Pe.b = this;
      {
        try {
          we(this, wn, Vt(() => r(se(this, xn))));
        } catch (i) {
          this.error(i);
        }
        se(this, Or) > 0 ? Ut(this, en, is).call(this) : we(this, kn, !1);
      }
    }, Fc));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return se(this, kn) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!se(this, qn).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    Ut(this, en, go).call(this, e), we(this, ui, se(this, ui) + e), co.add(se(this, ys));
  }
  get_effect_pending() {
    return se(this, Cs).call(this), o(
      /** @type {Source<number>} */
      se(this, Mr)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var t = se(this, qn).onerror;
    let r = se(this, qn).failed;
    if (se(this, ci) || !t && !r)
      throw e;
    se(this, wn) && (Dt(se(this, wn)), we(this, wn, null)), se(this, on) && (Dt(se(this, on)), we(this, on, null)), se(this, Qn) && (Dt(se(this, Qn)), we(this, Qn, null));
    var i = !1, a = !1;
    const s = () => {
      if (i) {
        Ac();
        return;
      }
      i = !0, a && yc(), er.ensure(), we(this, ui, 0), se(this, Qn) !== null && Zr(se(this, Qn), () => {
        we(this, Qn, null);
      }), we(this, kn, this.has_pending_snippet()), we(this, wn, Ut(this, en, rs).call(this, () => (we(this, ci, !1), Vt(() => se(this, di).call(this, se(this, xn)))))), se(this, Or) > 0 ? Ut(this, en, is).call(this) : we(this, kn, !1);
    };
    var u = Me;
    try {
      un(null), a = !0, t == null || t(e, s), a = !1;
    } catch (l) {
      Ki(l, se(this, Kn) && se(this, Kn).parent);
    } finally {
      un(u);
    }
    r && Ir(() => {
      we(this, Qn, Ut(this, en, rs).call(this, () => {
        we(this, ci, !0);
        try {
          return Vt(() => {
            r(
              se(this, xn),
              () => e,
              () => s
            );
          });
        } catch (l) {
          return Ki(
            l,
            /** @type {Effect} */
            se(this, Kn).parent
          ), null;
        } finally {
          we(this, ci, !1);
        }
      }));
    });
  }
}
kn = new WeakMap(), xn = new WeakMap(), Fo = new WeakMap(), qn = new WeakMap(), di = new WeakMap(), Kn = new WeakMap(), wn = new WeakMap(), on = new WeakMap(), Qn = new WeakMap(), Rr = new WeakMap(), ui = new WeakMap(), Or = new WeakMap(), ci = new WeakMap(), Mr = new WeakMap(), ys = new WeakMap(), Cs = new WeakMap(), en = new WeakSet(), Gc = function() {
  try {
    we(this, wn, Vt(() => se(this, di).call(this, se(this, xn))));
  } catch (e) {
    this.error(e);
  }
  we(this, kn, !1);
}, Nc = function() {
  const e = se(this, qn).pending;
  e && (we(this, on, Vt(() => e(se(this, xn)))), er.enqueue(() => {
    we(this, wn, Ut(this, en, rs).call(this, () => (er.ensure(), Vt(() => se(this, di).call(this, se(this, xn)))))), se(this, Or) > 0 ? Ut(this, en, is).call(this) : (Zr(
      /** @type {Effect} */
      se(this, on),
      () => {
        we(this, on, null);
      }
    ), we(this, kn, !1));
  }));
}, /**
 * @param {() => Effect | null} fn
 */
rs = function(e) {
  var t = Pe, r = Me, i = et;
  rr(se(this, Kn)), un(se(this, Kn)), qi(se(this, Kn).ctx);
  try {
    return e();
  } catch (a) {
    return bd(a), null;
  } finally {
    rr(t), un(r), qi(i);
  }
}, is = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    se(this, qn).pending
  );
  se(this, wn) !== null && (we(this, Rr, document.createDocumentFragment()), Zc(se(this, wn), se(this, Rr))), se(this, on) === null && we(this, on, Vt(() => e(se(this, xn))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
go = function(e) {
  var t;
  if (!this.has_pending_snippet()) {
    this.parent && Ut(t = this.parent, en, go).call(t, e);
    return;
  }
  we(this, Or, se(this, Or) + e), se(this, Or) === 0 && (we(this, kn, !1), se(this, on) && Zr(se(this, on), () => {
    we(this, on, null);
  }), se(this, Rr) && (se(this, xn).before(se(this, Rr)), we(this, Rr, null)), Ir(() => {
    er.ensure().flush();
  }));
};
function Zc(n, e) {
  for (var t = n.nodes_start, r = n.nodes_end; t !== null; ) {
    var i = t === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Pa(t)
    );
    e.append(t), t = i;
  }
}
function Ed(n, e, t) {
  const r = Fa() ? ws : Wo;
  if (e.length === 0) {
    t(n.map(r));
    return;
  }
  var i = Ye, a = (
    /** @type {Effect} */
    Pe
  ), s = Hc();
  Promise.all(e.map((u) => /* @__PURE__ */ Bc(u))).then((u) => {
    s();
    try {
      t([...n.map(r), ...u]);
    } catch (l) {
      a.f & yi || Ki(l, a);
    }
    i == null || i.deactivate(), mo();
  }).catch((u) => {
    Ki(u, a);
  });
}
function Hc() {
  var n = Pe, e = Me, t = et, r = Ye;
  return function() {
    rr(n), un(e), qi(t), r == null || r.activate();
  };
}
function mo() {
  rr(null), un(null), qi(null);
}
// @__NO_SIDE_EFFECTS__
function ws(n) {
  var e = tn | pn, t = Me !== null && Me.f & tn ? (
    /** @type {Derived} */
    Me
  ) : null;
  return Pe === null || t !== null && t.f & Ln ? e |= Ln : Pe.f |= Ai, {
    ctx: et,
    deps: null,
    effects: null,
    equals: gd,
    f: e,
    fn: n,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      xt
    ),
    wv: 0,
    parent: t ?? Pe,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Bc(n, e) {
  let t = (
    /** @type {Effect | null} */
    Pe
  );
  t === null && fc();
  var r = (
    /** @type {Boundary} */
    t.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = Ii(
    /** @type {V} */
    xt
  ), s = !Me, u = /* @__PURE__ */ new Map();
  return ef(() => {
    var f;
    var l = fd();
    i = l.promise;
    try {
      Promise.resolve(n()).then(l.resolve, l.reject).then(mo);
    } catch (h) {
      l.reject(h), mo();
    }
    var c = (
      /** @type {Batch} */
      Ye
    ), d = r.is_pending();
    s && (r.update_pending_count(1), d || (c.increment(), (f = u.get(c)) == null || f.reject(Pi), u.delete(c), u.set(c, l)));
    const v = (h, g = void 0) => {
      if (d || c.activate(), g)
        g !== Pi && (a.f |= fi, Qi(a, g));
      else {
        a.f & fi && (a.f ^= fi), Qi(a, h);
        for (const [p, _] of u) {
          if (u.delete(p), p === c) break;
          _.reject(Pi);
        }
      }
      s && (r.update_pending_count(-1), d || c.decrement());
    };
    l.promise.then(v, (h) => v(null, h || "unknown"));
  }), Ds(() => {
    for (const l of u.values())
      l.reject(Pi);
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
function ne(n) {
  const e = /* @__PURE__ */ ws(n);
  return Nd(e), e;
}
// @__NO_SIDE_EFFECTS__
function Wo(n) {
  const e = /* @__PURE__ */ ws(n);
  return e.equals = md, e;
}
function Sd(n) {
  var e = n.effects;
  if (e !== null) {
    n.effects = null;
    for (var t = 0; t < e.length; t += 1)
      Dt(
        /** @type {Effect} */
        e[t]
      );
  }
}
function Wc(n) {
  for (var e = n.parent; e !== null; ) {
    if (!(e.f & tn))
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function Uo(n) {
  var e, t = Pe;
  rr(Wc(n));
  try {
    Sd(n), e = Wd(n);
  } finally {
    rr(t);
  }
  return e;
}
function xd(n) {
  var e = Uo(n);
  if (n.equals(e) || (n.v = e, n.wv = Hd()), !Ei)
    if (Mt !== null)
      Mt.set(n, n.v);
    else {
      var t = (Fr || n.f & Ln) && n.deps !== null ? zr : Xt;
      $t(n, t);
    }
}
const Nr = /* @__PURE__ */ new Map();
function Ii(n, e) {
  var t = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: n,
    reactions: null,
    equals: gd,
    rv: 0,
    wv: 0
  };
  return t;
}
// @__NO_SIDE_EFFECTS__
function le(n, e) {
  const t = Ii(n);
  return Nd(t), t;
}
// @__NO_SIDE_EFFECTS__
function wd(n, e = !1, t = !0) {
  var i;
  const r = Ii(n);
  return e || (r.equals = md), ia && t && et !== null && et.l !== null && ((i = et.l).s ?? (i.s = [])).push(r), r;
}
function W(n, e, t = !1) {
  Me !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Zn || Me.f & hl) && Fa() && Me.f & (tn | _i | Es | hl) && !(Jt != null && Jt.includes(n)) && _c();
  let r = t ? Ce(e) : e;
  return Qi(n, r);
}
function Qi(n, e) {
  if (!n.equals(e)) {
    var t = n.v;
    Ei ? Nr.set(n, e) : Nr.set(n, t), n.v = e;
    var r = er.ensure();
    r.capture(n, t), n.f & tn && (n.f & pn && Uo(
      /** @type {Derived} */
      n
    ), $t(n, n.f & Ln ? zr : Xt)), n.wv = Hd(), Td(n, pn), Fa() && Pe !== null && Pe.f & Xt && !(Pe.f & (yr | Vr)) && (Sn === null ? rf([n]) : Sn.push(n));
  }
  return e;
}
function Ca(n) {
  W(n, n.v + 1);
}
function Td(n, e) {
  var t = n.reactions;
  if (t !== null)
    for (var r = Fa(), i = t.length, a = 0; a < i; a++) {
      var s = t[a], u = s.f;
      if (!(!r && s === Pe)) {
        var l = (u & pn) === 0;
        l && $t(s, e), u & tn ? Td(
          /** @type {Derived} */
          s,
          zr
        ) : l && (u & _i && vr !== null && vr.push(
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
  if (typeof n != "object" || n === null || nr in n)
    return n;
  const e = As(n);
  if (e !== cd && e !== lc)
    return n;
  var t = /* @__PURE__ */ new Map(), r = Ma(n), i = /* @__PURE__ */ le(0), a = vi, s = (u) => {
    if (vi === a)
      return u();
    var l = Me, c = vi;
    un(null), _l(a);
    var d = u();
    return un(l), _l(c), d;
  };
  return r && t.set("length", /* @__PURE__ */ le(
    /** @type {any[]} */
    n.length
  )), new Proxy(
    /** @type {any} */
    n,
    {
      defineProperty(u, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Ic();
        var d = t.get(l);
        return d === void 0 ? d = s(() => {
          var v = /* @__PURE__ */ le(c.value);
          return t.set(l, v), v;
        }) : W(d, c.value, !0), !0;
      },
      deleteProperty(u, l) {
        var c = t.get(l);
        if (c === void 0) {
          if (l in u) {
            const d = s(() => /* @__PURE__ */ le(xt));
            t.set(l, d), Ca(i);
          }
        } else
          W(c, xt), Ca(i);
        return !0;
      },
      get(u, l, c) {
        var h;
        if (l === nr)
          return n;
        var d = t.get(l), v = l in u;
        if (d === void 0 && (!v || (h = Gr(u, l)) != null && h.writable) && (d = s(() => {
          var g = Ce(v ? u[l] : xt), p = /* @__PURE__ */ le(g);
          return p;
        }), t.set(l, d)), d !== void 0) {
          var f = o(d);
          return f === xt ? void 0 : f;
        }
        return Reflect.get(u, l, c);
      },
      getOwnPropertyDescriptor(u, l) {
        var c = Reflect.getOwnPropertyDescriptor(u, l);
        if (c && "value" in c) {
          var d = t.get(l);
          d && (c.value = o(d));
        } else if (c === void 0) {
          var v = t.get(l), f = v == null ? void 0 : v.v;
          if (v !== void 0 && f !== xt)
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
        if (l === nr)
          return !0;
        var c = t.get(l), d = c !== void 0 && c.v !== xt || Reflect.has(u, l);
        if (c !== void 0 || Pe !== null && (!d || (f = Gr(u, l)) != null && f.writable)) {
          c === void 0 && (c = s(() => {
            var h = d ? Ce(u[l]) : xt, g = /* @__PURE__ */ le(h);
            return g;
          }), t.set(l, c));
          var v = o(c);
          if (v === xt)
            return !1;
        }
        return d;
      },
      set(u, l, c, d) {
        var S;
        var v = t.get(l), f = l in u;
        if (r && l === "length")
          for (var h = c; h < /** @type {Source<number>} */
          v.v; h += 1) {
            var g = t.get(h + "");
            g !== void 0 ? W(g, xt) : h in u && (g = s(() => /* @__PURE__ */ le(xt)), t.set(h + "", g));
          }
        if (v === void 0)
          (!f || (S = Gr(u, l)) != null && S.writable) && (v = s(() => /* @__PURE__ */ le(void 0)), W(v, Ce(c)), t.set(l, v));
        else {
          f = v.v !== xt;
          var p = s(() => Ce(c));
          W(v, p);
        }
        var _ = Reflect.getOwnPropertyDescriptor(u, l);
        if (_ != null && _.set && _.set.call(d, c), !f) {
          if (r && typeof l == "string") {
            var y = (
              /** @type {Source<number>} */
              t.get("length")
            ), x = Number(l);
            Number.isInteger(x) && x >= y.v && W(y, x + 1);
          }
          Ca(i);
        }
        return !0;
      },
      ownKeys(u) {
        o(i);
        var l = Reflect.ownKeys(u).filter((v) => {
          var f = t.get(v);
          return f === void 0 || f.v !== xt;
        });
        for (var [c, d] of t)
          d.v !== xt && !(c in u) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        bc();
      }
    }
  );
}
function ml(n) {
  try {
    if (n !== null && typeof n == "object" && nr in n)
      return n[nr];
  } catch {
  }
  return n;
}
function Uc(n, e) {
  return Object.is(ml(n), ml(e));
}
var us, jo, Dd, Ld, Rd;
function jc() {
  if (us === void 0) {
    us = window, jo = document, Dd = /Firefox/.test(navigator.userAgent);
    var n = Element.prototype, e = Node.prototype, t = Text.prototype;
    Ld = Gr(e, "firstChild").get, Rd = Gr(e, "nextSibling").get, vl(n) && (n.__click = void 0, n.__className = void 0, n.__attributes = null, n.__style = void 0, n.__e = void 0), vl(t) && (t.__t = void 0);
  }
}
function Cr(n = "") {
  return document.createTextNode(n);
}
// @__NO_SIDE_EFFECTS__
function Ji(n) {
  return Ld.call(n);
}
// @__NO_SIDE_EFFECTS__
function Pa(n) {
  return Rd.call(n);
}
function N(n, e) {
  return /* @__PURE__ */ Ji(n);
}
function K(n, e = !1) {
  {
    var t = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Ji(
        /** @type {Node} */
        n
      )
    );
    return t instanceof Comment && t.data === "" ? /* @__PURE__ */ Pa(t) : t;
  }
}
function q(n, e = 1, t = !1) {
  let r = n;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Pa(r);
  return r;
}
function Vc(n) {
  n.textContent = "";
}
function Vo() {
  return !1;
}
function zc(n, e) {
  if (e) {
    const t = document.body;
    n.autofocus = !0, Ir(() => {
      document.activeElement === t && n.focus();
    });
  }
}
let pl = !1;
function Xc() {
  pl || (pl = !0, document.addEventListener(
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
function Ts(n) {
  var e = Me, t = Pe;
  un(null), rr(null);
  try {
    return n();
  } finally {
    un(e), rr(t);
  }
}
function Yc(n, e, t, r = t) {
  n.addEventListener(e, () => Ts(t));
  const i = n.__on_r;
  i ? n.__on_r = () => {
    i(), r(!0);
  } : n.__on_r = () => r(!0), Xc();
}
function qc(n) {
  Pe === null && Me === null && gc(), Me !== null && Me.f & Ln && Pe === null && hc(), Ei && vc();
}
function Kc(n, e) {
  var t = e.last;
  t === null ? e.last = e.first = n : (t.next = n, n.prev = t, e.last = n);
}
function ir(n, e, t, r = !0) {
  var i = Pe;
  i !== null && i.f & Un && (n |= Un);
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
      Sa(a), a.f |= Zo;
    } catch (l) {
      throw Dt(a), l;
    }
  else e !== null && pi(a);
  if (r) {
    var s = a;
    if (t && s.deps === null && s.teardown === null && s.nodes_start === null && s.first === s.last && // either `null`, or a singular child
    !(s.f & Ai) && (s = s.first), s !== null && (s.parent = i, i !== null && Kc(s, i), Me !== null && Me.f & tn && !(n & Vr))) {
      var u = (
        /** @type {Derived} */
        Me
      );
      (u.effects ?? (u.effects = [])).push(s);
    }
  }
  return a;
}
function Qc() {
  return Me !== null && !Zn;
}
function Ds(n) {
  const e = ir(Go, null, !1);
  return $t(e, Xt), e.teardown = n, e;
}
function Se(n) {
  qc();
  var e = (
    /** @type {Effect} */
    Pe.f
  ), t = !Me && (e & yr) !== 0 && (e & Zo) === 0;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      et
    );
    (r.e ?? (r.e = [])).push(n);
  } else
    return Od(n);
}
function Od(n) {
  return ir(ko | uc, n, !1);
}
function Jc(n) {
  er.ensure();
  const e = ir(Vr | Ai, n, !0);
  return () => {
    Dt(e);
  };
}
function $c(n) {
  er.ensure();
  const e = ir(Vr | Ai, n, !0);
  return (t = {}) => new Promise((r) => {
    t.outro ? Zr(e, () => {
      Dt(e), r(void 0);
    }) : (Dt(e), r(void 0));
  });
}
function ka(n) {
  return ir(ko, n, !1);
}
function ef(n) {
  return ir(Es | Ai, n, !0);
}
function Ls(n, e = 0) {
  return ir(Go | e, n, !0);
}
function de(n, e = [], t = []) {
  Ed(e, t, (r) => {
    ir(Go, () => n(...r.map(o)), !0);
  });
}
function Ar(n, e = 0) {
  var t = ir(_i | e, n, !0);
  return t;
}
function Vt(n, e = !0) {
  return ir(yr | Ai, n, !0, e);
}
function Md(n) {
  var e = n.teardown;
  if (e !== null) {
    const t = Ei, r = Me;
    bl(!0), un(null);
    try {
      e.call(null);
    } finally {
      bl(t), un(r);
    }
  }
}
function Fd(n, e = !1) {
  var t = n.first;
  for (n.first = n.last = null; t !== null; ) {
    const i = t.ac;
    i !== null && Ts(() => {
      i.abort(Pi);
    });
    var r = t.next;
    t.f & Vr ? t.parent = null : Dt(t, e), t = r;
  }
}
function tf(n) {
  for (var e = n.first; e !== null; ) {
    var t = e.next;
    e.f & yr || Dt(e), e = t;
  }
}
function Dt(n, e = !0) {
  var t = !1;
  (e || n.f & vd) && n.nodes_start !== null && n.nodes_end !== null && (nf(
    n.nodes_start,
    /** @type {TemplateNode} */
    n.nodes_end
  ), t = !0), Fd(n, e && !t), cs(n, 0), $t(n, yi);
  var r = n.transitions;
  if (r !== null)
    for (const a of r)
      a.stop();
  Md(n);
  var i = n.parent;
  i !== null && i.first !== null && Pd(n), n.next = n.prev = n.teardown = n.ctx = n.deps = n.fn = n.nodes_start = n.nodes_end = n.ac = null;
}
function nf(n, e) {
  for (; n !== null; ) {
    var t = n === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Pa(n)
    );
    n.remove(), n = t;
  }
}
function Pd(n) {
  var e = n.parent, t = n.prev, r = n.next;
  t !== null && (t.next = r), r !== null && (r.prev = t), e !== null && (e.first === n && (e.first = r), e.last === n && (e.last = t));
}
function Zr(n, e) {
  var t = [];
  zo(n, t, !0), kd(t, () => {
    Dt(n), e && e();
  });
}
function kd(n, e) {
  var t = n.length;
  if (t > 0) {
    var r = () => --t || e();
    for (var i of n)
      i.out(r);
  } else
    e();
}
function zo(n, e, t) {
  if (!(n.f & Un)) {
    if (n.f ^= Un, n.transitions !== null)
      for (const s of n.transitions)
        (s.is_global || t) && e.push(s);
    for (var r = n.first; r !== null; ) {
      var i = r.next, a = (r.f & Ci) !== 0 || (r.f & yr) !== 0;
      zo(r, e, a ? t : !1), r = i;
    }
  }
}
function Rs(n) {
  Gd(n, !0);
}
function Gd(n, e) {
  if (n.f & Un) {
    n.f ^= Un, n.f & Xt || ($t(n, pn), pi(n));
    for (var t = n.first; t !== null; ) {
      var r = t.next, i = (t.f & Ci) !== 0 || (t.f & yr) !== 0;
      Gd(t, i ? e : !1), t = r;
    }
    if (n.transitions !== null)
      for (const a of n.transitions)
        (a.is_global || e) && a.in();
  }
}
let Ni = !1;
function Il(n) {
  Ni = n;
}
let Ei = !1;
function bl(n) {
  Ei = n;
}
let Me = null, Zn = !1;
function un(n) {
  Me = n;
}
let Pe = null;
function rr(n) {
  Pe = n;
}
let Jt = null;
function Nd(n) {
  Me !== null && (Jt === null ? Jt = [n] : Jt.push(n));
}
let Qt = null, hn = 0, Sn = null;
function rf(n) {
  Sn = n;
}
let Zd = 1, Ea = 0, vi = Ea;
function _l(n) {
  vi = n;
}
let Fr = !1;
function Hd() {
  return ++Zd;
}
function Os(n) {
  var v;
  var e = n.f;
  if (e & pn)
    return !0;
  if (e & zr) {
    var t = n.deps, r = (e & Ln) !== 0;
    if (t !== null) {
      var i, a, s = (e & ds) !== 0, u = r && Pe !== null && !Fr, l = t.length;
      if ((s || u) && (Pe === null || !(Pe.f & yi))) {
        var c = (
          /** @type {Derived} */
          n
        ), d = c.parent;
        for (i = 0; i < l; i++)
          a = t[i], (s || !((v = a == null ? void 0 : a.reactions) != null && v.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        s && (c.f ^= ds), u && d !== null && !(d.f & Ln) && (c.f ^= Ln);
      }
      for (i = 0; i < l; i++)
        if (a = t[i], Os(
          /** @type {Derived} */
          a
        ) && xd(
          /** @type {Derived} */
          a
        ), a.wv > n.wv)
          return !0;
    }
    (!r || Pe !== null && !Fr) && $t(n, Xt);
  }
  return !1;
}
function Bd(n, e, t = !0) {
  var r = n.reactions;
  if (r !== null && !(Jt != null && Jt.includes(n)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a.f & tn ? Bd(
        /** @type {Derived} */
        a,
        e,
        !1
      ) : e === a && (t ? $t(a, pn) : a.f & Xt && $t(a, zr), pi(
        /** @type {Effect} */
        a
      ));
    }
}
function Wd(n) {
  var p;
  var e = Qt, t = hn, r = Sn, i = Me, a = Fr, s = Jt, u = et, l = Zn, c = vi, d = n.f;
  Qt = /** @type {null | Value[]} */
  null, hn = 0, Sn = null, Fr = (d & Ln) !== 0 && (Zn || !Ni || Me === null), Me = d & (yr | Vr) ? null : n, Jt = null, qi(n.ctx), Zn = !1, vi = ++Ea, n.ac !== null && (Ts(() => {
    n.ac.abort(Pi);
  }), n.ac = null);
  try {
    n.f |= uo;
    var v = (
      /** @type {Function} */
      n.fn
    ), f = v(), h = n.deps;
    if (Qt !== null) {
      var g;
      if (cs(n, hn), h !== null && hn > 0)
        for (h.length = hn + Qt.length, g = 0; g < Qt.length; g++)
          h[hn + g] = Qt[g];
      else
        n.deps = h = Qt;
      if (!Fr || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      d & tn && /** @type {import('#client').Derived} */
      n.reactions !== null)
        for (g = hn; g < h.length; g++)
          ((p = h[g]).reactions ?? (p.reactions = [])).push(n);
    } else h !== null && hn < h.length && (cs(n, hn), h.length = hn);
    if (Fa() && Sn !== null && !Zn && h !== null && !(n.f & (tn | zr | pn)))
      for (g = 0; g < /** @type {Source[]} */
      Sn.length; g++)
        Bd(
          Sn[g],
          /** @type {Effect} */
          n
        );
    return i !== null && i !== n && (Ea++, Sn !== null && (r === null ? r = Sn : r.push(.../** @type {Source[]} */
    Sn))), n.f & fi && (n.f ^= fi), f;
  } catch (_) {
    return bd(_);
  } finally {
    n.f ^= uo, Qt = e, hn = t, Sn = r, Me = i, Fr = a, Jt = s, qi(u), Zn = l, vi = c;
  }
}
function af(n, e) {
  let t = e.reactions;
  if (t !== null) {
    var r = oc.call(t, n);
    if (r !== -1) {
      var i = t.length - 1;
      i === 0 ? t = e.reactions = null : (t[r] = t[i], t.pop());
    }
  }
  t === null && e.f & tn && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Qt === null || !Qt.includes(e)) && ($t(e, zr), e.f & (Ln | ds) || (e.f ^= ds), Sd(
    /** @type {Derived} **/
    e
  ), cs(
    /** @type {Derived} **/
    e,
    0
  ));
}
function cs(n, e) {
  var t = n.deps;
  if (t !== null)
    for (var r = e; r < t.length; r++)
      af(n, t[r]);
}
function Sa(n) {
  var e = n.f;
  if (!(e & yi)) {
    $t(n, Xt);
    var t = Pe, r = Ni;
    Pe = n, Ni = !0;
    try {
      e & _i ? tf(n) : Fd(n), Md(n);
      var i = Wd(n);
      n.teardown = typeof i == "function" ? i : null, n.wv = Zd;
      var a;
      dd && Sc && n.f & pn && n.deps;
    } finally {
      Ni = r, Pe = t;
    }
  }
}
async function Ud() {
  await Promise.resolve(), Rc();
}
function o(n) {
  var e = n.f, t = (e & tn) !== 0;
  if (Me !== null && !Zn) {
    var r = Pe !== null && (Pe.f & yi) !== 0;
    if (!r && !(Jt != null && Jt.includes(n))) {
      var i = Me.deps;
      if (Me.f & uo)
        n.rv < Ea && (n.rv = Ea, Qt === null && i !== null && i[hn] === n ? hn++ : Qt === null ? Qt = [n] : (!Fr || !Qt.includes(n)) && Qt.push(n));
      else {
        (Me.deps ?? (Me.deps = [])).push(n);
        var a = n.reactions;
        a === null ? n.reactions = [Me] : a.includes(Me) || a.push(Me);
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
    if (Nr.has(n))
      return Nr.get(n);
    if (t) {
      s = /** @type {Derived} */
      n;
      var l = s.v;
      return (!(s.f & Xt) && s.reactions !== null || jd(s)) && (l = Uo(s)), Nr.set(s, l), l;
    }
  } else if (t) {
    if (s = /** @type {Derived} */
    n, Mt != null && Mt.has(s))
      return Mt.get(s);
    Os(s) && xd(s);
  }
  if (Mt != null && Mt.has(n))
    return Mt.get(n);
  if (n.f & fi)
    throw n.v;
  return n.v;
}
function jd(n) {
  if (n.v === xt) return !0;
  if (n.deps === null) return !1;
  for (const e of n.deps)
    if (Nr.has(e) || e.f & tn && jd(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Xr(n) {
  var e = Zn;
  try {
    return Zn = !0, n();
  } finally {
    Zn = e;
  }
}
const sf = -7169;
function $t(n, e) {
  n.f = n.f & sf | e;
}
function of(n) {
  if (!(typeof n != "object" || !n || n instanceof EventTarget)) {
    if (nr in n)
      po(n);
    else if (!Array.isArray(n))
      for (let e in n) {
        const t = n[e];
        typeof t == "object" && t && nr in t && po(t);
      }
  }
}
function po(n, e = /* @__PURE__ */ new Set()) {
  if (typeof n == "object" && n !== null && // We don't want to traverse DOM elements
  !(n instanceof EventTarget) && !e.has(n)) {
    e.add(n), n instanceof Date && n.getTime();
    for (let r in n)
      try {
        po(n[r], e);
      } catch {
      }
    const t = As(n);
    if (t !== Object.prototype && t !== Array.prototype && t !== Map.prototype && t !== Set.prototype && t !== Date.prototype) {
      const r = ud(t);
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
const Vd = /* @__PURE__ */ new Set(), Io = /* @__PURE__ */ new Set();
function Xo(n, e, t, r = {}) {
  function i(a) {
    if (r.capture || ba.call(e, a), !a.cancelBubble)
      return Ts(() => t == null ? void 0 : t.call(this, a));
  }
  return n.startsWith("pointer") || n.startsWith("touch") || n === "wheel" ? Ir(() => {
    e.addEventListener(n, i, r);
  }) : e.addEventListener(n, i, r), i;
}
function lf(n, e, t, r = {}) {
  var i = Xo(e, n, t, r);
  return () => {
    n.removeEventListener(e, i, r);
  };
}
function Pt(n, e, t, r, i) {
  var a = { capture: r, passive: i }, s = Xo(n, e, t, a);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && Ds(() => {
    e.removeEventListener(n, s, a);
  });
}
function pt(n) {
  for (var e = 0; e < n.length; e++)
    Vd.add(n[e]);
  for (var t of Io)
    t(n);
}
let yl = null;
function ba(n) {
  var x;
  var e = this, t = (
    /** @type {Node} */
    e.ownerDocument
  ), r = n.type, i = ((x = n.composedPath) == null ? void 0 : x.call(n)) || [], a = (
    /** @type {null | Element} */
    i[0] || n.target
  );
  yl = n;
  var s = 0, u = yl === n && n.__root;
  if (u) {
    var l = i.indexOf(u);
    if (l !== -1 && (e === document || e === /** @type {any} */
    window)) {
      n.__root = e;
      return;
    }
    var c = i.indexOf(e);
    if (c === -1)
      return;
    l <= c && (s = l);
  }
  if (a = /** @type {Element} */
  i[s] || n.target, a !== e) {
    ls(n, "currentTarget", {
      configurable: !0,
      get() {
        return a || t;
      }
    });
    var d = Me, v = Pe;
    un(null), rr(null);
    try {
      for (var f, h = []; a !== null; ) {
        var g = a.assignedSlot || a.parentNode || /** @type {any} */
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
          f ? h.push(S) : f = S;
        }
        if (n.cancelBubble || g === e || g === null)
          break;
        a = g;
      }
      if (f) {
        for (let S of h)
          queueMicrotask(() => {
            throw S;
          });
        throw f;
      }
    } finally {
      n.__root = e, delete n.currentTarget, un(d), rr(v);
    }
  }
}
function df(n) {
  var e;
  e = document.head.appendChild(Cr());
  try {
    Ar(() => n(e), vd);
  } finally {
  }
}
function zd(n) {
  var e = document.createElement("template");
  return e.innerHTML = n.replaceAll("<!>", "<!---->"), e.content;
}
function $i(n, e) {
  var t = (
    /** @type {Effect} */
    Pe
  );
  t.nodes_start === null && (t.nodes_start = n, t.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function X(n, e) {
  var t = (e & 1) !== 0, r = (e & 2) !== 0, i, a = !n.startsWith("<!>");
  return () => {
    i === void 0 && (i = zd(a ? n : "<!>" + n), t || (i = /** @type {Node} */
    /* @__PURE__ */ Ji(i)));
    var s = (
      /** @type {TemplateNode} */
      r || Dd ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (t) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ji(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      $i(u, l);
    } else
      $i(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function uf(n, e, t = "svg") {
  var r = !n.startsWith("<!>"), i = `<${t}>${r ? n : "<!>" + n}</${t}>`, a;
  return () => {
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        zd(i)
      ), u = (
        /** @type {Element} */
        /* @__PURE__ */ Ji(s)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ Ji(u);
    }
    var l = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return $i(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function at(n, e) {
  return /* @__PURE__ */ uf(n, e, "svg");
}
function ct(n = "") {
  {
    var e = Cr(n + "");
    return $i(e, e), e;
  }
}
function oe() {
  var n = document.createDocumentFragment(), e = document.createComment(""), t = Cr();
  return n.append(e, t), $i(e, t), n;
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
function vf(n) {
  return ff.includes(n);
}
const hf = {
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
  return n = n.toLowerCase(), hf[n] ?? n;
}
const mf = ["touchstart", "touchmove"];
function pf(n) {
  return mf.includes(n);
}
function Oe(n, e) {
  var t = e == null ? "" : typeof e == "object" ? e + "" : e;
  t !== (n.__t ?? (n.__t = n.nodeValue)) && (n.__t = t, n.nodeValue = t + "");
}
function If(n, e) {
  return bf(n, e);
}
const Li = /* @__PURE__ */ new Map();
function bf(n, { target: e, anchor: t, props: r = {}, events: i, context: a, intro: s = !0 }) {
  jc();
  var u = /* @__PURE__ */ new Set(), l = (v) => {
    for (var f = 0; f < v.length; f++) {
      var h = v[f];
      if (!u.has(h)) {
        u.add(h);
        var g = pf(h);
        e.addEventListener(h, ba, { passive: g });
        var p = Li.get(h);
        p === void 0 ? (document.addEventListener(h, ba, { passive: g }), Li.set(h, 1)) : Li.set(h, p + 1);
      }
    }
  };
  l(Po(Vd)), Io.add(l);
  var c = void 0, d = $c(() => {
    var v = t ?? e.appendChild(Cr());
    return Pc(
      /** @type {TemplateNode} */
      v,
      {
        pending: () => {
        }
      },
      (f) => {
        if (a) {
          Ae({});
          var h = (
            /** @type {ComponentContext} */
            et
          );
          h.c = a;
        }
        i && (r.$$events = i), c = n(f, r) || {}, a && Ee();
      }
    ), () => {
      var g;
      for (var f of u) {
        e.removeEventListener(f, ba);
        var h = (
          /** @type {number} */
          Li.get(f)
        );
        --h === 0 ? (document.removeEventListener(f, ba), Li.delete(f)) : Li.set(f, h);
      }
      Io.delete(l), v !== t && ((g = v.parentNode) == null || g.removeChild(v));
    };
  });
  return _f.set(c, d), c;
}
let _f = /* @__PURE__ */ new WeakMap();
function _e(n, e, ...t) {
  var r = n, i = Ie, a;
  Ar(() => {
    i !== (i = e()) && (a && (Dt(a), a = null), a = Vt(() => (
      /** @type {SnippetFn} */
      i(r, ...t)
    )));
  }, Ci);
}
function rt(n) {
  et === null && Ho(), ia && et.l !== null ? yf(et).m.push(n) : Se(() => {
    const e = Xr(n);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Fn(n) {
  et === null && Ho(), rt(() => () => Xr(n));
}
function yf(n) {
  var e = (
    /** @type {ComponentContextLegacy} */
    n.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
function $(n, e, t = !1) {
  var r = n, i = null, a = null, s = xt, u = t ? Ci : 0, l = !1;
  const c = (h, g = !0) => {
    l = !0, f(g, h);
  };
  var d = null;
  function v() {
    d !== null && (d.lastChild.remove(), r.before(d), d = null);
    var h = s ? i : a, g = s ? a : i;
    h && Rs(h), g && Zr(g, () => {
      s ? a = null : i = null;
    });
  }
  const f = (h, g) => {
    if (s !== (s = h)) {
      var p = Vo(), _ = r;
      if (p && (d = document.createDocumentFragment(), d.append(_ = Cr())), s ? i ?? (i = g && Vt(() => g(_))) : a ?? (a = g && Vt(() => g(_))), p) {
        var y = (
          /** @type {Batch} */
          Ye
        ), x = s ? i : a, S = s ? a : i;
        x && y.skipped_effects.delete(x), S && y.skipped_effects.add(S), y.add_callback(v);
      } else
        v();
    }
  };
  Ar(() => {
    l = !1, e(c), l || f(null, null);
  }, u);
}
let hi = null;
function Cl(n) {
  hi = n;
}
function br(n, e) {
  return e;
}
function Cf(n, e, t) {
  for (var r = n.items, i = [], a = e.length, s = 0; s < a; s++)
    zo(e[s].e, i, !0);
  var u = a > 0 && i.length === 0 && t !== null;
  if (u) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      t.parentNode
    );
    Vc(l), l.append(
      /** @type {Element} */
      t
    ), r.clear(), zn(n, e[0].prev, e[a - 1].next);
  }
  kd(i, () => {
    for (var c = 0; c < a; c++) {
      var d = e[c];
      u || (r.delete(d.k), zn(n, d.prev, d.next)), Dt(d.e, !u);
    }
  });
}
function cn(n, e, t, r, i, a = null) {
  var s = n, u = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, l = (e & 4) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      n
    );
    s = c.appendChild(Cr());
  }
  var d = null, v = !1, f = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ Wo(() => {
    var y = t();
    return Ma(y) ? y : y == null ? [] : Po(y);
  }), g, p;
  function _() {
    Af(
      p,
      g,
      u,
      f,
      s,
      i,
      e,
      r,
      t
    ), a !== null && (g.length === 0 ? d ? Rs(d) : d = Vt(() => a(s)) : d !== null && Zr(d, () => {
      d = null;
    }));
  }
  Ar(() => {
    p ?? (p = /** @type {Effect} */
    Pe), g = /** @type {V[]} */
    o(h);
    var y = g.length;
    if (!(v && y === 0)) {
      v = y === 0;
      var x, S, A, w;
      if (Vo()) {
        var I = /* @__PURE__ */ new Set(), C = (
          /** @type {Batch} */
          Ye
        );
        for (S = 0; S < y; S += 1) {
          A = g[S], w = r(A, S);
          var b = u.items.get(w) ?? f.get(w);
          b ? e & 3 && Xd(b, A, S, e) : (x = Yd(
            null,
            u,
            null,
            null,
            A,
            w,
            S,
            i,
            e,
            t,
            !0
          ), f.set(w, x)), I.add(w);
        }
        for (const [T, R] of u.items)
          I.has(T) || C.skipped_effects.add(R.e);
        C.add_callback(_);
      } else
        _();
      o(h);
    }
  });
}
function Af(n, e, t, r, i, a, s, u, l) {
  var ue, k, ee, ie;
  var c = (s & 8) !== 0, d = (s & 3) !== 0, v = e.length, f = t.items, h = t.first, g = h, p, _ = null, y, x = [], S = [], A, w, I, C;
  if (c)
    for (C = 0; C < v; C += 1)
      A = e[C], w = u(A, C), I = f.get(w), I !== void 0 && ((ue = I.a) == null || ue.measure(), (y ?? (y = /* @__PURE__ */ new Set())).add(I));
  for (C = 0; C < v; C += 1) {
    if (A = e[C], w = u(A, C), I = f.get(w), I === void 0) {
      var b = r.get(w);
      if (b !== void 0) {
        r.delete(w), f.set(w, b);
        var T = _ ? _.next : g;
        zn(t, _, b), zn(t, b, T), qs(b, T, i), _ = b;
      } else {
        var R = g ? (
          /** @type {TemplateNode} */
          g.e.nodes_start
        ) : i;
        _ = Yd(
          R,
          t,
          _,
          _ === null ? t.first : _.next,
          A,
          w,
          C,
          a,
          s,
          l
        );
      }
      f.set(w, _), x = [], S = [], g = _.next;
      continue;
    }
    if (d && Xd(I, A, C, s), I.e.f & Un && (Rs(I.e), c && ((k = I.a) == null || k.unfix(), (y ?? (y = /* @__PURE__ */ new Set())).delete(I))), I !== g) {
      if (p !== void 0 && p.has(I)) {
        if (x.length < S.length) {
          var D = S[0], L;
          _ = D.prev;
          var O = x[0], re = x[x.length - 1];
          for (L = 0; L < x.length; L += 1)
            qs(x[L], D, i);
          for (L = 0; L < S.length; L += 1)
            p.delete(S[L]);
          zn(t, O.prev, re.next), zn(t, _, O), zn(t, re, D), g = D, _ = re, C -= 1, x = [], S = [];
        } else
          p.delete(I), qs(I, g, i), zn(t, I.prev, I.next), zn(t, I, _ === null ? t.first : _.next), zn(t, _, I), _ = I;
        continue;
      }
      for (x = [], S = []; g !== null && g.k !== w; )
        g.e.f & Un || (p ?? (p = /* @__PURE__ */ new Set())).add(g), S.push(g), g = g.next;
      if (g === null)
        continue;
      I = g;
    }
    x.push(I), _ = I, g = I.next;
  }
  if (g !== null || p !== void 0) {
    for (var U = p === void 0 ? [] : Po(p); g !== null; )
      g.e.f & Un || U.push(g), g = g.next;
    var Z = U.length;
    if (Z > 0) {
      var H = s & 4 && v === 0 ? i : null;
      if (c) {
        for (C = 0; C < Z; C += 1)
          (ee = U[C].a) == null || ee.measure();
        for (C = 0; C < Z; C += 1)
          (ie = U[C].a) == null || ie.fix();
      }
      Cf(t, U, H);
    }
  }
  c && Ir(() => {
    var be;
    if (y !== void 0)
      for (I of y)
        (be = I.a) == null || be.apply();
  }), n.first = t.first && t.first.e, n.last = _ && _.e;
  for (var J of r.values())
    Dt(J.e);
  r.clear();
}
function Xd(n, e, t, r) {
  r & 1 && Qi(n.v, e), r & 2 ? Qi(
    /** @type {Value<number>} */
    n.i,
    t
  ) : n.i = t;
}
function Yd(n, e, t, r, i, a, s, u, l, c, d) {
  var v = hi, f = (l & 1) !== 0, h = (l & 16) === 0, g = f ? h ? /* @__PURE__ */ wd(i, !1, !1) : Ii(i) : i, p = l & 2 ? Ii(s) : s, _ = {
    i: p,
    v: g,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: t,
    next: r
  };
  hi = _;
  try {
    if (n === null) {
      var y = document.createDocumentFragment();
      y.append(n = Cr());
    }
    return _.e = Vt(() => u(
      /** @type {Node} */
      n,
      g,
      p,
      c
    ), Ec), _.e.prev = t && t.e, _.e.next = r && r.e, t === null ? d || (e.first = _) : (t.next = _, t.e.next = _.e), r !== null && (r.prev = _, r.e.prev = _.e), _;
  } finally {
    hi = v;
  }
}
function qs(n, e, t) {
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
      /* @__PURE__ */ Pa(a)
    );
    i.before(a), a = s;
  }
}
function zn(n, e, t) {
  e === null ? n.first = t : (e.next = t, e.e.next = t && t.e), t !== null && (t.prev = e, t.e.prev = e && e.e);
}
function Ga(n, e, t) {
  var r = n, i, a, s = null, u = null;
  function l() {
    a && (Zr(a), a = null), s && (s.lastChild.remove(), r.before(s), s = null), a = u, u = null;
  }
  Ar(() => {
    if (i !== (i = e())) {
      var c = Vo();
      if (i) {
        var d = r;
        c && (s = document.createDocumentFragment(), s.append(d = Cr()), a && Ye.skipped_effects.add(a)), u = Vt(() => t(d, i));
      }
      c ? Ye.add_callback(l) : l();
    }
  }, Ci);
}
function bo(n, e, t, r, i, a) {
  var s, u, l = null, c = (
    /** @type {TemplateNode} */
    n
  ), d, v = hi;
  Ar(() => {
    const f = e() || null;
    var h = f === "svg" ? ac : null;
    if (f !== s) {
      var g = hi;
      Cl(v), d && (f === null ? Zr(d, () => {
        d = null, u = null;
      }) : f === u ? Rs(d) : Dt(d)), f && f !== u && (d = Vt(() => {
        if (l = h ? document.createElementNS(h, f) : document.createElement(f), $i(l, l), r) {
          var p = (
            /** @type {TemplateNode} */
            l.appendChild(Cr())
          );
          r(l, p);
        }
        Pe.nodes_end = l, c.before(l);
      })), s = f, s && (u = s), Cl(g);
    }
  }, Ci);
}
function De(n, e, t) {
  ka(() => {
    var r = Xr(() => e(n, t == null ? void 0 : t()) || {});
    if (t && (r != null && r.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      Ls(() => {
        var s = t();
        of(s), i && Bo(a, s) && (a = s, r.update(s));
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
  Ar(() => {
    t !== (t = e()) && (r && (Dt(r), r = null), t && (r = Vt(() => {
      ka(() => (
        /** @type {(node: Element) => void} */
        t(n)
      ));
    })));
  });
}
function qd(n) {
  var e, t, r = "";
  if (typeof n == "string" || typeof n == "number") r += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var i = n.length;
    for (e = 0; e < i; e++) n[e] && (t = qd(n[e])) && (r && (r += " "), r += t);
  } else for (t in n) n[t] && (r && (r += " "), r += t);
  return r;
}
function Sf() {
  for (var n, e, t = 0, r = "", i = arguments.length; t < i; t++) (n = arguments[t]) && (e = qd(n)) && (r && (r += " "), r += e);
  return r;
}
function Kd(n) {
  return typeof n == "object" ? Sf(n) : n ?? "";
}
const Al = [...` 	
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
          (s === 0 || Al.includes(r[s - 1])) && (u === r.length || Al.includes(r[u])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(u + 1) : s = u;
        }
  }
  return r === "" ? null : r;
}
function El(n, e = !1) {
  var t = e ? " !important;" : ";", r = "";
  for (var i in n) {
    var a = n[i];
    a != null && a !== "" && (r += " " + i + ": " + a + t);
  }
  return r;
}
function Ks(n) {
  return n[0] !== "-" || n[1] !== "-" ? n.toLowerCase() : n;
}
function wf(n, e) {
  if (e) {
    var t = "", r, i;
    if (Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, n) {
      n = String(n).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, s = 0, u = !1, l = [];
      r && l.push(...Object.keys(r).map(Ks)), i && l.push(...Object.keys(i).map(Ks));
      var c = 0, d = -1;
      const p = n.length;
      for (var v = 0; v < p; v++) {
        var f = n[v];
        if (u ? f === "/" && n[v - 1] === "*" && (u = !1) : a ? a === f && (a = !1) : f === "/" && n[v + 1] === "*" ? u = !0 : f === '"' || f === "'" ? a = f : f === "(" ? s++ : f === ")" && s--, !u && a === !1 && s === 0) {
          if (f === ":" && d === -1)
            d = v;
          else if (f === ";" || v === p - 1) {
            if (d !== -1) {
              var h = Ks(n.substring(c, d).trim());
              if (!l.includes(h)) {
                f !== ";" && v++;
                var g = n.substring(c, v).trim();
                t += " " + g + ";";
              }
            }
            c = v + 1, d = -1;
          }
        }
      }
    }
    return r && (t += El(r)), i && (t += El(i, !0)), t = t.trim(), t === "" ? null : t;
  }
  return n == null ? null : String(n);
}
function _r(n, e, t, r, i, a) {
  var s = n.__className;
  if (s !== t || s === void 0) {
    var u = xf(t, r, a);
    u == null ? n.removeAttribute("class") : e ? n.className = u : n.setAttribute("class", u), n.__className = t;
  } else if (a && i !== a)
    for (var l in a) {
      var c = !!a[l];
      (i == null || c !== !!i[l]) && n.classList.toggle(l, c);
    }
  return a;
}
function Qs(n, e = {}, t, r) {
  for (var i in t) {
    var a = t[i];
    e[i] !== a && (t[i] == null ? n.style.removeProperty(i) : n.style.setProperty(i, a, r));
  }
}
function qe(n, e, t, r) {
  var i = n.__style;
  if (i !== e) {
    var a = wf(e, r);
    a == null ? n.removeAttribute("style") : n.style.cssText = a, n.__style = e;
  } else r && (Array.isArray(r) ? (Qs(n, t == null ? void 0 : t[0], r[0]), Qs(n, t == null ? void 0 : t[1], r[1], "important")) : Qs(n, t, r));
  return r;
}
function _o(n, e, t = !1) {
  if (n.multiple) {
    if (e == null)
      return;
    if (!Ma(e))
      return Cc();
    for (var r of n.options)
      r.selected = e.includes(Sl(r));
    return;
  }
  for (r of n.options) {
    var i = Sl(r);
    if (Uc(i, e)) {
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
  }), Ds(() => {
    e.disconnect();
  });
}
function Sl(n) {
  return "__value" in n ? n.__value : n.value;
}
const va = Symbol("class"), ha = Symbol("style"), Qd = Symbol("is custom element"), Jd = Symbol("is html");
function xl(n, e) {
  var t = Yo(n);
  t.value === (t.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  n.value === e && (e !== 0 || n.nodeName !== "PROGRESS") || (n.value = e ?? "");
}
function Df(n, e) {
  e ? n.hasAttribute("selected") || n.setAttribute("selected", "") : n.removeAttribute("selected");
}
function mt(n, e, t, r) {
  var i = Yo(n);
  i[e] !== (i[e] = t) && (e === "loading" && (n[cc] = t), t == null ? n.removeAttribute(e) : typeof t != "string" && $d(n).includes(e) ? n[e] = t : n.setAttribute(e, t));
}
function Lf(n, e, t, r, i = !1, a = !1) {
  var s = Yo(n), u = s[Qd], l = !s[Jd], c = e || {}, d = n.tagName === "OPTION";
  for (var v in e)
    v in t || (t[v] = null);
  t.class ? t.class = Kd(t.class) : t[va] && (t.class = null), t[ha] && (t.style ?? (t.style = null));
  var f = $d(n);
  for (const S in t) {
    let A = t[S];
    if (d && S === "value" && A == null) {
      n.value = n.__value = "", c[S] = A;
      continue;
    }
    if (S === "class") {
      var h = n.namespaceURI === "http://www.w3.org/1999/xhtml";
      _r(n, h, A, r, e == null ? void 0 : e[va], t[va]), c[S] = A, c[va] = t[va];
      continue;
    }
    if (S === "style") {
      qe(n, A, e == null ? void 0 : e[ha], t[ha]), c[S] = A, c[ha] = t[ha];
      continue;
    }
    var g = c[S];
    if (!(A === g && !(A === void 0 && n.hasAttribute(S)))) {
      c[S] = A;
      var p = S[0] + S[1];
      if (p !== "$$")
        if (p === "on") {
          const w = {}, I = "$$" + S;
          let C = S.slice(2);
          var _ = vf(C);
          if (cf(C) && (C = C.slice(0, -7), w.capture = !0), !_ && g) {
            if (A != null) continue;
            n.removeEventListener(C, c[I], w), c[I] = null;
          }
          if (A != null)
            if (_)
              n[`__${C}`] = A, pt([C]);
            else {
              let b = function(T) {
                c[S].call(this, T);
              };
              c[I] = Xo(C, n, b, w);
            }
          else _ && (n[`__${C}`] = void 0);
        } else if (S === "style")
          mt(n, S, A);
        else if (S === "autofocus")
          zc(
            /** @type {HTMLElement} */
            n,
            !!A
          );
        else if (!u && (S === "__value" || S === "value" && A != null))
          n.value = n.__value = A;
        else if (S === "selected" && d)
          Df(
            /** @type {HTMLOptionElement} */
            n,
            A
          );
        else {
          var y = S;
          l || (y = gf(y));
          var x = y === "defaultValue" || y === "defaultChecked";
          if (A == null && !u && !x)
            if (s[S] = null, y === "value" || y === "checked") {
              let w = (
                /** @type {HTMLInputElement} */
                n
              );
              const I = e === void 0;
              if (y === "value") {
                let C = w.defaultValue;
                w.removeAttribute(y), w.defaultValue = C, w.value = w.__value = I ? C : null;
              } else {
                let C = w.defaultChecked;
                w.removeAttribute(y), w.defaultChecked = C, w.checked = I ? C : !1;
              }
            } else
              n.removeAttribute(S);
          else x || f.includes(y) && (u || typeof A != "string") ? (n[y] = A, y in s && (s[y] = xt)) : typeof A != "function" && mt(n, y, A);
        }
    }
  }
  return c;
}
function He(n, e, t = [], r = [], i, a = !1, s = !1) {
  Ed(t, r, (u) => {
    var l = void 0, c = {}, d = n.nodeName === "SELECT", v = !1;
    if (Ar(() => {
      var h = e(...u.map(o)), g = Lf(
        n,
        l,
        h,
        i,
        a,
        s
      );
      v && d && "value" in h && _o(
        /** @type {HTMLSelectElement} */
        n,
        h.value
      );
      for (let _ of Object.getOwnPropertySymbols(c))
        h[_] || Dt(c[_]);
      for (let _ of Object.getOwnPropertySymbols(h)) {
        var p = h[_];
        _.description === sc && (!l || p !== l[_]) && (c[_] && Dt(c[_]), c[_] = Vt(() => Ef(n, () => p))), g[_] = p;
      }
      l = g;
    }), d) {
      var f = (
        /** @type {HTMLSelectElement} */
        n
      );
      ka(() => {
        _o(
          f,
          /** @type {Record<string | symbol, any>} */
          l.value,
          !0
        ), Tf(f);
      });
    }
    v = !0;
  });
}
function Yo(n) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    n.__attributes ?? (n.__attributes = {
      [Qd]: n.nodeName.includes("-"),
      [Jd]: n.namespaceURI === ic
    })
  );
}
var wl = /* @__PURE__ */ new Map();
function $d(n) {
  var e = n.getAttribute("is") || n.nodeName, t = wl.get(e);
  if (t) return t;
  wl.set(e, t = []);
  for (var r, i = n, a = Element.prototype; a !== i; ) {
    r = ud(i);
    for (var s in r)
      r[s].set && t.push(s);
    i = As(i);
  }
  return t;
}
const Rf = () => performance.now(), hr = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (n) => requestAnimationFrame(n)
  ),
  now: () => Rf(),
  tasks: /* @__PURE__ */ new Set()
};
function eu() {
  const n = hr.now();
  hr.tasks.forEach((e) => {
    e.c(n) || (hr.tasks.delete(e), e.f());
  }), hr.tasks.size !== 0 && hr.tick(eu);
}
function Of(n) {
  let e;
  return hr.tasks.size === 0 && hr.tick(eu), {
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
function Tl(n) {
  const e = {}, t = n.split(";");
  for (const r of t) {
    const [i, a] = r.split(":");
    if (!i || a === void 0) break;
    const s = Mf(i.trim());
    e[s] = a.trim();
  }
  return e;
}
const Ff = (n) => n;
function Ms(n, e, t) {
  var r = (
    /** @type {EachItem} */
    hi
  ), i, a, s, u = null;
  r.a ?? (r.a = {
    element: n,
    measure() {
      i = this.element.getBoundingClientRect();
    },
    apply() {
      if (s == null || s.abort(), a = this.element.getBoundingClientRect(), i.left !== a.left || i.right !== a.right || i.top !== a.top || i.bottom !== a.bottom) {
        const l = e()(this.element, { from: i, to: a }, t == null ? void 0 : t());
        s = tu(this.element, l, void 0, 1, () => {
          s == null || s.abort(), s = void 0;
        });
      }
    },
    fix() {
      if (!n.getAnimations().length) {
        var { position: l, width: c, height: d } = getComputedStyle(n);
        if (l !== "absolute" && l !== "fixed") {
          var v = (
            /** @type {HTMLElement | SVGElement} */
            n.style
          );
          u = {
            position: v.position,
            width: v.width,
            height: v.height,
            transform: v.transform
          }, v.position = "absolute", v.width = c, v.height = d;
          var f = n.getBoundingClientRect();
          if (i.left !== f.left || i.top !== f.top) {
            var h = `translate(${i.left - f.left}px, ${i.top - f.top}px)`;
            v.transform = v.transform ? `${v.transform} ${h}` : h;
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
function tu(n, e, t, r, i) {
  if (Fi(e)) {
    var a, s = !1;
    return Ir(() => {
      if (!s) {
        var p = e({ direction: "in" });
        a = tu(n, p, t, r, i);
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
      abort: Ie,
      deactivate: Ie,
      reset: Ie,
      t: () => r
    };
  const { delay: u = 0, css: l, tick: c, easing: d = Ff } = e;
  var v = [];
  if (c && c(0, 1), l) {
    var f = Tl(l(0, 1));
    v.push(f, f);
  }
  var h = () => 1 - r, g = n.animate(v, { duration: u, fill: "forwards" });
  return g.onfinish = () => {
    g.cancel();
    var p = 1 - r, _ = r - p, y = (
      /** @type {number} */
      e.duration * Math.abs(_)
    ), x = [];
    if (y > 0) {
      var S = !1;
      if (l)
        for (var A = Math.ceil(y / 16.666666666666668), w = 0; w <= A; w += 1) {
          var I = p + _ * d(w / A), C = Tl(l(I, 1 - I));
          x.push(C), S || (S = C.overflow === "hidden");
        }
      S && (n.style.overflow = "hidden"), h = () => {
        var b = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          g.currentTime
        );
        return p + _ * d(b / y);
      }, c && Of(() => {
        if (g.playState !== "running") return !1;
        var b = h();
        return c(b, 1 - b), !0;
      });
    }
    g = n.animate(x, { duration: y, fill: "forwards" }), g.onfinish = () => {
      h = () => r, c == null || c(r, 1 - r), i();
    };
  }, {
    abort: () => {
      g && (g.cancel(), g.effect = null, g.onfinish = Ie);
    },
    deactivate: () => {
      i = Ie;
    },
    reset: () => {
    },
    t: () => h()
  };
}
function Pf(n, e, t = e) {
  var r = /* @__PURE__ */ new WeakSet();
  Yc(n, "input", async (i) => {
    var a = i ? n.defaultValue : n.value;
    if (a = Js(n) ? $s(a) : a, t(a), Ye !== null && r.add(Ye), await Ud(), a !== (a = e())) {
      var s = n.selectionStart, u = n.selectionEnd, l = n.value.length;
      if (n.value = a ?? "", u !== null) {
        var c = n.value.length;
        s === u && u === l && c > l ? (n.selectionStart = c, n.selectionEnd = c) : (n.selectionStart = s, n.selectionEnd = Math.min(u, c));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Xr(e) == null && n.value && (t(Js(n) ? $s(n.value) : n.value), Ye !== null && r.add(Ye)), Ls(() => {
    var i = e();
    if (n === document.activeElement) {
      var a = (
        /** @type {Batch} */
        ts ?? Ye
      );
      if (r.has(a))
        return;
    }
    Js(n) && i === $s(n.value) || n.type === "date" && !i && !n.value || i !== n.value && (n.value = i ?? "");
  });
}
function Js(n) {
  var e = n.type;
  return e === "number" || e === "range";
}
function $s(n) {
  return n === "" ? null : +n;
}
function Dl(n, e) {
  return n === e || (n == null ? void 0 : n[nr]) === e;
}
function xe(n = {}, e, t, r) {
  return ka(() => {
    var i, a;
    return Ls(() => {
      i = a, a = [], Xr(() => {
        n !== t(...a) && (e(n, ...a), i && Dl(t(...i), n) && e(null, ...i));
      });
    }), () => {
      Ir(() => {
        a && Dl(t(...a), n) && e(null, ...a);
      });
    };
  }), n;
}
function nu(n, e, t) {
  if (n == null)
    return e(void 0), Ie;
  const r = Xr(
    () => n.subscribe(
      e,
      // @ts-expect-error
      t
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const Ri = [];
function jn(n, e = Ie) {
  let t = null;
  const r = /* @__PURE__ */ new Set();
  function i(u) {
    if (Bo(n, u) && (n = u, t)) {
      const l = !Ri.length;
      for (const c of r)
        c[1](), Ri.push(c, n);
      if (l) {
        for (let c = 0; c < Ri.length; c += 2)
          Ri[c][0](Ri[c + 1]);
        Ri.length = 0;
      }
    }
  }
  function a(u) {
    i(u(
      /** @type {T} */
      n
    ));
  }
  function s(u, l = Ie) {
    const c = [u, l];
    return r.add(c), r.size === 1 && (t = e(i, a) || Ie), u(
      /** @type {T} */
      n
    ), () => {
      r.delete(c), r.size === 0 && t && (t(), t = null);
    };
  }
  return { set: i, update: a, subscribe: s };
}
function kf(n) {
  let e;
  return nu(n, (t) => e = t)(), e;
}
let za = !1, yo = Symbol();
function bi(n, e, t) {
  const r = t[e] ?? (t[e] = {
    store: null,
    source: /* @__PURE__ */ wd(void 0),
    unsubscribe: Ie
  });
  if (r.store !== n && !(yo in t))
    if (r.unsubscribe(), r.store = n ?? null, n == null)
      r.source.v = void 0, r.unsubscribe = Ie;
    else {
      var i = !0;
      r.unsubscribe = nu(n, (a) => {
        i ? r.source.v = a : W(r.source, a);
      }), i = !1;
    }
  return n && yo in t ? kf(n) : o(r.source);
}
function tr(n, e) {
  return n.set(e), e;
}
function Si() {
  const n = {};
  function e() {
    Ds(() => {
      for (var t in n)
        n[t].unsubscribe();
      ls(n, yo, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [n, e];
}
function Gf(n) {
  var e = za;
  try {
    return za = !1, [n(), za];
  } finally {
    za = e;
  }
}
const Nf = {
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
function Ve(n, e, t) {
  return new Proxy(
    { props: n, exclude: e },
    Nf
  );
}
const Zf = {
  get(n, e) {
    let t = n.props.length;
    for (; t--; ) {
      let r = n.props[t];
      if (Fi(r) && (r = r()), typeof r == "object" && r !== null && e in r) return r[e];
    }
  },
  set(n, e, t) {
    let r = n.props.length;
    for (; r--; ) {
      let i = n.props[r];
      Fi(i) && (i = i());
      const a = Gr(i, e);
      if (a && a.set)
        return a.set(t), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(n, e) {
    let t = n.props.length;
    for (; t--; ) {
      let r = n.props[t];
      if (Fi(r) && (r = r()), typeof r == "object" && r !== null && e in r) {
        const i = Gr(r, e);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(n, e) {
    if (e === nr || e === hd) return !1;
    for (let t of n.props)
      if (Fi(t) && (t = t()), t != null && e in t) return !0;
    return !1;
  },
  ownKeys(n) {
    const e = [];
    for (let t of n.props)
      if (Fi(t) && (t = t()), !!t) {
        for (const r in t)
          e.includes(r) || e.push(r);
        for (const r of Object.getOwnPropertySymbols(t))
          e.includes(r) || e.push(r);
      }
    return e;
  }
};
function Qe(...n) {
  return new Proxy({ props: n }, Zf);
}
function m(n, e, t, r) {
  var S;
  var i = !ia || (t & 2) !== 0, a = (t & 8) !== 0, s = (t & 16) !== 0, u = (
    /** @type {V} */
    r
  ), l = !0, c = () => (l && (l = !1, u = s ? Xr(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), u), d;
  if (a) {
    var v = nr in n || hd in n;
    d = ((S = Gr(n, e)) == null ? void 0 : S.set) ?? (v && e in n ? (A) => n[e] = A : void 0);
  }
  var f, h = !1;
  a ? [f, h] = Gf(() => (
    /** @type {V} */
    n[e]
  )) : f = /** @type {V} */
  n[e], f === void 0 && r !== void 0 && (f = c(), d && (i && pc(), d(f)));
  var g;
  if (i ? g = () => {
    var A = (
      /** @type {V} */
      n[e]
    );
    return A === void 0 ? c() : (l = !0, A);
  } : g = () => {
    var A = (
      /** @type {V} */
      n[e]
    );
    return A !== void 0 && (u = /** @type {V} */
    void 0), A === void 0 ? u : A;
  }, i && !(t & 4))
    return g;
  if (d) {
    var p = n.$$legacy;
    return (
      /** @type {() => V} */
      function(A, w) {
        return arguments.length > 0 ? ((!i || !w || p || h) && d(w ? g() : A), A) : g();
      }
    );
  }
  var _ = !1, y = (t & 1 ? ws : Wo)(() => (_ = !1, g()));
  a && o(y);
  var x = (
    /** @type {Effect} */
    Pe
  );
  return (
    /** @type {() => V} */
    function(A, w) {
      if (arguments.length > 0) {
        const I = w ? o(y) : i && a ? Ce(A) : A;
        return W(y, I), _ = !0, u !== void 0 && (u = I), A;
      }
      return Ei && _ || x.f & yi ? y.v : o(y);
    }
  );
}
const Hf = "5";
var ld;
typeof window < "u" && ((ld = window.__svelte ?? (window.__svelte = {})).v ?? (ld.v = /* @__PURE__ */ new Set())).add(Hf);
var Co = function(n, e) {
  return Co = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
  }, Co(n, e);
};
function In(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Co(n, e);
  function t() {
    this.constructor = n;
  }
  n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var je = function() {
  return je = Object.assign || function(e) {
    for (var t, r = 1, i = arguments.length; r < i; r++) {
      t = arguments[r];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, je.apply(this, arguments);
};
function Bf(n, e, t, r) {
  function i(a) {
    return a instanceof t ? a : new t(function(s) {
      s(a);
    });
  }
  return new (t || (t = Promise))(function(a, s) {
    function u(d) {
      try {
        c(r.next(d));
      } catch (v) {
        s(v);
      }
    }
    function l(d) {
      try {
        c(r.throw(d));
      } catch (v) {
        s(v);
      }
    }
    function c(d) {
      d.done ? a(d.value) : i(d.value).then(u, l);
    }
    c((r = r.apply(n, e || [])).next());
  });
}
function Wf(n, e) {
  var t = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, i, a, s = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return s.next = u(0), s.throw = u(1), s.return = u(2), typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function u(c) {
    return function(d) {
      return l([c, d]);
    };
  }
  function l(c) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, c[0] && (t = 0)), t; ) try {
      if (r = 1, i && (a = c[0] & 2 ? i.return : c[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, c[1])).done) return a;
      switch (i = 0, a && (c = [c[0] & 2, a.value]), c[0]) {
        case 0:
        case 1:
          a = c;
          break;
        case 4:
          return t.label++, { value: c[1], done: !1 };
        case 5:
          t.label++, i = c[1], c = [0];
          continue;
        case 7:
          c = t.ops.pop(), t.trys.pop();
          continue;
        default:
          if (a = t.trys, !(a = a.length > 0 && a[a.length - 1]) && (c[0] === 6 || c[0] === 2)) {
            t = 0;
            continue;
          }
          if (c[0] === 3 && (!a || c[1] > a[0] && c[1] < a[3])) {
            t.label = c[1];
            break;
          }
          if (c[0] === 6 && t.label < a[1]) {
            t.label = a[1], a = c;
            break;
          }
          if (a && t.label < a[2]) {
            t.label = a[2], t.ops.push(c);
            break;
          }
          a[2] && t.ops.pop(), t.trys.pop();
          continue;
      }
      c = e.call(n, t);
    } catch (d) {
      c = [6, d], i = 0;
    } finally {
      r = a = 0;
    }
    if (c[0] & 5) throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function Bn(n) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && n[e], r = 0;
  if (t) return t.call(n);
  if (n && typeof n.length == "number") return {
    next: function() {
      return n && r >= n.length && (n = void 0), { value: n && n[r++], done: !n };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Ll(n, e) {
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
function Uf(n, e, t) {
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
var bn = (
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
function jf(n) {
  return n === void 0 && (n = window), Vf(n) ? { passive: !0 } : !1;
}
function Vf(n) {
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
const ru = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: jf
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
function zf(n, e) {
  if (n.closest)
    return n.closest(e);
  for (var t = n; t; ) {
    if (iu(t, e))
      return t;
    t = t.parentElement;
  }
  return null;
}
function iu(n, e) {
  var t = n.matches || n.webkitMatchesSelector || n.msMatchesSelector;
  return t.call(n, e);
}
function Xf(n) {
  var e = n;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var t = e.cloneNode(!0);
  t.style.setProperty("position", "absolute"), t.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(t);
  var r = t.scrollWidth;
  return document.documentElement.removeChild(t), r;
}
const Na = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: zf,
  estimateScrollWidth: Xf,
  matches: iu
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
var Yf = {
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
var qf = (
  /** @class */
  function(n) {
    In(e, n);
    function e(t) {
      var r = n.call(this, je(je({}, e.defaultAdapter), t)) || this;
      return r.shakeAnimationEndHandler = function() {
        r.handleShakeAnimationEnd();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Yf;
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
  }(bn)
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
var Kf = (
  /** @class */
  function(n) {
    In(e, n);
    function e(t) {
      var r = n.call(this, je(je({}, e.defaultAdapter), t)) || this;
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
  }(bn)
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
var Qf = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Rl = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, Jf = {
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
    In(e, n);
    function e(t) {
      return n.call(this, je(je({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Qf;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Jf;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Rl;
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
      t > 0 && (t += Rl.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(t), this.adapter.addClass(r);
    }, e.prototype.closeNotch = function() {
      var t = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(t), this.adapter.removeNotchWidthProperty();
    }, e;
  }(bn)
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
var ev = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, tv = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Ol = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
}, Xa;
function nv(n, e) {
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
function rv(n, e, t) {
  if (!n)
    return { x: 0, y: 0 };
  var r = e.x, i = e.y, a = r + t.left, s = i + t.top, u, l;
  if (n.type === "touchstart") {
    var c = n;
    u = c.changedTouches[0].pageX - a, l = c.changedTouches[0].pageY - s;
  } else {
    var d = n;
    u = d.pageX - a, l = d.pageY - s;
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
var Ml = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Fl = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Ya = [], iv = (
  /** @class */
  function(n) {
    In(e, n);
    function e(t) {
      var r = n.call(this, je(je({}, e.defaultAdapter), t)) || this;
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
        return ev;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return tv;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Ol;
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
          for (var a = Bn(Ml), s = a.next(); !s.done; s = a.next()) {
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
          for (var a = Bn(Fl), s = a.next(); !s.done; s = a.next()) {
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
        for (var i = Bn(Ml), a = i.next(); !a.done; a = i.next()) {
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
        for (var i = Bn(Fl), a = i.next(); !a.done; a = i.next()) {
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
            var u = t !== void 0 && Ya.length > 0 && Ya.some(function(l) {
              return r.adapter.containsEventTarget(l);
            });
            if (u) {
              this.resetActivationState();
              return;
            }
            t !== void 0 && (Ya.push(t.target), this.registerDeactivationHandlers(t)), i.wasElementMadeActive = this.checkElementMadeActive(t), i.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Ya = [], !i.wasElementMadeActive && t !== void 0 && (t.key === " " || t.keyCode === 32) && (i.wasElementMadeActive = r.checkElementMadeActive(t), i.wasElementMadeActive && r.animateActivation()), i.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(t) {
      return t !== void 0 && t.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var t = this, r = e.strings, i = r.VAR_FG_TRANSLATE_START, a = r.VAR_FG_TRANSLATE_END, s = e.cssClasses, u = s.FG_DEACTIVATION, l = s.FG_ACTIVATION, c = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var d = "", v = "";
      if (!this.adapter.isUnbounded()) {
        var f = this.getFgTranslationCoordinates(), h = f.startPoint, g = f.endPoint;
        d = h.x + "px, " + h.y + "px", v = g.x + "px, " + g.y + "px";
      }
      this.adapter.updateCssVariable(i, d), this.adapter.updateCssVariable(a, v), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(u), this.adapter.computeBoundingRect(), this.adapter.addClass(l), this.activationTimer = setTimeout(function() {
        t.activationTimerCallback();
      }, c);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var t = this.activationState, r = t.activationEvent, i = t.wasActivatedByPointer, a;
      i ? a = rv(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
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
      }, Ol.FG_DEACTIVATION_MS));
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
        var i = je({}, r);
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
  }(bn)
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
var eo = {
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
}, av = {
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
}, Pl = {
  LABEL_SCALE: 0.75
}, sv = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], ov = [
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
var kl = ["mousedown", "touchstart"], Gl = ["click", "keydown"], lv = (
  /** @class */
  function(n) {
    In(e, n);
    function e(t, r) {
      r === void 0 && (r = {});
      var i = n.call(this, je(je({}, e.defaultAdapter), t)) || this;
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
        return av;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return eo;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Pl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var t = this.getNativeInput().type;
        return ov.indexOf(t) >= 0;
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
        for (var s = Bn(kl), u = s.next(); !u.done; u = s.next()) {
          var l = u.value;
          this.adapter.registerInputInteractionHandler(l, this.setPointerXOffset);
        }
      } catch (v) {
        t = { error: v };
      } finally {
        try {
          u && !u.done && (r = s.return) && r.call(s);
        } finally {
          if (t) throw t.error;
        }
      }
      try {
        for (var c = Bn(Gl), d = c.next(); !d.done; d = c.next()) {
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
      var t, r, i, a;
      this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var s = Bn(kl), u = s.next(); !u.done; u = s.next()) {
          var l = u.value;
          this.adapter.deregisterInputInteractionHandler(l, this.setPointerXOffset);
        }
      } catch (v) {
        t = { error: v };
      } finally {
        try {
          u && !u.done && (r = s.return) && r.call(s);
        } finally {
          if (t) throw t.error;
        }
      }
      try {
        for (var c = Bn(Gl), d = c.next(); !d.done; d = c.next()) {
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
      var t = this.adapter.getNativeInput();
      t && t.disabled || (this.receivedUserInput = !0);
    }, e.prototype.handleValidationAttributeChange = function(t) {
      var r = this;
      t.some(function(i) {
        return sv.indexOf(i) > -1 ? (r.styleValidity(!0), r.adapter.setLabelRequired(r.getNativeInput().required), !0) : !1;
      }), t.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(t) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (t) {
          var r = this.adapter.getLabelWidth() * Pl.LABEL_SCALE;
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
        a && s ? this.adapter.setInputAttr(eo.ARIA_DESCRIBEDBY, s) : this.adapter.removeInputAttr(eo.ARIA_DESCRIBEDBY);
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
  }(bn)
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
var Nl = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, dv = {
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
var Zl = ["click", "keydown"], uv = (
  /** @class */
  function(n) {
    In(e, n);
    function e(t) {
      var r = n.call(this, je(je({}, e.defaultAdapter), t)) || this;
      return r.savedTabIndex = null, r.interactionHandler = function(i) {
        r.handleInteraction(i);
      }, r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Nl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return dv;
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
        for (var i = Bn(Zl), a = i.next(); !a.done; a = i.next()) {
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
        for (var i = Bn(Zl), a = i.next(); !a.done; a = i.next()) {
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
      this.savedTabIndex && (t ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", Nl.ICON_ROLE)));
    }, e.prototype.setAriaLabel = function(t) {
      this.adapter.setAttr("aria-label", t);
    }, e.prototype.setContent = function(t) {
      this.adapter.setContent(t);
    }, e.prototype.handleInteraction = function(t) {
      var r = t.key === "Enter" || t.keyCode === 13;
      (t.type === "click" || r) && (t.preventDefault(), this.adapter.notifyIconAction());
    }, e;
  }(bn)
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
var to = "mdc-dom-focus-sentinel", cv = (
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
      [].slice.call(this.root.querySelectorAll("." + to)).forEach(function(e) {
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
        var i = r.getAttribute("aria-disabled") === "true" || r.getAttribute("disabled") != null || r.getAttribute("hidden") != null || r.getAttribute("aria-hidden") === "true", a = r.tabIndex >= 0 && r.getBoundingClientRect().width > 0 && !r.classList.contains(to) && !i, s = !1;
        if (a) {
          var u = getComputedStyle(r);
          s = u.display === "none" || u.visibility === "hidden";
        }
        return a && !s;
      });
    }, n.prototype.createSentinel = function() {
      var e = document.createElement("div");
      return e.setAttribute("tabindex", "0"), e.setAttribute("aria-hidden", "true"), e.classList.add(to), e;
    }, n;
  }()
);
const fv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FocusTrap: cv
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
var Le = {
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
nn.add(Le.BACKSPACE);
nn.add(Le.ENTER);
nn.add(Le.SPACEBAR);
nn.add(Le.PAGE_UP);
nn.add(Le.PAGE_DOWN);
nn.add(Le.END);
nn.add(Le.HOME);
nn.add(Le.ARROW_LEFT);
nn.add(Le.ARROW_UP);
nn.add(Le.ARROW_RIGHT);
nn.add(Le.ARROW_DOWN);
nn.add(Le.DELETE);
nn.add(Le.ESCAPE);
nn.add(Le.TAB);
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
}, rn = /* @__PURE__ */ new Map();
rn.set(fn.BACKSPACE, Le.BACKSPACE);
rn.set(fn.ENTER, Le.ENTER);
rn.set(fn.SPACEBAR, Le.SPACEBAR);
rn.set(fn.PAGE_UP, Le.PAGE_UP);
rn.set(fn.PAGE_DOWN, Le.PAGE_DOWN);
rn.set(fn.END, Le.END);
rn.set(fn.HOME, Le.HOME);
rn.set(fn.ARROW_LEFT, Le.ARROW_LEFT);
rn.set(fn.ARROW_UP, Le.ARROW_UP);
rn.set(fn.ARROW_RIGHT, Le.ARROW_RIGHT);
rn.set(fn.ARROW_DOWN, Le.ARROW_DOWN);
rn.set(fn.DELETE, Le.DELETE);
rn.set(fn.ESCAPE, Le.ESCAPE);
rn.set(fn.TAB, Le.TAB);
var Yr = /* @__PURE__ */ new Set();
Yr.add(Le.PAGE_UP);
Yr.add(Le.PAGE_DOWN);
Yr.add(Le.END);
Yr.add(Le.HOME);
Yr.add(Le.ARROW_LEFT);
Yr.add(Le.ARROW_UP);
Yr.add(Le.ARROW_RIGHT);
Yr.add(Le.ARROW_DOWN);
function _t(n) {
  var e = n.key;
  if (nn.has(e))
    return e;
  var t = rn.get(n.keyCode);
  return t || Le.UNKNOWN;
}
function Ze(n) {
  return Object.entries(n).filter(([e, t]) => e !== "" && t).map(([e]) => e).join(" ");
}
function Be(n, e, t, r = { bubbles: !0 }) {
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
function dt(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const r = {};
  for (let i = 0; i < t.length; i++) {
    const a = t[i];
    a.substring(0, e.length) === e && (r[a.substring(e.length)] = n[a]);
  }
  return r;
}
class aa {
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
function ae(n, e) {
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
var vv = /* @__PURE__ */ at("<svg><!></svg>");
function Fs(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "tag", 3, "div"), i = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
  const a = /* @__PURE__ */ ne(() => [
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
  var l = { getElement: u }, c = oe(), d = K(c);
  {
    var v = (h) => {
      var g = vv();
      He(g, () => ({ ...i }));
      var p = N(g);
      _e(p, () => e.children ?? Ie), xe(g, (_) => s = _, () => s), De(g, (_, y) => ae == null ? void 0 : ae(_, y), t), E(h, g);
    }, f = (h) => {
      var g = oe(), p = K(g);
      {
        var _ = (x) => {
          var S = oe(), A = K(S);
          bo(A, r, !1, (w, I) => {
            xe(w, (C) => s = C, () => s), De(w, (C, b) => ae == null ? void 0 : ae(C, b), t), He(w, () => ({ ...i }));
          }), E(x, S);
        }, y = (x) => {
          var S = oe(), A = K(S);
          bo(A, r, !1, (w, I) => {
            xe(w, (T) => s = T, () => s), De(w, (T, R) => ae == null ? void 0 : ae(T, R), t), He(w, () => ({ ...i }));
            var C = oe(), b = K(C);
            _e(b, () => e.children ?? Ie), E(I, C);
          }), E(x, S);
        };
        $(
          p,
          (x) => {
            o(a) ? x(_) : x(y, !1);
          },
          !0
        );
      }
      E(h, g);
    };
    $(d, (h) => {
      r() === "svg" ? h(v) : h(f, !1);
    });
  }
  return E(n, c), Ee(l);
}
function qa(n, e) {
  Ae(e, !0);
  const [t, r] = Si(), i = jn(e.value);
  ce(e.key, i), Se(() => {
    tr(i, e.value);
  }), Fn(() => {
    i.set(void 0);
  });
  var a = oe(), s = K(a);
  _e(s, () => e.children ?? Ie), E(n, a), Ee(), r();
}
const { applyPassive: Hl } = ru, { matches: hv } = Na;
function Gn(n, { ripple: e = !0, surface: t = !1, unbounded: r = !1, disabled: i = !1, color: a, active: s, rippleElement: u, eventTarget: l, activeTarget: c, addClass: d = (g) => n.classList.add(g), removeClass: v = (g) => n.classList.remove(g), addStyle: f = (g, p) => n.style.setProperty(g, p), initPromise: h = Promise.resolve() } = {}) {
  let g, p = new aa(), _ = ye("SMUI:addLayoutListener"), y, x = s, S = l, A = c;
  function w() {
    t ? (d("mdc-ripple-surface"), a === "primary" ? (d("smui-ripple-surface--primary"), v("smui-ripple-surface--secondary")) : a === "secondary" ? (v("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : (v("smui-ripple-surface--primary"), v("smui-ripple-surface--secondary"))) : (v("mdc-ripple-surface"), v("smui-ripple-surface--primary"), v("smui-ripple-surface--secondary")), g && x !== s && (x = s, s ? g.activate() : s === !1 && g.deactivate()), e && !g ? (g = new iv({
      addClass: d,
      browserSupportsCssVars: () => nv(window),
      computeBoundingRect: () => (u || n).getBoundingClientRect(),
      containsEventTarget: (C) => n.contains(C),
      deregisterDocumentInteractionHandler: (C, b) => p.off(document.documentElement, C, b),
      deregisterInteractionHandler: (C, b) => p.off(l || n, C, b),
      deregisterResizeHandler: (C) => window.removeEventListener("resize", C),
      getWindowPageOffset: () => {
        var C, b;
        return {
          x: (C = window.pageXOffset) !== null && C !== void 0 ? C : window.scrollX,
          y: (b = window.pageYOffset) !== null && b !== void 0 ? b : window.scrollY
        };
      },
      isSurfaceActive: () => s ?? hv(c || n, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!r,
      registerDocumentInteractionHandler: (C, b) => {
        const T = Hl();
        p.on(document.documentElement, C, b, typeof T == "boolean" ? { capture: T } : T);
      },
      registerInteractionHandler: (C, b) => {
        const T = Hl();
        p.on(l || n, C, b, typeof T == "boolean" ? { capture: T } : T);
      },
      registerResizeHandler: (C) => p.on(window, "resize", C),
      removeClass: v,
      updateCssVariable: f
    }), h.then(() => {
      g && (g.init(), g.setUnbounded(r));
    })) : g && !e && h.then(() => {
      g && (g.destroy(), g = void 0, p.clear());
    }), g && (S !== l || A !== c) && (S = l, A = c, g.destroy(), requestAnimationFrame(() => {
      g && (g.init(), g.setUnbounded(r));
    })), !e && r && d("mdc-ripple-upgraded--unbounded");
  }
  w(), _ && (y = _(I));
  function I() {
    g && g.layout();
  }
  return {
    update(C) {
      ({
        ripple: e,
        surface: t,
        unbounded: r,
        disabled: i,
        color: a,
        active: s,
        rippleElement: u,
        eventTarget: l,
        activeTarget: c,
        addClass: d,
        removeClass: v,
        addStyle: f,
        initPromise: h
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (b) => n.classList.add(b), removeClass: (b) => n.classList.remove(b), addStyle: (b, T) => n.style.setProperty(b, T), initPromise: Promise.resolve() }, C)), w();
    },
    destroy() {
      g && (g.destroy(), g = void 0, p.clear(), v("mdc-ripple-surface"), v("smui-ripple-surface--primary"), v("smui-ripple-surface--secondary")), y && y();
    }
  };
}
var gv = /* @__PURE__ */ X("<span><!></span>"), mv = /* @__PURE__ */ X("<label><!></label>");
function fs(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "floatAbove", 15, !1), s = m(e, "required", 15, !1), u = m(e, "wrapped", 3, !1), l = /* @__PURE__ */ Ve(e, [
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
  ]), c, d = /* @__PURE__ */ le(void 0), v = new aa(), f = Ce({}), h = Ce({}), g = ye("SMUI:generic:input:props") ?? {}, p = a();
  Se(() => {
    o(d) && p !== a() && (p = a(), o(d).float(a()));
  });
  let _ = s();
  Se(() => {
    o(d) && _ !== s() && (_ = s(), o(d).setRequired(s()));
  });
  const y = ye("SMUI:floating-label:mount"), x = ye("SMUI:floating-label:unmount");
  rt(() => {
    W(
      d,
      new qf({
        addClass: S,
        removeClass: A,
        getWidth: () => {
          var ee, ie;
          const J = D(), ue = J.cloneNode(!0);
          (ee = J.parentNode) == null || ee.appendChild(ue), ue.classList.add("smui-floating-label--remove-transition"), ue.classList.add("smui-floating-label--force-size"), ue.classList.remove("mdc-floating-label--float-above");
          const k = ue.scrollWidth;
          return (ie = J.parentNode) == null || ie.removeChild(ue), k;
        },
        registerInteractionHandler: (J, ue) => v.on(D(), J, ue),
        deregisterInteractionHandler: (J, ue) => v.off(D(), J, ue)
      }),
      !0
    );
    const H = {
      get element() {
        return D();
      },
      addStyle: w,
      removeStyle: I
    };
    return y && y(H), o(d).init(), () => {
      var J;
      x && x(H), (J = o(d)) == null || J.destroy(), v.clear();
    };
  });
  function S(H) {
    f[H] || (f[H] = !0);
  }
  function A(H) {
    (!(H in f) || f[H]) && (f[H] = !1);
  }
  function w(H, J) {
    h[H] != J && (J === "" || J == null ? delete h[H] : h[H] = J);
  }
  function I(H) {
    H in h && delete h[H];
  }
  function C(H) {
    var J;
    (J = o(d)) == null || J.shake(H);
  }
  function b(H) {
    a(H);
  }
  function T(H) {
    s(H);
  }
  function R() {
    if (o(d) == null)
      throw new Error("Instance is undefined.");
    return o(d).getWidth();
  }
  function D() {
    return c;
  }
  var L = { shake: C, float: b, setRequired: T, getWidth: R, getElement: D }, O = oe(), re = K(O);
  {
    var U = (H) => {
      var J = gv();
      He(J, (k, ee) => ({ class: k, style: ee, ...l }), [
        () => Ze({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": s(),
          ...f,
          [r()]: !0
        }),
        () => Object.entries(h).map(([k, ee]) => `${k}: ${ee};`).concat([i()]).join(" ")
      ]);
      var ue = N(J);
      _e(ue, () => e.children ?? Ie), xe(J, (k) => c = k, () => c), De(J, (k, ee) => ae == null ? void 0 : ae(k, ee), t), E(H, J);
    }, Z = (H) => {
      var J = mv();
      He(
        J,
        (k, ee) => ({
          class: k,
          style: ee,
          for: e.for || (g ? g.id : void 0),
          ...l
        }),
        [
          () => Ze({
            "mdc-floating-label": !0,
            "mdc-floating-label--float-above": a(),
            "mdc-floating-label--required": s(),
            ...f,
            [r()]: !0
          }),
          () => Object.entries(h).map(([k, ee]) => `${k}: ${ee};`).concat([i()]).join(" ")
        ]
      );
      var ue = N(J);
      _e(ue, () => e.children ?? Ie), xe(J, (k) => c = k, () => c), De(J, (k, ee) => ae == null ? void 0 : ae(k, ee), t), E(H, J);
    };
    $(re, (H) => {
      u() ? H(U) : H(Z, !1);
    });
  }
  return E(n, O), Ee(L);
}
var pv = /* @__PURE__ */ X("<div></div>");
function au(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "active", 3, !1), s = /* @__PURE__ */ Ve(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "active"
  ]), u, l = /* @__PURE__ */ le(void 0), c = new aa(), d = Ce({}), v = Ce({});
  rt(() => (W(
    l,
    new Kf({
      addClass: h,
      removeClass: g,
      hasClass: f,
      setStyle: p,
      registerEventHandler: (I, C) => c.on(S(), I, C),
      deregisterEventHandler: (I, C) => c.off(S(), I, C)
    }),
    !0
  ), o(l).init(), () => {
    var I;
    (I = o(l)) == null || I.destroy(), c.clear();
  }));
  function f(I) {
    return I in d ? d[I] : S().classList.contains(I);
  }
  function h(I) {
    d[I] || (d[I] = !0);
  }
  function g(I) {
    (!(I in d) || d[I]) && (d[I] = !1);
  }
  function p(I, C) {
    v[I] != C && (C === "" || C == null ? delete v[I] : v[I] = C);
  }
  function _() {
    var I;
    (I = o(l)) == null || I.activate();
  }
  function y() {
    var I;
    (I = o(l)) == null || I.deactivate();
  }
  function x(I) {
    var C;
    (C = o(l)) == null || C.setRippleCenter(I);
  }
  function S() {
    return u;
  }
  var A = { activate: _, deactivate: y, setRippleCenter: x, getElement: S }, w = pv();
  return He(w, (I, C) => ({ class: I, style: C, ...s }), [
    () => Ze({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...d,
      [r()]: !0
    }),
    () => Object.entries(v).map(([I, C]) => `${I}: ${C};`).concat([i()]).join(" ")
  ]), xe(w, (I) => u = I, () => u), De(w, (I, C) => ae == null ? void 0 : ae(I, C), t), E(n, w), Ee(A);
}
var Iv = /* @__PURE__ */ X('<div class="mdc-notched-outline__notch"><!></div>'), bv = /* @__PURE__ */ X('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function su(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "notched", 3, !1), a = m(e, "noLabel", 3, !1), s = /* @__PURE__ */ Ve(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "notched",
    "noLabel",
    "children"
  ]), u, l = /* @__PURE__ */ le(void 0), c = /* @__PURE__ */ le(void 0), d = Ce({}), v = Ce({}), f;
  Se(() => {
    o(c) !== f && (o(c) ? (o(c).addStyle("transition-duration", "0s"), h("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      o(c) && o(c).removeStyle("transition-duration");
    })) : g("mdc-notched-outline--upgraded"), f = o(c));
  }), ce("SMUI:floating-label:mount", (b) => {
    W(c, b, !0);
  }), ce("SMUI:floating-label:unmount", () => {
    W(c, void 0);
  }), rt(() => (W(
    l,
    new $f({
      addClass: h,
      removeClass: g,
      setNotchWidthProperty: (b) => p("width", b + "px"),
      removeNotchWidthProperty: () => _("width")
    }),
    !0
  ), o(l).init(), () => {
    var b;
    (b = o(l)) == null || b.destroy();
  }));
  function h(b) {
    d[b] || (d[b] = !0);
  }
  function g(b) {
    (!(b in d) || d[b]) && (d[b] = !1);
  }
  function p(b, T) {
    v[b] != T && (T === "" || T == null ? delete v[b] : v[b] = T);
  }
  function _(b) {
    b in v && delete v[b];
  }
  function y(b) {
    var T;
    (T = o(l)) == null || T.notch(b);
  }
  function x() {
    var b;
    (b = o(l)) == null || b.closeNotch();
  }
  function S() {
    return u;
  }
  var A = { notch: y, closeNotch: x, getElement: S }, w = bv();
  He(w, (b) => ({ class: b, ...s }), [
    () => Ze({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": i(),
      "mdc-notched-outline--no-label": a(),
      ...d,
      [r()]: !0
    })
  ]);
  var I = q(N(w), 2);
  {
    var C = (b) => {
      var T = Iv(), R = N(T);
      _e(R, () => e.children ?? Ie), de((D) => qe(T, D), [
        () => Object.entries(v).map(([D, L]) => `${D}: ${L};`).join(" ")
      ]), E(b, T);
    };
    $(I, (b) => {
      a() || b(C);
    });
  }
  return xe(w, (b) => u = b, () => u), De(w, (b, T) => ae == null ? void 0 : ae(b, T), t), E(n, w), Ee(A);
}
function sa(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "component", 3, Fs), a = m(e, "tag", 3, "div"), s = m(e, "_smuiClass", 3, ""), u = m(e, "_smuiClassMap", 23, () => ({})), l = m(e, "_smuiContexts", 19, () => ({})), c = m(e, "_smuiProps", 19, () => ({})), d = /* @__PURE__ */ Ve(e, [
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
  Object.entries(u()).forEach(([y, x]) => {
    const S = ye(x);
    S && "subscribe" in S && f.push(S.subscribe((A) => {
      u()[y] = A;
    }));
  });
  for (let y in l())
    l().hasOwnProperty(y) && ce(y, l()[y]);
  Fn(() => {
    for (const y of f)
      y();
  });
  function h() {
    return v.getElement();
  }
  var g = { getElement: h }, p = oe(), _ = K(p);
  {
    let y = /* @__PURE__ */ ne(() => Ze({
      [s()]: !0,
      ...u(),
      [r()]: !0
    }));
    Ga(_, i, (x, S) => {
      xe(
        S(x, Qe(
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
          c,
          () => d,
          {
            children: (A, w) => {
              var I = oe(), C = K(I);
              _e(C, () => e.children ?? Ie), E(A, I);
            },
            $$slots: { default: !0 }
          }
        )),
        (A) => v = A,
        () => v
      );
    });
  }
  return E(n, p), Ee(g);
}
function _v(n, e) {
  Ae(e, !0);
  let t = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return xe(
    sa(n, Qe({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => t, {
      children: (s, u) => {
        var l = oe(), c = K(l);
        _e(c, () => e.children ?? Ie), E(s, l);
      },
      $$slots: { default: !0 }
    })),
    (s) => r = s,
    () => r
  ), Ee(a);
}
function yv(n, e) {
  Ae(e, !0);
  let t = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return xe(
    sa(n, Qe(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => t,
      {
        children: (s, u) => {
          var l = oe(), c = K(l);
          _e(c, () => e.children ?? Ie), E(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Ee(a);
}
function Cv(n, e) {
  Ae(e, !0);
  let t = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return xe(
    sa(n, Qe(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => t,
      {
        children: (s, u) => {
          var l = oe(), c = K(l);
          _e(c, () => e.children ?? Ie), E(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Ee(a);
}
var Av = /* @__PURE__ */ X("<input/>");
function Ev(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "type", 3, "text"), a = m(e, "placeholder", 3, " "), s = m(e, "value", 15), u = m(e, "files", 15, null), l = m(e, "dirty", 15, !1), c = m(e, "invalid", 15, !1), d = m(e, "updateInvalid", 3, !0), v = m(e, "initialInvalid", 3, !1), f = m(e, "emptyValueNull", 19, () => s() === null), h = m(e, "emptyValueUndefined", 19, () => s() === void 0), g = /* @__PURE__ */ Ve(e, [
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
    d() && v() && c(R().matches(":invalid"));
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
      s(null);
      return;
    }
    if (U.currentTarget.value === "" && h()) {
      s(void 0);
      return;
    }
    switch (i()) {
      case "number":
      case "range":
        s(x(U.currentTarget.value));
        break;
      default:
        s(U.currentTarget.value);
        break;
    }
  }
  function A(U) {
    (i() === "file" || i() === "range") && S(U), l(!0), d() && c(R().matches(":invalid"));
  }
  function w(U) {
    return U in _ ? _[U] ?? null : R().getAttribute(U);
  }
  function I(U, Z) {
    _[U] !== Z && (_[U] = Z);
  }
  function C(U) {
    (!(U in _) || _[U] != null) && (_[U] = void 0);
  }
  function b() {
    R().focus();
  }
  function T() {
    R().blur();
  }
  function R() {
    return p;
  }
  var D = { getAttr: w, addAttr: I, removeAttr: C, focus: b, blur: T, getElement: R }, L = Av(), O = (U) => {
    var Z;
    i() !== "file" && S(U), (Z = e.oninput) == null || Z.call(e, U);
  }, re = (U) => {
    var Z;
    A(U), (Z = e.onchange) == null || Z.call(e, U);
  };
  return He(
    L,
    (U) => ({
      class: U,
      type: i(),
      placeholder: a(),
      ...y,
      ..._,
      ...g,
      oninput: O,
      onchange: re
    }),
    [
      () => Ze({ "mdc-text-field__input": !0, [r()]: !0 })
    ],
    void 0,
    void 0,
    !0
  ), xe(L, (U) => p = U, () => p), De(L, (U, Z) => ae == null ? void 0 : ae(U, Z), t), E(n, L), Ee(D);
}
var Sv = /* @__PURE__ */ X("<textarea></textarea>");
function xv(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "value", 15, ""), s = m(e, "dirty", 15, !1), u = m(e, "invalid", 15, !1), l = m(e, "updateInvalid", 3, !0), c = m(e, "initialInvalid", 3, !1), d = m(e, "resizable", 3, !0), v = /* @__PURE__ */ Ve(e, [
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
  ]), f, h = Ce({});
  rt(() => {
    l() && c() && u(A().matches(":invalid"));
  });
  function g() {
    s(!0), l() && u(A().matches(":invalid"));
  }
  function p(b) {
    return b in h ? h[b] ?? null : A().getAttribute(b);
  }
  function _(b, T) {
    h[b] !== T && (h[b] = T);
  }
  function y(b) {
    (!(b in h) || h[b] != null) && (h[b] = void 0);
  }
  function x() {
    A().focus();
  }
  function S() {
    A().blur();
  }
  function A() {
    return f;
  }
  var w = { getAttr: p, addAttr: _, removeAttr: y, focus: x, blur: S, getElement: A }, I = Sv(), C = (b) => {
    var T;
    g(), (T = e.onchange) == null || T.call(e, b);
  };
  return He(
    I,
    (b) => ({
      class: b,
      style: `${d() ? "" : "resize: none; "}${i()}`,
      ...h,
      ...v,
      onchange: C
    }),
    [
      () => Ze({ "mdc-text-field__input": !0, [r()]: !0 })
    ]
  ), xe(I, (b) => f = b, () => f), De(I, (b, T) => ae == null ? void 0 : ae(b, T), t), ka(() => Pf(I, a)), E(n, I), Ee(w);
}
var wv = /* @__PURE__ */ X('<span class="mdc-text-field__ripple"></span>'), Tv = /* @__PURE__ */ X("<!> <!>", 1), Dv = /* @__PURE__ */ X("<span><!> <!></span>"), Lv = /* @__PURE__ */ X("<!> <!> <!>", 1), Rv = /* @__PURE__ */ X("<label><!> <!> <!> <!> <!> <!> <!></label>"), Ov = /* @__PURE__ */ X("<div><!> <!> <!> <!> <!></div>"), Mv = /* @__PURE__ */ X("<!> <!>", 1);
function mr(n, e) {
  Ae(e, !0);
  const { applyPassive: t } = ru;
  let r = () => {
  };
  function i(G) {
    return G === r;
  }
  let a = m(e, "use", 19, () => []), s = m(e, "class", 3, ""), u = m(e, "style", 3, ""), l = m(e, "ripple", 3, !0), c = m(e, "disabled", 3, !1), d = m(e, "required", 3, !1), v = m(e, "textarea", 3, !1), f = m(e, "variant", 19, () => v() ? "outlined" : "standard"), h = m(e, "noLabel", 3, !1), g = m(e, "type", 3, "text"), p = m(e, "value", 15), _ = m(e, "files", 15, r), y = m(e, "invalid", 15, r), x = m(e, "updateInvalid", 19, () => i(y())), S = m(e, "initialInvalid", 3, !1), A = m(e, "dirty", 15, !1), w = m(e, "validateOnValueChange", 19, x), I = m(e, "useNativeValidation", 19, x), C = m(e, "withLeadingIcon", 3, r), b = m(e, "withTrailingIcon", 3, r), T = m(e, "input", 7), R = m(e, "floatingLabel", 7), D = m(e, "lineRipple", 7), L = m(e, "notchedOutline", 7), O = /* @__PURE__ */ Ve(e, [
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
  let U, Z = /* @__PURE__ */ le(void 0), H = new aa(), J = Ce({}), ue = Ce({}), k = /* @__PURE__ */ le(void 0), ee = /* @__PURE__ */ le(!1), ie = /* @__PURE__ */ le(Ce(S())), be = ye("SMUI:addLayoutListener"), fe, j, V = new Promise((G) => j = G), M, Q, Y, ge;
  const pe = /* @__PURE__ */ ne(() => T() && T().getElement());
  Se(() => {
    (A() || o(ie) || !x()) && o(Z) && o(Z).isValid() !== !y() && (x() ? y(!o(Z).isValid()) : o(Z).setValid(!y()));
  }), Se(() => {
    o(Z) && o(Z).getValidateOnValueChange() !== w() && o(Z).setValidateOnValueChange(i(w()) ? !1 : w());
  }), Se(() => {
    o(Z) && o(Z).setUseNativeValidation(i(I()) ? !0 : I());
  }), Se(() => {
    o(Z) && o(Z).setDisabled(c());
  });
  let Ne = p();
  Se(() => {
    if (o(Z) && re && Ne !== p()) {
      Ne = p();
      const G = `${p() == null ? "" : p()}`;
      o(Z).getValue() !== G && o(Z).setValue(G);
    }
  }), be && (fe = be(P)), ce("SMUI:textfield:leading-icon:mount", (G) => {
    M = G;
  }), ce("SMUI:textfield:leading-icon:unmount", () => {
    M = void 0;
  }), ce("SMUI:textfield:trailing-icon:mount", (G) => {
    Q = G;
  }), ce("SMUI:textfield:trailing-icon:unmount", () => {
    Q = void 0;
  }), ce("SMUI:textfield:helper-text:id", (G) => {
    W(k, G, !0);
  }), ce("SMUI:textfield:helper-text:mount", (G) => {
    Y = G;
  }), ce("SMUI:textfield:helper-text:unmount", () => {
    W(k, void 0), Y = void 0;
  }), ce("SMUI:textfield:character-counter:mount", (G) => {
    ge = G;
  }), ce("SMUI:textfield:character-counter:unmount", () => {
    ge = void 0;
  }), rt(() => {
    var G;
    if (W(
      Z,
      new lv(
        {
          // getRootAdapterMethods_
          addClass: Ke,
          removeClass: Re,
          hasClass: tt,
          registerTextFieldInteractionHandler: (te, Te) => H.on(z(), te, Te),
          deregisterTextFieldInteractionHandler: (te, Te) => H.off(z(), te, Te),
          registerValidationAttributeChangeHandler: (te) => {
            const Te = (Zt) => Zt.map((an) => an.attributeName).filter((an) => an), ot = new MutationObserver((Zt) => {
              I() && te(Te(Zt));
            }), It = { attributes: !0 };
            return T() && ot.observe(T().getElement(), It), ot;
          },
          deregisterValidationAttributeChangeHandler: (te) => {
            te.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var te;
            return ((te = T()) == null ? void 0 : te.getElement()) ?? null;
          },
          setInputAttr: (te, Te) => {
            var ot;
            (ot = T()) == null || ot.addAttr(te, Te);
          },
          removeInputAttr: (te) => {
            var Te;
            (Te = T()) == null || Te.removeAttr(te);
          },
          isFocused: () => {
            var te;
            return document.activeElement === ((te = T()) == null ? void 0 : te.getElement());
          },
          registerInputInteractionHandler: (te, Te) => {
            var It;
            const ot = (It = T()) == null ? void 0 : It.getElement();
            if (ot) {
              const Zt = t();
              H.on(ot, te, Te, typeof Zt == "boolean" ? { capture: Zt } : Zt);
            }
          },
          deregisterInputInteractionHandler: (te, Te) => {
            var It;
            const ot = (It = T()) == null ? void 0 : It.getElement();
            ot && H.off(ot, te, Te);
          },
          // getLabelAdapterMethods_
          floatLabel: (te) => R() && R().float(te),
          getLabelWidth: () => R() ? R().getWidth() : 0,
          hasLabel: () => !!R(),
          shakeLabel: (te) => R() && R().shake(te),
          setLabelRequired: (te) => R() && R().setRequired(te),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => D() && D().activate(),
          deactivateLineRipple: () => D() && D().deactivate(),
          setLineRippleTransformOrigin: (te) => D() && D().setRippleCenter(te),
          // getOutlineAdapterMethods_
          closeOutline: () => L() && L().closeNotch(),
          hasOutline: () => !!L(),
          notchOutline: (te) => L() && L().notch(te)
        },
        {
          get helperText() {
            return Y;
          },
          get characterCounter() {
            return ge;
          },
          get leadingIcon() {
            return M;
          },
          get trailingIcon() {
            return Q;
          }
        }
      ),
      !0
    ), re) {
      if (T() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (G = o(Z)) == null || G.init();
    } else
      Ud().then(() => {
        var te;
        if (T() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (te = o(Z)) == null || te.init();
      });
    return j(), () => {
      var te;
      (te = o(Z)) == null || te.destroy(), H.clear();
    };
  }), Fn(() => {
    fe && fe();
  });
  function tt(G) {
    return G in J ? J[G] ?? null : z().classList.contains(G);
  }
  function Ke(G) {
    J[G] || (J[G] = !0);
  }
  function Re(G) {
    (!(G in J) || J[G]) && (J[G] = !1);
  }
  function st(G, te) {
    ue[G] != te && (te === "" || te == null ? delete ue[G] : ue[G] = te);
  }
  function kt() {
    var G;
    (G = T()) == null || G.focus();
  }
  function Gt() {
    var G;
    (G = T()) == null || G.blur();
  }
  function P() {
    if (o(Z)) {
      const G = o(Z).shouldFloat;
      o(Z).notchOutline(G);
    }
  }
  function z() {
    return U;
  }
  var ve = { focus: kt, blur: Gt, layout: P, getElement: z }, Fe = Mv(), Nt = K(Fe);
  {
    var vn = (G) => {
      var te = Rv();
      He(te, (Ge, Je, ze) => ({ class: Ge, style: Je, for: void 0, ...ze }), [
        () => Ze({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": c(),
          "mdc-text-field--textarea": v(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !v(),
          "mdc-text-field--no-label": h() || e.label == null,
          "mdc-text-field--label-floating": o(ee) || p() != null && p() !== "",
          "mdc-text-field--with-leading-icon": i(C()) ? e.leadingIcon : C(),
          "mdc-text-field--with-trailing-icon": i(b()) ? e.trailingIcon : b(),
          "mdc-text-field--with-internal-counter": v() && e.internalCounter,
          "mdc-text-field--invalid": y(),
          ...J,
          [s()]: !0
        }),
        () => Object.entries(ue).map(([Ge, Je]) => `${Ge}: ${Je};`).concat([u()]).join(" "),
        () => xa(O, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Te = N(te);
      {
        var ot = (Ge) => {
          var Je = Tv(), ze = K(Je);
          {
            var Bt = (Ct) => {
              var Lt = wv();
              E(Ct, Lt);
            };
            $(ze, (Ct) => {
              f() === "filled" && Ct(Bt);
            });
          }
          var Pn = q(ze, 2);
          {
            var $e = (Ct) => {
              {
                let Lt = /* @__PURE__ */ ne(() => o(ee) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), Ue = /* @__PURE__ */ ne(() => dt(O, "label$"));
                xe(
                  fs(Ct, Qe(
                    {
                      get floatAbove() {
                        return o(Lt);
                      },
                      get required() {
                        return d();
                      },
                      wrapped: !0
                    },
                    () => o(Ue),
                    {
                      children: (Rt, sr) => {
                        var _n = oe(), At = K(_n);
                        {
                          var Wt = (Kt) => {
                          }, yn = (Kt) => {
                            var qr = oe(), Cn = K(qr);
                            {
                              var xr = (An) => {
                                var or = ct();
                                de(() => Oe(or, e.label)), E(An, or);
                              }, la = (An) => {
                                var or = oe(), Vn = K(or);
                                _e(Vn, () => e.label), E(An, or);
                              };
                              $(
                                Cn,
                                (An) => {
                                  typeof e.label == "string" ? An(xr) : An(la, !1);
                                },
                                !0
                              );
                            }
                            E(Kt, qr);
                          };
                          $(At, (Kt) => {
                            e.label == null ? Kt(Wt) : Kt(yn, !1);
                          });
                        }
                        E(Rt, _n);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (Rt) => R(Rt),
                  () => R()
                );
              }
            };
            $(Pn, (Ct) => {
              !h() && e.label != null && Ct($e);
            });
          }
          E(Ge, Je);
        };
        $(Te, (Ge) => {
          !v() && f() !== "outlined" && Ge(ot);
        });
      }
      var It = q(Te, 2);
      {
        var Zt = (Ge) => {
          {
            let Je = /* @__PURE__ */ ne(() => h() || e.label == null), ze = /* @__PURE__ */ ne(() => dt(O, "outline$"));
            xe(
              su(Ge, Qe(
                {
                  get noLabel() {
                    return o(Je);
                  }
                },
                () => o(ze),
                {
                  children: (Bt, Pn) => {
                    var $e = oe(), Ct = K($e);
                    {
                      var Lt = (Ue) => {
                        {
                          let Rt = /* @__PURE__ */ ne(() => o(ee) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), sr = /* @__PURE__ */ ne(() => dt(O, "label$"));
                          xe(
                            fs(Ue, Qe(
                              {
                                get floatAbove() {
                                  return o(Rt);
                                },
                                get required() {
                                  return d();
                                },
                                wrapped: !0
                              },
                              () => o(sr),
                              {
                                children: (_n, At) => {
                                  var Wt = oe(), yn = K(Wt);
                                  {
                                    var Kt = (Cn) => {
                                    }, qr = (Cn) => {
                                      var xr = oe(), la = K(xr);
                                      {
                                        var An = (Vn) => {
                                          var Kr = ct();
                                          de(() => Oe(Kr, e.label)), E(Vn, Kr);
                                        }, or = (Vn) => {
                                          var Kr = oe(), Vs = K(Kr);
                                          _e(Vs, () => e.label), E(Vn, Kr);
                                        };
                                        $(
                                          la,
                                          (Vn) => {
                                            typeof e.label == "string" ? Vn(An) : Vn(or, !1);
                                          },
                                          !0
                                        );
                                      }
                                      E(Cn, xr);
                                    };
                                    $(yn, (Cn) => {
                                      e.label == null ? Cn(Kt) : Cn(qr, !1);
                                    });
                                  }
                                  E(_n, Wt);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (_n) => R(_n),
                            () => R()
                          );
                        }
                      };
                      $(Ct, (Ue) => {
                        !h() && e.label != null && Ue(Lt);
                      });
                    }
                    E(Bt, $e);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (Bt) => L(Bt),
              () => L()
            );
          }
        };
        $(It, (Ge) => {
          (v() || f() === "outlined") && Ge(Zt);
        });
      }
      var an = q(It, 2);
      qa(an, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (Ge, Je) => {
          var ze = oe(), Bt = K(ze);
          _e(Bt, () => e.leadingIcon ?? Ie), E(Ge, ze);
        },
        $$slots: { default: !0 }
      });
      var xi = q(an, 2);
      _e(xi, () => e.children ?? Ie);
      var ft = q(xi, 2);
      {
        var Ht = (Ge) => {
          var Je = Dv(), ze = N(Je);
          {
            let Pn = /* @__PURE__ */ ne(() => dt(O, "input$"));
            xe(
              xv(ze, Qe(
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
                    return o(ie);
                  },
                  get "aria-controls"() {
                    return o(k);
                  },
                  get "aria-describedby"() {
                    return o(k);
                  }
                },
                () => o(Pn),
                {
                  onblur: ($e) => {
                    var Ct;
                    W(ee, !1), W(ie, !0), Be(z(), "blur", $e), (Ct = e.input$onblur) == null || Ct.call(e, $e);
                  },
                  onfocus: ($e) => {
                    var Ct;
                    W(ee, !0), Be(z(), "focus", $e), (Ct = e.input$onfocus) == null || Ct.call(e, $e);
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
              ($e) => T($e),
              () => T()
            );
          }
          var Bt = q(ze, 2);
          _e(Bt, () => e.internalCounter ?? Ie), de((Pn) => _r(Je, 1, Pn), [
            () => Kd(Ze({
              "mdc-text-field__resizer": !("input$resizable" in O) || e.input$resizable
            }))
          ]), E(Ge, Je);
        }, sn = (Ge) => {
          var Je = Lv(), ze = K(Je);
          {
            var Bt = (Lt) => {
              var Ue = oe(), Rt = K(Ue);
              {
                var sr = (At) => {
                  yv(At, {
                    children: (Wt, yn) => {
                      var Kt = ct();
                      de(() => Oe(Kt, e.prefix)), E(Wt, Kt);
                    },
                    $$slots: { default: !0 }
                  });
                }, _n = (At) => {
                  var Wt = oe(), yn = K(Wt);
                  _e(yn, () => e.prefix ?? Ie), E(At, Wt);
                };
                $(Rt, (At) => {
                  typeof e.prefix == "string" ? At(sr) : At(_n, !1);
                });
              }
              E(Lt, Ue);
            };
            $(ze, (Lt) => {
              e.prefix != null && Lt(Bt);
            });
          }
          var Pn = q(ze, 2);
          {
            let Lt = /* @__PURE__ */ ne(() => dt(O, "input$"));
            xe(
              Ev(Pn, Qe(
                {
                  get type() {
                    return g();
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
                    return o(ie);
                  },
                  get "aria-controls"() {
                    return o(k);
                  },
                  get "aria-describedby"() {
                    return o(k);
                  }
                },
                () => h() && e.label != null && typeof e.label == "string" ? { placeholder: e.label } : {},
                () => o(Lt),
                {
                  onblur: (Ue) => {
                    var Rt;
                    W(ee, !1), W(ie, !0), Be(z(), "blur", Ue), (Rt = e.input$onblur) == null || Rt.call(e, Ue);
                  },
                  onfocus: (Ue) => {
                    var Rt;
                    W(ee, !0), Be(z(), "focus", Ue), (Rt = e.input$onfocus) == null || Rt.call(e, Ue);
                  },
                  get value() {
                    return p();
                  },
                  set value(Ue) {
                    p(Ue);
                  },
                  get files() {
                    return _();
                  },
                  set files(Ue) {
                    _(Ue);
                  },
                  get dirty() {
                    return A();
                  },
                  set dirty(Ue) {
                    A(Ue);
                  },
                  get invalid() {
                    return y();
                  },
                  set invalid(Ue) {
                    y(Ue);
                  }
                }
              )),
              (Ue) => T(Ue),
              () => T()
            );
          }
          var $e = q(Pn, 2);
          {
            var Ct = (Lt) => {
              var Ue = oe(), Rt = K(Ue);
              {
                var sr = (At) => {
                  Cv(At, {
                    children: (Wt, yn) => {
                      var Kt = ct();
                      de(() => Oe(Kt, e.suffix)), E(Wt, Kt);
                    },
                    $$slots: { default: !0 }
                  });
                }, _n = (At) => {
                  var Wt = oe(), yn = K(Wt);
                  _e(yn, () => e.suffix ?? Ie), E(At, Wt);
                };
                $(Rt, (At) => {
                  typeof e.suffix == "string" ? At(sr) : At(_n, !1);
                });
              }
              E(Lt, Ue);
            };
            $($e, (Lt) => {
              e.suffix != null && Lt(Ct);
            });
          }
          E(Ge, Je);
        };
        $(ft, (Ge) => {
          v() && typeof p() == "string" ? Ge(Ht) : Ge(sn, !1);
        });
      }
      var Er = q(ft, 2);
      qa(Er, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (Ge, Je) => {
          var ze = oe(), Bt = K(ze);
          _e(Bt, () => e.trailingIcon ?? Ie), E(Ge, ze);
        },
        $$slots: { default: !0 }
      });
      var Wa = q(Er, 2);
      {
        var Sr = (Ge) => {
          {
            let Je = /* @__PURE__ */ ne(() => dt(O, "ripple$"));
            xe(au(Ge, Qe(() => o(Je))), (ze) => D(ze), () => D());
          }
        };
        $(Wa, (Ge) => {
          !v() && f() !== "outlined" && l() && Ge(Sr);
        });
      }
      xe(te, (Ge) => U = Ge, () => U), De(te, (Ge, Je) => Gn == null ? void 0 : Gn(Ge, Je), () => ({
        ripple: !v() && f() === "filled",
        unbounded: !1,
        addClass: Ke,
        removeClass: Re,
        addStyle: st,
        eventTarget: o(pe),
        activeTarget: o(pe),
        initPromise: V
      })), De(te, (Ge, Je) => ae == null ? void 0 : ae(Ge, Je), a), E(G, te);
    }, ar = (G) => {
      var te = Ov();
      He(te, (ft, Ht, sn) => ({ class: ft, style: Ht, ...sn }), [
        () => Ze({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": c(),
          "mdc-text-field--textarea": v(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !v(),
          "mdc-text-field--no-label": h() || e.label == null,
          "mdc-text-field--with-leading-icon": e.leadingIcon,
          "mdc-text-field--with-trailing-icon": e.trailingIcon,
          "mdc-text-field--invalid": y(),
          ...J,
          [s()]: !0
        }),
        () => Object.entries(ue).map(([ft, Ht]) => `${ft}: ${Ht};`).concat([u()]).join(" "),
        () => xa(O, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Te = N(te);
      {
        var ot = (ft) => {
          var Ht = oe(), sn = K(Ht);
          _e(sn, () => e.label ?? Ie), E(ft, Ht);
        };
        $(Te, (ft) => {
          typeof e.label != "string" && ft(ot);
        });
      }
      var It = q(Te, 2);
      qa(It, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (ft, Ht) => {
          var sn = oe(), Er = K(sn);
          _e(Er, () => e.leadingIcon ?? Ie), E(ft, sn);
        },
        $$slots: { default: !0 }
      });
      var Zt = q(It, 2);
      _e(Zt, () => e.children ?? Ie);
      var an = q(Zt, 2);
      qa(an, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (ft, Ht) => {
          var sn = oe(), Er = K(sn);
          _e(Er, () => e.trailingIcon ?? Ie), E(ft, sn);
        },
        $$slots: { default: !0 }
      });
      var xi = q(an, 2);
      _e(xi, () => e.line ?? Ie), xe(te, (ft) => U = ft, () => U), De(te, (ft, Ht) => Gn == null ? void 0 : Gn(ft, Ht), () => ({
        ripple: l(),
        unbounded: !1,
        addClass: Ke,
        removeClass: Re,
        addStyle: st
      })), De(te, (ft, Ht) => ae == null ? void 0 : ae(ft, Ht), a), E(G, te);
    };
    $(Nt, (G) => {
      re ? G(vn) : G(ar, !1);
    });
  }
  var me = q(Nt, 2);
  {
    var B = (G) => {
      {
        let te = /* @__PURE__ */ ne(() => dt(O, "helperLine$"));
        _v(G, Qe(() => o(te), {
          children: (Te, ot) => {
            var It = oe(), Zt = K(It);
            _e(Zt, () => e.helper ?? Ie), E(Te, It);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    $(me, (G) => {
      e.helper && G(B);
    });
  }
  return E(n, Fe), Ee(ve);
}
var Fv = /* @__PURE__ */ X('<div class="mdc-button__touch"></div>'), Pv = /* @__PURE__ */ X('<div class="mdc-button__ripple"></div> <!><!>', 1);
function pr(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "ripple", 3, !0), s = m(e, "color", 3, "primary"), u = m(e, "variant", 3, "text"), l = m(e, "touch", 3, !1), c = m(e, "action", 3, "close"), d = m(e, "defaultAction", 3, !1), v = m(e, "secondary", 3, !1), f = m(e, "component", 3, Fs), h = m(e, "tag", 19, () => e.href == null ? "button" : "a"), g = /* @__PURE__ */ Ve(e, [
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
  ]), p, _ = Ce({}), y = Ce({}), x = ye("SMUI:button:context");
  const S = /* @__PURE__ */ ne(() => x === "dialog:action" && c() != null ? { "data-mdc-dialog-action": c() } : { action: c() }), A = /* @__PURE__ */ ne(() => x === "dialog:action" && d() ? { "data-mdc-dialog-button-default": "" } : {}), w = /* @__PURE__ */ ne(() => x === "banner" ? {} : { secondary: v() });
  let I = e.disabled;
  Se(() => {
    if (I !== e.disabled) {
      if (p) {
        const U = D();
        "blur" in U && U.blur();
      }
      I = g.disabled;
    }
  }), ce("SMUI:label:context", "button"), ce("SMUI:icon:context", "button");
  function C(U) {
    _[U] || (_[U] = !0);
  }
  function b(U) {
    (!(U in _) || _[U]) && (_[U] = !1);
  }
  function T(U, Z) {
    y[U] != Z && (Z === "" || Z == null ? delete y[U] : y[U] = Z);
  }
  function R() {
    x === "banner" && Be(D(), v() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function D() {
    return p.getElement();
  }
  var L = { getElement: D }, O = oe(), re = K(O);
  {
    let U = /* @__PURE__ */ ne(() => [
      [
        Gn,
        {
          ripple: a(),
          unbounded: !1,
          color: s(),
          disabled: !!e.disabled,
          addClass: C,
          removeClass: b,
          addStyle: T
        }
      ],
      ...t()
    ]), Z = /* @__PURE__ */ ne(() => Ze({
      "mdc-button": !0,
      "mdc-button--raised": u() === "raised",
      "mdc-button--unelevated": u() === "unelevated",
      "mdc-button--outlined": u() === "outlined",
      "smui-button--color-secondary": s() === "secondary",
      "mdc-button--touch": l(),
      "mdc-card__action": x === "card:action",
      "mdc-card__action--button": x === "card:action",
      "mdc-dialog__button": x === "dialog:action",
      "mdc-top-app-bar__navigation-icon": x === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": x === "top-app-bar:action",
      "mdc-snackbar__action": x === "snackbar:actions",
      "mdc-banner__secondary-action": x === "banner" && v(),
      "mdc-banner__primary-action": x === "banner" && !v(),
      "mdc-tooltip__action": x === "tooltip:rich-actions",
      ..._,
      [r()]: !0
    })), H = /* @__PURE__ */ ne(() => Object.entries(y).map(([J, ue]) => `${J}: ${ue};`).concat([i()]).join(" "));
    Ga(re, f, (J, ue) => {
      xe(
        ue(J, Qe(
          {
            get tag() {
              return h();
            },
            get use() {
              return o(U);
            },
            get class() {
              return o(Z);
            },
            get style() {
              return o(H);
            }
          },
          () => o(S),
          () => o(A),
          () => o(w),
          {
            get href() {
              return e.href;
            }
          },
          () => g,
          {
            onclick: (k) => {
              var ee;
              R(), (ee = e.onclick) == null || ee.call(e, k);
            },
            children: (k, ee) => {
              var ie = Pv(), be = q(K(ie), 2);
              _e(be, () => e.children ?? Ie);
              var fe = q(be);
              {
                var j = (V) => {
                  var M = Fv();
                  E(V, M);
                };
                $(fe, (V) => {
                  l() && V(j);
                });
              }
              E(k, ie);
            },
            $$slots: { default: !0 }
          }
        )),
        (k) => p = k,
        () => p
      );
    });
  }
  return E(n, O), Ee(L);
}
var kv = /* @__PURE__ */ X("<i><!></i>");
function Gv(n, e) {
  Ae(e, !0);
  const t = () => bi(g, "$leadingStore", r), [r, i] = Si();
  let a = m(e, "use", 19, () => []), s = m(e, "class", 3, ""), u = m(e, "tabindex", 19, () => e.role === "button" ? 0 : -1), l = m(e, "disabled", 3, !1), c = /* @__PURE__ */ Ve(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "role",
    "tabindex",
    "disabled",
    "children"
  ]), d, v = /* @__PURE__ */ le(void 0), f = new aa(), h = Ce({});
  const g = ye("SMUI:textfield:icon:leading"), p = t();
  let _ = /* @__PURE__ */ le(void 0);
  const y = /* @__PURE__ */ ne(() => ({ role: e.role, tabindex: u() })), x = ye("SMUI:textfield:leading-icon:mount"), S = ye("SMUI:textfield:leading-icon:unmount"), A = ye("SMUI:textfield:trailing-icon:mount"), w = ye("SMUI:textfield:trailing-icon:unmount");
  rt(() => (W(
    v,
    new uv({
      getAttr: I,
      setAttr: C,
      removeAttr: b,
      setContent: (Z) => {
        W(_, Z, !0);
      },
      registerInteractionHandler: (Z, H) => f.on(T(), Z, H),
      deregisterInteractionHandler: (Z, H) => f.off(T(), Z, H),
      notifyIconAction: () => Be(T(), "SMUITextFieldIcon")
    }),
    !0
  ), p ? x && x(o(v)) : A && A(o(v)), o(v).init(), () => {
    var Z;
    o(v) && (p ? S && S(o(v)) : w && w(o(v))), (Z = o(v)) == null || Z.destroy(), f.clear();
  }));
  function I(Z) {
    return Z in h ? h[Z] ?? null : T().getAttribute(Z);
  }
  function C(Z, H) {
    h[Z] !== H && (h[Z] = H);
  }
  function b(Z) {
    (!(Z in h) || h[Z] != null) && (h[Z] = void 0);
  }
  function T() {
    return d;
  }
  var R = { getElement: T }, D = kv();
  He(
    D,
    (Z) => ({
      class: Z,
      "aria-hidden": u() === -1 ? "true" : "false",
      "aria-disabled": e.role === "button" ? l() ? "true" : "false" : void 0,
      ...o(y),
      ...h,
      ...c
    }),
    [
      () => Ze({
        "mdc-text-field__icon": !0,
        "mdc-text-field__icon--leading": p,
        "mdc-text-field__icon--trailing": !p,
        [s()]: !0
      })
    ]
  );
  var L = N(D);
  {
    var O = (Z) => {
      var H = oe(), J = K(H);
      _e(J, () => e.children ?? Ie), E(Z, H);
    }, re = (Z) => {
      var H = ct();
      de(() => Oe(H, o(_))), E(Z, H);
    };
    $(L, (Z) => {
      o(_) == null ? Z(O) : Z(re, !1);
    });
  }
  xe(D, (Z) => d = Z, () => d), De(D, (Z, H) => ae == null ? void 0 : ae(Z, H), a), E(n, D);
  var U = Ee(R);
  return i(), U;
}
function ou(n, e) {
  Ae(e, !0);
  let t = m(e, "placeholder", 3, ""), r = m(e, "label", 3, ""), i = m(e, "icon", 3, ""), a = m(e, "value", 15, ""), s = m(e, "variant", 3, "standard"), u = m(e, "styles", 3, ""), l = m(e, "required", 3, !1);
  var c = oe(), d = K(c);
  {
    var v = (h) => {
      {
        const g = (_) => {
          Gv(_, {
            class: "material-icons",
            children: (y, x) => {
              var S = ct();
              de(() => Oe(S, i())), E(y, S);
            },
            $$slots: { default: !0 }
          });
        };
        let p = /* @__PURE__ */ ne(() => `width: 100%; ${u()}`);
        mr(h, {
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
            return o(p);
          },
          get variant() {
            return s();
          },
          get value() {
            return a();
          },
          set value(_) {
            a(_);
          },
          leadingIcon: g,
          $$slots: { leadingIcon: !0 }
        });
      }
    }, f = (h) => {
      mr(h, {
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
        get value() {
          return a();
        },
        set value(g) {
          a(g);
        }
      });
    };
    $(d, (h) => {
      i() ? h(v) : h(f, !1);
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
var Nv = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, Zv = {
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
}, ht;
(function(n) {
  n[n.BOTTOM = 1] = "BOTTOM", n[n.CENTER = 2] = "CENTER", n[n.RIGHT = 4] = "RIGHT", n[n.FLIP_RTL = 8] = "FLIP_RTL";
})(ht || (ht = {}));
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
var Tr, ur, ke = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
Tr = {}, Tr["" + ke.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", Tr["" + ke.LIST_ITEM_CLASS] = "mdc-list-item", Tr["" + ke.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", Tr["" + ke.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", Tr["" + ke.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", Tr["" + ke.ROOT] = "mdc-list";
var Oi = (ur = {}, ur["" + ke.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", ur["" + ke.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", ur["" + ke.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", ur["" + ke.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", ur["" + ke.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", ur["" + ke.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", ur["" + ke.ROOT] = "mdc-deprecated-list", ur), Dr = {
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
    .` + ke.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + ke.LIST_ITEM_CLASS + ` a,
    .` + Oi[ke.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Oi[ke.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + ke.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + ke.LIST_ITEM_CLASS + ` a,
    .` + ke.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + ke.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + Oi[ke.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Oi[ke.LIST_ITEM_CLASS] + ` a,
    .` + Oi[ke.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + Oi[ke.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, vt = {
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
var Hv = ["input", "button", "textarea", "select"], En = function(n) {
  var e = n.target;
  if (e) {
    var t = ("" + e.tagName).toLowerCase();
    Hv.indexOf(t) === -1 && n.preventDefault();
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
function Bv() {
  var n = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return n;
}
function Wv(n, e) {
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
function Ao(n, e) {
  var t = n.nextChar, r = n.focusItemAtIndex, i = n.sortedIndexByFirstChar, a = n.focusedItemIndex, s = n.skipFocus, u = n.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    du(e);
  }, vt.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + t;
  var l;
  return e.typeaheadBuffer.length === 1 ? l = Uv(i, a, u, e) : l = jv(i, u, e), l !== -1 && !s && r(l), l;
}
function Uv(n, e, t, r) {
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
function jv(n, e, t) {
  var r = t.typeaheadBuffer[0], i = n.get(r);
  if (!i)
    return -1;
  var a = i[t.sortedIndexCursor];
  if (a.text.lastIndexOf(t.typeaheadBuffer, 0) === 0 && !e(a.index))
    return a.index;
  for (var s = (t.sortedIndexCursor + 1) % i.length, u = -1; s !== t.sortedIndexCursor; ) {
    var l = i[s], c = l.text.lastIndexOf(t.typeaheadBuffer, 0) === 0, d = !e(l.index);
    if (c && d) {
      u = s;
      break;
    }
    s = (s + 1) % i.length;
  }
  return u !== -1 ? (t.sortedIndexCursor = u, i[t.sortedIndexCursor].index) : -1;
}
function lu(n) {
  return n.typeaheadBuffer.length > 0;
}
function du(n) {
  n.typeaheadBuffer = "";
}
function Bl(n, e) {
  var t = n.event, r = n.isTargetListItem, i = n.focusedItemIndex, a = n.focusItemAtIndex, s = n.sortedIndexByFirstChar, u = n.isItemAtIndexDisabled, l = _t(t) === "ArrowLeft", c = _t(t) === "ArrowUp", d = _t(t) === "ArrowRight", v = _t(t) === "ArrowDown", f = _t(t) === "Home", h = _t(t) === "End", g = _t(t) === "Enter", p = _t(t) === "Spacebar";
  if (t.altKey || t.ctrlKey || t.metaKey || l || c || d || v || f || h || g)
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
    return Ao(y, e);
  }
  if (!p)
    return -1;
  r && En(t);
  var x = r && lu(e);
  if (x) {
    var y = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: " ",
      sortedIndexByFirstChar: s,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return Ao(y, e);
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
function Vv(n) {
  return n instanceof Array;
}
var zv = ["Alt", "Control", "Meta", "Shift"];
function Wl(n) {
  var e = new Set(n ? zv.filter(function(t) {
    return n.getModifierState(t);
  }) : []);
  return function(t) {
    return t.every(function(r) {
      return e.has(r);
    }) && t.length === e.size;
  };
}
var Xv = (
  /** @class */
  function(n) {
    In(e, n);
    function e(t) {
      var r = n.call(this, je(je({}, e.defaultAdapter), t)) || this;
      return r.wrapFocus = !1, r.isVertical = !0, r.isSingleSelectionList = !1, r.areDisabledItemsFocusable = !0, r.selectedIndex = vt.UNSET_INDEX, r.focusedItemIndex = vt.UNSET_INDEX, r.useActivatedClass = !1, r.useSelectedAttr = !1, r.ariaCurrentAttrValue = null, r.isCheckboxList = !1, r.isRadioList = !1, r.lastSelectedIndex = null, r.hasTypeahead = !1, r.typeaheadState = Bv(), r.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Dr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ke;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return vt;
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
      if (t !== vt.UNSET_INDEX) {
        var r = this.adapter.listItemAtIndexHasClass(t, ke.LIST_ITEM_ACTIVATED_CLASS);
        r && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = t;
      }
    }, e.prototype.getSelectedIndexFromDOM = function() {
      for (var t = vt.UNSET_INDEX, r = this.adapter.getListItemCount(), i = 0; i < r; i++) {
        var a = this.adapter.listItemAtIndexHasClass(i, ke.LIST_ITEM_SELECTED_CLASS), s = this.adapter.listItemAtIndexHasClass(i, ke.LIST_ITEM_ACTIVATED_CLASS);
        if (a || s) {
          t = i;
          break;
        }
      }
      return t;
    }, e.prototype.setHasTypeahead = function(t) {
      this.hasTypeahead = t, t && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex());
    }, e.prototype.isTypeaheadInProgress = function() {
      return this.hasTypeahead && lu(this.typeaheadState);
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
      return this.adapter.listItemAtIndexHasClass(t, ke.LIST_ITEM_DISABLED_CLASS);
    }, e.prototype.handleKeydown = function(t, r, i) {
      var a = this, s, u = _t(t) === "ArrowLeft", l = _t(t) === "ArrowUp", c = _t(t) === "ArrowRight", d = _t(t) === "ArrowDown", v = _t(t) === "Home", f = _t(t) === "End", h = _t(t) === "Enter", g = _t(t) === "Spacebar", p = this.isVertical && d || !this.isVertical && c, _ = this.isVertical && l || !this.isVertical && u, y = t.key === "A" || t.key === "a", x = Wl(t);
      if (this.adapter.isRootFocused()) {
        if ((_ || f) && x([]))
          t.preventDefault(), this.focusLastElement();
        else if ((p || v) && x([]))
          t.preventDefault(), this.focusFirstElement();
        else if (_ && x(["Shift"]) && this.isCheckboxList) {
          t.preventDefault();
          var S = this.focusLastElement();
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        } else if (p && x(["Shift"]) && this.isCheckboxList) {
          t.preventDefault();
          var S = this.focusFirstElement();
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        }
        if (this.hasTypeahead) {
          var A = {
            event: t,
            focusItemAtIndex: function(C) {
              a.focusItemAtIndex(C);
            },
            focusedItemIndex: -1,
            isTargetListItem: r,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(C) {
              return a.isIndexDisabled(C);
            }
          };
          Bl(A, this.typeaheadState);
        }
        return;
      }
      var w = this.adapter.getFocusedElementIndex();
      if (!(w === -1 && (w = i, w < 0))) {
        if (p && x([]))
          En(t), this.focusNextElement(w);
        else if (_ && x([]))
          En(t), this.focusPrevElement(w);
        else if (p && x(["Shift"]) && this.isCheckboxList) {
          En(t);
          var S = this.focusNextElement(w);
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        } else if (_ && x(["Shift"]) && this.isCheckboxList) {
          En(t);
          var S = this.focusPrevElement(w);
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        } else if (v && x([]))
          En(t), this.focusFirstElement();
        else if (f && x([]))
          En(t), this.focusLastElement();
        else if (v && x(["Control", "Shift"]) && this.isCheckboxList) {
          if (En(t), this.isIndexDisabled(w))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, w, w);
        } else if (f && x(["Control", "Shift"]) && this.isCheckboxList) {
          if (En(t), this.isIndexDisabled(w))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(w, this.adapter.getListItemCount() - 1, w);
        } else if (y && x(["Control"]) && this.isCheckboxList)
          t.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === vt.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((h || g) && x([])) {
          if (r) {
            var I = t.target;
            if (I && I.tagName === "A" && h || (En(t), this.isIndexDisabled(w)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(w, !1), this.adapter.notifyAction(w));
          }
        } else if ((h || g) && x(["Shift"]) && this.isCheckboxList) {
          var I = t.target;
          if (I && I.tagName === "A" && h || (En(t), this.isIndexDisabled(w)))
            return;
          this.isTypeaheadInProgress() || (this.toggleCheckboxRange((s = this.lastSelectedIndex) !== null && s !== void 0 ? s : w, w, w), this.adapter.notifyAction(w));
        }
        if (this.hasTypeahead) {
          var A = {
            event: t,
            focusItemAtIndex: function(b) {
              a.focusItemAtIndex(b);
            },
            focusedItemIndex: this.focusedItemIndex,
            isTargetListItem: r,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(b) {
              return a.isIndexDisabled(b);
            }
          };
          Bl(A, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(t, r, i) {
      var a, s = Wl(i);
      t !== vt.UNSET_INDEX && (this.isIndexDisabled(t) || (s([]) ? (this.isSelectableList() && this.setSelectedIndexOnAction(t, r), this.adapter.notifyAction(t)) : this.isCheckboxList && s(["Shift"]) && (this.toggleCheckboxRange((a = this.lastSelectedIndex) !== null && a !== void 0 ? a : t, t, t), this.adapter.notifyAction(t))));
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
      this.isIndexValid(t, !1) && (r ? (this.adapter.removeClassForElementIndex(t, ke.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(t, Dr.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(t, ke.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(t, Dr.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(t, r) {
      if (r === void 0 && (r = {}), !(this.selectedIndex === t && !r.forceUpdate)) {
        var i = ke.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (i = ke.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== vt.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, i), this.setAriaForSingleSelectionAtIndex(t), this.setTabindexAtIndex(t), t !== vt.UNSET_INDEX && this.adapter.addClassForElementIndex(t, i), this.selectedIndex = t, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([t]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(t) {
      this.selectedIndex === vt.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(t, Dr.ARIA_CURRENT));
      var r = this.ariaCurrentAttrValue !== null, i = r ? Dr.ARIA_CURRENT : Dr.ARIA_SELECTED;
      if (this.selectedIndex !== vt.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), t !== vt.UNSET_INDEX) {
        var a = r ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(t, i, a);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? Dr.ARIA_SELECTED : Dr.ARIA_CHECKED;
    }, e.prototype.setRadioAtIndex = function(t, r) {
      r === void 0 && (r = {});
      var i = this.getSelectionAttribute();
      this.adapter.setCheckedCheckboxOrRadioAtIndex(t, !0), !(this.selectedIndex === t && !r.forceUpdate) && (this.selectedIndex !== vt.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), this.adapter.setAttributeForElementIndex(t, i, "true"), this.selectedIndex = t, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([t]));
    }, e.prototype.setCheckboxAtIndex = function(t, r) {
      r === void 0 && (r = {});
      for (var i = this.selectedIndex, a = r.isUserInteraction ? new Set(i === vt.UNSET_INDEX ? [] : i) : null, s = this.getSelectionAttribute(), u = [], l = 0; l < this.adapter.getListItemCount(); l++) {
        var c = a == null ? void 0 : a.has(l), d = t.indexOf(l) >= 0;
        d !== c && u.push(l), this.adapter.setCheckedCheckboxOrRadioAtIndex(l, d), this.adapter.setAttributeForElementIndex(l, s, d ? "true" : "false");
      }
      this.selectedIndex = t, r.isUserInteraction && u.length && this.adapter.notifySelectionChange(u);
    }, e.prototype.toggleCheckboxRange = function(t, r, i) {
      this.lastSelectedIndex = i;
      for (var a = new Set(this.selectedIndex === vt.UNSET_INDEX ? [] : this.selectedIndex), s = !(a != null && a.has(i)), u = Ll([t, r].sort(), 2), l = u[0], c = u[1], d = this.getSelectionAttribute(), v = [], f = l; f <= c; f++)
        if (!this.isIndexDisabled(f)) {
          var h = a.has(f);
          s !== h && (v.push(f), this.adapter.setCheckedCheckboxOrRadioAtIndex(f, s), this.adapter.setAttributeForElementIndex(f, d, "" + s), s ? a.add(f) : a.delete(f));
        }
      v.length && (this.selectedIndex = Uf([], Ll(a)), this.adapter.notifySelectionChange(v));
    }, e.prototype.setTabindexAtIndex = function(t) {
      this.focusedItemIndex === vt.UNSET_INDEX && t !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== t && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== t && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), t !== vt.UNSET_INDEX && this.adapter.setAttributeForElementIndex(t, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var t = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(t);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== vt.UNSET_INDEX ? this.selectedIndex : Vv(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(t, r) {
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
        return this.isIndexInRange(t) || this.isSingleSelectionList && t === vt.UNSET_INDEX;
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
      var u = this.selectedIndex === vt.UNSET_INDEX ? [] : this.selectedIndex.slice();
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
      return Ao(s, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return Wv(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      du(this.typeaheadState);
    }, e;
  }(bn)
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
var uu = (
  /** @class */
  function(n) {
    In(e, n);
    function e(t) {
      var r = n.call(this, je(je({}, e.defaultAdapter), t)) || this;
      return r.isSurfaceOpen = !1, r.isQuickOpen = !1, r.isHoistedElement = !1, r.isFixedPosition = !1, r.isHorizontallyCenteredOnViewport = !1, r.maxHeight = 0, r.openBottomBias = 0, r.openAnimationEndTimerId = 0, r.closeAnimationEndTimerId = 0, r.animationRequestId = 0, r.anchorCorner = gi.TOP_START, r.originCorner = gi.TOP_START, r.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, r.position = { x: 0, y: 0 }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Nv;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Zv;
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
      this.originCorner = this.originCorner ^ ht.RIGHT;
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
      var r = this.getoriginCorner(), i = this.getMenuSurfaceMaxHeight(r), a = this.hasBit(r, ht.BOTTOM) ? "bottom" : "top", s = this.hasBit(r, ht.RIGHT) ? "right" : "left", u = this.getHorizontalOriginOffset(r), l = this.getVerticalOriginOffset(r), c = this.measurements, d = c.anchorSize, v = c.surfaceSize, f = (t = {}, t[s] = u, t[a] = l, t);
      d.width / v.width > ga.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (s = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(f), this.adapter.setTransformOrigin(s + " " + a), this.adapter.setPosition(f), this.adapter.setMaxHeight(i ? i + "px" : ""), this.hasBit(r, ht.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
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
      var t = this.originCorner, r = this.measurements, i = r.viewportDistance, a = r.anchorSize, s = r.surfaceSize, u = e.numbers.MARGIN_TO_EDGE, l = this.hasBit(this.anchorCorner, ht.BOTTOM), c, d;
      l ? (c = i.top - u + this.anchorMargin.bottom, d = i.bottom - u - this.anchorMargin.bottom) : (c = i.top - u + this.anchorMargin.top, d = i.bottom - u + a.height - this.anchorMargin.top);
      var v = d - s.height > 0;
      !v && c > d + this.openBottomBias && (t = this.setBit(t, ht.BOTTOM));
      var f = this.adapter.isRtl(), h = this.hasBit(this.anchorCorner, ht.FLIP_RTL), g = this.hasBit(this.anchorCorner, ht.RIGHT) || this.hasBit(t, ht.RIGHT), p = !1;
      f && h ? p = !g : p = g;
      var _, y;
      p ? (_ = i.left + a.width + this.anchorMargin.right, y = i.right - this.anchorMargin.right) : (_ = i.left + this.anchorMargin.left, y = i.right + a.width - this.anchorMargin.left);
      var x = _ - s.width > 0, S = y - s.width > 0, A = this.hasBit(t, ht.FLIP_RTL) && this.hasBit(t, ht.RIGHT);
      return S && A && f || !x && A ? t = this.unsetBit(t, ht.RIGHT) : (x && p && f || x && !p && g || !S && _ >= y) && (t = this.setBit(t, ht.RIGHT)), t;
    }, e.prototype.getMenuSurfaceMaxHeight = function(t) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var r = this.measurements.viewportDistance, i = 0, a = this.hasBit(t, ht.BOTTOM), s = this.hasBit(this.anchorCorner, ht.BOTTOM), u = e.numbers.MARGIN_TO_EDGE;
      return a ? (i = r.top + this.anchorMargin.top - u, s || (i += this.measurements.anchorSize.height)) : (i = r.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - u, s && (i -= this.measurements.anchorSize.height)), i;
    }, e.prototype.getHorizontalOriginOffset = function(t) {
      var r = this.measurements.anchorSize, i = this.hasBit(t, ht.RIGHT), a = this.hasBit(this.anchorCorner, ht.RIGHT);
      if (i) {
        var s = a ? r.width - this.anchorMargin.left : this.anchorMargin.right;
        return this.isHoistedElement || this.isFixedPosition ? s - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : s;
      }
      return a ? r.width - this.anchorMargin.right : this.anchorMargin.left;
    }, e.prototype.getVerticalOriginOffset = function(t) {
      var r = this.measurements.anchorSize, i = this.hasBit(t, ht.BOTTOM), a = this.hasBit(this.anchorCorner, ht.BOTTOM), s = 0;
      return i ? s = a ? r.height - this.anchorMargin.top : -this.anchorMargin.bottom : s = a ? r.height + this.anchorMargin.bottom : this.anchorMargin.top, s;
    }, e.prototype.adjustPositionForHoistedElement = function(t) {
      var r, i, a = this.measurements, s = a.windowScroll, u = a.viewportDistance, l = a.surfaceSize, c = a.viewportSize, d = Object.keys(t);
      try {
        for (var v = Bn(d), f = v.next(); !f.done; f = v.next()) {
          var h = f.value, g = t[h] || 0;
          if (this.isHorizontallyCenteredOnViewport && (h === "left" || h === "right")) {
            t[h] = (c.width - l.width) / 2;
            continue;
          }
          g += u[h], this.isFixedPosition || (h === "top" ? g += s.y : h === "bottom" ? g -= s.y : h === "left" ? g += s.x : g -= s.x), t[h] = g;
        }
      } catch (p) {
        r = { error: p };
      } finally {
        try {
          f && !f.done && (i = v.return) && i.call(v);
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
  }(bn)
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
var Zi = {
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
}, Yv = {
  FOCUS_ROOT_INDEX: -1
}, ki;
(function(n) {
  n[n.NONE = 0] = "NONE", n[n.LIST_ROOT = 1] = "LIST_ROOT", n[n.FIRST_ITEM = 2] = "FIRST_ITEM", n[n.LAST_ITEM = 3] = "LAST_ITEM";
})(ki || (ki = {}));
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
var qv = (
  /** @class */
  function(n) {
    In(e, n);
    function e(t) {
      var r = n.call(this, je(je({}, e.defaultAdapter), t)) || this;
      return r.closeAnimationEndTimerId = 0, r.defaultFocusState = ki.LIST_ROOT, r.selectedIndex = -1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Zi;
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
        return Yv;
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
        }, uu.numbers.TRANSITION_CLOSE_DURATION);
      }
    }, e.prototype.handleMenuSurfaceOpened = function() {
      switch (this.defaultFocusState) {
        case ki.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case ki.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case ki.NONE:
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
      r >= 0 && (this.adapter.removeAttributeFromElementAtIndex(r, Mi.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(r, Zi.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(t, Zi.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(t, Mi.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = t;
    }, e.prototype.setEnabled = function(t, r) {
      this.validatedIndex(t), r ? (this.adapter.removeClassFromElementAtIndex(t, ke.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(t, Mi.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(t, ke.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(t, Mi.ARIA_DISABLED_ATTR, "true"));
    }, e.prototype.validatedIndex = function(t) {
      var r = this.adapter.getMenuItemCount(), i = t >= 0 && t < r;
      if (!i)
        throw new Error("MDCMenuFoundation: No list item at specified index.");
    }, e;
  }(bn)
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
}, no = {
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
var Kv = (
  /** @class */
  function(n) {
    In(e, n);
    function e(t, r) {
      r === void 0 && (r = {});
      var i = n.call(this, je(je({}, e.defaultAdapter), t)) || this;
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
        return no;
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
        var r = _t(t) === Le.ENTER, i = _t(t) === Le.SPACEBAR, a = _t(t) === Le.ARROW_UP, s = _t(t) === Le.ARROW_DOWN, u = t.ctrlKey || t.metaKey;
        if (!u && (!i && t.key && t.key.length === 1 || i && this.adapter.isTypeaheadInProgress())) {
          var l = i ? " " : t.key, c = this.adapter.typeaheadMatchItem(l, this.getSelectedIndex());
          c >= 0 && this.setSelectedIndex(c), t.preventDefault();
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
        r && i ? this.adapter.setSelectAnchorAttr(no.ARIA_DESCRIBEDBY, i) : this.adapter.removeSelectAnchorAttr(no.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.setClickDebounceTimeout = function() {
      var t = this;
      clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout(function() {
        t.recentlyClicked = !1;
      }, ti.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
    }, e;
  }(bn)
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
}, cr = {
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
var Qv = (
  /** @class */
  function(n) {
    In(e, n);
    function e(t) {
      return n.call(this, je(je({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return cr;
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
      t ? this.adapter.addClass(cr.HELPER_TEXT_VALIDATION_MSG) : this.adapter.removeClass(cr.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.setValidationMsgPersistent = function(t) {
      t ? this.adapter.addClass(cr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT) : this.adapter.removeClass(cr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.getIsValidation = function() {
      return this.adapter.hasClass(cr.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.getIsValidationMsgPersistent = function() {
      return this.adapter.hasClass(cr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.setValidity = function(t) {
      var r = this.adapter.hasClass(cr.HELPER_TEXT_VALIDATION_MSG);
      if (r) {
        var i = this.adapter.hasClass(cr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT), a = !t || i;
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
  }(bn)
), Jv = /* @__PURE__ */ X("<div><!></div>");
function $v(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "static", 3, !1), s = m(e, "anchor", 3, !0), u = m(e, "fixed", 3, !1), l = m(e, "open", 31, () => Ce(a())), c = m(e, "managed", 3, !1), d = m(e, "fullWidth", 3, !1), v = m(e, "quickOpen", 3, !1), f = m(e, "anchorElement", 15), h = m(e, "anchorMargin", 19, () => ({ top: 0, right: 0, bottom: 0, left: 0 })), g = m(e, "maxHeight", 3, 0), p = m(e, "horizontallyCenteredOnViewport", 3, !1), _ = m(e, "openBottomBias", 3, 0), y = m(e, "neverRestoreFocus", 3, !1), x = /* @__PURE__ */ Ve(e, [
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
  ]), S, A = /* @__PURE__ */ le(void 0), w = Ce({}), I = Ce({}), C = /* @__PURE__ */ le(void 0);
  ce("SMUI:list:role", "menu"), ce("SMUI:list:item:role", "menuitem"), Se(() => {
    var M, Q;
    S && s() && !((M = S.parentElement) != null && M.classList.contains("mdc-menu-surface--anchor")) && ((Q = S.parentElement) == null || Q.classList.add("mdc-menu-surface--anchor"), f(S.parentElement ?? void 0));
  }), Se(() => {
    o(A) && o(A).isOpen() !== l() && (l() ? o(A).open() : o(A).close());
  }), Se(() => {
    o(A) && o(A).setQuickOpen(v());
  }), Se(() => {
    o(A) && o(A).setFixedPosition(u());
  }), Se(() => {
    o(A) && o(A).setMaxHeight(g());
  }), Se(() => {
    o(A) && o(A).setIsHorizontallyCenteredOnViewport(p());
  });
  const b = gi;
  Se(() => {
    o(A) && e.anchorCorner != null && (typeof e.anchorCorner == "string" ? o(A).setAnchorCorner(b[e.anchorCorner]) : o(A).setAnchorCorner(e.anchorCorner));
  }), Se(() => {
    o(A) && o(A).setAnchorMargin(h());
  }), Se(() => {
    o(A) && o(A).setOpenBottomBias(_());
  });
  const T = ye("SMUI:menu-surface:mount"), R = ye("SMUI:menu-surface:unmount");
  rt(() => {
    W(
      A,
      new uu({
        addClass: L,
        removeClass: O,
        hasClass: D,
        hasAnchor: () => !!f(),
        notifyClose: () => {
          c() || l(a()), l() || Be(ie(), "SMUIMenuSurfaceClosed");
        },
        notifyClosing: () => {
          c() || l(a()), l() || Be(ie(), "SMUIMenuSurfaceClosing");
        },
        notifyOpen: () => {
          c() || l(!0), l() && Be(ie(), "SMUIMenuSurfaceOpened");
        },
        notifyOpening: () => {
          l() || Be(ie(), "SMUIMenuSurfaceOpening");
        },
        isElementInContainer: (Q) => ie().contains(Q),
        isRtl: () => getComputedStyle(ie()).getPropertyValue("direction") === "rtl",
        setTransformOrigin: (Q) => {
          I["transform-origin"] = Q;
        },
        isFocused: () => document.activeElement === ie(),
        saveFocus: () => {
          W(C, document.activeElement ?? void 0, !0);
        },
        restoreFocus: () => {
          !y() && (!S || ie().contains(document.activeElement)) && o(C) && document.contains(o(C)) && "focus" in o(C) && o(C).focus();
        },
        getInnerDimensions: () => ({
          width: ie().offsetWidth,
          height: ie().offsetHeight
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
    const M = {
      get open() {
        return l();
      },
      set open(Q) {
        l(Q);
      },
      closeProgrammatic: re
    };
    return T && T(M), o(A).init(), () => {
      var Y, ge;
      R && R(M);
      const Q = o(A).isHoistedElement;
      (Y = o(A)) == null || Y.destroy(), Q && ((ge = ie().parentNode) == null || ge.removeChild(ie()));
    };
  }), Fn(() => {
    var M;
    s() && ie() && ((M = ie().parentElement) == null || M.classList.remove("mdc-menu-surface--anchor"));
  });
  function D(M) {
    return M in w ? w[M] : ie().classList.contains(M);
  }
  function L(M) {
    w[M] || (w[M] = !0);
  }
  function O(M) {
    (!(M in w) || w[M]) && (w[M] = !1);
  }
  function re(M) {
    var Q;
    (Q = o(A)) == null || Q.close(M), l(!1);
  }
  function U(M) {
    o(A) && l() && !c() && o(A).handleBodyClick(M);
  }
  function Z() {
    return l();
  }
  function H(M) {
    l(M);
  }
  function J(M, Q) {
    if (o(A) == null)
      throw new Error("Instance is not defined.");
    return o(A).setAbsolutePosition(M, Q);
  }
  function ue(M) {
    if (o(A) == null)
      throw new Error("Instance is not defined.");
    return o(A).setIsHoisted(M);
  }
  function k() {
    if (o(A) == null)
      throw new Error("Instance is not defined.");
    return o(A).isFixed();
  }
  function ee() {
    if (o(A) == null)
      throw new Error("Instance is not defined.");
    return o(A).flipCornerHorizontally();
  }
  function ie() {
    return S;
  }
  var be = {
    isOpen: Z,
    setOpen: H,
    setAbsolutePosition: J,
    setIsHoisted: ue,
    isFixed: k,
    flipCornerHorizontally: ee,
    getElement: ie
  }, fe = Jv();
  Pt("click", jo.body, U, !0);
  var j = (M) => {
    var Q;
    o(A) && !c() && o(A).handleKeydown(M), (Q = e.onkeydown) == null || Q.call(e, M);
  };
  He(
    fe,
    (M, Q) => ({
      class: M,
      style: Q,
      role: "dialog",
      ...x,
      onkeydown: j
    }),
    [
      () => Ze({
        "mdc-menu-surface": !0,
        "mdc-menu-surface--fixed": u(),
        "mdc-menu-surface--open": a(),
        "smui-menu-surface--static": a(),
        "mdc-menu-surface--fullwidth": d(),
        ...w,
        [r()]: !0
      }),
      () => Object.entries(I).map(([M, Q]) => `${M}: ${Q};`).concat([i()]).join(" ")
    ]
  );
  var V = N(fe);
  return _e(V, () => e.children ?? Ie), xe(fe, (M) => S = M, () => S), De(fe, (M, Q) => ae == null ? void 0 : ae(M, Q), t), E(n, fe), Ee(be);
}
function ro(n, { addClass: e = (r) => n.classList.add(r), removeClass: t = (r) => n.classList.remove(r) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      t("mdc-menu-surface--anchor");
    }
  };
}
function eh(n, e) {
  Ae(e, !0);
  const { closest: t } = Na;
  let r = m(e, "use", 19, () => []), i = m(e, "class", 3, ""), a = m(e, "open", 15, !1), s = m(e, "anchorElement", 15), u = m(e, "managed", 3, !1), l = /* @__PURE__ */ Ve(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "open",
    "anchorElement",
    "managed",
    "children"
  ]), c, d = /* @__PURE__ */ le(void 0), v = /* @__PURE__ */ le(void 0), f = /* @__PURE__ */ le(void 0);
  ce("SMUI:menu-surface:mount", (b) => {
    o(v) || W(v, b, !0);
  });
  const h = ye("SMUI:list:mount");
  ce("SMUI:list:mount", (b) => {
    o(f) || W(f, b, !0), h && h(b);
  });
  const g = ye("SMUI:menu:mount"), p = ye("SMUI:menu:unmount");
  rt(() => (W(
    d,
    new qv({
      addClassToElementAtIndex: (b, T) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).addClassForElementIndex(b, T);
      },
      removeClassFromElementAtIndex: (b, T) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).removeClassForElementIndex(b, T);
      },
      addAttributeToElementAtIndex: (b, T, R) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).setAttributeForElementIndex(b, T, R);
      },
      removeAttributeFromElementAtIndex: (b, T) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).removeAttributeForElementIndex(b, T);
      },
      getAttributeFromElementAtIndex: (b, T) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return o(f).getAttributeFromElementIndex(b, T);
      },
      elementContainsClass: (b, T) => b.classList.contains(T),
      closeSurface: (b) => {
        var T;
        u() || ((T = o(v)) == null || T.closeProgrammatic(b), Be(I(), "SMUIMenuClosedProgrammatically"));
      },
      getElementIndex: (b) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return o(f).getOrderedList().map((T) => T.element).indexOf(b);
      },
      notifySelected: (b) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        Be(I(), "SMUIMenuSelected", {
          index: b.index,
          item: o(f).getOrderedList()[b.index].element
        });
      },
      getMenuItemCount: () => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return o(f).items.length;
      },
      focusItemAtIndex: (b) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).focusItemAtIndex(b);
      },
      focusListRoot: () => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        "focus" in o(f).element && o(f).element.focus();
      },
      isSelectableItemAtIndex: (b) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return !!t(o(f).getOrderedList()[b].element, `.${Zi.MENU_SELECTION_GROUP}`);
      },
      getSelectedSiblingOfItemAtIndex: (b) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        const T = o(f).getOrderedList(), R = t(T[b].element, `.${Zi.MENU_SELECTION_GROUP}`), D = R == null ? void 0 : R.querySelector(`.${Zi.MENU_SELECTED_LIST_ITEM}`);
        return D ? T.map((L) => L.element).indexOf(D) : -1;
      }
    }),
    !0
  ), g && g(o(d)), o(d).init(), () => {
    var b;
    p && o(d) && p(o(d)), (b = o(d)) == null || b.destroy();
  }));
  function _(b) {
    o(d) && o(d).handleKeydown(b);
  }
  function y() {
    return a();
  }
  function x(b) {
    a(b);
  }
  function S(b) {
    if (o(d) == null)
      throw new Error("Instance is undefined.");
    o(d).setDefaultFocusState(b);
  }
  function A() {
    if (o(d) == null)
      throw new Error("Instance is undefined.");
    return o(d).getSelectedIndex();
  }
  function w() {
    return c;
  }
  function I() {
    return c.getElement();
  }
  var C = {
    isOpen: y,
    setOpen: x,
    setDefaultFocusState: S,
    getSelectedIndex: A,
    getMenuSurface: w,
    getElement: I
  };
  {
    let b = /* @__PURE__ */ ne(() => Ze({ "mdc-menu": !0, [i()]: !0 }));
    xe(
      $v(n, Qe(
        {
          get use() {
            return r();
          },
          get class() {
            return o(b);
          },
          get managed() {
            return u();
          }
        },
        () => l,
        {
          onkeydown: (T) => {
            var R;
            _(T), (R = e.onkeydown) == null || R.call(e, T);
          },
          onSMUIMenuSurfaceOpened: (T) => {
            var R;
            o(d) && o(d).handleMenuSurfaceOpened(), (R = e.onSMUIMenuSurfaceOpened) == null || R.call(e, T);
          },
          onSMUIListAction: (T) => {
            var R;
            o(d) && o(f) && o(d).handleItemAction(o(f).getOrderedList()[T.detail.index].element), (R = e.onSMUIListAction) == null || R.call(e, T);
          },
          get open() {
            return a();
          },
          set open(T) {
            a(T);
          },
          get anchorElement() {
            return s();
          },
          set anchorElement(T) {
            s(T);
          },
          children: (T, R) => {
            var D = oe(), L = K(D);
            _e(L, () => e.children ?? Ie), E(T, D);
          },
          $$slots: { default: !0 }
        }
      )),
      (T) => c = T,
      () => c
    );
  }
  return Ee(C);
}
function th(n, e) {
  Ae(e, !0);
  const { closest: t, matches: r } = Na;
  let i = ye("SMUI:list:nav"), a = m(e, "use", 19, () => []), s = m(e, "class", 3, ""), u = m(e, "nonInteractive", 3, !1), l = m(e, "dense", 3, !1), c = m(e, "textualList", 3, !1), d = m(e, "avatarList", 3, !1), v = m(e, "iconList", 3, !1), f = m(e, "imageList", 3, !1), h = m(e, "thumbnailList", 3, !1), g = m(e, "videoList", 3, !1), p = m(e, "twoLine", 3, !1), _ = m(e, "threeLine", 3, !1), y = m(e, "vertical", 3, !0), x = m(e, "wrapFocus", 19, () => ye("SMUI:list:wrapFocus") ?? !1), S = m(e, "singleSelection", 3, !1), A = m(e, "disabledItemsFocusable", 3, !1), w = m(e, "selectedIndex", 31, () => -1), I = m(e, "radioList", 3, !1), C = m(e, "checkList", 3, !1), b = m(e, "hasTypeahead", 3, !1), T = m(e, "component", 3, Fs), R = m(e, "tag", 3, i ? "nav" : "ul"), D = /* @__PURE__ */ Ve(e, [
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
  ]), L, O = /* @__PURE__ */ le(void 0), re = [], U = ye("SMUI:list:role");
  const Z = /* @__PURE__ */ new WeakMap();
  let H = ye("SMUI:dialog:selection"), J = ye("SMUI:addLayoutListener"), ue;
  ce("SMUI:list:nonInteractive", u()), ce("SMUI:separator:context", "list"), U || (S() ? (U = "listbox", ce("SMUI:list:item:role", "option")) : I() ? (U = "radiogroup", ce("SMUI:list:item:role", "radio")) : C() ? (U = "group", ce("SMUI:list:item:role", "checkbox")) : (U = "list", ce("SMUI:list:item:role", void 0))), Se(() => {
    o(O) && o(O).setVerticalOrientation(y());
  }), Se(() => {
    o(O) && o(O).setWrapFocus(x());
  }), Se(() => {
    o(O) && o(O).setHasTypeahead(b());
  }), Se(() => {
    o(O) && o(O).setSingleSelection(S());
  }), Se(() => {
    o(O) && o(O).setDisabledItemsFocusable(A());
  }), Se(() => {
    o(O) && S() && P() !== w() && o(O).setSelectedIndex(w());
  }), J && (ue = J(st)), ce("SMUI:list:item:mount", (me) => {
    re.push(me), Z.set(me.element, me), S() && me.selected && w(Re(me.element));
  }), ce("SMUI:list:item:unmount", (me) => {
    const B = (me && re.findIndex((G) => G === me)) ?? -1;
    B !== -1 && (re.splice(B, 1), Z.delete(me.element));
  });
  const k = ye("SMUI:list:mount"), ee = ye("SMUI:list:unmount");
  rt(() => {
    W(
      O,
      new Xv({
        addClassForElementIndex: Y,
        focusItemAtIndex: ve,
        getAttributeForElementIndex: (B, G) => {
          var te;
          return ((te = M()[B]) == null ? void 0 : te.getAttr(G)) ?? null;
        },
        getFocusedElementIndex: () => document.activeElement ? M().map((B) => B.element).indexOf(document.activeElement) : -1,
        getListItemCount: () => re.length,
        getPrimaryTextAtIndex: Ke,
        hasCheckboxAtIndex: (B) => {
          var G;
          return ((G = M()[B]) == null ? void 0 : G.hasCheckbox) ?? !1;
        },
        hasRadioAtIndex: (B) => {
          var G;
          return ((G = M()[B]) == null ? void 0 : G.hasRadio) ?? !1;
        },
        isCheckboxCheckedAtIndex: (B) => {
          const G = M()[B];
          return ((G == null ? void 0 : G.hasCheckbox) && G.checked) ?? !1;
        },
        isFocusInsideList: () => L != null && Fe() !== document.activeElement && Fe().contains(document.activeElement),
        isRootFocused: () => L != null && document.activeElement === Fe(),
        listItemAtIndexHasClass: Q,
        notifyAction: (B) => {
          w(B), L != null && Be(Fe(), "SMUIListAction", { index: B });
        },
        notifySelectionChange: (B) => {
          L != null && Be(Fe(), "SMUIListSelectionChange", { changedIndices: B });
        },
        removeClassForElementIndex: ge,
        setAttributeForElementIndex: pe,
        setCheckedCheckboxOrRadioAtIndex: (B, G) => {
          M()[B].checked = G;
        },
        setTabIndexForListItemChildren: (B, G) => {
          const te = M()[B];
          Array.prototype.forEach.call(te.element.querySelectorAll("button:not(:disabled), a"), (ot) => {
            ot.setAttribute("tabindex", G);
          });
        }
      }),
      !0
    );
    const me = {
      get element() {
        return Fe();
      },
      get items() {
        return re;
      },
      get typeaheadInProgress() {
        if (!o(O))
          throw new Error("Instance is undefined.");
        return o(O).isTypeaheadInProgress();
      },
      typeaheadMatchItem(B, G) {
        if (!o(O))
          throw new Error("Instance is undefined.");
        return o(O).typeaheadMatchItem(
          B,
          G,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: M,
      focusItemAtIndex: ve,
      addClassForElementIndex: Y,
      removeClassForElementIndex: ge,
      setAttributeForElementIndex: pe,
      removeAttributeForElementIndex: Ne,
      getAttributeFromElementIndex: tt,
      getPrimaryTextAtIndex: Ke
    };
    return k && k(me), o(O).init(), o(O).layout(), () => {
      var B;
      ee && ee(me), (B = o(O)) == null || B.destroy();
    };
  }), Fn(() => {
    ue && ue();
  });
  function ie(me) {
    o(O) && me.target && o(O).handleKeydown(me, me.target.classList.contains("mdc-deprecated-list-item"), Re(me.target));
  }
  function be(me) {
    o(O) && me.target && o(O).handleFocusIn(Re(me.target));
  }
  function fe(me) {
    o(O) && me.target && o(O).handleFocusOut(Re(me.target));
  }
  function j(me) {
    o(O) && me.target && o(O).handleClick(Re(me.target), !r(me.target, 'input[type="checkbox"], input[type="radio"]'), me);
  }
  function V(me) {
    if (I() || C()) {
      const B = Re(me.target);
      if (B !== -1) {
        const G = M()[B];
        G && (I() && !G.checked || C()) && (r(me.detail.target, 'input[type="checkbox"], input[type="radio"]') || (G.checked = !G.checked), G.activateRipple(), window.requestAnimationFrame(() => {
          G.deactivateRipple();
        }));
      }
    }
  }
  function M() {
    return L == null ? [] : [...Fe().children].map((me) => Z.get(me)).filter((me) => me && me._smui_list_item_accessor);
  }
  function Q(me, B) {
    const G = M()[me];
    return (G && G.hasClass(B)) ?? !1;
  }
  function Y(me, B) {
    const G = M()[me];
    G && G.addClass(B);
  }
  function ge(me, B) {
    const G = M()[me];
    G && G.removeClass(B);
  }
  function pe(me, B, G) {
    const te = M()[me];
    te && te.addAttr(B, G);
  }
  function Ne(me, B) {
    const G = M()[me];
    G && G.removeAttr(B);
  }
  function tt(me, B) {
    const G = M()[me];
    return G ? G.getAttr(B) : null;
  }
  function Ke(me) {
    const B = M()[me];
    return (B && B.getPrimaryText()) ?? "";
  }
  function Re(me) {
    const B = t(me, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return B && r(B, ".mdc-deprecated-list-item") ? M().map((G) => G == null ? void 0 : G.element).indexOf(B) : -1;
  }
  function st() {
    if (!o(O))
      throw new Error("Instance is undefined.");
    return o(O).layout();
  }
  function kt(me, B) {
    if (!o(O))
      throw new Error("Instance is undefined.");
    return o(O).setEnabled(me, B);
  }
  function Gt() {
    if (!o(O))
      throw new Error("Instance is undefined.");
    return o(O).isTypeaheadInProgress();
  }
  function P() {
    if (!o(O))
      throw new Error("Instance is undefined.");
    return o(O).getSelectedIndex();
  }
  function z() {
    if (!o(O))
      throw new Error("Instance is undefined.");
    return o(O).getFocusedItemIndex();
  }
  function ve(me) {
    const B = M()[me];
    B && "focus" in B.element && B.element.focus();
  }
  function Fe() {
    return L.getElement();
  }
  var Nt = {
    layout: st,
    setEnabled: kt,
    getTypeaheadInProgress: Gt,
    getSelectedIndex: P,
    getFocusedItemIndex: z,
    focusItemAtIndex: ve,
    getElement: Fe
  }, vn = oe(), ar = K(vn);
  {
    let me = /* @__PURE__ */ ne(() => Ze({
      "mdc-deprecated-list": !0,
      "mdc-deprecated-list--non-interactive": u(),
      "mdc-deprecated-list--dense": l(),
      "mdc-deprecated-list--textual-list": c(),
      "mdc-deprecated-list--avatar-list": d() || H,
      "mdc-deprecated-list--icon-list": v(),
      "mdc-deprecated-list--image-list": f(),
      "mdc-deprecated-list--thumbnail-list": h(),
      "mdc-deprecated-list--video-list": g(),
      "mdc-deprecated-list--two-line": p(),
      "smui-list--three-line": _() && !p(),
      [s()]: !0
    }));
    Ga(ar, T, (B, G) => {
      xe(
        G(B, Qe(
          {
            get tag() {
              return R();
            },
            get use() {
              return a();
            },
            get class() {
              return o(me);
            },
            get role() {
              return U;
            }
          },
          () => D,
          {
            onkeydown: (te) => {
              var Te;
              ie(te), (Te = e.onkeydown) == null || Te.call(e, te);
            },
            onfocusin: (te) => {
              var Te;
              be(te), (Te = e.onfocusin) == null || Te.call(e, te);
            },
            onfocusout: (te) => {
              var Te;
              fe(te), (Te = e.onfocusout) == null || Te.call(e, te);
            },
            onclick: (te) => {
              var Te;
              j(te), (Te = e.onclick) == null || Te.call(e, te);
            },
            onSMUIAction: (te) => {
              var Te;
              V(te), (Te = e.onSMUIAction) == null || Te.call(e, te);
            },
            children: (te, Te) => {
              var ot = oe(), It = K(ot);
              _e(It, () => e.children ?? Ie), E(te, ot);
            },
            $$slots: { default: !0 }
          }
        )),
        (te) => L = te,
        () => L
      );
    });
  }
  return E(n, vn), Ee(Nt);
}
let nh = 0;
var rh = /* @__PURE__ */ X('<span class="mdc-deprecated-list-item__ripple"></span>'), ih = /* @__PURE__ */ X("<!><!>", 1);
function ah(n, e) {
  Ae(e, !0);
  let t = () => {
  };
  function r(Y) {
    return Y === t;
  }
  let i = ye("SMUI:list:item:nav"), a = m(e, "use", 19, () => []), s = m(e, "class", 3, ""), u = m(e, "style", 3, ""), l = m(e, "nonInteractive", 19, () => ye("SMUI:list:nonInteractive") ?? !1), c = m(e, "ripple", 19, () => !l()), d = m(e, "wrapper", 3, !1), v = m(e, "activated", 15, !1), f = m(e, "role", 19, () => d() ? "presentation" : ye("SMUI:list:item:role")), h = m(e, "selected", 15, !1), g = m(e, "disabled", 3, !1), p = m(e, "skipRestoreFocus", 3, !1), _ = m(e, "tabindex", 15, t), y = m(e, "inputId", 19, () => "SMUI-form-field-list-" + nh++), x = m(e, "component", 3, Fs), S = m(e, "tag", 19, () => i ? e.href ? "a" : "span" : "li"), A = /* @__PURE__ */ Ve(e, [
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
  ce("SMUI:list:nonInteractive", void 0), ce("SMUI:list:item:role", void 0);
  let w, I = Ce({}), C = Ce({}), b = Ce({}), T = /* @__PURE__ */ le(void 0), R = /* @__PURE__ */ le(void 0);
  const D = /* @__PURE__ */ ne(() => r(_()) ? !l() && !g() && (h() || o(T) && o(T).checked) ? 0 : -1 : _());
  ce("SMUI:generic:input:props", { id: y() }), ce("SMUI:separator:context", void 0), ce("SMUI:generic:input:mount", (Y) => {
    ("_smui_checkbox_accessor" in Y || "_smui_radio_accessor" in Y) && W(T, Y, !0);
  }), ce("SMUI:generic:input:unmount", () => {
    W(T, void 0);
  });
  const L = ye("SMUI:list:item:mount"), O = ye("SMUI:list:item:unmount");
  rt(() => {
    if (!h() && !l()) {
      let ge = !0, pe = w.getElement();
      for (; pe.previousElementSibling; )
        if (pe = pe.previousElementSibling, pe.nodeType === 1 && pe.classList.contains("mdc-deprecated-list-item") && !pe.classList.contains("mdc-deprecated-list-item--disabled")) {
          ge = !1;
          break;
        }
      ge && W(R, window.requestAnimationFrame(() => ee(pe)), !0);
    }
    const Y = {
      _smui_list_item_accessor: !0,
      get element() {
        return j();
      },
      get selected() {
        return h();
      },
      set selected(ge) {
        h(ge);
      },
      hasClass: re,
      addClass: U,
      removeClass: Z,
      getAttr: J,
      addAttr: ue,
      removeAttr: k,
      getPrimaryText: fe,
      // For inputs within item.
      get checked() {
        return (o(T) && o(T).checked) ?? !1;
      },
      set checked(ge) {
        o(T) && (o(T).checked = !!ge);
      },
      get hasCheckbox() {
        return !!(o(T) && "_smui_checkbox_accessor" in o(T));
      },
      get hasRadio() {
        return !!(o(T) && "_smui_radio_accessor" in o(T));
      },
      activateRipple() {
        o(T) && o(T).activateRipple();
      },
      deactivateRipple() {
        o(T) && o(T).deactivateRipple();
      },
      // For select options.
      getValue() {
        return e.value;
      },
      // For autocomplete
      action: be,
      get tabindex() {
        return o(D);
      },
      set tabindex(ge) {
        _(ge);
      },
      get disabled() {
        return g();
      },
      get activated() {
        return v();
      },
      set activated(ge) {
        v(ge);
      }
    };
    return L && L(Y), () => {
      O && O(Y);
    };
  }), Fn(() => {
    o(R) && window.cancelAnimationFrame(o(R));
  });
  function re(Y) {
    return Y in I ? I[Y] : j().classList.contains(Y);
  }
  function U(Y) {
    I[Y] || (I[Y] = !0);
  }
  function Z(Y) {
    (!(Y in I) || I[Y]) && (I[Y] = !1);
  }
  function H(Y, ge) {
    C[Y] != ge && (ge === "" || ge == null ? delete C[Y] : C[Y] = ge);
  }
  function J(Y) {
    return Y in b ? b[Y] ?? null : j().getAttribute(Y);
  }
  function ue(Y, ge) {
    b[Y] !== ge && (b[Y] = ge);
  }
  function k(Y) {
    (!(Y in b) || b[Y] != null) && (b[Y] = void 0);
  }
  function ee(Y) {
    let ge = !0;
    for (; Y.nextElementSibling; )
      if (Y = Y.nextElementSibling, Y.nodeType === 1 && Y.classList.contains("mdc-deprecated-list-item")) {
        const pe = Y.attributes.getNamedItem("tabindex");
        if (pe && pe.value === "0") {
          ge = !1;
          break;
        }
      }
    ge && _(0);
  }
  function ie(Y) {
    const ge = Y.key === "Enter", pe = Y.key === "Space";
    (ge || pe) && be(Y);
  }
  function be(Y) {
    g() || Be(j(), "SMUIAction", Y);
  }
  function fe() {
    const Y = j(), ge = Y.querySelector(".mdc-deprecated-list-item__primary-text");
    if (ge)
      return ge.textContent ?? "";
    const pe = Y.querySelector(".mdc-deprecated-list-item__text");
    return pe ? pe.textContent ?? "" : Y.textContent ?? "";
  }
  function j() {
    return w.getElement();
  }
  var V = { action: be, getPrimaryText: fe, getElement: j }, M = oe(), Q = K(M);
  {
    let Y = /* @__PURE__ */ ne(() => [
      ...l() ? [] : [
        [
          Gn,
          {
            ripple: !o(T),
            unbounded: !1,
            color: (v() || h()) && e.color == null ? "primary" : e.color,
            disabled: g(),
            addClass: U,
            removeClass: Z,
            addStyle: H
          }
        ]
      ],
      ...a()
    ]), ge = /* @__PURE__ */ ne(() => Ze({
      "mdc-deprecated-list-item": !d(),
      "mdc-deprecated-list-item__wrapper": d(),
      "mdc-deprecated-list-item--activated": v(),
      "mdc-deprecated-list-item--selected": h(),
      "mdc-deprecated-list-item--disabled": g(),
      "mdc-menu-item--selected": !i && f() === "menuitem" && h(),
      "smui-menu-item--non-interactive": l(),
      ...I,
      [s()]: !0
    })), pe = /* @__PURE__ */ ne(() => Object.entries(C).map(([tt, Ke]) => `${tt}: ${Ke};`).concat([u()]).join(" ")), Ne = /* @__PURE__ */ ne(() => p() || void 0);
    Ga(Q, x, (tt, Ke) => {
      xe(
        Ke(tt, Qe(
          {
            get tag() {
              return S();
            },
            get use() {
              return o(Y);
            },
            get class() {
              return o(ge);
            },
            get style() {
              return o(pe);
            }
          },
          () => i && v() ? { "aria-current": "page" } : {},
          () => !i || d() ? { role: f() } : {},
          () => !i && f() === "option" ? { "aria-selected": h() ? "true" : "false" } : {},
          () => !i && (f() === "radio" || f() === "checkbox") ? {
            "aria-checked": o(T) && o(T).checked ? "true" : "false"
          } : {},
          () => i ? {} : { "aria-disabled": g() ? "true" : "false" },
          {
            get "data-menu-item-skip-restore-focus"() {
              return o(Ne);
            },
            get tabindex() {
              return o(D);
            },
            get href() {
              return e.href;
            }
          },
          () => b,
          () => A,
          {
            onclick: (Re) => {
              var st;
              be(Re), (st = e.onclick) == null || st.call(e, Re);
            },
            onkeydown: (Re) => {
              var st;
              ie(Re), (st = e.onkeydown) == null || st.call(e, Re);
            },
            children: (Re, st) => {
              var kt = ih(), Gt = K(kt);
              {
                var P = (ve) => {
                  var Fe = rh();
                  E(ve, Fe);
                };
                $(Gt, (ve) => {
                  c() && ve(P);
                });
              }
              var z = q(Gt);
              _e(z, () => e.children ?? Ie), E(Re, kt);
            },
            $$slots: { default: !0 }
          }
        )),
        (Re) => w = Re,
        () => w
      );
    });
  }
  return E(n, M), Ee(V);
}
let sh = 0;
var oh = /* @__PURE__ */ X("<div><!></div>");
function lh(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "id", 19, () => "SMUI-select-helper-text-" + sh++), a = m(e, "persistent", 3, !1), s = m(e, "validationMsg", 3, !1), u = /* @__PURE__ */ Ve(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "id",
    "persistent",
    "validationMsg",
    "children"
  ]), l, c = /* @__PURE__ */ le(void 0), d = Ce({}), v = Ce({}), f = /* @__PURE__ */ le(void 0);
  const h = ye("SMUI:select:helper-text:id"), g = ye("SMUI:select:helper-text:mount"), p = ye("SMUI:select:helper-text:unmount");
  rt(() => (W(
    c,
    new Qv({
      addClass: y,
      removeClass: x,
      hasClass: _,
      getAttr: S,
      setAttr: A,
      removeAttr: w,
      setContent: (L) => {
        W(f, L, !0);
      }
    }),
    !0
  ), h && h(i()), g && g(o(c)), o(c).init(), () => {
    var L;
    p && o(c) && p(o(c)), (L = o(c)) == null || L.destroy();
  }));
  function _(L) {
    return L in d ? d[L] : I().classList.contains(L);
  }
  function y(L) {
    d[L] || (d[L] = !0);
  }
  function x(L) {
    (!(L in d) || d[L]) && (d[L] = !1);
  }
  function S(L) {
    return L in v ? v[L] ?? null : I().getAttribute(L);
  }
  function A(L, O) {
    v[L] !== O && (v[L] = O);
  }
  function w(L) {
    (!(L in v) || v[L] != null) && (v[L] = void 0);
  }
  function I() {
    return l;
  }
  var C = { getElement: I }, b = oh();
  He(
    b,
    (L) => ({
      class: L,
      "aria-hidden": a() ? void 0 : "true",
      id: i(),
      ...v,
      ...u
    }),
    [
      () => Ze({
        "mdc-select-helper-text": !0,
        "mdc-select-helper-text--validation-msg": s(),
        "mdc-select-helper-text--validation-msg-persistent": a(),
        ...d,
        [r()]: !0
      })
    ]
  );
  var T = N(b);
  {
    var R = (L) => {
      var O = oe(), re = K(O);
      _e(re, () => e.children ?? Ie), E(L, O);
    }, D = (L) => {
      var O = ct();
      de(() => Oe(O, o(f))), E(L, O);
    };
    $(T, (L) => {
      o(f) == null ? L(R) : L(D, !1);
    });
  }
  return xe(b, (L) => l = L, () => l), De(b, (L, O) => ae == null ? void 0 : ae(L, O), t), E(n, b), Ee(C);
}
let dh = 0;
var uh = /* @__PURE__ */ X("<input/>"), ch = /* @__PURE__ */ X('<span class="mdc-select__ripple"></span>'), fh = /* @__PURE__ */ X('<div><!> <div><!> <!> <!> <!> <span><span> </span></span> <span><svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"><polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon><polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon></svg></span> <!></div> <!></div> <!>', 1);
function vh(n, e) {
  Ae(e, !0);
  const t = () => bi(Fe, "$selectedTextStore", r), [r, i] = Si();
  let a = () => {
  };
  function s(F) {
    return F === a;
  }
  let u = m(e, "use", 19, () => []), l = m(e, "class", 3, ""), c = m(e, "style", 3, ""), d = m(e, "ripple", 3, !0), v = m(e, "disabled", 3, !1), f = m(e, "variant", 3, "standard"), h = m(e, "noLabel", 3, !1), g = m(e, "label", 3, void 0), p = m(e, "value", 15), _ = m(e, "key", 3, (F) => F), y = m(e, "dirty", 15, !1), x = m(e, "invalid", 15, a), S = m(e, "updateInvalid", 19, () => s(x())), A = m(e, "required", 3, !1), w = m(e, "inputId", 19, () => "SMUI-select-" + dh++), I = m(e, "hiddenInput", 3, !1), C = m(e, "withLeadingIcon", 3, a), b = m(e, "anchor$use", 19, () => []), T = m(e, "anchor$class", 3, ""), R = m(e, "selectedTextContainer$use", 19, () => []), D = m(e, "selectedTextContainer$class", 3, ""), L = m(e, "selectedText$use", 19, () => []), O = m(e, "selectedText$class", 3, ""), re = m(e, "dropdownIcon$use", 19, () => []), U = m(e, "dropdownIcon$class", 3, ""), Z = m(e, "menu$class", 3, ""), H = /* @__PURE__ */ Ve(e, [
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
  const J = s(x());
  s(x()) && x(!1);
  let ue, k = /* @__PURE__ */ le(void 0), ee = Ce({}), ie = Ce({}), be, fe = Ce({}), j = /* @__PURE__ */ le(-1);
  const V = /* @__PURE__ */ ne(() => H.menu$id ?? w() + "-menu");
  let M = /* @__PURE__ */ le(void 0), Q = ye("SMUI:addLayoutListener"), Y, ge = /* @__PURE__ */ le(!1), pe = Ce({}), Ne = /* @__PURE__ */ le(void 0), tt = /* @__PURE__ */ le(void 0), Ke = /* @__PURE__ */ le(!1), Re, st = ye("SMUI:select:context"), kt, Gt, P, z, ve;
  ce("SMUI:list:role", ""), ce("SMUI:list:nav", !1);
  const Fe = jn("");
  ce("SMUI:select:selectedText", Fe);
  const Nt = jn(p());
  Se(() => {
    tr(Nt, p());
  }), ce("SMUI:select:value", Nt), Se(() => {
    o(k) && o(k).getValue() !== _()(p()) && o(k).setValue(_()(p()));
  });
  let vn = o(j);
  Se(() => {
    if (vn !== o(j))
      if (vn = o(j), o(k))
        o(k).setSelectedIndex(
          o(j),
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const F = an();
        p() !== F[o(j)] && p(F[o(j)]);
      }
  }), Se(() => {
    o(k) && o(k).getDisabled() !== v() && o(k).setDisabled(v());
  }), Se(() => {
    o(k) && y() && o(k).isValid() !== !x() && (S() ? x(!o(k).isValid()) : o(k).setValid(!x()));
  }), Se(() => {
    o(k) && o(k).getRequired() !== A() && o(k).setRequired(A());
  }), Q && (Y = Q(Wa)), ce("SMUI:select:leading-icon:mount", (F) => {
    kt = F;
  }), ce("SMUI:select:leading-icon:unmount", () => {
    kt = void 0;
  }), ce("SMUI:list:mount", (F) => {
    Re = F;
  }), ce("SMUI:select:helper-text:id", (F) => {
    W(M, F, !0);
  }), ce("SMUI:select:helper-text:mount", (F) => {
    Gt = F;
  }), ce("SMUI:select:helper-text:unmount", () => {
    W(M, void 0), Gt = void 0;
  }), rt(() => (W(
    k,
    new Kv(
      {
        // getSelectAdapterMethods
        // getMenuItemAttr: (menuItem: Element, attr: string) =>
        //   menuItem.getAttribute(attr),
        setSelectedText: (F) => {
          tr(Fe, F);
        },
        isSelectAnchorFocused: () => document.activeElement === be,
        getSelectAnchorAttr: ot,
        setSelectAnchorAttr: It,
        removeSelectAnchorAttr: Zt,
        addMenuClass: te,
        removeMenuClass: Te,
        openMenu: () => {
          W(ge, !0);
        },
        closeMenu: () => {
          W(ge, !1);
        },
        getAnchorElement: () => be,
        setMenuAnchorElement: (F) => {
          W(Ne, F, !0);
        },
        setMenuAnchorCorner: (F) => {
          W(tt, F, !0);
        },
        setMenuWrapFocus: (F) => {
          W(Ke, F, !0);
        },
        getSelectedIndex: () => o(j),
        setSelectedIndex: (F) => {
          vn = F, W(j, F, !0), p(an()[o(j)]);
        },
        focusMenuItemAtIndex: (F) => {
          Re.focusItemAtIndex(F);
        },
        getMenuItemCount: () => Re.items.length,
        getMenuItemValues: () => an().map(_()),
        getMenuItemTextAtIndex: (F) => Re.getPrimaryTextAtIndex(F),
        isTypeaheadInProgress: () => Re.typeaheadInProgress,
        typeaheadMatchItem: (F, he) => Re.typeaheadMatchItem(F, he),
        // getCommonAdapterMethods
        addClass: me,
        removeClass: B,
        hasClass: ar,
        setRippleCenter: (F) => z && z.setRippleCenter(F),
        activateBottomLine: () => z && z.activate(),
        deactivateBottomLine: () => z && z.deactivate(),
        notifyChange: (F) => {
          var he;
          y(!0), S() && x(!((he = o(k)) != null && he.isValid())), Be(Sr(), "SMUISelectChange", { value: p(), index: o(j) });
        },
        // getOutlineAdapterMethods
        hasOutline: () => !!ve,
        notchOutline: (F) => ve && ve.notch(F),
        closeOutline: () => ve && ve.closeNotch(),
        // getLabelAdapterMethods
        hasLabel: () => !!P,
        floatLabel: (F) => P && P.float(F),
        getLabelWidth: () => P ? P.getWidth() : 0,
        setLabelRequired: (F) => P && P.setRequired(F)
      },
      {
        get helperText() {
          return Gt;
        },
        get leadingIcon() {
          return kt;
        }
      }
    ),
    !0
  ), W(j, an().indexOf(p()), !0), o(k).init(), sn(J), () => {
    var F;
    (F = o(k)) == null || F.destroy();
  })), Fn(() => {
    Y && Y();
  });
  function ar(F) {
    return F in ee ? ee[F] : Sr().classList.contains(F);
  }
  function me(F) {
    ee[F] || (ee[F] = !0);
  }
  function B(F) {
    (!(F in ee) || ee[F]) && (ee[F] = !1);
  }
  function G(F, he) {
    ie[F] != he && (he === "" || he == null ? delete ie[F] : ie[F] = he);
  }
  function te(F) {
    pe[F] || (pe[F] = !0);
  }
  function Te(F) {
    (!(F in pe) || pe[F]) && (pe[F] = !1);
  }
  function ot(F) {
    return F in fe ? fe[F] ?? null : Sr().getAttribute(F);
  }
  function It(F, he) {
    fe[F] !== he && (fe[F] = he);
  }
  function Zt(F) {
    (!(F in fe) || fe[F] != null) && (fe[F] = void 0);
  }
  function an() {
    return Re.getOrderedList().map((F) => F.getValue());
  }
  function xi(F) {
    const he = F.currentTarget.getBoundingClientRect();
    return (ft(F) ? F.touches[0].clientX : F.clientX) - he.left;
  }
  function ft(F) {
    return "touches" in F;
  }
  function Ht() {
    if (o(k) == null)
      throw new Error("Instance is undefined.");
    return o(k).getUseDefaultValidation();
  }
  function sn(F) {
    var he;
    (he = o(k)) == null || he.setUseDefaultValidation(F);
  }
  function Er() {
    be.focus();
  }
  function Wa() {
    var F;
    (F = o(k)) == null || F.layout();
  }
  function Sr() {
    return ue;
  }
  var Ge = {
    getUseDefaultValidation: Ht,
    setUseDefaultValidation: sn,
    focus: Er,
    layout: Wa,
    getElement: Sr
  }, Je = fh(), ze = K(Je);
  He(ze, (F, he, nt) => ({ class: F, style: he, ...nt }), [
    () => Ze({
      "mdc-select": !0,
      "mdc-select--required": A(),
      "mdc-select--disabled": v(),
      "mdc-select--filled": f() === "filled",
      "mdc-select--outlined": f() === "outlined",
      "smui-select--standard": f() === "standard",
      "mdc-select--with-leading-icon": s(C()) ? e.leadingIcon : C(),
      "mdc-select--no-label": h() || g() == null,
      "mdc-select--invalid": x(),
      "mdc-select--activated": o(ge),
      "mdc-data-table__pagination-rows-per-page-select": st === "data-table:pagination",
      ...ee,
      [l()]: !0
    }),
    () => Object.entries(ie).map(([F, he]) => `${F}: ${he};`).concat([c()]).join(" "),
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
  var Bt = N(ze);
  {
    var Pn = (F) => {
      var he = uh();
      He(
        he,
        (nt) => ({
          type: "hidden",
          required: A(),
          disabled: v(),
          value: p(),
          ...nt
        }),
        [() => dt(H, "input$")],
        void 0,
        void 0,
        !0
      ), E(F, he);
    };
    $(Bt, (F) => {
      I() && F(Pn);
    });
  }
  var $e = q(Bt, 2), Ct = (F) => {
    var he;
    be.focus(), o(k) && o(k).handleClick(xi(F)), (he = e.anchor$onclick) == null || he.call(e, F);
  }, Lt = (F) => {
    var he;
    o(k) && o(k).handleKeydown(F), (he = e.onkeydown) == null || he.call(e, F);
  }, Ue = (F) => {
    var he;
    o(k) && o(k).handleBlur(), Be(Sr(), "blur", F), (he = e.anchor$onblur) == null || he.call(e, F);
  }, Rt = (F) => {
    var he;
    o(k) && o(k).handleFocus(), Be(Sr(), "focus", F), (he = e.anchor$onfocus) == null || he.call(e, F);
  };
  He(
    $e,
    (F, he) => ({
      class: F,
      "aria-required": A() ? "true" : void 0,
      "aria-disabled": v() ? "true" : void 0,
      "aria-controls": o(V),
      "aria-expanded": o(ge) ? "true" : "false",
      "aria-describedby": o(M),
      role: "combobox",
      tabindex: "0",
      ...fe,
      ...he,
      onclick: Ct,
      onkeydown: Lt,
      onblur: Ue,
      onfocus: Rt
    }),
    [
      () => Ze({ "mdc-select__anchor": !0, [T()]: !0 }),
      () => dt(H, "anchor$")
    ]
  );
  var sr = N($e);
  {
    var _n = (F) => {
      var he = ch();
      E(F, he);
    };
    $(sr, (F) => {
      f() === "filled" && F(_n);
    });
  }
  var At = q(sr, 2);
  {
    var Wt = (F) => {
      {
        let he = /* @__PURE__ */ ne(() => w() + "-smui-label"), nt = /* @__PURE__ */ ne(() => t() !== ""), Et = /* @__PURE__ */ ne(() => dt(H, "label$"));
        xe(
          fs(F, Qe(
            {
              get id() {
                return o(he);
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
              children: (lr, dr) => {
                var da = oe(), wi = K(da);
                {
                  var Qr = (Jr) => {
                  }, zs = (Jr) => {
                    var Ua = oe(), ua = K(Ua);
                    {
                      var ul = (wr) => {
                        var $r = ct();
                        de(() => Oe($r, g())), E(wr, $r);
                      }, ja = (wr) => {
                        var $r = oe(), Xs = K($r);
                        _e(Xs, g), E(wr, $r);
                      };
                      $(
                        ua,
                        (wr) => {
                          typeof g() == "string" ? wr(ul) : wr(ja, !1);
                        },
                        !0
                      );
                    }
                    E(Jr, Ua);
                  };
                  $(wi, (Jr) => {
                    g() == null ? Jr(Qr) : Jr(zs, !1);
                  });
                }
                E(lr, da);
              },
              $$slots: { default: !0 }
            }
          )),
          (lr) => P = lr,
          () => P
        );
      }
    };
    $(At, (F) => {
      f() !== "outlined" && !h() && g() != null && F(Wt);
    });
  }
  var yn = q(At, 2);
  {
    var Kt = (F) => {
      {
        let he = /* @__PURE__ */ ne(() => h() || g() == null), nt = /* @__PURE__ */ ne(() => dt(H, "outline$"));
        xe(
          su(F, Qe(
            {
              get noLabel() {
                return o(he);
              }
            },
            () => o(nt),
            {
              children: (Et, lr) => {
                var dr = oe(), da = K(dr);
                {
                  var wi = (Qr) => {
                    {
                      let zs = /* @__PURE__ */ ne(() => w() + "-smui-label"), Jr = /* @__PURE__ */ ne(() => t() !== ""), Ua = /* @__PURE__ */ ne(() => dt(H, "label$"));
                      xe(
                        fs(Qr, Qe(
                          {
                            get id() {
                              return o(zs);
                            },
                            get floatAbove() {
                              return o(Jr);
                            },
                            get required() {
                              return A();
                            }
                          },
                          () => o(Ua),
                          {
                            children: (ua, ul) => {
                              var ja = oe(), wr = K(ja);
                              {
                                var $r = (ca) => {
                                }, Xs = (ca) => {
                                  var cl = oe(), Ju = K(cl);
                                  {
                                    var $u = (Ti) => {
                                      var fa = ct();
                                      de(() => Oe(fa, g())), E(Ti, fa);
                                    }, ec = (Ti) => {
                                      var fa = oe(), tc = K(fa);
                                      _e(tc, g), E(Ti, fa);
                                    };
                                    $(
                                      Ju,
                                      (Ti) => {
                                        typeof g() == "string" ? Ti($u) : Ti(ec, !1);
                                      },
                                      !0
                                    );
                                  }
                                  E(ca, cl);
                                };
                                $(wr, (ca) => {
                                  g() == null ? ca($r) : ca(Xs, !1);
                                });
                              }
                              E(ua, ja);
                            },
                            $$slots: { default: !0 }
                          }
                        )),
                        (ua) => P = ua,
                        () => P
                      );
                    }
                  };
                  $(da, (Qr) => {
                    !h() && g() != null && Qr(wi);
                  });
                }
                E(Et, dr);
              },
              $$slots: { default: !0 }
            }
          )),
          (Et) => ve = Et,
          () => ve
        );
      }
    };
    $(yn, (F) => {
      f() === "outlined" && F(Kt);
    });
  }
  var qr = q(yn, 2);
  _e(qr, () => e.leadingIcon ?? Ie);
  var Cn = q(qr, 2);
  He(Cn, (F, he) => ({ class: F, ...he }), [
    () => Ze({
      "mdc-select__selected-text-container": !0,
      [D()]: !0
    }),
    () => dt(H, "selectedTextContainer$")
  ]);
  var xr = N(Cn);
  He(
    xr,
    (F, he) => ({
      id: w() + "-smui-selected-text",
      class: F,
      role: "button",
      "aria-haspopup": "listbox",
      "aria-labelledby": w() + "-smui-label",
      ...he
    }),
    [
      () => Ze({
        "mdc-select__selected-text": !0,
        [O()]: !0
      }),
      () => dt(H, "selectedText$")
    ]
  );
  var la = N(xr);
  De(xr, (F, he) => ae == null ? void 0 : ae(F, he), L), De(Cn, (F, he) => ae == null ? void 0 : ae(F, he), R);
  var An = q(Cn, 2);
  He(An, (F, he) => ({ class: F, ...he }), [
    () => Ze({
      "mdc-select__dropdown-icon": !0,
      [U()]: !0
    }),
    () => dt(H, "dropdownIcon$")
  ]), De(An, (F, he) => ae == null ? void 0 : ae(F, he), re);
  var or = q(An, 2);
  {
    var Vn = (F) => {
      {
        let he = /* @__PURE__ */ ne(() => dt(H, "ripple$"));
        xe(au(F, Qe(() => o(he))), (nt) => z = nt, () => z);
      }
    };
    $(or, (F) => {
      f() !== "outlined" && d() && F(Vn);
    });
  }
  xe($e, (F) => be = F, () => be), De($e, (F, he) => ae == null ? void 0 : ae(F, he), b);
  var Kr = q($e, 2);
  {
    let F = /* @__PURE__ */ ne(() => Ze({
      "mdc-select__menu": !0,
      ...pe,
      [Z()]: !0
    })), he = /* @__PURE__ */ ne(() => dt(H, "menu$"));
    eh(Kr, Qe(
      {
        get class() {
          return o(F);
        },
        get id() {
          return o(V);
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
      () => o(he),
      {
        onSMUIMenuSelected: (nt) => {
          var Et;
          o(k) && o(k).handleMenuItemAction(nt.detail.index), (Et = e.onSMUIMenuSelected) == null || Et.call(e, nt);
        },
        onSMUIMenuSurfaceClosing: (nt) => {
          var Et;
          o(k) && o(k).handleMenuClosing(), (Et = e.onSMUIMenuSurfaceClosing) == null || Et.call(e, nt);
        },
        onSMUIMenuSurfaceClosed: (nt) => {
          var Et;
          o(k) && o(k).handleMenuClosed(), (Et = e.onSMUIMenuSurfaceClosed) == null || Et.call(e, nt);
        },
        onSMUIMenuSurfaceOpened: (nt) => {
          var Et;
          o(k) && o(k).handleMenuOpened(), (Et = e.onSMUIMenuSurfaceOpened) == null || Et.call(e, nt);
        },
        get open() {
          return o(ge);
        },
        set open(nt) {
          W(ge, nt, !0);
        },
        children: (nt, Et) => {
          {
            let lr = /* @__PURE__ */ ne(() => dt(H, "list$"));
            th(nt, Qe(
              {
                role: "listbox",
                get wrapFocus() {
                  return o(Ke);
                }
              },
              () => o(lr),
              {
                get selectedIndex() {
                  return o(j);
                },
                set selectedIndex(dr) {
                  W(j, dr, !0);
                },
                children: (dr, da) => {
                  var wi = oe(), Qr = K(wi);
                  _e(Qr, () => e.children ?? Ie), E(dr, wi);
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
  xe(ze, (F) => ue = F, () => ue), De(ze, (F, he) => Gn == null ? void 0 : Gn(F, he), () => ({
    ripple: f() === "filled",
    unbounded: !1,
    addClass: me,
    removeClass: B,
    addStyle: G
  })), De(ze, (F, he) => ro == null ? void 0 : ro(F, he), () => ({ addClass: me, removeClass: B })), De(ze, (F, he) => ae == null ? void 0 : ae(F, he), u);
  var Vs = q(ze, 2);
  {
    var Ku = (F) => {
      {
        let he = /* @__PURE__ */ ne(() => dt(H, "helperText$"));
        lh(F, Qe(() => o(he), {
          children: (nt, Et) => {
            var lr = oe(), dr = K(lr);
            _e(dr, () => e.helperText ?? Ie), E(nt, lr);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    $(Vs, (F) => {
      e.helperText && F(Ku);
    });
  }
  de(() => Oe(la, t())), E(n, Je);
  var Qu = Ee(Ge);
  return i(), Qu;
}
function hh(n, e) {
  Ae(e, !0);
  const t = () => bi(d, "$selectedValue", r), [r, i] = Si();
  let a = m(e, "use", 19, () => []);
  m(e, "class", 3, "");
  let s = m(e, "value", 3, ""), u = /* @__PURE__ */ Ve(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "value",
    "children"
  ]), l;
  const c = ye("SMUI:select:selectedText"), d = ye("SMUI:select:value");
  ce("SMUI:list:item:role", "option");
  const v = /* @__PURE__ */ ne(() => s() != null && s() !== "" && t() === s());
  rt(f), Fn(f);
  function f() {
    o(v) && l && tr(c, l.getPrimaryText());
  }
  function h() {
    return l.getElement();
  }
  var g = { getElement: h };
  xe(
    ah(n, Qe(
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
          return o(v);
        }
      },
      () => u,
      {
        children: (_, y) => {
          var x = oe(), S = K(x);
          _e(S, () => e.children ?? Ie), E(_, x);
        },
        $$slots: { default: !0 }
      }
    )),
    (_) => l = _,
    () => l
  );
  var p = Ee(g);
  return i(), p;
}
function gh(n, e) {
  Ae(e, !0);
  let t = m(e, "data", 19, () => []);
  m(e, "placeholder", 3, "");
  let r = m(e, "label", 3, "");
  m(e, "description", 3, "");
  let i = m(e, "value", 15), a = m(e, "required", 3, !1);
  m(e, "size", 3, "sm");
  let s = m(e, "variant", 3, "standard"), u = m(e, "selectedOptionIndex", 31, () => -1), l = m(e, "disabled", 3, !1);
  function c(d) {
    return () => u(d);
  }
  vh(n, {
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
    children: (d, v) => {
      var f = oe(), h = K(f);
      cn(h, 17, t, br, (g, p, _) => {
        {
          let y = /* @__PURE__ */ ne(() => c(_));
          hh(g, {
            get onclick() {
              return o(y);
            },
            get value() {
              return o(p).value;
            },
            children: (x, S) => {
              var A = ct();
              de(() => Oe(A, o(p).label)), E(x, A);
            },
            $$slots: { default: !0 }
          });
        }
      }), E(d, f);
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
function mh(n) {
  return n ? n.scrollHeight > n.offsetHeight : !1;
}
function ph(n) {
  return n ? n.scrollTop === 0 : !1;
}
function Ih(n) {
  return n ? Math.ceil(n.scrollHeight - n.scrollTop) === n.clientHeight : !1;
}
function bh(n) {
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
var _h = (
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
var Xe = {
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
}, io = {
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
var yh = (
  /** @class */
  function(n) {
    In(e, n);
    function e(t) {
      var r = n.call(this, je(je({}, e.defaultAdapter), t)) || this;
      return r.dialogOpen = !1, r.isFullscreen = !1, r.animationFrame = 0, r.animationTimer = 0, r.escapeKeyAction = ma.CLOSE_ACTION, r.scrimClickAction = ma.CLOSE_ACTION, r.autoStackButtons = !0, r.areButtonsStacked = !1, r.suppressDefaultPressSelector = ma.SUPPRESS_DEFAULT_PRESS_SELECTOR, r.animFrame = new _h(), r.contentScrollHandler = function() {
        r.handleScrollEvent();
      }, r.windowResizeHandler = function() {
        r.layout();
      }, r.windowOrientationChangeHandler = function() {
        r.layout();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Xe;
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
        return io;
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
      this.adapter.hasClass(Xe.STACKED) && this.setAutoStackButtons(!1), this.isFullscreen = this.adapter.hasClass(Xe.FULLSCREEN);
    }, e.prototype.destroy = function() {
      this.animationTimer && (clearTimeout(this.animationTimer), this.handleAnimationTimerEnd()), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.animFrame.cancelAll(), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler);
    }, e.prototype.open = function(t) {
      var r = this;
      this.dialogOpen = !0, this.adapter.notifyOpening(), this.adapter.addClass(Xe.OPENING), this.isFullscreen && this.adapter.registerContentEventHandler("scroll", this.contentScrollHandler), t && t.isAboveFullscreenDialog && this.adapter.addClass(Xe.SCRIM_HIDDEN), this.adapter.registerWindowEventHandler("resize", this.windowResizeHandler), this.adapter.registerWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), this.runNextAnimationFrame(function() {
        r.adapter.addClass(Xe.OPEN), r.adapter.addBodyClass(Xe.SCROLL_LOCK), r.layout(), r.animationTimer = setTimeout(function() {
          r.handleAnimationTimerEnd(), r.adapter.trapFocus(r.adapter.getInitialFocusEl()), r.adapter.notifyOpened();
        }, io.DIALOG_ANIMATION_OPEN_TIME_MS);
      });
    }, e.prototype.close = function(t) {
      var r = this;
      t === void 0 && (t = ""), this.dialogOpen && (this.dialogOpen = !1, this.adapter.notifyClosing(t), this.adapter.addClass(Xe.CLOSING), this.adapter.removeClass(Xe.OPEN), this.adapter.removeBodyClass(Xe.SCROLL_LOCK), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), cancelAnimationFrame(this.animationFrame), this.animationFrame = 0, clearTimeout(this.animationTimer), this.animationTimer = setTimeout(function() {
        r.adapter.releaseFocus(), r.handleAnimationTimerEnd(), r.adapter.notifyClosed(t);
      }, io.DIALOG_ANIMATION_CLOSE_TIME_MS));
    }, e.prototype.showSurfaceScrim = function() {
      var t = this;
      this.adapter.addClass(Xe.SURFACE_SCRIM_SHOWING), this.runNextAnimationFrame(function() {
        t.adapter.addClass(Xe.SURFACE_SCRIM_SHOWN);
      });
    }, e.prototype.hideSurfaceScrim = function() {
      this.adapter.removeClass(Xe.SURFACE_SCRIM_SHOWN), this.adapter.addClass(Xe.SURFACE_SCRIM_HIDING);
    }, e.prototype.handleSurfaceScrimTransitionEnd = function() {
      this.adapter.removeClass(Xe.SURFACE_SCRIM_HIDING), this.adapter.removeClass(Xe.SURFACE_SCRIM_SHOWING);
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
      this.animationTimer = 0, this.adapter.removeClass(Xe.OPENING), this.adapter.removeClass(Xe.CLOSING);
    }, e.prototype.runNextAnimationFrame = function(t) {
      var r = this;
      cancelAnimationFrame(this.animationFrame), this.animationFrame = requestAnimationFrame(function() {
        r.animationFrame = 0, clearTimeout(r.animationTimer), r.animationTimer = setTimeout(t, 0);
      });
    }, e.prototype.detectStackedButtons = function() {
      this.adapter.removeClass(Xe.STACKED);
      var t = this.adapter.areButtonsStacked();
      t && this.adapter.addClass(Xe.STACKED), t !== this.areButtonsStacked && (this.adapter.reverseButtons(), this.areButtonsStacked = t);
    }, e.prototype.toggleScrollableClasses = function() {
      this.adapter.removeClass(Xe.SCROLLABLE), this.adapter.isContentScrollable() && (this.adapter.addClass(Xe.SCROLLABLE), this.isFullscreen && (this.toggleScrollDividerHeader(), this.toggleScrollDividerFooter()));
    }, e.prototype.toggleScrollDividerHeader = function() {
      this.adapter.isScrollableContentAtTop() ? this.adapter.hasClass(Xe.SCROLL_DIVIDER_HEADER) && this.adapter.removeClass(Xe.SCROLL_DIVIDER_HEADER) : this.adapter.addClass(Xe.SCROLL_DIVIDER_HEADER);
    }, e.prototype.toggleScrollDividerFooter = function() {
      this.adapter.isScrollableContentAtBottom() ? this.adapter.hasClass(Xe.SCROLL_DIVIDER_FOOTER) && this.adapter.removeClass(Xe.SCROLL_DIVIDER_FOOTER) : this.adapter.addClass(Xe.SCROLL_DIVIDER_FOOTER);
    }, e;
  }(bn)
), Ch = /* @__PURE__ */ X('<div class="mdc-dialog__surface-scrim"></div>'), Ah = /* @__PURE__ */ X('<div><div><div><!> <!></div></div> <div class="mdc-dialog__scrim"></div></div> <!>', 1);
function Eh(n, e) {
  Ae(e, !0);
  const t = () => bi(L, "$aboveFullscreenShown", r), [r, i] = Si(), { FocusTrap: a } = fv, { closest: s, matches: u } = Na;
  let l = m(e, "use", 19, () => []), c = m(e, "class", 3, ""), d = m(e, "open", 15, !1), v = m(e, "selection", 3, !1), f = m(e, "escapeKeyAction", 3, "close"), h = m(e, "scrimClickAction", 3, "close"), g = m(e, "autoStackButtons", 3, !0), p = m(e, "fullscreen", 3, !1), _ = m(e, "sheet", 3, !1), y = m(e, "noContentPadding", 3, !1), x = m(e, "container$class", 3, ""), S = m(e, "surface$class", 3, ""), A = /* @__PURE__ */ Ve(e, [
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
  ]), w, I = /* @__PURE__ */ le(void 0), C = new aa(), b = Ce({}), T, R = jn(!1), D = ye("SMUI:dialog:aboveFullscreen"), L = ye("SMUI:dialog:aboveFullscreenShown") ?? jn(!1), O = ye("SMUI:addLayoutListener"), re, U = [], Z = (B) => (U.push(B), () => {
    const G = U.indexOf(B);
    G >= 0 && U.splice(G, 1);
  });
  ce("SMUI:dialog:actions:reversed", R), ce("SMUI:addLayoutListener", Z), ce("SMUI:dialog:selection", v()), ce("SMUI:dialog:aboveFullscreen", D || p()), ce("SMUI:dialog:aboveFullscreenShown", L), _() && ce("SMUI:icon-button:context", "dialog:sheet"), Se(() => {
    o(I) && o(I).getEscapeKeyAction() !== f() && o(I).setEscapeKeyAction(f());
  }), Se(() => {
    o(I) && o(I).getScrimClickAction() !== h() && o(I).setScrimClickAction(h());
  }), Se(() => {
    o(I) && o(I).getAutoStackButtons() !== g() && o(I).setAutoStackButtons(g());
  }), Se(() => {
    g() || tr(R, !0);
  }), O && (re = O(ge)), Se(() => {
    o(I) && o(I).isOpen() !== d() && (d() ? o(I).open({ isAboveFullscreenDialog: !!D }) : o(I).close());
  });
  let H = t();
  Se(() => {
    p() && o(I) && H !== t() && (H = t(), t() ? o(I).showSurfaceScrim() : o(I).hideSurfaceScrim());
  }), rt(() => (T = new a(w, { initialFocusEl: fe() ?? void 0 }), W(
    I,
    new yh({
      addBodyClass: (B) => document.body.classList.add(B),
      addClass: ue,
      areButtonsStacked: () => bh(ee()),
      clickDefaultButton: () => {
        const B = ie();
        B && B.click();
      },
      eventTargetMatches: (B, G) => B ? u(B, G) : !1,
      getActionFromEvent: (B) => {
        if (!B.target)
          return "";
        const G = s(B.target, "[data-mdc-dialog-action]");
        return G && G.getAttribute("data-mdc-dialog-action");
      },
      getInitialFocusEl: fe,
      hasClass: J,
      isContentScrollable: () => mh(be()),
      notifyClosed: (B) => {
        d(!1), Be(pe(), "SMUIDialogClosed", B ? { action: B } : {});
      },
      notifyClosing: (B) => Be(pe(), "SMUIDialogClosing", B ? { action: B } : {}),
      notifyOpened: () => Be(pe(), "SMUIDialogOpened", {}),
      notifyOpening: () => Be(pe(), "SMUIDialogOpening", {}),
      releaseFocus: () => T.releaseFocus(),
      removeBodyClass: (B) => document.body.classList.remove(B),
      removeClass: k,
      reverseButtons: () => {
        tr(R, !0);
      },
      trapFocus: () => T.trapFocus(),
      registerContentEventHandler: (B, G) => {
        const te = be();
        te instanceof HTMLElement && C.on(te, B, G);
      },
      deregisterContentEventHandler: (B, G) => {
        const te = be();
        te instanceof HTMLElement && C.off(te, B, G);
      },
      isScrollableContentAtTop: () => ph(be()),
      isScrollableContentAtBottom: () => Ih(be()),
      registerWindowEventHandler: (B, G) => C.on(window, B, G),
      deregisterWindowEventHandler: (B, G) => C.off(window, B, G)
    }),
    !0
  ), o(I).init(), () => {
    var B;
    (B = o(I)) == null || B.destroy(), C.clear();
  })), Fn(() => {
    re && re();
  });
  function J(B) {
    return B in b ? b[B] : pe().classList.contains(B);
  }
  function ue(B) {
    b[B] || (b[B] = !0);
  }
  function k(B) {
    (!(B in b) || b[B]) && (b[B] = !1);
  }
  function ee() {
    return [].slice.call(pe().querySelectorAll(".mdc-dialog__button"));
  }
  function ie() {
    return pe().querySelector("[data-mdc-dialog-button-default]");
  }
  function be() {
    return pe().querySelector(".mdc-dialog__content");
  }
  function fe() {
    return pe().querySelector("[data-mdc-dialog-initial-focus]");
  }
  function j() {
    D && tr(L, !0), requestAnimationFrame(() => {
      U.forEach((B) => B());
    });
  }
  function V() {
    U.forEach((B) => B());
  }
  function M() {
    D && tr(L, !1);
  }
  function Q() {
    return d();
  }
  function Y(B) {
    d(B);
  }
  function ge() {
    var B;
    return (B = o(I)) == null ? void 0 : B.layout();
  }
  function pe() {
    return w;
  }
  var Ne = { isOpen: Q, setOpen: Y, layout: ge, getElement: pe }, tt = Ah();
  Pt("resize", us, () => d() && o(I) && o(I).layout()), Pt("orientationchange", us, () => d() && o(I) && o(I).layout()), Pt("keydown", jo.body, (B) => o(I) && o(I).handleDocumentKeydown(B));
  var Ke = K(tt), Re = (B) => {
    var G;
    j(), (G = e.onSMUIDialogOpening) == null || G.call(e, B);
  }, st = (B) => {
    var G;
    V(), (G = e.onSMUIDialogOpened) == null || G.call(e, B);
  }, kt = (B) => {
    var G;
    M(), (G = e.onSMUIDialogClosed) == null || G.call(e, B);
  }, Gt = (B) => {
    var G;
    o(I) && o(I).handleClick(B), (G = e.onclick) == null || G.call(e, B);
  }, P = (B) => {
    var G;
    o(I) && o(I).handleKeydown(B), (G = e.onkeydown) == null || G.call(e, B);
  };
  He(
    Ke,
    (B, G) => ({
      class: B,
      role: "alertdialog",
      "aria-modal": "true",
      ...G,
      onSMUIDialogOpening: Re,
      onSMUIDialogOpened: st,
      onSMUIDialogClosed: kt,
      onclick: Gt,
      onkeydown: P
    }),
    [
      () => Ze({
        "mdc-dialog": !0,
        "mdc-dialog--stacked": !g(),
        "mdc-dialog--fullscreen": p(),
        "mdc-dialog--sheet": _(),
        "mdc-dialog--no-content-padding": y(),
        "smui-dialog--selection": v(),
        ...b,
        [c()]: !0
      }),
      () => xa(A, ["container$", "surface$"])
    ]
  );
  var z = N(Ke);
  He(z, (B, G) => ({ class: B, ...G }), [
    () => Ze({ "mdc-dialog__container": !0, [x()]: !0 }),
    () => dt(A, "container$")
  ]);
  var ve = N(z);
  He(ve, (B, G) => ({ class: B, role: "alertdialog", "aria-modal": "true", ...G }), [
    () => Ze({ "mdc-dialog__surface": !0, [S()]: !0 }),
    () => dt(A, "surface$")
  ]);
  var Fe = N(ve);
  _e(Fe, () => e.children ?? Ie);
  var Nt = q(Fe, 2);
  {
    var vn = (B) => {
      var G = Ch();
      Pt("transitionend", G, () => o(I) && o(I).handleSurfaceScrimTransitionEnd()), E(B, G);
    };
    $(Nt, (B) => {
      p() && B(vn);
    });
  }
  xe(Ke, (B) => w = B, () => w), De(Ke, (B, G) => ae == null ? void 0 : ae(B, G), l);
  var ar = q(Ke, 2);
  _e(ar, () => e.over ?? Ie), E(n, tt);
  var me = Ee(Ne);
  return i(), me;
}
function Sh(n, e) {
  Ae(e, !0);
  let t = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return xe(
    sa(n, Qe(
      {
        _smuiClass: "mdc-dialog__header",
        _smuiContexts: { "SMUI:icon-button:context": "dialog:header" },
        tag: "div"
      },
      () => t,
      {
        children: (s, u) => {
          var l = oe(), c = K(l);
          _e(c, () => e.children ?? Ie), E(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Ee(a);
}
function cu(n, e) {
  Ae(e, !0);
  let t = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return xe(
    sa(n, Qe({ _smuiClass: "mdc-dialog__content", tag: "div" }, () => t, {
      children: (s, u) => {
        var l = oe(), c = K(l);
        _e(c, () => e.children ?? Ie), E(s, l);
      },
      $$slots: { default: !0 }
    })),
    (s) => r = s,
    () => r
  ), Ee(a);
}
function xh(n, e) {
  Ae(e, !0);
  let t = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return xe(
    sa(n, Qe(
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
          var l = oe(), c = K(l);
          _e(c, () => e.children ?? Ie), E(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Ee(a);
}
const Ps = jn({
  component: null,
  props: {},
  isOpen: !1
});
function wh(n, e) {
  Ae(e, !0);
  let t = /* @__PURE__ */ le(void 0), r = /* @__PURE__ */ le(!1);
  const i = Ps.subscribe((l) => {
    W(t, l, !0), W(r, l.isOpen, !0);
  });
  rt(() => () => i());
  var a = oe(), s = K(a);
  {
    var u = (l) => {
      var c = oe(), d = K(c);
      Ga(d, () => o(t).component, (v, f) => {
        f(v, Qe(() => o(t).props, {
          get open() {
            return o(r);
          },
          set open(h) {
            W(r, h, !0);
          }
        }));
      }), E(l, c);
    };
    $(s, (l) => {
      o(t).isOpen && o(t).component && l(u);
    });
  }
  E(n, a), Ee();
}
function ea(n, e = {}) {
  return new Promise((t) => {
    Ps.set({
      component: n,
      props: e,
      isOpen: !0,
      resolve: t
    });
  });
}
function Hr(n, e) {
  Ps.update((t) => {
    var r;
    return (r = t.resolve) == null || r.call(t, { type: n, data: e }), { component: null, props: {}, isOpen: !1 };
  });
}
function Th(n) {
  Ps.update((e) => e.isOpen ? { ...e, props: { ...e.props, ...n } } : e);
}
var Dh = /* @__PURE__ */ X('<div class="oscd-confirm-dialog__content svelte-1eipd40"> </div>');
function qo(n, e) {
  Ae(e, !0);
  let t = m(e, "open", 15, !1), r = m(e, "title", 3, ""), i = m(e, "message", 3, ""), a = m(e, "confirmActionText", 3, "OK"), s = m(e, "confirmActionColor", 3, "primary"), u = m(e, "cancelActionText", 3, "Cancel"), l = m(e, "color", 3, "var(--mdc-theme-primary, #ff3e00)");
  function c() {
    Hr("confirm");
  }
  function d() {
    Hr("cancel");
  }
  Ko(n, {
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
    onConfirm: () => c(),
    onCancel: () => d(),
    onClose: () => Hr("cancel"),
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
      cu(f, {
        children: (h, g) => {
          var p = Dh(), _ = N(p);
          de(() => Oe(_, i())), E(h, p);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { content: !0 }
  }), Ee();
}
var Lh = /* @__PURE__ */ X('<div class="dialog__title svelte-ec2c4h"><h4 class="svelte-ec2c4h"> </h4> <!></div>'), Rh = /* @__PURE__ */ X("<!> <!>", 1), Oh = /* @__PURE__ */ X('<!> <!> <div class="dialog__actions svelte-ec2c4h"><!></div>', 1);
function Ko(n, e) {
  Ae(e, !0);
  let t = m(e, "open", 15, !1), r = m(e, "title", 3, ""), i = m(e, "confirmActionText", 3, "Confirm"), a = m(e, "confirmActionColor", 3, "primary"), s = m(e, "cancelActionText", 3, "Cancel"), u = m(e, "width", 3, "80vw"), l = m(e, "maxWidth", 3, "85vw"), c = m(e, "height", 3, "85vh"), d = m(e, "maxHeight", 3, "85vh"), v = m(e, "confirmDisabled", 3, !1), f = m(e, "color", 3, "var(--mdc-theme-primary, #ff3e00)"), h = m(e, "showCloseButton", 3, !0), g = m(e, "onClose", 3, () => {
  }), p = m(e, "onCancel", 3, () => {
  }), _ = m(e, "onConfirm", 3, () => {
  });
  function y(S) {
    S.detail.action === "cancel" ? p()() : S.detail.action === "confirm" ? _()() : (S.detail.action, g()());
  }
  let x = /* @__PURE__ */ ne(() => {
    let S;
    return a() === "primary" ? S = f() : S = "#FF203A", v() ? "" : `background-color: ${S}; color: white;`;
  });
  {
    let S = /* @__PURE__ */ ne(() => `width: ${u()}; max-width: ${l()}; height: ${c()}; max-height: ${d()};`);
    Eh(n, {
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
      children: (A, w) => {
        var I = Oh(), C = K(I);
        Sh(C, {
          children: (D, L) => {
            var O = Lh(), re = N(O), U = N(re), Z = q(re, 2);
            {
              var H = (J) => {
                bu(J, {
                  onClick: () => {
                    t(!1), g()();
                  },
                  tooltip: "Close",
                  tooltipSide: "left",
                  type: "close",
                  fillColor: "white"
                });
              };
              $(Z, (J) => {
                h() && J(H);
              });
            }
            de(() => {
              qe(O, `background-color: ${f()};`), Oe(U, r());
            }), E(D, O);
          },
          $$slots: { default: !0 }
        });
        var b = q(C, 2);
        cu(b, {
          id: "dialog__content",
          children: (D, L) => {
            var O = oe(), re = K(O);
            _e(re, () => e.content ?? Ie), E(D, O);
          },
          $$slots: { default: !0 }
        });
        var T = q(b, 2), R = N(T);
        xh(R, {
          class: "oscd-dialog__actions",
          children: (D, L) => {
            var O = Rh(), re = K(O);
            {
              var U = (H) => {
                pr(H, {
                  action: "cancel",
                  color: "secondary",
                  tabindex: "1",
                  children: (J, ue) => {
                    var k = ct();
                    de(() => Oe(k, s())), E(J, k);
                  },
                  $$slots: { default: !0 }
                });
              };
              $(re, (H) => {
                s() && H(U);
              });
            }
            var Z = q(re, 2);
            pr(Z, {
              action: "confirm",
              get disabled() {
                return v();
              },
              get style() {
                return o(x);
              },
              tabindex: "0",
              children: (H, J) => {
                var ue = ct();
                de(() => Oe(ue, i())), E(H, ue);
              },
              $$slots: { default: !0 }
            }), E(D, O);
          },
          $$slots: { default: !0 }
        }), E(A, I);
      },
      $$slots: { default: !0 }
    });
  }
  Ee();
}
var Mh = /* @__PURE__ */ X('<span class="oscd-icon"><!></span>');
function yt(n, e) {
  var t = Mh(), r = N(t);
  _e(r, () => e.children ?? Ie), E(n, t);
}
var Fh = /* @__PURE__ */ at('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function fu(n, e) {
  let t = m(e, "svgStyles", 3, "");
  yt(n, {
    children: (r, i) => {
      var a = Fh();
      de(() => qe(a, t())), E(r, a);
    }
  });
}
var Ph = /* @__PURE__ */ at('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function vu(n, e) {
  let t = m(e, "svgStyles", 3, "");
  yt(n, {
    children: (r, i) => {
      var a = Ph();
      de(() => qe(a, t())), E(r, a);
    }
  });
}
var kh = /* @__PURE__ */ at('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function hu(n, e) {
  let t = m(e, "svgStyles", 3, "");
  yt(n, {
    children: (r, i) => {
      var a = kh();
      de(() => qe(a, t())), E(r, a);
    }
  });
}
var Gh = /* @__PURE__ */ at('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"></path></svg>');
function gu(n, e) {
  let t = m(e, "svgStyles", 3, "");
  yt(n, {
    children: (r, i) => {
      var a = Gh();
      de(() => qe(a, t())), E(r, a);
    }
  });
}
var Nh = /* @__PURE__ */ at('<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM2 12c0-2.79 1.64-5.2 4.01-6.32V3.52C2.52 4.76 0 8.09 0 12s2.52 7.24 6.01 8.48v-2.16C3.64 17.2 2 14.79 2 12zm13-9c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"></path></svg>');
function Zh(n, e) {
  let t = m(e, "svgStyles", 3, "");
  yt(n, {
    children: (r, i) => {
      var a = Nh();
      de(() => qe(a, t())), E(r, a);
    }
  });
}
xc();
var Hh = /* @__PURE__ */ at('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24" height="24" fill="#004552"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"></path></svg>');
function mu(n) {
  var e = Hh();
  E(n, e);
}
var Bh = /* @__PURE__ */ at('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#004552"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Wh(n) {
  var e = Bh();
  E(n, e);
}
var Uh = /* @__PURE__ */ at('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"></path></svg>');
function jh(n, e) {
  let t = m(e, "size", 3, "24px"), r = m(e, "fill", 3, "#004552");
  var i = Uh();
  de(() => {
    mt(i, "height", t()), mt(i, "width", t()), mt(i, "fill", r());
  }), E(n, i);
}
var Vh = /* @__PURE__ */ at('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Ul(n, e) {
  let t = m(e, "svgStyles", 3, "");
  yt(n, {
    children: (r, i) => {
      var a = Vh();
      de(() => qe(a, t())), E(r, a);
    }
  });
}
var zh = /* @__PURE__ */ at('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Xh(n, e) {
  let t = m(e, "svgStyles", 3, "");
  yt(n, {
    children: (r, i) => {
      var a = zh();
      de(() => qe(a, t())), E(r, a);
    }
  });
}
var Yh = /* @__PURE__ */ at('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"></path></svg>');
function qh(n, e) {
  let t = m(e, "svgStyles", 3, "");
  yt(n, {
    children: (r, i) => {
      var a = Yh();
      de(() => qe(a, t())), E(r, a);
    }
  });
}
var Kh = /* @__PURE__ */ at('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"></path></svg>');
function Qh(n, e) {
  let t = m(e, "svgStyles", 3, "");
  yt(n, {
    children: (r, i) => {
      var a = Kh();
      de(() => qe(a, t())), E(r, a);
    }
  });
}
var Jh = /* @__PURE__ */ at('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"><path d="m176-120-56-56 301-302-181-45 198-123-17-234 179 151 216-88-87 217 151 178-234-16-124 198-45-181-301 301Zm24-520-80-80 80-80 80 80-80 80Zm355 197 48-79 93 7-60-71 35-86-86 35-71-59 7 92-79 49 90 22 23 90Zm165 323-80-80 80-80 80 80-80 80ZM569-570Z"></path></svg>');
function $h(n, e) {
  let t = m(e, "svgStyles", 3, "");
  yt(n, {
    children: (r, i) => {
      var a = Jh();
      de(() => qe(a, t())), E(r, a);
    }
  });
}
var eg = /* @__PURE__ */ at('<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m770-302-60-62q40-11 65-42.5t25-73.5q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 57-29.5 105T770-302ZM634-440l-80-80h86v80h-6ZM792-56 56-792l56-56 736 736-56 56ZM440-280H280q-83 0-141.5-58.5T80-480q0-69 42-123t108-71l74 74h-24q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h65l79 80H320Z"></path></svg>');
function tg(n, e) {
  let t = m(e, "svgStyles", 3, "");
  yt(n, {
    children: (r, i) => {
      var a = eg();
      de(() => qe(a, t())), E(r, a);
    }
  });
}
var ng = /* @__PURE__ */ at('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"></path></svg>');
function rg(n, e) {
  let t = m(e, "svgStyles", 3, "");
  yt(n, {
    children: (r, i) => {
      var a = ng();
      de(() => qe(a, t())), E(r, a);
    }
  });
}
var ig = /* @__PURE__ */ at('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"></path></svg>');
function ag(n, e) {
  let t = m(e, "svgStyles", 8, "");
  yt(n, {
    children: (r, i) => {
      var a = ig();
      de(() => qe(a, t())), E(r, a);
    }
  });
}
var sg = /* @__PURE__ */ at('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3" cursor="pointer"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Qo(n, e) {
  let t = m(e, "svgStyles", 8, "");
  yt(n, {
    children: (r, i) => {
      var a = sg();
      de(() => qe(a, t())), E(r, a);
    }
  });
}
var og = /* @__PURE__ */ at('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m320-160-56-57 103-103H80v-80h287L264-503l56-57 200 200-200 200Zm320-240L440-600l200-200 56 57-103 103h287v80H593l103 103-56 57Z"></path></svg>');
function pu(n, e) {
  let t = m(e, "svgStyles", 8, "");
  yt(n, {
    children: (r, i) => {
      var a = og();
      de(() => qe(a, t())), E(r, a);
    }
  });
}
var lg = /* @__PURE__ */ at('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M360-160q-33 0-56.5-23.5T280-240q0-33 23.5-56.5T360-320q33 0 56.5 23.5T440-240q0 33-23.5 56.5T360-160Zm240 0q-33 0-56.5-23.5T520-240q0-33 23.5-56.5T600-320q33 0 56.5 23.5T680-240q0 33-23.5 56.5T600-160ZM360-400q-33 0-56.5-23.5T280-480q0-33 23.5-56.5T360-560q33 0 56.5 23.5T440-480q0 33-23.5 56.5T360-400Zm240 0q-33 0-56.5-23.5T520-480q0-33 23.5-56.5T600-560q33 0 56.5 23.5T680-480q0 33-23.5 56.5T600-400ZM360-640q-33 0-56.5-23.5T280-720q0-33 23.5-56.5T360-800q33 0 56.5 23.5T440-720q0 33-23.5 56.5T360-640Zm240 0q-33 0-56.5-23.5T520-720q0-33 23.5-56.5T600-800q33 0 56.5 23.5T680-720q0 33-23.5 56.5T600-640Z"></path></svg>');
function ks(n, e) {
  let t = m(e, "svgStyles", 3, "fill: gray; width: 25px; height: 25px");
  yt(n, {
    children: (r, i) => {
      var a = lg();
      de(() => qe(a, t())), E(r, a);
    }
  });
}
var dg = /* @__PURE__ */ at('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-80 200-360l56-56 184 183v-647h80v647l184-184 56 57L480-80Z"></path></svg>');
function ug(n, e) {
  let t = m(e, "svgStyles", 3, "");
  yt(n, {
    children: (r, i) => {
      var a = dg();
      de(() => qe(a, t())), E(r, a);
    }
  });
}
var cg = /* @__PURE__ */ at('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"></path></svg>');
function fg(n, e) {
  let t = m(e, "svgStyles", 3, "");
  yt(n, {
    children: (r, i) => {
      var a = cg();
      de(() => qe(a, t())), E(r, a);
    }
  });
}
var vg = /* @__PURE__ */ at('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"></path></svg>');
function hg(n, e) {
  let t = m(e, "svgStyles", 3, "");
  yt(n, {
    children: (r, i) => {
      var a = vg();
      de(() => qe(a, t())), E(r, a);
    }
  });
}
pt(["change"]);
pt(["change"]);
function gg(n, e, t, r) {
  e() && ((n.key === "Enter" || n.key === " ") && (n.preventDefault(), t()), n.key === "Escape" && (n.preventDefault(), r()));
}
var mg = /* @__PURE__ */ X('<span role="button" tabindex="0" aria-labelledby="tooltip"><!></span>');
function Iu(n, e) {
  Ae(e, !0);
  let t = m(e, "content", 3, ""), r = m(e, "side", 3, "top"), i = m(e, "hoverDelay", 3, 0), a = m(e, "transitionDuration", 3, 80);
  const s = `tt-${Math.random().toString(36).slice(2)}`;
  let u = /* @__PURE__ */ le(null), l = /* @__PURE__ */ le(null), c = /* @__PURE__ */ le(null), d = /* @__PURE__ */ le(null), v = /* @__PURE__ */ le(!1), f = /* @__PURE__ */ le(null), h = /* @__PURE__ */ le(null);
  function g() {
    t() && (o(f) && clearTimeout(o(f)), i() > 0 ? W(f, setTimeout(() => W(v, !0), i()), !0) : W(v, !0));
  }
  function p() {
    o(f) && clearTimeout(o(f)), W(v, !1);
  }
  function _() {
    g();
  }
  function y() {
    p();
  }
  function x() {
    g();
  }
  function S() {
    p();
  }
  function A() {
    if (!o(l) || !o(d) || !o(u)) return;
    const b = o(u).getBoundingClientRect(), T = o(d).getBoundingClientRect();
    let R = 0, D = 0;
    const L = 8;
    switch (r()) {
      case "top":
        R = b.top - T.height - L, D = b.left + b.width / 2 - T.width / 2;
        break;
      case "bottom":
        R = b.bottom + L, D = b.left + b.width / 2 - T.width / 2;
        break;
      case "left":
        R = b.top + b.height / 2 - T.height / 2, D = b.left - T.width - L;
        break;
      case "right":
        R = b.top + b.height / 2 - T.height / 2, D = b.right + L;
        break;
    }
    o(l).style.top = `${R + window.scrollY}px`, o(l).style.left = `${D + window.scrollX}px`;
  }
  function w() {
    var b;
    (b = o(h)) == null || b.disconnect(), W(h, null), o(l) && o(l).parentNode && o(l).parentNode.removeChild(o(l)), W(l, null), W(d, null), W(c, null), o(f) && clearTimeout(o(f));
  }
  Fn(w), Se(() => {
    if (!(!o(v) || !t())) {
      if (!o(l)) {
        W(l, document.createElement("div"), !0), o(l).style.position = "absolute", o(l).style.zIndex = "9999", o(l).style.pointerEvents = "none", o(l).style.opacity = "0", o(l).style.transition = `opacity ${a()}ms ease`, o(l).id = s, o(l).setAttribute("role", "tooltip"), document.body.appendChild(o(l)), W(c, o(l).attachShadow({ mode: "open" }), !0);
        const b = document.createElement("style");
        b.textContent = `
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
      `, o(c).appendChild(b), W(d, document.createElement("div"), !0), o(c).appendChild(o(d)), W(
          h,
          new MutationObserver(() => {
            o(v) && A();
          }),
          !0
        ), o(h).observe(document.body, { childList: !0, subtree: !0 });
      }
      o(d) && (o(d).className = `bubble ${r()}`, o(d).innerHTML = t()), o(l) && (o(l).style.opacity = "1", A());
    }
  }), Se(() => {
    if (o(v) || !o(l))
      return;
    o(l).style.opacity = "0";
    const b = o(l), T = setTimeout(
      () => {
        b && b.parentNode && b.parentNode.removeChild(b), o(l) === b && w();
      },
      a()
    );
    return () => clearTimeout(T);
  });
  var I = mg();
  I.__keydown = [gg, t, g, p];
  var C = N(I);
  _e(C, () => e.children ?? Ie), xe(I, (b) => W(u, b), () => o(u)), de(() => {
    mt(I, "aria-haspopup", t() ? "true" : void 0), mt(I, "aria-expanded", t() ? o(v) ? "true" : "false" : void 0), mt(I, "aria-describedby", t() ? s : void 0);
  }), Pt("mouseenter", I, _), Pt("mouseleave", I, y), Pt("focus", I, x), Pt("blur", I, S), E(n, I), Ee();
}
pt(["keydown"]);
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
var fr = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, jl = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, ri = {
  ARIA_SELECTED: jl.ARIA_SELECTED,
  ARIA_SORT: jl.ARIA_SORT
}, gn;
(function(n) {
  n.ASCENDING = "ascending", n.DESCENDING = "descending", n.NONE = "none", n.OTHER = "other";
})(gn || (gn = {}));
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
    In(e, n);
    function e(t) {
      return n.call(this, je(je({}, e.defaultAdapter), t)) || this;
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
      return Bf(this, void 0, void 0, function() {
        return Wf(this, function(t) {
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
        s !== i && (this.adapter.removeClassNameByHeaderCellIndex(s, fr.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(s, fr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(s, ri.ARIA_SORT, gn.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(s, gn.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, fr.HEADER_CELL_SORTED);
      var u = this.adapter.getAttributeByHeaderCellIndex(i, ri.ARIA_SORT), l = gn.NONE;
      u === gn.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, fr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, ri.ARIA_SORT, gn.DESCENDING), l = gn.DESCENDING) : u === gn.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, fr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, ri.ARIA_SORT, gn.ASCENDING), l = gn.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, ri.ARIA_SORT, gn.ASCENDING), l = gn.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, l), this.adapter.notifySortAction({
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
      }), this.adapter.addClass(fr.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(fr.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(t, r) {
      r ? (this.adapter.addClassAtRowIndex(t, fr.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, ri.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(t, fr.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, ri.ARIA_SELECTED, "false"));
    }, e;
  }(bn)
), Ig = /* @__PURE__ */ X('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), bg = /* @__PURE__ */ X("<div><div><table><!></table></div> <!> <!></div>");
function _g(n, e) {
  Ae(e, !0);
  const t = () => bi(O, "$progressClosed", r), [r, i] = Si(), { closest: a } = Na;
  let s = m(e, "use", 19, () => []), u = m(e, "class", 3, ""), l = m(e, "stickyHeader", 3, !1), c = m(e, "sortable", 3, !1), d = m(e, "sort", 15, null), v = m(e, "sortDirection", 15, "ascending"), f = m(e, "sortAscendingAriaLabel", 3, "sorted, ascending"), h = m(e, "sortDescendingAriaLabel", 3, "sorted, descending"), g = m(e, "container$use", 19, () => []), p = m(e, "container$class", 3, ""), _ = m(e, "table$use", 19, () => []), y = m(e, "table$class", 3, ""), x = /* @__PURE__ */ Ve(e, [
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
  ]), S, A = /* @__PURE__ */ le(void 0), w, I = /* @__PURE__ */ le(void 0), C = /* @__PURE__ */ le(void 0), b = Ce({}), T = /* @__PURE__ */ le(Ce({ height: "auto", top: "initial" })), R = ye("SMUI:addLayoutListener"), D, L = !1, O = jn(!1), re = jn(d());
  Se(() => {
    tr(re, d());
  });
  let U = jn(v());
  Se(() => {
    tr(U, v());
  }), ce("SMUI:checkbox:context", "data-table"), ce("SMUI:linear-progress:context", "data-table"), ce("SMUI:linear-progress:closed", O), ce("SMUI:data-table:sortable", c()), ce("SMUI:data-table:sort", re), ce("SMUI:data-table:sortDirection", U), ce("SMUI:data-table:sortAscendingAriaLabel", f()), ce("SMUI:data-table:sortDescendingAriaLabel", h()), R && (D = R(fe));
  let Z;
  Se(() => {
    e.progress && o(A) && Z !== t() && (Z = t(), t() ? o(A).hideProgress() : o(A).showProgress());
  }), ce("SMUI:checkbox:mount", () => {
    o(A) && L && o(A).layout();
  }), ce("SMUI:data-table:header:mount", (P) => {
    W(I, P, !0);
  }), ce("SMUI:data-table:header:unmount", () => {
    W(I, void 0);
  }), ce("SMUI:data-table:body:mount", (P) => {
    W(C, P, !0);
  }), ce("SMUI:data-table:body:unmount", () => {
    W(C, void 0);
  }), rt(() => (W(
    A,
    new pg({
      addClass: J,
      removeClass: ue,
      getHeaderCellElements: () => {
        var P;
        return ((P = o(I)) == null ? void 0 : P.cells.map((z) => z.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var P;
        return ((P = o(I)) == null ? void 0 : P.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (P, z) => {
        var ve;
        return ((ve = o(I)) == null ? void 0 : ve.orderedCells[P].getAttr(z)) ?? null;
      },
      setAttributeByHeaderCellIndex: (P, z, ve) => {
        var Fe;
        (Fe = o(I)) == null || Fe.orderedCells[P].addAttr(z, ve);
      },
      setClassNameByHeaderCellIndex: (P, z) => {
        var ve;
        (ve = o(I)) == null || ve.orderedCells[P].addClass(z);
      },
      removeClassNameByHeaderCellIndex: (P, z) => {
        var ve;
        (ve = o(I)) == null || ve.orderedCells[P].removeClass(z);
      },
      notifySortAction: (P) => {
        d(P.columnId), v(P.sortValue), Be(j(), "SMUIDataTableSorted", P);
      },
      getTableContainerHeight: () => w.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const P = j().querySelector(".mdc-data-table__header-row");
        if (!P)
          throw new Error("MDCDataTable: Table header element not found.");
        return P.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (P) => {
        W(T, P, !0);
      },
      addClassAtRowIndex: (P, z) => {
        var ve;
        (ve = o(C)) == null || ve.orderedRows[P].addClass(z);
      },
      getRowCount: () => {
        var P;
        return ((P = o(C)) == null ? void 0 : P.rows.length) ?? 0;
      },
      getRowElements: () => {
        var P;
        return ((P = o(C)) == null ? void 0 : P.rows.map((z) => z.element)) ?? [];
      },
      getRowIdAtIndex: (P) => {
        var z;
        return ((z = o(C)) == null ? void 0 : z.orderedRows[P].rowId) ?? null;
      },
      getRowIndexByChildElement: (P) => {
        var z;
        return ((z = o(C)) == null ? void 0 : z.orderedRows.map((ve) => ve.element).indexOf(a(P, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var P;
        return ((P = o(C)) == null ? void 0 : P.rows.filter((z) => z.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (P) => {
        var ve;
        const z = (ve = o(C)) == null ? void 0 : ve.orderedRows[P].checkbox;
        return z ? z.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var z;
        const P = (z = o(I)) == null ? void 0 : z.checkbox;
        return P ? P.checked : !1;
      },
      isRowsSelectable: () => !!j().querySelector(".mdc-data-table__row-checkbox") || !!j().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (P) => {
        var ve;
        const z = (ve = o(C)) == null ? void 0 : ve.orderedRows[P.rowIndex];
        z && Be(j(), "SMUIDataTableSelectionChanged", {
          row: z.element,
          rowId: z.rowId,
          rowIndex: P.rowIndex,
          selected: P.selected
        });
      },
      notifySelectedAll: () => {
        k(!1), Be(j(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        k(!1), Be(j(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (P) => Be(j(), "SMUIDataTableClickRow", P),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (P, z) => {
        var ve;
        (ve = o(C)) == null || ve.orderedRows[P].removeClass(z);
      },
      setAttributeAtRowIndex: (P, z, ve) => {
        var Fe;
        (Fe = o(C)) == null || Fe.orderedRows[P].addAttr(z, ve);
      },
      setHeaderRowCheckboxChecked: (P) => {
        var ve;
        const z = (ve = o(I)) == null ? void 0 : ve.checkbox;
        z && (z.checked = P);
      },
      setHeaderRowCheckboxIndeterminate: k,
      setRowCheckboxCheckedAtIndex: (P, z) => {
        var Fe;
        const ve = (Fe = o(C)) == null ? void 0 : Fe.orderedRows[P].checkbox;
        ve && (ve.checked = z);
      },
      setSortStatusLabelByHeaderCellIndex: (P, z) => {
      }
    }),
    !0
  ), o(A).init(), o(A).layout(), L = !0, () => {
    var P;
    (P = o(A)) == null || P.destroy();
  })), Fn(() => {
    D && D();
  });
  function H(P) {
    o(A) && o(A).handleRowCheckboxChange(P);
  }
  function J(P) {
    b[P] || (b[P] = !0);
  }
  function ue(P) {
    (!(P in b) || b[P]) && (b[P] = !1);
  }
  function k(P) {
    var ve;
    const z = (ve = o(I)) == null ? void 0 : ve.checkbox;
    z && (z.indeterminate = P);
  }
  function ee(P) {
    if (!o(A) || !P.detail.target)
      return;
    const z = a(P.detail.target, ".mdc-data-table__header-cell--with-sort");
    z && be(z);
  }
  function ie(P) {
    if (!o(A) || !P.detail.target)
      return;
    const z = a(P.detail.target, ".mdc-data-table__row");
    z && o(A) && o(A).handleRowClick({ rowId: P.detail.rowId, row: z });
  }
  function be(P) {
    var Nt, vn;
    const z = ((Nt = o(I)) == null ? void 0 : Nt.orderedCells) ?? [], ve = z.map((ar) => ar.element).indexOf(P);
    if (ve === -1)
      return;
    const Fe = z[ve].columnId ?? null;
    (vn = o(A)) == null || vn.handleSortAction({ columnId: Fe, columnIndex: ve, headerCell: P });
  }
  function fe() {
    var P;
    return (P = o(A)) == null ? void 0 : P.layout();
  }
  function j() {
    return S;
  }
  var V = { layout: fe, getElement: j }, M = bg(), Q = (P) => {
    var z;
    o(A) && o(A).handleHeaderRowCheckboxChange(), (z = e.onSMUIDataTableHeaderCheckboxChange) == null || z.call(e, P);
  }, Y = (P) => {
    var z;
    ee(P), (z = e.onSMUIDataTableHeaderClick) == null || z.call(e, P);
  }, ge = (P) => {
    var z;
    ie(P), (z = e.onSMUIDataTableRowClick) == null || z.call(e, P);
  }, pe = (P) => {
    var z;
    H(P), (z = e.onSMUIDataTableBodyCheckboxChange) == null || z.call(e, P);
  };
  He(
    M,
    (P, z) => ({
      class: P,
      ...z,
      onSMUIDataTableHeaderCheckboxChange: Q,
      onSMUIDataTableHeaderClick: Y,
      onSMUIDataTableRowClick: ge,
      onSMUIDataTableBodyCheckboxChange: pe
    }),
    [
      () => Ze({
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": l(),
        ...b,
        [u()]: !0
      }),
      () => xa(x, ["container$", "table$"])
    ]
  );
  var Ne = N(M);
  He(Ne, (P, z) => ({ class: P, ...z }), [
    () => Ze({
      "mdc-data-table__table-container": !0,
      [p()]: !0
    }),
    () => dt(x, "container$")
  ]);
  var tt = N(Ne);
  He(tt, (P, z) => ({ class: P, ...z }), [
    () => Ze({ "mdc-data-table__table": !0, [y()]: !0 }),
    () => dt(x, "table$")
  ]);
  var Ke = N(tt);
  _e(Ke, () => e.children ?? Ie), De(tt, (P, z) => ae == null ? void 0 : ae(P, z), _), xe(Ne, (P) => w = P, () => w), De(Ne, (P, z) => ae == null ? void 0 : ae(P, z), g);
  var Re = q(Ne, 2);
  {
    var st = (P) => {
      var z = Ig(), ve = q(N(z), 2);
      _e(ve, () => e.progress ?? Ie), de((Fe) => qe(z, Fe), [
        () => Object.entries(o(T)).map(([Fe, Nt]) => `${Fe}: ${Nt};`).join(" ")
      ]), E(P, z);
    };
    $(Re, (P) => {
      e.progress && P(st);
    });
  }
  var kt = q(Re, 2);
  _e(kt, () => e.paginate ?? Ie), xe(M, (P) => S = P, () => S), De(M, (P, z) => ae == null ? void 0 : ae(P, z), s), E(n, M);
  var Gt = Ee(V);
  return i(), Gt;
}
var yg = /* @__PURE__ */ X("<thead><!></thead>");
function Cg(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i, a = /* @__PURE__ */ le(void 0), s = [];
  const u = /* @__PURE__ */ new WeakMap();
  ce("SMUI:data-table:row:header", !0);
  const l = ye("SMUI:checkbox:mount");
  ce("SMUI:checkbox:mount", (y) => {
    W(a, y, !0), l && l(y);
  });
  const c = ye("SMUI:checkbox:unmount");
  ce("SMUI:checkbox:unmount", (y) => {
    W(a, void 0), c && c(y);
  }), ce("SMUI:data-table:cell:mount", (y) => {
    s.push(y), u.set(y.element, y);
  }), ce("SMUI:data-table:cell:unmount", (y) => {
    const x = s.findIndex((S) => S === y);
    x !== -1 && s.splice(x, 1), u.delete(y.element);
  });
  const d = ye("SMUI:data-table:header:mount"), v = ye("SMUI:data-table:header:unmount");
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
    return d && d(y), () => {
      v && v(y);
    };
  });
  function f() {
    return [
      ...h().querySelectorAll(".mdc-data-table__header-cell")
    ].map((y) => u.get(y)).filter((y) => y && y._smui_data_table_header_cell_accessor);
  }
  function h() {
    return i;
  }
  var g = { getElement: h }, p = yg();
  He(p, () => ({ ...r }));
  var _ = N(p);
  return _e(_, () => e.children ?? Ie), xe(p, (y) => i = y, () => i), De(p, (y, x) => ae == null ? void 0 : ae(y, x), t), E(n, p), Ee(g);
}
var Ag = /* @__PURE__ */ X("<tbody><!></tbody>");
function Eg(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = /* @__PURE__ */ Ve(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "children"
  ]), a, s = [];
  const u = /* @__PURE__ */ new WeakMap();
  ce("SMUI:data-table:row:header", !1), ce("SMUI:data-table:row:mount", (p) => {
    s.push(p), u.set(p.element, p);
  }), ce("SMUI:data-table:row:unmount", (p) => {
    const _ = s.findIndex((y) => y === p);
    _ !== -1 && s.splice(_, 1), u.delete(p.element);
  });
  const l = ye("SMUI:data-table:body:mount"), c = ye("SMUI:data-table:body:unmount");
  rt(() => {
    const p = {
      get rows() {
        return s;
      },
      get orderedRows() {
        return d();
      }
    };
    return l && l(p), () => {
      c && c(p);
    };
  });
  function d() {
    return [...v().querySelectorAll(".mdc-data-table__row")].map((p) => u.get(p)).filter((p) => p && p._smui_data_table_row_accessor);
  }
  function v() {
    return a;
  }
  var f = { getElement: v }, h = Ag();
  He(h, (p) => ({ class: p, ...i }), [
    () => Ze({ "mdc-data-table__content": !0, [r()]: !0 })
  ]);
  var g = N(h);
  return _e(g, () => e.children ?? Ie), xe(h, (p) => a = p, () => a), De(h, (p, _) => ae == null ? void 0 : ae(p, _), t), E(n, h), Ee(f);
}
let Sg = 0;
var xg = /* @__PURE__ */ X("<tr><!></tr>");
function Vl(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "rowId", 19, () => "SMUI-data-table-row-" + Sg++), a = /* @__PURE__ */ Ve(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "rowId",
    "children"
  ]), s, u = /* @__PURE__ */ le(void 0), l = Ce({}), c = Ce({}), d = ye("SMUI:data-table:row:header");
  const v = ye("SMUI:checkbox:mount");
  ce("SMUI:checkbox:mount", (R) => {
    W(u, R, !0), v && v(R);
  });
  const f = ye("SMUI:checkbox:unmount");
  ce("SMUI:checkbox:unmount", (R) => {
    W(u, void 0), f && f(R);
  });
  const h = ye("SMUI:data-table:row:mount"), g = ye("SMUI:data-table:row:unmount");
  rt(() => {
    const R = d ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return w();
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
      addAttr: x
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return w();
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
      addAttr: x
    };
    return h && h(R), () => {
      g && g(R);
    };
  });
  function p(R) {
    l[R] || (l[R] = !0);
  }
  function _(R) {
    (!(R in l) || l[R]) && (l[R] = !1);
  }
  function y(R) {
    return R in c ? c[R] ?? null : w().getAttribute(R);
  }
  function x(R, D) {
    c[R] !== D && (c[R] = D);
  }
  function S(R) {
    Be(w(), "SMUIDataTableHeaderClick", R);
  }
  function A(R) {
    Be(w(), "SMUIDataTableRowClick", { rowId: i(), target: R.target });
  }
  function w() {
    return s;
  }
  var I = { getElement: w }, C = xg(), b = (R) => {
    var D;
    d ? S(R) : A(R), (D = e.onclick) == null || D.call(e, R);
  };
  He(
    C,
    (R) => ({
      class: R,
      "aria-selected": o(u) ? o(u).checked ? "true" : "false" : void 0,
      ...c,
      ...a,
      onclick: b
    }),
    [
      () => Ze({
        "mdc-data-table__header-row": d,
        "mdc-data-table__row": !d,
        "mdc-data-table__row--selected": !d && o(u) && o(u).checked,
        ...l,
        [r()]: !0
      })
    ]
  );
  var T = N(C);
  return _e(T, () => e.children ?? Ie), xe(C, (R) => s = R, () => s), De(C, (R, D) => ae == null ? void 0 : ae(R, D), t), E(n, C), Ee(I);
}
let wg = 0;
var Tg = /* @__PURE__ */ X('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), Dg = /* @__PURE__ */ X("<th><!></th>"), Lg = /* @__PURE__ */ X("<td><!></td>");
function Ka(n, e) {
  Ae(e, !0);
  const t = () => bi(y, "$sort", i), r = () => bi(x, "$sortDirection", i), [i, a] = Si();
  let s = ye("SMUI:data-table:row:header"), u = m(e, "use", 19, () => []), l = m(e, "class", 3, ""), c = m(e, "numeric", 3, !1), d = m(e, "checkbox", 3, !1), v = m(e, "columnId", 19, () => s ? "SMUI-data-table-column-" + wg++ : "SMUI-data-table-unused"), f = m(e, "sortable", 19, () => ye("SMUI:data-table:sortable")), h = /* @__PURE__ */ Ve(e, [
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
  ]), g, p = Ce({}), _ = Ce({}), y = ye("SMUI:data-table:sort"), x = ye("SMUI:data-table:sortDirection"), S = ye("SMUI:data-table:sortAscendingAriaLabel"), A = ye("SMUI:data-table:sortDescendingAriaLabel");
  f() && (ce("SMUI:label:context", "data-table:sortable-header-cell"), ce("SMUI:icon-button:context", "data-table:sortable-header-cell"), ce("SMUI:icon-button:aria-describedby", v() + "-status-label"));
  const w = ye("SMUI:data-table:cell:mount"), I = ye("SMUI:data-table:cell:unmount");
  rt(() => {
    const k = s ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return O();
      },
      get columnId() {
        return v();
      },
      addClass: C,
      removeClass: b,
      getAttr: T,
      addAttr: R
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return O();
      },
      get columnId() {
      },
      addClass: C,
      removeClass: b,
      getAttr: T,
      addAttr: R
    };
    return w && w(k), () => {
      I && I(k);
    };
  });
  function C(k) {
    p[k] || (p[k] = !0);
  }
  function b(k) {
    (!(k in p) || p[k]) && (p[k] = !1);
  }
  function T(k) {
    return k in _ ? _[k] ?? null : O().getAttribute(k);
  }
  function R(k, ee) {
    _[k] !== ee && (_[k] = ee);
  }
  function D(k) {
    Be(O(), "SMUIDataTableHeaderCheckboxChange", k);
  }
  function L(k) {
    Be(O(), "SMUIDataTableBodyCheckboxChange", k);
  }
  function O() {
    return g;
  }
  var re = { getElement: O }, U = oe(), Z = K(U);
  {
    var H = (k) => {
      var ee = Dg(), ie = (V) => {
        var M;
        d() && D(V), (M = e.onchange) == null || M.call(e, V);
      };
      He(
        ee,
        (V) => ({
          class: V,
          role: "columnheader",
          scope: "col",
          "data-column-id": v(),
          "aria-sort": f() ? t() === v() ? r() : "none" : void 0,
          ..._,
          ...h,
          onchange: ie
        }),
        [
          () => Ze({
            "mdc-data-table__header-cell": !0,
            "mdc-data-table__header-cell--numeric": c(),
            "mdc-data-table__header-cell--checkbox": d(),
            "mdc-data-table__header-cell--with-sort": f(),
            "mdc-data-table__header-cell--sorted": f() && t() === v(),
            ...p,
            [l()]: !0
          })
        ]
      );
      var be = N(ee);
      {
        var fe = (V) => {
          var M = Tg(), Q = N(M);
          _e(Q, () => e.children ?? Ie);
          var Y = q(Q, 2), ge = N(Y);
          de(() => {
            mt(Y, "id", `${v() ?? ""}-status-label`), Oe(ge, t() === v() ? r() === "ascending" ? S : A : "");
          }), E(V, M);
        }, j = (V) => {
          var M = oe(), Q = K(M);
          _e(Q, () => e.children ?? Ie), E(V, M);
        };
        $(be, (V) => {
          f() ? V(fe) : V(j, !1);
        });
      }
      xe(ee, (V) => g = V, () => g), De(ee, (V, M) => ae == null ? void 0 : ae(V, M), u), E(k, ee);
    }, J = (k) => {
      var ee = Lg(), ie = (fe) => {
        var j;
        d() && L(fe), (j = e.onchange) == null || j.call(e, fe);
      };
      He(
        ee,
        (fe) => ({
          class: fe,
          ..._,
          ...h,
          onchange: ie
        }),
        [
          () => Ze({
            "mdc-data-table__cell": !0,
            "mdc-data-table__cell--numeric": c(),
            "mdc-data-table__cell--checkbox": d(),
            ...p,
            [l()]: !0
          })
        ]
      );
      var be = N(ee);
      _e(be, () => e.children ?? Ie), xe(ee, (fe) => g = fe, () => g), De(ee, (fe, j) => ae == null ? void 0 : ae(fe, j), u), E(k, ee);
    };
    $(Z, (k) => {
      s ? k(H) : k(J, !1);
    });
  }
  E(n, U);
  var ue = Ee(re);
  return a(), ue;
}
var Rg = /* @__PURE__ */ X('<p class="status svelte-185z1ay">Loading…</p>'), Og = /* @__PURE__ */ X('<p class="status error svelte-185z1ay"> </p>'), Mg = /* @__PURE__ */ X('<p class="status svelte-185z1ay"> </p>'), Fg = /* @__PURE__ */ X("<!> <!>", 1), Pg = /* @__PURE__ */ X("<!> <!>", 1), kg = /* @__PURE__ */ X("<!> <!>", 1);
function Gg(n, e) {
  Ae(e, !0);
  let t = /* @__PURE__ */ le(null), r = m(e, "items", 19, () => []), i = m(e, "columns", 19, () => []), a = m(e, "loading", 3, !1), s = m(e, "errorMsg", 3, ""), u = m(e, "emptyText", 3, "Nothing to show."), l = m(e, "getRowId", 3, (y, x) => (y && (y.id ?? y.key)) ?? x), c = m(e, "headerBg", 3, null), d = m(e, "rowBg", 3, null), v = m(e, "hasActions", 3, !1), f = /* @__PURE__ */ ne(() => v() || !!e.actions);
  var h = oe(), g = K(h);
  {
    var p = (y) => {
      var x = Rg();
      E(y, x);
    }, _ = (y) => {
      var x = oe(), S = K(x);
      {
        var A = (I) => {
          var C = Og(), b = N(C);
          de(() => Oe(b, s())), E(I, C);
        }, w = (I) => {
          var C = oe(), b = K(C);
          {
            var T = (D) => {
              var L = Mg(), O = N(L);
              de(() => Oe(O, u())), E(D, L);
            }, R = (D) => {
              _g(D, {
                style: "width: 100%;",
                children: (L, O) => {
                  var re = kg(), U = K(re);
                  {
                    let H = /* @__PURE__ */ ne(() => c() ? `background-color:${c()}` : void 0);
                    Cg(U, {
                      get style() {
                        return o(H);
                      },
                      children: (J, ue) => {
                        Vl(J, {
                          children: (k, ee) => {
                            var ie = Fg(), be = K(ie);
                            cn(be, 17, i, br, (V, M) => {
                              {
                                let Q = /* @__PURE__ */ ne(() => [
                                  o(M).width ? `width:${o(M).width}` : "",
                                  c() ? `background-color:${c()}` : ""
                                ].filter(Boolean).join(";"));
                                Ka(V, {
                                  header: !0,
                                  get style() {
                                    return o(Q);
                                  },
                                  children: (Y, ge) => {
                                    var pe = ct();
                                    de(() => Oe(pe, o(M).header)), E(Y, pe);
                                  },
                                  $$slots: { default: !0 }
                                });
                              }
                            });
                            var fe = q(be, 2);
                            {
                              var j = (V) => {
                                {
                                  let M = /* @__PURE__ */ ne(() => c() ? `background-color:${c()}` : void 0);
                                  Ka(V, {
                                    header: !0,
                                    get style() {
                                      return o(M);
                                    }
                                  });
                                }
                              };
                              $(fe, (V) => {
                                o(f) && V(j);
                              });
                            }
                            E(k, ie);
                          },
                          $$slots: { default: !0 }
                        });
                      },
                      $$slots: { default: !0 }
                    });
                  }
                  var Z = q(U, 2);
                  Eg(Z, {
                    children: (H, J) => {
                      var ue = oe(), k = K(ue);
                      cn(k, 19, r, (ee, ie) => l()(ee, ie), (ee, ie, be) => {
                        {
                          let fe = /* @__PURE__ */ ne(() => [
                            d() ? `background-color:${d()}` : "",
                            o(t) === l()(o(ie), o(be)) ? "background-color:#D9D800" : ""
                          ].filter(Boolean).join(";"));
                          Vl(ee, {
                            get style() {
                              return o(fe);
                            },
                            $$events: {
                              mouseenter: () => W(t, l()(o(ie), o(be)), !0),
                              mouseleave: () => W(t, null)
                            },
                            children: (j, V) => {
                              var M = Pg(), Q = K(M);
                              cn(Q, 17, i, br, (pe, Ne) => {
                                Ka(pe, {
                                  children: (tt, Ke) => {
                                    var Re = ct();
                                    de(() => {
                                      var st;
                                      return Oe(Re, ((st = o(ie)) == null ? void 0 : st[o(Ne).key]) ?? "");
                                    }), E(tt, Re);
                                  },
                                  $$slots: { default: !0 }
                                });
                              });
                              var Y = q(Q, 2);
                              {
                                var ge = (pe) => {
                                  Ka(pe, {
                                    numeric: !0,
                                    children: (Ne, tt) => {
                                      var Ke = oe(), Re = K(Ke);
                                      _e(Re, () => e.actions ?? Ie, () => ({ item: o(ie) })), E(Ne, Ke);
                                    },
                                    $$slots: { default: !0 }
                                  });
                                };
                                $(Y, (pe) => {
                                  o(f) && pe(ge);
                                });
                              }
                              E(j, M);
                            },
                            $$slots: { default: !0 }
                          });
                        }
                      }), E(H, ue);
                    },
                    $$slots: { default: !0 }
                  }), E(L, re);
                },
                $$slots: { default: !0 }
              });
            };
            $(
              b,
              (D) => {
                !r() || r().length === 0 ? D(T) : D(R, !1);
              },
              !0
            );
          }
          E(I, C);
        };
        $(
          S,
          (I) => {
            s() ? I(A) : I(w, !1);
          },
          !0
        );
      }
      E(y, x);
    };
    $(g, (y) => {
      a() ? y(p) : y(_, !1);
    });
  }
  E(n, h), Ee();
}
var Ng = /* @__PURE__ */ at('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"></path></svg>');
function Zg(n, e) {
  let t = m(e, "svgStyles", 3, "");
  yt(n, {
    children: (r, i) => {
      var a = Ng();
      de(() => qe(a, t())), E(r, a);
    }
  });
}
var Hg = /* @__PURE__ */ X('<span class="secondary-label svelte-17mxdlc"> </span>'), Bg = /* @__PURE__ */ X('<div class="separator svelte-17mxdlc"><!></div>'), Wg = /* @__PURE__ */ X('<div class="breadcrumb-wrapper svelte-17mxdlc"><button type="button"><span class="label svelte-17mxdlc"> </span> <!></button> <!></div>'), Ug = /* @__PURE__ */ X('<nav class="oscd-breadcrumbs svelte-17mxdlc" aria-label="Breadcrumb"></nav>');
function jg(n, e) {
  Ae(e, !0);
  let t = m(e, "breadcrumbs", 19, () => []), r = m(e, "activeIndex", 3, 0);
  const i = (s) => {
    var l;
    const u = t()[s];
    !(u != null && u.enabled) || s === r() || (l = e.handleClick) == null || l.call(e, s);
  };
  var a = Ug();
  cn(a, 21, t, br, (s, u, l) => {
    var c = Wg(), d = N(c);
    let v;
    d.__click = () => i(l);
    let f;
    var h = N(d), g = N(h), p = q(h, 2);
    {
      var _ = (S) => {
        var A = Hg();
        let w;
        var I = N(A);
        de(
          (C) => {
            w = qe(A, "", w, C), Oe(I, o(u).secondaryLabel);
          },
          [() => ({ color: e.color ? e.color : null })]
        ), E(S, A);
      };
      $(p, (S) => {
        o(u).secondaryLabel && S(_);
      });
    }
    var y = q(d, 2);
    {
      var x = (S) => {
        var A = Bg(), w = N(A);
        {
          let I = /* @__PURE__ */ ne(() => e.color ? e.color : "#004552");
          Zg(w, {
            get svgStyles() {
              return `fill: ${o(I) ?? ""}`;
            }
          });
        }
        E(S, A);
      };
      $(y, (S) => {
        l < t().length - 1 && S(x);
      });
    }
    de(
      (S, A) => {
        v = _r(d, 1, "breadcrumb svelte-17mxdlc", null, v, S), mt(d, "aria-current", l === r() ? "page" : void 0), mt(d, "aria-disabled", o(u).enabled ? void 0 : "true"), f = qe(d, "", f, A), Oe(g, o(u).label);
      },
      [
        () => ({
          "br-disabled": !o(u).enabled,
          "br-active": l === r()
        }),
        () => ({ color: e.color ? e.color : null })
      ]
    ), E(s, c);
  }), E(n, a), Ee();
}
pt(["click"]);
var Vg = (n, e) => {
  var t;
  n.stopPropagation(), (t = e.onClick) == null || t.call(e, n);
}, zg = /* @__PURE__ */ X('<button class="icon-button svelte-jv2py4"><!></button>');
function bu(n, e) {
  Ae(e, !0);
  let t = m(e, "tooltipSide", 3, "top"), r = m(e, "showDelay", 3, 1e3), i = m(e, "fillColor", 3, "var(--mdc-theme-primary)"), a = m(e, "size", 3, "25px"), s = /* @__PURE__ */ ne(() => `fill: ${i()}; margin: 0; width: ${a()}; height: ${a()};`);
  Iu(n, {
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
      var c = zg();
      c.__click = [Vg, e];
      var d = N(c);
      {
        var v = (h) => {
          hu(h, {
            get svgStyles() {
              return o(s);
            }
          });
        }, f = (h) => {
          var g = oe(), p = K(g);
          {
            var _ = (x) => {
              Zh(x, {
                get svgStyles() {
                  return o(s);
                }
              });
            }, y = (x) => {
              var S = oe(), A = K(S);
              {
                var w = (C) => {
                  vu(C, {
                    get svgStyles() {
                      return o(s);
                    }
                  });
                }, I = (C) => {
                  var b = oe(), T = K(b);
                  {
                    var R = (L) => {
                      gu(L, {
                        get svgStyles() {
                          return o(s);
                        }
                      });
                    }, D = (L) => {
                      var O = oe(), re = K(O);
                      {
                        var U = (H) => {
                          $h(H, {
                            get svgStyles() {
                              return o(s);
                            }
                          });
                        }, Z = (H) => {
                          var J = oe(), ue = K(J);
                          {
                            var k = (ie) => {
                              tg(ie, {
                                get svgStyles() {
                                  return o(s);
                                }
                              });
                            }, ee = (ie) => {
                              var be = oe(), fe = K(be);
                              {
                                var j = (M) => {
                                  rg(M, {
                                    get svgStyles() {
                                      return o(s);
                                    }
                                  });
                                }, V = (M) => {
                                  var Q = oe(), Y = K(Q);
                                  {
                                    var ge = (Ne) => {
                                      ag(Ne, {
                                        get svgStyles() {
                                          return o(s);
                                        }
                                      });
                                    }, pe = (Ne) => {
                                      var tt = ct();
                                      de(() => Oe(tt, `Unsupported supported type: ${e.type ?? ""}`)), E(Ne, tt);
                                    };
                                    $(
                                      Y,
                                      (Ne) => {
                                        e.type === "star" ? Ne(ge) : Ne(pe, !1);
                                      },
                                      !0
                                    );
                                  }
                                  E(M, Q);
                                };
                                $(
                                  fe,
                                  (M) => {
                                    e.type === "close" ? M(j) : M(V, !1);
                                  },
                                  !0
                                );
                              }
                              E(ie, be);
                            };
                            $(
                              ue,
                              (ie) => {
                                e.type === "link-off" ? ie(k) : ie(ee, !1);
                              },
                              !0
                            );
                          }
                          E(H, J);
                        };
                        $(
                          re,
                          (H) => {
                            e.type === "wand-stars" ? H(U) : H(Z, !1);
                          },
                          !0
                        );
                      }
                      E(L, O);
                    };
                    $(
                      T,
                      (L) => {
                        e.type === "visibility" ? L(R) : L(D, !1);
                      },
                      !0
                    );
                  }
                  E(C, b);
                };
                $(
                  A,
                  (C) => {
                    e.type === "edit" ? C(w) : C(I, !1);
                  },
                  !0
                );
              }
              E(x, S);
            };
            $(
              p,
              (x) => {
                e.type === "duplicate" ? x(_) : x(y, !1);
              },
              !0
            );
          }
          E(h, g);
        };
        $(d, (h) => {
          e.type === "delete" ? h(v) : h(f, !1);
        });
      }
      de(() => mt(c, "aria-label", e.tooltip)), E(u, c);
    },
    $$slots: { default: !0 }
  }), Ee();
}
pt(["click"]);
function zl(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Pr(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? zl(Object(t), !0).forEach(function(r) {
      ta(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : zl(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function Gi(n) {
  "@babel/helpers - typeof";
  return Gi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Gi(n);
}
function ta(n, e, t) {
  return e in n ? Object.defineProperty(n, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[e] = t, n;
}
function Xg(n, e) {
  if (n == null) return {};
  var t = {}, r = Object.keys(n), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(e.indexOf(i) >= 0) && (t[i] = n[i]);
  return t;
}
function Yg(n, e) {
  if (n == null) return {};
  var t = Xg(n, e), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    for (i = 0; i < a.length; i++)
      r = a[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(n, r) && (t[r] = n[r]);
  }
  return t;
}
function qg(n, e) {
  return Qg(n) || $g(n, e) || Jo(n, e) || tm();
}
function Dn(n) {
  return Kg(n) || Jg(n) || Jo(n) || em();
}
function Kg(n) {
  if (Array.isArray(n)) return Eo(n);
}
function Qg(n) {
  if (Array.isArray(n)) return n;
}
function Jg(n) {
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
function Jo(n, e) {
  if (n) {
    if (typeof n == "string") return Eo(n, e);
    var t = Object.prototype.toString.call(n).slice(8, -1);
    if (t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set") return Array.from(n);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Eo(n, e);
  }
}
function Eo(n, e) {
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
function Za(n, e) {
  var t = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (!t) {
    if (Array.isArray(n) || (t = Jo(n)) || e) {
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
function na(n, e, t) {
  n.dispatchEvent(new CustomEvent(nm, {
    detail: {
      items: e,
      info: t
    }
  }));
}
function Ur(n, e, t) {
  n.dispatchEvent(new CustomEvent(rm, {
    detail: {
      items: e,
      info: t
    }
  }));
}
var Gs = "draggedEntered", Ha = "draggedLeft", Ns = "draggedOverIndex", $o = "draggedLeftDocument", hs = {
  LEFT_FOR_ANOTHER: "leftForAnother",
  OUTSIDE_OF_ANY: "outsideOfAny"
};
function im(n, e, t) {
  n.dispatchEvent(new CustomEvent(Gs, {
    detail: {
      indexObj: e,
      draggedEl: t
    }
  }));
}
function am(n, e, t) {
  n.dispatchEvent(new CustomEvent(Ha, {
    detail: {
      draggedEl: e,
      type: hs.LEFT_FOR_ANOTHER,
      theOtherDz: t
    }
  }));
}
function sm(n, e) {
  n.dispatchEvent(new CustomEvent(Ha, {
    detail: {
      draggedEl: e,
      type: hs.OUTSIDE_OF_ANY
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
  window.dispatchEvent(new CustomEvent($o, {
    detail: {
      draggedEl: n
    }
  }));
}
var St = {
  DRAG_STARTED: "dragStarted",
  DRAGGED_ENTERED: Gs,
  DRAGGED_ENTERED_ANOTHER: "dragEnteredAnother",
  DRAGGED_OVER_INDEX: Ns,
  DRAGGED_LEFT: Ha,
  DRAGGED_LEFT_ALL: "draggedLeftAll",
  DROPPED_INTO_ZONE: "droppedIntoZone",
  DROPPED_INTO_ANOTHER: "droppedIntoAnother",
  DROPPED_OUTSIDE_OF_ANY: "droppedOutsideOfAny",
  DRAG_STOPPED: "dragStopped"
}, Yt = {
  POINTER: "pointer",
  KEYBOARD: "keyboard"
}, oa = "isDndShadowItem", Zs = "data-is-dnd-shadow-item-internal", dm = "data-is-dnd-shadow-item-hint", um = "id:dnd-shadow-placeholder-0000", cm = "dnd-action-dragged-el", Tt = "id", So = 0;
function _u() {
  So++;
}
function yu() {
  if (So === 0)
    throw new Error("Bug! trying to decrement when there are no dropzones");
  So--;
}
var el = typeof window > "u";
function xo(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, t, r = e ? hm(n) : n.getBoundingClientRect(), i = getComputedStyle(n), a = i.transform;
  if (a) {
    var s, u, l, c;
    if (a.startsWith("matrix3d("))
      t = a.slice(9, -1).split(/, /), s = +t[0], u = +t[5], l = +t[12], c = +t[13];
    else if (a.startsWith("matrix("))
      t = a.slice(7, -1).split(/, /), s = +t[0], u = +t[3], l = +t[4], c = +t[5];
    else
      return r;
    var d = i.transformOrigin, v = r.x - l - (1 - s) * parseFloat(d), f = r.y - c - (1 - u) * parseFloat(d.slice(d.indexOf(" ") + 1)), h = s ? r.width / s : n.offsetWidth, g = u ? r.height / u : n.offsetHeight;
    return {
      x: v,
      y: f,
      width: h,
      height: g,
      top: f,
      right: v + h,
      bottom: f + g,
      left: v
    };
  } else
    return r;
}
function Cu(n) {
  var e = xo(n);
  return {
    top: e.top + window.scrollY,
    bottom: e.bottom + window.scrollY,
    left: e.left + window.scrollX,
    right: e.right + window.scrollX
  };
}
function Au(n) {
  var e = n.getBoundingClientRect();
  return {
    top: e.top + window.scrollY,
    bottom: e.bottom + window.scrollY,
    left: e.left + window.scrollX,
    right: e.right + window.scrollX
  };
}
function Eu(n) {
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
  return Eu(Au(n));
}
function Xl(n, e) {
  var t = wa(n), r = Cu(e);
  return Hs(t, r);
}
function Yl(n, e) {
  var t = wa(n), r = wa(e);
  return fm(t, r);
}
function vm(n) {
  var e = Au(n);
  return e.right < 0 || e.left > document.documentElement.scrollWidth || e.bottom < 0 || e.top > document.documentElement.scrollHeight;
}
function hm(n) {
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
var Hi;
function tl() {
  Hi = /* @__PURE__ */ new Map();
}
tl();
function gm(n) {
  var e = Array.from(n.children).findIndex(function(t) {
    return t.getAttribute(Zs);
  });
  if (e >= 0)
    return Hi.has(n) || Hi.set(n, /* @__PURE__ */ new Map()), Hi.get(n).set(e, Cu(n.children[e])), e;
}
function mm(n, e) {
  if (!Xl(n, e))
    return null;
  var t = e.children;
  if (t.length === 0)
    return {
      index: 0,
      isProximityBased: !0
    };
  for (var r = gm(e), i = 0; i < t.length; i++)
    if (Xl(n, t[i])) {
      var a = Hi.has(e) && Hi.get(e).get(i);
      return a && !Hs(wa(n), a) ? {
        index: r,
        isProximityBased: !1
      } : {
        index: i,
        isProximityBased: !1
      };
    }
  for (var s = Number.MAX_VALUE, u = void 0, l = 0; l < t.length; l++) {
    var c = Yl(n, t[l]);
    c < s && (s = c, u = l);
  }
  if (t.length > 0) {
    var d = t.length, v = t[d - 1], f = v.cloneNode(!1);
    f.style.visibility = "hidden", f.style.pointerEvents = "none", e.appendChild(f);
    var h = Yl(n, f);
    h < s && (u = d), e.removeChild(f);
  }
  return {
    index: u,
    isProximityBased: !0
  };
}
function pa(n) {
  return JSON.stringify(n, null, 2);
}
function gs(n) {
  if (!n)
    throw new Error("cannot get depth of a falsy node");
  return Su(n, 0);
}
function Su(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return n.parentElement ? Su(n.parentElement, e + 1) : e - 1;
}
function pm(n, e) {
  if (Object.keys(n).length !== Object.keys(e).length)
    return !1;
  for (var t in n)
    if (!{}.hasOwnProperty.call(e, t) || e[t] !== n[t])
      return !1;
  return !0;
}
function Im(n, e) {
  if (n.length !== e.length)
    return !1;
  for (var t = 0; t < n.length; t++)
    if (n[t] !== e[t])
      return !1;
  return !0;
}
var bm = 200, ql = 10, wo;
function _m(n, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : bm, r = arguments.length > 3 ? arguments[3] : void 0, i, a, s = !1, u, l = Array.from(e).sort(function(d, v) {
    return gs(v) - gs(d);
  });
  function c() {
    var d = wa(n), v = r.multiScrollIfNeeded();
    if (!v && u && Math.abs(u.x - d.x) < ql && Math.abs(u.y - d.y) < ql) {
      wo = window.setTimeout(c, t);
      return;
    }
    if (vm(n)) {
      lm(n);
      return;
    }
    u = d;
    var f = !1, h = Za(l), g;
    try {
      for (h.s(); !(g = h.n()).done; ) {
        var p = g.value;
        v && tl();
        var _ = mm(n, p);
        if (_ !== null) {
          var y = _.index;
          f = !0, p !== i ? (i && am(i, n, p), im(p, _, n), i = p) : y !== a && (om(p, _, n), a = y);
          break;
        }
      }
    } catch (x) {
      h.e(x);
    } finally {
      h.f();
    }
    !f && s && i ? (sm(i, n), i = void 0, a = void 0, s = !1) : s = !0, wo = window.setTimeout(c, t);
  }
  c();
}
function ym() {
  clearTimeout(wo), tl();
}
var Ia = 30;
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
    return Ia - a;
  }
  function i(a, s) {
    if (!s)
      return !1;
    var u = Am(a, s), l = !!n.directionObj;
    if (u === null)
      return l && e(), !1;
    var c = !1, d = !1;
    return s.scrollHeight > s.clientHeight && (u.bottom < Ia ? (c = !0, n.directionObj = {
      x: 0,
      y: 1
    }, n.stepPx = r(u.bottom)) : u.top < Ia && (c = !0, n.directionObj = {
      x: 0,
      y: -1
    }, n.stepPx = r(u.top)), !l && c) || s.scrollWidth > s.clientWidth && (u.right < Ia ? (d = !0, n.directionObj = {
      x: 1,
      y: 0
    }, n.stepPx = r(u.right)) : u.left < Ia && (d = !0, n.directionObj = {
      x: -1,
      y: 0
    }, n.stepPx = r(u.left)), !l && d) ? (t(s), !0) : (e(), !1);
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
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e = arguments.length > 1 ? arguments[1] : void 0, t = xm(n), r = Array.from(t).sort(function(l, c) {
    return gs(c) - gs(l);
  }), i = Cm(), a = i.scrollIfNeeded, s = i.resetScrolling;
  function u() {
    var l = e();
    if (!l || !r)
      return !1;
    for (var c = r.filter(function(f) {
      return Hs(l, f.getBoundingClientRect()) || f === document.scrollingElement;
    }), d = 0; d < c.length; d++) {
      var v = a(l, c[d]);
      if (v)
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
  var e = /* @__PURE__ */ new Set(), t = Za(n), r;
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
  var e = n.cloneNode(!0), t = [], r = n.tagName === "SELECT", i = r ? [n] : Dn(n.querySelectorAll("select")), a = Za(i), s;
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
    for (var l = r ? [e] : Dn(e.querySelectorAll("select")), c = 0; c < l.length; c++) {
      var d = l[c], v = t[c], f = d.querySelector('option[value="'.concat(v, '"'));
      f && f.setAttribute("selected", !0);
    }
  var h = n.tagName === "CANVAS", g = h ? [n] : Dn(n.querySelectorAll("canvas"));
  if (g.length > 0)
    for (var p = h ? [e] : Dn(e.querySelectorAll("canvas")), _ = 0; _ < p.length; _++) {
      var y = g[_], x = p[_];
      x.width = y.width, x.height = y.height, y.width > 0 && y.height > 0 && x.getContext("2d").drawImage(y, 0, 0);
    }
  return e;
}
var Ta = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
}), Tm = ta({}, Ta.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
function xu(n) {
  if (!Ta[n]) throw new Error("Can't get non existing feature flag ".concat(n, "! Supported flags: ").concat(Object.keys(Ta)));
  return Tm[n];
}
var Dm = 0.2;
function ii(n) {
  return "".concat(n, " ").concat(Dm, "s ease");
}
function Lm(n, e) {
  var t = n.getBoundingClientRect(), r = wm(n);
  wu(n, r), r.id = cm, r.style.position = "fixed";
  var i = t.top, a = t.left;
  if (r.style.top = "".concat(i, "px"), r.style.left = "".concat(a, "px"), e) {
    var s = Eu(t);
    i -= s.y - e.y, a -= s.x - e.x, window.setTimeout(function() {
      r.style.top = "".concat(i, "px"), r.style.left = "".concat(a, "px");
    }, 0);
  }
  return r.style.margin = "0", r.style.boxSizing = "border-box", r.style.height = "".concat(t.height, "px"), r.style.width = "".concat(t.width, "px"), r.style.transition = "".concat(ii("top"), ", ").concat(ii("left"), ", ").concat(ii("background-color"), ", ").concat(ii("opacity"), ", ").concat(ii("color"), " "), window.setTimeout(function() {
    return r.style.transition += ", ".concat(ii("width"), ", ").concat(ii("height"));
  }, 0), r.style.zIndex = "9999", r.style.cursor = "grabbing", r;
}
function Rm(n) {
  n.style.cursor = "grab";
}
function Om(n, e, t, r) {
  wu(e, n);
  var i = e.getBoundingClientRect(), a = n.getBoundingClientRect(), s = i.width - a.width, u = i.height - a.height;
  if (s || u) {
    var l = {
      left: (t - a.left) / a.width,
      top: (r - a.top) / a.height
    };
    xu(Ta.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT) || (n.style.height = "".concat(i.height, "px"), n.style.width = "".concat(i.width, "px")), n.style.left = "".concat(parseFloat(n.style.left) - l.left * s, "px"), n.style.top = "".concat(parseFloat(n.style.top) - l.top * u, "px");
  }
}
function wu(n, e) {
  var t = window.getComputedStyle(n);
  Array.from(t).filter(function(r) {
    return r.startsWith("background") || r.startsWith("padding") || r.startsWith("font") || r.startsWith("text") || r.startsWith("align") || r.startsWith("justify") || r.startsWith("display") || r.startsWith("flex") || r.startsWith("border") || r === "opacity" || r === "color" || r === "list-style-type" || // copying with and height to make up for rect update timing issues in some browsers
    xu(Ta.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT) && (r === "width" || r === "height");
  }).forEach(function(r) {
    return e.style.setProperty(r, t.getPropertyValue(r), t.getPropertyPriority(r));
  });
}
function Mm(n, e) {
  n.draggable = !1, n.ondragstart = function() {
    return !1;
  }, e ? (n.style.userSelect = "", n.style.WebkitUserSelect = "", n.style.cursor = "") : (n.style.userSelect = "none", n.style.WebkitUserSelect = "none", n.style.cursor = "grab");
}
function Tu(n) {
  n.style.display = "none", n.style.position = "fixed", n.style.zIndex = "-5";
}
function Fm(n) {
  n.style.visibility = "hidden", n.setAttribute(Zs, "true");
}
function Pm(n) {
  n.style.visibility = "", n.removeAttribute(Zs);
}
function as(n) {
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
function ms(n) {
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
function km(n) {
  var e = n.style.minHeight;
  n.style.minHeight = window.getComputedStyle(n).getPropertyValue("height");
  var t = n.style.minWidth;
  return n.style.minWidth = window.getComputedStyle(n).getPropertyValue("width"), function() {
    n.style.minHeight = e, n.style.minWidth = t;
  };
}
var Gm = "--any--", Nm = 100, Zm = 20, Qa = 3, Hm = 80, Kl = {
  outline: "rgba(255, 255, 102, 0.7) solid 2px"
}, Ql = "data-is-dnd-original-dragged-item", ln, wt, dn, Bs, it, Ws, Br, Ft, Xn, jt, Lr = !1, nl = !1, rl, Ba = !1, ss = [], Aa, Yn, _a = !1, Wn = /* @__PURE__ */ new Map(), gt = /* @__PURE__ */ new Map(), ao = /* @__PURE__ */ new WeakMap();
function Bm(n, e) {
  Wn.has(e) || Wn.set(e, /* @__PURE__ */ new Set()), Wn.get(e).has(n) || (Wn.get(e).add(n), _u());
}
function Jl(n, e) {
  Wn.get(e).delete(n), yu(), Wn.get(e).size === 0 && Wn.delete(e);
}
function Wm() {
  var n = Wn.get(Bs), e = Za(n), t;
  try {
    for (e.s(); !(t = e.n()).done; ) {
      var r = t.value;
      r.addEventListener(Gs, Du), r.addEventListener(Ha, Lu), r.addEventListener(Ns, Ru);
    }
  } catch (s) {
    e.e(s);
  } finally {
    e.f();
  }
  window.addEventListener($o, ra);
  var i = Math.max.apply(Math, Dn(Array.from(n.keys()).map(function(s) {
    return gt.get(s).dropAnimationDurationMs;
  }))), a = i === 0 ? Zm : Math.max(i, Nm);
  Aa = Em(n, function() {
    return jt;
  }), _m(wt, n, a * 1.07, Aa);
}
function Um() {
  var n = Wn.get(Bs), e = Za(n), t;
  try {
    for (e.s(); !(t = e.n()).done; ) {
      var r = t.value;
      r.removeEventListener(Gs, Du), r.removeEventListener(Ha, Lu), r.removeEventListener(Ns, Ru);
    }
  } catch (i) {
    e.e(i);
  } finally {
    e.f();
  }
  window.removeEventListener($o, ra), Aa && (Aa.destroy(), Aa = void 0), ym();
}
function Us(n) {
  return n.findIndex(function(e) {
    return !!e[oa];
  });
}
function jm(n) {
  var e;
  return Pr(Pr({}, n), {}, (e = {}, ta(e, oa, !0), ta(e, Tt, um), e));
}
function Du(n) {
  var e = gt.get(n.currentTarget), t = e.items, r = e.dropFromOthersDisabled;
  if (!(r && n.currentTarget !== it)) {
    if (Ba = !1, t = t.filter(function(u) {
      return u[Tt] !== Br[Tt];
    }), it !== n.currentTarget) {
      var i = gt.get(it).items, a = i.filter(function(u) {
        return !u[oa];
      });
      Ur(it, a, {
        trigger: St.DRAGGED_ENTERED_ANOTHER,
        id: dn[Tt],
        source: Yt.POINTER
      });
    }
    var s = n.detail.indexObj.index;
    Ft = n.currentTarget, t.splice(s, 0, Br), Ur(n.currentTarget, t, {
      trigger: St.DRAGGED_ENTERED,
      id: dn[Tt],
      source: Yt.POINTER
    });
  }
}
function Lu(n) {
  if (Lr) {
    var e = gt.get(n.currentTarget), t = e.items, r = e.dropFromOthersDisabled;
    if (!(r && n.currentTarget !== it && n.currentTarget !== Ft)) {
      var i = Dn(t), a = Us(i);
      a !== -1 && i.splice(a, 1);
      var s = Ft;
      Ft = void 0;
      var u = n.detail, l = u.type, c = u.theOtherDz;
      if (l === hs.OUTSIDE_OF_ANY || l === hs.LEFT_FOR_ANOTHER && c !== it && gt.get(c).dropFromOthersDisabled) {
        Ba = !0, Ft = it;
        var d = s === it ? i : Dn(gt.get(it).items);
        d.splice(Ws, 0, Br), Ur(it, d, {
          trigger: St.DRAGGED_LEFT_ALL,
          id: dn[Tt],
          source: Yt.POINTER
        });
      }
      Ur(n.currentTarget, i, {
        trigger: St.DRAGGED_LEFT,
        id: dn[Tt],
        source: Yt.POINTER
      });
    }
  }
}
function Ru(n) {
  var e = gt.get(n.currentTarget), t = e.items, r = e.dropFromOthersDisabled;
  if (!(r && n.currentTarget !== it)) {
    var i = Dn(t);
    Ba = !1;
    var a = n.detail.indexObj.index, s = Us(i);
    s !== -1 && i.splice(s, 1), i.splice(a, 0, Br), Ur(n.currentTarget, i, {
      trigger: St.DRAGGED_OVER_INDEX,
      id: dn[Tt],
      source: Yt.POINTER
    });
  }
}
function ps(n) {
  n.preventDefault();
  var e = n.touches ? n.touches[0] : n;
  jt = {
    x: e.clientX,
    y: e.clientY
  }, wt.style.transform = "translate3d(".concat(jt.x - Xn.x, "px, ").concat(jt.y - Xn.y, "px, 0)");
}
function ra() {
  nl = !0, window.removeEventListener("mousemove", ps), window.removeEventListener("touchmove", ps), window.removeEventListener("mouseup", ra), window.removeEventListener("touchend", ra), Um(), Rm(wt), Ft || (Ft = it);
  var n = gt.get(Ft), e = n.items, t = n.type;
  ms(Wn.get(t), function(a) {
    return gt.get(a).dropTargetStyle;
  }, function(a) {
    return gt.get(a).dropTargetClasses;
  });
  var r = Us(e);
  r === -1 && Ft === it && (r = Ws), e = e.map(function(a) {
    return a[oa] ? dn : a;
  });
  function i() {
    rl(), na(Ft, e, {
      trigger: Ba ? St.DROPPED_OUTSIDE_OF_ANY : St.DROPPED_INTO_ZONE,
      id: dn[Tt],
      source: Yt.POINTER
    }), Ft !== it && na(it, gt.get(it).items, {
      trigger: St.DROPPED_INTO_ANOTHER,
      id: dn[Tt],
      source: Yt.POINTER
    });
    var a = Array.from(Ft.children).find(function(s) {
      return s.getAttribute(Zs);
    });
    a && Pm(a), Xm();
  }
  gt.get(Ft).dropAnimationDisabled ? i() : Vm(r, i);
}
function Vm(n, e) {
  var t = n > -1 ? xo(Ft.children[n], !1) : xo(Ft, !1), r = {
    x: t.left - parseFloat(wt.style.left),
    y: t.top - parseFloat(wt.style.top)
  }, i = gt.get(Ft), a = i.dropAnimationDurationMs, s = "transform ".concat(a, "ms ease");
  wt.style.transition = wt.style.transition ? wt.style.transition + "," + s : s, wt.style.transform = "translate3d(".concat(r.x, "px, ").concat(r.y, "px, 0)"), window.setTimeout(e, a);
}
function zm(n, e) {
  ss.push({
    dz: n,
    destroy: e
  }), window.requestAnimationFrame(function() {
    Tu(n), document.body.appendChild(n);
  });
}
function Xm() {
  wt && wt.remove && wt.remove(), ln && ln.remove && ln.remove(), wt = void 0, ln = void 0, dn = void 0, Bs = void 0, it = void 0, Ws = void 0, Br = void 0, Ft = void 0, Xn = void 0, jt = void 0, Lr = !1, nl = !1, rl = void 0, Ba = !1, Yn && clearTimeout(Yn), Yn = void 0, _a = !1, ss.length && (ss.forEach(function(n) {
    var e = n.dz, t = n.destroy;
    t(), e.remove();
  }), ss = []);
}
function Ym(n, e) {
  var t = !1, r = {
    items: void 0,
    type: void 0,
    flipDurationMs: 0,
    dragDisabled: !1,
    morphDisabled: !1,
    dropFromOthersDisabled: !1,
    dropTargetStyle: Kl,
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
    window.removeEventListener("mousemove", l), window.removeEventListener("touchmove", l), window.removeEventListener("mouseup", u), window.removeEventListener("touchend", u), Yn && (clearTimeout(Yn), Yn = void 0, _a = !1);
  }
  function u(f) {
    if (s(), ln = void 0, Xn = void 0, jt = void 0, f.type === "touchend") {
      var h = new Event("click", {
        bubbles: !0,
        cancelable: !0
      });
      f.target.dispatchEvent(h);
    }
  }
  function l(f) {
    var h = !!f.touches, g = h ? f.touches[0] : f;
    if (h && r.delayTouchStartMs > 0 && !_a) {
      jt = {
        x: g.clientX,
        y: g.clientY
      }, (Math.abs(jt.x - Xn.x) >= Qa || Math.abs(jt.y - Xn.y) >= Qa) && (Yn && (clearTimeout(Yn), Yn = void 0), u(f));
      return;
    }
    f.preventDefault(), jt = {
      x: g.clientX,
      y: g.clientY
    }, (Math.abs(jt.x - Xn.x) >= Qa || Math.abs(jt.y - Xn.y) >= Qa) && (s(), d());
  }
  function c(f) {
    if (!(f.target !== f.currentTarget && (f.target.value !== void 0 || f.target.isContentEditable)) && !f.button && !Lr) {
      var h = !!f.touches, g = h && r.delayTouchStartMs > 0;
      g || f.preventDefault(), f.stopPropagation();
      var p = h ? f.touches[0] : f;
      Xn = {
        x: p.clientX,
        y: p.clientY
      }, jt = Pr({}, Xn), ln = f.currentTarget, g && (_a = !1, Yn = window.setTimeout(function() {
        ln && (_a = !0, s(), d());
      }, r.delayTouchStartMs)), a();
    }
  }
  function d() {
    Lr = !0;
    var f = i.get(ln);
    Ws = f, it = ln.parentElement;
    var h = it.closest("dialog") || it.closest("[popover]") || it.getRootNode(), g = h.body || h, p = r.items, _ = r.type, y = r.centreDraggedOnCursor, x = Dn(p);
    dn = x[f], Bs = _, Br = jm(dn), wt = Lm(ln, y && jt), g.appendChild(wt);
    function S() {
      ln.parentElement ? window.requestAnimationFrame(S) : (ln.setAttribute(Ql, !0), g.appendChild(ln), Wm(), Tu(ln), Br[Tt] = dn[Tt], wt.focus());
    }
    window.requestAnimationFrame(S), as(Array.from(Wn.get(r.type)).filter(function(A) {
      return A === it || !gt.get(A).dropFromOthersDisabled;
    }), function(A) {
      return gt.get(A).dropTargetStyle;
    }, function(A) {
      return gt.get(A).dropTargetClasses;
    }), x.splice(f, 1, Br), rl = km(it), Ur(it, x, {
      trigger: St.DRAG_STARTED,
      id: dn[Tt],
      source: Yt.POINTER
    }), window.addEventListener("mousemove", ps, {
      passive: !1
    }), window.addEventListener("touchmove", ps, {
      passive: !1,
      capture: !1
    }), window.addEventListener("mouseup", ra, {
      passive: !1
    }), window.addEventListener("touchend", ra, {
      passive: !1
    });
  }
  function v(f) {
    var h = f.items, g = h === void 0 ? void 0 : h, p = f.flipDurationMs, _ = p === void 0 ? 0 : p, y = f.type, x = y === void 0 ? Gm : y, S = f.dragDisabled, A = S === void 0 ? !1 : S, w = f.morphDisabled, I = w === void 0 ? !1 : w, C = f.dropFromOthersDisabled, b = C === void 0 ? !1 : C, T = f.dropTargetStyle, R = T === void 0 ? Kl : T, D = f.dropTargetClasses, L = D === void 0 ? [] : D, O = f.transformDraggedElement, re = O === void 0 ? function() {
    } : O, U = f.centreDraggedOnCursor, Z = U === void 0 ? !1 : U, H = f.dropAnimationDisabled, J = H === void 0 ? !1 : H, ue = f.delayTouchStart, k = ue === void 0 ? !1 : ue;
    r.dropAnimationDurationMs = _;
    var ee = 0;
    k === !0 ? ee = Hm : typeof k == "number" && isFinite(k) && k >= 0 && (ee = k), r.delayTouchStartMs = ee, r.type && x !== r.type && Jl(n, r.type), r.type = x, r.items = Dn(g), r.dragDisabled = A, r.morphDisabled = I, r.transformDraggedElement = re, r.centreDraggedOnCursor = Z, r.dropAnimationDisabled = J, t && Lr && !nl && (!pm(R, r.dropTargetStyle) || !Im(L, r.dropTargetClasses)) && (ms([n], function() {
      return r.dropTargetStyle;
    }, function() {
      return L;
    }), as([n], function() {
      return R;
    }, function() {
      return L;
    })), r.dropTargetStyle = R, r.dropTargetClasses = Dn(L);
    function ie(V, M) {
      return gt.get(V) ? gt.get(V)[M] : r[M];
    }
    t && Lr && r.dropFromOthersDisabled !== b && (b ? ms([n], function(V) {
      return ie(V, "dropTargetStyle");
    }, function(V) {
      return ie(V, "dropTargetClasses");
    }) : as([n], function(V) {
      return ie(V, "dropTargetStyle");
    }, function(V) {
      return ie(V, "dropTargetClasses");
    })), r.dropFromOthersDisabled = b, gt.set(n, r), Bm(n, x);
    for (var be = Lr ? Us(r.items) : -1, fe = 0; fe < n.children.length; fe++) {
      var j = n.children[fe];
      if (Mm(j, A), fe === be) {
        I || Om(wt, j, jt.x, jt.y), r.transformDraggedElement(wt, dn, fe), Fm(j);
        continue;
      }
      j.removeEventListener("mousedown", ao.get(j)), j.removeEventListener("touchstart", ao.get(j)), A || (j.addEventListener("mousedown", c), j.addEventListener("touchstart", c), ao.set(j, c)), i.set(j, fe), t || (t = !0);
    }
  }
  return v(e), {
    update: function(h) {
      v(h);
    },
    destroy: function() {
      function h() {
        Jl(n, gt.get(n).type), gt.delete(n);
      }
      Lr && !n.closest("[".concat(Ql, "]")) ? zm(n, h) : h();
    }
  };
}
var Ja, To = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
}, Ou = (Ja = {}, ta(Ja, To.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), ta(Ja, To.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list"), Ja), qm = "dnd-action-aria-alert", bt;
function Do() {
  bt || (bt = document.createElement("div"), function() {
    bt.id = qm, bt.style.position = "fixed", bt.style.bottom = "0", bt.style.left = "0", bt.style.zIndex = "-5", bt.style.opacity = "0", bt.style.height = "0", bt.style.width = "0", bt.setAttribute("role", "alert");
  }(), document.body.prepend(bt), Object.entries(Ou).forEach(function(n) {
    var e = qg(n, 2), t = e[0], r = e[1];
    return document.body.prepend(Jm(t, r));
  }));
}
function Km() {
  return el ? null : (document.readyState === "complete" ? Do() : window.addEventListener("DOMContentLoaded", Do), Pr({}, To));
}
function Qm() {
  el || !bt || (Object.keys(Ou).forEach(function(n) {
    var e;
    return (e = document.getElementById(n)) === null || e === void 0 ? void 0 : e.remove();
  }), bt.remove(), bt = void 0);
}
function Jm(n, e) {
  var t = document.createElement("div");
  return t.id = n, t.innerHTML = "<p>".concat(e, "</p>"), t.style.display = "none", t.style.position = "fixed", t.style.zIndex = "-5", t;
}
function Bi(n) {
  if (!el) {
    bt || Do(), bt.innerHTML = "";
    var e = document.createTextNode(n);
    bt.appendChild(e), bt.style.display = "none", bt.style.display = "inline";
  }
}
var $m = "--any--", $l = {
  outline: "rgba(255, 255, 102, 0.7) solid 2px"
}, Tn = !1, Lo, zt, mi = "", ai, $n, kr = "", Is = /* @__PURE__ */ new WeakSet(), ed = /* @__PURE__ */ new WeakMap(), td = /* @__PURE__ */ new WeakMap(), Ro = /* @__PURE__ */ new Map(), Ot = /* @__PURE__ */ new Map(), Hn = /* @__PURE__ */ new Map(), bs;
function ep(n, e) {
  Hn.size === 0 && (bs = Km(), window.addEventListener("keydown", Mu), window.addEventListener("click", Fu)), Hn.has(e) || Hn.set(e, /* @__PURE__ */ new Set()), Hn.get(e).has(n) || (Hn.get(e).add(n), _u());
}
function nd(n, e) {
  zt === n && Da(), Hn.get(e).delete(n), yu(), Hn.get(e).size === 0 && Hn.delete(e), Hn.size === 0 && (window.removeEventListener("keydown", Mu), window.removeEventListener("click", Fu), bs = void 0, Qm());
}
function Mu(n) {
  if (Tn)
    switch (n.key) {
      case "Escape": {
        Da();
        break;
      }
    }
}
function Fu() {
  Tn && (Is.has(document.activeElement) || Da());
}
function tp(n) {
  if (Tn) {
    var e = n.currentTarget;
    if (e !== zt) {
      mi = e.getAttribute("aria-label") || "";
      var t = Ot.get(zt), r = t.items, i = r.find(function(v) {
        return v[Tt] === $n;
      }), a = r.indexOf(i), s = r.splice(a, 1)[0], u = Ot.get(e), l = u.items, c = u.autoAriaDisabled;
      e.getBoundingClientRect().top < zt.getBoundingClientRect().top || e.getBoundingClientRect().left < zt.getBoundingClientRect().left ? (l.push(s), c || Bi("Moved item ".concat(kr, " to the end of the list ").concat(mi))) : (l.unshift(s), c || Bi("Moved item ".concat(kr, " to the beginning of the list ").concat(mi)));
      var d = zt;
      na(d, r, {
        trigger: St.DROPPED_INTO_ANOTHER,
        id: $n,
        source: Yt.KEYBOARD
      }), na(e, l, {
        trigger: St.DROPPED_INTO_ZONE,
        id: $n,
        source: Yt.KEYBOARD
      }), zt = e;
    }
  }
}
function Pu() {
  Ro.forEach(function(n, e) {
    var t = n.update;
    return t(Ot.get(e));
  });
}
function Da() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  Ot.get(zt).autoAriaDisabled || Bi("Stopped dragging item ".concat(kr)), Is.has(document.activeElement) && document.activeElement.blur(), n && Ur(zt, Ot.get(zt).items, {
    trigger: St.DRAG_STOPPED,
    id: $n,
    source: Yt.KEYBOARD
  }), ms(Hn.get(Lo), function(e) {
    return Ot.get(e).dropTargetStyle;
  }, function(e) {
    return Ot.get(e).dropTargetClasses;
  }), ai = null, $n = null, kr = "", Lo = null, zt = null, mi = "", Tn = !1, Pu();
}
function np(n, e) {
  var t = {
    items: void 0,
    type: void 0,
    dragDisabled: !1,
    zoneTabIndex: 0,
    zoneItemTabIndex: 0,
    dropFromOthersDisabled: !1,
    dropTargetStyle: $l,
    dropTargetClasses: [],
    autoAriaDisabled: !1
  };
  function r(d, v, f) {
    d.length <= 1 || d.splice(f, 1, d.splice(v, 1, d[f])[0]);
  }
  function i(d) {
    switch (d.key) {
      case "Enter":
      case " ": {
        if ((d.target.disabled !== void 0 || d.target.href || d.target.isContentEditable) && !Is.has(d.target))
          return;
        d.preventDefault(), d.stopPropagation(), Tn ? Da() : a(d);
        break;
      }
      case "ArrowDown":
      case "ArrowRight": {
        if (!Tn) return;
        d.preventDefault(), d.stopPropagation();
        var v = Ot.get(n), f = v.items, h = Array.from(n.children), g = h.indexOf(d.currentTarget);
        g < h.length - 1 && (t.autoAriaDisabled || Bi("Moved item ".concat(kr, " to position ").concat(g + 2, " in the list ").concat(mi)), r(f, g, g + 1), na(n, f, {
          trigger: St.DROPPED_INTO_ZONE,
          id: $n,
          source: Yt.KEYBOARD
        }));
        break;
      }
      case "ArrowUp":
      case "ArrowLeft": {
        if (!Tn) return;
        d.preventDefault(), d.stopPropagation();
        var p = Ot.get(n), _ = p.items, y = Array.from(n.children), x = y.indexOf(d.currentTarget);
        x > 0 && (t.autoAriaDisabled || Bi("Moved item ".concat(kr, " to position ").concat(x, " in the list ").concat(mi)), r(_, x, x - 1), na(n, _, {
          trigger: St.DROPPED_INTO_ZONE,
          id: $n,
          source: Yt.KEYBOARD
        }));
        break;
      }
    }
  }
  function a(d) {
    u(d.currentTarget), zt = n, Lo = t.type, Tn = !0;
    var v = Array.from(Hn.get(t.type)).filter(function(h) {
      return h === zt || !Ot.get(h).dropFromOthersDisabled;
    });
    if (as(v, function(h) {
      return Ot.get(h).dropTargetStyle;
    }, function(h) {
      return Ot.get(h).dropTargetClasses;
    }), !t.autoAriaDisabled) {
      var f = "Started dragging item ".concat(kr, ". Use the arrow keys to move it within its list ").concat(mi);
      v.length > 1 && (f += ", or tab to another list in order to move the item into it"), Bi(f);
    }
    Ur(n, Ot.get(n).items, {
      trigger: St.DRAG_STARTED,
      id: $n,
      source: Yt.KEYBOARD
    }), Pu();
  }
  function s(d) {
    Tn && d.currentTarget !== ai && (d.stopPropagation(), Da(!1), a(d));
  }
  function u(d) {
    var v = Ot.get(n), f = v.items, h = Array.from(n.children), g = h.indexOf(d);
    ai = d, ai.tabIndex = t.zoneItemTabIndex, $n = f[g][Tt], kr = h[g].getAttribute("aria-label") || "";
  }
  function l(d) {
    var v = d.items, f = v === void 0 ? [] : v, h = d.type, g = h === void 0 ? $m : h, p = d.dragDisabled, _ = p === void 0 ? !1 : p, y = d.zoneTabIndex, x = y === void 0 ? 0 : y, S = d.zoneItemTabIndex, A = S === void 0 ? 0 : S, w = d.dropFromOthersDisabled, I = w === void 0 ? !1 : w, C = d.dropTargetStyle, b = C === void 0 ? $l : C, T = d.dropTargetClasses, R = T === void 0 ? [] : T, D = d.autoAriaDisabled, L = D === void 0 ? !1 : D;
    t.items = Dn(f), t.dragDisabled = _, t.dropFromOthersDisabled = I, t.zoneTabIndex = x, t.zoneItemTabIndex = A, t.dropTargetStyle = b, t.dropTargetClasses = R, t.autoAriaDisabled = L, t.type && g !== t.type && nd(n, t.type), t.type = g, ep(n, g), L || (n.setAttribute("aria-disabled", _), n.setAttribute("role", "list"), n.setAttribute("aria-describedby", _ ? bs.DND_ZONE_DRAG_DISABLED : bs.DND_ZONE_ACTIVE)), Ot.set(n, t), Tn ? n.tabIndex = n === zt || ai.contains(n) || t.dropFromOthersDisabled || zt && t.type !== Ot.get(zt).type ? -1 : 0 : n.tabIndex = t.zoneTabIndex, n.addEventListener("focus", tp);
    for (var O = function(Z) {
      var H = n.children[Z];
      Is.add(H), H.tabIndex = Tn ? -1 : t.zoneItemTabIndex, L || H.setAttribute("role", "listitem"), H.removeEventListener("keydown", ed.get(H)), H.removeEventListener("click", td.get(H)), _ || (H.addEventListener("keydown", i), ed.set(H, i), H.addEventListener("click", s), td.set(H, s)), Tn && t.items[Z][Tt] === $n && (ai = H, ai.tabIndex = t.zoneItemTabIndex, H.focus());
    }, re = 0; re < n.children.length; re++)
      O(re);
  }
  l(e);
  var c = {
    update: function(v) {
      l(v);
    },
    destroy: function() {
      nd(n, t.type), Ot.delete(n), Ro.delete(n);
    }
  };
  return Ro.set(n, c), c;
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
  rd(e);
  var t = Ym(n, e), r = np(n, e);
  return {
    update: function(a) {
      rd(a), t.update(a), r.update(a);
    },
    destroy: function() {
      t.destroy(), r.destroy();
    }
  };
}
function ap(n) {
  return !!n.closest("[".concat(dm, '="true"]'));
}
function rd(n) {
  var e = n.items;
  n.flipDurationMs, n.type, n.dragDisabled, n.morphDisabled, n.dropFromOthersDisabled;
  var t = n.zoneTabIndex, r = n.zoneItemTabIndex;
  n.dropTargetStyle;
  var i = n.dropTargetClasses;
  n.transformDraggedElement, n.autoAriaDisabled, n.centreDraggedOnCursor;
  var a = n.delayTouchStart;
  n.dropAnimationDisabled;
  var s = Yg(n, rp);
  if (Object.keys(s).length > 0 && console.warn("dndzone will ignore unknown options", s), !e)
    throw new Error("no 'items' key provided to dndzone");
  var u = e.find(function(d) {
    return !{}.hasOwnProperty.call(d, Tt);
  });
  if (u)
    throw new Error("missing '".concat(Tt, "' property for item ").concat(pa(u)));
  if (i && !Array.isArray(i))
    throw new Error("dropTargetClasses should be an array but instead it is a ".concat(Gi(i), ", ").concat(pa(i)));
  if (t && !id(t))
    throw new Error("zoneTabIndex should be a number but instead it is a ".concat(Gi(t), ", ").concat(pa(t)));
  if (r && !id(r))
    throw new Error("zoneItemTabIndex should be a number but instead it is a ".concat(Gi(r), ", ").concat(pa(r)));
  if (a !== void 0 && a !== !1) {
    var l = a === !0, c = typeof a == "number" && isFinite(a) && a >= 0;
    if (!l && !c)
      throw new Error("delayTouchStart should be a boolean (true/false) or a non-negative number but instead it is a ".concat(Gi(a), ", ").concat(pa(a)));
  }
}
function id(n) {
  return !isNaN(n) && function(e) {
    return (e | 0) === e;
  }(parseFloat(n));
}
function ku(n) {
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
var Nn = ku(!0), Wi = ku(!1);
function ad() {
  return {
    dragDisabled: Wi.get() || Nn.get(),
    zoneItemTabIndex: -1
  };
}
function Rn(n, e) {
  var t;
  Wi.set((t = e == null ? void 0 : e.dragDisabled) !== null && t !== void 0 ? t : !1);
  var r = e, i = ip(n, Pr(Pr({}, r), ad()));
  function a() {
    i.update(Pr(Pr({}, r), ad()));
  }
  Nn.subscribe(a);
  function s(l) {
    var c = l.detail.info, d = c.source, v = c.trigger;
    d === Yt.KEYBOARD && v === St.DRAG_STOPPED && Nn.set(!0);
  }
  function u(l) {
    var c = l.detail.info.source;
    c === Yt.POINTER && Nn.set(!0);
  }
  return n.addEventListener("consider", s), n.addEventListener("finalize", u), {
    update: function(c) {
      var d, v;
      r = c, Wi.set((d = (v = r) === null || v === void 0 ? void 0 : v.dragDisabled) !== null && d !== void 0 ? d : !1), a();
    },
    destroy: function() {
      n.removeEventListener("consider", s), n.removeEventListener("finalize", u), Nn.unsubscribe(a);
    }
  };
}
function On(n) {
  n.setAttribute("role", "button");
  function e(a) {
    a.preventDefault(), Nn.set(!1), window.addEventListener("mouseup", r), window.addEventListener("touchend", r);
  }
  function t(a) {
    (a.key === "Enter" || a.key === " ") && Nn.set(!1);
  }
  function r() {
    Nn.set(!0), window.removeEventListener("mouseup", r), window.removeEventListener("touchend", r);
  }
  var i = function() {
    var s = Wi.get(), u = Nn.get();
    s ? (n.tabIndex = -1, n.style.cursor = "") : (n.tabIndex = u ? 0 : -1, n.style.cursor = u ? "grab" : "grabbing");
  };
  return Wi.subscribe(i), Nn.subscribe(i), n.addEventListener("mousedown", e), n.addEventListener("touchstart", e), n.addEventListener("keydown", t), {
    update: function() {
    },
    destroy: function() {
      n.removeEventListener("mousedown", e), n.removeEventListener("touchstart", e), n.removeEventListener("keydown", t), Wi.unsubscribe(i), Nn.unsubscribe(i);
    }
  };
}
function sp(n) {
  const e = n - 1;
  return e * e * e + 1;
}
function js(n, { from: e, to: t }, r = {}) {
  var { delay: i = 0, duration: a = (I) => Math.sqrt(I) * 120, easing: s = sp } = r, u = getComputedStyle(n), l = u.transform === "none" ? "" : u.transform, [c, d] = u.transformOrigin.split(" ").map(parseFloat);
  c /= n.clientWidth, d /= n.clientHeight;
  var v = op(n), f = n.clientWidth / t.width / v, h = n.clientHeight / t.height / v, g = e.left + e.width * c, p = e.top + e.height * d, _ = t.left + t.width * c, y = t.top + t.height * d, x = (g - _) * f, S = (p - y) * h, A = e.width / t.width, w = e.height / t.height;
  return {
    delay: i,
    duration: typeof a == "function" ? a(Math.sqrt(x * x + S * S)) : a,
    easing: s,
    css: (I, C) => {
      var b = C * x, T = C * S, R = I + C * A, D = I + C * w;
      return `transform: ${l} translate(${b}px, ${T}px) scale(${R}, ${D});`;
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
const lp = jn([]);
lp.subscribe;
pt([
  "click",
  "keydown",
  "pointerdown",
  "pointerup",
  "pointermove"
]);
var dp = /* @__PURE__ */ X("<div><!></div>");
function il(n, e) {
  let t = m(e, "variant", 3, "secondary");
  var r = dp(), i = N(r);
  _e(i, () => e.children ?? Ie), de(() => _r(r, 1, `osc-card osc-card--${t()}`, "svelte-14hhvrx")), E(n, r);
}
var up = /* @__PURE__ */ X('<div class="panel-parent__header svelte-1rw2lbw"><!></div>'), cp = /* @__PURE__ */ X('<div class="panel-parent__body svelte-1rw2lbw"><!></div>'), fp = /* @__PURE__ */ X('<div class="panel-parent__footer svelte-1rw2lbw"><!></div>'), vp = /* @__PURE__ */ X('<div class="panel-parent svelte-1rw2lbw"><!> <!> <!></div>');
function al(n, e) {
  let t = m(e, "backgroundColor", 3, "");
  var r = vp(), i = N(r);
  {
    var a = (d) => {
      var v = up(), f = N(v);
      _e(f, () => e.header), E(d, v);
    };
    $(i, (d) => {
      e.header && d(a);
    });
  }
  var s = q(i, 2);
  {
    var u = (d) => {
      var v = cp(), f = N(v);
      _e(f, () => e.content), E(d, v);
    };
    $(s, (d) => {
      e.content && d(u);
    });
  }
  var l = q(s, 2);
  {
    var c = (d) => {
      var v = fp(), f = N(v);
      _e(f, () => e.additional), E(d, v);
    };
    $(l, (d) => {
      e.additional && d(c);
    });
  }
  de(() => qe(r, `--bg-color: ${t() ?? ""}`)), E(n, r);
}
pt(["click"]);
const hp = 4e3;
function gp() {
  let n = Ce({ items: [] }), e = 0;
  const t = (i) => {
    n.items = n.items.filter((a) => a.id !== i);
  }, r = (i, a, s, u = hp) => {
    const l = e++, c = { id: l, summary: a, detail: s, type: i };
    return n.items = [...n.items, c], setTimeout(
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
pt(["input"]);
const mp = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHByb2Nlc3Nlcz4KICA8cHJvY2Vzcz4KICAgIDxpZD5zdGFuZGFyZC1wcm9jZXNzLTE8L2lkPgogICAgPHZlcnNpb24+MC4wLjE8L3ZlcnNpb24+CiAgICA8bmFtZT5TdGFuZGFyZCBQcm9jZXNzIDE8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+CiAgICAgIFRoaXMgaXMgYSBzdGFuZGFyZGl6ZWQgcHJvY2VzcyB1c2VkIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHkKICAgIDwvZGVzY3JpcHRpb24+CgogICAgPHBsdWdpbnMtc2VxdWVuY2U+CiAgICAgIDxncm91cD4KICAgICAgICA8dGl0bGU+VHlwZXM8L3RpdGxlPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+dGVtcGxhdGUtZ2VuZXJhdG9yLXh5ejwvaWQ+CiAgICAgICAgICA8bmFtZT5UZW1wbGF0ZSBHZW5lcmF0b3I8L25hbWU+CiAgICAgICAgICA8c3JjIHR5cGU9ImV4dGVybmFsIj4KICAgICAgICAgICAgaHR0cHM6Ly9hc2UtY29tcGFzLmdpdGh1Yi5pby9jb21wYXMtdHJhbnNuZXRidy1wbHVnaW5zL2JlYXJpbmdwb2ludC9jb21wYXMvcGx1Z2lucy90ZW1wbGF0ZS1nZW5lcmF0b3IvaW5kZXguanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+dHlwZS1kZXNpZ25lci14eXo8L2lkPgogICAgICAgICAgPG5hbWU+VHlwZSBEZXNpZ25lcjwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iZXh0ZXJuYWwiPgogICAgICAgICAgICBodHRwczovL3NwcmludGVpbnMuZ2l0aHViLmlvL29zY2QtcGx1Z2lucy90eXBlLWRlc2lnbmVyL2luZGV4LmpzCiAgICAgICAgICA8L3NyYz4KICAgICAgICA8L3BsdWdpbj4KCiAgICAgICAgPHBsdWdpbj4KICAgICAgICAgIDxpZD50eXBlLWRpc3RyaWJ1dG9yLXh5ejwvaWQ+CiAgICAgICAgICA8bmFtZT5UeXBlIERpc3RyaWJ1dG9yPC9uYW1lPgogICAgICAgICAgPHNyYyB0eXBlPSJleHRlcm5hbCI+CiAgICAgICAgICAgIGh0dHBzOi8vYXNlLWNvbXBhcy5naXRodWIuaW8vY29tcGFzLXRyYW5zbmV0YnctcGx1Z2lucy9iZWFyaW5ncG9pbnQvY29tcGFzL3BsdWdpbnMvdHlwZS1kaXN0cmlidXRvci9pbmRleC5qcwogICAgICAgICAgPC9zcmM+CiAgICAgICAgPC9wbHVnaW4+CiAgICAgIDwvZ3JvdXA+CgogICAgICA8Z3JvdXA+CiAgICAgICAgPHRpdGxlPkNvbmZpZ3VyYXRpb248L3RpdGxlPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+Y29tbXVuaWNhdGlvbi14eXo8L2lkPgogICAgICAgICAgPG5hbWU+Q29tbXVuaWNhdGlvbjwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iaW50ZXJuYWwiPgogICAgICAgICAgICAvcGx1Z2lucy9zcmMvZWRpdG9ycy9Db21tdW5pY2F0aW9uLmpzCiAgICAgICAgICA8L3NyYz4KICAgICAgICA8L3BsdWdpbj4KCiAgICAgICAgPHBsdWdpbj4KICAgICAgICAgIDxpZD5zdWJzdGF0aW9uLXh5ejwvaWQ+CiAgICAgICAgICA8bmFtZT5TdWJzdGF0aW9uPC9uYW1lPgogICAgICAgICAgPHNyYyB0eXBlPSJpbnRlcm5hbCI+CiAgICAgICAgICAgIC9wbHVnaW5zL3NyYy9lZGl0b3JzL1N1YnN0YXRpb24uanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+cHVibGlzaGVyLXh5ejwvaWQ+CiAgICAgICAgICA8bmFtZT5QdWJsaXNoZXI8L25hbWU+CiAgICAgICAgICA8c3JjIHR5cGU9ImludGVybmFsIj4KICAgICAgICAgICAgL2V4dGVybmFsLXBsdWdpbnMvb3NjZC1wdWJsaXNoZXIvb3NjZC1wdWJsaXNoZXIuanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+c3Vic2NyaWJlLWxhdGVyLWJpbmRpbmcteHl6PC9pZD4KICAgICAgICAgIDxuYW1lPlN1YnNjcmliZTwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iaW50ZXJuYWwiPgogICAgICAgICAgICAvZXh0ZXJuYWwtcGx1Z2lucy9vc2NkLXN1YnNjcmliZXItbGF0ZXItYmluZGluZy9vc2NkLXN1YnNjcmliZXItbGF0ZXItYmluZGluZy5qcwogICAgICAgICAgPC9zcmM+CiAgICAgICAgPC9wbHVnaW4+CiAgICAgIDwvZ3JvdXA+CgogICAgICA8Z3JvdXA+CiAgICAgICAgPHRpdGxlPkRvY3VtZW50YXRpb248L3RpdGxlPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+YXV0b2RvYy14eXo8L2lkPgogICAgICAgICAgPG5hbWU+QXV0b0RvYzwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iZXh0ZXJuYWwiPgogICAgICAgICAgICBodHRwczovL3NwcmludGVpbnMuZ2l0aHViLmlvL29zY2QtcGx1Z2lucy9hdXRvLWRvYy9pbmRleC5qcwogICAgICAgICAgPC9zcmM+CiAgICAgICAgPC9wbHVnaW4+CgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+bG9jYXRpb24tbWFuYWdlci14eXo8L2lkPgogICAgICAgICAgPG5hbWU+TG9jYXRpb24gTWFuYWdlcjwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iZXh0ZXJuYWwiPgogICAgICAgICAgICBodHRwczovL2FzZS1jb21wYXMuZ2l0aHViLmlvL2NvbXBhcy10cmFuc25ldGJ3LXBsdWdpbnMvYmVhcmluZ3BvaW50L2NvbXBhcy9wbHVnaW5zL2xvY2F0aW9uLW1hbmFnZXIvaW5kZXguanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgoKICAgICAgICA8cGx1Z2luPgogICAgICAgICAgPGlkPmhpc3Rvcnktdmlld2VyLXh5ejwvaWQ+CiAgICAgICAgICA8bmFtZT5IaXN0b3J5IFZpZXdlcjwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iZXh0ZXJuYWwiPgogICAgICAgICAgICBodHRwczovL2FzZS1jb21wYXMuZ2l0aHViLmlvL2NvbXBhcy10cmFuc25ldGJ3LXBsdWdpbnMvYmVhcmluZ3BvaW50L2NvbXBhcy9wbHVnaW5zL2hpc3Rvcnktdmlld2VyL2luZGV4LmpzCiAgICAgICAgICA8L3NyYz4KICAgICAgICA8L3BsdWdpbj4KICAgICAgPC9ncm91cD4KICAgIDwvcGx1Z2lucy1zZXF1ZW5jZT4KICA8L3Byb2Nlc3M+CjwvcHJvY2Vzc2VzPgo=", qt = Ce({ processes: [] }), Oo = Ce({ loading: !1 }), Mo = Ce({ error: "" }), ut = Ce({ process: null }), mn = Ce({ isEditing: !1 }), jr = Ce({ process: null, lastSelectedPluginId: null }), sl = Ce({ plugins: [] }), pp = mp, Gu = "engineeringWizardProcesses", Ip = "external";
if (typeof localStorage < "u") {
  const n = localStorage.getItem(Gu);
  if (n)
    try {
      const e = JSON.parse(n);
      Array.isArray(e) && (qt.processes = e);
    } catch {
    }
}
Jc(() => {
  Se(() => {
    qt.processes.forEach((e) => {
      var t;
      (t = e.pluginGroups) == null || t.forEach((r) => {
        var i;
        (i = r.plugins) == null || i.length;
      });
    });
    const n = Ss(qt.processes);
    if (!(typeof localStorage > "u"))
      try {
        localStorage.setItem(Gu, JSON.stringify(n));
      } catch {
      }
  });
});
const gr = (n) => {
  var e;
  return ((e = n == null ? void 0 : n.textContent) == null ? void 0 : e.trim()) ?? "";
}, bp = (n, e) => (n == null ? void 0 : n.getAttribute(e)) ?? void 0, _p = (n) => {
  const e = bp(n == null ? void 0 : n.querySelector("src"), "type") ?? "";
  return e === "internal" || e === "external" ? e : Ip;
}, $a = (n, e) => Array.from(n.querySelectorAll(e)), sd = (n) => ({
  id: gr(n.querySelector("id")),
  name: gr(n.querySelector("name")),
  src: gr(n.querySelector("src")) || void 0,
  sourceUrl: gr(n.querySelector("sourceUrl")) || void 0,
  type: _p(n)
}), yp = (n) => $a(n, "process").map((e) => {
  const t = $a(e, ":scope > plugins-sequence > group"), r = t.length ? t.map((i) => ({
    title: gr(i.querySelector(":scope > title")) || "Untitled",
    plugins: $a(i, ":scope > plugin").map(sd)
  })) : [
    {
      title: "Ungrouped",
      plugins: $a(e, ":scope > plugins-sequence > plugin").map(sd)
    }
  ];
  return {
    id: gr(e.querySelector(":scope > id")),
    version: gr(e.querySelector(":scope > version")),
    name: gr(e.querySelector(":scope > name")),
    description: gr(e.querySelector(":scope > description")),
    pluginGroups: r
  };
});
async function Cp() {
  Oo.loading = !0, Mo.error = "";
  try {
    const n = await fetch(pp, { cache: "no-cache" });
    if (!n.ok)
      throw new Error(`HTTP ${n.status}${n.statusText ? `: ${n.statusText}` : ""}`);
    const e = await n.text();
    if (typeof DOMParser > "u")
      throw new Error("DOMParser is not available in this environment.");
    const t = new DOMParser().parseFromString(e, "application/xml");
    if (t.getElementsByTagName("parsererror").length)
      throw new Error("Invalid XML file format.");
    const r = yp(t), i = Ss(qt.processes);
    if (Array.isArray(i) && i.length) {
      const a = /* @__PURE__ */ new Map();
      for (const u of r) a.set(u.id, u);
      for (const u of i) a.set(u.id, u);
      const s = Array.from(a.values());
      return qt.processes = s, s;
    }
    return qt.processes = r, r;
  } catch (n) {
    throw Mo.error = n instanceof Error ? n.message : "Failed to load processes.", n;
  } finally {
    Oo.loading = !1;
  }
}
function Ap(n) {
  const e = (n || "").trim() || "process", t = new Set((qt.processes ?? []).map((a) => a.id));
  if (!t.has(e)) return e;
  let r = 2, i = `${e}-${r}`;
  for (; t.has(i); )
    r += 1, i = `${e}-${r}`;
  return i;
}
function Ep(n) {
  var a;
  const e = Ss(n), t = (e.id || e.name || "process").trim(), r = Ap(t), i = {
    id: r,
    version: e.version || "1.0.0",
    name: e.name || r,
    description: e.description || "",
    pluginGroups: (a = e.pluginGroups) != null && a.length ? e.pluginGroups : [{ title: "Ungrouped", plugins: [] }]
  };
  return qt.processes = [...qt.processes ?? [], i], i;
}
function Sp(n, e, t) {
  const r = "Ungrouped", i = qt.processes.find((u) => u.id === n);
  if (!i) return;
  const a = i.pluginGroups ?? (i.pluginGroups = []);
  let s = a.find((u) => u.title === r);
  s || (s = { title: r, plugins: [] }, a.push(s)), s.plugins || (s.plugins = []), s.plugins.push(e);
}
function xp(n, e) {
  const t = qt.processes.find((r) => r.id === n);
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
function wp(n) {
  const e = qt.processes.find((t) => t.id === n);
  if (!(!e || !e.pluginGroups))
    for (const t of e.pluginGroups)
      t.plugins && (t.plugins.length = 0);
}
function Tp(n, e, t) {
  const r = qt.processes.find((s) => s.id === n);
  if (!r) return;
  const i = r.pluginGroups ?? (r.pluginGroups = []);
  if (i.find((s) => s.title === e)) return;
  const a = { title: e, plugins: [] };
  if (t === void 0)
    i.push(a);
  else {
    const s = Math.max(0, t - 1);
    i.splice(s, 0, a);
  }
}
function Dp(n, e) {
  const t = qt.processes.find((r) => r.id === n);
  t && t.pluginGroups.splice(0, t.pluginGroups.length, ...e);
}
function Lp(n) {
  sl.plugins = [...n];
}
function Rp(n) {
  return (n.pluginGroups ?? []).flatMap((e) => e.plugins ?? []);
}
function so(n, e = null) {
  jr.process = n ?? null, jr.lastSelectedPluginId = e;
}
function Op(n) {
  jr.lastSelectedPluginId = n ?? null;
}
function Mp(n, e, t) {
  o(e) && t.handleStart(o(e));
}
var Fp = /* @__PURE__ */ X('<div class="process-banner svelte-au6aaq"><div class="process-banner__info svelte-au6aaq"><!> <span class="svelte-au6aaq"> </span></div> <button type="button" class="banner-continue svelte-au6aaq">CONTINUE</button></div>'), Pp = (n, e, t) => e.handleView(t()), kp = (n, e, t) => e.handleStart(t()), Gp = /* @__PURE__ */ X('<button type="button" class="icon svelte-au6aaq" aria-label="Start process"><!></button>'), Np = (n, e, t) => e.handleStart(t()), Zp = /* @__PURE__ */ X('<button type="button" class="icon svelte-au6aaq" aria-label="Start process"><!></button>'), Hp = /* @__PURE__ */ X('<button type="button" class="icon svelte-au6aaq" aria-label="View process"><!></button> <!>', 1), Bp = /* @__PURE__ */ X('<div class="processes svelte-au6aaq"><!> <div class="process-toolbar svelte-au6aaq"><!> <button type="button" class="primary svelte-au6aaq">ADD NEW PROCESS</button></div> <!></div>');
function Wp(n, e) {
  Ae(e, !0);
  let t = /* @__PURE__ */ le("");
  const r = /* @__PURE__ */ ne(() => qt.processes ?? []), i = /* @__PURE__ */ ne(() => o(r).map((C) => ({ ...C, displayName: C.name || C.id }))), a = /* @__PURE__ */ ne(() => o(t).trim().toLowerCase()), s = /* @__PURE__ */ ne(() => o(a) ? o(i).filter((C) => C.displayName.toLowerCase().includes(o(a))) : o(i)), u = [
    { key: "displayName", header: "Name" },
    { key: "description", header: "Description" }
  ], l = /* @__PURE__ */ ne(() => jr.process), c = /* @__PURE__ */ ne(() => {
    var C, b;
    return ((C = o(l)) == null ? void 0 : C.name) || ((b = o(l)) == null ? void 0 : b.id) || "";
  }), d = /* @__PURE__ */ ne(() => jr.lastSelectedPluginId);
  function v(C, b) {
    var T;
    if (!b) return "";
    for (const R of (C == null ? void 0 : C.pluginGroups) ?? []) {
      const D = (T = R.plugins) == null ? void 0 : T.find((L) => L.id === b);
      if (D) return D.name || D.id;
    }
    return "";
  }
  const f = /* @__PURE__ */ ne(() => v(o(l), o(d)));
  function h() {
    const C = `A process “${o(c)}” has already been started`, b = [
      e.docName ? ` for the ${e.docName}` : "",
      o(f) ? ` at “${o(f)}”` : ""
    ];
    return `${C}${b.join("")}. Would you like to continue where you left off?`;
  }
  const g = /* @__PURE__ */ ne(h);
  function p(C) {
    return !!o(l) && (C == null ? void 0 : C.id) === o(l).id;
  }
  var _ = Bp(), y = N(_);
  {
    var x = (C) => {
      var b = Fp(), T = N(b), R = N(T);
      Xh(R, {});
      var D = q(R, 2), L = N(D), O = q(T, 2);
      O.__click = [Mp, l, e], de(() => Oe(L, o(g))), E(C, b);
    };
    $(y, (C) => {
      o(l) && C(x);
    });
  }
  var S = q(y, 2), A = N(S);
  mr(A, {
    variant: "outlined",
    label: "Search Processes",
    get value() {
      return o(t);
    },
    set value(C) {
      W(t, C, !0);
    }
  });
  var w = q(A, 2);
  w.__click = function(...C) {
    var b;
    (b = e.handleAddNew) == null || b.apply(this, C);
  };
  var I = q(S, 2);
  Gg(I, {
    get items() {
      return o(s);
    },
    get columns() {
      return u;
    },
    get loading() {
      return Oo.loading;
    },
    get errorMsg() {
      return Mo.error;
    },
    emptyText: "No processes available.",
    hasActions: !0,
    headerBg: "#DAE3E6",
    rowBg: "#ffffff",
    actions: (b, T) => {
      let R = () => T == null ? void 0 : T().item;
      var D = Hp(), L = K(D);
      L.__click = [Pp, e, R];
      var O = N(L);
      gu(O, { svgStyles: "fill: #002B37; width: 100%; height: 100%;" });
      var re = q(L, 2);
      {
        var U = (H) => {
          var J = Gp();
          J.__click = [kp, e, R];
          var ue = N(J);
          Ul(ue, { svgStyles: "fill: #002B37; width: 100%; height: 100%;" }), E(H, J);
        }, Z = (H) => {
          var J = Zp();
          J.__click = [Np, e, R];
          var ue = N(J);
          Ul(ue, { svgStyles: "fill: #002B37; width: 100%; height: 100%;" }), E(H, J);
        };
        $(re, (H) => {
          p(R()) ? H(U) : H(Z, !1);
        });
      }
      E(b, D);
    },
    $$slots: { actions: !0 }
  }), E(n, _), Ee();
}
pt(["click"]);
var Up = /* @__PURE__ */ X("<div><!></div>");
function ol(n, e) {
  const t = m(e, "active", 3, !1), r = m(e, "visited", 3, !1);
  var i = Up(), a = N(i);
  {
    var s = (l) => {
      var c = oe(), d = K(c);
      {
        var v = (h) => {
          mu(h);
        }, f = (h) => {
          var g = oe(), p = K(g);
          {
            var _ = (x) => {
              Wh(x);
            }, y = (x) => {
              var S = oe(), A = K(S);
              {
                var w = (I) => {
                  jh(I, {});
                };
                $(
                  A,
                  (I) => {
                    e.status === "warning" && I(w);
                  },
                  !0
                );
              }
              E(x, S);
            };
            $(
              p,
              (x) => {
                e.status === "error" ? x(_) : x(y, !1);
              },
              !0
            );
          }
          E(h, g);
        };
        $(d, (h) => {
          e.status === "check" ? h(v) : h(f, !1);
        });
      }
      E(l, c);
    }, u = (l) => {
      var c = ct();
      de(() => Oe(c, e.number)), E(l, c);
    };
    $(a, (l) => {
      r() && e.status ? l(s) : l(u, !1);
    });
  }
  de(() => _r(i, 1, `step-circle ${t() ? "active" : ""} ${r() ? "visited" : ""}`, "svelte-198pmxh")), E(n, i);
}
var jp = (n, e, t) => e.onSelect(o(t).id), Vp = /* @__PURE__ */ X('<button class="step-button svelte-1ar0udo"><!></button>'), zp = /* @__PURE__ */ X('<div class="step-line svelte-1ar0udo" aria-hidden="true"></div>'), Xp = /* @__PURE__ */ X('<div class="step svelte-1ar0udo"><!> <p> </p></div> <!>', 1), Yp = /* @__PURE__ */ X('<div class="steps svelte-1ar0udo"></div>');
function qp(n, e) {
  Ae(e, !0);
  let t = m(e, "items", 19, () => []), r = m(e, "visited", 19, () => []), i = m(e, "currentId", 3, null), a = m(e, "status", 19, () => ({})), s = m(e, "tooltipMap", 19, () => ({}));
  var u = Yp();
  cn(u, 21, t, br, (l, c, d) => {
    var v = Xp(), f = K(v), h = N(f);
    {
      let x = /* @__PURE__ */ ne(() => s()[o(c).id] ?? "");
      Iu(h, {
        get content() {
          return o(x);
        },
        side: "bottom",
        children: (S, A) => {
          var w = Vp();
          w.__click = [jp, e, c];
          var I = N(w);
          {
            let C = /* @__PURE__ */ ne(() => o(c).id === i()), b = /* @__PURE__ */ ne(() => r().includes(o(c).id) && o(c).id !== i());
            ol(I, {
              number: d + 1,
              get active() {
                return o(C);
              },
              get visited() {
                return o(b);
              },
              get status() {
                return a()[o(c).id];
              }
            });
          }
          de(() => mt(w, "aria-current", o(c).id === i() ? "step" : void 0)), E(S, w);
        },
        $$slots: { default: !0 }
      });
    }
    var g = q(h, 2), p = N(g), _ = q(f, 2);
    {
      var y = (x) => {
        var S = zp();
        E(x, S);
      };
      $(_, (x) => {
        d < t().length - 1 && x(y);
      });
    }
    de(() => Oe(p, o(c).label)), E(l, v);
  }), E(n, u), Ee();
}
pt(["click"]);
function Kp(n, e) {
  const t = [
    { id: "process-definition", label: "Process Definition" },
    {
      id: "validator-configuration",
      label: "Validator Configuration"
    }
  ];
  let r = m(e, "currentId", 3, null), i = m(e, "visited", 19, () => []);
  qp(n, {
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
var Qp = /* @__PURE__ */ X('<div class="add-group-form svelte-1ceeuzb"><!> <!></div>');
function Jp(n, e) {
  Ae(e, !0);
  let t = m(e, "open", 15, !1), r = /* @__PURE__ */ le(""), i = /* @__PURE__ */ le(Ce((e.groups + 1).toString()));
  const a = () => Hr("cancel"), s = () => Hr("confirm", { name: o(r), position: Number(o(i)) });
  let u = /* @__PURE__ */ ne(() => [
    ...Array.from({ length: e.groups + 1 }, (c, d) => ({ value: (d + 1).toString(), label: (d + 1).toString() }))
    // iterate from 1..groups+1
  ]), l = /* @__PURE__ */ ne(() => o(r) && o(i));
  {
    const c = (v) => {
      var f = Qp(), h = N(f);
      ou(h, {
        label: "Name",
        placeholder: "Group 1",
        variant: "outlined",
        required: !0,
        get value() {
          return o(r);
        },
        set value(p) {
          W(r, p, !0);
        }
      });
      var g = q(h, 2);
      gh(g, {
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
          W(i, p, !0);
        }
      }), E(v, f);
    };
    let d = /* @__PURE__ */ ne(() => !o(l));
    Ko(n, {
      title: "Add Groups",
      confirmActionText: "Add",
      maxWidth: "600px",
      onConfirm: s,
      onCancel: a,
      onClose: a,
      get confirmDisabled() {
        return o(d);
      },
      get open() {
        return t();
      },
      set open(v) {
        t(v);
      },
      content: c,
      $$slots: { content: !0 }
    });
  }
  Ee();
}
var $p = /* @__PURE__ */ X('<div class="group-list-item svelte-1xbvuu5"><div><!></div> <div><!></div> <!> <!></div>'), eI = /* @__PURE__ */ X('<div class="edit-groups-form"><h3>Drag & Drop to change Order</h3> <div></div></div>');
function tI(n, e) {
  Ae(e, !0);
  const t = 100;
  let r = m(e, "open", 15, !1), i = /* @__PURE__ */ le(Ce([...e.groups]));
  const a = () => Hr("cancel"), s = () => {
    Hr("confirm", { groups: o(i).map((v) => ({ ...v })) });
  }, u = (v) => () => {
    W(i, o(i).filter((f) => f.id !== v), !0);
  }, l = (v) => {
    W(i, v.detail.items, !0);
  };
  function c(v, f, h) {
    const g = v.querySelector(".step-circle");
    g && (g.innerHTML = h + 1);
  }
  let d = /* @__PURE__ */ ne(() => o(i).every((v) => v.title.trim().length > 0));
  {
    const v = (h) => {
      var g = eI(), p = q(N(g), 2);
      cn(p, 31, () => o(i), (_) => _.id, (_, y, x) => {
        var S = $p(), A = N(S), w = N(A);
        {
          let R = /* @__PURE__ */ ne(() => o(x) + 1);
          ol(w, {
            get number() {
              return o(R);
            }
          });
        }
        var I = q(A, 2), C = N(I);
        ks(C, {}), De(I, (R) => On == null ? void 0 : On(R));
        var b = q(I, 2);
        ou(b, {
          label: "Name",
          variant: "outlined",
          required: !0,
          get value() {
            return o(y).title;
          },
          set value(R) {
            o(y).title = R;
          }
        });
        var T = q(b, 2);
        {
          let R = /* @__PURE__ */ ne(() => u(o(y).id));
          bu(T, {
            type: "delete",
            tooltip: "Delete",
            fillColor: "#FF203A",
            get onClick() {
              return o(R);
            }
          });
        }
        de(() => mt(S, "data-id", o(y).id)), Ms(S, () => js, () => ({ duration: t })), E(_, S);
      }), De(p, (_, y) => Rn == null ? void 0 : Rn(_, y), () => ({
        items: o(i),
        flipDurationMs: t,
        dropTargetStyle: {},
        transformDraggedElement: c,
        type: "order-ew-groups-zone"
      })), Pt("consider", p, l), Pt("finalize", p, l), E(h, g);
    };
    let f = /* @__PURE__ */ ne(() => !o(d));
    Ko(n, {
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
      set open(h) {
        r(h);
      },
      content: v,
      $$slots: { content: !0 }
    });
  }
  Ee();
}
async function nI(n, e, t) {
  const r = await ea(Jp, { groups: e().length });
  r.type === "confirm" && t()(r.data.name, r.data.position);
}
async function rI(n, e, t) {
  const r = e().map((s, u) => ({ id: u.toString(), title: s.title })), i = await ea(tI, { groups: r });
  if (i.type !== "confirm") return;
  const a = i.data.groups.map((s) => {
    const u = parseInt(s.id, 10);
    return { ...e()[u], title: s.title };
  });
  t()(a);
}
var iI = /* @__PURE__ */ X('<div class="plugin-list__header-action svelte-1a2zky1"><!></div>'), aI = /* @__PURE__ */ X('<header class="plugin-list__header svelte-1a2zky1"><p class="plugin-list__title svelte-1a2zky1"> </p> <!></header>'), sI = /* @__PURE__ */ X('<div aria-label="drag-handle"><!></div>'), oI = /* @__PURE__ */ X('<div class="plugin-list__item-action svelte-1a2zky1"><!></div>'), lI = /* @__PURE__ */ X('<div class="plugin-list__item-row svelte-1a2zky1"><div class="plugin-list__item-row__left svelte-1a2zky1"><!> <span class="plugin-list__item-name svelte-1a2zky1"> </span></div> <!></div>'), dI = /* @__PURE__ */ X("<div><!></div>"), uI = /* @__PURE__ */ X('<div style="display: flex; justify-content: center; margin-top: 0.4rem;"><!></div>'), cI = /* @__PURE__ */ X('<section class="plugin-list__group svelte-1a2zky1"><header class="plugin-list__group-header svelte-1a2zky1"><span class="plugin-list__group-index plugin-list__group-plugins__indicator svelte-1a2zky1"><!></span> <span class="plugin-list__group-title svelte-1a2zky1"> </span></header> <div class="plugin-list__group-plugins-section svelte-1a2zky1"><div></div></div> <!></section>'), fI = /* @__PURE__ */ X('<div class="plugin-list__body svelte-1a2zky1"></div>'), vI = /* @__PURE__ */ X('<div class="plugin-list__footer svelte-1a2zky1"><button type="button" class="plugin-list__footer-button plugin-list__footer-button--edit svelte-1a2zky1"><!> <span>Edit groups</span></button> <button type="button" class="plugin-list__footer-button plugin-list__footer-button--add svelte-1a2zky1"><!> <span>Add group</span></button></div>');
function ll(n, e) {
  Ae(e, !0);
  const t = (v) => {
    var f = aI(), h = N(f), g = N(h), p = q(h, 2);
    {
      var _ = (y) => {
        var x = iI(), S = N(x);
        _e(S, () => e.headerAction), E(y, x);
      };
      $(p, (y) => {
        e.headerAction && y(_);
      });
    }
    de(() => Oe(g, s())), E(v, f);
  }, r = (v) => {
    var f = fI();
    cn(f, 21, a, br, (h, g, p) => {
      var _ = cI(), y = N(_), x = N(y), S = N(x);
      ol(S, { number: p + 1 });
      var A = q(x, 2), w = N(A), I = q(y, 2), C = N(I);
      let b;
      cn(C, 31, () => o(g).plugins, (D) => D.id, (D, L, O) => {
        var re = dI(), U = N(re);
        il(U, {
          variant: "secondary",
          children: (Z, H) => {
            var J = lI(), ue = N(J), k = N(ue);
            {
              var ee = (V) => {
                var M = sI(), Q = N(M);
                ks(Q, {}), De(M, (Y) => On == null ? void 0 : On(Y)), E(V, M);
              };
              $(k, (V) => {
                mn.isEditing && V(ee);
              });
            }
            var ie = q(k, 2), be = N(ie), fe = q(ue, 2);
            {
              var j = (V) => {
                var M = oI(), Q = N(M);
                _e(Q, () => e.itemAction, () => ({
                  group: o(g),
                  plugin: o(L),
                  groupIndex: p,
                  pluginIndex: o(O)
                })), E(V, M);
              };
              $(fe, (V) => {
                e.itemAction && V(j);
              });
            }
            de(() => Oe(be, o(L).name)), E(Z, J);
          },
          $$slots: { default: !0 }
        }), de(() => mt(re, "data-id", o(L).id)), Ms(re, () => js, () => ({ duration: 100 })), E(D, re);
      }), De(C, (D, L) => Rn == null ? void 0 : Rn(D, L), () => ({
        items: o(g).plugins,
        flipDurationMs: 100,
        dropTargetStyle: {}
      }));
      var T = q(I, 2);
      {
        var R = (D) => {
          var L = uI(), O = N(L);
          ug(O, { svgStyles: "fill: #6B9197;" }), E(D, L);
        };
        $(T, (D) => {
          p < a().length - 1 && D(R);
        });
      }
      de(
        (D) => {
          Oe(w, o(g).title), b = _r(C, 1, "plugin-list__group-plugins svelte-1a2zky1", null, b, D);
        },
        [
          () => ({
            "plugin_list__group-plugins--dashed": mn.isEditing
          })
        ]
      ), Pt("consider", C, (D) => c(D, o(g))), Pt("finalize", C, (D) => d(D, o(g))), E(h, _);
    }), E(v, f);
  }, i = (v) => {
    var f = oe(), h = K(f);
    {
      var g = (p) => {
        var _ = vI(), y = N(_);
        y.__click = [rI, a, l];
        var x = N(y);
        vu(x, {
          svgStyles: "fill: var(--primary-base);",
          "aria-hidden": "true"
        });
        var S = q(y, 2);
        S.__click = [nI, a, u];
        var A = N(S);
        Qo(A, {
          svgStyles: "fill: var(--primary-base);",
          "aria-hidden": "true"
        }), E(p, _);
      };
      $(h, (p) => {
        mn.isEditing && p(g);
      });
    }
    E(v, f);
  };
  let a = m(e, "pluginGroups", 19, () => []), s = m(e, "title", 3, "Process"), u = m(e, "onAddGroup", 3, () => {
  }), l = m(e, "onUpdateGroups", 3, (v) => {
  });
  function c(v, f) {
    f.plugins = v.detail.items;
  }
  function d(v, f) {
    v.detail.info.trigger === St.DROPPED_OUTSIDE_OF_ANY ? f.plugins = v.detail.items.filter((h) => v.detail.info.id !== h.id) : f.plugins = v.detail.items, l()(a());
  }
  al(n, {
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
pt(["click"]);
function hI(n, e) {
  const t = (i) => {
    pr(i, {
      variant: "raised",
      style: "--mdc-theme-primary: var(--on-brand); --mdc-theme-on-primary: var(--brand)",
      "aria-label": "Edit process",
      get onclick() {
        return e.requestEdit;
      },
      children: (a, s) => {
        var u = ct("EDIT");
        E(a, u);
      },
      $$slots: { default: !0 }
    });
  };
  let r = m(e, "pluginGroups", 19, () => []);
  ll(n, {
    get pluginGroups() {
      return r();
    },
    get headerAction() {
      return t;
    }
  });
}
function gI() {
  var e;
  const n = document.querySelector("open-scd");
  return ((e = n == null ? void 0 : n.shadowRoot) == null ? void 0 : e.querySelector("compas-layout")) ?? null;
}
function mI(n) {
  var e;
  (e = gI()) == null || e.dispatchEvent(
    new CustomEvent("toggle-editor-tabs", {
      detail: { visible: n },
      bubbles: !0,
      composed: !0
    })
  );
}
const oo = /* @__PURE__ */ new Map();
function lo(n) {
  return !!customElements.get(n);
}
function pI(n) {
  if (!n.includes("-"))
    throw new Error(`Invalid custom element name "${n}". Custom element names must contain a dash.`);
}
async function Nu(n) {
  if (n.type !== "external") return;
  const e = n.id;
  if (pI(e), lo(e)) return;
  const t = oo.get(e);
  if (t) return t;
  const r = (async () => {
    const i = await import(
      /* @vite-ignore */
      n.src
    ), a = (i == null ? void 0 : i.default) ?? (i == null ? void 0 : i.element);
    if (!a)
      throw new Error(`Plugin "${n.id}" did not export a custom element constructor.`);
    const s = a, u = class extends s {
    };
    if (!lo(e))
      try {
        customElements.define(e, u);
      } catch (l) {
        if (!lo(e)) throw l;
      }
    await customElements.whenDefined(e);
  })().finally(() => {
    oo.delete(e);
  });
  return oo.set(e, r), r;
}
async function II(n) {
  await Promise.all(
    n.filter((e) => e.type === "external").map(async (e) => {
      try {
        await Nu(e);
      } catch (t) {
        console.error("Failed to preload plugin", e.id, t);
      }
    })
  );
}
const Wr = jn(!0);
Wr.subscribe((n) => {
  mI(n);
});
var bI = (n, e, t) => e(t().id), _I = /* @__PURE__ */ X('<button type="button" class="plugin-list__removeBtn svelte-gipzw9"><!></button>');
function yI(n, e) {
  Ae(e, !0);
  const t = (d) => {
    var v = oe(), f = K(v);
    {
      var h = (g) => {
        pr(g, {
          variant: "raised",
          style: "background-color: #FF203A",
          "aria-label": "Remove all plugins",
          onclick: a,
          children: (p, _) => {
            var y = ct("REMOVE ALL");
            E(p, y);
          },
          $$slots: { default: !0 }
        });
      };
      $(f, (g) => {
        o(c) && g(h);
      });
    }
    E(d, v);
  }, r = (d, v) => {
    let f = () => v == null ? void 0 : v().plugin;
    var h = _I();
    h.__click = [bI, s, f];
    var g = N(h);
    fu(g, { svgStyles: "fill: #FF203A" }), de(() => mt(h, "aria-label", `Remove ${f().name}`)), E(d, h);
  };
  let i = m(e, "pluginGroups", 19, () => []);
  async function a() {
    (await ea(qo, {
      title: "Remove all entries?",
      message: "This action cannot be undone. You will need to manually search for and re-add each item, and rearrange them again.",
      confirmActionText: "Remove All",
      cancelActionText: "Cancel",
      confirmActionColor: "danger"
    })).type === "confirm" && wp(ut.process.id);
  }
  function s(d) {
    xp(ut.process.id, d);
  }
  function u(d, v) {
    Tp(ut.process.id, d, v);
  }
  function l(d) {
    Dp(ut.process.id, d);
  }
  let c = /* @__PURE__ */ ne(() => i().flatMap((d) => d.plugins).length > 0);
  ll(n, {
    get pluginGroups() {
      return i();
    },
    get headerAction() {
      return t;
    },
    get itemAction() {
      return r;
    },
    onAddGroup: (d, v) => u(d, v),
    onUpdateGroups: (d) => l(d)
  }), Ee();
}
pt(["click"]);
function Zu(n) {
  var r;
  const e = n.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "").slice(0, 32), t = ((r = crypto.randomUUID) == null ? void 0 : r.call(crypto).split("-")[0]) ?? Math.random().toString(36).slice(2, 10);
  return `ext-${e || "plugin"}-${t}`;
}
var CI = /* @__PURE__ */ X('<div class="card-header svelte-1fcjrhj"><p class="header-info svelte-1fcjrhj">Add External Plugins</p> <div class="search-input svelte-1fcjrhj"><!></div></div>'), AI = (n, e, t) => e(o(t), ut.process.id), EI = /* @__PURE__ */ X('<div class="card-item-content svelte-1fcjrhj"><div class="card-item-content__left svelte-1fcjrhj"><div aria-label="drag-handle"><!></div> <p class="plugin-name svelte-1fcjrhj"> </p></div> <button class="plugin-add-btn svelte-1fcjrhj"><!></button></div>'), SI = /* @__PURE__ */ X("<div><!></div>"), xI = /* @__PURE__ */ X('<div class="card-parent-content svelte-1fcjrhj"></div>');
function wI(n, e) {
  Ae(e, !0);
  const t = (c) => {
    var d = CI(), v = q(N(d), 2), f = N(v);
    mr(f, {
      variant: "outlined",
      label: "Search Plugins",
      get value() {
        return a();
      },
      set value(h) {
        a(h);
      }
    }), E(c, d);
  }, r = (c) => {
    var d = xI();
    cn(d, 29, i, (v) => v.id, (v, f) => {
      var h = SI(), g = N(h);
      il(g, {
        variant: "secondary",
        children: (p, _) => {
          var y = EI(), x = N(y), S = N(x), A = N(S);
          ks(A, {}), De(S, (T) => On == null ? void 0 : On(T));
          var w = q(S, 2), I = N(w), C = q(x, 2);
          C.__click = [AI, s, f];
          var b = N(C);
          Qo(b, { svgStyles: "fill: var(--brand);" }), de(() => Oe(I, o(f).name)), E(p, y);
        },
        $$slots: { default: !0 }
      }), de(() => mt(h, "data-id", o(f).id)), Ms(h, () => js, () => ({ duration: 100 })), E(v, h);
    }), De(d, (v, f) => Rn == null ? void 0 : Rn(v, f), () => ({
      items: i(),
      flipDurationMs: 100,
      dropTargetStyle: {},
      dropFromOthersDisabled: !0
    })), Pt("consider", d, l), Pt("finalize", d, u), E(c, d);
  };
  let i = m(e, "plugins", 23, () => []), a = m(e, "searchTerm", 15, "");
  function s(c, d) {
    Sp(d, c);
  }
  const u = (c) => {
    i(c.detail.items);
  }, l = (c) => {
    const { detail: d } = c, { trigger: v, id: f } = d.info;
    if (v === St.DRAG_STARTED) {
      const h = i().findIndex((p) => p.id === f), g = `${f}_copy`;
      c.detail.items = c.detail.items.filter((p) => !p[oa]), c.detail.items.splice(h, 0, { ...i()[h], id: g }), i(c.detail.items);
    } else
      i([...i()]);
  };
  al(n, {
    backgroundColor: "#DAE3E6",
    get header() {
      return t;
    },
    get content() {
      return r;
    }
  }), Ee();
}
pt(["click"]);
var TI = /* @__PURE__ */ X('<div class="process-definition-view svelte-ws8xx1"><!> <div class="drag-and-drop-info svelte-ws8xx1"><!> <p class="svelte-ws8xx1">SELECT OR DRAG & DROP PLUGINS</p></div> <!></div>');
function DI(n, e) {
  Ae(e, !0);
  let t = m(e, "pluginGroups", 19, () => []), r = /* @__PURE__ */ le(""), i = /* @__PURE__ */ ne(() => {
    const v = sl.plugins.map((h) => ({
      id: Zu(h.name),
      name: h.name,
      src: h.src,
      type: "internal"
    })), f = o(r).toLowerCase().trim();
    return f ? v.filter((h) => h.name.toLowerCase().includes(f)) : v;
  });
  var a = TI(), s = N(a);
  yI(s, {
    get pluginGroups() {
      return t();
    }
  });
  var u = q(s, 2), l = N(u);
  pu(l, { svgStyles: "fill: #6B9197" });
  var c = q(u, 2);
  wI(c, {
    get plugins() {
      return o(i);
    },
    get searchTerm() {
      return o(r);
    },
    set searchTerm(d) {
      W(r, d, !0);
    }
  }), E(n, a), Ee();
}
const LI = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmNvbW0tc3VibmV0LTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJuZXQgQWRkcmVzcyBWYWxpZGl0eTwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5WYWxpZGF0ZXMgSVAgc3VibmV0IGFkZHJlc3NlcyBhbmQgQ0lEUi9uZXRtYXNrIGFyZSBwcm9wZXJseSBmb3JtYXR0ZWQgYW5kIG1lZXQgcHJvamVjdCBjb25zdHJhaW50cy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1zdWJuZXQtYWRkcmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5nc2UtY29uZmlnLTAwMjwvaWQ+CiAgICA8bmFtZT5HU0UgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIEdTRSBjb250cm9sIGJsb2NrcyByZWZlcmVuY2UgdmFsaWQgZGF0YXNldHMgYW5kIGhhdmUgY29ycmVjdCBNQUMvVkxBTi9uZXR3b3JrIHBhcmFtZXRlcnMuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stZ3NlLWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5zbXYtY29uZmlnLTAwMzwvaWQ+CiAgICA8bmFtZT5TTVYgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5DaGVja3MgU01WIGNvbnRyb2wgYmxvY2tzIGZvciB2YWxpZCBkYXRhc2V0cywgc2FtcGxlIHJhdGVzLCBhbmQgY29tcGxpYW50IG5ldHdvcmsgc2V0dGluZ3MuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stc212LWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4KCg==", RI = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmNvbW0tc3VibmV0LTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJuZXQgQWRkcmVzcyBWYWxpZGl0eTwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5WYWxpZGF0ZXMgSVAgc3VibmV0IGFkZHJlc3NlcyBhbmQgQ0lEUi9uZXRtYXNrIGFyZSBwcm9wZXJseSBmb3JtYXR0ZWQgYW5kIG1lZXQgcHJvamVjdCBjb25zdHJhaW50cy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1zdWJuZXQtYWRkcmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5nc2UtY29uZmlnLTAwMjwvaWQ+CiAgICA8bmFtZT5HU0UgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIEdTRSBjb250cm9sIGJsb2NrcyByZWZlcmVuY2UgdmFsaWQgZGF0YXNldHMgYW5kIGhhdmUgY29ycmVjdCBNQUMvVkxBTi9uZXR3b3JrIHBhcmFtZXRlcnMuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stZ3NlLWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5zbXYtY29uZmlnLTAwMzwvaWQ+CiAgICA8bmFtZT5TTVYgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5DaGVja3MgU01WIGNvbnRyb2wgYmxvY2tzIGZvciB2YWxpZCBkYXRhc2V0cywgc2FtcGxlIHJhdGVzLCBhbmQgY29tcGxpYW50IG5ldHdvcmsgc2V0dGluZ3MuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stc212LWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4KCg==", OI = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmNvbW0tc3VibmV0LTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJuZXQgQWRkcmVzcyBWYWxpZGl0eTwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5WYWxpZGF0ZXMgSVAgc3VibmV0IGFkZHJlc3NlcyBhbmQgQ0lEUi9uZXRtYXNrIGFyZSBwcm9wZXJseSBmb3JtYXR0ZWQgYW5kIG1lZXQgcHJvamVjdCBjb25zdHJhaW50cy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1zdWJuZXQtYWRkcmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5nc2UtY29uZmlnLTAwMjwvaWQ+CiAgICA8bmFtZT5HU0UgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIEdTRSBjb250cm9sIGJsb2NrcyByZWZlcmVuY2UgdmFsaWQgZGF0YXNldHMgYW5kIGhhdmUgY29ycmVjdCBNQUMvVkxBTi9uZXR3b3JrIHBhcmFtZXRlcnMuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stZ3NlLWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5zbXYtY29uZmlnLTAwMzwvaWQ+CiAgICA8bmFtZT5TTVYgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5DaGVja3MgU01WIGNvbnRyb2wgYmxvY2tzIGZvciB2YWxpZCBkYXRhc2V0cywgc2FtcGxlIHJhdGVzLCBhbmQgY29tcGxpYW50IG5ldHdvcmsgc2V0dGluZ3MuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stc212LWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4KCg==", MI = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmNvbW0tc3VibmV0LTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJuZXQgQWRkcmVzcyBWYWxpZGl0eTwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5WYWxpZGF0ZXMgSVAgc3VibmV0IGFkZHJlc3NlcyBhbmQgQ0lEUi9uZXRtYXNrIGFyZSBwcm9wZXJseSBmb3JtYXR0ZWQgYW5kIG1lZXQgcHJvamVjdCBjb25zdHJhaW50cy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1zdWJuZXQtYWRkcmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5nc2UtY29uZmlnLTAwMjwvaWQ+CiAgICA8bmFtZT5HU0UgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIEdTRSBjb250cm9sIGJsb2NrcyByZWZlcmVuY2UgdmFsaWQgZGF0YXNldHMgYW5kIGhhdmUgY29ycmVjdCBNQUMvVkxBTi9uZXR3b3JrIHBhcmFtZXRlcnMuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stZ3NlLWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5zbXYtY29uZmlnLTAwMzwvaWQ+CiAgICA8bmFtZT5TTVYgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5DaGVja3MgU01WIGNvbnRyb2wgYmxvY2tzIGZvciB2YWxpZCBkYXRhc2V0cywgc2FtcGxlIHJhdGVzLCBhbmQgY29tcGxpYW50IG5ldHdvcmsgc2V0dGluZ3MuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stc212LWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4KCg==", FI = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmNvbW0tc3VibmV0LTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJuZXQgQWRkcmVzcyBWYWxpZGl0eTwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5WYWxpZGF0ZXMgSVAgc3VibmV0IGFkZHJlc3NlcyBhbmQgQ0lEUi9uZXRtYXNrIGFyZSBwcm9wZXJseSBmb3JtYXR0ZWQgYW5kIG1lZXQgcHJvamVjdCBjb25zdHJhaW50cy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1zdWJuZXQtYWRkcmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5nc2UtY29uZmlnLTAwMjwvaWQ+CiAgICA8bmFtZT5HU0UgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIEdTRSBjb250cm9sIGJsb2NrcyByZWZlcmVuY2UgdmFsaWQgZGF0YXNldHMgYW5kIGhhdmUgY29ycmVjdCBNQUMvVkxBTi9uZXR3b3JrIHBhcmFtZXRlcnMuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stZ3NlLWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5zbXYtY29uZmlnLTAwMzwvaWQ+CiAgICA8bmFtZT5TTVYgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5DaGVja3MgU01WIGNvbnRyb2wgYmxvY2tzIGZvciB2YWxpZCBkYXRhc2V0cywgc2FtcGxlIHJhdGVzLCBhbmQgY29tcGxpYW50IG5ldHdvcmsgc2V0dGluZ3MuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stc212LWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4KCg==", PI = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmNvbW0tc3VibmV0LTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJuZXQgQWRkcmVzcyBWYWxpZGl0eTwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5WYWxpZGF0ZXMgSVAgc3VibmV0IGFkZHJlc3NlcyBhbmQgQ0lEUi9uZXRtYXNrIGFyZSBwcm9wZXJseSBmb3JtYXR0ZWQgYW5kIG1lZXQgcHJvamVjdCBjb25zdHJhaW50cy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1zdWJuZXQtYWRkcmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5nc2UtY29uZmlnLTAwMjwvaWQ+CiAgICA8bmFtZT5HU0UgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIEdTRSBjb250cm9sIGJsb2NrcyByZWZlcmVuY2UgdmFsaWQgZGF0YXNldHMgYW5kIGhhdmUgY29ycmVjdCBNQUMvVkxBTi9uZXR3b3JrIHBhcmFtZXRlcnMuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stZ3NlLWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5zbXYtY29uZmlnLTAwMzwvaWQ+CiAgICA8bmFtZT5TTVYgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5DaGVja3MgU01WIGNvbnRyb2wgYmxvY2tzIGZvciB2YWxpZCBkYXRhc2V0cywgc2FtcGxlIHJhdGVzLCBhbmQgY29tcGxpYW50IG5ldHdvcmsgc2V0dGluZ3MuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stc212LWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4KCg==", kI = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmNvbW0tc3VibmV0LTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJuZXQgQWRkcmVzcyBWYWxpZGl0eTwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5WYWxpZGF0ZXMgSVAgc3VibmV0IGFkZHJlc3NlcyBhbmQgQ0lEUi9uZXRtYXNrIGFyZSBwcm9wZXJseSBmb3JtYXR0ZWQgYW5kIG1lZXQgcHJvamVjdCBjb25zdHJhaW50cy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1zdWJuZXQtYWRkcmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5nc2UtY29uZmlnLTAwMjwvaWQ+CiAgICA8bmFtZT5HU0UgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIEdTRSBjb250cm9sIGJsb2NrcyByZWZlcmVuY2UgdmFsaWQgZGF0YXNldHMgYW5kIGhhdmUgY29ycmVjdCBNQUMvVkxBTi9uZXR3b3JrIHBhcmFtZXRlcnMuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stZ3NlLWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5zbXYtY29uZmlnLTAwMzwvaWQ+CiAgICA8bmFtZT5TTVYgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5DaGVja3MgU01WIGNvbnRyb2wgYmxvY2tzIGZvciB2YWxpZCBkYXRhc2V0cywgc2FtcGxlIHJhdGVzLCBhbmQgY29tcGxpYW50IG5ldHdvcmsgc2V0dGluZ3MuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stc212LWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4KCg==", GI = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmNvbW0tc3VibmV0LTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJuZXQgQWRkcmVzcyBWYWxpZGl0eTwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5WYWxpZGF0ZXMgSVAgc3VibmV0IGFkZHJlc3NlcyBhbmQgQ0lEUi9uZXRtYXNrIGFyZSBwcm9wZXJseSBmb3JtYXR0ZWQgYW5kIG1lZXQgcHJvamVjdCBjb25zdHJhaW50cy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1zdWJuZXQtYWRkcmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5nc2UtY29uZmlnLTAwMjwvaWQ+CiAgICA8bmFtZT5HU0UgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIEdTRSBjb250cm9sIGJsb2NrcyByZWZlcmVuY2UgdmFsaWQgZGF0YXNldHMgYW5kIGhhdmUgY29ycmVjdCBNQUMvVkxBTi9uZXR3b3JrIHBhcmFtZXRlcnMuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stZ3NlLWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5zbXYtY29uZmlnLTAwMzwvaWQ+CiAgICA8bmFtZT5TTVYgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5DaGVja3MgU01WIGNvbnRyb2wgYmxvY2tzIGZvciB2YWxpZCBkYXRhc2V0cywgc2FtcGxlIHJhdGVzLCBhbmQgY29tcGxpYW50IG5ldHdvcmsgc2V0dGluZ3MuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stc212LWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4K", NI = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmNvbW0tc3VibmV0LTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJuZXQgQWRkcmVzcyBWYWxpZGl0eTwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5WYWxpZGF0ZXMgSVAgc3VibmV0IGFkZHJlc3NlcyBhbmQgQ0lEUi9uZXRtYXNrIGFyZSBwcm9wZXJseSBmb3JtYXR0ZWQgYW5kIG1lZXQgcHJvamVjdCBjb25zdHJhaW50cy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1zdWJuZXQtYWRkcmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5nc2UtY29uZmlnLTAwMjwvaWQ+CiAgICA8bmFtZT5HU0UgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIEdTRSBjb250cm9sIGJsb2NrcyByZWZlcmVuY2UgdmFsaWQgZGF0YXNldHMgYW5kIGhhdmUgY29ycmVjdCBNQUMvVkxBTi9uZXR3b3JrIHBhcmFtZXRlcnMuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stZ3NlLWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5zbXYtY29uZmlnLTAwMzwvaWQ+CiAgICA8bmFtZT5TTVYgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5DaGVja3MgU01WIGNvbnRyb2wgYmxvY2tzIGZvciB2YWxpZCBkYXRhc2V0cywgc2FtcGxlIHJhdGVzLCBhbmQgY29tcGxpYW50IG5ldHdvcmsgc2V0dGluZ3MuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stc212LWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4KCg==", ZI = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmNvbW0tc3VibmV0LTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJuZXQgQWRkcmVzcyBWYWxpZGl0eTwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5WYWxpZGF0ZXMgSVAgc3VibmV0IGFkZHJlc3NlcyBhbmQgQ0lEUi9uZXRtYXNrIGFyZSBwcm9wZXJseSBmb3JtYXR0ZWQgYW5kIG1lZXQgcHJvamVjdCBjb25zdHJhaW50cy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1zdWJuZXQtYWRkcmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5nc2UtY29uZmlnLTAwMjwvaWQ+CiAgICA8bmFtZT5HU0UgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIEdTRSBjb250cm9sIGJsb2NrcyByZWZlcmVuY2UgdmFsaWQgZGF0YXNldHMgYW5kIGhhdmUgY29ycmVjdCBNQUMvVkxBTi9uZXR3b3JrIHBhcmFtZXRlcnMuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stZ3NlLWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5zbXYtY29uZmlnLTAwMzwvaWQ+CiAgICA8bmFtZT5TTVYgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5DaGVja3MgU01WIGNvbnRyb2wgYmxvY2tzIGZvciB2YWxpZCBkYXRhc2V0cywgc2FtcGxlIHJhdGVzLCBhbmQgY29tcGxpYW50IG5ldHdvcmsgc2V0dGluZ3MuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stc212LWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4KCg==";
var HI = /* @__PURE__ */ X('<button type="button"><span> </span></button>'), BI = /* @__PURE__ */ X('<div><button type="button" class="validation-groups__group-title svelte-1s1txht"> </button> <!></div>'), WI = /* @__PURE__ */ X('<div class="validation-groups svelte-1s1txht"></div>');
function Hu(n, e) {
  Ae(e, !0);
  let t = m(e, "pluginGroups", 19, () => []), r = m(e, "selectedGroupIndex", 15, null), i = m(e, "selectedPluginIndex", 15, null), a = m(e, "expandedGroupBackground", 3, "var(--brand)"), s = m(e, "expandedGroupBorderColor", 3, "var(--brand)");
  Se(() => {
    var v, f;
    if (!((v = t()) != null && v.length)) {
      r(null), i(null);
      return;
    }
    (r() === null || r() >= t().length) && r(0);
    const d = t()[r()];
    if (!((f = d == null ? void 0 : d.plugins) != null && f.length)) {
      i(null);
      return;
    }
    (i() === null || i() >= d.plugins.length) && i(0);
  });
  function u(d) {
    var f;
    const v = t()[d];
    r(d), i((f = v == null ? void 0 : v.plugins) != null && f.length ? 0 : null);
  }
  function l(d, v) {
    r(d), i(v);
  }
  var c = WI();
  cn(c, 21, t, br, (d, v, f) => {
    var h = BI();
    let g;
    var p = N(h);
    p.__click = () => u(f);
    var _ = N(p), y = q(p, 2);
    {
      var x = (S) => {
        var A = oe(), w = K(A);
        cn(w, 17, () => o(v).plugins, br, (I, C, b) => {
          var T = HI();
          let R;
          T.__click = () => l(f, b);
          var D = N(T), L = N(D);
          de(
            (O) => {
              R = _r(T, 1, "validation-groups__plugin svelte-1s1txht", null, R, O), Oe(L, o(C).name);
            },
            [() => ({ active: b === i() })]
          ), E(I, T);
        }), E(S, A);
      };
      $(y, (S) => {
        f === r() && S(x);
      });
    }
    de(
      (S) => {
        g = _r(h, 1, "validation-groups__group svelte-1s1txht", null, g, S), mt(p, "aria-pressed", f === r()), Oe(_, o(v).title);
      },
      [() => ({ expanded: f === r() })]
    ), E(d, h);
  }), de(() => qe(c, `--expanded-group-bg:${a()}; --expanded-group-border:${s()};`)), E(n, c), Ee();
}
pt(["click"]);
var UI = /* @__PURE__ */ X("<p>Loading…</p>"), jI = /* @__PURE__ */ X('<p class="error svelte-v2hgj7"> </p>'), VI = /* @__PURE__ */ X('<div class="xml-viewer svelte-v2hgj7"><h4 class="xml-viewer__title svelte-v2hgj7"> </h4> <div class="xml-viewer__box svelte-v2hgj7"><pre class="svelte-v2hgj7"> </pre></div></div>'), zI = /* @__PURE__ */ X('<span class="validation-xml-container__description svelte-v2hgj7"> </span>'), XI = /* @__PURE__ */ X('<button type="button" class="toggle-btn svelte-v2hgj7" aria-expanded="true" title="Collapse"><!></button>'), YI = /* @__PURE__ */ X('<button type="button" class="toggle-btn svelte-v2hgj7" aria-expanded="false" title="Expand"><!></button>'), qI = /* @__PURE__ */ X('<div class="xml-viewer svelte-v2hgj7"><div class="xml-viewer__box svelte-v2hgj7"><pre class="svelte-v2hgj7"> </pre></div></div>'), KI = /* @__PURE__ */ X('<div class="validation-xml-container svelte-v2hgj7"><div class="validation-xml-container__meta svelte-v2hgj7"><span class="validation-xml-container__name svelte-v2hgj7"> </span> <!> <div class="validation-xml-container__actions svelte-v2hgj7"><button type="button" class="delete-btn svelte-v2hgj7" title="Remove"><!></button> <!></div></div> <!></div>'), QI = /* @__PURE__ */ X('<div class="validation-xml-list svelte-v2hgj7"></div>'), JI = /* @__PURE__ */ X("<!> <!>", 1);
function $I(n, e) {
  Ae(e, !0);
  let t = m(e, "pluginGroups", 19, () => []), r = /* @__PURE__ */ le(null), i = /* @__PURE__ */ le(null);
  const a = /* @__PURE__ */ ne(() => o(r) !== null ? t()[o(r)] : null), s = /* @__PURE__ */ ne(() => o(a) && o(i) !== null ? o(a).plugins[o(i)] : null);
  Se(() => {
    var I, C;
    if (!((I = t()) != null && I.length)) {
      W(r, null), W(i, null);
      return;
    }
    (o(r) === null || o(r) >= t().length) && W(r, 0);
    const w = t()[o(r)];
    if (!((C = w == null ? void 0 : w.plugins) != null && C.length)) {
      W(i, null);
      return;
    }
    (o(i) === null || o(i) >= w.plugins.length) && W(i, 0);
  });
  let u = /* @__PURE__ */ le(""), l = /* @__PURE__ */ le(!1), c = /* @__PURE__ */ le(""), d = null, v = /* @__PURE__ */ le(Ce([])), f = /* @__PURE__ */ le(Ce(/* @__PURE__ */ new Set()));
  async function h(w) {
    W(l, !0), W(c, ""), W(u, ""), W(v, [], !0), W(f, /* @__PURE__ */ new Set(), !0), d == null || d.abort(), d = new AbortController();
    try {
      const I = new URL((/* @__PURE__ */ Object.assign({ "../../assets/validations/autodoc-xyz.xml": LI, "../../assets/validations/communication-xyz.xml": RI, "../../assets/validations/history-viewer-xyz.xml": OI, "../../assets/validations/location-manager-xyz.xml": MI, "../../assets/validations/publisher-xyz.xml": FI, "../../assets/validations/subscribe-later-binding-xyz.xml": PI, "../../assets/validations/substation-xyz.xml": kI, "../../assets/validations/template-generator-xyz.xml": GI, "../../assets/validations/type-designer-xyz.xml": NI, "../../assets/validations/type-distributor-xyz.xml": ZI }))[`../../assets/validations/${w}.xml`], import.meta.url).href, C = await fetch(I, { cache: "no-cache", signal: d.signal });
      if (!C.ok) {
        if (C.status === 404) {
          W(u, "(No XML found for this plugin.)");
          return;
        }
        throw new Error(`HTTP ${C.status}`);
      }
      W(u, await C.text(), !0);
      const T = new DOMParser().parseFromString(o(u), "application/xml");
      if (T.querySelector("parsererror"))
        throw new Error("Invalid XML format.");
      const D = new XMLSerializer(), L = Array.from(T.getElementsByTagName("validation"));
      W(
        v,
        L.map((O, re) => {
          var be, fe, j, V, M, Q, Y;
          const U = (be = O.getAttribute("name")) == null ? void 0 : be.trim(), Z = (fe = O.getAttribute("id")) == null ? void 0 : fe.trim(), H = (V = (j = O.querySelector("name")) == null ? void 0 : j.textContent) == null ? void 0 : V.trim(), J = (M = O.getAttribute("description")) == null ? void 0 : M.trim(), ue = (Y = (Q = O.querySelector("description")) == null ? void 0 : Q.textContent) == null ? void 0 : Y.trim(), k = U || Z || H || `Validation ${re + 1}`, ee = J || ue || void 0, ie = D.serializeToString(O);
          return { name: k, description: ee, xml: ie };
        }),
        !0
      ), W(f, new Set(o(v).map((O, re) => re)), !0);
    } catch (I) {
      if ((I == null ? void 0 : I.name) === "AbortError")
        return;
      W(c, (I == null ? void 0 : I.message) || "Failed to load XML.", !0);
    } finally {
      W(l, !1);
    }
  }
  let g = /* @__PURE__ */ ne(() => {
    var w;
    return ((w = o(s)) == null ? void 0 : w.id) ?? null;
  }), p = null;
  Se(() => {
    !o(g) || o(g) === p || (p = o(g), h(o(g)));
  });
  function _(w) {
    o(f).has(w) ? o(f).delete(w) : o(f).add(w), W(f, new Set(o(f)), !0);
  }
  var y = JI(), x = K(y);
  Hu(x, {
    get pluginGroups() {
      return t();
    },
    get selectedGroupIndex() {
      return o(r);
    },
    set selectedGroupIndex(w) {
      W(r, w, !0);
    },
    get selectedPluginIndex() {
      return o(i);
    },
    set selectedPluginIndex(w) {
      W(i, w, !0);
    }
  });
  var S = q(x, 2);
  {
    var A = (w) => {
      var I = oe(), C = K(I);
      {
        var b = (R) => {
          var D = UI();
          E(R, D);
        }, T = (R) => {
          var D = oe(), L = K(D);
          {
            var O = (U) => {
              var Z = jI(), H = N(Z);
              de(() => Oe(H, o(c))), E(U, Z);
            }, re = (U) => {
              var Z = oe(), H = K(Z);
              {
                var J = (k) => {
                  var ee = VI(), ie = N(ee), be = N(ie), fe = q(ie, 2), j = N(fe), V = N(j);
                  de(() => {
                    Oe(be, `XML for: ${o(s).name ?? ""}`), Oe(V, o(u));
                  }), E(k, ee);
                }, ue = (k) => {
                  var ee = QI();
                  cn(ee, 21, () => o(v), br, (ie, be, fe) => {
                    var j = KI(), V = N(j), M = N(V), Q = N(M), Y = q(M, 2);
                    {
                      var ge = (P) => {
                        var z = zI(), ve = N(z);
                        de(() => Oe(ve, o(be).description)), E(P, z);
                      };
                      $(Y, (P) => {
                        o(be).description && P(ge);
                      });
                    }
                    var pe = q(Y, 2), Ne = N(pe), tt = N(Ne);
                    hu(tt, { svgStyles: "fill: #FF203A" });
                    var Ke = q(Ne, 2);
                    {
                      var Re = (P) => {
                        var z = XI();
                        z.__click = () => _(fe);
                        var ve = N(z);
                        qh(ve, { svgStyles: "fill: #004552" }), E(P, z);
                      }, st = (P) => {
                        var z = YI();
                        z.__click = () => _(fe);
                        var ve = N(z);
                        Qh(ve, { svgStyles: "fill: #004552" }), E(P, z);
                      };
                      $(Ke, (P) => {
                        o(f).has(fe) ? P(Re) : P(st, !1);
                      });
                    }
                    var kt = q(V, 2);
                    {
                      var Gt = (P) => {
                        var z = qI(), ve = N(z), Fe = N(ve), Nt = N(Fe);
                        de(() => Oe(Nt, o(be).xml)), E(P, z);
                      };
                      $(kt, (P) => {
                        o(f).has(fe) && P(Gt);
                      });
                    }
                    de(() => Oe(Q, o(be).name)), E(ie, j);
                  }), E(k, ee);
                };
                $(H, (k) => {
                  o(v).length === 0 ? k(J) : k(ue, !1);
                });
              }
              E(U, Z);
            };
            $(
              L,
              (U) => {
                o(c) ? U(O) : U(re, !1);
              },
              !0
            );
          }
          E(R, D);
        };
        $(C, (R) => {
          o(l) ? R(b) : R(T, !1);
        });
      }
      E(w, I);
    };
    $(S, (w) => {
      o(s) && w(A);
    });
  }
  E(n, y), Ee();
}
pt(["click"]);
function eb(n, e) {
  const t = (n == null ? void 0 : n.name) ?? "—";
  return [
    { label: "Engineering-Wizard", enabled: !0 },
    { label: e != null && e.edit ? `Edit ${t}` : t, enabled: !1 }
  ];
}
var tb = /* @__PURE__ */ X('<div class="stepper-actions svelte-1tja41x"><div class="stepper-navigation svelte-1tja41x"><button type="button" class="btn btn--back svelte-1tja41x" aria-label="Previous step"><span><!></span> <span>Back</span></button> <button type="button" class="btn btn--next svelte-1tja41x" aria-label="Next step"><span>Next</span> <span><!></span></button></div> <button type="button" class="btn btn--done svelte-1tja41x" aria-label="Done"><span><!></span> <span>Done</span></button></div>');
function Bu(n, e) {
  const t = m(e, "isAtFirstStep", 3, !1), r = m(e, "isAtLastStep", 3, !1), i = m(e, "doneDisabled", 3, !1);
  var a = tb(), s = N(a), u = N(s);
  u.__click = function(..._) {
    var y;
    (y = e.onGoToPreviousStep) == null || y.apply(this, _);
  };
  var l = N(u), c = N(l);
  hg(c, { svgStyles: "fill: #ffffff" });
  var d = q(u, 2);
  d.__click = function(..._) {
    var y;
    (y = e.onGoToNextStep) == null || y.apply(this, _);
  };
  var v = q(N(d), 2), f = N(v);
  fg(f, { svgStyles: "fill: var(--brand);" });
  var h = q(s, 2);
  h.__click = function(..._) {
    var y;
    (y = e.onDone) == null || y.apply(this, _);
  };
  var g = N(h), p = N(g);
  mu(p), de(() => {
    u.disabled = t(), d.disabled = r(), h.disabled = i();
  }), E(n, a);
}
pt(["click"]);
var nb = /* @__PURE__ */ X('<button class="btn-engineering-wizard_title svelte-rejjzu">Engineering Wizard</button>');
function Wu(n, e) {
  var t = nb();
  t.__click = function(...r) {
    var i;
    (i = e.onClick) == null || i.apply(this, r);
  }, E(n, t);
}
pt(["click"]);
var rb = /* @__PURE__ */ X('<div class="header header--right svelte-1qlms77"><!></div> <!>', 1), ib = /* @__PURE__ */ X('<div class="stepper svelte-1qlms77"><!> <!> <!></div> <div class="step-content svelte-1qlms77"><!></div>', 1), ab = /* @__PURE__ */ X('<div class="step-content svelte-1qlms77"><div class="header svelte-1qlms77"><!> <!></div> <!></div>'), sb = /* @__PURE__ */ X('<div class="page-content svelte-1qlms77"><!></div>');
function ob(n, e) {
  Ae(e, !0);
  const t = ["process-definition", "validator-configuration"];
  let r = /* @__PURE__ */ le(0), i = /* @__PURE__ */ ne(() => t[o(r)] ?? t[0]), a = /* @__PURE__ */ ne(() => o(r) === 0), s = /* @__PURE__ */ ne(() => o(r) === t.length - 1), u = /* @__PURE__ */ ne(() => eb(ut.process, { edit: mn.isEditing })), l = /* @__PURE__ */ ne(() => ut.process.pluginGroups), c = /* @__PURE__ */ le(Ce([]));
  function d(I) {
    I === 0 && (Wr.set(!0), ut.process = null);
  }
  function v() {
    console.log("EDITING"), mn.isEditing = !0, Wr.set(!1), W(r, 0), W(c, [], !0);
  }
  function f() {
    mn.isEditing = !1, Wr.set(!0), ut.process = null;
  }
  function h(I) {
    const C = t.indexOf(I);
    C !== -1 && W(r, C, !0);
  }
  function g(I) {
    o(c).includes(I) || W(c, [...o(c), I], !0);
  }
  function p() {
    o(s) || (g(o(i)), W(r, o(r) + 1));
  }
  function _() {
    o(a) || W(r, o(r) - 1);
  }
  function y() {
    alert("Add New Validation clicked!");
  }
  var x = sb(), S = N(x);
  {
    var A = (I) => {
      var C = ib(), b = K(C), T = N(b);
      Wu(T, { onClick: f });
      var R = q(T, 2);
      Kp(R, {
        get currentId() {
          return o(i);
        },
        get visited() {
          return o(c);
        },
        onSelect: h
      });
      var D = q(R, 2);
      Bu(D, {
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
      var L = q(b, 2), O = N(L);
      {
        var re = (Z) => {
          DI(Z, {
            get pluginGroups() {
              return o(l);
            }
          });
        }, U = (Z) => {
          var H = oe(), J = K(H);
          {
            var ue = (k) => {
              var ee = rb(), ie = K(ee), be = N(ie);
              {
                let j = /* @__PURE__ */ ne(() => !ut.process);
                pr(be, {
                  variant: "raised",
                  style: "--mdc-theme-primary: var(--brand); --mdc-theme-on-primary: var(--on-brand)",
                  onclick: y,
                  get disabled() {
                    return o(j);
                  },
                  "aria-label": "Add validation",
                  children: (V, M) => {
                    var Q = ct("ADD NEW VALIDATION");
                    E(V, Q);
                  },
                  $$slots: { default: !0 }
                });
              }
              var fe = q(ie, 2);
              $I(fe, {
                get pluginGroups() {
                  return o(l);
                },
                get breadcrumbs() {
                  return o(u);
                },
                activeBreadcrumbIndex: 2,
                $$events: {
                  addValidation: y,
                  breadcrumbClick: d
                }
              }), E(k, ee);
            };
            $(
              J,
              (k) => {
                o(i) === "validator-configuration" && k(ue);
              },
              !0
            );
          }
          E(Z, H);
        };
        $(O, (Z) => {
          o(i) === "process-definition" ? Z(re) : Z(U, !1);
        });
      }
      E(I, C);
    }, w = (I) => {
      var C = ab(), b = N(C), T = N(b);
      jg(T, {
        get breadcrumbs() {
          return o(u);
        },
        activeIndex: 1,
        handleClick: d
      });
      var R = q(T, 2);
      {
        let L = /* @__PURE__ */ ne(() => !ut.process);
        pr(R, {
          variant: "raised",
          style: "--mdc-theme-primary: var(--brand); --mdc-theme-on-primary: var(--on-brand)",
          onclick: () => e.handleStart(ut.process),
          get disabled() {
            return o(L);
          },
          "aria-label": "Start process",
          children: (O, re) => {
            var U = ct("START PROCESS");
            E(O, U);
          },
          $$slots: { default: !0 }
        });
      }
      var D = q(b, 2);
      hI(D, {
        get pluginGroups() {
          return o(l);
        },
        requestEdit: v
      }), E(I, C);
    };
    $(S, (I) => {
      mn.isEditing ? I(A) : I(w, !1);
    });
  }
  E(n, x), Ee();
}
var lb = /* @__PURE__ */ X("<div></div>");
function db(n, e) {
  Ae(e, !0);
  function t(c) {
    let d = 3735928559, v = 1103547991;
    for (let f = 0, h; f < c.length; f++)
      h = c.charCodeAt(f), d = Math.imul(d ^ h, 2654435761), v = Math.imul(v ^ h, 1597334677);
    return d = Math.imul(d ^ d >>> 16, 2246822507) ^ Math.imul(v ^ v >>> 13, 3266489909), v = Math.imul(v ^ v >>> 16, 2246822507) ^ Math.imul(d ^ d >>> 13, 3266489909), "oscd-plugin" + ((v >>> 0).toString(16).padStart(8, "0") + (d >>> 0).toString(16).padStart(8, "0"));
  }
  let r = m(e, "editCount", 19, () => -1), i = m(e, "plugins", 19, () => []), a = null, s = null, u = "";
  Se(() => {
    var d;
    if (!a) return;
    if (!((d = e.plugin) != null && d.src)) {
      a.innerHTML = "", s = null, u = "";
      return;
    }
    const c = t(e.plugin.src);
    c !== u ? (u = c, a.innerHTML = "", s = document.createElement(c), s.doc = e.doc, s.editCount = r(), s.plugins = i(), s.nsdoc = e.nsdoc, s.docName = e.docName, s.docId = e.docId, s.docs = e.docs, s.locale = e.locale, e.oscdApi && (s.oscdApi = e.oscdApi), a.appendChild(s)) : s && (s.doc = e.doc, s.editCount = r(), s.plugins = i(), s.nsdoc = e.nsdoc, s.docName = e.docName, s.docId = e.docId, s.docs = e.docs, s.locale = e.locale, e.oscdApi && (s.oscdApi = e.oscdApi));
  });
  var l = lb();
  xe(l, (c) => a = c, () => a), E(n, l), Ee();
}
function ub(n, e, t = null) {
  return { parent: n, node: e, reference: t };
}
function cb(n) {
  return { node: n };
}
function fb(n, e) {
  return { element: n, textContent: e };
}
function vb(n, e) {
  return new CustomEvent("oscd-edit-v2", {
    composed: !0,
    bubbles: !0,
    detail: { ...e, edit: n }
  });
}
function hb(n, e) {
  if (!n)
    return console.warn("Host element is undefined, cannot dispatch event"), !1;
  const t = vb(e);
  return n.dispatchEvent(t);
}
const Uu = "compas", ju = `${Uu}:workflowProcessId`, Vu = `${Uu}:workflowLastPluginId`;
function dl(n) {
  return n.documentElement;
}
function zu(n, e) {
  return dl(n).querySelector(`:scope > Private[type="${e}"]`);
}
function gb(n, e, t) {
  const r = n.createElementNS(dl(n).namespaceURI, "Private");
  return r.setAttribute("type", e), r.textContent = t, r;
}
function od(n, e, t, r) {
  const i = zu(n, t), a = (r ?? "").trim();
  if (!a) {
    i && e.push(cb(i));
    return;
  }
  i ? e.push(fb(i, a)) : e.push(ub(dl(n), gb(n, t, a), null));
}
function Xu(n) {
  const e = (t) => {
    var r, i;
    return ((i = (r = zu(n, t)) == null ? void 0 : r.textContent) == null ? void 0 : i.trim()) || null;
  };
  return {
    processId: e(ju),
    lastPluginId: e(Vu)
  };
}
function os(n, e, t) {
  const r = [];
  return "processId" in t && od(n, r, ju, t.processId), "lastPluginId" in t && od(n, r, Vu, t.lastPluginId), r.length ? hb(e, r) : !1;
}
var mb = /* @__PURE__ */ X('<div class="plugin-container svelte-1xkxjkz"><!></div>'), pb = /* @__PURE__ */ X('<div class="stepper svelte-1xkxjkz"><!> <!> <!></div> <!>', 1);
function Ib(n, e) {
  Ae(e, !0);
  const t = ["check", "warning", "error"];
  let r = m(e, "editCount", 19, () => -1), i = m(e, "plugins", 19, () => []), a = Ce({ plugin: null }), s = /* @__PURE__ */ le(Ce([])), u = /* @__PURE__ */ le(Ce({})), l = /* @__PURE__ */ ne(() => i().length > 0), c = /* @__PURE__ */ ne(() => a.plugin && o(l) ? i().findIndex((D) => D.id === a.plugin.id) : -1), d = /* @__PURE__ */ ne(() => ut.process.pluginGroups), v = /* @__PURE__ */ le(null), f = /* @__PURE__ */ le(null);
  function h(D) {
    var L, O;
    if (!((L = o(d)) != null && L.length)) return { groupIndex: null, pluginIndex: null };
    for (let re = 0; re < o(d).length; re++) {
      const Z = ((O = o(d)[re].plugins) == null ? void 0 : O.findIndex((H) => H.id === D)) ?? -1;
      if (Z >= 0) return { groupIndex: re, pluginIndex: Z };
    }
    return { groupIndex: null, pluginIndex: null };
  }
  async function g(D) {
    if (!D) return;
    await Nu(D), a.plugin = D;
    const { groupIndex: L, pluginIndex: O } = h(D.id);
    W(v, L, !0), W(f, O, !0);
    try {
      e.doc && e.host && os(e.doc, e.host, { lastPluginId: D.id });
    } catch {
    }
    if (Op(D.id), !o(s).includes(D.id)) {
      W(s, [...o(s), D.id], !0);
      const re = i().findIndex((U) => U.id === D.id);
      if (re !== -1) {
        const U = t[re % t.length];
        W(u, { ...o(u), [D.id]: U }, !0);
      }
    }
  }
  function p(D) {
    if (!o(l)) return;
    const O = ((o(c) < 0 ? 0 : o(c)) + D + i().length) % i().length;
    g(i()[O]);
  }
  const _ = () => p(1), y = () => p(-1);
  function x(D, L) {
    return Object.assign(D, L), {
      update(O) {
        Object.assign(D, O);
      }
    };
  }
  Se(() => {
    var re;
    if (!o(l)) return;
    const L = (e.doc ? Xu(e.doc) : { lastPluginId: null }).lastPluginId || jr.lastSelectedPluginId;
    if (!L || ((re = a.plugin) == null ? void 0 : re.id) === L) return;
    const O = h(L);
    if (O.groupIndex !== null && O.pluginIndex !== null) {
      W(v, O.groupIndex, !0), W(f, O.pluginIndex, !0);
      const U = i().find((Z) => Z.id === L);
      if (U) {
        g(U);
        return;
      }
    }
    o(c) === -1 && i().length && g(i()[0]);
  }), Se(() => {
    var re, U, Z;
    if (o(v) === null || o(f) === null) return;
    const D = (re = o(d)) == null ? void 0 : re[o(v)], L = (U = D == null ? void 0 : D.plugins) == null ? void 0 : U[o(f)];
    if (!L) return;
    const O = i().find((H) => H.id === L.id);
    O && ((Z = a.plugin) == null ? void 0 : Z.id) !== O.id && g(O);
  }), Se(() => {
    if (!o(l)) {
      a.plugin = null, W(s, [], !0), W(u, {}, !0), W(v, null), W(f, null);
      return;
    }
    o(c) === -1 && (jr.lastSelectedPluginId || g(i()[0]));
  }), rt(() => (i().length && II(i()).catch(console.error), Wr.set(!1), () => Wr.set(!0)));
  function S() {
    var D;
    Wr.set(!0), (D = e.onExit) == null || D.call(e);
  }
  var A = pb(), w = K(A), I = N(w);
  Wu(I, { onClick: S });
  var C = q(I, 2);
  Hu(C, {
    get pluginGroups() {
      return o(d);
    },
    expandedGroupBackground: "var(--primary-base)",
    expandedGroupBorderColor: "white",
    get selectedGroupIndex() {
      return o(v);
    },
    set selectedGroupIndex(D) {
      W(v, D, !0);
    },
    get selectedPluginIndex() {
      return o(f);
    },
    set selectedPluginIndex(D) {
      W(f, D, !0);
    }
  });
  var b = q(C, 2);
  {
    let D = /* @__PURE__ */ ne(() => !o(l)), L = /* @__PURE__ */ ne(() => !o(l));
    Bu(b, {
      onGoToPreviousStep: y,
      onGoToNextStep: _,
      onDone: S,
      get isAtFirstStep() {
        return o(D);
      },
      get isAtLastStep() {
        return o(L);
      }
    });
  }
  var T = q(w, 2);
  {
    var R = (D) => {
      var L = mb(), O = N(L);
      {
        var re = (Z) => {
          db(Z, {
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
        }, U = (Z) => {
          var H = oe(), J = K(H);
          bo(J, () => a.plugin.id, !1, (ue, k) => {
            De(ue, (ee, ie) => x == null ? void 0 : x(ee, ie), () => ({
              doc: e.doc,
              editCount: r(),
              docs: e.docs,
              nsdoc: e.nsdoc,
              docName: e.docName,
              docId: e.docId,
              locale: e.locale,
              oscdApi: e.oscdApi,
              host: e.host
            })), _r(ue, 0, "svelte-1xkxjkz");
          }), E(Z, H);
        };
        $(O, (Z) => {
          a.plugin.type === "internal" ? Z(re) : Z(U, !1);
        });
      }
      E(D, L);
    };
    $(T, (D) => {
      a.plugin && D(R);
    });
  }
  E(n, A), Ee();
}
const bb = (n, e, t) => {
  n.target === n.currentTarget && (n.key === "Escape" && (n.preventDefault(), e("exit")), (n.key === "Enter" || n.key === " ") && (n.preventDefault(), t()));
};
var _b = (n, e) => {
  n.target === n.currentTarget && e("exit");
}, yb = /* @__PURE__ */ X('<div class="ewf-dialog-backdrop svelte-12xjguj" role="dialog" aria-modal="true" aria-labelledby="ewf-title" tabindex="-1"><div class="ewf-dialog-panel svelte-12xjguj" role="document"><h2 id="ewf-title" class="sr-only svelte-12xjguj">Engineering Workflow</h2> <!></div></div>');
function Cb(n, e) {
  Ae(e, !0);
  let t = m(e, "editCount", 19, () => -1), r = m(e, "plugins", 19, () => []), i = /* @__PURE__ */ le(!1), a = /* @__PURE__ */ le(void 0), s = /* @__PURE__ */ le(null);
  const u = (f) => {
    o(i) || (W(i, !0), ut.process = null, Wr.set(!0), Hr(f));
  }, l = () => u("exit");
  Se(() => {
    var f;
    e.open !== o(a) && (W(a, e.open, !0), e.open ? (W(i, !1), (f = o(s)) == null || f.focus()) : u("cancel"));
  });
  var c = oe(), d = K(c);
  {
    var v = (f) => {
      var h = yb();
      h.__keydown = [bb, u, l], h.__click = [_b, u];
      var g = N(h), p = q(N(g), 2);
      Ib(p, {
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
      }), xe(h, (_) => W(s, _), () => o(s)), E(f, h);
    };
    $(d, (f) => {
      e.open && f(v);
    });
  }
  E(n, c), Ee();
}
pt(["keydown", "click"]);
var Ab = /* @__PURE__ */ X('<div class="card-header svelte-1rixbl7"><p class="header-info svelte-1rixbl7">Add External Plugins</p> <div class="search-input svelte-1rixbl7"><!></div></div>'), Eb = (n, e, t) => e(o(t)), Sb = /* @__PURE__ */ X('<div class="card-item-content svelte-1rixbl7"><div class="card-item-content__left svelte-1rixbl7"><div aria-label="drag-handle"><!></div> <p class="plugin-name svelte-1rixbl7"> </p></div> <button class="plugin-add-btn svelte-1rixbl7"><!></button></div>'), xb = /* @__PURE__ */ X("<div><!></div>"), wb = /* @__PURE__ */ X('<div class="card-parent-content svelte-1rixbl7"></div>');
function Tb(n, e) {
  Ae(e, !0);
  const t = (d) => {
    var v = Ab(), f = q(N(v), 2), h = N(f);
    mr(h, {
      variant: "outlined",
      label: "Search Plugins",
      get value() {
        return a();
      },
      set value(g) {
        a(g);
      }
    }), E(d, v);
  }, r = (d) => {
    var v = wb();
    cn(v, 29, i, (f) => f.id, (f, h) => {
      var g = xb(), p = N(g);
      il(p, {
        variant: "secondary",
        children: (_, y) => {
          var x = Sb(), S = N(x), A = N(S), w = N(A);
          ks(w, {}), De(A, (R) => On == null ? void 0 : On(R));
          var I = q(A, 2), C = N(I), b = q(S, 2);
          b.__click = [Eb, c, h];
          var T = N(b);
          Qo(T, { svgStyles: "fill: var(--brand);" }), de(() => {
            Oe(C, o(h).name), mt(b, "aria-label", `Add ${o(h).name}`);
          }), E(_, x);
        },
        $$slots: { default: !0 }
      }), de(() => mt(g, "data-id", o(h).id)), Ms(g, () => js, () => ({ duration: 100 })), E(f, g);
    }), De(v, (f, h) => Rn == null ? void 0 : Rn(f, h), () => ({
      items: i(),
      flipDurationMs: 100,
      dropTargetStyle: {},
      dropFromOthersDisabled: !0
    })), Pt("consider", v, l), Pt("finalize", v, u), E(d, v);
  };
  let i = m(e, "plugins", 23, () => []), a = m(e, "searchTerm", 15, ""), s = m(e, "onAddPlugin", 3, () => {
  });
  const u = (d) => {
    i(d.detail.items);
  }, l = (d) => {
    const { trigger: v, id: f } = d.detail.info;
    if (v === St.DRAG_STARTED) {
      const h = i().findIndex((p) => p.id === f);
      if (h < 0) return;
      const g = `${f}_copy`;
      d.detail.items = d.detail.items.filter((p) => !p[oa]), d.detail.items.splice(h, 0, { ...i()[h], id: g }), i(d.detail.items);
    } else
      i([...i()]);
  };
  function c(d) {
    const v = d.id.endsWith("_copy") ? d.id.slice(0, -5) : d.id, f = i().find((h) => h.id === v) ?? { ...d, id: v };
    s()(f);
  }
  al(n, {
    backgroundColor: "#DAE3E6",
    get header() {
      return t;
    },
    get content() {
      return r;
    }
  }), Ee();
}
pt(["click"]);
var Db = (n, e, t) => e(t().id), Lb = /* @__PURE__ */ X('<button type="button" class="plugin-list__removeBtn svelte-1jr0t84"><!></button>'), Rb = /* @__PURE__ */ X('<div class="page svelte-1jr0t84"><div class="topbar svelte-1jr0t84"><div class="topbar__left svelte-1jr0t84"><h2 class="title svelte-1jr0t84">Create new process</h2></div> <div class="topbar__actions svelte-1jr0t84"><!> <!></div></div> <div class="form svelte-1jr0t84"><!> <!> <!> <!></div> <div class="process-definition-view svelte-1jr0t84"><!> <div class="drag-and-drop-info svelte-1jr0t84"><!> <p class="svelte-1jr0t84">SELECT OR DRAG &amp; DROP PLUGINS</p></div> <!></div></div>');
function Ob(n, e) {
  Ae(e, !0);
  const t = (j) => {
    var V = oe(), M = K(V);
    {
      var Q = (Y) => {
        pr(Y, {
          style: "background-color: #FF203A",
          variant: "raised",
          "aria-label": "Remove all plugins",
          onclick: y,
          children: (ge, pe) => {
            var Ne = ct("REMOVE ALL");
            E(ge, Ne);
          },
          $$slots: { default: !0 }
        });
      };
      $(M, (Y) => {
        o(w) && Y(Q);
      });
    }
    E(j, V);
  }, r = (j, V) => {
    let M = () => V == null ? void 0 : V().plugin;
    var Q = Lb();
    Q.__click = [Db, x, M];
    var Y = N(Q);
    fu(Y, { svgStyles: "fill: #FF203A" }), de(() => mt(Q, "aria-label", `Remove ${M().name}`)), E(j, Q);
  };
  let i = /* @__PURE__ */ le(""), a = /* @__PURE__ */ le(""), s = /* @__PURE__ */ le("1.0.0"), u = /* @__PURE__ */ le(""), l = /* @__PURE__ */ le(!1), c = /* @__PURE__ */ le(Ce([{ title: "Ungrouped", plugins: [] }])), d = /* @__PURE__ */ le("");
  const v = (j) => j.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  Se(() => {
    o(l) || W(u, v(o(i)), !0);
  });
  function f(j) {
    const V = /* @__PURE__ */ new Set();
    for (const M of j ?? []) for (const Q of M.plugins ?? []) V.add(Q.id);
    return V;
  }
  function h(j, V) {
    const M = f(V);
    if (!M.has(j)) return j;
    let Q = 2, Y = `${j}-${Q}`;
    for (; M.has(Y); )
      Q += 1, Y = `${j}-${Q}`;
    return Y;
  }
  function g(j = "Ungrouped") {
    let V = o(c).find((M) => M.title === j);
    return V || (V = { title: j, plugins: [] }, W(c, [...o(c), V], !0)), V.plugins ?? (V.plugins = []), V;
  }
  function p(j) {
    const V = [], M = /* @__PURE__ */ new Set();
    for (const Q of j ?? []) {
      const Y = [];
      for (const ge of Q.plugins ?? []) {
        let pe = ge.id;
        M.has(pe) && (pe = h(pe, V.concat([{ ...Q, plugins: Y }]))), M.add(pe), Y.push({ ...ge, id: pe });
      }
      V.push({ ...Q, plugins: Y });
    }
    return V;
  }
  function _(j, V = "Ungrouped") {
    const M = g(V), Q = h(j.id, o(c));
    M.plugins.push({ ...j, id: Q }), W(c, [...o(c)], !0);
  }
  async function y() {
    if ((await ea(qo, {
      title: "Remove all entries?",
      message: "This action cannot be undone. You will need to manually search for and re-add each item, and rearrange them again.",
      confirmActionText: "Remove All",
      cancelActionText: "Cancel",
      confirmActionColor: "danger"
    })).type === "confirm") {
      for (const V of o(c)) (V.plugins ?? (V.plugins = [])).length = 0;
      W(c, [...o(c)], !0);
    }
  }
  function x(j) {
    for (let V = 0; V < o(c).length; V += 1) {
      const M = o(c)[V], Q = (M.plugins ?? []).findIndex((Y) => Y.id === j);
      if (Q !== -1) {
        M.plugins.splice(Q, 1), M.plugins.length === 0 && o(c).splice(V, 1), W(c, [...o(c)], !0);
        return;
      }
    }
  }
  function S(j, V) {
    const M = j.trim();
    if (!M || o(c).some((pe) => pe.title === M)) return;
    const Q = { title: M, plugins: [] };
    if (V === void 0) {
      W(c, [...o(c), Q], !0);
      return;
    }
    const Y = Math.max(0, V - 1), ge = [...o(c)];
    ge.splice(Y, 0, Q), W(c, ge, !0);
  }
  function A(j) {
    W(c, p(j), !0);
  }
  let w = /* @__PURE__ */ ne(() => o(c).flatMap((j) => j.plugins ?? []).length > 0), I = /* @__PURE__ */ ne(() => {
    const j = o(d).toLowerCase().trim(), V = (sl.plugins ?? []).map((M) => ({
      id: Zu(M.name),
      name: M.name,
      src: M.src,
      type: "internal"
    }));
    return j ? V.filter((M) => M.name.toLowerCase().includes(j)) : V;
  }), C = /* @__PURE__ */ ne(() => !!o(i).trim());
  function b() {
    if (!o(C)) return;
    const j = {
      id: o(u).trim() || v(o(i)) || "process",
      version: o(s).trim() || "1.0.0",
      name: o(i).trim(),
      description: o(a).trim(),
      pluginGroups: Ss(o(c))
    }, V = Ep(j);
    mn.isEditing = !1, e.handleSaved(V);
  }
  function T() {
    mn.isEditing = !1, e.handleCancel();
  }
  rt(() => {
    mn.isEditing = !0;
  }), Fn(() => {
    mn.isEditing = !1;
  });
  var R = Rb(), D = N(R), L = q(N(D), 2), O = N(L);
  pr(O, {
    variant: "outlined",
    style: "--mdc-theme-primary: var(--brand); --mdc-theme-on-primary: var(--on-brand)",
    onclick: T,
    children: (j, V) => {
      var M = ct("CANCEL");
      E(j, M);
    },
    $$slots: { default: !0 }
  });
  var re = q(O, 2);
  {
    let j = /* @__PURE__ */ ne(() => !o(C));
    pr(re, {
      variant: "raised",
      style: "--mdc-theme-primary: var(--brand); --mdc-theme-on-primary: var(--on-brand)",
      onclick: b,
      get disabled() {
        return o(j);
      },
      children: (V, M) => {
        var Q = ct("SAVE");
        E(V, Q);
      },
      $$slots: { default: !0 }
    });
  }
  var U = q(D, 2), Z = N(U);
  mr(Z, {
    variant: "outlined",
    label: "Process name",
    get value() {
      return o(i);
    },
    set value(j) {
      W(i, j, !0);
    }
  });
  var H = q(Z, 2);
  mr(H, {
    variant: "outlined",
    label: "Process id",
    get value() {
      return o(u);
    },
    set value(j) {
      W(u, j, !0);
    },
    $$events: { input: () => W(l, !0) }
  });
  var J = q(H, 2);
  mr(J, {
    variant: "outlined",
    label: "Version",
    get value() {
      return o(s);
    },
    set value(j) {
      W(s, j, !0);
    }
  });
  var ue = q(J, 2);
  mr(ue, {
    variant: "outlined",
    label: "Description",
    get value() {
      return o(a);
    },
    set value(j) {
      W(a, j, !0);
    }
  });
  var k = q(U, 2), ee = N(k);
  ll(ee, {
    get pluginGroups() {
      return o(c);
    },
    title: "Process",
    get headerAction() {
      return t;
    },
    get itemAction() {
      return r;
    },
    onAddGroup: (j, V) => S(j, V),
    onUpdateGroups: (j) => A(j)
  });
  var ie = q(ee, 2), be = N(ie);
  pu(be, { svgStyles: "fill: #6B9197" });
  var fe = q(ie, 2);
  Tb(fe, {
    get plugins() {
      return o(I);
    },
    onAddPlugin: (j) => _(j, "Ungrouped"),
    get searchTerm() {
      return o(d);
    },
    set searchTerm(j) {
      W(d, j, !0);
    }
  }), E(n, R), Ee();
}
pt(["click"]);
var Mb = /* @__PURE__ */ X('<link rel="stylesheet" href="/material-icon.css"/>'), Fb = /* @__PURE__ */ X("<!> <!>", 1);
function Pb(n, e) {
  Ae(e, !0);
  let t = /* @__PURE__ */ le(!1);
  rt(async () => {
    await Cp();
    try {
      if (e.doc) {
        const { processId: g, lastPluginId: p } = Xu(e.doc);
        if (g) {
          const _ = (qt.processes ?? []).find((y) => y.id === g);
          _ && so(_, p ?? null);
        }
      }
    } catch {
    }
  });
  async function r(g) {
    const p = jr.process;
    if (p && p.id !== g.id) {
      if ((await ea(qo, {
        title: "Do you want to start a new process?",
        message: "Starting a new process will stop the current running process. Any unsaved progress will be lost.",
        confirmActionText: "Start New Process",
        cancelActionText: "Cancel"
      })).type === "cancel")
        return;
      so(g, null), e.doc && e.host && os(e.doc, e.host, { processId: g.id, lastPluginId: null });
    } else p ? e.doc && e.host && os(e.doc, e.host, { processId: g.id }) : (so(g, null), e.doc && e.host && os(e.doc, e.host, { processId: g.id, lastPluginId: null }));
    (!ut.process || ut.process.id !== g.id) && (ut.process = g);
    const _ = Rp(ut.process);
    ea(Cb, {
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
    Th({ editCount: e.editCount, doc: e.doc });
  });
  function i(g) {
    ut.process = g;
  }
  function a() {
    ut.process = null;
  }
  function s() {
    mn.isEditing = !1, ut.process = null, W(t, !0);
  }
  function u() {
    mn.isEditing = !1, W(t, !1);
  }
  function l(g) {
    W(t, !1), ut.process = g;
  }
  var c = Fb();
  df((g) => {
    var p = Mb();
    E(g, p);
  });
  var d = K(c);
  wh(d, {});
  var v = q(d, 2);
  {
    var f = (g) => {
      Ob(g, { handleCancel: u, handleSaved: l });
    }, h = (g) => {
      var p = oe(), _ = K(p);
      {
        var y = (S) => {
          ob(S, { handleBack: a, handleStart: r });
        }, x = (S) => {
          Wp(S, {
            handleView: i,
            handleStart: r,
            handleAddNew: s,
            get docName() {
              return e.docName;
            }
          });
        };
        $(
          _,
          (S) => {
            ut.process ? S(y) : S(x, !1);
          },
          !0
        );
      }
      E(g, p);
    };
    $(v, (g) => {
      o(t) ? g(f) : g(h, !1);
    });
  }
  E(n, c), Ee();
}
const Yu = "archive-explorer", qu = "0.0.1";
var kb = /* @__PURE__ */ X('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function Gb(n, e) {
  Ae(e, !0);
  let t = m(e, "dev", 3, !1), r = m(e, "editCount", 3, 0), i = m(e, "plugins", 19, () => []);
  var a = kb(), s = K(a);
  {
    var u = (d) => {
      Pb(d, {
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
    $(s, (d) => {
      (e.doc || t()) && d(u);
    });
  }
  var l = q(s, 2), c = q(l, 2);
  de(() => {
    xl(l, Yu), xl(c, qu);
  }), E(n, a), Ee();
}
var Yi;
class Wb extends HTMLElement {
  constructor() {
    super();
    We(this, Yi);
    we(this, Yi, /* @__PURE__ */ le(Ce({
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
    return o(se(this, Yi));
  }
  set _props(t) {
    W(se(this, Yi), t, !0);
  }
  connectedCallback() {
    if (this.shadowRoot) return;
    this.attachShadow({ mode: "open" }), If(Gb, { target: this.shadowRoot, props: this._props });
    const t = Nb();
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
    Lp(r);
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
Yi = new WeakMap();
function Nb() {
  const n = `${Yu}-v${qu}-style`, e = Zb(), t = document.createElement("link");
  return t.rel = "stylesheet", t.type = "text/css", t.href = e, t.id = n, t;
}
function Zb() {
  const n = new URL(import.meta.url), e = n.origin, t = n.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, t, "style.css"].filter(Boolean).join("/");
}
export {
  Wb as default
};
