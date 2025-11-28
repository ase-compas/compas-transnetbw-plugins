var Uu = Object.defineProperty;
var sl = (n) => {
  throw TypeError(n);
};
var Wu = (n, e, t) => e in n ? Uu(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Ti = (n, e, t) => Wu(n, typeof e != "symbol" ? e + "" : e, t), Xs = (n, e, t) => e.has(n) || sl("Cannot " + t);
var se = (n, e, t) => (Xs(n, e, "read from private field"), t ? t.call(n) : e.get(n)), Ue = (n, e, t) => e.has(n) ? sl("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), we = (n, e, t, r) => (Xs(n, e, "write to private field"), r ? r.call(n, t) : e.set(n, t), t), Wt = (n, e, t) => (Xs(n, e, "access private method"), t);
const Et = Symbol(), ju = "http://www.w3.org/1999/xhtml", Vu = "http://www.w3.org/2000/svg", zu = "@attach", nd = !1;
var Ra = Array.isArray, Xu = Array.prototype.indexOf, Oo = Array.from, ss = Object.defineProperty, Pr = Object.getOwnPropertyDescriptor, rd = Object.getOwnPropertyDescriptors, id = Object.prototype, Yu = Array.prototype, Cs = Object.getPrototypeOf, ol = Object.isExtensible;
function Mi(n) {
  return typeof n == "function";
}
const Ie = () => {
};
function qu(n) {
  for (var e = 0; e < n.length; e++)
    n[e]();
}
function ad() {
  var n, e, t = new Promise((r, i) => {
    n = r, e = i;
  });
  return { promise: t, resolve: n, reject: e };
}
const tn = 2, Mo = 4, Fo = 8, Ii = 16, yr = 32, Ur = 64, Po = 128, Ln = 256, os = 512, Xt = 1024, pn = 2048, Wr = 4096, Wn = 8192, _i = 16384, ko = 32768, yi = 65536, ll = 1 << 17, Ku = 1 << 18, Ci = 1 << 19, Qu = 1 << 20, so = 1 << 21, As = 1 << 22, ci = 1 << 23, rr = Symbol("$state"), sd = Symbol("legacy props"), Ju = Symbol(""), Fi = new class extends Error {
  constructor() {
    super(...arguments);
    Ti(this, "name", "StaleReactionError");
    Ti(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Go(n) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function $u() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ec(n) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function tc() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function nc(n) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function rc() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ic(n) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function ac() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function sc() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function oc() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function lc() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function dc() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function uc() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let cc = !1;
function od(n) {
  return n === this.v;
}
function No(n, e) {
  return n != n ? e == e : n !== e || n !== null && typeof n == "object" || typeof n == "function";
}
function ld(n) {
  return !No(n, this.v);
}
let na = !1, fc = !1;
function vc() {
  na = !0;
}
const hc = [];
function Es(n, e = !1, t = !1) {
  return $a(n, /* @__PURE__ */ new Map(), "", hc, null, t);
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
    if (Cs(n) === id) {
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
    dd().get(n)
  );
}
function ce(n, e) {
  return dd().set(n, e), e;
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
      Ed(r);
  }
  return n !== void 0 && (e.x = n), $e = e.p, n ?? /** @type {T} */
  {};
}
function Oa() {
  return !na || $e !== null && $e.l === null;
}
function dd(n) {
  return $e === null && Go(), $e.c ?? ($e.c = new Map(gc($e) || void 0));
}
function gc(n) {
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
function ud() {
  var n = ai;
  ai = [], qu(n);
}
function br(n) {
  if (ai.length === 0 && !Ia) {
    var e = ai;
    queueMicrotask(() => {
      e === ai && ud();
    });
  }
  ai.push(n);
}
function mc() {
  for (; ai.length > 0; )
    ud();
}
const pc = /* @__PURE__ */ new WeakMap();
function cd(n) {
  var e = Pe;
  if (e === null)
    return Oe.f |= ci, n;
  if (e.f & ko)
    qi(n, e);
  else {
    if (!(e.f & Po))
      throw !e.parent && n instanceof Error && fd(n), n;
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
  throw n instanceof Error && fd(n), n;
}
function fd(n) {
  const e = pc.get(n);
  e && (ss(n, "message", {
    value: e.message
  }), ss(n, "stack", {
    value: e.stack
  }));
}
const ja = /* @__PURE__ */ new Set();
let Ye = null, es = null, Mt = null, oo = /* @__PURE__ */ new Set(), $n = [], xs = null, lo = !1, Ia = !1;
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
      Wt(this, Mn, uo).call(this, s);
    if (se(this, si) === 0) {
      var t = Mt;
      Wt(this, Mn, co).call(this);
      var r = se(this, Vi), i = se(this, oi);
      we(this, Vi, []), we(this, oi, []), we(this, zi, []), es = this, Ye = null, Mt = t, dl(r), dl(i), es = null, (a = se(this, Ta)) == null || a.resolve();
    } else
      Wt(this, Mn, ts).call(this, se(this, Vi)), Wt(this, Mn, ts).call(this, se(this, oi)), Wt(this, Mn, ts).call(this, se(this, zi));
    Mt = null;
    for (const s of se(this, ji))
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
    se(this, Ui).has(e) || se(this, Ui).set(e, t), this.current.set(e, e.v), Mt == null || Mt.set(e, e.v);
  }
  activate() {
    Ye = this;
  }
  deactivate() {
    Ye = null, Mt = null;
  }
  flush() {
    if ($n.length > 0) {
      if (this.activate(), vd(), Ye !== null && Ye !== this)
        return;
    } else se(this, si) === 0 && Wt(this, Mn, co).call(this);
    this.deactivate();
    for (const e of oo)
      if (oo.delete(e), e(), Ye !== null)
        break;
  }
  increment() {
    we(this, si, se(this, si) + 1);
  }
  decrement() {
    we(this, si, se(this, si) - 1);
    for (const e of se(this, Da))
      Jt(e, pn), mi(e);
    for (const e of se(this, La))
      Jt(e, Wr), mi(e);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    se(this, Wi).add(e);
  }
  settled() {
    return (se(this, Ta) ?? we(this, Ta, ad())).promise;
  }
  static ensure() {
    if (Ye === null) {
      const e = Ye = new Is();
      ja.add(Ye), Ia || Is.enqueue(() => {
        Ye === e && e.flush();
      });
    }
    return Ye;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    br(e);
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
  e.f ^= Xt;
  for (var t = e.first; t !== null; ) {
    var r = t.f, i = (r & (yr | Ur)) !== 0, a = i && (r & Xt) !== 0, s = a || (r & Wn) !== 0 || this.skipped_effects.has(t);
    if (!s && t.fn !== null) {
      i ? t.f ^= Xt : r & Mo ? se(this, oi).push(t) : r & Xt || (r & As && ((c = t.b) != null && c.is_pending()) ? se(this, ji).push(t) : Rs(t) && (t.f & Ii && se(this, zi).push(t), Aa(t)));
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
    (t.f & pn ? se(this, Da) : se(this, La)).push(t), Jt(t, Xt);
  e.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
co = function() {
  var e;
  for (const t of se(this, Wi))
    t();
  if (se(this, Wi).clear(), ja.size > 1) {
    se(this, Ui).clear();
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
          hd(s, a);
        if ($n.length > 0) {
          Ye = r, r.apply();
          for (const s of $n)
            Wt(e = r, Mn, uo).call(e, s);
          $n = [], r.deactivate();
        }
      }
    }
    Ye = null;
  }
  ja.delete(this);
};
let tr = Is;
function bc(n) {
  var e = Ia;
  Ia = !0;
  try {
    for (var t; ; ) {
      if (mc(), $n.length === 0 && (Ye == null || Ye.flush(), $n.length === 0))
        return xs = null, /** @type {T} */
        t;
      vd();
    }
  } finally {
    Ia = e;
  }
}
function vd() {
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
    lo = !1, fl(n), xs = null;
  }
}
function Ic() {
  try {
    rc();
  } catch (n) {
    qi(n, xs);
  }
}
let hr = null;
function dl(n) {
  var e = n.length;
  if (e !== 0) {
    for (var t = 0; t < e; ) {
      var r = n[t++];
      if (!(r.f & (_i | Wn)) && Rs(r) && (hr = [], Aa(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? wd(r) : r.fn = null), (hr == null ? void 0 : hr.length) > 0)) {
        kr.clear();
        for (const i of hr)
          Aa(i);
        hr = [];
      }
    }
    hr = null;
  }
}
function hd(n, e) {
  if (n.reactions !== null)
    for (const t of n.reactions) {
      const r = t.f;
      r & tn ? hd(
        /** @type {Derived} */
        t,
        e
      ) : r & (As | Ii) && gd(t, e) && (Jt(t, pn), mi(
        /** @type {Effect} */
        t
      ));
    }
}
function gd(n, e) {
  if (n.deps !== null) {
    for (const t of n.deps)
      if (e.includes(t) || t.f & tn && gd(
        /** @type {Derived} */
        t,
        e
      ))
        return !0;
  }
  return !1;
}
function mi(n) {
  for (var e = xs = n; e.parent !== null; ) {
    e = e.parent;
    var t = e.f;
    if (lo && e === Pe && t & Ii)
      return;
    if (t & (Ur | yr)) {
      if (!(t & Xt)) return;
      e.f ^= Xt;
    }
  }
  $n.push(e);
}
function _c(n) {
  let e = 0, t = pi(0), r;
  return () => {
    Nc() && (o(t), Ds(() => (e === 0 && (r = zr(() => n(() => _a(t)))), e += 1, () => {
      br(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, _a(t));
      });
    })));
  };
}
var yc = yi | Ci | Po;
function Cc(n, e, t) {
  new Ac(n, e, t);
}
var kn, Sn, Ro, Kn, li, Qn, wn, on, Jn, Dr, di, Lr, ui, Rr, _s, ys, en, Ec, xc, ns, rs, fo;
class Ac {
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
    Ue(this, _s, () => {
      se(this, Rr) && Ki(se(this, Rr), se(this, di));
    });
    Ue(this, ys, _c(() => (we(this, Rr, pi(se(this, di))), () => {
      we(this, Rr, null);
    })));
    we(this, Sn, e), we(this, Kn, t), we(this, li, r), this.parent = /** @type {Effect} */
    Pe.b, we(this, kn, !!se(this, Kn).pending), we(this, Qn, Vr(() => {
      Pe.b = this;
      {
        try {
          we(this, wn, Vt(() => r(se(this, Sn))));
        } catch (i) {
          this.error(i);
        }
        se(this, Lr) > 0 ? Wt(this, en, rs).call(this) : we(this, kn, !1);
      }
    }, yc));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return se(this, kn) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!se(this, Kn).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    Wt(this, en, fo).call(this, e), we(this, di, se(this, di) + e), oo.add(se(this, _s));
  }
  get_effect_pending() {
    return se(this, ys).call(this), o(
      /** @type {Source<number>} */
      se(this, Rr)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var t = se(this, Kn).onerror;
    let r = se(this, Kn).failed;
    if (se(this, ui) || !t && !r)
      throw e;
    se(this, wn) && (wt(se(this, wn)), we(this, wn, null)), se(this, on) && (wt(se(this, on)), we(this, on, null)), se(this, Jn) && (wt(se(this, Jn)), we(this, Jn, null));
    var i = !1, a = !1;
    const s = () => {
      if (i) {
        uc();
        return;
      }
      i = !0, a && lc(), tr.ensure(), we(this, di, 0), se(this, Jn) !== null && Gr(se(this, Jn), () => {
        we(this, Jn, null);
      }), we(this, kn, this.has_pending_snippet()), we(this, wn, Wt(this, en, ns).call(this, () => (we(this, ui, !1), Vt(() => se(this, li).call(this, se(this, Sn)))))), se(this, Lr) > 0 ? Wt(this, en, rs).call(this) : we(this, kn, !1);
    };
    var u = Oe;
    try {
      un(null), a = !0, t == null || t(e, s), a = !1;
    } catch (l) {
      qi(l, se(this, Qn) && se(this, Qn).parent);
    } finally {
      un(u);
    }
    r && br(() => {
      we(this, Jn, Wt(this, en, ns).call(this, () => {
        we(this, ui, !0);
        try {
          return Vt(() => {
            r(
              se(this, Sn),
              () => e,
              () => s
            );
          });
        } catch (l) {
          return qi(
            l,
            /** @type {Effect} */
            se(this, Qn).parent
          ), null;
        } finally {
          we(this, ui, !1);
        }
      }));
    });
  }
}
kn = new WeakMap(), Sn = new WeakMap(), Ro = new WeakMap(), Kn = new WeakMap(), li = new WeakMap(), Qn = new WeakMap(), wn = new WeakMap(), on = new WeakMap(), Jn = new WeakMap(), Dr = new WeakMap(), di = new WeakMap(), Lr = new WeakMap(), ui = new WeakMap(), Rr = new WeakMap(), _s = new WeakMap(), ys = new WeakMap(), en = new WeakSet(), Ec = function() {
  try {
    we(this, wn, Vt(() => se(this, li).call(this, se(this, Sn))));
  } catch (e) {
    this.error(e);
  }
  we(this, kn, !1);
}, xc = function() {
  const e = se(this, Kn).pending;
  e && (we(this, on, Vt(() => e(se(this, Sn)))), tr.enqueue(() => {
    we(this, wn, Wt(this, en, ns).call(this, () => (tr.ensure(), Vt(() => se(this, li).call(this, se(this, Sn)))))), se(this, Lr) > 0 ? Wt(this, en, rs).call(this) : (Gr(
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
ns = function(e) {
  var t = Pe, r = Oe, i = $e;
  ir(se(this, Qn)), un(se(this, Qn)), Yi(se(this, Qn).ctx);
  try {
    return e();
  } catch (a) {
    return cd(a), null;
  } finally {
    ir(t), un(r), Yi(i);
  }
}, rs = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    se(this, Kn).pending
  );
  se(this, wn) !== null && (we(this, Dr, document.createDocumentFragment()), Sc(se(this, wn), se(this, Dr))), se(this, on) === null && we(this, on, Vt(() => e(se(this, Sn))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
fo = function(e) {
  var t;
  if (!this.has_pending_snippet()) {
    this.parent && Wt(t = this.parent, en, fo).call(t, e);
    return;
  }
  we(this, Lr, se(this, Lr) + e), se(this, Lr) === 0 && (we(this, kn, !1), se(this, on) && Gr(se(this, on), () => {
    we(this, on, null);
  }), se(this, Dr) && (se(this, Sn).before(se(this, Dr)), we(this, Dr, null)), br(() => {
    tr.ensure().flush();
  }));
};
function Sc(n, e) {
  for (var t = n.nodes_start, r = n.nodes_end; t !== null; ) {
    var i = t === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ma(t)
    );
    e.append(t), t = i;
  }
}
function md(n, e, t) {
  const r = Oa() ? Ss : Zo;
  if (e.length === 0) {
    t(n.map(r));
    return;
  }
  var i = Ye, a = (
    /** @type {Effect} */
    Pe
  ), s = wc();
  Promise.all(e.map((u) => /* @__PURE__ */ Tc(u))).then((u) => {
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
function wc() {
  var n = Pe, e = Oe, t = $e, r = Ye;
  return function() {
    ir(n), un(e), Yi(t), r == null || r.activate();
  };
}
function vo() {
  ir(null), un(null), Yi(null);
}
// @__NO_SIDE_EFFECTS__
function Ss(n) {
  var e = tn | pn, t = Oe !== null && Oe.f & tn ? (
    /** @type {Derived} */
    Oe
  ) : null;
  return Pe === null || t !== null && t.f & Ln ? e |= Ln : Pe.f |= Ci, {
    ctx: $e,
    deps: null,
    effects: null,
    equals: od,
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
function Tc(n, e) {
  let t = (
    /** @type {Effect | null} */
    Pe
  );
  t === null && $u();
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
  return Bc(() => {
    var f;
    var l = ad();
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
  }), Ts(() => {
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
function de(n) {
  const e = /* @__PURE__ */ Ss(n);
  return Ld(e), e;
}
// @__NO_SIDE_EFFECTS__
function Zo(n) {
  const e = /* @__PURE__ */ Ss(n);
  return e.equals = ld, e;
}
function pd(n) {
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
function Dc(n) {
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
  ir(Dc(n));
  try {
    pd(n), e = Fd(n);
  } finally {
    ir(t);
  }
  return e;
}
function bd(n) {
  var e = Ho(n);
  if (n.equals(e) || (n.v = e, n.wv = Od()), !Ai)
    if (Mt !== null)
      Mt.set(n, n.v);
    else {
      var t = (Or || n.f & Ln) && n.deps !== null ? Wr : Xt;
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
    equals: od,
    rv: 0,
    wv: 0
  };
  return t;
}
// @__NO_SIDE_EFFECTS__
function le(n, e) {
  const t = pi(n);
  return Ld(t), t;
}
// @__NO_SIDE_EFFECTS__
function Id(n, e = !1, t = !0) {
  var i;
  const r = pi(n);
  return e || (r.equals = ld), na && t && $e !== null && $e.l !== null && ((i = $e.l).s ?? (i.s = [])).push(r), r;
}
function H(n, e, t = !1) {
  Oe !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Zn || Oe.f & ll) && Oa() && Oe.f & (tn | Ii | As | ll) && !(Qt != null && Qt.includes(n)) && oc();
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
    ), Jt(n, n.f & Ln ? Wr : Xt)), n.wv = Od(), _d(n, pn), Oa() && Pe !== null && Pe.f & Xt && !(Pe.f & (yr | Ur)) && (xn === null ? jc([n]) : xn.push(n));
  }
  return e;
}
function _a(n) {
  H(n, n.v + 1);
}
function _d(n, e) {
  var t = n.reactions;
  if (t !== null)
    for (var r = Oa(), i = t.length, a = 0; a < i; a++) {
      var s = t[a], u = s.f;
      if (!(!r && s === Pe)) {
        var l = (u & pn) === 0;
        l && Jt(s, e), u & tn ? _d(
          /** @type {Derived} */
          s,
          Wr
        ) : l && (u & Ii && hr !== null && hr.push(
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
  const e = Cs(n);
  if (e !== id && e !== Yu)
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
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && ac();
        var d = t.get(l);
        return d === void 0 ? d = s(() => {
          var v = /* @__PURE__ */ le(c.value);
          return t.set(l, v), v;
        }) : H(d, c.value, !0), !0;
      },
      deleteProperty(u, l) {
        var c = t.get(l);
        if (c === void 0) {
          if (l in u) {
            const d = s(() => /* @__PURE__ */ le(Et));
            t.set(l, d), _a(i);
          }
        } else
          H(c, Et), _a(i);
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
            g !== void 0 ? H(g, Et) : h in u && (g = s(() => /* @__PURE__ */ le(Et)), t.set(h + "", g));
          }
        if (v === void 0)
          (!f || (S = Pr(u, l)) != null && S.writable) && (v = s(() => /* @__PURE__ */ le(void 0)), H(v, Ee(c)), t.set(l, v));
        else {
          f = v.v !== Et;
          var p = s(() => Ee(c));
          H(v, p);
        }
        var _ = Reflect.getOwnPropertyDescriptor(u, l);
        if (_ != null && _.set && _.set.call(d, c), !f) {
          if (r && typeof l == "string") {
            var A = (
              /** @type {Source<number>} */
              t.get("length")
            ), x = Number(l);
            Number.isInteger(x) && x >= A.v && H(A, x + 1);
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
        sc();
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
function Lc(n, e) {
  return Object.is(ul(n), ul(e));
}
var ls, Bo, yd, Cd, Ad;
function Rc() {
  if (ls === void 0) {
    ls = window, Bo = document, yd = /Firefox/.test(navigator.userAgent);
    var n = Element.prototype, e = Node.prototype, t = Text.prototype;
    Cd = Pr(e, "firstChild").get, Ad = Pr(e, "nextSibling").get, ol(n) && (n.__click = void 0, n.__className = void 0, n.__attributes = null, n.__style = void 0, n.__e = void 0), ol(t) && (t.__t = void 0);
  }
}
function jr(n = "") {
  return document.createTextNode(n);
}
// @__NO_SIDE_EFFECTS__
function Qi(n) {
  return Cd.call(n);
}
// @__NO_SIDE_EFFECTS__
function Ma(n) {
  return Ad.call(n);
}
function W(n, e) {
  return /* @__PURE__ */ Qi(n);
}
function K(n, e = !1) {
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
function Q(n, e = 1, t = !1) {
  let r = n;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ma(r);
  return r;
}
function Oc(n) {
  n.textContent = "";
}
function Uo() {
  return !1;
}
function Mc(n, e) {
  if (e) {
    const t = document.body;
    n.autofocus = !0, br(() => {
      document.activeElement === t && n.focus();
    });
  }
}
let cl = !1;
function Fc() {
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
function ws(n) {
  var e = Oe, t = Pe;
  un(null), ir(null);
  try {
    return n();
  } finally {
    un(e), ir(t);
  }
}
function Pc(n, e, t, r = t) {
  n.addEventListener(e, () => ws(t));
  const i = n.__on_r;
  i ? n.__on_r = () => {
    i(), r(!0);
  } : n.__on_r = () => r(!0), Fc();
}
function kc(n) {
  Pe === null && Oe === null && nc(), Oe !== null && Oe.f & Ln && Pe === null && tc(), Ai && ec();
}
function Gc(n, e) {
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
    !(s.f & Ci) && (s = s.first), s !== null && (s.parent = i, i !== null && Gc(s, i), Oe !== null && Oe.f & tn && !(n & Ur))) {
      var u = (
        /** @type {Derived} */
        Oe
      );
      (u.effects ?? (u.effects = [])).push(s);
    }
  }
  return a;
}
function Nc() {
  return Oe !== null && !Zn;
}
function Ts(n) {
  const e = ar(Fo, null, !1);
  return Jt(e, Xt), e.teardown = n, e;
}
function xe(n) {
  kc();
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
    return Ed(n);
}
function Ed(n) {
  return ar(Mo | Qu, n, !1);
}
function Zc(n) {
  tr.ensure();
  const e = ar(Ur | Ci, n, !0);
  return () => {
    wt(e);
  };
}
function Hc(n) {
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
function Bc(n) {
  return ar(As | Ci, n, !0);
}
function Ds(n, e = 0) {
  return ar(Fo | e, n, !0);
}
function ve(n, e = [], t = []) {
  md(e, t, (r) => {
    ar(Fo, () => n(...r.map(o)), !0);
  });
}
function Vr(n, e = 0) {
  var t = ar(Ii | e, n, !0);
  return t;
}
function Vt(n, e = !0) {
  return ar(yr | Ci, n, !0, e);
}
function xd(n) {
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
function Sd(n, e = !1) {
  var t = n.first;
  for (n.first = n.last = null; t !== null; ) {
    const i = t.ac;
    i !== null && ws(() => {
      i.abort(Fi);
    });
    var r = t.next;
    t.f & Ur ? t.parent = null : wt(t, e), t = r;
  }
}
function Uc(n) {
  for (var e = n.first; e !== null; ) {
    var t = e.next;
    e.f & yr || wt(e), e = t;
  }
}
function wt(n, e = !0) {
  var t = !1;
  (e || n.f & Ku) && n.nodes_start !== null && n.nodes_end !== null && (Wc(
    n.nodes_start,
    /** @type {TemplateNode} */
    n.nodes_end
  ), t = !0), Sd(n, e && !t), ds(n, 0), Jt(n, _i);
  var r = n.transitions;
  if (r !== null)
    for (const a of r)
      a.stop();
  xd(n);
  var i = n.parent;
  i !== null && i.first !== null && wd(n), n.next = n.prev = n.teardown = n.ctx = n.deps = n.fn = n.nodes_start = n.nodes_end = n.ac = null;
}
function Wc(n, e) {
  for (; n !== null; ) {
    var t = n === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ma(n)
    );
    n.remove(), n = t;
  }
}
function wd(n) {
  var e = n.parent, t = n.prev, r = n.next;
  t !== null && (t.next = r), r !== null && (r.prev = t), e !== null && (e.first === n && (e.first = r), e.last === n && (e.last = t));
}
function Gr(n, e) {
  var t = [];
  Wo(n, t, !0), Td(t, () => {
    wt(n), e && e();
  });
}
function Td(n, e) {
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
function Ls(n) {
  Dd(n, !0);
}
function Dd(n, e) {
  if (n.f & Wn) {
    n.f ^= Wn, n.f & Xt || (Jt(n, pn), mi(n));
    for (var t = n.first; t !== null; ) {
      var r = t.next, i = (t.f & yi) !== 0 || (t.f & yr) !== 0;
      Dd(t, i ? e : !1), t = r;
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
function Ld(n) {
  Oe !== null && (Qt === null ? Qt = [n] : Qt.push(n));
}
let Kt = null, hn = 0, xn = null;
function jc(n) {
  xn = n;
}
let Rd = 1, Ca = 0, fi = Ca;
function hl(n) {
  fi = n;
}
let Or = !1;
function Od() {
  return ++Rd;
}
function Rs(n) {
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
        if (a = t[i], Rs(
          /** @type {Derived} */
          a
        ) && bd(
          /** @type {Derived} */
          a
        ), a.wv > n.wv)
          return !0;
    }
    (!r || Pe !== null && !Or) && Jt(n, Xt);
  }
  return !1;
}
function Md(n, e, t = !0) {
  var r = n.reactions;
  if (r !== null && !(Qt != null && Qt.includes(n)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a.f & tn ? Md(
        /** @type {Derived} */
        a,
        e,
        !1
      ) : e === a && (t ? Jt(a, pn) : a.f & Xt && Jt(a, Wr), mi(
        /** @type {Effect} */
        a
      ));
    }
}
function Fd(n) {
  var p;
  var e = Kt, t = hn, r = xn, i = Oe, a = Or, s = Qt, u = $e, l = Zn, c = fi, d = n.f;
  Kt = /** @type {null | Value[]} */
  null, hn = 0, xn = null, Or = (d & Ln) !== 0 && (Zn || !Gi || Oe === null), Oe = d & (yr | Ur) ? null : n, Qt = null, Yi(n.ctx), Zn = !1, fi = ++Ca, n.ac !== null && (ws(() => {
    n.ac.abort(Fi);
  }), n.ac = null);
  try {
    n.f |= so;
    var v = (
      /** @type {Function} */
      n.fn
    ), f = v(), h = n.deps;
    if (Kt !== null) {
      var g;
      if (ds(n, hn), h !== null && hn > 0)
        for (h.length = hn + Kt.length, g = 0; g < Kt.length; g++)
          h[hn + g] = Kt[g];
      else
        n.deps = h = Kt;
      if (!Or || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      d & tn && /** @type {import('#client').Derived} */
      n.reactions !== null)
        for (g = hn; g < h.length; g++)
          ((p = h[g]).reactions ?? (p.reactions = [])).push(n);
    } else h !== null && hn < h.length && (ds(n, hn), h.length = hn);
    if (Oa() && xn !== null && !Zn && h !== null && !(n.f & (tn | Wr | pn)))
      for (g = 0; g < /** @type {Source[]} */
      xn.length; g++)
        Md(
          xn[g],
          /** @type {Effect} */
          n
        );
    return i !== null && i !== n && (Ca++, xn !== null && (r === null ? r = xn : r.push(.../** @type {Source[]} */
    xn))), n.f & ci && (n.f ^= ci), f;
  } catch (_) {
    return cd(_);
  } finally {
    n.f ^= so, Kt = e, hn = t, xn = r, Oe = i, Or = a, Qt = s, Yi(u), Zn = l, fi = c;
  }
}
function Vc(n, e) {
  let t = e.reactions;
  if (t !== null) {
    var r = Xu.call(t, n);
    if (r !== -1) {
      var i = t.length - 1;
      i === 0 ? t = e.reactions = null : (t[r] = t[i], t.pop());
    }
  }
  t === null && e.f & tn && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Kt === null || !Kt.includes(e)) && (Jt(e, Wr), e.f & (Ln | os) || (e.f ^= os), pd(
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
      Vc(n, t[r]);
}
function Aa(n) {
  var e = n.f;
  if (!(e & _i)) {
    Jt(n, Xt);
    var t = Pe, r = Gi;
    Pe = n, Gi = !0;
    try {
      e & Ii ? Uc(n) : Sd(n), xd(n);
      var i = Fd(n);
      n.teardown = typeof i == "function" ? i : null, n.wv = Rd;
      var a;
      nd && fc && n.f & pn && n.deps;
    } finally {
      Gi = r, Pe = t;
    }
  }
}
async function Pd() {
  await Promise.resolve(), bc();
}
function o(n) {
  var e = n.f, t = (e & tn) !== 0;
  if (Oe !== null && !Zn) {
    var r = Pe !== null && (Pe.f & _i) !== 0;
    if (!r && !(Qt != null && Qt.includes(n))) {
      var i = Oe.deps;
      if (Oe.f & so)
        n.rv < Ca && (n.rv = Ca, Kt === null && i !== null && i[hn] === n ? hn++ : Kt === null ? Kt = [n] : (!Or || !Kt.includes(n)) && Kt.push(n));
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
      return (!(s.f & Xt) && s.reactions !== null || kd(s)) && (l = Ho(s)), kr.set(s, l), l;
    }
  } else if (t) {
    if (s = /** @type {Derived} */
    n, Mt != null && Mt.has(s))
      return Mt.get(s);
    Rs(s) && bd(s);
  }
  if (Mt != null && Mt.has(n))
    return Mt.get(n);
  if (n.f & ci)
    throw n.v;
  return n.v;
}
function kd(n) {
  if (n.v === Et) return !0;
  if (n.deps === null) return !1;
  for (const e of n.deps)
    if (kr.has(e) || e.f & tn && kd(
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
const zc = -7169;
function Jt(n, e) {
  n.f = n.f & zc | e;
}
function Xc(n) {
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
    const t = Cs(n);
    if (t !== Object.prototype && t !== Array.prototype && t !== Map.prototype && t !== Set.prototype && t !== Date.prototype) {
      const r = rd(t);
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
const Gd = /* @__PURE__ */ new Set(), go = /* @__PURE__ */ new Set();
function jo(n, e, t, r = {}) {
  function i(a) {
    if (r.capture || pa.call(e, a), !a.cancelBubble)
      return ws(() => t == null ? void 0 : t.call(this, a));
  }
  return n.startsWith("pointer") || n.startsWith("touch") || n === "wheel" ? br(() => {
    e.addEventListener(n, i, r);
  }) : e.addEventListener(n, i, r), i;
}
function Yc(n, e, t, r = {}) {
  var i = jo(e, n, t, r);
  return () => {
    n.removeEventListener(e, i, r);
  };
}
function Pt(n, e, t, r, i) {
  var a = { capture: r, passive: i }, s = jo(n, e, t, a);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && Ts(() => {
    e.removeEventListener(n, s, a);
  });
}
function It(n) {
  for (var e = 0; e < n.length; e++)
    Gd.add(n[e]);
  for (var t of go)
    t(n);
}
let gl = null;
function pa(n) {
  var x;
  var e = this, t = (
    /** @type {Node} */
    e.ownerDocument
  ), r = n.type, i = ((x = n.composedPath) == null ? void 0 : x.call(n)) || [], a = (
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
function Nd(n) {
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
    i === void 0 && (i = Nd(a ? n : "<!>" + n), t || (i = /** @type {Node} */
    /* @__PURE__ */ Qi(i)));
    var s = (
      /** @type {TemplateNode} */
      r || yd ? document.importNode(i, !0) : i.cloneNode(!0)
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
function qc(n, e, t = "svg") {
  var r = !n.startsWith("<!>"), i = `<${t}>${r ? n : "<!>" + n}</${t}>`, a;
  return () => {
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        Nd(i)
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
  return /* @__PURE__ */ qc(n, e, "svg");
}
function et(n = "") {
  {
    var e = jr(n + "");
    return Ji(e, e), e;
  }
}
function oe() {
  var n = document.createDocumentFragment(), e = document.createComment(""), t = jr();
  return n.append(e, t), Ji(e, t), n;
}
function E(n, e) {
  n !== null && n.before(
    /** @type {Node} */
    e
  );
}
function Kc(n) {
  return n.endsWith("capture") && n !== "gotpointercapture" && n !== "lostpointercapture";
}
const Qc = [
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
function Jc(n) {
  return Qc.includes(n);
}
const $c = {
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
function ef(n) {
  return n = n.toLowerCase(), $c[n] ?? n;
}
const tf = ["touchstart", "touchmove"];
function nf(n) {
  return tf.includes(n);
}
function Me(n, e) {
  var t = e == null ? "" : typeof e == "object" ? e + "" : e;
  t !== (n.__t ?? (n.__t = n.nodeValue)) && (n.__t = t, n.nodeValue = t + "");
}
function rf(n, e) {
  return af(n, e);
}
const Di = /* @__PURE__ */ new Map();
function af(n, { target: e, anchor: t, props: r = {}, events: i, context: a, intro: s = !0 }) {
  Rc();
  var u = /* @__PURE__ */ new Set(), l = (v) => {
    for (var f = 0; f < v.length; f++) {
      var h = v[f];
      if (!u.has(h)) {
        u.add(h);
        var g = nf(h);
        e.addEventListener(h, pa, { passive: g });
        var p = Di.get(h);
        p === void 0 ? (document.addEventListener(h, pa, { passive: g }), Di.set(h, 1)) : Di.set(h, p + 1);
      }
    }
  };
  l(Oo(Gd)), go.add(l);
  var c = void 0, d = Hc(() => {
    var v = t ?? e.appendChild(jr());
    return Cc(
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
  return sf.set(c, d), c;
}
let sf = /* @__PURE__ */ new WeakMap();
function _e(n, e, ...t) {
  var r = n, i = Ie, a;
  Vr(() => {
    i !== (i = e()) && (a && (wt(a), a = null), a = Vt(() => (
      /** @type {SnippetFn} */
      i(r, ...t)
    )));
  }, yi);
}
function it(n) {
  $e === null && Go(), na && $e.l !== null ? of($e).m.push(n) : xe(() => {
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
function of(n) {
  var e = (
    /** @type {ComponentContextLegacy} */
    n.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
function re(n, e, t = !1) {
  var r = n, i = null, a = null, s = Et, u = t ? yi : 0, l = !1;
  const c = (h, g = !0) => {
    l = !0, f(g, h);
  };
  var d = null;
  function v() {
    d !== null && (d.lastChild.remove(), r.before(d), d = null);
    var h = s ? i : a, g = s ? a : i;
    h && Ls(h), g && Gr(g, () => {
      s ? a = null : i = null;
    });
  }
  const f = (h, g) => {
    if (s !== (s = h)) {
      var p = Uo(), _ = r;
      if (p && (d = document.createDocumentFragment(), d.append(_ = jr())), s ? i ?? (i = g && Vt(() => g(_))) : a ?? (a = g && Vt(() => g(_))), p) {
        var A = (
          /** @type {Batch} */
          Ye
        ), x = s ? i : a, S = s ? a : i;
        x && A.skipped_effects.delete(x), S && A.skipped_effects.add(S), A.add_callback(v);
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
function Ir(n, e) {
  return e;
}
function lf(n, e, t) {
  for (var r = n.items, i = [], a = e.length, s = 0; s < a; s++)
    Wo(e[s].e, i, !0);
  var u = a > 0 && i.length === 0 && t !== null;
  if (u) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      t.parentNode
    );
    Oc(l), l.append(
      /** @type {Element} */
      t
    ), r.clear(), Xn(n, e[0].prev, e[a - 1].next);
  }
  Td(i, () => {
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
    df(
      p,
      g,
      u,
      f,
      s,
      i,
      e,
      r,
      t
    ), a !== null && (g.length === 0 ? d ? Ls(d) : d = Vt(() => a(s)) : d !== null && Gr(d, () => {
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
      var x, S, b, w;
      if (Uo()) {
        var I = /* @__PURE__ */ new Set(), y = (
          /** @type {Batch} */
          Ye
        );
        for (S = 0; S < A; S += 1) {
          b = g[S], w = r(b, S);
          var C = u.items.get(w) ?? f.get(w);
          C ? e & 3 && Zd(C, b, S, e) : (x = Hd(
            null,
            u,
            null,
            null,
            b,
            w,
            S,
            i,
            e,
            t,
            !0
          ), f.set(w, x)), I.add(w);
        }
        for (const [T, D] of u.items)
          I.has(T) || y.skipped_effects.add(D.e);
        y.add_callback(_);
      } else
        _();
      o(h);
    }
  });
}
function df(n, e, t, r, i, a, s, u, l) {
  var ae, L, ee, te;
  var c = (s & 8) !== 0, d = (s & 3) !== 0, v = e.length, f = t.items, h = t.first, g = h, p, _ = null, A, x = [], S = [], b, w, I, y;
  if (c)
    for (y = 0; y < v; y += 1)
      b = e[y], w = u(b, y), I = f.get(w), I !== void 0 && ((ae = I.a) == null || ae.measure(), (A ?? (A = /* @__PURE__ */ new Set())).add(I));
  for (y = 0; y < v; y += 1) {
    if (b = e[y], w = u(b, y), I = f.get(w), I === void 0) {
      var C = r.get(w);
      if (C !== void 0) {
        r.delete(w), f.set(w, C);
        var T = _ ? _.next : g;
        Xn(t, _, C), Xn(t, C, T), Ys(C, T, i), _ = C;
      } else {
        var D = g ? (
          /** @type {TemplateNode} */
          g.e.nodes_start
        ) : i;
        _ = Hd(
          D,
          t,
          _,
          _ === null ? t.first : _.next,
          b,
          w,
          y,
          a,
          s,
          l
        );
      }
      f.set(w, _), x = [], S = [], g = _.next;
      continue;
    }
    if (d && Zd(I, b, y, s), I.e.f & Wn && (Ls(I.e), c && ((L = I.a) == null || L.unfix(), (A ?? (A = /* @__PURE__ */ new Set())).delete(I))), I !== g) {
      if (p !== void 0 && p.has(I)) {
        if (x.length < S.length) {
          var j = S[0], B;
          _ = j.prev;
          var U = x[0], q = x[x.length - 1];
          for (B = 0; B < x.length; B += 1)
            Ys(x[B], j, i);
          for (B = 0; B < S.length; B += 1)
            p.delete(S[B]);
          Xn(t, U.prev, q.next), Xn(t, _, U), Xn(t, q, j), g = j, _ = q, y -= 1, x = [], S = [];
        } else
          p.delete(I), Ys(I, g, i), Xn(t, I.prev, I.next), Xn(t, I, _ === null ? t.first : _.next), Xn(t, _, I), _ = I;
        continue;
      }
      for (x = [], S = []; g !== null && g.k !== w; )
        g.e.f & Wn || (p ?? (p = /* @__PURE__ */ new Set())).add(g), S.push(g), g = g.next;
      if (g === null)
        continue;
      I = g;
    }
    x.push(I), _ = I, g = I.next;
  }
  if (g !== null || p !== void 0) {
    for (var N = p === void 0 ? [] : Oo(p); g !== null; )
      g.e.f & Wn || N.push(g), g = g.next;
    var F = N.length;
    if (F > 0) {
      var k = s & 4 && v === 0 ? i : null;
      if (c) {
        for (y = 0; y < F; y += 1)
          (ee = N[y].a) == null || ee.measure();
        for (y = 0; y < F; y += 1)
          (te = N[y].a) == null || te.fix();
      }
      lf(t, N, k);
    }
  }
  c && br(() => {
    var fe;
    if (A !== void 0)
      for (I of A)
        (fe = I.a) == null || fe.apply();
  }), n.first = t.first && t.first.e, n.last = _ && _.e;
  for (var J of r.values())
    wt(J.e);
  r.clear();
}
function Zd(n, e, t, r) {
  r & 1 && Ki(n.v, e), r & 2 ? Ki(
    /** @type {Value<number>} */
    n.i,
    t
  ) : n.i = t;
}
function Hd(n, e, t, r, i, a, s, u, l, c, d) {
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
    return _.e = Vt(() => u(
      /** @type {Node} */
      n,
      g,
      p,
      c
    ), cc), _.e.prev = t && t.e, _.e.next = r && r.e, t === null ? d || (e.first = _) : (t.next = _, t.e.next = _.e), r !== null && (r.prev = _, r.e.prev = _.e), _;
  } finally {
    vi = v;
  }
}
function Ys(n, e, t) {
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
function uf(n, e, t, r, i) {
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
        c && (s = document.createDocumentFragment(), s.append(d = jr()), a && Ye.skipped_effects.add(a)), u = Vt(() => t(d, i));
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
    var h = f === "svg" ? Vu : null;
    if (f !== s) {
      var g = vi;
      ml(v), d && (f === null ? Gr(d, () => {
        d = null, u = null;
      }) : f === u ? Ls(d) : wt(d)), f && f !== u && (d = Vt(() => {
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
      Ds(() => {
        var s = t();
        Xc(s), i && No(a, s) && (a = s, r.update(s));
      }), i = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function cf(n, e) {
  var t = void 0, r;
  Vr(() => {
    t !== (t = e()) && (r && (wt(r), r = null), t && (r = Vt(() => {
      Fa(() => (
        /** @type {(node: Element) => void} */
        t(n)
      ));
    })));
  });
}
function Bd(n) {
  var e, t, r = "";
  if (typeof n == "string" || typeof n == "number") r += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var i = n.length;
    for (e = 0; e < i; e++) n[e] && (t = Bd(n[e])) && (r && (r += " "), r += t);
  } else for (t in n) n[t] && (r && (r += " "), r += t);
  return r;
}
function ff() {
  for (var n, e, t = 0, r = "", i = arguments.length; t < i; t++) (n = arguments[t]) && (e = Bd(n)) && (r && (r += " "), r += e);
  return r;
}
function Ud(n) {
  return typeof n == "object" ? ff(n) : n ?? "";
}
const pl = [...` 	
\r\f \v\uFEFF`];
function vf(n, e, t) {
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
function bl(n, e = !1) {
  var t = e ? " !important;" : ";", r = "";
  for (var i in n) {
    var a = n[i];
    a != null && a !== "" && (r += " " + i + ": " + a + t);
  }
  return r;
}
function qs(n) {
  return n[0] !== "-" || n[1] !== "-" ? n.toLowerCase() : n;
}
function hf(n, e) {
  if (e) {
    var t = "", r, i;
    if (Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, n) {
      n = String(n).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, s = 0, u = !1, l = [];
      r && l.push(...Object.keys(r).map(qs)), i && l.push(...Object.keys(i).map(qs));
      var c = 0, d = -1;
      const p = n.length;
      for (var v = 0; v < p; v++) {
        var f = n[v];
        if (u ? f === "/" && n[v - 1] === "*" && (u = !1) : a ? a === f && (a = !1) : f === "/" && n[v + 1] === "*" ? u = !0 : f === '"' || f === "'" ? a = f : f === "(" ? s++ : f === ")" && s--, !u && a === !1 && s === 0) {
          if (f === ":" && d === -1)
            d = v;
          else if (f === ";" || v === p - 1) {
            if (d !== -1) {
              var h = qs(n.substring(c, d).trim());
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
    return r && (t += bl(r)), i && (t += bl(i, !0)), t = t.trim(), t === "" ? null : t;
  }
  return n == null ? null : String(n);
}
function _r(n, e, t, r, i, a) {
  var s = n.__className;
  if (s !== t || s === void 0) {
    var u = vf(t, r, a);
    u == null ? n.removeAttribute("class") : e ? n.className = u : n.setAttribute("class", u), n.__className = t;
  } else if (a && i !== a)
    for (var l in a) {
      var c = !!a[l];
      (i == null || c !== !!i[l]) && n.classList.toggle(l, c);
    }
  return a;
}
function Ks(n, e = {}, t, r) {
  for (var i in t) {
    var a = t[i];
    e[i] !== a && (t[i] == null ? n.style.removeProperty(i) : n.style.setProperty(i, a, r));
  }
}
function tt(n, e, t, r) {
  var i = n.__style;
  if (i !== e) {
    var a = hf(e, r);
    a == null ? n.removeAttribute("style") : n.style.cssText = a, n.__style = e;
  } else r && (Array.isArray(r) ? (Ks(n, t == null ? void 0 : t[0], r[0]), Ks(n, t == null ? void 0 : t[1], r[1], "important")) : Ks(n, t, r));
  return r;
}
function po(n, e, t = !1) {
  if (n.multiple) {
    if (e == null)
      return;
    if (!Ra(e))
      return dc();
    for (var r of n.options)
      r.selected = e.includes(Il(r));
    return;
  }
  for (r of n.options) {
    var i = Il(r);
    if (Lc(i, e)) {
      r.selected = !0;
      return;
    }
  }
  (!t || e !== void 0) && (n.selectedIndex = -1);
}
function gf(n) {
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
  }), Ts(() => {
    e.disconnect();
  });
}
function Il(n) {
  return "__value" in n ? n.__value : n.value;
}
const ca = Symbol("class"), fa = Symbol("style"), Wd = Symbol("is custom element"), jd = Symbol("is html");
function _l(n, e) {
  var t = Vo(n);
  t.value === (t.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  n.value === e && (e !== 0 || n.nodeName !== "PROGRESS") || (n.value = e ?? "");
}
function mf(n, e) {
  e ? n.hasAttribute("selected") || n.setAttribute("selected", "") : n.removeAttribute("selected");
}
function Tt(n, e, t, r) {
  var i = Vo(n);
  i[e] !== (i[e] = t) && (e === "loading" && (n[Ju] = t), t == null ? n.removeAttribute(e) : typeof t != "string" && Vd(n).includes(e) ? n[e] = t : n.setAttribute(e, t));
}
function pf(n, e, t, r, i = !1, a = !1) {
  var s = Vo(n), u = s[Wd], l = !s[jd], c = e || {}, d = n.tagName === "OPTION";
  for (var v in e)
    v in t || (t[v] = null);
  t.class ? t.class = Ud(t.class) : t[ca] && (t.class = null), t[fa] && (t.style ?? (t.style = null));
  var f = Vd(n);
  for (const S in t) {
    let b = t[S];
    if (d && S === "value" && b == null) {
      n.value = n.__value = "", c[S] = b;
      continue;
    }
    if (S === "class") {
      var h = n.namespaceURI === "http://www.w3.org/1999/xhtml";
      _r(n, h, b, r, e == null ? void 0 : e[ca], t[ca]), c[S] = b, c[ca] = t[ca];
      continue;
    }
    if (S === "style") {
      tt(n, b, e == null ? void 0 : e[fa], t[fa]), c[S] = b, c[fa] = t[fa];
      continue;
    }
    var g = c[S];
    if (!(b === g && !(b === void 0 && n.hasAttribute(S)))) {
      c[S] = b;
      var p = S[0] + S[1];
      if (p !== "$$")
        if (p === "on") {
          const w = {}, I = "$$" + S;
          let y = S.slice(2);
          var _ = Jc(y);
          if (Kc(y) && (y = y.slice(0, -7), w.capture = !0), !_ && g) {
            if (b != null) continue;
            n.removeEventListener(y, c[I], w), c[I] = null;
          }
          if (b != null)
            if (_)
              n[`__${y}`] = b, It([y]);
            else {
              let C = function(T) {
                c[S].call(this, T);
              };
              c[I] = jo(y, n, C, w);
            }
          else _ && (n[`__${y}`] = void 0);
        } else if (S === "style")
          Tt(n, S, b);
        else if (S === "autofocus")
          Mc(
            /** @type {HTMLElement} */
            n,
            !!b
          );
        else if (!u && (S === "__value" || S === "value" && b != null))
          n.value = n.__value = b;
        else if (S === "selected" && d)
          mf(
            /** @type {HTMLOptionElement} */
            n,
            b
          );
        else {
          var A = S;
          l || (A = ef(A));
          var x = A === "defaultValue" || A === "defaultChecked";
          if (b == null && !u && !x)
            if (s[S] = null, A === "value" || A === "checked") {
              let w = (
                /** @type {HTMLInputElement} */
                n
              );
              const I = e === void 0;
              if (A === "value") {
                let y = w.defaultValue;
                w.removeAttribute(A), w.defaultValue = y, w.value = w.__value = I ? y : null;
              } else {
                let y = w.defaultChecked;
                w.removeAttribute(A), w.defaultChecked = y, w.checked = I ? y : !1;
              }
            } else
              n.removeAttribute(S);
          else x || f.includes(A) && (u || typeof b != "string") ? (n[A] = b, A in s && (s[A] = Et)) : typeof b != "function" && Tt(n, A, b);
        }
    }
  }
  return c;
}
function He(n, e, t = [], r = [], i, a = !1, s = !1) {
  md(t, r, (u) => {
    var l = void 0, c = {}, d = n.nodeName === "SELECT", v = !1;
    if (Vr(() => {
      var h = e(...u.map(o)), g = pf(
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
        _.description === zu && (!l || p !== l[_]) && (c[_] && wt(c[_]), c[_] = Vt(() => cf(n, () => p))), g[_] = p;
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
        ), gf(f);
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
      [Wd]: n.nodeName.includes("-"),
      [jd]: n.namespaceURI === ju
    })
  );
}
var yl = /* @__PURE__ */ new Map();
function Vd(n) {
  var e = n.getAttribute("is") || n.nodeName, t = yl.get(e);
  if (t) return t;
  yl.set(e, t = []);
  for (var r, i = n, a = Element.prototype; a !== i; ) {
    r = rd(i);
    for (var s in r)
      r[s].set && t.push(s);
    i = Cs(i);
  }
  return t;
}
const bf = () => performance.now(), gr = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (n) => requestAnimationFrame(n)
  ),
  now: () => bf(),
  tasks: /* @__PURE__ */ new Set()
};
function zd() {
  const n = gr.now();
  gr.tasks.forEach((e) => {
    e.c(n) || (gr.tasks.delete(e), e.f());
  }), gr.tasks.size !== 0 && gr.tick(zd);
}
function If(n) {
  let e;
  return gr.tasks.size === 0 && gr.tick(zd), {
    promise: new Promise((t) => {
      gr.tasks.add(e = { c: n, f: t });
    }),
    abort() {
      gr.tasks.delete(e);
    }
  };
}
function _f(n) {
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
    const s = _f(i.trim());
    e[s] = a.trim();
  }
  return e;
}
const yf = (n) => n;
function Os(n, e, t) {
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
        s = Xd(this.element, l, void 0, 1, () => {
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
function Xd(n, e, t, r, i) {
  if (Mi(e)) {
    var a, s = !1;
    return br(() => {
      if (!s) {
        var p = e({ direction: "in" });
        a = Xd(n, p, t, r, i);
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
  const { delay: u = 0, css: l, tick: c, easing: d = yf } = e;
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
    ), x = [];
    if (A > 0) {
      var S = !1;
      if (l)
        for (var b = Math.ceil(A / 16.666666666666668), w = 0; w <= b; w += 1) {
          var I = p + _ * d(w / b), y = Cl(l(I, 1 - I));
          x.push(y), S || (S = y.overflow === "hidden");
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
    g = n.animate(x, { duration: A, fill: "forwards" }), g.onfinish = () => {
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
function Cf(n, e, t = e) {
  var r = /* @__PURE__ */ new WeakSet();
  Pc(n, "input", async (i) => {
    var a = i ? n.defaultValue : n.value;
    if (a = Qs(n) ? Js(a) : a, t(a), Ye !== null && r.add(Ye), await Pd(), a !== (a = e())) {
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
  zr(e) == null && n.value && (t(Qs(n) ? Js(n.value) : n.value), Ye !== null && r.add(Ye)), Ds(() => {
    var i = e();
    if (n === document.activeElement) {
      var a = (
        /** @type {Batch} */
        es ?? Ye
      );
      if (r.has(a))
        return;
    }
    Qs(n) && i === Js(n.value) || n.type === "date" && !i && !n.value || i !== n.value && (n.value = i ?? "");
  });
}
function Qs(n) {
  var e = n.type;
  return e === "number" || e === "range";
}
function Js(n) {
  return n === "" ? null : +n;
}
function Al(n, e) {
  return n === e || (n == null ? void 0 : n[rr]) === e;
}
function Se(n = {}, e, t, r) {
  return Fa(() => {
    var i, a;
    return Ds(() => {
      i = a, a = [], zr(() => {
        n !== t(...a) && (e(n, ...a), i && Al(t(...i), n) && e(null, ...i));
      });
    }), () => {
      br(() => {
        a && Al(t(...a), n) && e(null, ...a);
      });
    };
  }), n;
}
function Yd(n, e, t) {
  if (n == null)
    return e(void 0), Ie;
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
function jn(n, e = Ie) {
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
function Af(n) {
  let e;
  return Yd(n, (t) => e = t)(), e;
}
let Va = !1, bo = Symbol();
function bi(n, e, t) {
  const r = t[e] ?? (t[e] = {
    store: null,
    source: /* @__PURE__ */ Id(void 0),
    unsubscribe: Ie
  });
  if (r.store !== n && !(bo in t))
    if (r.unsubscribe(), r.store = n ?? null, n == null)
      r.source.v = void 0, r.unsubscribe = Ie;
    else {
      var i = !0;
      r.unsubscribe = Yd(n, (a) => {
        i ? r.source.v = a : H(r.source, a);
      }), i = !1;
    }
  return n && bo in t ? Af(n) : o(r.source);
}
function nr(n, e) {
  return n.set(e), e;
}
function Ei() {
  const n = {};
  function e() {
    Ts(() => {
      for (var t in n)
        n[t].unsubscribe();
      ss(n, bo, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [n, e];
}
function Ef(n) {
  var e = Va;
  try {
    return Va = !1, [n(), Va];
  } finally {
    Va = e;
  }
}
const xf = {
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
    xf
  );
}
const Sf = {
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
    if (e === rr || e === sd) return !1;
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
  return new Proxy({ props: n }, Sf);
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
    var v = rr in n || sd in n;
    d = ((S = Pr(n, e)) == null ? void 0 : S.set) ?? (v && e in n ? (b) => n[e] = b : void 0);
  }
  var f, h = !1;
  a ? [f, h] = Ef(() => (
    /** @type {V} */
    n[e]
  )) : f = /** @type {V} */
  n[e], f === void 0 && r !== void 0 && (f = c(), d && (i && ic(), d(f)));
  var g;
  if (i ? g = () => {
    var b = (
      /** @type {V} */
      n[e]
    );
    return b === void 0 ? c() : (l = !0, b);
  } : g = () => {
    var b = (
      /** @type {V} */
      n[e]
    );
    return b !== void 0 && (u = /** @type {V} */
    void 0), b === void 0 ? u : b;
  }, i && !(t & 4))
    return g;
  if (d) {
    var p = n.$$legacy;
    return (
      /** @type {() => V} */
      function(b, w) {
        return arguments.length > 0 ? ((!i || !w || p || h) && d(w ? g() : b), b) : g();
      }
    );
  }
  var _ = !1, A = (t & 1 ? Ss : Zo)(() => (_ = !1, g()));
  a && o(A);
  var x = (
    /** @type {Effect} */
    Pe
  );
  return (
    /** @type {() => V} */
    function(b, w) {
      if (arguments.length > 0) {
        const I = w ? o(A) : i && a ? Ee(b) : b;
        return H(A, I), _ = !0, u !== void 0 && (u = I), b;
      }
      return Ai && _ || x.f & _i ? A.v : o(A);
    }
  );
}
const wf = "5";
var td;
typeof window < "u" && ((td = window.__svelte ?? (window.__svelte = {})).v ?? (td.v = /* @__PURE__ */ new Set())).add(wf);
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
    t in a || (a[t] = /* @__PURE__ */ new Map()), a[t].set(r, Yc(e, t, r, i));
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
function Tf(n, e) {
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
function Df(n, e, t) {
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
var Io = function(n, e) {
  return Io = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
  }, Io(n, e);
};
function bn(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Io(n, e);
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
function Lf(n, e, t, r) {
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
function Rf(n, e) {
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
function Of(n, e, t) {
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
function Mf(n) {
  return n === void 0 && (n = window), Ff(n) ? { passive: !0 } : !1;
}
function Ff(n) {
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
const qd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: Mf
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
function Pf(n, e) {
  if (n.closest)
    return n.closest(e);
  for (var t = n; t; ) {
    if (Kd(t, e))
      return t;
    t = t.parentElement;
  }
  return null;
}
function Kd(n, e) {
  var t = n.matches || n.webkitMatchesSelector || n.msMatchesSelector;
  return t.call(n, e);
}
function kf(n) {
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
  closest: Pf,
  estimateScrollWidth: kf,
  matches: Kd
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
var Gf = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Nf = {
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
], Xa = [], Zf = (
  /** @class */
  function(n) {
    bn(e, n);
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
        return Gf;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Nf;
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
      i ? a = Df(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
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
var $s = "mdc-dom-focus-sentinel", Hf = (
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
const Bf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FocusTrap: Hf
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
const { applyPassive: Tl } = qd, { matches: Uf } = ka;
function Gn(n, { ripple: e = !0, surface: t = !1, unbounded: r = !1, disabled: i = !1, color: a, active: s, rippleElement: u, eventTarget: l, activeTarget: c, addClass: d = (g) => n.classList.add(g), removeClass: v = (g) => n.classList.remove(g), addStyle: f = (g, p) => n.style.setProperty(g, p), initPromise: h = Promise.resolve() } = {}) {
  let g, p = new ra(), _ = ye("SMUI:addLayoutListener"), A, x = s, S = l, b = c;
  function w() {
    t ? (d("mdc-ripple-surface"), a === "primary" ? (d("smui-ripple-surface--primary"), v("smui-ripple-surface--secondary")) : a === "secondary" ? (v("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : (v("smui-ripple-surface--primary"), v("smui-ripple-surface--secondary"))) : (v("mdc-ripple-surface"), v("smui-ripple-surface--primary"), v("smui-ripple-surface--secondary")), g && x !== s && (x = s, s ? g.activate() : s === !1 && g.deactivate()), e && !g ? (g = new Zf({
      addClass: d,
      browserSupportsCssVars: () => Tf(window),
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
      isSurfaceActive: () => s ?? Uf(c || n, ":active"),
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
    }), g && (S !== l || b !== c) && (S = l, b = c, g.destroy(), requestAnimationFrame(() => {
      g && (g.init(), g.setUnbounded(r));
    })), !e && r && d("mdc-ripple-upgraded--unbounded");
  }
  w(), _ && (A = _(I));
  function I() {
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
var Wf = /* @__PURE__ */ ft("<svg><!></svg>");
function Ms(n, e) {
  Ce(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "tag", 3, "div"), i = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
  const a = /* @__PURE__ */ de(() => [
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
      var g = Wf();
      He(g, () => ({ ...i }));
      var p = W(g);
      _e(p, () => e.children ?? Ie), Se(g, (_) => s = _, () => s), De(g, (_, A) => ie == null ? void 0 : ie(_, A), t), E(h, g);
    }, f = (h) => {
      var g = oe(), p = K(g);
      {
        var _ = (x) => {
          var S = oe(), b = K(S);
          mo(b, r, !1, (w, I) => {
            Se(w, (y) => s = y, () => s), De(w, (y, C) => ie == null ? void 0 : ie(y, C), t), He(w, () => ({ ...i }));
          }), E(x, S);
        }, A = (x) => {
          var S = oe(), b = K(S);
          mo(b, r, !1, (w, I) => {
            Se(w, (T) => s = T, () => s), De(w, (T, D) => ie == null ? void 0 : ie(T, D), t), He(w, () => ({ ...i }));
            var y = oe(), C = K(y);
            _e(C, () => e.children ?? Ie), E(I, y);
          }), E(x, S);
        };
        re(
          p,
          (x) => {
            o(a) ? x(_) : x(A, !1);
          },
          !0
        );
      }
      E(h, g);
    };
    re(d, (h) => {
      r() === "svg" ? h(v) : h(f, !1);
    });
  }
  return E(n, c), Ae(l);
}
function Ya(n, e) {
  Ce(e, !0);
  const [t, r] = Ei(), i = jn(e.value);
  ce(e.key, i), xe(() => {
    nr(i, e.value);
  }), Fn(() => {
    i.set(void 0);
  });
  var a = oe(), s = K(a);
  _e(s, () => e.children ?? Ie), E(n, a), Ae(), r();
}
var jf = /* @__PURE__ */ X('<div class="mdc-button__touch"></div>'), Vf = /* @__PURE__ */ X('<div class="mdc-button__ripple"></div> <!><!>', 1);
function Vn(n, e) {
  Ce(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "ripple", 3, !0), s = m(e, "color", 3, "primary"), u = m(e, "variant", 3, "text"), l = m(e, "touch", 3, !1), c = m(e, "action", 3, "close"), d = m(e, "defaultAction", 3, !1), v = m(e, "secondary", 3, !1), f = m(e, "component", 3, Ms), h = m(e, "tag", 19, () => e.href == null ? "button" : "a"), g = /* @__PURE__ */ Ve(e, [
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
  ]), p, _ = Ee({}), A = Ee({}), x = ye("SMUI:button:context");
  const S = /* @__PURE__ */ de(() => x === "dialog:action" && c() != null ? { "data-mdc-dialog-action": c() } : { action: c() }), b = /* @__PURE__ */ de(() => x === "dialog:action" && d() ? { "data-mdc-dialog-button-default": "" } : {}), w = /* @__PURE__ */ de(() => x === "banner" ? {} : { secondary: v() });
  let I = e.disabled;
  xe(() => {
    if (I !== e.disabled) {
      if (p) {
        const N = j();
        "blur" in N && N.blur();
      }
      I = g.disabled;
    }
  }), ce("SMUI:label:context", "button"), ce("SMUI:icon:context", "button");
  function y(N) {
    _[N] || (_[N] = !0);
  }
  function C(N) {
    (!(N in _) || _[N]) && (_[N] = !1);
  }
  function T(N, F) {
    A[N] != F && (F === "" || F == null ? delete A[N] : A[N] = F);
  }
  function D() {
    x === "banner" && Be(j(), v() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function j() {
    return p.getElement();
  }
  var B = { getElement: j }, U = oe(), q = K(U);
  {
    let N = /* @__PURE__ */ de(() => [
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
    ]), F = /* @__PURE__ */ de(() => Ze({
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
    })), k = /* @__PURE__ */ de(() => Object.entries(A).map(([J, ae]) => `${J}: ${ae};`).concat([i()]).join(" "));
    Pa(q, f, (J, ae) => {
      Se(
        ae(J, Ke(
          {
            get tag() {
              return h();
            },
            get use() {
              return o(N);
            },
            get class() {
              return o(F);
            },
            get style() {
              return o(k);
            }
          },
          () => o(S),
          () => o(b),
          () => o(w),
          {
            get href() {
              return e.href;
            }
          },
          () => g,
          {
            onclick: (L) => {
              var ee;
              D(), (ee = e.onclick) == null || ee.call(e, L);
            },
            children: (L, ee) => {
              var te = Vf(), fe = Q(K(te), 2);
              _e(fe, () => e.children ?? Ie);
              var ue = Q(fe);
              {
                var Z = (z) => {
                  var M = jf();
                  E(z, M);
                };
                re(ue, (z) => {
                  l() && z(Z);
                });
              }
              E(L, te);
            },
            $$slots: { default: !0 }
          }
        )),
        (L) => p = L,
        () => p
      );
    });
  }
  return E(n, U), Ae(B);
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
var zf = {
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
var Xf = (
  /** @class */
  function(n) {
    bn(e, n);
    function e(t) {
      var r = n.call(this, je(je({}, e.defaultAdapter), t)) || this;
      return r.shakeAnimationEndHandler = function() {
        r.handleShakeAnimationEnd();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return zf;
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
var Yf = (
  /** @class */
  function(n) {
    bn(e, n);
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
var qf = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Dl = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, Kf = {
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
var Qf = (
  /** @class */
  function(n) {
    bn(e, n);
    function e(t) {
      return n.call(this, je(je({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return qf;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Kf;
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
}, Jf = {
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
}, $f = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], ev = [
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
var Rl = ["mousedown", "touchstart"], Ol = ["click", "keydown"], tv = (
  /** @class */
  function(n) {
    bn(e, n);
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
        return Jf;
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
        return Ll;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var t = this.getNativeInput().type;
        return ev.indexOf(t) >= 0;
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
        return $f.indexOf(i) > -1 ? (r.styleValidity(!0), r.adapter.setLabelRequired(r.getNativeInput().required), !0) : !1;
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
var Ml = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, nv = {
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
var Fl = ["click", "keydown"], rv = (
  /** @class */
  function(n) {
    bn(e, n);
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
        return nv;
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
  }(In)
), iv = /* @__PURE__ */ X("<span><!></span>"), av = /* @__PURE__ */ X("<label><!></label>");
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
  const A = ye("SMUI:floating-label:mount"), x = ye("SMUI:floating-label:unmount");
  it(() => {
    H(
      d,
      new Xf({
        addClass: S,
        removeClass: b,
        getWidth: () => {
          var ee, te;
          const J = j(), ae = J.cloneNode(!0);
          (ee = J.parentNode) == null || ee.appendChild(ae), ae.classList.add("smui-floating-label--remove-transition"), ae.classList.add("smui-floating-label--force-size"), ae.classList.remove("mdc-floating-label--float-above");
          const L = ae.scrollWidth;
          return (te = J.parentNode) == null || te.removeChild(ae), L;
        },
        registerInteractionHandler: (J, ae) => v.on(j(), J, ae),
        deregisterInteractionHandler: (J, ae) => v.off(j(), J, ae)
      }),
      !0
    );
    const k = {
      get element() {
        return j();
      },
      addStyle: w,
      removeStyle: I
    };
    return A && A(k), o(d).init(), () => {
      var J;
      x && x(k), (J = o(d)) == null || J.destroy(), v.clear();
    };
  });
  function S(k) {
    f[k] || (f[k] = !0);
  }
  function b(k) {
    (!(k in f) || f[k]) && (f[k] = !1);
  }
  function w(k, J) {
    h[k] != J && (J === "" || J == null ? delete h[k] : h[k] = J);
  }
  function I(k) {
    k in h && delete h[k];
  }
  function y(k) {
    var J;
    (J = o(d)) == null || J.shake(k);
  }
  function C(k) {
    a(k);
  }
  function T(k) {
    s(k);
  }
  function D() {
    if (o(d) == null)
      throw new Error("Instance is undefined.");
    return o(d).getWidth();
  }
  function j() {
    return c;
  }
  var B = { shake: y, float: C, setRequired: T, getWidth: D, getElement: j }, U = oe(), q = K(U);
  {
    var N = (k) => {
      var J = iv();
      He(J, (L, ee) => ({ class: L, style: ee, ...l }), [
        () => Ze({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": s(),
          ...f,
          [r()]: !0
        }),
        () => Object.entries(h).map(([L, ee]) => `${L}: ${ee};`).concat([i()]).join(" ")
      ]);
      var ae = W(J);
      _e(ae, () => e.children ?? Ie), Se(J, (L) => c = L, () => c), De(J, (L, ee) => ie == null ? void 0 : ie(L, ee), t), E(k, J);
    }, F = (k) => {
      var J = av();
      He(
        J,
        (L, ee) => ({
          class: L,
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
          () => Object.entries(h).map(([L, ee]) => `${L}: ${ee};`).concat([i()]).join(" ")
        ]
      );
      var ae = W(J);
      _e(ae, () => e.children ?? Ie), Se(J, (L) => c = L, () => c), De(J, (L, ee) => ie == null ? void 0 : ie(L, ee), t), E(k, J);
    };
    re(q, (k) => {
      u() ? k(N) : k(F, !1);
    });
  }
  return E(n, U), Ae(B);
}
var sv = /* @__PURE__ */ X("<div></div>");
function Qd(n, e) {
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
  it(() => (H(
    l,
    new Yf({
      addClass: h,
      removeClass: g,
      hasClass: f,
      setStyle: p,
      registerEventHandler: (I, y) => c.on(S(), I, y),
      deregisterEventHandler: (I, y) => c.off(S(), I, y)
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
  function p(I, y) {
    v[I] != y && (y === "" || y == null ? delete v[I] : v[I] = y);
  }
  function _() {
    var I;
    (I = o(l)) == null || I.activate();
  }
  function A() {
    var I;
    (I = o(l)) == null || I.deactivate();
  }
  function x(I) {
    var y;
    (y = o(l)) == null || y.setRippleCenter(I);
  }
  function S() {
    return u;
  }
  var b = { activate: _, deactivate: A, setRippleCenter: x, getElement: S }, w = sv();
  return He(w, (I, y) => ({ class: I, style: y, ...s }), [
    () => Ze({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...d,
      [r()]: !0
    }),
    () => Object.entries(v).map(([I, y]) => `${I}: ${y};`).concat([i()]).join(" ")
  ]), Se(w, (I) => u = I, () => u), De(w, (I, y) => ie == null ? void 0 : ie(I, y), t), E(n, w), Ae(b);
}
var ov = /* @__PURE__ */ X('<div class="mdc-notched-outline__notch"><!></div>'), lv = /* @__PURE__ */ X('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function Jd(n, e) {
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
  }), ce("SMUI:floating-label:mount", (C) => {
    H(c, C, !0);
  }), ce("SMUI:floating-label:unmount", () => {
    H(c, void 0);
  }), it(() => (H(
    l,
    new Qf({
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
  function x() {
    var C;
    (C = o(l)) == null || C.closeNotch();
  }
  function S() {
    return u;
  }
  var b = { notch: A, closeNotch: x, getElement: S }, w = lv();
  He(w, (C) => ({ class: C, ...s }), [
    () => Ze({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": i(),
      "mdc-notched-outline--no-label": a(),
      ...d,
      [r()]: !0
    })
  ]);
  var I = Q(W(w), 2);
  {
    var y = (C) => {
      var T = ov(), D = W(T);
      _e(D, () => e.children ?? Ie), ve((j) => tt(T, j), [
        () => Object.entries(v).map(([j, B]) => `${j}: ${B};`).join(" ")
      ]), E(C, T);
    };
    re(I, (C) => {
      a() || C(y);
    });
  }
  return Se(w, (C) => u = C, () => u), De(w, (C, T) => ie == null ? void 0 : ie(C, T), t), E(n, w), Ae(b);
}
function ia(n, e) {
  Ce(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "component", 3, Ms), a = m(e, "tag", 3, "div"), s = m(e, "_smuiClass", 3, ""), u = m(e, "_smuiClassMap", 23, () => ({})), l = m(e, "_smuiContexts", 19, () => ({})), c = m(e, "_smuiProps", 19, () => ({})), d = /* @__PURE__ */ Ve(e, [
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
  Object.entries(u()).forEach(([A, x]) => {
    const S = ye(x);
    S && "subscribe" in S && f.push(S.subscribe((b) => {
      u()[A] = b;
    }));
  });
  for (let A in l())
    l().hasOwnProperty(A) && ce(A, l()[A]);
  Fn(() => {
    for (const A of f)
      A();
  });
  function h() {
    return v.getElement();
  }
  var g = { getElement: h }, p = oe(), _ = K(p);
  {
    let A = /* @__PURE__ */ de(() => Ze({
      [s()]: !0,
      ...u(),
      [r()]: !0
    }));
    Pa(_, i, (x, S) => {
      Se(
        S(x, Ke(
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
            children: (b, w) => {
              var I = oe(), y = K(I);
              _e(y, () => e.children ?? Ie), E(b, I);
            },
            $$slots: { default: !0 }
          }
        )),
        (b) => v = b,
        () => v
      );
    });
  }
  return E(n, p), Ae(g);
}
function dv(n, e) {
  Ce(e, !0);
  let t = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Se(
    ia(n, Ke({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => t, {
      children: (s, u) => {
        var l = oe(), c = K(l);
        _e(c, () => e.children ?? Ie), E(s, l);
      },
      $$slots: { default: !0 }
    })),
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
  ), Ae(a);
}
function cv(n, e) {
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
          var l = oe(), c = K(l);
          _e(c, () => e.children ?? Ie), E(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Ae(a);
}
var fv = /* @__PURE__ */ X("<input/>");
function vv(n, e) {
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
  function x(N) {
    return N === "" ? Number.NaN : +N;
  }
  function S(N) {
    if (i() === "file") {
      u(N.currentTarget.files);
      return;
    }
    if (N.currentTarget.value === "" && f()) {
      s(null);
      return;
    }
    if (N.currentTarget.value === "" && h()) {
      s(void 0);
      return;
    }
    switch (i()) {
      case "number":
      case "range":
        s(x(N.currentTarget.value));
        break;
      default:
        s(N.currentTarget.value);
        break;
    }
  }
  function b(N) {
    (i() === "file" || i() === "range") && S(N), l(!0), d() && c(D().matches(":invalid"));
  }
  function w(N) {
    return N in _ ? _[N] ?? null : D().getAttribute(N);
  }
  function I(N, F) {
    _[N] !== F && (_[N] = F);
  }
  function y(N) {
    (!(N in _) || _[N] != null) && (_[N] = void 0);
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
  var j = { getAttr: w, addAttr: I, removeAttr: y, focus: C, blur: T, getElement: D }, B = fv(), U = (N) => {
    var F;
    i() !== "file" && S(N), (F = e.oninput) == null || F.call(e, N);
  }, q = (N) => {
    var F;
    b(N), (F = e.onchange) == null || F.call(e, N);
  };
  return He(
    B,
    (N) => ({
      class: N,
      type: i(),
      placeholder: a(),
      ...A,
      ..._,
      ...g,
      oninput: U,
      onchange: q
    }),
    [
      () => Ze({ "mdc-text-field__input": !0, [r()]: !0 })
    ],
    void 0,
    void 0,
    !0
  ), Se(B, (N) => p = N, () => p), De(B, (N, F) => ie == null ? void 0 : ie(N, F), t), E(n, B), Ae(j);
}
var hv = /* @__PURE__ */ X("<textarea></textarea>");
function gv(n, e) {
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
    l() && c() && u(b().matches(":invalid"));
  });
  function g() {
    s(!0), l() && u(b().matches(":invalid"));
  }
  function p(C) {
    return C in h ? h[C] ?? null : b().getAttribute(C);
  }
  function _(C, T) {
    h[C] !== T && (h[C] = T);
  }
  function A(C) {
    (!(C in h) || h[C] != null) && (h[C] = void 0);
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
  var w = { getAttr: p, addAttr: _, removeAttr: A, focus: x, blur: S, getElement: b }, I = hv(), y = (C) => {
    var T;
    g(), (T = e.onchange) == null || T.call(e, C);
  };
  return He(
    I,
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
  ), Se(I, (C) => f = C, () => f), De(I, (C, T) => ie == null ? void 0 : ie(C, T), t), Fa(() => Cf(I, a)), E(n, I), Ae(w);
}
var mv = /* @__PURE__ */ X('<span class="mdc-text-field__ripple"></span>'), pv = /* @__PURE__ */ X("<!> <!>", 1), bv = /* @__PURE__ */ X("<span><!> <!></span>"), Iv = /* @__PURE__ */ X("<!> <!> <!>", 1), _v = /* @__PURE__ */ X("<label><!> <!> <!> <!> <!> <!> <!></label>"), yv = /* @__PURE__ */ X("<div><!> <!> <!> <!> <!></div>"), Cv = /* @__PURE__ */ X("<!> <!>", 1);
function pr(n, e) {
  Ce(e, !0);
  const { applyPassive: t } = qd;
  let r = () => {
  };
  function i(P) {
    return P === r;
  }
  let a = m(e, "use", 19, () => []), s = m(e, "class", 3, ""), u = m(e, "style", 3, ""), l = m(e, "ripple", 3, !0), c = m(e, "disabled", 3, !1), d = m(e, "required", 3, !1), v = m(e, "textarea", 3, !1), f = m(e, "variant", 19, () => v() ? "outlined" : "standard"), h = m(e, "noLabel", 3, !1), g = m(e, "type", 3, "text"), p = m(e, "value", 15), _ = m(e, "files", 15, r), A = m(e, "invalid", 15, r), x = m(e, "updateInvalid", 19, () => i(A())), S = m(e, "initialInvalid", 3, !1), b = m(e, "dirty", 15, !1), w = m(e, "validateOnValueChange", 19, x), I = m(e, "useNativeValidation", 19, x), y = m(e, "withLeadingIcon", 3, r), C = m(e, "withTrailingIcon", 3, r), T = m(e, "input", 7), D = m(e, "floatingLabel", 7), j = m(e, "lineRipple", 7), B = m(e, "notchedOutline", 7), U = /* @__PURE__ */ Ve(e, [
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
  const q = p() !== void 0 || p() === void 0 && e.input$emptyValueUndefined || !i(_());
  i(_()) && _(null), i(A()) && A(!1);
  let N, F = /* @__PURE__ */ le(void 0), k = new ra(), J = Ee({}), ae = Ee({}), L = /* @__PURE__ */ le(void 0), ee = /* @__PURE__ */ le(!1), te = /* @__PURE__ */ le(Ee(S())), fe = ye("SMUI:addLayoutListener"), ue, Z, z = new Promise((P) => Z = P), M, $, Y, me;
  const be = /* @__PURE__ */ de(() => T() && T().getElement());
  xe(() => {
    (b() || o(te) || !x()) && o(F) && o(F).isValid() !== !A() && (x() ? A(!o(F).isValid()) : o(F).setValid(!A()));
  }), xe(() => {
    o(F) && o(F).getValidateOnValueChange() !== w() && o(F).setValidateOnValueChange(i(w()) ? !1 : w());
  }), xe(() => {
    o(F) && o(F).setUseNativeValidation(i(I()) ? !0 : I());
  }), xe(() => {
    o(F) && o(F).setDisabled(c());
  });
  let Ne = p();
  xe(() => {
    if (o(F) && q && Ne !== p()) {
      Ne = p();
      const P = `${p() == null ? "" : p()}`;
      o(F).getValue() !== P && o(F).setValue(P);
    }
  }), fe && (ue = fe(O)), ce("SMUI:textfield:leading-icon:mount", (P) => {
    M = P;
  }), ce("SMUI:textfield:leading-icon:unmount", () => {
    M = void 0;
  }), ce("SMUI:textfield:trailing-icon:mount", (P) => {
    $ = P;
  }), ce("SMUI:textfield:trailing-icon:unmount", () => {
    $ = void 0;
  }), ce("SMUI:textfield:helper-text:id", (P) => {
    H(L, P, !0);
  }), ce("SMUI:textfield:helper-text:mount", (P) => {
    Y = P;
  }), ce("SMUI:textfield:helper-text:unmount", () => {
    H(L, void 0), Y = void 0;
  }), ce("SMUI:textfield:character-counter:mount", (P) => {
    me = P;
  }), ce("SMUI:textfield:character-counter:unmount", () => {
    me = void 0;
  }), it(() => {
    var P;
    if (H(
      F,
      new tv(
        {
          // getRootAdapterMethods_
          addClass: qe,
          removeClass: Re,
          hasClass: nt,
          registerTextFieldInteractionHandler: (ne, Te) => k.on(V(), ne, Te),
          deregisterTextFieldInteractionHandler: (ne, Te) => k.off(V(), ne, Te),
          registerValidationAttributeChangeHandler: (ne) => {
            const Te = (Zt) => Zt.map((an) => an.attributeName).filter((an) => an), ot = new MutationObserver((Zt) => {
              I() && ne(Te(Zt));
            }), mt = { attributes: !0 };
            return T() && ot.observe(T().getElement(), mt), ot;
          },
          deregisterValidationAttributeChangeHandler: (ne) => {
            ne.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var ne;
            return ((ne = T()) == null ? void 0 : ne.getElement()) ?? null;
          },
          setInputAttr: (ne, Te) => {
            var ot;
            (ot = T()) == null || ot.addAttr(ne, Te);
          },
          removeInputAttr: (ne) => {
            var Te;
            (Te = T()) == null || Te.removeAttr(ne);
          },
          isFocused: () => {
            var ne;
            return document.activeElement === ((ne = T()) == null ? void 0 : ne.getElement());
          },
          registerInputInteractionHandler: (ne, Te) => {
            var mt;
            const ot = (mt = T()) == null ? void 0 : mt.getElement();
            if (ot) {
              const Zt = t();
              k.on(ot, ne, Te, typeof Zt == "boolean" ? { capture: Zt } : Zt);
            }
          },
          deregisterInputInteractionHandler: (ne, Te) => {
            var mt;
            const ot = (mt = T()) == null ? void 0 : mt.getElement();
            ot && k.off(ot, ne, Te);
          },
          // getLabelAdapterMethods_
          floatLabel: (ne) => D() && D().float(ne),
          getLabelWidth: () => D() ? D().getWidth() : 0,
          hasLabel: () => !!D(),
          shakeLabel: (ne) => D() && D().shake(ne),
          setLabelRequired: (ne) => D() && D().setRequired(ne),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => j() && j().activate(),
          deactivateLineRipple: () => j() && j().deactivate(),
          setLineRippleTransformOrigin: (ne) => j() && j().setRippleCenter(ne),
          // getOutlineAdapterMethods_
          closeOutline: () => B() && B().closeNotch(),
          hasOutline: () => !!B(),
          notchOutline: (ne) => B() && B().notch(ne)
        },
        {
          get helperText() {
            return Y;
          },
          get characterCounter() {
            return me;
          },
          get leadingIcon() {
            return M;
          },
          get trailingIcon() {
            return $;
          }
        }
      ),
      !0
    ), q) {
      if (T() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (P = o(F)) == null || P.init();
    } else
      Pd().then(() => {
        var ne;
        if (T() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (ne = o(F)) == null || ne.init();
      });
    return Z(), () => {
      var ne;
      (ne = o(F)) == null || ne.destroy(), k.clear();
    };
  }), Fn(() => {
    ue && ue();
  });
  function nt(P) {
    return P in J ? J[P] ?? null : V().classList.contains(P);
  }
  function qe(P) {
    J[P] || (J[P] = !0);
  }
  function Re(P) {
    (!(P in J) || J[P]) && (J[P] = !1);
  }
  function st(P, ne) {
    ae[P] != ne && (ne === "" || ne == null ? delete ae[P] : ae[P] = ne);
  }
  function kt() {
    var P;
    (P = T()) == null || P.focus();
  }
  function Gt() {
    var P;
    (P = T()) == null || P.blur();
  }
  function O() {
    if (o(F)) {
      const P = o(F).shouldFloat;
      o(F).notchOutline(P);
    }
  }
  function V() {
    return N;
  }
  var he = { focus: kt, blur: Gt, layout: O, getElement: V }, Fe = Cv(), Nt = K(Fe);
  {
    var vn = (P) => {
      var ne = _v();
      He(ne, (Ge, Qe, ze) => ({ class: Ge, style: Qe, for: void 0, ...ze }), [
        () => Ze({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": c(),
          "mdc-text-field--textarea": v(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !v(),
          "mdc-text-field--no-label": h() || e.label == null,
          "mdc-text-field--label-floating": o(ee) || p() != null && p() !== "",
          "mdc-text-field--with-leading-icon": i(y()) ? e.leadingIcon : y(),
          "mdc-text-field--with-trailing-icon": i(C()) ? e.trailingIcon : C(),
          "mdc-text-field--with-internal-counter": v() && e.internalCounter,
          "mdc-text-field--invalid": A(),
          ...J,
          [s()]: !0
        }),
        () => Object.entries(ae).map(([Ge, Qe]) => `${Ge}: ${Qe};`).concat([u()]).join(" "),
        () => Ea(U, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Te = W(ne);
      {
        var ot = (Ge) => {
          var Qe = pv(), ze = K(Qe);
          {
            var Bt = (_t) => {
              var Lt = mv();
              E(_t, Lt);
            };
            re(ze, (_t) => {
              f() === "filled" && _t(Bt);
            });
          }
          var Pn = Q(ze, 2);
          {
            var Je = (_t) => {
              {
                let Lt = /* @__PURE__ */ de(() => o(ee) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), We = /* @__PURE__ */ de(() => dt(U, "label$"));
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
                        var _n = oe(), yt = K(_n);
                        {
                          var Ut = (qt) => {
                          }, yn = (qt) => {
                            var Yr = oe(), Cn = K(Yr);
                            {
                              var Er = (An) => {
                                var lr = et();
                                ve(() => Me(lr, e.label)), E(An, lr);
                              }, sa = (An) => {
                                var lr = oe(), zn = K(lr);
                                _e(zn, () => e.label), E(An, lr);
                              };
                              re(
                                Cn,
                                (An) => {
                                  typeof e.label == "string" ? An(Er) : An(sa, !1);
                                },
                                !0
                              );
                            }
                            E(qt, Yr);
                          };
                          re(yt, (qt) => {
                            e.label == null ? qt(Ut) : qt(yn, !1);
                          });
                        }
                        E(Rt, _n);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (Rt) => D(Rt),
                  () => D()
                );
              }
            };
            re(Pn, (_t) => {
              !h() && e.label != null && _t(Je);
            });
          }
          E(Ge, Qe);
        };
        re(Te, (Ge) => {
          !v() && f() !== "outlined" && Ge(ot);
        });
      }
      var mt = Q(Te, 2);
      {
        var Zt = (Ge) => {
          {
            let Qe = /* @__PURE__ */ de(() => h() || e.label == null), ze = /* @__PURE__ */ de(() => dt(U, "outline$"));
            Se(
              Jd(Ge, Ke(
                {
                  get noLabel() {
                    return o(Qe);
                  }
                },
                () => o(ze),
                {
                  children: (Bt, Pn) => {
                    var Je = oe(), _t = K(Je);
                    {
                      var Lt = (We) => {
                        {
                          let Rt = /* @__PURE__ */ de(() => o(ee) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), or = /* @__PURE__ */ de(() => dt(U, "label$"));
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
                                  var Ut = oe(), yn = K(Ut);
                                  {
                                    var qt = (Cn) => {
                                    }, Yr = (Cn) => {
                                      var Er = oe(), sa = K(Er);
                                      {
                                        var An = (zn) => {
                                          var qr = et();
                                          ve(() => Me(qr, e.label)), E(zn, qr);
                                        }, lr = (zn) => {
                                          var qr = oe(), js = K(qr);
                                          _e(js, () => e.label), E(zn, qr);
                                        };
                                        re(
                                          sa,
                                          (zn) => {
                                            typeof e.label == "string" ? zn(An) : zn(lr, !1);
                                          },
                                          !0
                                        );
                                      }
                                      E(Cn, Er);
                                    };
                                    re(yn, (Cn) => {
                                      e.label == null ? Cn(qt) : Cn(Yr, !1);
                                    });
                                  }
                                  E(_n, Ut);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (_n) => D(_n),
                            () => D()
                          );
                        }
                      };
                      re(_t, (We) => {
                        !h() && e.label != null && We(Lt);
                      });
                    }
                    E(Bt, Je);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (Bt) => B(Bt),
              () => B()
            );
          }
        };
        re(mt, (Ge) => {
          (v() || f() === "outlined") && Ge(Zt);
        });
      }
      var an = Q(mt, 2);
      Ya(an, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (Ge, Qe) => {
          var ze = oe(), Bt = K(ze);
          _e(Bt, () => e.leadingIcon ?? Ie), E(Ge, ze);
        },
        $$slots: { default: !0 }
      });
      var xi = Q(an, 2);
      _e(xi, () => e.children ?? Ie);
      var ut = Q(xi, 2);
      {
        var Ht = (Ge) => {
          var Qe = bv(), ze = W(Qe);
          {
            let Pn = /* @__PURE__ */ de(() => dt(U, "input$"));
            Se(
              gv(ze, Ke(
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
                    return o(te);
                  },
                  get "aria-controls"() {
                    return o(L);
                  },
                  get "aria-describedby"() {
                    return o(L);
                  }
                },
                () => o(Pn),
                {
                  onblur: (Je) => {
                    var _t;
                    H(ee, !1), H(te, !0), Be(V(), "blur", Je), (_t = e.input$onblur) == null || _t.call(e, Je);
                  },
                  onfocus: (Je) => {
                    var _t;
                    H(ee, !0), Be(V(), "focus", Je), (_t = e.input$onfocus) == null || _t.call(e, Je);
                  },
                  get value() {
                    return p();
                  },
                  set value(Je) {
                    p(Je);
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
              (Je) => T(Je),
              () => T()
            );
          }
          var Bt = Q(ze, 2);
          _e(Bt, () => e.internalCounter ?? Ie), ve((Pn) => _r(Qe, 1, Pn), [
            () => Ud(Ze({
              "mdc-text-field__resizer": !("input$resizable" in U) || e.input$resizable
            }))
          ]), E(Ge, Qe);
        }, sn = (Ge) => {
          var Qe = Iv(), ze = K(Qe);
          {
            var Bt = (Lt) => {
              var We = oe(), Rt = K(We);
              {
                var or = (yt) => {
                  uv(yt, {
                    children: (Ut, yn) => {
                      var qt = et();
                      ve(() => Me(qt, e.prefix)), E(Ut, qt);
                    },
                    $$slots: { default: !0 }
                  });
                }, _n = (yt) => {
                  var Ut = oe(), yn = K(Ut);
                  _e(yn, () => e.prefix ?? Ie), E(yt, Ut);
                };
                re(Rt, (yt) => {
                  typeof e.prefix == "string" ? yt(or) : yt(_n, !1);
                });
              }
              E(Lt, We);
            };
            re(ze, (Lt) => {
              e.prefix != null && Lt(Bt);
            });
          }
          var Pn = Q(ze, 2);
          {
            let Lt = /* @__PURE__ */ de(() => dt(U, "input$"));
            Se(
              vv(Pn, Ke(
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
                    return o(te);
                  },
                  get "aria-controls"() {
                    return o(L);
                  },
                  get "aria-describedby"() {
                    return o(L);
                  }
                },
                () => h() && e.label != null && typeof e.label == "string" ? { placeholder: e.label } : {},
                () => o(Lt),
                {
                  onblur: (We) => {
                    var Rt;
                    H(ee, !1), H(te, !0), Be(V(), "blur", We), (Rt = e.input$onblur) == null || Rt.call(e, We);
                  },
                  onfocus: (We) => {
                    var Rt;
                    H(ee, !0), Be(V(), "focus", We), (Rt = e.input$onfocus) == null || Rt.call(e, We);
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
                    return b();
                  },
                  set dirty(We) {
                    b(We);
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
          var Je = Q(Pn, 2);
          {
            var _t = (Lt) => {
              var We = oe(), Rt = K(We);
              {
                var or = (yt) => {
                  cv(yt, {
                    children: (Ut, yn) => {
                      var qt = et();
                      ve(() => Me(qt, e.suffix)), E(Ut, qt);
                    },
                    $$slots: { default: !0 }
                  });
                }, _n = (yt) => {
                  var Ut = oe(), yn = K(Ut);
                  _e(yn, () => e.suffix ?? Ie), E(yt, Ut);
                };
                re(Rt, (yt) => {
                  typeof e.suffix == "string" ? yt(or) : yt(_n, !1);
                });
              }
              E(Lt, We);
            };
            re(Je, (Lt) => {
              e.suffix != null && Lt(_t);
            });
          }
          E(Ge, Qe);
        };
        re(ut, (Ge) => {
          v() && typeof p() == "string" ? Ge(Ht) : Ge(sn, !1);
        });
      }
      var Cr = Q(ut, 2);
      Ya(Cr, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (Ge, Qe) => {
          var ze = oe(), Bt = K(ze);
          _e(Bt, () => e.trailingIcon ?? Ie), E(Ge, ze);
        },
        $$slots: { default: !0 }
      });
      var Ba = Q(Cr, 2);
      {
        var Ar = (Ge) => {
          {
            let Qe = /* @__PURE__ */ de(() => dt(U, "ripple$"));
            Se(Qd(Ge, Ke(() => o(Qe))), (ze) => j(ze), () => j());
          }
        };
        re(Ba, (Ge) => {
          !v() && f() !== "outlined" && l() && Ge(Ar);
        });
      }
      Se(ne, (Ge) => N = Ge, () => N), De(ne, (Ge, Qe) => Gn == null ? void 0 : Gn(Ge, Qe), () => ({
        ripple: !v() && f() === "filled",
        unbounded: !1,
        addClass: qe,
        removeClass: Re,
        addStyle: st,
        eventTarget: o(be),
        activeTarget: o(be),
        initPromise: z
      })), De(ne, (Ge, Qe) => ie == null ? void 0 : ie(Ge, Qe), a), E(P, ne);
    }, sr = (P) => {
      var ne = yv();
      He(ne, (ut, Ht, sn) => ({ class: ut, style: Ht, ...sn }), [
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
          ...J,
          [s()]: !0
        }),
        () => Object.entries(ae).map(([ut, Ht]) => `${ut}: ${Ht};`).concat([u()]).join(" "),
        () => Ea(U, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Te = W(ne);
      {
        var ot = (ut) => {
          var Ht = oe(), sn = K(Ht);
          _e(sn, () => e.label ?? Ie), E(ut, Ht);
        };
        re(Te, (ut) => {
          typeof e.label != "string" && ut(ot);
        });
      }
      var mt = Q(Te, 2);
      Ya(mt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (ut, Ht) => {
          var sn = oe(), Cr = K(sn);
          _e(Cr, () => e.leadingIcon ?? Ie), E(ut, sn);
        },
        $$slots: { default: !0 }
      });
      var Zt = Q(mt, 2);
      _e(Zt, () => e.children ?? Ie);
      var an = Q(Zt, 2);
      Ya(an, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (ut, Ht) => {
          var sn = oe(), Cr = K(sn);
          _e(Cr, () => e.trailingIcon ?? Ie), E(ut, sn);
        },
        $$slots: { default: !0 }
      });
      var xi = Q(an, 2);
      _e(xi, () => e.line ?? Ie), Se(ne, (ut) => N = ut, () => N), De(ne, (ut, Ht) => Gn == null ? void 0 : Gn(ut, Ht), () => ({
        ripple: l(),
        unbounded: !1,
        addClass: qe,
        removeClass: Re,
        addStyle: st
      })), De(ne, (ut, Ht) => ie == null ? void 0 : ie(ut, Ht), a), E(P, ne);
    };
    re(Nt, (P) => {
      q ? P(vn) : P(sr, !1);
    });
  }
  var pe = Q(Nt, 2);
  {
    var G = (P) => {
      {
        let ne = /* @__PURE__ */ de(() => dt(U, "helperLine$"));
        dv(P, Ke(() => o(ne), {
          children: (Te, ot) => {
            var mt = oe(), Zt = K(mt);
            _e(Zt, () => e.helper ?? Ie), E(Te, mt);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    re(pe, (P) => {
      e.helper && P(G);
    });
  }
  return E(n, Fe), Ae(he);
}
var Av = /* @__PURE__ */ X("<i><!></i>");
function Ev(n, e) {
  Ce(e, !0);
  const t = () => bi(g, "$leadingStore", r), [r, i] = Ei();
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
  const A = /* @__PURE__ */ de(() => ({ role: e.role, tabindex: u() })), x = ye("SMUI:textfield:leading-icon:mount"), S = ye("SMUI:textfield:leading-icon:unmount"), b = ye("SMUI:textfield:trailing-icon:mount"), w = ye("SMUI:textfield:trailing-icon:unmount");
  it(() => (H(
    v,
    new rv({
      getAttr: I,
      setAttr: y,
      removeAttr: C,
      setContent: (F) => {
        H(_, F, !0);
      },
      registerInteractionHandler: (F, k) => f.on(T(), F, k),
      deregisterInteractionHandler: (F, k) => f.off(T(), F, k),
      notifyIconAction: () => Be(T(), "SMUITextFieldIcon")
    }),
    !0
  ), p ? x && x(o(v)) : b && b(o(v)), o(v).init(), () => {
    var F;
    o(v) && (p ? S && S(o(v)) : w && w(o(v))), (F = o(v)) == null || F.destroy(), f.clear();
  }));
  function I(F) {
    return F in h ? h[F] ?? null : T().getAttribute(F);
  }
  function y(F, k) {
    h[F] !== k && (h[F] = k);
  }
  function C(F) {
    (!(F in h) || h[F] != null) && (h[F] = void 0);
  }
  function T() {
    return d;
  }
  var D = { getElement: T }, j = Av();
  He(
    j,
    (F) => ({
      class: F,
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
  var B = W(j);
  {
    var U = (F) => {
      var k = oe(), J = K(k);
      _e(J, () => e.children ?? Ie), E(F, k);
    }, q = (F) => {
      var k = et();
      ve(() => Me(k, o(_))), E(F, k);
    };
    re(B, (F) => {
      o(_) == null ? F(U) : F(q, !1);
    });
  }
  Se(j, (F) => d = F, () => d), De(j, (F, k) => ie == null ? void 0 : ie(F, k), a), E(n, j);
  var N = Ae(D);
  return i(), N;
}
function $d(n, e) {
  Ce(e, !0);
  let t = m(e, "placeholder", 3, ""), r = m(e, "label", 3, ""), i = m(e, "icon", 3, ""), a = m(e, "value", 15, ""), s = m(e, "variant", 3, "standard"), u = m(e, "styles", 3, ""), l = m(e, "required", 3, !1);
  var c = oe(), d = K(c);
  {
    var v = (h) => {
      {
        const g = (_) => {
          Ev(_, {
            class: "material-icons",
            children: (A, x) => {
              var S = et();
              ve(() => Me(S, i())), E(A, S);
            },
            $$slots: { default: !0 }
          });
        };
        let p = /* @__PURE__ */ de(() => `width: 100%; ${u()}`);
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
    re(d, (h) => {
      i() ? h(v) : h(f, !1);
    });
  }
  E(n, c), Ae();
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
var xv = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, Sv = {
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
var wv = ["input", "button", "textarea", "select"], En = function(n) {
  var e = n.target;
  if (e) {
    var t = ("" + e.tagName).toLowerCase();
    wv.indexOf(t) === -1 && n.preventDefault();
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
function Tv() {
  var n = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return n;
}
function Dv(n, e) {
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
    tu(e);
  }, vt.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + t;
  var l;
  return e.typeaheadBuffer.length === 1 ? l = Lv(i, a, u, e) : l = Rv(i, u, e), l !== -1 && !s && r(l), l;
}
function Lv(n, e, t, r) {
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
function Rv(n, e, t) {
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
function eu(n) {
  return n.typeaheadBuffer.length > 0;
}
function tu(n) {
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
  var x = r && eu(e);
  if (x) {
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
function Ov(n) {
  return n instanceof Array;
}
var Mv = ["Alt", "Control", "Meta", "Shift"];
function kl(n) {
  var e = new Set(n ? Mv.filter(function(t) {
    return n.getModifierState(t);
  }) : []);
  return function(t) {
    return t.every(function(r) {
      return e.has(r);
    }) && t.length === e.size;
  };
}
var Fv = (
  /** @class */
  function(n) {
    bn(e, n);
    function e(t) {
      var r = n.call(this, je(je({}, e.defaultAdapter), t)) || this;
      return r.wrapFocus = !1, r.isVertical = !0, r.isSingleSelectionList = !1, r.areDisabledItemsFocusable = !0, r.selectedIndex = vt.UNSET_INDEX, r.focusedItemIndex = vt.UNSET_INDEX, r.useActivatedClass = !1, r.useSelectedAttr = !1, r.ariaCurrentAttrValue = null, r.isCheckboxList = !1, r.isRadioList = !1, r.lastSelectedIndex = null, r.hasTypeahead = !1, r.typeaheadState = Tv(), r.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), r;
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
      return this.hasTypeahead && eu(this.typeaheadState);
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
      var a = this, s, u = bt(t) === "ArrowLeft", l = bt(t) === "ArrowUp", c = bt(t) === "ArrowRight", d = bt(t) === "ArrowDown", v = bt(t) === "Home", f = bt(t) === "End", h = bt(t) === "Enter", g = bt(t) === "Spacebar", p = this.isVertical && d || !this.isVertical && c, _ = this.isVertical && l || !this.isVertical && u, A = t.key === "A" || t.key === "a", x = kl(t);
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
          var b = {
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
          Pl(b, this.typeaheadState);
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
        } else if (A && x(["Control"]) && this.isCheckboxList)
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
          var b = {
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
          Pl(b, this.typeaheadState);
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
      v.length && (this.selectedIndex = Of([], El(a)), this.adapter.notifySelectionChange(v));
    }, e.prototype.setTabindexAtIndex = function(t) {
      this.focusedItemIndex === vt.UNSET_INDEX && t !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== t && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== t && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), t !== vt.UNSET_INDEX && this.adapter.setAttributeForElementIndex(t, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var t = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(t);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== vt.UNSET_INDEX ? this.selectedIndex : Ov(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(t, r) {
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
      return Dv(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      tu(this.typeaheadState);
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
var nu = (
  /** @class */
  function(n) {
    bn(e, n);
    function e(t) {
      var r = n.call(this, je(je({}, e.defaultAdapter), t)) || this;
      return r.isSurfaceOpen = !1, r.isQuickOpen = !1, r.isHoistedElement = !1, r.isFixedPosition = !1, r.isHorizontallyCenteredOnViewport = !1, r.maxHeight = 0, r.openBottomBias = 0, r.openAnimationEndTimerId = 0, r.closeAnimationEndTimerId = 0, r.animationRequestId = 0, r.anchorCorner = hi.TOP_START, r.originCorner = hi.TOP_START, r.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, r.position = { x: 0, y: 0 }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return xv;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Sv;
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
      var x = _ - s.width > 0, S = A - s.width > 0, b = this.hasBit(t, ht.FLIP_RTL) && this.hasBit(t, ht.RIGHT);
      return S && b && f || !x && b ? t = this.unsetBit(t, ht.RIGHT) : (x && p && f || x && !p && g || !S && _ >= A) && (t = this.setBit(t, ht.RIGHT)), t;
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
}, Pv = {
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
var kv = (
  /** @class */
  function(n) {
    bn(e, n);
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
        return Pv;
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
        }, nu.numbers.TRANSITION_CLOSE_DURATION);
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
}, to = {
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
var Gv = (
  /** @class */
  function(n) {
    bn(e, n);
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
        return to;
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
        r && i ? this.adapter.setSelectAnchorAttr(to.ARIA_DESCRIBEDBY, i) : this.adapter.removeSelectAnchorAttr(to.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.setClickDebounceTimeout = function() {
      var t = this;
      clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout(function() {
        t.recentlyClicked = !1;
      }, ei.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
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
var Nv = (
  /** @class */
  function(n) {
    bn(e, n);
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
  }(In)
), Zv = /* @__PURE__ */ X("<div><!></div>");
function Hv(n, e) {
  Ce(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "static", 3, !1), s = m(e, "anchor", 3, !0), u = m(e, "fixed", 3, !1), l = m(e, "open", 31, () => Ee(a())), c = m(e, "managed", 3, !1), d = m(e, "fullWidth", 3, !1), v = m(e, "quickOpen", 3, !1), f = m(e, "anchorElement", 15), h = m(e, "anchorMargin", 19, () => ({ top: 0, right: 0, bottom: 0, left: 0 })), g = m(e, "maxHeight", 3, 0), p = m(e, "horizontallyCenteredOnViewport", 3, !1), _ = m(e, "openBottomBias", 3, 0), A = m(e, "neverRestoreFocus", 3, !1), x = /* @__PURE__ */ Ve(e, [
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
  ]), S, b = /* @__PURE__ */ le(void 0), w = Ee({}), I = Ee({}), y = /* @__PURE__ */ le(void 0);
  ce("SMUI:list:role", "menu"), ce("SMUI:list:item:role", "menuitem"), xe(() => {
    var M, $;
    S && s() && !((M = S.parentElement) != null && M.classList.contains("mdc-menu-surface--anchor")) && (($ = S.parentElement) == null || $.classList.add("mdc-menu-surface--anchor"), f(S.parentElement ?? void 0));
  }), xe(() => {
    o(b) && o(b).isOpen() !== l() && (l() ? o(b).open() : o(b).close());
  }), xe(() => {
    o(b) && o(b).setQuickOpen(v());
  }), xe(() => {
    o(b) && o(b).setFixedPosition(u());
  }), xe(() => {
    o(b) && o(b).setMaxHeight(g());
  }), xe(() => {
    o(b) && o(b).setIsHorizontallyCenteredOnViewport(p());
  });
  const C = hi;
  xe(() => {
    o(b) && e.anchorCorner != null && (typeof e.anchorCorner == "string" ? o(b).setAnchorCorner(C[e.anchorCorner]) : o(b).setAnchorCorner(e.anchorCorner));
  }), xe(() => {
    o(b) && o(b).setAnchorMargin(h());
  }), xe(() => {
    o(b) && o(b).setOpenBottomBias(_());
  });
  const T = ye("SMUI:menu-surface:mount"), D = ye("SMUI:menu-surface:unmount");
  it(() => {
    H(
      b,
      new nu({
        addClass: B,
        removeClass: U,
        hasClass: j,
        hasAnchor: () => !!f(),
        notifyClose: () => {
          c() || l(a()), l() || Be(te(), "SMUIMenuSurfaceClosed");
        },
        notifyClosing: () => {
          c() || l(a()), l() || Be(te(), "SMUIMenuSurfaceClosing");
        },
        notifyOpen: () => {
          c() || l(!0), l() && Be(te(), "SMUIMenuSurfaceOpened");
        },
        notifyOpening: () => {
          l() || Be(te(), "SMUIMenuSurfaceOpening");
        },
        isElementInContainer: ($) => te().contains($),
        isRtl: () => getComputedStyle(te()).getPropertyValue("direction") === "rtl",
        setTransformOrigin: ($) => {
          I["transform-origin"] = $;
        },
        isFocused: () => document.activeElement === te(),
        saveFocus: () => {
          H(y, document.activeElement ?? void 0, !0);
        },
        restoreFocus: () => {
          !A() && (!S || te().contains(document.activeElement)) && o(y) && document.contains(o(y)) && "focus" in o(y) && o(y).focus();
        },
        getInnerDimensions: () => ({
          width: te().offsetWidth,
          height: te().offsetHeight
        }),
        getAnchorDimensions: () => f() ? f().getBoundingClientRect() : null,
        getWindowDimensions: () => ({ width: window.innerWidth, height: window.innerHeight }),
        getBodyDimensions: () => ({
          width: document.body.clientWidth,
          height: document.body.clientHeight
        }),
        getWindowScroll: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
        setPosition: ($) => {
          I.left = "left" in $ ? `${$.left}px` : "", I.right = "right" in $ ? `${$.right}px` : "", I.top = "top" in $ ? `${$.top}px` : "", I.bottom = "bottom" in $ ? `${$.bottom}px` : "";
        },
        setMaxHeight: ($) => {
          I["max-height"] = $;
        }
      }),
      !0
    );
    const M = {
      get open() {
        return l();
      },
      set open($) {
        l($);
      },
      closeProgrammatic: q
    };
    return T && T(M), o(b).init(), () => {
      var Y, me;
      D && D(M);
      const $ = o(b).isHoistedElement;
      (Y = o(b)) == null || Y.destroy(), $ && ((me = te().parentNode) == null || me.removeChild(te()));
    };
  }), Fn(() => {
    var M;
    s() && te() && ((M = te().parentElement) == null || M.classList.remove("mdc-menu-surface--anchor"));
  });
  function j(M) {
    return M in w ? w[M] : te().classList.contains(M);
  }
  function B(M) {
    w[M] || (w[M] = !0);
  }
  function U(M) {
    (!(M in w) || w[M]) && (w[M] = !1);
  }
  function q(M) {
    var $;
    ($ = o(b)) == null || $.close(M), l(!1);
  }
  function N(M) {
    o(b) && l() && !c() && o(b).handleBodyClick(M);
  }
  function F() {
    return l();
  }
  function k(M) {
    l(M);
  }
  function J(M, $) {
    if (o(b) == null)
      throw new Error("Instance is not defined.");
    return o(b).setAbsolutePosition(M, $);
  }
  function ae(M) {
    if (o(b) == null)
      throw new Error("Instance is not defined.");
    return o(b).setIsHoisted(M);
  }
  function L() {
    if (o(b) == null)
      throw new Error("Instance is not defined.");
    return o(b).isFixed();
  }
  function ee() {
    if (o(b) == null)
      throw new Error("Instance is not defined.");
    return o(b).flipCornerHorizontally();
  }
  function te() {
    return S;
  }
  var fe = {
    isOpen: F,
    setOpen: k,
    setAbsolutePosition: J,
    setIsHoisted: ae,
    isFixed: L,
    flipCornerHorizontally: ee,
    getElement: te
  }, ue = Zv();
  Pt("click", Bo.body, N, !0);
  var Z = (M) => {
    var $;
    o(b) && !c() && o(b).handleKeydown(M), ($ = e.onkeydown) == null || $.call(e, M);
  };
  He(
    ue,
    (M, $) => ({
      class: M,
      style: $,
      role: "dialog",
      ...x,
      onkeydown: Z
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
      () => Object.entries(I).map(([M, $]) => `${M}: ${$};`).concat([i()]).join(" ")
    ]
  );
  var z = W(ue);
  return _e(z, () => e.children ?? Ie), Se(ue, (M) => S = M, () => S), De(ue, (M, $) => ie == null ? void 0 : ie(M, $), t), E(n, ue), Ae(fe);
}
function no(n, { addClass: e = (r) => n.classList.add(r), removeClass: t = (r) => n.classList.remove(r) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      t("mdc-menu-surface--anchor");
    }
  };
}
function Bv(n, e) {
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
  ce("SMUI:menu-surface:mount", (C) => {
    o(v) || H(v, C, !0);
  });
  const h = ye("SMUI:list:mount");
  ce("SMUI:list:mount", (C) => {
    o(f) || H(f, C, !0), h && h(C);
  });
  const g = ye("SMUI:menu:mount"), p = ye("SMUI:menu:unmount");
  it(() => (H(
    d,
    new kv({
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
        u() || ((T = o(v)) == null || T.closeProgrammatic(C), Be(I(), "SMUIMenuClosedProgrammatically"));
      },
      getElementIndex: (C) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return o(f).getOrderedList().map((T) => T.element).indexOf(C);
      },
      notifySelected: (C) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        Be(I(), "SMUIMenuSelected", {
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
        const T = o(f).getOrderedList(), D = t(T[C].element, `.${Ni.MENU_SELECTION_GROUP}`), j = D == null ? void 0 : D.querySelector(`.${Ni.MENU_SELECTED_LIST_ITEM}`);
        return j ? T.map((B) => B.element).indexOf(j) : -1;
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
  function x(C) {
    a(C);
  }
  function S(C) {
    if (o(d) == null)
      throw new Error("Instance is undefined.");
    o(d).setDefaultFocusState(C);
  }
  function b() {
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
  var y = {
    isOpen: A,
    setOpen: x,
    setDefaultFocusState: S,
    getSelectedIndex: b,
    getMenuSurface: w,
    getElement: I
  };
  {
    let C = /* @__PURE__ */ de(() => Ze({ "mdc-menu": !0, [i()]: !0 }));
    Se(
      Hv(n, Ke(
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
            var j = oe(), B = K(j);
            _e(B, () => e.children ?? Ie), E(T, j);
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
function Uv(n, e) {
  Ce(e, !0);
  const { closest: t, matches: r } = ka;
  let i = ye("SMUI:list:nav"), a = m(e, "use", 19, () => []), s = m(e, "class", 3, ""), u = m(e, "nonInteractive", 3, !1), l = m(e, "dense", 3, !1), c = m(e, "textualList", 3, !1), d = m(e, "avatarList", 3, !1), v = m(e, "iconList", 3, !1), f = m(e, "imageList", 3, !1), h = m(e, "thumbnailList", 3, !1), g = m(e, "videoList", 3, !1), p = m(e, "twoLine", 3, !1), _ = m(e, "threeLine", 3, !1), A = m(e, "vertical", 3, !0), x = m(e, "wrapFocus", 19, () => ye("SMUI:list:wrapFocus") ?? !1), S = m(e, "singleSelection", 3, !1), b = m(e, "disabledItemsFocusable", 3, !1), w = m(e, "selectedIndex", 31, () => -1), I = m(e, "radioList", 3, !1), y = m(e, "checkList", 3, !1), C = m(e, "hasTypeahead", 3, !1), T = m(e, "component", 3, Ms), D = m(e, "tag", 3, i ? "nav" : "ul"), j = /* @__PURE__ */ Ve(e, [
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
  ]), B, U = /* @__PURE__ */ le(void 0), q = [], N = ye("SMUI:list:role");
  const F = /* @__PURE__ */ new WeakMap();
  let k = ye("SMUI:dialog:selection"), J = ye("SMUI:addLayoutListener"), ae;
  ce("SMUI:list:nonInteractive", u()), ce("SMUI:separator:context", "list"), N || (S() ? (N = "listbox", ce("SMUI:list:item:role", "option")) : I() ? (N = "radiogroup", ce("SMUI:list:item:role", "radio")) : y() ? (N = "group", ce("SMUI:list:item:role", "checkbox")) : (N = "list", ce("SMUI:list:item:role", void 0))), xe(() => {
    o(U) && o(U).setVerticalOrientation(A());
  }), xe(() => {
    o(U) && o(U).setWrapFocus(x());
  }), xe(() => {
    o(U) && o(U).setHasTypeahead(C());
  }), xe(() => {
    o(U) && o(U).setSingleSelection(S());
  }), xe(() => {
    o(U) && o(U).setDisabledItemsFocusable(b());
  }), xe(() => {
    o(U) && S() && O() !== w() && o(U).setSelectedIndex(w());
  }), J && (ae = J(st)), ce("SMUI:list:item:mount", (pe) => {
    q.push(pe), F.set(pe.element, pe), S() && pe.selected && w(Re(pe.element));
  }), ce("SMUI:list:item:unmount", (pe) => {
    const G = (pe && q.findIndex((P) => P === pe)) ?? -1;
    G !== -1 && (q.splice(G, 1), F.delete(pe.element));
  });
  const L = ye("SMUI:list:mount"), ee = ye("SMUI:list:unmount");
  it(() => {
    H(
      U,
      new Fv({
        addClassForElementIndex: Y,
        focusItemAtIndex: he,
        getAttributeForElementIndex: (G, P) => {
          var ne;
          return ((ne = M()[G]) == null ? void 0 : ne.getAttr(P)) ?? null;
        },
        getFocusedElementIndex: () => document.activeElement ? M().map((G) => G.element).indexOf(document.activeElement) : -1,
        getListItemCount: () => q.length,
        getPrimaryTextAtIndex: qe,
        hasCheckboxAtIndex: (G) => {
          var P;
          return ((P = M()[G]) == null ? void 0 : P.hasCheckbox) ?? !1;
        },
        hasRadioAtIndex: (G) => {
          var P;
          return ((P = M()[G]) == null ? void 0 : P.hasRadio) ?? !1;
        },
        isCheckboxCheckedAtIndex: (G) => {
          const P = M()[G];
          return ((P == null ? void 0 : P.hasCheckbox) && P.checked) ?? !1;
        },
        isFocusInsideList: () => B != null && Fe() !== document.activeElement && Fe().contains(document.activeElement),
        isRootFocused: () => B != null && document.activeElement === Fe(),
        listItemAtIndexHasClass: $,
        notifyAction: (G) => {
          w(G), B != null && Be(Fe(), "SMUIListAction", { index: G });
        },
        notifySelectionChange: (G) => {
          B != null && Be(Fe(), "SMUIListSelectionChange", { changedIndices: G });
        },
        removeClassForElementIndex: me,
        setAttributeForElementIndex: be,
        setCheckedCheckboxOrRadioAtIndex: (G, P) => {
          M()[G].checked = P;
        },
        setTabIndexForListItemChildren: (G, P) => {
          const ne = M()[G];
          Array.prototype.forEach.call(ne.element.querySelectorAll("button:not(:disabled), a"), (ot) => {
            ot.setAttribute("tabindex", P);
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
        return q;
      },
      get typeaheadInProgress() {
        if (!o(U))
          throw new Error("Instance is undefined.");
        return o(U).isTypeaheadInProgress();
      },
      typeaheadMatchItem(G, P) {
        if (!o(U))
          throw new Error("Instance is undefined.");
        return o(U).typeaheadMatchItem(
          G,
          P,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: M,
      focusItemAtIndex: he,
      addClassForElementIndex: Y,
      removeClassForElementIndex: me,
      setAttributeForElementIndex: be,
      removeAttributeForElementIndex: Ne,
      getAttributeFromElementIndex: nt,
      getPrimaryTextAtIndex: qe
    };
    return L && L(pe), o(U).init(), o(U).layout(), () => {
      var G;
      ee && ee(pe), (G = o(U)) == null || G.destroy();
    };
  }), Fn(() => {
    ae && ae();
  });
  function te(pe) {
    o(U) && pe.target && o(U).handleKeydown(pe, pe.target.classList.contains("mdc-deprecated-list-item"), Re(pe.target));
  }
  function fe(pe) {
    o(U) && pe.target && o(U).handleFocusIn(Re(pe.target));
  }
  function ue(pe) {
    o(U) && pe.target && o(U).handleFocusOut(Re(pe.target));
  }
  function Z(pe) {
    o(U) && pe.target && o(U).handleClick(Re(pe.target), !r(pe.target, 'input[type="checkbox"], input[type="radio"]'), pe);
  }
  function z(pe) {
    if (I() || y()) {
      const G = Re(pe.target);
      if (G !== -1) {
        const P = M()[G];
        P && (I() && !P.checked || y()) && (r(pe.detail.target, 'input[type="checkbox"], input[type="radio"]') || (P.checked = !P.checked), P.activateRipple(), window.requestAnimationFrame(() => {
          P.deactivateRipple();
        }));
      }
    }
  }
  function M() {
    return B == null ? [] : [...Fe().children].map((pe) => F.get(pe)).filter((pe) => pe && pe._smui_list_item_accessor);
  }
  function $(pe, G) {
    const P = M()[pe];
    return (P && P.hasClass(G)) ?? !1;
  }
  function Y(pe, G) {
    const P = M()[pe];
    P && P.addClass(G);
  }
  function me(pe, G) {
    const P = M()[pe];
    P && P.removeClass(G);
  }
  function be(pe, G, P) {
    const ne = M()[pe];
    ne && ne.addAttr(G, P);
  }
  function Ne(pe, G) {
    const P = M()[pe];
    P && P.removeAttr(G);
  }
  function nt(pe, G) {
    const P = M()[pe];
    return P ? P.getAttr(G) : null;
  }
  function qe(pe) {
    const G = M()[pe];
    return (G && G.getPrimaryText()) ?? "";
  }
  function Re(pe) {
    const G = t(pe, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return G && r(G, ".mdc-deprecated-list-item") ? M().map((P) => P == null ? void 0 : P.element).indexOf(G) : -1;
  }
  function st() {
    if (!o(U))
      throw new Error("Instance is undefined.");
    return o(U).layout();
  }
  function kt(pe, G) {
    if (!o(U))
      throw new Error("Instance is undefined.");
    return o(U).setEnabled(pe, G);
  }
  function Gt() {
    if (!o(U))
      throw new Error("Instance is undefined.");
    return o(U).isTypeaheadInProgress();
  }
  function O() {
    if (!o(U))
      throw new Error("Instance is undefined.");
    return o(U).getSelectedIndex();
  }
  function V() {
    if (!o(U))
      throw new Error("Instance is undefined.");
    return o(U).getFocusedItemIndex();
  }
  function he(pe) {
    const G = M()[pe];
    G && "focus" in G.element && G.element.focus();
  }
  function Fe() {
    return B.getElement();
  }
  var Nt = {
    layout: st,
    setEnabled: kt,
    getTypeaheadInProgress: Gt,
    getSelectedIndex: O,
    getFocusedItemIndex: V,
    focusItemAtIndex: he,
    getElement: Fe
  }, vn = oe(), sr = K(vn);
  {
    let pe = /* @__PURE__ */ de(() => Ze({
      "mdc-deprecated-list": !0,
      "mdc-deprecated-list--non-interactive": u(),
      "mdc-deprecated-list--dense": l(),
      "mdc-deprecated-list--textual-list": c(),
      "mdc-deprecated-list--avatar-list": d() || k,
      "mdc-deprecated-list--icon-list": v(),
      "mdc-deprecated-list--image-list": f(),
      "mdc-deprecated-list--thumbnail-list": h(),
      "mdc-deprecated-list--video-list": g(),
      "mdc-deprecated-list--two-line": p(),
      "smui-list--three-line": _() && !p(),
      [s()]: !0
    }));
    Pa(sr, T, (G, P) => {
      Se(
        P(G, Ke(
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
              return N;
            }
          },
          () => j,
          {
            onkeydown: (ne) => {
              var Te;
              te(ne), (Te = e.onkeydown) == null || Te.call(e, ne);
            },
            onfocusin: (ne) => {
              var Te;
              fe(ne), (Te = e.onfocusin) == null || Te.call(e, ne);
            },
            onfocusout: (ne) => {
              var Te;
              ue(ne), (Te = e.onfocusout) == null || Te.call(e, ne);
            },
            onclick: (ne) => {
              var Te;
              Z(ne), (Te = e.onclick) == null || Te.call(e, ne);
            },
            onSMUIAction: (ne) => {
              var Te;
              z(ne), (Te = e.onSMUIAction) == null || Te.call(e, ne);
            },
            children: (ne, Te) => {
              var ot = oe(), mt = K(ot);
              _e(mt, () => e.children ?? Ie), E(ne, ot);
            },
            $$slots: { default: !0 }
          }
        )),
        (ne) => B = ne,
        () => B
      );
    });
  }
  return E(n, vn), Ae(Nt);
}
let Wv = 0;
var jv = /* @__PURE__ */ X('<span class="mdc-deprecated-list-item__ripple"></span>'), Vv = /* @__PURE__ */ X("<!><!>", 1);
function zv(n, e) {
  Ce(e, !0);
  let t = () => {
  };
  function r(Y) {
    return Y === t;
  }
  let i = ye("SMUI:list:item:nav"), a = m(e, "use", 19, () => []), s = m(e, "class", 3, ""), u = m(e, "style", 3, ""), l = m(e, "nonInteractive", 19, () => ye("SMUI:list:nonInteractive") ?? !1), c = m(e, "ripple", 19, () => !l()), d = m(e, "wrapper", 3, !1), v = m(e, "activated", 15, !1), f = m(e, "role", 19, () => d() ? "presentation" : ye("SMUI:list:item:role")), h = m(e, "selected", 15, !1), g = m(e, "disabled", 3, !1), p = m(e, "skipRestoreFocus", 3, !1), _ = m(e, "tabindex", 15, t), A = m(e, "inputId", 19, () => "SMUI-form-field-list-" + Wv++), x = m(e, "component", 3, Ms), S = m(e, "tag", 19, () => i ? e.href ? "a" : "span" : "li"), b = /* @__PURE__ */ Ve(e, [
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
  let w, I = Ee({}), y = Ee({}), C = Ee({}), T = /* @__PURE__ */ le(void 0), D = /* @__PURE__ */ le(void 0);
  const j = /* @__PURE__ */ de(() => r(_()) ? !l() && !g() && (h() || o(T) && o(T).checked) ? 0 : -1 : _());
  ce("SMUI:generic:input:props", { id: A() }), ce("SMUI:separator:context", void 0), ce("SMUI:generic:input:mount", (Y) => {
    ("_smui_checkbox_accessor" in Y || "_smui_radio_accessor" in Y) && H(T, Y, !0);
  }), ce("SMUI:generic:input:unmount", () => {
    H(T, void 0);
  });
  const B = ye("SMUI:list:item:mount"), U = ye("SMUI:list:item:unmount");
  it(() => {
    if (!h() && !l()) {
      let me = !0, be = w.getElement();
      for (; be.previousElementSibling; )
        if (be = be.previousElementSibling, be.nodeType === 1 && be.classList.contains("mdc-deprecated-list-item") && !be.classList.contains("mdc-deprecated-list-item--disabled")) {
          me = !1;
          break;
        }
      me && H(D, window.requestAnimationFrame(() => ee(be)), !0);
    }
    const Y = {
      _smui_list_item_accessor: !0,
      get element() {
        return Z();
      },
      get selected() {
        return h();
      },
      set selected(me) {
        h(me);
      },
      hasClass: q,
      addClass: N,
      removeClass: F,
      getAttr: J,
      addAttr: ae,
      removeAttr: L,
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
      action: fe,
      get tabindex() {
        return o(j);
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
    return B && B(Y), () => {
      U && U(Y);
    };
  }), Fn(() => {
    o(D) && window.cancelAnimationFrame(o(D));
  });
  function q(Y) {
    return Y in I ? I[Y] : Z().classList.contains(Y);
  }
  function N(Y) {
    I[Y] || (I[Y] = !0);
  }
  function F(Y) {
    (!(Y in I) || I[Y]) && (I[Y] = !1);
  }
  function k(Y, me) {
    y[Y] != me && (me === "" || me == null ? delete y[Y] : y[Y] = me);
  }
  function J(Y) {
    return Y in C ? C[Y] ?? null : Z().getAttribute(Y);
  }
  function ae(Y, me) {
    C[Y] !== me && (C[Y] = me);
  }
  function L(Y) {
    (!(Y in C) || C[Y] != null) && (C[Y] = void 0);
  }
  function ee(Y) {
    let me = !0;
    for (; Y.nextElementSibling; )
      if (Y = Y.nextElementSibling, Y.nodeType === 1 && Y.classList.contains("mdc-deprecated-list-item")) {
        const be = Y.attributes.getNamedItem("tabindex");
        if (be && be.value === "0") {
          me = !1;
          break;
        }
      }
    me && _(0);
  }
  function te(Y) {
    const me = Y.key === "Enter", be = Y.key === "Space";
    (me || be) && fe(Y);
  }
  function fe(Y) {
    g() || Be(Z(), "SMUIAction", Y);
  }
  function ue() {
    const Y = Z(), me = Y.querySelector(".mdc-deprecated-list-item__primary-text");
    if (me)
      return me.textContent ?? "";
    const be = Y.querySelector(".mdc-deprecated-list-item__text");
    return be ? be.textContent ?? "" : Y.textContent ?? "";
  }
  function Z() {
    return w.getElement();
  }
  var z = { action: fe, getPrimaryText: ue, getElement: Z }, M = oe(), $ = K(M);
  {
    let Y = /* @__PURE__ */ de(() => [
      ...l() ? [] : [
        [
          Gn,
          {
            ripple: !o(T),
            unbounded: !1,
            color: (v() || h()) && e.color == null ? "primary" : e.color,
            disabled: g(),
            addClass: N,
            removeClass: F,
            addStyle: k
          }
        ]
      ],
      ...a()
    ]), me = /* @__PURE__ */ de(() => Ze({
      "mdc-deprecated-list-item": !d(),
      "mdc-deprecated-list-item__wrapper": d(),
      "mdc-deprecated-list-item--activated": v(),
      "mdc-deprecated-list-item--selected": h(),
      "mdc-deprecated-list-item--disabled": g(),
      "mdc-menu-item--selected": !i && f() === "menuitem" && h(),
      "smui-menu-item--non-interactive": l(),
      ...I,
      [s()]: !0
    })), be = /* @__PURE__ */ de(() => Object.entries(y).map(([nt, qe]) => `${nt}: ${qe};`).concat([u()]).join(" ")), Ne = /* @__PURE__ */ de(() => p() || void 0);
    Pa($, x, (nt, qe) => {
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
              return o(be);
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
              return o(j);
            },
            get href() {
              return e.href;
            }
          },
          () => C,
          () => b,
          {
            onclick: (Re) => {
              var st;
              fe(Re), (st = e.onclick) == null || st.call(e, Re);
            },
            onkeydown: (Re) => {
              var st;
              te(Re), (st = e.onkeydown) == null || st.call(e, Re);
            },
            children: (Re, st) => {
              var kt = Vv(), Gt = K(kt);
              {
                var O = (he) => {
                  var Fe = jv();
                  E(he, Fe);
                };
                re(Gt, (he) => {
                  c() && he(O);
                });
              }
              var V = Q(Gt);
              _e(V, () => e.children ?? Ie), E(Re, kt);
            },
            $$slots: { default: !0 }
          }
        )),
        (Re) => w = Re,
        () => w
      );
    });
  }
  return E(n, M), Ae(z);
}
let Xv = 0;
var Yv = /* @__PURE__ */ X("<div><!></div>");
function qv(n, e) {
  Ce(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "id", 19, () => "SMUI-select-helper-text-" + Xv++), a = m(e, "persistent", 3, !1), s = m(e, "validationMsg", 3, !1), u = /* @__PURE__ */ Ve(e, [
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
  it(() => (H(
    c,
    new Nv({
      addClass: A,
      removeClass: x,
      hasClass: _,
      getAttr: S,
      setAttr: b,
      removeAttr: w,
      setContent: (B) => {
        H(f, B, !0);
      }
    }),
    !0
  ), h && h(i()), g && g(o(c)), o(c).init(), () => {
    var B;
    p && o(c) && p(o(c)), (B = o(c)) == null || B.destroy();
  }));
  function _(B) {
    return B in d ? d[B] : I().classList.contains(B);
  }
  function A(B) {
    d[B] || (d[B] = !0);
  }
  function x(B) {
    (!(B in d) || d[B]) && (d[B] = !1);
  }
  function S(B) {
    return B in v ? v[B] ?? null : I().getAttribute(B);
  }
  function b(B, U) {
    v[B] !== U && (v[B] = U);
  }
  function w(B) {
    (!(B in v) || v[B] != null) && (v[B] = void 0);
  }
  function I() {
    return l;
  }
  var y = { getElement: I }, C = Yv();
  He(
    C,
    (B) => ({
      class: B,
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
  var T = W(C);
  {
    var D = (B) => {
      var U = oe(), q = K(U);
      _e(q, () => e.children ?? Ie), E(B, U);
    }, j = (B) => {
      var U = et();
      ve(() => Me(U, o(f))), E(B, U);
    };
    re(T, (B) => {
      o(f) == null ? B(D) : B(j, !1);
    });
  }
  return Se(C, (B) => l = B, () => l), De(C, (B, U) => ie == null ? void 0 : ie(B, U), t), E(n, C), Ae(y);
}
let Kv = 0;
var Qv = /* @__PURE__ */ X("<input/>"), Jv = /* @__PURE__ */ X('<span class="mdc-select__ripple"></span>'), $v = /* @__PURE__ */ X('<div><!> <div><!> <!> <!> <!> <span><span> </span></span> <span><svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"><polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon><polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon></svg></span> <!></div> <!></div> <!>', 1);
function eh(n, e) {
  Ce(e, !0);
  const t = () => bi(Fe, "$selectedTextStore", r), [r, i] = Ei();
  let a = () => {
  };
  function s(R) {
    return R === a;
  }
  let u = m(e, "use", 19, () => []), l = m(e, "class", 3, ""), c = m(e, "style", 3, ""), d = m(e, "ripple", 3, !0), v = m(e, "disabled", 3, !1), f = m(e, "variant", 3, "standard"), h = m(e, "noLabel", 3, !1), g = m(e, "label", 3, void 0), p = m(e, "value", 15), _ = m(e, "key", 3, (R) => R), A = m(e, "dirty", 15, !1), x = m(e, "invalid", 15, a), S = m(e, "updateInvalid", 19, () => s(x())), b = m(e, "required", 3, !1), w = m(e, "inputId", 19, () => "SMUI-select-" + Kv++), I = m(e, "hiddenInput", 3, !1), y = m(e, "withLeadingIcon", 3, a), C = m(e, "anchor$use", 19, () => []), T = m(e, "anchor$class", 3, ""), D = m(e, "selectedTextContainer$use", 19, () => []), j = m(e, "selectedTextContainer$class", 3, ""), B = m(e, "selectedText$use", 19, () => []), U = m(e, "selectedText$class", 3, ""), q = m(e, "dropdownIcon$use", 19, () => []), N = m(e, "dropdownIcon$class", 3, ""), F = m(e, "menu$class", 3, ""), k = /* @__PURE__ */ Ve(e, [
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
  let ae, L = /* @__PURE__ */ le(void 0), ee = Ee({}), te = Ee({}), fe, ue = Ee({}), Z = /* @__PURE__ */ le(-1);
  const z = /* @__PURE__ */ de(() => k.menu$id ?? w() + "-menu");
  let M = /* @__PURE__ */ le(void 0), $ = ye("SMUI:addLayoutListener"), Y, me = /* @__PURE__ */ le(!1), be = Ee({}), Ne = /* @__PURE__ */ le(void 0), nt = /* @__PURE__ */ le(void 0), qe = /* @__PURE__ */ le(!1), Re, st = ye("SMUI:select:context"), kt, Gt, O, V, he;
  ce("SMUI:list:role", ""), ce("SMUI:list:nav", !1);
  const Fe = jn("");
  ce("SMUI:select:selectedText", Fe);
  const Nt = jn(p());
  xe(() => {
    nr(Nt, p());
  }), ce("SMUI:select:value", Nt), xe(() => {
    o(L) && o(L).getValue() !== _()(p()) && o(L).setValue(_()(p()));
  });
  let vn = o(Z);
  xe(() => {
    if (vn !== o(Z))
      if (vn = o(Z), o(L))
        o(L).setSelectedIndex(
          o(Z),
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const R = an();
        p() !== R[o(Z)] && p(R[o(Z)]);
      }
  }), xe(() => {
    o(L) && o(L).getDisabled() !== v() && o(L).setDisabled(v());
  }), xe(() => {
    o(L) && A() && o(L).isValid() !== !x() && (S() ? x(!o(L).isValid()) : o(L).setValid(!x()));
  }), xe(() => {
    o(L) && o(L).getRequired() !== b() && o(L).setRequired(b());
  }), $ && (Y = $(Ba)), ce("SMUI:select:leading-icon:mount", (R) => {
    kt = R;
  }), ce("SMUI:select:leading-icon:unmount", () => {
    kt = void 0;
  }), ce("SMUI:list:mount", (R) => {
    Re = R;
  }), ce("SMUI:select:helper-text:id", (R) => {
    H(M, R, !0);
  }), ce("SMUI:select:helper-text:mount", (R) => {
    Gt = R;
  }), ce("SMUI:select:helper-text:unmount", () => {
    H(M, void 0), Gt = void 0;
  }), it(() => (H(
    L,
    new Gv(
      {
        // getSelectAdapterMethods
        // getMenuItemAttr: (menuItem: Element, attr: string) =>
        //   menuItem.getAttribute(attr),
        setSelectedText: (R) => {
          nr(Fe, R);
        },
        isSelectAnchorFocused: () => document.activeElement === fe,
        getSelectAnchorAttr: ot,
        setSelectAnchorAttr: mt,
        removeSelectAnchorAttr: Zt,
        addMenuClass: ne,
        removeMenuClass: Te,
        openMenu: () => {
          H(me, !0);
        },
        closeMenu: () => {
          H(me, !1);
        },
        getAnchorElement: () => fe,
        setMenuAnchorElement: (R) => {
          H(Ne, R, !0);
        },
        setMenuAnchorCorner: (R) => {
          H(nt, R, !0);
        },
        setMenuWrapFocus: (R) => {
          H(qe, R, !0);
        },
        getSelectedIndex: () => o(Z),
        setSelectedIndex: (R) => {
          vn = R, H(Z, R, !0), p(an()[o(Z)]);
        },
        focusMenuItemAtIndex: (R) => {
          Re.focusItemAtIndex(R);
        },
        getMenuItemCount: () => Re.items.length,
        getMenuItemValues: () => an().map(_()),
        getMenuItemTextAtIndex: (R) => Re.getPrimaryTextAtIndex(R),
        isTypeaheadInProgress: () => Re.typeaheadInProgress,
        typeaheadMatchItem: (R, ge) => Re.typeaheadMatchItem(R, ge),
        // getCommonAdapterMethods
        addClass: pe,
        removeClass: G,
        hasClass: sr,
        setRippleCenter: (R) => V && V.setRippleCenter(R),
        activateBottomLine: () => V && V.activate(),
        deactivateBottomLine: () => V && V.deactivate(),
        notifyChange: (R) => {
          var ge;
          A(!0), S() && x(!((ge = o(L)) != null && ge.isValid())), Be(Ar(), "SMUISelectChange", { value: p(), index: o(Z) });
        },
        // getOutlineAdapterMethods
        hasOutline: () => !!he,
        notchOutline: (R) => he && he.notch(R),
        closeOutline: () => he && he.closeNotch(),
        // getLabelAdapterMethods
        hasLabel: () => !!O,
        floatLabel: (R) => O && O.float(R),
        getLabelWidth: () => O ? O.getWidth() : 0,
        setLabelRequired: (R) => O && O.setRequired(R)
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
  ), H(Z, an().indexOf(p()), !0), o(L).init(), sn(J), () => {
    var R;
    (R = o(L)) == null || R.destroy();
  })), Fn(() => {
    Y && Y();
  });
  function sr(R) {
    return R in ee ? ee[R] : Ar().classList.contains(R);
  }
  function pe(R) {
    ee[R] || (ee[R] = !0);
  }
  function G(R) {
    (!(R in ee) || ee[R]) && (ee[R] = !1);
  }
  function P(R, ge) {
    te[R] != ge && (ge === "" || ge == null ? delete te[R] : te[R] = ge);
  }
  function ne(R) {
    be[R] || (be[R] = !0);
  }
  function Te(R) {
    (!(R in be) || be[R]) && (be[R] = !1);
  }
  function ot(R) {
    return R in ue ? ue[R] ?? null : Ar().getAttribute(R);
  }
  function mt(R, ge) {
    ue[R] !== ge && (ue[R] = ge);
  }
  function Zt(R) {
    (!(R in ue) || ue[R] != null) && (ue[R] = void 0);
  }
  function an() {
    return Re.getOrderedList().map((R) => R.getValue());
  }
  function xi(R) {
    const ge = R.currentTarget.getBoundingClientRect();
    return (ut(R) ? R.touches[0].clientX : R.clientX) - ge.left;
  }
  function ut(R) {
    return "touches" in R;
  }
  function Ht() {
    if (o(L) == null)
      throw new Error("Instance is undefined.");
    return o(L).getUseDefaultValidation();
  }
  function sn(R) {
    var ge;
    (ge = o(L)) == null || ge.setUseDefaultValidation(R);
  }
  function Cr() {
    fe.focus();
  }
  function Ba() {
    var R;
    (R = o(L)) == null || R.layout();
  }
  function Ar() {
    return ae;
  }
  var Ge = {
    getUseDefaultValidation: Ht,
    setUseDefaultValidation: sn,
    focus: Cr,
    layout: Ba,
    getElement: Ar
  }, Qe = $v(), ze = K(Qe);
  He(ze, (R, ge, rt) => ({ class: R, style: ge, ...rt }), [
    () => Ze({
      "mdc-select": !0,
      "mdc-select--required": b(),
      "mdc-select--disabled": v(),
      "mdc-select--filled": f() === "filled",
      "mdc-select--outlined": f() === "outlined",
      "smui-select--standard": f() === "standard",
      "mdc-select--with-leading-icon": s(y()) ? e.leadingIcon : y(),
      "mdc-select--no-label": h() || g() == null,
      "mdc-select--invalid": x(),
      "mdc-select--activated": o(me),
      "mdc-data-table__pagination-rows-per-page-select": st === "data-table:pagination",
      ...ee,
      [l()]: !0
    }),
    () => Object.entries(te).map(([R, ge]) => `${R}: ${ge};`).concat([c()]).join(" "),
    () => Ea(k, [
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
  var Bt = W(ze);
  {
    var Pn = (R) => {
      var ge = Qv();
      He(
        ge,
        (rt) => ({
          type: "hidden",
          required: b(),
          disabled: v(),
          value: p(),
          ...rt
        }),
        [() => dt(k, "input$")],
        void 0,
        void 0,
        !0
      ), E(R, ge);
    };
    re(Bt, (R) => {
      I() && R(Pn);
    });
  }
  var Je = Q(Bt, 2), _t = (R) => {
    var ge;
    fe.focus(), o(L) && o(L).handleClick(xi(R)), (ge = e.anchor$onclick) == null || ge.call(e, R);
  }, Lt = (R) => {
    var ge;
    o(L) && o(L).handleKeydown(R), (ge = e.onkeydown) == null || ge.call(e, R);
  }, We = (R) => {
    var ge;
    o(L) && o(L).handleBlur(), Be(Ar(), "blur", R), (ge = e.anchor$onblur) == null || ge.call(e, R);
  }, Rt = (R) => {
    var ge;
    o(L) && o(L).handleFocus(), Be(Ar(), "focus", R), (ge = e.anchor$onfocus) == null || ge.call(e, R);
  };
  He(
    Je,
    (R, ge) => ({
      class: R,
      "aria-required": b() ? "true" : void 0,
      "aria-disabled": v() ? "true" : void 0,
      "aria-controls": o(z),
      "aria-expanded": o(me) ? "true" : "false",
      "aria-describedby": o(M),
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
      () => dt(k, "anchor$")
    ]
  );
  var or = W(Je);
  {
    var _n = (R) => {
      var ge = Jv();
      E(R, ge);
    };
    re(or, (R) => {
      f() === "filled" && R(_n);
    });
  }
  var yt = Q(or, 2);
  {
    var Ut = (R) => {
      {
        let ge = /* @__PURE__ */ de(() => w() + "-smui-label"), rt = /* @__PURE__ */ de(() => t() !== ""), Ct = /* @__PURE__ */ de(() => dt(k, "label$"));
        Se(
          us(R, Ke(
            {
              get id() {
                return o(ge);
              },
              get floatAbove() {
                return o(rt);
              },
              get required() {
                return b();
              }
            },
            () => o(Ct),
            {
              children: (dr, ur) => {
                var oa = oe(), Si = K(oa);
                {
                  var Kr = (Qr) => {
                  }, Vs = (Qr) => {
                    var Ua = oe(), la = K(Ua);
                    {
                      var il = (xr) => {
                        var Jr = et();
                        ve(() => Me(Jr, g())), E(xr, Jr);
                      }, Wa = (xr) => {
                        var Jr = oe(), zs = K(Jr);
                        _e(zs, g), E(xr, Jr);
                      };
                      re(
                        la,
                        (xr) => {
                          typeof g() == "string" ? xr(il) : xr(Wa, !1);
                        },
                        !0
                      );
                    }
                    E(Qr, Ua);
                  };
                  re(Si, (Qr) => {
                    g() == null ? Qr(Kr) : Qr(Vs, !1);
                  });
                }
                E(dr, oa);
              },
              $$slots: { default: !0 }
            }
          )),
          (dr) => O = dr,
          () => O
        );
      }
    };
    re(yt, (R) => {
      f() !== "outlined" && !h() && g() != null && R(Ut);
    });
  }
  var yn = Q(yt, 2);
  {
    var qt = (R) => {
      {
        let ge = /* @__PURE__ */ de(() => h() || g() == null), rt = /* @__PURE__ */ de(() => dt(k, "outline$"));
        Se(
          Jd(R, Ke(
            {
              get noLabel() {
                return o(ge);
              }
            },
            () => o(rt),
            {
              children: (Ct, dr) => {
                var ur = oe(), oa = K(ur);
                {
                  var Si = (Kr) => {
                    {
                      let Vs = /* @__PURE__ */ de(() => w() + "-smui-label"), Qr = /* @__PURE__ */ de(() => t() !== ""), Ua = /* @__PURE__ */ de(() => dt(k, "label$"));
                      Se(
                        us(Kr, Ke(
                          {
                            get id() {
                              return o(Vs);
                            },
                            get floatAbove() {
                              return o(Qr);
                            },
                            get required() {
                              return b();
                            }
                          },
                          () => o(Ua),
                          {
                            children: (la, il) => {
                              var Wa = oe(), xr = K(Wa);
                              {
                                var Jr = (da) => {
                                }, zs = (da) => {
                                  var al = oe(), Nu = K(al);
                                  {
                                    var Zu = (wi) => {
                                      var ua = et();
                                      ve(() => Me(ua, g())), E(wi, ua);
                                    }, Hu = (wi) => {
                                      var ua = oe(), Bu = K(ua);
                                      _e(Bu, g), E(wi, ua);
                                    };
                                    re(
                                      Nu,
                                      (wi) => {
                                        typeof g() == "string" ? wi(Zu) : wi(Hu, !1);
                                      },
                                      !0
                                    );
                                  }
                                  E(da, al);
                                };
                                re(xr, (da) => {
                                  g() == null ? da(Jr) : da(zs, !1);
                                });
                              }
                              E(la, Wa);
                            },
                            $$slots: { default: !0 }
                          }
                        )),
                        (la) => O = la,
                        () => O
                      );
                    }
                  };
                  re(oa, (Kr) => {
                    !h() && g() != null && Kr(Si);
                  });
                }
                E(Ct, ur);
              },
              $$slots: { default: !0 }
            }
          )),
          (Ct) => he = Ct,
          () => he
        );
      }
    };
    re(yn, (R) => {
      f() === "outlined" && R(qt);
    });
  }
  var Yr = Q(yn, 2);
  _e(Yr, () => e.leadingIcon ?? Ie);
  var Cn = Q(Yr, 2);
  He(Cn, (R, ge) => ({ class: R, ...ge }), [
    () => Ze({
      "mdc-select__selected-text-container": !0,
      [j()]: !0
    }),
    () => dt(k, "selectedTextContainer$")
  ]);
  var Er = W(Cn);
  He(
    Er,
    (R, ge) => ({
      id: w() + "-smui-selected-text",
      class: R,
      role: "button",
      "aria-haspopup": "listbox",
      "aria-labelledby": w() + "-smui-label",
      ...ge
    }),
    [
      () => Ze({
        "mdc-select__selected-text": !0,
        [U()]: !0
      }),
      () => dt(k, "selectedText$")
    ]
  );
  var sa = W(Er);
  De(Er, (R, ge) => ie == null ? void 0 : ie(R, ge), B), De(Cn, (R, ge) => ie == null ? void 0 : ie(R, ge), D);
  var An = Q(Cn, 2);
  He(An, (R, ge) => ({ class: R, ...ge }), [
    () => Ze({
      "mdc-select__dropdown-icon": !0,
      [N()]: !0
    }),
    () => dt(k, "dropdownIcon$")
  ]), De(An, (R, ge) => ie == null ? void 0 : ie(R, ge), q);
  var lr = Q(An, 2);
  {
    var zn = (R) => {
      {
        let ge = /* @__PURE__ */ de(() => dt(k, "ripple$"));
        Se(Qd(R, Ke(() => o(ge))), (rt) => V = rt, () => V);
      }
    };
    re(lr, (R) => {
      f() !== "outlined" && d() && R(zn);
    });
  }
  Se(Je, (R) => fe = R, () => fe), De(Je, (R, ge) => ie == null ? void 0 : ie(R, ge), C);
  var qr = Q(Je, 2);
  {
    let R = /* @__PURE__ */ de(() => Ze({
      "mdc-select__menu": !0,
      ...be,
      [F()]: !0
    })), ge = /* @__PURE__ */ de(() => dt(k, "menu$"));
    Bv(qr, Ke(
      {
        get class() {
          return o(R);
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
          o(L) && o(L).handleMenuItemAction(rt.detail.index), (Ct = e.onSMUIMenuSelected) == null || Ct.call(e, rt);
        },
        onSMUIMenuSurfaceClosing: (rt) => {
          var Ct;
          o(L) && o(L).handleMenuClosing(), (Ct = e.onSMUIMenuSurfaceClosing) == null || Ct.call(e, rt);
        },
        onSMUIMenuSurfaceClosed: (rt) => {
          var Ct;
          o(L) && o(L).handleMenuClosed(), (Ct = e.onSMUIMenuSurfaceClosed) == null || Ct.call(e, rt);
        },
        onSMUIMenuSurfaceOpened: (rt) => {
          var Ct;
          o(L) && o(L).handleMenuOpened(), (Ct = e.onSMUIMenuSurfaceOpened) == null || Ct.call(e, rt);
        },
        get open() {
          return o(me);
        },
        set open(rt) {
          H(me, rt, !0);
        },
        children: (rt, Ct) => {
          {
            let dr = /* @__PURE__ */ de(() => dt(k, "list$"));
            Uv(rt, Ke(
              {
                role: "listbox",
                get wrapFocus() {
                  return o(qe);
                }
              },
              () => o(dr),
              {
                get selectedIndex() {
                  return o(Z);
                },
                set selectedIndex(ur) {
                  H(Z, ur, !0);
                },
                children: (ur, oa) => {
                  var Si = oe(), Kr = K(Si);
                  _e(Kr, () => e.children ?? Ie), E(ur, Si);
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
  Se(ze, (R) => ae = R, () => ae), De(ze, (R, ge) => Gn == null ? void 0 : Gn(R, ge), () => ({
    ripple: f() === "filled",
    unbounded: !1,
    addClass: pe,
    removeClass: G,
    addStyle: P
  })), De(ze, (R, ge) => no == null ? void 0 : no(R, ge), () => ({ addClass: pe, removeClass: G })), De(ze, (R, ge) => ie == null ? void 0 : ie(R, ge), u);
  var js = Q(ze, 2);
  {
    var ku = (R) => {
      {
        let ge = /* @__PURE__ */ de(() => dt(k, "helperText$"));
        qv(R, Ke(() => o(ge), {
          children: (rt, Ct) => {
            var dr = oe(), ur = K(dr);
            _e(ur, () => e.helperText ?? Ie), E(rt, dr);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    re(js, (R) => {
      e.helperText && R(ku);
    });
  }
  ve(() => Me(sa, t())), E(n, Qe);
  var Gu = Ae(Ge);
  return i(), Gu;
}
function th(n, e) {
  Ce(e, !0);
  const t = () => bi(d, "$selectedValue", r), [r, i] = Ei();
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
  const v = /* @__PURE__ */ de(() => s() != null && s() !== "" && t() === s());
  it(f), Fn(f);
  function f() {
    o(v) && l && nr(c, l.getPrimaryText());
  }
  function h() {
    return l.getElement();
  }
  var g = { getElement: h };
  Se(
    zv(n, Ke(
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
          var x = oe(), S = K(x);
          _e(S, () => e.children ?? Ie), E(_, x);
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
function nh(n, e) {
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
  eh(n, {
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
      cn(h, 17, t, Ir, (g, p, _) => {
        {
          let A = /* @__PURE__ */ de(() => c(_));
          th(g, {
            get onclick() {
              return o(A);
            },
            get value() {
              return o(p).value;
            },
            children: (x, S) => {
              var b = et();
              ve(() => Me(b, o(p).label)), E(x, b);
            },
            $$slots: { default: !0 }
          });
        }
      }), E(d, f);
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
function rh(n) {
  return n ? n.scrollHeight > n.offsetHeight : !1;
}
function ih(n) {
  return n ? n.scrollTop === 0 : !1;
}
function ah(n) {
  return n ? Math.ceil(n.scrollHeight - n.scrollTop) === n.clientHeight : !1;
}
function sh(n) {
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
var oh = (
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
}, ro = {
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
var lh = (
  /** @class */
  function(n) {
    bn(e, n);
    function e(t) {
      var r = n.call(this, je(je({}, e.defaultAdapter), t)) || this;
      return r.dialogOpen = !1, r.isFullscreen = !1, r.animationFrame = 0, r.animationTimer = 0, r.escapeKeyAction = ha.CLOSE_ACTION, r.scrimClickAction = ha.CLOSE_ACTION, r.autoStackButtons = !0, r.areButtonsStacked = !1, r.suppressDefaultPressSelector = ha.SUPPRESS_DEFAULT_PRESS_SELECTOR, r.animFrame = new oh(), r.contentScrollHandler = function() {
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
        return ro;
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
        }, ro.DIALOG_ANIMATION_OPEN_TIME_MS);
      });
    }, e.prototype.close = function(t) {
      var r = this;
      t === void 0 && (t = ""), this.dialogOpen && (this.dialogOpen = !1, this.adapter.notifyClosing(t), this.adapter.addClass(Xe.CLOSING), this.adapter.removeClass(Xe.OPEN), this.adapter.removeBodyClass(Xe.SCROLL_LOCK), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), cancelAnimationFrame(this.animationFrame), this.animationFrame = 0, clearTimeout(this.animationTimer), this.animationTimer = setTimeout(function() {
        r.adapter.releaseFocus(), r.handleAnimationTimerEnd(), r.adapter.notifyClosed(t);
      }, ro.DIALOG_ANIMATION_CLOSE_TIME_MS));
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
  }(In)
), dh = /* @__PURE__ */ X('<div class="mdc-dialog__surface-scrim"></div>'), uh = /* @__PURE__ */ X('<div><div><div><!> <!></div></div> <div class="mdc-dialog__scrim"></div></div> <!>', 1);
function ch(n, e) {
  Ce(e, !0);
  const t = () => bi(B, "$aboveFullscreenShown", r), [r, i] = Ei(), { FocusTrap: a } = Bf, { closest: s, matches: u } = ka;
  let l = m(e, "use", 19, () => []), c = m(e, "class", 3, ""), d = m(e, "open", 15, !1), v = m(e, "selection", 3, !1), f = m(e, "escapeKeyAction", 3, "close"), h = m(e, "scrimClickAction", 3, "close"), g = m(e, "autoStackButtons", 3, !0), p = m(e, "fullscreen", 3, !1), _ = m(e, "sheet", 3, !1), A = m(e, "noContentPadding", 3, !1), x = m(e, "container$class", 3, ""), S = m(e, "surface$class", 3, ""), b = /* @__PURE__ */ Ve(e, [
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
  ]), w, I = /* @__PURE__ */ le(void 0), y = new ra(), C = Ee({}), T, D = jn(!1), j = ye("SMUI:dialog:aboveFullscreen"), B = ye("SMUI:dialog:aboveFullscreenShown") ?? jn(!1), U = ye("SMUI:addLayoutListener"), q, N = [], F = (G) => (N.push(G), () => {
    const P = N.indexOf(G);
    P >= 0 && N.splice(P, 1);
  });
  ce("SMUI:dialog:actions:reversed", D), ce("SMUI:addLayoutListener", F), ce("SMUI:dialog:selection", v()), ce("SMUI:dialog:aboveFullscreen", j || p()), ce("SMUI:dialog:aboveFullscreenShown", B), _() && ce("SMUI:icon-button:context", "dialog:sheet"), xe(() => {
    o(I) && o(I).getEscapeKeyAction() !== f() && o(I).setEscapeKeyAction(f());
  }), xe(() => {
    o(I) && o(I).getScrimClickAction() !== h() && o(I).setScrimClickAction(h());
  }), xe(() => {
    o(I) && o(I).getAutoStackButtons() !== g() && o(I).setAutoStackButtons(g());
  }), xe(() => {
    g() || nr(D, !0);
  }), U && (q = U(me)), xe(() => {
    o(I) && o(I).isOpen() !== d() && (d() ? o(I).open({ isAboveFullscreenDialog: !!j }) : o(I).close());
  });
  let k = t();
  xe(() => {
    p() && o(I) && k !== t() && (k = t(), t() ? o(I).showSurfaceScrim() : o(I).hideSurfaceScrim());
  }), it(() => (T = new a(w, { initialFocusEl: ue() ?? void 0 }), H(
    I,
    new lh({
      addBodyClass: (G) => document.body.classList.add(G),
      addClass: ae,
      areButtonsStacked: () => sh(ee()),
      clickDefaultButton: () => {
        const G = te();
        G && G.click();
      },
      eventTargetMatches: (G, P) => G ? u(G, P) : !1,
      getActionFromEvent: (G) => {
        if (!G.target)
          return "";
        const P = s(G.target, "[data-mdc-dialog-action]");
        return P && P.getAttribute("data-mdc-dialog-action");
      },
      getInitialFocusEl: ue,
      hasClass: J,
      isContentScrollable: () => rh(fe()),
      notifyClosed: (G) => {
        d(!1), Be(be(), "SMUIDialogClosed", G ? { action: G } : {});
      },
      notifyClosing: (G) => Be(be(), "SMUIDialogClosing", G ? { action: G } : {}),
      notifyOpened: () => Be(be(), "SMUIDialogOpened", {}),
      notifyOpening: () => Be(be(), "SMUIDialogOpening", {}),
      releaseFocus: () => T.releaseFocus(),
      removeBodyClass: (G) => document.body.classList.remove(G),
      removeClass: L,
      reverseButtons: () => {
        nr(D, !0);
      },
      trapFocus: () => T.trapFocus(),
      registerContentEventHandler: (G, P) => {
        const ne = fe();
        ne instanceof HTMLElement && y.on(ne, G, P);
      },
      deregisterContentEventHandler: (G, P) => {
        const ne = fe();
        ne instanceof HTMLElement && y.off(ne, G, P);
      },
      isScrollableContentAtTop: () => ih(fe()),
      isScrollableContentAtBottom: () => ah(fe()),
      registerWindowEventHandler: (G, P) => y.on(window, G, P),
      deregisterWindowEventHandler: (G, P) => y.off(window, G, P)
    }),
    !0
  ), o(I).init(), () => {
    var G;
    (G = o(I)) == null || G.destroy(), y.clear();
  })), Fn(() => {
    q && q();
  });
  function J(G) {
    return G in C ? C[G] : be().classList.contains(G);
  }
  function ae(G) {
    C[G] || (C[G] = !0);
  }
  function L(G) {
    (!(G in C) || C[G]) && (C[G] = !1);
  }
  function ee() {
    return [].slice.call(be().querySelectorAll(".mdc-dialog__button"));
  }
  function te() {
    return be().querySelector("[data-mdc-dialog-button-default]");
  }
  function fe() {
    return be().querySelector(".mdc-dialog__content");
  }
  function ue() {
    return be().querySelector("[data-mdc-dialog-initial-focus]");
  }
  function Z() {
    j && nr(B, !0), requestAnimationFrame(() => {
      N.forEach((G) => G());
    });
  }
  function z() {
    N.forEach((G) => G());
  }
  function M() {
    j && nr(B, !1);
  }
  function $() {
    return d();
  }
  function Y(G) {
    d(G);
  }
  function me() {
    var G;
    return (G = o(I)) == null ? void 0 : G.layout();
  }
  function be() {
    return w;
  }
  var Ne = { isOpen: $, setOpen: Y, layout: me, getElement: be }, nt = uh();
  Pt("resize", ls, () => d() && o(I) && o(I).layout()), Pt("orientationchange", ls, () => d() && o(I) && o(I).layout()), Pt("keydown", Bo.body, (G) => o(I) && o(I).handleDocumentKeydown(G));
  var qe = K(nt), Re = (G) => {
    var P;
    Z(), (P = e.onSMUIDialogOpening) == null || P.call(e, G);
  }, st = (G) => {
    var P;
    z(), (P = e.onSMUIDialogOpened) == null || P.call(e, G);
  }, kt = (G) => {
    var P;
    M(), (P = e.onSMUIDialogClosed) == null || P.call(e, G);
  }, Gt = (G) => {
    var P;
    o(I) && o(I).handleClick(G), (P = e.onclick) == null || P.call(e, G);
  }, O = (G) => {
    var P;
    o(I) && o(I).handleKeydown(G), (P = e.onkeydown) == null || P.call(e, G);
  };
  He(
    qe,
    (G, P) => ({
      class: G,
      role: "alertdialog",
      "aria-modal": "true",
      ...P,
      onSMUIDialogOpening: Re,
      onSMUIDialogOpened: st,
      onSMUIDialogClosed: kt,
      onclick: Gt,
      onkeydown: O
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
      () => Ea(b, ["container$", "surface$"])
    ]
  );
  var V = W(qe);
  He(V, (G, P) => ({ class: G, ...P }), [
    () => Ze({ "mdc-dialog__container": !0, [x()]: !0 }),
    () => dt(b, "container$")
  ]);
  var he = W(V);
  He(he, (G, P) => ({ class: G, role: "alertdialog", "aria-modal": "true", ...P }), [
    () => Ze({ "mdc-dialog__surface": !0, [S()]: !0 }),
    () => dt(b, "surface$")
  ]);
  var Fe = W(he);
  _e(Fe, () => e.children ?? Ie);
  var Nt = Q(Fe, 2);
  {
    var vn = (G) => {
      var P = dh();
      Pt("transitionend", P, () => o(I) && o(I).handleSurfaceScrimTransitionEnd()), E(G, P);
    };
    re(Nt, (G) => {
      p() && G(vn);
    });
  }
  Se(qe, (G) => w = G, () => w), De(qe, (G, P) => ie == null ? void 0 : ie(G, P), l);
  var sr = Q(qe, 2);
  _e(sr, () => e.over ?? Ie), E(n, nt);
  var pe = Ae(Ne);
  return i(), pe;
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
  ), Ae(a);
}
function ru(n, e) {
  Ce(e, !0);
  let t = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Se(
    ia(n, Ke({ _smuiClass: "mdc-dialog__content", tag: "div" }, () => t, {
      children: (s, u) => {
        var l = oe(), c = K(l);
        _e(c, () => e.children ?? Ie), E(s, l);
      },
      $$slots: { default: !0 }
    })),
    (s) => r = s,
    () => r
  ), Ae(a);
}
function vh(n, e) {
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
          var l = oe(), c = K(l);
          _e(c, () => e.children ?? Ie), E(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Ae(a);
}
const Fs = jn({
  component: null,
  props: {},
  isOpen: !1
});
function hh(n, e) {
  Ce(e, !0);
  let t = /* @__PURE__ */ le(void 0), r = /* @__PURE__ */ le(!1);
  const i = Fs.subscribe((l) => {
    H(t, l, !0), H(r, l.isOpen, !0);
  });
  it(() => () => i());
  var a = oe(), s = K(a);
  {
    var u = (l) => {
      var c = oe(), d = K(c);
      Pa(d, () => o(t).component, (v, f) => {
        f(v, Ke(() => o(t).props, {
          get open() {
            return o(r);
          },
          set open(h) {
            H(r, h, !0);
          }
        }));
      }), E(l, c);
    };
    re(s, (l) => {
      o(t).isOpen && o(t).component && l(u);
    });
  }
  E(n, a), Ae();
}
function Ga(n, e = {}) {
  return new Promise((t) => {
    Fs.set({
      component: n,
      props: e,
      isOpen: !0,
      resolve: t
    });
  });
}
function Nr(n, e) {
  Fs.update((t) => {
    var r;
    return (r = t.resolve) == null || r.call(t, { type: n, data: e }), { component: null, props: {}, isOpen: !1 };
  });
}
function gh(n) {
  Fs.update((e) => e.isOpen ? { ...e, props: { ...e.props, ...n } } : e);
}
var mh = /* @__PURE__ */ X('<div class="oscd-confirm-dialog__content svelte-1eipd40"> </div>');
function iu(n, e) {
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
      ru(f, {
        children: (h, g) => {
          var p = mh(), _ = W(p);
          ve(() => Me(_, i())), E(h, p);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { content: !0 }
  }), Ae();
}
var ph = /* @__PURE__ */ X('<div class="dialog__title svelte-ec2c4h"><h4 class="svelte-ec2c4h"> </h4> <!></div>'), bh = /* @__PURE__ */ X("<!> <!>", 1), Ih = /* @__PURE__ */ X('<!> <!> <div class="dialog__actions svelte-ec2c4h"><!></div>', 1);
function zo(n, e) {
  Ce(e, !0);
  let t = m(e, "open", 15, !1), r = m(e, "title", 3, ""), i = m(e, "confirmActionText", 3, "Confirm"), a = m(e, "confirmActionColor", 3, "primary"), s = m(e, "cancelActionText", 3, "Cancel"), u = m(e, "width", 3, "80vw"), l = m(e, "maxWidth", 3, "85vw"), c = m(e, "height", 3, "85vh"), d = m(e, "maxHeight", 3, "85vh"), v = m(e, "confirmDisabled", 3, !1), f = m(e, "color", 3, "var(--mdc-theme-primary, #ff3e00)"), h = m(e, "showCloseButton", 3, !0), g = m(e, "onClose", 3, () => {
  }), p = m(e, "onCancel", 3, () => {
  }), _ = m(e, "onConfirm", 3, () => {
  });
  function A(S) {
    S.detail.action === "cancel" ? p()() : S.detail.action === "confirm" ? _()() : (S.detail.action, g()());
  }
  let x = /* @__PURE__ */ de(() => {
    let S;
    return a() === "primary" ? S = f() : S = "#FF203A", v() ? "" : `background-color: ${S}; color: white;`;
  });
  {
    let S = /* @__PURE__ */ de(() => `width: ${u()}; max-width: ${l()}; height: ${c()}; max-height: ${d()};`);
    ch(n, {
      "aria-labelledby": "large-scroll-title",
      "aria-describedby": "large-scroll-content",
      onSMUIDialogClosed: A,
      get surface$style() {
        return o(S);
      },
      get open() {
        return t();
      },
      set open(b) {
        t(b);
      },
      children: (b, w) => {
        var I = Ih(), y = K(I);
        fh(y, {
          children: (j, B) => {
            var U = ph(), q = W(U), N = W(q), F = Q(q, 2);
            {
              var k = (J) => {
                cu(J, {
                  onClick: () => {
                    t(!1), g()();
                  },
                  tooltip: "Close",
                  tooltipSide: "left",
                  type: "close",
                  fillColor: "white"
                });
              };
              re(F, (J) => {
                h() && J(k);
              });
            }
            ve(() => {
              tt(U, `background-color: ${f()};`), Me(N, r());
            }), E(j, U);
          },
          $$slots: { default: !0 }
        });
        var C = Q(y, 2);
        ru(C, {
          id: "dialog__content",
          children: (j, B) => {
            var U = oe(), q = K(U);
            _e(q, () => e.content ?? Ie), E(j, U);
          },
          $$slots: { default: !0 }
        });
        var T = Q(C, 2), D = W(T);
        vh(D, {
          class: "oscd-dialog__actions",
          children: (j, B) => {
            var U = bh(), q = K(U);
            {
              var N = (k) => {
                Vn(k, {
                  action: "cancel",
                  color: "secondary",
                  tabindex: "1",
                  children: (J, ae) => {
                    var L = et();
                    ve(() => Me(L, s())), E(J, L);
                  },
                  $$slots: { default: !0 }
                });
              };
              re(q, (k) => {
                s() && k(N);
              });
            }
            var F = Q(q, 2);
            Vn(F, {
              action: "confirm",
              get disabled() {
                return v();
              },
              get style() {
                return o(x);
              },
              tabindex: "0",
              children: (k, J) => {
                var ae = et();
                ve(() => Me(ae, i())), E(k, ae);
              },
              $$slots: { default: !0 }
            }), E(j, U);
          },
          $$slots: { default: !0 }
        }), E(b, I);
      },
      $$slots: { default: !0 }
    });
  }
  Ae();
}
var _h = /* @__PURE__ */ X('<span class="oscd-icon"><!></span>');
function Dt(n, e) {
  var t = _h(), r = W(t);
  _e(r, () => e.children ?? Ie), E(n, t);
}
var yh = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function au(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Dt(n, {
    children: (r, i) => {
      var a = yh();
      ve(() => tt(a, t())), E(r, a);
    }
  });
}
var Ch = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function su(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Dt(n, {
    children: (r, i) => {
      var a = Ch();
      ve(() => tt(a, t())), E(r, a);
    }
  });
}
var Ah = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function ou(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Dt(n, {
    children: (r, i) => {
      var a = Ah();
      ve(() => tt(a, t())), E(r, a);
    }
  });
}
var Eh = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"></path></svg>');
function lu(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Dt(n, {
    children: (r, i) => {
      var a = Eh();
      ve(() => tt(a, t())), E(r, a);
    }
  });
}
var xh = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM2 12c0-2.79 1.64-5.2 4.01-6.32V3.52C2.52 4.76 0 8.09 0 12s2.52 7.24 6.01 8.48v-2.16C3.64 17.2 2 14.79 2 12zm13-9c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"></path></svg>');
function Sh(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Dt(n, {
    children: (r, i) => {
      var a = xh();
      ve(() => tt(a, t())), E(r, a);
    }
  });
}
vc();
var wh = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24" height="24" fill="#004552"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"></path></svg>');
function Th(n) {
  var e = wh();
  E(n, e);
}
var Dh = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#004552"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Lh(n) {
  var e = Dh();
  E(n, e);
}
var Rh = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"></path></svg>');
function Oh(n, e) {
  let t = m(e, "size", 3, "24px"), r = m(e, "fill", 3, "#004552");
  var i = Rh();
  ve(() => {
    Tt(i, "height", t()), Tt(i, "width", t()), Tt(i, "fill", r());
  }), E(n, i);
}
var Mh = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Fh(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Dt(n, {
    children: (r, i) => {
      var a = Mh();
      ve(() => tt(a, t())), E(r, a);
    }
  });
}
var Ph = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function kh(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Dt(n, {
    children: (r, i) => {
      var a = Ph();
      ve(() => tt(a, t())), E(r, a);
    }
  });
}
var Gh = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"></path></svg>');
function Nh(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Dt(n, {
    children: (r, i) => {
      var a = Gh();
      ve(() => tt(a, t())), E(r, a);
    }
  });
}
var Zh = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"></path></svg>');
function Hh(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Dt(n, {
    children: (r, i) => {
      var a = Zh();
      ve(() => tt(a, t())), E(r, a);
    }
  });
}
var Bh = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"></path></svg>');
function Uh(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Dt(n, {
    children: (r, i) => {
      var a = Bh();
      ve(() => tt(a, t())), E(r, a);
    }
  });
}
var Wh = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"><path d="m176-120-56-56 301-302-181-45 198-123-17-234 179 151 216-88-87 217 151 178-234-16-124 198-45-181-301 301Zm24-520-80-80 80-80 80 80-80 80Zm355 197 48-79 93 7-60-71 35-86-86 35-71-59 7 92-79 49 90 22 23 90Zm165 323-80-80 80-80 80 80-80 80ZM569-570Z"></path></svg>');
function jh(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Dt(n, {
    children: (r, i) => {
      var a = Wh();
      ve(() => tt(a, t())), E(r, a);
    }
  });
}
var Vh = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m770-302-60-62q40-11 65-42.5t25-73.5q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 57-29.5 105T770-302ZM634-440l-80-80h86v80h-6ZM792-56 56-792l56-56 736 736-56 56ZM440-280H280q-83 0-141.5-58.5T80-480q0-69 42-123t108-71l74 74h-24q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h65l79 80H320Z"></path></svg>');
function zh(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Dt(n, {
    children: (r, i) => {
      var a = Vh();
      ve(() => tt(a, t())), E(r, a);
    }
  });
}
var Xh = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"></path></svg>');
function Yh(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Dt(n, {
    children: (r, i) => {
      var a = Xh();
      ve(() => tt(a, t())), E(r, a);
    }
  });
}
var qh = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"></path></svg>');
function Kh(n, e) {
  let t = m(e, "svgStyles", 8, "");
  Dt(n, {
    children: (r, i) => {
      var a = qh();
      ve(() => tt(a, t())), E(r, a);
    }
  });
}
var Qh = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3" cursor="pointer"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Xo(n, e) {
  let t = m(e, "svgStyles", 8, "");
  Dt(n, {
    children: (r, i) => {
      var a = Qh();
      ve(() => tt(a, t())), E(r, a);
    }
  });
}
var Jh = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m320-160-56-57 103-103H80v-80h287L264-503l56-57 200 200-200 200Zm320-240L440-600l200-200 56 57-103 103h287v80H593l103 103-56 57Z"></path></svg>');
function du(n, e) {
  let t = m(e, "svgStyles", 8, "");
  Dt(n, {
    children: (r, i) => {
      var a = Jh();
      ve(() => tt(a, t())), E(r, a);
    }
  });
}
var $h = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M360-160q-33 0-56.5-23.5T280-240q0-33 23.5-56.5T360-320q33 0 56.5 23.5T440-240q0 33-23.5 56.5T360-160Zm240 0q-33 0-56.5-23.5T520-240q0-33 23.5-56.5T600-320q33 0 56.5 23.5T680-240q0 33-23.5 56.5T600-160ZM360-400q-33 0-56.5-23.5T280-480q0-33 23.5-56.5T360-560q33 0 56.5 23.5T440-480q0 33-23.5 56.5T360-400Zm240 0q-33 0-56.5-23.5T520-480q0-33 23.5-56.5T600-560q33 0 56.5 23.5T680-480q0 33-23.5 56.5T600-400ZM360-640q-33 0-56.5-23.5T280-720q0-33 23.5-56.5T360-800q33 0 56.5 23.5T440-720q0 33-23.5 56.5T360-640Zm240 0q-33 0-56.5-23.5T520-720q0-33 23.5-56.5T600-800q33 0 56.5 23.5T680-720q0 33-23.5 56.5T600-640Z"></path></svg>');
function Ps(n, e) {
  let t = m(e, "svgStyles", 3, "fill: gray; width: 25px; height: 25px");
  Dt(n, {
    children: (r, i) => {
      var a = $h();
      ve(() => tt(a, t())), E(r, a);
    }
  });
}
It(["change"]);
It(["change"]);
var eg = /* @__PURE__ */ X('<span role="tooltip" aria-labelledby="tooltip"><!></span>');
function uu(n, e) {
  Ce(e, !0);
  let t = m(e, "content", 3, ""), r = m(e, "side", 3, "top"), i = m(e, "hoverDelay", 3, 0), a = m(e, "transitionDuration", 3, 80);
  const s = `tt-${Math.random().toString(36).slice(2)}`;
  let u = /* @__PURE__ */ le(null), l = /* @__PURE__ */ le(null), c = /* @__PURE__ */ le(null), d = /* @__PURE__ */ le(null), v = /* @__PURE__ */ le(!1), f = /* @__PURE__ */ le(null), h = /* @__PURE__ */ le(null);
  function g() {
    t() && (i() > 0 ? H(f, setTimeout(() => H(v, !0), i()), !0) : H(v, !0));
  }
  function p() {
    o(f) && clearTimeout(o(f)), H(v, !1);
  }
  function _() {
    if (!o(l) || !o(d) || !o(u)) return;
    const b = o(u).getBoundingClientRect(), w = o(d).getBoundingClientRect();
    let I = 0, y = 0;
    const C = 8;
    switch (r()) {
      case "top":
        I = b.top - w.height - C, y = b.left + b.width / 2 - w.width / 2;
        break;
      case "bottom":
        I = b.bottom + C, y = b.left + b.width / 2 - w.width / 2;
        break;
      case "left":
        I = b.top + b.height / 2 - w.height / 2, y = b.left - w.width - C;
        break;
      case "right":
        I = b.top + b.height / 2 - w.height / 2, y = b.right + C;
        break;
    }
    o(l).style.top = `${I + window.scrollY}px`, o(l).style.left = `${y + window.scrollX}px`;
  }
  function A() {
    var b;
    (b = o(h)) == null || b.disconnect(), H(h, null), o(l) && o(l).parentNode && o(l).parentNode.removeChild(o(l)), H(l, null), H(d, null), H(c, null), o(f) && clearTimeout(o(f));
  }
  Fn(A), xe(() => {
    if (!(!o(v) || !t())) {
      if (!o(l)) {
        H(l, document.createElement("div"), !0), o(l).style.position = "absolute", o(l).style.zIndex = "9999", o(l).style.pointerEvents = "none", o(l).style.opacity = "0", o(l).style.transition = `opacity ${a()}ms ease`, o(l).id = s, o(l).setAttribute("role", "tooltip"), document.body.appendChild(o(l)), H(c, o(l).attachShadow({ mode: "open" }), !0);
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
      `, o(c).appendChild(b), H(d, document.createElement("div"), !0), o(c).appendChild(o(d)), H(
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
    const b = o(l), w = setTimeout(
      () => {
        b && b.parentNode && b.parentNode.removeChild(b), o(l) === b && A();
      },
      a()
    );
    return () => clearTimeout(w);
  });
  var x = eg(), S = W(x);
  _e(S, () => e.children ?? Ie), Se(x, (b) => H(u, b), () => o(u)), ve(() => Tt(x, "aria-describedby", t() ? s : void 0)), Pt("mouseenter", x, g), Pt("mouseleave", x, p), E(n, x), Ae();
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
var tg = (
  /** @class */
  function(n) {
    bn(e, n);
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
      return Lf(this, void 0, void 0, function() {
        return Rf(this, function(t) {
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
  }(In)
), ng = /* @__PURE__ */ X('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), rg = /* @__PURE__ */ X("<div><div><table><!></table></div> <!> <!></div>");
function ig(n, e) {
  Ce(e, !0);
  const t = () => bi(U, "$progressClosed", r), [r, i] = Ei(), { closest: a } = ka;
  let s = m(e, "use", 19, () => []), u = m(e, "class", 3, ""), l = m(e, "stickyHeader", 3, !1), c = m(e, "sortable", 3, !1), d = m(e, "sort", 15, null), v = m(e, "sortDirection", 15, "ascending"), f = m(e, "sortAscendingAriaLabel", 3, "sorted, ascending"), h = m(e, "sortDescendingAriaLabel", 3, "sorted, descending"), g = m(e, "container$use", 19, () => []), p = m(e, "container$class", 3, ""), _ = m(e, "table$use", 19, () => []), A = m(e, "table$class", 3, ""), x = /* @__PURE__ */ Ve(e, [
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
  ]), S, b = /* @__PURE__ */ le(void 0), w, I = /* @__PURE__ */ le(void 0), y = /* @__PURE__ */ le(void 0), C = Ee({}), T = /* @__PURE__ */ le(Ee({ height: "auto", top: "initial" })), D = ye("SMUI:addLayoutListener"), j, B = !1, U = jn(!1), q = jn(d());
  xe(() => {
    nr(q, d());
  });
  let N = jn(v());
  xe(() => {
    nr(N, v());
  }), ce("SMUI:checkbox:context", "data-table"), ce("SMUI:linear-progress:context", "data-table"), ce("SMUI:linear-progress:closed", U), ce("SMUI:data-table:sortable", c()), ce("SMUI:data-table:sort", q), ce("SMUI:data-table:sortDirection", N), ce("SMUI:data-table:sortAscendingAriaLabel", f()), ce("SMUI:data-table:sortDescendingAriaLabel", h()), D && (j = D(ue));
  let F;
  xe(() => {
    e.progress && o(b) && F !== t() && (F = t(), t() ? o(b).hideProgress() : o(b).showProgress());
  }), ce("SMUI:checkbox:mount", () => {
    o(b) && B && o(b).layout();
  }), ce("SMUI:data-table:header:mount", (O) => {
    H(I, O, !0);
  }), ce("SMUI:data-table:header:unmount", () => {
    H(I, void 0);
  }), ce("SMUI:data-table:body:mount", (O) => {
    H(y, O, !0);
  }), ce("SMUI:data-table:body:unmount", () => {
    H(y, void 0);
  }), it(() => (H(
    b,
    new tg({
      addClass: J,
      removeClass: ae,
      getHeaderCellElements: () => {
        var O;
        return ((O = o(I)) == null ? void 0 : O.cells.map((V) => V.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var O;
        return ((O = o(I)) == null ? void 0 : O.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (O, V) => {
        var he;
        return ((he = o(I)) == null ? void 0 : he.orderedCells[O].getAttr(V)) ?? null;
      },
      setAttributeByHeaderCellIndex: (O, V, he) => {
        var Fe;
        (Fe = o(I)) == null || Fe.orderedCells[O].addAttr(V, he);
      },
      setClassNameByHeaderCellIndex: (O, V) => {
        var he;
        (he = o(I)) == null || he.orderedCells[O].addClass(V);
      },
      removeClassNameByHeaderCellIndex: (O, V) => {
        var he;
        (he = o(I)) == null || he.orderedCells[O].removeClass(V);
      },
      notifySortAction: (O) => {
        d(O.columnId), v(O.sortValue), Be(Z(), "SMUIDataTableSorted", O);
      },
      getTableContainerHeight: () => w.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const O = Z().querySelector(".mdc-data-table__header-row");
        if (!O)
          throw new Error("MDCDataTable: Table header element not found.");
        return O.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (O) => {
        H(T, O, !0);
      },
      addClassAtRowIndex: (O, V) => {
        var he;
        (he = o(y)) == null || he.orderedRows[O].addClass(V);
      },
      getRowCount: () => {
        var O;
        return ((O = o(y)) == null ? void 0 : O.rows.length) ?? 0;
      },
      getRowElements: () => {
        var O;
        return ((O = o(y)) == null ? void 0 : O.rows.map((V) => V.element)) ?? [];
      },
      getRowIdAtIndex: (O) => {
        var V;
        return ((V = o(y)) == null ? void 0 : V.orderedRows[O].rowId) ?? null;
      },
      getRowIndexByChildElement: (O) => {
        var V;
        return ((V = o(y)) == null ? void 0 : V.orderedRows.map((he) => he.element).indexOf(a(O, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var O;
        return ((O = o(y)) == null ? void 0 : O.rows.filter((V) => V.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (O) => {
        var he;
        const V = (he = o(y)) == null ? void 0 : he.orderedRows[O].checkbox;
        return V ? V.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var V;
        const O = (V = o(I)) == null ? void 0 : V.checkbox;
        return O ? O.checked : !1;
      },
      isRowsSelectable: () => !!Z().querySelector(".mdc-data-table__row-checkbox") || !!Z().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (O) => {
        var he;
        const V = (he = o(y)) == null ? void 0 : he.orderedRows[O.rowIndex];
        V && Be(Z(), "SMUIDataTableSelectionChanged", {
          row: V.element,
          rowId: V.rowId,
          rowIndex: O.rowIndex,
          selected: O.selected
        });
      },
      notifySelectedAll: () => {
        L(!1), Be(Z(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        L(!1), Be(Z(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (O) => Be(Z(), "SMUIDataTableClickRow", O),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (O, V) => {
        var he;
        (he = o(y)) == null || he.orderedRows[O].removeClass(V);
      },
      setAttributeAtRowIndex: (O, V, he) => {
        var Fe;
        (Fe = o(y)) == null || Fe.orderedRows[O].addAttr(V, he);
      },
      setHeaderRowCheckboxChecked: (O) => {
        var he;
        const V = (he = o(I)) == null ? void 0 : he.checkbox;
        V && (V.checked = O);
      },
      setHeaderRowCheckboxIndeterminate: L,
      setRowCheckboxCheckedAtIndex: (O, V) => {
        var Fe;
        const he = (Fe = o(y)) == null ? void 0 : Fe.orderedRows[O].checkbox;
        he && (he.checked = V);
      },
      setSortStatusLabelByHeaderCellIndex: (O, V) => {
      }
    }),
    !0
  ), o(b).init(), o(b).layout(), B = !0, () => {
    var O;
    (O = o(b)) == null || O.destroy();
  })), Fn(() => {
    j && j();
  });
  function k(O) {
    o(b) && o(b).handleRowCheckboxChange(O);
  }
  function J(O) {
    C[O] || (C[O] = !0);
  }
  function ae(O) {
    (!(O in C) || C[O]) && (C[O] = !1);
  }
  function L(O) {
    var he;
    const V = (he = o(I)) == null ? void 0 : he.checkbox;
    V && (V.indeterminate = O);
  }
  function ee(O) {
    if (!o(b) || !O.detail.target)
      return;
    const V = a(O.detail.target, ".mdc-data-table__header-cell--with-sort");
    V && fe(V);
  }
  function te(O) {
    if (!o(b) || !O.detail.target)
      return;
    const V = a(O.detail.target, ".mdc-data-table__row");
    V && o(b) && o(b).handleRowClick({ rowId: O.detail.rowId, row: V });
  }
  function fe(O) {
    var Nt, vn;
    const V = ((Nt = o(I)) == null ? void 0 : Nt.orderedCells) ?? [], he = V.map((sr) => sr.element).indexOf(O);
    if (he === -1)
      return;
    const Fe = V[he].columnId ?? null;
    (vn = o(b)) == null || vn.handleSortAction({ columnId: Fe, columnIndex: he, headerCell: O });
  }
  function ue() {
    var O;
    return (O = o(b)) == null ? void 0 : O.layout();
  }
  function Z() {
    return S;
  }
  var z = { layout: ue, getElement: Z }, M = rg(), $ = (O) => {
    var V;
    o(b) && o(b).handleHeaderRowCheckboxChange(), (V = e.onSMUIDataTableHeaderCheckboxChange) == null || V.call(e, O);
  }, Y = (O) => {
    var V;
    ee(O), (V = e.onSMUIDataTableHeaderClick) == null || V.call(e, O);
  }, me = (O) => {
    var V;
    te(O), (V = e.onSMUIDataTableRowClick) == null || V.call(e, O);
  }, be = (O) => {
    var V;
    k(O), (V = e.onSMUIDataTableBodyCheckboxChange) == null || V.call(e, O);
  };
  He(
    M,
    (O, V) => ({
      class: O,
      ...V,
      onSMUIDataTableHeaderCheckboxChange: $,
      onSMUIDataTableHeaderClick: Y,
      onSMUIDataTableRowClick: me,
      onSMUIDataTableBodyCheckboxChange: be
    }),
    [
      () => Ze({
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": l(),
        ...C,
        [u()]: !0
      }),
      () => Ea(x, ["container$", "table$"])
    ]
  );
  var Ne = W(M);
  He(Ne, (O, V) => ({ class: O, ...V }), [
    () => Ze({
      "mdc-data-table__table-container": !0,
      [p()]: !0
    }),
    () => dt(x, "container$")
  ]);
  var nt = W(Ne);
  He(nt, (O, V) => ({ class: O, ...V }), [
    () => Ze({ "mdc-data-table__table": !0, [A()]: !0 }),
    () => dt(x, "table$")
  ]);
  var qe = W(nt);
  _e(qe, () => e.children ?? Ie), De(nt, (O, V) => ie == null ? void 0 : ie(O, V), _), Se(Ne, (O) => w = O, () => w), De(Ne, (O, V) => ie == null ? void 0 : ie(O, V), g);
  var Re = Q(Ne, 2);
  {
    var st = (O) => {
      var V = ng(), he = Q(W(V), 2);
      _e(he, () => e.progress ?? Ie), ve((Fe) => tt(V, Fe), [
        () => Object.entries(o(T)).map(([Fe, Nt]) => `${Fe}: ${Nt};`).join(" ")
      ]), E(O, V);
    };
    re(Re, (O) => {
      e.progress && O(st);
    });
  }
  var kt = Q(Re, 2);
  _e(kt, () => e.paginate ?? Ie), Se(M, (O) => S = O, () => S), De(M, (O, V) => ie == null ? void 0 : ie(O, V), s), E(n, M);
  var Gt = Ae(z);
  return i(), Gt;
}
var ag = /* @__PURE__ */ X("<thead><!></thead>");
function sg(n, e) {
  Ce(e, !0);
  let t = m(e, "use", 19, () => []), r = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i, a = /* @__PURE__ */ le(void 0), s = [];
  const u = /* @__PURE__ */ new WeakMap();
  ce("SMUI:data-table:row:header", !0);
  const l = ye("SMUI:checkbox:mount");
  ce("SMUI:checkbox:mount", (A) => {
    H(a, A, !0), l && l(A);
  });
  const c = ye("SMUI:checkbox:unmount");
  ce("SMUI:checkbox:unmount", (A) => {
    H(a, void 0), c && c(A);
  }), ce("SMUI:data-table:cell:mount", (A) => {
    s.push(A), u.set(A.element, A);
  }), ce("SMUI:data-table:cell:unmount", (A) => {
    const x = s.findIndex((S) => S === A);
    x !== -1 && s.splice(x, 1), u.delete(A.element);
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
  var g = { getElement: h }, p = ag();
  He(p, () => ({ ...r }));
  var _ = W(p);
  return _e(_, () => e.children ?? Ie), Se(p, (A) => i = A, () => i), De(p, (A, x) => ie == null ? void 0 : ie(A, x), t), E(n, p), Ae(g);
}
var og = /* @__PURE__ */ X("<tbody><!></tbody>");
function lg(n, e) {
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
  ce("SMUI:data-table:row:header", !1), ce("SMUI:data-table:row:mount", (p) => {
    s.push(p), u.set(p.element, p);
  }), ce("SMUI:data-table:row:unmount", (p) => {
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
  var f = { getElement: v }, h = og();
  He(h, (p) => ({ class: p, ...i }), [
    () => Ze({ "mdc-data-table__content": !0, [r()]: !0 })
  ]);
  var g = W(h);
  return _e(g, () => e.children ?? Ie), Se(h, (p) => a = p, () => a), De(h, (p, _) => ie == null ? void 0 : ie(p, _), t), E(n, h), Ae(f);
}
let dg = 0;
var ug = /* @__PURE__ */ X("<tr><!></tr>");
function Nl(n, e) {
  Ce(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "rowId", 19, () => "SMUI-data-table-row-" + dg++), a = /* @__PURE__ */ Ve(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "rowId",
    "children"
  ]), s, u = /* @__PURE__ */ le(void 0), l = Ee({}), c = Ee({}), d = ye("SMUI:data-table:row:header");
  const v = ye("SMUI:checkbox:mount");
  ce("SMUI:checkbox:mount", (D) => {
    H(u, D, !0), v && v(D);
  });
  const f = ye("SMUI:checkbox:unmount");
  ce("SMUI:checkbox:unmount", (D) => {
    H(u, void 0), f && f(D);
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
      getAttr: A,
      addAttr: x
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
  function x(D, j) {
    c[D] !== j && (c[D] = j);
  }
  function S(D) {
    Be(w(), "SMUIDataTableHeaderClick", D);
  }
  function b(D) {
    Be(w(), "SMUIDataTableRowClick", { rowId: i(), target: D.target });
  }
  function w() {
    return s;
  }
  var I = { getElement: w }, y = ug(), C = (D) => {
    var j;
    d ? S(D) : b(D), (j = e.onclick) == null || j.call(e, D);
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
  var T = W(y);
  return _e(T, () => e.children ?? Ie), Se(y, (D) => s = D, () => s), De(y, (D, j) => ie == null ? void 0 : ie(D, j), t), E(n, y), Ae(I);
}
let cg = 0;
var fg = /* @__PURE__ */ X('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), vg = /* @__PURE__ */ X("<th><!></th>"), hg = /* @__PURE__ */ X("<td><!></td>");
function qa(n, e) {
  Ce(e, !0);
  const t = () => bi(A, "$sort", i), r = () => bi(x, "$sortDirection", i), [i, a] = Ei();
  let s = ye("SMUI:data-table:row:header"), u = m(e, "use", 19, () => []), l = m(e, "class", 3, ""), c = m(e, "numeric", 3, !1), d = m(e, "checkbox", 3, !1), v = m(e, "columnId", 19, () => s ? "SMUI-data-table-column-" + cg++ : "SMUI-data-table-unused"), f = m(e, "sortable", 19, () => ye("SMUI:data-table:sortable")), h = /* @__PURE__ */ Ve(e, [
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
  ]), g, p = Ee({}), _ = Ee({}), A = ye("SMUI:data-table:sort"), x = ye("SMUI:data-table:sortDirection"), S = ye("SMUI:data-table:sortAscendingAriaLabel"), b = ye("SMUI:data-table:sortDescendingAriaLabel");
  f() && (ce("SMUI:label:context", "data-table:sortable-header-cell"), ce("SMUI:icon-button:context", "data-table:sortable-header-cell"), ce("SMUI:icon-button:aria-describedby", v() + "-status-label"));
  const w = ye("SMUI:data-table:cell:mount"), I = ye("SMUI:data-table:cell:unmount");
  it(() => {
    const L = s ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return U();
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
        return U();
      },
      get columnId() {
      },
      addClass: y,
      removeClass: C,
      getAttr: T,
      addAttr: D
    };
    return w && w(L), () => {
      I && I(L);
    };
  });
  function y(L) {
    p[L] || (p[L] = !0);
  }
  function C(L) {
    (!(L in p) || p[L]) && (p[L] = !1);
  }
  function T(L) {
    return L in _ ? _[L] ?? null : U().getAttribute(L);
  }
  function D(L, ee) {
    _[L] !== ee && (_[L] = ee);
  }
  function j(L) {
    Be(U(), "SMUIDataTableHeaderCheckboxChange", L);
  }
  function B(L) {
    Be(U(), "SMUIDataTableBodyCheckboxChange", L);
  }
  function U() {
    return g;
  }
  var q = { getElement: U }, N = oe(), F = K(N);
  {
    var k = (L) => {
      var ee = vg(), te = (z) => {
        var M;
        d() && j(z), (M = e.onchange) == null || M.call(e, z);
      };
      He(
        ee,
        (z) => ({
          class: z,
          role: "columnheader",
          scope: "col",
          "data-column-id": v(),
          "aria-sort": f() ? t() === v() ? r() : "none" : void 0,
          ..._,
          ...h,
          onchange: te
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
      var fe = W(ee);
      {
        var ue = (z) => {
          var M = fg(), $ = W(M);
          _e($, () => e.children ?? Ie);
          var Y = Q($, 2), me = W(Y);
          ve(() => {
            Tt(Y, "id", `${v() ?? ""}-status-label`), Me(me, t() === v() ? r() === "ascending" ? S : b : "");
          }), E(z, M);
        }, Z = (z) => {
          var M = oe(), $ = K(M);
          _e($, () => e.children ?? Ie), E(z, M);
        };
        re(fe, (z) => {
          f() ? z(ue) : z(Z, !1);
        });
      }
      Se(ee, (z) => g = z, () => g), De(ee, (z, M) => ie == null ? void 0 : ie(z, M), u), E(L, ee);
    }, J = (L) => {
      var ee = hg(), te = (ue) => {
        var Z;
        d() && B(ue), (Z = e.onchange) == null || Z.call(e, ue);
      };
      He(
        ee,
        (ue) => ({
          class: ue,
          ..._,
          ...h,
          onchange: te
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
      var fe = W(ee);
      _e(fe, () => e.children ?? Ie), Se(ee, (ue) => g = ue, () => g), De(ee, (ue, Z) => ie == null ? void 0 : ie(ue, Z), u), E(L, ee);
    };
    re(F, (L) => {
      s ? L(k) : L(J, !1);
    });
  }
  E(n, N);
  var ae = Ae(q);
  return a(), ae;
}
var gg = /* @__PURE__ */ X('<p class="status svelte-185z1ay">Loading…</p>'), mg = /* @__PURE__ */ X('<p class="status error svelte-185z1ay"> </p>'), pg = /* @__PURE__ */ X('<p class="status svelte-185z1ay"> </p>'), bg = /* @__PURE__ */ X("<!> <!>", 1), Ig = /* @__PURE__ */ X("<!> <!>", 1), _g = /* @__PURE__ */ X("<!> <!>", 1);
function yg(n, e) {
  Ce(e, !0);
  let t = /* @__PURE__ */ le(null), r = m(e, "items", 19, () => []), i = m(e, "columns", 19, () => []), a = m(e, "loading", 3, !1), s = m(e, "errorMsg", 3, ""), u = m(e, "emptyText", 3, "Nothing to show."), l = m(e, "getRowId", 3, (A, x) => (A && (A.id ?? A.key)) ?? x), c = m(e, "headerBg", 3, null), d = m(e, "rowBg", 3, null), v = m(e, "hasActions", 3, !1), f = /* @__PURE__ */ de(() => v() || !!e.actions);
  var h = oe(), g = K(h);
  {
    var p = (A) => {
      var x = gg();
      E(A, x);
    }, _ = (A) => {
      var x = oe(), S = K(x);
      {
        var b = (I) => {
          var y = mg(), C = W(y);
          ve(() => Me(C, s())), E(I, y);
        }, w = (I) => {
          var y = oe(), C = K(y);
          {
            var T = (j) => {
              var B = pg(), U = W(B);
              ve(() => Me(U, u())), E(j, B);
            }, D = (j) => {
              ig(j, {
                style: "width: 100%;",
                children: (B, U) => {
                  var q = _g(), N = K(q);
                  {
                    let k = /* @__PURE__ */ de(() => c() ? `background-color:${c()}` : void 0);
                    sg(N, {
                      get style() {
                        return o(k);
                      },
                      children: (J, ae) => {
                        Nl(J, {
                          children: (L, ee) => {
                            var te = bg(), fe = K(te);
                            cn(fe, 17, i, Ir, (z, M) => {
                              {
                                let $ = /* @__PURE__ */ de(() => [
                                  o(M).width ? `width:${o(M).width}` : "",
                                  c() ? `background-color:${c()}` : ""
                                ].filter(Boolean).join(";"));
                                qa(z, {
                                  header: !0,
                                  get style() {
                                    return o($);
                                  },
                                  children: (Y, me) => {
                                    var be = et();
                                    ve(() => Me(be, o(M).header)), E(Y, be);
                                  },
                                  $$slots: { default: !0 }
                                });
                              }
                            });
                            var ue = Q(fe, 2);
                            {
                              var Z = (z) => {
                                {
                                  let M = /* @__PURE__ */ de(() => c() ? `background-color:${c()}` : void 0);
                                  qa(z, {
                                    header: !0,
                                    get style() {
                                      return o(M);
                                    }
                                  });
                                }
                              };
                              re(ue, (z) => {
                                o(f) && z(Z);
                              });
                            }
                            E(L, te);
                          },
                          $$slots: { default: !0 }
                        });
                      },
                      $$slots: { default: !0 }
                    });
                  }
                  var F = Q(N, 2);
                  lg(F, {
                    children: (k, J) => {
                      var ae = oe(), L = K(ae);
                      cn(L, 19, r, (ee, te) => l()(ee, te), (ee, te, fe) => {
                        {
                          let ue = /* @__PURE__ */ de(() => [
                            d() ? `background-color:${d()}` : "",
                            o(t) === l()(o(te), o(fe)) ? "background-color:#D9D800" : ""
                          ].filter(Boolean).join(";"));
                          Nl(ee, {
                            get style() {
                              return o(ue);
                            },
                            $$events: {
                              mouseenter: () => H(t, l()(o(te), o(fe)), !0),
                              mouseleave: () => H(t, null)
                            },
                            children: (Z, z) => {
                              var M = Ig(), $ = K(M);
                              cn($, 17, i, Ir, (be, Ne) => {
                                qa(be, {
                                  children: (nt, qe) => {
                                    var Re = et();
                                    ve(() => {
                                      var st;
                                      return Me(Re, ((st = o(te)) == null ? void 0 : st[o(Ne).key]) ?? "");
                                    }), E(nt, Re);
                                  },
                                  $$slots: { default: !0 }
                                });
                              });
                              var Y = Q($, 2);
                              {
                                var me = (be) => {
                                  qa(be, {
                                    numeric: !0,
                                    children: (Ne, nt) => {
                                      var qe = oe(), Re = K(qe);
                                      _e(Re, () => e.actions ?? Ie, () => ({ item: o(te) })), E(Ne, qe);
                                    },
                                    $$slots: { default: !0 }
                                  });
                                };
                                re(Y, (be) => {
                                  o(f) && be(me);
                                });
                              }
                              E(Z, M);
                            },
                            $$slots: { default: !0 }
                          });
                        }
                      }), E(k, ae);
                    },
                    $$slots: { default: !0 }
                  }), E(B, q);
                },
                $$slots: { default: !0 }
              });
            };
            re(
              C,
              (j) => {
                !r() || r().length === 0 ? j(T) : j(D, !1);
              },
              !0
            );
          }
          E(I, y);
        };
        re(
          S,
          (I) => {
            s() ? I(b) : I(w, !1);
          },
          !0
        );
      }
      E(A, x);
    };
    re(g, (A) => {
      a() ? A(p) : A(_, !1);
    });
  }
  E(n, h), Ae();
}
var Cg = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"></path></svg>');
function Ag(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Dt(n, {
    children: (r, i) => {
      var a = Cg();
      ve(() => tt(a, t())), E(r, a);
    }
  });
}
var Eg = /* @__PURE__ */ X('<span class="secondary-label svelte-17mxdlc"> </span>'), xg = /* @__PURE__ */ X('<div class="seperator svelte-17mxdlc"><!></div>'), Sg = /* @__PURE__ */ X('<div class="breadcrumb-wrapper svelte-17mxdlc"><button type="button"><span class="label svelte-17mxdlc"> </span> <!></button> <!></div>'), wg = /* @__PURE__ */ X('<nav class="oscd-breadcrumbs svelte-17mxdlc" aria-label="Breadcrumb"></nav>');
function Tg(n, e) {
  Ce(e, !0);
  let t = m(e, "breadcrumbs", 19, () => []), r = m(e, "activeIndex", 3, 0);
  const i = (s) => {
    var l;
    const u = t()[s];
    !(u != null && u.enabled) || s === r() || (l = e.handleClick) == null || l.call(e, s);
  };
  var a = wg();
  cn(a, 21, t, Ir, (s, u, l) => {
    var c = Sg(), d = W(c);
    let v;
    d.__click = () => i(l);
    let f;
    var h = W(d), g = W(h), p = Q(h, 2);
    {
      var _ = (S) => {
        var b = Eg();
        let w;
        var I = W(b);
        ve(
          (y) => {
            w = tt(b, "", w, y), Me(I, o(u).secondaryLabel);
          },
          [() => ({ color: e.color ? e.color : null })]
        ), E(S, b);
      };
      re(p, (S) => {
        o(u).secondaryLabel && S(_);
      });
    }
    var A = Q(d, 2);
    {
      var x = (S) => {
        var b = xg(), w = W(b);
        {
          let I = /* @__PURE__ */ de(() => e.color ? e.color : "#004552");
          Ag(w, {
            get svgStyles() {
              return `fill: ${o(I) ?? ""}`;
            }
          });
        }
        E(S, b);
      };
      re(A, (S) => {
        l < t().length - 1 && S(x);
      });
    }
    ve(
      (S, b) => {
        v = _r(d, 1, "breadcrumb svelte-17mxdlc", null, v, S), Tt(d, "aria-current", l === r() ? "page" : void 0), f = tt(d, "", f, b), Me(g, o(u).label);
      },
      [
        () => ({
          "br-disabled": !o(u).enabled,
          "br-active": l === r()
        }),
        () => ({ color: e.color ? e.color : null })
      ]
    ), E(s, c);
  }), E(n, a), Ae();
}
It(["click"]);
var Dg = (n, e) => {
  var t;
  n.stopPropagation(), (t = e.onClick) == null || t.call(e, n);
}, Lg = /* @__PURE__ */ X('<button class="icon-button svelte-jv2py4"><!></button>');
function cu(n, e) {
  Ce(e, !0);
  let t = m(e, "tooltipSide", 3, "top"), r = m(e, "showDelay", 3, 1e3), i = m(e, "fillColor", 3, "var(--mdc-theme-primary)"), a = m(e, "size", 3, "25px"), s = /* @__PURE__ */ de(() => `fill: ${i()}; margin: 0; width: ${a()}; height: ${a()};`);
  uu(n, {
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
      var c = Lg();
      c.__click = [Dg, e];
      var d = W(c);
      {
        var v = (h) => {
          ou(h, {
            get svgStyles() {
              return o(s);
            }
          });
        }, f = (h) => {
          var g = oe(), p = K(g);
          {
            var _ = (x) => {
              Sh(x, {
                get svgStyles() {
                  return o(s);
                }
              });
            }, A = (x) => {
              var S = oe(), b = K(S);
              {
                var w = (y) => {
                  su(y, {
                    get svgStyles() {
                      return o(s);
                    }
                  });
                }, I = (y) => {
                  var C = oe(), T = K(C);
                  {
                    var D = (B) => {
                      lu(B, {
                        get svgStyles() {
                          return o(s);
                        }
                      });
                    }, j = (B) => {
                      var U = oe(), q = K(U);
                      {
                        var N = (k) => {
                          jh(k, {
                            get svgStyles() {
                              return o(s);
                            }
                          });
                        }, F = (k) => {
                          var J = oe(), ae = K(J);
                          {
                            var L = (te) => {
                              zh(te, {
                                get svgStyles() {
                                  return o(s);
                                }
                              });
                            }, ee = (te) => {
                              var fe = oe(), ue = K(fe);
                              {
                                var Z = (M) => {
                                  Yh(M, {
                                    get svgStyles() {
                                      return o(s);
                                    }
                                  });
                                }, z = (M) => {
                                  var $ = oe(), Y = K($);
                                  {
                                    var me = (Ne) => {
                                      Kh(Ne, {
                                        get svgStyles() {
                                          return o(s);
                                        }
                                      });
                                    }, be = (Ne) => {
                                      var nt = et();
                                      ve(() => Me(nt, `Unsupported supported type: ${e.type ?? ""}`)), E(Ne, nt);
                                    };
                                    re(
                                      Y,
                                      (Ne) => {
                                        e.type === "star" ? Ne(me) : Ne(be, !1);
                                      },
                                      !0
                                    );
                                  }
                                  E(M, $);
                                };
                                re(
                                  ue,
                                  (M) => {
                                    e.type === "close" ? M(Z) : M(z, !1);
                                  },
                                  !0
                                );
                              }
                              E(te, fe);
                            };
                            re(
                              ae,
                              (te) => {
                                e.type === "link-off" ? te(L) : te(ee, !1);
                              },
                              !0
                            );
                          }
                          E(k, J);
                        };
                        re(
                          q,
                          (k) => {
                            e.type === "wand-stars" ? k(N) : k(F, !1);
                          },
                          !0
                        );
                      }
                      E(B, U);
                    };
                    re(
                      T,
                      (B) => {
                        e.type === "visibility" ? B(D) : B(j, !1);
                      },
                      !0
                    );
                  }
                  E(y, C);
                };
                re(
                  b,
                  (y) => {
                    e.type === "edit" ? y(w) : y(I, !1);
                  },
                  !0
                );
              }
              E(x, S);
            };
            re(
              p,
              (x) => {
                e.type === "duplicate" ? x(_) : x(A, !1);
              },
              !0
            );
          }
          E(h, g);
        };
        re(d, (h) => {
          e.type === "delete" ? h(v) : h(f, !1);
        });
      }
      ve(() => Tt(c, "aria-label", e.tooltip)), E(u, c);
    },
    $$slots: { default: !0 }
  }), Ae();
}
It(["click"]);
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
function Rg(n, e) {
  if (n == null) return {};
  var t = {}, r = Object.keys(n), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(e.indexOf(i) >= 0) && (t[i] = n[i]);
  return t;
}
function Og(n, e) {
  if (n == null) return {};
  var t = Rg(n, e), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    for (i = 0; i < a.length; i++)
      r = a[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(n, r) && (t[r] = n[r]);
  }
  return t;
}
function Mg(n, e) {
  return Pg(n) || Gg(n, e) || Yo(n, e) || Zg();
}
function Dn(n) {
  return Fg(n) || kg(n) || Yo(n) || Ng();
}
function Fg(n) {
  if (Array.isArray(n)) return yo(n);
}
function Pg(n) {
  if (Array.isArray(n)) return n;
}
function kg(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function Gg(n, e) {
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
function Ng() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Zg() {
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
var Hg = "finalize", Bg = "consider";
function ea(n, e, t) {
  n.dispatchEvent(new CustomEvent(Hg, {
    detail: {
      items: e,
      info: t
    }
  }));
}
function Br(n, e, t) {
  n.dispatchEvent(new CustomEvent(Bg, {
    detail: {
      items: e,
      info: t
    }
  }));
}
var ks = "draggedEntered", Za = "draggedLeft", Gs = "draggedOverIndex", qo = "draggedLeftDocument", fs = {
  LEFT_FOR_ANOTHER: "leftForAnother",
  OUTSIDE_OF_ANY: "outsideOfAny"
};
function Ug(n, e, t) {
  n.dispatchEvent(new CustomEvent(ks, {
    detail: {
      indexObj: e,
      draggedEl: t
    }
  }));
}
function Wg(n, e, t) {
  n.dispatchEvent(new CustomEvent(Za, {
    detail: {
      draggedEl: e,
      type: fs.LEFT_FOR_ANOTHER,
      theOtherDz: t
    }
  }));
}
function jg(n, e) {
  n.dispatchEvent(new CustomEvent(Za, {
    detail: {
      draggedEl: e,
      type: fs.OUTSIDE_OF_ANY
    }
  }));
}
function Vg(n, e, t) {
  n.dispatchEvent(new CustomEvent(Gs, {
    detail: {
      indexObj: e,
      draggedEl: t
    }
  }));
}
function zg(n) {
  window.dispatchEvent(new CustomEvent(qo, {
    detail: {
      draggedEl: n
    }
  }));
}
var At = {
  DRAG_STARTED: "dragStarted",
  DRAGGED_ENTERED: ks,
  DRAGGED_ENTERED_ANOTHER: "dragEnteredAnother",
  DRAGGED_OVER_INDEX: Gs,
  DRAGGED_LEFT: Za,
  DRAGGED_LEFT_ALL: "draggedLeftAll",
  DROPPED_INTO_ZONE: "droppedIntoZone",
  DROPPED_INTO_ANOTHER: "droppedIntoAnother",
  DROPPED_OUTSIDE_OF_ANY: "droppedOutsideOfAny",
  DRAG_STOPPED: "dragStopped"
}, Yt = {
  POINTER: "pointer",
  KEYBOARD: "keyboard"
}, aa = "isDndShadowItem", Ns = "data-is-dnd-shadow-item-internal", Xg = "data-is-dnd-shadow-item-hint", Yg = "id:dnd-shadow-placeholder-0000", qg = "dnd-action-dragged-el", St = "id", Co = 0;
function fu() {
  Co++;
}
function vu() {
  if (Co === 0)
    throw new Error("Bug! trying to decrement when there are no dropzones");
  Co--;
}
var Ko = typeof window > "u";
function Ao(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, t, r = e ? Jg(n) : n.getBoundingClientRect(), i = getComputedStyle(n), a = i.transform;
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
function hu(n) {
  var e = Ao(n);
  return {
    top: e.top + window.scrollY,
    bottom: e.bottom + window.scrollY,
    left: e.left + window.scrollX,
    right: e.right + window.scrollX
  };
}
function gu(n) {
  var e = n.getBoundingClientRect();
  return {
    top: e.top + window.scrollY,
    bottom: e.bottom + window.scrollY,
    left: e.left + window.scrollX,
    right: e.right + window.scrollX
  };
}
function mu(n) {
  return {
    x: (n.left + n.right) / 2,
    y: (n.top + n.bottom) / 2
  };
}
function Kg(n, e) {
  return Math.sqrt(Math.pow(n.x - e.x, 2) + Math.pow(n.y - e.y, 2));
}
function Zs(n, e) {
  return n.y <= e.bottom && n.y >= e.top && n.x >= e.left && n.x <= e.right;
}
function xa(n) {
  return mu(gu(n));
}
function Hl(n, e) {
  var t = xa(n), r = hu(e);
  return Zs(t, r);
}
function Bl(n, e) {
  var t = xa(n), r = xa(e);
  return Kg(t, r);
}
function Qg(n) {
  var e = gu(n);
  return e.right < 0 || e.left > document.documentElement.scrollWidth || e.bottom < 0 || e.top > document.documentElement.scrollHeight;
}
function Jg(n) {
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
function $g(n) {
  var e = Array.from(n.children).findIndex(function(t) {
    return t.getAttribute(Ns);
  });
  if (e >= 0)
    return Zi.has(n) || Zi.set(n, /* @__PURE__ */ new Map()), Zi.get(n).set(e, hu(n.children[e])), e;
}
function em(n, e) {
  if (!Hl(n, e))
    return null;
  var t = e.children;
  if (t.length === 0)
    return {
      index: 0,
      isProximityBased: !0
    };
  for (var r = $g(e), i = 0; i < t.length; i++)
    if (Hl(n, t[i])) {
      var a = Zi.has(e) && Zi.get(e).get(i);
      return a && !Zs(xa(n), a) ? {
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
  return pu(n, 0);
}
function pu(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return n.parentElement ? pu(n.parentElement, e + 1) : e - 1;
}
function tm(n, e) {
  if (Object.keys(n).length !== Object.keys(e).length)
    return !1;
  for (var t in n)
    if (!{}.hasOwnProperty.call(e, t) || e[t] !== n[t])
      return !1;
  return !0;
}
function nm(n, e) {
  if (n.length !== e.length)
    return !1;
  for (var t = 0; t < n.length; t++)
    if (n[t] !== e[t])
      return !1;
  return !0;
}
var rm = 200, Ul = 10, Eo;
function im(n, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : rm, r = arguments.length > 3 ? arguments[3] : void 0, i, a, s = !1, u, l = Array.from(e).sort(function(d, v) {
    return vs(v) - vs(d);
  });
  function c() {
    var d = xa(n), v = r.multiScrollIfNeeded();
    if (!v && u && Math.abs(u.x - d.x) < Ul && Math.abs(u.y - d.y) < Ul) {
      Eo = window.setTimeout(c, t);
      return;
    }
    if (Qg(n)) {
      zg(n);
      return;
    }
    u = d;
    var f = !1, h = Na(l), g;
    try {
      for (h.s(); !(g = h.n()).done; ) {
        var p = g.value;
        v && Qo();
        var _ = em(n, p);
        if (_ !== null) {
          var A = _.index;
          f = !0, p !== i ? (i && Wg(i, n, p), Ug(p, _, n), i = p) : A !== a && (Vg(p, _, n), a = A);
          break;
        }
      }
    } catch (x) {
      h.e(x);
    } finally {
      h.f();
    }
    !f && s && i ? (jg(i, n), i = void 0, a = void 0, s = !1) : s = !0, Eo = window.setTimeout(c, t);
  }
  c();
}
function am() {
  clearTimeout(Eo), Qo();
}
var ma = 30;
function sm() {
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
    var u = om(a, s), l = !!n.directionObj;
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
function om(n, e) {
  var t = e === document.scrollingElement ? {
    top: 0,
    bottom: window.innerHeight,
    left: 0,
    right: window.innerWidth
  } : e.getBoundingClientRect();
  return Zs(n, t) ? {
    top: n.y - t.top,
    bottom: t.bottom - n.y,
    left: n.x - t.left,
    right: t.right - n.x
  } : null;
}
function lm() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e = arguments.length > 1 ? arguments[1] : void 0, t = um(n), r = Array.from(t).sort(function(l, c) {
    return vs(c) - vs(l);
  }), i = sm(), a = i.scrollIfNeeded, s = i.resetScrolling;
  function u() {
    var l = e();
    if (!l || !r)
      return !1;
    for (var c = r.filter(function(f) {
      return Zs(l, f.getBoundingClientRect()) || f === document.scrollingElement;
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
function dm(n) {
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
function um(n) {
  var e = /* @__PURE__ */ new Set(), t = Na(n), r;
  try {
    for (t.s(); !(r = t.n()).done; ) {
      var i = r.value;
      dm(i).forEach(function(a) {
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
function cm(n) {
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
      var A = g[_], x = p[_];
      x.width = A.width, x.height = A.height, A.width > 0 && A.height > 0 && x.getContext("2d").drawImage(A, 0, 0);
    }
  return e;
}
var Sa = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
}), fm = $i({}, Sa.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
function bu(n) {
  if (!Sa[n]) throw new Error("Can't get non existing feature flag ".concat(n, "! Supported flags: ").concat(Object.keys(Sa)));
  return fm[n];
}
var vm = 0.2;
function ri(n) {
  return "".concat(n, " ").concat(vm, "s ease");
}
function hm(n, e) {
  var t = n.getBoundingClientRect(), r = cm(n);
  Iu(n, r), r.id = qg, r.style.position = "fixed";
  var i = t.top, a = t.left;
  if (r.style.top = "".concat(i, "px"), r.style.left = "".concat(a, "px"), e) {
    var s = mu(t);
    i -= s.y - e.y, a -= s.x - e.x, window.setTimeout(function() {
      r.style.top = "".concat(i, "px"), r.style.left = "".concat(a, "px");
    }, 0);
  }
  return r.style.margin = "0", r.style.boxSizing = "border-box", r.style.height = "".concat(t.height, "px"), r.style.width = "".concat(t.width, "px"), r.style.transition = "".concat(ri("top"), ", ").concat(ri("left"), ", ").concat(ri("background-color"), ", ").concat(ri("opacity"), ", ").concat(ri("color"), " "), window.setTimeout(function() {
    return r.style.transition += ", ".concat(ri("width"), ", ").concat(ri("height"));
  }, 0), r.style.zIndex = "9999", r.style.cursor = "grabbing", r;
}
function gm(n) {
  n.style.cursor = "grab";
}
function mm(n, e, t, r) {
  Iu(e, n);
  var i = e.getBoundingClientRect(), a = n.getBoundingClientRect(), s = i.width - a.width, u = i.height - a.height;
  if (s || u) {
    var l = {
      left: (t - a.left) / a.width,
      top: (r - a.top) / a.height
    };
    bu(Sa.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT) || (n.style.height = "".concat(i.height, "px"), n.style.width = "".concat(i.width, "px")), n.style.left = "".concat(parseFloat(n.style.left) - l.left * s, "px"), n.style.top = "".concat(parseFloat(n.style.top) - l.top * u, "px");
  }
}
function Iu(n, e) {
  var t = window.getComputedStyle(n);
  Array.from(t).filter(function(r) {
    return r.startsWith("background") || r.startsWith("padding") || r.startsWith("font") || r.startsWith("text") || r.startsWith("align") || r.startsWith("justify") || r.startsWith("display") || r.startsWith("flex") || r.startsWith("border") || r === "opacity" || r === "color" || r === "list-style-type" || // copying with and height to make up for rect update timing issues in some browsers
    bu(Sa.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT) && (r === "width" || r === "height");
  }).forEach(function(r) {
    return e.style.setProperty(r, t.getPropertyValue(r), t.getPropertyPriority(r));
  });
}
function pm(n, e) {
  n.draggable = !1, n.ondragstart = function() {
    return !1;
  }, e ? (n.style.userSelect = "", n.style.WebkitUserSelect = "", n.style.cursor = "") : (n.style.userSelect = "none", n.style.WebkitUserSelect = "none", n.style.cursor = "grab");
}
function _u(n) {
  n.style.display = "none", n.style.position = "fixed", n.style.zIndex = "-5";
}
function bm(n) {
  n.style.visibility = "hidden", n.setAttribute(Ns, "true");
}
function Im(n) {
  n.style.visibility = "", n.removeAttribute(Ns);
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
function _m(n) {
  var e = n.style.minHeight;
  n.style.minHeight = window.getComputedStyle(n).getPropertyValue("height");
  var t = n.style.minWidth;
  return n.style.minWidth = window.getComputedStyle(n).getPropertyValue("width"), function() {
    n.style.minHeight = e, n.style.minWidth = t;
  };
}
var ym = "--any--", Cm = 100, Am = 20, Ka = 3, Em = 80, Wl = {
  outline: "rgba(255, 255, 102, 0.7) solid 2px"
}, jl = "data-is-dnd-original-dragged-item", ln, xt, dn, Hs, at, Bs, Zr, Ft, Yn, jt, Tr = !1, Jo = !1, $o, Ha = !1, as = [], ya, qn, ba = !1, Un = /* @__PURE__ */ new Map(), gt = /* @__PURE__ */ new Map(), io = /* @__PURE__ */ new WeakMap();
function xm(n, e) {
  Un.has(e) || Un.set(e, /* @__PURE__ */ new Set()), Un.get(e).has(n) || (Un.get(e).add(n), fu());
}
function Vl(n, e) {
  Un.get(e).delete(n), vu(), Un.get(e).size === 0 && Un.delete(e);
}
function Sm() {
  var n = Un.get(Hs), e = Na(n), t;
  try {
    for (e.s(); !(t = e.n()).done; ) {
      var r = t.value;
      r.addEventListener(ks, yu), r.addEventListener(Za, Cu), r.addEventListener(Gs, Au);
    }
  } catch (s) {
    e.e(s);
  } finally {
    e.f();
  }
  window.addEventListener(qo, ta);
  var i = Math.max.apply(Math, Dn(Array.from(n.keys()).map(function(s) {
    return gt.get(s).dropAnimationDurationMs;
  }))), a = i === 0 ? Am : Math.max(i, Cm);
  ya = lm(n, function() {
    return jt;
  }), im(xt, n, a * 1.07, ya);
}
function wm() {
  var n = Un.get(Hs), e = Na(n), t;
  try {
    for (e.s(); !(t = e.n()).done; ) {
      var r = t.value;
      r.removeEventListener(ks, yu), r.removeEventListener(Za, Cu), r.removeEventListener(Gs, Au);
    }
  } catch (i) {
    e.e(i);
  } finally {
    e.f();
  }
  window.removeEventListener(qo, ta), ya && (ya.destroy(), ya = void 0), am();
}
function Us(n) {
  return n.findIndex(function(e) {
    return !!e[aa];
  });
}
function Tm(n) {
  var e;
  return Mr(Mr({}, n), {}, (e = {}, $i(e, aa, !0), $i(e, St, Yg), e));
}
function yu(n) {
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
        source: Yt.POINTER
      });
    }
    var s = n.detail.indexObj.index;
    Ft = n.currentTarget, t.splice(s, 0, Zr), Br(n.currentTarget, t, {
      trigger: At.DRAGGED_ENTERED,
      id: dn[St],
      source: Yt.POINTER
    });
  }
}
function Cu(n) {
  if (Tr) {
    var e = gt.get(n.currentTarget), t = e.items, r = e.dropFromOthersDisabled;
    if (!(r && n.currentTarget !== at && n.currentTarget !== Ft)) {
      var i = Dn(t), a = Us(i);
      a !== -1 && i.splice(a, 1);
      var s = Ft;
      Ft = void 0;
      var u = n.detail, l = u.type, c = u.theOtherDz;
      if (l === fs.OUTSIDE_OF_ANY || l === fs.LEFT_FOR_ANOTHER && c !== at && gt.get(c).dropFromOthersDisabled) {
        Ha = !0, Ft = at;
        var d = s === at ? i : Dn(gt.get(at).items);
        d.splice(Bs, 0, Zr), Br(at, d, {
          trigger: At.DRAGGED_LEFT_ALL,
          id: dn[St],
          source: Yt.POINTER
        });
      }
      Br(n.currentTarget, i, {
        trigger: At.DRAGGED_LEFT,
        id: dn[St],
        source: Yt.POINTER
      });
    }
  }
}
function Au(n) {
  var e = gt.get(n.currentTarget), t = e.items, r = e.dropFromOthersDisabled;
  if (!(r && n.currentTarget !== at)) {
    var i = Dn(t);
    Ha = !1;
    var a = n.detail.indexObj.index, s = Us(i);
    s !== -1 && i.splice(s, 1), i.splice(a, 0, Zr), Br(n.currentTarget, i, {
      trigger: At.DRAGGED_OVER_INDEX,
      id: dn[St],
      source: Yt.POINTER
    });
  }
}
function gs(n) {
  n.preventDefault();
  var e = n.touches ? n.touches[0] : n;
  jt = {
    x: e.clientX,
    y: e.clientY
  }, xt.style.transform = "translate3d(".concat(jt.x - Yn.x, "px, ").concat(jt.y - Yn.y, "px, 0)");
}
function ta() {
  Jo = !0, window.removeEventListener("mousemove", gs), window.removeEventListener("touchmove", gs), window.removeEventListener("mouseup", ta), window.removeEventListener("touchend", ta), wm(), gm(xt), Ft || (Ft = at);
  var n = gt.get(Ft), e = n.items, t = n.type;
  hs(Un.get(t), function(a) {
    return gt.get(a).dropTargetStyle;
  }, function(a) {
    return gt.get(a).dropTargetClasses;
  });
  var r = Us(e);
  r === -1 && Ft === at && (r = Bs), e = e.map(function(a) {
    return a[aa] ? dn : a;
  });
  function i() {
    $o(), ea(Ft, e, {
      trigger: Ha ? At.DROPPED_OUTSIDE_OF_ANY : At.DROPPED_INTO_ZONE,
      id: dn[St],
      source: Yt.POINTER
    }), Ft !== at && ea(at, gt.get(at).items, {
      trigger: At.DROPPED_INTO_ANOTHER,
      id: dn[St],
      source: Yt.POINTER
    });
    var a = Array.from(Ft.children).find(function(s) {
      return s.getAttribute(Ns);
    });
    a && Im(a), Rm();
  }
  gt.get(Ft).dropAnimationDisabled ? i() : Dm(r, i);
}
function Dm(n, e) {
  var t = n > -1 ? Ao(Ft.children[n], !1) : Ao(Ft, !1), r = {
    x: t.left - parseFloat(xt.style.left),
    y: t.top - parseFloat(xt.style.top)
  }, i = gt.get(Ft), a = i.dropAnimationDurationMs, s = "transform ".concat(a, "ms ease");
  xt.style.transition = xt.style.transition ? xt.style.transition + "," + s : s, xt.style.transform = "translate3d(".concat(r.x, "px, ").concat(r.y, "px, 0)"), window.setTimeout(e, a);
}
function Lm(n, e) {
  as.push({
    dz: n,
    destroy: e
  }), window.requestAnimationFrame(function() {
    _u(n), document.body.appendChild(n);
  });
}
function Rm() {
  xt && xt.remove && xt.remove(), ln && ln.remove && ln.remove(), xt = void 0, ln = void 0, dn = void 0, Hs = void 0, at = void 0, Bs = void 0, Zr = void 0, Ft = void 0, Yn = void 0, jt = void 0, Tr = !1, Jo = !1, $o = void 0, Ha = !1, qn && clearTimeout(qn), qn = void 0, ba = !1, as.length && (as.forEach(function(n) {
    var e = n.dz, t = n.destroy;
    t(), e.remove();
  }), as = []);
}
function Om(n, e) {
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
    window.removeEventListener("mousemove", l), window.removeEventListener("touchmove", l), window.removeEventListener("mouseup", u), window.removeEventListener("touchend", u), qn && (clearTimeout(qn), qn = void 0, ba = !1);
  }
  function u(f) {
    if (s(), ln = void 0, Yn = void 0, jt = void 0, f.type === "touchend") {
      var h = new Event("click", {
        bubbles: !0,
        cancelable: !0
      });
      f.target.dispatchEvent(h);
    }
  }
  function l(f) {
    var h = !!f.touches, g = h ? f.touches[0] : f;
    if (h && r.delayTouchStartMs > 0 && !ba) {
      jt = {
        x: g.clientX,
        y: g.clientY
      }, (Math.abs(jt.x - Yn.x) >= Ka || Math.abs(jt.y - Yn.y) >= Ka) && (qn && (clearTimeout(qn), qn = void 0), u(f));
      return;
    }
    f.preventDefault(), jt = {
      x: g.clientX,
      y: g.clientY
    }, (Math.abs(jt.x - Yn.x) >= Ka || Math.abs(jt.y - Yn.y) >= Ka) && (s(), d());
  }
  function c(f) {
    if (!(f.target !== f.currentTarget && (f.target.value !== void 0 || f.target.isContentEditable)) && !f.button && !Tr) {
      var h = !!f.touches, g = h && r.delayTouchStartMs > 0;
      g || f.preventDefault(), f.stopPropagation();
      var p = h ? f.touches[0] : f;
      Yn = {
        x: p.clientX,
        y: p.clientY
      }, jt = Mr({}, Yn), ln = f.currentTarget, g && (ba = !1, qn = window.setTimeout(function() {
        ln && (ba = !0, s(), d());
      }, r.delayTouchStartMs)), a();
    }
  }
  function d() {
    Tr = !0;
    var f = i.get(ln);
    Bs = f, at = ln.parentElement;
    var h = at.closest("dialog") || at.closest("[popover]") || at.getRootNode(), g = h.body || h, p = r.items, _ = r.type, A = r.centreDraggedOnCursor, x = Dn(p);
    dn = x[f], Hs = _, Zr = Tm(dn), xt = hm(ln, A && jt), g.appendChild(xt);
    function S() {
      ln.parentElement ? window.requestAnimationFrame(S) : (ln.setAttribute(jl, !0), g.appendChild(ln), Sm(), _u(ln), Zr[St] = dn[St], xt.focus());
    }
    window.requestAnimationFrame(S), is(Array.from(Un.get(r.type)).filter(function(b) {
      return b === at || !gt.get(b).dropFromOthersDisabled;
    }), function(b) {
      return gt.get(b).dropTargetStyle;
    }, function(b) {
      return gt.get(b).dropTargetClasses;
    }), x.splice(f, 1, Zr), $o = _m(at), Br(at, x, {
      trigger: At.DRAG_STARTED,
      id: dn[St],
      source: Yt.POINTER
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
    var h = f.items, g = h === void 0 ? void 0 : h, p = f.flipDurationMs, _ = p === void 0 ? 0 : p, A = f.type, x = A === void 0 ? ym : A, S = f.dragDisabled, b = S === void 0 ? !1 : S, w = f.morphDisabled, I = w === void 0 ? !1 : w, y = f.dropFromOthersDisabled, C = y === void 0 ? !1 : y, T = f.dropTargetStyle, D = T === void 0 ? Wl : T, j = f.dropTargetClasses, B = j === void 0 ? [] : j, U = f.transformDraggedElement, q = U === void 0 ? function() {
    } : U, N = f.centreDraggedOnCursor, F = N === void 0 ? !1 : N, k = f.dropAnimationDisabled, J = k === void 0 ? !1 : k, ae = f.delayTouchStart, L = ae === void 0 ? !1 : ae;
    r.dropAnimationDurationMs = _;
    var ee = 0;
    L === !0 ? ee = Em : typeof L == "number" && isFinite(L) && L >= 0 && (ee = L), r.delayTouchStartMs = ee, r.type && x !== r.type && Vl(n, r.type), r.type = x, r.items = Dn(g), r.dragDisabled = b, r.morphDisabled = I, r.transformDraggedElement = q, r.centreDraggedOnCursor = F, r.dropAnimationDisabled = J, t && Tr && !Jo && (!tm(D, r.dropTargetStyle) || !nm(B, r.dropTargetClasses)) && (hs([n], function() {
      return r.dropTargetStyle;
    }, function() {
      return B;
    }), is([n], function() {
      return D;
    }, function() {
      return B;
    })), r.dropTargetStyle = D, r.dropTargetClasses = Dn(B);
    function te(z, M) {
      return gt.get(z) ? gt.get(z)[M] : r[M];
    }
    t && Tr && r.dropFromOthersDisabled !== C && (C ? hs([n], function(z) {
      return te(z, "dropTargetStyle");
    }, function(z) {
      return te(z, "dropTargetClasses");
    }) : is([n], function(z) {
      return te(z, "dropTargetStyle");
    }, function(z) {
      return te(z, "dropTargetClasses");
    })), r.dropFromOthersDisabled = C, gt.set(n, r), xm(n, x);
    for (var fe = Tr ? Us(r.items) : -1, ue = 0; ue < n.children.length; ue++) {
      var Z = n.children[ue];
      if (pm(Z, b), ue === fe) {
        I || mm(xt, Z, jt.x, jt.y), r.transformDraggedElement(xt, dn, ue), bm(Z);
        continue;
      }
      Z.removeEventListener("mousedown", io.get(Z)), Z.removeEventListener("touchstart", io.get(Z)), b || (Z.addEventListener("mousedown", c), Z.addEventListener("touchstart", c), io.set(Z, c)), i.set(Z, ue), t || (t = !0);
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
      Tr && !n.closest("[".concat(jl, "]")) ? Lm(n, h) : h();
    }
  };
}
var Qa, xo = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
}, Eu = (Qa = {}, $i(Qa, xo.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), $i(Qa, xo.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list"), Qa), Mm = "dnd-action-aria-alert", pt;
function So() {
  pt || (pt = document.createElement("div"), function() {
    pt.id = Mm, pt.style.position = "fixed", pt.style.bottom = "0", pt.style.left = "0", pt.style.zIndex = "-5", pt.style.opacity = "0", pt.style.height = "0", pt.style.width = "0", pt.setAttribute("role", "alert");
  }(), document.body.prepend(pt), Object.entries(Eu).forEach(function(n) {
    var e = Mg(n, 2), t = e[0], r = e[1];
    return document.body.prepend(km(t, r));
  }));
}
function Fm() {
  return Ko ? null : (document.readyState === "complete" ? So() : window.addEventListener("DOMContentLoaded", So), Mr({}, xo));
}
function Pm() {
  Ko || !pt || (Object.keys(Eu).forEach(function(n) {
    var e;
    return (e = document.getElementById(n)) === null || e === void 0 ? void 0 : e.remove();
  }), pt.remove(), pt = void 0);
}
function km(n, e) {
  var t = document.createElement("div");
  return t.id = n, t.innerHTML = "<p>".concat(e, "</p>"), t.style.display = "none", t.style.position = "fixed", t.style.zIndex = "-5", t;
}
function Hi(n) {
  if (!Ko) {
    pt || So(), pt.innerHTML = "";
    var e = document.createTextNode(n);
    pt.appendChild(e), pt.style.display = "none", pt.style.display = "inline";
  }
}
var Gm = "--any--", zl = {
  outline: "rgba(255, 255, 102, 0.7) solid 2px"
}, Tn = !1, wo, zt, gi = "", ii, er, Fr = "", ms = /* @__PURE__ */ new WeakSet(), Xl = /* @__PURE__ */ new WeakMap(), Yl = /* @__PURE__ */ new WeakMap(), To = /* @__PURE__ */ new Map(), Ot = /* @__PURE__ */ new Map(), Hn = /* @__PURE__ */ new Map(), ps;
function Nm(n, e) {
  Hn.size === 0 && (ps = Fm(), window.addEventListener("keydown", xu), window.addEventListener("click", Su)), Hn.has(e) || Hn.set(e, /* @__PURE__ */ new Set()), Hn.get(e).has(n) || (Hn.get(e).add(n), fu());
}
function ql(n, e) {
  zt === n && wa(), Hn.get(e).delete(n), vu(), Hn.get(e).size === 0 && Hn.delete(e), Hn.size === 0 && (window.removeEventListener("keydown", xu), window.removeEventListener("click", Su), ps = void 0, Pm());
}
function xu(n) {
  if (Tn)
    switch (n.key) {
      case "Escape": {
        wa();
        break;
      }
    }
}
function Su() {
  Tn && (ms.has(document.activeElement) || wa());
}
function Zm(n) {
  if (Tn) {
    var e = n.currentTarget;
    if (e !== zt) {
      gi = e.getAttribute("aria-label") || "";
      var t = Ot.get(zt), r = t.items, i = r.find(function(v) {
        return v[St] === er;
      }), a = r.indexOf(i), s = r.splice(a, 1)[0], u = Ot.get(e), l = u.items, c = u.autoAriaDisabled;
      e.getBoundingClientRect().top < zt.getBoundingClientRect().top || e.getBoundingClientRect().left < zt.getBoundingClientRect().left ? (l.push(s), c || Hi("Moved item ".concat(Fr, " to the end of the list ").concat(gi))) : (l.unshift(s), c || Hi("Moved item ".concat(Fr, " to the beginning of the list ").concat(gi)));
      var d = zt;
      ea(d, r, {
        trigger: At.DROPPED_INTO_ANOTHER,
        id: er,
        source: Yt.KEYBOARD
      }), ea(e, l, {
        trigger: At.DROPPED_INTO_ZONE,
        id: er,
        source: Yt.KEYBOARD
      }), zt = e;
    }
  }
}
function wu() {
  To.forEach(function(n, e) {
    var t = n.update;
    return t(Ot.get(e));
  });
}
function wa() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  Ot.get(zt).autoAriaDisabled || Hi("Stopped dragging item ".concat(Fr)), ms.has(document.activeElement) && document.activeElement.blur(), n && Br(zt, Ot.get(zt).items, {
    trigger: At.DRAG_STOPPED,
    id: er,
    source: Yt.KEYBOARD
  }), hs(Hn.get(wo), function(e) {
    return Ot.get(e).dropTargetStyle;
  }, function(e) {
    return Ot.get(e).dropTargetClasses;
  }), ii = null, er = null, Fr = "", wo = null, zt = null, gi = "", Tn = !1, wu();
}
function Hm(n, e) {
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
          source: Yt.KEYBOARD
        }));
        break;
      }
      case "ArrowUp":
      case "ArrowLeft": {
        if (!Tn) return;
        d.preventDefault(), d.stopPropagation();
        var p = Ot.get(n), _ = p.items, A = Array.from(n.children), x = A.indexOf(d.currentTarget);
        x > 0 && (t.autoAriaDisabled || Hi("Moved item ".concat(Fr, " to position ").concat(x, " in the list ").concat(gi)), r(_, x, x - 1), ea(n, _, {
          trigger: At.DROPPED_INTO_ZONE,
          id: er,
          source: Yt.KEYBOARD
        }));
        break;
      }
    }
  }
  function a(d) {
    u(d.currentTarget), zt = n, wo = t.type, Tn = !0;
    var v = Array.from(Hn.get(t.type)).filter(function(h) {
      return h === zt || !Ot.get(h).dropFromOthersDisabled;
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
      source: Yt.KEYBOARD
    }), wu();
  }
  function s(d) {
    Tn && d.currentTarget !== ii && (d.stopPropagation(), wa(!1), a(d));
  }
  function u(d) {
    var v = Ot.get(n), f = v.items, h = Array.from(n.children), g = h.indexOf(d);
    ii = d, ii.tabIndex = t.zoneItemTabIndex, er = f[g][St], Fr = h[g].getAttribute("aria-label") || "";
  }
  function l(d) {
    var v = d.items, f = v === void 0 ? [] : v, h = d.type, g = h === void 0 ? Gm : h, p = d.dragDisabled, _ = p === void 0 ? !1 : p, A = d.zoneTabIndex, x = A === void 0 ? 0 : A, S = d.zoneItemTabIndex, b = S === void 0 ? 0 : S, w = d.dropFromOthersDisabled, I = w === void 0 ? !1 : w, y = d.dropTargetStyle, C = y === void 0 ? zl : y, T = d.dropTargetClasses, D = T === void 0 ? [] : T, j = d.autoAriaDisabled, B = j === void 0 ? !1 : j;
    t.items = Dn(f), t.dragDisabled = _, t.dropFromOthersDisabled = I, t.zoneTabIndex = x, t.zoneItemTabIndex = b, t.dropTargetStyle = C, t.dropTargetClasses = D, t.autoAriaDisabled = B, t.type && g !== t.type && ql(n, t.type), t.type = g, Nm(n, g), B || (n.setAttribute("aria-disabled", _), n.setAttribute("role", "list"), n.setAttribute("aria-describedby", _ ? ps.DND_ZONE_DRAG_DISABLED : ps.DND_ZONE_ACTIVE)), Ot.set(n, t), Tn ? n.tabIndex = n === zt || ii.contains(n) || t.dropFromOthersDisabled || zt && t.type !== Ot.get(zt).type ? -1 : 0 : n.tabIndex = t.zoneTabIndex, n.addEventListener("focus", Zm);
    for (var U = function(F) {
      var k = n.children[F];
      ms.add(k), k.tabIndex = Tn ? -1 : t.zoneItemTabIndex, B || k.setAttribute("role", "listitem"), k.removeEventListener("keydown", Xl.get(k)), k.removeEventListener("click", Yl.get(k)), _ || (k.addEventListener("keydown", i), Xl.set(k, i), k.addEventListener("click", s), Yl.set(k, s)), Tn && t.items[F][St] === er && (ii = k, ii.tabIndex = t.zoneItemTabIndex, k.focus());
    }, q = 0; q < n.children.length; q++)
      U(q);
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
var Bm = ["items", "flipDurationMs", "type", "dragDisabled", "morphDisabled", "dropFromOthersDisabled", "zoneTabIndex", "zoneItemTabIndex", "dropTargetStyle", "dropTargetClasses", "transformDraggedElement", "autoAriaDisabled", "centreDraggedOnCursor", "delayTouchStart", "dropAnimationDisabled"];
function Um(n, e) {
  if (Wm(n))
    return {
      update: function() {
      },
      destroy: function() {
      }
    };
  Kl(e);
  var t = Om(n, e), r = Hm(n, e);
  return {
    update: function(a) {
      Kl(a), t.update(a), r.update(a);
    },
    destroy: function() {
      t.destroy(), r.destroy();
    }
  };
}
function Wm(n) {
  return !!n.closest("[".concat(Xg, '="true"]'));
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
  var s = Og(n, Bm);
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
function Tu(n) {
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
var Nn = Tu(!0), Bi = Tu(!1);
function Jl() {
  return {
    dragDisabled: Bi.get() || Nn.get(),
    zoneItemTabIndex: -1
  };
}
function Rn(n, e) {
  var t;
  Bi.set((t = e == null ? void 0 : e.dragDisabled) !== null && t !== void 0 ? t : !1);
  var r = e, i = Um(n, Mr(Mr({}, r), Jl()));
  function a() {
    i.update(Mr(Mr({}, r), Jl()));
  }
  Nn.subscribe(a);
  function s(l) {
    var c = l.detail.info, d = c.source, v = c.trigger;
    d === Yt.KEYBOARD && v === At.DRAG_STOPPED && Nn.set(!0);
  }
  function u(l) {
    var c = l.detail.info.source;
    c === Yt.POINTER && Nn.set(!0);
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
function jm(n) {
  const e = n - 1;
  return e * e * e + 1;
}
function Ws(n, { from: e, to: t }, r = {}) {
  var { delay: i = 0, duration: a = (I) => Math.sqrt(I) * 120, easing: s = jm } = r, u = getComputedStyle(n), l = u.transform === "none" ? "" : u.transform, [c, d] = u.transformOrigin.split(" ").map(parseFloat);
  c /= n.clientWidth, d /= n.clientHeight;
  var v = Vm(n), f = n.clientWidth / t.width / v, h = n.clientHeight / t.height / v, g = e.left + e.width * c, p = e.top + e.height * d, _ = t.left + t.width * c, A = t.top + t.height * d, x = (g - _) * f, S = (p - A) * h, b = e.width / t.width, w = e.height / t.height;
  return {
    delay: i,
    duration: typeof a == "function" ? a(Math.sqrt(x * x + S * S)) : a,
    easing: s,
    css: (I, y) => {
      var C = y * x, T = y * S, D = I + y * b, j = I + y * w;
      return `transform: ${l} translate(${C}px, ${T}px) scale(${D}, ${j});`;
    }
  };
}
function Vm(n) {
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
const zm = jn([]);
zm.subscribe;
It(["click", "pointerdown", "pointerup", "pointermove"]);
var Xm = /* @__PURE__ */ X("<div><!></div>");
function el(n, e) {
  let t = m(e, "variant", 3, "secondary");
  var r = Xm(), i = W(r);
  uf(i, e, "default", {}), ve(() => _r(r, 1, `osc-card osc-card--${t()}`, "svelte-14hhvrx")), E(n, r);
}
var Ym = /* @__PURE__ */ X('<div class="panel-parent__header svelte-1rw2lbw"><!></div>'), qm = /* @__PURE__ */ X('<div class="panel-parent__body svelte-1rw2lbw"><!></div>'), Km = /* @__PURE__ */ X('<div class="panel-parent__footer svelte-1rw2lbw"><!></div>'), Qm = /* @__PURE__ */ X('<div class="panel-parent svelte-1rw2lbw"><!> <!> <!></div>');
function tl(n, e) {
  let t = m(e, "backgroundColor", 3, "");
  var r = Qm(), i = W(r);
  {
    var a = (d) => {
      var v = Ym(), f = W(v);
      _e(f, () => e.header), E(d, v);
    };
    re(i, (d) => {
      e.header && d(a);
    });
  }
  var s = Q(i, 2);
  {
    var u = (d) => {
      var v = qm(), f = W(v);
      _e(f, () => e.content), E(d, v);
    };
    re(s, (d) => {
      e.content && d(u);
    });
  }
  var l = Q(s, 2);
  {
    var c = (d) => {
      var v = Km(), f = W(v);
      _e(f, () => e.additional), E(d, v);
    };
    re(l, (d) => {
      e.additional && d(c);
    });
  }
  ve(() => tt(r, `--bg-color: ${t() ?? ""}`)), E(n, r);
}
It(["click"]);
const Jm = 4e3;
function $m() {
  let n = Ee({ items: [] }), e = 0;
  const t = (i) => {
    n.items = n.items.filter((a) => a.id !== i);
  }, r = (i, a, s, u = Jm) => {
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
$m();
It(["input"]);
const ep = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHByb2Nlc3Nlcz4KICA8cHJvY2Vzcz4KICAgIDxpZD5zdGFuZGFyZC1wcm9jZXNzLTE8L2lkPgogICAgPHZlcnNpb24+MC4wLjE8L3ZlcnNpb24+CiAgICA8bmFtZT5TdGFuZGFyZCBQcm9jZXNzIDE8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+CiAgICAgIFRoaXMgaXMgYSBzdGFuZGFyZGl6ZWQgcHJvY2VzcyB1c2VkIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHkKICAgIDwvZGVzY3JpcHRpb24+CgogICAgPHBsdWdpbnMtc2VxdWVuY2U+CiAgICAgIDxncm91cD4KICAgICAgICA8dGl0bGU+VHlwZXM8L3RpdGxlPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+dGVtcGxhdGUtZ2VuZXJhdG9yLXh5ejwvaWQ+CiAgICAgICAgICA8bmFtZT5UZW1wbGF0ZSBHZW5lcmF0b3I8L25hbWU+CiAgICAgICAgICA8c3JjIHR5cGU9ImV4dGVybmFsIj4KICAgICAgICAgICAgaHR0cHM6Ly9hc2UtY29tcGFzLmdpdGh1Yi5pby9jb21wYXMtdHJhbnNuZXRidy1wbHVnaW5zL2JlYXJpbmdwb2ludC9jb21wYXMvcGx1Z2lucy90ZW1wbGF0ZS1nZW5lcmF0b3IvaW5kZXguanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+dHlwZS1kZXNpZ25lci14eXo8L2lkPgogICAgICAgICAgPG5hbWU+VHlwZSBEZXNpZ25lcjwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iZXh0ZXJuYWwiPgogICAgICAgICAgICBodHRwczovL3NwcmludGVpbnMuZ2l0aHViLmlvL29zY2QtcGx1Z2lucy90eXBlLWRlc2lnbmVyL2luZGV4LmpzCiAgICAgICAgICA8L3NyYz4KICAgICAgICA8L3BsdWdpbj4KCiAgICAgICAgPHBsdWdpbj4KICAgICAgICAgIDxpZD50eXBlLWRpc3RyaWJ1dG9yLXh5ejwvaWQ+CiAgICAgICAgICA8bmFtZT5UeXBlIERpc3RyaWJ1dG9yPC9uYW1lPgogICAgICAgICAgPHNyYyB0eXBlPSJleHRlcm5hbCI+CiAgICAgICAgICAgIGh0dHBzOi8vYXNlLWNvbXBhcy5naXRodWIuaW8vY29tcGFzLXRyYW5zbmV0YnctcGx1Z2lucy9iZWFyaW5ncG9pbnQvY29tcGFzL3BsdWdpbnMvdHlwZS1kaXN0cmlidXRvci9pbmRleC5qcwogICAgICAgICAgPC9zcmM+CiAgICAgICAgPC9wbHVnaW4+CiAgICAgIDwvZ3JvdXA+CgogICAgICA8Z3JvdXA+CiAgICAgICAgPHRpdGxlPkNvbmZpZ3VyYXRpb248L3RpdGxlPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+Y29tbXVuaWNhdGlvbi14eXo8L2lkPgogICAgICAgICAgPG5hbWU+Q29tbXVuaWNhdGlvbjwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iaW50ZXJuYWwiPgogICAgICAgICAgICAvcGx1Z2lucy9zcmMvZWRpdG9ycy9Db21tdW5pY2F0aW9uLmpzCiAgICAgICAgICA8L3NyYz4KICAgICAgICA8L3BsdWdpbj4KCiAgICAgICAgPHBsdWdpbj4KICAgICAgICAgIDxpZD5zdWJzdGF0aW9uLXh5ejwvaWQ+CiAgICAgICAgICA8bmFtZT5TdWJzdGF0aW9uPC9uYW1lPgogICAgICAgICAgPHNyYyB0eXBlPSJpbnRlcm5hbCI+CiAgICAgICAgICAgIC9wbHVnaW5zL3NyYy9lZGl0b3JzL1N1YnN0YXRpb24uanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+cHVibGlzaGVyLXh5ejwvaWQ+CiAgICAgICAgICA8bmFtZT5QdWJsaXNoZXI8L25hbWU+CiAgICAgICAgICA8c3JjIHR5cGU9ImludGVybmFsIj4KICAgICAgICAgICAgL2V4dGVybmFsLXBsdWdpbnMvb3NjZC1wdWJsaXNoZXIvb3NjZC1wdWJsaXNoZXIuanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+c3Vic2NyaWJlLWxhdGVyLWJpbmRpbmcteHl6PC9pZD4KICAgICAgICAgIDxuYW1lPlN1YnNjcmliZTwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iaW50ZXJuYWwiPgogICAgICAgICAgICAvZXh0ZXJuYWwtcGx1Z2lucy9vc2NkLXN1YnNjcmliZXItbGF0ZXItYmluZGluZy9vc2NkLXN1YnNjcmliZXItbGF0ZXItYmluZGluZy5qcwogICAgICAgICAgPC9zcmM+CiAgICAgICAgPC9wbHVnaW4+CiAgICAgIDwvZ3JvdXA+CgogICAgICA8Z3JvdXA+CiAgICAgICAgPHRpdGxlPkRvY3VtZW50YXRpb248L3RpdGxlPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+YXV0b2RvYy14eXo8L2lkPgogICAgICAgICAgPG5hbWU+QXV0b0RvYzwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iZXh0ZXJuYWwiPgogICAgICAgICAgICBodHRwczovL3NwcmludGVpbnMuZ2l0aHViLmlvL29zY2QtcGx1Z2lucy9hdXRvLWRvYy9pbmRleC5qcwogICAgICAgICAgPC9zcmM+CiAgICAgICAgPC9wbHVnaW4+CgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+bG9jYXRpb24tbWFuYWdlci14eXo8L2lkPgogICAgICAgICAgPG5hbWU+TG9jYXRpb24gTWFuYWdlcjwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iZXh0ZXJuYWwiPgogICAgICAgICAgICBodHRwczovL2FzZS1jb21wYXMuZ2l0aHViLmlvL2NvbXBhcy10cmFuc25ldGJ3LXBsdWdpbnMvYmVhcmluZ3BvaW50L2NvbXBhcy9wbHVnaW5zL2xvY2F0aW9uLW1hbmFnZXIvaW5kZXguanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgoKICAgICAgICA8cGx1Z2luPgogICAgICAgICAgPGlkPmhpc3Rvcnktdmlld2VyLXh5ejwvaWQ+CiAgICAgICAgICA8bmFtZT5IaXN0b3J5IFZpZXdlcjwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iZXh0ZXJuYWwiPgogICAgICAgICAgICBodHRwczovL2FzZS1jb21wYXMuZ2l0aHViLmlvL2NvbXBhcy10cmFuc25ldGJ3LXBsdWdpbnMvYmVhcmluZ3BvaW50L2NvbXBhcy9wbHVnaW5zL2hpc3Rvcnktdmlld2VyL2luZGV4LmpzCiAgICAgICAgICA8L3NyYz4KICAgICAgICA8L3BsdWdpbj4KICAgICAgPC9ncm91cD4KICAgIDwvcGx1Z2lucy1zZXF1ZW5jZT4KICA8L3Byb2Nlc3M+CjwvcHJvY2Vzc2VzPgo=", Do = Ee({ loading: !1 }), Lo = Ee({ error: "" }), $t = Ee({ processes: [] }), ct = Ee({ process: null }), mn = Ee({ isEditing: !1 }), nl = Ee({ plugins: [] }), tp = ep, Du = "engineeringWizardProcesses", np = "external";
if (typeof localStorage < "u") {
  const n = localStorage.getItem(Du);
  if (n)
    try {
      const e = JSON.parse(n);
      Array.isArray(e) && ($t.processes = e);
    } catch {
    }
}
Zc(() => {
  xe(() => {
    $t.processes.forEach((e) => {
      var t;
      (t = e.pluginGroups) == null || t.forEach((r) => {
        var i;
        (i = r.plugins) == null || i.length;
      });
    });
    const n = Es($t.processes);
    if (!(typeof localStorage > "u"))
      try {
        localStorage.setItem(Du, JSON.stringify(n));
      } catch {
      }
  });
});
const mr = (n) => {
  var e;
  return ((e = n == null ? void 0 : n.textContent) == null ? void 0 : e.trim()) ?? "";
}, rp = (n, e) => (n == null ? void 0 : n.getAttribute(e)) ?? void 0, ip = (n) => {
  const e = rp(n == null ? void 0 : n.querySelector("src"), "type") ?? "";
  return e === "internal" || e === "external" ? e : np;
}, Ja = (n, e) => Array.from(n.querySelectorAll(e)), $l = (n) => ({
  id: mr(n.querySelector("id")),
  name: mr(n.querySelector("name")),
  src: mr(n.querySelector("src")) || void 0,
  sourceUrl: mr(n.querySelector("sourceUrl")) || void 0,
  type: ip(n)
}), ap = (n) => Ja(n, "process").map((e) => {
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
async function sp() {
  Do.loading = !0, Lo.error = "";
  try {
    const n = await fetch(tp, { cache: "no-cache" });
    if (!n.ok)
      throw new Error(`HTTP ${n.status}${n.statusText ? `: ${n.statusText}` : ""}`);
    const e = await n.text();
    if (typeof DOMParser > "u")
      throw new Error("DOMParser is not available in this environment.");
    const t = new DOMParser().parseFromString(e, "application/xml");
    if (t.getElementsByTagName("parsererror").length)
      throw new Error("Invalid XML file format.");
    const r = ap(t), i = Es($t.processes);
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
function op(n) {
  const e = (n || "").trim() || "process", t = new Set(($t.processes ?? []).map((a) => a.id));
  if (!t.has(e)) return e;
  let r = 2, i = `${e}-${r}`;
  for (; t.has(i); )
    r += 1, i = `${e}-${r}`;
  return i;
}
function lp(n) {
  var a;
  const e = Es(n), t = (e.id || e.name || "process").trim(), r = op(t), i = {
    id: r,
    version: e.version || "1.0.0",
    name: e.name || r,
    description: e.description || "",
    pluginGroups: (a = e.pluginGroups) != null && a.length ? e.pluginGroups : [{ title: "Ungrouped", plugins: [] }]
  };
  return $t.processes = [...$t.processes ?? [], i], i;
}
function dp(n, e, t) {
  const r = "Ungrouped", i = $t.processes.find((u) => u.id === n);
  if (!i) return;
  const a = i.pluginGroups ?? (i.pluginGroups = []);
  let s = a.find((u) => u.title === r);
  s || (s = { title: r, plugins: [] }, a.push(s)), s.plugins || (s.plugins = []), s.plugins.push(e);
}
function up(n, e) {
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
function cp(n) {
  const e = $t.processes.find((t) => t.id === n);
  if (!(!e || !e.pluginGroups))
    for (const t of e.pluginGroups)
      t.plugins && (t.plugins.length = 0);
}
function fp(n, e, t) {
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
function vp(n, e) {
  const t = $t.processes.find((r) => r.id === n);
  t && t.pluginGroups.splice(0, t.pluginGroups.length, ...e);
}
function hp(n) {
  nl.plugins = [...n];
}
function gp(n) {
  return (n.pluginGroups ?? []).flatMap((e) => e.plugins ?? []);
}
var mp = (n, e, t) => e.handleView(t()), pp = (n, e, t) => e.handleStart(t()), bp = /* @__PURE__ */ X('<button type="button" class="icon svelte-au6aaq" aria-label="View process"><!></button> <button type="button" class="icon svelte-au6aaq" aria-label="Start process"><!></button>', 1), Ip = /* @__PURE__ */ X(`<div class="processes svelte-au6aaq"><div class="process-banner svelte-au6aaq"><div class="process-banner__info svelte-au6aaq"><!> <span class="svelte-au6aaq">A process “Process Name C” has already been started for the ---.scd.
        Would you like to continue where you left off?</span></div> <!></div> <div class="process-toolbar svelte-au6aaq"><!> <!></div> <!></div>`);
function _p(n, e) {
  Ce(e, !0);
  let t = /* @__PURE__ */ le(""), r = /* @__PURE__ */ de(() => o(t).trim().toLowerCase()), i = /* @__PURE__ */ de(() => ($t.processes ?? []).map((_) => ({ ..._, displayName: _.name || _.id }))), a = /* @__PURE__ */ de(() => o(r) ? o(i).filter((_) => (_.displayName ?? "").toLowerCase().includes(o(r))) : o(i));
  const s = [
    { key: "displayName", header: "Name" },
    { key: "description", header: "Description" }
  ];
  var u = Ip(), l = W(u), c = W(l), d = W(c);
  kh(d, {});
  var v = Q(c, 2);
  Vn(v, {
    variant: "raised",
    style: "--mdc-theme-primary: #ffffff; --mdc-theme-on-primary: #004552",
    $$events: { click: () => console.log("Continue Process") },
    children: (_, A) => {
      var x = et("CONTINUE");
      E(_, x);
    },
    $$slots: { default: !0 }
  });
  var f = Q(l, 2), h = W(f);
  pr(h, {
    variant: "outlined",
    label: "Search Processes",
    get value() {
      return o(t);
    },
    set value(_) {
      H(t, _, !0);
    }
  });
  var g = Q(h, 2);
  Vn(g, {
    variant: "raised",
    style: "--mdc-theme-primary: #004552; --mdc-theme-on-primary: #ffffff",
    get onclick() {
      return e.handleAddNew;
    },
    children: (_, A) => {
      var x = et("ADD NEW PROCESS");
      E(_, x);
    },
    $$slots: { default: !0 }
  });
  var p = Q(f, 2);
  yg(p, {
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
    actions: (A, x) => {
      let S = () => x == null ? void 0 : x().item;
      var b = bp(), w = K(b);
      w.__click = [mp, e, S];
      var I = W(w);
      lu(I, { svgStyles: "fill: #002B37; width: 100%; height: 100%;" });
      var y = Q(w, 2);
      y.__click = [pp, e, S];
      var C = W(y);
      Fh(C, { svgStyles: "fill: #002B37; width: 100%; height: 100%;" }), E(A, b);
    },
    $$slots: { actions: !0 }
  }), E(n, u), Ae();
}
It(["click"]);
var yp = (n, e, t) => e.onSelect(o(t).id), Cp = /* @__PURE__ */ X("<button><!></button>"), Ap = /* @__PURE__ */ X('<div class="step-line svelte-1ar0udo" aria-hidden="true"></div>'), Ep = /* @__PURE__ */ X('<div class="step svelte-1ar0udo"><!> <p> </p></div> <!>', 1), xp = /* @__PURE__ */ X('<div class="steps svelte-1ar0udo"></div>');
function Sp(n, e) {
  Ce(e, !0);
  let t = m(e, "items", 19, () => []), r = m(e, "visited", 19, () => []), i = m(e, "currentId", 3, null), a = m(e, "status", 19, () => ({})), s = m(e, "tooltipMap", 19, () => ({}));
  var u = xp();
  cn(u, 21, t, Ir, (l, c, d) => {
    var v = Ep(), f = K(v), h = W(f);
    {
      let x = /* @__PURE__ */ de(() => s()[o(c).id] ?? "");
      uu(h, {
        get content() {
          return o(x);
        },
        side: "bottom",
        children: (S, b) => {
          var w = Cp();
          w.__click = [yp, e, c];
          let I;
          var y = W(w);
          {
            var C = (D) => {
              var j = oe(), B = K(j);
              {
                var U = (N) => {
                  Th(N);
                }, q = (N) => {
                  var F = oe(), k = K(F);
                  {
                    var J = (L) => {
                      Lh(L);
                    }, ae = (L) => {
                      var ee = oe(), te = K(ee);
                      {
                        var fe = (Z) => {
                          Oh(Z, {});
                        }, ue = (Z) => {
                          var z = et();
                          z.nodeValue = d + 1, E(Z, z);
                        };
                        re(
                          te,
                          (Z) => {
                            a()[o(c).id] === "warning" ? Z(fe) : Z(ue, !1);
                          },
                          !0
                        );
                      }
                      E(L, ee);
                    };
                    re(
                      k,
                      (L) => {
                        a()[o(c).id] === "error" ? L(J) : L(ae, !1);
                      },
                      !0
                    );
                  }
                  E(N, F);
                };
                re(B, (N) => {
                  a()[o(c).id] === "check" ? N(U) : N(q, !1);
                });
              }
              E(D, j);
            }, T = (D) => {
              var j = et();
              j.nodeValue = d + 1, E(D, j);
            };
            re(y, (D) => {
              r().includes(o(c).id) && o(c).id !== i() ? D(C) : D(T, !1);
            });
          }
          ve(
            (D) => {
              Tt(w, "aria-current", o(c).id === i() ? "step" : void 0), I = _r(w, 1, "", null, I, D);
            },
            [
              () => ({
                "not-visited": !r().includes(o(c).id),
                current: o(c).id === i(),
                visited: r().includes(o(c).id) && o(c).id !== i()
              })
            ]
          ), E(S, w);
        },
        $$slots: { default: !0 }
      });
    }
    var g = Q(h, 2), p = W(g), _ = Q(f, 2);
    {
      var A = (x) => {
        var S = Ap();
        E(x, S);
      };
      re(_, (x) => {
        d < t().length - 1 && x(A);
      });
    }
    ve(() => Me(p, o(c).label)), E(l, v);
  }), E(n, u), Ae();
}
It(["click"]);
function wp(n, e) {
  const t = [
    { id: "process-definition", label: "Process Definition" },
    {
      id: "validator-configuration",
      label: "Validator Configuration"
    }
  ];
  let r = m(e, "currentId", 3, null), i = m(e, "visited", 19, () => []);
  Sp(n, {
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
var Tp = /* @__PURE__ */ X('<div style="display:flex;align-items:center;gap:0.5rem;"><button type="button" class="back-container svelte-1i38ker"><!> <span>Back to Overview</span> <span class="back-container__title svelte-1i38ker"> </span></button></div>');
function Lu(n, e) {
  let t = m(e, "title", 3, "Engineering Wizard");
  var r = Tp(), i = W(r);
  i.__click = function(...l) {
    var c;
    (c = e.onBack) == null || c.apply(this, l);
  };
  var a = W(i);
  Nh(a, {});
  var s = Q(a, 4), u = W(s);
  ve(() => Me(u, t())), E(n, r);
}
It(["click"]);
var Dp = /* @__PURE__ */ X('<div class="add-group-form svelte-1ceeuzb"><!> <!></div>');
function Lp(n, e) {
  Ce(e, !0);
  let t = m(e, "open", 15, !1), r = /* @__PURE__ */ le(""), i = /* @__PURE__ */ le(Ee((e.groups + 1).toString()));
  const a = () => Nr("cancel"), s = () => Nr("confirm", { name: o(r), position: Number(o(i)) });
  let u = /* @__PURE__ */ de(() => [
    ...Array.from({ length: e.groups }, (c, d) => ({ value: (d + 1).toString(), label: (d + 1).toString() })),
    // iterate from 1..groups
    { value: (e.groups + 1).toString(), label: "End" }
    // add option end
  ]), l = /* @__PURE__ */ de(() => o(r) && o(i));
  {
    const c = (v) => {
      var f = Dp(), h = W(f);
      $d(h, {
        label: "Name",
        placeholder: "Group 1",
        variant: "outlined",
        required: !0,
        get value() {
          return o(r);
        },
        set value(p) {
          H(r, p, !0);
        }
      });
      var g = Q(h, 2);
      nh(g, {
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
          H(i, p, !0);
        }
      }), E(v, f);
    };
    let d = /* @__PURE__ */ de(() => !o(l));
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
var Rp = /* @__PURE__ */ X('<div class="group-list-item svelte-1xbvuu5"><div><!></div> <!> <!></div>'), Op = /* @__PURE__ */ X('<div class="edit-groups-form"><h3>Drag & Drop to change Order</h3> <div></div></div>');
function Mp(n, e) {
  Ce(e, !0);
  const t = 100;
  let r = m(e, "open", 15, !1), i = /* @__PURE__ */ le(Ee([...e.groups]));
  const a = () => Nr("cancel"), s = () => {
    Nr("confirm", { groups: o(i).map((d) => ({ ...d })) });
  }, u = (d) => () => {
    H(i, o(i).filter((v) => v.id !== d), !0);
  }, l = (d) => {
    H(i, d.detail.items, !0);
  };
  let c = /* @__PURE__ */ de(() => o(i).every((d) => d.title.trim().length > 0));
  {
    const d = (f) => {
      var h = Op(), g = Q(W(h), 2);
      cn(g, 29, () => o(i), (p) => p.id, (p, _, A) => {
        var x = Rp(), S = W(x), b = W(S);
        Ps(b, {}), De(S, (y) => On == null ? void 0 : On(y));
        var w = Q(S, 2);
        $d(w, {
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
        var I = Q(w, 2);
        {
          let y = /* @__PURE__ */ de(() => u(o(_).id));
          cu(I, {
            type: "delete",
            tooltip: "Delete",
            fillColor: "#FF203A",
            get onClick() {
              return o(y);
            }
          });
        }
        ve(() => Tt(x, "data-id", o(_).id)), Os(x, () => Ws, () => ({ duration: t })), E(p, x);
      }), De(g, (p, _) => Rn == null ? void 0 : Rn(p, _), () => ({
        items: o(i),
        flipDurationMs: t,
        dropTargetStyle: {}
      })), Pt("consider", g, l), Pt("finalize", g, l), E(f, h);
    };
    let v = /* @__PURE__ */ de(() => !o(c));
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
async function Fp(n, e, t) {
  const r = await Ga(Lp, { groups: e().length });
  r.type === "confirm" && t()(r.data.name, r.data.position);
}
async function Pp(n, e, t) {
  const r = e().map((s, u) => ({ id: u.toString(), title: s.title })), i = await Ga(Mp, { groups: r });
  if (i.type !== "confirm") return;
  const a = i.data.groups.map((s) => {
    const u = parseInt(s.id, 10);
    return { ...e()[u], title: s.title };
  });
  t()(a);
}
var kp = /* @__PURE__ */ X('<div class="plugin-list__header-action svelte-1a2zky1"><!></div>'), Gp = /* @__PURE__ */ X('<header class="plugin-list__header svelte-1a2zky1"><p class="plugin-list__title svelte-1a2zky1"> </p> <!></header>'), Np = /* @__PURE__ */ X('<div aria-label="drag-handle"><!></div>'), Zp = /* @__PURE__ */ X('<div class="plugin-list__item-action svelte-1a2zky1"><!></div>'), Hp = /* @__PURE__ */ X('<div class="plugin-list__item-row svelte-1a2zky1"><div class="plugin-list__item-row__left svelte-1a2zky1"><!> <span class="plugin-list__item-name svelte-1a2zky1"> </span></div> <!></div>'), Bp = /* @__PURE__ */ X("<div><!></div>"), Up = /* @__PURE__ */ X('<section class="plugin-list__group svelte-1a2zky1"><header class="plugin-list__group-header svelte-1a2zky1"><span class="plugin-list__group-index svelte-1a2zky1"></span> <span class="plugin-list__group-title svelte-1a2zky1"> </span></header> <div></div></section>'), Wp = /* @__PURE__ */ X('<div class="plugin-list__body svelte-1a2zky1"></div>'), jp = /* @__PURE__ */ X('<div class="plugin-list__footer svelte-1a2zky1"><button type="button" class="plugin-list__footer-button plugin-list__footer-button--edit svelte-1a2zky1"><!> <span>Edit groups</span></button> <button type="button" class="plugin-list__footer-button plugin-list__footer-button--add svelte-1a2zky1"><!> <span>Add group</span></button></div>');
function rl(n, e) {
  Ce(e, !0);
  const t = (v) => {
    var f = Gp(), h = W(f), g = W(h), p = Q(h, 2);
    {
      var _ = (A) => {
        var x = kp(), S = W(x);
        _e(S, () => e.headerAction), E(A, x);
      };
      re(p, (A) => {
        e.headerAction && A(_);
      });
    }
    ve(() => Me(g, s())), E(v, f);
  }, r = (v) => {
    var f = Wp();
    cn(f, 21, a, Ir, (h, g, p) => {
      var _ = Up(), A = W(_), x = W(A);
      x.textContent = `${p + 1}.`;
      var S = Q(x, 2), b = W(S), w = Q(A, 2);
      let I;
      cn(w, 31, () => o(g).plugins, (y) => y.id, (y, C, T) => {
        var D = Bp(), j = W(D);
        el(j, {
          variant: "secondary",
          children: (B, U) => {
            var q = Hp(), N = W(q), F = W(N);
            {
              var k = (te) => {
                var fe = Np(), ue = W(fe);
                Ps(ue, {}), De(fe, (Z) => On == null ? void 0 : On(Z)), E(te, fe);
              };
              re(F, (te) => {
                mn.isEditing && te(k);
              });
            }
            var J = Q(F, 2), ae = W(J), L = Q(N, 2);
            {
              var ee = (te) => {
                var fe = Zp(), ue = W(fe);
                _e(ue, () => e.itemAction, () => ({
                  group: o(g),
                  plugin: o(C),
                  groupIndex: p,
                  pluginIndex: o(T)
                })), E(te, fe);
              };
              re(L, (te) => {
                e.itemAction && te(ee);
              });
            }
            ve(() => Me(ae, o(C).name)), E(B, q);
          },
          $$slots: { default: !0 }
        }), ve(() => Tt(D, "data-id", o(C).id)), Os(D, () => Ws, () => ({ duration: 100 })), E(y, D);
      }), De(w, (y, C) => Rn == null ? void 0 : Rn(y, C), () => ({
        items: o(g).plugins,
        flipDurationMs: 100,
        dropTargetStyle: {}
      })), ve(
        (y) => {
          Me(b, o(g).title), I = _r(w, 1, "plugin-list__group-plugins svelte-1a2zky1", null, I, y);
        },
        [
          () => ({
            "plugin_list__group-plugins--dashed": mn.isEditing
          })
        ]
      ), Pt("consider", w, (y) => c(y, o(g))), Pt("finalize", w, (y) => d(y, o(g))), E(h, _);
    }), E(v, f);
  }, i = (v) => {
    var f = oe(), h = K(f);
    {
      var g = (p) => {
        var _ = jp(), A = W(_);
        A.__click = [Pp, a, l];
        var x = W(A);
        su(x, {
          svgStyles: "fill: var(--primary-base);",
          "aria-hidden": "true"
        });
        var S = Q(A, 2);
        S.__click = [Fp, a, u];
        var b = W(S);
        Xo(b, {
          svgStyles: "fill: var(--primary-base);",
          "aria-hidden": "true"
        }), E(p, _);
      };
      re(h, (p) => {
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
It(["click"]);
function Vp(n, e) {
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
        E(a, u);
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
function zp() {
  var e;
  const n = document.querySelector("open-scd");
  return ((e = n == null ? void 0 : n.shadowRoot) == null ? void 0 : e.querySelector("compas-layout")) ?? null;
}
function Xp(n) {
  var e;
  (e = zp()) == null || e.dispatchEvent(
    new CustomEvent("toggle-editor-tabs", {
      detail: { visible: n },
      bubbles: !0,
      composed: !0
    })
  );
}
const ao = /* @__PURE__ */ new Map(), ed = /* @__PURE__ */ new Map();
function Yp(n) {
  const e = String(n).toLowerCase().replace(/[^a-z0-9-]/g, "-");
  return e.includes("-") ? e : `plg-${e}`;
}
function qp(n) {
  const e = n.src.split("?")[0], t = ed.get(e);
  if (t) return t;
  const r = Yp(n.tagName ?? n.id);
  return ed.set(e, r), r;
}
function bs(n) {
  return !!customElements.get(n);
}
async function Kp(n, e) {
  const t = (e == null ? void 0 : e.default) ?? (e == null ? void 0 : e.element);
  if (!t) throw new Error(`Plugin module did not export a custom element constructor for "${n}".`);
  if (bs(n)) return n;
  try {
    customElements.define(n, t);
  } catch {
    if (bs(n)) return n;
    const i = t, a = class extends i {
    };
    customElements.define(n, a);
  }
  return await customElements.whenDefined(n), n;
}
async function Ru(n) {
  if (n.type !== "external") return null;
  const e = qp(n);
  if (bs(e)) return e;
  const t = ao.get(e);
  if (t) return t;
  const r = (async () => {
    const i = await import(
      /* @vite-ignore */
      n.src
    );
    return bs(e) ? await customElements.whenDefined(e) : await Kp(e, i), e;
  })().finally(() => {
    ao.delete(e);
  });
  return ao.set(e, r), r;
}
async function Qp(n) {
  await Promise.all(
    n.filter((e) => e.type === "external").map(async (e) => {
      try {
        await Ru(e);
      } catch (t) {
        console.error("Failed to preload plugin", e.id, t);
      }
    })
  );
}
const Hr = jn(!0);
Hr.subscribe((n) => {
  Xp(n);
});
var Jp = (n, e, t) => e(t().id), $p = /* @__PURE__ */ X('<button type="button" class="plugin-list__removeBtn svelte-gipzw9"><!></button>');
function eb(n, e) {
  Ce(e, !0);
  const t = (d) => {
    var v = oe(), f = K(v);
    {
      var h = (g) => {
        Vn(g, {
          style: "background-color: #FF203A",
          variant: "raised",
          "aria-label": "Remove all plugins",
          onclick: a,
          children: (p, _) => {
            var A = et("REMOVE ALL");
            E(p, A);
          },
          $$slots: { default: !0 }
        });
      };
      re(f, (g) => {
        o(c) && g(h);
      });
    }
    E(d, v);
  }, r = (d, v) => {
    let f = () => v == null ? void 0 : v().plugin;
    var h = $p();
    h.__click = [Jp, s, f];
    var g = W(h);
    au(g, { svgStyles: "fill: #FF203A" }), ve(() => Tt(h, "aria-label", `Remove ${f().name}`)), E(d, h);
  };
  let i = m(e, "pluginGroups", 19, () => []);
  async function a() {
    (await Ga(iu, {
      title: "Remove all entries?",
      message: "This action cannot be undone. You will need to manually search for and re-add each item, and rearrange them again.",
      confirmActionText: "Remove All",
      cancelActionText: "Cancel",
      confirmActionColor: "danger"
    })).type === "confirm" && cp(ct.process.id);
  }
  function s(d) {
    up(ct.process.id, d);
  }
  function u(d, v) {
    fp(ct.process.id, d, v);
  }
  function l(d) {
    vp(ct.process.id, d);
  }
  let c = /* @__PURE__ */ de(() => i().flatMap((d) => d.plugins).length > 0);
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
It(["click"]);
function Ou(n) {
  var r;
  const e = n.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "").slice(0, 32), t = ((r = crypto.randomUUID) == null ? void 0 : r.call(crypto).split("-")[0]) ?? Math.random().toString(36).slice(2, 10);
  return `ext-${e || "plugin"}-${t}`;
}
var tb = /* @__PURE__ */ X('<div class="card-header svelte-1fcjrhj"><p class="header-info svelte-1fcjrhj">Add External Plugins</p> <div class="search-input svelte-1fcjrhj"><!></div></div>'), nb = (n, e, t) => e(o(t), ct.process.id), rb = /* @__PURE__ */ X('<div class="card-item-content svelte-1fcjrhj"><div class="card-item-content__left svelte-1fcjrhj"><div aria-label="drag-handle"><!></div> <p class="plugin-name svelte-1fcjrhj"> </p></div> <button class="plugin-add-btn svelte-1fcjrhj"><!></button></div>'), ib = /* @__PURE__ */ X("<div><!></div>"), ab = /* @__PURE__ */ X('<div class="card-parent-content svelte-1fcjrhj"></div>');
function sb(n, e) {
  Ce(e, !0);
  const t = (c) => {
    var d = tb(), v = Q(W(d), 2), f = W(v);
    pr(f, {
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
    var d = ab();
    cn(d, 29, i, (v) => v.id, (v, f) => {
      var h = ib(), g = W(h);
      el(g, {
        variant: "secondary",
        children: (p, _) => {
          var A = rb(), x = W(A), S = W(x), b = W(S);
          Ps(b, {}), De(S, (T) => On == null ? void 0 : On(T));
          var w = Q(S, 2), I = W(w), y = Q(x, 2);
          y.__click = [nb, s, f];
          var C = W(y);
          Xo(C, { svgStyles: "fill: var(--brand);" }), ve(() => Me(I, o(f).name)), E(p, A);
        },
        $$slots: { default: !0 }
      }), ve(() => Tt(h, "data-id", o(f).id)), Os(h, () => Ws, () => ({ duration: 100 })), E(v, h);
    }), De(d, (v, f) => Rn == null ? void 0 : Rn(v, f), () => ({
      items: i(),
      flipDurationMs: 100,
      dropTargetStyle: {},
      dropFromOthersDisabled: !0
    })), Pt("consider", d, l), Pt("finalize", d, u), E(c, d);
  };
  let i = m(e, "plugins", 23, () => []), a = m(e, "searchTerm", 15, "");
  function s(c, d) {
    dp(d, c);
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
It(["click"]);
var ob = /* @__PURE__ */ X('<div class="process-definition-view svelte-ws8xx1"><!> <div class="drag-and-drop-info svelte-ws8xx1"><!> <p class="svelte-ws8xx1">SELECT OR DRAG & DROP PLUGINS</p></div> <!></div>');
function lb(n, e) {
  Ce(e, !0);
  let t = m(e, "pluginGroups", 19, () => []), r = /* @__PURE__ */ le(""), i = /* @__PURE__ */ de(() => {
    const v = nl.plugins.map((h) => ({
      id: Ou(h.name),
      name: h.name,
      src: h.src,
      type: "internal"
    })), f = o(r).toLowerCase().trim();
    return f ? v.filter((h) => h.name.toLowerCase().includes(f)) : v;
  });
  var a = ob(), s = W(a);
  eb(s, {
    get pluginGroups() {
      return t();
    }
  });
  var u = Q(s, 2), l = W(u);
  du(l, { svgStyles: "fill: #6B9197" });
  var c = Q(u, 2);
  sb(c, {
    get plugins() {
      return o(i);
    },
    get searchTerm() {
      return o(r);
    },
    set searchTerm(d) {
      H(r, d, !0);
    }
  }), E(n, a), Ae();
}
const db = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmNvbW0tc3VibmV0LTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJuZXQgQWRkcmVzcyBWYWxpZGl0eTwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5WYWxpZGF0ZXMgSVAgc3VibmV0IGFkZHJlc3NlcyBhbmQgQ0lEUi9uZXRtYXNrIGFyZSBwcm9wZXJseSBmb3JtYXR0ZWQgYW5kIG1lZXQgcHJvamVjdCBjb25zdHJhaW50cy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1zdWJuZXQtYWRkcmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5nc2UtY29uZmlnLTAwMjwvaWQ+CiAgICA8bmFtZT5HU0UgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIEdTRSBjb250cm9sIGJsb2NrcyByZWZlcmVuY2UgdmFsaWQgZGF0YXNldHMgYW5kIGhhdmUgY29ycmVjdCBNQUMvVkxBTi9uZXR3b3JrIHBhcmFtZXRlcnMuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stZ3NlLWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5zbXYtY29uZmlnLTAwMzwvaWQ+CiAgICA8bmFtZT5TTVYgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5DaGVja3MgU01WIGNvbnRyb2wgYmxvY2tzIGZvciB2YWxpZCBkYXRhc2V0cywgc2FtcGxlIHJhdGVzLCBhbmQgY29tcGxpYW50IG5ldHdvcmsgc2V0dGluZ3MuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stc212LWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4KCg==", ub = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmNvbW0tc3VibmV0LTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJuZXQgQWRkcmVzcyBWYWxpZGl0eTwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5WYWxpZGF0ZXMgSVAgc3VibmV0IGFkZHJlc3NlcyBhbmQgQ0lEUi9uZXRtYXNrIGFyZSBwcm9wZXJseSBmb3JtYXR0ZWQgYW5kIG1lZXQgcHJvamVjdCBjb25zdHJhaW50cy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1zdWJuZXQtYWRkcmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5nc2UtY29uZmlnLTAwMjwvaWQ+CiAgICA8bmFtZT5HU0UgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIEdTRSBjb250cm9sIGJsb2NrcyByZWZlcmVuY2UgdmFsaWQgZGF0YXNldHMgYW5kIGhhdmUgY29ycmVjdCBNQUMvVkxBTi9uZXR3b3JrIHBhcmFtZXRlcnMuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stZ3NlLWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5zbXYtY29uZmlnLTAwMzwvaWQ+CiAgICA8bmFtZT5TTVYgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5DaGVja3MgU01WIGNvbnRyb2wgYmxvY2tzIGZvciB2YWxpZCBkYXRhc2V0cywgc2FtcGxlIHJhdGVzLCBhbmQgY29tcGxpYW50IG5ldHdvcmsgc2V0dGluZ3MuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stc212LWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4KCg==", cb = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmNvbW0tc3VibmV0LTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJuZXQgQWRkcmVzcyBWYWxpZGl0eTwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5WYWxpZGF0ZXMgSVAgc3VibmV0IGFkZHJlc3NlcyBhbmQgQ0lEUi9uZXRtYXNrIGFyZSBwcm9wZXJseSBmb3JtYXR0ZWQgYW5kIG1lZXQgcHJvamVjdCBjb25zdHJhaW50cy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1zdWJuZXQtYWRkcmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5nc2UtY29uZmlnLTAwMjwvaWQ+CiAgICA8bmFtZT5HU0UgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIEdTRSBjb250cm9sIGJsb2NrcyByZWZlcmVuY2UgdmFsaWQgZGF0YXNldHMgYW5kIGhhdmUgY29ycmVjdCBNQUMvVkxBTi9uZXR3b3JrIHBhcmFtZXRlcnMuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stZ3NlLWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5zbXYtY29uZmlnLTAwMzwvaWQ+CiAgICA8bmFtZT5TTVYgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5DaGVja3MgU01WIGNvbnRyb2wgYmxvY2tzIGZvciB2YWxpZCBkYXRhc2V0cywgc2FtcGxlIHJhdGVzLCBhbmQgY29tcGxpYW50IG5ldHdvcmsgc2V0dGluZ3MuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stc212LWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4KCg==", fb = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmNvbW0tc3VibmV0LTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJuZXQgQWRkcmVzcyBWYWxpZGl0eTwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5WYWxpZGF0ZXMgSVAgc3VibmV0IGFkZHJlc3NlcyBhbmQgQ0lEUi9uZXRtYXNrIGFyZSBwcm9wZXJseSBmb3JtYXR0ZWQgYW5kIG1lZXQgcHJvamVjdCBjb25zdHJhaW50cy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1zdWJuZXQtYWRkcmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5nc2UtY29uZmlnLTAwMjwvaWQ+CiAgICA8bmFtZT5HU0UgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIEdTRSBjb250cm9sIGJsb2NrcyByZWZlcmVuY2UgdmFsaWQgZGF0YXNldHMgYW5kIGhhdmUgY29ycmVjdCBNQUMvVkxBTi9uZXR3b3JrIHBhcmFtZXRlcnMuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stZ3NlLWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5zbXYtY29uZmlnLTAwMzwvaWQ+CiAgICA8bmFtZT5TTVYgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5DaGVja3MgU01WIGNvbnRyb2wgYmxvY2tzIGZvciB2YWxpZCBkYXRhc2V0cywgc2FtcGxlIHJhdGVzLCBhbmQgY29tcGxpYW50IG5ldHdvcmsgc2V0dGluZ3MuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stc212LWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4KCg==", vb = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmNvbW0tc3VibmV0LTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJuZXQgQWRkcmVzcyBWYWxpZGl0eTwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5WYWxpZGF0ZXMgSVAgc3VibmV0IGFkZHJlc3NlcyBhbmQgQ0lEUi9uZXRtYXNrIGFyZSBwcm9wZXJseSBmb3JtYXR0ZWQgYW5kIG1lZXQgcHJvamVjdCBjb25zdHJhaW50cy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1zdWJuZXQtYWRkcmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5nc2UtY29uZmlnLTAwMjwvaWQ+CiAgICA8bmFtZT5HU0UgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIEdTRSBjb250cm9sIGJsb2NrcyByZWZlcmVuY2UgdmFsaWQgZGF0YXNldHMgYW5kIGhhdmUgY29ycmVjdCBNQUMvVkxBTi9uZXR3b3JrIHBhcmFtZXRlcnMuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stZ3NlLWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5zbXYtY29uZmlnLTAwMzwvaWQ+CiAgICA8bmFtZT5TTVYgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5DaGVja3MgU01WIGNvbnRyb2wgYmxvY2tzIGZvciB2YWxpZCBkYXRhc2V0cywgc2FtcGxlIHJhdGVzLCBhbmQgY29tcGxpYW50IG5ldHdvcmsgc2V0dGluZ3MuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stc212LWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4KCg==", hb = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmNvbW0tc3VibmV0LTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJuZXQgQWRkcmVzcyBWYWxpZGl0eTwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5WYWxpZGF0ZXMgSVAgc3VibmV0IGFkZHJlc3NlcyBhbmQgQ0lEUi9uZXRtYXNrIGFyZSBwcm9wZXJseSBmb3JtYXR0ZWQgYW5kIG1lZXQgcHJvamVjdCBjb25zdHJhaW50cy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1zdWJuZXQtYWRkcmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5nc2UtY29uZmlnLTAwMjwvaWQ+CiAgICA8bmFtZT5HU0UgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIEdTRSBjb250cm9sIGJsb2NrcyByZWZlcmVuY2UgdmFsaWQgZGF0YXNldHMgYW5kIGhhdmUgY29ycmVjdCBNQUMvVkxBTi9uZXR3b3JrIHBhcmFtZXRlcnMuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stZ3NlLWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5zbXYtY29uZmlnLTAwMzwvaWQ+CiAgICA8bmFtZT5TTVYgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5DaGVja3MgU01WIGNvbnRyb2wgYmxvY2tzIGZvciB2YWxpZCBkYXRhc2V0cywgc2FtcGxlIHJhdGVzLCBhbmQgY29tcGxpYW50IG5ldHdvcmsgc2V0dGluZ3MuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stc212LWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4KCg==", gb = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmNvbW0tc3VibmV0LTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJuZXQgQWRkcmVzcyBWYWxpZGl0eTwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5WYWxpZGF0ZXMgSVAgc3VibmV0IGFkZHJlc3NlcyBhbmQgQ0lEUi9uZXRtYXNrIGFyZSBwcm9wZXJseSBmb3JtYXR0ZWQgYW5kIG1lZXQgcHJvamVjdCBjb25zdHJhaW50cy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1zdWJuZXQtYWRkcmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5nc2UtY29uZmlnLTAwMjwvaWQ+CiAgICA8bmFtZT5HU0UgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIEdTRSBjb250cm9sIGJsb2NrcyByZWZlcmVuY2UgdmFsaWQgZGF0YXNldHMgYW5kIGhhdmUgY29ycmVjdCBNQUMvVkxBTi9uZXR3b3JrIHBhcmFtZXRlcnMuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stZ3NlLWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5zbXYtY29uZmlnLTAwMzwvaWQ+CiAgICA8bmFtZT5TTVYgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5DaGVja3MgU01WIGNvbnRyb2wgYmxvY2tzIGZvciB2YWxpZCBkYXRhc2V0cywgc2FtcGxlIHJhdGVzLCBhbmQgY29tcGxpYW50IG5ldHdvcmsgc2V0dGluZ3MuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stc212LWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4KCg==", mb = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmNvbW0tc3VibmV0LTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJuZXQgQWRkcmVzcyBWYWxpZGl0eTwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5WYWxpZGF0ZXMgSVAgc3VibmV0IGFkZHJlc3NlcyBhbmQgQ0lEUi9uZXRtYXNrIGFyZSBwcm9wZXJseSBmb3JtYXR0ZWQgYW5kIG1lZXQgcHJvamVjdCBjb25zdHJhaW50cy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1zdWJuZXQtYWRkcmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5nc2UtY29uZmlnLTAwMjwvaWQ+CiAgICA8bmFtZT5HU0UgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIEdTRSBjb250cm9sIGJsb2NrcyByZWZlcmVuY2UgdmFsaWQgZGF0YXNldHMgYW5kIGhhdmUgY29ycmVjdCBNQUMvVkxBTi9uZXR3b3JrIHBhcmFtZXRlcnMuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stZ3NlLWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5zbXYtY29uZmlnLTAwMzwvaWQ+CiAgICA8bmFtZT5TTVYgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5DaGVja3MgU01WIGNvbnRyb2wgYmxvY2tzIGZvciB2YWxpZCBkYXRhc2V0cywgc2FtcGxlIHJhdGVzLCBhbmQgY29tcGxpYW50IG5ldHdvcmsgc2V0dGluZ3MuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stc212LWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4K", pb = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmNvbW0tc3VibmV0LTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJuZXQgQWRkcmVzcyBWYWxpZGl0eTwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5WYWxpZGF0ZXMgSVAgc3VibmV0IGFkZHJlc3NlcyBhbmQgQ0lEUi9uZXRtYXNrIGFyZSBwcm9wZXJseSBmb3JtYXR0ZWQgYW5kIG1lZXQgcHJvamVjdCBjb25zdHJhaW50cy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1zdWJuZXQtYWRkcmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5nc2UtY29uZmlnLTAwMjwvaWQ+CiAgICA8bmFtZT5HU0UgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIEdTRSBjb250cm9sIGJsb2NrcyByZWZlcmVuY2UgdmFsaWQgZGF0YXNldHMgYW5kIGhhdmUgY29ycmVjdCBNQUMvVkxBTi9uZXR3b3JrIHBhcmFtZXRlcnMuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stZ3NlLWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5zbXYtY29uZmlnLTAwMzwvaWQ+CiAgICA8bmFtZT5TTVYgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5DaGVja3MgU01WIGNvbnRyb2wgYmxvY2tzIGZvciB2YWxpZCBkYXRhc2V0cywgc2FtcGxlIHJhdGVzLCBhbmQgY29tcGxpYW50IG5ldHdvcmsgc2V0dGluZ3MuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stc212LWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4KCg==", bb = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmNvbW0tc3VibmV0LTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJuZXQgQWRkcmVzcyBWYWxpZGl0eTwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5WYWxpZGF0ZXMgSVAgc3VibmV0IGFkZHJlc3NlcyBhbmQgQ0lEUi9uZXRtYXNrIGFyZSBwcm9wZXJseSBmb3JtYXR0ZWQgYW5kIG1lZXQgcHJvamVjdCBjb25zdHJhaW50cy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1zdWJuZXQtYWRkcmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5nc2UtY29uZmlnLTAwMjwvaWQ+CiAgICA8bmFtZT5HU0UgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIEdTRSBjb250cm9sIGJsb2NrcyByZWZlcmVuY2UgdmFsaWQgZGF0YXNldHMgYW5kIGhhdmUgY29ycmVjdCBNQUMvVkxBTi9uZXR3b3JrIHBhcmFtZXRlcnMuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stZ3NlLWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5zbXYtY29uZmlnLTAwMzwvaWQ+CiAgICA8bmFtZT5TTVYgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5DaGVja3MgU01WIGNvbnRyb2wgYmxvY2tzIGZvciB2YWxpZCBkYXRhc2V0cywgc2FtcGxlIHJhdGVzLCBhbmQgY29tcGxpYW50IG5ldHdvcmsgc2V0dGluZ3MuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stc212LWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4KCg==";
var Ib = /* @__PURE__ */ X('<button type="button"><span> </span></button>'), _b = /* @__PURE__ */ X('<div><button type="button" class="validation-groups__group-title svelte-1s1txht"> </button> <!></div>'), yb = /* @__PURE__ */ X('<div class="validation-groups svelte-1s1txht"></div>');
function Mu(n, e) {
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
  var c = yb();
  cn(c, 21, t, Ir, (d, v, f) => {
    var h = _b();
    let g;
    var p = W(h);
    p.__click = () => u(f);
    var _ = W(p), A = Q(p, 2);
    {
      var x = (S) => {
        var b = oe(), w = K(b);
        cn(w, 17, () => o(v).plugins, Ir, (I, y, C) => {
          var T = Ib();
          let D;
          T.__click = () => l(f, C);
          var j = W(T), B = W(j);
          ve(
            (U) => {
              D = _r(T, 1, "validation-groups__plugin svelte-1s1txht", null, D, U), Me(B, o(y).name);
            },
            [() => ({ active: C === i() })]
          ), E(I, T);
        }), E(S, b);
      };
      re(A, (S) => {
        f === r() && S(x);
      });
    }
    ve(
      (S) => {
        g = _r(h, 1, "validation-groups__group svelte-1s1txht", null, g, S), Tt(p, "aria-pressed", f === r()), Me(_, o(v).title);
      },
      [() => ({ expanded: f === r() })]
    ), E(d, h);
  }), ve(() => tt(c, `--expanded-group-bg:${a()}; --expanded-group-border:${s()};`)), E(n, c), Ae();
}
It(["click"]);
var Cb = /* @__PURE__ */ X("<p>Loading…</p>"), Ab = /* @__PURE__ */ X('<p class="error svelte-v2hgj7"> </p>'), Eb = /* @__PURE__ */ X('<div class="xml-viewer svelte-v2hgj7"><h4 class="xml-viewer__title svelte-v2hgj7"> </h4> <div class="xml-viewer__box svelte-v2hgj7"><pre class="svelte-v2hgj7"> </pre></div></div>'), xb = /* @__PURE__ */ X('<span class="validation-xml-container__description svelte-v2hgj7"> </span>'), Sb = /* @__PURE__ */ X('<button type="button" class="toggle-btn svelte-v2hgj7" aria-expanded="true" title="Collapse"><!></button>'), wb = /* @__PURE__ */ X('<button type="button" class="toggle-btn svelte-v2hgj7" aria-expanded="false" title="Expand"><!></button>'), Tb = /* @__PURE__ */ X('<div class="xml-viewer svelte-v2hgj7"><div class="xml-viewer__box svelte-v2hgj7"><pre class="svelte-v2hgj7"> </pre></div></div>'), Db = /* @__PURE__ */ X('<div class="validation-xml-container svelte-v2hgj7"><div class="validation-xml-container__meta svelte-v2hgj7"><span class="validation-xml-container__name svelte-v2hgj7"> </span> <!> <div class="validation-xml-container__actions svelte-v2hgj7"><button type="button" class="delete-btn svelte-v2hgj7" title="Remove"><!></button> <!></div></div> <!></div>'), Lb = /* @__PURE__ */ X('<div class="validation-xml-list svelte-v2hgj7"></div>'), Rb = /* @__PURE__ */ X("<!> <!>", 1);
function Ob(n, e) {
  Ce(e, !0);
  let t = m(e, "pluginGroups", 19, () => []), r = /* @__PURE__ */ le(null), i = /* @__PURE__ */ le(null);
  const a = /* @__PURE__ */ de(() => o(r) !== null ? t()[o(r)] : null), s = /* @__PURE__ */ de(() => o(a) && o(i) !== null ? o(a).plugins[o(i)] : null);
  xe(() => {
    var I, y;
    if (!((I = t()) != null && I.length)) {
      H(r, null), H(i, null);
      return;
    }
    (o(r) === null || o(r) >= t().length) && H(r, 0);
    const w = t()[o(r)];
    if (!((y = w == null ? void 0 : w.plugins) != null && y.length)) {
      H(i, null);
      return;
    }
    (o(i) === null || o(i) >= w.plugins.length) && H(i, 0);
  });
  let u = /* @__PURE__ */ le(""), l = /* @__PURE__ */ le(!1), c = /* @__PURE__ */ le(""), d = null, v = /* @__PURE__ */ le(Ee([])), f = /* @__PURE__ */ le(Ee(/* @__PURE__ */ new Set()));
  async function h(w) {
    H(l, !0), H(c, ""), H(u, ""), H(v, [], !0), H(f, /* @__PURE__ */ new Set(), !0), d == null || d.abort(), d = new AbortController();
    try {
      const I = new URL((/* @__PURE__ */ Object.assign({ "../../assets/validations/autodoc-xyz.xml": db, "../../assets/validations/communication-xyz.xml": ub, "../../assets/validations/history-viewer-xyz.xml": cb, "../../assets/validations/location-manager-xyz.xml": fb, "../../assets/validations/publisher-xyz.xml": vb, "../../assets/validations/subscribe-later-binding-xyz.xml": hb, "../../assets/validations/substation-xyz.xml": gb, "../../assets/validations/template-generator-xyz.xml": mb, "../../assets/validations/type-designer-xyz.xml": pb, "../../assets/validations/type-distributor-xyz.xml": bb }))[`../../assets/validations/${w}.xml`], import.meta.url).href, y = await fetch(I, { cache: "no-cache", signal: d.signal });
      if (!y.ok) {
        if (y.status === 404) {
          H(u, "(No XML found for this plugin.)");
          return;
        }
        throw new Error(`HTTP ${y.status}`);
      }
      H(u, await y.text(), !0);
      const T = new DOMParser().parseFromString(o(u), "application/xml");
      if (T.querySelector("parsererror"))
        throw new Error("Invalid XML format.");
      const j = new XMLSerializer(), B = Array.from(T.getElementsByTagName("validation"));
      H(
        v,
        B.map((U, q) => {
          var fe, ue, Z, z, M, $, Y;
          const N = (fe = U.getAttribute("name")) == null ? void 0 : fe.trim(), F = (ue = U.getAttribute("id")) == null ? void 0 : ue.trim(), k = (z = (Z = U.querySelector("name")) == null ? void 0 : Z.textContent) == null ? void 0 : z.trim(), J = (M = U.getAttribute("description")) == null ? void 0 : M.trim(), ae = (Y = ($ = U.querySelector("description")) == null ? void 0 : $.textContent) == null ? void 0 : Y.trim(), L = N || F || k || `Validation ${q + 1}`, ee = J || ae || void 0, te = j.serializeToString(U);
          return { name: L, description: ee, xml: te };
        }),
        !0
      ), H(f, new Set(o(v).map((U, q) => q)), !0);
    } catch (I) {
      if ((I == null ? void 0 : I.name) === "AbortError")
        return;
      H(c, (I == null ? void 0 : I.message) || "Failed to load XML.", !0);
    } finally {
      H(l, !1);
    }
  }
  let g = /* @__PURE__ */ de(() => {
    var w;
    return ((w = o(s)) == null ? void 0 : w.id) ?? null;
  }), p = null;
  xe(() => {
    !o(g) || o(g) === p || (p = o(g), h(o(g)));
  });
  function _(w) {
    o(f).has(w) ? o(f).delete(w) : o(f).add(w), H(f, new Set(o(f)), !0);
  }
  var A = Rb(), x = K(A);
  Mu(x, {
    get pluginGroups() {
      return t();
    },
    get selectedGroupIndex() {
      return o(r);
    },
    set selectedGroupIndex(w) {
      H(r, w, !0);
    },
    get selectedPluginIndex() {
      return o(i);
    },
    set selectedPluginIndex(w) {
      H(i, w, !0);
    }
  });
  var S = Q(x, 2);
  {
    var b = (w) => {
      var I = oe(), y = K(I);
      {
        var C = (D) => {
          var j = Cb();
          E(D, j);
        }, T = (D) => {
          var j = oe(), B = K(j);
          {
            var U = (N) => {
              var F = Ab(), k = W(F);
              ve(() => Me(k, o(c))), E(N, F);
            }, q = (N) => {
              var F = oe(), k = K(F);
              {
                var J = (L) => {
                  var ee = Eb(), te = W(ee), fe = W(te), ue = Q(te, 2), Z = W(ue), z = W(Z);
                  ve(() => {
                    Me(fe, `XML for: ${o(s).name ?? ""}`), Me(z, o(u));
                  }), E(L, ee);
                }, ae = (L) => {
                  var ee = Lb();
                  cn(ee, 21, () => o(v), Ir, (te, fe, ue) => {
                    var Z = Db(), z = W(Z), M = W(z), $ = W(M), Y = Q(M, 2);
                    {
                      var me = (O) => {
                        var V = xb(), he = W(V);
                        ve(() => Me(he, o(fe).description)), E(O, V);
                      };
                      re(Y, (O) => {
                        o(fe).description && O(me);
                      });
                    }
                    var be = Q(Y, 2), Ne = W(be), nt = W(Ne);
                    ou(nt, { svgStyles: "fill: #FF203A" });
                    var qe = Q(Ne, 2);
                    {
                      var Re = (O) => {
                        var V = Sb();
                        V.__click = () => _(ue);
                        var he = W(V);
                        Hh(he, { svgStyles: "fill: #004552" }), E(O, V);
                      }, st = (O) => {
                        var V = wb();
                        V.__click = () => _(ue);
                        var he = W(V);
                        Uh(he, { svgStyles: "fill: #004552" }), E(O, V);
                      };
                      re(qe, (O) => {
                        o(f).has(ue) ? O(Re) : O(st, !1);
                      });
                    }
                    var kt = Q(z, 2);
                    {
                      var Gt = (O) => {
                        var V = Tb(), he = W(V), Fe = W(he), Nt = W(Fe);
                        ve(() => Me(Nt, o(fe).xml)), E(O, V);
                      };
                      re(kt, (O) => {
                        o(f).has(ue) && O(Gt);
                      });
                    }
                    ve(() => Me($, o(fe).name)), E(te, Z);
                  }), E(L, ee);
                };
                re(k, (L) => {
                  o(v).length === 0 ? L(J) : L(ae, !1);
                });
              }
              E(N, F);
            };
            re(
              B,
              (N) => {
                o(c) ? N(U) : N(q, !1);
              },
              !0
            );
          }
          E(D, j);
        };
        re(y, (D) => {
          o(l) ? D(C) : D(T, !1);
        });
      }
      E(w, I);
    };
    re(S, (w) => {
      o(s) && w(b);
    });
  }
  E(n, A), Ae();
}
It(["click"]);
function Mb(n, e) {
  const t = (n == null ? void 0 : n.name) ?? "—";
  return [
    { label: "Engineering-Wizard", enabled: !0 },
    { label: e != null && e.edit ? `Edit ${t}` : t, enabled: !1 }
  ];
}
function Fb(n, e, t, r, i) {
  o(e) || (t(o(r)), H(i, o(i) + 1));
}
function Pb(n, e, t) {
  o(e) || H(t, o(t) - 1);
}
var kb = /* @__PURE__ */ X('<div class="header header--right svelte-1qlms77"><!></div> <!>', 1), Gb = /* @__PURE__ */ X('<div class="stepper svelte-1qlms77"><!> <!> <div class="stepper-navigation svelte-1qlms77"><button type="button" class="btn btn--back svelte-1qlms77" aria-label="Previous step">Back</button> <button type="button" class="btn btn--next svelte-1qlms77" aria-label="Next step">Next</button></div></div> <div class="step-content svelte-1qlms77"><!></div>', 1), Nb = /* @__PURE__ */ X('<div class="step-content svelte-1qlms77"><div class="header svelte-1qlms77"><!> <!></div> <!></div>'), Zb = /* @__PURE__ */ X('<div class="page-content svelte-1qlms77"><!></div>');
function Hb(n, e) {
  Ce(e, !0);
  const t = ["process-definition", "validator-configuration"];
  let r = /* @__PURE__ */ le(0), i = /* @__PURE__ */ de(() => t[o(r)] ?? t[0]), a = /* @__PURE__ */ de(() => o(r) === 0), s = /* @__PURE__ */ de(() => o(r) === t.length - 1), u = /* @__PURE__ */ de(() => Mb(ct.process, { edit: mn.isEditing })), l = /* @__PURE__ */ de(() => ct.process.pluginGroups), c = /* @__PURE__ */ le(Ee([]));
  function d(b) {
    b === 0 && (Hr.set(!0), ct.process = null);
  }
  function v() {
    console.log("EDITING"), mn.isEditing = !0, Hr.set(!1), H(r, 0), H(c, [], !0);
  }
  function f() {
    mn.isEditing = !1, Hr.set(!0), ct.process = null;
  }
  function h(b) {
    const w = t.indexOf(b);
    w !== -1 && H(r, w, !0);
  }
  function g(b) {
    o(c).includes(b) || H(c, [...o(c), b], !0);
  }
  function p() {
    alert("Add New Validation clicked!");
  }
  var _ = Zb(), A = W(_);
  {
    var x = (b) => {
      var w = Gb(), I = K(w), y = W(I);
      Lu(y, { onBack: f });
      var C = Q(y, 2);
      wp(C, {
        get currentId() {
          return o(i);
        },
        get visited() {
          return o(c);
        },
        onSelect: h
      });
      var T = Q(C, 2), D = W(T);
      D.__click = [Pb, a, r];
      var j = Q(D, 2);
      j.__click = [
        Fb,
        s,
        g,
        i,
        r
      ];
      var B = Q(I, 2), U = W(B);
      {
        var q = (F) => {
          lb(F, {
            get pluginGroups() {
              return o(l);
            }
          });
        }, N = (F) => {
          var k = oe(), J = K(k);
          {
            var ae = (L) => {
              var ee = kb(), te = K(ee), fe = W(te);
              {
                let Z = /* @__PURE__ */ de(() => !ct.process);
                Vn(fe, {
                  variant: "raised",
                  style: "--mdc-theme-primary: var(--brand); --mdc-theme-on-primary: var(--on-brand)",
                  onclick: p,
                  get disabled() {
                    return o(Z);
                  },
                  "aria-label": "Add validation",
                  children: (z, M) => {
                    var $ = et("ADD NEW VALIDATION");
                    E(z, $);
                  },
                  $$slots: { default: !0 }
                });
              }
              var ue = Q(te, 2);
              Ob(ue, {
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
              }), E(L, ee);
            };
            re(
              J,
              (L) => {
                o(i) === "validator-configuration" && L(ae);
              },
              !0
            );
          }
          E(F, k);
        };
        re(U, (F) => {
          o(i) === "process-definition" ? F(q) : F(N, !1);
        });
      }
      ve(() => {
        D.disabled = o(a), j.disabled = o(s);
      }), E(b, w);
    }, S = (b) => {
      var w = Nb(), I = W(w), y = W(I);
      Tg(y, {
        get breadcrumbs() {
          return o(u);
        },
        activeIndex: 1,
        handleClick: d
      });
      var C = Q(y, 2);
      {
        let D = /* @__PURE__ */ de(() => !ct.process);
        Vn(C, {
          variant: "raised",
          style: "--mdc-theme-primary: var(--brand); --mdc-theme-on-primary: var(--on-brand)",
          onclick: () => e.handleStart(ct.process),
          get disabled() {
            return o(D);
          },
          "aria-label": "Start process",
          children: (j, B) => {
            var U = et("START PROCESS");
            E(j, U);
          },
          $$slots: { default: !0 }
        });
      }
      var T = Q(I, 2);
      Vp(T, {
        get pluginGroups() {
          return o(l);
        },
        requestEdit: v
      }), E(b, w);
    };
    re(A, (b) => {
      mn.isEditing ? b(x) : b(S, !1);
    });
  }
  E(n, _), Ae();
}
It(["click"]);
var Bb = /* @__PURE__ */ X("<div></div>");
function Ub(n, e) {
  Ce(e, !0);
  function t(u) {
    let l = 3735928559, c = 1103547991;
    for (let d = 0, v; d < u.length; d++)
      v = u.charCodeAt(d), l = Math.imul(l ^ v, 2654435761), c = Math.imul(c ^ v, 1597334677);
    return l = Math.imul(l ^ l >>> 16, 2246822507) ^ Math.imul(c ^ c >>> 13, 3266489909), c = Math.imul(c ^ c >>> 16, 2246822507) ^ Math.imul(l ^ l >>> 13, 3266489909), "oscd-plugin" + ((c >>> 0).toString(16).padStart(8, "0") + (l >>> 0).toString(16).padStart(8, "0"));
  }
  let r = m(e, "editCount", 19, () => -1), i = m(e, "plugins", 19, () => []), a = null;
  xe(() => {
    if (!a || (a.innerHTML = "", !e.plugin || !e.plugin.src)) return;
    const u = t(e.plugin.src), l = document.createElement(u);
    l.doc = e.doc, l.editCount = r(), l.plugins = i(), l.nsdoc = e.nsdoc, l.docName = e.docName, l.docId = e.docId, l.docs = e.docs, l.locale = e.locale, e.oscdApi && (l.oscdApi = e.oscdApi), a.appendChild(l);
  });
  var s = Bb();
  Se(s, (u) => a = u, () => a), E(n, s), Ae();
}
var Wb = /* @__PURE__ */ X('<div class="plugin-container svelte-1xkxjkz"><!></div>'), jb = /* @__PURE__ */ X('<div class="stepper svelte-1xkxjkz"><!> <!> <div class="stepper-navigation svelte-1xkxjkz"><button type="button" class="back-button svelte-1xkxjkz" aria-label="Previous plugin">Back</button> <button type="button" class="next-button svelte-1xkxjkz" aria-label="Next plugin">Next</button></div></div> <!>', 1);
function Vb(n, e) {
  Ce(e, !0);
  const t = ["check", "warning", "error"];
  let r = m(e, "editCount", 19, () => -1), i = m(e, "plugins", 19, () => []), a = Ee({ plugin: null }), s = /* @__PURE__ */ le(Ee([])), u = /* @__PURE__ */ le(Ee({})), l = /* @__PURE__ */ de(() => i().length > 0), c = /* @__PURE__ */ de(() => a.plugin && o(l) ? i().findIndex((q) => q.id === a.plugin.id) : -1), d = /* @__PURE__ */ de(() => ct.process.pluginGroups), v = /* @__PURE__ */ le(null), f = /* @__PURE__ */ le(null), h = /* @__PURE__ */ le(null);
  function g(q) {
    var N, F;
    if (!((N = o(d)) != null && N.length)) return { groupIndex: null, pluginIndex: null };
    for (let k = 0; k < o(d).length; k++) {
      const ae = ((F = o(d)[k].plugins) == null ? void 0 : F.findIndex((L) => L.id === q)) ?? -1;
      if (ae >= 0) return { groupIndex: k, pluginIndex: ae };
    }
    return { groupIndex: null, pluginIndex: null };
  }
  async function p(q) {
    if (!q) return;
    H(h, await Ru(q), !0), a.plugin = q;
    const { groupIndex: N, pluginIndex: F } = g(q.id);
    if (H(v, N, !0), H(f, F, !0), !o(s).includes(q.id)) {
      H(s, [...o(s), q.id], !0);
      const k = i().findIndex((J) => J.id === q.id);
      if (k !== -1) {
        const J = t[k % t.length];
        H(u, { ...o(u), [q.id]: J }, !0);
      }
    }
  }
  function _(q) {
    if (!o(l)) return;
    const F = ((o(c) < 0 ? 0 : o(c)) + q + i().length) % i().length;
    p(i()[F]);
  }
  const A = () => _(1), x = () => _(-1);
  function S(q, N) {
    return Object.assign(q, N), {
      update(F) {
        Object.assign(q, F);
      }
    };
  }
  xe(() => {
    var k, J, ae;
    if (o(v) === null || o(f) === null) return;
    const q = (k = o(d)) == null ? void 0 : k[o(v)], N = (J = q == null ? void 0 : q.plugins) == null ? void 0 : J[o(f)];
    if (!N) return;
    const F = i().find((L) => L.id === N.id);
    F && ((ae = a.plugin) == null ? void 0 : ae.id) !== F.id && p(F);
  }), xe(() => {
    if (!o(l)) {
      a.plugin = null, H(s, [], !0), H(u, {}, !0), H(v, null), H(f, null);
      return;
    }
    o(c) === -1 && p(i()[0]);
  }), it(() => (i().length && Qp(i()).catch(console.error), Hr.set(!1), () => Hr.set(!0)));
  function b() {
    var q;
    Hr.set(!0), (q = e.onExit) == null || q.call(e);
  }
  var w = jb(), I = K(w), y = W(I);
  Lu(y, { onBack: b });
  var C = Q(y, 2);
  Mu(C, {
    get pluginGroups() {
      return o(d);
    },
    expandedGroupBackground: "var(--primary-base)",
    expandedGroupBorderColor: "white",
    get selectedGroupIndex() {
      return o(v);
    },
    set selectedGroupIndex(q) {
      H(v, q, !0);
    },
    get selectedPluginIndex() {
      return o(f);
    },
    set selectedPluginIndex(q) {
      H(f, q, !0);
    }
  });
  var T = Q(C, 2), D = W(T), j = Q(D, 2), B = Q(I, 2);
  {
    var U = (q) => {
      var N = Wb(), F = W(N);
      {
        var k = (ae) => {
          Ub(ae, {
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
        }, J = (ae) => {
          var L = oe(), ee = K(L);
          {
            var te = (fe) => {
              var ue = oe(), Z = K(ue);
              mo(Z, () => o(h), !1, (z, M) => {
                De(z, ($, Y) => S == null ? void 0 : S($, Y), () => ({ doc: e.doc, editCount: r() })), _r(z, 0, "svelte-1xkxjkz");
              }), E(fe, ue);
            };
            re(
              ee,
              (fe) => {
                o(h) && fe(te);
              },
              !0
            );
          }
          E(ae, L);
        };
        re(F, (ae) => {
          a.plugin.type === "internal" ? ae(k) : ae(J, !1);
        });
      }
      E(q, N);
    };
    re(B, (q) => {
      a.plugin && q(U);
    });
  }
  ve(() => {
    D.disabled = !o(l), j.disabled = !o(l);
  }), Pt("click", D, x), Pt("click", j, A), E(n, w), Ae();
}
var zb = (n, e) => {
  n.target === n.currentTarget && e("exit");
}, Xb = /* @__PURE__ */ X('<div class="ewf-dialog-backdrop svelte-12xjguj" role="dialog" aria-modal="true" aria-labelledby="ewf-title" tabindex="-1"><div class="ewf-dialog-panel svelte-12xjguj" role="document"><h2 id="ewf-title" class="sr-only svelte-12xjguj">Engineering Workflow</h2> <!></div></div>');
function Yb(n, e) {
  Ce(e, !0);
  let t = m(e, "editCount", 19, () => -1), r = m(e, "plugins", 19, () => []), i = /* @__PURE__ */ le(!1), a = /* @__PURE__ */ le(void 0), s = /* @__PURE__ */ le(null);
  const u = (v) => {
    o(i) || (H(i, !0), ct.process = null, Hr.set(!0), Nr(v));
  };
  xe(() => {
    var v;
    e.open !== o(a) && (H(a, e.open, !0), e.open ? (H(i, !1), (v = o(s)) == null || v.focus()) : u("cancel"));
  });
  var l = oe(), c = K(l);
  {
    var d = (v) => {
      var f = Xb();
      f.__click = [zb, u];
      var h = W(f), g = Q(W(h), 2);
      Vb(g, {
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
      }), Se(f, (p) => H(s, p), () => o(s)), E(v, f);
    };
    re(c, (v) => {
      e.open && v(d);
    });
  }
  E(n, l), Ae();
}
It(["click"]);
var qb = /* @__PURE__ */ X('<div class="card-header svelte-1rixbl7"><p class="header-info svelte-1rixbl7">Add External Plugins</p> <div class="search-input svelte-1rixbl7"><!></div></div>'), Kb = (n, e, t) => e(o(t)), Qb = /* @__PURE__ */ X('<div class="card-item-content svelte-1rixbl7"><div class="card-item-content__left svelte-1rixbl7"><div aria-label="drag-handle"><!></div> <p class="plugin-name svelte-1rixbl7"> </p></div> <button class="plugin-add-btn svelte-1rixbl7"><!></button></div>'), Jb = /* @__PURE__ */ X("<div><!></div>"), $b = /* @__PURE__ */ X('<div class="card-parent-content svelte-1rixbl7"></div>');
function eI(n, e) {
  Ce(e, !0);
  const t = (d) => {
    var v = qb(), f = Q(W(v), 2), h = W(f);
    pr(h, {
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
    var v = $b();
    cn(v, 29, i, (f) => f.id, (f, h) => {
      var g = Jb(), p = W(g);
      el(p, {
        variant: "secondary",
        children: (_, A) => {
          var x = Qb(), S = W(x), b = W(S), w = W(b);
          Ps(w, {}), De(b, (D) => On == null ? void 0 : On(D));
          var I = Q(b, 2), y = W(I), C = Q(S, 2);
          C.__click = [Kb, c, h];
          var T = W(C);
          Xo(T, { svgStyles: "fill: var(--brand);" }), ve(() => {
            Me(y, o(h).name), Tt(C, "aria-label", `Add ${o(h).name}`);
          }), E(_, x);
        },
        $$slots: { default: !0 }
      }), ve(() => Tt(g, "data-id", o(h).id)), Os(g, () => Ws, () => ({ duration: 100 })), E(f, g);
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
It(["click"]);
var tI = (n, e, t) => e(t().id), nI = /* @__PURE__ */ X('<button type="button" class="plugin-list__removeBtn svelte-1jr0t84"><!></button>'), rI = /* @__PURE__ */ X('<div class="page svelte-1jr0t84"><div class="topbar svelte-1jr0t84"><div class="topbar__left svelte-1jr0t84"><h2 class="title svelte-1jr0t84">Create new process</h2></div> <div class="topbar__actions svelte-1jr0t84"><!> <!></div></div> <div class="form svelte-1jr0t84"><!> <!> <!> <!></div> <div class="process-definition-view svelte-1jr0t84"><!> <div class="drag-and-drop-info svelte-1jr0t84"><!> <p class="svelte-1jr0t84">SELECT OR DRAG &amp; DROP PLUGINS</p></div> <!></div></div>');
function iI(n, e) {
  Ce(e, !0);
  const t = (Z) => {
    var z = oe(), M = K(z);
    {
      var $ = (Y) => {
        Vn(Y, {
          style: "background-color: #FF203A",
          variant: "raised",
          "aria-label": "Remove all plugins",
          onclick: A,
          children: (me, be) => {
            var Ne = et("REMOVE ALL");
            E(me, Ne);
          },
          $$slots: { default: !0 }
        });
      };
      re(M, (Y) => {
        o(w) && Y($);
      });
    }
    E(Z, z);
  }, r = (Z, z) => {
    let M = () => z == null ? void 0 : z().plugin;
    var $ = nI();
    $.__click = [tI, x, M];
    var Y = W($);
    au(Y, { svgStyles: "fill: #FF203A" }), ve(() => Tt($, "aria-label", `Remove ${M().name}`)), E(Z, $);
  };
  let i = /* @__PURE__ */ le(""), a = /* @__PURE__ */ le(""), s = /* @__PURE__ */ le("1.0.0"), u = /* @__PURE__ */ le(""), l = /* @__PURE__ */ le(!1), c = /* @__PURE__ */ le(Ee([{ title: "Ungrouped", plugins: [] }])), d = /* @__PURE__ */ le("");
  const v = (Z) => Z.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  xe(() => {
    o(l) || H(u, v(o(i)), !0);
  });
  function f(Z) {
    const z = /* @__PURE__ */ new Set();
    for (const M of Z ?? []) for (const $ of M.plugins ?? []) z.add($.id);
    return z;
  }
  function h(Z, z) {
    const M = f(z);
    if (!M.has(Z)) return Z;
    let $ = 2, Y = `${Z}-${$}`;
    for (; M.has(Y); )
      $ += 1, Y = `${Z}-${$}`;
    return Y;
  }
  function g(Z = "Ungrouped") {
    let z = o(c).find((M) => M.title === Z);
    return z || (z = { title: Z, plugins: [] }, H(c, [...o(c), z], !0)), z.plugins ?? (z.plugins = []), z;
  }
  function p(Z) {
    const z = [], M = /* @__PURE__ */ new Set();
    for (const $ of Z ?? []) {
      const Y = [];
      for (const me of $.plugins ?? []) {
        let be = me.id;
        M.has(be) && (be = h(be, z.concat([{ ...$, plugins: Y }]))), M.add(be), Y.push({ ...me, id: be });
      }
      z.push({ ...$, plugins: Y });
    }
    return z;
  }
  function _(Z, z = "Ungrouped") {
    const M = g(z), $ = h(Z.id, o(c));
    M.plugins.push({ ...Z, id: $ }), H(c, [...o(c)], !0);
  }
  async function A() {
    if ((await Ga(iu, {
      title: "Remove all entries?",
      message: "This action cannot be undone. You will need to manually search for and re-add each item, and rearrange them again.",
      confirmActionText: "Remove All",
      cancelActionText: "Cancel",
      confirmActionColor: "danger"
    })).type === "confirm") {
      for (const z of o(c)) (z.plugins ?? (z.plugins = [])).length = 0;
      H(c, [...o(c)], !0);
    }
  }
  function x(Z) {
    for (let z = 0; z < o(c).length; z += 1) {
      const M = o(c)[z], $ = (M.plugins ?? []).findIndex((Y) => Y.id === Z);
      if ($ !== -1) {
        M.plugins.splice($, 1), M.plugins.length === 0 && o(c).splice(z, 1), H(c, [...o(c)], !0);
        return;
      }
    }
  }
  function S(Z, z) {
    const M = Z.trim();
    if (!M || o(c).some((be) => be.title === M)) return;
    const $ = { title: M, plugins: [] };
    if (z === void 0) {
      H(c, [...o(c), $], !0);
      return;
    }
    const Y = Math.max(0, z - 1), me = [...o(c)];
    me.splice(Y, 0, $), H(c, me, !0);
  }
  function b(Z) {
    H(c, p(Z), !0);
  }
  let w = /* @__PURE__ */ de(() => o(c).flatMap((Z) => Z.plugins ?? []).length > 0), I = /* @__PURE__ */ de(() => {
    const Z = o(d).toLowerCase().trim(), z = (nl.plugins ?? []).map((M) => ({
      id: Ou(M.name),
      name: M.name,
      src: M.src,
      type: "internal"
    }));
    return Z ? z.filter((M) => M.name.toLowerCase().includes(Z)) : z;
  }), y = /* @__PURE__ */ de(() => !!o(i).trim());
  function C() {
    if (!o(y)) return;
    const Z = {
      id: o(u).trim() || v(o(i)) || "process",
      version: o(s).trim() || "1.0.0",
      name: o(i).trim(),
      description: o(a).trim(),
      pluginGroups: Es(o(c))
    }, z = lp(Z);
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
  var D = rI(), j = W(D), B = Q(W(j), 2), U = W(B);
  Vn(U, {
    variant: "outlined",
    style: "--mdc-theme-primary: var(--brand); --mdc-theme-on-primary: var(--on-brand)",
    onclick: T,
    children: (Z, z) => {
      var M = et("CANCEL");
      E(Z, M);
    },
    $$slots: { default: !0 }
  });
  var q = Q(U, 2);
  {
    let Z = /* @__PURE__ */ de(() => !o(y));
    Vn(q, {
      variant: "raised",
      style: "--mdc-theme-primary: var(--brand); --mdc-theme-on-primary: var(--on-brand)",
      onclick: C,
      get disabled() {
        return o(Z);
      },
      children: (z, M) => {
        var $ = et("SAVE");
        E(z, $);
      },
      $$slots: { default: !0 }
    });
  }
  var N = Q(j, 2), F = W(N);
  pr(F, {
    variant: "outlined",
    label: "Process name",
    get value() {
      return o(i);
    },
    set value(Z) {
      H(i, Z, !0);
    }
  });
  var k = Q(F, 2);
  pr(k, {
    variant: "outlined",
    label: "Process id",
    get value() {
      return o(u);
    },
    set value(Z) {
      H(u, Z, !0);
    },
    $$events: { input: () => H(l, !0) }
  });
  var J = Q(k, 2);
  pr(J, {
    variant: "outlined",
    label: "Version",
    get value() {
      return o(s);
    },
    set value(Z) {
      H(s, Z, !0);
    }
  });
  var ae = Q(J, 2);
  pr(ae, {
    variant: "outlined",
    label: "Description",
    get value() {
      return o(a);
    },
    set value(Z) {
      H(a, Z, !0);
    }
  });
  var L = Q(N, 2), ee = W(L);
  rl(ee, {
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
    onAddGroup: (Z, z) => S(Z, z),
    onUpdateGroups: (Z) => b(Z)
  });
  var te = Q(ee, 2), fe = W(te);
  du(fe, { svgStyles: "fill: #6B9197" });
  var ue = Q(te, 2);
  eI(ue, {
    get plugins() {
      return o(I);
    },
    onAddPlugin: (Z) => _(Z, "Ungrouped"),
    get searchTerm() {
      return o(d);
    },
    set searchTerm(Z) {
      H(d, Z, !0);
    }
  }), E(n, D), Ae();
}
It(["click"]);
var aI = /* @__PURE__ */ X("<!> <!>", 1);
function sI(n, e) {
  Ce(e, !0);
  let t = /* @__PURE__ */ le(!1);
  it(async () => {
    await sp();
  });
  function r(g) {
    ct.process || (ct.process = g);
    const p = gp(ct.process);
    Ga(Yb, {
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
    gh({ editCount: e.editCount, doc: e.doc });
  });
  function i(g) {
    ct.process = g;
  }
  function a() {
    ct.process = null;
  }
  function s() {
    mn.isEditing = !1, ct.process = null, H(t, !0);
  }
  function u() {
    mn.isEditing = !1, H(t, !1);
  }
  function l(g) {
    H(t, !1), ct.process = g;
  }
  var c = aI(), d = K(c);
  hh(d, {});
  var v = Q(d, 2);
  {
    var f = (g) => {
      iI(g, { handleCancel: u, handleSaved: l });
    }, h = (g) => {
      var p = oe(), _ = K(p);
      {
        var A = (S) => {
          Hb(S, { handleBack: a, handleStart: r });
        }, x = (S) => {
          _p(S, {
            handleView: i,
            handleStart: r,
            handleAddNew: s
          });
        };
        re(
          _,
          (S) => {
            ct.process ? S(A) : S(x, !1);
          },
          !0
        );
      }
      E(g, p);
    };
    re(v, (g) => {
      o(t) ? g(f) : g(h, !1);
    });
  }
  E(n, c), Ae();
}
const Fu = "archive-explorer", Pu = "0.0.1";
var oI = /* @__PURE__ */ X('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function lI(n, e) {
  Ce(e, !0);
  let t = m(e, "dev", 3, !1), r = m(e, "editCount", 3, 0), i = m(e, "plugins", 19, () => []);
  var a = oI(), s = K(a);
  {
    var u = (d) => {
      sI(d, {
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
    re(s, (d) => {
      (e.doc || t()) && d(u);
    });
  }
  var l = Q(s, 2), c = Q(l, 2);
  ve(() => {
    _l(l, Fu), _l(c, Pu);
  }), E(n, a), Ae();
}
var Xi;
class vI extends HTMLElement {
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
    return o(se(this, Xi));
  }
  set _props(t) {
    H(se(this, Xi), t, !0);
  }
  connectedCallback() {
    if (this.shadowRoot) return;
    this.attachShadow({ mode: "open" }), rf(lI, { target: this.shadowRoot, props: this._props });
    const t = dI();
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
    hp(r);
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
function dI() {
  const n = `${Fu}-v${Pu}-style`, e = uI(), t = document.createElement("link");
  return t.rel = "stylesheet", t.type = "text/css", t.href = e, t.id = n, t;
}
function uI() {
  const n = new URL(import.meta.url), e = n.origin, t = n.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, t, "style.css"].filter(Boolean).join("/");
}
export {
  vI as default
};
