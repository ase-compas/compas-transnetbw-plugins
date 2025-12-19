var Vu = Object.defineProperty;
var ol = (n) => {
  throw TypeError(n);
};
var zu = (n, e, t) => e in n ? Vu(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Ti = (n, e, t) => zu(n, typeof e != "symbol" ? e + "" : e, t), zs = (n, e, t) => e.has(n) || ol("Cannot " + t);
var se = (n, e, t) => (zs(n, e, "read from private field"), t ? t.call(n) : e.get(n)), Ue = (n, e, t) => e.has(n) ? ol("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), we = (n, e, t, r) => (zs(n, e, "write to private field"), r ? r.call(n, t) : e.set(n, t), t), Wt = (n, e, t) => (zs(n, e, "access private method"), t);
const St = Symbol(), Xu = "http://www.w3.org/1999/xhtml", Yu = "http://www.w3.org/2000/svg", qu = "@attach", nd = !1;
var Ra = Array.isArray, Ku = Array.prototype.indexOf, Oo = Array.from, ss = Object.defineProperty, Gr = Object.getOwnPropertyDescriptor, rd = Object.getOwnPropertyDescriptors, id = Object.prototype, Qu = Array.prototype, ys = Object.getPrototypeOf, ll = Object.isExtensible;
function Mi(n) {
  return typeof n == "function";
}
const Ie = () => {
};
function Ju(n) {
  for (var e = 0; e < n.length; e++)
    n[e]();
}
function ad() {
  var n, e, t = new Promise((r, i) => {
    n = r, e = i;
  });
  return { promise: t, resolve: n, reject: e };
}
const tn = 2, Mo = 4, Fo = 8, bi = 16, yr = 32, jr = 64, Po = 128, Ln = 256, os = 512, Xt = 1024, pn = 2048, Vr = 4096, Wn = 8192, _i = 16384, ko = 32768, yi = 65536, dl = 1 << 17, sd = 1 << 18, Ci = 1 << 19, $u = 1 << 20, so = 1 << 21, Cs = 1 << 22, ci = 1 << 23, rr = Symbol("$state"), od = Symbol("legacy props"), ec = Symbol(""), Fi = new class extends Error {
  constructor() {
    super(...arguments);
    Ti(this, "name", "StaleReactionError");
    Ti(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Go(n) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function tc() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function nc(n) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function rc() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ic(n) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function ac() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function sc(n) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function oc() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function lc() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function dc() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function uc() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function cc() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function fc() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let vc = !1;
function ld(n) {
  return n === this.v;
}
function No(n, e) {
  return n != n ? e == e : n !== e || n !== null && typeof n == "object" || typeof n == "function";
}
function dd(n) {
  return !No(n, this.v);
}
let na = !1, hc = !1;
function gc() {
  na = !0;
}
const mc = [];
function As(n, e = !1, t = !1) {
  return $a(n, /* @__PURE__ */ new Map(), "", mc, null, t);
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
    if (ys(n) === id) {
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
let et = null;
function Yi(n) {
  et = n;
}
function ye(n) {
  return (
    /** @type {T} */
    ud().get(n)
  );
}
function de(n, e) {
  return ud().set(n, e), e;
}
function Ce(n, e = !1, t) {
  et = {
    p: et,
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
    et
  ), t = e.e;
  if (t !== null) {
    e.e = null;
    for (var r of t)
      xd(r);
  }
  return n !== void 0 && (e.x = n), et = e.p, n ?? /** @type {T} */
  {};
}
function Oa() {
  return !na || et !== null && et.l === null;
}
function ud(n) {
  return et === null && Go(), et.c ?? (et.c = new Map(pc(et) || void 0));
}
function pc(n) {
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
function cd() {
  var n = ai;
  ai = [], Ju(n);
}
function Ir(n) {
  if (ai.length === 0 && !ba) {
    var e = ai;
    queueMicrotask(() => {
      e === ai && cd();
    });
  }
  ai.push(n);
}
function Ic() {
  for (; ai.length > 0; )
    cd();
}
const bc = /* @__PURE__ */ new WeakMap();
function fd(n) {
  var e = Pe;
  if (e === null)
    return Oe.f |= ci, n;
  if (e.f & ko)
    qi(n, e);
  else {
    if (!(e.f & Po))
      throw !e.parent && n instanceof Error && vd(n), n;
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
  throw n instanceof Error && vd(n), n;
}
function vd(n) {
  const e = bc.get(n);
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
      Wt(this, Mn, uo).call(this, s);
    if (se(this, si) === 0) {
      var t = Mt;
      Wt(this, Mn, co).call(this);
      var r = se(this, Vi), i = se(this, oi);
      we(this, Vi, []), we(this, oi, []), we(this, zi, []), es = this, Ye = null, Mt = t, ul(r), ul(i), es = null, (a = se(this, Ta)) == null || a.resolve();
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
      if (this.activate(), hd(), Ye !== null && Ye !== this)
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
      Jt(e, Vr), mi(e);
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
  e.f ^= Xt;
  for (var t = e.first; t !== null; ) {
    var r = t.f, i = (r & (yr | jr)) !== 0, a = i && (r & Xt) !== 0, s = a || (r & Wn) !== 0 || this.skipped_effects.has(t);
    if (!s && t.fn !== null) {
      i ? t.f ^= Xt : r & Mo ? se(this, oi).push(t) : r & Xt || (r & Cs && ((c = t.b) != null && c.is_pending()) ? se(this, ji).push(t) : Ls(t) && (t.f & bi && se(this, zi).push(t), Aa(t)));
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
          gd(s, a);
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
function _c(n) {
  var e = ba;
  ba = !0;
  try {
    for (var t; ; ) {
      if (Ic(), $n.length === 0 && (Ye == null || Ye.flush(), $n.length === 0))
        return Es = null, /** @type {T} */
        t;
      hd();
    }
  } finally {
    ba = e;
  }
}
function hd() {
  var n = Gi;
  lo = !0;
  try {
    var e = 0;
    for (vl(!0); $n.length > 0; ) {
      var t = tr.ensure();
      if (e++ > 1e3) {
        var r, i;
        yc();
      }
      t.process($n), Nr.clear();
    }
  } finally {
    lo = !1, vl(n), Es = null;
  }
}
function yc() {
  try {
    ac();
  } catch (n) {
    qi(n, Es);
  }
}
let hr = null;
function ul(n) {
  var e = n.length;
  if (e !== 0) {
    for (var t = 0; t < e; ) {
      var r = n[t++];
      if (!(r.f & (_i | Wn)) && Ls(r) && (hr = [], Aa(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Td(r) : r.fn = null), (hr == null ? void 0 : hr.length) > 0)) {
        Nr.clear();
        for (const i of hr)
          Aa(i);
        hr = [];
      }
    }
    hr = null;
  }
}
function gd(n, e) {
  if (n.reactions !== null)
    for (const t of n.reactions) {
      const r = t.f;
      r & tn ? gd(
        /** @type {Derived} */
        t,
        e
      ) : r & (Cs | bi) && md(t, e) && (Jt(t, pn), mi(
        /** @type {Effect} */
        t
      ));
    }
}
function md(n, e) {
  if (n.deps !== null) {
    for (const t of n.deps)
      if (e.includes(t) || t.f & tn && md(
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
    if (t & (jr | yr)) {
      if (!(t & Xt)) return;
      e.f ^= Xt;
    }
  }
  $n.push(e);
}
function Cc(n) {
  let e = 0, t = pi(0), r;
  return () => {
    Hc() && (o(t), Ts(() => (e === 0 && (r = zr(() => n(() => _a(t)))), e += 1, () => {
      Ir(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, _a(t));
      });
    })));
  };
}
var Ac = yi | Ci | Po;
function Ec(n, e, t) {
  new xc(n, e, t);
}
var kn, Sn, Ro, Kn, li, Qn, wn, on, Jn, Rr, di, Or, ui, Mr, bs, _s, en, Sc, wc, ns, rs, fo;
class xc {
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
    Ue(this, Rr, null);
    Ue(this, di, 0);
    Ue(this, Or, 0);
    Ue(this, ui, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    Ue(this, Mr, null);
    Ue(this, bs, () => {
      se(this, Mr) && Ki(se(this, Mr), se(this, di));
    });
    Ue(this, _s, Cc(() => (we(this, Mr, pi(se(this, di))), () => {
      we(this, Mr, null);
    })));
    we(this, Sn, e), we(this, Kn, t), we(this, li, r), this.parent = /** @type {Effect} */
    Pe.b, we(this, kn, !!se(this, Kn).pending), we(this, Qn, Ar(() => {
      Pe.b = this;
      {
        try {
          we(this, wn, Vt(() => r(se(this, Sn))));
        } catch (i) {
          this.error(i);
        }
        se(this, Or) > 0 ? Wt(this, en, rs).call(this) : we(this, kn, !1);
      }
    }, Ac));
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
    Wt(this, en, fo).call(this, e), we(this, di, se(this, di) + e), oo.add(se(this, bs));
  }
  get_effect_pending() {
    return se(this, _s).call(this), o(
      /** @type {Source<number>} */
      se(this, Mr)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var t = se(this, Kn).onerror;
    let r = se(this, Kn).failed;
    if (se(this, ui) || !t && !r)
      throw e;
    se(this, wn) && (Dt(se(this, wn)), we(this, wn, null)), se(this, on) && (Dt(se(this, on)), we(this, on, null)), se(this, Jn) && (Dt(se(this, Jn)), we(this, Jn, null));
    var i = !1, a = !1;
    const s = () => {
      if (i) {
        fc();
        return;
      }
      i = !0, a && uc(), tr.ensure(), we(this, di, 0), se(this, Jn) !== null && Zr(se(this, Jn), () => {
        we(this, Jn, null);
      }), we(this, kn, this.has_pending_snippet()), we(this, wn, Wt(this, en, ns).call(this, () => (we(this, ui, !1), Vt(() => se(this, li).call(this, se(this, Sn)))))), se(this, Or) > 0 ? Wt(this, en, rs).call(this) : we(this, kn, !1);
    };
    var u = Oe;
    try {
      un(null), a = !0, t == null || t(e, s), a = !1;
    } catch (l) {
      qi(l, se(this, Qn) && se(this, Qn).parent);
    } finally {
      un(u);
    }
    r && Ir(() => {
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
kn = new WeakMap(), Sn = new WeakMap(), Ro = new WeakMap(), Kn = new WeakMap(), li = new WeakMap(), Qn = new WeakMap(), wn = new WeakMap(), on = new WeakMap(), Jn = new WeakMap(), Rr = new WeakMap(), di = new WeakMap(), Or = new WeakMap(), ui = new WeakMap(), Mr = new WeakMap(), bs = new WeakMap(), _s = new WeakMap(), en = new WeakSet(), Sc = function() {
  try {
    we(this, wn, Vt(() => se(this, li).call(this, se(this, Sn))));
  } catch (e) {
    this.error(e);
  }
  we(this, kn, !1);
}, wc = function() {
  const e = se(this, Kn).pending;
  e && (we(this, on, Vt(() => e(se(this, Sn)))), tr.enqueue(() => {
    we(this, wn, Wt(this, en, ns).call(this, () => (tr.ensure(), Vt(() => se(this, li).call(this, se(this, Sn)))))), se(this, Or) > 0 ? Wt(this, en, rs).call(this) : (Zr(
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
  var t = Pe, r = Oe, i = et;
  ir(se(this, Qn)), un(se(this, Qn)), Yi(se(this, Qn).ctx);
  try {
    return e();
  } catch (a) {
    return fd(a), null;
  } finally {
    ir(t), un(r), Yi(i);
  }
}, rs = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    se(this, Kn).pending
  );
  se(this, wn) !== null && (we(this, Rr, document.createDocumentFragment()), Tc(se(this, wn), se(this, Rr))), se(this, on) === null && we(this, on, Vt(() => e(se(this, Sn))));
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
  we(this, Or, se(this, Or) + e), se(this, Or) === 0 && (we(this, kn, !1), se(this, on) && Zr(se(this, on), () => {
    we(this, on, null);
  }), se(this, Rr) && (se(this, Sn).before(se(this, Rr)), we(this, Rr, null)), Ir(() => {
    tr.ensure().flush();
  }));
};
function Tc(n, e) {
  for (var t = n.nodes_start, r = n.nodes_end; t !== null; ) {
    var i = t === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ma(t)
    );
    e.append(t), t = i;
  }
}
function pd(n, e, t) {
  const r = Oa() ? xs : Zo;
  if (e.length === 0) {
    t(n.map(r));
    return;
  }
  var i = Ye, a = (
    /** @type {Effect} */
    Pe
  ), s = Dc();
  Promise.all(e.map((u) => /* @__PURE__ */ Lc(u))).then((u) => {
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
function Dc() {
  var n = Pe, e = Oe, t = et, r = Ye;
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
    ctx: et,
    deps: null,
    effects: null,
    equals: ld,
    f: e,
    fn: n,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      St
    ),
    wv: 0,
    parent: t ?? Pe,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Lc(n, e) {
  let t = (
    /** @type {Effect | null} */
    Pe
  );
  t === null && tc();
  var r = (
    /** @type {Boundary} */
    t.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = pi(
    /** @type {V} */
    St
  ), s = !Oe, u = /* @__PURE__ */ new Map();
  return Wc(() => {
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
        for (const [p, b] of u) {
          if (u.delete(p), p === c) break;
          b.reject(Fi);
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
function re(n) {
  const e = /* @__PURE__ */ xs(n);
  return Rd(e), e;
}
// @__NO_SIDE_EFFECTS__
function Zo(n) {
  const e = /* @__PURE__ */ xs(n);
  return e.equals = dd, e;
}
function Id(n) {
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
function Rc(n) {
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
  ir(Rc(n));
  try {
    Id(n), e = Pd(n);
  } finally {
    ir(t);
  }
  return e;
}
function bd(n) {
  var e = Ho(n);
  if (n.equals(e) || (n.v = e, n.wv = Md()), !Ai)
    if (Mt !== null)
      Mt.set(n, n.v);
    else {
      var t = (Fr || n.f & Ln) && n.deps !== null ? Vr : Xt;
      Jt(n, t);
    }
}
const Nr = /* @__PURE__ */ new Map();
function pi(n, e) {
  var t = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: n,
    reactions: null,
    equals: ld,
    rv: 0,
    wv: 0
  };
  return t;
}
// @__NO_SIDE_EFFECTS__
function le(n, e) {
  const t = pi(n);
  return Rd(t), t;
}
// @__NO_SIDE_EFFECTS__
function _d(n, e = !1, t = !0) {
  var i;
  const r = pi(n);
  return e || (r.equals = dd), na && t && et !== null && et.l !== null && ((i = et.l).s ?? (i.s = [])).push(r), r;
}
function B(n, e, t = !1) {
  Oe !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Zn || Oe.f & dl) && Oa() && Oe.f & (tn | bi | Cs | dl) && !(Qt != null && Qt.includes(n)) && dc();
  let r = t ? Ee(e) : e;
  return Ki(n, r);
}
function Ki(n, e) {
  if (!n.equals(e)) {
    var t = n.v;
    Ai ? Nr.set(n, e) : Nr.set(n, t), n.v = e;
    var r = tr.ensure();
    r.capture(n, t), n.f & tn && (n.f & pn && Ho(
      /** @type {Derived} */
      n
    ), Jt(n, n.f & Ln ? Vr : Xt)), n.wv = Md(), yd(n, pn), Oa() && Pe !== null && Pe.f & Xt && !(Pe.f & (yr | jr)) && (xn === null ? zc([n]) : xn.push(n));
  }
  return e;
}
function _a(n) {
  B(n, n.v + 1);
}
function yd(n, e) {
  var t = n.reactions;
  if (t !== null)
    for (var r = Oa(), i = t.length, a = 0; a < i; a++) {
      var s = t[a], u = s.f;
      if (!(!r && s === Pe)) {
        var l = (u & pn) === 0;
        l && Jt(s, e), u & tn ? yd(
          /** @type {Derived} */
          s,
          Vr
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
  if (e !== id && e !== Qu)
    return n;
  var t = /* @__PURE__ */ new Map(), r = Ra(n), i = /* @__PURE__ */ le(0), a = fi, s = (u) => {
    if (fi === a)
      return u();
    var l = Oe, c = fi;
    un(null), gl(a);
    var d = u();
    return un(l), gl(c), d;
  };
  return r && t.set("length", /* @__PURE__ */ le(
    /** @type {any[]} */
    n.length
  )), new Proxy(
    /** @type {any} */
    n,
    {
      defineProperty(u, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && oc();
        var d = t.get(l);
        return d === void 0 ? d = s(() => {
          var v = /* @__PURE__ */ le(c.value);
          return t.set(l, v), v;
        }) : B(d, c.value, !0), !0;
      },
      deleteProperty(u, l) {
        var c = t.get(l);
        if (c === void 0) {
          if (l in u) {
            const d = s(() => /* @__PURE__ */ le(St));
            t.set(l, d), _a(i);
          }
        } else
          B(c, St), _a(i);
        return !0;
      },
      get(u, l, c) {
        var h;
        if (l === rr)
          return n;
        var d = t.get(l), v = l in u;
        if (d === void 0 && (!v || (h = Gr(u, l)) != null && h.writable) && (d = s(() => {
          var g = Ee(v ? u[l] : St), p = /* @__PURE__ */ le(g);
          return p;
        }), t.set(l, d)), d !== void 0) {
          var f = o(d);
          return f === St ? void 0 : f;
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
          if (v !== void 0 && f !== St)
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
        var c = t.get(l), d = c !== void 0 && c.v !== St || Reflect.has(u, l);
        if (c !== void 0 || Pe !== null && (!d || (f = Gr(u, l)) != null && f.writable)) {
          c === void 0 && (c = s(() => {
            var h = d ? Ee(u[l]) : St, g = /* @__PURE__ */ le(h);
            return g;
          }), t.set(l, c));
          var v = o(c);
          if (v === St)
            return !1;
        }
        return d;
      },
      set(u, l, c, d) {
        var E;
        var v = t.get(l), f = l in u;
        if (r && l === "length")
          for (var h = c; h < /** @type {Source<number>} */
          v.v; h += 1) {
            var g = t.get(h + "");
            g !== void 0 ? B(g, St) : h in u && (g = s(() => /* @__PURE__ */ le(St)), t.set(h + "", g));
          }
        if (v === void 0)
          (!f || (E = Gr(u, l)) != null && E.writable) && (v = s(() => /* @__PURE__ */ le(void 0)), B(v, Ee(c)), t.set(l, v));
        else {
          f = v.v !== St;
          var p = s(() => Ee(c));
          B(v, p);
        }
        var b = Reflect.getOwnPropertyDescriptor(u, l);
        if (b != null && b.set && b.set.call(d, c), !f) {
          if (r && typeof l == "string") {
            var y = (
              /** @type {Source<number>} */
              t.get("length")
            ), x = Number(l);
            Number.isInteger(x) && x >= y.v && B(y, x + 1);
          }
          _a(i);
        }
        return !0;
      },
      ownKeys(u) {
        o(i);
        var l = Reflect.ownKeys(u).filter((v) => {
          var f = t.get(v);
          return f === void 0 || f.v !== St;
        });
        for (var [c, d] of t)
          d.v !== St && !(c in u) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        lc();
      }
    }
  );
}
function cl(n) {
  try {
    if (n !== null && typeof n == "object" && rr in n)
      return n[rr];
  } catch {
  }
  return n;
}
function Oc(n, e) {
  return Object.is(cl(n), cl(e));
}
var ls, Bo, Cd, Ad, Ed;
function Mc() {
  if (ls === void 0) {
    ls = window, Bo = document, Cd = /Firefox/.test(navigator.userAgent);
    var n = Element.prototype, e = Node.prototype, t = Text.prototype;
    Ad = Gr(e, "firstChild").get, Ed = Gr(e, "nextSibling").get, ll(n) && (n.__click = void 0, n.__className = void 0, n.__attributes = null, n.__style = void 0, n.__e = void 0), ll(t) && (t.__t = void 0);
  }
}
function Cr(n = "") {
  return document.createTextNode(n);
}
// @__NO_SIDE_EFFECTS__
function Qi(n) {
  return Ad.call(n);
}
// @__NO_SIDE_EFFECTS__
function Ma(n) {
  return Ed.call(n);
}
function N(n, e) {
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
function q(n, e = 1, t = !1) {
  let r = n;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ma(r);
  return r;
}
function Fc(n) {
  n.textContent = "";
}
function Uo() {
  return !1;
}
function Pc(n, e) {
  if (e) {
    const t = document.body;
    n.autofocus = !0, Ir(() => {
      document.activeElement === t && n.focus();
    });
  }
}
let fl = !1;
function kc() {
  fl || (fl = !0, document.addEventListener(
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
function Gc(n, e, t, r = t) {
  n.addEventListener(e, () => Ss(t));
  const i = n.__on_r;
  i ? n.__on_r = () => {
    i(), r(!0);
  } : n.__on_r = () => r(!0), kc();
}
function Nc(n) {
  Pe === null && Oe === null && ic(), Oe !== null && Oe.f & Ln && Pe === null && rc(), Ai && nc();
}
function Zc(n, e) {
  var t = e.last;
  t === null ? e.last = e.first = n : (t.next = n, n.prev = t, e.last = n);
}
function ar(n, e, t, r = !0) {
  var i = Pe;
  i !== null && i.f & Wn && (n |= Wn);
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
      Aa(a), a.f |= ko;
    } catch (l) {
      throw Dt(a), l;
    }
  else e !== null && mi(a);
  if (r) {
    var s = a;
    if (t && s.deps === null && s.teardown === null && s.nodes_start === null && s.first === s.last && // either `null`, or a singular child
    !(s.f & Ci) && (s = s.first), s !== null && (s.parent = i, i !== null && Zc(s, i), Oe !== null && Oe.f & tn && !(n & jr))) {
      var u = (
        /** @type {Derived} */
        Oe
      );
      (u.effects ?? (u.effects = [])).push(s);
    }
  }
  return a;
}
function Hc() {
  return Oe !== null && !Zn;
}
function ws(n) {
  const e = ar(Fo, null, !1);
  return Jt(e, Xt), e.teardown = n, e;
}
function xe(n) {
  Nc();
  var e = (
    /** @type {Effect} */
    Pe.f
  ), t = !Oe && (e & yr) !== 0 && (e & ko) === 0;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      et
    );
    (r.e ?? (r.e = [])).push(n);
  } else
    return xd(n);
}
function xd(n) {
  return ar(Mo | $u, n, !1);
}
function Bc(n) {
  tr.ensure();
  const e = ar(jr | Ci, n, !0);
  return () => {
    Dt(e);
  };
}
function Uc(n) {
  tr.ensure();
  const e = ar(jr | Ci, n, !0);
  return (t = {}) => new Promise((r) => {
    t.outro ? Zr(e, () => {
      Dt(e), r(void 0);
    }) : (Dt(e), r(void 0));
  });
}
function Fa(n) {
  return ar(Mo, n, !1);
}
function Wc(n) {
  return ar(Cs | Ci, n, !0);
}
function Ts(n, e = 0) {
  return ar(Fo | e, n, !0);
}
function ue(n, e = [], t = []) {
  pd(e, t, (r) => {
    ar(Fo, () => n(...r.map(o)), !0);
  });
}
function Ar(n, e = 0) {
  var t = ar(bi | e, n, !0);
  return t;
}
function Vt(n, e = !0) {
  return ar(yr | Ci, n, !0, e);
}
function Sd(n) {
  var e = n.teardown;
  if (e !== null) {
    const t = Ai, r = Oe;
    hl(!0), un(null);
    try {
      e.call(null);
    } finally {
      hl(t), un(r);
    }
  }
}
function wd(n, e = !1) {
  var t = n.first;
  for (n.first = n.last = null; t !== null; ) {
    const i = t.ac;
    i !== null && Ss(() => {
      i.abort(Fi);
    });
    var r = t.next;
    t.f & jr ? t.parent = null : Dt(t, e), t = r;
  }
}
function jc(n) {
  for (var e = n.first; e !== null; ) {
    var t = e.next;
    e.f & yr || Dt(e), e = t;
  }
}
function Dt(n, e = !0) {
  var t = !1;
  (e || n.f & sd) && n.nodes_start !== null && n.nodes_end !== null && (Vc(
    n.nodes_start,
    /** @type {TemplateNode} */
    n.nodes_end
  ), t = !0), wd(n, e && !t), ds(n, 0), Jt(n, _i);
  var r = n.transitions;
  if (r !== null)
    for (const a of r)
      a.stop();
  Sd(n);
  var i = n.parent;
  i !== null && i.first !== null && Td(n), n.next = n.prev = n.teardown = n.ctx = n.deps = n.fn = n.nodes_start = n.nodes_end = n.ac = null;
}
function Vc(n, e) {
  for (; n !== null; ) {
    var t = n === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ma(n)
    );
    n.remove(), n = t;
  }
}
function Td(n) {
  var e = n.parent, t = n.prev, r = n.next;
  t !== null && (t.next = r), r !== null && (r.prev = t), e !== null && (e.first === n && (e.first = r), e.last === n && (e.last = t));
}
function Zr(n, e) {
  var t = [];
  Wo(n, t, !0), Dd(t, () => {
    Dt(n), e && e();
  });
}
function Dd(n, e) {
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
  Ld(n, !0);
}
function Ld(n, e) {
  if (n.f & Wn) {
    n.f ^= Wn, n.f & Xt || (Jt(n, pn), mi(n));
    for (var t = n.first; t !== null; ) {
      var r = t.next, i = (t.f & yi) !== 0 || (t.f & yr) !== 0;
      Ld(t, i ? e : !1), t = r;
    }
    if (n.transitions !== null)
      for (const a of n.transitions)
        (a.is_global || e) && a.in();
  }
}
let Gi = !1;
function vl(n) {
  Gi = n;
}
let Ai = !1;
function hl(n) {
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
function Rd(n) {
  Oe !== null && (Qt === null ? Qt = [n] : Qt.push(n));
}
let Kt = null, hn = 0, xn = null;
function zc(n) {
  xn = n;
}
let Od = 1, Ca = 0, fi = Ca;
function gl(n) {
  fi = n;
}
let Fr = !1;
function Md() {
  return ++Od;
}
function Ls(n) {
  var v;
  var e = n.f;
  if (e & pn)
    return !0;
  if (e & Vr) {
    var t = n.deps, r = (e & Ln) !== 0;
    if (t !== null) {
      var i, a, s = (e & os) !== 0, u = r && Pe !== null && !Fr, l = t.length;
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
        ) && bd(
          /** @type {Derived} */
          a
        ), a.wv > n.wv)
          return !0;
    }
    (!r || Pe !== null && !Fr) && Jt(n, Xt);
  }
  return !1;
}
function Fd(n, e, t = !0) {
  var r = n.reactions;
  if (r !== null && !(Qt != null && Qt.includes(n)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a.f & tn ? Fd(
        /** @type {Derived} */
        a,
        e,
        !1
      ) : e === a && (t ? Jt(a, pn) : a.f & Xt && Jt(a, Vr), mi(
        /** @type {Effect} */
        a
      ));
    }
}
function Pd(n) {
  var p;
  var e = Kt, t = hn, r = xn, i = Oe, a = Fr, s = Qt, u = et, l = Zn, c = fi, d = n.f;
  Kt = /** @type {null | Value[]} */
  null, hn = 0, xn = null, Fr = (d & Ln) !== 0 && (Zn || !Gi || Oe === null), Oe = d & (yr | jr) ? null : n, Qt = null, Yi(n.ctx), Zn = !1, fi = ++Ca, n.ac !== null && (Ss(() => {
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
      if (!Fr || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      d & tn && /** @type {import('#client').Derived} */
      n.reactions !== null)
        for (g = hn; g < h.length; g++)
          ((p = h[g]).reactions ?? (p.reactions = [])).push(n);
    } else h !== null && hn < h.length && (ds(n, hn), h.length = hn);
    if (Oa() && xn !== null && !Zn && h !== null && !(n.f & (tn | Vr | pn)))
      for (g = 0; g < /** @type {Source[]} */
      xn.length; g++)
        Fd(
          xn[g],
          /** @type {Effect} */
          n
        );
    return i !== null && i !== n && (Ca++, xn !== null && (r === null ? r = xn : r.push(.../** @type {Source[]} */
    xn))), n.f & ci && (n.f ^= ci), f;
  } catch (b) {
    return fd(b);
  } finally {
    n.f ^= so, Kt = e, hn = t, xn = r, Oe = i, Fr = a, Qt = s, Yi(u), Zn = l, fi = c;
  }
}
function Xc(n, e) {
  let t = e.reactions;
  if (t !== null) {
    var r = Ku.call(t, n);
    if (r !== -1) {
      var i = t.length - 1;
      i === 0 ? t = e.reactions = null : (t[r] = t[i], t.pop());
    }
  }
  t === null && e.f & tn && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Kt === null || !Kt.includes(e)) && (Jt(e, Vr), e.f & (Ln | os) || (e.f ^= os), Id(
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
      Xc(n, t[r]);
}
function Aa(n) {
  var e = n.f;
  if (!(e & _i)) {
    Jt(n, Xt);
    var t = Pe, r = Gi;
    Pe = n, Gi = !0;
    try {
      e & bi ? jc(n) : wd(n), Sd(n);
      var i = Pd(n);
      n.teardown = typeof i == "function" ? i : null, n.wv = Od;
      var a;
      nd && hc && n.f & pn && n.deps;
    } finally {
      Gi = r, Pe = t;
    }
  }
}
async function kd() {
  await Promise.resolve(), _c();
}
function o(n) {
  var e = n.f, t = (e & tn) !== 0;
  if (Oe !== null && !Zn) {
    var r = Pe !== null && (Pe.f & _i) !== 0;
    if (!r && !(Qt != null && Qt.includes(n))) {
      var i = Oe.deps;
      if (Oe.f & so)
        n.rv < Ca && (n.rv = Ca, Kt === null && i !== null && i[hn] === n ? hn++ : Kt === null ? Kt = [n] : (!Fr || !Kt.includes(n)) && Kt.push(n));
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
    if (Nr.has(n))
      return Nr.get(n);
    if (t) {
      s = /** @type {Derived} */
      n;
      var l = s.v;
      return (!(s.f & Xt) && s.reactions !== null || Gd(s)) && (l = Ho(s)), Nr.set(s, l), l;
    }
  } else if (t) {
    if (s = /** @type {Derived} */
    n, Mt != null && Mt.has(s))
      return Mt.get(s);
    Ls(s) && bd(s);
  }
  if (Mt != null && Mt.has(n))
    return Mt.get(n);
  if (n.f & ci)
    throw n.v;
  return n.v;
}
function Gd(n) {
  if (n.v === St) return !0;
  if (n.deps === null) return !1;
  for (const e of n.deps)
    if (Nr.has(e) || e.f & tn && Gd(
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
const Yc = -7169;
function Jt(n, e) {
  n.f = n.f & Yc | e;
}
function qc(n) {
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
const Nd = /* @__PURE__ */ new Set(), go = /* @__PURE__ */ new Set();
function jo(n, e, t, r = {}) {
  function i(a) {
    if (r.capture || pa.call(e, a), !a.cancelBubble)
      return Ss(() => t == null ? void 0 : t.call(this, a));
  }
  return n.startsWith("pointer") || n.startsWith("touch") || n === "wheel" ? Ir(() => {
    e.addEventListener(n, i, r);
  }) : e.addEventListener(n, i, r), i;
}
function Kc(n, e, t, r = {}) {
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
  e instanceof HTMLMediaElement) && ws(() => {
    e.removeEventListener(n, s, a);
  });
}
function pt(n) {
  for (var e = 0; e < n.length; e++)
    Nd.add(n[e]);
  for (var t of go)
    t(n);
}
let ml = null;
function pa(n) {
  var x;
  var e = this, t = (
    /** @type {Node} */
    e.ownerDocument
  ), r = n.type, i = ((x = n.composedPath) == null ? void 0 : x.call(n)) || [], a = (
    /** @type {null | Element} */
    i[0] || n.target
  );
  ml = n;
  var s = 0, u = ml === n && n.__root;
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
              var [b, ...y] = p;
              b.apply(a, [n, ...y]);
            } else
              p.call(a, n);
        } catch (E) {
          f ? h.push(E) : f = E;
        }
        if (n.cancelBubble || g === e || g === null)
          break;
        a = g;
      }
      if (f) {
        for (let E of h)
          queueMicrotask(() => {
            throw E;
          });
        throw f;
      }
    } finally {
      n.__root = e, delete n.currentTarget, un(d), ir(v);
    }
  }
}
function Qc(n) {
  var e;
  e = document.head.appendChild(Cr());
  try {
    Ar(() => n(e), sd);
  } finally {
  }
}
function Zd(n) {
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
    i === void 0 && (i = Zd(a ? n : "<!>" + n), t || (i = /** @type {Node} */
    /* @__PURE__ */ Qi(i)));
    var s = (
      /** @type {TemplateNode} */
      r || Cd ? document.importNode(i, !0) : i.cloneNode(!0)
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
function Jc(n, e, t = "svg") {
  var r = !n.startsWith("<!>"), i = `<${t}>${r ? n : "<!>" + n}</${t}>`, a;
  return () => {
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        Zd(i)
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
function st(n, e) {
  return /* @__PURE__ */ Jc(n, e, "svg");
}
function rt(n = "") {
  {
    var e = Cr(n + "");
    return Ji(e, e), e;
  }
}
function oe() {
  var n = document.createDocumentFragment(), e = document.createComment(""), t = Cr();
  return n.append(e, t), Ji(e, t), n;
}
function A(n, e) {
  n !== null && n.before(
    /** @type {Node} */
    e
  );
}
function $c(n) {
  return n.endsWith("capture") && n !== "gotpointercapture" && n !== "lostpointercapture";
}
const ef = [
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
function tf(n) {
  return ef.includes(n);
}
const nf = {
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
function rf(n) {
  return n = n.toLowerCase(), nf[n] ?? n;
}
const af = ["touchstart", "touchmove"];
function sf(n) {
  return af.includes(n);
}
function Me(n, e) {
  var t = e == null ? "" : typeof e == "object" ? e + "" : e;
  t !== (n.__t ?? (n.__t = n.nodeValue)) && (n.__t = t, n.nodeValue = t + "");
}
function of(n, e) {
  return lf(n, e);
}
const Di = /* @__PURE__ */ new Map();
function lf(n, { target: e, anchor: t, props: r = {}, events: i, context: a, intro: s = !0 }) {
  Mc();
  var u = /* @__PURE__ */ new Set(), l = (v) => {
    for (var f = 0; f < v.length; f++) {
      var h = v[f];
      if (!u.has(h)) {
        u.add(h);
        var g = sf(h);
        e.addEventListener(h, pa, { passive: g });
        var p = Di.get(h);
        p === void 0 ? (document.addEventListener(h, pa, { passive: g }), Di.set(h, 1)) : Di.set(h, p + 1);
      }
    }
  };
  l(Oo(Nd)), go.add(l);
  var c = void 0, d = Uc(() => {
    var v = t ?? e.appendChild(Cr());
    return Ec(
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
            et
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
  return df.set(c, d), c;
}
let df = /* @__PURE__ */ new WeakMap();
function _e(n, e, ...t) {
  var r = n, i = Ie, a;
  Ar(() => {
    i !== (i = e()) && (a && (Dt(a), a = null), a = Vt(() => (
      /** @type {SnippetFn} */
      i(r, ...t)
    )));
  }, yi);
}
function it(n) {
  et === null && Go(), na && et.l !== null ? uf(et).m.push(n) : xe(() => {
    const e = zr(n);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Fn(n) {
  et === null && Go(), it(() => () => zr(n));
}
function uf(n) {
  var e = (
    /** @type {ComponentContextLegacy} */
    n.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
function te(n, e, t = !1) {
  var r = n, i = null, a = null, s = St, u = t ? yi : 0, l = !1;
  const c = (h, g = !0) => {
    l = !0, f(g, h);
  };
  var d = null;
  function v() {
    d !== null && (d.lastChild.remove(), r.before(d), d = null);
    var h = s ? i : a, g = s ? a : i;
    h && Ds(h), g && Zr(g, () => {
      s ? a = null : i = null;
    });
  }
  const f = (h, g) => {
    if (s !== (s = h)) {
      var p = Uo(), b = r;
      if (p && (d = document.createDocumentFragment(), d.append(b = Cr())), s ? i ?? (i = g && Vt(() => g(b))) : a ?? (a = g && Vt(() => g(b))), p) {
        var y = (
          /** @type {Batch} */
          Ye
        ), x = s ? i : a, E = s ? a : i;
        x && y.skipped_effects.delete(x), E && y.skipped_effects.add(E), y.add_callback(v);
      } else
        v();
    }
  };
  Ar(() => {
    l = !1, e(c), l || f(null, null);
  }, u);
}
let vi = null;
function pl(n) {
  vi = n;
}
function br(n, e) {
  return e;
}
function cf(n, e, t) {
  for (var r = n.items, i = [], a = e.length, s = 0; s < a; s++)
    Wo(e[s].e, i, !0);
  var u = a > 0 && i.length === 0 && t !== null;
  if (u) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      t.parentNode
    );
    Fc(l), l.append(
      /** @type {Element} */
      t
    ), r.clear(), Xn(n, e[0].prev, e[a - 1].next);
  }
  Dd(i, () => {
    for (var c = 0; c < a; c++) {
      var d = e[c];
      u || (r.delete(d.k), Xn(n, d.prev, d.next)), Dt(d.e, !u);
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
  var d = null, v = !1, f = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ Zo(() => {
    var y = t();
    return Ra(y) ? y : y == null ? [] : Oo(y);
  }), g, p;
  function b() {
    ff(
      p,
      g,
      u,
      f,
      s,
      i,
      e,
      r,
      t
    ), a !== null && (g.length === 0 ? d ? Ds(d) : d = Vt(() => a(s)) : d !== null && Zr(d, () => {
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
      var x, E, C, w;
      if (Uo()) {
        var I = /* @__PURE__ */ new Set(), S = (
          /** @type {Batch} */
          Ye
        );
        for (E = 0; E < y; E += 1) {
          C = g[E], w = r(C, E);
          var _ = u.items.get(w) ?? f.get(w);
          _ ? e & 3 && Hd(_, C, E, e) : (x = Bd(
            null,
            u,
            null,
            null,
            C,
            w,
            E,
            i,
            e,
            t,
            !0
          ), f.set(w, x)), I.add(w);
        }
        for (const [T, R] of u.items)
          I.has(T) || S.skipped_effects.add(R.e);
        S.add_callback(b);
      } else
        b();
      o(h);
    }
  });
}
function ff(n, e, t, r, i, a, s, u, l) {
  var ce, k, J, ne;
  var c = (s & 8) !== 0, d = (s & 3) !== 0, v = e.length, f = t.items, h = t.first, g = h, p, b = null, y, x = [], E = [], C, w, I, S;
  if (c)
    for (S = 0; S < v; S += 1)
      C = e[S], w = u(C, S), I = f.get(w), I !== void 0 && ((ce = I.a) == null || ce.measure(), (y ?? (y = /* @__PURE__ */ new Set())).add(I));
  for (S = 0; S < v; S += 1) {
    if (C = e[S], w = u(C, S), I = f.get(w), I === void 0) {
      var _ = r.get(w);
      if (_ !== void 0) {
        r.delete(w), f.set(w, _);
        var T = b ? b.next : g;
        Xn(t, b, _), Xn(t, _, T), Xs(_, T, i), b = _;
      } else {
        var R = g ? (
          /** @type {TemplateNode} */
          g.e.nodes_start
        ) : i;
        b = Bd(
          R,
          t,
          b,
          b === null ? t.first : b.next,
          C,
          w,
          S,
          a,
          s,
          l
        );
      }
      f.set(w, b), x = [], E = [], g = b.next;
      continue;
    }
    if (d && Hd(I, C, S, s), I.e.f & Wn && (Ds(I.e), c && ((k = I.a) == null || k.unfix(), (y ?? (y = /* @__PURE__ */ new Set())).delete(I))), I !== g) {
      if (p !== void 0 && p.has(I)) {
        if (x.length < E.length) {
          var D = E[0], L;
          b = D.prev;
          var P = x[0], ie = x[x.length - 1];
          for (L = 0; L < x.length; L += 1)
            Xs(x[L], D, i);
          for (L = 0; L < E.length; L += 1)
            p.delete(E[L]);
          Xn(t, P.prev, ie.next), Xn(t, b, P), Xn(t, ie, D), g = D, b = ie, S -= 1, x = [], E = [];
        } else
          p.delete(I), Xs(I, g, i), Xn(t, I.prev, I.next), Xn(t, I, b === null ? t.first : b.next), Xn(t, b, I), b = I;
        continue;
      }
      for (x = [], E = []; g !== null && g.k !== w; )
        g.e.f & Wn || (p ?? (p = /* @__PURE__ */ new Set())).add(g), E.push(g), g = g.next;
      if (g === null)
        continue;
      I = g;
    }
    x.push(I), b = I, g = I.next;
  }
  if (g !== null || p !== void 0) {
    for (var j = p === void 0 ? [] : Oo(p); g !== null; )
      g.e.f & Wn || j.push(g), g = g.next;
    var H = j.length;
    if (H > 0) {
      var U = s & 4 && v === 0 ? i : null;
      if (c) {
        for (S = 0; S < H; S += 1)
          (J = j[S].a) == null || J.measure();
        for (S = 0; S < H; S += 1)
          (ne = j[S].a) == null || ne.fix();
      }
      cf(t, j, U);
    }
  }
  c && Ir(() => {
    var be;
    if (y !== void 0)
      for (I of y)
        (be = I.a) == null || be.apply();
  }), n.first = t.first && t.first.e, n.last = b && b.e;
  for (var ee of r.values())
    Dt(ee.e);
  r.clear();
}
function Hd(n, e, t, r) {
  r & 1 && Ki(n.v, e), r & 2 ? Ki(
    /** @type {Value<number>} */
    n.i,
    t
  ) : n.i = t;
}
function Bd(n, e, t, r, i, a, s, u, l, c, d) {
  var v = vi, f = (l & 1) !== 0, h = (l & 16) === 0, g = f ? h ? /* @__PURE__ */ _d(i, !1, !1) : pi(i) : i, p = l & 2 ? pi(s) : s, b = {
    i: p,
    v: g,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: t,
    next: r
  };
  vi = b;
  try {
    if (n === null) {
      var y = document.createDocumentFragment();
      y.append(n = Cr());
    }
    return b.e = Vt(() => u(
      /** @type {Node} */
      n,
      g,
      p,
      c
    ), vc), b.e.prev = t && t.e, b.e.next = r && r.e, t === null ? d || (e.first = b) : (t.next = b, t.e.next = b.e), r !== null && (r.prev = b, r.e.prev = b.e), b;
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
function Pa(n, e, t) {
  var r = n, i, a, s = null, u = null;
  function l() {
    a && (Zr(a), a = null), s && (s.lastChild.remove(), r.before(s), s = null), a = u, u = null;
  }
  Ar(() => {
    if (i !== (i = e())) {
      var c = Uo();
      if (i) {
        var d = r;
        c && (s = document.createDocumentFragment(), s.append(d = Cr()), a && Ye.skipped_effects.add(a)), u = Vt(() => t(d, i));
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
  Ar(() => {
    const f = e() || null;
    var h = f === "svg" ? Yu : null;
    if (f !== s) {
      var g = vi;
      pl(v), d && (f === null ? Zr(d, () => {
        d = null, u = null;
      }) : f === u ? Ds(d) : Dt(d)), f && f !== u && (d = Vt(() => {
        if (l = h ? document.createElementNS(h, f) : document.createElement(f), Ji(l, l), r) {
          var p = (
            /** @type {TemplateNode} */
            l.appendChild(Cr())
          );
          r(l, p);
        }
        Pe.nodes_end = l, c.before(l);
      })), s = f, s && (u = s), pl(g);
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
        qc(s), i && No(a, s) && (a = s, r.update(s));
      }), i = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function vf(n, e) {
  var t = void 0, r;
  Ar(() => {
    t !== (t = e()) && (r && (Dt(r), r = null), t && (r = Vt(() => {
      Fa(() => (
        /** @type {(node: Element) => void} */
        t(n)
      ));
    })));
  });
}
function Ud(n) {
  var e, t, r = "";
  if (typeof n == "string" || typeof n == "number") r += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var i = n.length;
    for (e = 0; e < i; e++) n[e] && (t = Ud(n[e])) && (r && (r += " "), r += t);
  } else for (t in n) n[t] && (r && (r += " "), r += t);
  return r;
}
function hf() {
  for (var n, e, t = 0, r = "", i = arguments.length; t < i; t++) (n = arguments[t]) && (e = Ud(n)) && (r && (r += " "), r += e);
  return r;
}
function Wd(n) {
  return typeof n == "object" ? hf(n) : n ?? "";
}
const Il = [...` 	
\r\f \v\uFEFF`];
function gf(n, e, t) {
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
function Ys(n) {
  return n[0] !== "-" || n[1] !== "-" ? n.toLowerCase() : n;
}
function mf(n, e) {
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
    return r && (t += bl(r)), i && (t += bl(i, !0)), t = t.trim(), t === "" ? null : t;
  }
  return n == null ? null : String(n);
}
function _r(n, e, t, r, i, a) {
  var s = n.__className;
  if (s !== t || s === void 0) {
    var u = gf(t, r, a);
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
function qe(n, e, t, r) {
  var i = n.__style;
  if (i !== e) {
    var a = mf(e, r);
    a == null ? n.removeAttribute("style") : n.style.cssText = a, n.__style = e;
  } else r && (Array.isArray(r) ? (qs(n, t == null ? void 0 : t[0], r[0]), qs(n, t == null ? void 0 : t[1], r[1], "important")) : qs(n, t, r));
  return r;
}
function po(n, e, t = !1) {
  if (n.multiple) {
    if (e == null)
      return;
    if (!Ra(e))
      return cc();
    for (var r of n.options)
      r.selected = e.includes(_l(r));
    return;
  }
  for (r of n.options) {
    var i = _l(r);
    if (Oc(i, e)) {
      r.selected = !0;
      return;
    }
  }
  (!t || e !== void 0) && (n.selectedIndex = -1);
}
function pf(n) {
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
function _l(n) {
  return "__value" in n ? n.__value : n.value;
}
const ca = Symbol("class"), fa = Symbol("style"), jd = Symbol("is custom element"), Vd = Symbol("is html");
function yl(n, e) {
  var t = Vo(n);
  t.value === (t.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  n.value === e && (e !== 0 || n.nodeName !== "PROGRESS") || (n.value = e ?? "");
}
function If(n, e) {
  e ? n.hasAttribute("selected") || n.setAttribute("selected", "") : n.removeAttribute("selected");
}
function mt(n, e, t, r) {
  var i = Vo(n);
  i[e] !== (i[e] = t) && (e === "loading" && (n[ec] = t), t == null ? n.removeAttribute(e) : typeof t != "string" && zd(n).includes(e) ? n[e] = t : n.setAttribute(e, t));
}
function bf(n, e, t, r, i = !1, a = !1) {
  var s = Vo(n), u = s[jd], l = !s[Vd], c = e || {}, d = n.tagName === "OPTION";
  for (var v in e)
    v in t || (t[v] = null);
  t.class ? t.class = Wd(t.class) : t[ca] && (t.class = null), t[fa] && (t.style ?? (t.style = null));
  var f = zd(n);
  for (const E in t) {
    let C = t[E];
    if (d && E === "value" && C == null) {
      n.value = n.__value = "", c[E] = C;
      continue;
    }
    if (E === "class") {
      var h = n.namespaceURI === "http://www.w3.org/1999/xhtml";
      _r(n, h, C, r, e == null ? void 0 : e[ca], t[ca]), c[E] = C, c[ca] = t[ca];
      continue;
    }
    if (E === "style") {
      qe(n, C, e == null ? void 0 : e[fa], t[fa]), c[E] = C, c[fa] = t[fa];
      continue;
    }
    var g = c[E];
    if (!(C === g && !(C === void 0 && n.hasAttribute(E)))) {
      c[E] = C;
      var p = E[0] + E[1];
      if (p !== "$$")
        if (p === "on") {
          const w = {}, I = "$$" + E;
          let S = E.slice(2);
          var b = tf(S);
          if ($c(S) && (S = S.slice(0, -7), w.capture = !0), !b && g) {
            if (C != null) continue;
            n.removeEventListener(S, c[I], w), c[I] = null;
          }
          if (C != null)
            if (b)
              n[`__${S}`] = C, pt([S]);
            else {
              let _ = function(T) {
                c[E].call(this, T);
              };
              c[I] = jo(S, n, _, w);
            }
          else b && (n[`__${S}`] = void 0);
        } else if (E === "style")
          mt(n, E, C);
        else if (E === "autofocus")
          Pc(
            /** @type {HTMLElement} */
            n,
            !!C
          );
        else if (!u && (E === "__value" || E === "value" && C != null))
          n.value = n.__value = C;
        else if (E === "selected" && d)
          If(
            /** @type {HTMLOptionElement} */
            n,
            C
          );
        else {
          var y = E;
          l || (y = rf(y));
          var x = y === "defaultValue" || y === "defaultChecked";
          if (C == null && !u && !x)
            if (s[E] = null, y === "value" || y === "checked") {
              let w = (
                /** @type {HTMLInputElement} */
                n
              );
              const I = e === void 0;
              if (y === "value") {
                let S = w.defaultValue;
                w.removeAttribute(y), w.defaultValue = S, w.value = w.__value = I ? S : null;
              } else {
                let S = w.defaultChecked;
                w.removeAttribute(y), w.defaultChecked = S, w.checked = I ? S : !1;
              }
            } else
              n.removeAttribute(E);
          else x || f.includes(y) && (u || typeof C != "string") ? (n[y] = C, y in s && (s[y] = St)) : typeof C != "function" && mt(n, y, C);
        }
    }
  }
  return c;
}
function He(n, e, t = [], r = [], i, a = !1, s = !1) {
  pd(t, r, (u) => {
    var l = void 0, c = {}, d = n.nodeName === "SELECT", v = !1;
    if (Ar(() => {
      var h = e(...u.map(o)), g = bf(
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
      for (let b of Object.getOwnPropertySymbols(c))
        h[b] || Dt(c[b]);
      for (let b of Object.getOwnPropertySymbols(h)) {
        var p = h[b];
        b.description === qu && (!l || p !== l[b]) && (c[b] && Dt(c[b]), c[b] = Vt(() => vf(n, () => p))), g[b] = p;
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
        ), pf(f);
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
      [jd]: n.nodeName.includes("-"),
      [Vd]: n.namespaceURI === Xu
    })
  );
}
var Cl = /* @__PURE__ */ new Map();
function zd(n) {
  var e = n.getAttribute("is") || n.nodeName, t = Cl.get(e);
  if (t) return t;
  Cl.set(e, t = []);
  for (var r, i = n, a = Element.prototype; a !== i; ) {
    r = rd(i);
    for (var s in r)
      r[s].set && t.push(s);
    i = ys(i);
  }
  return t;
}
const _f = () => performance.now(), gr = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (n) => requestAnimationFrame(n)
  ),
  now: () => _f(),
  tasks: /* @__PURE__ */ new Set()
};
function Xd() {
  const n = gr.now();
  gr.tasks.forEach((e) => {
    e.c(n) || (gr.tasks.delete(e), e.f());
  }), gr.tasks.size !== 0 && gr.tick(Xd);
}
function yf(n) {
  let e;
  return gr.tasks.size === 0 && gr.tick(Xd), {
    promise: new Promise((t) => {
      gr.tasks.add(e = { c: n, f: t });
    }),
    abort() {
      gr.tasks.delete(e);
    }
  };
}
function Cf(n) {
  if (n === "float") return "cssFloat";
  if (n === "offset") return "cssOffset";
  if (n.startsWith("--")) return n;
  const e = n.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (t) => t[0].toUpperCase() + t.slice(1)
  ).join("");
}
function Al(n) {
  const e = {}, t = n.split(";");
  for (const r of t) {
    const [i, a] = r.split(":");
    if (!i || a === void 0) break;
    const s = Cf(i.trim());
    e[s] = a.trim();
  }
  return e;
}
const Af = (n) => n;
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
        s = Yd(this.element, l, void 0, 1, () => {
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
function Yd(n, e, t, r, i) {
  if (Mi(e)) {
    var a, s = !1;
    return Ir(() => {
      if (!s) {
        var p = e({ direction: "in" });
        a = Yd(n, p, t, r, i);
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
  const { delay: u = 0, css: l, tick: c, easing: d = Af } = e;
  var v = [];
  if (c && c(0, 1), l) {
    var f = Al(l(0, 1));
    v.push(f, f);
  }
  var h = () => 1 - r, g = n.animate(v, { duration: u, fill: "forwards" });
  return g.onfinish = () => {
    g.cancel();
    var p = 1 - r, b = r - p, y = (
      /** @type {number} */
      e.duration * Math.abs(b)
    ), x = [];
    if (y > 0) {
      var E = !1;
      if (l)
        for (var C = Math.ceil(y / 16.666666666666668), w = 0; w <= C; w += 1) {
          var I = p + b * d(w / C), S = Al(l(I, 1 - I));
          x.push(S), E || (E = S.overflow === "hidden");
        }
      E && (n.style.overflow = "hidden"), h = () => {
        var _ = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          g.currentTime
        );
        return p + b * d(_ / y);
      }, c && yf(() => {
        if (g.playState !== "running") return !1;
        var _ = h();
        return c(_, 1 - _), !0;
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
function Ef(n, e, t = e) {
  var r = /* @__PURE__ */ new WeakSet();
  Gc(n, "input", async (i) => {
    var a = i ? n.defaultValue : n.value;
    if (a = Ks(n) ? Qs(a) : a, t(a), Ye !== null && r.add(Ye), await kd(), a !== (a = e())) {
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
function El(n, e) {
  return n === e || (n == null ? void 0 : n[rr]) === e;
}
function Se(n = {}, e, t, r) {
  return Fa(() => {
    var i, a;
    return Ts(() => {
      i = a, a = [], zr(() => {
        n !== t(...a) && (e(n, ...a), i && El(t(...i), n) && e(null, ...i));
      });
    }), () => {
      Ir(() => {
        a && El(t(...a), n) && e(null, ...a);
      });
    };
  }), n;
}
function qd(n, e, t) {
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
function xf(n) {
  let e;
  return qd(n, (t) => e = t)(), e;
}
let Va = !1, Io = Symbol();
function Ii(n, e, t) {
  const r = t[e] ?? (t[e] = {
    store: null,
    source: /* @__PURE__ */ _d(void 0),
    unsubscribe: Ie
  });
  if (r.store !== n && !(Io in t))
    if (r.unsubscribe(), r.store = n ?? null, n == null)
      r.source.v = void 0, r.unsubscribe = Ie;
    else {
      var i = !0;
      r.unsubscribe = qd(n, (a) => {
        i ? r.source.v = a : B(r.source, a);
      }), i = !1;
    }
  return n && Io in t ? xf(n) : o(r.source);
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
function Sf(n) {
  var e = Va;
  try {
    return Va = !1, [n(), Va];
  } finally {
    Va = e;
  }
}
const wf = {
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
    wf
  );
}
const Tf = {
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
      if (Mi(r) && (r = r()), typeof r == "object" && r !== null && e in r) {
        const i = Gr(r, e);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(n, e) {
    if (e === rr || e === od) return !1;
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
function Qe(...n) {
  return new Proxy({ props: n }, Tf);
}
function m(n, e, t, r) {
  var E;
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
    var v = rr in n || od in n;
    d = ((E = Gr(n, e)) == null ? void 0 : E.set) ?? (v && e in n ? (C) => n[e] = C : void 0);
  }
  var f, h = !1;
  a ? [f, h] = Sf(() => (
    /** @type {V} */
    n[e]
  )) : f = /** @type {V} */
  n[e], f === void 0 && r !== void 0 && (f = c(), d && (i && sc(), d(f)));
  var g;
  if (i ? g = () => {
    var C = (
      /** @type {V} */
      n[e]
    );
    return C === void 0 ? c() : (l = !0, C);
  } : g = () => {
    var C = (
      /** @type {V} */
      n[e]
    );
    return C !== void 0 && (u = /** @type {V} */
    void 0), C === void 0 ? u : C;
  }, i && !(t & 4))
    return g;
  if (d) {
    var p = n.$$legacy;
    return (
      /** @type {() => V} */
      function(C, w) {
        return arguments.length > 0 ? ((!i || !w || p || h) && d(w ? g() : C), C) : g();
      }
    );
  }
  var b = !1, y = (t & 1 ? xs : Zo)(() => (b = !1, g()));
  a && o(y);
  var x = (
    /** @type {Effect} */
    Pe
  );
  return (
    /** @type {() => V} */
    function(C, w) {
      if (arguments.length > 0) {
        const I = w ? o(y) : i && a ? Ee(C) : C;
        return B(y, I), b = !0, u !== void 0 && (u = I), C;
      }
      return Ai && b || x.f & _i ? y.v : o(y);
    }
  );
}
const Df = "5";
var td;
typeof window < "u" && ((td = window.__svelte ?? (window.__svelte = {})).v ?? (td.v = /* @__PURE__ */ new Set())).add(Df);
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
function ut(n, e) {
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
    t in a || (a[t] = /* @__PURE__ */ new Map()), a[t].set(r, Kc(e, t, r, i));
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
var za;
function Lf(n, e) {
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
function Rf(n, e, t) {
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
function Of(n, e, t, r) {
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
function Mf(n, e) {
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
function Ff(n, e, t) {
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
function Pf(n) {
  return n === void 0 && (n = window), kf(n) ? { passive: !0 } : !1;
}
function kf(n) {
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
const Kd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: Pf
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
function Gf(n, e) {
  if (n.closest)
    return n.closest(e);
  for (var t = n; t; ) {
    if (Qd(t, e))
      return t;
    t = t.parentElement;
  }
  return null;
}
function Qd(n, e) {
  var t = n.matches || n.webkitMatchesSelector || n.msMatchesSelector;
  return t.call(n, e);
}
function Nf(n) {
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
  closest: Gf,
  estimateScrollWidth: Nf,
  matches: Qd
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
var Zf = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Hf = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Sl = {
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
var wl = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Tl = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Xa = [], Bf = (
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
        return Zf;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Hf;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Sl;
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
          for (var a = Bn(wl), s = a.next(); !s.done; s = a.next()) {
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
          for (var a = Bn(Tl), s = a.next(); !s.done; s = a.next()) {
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
        for (var i = Bn(wl), a = i.next(); !a.done; a = i.next()) {
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
        for (var i = Bn(Tl), a = i.next(); !a.done; a = i.next()) {
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
      i ? a = Rf(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
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
      }, Sl.FG_DEACTIVATION_MS));
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
var Js = "mdc-dom-focus-sentinel", Uf = (
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
const Wf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FocusTrap: Uf
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
function _t(n) {
  var e = n.key;
  if (nn.has(e))
    return e;
  var t = rn.get(n.keyCode);
  return t || Le.UNKNOWN;
}
const { applyPassive: Dl } = Kd, { matches: jf } = ka;
function Gn(n, { ripple: e = !0, surface: t = !1, unbounded: r = !1, disabled: i = !1, color: a, active: s, rippleElement: u, eventTarget: l, activeTarget: c, addClass: d = (g) => n.classList.add(g), removeClass: v = (g) => n.classList.remove(g), addStyle: f = (g, p) => n.style.setProperty(g, p), initPromise: h = Promise.resolve() } = {}) {
  let g, p = new ra(), b = ye("SMUI:addLayoutListener"), y, x = s, E = l, C = c;
  function w() {
    t ? (d("mdc-ripple-surface"), a === "primary" ? (d("smui-ripple-surface--primary"), v("smui-ripple-surface--secondary")) : a === "secondary" ? (v("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : (v("smui-ripple-surface--primary"), v("smui-ripple-surface--secondary"))) : (v("mdc-ripple-surface"), v("smui-ripple-surface--primary"), v("smui-ripple-surface--secondary")), g && x !== s && (x = s, s ? g.activate() : s === !1 && g.deactivate()), e && !g ? (g = new Bf({
      addClass: d,
      browserSupportsCssVars: () => Lf(window),
      computeBoundingRect: () => (u || n).getBoundingClientRect(),
      containsEventTarget: (S) => n.contains(S),
      deregisterDocumentInteractionHandler: (S, _) => p.off(document.documentElement, S, _),
      deregisterInteractionHandler: (S, _) => p.off(l || n, S, _),
      deregisterResizeHandler: (S) => window.removeEventListener("resize", S),
      getWindowPageOffset: () => {
        var S, _;
        return {
          x: (S = window.pageXOffset) !== null && S !== void 0 ? S : window.scrollX,
          y: (_ = window.pageYOffset) !== null && _ !== void 0 ? _ : window.scrollY
        };
      },
      isSurfaceActive: () => s ?? jf(c || n, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!r,
      registerDocumentInteractionHandler: (S, _) => {
        const T = Dl();
        p.on(document.documentElement, S, _, typeof T == "boolean" ? { capture: T } : T);
      },
      registerInteractionHandler: (S, _) => {
        const T = Dl();
        p.on(l || n, S, _, typeof T == "boolean" ? { capture: T } : T);
      },
      registerResizeHandler: (S) => p.on(window, "resize", S),
      removeClass: v,
      updateCssVariable: f
    }), h.then(() => {
      g && (g.init(), g.setUnbounded(r));
    })) : g && !e && h.then(() => {
      g && (g.destroy(), g = void 0, p.clear());
    }), g && (E !== l || C !== c) && (E = l, C = c, g.destroy(), requestAnimationFrame(() => {
      g && (g.init(), g.setUnbounded(r));
    })), !e && r && d("mdc-ripple-upgraded--unbounded");
  }
  w(), b && (y = b(I));
  function I() {
    g && g.layout();
  }
  return {
    update(S) {
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
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (_) => n.classList.add(_), removeClass: (_) => n.classList.remove(_), addStyle: (_, T) => n.style.setProperty(_, T), initPromise: Promise.resolve() }, S)), w();
    },
    destroy() {
      g && (g.destroy(), g = void 0, p.clear(), v("mdc-ripple-surface"), v("smui-ripple-surface--primary"), v("smui-ripple-surface--secondary")), y && y();
    }
  };
}
var Vf = /* @__PURE__ */ st("<svg><!></svg>");
function Os(n, e) {
  Ce(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "tag", 3, "div"), i = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
  const a = /* @__PURE__ */ re(() => [
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
      var g = Vf();
      He(g, () => ({ ...i }));
      var p = N(g);
      _e(p, () => e.children ?? Ie), Se(g, (b) => s = b, () => s), De(g, (b, y) => ae == null ? void 0 : ae(b, y), t), A(h, g);
    }, f = (h) => {
      var g = oe(), p = K(g);
      {
        var b = (x) => {
          var E = oe(), C = K(E);
          mo(C, r, !1, (w, I) => {
            Se(w, (S) => s = S, () => s), De(w, (S, _) => ae == null ? void 0 : ae(S, _), t), He(w, () => ({ ...i }));
          }), A(x, E);
        }, y = (x) => {
          var E = oe(), C = K(E);
          mo(C, r, !1, (w, I) => {
            Se(w, (T) => s = T, () => s), De(w, (T, R) => ae == null ? void 0 : ae(T, R), t), He(w, () => ({ ...i }));
            var S = oe(), _ = K(S);
            _e(_, () => e.children ?? Ie), A(I, S);
          }), A(x, E);
        };
        te(
          p,
          (x) => {
            o(a) ? x(b) : x(y, !1);
          },
          !0
        );
      }
      A(h, g);
    };
    te(d, (h) => {
      r() === "svg" ? h(v) : h(f, !1);
    });
  }
  return A(n, c), Ae(l);
}
function Ya(n, e) {
  Ce(e, !0);
  const [t, r] = Ei(), i = jn(e.value);
  de(e.key, i), xe(() => {
    nr(i, e.value);
  }), Fn(() => {
    i.set(void 0);
  });
  var a = oe(), s = K(a);
  _e(s, () => e.children ?? Ie), A(n, a), Ae(), r();
}
var zf = /* @__PURE__ */ X('<div class="mdc-button__touch"></div>'), Xf = /* @__PURE__ */ X('<div class="mdc-button__ripple"></div> <!><!>', 1);
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
  ]), p, b = Ee({}), y = Ee({}), x = ye("SMUI:button:context");
  const E = /* @__PURE__ */ re(() => x === "dialog:action" && c() != null ? { "data-mdc-dialog-action": c() } : { action: c() }), C = /* @__PURE__ */ re(() => x === "dialog:action" && d() ? { "data-mdc-dialog-button-default": "" } : {}), w = /* @__PURE__ */ re(() => x === "banner" ? {} : { secondary: v() });
  let I = e.disabled;
  xe(() => {
    if (I !== e.disabled) {
      if (p) {
        const j = D();
        "blur" in j && j.blur();
      }
      I = g.disabled;
    }
  }), de("SMUI:label:context", "button"), de("SMUI:icon:context", "button");
  function S(j) {
    b[j] || (b[j] = !0);
  }
  function _(j) {
    (!(j in b) || b[j]) && (b[j] = !1);
  }
  function T(j, H) {
    y[j] != H && (H === "" || H == null ? delete y[j] : y[j] = H);
  }
  function R() {
    x === "banner" && Be(D(), v() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function D() {
    return p.getElement();
  }
  var L = { getElement: D }, P = oe(), ie = K(P);
  {
    let j = /* @__PURE__ */ re(() => [
      [
        Gn,
        {
          ripple: a(),
          unbounded: !1,
          color: s(),
          disabled: !!e.disabled,
          addClass: S,
          removeClass: _,
          addStyle: T
        }
      ],
      ...t()
    ]), H = /* @__PURE__ */ re(() => Ze({
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
      ...b,
      [r()]: !0
    })), U = /* @__PURE__ */ re(() => Object.entries(y).map(([ee, ce]) => `${ee}: ${ce};`).concat([i()]).join(" "));
    Pa(ie, f, (ee, ce) => {
      Se(
        ce(ee, Qe(
          {
            get tag() {
              return h();
            },
            get use() {
              return o(j);
            },
            get class() {
              return o(H);
            },
            get style() {
              return o(U);
            }
          },
          () => o(E),
          () => o(C),
          () => o(w),
          {
            get href() {
              return e.href;
            }
          },
          () => g,
          {
            onclick: (k) => {
              var J;
              R(), (J = e.onclick) == null || J.call(e, k);
            },
            children: (k, J) => {
              var ne = Xf(), be = q(K(ne), 2);
              _e(be, () => e.children ?? Ie);
              var fe = q(be);
              {
                var W = (V) => {
                  var O = zf();
                  A(V, O);
                };
                te(fe, (V) => {
                  l() && V(W);
                });
              }
              A(k, ne);
            },
            $$slots: { default: !0 }
          }
        )),
        (k) => p = k,
        () => p
      );
    });
  }
  return A(n, P), Ae(L);
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
var Qf = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Ll = {
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
        return Ll;
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
      t > 0 && (t += Ll.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(t), this.adapter.addClass(r);
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
}, ev = {
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
}, Rl = {
  LABEL_SCALE: 0.75
}, tv = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], nv = [
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
var Ol = ["mousedown", "touchstart"], Ml = ["click", "keydown"], rv = (
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
        return ev;
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
        return Rl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var t = this.getNativeInput().type;
        return nv.indexOf(t) >= 0;
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
        for (var s = Bn(Ol), u = s.next(); !u.done; u = s.next()) {
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
        for (var c = Bn(Ml), d = c.next(); !d.done; d = c.next()) {
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
        for (var s = Bn(Ol), u = s.next(); !u.done; u = s.next()) {
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
        for (var c = Bn(Ml), d = c.next(); !d.done; d = c.next()) {
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
        return tv.indexOf(i) > -1 ? (r.styleValidity(!0), r.adapter.setLabelRequired(r.getNativeInput().required), !0) : !1;
      }), t.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(t) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (t) {
          var r = this.adapter.getLabelWidth() * Rl.LABEL_SCALE;
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
var Fl = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, iv = {
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
var Pl = ["click", "keydown"], av = (
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
        return Fl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return iv;
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
        for (var i = Bn(Pl), a = i.next(); !a.done; a = i.next()) {
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
        for (var i = Bn(Pl), a = i.next(); !a.done; a = i.next()) {
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
      this.savedTabIndex && (t ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", Fl.ICON_ROLE)));
    }, e.prototype.setAriaLabel = function(t) {
      this.adapter.setAttr("aria-label", t);
    }, e.prototype.setContent = function(t) {
      this.adapter.setContent(t);
    }, e.prototype.handleInteraction = function(t) {
      var r = t.key === "Enter" || t.keyCode === 13;
      (t.type === "click" || r) && (t.preventDefault(), this.adapter.notifyIconAction());
    }, e;
  }(bn)
), sv = /* @__PURE__ */ X("<span><!></span>"), ov = /* @__PURE__ */ X("<label><!></label>");
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
  let b = s();
  xe(() => {
    o(d) && b !== s() && (b = s(), o(d).setRequired(s()));
  });
  const y = ye("SMUI:floating-label:mount"), x = ye("SMUI:floating-label:unmount");
  it(() => {
    B(
      d,
      new qf({
        addClass: E,
        removeClass: C,
        getWidth: () => {
          var J, ne;
          const ee = D(), ce = ee.cloneNode(!0);
          (J = ee.parentNode) == null || J.appendChild(ce), ce.classList.add("smui-floating-label--remove-transition"), ce.classList.add("smui-floating-label--force-size"), ce.classList.remove("mdc-floating-label--float-above");
          const k = ce.scrollWidth;
          return (ne = ee.parentNode) == null || ne.removeChild(ce), k;
        },
        registerInteractionHandler: (ee, ce) => v.on(D(), ee, ce),
        deregisterInteractionHandler: (ee, ce) => v.off(D(), ee, ce)
      }),
      !0
    );
    const U = {
      get element() {
        return D();
      },
      addStyle: w,
      removeStyle: I
    };
    return y && y(U), o(d).init(), () => {
      var ee;
      x && x(U), (ee = o(d)) == null || ee.destroy(), v.clear();
    };
  });
  function E(U) {
    f[U] || (f[U] = !0);
  }
  function C(U) {
    (!(U in f) || f[U]) && (f[U] = !1);
  }
  function w(U, ee) {
    h[U] != ee && (ee === "" || ee == null ? delete h[U] : h[U] = ee);
  }
  function I(U) {
    U in h && delete h[U];
  }
  function S(U) {
    var ee;
    (ee = o(d)) == null || ee.shake(U);
  }
  function _(U) {
    a(U);
  }
  function T(U) {
    s(U);
  }
  function R() {
    if (o(d) == null)
      throw new Error("Instance is undefined.");
    return o(d).getWidth();
  }
  function D() {
    return c;
  }
  var L = { shake: S, float: _, setRequired: T, getWidth: R, getElement: D }, P = oe(), ie = K(P);
  {
    var j = (U) => {
      var ee = sv();
      He(ee, (k, J) => ({ class: k, style: J, ...l }), [
        () => Ze({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": s(),
          ...f,
          [r()]: !0
        }),
        () => Object.entries(h).map(([k, J]) => `${k}: ${J};`).concat([i()]).join(" ")
      ]);
      var ce = N(ee);
      _e(ce, () => e.children ?? Ie), Se(ee, (k) => c = k, () => c), De(ee, (k, J) => ae == null ? void 0 : ae(k, J), t), A(U, ee);
    }, H = (U) => {
      var ee = ov();
      He(
        ee,
        (k, J) => ({
          class: k,
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
          () => Object.entries(h).map(([k, J]) => `${k}: ${J};`).concat([i()]).join(" ")
        ]
      );
      var ce = N(ee);
      _e(ce, () => e.children ?? Ie), Se(ee, (k) => c = k, () => c), De(ee, (k, J) => ae == null ? void 0 : ae(k, J), t), A(U, ee);
    };
    te(ie, (U) => {
      u() ? U(j) : U(H, !1);
    });
  }
  return A(n, P), Ae(L);
}
var lv = /* @__PURE__ */ X("<div></div>");
function Jd(n, e) {
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
  it(() => (B(
    l,
    new Kf({
      addClass: h,
      removeClass: g,
      hasClass: f,
      setStyle: p,
      registerEventHandler: (I, S) => c.on(E(), I, S),
      deregisterEventHandler: (I, S) => c.off(E(), I, S)
    }),
    !0
  ), o(l).init(), () => {
    var I;
    (I = o(l)) == null || I.destroy(), c.clear();
  }));
  function f(I) {
    return I in d ? d[I] : E().classList.contains(I);
  }
  function h(I) {
    d[I] || (d[I] = !0);
  }
  function g(I) {
    (!(I in d) || d[I]) && (d[I] = !1);
  }
  function p(I, S) {
    v[I] != S && (S === "" || S == null ? delete v[I] : v[I] = S);
  }
  function b() {
    var I;
    (I = o(l)) == null || I.activate();
  }
  function y() {
    var I;
    (I = o(l)) == null || I.deactivate();
  }
  function x(I) {
    var S;
    (S = o(l)) == null || S.setRippleCenter(I);
  }
  function E() {
    return u;
  }
  var C = { activate: b, deactivate: y, setRippleCenter: x, getElement: E }, w = lv();
  return He(w, (I, S) => ({ class: I, style: S, ...s }), [
    () => Ze({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...d,
      [r()]: !0
    }),
    () => Object.entries(v).map(([I, S]) => `${I}: ${S};`).concat([i()]).join(" ")
  ]), Se(w, (I) => u = I, () => u), De(w, (I, S) => ae == null ? void 0 : ae(I, S), t), A(n, w), Ae(C);
}
var dv = /* @__PURE__ */ X('<div class="mdc-notched-outline__notch"><!></div>'), uv = /* @__PURE__ */ X('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function $d(n, e) {
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
  }), de("SMUI:floating-label:mount", (_) => {
    B(c, _, !0);
  }), de("SMUI:floating-label:unmount", () => {
    B(c, void 0);
  }), it(() => (B(
    l,
    new $f({
      addClass: h,
      removeClass: g,
      setNotchWidthProperty: (_) => p("width", _ + "px"),
      removeNotchWidthProperty: () => b("width")
    }),
    !0
  ), o(l).init(), () => {
    var _;
    (_ = o(l)) == null || _.destroy();
  }));
  function h(_) {
    d[_] || (d[_] = !0);
  }
  function g(_) {
    (!(_ in d) || d[_]) && (d[_] = !1);
  }
  function p(_, T) {
    v[_] != T && (T === "" || T == null ? delete v[_] : v[_] = T);
  }
  function b(_) {
    _ in v && delete v[_];
  }
  function y(_) {
    var T;
    (T = o(l)) == null || T.notch(_);
  }
  function x() {
    var _;
    (_ = o(l)) == null || _.closeNotch();
  }
  function E() {
    return u;
  }
  var C = { notch: y, closeNotch: x, getElement: E }, w = uv();
  He(w, (_) => ({ class: _, ...s }), [
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
    var S = (_) => {
      var T = dv(), R = N(T);
      _e(R, () => e.children ?? Ie), ue((D) => qe(T, D), [
        () => Object.entries(v).map(([D, L]) => `${D}: ${L};`).join(" ")
      ]), A(_, T);
    };
    te(I, (_) => {
      a() || _(S);
    });
  }
  return Se(w, (_) => u = _, () => u), De(w, (_, T) => ae == null ? void 0 : ae(_, T), t), A(n, w), Ae(C);
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
  Object.entries(u()).forEach(([y, x]) => {
    const E = ye(x);
    E && "subscribe" in E && f.push(E.subscribe((C) => {
      u()[y] = C;
    }));
  });
  for (let y in l())
    l().hasOwnProperty(y) && de(y, l()[y]);
  Fn(() => {
    for (const y of f)
      y();
  });
  function h() {
    return v.getElement();
  }
  var g = { getElement: h }, p = oe(), b = K(p);
  {
    let y = /* @__PURE__ */ re(() => Ze({
      [s()]: !0,
      ...u(),
      [r()]: !0
    }));
    Pa(b, i, (x, E) => {
      Se(
        E(x, Qe(
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
            children: (C, w) => {
              var I = oe(), S = K(I);
              _e(S, () => e.children ?? Ie), A(C, I);
            },
            $$slots: { default: !0 }
          }
        )),
        (C) => v = C,
        () => v
      );
    });
  }
  return A(n, p), Ae(g);
}
function cv(n, e) {
  Ce(e, !0);
  let t = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Se(
    ia(n, Qe({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => t, {
      children: (s, u) => {
        var l = oe(), c = K(l);
        _e(c, () => e.children ?? Ie), A(s, l);
      },
      $$slots: { default: !0 }
    })),
    (s) => r = s,
    () => r
  ), Ae(a);
}
function fv(n, e) {
  Ce(e, !0);
  let t = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Se(
    ia(n, Qe(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => t,
      {
        children: (s, u) => {
          var l = oe(), c = K(l);
          _e(c, () => e.children ?? Ie), A(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Ae(a);
}
function vv(n, e) {
  Ce(e, !0);
  let t = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Se(
    ia(n, Qe(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => t,
      {
        children: (s, u) => {
          var l = oe(), c = K(l);
          _e(c, () => e.children ?? Ie), A(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Ae(a);
}
var hv = /* @__PURE__ */ X("<input/>");
function gv(n, e) {
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
  ]), p, b = Ee({}), y = Ee({});
  xe(() => {
    i() === "file" ? delete y.value : y.value = s() == null ? "" : s();
  }), it(() => {
    d() && v() && c(R().matches(":invalid"));
  });
  function x(j) {
    return j === "" ? Number.NaN : +j;
  }
  function E(j) {
    if (i() === "file") {
      u(j.currentTarget.files);
      return;
    }
    if (j.currentTarget.value === "" && f()) {
      s(null);
      return;
    }
    if (j.currentTarget.value === "" && h()) {
      s(void 0);
      return;
    }
    switch (i()) {
      case "number":
      case "range":
        s(x(j.currentTarget.value));
        break;
      default:
        s(j.currentTarget.value);
        break;
    }
  }
  function C(j) {
    (i() === "file" || i() === "range") && E(j), l(!0), d() && c(R().matches(":invalid"));
  }
  function w(j) {
    return j in b ? b[j] ?? null : R().getAttribute(j);
  }
  function I(j, H) {
    b[j] !== H && (b[j] = H);
  }
  function S(j) {
    (!(j in b) || b[j] != null) && (b[j] = void 0);
  }
  function _() {
    R().focus();
  }
  function T() {
    R().blur();
  }
  function R() {
    return p;
  }
  var D = { getAttr: w, addAttr: I, removeAttr: S, focus: _, blur: T, getElement: R }, L = hv(), P = (j) => {
    var H;
    i() !== "file" && E(j), (H = e.oninput) == null || H.call(e, j);
  }, ie = (j) => {
    var H;
    C(j), (H = e.onchange) == null || H.call(e, j);
  };
  return He(
    L,
    (j) => ({
      class: j,
      type: i(),
      placeholder: a(),
      ...y,
      ...b,
      ...g,
      oninput: P,
      onchange: ie
    }),
    [
      () => Ze({ "mdc-text-field__input": !0, [r()]: !0 })
    ],
    void 0,
    void 0,
    !0
  ), Se(L, (j) => p = j, () => p), De(L, (j, H) => ae == null ? void 0 : ae(j, H), t), A(n, L), Ae(D);
}
var mv = /* @__PURE__ */ X("<textarea></textarea>");
function pv(n, e) {
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
    l() && c() && u(C().matches(":invalid"));
  });
  function g() {
    s(!0), l() && u(C().matches(":invalid"));
  }
  function p(_) {
    return _ in h ? h[_] ?? null : C().getAttribute(_);
  }
  function b(_, T) {
    h[_] !== T && (h[_] = T);
  }
  function y(_) {
    (!(_ in h) || h[_] != null) && (h[_] = void 0);
  }
  function x() {
    C().focus();
  }
  function E() {
    C().blur();
  }
  function C() {
    return f;
  }
  var w = { getAttr: p, addAttr: b, removeAttr: y, focus: x, blur: E, getElement: C }, I = mv(), S = (_) => {
    var T;
    g(), (T = e.onchange) == null || T.call(e, _);
  };
  return He(
    I,
    (_) => ({
      class: _,
      style: `${d() ? "" : "resize: none; "}${i()}`,
      ...h,
      ...v,
      onchange: S
    }),
    [
      () => Ze({ "mdc-text-field__input": !0, [r()]: !0 })
    ]
  ), Se(I, (_) => f = _, () => f), De(I, (_, T) => ae == null ? void 0 : ae(_, T), t), Fa(() => Ef(I, a)), A(n, I), Ae(w);
}
var Iv = /* @__PURE__ */ X('<span class="mdc-text-field__ripple"></span>'), bv = /* @__PURE__ */ X("<!> <!>", 1), _v = /* @__PURE__ */ X("<span><!> <!></span>"), yv = /* @__PURE__ */ X("<!> <!> <!>", 1), Cv = /* @__PURE__ */ X("<label><!> <!> <!> <!> <!> <!> <!></label>"), Av = /* @__PURE__ */ X("<div><!> <!> <!> <!> <!></div>"), Ev = /* @__PURE__ */ X("<!> <!>", 1);
function pr(n, e) {
  Ce(e, !0);
  const { applyPassive: t } = Kd;
  let r = () => {
  };
  function i(G) {
    return G === r;
  }
  let a = m(e, "use", 19, () => []), s = m(e, "class", 3, ""), u = m(e, "style", 3, ""), l = m(e, "ripple", 3, !0), c = m(e, "disabled", 3, !1), d = m(e, "required", 3, !1), v = m(e, "textarea", 3, !1), f = m(e, "variant", 19, () => v() ? "outlined" : "standard"), h = m(e, "noLabel", 3, !1), g = m(e, "type", 3, "text"), p = m(e, "value", 15), b = m(e, "files", 15, r), y = m(e, "invalid", 15, r), x = m(e, "updateInvalid", 19, () => i(y())), E = m(e, "initialInvalid", 3, !1), C = m(e, "dirty", 15, !1), w = m(e, "validateOnValueChange", 19, x), I = m(e, "useNativeValidation", 19, x), S = m(e, "withLeadingIcon", 3, r), _ = m(e, "withTrailingIcon", 3, r), T = m(e, "input", 7), R = m(e, "floatingLabel", 7), D = m(e, "lineRipple", 7), L = m(e, "notchedOutline", 7), P = /* @__PURE__ */ Ve(e, [
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
  const ie = p() !== void 0 || p() === void 0 && e.input$emptyValueUndefined || !i(b());
  i(b()) && b(null), i(y()) && y(!1);
  let j, H = /* @__PURE__ */ le(void 0), U = new ra(), ee = Ee({}), ce = Ee({}), k = /* @__PURE__ */ le(void 0), J = /* @__PURE__ */ le(!1), ne = /* @__PURE__ */ le(Ee(E())), be = ye("SMUI:addLayoutListener"), fe, W, V = new Promise((G) => W = G), O, Q, Y, ge;
  const pe = /* @__PURE__ */ re(() => T() && T().getElement());
  xe(() => {
    (C() || o(ne) || !x()) && o(H) && o(H).isValid() !== !y() && (x() ? y(!o(H).isValid()) : o(H).setValid(!y()));
  }), xe(() => {
    o(H) && o(H).getValidateOnValueChange() !== w() && o(H).setValidateOnValueChange(i(w()) ? !1 : w());
  }), xe(() => {
    o(H) && o(H).setUseNativeValidation(i(I()) ? !0 : I());
  }), xe(() => {
    o(H) && o(H).setDisabled(c());
  });
  let Ne = p();
  xe(() => {
    if (o(H) && ie && Ne !== p()) {
      Ne = p();
      const G = `${p() == null ? "" : p()}`;
      o(H).getValue() !== G && o(H).setValue(G);
    }
  }), be && (fe = be(F)), de("SMUI:textfield:leading-icon:mount", (G) => {
    O = G;
  }), de("SMUI:textfield:leading-icon:unmount", () => {
    O = void 0;
  }), de("SMUI:textfield:trailing-icon:mount", (G) => {
    Q = G;
  }), de("SMUI:textfield:trailing-icon:unmount", () => {
    Q = void 0;
  }), de("SMUI:textfield:helper-text:id", (G) => {
    B(k, G, !0);
  }), de("SMUI:textfield:helper-text:mount", (G) => {
    Y = G;
  }), de("SMUI:textfield:helper-text:unmount", () => {
    B(k, void 0), Y = void 0;
  }), de("SMUI:textfield:character-counter:mount", (G) => {
    ge = G;
  }), de("SMUI:textfield:character-counter:unmount", () => {
    ge = void 0;
  }), it(() => {
    var G;
    if (B(
      H,
      new rv(
        {
          // getRootAdapterMethods_
          addClass: Ke,
          removeClass: Re,
          hasClass: tt,
          registerTextFieldInteractionHandler: ($, Te) => U.on(z(), $, Te),
          deregisterTextFieldInteractionHandler: ($, Te) => U.off(z(), $, Te),
          registerValidationAttributeChangeHandler: ($) => {
            const Te = (Zt) => Zt.map((an) => an.attributeName).filter((an) => an), lt = new MutationObserver((Zt) => {
              I() && $(Te(Zt));
            }), It = { attributes: !0 };
            return T() && lt.observe(T().getElement(), It), lt;
          },
          deregisterValidationAttributeChangeHandler: ($) => {
            $.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var $;
            return (($ = T()) == null ? void 0 : $.getElement()) ?? null;
          },
          setInputAttr: ($, Te) => {
            var lt;
            (lt = T()) == null || lt.addAttr($, Te);
          },
          removeInputAttr: ($) => {
            var Te;
            (Te = T()) == null || Te.removeAttr($);
          },
          isFocused: () => {
            var $;
            return document.activeElement === (($ = T()) == null ? void 0 : $.getElement());
          },
          registerInputInteractionHandler: ($, Te) => {
            var It;
            const lt = (It = T()) == null ? void 0 : It.getElement();
            if (lt) {
              const Zt = t();
              U.on(lt, $, Te, typeof Zt == "boolean" ? { capture: Zt } : Zt);
            }
          },
          deregisterInputInteractionHandler: ($, Te) => {
            var It;
            const lt = (It = T()) == null ? void 0 : It.getElement();
            lt && U.off(lt, $, Te);
          },
          // getLabelAdapterMethods_
          floatLabel: ($) => R() && R().float($),
          getLabelWidth: () => R() ? R().getWidth() : 0,
          hasLabel: () => !!R(),
          shakeLabel: ($) => R() && R().shake($),
          setLabelRequired: ($) => R() && R().setRequired($),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => D() && D().activate(),
          deactivateLineRipple: () => D() && D().deactivate(),
          setLineRippleTransformOrigin: ($) => D() && D().setRippleCenter($),
          // getOutlineAdapterMethods_
          closeOutline: () => L() && L().closeNotch(),
          hasOutline: () => !!L(),
          notchOutline: ($) => L() && L().notch($)
        },
        {
          get helperText() {
            return Y;
          },
          get characterCounter() {
            return ge;
          },
          get leadingIcon() {
            return O;
          },
          get trailingIcon() {
            return Q;
          }
        }
      ),
      !0
    ), ie) {
      if (T() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (G = o(H)) == null || G.init();
    } else
      kd().then(() => {
        var $;
        if (T() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        ($ = o(H)) == null || $.init();
      });
    return W(), () => {
      var $;
      ($ = o(H)) == null || $.destroy(), U.clear();
    };
  }), Fn(() => {
    fe && fe();
  });
  function tt(G) {
    return G in ee ? ee[G] ?? null : z().classList.contains(G);
  }
  function Ke(G) {
    ee[G] || (ee[G] = !0);
  }
  function Re(G) {
    (!(G in ee) || ee[G]) && (ee[G] = !1);
  }
  function ot(G, $) {
    ce[G] != $ && ($ === "" || $ == null ? delete ce[G] : ce[G] = $);
  }
  function kt() {
    var G;
    (G = T()) == null || G.focus();
  }
  function Gt() {
    var G;
    (G = T()) == null || G.blur();
  }
  function F() {
    if (o(H)) {
      const G = o(H).shouldFloat;
      o(H).notchOutline(G);
    }
  }
  function z() {
    return j;
  }
  var ve = { focus: kt, blur: Gt, layout: F, getElement: z }, Fe = Ev(), Nt = K(Fe);
  {
    var vn = (G) => {
      var $ = Cv();
      He($, (Ge, Je, ze) => ({ class: Ge, style: Je, for: void 0, ...ze }), [
        () => Ze({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": c(),
          "mdc-text-field--textarea": v(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !v(),
          "mdc-text-field--no-label": h() || e.label == null,
          "mdc-text-field--label-floating": o(J) || p() != null && p() !== "",
          "mdc-text-field--with-leading-icon": i(S()) ? e.leadingIcon : S(),
          "mdc-text-field--with-trailing-icon": i(_()) ? e.trailingIcon : _(),
          "mdc-text-field--with-internal-counter": v() && e.internalCounter,
          "mdc-text-field--invalid": y(),
          ...ee,
          [s()]: !0
        }),
        () => Object.entries(ce).map(([Ge, Je]) => `${Ge}: ${Je};`).concat([u()]).join(" "),
        () => Ea(P, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Te = N($);
      {
        var lt = (Ge) => {
          var Je = bv(), ze = K(Je);
          {
            var Bt = (Ct) => {
              var Lt = Iv();
              A(Ct, Lt);
            };
            te(ze, (Ct) => {
              f() === "filled" && Ct(Bt);
            });
          }
          var Pn = q(ze, 2);
          {
            var $e = (Ct) => {
              {
                let Lt = /* @__PURE__ */ re(() => o(J) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), We = /* @__PURE__ */ re(() => ut(P, "label$"));
                Se(
                  us(Ct, Qe(
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
                        var _n = oe(), At = K(_n);
                        {
                          var Ut = (qt) => {
                          }, yn = (qt) => {
                            var Yr = oe(), Cn = K(Yr);
                            {
                              var Sr = (An) => {
                                var lr = rt();
                                ue(() => Me(lr, e.label)), A(An, lr);
                              }, sa = (An) => {
                                var lr = oe(), zn = K(lr);
                                _e(zn, () => e.label), A(An, lr);
                              };
                              te(
                                Cn,
                                (An) => {
                                  typeof e.label == "string" ? An(Sr) : An(sa, !1);
                                },
                                !0
                              );
                            }
                            A(qt, Yr);
                          };
                          te(At, (qt) => {
                            e.label == null ? qt(Ut) : qt(yn, !1);
                          });
                        }
                        A(Rt, _n);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (Rt) => R(Rt),
                  () => R()
                );
              }
            };
            te(Pn, (Ct) => {
              !h() && e.label != null && Ct($e);
            });
          }
          A(Ge, Je);
        };
        te(Te, (Ge) => {
          !v() && f() !== "outlined" && Ge(lt);
        });
      }
      var It = q(Te, 2);
      {
        var Zt = (Ge) => {
          {
            let Je = /* @__PURE__ */ re(() => h() || e.label == null), ze = /* @__PURE__ */ re(() => ut(P, "outline$"));
            Se(
              $d(Ge, Qe(
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
                      var Lt = (We) => {
                        {
                          let Rt = /* @__PURE__ */ re(() => o(J) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), or = /* @__PURE__ */ re(() => ut(P, "label$"));
                          Se(
                            us(We, Qe(
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
                                children: (_n, At) => {
                                  var Ut = oe(), yn = K(Ut);
                                  {
                                    var qt = (Cn) => {
                                    }, Yr = (Cn) => {
                                      var Sr = oe(), sa = K(Sr);
                                      {
                                        var An = (zn) => {
                                          var qr = rt();
                                          ue(() => Me(qr, e.label)), A(zn, qr);
                                        }, lr = (zn) => {
                                          var qr = oe(), Ws = K(qr);
                                          _e(Ws, () => e.label), A(zn, qr);
                                        };
                                        te(
                                          sa,
                                          (zn) => {
                                            typeof e.label == "string" ? zn(An) : zn(lr, !1);
                                          },
                                          !0
                                        );
                                      }
                                      A(Cn, Sr);
                                    };
                                    te(yn, (Cn) => {
                                      e.label == null ? Cn(qt) : Cn(Yr, !1);
                                    });
                                  }
                                  A(_n, Ut);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (_n) => R(_n),
                            () => R()
                          );
                        }
                      };
                      te(Ct, (We) => {
                        !h() && e.label != null && We(Lt);
                      });
                    }
                    A(Bt, $e);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (Bt) => L(Bt),
              () => L()
            );
          }
        };
        te(It, (Ge) => {
          (v() || f() === "outlined") && Ge(Zt);
        });
      }
      var an = q(It, 2);
      Ya(an, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (Ge, Je) => {
          var ze = oe(), Bt = K(ze);
          _e(Bt, () => e.leadingIcon ?? Ie), A(Ge, ze);
        },
        $$slots: { default: !0 }
      });
      var xi = q(an, 2);
      _e(xi, () => e.children ?? Ie);
      var ct = q(xi, 2);
      {
        var Ht = (Ge) => {
          var Je = _v(), ze = N(Je);
          {
            let Pn = /* @__PURE__ */ re(() => ut(P, "input$"));
            Se(
              pv(ze, Qe(
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
                    return o(ne);
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
                    B(J, !1), B(ne, !0), Be(z(), "blur", $e), (Ct = e.input$onblur) == null || Ct.call(e, $e);
                  },
                  onfocus: ($e) => {
                    var Ct;
                    B(J, !0), Be(z(), "focus", $e), (Ct = e.input$onfocus) == null || Ct.call(e, $e);
                  },
                  get value() {
                    return p();
                  },
                  set value($e) {
                    p($e);
                  },
                  get dirty() {
                    return C();
                  },
                  set dirty($e) {
                    C($e);
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
          _e(Bt, () => e.internalCounter ?? Ie), ue((Pn) => _r(Je, 1, Pn), [
            () => Wd(Ze({
              "mdc-text-field__resizer": !("input$resizable" in P) || e.input$resizable
            }))
          ]), A(Ge, Je);
        }, sn = (Ge) => {
          var Je = yv(), ze = K(Je);
          {
            var Bt = (Lt) => {
              var We = oe(), Rt = K(We);
              {
                var or = (At) => {
                  fv(At, {
                    children: (Ut, yn) => {
                      var qt = rt();
                      ue(() => Me(qt, e.prefix)), A(Ut, qt);
                    },
                    $$slots: { default: !0 }
                  });
                }, _n = (At) => {
                  var Ut = oe(), yn = K(Ut);
                  _e(yn, () => e.prefix ?? Ie), A(At, Ut);
                };
                te(Rt, (At) => {
                  typeof e.prefix == "string" ? At(or) : At(_n, !1);
                });
              }
              A(Lt, We);
            };
            te(ze, (Lt) => {
              e.prefix != null && Lt(Bt);
            });
          }
          var Pn = q(ze, 2);
          {
            let Lt = /* @__PURE__ */ re(() => ut(P, "input$"));
            Se(
              gv(Pn, Qe(
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
                    return o(ne);
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
                  onblur: (We) => {
                    var Rt;
                    B(J, !1), B(ne, !0), Be(z(), "blur", We), (Rt = e.input$onblur) == null || Rt.call(e, We);
                  },
                  onfocus: (We) => {
                    var Rt;
                    B(J, !0), Be(z(), "focus", We), (Rt = e.input$onfocus) == null || Rt.call(e, We);
                  },
                  get value() {
                    return p();
                  },
                  set value(We) {
                    p(We);
                  },
                  get files() {
                    return b();
                  },
                  set files(We) {
                    b(We);
                  },
                  get dirty() {
                    return C();
                  },
                  set dirty(We) {
                    C(We);
                  },
                  get invalid() {
                    return y();
                  },
                  set invalid(We) {
                    y(We);
                  }
                }
              )),
              (We) => T(We),
              () => T()
            );
          }
          var $e = q(Pn, 2);
          {
            var Ct = (Lt) => {
              var We = oe(), Rt = K(We);
              {
                var or = (At) => {
                  vv(At, {
                    children: (Ut, yn) => {
                      var qt = rt();
                      ue(() => Me(qt, e.suffix)), A(Ut, qt);
                    },
                    $$slots: { default: !0 }
                  });
                }, _n = (At) => {
                  var Ut = oe(), yn = K(Ut);
                  _e(yn, () => e.suffix ?? Ie), A(At, Ut);
                };
                te(Rt, (At) => {
                  typeof e.suffix == "string" ? At(or) : At(_n, !1);
                });
              }
              A(Lt, We);
            };
            te($e, (Lt) => {
              e.suffix != null && Lt(Ct);
            });
          }
          A(Ge, Je);
        };
        te(ct, (Ge) => {
          v() && typeof p() == "string" ? Ge(Ht) : Ge(sn, !1);
        });
      }
      var Er = q(ct, 2);
      Ya(Er, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (Ge, Je) => {
          var ze = oe(), Bt = K(ze);
          _e(Bt, () => e.trailingIcon ?? Ie), A(Ge, ze);
        },
        $$slots: { default: !0 }
      });
      var Ba = q(Er, 2);
      {
        var xr = (Ge) => {
          {
            let Je = /* @__PURE__ */ re(() => ut(P, "ripple$"));
            Se(Jd(Ge, Qe(() => o(Je))), (ze) => D(ze), () => D());
          }
        };
        te(Ba, (Ge) => {
          !v() && f() !== "outlined" && l() && Ge(xr);
        });
      }
      Se($, (Ge) => j = Ge, () => j), De($, (Ge, Je) => Gn == null ? void 0 : Gn(Ge, Je), () => ({
        ripple: !v() && f() === "filled",
        unbounded: !1,
        addClass: Ke,
        removeClass: Re,
        addStyle: ot,
        eventTarget: o(pe),
        activeTarget: o(pe),
        initPromise: V
      })), De($, (Ge, Je) => ae == null ? void 0 : ae(Ge, Je), a), A(G, $);
    }, sr = (G) => {
      var $ = Av();
      He($, (ct, Ht, sn) => ({ class: ct, style: Ht, ...sn }), [
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
          ...ee,
          [s()]: !0
        }),
        () => Object.entries(ce).map(([ct, Ht]) => `${ct}: ${Ht};`).concat([u()]).join(" "),
        () => Ea(P, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Te = N($);
      {
        var lt = (ct) => {
          var Ht = oe(), sn = K(Ht);
          _e(sn, () => e.label ?? Ie), A(ct, Ht);
        };
        te(Te, (ct) => {
          typeof e.label != "string" && ct(lt);
        });
      }
      var It = q(Te, 2);
      Ya(It, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (ct, Ht) => {
          var sn = oe(), Er = K(sn);
          _e(Er, () => e.leadingIcon ?? Ie), A(ct, sn);
        },
        $$slots: { default: !0 }
      });
      var Zt = q(It, 2);
      _e(Zt, () => e.children ?? Ie);
      var an = q(Zt, 2);
      Ya(an, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (ct, Ht) => {
          var sn = oe(), Er = K(sn);
          _e(Er, () => e.trailingIcon ?? Ie), A(ct, sn);
        },
        $$slots: { default: !0 }
      });
      var xi = q(an, 2);
      _e(xi, () => e.line ?? Ie), Se($, (ct) => j = ct, () => j), De($, (ct, Ht) => Gn == null ? void 0 : Gn(ct, Ht), () => ({
        ripple: l(),
        unbounded: !1,
        addClass: Ke,
        removeClass: Re,
        addStyle: ot
      })), De($, (ct, Ht) => ae == null ? void 0 : ae(ct, Ht), a), A(G, $);
    };
    te(Nt, (G) => {
      ie ? G(vn) : G(sr, !1);
    });
  }
  var me = q(Nt, 2);
  {
    var Z = (G) => {
      {
        let $ = /* @__PURE__ */ re(() => ut(P, "helperLine$"));
        cv(G, Qe(() => o($), {
          children: (Te, lt) => {
            var It = oe(), Zt = K(It);
            _e(Zt, () => e.helper ?? Ie), A(Te, It);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    te(me, (G) => {
      e.helper && G(Z);
    });
  }
  return A(n, Fe), Ae(ve);
}
var xv = /* @__PURE__ */ X("<i><!></i>");
function Sv(n, e) {
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
  let b = /* @__PURE__ */ le(void 0);
  const y = /* @__PURE__ */ re(() => ({ role: e.role, tabindex: u() })), x = ye("SMUI:textfield:leading-icon:mount"), E = ye("SMUI:textfield:leading-icon:unmount"), C = ye("SMUI:textfield:trailing-icon:mount"), w = ye("SMUI:textfield:trailing-icon:unmount");
  it(() => (B(
    v,
    new av({
      getAttr: I,
      setAttr: S,
      removeAttr: _,
      setContent: (H) => {
        B(b, H, !0);
      },
      registerInteractionHandler: (H, U) => f.on(T(), H, U),
      deregisterInteractionHandler: (H, U) => f.off(T(), H, U),
      notifyIconAction: () => Be(T(), "SMUITextFieldIcon")
    }),
    !0
  ), p ? x && x(o(v)) : C && C(o(v)), o(v).init(), () => {
    var H;
    o(v) && (p ? E && E(o(v)) : w && w(o(v))), (H = o(v)) == null || H.destroy(), f.clear();
  }));
  function I(H) {
    return H in h ? h[H] ?? null : T().getAttribute(H);
  }
  function S(H, U) {
    h[H] !== U && (h[H] = U);
  }
  function _(H) {
    (!(H in h) || h[H] != null) && (h[H] = void 0);
  }
  function T() {
    return d;
  }
  var R = { getElement: T }, D = xv();
  He(
    D,
    (H) => ({
      class: H,
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
    var P = (H) => {
      var U = oe(), ee = K(U);
      _e(ee, () => e.children ?? Ie), A(H, U);
    }, ie = (H) => {
      var U = rt();
      ue(() => Me(U, o(b))), A(H, U);
    };
    te(L, (H) => {
      o(b) == null ? H(P) : H(ie, !1);
    });
  }
  Se(D, (H) => d = H, () => d), De(D, (H, U) => ae == null ? void 0 : ae(H, U), a), A(n, D);
  var j = Ae(R);
  return i(), j;
}
function eu(n, e) {
  Ce(e, !0);
  let t = m(e, "placeholder", 3, ""), r = m(e, "label", 3, ""), i = m(e, "icon", 3, ""), a = m(e, "value", 15, ""), s = m(e, "variant", 3, "standard"), u = m(e, "styles", 3, ""), l = m(e, "required", 3, !1);
  var c = oe(), d = K(c);
  {
    var v = (h) => {
      {
        const g = (b) => {
          Sv(b, {
            class: "material-icons",
            children: (y, x) => {
              var E = rt();
              ue(() => Me(E, i())), A(y, E);
            },
            $$slots: { default: !0 }
          });
        };
        let p = /* @__PURE__ */ re(() => `width: 100%; ${u()}`);
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
          set value(b) {
            a(b);
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
    te(d, (h) => {
      i() ? h(v) : h(f, !1);
    });
  }
  A(n, c), Ae();
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
var wv = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, Tv = {
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
var Tr, cr, ke = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
Tr = {}, Tr["" + ke.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", Tr["" + ke.LIST_ITEM_CLASS] = "mdc-list-item", Tr["" + ke.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", Tr["" + ke.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", Tr["" + ke.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", Tr["" + ke.ROOT] = "mdc-list";
var Ri = (cr = {}, cr["" + ke.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", cr["" + ke.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", cr["" + ke.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", cr["" + ke.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", cr["" + ke.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", cr["" + ke.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", cr["" + ke.ROOT] = "mdc-deprecated-list", cr), Dr = {
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
var Dv = ["input", "button", "textarea", "select"], En = function(n) {
  var e = n.target;
  if (e) {
    var t = ("" + e.tagName).toLowerCase();
    Dv.indexOf(t) === -1 && n.preventDefault();
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
function Lv() {
  var n = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return n;
}
function Rv(n, e) {
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
    nu(e);
  }, vt.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + t;
  var l;
  return e.typeaheadBuffer.length === 1 ? l = Ov(i, a, u, e) : l = Mv(i, u, e), l !== -1 && !s && r(l), l;
}
function Ov(n, e, t, r) {
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
function Mv(n, e, t) {
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
function tu(n) {
  return n.typeaheadBuffer.length > 0;
}
function nu(n) {
  n.typeaheadBuffer = "";
}
function kl(n, e) {
  var t = n.event, r = n.isTargetListItem, i = n.focusedItemIndex, a = n.focusItemAtIndex, s = n.sortedIndexByFirstChar, u = n.isItemAtIndexDisabled, l = _t(t) === "ArrowLeft", c = _t(t) === "ArrowUp", d = _t(t) === "ArrowRight", v = _t(t) === "ArrowDown", f = _t(t) === "Home", h = _t(t) === "End", g = _t(t) === "Enter", p = _t(t) === "Spacebar";
  if (t.altKey || t.ctrlKey || t.metaKey || l || c || d || v || f || h || g)
    return -1;
  var b = !p && t.key.length === 1;
  if (b) {
    En(t);
    var y = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: t.key.toLowerCase(),
      sortedIndexByFirstChar: s,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return _o(y, e);
  }
  if (!p)
    return -1;
  r && En(t);
  var x = r && tu(e);
  if (x) {
    var y = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: " ",
      sortedIndexByFirstChar: s,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return _o(y, e);
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
function Fv(n) {
  return n instanceof Array;
}
var Pv = ["Alt", "Control", "Meta", "Shift"];
function Gl(n) {
  var e = new Set(n ? Pv.filter(function(t) {
    return n.getModifierState(t);
  }) : []);
  return function(t) {
    return t.every(function(r) {
      return e.has(r);
    }) && t.length === e.size;
  };
}
var kv = (
  /** @class */
  function(n) {
    In(e, n);
    function e(t) {
      var r = n.call(this, je(je({}, e.defaultAdapter), t)) || this;
      return r.wrapFocus = !1, r.isVertical = !0, r.isSingleSelectionList = !1, r.areDisabledItemsFocusable = !0, r.selectedIndex = vt.UNSET_INDEX, r.focusedItemIndex = vt.UNSET_INDEX, r.useActivatedClass = !1, r.useSelectedAttr = !1, r.ariaCurrentAttrValue = null, r.isCheckboxList = !1, r.isRadioList = !1, r.lastSelectedIndex = null, r.hasTypeahead = !1, r.typeaheadState = Lv(), r.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), r;
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
      return this.hasTypeahead && tu(this.typeaheadState);
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
      var a = this, s, u = _t(t) === "ArrowLeft", l = _t(t) === "ArrowUp", c = _t(t) === "ArrowRight", d = _t(t) === "ArrowDown", v = _t(t) === "Home", f = _t(t) === "End", h = _t(t) === "Enter", g = _t(t) === "Spacebar", p = this.isVertical && d || !this.isVertical && c, b = this.isVertical && l || !this.isVertical && u, y = t.key === "A" || t.key === "a", x = Gl(t);
      if (this.adapter.isRootFocused()) {
        if ((b || f) && x([]))
          t.preventDefault(), this.focusLastElement();
        else if ((p || v) && x([]))
          t.preventDefault(), this.focusFirstElement();
        else if (b && x(["Shift"]) && this.isCheckboxList) {
          t.preventDefault();
          var E = this.focusLastElement();
          E !== -1 && this.setSelectedIndexOnAction(E, !1);
        } else if (p && x(["Shift"]) && this.isCheckboxList) {
          t.preventDefault();
          var E = this.focusFirstElement();
          E !== -1 && this.setSelectedIndexOnAction(E, !1);
        }
        if (this.hasTypeahead) {
          var C = {
            event: t,
            focusItemAtIndex: function(S) {
              a.focusItemAtIndex(S);
            },
            focusedItemIndex: -1,
            isTargetListItem: r,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(S) {
              return a.isIndexDisabled(S);
            }
          };
          kl(C, this.typeaheadState);
        }
        return;
      }
      var w = this.adapter.getFocusedElementIndex();
      if (!(w === -1 && (w = i, w < 0))) {
        if (p && x([]))
          En(t), this.focusNextElement(w);
        else if (b && x([]))
          En(t), this.focusPrevElement(w);
        else if (p && x(["Shift"]) && this.isCheckboxList) {
          En(t);
          var E = this.focusNextElement(w);
          E !== -1 && this.setSelectedIndexOnAction(E, !1);
        } else if (b && x(["Shift"]) && this.isCheckboxList) {
          En(t);
          var E = this.focusPrevElement(w);
          E !== -1 && this.setSelectedIndexOnAction(E, !1);
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
          var C = {
            event: t,
            focusItemAtIndex: function(_) {
              a.focusItemAtIndex(_);
            },
            focusedItemIndex: this.focusedItemIndex,
            isTargetListItem: r,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(_) {
              return a.isIndexDisabled(_);
            }
          };
          kl(C, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(t, r, i) {
      var a, s = Gl(i);
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
      for (var a = new Set(this.selectedIndex === vt.UNSET_INDEX ? [] : this.selectedIndex), s = !(a != null && a.has(i)), u = xl([t, r].sort(), 2), l = u[0], c = u[1], d = this.getSelectionAttribute(), v = [], f = l; f <= c; f++)
        if (!this.isIndexDisabled(f)) {
          var h = a.has(f);
          s !== h && (v.push(f), this.adapter.setCheckedCheckboxOrRadioAtIndex(f, s), this.adapter.setAttributeForElementIndex(f, d, "" + s), s ? a.add(f) : a.delete(f));
        }
      v.length && (this.selectedIndex = Ff([], xl(a)), this.adapter.notifySelectionChange(v));
    }, e.prototype.setTabindexAtIndex = function(t) {
      this.focusedItemIndex === vt.UNSET_INDEX && t !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== t && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== t && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), t !== vt.UNSET_INDEX && this.adapter.setAttributeForElementIndex(t, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var t = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(t);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== vt.UNSET_INDEX ? this.selectedIndex : Fv(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(t, r) {
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
      return Rv(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      nu(this.typeaheadState);
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
var ru = (
  /** @class */
  function(n) {
    In(e, n);
    function e(t) {
      var r = n.call(this, je(je({}, e.defaultAdapter), t)) || this;
      return r.isSurfaceOpen = !1, r.isQuickOpen = !1, r.isHoistedElement = !1, r.isFixedPosition = !1, r.isHorizontallyCenteredOnViewport = !1, r.maxHeight = 0, r.openBottomBias = 0, r.openAnimationEndTimerId = 0, r.closeAnimationEndTimerId = 0, r.animationRequestId = 0, r.anchorCorner = hi.TOP_START, r.originCorner = hi.TOP_START, r.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, r.position = { x: 0, y: 0 }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return wv;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Tv;
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
      var b, y;
      p ? (b = i.left + a.width + this.anchorMargin.right, y = i.right - this.anchorMargin.right) : (b = i.left + this.anchorMargin.left, y = i.right + a.width - this.anchorMargin.left);
      var x = b - s.width > 0, E = y - s.width > 0, C = this.hasBit(t, ht.FLIP_RTL) && this.hasBit(t, ht.RIGHT);
      return E && C && f || !x && C ? t = this.unsetBit(t, ht.RIGHT) : (x && p && f || x && !p && g || !E && b >= y) && (t = this.setBit(t, ht.RIGHT)), t;
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
}, Gv = {
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
var Nv = (
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
        return Gv;
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
        }, ru.numbers.TRANSITION_CLOSE_DURATION);
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
var Zv = (
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
        return dt;
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
      this.disabled = t, this.disabled ? (this.adapter.addClass(dt.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(dt.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
    }, e.prototype.openMenu = function() {
      this.adapter.addClass(dt.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true");
    }, e.prototype.setHelperTextContent = function(t) {
      this.helperText && this.helperText.setContent(t);
    }, e.prototype.layout = function() {
      if (this.adapter.hasLabel()) {
        var t = this.getValue().length > 0, r = this.adapter.hasClass(dt.FOCUSED), i = t || r, a = this.adapter.hasClass(dt.REQUIRED);
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
      this.adapter.removeClass(dt.ACTIVATED), this.isMenuOpen = !1, this.adapter.isSelectAnchorFocused() || this.blur();
    }, e.prototype.handleChange = function() {
      this.layout(), this.adapter.notifyChange(this.getValue());
      var t = this.adapter.hasClass(dt.REQUIRED);
      t && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.handleMenuItemAction = function(t) {
      this.setSelectedIndex(
        t,
        /** closeMenu */
        !0
      );
    }, e.prototype.handleFocus = function() {
      this.adapter.addClass(dt.FOCUSED), this.layout(), this.adapter.activateBottomLine();
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
      if (!(this.isMenuOpen || !this.adapter.hasClass(dt.FOCUSED))) {
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
        var r = this.adapter.hasClass(dt.FOCUSED);
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
      this.useDefaultValidation || (this.customValidity = t), this.adapter.setSelectAnchorAttr("aria-invalid", (!t).toString()), t ? (this.adapter.removeClass(dt.INVALID), this.adapter.removeMenuClass(dt.MENU_INVALID)) : (this.adapter.addClass(dt.INVALID), this.adapter.addMenuClass(dt.MENU_INVALID)), this.syncHelperTextValidity(t);
    }, e.prototype.isValid = function() {
      return this.useDefaultValidation && this.adapter.hasClass(dt.REQUIRED) && !this.adapter.hasClass(dt.DISABLED) ? this.getSelectedIndex() !== ei.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(t) {
      t ? this.adapter.addClass(dt.REQUIRED) : this.adapter.removeClass(dt.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", t.toString()), this.adapter.setLabelRequired(t);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var t = this.adapter.getAnchorElement();
      t && (this.adapter.setMenuAnchorElement(t), this.adapter.setMenuAnchorCorner(hi.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(dt.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(dt.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(dt.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var t = this.adapter.hasClass(dt.REQUIRED);
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
var Hv = (
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
), Bv = /* @__PURE__ */ X("<div><!></div>");
function Uv(n, e) {
  Ce(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "static", 3, !1), s = m(e, "anchor", 3, !0), u = m(e, "fixed", 3, !1), l = m(e, "open", 31, () => Ee(a())), c = m(e, "managed", 3, !1), d = m(e, "fullWidth", 3, !1), v = m(e, "quickOpen", 3, !1), f = m(e, "anchorElement", 15), h = m(e, "anchorMargin", 19, () => ({ top: 0, right: 0, bottom: 0, left: 0 })), g = m(e, "maxHeight", 3, 0), p = m(e, "horizontallyCenteredOnViewport", 3, !1), b = m(e, "openBottomBias", 3, 0), y = m(e, "neverRestoreFocus", 3, !1), x = /* @__PURE__ */ Ve(e, [
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
  ]), E, C = /* @__PURE__ */ le(void 0), w = Ee({}), I = Ee({}), S = /* @__PURE__ */ le(void 0);
  de("SMUI:list:role", "menu"), de("SMUI:list:item:role", "menuitem"), xe(() => {
    var O, Q;
    E && s() && !((O = E.parentElement) != null && O.classList.contains("mdc-menu-surface--anchor")) && ((Q = E.parentElement) == null || Q.classList.add("mdc-menu-surface--anchor"), f(E.parentElement ?? void 0));
  }), xe(() => {
    o(C) && o(C).isOpen() !== l() && (l() ? o(C).open() : o(C).close());
  }), xe(() => {
    o(C) && o(C).setQuickOpen(v());
  }), xe(() => {
    o(C) && o(C).setFixedPosition(u());
  }), xe(() => {
    o(C) && o(C).setMaxHeight(g());
  }), xe(() => {
    o(C) && o(C).setIsHorizontallyCenteredOnViewport(p());
  });
  const _ = hi;
  xe(() => {
    o(C) && e.anchorCorner != null && (typeof e.anchorCorner == "string" ? o(C).setAnchorCorner(_[e.anchorCorner]) : o(C).setAnchorCorner(e.anchorCorner));
  }), xe(() => {
    o(C) && o(C).setAnchorMargin(h());
  }), xe(() => {
    o(C) && o(C).setOpenBottomBias(b());
  });
  const T = ye("SMUI:menu-surface:mount"), R = ye("SMUI:menu-surface:unmount");
  it(() => {
    B(
      C,
      new ru({
        addClass: L,
        removeClass: P,
        hasClass: D,
        hasAnchor: () => !!f(),
        notifyClose: () => {
          c() || l(a()), l() || Be(ne(), "SMUIMenuSurfaceClosed");
        },
        notifyClosing: () => {
          c() || l(a()), l() || Be(ne(), "SMUIMenuSurfaceClosing");
        },
        notifyOpen: () => {
          c() || l(!0), l() && Be(ne(), "SMUIMenuSurfaceOpened");
        },
        notifyOpening: () => {
          l() || Be(ne(), "SMUIMenuSurfaceOpening");
        },
        isElementInContainer: (Q) => ne().contains(Q),
        isRtl: () => getComputedStyle(ne()).getPropertyValue("direction") === "rtl",
        setTransformOrigin: (Q) => {
          I["transform-origin"] = Q;
        },
        isFocused: () => document.activeElement === ne(),
        saveFocus: () => {
          B(S, document.activeElement ?? void 0, !0);
        },
        restoreFocus: () => {
          !y() && (!E || ne().contains(document.activeElement)) && o(S) && document.contains(o(S)) && "focus" in o(S) && o(S).focus();
        },
        getInnerDimensions: () => ({
          width: ne().offsetWidth,
          height: ne().offsetHeight
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
    const O = {
      get open() {
        return l();
      },
      set open(Q) {
        l(Q);
      },
      closeProgrammatic: ie
    };
    return T && T(O), o(C).init(), () => {
      var Y, ge;
      R && R(O);
      const Q = o(C).isHoistedElement;
      (Y = o(C)) == null || Y.destroy(), Q && ((ge = ne().parentNode) == null || ge.removeChild(ne()));
    };
  }), Fn(() => {
    var O;
    s() && ne() && ((O = ne().parentElement) == null || O.classList.remove("mdc-menu-surface--anchor"));
  });
  function D(O) {
    return O in w ? w[O] : ne().classList.contains(O);
  }
  function L(O) {
    w[O] || (w[O] = !0);
  }
  function P(O) {
    (!(O in w) || w[O]) && (w[O] = !1);
  }
  function ie(O) {
    var Q;
    (Q = o(C)) == null || Q.close(O), l(!1);
  }
  function j(O) {
    o(C) && l() && !c() && o(C).handleBodyClick(O);
  }
  function H() {
    return l();
  }
  function U(O) {
    l(O);
  }
  function ee(O, Q) {
    if (o(C) == null)
      throw new Error("Instance is not defined.");
    return o(C).setAbsolutePosition(O, Q);
  }
  function ce(O) {
    if (o(C) == null)
      throw new Error("Instance is not defined.");
    return o(C).setIsHoisted(O);
  }
  function k() {
    if (o(C) == null)
      throw new Error("Instance is not defined.");
    return o(C).isFixed();
  }
  function J() {
    if (o(C) == null)
      throw new Error("Instance is not defined.");
    return o(C).flipCornerHorizontally();
  }
  function ne() {
    return E;
  }
  var be = {
    isOpen: H,
    setOpen: U,
    setAbsolutePosition: ee,
    setIsHoisted: ce,
    isFixed: k,
    flipCornerHorizontally: J,
    getElement: ne
  }, fe = Bv();
  Pt("click", Bo.body, j, !0);
  var W = (O) => {
    var Q;
    o(C) && !c() && o(C).handleKeydown(O), (Q = e.onkeydown) == null || Q.call(e, O);
  };
  He(
    fe,
    (O, Q) => ({
      class: O,
      style: Q,
      role: "dialog",
      ...x,
      onkeydown: W
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
      () => Object.entries(I).map(([O, Q]) => `${O}: ${Q};`).concat([i()]).join(" ")
    ]
  );
  var V = N(fe);
  return _e(V, () => e.children ?? Ie), Se(fe, (O) => E = O, () => E), De(fe, (O, Q) => ae == null ? void 0 : ae(O, Q), t), A(n, fe), Ae(be);
}
function to(n, { addClass: e = (r) => n.classList.add(r), removeClass: t = (r) => n.classList.remove(r) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      t("mdc-menu-surface--anchor");
    }
  };
}
function Wv(n, e) {
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
  de("SMUI:menu-surface:mount", (_) => {
    o(v) || B(v, _, !0);
  });
  const h = ye("SMUI:list:mount");
  de("SMUI:list:mount", (_) => {
    o(f) || B(f, _, !0), h && h(_);
  });
  const g = ye("SMUI:menu:mount"), p = ye("SMUI:menu:unmount");
  it(() => (B(
    d,
    new Nv({
      addClassToElementAtIndex: (_, T) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).addClassForElementIndex(_, T);
      },
      removeClassFromElementAtIndex: (_, T) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).removeClassForElementIndex(_, T);
      },
      addAttributeToElementAtIndex: (_, T, R) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).setAttributeForElementIndex(_, T, R);
      },
      removeAttributeFromElementAtIndex: (_, T) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).removeAttributeForElementIndex(_, T);
      },
      getAttributeFromElementAtIndex: (_, T) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return o(f).getAttributeFromElementIndex(_, T);
      },
      elementContainsClass: (_, T) => _.classList.contains(T),
      closeSurface: (_) => {
        var T;
        u() || ((T = o(v)) == null || T.closeProgrammatic(_), Be(I(), "SMUIMenuClosedProgrammatically"));
      },
      getElementIndex: (_) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return o(f).getOrderedList().map((T) => T.element).indexOf(_);
      },
      notifySelected: (_) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        Be(I(), "SMUIMenuSelected", {
          index: _.index,
          item: o(f).getOrderedList()[_.index].element
        });
      },
      getMenuItemCount: () => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return o(f).items.length;
      },
      focusItemAtIndex: (_) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).focusItemAtIndex(_);
      },
      focusListRoot: () => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        "focus" in o(f).element && o(f).element.focus();
      },
      isSelectableItemAtIndex: (_) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return !!t(o(f).getOrderedList()[_].element, `.${Ni.MENU_SELECTION_GROUP}`);
      },
      getSelectedSiblingOfItemAtIndex: (_) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        const T = o(f).getOrderedList(), R = t(T[_].element, `.${Ni.MENU_SELECTION_GROUP}`), D = R == null ? void 0 : R.querySelector(`.${Ni.MENU_SELECTED_LIST_ITEM}`);
        return D ? T.map((L) => L.element).indexOf(D) : -1;
      }
    }),
    !0
  ), g && g(o(d)), o(d).init(), () => {
    var _;
    p && o(d) && p(o(d)), (_ = o(d)) == null || _.destroy();
  }));
  function b(_) {
    o(d) && o(d).handleKeydown(_);
  }
  function y() {
    return a();
  }
  function x(_) {
    a(_);
  }
  function E(_) {
    if (o(d) == null)
      throw new Error("Instance is undefined.");
    o(d).setDefaultFocusState(_);
  }
  function C() {
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
  var S = {
    isOpen: y,
    setOpen: x,
    setDefaultFocusState: E,
    getSelectedIndex: C,
    getMenuSurface: w,
    getElement: I
  };
  {
    let _ = /* @__PURE__ */ re(() => Ze({ "mdc-menu": !0, [i()]: !0 }));
    Se(
      Uv(n, Qe(
        {
          get use() {
            return r();
          },
          get class() {
            return o(_);
          },
          get managed() {
            return u();
          }
        },
        () => l,
        {
          onkeydown: (T) => {
            var R;
            b(T), (R = e.onkeydown) == null || R.call(e, T);
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
            _e(L, () => e.children ?? Ie), A(T, D);
          },
          $$slots: { default: !0 }
        }
      )),
      (T) => c = T,
      () => c
    );
  }
  return Ae(S);
}
function jv(n, e) {
  Ce(e, !0);
  const { closest: t, matches: r } = ka;
  let i = ye("SMUI:list:nav"), a = m(e, "use", 19, () => []), s = m(e, "class", 3, ""), u = m(e, "nonInteractive", 3, !1), l = m(e, "dense", 3, !1), c = m(e, "textualList", 3, !1), d = m(e, "avatarList", 3, !1), v = m(e, "iconList", 3, !1), f = m(e, "imageList", 3, !1), h = m(e, "thumbnailList", 3, !1), g = m(e, "videoList", 3, !1), p = m(e, "twoLine", 3, !1), b = m(e, "threeLine", 3, !1), y = m(e, "vertical", 3, !0), x = m(e, "wrapFocus", 19, () => ye("SMUI:list:wrapFocus") ?? !1), E = m(e, "singleSelection", 3, !1), C = m(e, "disabledItemsFocusable", 3, !1), w = m(e, "selectedIndex", 31, () => -1), I = m(e, "radioList", 3, !1), S = m(e, "checkList", 3, !1), _ = m(e, "hasTypeahead", 3, !1), T = m(e, "component", 3, Os), R = m(e, "tag", 3, i ? "nav" : "ul"), D = /* @__PURE__ */ Ve(e, [
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
  ]), L, P = /* @__PURE__ */ le(void 0), ie = [], j = ye("SMUI:list:role");
  const H = /* @__PURE__ */ new WeakMap();
  let U = ye("SMUI:dialog:selection"), ee = ye("SMUI:addLayoutListener"), ce;
  de("SMUI:list:nonInteractive", u()), de("SMUI:separator:context", "list"), j || (E() ? (j = "listbox", de("SMUI:list:item:role", "option")) : I() ? (j = "radiogroup", de("SMUI:list:item:role", "radio")) : S() ? (j = "group", de("SMUI:list:item:role", "checkbox")) : (j = "list", de("SMUI:list:item:role", void 0))), xe(() => {
    o(P) && o(P).setVerticalOrientation(y());
  }), xe(() => {
    o(P) && o(P).setWrapFocus(x());
  }), xe(() => {
    o(P) && o(P).setHasTypeahead(_());
  }), xe(() => {
    o(P) && o(P).setSingleSelection(E());
  }), xe(() => {
    o(P) && o(P).setDisabledItemsFocusable(C());
  }), xe(() => {
    o(P) && E() && F() !== w() && o(P).setSelectedIndex(w());
  }), ee && (ce = ee(ot)), de("SMUI:list:item:mount", (me) => {
    ie.push(me), H.set(me.element, me), E() && me.selected && w(Re(me.element));
  }), de("SMUI:list:item:unmount", (me) => {
    const Z = (me && ie.findIndex((G) => G === me)) ?? -1;
    Z !== -1 && (ie.splice(Z, 1), H.delete(me.element));
  });
  const k = ye("SMUI:list:mount"), J = ye("SMUI:list:unmount");
  it(() => {
    B(
      P,
      new kv({
        addClassForElementIndex: Y,
        focusItemAtIndex: ve,
        getAttributeForElementIndex: (Z, G) => {
          var $;
          return (($ = O()[Z]) == null ? void 0 : $.getAttr(G)) ?? null;
        },
        getFocusedElementIndex: () => document.activeElement ? O().map((Z) => Z.element).indexOf(document.activeElement) : -1,
        getListItemCount: () => ie.length,
        getPrimaryTextAtIndex: Ke,
        hasCheckboxAtIndex: (Z) => {
          var G;
          return ((G = O()[Z]) == null ? void 0 : G.hasCheckbox) ?? !1;
        },
        hasRadioAtIndex: (Z) => {
          var G;
          return ((G = O()[Z]) == null ? void 0 : G.hasRadio) ?? !1;
        },
        isCheckboxCheckedAtIndex: (Z) => {
          const G = O()[Z];
          return ((G == null ? void 0 : G.hasCheckbox) && G.checked) ?? !1;
        },
        isFocusInsideList: () => L != null && Fe() !== document.activeElement && Fe().contains(document.activeElement),
        isRootFocused: () => L != null && document.activeElement === Fe(),
        listItemAtIndexHasClass: Q,
        notifyAction: (Z) => {
          w(Z), L != null && Be(Fe(), "SMUIListAction", { index: Z });
        },
        notifySelectionChange: (Z) => {
          L != null && Be(Fe(), "SMUIListSelectionChange", { changedIndices: Z });
        },
        removeClassForElementIndex: ge,
        setAttributeForElementIndex: pe,
        setCheckedCheckboxOrRadioAtIndex: (Z, G) => {
          O()[Z].checked = G;
        },
        setTabIndexForListItemChildren: (Z, G) => {
          const $ = O()[Z];
          Array.prototype.forEach.call($.element.querySelectorAll("button:not(:disabled), a"), (lt) => {
            lt.setAttribute("tabindex", G);
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
        return ie;
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
      getOrderedList: O,
      focusItemAtIndex: ve,
      addClassForElementIndex: Y,
      removeClassForElementIndex: ge,
      setAttributeForElementIndex: pe,
      removeAttributeForElementIndex: Ne,
      getAttributeFromElementIndex: tt,
      getPrimaryTextAtIndex: Ke
    };
    return k && k(me), o(P).init(), o(P).layout(), () => {
      var Z;
      J && J(me), (Z = o(P)) == null || Z.destroy();
    };
  }), Fn(() => {
    ce && ce();
  });
  function ne(me) {
    o(P) && me.target && o(P).handleKeydown(me, me.target.classList.contains("mdc-deprecated-list-item"), Re(me.target));
  }
  function be(me) {
    o(P) && me.target && o(P).handleFocusIn(Re(me.target));
  }
  function fe(me) {
    o(P) && me.target && o(P).handleFocusOut(Re(me.target));
  }
  function W(me) {
    o(P) && me.target && o(P).handleClick(Re(me.target), !r(me.target, 'input[type="checkbox"], input[type="radio"]'), me);
  }
  function V(me) {
    if (I() || S()) {
      const Z = Re(me.target);
      if (Z !== -1) {
        const G = O()[Z];
        G && (I() && !G.checked || S()) && (r(me.detail.target, 'input[type="checkbox"], input[type="radio"]') || (G.checked = !G.checked), G.activateRipple(), window.requestAnimationFrame(() => {
          G.deactivateRipple();
        }));
      }
    }
  }
  function O() {
    return L == null ? [] : [...Fe().children].map((me) => H.get(me)).filter((me) => me && me._smui_list_item_accessor);
  }
  function Q(me, Z) {
    const G = O()[me];
    return (G && G.hasClass(Z)) ?? !1;
  }
  function Y(me, Z) {
    const G = O()[me];
    G && G.addClass(Z);
  }
  function ge(me, Z) {
    const G = O()[me];
    G && G.removeClass(Z);
  }
  function pe(me, Z, G) {
    const $ = O()[me];
    $ && $.addAttr(Z, G);
  }
  function Ne(me, Z) {
    const G = O()[me];
    G && G.removeAttr(Z);
  }
  function tt(me, Z) {
    const G = O()[me];
    return G ? G.getAttr(Z) : null;
  }
  function Ke(me) {
    const Z = O()[me];
    return (Z && Z.getPrimaryText()) ?? "";
  }
  function Re(me) {
    const Z = t(me, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return Z && r(Z, ".mdc-deprecated-list-item") ? O().map((G) => G == null ? void 0 : G.element).indexOf(Z) : -1;
  }
  function ot() {
    if (!o(P))
      throw new Error("Instance is undefined.");
    return o(P).layout();
  }
  function kt(me, Z) {
    if (!o(P))
      throw new Error("Instance is undefined.");
    return o(P).setEnabled(me, Z);
  }
  function Gt() {
    if (!o(P))
      throw new Error("Instance is undefined.");
    return o(P).isTypeaheadInProgress();
  }
  function F() {
    if (!o(P))
      throw new Error("Instance is undefined.");
    return o(P).getSelectedIndex();
  }
  function z() {
    if (!o(P))
      throw new Error("Instance is undefined.");
    return o(P).getFocusedItemIndex();
  }
  function ve(me) {
    const Z = O()[me];
    Z && "focus" in Z.element && Z.element.focus();
  }
  function Fe() {
    return L.getElement();
  }
  var Nt = {
    layout: ot,
    setEnabled: kt,
    getTypeaheadInProgress: Gt,
    getSelectedIndex: F,
    getFocusedItemIndex: z,
    focusItemAtIndex: ve,
    getElement: Fe
  }, vn = oe(), sr = K(vn);
  {
    let me = /* @__PURE__ */ re(() => Ze({
      "mdc-deprecated-list": !0,
      "mdc-deprecated-list--non-interactive": u(),
      "mdc-deprecated-list--dense": l(),
      "mdc-deprecated-list--textual-list": c(),
      "mdc-deprecated-list--avatar-list": d() || U,
      "mdc-deprecated-list--icon-list": v(),
      "mdc-deprecated-list--image-list": f(),
      "mdc-deprecated-list--thumbnail-list": h(),
      "mdc-deprecated-list--video-list": g(),
      "mdc-deprecated-list--two-line": p(),
      "smui-list--three-line": b() && !p(),
      [s()]: !0
    }));
    Pa(sr, T, (Z, G) => {
      Se(
        G(Z, Qe(
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
              return j;
            }
          },
          () => D,
          {
            onkeydown: ($) => {
              var Te;
              ne($), (Te = e.onkeydown) == null || Te.call(e, $);
            },
            onfocusin: ($) => {
              var Te;
              be($), (Te = e.onfocusin) == null || Te.call(e, $);
            },
            onfocusout: ($) => {
              var Te;
              fe($), (Te = e.onfocusout) == null || Te.call(e, $);
            },
            onclick: ($) => {
              var Te;
              W($), (Te = e.onclick) == null || Te.call(e, $);
            },
            onSMUIAction: ($) => {
              var Te;
              V($), (Te = e.onSMUIAction) == null || Te.call(e, $);
            },
            children: ($, Te) => {
              var lt = oe(), It = K(lt);
              _e(It, () => e.children ?? Ie), A($, lt);
            },
            $$slots: { default: !0 }
          }
        )),
        ($) => L = $,
        () => L
      );
    });
  }
  return A(n, vn), Ae(Nt);
}
let Vv = 0;
var zv = /* @__PURE__ */ X('<span class="mdc-deprecated-list-item__ripple"></span>'), Xv = /* @__PURE__ */ X("<!><!>", 1);
function Yv(n, e) {
  Ce(e, !0);
  let t = () => {
  };
  function r(Y) {
    return Y === t;
  }
  let i = ye("SMUI:list:item:nav"), a = m(e, "use", 19, () => []), s = m(e, "class", 3, ""), u = m(e, "style", 3, ""), l = m(e, "nonInteractive", 19, () => ye("SMUI:list:nonInteractive") ?? !1), c = m(e, "ripple", 19, () => !l()), d = m(e, "wrapper", 3, !1), v = m(e, "activated", 15, !1), f = m(e, "role", 19, () => d() ? "presentation" : ye("SMUI:list:item:role")), h = m(e, "selected", 15, !1), g = m(e, "disabled", 3, !1), p = m(e, "skipRestoreFocus", 3, !1), b = m(e, "tabindex", 15, t), y = m(e, "inputId", 19, () => "SMUI-form-field-list-" + Vv++), x = m(e, "component", 3, Os), E = m(e, "tag", 19, () => i ? e.href ? "a" : "span" : "li"), C = /* @__PURE__ */ Ve(e, [
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
  let w, I = Ee({}), S = Ee({}), _ = Ee({}), T = /* @__PURE__ */ le(void 0), R = /* @__PURE__ */ le(void 0);
  const D = /* @__PURE__ */ re(() => r(b()) ? !l() && !g() && (h() || o(T) && o(T).checked) ? 0 : -1 : b());
  de("SMUI:generic:input:props", { id: y() }), de("SMUI:separator:context", void 0), de("SMUI:generic:input:mount", (Y) => {
    ("_smui_checkbox_accessor" in Y || "_smui_radio_accessor" in Y) && B(T, Y, !0);
  }), de("SMUI:generic:input:unmount", () => {
    B(T, void 0);
  });
  const L = ye("SMUI:list:item:mount"), P = ye("SMUI:list:item:unmount");
  it(() => {
    if (!h() && !l()) {
      let ge = !0, pe = w.getElement();
      for (; pe.previousElementSibling; )
        if (pe = pe.previousElementSibling, pe.nodeType === 1 && pe.classList.contains("mdc-deprecated-list-item") && !pe.classList.contains("mdc-deprecated-list-item--disabled")) {
          ge = !1;
          break;
        }
      ge && B(R, window.requestAnimationFrame(() => J(pe)), !0);
    }
    const Y = {
      _smui_list_item_accessor: !0,
      get element() {
        return W();
      },
      get selected() {
        return h();
      },
      set selected(ge) {
        h(ge);
      },
      hasClass: ie,
      addClass: j,
      removeClass: H,
      getAttr: ee,
      addAttr: ce,
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
        b(ge);
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
      P && P(Y);
    };
  }), Fn(() => {
    o(R) && window.cancelAnimationFrame(o(R));
  });
  function ie(Y) {
    return Y in I ? I[Y] : W().classList.contains(Y);
  }
  function j(Y) {
    I[Y] || (I[Y] = !0);
  }
  function H(Y) {
    (!(Y in I) || I[Y]) && (I[Y] = !1);
  }
  function U(Y, ge) {
    S[Y] != ge && (ge === "" || ge == null ? delete S[Y] : S[Y] = ge);
  }
  function ee(Y) {
    return Y in _ ? _[Y] ?? null : W().getAttribute(Y);
  }
  function ce(Y, ge) {
    _[Y] !== ge && (_[Y] = ge);
  }
  function k(Y) {
    (!(Y in _) || _[Y] != null) && (_[Y] = void 0);
  }
  function J(Y) {
    let ge = !0;
    for (; Y.nextElementSibling; )
      if (Y = Y.nextElementSibling, Y.nodeType === 1 && Y.classList.contains("mdc-deprecated-list-item")) {
        const pe = Y.attributes.getNamedItem("tabindex");
        if (pe && pe.value === "0") {
          ge = !1;
          break;
        }
      }
    ge && b(0);
  }
  function ne(Y) {
    const ge = Y.key === "Enter", pe = Y.key === "Space";
    (ge || pe) && be(Y);
  }
  function be(Y) {
    g() || Be(W(), "SMUIAction", Y);
  }
  function fe() {
    const Y = W(), ge = Y.querySelector(".mdc-deprecated-list-item__primary-text");
    if (ge)
      return ge.textContent ?? "";
    const pe = Y.querySelector(".mdc-deprecated-list-item__text");
    return pe ? pe.textContent ?? "" : Y.textContent ?? "";
  }
  function W() {
    return w.getElement();
  }
  var V = { action: be, getPrimaryText: fe, getElement: W }, O = oe(), Q = K(O);
  {
    let Y = /* @__PURE__ */ re(() => [
      ...l() ? [] : [
        [
          Gn,
          {
            ripple: !o(T),
            unbounded: !1,
            color: (v() || h()) && e.color == null ? "primary" : e.color,
            disabled: g(),
            addClass: j,
            removeClass: H,
            addStyle: U
          }
        ]
      ],
      ...a()
    ]), ge = /* @__PURE__ */ re(() => Ze({
      "mdc-deprecated-list-item": !d(),
      "mdc-deprecated-list-item__wrapper": d(),
      "mdc-deprecated-list-item--activated": v(),
      "mdc-deprecated-list-item--selected": h(),
      "mdc-deprecated-list-item--disabled": g(),
      "mdc-menu-item--selected": !i && f() === "menuitem" && h(),
      "smui-menu-item--non-interactive": l(),
      ...I,
      [s()]: !0
    })), pe = /* @__PURE__ */ re(() => Object.entries(S).map(([tt, Ke]) => `${tt}: ${Ke};`).concat([u()]).join(" ")), Ne = /* @__PURE__ */ re(() => p() || void 0);
    Pa(Q, x, (tt, Ke) => {
      Se(
        Ke(tt, Qe(
          {
            get tag() {
              return E();
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
          () => _,
          () => C,
          {
            onclick: (Re) => {
              var ot;
              be(Re), (ot = e.onclick) == null || ot.call(e, Re);
            },
            onkeydown: (Re) => {
              var ot;
              ne(Re), (ot = e.onkeydown) == null || ot.call(e, Re);
            },
            children: (Re, ot) => {
              var kt = Xv(), Gt = K(kt);
              {
                var F = (ve) => {
                  var Fe = zv();
                  A(ve, Fe);
                };
                te(Gt, (ve) => {
                  c() && ve(F);
                });
              }
              var z = q(Gt);
              _e(z, () => e.children ?? Ie), A(Re, kt);
            },
            $$slots: { default: !0 }
          }
        )),
        (Re) => w = Re,
        () => w
      );
    });
  }
  return A(n, O), Ae(V);
}
let qv = 0;
var Kv = /* @__PURE__ */ X("<div><!></div>");
function Qv(n, e) {
  Ce(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "id", 19, () => "SMUI-select-helper-text-" + qv++), a = m(e, "persistent", 3, !1), s = m(e, "validationMsg", 3, !1), u = /* @__PURE__ */ Ve(e, [
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
  it(() => (B(
    c,
    new Hv({
      addClass: y,
      removeClass: x,
      hasClass: b,
      getAttr: E,
      setAttr: C,
      removeAttr: w,
      setContent: (L) => {
        B(f, L, !0);
      }
    }),
    !0
  ), h && h(i()), g && g(o(c)), o(c).init(), () => {
    var L;
    p && o(c) && p(o(c)), (L = o(c)) == null || L.destroy();
  }));
  function b(L) {
    return L in d ? d[L] : I().classList.contains(L);
  }
  function y(L) {
    d[L] || (d[L] = !0);
  }
  function x(L) {
    (!(L in d) || d[L]) && (d[L] = !1);
  }
  function E(L) {
    return L in v ? v[L] ?? null : I().getAttribute(L);
  }
  function C(L, P) {
    v[L] !== P && (v[L] = P);
  }
  function w(L) {
    (!(L in v) || v[L] != null) && (v[L] = void 0);
  }
  function I() {
    return l;
  }
  var S = { getElement: I }, _ = Kv();
  He(
    _,
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
  var T = N(_);
  {
    var R = (L) => {
      var P = oe(), ie = K(P);
      _e(ie, () => e.children ?? Ie), A(L, P);
    }, D = (L) => {
      var P = rt();
      ue(() => Me(P, o(f))), A(L, P);
    };
    te(T, (L) => {
      o(f) == null ? L(R) : L(D, !1);
    });
  }
  return Se(_, (L) => l = L, () => l), De(_, (L, P) => ae == null ? void 0 : ae(L, P), t), A(n, _), Ae(S);
}
let Jv = 0;
var $v = /* @__PURE__ */ X("<input/>"), eh = /* @__PURE__ */ X('<span class="mdc-select__ripple"></span>'), th = /* @__PURE__ */ X('<div><!> <div><!> <!> <!> <!> <span><span> </span></span> <span><svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"><polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon><polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon></svg></span> <!></div> <!></div> <!>', 1);
function nh(n, e) {
  Ce(e, !0);
  const t = () => Ii(Fe, "$selectedTextStore", r), [r, i] = Ei();
  let a = () => {
  };
  function s(M) {
    return M === a;
  }
  let u = m(e, "use", 19, () => []), l = m(e, "class", 3, ""), c = m(e, "style", 3, ""), d = m(e, "ripple", 3, !0), v = m(e, "disabled", 3, !1), f = m(e, "variant", 3, "standard"), h = m(e, "noLabel", 3, !1), g = m(e, "label", 3, void 0), p = m(e, "value", 15), b = m(e, "key", 3, (M) => M), y = m(e, "dirty", 15, !1), x = m(e, "invalid", 15, a), E = m(e, "updateInvalid", 19, () => s(x())), C = m(e, "required", 3, !1), w = m(e, "inputId", 19, () => "SMUI-select-" + Jv++), I = m(e, "hiddenInput", 3, !1), S = m(e, "withLeadingIcon", 3, a), _ = m(e, "anchor$use", 19, () => []), T = m(e, "anchor$class", 3, ""), R = m(e, "selectedTextContainer$use", 19, () => []), D = m(e, "selectedTextContainer$class", 3, ""), L = m(e, "selectedText$use", 19, () => []), P = m(e, "selectedText$class", 3, ""), ie = m(e, "dropdownIcon$use", 19, () => []), j = m(e, "dropdownIcon$class", 3, ""), H = m(e, "menu$class", 3, ""), U = /* @__PURE__ */ Ve(e, [
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
  const ee = s(x());
  s(x()) && x(!1);
  let ce, k = /* @__PURE__ */ le(void 0), J = Ee({}), ne = Ee({}), be, fe = Ee({}), W = /* @__PURE__ */ le(-1);
  const V = /* @__PURE__ */ re(() => U.menu$id ?? w() + "-menu");
  let O = /* @__PURE__ */ le(void 0), Q = ye("SMUI:addLayoutListener"), Y, ge = /* @__PURE__ */ le(!1), pe = Ee({}), Ne = /* @__PURE__ */ le(void 0), tt = /* @__PURE__ */ le(void 0), Ke = /* @__PURE__ */ le(!1), Re, ot = ye("SMUI:select:context"), kt, Gt, F, z, ve;
  de("SMUI:list:role", ""), de("SMUI:list:nav", !1);
  const Fe = jn("");
  de("SMUI:select:selectedText", Fe);
  const Nt = jn(p());
  xe(() => {
    nr(Nt, p());
  }), de("SMUI:select:value", Nt), xe(() => {
    o(k) && o(k).getValue() !== b()(p()) && o(k).setValue(b()(p()));
  });
  let vn = o(W);
  xe(() => {
    if (vn !== o(W))
      if (vn = o(W), o(k))
        o(k).setSelectedIndex(
          o(W),
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const M = an();
        p() !== M[o(W)] && p(M[o(W)]);
      }
  }), xe(() => {
    o(k) && o(k).getDisabled() !== v() && o(k).setDisabled(v());
  }), xe(() => {
    o(k) && y() && o(k).isValid() !== !x() && (E() ? x(!o(k).isValid()) : o(k).setValid(!x()));
  }), xe(() => {
    o(k) && o(k).getRequired() !== C() && o(k).setRequired(C());
  }), Q && (Y = Q(Ba)), de("SMUI:select:leading-icon:mount", (M) => {
    kt = M;
  }), de("SMUI:select:leading-icon:unmount", () => {
    kt = void 0;
  }), de("SMUI:list:mount", (M) => {
    Re = M;
  }), de("SMUI:select:helper-text:id", (M) => {
    B(O, M, !0);
  }), de("SMUI:select:helper-text:mount", (M) => {
    Gt = M;
  }), de("SMUI:select:helper-text:unmount", () => {
    B(O, void 0), Gt = void 0;
  }), it(() => (B(
    k,
    new Zv(
      {
        // getSelectAdapterMethods
        // getMenuItemAttr: (menuItem: Element, attr: string) =>
        //   menuItem.getAttribute(attr),
        setSelectedText: (M) => {
          nr(Fe, M);
        },
        isSelectAnchorFocused: () => document.activeElement === be,
        getSelectAnchorAttr: lt,
        setSelectAnchorAttr: It,
        removeSelectAnchorAttr: Zt,
        addMenuClass: $,
        removeMenuClass: Te,
        openMenu: () => {
          B(ge, !0);
        },
        closeMenu: () => {
          B(ge, !1);
        },
        getAnchorElement: () => be,
        setMenuAnchorElement: (M) => {
          B(Ne, M, !0);
        },
        setMenuAnchorCorner: (M) => {
          B(tt, M, !0);
        },
        setMenuWrapFocus: (M) => {
          B(Ke, M, !0);
        },
        getSelectedIndex: () => o(W),
        setSelectedIndex: (M) => {
          vn = M, B(W, M, !0), p(an()[o(W)]);
        },
        focusMenuItemAtIndex: (M) => {
          Re.focusItemAtIndex(M);
        },
        getMenuItemCount: () => Re.items.length,
        getMenuItemValues: () => an().map(b()),
        getMenuItemTextAtIndex: (M) => Re.getPrimaryTextAtIndex(M),
        isTypeaheadInProgress: () => Re.typeaheadInProgress,
        typeaheadMatchItem: (M, he) => Re.typeaheadMatchItem(M, he),
        // getCommonAdapterMethods
        addClass: me,
        removeClass: Z,
        hasClass: sr,
        setRippleCenter: (M) => z && z.setRippleCenter(M),
        activateBottomLine: () => z && z.activate(),
        deactivateBottomLine: () => z && z.deactivate(),
        notifyChange: (M) => {
          var he;
          y(!0), E() && x(!((he = o(k)) != null && he.isValid())), Be(xr(), "SMUISelectChange", { value: p(), index: o(W) });
        },
        // getOutlineAdapterMethods
        hasOutline: () => !!ve,
        notchOutline: (M) => ve && ve.notch(M),
        closeOutline: () => ve && ve.closeNotch(),
        // getLabelAdapterMethods
        hasLabel: () => !!F,
        floatLabel: (M) => F && F.float(M),
        getLabelWidth: () => F ? F.getWidth() : 0,
        setLabelRequired: (M) => F && F.setRequired(M)
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
  ), B(W, an().indexOf(p()), !0), o(k).init(), sn(ee), () => {
    var M;
    (M = o(k)) == null || M.destroy();
  })), Fn(() => {
    Y && Y();
  });
  function sr(M) {
    return M in J ? J[M] : xr().classList.contains(M);
  }
  function me(M) {
    J[M] || (J[M] = !0);
  }
  function Z(M) {
    (!(M in J) || J[M]) && (J[M] = !1);
  }
  function G(M, he) {
    ne[M] != he && (he === "" || he == null ? delete ne[M] : ne[M] = he);
  }
  function $(M) {
    pe[M] || (pe[M] = !0);
  }
  function Te(M) {
    (!(M in pe) || pe[M]) && (pe[M] = !1);
  }
  function lt(M) {
    return M in fe ? fe[M] ?? null : xr().getAttribute(M);
  }
  function It(M, he) {
    fe[M] !== he && (fe[M] = he);
  }
  function Zt(M) {
    (!(M in fe) || fe[M] != null) && (fe[M] = void 0);
  }
  function an() {
    return Re.getOrderedList().map((M) => M.getValue());
  }
  function xi(M) {
    const he = M.currentTarget.getBoundingClientRect();
    return (ct(M) ? M.touches[0].clientX : M.clientX) - he.left;
  }
  function ct(M) {
    return "touches" in M;
  }
  function Ht() {
    if (o(k) == null)
      throw new Error("Instance is undefined.");
    return o(k).getUseDefaultValidation();
  }
  function sn(M) {
    var he;
    (he = o(k)) == null || he.setUseDefaultValidation(M);
  }
  function Er() {
    be.focus();
  }
  function Ba() {
    var M;
    (M = o(k)) == null || M.layout();
  }
  function xr() {
    return ce;
  }
  var Ge = {
    getUseDefaultValidation: Ht,
    setUseDefaultValidation: sn,
    focus: Er,
    layout: Ba,
    getElement: xr
  }, Je = th(), ze = K(Je);
  He(ze, (M, he, nt) => ({ class: M, style: he, ...nt }), [
    () => Ze({
      "mdc-select": !0,
      "mdc-select--required": C(),
      "mdc-select--disabled": v(),
      "mdc-select--filled": f() === "filled",
      "mdc-select--outlined": f() === "outlined",
      "smui-select--standard": f() === "standard",
      "mdc-select--with-leading-icon": s(S()) ? e.leadingIcon : S(),
      "mdc-select--no-label": h() || g() == null,
      "mdc-select--invalid": x(),
      "mdc-select--activated": o(ge),
      "mdc-data-table__pagination-rows-per-page-select": ot === "data-table:pagination",
      ...J,
      [l()]: !0
    }),
    () => Object.entries(ne).map(([M, he]) => `${M}: ${he};`).concat([c()]).join(" "),
    () => Ea(U, [
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
    var Pn = (M) => {
      var he = $v();
      He(
        he,
        (nt) => ({
          type: "hidden",
          required: C(),
          disabled: v(),
          value: p(),
          ...nt
        }),
        [() => ut(U, "input$")],
        void 0,
        void 0,
        !0
      ), A(M, he);
    };
    te(Bt, (M) => {
      I() && M(Pn);
    });
  }
  var $e = q(Bt, 2), Ct = (M) => {
    var he;
    be.focus(), o(k) && o(k).handleClick(xi(M)), (he = e.anchor$onclick) == null || he.call(e, M);
  }, Lt = (M) => {
    var he;
    o(k) && o(k).handleKeydown(M), (he = e.onkeydown) == null || he.call(e, M);
  }, We = (M) => {
    var he;
    o(k) && o(k).handleBlur(), Be(xr(), "blur", M), (he = e.anchor$onblur) == null || he.call(e, M);
  }, Rt = (M) => {
    var he;
    o(k) && o(k).handleFocus(), Be(xr(), "focus", M), (he = e.anchor$onfocus) == null || he.call(e, M);
  };
  He(
    $e,
    (M, he) => ({
      class: M,
      "aria-required": C() ? "true" : void 0,
      "aria-disabled": v() ? "true" : void 0,
      "aria-controls": o(V),
      "aria-expanded": o(ge) ? "true" : "false",
      "aria-describedby": o(O),
      role: "combobox",
      tabindex: "0",
      ...fe,
      ...he,
      onclick: Ct,
      onkeydown: Lt,
      onblur: We,
      onfocus: Rt
    }),
    [
      () => Ze({ "mdc-select__anchor": !0, [T()]: !0 }),
      () => ut(U, "anchor$")
    ]
  );
  var or = N($e);
  {
    var _n = (M) => {
      var he = eh();
      A(M, he);
    };
    te(or, (M) => {
      f() === "filled" && M(_n);
    });
  }
  var At = q(or, 2);
  {
    var Ut = (M) => {
      {
        let he = /* @__PURE__ */ re(() => w() + "-smui-label"), nt = /* @__PURE__ */ re(() => t() !== ""), Et = /* @__PURE__ */ re(() => ut(U, "label$"));
        Se(
          us(M, Qe(
            {
              get id() {
                return o(he);
              },
              get floatAbove() {
                return o(nt);
              },
              get required() {
                return C();
              }
            },
            () => o(Et),
            {
              children: (dr, ur) => {
                var oa = oe(), Si = K(oa);
                {
                  var Kr = (Qr) => {
                  }, js = (Qr) => {
                    var Ua = oe(), la = K(Ua);
                    {
                      var al = (wr) => {
                        var Jr = rt();
                        ue(() => Me(Jr, g())), A(wr, Jr);
                      }, Wa = (wr) => {
                        var Jr = oe(), Vs = K(Jr);
                        _e(Vs, g), A(wr, Jr);
                      };
                      te(
                        la,
                        (wr) => {
                          typeof g() == "string" ? wr(al) : wr(Wa, !1);
                        },
                        !0
                      );
                    }
                    A(Qr, Ua);
                  };
                  te(Si, (Qr) => {
                    g() == null ? Qr(Kr) : Qr(js, !1);
                  });
                }
                A(dr, oa);
              },
              $$slots: { default: !0 }
            }
          )),
          (dr) => F = dr,
          () => F
        );
      }
    };
    te(At, (M) => {
      f() !== "outlined" && !h() && g() != null && M(Ut);
    });
  }
  var yn = q(At, 2);
  {
    var qt = (M) => {
      {
        let he = /* @__PURE__ */ re(() => h() || g() == null), nt = /* @__PURE__ */ re(() => ut(U, "outline$"));
        Se(
          $d(M, Qe(
            {
              get noLabel() {
                return o(he);
              }
            },
            () => o(nt),
            {
              children: (Et, dr) => {
                var ur = oe(), oa = K(ur);
                {
                  var Si = (Kr) => {
                    {
                      let js = /* @__PURE__ */ re(() => w() + "-smui-label"), Qr = /* @__PURE__ */ re(() => t() !== ""), Ua = /* @__PURE__ */ re(() => ut(U, "label$"));
                      Se(
                        us(Kr, Qe(
                          {
                            get id() {
                              return o(js);
                            },
                            get floatAbove() {
                              return o(Qr);
                            },
                            get required() {
                              return C();
                            }
                          },
                          () => o(Ua),
                          {
                            children: (la, al) => {
                              var Wa = oe(), wr = K(Wa);
                              {
                                var Jr = (da) => {
                                }, Vs = (da) => {
                                  var sl = oe(), Bu = K(sl);
                                  {
                                    var Uu = (wi) => {
                                      var ua = rt();
                                      ue(() => Me(ua, g())), A(wi, ua);
                                    }, Wu = (wi) => {
                                      var ua = oe(), ju = K(ua);
                                      _e(ju, g), A(wi, ua);
                                    };
                                    te(
                                      Bu,
                                      (wi) => {
                                        typeof g() == "string" ? wi(Uu) : wi(Wu, !1);
                                      },
                                      !0
                                    );
                                  }
                                  A(da, sl);
                                };
                                te(wr, (da) => {
                                  g() == null ? da(Jr) : da(Vs, !1);
                                });
                              }
                              A(la, Wa);
                            },
                            $$slots: { default: !0 }
                          }
                        )),
                        (la) => F = la,
                        () => F
                      );
                    }
                  };
                  te(oa, (Kr) => {
                    !h() && g() != null && Kr(Si);
                  });
                }
                A(Et, ur);
              },
              $$slots: { default: !0 }
            }
          )),
          (Et) => ve = Et,
          () => ve
        );
      }
    };
    te(yn, (M) => {
      f() === "outlined" && M(qt);
    });
  }
  var Yr = q(yn, 2);
  _e(Yr, () => e.leadingIcon ?? Ie);
  var Cn = q(Yr, 2);
  He(Cn, (M, he) => ({ class: M, ...he }), [
    () => Ze({
      "mdc-select__selected-text-container": !0,
      [D()]: !0
    }),
    () => ut(U, "selectedTextContainer$")
  ]);
  var Sr = N(Cn);
  He(
    Sr,
    (M, he) => ({
      id: w() + "-smui-selected-text",
      class: M,
      role: "button",
      "aria-haspopup": "listbox",
      "aria-labelledby": w() + "-smui-label",
      ...he
    }),
    [
      () => Ze({
        "mdc-select__selected-text": !0,
        [P()]: !0
      }),
      () => ut(U, "selectedText$")
    ]
  );
  var sa = N(Sr);
  De(Sr, (M, he) => ae == null ? void 0 : ae(M, he), L), De(Cn, (M, he) => ae == null ? void 0 : ae(M, he), R);
  var An = q(Cn, 2);
  He(An, (M, he) => ({ class: M, ...he }), [
    () => Ze({
      "mdc-select__dropdown-icon": !0,
      [j()]: !0
    }),
    () => ut(U, "dropdownIcon$")
  ]), De(An, (M, he) => ae == null ? void 0 : ae(M, he), ie);
  var lr = q(An, 2);
  {
    var zn = (M) => {
      {
        let he = /* @__PURE__ */ re(() => ut(U, "ripple$"));
        Se(Jd(M, Qe(() => o(he))), (nt) => z = nt, () => z);
      }
    };
    te(lr, (M) => {
      f() !== "outlined" && d() && M(zn);
    });
  }
  Se($e, (M) => be = M, () => be), De($e, (M, he) => ae == null ? void 0 : ae(M, he), _);
  var qr = q($e, 2);
  {
    let M = /* @__PURE__ */ re(() => Ze({
      "mdc-select__menu": !0,
      ...pe,
      [H()]: !0
    })), he = /* @__PURE__ */ re(() => ut(U, "menu$"));
    Wv(qr, Qe(
      {
        get class() {
          return o(M);
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
          B(ge, nt, !0);
        },
        children: (nt, Et) => {
          {
            let dr = /* @__PURE__ */ re(() => ut(U, "list$"));
            jv(nt, Qe(
              {
                role: "listbox",
                get wrapFocus() {
                  return o(Ke);
                }
              },
              () => o(dr),
              {
                get selectedIndex() {
                  return o(W);
                },
                set selectedIndex(ur) {
                  B(W, ur, !0);
                },
                children: (ur, oa) => {
                  var Si = oe(), Kr = K(Si);
                  _e(Kr, () => e.children ?? Ie), A(ur, Si);
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
  Se(ze, (M) => ce = M, () => ce), De(ze, (M, he) => Gn == null ? void 0 : Gn(M, he), () => ({
    ripple: f() === "filled",
    unbounded: !1,
    addClass: me,
    removeClass: Z,
    addStyle: G
  })), De(ze, (M, he) => to == null ? void 0 : to(M, he), () => ({ addClass: me, removeClass: Z })), De(ze, (M, he) => ae == null ? void 0 : ae(M, he), u);
  var Ws = q(ze, 2);
  {
    var Zu = (M) => {
      {
        let he = /* @__PURE__ */ re(() => ut(U, "helperText$"));
        Qv(M, Qe(() => o(he), {
          children: (nt, Et) => {
            var dr = oe(), ur = K(dr);
            _e(ur, () => e.helperText ?? Ie), A(nt, dr);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    te(Ws, (M) => {
      e.helperText && M(Zu);
    });
  }
  ue(() => Me(sa, t())), A(n, Je);
  var Hu = Ae(Ge);
  return i(), Hu;
}
function rh(n, e) {
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
  const v = /* @__PURE__ */ re(() => s() != null && s() !== "" && t() === s());
  it(f), Fn(f);
  function f() {
    o(v) && l && nr(c, l.getPrimaryText());
  }
  function h() {
    return l.getElement();
  }
  var g = { getElement: h };
  Se(
    Yv(n, Qe(
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
        children: (b, y) => {
          var x = oe(), E = K(x);
          _e(E, () => e.children ?? Ie), A(b, x);
        },
        $$slots: { default: !0 }
      }
    )),
    (b) => l = b,
    () => l
  );
  var p = Ae(g);
  return i(), p;
}
function ih(n, e) {
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
  nh(n, {
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
      cn(h, 17, t, br, (g, p, b) => {
        {
          let y = /* @__PURE__ */ re(() => c(b));
          rh(g, {
            get onclick() {
              return o(y);
            },
            get value() {
              return o(p).value;
            },
            children: (x, E) => {
              var C = rt();
              ue(() => Me(C, o(p).label)), A(x, C);
            },
            $$slots: { default: !0 }
          });
        }
      }), A(d, f);
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
function ah(n) {
  return n ? n.scrollHeight > n.offsetHeight : !1;
}
function sh(n) {
  return n ? n.scrollTop === 0 : !1;
}
function oh(n) {
  return n ? Math.ceil(n.scrollHeight - n.scrollTop) === n.clientHeight : !1;
}
function lh(n) {
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
var dh = (
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
var uh = (
  /** @class */
  function(n) {
    In(e, n);
    function e(t) {
      var r = n.call(this, je(je({}, e.defaultAdapter), t)) || this;
      return r.dialogOpen = !1, r.isFullscreen = !1, r.animationFrame = 0, r.animationTimer = 0, r.escapeKeyAction = ha.CLOSE_ACTION, r.scrimClickAction = ha.CLOSE_ACTION, r.autoStackButtons = !0, r.areButtonsStacked = !1, r.suppressDefaultPressSelector = ha.SUPPRESS_DEFAULT_PRESS_SELECTOR, r.animFrame = new dh(), r.contentScrollHandler = function() {
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
), ch = /* @__PURE__ */ X('<div class="mdc-dialog__surface-scrim"></div>'), fh = /* @__PURE__ */ X('<div><div><div><!> <!></div></div> <div class="mdc-dialog__scrim"></div></div> <!>', 1);
function vh(n, e) {
  Ce(e, !0);
  const t = () => Ii(L, "$aboveFullscreenShown", r), [r, i] = Ei(), { FocusTrap: a } = Wf, { closest: s, matches: u } = ka;
  let l = m(e, "use", 19, () => []), c = m(e, "class", 3, ""), d = m(e, "open", 15, !1), v = m(e, "selection", 3, !1), f = m(e, "escapeKeyAction", 3, "close"), h = m(e, "scrimClickAction", 3, "close"), g = m(e, "autoStackButtons", 3, !0), p = m(e, "fullscreen", 3, !1), b = m(e, "sheet", 3, !1), y = m(e, "noContentPadding", 3, !1), x = m(e, "container$class", 3, ""), E = m(e, "surface$class", 3, ""), C = /* @__PURE__ */ Ve(e, [
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
  ]), w, I = /* @__PURE__ */ le(void 0), S = new ra(), _ = Ee({}), T, R = jn(!1), D = ye("SMUI:dialog:aboveFullscreen"), L = ye("SMUI:dialog:aboveFullscreenShown") ?? jn(!1), P = ye("SMUI:addLayoutListener"), ie, j = [], H = (Z) => (j.push(Z), () => {
    const G = j.indexOf(Z);
    G >= 0 && j.splice(G, 1);
  });
  de("SMUI:dialog:actions:reversed", R), de("SMUI:addLayoutListener", H), de("SMUI:dialog:selection", v()), de("SMUI:dialog:aboveFullscreen", D || p()), de("SMUI:dialog:aboveFullscreenShown", L), b() && de("SMUI:icon-button:context", "dialog:sheet"), xe(() => {
    o(I) && o(I).getEscapeKeyAction() !== f() && o(I).setEscapeKeyAction(f());
  }), xe(() => {
    o(I) && o(I).getScrimClickAction() !== h() && o(I).setScrimClickAction(h());
  }), xe(() => {
    o(I) && o(I).getAutoStackButtons() !== g() && o(I).setAutoStackButtons(g());
  }), xe(() => {
    g() || nr(R, !0);
  }), P && (ie = P(ge)), xe(() => {
    o(I) && o(I).isOpen() !== d() && (d() ? o(I).open({ isAboveFullscreenDialog: !!D }) : o(I).close());
  });
  let U = t();
  xe(() => {
    p() && o(I) && U !== t() && (U = t(), t() ? o(I).showSurfaceScrim() : o(I).hideSurfaceScrim());
  }), it(() => (T = new a(w, { initialFocusEl: fe() ?? void 0 }), B(
    I,
    new uh({
      addBodyClass: (Z) => document.body.classList.add(Z),
      addClass: ce,
      areButtonsStacked: () => lh(J()),
      clickDefaultButton: () => {
        const Z = ne();
        Z && Z.click();
      },
      eventTargetMatches: (Z, G) => Z ? u(Z, G) : !1,
      getActionFromEvent: (Z) => {
        if (!Z.target)
          return "";
        const G = s(Z.target, "[data-mdc-dialog-action]");
        return G && G.getAttribute("data-mdc-dialog-action");
      },
      getInitialFocusEl: fe,
      hasClass: ee,
      isContentScrollable: () => ah(be()),
      notifyClosed: (Z) => {
        d(!1), Be(pe(), "SMUIDialogClosed", Z ? { action: Z } : {});
      },
      notifyClosing: (Z) => Be(pe(), "SMUIDialogClosing", Z ? { action: Z } : {}),
      notifyOpened: () => Be(pe(), "SMUIDialogOpened", {}),
      notifyOpening: () => Be(pe(), "SMUIDialogOpening", {}),
      releaseFocus: () => T.releaseFocus(),
      removeBodyClass: (Z) => document.body.classList.remove(Z),
      removeClass: k,
      reverseButtons: () => {
        nr(R, !0);
      },
      trapFocus: () => T.trapFocus(),
      registerContentEventHandler: (Z, G) => {
        const $ = be();
        $ instanceof HTMLElement && S.on($, Z, G);
      },
      deregisterContentEventHandler: (Z, G) => {
        const $ = be();
        $ instanceof HTMLElement && S.off($, Z, G);
      },
      isScrollableContentAtTop: () => sh(be()),
      isScrollableContentAtBottom: () => oh(be()),
      registerWindowEventHandler: (Z, G) => S.on(window, Z, G),
      deregisterWindowEventHandler: (Z, G) => S.off(window, Z, G)
    }),
    !0
  ), o(I).init(), () => {
    var Z;
    (Z = o(I)) == null || Z.destroy(), S.clear();
  })), Fn(() => {
    ie && ie();
  });
  function ee(Z) {
    return Z in _ ? _[Z] : pe().classList.contains(Z);
  }
  function ce(Z) {
    _[Z] || (_[Z] = !0);
  }
  function k(Z) {
    (!(Z in _) || _[Z]) && (_[Z] = !1);
  }
  function J() {
    return [].slice.call(pe().querySelectorAll(".mdc-dialog__button"));
  }
  function ne() {
    return pe().querySelector("[data-mdc-dialog-button-default]");
  }
  function be() {
    return pe().querySelector(".mdc-dialog__content");
  }
  function fe() {
    return pe().querySelector("[data-mdc-dialog-initial-focus]");
  }
  function W() {
    D && nr(L, !0), requestAnimationFrame(() => {
      j.forEach((Z) => Z());
    });
  }
  function V() {
    j.forEach((Z) => Z());
  }
  function O() {
    D && nr(L, !1);
  }
  function Q() {
    return d();
  }
  function Y(Z) {
    d(Z);
  }
  function ge() {
    var Z;
    return (Z = o(I)) == null ? void 0 : Z.layout();
  }
  function pe() {
    return w;
  }
  var Ne = { isOpen: Q, setOpen: Y, layout: ge, getElement: pe }, tt = fh();
  Pt("resize", ls, () => d() && o(I) && o(I).layout()), Pt("orientationchange", ls, () => d() && o(I) && o(I).layout()), Pt("keydown", Bo.body, (Z) => o(I) && o(I).handleDocumentKeydown(Z));
  var Ke = K(tt), Re = (Z) => {
    var G;
    W(), (G = e.onSMUIDialogOpening) == null || G.call(e, Z);
  }, ot = (Z) => {
    var G;
    V(), (G = e.onSMUIDialogOpened) == null || G.call(e, Z);
  }, kt = (Z) => {
    var G;
    O(), (G = e.onSMUIDialogClosed) == null || G.call(e, Z);
  }, Gt = (Z) => {
    var G;
    o(I) && o(I).handleClick(Z), (G = e.onclick) == null || G.call(e, Z);
  }, F = (Z) => {
    var G;
    o(I) && o(I).handleKeydown(Z), (G = e.onkeydown) == null || G.call(e, Z);
  };
  He(
    Ke,
    (Z, G) => ({
      class: Z,
      role: "alertdialog",
      "aria-modal": "true",
      ...G,
      onSMUIDialogOpening: Re,
      onSMUIDialogOpened: ot,
      onSMUIDialogClosed: kt,
      onclick: Gt,
      onkeydown: F
    }),
    [
      () => Ze({
        "mdc-dialog": !0,
        "mdc-dialog--stacked": !g(),
        "mdc-dialog--fullscreen": p(),
        "mdc-dialog--sheet": b(),
        "mdc-dialog--no-content-padding": y(),
        "smui-dialog--selection": v(),
        ..._,
        [c()]: !0
      }),
      () => Ea(C, ["container$", "surface$"])
    ]
  );
  var z = N(Ke);
  He(z, (Z, G) => ({ class: Z, ...G }), [
    () => Ze({ "mdc-dialog__container": !0, [x()]: !0 }),
    () => ut(C, "container$")
  ]);
  var ve = N(z);
  He(ve, (Z, G) => ({ class: Z, role: "alertdialog", "aria-modal": "true", ...G }), [
    () => Ze({ "mdc-dialog__surface": !0, [E()]: !0 }),
    () => ut(C, "surface$")
  ]);
  var Fe = N(ve);
  _e(Fe, () => e.children ?? Ie);
  var Nt = q(Fe, 2);
  {
    var vn = (Z) => {
      var G = ch();
      Pt("transitionend", G, () => o(I) && o(I).handleSurfaceScrimTransitionEnd()), A(Z, G);
    };
    te(Nt, (Z) => {
      p() && Z(vn);
    });
  }
  Se(Ke, (Z) => w = Z, () => w), De(Ke, (Z, G) => ae == null ? void 0 : ae(Z, G), l);
  var sr = q(Ke, 2);
  _e(sr, () => e.over ?? Ie), A(n, tt);
  var me = Ae(Ne);
  return i(), me;
}
function hh(n, e) {
  Ce(e, !0);
  let t = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Se(
    ia(n, Qe(
      {
        _smuiClass: "mdc-dialog__header",
        _smuiContexts: { "SMUI:icon-button:context": "dialog:header" },
        tag: "div"
      },
      () => t,
      {
        children: (s, u) => {
          var l = oe(), c = K(l);
          _e(c, () => e.children ?? Ie), A(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Ae(a);
}
function iu(n, e) {
  Ce(e, !0);
  let t = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Se(
    ia(n, Qe({ _smuiClass: "mdc-dialog__content", tag: "div" }, () => t, {
      children: (s, u) => {
        var l = oe(), c = K(l);
        _e(c, () => e.children ?? Ie), A(s, l);
      },
      $$slots: { default: !0 }
    })),
    (s) => r = s,
    () => r
  ), Ae(a);
}
function gh(n, e) {
  Ce(e, !0);
  let t = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Se(
    ia(n, Qe(
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
          _e(c, () => e.children ?? Ie), A(s, l);
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
function mh(n, e) {
  Ce(e, !0);
  let t = /* @__PURE__ */ le(void 0), r = /* @__PURE__ */ le(!1);
  const i = Ms.subscribe((l) => {
    B(t, l, !0), B(r, l.isOpen, !0);
  });
  it(() => () => i());
  var a = oe(), s = K(a);
  {
    var u = (l) => {
      var c = oe(), d = K(c);
      Pa(d, () => o(t).component, (v, f) => {
        f(v, Qe(() => o(t).props, {
          get open() {
            return o(r);
          },
          set open(h) {
            B(r, h, !0);
          }
        }));
      }), A(l, c);
    };
    te(s, (l) => {
      o(t).isOpen && o(t).component && l(u);
    });
  }
  A(n, a), Ae();
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
function Hr(n, e) {
  Ms.update((t) => {
    var r;
    return (r = t.resolve) == null || r.call(t, { type: n, data: e }), { component: null, props: {}, isOpen: !1 };
  });
}
function ph(n) {
  Ms.update((e) => e.isOpen ? { ...e, props: { ...e.props, ...n } } : e);
}
var Ih = /* @__PURE__ */ X('<div class="oscd-confirm-dialog__content svelte-1eipd40"> </div>');
function au(n, e) {
  Ce(e, !0);
  let t = m(e, "open", 15, !1), r = m(e, "title", 3, ""), i = m(e, "message", 3, ""), a = m(e, "confirmActionText", 3, "OK"), s = m(e, "confirmActionColor", 3, "primary"), u = m(e, "cancelActionText", 3, "Cancel"), l = m(e, "color", 3, "var(--mdc-theme-primary, #ff3e00)");
  function c() {
    Hr("confirm");
  }
  function d() {
    Hr("cancel");
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
      iu(f, {
        children: (h, g) => {
          var p = Ih(), b = N(p);
          ue(() => Me(b, i())), A(h, p);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { content: !0 }
  }), Ae();
}
var bh = /* @__PURE__ */ X('<div class="dialog__title svelte-ec2c4h"><h4 class="svelte-ec2c4h"> </h4> <!></div>'), _h = /* @__PURE__ */ X("<!> <!>", 1), yh = /* @__PURE__ */ X('<!> <!> <div class="dialog__actions svelte-ec2c4h"><!></div>', 1);
function zo(n, e) {
  Ce(e, !0);
  let t = m(e, "open", 15, !1), r = m(e, "title", 3, ""), i = m(e, "confirmActionText", 3, "Confirm"), a = m(e, "confirmActionColor", 3, "primary"), s = m(e, "cancelActionText", 3, "Cancel"), u = m(e, "width", 3, "80vw"), l = m(e, "maxWidth", 3, "85vw"), c = m(e, "height", 3, "85vh"), d = m(e, "maxHeight", 3, "85vh"), v = m(e, "confirmDisabled", 3, !1), f = m(e, "color", 3, "var(--mdc-theme-primary, #ff3e00)"), h = m(e, "showCloseButton", 3, !0), g = m(e, "onClose", 3, () => {
  }), p = m(e, "onCancel", 3, () => {
  }), b = m(e, "onConfirm", 3, () => {
  });
  function y(E) {
    E.detail.action === "cancel" ? p()() : E.detail.action === "confirm" ? b()() : (E.detail.action, g()());
  }
  let x = /* @__PURE__ */ re(() => {
    let E;
    return a() === "primary" ? E = f() : E = "#FF203A", v() ? "" : `background-color: ${E}; color: white;`;
  });
  {
    let E = /* @__PURE__ */ re(() => `width: ${u()}; max-width: ${l()}; height: ${c()}; max-height: ${d()};`);
    vh(n, {
      "aria-labelledby": "large-scroll-title",
      "aria-describedby": "large-scroll-content",
      onSMUIDialogClosed: y,
      get surface$style() {
        return o(E);
      },
      get open() {
        return t();
      },
      set open(C) {
        t(C);
      },
      children: (C, w) => {
        var I = yh(), S = K(I);
        hh(S, {
          children: (D, L) => {
            var P = bh(), ie = N(P), j = N(ie), H = q(ie, 2);
            {
              var U = (ee) => {
                vu(ee, {
                  onClick: () => {
                    t(!1), g()();
                  },
                  tooltip: "Close",
                  tooltipSide: "left",
                  type: "close",
                  fillColor: "white"
                });
              };
              te(H, (ee) => {
                h() && ee(U);
              });
            }
            ue(() => {
              qe(P, `background-color: ${f()};`), Me(j, r());
            }), A(D, P);
          },
          $$slots: { default: !0 }
        });
        var _ = q(S, 2);
        iu(_, {
          id: "dialog__content",
          children: (D, L) => {
            var P = oe(), ie = K(P);
            _e(ie, () => e.content ?? Ie), A(D, P);
          },
          $$slots: { default: !0 }
        });
        var T = q(_, 2), R = N(T);
        gh(R, {
          class: "oscd-dialog__actions",
          children: (D, L) => {
            var P = _h(), ie = K(P);
            {
              var j = (U) => {
                Vn(U, {
                  action: "cancel",
                  color: "secondary",
                  tabindex: "1",
                  children: (ee, ce) => {
                    var k = rt();
                    ue(() => Me(k, s())), A(ee, k);
                  },
                  $$slots: { default: !0 }
                });
              };
              te(ie, (U) => {
                s() && U(j);
              });
            }
            var H = q(ie, 2);
            Vn(H, {
              action: "confirm",
              get disabled() {
                return v();
              },
              get style() {
                return o(x);
              },
              tabindex: "0",
              children: (U, ee) => {
                var ce = rt();
                ue(() => Me(ce, i())), A(U, ce);
              },
              $$slots: { default: !0 }
            }), A(D, P);
          },
          $$slots: { default: !0 }
        }), A(C, I);
      },
      $$slots: { default: !0 }
    });
  }
  Ae();
}
var Ch = /* @__PURE__ */ X('<span class="oscd-icon"><!></span>');
function yt(n, e) {
  var t = Ch(), r = N(t);
  _e(r, () => e.children ?? Ie), A(n, t);
}
var Ah = /* @__PURE__ */ st('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function su(n, e) {
  let t = m(e, "svgStyles", 3, "");
  yt(n, {
    children: (r, i) => {
      var a = Ah();
      ue(() => qe(a, t())), A(r, a);
    }
  });
}
var Eh = /* @__PURE__ */ st('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function ou(n, e) {
  let t = m(e, "svgStyles", 3, "");
  yt(n, {
    children: (r, i) => {
      var a = Eh();
      ue(() => qe(a, t())), A(r, a);
    }
  });
}
var xh = /* @__PURE__ */ st('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function lu(n, e) {
  let t = m(e, "svgStyles", 3, "");
  yt(n, {
    children: (r, i) => {
      var a = xh();
      ue(() => qe(a, t())), A(r, a);
    }
  });
}
var Sh = /* @__PURE__ */ st('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"></path></svg>');
function du(n, e) {
  let t = m(e, "svgStyles", 3, "");
  yt(n, {
    children: (r, i) => {
      var a = Sh();
      ue(() => qe(a, t())), A(r, a);
    }
  });
}
var wh = /* @__PURE__ */ st('<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM2 12c0-2.79 1.64-5.2 4.01-6.32V3.52C2.52 4.76 0 8.09 0 12s2.52 7.24 6.01 8.48v-2.16C3.64 17.2 2 14.79 2 12zm13-9c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"></path></svg>');
function Th(n, e) {
  let t = m(e, "svgStyles", 3, "");
  yt(n, {
    children: (r, i) => {
      var a = wh();
      ue(() => qe(a, t())), A(r, a);
    }
  });
}
gc();
var Dh = /* @__PURE__ */ st('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24" height="24" fill="#004552"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"></path></svg>');
function uu(n) {
  var e = Dh();
  A(n, e);
}
var Lh = /* @__PURE__ */ st('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#004552"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Rh(n) {
  var e = Lh();
  A(n, e);
}
var Oh = /* @__PURE__ */ st('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"></path></svg>');
function Mh(n, e) {
  let t = m(e, "size", 3, "24px"), r = m(e, "fill", 3, "#004552");
  var i = Oh();
  ue(() => {
    mt(i, "height", t()), mt(i, "width", t()), mt(i, "fill", r());
  }), A(n, i);
}
var Fh = /* @__PURE__ */ st('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Ph(n, e) {
  let t = m(e, "svgStyles", 3, "");
  yt(n, {
    children: (r, i) => {
      var a = Fh();
      ue(() => qe(a, t())), A(r, a);
    }
  });
}
var kh = /* @__PURE__ */ st('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Gh(n, e) {
  let t = m(e, "svgStyles", 3, "");
  yt(n, {
    children: (r, i) => {
      var a = kh();
      ue(() => qe(a, t())), A(r, a);
    }
  });
}
var Nh = /* @__PURE__ */ st('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"></path></svg>');
function Zh(n, e) {
  let t = m(e, "svgStyles", 3, "");
  yt(n, {
    children: (r, i) => {
      var a = Nh();
      ue(() => qe(a, t())), A(r, a);
    }
  });
}
var Hh = /* @__PURE__ */ st('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"></path></svg>');
function Bh(n, e) {
  let t = m(e, "svgStyles", 3, "");
  yt(n, {
    children: (r, i) => {
      var a = Hh();
      ue(() => qe(a, t())), A(r, a);
    }
  });
}
var Uh = /* @__PURE__ */ st('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"><path d="m176-120-56-56 301-302-181-45 198-123-17-234 179 151 216-88-87 217 151 178-234-16-124 198-45-181-301 301Zm24-520-80-80 80-80 80 80-80 80Zm355 197 48-79 93 7-60-71 35-86-86 35-71-59 7 92-79 49 90 22 23 90Zm165 323-80-80 80-80 80 80-80 80ZM569-570Z"></path></svg>');
function Wh(n, e) {
  let t = m(e, "svgStyles", 3, "");
  yt(n, {
    children: (r, i) => {
      var a = Uh();
      ue(() => qe(a, t())), A(r, a);
    }
  });
}
var jh = /* @__PURE__ */ st('<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m770-302-60-62q40-11 65-42.5t25-73.5q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 57-29.5 105T770-302ZM634-440l-80-80h86v80h-6ZM792-56 56-792l56-56 736 736-56 56ZM440-280H280q-83 0-141.5-58.5T80-480q0-69 42-123t108-71l74 74h-24q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h65l79 80H320Z"></path></svg>');
function Vh(n, e) {
  let t = m(e, "svgStyles", 3, "");
  yt(n, {
    children: (r, i) => {
      var a = jh();
      ue(() => qe(a, t())), A(r, a);
    }
  });
}
var zh = /* @__PURE__ */ st('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"></path></svg>');
function Xh(n, e) {
  let t = m(e, "svgStyles", 3, "");
  yt(n, {
    children: (r, i) => {
      var a = zh();
      ue(() => qe(a, t())), A(r, a);
    }
  });
}
var Yh = /* @__PURE__ */ st('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"></path></svg>');
function qh(n, e) {
  let t = m(e, "svgStyles", 8, "");
  yt(n, {
    children: (r, i) => {
      var a = Yh();
      ue(() => qe(a, t())), A(r, a);
    }
  });
}
var Kh = /* @__PURE__ */ st('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3" cursor="pointer"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Xo(n, e) {
  let t = m(e, "svgStyles", 8, "");
  yt(n, {
    children: (r, i) => {
      var a = Kh();
      ue(() => qe(a, t())), A(r, a);
    }
  });
}
var Qh = /* @__PURE__ */ st('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m320-160-56-57 103-103H80v-80h287L264-503l56-57 200 200-200 200Zm320-240L440-600l200-200 56 57-103 103h287v80H593l103 103-56 57Z"></path></svg>');
function cu(n, e) {
  let t = m(e, "svgStyles", 8, "");
  yt(n, {
    children: (r, i) => {
      var a = Qh();
      ue(() => qe(a, t())), A(r, a);
    }
  });
}
var Jh = /* @__PURE__ */ st('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M360-160q-33 0-56.5-23.5T280-240q0-33 23.5-56.5T360-320q33 0 56.5 23.5T440-240q0 33-23.5 56.5T360-160Zm240 0q-33 0-56.5-23.5T520-240q0-33 23.5-56.5T600-320q33 0 56.5 23.5T680-240q0 33-23.5 56.5T600-160ZM360-400q-33 0-56.5-23.5T280-480q0-33 23.5-56.5T360-560q33 0 56.5 23.5T440-480q0 33-23.5 56.5T360-400Zm240 0q-33 0-56.5-23.5T520-480q0-33 23.5-56.5T600-560q33 0 56.5 23.5T680-480q0 33-23.5 56.5T600-400ZM360-640q-33 0-56.5-23.5T280-720q0-33 23.5-56.5T360-800q33 0 56.5 23.5T440-720q0 33-23.5 56.5T360-640Zm240 0q-33 0-56.5-23.5T520-720q0-33 23.5-56.5T600-800q33 0 56.5 23.5T680-720q0 33-23.5 56.5T600-640Z"></path></svg>');
function Fs(n, e) {
  let t = m(e, "svgStyles", 3, "fill: gray; width: 25px; height: 25px");
  yt(n, {
    children: (r, i) => {
      var a = Jh();
      ue(() => qe(a, t())), A(r, a);
    }
  });
}
var $h = /* @__PURE__ */ st('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-80 200-360l56-56 184 183v-647h80v647l184-184 56 57L480-80Z"></path></svg>');
function eg(n, e) {
  let t = m(e, "svgStyles", 3, "");
  yt(n, {
    children: (r, i) => {
      var a = $h();
      ue(() => qe(a, t())), A(r, a);
    }
  });
}
var tg = /* @__PURE__ */ st('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"></path></svg>');
function ng(n, e) {
  let t = m(e, "svgStyles", 3, "");
  yt(n, {
    children: (r, i) => {
      var a = tg();
      ue(() => qe(a, t())), A(r, a);
    }
  });
}
var rg = /* @__PURE__ */ st('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"></path></svg>');
function ig(n, e) {
  let t = m(e, "svgStyles", 3, "");
  yt(n, {
    children: (r, i) => {
      var a = rg();
      ue(() => qe(a, t())), A(r, a);
    }
  });
}
pt(["change"]);
pt(["change"]);
function ag(n, e, t, r) {
  e() && ((n.key === "Enter" || n.key === " ") && (n.preventDefault(), t()), n.key === "Escape" && (n.preventDefault(), r()));
}
var sg = /* @__PURE__ */ X('<span role="button" tabindex="0" aria-labelledby="tooltip"><!></span>');
function fu(n, e) {
  Ce(e, !0);
  let t = m(e, "content", 3, ""), r = m(e, "side", 3, "top"), i = m(e, "hoverDelay", 3, 0), a = m(e, "transitionDuration", 3, 80);
  const s = `tt-${Math.random().toString(36).slice(2)}`;
  let u = /* @__PURE__ */ le(null), l = /* @__PURE__ */ le(null), c = /* @__PURE__ */ le(null), d = /* @__PURE__ */ le(null), v = /* @__PURE__ */ le(!1), f = /* @__PURE__ */ le(null), h = /* @__PURE__ */ le(null);
  function g() {
    t() && (o(f) && clearTimeout(o(f)), i() > 0 ? B(f, setTimeout(() => B(v, !0), i()), !0) : B(v, !0));
  }
  function p() {
    o(f) && clearTimeout(o(f)), B(v, !1);
  }
  function b() {
    g();
  }
  function y() {
    p();
  }
  function x() {
    g();
  }
  function E() {
    p();
  }
  function C() {
    if (!o(l) || !o(d) || !o(u)) return;
    const _ = o(u).getBoundingClientRect(), T = o(d).getBoundingClientRect();
    let R = 0, D = 0;
    const L = 8;
    switch (r()) {
      case "top":
        R = _.top - T.height - L, D = _.left + _.width / 2 - T.width / 2;
        break;
      case "bottom":
        R = _.bottom + L, D = _.left + _.width / 2 - T.width / 2;
        break;
      case "left":
        R = _.top + _.height / 2 - T.height / 2, D = _.left - T.width - L;
        break;
      case "right":
        R = _.top + _.height / 2 - T.height / 2, D = _.right + L;
        break;
    }
    o(l).style.top = `${R + window.scrollY}px`, o(l).style.left = `${D + window.scrollX}px`;
  }
  function w() {
    var _;
    (_ = o(h)) == null || _.disconnect(), B(h, null), o(l) && o(l).parentNode && o(l).parentNode.removeChild(o(l)), B(l, null), B(d, null), B(c, null), o(f) && clearTimeout(o(f));
  }
  Fn(w), xe(() => {
    if (!(!o(v) || !t())) {
      if (!o(l)) {
        B(l, document.createElement("div"), !0), o(l).style.position = "absolute", o(l).style.zIndex = "9999", o(l).style.pointerEvents = "none", o(l).style.opacity = "0", o(l).style.transition = `opacity ${a()}ms ease`, o(l).id = s, o(l).setAttribute("role", "tooltip"), document.body.appendChild(o(l)), B(c, o(l).attachShadow({ mode: "open" }), !0);
        const _ = document.createElement("style");
        _.textContent = `
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
      `, o(c).appendChild(_), B(d, document.createElement("div"), !0), o(c).appendChild(o(d)), B(
          h,
          new MutationObserver(() => {
            o(v) && C();
          }),
          !0
        ), o(h).observe(document.body, { childList: !0, subtree: !0 });
      }
      o(d) && (o(d).className = `bubble ${r()}`, o(d).innerHTML = t()), o(l) && (o(l).style.opacity = "1", C());
    }
  }), xe(() => {
    if (o(v) || !o(l))
      return;
    o(l).style.opacity = "0";
    const _ = o(l), T = setTimeout(
      () => {
        _ && _.parentNode && _.parentNode.removeChild(_), o(l) === _ && w();
      },
      a()
    );
    return () => clearTimeout(T);
  });
  var I = sg();
  I.__keydown = [ag, t, g, p];
  var S = N(I);
  _e(S, () => e.children ?? Ie), Se(I, (_) => B(u, _), () => o(u)), ue(() => {
    mt(I, "aria-haspopup", t() ? "true" : void 0), mt(I, "aria-expanded", t() ? o(v) ? "true" : "false" : void 0), mt(I, "aria-describedby", t() ? s : void 0);
  }), Pt("mouseenter", I, b), Pt("mouseleave", I, y), Pt("focus", I, x), Pt("blur", I, E), A(n, I), Ae();
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
var vr = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, Nl = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, ni = {
  ARIA_SELECTED: Nl.ARIA_SELECTED,
  ARIA_SORT: Nl.ARIA_SORT
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
var og = (
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
      return Of(this, void 0, void 0, function() {
        return Mf(this, function(t) {
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
), lg = /* @__PURE__ */ X('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), dg = /* @__PURE__ */ X("<div><div><table><!></table></div> <!> <!></div>");
function ug(n, e) {
  Ce(e, !0);
  const t = () => Ii(P, "$progressClosed", r), [r, i] = Ei(), { closest: a } = ka;
  let s = m(e, "use", 19, () => []), u = m(e, "class", 3, ""), l = m(e, "stickyHeader", 3, !1), c = m(e, "sortable", 3, !1), d = m(e, "sort", 15, null), v = m(e, "sortDirection", 15, "ascending"), f = m(e, "sortAscendingAriaLabel", 3, "sorted, ascending"), h = m(e, "sortDescendingAriaLabel", 3, "sorted, descending"), g = m(e, "container$use", 19, () => []), p = m(e, "container$class", 3, ""), b = m(e, "table$use", 19, () => []), y = m(e, "table$class", 3, ""), x = /* @__PURE__ */ Ve(e, [
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
  ]), E, C = /* @__PURE__ */ le(void 0), w, I = /* @__PURE__ */ le(void 0), S = /* @__PURE__ */ le(void 0), _ = Ee({}), T = /* @__PURE__ */ le(Ee({ height: "auto", top: "initial" })), R = ye("SMUI:addLayoutListener"), D, L = !1, P = jn(!1), ie = jn(d());
  xe(() => {
    nr(ie, d());
  });
  let j = jn(v());
  xe(() => {
    nr(j, v());
  }), de("SMUI:checkbox:context", "data-table"), de("SMUI:linear-progress:context", "data-table"), de("SMUI:linear-progress:closed", P), de("SMUI:data-table:sortable", c()), de("SMUI:data-table:sort", ie), de("SMUI:data-table:sortDirection", j), de("SMUI:data-table:sortAscendingAriaLabel", f()), de("SMUI:data-table:sortDescendingAriaLabel", h()), R && (D = R(fe));
  let H;
  xe(() => {
    e.progress && o(C) && H !== t() && (H = t(), t() ? o(C).hideProgress() : o(C).showProgress());
  }), de("SMUI:checkbox:mount", () => {
    o(C) && L && o(C).layout();
  }), de("SMUI:data-table:header:mount", (F) => {
    B(I, F, !0);
  }), de("SMUI:data-table:header:unmount", () => {
    B(I, void 0);
  }), de("SMUI:data-table:body:mount", (F) => {
    B(S, F, !0);
  }), de("SMUI:data-table:body:unmount", () => {
    B(S, void 0);
  }), it(() => (B(
    C,
    new og({
      addClass: ee,
      removeClass: ce,
      getHeaderCellElements: () => {
        var F;
        return ((F = o(I)) == null ? void 0 : F.cells.map((z) => z.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var F;
        return ((F = o(I)) == null ? void 0 : F.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (F, z) => {
        var ve;
        return ((ve = o(I)) == null ? void 0 : ve.orderedCells[F].getAttr(z)) ?? null;
      },
      setAttributeByHeaderCellIndex: (F, z, ve) => {
        var Fe;
        (Fe = o(I)) == null || Fe.orderedCells[F].addAttr(z, ve);
      },
      setClassNameByHeaderCellIndex: (F, z) => {
        var ve;
        (ve = o(I)) == null || ve.orderedCells[F].addClass(z);
      },
      removeClassNameByHeaderCellIndex: (F, z) => {
        var ve;
        (ve = o(I)) == null || ve.orderedCells[F].removeClass(z);
      },
      notifySortAction: (F) => {
        d(F.columnId), v(F.sortValue), Be(W(), "SMUIDataTableSorted", F);
      },
      getTableContainerHeight: () => w.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const F = W().querySelector(".mdc-data-table__header-row");
        if (!F)
          throw new Error("MDCDataTable: Table header element not found.");
        return F.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (F) => {
        B(T, F, !0);
      },
      addClassAtRowIndex: (F, z) => {
        var ve;
        (ve = o(S)) == null || ve.orderedRows[F].addClass(z);
      },
      getRowCount: () => {
        var F;
        return ((F = o(S)) == null ? void 0 : F.rows.length) ?? 0;
      },
      getRowElements: () => {
        var F;
        return ((F = o(S)) == null ? void 0 : F.rows.map((z) => z.element)) ?? [];
      },
      getRowIdAtIndex: (F) => {
        var z;
        return ((z = o(S)) == null ? void 0 : z.orderedRows[F].rowId) ?? null;
      },
      getRowIndexByChildElement: (F) => {
        var z;
        return ((z = o(S)) == null ? void 0 : z.orderedRows.map((ve) => ve.element).indexOf(a(F, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var F;
        return ((F = o(S)) == null ? void 0 : F.rows.filter((z) => z.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (F) => {
        var ve;
        const z = (ve = o(S)) == null ? void 0 : ve.orderedRows[F].checkbox;
        return z ? z.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var z;
        const F = (z = o(I)) == null ? void 0 : z.checkbox;
        return F ? F.checked : !1;
      },
      isRowsSelectable: () => !!W().querySelector(".mdc-data-table__row-checkbox") || !!W().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (F) => {
        var ve;
        const z = (ve = o(S)) == null ? void 0 : ve.orderedRows[F.rowIndex];
        z && Be(W(), "SMUIDataTableSelectionChanged", {
          row: z.element,
          rowId: z.rowId,
          rowIndex: F.rowIndex,
          selected: F.selected
        });
      },
      notifySelectedAll: () => {
        k(!1), Be(W(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        k(!1), Be(W(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (F) => Be(W(), "SMUIDataTableClickRow", F),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (F, z) => {
        var ve;
        (ve = o(S)) == null || ve.orderedRows[F].removeClass(z);
      },
      setAttributeAtRowIndex: (F, z, ve) => {
        var Fe;
        (Fe = o(S)) == null || Fe.orderedRows[F].addAttr(z, ve);
      },
      setHeaderRowCheckboxChecked: (F) => {
        var ve;
        const z = (ve = o(I)) == null ? void 0 : ve.checkbox;
        z && (z.checked = F);
      },
      setHeaderRowCheckboxIndeterminate: k,
      setRowCheckboxCheckedAtIndex: (F, z) => {
        var Fe;
        const ve = (Fe = o(S)) == null ? void 0 : Fe.orderedRows[F].checkbox;
        ve && (ve.checked = z);
      },
      setSortStatusLabelByHeaderCellIndex: (F, z) => {
      }
    }),
    !0
  ), o(C).init(), o(C).layout(), L = !0, () => {
    var F;
    (F = o(C)) == null || F.destroy();
  })), Fn(() => {
    D && D();
  });
  function U(F) {
    o(C) && o(C).handleRowCheckboxChange(F);
  }
  function ee(F) {
    _[F] || (_[F] = !0);
  }
  function ce(F) {
    (!(F in _) || _[F]) && (_[F] = !1);
  }
  function k(F) {
    var ve;
    const z = (ve = o(I)) == null ? void 0 : ve.checkbox;
    z && (z.indeterminate = F);
  }
  function J(F) {
    if (!o(C) || !F.detail.target)
      return;
    const z = a(F.detail.target, ".mdc-data-table__header-cell--with-sort");
    z && be(z);
  }
  function ne(F) {
    if (!o(C) || !F.detail.target)
      return;
    const z = a(F.detail.target, ".mdc-data-table__row");
    z && o(C) && o(C).handleRowClick({ rowId: F.detail.rowId, row: z });
  }
  function be(F) {
    var Nt, vn;
    const z = ((Nt = o(I)) == null ? void 0 : Nt.orderedCells) ?? [], ve = z.map((sr) => sr.element).indexOf(F);
    if (ve === -1)
      return;
    const Fe = z[ve].columnId ?? null;
    (vn = o(C)) == null || vn.handleSortAction({ columnId: Fe, columnIndex: ve, headerCell: F });
  }
  function fe() {
    var F;
    return (F = o(C)) == null ? void 0 : F.layout();
  }
  function W() {
    return E;
  }
  var V = { layout: fe, getElement: W }, O = dg(), Q = (F) => {
    var z;
    o(C) && o(C).handleHeaderRowCheckboxChange(), (z = e.onSMUIDataTableHeaderCheckboxChange) == null || z.call(e, F);
  }, Y = (F) => {
    var z;
    J(F), (z = e.onSMUIDataTableHeaderClick) == null || z.call(e, F);
  }, ge = (F) => {
    var z;
    ne(F), (z = e.onSMUIDataTableRowClick) == null || z.call(e, F);
  }, pe = (F) => {
    var z;
    U(F), (z = e.onSMUIDataTableBodyCheckboxChange) == null || z.call(e, F);
  };
  He(
    O,
    (F, z) => ({
      class: F,
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
        ..._,
        [u()]: !0
      }),
      () => Ea(x, ["container$", "table$"])
    ]
  );
  var Ne = N(O);
  He(Ne, (F, z) => ({ class: F, ...z }), [
    () => Ze({
      "mdc-data-table__table-container": !0,
      [p()]: !0
    }),
    () => ut(x, "container$")
  ]);
  var tt = N(Ne);
  He(tt, (F, z) => ({ class: F, ...z }), [
    () => Ze({ "mdc-data-table__table": !0, [y()]: !0 }),
    () => ut(x, "table$")
  ]);
  var Ke = N(tt);
  _e(Ke, () => e.children ?? Ie), De(tt, (F, z) => ae == null ? void 0 : ae(F, z), b), Se(Ne, (F) => w = F, () => w), De(Ne, (F, z) => ae == null ? void 0 : ae(F, z), g);
  var Re = q(Ne, 2);
  {
    var ot = (F) => {
      var z = lg(), ve = q(N(z), 2);
      _e(ve, () => e.progress ?? Ie), ue((Fe) => qe(z, Fe), [
        () => Object.entries(o(T)).map(([Fe, Nt]) => `${Fe}: ${Nt};`).join(" ")
      ]), A(F, z);
    };
    te(Re, (F) => {
      e.progress && F(ot);
    });
  }
  var kt = q(Re, 2);
  _e(kt, () => e.paginate ?? Ie), Se(O, (F) => E = F, () => E), De(O, (F, z) => ae == null ? void 0 : ae(F, z), s), A(n, O);
  var Gt = Ae(V);
  return i(), Gt;
}
var cg = /* @__PURE__ */ X("<thead><!></thead>");
function fg(n, e) {
  Ce(e, !0);
  let t = m(e, "use", 19, () => []), r = /* @__PURE__ */ Ve(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i, a = /* @__PURE__ */ le(void 0), s = [];
  const u = /* @__PURE__ */ new WeakMap();
  de("SMUI:data-table:row:header", !0);
  const l = ye("SMUI:checkbox:mount");
  de("SMUI:checkbox:mount", (y) => {
    B(a, y, !0), l && l(y);
  });
  const c = ye("SMUI:checkbox:unmount");
  de("SMUI:checkbox:unmount", (y) => {
    B(a, void 0), c && c(y);
  }), de("SMUI:data-table:cell:mount", (y) => {
    s.push(y), u.set(y.element, y);
  }), de("SMUI:data-table:cell:unmount", (y) => {
    const x = s.findIndex((E) => E === y);
    x !== -1 && s.splice(x, 1), u.delete(y.element);
  });
  const d = ye("SMUI:data-table:header:mount"), v = ye("SMUI:data-table:header:unmount");
  it(() => {
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
  var g = { getElement: h }, p = cg();
  He(p, () => ({ ...r }));
  var b = N(p);
  return _e(b, () => e.children ?? Ie), Se(p, (y) => i = y, () => i), De(p, (y, x) => ae == null ? void 0 : ae(y, x), t), A(n, p), Ae(g);
}
var vg = /* @__PURE__ */ X("<tbody><!></tbody>");
function hg(n, e) {
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
    const b = s.findIndex((y) => y === p);
    b !== -1 && s.splice(b, 1), u.delete(p.element);
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
  var f = { getElement: v }, h = vg();
  He(h, (p) => ({ class: p, ...i }), [
    () => Ze({ "mdc-data-table__content": !0, [r()]: !0 })
  ]);
  var g = N(h);
  return _e(g, () => e.children ?? Ie), Se(h, (p) => a = p, () => a), De(h, (p, b) => ae == null ? void 0 : ae(p, b), t), A(n, h), Ae(f);
}
let gg = 0;
var mg = /* @__PURE__ */ X("<tr><!></tr>");
function Zl(n, e) {
  Ce(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "rowId", 19, () => "SMUI-data-table-row-" + gg++), a = /* @__PURE__ */ Ve(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "rowId",
    "children"
  ]), s, u = /* @__PURE__ */ le(void 0), l = Ee({}), c = Ee({}), d = ye("SMUI:data-table:row:header");
  const v = ye("SMUI:checkbox:mount");
  de("SMUI:checkbox:mount", (R) => {
    B(u, R, !0), v && v(R);
  });
  const f = ye("SMUI:checkbox:unmount");
  de("SMUI:checkbox:unmount", (R) => {
    B(u, void 0), f && f(R);
  });
  const h = ye("SMUI:data-table:row:mount"), g = ye("SMUI:data-table:row:unmount");
  it(() => {
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
      removeClass: b,
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
      removeClass: b,
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
  function b(R) {
    (!(R in l) || l[R]) && (l[R] = !1);
  }
  function y(R) {
    return R in c ? c[R] ?? null : w().getAttribute(R);
  }
  function x(R, D) {
    c[R] !== D && (c[R] = D);
  }
  function E(R) {
    Be(w(), "SMUIDataTableHeaderClick", R);
  }
  function C(R) {
    Be(w(), "SMUIDataTableRowClick", { rowId: i(), target: R.target });
  }
  function w() {
    return s;
  }
  var I = { getElement: w }, S = mg(), _ = (R) => {
    var D;
    d ? E(R) : C(R), (D = e.onclick) == null || D.call(e, R);
  };
  He(
    S,
    (R) => ({
      class: R,
      "aria-selected": o(u) ? o(u).checked ? "true" : "false" : void 0,
      ...c,
      ...a,
      onclick: _
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
  var T = N(S);
  return _e(T, () => e.children ?? Ie), Se(S, (R) => s = R, () => s), De(S, (R, D) => ae == null ? void 0 : ae(R, D), t), A(n, S), Ae(I);
}
let pg = 0;
var Ig = /* @__PURE__ */ X('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), bg = /* @__PURE__ */ X("<th><!></th>"), _g = /* @__PURE__ */ X("<td><!></td>");
function qa(n, e) {
  Ce(e, !0);
  const t = () => Ii(y, "$sort", i), r = () => Ii(x, "$sortDirection", i), [i, a] = Ei();
  let s = ye("SMUI:data-table:row:header"), u = m(e, "use", 19, () => []), l = m(e, "class", 3, ""), c = m(e, "numeric", 3, !1), d = m(e, "checkbox", 3, !1), v = m(e, "columnId", 19, () => s ? "SMUI-data-table-column-" + pg++ : "SMUI-data-table-unused"), f = m(e, "sortable", 19, () => ye("SMUI:data-table:sortable")), h = /* @__PURE__ */ Ve(e, [
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
  ]), g, p = Ee({}), b = Ee({}), y = ye("SMUI:data-table:sort"), x = ye("SMUI:data-table:sortDirection"), E = ye("SMUI:data-table:sortAscendingAriaLabel"), C = ye("SMUI:data-table:sortDescendingAriaLabel");
  f() && (de("SMUI:label:context", "data-table:sortable-header-cell"), de("SMUI:icon-button:context", "data-table:sortable-header-cell"), de("SMUI:icon-button:aria-describedby", v() + "-status-label"));
  const w = ye("SMUI:data-table:cell:mount"), I = ye("SMUI:data-table:cell:unmount");
  it(() => {
    const k = s ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return P();
      },
      get columnId() {
        return v();
      },
      addClass: S,
      removeClass: _,
      getAttr: T,
      addAttr: R
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return P();
      },
      get columnId() {
      },
      addClass: S,
      removeClass: _,
      getAttr: T,
      addAttr: R
    };
    return w && w(k), () => {
      I && I(k);
    };
  });
  function S(k) {
    p[k] || (p[k] = !0);
  }
  function _(k) {
    (!(k in p) || p[k]) && (p[k] = !1);
  }
  function T(k) {
    return k in b ? b[k] ?? null : P().getAttribute(k);
  }
  function R(k, J) {
    b[k] !== J && (b[k] = J);
  }
  function D(k) {
    Be(P(), "SMUIDataTableHeaderCheckboxChange", k);
  }
  function L(k) {
    Be(P(), "SMUIDataTableBodyCheckboxChange", k);
  }
  function P() {
    return g;
  }
  var ie = { getElement: P }, j = oe(), H = K(j);
  {
    var U = (k) => {
      var J = bg(), ne = (V) => {
        var O;
        d() && D(V), (O = e.onchange) == null || O.call(e, V);
      };
      He(
        J,
        (V) => ({
          class: V,
          role: "columnheader",
          scope: "col",
          "data-column-id": v(),
          "aria-sort": f() ? t() === v() ? r() : "none" : void 0,
          ...b,
          ...h,
          onchange: ne
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
      var be = N(J);
      {
        var fe = (V) => {
          var O = Ig(), Q = N(O);
          _e(Q, () => e.children ?? Ie);
          var Y = q(Q, 2), ge = N(Y);
          ue(() => {
            mt(Y, "id", `${v() ?? ""}-status-label`), Me(ge, t() === v() ? r() === "ascending" ? E : C : "");
          }), A(V, O);
        }, W = (V) => {
          var O = oe(), Q = K(O);
          _e(Q, () => e.children ?? Ie), A(V, O);
        };
        te(be, (V) => {
          f() ? V(fe) : V(W, !1);
        });
      }
      Se(J, (V) => g = V, () => g), De(J, (V, O) => ae == null ? void 0 : ae(V, O), u), A(k, J);
    }, ee = (k) => {
      var J = _g(), ne = (fe) => {
        var W;
        d() && L(fe), (W = e.onchange) == null || W.call(e, fe);
      };
      He(
        J,
        (fe) => ({
          class: fe,
          ...b,
          ...h,
          onchange: ne
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
      var be = N(J);
      _e(be, () => e.children ?? Ie), Se(J, (fe) => g = fe, () => g), De(J, (fe, W) => ae == null ? void 0 : ae(fe, W), u), A(k, J);
    };
    te(H, (k) => {
      s ? k(U) : k(ee, !1);
    });
  }
  A(n, j);
  var ce = Ae(ie);
  return a(), ce;
}
var yg = /* @__PURE__ */ X('<p class="status svelte-185z1ay">Loading…</p>'), Cg = /* @__PURE__ */ X('<p class="status error svelte-185z1ay"> </p>'), Ag = /* @__PURE__ */ X('<p class="status svelte-185z1ay"> </p>'), Eg = /* @__PURE__ */ X("<!> <!>", 1), xg = /* @__PURE__ */ X("<!> <!>", 1), Sg = /* @__PURE__ */ X("<!> <!>", 1);
function wg(n, e) {
  Ce(e, !0);
  let t = /* @__PURE__ */ le(null), r = m(e, "items", 19, () => []), i = m(e, "columns", 19, () => []), a = m(e, "loading", 3, !1), s = m(e, "errorMsg", 3, ""), u = m(e, "emptyText", 3, "Nothing to show."), l = m(e, "getRowId", 3, (y, x) => (y && (y.id ?? y.key)) ?? x), c = m(e, "headerBg", 3, null), d = m(e, "rowBg", 3, null), v = m(e, "hasActions", 3, !1), f = /* @__PURE__ */ re(() => v() || !!e.actions);
  var h = oe(), g = K(h);
  {
    var p = (y) => {
      var x = yg();
      A(y, x);
    }, b = (y) => {
      var x = oe(), E = K(x);
      {
        var C = (I) => {
          var S = Cg(), _ = N(S);
          ue(() => Me(_, s())), A(I, S);
        }, w = (I) => {
          var S = oe(), _ = K(S);
          {
            var T = (D) => {
              var L = Ag(), P = N(L);
              ue(() => Me(P, u())), A(D, L);
            }, R = (D) => {
              ug(D, {
                style: "width: 100%;",
                children: (L, P) => {
                  var ie = Sg(), j = K(ie);
                  {
                    let U = /* @__PURE__ */ re(() => c() ? `background-color:${c()}` : void 0);
                    fg(j, {
                      get style() {
                        return o(U);
                      },
                      children: (ee, ce) => {
                        Zl(ee, {
                          children: (k, J) => {
                            var ne = Eg(), be = K(ne);
                            cn(be, 17, i, br, (V, O) => {
                              {
                                let Q = /* @__PURE__ */ re(() => [
                                  o(O).width ? `width:${o(O).width}` : "",
                                  c() ? `background-color:${c()}` : ""
                                ].filter(Boolean).join(";"));
                                qa(V, {
                                  header: !0,
                                  get style() {
                                    return o(Q);
                                  },
                                  children: (Y, ge) => {
                                    var pe = rt();
                                    ue(() => Me(pe, o(O).header)), A(Y, pe);
                                  },
                                  $$slots: { default: !0 }
                                });
                              }
                            });
                            var fe = q(be, 2);
                            {
                              var W = (V) => {
                                {
                                  let O = /* @__PURE__ */ re(() => c() ? `background-color:${c()}` : void 0);
                                  qa(V, {
                                    header: !0,
                                    get style() {
                                      return o(O);
                                    }
                                  });
                                }
                              };
                              te(fe, (V) => {
                                o(f) && V(W);
                              });
                            }
                            A(k, ne);
                          },
                          $$slots: { default: !0 }
                        });
                      },
                      $$slots: { default: !0 }
                    });
                  }
                  var H = q(j, 2);
                  hg(H, {
                    children: (U, ee) => {
                      var ce = oe(), k = K(ce);
                      cn(k, 19, r, (J, ne) => l()(J, ne), (J, ne, be) => {
                        {
                          let fe = /* @__PURE__ */ re(() => [
                            d() ? `background-color:${d()}` : "",
                            o(t) === l()(o(ne), o(be)) ? "background-color:#D9D800" : ""
                          ].filter(Boolean).join(";"));
                          Zl(J, {
                            get style() {
                              return o(fe);
                            },
                            $$events: {
                              mouseenter: () => B(t, l()(o(ne), o(be)), !0),
                              mouseleave: () => B(t, null)
                            },
                            children: (W, V) => {
                              var O = xg(), Q = K(O);
                              cn(Q, 17, i, br, (pe, Ne) => {
                                qa(pe, {
                                  children: (tt, Ke) => {
                                    var Re = rt();
                                    ue(() => {
                                      var ot;
                                      return Me(Re, ((ot = o(ne)) == null ? void 0 : ot[o(Ne).key]) ?? "");
                                    }), A(tt, Re);
                                  },
                                  $$slots: { default: !0 }
                                });
                              });
                              var Y = q(Q, 2);
                              {
                                var ge = (pe) => {
                                  qa(pe, {
                                    numeric: !0,
                                    children: (Ne, tt) => {
                                      var Ke = oe(), Re = K(Ke);
                                      _e(Re, () => e.actions ?? Ie, () => ({ item: o(ne) })), A(Ne, Ke);
                                    },
                                    $$slots: { default: !0 }
                                  });
                                };
                                te(Y, (pe) => {
                                  o(f) && pe(ge);
                                });
                              }
                              A(W, O);
                            },
                            $$slots: { default: !0 }
                          });
                        }
                      }), A(U, ce);
                    },
                    $$slots: { default: !0 }
                  }), A(L, ie);
                },
                $$slots: { default: !0 }
              });
            };
            te(
              _,
              (D) => {
                !r() || r().length === 0 ? D(T) : D(R, !1);
              },
              !0
            );
          }
          A(I, S);
        };
        te(
          E,
          (I) => {
            s() ? I(C) : I(w, !1);
          },
          !0
        );
      }
      A(y, x);
    };
    te(g, (y) => {
      a() ? y(p) : y(b, !1);
    });
  }
  A(n, h), Ae();
}
var Tg = /* @__PURE__ */ st('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"></path></svg>');
function Dg(n, e) {
  let t = m(e, "svgStyles", 3, "");
  yt(n, {
    children: (r, i) => {
      var a = Tg();
      ue(() => qe(a, t())), A(r, a);
    }
  });
}
var Lg = /* @__PURE__ */ X('<span class="secondary-label svelte-17mxdlc"> </span>'), Rg = /* @__PURE__ */ X('<div class="separator svelte-17mxdlc"><!></div>'), Og = /* @__PURE__ */ X('<div class="breadcrumb-wrapper svelte-17mxdlc"><button type="button"><span class="label svelte-17mxdlc"> </span> <!></button> <!></div>'), Mg = /* @__PURE__ */ X('<nav class="oscd-breadcrumbs svelte-17mxdlc" aria-label="Breadcrumb"></nav>');
function Fg(n, e) {
  Ce(e, !0);
  let t = m(e, "breadcrumbs", 19, () => []), r = m(e, "activeIndex", 3, 0);
  const i = (s) => {
    var l;
    const u = t()[s];
    !(u != null && u.enabled) || s === r() || (l = e.handleClick) == null || l.call(e, s);
  };
  var a = Mg();
  cn(a, 21, t, br, (s, u, l) => {
    var c = Og(), d = N(c);
    let v;
    d.__click = () => i(l);
    let f;
    var h = N(d), g = N(h), p = q(h, 2);
    {
      var b = (E) => {
        var C = Lg();
        let w;
        var I = N(C);
        ue(
          (S) => {
            w = qe(C, "", w, S), Me(I, o(u).secondaryLabel);
          },
          [() => ({ color: e.color ? e.color : null })]
        ), A(E, C);
      };
      te(p, (E) => {
        o(u).secondaryLabel && E(b);
      });
    }
    var y = q(d, 2);
    {
      var x = (E) => {
        var C = Rg(), w = N(C);
        {
          let I = /* @__PURE__ */ re(() => e.color ? e.color : "#004552");
          Dg(w, {
            get svgStyles() {
              return `fill: ${o(I) ?? ""}`;
            }
          });
        }
        A(E, C);
      };
      te(y, (E) => {
        l < t().length - 1 && E(x);
      });
    }
    ue(
      (E, C) => {
        v = _r(d, 1, "breadcrumb svelte-17mxdlc", null, v, E), mt(d, "aria-current", l === r() ? "page" : void 0), mt(d, "aria-disabled", o(u).enabled ? void 0 : "true"), f = qe(d, "", f, C), Me(g, o(u).label);
      },
      [
        () => ({
          "br-disabled": !o(u).enabled,
          "br-active": l === r()
        }),
        () => ({ color: e.color ? e.color : null })
      ]
    ), A(s, c);
  }), A(n, a), Ae();
}
pt(["click"]);
var Pg = (n, e) => {
  var t;
  n.stopPropagation(), (t = e.onClick) == null || t.call(e, n);
}, kg = /* @__PURE__ */ X('<button class="icon-button svelte-jv2py4"><!></button>');
function vu(n, e) {
  Ce(e, !0);
  let t = m(e, "tooltipSide", 3, "top"), r = m(e, "showDelay", 3, 1e3), i = m(e, "fillColor", 3, "var(--mdc-theme-primary)"), a = m(e, "size", 3, "25px"), s = /* @__PURE__ */ re(() => `fill: ${i()}; margin: 0; width: ${a()}; height: ${a()};`);
  fu(n, {
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
      var c = kg();
      c.__click = [Pg, e];
      var d = N(c);
      {
        var v = (h) => {
          lu(h, {
            get svgStyles() {
              return o(s);
            }
          });
        }, f = (h) => {
          var g = oe(), p = K(g);
          {
            var b = (x) => {
              Th(x, {
                get svgStyles() {
                  return o(s);
                }
              });
            }, y = (x) => {
              var E = oe(), C = K(E);
              {
                var w = (S) => {
                  ou(S, {
                    get svgStyles() {
                      return o(s);
                    }
                  });
                }, I = (S) => {
                  var _ = oe(), T = K(_);
                  {
                    var R = (L) => {
                      du(L, {
                        get svgStyles() {
                          return o(s);
                        }
                      });
                    }, D = (L) => {
                      var P = oe(), ie = K(P);
                      {
                        var j = (U) => {
                          Wh(U, {
                            get svgStyles() {
                              return o(s);
                            }
                          });
                        }, H = (U) => {
                          var ee = oe(), ce = K(ee);
                          {
                            var k = (ne) => {
                              Vh(ne, {
                                get svgStyles() {
                                  return o(s);
                                }
                              });
                            }, J = (ne) => {
                              var be = oe(), fe = K(be);
                              {
                                var W = (O) => {
                                  Xh(O, {
                                    get svgStyles() {
                                      return o(s);
                                    }
                                  });
                                }, V = (O) => {
                                  var Q = oe(), Y = K(Q);
                                  {
                                    var ge = (Ne) => {
                                      qh(Ne, {
                                        get svgStyles() {
                                          return o(s);
                                        }
                                      });
                                    }, pe = (Ne) => {
                                      var tt = rt();
                                      ue(() => Me(tt, `Unsupported supported type: ${e.type ?? ""}`)), A(Ne, tt);
                                    };
                                    te(
                                      Y,
                                      (Ne) => {
                                        e.type === "star" ? Ne(ge) : Ne(pe, !1);
                                      },
                                      !0
                                    );
                                  }
                                  A(O, Q);
                                };
                                te(
                                  fe,
                                  (O) => {
                                    e.type === "close" ? O(W) : O(V, !1);
                                  },
                                  !0
                                );
                              }
                              A(ne, be);
                            };
                            te(
                              ce,
                              (ne) => {
                                e.type === "link-off" ? ne(k) : ne(J, !1);
                              },
                              !0
                            );
                          }
                          A(U, ee);
                        };
                        te(
                          ie,
                          (U) => {
                            e.type === "wand-stars" ? U(j) : U(H, !1);
                          },
                          !0
                        );
                      }
                      A(L, P);
                    };
                    te(
                      T,
                      (L) => {
                        e.type === "visibility" ? L(R) : L(D, !1);
                      },
                      !0
                    );
                  }
                  A(S, _);
                };
                te(
                  C,
                  (S) => {
                    e.type === "edit" ? S(w) : S(I, !1);
                  },
                  !0
                );
              }
              A(x, E);
            };
            te(
              p,
              (x) => {
                e.type === "duplicate" ? x(b) : x(y, !1);
              },
              !0
            );
          }
          A(h, g);
        };
        te(d, (h) => {
          e.type === "delete" ? h(v) : h(f, !1);
        });
      }
      ue(() => mt(c, "aria-label", e.tooltip)), A(u, c);
    },
    $$slots: { default: !0 }
  }), Ae();
}
pt(["click"]);
function Hl(n, e) {
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
    e % 2 ? Hl(Object(t), !0).forEach(function(r) {
      $i(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Hl(Object(t)).forEach(function(r) {
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
function Gg(n, e) {
  if (n == null) return {};
  var t = {}, r = Object.keys(n), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(e.indexOf(i) >= 0) && (t[i] = n[i]);
  return t;
}
function Ng(n, e) {
  if (n == null) return {};
  var t = Gg(n, e), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    for (i = 0; i < a.length; i++)
      r = a[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(n, r) && (t[r] = n[r]);
  }
  return t;
}
function Zg(n, e) {
  return Bg(n) || Wg(n, e) || Yo(n, e) || Vg();
}
function Dn(n) {
  return Hg(n) || Ug(n) || Yo(n) || jg();
}
function Hg(n) {
  if (Array.isArray(n)) return yo(n);
}
function Bg(n) {
  if (Array.isArray(n)) return n;
}
function Ug(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function Wg(n, e) {
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
function jg() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Vg() {
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
var zg = "finalize", Xg = "consider";
function ea(n, e, t) {
  n.dispatchEvent(new CustomEvent(zg, {
    detail: {
      items: e,
      info: t
    }
  }));
}
function Wr(n, e, t) {
  n.dispatchEvent(new CustomEvent(Xg, {
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
function Yg(n, e, t) {
  n.dispatchEvent(new CustomEvent(Ps, {
    detail: {
      indexObj: e,
      draggedEl: t
    }
  }));
}
function qg(n, e, t) {
  n.dispatchEvent(new CustomEvent(Za, {
    detail: {
      draggedEl: e,
      type: fs.LEFT_FOR_ANOTHER,
      theOtherDz: t
    }
  }));
}
function Kg(n, e) {
  n.dispatchEvent(new CustomEvent(Za, {
    detail: {
      draggedEl: e,
      type: fs.OUTSIDE_OF_ANY
    }
  }));
}
function Qg(n, e, t) {
  n.dispatchEvent(new CustomEvent(ks, {
    detail: {
      indexObj: e,
      draggedEl: t
    }
  }));
}
function Jg(n) {
  window.dispatchEvent(new CustomEvent(qo, {
    detail: {
      draggedEl: n
    }
  }));
}
var xt = {
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
}, Yt = {
  POINTER: "pointer",
  KEYBOARD: "keyboard"
}, aa = "isDndShadowItem", Gs = "data-is-dnd-shadow-item-internal", $g = "data-is-dnd-shadow-item-hint", em = "id:dnd-shadow-placeholder-0000", tm = "dnd-action-dragged-el", Tt = "id", Co = 0;
function hu() {
  Co++;
}
function gu() {
  if (Co === 0)
    throw new Error("Bug! trying to decrement when there are no dropzones");
  Co--;
}
var Ko = typeof window > "u";
function Ao(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, t, r = e ? im(n) : n.getBoundingClientRect(), i = getComputedStyle(n), a = i.transform;
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
function mu(n) {
  var e = Ao(n);
  return {
    top: e.top + window.scrollY,
    bottom: e.bottom + window.scrollY,
    left: e.left + window.scrollX,
    right: e.right + window.scrollX
  };
}
function pu(n) {
  var e = n.getBoundingClientRect();
  return {
    top: e.top + window.scrollY,
    bottom: e.bottom + window.scrollY,
    left: e.left + window.scrollX,
    right: e.right + window.scrollX
  };
}
function Iu(n) {
  return {
    x: (n.left + n.right) / 2,
    y: (n.top + n.bottom) / 2
  };
}
function nm(n, e) {
  return Math.sqrt(Math.pow(n.x - e.x, 2) + Math.pow(n.y - e.y, 2));
}
function Ns(n, e) {
  return n.y <= e.bottom && n.y >= e.top && n.x >= e.left && n.x <= e.right;
}
function xa(n) {
  return Iu(pu(n));
}
function Bl(n, e) {
  var t = xa(n), r = mu(e);
  return Ns(t, r);
}
function Ul(n, e) {
  var t = xa(n), r = xa(e);
  return nm(t, r);
}
function rm(n) {
  var e = pu(n);
  return e.right < 0 || e.left > document.documentElement.scrollWidth || e.bottom < 0 || e.top > document.documentElement.scrollHeight;
}
function im(n) {
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
function am(n) {
  var e = Array.from(n.children).findIndex(function(t) {
    return t.getAttribute(Gs);
  });
  if (e >= 0)
    return Zi.has(n) || Zi.set(n, /* @__PURE__ */ new Map()), Zi.get(n).set(e, mu(n.children[e])), e;
}
function sm(n, e) {
  if (!Bl(n, e))
    return null;
  var t = e.children;
  if (t.length === 0)
    return {
      index: 0,
      isProximityBased: !0
    };
  for (var r = am(e), i = 0; i < t.length; i++)
    if (Bl(n, t[i])) {
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
    var c = Ul(n, t[l]);
    c < s && (s = c, u = l);
  }
  if (t.length > 0) {
    var d = t.length, v = t[d - 1], f = v.cloneNode(!1);
    f.style.visibility = "hidden", f.style.pointerEvents = "none", e.appendChild(f);
    var h = Ul(n, f);
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
  return bu(n, 0);
}
function bu(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return n.parentElement ? bu(n.parentElement, e + 1) : e - 1;
}
function om(n, e) {
  if (Object.keys(n).length !== Object.keys(e).length)
    return !1;
  for (var t in n)
    if (!{}.hasOwnProperty.call(e, t) || e[t] !== n[t])
      return !1;
  return !0;
}
function lm(n, e) {
  if (n.length !== e.length)
    return !1;
  for (var t = 0; t < n.length; t++)
    if (n[t] !== e[t])
      return !1;
  return !0;
}
var dm = 200, Wl = 10, Eo;
function um(n, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : dm, r = arguments.length > 3 ? arguments[3] : void 0, i, a, s = !1, u, l = Array.from(e).sort(function(d, v) {
    return vs(v) - vs(d);
  });
  function c() {
    var d = xa(n), v = r.multiScrollIfNeeded();
    if (!v && u && Math.abs(u.x - d.x) < Wl && Math.abs(u.y - d.y) < Wl) {
      Eo = window.setTimeout(c, t);
      return;
    }
    if (rm(n)) {
      Jg(n);
      return;
    }
    u = d;
    var f = !1, h = Na(l), g;
    try {
      for (h.s(); !(g = h.n()).done; ) {
        var p = g.value;
        v && Qo();
        var b = sm(n, p);
        if (b !== null) {
          var y = b.index;
          f = !0, p !== i ? (i && qg(i, n, p), Yg(p, b, n), i = p) : y !== a && (Qg(p, b, n), a = y);
          break;
        }
      }
    } catch (x) {
      h.e(x);
    } finally {
      h.f();
    }
    !f && s && i ? (Kg(i, n), i = void 0, a = void 0, s = !1) : s = !0, Eo = window.setTimeout(c, t);
  }
  c();
}
function cm() {
  clearTimeout(Eo), Qo();
}
var ma = 30;
function fm() {
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
    var u = vm(a, s), l = !!n.directionObj;
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
function vm(n, e) {
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
function hm() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e = arguments.length > 1 ? arguments[1] : void 0, t = mm(n), r = Array.from(t).sort(function(l, c) {
    return vs(c) - vs(l);
  }), i = fm(), a = i.scrollIfNeeded, s = i.resetScrolling;
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
function gm(n) {
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
function mm(n) {
  var e = /* @__PURE__ */ new Set(), t = Na(n), r;
  try {
    for (t.s(); !(r = t.n()).done; ) {
      var i = r.value;
      gm(i).forEach(function(a) {
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
function pm(n) {
  var e = n.cloneNode(!0), t = [], r = n.tagName === "SELECT", i = r ? [n] : Dn(n.querySelectorAll("select")), a = Na(i), s;
  try {
    for (a.s(); !(s = a.n()).done; ) {
      var u = s.value;
      t.push(u.value);
    }
  } catch (E) {
    a.e(E);
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
    for (var p = h ? [e] : Dn(e.querySelectorAll("canvas")), b = 0; b < p.length; b++) {
      var y = g[b], x = p[b];
      x.width = y.width, x.height = y.height, y.width > 0 && y.height > 0 && x.getContext("2d").drawImage(y, 0, 0);
    }
  return e;
}
var Sa = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
}), Im = $i({}, Sa.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
function _u(n) {
  if (!Sa[n]) throw new Error("Can't get non existing feature flag ".concat(n, "! Supported flags: ").concat(Object.keys(Sa)));
  return Im[n];
}
var bm = 0.2;
function ri(n) {
  return "".concat(n, " ").concat(bm, "s ease");
}
function _m(n, e) {
  var t = n.getBoundingClientRect(), r = pm(n);
  yu(n, r), r.id = tm, r.style.position = "fixed";
  var i = t.top, a = t.left;
  if (r.style.top = "".concat(i, "px"), r.style.left = "".concat(a, "px"), e) {
    var s = Iu(t);
    i -= s.y - e.y, a -= s.x - e.x, window.setTimeout(function() {
      r.style.top = "".concat(i, "px"), r.style.left = "".concat(a, "px");
    }, 0);
  }
  return r.style.margin = "0", r.style.boxSizing = "border-box", r.style.height = "".concat(t.height, "px"), r.style.width = "".concat(t.width, "px"), r.style.transition = "".concat(ri("top"), ", ").concat(ri("left"), ", ").concat(ri("background-color"), ", ").concat(ri("opacity"), ", ").concat(ri("color"), " "), window.setTimeout(function() {
    return r.style.transition += ", ".concat(ri("width"), ", ").concat(ri("height"));
  }, 0), r.style.zIndex = "9999", r.style.cursor = "grabbing", r;
}
function ym(n) {
  n.style.cursor = "grab";
}
function Cm(n, e, t, r) {
  yu(e, n);
  var i = e.getBoundingClientRect(), a = n.getBoundingClientRect(), s = i.width - a.width, u = i.height - a.height;
  if (s || u) {
    var l = {
      left: (t - a.left) / a.width,
      top: (r - a.top) / a.height
    };
    _u(Sa.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT) || (n.style.height = "".concat(i.height, "px"), n.style.width = "".concat(i.width, "px")), n.style.left = "".concat(parseFloat(n.style.left) - l.left * s, "px"), n.style.top = "".concat(parseFloat(n.style.top) - l.top * u, "px");
  }
}
function yu(n, e) {
  var t = window.getComputedStyle(n);
  Array.from(t).filter(function(r) {
    return r.startsWith("background") || r.startsWith("padding") || r.startsWith("font") || r.startsWith("text") || r.startsWith("align") || r.startsWith("justify") || r.startsWith("display") || r.startsWith("flex") || r.startsWith("border") || r === "opacity" || r === "color" || r === "list-style-type" || // copying with and height to make up for rect update timing issues in some browsers
    _u(Sa.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT) && (r === "width" || r === "height");
  }).forEach(function(r) {
    return e.style.setProperty(r, t.getPropertyValue(r), t.getPropertyPriority(r));
  });
}
function Am(n, e) {
  n.draggable = !1, n.ondragstart = function() {
    return !1;
  }, e ? (n.style.userSelect = "", n.style.WebkitUserSelect = "", n.style.cursor = "") : (n.style.userSelect = "none", n.style.WebkitUserSelect = "none", n.style.cursor = "grab");
}
function Cu(n) {
  n.style.display = "none", n.style.position = "fixed", n.style.zIndex = "-5";
}
function Em(n) {
  n.style.visibility = "hidden", n.setAttribute(Gs, "true");
}
function xm(n) {
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
function Sm(n) {
  var e = n.style.minHeight;
  n.style.minHeight = window.getComputedStyle(n).getPropertyValue("height");
  var t = n.style.minWidth;
  return n.style.minWidth = window.getComputedStyle(n).getPropertyValue("width"), function() {
    n.style.minHeight = e, n.style.minWidth = t;
  };
}
var wm = "--any--", Tm = 100, Dm = 20, Ka = 3, Lm = 80, jl = {
  outline: "rgba(255, 255, 102, 0.7) solid 2px"
}, Vl = "data-is-dnd-original-dragged-item", ln, wt, dn, Zs, at, Hs, Br, Ft, Yn, jt, Lr = !1, Jo = !1, $o, Ha = !1, as = [], ya, qn, Ia = !1, Un = /* @__PURE__ */ new Map(), gt = /* @__PURE__ */ new Map(), ro = /* @__PURE__ */ new WeakMap();
function Rm(n, e) {
  Un.has(e) || Un.set(e, /* @__PURE__ */ new Set()), Un.get(e).has(n) || (Un.get(e).add(n), hu());
}
function zl(n, e) {
  Un.get(e).delete(n), gu(), Un.get(e).size === 0 && Un.delete(e);
}
function Om() {
  var n = Un.get(Zs), e = Na(n), t;
  try {
    for (e.s(); !(t = e.n()).done; ) {
      var r = t.value;
      r.addEventListener(Ps, Au), r.addEventListener(Za, Eu), r.addEventListener(ks, xu);
    }
  } catch (s) {
    e.e(s);
  } finally {
    e.f();
  }
  window.addEventListener(qo, ta);
  var i = Math.max.apply(Math, Dn(Array.from(n.keys()).map(function(s) {
    return gt.get(s).dropAnimationDurationMs;
  }))), a = i === 0 ? Dm : Math.max(i, Tm);
  ya = hm(n, function() {
    return jt;
  }), um(wt, n, a * 1.07, ya);
}
function Mm() {
  var n = Un.get(Zs), e = Na(n), t;
  try {
    for (e.s(); !(t = e.n()).done; ) {
      var r = t.value;
      r.removeEventListener(Ps, Au), r.removeEventListener(Za, Eu), r.removeEventListener(ks, xu);
    }
  } catch (i) {
    e.e(i);
  } finally {
    e.f();
  }
  window.removeEventListener(qo, ta), ya && (ya.destroy(), ya = void 0), cm();
}
function Bs(n) {
  return n.findIndex(function(e) {
    return !!e[aa];
  });
}
function Fm(n) {
  var e;
  return Pr(Pr({}, n), {}, (e = {}, $i(e, aa, !0), $i(e, Tt, em), e));
}
function Au(n) {
  var e = gt.get(n.currentTarget), t = e.items, r = e.dropFromOthersDisabled;
  if (!(r && n.currentTarget !== at)) {
    if (Ha = !1, t = t.filter(function(u) {
      return u[Tt] !== Br[Tt];
    }), at !== n.currentTarget) {
      var i = gt.get(at).items, a = i.filter(function(u) {
        return !u[aa];
      });
      Wr(at, a, {
        trigger: xt.DRAGGED_ENTERED_ANOTHER,
        id: dn[Tt],
        source: Yt.POINTER
      });
    }
    var s = n.detail.indexObj.index;
    Ft = n.currentTarget, t.splice(s, 0, Br), Wr(n.currentTarget, t, {
      trigger: xt.DRAGGED_ENTERED,
      id: dn[Tt],
      source: Yt.POINTER
    });
  }
}
function Eu(n) {
  if (Lr) {
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
        d.splice(Hs, 0, Br), Wr(at, d, {
          trigger: xt.DRAGGED_LEFT_ALL,
          id: dn[Tt],
          source: Yt.POINTER
        });
      }
      Wr(n.currentTarget, i, {
        trigger: xt.DRAGGED_LEFT,
        id: dn[Tt],
        source: Yt.POINTER
      });
    }
  }
}
function xu(n) {
  var e = gt.get(n.currentTarget), t = e.items, r = e.dropFromOthersDisabled;
  if (!(r && n.currentTarget !== at)) {
    var i = Dn(t);
    Ha = !1;
    var a = n.detail.indexObj.index, s = Bs(i);
    s !== -1 && i.splice(s, 1), i.splice(a, 0, Br), Wr(n.currentTarget, i, {
      trigger: xt.DRAGGED_OVER_INDEX,
      id: dn[Tt],
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
  }, wt.style.transform = "translate3d(".concat(jt.x - Yn.x, "px, ").concat(jt.y - Yn.y, "px, 0)");
}
function ta() {
  Jo = !0, window.removeEventListener("mousemove", gs), window.removeEventListener("touchmove", gs), window.removeEventListener("mouseup", ta), window.removeEventListener("touchend", ta), Mm(), ym(wt), Ft || (Ft = at);
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
      trigger: Ha ? xt.DROPPED_OUTSIDE_OF_ANY : xt.DROPPED_INTO_ZONE,
      id: dn[Tt],
      source: Yt.POINTER
    }), Ft !== at && ea(at, gt.get(at).items, {
      trigger: xt.DROPPED_INTO_ANOTHER,
      id: dn[Tt],
      source: Yt.POINTER
    });
    var a = Array.from(Ft.children).find(function(s) {
      return s.getAttribute(Gs);
    });
    a && xm(a), Gm();
  }
  gt.get(Ft).dropAnimationDisabled ? i() : Pm(r, i);
}
function Pm(n, e) {
  var t = n > -1 ? Ao(Ft.children[n], !1) : Ao(Ft, !1), r = {
    x: t.left - parseFloat(wt.style.left),
    y: t.top - parseFloat(wt.style.top)
  }, i = gt.get(Ft), a = i.dropAnimationDurationMs, s = "transform ".concat(a, "ms ease");
  wt.style.transition = wt.style.transition ? wt.style.transition + "," + s : s, wt.style.transform = "translate3d(".concat(r.x, "px, ").concat(r.y, "px, 0)"), window.setTimeout(e, a);
}
function km(n, e) {
  as.push({
    dz: n,
    destroy: e
  }), window.requestAnimationFrame(function() {
    Cu(n), document.body.appendChild(n);
  });
}
function Gm() {
  wt && wt.remove && wt.remove(), ln && ln.remove && ln.remove(), wt = void 0, ln = void 0, dn = void 0, Zs = void 0, at = void 0, Hs = void 0, Br = void 0, Ft = void 0, Yn = void 0, jt = void 0, Lr = !1, Jo = !1, $o = void 0, Ha = !1, qn && clearTimeout(qn), qn = void 0, Ia = !1, as.length && (as.forEach(function(n) {
    var e = n.dz, t = n.destroy;
    t(), e.remove();
  }), as = []);
}
function Nm(n, e) {
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
    window.removeEventListener("mousemove", l), window.removeEventListener("touchmove", l), window.removeEventListener("mouseup", u), window.removeEventListener("touchend", u), qn && (clearTimeout(qn), qn = void 0, Ia = !1);
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
    if (h && r.delayTouchStartMs > 0 && !Ia) {
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
    if (!(f.target !== f.currentTarget && (f.target.value !== void 0 || f.target.isContentEditable)) && !f.button && !Lr) {
      var h = !!f.touches, g = h && r.delayTouchStartMs > 0;
      g || f.preventDefault(), f.stopPropagation();
      var p = h ? f.touches[0] : f;
      Yn = {
        x: p.clientX,
        y: p.clientY
      }, jt = Pr({}, Yn), ln = f.currentTarget, g && (Ia = !1, qn = window.setTimeout(function() {
        ln && (Ia = !0, s(), d());
      }, r.delayTouchStartMs)), a();
    }
  }
  function d() {
    Lr = !0;
    var f = i.get(ln);
    Hs = f, at = ln.parentElement;
    var h = at.closest("dialog") || at.closest("[popover]") || at.getRootNode(), g = h.body || h, p = r.items, b = r.type, y = r.centreDraggedOnCursor, x = Dn(p);
    dn = x[f], Zs = b, Br = Fm(dn), wt = _m(ln, y && jt), g.appendChild(wt);
    function E() {
      ln.parentElement ? window.requestAnimationFrame(E) : (ln.setAttribute(Vl, !0), g.appendChild(ln), Om(), Cu(ln), Br[Tt] = dn[Tt], wt.focus());
    }
    window.requestAnimationFrame(E), is(Array.from(Un.get(r.type)).filter(function(C) {
      return C === at || !gt.get(C).dropFromOthersDisabled;
    }), function(C) {
      return gt.get(C).dropTargetStyle;
    }, function(C) {
      return gt.get(C).dropTargetClasses;
    }), x.splice(f, 1, Br), $o = Sm(at), Wr(at, x, {
      trigger: xt.DRAG_STARTED,
      id: dn[Tt],
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
    var h = f.items, g = h === void 0 ? void 0 : h, p = f.flipDurationMs, b = p === void 0 ? 0 : p, y = f.type, x = y === void 0 ? wm : y, E = f.dragDisabled, C = E === void 0 ? !1 : E, w = f.morphDisabled, I = w === void 0 ? !1 : w, S = f.dropFromOthersDisabled, _ = S === void 0 ? !1 : S, T = f.dropTargetStyle, R = T === void 0 ? jl : T, D = f.dropTargetClasses, L = D === void 0 ? [] : D, P = f.transformDraggedElement, ie = P === void 0 ? function() {
    } : P, j = f.centreDraggedOnCursor, H = j === void 0 ? !1 : j, U = f.dropAnimationDisabled, ee = U === void 0 ? !1 : U, ce = f.delayTouchStart, k = ce === void 0 ? !1 : ce;
    r.dropAnimationDurationMs = b;
    var J = 0;
    k === !0 ? J = Lm : typeof k == "number" && isFinite(k) && k >= 0 && (J = k), r.delayTouchStartMs = J, r.type && x !== r.type && zl(n, r.type), r.type = x, r.items = Dn(g), r.dragDisabled = C, r.morphDisabled = I, r.transformDraggedElement = ie, r.centreDraggedOnCursor = H, r.dropAnimationDisabled = ee, t && Lr && !Jo && (!om(R, r.dropTargetStyle) || !lm(L, r.dropTargetClasses)) && (hs([n], function() {
      return r.dropTargetStyle;
    }, function() {
      return L;
    }), is([n], function() {
      return R;
    }, function() {
      return L;
    })), r.dropTargetStyle = R, r.dropTargetClasses = Dn(L);
    function ne(V, O) {
      return gt.get(V) ? gt.get(V)[O] : r[O];
    }
    t && Lr && r.dropFromOthersDisabled !== _ && (_ ? hs([n], function(V) {
      return ne(V, "dropTargetStyle");
    }, function(V) {
      return ne(V, "dropTargetClasses");
    }) : is([n], function(V) {
      return ne(V, "dropTargetStyle");
    }, function(V) {
      return ne(V, "dropTargetClasses");
    })), r.dropFromOthersDisabled = _, gt.set(n, r), Rm(n, x);
    for (var be = Lr ? Bs(r.items) : -1, fe = 0; fe < n.children.length; fe++) {
      var W = n.children[fe];
      if (Am(W, C), fe === be) {
        I || Cm(wt, W, jt.x, jt.y), r.transformDraggedElement(wt, dn, fe), Em(W);
        continue;
      }
      W.removeEventListener("mousedown", ro.get(W)), W.removeEventListener("touchstart", ro.get(W)), C || (W.addEventListener("mousedown", c), W.addEventListener("touchstart", c), ro.set(W, c)), i.set(W, fe), t || (t = !0);
    }
  }
  return v(e), {
    update: function(h) {
      v(h);
    },
    destroy: function() {
      function h() {
        zl(n, gt.get(n).type), gt.delete(n);
      }
      Lr && !n.closest("[".concat(Vl, "]")) ? km(n, h) : h();
    }
  };
}
var Qa, xo = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
}, Su = (Qa = {}, $i(Qa, xo.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), $i(Qa, xo.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list"), Qa), Zm = "dnd-action-aria-alert", bt;
function So() {
  bt || (bt = document.createElement("div"), function() {
    bt.id = Zm, bt.style.position = "fixed", bt.style.bottom = "0", bt.style.left = "0", bt.style.zIndex = "-5", bt.style.opacity = "0", bt.style.height = "0", bt.style.width = "0", bt.setAttribute("role", "alert");
  }(), document.body.prepend(bt), Object.entries(Su).forEach(function(n) {
    var e = Zg(n, 2), t = e[0], r = e[1];
    return document.body.prepend(Um(t, r));
  }));
}
function Hm() {
  return Ko ? null : (document.readyState === "complete" ? So() : window.addEventListener("DOMContentLoaded", So), Pr({}, xo));
}
function Bm() {
  Ko || !bt || (Object.keys(Su).forEach(function(n) {
    var e;
    return (e = document.getElementById(n)) === null || e === void 0 ? void 0 : e.remove();
  }), bt.remove(), bt = void 0);
}
function Um(n, e) {
  var t = document.createElement("div");
  return t.id = n, t.innerHTML = "<p>".concat(e, "</p>"), t.style.display = "none", t.style.position = "fixed", t.style.zIndex = "-5", t;
}
function Hi(n) {
  if (!Ko) {
    bt || So(), bt.innerHTML = "";
    var e = document.createTextNode(n);
    bt.appendChild(e), bt.style.display = "none", bt.style.display = "inline";
  }
}
var Wm = "--any--", Xl = {
  outline: "rgba(255, 255, 102, 0.7) solid 2px"
}, Tn = !1, wo, zt, gi = "", ii, er, kr = "", ms = /* @__PURE__ */ new WeakSet(), Yl = /* @__PURE__ */ new WeakMap(), ql = /* @__PURE__ */ new WeakMap(), To = /* @__PURE__ */ new Map(), Ot = /* @__PURE__ */ new Map(), Hn = /* @__PURE__ */ new Map(), ps;
function jm(n, e) {
  Hn.size === 0 && (ps = Hm(), window.addEventListener("keydown", wu), window.addEventListener("click", Tu)), Hn.has(e) || Hn.set(e, /* @__PURE__ */ new Set()), Hn.get(e).has(n) || (Hn.get(e).add(n), hu());
}
function Kl(n, e) {
  zt === n && wa(), Hn.get(e).delete(n), gu(), Hn.get(e).size === 0 && Hn.delete(e), Hn.size === 0 && (window.removeEventListener("keydown", wu), window.removeEventListener("click", Tu), ps = void 0, Bm());
}
function wu(n) {
  if (Tn)
    switch (n.key) {
      case "Escape": {
        wa();
        break;
      }
    }
}
function Tu() {
  Tn && (ms.has(document.activeElement) || wa());
}
function Vm(n) {
  if (Tn) {
    var e = n.currentTarget;
    if (e !== zt) {
      gi = e.getAttribute("aria-label") || "";
      var t = Ot.get(zt), r = t.items, i = r.find(function(v) {
        return v[Tt] === er;
      }), a = r.indexOf(i), s = r.splice(a, 1)[0], u = Ot.get(e), l = u.items, c = u.autoAriaDisabled;
      e.getBoundingClientRect().top < zt.getBoundingClientRect().top || e.getBoundingClientRect().left < zt.getBoundingClientRect().left ? (l.push(s), c || Hi("Moved item ".concat(kr, " to the end of the list ").concat(gi))) : (l.unshift(s), c || Hi("Moved item ".concat(kr, " to the beginning of the list ").concat(gi)));
      var d = zt;
      ea(d, r, {
        trigger: xt.DROPPED_INTO_ANOTHER,
        id: er,
        source: Yt.KEYBOARD
      }), ea(e, l, {
        trigger: xt.DROPPED_INTO_ZONE,
        id: er,
        source: Yt.KEYBOARD
      }), zt = e;
    }
  }
}
function Du() {
  To.forEach(function(n, e) {
    var t = n.update;
    return t(Ot.get(e));
  });
}
function wa() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  Ot.get(zt).autoAriaDisabled || Hi("Stopped dragging item ".concat(kr)), ms.has(document.activeElement) && document.activeElement.blur(), n && Wr(zt, Ot.get(zt).items, {
    trigger: xt.DRAG_STOPPED,
    id: er,
    source: Yt.KEYBOARD
  }), hs(Hn.get(wo), function(e) {
    return Ot.get(e).dropTargetStyle;
  }, function(e) {
    return Ot.get(e).dropTargetClasses;
  }), ii = null, er = null, kr = "", wo = null, zt = null, gi = "", Tn = !1, Du();
}
function zm(n, e) {
  var t = {
    items: void 0,
    type: void 0,
    dragDisabled: !1,
    zoneTabIndex: 0,
    zoneItemTabIndex: 0,
    dropFromOthersDisabled: !1,
    dropTargetStyle: Xl,
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
        g < h.length - 1 && (t.autoAriaDisabled || Hi("Moved item ".concat(kr, " to position ").concat(g + 2, " in the list ").concat(gi)), r(f, g, g + 1), ea(n, f, {
          trigger: xt.DROPPED_INTO_ZONE,
          id: er,
          source: Yt.KEYBOARD
        }));
        break;
      }
      case "ArrowUp":
      case "ArrowLeft": {
        if (!Tn) return;
        d.preventDefault(), d.stopPropagation();
        var p = Ot.get(n), b = p.items, y = Array.from(n.children), x = y.indexOf(d.currentTarget);
        x > 0 && (t.autoAriaDisabled || Hi("Moved item ".concat(kr, " to position ").concat(x, " in the list ").concat(gi)), r(b, x, x - 1), ea(n, b, {
          trigger: xt.DROPPED_INTO_ZONE,
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
      var f = "Started dragging item ".concat(kr, ". Use the arrow keys to move it within its list ").concat(gi);
      v.length > 1 && (f += ", or tab to another list in order to move the item into it"), Hi(f);
    }
    Wr(n, Ot.get(n).items, {
      trigger: xt.DRAG_STARTED,
      id: er,
      source: Yt.KEYBOARD
    }), Du();
  }
  function s(d) {
    Tn && d.currentTarget !== ii && (d.stopPropagation(), wa(!1), a(d));
  }
  function u(d) {
    var v = Ot.get(n), f = v.items, h = Array.from(n.children), g = h.indexOf(d);
    ii = d, ii.tabIndex = t.zoneItemTabIndex, er = f[g][Tt], kr = h[g].getAttribute("aria-label") || "";
  }
  function l(d) {
    var v = d.items, f = v === void 0 ? [] : v, h = d.type, g = h === void 0 ? Wm : h, p = d.dragDisabled, b = p === void 0 ? !1 : p, y = d.zoneTabIndex, x = y === void 0 ? 0 : y, E = d.zoneItemTabIndex, C = E === void 0 ? 0 : E, w = d.dropFromOthersDisabled, I = w === void 0 ? !1 : w, S = d.dropTargetStyle, _ = S === void 0 ? Xl : S, T = d.dropTargetClasses, R = T === void 0 ? [] : T, D = d.autoAriaDisabled, L = D === void 0 ? !1 : D;
    t.items = Dn(f), t.dragDisabled = b, t.dropFromOthersDisabled = I, t.zoneTabIndex = x, t.zoneItemTabIndex = C, t.dropTargetStyle = _, t.dropTargetClasses = R, t.autoAriaDisabled = L, t.type && g !== t.type && Kl(n, t.type), t.type = g, jm(n, g), L || (n.setAttribute("aria-disabled", b), n.setAttribute("role", "list"), n.setAttribute("aria-describedby", b ? ps.DND_ZONE_DRAG_DISABLED : ps.DND_ZONE_ACTIVE)), Ot.set(n, t), Tn ? n.tabIndex = n === zt || ii.contains(n) || t.dropFromOthersDisabled || zt && t.type !== Ot.get(zt).type ? -1 : 0 : n.tabIndex = t.zoneTabIndex, n.addEventListener("focus", Vm);
    for (var P = function(H) {
      var U = n.children[H];
      ms.add(U), U.tabIndex = Tn ? -1 : t.zoneItemTabIndex, L || U.setAttribute("role", "listitem"), U.removeEventListener("keydown", Yl.get(U)), U.removeEventListener("click", ql.get(U)), b || (U.addEventListener("keydown", i), Yl.set(U, i), U.addEventListener("click", s), ql.set(U, s)), Tn && t.items[H][Tt] === er && (ii = U, ii.tabIndex = t.zoneItemTabIndex, U.focus());
    }, ie = 0; ie < n.children.length; ie++)
      P(ie);
  }
  l(e);
  var c = {
    update: function(v) {
      l(v);
    },
    destroy: function() {
      Kl(n, t.type), Ot.delete(n), To.delete(n);
    }
  };
  return To.set(n, c), c;
}
var Xm = ["items", "flipDurationMs", "type", "dragDisabled", "morphDisabled", "dropFromOthersDisabled", "zoneTabIndex", "zoneItemTabIndex", "dropTargetStyle", "dropTargetClasses", "transformDraggedElement", "autoAriaDisabled", "centreDraggedOnCursor", "delayTouchStart", "dropAnimationDisabled"];
function Ym(n, e) {
  if (qm(n))
    return {
      update: function() {
      },
      destroy: function() {
      }
    };
  Ql(e);
  var t = Nm(n, e), r = zm(n, e);
  return {
    update: function(a) {
      Ql(a), t.update(a), r.update(a);
    },
    destroy: function() {
      t.destroy(), r.destroy();
    }
  };
}
function qm(n) {
  return !!n.closest("[".concat($g, '="true"]'));
}
function Ql(n) {
  var e = n.items;
  n.flipDurationMs, n.type, n.dragDisabled, n.morphDisabled, n.dropFromOthersDisabled;
  var t = n.zoneTabIndex, r = n.zoneItemTabIndex;
  n.dropTargetStyle;
  var i = n.dropTargetClasses;
  n.transformDraggedElement, n.autoAriaDisabled, n.centreDraggedOnCursor;
  var a = n.delayTouchStart;
  n.dropAnimationDisabled;
  var s = Ng(n, Xm);
  if (Object.keys(s).length > 0 && console.warn("dndzone will ignore unknown options", s), !e)
    throw new Error("no 'items' key provided to dndzone");
  var u = e.find(function(d) {
    return !{}.hasOwnProperty.call(d, Tt);
  });
  if (u)
    throw new Error("missing '".concat(Tt, "' property for item ").concat(ga(u)));
  if (i && !Array.isArray(i))
    throw new Error("dropTargetClasses should be an array but instead it is a ".concat(ki(i), ", ").concat(ga(i)));
  if (t && !Jl(t))
    throw new Error("zoneTabIndex should be a number but instead it is a ".concat(ki(t), ", ").concat(ga(t)));
  if (r && !Jl(r))
    throw new Error("zoneItemTabIndex should be a number but instead it is a ".concat(ki(r), ", ").concat(ga(r)));
  if (a !== void 0 && a !== !1) {
    var l = a === !0, c = typeof a == "number" && isFinite(a) && a >= 0;
    if (!l && !c)
      throw new Error("delayTouchStart should be a boolean (true/false) or a non-negative number but instead it is a ".concat(ki(a), ", ").concat(ga(a)));
  }
}
function Jl(n) {
  return !isNaN(n) && function(e) {
    return (e | 0) === e;
  }(parseFloat(n));
}
function Lu(n) {
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
var Nn = Lu(!0), Bi = Lu(!1);
function $l() {
  return {
    dragDisabled: Bi.get() || Nn.get(),
    zoneItemTabIndex: -1
  };
}
function Rn(n, e) {
  var t;
  Bi.set((t = e == null ? void 0 : e.dragDisabled) !== null && t !== void 0 ? t : !1);
  var r = e, i = Ym(n, Pr(Pr({}, r), $l()));
  function a() {
    i.update(Pr(Pr({}, r), $l()));
  }
  Nn.subscribe(a);
  function s(l) {
    var c = l.detail.info, d = c.source, v = c.trigger;
    d === Yt.KEYBOARD && v === xt.DRAG_STOPPED && Nn.set(!0);
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
function Km(n) {
  const e = n - 1;
  return e * e * e + 1;
}
function Us(n, { from: e, to: t }, r = {}) {
  var { delay: i = 0, duration: a = (I) => Math.sqrt(I) * 120, easing: s = Km } = r, u = getComputedStyle(n), l = u.transform === "none" ? "" : u.transform, [c, d] = u.transformOrigin.split(" ").map(parseFloat);
  c /= n.clientWidth, d /= n.clientHeight;
  var v = Qm(n), f = n.clientWidth / t.width / v, h = n.clientHeight / t.height / v, g = e.left + e.width * c, p = e.top + e.height * d, b = t.left + t.width * c, y = t.top + t.height * d, x = (g - b) * f, E = (p - y) * h, C = e.width / t.width, w = e.height / t.height;
  return {
    delay: i,
    duration: typeof a == "function" ? a(Math.sqrt(x * x + E * E)) : a,
    easing: s,
    css: (I, S) => {
      var _ = S * x, T = S * E, R = I + S * C, D = I + S * w;
      return `transform: ${l} translate(${_}px, ${T}px) scale(${R}, ${D});`;
    }
  };
}
function Qm(n) {
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
const Jm = jn([]);
Jm.subscribe;
pt([
  "click",
  "keydown",
  "pointerdown",
  "pointerup",
  "pointermove"
]);
var $m = /* @__PURE__ */ X("<div><!></div>");
function el(n, e) {
  let t = m(e, "variant", 3, "secondary");
  var r = $m(), i = N(r);
  _e(i, () => e.children ?? Ie), ue(() => _r(r, 1, `osc-card osc-card--${t()}`, "svelte-14hhvrx")), A(n, r);
}
var ep = /* @__PURE__ */ X('<div class="panel-parent__header svelte-1rw2lbw"><!></div>'), tp = /* @__PURE__ */ X('<div class="panel-parent__body svelte-1rw2lbw"><!></div>'), np = /* @__PURE__ */ X('<div class="panel-parent__footer svelte-1rw2lbw"><!></div>'), rp = /* @__PURE__ */ X('<div class="panel-parent svelte-1rw2lbw"><!> <!> <!></div>');
function tl(n, e) {
  let t = m(e, "backgroundColor", 3, "");
  var r = rp(), i = N(r);
  {
    var a = (d) => {
      var v = ep(), f = N(v);
      _e(f, () => e.header), A(d, v);
    };
    te(i, (d) => {
      e.header && d(a);
    });
  }
  var s = q(i, 2);
  {
    var u = (d) => {
      var v = tp(), f = N(v);
      _e(f, () => e.content), A(d, v);
    };
    te(s, (d) => {
      e.content && d(u);
    });
  }
  var l = q(s, 2);
  {
    var c = (d) => {
      var v = np(), f = N(v);
      _e(f, () => e.additional), A(d, v);
    };
    te(l, (d) => {
      e.additional && d(c);
    });
  }
  ue(() => qe(r, `--bg-color: ${t() ?? ""}`)), A(n, r);
}
pt(["click"]);
const ip = 4e3;
function ap() {
  let n = Ee({ items: [] }), e = 0;
  const t = (i) => {
    n.items = n.items.filter((a) => a.id !== i);
  }, r = (i, a, s, u = ip) => {
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
ap();
pt(["input"]);
const sp = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHByb2Nlc3Nlcz4KICA8cHJvY2Vzcz4KICAgIDxpZD5zdGFuZGFyZC1wcm9jZXNzLTE8L2lkPgogICAgPHZlcnNpb24+MC4wLjE8L3ZlcnNpb24+CiAgICA8bmFtZT5TdGFuZGFyZCBQcm9jZXNzIDE8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+CiAgICAgIFRoaXMgaXMgYSBzdGFuZGFyZGl6ZWQgcHJvY2VzcyB1c2VkIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHkKICAgIDwvZGVzY3JpcHRpb24+CgogICAgPHBsdWdpbnMtc2VxdWVuY2U+CiAgICAgIDxncm91cD4KICAgICAgICA8dGl0bGU+VHlwZXM8L3RpdGxlPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+dGVtcGxhdGUtZ2VuZXJhdG9yLXh5ejwvaWQ+CiAgICAgICAgICA8bmFtZT5UZW1wbGF0ZSBHZW5lcmF0b3I8L25hbWU+CiAgICAgICAgICA8c3JjIHR5cGU9ImV4dGVybmFsIj4KICAgICAgICAgICAgaHR0cHM6Ly9hc2UtY29tcGFzLmdpdGh1Yi5pby9jb21wYXMtdHJhbnNuZXRidy1wbHVnaW5zL2JlYXJpbmdwb2ludC9jb21wYXMvcGx1Z2lucy90ZW1wbGF0ZS1nZW5lcmF0b3IvaW5kZXguanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+dHlwZS1kZXNpZ25lci14eXo8L2lkPgogICAgICAgICAgPG5hbWU+VHlwZSBEZXNpZ25lcjwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iZXh0ZXJuYWwiPgogICAgICAgICAgICBodHRwczovL3NwcmludGVpbnMuZ2l0aHViLmlvL29zY2QtcGx1Z2lucy90eXBlLWRlc2lnbmVyL2luZGV4LmpzCiAgICAgICAgICA8L3NyYz4KICAgICAgICA8L3BsdWdpbj4KCiAgICAgICAgPHBsdWdpbj4KICAgICAgICAgIDxpZD50eXBlLWRpc3RyaWJ1dG9yLXh5ejwvaWQ+CiAgICAgICAgICA8bmFtZT5UeXBlIERpc3RyaWJ1dG9yPC9uYW1lPgogICAgICAgICAgPHNyYyB0eXBlPSJleHRlcm5hbCI+CiAgICAgICAgICAgIGh0dHBzOi8vYXNlLWNvbXBhcy5naXRodWIuaW8vY29tcGFzLXRyYW5zbmV0YnctcGx1Z2lucy9iZWFyaW5ncG9pbnQvY29tcGFzL3BsdWdpbnMvdHlwZS1kaXN0cmlidXRvci9pbmRleC5qcwogICAgICAgICAgPC9zcmM+CiAgICAgICAgPC9wbHVnaW4+CiAgICAgIDwvZ3JvdXA+CgogICAgICA8Z3JvdXA+CiAgICAgICAgPHRpdGxlPkNvbmZpZ3VyYXRpb248L3RpdGxlPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+Y29tbXVuaWNhdGlvbi14eXo8L2lkPgogICAgICAgICAgPG5hbWU+Q29tbXVuaWNhdGlvbjwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iaW50ZXJuYWwiPgogICAgICAgICAgICAvcGx1Z2lucy9zcmMvZWRpdG9ycy9Db21tdW5pY2F0aW9uLmpzCiAgICAgICAgICA8L3NyYz4KICAgICAgICA8L3BsdWdpbj4KCiAgICAgICAgPHBsdWdpbj4KICAgICAgICAgIDxpZD5zdWJzdGF0aW9uLXh5ejwvaWQ+CiAgICAgICAgICA8bmFtZT5TdWJzdGF0aW9uPC9uYW1lPgogICAgICAgICAgPHNyYyB0eXBlPSJpbnRlcm5hbCI+CiAgICAgICAgICAgIC9wbHVnaW5zL3NyYy9lZGl0b3JzL1N1YnN0YXRpb24uanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+cHVibGlzaGVyLXh5ejwvaWQ+CiAgICAgICAgICA8bmFtZT5QdWJsaXNoZXI8L25hbWU+CiAgICAgICAgICA8c3JjIHR5cGU9ImludGVybmFsIj4KICAgICAgICAgICAgL2V4dGVybmFsLXBsdWdpbnMvb3NjZC1wdWJsaXNoZXIvb3NjZC1wdWJsaXNoZXIuanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+c3Vic2NyaWJlLWxhdGVyLWJpbmRpbmcteHl6PC9pZD4KICAgICAgICAgIDxuYW1lPlN1YnNjcmliZTwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iaW50ZXJuYWwiPgogICAgICAgICAgICAvZXh0ZXJuYWwtcGx1Z2lucy9vc2NkLXN1YnNjcmliZXItbGF0ZXItYmluZGluZy9vc2NkLXN1YnNjcmliZXItbGF0ZXItYmluZGluZy5qcwogICAgICAgICAgPC9zcmM+CiAgICAgICAgPC9wbHVnaW4+CiAgICAgIDwvZ3JvdXA+CgogICAgICA8Z3JvdXA+CiAgICAgICAgPHRpdGxlPkRvY3VtZW50YXRpb248L3RpdGxlPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+YXV0b2RvYy14eXo8L2lkPgogICAgICAgICAgPG5hbWU+QXV0b0RvYzwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iZXh0ZXJuYWwiPgogICAgICAgICAgICBodHRwczovL3NwcmludGVpbnMuZ2l0aHViLmlvL29zY2QtcGx1Z2lucy9hdXRvLWRvYy9pbmRleC5qcwogICAgICAgICAgPC9zcmM+CiAgICAgICAgPC9wbHVnaW4+CgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+bG9jYXRpb24tbWFuYWdlci14eXo8L2lkPgogICAgICAgICAgPG5hbWU+TG9jYXRpb24gTWFuYWdlcjwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iZXh0ZXJuYWwiPgogICAgICAgICAgICBodHRwczovL2FzZS1jb21wYXMuZ2l0aHViLmlvL2NvbXBhcy10cmFuc25ldGJ3LXBsdWdpbnMvYmVhcmluZ3BvaW50L2NvbXBhcy9wbHVnaW5zL2xvY2F0aW9uLW1hbmFnZXIvaW5kZXguanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgoKICAgICAgICA8cGx1Z2luPgogICAgICAgICAgPGlkPmhpc3Rvcnktdmlld2VyLXh5ejwvaWQ+CiAgICAgICAgICA8bmFtZT5IaXN0b3J5IFZpZXdlcjwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iZXh0ZXJuYWwiPgogICAgICAgICAgICBodHRwczovL2FzZS1jb21wYXMuZ2l0aHViLmlvL2NvbXBhcy10cmFuc25ldGJ3LXBsdWdpbnMvYmVhcmluZ3BvaW50L2NvbXBhcy9wbHVnaW5zL2hpc3Rvcnktdmlld2VyL2luZGV4LmpzCiAgICAgICAgICA8L3NyYz4KICAgICAgICA8L3BsdWdpbj4KICAgICAgPC9ncm91cD4KICAgIDwvcGx1Z2lucy1zZXF1ZW5jZT4KICA8L3Byb2Nlc3M+CjwvcHJvY2Vzc2VzPgo=", Do = Ee({ loading: !1 }), Lo = Ee({ error: "" }), $t = Ee({ processes: [] }), ft = Ee({ process: null }), mn = Ee({ isEditing: !1 }), nl = Ee({ plugins: [] }), op = sp, Ru = "engineeringWizardProcesses", lp = "external";
if (typeof localStorage < "u") {
  const n = localStorage.getItem(Ru);
  if (n)
    try {
      const e = JSON.parse(n);
      Array.isArray(e) && ($t.processes = e);
    } catch {
    }
}
Bc(() => {
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
        localStorage.setItem(Ru, JSON.stringify(n));
      } catch {
      }
  });
});
const mr = (n) => {
  var e;
  return ((e = n == null ? void 0 : n.textContent) == null ? void 0 : e.trim()) ?? "";
}, dp = (n, e) => (n == null ? void 0 : n.getAttribute(e)) ?? void 0, up = (n) => {
  const e = dp(n == null ? void 0 : n.querySelector("src"), "type") ?? "";
  return e === "internal" || e === "external" ? e : lp;
}, Ja = (n, e) => Array.from(n.querySelectorAll(e)), ed = (n) => ({
  id: mr(n.querySelector("id")),
  name: mr(n.querySelector("name")),
  src: mr(n.querySelector("src")) || void 0,
  sourceUrl: mr(n.querySelector("sourceUrl")) || void 0,
  type: up(n)
}), cp = (n) => Ja(n, "process").map((e) => {
  const t = Ja(e, ":scope > plugins-sequence > group"), r = t.length ? t.map((i) => ({
    title: mr(i.querySelector(":scope > title")) || "Untitled",
    plugins: Ja(i, ":scope > plugin").map(ed)
  })) : [
    {
      title: "Ungrouped",
      plugins: Ja(e, ":scope > plugins-sequence > plugin").map(ed)
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
async function fp() {
  Do.loading = !0, Lo.error = "";
  try {
    const n = await fetch(op, { cache: "no-cache" });
    if (!n.ok)
      throw new Error(`HTTP ${n.status}${n.statusText ? `: ${n.statusText}` : ""}`);
    const e = await n.text();
    if (typeof DOMParser > "u")
      throw new Error("DOMParser is not available in this environment.");
    const t = new DOMParser().parseFromString(e, "application/xml");
    if (t.getElementsByTagName("parsererror").length)
      throw new Error("Invalid XML file format.");
    const r = cp(t), i = As($t.processes);
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
function vp(n) {
  const e = (n || "").trim() || "process", t = new Set(($t.processes ?? []).map((a) => a.id));
  if (!t.has(e)) return e;
  let r = 2, i = `${e}-${r}`;
  for (; t.has(i); )
    r += 1, i = `${e}-${r}`;
  return i;
}
function hp(n) {
  var a;
  const e = As(n), t = (e.id || e.name || "process").trim(), r = vp(t), i = {
    id: r,
    version: e.version || "1.0.0",
    name: e.name || r,
    description: e.description || "",
    pluginGroups: (a = e.pluginGroups) != null && a.length ? e.pluginGroups : [{ title: "Ungrouped", plugins: [] }]
  };
  return $t.processes = [...$t.processes ?? [], i], i;
}
function gp(n, e, t) {
  const r = "Ungrouped", i = $t.processes.find((u) => u.id === n);
  if (!i) return;
  const a = i.pluginGroups ?? (i.pluginGroups = []);
  let s = a.find((u) => u.title === r);
  s || (s = { title: r, plugins: [] }, a.push(s)), s.plugins || (s.plugins = []), s.plugins.push(e);
}
function mp(n, e) {
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
function pp(n) {
  const e = $t.processes.find((t) => t.id === n);
  if (!(!e || !e.pluginGroups))
    for (const t of e.pluginGroups)
      t.plugins && (t.plugins.length = 0);
}
function Ip(n, e, t) {
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
function bp(n, e) {
  const t = $t.processes.find((r) => r.id === n);
  t && t.pluginGroups.splice(0, t.pluginGroups.length, ...e);
}
function _p(n) {
  nl.plugins = [...n];
}
function yp(n) {
  return (n.pluginGroups ?? []).flatMap((e) => e.plugins ?? []);
}
var Cp = (n, e, t) => e.handleView(t()), Ap = (n, e, t) => e.handleStart(t()), Ep = /* @__PURE__ */ X('<button type="button" class="icon svelte-au6aaq" aria-label="View process"><!></button> <button type="button" class="icon svelte-au6aaq" aria-label="Start process"><!></button>', 1), xp = /* @__PURE__ */ X(`<div class="processes svelte-au6aaq"><div class="process-banner svelte-au6aaq"><div class="process-banner__info svelte-au6aaq"><!> <span class="svelte-au6aaq">A process “Process Name C” has already been started for the ---.scd.
        Would you like to continue where you left off?</span></div> <!></div> <div class="process-toolbar svelte-au6aaq"><!> <!></div> <!></div>`);
function Sp(n, e) {
  Ce(e, !0);
  let t = /* @__PURE__ */ le(""), r = /* @__PURE__ */ re(() => o(t).trim().toLowerCase()), i = /* @__PURE__ */ re(() => ($t.processes ?? []).map((b) => ({ ...b, displayName: b.name || b.id }))), a = /* @__PURE__ */ re(() => o(r) ? o(i).filter((b) => (b.displayName ?? "").toLowerCase().includes(o(r))) : o(i));
  const s = [
    { key: "displayName", header: "Name" },
    { key: "description", header: "Description" }
  ];
  var u = xp(), l = N(u), c = N(l), d = N(c);
  Gh(d, {});
  var v = q(c, 2);
  Vn(v, {
    variant: "raised",
    style: "--mdc-theme-primary: #ffffff; --mdc-theme-on-primary: #004552",
    $$events: { click: () => console.log("Continue Process") },
    children: (b, y) => {
      var x = rt("CONTINUE");
      A(b, x);
    },
    $$slots: { default: !0 }
  });
  var f = q(l, 2), h = N(f);
  pr(h, {
    variant: "outlined",
    label: "Search Processes",
    get value() {
      return o(t);
    },
    set value(b) {
      B(t, b, !0);
    }
  });
  var g = q(h, 2);
  Vn(g, {
    variant: "raised",
    style: "--mdc-theme-primary: #004552; --mdc-theme-on-primary: #ffffff",
    get onclick() {
      return e.handleAddNew;
    },
    children: (b, y) => {
      var x = rt("ADD NEW PROCESS");
      A(b, x);
    },
    $$slots: { default: !0 }
  });
  var p = q(f, 2);
  wg(p, {
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
    actions: (y, x) => {
      let E = () => x == null ? void 0 : x().item;
      var C = Ep(), w = K(C);
      w.__click = [Cp, e, E];
      var I = N(w);
      du(I, { svgStyles: "fill: #002B37; width: 100%; height: 100%;" });
      var S = q(w, 2);
      S.__click = [Ap, e, E];
      var _ = N(S);
      Ph(_, { svgStyles: "fill: #002B37; width: 100%; height: 100%;" }), A(y, C);
    },
    $$slots: { actions: !0 }
  }), A(n, u), Ae();
}
pt(["click"]);
var wp = /* @__PURE__ */ X("<div><!></div>");
function rl(n, e) {
  const t = m(e, "active", 3, !1), r = m(e, "visited", 3, !1);
  var i = wp(), a = N(i);
  {
    var s = (l) => {
      var c = oe(), d = K(c);
      {
        var v = (h) => {
          uu(h);
        }, f = (h) => {
          var g = oe(), p = K(g);
          {
            var b = (x) => {
              Rh(x);
            }, y = (x) => {
              var E = oe(), C = K(E);
              {
                var w = (I) => {
                  Mh(I, {});
                };
                te(
                  C,
                  (I) => {
                    e.status === "warning" && I(w);
                  },
                  !0
                );
              }
              A(x, E);
            };
            te(
              p,
              (x) => {
                e.status === "error" ? x(b) : x(y, !1);
              },
              !0
            );
          }
          A(h, g);
        };
        te(d, (h) => {
          e.status === "check" ? h(v) : h(f, !1);
        });
      }
      A(l, c);
    }, u = (l) => {
      var c = rt();
      ue(() => Me(c, e.number)), A(l, c);
    };
    te(a, (l) => {
      r() && e.status ? l(s) : l(u, !1);
    });
  }
  ue(() => _r(i, 1, `step-circle ${t() ? "active" : ""} ${r() ? "visited" : ""}`, "svelte-198pmxh")), A(n, i);
}
var Tp = (n, e, t) => e.onSelect(o(t).id), Dp = /* @__PURE__ */ X('<button class="step-button svelte-1ar0udo"><!></button>'), Lp = /* @__PURE__ */ X('<div class="step-line svelte-1ar0udo" aria-hidden="true"></div>'), Rp = /* @__PURE__ */ X('<div class="step svelte-1ar0udo"><!> <p> </p></div> <!>', 1), Op = /* @__PURE__ */ X('<div class="steps svelte-1ar0udo"></div>');
function Mp(n, e) {
  Ce(e, !0);
  let t = m(e, "items", 19, () => []), r = m(e, "visited", 19, () => []), i = m(e, "currentId", 3, null), a = m(e, "status", 19, () => ({})), s = m(e, "tooltipMap", 19, () => ({}));
  var u = Op();
  cn(u, 21, t, br, (l, c, d) => {
    var v = Rp(), f = K(v), h = N(f);
    {
      let x = /* @__PURE__ */ re(() => s()[o(c).id] ?? "");
      fu(h, {
        get content() {
          return o(x);
        },
        side: "bottom",
        children: (E, C) => {
          var w = Dp();
          w.__click = [Tp, e, c];
          var I = N(w);
          {
            let S = /* @__PURE__ */ re(() => o(c).id === i()), _ = /* @__PURE__ */ re(() => r().includes(o(c).id) && o(c).id !== i());
            rl(I, {
              number: d + 1,
              get active() {
                return o(S);
              },
              get visited() {
                return o(_);
              },
              get status() {
                return a()[o(c).id];
              }
            });
          }
          ue(() => mt(w, "aria-current", o(c).id === i() ? "step" : void 0)), A(E, w);
        },
        $$slots: { default: !0 }
      });
    }
    var g = q(h, 2), p = N(g), b = q(f, 2);
    {
      var y = (x) => {
        var E = Lp();
        A(x, E);
      };
      te(b, (x) => {
        d < t().length - 1 && x(y);
      });
    }
    ue(() => Me(p, o(c).label)), A(l, v);
  }), A(n, u), Ae();
}
pt(["click"]);
function Fp(n, e) {
  const t = [
    { id: "process-definition", label: "Process Definition" },
    {
      id: "validator-configuration",
      label: "Validator Configuration"
    }
  ];
  let r = m(e, "currentId", 3, null), i = m(e, "visited", 19, () => []);
  Mp(n, {
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
var Pp = /* @__PURE__ */ X('<div class="add-group-form svelte-1ceeuzb"><!> <!></div>');
function kp(n, e) {
  Ce(e, !0);
  let t = m(e, "open", 15, !1), r = /* @__PURE__ */ le(""), i = /* @__PURE__ */ le(Ee((e.groups + 1).toString()));
  const a = () => Hr("cancel"), s = () => Hr("confirm", { name: o(r), position: Number(o(i)) });
  let u = /* @__PURE__ */ re(() => [
    ...Array.from({ length: e.groups + 1 }, (c, d) => ({ value: (d + 1).toString(), label: (d + 1).toString() }))
    // iterate from 1..groups+1
  ]), l = /* @__PURE__ */ re(() => o(r) && o(i));
  {
    const c = (v) => {
      var f = Pp(), h = N(f);
      eu(h, {
        label: "Name",
        placeholder: "Group 1",
        variant: "outlined",
        required: !0,
        get value() {
          return o(r);
        },
        set value(p) {
          B(r, p, !0);
        }
      });
      var g = q(h, 2);
      ih(g, {
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
          B(i, p, !0);
        }
      }), A(v, f);
    };
    let d = /* @__PURE__ */ re(() => !o(l));
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
var Gp = /* @__PURE__ */ X('<div class="group-list-item svelte-1xbvuu5"><div><!></div> <div><!></div> <!> <!></div>'), Np = /* @__PURE__ */ X('<div class="edit-groups-form"><h3>Drag & Drop to change Order</h3> <div></div></div>');
function Zp(n, e) {
  Ce(e, !0);
  const t = 100;
  let r = m(e, "open", 15, !1), i = /* @__PURE__ */ le(Ee([...e.groups]));
  const a = () => Hr("cancel"), s = () => {
    Hr("confirm", { groups: o(i).map((v) => ({ ...v })) });
  }, u = (v) => () => {
    B(i, o(i).filter((f) => f.id !== v), !0);
  }, l = (v) => {
    B(i, v.detail.items, !0);
  };
  function c(v, f, h) {
    const g = v.querySelector(".step-circle");
    g && (g.innerHTML = h + 1);
  }
  let d = /* @__PURE__ */ re(() => o(i).every((v) => v.title.trim().length > 0));
  {
    const v = (h) => {
      var g = Np(), p = q(N(g), 2);
      cn(p, 31, () => o(i), (b) => b.id, (b, y, x) => {
        var E = Gp(), C = N(E), w = N(C);
        {
          let R = /* @__PURE__ */ re(() => o(x) + 1);
          rl(w, {
            get number() {
              return o(R);
            }
          });
        }
        var I = q(C, 2), S = N(I);
        Fs(S, {}), De(I, (R) => On == null ? void 0 : On(R));
        var _ = q(I, 2);
        eu(_, {
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
        var T = q(_, 2);
        {
          let R = /* @__PURE__ */ re(() => u(o(y).id));
          vu(T, {
            type: "delete",
            tooltip: "Delete",
            fillColor: "#FF203A",
            get onClick() {
              return o(R);
            }
          });
        }
        ue(() => mt(E, "data-id", o(y).id)), Rs(E, () => Us, () => ({ duration: t })), A(b, E);
      }), De(p, (b, y) => Rn == null ? void 0 : Rn(b, y), () => ({
        items: o(i),
        flipDurationMs: t,
        dropTargetStyle: {},
        transformDraggedElement: c,
        type: "order-ew-groups-zone"
      })), Pt("consider", p, l), Pt("finalize", p, l), A(h, g);
    };
    let f = /* @__PURE__ */ re(() => !o(d));
    zo(n, {
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
  Ae();
}
async function Hp(n, e, t) {
  const r = await Ga(kp, { groups: e().length });
  r.type === "confirm" && t()(r.data.name, r.data.position);
}
async function Bp(n, e, t) {
  const r = e().map((s, u) => ({ id: u.toString(), title: s.title })), i = await Ga(Zp, { groups: r });
  if (i.type !== "confirm") return;
  const a = i.data.groups.map((s) => {
    const u = parseInt(s.id, 10);
    return { ...e()[u], title: s.title };
  });
  t()(a);
}
var Up = /* @__PURE__ */ X('<div class="plugin-list__header-action svelte-1a2zky1"><!></div>'), Wp = /* @__PURE__ */ X('<header class="plugin-list__header svelte-1a2zky1"><p class="plugin-list__title svelte-1a2zky1"> </p> <!></header>'), jp = /* @__PURE__ */ X('<div aria-label="drag-handle"><!></div>'), Vp = /* @__PURE__ */ X('<div class="plugin-list__item-action svelte-1a2zky1"><!></div>'), zp = /* @__PURE__ */ X('<div class="plugin-list__item-row svelte-1a2zky1"><div class="plugin-list__item-row__left svelte-1a2zky1"><!> <span class="plugin-list__item-name svelte-1a2zky1"> </span></div> <!></div>'), Xp = /* @__PURE__ */ X("<div><!></div>"), Yp = /* @__PURE__ */ X('<div style="display: flex; justify-content: center; margin-top: 0.4rem;"><!></div>'), qp = /* @__PURE__ */ X('<section class="plugin-list__group svelte-1a2zky1"><header class="plugin-list__group-header svelte-1a2zky1"><span class="plugin-list__group-index plugin-list__group-plugins__indicator svelte-1a2zky1"><!></span> <span class="plugin-list__group-title svelte-1a2zky1"> </span></header> <div class="plugin-list__group-plugins-section svelte-1a2zky1"><div></div></div> <!></section>'), Kp = /* @__PURE__ */ X('<div class="plugin-list__body svelte-1a2zky1"></div>'), Qp = /* @__PURE__ */ X('<div class="plugin-list__footer svelte-1a2zky1"><button type="button" class="plugin-list__footer-button plugin-list__footer-button--edit svelte-1a2zky1"><!> <span>Edit groups</span></button> <button type="button" class="plugin-list__footer-button plugin-list__footer-button--add svelte-1a2zky1"><!> <span>Add group</span></button></div>');
function il(n, e) {
  Ce(e, !0);
  const t = (v) => {
    var f = Wp(), h = N(f), g = N(h), p = q(h, 2);
    {
      var b = (y) => {
        var x = Up(), E = N(x);
        _e(E, () => e.headerAction), A(y, x);
      };
      te(p, (y) => {
        e.headerAction && y(b);
      });
    }
    ue(() => Me(g, s())), A(v, f);
  }, r = (v) => {
    var f = Kp();
    cn(f, 21, a, br, (h, g, p) => {
      var b = qp(), y = N(b), x = N(y), E = N(x);
      rl(E, { number: p + 1 });
      var C = q(x, 2), w = N(C), I = q(y, 2), S = N(I);
      let _;
      cn(S, 31, () => o(g).plugins, (D) => D.id, (D, L, P) => {
        var ie = Xp(), j = N(ie);
        el(j, {
          variant: "secondary",
          children: (H, U) => {
            var ee = zp(), ce = N(ee), k = N(ce);
            {
              var J = (V) => {
                var O = jp(), Q = N(O);
                Fs(Q, {}), De(O, (Y) => On == null ? void 0 : On(Y)), A(V, O);
              };
              te(k, (V) => {
                mn.isEditing && V(J);
              });
            }
            var ne = q(k, 2), be = N(ne), fe = q(ce, 2);
            {
              var W = (V) => {
                var O = Vp(), Q = N(O);
                _e(Q, () => e.itemAction, () => ({
                  group: o(g),
                  plugin: o(L),
                  groupIndex: p,
                  pluginIndex: o(P)
                })), A(V, O);
              };
              te(fe, (V) => {
                e.itemAction && V(W);
              });
            }
            ue(() => Me(be, o(L).name)), A(H, ee);
          },
          $$slots: { default: !0 }
        }), ue(() => mt(ie, "data-id", o(L).id)), Rs(ie, () => Us, () => ({ duration: 100 })), A(D, ie);
      }), De(S, (D, L) => Rn == null ? void 0 : Rn(D, L), () => ({
        items: o(g).plugins,
        flipDurationMs: 100,
        dropTargetStyle: {}
      }));
      var T = q(I, 2);
      {
        var R = (D) => {
          var L = Yp(), P = N(L);
          eg(P, { svgStyles: "fill: #6B9197;" }), A(D, L);
        };
        te(T, (D) => {
          p < a().length - 1 && D(R);
        });
      }
      ue(
        (D) => {
          Me(w, o(g).title), _ = _r(S, 1, "plugin-list__group-plugins svelte-1a2zky1", null, _, D);
        },
        [
          () => ({
            "plugin_list__group-plugins--dashed": mn.isEditing
          })
        ]
      ), Pt("consider", S, (D) => c(D, o(g))), Pt("finalize", S, (D) => d(D, o(g))), A(h, b);
    }), A(v, f);
  }, i = (v) => {
    var f = oe(), h = K(f);
    {
      var g = (p) => {
        var b = Qp(), y = N(b);
        y.__click = [Bp, a, l];
        var x = N(y);
        ou(x, {
          svgStyles: "fill: var(--primary-base);",
          "aria-hidden": "true"
        });
        var E = q(y, 2);
        E.__click = [Hp, a, u];
        var C = N(E);
        Xo(C, {
          svgStyles: "fill: var(--primary-base);",
          "aria-hidden": "true"
        }), A(p, b);
      };
      te(h, (p) => {
        mn.isEditing && p(g);
      });
    }
    A(v, f);
  };
  let a = m(e, "pluginGroups", 19, () => []), s = m(e, "title", 3, "Process"), u = m(e, "onAddGroup", 3, () => {
  }), l = m(e, "onUpdateGroups", 3, (v) => {
  });
  function c(v, f) {
    f.plugins = v.detail.items;
  }
  function d(v, f) {
    v.detail.info.trigger === xt.DROPPED_OUTSIDE_OF_ANY ? f.plugins = v.detail.items.filter((h) => v.detail.info.id !== h.id) : f.plugins = v.detail.items, l()(a());
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
pt(["click"]);
function Jp(n, e) {
  const t = (i) => {
    Vn(i, {
      variant: "raised",
      style: "--mdc-theme-primary: var(--on-brand); --mdc-theme-on-primary: var(--brand)",
      "aria-label": "Edit process",
      get onclick() {
        return e.requestEdit;
      },
      children: (a, s) => {
        var u = rt("EDIT");
        A(a, u);
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
function $p() {
  var e;
  const n = document.querySelector("open-scd");
  return ((e = n == null ? void 0 : n.shadowRoot) == null ? void 0 : e.querySelector("compas-layout")) ?? null;
}
function eI(n) {
  var e;
  (e = $p()) == null || e.dispatchEvent(
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
function tI(n) {
  if (!n.includes("-"))
    throw new Error(`Invalid custom element name "${n}". Custom element names must contain a dash.`);
}
async function Ou(n) {
  if (n.type !== "external") return;
  const e = n.id;
  if (tI(e), ao(e)) return;
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
async function nI(n) {
  await Promise.all(
    n.filter((e) => e.type === "external").map(async (e) => {
      try {
        await Ou(e);
      } catch (t) {
        console.error("Failed to preload plugin", e.id, t);
      }
    })
  );
}
const Ur = jn(!0);
Ur.subscribe((n) => {
  eI(n);
});
var rI = (n, e, t) => e(t().id), iI = /* @__PURE__ */ X('<button type="button" class="plugin-list__removeBtn svelte-gipzw9"><!></button>');
function aI(n, e) {
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
          children: (p, b) => {
            var y = rt("REMOVE ALL");
            A(p, y);
          },
          $$slots: { default: !0 }
        });
      };
      te(f, (g) => {
        o(c) && g(h);
      });
    }
    A(d, v);
  }, r = (d, v) => {
    let f = () => v == null ? void 0 : v().plugin;
    var h = iI();
    h.__click = [rI, s, f];
    var g = N(h);
    su(g, { svgStyles: "fill: #FF203A" }), ue(() => mt(h, "aria-label", `Remove ${f().name}`)), A(d, h);
  };
  let i = m(e, "pluginGroups", 19, () => []);
  async function a() {
    (await Ga(au, {
      title: "Remove all entries?",
      message: "This action cannot be undone. You will need to manually search for and re-add each item, and rearrange them again.",
      confirmActionText: "Remove All",
      cancelActionText: "Cancel",
      confirmActionColor: "danger"
    })).type === "confirm" && pp(ft.process.id);
  }
  function s(d) {
    mp(ft.process.id, d);
  }
  function u(d, v) {
    Ip(ft.process.id, d, v);
  }
  function l(d) {
    bp(ft.process.id, d);
  }
  let c = /* @__PURE__ */ re(() => i().flatMap((d) => d.plugins).length > 0);
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
    onAddGroup: (d, v) => u(d, v),
    onUpdateGroups: (d) => l(d)
  }), Ae();
}
pt(["click"]);
function Mu(n) {
  var r;
  const e = n.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "").slice(0, 32), t = ((r = crypto.randomUUID) == null ? void 0 : r.call(crypto).split("-")[0]) ?? Math.random().toString(36).slice(2, 10);
  return `ext-${e || "plugin"}-${t}`;
}
var sI = /* @__PURE__ */ X('<div class="card-header svelte-1fcjrhj"><p class="header-info svelte-1fcjrhj">Add External Plugins</p> <div class="search-input svelte-1fcjrhj"><!></div></div>'), oI = (n, e, t) => e(o(t), ft.process.id), lI = /* @__PURE__ */ X('<div class="card-item-content svelte-1fcjrhj"><div class="card-item-content__left svelte-1fcjrhj"><div aria-label="drag-handle"><!></div> <p class="plugin-name svelte-1fcjrhj"> </p></div> <button class="plugin-add-btn svelte-1fcjrhj"><!></button></div>'), dI = /* @__PURE__ */ X("<div><!></div>"), uI = /* @__PURE__ */ X('<div class="card-parent-content svelte-1fcjrhj"></div>');
function cI(n, e) {
  Ce(e, !0);
  const t = (c) => {
    var d = sI(), v = q(N(d), 2), f = N(v);
    pr(f, {
      variant: "outlined",
      label: "Search Plugins",
      get value() {
        return a();
      },
      set value(h) {
        a(h);
      }
    }), A(c, d);
  }, r = (c) => {
    var d = uI();
    cn(d, 29, i, (v) => v.id, (v, f) => {
      var h = dI(), g = N(h);
      el(g, {
        variant: "secondary",
        children: (p, b) => {
          var y = lI(), x = N(y), E = N(x), C = N(E);
          Fs(C, {}), De(E, (T) => On == null ? void 0 : On(T));
          var w = q(E, 2), I = N(w), S = q(x, 2);
          S.__click = [oI, s, f];
          var _ = N(S);
          Xo(_, { svgStyles: "fill: var(--brand);" }), ue(() => Me(I, o(f).name)), A(p, y);
        },
        $$slots: { default: !0 }
      }), ue(() => mt(h, "data-id", o(f).id)), Rs(h, () => Us, () => ({ duration: 100 })), A(v, h);
    }), De(d, (v, f) => Rn == null ? void 0 : Rn(v, f), () => ({
      items: i(),
      flipDurationMs: 100,
      dropTargetStyle: {},
      dropFromOthersDisabled: !0
    })), Pt("consider", d, l), Pt("finalize", d, u), A(c, d);
  };
  let i = m(e, "plugins", 23, () => []), a = m(e, "searchTerm", 15, "");
  function s(c, d) {
    gp(d, c);
  }
  const u = (c) => {
    i(c.detail.items);
  }, l = (c) => {
    const { detail: d } = c, { trigger: v, id: f } = d.info;
    if (v === xt.DRAG_STARTED) {
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
pt(["click"]);
var fI = /* @__PURE__ */ X('<div class="process-definition-view svelte-ws8xx1"><!> <div class="drag-and-drop-info svelte-ws8xx1"><!> <p class="svelte-ws8xx1">SELECT OR DRAG & DROP PLUGINS</p></div> <!></div>');
function vI(n, e) {
  Ce(e, !0);
  let t = m(e, "pluginGroups", 19, () => []), r = /* @__PURE__ */ le(""), i = /* @__PURE__ */ re(() => {
    const v = nl.plugins.map((h) => ({
      id: Mu(h.name),
      name: h.name,
      src: h.src,
      type: "internal"
    })), f = o(r).toLowerCase().trim();
    return f ? v.filter((h) => h.name.toLowerCase().includes(f)) : v;
  });
  var a = fI(), s = N(a);
  aI(s, {
    get pluginGroups() {
      return t();
    }
  });
  var u = q(s, 2), l = N(u);
  cu(l, { svgStyles: "fill: #6B9197" });
  var c = q(u, 2);
  cI(c, {
    get plugins() {
      return o(i);
    },
    get searchTerm() {
      return o(r);
    },
    set searchTerm(d) {
      B(r, d, !0);
    }
  }), A(n, a), Ae();
}
const hI = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmNvbW0tc3VibmV0LTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJuZXQgQWRkcmVzcyBWYWxpZGl0eTwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5WYWxpZGF0ZXMgSVAgc3VibmV0IGFkZHJlc3NlcyBhbmQgQ0lEUi9uZXRtYXNrIGFyZSBwcm9wZXJseSBmb3JtYXR0ZWQgYW5kIG1lZXQgcHJvamVjdCBjb25zdHJhaW50cy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1zdWJuZXQtYWRkcmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5nc2UtY29uZmlnLTAwMjwvaWQ+CiAgICA8bmFtZT5HU0UgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIEdTRSBjb250cm9sIGJsb2NrcyByZWZlcmVuY2UgdmFsaWQgZGF0YXNldHMgYW5kIGhhdmUgY29ycmVjdCBNQUMvVkxBTi9uZXR3b3JrIHBhcmFtZXRlcnMuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stZ3NlLWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5zbXYtY29uZmlnLTAwMzwvaWQ+CiAgICA8bmFtZT5TTVYgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5DaGVja3MgU01WIGNvbnRyb2wgYmxvY2tzIGZvciB2YWxpZCBkYXRhc2V0cywgc2FtcGxlIHJhdGVzLCBhbmQgY29tcGxpYW50IG5ldHdvcmsgc2V0dGluZ3MuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stc212LWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4KCg==", gI = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmNvbW0tc3VibmV0LTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJuZXQgQWRkcmVzcyBWYWxpZGl0eTwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5WYWxpZGF0ZXMgSVAgc3VibmV0IGFkZHJlc3NlcyBhbmQgQ0lEUi9uZXRtYXNrIGFyZSBwcm9wZXJseSBmb3JtYXR0ZWQgYW5kIG1lZXQgcHJvamVjdCBjb25zdHJhaW50cy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1zdWJuZXQtYWRkcmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5nc2UtY29uZmlnLTAwMjwvaWQ+CiAgICA8bmFtZT5HU0UgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIEdTRSBjb250cm9sIGJsb2NrcyByZWZlcmVuY2UgdmFsaWQgZGF0YXNldHMgYW5kIGhhdmUgY29ycmVjdCBNQUMvVkxBTi9uZXR3b3JrIHBhcmFtZXRlcnMuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stZ3NlLWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5zbXYtY29uZmlnLTAwMzwvaWQ+CiAgICA8bmFtZT5TTVYgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5DaGVja3MgU01WIGNvbnRyb2wgYmxvY2tzIGZvciB2YWxpZCBkYXRhc2V0cywgc2FtcGxlIHJhdGVzLCBhbmQgY29tcGxpYW50IG5ldHdvcmsgc2V0dGluZ3MuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stc212LWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4KCg==", mI = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmNvbW0tc3VibmV0LTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJuZXQgQWRkcmVzcyBWYWxpZGl0eTwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5WYWxpZGF0ZXMgSVAgc3VibmV0IGFkZHJlc3NlcyBhbmQgQ0lEUi9uZXRtYXNrIGFyZSBwcm9wZXJseSBmb3JtYXR0ZWQgYW5kIG1lZXQgcHJvamVjdCBjb25zdHJhaW50cy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1zdWJuZXQtYWRkcmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5nc2UtY29uZmlnLTAwMjwvaWQ+CiAgICA8bmFtZT5HU0UgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIEdTRSBjb250cm9sIGJsb2NrcyByZWZlcmVuY2UgdmFsaWQgZGF0YXNldHMgYW5kIGhhdmUgY29ycmVjdCBNQUMvVkxBTi9uZXR3b3JrIHBhcmFtZXRlcnMuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stZ3NlLWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5zbXYtY29uZmlnLTAwMzwvaWQ+CiAgICA8bmFtZT5TTVYgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5DaGVja3MgU01WIGNvbnRyb2wgYmxvY2tzIGZvciB2YWxpZCBkYXRhc2V0cywgc2FtcGxlIHJhdGVzLCBhbmQgY29tcGxpYW50IG5ldHdvcmsgc2V0dGluZ3MuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stc212LWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4KCg==", pI = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmNvbW0tc3VibmV0LTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJuZXQgQWRkcmVzcyBWYWxpZGl0eTwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5WYWxpZGF0ZXMgSVAgc3VibmV0IGFkZHJlc3NlcyBhbmQgQ0lEUi9uZXRtYXNrIGFyZSBwcm9wZXJseSBmb3JtYXR0ZWQgYW5kIG1lZXQgcHJvamVjdCBjb25zdHJhaW50cy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1zdWJuZXQtYWRkcmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5nc2UtY29uZmlnLTAwMjwvaWQ+CiAgICA8bmFtZT5HU0UgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIEdTRSBjb250cm9sIGJsb2NrcyByZWZlcmVuY2UgdmFsaWQgZGF0YXNldHMgYW5kIGhhdmUgY29ycmVjdCBNQUMvVkxBTi9uZXR3b3JrIHBhcmFtZXRlcnMuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stZ3NlLWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5zbXYtY29uZmlnLTAwMzwvaWQ+CiAgICA8bmFtZT5TTVYgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5DaGVja3MgU01WIGNvbnRyb2wgYmxvY2tzIGZvciB2YWxpZCBkYXRhc2V0cywgc2FtcGxlIHJhdGVzLCBhbmQgY29tcGxpYW50IG5ldHdvcmsgc2V0dGluZ3MuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stc212LWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4KCg==", II = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmNvbW0tc3VibmV0LTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJuZXQgQWRkcmVzcyBWYWxpZGl0eTwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5WYWxpZGF0ZXMgSVAgc3VibmV0IGFkZHJlc3NlcyBhbmQgQ0lEUi9uZXRtYXNrIGFyZSBwcm9wZXJseSBmb3JtYXR0ZWQgYW5kIG1lZXQgcHJvamVjdCBjb25zdHJhaW50cy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1zdWJuZXQtYWRkcmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5nc2UtY29uZmlnLTAwMjwvaWQ+CiAgICA8bmFtZT5HU0UgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIEdTRSBjb250cm9sIGJsb2NrcyByZWZlcmVuY2UgdmFsaWQgZGF0YXNldHMgYW5kIGhhdmUgY29ycmVjdCBNQUMvVkxBTi9uZXR3b3JrIHBhcmFtZXRlcnMuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stZ3NlLWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5zbXYtY29uZmlnLTAwMzwvaWQ+CiAgICA8bmFtZT5TTVYgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5DaGVja3MgU01WIGNvbnRyb2wgYmxvY2tzIGZvciB2YWxpZCBkYXRhc2V0cywgc2FtcGxlIHJhdGVzLCBhbmQgY29tcGxpYW50IG5ldHdvcmsgc2V0dGluZ3MuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stc212LWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4KCg==", bI = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmNvbW0tc3VibmV0LTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJuZXQgQWRkcmVzcyBWYWxpZGl0eTwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5WYWxpZGF0ZXMgSVAgc3VibmV0IGFkZHJlc3NlcyBhbmQgQ0lEUi9uZXRtYXNrIGFyZSBwcm9wZXJseSBmb3JtYXR0ZWQgYW5kIG1lZXQgcHJvamVjdCBjb25zdHJhaW50cy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1zdWJuZXQtYWRkcmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5nc2UtY29uZmlnLTAwMjwvaWQ+CiAgICA8bmFtZT5HU0UgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIEdTRSBjb250cm9sIGJsb2NrcyByZWZlcmVuY2UgdmFsaWQgZGF0YXNldHMgYW5kIGhhdmUgY29ycmVjdCBNQUMvVkxBTi9uZXR3b3JrIHBhcmFtZXRlcnMuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stZ3NlLWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5zbXYtY29uZmlnLTAwMzwvaWQ+CiAgICA8bmFtZT5TTVYgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5DaGVja3MgU01WIGNvbnRyb2wgYmxvY2tzIGZvciB2YWxpZCBkYXRhc2V0cywgc2FtcGxlIHJhdGVzLCBhbmQgY29tcGxpYW50IG5ldHdvcmsgc2V0dGluZ3MuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stc212LWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4KCg==", _I = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmNvbW0tc3VibmV0LTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJuZXQgQWRkcmVzcyBWYWxpZGl0eTwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5WYWxpZGF0ZXMgSVAgc3VibmV0IGFkZHJlc3NlcyBhbmQgQ0lEUi9uZXRtYXNrIGFyZSBwcm9wZXJseSBmb3JtYXR0ZWQgYW5kIG1lZXQgcHJvamVjdCBjb25zdHJhaW50cy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1zdWJuZXQtYWRkcmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5nc2UtY29uZmlnLTAwMjwvaWQ+CiAgICA8bmFtZT5HU0UgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIEdTRSBjb250cm9sIGJsb2NrcyByZWZlcmVuY2UgdmFsaWQgZGF0YXNldHMgYW5kIGhhdmUgY29ycmVjdCBNQUMvVkxBTi9uZXR3b3JrIHBhcmFtZXRlcnMuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stZ3NlLWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5zbXYtY29uZmlnLTAwMzwvaWQ+CiAgICA8bmFtZT5TTVYgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5DaGVja3MgU01WIGNvbnRyb2wgYmxvY2tzIGZvciB2YWxpZCBkYXRhc2V0cywgc2FtcGxlIHJhdGVzLCBhbmQgY29tcGxpYW50IG5ldHdvcmsgc2V0dGluZ3MuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stc212LWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4KCg==", yI = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmNvbW0tc3VibmV0LTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJuZXQgQWRkcmVzcyBWYWxpZGl0eTwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5WYWxpZGF0ZXMgSVAgc3VibmV0IGFkZHJlc3NlcyBhbmQgQ0lEUi9uZXRtYXNrIGFyZSBwcm9wZXJseSBmb3JtYXR0ZWQgYW5kIG1lZXQgcHJvamVjdCBjb25zdHJhaW50cy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1zdWJuZXQtYWRkcmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5nc2UtY29uZmlnLTAwMjwvaWQ+CiAgICA8bmFtZT5HU0UgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIEdTRSBjb250cm9sIGJsb2NrcyByZWZlcmVuY2UgdmFsaWQgZGF0YXNldHMgYW5kIGhhdmUgY29ycmVjdCBNQUMvVkxBTi9uZXR3b3JrIHBhcmFtZXRlcnMuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stZ3NlLWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5zbXYtY29uZmlnLTAwMzwvaWQ+CiAgICA8bmFtZT5TTVYgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5DaGVja3MgU01WIGNvbnRyb2wgYmxvY2tzIGZvciB2YWxpZCBkYXRhc2V0cywgc2FtcGxlIHJhdGVzLCBhbmQgY29tcGxpYW50IG5ldHdvcmsgc2V0dGluZ3MuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stc212LWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4K", CI = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmNvbW0tc3VibmV0LTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJuZXQgQWRkcmVzcyBWYWxpZGl0eTwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5WYWxpZGF0ZXMgSVAgc3VibmV0IGFkZHJlc3NlcyBhbmQgQ0lEUi9uZXRtYXNrIGFyZSBwcm9wZXJseSBmb3JtYXR0ZWQgYW5kIG1lZXQgcHJvamVjdCBjb25zdHJhaW50cy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1zdWJuZXQtYWRkcmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5nc2UtY29uZmlnLTAwMjwvaWQ+CiAgICA8bmFtZT5HU0UgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIEdTRSBjb250cm9sIGJsb2NrcyByZWZlcmVuY2UgdmFsaWQgZGF0YXNldHMgYW5kIGhhdmUgY29ycmVjdCBNQUMvVkxBTi9uZXR3b3JrIHBhcmFtZXRlcnMuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stZ3NlLWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5zbXYtY29uZmlnLTAwMzwvaWQ+CiAgICA8bmFtZT5TTVYgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5DaGVja3MgU01WIGNvbnRyb2wgYmxvY2tzIGZvciB2YWxpZCBkYXRhc2V0cywgc2FtcGxlIHJhdGVzLCBhbmQgY29tcGxpYW50IG5ldHdvcmsgc2V0dGluZ3MuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stc212LWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4KCg==", AI = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmNvbW0tc3VibmV0LTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJuZXQgQWRkcmVzcyBWYWxpZGl0eTwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5WYWxpZGF0ZXMgSVAgc3VibmV0IGFkZHJlc3NlcyBhbmQgQ0lEUi9uZXRtYXNrIGFyZSBwcm9wZXJseSBmb3JtYXR0ZWQgYW5kIG1lZXQgcHJvamVjdCBjb25zdHJhaW50cy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1zdWJuZXQtYWRkcmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5nc2UtY29uZmlnLTAwMjwvaWQ+CiAgICA8bmFtZT5HU0UgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIEdTRSBjb250cm9sIGJsb2NrcyByZWZlcmVuY2UgdmFsaWQgZGF0YXNldHMgYW5kIGhhdmUgY29ycmVjdCBNQUMvVkxBTi9uZXR3b3JrIHBhcmFtZXRlcnMuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stZ3NlLWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5zbXYtY29uZmlnLTAwMzwvaWQ+CiAgICA8bmFtZT5TTVYgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5DaGVja3MgU01WIGNvbnRyb2wgYmxvY2tzIGZvciB2YWxpZCBkYXRhc2V0cywgc2FtcGxlIHJhdGVzLCBhbmQgY29tcGxpYW50IG5ldHdvcmsgc2V0dGluZ3MuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stc212LWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4KCg==";
var EI = /* @__PURE__ */ X('<button type="button"><span> </span></button>'), xI = /* @__PURE__ */ X('<div><button type="button" class="validation-groups__group-title svelte-1s1txht"> </button> <!></div>'), SI = /* @__PURE__ */ X('<div class="validation-groups svelte-1s1txht"></div>');
function Fu(n, e) {
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
  var c = SI();
  cn(c, 21, t, br, (d, v, f) => {
    var h = xI();
    let g;
    var p = N(h);
    p.__click = () => u(f);
    var b = N(p), y = q(p, 2);
    {
      var x = (E) => {
        var C = oe(), w = K(C);
        cn(w, 17, () => o(v).plugins, br, (I, S, _) => {
          var T = EI();
          let R;
          T.__click = () => l(f, _);
          var D = N(T), L = N(D);
          ue(
            (P) => {
              R = _r(T, 1, "validation-groups__plugin svelte-1s1txht", null, R, P), Me(L, o(S).name);
            },
            [() => ({ active: _ === i() })]
          ), A(I, T);
        }), A(E, C);
      };
      te(y, (E) => {
        f === r() && E(x);
      });
    }
    ue(
      (E) => {
        g = _r(h, 1, "validation-groups__group svelte-1s1txht", null, g, E), mt(p, "aria-pressed", f === r()), Me(b, o(v).title);
      },
      [() => ({ expanded: f === r() })]
    ), A(d, h);
  }), ue(() => qe(c, `--expanded-group-bg:${a()}; --expanded-group-border:${s()};`)), A(n, c), Ae();
}
pt(["click"]);
var wI = /* @__PURE__ */ X("<p>Loading…</p>"), TI = /* @__PURE__ */ X('<p class="error svelte-v2hgj7"> </p>'), DI = /* @__PURE__ */ X('<div class="xml-viewer svelte-v2hgj7"><h4 class="xml-viewer__title svelte-v2hgj7"> </h4> <div class="xml-viewer__box svelte-v2hgj7"><pre class="svelte-v2hgj7"> </pre></div></div>'), LI = /* @__PURE__ */ X('<span class="validation-xml-container__description svelte-v2hgj7"> </span>'), RI = /* @__PURE__ */ X('<button type="button" class="toggle-btn svelte-v2hgj7" aria-expanded="true" title="Collapse"><!></button>'), OI = /* @__PURE__ */ X('<button type="button" class="toggle-btn svelte-v2hgj7" aria-expanded="false" title="Expand"><!></button>'), MI = /* @__PURE__ */ X('<div class="xml-viewer svelte-v2hgj7"><div class="xml-viewer__box svelte-v2hgj7"><pre class="svelte-v2hgj7"> </pre></div></div>'), FI = /* @__PURE__ */ X('<div class="validation-xml-container svelte-v2hgj7"><div class="validation-xml-container__meta svelte-v2hgj7"><span class="validation-xml-container__name svelte-v2hgj7"> </span> <!> <div class="validation-xml-container__actions svelte-v2hgj7"><button type="button" class="delete-btn svelte-v2hgj7" title="Remove"><!></button> <!></div></div> <!></div>'), PI = /* @__PURE__ */ X('<div class="validation-xml-list svelte-v2hgj7"></div>'), kI = /* @__PURE__ */ X("<!> <!>", 1);
function GI(n, e) {
  Ce(e, !0);
  let t = m(e, "pluginGroups", 19, () => []), r = /* @__PURE__ */ le(null), i = /* @__PURE__ */ le(null);
  const a = /* @__PURE__ */ re(() => o(r) !== null ? t()[o(r)] : null), s = /* @__PURE__ */ re(() => o(a) && o(i) !== null ? o(a).plugins[o(i)] : null);
  xe(() => {
    var I, S;
    if (!((I = t()) != null && I.length)) {
      B(r, null), B(i, null);
      return;
    }
    (o(r) === null || o(r) >= t().length) && B(r, 0);
    const w = t()[o(r)];
    if (!((S = w == null ? void 0 : w.plugins) != null && S.length)) {
      B(i, null);
      return;
    }
    (o(i) === null || o(i) >= w.plugins.length) && B(i, 0);
  });
  let u = /* @__PURE__ */ le(""), l = /* @__PURE__ */ le(!1), c = /* @__PURE__ */ le(""), d = null, v = /* @__PURE__ */ le(Ee([])), f = /* @__PURE__ */ le(Ee(/* @__PURE__ */ new Set()));
  async function h(w) {
    B(l, !0), B(c, ""), B(u, ""), B(v, [], !0), B(f, /* @__PURE__ */ new Set(), !0), d == null || d.abort(), d = new AbortController();
    try {
      const I = new URL((/* @__PURE__ */ Object.assign({ "../../assets/validations/autodoc-xyz.xml": hI, "../../assets/validations/communication-xyz.xml": gI, "../../assets/validations/history-viewer-xyz.xml": mI, "../../assets/validations/location-manager-xyz.xml": pI, "../../assets/validations/publisher-xyz.xml": II, "../../assets/validations/subscribe-later-binding-xyz.xml": bI, "../../assets/validations/substation-xyz.xml": _I, "../../assets/validations/template-generator-xyz.xml": yI, "../../assets/validations/type-designer-xyz.xml": CI, "../../assets/validations/type-distributor-xyz.xml": AI }))[`../../assets/validations/${w}.xml`], import.meta.url).href, S = await fetch(I, { cache: "no-cache", signal: d.signal });
      if (!S.ok) {
        if (S.status === 404) {
          B(u, "(No XML found for this plugin.)");
          return;
        }
        throw new Error(`HTTP ${S.status}`);
      }
      B(u, await S.text(), !0);
      const T = new DOMParser().parseFromString(o(u), "application/xml");
      if (T.querySelector("parsererror"))
        throw new Error("Invalid XML format.");
      const D = new XMLSerializer(), L = Array.from(T.getElementsByTagName("validation"));
      B(
        v,
        L.map((P, ie) => {
          var be, fe, W, V, O, Q, Y;
          const j = (be = P.getAttribute("name")) == null ? void 0 : be.trim(), H = (fe = P.getAttribute("id")) == null ? void 0 : fe.trim(), U = (V = (W = P.querySelector("name")) == null ? void 0 : W.textContent) == null ? void 0 : V.trim(), ee = (O = P.getAttribute("description")) == null ? void 0 : O.trim(), ce = (Y = (Q = P.querySelector("description")) == null ? void 0 : Q.textContent) == null ? void 0 : Y.trim(), k = j || H || U || `Validation ${ie + 1}`, J = ee || ce || void 0, ne = D.serializeToString(P);
          return { name: k, description: J, xml: ne };
        }),
        !0
      ), B(f, new Set(o(v).map((P, ie) => ie)), !0);
    } catch (I) {
      if ((I == null ? void 0 : I.name) === "AbortError")
        return;
      B(c, (I == null ? void 0 : I.message) || "Failed to load XML.", !0);
    } finally {
      B(l, !1);
    }
  }
  let g = /* @__PURE__ */ re(() => {
    var w;
    return ((w = o(s)) == null ? void 0 : w.id) ?? null;
  }), p = null;
  xe(() => {
    !o(g) || o(g) === p || (p = o(g), h(o(g)));
  });
  function b(w) {
    o(f).has(w) ? o(f).delete(w) : o(f).add(w), B(f, new Set(o(f)), !0);
  }
  var y = kI(), x = K(y);
  Fu(x, {
    get pluginGroups() {
      return t();
    },
    get selectedGroupIndex() {
      return o(r);
    },
    set selectedGroupIndex(w) {
      B(r, w, !0);
    },
    get selectedPluginIndex() {
      return o(i);
    },
    set selectedPluginIndex(w) {
      B(i, w, !0);
    }
  });
  var E = q(x, 2);
  {
    var C = (w) => {
      var I = oe(), S = K(I);
      {
        var _ = (R) => {
          var D = wI();
          A(R, D);
        }, T = (R) => {
          var D = oe(), L = K(D);
          {
            var P = (j) => {
              var H = TI(), U = N(H);
              ue(() => Me(U, o(c))), A(j, H);
            }, ie = (j) => {
              var H = oe(), U = K(H);
              {
                var ee = (k) => {
                  var J = DI(), ne = N(J), be = N(ne), fe = q(ne, 2), W = N(fe), V = N(W);
                  ue(() => {
                    Me(be, `XML for: ${o(s).name ?? ""}`), Me(V, o(u));
                  }), A(k, J);
                }, ce = (k) => {
                  var J = PI();
                  cn(J, 21, () => o(v), br, (ne, be, fe) => {
                    var W = FI(), V = N(W), O = N(V), Q = N(O), Y = q(O, 2);
                    {
                      var ge = (F) => {
                        var z = LI(), ve = N(z);
                        ue(() => Me(ve, o(be).description)), A(F, z);
                      };
                      te(Y, (F) => {
                        o(be).description && F(ge);
                      });
                    }
                    var pe = q(Y, 2), Ne = N(pe), tt = N(Ne);
                    lu(tt, { svgStyles: "fill: #FF203A" });
                    var Ke = q(Ne, 2);
                    {
                      var Re = (F) => {
                        var z = RI();
                        z.__click = () => b(fe);
                        var ve = N(z);
                        Zh(ve, { svgStyles: "fill: #004552" }), A(F, z);
                      }, ot = (F) => {
                        var z = OI();
                        z.__click = () => b(fe);
                        var ve = N(z);
                        Bh(ve, { svgStyles: "fill: #004552" }), A(F, z);
                      };
                      te(Ke, (F) => {
                        o(f).has(fe) ? F(Re) : F(ot, !1);
                      });
                    }
                    var kt = q(V, 2);
                    {
                      var Gt = (F) => {
                        var z = MI(), ve = N(z), Fe = N(ve), Nt = N(Fe);
                        ue(() => Me(Nt, o(be).xml)), A(F, z);
                      };
                      te(kt, (F) => {
                        o(f).has(fe) && F(Gt);
                      });
                    }
                    ue(() => Me(Q, o(be).name)), A(ne, W);
                  }), A(k, J);
                };
                te(U, (k) => {
                  o(v).length === 0 ? k(ee) : k(ce, !1);
                });
              }
              A(j, H);
            };
            te(
              L,
              (j) => {
                o(c) ? j(P) : j(ie, !1);
              },
              !0
            );
          }
          A(R, D);
        };
        te(S, (R) => {
          o(l) ? R(_) : R(T, !1);
        });
      }
      A(w, I);
    };
    te(E, (w) => {
      o(s) && w(C);
    });
  }
  A(n, y), Ae();
}
pt(["click"]);
function NI(n, e) {
  const t = (n == null ? void 0 : n.name) ?? "—";
  return [
    { label: "Engineering-Wizard", enabled: !0 },
    { label: e != null && e.edit ? `Edit ${t}` : t, enabled: !1 }
  ];
}
var ZI = /* @__PURE__ */ X('<div class="stepper-actions svelte-1tja41x"><div class="stepper-navigation svelte-1tja41x"><button type="button" class="btn btn--back svelte-1tja41x" aria-label="Previous step"><span><!></span> <span>Back</span></button> <button type="button" class="btn btn--next svelte-1tja41x" aria-label="Next step"><span>Next</span> <span><!></span></button></div> <button type="button" class="btn btn--done svelte-1tja41x" aria-label="Done"><span><!></span> <span>Done</span></button></div>');
function Pu(n, e) {
  const t = m(e, "isAtFirstStep", 3, !1), r = m(e, "isAtLastStep", 3, !1), i = m(e, "doneDisabled", 3, !1);
  var a = ZI(), s = N(a), u = N(s);
  u.__click = function(...b) {
    var y;
    (y = e.onGoToPreviousStep) == null || y.apply(this, b);
  };
  var l = N(u), c = N(l);
  ig(c, { svgStyles: "fill: #ffffff" });
  var d = q(u, 2);
  d.__click = function(...b) {
    var y;
    (y = e.onGoToNextStep) == null || y.apply(this, b);
  };
  var v = q(N(d), 2), f = N(v);
  ng(f, { svgStyles: "fill: var(--brand);" });
  var h = q(s, 2);
  h.__click = function(...b) {
    var y;
    (y = e.onDone) == null || y.apply(this, b);
  };
  var g = N(h), p = N(g);
  uu(p), ue(() => {
    u.disabled = t(), d.disabled = r(), h.disabled = i();
  }), A(n, a);
}
pt(["click"]);
var HI = /* @__PURE__ */ X('<button class="btn-engineering-wizard_title svelte-rejjzu">Engineering Wizard</button>');
function ku(n, e) {
  var t = HI();
  t.__click = function(...r) {
    var i;
    (i = e.onClick) == null || i.apply(this, r);
  }, A(n, t);
}
pt(["click"]);
var BI = /* @__PURE__ */ X('<div class="header header--right svelte-1qlms77"><!></div> <!>', 1), UI = /* @__PURE__ */ X('<div class="stepper svelte-1qlms77"><!> <!> <!></div> <div class="step-content svelte-1qlms77"><!></div>', 1), WI = /* @__PURE__ */ X('<div class="step-content svelte-1qlms77"><div class="header svelte-1qlms77"><!> <!></div> <!></div>'), jI = /* @__PURE__ */ X('<div class="page-content svelte-1qlms77"><!></div>');
function VI(n, e) {
  Ce(e, !0);
  const t = ["process-definition", "validator-configuration"];
  let r = /* @__PURE__ */ le(0), i = /* @__PURE__ */ re(() => t[o(r)] ?? t[0]), a = /* @__PURE__ */ re(() => o(r) === 0), s = /* @__PURE__ */ re(() => o(r) === t.length - 1), u = /* @__PURE__ */ re(() => NI(ft.process, { edit: mn.isEditing })), l = /* @__PURE__ */ re(() => ft.process.pluginGroups), c = /* @__PURE__ */ le(Ee([]));
  function d(I) {
    I === 0 && (Ur.set(!0), ft.process = null);
  }
  function v() {
    console.log("EDITING"), mn.isEditing = !0, Ur.set(!1), B(r, 0), B(c, [], !0);
  }
  function f() {
    mn.isEditing = !1, Ur.set(!0), ft.process = null;
  }
  function h(I) {
    const S = t.indexOf(I);
    S !== -1 && B(r, S, !0);
  }
  function g(I) {
    o(c).includes(I) || B(c, [...o(c), I], !0);
  }
  function p() {
    o(s) || (g(o(i)), B(r, o(r) + 1));
  }
  function b() {
    o(a) || B(r, o(r) - 1);
  }
  function y() {
    alert("Add New Validation clicked!");
  }
  var x = jI(), E = N(x);
  {
    var C = (I) => {
      var S = UI(), _ = K(S), T = N(_);
      ku(T, { onClick: f });
      var R = q(T, 2);
      Fp(R, {
        get currentId() {
          return o(i);
        },
        get visited() {
          return o(c);
        },
        onSelect: h
      });
      var D = q(R, 2);
      Pu(D, {
        onGoToPreviousStep: b,
        onGoToNextStep: p,
        onDone: f,
        get isAtFirstStep() {
          return o(a);
        },
        get isAtLastStep() {
          return o(s);
        }
      });
      var L = q(_, 2), P = N(L);
      {
        var ie = (H) => {
          vI(H, {
            get pluginGroups() {
              return o(l);
            }
          });
        }, j = (H) => {
          var U = oe(), ee = K(U);
          {
            var ce = (k) => {
              var J = BI(), ne = K(J), be = N(ne);
              {
                let W = /* @__PURE__ */ re(() => !ft.process);
                Vn(be, {
                  variant: "raised",
                  style: "--mdc-theme-primary: var(--brand); --mdc-theme-on-primary: var(--on-brand)",
                  onclick: y,
                  get disabled() {
                    return o(W);
                  },
                  "aria-label": "Add validation",
                  children: (V, O) => {
                    var Q = rt("ADD NEW VALIDATION");
                    A(V, Q);
                  },
                  $$slots: { default: !0 }
                });
              }
              var fe = q(ne, 2);
              GI(fe, {
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
              }), A(k, J);
            };
            te(
              ee,
              (k) => {
                o(i) === "validator-configuration" && k(ce);
              },
              !0
            );
          }
          A(H, U);
        };
        te(P, (H) => {
          o(i) === "process-definition" ? H(ie) : H(j, !1);
        });
      }
      A(I, S);
    }, w = (I) => {
      var S = WI(), _ = N(S), T = N(_);
      Fg(T, {
        get breadcrumbs() {
          return o(u);
        },
        activeIndex: 1,
        handleClick: d
      });
      var R = q(T, 2);
      {
        let L = /* @__PURE__ */ re(() => !ft.process);
        Vn(R, {
          variant: "raised",
          style: "--mdc-theme-primary: var(--brand); --mdc-theme-on-primary: var(--on-brand)",
          onclick: () => e.handleStart(ft.process),
          get disabled() {
            return o(L);
          },
          "aria-label": "Start process",
          children: (P, ie) => {
            var j = rt("START PROCESS");
            A(P, j);
          },
          $$slots: { default: !0 }
        });
      }
      var D = q(_, 2);
      Jp(D, {
        get pluginGroups() {
          return o(l);
        },
        requestEdit: v
      }), A(I, S);
    };
    te(E, (I) => {
      mn.isEditing ? I(C) : I(w, !1);
    });
  }
  A(n, x), Ae();
}
var zI = /* @__PURE__ */ X("<div></div>");
function XI(n, e) {
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
  var l = zI();
  Se(l, (c) => a = c, () => a), A(n, l), Ae();
}
var YI = /* @__PURE__ */ X('<div class="plugin-container svelte-1xkxjkz"><!></div>'), qI = /* @__PURE__ */ X('<div class="stepper svelte-1xkxjkz"><!> <!> <!></div> <!>', 1);
function KI(n, e) {
  Ce(e, !0);
  const t = ["check", "warning", "error"];
  let r = m(e, "editCount", 19, () => -1), i = m(e, "plugins", 19, () => []), a = Ee({ plugin: null }), s = /* @__PURE__ */ le(Ee([])), u = /* @__PURE__ */ le(Ee({})), l = /* @__PURE__ */ re(() => i().length > 0), c = /* @__PURE__ */ re(() => a.plugin && o(l) ? i().findIndex((D) => D.id === a.plugin.id) : -1), d = /* @__PURE__ */ re(() => ft.process.pluginGroups), v = /* @__PURE__ */ le(null), f = /* @__PURE__ */ le(null);
  function h(D) {
    var L, P;
    if (!((L = o(d)) != null && L.length)) return { groupIndex: null, pluginIndex: null };
    for (let ie = 0; ie < o(d).length; ie++) {
      const H = ((P = o(d)[ie].plugins) == null ? void 0 : P.findIndex((U) => U.id === D)) ?? -1;
      if (H >= 0) return { groupIndex: ie, pluginIndex: H };
    }
    return { groupIndex: null, pluginIndex: null };
  }
  async function g(D) {
    if (!D) return;
    await Ou(D), a.plugin = D;
    const { groupIndex: L, pluginIndex: P } = h(D.id);
    if (B(v, L, !0), B(f, P, !0), !o(s).includes(D.id)) {
      B(s, [...o(s), D.id], !0);
      const ie = i().findIndex((j) => j.id === D.id);
      if (ie !== -1) {
        const j = t[ie % t.length];
        B(u, { ...o(u), [D.id]: j }, !0);
      }
    }
  }
  function p(D) {
    if (!o(l)) return;
    const P = ((o(c) < 0 ? 0 : o(c)) + D + i().length) % i().length;
    g(i()[P]);
  }
  const b = () => p(1), y = () => p(-1);
  function x(D, L) {
    return Object.assign(D, L), {
      update(P) {
        Object.assign(D, P);
      }
    };
  }
  xe(() => {
    var ie, j, H;
    if (o(v) === null || o(f) === null) return;
    const D = (ie = o(d)) == null ? void 0 : ie[o(v)], L = (j = D == null ? void 0 : D.plugins) == null ? void 0 : j[o(f)];
    if (!L) return;
    const P = i().find((U) => U.id === L.id);
    P && ((H = a.plugin) == null ? void 0 : H.id) !== P.id && g(P);
  }), xe(() => {
    if (!o(l)) {
      a.plugin = null, B(s, [], !0), B(u, {}, !0), B(v, null), B(f, null);
      return;
    }
    o(c) === -1 && g(i()[0]);
  }), it(() => (i().length && nI(i()).catch(console.error), Ur.set(!1), () => Ur.set(!0)));
  function E() {
    var D;
    Ur.set(!0), (D = e.onExit) == null || D.call(e);
  }
  var C = qI(), w = K(C), I = N(w);
  ku(I, { onClick: E });
  var S = q(I, 2);
  Fu(S, {
    get pluginGroups() {
      return o(d);
    },
    expandedGroupBackground: "var(--primary-base)",
    expandedGroupBorderColor: "white",
    get selectedGroupIndex() {
      return o(v);
    },
    set selectedGroupIndex(D) {
      B(v, D, !0);
    },
    get selectedPluginIndex() {
      return o(f);
    },
    set selectedPluginIndex(D) {
      B(f, D, !0);
    }
  });
  var _ = q(S, 2);
  {
    let D = /* @__PURE__ */ re(() => !o(l)), L = /* @__PURE__ */ re(() => !o(l));
    Pu(_, {
      onGoToPreviousStep: y,
      onGoToNextStep: b,
      onDone: E,
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
      var L = YI(), P = N(L);
      {
        var ie = (H) => {
          XI(H, {
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
        }, j = (H) => {
          var U = oe(), ee = K(U);
          mo(ee, () => a.plugin.id, !1, (ce, k) => {
            De(ce, (J, ne) => x == null ? void 0 : x(J, ne), () => ({
              doc: e.doc,
              editCount: r(),
              docs: e.docs,
              nsdoc: e.nsdoc,
              docName: e.docName,
              docId: e.docId,
              locale: e.locale,
              oscdApi: e.oscdApi,
              host: e.host
            })), _r(ce, 0, "svelte-1xkxjkz");
          }), A(H, U);
        };
        te(P, (H) => {
          a.plugin.type === "internal" ? H(ie) : H(j, !1);
        });
      }
      A(D, L);
    };
    te(T, (D) => {
      a.plugin && D(R);
    });
  }
  A(n, C), Ae();
}
const QI = (n, e, t) => {
  n.target === n.currentTarget && (n.key === "Escape" && (n.preventDefault(), e("exit")), (n.key === "Enter" || n.key === " ") && (n.preventDefault(), t()));
};
var JI = (n, e) => {
  n.target === n.currentTarget && e("exit");
}, $I = /* @__PURE__ */ X('<div class="ewf-dialog-backdrop svelte-12xjguj" role="dialog" aria-modal="true" aria-labelledby="ewf-title" tabindex="-1"><div class="ewf-dialog-panel svelte-12xjguj" role="document"><h2 id="ewf-title" class="sr-only svelte-12xjguj">Engineering Workflow</h2> <!></div></div>');
function eb(n, e) {
  Ce(e, !0);
  let t = m(e, "editCount", 19, () => -1), r = m(e, "plugins", 19, () => []), i = /* @__PURE__ */ le(!1), a = /* @__PURE__ */ le(void 0), s = /* @__PURE__ */ le(null);
  const u = (f) => {
    o(i) || (B(i, !0), ft.process = null, Ur.set(!0), Hr(f));
  }, l = () => u("exit");
  xe(() => {
    var f;
    e.open !== o(a) && (B(a, e.open, !0), e.open ? (B(i, !1), (f = o(s)) == null || f.focus()) : u("cancel"));
  });
  var c = oe(), d = K(c);
  {
    var v = (f) => {
      var h = $I();
      h.__keydown = [QI, u, l], h.__click = [JI, u];
      var g = N(h), p = q(N(g), 2);
      KI(p, {
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
      }), Se(h, (b) => B(s, b), () => o(s)), A(f, h);
    };
    te(d, (f) => {
      e.open && f(v);
    });
  }
  A(n, c), Ae();
}
pt(["keydown", "click"]);
var tb = /* @__PURE__ */ X('<div class="card-header svelte-1rixbl7"><p class="header-info svelte-1rixbl7">Add External Plugins</p> <div class="search-input svelte-1rixbl7"><!></div></div>'), nb = (n, e, t) => e(o(t)), rb = /* @__PURE__ */ X('<div class="card-item-content svelte-1rixbl7"><div class="card-item-content__left svelte-1rixbl7"><div aria-label="drag-handle"><!></div> <p class="plugin-name svelte-1rixbl7"> </p></div> <button class="plugin-add-btn svelte-1rixbl7"><!></button></div>'), ib = /* @__PURE__ */ X("<div><!></div>"), ab = /* @__PURE__ */ X('<div class="card-parent-content svelte-1rixbl7"></div>');
function sb(n, e) {
  Ce(e, !0);
  const t = (d) => {
    var v = tb(), f = q(N(v), 2), h = N(f);
    pr(h, {
      variant: "outlined",
      label: "Search Plugins",
      get value() {
        return a();
      },
      set value(g) {
        a(g);
      }
    }), A(d, v);
  }, r = (d) => {
    var v = ab();
    cn(v, 29, i, (f) => f.id, (f, h) => {
      var g = ib(), p = N(g);
      el(p, {
        variant: "secondary",
        children: (b, y) => {
          var x = rb(), E = N(x), C = N(E), w = N(C);
          Fs(w, {}), De(C, (R) => On == null ? void 0 : On(R));
          var I = q(C, 2), S = N(I), _ = q(E, 2);
          _.__click = [nb, c, h];
          var T = N(_);
          Xo(T, { svgStyles: "fill: var(--brand);" }), ue(() => {
            Me(S, o(h).name), mt(_, "aria-label", `Add ${o(h).name}`);
          }), A(b, x);
        },
        $$slots: { default: !0 }
      }), ue(() => mt(g, "data-id", o(h).id)), Rs(g, () => Us, () => ({ duration: 100 })), A(f, g);
    }), De(v, (f, h) => Rn == null ? void 0 : Rn(f, h), () => ({
      items: i(),
      flipDurationMs: 100,
      dropTargetStyle: {},
      dropFromOthersDisabled: !0
    })), Pt("consider", v, l), Pt("finalize", v, u), A(d, v);
  };
  let i = m(e, "plugins", 23, () => []), a = m(e, "searchTerm", 15, ""), s = m(e, "onAddPlugin", 3, () => {
  });
  const u = (d) => {
    i(d.detail.items);
  }, l = (d) => {
    const { trigger: v, id: f } = d.detail.info;
    if (v === xt.DRAG_STARTED) {
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
pt(["click"]);
var ob = (n, e, t) => e(t().id), lb = /* @__PURE__ */ X('<button type="button" class="plugin-list__removeBtn svelte-1jr0t84"><!></button>'), db = /* @__PURE__ */ X('<div class="page svelte-1jr0t84"><div class="topbar svelte-1jr0t84"><div class="topbar__left svelte-1jr0t84"><h2 class="title svelte-1jr0t84">Create new process</h2></div> <div class="topbar__actions svelte-1jr0t84"><!> <!></div></div> <div class="form svelte-1jr0t84"><!> <!> <!> <!></div> <div class="process-definition-view svelte-1jr0t84"><!> <div class="drag-and-drop-info svelte-1jr0t84"><!> <p class="svelte-1jr0t84">SELECT OR DRAG &amp; DROP PLUGINS</p></div> <!></div></div>');
function ub(n, e) {
  Ce(e, !0);
  const t = (W) => {
    var V = oe(), O = K(V);
    {
      var Q = (Y) => {
        Vn(Y, {
          style: "background-color: #FF203A",
          variant: "raised",
          "aria-label": "Remove all plugins",
          onclick: y,
          children: (ge, pe) => {
            var Ne = rt("REMOVE ALL");
            A(ge, Ne);
          },
          $$slots: { default: !0 }
        });
      };
      te(O, (Y) => {
        o(w) && Y(Q);
      });
    }
    A(W, V);
  }, r = (W, V) => {
    let O = () => V == null ? void 0 : V().plugin;
    var Q = lb();
    Q.__click = [ob, x, O];
    var Y = N(Q);
    su(Y, { svgStyles: "fill: #FF203A" }), ue(() => mt(Q, "aria-label", `Remove ${O().name}`)), A(W, Q);
  };
  let i = /* @__PURE__ */ le(""), a = /* @__PURE__ */ le(""), s = /* @__PURE__ */ le("1.0.0"), u = /* @__PURE__ */ le(""), l = /* @__PURE__ */ le(!1), c = /* @__PURE__ */ le(Ee([{ title: "Ungrouped", plugins: [] }])), d = /* @__PURE__ */ le("");
  const v = (W) => W.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  xe(() => {
    o(l) || B(u, v(o(i)), !0);
  });
  function f(W) {
    const V = /* @__PURE__ */ new Set();
    for (const O of W ?? []) for (const Q of O.plugins ?? []) V.add(Q.id);
    return V;
  }
  function h(W, V) {
    const O = f(V);
    if (!O.has(W)) return W;
    let Q = 2, Y = `${W}-${Q}`;
    for (; O.has(Y); )
      Q += 1, Y = `${W}-${Q}`;
    return Y;
  }
  function g(W = "Ungrouped") {
    let V = o(c).find((O) => O.title === W);
    return V || (V = { title: W, plugins: [] }, B(c, [...o(c), V], !0)), V.plugins ?? (V.plugins = []), V;
  }
  function p(W) {
    const V = [], O = /* @__PURE__ */ new Set();
    for (const Q of W ?? []) {
      const Y = [];
      for (const ge of Q.plugins ?? []) {
        let pe = ge.id;
        O.has(pe) && (pe = h(pe, V.concat([{ ...Q, plugins: Y }]))), O.add(pe), Y.push({ ...ge, id: pe });
      }
      V.push({ ...Q, plugins: Y });
    }
    return V;
  }
  function b(W, V = "Ungrouped") {
    const O = g(V), Q = h(W.id, o(c));
    O.plugins.push({ ...W, id: Q }), B(c, [...o(c)], !0);
  }
  async function y() {
    if ((await Ga(au, {
      title: "Remove all entries?",
      message: "This action cannot be undone. You will need to manually search for and re-add each item, and rearrange them again.",
      confirmActionText: "Remove All",
      cancelActionText: "Cancel",
      confirmActionColor: "danger"
    })).type === "confirm") {
      for (const V of o(c)) (V.plugins ?? (V.plugins = [])).length = 0;
      B(c, [...o(c)], !0);
    }
  }
  function x(W) {
    for (let V = 0; V < o(c).length; V += 1) {
      const O = o(c)[V], Q = (O.plugins ?? []).findIndex((Y) => Y.id === W);
      if (Q !== -1) {
        O.plugins.splice(Q, 1), O.plugins.length === 0 && o(c).splice(V, 1), B(c, [...o(c)], !0);
        return;
      }
    }
  }
  function E(W, V) {
    const O = W.trim();
    if (!O || o(c).some((pe) => pe.title === O)) return;
    const Q = { title: O, plugins: [] };
    if (V === void 0) {
      B(c, [...o(c), Q], !0);
      return;
    }
    const Y = Math.max(0, V - 1), ge = [...o(c)];
    ge.splice(Y, 0, Q), B(c, ge, !0);
  }
  function C(W) {
    B(c, p(W), !0);
  }
  let w = /* @__PURE__ */ re(() => o(c).flatMap((W) => W.plugins ?? []).length > 0), I = /* @__PURE__ */ re(() => {
    const W = o(d).toLowerCase().trim(), V = (nl.plugins ?? []).map((O) => ({
      id: Mu(O.name),
      name: O.name,
      src: O.src,
      type: "internal"
    }));
    return W ? V.filter((O) => O.name.toLowerCase().includes(W)) : V;
  }), S = /* @__PURE__ */ re(() => !!o(i).trim());
  function _() {
    if (!o(S)) return;
    const W = {
      id: o(u).trim() || v(o(i)) || "process",
      version: o(s).trim() || "1.0.0",
      name: o(i).trim(),
      description: o(a).trim(),
      pluginGroups: As(o(c))
    }, V = hp(W);
    mn.isEditing = !1, e.handleSaved(V);
  }
  function T() {
    mn.isEditing = !1, e.handleCancel();
  }
  it(() => {
    mn.isEditing = !0;
  }), Fn(() => {
    mn.isEditing = !1;
  });
  var R = db(), D = N(R), L = q(N(D), 2), P = N(L);
  Vn(P, {
    variant: "outlined",
    style: "--mdc-theme-primary: var(--brand); --mdc-theme-on-primary: var(--on-brand)",
    onclick: T,
    children: (W, V) => {
      var O = rt("CANCEL");
      A(W, O);
    },
    $$slots: { default: !0 }
  });
  var ie = q(P, 2);
  {
    let W = /* @__PURE__ */ re(() => !o(S));
    Vn(ie, {
      variant: "raised",
      style: "--mdc-theme-primary: var(--brand); --mdc-theme-on-primary: var(--on-brand)",
      onclick: _,
      get disabled() {
        return o(W);
      },
      children: (V, O) => {
        var Q = rt("SAVE");
        A(V, Q);
      },
      $$slots: { default: !0 }
    });
  }
  var j = q(D, 2), H = N(j);
  pr(H, {
    variant: "outlined",
    label: "Process name",
    get value() {
      return o(i);
    },
    set value(W) {
      B(i, W, !0);
    }
  });
  var U = q(H, 2);
  pr(U, {
    variant: "outlined",
    label: "Process id",
    get value() {
      return o(u);
    },
    set value(W) {
      B(u, W, !0);
    },
    $$events: { input: () => B(l, !0) }
  });
  var ee = q(U, 2);
  pr(ee, {
    variant: "outlined",
    label: "Version",
    get value() {
      return o(s);
    },
    set value(W) {
      B(s, W, !0);
    }
  });
  var ce = q(ee, 2);
  pr(ce, {
    variant: "outlined",
    label: "Description",
    get value() {
      return o(a);
    },
    set value(W) {
      B(a, W, !0);
    }
  });
  var k = q(j, 2), J = N(k);
  il(J, {
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
    onAddGroup: (W, V) => E(W, V),
    onUpdateGroups: (W) => C(W)
  });
  var ne = q(J, 2), be = N(ne);
  cu(be, { svgStyles: "fill: #6B9197" });
  var fe = q(ne, 2);
  sb(fe, {
    get plugins() {
      return o(I);
    },
    onAddPlugin: (W) => b(W, "Ungrouped"),
    get searchTerm() {
      return o(d);
    },
    set searchTerm(W) {
      B(d, W, !0);
    }
  }), A(n, R), Ae();
}
pt(["click"]);
var cb = /* @__PURE__ */ X('<link rel="stylesheet" href="/material-icon.css"/>'), fb = /* @__PURE__ */ X("<!> <!>", 1);
function vb(n, e) {
  Ce(e, !0);
  let t = /* @__PURE__ */ le(!1);
  it(async () => {
    await fp();
  });
  function r(g) {
    ft.process || (ft.process = g);
    const p = yp(ft.process);
    Ga(eb, {
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
    ph({ editCount: e.editCount, doc: e.doc });
  });
  function i(g) {
    ft.process = g;
  }
  function a() {
    ft.process = null;
  }
  function s() {
    mn.isEditing = !1, ft.process = null, B(t, !0);
  }
  function u() {
    mn.isEditing = !1, B(t, !1);
  }
  function l(g) {
    B(t, !1), ft.process = g;
  }
  var c = fb();
  Qc((g) => {
    var p = cb();
    A(g, p);
  });
  var d = K(c);
  mh(d, {});
  var v = q(d, 2);
  {
    var f = (g) => {
      ub(g, { handleCancel: u, handleSaved: l });
    }, h = (g) => {
      var p = oe(), b = K(p);
      {
        var y = (E) => {
          VI(E, { handleBack: a, handleStart: r });
        }, x = (E) => {
          Sp(E, {
            handleView: i,
            handleStart: r,
            handleAddNew: s
          });
        };
        te(
          b,
          (E) => {
            ft.process ? E(y) : E(x, !1);
          },
          !0
        );
      }
      A(g, p);
    };
    te(v, (g) => {
      o(t) ? g(f) : g(h, !1);
    });
  }
  A(n, c), Ae();
}
const Gu = "archive-explorer", Nu = "0.0.1";
var hb = /* @__PURE__ */ X('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function gb(n, e) {
  Ce(e, !0);
  let t = m(e, "dev", 3, !1), r = m(e, "editCount", 3, 0), i = m(e, "plugins", 19, () => []);
  var a = hb(), s = K(a);
  {
    var u = (d) => {
      vb(d, {
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
    te(s, (d) => {
      (e.doc || t()) && d(u);
    });
  }
  var l = q(s, 2), c = q(l, 2);
  ue(() => {
    yl(l, Gu), yl(c, Nu);
  }), A(n, a), Ae();
}
var Xi;
class _b extends HTMLElement {
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
    B(se(this, Xi), t, !0);
  }
  connectedCallback() {
    if (this.shadowRoot) return;
    this.attachShadow({ mode: "open" }), of(gb, { target: this.shadowRoot, props: this._props });
    const t = mb();
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
    _p(r);
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
function mb() {
  const n = `${Gu}-v${Nu}-style`, e = pb(), t = document.createElement("link");
  return t.rel = "stylesheet", t.type = "text/css", t.href = e, t.id = n, t;
}
function pb() {
  const n = new URL(import.meta.url), e = n.origin, t = n.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, t, "style.css"].filter(Boolean).join("/");
}
export {
  _b as default
};
