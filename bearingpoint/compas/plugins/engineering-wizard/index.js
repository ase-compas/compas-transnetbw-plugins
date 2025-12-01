var Bu = Object.defineProperty;
var sl = (n) => {
  throw TypeError(n);
};
var Uu = (n, e, t) => e in n ? Bu(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Ti = (n, e, t) => Uu(n, typeof e != "symbol" ? e + "" : e, t), zs = (n, e, t) => e.has(n) || sl("Cannot " + t);
var ae = (n, e, t) => (zs(n, e, "read from private field"), t ? t.call(n) : e.get(n)), Ue = (n, e, t) => e.has(n) ? sl("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), we = (n, e, t, r) => (zs(n, e, "write to private field"), r ? r.call(n, t) : e.set(n, t), t), Ut = (n, e, t) => (zs(n, e, "access private method"), t);
const Et = Symbol(), Wu = "http://www.w3.org/1999/xhtml", ju = "http://www.w3.org/2000/svg", Vu = "@attach", td = !1;
var Ra = Array.isArray, zu = Array.prototype.indexOf, Oo = Array.from, ss = Object.defineProperty, Pr = Object.getOwnPropertyDescriptor, nd = Object.getOwnPropertyDescriptors, rd = Object.prototype, Xu = Array.prototype, ys = Object.getPrototypeOf, ol = Object.isExtensible;
function Mi(n) {
  return typeof n == "function";
}
const be = () => {
};
function Yu(n) {
  for (var e = 0; e < n.length; e++)
    n[e]();
}
function id() {
  var n, e, t = new Promise((r, i) => {
    n = r, e = i;
  });
  return { promise: t, resolve: n, reject: e };
}
const tn = 2, Mo = 4, Fo = 8, bi = 16, yr = 32, Ur = 64, Po = 128, Ln = 256, os = 512, zt = 1024, pn = 2048, Wr = 4096, Wn = 8192, _i = 16384, ko = 32768, yi = 65536, ll = 1 << 17, qu = 1 << 18, Ci = 1 << 19, Ku = 1 << 20, so = 1 << 21, Cs = 1 << 22, ci = 1 << 23, rr = Symbol("$state"), ad = Symbol("legacy props"), Qu = Symbol(""), Fi = new class extends Error {
  constructor() {
    super(...arguments);
    Ti(this, "name", "StaleReactionError");
    Ti(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Go(n) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Ju() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function $u(n) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ec() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function tc(n) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function nc() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function rc(n) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function ic() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ac() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function sc() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function oc() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function lc() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function dc() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let uc = !1;
function sd(n) {
  return n === this.v;
}
function No(n, e) {
  return n != n ? e == e : n !== e || n !== null && typeof n == "object" || typeof n == "function";
}
function od(n) {
  return !No(n, this.v);
}
let na = !1, cc = !1;
function fc() {
  na = !0;
}
const vc = [];
function As(n, e = !1, t = !1) {
  return $a(n, /* @__PURE__ */ new Map(), "", vc, null, t);
}
function $a(n, e, t, r, i = null, a = !1) {
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
    if (Ra(n)) {
      var u = (
        /** @type {Snapshot<any>} */
        Array(n.length)
      );
      e.set(n, u), i !== null && e.set(i, u);
      for (var l = 0; l < n.length; l += 1) {
        var c = n[l];
        l in n && (u[l] = $a(c, e, t, r, null, a));
      }
      return u;
    }
    if (ys(n) === rd) {
      u = {}, e.set(n, u), i !== null && e.set(i, u);
      for (var d in n)
        u[d] = $a(
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
      return $a(
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
let $e = null;
function Yi(n) {
  $e = n;
}
function ye(n) {
  return (
    /** @type {T} */
    ld().get(n)
  );
}
function de(n, e) {
  return ld().set(n, e), e;
}
function Ce(n, e = !1, t) {
  $e = {
    p: $e,
    c: null,
    e: null,
    s: n,
    x: null,
    l: na && !e ? { s: null, u: null, $: [] } : null
  };
}
function Ae(n) {
  var e = (
    /** @type {ComponentContext} */
    $e
  ), t = e.e;
  if (t !== null) {
    e.e = null;
    for (var r of t)
      Ad(r);
  }
  return n !== void 0 && (e.x = n), $e = e.p, n ?? /** @type {T} */
  {};
}
function Oa() {
  return !na || $e !== null && $e.l === null;
}
function ld(n) {
  return $e === null && Go(), $e.c ?? ($e.c = new Map(hc($e) || void 0));
}
function hc(n) {
  let e = n.p;
  for (; e !== null; ) {
    const t = e.c;
    if (t !== null)
      return t;
    e = e.p;
  }
  return null;
}
let ai = [];
function dd() {
  var n = ai;
  ai = [], Yu(n);
}
function Ir(n) {
  if (ai.length === 0 && !ba) {
    var e = ai;
    queueMicrotask(() => {
      e === ai && dd();
    });
  }
  ai.push(n);
}
function gc() {
  for (; ai.length > 0; )
    dd();
}
const mc = /* @__PURE__ */ new WeakMap();
function ud(n) {
  var e = Pe;
  if (e === null)
    return Oe.f |= ci, n;
  if (e.f & ko)
    qi(n, e);
  else {
    if (!(e.f & Po))
      throw !e.parent && n instanceof Error && cd(n), n;
    e.b.error(n);
  }
}
function qi(n, e) {
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
  throw n instanceof Error && cd(n), n;
}
function cd(n) {
  const e = mc.get(n);
  e && (ss(n, "message", {
    value: e.message
  }), ss(n, "stack", {
    value: e.stack
  }));
}
const ja = /* @__PURE__ */ new Set();
let Ye = null, es = null, Mt = null, oo = /* @__PURE__ */ new Set(), $n = [], Es = null, lo = !1, ba = !1;
var Ui, Wi, si, Ta, ji, Vi, oi, zi, Da, La, Mn, uo, ts, co;
const Is = class Is {
  constructor() {
    Ue(this, Mn);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    Ti(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    Ue(this, Ui, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    Ue(this, Wi, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    Ue(this, si, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    Ue(this, Ta, null);
    /**
     * Async effects inside a newly-created `<svelte:boundary>`
     * — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    Ue(this, ji, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    Ue(this, Vi, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    Ue(this, oi, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    Ue(this, zi, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    Ue(this, Da, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    Ue(this, La, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    Ti(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var a;
    $n = [], es = null, this.apply();
    for (const s of e)
      Ut(this, Mn, uo).call(this, s);
    if (ae(this, si) === 0) {
      var t = Mt;
      Ut(this, Mn, co).call(this);
      var r = ae(this, Vi), i = ae(this, oi);
      we(this, Vi, []), we(this, oi, []), we(this, zi, []), es = this, Ye = null, Mt = t, dl(r), dl(i), es = null, (a = ae(this, Ta)) == null || a.resolve();
    } else
      Ut(this, Mn, ts).call(this, ae(this, Vi)), Ut(this, Mn, ts).call(this, ae(this, oi)), Ut(this, Mn, ts).call(this, ae(this, zi));
    Mt = null;
    for (const s of ae(this, ji))
      Aa(s);
    we(this, ji, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, t) {
    ae(this, Ui).has(e) || ae(this, Ui).set(e, t), this.current.set(e, e.v), Mt == null || Mt.set(e, e.v);
  }
  activate() {
    Ye = this;
  }
  deactivate() {
    Ye = null, Mt = null;
  }
  flush() {
    if ($n.length > 0) {
      if (this.activate(), fd(), Ye !== null && Ye !== this)
        return;
    } else ae(this, si) === 0 && Ut(this, Mn, co).call(this);
    this.deactivate();
    for (const e of oo)
      if (oo.delete(e), e(), Ye !== null)
        break;
  }
  increment() {
    we(this, si, ae(this, si) + 1);
  }
  decrement() {
    we(this, si, ae(this, si) - 1);
    for (const e of ae(this, Da))
      Jt(e, pn), mi(e);
    for (const e of ae(this, La))
      Jt(e, Wr), mi(e);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    ae(this, Wi).add(e);
  }
  settled() {
    return (ae(this, Ta) ?? we(this, Ta, id())).promise;
  }
  static ensure() {
    if (Ye === null) {
      const e = Ye = new Is();
      ja.add(Ye), ba || Is.enqueue(() => {
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
Ui = new WeakMap(), Wi = new WeakMap(), si = new WeakMap(), Ta = new WeakMap(), ji = new WeakMap(), Vi = new WeakMap(), oi = new WeakMap(), zi = new WeakMap(), Da = new WeakMap(), La = new WeakMap(), Mn = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
uo = function(e) {
  var c;
  e.f ^= zt;
  for (var t = e.first; t !== null; ) {
    var r = t.f, i = (r & (yr | Ur)) !== 0, a = i && (r & zt) !== 0, s = a || (r & Wn) !== 0 || this.skipped_effects.has(t);
    if (!s && t.fn !== null) {
      i ? t.f ^= zt : r & Mo ? ae(this, oi).push(t) : r & zt || (r & Cs && ((c = t.b) != null && c.is_pending()) ? ae(this, ji).push(t) : Ls(t) && (t.f & bi && ae(this, zi).push(t), Aa(t)));
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
ts = function(e) {
  for (const t of e)
    (t.f & pn ? ae(this, Da) : ae(this, La)).push(t), Jt(t, zt);
  e.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
co = function() {
  var e;
  for (const t of ae(this, Wi))
    t();
  if (ae(this, Wi).clear(), ja.size > 1) {
    ae(this, Ui).clear();
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
          vd(s, a);
        if ($n.length > 0) {
          Ye = r, r.apply();
          for (const s of $n)
            Ut(e = r, Mn, uo).call(e, s);
          $n = [], r.deactivate();
        }
      }
    }
    Ye = null;
  }
  ja.delete(this);
};
let tr = Is;
function pc(n) {
  var e = ba;
  ba = !0;
  try {
    for (var t; ; ) {
      if (gc(), $n.length === 0 && (Ye == null || Ye.flush(), $n.length === 0))
        return Es = null, /** @type {T} */
        t;
      fd();
    }
  } finally {
    ba = e;
  }
}
function fd() {
  var n = Gi;
  lo = !0;
  try {
    var e = 0;
    for (fl(!0); $n.length > 0; ) {
      var t = tr.ensure();
      if (e++ > 1e3) {
        var r, i;
        Ic();
      }
      t.process($n), kr.clear();
    }
  } finally {
    lo = !1, fl(n), Es = null;
  }
}
function Ic() {
  try {
    nc();
  } catch (n) {
    qi(n, Es);
  }
}
let hr = null;
function dl(n) {
  var e = n.length;
  if (e !== 0) {
    for (var t = 0; t < e; ) {
      var r = n[t++];
      if (!(r.f & (_i | Wn)) && Ls(r) && (hr = [], Aa(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Sd(r) : r.fn = null), (hr == null ? void 0 : hr.length) > 0)) {
        kr.clear();
        for (const i of hr)
          Aa(i);
        hr = [];
      }
    }
    hr = null;
  }
}
function vd(n, e) {
  if (n.reactions !== null)
    for (const t of n.reactions) {
      const r = t.f;
      r & tn ? vd(
        /** @type {Derived} */
        t,
        e
      ) : r & (Cs | bi) && hd(t, e) && (Jt(t, pn), mi(
        /** @type {Effect} */
        t
      ));
    }
}
function hd(n, e) {
  if (n.deps !== null) {
    for (const t of n.deps)
      if (e.includes(t) || t.f & tn && hd(
        /** @type {Derived} */
        t,
        e
      ))
        return !0;
  }
  return !1;
}
function mi(n) {
  for (var e = Es = n; e.parent !== null; ) {
    e = e.parent;
    var t = e.f;
    if (lo && e === Pe && t & bi)
      return;
    if (t & (Ur | yr)) {
      if (!(t & zt)) return;
      e.f ^= zt;
    }
  }
  $n.push(e);
}
function bc(n) {
  let e = 0, t = pi(0), r;
  return () => {
    Gc() && (o(t), Ts(() => (e === 0 && (r = zr(() => n(() => _a(t)))), e += 1, () => {
      Ir(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, _a(t));
      });
    })));
  };
}
var _c = yi | Ci | Po;
function yc(n, e, t) {
  new Cc(n, e, t);
}
var kn, Sn, Ro, Kn, li, Qn, wn, on, Jn, Dr, di, Lr, ui, Rr, bs, _s, en, Ac, Ec, ns, rs, fo;
class Cc {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, t, r) {
    Ue(this, en);
    /** @type {Boundary | null} */
    Ti(this, "parent");
    Ue(this, kn, !1);
    /** @type {TemplateNode} */
    Ue(this, Sn);
    /** @type {TemplateNode | null} */
    Ue(this, Ro, null);
    /** @type {BoundaryProps} */
    Ue(this, Kn);
    /** @type {((anchor: Node) => void)} */
    Ue(this, li);
    /** @type {Effect} */
    Ue(this, Qn);
    /** @type {Effect | null} */
    Ue(this, wn, null);
    /** @type {Effect | null} */
    Ue(this, on, null);
    /** @type {Effect | null} */
    Ue(this, Jn, null);
    /** @type {DocumentFragment | null} */
    Ue(this, Dr, null);
    Ue(this, di, 0);
    Ue(this, Lr, 0);
    Ue(this, ui, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    Ue(this, Rr, null);
    Ue(this, bs, () => {
      ae(this, Rr) && Ki(ae(this, Rr), ae(this, di));
    });
    Ue(this, _s, bc(() => (we(this, Rr, pi(ae(this, di))), () => {
      we(this, Rr, null);
    })));
    we(this, Sn, e), we(this, Kn, t), we(this, li, r), this.parent = /** @type {Effect} */
    Pe.b, we(this, kn, !!ae(this, Kn).pending), we(this, Qn, Vr(() => {
      Pe.b = this;
      {
        try {
          we(this, wn, jt(() => r(ae(this, Sn))));
        } catch (i) {
          this.error(i);
        }
        ae(this, Lr) > 0 ? Ut(this, en, rs).call(this) : we(this, kn, !1);
      }
    }, _c));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return ae(this, kn) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!ae(this, Kn).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    Ut(this, en, fo).call(this, e), we(this, di, ae(this, di) + e), oo.add(ae(this, bs));
  }
  get_effect_pending() {
    return ae(this, _s).call(this), o(
      /** @type {Source<number>} */
      ae(this, Rr)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var t = ae(this, Kn).onerror;
    let r = ae(this, Kn).failed;
    if (ae(this, ui) || !t && !r)
      throw e;
    ae(this, wn) && (wt(ae(this, wn)), we(this, wn, null)), ae(this, on) && (wt(ae(this, on)), we(this, on, null)), ae(this, Jn) && (wt(ae(this, Jn)), we(this, Jn, null));
    var i = !1, a = !1;
    const s = () => {
      if (i) {
        dc();
        return;
      }
      i = !0, a && oc(), tr.ensure(), we(this, di, 0), ae(this, Jn) !== null && Gr(ae(this, Jn), () => {
        we(this, Jn, null);
      }), we(this, kn, this.has_pending_snippet()), we(this, wn, Ut(this, en, ns).call(this, () => (we(this, ui, !1), jt(() => ae(this, li).call(this, ae(this, Sn)))))), ae(this, Lr) > 0 ? Ut(this, en, rs).call(this) : we(this, kn, !1);
    };
    var u = Oe;
    try {
      un(null), a = !0, t == null || t(e, s), a = !1;
    } catch (l) {
      qi(l, ae(this, Qn) && ae(this, Qn).parent);
    } finally {
      un(u);
    }
    r && Ir(() => {
      we(this, Jn, Ut(this, en, ns).call(this, () => {
        we(this, ui, !0);
        try {
          return jt(() => {
            r(
              ae(this, Sn),
              () => e,
              () => s
            );
          });
        } catch (l) {
          return qi(
            l,
            /** @type {Effect} */
            ae(this, Qn).parent
          ), null;
        } finally {
          we(this, ui, !1);
        }
      }));
    });
  }
}
kn = new WeakMap(), Sn = new WeakMap(), Ro = new WeakMap(), Kn = new WeakMap(), li = new WeakMap(), Qn = new WeakMap(), wn = new WeakMap(), on = new WeakMap(), Jn = new WeakMap(), Dr = new WeakMap(), di = new WeakMap(), Lr = new WeakMap(), ui = new WeakMap(), Rr = new WeakMap(), bs = new WeakMap(), _s = new WeakMap(), en = new WeakSet(), Ac = function() {
  try {
    we(this, wn, jt(() => ae(this, li).call(this, ae(this, Sn))));
  } catch (e) {
    this.error(e);
  }
  we(this, kn, !1);
}, Ec = function() {
  const e = ae(this, Kn).pending;
  e && (we(this, on, jt(() => e(ae(this, Sn)))), tr.enqueue(() => {
    we(this, wn, Ut(this, en, ns).call(this, () => (tr.ensure(), jt(() => ae(this, li).call(this, ae(this, Sn)))))), ae(this, Lr) > 0 ? Ut(this, en, rs).call(this) : (Gr(
      /** @type {Effect} */
      ae(this, on),
      () => {
        we(this, on, null);
      }
    ), we(this, kn, !1));
  }));
}, /**
 * @param {() => Effect | null} fn
 */
ns = function(e) {
  var t = Pe, r = Oe, i = $e;
  ir(ae(this, Qn)), un(ae(this, Qn)), Yi(ae(this, Qn).ctx);
  try {
    return e();
  } catch (a) {
    return ud(a), null;
  } finally {
    ir(t), un(r), Yi(i);
  }
}, rs = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    ae(this, Kn).pending
  );
  ae(this, wn) !== null && (we(this, Dr, document.createDocumentFragment()), xc(ae(this, wn), ae(this, Dr))), ae(this, on) === null && we(this, on, jt(() => e(ae(this, Sn))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
fo = function(e) {
  var t;
  if (!this.has_pending_snippet()) {
    this.parent && Ut(t = this.parent, en, fo).call(t, e);
    return;
  }
  we(this, Lr, ae(this, Lr) + e), ae(this, Lr) === 0 && (we(this, kn, !1), ae(this, on) && Gr(ae(this, on), () => {
    we(this, on, null);
  }), ae(this, Dr) && (ae(this, Sn).before(ae(this, Dr)), we(this, Dr, null)), Ir(() => {
    tr.ensure().flush();
  }));
};
function xc(n, e) {
  for (var t = n.nodes_start, r = n.nodes_end; t !== null; ) {
    var i = t === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ma(t)
    );
    e.append(t), t = i;
  }
}
function gd(n, e, t) {
  const r = Oa() ? xs : Zo;
  if (e.length === 0) {
    t(n.map(r));
    return;
  }
  var i = Ye, a = (
    /** @type {Effect} */
    Pe
  ), s = Sc();
  Promise.all(e.map((u) => /* @__PURE__ */ wc(u))).then((u) => {
    s();
    try {
      t([...n.map(r), ...u]);
    } catch (l) {
      a.f & _i || qi(l, a);
    }
    i == null || i.deactivate(), vo();
  }).catch((u) => {
    qi(u, a);
  });
}
function Sc() {
  var n = Pe, e = Oe, t = $e, r = Ye;
  return function() {
    ir(n), un(e), Yi(t), r == null || r.activate();
  };
}
function vo() {
  ir(null), un(null), Yi(null);
}
// @__NO_SIDE_EFFECTS__
function xs(n) {
  var e = tn | pn, t = Oe !== null && Oe.f & tn ? (
    /** @type {Derived} */
    Oe
  ) : null;
  return Pe === null || t !== null && t.f & Ln ? e |= Ln : Pe.f |= Ci, {
    ctx: $e,
    deps: null,
    effects: null,
    equals: sd,
    f: e,
    fn: n,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Et
    ),
    wv: 0,
    parent: t ?? Pe,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function wc(n, e) {
  let t = (
    /** @type {Effect | null} */
    Pe
  );
  t === null && Ju();
  var r = (
    /** @type {Boundary} */
    t.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = pi(
    /** @type {V} */
    Et
  ), s = !Oe, u = /* @__PURE__ */ new Map();
  return Hc(() => {
    var f;
    var l = id();
    i = l.promise;
    try {
      Promise.resolve(n()).then(l.resolve, l.reject).then(vo);
    } catch (h) {
      l.reject(h), vo();
    }
    var c = (
      /** @type {Batch} */
      Ye
    ), d = r.is_pending();
    s && (r.update_pending_count(1), d || (c.increment(), (f = u.get(c)) == null || f.reject(Fi), u.delete(c), u.set(c, l)));
    const v = (h, g = void 0) => {
      if (d || c.activate(), g)
        g !== Fi && (a.f |= ci, Ki(a, g));
      else {
        a.f & ci && (a.f ^= ci), Ki(a, h);
        for (const [p, _] of u) {
          if (u.delete(p), p === c) break;
          _.reject(Fi);
        }
      }
      s && (r.update_pending_count(-1), d || c.decrement());
    };
    l.promise.then(v, (h) => v(null, h || "unknown"));
  }), ws(() => {
    for (const l of u.values())
      l.reject(Fi);
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
function oe(n) {
  const e = /* @__PURE__ */ xs(n);
  return Dd(e), e;
}
// @__NO_SIDE_EFFECTS__
function Zo(n) {
  const e = /* @__PURE__ */ xs(n);
  return e.equals = od, e;
}
function md(n) {
  var e = n.effects;
  if (e !== null) {
    n.effects = null;
    for (var t = 0; t < e.length; t += 1)
      wt(
        /** @type {Effect} */
        e[t]
      );
  }
}
function Tc(n) {
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
function Ho(n) {
  var e, t = Pe;
  ir(Tc(n));
  try {
    md(n), e = Md(n);
  } finally {
    ir(t);
  }
  return e;
}
function pd(n) {
  var e = Ho(n);
  if (n.equals(e) || (n.v = e, n.wv = Rd()), !Ai)
    if (Mt !== null)
      Mt.set(n, n.v);
    else {
      var t = (Or || n.f & Ln) && n.deps !== null ? Wr : zt;
      Jt(n, t);
    }
}
const kr = /* @__PURE__ */ new Map();
function pi(n, e) {
  var t = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: n,
    reactions: null,
    equals: sd,
    rv: 0,
    wv: 0
  };
  return t;
}
// @__NO_SIDE_EFFECTS__
function le(n, e) {
  const t = pi(n);
  return Dd(t), t;
}
// @__NO_SIDE_EFFECTS__
function Id(n, e = !1, t = !0) {
  var i;
  const r = pi(n);
  return e || (r.equals = od), na && t && $e !== null && $e.l !== null && ((i = $e.l).s ?? (i.s = [])).push(r), r;
}
function U(n, e, t = !1) {
  Oe !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Zn || Oe.f & ll) && Oa() && Oe.f & (tn | bi | Cs | ll) && !(Qt != null && Qt.includes(n)) && sc();
  let r = t ? Ee(e) : e;
  return Ki(n, r);
}
function Ki(n, e) {
  if (!n.equals(e)) {
    var t = n.v;
    Ai ? kr.set(n, e) : kr.set(n, t), n.v = e;
    var r = tr.ensure();
    r.capture(n, t), n.f & tn && (n.f & pn && Ho(
      /** @type {Derived} */
      n
    ), Jt(n, n.f & Ln ? Wr : zt)), n.wv = Rd(), bd(n, pn), Oa() && Pe !== null && Pe.f & zt && !(Pe.f & (yr | Ur)) && (xn === null ? Wc([n]) : xn.push(n));
  }
  return e;
}
function _a(n) {
  U(n, n.v + 1);
}
function bd(n, e) {
  var t = n.reactions;
  if (t !== null)
    for (var r = Oa(), i = t.length, a = 0; a < i; a++) {
      var s = t[a], u = s.f;
      if (!(!r && s === Pe)) {
        var l = (u & pn) === 0;
        l && Jt(s, e), u & tn ? bd(
          /** @type {Derived} */
          s,
          Wr
        ) : l && (u & bi && hr !== null && hr.push(
          /** @type {Effect} */
          s
        ), mi(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function Ee(n) {
  if (typeof n != "object" || n === null || rr in n)
    return n;
  const e = ys(n);
  if (e !== rd && e !== Xu)
    return n;
  var t = /* @__PURE__ */ new Map(), r = Ra(n), i = /* @__PURE__ */ le(0), a = fi, s = (u) => {
    if (fi === a)
      return u();
    var l = Oe, c = fi;
    un(null), hl(a);
    var d = u();
    return un(l), hl(c), d;
  };
  return r && t.set("length", /* @__PURE__ */ le(
    /** @type {any[]} */
    n.length
  )), new Proxy(
    /** @type {any} */
    n,
    {
      defineProperty(u, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && ic();
        var d = t.get(l);
        return d === void 0 ? d = s(() => {
          var v = /* @__PURE__ */ le(c.value);
          return t.set(l, v), v;
        }) : U(d, c.value, !0), !0;
      },
      deleteProperty(u, l) {
        var c = t.get(l);
        if (c === void 0) {
          if (l in u) {
            const d = s(() => /* @__PURE__ */ le(Et));
            t.set(l, d), _a(i);
          }
        } else
          U(c, Et), _a(i);
        return !0;
      },
      get(u, l, c) {
        var h;
        if (l === rr)
          return n;
        var d = t.get(l), v = l in u;
        if (d === void 0 && (!v || (h = Pr(u, l)) != null && h.writable) && (d = s(() => {
          var g = Ee(v ? u[l] : Et), p = /* @__PURE__ */ le(g);
          return p;
        }), t.set(l, d)), d !== void 0) {
          var f = o(d);
          return f === Et ? void 0 : f;
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
          if (v !== void 0 && f !== Et)
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
        if (l === rr)
          return !0;
        var c = t.get(l), d = c !== void 0 && c.v !== Et || Reflect.has(u, l);
        if (c !== void 0 || Pe !== null && (!d || (f = Pr(u, l)) != null && f.writable)) {
          c === void 0 && (c = s(() => {
            var h = d ? Ee(u[l]) : Et, g = /* @__PURE__ */ le(h);
            return g;
          }), t.set(l, c));
          var v = o(c);
          if (v === Et)
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
            g !== void 0 ? U(g, Et) : h in u && (g = s(() => /* @__PURE__ */ le(Et)), t.set(h + "", g));
          }
        if (v === void 0)
          (!f || (S = Pr(u, l)) != null && S.writable) && (v = s(() => /* @__PURE__ */ le(void 0)), U(v, Ee(c)), t.set(l, v));
        else {
          f = v.v !== Et;
          var p = s(() => Ee(c));
          U(v, p);
        }
        var _ = Reflect.getOwnPropertyDescriptor(u, l);
        if (_ != null && _.set && _.set.call(d, c), !f) {
          if (r && typeof l == "string") {
            var A = (
              /** @type {Source<number>} */
              t.get("length")
            ), E = Number(l);
            Number.isInteger(E) && E >= A.v && U(A, E + 1);
          }
          _a(i);
        }
        return !0;
      },
      ownKeys(u) {
        o(i);
        var l = Reflect.ownKeys(u).filter((v) => {
          var f = t.get(v);
          return f === void 0 || f.v !== Et;
        });
        for (var [c, d] of t)
          d.v !== Et && !(c in u) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        ac();
      }
    }
  );
}
function ul(n) {
  try {
    if (n !== null && typeof n == "object" && rr in n)
      return n[rr];
  } catch {
  }
  return n;
}
function Dc(n, e) {
  return Object.is(ul(n), ul(e));
}
var ls, Bo, _d, yd, Cd;
function Lc() {
  if (ls === void 0) {
    ls = window, Bo = document, _d = /Firefox/.test(navigator.userAgent);
    var n = Element.prototype, e = Node.prototype, t = Text.prototype;
    yd = Pr(e, "firstChild").get, Cd = Pr(e, "nextSibling").get, ol(n) && (n.__click = void 0, n.__className = void 0, n.__attributes = null, n.__style = void 0, n.__e = void 0), ol(t) && (t.__t = void 0);
  }
}
function jr(n = "") {
  return document.createTextNode(n);
}
// @__NO_SIDE_EFFECTS__
function Qi(n) {
  return yd.call(n);
}
// @__NO_SIDE_EFFECTS__
function Ma(n) {
  return Cd.call(n);
}
function j(n, e) {
  return /* @__PURE__ */ Qi(n);
}
function q(n, e = !1) {
  {
    var t = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Qi(
        /** @type {Node} */
        n
      )
    );
    return t instanceof Comment && t.data === "" ? /* @__PURE__ */ Ma(t) : t;
  }
}
function K(n, e = 1, t = !1) {
  let r = n;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ma(r);
  return r;
}
function Rc(n) {
  n.textContent = "";
}
function Uo() {
  return !1;
}
function Oc(n, e) {
  if (e) {
    const t = document.body;
    n.autofocus = !0, Ir(() => {
      document.activeElement === t && n.focus();
    });
  }
}
let cl = !1;
function Mc() {
  cl || (cl = !0, document.addEventListener(
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
function Ss(n) {
  var e = Oe, t = Pe;
  un(null), ir(null);
  try {
    return n();
  } finally {
    un(e), ir(t);
  }
}
function Fc(n, e, t, r = t) {
  n.addEventListener(e, () => Ss(t));
  const i = n.__on_r;
  i ? n.__on_r = () => {
    i(), r(!0);
  } : n.__on_r = () => r(!0), Mc();
}
function Pc(n) {
  Pe === null && Oe === null && tc(), Oe !== null && Oe.f & Ln && Pe === null && ec(), Ai && $u();
}
function kc(n, e) {
  var t = e.last;
  t === null ? e.last = e.first = n : (t.next = n, n.prev = t, e.last = n);
}
function ar(n, e, t, r = !0) {
  var i = Pe;
  i !== null && i.f & Wn && (n |= Wn);
  var a = {
    ctx: $e,
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
      Aa(a), a.f |= ko;
    } catch (l) {
      throw wt(a), l;
    }
  else e !== null && mi(a);
  if (r) {
    var s = a;
    if (t && s.deps === null && s.teardown === null && s.nodes_start === null && s.first === s.last && // either `null`, or a singular child
    !(s.f & Ci) && (s = s.first), s !== null && (s.parent = i, i !== null && kc(s, i), Oe !== null && Oe.f & tn && !(n & Ur))) {
      var u = (
        /** @type {Derived} */
        Oe
      );
      (u.effects ?? (u.effects = [])).push(s);
    }
  }
  return a;
}
function Gc() {
  return Oe !== null && !Zn;
}
function ws(n) {
  const e = ar(Fo, null, !1);
  return Jt(e, zt), e.teardown = n, e;
}
function xe(n) {
  Pc();
  var e = (
    /** @type {Effect} */
    Pe.f
  ), t = !Oe && (e & yr) !== 0 && (e & ko) === 0;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      $e
    );
    (r.e ?? (r.e = [])).push(n);
  } else
    return Ad(n);
}
function Ad(n) {
  return ar(Mo | Ku, n, !1);
}
function Nc(n) {
  tr.ensure();
  const e = ar(Ur | Ci, n, !0);
  return () => {
    wt(e);
  };
}
function Zc(n) {
  tr.ensure();
  const e = ar(Ur | Ci, n, !0);
  return (t = {}) => new Promise((r) => {
    t.outro ? Gr(e, () => {
      wt(e), r(void 0);
    }) : (wt(e), r(void 0));
  });
}
function Fa(n) {
  return ar(Mo, n, !1);
}
function Hc(n) {
  return ar(Cs | Ci, n, !0);
}
function Ts(n, e = 0) {
  return ar(Fo | e, n, !0);
}
function ce(n, e = [], t = []) {
  gd(e, t, (r) => {
    ar(Fo, () => n(...r.map(o)), !0);
  });
}
function Vr(n, e = 0) {
  var t = ar(bi | e, n, !0);
  return t;
}
function jt(n, e = !0) {
  return ar(yr | Ci, n, !0, e);
}
function Ed(n) {
  var e = n.teardown;
  if (e !== null) {
    const t = Ai, r = Oe;
    vl(!0), un(null);
    try {
      e.call(null);
    } finally {
      vl(t), un(r);
    }
  }
}
function xd(n, e = !1) {
  var t = n.first;
  for (n.first = n.last = null; t !== null; ) {
    const i = t.ac;
    i !== null && Ss(() => {
      i.abort(Fi);
    });
    var r = t.next;
    t.f & Ur ? t.parent = null : wt(t, e), t = r;
  }
}
function Bc(n) {
  for (var e = n.first; e !== null; ) {
    var t = e.next;
    e.f & yr || wt(e), e = t;
  }
}
function wt(n, e = !0) {
  var t = !1;
  (e || n.f & qu) && n.nodes_start !== null && n.nodes_end !== null && (Uc(
    n.nodes_start,
    /** @type {TemplateNode} */
    n.nodes_end
  ), t = !0), xd(n, e && !t), ds(n, 0), Jt(n, _i);
  var r = n.transitions;
  if (r !== null)
    for (const a of r)
      a.stop();
  Ed(n);
  var i = n.parent;
  i !== null && i.first !== null && Sd(n), n.next = n.prev = n.teardown = n.ctx = n.deps = n.fn = n.nodes_start = n.nodes_end = n.ac = null;
}
function Uc(n, e) {
  for (; n !== null; ) {
    var t = n === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ma(n)
    );
    n.remove(), n = t;
  }
}
function Sd(n) {
  var e = n.parent, t = n.prev, r = n.next;
  t !== null && (t.next = r), r !== null && (r.prev = t), e !== null && (e.first === n && (e.first = r), e.last === n && (e.last = t));
}
function Gr(n, e) {
  var t = [];
  Wo(n, t, !0), wd(t, () => {
    wt(n), e && e();
  });
}
function wd(n, e) {
  var t = n.length;
  if (t > 0) {
    var r = () => --t || e();
    for (var i of n)
      i.out(r);
  } else
    e();
}
function Wo(n, e, t) {
  if (!(n.f & Wn)) {
    if (n.f ^= Wn, n.transitions !== null)
      for (const s of n.transitions)
        (s.is_global || t) && e.push(s);
    for (var r = n.first; r !== null; ) {
      var i = r.next, a = (r.f & yi) !== 0 || (r.f & yr) !== 0;
      Wo(r, e, a ? t : !1), r = i;
    }
  }
}
function Ds(n) {
  Td(n, !0);
}
function Td(n, e) {
  if (n.f & Wn) {
    n.f ^= Wn, n.f & zt || (Jt(n, pn), mi(n));
    for (var t = n.first; t !== null; ) {
      var r = t.next, i = (t.f & yi) !== 0 || (t.f & yr) !== 0;
      Td(t, i ? e : !1), t = r;
    }
    if (n.transitions !== null)
      for (const a of n.transitions)
        (a.is_global || e) && a.in();
  }
}
let Gi = !1;
function fl(n) {
  Gi = n;
}
let Ai = !1;
function vl(n) {
  Ai = n;
}
let Oe = null, Zn = !1;
function un(n) {
  Oe = n;
}
let Pe = null;
function ir(n) {
  Pe = n;
}
let Qt = null;
function Dd(n) {
  Oe !== null && (Qt === null ? Qt = [n] : Qt.push(n));
}
let qt = null, hn = 0, xn = null;
function Wc(n) {
  xn = n;
}
let Ld = 1, Ca = 0, fi = Ca;
function hl(n) {
  fi = n;
}
let Or = !1;
function Rd() {
  return ++Ld;
}
function Ls(n) {
  var v;
  var e = n.f;
  if (e & pn)
    return !0;
  if (e & Wr) {
    var t = n.deps, r = (e & Ln) !== 0;
    if (t !== null) {
      var i, a, s = (e & os) !== 0, u = r && Pe !== null && !Or, l = t.length;
      if ((s || u) && (Pe === null || !(Pe.f & _i))) {
        var c = (
          /** @type {Derived} */
          n
        ), d = c.parent;
        for (i = 0; i < l; i++)
          a = t[i], (s || !((v = a == null ? void 0 : a.reactions) != null && v.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        s && (c.f ^= os), u && d !== null && !(d.f & Ln) && (c.f ^= Ln);
      }
      for (i = 0; i < l; i++)
        if (a = t[i], Ls(
          /** @type {Derived} */
          a
        ) && pd(
          /** @type {Derived} */
          a
        ), a.wv > n.wv)
          return !0;
    }
    (!r || Pe !== null && !Or) && Jt(n, zt);
  }
  return !1;
}
function Od(n, e, t = !0) {
  var r = n.reactions;
  if (r !== null && !(Qt != null && Qt.includes(n)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a.f & tn ? Od(
        /** @type {Derived} */
        a,
        e,
        !1
      ) : e === a && (t ? Jt(a, pn) : a.f & zt && Jt(a, Wr), mi(
        /** @type {Effect} */
        a
      ));
    }
}
function Md(n) {
  var p;
  var e = qt, t = hn, r = xn, i = Oe, a = Or, s = Qt, u = $e, l = Zn, c = fi, d = n.f;
  qt = /** @type {null | Value[]} */
  null, hn = 0, xn = null, Or = (d & Ln) !== 0 && (Zn || !Gi || Oe === null), Oe = d & (yr | Ur) ? null : n, Qt = null, Yi(n.ctx), Zn = !1, fi = ++Ca, n.ac !== null && (Ss(() => {
    n.ac.abort(Fi);
  }), n.ac = null);
  try {
    n.f |= so;
    var v = (
      /** @type {Function} */
      n.fn
    ), f = v(), h = n.deps;
    if (qt !== null) {
      var g;
      if (ds(n, hn), h !== null && hn > 0)
        for (h.length = hn + qt.length, g = 0; g < qt.length; g++)
          h[hn + g] = qt[g];
      else
        n.deps = h = qt;
      if (!Or || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      d & tn && /** @type {import('#client').Derived} */
      n.reactions !== null)
        for (g = hn; g < h.length; g++)
          ((p = h[g]).reactions ?? (p.reactions = [])).push(n);
    } else h !== null && hn < h.length && (ds(n, hn), h.length = hn);
    if (Oa() && xn !== null && !Zn && h !== null && !(n.f & (tn | Wr | pn)))
      for (g = 0; g < /** @type {Source[]} */
      xn.length; g++)
        Od(
          xn[g],
          /** @type {Effect} */
          n
        );
    return i !== null && i !== n && (Ca++, xn !== null && (r === null ? r = xn : r.push(.../** @type {Source[]} */
    xn))), n.f & ci && (n.f ^= ci), f;
  } catch (_) {
    return ud(_);
  } finally {
    n.f ^= so, qt = e, hn = t, xn = r, Oe = i, Or = a, Qt = s, Yi(u), Zn = l, fi = c;
  }
}
function jc(n, e) {
  let t = e.reactions;
  if (t !== null) {
    var r = zu.call(t, n);
    if (r !== -1) {
      var i = t.length - 1;
      i === 0 ? t = e.reactions = null : (t[r] = t[i], t.pop());
    }
  }
  t === null && e.f & tn && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (qt === null || !qt.includes(e)) && (Jt(e, Wr), e.f & (Ln | os) || (e.f ^= os), md(
    /** @type {Derived} **/
    e
  ), ds(
    /** @type {Derived} **/
    e,
    0
  ));
}
function ds(n, e) {
  var t = n.deps;
  if (t !== null)
    for (var r = e; r < t.length; r++)
      jc(n, t[r]);
}
function Aa(n) {
  var e = n.f;
  if (!(e & _i)) {
    Jt(n, zt);
    var t = Pe, r = Gi;
    Pe = n, Gi = !0;
    try {
      e & bi ? Bc(n) : xd(n), Ed(n);
      var i = Md(n);
      n.teardown = typeof i == "function" ? i : null, n.wv = Ld;
      var a;
      td && cc && n.f & pn && n.deps;
    } finally {
      Gi = r, Pe = t;
    }
  }
}
async function Fd() {
  await Promise.resolve(), pc();
}
function o(n) {
  var e = n.f, t = (e & tn) !== 0;
  if (Oe !== null && !Zn) {
    var r = Pe !== null && (Pe.f & _i) !== 0;
    if (!r && !(Qt != null && Qt.includes(n))) {
      var i = Oe.deps;
      if (Oe.f & so)
        n.rv < Ca && (n.rv = Ca, qt === null && i !== null && i[hn] === n ? hn++ : qt === null ? qt = [n] : (!Or || !qt.includes(n)) && qt.push(n));
      else {
        (Oe.deps ?? (Oe.deps = [])).push(n);
        var a = n.reactions;
        a === null ? n.reactions = [Oe] : a.includes(Oe) || a.push(Oe);
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
  if (Ai) {
    if (kr.has(n))
      return kr.get(n);
    if (t) {
      s = /** @type {Derived} */
      n;
      var l = s.v;
      return (!(s.f & zt) && s.reactions !== null || Pd(s)) && (l = Ho(s)), kr.set(s, l), l;
    }
  } else if (t) {
    if (s = /** @type {Derived} */
    n, Mt != null && Mt.has(s))
      return Mt.get(s);
    Ls(s) && pd(s);
  }
  if (Mt != null && Mt.has(n))
    return Mt.get(n);
  if (n.f & ci)
    throw n.v;
  return n.v;
}
function Pd(n) {
  if (n.v === Et) return !0;
  if (n.deps === null) return !1;
  for (const e of n.deps)
    if (kr.has(e) || e.f & tn && Pd(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function zr(n) {
  var e = Zn;
  try {
    return Zn = !0, n();
  } finally {
    Zn = e;
  }
}
const Vc = -7169;
function Jt(n, e) {
  n.f = n.f & Vc | e;
}
function zc(n) {
  if (!(typeof n != "object" || !n || n instanceof EventTarget)) {
    if (rr in n)
      ho(n);
    else if (!Array.isArray(n))
      for (let e in n) {
        const t = n[e];
        typeof t == "object" && t && rr in t && ho(t);
      }
  }
}
function ho(n, e = /* @__PURE__ */ new Set()) {
  if (typeof n == "object" && n !== null && // We don't want to traverse DOM elements
  !(n instanceof EventTarget) && !e.has(n)) {
    e.add(n), n instanceof Date && n.getTime();
    for (let r in n)
      try {
        ho(n[r], e);
      } catch {
      }
    const t = ys(n);
    if (t !== Object.prototype && t !== Array.prototype && t !== Map.prototype && t !== Set.prototype && t !== Date.prototype) {
      const r = nd(t);
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
const kd = /* @__PURE__ */ new Set(), go = /* @__PURE__ */ new Set();
function jo(n, e, t, r = {}) {
  function i(a) {
    if (r.capture || pa.call(e, a), !a.cancelBubble)
      return Ss(() => t == null ? void 0 : t.call(this, a));
  }
  return n.startsWith("pointer") || n.startsWith("touch") || n === "wheel" ? Ir(() => {
    e.addEventListener(n, i, r);
  }) : e.addEventListener(n, i, r), i;
}
function Xc(n, e, t, r = {}) {
  var i = jo(e, n, t, r);
  return () => {
    n.removeEventListener(e, i, r);
  };
}
function Kt(n, e, t, r, i) {
  var a = { capture: r, passive: i }, s = jo(n, e, t, a);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && ws(() => {
    e.removeEventListener(n, s, a);
  });
}
function mt(n) {
  for (var e = 0; e < n.length; e++)
    kd.add(n[e]);
  for (var t of go)
    t(n);
}
let gl = null;
function pa(n) {
  var E;
  var e = this, t = (
    /** @type {Node} */
    e.ownerDocument
  ), r = n.type, i = ((E = n.composedPath) == null ? void 0 : E.call(n)) || [], a = (
    /** @type {null | Element} */
    i[0] || n.target
  );
  gl = n;
  var s = 0, u = gl === n && n.__root;
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
    ss(n, "currentTarget", {
      configurable: !0,
      get() {
        return a || t;
      }
    });
    var d = Oe, v = Pe;
    un(null), ir(null);
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
            if (Ra(p)) {
              var [_, ...A] = p;
              _.apply(a, [n, ...A]);
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
      n.__root = e, delete n.currentTarget, un(d), ir(v);
    }
  }
}
function Gd(n) {
  var e = document.createElement("template");
  return e.innerHTML = n.replaceAll("<!>", "<!---->"), e.content;
}
function Ji(n, e) {
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
    i === void 0 && (i = Gd(a ? n : "<!>" + n), t || (i = /** @type {Node} */
    /* @__PURE__ */ Qi(i)));
    var s = (
      /** @type {TemplateNode} */
      r || _d ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (t) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Qi(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Ji(u, l);
    } else
      Ji(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Yc(n, e, t = "svg") {
  var r = !n.startsWith("<!>"), i = `<${t}>${r ? n : "<!>" + n}</${t}>`, a;
  return () => {
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        Gd(i)
      ), u = (
        /** @type {Element} */
        /* @__PURE__ */ Qi(s)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ Qi(u);
    }
    var l = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return Ji(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function ft(n, e) {
  return /* @__PURE__ */ Yc(n, e, "svg");
}
function et(n = "") {
  {
    var e = jr(n + "");
    return Ji(e, e), e;
  }
}
function se() {
  var n = document.createDocumentFragment(), e = document.createComment(""), t = jr();
  return n.append(e, t), Ji(e, t), n;
}
function x(n, e) {
  n !== null && n.before(
    /** @type {Node} */
    e
  );
}
function qc(n) {
  return n.endsWith("capture") && n !== "gotpointercapture" && n !== "lostpointercapture";
}
const Kc = [
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
function Qc(n) {
  return Kc.includes(n);
}
const Jc = {
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
function $c(n) {
  return n = n.toLowerCase(), Jc[n] ?? n;
}
const ef = ["touchstart", "touchmove"];
function tf(n) {
  return ef.includes(n);
}
function Me(n, e) {
  var t = e == null ? "" : typeof e == "object" ? e + "" : e;
  t !== (n.__t ?? (n.__t = n.nodeValue)) && (n.__t = t, n.nodeValue = t + "");
}
function nf(n, e) {
  return rf(n, e);
}
const Di = /* @__PURE__ */ new Map();
function rf(n, { target: e, anchor: t, props: r = {}, events: i, context: a, intro: s = !0 }) {
  Lc();
  var u = /* @__PURE__ */ new Set(), l = (v) => {
    for (var f = 0; f < v.length; f++) {
      var h = v[f];
      if (!u.has(h)) {
        u.add(h);
        var g = tf(h);
        e.addEventListener(h, pa, { passive: g });
        var p = Di.get(h);
        p === void 0 ? (document.addEventListener(h, pa, { passive: g }), Di.set(h, 1)) : Di.set(h, p + 1);
      }
    }
  };
  l(Oo(kd)), go.add(l);
  var c = void 0, d = Zc(() => {
    var v = t ?? e.appendChild(jr());
    return yc(
      /** @type {TemplateNode} */
      v,
      {
        pending: () => {
        }
      },
      (f) => {
        if (a) {
          Ce({});
          var h = (
            /** @type {ComponentContext} */
            $e
          );
          h.c = a;
        }
        i && (r.$$events = i), c = n(f, r) || {}, a && Ae();
      }
    ), () => {
      var g;
      for (var f of u) {
        e.removeEventListener(f, pa);
        var h = (
          /** @type {number} */
          Di.get(f)
        );
        --h === 0 ? (document.removeEventListener(f, pa), Di.delete(f)) : Di.set(f, h);
      }
      go.delete(l), v !== t && ((g = v.parentNode) == null || g.removeChild(v));
    };
  });
  return af.set(c, d), c;
}
let af = /* @__PURE__ */ new WeakMap();
function _e(n, e, ...t) {
  var r = n, i = be, a;
  Vr(() => {
    i !== (i = e()) && (a && (wt(a), a = null), a = jt(() => (
      /** @type {SnippetFn} */
      i(r, ...t)
    )));
  }, yi);
}
function it(n) {
  $e === null && Go(), na && $e.l !== null ? sf($e).m.push(n) : xe(() => {
    const e = zr(n);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Fn(n) {
  $e === null && Go(), it(() => () => zr(n));
}
function sf(n) {
  var e = (
    /** @type {ComponentContextLegacy} */
    n.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
function ne(n, e, t = !1) {
  var r = n, i = null, a = null, s = Et, u = t ? yi : 0, l = !1;
  const c = (h, g = !0) => {
    l = !0, f(g, h);
  };
  var d = null;
  function v() {
    d !== null && (d.lastChild.remove(), r.before(d), d = null);
    var h = s ? i : a, g = s ? a : i;
    h && Ds(h), g && Gr(g, () => {
      s ? a = null : i = null;
    });
  }
  const f = (h, g) => {
    if (s !== (s = h)) {
      var p = Uo(), _ = r;
      if (p && (d = document.createDocumentFragment(), d.append(_ = jr())), s ? i ?? (i = g && jt(() => g(_))) : a ?? (a = g && jt(() => g(_))), p) {
        var A = (
          /** @type {Batch} */
          Ye
        ), E = s ? i : a, S = s ? a : i;
        E && A.skipped_effects.delete(E), S && A.skipped_effects.add(S), A.add_callback(v);
      } else
        v();
    }
  };
  Vr(() => {
    l = !1, e(c), l || f(null, null);
  }, u);
}
let vi = null;
function ml(n) {
  vi = n;
}
function br(n, e) {
  return e;
}
function of(n, e, t) {
  for (var r = n.items, i = [], a = e.length, s = 0; s < a; s++)
    Wo(e[s].e, i, !0);
  var u = a > 0 && i.length === 0 && t !== null;
  if (u) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      t.parentNode
    );
    Rc(l), l.append(
      /** @type {Element} */
      t
    ), r.clear(), Xn(n, e[0].prev, e[a - 1].next);
  }
  wd(i, () => {
    for (var c = 0; c < a; c++) {
      var d = e[c];
      u || (r.delete(d.k), Xn(n, d.prev, d.next)), wt(d.e, !u);
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
    s = c.appendChild(jr());
  }
  var d = null, v = !1, f = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ Zo(() => {
    var A = t();
    return Ra(A) ? A : A == null ? [] : Oo(A);
  }), g, p;
  function _() {
    lf(
      p,
      g,
      u,
      f,
      s,
      i,
      e,
      r,
      t
    ), a !== null && (g.length === 0 ? d ? Ds(d) : d = jt(() => a(s)) : d !== null && Gr(d, () => {
      d = null;
    }));
  }
  Vr(() => {
    p ?? (p = /** @type {Effect} */
    Pe), g = /** @type {V[]} */
    o(h);
    var A = g.length;
    if (!(v && A === 0)) {
      v = A === 0;
      var E, S, I, w;
      if (Uo()) {
        var b = /* @__PURE__ */ new Set(), y = (
          /** @type {Batch} */
          Ye
        );
        for (S = 0; S < A; S += 1) {
          I = g[S], w = r(I, S);
          var C = u.items.get(w) ?? f.get(w);
          C ? e & 3 && Nd(C, I, S, e) : (E = Zd(
            null,
            u,
            null,
            null,
            I,
            w,
            S,
            i,
            e,
            t,
            !0
          ), f.set(w, E)), b.add(w);
        }
        for (const [T, D] of u.items)
          b.has(T) || y.skipped_effects.add(D.e);
        y.add_callback(_);
      } else
        _();
      o(h);
    }
  });
}
function lf(n, e, t, r, i, a, s, u, l) {
  var fe, O, J, $;
  var c = (s & 8) !== 0, d = (s & 3) !== 0, v = e.length, f = t.items, h = t.first, g = h, p, _ = null, A, E = [], S = [], I, w, b, y;
  if (c)
    for (y = 0; y < v; y += 1)
      I = e[y], w = u(I, y), b = f.get(w), b !== void 0 && ((fe = b.a) == null || fe.measure(), (A ?? (A = /* @__PURE__ */ new Set())).add(b));
  for (y = 0; y < v; y += 1) {
    if (I = e[y], w = u(I, y), b = f.get(w), b === void 0) {
      var C = r.get(w);
      if (C !== void 0) {
        r.delete(w), f.set(w, C);
        var T = _ ? _.next : g;
        Xn(t, _, C), Xn(t, C, T), Xs(C, T, i), _ = C;
      } else {
        var D = g ? (
          /** @type {TemplateNode} */
          g.e.nodes_start
        ) : i;
        _ = Zd(
          D,
          t,
          _,
          _ === null ? t.first : _.next,
          I,
          w,
          y,
          a,
          s,
          l
        );
      }
      f.set(w, _), E = [], S = [], g = _.next;
      continue;
    }
    if (d && Nd(b, I, y, s), b.e.f & Wn && (Ds(b.e), c && ((O = b.a) == null || O.unfix(), (A ?? (A = /* @__PURE__ */ new Set())).delete(b))), b !== g) {
      if (p !== void 0 && p.has(b)) {
        if (E.length < S.length) {
          var M = S[0], F;
          _ = M.prev;
          var P = E[0], re = E[E.length - 1];
          for (F = 0; F < E.length; F += 1)
            Xs(E[F], M, i);
          for (F = 0; F < S.length; F += 1)
            p.delete(S[F]);
          Xn(t, P.prev, re.next), Xn(t, _, P), Xn(t, re, M), g = M, _ = re, y -= 1, E = [], S = [];
        } else
          p.delete(b), Xs(b, g, i), Xn(t, b.prev, b.next), Xn(t, b, _ === null ? t.first : _.next), Xn(t, _, b), _ = b;
        continue;
      }
      for (E = [], S = []; g !== null && g.k !== w; )
        g.e.f & Wn || (p ?? (p = /* @__PURE__ */ new Set())).add(g), S.push(g), g = g.next;
      if (g === null)
        continue;
      b = g;
    }
    E.push(b), _ = b, g = b.next;
  }
  if (g !== null || p !== void 0) {
    for (var W = p === void 0 ? [] : Oo(p); g !== null; )
      g.e.f & Wn || W.push(g), g = g.next;
    var N = W.length;
    if (N > 0) {
      var H = s & 4 && v === 0 ? i : null;
      if (c) {
        for (y = 0; y < N; y += 1)
          (J = W[y].a) == null || J.measure();
        for (y = 0; y < N; y += 1)
          ($ = W[y].a) == null || $.fix();
      }
      of(t, W, H);
    }
  }
  c && Ir(() => {
    var ve;
    if (A !== void 0)
      for (b of A)
        (ve = b.a) == null || ve.apply();
  }), n.first = t.first && t.first.e, n.last = _ && _.e;
  for (var ee of r.values())
    wt(ee.e);
  r.clear();
}
function Nd(n, e, t, r) {
  r & 1 && Ki(n.v, e), r & 2 ? Ki(
    /** @type {Value<number>} */
    n.i,
    t
  ) : n.i = t;
}
function Zd(n, e, t, r, i, a, s, u, l, c, d) {
  var v = vi, f = (l & 1) !== 0, h = (l & 16) === 0, g = f ? h ? /* @__PURE__ */ Id(i, !1, !1) : pi(i) : i, p = l & 2 ? pi(s) : s, _ = {
    i: p,
    v: g,
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
      var A = document.createDocumentFragment();
      A.append(n = jr());
    }
    return _.e = jt(() => u(
      /** @type {Node} */
      n,
      g,
      p,
      c
    ), uc), _.e.prev = t && t.e, _.e.next = r && r.e, t === null ? d || (e.first = _) : (t.next = _, t.e.next = _.e), r !== null && (r.prev = _, r.e.prev = _.e), _;
  } finally {
    vi = v;
  }
}
function Xs(n, e, t) {
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
      /* @__PURE__ */ Ma(a)
    );
    i.before(a), a = s;
  }
}
function Xn(n, e, t) {
  e === null ? n.first = t : (e.next = t, e.e.next = t && t.e), t !== null && (t.prev = e, t.e.prev = e && e.e);
}
function df(n, e, t, r, i) {
  var u;
  var a = (u = e.$$slots) == null ? void 0 : u[t], s = !1;
  a === !0 && (a = e.children, s = !0), a === void 0 || a(n, s ? () => r : r);
}
function Pa(n, e, t) {
  var r = n, i, a, s = null, u = null;
  function l() {
    a && (Gr(a), a = null), s && (s.lastChild.remove(), r.before(s), s = null), a = u, u = null;
  }
  Vr(() => {
    if (i !== (i = e())) {
      var c = Uo();
      if (i) {
        var d = r;
        c && (s = document.createDocumentFragment(), s.append(d = jr()), a && Ye.skipped_effects.add(a)), u = jt(() => t(d, i));
      }
      c ? Ye.add_callback(l) : l();
    }
  }, yi);
}
function mo(n, e, t, r, i, a) {
  var s, u, l = null, c = (
    /** @type {TemplateNode} */
    n
  ), d, v = vi;
  Vr(() => {
    const f = e() || null;
    var h = f === "svg" ? ju : null;
    if (f !== s) {
      var g = vi;
      ml(v), d && (f === null ? Gr(d, () => {
        d = null, u = null;
      }) : f === u ? Ds(d) : wt(d)), f && f !== u && (d = jt(() => {
        if (l = h ? document.createElementNS(h, f) : document.createElement(f), Ji(l, l), r) {
          var p = (
            /** @type {TemplateNode} */
            l.appendChild(jr())
          );
          r(l, p);
        }
        Pe.nodes_end = l, c.before(l);
      })), s = f, s && (u = s), ml(g);
    }
  }, yi);
}
function De(n, e, t) {
  Fa(() => {
    var r = zr(() => e(n, t == null ? void 0 : t()) || {});
    if (t && (r != null && r.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      Ts(() => {
        var s = t();
        zc(s), i && No(a, s) && (a = s, r.update(s));
      }), i = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function uf(n, e) {
  var t = void 0, r;
  Vr(() => {
    t !== (t = e()) && (r && (wt(r), r = null), t && (r = jt(() => {
      Fa(() => (
        /** @type {(node: Element) => void} */
        t(n)
      ));
    })));
  });
}
function Hd(n) {
  var e, t, r = "";
  if (typeof n == "string" || typeof n == "number") r += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var i = n.length;
    for (e = 0; e < i; e++) n[e] && (t = Hd(n[e])) && (r && (r += " "), r += t);
  } else for (t in n) n[t] && (r && (r += " "), r += t);
  return r;
}
function cf() {
  for (var n, e, t = 0, r = "", i = arguments.length; t < i; t++) (n = arguments[t]) && (e = Hd(n)) && (r && (r += " "), r += e);
  return r;
}
function Bd(n) {
  return typeof n == "object" ? cf(n) : n ?? "";
}
const pl = [...` 	
\r\f \v\uFEFF`];
function ff(n, e, t) {
  var r = n == null ? "" : "" + n;
  if (e && (r = r ? r + " " + e : e), t) {
    for (var i in t)
      if (t[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var a = i.length, s = 0; (s = r.indexOf(i, s)) >= 0; ) {
          var u = s + a;
          (s === 0 || pl.includes(r[s - 1])) && (u === r.length || pl.includes(r[u])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(u + 1) : s = u;
        }
  }
  return r === "" ? null : r;
}
function Il(n, e = !1) {
  var t = e ? " !important;" : ";", r = "";
  for (var i in n) {
    var a = n[i];
    a != null && a !== "" && (r += " " + i + ": " + a + t);
  }
  return r;
}
function Ys(n) {
  return n[0] !== "-" || n[1] !== "-" ? n.toLowerCase() : n;
}
function vf(n, e) {
  if (e) {
    var t = "", r, i;
    if (Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, n) {
      n = String(n).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, s = 0, u = !1, l = [];
      r && l.push(...Object.keys(r).map(Ys)), i && l.push(...Object.keys(i).map(Ys));
      var c = 0, d = -1;
      const p = n.length;
      for (var v = 0; v < p; v++) {
        var f = n[v];
        if (u ? f === "/" && n[v - 1] === "*" && (u = !1) : a ? a === f && (a = !1) : f === "/" && n[v + 1] === "*" ? u = !0 : f === '"' || f === "'" ? a = f : f === "(" ? s++ : f === ")" && s--, !u && a === !1 && s === 0) {
          if (f === ":" && d === -1)
            d = v;
          else if (f === ";" || v === p - 1) {
            if (d !== -1) {
              var h = Ys(n.substring(c, d).trim());
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
    return r && (t += Il(r)), i && (t += Il(i, !0)), t = t.trim(), t === "" ? null : t;
  }
  return n == null ? null : String(n);
}
function _r(n, e, t, r, i, a) {
  var s = n.__className;
  if (s !== t || s === void 0) {
    var u = ff(t, r, a);
    u == null ? n.removeAttribute("class") : e ? n.className = u : n.setAttribute("class", u), n.__className = t;
  } else if (a && i !== a)
    for (var l in a) {
      var c = !!a[l];
      (i == null || c !== !!i[l]) && n.classList.toggle(l, c);
    }
  return a;
}
function qs(n, e = {}, t, r) {
  for (var i in t) {
    var a = t[i];
    e[i] !== a && (t[i] == null ? n.style.removeProperty(i) : n.style.setProperty(i, a, r));
  }
}
function tt(n, e, t, r) {
  var i = n.__style;
  if (i !== e) {
    var a = vf(e, r);
    a == null ? n.removeAttribute("style") : n.style.cssText = a, n.__style = e;
  } else r && (Array.isArray(r) ? (qs(n, t == null ? void 0 : t[0], r[0]), qs(n, t == null ? void 0 : t[1], r[1], "important")) : qs(n, t, r));
  return r;
}
function po(n, e, t = !1) {
  if (n.multiple) {
    if (e == null)
      return;
    if (!Ra(e))
      return lc();
    for (var r of n.options)
      r.selected = e.includes(bl(r));
    return;
  }
  for (r of n.options) {
    var i = bl(r);
    if (Dc(i, e)) {
      r.selected = !0;
      return;
    }
  }
  (!t || e !== void 0) && (n.selectedIndex = -1);
}
function hf(n) {
  var e = new MutationObserver(() => {
    po(n, n.__value);
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
  }), ws(() => {
    e.disconnect();
  });
}
function bl(n) {
  return "__value" in n ? n.__value : n.value;
}
const ca = Symbol("class"), fa = Symbol("style"), Ud = Symbol("is custom element"), Wd = Symbol("is html");
function _l(n, e) {
  var t = Vo(n);
  t.value === (t.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  n.value === e && (e !== 0 || n.nodeName !== "PROGRESS") || (n.value = e ?? "");
}
function gf(n, e) {
  e ? n.hasAttribute("selected") || n.setAttribute("selected", "") : n.removeAttribute("selected");
}
function Tt(n, e, t, r) {
  var i = Vo(n);
  i[e] !== (i[e] = t) && (e === "loading" && (n[Qu] = t), t == null ? n.removeAttribute(e) : typeof t != "string" && jd(n).includes(e) ? n[e] = t : n.setAttribute(e, t));
}
function mf(n, e, t, r, i = !1, a = !1) {
  var s = Vo(n), u = s[Ud], l = !s[Wd], c = e || {}, d = n.tagName === "OPTION";
  for (var v in e)
    v in t || (t[v] = null);
  t.class ? t.class = Bd(t.class) : t[ca] && (t.class = null), t[fa] && (t.style ?? (t.style = null));
  var f = jd(n);
  for (const S in t) {
    let I = t[S];
    if (d && S === "value" && I == null) {
      n.value = n.__value = "", c[S] = I;
      continue;
    }
    if (S === "class") {
      var h = n.namespaceURI === "http://www.w3.org/1999/xhtml";
      _r(n, h, I, r, e == null ? void 0 : e[ca], t[ca]), c[S] = I, c[ca] = t[ca];
      continue;
    }
    if (S === "style") {
      tt(n, I, e == null ? void 0 : e[fa], t[fa]), c[S] = I, c[fa] = t[fa];
      continue;
    }
    var g = c[S];
    if (!(I === g && !(I === void 0 && n.hasAttribute(S)))) {
      c[S] = I;
      var p = S[0] + S[1];
      if (p !== "$$")
        if (p === "on") {
          const w = {}, b = "$$" + S;
          let y = S.slice(2);
          var _ = Qc(y);
          if (qc(y) && (y = y.slice(0, -7), w.capture = !0), !_ && g) {
            if (I != null) continue;
            n.removeEventListener(y, c[b], w), c[b] = null;
          }
          if (I != null)
            if (_)
              n[`__${y}`] = I, mt([y]);
            else {
              let C = function(T) {
                c[S].call(this, T);
              };
              c[b] = jo(y, n, C, w);
            }
          else _ && (n[`__${y}`] = void 0);
        } else if (S === "style")
          Tt(n, S, I);
        else if (S === "autofocus")
          Oc(
            /** @type {HTMLElement} */
            n,
            !!I
          );
        else if (!u && (S === "__value" || S === "value" && I != null))
          n.value = n.__value = I;
        else if (S === "selected" && d)
          gf(
            /** @type {HTMLOptionElement} */
            n,
            I
          );
        else {
          var A = S;
          l || (A = $c(A));
          var E = A === "defaultValue" || A === "defaultChecked";
          if (I == null && !u && !E)
            if (s[S] = null, A === "value" || A === "checked") {
              let w = (
                /** @type {HTMLInputElement} */
                n
              );
              const b = e === void 0;
              if (A === "value") {
                let y = w.defaultValue;
                w.removeAttribute(A), w.defaultValue = y, w.value = w.__value = b ? y : null;
              } else {
                let y = w.defaultChecked;
                w.removeAttribute(A), w.defaultChecked = y, w.checked = b ? y : !1;
              }
            } else
              n.removeAttribute(S);
          else E || f.includes(A) && (u || typeof I != "string") ? (n[A] = I, A in s && (s[A] = Et)) : typeof I != "function" && Tt(n, A, I);
        }
    }
  }
  return c;
}
function He(n, e, t = [], r = [], i, a = !1, s = !1) {
  gd(t, r, (u) => {
    var l = void 0, c = {}, d = n.nodeName === "SELECT", v = !1;
    if (Vr(() => {
      var h = e(...u.map(o)), g = mf(
        n,
        l,
        h,
        i,
        a,
        s
      );
      v && d && "value" in h && po(
        /** @type {HTMLSelectElement} */
        n,
        h.value
      );
      for (let _ of Object.getOwnPropertySymbols(c))
        h[_] || wt(c[_]);
      for (let _ of Object.getOwnPropertySymbols(h)) {
        var p = h[_];
        _.description === Vu && (!l || p !== l[_]) && (c[_] && wt(c[_]), c[_] = jt(() => uf(n, () => p))), g[_] = p;
      }
      l = g;
    }), d) {
      var f = (
        /** @type {HTMLSelectElement} */
        n
      );
      Fa(() => {
        po(
          f,
          /** @type {Record<string | symbol, any>} */
          l.value,
          !0
        ), hf(f);
      });
    }
    v = !0;
  });
}
function Vo(n) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    n.__attributes ?? (n.__attributes = {
      [Ud]: n.nodeName.includes("-"),
      [Wd]: n.namespaceURI === Wu
    })
  );
}
var yl = /* @__PURE__ */ new Map();
function jd(n) {
  var e = n.getAttribute("is") || n.nodeName, t = yl.get(e);
  if (t) return t;
  yl.set(e, t = []);
  for (var r, i = n, a = Element.prototype; a !== i; ) {
    r = nd(i);
    for (var s in r)
      r[s].set && t.push(s);
    i = ys(i);
  }
  return t;
}
const pf = () => performance.now(), gr = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (n) => requestAnimationFrame(n)
  ),
  now: () => pf(),
  tasks: /* @__PURE__ */ new Set()
};
function Vd() {
  const n = gr.now();
  gr.tasks.forEach((e) => {
    e.c(n) || (gr.tasks.delete(e), e.f());
  }), gr.tasks.size !== 0 && gr.tick(Vd);
}
function If(n) {
  let e;
  return gr.tasks.size === 0 && gr.tick(Vd), {
    promise: new Promise((t) => {
      gr.tasks.add(e = { c: n, f: t });
    }),
    abort() {
      gr.tasks.delete(e);
    }
  };
}
function bf(n) {
  if (n === "float") return "cssFloat";
  if (n === "offset") return "cssOffset";
  if (n.startsWith("--")) return n;
  const e = n.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (t) => t[0].toUpperCase() + t.slice(1)
  ).join("");
}
function Cl(n) {
  const e = {}, t = n.split(";");
  for (const r of t) {
    const [i, a] = r.split(":");
    if (!i || a === void 0) break;
    const s = bf(i.trim());
    e[s] = a.trim();
  }
  return e;
}
const _f = (n) => n;
function Rs(n, e, t) {
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
        s = zd(this.element, l, void 0, 1, () => {
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
function zd(n, e, t, r, i) {
  if (Mi(e)) {
    var a, s = !1;
    return Ir(() => {
      if (!s) {
        var p = e({ direction: "in" });
        a = zd(n, p, t, r, i);
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
      abort: be,
      deactivate: be,
      reset: be,
      t: () => r
    };
  const { delay: u = 0, css: l, tick: c, easing: d = _f } = e;
  var v = [];
  if (c && c(0, 1), l) {
    var f = Cl(l(0, 1));
    v.push(f, f);
  }
  var h = () => 1 - r, g = n.animate(v, { duration: u, fill: "forwards" });
  return g.onfinish = () => {
    g.cancel();
    var p = 1 - r, _ = r - p, A = (
      /** @type {number} */
      e.duration * Math.abs(_)
    ), E = [];
    if (A > 0) {
      var S = !1;
      if (l)
        for (var I = Math.ceil(A / 16.666666666666668), w = 0; w <= I; w += 1) {
          var b = p + _ * d(w / I), y = Cl(l(b, 1 - b));
          E.push(y), S || (S = y.overflow === "hidden");
        }
      S && (n.style.overflow = "hidden"), h = () => {
        var C = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          g.currentTime
        );
        return p + _ * d(C / A);
      }, c && If(() => {
        if (g.playState !== "running") return !1;
        var C = h();
        return c(C, 1 - C), !0;
      });
    }
    g = n.animate(E, { duration: A, fill: "forwards" }), g.onfinish = () => {
      h = () => r, c == null || c(r, 1 - r), i();
    };
  }, {
    abort: () => {
      g && (g.cancel(), g.effect = null, g.onfinish = be);
    },
    deactivate: () => {
      i = be;
    },
    reset: () => {
    },
    t: () => h()
  };
}
function yf(n, e, t = e) {
  var r = /* @__PURE__ */ new WeakSet();
  Fc(n, "input", async (i) => {
    var a = i ? n.defaultValue : n.value;
    if (a = Ks(n) ? Qs(a) : a, t(a), Ye !== null && r.add(Ye), await Fd(), a !== (a = e())) {
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
  zr(e) == null && n.value && (t(Ks(n) ? Qs(n.value) : n.value), Ye !== null && r.add(Ye)), Ts(() => {
    var i = e();
    if (n === document.activeElement) {
      var a = (
        /** @type {Batch} */
        es ?? Ye
      );
      if (r.has(a))
        return;
    }
    Ks(n) && i === Qs(n.value) || n.type === "date" && !i && !n.value || i !== n.value && (n.value = i ?? "");
  });
}
function Ks(n) {
  var e = n.type;
  return e === "number" || e === "range";
}
function Qs(n) {
  return n === "" ? null : +n;
}
function Al(n, e) {
  return n === e || (n == null ? void 0 : n[rr]) === e;
}
function Se(n = {}, e, t, r) {
  return Fa(() => {
    var i, a;
    return Ts(() => {
      i = a, a = [], zr(() => {
        n !== t(...a) && (e(n, ...a), i && Al(t(...i), n) && e(null, ...i));
      });
    }), () => {
      Ir(() => {
        a && Al(t(...a), n) && e(null, ...a);
      });
    };
  }), n;
}
function Xd(n, e, t) {
  if (n == null)
    return e(void 0), be;
  const r = zr(
    () => n.subscribe(
      e,
      // @ts-expect-error
      t
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const Li = [];
function jn(n, e = be) {
  let t = null;
  const r = /* @__PURE__ */ new Set();
  function i(u) {
    if (No(n, u) && (n = u, t)) {
      const l = !Li.length;
      for (const c of r)
        c[1](), Li.push(c, n);
      if (l) {
        for (let c = 0; c < Li.length; c += 2)
          Li[c][0](Li[c + 1]);
        Li.length = 0;
      }
    }
  }
  function a(u) {
    i(u(
      /** @type {T} */
      n
    ));
  }
  function s(u, l = be) {
    const c = [u, l];
    return r.add(c), r.size === 1 && (t = e(i, a) || be), u(
      /** @type {T} */
      n
    ), () => {
      r.delete(c), r.size === 0 && t && (t(), t = null);
    };
  }
  return { set: i, update: a, subscribe: s };
}
function Cf(n) {
  let e;
  return Xd(n, (t) => e = t)(), e;
}
let Va = !1, Io = Symbol();
function Ii(n, e, t) {
  const r = t[e] ?? (t[e] = {
    store: null,
    source: /* @__PURE__ */ Id(void 0),
    unsubscribe: be
  });
  if (r.store !== n && !(Io in t))
    if (r.unsubscribe(), r.store = n ?? null, n == null)
      r.source.v = void 0, r.unsubscribe = be;
    else {
      var i = !0;
      r.unsubscribe = Xd(n, (a) => {
        i ? r.source.v = a : U(r.source, a);
      }), i = !1;
    }
  return n && Io in t ? Cf(n) : o(r.source);
}
function nr(n, e) {
  return n.set(e), e;
}
function Ei() {
  const n = {};
  function e() {
    ws(() => {
      for (var t in n)
        n[t].unsubscribe();
      ss(n, Io, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [n, e];
}
function Af(n) {
  var e = Va;
  try {
    return Va = !1, [n(), Va];
  } finally {
    Va = e;
  }
}
const Ef = {
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
    Ef
  );
}
const xf = {
  get(n, e) {
    let t = n.props.length;
    for (; t--; ) {
      let r = n.props[t];
      if (Mi(r) && (r = r()), typeof r == "object" && r !== null && e in r) return r[e];
    }
  },
  set(n, e, t) {
    let r = n.props.length;
    for (; r--; ) {
      let i = n.props[r];
      Mi(i) && (i = i());
      const a = Pr(i, e);
      if (a && a.set)
        return a.set(t), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(n, e) {
    let t = n.props.length;
    for (; t--; ) {
      let r = n.props[t];
      if (Mi(r) && (r = r()), typeof r == "object" && r !== null && e in r) {
        const i = Pr(r, e);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(n, e) {
    if (e === rr || e === ad) return !1;
    for (let t of n.props)
      if (Mi(t) && (t = t()), t != null && e in t) return !0;
    return !1;
  },
  ownKeys(n) {
    const e = [];
    for (let t of n.props)
      if (Mi(t) && (t = t()), !!t) {
        for (const r in t)
          e.includes(r) || e.push(r);
        for (const r of Object.getOwnPropertySymbols(t))
          e.includes(r) || e.push(r);
      }
    return e;
  }
};
function Ke(...n) {
  return new Proxy({ props: n }, xf);
}
function m(n, e, t, r) {
  var S;
  var i = !na || (t & 2) !== 0, a = (t & 8) !== 0, s = (t & 16) !== 0, u = (
    /** @type {V} */
    r
  ), l = !0, c = () => (l && (l = !1, u = s ? zr(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), u), d;
  if (a) {
    var v = rr in n || ad in n;
    d = ((S = Pr(n, e)) == null ? void 0 : S.set) ?? (v && e in n ? (I) => n[e] = I : void 0);
  }
  var f, h = !1;
  a ? [f, h] = Af(() => (
    /** @type {V} */
    n[e]
  )) : f = /** @type {V} */
  n[e], f === void 0 && r !== void 0 && (f = c(), d && (i && rc(), d(f)));
  var g;
  if (i ? g = () => {
    var I = (
      /** @type {V} */
      n[e]
    );
    return I === void 0 ? c() : (l = !0, I);
  } : g = () => {
    var I = (
      /** @type {V} */
      n[e]
    );
    return I !== void 0 && (u = /** @type {V} */
    void 0), I === void 0 ? u : I;
  }, i && !(t & 4))
    return g;
  if (d) {
    var p = n.$$legacy;
    return (
      /** @type {() => V} */
      function(I, w) {
        return arguments.length > 0 ? ((!i || !w || p || h) && d(w ? g() : I), I) : g();
      }
    );
  }
  var _ = !1, A = (t & 1 ? xs : Zo)(() => (_ = !1, g()));
  a && o(A);
  var E = (
    /** @type {Effect} */
    Pe
  );
  return (
    /** @type {() => V} */
    function(I, w) {
      if (arguments.length > 0) {
        const b = w ? o(A) : i && a ? Ee(I) : I;
        return U(A, b), _ = !0, u !== void 0 && (u = b), I;
      }
      return Ai && _ || E.f & _i ? A.v : o(A);
    }
  );
}
const Sf = "5";
var ed;
typeof window < "u" && ((ed = window.__svelte ?? (window.__svelte = {})).v ?? (ed.v = /* @__PURE__ */ new Set())).add(Sf);
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
function Ea(n, e) {
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
class ra {
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
    t in a || (a[t] = /* @__PURE__ */ new Map()), a[t].set(r, Xc(e, t, r, i));
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
var za;
function wf(n, e) {
  e === void 0 && (e = !1);
  var t = n.CSS, r = za;
  if (typeof za == "boolean" && !e)
    return za;
  var i = t && typeof t.supports == "function";
  if (!i)
    return !1;
  var a = t.supports("--css-vars", "yes"), s = t.supports("(--css-vars: yes)") && t.supports("color", "#00000000");
  return r = a || s, e || (za = r), r;
}
function Tf(n, e, t) {
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
var bo = function(n, e) {
  return bo = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
  }, bo(n, e);
};
function In(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  bo(n, e);
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
function Df(n, e, t, r) {
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
function Lf(n, e) {
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
function El(n, e) {
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
function Rf(n, e, t) {
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
function Of(n) {
  return n === void 0 && (n = window), Mf(n) ? { passive: !0 } : !1;
}
function Mf(n) {
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
const Yd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: Of
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
function Ff(n, e) {
  if (n.closest)
    return n.closest(e);
  for (var t = n; t; ) {
    if (qd(t, e))
      return t;
    t = t.parentElement;
  }
  return null;
}
function qd(n, e) {
  var t = n.matches || n.webkitMatchesSelector || n.msMatchesSelector;
  return t.call(n, e);
}
function Pf(n) {
  var e = n;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var t = e.cloneNode(!0);
  t.style.setProperty("position", "absolute"), t.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(t);
  var r = t.scrollWidth;
  return document.documentElement.removeChild(t), r;
}
const ka = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: Ff,
  estimateScrollWidth: Pf,
  matches: qd
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
var kf = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Gf = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, xl = {
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
var Sl = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], wl = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Xa = [], Nf = (
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
        return kf;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Gf;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return xl;
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
          for (var a = Bn(Sl), s = a.next(); !s.done; s = a.next()) {
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
          for (var a = Bn(wl), s = a.next(); !s.done; s = a.next()) {
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
        for (var i = Bn(Sl), a = i.next(); !a.done; a = i.next()) {
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
        for (var i = Bn(wl), a = i.next(); !a.done; a = i.next()) {
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
            var u = t !== void 0 && Xa.length > 0 && Xa.some(function(l) {
              return r.adapter.containsEventTarget(l);
            });
            if (u) {
              this.resetActivationState();
              return;
            }
            t !== void 0 && (Xa.push(t.target), this.registerDeactivationHandlers(t)), i.wasElementMadeActive = this.checkElementMadeActive(t), i.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Xa = [], !i.wasElementMadeActive && t !== void 0 && (t.key === " " || t.keyCode === 32) && (i.wasElementMadeActive = r.checkElementMadeActive(t), i.wasElementMadeActive && r.animateActivation()), i.wasElementMadeActive || (r.activationState = r.defaultActivationState());
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
      i ? a = Tf(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
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
      }, xl.FG_DEACTIVATION_MS));
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
var Js = "mdc-dom-focus-sentinel", Zf = (
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
      [].slice.call(this.root.querySelectorAll("." + Js)).forEach(function(e) {
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
        var i = r.getAttribute("aria-disabled") === "true" || r.getAttribute("disabled") != null || r.getAttribute("hidden") != null || r.getAttribute("aria-hidden") === "true", a = r.tabIndex >= 0 && r.getBoundingClientRect().width > 0 && !r.classList.contains(Js) && !i, s = !1;
        if (a) {
          var u = getComputedStyle(r);
          s = u.display === "none" || u.visibility === "hidden";
        }
        return a && !s;
      });
    }, n.prototype.createSentinel = function() {
      var e = document.createElement("div");
      return e.setAttribute("tabindex", "0"), e.setAttribute("aria-hidden", "true"), e.classList.add(Js), e;
    }, n;
  }()
);
const Hf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FocusTrap: Zf
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
var Xr = /* @__PURE__ */ new Set();
Xr.add(Le.PAGE_UP);
Xr.add(Le.PAGE_DOWN);
Xr.add(Le.END);
Xr.add(Le.HOME);
Xr.add(Le.ARROW_LEFT);
Xr.add(Le.ARROW_UP);
Xr.add(Le.ARROW_RIGHT);
Xr.add(Le.ARROW_DOWN);
function bt(n) {
  var e = n.key;
  if (nn.has(e))
    return e;
  var t = rn.get(n.keyCode);
  return t || Le.UNKNOWN;
}
const { applyPassive: Tl } = Yd, { matches: Bf } = ka;
function Gn(n, { ripple: e = !0, surface: t = !1, unbounded: r = !1, disabled: i = !1, color: a, active: s, rippleElement: u, eventTarget: l, activeTarget: c, addClass: d = (g) => n.classList.add(g), removeClass: v = (g) => n.classList.remove(g), addStyle: f = (g, p) => n.style.setProperty(g, p), initPromise: h = Promise.resolve() } = {}) {
  let g, p = new ra(), _ = ye("SMUI:addLayoutListener"), A, E = s, S = l, I = c;
  function w() {
    t ? (d("mdc-ripple-surface"), a === "primary" ? (d("smui-ripple-surface--primary"), v("smui-ripple-surface--secondary")) : a === "secondary" ? (v("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : (v("smui-ripple-surface--primary"), v("smui-ripple-surface--secondary"))) : (v("mdc-ripple-surface"), v("smui-ripple-surface--primary"), v("smui-ripple-surface--secondary")), g && E !== s && (E = s, s ? g.activate() : s === !1 && g.deactivate()), e && !g ? (g = new Nf({
      addClass: d,
      browserSupportsCssVars: () => wf(window),
      computeBoundingRect: () => (u || n).getBoundingClientRect(),
      containsEventTarget: (y) => n.contains(y),
      deregisterDocumentInteractionHandler: (y, C) => p.off(document.documentElement, y, C),
      deregisterInteractionHandler: (y, C) => p.off(l || n, y, C),
      deregisterResizeHandler: (y) => window.removeEventListener("resize", y),
      getWindowPageOffset: () => {
        var y, C;
        return {
          x: (y = window.pageXOffset) !== null && y !== void 0 ? y : window.scrollX,
          y: (C = window.pageYOffset) !== null && C !== void 0 ? C : window.scrollY
        };
      },
      isSurfaceActive: () => s ?? Bf(c || n, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!r,
      registerDocumentInteractionHandler: (y, C) => {
        const T = Tl();
        p.on(document.documentElement, y, C, typeof T == "boolean" ? { capture: T } : T);
      },
      registerInteractionHandler: (y, C) => {
        const T = Tl();
        p.on(l || n, y, C, typeof T == "boolean" ? { capture: T } : T);
      },
      registerResizeHandler: (y) => p.on(window, "resize", y),
      removeClass: v,
      updateCssVariable: f
    }), h.then(() => {
      g && (g.init(), g.setUnbounded(r));
    })) : g && !e && h.then(() => {
      g && (g.destroy(), g = void 0, p.clear());
    }), g && (S !== l || I !== c) && (S = l, I = c, g.destroy(), requestAnimationFrame(() => {
      g && (g.init(), g.setUnbounded(r));
    })), !e && r && d("mdc-ripple-upgraded--unbounded");
  }
  w(), _ && (A = _(b));
  function b() {
    g && g.layout();
  }
  return {
    update(y) {
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
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (C) => n.classList.add(C), removeClass: (C) => n.classList.remove(C), addStyle: (C, T) => n.style.setProperty(C, T), initPromise: Promise.resolve() }, y)), w();
    },
    destroy() {
      g && (g.destroy(), g = void 0, p.clear(), v("mdc-ripple-surface"), v("smui-ripple-surface--primary"), v("smui-ripple-surface--secondary")), A && A();
    }
  };
}
var Uf = /* @__PURE__ */ ft("<svg><!></svg>");
function Os(n, e) {
  Ce(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "tag", 3, "div"), i = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
  const a = /* @__PURE__ */ oe(() => [
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
  var l = { getElement: u }, c = se(), d = q(c);
  {
    var v = (h) => {
      var g = Uf();
      He(g, () => ({ ...i }));
      var p = j(g);
      _e(p, () => e.children ?? be), Se(g, (_) => s = _, () => s), De(g, (_, A) => ie == null ? void 0 : ie(_, A), t), x(h, g);
    }, f = (h) => {
      var g = se(), p = q(g);
      {
        var _ = (E) => {
          var S = se(), I = q(S);
          mo(I, r, !1, (w, b) => {
            Se(w, (y) => s = y, () => s), De(w, (y, C) => ie == null ? void 0 : ie(y, C), t), He(w, () => ({ ...i }));
          }), x(E, S);
        }, A = (E) => {
          var S = se(), I = q(S);
          mo(I, r, !1, (w, b) => {
            Se(w, (T) => s = T, () => s), De(w, (T, D) => ie == null ? void 0 : ie(T, D), t), He(w, () => ({ ...i }));
            var y = se(), C = q(y);
            _e(C, () => e.children ?? be), x(b, y);
          }), x(E, S);
        };
        ne(
          p,
          (E) => {
            o(a) ? E(_) : E(A, !1);
          },
          !0
        );
      }
      x(h, g);
    };
    ne(d, (h) => {
      r() === "svg" ? h(v) : h(f, !1);
    });
  }
  return x(n, c), Ae(l);
}
function Ya(n, e) {
  Ce(e, !0);
  const [t, r] = Ei(), i = jn(e.value);
  de(e.key, i), xe(() => {
    nr(i, e.value);
  }), Fn(() => {
    i.set(void 0);
  });
  var a = se(), s = q(a);
  _e(s, () => e.children ?? be), x(n, a), Ae(), r();
}
var Wf = /* @__PURE__ */ X('<div class="mdc-button__touch"></div>'), jf = /* @__PURE__ */ X('<div class="mdc-button__ripple"></div> <!><!>', 1);
function Vn(n, e) {
  Ce(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "ripple", 3, !0), s = m(e, "color", 3, "primary"), u = m(e, "variant", 3, "text"), l = m(e, "touch", 3, !1), c = m(e, "action", 3, "close"), d = m(e, "defaultAction", 3, !1), v = m(e, "secondary", 3, !1), f = m(e, "component", 3, Os), h = m(e, "tag", 19, () => e.href == null ? "button" : "a"), g = /* @__PURE__ */ Ve(e, [
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
  ]), p, _ = Ee({}), A = Ee({}), E = ye("SMUI:button:context");
  const S = /* @__PURE__ */ oe(() => E === "dialog:action" && c() != null ? { "data-mdc-dialog-action": c() } : { action: c() }), I = /* @__PURE__ */ oe(() => E === "dialog:action" && d() ? { "data-mdc-dialog-button-default": "" } : {}), w = /* @__PURE__ */ oe(() => E === "banner" ? {} : { secondary: v() });
  let b = e.disabled;
  xe(() => {
    if (b !== e.disabled) {
      if (p) {
        const W = M();
        "blur" in W && W.blur();
      }
      b = g.disabled;
    }
  }), de("SMUI:label:context", "button"), de("SMUI:icon:context", "button");
  function y(W) {
    _[W] || (_[W] = !0);
  }
  function C(W) {
    (!(W in _) || _[W]) && (_[W] = !1);
  }
  function T(W, N) {
    A[W] != N && (N === "" || N == null ? delete A[W] : A[W] = N);
  }
  function D() {
    E === "banner" && Be(M(), v() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function M() {
    return p.getElement();
  }
  var F = { getElement: M }, P = se(), re = q(P);
  {
    let W = /* @__PURE__ */ oe(() => [
      [
        Gn,
        {
          ripple: a(),
          unbounded: !1,
          color: s(),
          disabled: !!e.disabled,
          addClass: y,
          removeClass: C,
          addStyle: T
        }
      ],
      ...t()
    ]), N = /* @__PURE__ */ oe(() => Ze({
      "mdc-button": !0,
      "mdc-button--raised": u() === "raised",
      "mdc-button--unelevated": u() === "unelevated",
      "mdc-button--outlined": u() === "outlined",
      "smui-button--color-secondary": s() === "secondary",
      "mdc-button--touch": l(),
      "mdc-card__action": E === "card:action",
      "mdc-card__action--button": E === "card:action",
      "mdc-dialog__button": E === "dialog:action",
      "mdc-top-app-bar__navigation-icon": E === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": E === "top-app-bar:action",
      "mdc-snackbar__action": E === "snackbar:actions",
      "mdc-banner__secondary-action": E === "banner" && v(),
      "mdc-banner__primary-action": E === "banner" && !v(),
      "mdc-tooltip__action": E === "tooltip:rich-actions",
      ..._,
      [r()]: !0
    })), H = /* @__PURE__ */ oe(() => Object.entries(A).map(([ee, fe]) => `${ee}: ${fe};`).concat([i()]).join(" "));
    Pa(re, f, (ee, fe) => {
      Se(
        fe(ee, Ke(
          {
            get tag() {
              return h();
            },
            get use() {
              return o(W);
            },
            get class() {
              return o(N);
            },
            get style() {
              return o(H);
            }
          },
          () => o(S),
          () => o(I),
          () => o(w),
          {
            get href() {
              return e.href;
            }
          },
          () => g,
          {
            onclick: (O) => {
              var J;
              D(), (J = e.onclick) == null || J.call(e, O);
            },
            children: (O, J) => {
              var $ = jf(), ve = K(q($), 2);
              _e(ve, () => e.children ?? be);
              var ue = K(ve);
              {
                var B = (z) => {
                  var k = Wf();
                  x(z, k);
                };
                ne(ue, (z) => {
                  l() && z(B);
                });
              }
              x(O, $);
            },
            $$slots: { default: !0 }
          }
        )),
        (O) => p = O,
        () => p
      );
    });
  }
  return x(n, P), Ae(F);
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
var Vf = {
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
var zf = (
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
        return Vf;
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
var $r = {
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
var Xf = (
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
        return $r;
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
      this.adapter.removeClass($r.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass($r.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(t) {
      this.adapter.setStyle("transform-origin", t + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass($r.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(t) {
      var r = this.adapter.hasClass($r.LINE_RIPPLE_DEACTIVATING);
      t.propertyName === "opacity" && r && (this.adapter.removeClass($r.LINE_RIPPLE_ACTIVE), this.adapter.removeClass($r.LINE_RIPPLE_DEACTIVATING));
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
var Yf = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Dl = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, qf = {
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
var Kf = (
  /** @class */
  function(n) {
    In(e, n);
    function e(t) {
      return n.call(this, je(je({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Yf;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return qf;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Dl;
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
      t > 0 && (t += Dl.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(t), this.adapter.addClass(r);
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
var $s = {
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
}, Qf = {
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
}, Ll = {
  LABEL_SCALE: 0.75
}, Jf = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], $f = [
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
var Rl = ["mousedown", "touchstart"], Ol = ["click", "keydown"], ev = (
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
        return Qf;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return $s;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Ll;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var t = this.getNativeInput().type;
        return $f.indexOf(t) >= 0;
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
        for (var s = Bn(Rl), u = s.next(); !u.done; u = s.next()) {
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
        for (var c = Bn(Ol), d = c.next(); !d.done; d = c.next()) {
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
        for (var s = Bn(Rl), u = s.next(); !u.done; u = s.next()) {
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
        for (var c = Bn(Ol), d = c.next(); !d.done; d = c.next()) {
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
        return Jf.indexOf(i) > -1 ? (r.styleValidity(!0), r.adapter.setLabelRequired(r.getNativeInput().required), !0) : !1;
      }), t.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(t) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (t) {
          var r = this.adapter.getLabelWidth() * Ll.LABEL_SCALE;
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
        a && s ? this.adapter.setInputAttr($s.ARIA_DESCRIBEDBY, s) : this.adapter.removeInputAttr($s.ARIA_DESCRIBEDBY);
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
var Ml = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, tv = {
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
var Fl = ["click", "keydown"], nv = (
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
        return Ml;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return tv;
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
        for (var i = Bn(Fl), a = i.next(); !a.done; a = i.next()) {
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
        for (var i = Bn(Fl), a = i.next(); !a.done; a = i.next()) {
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
      this.savedTabIndex && (t ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", Ml.ICON_ROLE)));
    }, e.prototype.setAriaLabel = function(t) {
      this.adapter.setAttr("aria-label", t);
    }, e.prototype.setContent = function(t) {
      this.adapter.setContent(t);
    }, e.prototype.handleInteraction = function(t) {
      var r = t.key === "Enter" || t.keyCode === 13;
      (t.type === "click" || r) && (t.preventDefault(), this.adapter.notifyIconAction());
    }, e;
  }(bn)
), rv = /* @__PURE__ */ X("<span><!></span>"), iv = /* @__PURE__ */ X("<label><!></label>");
function us(n, e) {
  Ce(e, !0);
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
  ]), c, d = /* @__PURE__ */ le(void 0), v = new ra(), f = Ee({}), h = Ee({}), g = ye("SMUI:generic:input:props") ?? {}, p = a();
  xe(() => {
    o(d) && p !== a() && (p = a(), o(d).float(a()));
  });
  let _ = s();
  xe(() => {
    o(d) && _ !== s() && (_ = s(), o(d).setRequired(s()));
  });
  const A = ye("SMUI:floating-label:mount"), E = ye("SMUI:floating-label:unmount");
  it(() => {
    U(
      d,
      new zf({
        addClass: S,
        removeClass: I,
        getWidth: () => {
          var J, $;
          const ee = M(), fe = ee.cloneNode(!0);
          (J = ee.parentNode) == null || J.appendChild(fe), fe.classList.add("smui-floating-label--remove-transition"), fe.classList.add("smui-floating-label--force-size"), fe.classList.remove("mdc-floating-label--float-above");
          const O = fe.scrollWidth;
          return ($ = ee.parentNode) == null || $.removeChild(fe), O;
        },
        registerInteractionHandler: (ee, fe) => v.on(M(), ee, fe),
        deregisterInteractionHandler: (ee, fe) => v.off(M(), ee, fe)
      }),
      !0
    );
    const H = {
      get element() {
        return M();
      },
      addStyle: w,
      removeStyle: b
    };
    return A && A(H), o(d).init(), () => {
      var ee;
      E && E(H), (ee = o(d)) == null || ee.destroy(), v.clear();
    };
  });
  function S(H) {
    f[H] || (f[H] = !0);
  }
  function I(H) {
    (!(H in f) || f[H]) && (f[H] = !1);
  }
  function w(H, ee) {
    h[H] != ee && (ee === "" || ee == null ? delete h[H] : h[H] = ee);
  }
  function b(H) {
    H in h && delete h[H];
  }
  function y(H) {
    var ee;
    (ee = o(d)) == null || ee.shake(H);
  }
  function C(H) {
    a(H);
  }
  function T(H) {
    s(H);
  }
  function D() {
    if (o(d) == null)
      throw new Error("Instance is undefined.");
    return o(d).getWidth();
  }
  function M() {
    return c;
  }
  var F = { shake: y, float: C, setRequired: T, getWidth: D, getElement: M }, P = se(), re = q(P);
  {
    var W = (H) => {
      var ee = rv();
      He(ee, (O, J) => ({ class: O, style: J, ...l }), [
        () => Ze({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": s(),
          ...f,
          [r()]: !0
        }),
        () => Object.entries(h).map(([O, J]) => `${O}: ${J};`).concat([i()]).join(" ")
      ]);
      var fe = j(ee);
      _e(fe, () => e.children ?? be), Se(ee, (O) => c = O, () => c), De(ee, (O, J) => ie == null ? void 0 : ie(O, J), t), x(H, ee);
    }, N = (H) => {
      var ee = iv();
      He(
        ee,
        (O, J) => ({
          class: O,
          style: J,
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
          () => Object.entries(h).map(([O, J]) => `${O}: ${J};`).concat([i()]).join(" ")
        ]
      );
      var fe = j(ee);
      _e(fe, () => e.children ?? be), Se(ee, (O) => c = O, () => c), De(ee, (O, J) => ie == null ? void 0 : ie(O, J), t), x(H, ee);
    };
    ne(re, (H) => {
      u() ? H(W) : H(N, !1);
    });
  }
  return x(n, P), Ae(F);
}
var av = /* @__PURE__ */ X("<div></div>");
function Kd(n, e) {
  Ce(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "active", 3, !1), s = /* @__PURE__ */ Ve(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "active"
  ]), u, l = /* @__PURE__ */ le(void 0), c = new ra(), d = Ee({}), v = Ee({});
  it(() => (U(
    l,
    new Xf({
      addClass: h,
      removeClass: g,
      hasClass: f,
      setStyle: p,
      registerEventHandler: (b, y) => c.on(S(), b, y),
      deregisterEventHandler: (b, y) => c.off(S(), b, y)
    }),
    !0
  ), o(l).init(), () => {
    var b;
    (b = o(l)) == null || b.destroy(), c.clear();
  }));
  function f(b) {
    return b in d ? d[b] : S().classList.contains(b);
  }
  function h(b) {
    d[b] || (d[b] = !0);
  }
  function g(b) {
    (!(b in d) || d[b]) && (d[b] = !1);
  }
  function p(b, y) {
    v[b] != y && (y === "" || y == null ? delete v[b] : v[b] = y);
  }
  function _() {
    var b;
    (b = o(l)) == null || b.activate();
  }
  function A() {
    var b;
    (b = o(l)) == null || b.deactivate();
  }
  function E(b) {
    var y;
    (y = o(l)) == null || y.setRippleCenter(b);
  }
  function S() {
    return u;
  }
  var I = { activate: _, deactivate: A, setRippleCenter: E, getElement: S }, w = av();
  return He(w, (b, y) => ({ class: b, style: y, ...s }), [
    () => Ze({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...d,
      [r()]: !0
    }),
    () => Object.entries(v).map(([b, y]) => `${b}: ${y};`).concat([i()]).join(" ")
  ]), Se(w, (b) => u = b, () => u), De(w, (b, y) => ie == null ? void 0 : ie(b, y), t), x(n, w), Ae(I);
}
var sv = /* @__PURE__ */ X('<div class="mdc-notched-outline__notch"><!></div>'), ov = /* @__PURE__ */ X('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function Qd(n, e) {
  Ce(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "notched", 3, !1), a = m(e, "noLabel", 3, !1), s = /* @__PURE__ */ Ve(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "notched",
    "noLabel",
    "children"
  ]), u, l = /* @__PURE__ */ le(void 0), c = /* @__PURE__ */ le(void 0), d = Ee({}), v = Ee({}), f;
  xe(() => {
    o(c) !== f && (o(c) ? (o(c).addStyle("transition-duration", "0s"), h("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      o(c) && o(c).removeStyle("transition-duration");
    })) : g("mdc-notched-outline--upgraded"), f = o(c));
  }), de("SMUI:floating-label:mount", (C) => {
    U(c, C, !0);
  }), de("SMUI:floating-label:unmount", () => {
    U(c, void 0);
  }), it(() => (U(
    l,
    new Kf({
      addClass: h,
      removeClass: g,
      setNotchWidthProperty: (C) => p("width", C + "px"),
      removeNotchWidthProperty: () => _("width")
    }),
    !0
  ), o(l).init(), () => {
    var C;
    (C = o(l)) == null || C.destroy();
  }));
  function h(C) {
    d[C] || (d[C] = !0);
  }
  function g(C) {
    (!(C in d) || d[C]) && (d[C] = !1);
  }
  function p(C, T) {
    v[C] != T && (T === "" || T == null ? delete v[C] : v[C] = T);
  }
  function _(C) {
    C in v && delete v[C];
  }
  function A(C) {
    var T;
    (T = o(l)) == null || T.notch(C);
  }
  function E() {
    var C;
    (C = o(l)) == null || C.closeNotch();
  }
  function S() {
    return u;
  }
  var I = { notch: A, closeNotch: E, getElement: S }, w = ov();
  He(w, (C) => ({ class: C, ...s }), [
    () => Ze({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": i(),
      "mdc-notched-outline--no-label": a(),
      ...d,
      [r()]: !0
    })
  ]);
  var b = K(j(w), 2);
  {
    var y = (C) => {
      var T = sv(), D = j(T);
      _e(D, () => e.children ?? be), ce((M) => tt(T, M), [
        () => Object.entries(v).map(([M, F]) => `${M}: ${F};`).join(" ")
      ]), x(C, T);
    };
    ne(b, (C) => {
      a() || C(y);
    });
  }
  return Se(w, (C) => u = C, () => u), De(w, (C, T) => ie == null ? void 0 : ie(C, T), t), x(n, w), Ae(I);
}
function ia(n, e) {
  Ce(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "component", 3, Os), a = m(e, "tag", 3, "div"), s = m(e, "_smuiClass", 3, ""), u = m(e, "_smuiClassMap", 23, () => ({})), l = m(e, "_smuiContexts", 19, () => ({})), c = m(e, "_smuiProps", 19, () => ({})), d = /* @__PURE__ */ Ve(e, [
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
  Object.entries(u()).forEach(([A, E]) => {
    const S = ye(E);
    S && "subscribe" in S && f.push(S.subscribe((I) => {
      u()[A] = I;
    }));
  });
  for (let A in l())
    l().hasOwnProperty(A) && de(A, l()[A]);
  Fn(() => {
    for (const A of f)
      A();
  });
  function h() {
    return v.getElement();
  }
  var g = { getElement: h }, p = se(), _ = q(p);
  {
    let A = /* @__PURE__ */ oe(() => Ze({
      [s()]: !0,
      ...u(),
      [r()]: !0
    }));
    Pa(_, i, (E, S) => {
      Se(
        S(E, Ke(
          {
            get tag() {
              return a();
            },
            get use() {
              return t();
            },
            get class() {
              return o(A);
            }
          },
          c,
          () => d,
          {
            children: (I, w) => {
              var b = se(), y = q(b);
              _e(y, () => e.children ?? be), x(I, b);
            },
            $$slots: { default: !0 }
          }
        )),
        (I) => v = I,
        () => v
      );
    });
  }
  return x(n, p), Ae(g);
}
function lv(n, e) {
  Ce(e, !0);
  let t = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Se(
    ia(n, Ke({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => t, {
      children: (s, u) => {
        var l = se(), c = q(l);
        _e(c, () => e.children ?? be), x(s, l);
      },
      $$slots: { default: !0 }
    })),
    (s) => r = s,
    () => r
  ), Ae(a);
}
function dv(n, e) {
  Ce(e, !0);
  let t = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Se(
    ia(n, Ke(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => t,
      {
        children: (s, u) => {
          var l = se(), c = q(l);
          _e(c, () => e.children ?? be), x(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Ae(a);
}
function uv(n, e) {
  Ce(e, !0);
  let t = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Se(
    ia(n, Ke(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => t,
      {
        children: (s, u) => {
          var l = se(), c = q(l);
          _e(c, () => e.children ?? be), x(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Ae(a);
}
var cv = /* @__PURE__ */ X("<input/>");
function fv(n, e) {
  Ce(e, !0);
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
  ]), p, _ = Ee({}), A = Ee({});
  xe(() => {
    i() === "file" ? delete A.value : A.value = s() == null ? "" : s();
  }), it(() => {
    d() && v() && c(D().matches(":invalid"));
  });
  function E(W) {
    return W === "" ? Number.NaN : +W;
  }
  function S(W) {
    if (i() === "file") {
      u(W.currentTarget.files);
      return;
    }
    if (W.currentTarget.value === "" && f()) {
      s(null);
      return;
    }
    if (W.currentTarget.value === "" && h()) {
      s(void 0);
      return;
    }
    switch (i()) {
      case "number":
      case "range":
        s(E(W.currentTarget.value));
        break;
      default:
        s(W.currentTarget.value);
        break;
    }
  }
  function I(W) {
    (i() === "file" || i() === "range") && S(W), l(!0), d() && c(D().matches(":invalid"));
  }
  function w(W) {
    return W in _ ? _[W] ?? null : D().getAttribute(W);
  }
  function b(W, N) {
    _[W] !== N && (_[W] = N);
  }
  function y(W) {
    (!(W in _) || _[W] != null) && (_[W] = void 0);
  }
  function C() {
    D().focus();
  }
  function T() {
    D().blur();
  }
  function D() {
    return p;
  }
  var M = { getAttr: w, addAttr: b, removeAttr: y, focus: C, blur: T, getElement: D }, F = cv(), P = (W) => {
    var N;
    i() !== "file" && S(W), (N = e.oninput) == null || N.call(e, W);
  }, re = (W) => {
    var N;
    I(W), (N = e.onchange) == null || N.call(e, W);
  };
  return He(
    F,
    (W) => ({
      class: W,
      type: i(),
      placeholder: a(),
      ...A,
      ..._,
      ...g,
      oninput: P,
      onchange: re
    }),
    [
      () => Ze({ "mdc-text-field__input": !0, [r()]: !0 })
    ],
    void 0,
    void 0,
    !0
  ), Se(F, (W) => p = W, () => p), De(F, (W, N) => ie == null ? void 0 : ie(W, N), t), x(n, F), Ae(M);
}
var vv = /* @__PURE__ */ X("<textarea></textarea>");
function hv(n, e) {
  Ce(e, !0);
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
  ]), f, h = Ee({});
  it(() => {
    l() && c() && u(I().matches(":invalid"));
  });
  function g() {
    s(!0), l() && u(I().matches(":invalid"));
  }
  function p(C) {
    return C in h ? h[C] ?? null : I().getAttribute(C);
  }
  function _(C, T) {
    h[C] !== T && (h[C] = T);
  }
  function A(C) {
    (!(C in h) || h[C] != null) && (h[C] = void 0);
  }
  function E() {
    I().focus();
  }
  function S() {
    I().blur();
  }
  function I() {
    return f;
  }
  var w = { getAttr: p, addAttr: _, removeAttr: A, focus: E, blur: S, getElement: I }, b = vv(), y = (C) => {
    var T;
    g(), (T = e.onchange) == null || T.call(e, C);
  };
  return He(
    b,
    (C) => ({
      class: C,
      style: `${d() ? "" : "resize: none; "}${i()}`,
      ...h,
      ...v,
      onchange: y
    }),
    [
      () => Ze({ "mdc-text-field__input": !0, [r()]: !0 })
    ]
  ), Se(b, (C) => f = C, () => f), De(b, (C, T) => ie == null ? void 0 : ie(C, T), t), Fa(() => yf(b, a)), x(n, b), Ae(w);
}
var gv = /* @__PURE__ */ X('<span class="mdc-text-field__ripple"></span>'), mv = /* @__PURE__ */ X("<!> <!>", 1), pv = /* @__PURE__ */ X("<span><!> <!></span>"), Iv = /* @__PURE__ */ X("<!> <!> <!>", 1), bv = /* @__PURE__ */ X("<label><!> <!> <!> <!> <!> <!> <!></label>"), _v = /* @__PURE__ */ X("<div><!> <!> <!> <!> <!></div>"), yv = /* @__PURE__ */ X("<!> <!>", 1);
function pr(n, e) {
  Ce(e, !0);
  const { applyPassive: t } = Yd;
  let r = () => {
  };
  function i(G) {
    return G === r;
  }
  let a = m(e, "use", 19, () => []), s = m(e, "class", 3, ""), u = m(e, "style", 3, ""), l = m(e, "ripple", 3, !0), c = m(e, "disabled", 3, !1), d = m(e, "required", 3, !1), v = m(e, "textarea", 3, !1), f = m(e, "variant", 19, () => v() ? "outlined" : "standard"), h = m(e, "noLabel", 3, !1), g = m(e, "type", 3, "text"), p = m(e, "value", 15), _ = m(e, "files", 15, r), A = m(e, "invalid", 15, r), E = m(e, "updateInvalid", 19, () => i(A())), S = m(e, "initialInvalid", 3, !1), I = m(e, "dirty", 15, !1), w = m(e, "validateOnValueChange", 19, E), b = m(e, "useNativeValidation", 19, E), y = m(e, "withLeadingIcon", 3, r), C = m(e, "withTrailingIcon", 3, r), T = m(e, "input", 7), D = m(e, "floatingLabel", 7), M = m(e, "lineRipple", 7), F = m(e, "notchedOutline", 7), P = /* @__PURE__ */ Ve(e, [
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
  i(_()) && _(null), i(A()) && A(!1);
  let W, N = /* @__PURE__ */ le(void 0), H = new ra(), ee = Ee({}), fe = Ee({}), O = /* @__PURE__ */ le(void 0), J = /* @__PURE__ */ le(!1), $ = /* @__PURE__ */ le(Ee(S())), ve = ye("SMUI:addLayoutListener"), ue, B, z = new Promise((G) => B = G), k, Q, Y, me;
  const Ie = /* @__PURE__ */ oe(() => T() && T().getElement());
  xe(() => {
    (I() || o($) || !E()) && o(N) && o(N).isValid() !== !A() && (E() ? A(!o(N).isValid()) : o(N).setValid(!A()));
  }), xe(() => {
    o(N) && o(N).getValidateOnValueChange() !== w() && o(N).setValidateOnValueChange(i(w()) ? !1 : w());
  }), xe(() => {
    o(N) && o(N).setUseNativeValidation(i(b()) ? !0 : b());
  }), xe(() => {
    o(N) && o(N).setDisabled(c());
  });
  let Ne = p();
  xe(() => {
    if (o(N) && re && Ne !== p()) {
      Ne = p();
      const G = `${p() == null ? "" : p()}`;
      o(N).getValue() !== G && o(N).setValue(G);
    }
  }), ve && (ue = ve(R)), de("SMUI:textfield:leading-icon:mount", (G) => {
    k = G;
  }), de("SMUI:textfield:leading-icon:unmount", () => {
    k = void 0;
  }), de("SMUI:textfield:trailing-icon:mount", (G) => {
    Q = G;
  }), de("SMUI:textfield:trailing-icon:unmount", () => {
    Q = void 0;
  }), de("SMUI:textfield:helper-text:id", (G) => {
    U(O, G, !0);
  }), de("SMUI:textfield:helper-text:mount", (G) => {
    Y = G;
  }), de("SMUI:textfield:helper-text:unmount", () => {
    U(O, void 0), Y = void 0;
  }), de("SMUI:textfield:character-counter:mount", (G) => {
    me = G;
  }), de("SMUI:textfield:character-counter:unmount", () => {
    me = void 0;
  }), it(() => {
    var G;
    if (U(
      N,
      new ev(
        {
          // getRootAdapterMethods_
          addClass: qe,
          removeClass: Re,
          hasClass: nt,
          registerTextFieldInteractionHandler: (te, Te) => H.on(V(), te, Te),
          deregisterTextFieldInteractionHandler: (te, Te) => H.off(V(), te, Te),
          registerValidationAttributeChangeHandler: (te) => {
            const Te = (Nt) => Nt.map((an) => an.attributeName).filter((an) => an), ot = new MutationObserver((Nt) => {
              b() && te(Te(Nt));
            }), pt = { attributes: !0 };
            return T() && ot.observe(T().getElement(), pt), ot;
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
            var pt;
            const ot = (pt = T()) == null ? void 0 : pt.getElement();
            if (ot) {
              const Nt = t();
              H.on(ot, te, Te, typeof Nt == "boolean" ? { capture: Nt } : Nt);
            }
          },
          deregisterInputInteractionHandler: (te, Te) => {
            var pt;
            const ot = (pt = T()) == null ? void 0 : pt.getElement();
            ot && H.off(ot, te, Te);
          },
          // getLabelAdapterMethods_
          floatLabel: (te) => D() && D().float(te),
          getLabelWidth: () => D() ? D().getWidth() : 0,
          hasLabel: () => !!D(),
          shakeLabel: (te) => D() && D().shake(te),
          setLabelRequired: (te) => D() && D().setRequired(te),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => M() && M().activate(),
          deactivateLineRipple: () => M() && M().deactivate(),
          setLineRippleTransformOrigin: (te) => M() && M().setRippleCenter(te),
          // getOutlineAdapterMethods_
          closeOutline: () => F() && F().closeNotch(),
          hasOutline: () => !!F(),
          notchOutline: (te) => F() && F().notch(te)
        },
        {
          get helperText() {
            return Y;
          },
          get characterCounter() {
            return me;
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
      if (T() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (G = o(N)) == null || G.init();
    } else
      Fd().then(() => {
        var te;
        if (T() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (te = o(N)) == null || te.init();
      });
    return B(), () => {
      var te;
      (te = o(N)) == null || te.destroy(), H.clear();
    };
  }), Fn(() => {
    ue && ue();
  });
  function nt(G) {
    return G in ee ? ee[G] ?? null : V().classList.contains(G);
  }
  function qe(G) {
    ee[G] || (ee[G] = !0);
  }
  function Re(G) {
    (!(G in ee) || ee[G]) && (ee[G] = !1);
  }
  function st(G, te) {
    fe[G] != te && (te === "" || te == null ? delete fe[G] : fe[G] = te);
  }
  function Pt() {
    var G;
    (G = T()) == null || G.focus();
  }
  function kt() {
    var G;
    (G = T()) == null || G.blur();
  }
  function R() {
    if (o(N)) {
      const G = o(N).shouldFloat;
      o(N).notchOutline(G);
    }
  }
  function V() {
    return W;
  }
  var he = { focus: Pt, blur: kt, layout: R, getElement: V }, Fe = yv(), Gt = q(Fe);
  {
    var vn = (G) => {
      var te = bv();
      He(te, (Ge, Qe, ze) => ({ class: Ge, style: Qe, for: void 0, ...ze }), [
        () => Ze({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": c(),
          "mdc-text-field--textarea": v(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !v(),
          "mdc-text-field--no-label": h() || e.label == null,
          "mdc-text-field--label-floating": o(J) || p() != null && p() !== "",
          "mdc-text-field--with-leading-icon": i(y()) ? e.leadingIcon : y(),
          "mdc-text-field--with-trailing-icon": i(C()) ? e.trailingIcon : C(),
          "mdc-text-field--with-internal-counter": v() && e.internalCounter,
          "mdc-text-field--invalid": A(),
          ...ee,
          [s()]: !0
        }),
        () => Object.entries(fe).map(([Ge, Qe]) => `${Ge}: ${Qe};`).concat([u()]).join(" "),
        () => Ea(P, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Te = j(te);
      {
        var ot = (Ge) => {
          var Qe = mv(), ze = q(Qe);
          {
            var Ht = (_t) => {
              var Lt = gv();
              x(_t, Lt);
            };
            ne(ze, (_t) => {
              f() === "filled" && _t(Ht);
            });
          }
          var Pn = K(ze, 2);
          {
            var Je = (_t) => {
              {
                let Lt = /* @__PURE__ */ oe(() => o(J) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), We = /* @__PURE__ */ oe(() => dt(P, "label$"));
                Se(
                  us(_t, Ke(
                    {
                      get floatAbove() {
                        return o(Lt);
                      },
                      get required() {
                        return d();
                      },
                      wrapped: !0
                    },
                    () => o(We),
                    {
                      children: (Rt, or) => {
                        var _n = se(), yt = q(_n);
                        {
                          var Bt = (Yt) => {
                          }, yn = (Yt) => {
                            var Yr = se(), Cn = q(Yr);
                            {
                              var Er = (An) => {
                                var lr = et();
                                ce(() => Me(lr, e.label)), x(An, lr);
                              }, sa = (An) => {
                                var lr = se(), zn = q(lr);
                                _e(zn, () => e.label), x(An, lr);
                              };
                              ne(
                                Cn,
                                (An) => {
                                  typeof e.label == "string" ? An(Er) : An(sa, !1);
                                },
                                !0
                              );
                            }
                            x(Yt, Yr);
                          };
                          ne(yt, (Yt) => {
                            e.label == null ? Yt(Bt) : Yt(yn, !1);
                          });
                        }
                        x(Rt, _n);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (Rt) => D(Rt),
                  () => D()
                );
              }
            };
            ne(Pn, (_t) => {
              !h() && e.label != null && _t(Je);
            });
          }
          x(Ge, Qe);
        };
        ne(Te, (Ge) => {
          !v() && f() !== "outlined" && Ge(ot);
        });
      }
      var pt = K(Te, 2);
      {
        var Nt = (Ge) => {
          {
            let Qe = /* @__PURE__ */ oe(() => h() || e.label == null), ze = /* @__PURE__ */ oe(() => dt(P, "outline$"));
            Se(
              Qd(Ge, Ke(
                {
                  get noLabel() {
                    return o(Qe);
                  }
                },
                () => o(ze),
                {
                  children: (Ht, Pn) => {
                    var Je = se(), _t = q(Je);
                    {
                      var Lt = (We) => {
                        {
                          let Rt = /* @__PURE__ */ oe(() => o(J) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), or = /* @__PURE__ */ oe(() => dt(P, "label$"));
                          Se(
                            us(We, Ke(
                              {
                                get floatAbove() {
                                  return o(Rt);
                                },
                                get required() {
                                  return d();
                                },
                                wrapped: !0
                              },
                              () => o(or),
                              {
                                children: (_n, yt) => {
                                  var Bt = se(), yn = q(Bt);
                                  {
                                    var Yt = (Cn) => {
                                    }, Yr = (Cn) => {
                                      var Er = se(), sa = q(Er);
                                      {
                                        var An = (zn) => {
                                          var qr = et();
                                          ce(() => Me(qr, e.label)), x(zn, qr);
                                        }, lr = (zn) => {
                                          var qr = se(), Ws = q(qr);
                                          _e(Ws, () => e.label), x(zn, qr);
                                        };
                                        ne(
                                          sa,
                                          (zn) => {
                                            typeof e.label == "string" ? zn(An) : zn(lr, !1);
                                          },
                                          !0
                                        );
                                      }
                                      x(Cn, Er);
                                    };
                                    ne(yn, (Cn) => {
                                      e.label == null ? Cn(Yt) : Cn(Yr, !1);
                                    });
                                  }
                                  x(_n, Bt);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (_n) => D(_n),
                            () => D()
                          );
                        }
                      };
                      ne(_t, (We) => {
                        !h() && e.label != null && We(Lt);
                      });
                    }
                    x(Ht, Je);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (Ht) => F(Ht),
              () => F()
            );
          }
        };
        ne(pt, (Ge) => {
          (v() || f() === "outlined") && Ge(Nt);
        });
      }
      var an = K(pt, 2);
      Ya(an, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (Ge, Qe) => {
          var ze = se(), Ht = q(ze);
          _e(Ht, () => e.leadingIcon ?? be), x(Ge, ze);
        },
        $$slots: { default: !0 }
      });
      var xi = K(an, 2);
      _e(xi, () => e.children ?? be);
      var ut = K(xi, 2);
      {
        var Zt = (Ge) => {
          var Qe = pv(), ze = j(Qe);
          {
            let Pn = /* @__PURE__ */ oe(() => dt(P, "input$"));
            Se(
              hv(ze, Ke(
                {
                  get disabled() {
                    return c();
                  },
                  get required() {
                    return d();
                  },
                  get updateInvalid() {
                    return E();
                  },
                  get initialInvalid() {
                    return o($);
                  },
                  get "aria-controls"() {
                    return o(O);
                  },
                  get "aria-describedby"() {
                    return o(O);
                  }
                },
                () => o(Pn),
                {
                  onblur: (Je) => {
                    var _t;
                    U(J, !1), U($, !0), Be(V(), "blur", Je), (_t = e.input$onblur) == null || _t.call(e, Je);
                  },
                  onfocus: (Je) => {
                    var _t;
                    U(J, !0), Be(V(), "focus", Je), (_t = e.input$onfocus) == null || _t.call(e, Je);
                  },
                  get value() {
                    return p();
                  },
                  set value(Je) {
                    p(Je);
                  },
                  get dirty() {
                    return I();
                  },
                  set dirty(Je) {
                    I(Je);
                  },
                  get invalid() {
                    return A();
                  },
                  set invalid(Je) {
                    A(Je);
                  }
                }
              )),
              (Je) => T(Je),
              () => T()
            );
          }
          var Ht = K(ze, 2);
          _e(Ht, () => e.internalCounter ?? be), ce((Pn) => _r(Qe, 1, Pn), [
            () => Bd(Ze({
              "mdc-text-field__resizer": !("input$resizable" in P) || e.input$resizable
            }))
          ]), x(Ge, Qe);
        }, sn = (Ge) => {
          var Qe = Iv(), ze = q(Qe);
          {
            var Ht = (Lt) => {
              var We = se(), Rt = q(We);
              {
                var or = (yt) => {
                  dv(yt, {
                    children: (Bt, yn) => {
                      var Yt = et();
                      ce(() => Me(Yt, e.prefix)), x(Bt, Yt);
                    },
                    $$slots: { default: !0 }
                  });
                }, _n = (yt) => {
                  var Bt = se(), yn = q(Bt);
                  _e(yn, () => e.prefix ?? be), x(yt, Bt);
                };
                ne(Rt, (yt) => {
                  typeof e.prefix == "string" ? yt(or) : yt(_n, !1);
                });
              }
              x(Lt, We);
            };
            ne(ze, (Lt) => {
              e.prefix != null && Lt(Ht);
            });
          }
          var Pn = K(ze, 2);
          {
            let Lt = /* @__PURE__ */ oe(() => dt(P, "input$"));
            Se(
              fv(Pn, Ke(
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
                    return E();
                  },
                  get initialInvalid() {
                    return o($);
                  },
                  get "aria-controls"() {
                    return o(O);
                  },
                  get "aria-describedby"() {
                    return o(O);
                  }
                },
                () => h() && e.label != null && typeof e.label == "string" ? { placeholder: e.label } : {},
                () => o(Lt),
                {
                  onblur: (We) => {
                    var Rt;
                    U(J, !1), U($, !0), Be(V(), "blur", We), (Rt = e.input$onblur) == null || Rt.call(e, We);
                  },
                  onfocus: (We) => {
                    var Rt;
                    U(J, !0), Be(V(), "focus", We), (Rt = e.input$onfocus) == null || Rt.call(e, We);
                  },
                  get value() {
                    return p();
                  },
                  set value(We) {
                    p(We);
                  },
                  get files() {
                    return _();
                  },
                  set files(We) {
                    _(We);
                  },
                  get dirty() {
                    return I();
                  },
                  set dirty(We) {
                    I(We);
                  },
                  get invalid() {
                    return A();
                  },
                  set invalid(We) {
                    A(We);
                  }
                }
              )),
              (We) => T(We),
              () => T()
            );
          }
          var Je = K(Pn, 2);
          {
            var _t = (Lt) => {
              var We = se(), Rt = q(We);
              {
                var or = (yt) => {
                  uv(yt, {
                    children: (Bt, yn) => {
                      var Yt = et();
                      ce(() => Me(Yt, e.suffix)), x(Bt, Yt);
                    },
                    $$slots: { default: !0 }
                  });
                }, _n = (yt) => {
                  var Bt = se(), yn = q(Bt);
                  _e(yn, () => e.suffix ?? be), x(yt, Bt);
                };
                ne(Rt, (yt) => {
                  typeof e.suffix == "string" ? yt(or) : yt(_n, !1);
                });
              }
              x(Lt, We);
            };
            ne(Je, (Lt) => {
              e.suffix != null && Lt(_t);
            });
          }
          x(Ge, Qe);
        };
        ne(ut, (Ge) => {
          v() && typeof p() == "string" ? Ge(Zt) : Ge(sn, !1);
        });
      }
      var Cr = K(ut, 2);
      Ya(Cr, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (Ge, Qe) => {
          var ze = se(), Ht = q(ze);
          _e(Ht, () => e.trailingIcon ?? be), x(Ge, ze);
        },
        $$slots: { default: !0 }
      });
      var Ba = K(Cr, 2);
      {
        var Ar = (Ge) => {
          {
            let Qe = /* @__PURE__ */ oe(() => dt(P, "ripple$"));
            Se(Kd(Ge, Ke(() => o(Qe))), (ze) => M(ze), () => M());
          }
        };
        ne(Ba, (Ge) => {
          !v() && f() !== "outlined" && l() && Ge(Ar);
        });
      }
      Se(te, (Ge) => W = Ge, () => W), De(te, (Ge, Qe) => Gn == null ? void 0 : Gn(Ge, Qe), () => ({
        ripple: !v() && f() === "filled",
        unbounded: !1,
        addClass: qe,
        removeClass: Re,
        addStyle: st,
        eventTarget: o(Ie),
        activeTarget: o(Ie),
        initPromise: z
      })), De(te, (Ge, Qe) => ie == null ? void 0 : ie(Ge, Qe), a), x(G, te);
    }, sr = (G) => {
      var te = _v();
      He(te, (ut, Zt, sn) => ({ class: ut, style: Zt, ...sn }), [
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
          "mdc-text-field--invalid": A(),
          ...ee,
          [s()]: !0
        }),
        () => Object.entries(fe).map(([ut, Zt]) => `${ut}: ${Zt};`).concat([u()]).join(" "),
        () => Ea(P, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Te = j(te);
      {
        var ot = (ut) => {
          var Zt = se(), sn = q(Zt);
          _e(sn, () => e.label ?? be), x(ut, Zt);
        };
        ne(Te, (ut) => {
          typeof e.label != "string" && ut(ot);
        });
      }
      var pt = K(Te, 2);
      Ya(pt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (ut, Zt) => {
          var sn = se(), Cr = q(sn);
          _e(Cr, () => e.leadingIcon ?? be), x(ut, sn);
        },
        $$slots: { default: !0 }
      });
      var Nt = K(pt, 2);
      _e(Nt, () => e.children ?? be);
      var an = K(Nt, 2);
      Ya(an, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (ut, Zt) => {
          var sn = se(), Cr = q(sn);
          _e(Cr, () => e.trailingIcon ?? be), x(ut, sn);
        },
        $$slots: { default: !0 }
      });
      var xi = K(an, 2);
      _e(xi, () => e.line ?? be), Se(te, (ut) => W = ut, () => W), De(te, (ut, Zt) => Gn == null ? void 0 : Gn(ut, Zt), () => ({
        ripple: l(),
        unbounded: !1,
        addClass: qe,
        removeClass: Re,
        addStyle: st
      })), De(te, (ut, Zt) => ie == null ? void 0 : ie(ut, Zt), a), x(G, te);
    };
    ne(Gt, (G) => {
      re ? G(vn) : G(sr, !1);
    });
  }
  var pe = K(Gt, 2);
  {
    var Z = (G) => {
      {
        let te = /* @__PURE__ */ oe(() => dt(P, "helperLine$"));
        lv(G, Ke(() => o(te), {
          children: (Te, ot) => {
            var pt = se(), Nt = q(pt);
            _e(Nt, () => e.helper ?? be), x(Te, pt);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    ne(pe, (G) => {
      e.helper && G(Z);
    });
  }
  return x(n, Fe), Ae(he);
}
var Cv = /* @__PURE__ */ X("<i><!></i>");
function Av(n, e) {
  Ce(e, !0);
  const t = () => Ii(g, "$leadingStore", r), [r, i] = Ei();
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
  ]), d, v = /* @__PURE__ */ le(void 0), f = new ra(), h = Ee({});
  const g = ye("SMUI:textfield:icon:leading"), p = t();
  let _ = /* @__PURE__ */ le(void 0);
  const A = /* @__PURE__ */ oe(() => ({ role: e.role, tabindex: u() })), E = ye("SMUI:textfield:leading-icon:mount"), S = ye("SMUI:textfield:leading-icon:unmount"), I = ye("SMUI:textfield:trailing-icon:mount"), w = ye("SMUI:textfield:trailing-icon:unmount");
  it(() => (U(
    v,
    new nv({
      getAttr: b,
      setAttr: y,
      removeAttr: C,
      setContent: (N) => {
        U(_, N, !0);
      },
      registerInteractionHandler: (N, H) => f.on(T(), N, H),
      deregisterInteractionHandler: (N, H) => f.off(T(), N, H),
      notifyIconAction: () => Be(T(), "SMUITextFieldIcon")
    }),
    !0
  ), p ? E && E(o(v)) : I && I(o(v)), o(v).init(), () => {
    var N;
    o(v) && (p ? S && S(o(v)) : w && w(o(v))), (N = o(v)) == null || N.destroy(), f.clear();
  }));
  function b(N) {
    return N in h ? h[N] ?? null : T().getAttribute(N);
  }
  function y(N, H) {
    h[N] !== H && (h[N] = H);
  }
  function C(N) {
    (!(N in h) || h[N] != null) && (h[N] = void 0);
  }
  function T() {
    return d;
  }
  var D = { getElement: T }, M = Cv();
  He(
    M,
    (N) => ({
      class: N,
      "aria-hidden": u() === -1 ? "true" : "false",
      "aria-disabled": e.role === "button" ? l() ? "true" : "false" : void 0,
      ...o(A),
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
  var F = j(M);
  {
    var P = (N) => {
      var H = se(), ee = q(H);
      _e(ee, () => e.children ?? be), x(N, H);
    }, re = (N) => {
      var H = et();
      ce(() => Me(H, o(_))), x(N, H);
    };
    ne(F, (N) => {
      o(_) == null ? N(P) : N(re, !1);
    });
  }
  Se(M, (N) => d = N, () => d), De(M, (N, H) => ie == null ? void 0 : ie(N, H), a), x(n, M);
  var W = Ae(D);
  return i(), W;
}
function Jd(n, e) {
  Ce(e, !0);
  let t = m(e, "placeholder", 3, ""), r = m(e, "label", 3, ""), i = m(e, "icon", 3, ""), a = m(e, "value", 15, ""), s = m(e, "variant", 3, "standard"), u = m(e, "styles", 3, ""), l = m(e, "required", 3, !1);
  var c = se(), d = q(c);
  {
    var v = (h) => {
      {
        const g = (_) => {
          Av(_, {
            class: "material-icons",
            children: (A, E) => {
              var S = et();
              ce(() => Me(S, i())), x(A, S);
            },
            $$slots: { default: !0 }
          });
        };
        let p = /* @__PURE__ */ oe(() => `width: 100%; ${u()}`);
        pr(h, {
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
      pr(h, {
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
    ne(d, (h) => {
      i() ? h(v) : h(f, !1);
    });
  }
  x(n, c), Ae();
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
var Ev = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, xv = {
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
}, va = {
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
var hi;
(function(n) {
  n[n.TOP_LEFT = 0] = "TOP_LEFT", n[n.TOP_RIGHT = 4] = "TOP_RIGHT", n[n.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", n[n.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", n[n.TOP_START = 8] = "TOP_START", n[n.TOP_END = 12] = "TOP_END", n[n.BOTTOM_START = 9] = "BOTTOM_START", n[n.BOTTOM_END = 13] = "BOTTOM_END";
})(hi || (hi = {}));
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
var Sr, cr, ke = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
Sr = {}, Sr["" + ke.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", Sr["" + ke.LIST_ITEM_CLASS] = "mdc-list-item", Sr["" + ke.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", Sr["" + ke.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", Sr["" + ke.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", Sr["" + ke.ROOT] = "mdc-list";
var Ri = (cr = {}, cr["" + ke.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", cr["" + ke.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", cr["" + ke.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", cr["" + ke.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", cr["" + ke.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", cr["" + ke.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", cr["" + ke.ROOT] = "mdc-deprecated-list", cr), wr = {
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
    .` + Ri[ke.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ri[ke.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + ke.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + ke.LIST_ITEM_CLASS + ` a,
    .` + ke.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + ke.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + Ri[ke.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ri[ke.LIST_ITEM_CLASS] + ` a,
    .` + Ri[ke.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + Ri[ke.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
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
var Sv = ["input", "button", "textarea", "select"], En = function(n) {
  var e = n.target;
  if (e) {
    var t = ("" + e.tagName).toLowerCase();
    Sv.indexOf(t) === -1 && n.preventDefault();
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
function wv() {
  var n = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return n;
}
function Tv(n, e) {
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
function _o(n, e) {
  var t = n.nextChar, r = n.focusItemAtIndex, i = n.sortedIndexByFirstChar, a = n.focusedItemIndex, s = n.skipFocus, u = n.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    eu(e);
  }, vt.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + t;
  var l;
  return e.typeaheadBuffer.length === 1 ? l = Dv(i, a, u, e) : l = Lv(i, u, e), l !== -1 && !s && r(l), l;
}
function Dv(n, e, t, r) {
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
function Lv(n, e, t) {
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
function $d(n) {
  return n.typeaheadBuffer.length > 0;
}
function eu(n) {
  n.typeaheadBuffer = "";
}
function Pl(n, e) {
  var t = n.event, r = n.isTargetListItem, i = n.focusedItemIndex, a = n.focusItemAtIndex, s = n.sortedIndexByFirstChar, u = n.isItemAtIndexDisabled, l = bt(t) === "ArrowLeft", c = bt(t) === "ArrowUp", d = bt(t) === "ArrowRight", v = bt(t) === "ArrowDown", f = bt(t) === "Home", h = bt(t) === "End", g = bt(t) === "Enter", p = bt(t) === "Spacebar";
  if (t.altKey || t.ctrlKey || t.metaKey || l || c || d || v || f || h || g)
    return -1;
  var _ = !p && t.key.length === 1;
  if (_) {
    En(t);
    var A = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: t.key.toLowerCase(),
      sortedIndexByFirstChar: s,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return _o(A, e);
  }
  if (!p)
    return -1;
  r && En(t);
  var E = r && $d(e);
  if (E) {
    var A = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: " ",
      sortedIndexByFirstChar: s,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return _o(A, e);
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
function Rv(n) {
  return n instanceof Array;
}
var Ov = ["Alt", "Control", "Meta", "Shift"];
function kl(n) {
  var e = new Set(n ? Ov.filter(function(t) {
    return n.getModifierState(t);
  }) : []);
  return function(t) {
    return t.every(function(r) {
      return e.has(r);
    }) && t.length === e.size;
  };
}
var Mv = (
  /** @class */
  function(n) {
    In(e, n);
    function e(t) {
      var r = n.call(this, je(je({}, e.defaultAdapter), t)) || this;
      return r.wrapFocus = !1, r.isVertical = !0, r.isSingleSelectionList = !1, r.areDisabledItemsFocusable = !0, r.selectedIndex = vt.UNSET_INDEX, r.focusedItemIndex = vt.UNSET_INDEX, r.useActivatedClass = !1, r.useSelectedAttr = !1, r.ariaCurrentAttrValue = null, r.isCheckboxList = !1, r.isRadioList = !1, r.lastSelectedIndex = null, r.hasTypeahead = !1, r.typeaheadState = wv(), r.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return wr;
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
      return this.hasTypeahead && $d(this.typeaheadState);
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
      var a = this, s, u = bt(t) === "ArrowLeft", l = bt(t) === "ArrowUp", c = bt(t) === "ArrowRight", d = bt(t) === "ArrowDown", v = bt(t) === "Home", f = bt(t) === "End", h = bt(t) === "Enter", g = bt(t) === "Spacebar", p = this.isVertical && d || !this.isVertical && c, _ = this.isVertical && l || !this.isVertical && u, A = t.key === "A" || t.key === "a", E = kl(t);
      if (this.adapter.isRootFocused()) {
        if ((_ || f) && E([]))
          t.preventDefault(), this.focusLastElement();
        else if ((p || v) && E([]))
          t.preventDefault(), this.focusFirstElement();
        else if (_ && E(["Shift"]) && this.isCheckboxList) {
          t.preventDefault();
          var S = this.focusLastElement();
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        } else if (p && E(["Shift"]) && this.isCheckboxList) {
          t.preventDefault();
          var S = this.focusFirstElement();
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        }
        if (this.hasTypeahead) {
          var I = {
            event: t,
            focusItemAtIndex: function(y) {
              a.focusItemAtIndex(y);
            },
            focusedItemIndex: -1,
            isTargetListItem: r,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(y) {
              return a.isIndexDisabled(y);
            }
          };
          Pl(I, this.typeaheadState);
        }
        return;
      }
      var w = this.adapter.getFocusedElementIndex();
      if (!(w === -1 && (w = i, w < 0))) {
        if (p && E([]))
          En(t), this.focusNextElement(w);
        else if (_ && E([]))
          En(t), this.focusPrevElement(w);
        else if (p && E(["Shift"]) && this.isCheckboxList) {
          En(t);
          var S = this.focusNextElement(w);
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        } else if (_ && E(["Shift"]) && this.isCheckboxList) {
          En(t);
          var S = this.focusPrevElement(w);
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        } else if (v && E([]))
          En(t), this.focusFirstElement();
        else if (f && E([]))
          En(t), this.focusLastElement();
        else if (v && E(["Control", "Shift"]) && this.isCheckboxList) {
          if (En(t), this.isIndexDisabled(w))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, w, w);
        } else if (f && E(["Control", "Shift"]) && this.isCheckboxList) {
          if (En(t), this.isIndexDisabled(w))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(w, this.adapter.getListItemCount() - 1, w);
        } else if (A && E(["Control"]) && this.isCheckboxList)
          t.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === vt.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((h || g) && E([])) {
          if (r) {
            var b = t.target;
            if (b && b.tagName === "A" && h || (En(t), this.isIndexDisabled(w)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(w, !1), this.adapter.notifyAction(w));
          }
        } else if ((h || g) && E(["Shift"]) && this.isCheckboxList) {
          var b = t.target;
          if (b && b.tagName === "A" && h || (En(t), this.isIndexDisabled(w)))
            return;
          this.isTypeaheadInProgress() || (this.toggleCheckboxRange((s = this.lastSelectedIndex) !== null && s !== void 0 ? s : w, w, w), this.adapter.notifyAction(w));
        }
        if (this.hasTypeahead) {
          var I = {
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
          Pl(I, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(t, r, i) {
      var a, s = kl(i);
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
      this.isIndexValid(t, !1) && (r ? (this.adapter.removeClassForElementIndex(t, ke.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(t, wr.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(t, ke.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(t, wr.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(t, r) {
      if (r === void 0 && (r = {}), !(this.selectedIndex === t && !r.forceUpdate)) {
        var i = ke.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (i = ke.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== vt.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, i), this.setAriaForSingleSelectionAtIndex(t), this.setTabindexAtIndex(t), t !== vt.UNSET_INDEX && this.adapter.addClassForElementIndex(t, i), this.selectedIndex = t, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([t]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(t) {
      this.selectedIndex === vt.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(t, wr.ARIA_CURRENT));
      var r = this.ariaCurrentAttrValue !== null, i = r ? wr.ARIA_CURRENT : wr.ARIA_SELECTED;
      if (this.selectedIndex !== vt.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), t !== vt.UNSET_INDEX) {
        var a = r ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(t, i, a);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? wr.ARIA_SELECTED : wr.ARIA_CHECKED;
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
      for (var a = new Set(this.selectedIndex === vt.UNSET_INDEX ? [] : this.selectedIndex), s = !(a != null && a.has(i)), u = El([t, r].sort(), 2), l = u[0], c = u[1], d = this.getSelectionAttribute(), v = [], f = l; f <= c; f++)
        if (!this.isIndexDisabled(f)) {
          var h = a.has(f);
          s !== h && (v.push(f), this.adapter.setCheckedCheckboxOrRadioAtIndex(f, s), this.adapter.setAttributeForElementIndex(f, d, "" + s), s ? a.add(f) : a.delete(f));
        }
      v.length && (this.selectedIndex = Rf([], El(a)), this.adapter.notifySelectionChange(v));
    }, e.prototype.setTabindexAtIndex = function(t) {
      this.focusedItemIndex === vt.UNSET_INDEX && t !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== t && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== t && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), t !== vt.UNSET_INDEX && this.adapter.setAttributeForElementIndex(t, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var t = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(t);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== vt.UNSET_INDEX ? this.selectedIndex : Rv(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(t, r) {
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
      return _o(s, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return Tv(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      eu(this.typeaheadState);
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
var tu = (
  /** @class */
  function(n) {
    In(e, n);
    function e(t) {
      var r = n.call(this, je(je({}, e.defaultAdapter), t)) || this;
      return r.isSurfaceOpen = !1, r.isQuickOpen = !1, r.isHoistedElement = !1, r.isFixedPosition = !1, r.isHorizontallyCenteredOnViewport = !1, r.maxHeight = 0, r.openBottomBias = 0, r.openAnimationEndTimerId = 0, r.closeAnimationEndTimerId = 0, r.animationRequestId = 0, r.anchorCorner = hi.TOP_START, r.originCorner = hi.TOP_START, r.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, r.position = { x: 0, y: 0 }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ev;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return xv;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return va;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "Corner", {
      get: function() {
        return hi;
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
        }, va.TRANSITION_OPEN_DURATION);
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
          }, va.TRANSITION_CLOSE_DURATION);
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
      d.width / v.width > va.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (s = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(f), this.adapter.setTransformOrigin(s + " " + a), this.adapter.setPosition(f), this.adapter.setMaxHeight(i ? i + "px" : ""), this.hasBit(r, ht.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
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
      var _, A;
      p ? (_ = i.left + a.width + this.anchorMargin.right, A = i.right - this.anchorMargin.right) : (_ = i.left + this.anchorMargin.left, A = i.right + a.width - this.anchorMargin.left);
      var E = _ - s.width > 0, S = A - s.width > 0, I = this.hasBit(t, ht.FLIP_RTL) && this.hasBit(t, ht.RIGHT);
      return S && I && f || !E && I ? t = this.unsetBit(t, ht.RIGHT) : (E && p && f || E && !p && g || !S && _ >= A) && (t = this.setBit(t, ht.RIGHT)), t;
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
      }, va.TOUCH_EVENT_WAIT_MS);
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
var Ni = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
}, Oi = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected",
  SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
}, Fv = {
  FOCUS_ROOT_INDEX: -1
}, Pi;
(function(n) {
  n[n.NONE = 0] = "NONE", n[n.LIST_ROOT = 1] = "LIST_ROOT", n[n.FIRST_ITEM = 2] = "FIRST_ITEM", n[n.LAST_ITEM = 3] = "LAST_ITEM";
})(Pi || (Pi = {}));
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
var Pv = (
  /** @class */
  function(n) {
    In(e, n);
    function e(t) {
      var r = n.call(this, je(je({}, e.defaultAdapter), t)) || this;
      return r.closeAnimationEndTimerId = 0, r.defaultFocusState = Pi.LIST_ROOT, r.selectedIndex = -1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ni;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Oi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Fv;
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
        var a = this.adapter.getAttributeFromElementAtIndex(i, Oi.SKIP_RESTORE_FOCUS) === "true";
        this.adapter.closeSurface(a), this.closeAnimationEndTimerId = setTimeout(function() {
          var s = r.adapter.getElementIndex(t);
          s >= 0 && r.adapter.isSelectableItemAtIndex(s) && r.setSelectedIndex(s);
        }, tu.numbers.TRANSITION_CLOSE_DURATION);
      }
    }, e.prototype.handleMenuSurfaceOpened = function() {
      switch (this.defaultFocusState) {
        case Pi.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case Pi.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case Pi.NONE:
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
      r >= 0 && (this.adapter.removeAttributeFromElementAtIndex(r, Oi.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(r, Ni.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(t, Ni.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(t, Oi.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = t;
    }, e.prototype.setEnabled = function(t, r) {
      this.validatedIndex(t), r ? (this.adapter.removeClassFromElementAtIndex(t, ke.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(t, Oi.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(t, ke.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(t, Oi.ARIA_DISABLED_ATTR, "true"));
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
}, ei = {
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
var kv = (
  /** @class */
  function(n) {
    In(e, n);
    function e(t, r) {
      r === void 0 && (r = {});
      var i = n.call(this, je(je({}, e.defaultAdapter), t)) || this;
      return i.disabled = !1, i.isMenuOpen = !1, i.useDefaultValidation = !0, i.customValidity = !0, i.lastSelectedIndex = ei.UNSET_INDEX, i.clickDebounceTimeout = 0, i.recentlyClicked = !1, i.leadingIcon = r.leadingIcon, i.helperText = r.helperText, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return lt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return ei;
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
      r === void 0 && (r = !1), i === void 0 && (i = !1), !(t >= this.adapter.getMenuItemCount()) && (t === ei.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(t).trim()), this.adapter.setSelectedIndex(t), r && this.adapter.closeMenu(), !i && this.lastSelectedIndex !== t && this.handleChange(), this.lastSelectedIndex = t);
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
      return t !== ei.UNSET_INDEX ? r[t] : "";
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
        var r = bt(t) === Le.ENTER, i = bt(t) === Le.SPACEBAR, a = bt(t) === Le.ARROW_UP, s = bt(t) === Le.ARROW_DOWN, u = t.ctrlKey || t.metaKey;
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
          var i = ei.LABEL_SCALE, a = this.adapter.getLabelWidth() * i;
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
      return this.useDefaultValidation && this.adapter.hasClass(lt.REQUIRED) && !this.adapter.hasClass(lt.DISABLED) ? this.getSelectedIndex() !== ei.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(t) {
      t ? this.adapter.addClass(lt.REQUIRED) : this.adapter.removeClass(lt.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", t.toString()), this.adapter.setLabelRequired(t);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var t = this.adapter.getAnchorElement();
      t && (this.adapter.setMenuAnchorElement(t), this.adapter.setMenuAnchorCorner(hi.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(lt.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(lt.INVALID)), this.layout(), this.layoutOptions();
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
      }, ei.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
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
var ti = {
  ARIA_HIDDEN: "aria-hidden",
  ROLE: "role"
}, fr = {
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
var Gv = (
  /** @class */
  function(n) {
    In(e, n);
    function e(t) {
      return n.call(this, je(je({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return fr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return ti;
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
      return this.adapter.getAttr(ti.ARIA_HIDDEN) !== "true";
    }, e.prototype.setContent = function(t) {
      this.adapter.setContent(t);
    }, e.prototype.setValidation = function(t) {
      t ? this.adapter.addClass(fr.HELPER_TEXT_VALIDATION_MSG) : this.adapter.removeClass(fr.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.setValidationMsgPersistent = function(t) {
      t ? this.adapter.addClass(fr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT) : this.adapter.removeClass(fr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.getIsValidation = function() {
      return this.adapter.hasClass(fr.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.getIsValidationMsgPersistent = function() {
      return this.adapter.hasClass(fr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.setValidity = function(t) {
      var r = this.adapter.hasClass(fr.HELPER_TEXT_VALIDATION_MSG);
      if (r) {
        var i = this.adapter.hasClass(fr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT), a = !t || i;
        if (a) {
          this.showToScreenReader(), t ? this.adapter.removeAttr(ti.ROLE) : this.adapter.setAttr(ti.ROLE, "alert");
          return;
        }
        this.adapter.removeAttr(ti.ROLE), this.hide();
      }
    }, e.prototype.showToScreenReader = function() {
      this.adapter.removeAttr(ti.ARIA_HIDDEN);
    }, e.prototype.hide = function() {
      this.adapter.setAttr(ti.ARIA_HIDDEN, "true");
    }, e;
  }(bn)
), Nv = /* @__PURE__ */ X("<div><!></div>");
function Zv(n, e) {
  Ce(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "static", 3, !1), s = m(e, "anchor", 3, !0), u = m(e, "fixed", 3, !1), l = m(e, "open", 31, () => Ee(a())), c = m(e, "managed", 3, !1), d = m(e, "fullWidth", 3, !1), v = m(e, "quickOpen", 3, !1), f = m(e, "anchorElement", 15), h = m(e, "anchorMargin", 19, () => ({ top: 0, right: 0, bottom: 0, left: 0 })), g = m(e, "maxHeight", 3, 0), p = m(e, "horizontallyCenteredOnViewport", 3, !1), _ = m(e, "openBottomBias", 3, 0), A = m(e, "neverRestoreFocus", 3, !1), E = /* @__PURE__ */ Ve(e, [
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
  ]), S, I = /* @__PURE__ */ le(void 0), w = Ee({}), b = Ee({}), y = /* @__PURE__ */ le(void 0);
  de("SMUI:list:role", "menu"), de("SMUI:list:item:role", "menuitem"), xe(() => {
    var k, Q;
    S && s() && !((k = S.parentElement) != null && k.classList.contains("mdc-menu-surface--anchor")) && ((Q = S.parentElement) == null || Q.classList.add("mdc-menu-surface--anchor"), f(S.parentElement ?? void 0));
  }), xe(() => {
    o(I) && o(I).isOpen() !== l() && (l() ? o(I).open() : o(I).close());
  }), xe(() => {
    o(I) && o(I).setQuickOpen(v());
  }), xe(() => {
    o(I) && o(I).setFixedPosition(u());
  }), xe(() => {
    o(I) && o(I).setMaxHeight(g());
  }), xe(() => {
    o(I) && o(I).setIsHorizontallyCenteredOnViewport(p());
  });
  const C = hi;
  xe(() => {
    o(I) && e.anchorCorner != null && (typeof e.anchorCorner == "string" ? o(I).setAnchorCorner(C[e.anchorCorner]) : o(I).setAnchorCorner(e.anchorCorner));
  }), xe(() => {
    o(I) && o(I).setAnchorMargin(h());
  }), xe(() => {
    o(I) && o(I).setOpenBottomBias(_());
  });
  const T = ye("SMUI:menu-surface:mount"), D = ye("SMUI:menu-surface:unmount");
  it(() => {
    U(
      I,
      new tu({
        addClass: F,
        removeClass: P,
        hasClass: M,
        hasAnchor: () => !!f(),
        notifyClose: () => {
          c() || l(a()), l() || Be($(), "SMUIMenuSurfaceClosed");
        },
        notifyClosing: () => {
          c() || l(a()), l() || Be($(), "SMUIMenuSurfaceClosing");
        },
        notifyOpen: () => {
          c() || l(!0), l() && Be($(), "SMUIMenuSurfaceOpened");
        },
        notifyOpening: () => {
          l() || Be($(), "SMUIMenuSurfaceOpening");
        },
        isElementInContainer: (Q) => $().contains(Q),
        isRtl: () => getComputedStyle($()).getPropertyValue("direction") === "rtl",
        setTransformOrigin: (Q) => {
          b["transform-origin"] = Q;
        },
        isFocused: () => document.activeElement === $(),
        saveFocus: () => {
          U(y, document.activeElement ?? void 0, !0);
        },
        restoreFocus: () => {
          !A() && (!S || $().contains(document.activeElement)) && o(y) && document.contains(o(y)) && "focus" in o(y) && o(y).focus();
        },
        getInnerDimensions: () => ({
          width: $().offsetWidth,
          height: $().offsetHeight
        }),
        getAnchorDimensions: () => f() ? f().getBoundingClientRect() : null,
        getWindowDimensions: () => ({ width: window.innerWidth, height: window.innerHeight }),
        getBodyDimensions: () => ({
          width: document.body.clientWidth,
          height: document.body.clientHeight
        }),
        getWindowScroll: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
        setPosition: (Q) => {
          b.left = "left" in Q ? `${Q.left}px` : "", b.right = "right" in Q ? `${Q.right}px` : "", b.top = "top" in Q ? `${Q.top}px` : "", b.bottom = "bottom" in Q ? `${Q.bottom}px` : "";
        },
        setMaxHeight: (Q) => {
          b["max-height"] = Q;
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
    return T && T(k), o(I).init(), () => {
      var Y, me;
      D && D(k);
      const Q = o(I).isHoistedElement;
      (Y = o(I)) == null || Y.destroy(), Q && ((me = $().parentNode) == null || me.removeChild($()));
    };
  }), Fn(() => {
    var k;
    s() && $() && ((k = $().parentElement) == null || k.classList.remove("mdc-menu-surface--anchor"));
  });
  function M(k) {
    return k in w ? w[k] : $().classList.contains(k);
  }
  function F(k) {
    w[k] || (w[k] = !0);
  }
  function P(k) {
    (!(k in w) || w[k]) && (w[k] = !1);
  }
  function re(k) {
    var Q;
    (Q = o(I)) == null || Q.close(k), l(!1);
  }
  function W(k) {
    o(I) && l() && !c() && o(I).handleBodyClick(k);
  }
  function N() {
    return l();
  }
  function H(k) {
    l(k);
  }
  function ee(k, Q) {
    if (o(I) == null)
      throw new Error("Instance is not defined.");
    return o(I).setAbsolutePosition(k, Q);
  }
  function fe(k) {
    if (o(I) == null)
      throw new Error("Instance is not defined.");
    return o(I).setIsHoisted(k);
  }
  function O() {
    if (o(I) == null)
      throw new Error("Instance is not defined.");
    return o(I).isFixed();
  }
  function J() {
    if (o(I) == null)
      throw new Error("Instance is not defined.");
    return o(I).flipCornerHorizontally();
  }
  function $() {
    return S;
  }
  var ve = {
    isOpen: N,
    setOpen: H,
    setAbsolutePosition: ee,
    setIsHoisted: fe,
    isFixed: O,
    flipCornerHorizontally: J,
    getElement: $
  }, ue = Nv();
  Kt("click", Bo.body, W, !0);
  var B = (k) => {
    var Q;
    o(I) && !c() && o(I).handleKeydown(k), (Q = e.onkeydown) == null || Q.call(e, k);
  };
  He(
    ue,
    (k, Q) => ({
      class: k,
      style: Q,
      role: "dialog",
      ...E,
      onkeydown: B
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
      () => Object.entries(b).map(([k, Q]) => `${k}: ${Q};`).concat([i()]).join(" ")
    ]
  );
  var z = j(ue);
  return _e(z, () => e.children ?? be), Se(ue, (k) => S = k, () => S), De(ue, (k, Q) => ie == null ? void 0 : ie(k, Q), t), x(n, ue), Ae(ve);
}
function to(n, { addClass: e = (r) => n.classList.add(r), removeClass: t = (r) => n.classList.remove(r) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      t("mdc-menu-surface--anchor");
    }
  };
}
function Hv(n, e) {
  Ce(e, !0);
  const { closest: t } = ka;
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
  de("SMUI:menu-surface:mount", (C) => {
    o(v) || U(v, C, !0);
  });
  const h = ye("SMUI:list:mount");
  de("SMUI:list:mount", (C) => {
    o(f) || U(f, C, !0), h && h(C);
  });
  const g = ye("SMUI:menu:mount"), p = ye("SMUI:menu:unmount");
  it(() => (U(
    d,
    new Pv({
      addClassToElementAtIndex: (C, T) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).addClassForElementIndex(C, T);
      },
      removeClassFromElementAtIndex: (C, T) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).removeClassForElementIndex(C, T);
      },
      addAttributeToElementAtIndex: (C, T, D) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).setAttributeForElementIndex(C, T, D);
      },
      removeAttributeFromElementAtIndex: (C, T) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).removeAttributeForElementIndex(C, T);
      },
      getAttributeFromElementAtIndex: (C, T) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return o(f).getAttributeFromElementIndex(C, T);
      },
      elementContainsClass: (C, T) => C.classList.contains(T),
      closeSurface: (C) => {
        var T;
        u() || ((T = o(v)) == null || T.closeProgrammatic(C), Be(b(), "SMUIMenuClosedProgrammatically"));
      },
      getElementIndex: (C) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return o(f).getOrderedList().map((T) => T.element).indexOf(C);
      },
      notifySelected: (C) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        Be(b(), "SMUIMenuSelected", {
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
        return !!t(o(f).getOrderedList()[C].element, `.${Ni.MENU_SELECTION_GROUP}`);
      },
      getSelectedSiblingOfItemAtIndex: (C) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        const T = o(f).getOrderedList(), D = t(T[C].element, `.${Ni.MENU_SELECTION_GROUP}`), M = D == null ? void 0 : D.querySelector(`.${Ni.MENU_SELECTED_LIST_ITEM}`);
        return M ? T.map((F) => F.element).indexOf(M) : -1;
      }
    }),
    !0
  ), g && g(o(d)), o(d).init(), () => {
    var C;
    p && o(d) && p(o(d)), (C = o(d)) == null || C.destroy();
  }));
  function _(C) {
    o(d) && o(d).handleKeydown(C);
  }
  function A() {
    return a();
  }
  function E(C) {
    a(C);
  }
  function S(C) {
    if (o(d) == null)
      throw new Error("Instance is undefined.");
    o(d).setDefaultFocusState(C);
  }
  function I() {
    if (o(d) == null)
      throw new Error("Instance is undefined.");
    return o(d).getSelectedIndex();
  }
  function w() {
    return c;
  }
  function b() {
    return c.getElement();
  }
  var y = {
    isOpen: A,
    setOpen: E,
    setDefaultFocusState: S,
    getSelectedIndex: I,
    getMenuSurface: w,
    getElement: b
  };
  {
    let C = /* @__PURE__ */ oe(() => Ze({ "mdc-menu": !0, [i()]: !0 }));
    Se(
      Zv(n, Ke(
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
          onkeydown: (T) => {
            var D;
            _(T), (D = e.onkeydown) == null || D.call(e, T);
          },
          onSMUIMenuSurfaceOpened: (T) => {
            var D;
            o(d) && o(d).handleMenuSurfaceOpened(), (D = e.onSMUIMenuSurfaceOpened) == null || D.call(e, T);
          },
          onSMUIListAction: (T) => {
            var D;
            o(d) && o(f) && o(d).handleItemAction(o(f).getOrderedList()[T.detail.index].element), (D = e.onSMUIListAction) == null || D.call(e, T);
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
          children: (T, D) => {
            var M = se(), F = q(M);
            _e(F, () => e.children ?? be), x(T, M);
          },
          $$slots: { default: !0 }
        }
      )),
      (T) => c = T,
      () => c
    );
  }
  return Ae(y);
}
function Bv(n, e) {
  Ce(e, !0);
  const { closest: t, matches: r } = ka;
  let i = ye("SMUI:list:nav"), a = m(e, "use", 19, () => []), s = m(e, "class", 3, ""), u = m(e, "nonInteractive", 3, !1), l = m(e, "dense", 3, !1), c = m(e, "textualList", 3, !1), d = m(e, "avatarList", 3, !1), v = m(e, "iconList", 3, !1), f = m(e, "imageList", 3, !1), h = m(e, "thumbnailList", 3, !1), g = m(e, "videoList", 3, !1), p = m(e, "twoLine", 3, !1), _ = m(e, "threeLine", 3, !1), A = m(e, "vertical", 3, !0), E = m(e, "wrapFocus", 19, () => ye("SMUI:list:wrapFocus") ?? !1), S = m(e, "singleSelection", 3, !1), I = m(e, "disabledItemsFocusable", 3, !1), w = m(e, "selectedIndex", 31, () => -1), b = m(e, "radioList", 3, !1), y = m(e, "checkList", 3, !1), C = m(e, "hasTypeahead", 3, !1), T = m(e, "component", 3, Os), D = m(e, "tag", 3, i ? "nav" : "ul"), M = /* @__PURE__ */ Ve(e, [
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
  ]), F, P = /* @__PURE__ */ le(void 0), re = [], W = ye("SMUI:list:role");
  const N = /* @__PURE__ */ new WeakMap();
  let H = ye("SMUI:dialog:selection"), ee = ye("SMUI:addLayoutListener"), fe;
  de("SMUI:list:nonInteractive", u()), de("SMUI:separator:context", "list"), W || (S() ? (W = "listbox", de("SMUI:list:item:role", "option")) : b() ? (W = "radiogroup", de("SMUI:list:item:role", "radio")) : y() ? (W = "group", de("SMUI:list:item:role", "checkbox")) : (W = "list", de("SMUI:list:item:role", void 0))), xe(() => {
    o(P) && o(P).setVerticalOrientation(A());
  }), xe(() => {
    o(P) && o(P).setWrapFocus(E());
  }), xe(() => {
    o(P) && o(P).setHasTypeahead(C());
  }), xe(() => {
    o(P) && o(P).setSingleSelection(S());
  }), xe(() => {
    o(P) && o(P).setDisabledItemsFocusable(I());
  }), xe(() => {
    o(P) && S() && R() !== w() && o(P).setSelectedIndex(w());
  }), ee && (fe = ee(st)), de("SMUI:list:item:mount", (pe) => {
    re.push(pe), N.set(pe.element, pe), S() && pe.selected && w(Re(pe.element));
  }), de("SMUI:list:item:unmount", (pe) => {
    const Z = (pe && re.findIndex((G) => G === pe)) ?? -1;
    Z !== -1 && (re.splice(Z, 1), N.delete(pe.element));
  });
  const O = ye("SMUI:list:mount"), J = ye("SMUI:list:unmount");
  it(() => {
    U(
      P,
      new Mv({
        addClassForElementIndex: Y,
        focusItemAtIndex: he,
        getAttributeForElementIndex: (Z, G) => {
          var te;
          return ((te = k()[Z]) == null ? void 0 : te.getAttr(G)) ?? null;
        },
        getFocusedElementIndex: () => document.activeElement ? k().map((Z) => Z.element).indexOf(document.activeElement) : -1,
        getListItemCount: () => re.length,
        getPrimaryTextAtIndex: qe,
        hasCheckboxAtIndex: (Z) => {
          var G;
          return ((G = k()[Z]) == null ? void 0 : G.hasCheckbox) ?? !1;
        },
        hasRadioAtIndex: (Z) => {
          var G;
          return ((G = k()[Z]) == null ? void 0 : G.hasRadio) ?? !1;
        },
        isCheckboxCheckedAtIndex: (Z) => {
          const G = k()[Z];
          return ((G == null ? void 0 : G.hasCheckbox) && G.checked) ?? !1;
        },
        isFocusInsideList: () => F != null && Fe() !== document.activeElement && Fe().contains(document.activeElement),
        isRootFocused: () => F != null && document.activeElement === Fe(),
        listItemAtIndexHasClass: Q,
        notifyAction: (Z) => {
          w(Z), F != null && Be(Fe(), "SMUIListAction", { index: Z });
        },
        notifySelectionChange: (Z) => {
          F != null && Be(Fe(), "SMUIListSelectionChange", { changedIndices: Z });
        },
        removeClassForElementIndex: me,
        setAttributeForElementIndex: Ie,
        setCheckedCheckboxOrRadioAtIndex: (Z, G) => {
          k()[Z].checked = G;
        },
        setTabIndexForListItemChildren: (Z, G) => {
          const te = k()[Z];
          Array.prototype.forEach.call(te.element.querySelectorAll("button:not(:disabled), a"), (ot) => {
            ot.setAttribute("tabindex", G);
          });
        }
      }),
      !0
    );
    const pe = {
      get element() {
        return Fe();
      },
      get items() {
        return re;
      },
      get typeaheadInProgress() {
        if (!o(P))
          throw new Error("Instance is undefined.");
        return o(P).isTypeaheadInProgress();
      },
      typeaheadMatchItem(Z, G) {
        if (!o(P))
          throw new Error("Instance is undefined.");
        return o(P).typeaheadMatchItem(
          Z,
          G,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: k,
      focusItemAtIndex: he,
      addClassForElementIndex: Y,
      removeClassForElementIndex: me,
      setAttributeForElementIndex: Ie,
      removeAttributeForElementIndex: Ne,
      getAttributeFromElementIndex: nt,
      getPrimaryTextAtIndex: qe
    };
    return O && O(pe), o(P).init(), o(P).layout(), () => {
      var Z;
      J && J(pe), (Z = o(P)) == null || Z.destroy();
    };
  }), Fn(() => {
    fe && fe();
  });
  function $(pe) {
    o(P) && pe.target && o(P).handleKeydown(pe, pe.target.classList.contains("mdc-deprecated-list-item"), Re(pe.target));
  }
  function ve(pe) {
    o(P) && pe.target && o(P).handleFocusIn(Re(pe.target));
  }
  function ue(pe) {
    o(P) && pe.target && o(P).handleFocusOut(Re(pe.target));
  }
  function B(pe) {
    o(P) && pe.target && o(P).handleClick(Re(pe.target), !r(pe.target, 'input[type="checkbox"], input[type="radio"]'), pe);
  }
  function z(pe) {
    if (b() || y()) {
      const Z = Re(pe.target);
      if (Z !== -1) {
        const G = k()[Z];
        G && (b() && !G.checked || y()) && (r(pe.detail.target, 'input[type="checkbox"], input[type="radio"]') || (G.checked = !G.checked), G.activateRipple(), window.requestAnimationFrame(() => {
          G.deactivateRipple();
        }));
      }
    }
  }
  function k() {
    return F == null ? [] : [...Fe().children].map((pe) => N.get(pe)).filter((pe) => pe && pe._smui_list_item_accessor);
  }
  function Q(pe, Z) {
    const G = k()[pe];
    return (G && G.hasClass(Z)) ?? !1;
  }
  function Y(pe, Z) {
    const G = k()[pe];
    G && G.addClass(Z);
  }
  function me(pe, Z) {
    const G = k()[pe];
    G && G.removeClass(Z);
  }
  function Ie(pe, Z, G) {
    const te = k()[pe];
    te && te.addAttr(Z, G);
  }
  function Ne(pe, Z) {
    const G = k()[pe];
    G && G.removeAttr(Z);
  }
  function nt(pe, Z) {
    const G = k()[pe];
    return G ? G.getAttr(Z) : null;
  }
  function qe(pe) {
    const Z = k()[pe];
    return (Z && Z.getPrimaryText()) ?? "";
  }
  function Re(pe) {
    const Z = t(pe, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return Z && r(Z, ".mdc-deprecated-list-item") ? k().map((G) => G == null ? void 0 : G.element).indexOf(Z) : -1;
  }
  function st() {
    if (!o(P))
      throw new Error("Instance is undefined.");
    return o(P).layout();
  }
  function Pt(pe, Z) {
    if (!o(P))
      throw new Error("Instance is undefined.");
    return o(P).setEnabled(pe, Z);
  }
  function kt() {
    if (!o(P))
      throw new Error("Instance is undefined.");
    return o(P).isTypeaheadInProgress();
  }
  function R() {
    if (!o(P))
      throw new Error("Instance is undefined.");
    return o(P).getSelectedIndex();
  }
  function V() {
    if (!o(P))
      throw new Error("Instance is undefined.");
    return o(P).getFocusedItemIndex();
  }
  function he(pe) {
    const Z = k()[pe];
    Z && "focus" in Z.element && Z.element.focus();
  }
  function Fe() {
    return F.getElement();
  }
  var Gt = {
    layout: st,
    setEnabled: Pt,
    getTypeaheadInProgress: kt,
    getSelectedIndex: R,
    getFocusedItemIndex: V,
    focusItemAtIndex: he,
    getElement: Fe
  }, vn = se(), sr = q(vn);
  {
    let pe = /* @__PURE__ */ oe(() => Ze({
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
    Pa(sr, T, (Z, G) => {
      Se(
        G(Z, Ke(
          {
            get tag() {
              return D();
            },
            get use() {
              return a();
            },
            get class() {
              return o(pe);
            },
            get role() {
              return W;
            }
          },
          () => M,
          {
            onkeydown: (te) => {
              var Te;
              $(te), (Te = e.onkeydown) == null || Te.call(e, te);
            },
            onfocusin: (te) => {
              var Te;
              ve(te), (Te = e.onfocusin) == null || Te.call(e, te);
            },
            onfocusout: (te) => {
              var Te;
              ue(te), (Te = e.onfocusout) == null || Te.call(e, te);
            },
            onclick: (te) => {
              var Te;
              B(te), (Te = e.onclick) == null || Te.call(e, te);
            },
            onSMUIAction: (te) => {
              var Te;
              z(te), (Te = e.onSMUIAction) == null || Te.call(e, te);
            },
            children: (te, Te) => {
              var ot = se(), pt = q(ot);
              _e(pt, () => e.children ?? be), x(te, ot);
            },
            $$slots: { default: !0 }
          }
        )),
        (te) => F = te,
        () => F
      );
    });
  }
  return x(n, vn), Ae(Gt);
}
let Uv = 0;
var Wv = /* @__PURE__ */ X('<span class="mdc-deprecated-list-item__ripple"></span>'), jv = /* @__PURE__ */ X("<!><!>", 1);
function Vv(n, e) {
  Ce(e, !0);
  let t = () => {
  };
  function r(Y) {
    return Y === t;
  }
  let i = ye("SMUI:list:item:nav"), a = m(e, "use", 19, () => []), s = m(e, "class", 3, ""), u = m(e, "style", 3, ""), l = m(e, "nonInteractive", 19, () => ye("SMUI:list:nonInteractive") ?? !1), c = m(e, "ripple", 19, () => !l()), d = m(e, "wrapper", 3, !1), v = m(e, "activated", 15, !1), f = m(e, "role", 19, () => d() ? "presentation" : ye("SMUI:list:item:role")), h = m(e, "selected", 15, !1), g = m(e, "disabled", 3, !1), p = m(e, "skipRestoreFocus", 3, !1), _ = m(e, "tabindex", 15, t), A = m(e, "inputId", 19, () => "SMUI-form-field-list-" + Uv++), E = m(e, "component", 3, Os), S = m(e, "tag", 19, () => i ? e.href ? "a" : "span" : "li"), I = /* @__PURE__ */ Ve(e, [
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
  let w, b = Ee({}), y = Ee({}), C = Ee({}), T = /* @__PURE__ */ le(void 0), D = /* @__PURE__ */ le(void 0);
  const M = /* @__PURE__ */ oe(() => r(_()) ? !l() && !g() && (h() || o(T) && o(T).checked) ? 0 : -1 : _());
  de("SMUI:generic:input:props", { id: A() }), de("SMUI:separator:context", void 0), de("SMUI:generic:input:mount", (Y) => {
    ("_smui_checkbox_accessor" in Y || "_smui_radio_accessor" in Y) && U(T, Y, !0);
  }), de("SMUI:generic:input:unmount", () => {
    U(T, void 0);
  });
  const F = ye("SMUI:list:item:mount"), P = ye("SMUI:list:item:unmount");
  it(() => {
    if (!h() && !l()) {
      let me = !0, Ie = w.getElement();
      for (; Ie.previousElementSibling; )
        if (Ie = Ie.previousElementSibling, Ie.nodeType === 1 && Ie.classList.contains("mdc-deprecated-list-item") && !Ie.classList.contains("mdc-deprecated-list-item--disabled")) {
          me = !1;
          break;
        }
      me && U(D, window.requestAnimationFrame(() => J(Ie)), !0);
    }
    const Y = {
      _smui_list_item_accessor: !0,
      get element() {
        return B();
      },
      get selected() {
        return h();
      },
      set selected(me) {
        h(me);
      },
      hasClass: re,
      addClass: W,
      removeClass: N,
      getAttr: ee,
      addAttr: fe,
      removeAttr: O,
      getPrimaryText: ue,
      // For inputs within item.
      get checked() {
        return (o(T) && o(T).checked) ?? !1;
      },
      set checked(me) {
        o(T) && (o(T).checked = !!me);
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
      action: ve,
      get tabindex() {
        return o(M);
      },
      set tabindex(me) {
        _(me);
      },
      get disabled() {
        return g();
      },
      get activated() {
        return v();
      },
      set activated(me) {
        v(me);
      }
    };
    return F && F(Y), () => {
      P && P(Y);
    };
  }), Fn(() => {
    o(D) && window.cancelAnimationFrame(o(D));
  });
  function re(Y) {
    return Y in b ? b[Y] : B().classList.contains(Y);
  }
  function W(Y) {
    b[Y] || (b[Y] = !0);
  }
  function N(Y) {
    (!(Y in b) || b[Y]) && (b[Y] = !1);
  }
  function H(Y, me) {
    y[Y] != me && (me === "" || me == null ? delete y[Y] : y[Y] = me);
  }
  function ee(Y) {
    return Y in C ? C[Y] ?? null : B().getAttribute(Y);
  }
  function fe(Y, me) {
    C[Y] !== me && (C[Y] = me);
  }
  function O(Y) {
    (!(Y in C) || C[Y] != null) && (C[Y] = void 0);
  }
  function J(Y) {
    let me = !0;
    for (; Y.nextElementSibling; )
      if (Y = Y.nextElementSibling, Y.nodeType === 1 && Y.classList.contains("mdc-deprecated-list-item")) {
        const Ie = Y.attributes.getNamedItem("tabindex");
        if (Ie && Ie.value === "0") {
          me = !1;
          break;
        }
      }
    me && _(0);
  }
  function $(Y) {
    const me = Y.key === "Enter", Ie = Y.key === "Space";
    (me || Ie) && ve(Y);
  }
  function ve(Y) {
    g() || Be(B(), "SMUIAction", Y);
  }
  function ue() {
    const Y = B(), me = Y.querySelector(".mdc-deprecated-list-item__primary-text");
    if (me)
      return me.textContent ?? "";
    const Ie = Y.querySelector(".mdc-deprecated-list-item__text");
    return Ie ? Ie.textContent ?? "" : Y.textContent ?? "";
  }
  function B() {
    return w.getElement();
  }
  var z = { action: ve, getPrimaryText: ue, getElement: B }, k = se(), Q = q(k);
  {
    let Y = /* @__PURE__ */ oe(() => [
      ...l() ? [] : [
        [
          Gn,
          {
            ripple: !o(T),
            unbounded: !1,
            color: (v() || h()) && e.color == null ? "primary" : e.color,
            disabled: g(),
            addClass: W,
            removeClass: N,
            addStyle: H
          }
        ]
      ],
      ...a()
    ]), me = /* @__PURE__ */ oe(() => Ze({
      "mdc-deprecated-list-item": !d(),
      "mdc-deprecated-list-item__wrapper": d(),
      "mdc-deprecated-list-item--activated": v(),
      "mdc-deprecated-list-item--selected": h(),
      "mdc-deprecated-list-item--disabled": g(),
      "mdc-menu-item--selected": !i && f() === "menuitem" && h(),
      "smui-menu-item--non-interactive": l(),
      ...b,
      [s()]: !0
    })), Ie = /* @__PURE__ */ oe(() => Object.entries(y).map(([nt, qe]) => `${nt}: ${qe};`).concat([u()]).join(" ")), Ne = /* @__PURE__ */ oe(() => p() || void 0);
    Pa(Q, E, (nt, qe) => {
      Se(
        qe(nt, Ke(
          {
            get tag() {
              return S();
            },
            get use() {
              return o(Y);
            },
            get class() {
              return o(me);
            },
            get style() {
              return o(Ie);
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
              return o(M);
            },
            get href() {
              return e.href;
            }
          },
          () => C,
          () => I,
          {
            onclick: (Re) => {
              var st;
              ve(Re), (st = e.onclick) == null || st.call(e, Re);
            },
            onkeydown: (Re) => {
              var st;
              $(Re), (st = e.onkeydown) == null || st.call(e, Re);
            },
            children: (Re, st) => {
              var Pt = jv(), kt = q(Pt);
              {
                var R = (he) => {
                  var Fe = Wv();
                  x(he, Fe);
                };
                ne(kt, (he) => {
                  c() && he(R);
                });
              }
              var V = K(kt);
              _e(V, () => e.children ?? be), x(Re, Pt);
            },
            $$slots: { default: !0 }
          }
        )),
        (Re) => w = Re,
        () => w
      );
    });
  }
  return x(n, k), Ae(z);
}
let zv = 0;
var Xv = /* @__PURE__ */ X("<div><!></div>");
function Yv(n, e) {
  Ce(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "id", 19, () => "SMUI-select-helper-text-" + zv++), a = m(e, "persistent", 3, !1), s = m(e, "validationMsg", 3, !1), u = /* @__PURE__ */ Ve(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "id",
    "persistent",
    "validationMsg",
    "children"
  ]), l, c = /* @__PURE__ */ le(void 0), d = Ee({}), v = Ee({}), f = /* @__PURE__ */ le(void 0);
  const h = ye("SMUI:select:helper-text:id"), g = ye("SMUI:select:helper-text:mount"), p = ye("SMUI:select:helper-text:unmount");
  it(() => (U(
    c,
    new Gv({
      addClass: A,
      removeClass: E,
      hasClass: _,
      getAttr: S,
      setAttr: I,
      removeAttr: w,
      setContent: (F) => {
        U(f, F, !0);
      }
    }),
    !0
  ), h && h(i()), g && g(o(c)), o(c).init(), () => {
    var F;
    p && o(c) && p(o(c)), (F = o(c)) == null || F.destroy();
  }));
  function _(F) {
    return F in d ? d[F] : b().classList.contains(F);
  }
  function A(F) {
    d[F] || (d[F] = !0);
  }
  function E(F) {
    (!(F in d) || d[F]) && (d[F] = !1);
  }
  function S(F) {
    return F in v ? v[F] ?? null : b().getAttribute(F);
  }
  function I(F, P) {
    v[F] !== P && (v[F] = P);
  }
  function w(F) {
    (!(F in v) || v[F] != null) && (v[F] = void 0);
  }
  function b() {
    return l;
  }
  var y = { getElement: b }, C = Xv();
  He(
    C,
    (F) => ({
      class: F,
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
  var T = j(C);
  {
    var D = (F) => {
      var P = se(), re = q(P);
      _e(re, () => e.children ?? be), x(F, P);
    }, M = (F) => {
      var P = et();
      ce(() => Me(P, o(f))), x(F, P);
    };
    ne(T, (F) => {
      o(f) == null ? F(D) : F(M, !1);
    });
  }
  return Se(C, (F) => l = F, () => l), De(C, (F, P) => ie == null ? void 0 : ie(F, P), t), x(n, C), Ae(y);
}
let qv = 0;
var Kv = /* @__PURE__ */ X("<input/>"), Qv = /* @__PURE__ */ X('<span class="mdc-select__ripple"></span>'), Jv = /* @__PURE__ */ X('<div><!> <div><!> <!> <!> <!> <span><span> </span></span> <span><svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"><polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon><polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon></svg></span> <!></div> <!></div> <!>', 1);
function $v(n, e) {
  Ce(e, !0);
  const t = () => Ii(Fe, "$selectedTextStore", r), [r, i] = Ei();
  let a = () => {
  };
  function s(L) {
    return L === a;
  }
  let u = m(e, "use", 19, () => []), l = m(e, "class", 3, ""), c = m(e, "style", 3, ""), d = m(e, "ripple", 3, !0), v = m(e, "disabled", 3, !1), f = m(e, "variant", 3, "standard"), h = m(e, "noLabel", 3, !1), g = m(e, "label", 3, void 0), p = m(e, "value", 15), _ = m(e, "key", 3, (L) => L), A = m(e, "dirty", 15, !1), E = m(e, "invalid", 15, a), S = m(e, "updateInvalid", 19, () => s(E())), I = m(e, "required", 3, !1), w = m(e, "inputId", 19, () => "SMUI-select-" + qv++), b = m(e, "hiddenInput", 3, !1), y = m(e, "withLeadingIcon", 3, a), C = m(e, "anchor$use", 19, () => []), T = m(e, "anchor$class", 3, ""), D = m(e, "selectedTextContainer$use", 19, () => []), M = m(e, "selectedTextContainer$class", 3, ""), F = m(e, "selectedText$use", 19, () => []), P = m(e, "selectedText$class", 3, ""), re = m(e, "dropdownIcon$use", 19, () => []), W = m(e, "dropdownIcon$class", 3, ""), N = m(e, "menu$class", 3, ""), H = /* @__PURE__ */ Ve(e, [
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
  const ee = s(E());
  s(E()) && E(!1);
  let fe, O = /* @__PURE__ */ le(void 0), J = Ee({}), $ = Ee({}), ve, ue = Ee({}), B = /* @__PURE__ */ le(-1);
  const z = /* @__PURE__ */ oe(() => H.menu$id ?? w() + "-menu");
  let k = /* @__PURE__ */ le(void 0), Q = ye("SMUI:addLayoutListener"), Y, me = /* @__PURE__ */ le(!1), Ie = Ee({}), Ne = /* @__PURE__ */ le(void 0), nt = /* @__PURE__ */ le(void 0), qe = /* @__PURE__ */ le(!1), Re, st = ye("SMUI:select:context"), Pt, kt, R, V, he;
  de("SMUI:list:role", ""), de("SMUI:list:nav", !1);
  const Fe = jn("");
  de("SMUI:select:selectedText", Fe);
  const Gt = jn(p());
  xe(() => {
    nr(Gt, p());
  }), de("SMUI:select:value", Gt), xe(() => {
    o(O) && o(O).getValue() !== _()(p()) && o(O).setValue(_()(p()));
  });
  let vn = o(B);
  xe(() => {
    if (vn !== o(B))
      if (vn = o(B), o(O))
        o(O).setSelectedIndex(
          o(B),
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const L = an();
        p() !== L[o(B)] && p(L[o(B)]);
      }
  }), xe(() => {
    o(O) && o(O).getDisabled() !== v() && o(O).setDisabled(v());
  }), xe(() => {
    o(O) && A() && o(O).isValid() !== !E() && (S() ? E(!o(O).isValid()) : o(O).setValid(!E()));
  }), xe(() => {
    o(O) && o(O).getRequired() !== I() && o(O).setRequired(I());
  }), Q && (Y = Q(Ba)), de("SMUI:select:leading-icon:mount", (L) => {
    Pt = L;
  }), de("SMUI:select:leading-icon:unmount", () => {
    Pt = void 0;
  }), de("SMUI:list:mount", (L) => {
    Re = L;
  }), de("SMUI:select:helper-text:id", (L) => {
    U(k, L, !0);
  }), de("SMUI:select:helper-text:mount", (L) => {
    kt = L;
  }), de("SMUI:select:helper-text:unmount", () => {
    U(k, void 0), kt = void 0;
  }), it(() => (U(
    O,
    new kv(
      {
        // getSelectAdapterMethods
        // getMenuItemAttr: (menuItem: Element, attr: string) =>
        //   menuItem.getAttribute(attr),
        setSelectedText: (L) => {
          nr(Fe, L);
        },
        isSelectAnchorFocused: () => document.activeElement === ve,
        getSelectAnchorAttr: ot,
        setSelectAnchorAttr: pt,
        removeSelectAnchorAttr: Nt,
        addMenuClass: te,
        removeMenuClass: Te,
        openMenu: () => {
          U(me, !0);
        },
        closeMenu: () => {
          U(me, !1);
        },
        getAnchorElement: () => ve,
        setMenuAnchorElement: (L) => {
          U(Ne, L, !0);
        },
        setMenuAnchorCorner: (L) => {
          U(nt, L, !0);
        },
        setMenuWrapFocus: (L) => {
          U(qe, L, !0);
        },
        getSelectedIndex: () => o(B),
        setSelectedIndex: (L) => {
          vn = L, U(B, L, !0), p(an()[o(B)]);
        },
        focusMenuItemAtIndex: (L) => {
          Re.focusItemAtIndex(L);
        },
        getMenuItemCount: () => Re.items.length,
        getMenuItemValues: () => an().map(_()),
        getMenuItemTextAtIndex: (L) => Re.getPrimaryTextAtIndex(L),
        isTypeaheadInProgress: () => Re.typeaheadInProgress,
        typeaheadMatchItem: (L, ge) => Re.typeaheadMatchItem(L, ge),
        // getCommonAdapterMethods
        addClass: pe,
        removeClass: Z,
        hasClass: sr,
        setRippleCenter: (L) => V && V.setRippleCenter(L),
        activateBottomLine: () => V && V.activate(),
        deactivateBottomLine: () => V && V.deactivate(),
        notifyChange: (L) => {
          var ge;
          A(!0), S() && E(!((ge = o(O)) != null && ge.isValid())), Be(Ar(), "SMUISelectChange", { value: p(), index: o(B) });
        },
        // getOutlineAdapterMethods
        hasOutline: () => !!he,
        notchOutline: (L) => he && he.notch(L),
        closeOutline: () => he && he.closeNotch(),
        // getLabelAdapterMethods
        hasLabel: () => !!R,
        floatLabel: (L) => R && R.float(L),
        getLabelWidth: () => R ? R.getWidth() : 0,
        setLabelRequired: (L) => R && R.setRequired(L)
      },
      {
        get helperText() {
          return kt;
        },
        get leadingIcon() {
          return Pt;
        }
      }
    ),
    !0
  ), U(B, an().indexOf(p()), !0), o(O).init(), sn(ee), () => {
    var L;
    (L = o(O)) == null || L.destroy();
  })), Fn(() => {
    Y && Y();
  });
  function sr(L) {
    return L in J ? J[L] : Ar().classList.contains(L);
  }
  function pe(L) {
    J[L] || (J[L] = !0);
  }
  function Z(L) {
    (!(L in J) || J[L]) && (J[L] = !1);
  }
  function G(L, ge) {
    $[L] != ge && (ge === "" || ge == null ? delete $[L] : $[L] = ge);
  }
  function te(L) {
    Ie[L] || (Ie[L] = !0);
  }
  function Te(L) {
    (!(L in Ie) || Ie[L]) && (Ie[L] = !1);
  }
  function ot(L) {
    return L in ue ? ue[L] ?? null : Ar().getAttribute(L);
  }
  function pt(L, ge) {
    ue[L] !== ge && (ue[L] = ge);
  }
  function Nt(L) {
    (!(L in ue) || ue[L] != null) && (ue[L] = void 0);
  }
  function an() {
    return Re.getOrderedList().map((L) => L.getValue());
  }
  function xi(L) {
    const ge = L.currentTarget.getBoundingClientRect();
    return (ut(L) ? L.touches[0].clientX : L.clientX) - ge.left;
  }
  function ut(L) {
    return "touches" in L;
  }
  function Zt() {
    if (o(O) == null)
      throw new Error("Instance is undefined.");
    return o(O).getUseDefaultValidation();
  }
  function sn(L) {
    var ge;
    (ge = o(O)) == null || ge.setUseDefaultValidation(L);
  }
  function Cr() {
    ve.focus();
  }
  function Ba() {
    var L;
    (L = o(O)) == null || L.layout();
  }
  function Ar() {
    return fe;
  }
  var Ge = {
    getUseDefaultValidation: Zt,
    setUseDefaultValidation: sn,
    focus: Cr,
    layout: Ba,
    getElement: Ar
  }, Qe = Jv(), ze = q(Qe);
  He(ze, (L, ge, rt) => ({ class: L, style: ge, ...rt }), [
    () => Ze({
      "mdc-select": !0,
      "mdc-select--required": I(),
      "mdc-select--disabled": v(),
      "mdc-select--filled": f() === "filled",
      "mdc-select--outlined": f() === "outlined",
      "smui-select--standard": f() === "standard",
      "mdc-select--with-leading-icon": s(y()) ? e.leadingIcon : y(),
      "mdc-select--no-label": h() || g() == null,
      "mdc-select--invalid": E(),
      "mdc-select--activated": o(me),
      "mdc-data-table__pagination-rows-per-page-select": st === "data-table:pagination",
      ...J,
      [l()]: !0
    }),
    () => Object.entries($).map(([L, ge]) => `${L}: ${ge};`).concat([c()]).join(" "),
    () => Ea(H, [
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
  var Ht = j(ze);
  {
    var Pn = (L) => {
      var ge = Kv();
      He(
        ge,
        (rt) => ({
          type: "hidden",
          required: I(),
          disabled: v(),
          value: p(),
          ...rt
        }),
        [() => dt(H, "input$")],
        void 0,
        void 0,
        !0
      ), x(L, ge);
    };
    ne(Ht, (L) => {
      b() && L(Pn);
    });
  }
  var Je = K(Ht, 2), _t = (L) => {
    var ge;
    ve.focus(), o(O) && o(O).handleClick(xi(L)), (ge = e.anchor$onclick) == null || ge.call(e, L);
  }, Lt = (L) => {
    var ge;
    o(O) && o(O).handleKeydown(L), (ge = e.onkeydown) == null || ge.call(e, L);
  }, We = (L) => {
    var ge;
    o(O) && o(O).handleBlur(), Be(Ar(), "blur", L), (ge = e.anchor$onblur) == null || ge.call(e, L);
  }, Rt = (L) => {
    var ge;
    o(O) && o(O).handleFocus(), Be(Ar(), "focus", L), (ge = e.anchor$onfocus) == null || ge.call(e, L);
  };
  He(
    Je,
    (L, ge) => ({
      class: L,
      "aria-required": I() ? "true" : void 0,
      "aria-disabled": v() ? "true" : void 0,
      "aria-controls": o(z),
      "aria-expanded": o(me) ? "true" : "false",
      "aria-describedby": o(k),
      role: "combobox",
      tabindex: "0",
      ...ue,
      ...ge,
      onclick: _t,
      onkeydown: Lt,
      onblur: We,
      onfocus: Rt
    }),
    [
      () => Ze({ "mdc-select__anchor": !0, [T()]: !0 }),
      () => dt(H, "anchor$")
    ]
  );
  var or = j(Je);
  {
    var _n = (L) => {
      var ge = Qv();
      x(L, ge);
    };
    ne(or, (L) => {
      f() === "filled" && L(_n);
    });
  }
  var yt = K(or, 2);
  {
    var Bt = (L) => {
      {
        let ge = /* @__PURE__ */ oe(() => w() + "-smui-label"), rt = /* @__PURE__ */ oe(() => t() !== ""), Ct = /* @__PURE__ */ oe(() => dt(H, "label$"));
        Se(
          us(L, Ke(
            {
              get id() {
                return o(ge);
              },
              get floatAbove() {
                return o(rt);
              },
              get required() {
                return I();
              }
            },
            () => o(Ct),
            {
              children: (dr, ur) => {
                var oa = se(), Si = q(oa);
                {
                  var Kr = (Qr) => {
                  }, js = (Qr) => {
                    var Ua = se(), la = q(Ua);
                    {
                      var il = (xr) => {
                        var Jr = et();
                        ce(() => Me(Jr, g())), x(xr, Jr);
                      }, Wa = (xr) => {
                        var Jr = se(), Vs = q(Jr);
                        _e(Vs, g), x(xr, Jr);
                      };
                      ne(
                        la,
                        (xr) => {
                          typeof g() == "string" ? xr(il) : xr(Wa, !1);
                        },
                        !0
                      );
                    }
                    x(Qr, Ua);
                  };
                  ne(Si, (Qr) => {
                    g() == null ? Qr(Kr) : Qr(js, !1);
                  });
                }
                x(dr, oa);
              },
              $$slots: { default: !0 }
            }
          )),
          (dr) => R = dr,
          () => R
        );
      }
    };
    ne(yt, (L) => {
      f() !== "outlined" && !h() && g() != null && L(Bt);
    });
  }
  var yn = K(yt, 2);
  {
    var Yt = (L) => {
      {
        let ge = /* @__PURE__ */ oe(() => h() || g() == null), rt = /* @__PURE__ */ oe(() => dt(H, "outline$"));
        Se(
          Qd(L, Ke(
            {
              get noLabel() {
                return o(ge);
              }
            },
            () => o(rt),
            {
              children: (Ct, dr) => {
                var ur = se(), oa = q(ur);
                {
                  var Si = (Kr) => {
                    {
                      let js = /* @__PURE__ */ oe(() => w() + "-smui-label"), Qr = /* @__PURE__ */ oe(() => t() !== ""), Ua = /* @__PURE__ */ oe(() => dt(H, "label$"));
                      Se(
                        us(Kr, Ke(
                          {
                            get id() {
                              return o(js);
                            },
                            get floatAbove() {
                              return o(Qr);
                            },
                            get required() {
                              return I();
                            }
                          },
                          () => o(Ua),
                          {
                            children: (la, il) => {
                              var Wa = se(), xr = q(Wa);
                              {
                                var Jr = (da) => {
                                }, Vs = (da) => {
                                  var al = se(), Gu = q(al);
                                  {
                                    var Nu = (wi) => {
                                      var ua = et();
                                      ce(() => Me(ua, g())), x(wi, ua);
                                    }, Zu = (wi) => {
                                      var ua = se(), Hu = q(ua);
                                      _e(Hu, g), x(wi, ua);
                                    };
                                    ne(
                                      Gu,
                                      (wi) => {
                                        typeof g() == "string" ? wi(Nu) : wi(Zu, !1);
                                      },
                                      !0
                                    );
                                  }
                                  x(da, al);
                                };
                                ne(xr, (da) => {
                                  g() == null ? da(Jr) : da(Vs, !1);
                                });
                              }
                              x(la, Wa);
                            },
                            $$slots: { default: !0 }
                          }
                        )),
                        (la) => R = la,
                        () => R
                      );
                    }
                  };
                  ne(oa, (Kr) => {
                    !h() && g() != null && Kr(Si);
                  });
                }
                x(Ct, ur);
              },
              $$slots: { default: !0 }
            }
          )),
          (Ct) => he = Ct,
          () => he
        );
      }
    };
    ne(yn, (L) => {
      f() === "outlined" && L(Yt);
    });
  }
  var Yr = K(yn, 2);
  _e(Yr, () => e.leadingIcon ?? be);
  var Cn = K(Yr, 2);
  He(Cn, (L, ge) => ({ class: L, ...ge }), [
    () => Ze({
      "mdc-select__selected-text-container": !0,
      [M()]: !0
    }),
    () => dt(H, "selectedTextContainer$")
  ]);
  var Er = j(Cn);
  He(
    Er,
    (L, ge) => ({
      id: w() + "-smui-selected-text",
      class: L,
      role: "button",
      "aria-haspopup": "listbox",
      "aria-labelledby": w() + "-smui-label",
      ...ge
    }),
    [
      () => Ze({
        "mdc-select__selected-text": !0,
        [P()]: !0
      }),
      () => dt(H, "selectedText$")
    ]
  );
  var sa = j(Er);
  De(Er, (L, ge) => ie == null ? void 0 : ie(L, ge), F), De(Cn, (L, ge) => ie == null ? void 0 : ie(L, ge), D);
  var An = K(Cn, 2);
  He(An, (L, ge) => ({ class: L, ...ge }), [
    () => Ze({
      "mdc-select__dropdown-icon": !0,
      [W()]: !0
    }),
    () => dt(H, "dropdownIcon$")
  ]), De(An, (L, ge) => ie == null ? void 0 : ie(L, ge), re);
  var lr = K(An, 2);
  {
    var zn = (L) => {
      {
        let ge = /* @__PURE__ */ oe(() => dt(H, "ripple$"));
        Se(Kd(L, Ke(() => o(ge))), (rt) => V = rt, () => V);
      }
    };
    ne(lr, (L) => {
      f() !== "outlined" && d() && L(zn);
    });
  }
  Se(Je, (L) => ve = L, () => ve), De(Je, (L, ge) => ie == null ? void 0 : ie(L, ge), C);
  var qr = K(Je, 2);
  {
    let L = /* @__PURE__ */ oe(() => Ze({
      "mdc-select__menu": !0,
      ...Ie,
      [N()]: !0
    })), ge = /* @__PURE__ */ oe(() => dt(H, "menu$"));
    Hv(qr, Ke(
      {
        get class() {
          return o(L);
        },
        get id() {
          return o(z);
        },
        fullWidth: !0,
        anchor: !1,
        get anchorElement() {
          return o(Ne);
        },
        get anchorCorner() {
          return o(nt);
        }
      },
      () => o(ge),
      {
        onSMUIMenuSelected: (rt) => {
          var Ct;
          o(O) && o(O).handleMenuItemAction(rt.detail.index), (Ct = e.onSMUIMenuSelected) == null || Ct.call(e, rt);
        },
        onSMUIMenuSurfaceClosing: (rt) => {
          var Ct;
          o(O) && o(O).handleMenuClosing(), (Ct = e.onSMUIMenuSurfaceClosing) == null || Ct.call(e, rt);
        },
        onSMUIMenuSurfaceClosed: (rt) => {
          var Ct;
          o(O) && o(O).handleMenuClosed(), (Ct = e.onSMUIMenuSurfaceClosed) == null || Ct.call(e, rt);
        },
        onSMUIMenuSurfaceOpened: (rt) => {
          var Ct;
          o(O) && o(O).handleMenuOpened(), (Ct = e.onSMUIMenuSurfaceOpened) == null || Ct.call(e, rt);
        },
        get open() {
          return o(me);
        },
        set open(rt) {
          U(me, rt, !0);
        },
        children: (rt, Ct) => {
          {
            let dr = /* @__PURE__ */ oe(() => dt(H, "list$"));
            Bv(rt, Ke(
              {
                role: "listbox",
                get wrapFocus() {
                  return o(qe);
                }
              },
              () => o(dr),
              {
                get selectedIndex() {
                  return o(B);
                },
                set selectedIndex(ur) {
                  U(B, ur, !0);
                },
                children: (ur, oa) => {
                  var Si = se(), Kr = q(Si);
                  _e(Kr, () => e.children ?? be), x(ur, Si);
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
  Se(ze, (L) => fe = L, () => fe), De(ze, (L, ge) => Gn == null ? void 0 : Gn(L, ge), () => ({
    ripple: f() === "filled",
    unbounded: !1,
    addClass: pe,
    removeClass: Z,
    addStyle: G
  })), De(ze, (L, ge) => to == null ? void 0 : to(L, ge), () => ({ addClass: pe, removeClass: Z })), De(ze, (L, ge) => ie == null ? void 0 : ie(L, ge), u);
  var Ws = K(ze, 2);
  {
    var Pu = (L) => {
      {
        let ge = /* @__PURE__ */ oe(() => dt(H, "helperText$"));
        Yv(L, Ke(() => o(ge), {
          children: (rt, Ct) => {
            var dr = se(), ur = q(dr);
            _e(ur, () => e.helperText ?? be), x(rt, dr);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    ne(Ws, (L) => {
      e.helperText && L(Pu);
    });
  }
  ce(() => Me(sa, t())), x(n, Qe);
  var ku = Ae(Ge);
  return i(), ku;
}
function eh(n, e) {
  Ce(e, !0);
  const t = () => Ii(d, "$selectedValue", r), [r, i] = Ei();
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
  de("SMUI:list:item:role", "option");
  const v = /* @__PURE__ */ oe(() => s() != null && s() !== "" && t() === s());
  it(f), Fn(f);
  function f() {
    o(v) && l && nr(c, l.getPrimaryText());
  }
  function h() {
    return l.getElement();
  }
  var g = { getElement: h };
  Se(
    Vv(n, Ke(
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
        children: (_, A) => {
          var E = se(), S = q(E);
          _e(S, () => e.children ?? be), x(_, E);
        },
        $$slots: { default: !0 }
      }
    )),
    (_) => l = _,
    () => l
  );
  var p = Ae(g);
  return i(), p;
}
function th(n, e) {
  Ce(e, !0);
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
  $v(n, {
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
      var f = se(), h = q(f);
      cn(h, 17, t, br, (g, p, _) => {
        {
          let A = /* @__PURE__ */ oe(() => c(_));
          eh(g, {
            get onclick() {
              return o(A);
            },
            get value() {
              return o(p).value;
            },
            children: (E, S) => {
              var I = et();
              ce(() => Me(I, o(p).label)), x(E, I);
            },
            $$slots: { default: !0 }
          });
        }
      }), x(d, f);
    },
    $$slots: { default: !0 }
  }), Ae();
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
function nh(n) {
  return n ? n.scrollHeight > n.offsetHeight : !1;
}
function rh(n) {
  return n ? n.scrollTop === 0 : !1;
}
function ih(n) {
  return n ? Math.ceil(n.scrollHeight - n.scrollTop) === n.clientHeight : !1;
}
function ah(n) {
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
var sh = (
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
}, ha = {
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
var cs;
(function(n) {
  n.POLL_SCROLL_POS = "poll_scroll_position", n.POLL_LAYOUT_CHANGE = "poll_layout_change";
})(cs || (cs = {}));
var oh = (
  /** @class */
  function(n) {
    In(e, n);
    function e(t) {
      var r = n.call(this, je(je({}, e.defaultAdapter), t)) || this;
      return r.dialogOpen = !1, r.isFullscreen = !1, r.animationFrame = 0, r.animationTimer = 0, r.escapeKeyAction = ha.CLOSE_ACTION, r.scrimClickAction = ha.CLOSE_ACTION, r.autoStackButtons = !0, r.areButtonsStacked = !1, r.suppressDefaultPressSelector = ha.SUPPRESS_DEFAULT_PRESS_SELECTOR, r.animFrame = new sh(), r.contentScrollHandler = function() {
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
        return ha;
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
      this.adapter.hasClass(Xe.STACKED) && this.setAutoStackButtons(!1), this.isFullscreen = this.adapter.hasClass(Xe.FULLSCREEN);
    }, e.prototype.destroy = function() {
      this.animationTimer && (clearTimeout(this.animationTimer), this.handleAnimationTimerEnd()), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.animFrame.cancelAll(), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler);
    }, e.prototype.open = function(t) {
      var r = this;
      this.dialogOpen = !0, this.adapter.notifyOpening(), this.adapter.addClass(Xe.OPENING), this.isFullscreen && this.adapter.registerContentEventHandler("scroll", this.contentScrollHandler), t && t.isAboveFullscreenDialog && this.adapter.addClass(Xe.SCRIM_HIDDEN), this.adapter.registerWindowEventHandler("resize", this.windowResizeHandler), this.adapter.registerWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), this.runNextAnimationFrame(function() {
        r.adapter.addClass(Xe.OPEN), r.adapter.addBodyClass(Xe.SCROLL_LOCK), r.layout(), r.animationTimer = setTimeout(function() {
          r.handleAnimationTimerEnd(), r.adapter.trapFocus(r.adapter.getInitialFocusEl()), r.adapter.notifyOpened();
        }, no.DIALOG_ANIMATION_OPEN_TIME_MS);
      });
    }, e.prototype.close = function(t) {
      var r = this;
      t === void 0 && (t = ""), this.dialogOpen && (this.dialogOpen = !1, this.adapter.notifyClosing(t), this.adapter.addClass(Xe.CLOSING), this.adapter.removeClass(Xe.OPEN), this.adapter.removeBodyClass(Xe.SCROLL_LOCK), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), cancelAnimationFrame(this.animationFrame), this.animationFrame = 0, clearTimeout(this.animationTimer), this.animationTimer = setTimeout(function() {
        r.adapter.releaseFocus(), r.handleAnimationTimerEnd(), r.adapter.notifyClosed(t);
      }, no.DIALOG_ANIMATION_CLOSE_TIME_MS));
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
      this.animFrame.request(cs.POLL_LAYOUT_CHANGE, function() {
        t.layoutInternal();
      });
    }, e.prototype.handleClick = function(t) {
      var r = this.adapter.eventTargetMatches(t.target, ha.SCRIM_SELECTOR);
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
      this.animFrame.request(cs.POLL_SCROLL_POS, function() {
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
), lh = /* @__PURE__ */ X('<div class="mdc-dialog__surface-scrim"></div>'), dh = /* @__PURE__ */ X('<div><div><div><!> <!></div></div> <div class="mdc-dialog__scrim"></div></div> <!>', 1);
function uh(n, e) {
  Ce(e, !0);
  const t = () => Ii(F, "$aboveFullscreenShown", r), [r, i] = Ei(), { FocusTrap: a } = Hf, { closest: s, matches: u } = ka;
  let l = m(e, "use", 19, () => []), c = m(e, "class", 3, ""), d = m(e, "open", 15, !1), v = m(e, "selection", 3, !1), f = m(e, "escapeKeyAction", 3, "close"), h = m(e, "scrimClickAction", 3, "close"), g = m(e, "autoStackButtons", 3, !0), p = m(e, "fullscreen", 3, !1), _ = m(e, "sheet", 3, !1), A = m(e, "noContentPadding", 3, !1), E = m(e, "container$class", 3, ""), S = m(e, "surface$class", 3, ""), I = /* @__PURE__ */ Ve(e, [
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
  ]), w, b = /* @__PURE__ */ le(void 0), y = new ra(), C = Ee({}), T, D = jn(!1), M = ye("SMUI:dialog:aboveFullscreen"), F = ye("SMUI:dialog:aboveFullscreenShown") ?? jn(!1), P = ye("SMUI:addLayoutListener"), re, W = [], N = (Z) => (W.push(Z), () => {
    const G = W.indexOf(Z);
    G >= 0 && W.splice(G, 1);
  });
  de("SMUI:dialog:actions:reversed", D), de("SMUI:addLayoutListener", N), de("SMUI:dialog:selection", v()), de("SMUI:dialog:aboveFullscreen", M || p()), de("SMUI:dialog:aboveFullscreenShown", F), _() && de("SMUI:icon-button:context", "dialog:sheet"), xe(() => {
    o(b) && o(b).getEscapeKeyAction() !== f() && o(b).setEscapeKeyAction(f());
  }), xe(() => {
    o(b) && o(b).getScrimClickAction() !== h() && o(b).setScrimClickAction(h());
  }), xe(() => {
    o(b) && o(b).getAutoStackButtons() !== g() && o(b).setAutoStackButtons(g());
  }), xe(() => {
    g() || nr(D, !0);
  }), P && (re = P(me)), xe(() => {
    o(b) && o(b).isOpen() !== d() && (d() ? o(b).open({ isAboveFullscreenDialog: !!M }) : o(b).close());
  });
  let H = t();
  xe(() => {
    p() && o(b) && H !== t() && (H = t(), t() ? o(b).showSurfaceScrim() : o(b).hideSurfaceScrim());
  }), it(() => (T = new a(w, { initialFocusEl: ue() ?? void 0 }), U(
    b,
    new oh({
      addBodyClass: (Z) => document.body.classList.add(Z),
      addClass: fe,
      areButtonsStacked: () => ah(J()),
      clickDefaultButton: () => {
        const Z = $();
        Z && Z.click();
      },
      eventTargetMatches: (Z, G) => Z ? u(Z, G) : !1,
      getActionFromEvent: (Z) => {
        if (!Z.target)
          return "";
        const G = s(Z.target, "[data-mdc-dialog-action]");
        return G && G.getAttribute("data-mdc-dialog-action");
      },
      getInitialFocusEl: ue,
      hasClass: ee,
      isContentScrollable: () => nh(ve()),
      notifyClosed: (Z) => {
        d(!1), Be(Ie(), "SMUIDialogClosed", Z ? { action: Z } : {});
      },
      notifyClosing: (Z) => Be(Ie(), "SMUIDialogClosing", Z ? { action: Z } : {}),
      notifyOpened: () => Be(Ie(), "SMUIDialogOpened", {}),
      notifyOpening: () => Be(Ie(), "SMUIDialogOpening", {}),
      releaseFocus: () => T.releaseFocus(),
      removeBodyClass: (Z) => document.body.classList.remove(Z),
      removeClass: O,
      reverseButtons: () => {
        nr(D, !0);
      },
      trapFocus: () => T.trapFocus(),
      registerContentEventHandler: (Z, G) => {
        const te = ve();
        te instanceof HTMLElement && y.on(te, Z, G);
      },
      deregisterContentEventHandler: (Z, G) => {
        const te = ve();
        te instanceof HTMLElement && y.off(te, Z, G);
      },
      isScrollableContentAtTop: () => rh(ve()),
      isScrollableContentAtBottom: () => ih(ve()),
      registerWindowEventHandler: (Z, G) => y.on(window, Z, G),
      deregisterWindowEventHandler: (Z, G) => y.off(window, Z, G)
    }),
    !0
  ), o(b).init(), () => {
    var Z;
    (Z = o(b)) == null || Z.destroy(), y.clear();
  })), Fn(() => {
    re && re();
  });
  function ee(Z) {
    return Z in C ? C[Z] : Ie().classList.contains(Z);
  }
  function fe(Z) {
    C[Z] || (C[Z] = !0);
  }
  function O(Z) {
    (!(Z in C) || C[Z]) && (C[Z] = !1);
  }
  function J() {
    return [].slice.call(Ie().querySelectorAll(".mdc-dialog__button"));
  }
  function $() {
    return Ie().querySelector("[data-mdc-dialog-button-default]");
  }
  function ve() {
    return Ie().querySelector(".mdc-dialog__content");
  }
  function ue() {
    return Ie().querySelector("[data-mdc-dialog-initial-focus]");
  }
  function B() {
    M && nr(F, !0), requestAnimationFrame(() => {
      W.forEach((Z) => Z());
    });
  }
  function z() {
    W.forEach((Z) => Z());
  }
  function k() {
    M && nr(F, !1);
  }
  function Q() {
    return d();
  }
  function Y(Z) {
    d(Z);
  }
  function me() {
    var Z;
    return (Z = o(b)) == null ? void 0 : Z.layout();
  }
  function Ie() {
    return w;
  }
  var Ne = { isOpen: Q, setOpen: Y, layout: me, getElement: Ie }, nt = dh();
  Kt("resize", ls, () => d() && o(b) && o(b).layout()), Kt("orientationchange", ls, () => d() && o(b) && o(b).layout()), Kt("keydown", Bo.body, (Z) => o(b) && o(b).handleDocumentKeydown(Z));
  var qe = q(nt), Re = (Z) => {
    var G;
    B(), (G = e.onSMUIDialogOpening) == null || G.call(e, Z);
  }, st = (Z) => {
    var G;
    z(), (G = e.onSMUIDialogOpened) == null || G.call(e, Z);
  }, Pt = (Z) => {
    var G;
    k(), (G = e.onSMUIDialogClosed) == null || G.call(e, Z);
  }, kt = (Z) => {
    var G;
    o(b) && o(b).handleClick(Z), (G = e.onclick) == null || G.call(e, Z);
  }, R = (Z) => {
    var G;
    o(b) && o(b).handleKeydown(Z), (G = e.onkeydown) == null || G.call(e, Z);
  };
  He(
    qe,
    (Z, G) => ({
      class: Z,
      role: "alertdialog",
      "aria-modal": "true",
      ...G,
      onSMUIDialogOpening: Re,
      onSMUIDialogOpened: st,
      onSMUIDialogClosed: Pt,
      onclick: kt,
      onkeydown: R
    }),
    [
      () => Ze({
        "mdc-dialog": !0,
        "mdc-dialog--stacked": !g(),
        "mdc-dialog--fullscreen": p(),
        "mdc-dialog--sheet": _(),
        "mdc-dialog--no-content-padding": A(),
        "smui-dialog--selection": v(),
        ...C,
        [c()]: !0
      }),
      () => Ea(I, ["container$", "surface$"])
    ]
  );
  var V = j(qe);
  He(V, (Z, G) => ({ class: Z, ...G }), [
    () => Ze({ "mdc-dialog__container": !0, [E()]: !0 }),
    () => dt(I, "container$")
  ]);
  var he = j(V);
  He(he, (Z, G) => ({ class: Z, role: "alertdialog", "aria-modal": "true", ...G }), [
    () => Ze({ "mdc-dialog__surface": !0, [S()]: !0 }),
    () => dt(I, "surface$")
  ]);
  var Fe = j(he);
  _e(Fe, () => e.children ?? be);
  var Gt = K(Fe, 2);
  {
    var vn = (Z) => {
      var G = lh();
      Kt("transitionend", G, () => o(b) && o(b).handleSurfaceScrimTransitionEnd()), x(Z, G);
    };
    ne(Gt, (Z) => {
      p() && Z(vn);
    });
  }
  Se(qe, (Z) => w = Z, () => w), De(qe, (Z, G) => ie == null ? void 0 : ie(Z, G), l);
  var sr = K(qe, 2);
  _e(sr, () => e.over ?? be), x(n, nt);
  var pe = Ae(Ne);
  return i(), pe;
}
function ch(n, e) {
  Ce(e, !0);
  let t = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Se(
    ia(n, Ke(
      {
        _smuiClass: "mdc-dialog__header",
        _smuiContexts: { "SMUI:icon-button:context": "dialog:header" },
        tag: "div"
      },
      () => t,
      {
        children: (s, u) => {
          var l = se(), c = q(l);
          _e(c, () => e.children ?? be), x(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Ae(a);
}
function nu(n, e) {
  Ce(e, !0);
  let t = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Se(
    ia(n, Ke({ _smuiClass: "mdc-dialog__content", tag: "div" }, () => t, {
      children: (s, u) => {
        var l = se(), c = q(l);
        _e(c, () => e.children ?? be), x(s, l);
      },
      $$slots: { default: !0 }
    })),
    (s) => r = s,
    () => r
  ), Ae(a);
}
function fh(n, e) {
  Ce(e, !0);
  let t = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Se(
    ia(n, Ke(
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
          var l = se(), c = q(l);
          _e(c, () => e.children ?? be), x(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Ae(a);
}
const Ms = jn({
  component: null,
  props: {},
  isOpen: !1
});
function vh(n, e) {
  Ce(e, !0);
  let t = /* @__PURE__ */ le(void 0), r = /* @__PURE__ */ le(!1);
  const i = Ms.subscribe((l) => {
    U(t, l, !0), U(r, l.isOpen, !0);
  });
  it(() => () => i());
  var a = se(), s = q(a);
  {
    var u = (l) => {
      var c = se(), d = q(c);
      Pa(d, () => o(t).component, (v, f) => {
        f(v, Ke(() => o(t).props, {
          get open() {
            return o(r);
          },
          set open(h) {
            U(r, h, !0);
          }
        }));
      }), x(l, c);
    };
    ne(s, (l) => {
      o(t).isOpen && o(t).component && l(u);
    });
  }
  x(n, a), Ae();
}
function Ga(n, e = {}) {
  return new Promise((t) => {
    Ms.set({
      component: n,
      props: e,
      isOpen: !0,
      resolve: t
    });
  });
}
function Nr(n, e) {
  Ms.update((t) => {
    var r;
    return (r = t.resolve) == null || r.call(t, { type: n, data: e }), { component: null, props: {}, isOpen: !1 };
  });
}
function hh(n) {
  Ms.update((e) => e.isOpen ? { ...e, props: { ...e.props, ...n } } : e);
}
var gh = /* @__PURE__ */ X('<div class="oscd-confirm-dialog__content svelte-1eipd40"> </div>');
function ru(n, e) {
  Ce(e, !0);
  let t = m(e, "open", 15, !1), r = m(e, "title", 3, ""), i = m(e, "message", 3, ""), a = m(e, "confirmActionText", 3, "OK"), s = m(e, "confirmActionColor", 3, "primary"), u = m(e, "cancelActionText", 3, "Cancel"), l = m(e, "color", 3, "var(--mdc-theme-primary, #ff3e00)");
  function c() {
    Nr("confirm");
  }
  function d() {
    Nr("cancel");
  }
  zo(n, {
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
    onClose: () => Nr("cancel"),
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
      nu(f, {
        children: (h, g) => {
          var p = gh(), _ = j(p);
          ce(() => Me(_, i())), x(h, p);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { content: !0 }
  }), Ae();
}
var mh = /* @__PURE__ */ X('<div class="dialog__title svelte-ec2c4h"><h4 class="svelte-ec2c4h"> </h4> <!></div>'), ph = /* @__PURE__ */ X("<!> <!>", 1), Ih = /* @__PURE__ */ X('<!> <!> <div class="dialog__actions svelte-ec2c4h"><!></div>', 1);
function zo(n, e) {
  Ce(e, !0);
  let t = m(e, "open", 15, !1), r = m(e, "title", 3, ""), i = m(e, "confirmActionText", 3, "Confirm"), a = m(e, "confirmActionColor", 3, "primary"), s = m(e, "cancelActionText", 3, "Cancel"), u = m(e, "width", 3, "80vw"), l = m(e, "maxWidth", 3, "85vw"), c = m(e, "height", 3, "85vh"), d = m(e, "maxHeight", 3, "85vh"), v = m(e, "confirmDisabled", 3, !1), f = m(e, "color", 3, "var(--mdc-theme-primary, #ff3e00)"), h = m(e, "showCloseButton", 3, !0), g = m(e, "onClose", 3, () => {
  }), p = m(e, "onCancel", 3, () => {
  }), _ = m(e, "onConfirm", 3, () => {
  });
  function A(S) {
    S.detail.action === "cancel" ? p()() : S.detail.action === "confirm" ? _()() : (S.detail.action, g()());
  }
  let E = /* @__PURE__ */ oe(() => {
    let S;
    return a() === "primary" ? S = f() : S = "#FF203A", v() ? "" : `background-color: ${S}; color: white;`;
  });
  {
    let S = /* @__PURE__ */ oe(() => `width: ${u()}; max-width: ${l()}; height: ${c()}; max-height: ${d()};`);
    uh(n, {
      "aria-labelledby": "large-scroll-title",
      "aria-describedby": "large-scroll-content",
      onSMUIDialogClosed: A,
      get surface$style() {
        return o(S);
      },
      get open() {
        return t();
      },
      set open(I) {
        t(I);
      },
      children: (I, w) => {
        var b = Ih(), y = q(b);
        ch(y, {
          children: (M, F) => {
            var P = mh(), re = j(P), W = j(re), N = K(re, 2);
            {
              var H = (ee) => {
                uu(ee, {
                  onClick: () => {
                    t(!1), g()();
                  },
                  tooltip: "Close",
                  tooltipSide: "left",
                  type: "close",
                  fillColor: "white"
                });
              };
              ne(N, (ee) => {
                h() && ee(H);
              });
            }
            ce(() => {
              tt(P, `background-color: ${f()};`), Me(W, r());
            }), x(M, P);
          },
          $$slots: { default: !0 }
        });
        var C = K(y, 2);
        nu(C, {
          id: "dialog__content",
          children: (M, F) => {
            var P = se(), re = q(P);
            _e(re, () => e.content ?? be), x(M, P);
          },
          $$slots: { default: !0 }
        });
        var T = K(C, 2), D = j(T);
        fh(D, {
          class: "oscd-dialog__actions",
          children: (M, F) => {
            var P = ph(), re = q(P);
            {
              var W = (H) => {
                Vn(H, {
                  action: "cancel",
                  color: "secondary",
                  tabindex: "1",
                  children: (ee, fe) => {
                    var O = et();
                    ce(() => Me(O, s())), x(ee, O);
                  },
                  $$slots: { default: !0 }
                });
              };
              ne(re, (H) => {
                s() && H(W);
              });
            }
            var N = K(re, 2);
            Vn(N, {
              action: "confirm",
              get disabled() {
                return v();
              },
              get style() {
                return o(E);
              },
              tabindex: "0",
              children: (H, ee) => {
                var fe = et();
                ce(() => Me(fe, i())), x(H, fe);
              },
              $$slots: { default: !0 }
            }), x(M, P);
          },
          $$slots: { default: !0 }
        }), x(I, b);
      },
      $$slots: { default: !0 }
    });
  }
  Ae();
}
var bh = /* @__PURE__ */ X('<span class="oscd-icon"><!></span>');
function Dt(n, e) {
  var t = bh(), r = j(t);
  _e(r, () => e.children ?? be), x(n, t);
}
var _h = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function iu(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Dt(n, {
    children: (r, i) => {
      var a = _h();
      ce(() => tt(a, t())), x(r, a);
    }
  });
}
var yh = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function au(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Dt(n, {
    children: (r, i) => {
      var a = yh();
      ce(() => tt(a, t())), x(r, a);
    }
  });
}
var Ch = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function su(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Dt(n, {
    children: (r, i) => {
      var a = Ch();
      ce(() => tt(a, t())), x(r, a);
    }
  });
}
var Ah = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"></path></svg>');
function ou(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Dt(n, {
    children: (r, i) => {
      var a = Ah();
      ce(() => tt(a, t())), x(r, a);
    }
  });
}
var Eh = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM2 12c0-2.79 1.64-5.2 4.01-6.32V3.52C2.52 4.76 0 8.09 0 12s2.52 7.24 6.01 8.48v-2.16C3.64 17.2 2 14.79 2 12zm13-9c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"></path></svg>');
function xh(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Dt(n, {
    children: (r, i) => {
      var a = Eh();
      ce(() => tt(a, t())), x(r, a);
    }
  });
}
fc();
var Sh = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24" height="24" fill="#004552"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"></path></svg>');
function wh(n) {
  var e = Sh();
  x(n, e);
}
var Th = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#004552"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Dh(n) {
  var e = Th();
  x(n, e);
}
var Lh = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"></path></svg>');
function Rh(n, e) {
  let t = m(e, "size", 3, "24px"), r = m(e, "fill", 3, "#004552");
  var i = Lh();
  ce(() => {
    Tt(i, "height", t()), Tt(i, "width", t()), Tt(i, "fill", r());
  }), x(n, i);
}
var Oh = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Mh(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Dt(n, {
    children: (r, i) => {
      var a = Oh();
      ce(() => tt(a, t())), x(r, a);
    }
  });
}
var Fh = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Ph(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Dt(n, {
    children: (r, i) => {
      var a = Fh();
      ce(() => tt(a, t())), x(r, a);
    }
  });
}
var kh = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"></path></svg>');
function Gh(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Dt(n, {
    children: (r, i) => {
      var a = kh();
      ce(() => tt(a, t())), x(r, a);
    }
  });
}
var Nh = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"></path></svg>');
function Zh(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Dt(n, {
    children: (r, i) => {
      var a = Nh();
      ce(() => tt(a, t())), x(r, a);
    }
  });
}
var Hh = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"></path></svg>');
function Bh(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Dt(n, {
    children: (r, i) => {
      var a = Hh();
      ce(() => tt(a, t())), x(r, a);
    }
  });
}
var Uh = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"><path d="m176-120-56-56 301-302-181-45 198-123-17-234 179 151 216-88-87 217 151 178-234-16-124 198-45-181-301 301Zm24-520-80-80 80-80 80 80-80 80Zm355 197 48-79 93 7-60-71 35-86-86 35-71-59 7 92-79 49 90 22 23 90Zm165 323-80-80 80-80 80 80-80 80ZM569-570Z"></path></svg>');
function Wh(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Dt(n, {
    children: (r, i) => {
      var a = Uh();
      ce(() => tt(a, t())), x(r, a);
    }
  });
}
var jh = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m770-302-60-62q40-11 65-42.5t25-73.5q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 57-29.5 105T770-302ZM634-440l-80-80h86v80h-6ZM792-56 56-792l56-56 736 736-56 56ZM440-280H280q-83 0-141.5-58.5T80-480q0-69 42-123t108-71l74 74h-24q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h65l79 80H320Z"></path></svg>');
function Vh(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Dt(n, {
    children: (r, i) => {
      var a = jh();
      ce(() => tt(a, t())), x(r, a);
    }
  });
}
var zh = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"></path></svg>');
function Xh(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Dt(n, {
    children: (r, i) => {
      var a = zh();
      ce(() => tt(a, t())), x(r, a);
    }
  });
}
var Yh = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"></path></svg>');
function qh(n, e) {
  let t = m(e, "svgStyles", 8, "");
  Dt(n, {
    children: (r, i) => {
      var a = Yh();
      ce(() => tt(a, t())), x(r, a);
    }
  });
}
var Kh = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3" cursor="pointer"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Xo(n, e) {
  let t = m(e, "svgStyles", 8, "");
  Dt(n, {
    children: (r, i) => {
      var a = Kh();
      ce(() => tt(a, t())), x(r, a);
    }
  });
}
var Qh = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m320-160-56-57 103-103H80v-80h287L264-503l56-57 200 200-200 200Zm320-240L440-600l200-200 56 57-103 103h287v80H593l103 103-56 57Z"></path></svg>');
function lu(n, e) {
  let t = m(e, "svgStyles", 8, "");
  Dt(n, {
    children: (r, i) => {
      var a = Qh();
      ce(() => tt(a, t())), x(r, a);
    }
  });
}
var Jh = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M360-160q-33 0-56.5-23.5T280-240q0-33 23.5-56.5T360-320q33 0 56.5 23.5T440-240q0 33-23.5 56.5T360-160Zm240 0q-33 0-56.5-23.5T520-240q0-33 23.5-56.5T600-320q33 0 56.5 23.5T680-240q0 33-23.5 56.5T600-160ZM360-400q-33 0-56.5-23.5T280-480q0-33 23.5-56.5T360-560q33 0 56.5 23.5T440-480q0 33-23.5 56.5T360-400Zm240 0q-33 0-56.5-23.5T520-480q0-33 23.5-56.5T600-560q33 0 56.5 23.5T680-480q0 33-23.5 56.5T600-400ZM360-640q-33 0-56.5-23.5T280-720q0-33 23.5-56.5T360-800q33 0 56.5 23.5T440-720q0 33-23.5 56.5T360-640Zm240 0q-33 0-56.5-23.5T520-720q0-33 23.5-56.5T600-800q33 0 56.5 23.5T680-720q0 33-23.5 56.5T600-640Z"></path></svg>');
function Fs(n, e) {
  let t = m(e, "svgStyles", 3, "fill: gray; width: 25px; height: 25px");
  Dt(n, {
    children: (r, i) => {
      var a = Jh();
      ce(() => tt(a, t())), x(r, a);
    }
  });
}
mt(["change"]);
mt(["change"]);
var $h = /* @__PURE__ */ X('<span role="tooltip" aria-labelledby="tooltip"><!></span>');
function du(n, e) {
  Ce(e, !0);
  let t = m(e, "content", 3, ""), r = m(e, "side", 3, "top"), i = m(e, "hoverDelay", 3, 0), a = m(e, "transitionDuration", 3, 80);
  const s = `tt-${Math.random().toString(36).slice(2)}`;
  let u = /* @__PURE__ */ le(null), l = /* @__PURE__ */ le(null), c = /* @__PURE__ */ le(null), d = /* @__PURE__ */ le(null), v = /* @__PURE__ */ le(!1), f = /* @__PURE__ */ le(null), h = /* @__PURE__ */ le(null);
  function g() {
    t() && (i() > 0 ? U(f, setTimeout(() => U(v, !0), i()), !0) : U(v, !0));
  }
  function p() {
    o(f) && clearTimeout(o(f)), U(v, !1);
  }
  function _() {
    if (!o(l) || !o(d) || !o(u)) return;
    const I = o(u).getBoundingClientRect(), w = o(d).getBoundingClientRect();
    let b = 0, y = 0;
    const C = 8;
    switch (r()) {
      case "top":
        b = I.top - w.height - C, y = I.left + I.width / 2 - w.width / 2;
        break;
      case "bottom":
        b = I.bottom + C, y = I.left + I.width / 2 - w.width / 2;
        break;
      case "left":
        b = I.top + I.height / 2 - w.height / 2, y = I.left - w.width - C;
        break;
      case "right":
        b = I.top + I.height / 2 - w.height / 2, y = I.right + C;
        break;
    }
    o(l).style.top = `${b + window.scrollY}px`, o(l).style.left = `${y + window.scrollX}px`;
  }
  function A() {
    var I;
    (I = o(h)) == null || I.disconnect(), U(h, null), o(l) && o(l).parentNode && o(l).parentNode.removeChild(o(l)), U(l, null), U(d, null), U(c, null), o(f) && clearTimeout(o(f));
  }
  Fn(A), xe(() => {
    if (!(!o(v) || !t())) {
      if (!o(l)) {
        U(l, document.createElement("div"), !0), o(l).style.position = "absolute", o(l).style.zIndex = "9999", o(l).style.pointerEvents = "none", o(l).style.opacity = "0", o(l).style.transition = `opacity ${a()}ms ease`, o(l).id = s, o(l).setAttribute("role", "tooltip"), document.body.appendChild(o(l)), U(c, o(l).attachShadow({ mode: "open" }), !0);
        const I = document.createElement("style");
        I.textContent = `
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
      `, o(c).appendChild(I), U(d, document.createElement("div"), !0), o(c).appendChild(o(d)), U(
          h,
          new MutationObserver(() => {
            o(v) && _();
          }),
          !0
        ), o(h).observe(document.body, { childList: !0, subtree: !0 });
      }
      o(d) && (o(d).className = `bubble ${r()}`, o(d).innerHTML = t()), o(l) && (o(l).style.opacity = "1", _());
    }
  }), xe(() => {
    if (o(v) || !o(l))
      return;
    o(l).style.opacity = "0";
    const I = o(l), w = setTimeout(
      () => {
        I && I.parentNode && I.parentNode.removeChild(I), o(l) === I && A();
      },
      a()
    );
    return () => clearTimeout(w);
  });
  var E = $h(), S = j(E);
  _e(S, () => e.children ?? be), Se(E, (I) => U(u, I), () => o(u)), ce(() => Tt(E, "aria-describedby", t() ? s : void 0)), Kt("mouseenter", E, g), Kt("mouseleave", E, p), x(n, E), Ae();
}
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
var vr = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, Gl = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, ni = {
  ARIA_SELECTED: Gl.ARIA_SELECTED,
  ARIA_SORT: Gl.ARIA_SORT
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
var eg = (
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
      return Df(this, void 0, void 0, function() {
        return Lf(this, function(t) {
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
        s !== i && (this.adapter.removeClassNameByHeaderCellIndex(s, vr.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(s, vr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(s, ni.ARIA_SORT, gn.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(s, gn.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, vr.HEADER_CELL_SORTED);
      var u = this.adapter.getAttributeByHeaderCellIndex(i, ni.ARIA_SORT), l = gn.NONE;
      u === gn.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, vr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, ni.ARIA_SORT, gn.DESCENDING), l = gn.DESCENDING) : u === gn.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, vr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, ni.ARIA_SORT, gn.ASCENDING), l = gn.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, ni.ARIA_SORT, gn.ASCENDING), l = gn.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, l), this.adapter.notifySortAction({
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
      }), this.adapter.addClass(vr.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(vr.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(t, r) {
      r ? (this.adapter.addClassAtRowIndex(t, vr.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, ni.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(t, vr.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, ni.ARIA_SELECTED, "false"));
    }, e;
  }(bn)
), tg = /* @__PURE__ */ X('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), ng = /* @__PURE__ */ X("<div><div><table><!></table></div> <!> <!></div>");
function rg(n, e) {
  Ce(e, !0);
  const t = () => Ii(P, "$progressClosed", r), [r, i] = Ei(), { closest: a } = ka;
  let s = m(e, "use", 19, () => []), u = m(e, "class", 3, ""), l = m(e, "stickyHeader", 3, !1), c = m(e, "sortable", 3, !1), d = m(e, "sort", 15, null), v = m(e, "sortDirection", 15, "ascending"), f = m(e, "sortAscendingAriaLabel", 3, "sorted, ascending"), h = m(e, "sortDescendingAriaLabel", 3, "sorted, descending"), g = m(e, "container$use", 19, () => []), p = m(e, "container$class", 3, ""), _ = m(e, "table$use", 19, () => []), A = m(e, "table$class", 3, ""), E = /* @__PURE__ */ Ve(e, [
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
  ]), S, I = /* @__PURE__ */ le(void 0), w, b = /* @__PURE__ */ le(void 0), y = /* @__PURE__ */ le(void 0), C = Ee({}), T = /* @__PURE__ */ le(Ee({ height: "auto", top: "initial" })), D = ye("SMUI:addLayoutListener"), M, F = !1, P = jn(!1), re = jn(d());
  xe(() => {
    nr(re, d());
  });
  let W = jn(v());
  xe(() => {
    nr(W, v());
  }), de("SMUI:checkbox:context", "data-table"), de("SMUI:linear-progress:context", "data-table"), de("SMUI:linear-progress:closed", P), de("SMUI:data-table:sortable", c()), de("SMUI:data-table:sort", re), de("SMUI:data-table:sortDirection", W), de("SMUI:data-table:sortAscendingAriaLabel", f()), de("SMUI:data-table:sortDescendingAriaLabel", h()), D && (M = D(ue));
  let N;
  xe(() => {
    e.progress && o(I) && N !== t() && (N = t(), t() ? o(I).hideProgress() : o(I).showProgress());
  }), de("SMUI:checkbox:mount", () => {
    o(I) && F && o(I).layout();
  }), de("SMUI:data-table:header:mount", (R) => {
    U(b, R, !0);
  }), de("SMUI:data-table:header:unmount", () => {
    U(b, void 0);
  }), de("SMUI:data-table:body:mount", (R) => {
    U(y, R, !0);
  }), de("SMUI:data-table:body:unmount", () => {
    U(y, void 0);
  }), it(() => (U(
    I,
    new eg({
      addClass: ee,
      removeClass: fe,
      getHeaderCellElements: () => {
        var R;
        return ((R = o(b)) == null ? void 0 : R.cells.map((V) => V.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var R;
        return ((R = o(b)) == null ? void 0 : R.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (R, V) => {
        var he;
        return ((he = o(b)) == null ? void 0 : he.orderedCells[R].getAttr(V)) ?? null;
      },
      setAttributeByHeaderCellIndex: (R, V, he) => {
        var Fe;
        (Fe = o(b)) == null || Fe.orderedCells[R].addAttr(V, he);
      },
      setClassNameByHeaderCellIndex: (R, V) => {
        var he;
        (he = o(b)) == null || he.orderedCells[R].addClass(V);
      },
      removeClassNameByHeaderCellIndex: (R, V) => {
        var he;
        (he = o(b)) == null || he.orderedCells[R].removeClass(V);
      },
      notifySortAction: (R) => {
        d(R.columnId), v(R.sortValue), Be(B(), "SMUIDataTableSorted", R);
      },
      getTableContainerHeight: () => w.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const R = B().querySelector(".mdc-data-table__header-row");
        if (!R)
          throw new Error("MDCDataTable: Table header element not found.");
        return R.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (R) => {
        U(T, R, !0);
      },
      addClassAtRowIndex: (R, V) => {
        var he;
        (he = o(y)) == null || he.orderedRows[R].addClass(V);
      },
      getRowCount: () => {
        var R;
        return ((R = o(y)) == null ? void 0 : R.rows.length) ?? 0;
      },
      getRowElements: () => {
        var R;
        return ((R = o(y)) == null ? void 0 : R.rows.map((V) => V.element)) ?? [];
      },
      getRowIdAtIndex: (R) => {
        var V;
        return ((V = o(y)) == null ? void 0 : V.orderedRows[R].rowId) ?? null;
      },
      getRowIndexByChildElement: (R) => {
        var V;
        return ((V = o(y)) == null ? void 0 : V.orderedRows.map((he) => he.element).indexOf(a(R, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var R;
        return ((R = o(y)) == null ? void 0 : R.rows.filter((V) => V.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (R) => {
        var he;
        const V = (he = o(y)) == null ? void 0 : he.orderedRows[R].checkbox;
        return V ? V.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var V;
        const R = (V = o(b)) == null ? void 0 : V.checkbox;
        return R ? R.checked : !1;
      },
      isRowsSelectable: () => !!B().querySelector(".mdc-data-table__row-checkbox") || !!B().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (R) => {
        var he;
        const V = (he = o(y)) == null ? void 0 : he.orderedRows[R.rowIndex];
        V && Be(B(), "SMUIDataTableSelectionChanged", {
          row: V.element,
          rowId: V.rowId,
          rowIndex: R.rowIndex,
          selected: R.selected
        });
      },
      notifySelectedAll: () => {
        O(!1), Be(B(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        O(!1), Be(B(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (R) => Be(B(), "SMUIDataTableClickRow", R),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (R, V) => {
        var he;
        (he = o(y)) == null || he.orderedRows[R].removeClass(V);
      },
      setAttributeAtRowIndex: (R, V, he) => {
        var Fe;
        (Fe = o(y)) == null || Fe.orderedRows[R].addAttr(V, he);
      },
      setHeaderRowCheckboxChecked: (R) => {
        var he;
        const V = (he = o(b)) == null ? void 0 : he.checkbox;
        V && (V.checked = R);
      },
      setHeaderRowCheckboxIndeterminate: O,
      setRowCheckboxCheckedAtIndex: (R, V) => {
        var Fe;
        const he = (Fe = o(y)) == null ? void 0 : Fe.orderedRows[R].checkbox;
        he && (he.checked = V);
      },
      setSortStatusLabelByHeaderCellIndex: (R, V) => {
      }
    }),
    !0
  ), o(I).init(), o(I).layout(), F = !0, () => {
    var R;
    (R = o(I)) == null || R.destroy();
  })), Fn(() => {
    M && M();
  });
  function H(R) {
    o(I) && o(I).handleRowCheckboxChange(R);
  }
  function ee(R) {
    C[R] || (C[R] = !0);
  }
  function fe(R) {
    (!(R in C) || C[R]) && (C[R] = !1);
  }
  function O(R) {
    var he;
    const V = (he = o(b)) == null ? void 0 : he.checkbox;
    V && (V.indeterminate = R);
  }
  function J(R) {
    if (!o(I) || !R.detail.target)
      return;
    const V = a(R.detail.target, ".mdc-data-table__header-cell--with-sort");
    V && ve(V);
  }
  function $(R) {
    if (!o(I) || !R.detail.target)
      return;
    const V = a(R.detail.target, ".mdc-data-table__row");
    V && o(I) && o(I).handleRowClick({ rowId: R.detail.rowId, row: V });
  }
  function ve(R) {
    var Gt, vn;
    const V = ((Gt = o(b)) == null ? void 0 : Gt.orderedCells) ?? [], he = V.map((sr) => sr.element).indexOf(R);
    if (he === -1)
      return;
    const Fe = V[he].columnId ?? null;
    (vn = o(I)) == null || vn.handleSortAction({ columnId: Fe, columnIndex: he, headerCell: R });
  }
  function ue() {
    var R;
    return (R = o(I)) == null ? void 0 : R.layout();
  }
  function B() {
    return S;
  }
  var z = { layout: ue, getElement: B }, k = ng(), Q = (R) => {
    var V;
    o(I) && o(I).handleHeaderRowCheckboxChange(), (V = e.onSMUIDataTableHeaderCheckboxChange) == null || V.call(e, R);
  }, Y = (R) => {
    var V;
    J(R), (V = e.onSMUIDataTableHeaderClick) == null || V.call(e, R);
  }, me = (R) => {
    var V;
    $(R), (V = e.onSMUIDataTableRowClick) == null || V.call(e, R);
  }, Ie = (R) => {
    var V;
    H(R), (V = e.onSMUIDataTableBodyCheckboxChange) == null || V.call(e, R);
  };
  He(
    k,
    (R, V) => ({
      class: R,
      ...V,
      onSMUIDataTableHeaderCheckboxChange: Q,
      onSMUIDataTableHeaderClick: Y,
      onSMUIDataTableRowClick: me,
      onSMUIDataTableBodyCheckboxChange: Ie
    }),
    [
      () => Ze({
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": l(),
        ...C,
        [u()]: !0
      }),
      () => Ea(E, ["container$", "table$"])
    ]
  );
  var Ne = j(k);
  He(Ne, (R, V) => ({ class: R, ...V }), [
    () => Ze({
      "mdc-data-table__table-container": !0,
      [p()]: !0
    }),
    () => dt(E, "container$")
  ]);
  var nt = j(Ne);
  He(nt, (R, V) => ({ class: R, ...V }), [
    () => Ze({ "mdc-data-table__table": !0, [A()]: !0 }),
    () => dt(E, "table$")
  ]);
  var qe = j(nt);
  _e(qe, () => e.children ?? be), De(nt, (R, V) => ie == null ? void 0 : ie(R, V), _), Se(Ne, (R) => w = R, () => w), De(Ne, (R, V) => ie == null ? void 0 : ie(R, V), g);
  var Re = K(Ne, 2);
  {
    var st = (R) => {
      var V = tg(), he = K(j(V), 2);
      _e(he, () => e.progress ?? be), ce((Fe) => tt(V, Fe), [
        () => Object.entries(o(T)).map(([Fe, Gt]) => `${Fe}: ${Gt};`).join(" ")
      ]), x(R, V);
    };
    ne(Re, (R) => {
      e.progress && R(st);
    });
  }
  var Pt = K(Re, 2);
  _e(Pt, () => e.paginate ?? be), Se(k, (R) => S = R, () => S), De(k, (R, V) => ie == null ? void 0 : ie(R, V), s), x(n, k);
  var kt = Ae(z);
  return i(), kt;
}
var ig = /* @__PURE__ */ X("<thead><!></thead>");
function ag(n, e) {
  Ce(e, !0);
  let t = m(e, "use", 19, () => []), r = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i, a = /* @__PURE__ */ le(void 0), s = [];
  const u = /* @__PURE__ */ new WeakMap();
  de("SMUI:data-table:row:header", !0);
  const l = ye("SMUI:checkbox:mount");
  de("SMUI:checkbox:mount", (A) => {
    U(a, A, !0), l && l(A);
  });
  const c = ye("SMUI:checkbox:unmount");
  de("SMUI:checkbox:unmount", (A) => {
    U(a, void 0), c && c(A);
  }), de("SMUI:data-table:cell:mount", (A) => {
    s.push(A), u.set(A.element, A);
  }), de("SMUI:data-table:cell:unmount", (A) => {
    const E = s.findIndex((S) => S === A);
    E !== -1 && s.splice(E, 1), u.delete(A.element);
  });
  const d = ye("SMUI:data-table:header:mount"), v = ye("SMUI:data-table:header:unmount");
  it(() => {
    const A = {
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
    return d && d(A), () => {
      v && v(A);
    };
  });
  function f() {
    return [
      ...h().querySelectorAll(".mdc-data-table__header-cell")
    ].map((A) => u.get(A)).filter((A) => A && A._smui_data_table_header_cell_accessor);
  }
  function h() {
    return i;
  }
  var g = { getElement: h }, p = ig();
  He(p, () => ({ ...r }));
  var _ = j(p);
  return _e(_, () => e.children ?? be), Se(p, (A) => i = A, () => i), De(p, (A, E) => ie == null ? void 0 : ie(A, E), t), x(n, p), Ae(g);
}
var sg = /* @__PURE__ */ X("<tbody><!></tbody>");
function og(n, e) {
  Ce(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = /* @__PURE__ */ Ve(e, [
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
    const _ = s.findIndex((A) => A === p);
    _ !== -1 && s.splice(_, 1), u.delete(p.element);
  });
  const l = ye("SMUI:data-table:body:mount"), c = ye("SMUI:data-table:body:unmount");
  it(() => {
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
  var f = { getElement: v }, h = sg();
  He(h, (p) => ({ class: p, ...i }), [
    () => Ze({ "mdc-data-table__content": !0, [r()]: !0 })
  ]);
  var g = j(h);
  return _e(g, () => e.children ?? be), Se(h, (p) => a = p, () => a), De(h, (p, _) => ie == null ? void 0 : ie(p, _), t), x(n, h), Ae(f);
}
let lg = 0;
var dg = /* @__PURE__ */ X("<tr><!></tr>");
function Nl(n, e) {
  Ce(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "rowId", 19, () => "SMUI-data-table-row-" + lg++), a = /* @__PURE__ */ Ve(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "rowId",
    "children"
  ]), s, u = /* @__PURE__ */ le(void 0), l = Ee({}), c = Ee({}), d = ye("SMUI:data-table:row:header");
  const v = ye("SMUI:checkbox:mount");
  de("SMUI:checkbox:mount", (D) => {
    U(u, D, !0), v && v(D);
  });
  const f = ye("SMUI:checkbox:unmount");
  de("SMUI:checkbox:unmount", (D) => {
    U(u, void 0), f && f(D);
  });
  const h = ye("SMUI:data-table:row:mount"), g = ye("SMUI:data-table:row:unmount");
  it(() => {
    const D = d ? {
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
      getAttr: A,
      addAttr: E
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
      getAttr: A,
      addAttr: E
    };
    return h && h(D), () => {
      g && g(D);
    };
  });
  function p(D) {
    l[D] || (l[D] = !0);
  }
  function _(D) {
    (!(D in l) || l[D]) && (l[D] = !1);
  }
  function A(D) {
    return D in c ? c[D] ?? null : w().getAttribute(D);
  }
  function E(D, M) {
    c[D] !== M && (c[D] = M);
  }
  function S(D) {
    Be(w(), "SMUIDataTableHeaderClick", D);
  }
  function I(D) {
    Be(w(), "SMUIDataTableRowClick", { rowId: i(), target: D.target });
  }
  function w() {
    return s;
  }
  var b = { getElement: w }, y = dg(), C = (D) => {
    var M;
    d ? S(D) : I(D), (M = e.onclick) == null || M.call(e, D);
  };
  He(
    y,
    (D) => ({
      class: D,
      "aria-selected": o(u) ? o(u).checked ? "true" : "false" : void 0,
      ...c,
      ...a,
      onclick: C
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
  var T = j(y);
  return _e(T, () => e.children ?? be), Se(y, (D) => s = D, () => s), De(y, (D, M) => ie == null ? void 0 : ie(D, M), t), x(n, y), Ae(b);
}
let ug = 0;
var cg = /* @__PURE__ */ X('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), fg = /* @__PURE__ */ X("<th><!></th>"), vg = /* @__PURE__ */ X("<td><!></td>");
function qa(n, e) {
  Ce(e, !0);
  const t = () => Ii(A, "$sort", i), r = () => Ii(E, "$sortDirection", i), [i, a] = Ei();
  let s = ye("SMUI:data-table:row:header"), u = m(e, "use", 19, () => []), l = m(e, "class", 3, ""), c = m(e, "numeric", 3, !1), d = m(e, "checkbox", 3, !1), v = m(e, "columnId", 19, () => s ? "SMUI-data-table-column-" + ug++ : "SMUI-data-table-unused"), f = m(e, "sortable", 19, () => ye("SMUI:data-table:sortable")), h = /* @__PURE__ */ Ve(e, [
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
  ]), g, p = Ee({}), _ = Ee({}), A = ye("SMUI:data-table:sort"), E = ye("SMUI:data-table:sortDirection"), S = ye("SMUI:data-table:sortAscendingAriaLabel"), I = ye("SMUI:data-table:sortDescendingAriaLabel");
  f() && (de("SMUI:label:context", "data-table:sortable-header-cell"), de("SMUI:icon-button:context", "data-table:sortable-header-cell"), de("SMUI:icon-button:aria-describedby", v() + "-status-label"));
  const w = ye("SMUI:data-table:cell:mount"), b = ye("SMUI:data-table:cell:unmount");
  it(() => {
    const O = s ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return P();
      },
      get columnId() {
        return v();
      },
      addClass: y,
      removeClass: C,
      getAttr: T,
      addAttr: D
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return P();
      },
      get columnId() {
      },
      addClass: y,
      removeClass: C,
      getAttr: T,
      addAttr: D
    };
    return w && w(O), () => {
      b && b(O);
    };
  });
  function y(O) {
    p[O] || (p[O] = !0);
  }
  function C(O) {
    (!(O in p) || p[O]) && (p[O] = !1);
  }
  function T(O) {
    return O in _ ? _[O] ?? null : P().getAttribute(O);
  }
  function D(O, J) {
    _[O] !== J && (_[O] = J);
  }
  function M(O) {
    Be(P(), "SMUIDataTableHeaderCheckboxChange", O);
  }
  function F(O) {
    Be(P(), "SMUIDataTableBodyCheckboxChange", O);
  }
  function P() {
    return g;
  }
  var re = { getElement: P }, W = se(), N = q(W);
  {
    var H = (O) => {
      var J = fg(), $ = (z) => {
        var k;
        d() && M(z), (k = e.onchange) == null || k.call(e, z);
      };
      He(
        J,
        (z) => ({
          class: z,
          role: "columnheader",
          scope: "col",
          "data-column-id": v(),
          "aria-sort": f() ? t() === v() ? r() : "none" : void 0,
          ..._,
          ...h,
          onchange: $
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
      var ve = j(J);
      {
        var ue = (z) => {
          var k = cg(), Q = j(k);
          _e(Q, () => e.children ?? be);
          var Y = K(Q, 2), me = j(Y);
          ce(() => {
            Tt(Y, "id", `${v() ?? ""}-status-label`), Me(me, t() === v() ? r() === "ascending" ? S : I : "");
          }), x(z, k);
        }, B = (z) => {
          var k = se(), Q = q(k);
          _e(Q, () => e.children ?? be), x(z, k);
        };
        ne(ve, (z) => {
          f() ? z(ue) : z(B, !1);
        });
      }
      Se(J, (z) => g = z, () => g), De(J, (z, k) => ie == null ? void 0 : ie(z, k), u), x(O, J);
    }, ee = (O) => {
      var J = vg(), $ = (ue) => {
        var B;
        d() && F(ue), (B = e.onchange) == null || B.call(e, ue);
      };
      He(
        J,
        (ue) => ({
          class: ue,
          ..._,
          ...h,
          onchange: $
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
      var ve = j(J);
      _e(ve, () => e.children ?? be), Se(J, (ue) => g = ue, () => g), De(J, (ue, B) => ie == null ? void 0 : ie(ue, B), u), x(O, J);
    };
    ne(N, (O) => {
      s ? O(H) : O(ee, !1);
    });
  }
  x(n, W);
  var fe = Ae(re);
  return a(), fe;
}
var hg = /* @__PURE__ */ X('<p class="status svelte-185z1ay">Loading…</p>'), gg = /* @__PURE__ */ X('<p class="status error svelte-185z1ay"> </p>'), mg = /* @__PURE__ */ X('<p class="status svelte-185z1ay"> </p>'), pg = /* @__PURE__ */ X("<!> <!>", 1), Ig = /* @__PURE__ */ X("<!> <!>", 1), bg = /* @__PURE__ */ X("<!> <!>", 1);
function _g(n, e) {
  Ce(e, !0);
  let t = /* @__PURE__ */ le(null), r = m(e, "items", 19, () => []), i = m(e, "columns", 19, () => []), a = m(e, "loading", 3, !1), s = m(e, "errorMsg", 3, ""), u = m(e, "emptyText", 3, "Nothing to show."), l = m(e, "getRowId", 3, (A, E) => (A && (A.id ?? A.key)) ?? E), c = m(e, "headerBg", 3, null), d = m(e, "rowBg", 3, null), v = m(e, "hasActions", 3, !1), f = /* @__PURE__ */ oe(() => v() || !!e.actions);
  var h = se(), g = q(h);
  {
    var p = (A) => {
      var E = hg();
      x(A, E);
    }, _ = (A) => {
      var E = se(), S = q(E);
      {
        var I = (b) => {
          var y = gg(), C = j(y);
          ce(() => Me(C, s())), x(b, y);
        }, w = (b) => {
          var y = se(), C = q(y);
          {
            var T = (M) => {
              var F = mg(), P = j(F);
              ce(() => Me(P, u())), x(M, F);
            }, D = (M) => {
              rg(M, {
                style: "width: 100%;",
                children: (F, P) => {
                  var re = bg(), W = q(re);
                  {
                    let H = /* @__PURE__ */ oe(() => c() ? `background-color:${c()}` : void 0);
                    ag(W, {
                      get style() {
                        return o(H);
                      },
                      children: (ee, fe) => {
                        Nl(ee, {
                          children: (O, J) => {
                            var $ = pg(), ve = q($);
                            cn(ve, 17, i, br, (z, k) => {
                              {
                                let Q = /* @__PURE__ */ oe(() => [
                                  o(k).width ? `width:${o(k).width}` : "",
                                  c() ? `background-color:${c()}` : ""
                                ].filter(Boolean).join(";"));
                                qa(z, {
                                  header: !0,
                                  get style() {
                                    return o(Q);
                                  },
                                  children: (Y, me) => {
                                    var Ie = et();
                                    ce(() => Me(Ie, o(k).header)), x(Y, Ie);
                                  },
                                  $$slots: { default: !0 }
                                });
                              }
                            });
                            var ue = K(ve, 2);
                            {
                              var B = (z) => {
                                {
                                  let k = /* @__PURE__ */ oe(() => c() ? `background-color:${c()}` : void 0);
                                  qa(z, {
                                    header: !0,
                                    get style() {
                                      return o(k);
                                    }
                                  });
                                }
                              };
                              ne(ue, (z) => {
                                o(f) && z(B);
                              });
                            }
                            x(O, $);
                          },
                          $$slots: { default: !0 }
                        });
                      },
                      $$slots: { default: !0 }
                    });
                  }
                  var N = K(W, 2);
                  og(N, {
                    children: (H, ee) => {
                      var fe = se(), O = q(fe);
                      cn(O, 19, r, (J, $) => l()(J, $), (J, $, ve) => {
                        {
                          let ue = /* @__PURE__ */ oe(() => [
                            d() ? `background-color:${d()}` : "",
                            o(t) === l()(o($), o(ve)) ? "background-color:#D9D800" : ""
                          ].filter(Boolean).join(";"));
                          Nl(J, {
                            get style() {
                              return o(ue);
                            },
                            $$events: {
                              mouseenter: () => U(t, l()(o($), o(ve)), !0),
                              mouseleave: () => U(t, null)
                            },
                            children: (B, z) => {
                              var k = Ig(), Q = q(k);
                              cn(Q, 17, i, br, (Ie, Ne) => {
                                qa(Ie, {
                                  children: (nt, qe) => {
                                    var Re = et();
                                    ce(() => {
                                      var st;
                                      return Me(Re, ((st = o($)) == null ? void 0 : st[o(Ne).key]) ?? "");
                                    }), x(nt, Re);
                                  },
                                  $$slots: { default: !0 }
                                });
                              });
                              var Y = K(Q, 2);
                              {
                                var me = (Ie) => {
                                  qa(Ie, {
                                    numeric: !0,
                                    children: (Ne, nt) => {
                                      var qe = se(), Re = q(qe);
                                      _e(Re, () => e.actions ?? be, () => ({ item: o($) })), x(Ne, qe);
                                    },
                                    $$slots: { default: !0 }
                                  });
                                };
                                ne(Y, (Ie) => {
                                  o(f) && Ie(me);
                                });
                              }
                              x(B, k);
                            },
                            $$slots: { default: !0 }
                          });
                        }
                      }), x(H, fe);
                    },
                    $$slots: { default: !0 }
                  }), x(F, re);
                },
                $$slots: { default: !0 }
              });
            };
            ne(
              C,
              (M) => {
                !r() || r().length === 0 ? M(T) : M(D, !1);
              },
              !0
            );
          }
          x(b, y);
        };
        ne(
          S,
          (b) => {
            s() ? b(I) : b(w, !1);
          },
          !0
        );
      }
      x(A, E);
    };
    ne(g, (A) => {
      a() ? A(p) : A(_, !1);
    });
  }
  x(n, h), Ae();
}
var yg = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"></path></svg>');
function Cg(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Dt(n, {
    children: (r, i) => {
      var a = yg();
      ce(() => tt(a, t())), x(r, a);
    }
  });
}
var Ag = /* @__PURE__ */ X('<span class="secondary-label svelte-17mxdlc"> </span>'), Eg = /* @__PURE__ */ X('<div class="seperator svelte-17mxdlc"><!></div>'), xg = /* @__PURE__ */ X('<div class="breadcrumb-wrapper svelte-17mxdlc"><button type="button"><span class="label svelte-17mxdlc"> </span> <!></button> <!></div>'), Sg = /* @__PURE__ */ X('<nav class="oscd-breadcrumbs svelte-17mxdlc" aria-label="Breadcrumb"></nav>');
function wg(n, e) {
  Ce(e, !0);
  let t = m(e, "breadcrumbs", 19, () => []), r = m(e, "activeIndex", 3, 0);
  const i = (s) => {
    var l;
    const u = t()[s];
    !(u != null && u.enabled) || s === r() || (l = e.handleClick) == null || l.call(e, s);
  };
  var a = Sg();
  cn(a, 21, t, br, (s, u, l) => {
    var c = xg(), d = j(c);
    let v;
    d.__click = () => i(l);
    let f;
    var h = j(d), g = j(h), p = K(h, 2);
    {
      var _ = (S) => {
        var I = Ag();
        let w;
        var b = j(I);
        ce(
          (y) => {
            w = tt(I, "", w, y), Me(b, o(u).secondaryLabel);
          },
          [() => ({ color: e.color ? e.color : null })]
        ), x(S, I);
      };
      ne(p, (S) => {
        o(u).secondaryLabel && S(_);
      });
    }
    var A = K(d, 2);
    {
      var E = (S) => {
        var I = Eg(), w = j(I);
        {
          let b = /* @__PURE__ */ oe(() => e.color ? e.color : "#004552");
          Cg(w, {
            get svgStyles() {
              return `fill: ${o(b) ?? ""}`;
            }
          });
        }
        x(S, I);
      };
      ne(A, (S) => {
        l < t().length - 1 && S(E);
      });
    }
    ce(
      (S, I) => {
        v = _r(d, 1, "breadcrumb svelte-17mxdlc", null, v, S), Tt(d, "aria-current", l === r() ? "page" : void 0), f = tt(d, "", f, I), Me(g, o(u).label);
      },
      [
        () => ({
          "br-disabled": !o(u).enabled,
          "br-active": l === r()
        }),
        () => ({ color: e.color ? e.color : null })
      ]
    ), x(s, c);
  }), x(n, a), Ae();
}
mt(["click"]);
var Tg = (n, e) => {
  var t;
  n.stopPropagation(), (t = e.onClick) == null || t.call(e, n);
}, Dg = /* @__PURE__ */ X('<button class="icon-button svelte-jv2py4"><!></button>');
function uu(n, e) {
  Ce(e, !0);
  let t = m(e, "tooltipSide", 3, "top"), r = m(e, "showDelay", 3, 1e3), i = m(e, "fillColor", 3, "var(--mdc-theme-primary)"), a = m(e, "size", 3, "25px"), s = /* @__PURE__ */ oe(() => `fill: ${i()}; margin: 0; width: ${a()}; height: ${a()};`);
  du(n, {
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
      var c = Dg();
      c.__click = [Tg, e];
      var d = j(c);
      {
        var v = (h) => {
          su(h, {
            get svgStyles() {
              return o(s);
            }
          });
        }, f = (h) => {
          var g = se(), p = q(g);
          {
            var _ = (E) => {
              xh(E, {
                get svgStyles() {
                  return o(s);
                }
              });
            }, A = (E) => {
              var S = se(), I = q(S);
              {
                var w = (y) => {
                  au(y, {
                    get svgStyles() {
                      return o(s);
                    }
                  });
                }, b = (y) => {
                  var C = se(), T = q(C);
                  {
                    var D = (F) => {
                      ou(F, {
                        get svgStyles() {
                          return o(s);
                        }
                      });
                    }, M = (F) => {
                      var P = se(), re = q(P);
                      {
                        var W = (H) => {
                          Wh(H, {
                            get svgStyles() {
                              return o(s);
                            }
                          });
                        }, N = (H) => {
                          var ee = se(), fe = q(ee);
                          {
                            var O = ($) => {
                              Vh($, {
                                get svgStyles() {
                                  return o(s);
                                }
                              });
                            }, J = ($) => {
                              var ve = se(), ue = q(ve);
                              {
                                var B = (k) => {
                                  Xh(k, {
                                    get svgStyles() {
                                      return o(s);
                                    }
                                  });
                                }, z = (k) => {
                                  var Q = se(), Y = q(Q);
                                  {
                                    var me = (Ne) => {
                                      qh(Ne, {
                                        get svgStyles() {
                                          return o(s);
                                        }
                                      });
                                    }, Ie = (Ne) => {
                                      var nt = et();
                                      ce(() => Me(nt, `Unsupported supported type: ${e.type ?? ""}`)), x(Ne, nt);
                                    };
                                    ne(
                                      Y,
                                      (Ne) => {
                                        e.type === "star" ? Ne(me) : Ne(Ie, !1);
                                      },
                                      !0
                                    );
                                  }
                                  x(k, Q);
                                };
                                ne(
                                  ue,
                                  (k) => {
                                    e.type === "close" ? k(B) : k(z, !1);
                                  },
                                  !0
                                );
                              }
                              x($, ve);
                            };
                            ne(
                              fe,
                              ($) => {
                                e.type === "link-off" ? $(O) : $(J, !1);
                              },
                              !0
                            );
                          }
                          x(H, ee);
                        };
                        ne(
                          re,
                          (H) => {
                            e.type === "wand-stars" ? H(W) : H(N, !1);
                          },
                          !0
                        );
                      }
                      x(F, P);
                    };
                    ne(
                      T,
                      (F) => {
                        e.type === "visibility" ? F(D) : F(M, !1);
                      },
                      !0
                    );
                  }
                  x(y, C);
                };
                ne(
                  I,
                  (y) => {
                    e.type === "edit" ? y(w) : y(b, !1);
                  },
                  !0
                );
              }
              x(E, S);
            };
            ne(
              p,
              (E) => {
                e.type === "duplicate" ? E(_) : E(A, !1);
              },
              !0
            );
          }
          x(h, g);
        };
        ne(d, (h) => {
          e.type === "delete" ? h(v) : h(f, !1);
        });
      }
      ce(() => Tt(c, "aria-label", e.tooltip)), x(u, c);
    },
    $$slots: { default: !0 }
  }), Ae();
}
mt(["click"]);
function Zl(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Mr(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Zl(Object(t), !0).forEach(function(r) {
      $i(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Zl(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function ki(n) {
  "@babel/helpers - typeof";
  return ki = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ki(n);
}
function $i(n, e, t) {
  return e in n ? Object.defineProperty(n, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[e] = t, n;
}
function Lg(n, e) {
  if (n == null) return {};
  var t = {}, r = Object.keys(n), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(e.indexOf(i) >= 0) && (t[i] = n[i]);
  return t;
}
function Rg(n, e) {
  if (n == null) return {};
  var t = Lg(n, e), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    for (i = 0; i < a.length; i++)
      r = a[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(n, r) && (t[r] = n[r]);
  }
  return t;
}
function Og(n, e) {
  return Fg(n) || kg(n, e) || Yo(n, e) || Ng();
}
function Dn(n) {
  return Mg(n) || Pg(n) || Yo(n) || Gg();
}
function Mg(n) {
  if (Array.isArray(n)) return yo(n);
}
function Fg(n) {
  if (Array.isArray(n)) return n;
}
function Pg(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function kg(n, e) {
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
function Yo(n, e) {
  if (n) {
    if (typeof n == "string") return yo(n, e);
    var t = Object.prototype.toString.call(n).slice(8, -1);
    if (t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set") return Array.from(n);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return yo(n, e);
  }
}
function yo(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
  return r;
}
function Gg() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ng() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Na(n, e) {
  var t = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (!t) {
    if (Array.isArray(n) || (t = Yo(n)) || e) {
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
var Zg = "finalize", Hg = "consider";
function ea(n, e, t) {
  n.dispatchEvent(new CustomEvent(Zg, {
    detail: {
      items: e,
      info: t
    }
  }));
}
function Br(n, e, t) {
  n.dispatchEvent(new CustomEvent(Hg, {
    detail: {
      items: e,
      info: t
    }
  }));
}
var Ps = "draggedEntered", Za = "draggedLeft", ks = "draggedOverIndex", qo = "draggedLeftDocument", fs = {
  LEFT_FOR_ANOTHER: "leftForAnother",
  OUTSIDE_OF_ANY: "outsideOfAny"
};
function Bg(n, e, t) {
  n.dispatchEvent(new CustomEvent(Ps, {
    detail: {
      indexObj: e,
      draggedEl: t
    }
  }));
}
function Ug(n, e, t) {
  n.dispatchEvent(new CustomEvent(Za, {
    detail: {
      draggedEl: e,
      type: fs.LEFT_FOR_ANOTHER,
      theOtherDz: t
    }
  }));
}
function Wg(n, e) {
  n.dispatchEvent(new CustomEvent(Za, {
    detail: {
      draggedEl: e,
      type: fs.OUTSIDE_OF_ANY
    }
  }));
}
function jg(n, e, t) {
  n.dispatchEvent(new CustomEvent(ks, {
    detail: {
      indexObj: e,
      draggedEl: t
    }
  }));
}
function Vg(n) {
  window.dispatchEvent(new CustomEvent(qo, {
    detail: {
      draggedEl: n
    }
  }));
}
var At = {
  DRAG_STARTED: "dragStarted",
  DRAGGED_ENTERED: Ps,
  DRAGGED_ENTERED_ANOTHER: "dragEnteredAnother",
  DRAGGED_OVER_INDEX: ks,
  DRAGGED_LEFT: Za,
  DRAGGED_LEFT_ALL: "draggedLeftAll",
  DROPPED_INTO_ZONE: "droppedIntoZone",
  DROPPED_INTO_ANOTHER: "droppedIntoAnother",
  DROPPED_OUTSIDE_OF_ANY: "droppedOutsideOfAny",
  DRAG_STOPPED: "dragStopped"
}, Xt = {
  POINTER: "pointer",
  KEYBOARD: "keyboard"
}, aa = "isDndShadowItem", Gs = "data-is-dnd-shadow-item-internal", zg = "data-is-dnd-shadow-item-hint", Xg = "id:dnd-shadow-placeholder-0000", Yg = "dnd-action-dragged-el", St = "id", Co = 0;
function cu() {
  Co++;
}
function fu() {
  if (Co === 0)
    throw new Error("Bug! trying to decrement when there are no dropzones");
  Co--;
}
var Ko = typeof window > "u";
function Ao(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, t, r = e ? Qg(n) : n.getBoundingClientRect(), i = getComputedStyle(n), a = i.transform;
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
function vu(n) {
  var e = Ao(n);
  return {
    top: e.top + window.scrollY,
    bottom: e.bottom + window.scrollY,
    left: e.left + window.scrollX,
    right: e.right + window.scrollX
  };
}
function hu(n) {
  var e = n.getBoundingClientRect();
  return {
    top: e.top + window.scrollY,
    bottom: e.bottom + window.scrollY,
    left: e.left + window.scrollX,
    right: e.right + window.scrollX
  };
}
function gu(n) {
  return {
    x: (n.left + n.right) / 2,
    y: (n.top + n.bottom) / 2
  };
}
function qg(n, e) {
  return Math.sqrt(Math.pow(n.x - e.x, 2) + Math.pow(n.y - e.y, 2));
}
function Ns(n, e) {
  return n.y <= e.bottom && n.y >= e.top && n.x >= e.left && n.x <= e.right;
}
function xa(n) {
  return gu(hu(n));
}
function Hl(n, e) {
  var t = xa(n), r = vu(e);
  return Ns(t, r);
}
function Bl(n, e) {
  var t = xa(n), r = xa(e);
  return qg(t, r);
}
function Kg(n) {
  var e = hu(n);
  return e.right < 0 || e.left > document.documentElement.scrollWidth || e.bottom < 0 || e.top > document.documentElement.scrollHeight;
}
function Qg(n) {
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
var Zi;
function Qo() {
  Zi = /* @__PURE__ */ new Map();
}
Qo();
function Jg(n) {
  var e = Array.from(n.children).findIndex(function(t) {
    return t.getAttribute(Gs);
  });
  if (e >= 0)
    return Zi.has(n) || Zi.set(n, /* @__PURE__ */ new Map()), Zi.get(n).set(e, vu(n.children[e])), e;
}
function $g(n, e) {
  if (!Hl(n, e))
    return null;
  var t = e.children;
  if (t.length === 0)
    return {
      index: 0,
      isProximityBased: !0
    };
  for (var r = Jg(e), i = 0; i < t.length; i++)
    if (Hl(n, t[i])) {
      var a = Zi.has(e) && Zi.get(e).get(i);
      return a && !Ns(xa(n), a) ? {
        index: r,
        isProximityBased: !1
      } : {
        index: i,
        isProximityBased: !1
      };
    }
  for (var s = Number.MAX_VALUE, u = void 0, l = 0; l < t.length; l++) {
    var c = Bl(n, t[l]);
    c < s && (s = c, u = l);
  }
  if (t.length > 0) {
    var d = t.length, v = t[d - 1], f = v.cloneNode(!1);
    f.style.visibility = "hidden", f.style.pointerEvents = "none", e.appendChild(f);
    var h = Bl(n, f);
    h < s && (u = d), e.removeChild(f);
  }
  return {
    index: u,
    isProximityBased: !0
  };
}
function ga(n) {
  return JSON.stringify(n, null, 2);
}
function vs(n) {
  if (!n)
    throw new Error("cannot get depth of a falsy node");
  return mu(n, 0);
}
function mu(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return n.parentElement ? mu(n.parentElement, e + 1) : e - 1;
}
function em(n, e) {
  if (Object.keys(n).length !== Object.keys(e).length)
    return !1;
  for (var t in n)
    if (!{}.hasOwnProperty.call(e, t) || e[t] !== n[t])
      return !1;
  return !0;
}
function tm(n, e) {
  if (n.length !== e.length)
    return !1;
  for (var t = 0; t < n.length; t++)
    if (n[t] !== e[t])
      return !1;
  return !0;
}
var nm = 200, Ul = 10, Eo;
function rm(n, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : nm, r = arguments.length > 3 ? arguments[3] : void 0, i, a, s = !1, u, l = Array.from(e).sort(function(d, v) {
    return vs(v) - vs(d);
  });
  function c() {
    var d = xa(n), v = r.multiScrollIfNeeded();
    if (!v && u && Math.abs(u.x - d.x) < Ul && Math.abs(u.y - d.y) < Ul) {
      Eo = window.setTimeout(c, t);
      return;
    }
    if (Kg(n)) {
      Vg(n);
      return;
    }
    u = d;
    var f = !1, h = Na(l), g;
    try {
      for (h.s(); !(g = h.n()).done; ) {
        var p = g.value;
        v && Qo();
        var _ = $g(n, p);
        if (_ !== null) {
          var A = _.index;
          f = !0, p !== i ? (i && Ug(i, n, p), Bg(p, _, n), i = p) : A !== a && (jg(p, _, n), a = A);
          break;
        }
      }
    } catch (E) {
      h.e(E);
    } finally {
      h.f();
    }
    !f && s && i ? (Wg(i, n), i = void 0, a = void 0, s = !1) : s = !0, Eo = window.setTimeout(c, t);
  }
  c();
}
function im() {
  clearTimeout(Eo), Qo();
}
var ma = 30;
function am() {
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
    return ma - a;
  }
  function i(a, s) {
    if (!s)
      return !1;
    var u = sm(a, s), l = !!n.directionObj;
    if (u === null)
      return l && e(), !1;
    var c = !1, d = !1;
    return s.scrollHeight > s.clientHeight && (u.bottom < ma ? (c = !0, n.directionObj = {
      x: 0,
      y: 1
    }, n.stepPx = r(u.bottom)) : u.top < ma && (c = !0, n.directionObj = {
      x: 0,
      y: -1
    }, n.stepPx = r(u.top)), !l && c) || s.scrollWidth > s.clientWidth && (u.right < ma ? (d = !0, n.directionObj = {
      x: 1,
      y: 0
    }, n.stepPx = r(u.right)) : u.left < ma && (d = !0, n.directionObj = {
      x: -1,
      y: 0
    }, n.stepPx = r(u.left)), !l && d) ? (t(s), !0) : (e(), !1);
  }
  return {
    scrollIfNeeded: i,
    resetScrolling: e
  };
}
function sm(n, e) {
  var t = e === document.scrollingElement ? {
    top: 0,
    bottom: window.innerHeight,
    left: 0,
    right: window.innerWidth
  } : e.getBoundingClientRect();
  return Ns(n, t) ? {
    top: n.y - t.top,
    bottom: t.bottom - n.y,
    left: n.x - t.left,
    right: t.right - n.x
  } : null;
}
function om() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e = arguments.length > 1 ? arguments[1] : void 0, t = dm(n), r = Array.from(t).sort(function(l, c) {
    return vs(c) - vs(l);
  }), i = am(), a = i.scrollIfNeeded, s = i.resetScrolling;
  function u() {
    var l = e();
    if (!l || !r)
      return !1;
    for (var c = r.filter(function(f) {
      return Ns(l, f.getBoundingClientRect()) || f === document.scrollingElement;
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
function lm(n) {
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
function dm(n) {
  var e = /* @__PURE__ */ new Set(), t = Na(n), r;
  try {
    for (t.s(); !(r = t.n()).done; ) {
      var i = r.value;
      lm(i).forEach(function(a) {
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
function um(n) {
  var e = n.cloneNode(!0), t = [], r = n.tagName === "SELECT", i = r ? [n] : Dn(n.querySelectorAll("select")), a = Na(i), s;
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
      var A = g[_], E = p[_];
      E.width = A.width, E.height = A.height, A.width > 0 && A.height > 0 && E.getContext("2d").drawImage(A, 0, 0);
    }
  return e;
}
var Sa = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
}), cm = $i({}, Sa.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
function pu(n) {
  if (!Sa[n]) throw new Error("Can't get non existing feature flag ".concat(n, "! Supported flags: ").concat(Object.keys(Sa)));
  return cm[n];
}
var fm = 0.2;
function ri(n) {
  return "".concat(n, " ").concat(fm, "s ease");
}
function vm(n, e) {
  var t = n.getBoundingClientRect(), r = um(n);
  Iu(n, r), r.id = Yg, r.style.position = "fixed";
  var i = t.top, a = t.left;
  if (r.style.top = "".concat(i, "px"), r.style.left = "".concat(a, "px"), e) {
    var s = gu(t);
    i -= s.y - e.y, a -= s.x - e.x, window.setTimeout(function() {
      r.style.top = "".concat(i, "px"), r.style.left = "".concat(a, "px");
    }, 0);
  }
  return r.style.margin = "0", r.style.boxSizing = "border-box", r.style.height = "".concat(t.height, "px"), r.style.width = "".concat(t.width, "px"), r.style.transition = "".concat(ri("top"), ", ").concat(ri("left"), ", ").concat(ri("background-color"), ", ").concat(ri("opacity"), ", ").concat(ri("color"), " "), window.setTimeout(function() {
    return r.style.transition += ", ".concat(ri("width"), ", ").concat(ri("height"));
  }, 0), r.style.zIndex = "9999", r.style.cursor = "grabbing", r;
}
function hm(n) {
  n.style.cursor = "grab";
}
function gm(n, e, t, r) {
  Iu(e, n);
  var i = e.getBoundingClientRect(), a = n.getBoundingClientRect(), s = i.width - a.width, u = i.height - a.height;
  if (s || u) {
    var l = {
      left: (t - a.left) / a.width,
      top: (r - a.top) / a.height
    };
    pu(Sa.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT) || (n.style.height = "".concat(i.height, "px"), n.style.width = "".concat(i.width, "px")), n.style.left = "".concat(parseFloat(n.style.left) - l.left * s, "px"), n.style.top = "".concat(parseFloat(n.style.top) - l.top * u, "px");
  }
}
function Iu(n, e) {
  var t = window.getComputedStyle(n);
  Array.from(t).filter(function(r) {
    return r.startsWith("background") || r.startsWith("padding") || r.startsWith("font") || r.startsWith("text") || r.startsWith("align") || r.startsWith("justify") || r.startsWith("display") || r.startsWith("flex") || r.startsWith("border") || r === "opacity" || r === "color" || r === "list-style-type" || // copying with and height to make up for rect update timing issues in some browsers
    pu(Sa.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT) && (r === "width" || r === "height");
  }).forEach(function(r) {
    return e.style.setProperty(r, t.getPropertyValue(r), t.getPropertyPriority(r));
  });
}
function mm(n, e) {
  n.draggable = !1, n.ondragstart = function() {
    return !1;
  }, e ? (n.style.userSelect = "", n.style.WebkitUserSelect = "", n.style.cursor = "") : (n.style.userSelect = "none", n.style.WebkitUserSelect = "none", n.style.cursor = "grab");
}
function bu(n) {
  n.style.display = "none", n.style.position = "fixed", n.style.zIndex = "-5";
}
function pm(n) {
  n.style.visibility = "hidden", n.setAttribute(Gs, "true");
}
function Im(n) {
  n.style.visibility = "", n.removeAttribute(Gs);
}
function is(n) {
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
function hs(n) {
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
function bm(n) {
  var e = n.style.minHeight;
  n.style.minHeight = window.getComputedStyle(n).getPropertyValue("height");
  var t = n.style.minWidth;
  return n.style.minWidth = window.getComputedStyle(n).getPropertyValue("width"), function() {
    n.style.minHeight = e, n.style.minWidth = t;
  };
}
var _m = "--any--", ym = 100, Cm = 20, Ka = 3, Am = 80, Wl = {
  outline: "rgba(255, 255, 102, 0.7) solid 2px"
}, jl = "data-is-dnd-original-dragged-item", ln, xt, dn, Zs, at, Hs, Zr, Ft, Yn, Wt, Tr = !1, Jo = !1, $o, Ha = !1, as = [], ya, qn, Ia = !1, Un = /* @__PURE__ */ new Map(), gt = /* @__PURE__ */ new Map(), ro = /* @__PURE__ */ new WeakMap();
function Em(n, e) {
  Un.has(e) || Un.set(e, /* @__PURE__ */ new Set()), Un.get(e).has(n) || (Un.get(e).add(n), cu());
}
function Vl(n, e) {
  Un.get(e).delete(n), fu(), Un.get(e).size === 0 && Un.delete(e);
}
function xm() {
  var n = Un.get(Zs), e = Na(n), t;
  try {
    for (e.s(); !(t = e.n()).done; ) {
      var r = t.value;
      r.addEventListener(Ps, _u), r.addEventListener(Za, yu), r.addEventListener(ks, Cu);
    }
  } catch (s) {
    e.e(s);
  } finally {
    e.f();
  }
  window.addEventListener(qo, ta);
  var i = Math.max.apply(Math, Dn(Array.from(n.keys()).map(function(s) {
    return gt.get(s).dropAnimationDurationMs;
  }))), a = i === 0 ? Cm : Math.max(i, ym);
  ya = om(n, function() {
    return Wt;
  }), rm(xt, n, a * 1.07, ya);
}
function Sm() {
  var n = Un.get(Zs), e = Na(n), t;
  try {
    for (e.s(); !(t = e.n()).done; ) {
      var r = t.value;
      r.removeEventListener(Ps, _u), r.removeEventListener(Za, yu), r.removeEventListener(ks, Cu);
    }
  } catch (i) {
    e.e(i);
  } finally {
    e.f();
  }
  window.removeEventListener(qo, ta), ya && (ya.destroy(), ya = void 0), im();
}
function Bs(n) {
  return n.findIndex(function(e) {
    return !!e[aa];
  });
}
function wm(n) {
  var e;
  return Mr(Mr({}, n), {}, (e = {}, $i(e, aa, !0), $i(e, St, Xg), e));
}
function _u(n) {
  var e = gt.get(n.currentTarget), t = e.items, r = e.dropFromOthersDisabled;
  if (!(r && n.currentTarget !== at)) {
    if (Ha = !1, t = t.filter(function(u) {
      return u[St] !== Zr[St];
    }), at !== n.currentTarget) {
      var i = gt.get(at).items, a = i.filter(function(u) {
        return !u[aa];
      });
      Br(at, a, {
        trigger: At.DRAGGED_ENTERED_ANOTHER,
        id: dn[St],
        source: Xt.POINTER
      });
    }
    var s = n.detail.indexObj.index;
    Ft = n.currentTarget, t.splice(s, 0, Zr), Br(n.currentTarget, t, {
      trigger: At.DRAGGED_ENTERED,
      id: dn[St],
      source: Xt.POINTER
    });
  }
}
function yu(n) {
  if (Tr) {
    var e = gt.get(n.currentTarget), t = e.items, r = e.dropFromOthersDisabled;
    if (!(r && n.currentTarget !== at && n.currentTarget !== Ft)) {
      var i = Dn(t), a = Bs(i);
      a !== -1 && i.splice(a, 1);
      var s = Ft;
      Ft = void 0;
      var u = n.detail, l = u.type, c = u.theOtherDz;
      if (l === fs.OUTSIDE_OF_ANY || l === fs.LEFT_FOR_ANOTHER && c !== at && gt.get(c).dropFromOthersDisabled) {
        Ha = !0, Ft = at;
        var d = s === at ? i : Dn(gt.get(at).items);
        d.splice(Hs, 0, Zr), Br(at, d, {
          trigger: At.DRAGGED_LEFT_ALL,
          id: dn[St],
          source: Xt.POINTER
        });
      }
      Br(n.currentTarget, i, {
        trigger: At.DRAGGED_LEFT,
        id: dn[St],
        source: Xt.POINTER
      });
    }
  }
}
function Cu(n) {
  var e = gt.get(n.currentTarget), t = e.items, r = e.dropFromOthersDisabled;
  if (!(r && n.currentTarget !== at)) {
    var i = Dn(t);
    Ha = !1;
    var a = n.detail.indexObj.index, s = Bs(i);
    s !== -1 && i.splice(s, 1), i.splice(a, 0, Zr), Br(n.currentTarget, i, {
      trigger: At.DRAGGED_OVER_INDEX,
      id: dn[St],
      source: Xt.POINTER
    });
  }
}
function gs(n) {
  n.preventDefault();
  var e = n.touches ? n.touches[0] : n;
  Wt = {
    x: e.clientX,
    y: e.clientY
  }, xt.style.transform = "translate3d(".concat(Wt.x - Yn.x, "px, ").concat(Wt.y - Yn.y, "px, 0)");
}
function ta() {
  Jo = !0, window.removeEventListener("mousemove", gs), window.removeEventListener("touchmove", gs), window.removeEventListener("mouseup", ta), window.removeEventListener("touchend", ta), Sm(), hm(xt), Ft || (Ft = at);
  var n = gt.get(Ft), e = n.items, t = n.type;
  hs(Un.get(t), function(a) {
    return gt.get(a).dropTargetStyle;
  }, function(a) {
    return gt.get(a).dropTargetClasses;
  });
  var r = Bs(e);
  r === -1 && Ft === at && (r = Hs), e = e.map(function(a) {
    return a[aa] ? dn : a;
  });
  function i() {
    $o(), ea(Ft, e, {
      trigger: Ha ? At.DROPPED_OUTSIDE_OF_ANY : At.DROPPED_INTO_ZONE,
      id: dn[St],
      source: Xt.POINTER
    }), Ft !== at && ea(at, gt.get(at).items, {
      trigger: At.DROPPED_INTO_ANOTHER,
      id: dn[St],
      source: Xt.POINTER
    });
    var a = Array.from(Ft.children).find(function(s) {
      return s.getAttribute(Gs);
    });
    a && Im(a), Lm();
  }
  gt.get(Ft).dropAnimationDisabled ? i() : Tm(r, i);
}
function Tm(n, e) {
  var t = n > -1 ? Ao(Ft.children[n], !1) : Ao(Ft, !1), r = {
    x: t.left - parseFloat(xt.style.left),
    y: t.top - parseFloat(xt.style.top)
  }, i = gt.get(Ft), a = i.dropAnimationDurationMs, s = "transform ".concat(a, "ms ease");
  xt.style.transition = xt.style.transition ? xt.style.transition + "," + s : s, xt.style.transform = "translate3d(".concat(r.x, "px, ").concat(r.y, "px, 0)"), window.setTimeout(e, a);
}
function Dm(n, e) {
  as.push({
    dz: n,
    destroy: e
  }), window.requestAnimationFrame(function() {
    bu(n), document.body.appendChild(n);
  });
}
function Lm() {
  xt && xt.remove && xt.remove(), ln && ln.remove && ln.remove(), xt = void 0, ln = void 0, dn = void 0, Zs = void 0, at = void 0, Hs = void 0, Zr = void 0, Ft = void 0, Yn = void 0, Wt = void 0, Tr = !1, Jo = !1, $o = void 0, Ha = !1, qn && clearTimeout(qn), qn = void 0, Ia = !1, as.length && (as.forEach(function(n) {
    var e = n.dz, t = n.destroy;
    t(), e.remove();
  }), as = []);
}
function Rm(n, e) {
  var t = !1, r = {
    items: void 0,
    type: void 0,
    flipDurationMs: 0,
    dragDisabled: !1,
    morphDisabled: !1,
    dropFromOthersDisabled: !1,
    dropTargetStyle: Wl,
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
    window.removeEventListener("mousemove", l), window.removeEventListener("touchmove", l), window.removeEventListener("mouseup", u), window.removeEventListener("touchend", u), qn && (clearTimeout(qn), qn = void 0, Ia = !1);
  }
  function u(f) {
    if (s(), ln = void 0, Yn = void 0, Wt = void 0, f.type === "touchend") {
      var h = new Event("click", {
        bubbles: !0,
        cancelable: !0
      });
      f.target.dispatchEvent(h);
    }
  }
  function l(f) {
    var h = !!f.touches, g = h ? f.touches[0] : f;
    if (h && r.delayTouchStartMs > 0 && !Ia) {
      Wt = {
        x: g.clientX,
        y: g.clientY
      }, (Math.abs(Wt.x - Yn.x) >= Ka || Math.abs(Wt.y - Yn.y) >= Ka) && (qn && (clearTimeout(qn), qn = void 0), u(f));
      return;
    }
    f.preventDefault(), Wt = {
      x: g.clientX,
      y: g.clientY
    }, (Math.abs(Wt.x - Yn.x) >= Ka || Math.abs(Wt.y - Yn.y) >= Ka) && (s(), d());
  }
  function c(f) {
    if (!(f.target !== f.currentTarget && (f.target.value !== void 0 || f.target.isContentEditable)) && !f.button && !Tr) {
      var h = !!f.touches, g = h && r.delayTouchStartMs > 0;
      g || f.preventDefault(), f.stopPropagation();
      var p = h ? f.touches[0] : f;
      Yn = {
        x: p.clientX,
        y: p.clientY
      }, Wt = Mr({}, Yn), ln = f.currentTarget, g && (Ia = !1, qn = window.setTimeout(function() {
        ln && (Ia = !0, s(), d());
      }, r.delayTouchStartMs)), a();
    }
  }
  function d() {
    Tr = !0;
    var f = i.get(ln);
    Hs = f, at = ln.parentElement;
    var h = at.closest("dialog") || at.closest("[popover]") || at.getRootNode(), g = h.body || h, p = r.items, _ = r.type, A = r.centreDraggedOnCursor, E = Dn(p);
    dn = E[f], Zs = _, Zr = wm(dn), xt = vm(ln, A && Wt), g.appendChild(xt);
    function S() {
      ln.parentElement ? window.requestAnimationFrame(S) : (ln.setAttribute(jl, !0), g.appendChild(ln), xm(), bu(ln), Zr[St] = dn[St], xt.focus());
    }
    window.requestAnimationFrame(S), is(Array.from(Un.get(r.type)).filter(function(I) {
      return I === at || !gt.get(I).dropFromOthersDisabled;
    }), function(I) {
      return gt.get(I).dropTargetStyle;
    }, function(I) {
      return gt.get(I).dropTargetClasses;
    }), E.splice(f, 1, Zr), $o = bm(at), Br(at, E, {
      trigger: At.DRAG_STARTED,
      id: dn[St],
      source: Xt.POINTER
    }), window.addEventListener("mousemove", gs, {
      passive: !1
    }), window.addEventListener("touchmove", gs, {
      passive: !1,
      capture: !1
    }), window.addEventListener("mouseup", ta, {
      passive: !1
    }), window.addEventListener("touchend", ta, {
      passive: !1
    });
  }
  function v(f) {
    var h = f.items, g = h === void 0 ? void 0 : h, p = f.flipDurationMs, _ = p === void 0 ? 0 : p, A = f.type, E = A === void 0 ? _m : A, S = f.dragDisabled, I = S === void 0 ? !1 : S, w = f.morphDisabled, b = w === void 0 ? !1 : w, y = f.dropFromOthersDisabled, C = y === void 0 ? !1 : y, T = f.dropTargetStyle, D = T === void 0 ? Wl : T, M = f.dropTargetClasses, F = M === void 0 ? [] : M, P = f.transformDraggedElement, re = P === void 0 ? function() {
    } : P, W = f.centreDraggedOnCursor, N = W === void 0 ? !1 : W, H = f.dropAnimationDisabled, ee = H === void 0 ? !1 : H, fe = f.delayTouchStart, O = fe === void 0 ? !1 : fe;
    r.dropAnimationDurationMs = _;
    var J = 0;
    O === !0 ? J = Am : typeof O == "number" && isFinite(O) && O >= 0 && (J = O), r.delayTouchStartMs = J, r.type && E !== r.type && Vl(n, r.type), r.type = E, r.items = Dn(g), r.dragDisabled = I, r.morphDisabled = b, r.transformDraggedElement = re, r.centreDraggedOnCursor = N, r.dropAnimationDisabled = ee, t && Tr && !Jo && (!em(D, r.dropTargetStyle) || !tm(F, r.dropTargetClasses)) && (hs([n], function() {
      return r.dropTargetStyle;
    }, function() {
      return F;
    }), is([n], function() {
      return D;
    }, function() {
      return F;
    })), r.dropTargetStyle = D, r.dropTargetClasses = Dn(F);
    function $(z, k) {
      return gt.get(z) ? gt.get(z)[k] : r[k];
    }
    t && Tr && r.dropFromOthersDisabled !== C && (C ? hs([n], function(z) {
      return $(z, "dropTargetStyle");
    }, function(z) {
      return $(z, "dropTargetClasses");
    }) : is([n], function(z) {
      return $(z, "dropTargetStyle");
    }, function(z) {
      return $(z, "dropTargetClasses");
    })), r.dropFromOthersDisabled = C, gt.set(n, r), Em(n, E);
    for (var ve = Tr ? Bs(r.items) : -1, ue = 0; ue < n.children.length; ue++) {
      var B = n.children[ue];
      if (mm(B, I), ue === ve) {
        b || gm(xt, B, Wt.x, Wt.y), r.transformDraggedElement(xt, dn, ue), pm(B);
        continue;
      }
      B.removeEventListener("mousedown", ro.get(B)), B.removeEventListener("touchstart", ro.get(B)), I || (B.addEventListener("mousedown", c), B.addEventListener("touchstart", c), ro.set(B, c)), i.set(B, ue), t || (t = !0);
    }
  }
  return v(e), {
    update: function(h) {
      v(h);
    },
    destroy: function() {
      function h() {
        Vl(n, gt.get(n).type), gt.delete(n);
      }
      Tr && !n.closest("[".concat(jl, "]")) ? Dm(n, h) : h();
    }
  };
}
var Qa, xo = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
}, Au = (Qa = {}, $i(Qa, xo.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), $i(Qa, xo.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list"), Qa), Om = "dnd-action-aria-alert", It;
function So() {
  It || (It = document.createElement("div"), function() {
    It.id = Om, It.style.position = "fixed", It.style.bottom = "0", It.style.left = "0", It.style.zIndex = "-5", It.style.opacity = "0", It.style.height = "0", It.style.width = "0", It.setAttribute("role", "alert");
  }(), document.body.prepend(It), Object.entries(Au).forEach(function(n) {
    var e = Og(n, 2), t = e[0], r = e[1];
    return document.body.prepend(Pm(t, r));
  }));
}
function Mm() {
  return Ko ? null : (document.readyState === "complete" ? So() : window.addEventListener("DOMContentLoaded", So), Mr({}, xo));
}
function Fm() {
  Ko || !It || (Object.keys(Au).forEach(function(n) {
    var e;
    return (e = document.getElementById(n)) === null || e === void 0 ? void 0 : e.remove();
  }), It.remove(), It = void 0);
}
function Pm(n, e) {
  var t = document.createElement("div");
  return t.id = n, t.innerHTML = "<p>".concat(e, "</p>"), t.style.display = "none", t.style.position = "fixed", t.style.zIndex = "-5", t;
}
function Hi(n) {
  if (!Ko) {
    It || So(), It.innerHTML = "";
    var e = document.createTextNode(n);
    It.appendChild(e), It.style.display = "none", It.style.display = "inline";
  }
}
var km = "--any--", zl = {
  outline: "rgba(255, 255, 102, 0.7) solid 2px"
}, Tn = !1, wo, Vt, gi = "", ii, er, Fr = "", ms = /* @__PURE__ */ new WeakSet(), Xl = /* @__PURE__ */ new WeakMap(), Yl = /* @__PURE__ */ new WeakMap(), To = /* @__PURE__ */ new Map(), Ot = /* @__PURE__ */ new Map(), Hn = /* @__PURE__ */ new Map(), ps;
function Gm(n, e) {
  Hn.size === 0 && (ps = Mm(), window.addEventListener("keydown", Eu), window.addEventListener("click", xu)), Hn.has(e) || Hn.set(e, /* @__PURE__ */ new Set()), Hn.get(e).has(n) || (Hn.get(e).add(n), cu());
}
function ql(n, e) {
  Vt === n && wa(), Hn.get(e).delete(n), fu(), Hn.get(e).size === 0 && Hn.delete(e), Hn.size === 0 && (window.removeEventListener("keydown", Eu), window.removeEventListener("click", xu), ps = void 0, Fm());
}
function Eu(n) {
  if (Tn)
    switch (n.key) {
      case "Escape": {
        wa();
        break;
      }
    }
}
function xu() {
  Tn && (ms.has(document.activeElement) || wa());
}
function Nm(n) {
  if (Tn) {
    var e = n.currentTarget;
    if (e !== Vt) {
      gi = e.getAttribute("aria-label") || "";
      var t = Ot.get(Vt), r = t.items, i = r.find(function(v) {
        return v[St] === er;
      }), a = r.indexOf(i), s = r.splice(a, 1)[0], u = Ot.get(e), l = u.items, c = u.autoAriaDisabled;
      e.getBoundingClientRect().top < Vt.getBoundingClientRect().top || e.getBoundingClientRect().left < Vt.getBoundingClientRect().left ? (l.push(s), c || Hi("Moved item ".concat(Fr, " to the end of the list ").concat(gi))) : (l.unshift(s), c || Hi("Moved item ".concat(Fr, " to the beginning of the list ").concat(gi)));
      var d = Vt;
      ea(d, r, {
        trigger: At.DROPPED_INTO_ANOTHER,
        id: er,
        source: Xt.KEYBOARD
      }), ea(e, l, {
        trigger: At.DROPPED_INTO_ZONE,
        id: er,
        source: Xt.KEYBOARD
      }), Vt = e;
    }
  }
}
function Su() {
  To.forEach(function(n, e) {
    var t = n.update;
    return t(Ot.get(e));
  });
}
function wa() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  Ot.get(Vt).autoAriaDisabled || Hi("Stopped dragging item ".concat(Fr)), ms.has(document.activeElement) && document.activeElement.blur(), n && Br(Vt, Ot.get(Vt).items, {
    trigger: At.DRAG_STOPPED,
    id: er,
    source: Xt.KEYBOARD
  }), hs(Hn.get(wo), function(e) {
    return Ot.get(e).dropTargetStyle;
  }, function(e) {
    return Ot.get(e).dropTargetClasses;
  }), ii = null, er = null, Fr = "", wo = null, Vt = null, gi = "", Tn = !1, Su();
}
function Zm(n, e) {
  var t = {
    items: void 0,
    type: void 0,
    dragDisabled: !1,
    zoneTabIndex: 0,
    zoneItemTabIndex: 0,
    dropFromOthersDisabled: !1,
    dropTargetStyle: zl,
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
        if ((d.target.disabled !== void 0 || d.target.href || d.target.isContentEditable) && !ms.has(d.target))
          return;
        d.preventDefault(), d.stopPropagation(), Tn ? wa() : a(d);
        break;
      }
      case "ArrowDown":
      case "ArrowRight": {
        if (!Tn) return;
        d.preventDefault(), d.stopPropagation();
        var v = Ot.get(n), f = v.items, h = Array.from(n.children), g = h.indexOf(d.currentTarget);
        g < h.length - 1 && (t.autoAriaDisabled || Hi("Moved item ".concat(Fr, " to position ").concat(g + 2, " in the list ").concat(gi)), r(f, g, g + 1), ea(n, f, {
          trigger: At.DROPPED_INTO_ZONE,
          id: er,
          source: Xt.KEYBOARD
        }));
        break;
      }
      case "ArrowUp":
      case "ArrowLeft": {
        if (!Tn) return;
        d.preventDefault(), d.stopPropagation();
        var p = Ot.get(n), _ = p.items, A = Array.from(n.children), E = A.indexOf(d.currentTarget);
        E > 0 && (t.autoAriaDisabled || Hi("Moved item ".concat(Fr, " to position ").concat(E, " in the list ").concat(gi)), r(_, E, E - 1), ea(n, _, {
          trigger: At.DROPPED_INTO_ZONE,
          id: er,
          source: Xt.KEYBOARD
        }));
        break;
      }
    }
  }
  function a(d) {
    u(d.currentTarget), Vt = n, wo = t.type, Tn = !0;
    var v = Array.from(Hn.get(t.type)).filter(function(h) {
      return h === Vt || !Ot.get(h).dropFromOthersDisabled;
    });
    if (is(v, function(h) {
      return Ot.get(h).dropTargetStyle;
    }, function(h) {
      return Ot.get(h).dropTargetClasses;
    }), !t.autoAriaDisabled) {
      var f = "Started dragging item ".concat(Fr, ". Use the arrow keys to move it within its list ").concat(gi);
      v.length > 1 && (f += ", or tab to another list in order to move the item into it"), Hi(f);
    }
    Br(n, Ot.get(n).items, {
      trigger: At.DRAG_STARTED,
      id: er,
      source: Xt.KEYBOARD
    }), Su();
  }
  function s(d) {
    Tn && d.currentTarget !== ii && (d.stopPropagation(), wa(!1), a(d));
  }
  function u(d) {
    var v = Ot.get(n), f = v.items, h = Array.from(n.children), g = h.indexOf(d);
    ii = d, ii.tabIndex = t.zoneItemTabIndex, er = f[g][St], Fr = h[g].getAttribute("aria-label") || "";
  }
  function l(d) {
    var v = d.items, f = v === void 0 ? [] : v, h = d.type, g = h === void 0 ? km : h, p = d.dragDisabled, _ = p === void 0 ? !1 : p, A = d.zoneTabIndex, E = A === void 0 ? 0 : A, S = d.zoneItemTabIndex, I = S === void 0 ? 0 : S, w = d.dropFromOthersDisabled, b = w === void 0 ? !1 : w, y = d.dropTargetStyle, C = y === void 0 ? zl : y, T = d.dropTargetClasses, D = T === void 0 ? [] : T, M = d.autoAriaDisabled, F = M === void 0 ? !1 : M;
    t.items = Dn(f), t.dragDisabled = _, t.dropFromOthersDisabled = b, t.zoneTabIndex = E, t.zoneItemTabIndex = I, t.dropTargetStyle = C, t.dropTargetClasses = D, t.autoAriaDisabled = F, t.type && g !== t.type && ql(n, t.type), t.type = g, Gm(n, g), F || (n.setAttribute("aria-disabled", _), n.setAttribute("role", "list"), n.setAttribute("aria-describedby", _ ? ps.DND_ZONE_DRAG_DISABLED : ps.DND_ZONE_ACTIVE)), Ot.set(n, t), Tn ? n.tabIndex = n === Vt || ii.contains(n) || t.dropFromOthersDisabled || Vt && t.type !== Ot.get(Vt).type ? -1 : 0 : n.tabIndex = t.zoneTabIndex, n.addEventListener("focus", Nm);
    for (var P = function(N) {
      var H = n.children[N];
      ms.add(H), H.tabIndex = Tn ? -1 : t.zoneItemTabIndex, F || H.setAttribute("role", "listitem"), H.removeEventListener("keydown", Xl.get(H)), H.removeEventListener("click", Yl.get(H)), _ || (H.addEventListener("keydown", i), Xl.set(H, i), H.addEventListener("click", s), Yl.set(H, s)), Tn && t.items[N][St] === er && (ii = H, ii.tabIndex = t.zoneItemTabIndex, H.focus());
    }, re = 0; re < n.children.length; re++)
      P(re);
  }
  l(e);
  var c = {
    update: function(v) {
      l(v);
    },
    destroy: function() {
      ql(n, t.type), Ot.delete(n), To.delete(n);
    }
  };
  return To.set(n, c), c;
}
var Hm = ["items", "flipDurationMs", "type", "dragDisabled", "morphDisabled", "dropFromOthersDisabled", "zoneTabIndex", "zoneItemTabIndex", "dropTargetStyle", "dropTargetClasses", "transformDraggedElement", "autoAriaDisabled", "centreDraggedOnCursor", "delayTouchStart", "dropAnimationDisabled"];
function Bm(n, e) {
  if (Um(n))
    return {
      update: function() {
      },
      destroy: function() {
      }
    };
  Kl(e);
  var t = Rm(n, e), r = Zm(n, e);
  return {
    update: function(a) {
      Kl(a), t.update(a), r.update(a);
    },
    destroy: function() {
      t.destroy(), r.destroy();
    }
  };
}
function Um(n) {
  return !!n.closest("[".concat(zg, '="true"]'));
}
function Kl(n) {
  var e = n.items;
  n.flipDurationMs, n.type, n.dragDisabled, n.morphDisabled, n.dropFromOthersDisabled;
  var t = n.zoneTabIndex, r = n.zoneItemTabIndex;
  n.dropTargetStyle;
  var i = n.dropTargetClasses;
  n.transformDraggedElement, n.autoAriaDisabled, n.centreDraggedOnCursor;
  var a = n.delayTouchStart;
  n.dropAnimationDisabled;
  var s = Rg(n, Hm);
  if (Object.keys(s).length > 0 && console.warn("dndzone will ignore unknown options", s), !e)
    throw new Error("no 'items' key provided to dndzone");
  var u = e.find(function(d) {
    return !{}.hasOwnProperty.call(d, St);
  });
  if (u)
    throw new Error("missing '".concat(St, "' property for item ").concat(ga(u)));
  if (i && !Array.isArray(i))
    throw new Error("dropTargetClasses should be an array but instead it is a ".concat(ki(i), ", ").concat(ga(i)));
  if (t && !Ql(t))
    throw new Error("zoneTabIndex should be a number but instead it is a ".concat(ki(t), ", ").concat(ga(t)));
  if (r && !Ql(r))
    throw new Error("zoneItemTabIndex should be a number but instead it is a ".concat(ki(r), ", ").concat(ga(r)));
  if (a !== void 0 && a !== !1) {
    var l = a === !0, c = typeof a == "number" && isFinite(a) && a >= 0;
    if (!l && !c)
      throw new Error("delayTouchStart should be a boolean (true/false) or a non-negative number but instead it is a ".concat(ki(a), ", ").concat(ga(a)));
  }
}
function Ql(n) {
  return !isNaN(n) && function(e) {
    return (e | 0) === e;
  }(parseFloat(n));
}
function wu(n) {
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
var Nn = wu(!0), Bi = wu(!1);
function Jl() {
  return {
    dragDisabled: Bi.get() || Nn.get(),
    zoneItemTabIndex: -1
  };
}
function Rn(n, e) {
  var t;
  Bi.set((t = e == null ? void 0 : e.dragDisabled) !== null && t !== void 0 ? t : !1);
  var r = e, i = Bm(n, Mr(Mr({}, r), Jl()));
  function a() {
    i.update(Mr(Mr({}, r), Jl()));
  }
  Nn.subscribe(a);
  function s(l) {
    var c = l.detail.info, d = c.source, v = c.trigger;
    d === Xt.KEYBOARD && v === At.DRAG_STOPPED && Nn.set(!0);
  }
  function u(l) {
    var c = l.detail.info.source;
    c === Xt.POINTER && Nn.set(!0);
  }
  return n.addEventListener("consider", s), n.addEventListener("finalize", u), {
    update: function(c) {
      var d, v;
      r = c, Bi.set((d = (v = r) === null || v === void 0 ? void 0 : v.dragDisabled) !== null && d !== void 0 ? d : !1), a();
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
    var s = Bi.get(), u = Nn.get();
    s ? (n.tabIndex = -1, n.style.cursor = "") : (n.tabIndex = u ? 0 : -1, n.style.cursor = u ? "grab" : "grabbing");
  };
  return Bi.subscribe(i), Nn.subscribe(i), n.addEventListener("mousedown", e), n.addEventListener("touchstart", e), n.addEventListener("keydown", t), {
    update: function() {
    },
    destroy: function() {
      n.removeEventListener("mousedown", e), n.removeEventListener("touchstart", e), n.removeEventListener("keydown", t), Bi.unsubscribe(i), Nn.unsubscribe(i);
    }
  };
}
function Wm(n) {
  const e = n - 1;
  return e * e * e + 1;
}
function Us(n, { from: e, to: t }, r = {}) {
  var { delay: i = 0, duration: a = (b) => Math.sqrt(b) * 120, easing: s = Wm } = r, u = getComputedStyle(n), l = u.transform === "none" ? "" : u.transform, [c, d] = u.transformOrigin.split(" ").map(parseFloat);
  c /= n.clientWidth, d /= n.clientHeight;
  var v = jm(n), f = n.clientWidth / t.width / v, h = n.clientHeight / t.height / v, g = e.left + e.width * c, p = e.top + e.height * d, _ = t.left + t.width * c, A = t.top + t.height * d, E = (g - _) * f, S = (p - A) * h, I = e.width / t.width, w = e.height / t.height;
  return {
    delay: i,
    duration: typeof a == "function" ? a(Math.sqrt(E * E + S * S)) : a,
    easing: s,
    css: (b, y) => {
      var C = y * E, T = y * S, D = b + y * I, M = b + y * w;
      return `transform: ${l} translate(${C}px, ${T}px) scale(${D}, ${M});`;
    }
  };
}
function jm(n) {
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
const Vm = jn([]);
Vm.subscribe;
mt(["click", "pointerdown", "pointerup", "pointermove"]);
var zm = /* @__PURE__ */ X("<div><!></div>");
function el(n, e) {
  let t = m(e, "variant", 3, "secondary");
  var r = zm(), i = j(r);
  df(i, e, "default", {}), ce(() => _r(r, 1, `osc-card osc-card--${t()}`, "svelte-14hhvrx")), x(n, r);
}
var Xm = /* @__PURE__ */ X('<div class="panel-parent__header svelte-1rw2lbw"><!></div>'), Ym = /* @__PURE__ */ X('<div class="panel-parent__body svelte-1rw2lbw"><!></div>'), qm = /* @__PURE__ */ X('<div class="panel-parent__footer svelte-1rw2lbw"><!></div>'), Km = /* @__PURE__ */ X('<div class="panel-parent svelte-1rw2lbw"><!> <!> <!></div>');
function tl(n, e) {
  let t = m(e, "backgroundColor", 3, "");
  var r = Km(), i = j(r);
  {
    var a = (d) => {
      var v = Xm(), f = j(v);
      _e(f, () => e.header), x(d, v);
    };
    ne(i, (d) => {
      e.header && d(a);
    });
  }
  var s = K(i, 2);
  {
    var u = (d) => {
      var v = Ym(), f = j(v);
      _e(f, () => e.content), x(d, v);
    };
    ne(s, (d) => {
      e.content && d(u);
    });
  }
  var l = K(s, 2);
  {
    var c = (d) => {
      var v = qm(), f = j(v);
      _e(f, () => e.additional), x(d, v);
    };
    ne(l, (d) => {
      e.additional && d(c);
    });
  }
  ce(() => tt(r, `--bg-color: ${t() ?? ""}`)), x(n, r);
}
mt(["click"]);
const Qm = 4e3;
function Jm() {
  let n = Ee({ items: [] }), e = 0;
  const t = (i) => {
    n.items = n.items.filter((a) => a.id !== i);
  }, r = (i, a, s, u = Qm) => {
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
Jm();
mt(["input"]);
const $m = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHByb2Nlc3Nlcz4KICA8cHJvY2Vzcz4KICAgIDxpZD5zdGFuZGFyZC1wcm9jZXNzLTE8L2lkPgogICAgPHZlcnNpb24+MC4wLjE8L3ZlcnNpb24+CiAgICA8bmFtZT5TdGFuZGFyZCBQcm9jZXNzIDE8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+CiAgICAgIFRoaXMgaXMgYSBzdGFuZGFyZGl6ZWQgcHJvY2VzcyB1c2VkIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHkKICAgIDwvZGVzY3JpcHRpb24+CgogICAgPHBsdWdpbnMtc2VxdWVuY2U+CiAgICAgIDxncm91cD4KICAgICAgICA8dGl0bGU+VHlwZXM8L3RpdGxlPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+dGVtcGxhdGUtZ2VuZXJhdG9yLXh5ejwvaWQ+CiAgICAgICAgICA8bmFtZT5UZW1wbGF0ZSBHZW5lcmF0b3I8L25hbWU+CiAgICAgICAgICA8c3JjIHR5cGU9ImV4dGVybmFsIj4KICAgICAgICAgICAgaHR0cHM6Ly9hc2UtY29tcGFzLmdpdGh1Yi5pby9jb21wYXMtdHJhbnNuZXRidy1wbHVnaW5zL2JlYXJpbmdwb2ludC9jb21wYXMvcGx1Z2lucy90ZW1wbGF0ZS1nZW5lcmF0b3IvaW5kZXguanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+dHlwZS1kZXNpZ25lci14eXo8L2lkPgogICAgICAgICAgPG5hbWU+VHlwZSBEZXNpZ25lcjwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iZXh0ZXJuYWwiPgogICAgICAgICAgICBodHRwczovL3NwcmludGVpbnMuZ2l0aHViLmlvL29zY2QtcGx1Z2lucy90eXBlLWRlc2lnbmVyL2luZGV4LmpzCiAgICAgICAgICA8L3NyYz4KICAgICAgICA8L3BsdWdpbj4KCiAgICAgICAgPHBsdWdpbj4KICAgICAgICAgIDxpZD50eXBlLWRpc3RyaWJ1dG9yLXh5ejwvaWQ+CiAgICAgICAgICA8bmFtZT5UeXBlIERpc3RyaWJ1dG9yPC9uYW1lPgogICAgICAgICAgPHNyYyB0eXBlPSJleHRlcm5hbCI+CiAgICAgICAgICAgIGh0dHBzOi8vYXNlLWNvbXBhcy5naXRodWIuaW8vY29tcGFzLXRyYW5zbmV0YnctcGx1Z2lucy9iZWFyaW5ncG9pbnQvY29tcGFzL3BsdWdpbnMvdHlwZS1kaXN0cmlidXRvci9pbmRleC5qcwogICAgICAgICAgPC9zcmM+CiAgICAgICAgPC9wbHVnaW4+CiAgICAgIDwvZ3JvdXA+CgogICAgICA8Z3JvdXA+CiAgICAgICAgPHRpdGxlPkNvbmZpZ3VyYXRpb248L3RpdGxlPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+Y29tbXVuaWNhdGlvbi14eXo8L2lkPgogICAgICAgICAgPG5hbWU+Q29tbXVuaWNhdGlvbjwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iaW50ZXJuYWwiPgogICAgICAgICAgICAvcGx1Z2lucy9zcmMvZWRpdG9ycy9Db21tdW5pY2F0aW9uLmpzCiAgICAgICAgICA8L3NyYz4KICAgICAgICA8L3BsdWdpbj4KCiAgICAgICAgPHBsdWdpbj4KICAgICAgICAgIDxpZD5zdWJzdGF0aW9uLXh5ejwvaWQ+CiAgICAgICAgICA8bmFtZT5TdWJzdGF0aW9uPC9uYW1lPgogICAgICAgICAgPHNyYyB0eXBlPSJpbnRlcm5hbCI+CiAgICAgICAgICAgIC9wbHVnaW5zL3NyYy9lZGl0b3JzL1N1YnN0YXRpb24uanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+cHVibGlzaGVyLXh5ejwvaWQ+CiAgICAgICAgICA8bmFtZT5QdWJsaXNoZXI8L25hbWU+CiAgICAgICAgICA8c3JjIHR5cGU9ImludGVybmFsIj4KICAgICAgICAgICAgL2V4dGVybmFsLXBsdWdpbnMvb3NjZC1wdWJsaXNoZXIvb3NjZC1wdWJsaXNoZXIuanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+c3Vic2NyaWJlLWxhdGVyLWJpbmRpbmcteHl6PC9pZD4KICAgICAgICAgIDxuYW1lPlN1YnNjcmliZTwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iaW50ZXJuYWwiPgogICAgICAgICAgICAvZXh0ZXJuYWwtcGx1Z2lucy9vc2NkLXN1YnNjcmliZXItbGF0ZXItYmluZGluZy9vc2NkLXN1YnNjcmliZXItbGF0ZXItYmluZGluZy5qcwogICAgICAgICAgPC9zcmM+CiAgICAgICAgPC9wbHVnaW4+CiAgICAgIDwvZ3JvdXA+CgogICAgICA8Z3JvdXA+CiAgICAgICAgPHRpdGxlPkRvY3VtZW50YXRpb248L3RpdGxlPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+YXV0b2RvYy14eXo8L2lkPgogICAgICAgICAgPG5hbWU+QXV0b0RvYzwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iZXh0ZXJuYWwiPgogICAgICAgICAgICBodHRwczovL3NwcmludGVpbnMuZ2l0aHViLmlvL29zY2QtcGx1Z2lucy9hdXRvLWRvYy9pbmRleC5qcwogICAgICAgICAgPC9zcmM+CiAgICAgICAgPC9wbHVnaW4+CgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+bG9jYXRpb24tbWFuYWdlci14eXo8L2lkPgogICAgICAgICAgPG5hbWU+TG9jYXRpb24gTWFuYWdlcjwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iZXh0ZXJuYWwiPgogICAgICAgICAgICBodHRwczovL2FzZS1jb21wYXMuZ2l0aHViLmlvL2NvbXBhcy10cmFuc25ldGJ3LXBsdWdpbnMvYmVhcmluZ3BvaW50L2NvbXBhcy9wbHVnaW5zL2xvY2F0aW9uLW1hbmFnZXIvaW5kZXguanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgoKICAgICAgICA8cGx1Z2luPgogICAgICAgICAgPGlkPmhpc3Rvcnktdmlld2VyLXh5ejwvaWQ+CiAgICAgICAgICA8bmFtZT5IaXN0b3J5IFZpZXdlcjwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iZXh0ZXJuYWwiPgogICAgICAgICAgICBodHRwczovL2FzZS1jb21wYXMuZ2l0aHViLmlvL2NvbXBhcy10cmFuc25ldGJ3LXBsdWdpbnMvYmVhcmluZ3BvaW50L2NvbXBhcy9wbHVnaW5zL2hpc3Rvcnktdmlld2VyL2luZGV4LmpzCiAgICAgICAgICA8L3NyYz4KICAgICAgICA8L3BsdWdpbj4KICAgICAgPC9ncm91cD4KICAgIDwvcGx1Z2lucy1zZXF1ZW5jZT4KICA8L3Byb2Nlc3M+CjwvcHJvY2Vzc2VzPgo=", Do = Ee({ loading: !1 }), Lo = Ee({ error: "" }), $t = Ee({ processes: [] }), ct = Ee({ process: null }), mn = Ee({ isEditing: !1 }), nl = Ee({ plugins: [] }), ep = $m, Tu = "engineeringWizardProcesses", tp = "external";
if (typeof localStorage < "u") {
  const n = localStorage.getItem(Tu);
  if (n)
    try {
      const e = JSON.parse(n);
      Array.isArray(e) && ($t.processes = e);
    } catch {
    }
}
Nc(() => {
  xe(() => {
    $t.processes.forEach((e) => {
      var t;
      (t = e.pluginGroups) == null || t.forEach((r) => {
        var i;
        (i = r.plugins) == null || i.length;
      });
    });
    const n = As($t.processes);
    if (!(typeof localStorage > "u"))
      try {
        localStorage.setItem(Tu, JSON.stringify(n));
      } catch {
      }
  });
});
const mr = (n) => {
  var e;
  return ((e = n == null ? void 0 : n.textContent) == null ? void 0 : e.trim()) ?? "";
}, np = (n, e) => (n == null ? void 0 : n.getAttribute(e)) ?? void 0, rp = (n) => {
  const e = np(n == null ? void 0 : n.querySelector("src"), "type") ?? "";
  return e === "internal" || e === "external" ? e : tp;
}, Ja = (n, e) => Array.from(n.querySelectorAll(e)), $l = (n) => ({
  id: mr(n.querySelector("id")),
  name: mr(n.querySelector("name")),
  src: mr(n.querySelector("src")) || void 0,
  sourceUrl: mr(n.querySelector("sourceUrl")) || void 0,
  type: rp(n)
}), ip = (n) => Ja(n, "process").map((e) => {
  const t = Ja(e, ":scope > plugins-sequence > group"), r = t.length ? t.map((i) => ({
    title: mr(i.querySelector(":scope > title")) || "Untitled",
    plugins: Ja(i, ":scope > plugin").map($l)
  })) : [
    {
      title: "Ungrouped",
      plugins: Ja(e, ":scope > plugins-sequence > plugin").map($l)
    }
  ];
  return {
    id: mr(e.querySelector(":scope > id")),
    version: mr(e.querySelector(":scope > version")),
    name: mr(e.querySelector(":scope > name")),
    description: mr(e.querySelector(":scope > description")),
    pluginGroups: r
  };
});
async function ap() {
  Do.loading = !0, Lo.error = "";
  try {
    const n = await fetch(ep, { cache: "no-cache" });
    if (!n.ok)
      throw new Error(`HTTP ${n.status}${n.statusText ? `: ${n.statusText}` : ""}`);
    const e = await n.text();
    if (typeof DOMParser > "u")
      throw new Error("DOMParser is not available in this environment.");
    const t = new DOMParser().parseFromString(e, "application/xml");
    if (t.getElementsByTagName("parsererror").length)
      throw new Error("Invalid XML file format.");
    const r = ip(t), i = As($t.processes);
    if (Array.isArray(i) && i.length) {
      const a = /* @__PURE__ */ new Map();
      for (const u of r) a.set(u.id, u);
      for (const u of i) a.set(u.id, u);
      const s = Array.from(a.values());
      return $t.processes = s, s;
    }
    return $t.processes = r, r;
  } catch (n) {
    const e = n instanceof Error ? n.message : "Failed to load processes.";
    throw Lo.error = e, n;
  } finally {
    Do.loading = !1;
  }
}
function sp(n) {
  const e = (n || "").trim() || "process", t = new Set(($t.processes ?? []).map((a) => a.id));
  if (!t.has(e)) return e;
  let r = 2, i = `${e}-${r}`;
  for (; t.has(i); )
    r += 1, i = `${e}-${r}`;
  return i;
}
function op(n) {
  var a;
  const e = As(n), t = (e.id || e.name || "process").trim(), r = sp(t), i = {
    id: r,
    version: e.version || "1.0.0",
    name: e.name || r,
    description: e.description || "",
    pluginGroups: (a = e.pluginGroups) != null && a.length ? e.pluginGroups : [{ title: "Ungrouped", plugins: [] }]
  };
  return $t.processes = [...$t.processes ?? [], i], i;
}
function lp(n, e, t) {
  const r = "Ungrouped", i = $t.processes.find((u) => u.id === n);
  if (!i) return;
  const a = i.pluginGroups ?? (i.pluginGroups = []);
  let s = a.find((u) => u.title === r);
  s || (s = { title: r, plugins: [] }, a.push(s)), s.plugins || (s.plugins = []), s.plugins.push(e);
}
function dp(n, e) {
  const t = $t.processes.find((r) => r.id === n);
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
function up(n) {
  const e = $t.processes.find((t) => t.id === n);
  if (!(!e || !e.pluginGroups))
    for (const t of e.pluginGroups)
      t.plugins && (t.plugins.length = 0);
}
function cp(n, e, t) {
  const r = $t.processes.find((s) => s.id === n);
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
function fp(n, e) {
  const t = $t.processes.find((r) => r.id === n);
  t && t.pluginGroups.splice(0, t.pluginGroups.length, ...e);
}
function vp(n) {
  nl.plugins = [...n];
}
function hp(n) {
  return (n.pluginGroups ?? []).flatMap((e) => e.plugins ?? []);
}
var gp = (n, e, t) => e.handleView(t()), mp = (n, e, t) => e.handleStart(t()), pp = /* @__PURE__ */ X('<button type="button" class="icon svelte-au6aaq" aria-label="View process"><!></button> <button type="button" class="icon svelte-au6aaq" aria-label="Start process"><!></button>', 1), Ip = /* @__PURE__ */ X(`<div class="processes svelte-au6aaq"><div class="process-banner svelte-au6aaq"><div class="process-banner__info svelte-au6aaq"><!> <span class="svelte-au6aaq">A process “Process Name C” has already been started for the ---.scd.
        Would you like to continue where you left off?</span></div> <!></div> <div class="process-toolbar svelte-au6aaq"><!> <!></div> <!></div>`);
function bp(n, e) {
  Ce(e, !0);
  let t = /* @__PURE__ */ le(""), r = /* @__PURE__ */ oe(() => o(t).trim().toLowerCase()), i = /* @__PURE__ */ oe(() => ($t.processes ?? []).map((_) => ({ ..._, displayName: _.name || _.id }))), a = /* @__PURE__ */ oe(() => o(r) ? o(i).filter((_) => (_.displayName ?? "").toLowerCase().includes(o(r))) : o(i));
  const s = [
    { key: "displayName", header: "Name" },
    { key: "description", header: "Description" }
  ];
  var u = Ip(), l = j(u), c = j(l), d = j(c);
  Ph(d, {});
  var v = K(c, 2);
  Vn(v, {
    variant: "raised",
    style: "--mdc-theme-primary: #ffffff; --mdc-theme-on-primary: #004552",
    $$events: { click: () => console.log("Continue Process") },
    children: (_, A) => {
      var E = et("CONTINUE");
      x(_, E);
    },
    $$slots: { default: !0 }
  });
  var f = K(l, 2), h = j(f);
  pr(h, {
    variant: "outlined",
    label: "Search Processes",
    get value() {
      return o(t);
    },
    set value(_) {
      U(t, _, !0);
    }
  });
  var g = K(h, 2);
  Vn(g, {
    variant: "raised",
    style: "--mdc-theme-primary: #004552; --mdc-theme-on-primary: #ffffff",
    get onclick() {
      return e.handleAddNew;
    },
    children: (_, A) => {
      var E = et("ADD NEW PROCESS");
      x(_, E);
    },
    $$slots: { default: !0 }
  });
  var p = K(f, 2);
  _g(p, {
    get items() {
      return o(a);
    },
    get columns() {
      return s;
    },
    get loading() {
      return Do.loading;
    },
    get errorMsg() {
      return Lo.error;
    },
    emptyText: "No processes available.",
    hasActions: !0,
    headerBg: "#DAE3E6",
    rowBg: "#ffffff",
    actions: (A, E) => {
      let S = () => E == null ? void 0 : E().item;
      var I = pp(), w = q(I);
      w.__click = [gp, e, S];
      var b = j(w);
      ou(b, { svgStyles: "fill: #002B37; width: 100%; height: 100%;" });
      var y = K(w, 2);
      y.__click = [mp, e, S];
      var C = j(y);
      Mh(C, { svgStyles: "fill: #002B37; width: 100%; height: 100%;" }), x(A, I);
    },
    $$slots: { actions: !0 }
  }), x(n, u), Ae();
}
mt(["click"]);
var _p = (n, e, t) => e.onSelect(o(t).id), yp = /* @__PURE__ */ X("<button><!></button>"), Cp = /* @__PURE__ */ X('<div class="step-line svelte-1ar0udo" aria-hidden="true"></div>'), Ap = /* @__PURE__ */ X('<div class="step svelte-1ar0udo"><!> <p> </p></div> <!>', 1), Ep = /* @__PURE__ */ X('<div class="steps svelte-1ar0udo"></div>');
function xp(n, e) {
  Ce(e, !0);
  let t = m(e, "items", 19, () => []), r = m(e, "visited", 19, () => []), i = m(e, "currentId", 3, null), a = m(e, "status", 19, () => ({})), s = m(e, "tooltipMap", 19, () => ({}));
  var u = Ep();
  cn(u, 21, t, br, (l, c, d) => {
    var v = Ap(), f = q(v), h = j(f);
    {
      let E = /* @__PURE__ */ oe(() => s()[o(c).id] ?? "");
      du(h, {
        get content() {
          return o(E);
        },
        side: "bottom",
        children: (S, I) => {
          var w = yp();
          w.__click = [_p, e, c];
          let b;
          var y = j(w);
          {
            var C = (D) => {
              var M = se(), F = q(M);
              {
                var P = (W) => {
                  wh(W);
                }, re = (W) => {
                  var N = se(), H = q(N);
                  {
                    var ee = (O) => {
                      Dh(O);
                    }, fe = (O) => {
                      var J = se(), $ = q(J);
                      {
                        var ve = (B) => {
                          Rh(B, {});
                        }, ue = (B) => {
                          var z = et();
                          z.nodeValue = d + 1, x(B, z);
                        };
                        ne(
                          $,
                          (B) => {
                            a()[o(c).id] === "warning" ? B(ve) : B(ue, !1);
                          },
                          !0
                        );
                      }
                      x(O, J);
                    };
                    ne(
                      H,
                      (O) => {
                        a()[o(c).id] === "error" ? O(ee) : O(fe, !1);
                      },
                      !0
                    );
                  }
                  x(W, N);
                };
                ne(F, (W) => {
                  a()[o(c).id] === "check" ? W(P) : W(re, !1);
                });
              }
              x(D, M);
            }, T = (D) => {
              var M = et();
              M.nodeValue = d + 1, x(D, M);
            };
            ne(y, (D) => {
              r().includes(o(c).id) && o(c).id !== i() ? D(C) : D(T, !1);
            });
          }
          ce(
            (D) => {
              Tt(w, "aria-current", o(c).id === i() ? "step" : void 0), b = _r(w, 1, "", null, b, D);
            },
            [
              () => ({
                "not-visited": !r().includes(o(c).id),
                current: o(c).id === i(),
                visited: r().includes(o(c).id) && o(c).id !== i()
              })
            ]
          ), x(S, w);
        },
        $$slots: { default: !0 }
      });
    }
    var g = K(h, 2), p = j(g), _ = K(f, 2);
    {
      var A = (E) => {
        var S = Cp();
        x(E, S);
      };
      ne(_, (E) => {
        d < t().length - 1 && E(A);
      });
    }
    ce(() => Me(p, o(c).label)), x(l, v);
  }), x(n, u), Ae();
}
mt(["click"]);
function Sp(n, e) {
  const t = [
    { id: "process-definition", label: "Process Definition" },
    {
      id: "validator-configuration",
      label: "Validator Configuration"
    }
  ];
  let r = m(e, "currentId", 3, null), i = m(e, "visited", 19, () => []);
  xp(n, {
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
var wp = /* @__PURE__ */ X('<div style="display:flex;align-items:center;gap:0.5rem;"><button type="button" class="back-container svelte-1i38ker"><!> <span>Back to Overview</span> <span class="back-container__title svelte-1i38ker"> </span></button></div>');
function Du(n, e) {
  let t = m(e, "title", 3, "Engineering Wizard");
  var r = wp(), i = j(r);
  i.__click = function(...l) {
    var c;
    (c = e.onBack) == null || c.apply(this, l);
  };
  var a = j(i);
  Gh(a, {});
  var s = K(a, 4), u = j(s);
  ce(() => Me(u, t())), x(n, r);
}
mt(["click"]);
var Tp = /* @__PURE__ */ X('<div class="add-group-form svelte-1ceeuzb"><!> <!></div>');
function Dp(n, e) {
  Ce(e, !0);
  let t = m(e, "open", 15, !1), r = /* @__PURE__ */ le(""), i = /* @__PURE__ */ le(Ee((e.groups + 1).toString()));
  const a = () => Nr("cancel"), s = () => Nr("confirm", { name: o(r), position: Number(o(i)) });
  let u = /* @__PURE__ */ oe(() => [
    ...Array.from({ length: e.groups + 1 }, (c, d) => ({ value: (d + 1).toString(), label: (d + 1).toString() }))
    // iterate from 1..groups+1
  ]), l = /* @__PURE__ */ oe(() => o(r) && o(i));
  {
    const c = (v) => {
      var f = Tp(), h = j(f);
      Jd(h, {
        label: "Name",
        placeholder: "Group 1",
        variant: "outlined",
        required: !0,
        get value() {
          return o(r);
        },
        set value(p) {
          U(r, p, !0);
        }
      });
      var g = K(h, 2);
      th(g, {
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
          U(i, p, !0);
        }
      }), x(v, f);
    };
    let d = /* @__PURE__ */ oe(() => !o(l));
    zo(n, {
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
  Ae();
}
var Lp = /* @__PURE__ */ X('<div class="group-list-item svelte-1xbvuu5"><div><!></div> <!> <!></div>'), Rp = /* @__PURE__ */ X('<div class="edit-groups-form"><h3>Drag & Drop to change Order</h3> <div></div></div>');
function Op(n, e) {
  Ce(e, !0);
  const t = 100;
  let r = m(e, "open", 15, !1), i = /* @__PURE__ */ le(Ee([...e.groups]));
  const a = () => Nr("cancel"), s = () => {
    Nr("confirm", { groups: o(i).map((d) => ({ ...d })) });
  }, u = (d) => () => {
    U(i, o(i).filter((v) => v.id !== d), !0);
  }, l = (d) => {
    U(i, d.detail.items, !0);
  };
  let c = /* @__PURE__ */ oe(() => o(i).every((d) => d.title.trim().length > 0));
  {
    const d = (f) => {
      var h = Rp(), g = K(j(h), 2);
      cn(g, 29, () => o(i), (p) => p.id, (p, _, A) => {
        var E = Lp(), S = j(E), I = j(S);
        Fs(I, {}), De(S, (y) => On == null ? void 0 : On(y));
        var w = K(S, 2);
        Jd(w, {
          label: "Name",
          variant: "outlined",
          required: !0,
          get value() {
            return o(_).title;
          },
          set value(y) {
            o(_).title = y;
          }
        });
        var b = K(w, 2);
        {
          let y = /* @__PURE__ */ oe(() => u(o(_).id));
          uu(b, {
            type: "delete",
            tooltip: "Delete",
            fillColor: "#FF203A",
            get onClick() {
              return o(y);
            }
          });
        }
        ce(() => Tt(E, "data-id", o(_).id)), Rs(E, () => Us, () => ({ duration: t })), x(p, E);
      }), De(g, (p, _) => Rn == null ? void 0 : Rn(p, _), () => ({
        items: o(i),
        flipDurationMs: t,
        dropTargetStyle: {}
      })), Kt("consider", g, l), Kt("finalize", g, l), x(f, h);
    };
    let v = /* @__PURE__ */ oe(() => !o(c));
    zo(n, {
      title: "Edit Groups",
      confirmActionText: "Save",
      maxWidth: "600px",
      onConfirm: s,
      onCancel: a,
      onClose: a,
      get confirmDisabled() {
        return o(v);
      },
      get open() {
        return r();
      },
      set open(f) {
        r(f);
      },
      content: d,
      $$slots: { content: !0 }
    });
  }
  Ae();
}
async function Mp(n, e, t) {
  const r = await Ga(Dp, { groups: e().length });
  r.type === "confirm" && t()(r.data.name, r.data.position);
}
async function Fp(n, e, t) {
  const r = e().map((s, u) => ({ id: u.toString(), title: s.title })), i = await Ga(Op, { groups: r });
  if (i.type !== "confirm") return;
  const a = i.data.groups.map((s) => {
    const u = parseInt(s.id, 10);
    return { ...e()[u], title: s.title };
  });
  t()(a);
}
var Pp = /* @__PURE__ */ X('<div class="plugin-list__header-action svelte-1a2zky1"><!></div>'), kp = /* @__PURE__ */ X('<header class="plugin-list__header svelte-1a2zky1"><p class="plugin-list__title svelte-1a2zky1"> </p> <!></header>'), Gp = /* @__PURE__ */ X('<div aria-label="drag-handle"><!></div>'), Np = /* @__PURE__ */ X('<div class="plugin-list__item-action svelte-1a2zky1"><!></div>'), Zp = /* @__PURE__ */ X('<div class="plugin-list__item-row svelte-1a2zky1"><div class="plugin-list__item-row__left svelte-1a2zky1"><!> <span class="plugin-list__item-name svelte-1a2zky1"> </span></div> <!></div>'), Hp = /* @__PURE__ */ X("<div><!></div>"), Bp = /* @__PURE__ */ X('<section class="plugin-list__group svelte-1a2zky1"><header class="plugin-list__group-header svelte-1a2zky1"><span class="plugin-list__group-index svelte-1a2zky1"></span> <span class="plugin-list__group-title svelte-1a2zky1"> </span></header> <div></div></section>'), Up = /* @__PURE__ */ X('<div class="plugin-list__body svelte-1a2zky1"></div>'), Wp = /* @__PURE__ */ X('<div class="plugin-list__footer svelte-1a2zky1"><button type="button" class="plugin-list__footer-button plugin-list__footer-button--edit svelte-1a2zky1"><!> <span>Edit groups</span></button> <button type="button" class="plugin-list__footer-button plugin-list__footer-button--add svelte-1a2zky1"><!> <span>Add group</span></button></div>');
function rl(n, e) {
  Ce(e, !0);
  const t = (v) => {
    var f = kp(), h = j(f), g = j(h), p = K(h, 2);
    {
      var _ = (A) => {
        var E = Pp(), S = j(E);
        _e(S, () => e.headerAction), x(A, E);
      };
      ne(p, (A) => {
        e.headerAction && A(_);
      });
    }
    ce(() => Me(g, s())), x(v, f);
  }, r = (v) => {
    var f = Up();
    cn(f, 21, a, br, (h, g, p) => {
      var _ = Bp(), A = j(_), E = j(A);
      E.textContent = `${p + 1}.`;
      var S = K(E, 2), I = j(S), w = K(A, 2);
      let b;
      cn(w, 31, () => o(g).plugins, (y) => y.id, (y, C, T) => {
        var D = Hp(), M = j(D);
        el(M, {
          variant: "secondary",
          children: (F, P) => {
            var re = Zp(), W = j(re), N = j(W);
            {
              var H = ($) => {
                var ve = Gp(), ue = j(ve);
                Fs(ue, {}), De(ve, (B) => On == null ? void 0 : On(B)), x($, ve);
              };
              ne(N, ($) => {
                mn.isEditing && $(H);
              });
            }
            var ee = K(N, 2), fe = j(ee), O = K(W, 2);
            {
              var J = ($) => {
                var ve = Np(), ue = j(ve);
                _e(ue, () => e.itemAction, () => ({
                  group: o(g),
                  plugin: o(C),
                  groupIndex: p,
                  pluginIndex: o(T)
                })), x($, ve);
              };
              ne(O, ($) => {
                e.itemAction && $(J);
              });
            }
            ce(() => Me(fe, o(C).name)), x(F, re);
          },
          $$slots: { default: !0 }
        }), ce(() => Tt(D, "data-id", o(C).id)), Rs(D, () => Us, () => ({ duration: 100 })), x(y, D);
      }), De(w, (y, C) => Rn == null ? void 0 : Rn(y, C), () => ({
        items: o(g).plugins,
        flipDurationMs: 100,
        dropTargetStyle: {}
      })), ce(
        (y) => {
          Me(I, o(g).title), b = _r(w, 1, "plugin-list__group-plugins svelte-1a2zky1", null, b, y);
        },
        [
          () => ({
            "plugin_list__group-plugins--dashed": mn.isEditing
          })
        ]
      ), Kt("consider", w, (y) => c(y, o(g))), Kt("finalize", w, (y) => d(y, o(g))), x(h, _);
    }), x(v, f);
  }, i = (v) => {
    var f = se(), h = q(f);
    {
      var g = (p) => {
        var _ = Wp(), A = j(_);
        A.__click = [Fp, a, l];
        var E = j(A);
        au(E, {
          svgStyles: "fill: var(--primary-base);",
          "aria-hidden": "true"
        });
        var S = K(A, 2);
        S.__click = [Mp, a, u];
        var I = j(S);
        Xo(I, {
          svgStyles: "fill: var(--primary-base);",
          "aria-hidden": "true"
        }), x(p, _);
      };
      ne(h, (p) => {
        mn.isEditing && p(g);
      });
    }
    x(v, f);
  };
  let a = m(e, "pluginGroups", 19, () => []), s = m(e, "title", 3, "Process"), u = m(e, "onAddGroup", 3, () => {
  }), l = m(e, "onUpdateGroups", 3, (v) => {
  });
  function c(v, f) {
    f.plugins = v.detail.items;
  }
  function d(v, f) {
    v.detail.info.trigger === At.DROPPED_OUTSIDE_OF_ANY ? f.plugins = v.detail.items.filter((h) => v.detail.info.id !== h.id) : f.plugins = v.detail.items, l()(a());
  }
  tl(n, {
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
  }), Ae();
}
mt(["click"]);
function jp(n, e) {
  const t = (i) => {
    Vn(i, {
      variant: "raised",
      style: "--mdc-theme-primary: var(--on-brand); --mdc-theme-on-primary: var(--brand)",
      "aria-label": "Edit process",
      get onclick() {
        return e.requestEdit;
      },
      children: (a, s) => {
        var u = et("EDIT");
        x(a, u);
      },
      $$slots: { default: !0 }
    });
  };
  let r = m(e, "pluginGroups", 19, () => []);
  rl(n, {
    get pluginGroups() {
      return r();
    },
    get headerAction() {
      return t;
    }
  });
}
function Vp() {
  var e;
  const n = document.querySelector("open-scd");
  return ((e = n == null ? void 0 : n.shadowRoot) == null ? void 0 : e.querySelector("compas-layout")) ?? null;
}
function zp(n) {
  var e;
  (e = Vp()) == null || e.dispatchEvent(
    new CustomEvent("toggle-editor-tabs", {
      detail: { visible: n },
      bubbles: !0,
      composed: !0
    })
  );
}
const io = /* @__PURE__ */ new Map();
function ao(n) {
  return !!customElements.get(n);
}
function Xp(n) {
  if (!n.includes("-"))
    throw new Error(`Invalid custom element name "${n}". Custom element names must contain a dash.`);
}
async function Lu(n) {
  if (n.type !== "external") return;
  const e = n.id;
  if (Xp(e), ao(e)) return;
  const t = io.get(e);
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
    if (!ao(e))
      try {
        customElements.define(e, u);
      } catch (l) {
        if (!ao(e)) throw l;
      }
    await customElements.whenDefined(e);
  })().finally(() => {
    io.delete(e);
  });
  return io.set(e, r), r;
}
async function Yp(n) {
  await Promise.all(
    n.filter((e) => e.type === "external").map(async (e) => {
      try {
        await Lu(e);
      } catch (t) {
        console.error("Failed to preload plugin", e.id, t);
      }
    })
  );
}
const Hr = jn(!0);
Hr.subscribe((n) => {
  zp(n);
});
var qp = (n, e, t) => e(t().id), Kp = /* @__PURE__ */ X('<button type="button" class="plugin-list__removeBtn svelte-gipzw9"><!></button>');
function Qp(n, e) {
  Ce(e, !0);
  const t = (d) => {
    var v = se(), f = q(v);
    {
      var h = (g) => {
        Vn(g, {
          style: "background-color: #FF203A",
          variant: "raised",
          "aria-label": "Remove all plugins",
          onclick: a,
          children: (p, _) => {
            var A = et("REMOVE ALL");
            x(p, A);
          },
          $$slots: { default: !0 }
        });
      };
      ne(f, (g) => {
        o(c) && g(h);
      });
    }
    x(d, v);
  }, r = (d, v) => {
    let f = () => v == null ? void 0 : v().plugin;
    var h = Kp();
    h.__click = [qp, s, f];
    var g = j(h);
    iu(g, { svgStyles: "fill: #FF203A" }), ce(() => Tt(h, "aria-label", `Remove ${f().name}`)), x(d, h);
  };
  let i = m(e, "pluginGroups", 19, () => []);
  async function a() {
    (await Ga(ru, {
      title: "Remove all entries?",
      message: "This action cannot be undone. You will need to manually search for and re-add each item, and rearrange them again.",
      confirmActionText: "Remove All",
      cancelActionText: "Cancel",
      confirmActionColor: "danger"
    })).type === "confirm" && up(ct.process.id);
  }
  function s(d) {
    dp(ct.process.id, d);
  }
  function u(d, v) {
    cp(ct.process.id, d, v);
  }
  function l(d) {
    fp(ct.process.id, d);
  }
  let c = /* @__PURE__ */ oe(() => i().flatMap((d) => d.plugins).length > 0);
  rl(n, {
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
  }), Ae();
}
mt(["click"]);
function Ru(n) {
  var r;
  const e = n.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "").slice(0, 32), t = ((r = crypto.randomUUID) == null ? void 0 : r.call(crypto).split("-")[0]) ?? Math.random().toString(36).slice(2, 10);
  return `ext-${e || "plugin"}-${t}`;
}
var Jp = /* @__PURE__ */ X('<div class="card-header svelte-1fcjrhj"><p class="header-info svelte-1fcjrhj">Add External Plugins</p> <div class="search-input svelte-1fcjrhj"><!></div></div>'), $p = (n, e, t) => e(o(t), ct.process.id), eI = /* @__PURE__ */ X('<div class="card-item-content svelte-1fcjrhj"><div class="card-item-content__left svelte-1fcjrhj"><div aria-label="drag-handle"><!></div> <p class="plugin-name svelte-1fcjrhj"> </p></div> <button class="plugin-add-btn svelte-1fcjrhj"><!></button></div>'), tI = /* @__PURE__ */ X("<div><!></div>"), nI = /* @__PURE__ */ X('<div class="card-parent-content svelte-1fcjrhj"></div>');
function rI(n, e) {
  Ce(e, !0);
  const t = (c) => {
    var d = Jp(), v = K(j(d), 2), f = j(v);
    pr(f, {
      variant: "outlined",
      label: "Search Plugins",
      get value() {
        return a();
      },
      set value(h) {
        a(h);
      }
    }), x(c, d);
  }, r = (c) => {
    var d = nI();
    cn(d, 29, i, (v) => v.id, (v, f) => {
      var h = tI(), g = j(h);
      el(g, {
        variant: "secondary",
        children: (p, _) => {
          var A = eI(), E = j(A), S = j(E), I = j(S);
          Fs(I, {}), De(S, (T) => On == null ? void 0 : On(T));
          var w = K(S, 2), b = j(w), y = K(E, 2);
          y.__click = [$p, s, f];
          var C = j(y);
          Xo(C, { svgStyles: "fill: var(--brand);" }), ce(() => Me(b, o(f).name)), x(p, A);
        },
        $$slots: { default: !0 }
      }), ce(() => Tt(h, "data-id", o(f).id)), Rs(h, () => Us, () => ({ duration: 100 })), x(v, h);
    }), De(d, (v, f) => Rn == null ? void 0 : Rn(v, f), () => ({
      items: i(),
      flipDurationMs: 100,
      dropTargetStyle: {},
      dropFromOthersDisabled: !0
    })), Kt("consider", d, l), Kt("finalize", d, u), x(c, d);
  };
  let i = m(e, "plugins", 23, () => []), a = m(e, "searchTerm", 15, "");
  function s(c, d) {
    lp(d, c);
  }
  const u = (c) => {
    i(c.detail.items);
  }, l = (c) => {
    const { detail: d } = c, { trigger: v, id: f } = d.info;
    if (v === At.DRAG_STARTED) {
      const h = i().findIndex((p) => p.id === f), g = `${f}_copy`;
      c.detail.items = c.detail.items.filter((p) => !p[aa]), c.detail.items.splice(h, 0, { ...i()[h], id: g }), i(c.detail.items);
    } else
      i([...i()]);
  };
  tl(n, {
    backgroundColor: "#DAE3E6",
    get header() {
      return t;
    },
    get content() {
      return r;
    }
  }), Ae();
}
mt(["click"]);
var iI = /* @__PURE__ */ X('<div class="process-definition-view svelte-ws8xx1"><!> <div class="drag-and-drop-info svelte-ws8xx1"><!> <p class="svelte-ws8xx1">SELECT OR DRAG & DROP PLUGINS</p></div> <!></div>');
function aI(n, e) {
  Ce(e, !0);
  let t = m(e, "pluginGroups", 19, () => []), r = /* @__PURE__ */ le(""), i = /* @__PURE__ */ oe(() => {
    const v = nl.plugins.map((h) => ({
      id: Ru(h.name),
      name: h.name,
      src: h.src,
      type: "internal"
    })), f = o(r).toLowerCase().trim();
    return f ? v.filter((h) => h.name.toLowerCase().includes(f)) : v;
  });
  var a = iI(), s = j(a);
  Qp(s, {
    get pluginGroups() {
      return t();
    }
  });
  var u = K(s, 2), l = j(u);
  lu(l, { svgStyles: "fill: #6B9197" });
  var c = K(u, 2);
  rI(c, {
    get plugins() {
      return o(i);
    },
    get searchTerm() {
      return o(r);
    },
    set searchTerm(d) {
      U(r, d, !0);
    }
  }), x(n, a), Ae();
}
const sI = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmNvbW0tc3VibmV0LTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJuZXQgQWRkcmVzcyBWYWxpZGl0eTwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5WYWxpZGF0ZXMgSVAgc3VibmV0IGFkZHJlc3NlcyBhbmQgQ0lEUi9uZXRtYXNrIGFyZSBwcm9wZXJseSBmb3JtYXR0ZWQgYW5kIG1lZXQgcHJvamVjdCBjb25zdHJhaW50cy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1zdWJuZXQtYWRkcmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5nc2UtY29uZmlnLTAwMjwvaWQ+CiAgICA8bmFtZT5HU0UgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIEdTRSBjb250cm9sIGJsb2NrcyByZWZlcmVuY2UgdmFsaWQgZGF0YXNldHMgYW5kIGhhdmUgY29ycmVjdCBNQUMvVkxBTi9uZXR3b3JrIHBhcmFtZXRlcnMuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stZ3NlLWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5zbXYtY29uZmlnLTAwMzwvaWQ+CiAgICA8bmFtZT5TTVYgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5DaGVja3MgU01WIGNvbnRyb2wgYmxvY2tzIGZvciB2YWxpZCBkYXRhc2V0cywgc2FtcGxlIHJhdGVzLCBhbmQgY29tcGxpYW50IG5ldHdvcmsgc2V0dGluZ3MuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stc212LWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4KCg==", oI = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmNvbW0tc3VibmV0LTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJuZXQgQWRkcmVzcyBWYWxpZGl0eTwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5WYWxpZGF0ZXMgSVAgc3VibmV0IGFkZHJlc3NlcyBhbmQgQ0lEUi9uZXRtYXNrIGFyZSBwcm9wZXJseSBmb3JtYXR0ZWQgYW5kIG1lZXQgcHJvamVjdCBjb25zdHJhaW50cy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1zdWJuZXQtYWRkcmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5nc2UtY29uZmlnLTAwMjwvaWQ+CiAgICA8bmFtZT5HU0UgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIEdTRSBjb250cm9sIGJsb2NrcyByZWZlcmVuY2UgdmFsaWQgZGF0YXNldHMgYW5kIGhhdmUgY29ycmVjdCBNQUMvVkxBTi9uZXR3b3JrIHBhcmFtZXRlcnMuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stZ3NlLWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5zbXYtY29uZmlnLTAwMzwvaWQ+CiAgICA8bmFtZT5TTVYgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5DaGVja3MgU01WIGNvbnRyb2wgYmxvY2tzIGZvciB2YWxpZCBkYXRhc2V0cywgc2FtcGxlIHJhdGVzLCBhbmQgY29tcGxpYW50IG5ldHdvcmsgc2V0dGluZ3MuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stc212LWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4KCg==", lI = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmNvbW0tc3VibmV0LTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJuZXQgQWRkcmVzcyBWYWxpZGl0eTwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5WYWxpZGF0ZXMgSVAgc3VibmV0IGFkZHJlc3NlcyBhbmQgQ0lEUi9uZXRtYXNrIGFyZSBwcm9wZXJseSBmb3JtYXR0ZWQgYW5kIG1lZXQgcHJvamVjdCBjb25zdHJhaW50cy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1zdWJuZXQtYWRkcmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5nc2UtY29uZmlnLTAwMjwvaWQ+CiAgICA8bmFtZT5HU0UgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIEdTRSBjb250cm9sIGJsb2NrcyByZWZlcmVuY2UgdmFsaWQgZGF0YXNldHMgYW5kIGhhdmUgY29ycmVjdCBNQUMvVkxBTi9uZXR3b3JrIHBhcmFtZXRlcnMuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stZ3NlLWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5zbXYtY29uZmlnLTAwMzwvaWQ+CiAgICA8bmFtZT5TTVYgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5DaGVja3MgU01WIGNvbnRyb2wgYmxvY2tzIGZvciB2YWxpZCBkYXRhc2V0cywgc2FtcGxlIHJhdGVzLCBhbmQgY29tcGxpYW50IG5ldHdvcmsgc2V0dGluZ3MuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stc212LWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4KCg==", dI = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmNvbW0tc3VibmV0LTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJuZXQgQWRkcmVzcyBWYWxpZGl0eTwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5WYWxpZGF0ZXMgSVAgc3VibmV0IGFkZHJlc3NlcyBhbmQgQ0lEUi9uZXRtYXNrIGFyZSBwcm9wZXJseSBmb3JtYXR0ZWQgYW5kIG1lZXQgcHJvamVjdCBjb25zdHJhaW50cy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1zdWJuZXQtYWRkcmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5nc2UtY29uZmlnLTAwMjwvaWQ+CiAgICA8bmFtZT5HU0UgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIEdTRSBjb250cm9sIGJsb2NrcyByZWZlcmVuY2UgdmFsaWQgZGF0YXNldHMgYW5kIGhhdmUgY29ycmVjdCBNQUMvVkxBTi9uZXR3b3JrIHBhcmFtZXRlcnMuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stZ3NlLWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5zbXYtY29uZmlnLTAwMzwvaWQ+CiAgICA8bmFtZT5TTVYgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5DaGVja3MgU01WIGNvbnRyb2wgYmxvY2tzIGZvciB2YWxpZCBkYXRhc2V0cywgc2FtcGxlIHJhdGVzLCBhbmQgY29tcGxpYW50IG5ldHdvcmsgc2V0dGluZ3MuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stc212LWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4KCg==", uI = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmNvbW0tc3VibmV0LTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJuZXQgQWRkcmVzcyBWYWxpZGl0eTwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5WYWxpZGF0ZXMgSVAgc3VibmV0IGFkZHJlc3NlcyBhbmQgQ0lEUi9uZXRtYXNrIGFyZSBwcm9wZXJseSBmb3JtYXR0ZWQgYW5kIG1lZXQgcHJvamVjdCBjb25zdHJhaW50cy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1zdWJuZXQtYWRkcmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5nc2UtY29uZmlnLTAwMjwvaWQ+CiAgICA8bmFtZT5HU0UgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIEdTRSBjb250cm9sIGJsb2NrcyByZWZlcmVuY2UgdmFsaWQgZGF0YXNldHMgYW5kIGhhdmUgY29ycmVjdCBNQUMvVkxBTi9uZXR3b3JrIHBhcmFtZXRlcnMuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stZ3NlLWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5zbXYtY29uZmlnLTAwMzwvaWQ+CiAgICA8bmFtZT5TTVYgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5DaGVja3MgU01WIGNvbnRyb2wgYmxvY2tzIGZvciB2YWxpZCBkYXRhc2V0cywgc2FtcGxlIHJhdGVzLCBhbmQgY29tcGxpYW50IG5ldHdvcmsgc2V0dGluZ3MuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stc212LWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4KCg==", cI = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmNvbW0tc3VibmV0LTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJuZXQgQWRkcmVzcyBWYWxpZGl0eTwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5WYWxpZGF0ZXMgSVAgc3VibmV0IGFkZHJlc3NlcyBhbmQgQ0lEUi9uZXRtYXNrIGFyZSBwcm9wZXJseSBmb3JtYXR0ZWQgYW5kIG1lZXQgcHJvamVjdCBjb25zdHJhaW50cy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1zdWJuZXQtYWRkcmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5nc2UtY29uZmlnLTAwMjwvaWQ+CiAgICA8bmFtZT5HU0UgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIEdTRSBjb250cm9sIGJsb2NrcyByZWZlcmVuY2UgdmFsaWQgZGF0YXNldHMgYW5kIGhhdmUgY29ycmVjdCBNQUMvVkxBTi9uZXR3b3JrIHBhcmFtZXRlcnMuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stZ3NlLWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5zbXYtY29uZmlnLTAwMzwvaWQ+CiAgICA8bmFtZT5TTVYgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5DaGVja3MgU01WIGNvbnRyb2wgYmxvY2tzIGZvciB2YWxpZCBkYXRhc2V0cywgc2FtcGxlIHJhdGVzLCBhbmQgY29tcGxpYW50IG5ldHdvcmsgc2V0dGluZ3MuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stc212LWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4KCg==", fI = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmNvbW0tc3VibmV0LTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJuZXQgQWRkcmVzcyBWYWxpZGl0eTwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5WYWxpZGF0ZXMgSVAgc3VibmV0IGFkZHJlc3NlcyBhbmQgQ0lEUi9uZXRtYXNrIGFyZSBwcm9wZXJseSBmb3JtYXR0ZWQgYW5kIG1lZXQgcHJvamVjdCBjb25zdHJhaW50cy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1zdWJuZXQtYWRkcmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5nc2UtY29uZmlnLTAwMjwvaWQ+CiAgICA8bmFtZT5HU0UgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIEdTRSBjb250cm9sIGJsb2NrcyByZWZlcmVuY2UgdmFsaWQgZGF0YXNldHMgYW5kIGhhdmUgY29ycmVjdCBNQUMvVkxBTi9uZXR3b3JrIHBhcmFtZXRlcnMuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stZ3NlLWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5zbXYtY29uZmlnLTAwMzwvaWQ+CiAgICA8bmFtZT5TTVYgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5DaGVja3MgU01WIGNvbnRyb2wgYmxvY2tzIGZvciB2YWxpZCBkYXRhc2V0cywgc2FtcGxlIHJhdGVzLCBhbmQgY29tcGxpYW50IG5ldHdvcmsgc2V0dGluZ3MuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stc212LWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4KCg==", vI = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmNvbW0tc3VibmV0LTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJuZXQgQWRkcmVzcyBWYWxpZGl0eTwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5WYWxpZGF0ZXMgSVAgc3VibmV0IGFkZHJlc3NlcyBhbmQgQ0lEUi9uZXRtYXNrIGFyZSBwcm9wZXJseSBmb3JtYXR0ZWQgYW5kIG1lZXQgcHJvamVjdCBjb25zdHJhaW50cy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1zdWJuZXQtYWRkcmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5nc2UtY29uZmlnLTAwMjwvaWQ+CiAgICA8bmFtZT5HU0UgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIEdTRSBjb250cm9sIGJsb2NrcyByZWZlcmVuY2UgdmFsaWQgZGF0YXNldHMgYW5kIGhhdmUgY29ycmVjdCBNQUMvVkxBTi9uZXR3b3JrIHBhcmFtZXRlcnMuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stZ3NlLWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5zbXYtY29uZmlnLTAwMzwvaWQ+CiAgICA8bmFtZT5TTVYgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5DaGVja3MgU01WIGNvbnRyb2wgYmxvY2tzIGZvciB2YWxpZCBkYXRhc2V0cywgc2FtcGxlIHJhdGVzLCBhbmQgY29tcGxpYW50IG5ldHdvcmsgc2V0dGluZ3MuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stc212LWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4K", hI = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmNvbW0tc3VibmV0LTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJuZXQgQWRkcmVzcyBWYWxpZGl0eTwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5WYWxpZGF0ZXMgSVAgc3VibmV0IGFkZHJlc3NlcyBhbmQgQ0lEUi9uZXRtYXNrIGFyZSBwcm9wZXJseSBmb3JtYXR0ZWQgYW5kIG1lZXQgcHJvamVjdCBjb25zdHJhaW50cy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1zdWJuZXQtYWRkcmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5nc2UtY29uZmlnLTAwMjwvaWQ+CiAgICA8bmFtZT5HU0UgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIEdTRSBjb250cm9sIGJsb2NrcyByZWZlcmVuY2UgdmFsaWQgZGF0YXNldHMgYW5kIGhhdmUgY29ycmVjdCBNQUMvVkxBTi9uZXR3b3JrIHBhcmFtZXRlcnMuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stZ3NlLWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5zbXYtY29uZmlnLTAwMzwvaWQ+CiAgICA8bmFtZT5TTVYgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5DaGVja3MgU01WIGNvbnRyb2wgYmxvY2tzIGZvciB2YWxpZCBkYXRhc2V0cywgc2FtcGxlIHJhdGVzLCBhbmQgY29tcGxpYW50IG5ldHdvcmsgc2V0dGluZ3MuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stc212LWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4KCg==", gI = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmNvbW0tc3VibmV0LTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJuZXQgQWRkcmVzcyBWYWxpZGl0eTwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5WYWxpZGF0ZXMgSVAgc3VibmV0IGFkZHJlc3NlcyBhbmQgQ0lEUi9uZXRtYXNrIGFyZSBwcm9wZXJseSBmb3JtYXR0ZWQgYW5kIG1lZXQgcHJvamVjdCBjb25zdHJhaW50cy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1zdWJuZXQtYWRkcmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5nc2UtY29uZmlnLTAwMjwvaWQ+CiAgICA8bmFtZT5HU0UgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIEdTRSBjb250cm9sIGJsb2NrcyByZWZlcmVuY2UgdmFsaWQgZGF0YXNldHMgYW5kIGhhdmUgY29ycmVjdCBNQUMvVkxBTi9uZXR3b3JrIHBhcmFtZXRlcnMuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stZ3NlLWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5zbXYtY29uZmlnLTAwMzwvaWQ+CiAgICA8bmFtZT5TTVYgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5DaGVja3MgU01WIGNvbnRyb2wgYmxvY2tzIGZvciB2YWxpZCBkYXRhc2V0cywgc2FtcGxlIHJhdGVzLCBhbmQgY29tcGxpYW50IG5ldHdvcmsgc2V0dGluZ3MuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stc212LWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4KCg==";
var mI = /* @__PURE__ */ X('<button type="button"><span> </span></button>'), pI = /* @__PURE__ */ X('<div><button type="button" class="validation-groups__group-title svelte-1s1txht"> </button> <!></div>'), II = /* @__PURE__ */ X('<div class="validation-groups svelte-1s1txht"></div>');
function Ou(n, e) {
  Ce(e, !0);
  let t = m(e, "pluginGroups", 19, () => []), r = m(e, "selectedGroupIndex", 15, null), i = m(e, "selectedPluginIndex", 15, null), a = m(e, "expandedGroupBackground", 3, "var(--brand)"), s = m(e, "expandedGroupBorderColor", 3, "var(--brand)");
  xe(() => {
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
  var c = II();
  cn(c, 21, t, br, (d, v, f) => {
    var h = pI();
    let g;
    var p = j(h);
    p.__click = () => u(f);
    var _ = j(p), A = K(p, 2);
    {
      var E = (S) => {
        var I = se(), w = q(I);
        cn(w, 17, () => o(v).plugins, br, (b, y, C) => {
          var T = mI();
          let D;
          T.__click = () => l(f, C);
          var M = j(T), F = j(M);
          ce(
            (P) => {
              D = _r(T, 1, "validation-groups__plugin svelte-1s1txht", null, D, P), Me(F, o(y).name);
            },
            [() => ({ active: C === i() })]
          ), x(b, T);
        }), x(S, I);
      };
      ne(A, (S) => {
        f === r() && S(E);
      });
    }
    ce(
      (S) => {
        g = _r(h, 1, "validation-groups__group svelte-1s1txht", null, g, S), Tt(p, "aria-pressed", f === r()), Me(_, o(v).title);
      },
      [() => ({ expanded: f === r() })]
    ), x(d, h);
  }), ce(() => tt(c, `--expanded-group-bg:${a()}; --expanded-group-border:${s()};`)), x(n, c), Ae();
}
mt(["click"]);
var bI = /* @__PURE__ */ X("<p>Loading…</p>"), _I = /* @__PURE__ */ X('<p class="error svelte-v2hgj7"> </p>'), yI = /* @__PURE__ */ X('<div class="xml-viewer svelte-v2hgj7"><h4 class="xml-viewer__title svelte-v2hgj7"> </h4> <div class="xml-viewer__box svelte-v2hgj7"><pre class="svelte-v2hgj7"> </pre></div></div>'), CI = /* @__PURE__ */ X('<span class="validation-xml-container__description svelte-v2hgj7"> </span>'), AI = /* @__PURE__ */ X('<button type="button" class="toggle-btn svelte-v2hgj7" aria-expanded="true" title="Collapse"><!></button>'), EI = /* @__PURE__ */ X('<button type="button" class="toggle-btn svelte-v2hgj7" aria-expanded="false" title="Expand"><!></button>'), xI = /* @__PURE__ */ X('<div class="xml-viewer svelte-v2hgj7"><div class="xml-viewer__box svelte-v2hgj7"><pre class="svelte-v2hgj7"> </pre></div></div>'), SI = /* @__PURE__ */ X('<div class="validation-xml-container svelte-v2hgj7"><div class="validation-xml-container__meta svelte-v2hgj7"><span class="validation-xml-container__name svelte-v2hgj7"> </span> <!> <div class="validation-xml-container__actions svelte-v2hgj7"><button type="button" class="delete-btn svelte-v2hgj7" title="Remove"><!></button> <!></div></div> <!></div>'), wI = /* @__PURE__ */ X('<div class="validation-xml-list svelte-v2hgj7"></div>'), TI = /* @__PURE__ */ X("<!> <!>", 1);
function DI(n, e) {
  Ce(e, !0);
  let t = m(e, "pluginGroups", 19, () => []), r = /* @__PURE__ */ le(null), i = /* @__PURE__ */ le(null);
  const a = /* @__PURE__ */ oe(() => o(r) !== null ? t()[o(r)] : null), s = /* @__PURE__ */ oe(() => o(a) && o(i) !== null ? o(a).plugins[o(i)] : null);
  xe(() => {
    var b, y;
    if (!((b = t()) != null && b.length)) {
      U(r, null), U(i, null);
      return;
    }
    (o(r) === null || o(r) >= t().length) && U(r, 0);
    const w = t()[o(r)];
    if (!((y = w == null ? void 0 : w.plugins) != null && y.length)) {
      U(i, null);
      return;
    }
    (o(i) === null || o(i) >= w.plugins.length) && U(i, 0);
  });
  let u = /* @__PURE__ */ le(""), l = /* @__PURE__ */ le(!1), c = /* @__PURE__ */ le(""), d = null, v = /* @__PURE__ */ le(Ee([])), f = /* @__PURE__ */ le(Ee(/* @__PURE__ */ new Set()));
  async function h(w) {
    U(l, !0), U(c, ""), U(u, ""), U(v, [], !0), U(f, /* @__PURE__ */ new Set(), !0), d == null || d.abort(), d = new AbortController();
    try {
      const b = new URL((/* @__PURE__ */ Object.assign({ "../../assets/validations/autodoc-xyz.xml": sI, "../../assets/validations/communication-xyz.xml": oI, "../../assets/validations/history-viewer-xyz.xml": lI, "../../assets/validations/location-manager-xyz.xml": dI, "../../assets/validations/publisher-xyz.xml": uI, "../../assets/validations/subscribe-later-binding-xyz.xml": cI, "../../assets/validations/substation-xyz.xml": fI, "../../assets/validations/template-generator-xyz.xml": vI, "../../assets/validations/type-designer-xyz.xml": hI, "../../assets/validations/type-distributor-xyz.xml": gI }))[`../../assets/validations/${w}.xml`], import.meta.url).href, y = await fetch(b, { cache: "no-cache", signal: d.signal });
      if (!y.ok) {
        if (y.status === 404) {
          U(u, "(No XML found for this plugin.)");
          return;
        }
        throw new Error(`HTTP ${y.status}`);
      }
      U(u, await y.text(), !0);
      const T = new DOMParser().parseFromString(o(u), "application/xml");
      if (T.querySelector("parsererror"))
        throw new Error("Invalid XML format.");
      const M = new XMLSerializer(), F = Array.from(T.getElementsByTagName("validation"));
      U(
        v,
        F.map((P, re) => {
          var ve, ue, B, z, k, Q, Y;
          const W = (ve = P.getAttribute("name")) == null ? void 0 : ve.trim(), N = (ue = P.getAttribute("id")) == null ? void 0 : ue.trim(), H = (z = (B = P.querySelector("name")) == null ? void 0 : B.textContent) == null ? void 0 : z.trim(), ee = (k = P.getAttribute("description")) == null ? void 0 : k.trim(), fe = (Y = (Q = P.querySelector("description")) == null ? void 0 : Q.textContent) == null ? void 0 : Y.trim(), O = W || N || H || `Validation ${re + 1}`, J = ee || fe || void 0, $ = M.serializeToString(P);
          return { name: O, description: J, xml: $ };
        }),
        !0
      ), U(f, new Set(o(v).map((P, re) => re)), !0);
    } catch (b) {
      if ((b == null ? void 0 : b.name) === "AbortError")
        return;
      U(c, (b == null ? void 0 : b.message) || "Failed to load XML.", !0);
    } finally {
      U(l, !1);
    }
  }
  let g = /* @__PURE__ */ oe(() => {
    var w;
    return ((w = o(s)) == null ? void 0 : w.id) ?? null;
  }), p = null;
  xe(() => {
    !o(g) || o(g) === p || (p = o(g), h(o(g)));
  });
  function _(w) {
    o(f).has(w) ? o(f).delete(w) : o(f).add(w), U(f, new Set(o(f)), !0);
  }
  var A = TI(), E = q(A);
  Ou(E, {
    get pluginGroups() {
      return t();
    },
    get selectedGroupIndex() {
      return o(r);
    },
    set selectedGroupIndex(w) {
      U(r, w, !0);
    },
    get selectedPluginIndex() {
      return o(i);
    },
    set selectedPluginIndex(w) {
      U(i, w, !0);
    }
  });
  var S = K(E, 2);
  {
    var I = (w) => {
      var b = se(), y = q(b);
      {
        var C = (D) => {
          var M = bI();
          x(D, M);
        }, T = (D) => {
          var M = se(), F = q(M);
          {
            var P = (W) => {
              var N = _I(), H = j(N);
              ce(() => Me(H, o(c))), x(W, N);
            }, re = (W) => {
              var N = se(), H = q(N);
              {
                var ee = (O) => {
                  var J = yI(), $ = j(J), ve = j($), ue = K($, 2), B = j(ue), z = j(B);
                  ce(() => {
                    Me(ve, `XML for: ${o(s).name ?? ""}`), Me(z, o(u));
                  }), x(O, J);
                }, fe = (O) => {
                  var J = wI();
                  cn(J, 21, () => o(v), br, ($, ve, ue) => {
                    var B = SI(), z = j(B), k = j(z), Q = j(k), Y = K(k, 2);
                    {
                      var me = (R) => {
                        var V = CI(), he = j(V);
                        ce(() => Me(he, o(ve).description)), x(R, V);
                      };
                      ne(Y, (R) => {
                        o(ve).description && R(me);
                      });
                    }
                    var Ie = K(Y, 2), Ne = j(Ie), nt = j(Ne);
                    su(nt, { svgStyles: "fill: #FF203A" });
                    var qe = K(Ne, 2);
                    {
                      var Re = (R) => {
                        var V = AI();
                        V.__click = () => _(ue);
                        var he = j(V);
                        Zh(he, { svgStyles: "fill: #004552" }), x(R, V);
                      }, st = (R) => {
                        var V = EI();
                        V.__click = () => _(ue);
                        var he = j(V);
                        Bh(he, { svgStyles: "fill: #004552" }), x(R, V);
                      };
                      ne(qe, (R) => {
                        o(f).has(ue) ? R(Re) : R(st, !1);
                      });
                    }
                    var Pt = K(z, 2);
                    {
                      var kt = (R) => {
                        var V = xI(), he = j(V), Fe = j(he), Gt = j(Fe);
                        ce(() => Me(Gt, o(ve).xml)), x(R, V);
                      };
                      ne(Pt, (R) => {
                        o(f).has(ue) && R(kt);
                      });
                    }
                    ce(() => Me(Q, o(ve).name)), x($, B);
                  }), x(O, J);
                };
                ne(H, (O) => {
                  o(v).length === 0 ? O(ee) : O(fe, !1);
                });
              }
              x(W, N);
            };
            ne(
              F,
              (W) => {
                o(c) ? W(P) : W(re, !1);
              },
              !0
            );
          }
          x(D, M);
        };
        ne(y, (D) => {
          o(l) ? D(C) : D(T, !1);
        });
      }
      x(w, b);
    };
    ne(S, (w) => {
      o(s) && w(I);
    });
  }
  x(n, A), Ae();
}
mt(["click"]);
function LI(n, e) {
  const t = (n == null ? void 0 : n.name) ?? "—";
  return [
    { label: "Engineering-Wizard", enabled: !0 },
    { label: e != null && e.edit ? `Edit ${t}` : t, enabled: !1 }
  ];
}
function RI(n, e, t, r, i) {
  o(e) || (t(o(r)), U(i, o(i) + 1));
}
function OI(n, e, t) {
  o(e) || U(t, o(t) - 1);
}
var MI = /* @__PURE__ */ X('<div class="header header--right svelte-1qlms77"><!></div> <!>', 1), FI = /* @__PURE__ */ X('<div class="stepper svelte-1qlms77"><!> <!> <div class="stepper-navigation svelte-1qlms77"><button type="button" class="btn btn--back svelte-1qlms77" aria-label="Previous step">Back</button> <button type="button" class="btn btn--next svelte-1qlms77" aria-label="Next step">Next</button></div></div> <div class="step-content svelte-1qlms77"><!></div>', 1), PI = /* @__PURE__ */ X('<div class="step-content svelte-1qlms77"><div class="header svelte-1qlms77"><!> <!></div> <!></div>'), kI = /* @__PURE__ */ X('<div class="page-content svelte-1qlms77"><!></div>');
function GI(n, e) {
  Ce(e, !0);
  const t = ["process-definition", "validator-configuration"];
  let r = /* @__PURE__ */ le(0), i = /* @__PURE__ */ oe(() => t[o(r)] ?? t[0]), a = /* @__PURE__ */ oe(() => o(r) === 0), s = /* @__PURE__ */ oe(() => o(r) === t.length - 1), u = /* @__PURE__ */ oe(() => LI(ct.process, { edit: mn.isEditing })), l = /* @__PURE__ */ oe(() => ct.process.pluginGroups), c = /* @__PURE__ */ le(Ee([]));
  function d(I) {
    I === 0 && (Hr.set(!0), ct.process = null);
  }
  function v() {
    console.log("EDITING"), mn.isEditing = !0, Hr.set(!1), U(r, 0), U(c, [], !0);
  }
  function f() {
    mn.isEditing = !1, Hr.set(!0), ct.process = null;
  }
  function h(I) {
    const w = t.indexOf(I);
    w !== -1 && U(r, w, !0);
  }
  function g(I) {
    o(c).includes(I) || U(c, [...o(c), I], !0);
  }
  function p() {
    alert("Add New Validation clicked!");
  }
  var _ = kI(), A = j(_);
  {
    var E = (I) => {
      var w = FI(), b = q(w), y = j(b);
      Du(y, { onBack: f });
      var C = K(y, 2);
      Sp(C, {
        get currentId() {
          return o(i);
        },
        get visited() {
          return o(c);
        },
        onSelect: h
      });
      var T = K(C, 2), D = j(T);
      D.__click = [OI, a, r];
      var M = K(D, 2);
      M.__click = [
        RI,
        s,
        g,
        i,
        r
      ];
      var F = K(b, 2), P = j(F);
      {
        var re = (N) => {
          aI(N, {
            get pluginGroups() {
              return o(l);
            }
          });
        }, W = (N) => {
          var H = se(), ee = q(H);
          {
            var fe = (O) => {
              var J = MI(), $ = q(J), ve = j($);
              {
                let B = /* @__PURE__ */ oe(() => !ct.process);
                Vn(ve, {
                  variant: "raised",
                  style: "--mdc-theme-primary: var(--brand); --mdc-theme-on-primary: var(--on-brand)",
                  onclick: p,
                  get disabled() {
                    return o(B);
                  },
                  "aria-label": "Add validation",
                  children: (z, k) => {
                    var Q = et("ADD NEW VALIDATION");
                    x(z, Q);
                  },
                  $$slots: { default: !0 }
                });
              }
              var ue = K($, 2);
              DI(ue, {
                get pluginGroups() {
                  return o(l);
                },
                get breadcrumbs() {
                  return o(u);
                },
                activeBreadcrumbIndex: 2,
                $$events: {
                  addValidation: p,
                  breadcrumbClick: d
                }
              }), x(O, J);
            };
            ne(
              ee,
              (O) => {
                o(i) === "validator-configuration" && O(fe);
              },
              !0
            );
          }
          x(N, H);
        };
        ne(P, (N) => {
          o(i) === "process-definition" ? N(re) : N(W, !1);
        });
      }
      ce(() => {
        D.disabled = o(a), M.disabled = o(s);
      }), x(I, w);
    }, S = (I) => {
      var w = PI(), b = j(w), y = j(b);
      wg(y, {
        get breadcrumbs() {
          return o(u);
        },
        activeIndex: 1,
        handleClick: d
      });
      var C = K(y, 2);
      {
        let D = /* @__PURE__ */ oe(() => !ct.process);
        Vn(C, {
          variant: "raised",
          style: "--mdc-theme-primary: var(--brand); --mdc-theme-on-primary: var(--on-brand)",
          onclick: () => e.handleStart(ct.process),
          get disabled() {
            return o(D);
          },
          "aria-label": "Start process",
          children: (M, F) => {
            var P = et("START PROCESS");
            x(M, P);
          },
          $$slots: { default: !0 }
        });
      }
      var T = K(b, 2);
      jp(T, {
        get pluginGroups() {
          return o(l);
        },
        requestEdit: v
      }), x(I, w);
    };
    ne(A, (I) => {
      mn.isEditing ? I(E) : I(S, !1);
    });
  }
  x(n, _), Ae();
}
mt(["click"]);
var NI = /* @__PURE__ */ X("<div></div>");
function ZI(n, e) {
  Ce(e, !0);
  function t(c) {
    let d = 3735928559, v = 1103547991;
    for (let f = 0, h; f < c.length; f++)
      h = c.charCodeAt(f), d = Math.imul(d ^ h, 2654435761), v = Math.imul(v ^ h, 1597334677);
    return d = Math.imul(d ^ d >>> 16, 2246822507) ^ Math.imul(v ^ v >>> 13, 3266489909), v = Math.imul(v ^ v >>> 16, 2246822507) ^ Math.imul(d ^ d >>> 13, 3266489909), "oscd-plugin" + ((v >>> 0).toString(16).padStart(8, "0") + (d >>> 0).toString(16).padStart(8, "0"));
  }
  let r = m(e, "editCount", 19, () => -1), i = m(e, "plugins", 19, () => []), a = null, s = null, u = "";
  xe(() => {
    var d;
    if (!a) return;
    if (!((d = e.plugin) != null && d.src)) {
      a.innerHTML = "", s = null, u = "";
      return;
    }
    const c = t(e.plugin.src);
    c !== u ? (u = c, a.innerHTML = "", s = document.createElement(c), s.doc = e.doc, s.editCount = r(), s.plugins = i(), s.nsdoc = e.nsdoc, s.docName = e.docName, s.docId = e.docId, s.docs = e.docs, s.locale = e.locale, e.oscdApi && (s.oscdApi = e.oscdApi), a.appendChild(s)) : s && (s.doc = e.doc, s.editCount = r(), s.plugins = i(), s.nsdoc = e.nsdoc, s.docName = e.docName, s.docId = e.docId, s.docs = e.docs, s.locale = e.locale, e.oscdApi && (s.oscdApi = e.oscdApi));
  });
  var l = NI();
  Se(l, (c) => a = c, () => a), x(n, l), Ae();
}
const HI = (n, e) => e(1), BI = (n, e) => e(-1);
var UI = /* @__PURE__ */ X('<div class="plugin-container svelte-1xkxjkz"><!></div>'), WI = /* @__PURE__ */ X('<div class="stepper svelte-1xkxjkz"><!> <!> <div class="stepper-navigation svelte-1xkxjkz"><button type="button" class="back-button svelte-1xkxjkz" aria-label="Previous plugin">Back</button> <button type="button" class="next-button svelte-1xkxjkz" aria-label="Next plugin">Next</button></div></div> <!>', 1);
function jI(n, e) {
  Ce(e, !0);
  const t = ["check", "warning", "error"];
  let r = m(e, "editCount", 19, () => -1), i = m(e, "plugins", 19, () => []), a = Ee({ plugin: null }), s = /* @__PURE__ */ le(Ee([])), u = /* @__PURE__ */ le(Ee({})), l = /* @__PURE__ */ oe(() => i().length > 0), c = /* @__PURE__ */ oe(() => a.plugin && o(l) ? i().findIndex((M) => M.id === a.plugin.id) : -1), d = /* @__PURE__ */ oe(() => ct.process.pluginGroups), v = /* @__PURE__ */ le(null), f = /* @__PURE__ */ le(null);
  function h(M) {
    var F, P;
    if (!((F = o(d)) != null && F.length)) return { groupIndex: null, pluginIndex: null };
    for (let re = 0; re < o(d).length; re++) {
      const N = ((P = o(d)[re].plugins) == null ? void 0 : P.findIndex((H) => H.id === M)) ?? -1;
      if (N >= 0) return { groupIndex: re, pluginIndex: N };
    }
    return { groupIndex: null, pluginIndex: null };
  }
  async function g(M) {
    if (!M) return;
    await Lu(M), a.plugin = M;
    const { groupIndex: F, pluginIndex: P } = h(M.id);
    if (U(v, F, !0), U(f, P, !0), !o(s).includes(M.id)) {
      U(s, [...o(s), M.id], !0);
      const re = i().findIndex((W) => W.id === M.id);
      if (re !== -1) {
        const W = t[re % t.length];
        U(u, { ...o(u), [M.id]: W }, !0);
      }
    }
  }
  function p(M) {
    if (!o(l)) return;
    const P = ((o(c) < 0 ? 0 : o(c)) + M + i().length) % i().length;
    g(i()[P]);
  }
  function _(M, F) {
    return Object.assign(M, F), {
      update(P) {
        Object.assign(M, P);
      }
    };
  }
  xe(() => {
    var re, W, N;
    if (o(v) === null || o(f) === null) return;
    const M = (re = o(d)) == null ? void 0 : re[o(v)], F = (W = M == null ? void 0 : M.plugins) == null ? void 0 : W[o(f)];
    if (!F) return;
    const P = i().find((H) => H.id === F.id);
    P && ((N = a.plugin) == null ? void 0 : N.id) !== P.id && g(P);
  }), xe(() => {
    if (!o(l)) {
      a.plugin = null, U(s, [], !0), U(u, {}, !0), U(v, null), U(f, null);
      return;
    }
    o(c) === -1 && g(i()[0]);
  }), it(() => (i().length && Yp(i()).catch(console.error), Hr.set(!1), () => Hr.set(!0)));
  function A() {
    var M;
    Hr.set(!0), (M = e.onExit) == null || M.call(e);
  }
  var E = WI(), S = q(E), I = j(S);
  Du(I, { onBack: A });
  var w = K(I, 2);
  Ou(w, {
    get pluginGroups() {
      return o(d);
    },
    expandedGroupBackground: "var(--primary-base)",
    expandedGroupBorderColor: "white",
    get selectedGroupIndex() {
      return o(v);
    },
    set selectedGroupIndex(M) {
      U(v, M, !0);
    },
    get selectedPluginIndex() {
      return o(f);
    },
    set selectedPluginIndex(M) {
      U(f, M, !0);
    }
  });
  var b = K(w, 2), y = j(b);
  y.__click = [BI, p];
  var C = K(y, 2);
  C.__click = [HI, p];
  var T = K(S, 2);
  {
    var D = (M) => {
      var F = UI(), P = j(F);
      {
        var re = (N) => {
          ZI(N, {
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
        }, W = (N) => {
          var H = se(), ee = q(H);
          mo(ee, () => a.plugin.id, !1, (fe, O) => {
            De(fe, (J, $) => _ == null ? void 0 : _(J, $), () => ({
              doc: e.doc,
              editCount: r(),
              docs: e.docs,
              nsdoc: e.nsdoc,
              docName: e.docName,
              docId: e.docId,
              locale: e.locale,
              oscdApi: e.oscdApi,
              host: e.host
            })), _r(fe, 0, "svelte-1xkxjkz");
          }), x(N, H);
        };
        ne(P, (N) => {
          a.plugin.type === "internal" ? N(re) : N(W, !1);
        });
      }
      x(M, F);
    };
    ne(T, (M) => {
      a.plugin && M(D);
    });
  }
  ce(() => {
    y.disabled = !o(l), C.disabled = !o(l);
  }), x(n, E), Ae();
}
mt(["click"]);
var VI = (n, e) => {
  n.target === n.currentTarget && e("exit");
}, zI = /* @__PURE__ */ X('<div class="ewf-dialog-backdrop svelte-12xjguj" role="dialog" aria-modal="true" aria-labelledby="ewf-title" tabindex="-1"><div class="ewf-dialog-panel svelte-12xjguj" role="document"><h2 id="ewf-title" class="sr-only svelte-12xjguj">Engineering Workflow</h2> <!></div></div>');
function XI(n, e) {
  Ce(e, !0);
  let t = m(e, "editCount", 19, () => -1), r = m(e, "plugins", 19, () => []), i = /* @__PURE__ */ le(!1), a = /* @__PURE__ */ le(void 0), s = /* @__PURE__ */ le(null);
  const u = (v) => {
    o(i) || (U(i, !0), ct.process = null, Hr.set(!0), Nr(v));
  };
  xe(() => {
    var v;
    e.open !== o(a) && (U(a, e.open, !0), e.open ? (U(i, !1), (v = o(s)) == null || v.focus()) : u("cancel"));
  });
  var l = se(), c = q(l);
  {
    var d = (v) => {
      var f = zI();
      f.__click = [VI, u];
      var h = j(f), g = K(j(h), 2);
      jI(g, {
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
      }), Se(f, (p) => U(s, p), () => o(s)), x(v, f);
    };
    ne(c, (v) => {
      e.open && v(d);
    });
  }
  x(n, l), Ae();
}
mt(["click"]);
var YI = /* @__PURE__ */ X('<div class="card-header svelte-1rixbl7"><p class="header-info svelte-1rixbl7">Add External Plugins</p> <div class="search-input svelte-1rixbl7"><!></div></div>'), qI = (n, e, t) => e(o(t)), KI = /* @__PURE__ */ X('<div class="card-item-content svelte-1rixbl7"><div class="card-item-content__left svelte-1rixbl7"><div aria-label="drag-handle"><!></div> <p class="plugin-name svelte-1rixbl7"> </p></div> <button class="plugin-add-btn svelte-1rixbl7"><!></button></div>'), QI = /* @__PURE__ */ X("<div><!></div>"), JI = /* @__PURE__ */ X('<div class="card-parent-content svelte-1rixbl7"></div>');
function $I(n, e) {
  Ce(e, !0);
  const t = (d) => {
    var v = YI(), f = K(j(v), 2), h = j(f);
    pr(h, {
      variant: "outlined",
      label: "Search Plugins",
      get value() {
        return a();
      },
      set value(g) {
        a(g);
      }
    }), x(d, v);
  }, r = (d) => {
    var v = JI();
    cn(v, 29, i, (f) => f.id, (f, h) => {
      var g = QI(), p = j(g);
      el(p, {
        variant: "secondary",
        children: (_, A) => {
          var E = KI(), S = j(E), I = j(S), w = j(I);
          Fs(w, {}), De(I, (D) => On == null ? void 0 : On(D));
          var b = K(I, 2), y = j(b), C = K(S, 2);
          C.__click = [qI, c, h];
          var T = j(C);
          Xo(T, { svgStyles: "fill: var(--brand);" }), ce(() => {
            Me(y, o(h).name), Tt(C, "aria-label", `Add ${o(h).name}`);
          }), x(_, E);
        },
        $$slots: { default: !0 }
      }), ce(() => Tt(g, "data-id", o(h).id)), Rs(g, () => Us, () => ({ duration: 100 })), x(f, g);
    }), De(v, (f, h) => Rn == null ? void 0 : Rn(f, h), () => ({
      items: i(),
      flipDurationMs: 100,
      dropTargetStyle: {},
      dropFromOthersDisabled: !0
    })), Kt("consider", v, l), Kt("finalize", v, u), x(d, v);
  };
  let i = m(e, "plugins", 23, () => []), a = m(e, "searchTerm", 15, ""), s = m(e, "onAddPlugin", 3, () => {
  });
  const u = (d) => {
    i(d.detail.items);
  }, l = (d) => {
    const { trigger: v, id: f } = d.detail.info;
    if (v === At.DRAG_STARTED) {
      const h = i().findIndex((p) => p.id === f);
      if (h < 0) return;
      const g = `${f}_copy`;
      d.detail.items = d.detail.items.filter((p) => !p[aa]), d.detail.items.splice(h, 0, { ...i()[h], id: g }), i(d.detail.items);
    } else
      i([...i()]);
  };
  function c(d) {
    const v = d.id.endsWith("_copy") ? d.id.slice(0, -5) : d.id, f = i().find((h) => h.id === v) ?? { ...d, id: v };
    s()(f);
  }
  tl(n, {
    backgroundColor: "#DAE3E6",
    get header() {
      return t;
    },
    get content() {
      return r;
    }
  }), Ae();
}
mt(["click"]);
var eb = (n, e, t) => e(t().id), tb = /* @__PURE__ */ X('<button type="button" class="plugin-list__removeBtn svelte-1jr0t84"><!></button>'), nb = /* @__PURE__ */ X('<div class="page svelte-1jr0t84"><div class="topbar svelte-1jr0t84"><div class="topbar__left svelte-1jr0t84"><h2 class="title svelte-1jr0t84">Create new process</h2></div> <div class="topbar__actions svelte-1jr0t84"><!> <!></div></div> <div class="form svelte-1jr0t84"><!> <!> <!> <!></div> <div class="process-definition-view svelte-1jr0t84"><!> <div class="drag-and-drop-info svelte-1jr0t84"><!> <p class="svelte-1jr0t84">SELECT OR DRAG &amp; DROP PLUGINS</p></div> <!></div></div>');
function rb(n, e) {
  Ce(e, !0);
  const t = (B) => {
    var z = se(), k = q(z);
    {
      var Q = (Y) => {
        Vn(Y, {
          style: "background-color: #FF203A",
          variant: "raised",
          "aria-label": "Remove all plugins",
          onclick: A,
          children: (me, Ie) => {
            var Ne = et("REMOVE ALL");
            x(me, Ne);
          },
          $$slots: { default: !0 }
        });
      };
      ne(k, (Y) => {
        o(w) && Y(Q);
      });
    }
    x(B, z);
  }, r = (B, z) => {
    let k = () => z == null ? void 0 : z().plugin;
    var Q = tb();
    Q.__click = [eb, E, k];
    var Y = j(Q);
    iu(Y, { svgStyles: "fill: #FF203A" }), ce(() => Tt(Q, "aria-label", `Remove ${k().name}`)), x(B, Q);
  };
  let i = /* @__PURE__ */ le(""), a = /* @__PURE__ */ le(""), s = /* @__PURE__ */ le("1.0.0"), u = /* @__PURE__ */ le(""), l = /* @__PURE__ */ le(!1), c = /* @__PURE__ */ le(Ee([{ title: "Ungrouped", plugins: [] }])), d = /* @__PURE__ */ le("");
  const v = (B) => B.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  xe(() => {
    o(l) || U(u, v(o(i)), !0);
  });
  function f(B) {
    const z = /* @__PURE__ */ new Set();
    for (const k of B ?? []) for (const Q of k.plugins ?? []) z.add(Q.id);
    return z;
  }
  function h(B, z) {
    const k = f(z);
    if (!k.has(B)) return B;
    let Q = 2, Y = `${B}-${Q}`;
    for (; k.has(Y); )
      Q += 1, Y = `${B}-${Q}`;
    return Y;
  }
  function g(B = "Ungrouped") {
    let z = o(c).find((k) => k.title === B);
    return z || (z = { title: B, plugins: [] }, U(c, [...o(c), z], !0)), z.plugins ?? (z.plugins = []), z;
  }
  function p(B) {
    const z = [], k = /* @__PURE__ */ new Set();
    for (const Q of B ?? []) {
      const Y = [];
      for (const me of Q.plugins ?? []) {
        let Ie = me.id;
        k.has(Ie) && (Ie = h(Ie, z.concat([{ ...Q, plugins: Y }]))), k.add(Ie), Y.push({ ...me, id: Ie });
      }
      z.push({ ...Q, plugins: Y });
    }
    return z;
  }
  function _(B, z = "Ungrouped") {
    const k = g(z), Q = h(B.id, o(c));
    k.plugins.push({ ...B, id: Q }), U(c, [...o(c)], !0);
  }
  async function A() {
    if ((await Ga(ru, {
      title: "Remove all entries?",
      message: "This action cannot be undone. You will need to manually search for and re-add each item, and rearrange them again.",
      confirmActionText: "Remove All",
      cancelActionText: "Cancel",
      confirmActionColor: "danger"
    })).type === "confirm") {
      for (const z of o(c)) (z.plugins ?? (z.plugins = [])).length = 0;
      U(c, [...o(c)], !0);
    }
  }
  function E(B) {
    for (let z = 0; z < o(c).length; z += 1) {
      const k = o(c)[z], Q = (k.plugins ?? []).findIndex((Y) => Y.id === B);
      if (Q !== -1) {
        k.plugins.splice(Q, 1), k.plugins.length === 0 && o(c).splice(z, 1), U(c, [...o(c)], !0);
        return;
      }
    }
  }
  function S(B, z) {
    const k = B.trim();
    if (!k || o(c).some((Ie) => Ie.title === k)) return;
    const Q = { title: k, plugins: [] };
    if (z === void 0) {
      U(c, [...o(c), Q], !0);
      return;
    }
    const Y = Math.max(0, z - 1), me = [...o(c)];
    me.splice(Y, 0, Q), U(c, me, !0);
  }
  function I(B) {
    U(c, p(B), !0);
  }
  let w = /* @__PURE__ */ oe(() => o(c).flatMap((B) => B.plugins ?? []).length > 0), b = /* @__PURE__ */ oe(() => {
    const B = o(d).toLowerCase().trim(), z = (nl.plugins ?? []).map((k) => ({
      id: Ru(k.name),
      name: k.name,
      src: k.src,
      type: "internal"
    }));
    return B ? z.filter((k) => k.name.toLowerCase().includes(B)) : z;
  }), y = /* @__PURE__ */ oe(() => !!o(i).trim());
  function C() {
    if (!o(y)) return;
    const B = {
      id: o(u).trim() || v(o(i)) || "process",
      version: o(s).trim() || "1.0.0",
      name: o(i).trim(),
      description: o(a).trim(),
      pluginGroups: As(o(c))
    }, z = op(B);
    mn.isEditing = !1, e.handleSaved(z);
  }
  function T() {
    mn.isEditing = !1, e.handleCancel();
  }
  it(() => {
    mn.isEditing = !0;
  }), Fn(() => {
    mn.isEditing = !1;
  });
  var D = nb(), M = j(D), F = K(j(M), 2), P = j(F);
  Vn(P, {
    variant: "outlined",
    style: "--mdc-theme-primary: var(--brand); --mdc-theme-on-primary: var(--on-brand)",
    onclick: T,
    children: (B, z) => {
      var k = et("CANCEL");
      x(B, k);
    },
    $$slots: { default: !0 }
  });
  var re = K(P, 2);
  {
    let B = /* @__PURE__ */ oe(() => !o(y));
    Vn(re, {
      variant: "raised",
      style: "--mdc-theme-primary: var(--brand); --mdc-theme-on-primary: var(--on-brand)",
      onclick: C,
      get disabled() {
        return o(B);
      },
      children: (z, k) => {
        var Q = et("SAVE");
        x(z, Q);
      },
      $$slots: { default: !0 }
    });
  }
  var W = K(M, 2), N = j(W);
  pr(N, {
    variant: "outlined",
    label: "Process name",
    get value() {
      return o(i);
    },
    set value(B) {
      U(i, B, !0);
    }
  });
  var H = K(N, 2);
  pr(H, {
    variant: "outlined",
    label: "Process id",
    get value() {
      return o(u);
    },
    set value(B) {
      U(u, B, !0);
    },
    $$events: { input: () => U(l, !0) }
  });
  var ee = K(H, 2);
  pr(ee, {
    variant: "outlined",
    label: "Version",
    get value() {
      return o(s);
    },
    set value(B) {
      U(s, B, !0);
    }
  });
  var fe = K(ee, 2);
  pr(fe, {
    variant: "outlined",
    label: "Description",
    get value() {
      return o(a);
    },
    set value(B) {
      U(a, B, !0);
    }
  });
  var O = K(W, 2), J = j(O);
  rl(J, {
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
    onAddGroup: (B, z) => S(B, z),
    onUpdateGroups: (B) => I(B)
  });
  var $ = K(J, 2), ve = j($);
  lu(ve, { svgStyles: "fill: #6B9197" });
  var ue = K($, 2);
  $I(ue, {
    get plugins() {
      return o(b);
    },
    onAddPlugin: (B) => _(B, "Ungrouped"),
    get searchTerm() {
      return o(d);
    },
    set searchTerm(B) {
      U(d, B, !0);
    }
  }), x(n, D), Ae();
}
mt(["click"]);
var ib = /* @__PURE__ */ X("<!> <!>", 1);
function ab(n, e) {
  Ce(e, !0);
  let t = /* @__PURE__ */ le(!1);
  it(async () => {
    await ap();
  });
  function r(g) {
    ct.process || (ct.process = g);
    const p = hp(ct.process);
    Ga(XI, {
      doc: e.doc,
      editCount: e.editCount,
      host: e.host,
      plugins: p,
      nsdoc: e.nsdoc,
      docId: e.docId,
      docName: e.docName,
      docs: e.docs,
      locale: e.locale,
      oscdApi: e.oscdApi
    });
  }
  xe(() => {
    hh({ editCount: e.editCount, doc: e.doc });
  });
  function i(g) {
    ct.process = g;
  }
  function a() {
    ct.process = null;
  }
  function s() {
    mn.isEditing = !1, ct.process = null, U(t, !0);
  }
  function u() {
    mn.isEditing = !1, U(t, !1);
  }
  function l(g) {
    U(t, !1), ct.process = g;
  }
  var c = ib(), d = q(c);
  vh(d, {});
  var v = K(d, 2);
  {
    var f = (g) => {
      rb(g, { handleCancel: u, handleSaved: l });
    }, h = (g) => {
      var p = se(), _ = q(p);
      {
        var A = (S) => {
          GI(S, { handleBack: a, handleStart: r });
        }, E = (S) => {
          bp(S, {
            handleView: i,
            handleStart: r,
            handleAddNew: s
          });
        };
        ne(
          _,
          (S) => {
            ct.process ? S(A) : S(E, !1);
          },
          !0
        );
      }
      x(g, p);
    };
    ne(v, (g) => {
      o(t) ? g(f) : g(h, !1);
    });
  }
  x(n, c), Ae();
}
const Mu = "archive-explorer", Fu = "0.0.1";
var sb = /* @__PURE__ */ X('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function ob(n, e) {
  Ce(e, !0);
  let t = m(e, "dev", 3, !1), r = m(e, "editCount", 3, 0), i = m(e, "plugins", 19, () => []);
  var a = sb(), s = q(a);
  {
    var u = (d) => {
      ab(d, {
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
    ne(s, (d) => {
      (e.doc || t()) && d(u);
    });
  }
  var l = K(s, 2), c = K(l, 2);
  ce(() => {
    _l(l, Mu), _l(c, Fu);
  }), x(n, a), Ae();
}
var Xi;
class fb extends HTMLElement {
  constructor() {
    super();
    Ue(this, Xi);
    we(this, Xi, /* @__PURE__ */ le(Ee({
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
    return o(ae(this, Xi));
  }
  set _props(t) {
    U(ae(this, Xi), t, !0);
  }
  connectedCallback() {
    if (this.shadowRoot) return;
    this.attachShadow({ mode: "open" }), nf(ob, { target: this.shadowRoot, props: this._props });
    const t = lb();
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
    vp(r);
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
Xi = new WeakMap();
function lb() {
  const n = `${Mu}-v${Fu}-style`, e = db(), t = document.createElement("link");
  return t.rel = "stylesheet", t.type = "text/css", t.href = e, t.id = n, t;
}
function db() {
  const n = new URL(import.meta.url), e = n.origin, t = n.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, t, "style.css"].filter(Boolean).join("/");
}
export {
  fb as default
};
