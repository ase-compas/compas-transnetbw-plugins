var Jd = Object.defineProperty;
var Tl = (t) => {
  throw TypeError(t);
};
var $d = (t, e, n) => e in t ? Jd(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var xi = (t, e, n) => $d(t, typeof e != "symbol" ? e + "" : e, n), Jo = (t, e, n) => e.has(t) || Tl("Cannot " + n);
var le = (t, e, n) => (Jo(t, e, "read from private field"), n ? n.call(t) : e.get(t)), rt = (t, e, n) => e.has(t) ? Tl("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), Be = (t, e, n, r) => (Jo(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), Yt = (t, e, n) => (Jo(t, e, "access private method"), n);
const kt = Symbol(), ef = "http://www.w3.org/1999/xhtml", tf = "http://www.w3.org/2000/svg", nf = "@attach", Vu = !1;
var Fo = Array.isArray, rf = Array.prototype.indexOf, Xs = Array.from, _o = Object.defineProperty, Hr = Object.getOwnPropertyDescriptor, Gu = Object.getOwnPropertyDescriptors, af = Object.prototype, of = Array.prototype, Ys = Object.getPrototypeOf, xl = Object.isExtensible;
function Pi(t) {
  return typeof t == "function";
}
const ve = () => {
};
function sf(t) {
  return t();
}
function yo(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function ju() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
const on = 2, Zs = 4, ko = 8, Fr = 16, Sr = 32, gi = 64, Qs = 128, Ln = 256, Io = 512, Jt = 1024, In = 2048, kr = 4096, kn = 8192, pi = 16384, Bo = 32768, Br = 65536, wl = 1 << 17, lf = 1 << 18, aa = 1 << 19, qu = 1 << 20, Ss = 1 << 21, Vo = 1 << 22, ui = 1 << 23, $n = Symbol("$state"), Wu = Symbol("legacy props"), uf = Symbol(""), Hi = new class extends Error {
  constructor() {
    super(...arguments);
    xi(this, "name", "StaleReactionError");
    xi(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Js(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function cf() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function df(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ff() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function hf(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function vf() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function mf(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function gf() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function pf() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function bf() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function _f() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function yf() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function If() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let Sf = !1;
function zu(t) {
  return t === this.v;
}
function $s(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Ku(t) {
  return !$s(t, this.v);
}
let oa = !1, Ef = !1;
function Af() {
  oa = !0;
}
let ct = null;
function Yi(t) {
  ct = t;
}
function _e(t) {
  return (
    /** @type {T} */
    Xu().get(t)
  );
}
function ue(t, e) {
  return Xu().set(t, e), e;
}
function xe(t, e = !1, n) {
  ct = {
    p: ct,
    c: null,
    e: null,
    s: t,
    x: null,
    l: oa && !e ? { s: null, u: null, $: [] } : null
  };
}
function we(t) {
  var e = (
    /** @type {ComponentContext} */
    ct
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      dc(r);
  }
  return t !== void 0 && (e.x = t), ct = e.p, t ?? /** @type {T} */
  {};
}
function qa() {
  return !oa || ct !== null && ct.l === null;
}
function Xu(t) {
  return ct === null && Js(), ct.c ?? (ct.c = new Map(Cf(ct) || void 0));
}
function Cf(t) {
  let e = t.p;
  for (; e !== null; ) {
    const n = e.c;
    if (n !== null)
      return n;
    e = e.p;
  }
  return null;
}
let ri = [];
function Yu() {
  var t = ri;
  ri = [], yo(t);
}
function yr(t) {
  if (ri.length === 0 && !Oa) {
    var e = ri;
    queueMicrotask(() => {
      e === ri && Yu();
    });
  }
  ri.push(t);
}
function Tf() {
  for (; ri.length > 0; )
    Yu();
}
const xf = /* @__PURE__ */ new WeakMap();
function Zu(t) {
  var e = We;
  if (e === null)
    return qe.f |= ui, t;
  if (e.f & Bo)
    Zi(t, e);
  else {
    if (!(e.f & Qs))
      throw !e.parent && t instanceof Error && Qu(t), t;
    e.b.error(t);
  }
}
function Zi(t, e) {
  for (; e !== null; ) {
    if (e.f & Qs)
      try {
        e.b.error(t);
        return;
      } catch (n) {
        t = n;
      }
    e = e.parent;
  }
  throw t instanceof Error && Qu(t), t;
}
function Qu(t) {
  const e = xf.get(t);
  e && (_o(t, "message", {
    value: e.message
  }), _o(t, "stack", {
    value: e.stack
  }));
}
const $a = /* @__PURE__ */ new Set();
let lt = null, fo = null, Wt = null, Es = /* @__PURE__ */ new Set(), Zn = [], Go = null, As = !1, Oa = !1;
var ji, qi, ii, Va, Wi, zi, ai, Ki, Ga, ja, On, Cs, ho, Ts;
const Ho = class Ho {
  constructor() {
    rt(this, On);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    xi(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    rt(this, ji, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    rt(this, qi, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    rt(this, ii, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    rt(this, Va, null);
    /**
     * Async effects inside a newly-created `<svelte:boundary>`
     * — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    rt(this, Wi, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    rt(this, zi, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    rt(this, ai, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    rt(this, Ki, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    rt(this, Ga, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    rt(this, ja, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    xi(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var a;
    Zn = [], fo = null, this.apply();
    for (const o of e)
      Yt(this, On, Cs).call(this, o);
    if (le(this, ii) === 0) {
      var n = Wt;
      Yt(this, On, Ts).call(this);
      var r = le(this, zi), i = le(this, ai);
      Be(this, zi, []), Be(this, ai, []), Be(this, Ki, []), fo = this, lt = null, Wt = n, Ll(r), Ll(i), fo = null, (a = le(this, Va)) == null || a.resolve();
    } else
      Yt(this, On, ho).call(this, le(this, zi)), Yt(this, On, ho).call(this, le(this, ai)), Yt(this, On, ho).call(this, le(this, Ki));
    Wt = null;
    for (const o of le(this, Wi))
      Pa(o);
    Be(this, Wi, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    le(this, ji).has(e) || le(this, ji).set(e, n), this.current.set(e, e.v), Wt == null || Wt.set(e, e.v);
  }
  activate() {
    lt = this;
  }
  deactivate() {
    lt = null, Wt = null;
  }
  flush() {
    if (Zn.length > 0) {
      if (this.activate(), Ju(), lt !== null && lt !== this)
        return;
    } else le(this, ii) === 0 && Yt(this, On, Ts).call(this);
    this.deactivate();
    for (const e of Es)
      if (Es.delete(e), e(), lt !== null)
        break;
  }
  increment() {
    Be(this, ii, le(this, ii) + 1);
  }
  decrement() {
    Be(this, ii, le(this, ii) - 1);
    for (const e of le(this, Ga))
      rn(e, In), vi(e);
    for (const e of le(this, ja))
      rn(e, kr), vi(e);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    le(this, qi).add(e);
  }
  settled() {
    return (le(this, Va) ?? Be(this, Va, ju())).promise;
  }
  static ensure() {
    if (lt === null) {
      const e = lt = new Ho();
      $a.add(lt), Oa || Ho.enqueue(() => {
        lt === e && e.flush();
      });
    }
    return lt;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    yr(e);
  }
  apply() {
  }
};
ji = new WeakMap(), qi = new WeakMap(), ii = new WeakMap(), Va = new WeakMap(), Wi = new WeakMap(), zi = new WeakMap(), ai = new WeakMap(), Ki = new WeakMap(), Ga = new WeakMap(), ja = new WeakMap(), On = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
Cs = function(e) {
  var c;
  e.f ^= Jt;
  for (var n = e.first; n !== null; ) {
    var r = n.f, i = (r & (Sr | gi)) !== 0, a = i && (r & Jt) !== 0, o = a || (r & kn) !== 0 || this.skipped_effects.has(n);
    if (!o && n.fn !== null) {
      i ? n.f ^= Jt : r & Zs ? le(this, ai).push(n) : r & Jt || (r & Vo && ((c = n.b) != null && c.is_pending()) ? le(this, Wi).push(n) : Wo(n) && (n.f & Fr && le(this, Ki).push(n), Pa(n)));
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
ho = function(e) {
  for (const n of e)
    (n.f & In ? le(this, Ga) : le(this, ja)).push(n), rn(n, Jt);
  e.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
Ts = function() {
  var e;
  for (const n of le(this, qi))
    n();
  if (le(this, qi).clear(), $a.size > 1) {
    le(this, ji).clear();
    let n = !0;
    for (const r of $a) {
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
          $u(o, a);
        if (Zn.length > 0) {
          lt = r, r.apply();
          for (const o of Zn)
            Yt(e = r, On, Cs).call(e, o);
          Zn = [], r.deactivate();
        }
      }
    }
    lt = null;
  }
  $a.delete(this);
};
let br = Ho;
function wf(t) {
  var e = Oa;
  Oa = !0;
  try {
    for (var n; ; ) {
      if (Tf(), Zn.length === 0 && (lt == null || lt.flush(), Zn.length === 0))
        return Go = null, /** @type {T} */
        n;
      Ju();
    }
  } finally {
    Oa = e;
  }
}
function Ju() {
  var t = Bi;
  As = !0;
  try {
    var e = 0;
    for (Dl(!0); Zn.length > 0; ) {
      var n = br.ensure();
      if (e++ > 1e3) {
        var r, i;
        Lf();
      }
      n.process(Zn), Nr.clear();
    }
  } finally {
    As = !1, Dl(t), Go = null;
  }
}
function Lf() {
  try {
    vf();
  } catch (t) {
    Zi(t, Go);
  }
}
let fr = null;
function Ll(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if (!(r.f & (pi | kn)) && Wo(r) && (fr = [], Pa(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? mc(r) : r.fn = null), (fr == null ? void 0 : fr.length) > 0)) {
        Nr.clear();
        for (const i of fr)
          Pa(i);
        fr = [];
      }
    }
    fr = null;
  }
}
function $u(t, e) {
  if (t.reactions !== null)
    for (const n of t.reactions) {
      const r = n.f;
      r & on ? $u(
        /** @type {Derived} */
        n,
        e
      ) : r & (Vo | Fr) && ec(n, e) && (rn(n, In), vi(
        /** @type {Effect} */
        n
      ));
    }
}
function ec(t, e) {
  if (t.deps !== null) {
    for (const n of t.deps)
      if (e.includes(n) || n.f & on && ec(
        /** @type {Derived} */
        n,
        e
      ))
        return !0;
  }
  return !1;
}
function vi(t) {
  for (var e = Go = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (As && e === We && n & Fr)
      return;
    if (n & (gi | Sr)) {
      if (!(n & Jt)) return;
      e.f ^= Jt;
    }
  }
  Zn.push(e);
}
function Of(t) {
  let e = 0, n = mi(0), r;
  return () => {
    zf() && (s(n), Ka(() => (e === 0 && (r = jn(() => t(() => Ra(n)))), e += 1, () => {
      yr(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, Ra(n));
      });
    })));
  };
}
var Rf = Br | aa | Qs;
function Df(t, e, n) {
  new Mf(t, e, n);
}
var Hn, xn, Ks, Kn, oi, Xn, wn, fn, Yn, Lr, si, Or, li, Rr, No, Uo, an, Pf, Hf, vo, mo, xs;
class Mf {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    rt(this, an);
    /** @type {Boundary | null} */
    xi(this, "parent");
    rt(this, Hn, !1);
    /** @type {TemplateNode} */
    rt(this, xn);
    /** @type {TemplateNode | null} */
    rt(this, Ks, null);
    /** @type {BoundaryProps} */
    rt(this, Kn);
    /** @type {((anchor: Node) => void)} */
    rt(this, oi);
    /** @type {Effect} */
    rt(this, Xn);
    /** @type {Effect | null} */
    rt(this, wn, null);
    /** @type {Effect | null} */
    rt(this, fn, null);
    /** @type {Effect | null} */
    rt(this, Yn, null);
    /** @type {DocumentFragment | null} */
    rt(this, Lr, null);
    rt(this, si, 0);
    rt(this, Or, 0);
    rt(this, li, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    rt(this, Rr, null);
    rt(this, No, () => {
      le(this, Rr) && Qi(le(this, Rr), le(this, si));
    });
    rt(this, Uo, Of(() => (Be(this, Rr, mi(le(this, si))), () => {
      Be(this, Rr, null);
    })));
    Be(this, xn, e), Be(this, Kn, n), Be(this, oi, r), this.parent = /** @type {Effect} */
    We.b, Be(this, Hn, !!le(this, Kn).pending), Be(this, Xn, Gr(() => {
      We.b = this;
      {
        try {
          Be(this, wn, Zt(() => r(le(this, xn))));
        } catch (i) {
          this.error(i);
        }
        le(this, Or) > 0 ? Yt(this, an, mo).call(this) : Be(this, Hn, !1);
      }
    }, Rf));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return le(this, Hn) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!le(this, Kn).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    Yt(this, an, xs).call(this, e), Be(this, si, le(this, si) + e), Es.add(le(this, No));
  }
  get_effect_pending() {
    return le(this, Uo).call(this), s(
      /** @type {Source<number>} */
      le(this, Rr)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = le(this, Kn).onerror;
    let r = le(this, Kn).failed;
    if (le(this, li) || !n && !r)
      throw e;
    le(this, wn) && (zt(le(this, wn)), Be(this, wn, null)), le(this, fn) && (zt(le(this, fn)), Be(this, fn, null)), le(this, Yn) && (zt(le(this, Yn)), Be(this, Yn, null));
    var i = !1, a = !1;
    const o = () => {
      if (i) {
        If();
        return;
      }
      i = !0, a && _f(), br.ensure(), Be(this, si, 0), le(this, Yn) !== null && Ur(le(this, Yn), () => {
        Be(this, Yn, null);
      }), Be(this, Hn, this.has_pending_snippet()), Be(this, wn, Yt(this, an, vo).call(this, () => (Be(this, li, !1), Zt(() => le(this, oi).call(this, le(this, xn)))))), le(this, Or) > 0 ? Yt(this, an, mo).call(this) : Be(this, Hn, !1);
    };
    var u = qe;
    try {
      hn(null), a = !0, n == null || n(e, o), a = !1;
    } catch (l) {
      Zi(l, le(this, Xn) && le(this, Xn).parent);
    } finally {
      hn(u);
    }
    r && yr(() => {
      Be(this, Yn, Yt(this, an, vo).call(this, () => {
        Be(this, li, !0);
        try {
          return Zt(() => {
            r(
              le(this, xn),
              () => e,
              () => o
            );
          });
        } catch (l) {
          return Zi(
            l,
            /** @type {Effect} */
            le(this, Xn).parent
          ), null;
        } finally {
          Be(this, li, !1);
        }
      }));
    });
  }
}
Hn = new WeakMap(), xn = new WeakMap(), Ks = new WeakMap(), Kn = new WeakMap(), oi = new WeakMap(), Xn = new WeakMap(), wn = new WeakMap(), fn = new WeakMap(), Yn = new WeakMap(), Lr = new WeakMap(), si = new WeakMap(), Or = new WeakMap(), li = new WeakMap(), Rr = new WeakMap(), No = new WeakMap(), Uo = new WeakMap(), an = new WeakSet(), Pf = function() {
  try {
    Be(this, wn, Zt(() => le(this, oi).call(this, le(this, xn))));
  } catch (e) {
    this.error(e);
  }
  Be(this, Hn, !1);
}, Hf = function() {
  const e = le(this, Kn).pending;
  e && (Be(this, fn, Zt(() => e(le(this, xn)))), br.enqueue(() => {
    Be(this, wn, Yt(this, an, vo).call(this, () => (br.ensure(), Zt(() => le(this, oi).call(this, le(this, xn)))))), le(this, Or) > 0 ? Yt(this, an, mo).call(this) : (Ur(
      /** @type {Effect} */
      le(this, fn),
      () => {
        Be(this, fn, null);
      }
    ), Be(this, Hn, !1));
  }));
}, /**
 * @param {() => Effect | null} fn
 */
vo = function(e) {
  var n = We, r = qe, i = ct;
  tr(le(this, Xn)), hn(le(this, Xn)), Yi(le(this, Xn).ctx);
  try {
    return e();
  } catch (a) {
    return Zu(a), null;
  } finally {
    tr(n), hn(r), Yi(i);
  }
}, mo = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    le(this, Kn).pending
  );
  le(this, wn) !== null && (Be(this, Lr, document.createDocumentFragment()), Nf(le(this, wn), le(this, Lr))), le(this, fn) === null && Be(this, fn, Zt(() => e(le(this, xn))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
xs = function(e) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && Yt(n = this.parent, an, xs).call(n, e);
    return;
  }
  Be(this, Or, le(this, Or) + e), le(this, Or) === 0 && (Be(this, Hn, !1), le(this, fn) && Ur(le(this, fn), () => {
    Be(this, fn, null);
  }), le(this, Lr) && (le(this, xn).before(le(this, Lr)), Be(this, Lr, null)), yr(() => {
    br.ensure().flush();
  }));
};
function Nf(t, e) {
  for (var n = t.nodes_start, r = t.nodes_end; n !== null; ) {
    var i = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ za(n)
    );
    e.append(n), n = i;
  }
}
function tc(t, e, n) {
  const r = qa() ? Wa : el;
  if (e.length === 0) {
    n(t.map(r));
    return;
  }
  var i = lt, a = (
    /** @type {Effect} */
    We
  ), o = Uf();
  Promise.all(e.map((u) => /* @__PURE__ */ Ff(u))).then((u) => {
    o();
    try {
      n([...t.map(r), ...u]);
    } catch (l) {
      a.f & pi || Zi(l, a);
    }
    i == null || i.deactivate(), ws();
  }).catch((u) => {
    Zi(u, a);
  });
}
function Uf() {
  var t = We, e = qe, n = ct, r = lt;
  return function() {
    tr(t), hn(e), Yi(n), r == null || r.activate();
  };
}
function ws() {
  tr(null), hn(null), Yi(null);
}
// @__NO_SIDE_EFFECTS__
function Wa(t) {
  var e = on | In, n = qe !== null && qe.f & on ? (
    /** @type {Derived} */
    qe
  ) : null;
  return We === null || n !== null && n.f & Ln ? e |= Ln : We.f |= aa, {
    ctx: ct,
    deps: null,
    effects: null,
    equals: zu,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      kt
    ),
    wv: 0,
    parent: n ?? We,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Ff(t, e) {
  let n = (
    /** @type {Effect | null} */
    We
  );
  n === null && cf();
  var r = (
    /** @type {Boundary} */
    n.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = mi(
    /** @type {V} */
    kt
  ), o = !qe, u = /* @__PURE__ */ new Map();
  return Xf(() => {
    var f;
    var l = ju();
    i = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(ws);
    } catch (g) {
      l.reject(g), ws();
    }
    var c = (
      /** @type {Batch} */
      lt
    ), d = r.is_pending();
    o && (r.update_pending_count(1), d || (c.increment(), (f = u.get(c)) == null || f.reject(Hi), u.delete(c), u.set(c, l)));
    const m = (g, h = void 0) => {
      if (d || c.activate(), h)
        h !== Hi && (a.f |= ui, Qi(a, h));
      else {
        a.f & ui && (a.f ^= ui), Qi(a, g);
        for (const [p, b] of u) {
          if (u.delete(p), p === c) break;
          b.reject(Hi);
        }
      }
      o && (r.update_pending_count(-1), d || c.decrement());
    };
    l.promise.then(m, (g) => m(null, g || "unknown"));
  }), jo(() => {
    for (const l of u.values())
      l.reject(Hi);
  }), new Promise((l) => {
    function c(d) {
      function m() {
        d === i ? l(a) : c(i);
      }
      d.then(m, m);
    }
    c(i);
  });
}
// @__NO_SIDE_EFFECTS__
function fe(t) {
  const e = /* @__PURE__ */ Wa(t);
  return bc(e), e;
}
// @__NO_SIDE_EFFECTS__
function el(t) {
  const e = /* @__PURE__ */ Wa(t);
  return e.equals = Ku, e;
}
function nc(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      zt(
        /** @type {Effect} */
        e[n]
      );
  }
}
function kf(t) {
  for (var e = t.parent; e !== null; ) {
    if (!(e.f & on))
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function tl(t) {
  var e, n = We;
  tr(kf(t));
  try {
    nc(t), e = Sc(t);
  } finally {
    tr(n);
  }
  return e;
}
function rc(t) {
  var e = tl(t);
  if (t.equals(e) || (t.v = e, t.wv = yc()), !_i)
    if (Wt !== null)
      Wt.set(t, t.v);
    else {
      var n = (Mr || t.f & Ln) && t.deps !== null ? kr : Jt;
      rn(t, n);
    }
}
const Nr = /* @__PURE__ */ new Map();
function mi(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: zu,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function he(t, e) {
  const n = mi(t);
  return bc(n), n;
}
// @__NO_SIDE_EFFECTS__
function ic(t, e = !1, n = !0) {
  var i;
  const r = mi(t);
  return e || (r.equals = Ku), oa && n && ct !== null && ct.l !== null && ((i = ct.l).s ?? (i.s = [])).push(r), r;
}
function X(t, e, n = !1) {
  qe !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Nn || qe.f & wl) && qa() && qe.f & (on | Fr | Vo | wl) && !(nn != null && nn.includes(t)) && bf();
  let r = n ? ye(e) : e;
  return Qi(t, r);
}
function Qi(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    _i ? Nr.set(t, e) : Nr.set(t, n), t.v = e;
    var r = br.ensure();
    r.capture(t, n), t.f & on && (t.f & In && tl(
      /** @type {Derived} */
      t
    ), rn(t, t.f & Ln ? kr : Jt)), t.wv = yc(), ac(t, In), qa() && We !== null && We.f & Jt && !(We.f & (Sr | gi)) && (Tn === null ? Qf([t]) : Tn.push(t));
  }
  return e;
}
function Ra(t) {
  X(t, t.v + 1);
}
function ac(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = qa(), i = n.length, a = 0; a < i; a++) {
      var o = n[a], u = o.f;
      if (!(!r && o === We)) {
        var l = (u & In) === 0;
        l && rn(o, e), u & on ? ac(
          /** @type {Derived} */
          o,
          kr
        ) : l && (u & Fr && fr !== null && fr.push(
          /** @type {Effect} */
          o
        ), vi(
          /** @type {Effect} */
          o
        ));
      }
    }
}
function ye(t) {
  if (typeof t != "object" || t === null || $n in t)
    return t;
  const e = Ys(t);
  if (e !== af && e !== of)
    return t;
  var n = /* @__PURE__ */ new Map(), r = Fo(t), i = /* @__PURE__ */ he(0), a = ci, o = (u) => {
    if (ci === a)
      return u();
    var l = qe, c = ci;
    hn(null), Pl(a);
    var d = u();
    return hn(l), Pl(c), d;
  };
  return r && n.set("length", /* @__PURE__ */ he(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(u, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && gf();
        var d = n.get(l);
        return d === void 0 ? d = o(() => {
          var m = /* @__PURE__ */ he(c.value);
          return n.set(l, m), m;
        }) : X(d, c.value, !0), !0;
      },
      deleteProperty(u, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in u) {
            const d = o(() => /* @__PURE__ */ he(kt));
            n.set(l, d), Ra(i);
          }
        } else
          X(c, kt), Ra(i);
        return !0;
      },
      get(u, l, c) {
        var g;
        if (l === $n)
          return t;
        var d = n.get(l), m = l in u;
        if (d === void 0 && (!m || (g = Hr(u, l)) != null && g.writable) && (d = o(() => {
          var h = ye(m ? u[l] : kt), p = /* @__PURE__ */ he(h);
          return p;
        }), n.set(l, d)), d !== void 0) {
          var f = s(d);
          return f === kt ? void 0 : f;
        }
        return Reflect.get(u, l, c);
      },
      getOwnPropertyDescriptor(u, l) {
        var c = Reflect.getOwnPropertyDescriptor(u, l);
        if (c && "value" in c) {
          var d = n.get(l);
          d && (c.value = s(d));
        } else if (c === void 0) {
          var m = n.get(l), f = m == null ? void 0 : m.v;
          if (m !== void 0 && f !== kt)
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
        if (l === $n)
          return !0;
        var c = n.get(l), d = c !== void 0 && c.v !== kt || Reflect.has(u, l);
        if (c !== void 0 || We !== null && (!d || (f = Hr(u, l)) != null && f.writable)) {
          c === void 0 && (c = o(() => {
            var g = d ? ye(u[l]) : kt, h = /* @__PURE__ */ he(g);
            return h;
          }), n.set(l, c));
          var m = s(c);
          if (m === kt)
            return !1;
        }
        return d;
      },
      set(u, l, c, d) {
        var I;
        var m = n.get(l), f = l in u;
        if (r && l === "length")
          for (var g = c; g < /** @type {Source<number>} */
          m.v; g += 1) {
            var h = n.get(g + "");
            h !== void 0 ? X(h, kt) : g in u && (h = o(() => /* @__PURE__ */ he(kt)), n.set(g + "", h));
          }
        if (m === void 0)
          (!f || (I = Hr(u, l)) != null && I.writable) && (m = o(() => /* @__PURE__ */ he(void 0)), X(m, ye(c)), n.set(l, m));
        else {
          f = m.v !== kt;
          var p = o(() => ye(c));
          X(m, p);
        }
        var b = Reflect.getOwnPropertyDescriptor(u, l);
        if (b != null && b.set && b.set.call(d, c), !f) {
          if (r && typeof l == "string") {
            var y = (
              /** @type {Source<number>} */
              n.get("length")
            ), E = Number(l);
            Number.isInteger(E) && E >= y.v && X(y, E + 1);
          }
          Ra(i);
        }
        return !0;
      },
      ownKeys(u) {
        s(i);
        var l = Reflect.ownKeys(u).filter((m) => {
          var f = n.get(m);
          return f === void 0 || f.v !== kt;
        });
        for (var [c, d] of n)
          d.v !== kt && !(c in u) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        pf();
      }
    }
  );
}
function Ol(t) {
  try {
    if (t !== null && typeof t == "object" && $n in t)
      return t[$n];
  } catch {
  }
  return t;
}
function Bf(t, e) {
  return Object.is(Ol(t), Ol(e));
}
var Da, nl, oc, sc, lc;
function Vf() {
  if (Da === void 0) {
    Da = window, nl = document, oc = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    sc = Hr(e, "firstChild").get, lc = Hr(e, "nextSibling").get, xl(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), xl(n) && (n.__t = void 0);
  }
}
function Vr(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Ji(t) {
  return sc.call(t);
}
// @__NO_SIDE_EFFECTS__
function za(t) {
  return lc.call(t);
}
function de(t, e) {
  return /* @__PURE__ */ Ji(t);
}
function Y(t, e = !1) {
  {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Ji(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ za(n) : n;
  }
}
function be(t, e = 1, n = !1) {
  let r = t;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ za(r);
  return r;
}
function Gf(t) {
  t.textContent = "";
}
function rl() {
  return !1;
}
function jf(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, yr(() => {
      document.activeElement === n && t.focus();
    });
  }
}
let Rl = !1;
function qf() {
  Rl || (Rl = !0, document.addEventListener(
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
function sa(t) {
  var e = qe, n = We;
  hn(null), tr(null);
  try {
    return t();
  } finally {
    hn(e), tr(n);
  }
}
function uc(t, e, n, r = n) {
  t.addEventListener(e, () => sa(n));
  const i = t.__on_r;
  i ? t.__on_r = () => {
    i(), r(!0);
  } : t.__on_r = () => r(!0), qf();
}
function cc(t) {
  We === null && qe === null && hf(), qe !== null && qe.f & Ln && We === null && ff(), _i && df();
}
function Wf(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function nr(t, e, n, r = !0) {
  var i = We;
  i !== null && i.f & kn && (t |= kn);
  var a = {
    ctx: ct,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | In,
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
      Pa(a), a.f |= Bo;
    } catch (l) {
      throw zt(a), l;
    }
  else e !== null && vi(a);
  if (r) {
    var o = a;
    if (n && o.deps === null && o.teardown === null && o.nodes_start === null && o.first === o.last && // either `null`, or a singular child
    !(o.f & aa) && (o = o.first), o !== null && (o.parent = i, i !== null && Wf(o, i), qe !== null && qe.f & on && !(t & gi))) {
      var u = (
        /** @type {Derived} */
        qe
      );
      (u.effects ?? (u.effects = [])).push(o);
    }
  }
  return a;
}
function zf() {
  return qe !== null && !Nn;
}
function jo(t) {
  const e = nr(ko, null, !1);
  return rn(e, Jt), e.teardown = t, e;
}
function Le(t) {
  cc();
  var e = (
    /** @type {Effect} */
    We.f
  ), n = !qe && (e & Sr) !== 0 && (e & Bo) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      ct
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return dc(t);
}
function dc(t) {
  return nr(Zs | qu, t, !1);
}
function fc(t) {
  return cc(), nr(ko | qu, t, !0);
}
function Kf(t) {
  br.ensure();
  const e = nr(gi | aa, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Ur(e, () => {
      zt(e), r(void 0);
    }) : (zt(e), r(void 0));
  });
}
function bi(t) {
  return nr(Zs, t, !1);
}
function Xf(t) {
  return nr(Vo | aa, t, !0);
}
function Ka(t, e = 0) {
  return nr(ko | e, t, !0);
}
function Oe(t, e = [], n = []) {
  tc(e, n, (r) => {
    nr(ko, () => t(...r.map(s)), !0);
  });
}
function Gr(t, e = 0) {
  var n = nr(Fr | e, t, !0);
  return n;
}
function Zt(t, e = !0) {
  return nr(Sr | aa, t, !0, e);
}
function hc(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = _i, r = qe;
    Ml(!0), hn(null);
    try {
      e.call(null);
    } finally {
      Ml(n), hn(r);
    }
  }
}
function vc(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && sa(() => {
      i.abort(Hi);
    });
    var r = n.next;
    n.f & gi ? n.parent = null : zt(n, e), n = r;
  }
}
function Yf(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    e.f & Sr || zt(e), e = n;
  }
}
function zt(t, e = !0) {
  var n = !1;
  (e || t.f & lf) && t.nodes_start !== null && t.nodes_end !== null && (Zf(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), vc(t, e && !n), So(t, 0), rn(t, pi);
  var r = t.transitions;
  if (r !== null)
    for (const a of r)
      a.stop();
  hc(t);
  var i = t.parent;
  i !== null && i.first !== null && mc(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function Zf(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ za(t)
    );
    t.remove(), t = n;
  }
}
function mc(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Ur(t, e) {
  var n = [];
  il(t, n, !0), gc(n, () => {
    zt(t), e && e();
  });
}
function gc(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var i of t)
      i.out(r);
  } else
    e();
}
function il(t, e, n) {
  if (!(t.f & kn)) {
    if (t.f ^= kn, t.transitions !== null)
      for (const o of t.transitions)
        (o.is_global || n) && e.push(o);
    for (var r = t.first; r !== null; ) {
      var i = r.next, a = (r.f & Br) !== 0 || (r.f & Sr) !== 0;
      il(r, e, a ? n : !1), r = i;
    }
  }
}
function qo(t) {
  pc(t, !0);
}
function pc(t, e) {
  if (t.f & kn) {
    t.f ^= kn, t.f & Jt || (rn(t, In), vi(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & Br) !== 0 || (n.f & Sr) !== 0;
      pc(n, i ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || e) && a.in();
  }
}
let Bi = !1;
function Dl(t) {
  Bi = t;
}
let _i = !1;
function Ml(t) {
  _i = t;
}
let qe = null, Nn = !1;
function hn(t) {
  qe = t;
}
let We = null;
function tr(t) {
  We = t;
}
let nn = null;
function bc(t) {
  qe !== null && (nn === null ? nn = [t] : nn.push(t));
}
let tn = null, _n = 0, Tn = null;
function Qf(t) {
  Tn = t;
}
let _c = 1, Ma = 0, ci = Ma;
function Pl(t) {
  ci = t;
}
let Mr = !1;
function yc() {
  return ++_c;
}
function Wo(t) {
  var m;
  var e = t.f;
  if (e & In)
    return !0;
  if (e & kr) {
    var n = t.deps, r = (e & Ln) !== 0;
    if (n !== null) {
      var i, a, o = (e & Io) !== 0, u = r && We !== null && !Mr, l = n.length;
      if ((o || u) && (We === null || !(We.f & pi))) {
        var c = (
          /** @type {Derived} */
          t
        ), d = c.parent;
        for (i = 0; i < l; i++)
          a = n[i], (o || !((m = a == null ? void 0 : a.reactions) != null && m.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        o && (c.f ^= Io), u && d !== null && !(d.f & Ln) && (c.f ^= Ln);
      }
      for (i = 0; i < l; i++)
        if (a = n[i], Wo(
          /** @type {Derived} */
          a
        ) && rc(
          /** @type {Derived} */
          a
        ), a.wv > t.wv)
          return !0;
    }
    (!r || We !== null && !Mr) && rn(t, Jt);
  }
  return !1;
}
function Ic(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !(nn != null && nn.includes(t)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a.f & on ? Ic(
        /** @type {Derived} */
        a,
        e,
        !1
      ) : e === a && (n ? rn(a, In) : a.f & Jt && rn(a, kr), vi(
        /** @type {Effect} */
        a
      ));
    }
}
function Sc(t) {
  var p;
  var e = tn, n = _n, r = Tn, i = qe, a = Mr, o = nn, u = ct, l = Nn, c = ci, d = t.f;
  tn = /** @type {null | Value[]} */
  null, _n = 0, Tn = null, Mr = (d & Ln) !== 0 && (Nn || !Bi || qe === null), qe = d & (Sr | gi) ? null : t, nn = null, Yi(t.ctx), Nn = !1, ci = ++Ma, t.ac !== null && (sa(() => {
    t.ac.abort(Hi);
  }), t.ac = null);
  try {
    t.f |= Ss;
    var m = (
      /** @type {Function} */
      t.fn
    ), f = m(), g = t.deps;
    if (tn !== null) {
      var h;
      if (So(t, _n), g !== null && _n > 0)
        for (g.length = _n + tn.length, h = 0; h < tn.length; h++)
          g[_n + h] = tn[h];
      else
        t.deps = g = tn;
      if (!Mr || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      d & on && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (h = _n; h < g.length; h++)
          ((p = g[h]).reactions ?? (p.reactions = [])).push(t);
    } else g !== null && _n < g.length && (So(t, _n), g.length = _n);
    if (qa() && Tn !== null && !Nn && g !== null && !(t.f & (on | kr | In)))
      for (h = 0; h < /** @type {Source[]} */
      Tn.length; h++)
        Ic(
          Tn[h],
          /** @type {Effect} */
          t
        );
    return i !== null && i !== t && (Ma++, Tn !== null && (r === null ? r = Tn : r.push(.../** @type {Source[]} */
    Tn))), t.f & ui && (t.f ^= ui), f;
  } catch (b) {
    return Zu(b);
  } finally {
    t.f ^= Ss, tn = e, _n = n, Tn = r, qe = i, Mr = a, nn = o, Yi(u), Nn = l, ci = c;
  }
}
function Jf(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = rf.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && e.f & on && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (tn === null || !tn.includes(e)) && (rn(e, kr), e.f & (Ln | Io) || (e.f ^= Io), nc(
    /** @type {Derived} **/
    e
  ), So(
    /** @type {Derived} **/
    e,
    0
  ));
}
function So(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      Jf(t, n[r]);
}
function Pa(t) {
  var e = t.f;
  if (!(e & pi)) {
    rn(t, Jt);
    var n = We, r = Bi;
    We = t, Bi = !0;
    try {
      e & Fr ? Yf(t) : vc(t), hc(t);
      var i = Sc(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = _c;
      var a;
      Vu && Ef && t.f & In && t.deps;
    } finally {
      Bi = r, We = n;
    }
  }
}
async function Ec() {
  await Promise.resolve(), wf();
}
function s(t) {
  var e = t.f, n = (e & on) !== 0;
  if (qe !== null && !Nn) {
    var r = We !== null && (We.f & pi) !== 0;
    if (!r && !(nn != null && nn.includes(t))) {
      var i = qe.deps;
      if (qe.f & Ss)
        t.rv < Ma && (t.rv = Ma, tn === null && i !== null && i[_n] === t ? _n++ : tn === null ? tn = [t] : (!Mr || !tn.includes(t)) && tn.push(t));
      else {
        (qe.deps ?? (qe.deps = [])).push(t);
        var a = t.reactions;
        a === null ? t.reactions = [qe] : a.includes(qe) || a.push(qe);
      }
    }
  } else if (n && /** @type {Derived} */
  t.deps === null && /** @type {Derived} */
  t.effects === null) {
    var o = (
      /** @type {Derived} */
      t
    ), u = o.parent;
    u !== null && !(u.f & Ln) && (o.f ^= Ln);
  }
  if (_i) {
    if (Nr.has(t))
      return Nr.get(t);
    if (n) {
      o = /** @type {Derived} */
      t;
      var l = o.v;
      return (!(o.f & Jt) && o.reactions !== null || Ac(o)) && (l = tl(o)), Nr.set(o, l), l;
    }
  } else if (n) {
    if (o = /** @type {Derived} */
    t, Wt != null && Wt.has(o))
      return Wt.get(o);
    Wo(o) && rc(o);
  }
  if (Wt != null && Wt.has(t))
    return Wt.get(t);
  if (t.f & ui)
    throw t.v;
  return t.v;
}
function Ac(t) {
  if (t.v === kt) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (Nr.has(e) || e.f & on && Ac(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function jn(t) {
  var e = Nn;
  try {
    return Nn = !0, t();
  } finally {
    Nn = e;
  }
}
const $f = -7169;
function rn(t, e) {
  t.f = t.f & $f | e;
}
function Cc(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if ($n in t)
      Ls(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && $n in n && Ls(n);
      }
  }
}
function Ls(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        Ls(t[r], e);
      } catch {
      }
    const n = Ys(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Gu(n);
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
const Tc = /* @__PURE__ */ new Set(), Os = /* @__PURE__ */ new Set();
function al(t, e, n, r = {}) {
  function i(a) {
    if (r.capture || wa.call(e, a), !a.cancelBubble)
      return sa(() => n == null ? void 0 : n.call(this, a));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? yr(() => {
    e.addEventListener(t, i, r);
  }) : e.addEventListener(t, i, r), i;
}
function eh(t, e, n, r = {}) {
  var i = al(e, t, n, r);
  return () => {
    t.removeEventListener(e, i, r);
  };
}
function Jn(t, e, n, r, i) {
  var a = { capture: r, passive: i }, o = al(t, e, n, a);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && jo(() => {
    e.removeEventListener(t, o, a);
  });
}
function Sn(t) {
  for (var e = 0; e < t.length; e++)
    Tc.add(t[e]);
  for (var n of Os)
    n(t);
}
let Hl = null;
function wa(t) {
  var E;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = ((E = t.composedPath) == null ? void 0 : E.call(t)) || [], a = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  Hl = t;
  var o = 0, u = Hl === t && t.__root;
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
    _o(t, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var d = qe, m = We;
    hn(null), tr(null);
    try {
      for (var f, g = []; a !== null; ) {
        var h = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var p = a["__" + r];
          if (p != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === a))
            if (Fo(p)) {
              var [b, ...y] = p;
              b.apply(a, [t, ...y]);
            } else
              p.call(a, t);
        } catch (I) {
          f ? g.push(I) : f = I;
        }
        if (t.cancelBubble || h === e || h === null)
          break;
        a = h;
      }
      if (f) {
        for (let I of g)
          queueMicrotask(() => {
            throw I;
          });
        throw f;
      }
    } finally {
      t.__root = e, delete t.currentTarget, hn(d), tr(m);
    }
  }
}
function xc(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function $i(t, e) {
  var n = (
    /** @type {Effect} */
    We
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function ce(t, e) {
  var n = (e & 1) !== 0, r = (e & 2) !== 0, i, a = !t.startsWith("<!>");
  return () => {
    i === void 0 && (i = xc(a ? t : "<!>" + t), n || (i = /** @type {Node} */
    /* @__PURE__ */ Ji(i)));
    var o = (
      /** @type {TemplateNode} */
      r || oc ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ji(o)
      ), l = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      $i(u, l);
    } else
      $i(o, o);
    return o;
  };
}
// @__NO_SIDE_EFFECTS__
function th(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, a;
  return () => {
    if (!a) {
      var o = (
        /** @type {DocumentFragment} */
        xc(i)
      ), u = (
        /** @type {Element} */
        /* @__PURE__ */ Ji(o)
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
function xt(t, e) {
  return /* @__PURE__ */ th(t, e, "svg");
}
function vt(t = "") {
  {
    var e = Vr(t + "");
    return $i(e, e), e;
  }
}
function re() {
  var t = document.createDocumentFragment(), e = document.createComment(""), n = Vr();
  return t.append(e, n), $i(e, n), t;
}
function x(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function nh(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const rh = [
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
function ih(t) {
  return rh.includes(t);
}
const ah = {
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
function oh(t) {
  return t = t.toLowerCase(), ah[t] ?? t;
}
const sh = ["touchstart", "touchmove"];
function lh(t) {
  return sh.includes(t);
}
let Eo = !0;
function Nl(t) {
  Eo = t;
}
function $e(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function uh(t, e) {
  return ch(t, e);
}
const wi = /* @__PURE__ */ new Map();
function ch(t, { target: e, anchor: n, props: r = {}, events: i, context: a, intro: o = !0 }) {
  Vf();
  var u = /* @__PURE__ */ new Set(), l = (m) => {
    for (var f = 0; f < m.length; f++) {
      var g = m[f];
      if (!u.has(g)) {
        u.add(g);
        var h = lh(g);
        e.addEventListener(g, wa, { passive: h });
        var p = wi.get(g);
        p === void 0 ? (document.addEventListener(g, wa, { passive: h }), wi.set(g, 1)) : wi.set(g, p + 1);
      }
    }
  };
  l(Xs(Tc)), Os.add(l);
  var c = void 0, d = Kf(() => {
    var m = n ?? e.appendChild(Vr());
    return Df(
      /** @type {TemplateNode} */
      m,
      {
        pending: () => {
        }
      },
      (f) => {
        if (a) {
          xe({});
          var g = (
            /** @type {ComponentContext} */
            ct
          );
          g.c = a;
        }
        i && (r.$$events = i), Eo = o, c = t(f, r) || {}, Eo = !0, a && we();
      }
    ), () => {
      var h;
      for (var f of u) {
        e.removeEventListener(f, wa);
        var g = (
          /** @type {number} */
          wi.get(f)
        );
        --g === 0 ? (document.removeEventListener(f, wa), wi.delete(f)) : wi.set(f, g);
      }
      Os.delete(l), m !== n && ((h = m.parentNode) == null || h.removeChild(m));
    };
  });
  return dh.set(c, d), c;
}
let dh = /* @__PURE__ */ new WeakMap();
function Ee(t, e, ...n) {
  var r = t, i = ve, a;
  Gr(() => {
    i !== (i = e()) && (a && (zt(a), a = null), a = Zt(() => (
      /** @type {SnippetFn} */
      i(r, ...n)
    )));
  }, Br);
}
function at(t) {
  ct === null && Js(), oa && ct.l !== null ? fh(ct).m.push(t) : Le(() => {
    const e = jn(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function En(t) {
  ct === null && Js(), at(() => () => jn(t));
}
function fh(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
function se(t, e, n = !1) {
  var r = t, i = null, a = null, o = kt, u = n ? Br : 0, l = !1;
  const c = (g, h = !0) => {
    l = !0, f(h, g);
  };
  var d = null;
  function m() {
    d !== null && (d.lastChild.remove(), r.before(d), d = null);
    var g = o ? i : a, h = o ? a : i;
    g && qo(g), h && Ur(h, () => {
      o ? a = null : i = null;
    });
  }
  const f = (g, h) => {
    if (o !== (o = g)) {
      var p = rl(), b = r;
      if (p && (d = document.createDocumentFragment(), d.append(b = Vr())), o ? i ?? (i = h && Zt(() => h(b))) : a ?? (a = h && Zt(() => h(b))), p) {
        var y = (
          /** @type {Batch} */
          lt
        ), E = o ? i : a, I = o ? a : i;
        E && y.skipped_effects.delete(E), I && y.skipped_effects.add(I), y.add_callback(m);
      } else
        m();
    }
  };
  Gr(() => {
    l = !1, e(c), l || f(null, null);
  }, u);
}
let di = null;
function Ul(t) {
  di = t;
}
function Ni(t, e) {
  return e;
}
function hh(t, e, n) {
  for (var r = t.items, i = [], a = e.length, o = 0; o < a; o++)
    il(e[o].e, i, !0);
  var u = a > 0 && i.length === 0 && n !== null;
  if (u) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Gf(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), zn(t, e[0].prev, e[a - 1].next);
  }
  gc(i, () => {
    for (var c = 0; c < a; c++) {
      var d = e[c];
      u || (r.delete(d.k), zn(t, d.prev, d.next)), zt(d.e, !u);
    }
  });
}
function Qn(t, e, n, r, i, a = null) {
  var o = t, u = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, l = (e & 4) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      t
    );
    o = c.appendChild(Vr());
  }
  var d = null, m = !1, f = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ el(() => {
    var y = n();
    return Fo(y) ? y : y == null ? [] : Xs(y);
  }), h, p;
  function b() {
    vh(
      p,
      h,
      u,
      f,
      o,
      i,
      e,
      r,
      n
    ), a !== null && (h.length === 0 ? d ? qo(d) : d = Zt(() => a(o)) : d !== null && Ur(d, () => {
      d = null;
    }));
  }
  Gr(() => {
    p ?? (p = /** @type {Effect} */
    We), h = /** @type {V[]} */
    s(g);
    var y = h.length;
    if (!(m && y === 0)) {
      m = y === 0;
      var E, I, _, A;
      if (rl()) {
        var S = /* @__PURE__ */ new Set(), L = (
          /** @type {Batch} */
          lt
        );
        for (I = 0; I < y; I += 1) {
          _ = h[I], A = r(_, I);
          var T = u.items.get(A) ?? f.get(A);
          T ? e & 3 && wc(T, _, I, e) : (E = Lc(
            null,
            u,
            null,
            null,
            _,
            A,
            I,
            i,
            e,
            n,
            !0
          ), f.set(A, E)), S.add(A);
        }
        for (const [w, k] of u.items)
          S.has(w) || L.skipped_effects.add(k.e);
        L.add_callback(b);
      } else
        b();
      s(g);
    }
  });
}
function vh(t, e, n, r, i, a, o, u, l) {
  var ne, U, D, W;
  var c = (o & 8) !== 0, d = (o & 3) !== 0, m = e.length, f = n.items, g = n.first, h = g, p, b = null, y, E = [], I = [], _, A, S, L;
  if (c)
    for (L = 0; L < m; L += 1)
      _ = e[L], A = u(_, L), S = f.get(A), S !== void 0 && ((ne = S.a) == null || ne.measure(), (y ?? (y = /* @__PURE__ */ new Set())).add(S));
  for (L = 0; L < m; L += 1) {
    if (_ = e[L], A = u(_, L), S = f.get(A), S === void 0) {
      var T = r.get(A);
      if (T !== void 0) {
        r.delete(A), f.set(A, T);
        var w = b ? b.next : h;
        zn(n, b, T), zn(n, T, w), $o(T, w, i), b = T;
      } else {
        var k = h ? (
          /** @type {TemplateNode} */
          h.e.nodes_start
        ) : i;
        b = Lc(
          k,
          n,
          b,
          b === null ? n.first : b.next,
          _,
          A,
          L,
          a,
          o,
          l
        );
      }
      f.set(A, b), E = [], I = [], h = b.next;
      continue;
    }
    if (d && wc(S, _, L, o), S.e.f & kn && (qo(S.e), c && ((U = S.a) == null || U.unfix(), (y ?? (y = /* @__PURE__ */ new Set())).delete(S))), S !== h) {
      if (p !== void 0 && p.has(S)) {
        if (E.length < I.length) {
          var J = I[0], G;
          b = J.prev;
          var z = E[0], R = E[E.length - 1];
          for (G = 0; G < E.length; G += 1)
            $o(E[G], J, i);
          for (G = 0; G < I.length; G += 1)
            p.delete(I[G]);
          zn(n, z.prev, R.next), zn(n, b, z), zn(n, R, J), h = J, b = R, L -= 1, E = [], I = [];
        } else
          p.delete(S), $o(S, h, i), zn(n, S.prev, S.next), zn(n, S, b === null ? n.first : b.next), zn(n, b, S), b = S;
        continue;
      }
      for (E = [], I = []; h !== null && h.k !== A; )
        h.e.f & kn || (p ?? (p = /* @__PURE__ */ new Set())).add(h), I.push(h), h = h.next;
      if (h === null)
        continue;
      S = h;
    }
    E.push(S), b = S, h = S.next;
  }
  if (h !== null || p !== void 0) {
    for (var C = p === void 0 ? [] : Xs(p); h !== null; )
      h.e.f & kn || C.push(h), h = h.next;
    var F = C.length;
    if (F > 0) {
      var N = o & 4 && m === 0 ? i : null;
      if (c) {
        for (L = 0; L < F; L += 1)
          (D = C[L].a) == null || D.measure();
        for (L = 0; L < F; L += 1)
          (W = C[L].a) == null || W.fix();
      }
      hh(n, C, N);
    }
  }
  c && yr(() => {
    var Ie;
    if (y !== void 0)
      for (S of y)
        (Ie = S.a) == null || Ie.apply();
  }), t.first = n.first && n.first.e, t.last = b && b.e;
  for (var K of r.values())
    zt(K.e);
  r.clear();
}
function wc(t, e, n, r) {
  r & 1 && Qi(t.v, e), r & 2 ? Qi(
    /** @type {Value<number>} */
    t.i,
    n
  ) : t.i = n;
}
function Lc(t, e, n, r, i, a, o, u, l, c, d) {
  var m = di, f = (l & 1) !== 0, g = (l & 16) === 0, h = f ? g ? /* @__PURE__ */ ic(i, !1, !1) : mi(i) : i, p = l & 2 ? mi(o) : o, b = {
    i: p,
    v: h,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  di = b;
  try {
    if (t === null) {
      var y = document.createDocumentFragment();
      y.append(t = Vr());
    }
    return b.e = Zt(() => u(
      /** @type {Node} */
      t,
      h,
      p,
      c
    ), Sf), b.e.prev = n && n.e, b.e.next = r && r.e, n === null ? d || (e.first = b) : (n.next = b, n.e.next = b.e), r !== null && (r.prev = b, r.e.prev = b.e), b;
  } finally {
    di = m;
  }
}
function $o(t, e, n) {
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
      /* @__PURE__ */ za(a)
    );
    i.before(a), a = o;
  }
}
function zn(t, e, n) {
  e === null ? t.first = n : (e.next = n, e.e.next = n && n.e), n !== null && (n.prev = e, n.e.prev = e && e.e);
}
function rr(t, e, n) {
  var r = t, i, a, o = null, u = null;
  function l() {
    a && (Ur(a), a = null), o && (o.lastChild.remove(), r.before(o), o = null), a = u, u = null;
  }
  Gr(() => {
    if (i !== (i = e())) {
      var c = rl();
      if (i) {
        var d = r;
        c && (o = document.createDocumentFragment(), o.append(d = Vr()), a && lt.skipped_effects.add(a)), u = Zt(() => n(d, i));
      }
      c ? lt.add_callback(l) : l();
    }
  }, Br);
}
function Fl(t, e, n, r, i, a) {
  var o, u, l = null, c = (
    /** @type {TemplateNode} */
    t
  ), d, m = di;
  Gr(() => {
    const f = e() || null;
    var g = f === "svg" ? tf : null;
    if (f !== o) {
      var h = di;
      Ul(m), d && (f === null ? Ur(d, () => {
        d = null, u = null;
      }) : f === u ? qo(d) : (zt(d), Nl(!1))), f && f !== u && (d = Zt(() => {
        if (l = g ? document.createElementNS(g, f) : document.createElement(f), $i(l, l), r) {
          var p = (
            /** @type {TemplateNode} */
            l.appendChild(Vr())
          );
          r(l, p);
        }
        We.nodes_end = l, c.before(l);
      })), o = f, o && (u = o), Nl(!0), Ul(h);
    }
  }, Br);
}
function Pe(t, e, n) {
  bi(() => {
    var r = jn(() => e(t, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      Ka(() => {
        var o = n();
        Cc(o), i && $s(a, o) && (a = o, r.update(o));
      }), i = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function mh(t, e) {
  var n = void 0, r;
  Gr(() => {
    n !== (n = e()) && (r && (zt(r), r = null), n && (r = Zt(() => {
      bi(() => (
        /** @type {(node: Element) => void} */
        n(t)
      ));
    })));
  });
}
function Oc(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var i = t.length;
    for (e = 0; e < i; e++) t[e] && (n = Oc(t[e])) && (r && (r += " "), r += n);
  } else for (n in t) t[n] && (r && (r += " "), r += n);
  return r;
}
function gh() {
  for (var t, e, n = 0, r = "", i = arguments.length; n < i; n++) (t = arguments[n]) && (e = Oc(t)) && (r && (r += " "), r += e);
  return r;
}
function Rc(t) {
  return typeof t == "object" ? gh(t) : t ?? "";
}
const kl = [...` 	
\r\f \v\uFEFF`];
function ph(t, e, n) {
  var r = t == null ? "" : "" + t;
  if (e && (r = r ? r + " " + e : e), n) {
    for (var i in n)
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0; ) {
          var u = o + a;
          (o === 0 || kl.includes(r[o - 1])) && (u === r.length || kl.includes(r[u])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(u + 1) : o = u;
        }
  }
  return r === "" ? null : r;
}
function Bl(t, e = !1) {
  var n = e ? " !important;" : ";", r = "";
  for (var i in t) {
    var a = t[i];
    a != null && a !== "" && (r += " " + i + ": " + a + n);
  }
  return r;
}
function es(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function bh(t, e) {
  if (e) {
    var n = "", r, i;
    if (Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, o = 0, u = !1, l = [];
      r && l.push(...Object.keys(r).map(es)), i && l.push(...Object.keys(i).map(es));
      var c = 0, d = -1;
      const p = t.length;
      for (var m = 0; m < p; m++) {
        var f = t[m];
        if (u ? f === "/" && t[m - 1] === "*" && (u = !1) : a ? a === f && (a = !1) : f === "/" && t[m + 1] === "*" ? u = !0 : f === '"' || f === "'" ? a = f : f === "(" ? o++ : f === ")" && o--, !u && a === !1 && o === 0) {
          if (f === ":" && d === -1)
            d = m;
          else if (f === ";" || m === p - 1) {
            if (d !== -1) {
              var g = es(t.substring(c, d).trim());
              if (!l.includes(g)) {
                f !== ";" && m++;
                var h = t.substring(c, m).trim();
                n += " " + h + ";";
              }
            }
            c = m + 1, d = -1;
          }
        }
      }
    }
    return r && (n += Bl(r)), i && (n += Bl(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function ol(t, e, n, r, i, a) {
  var o = t.__className;
  if (o !== n || o === void 0) {
    var u = ph(n, r, a);
    u == null ? t.removeAttribute("class") : e ? t.className = u : t.setAttribute("class", u), t.__className = n;
  } else if (a && i !== a)
    for (var l in a) {
      var c = !!a[l];
      (i == null || c !== !!i[l]) && t.classList.toggle(l, c);
    }
  return a;
}
function ts(t, e = {}, n, r) {
  for (var i in n) {
    var a = n[i];
    e[i] !== a && (n[i] == null ? t.style.removeProperty(i) : t.style.setProperty(i, a, r));
  }
}
function mt(t, e, n, r) {
  var i = t.__style;
  if (i !== e) {
    var a = bh(e, r);
    a == null ? t.removeAttribute("style") : t.style.cssText = a, t.__style = e;
  } else r && (Array.isArray(r) ? (ts(t, n == null ? void 0 : n[0], r[0]), ts(t, n == null ? void 0 : n[1], r[1], "important")) : ts(t, n, r));
  return r;
}
function Rs(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!Fo(e))
      return yf();
    for (var r of t.options)
      r.selected = e.includes(Vl(r));
    return;
  }
  for (r of t.options) {
    var i = Vl(r);
    if (Bf(i, e)) {
      r.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function _h(t) {
  var e = new MutationObserver(() => {
    Rs(t, t.__value);
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
  }), jo(() => {
    e.disconnect();
  });
}
function Vl(t) {
  return "__value" in t ? t.__value : t.value;
}
const pa = Symbol("class"), ba = Symbol("style"), Dc = Symbol("is custom element"), Mc = Symbol("is html");
function Gl(t, e) {
  var n = sl(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== "PROGRESS") || (t.value = e ?? "");
}
function yh(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function _r(t, e, n, r) {
  var i = sl(t);
  i[e] !== (i[e] = n) && (e === "loading" && (t[uf] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && Pc(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function Ih(t, e, n, r, i = !1, a = !1) {
  var o = sl(t), u = o[Dc], l = !o[Mc], c = e || {}, d = t.tagName === "OPTION";
  for (var m in e)
    m in n || (n[m] = null);
  n.class ? n.class = Rc(n.class) : n[pa] && (n.class = null), n[ba] && (n.style ?? (n.style = null));
  var f = Pc(t);
  for (const I in n) {
    let _ = n[I];
    if (d && I === "value" && _ == null) {
      t.value = t.__value = "", c[I] = _;
      continue;
    }
    if (I === "class") {
      var g = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      ol(t, g, _, r, e == null ? void 0 : e[pa], n[pa]), c[I] = _, c[pa] = n[pa];
      continue;
    }
    if (I === "style") {
      mt(t, _, e == null ? void 0 : e[ba], n[ba]), c[I] = _, c[ba] = n[ba];
      continue;
    }
    var h = c[I];
    if (!(_ === h && !(_ === void 0 && t.hasAttribute(I)))) {
      c[I] = _;
      var p = I[0] + I[1];
      if (p !== "$$")
        if (p === "on") {
          const A = {}, S = "$$" + I;
          let L = I.slice(2);
          var b = ih(L);
          if (nh(L) && (L = L.slice(0, -7), A.capture = !0), !b && h) {
            if (_ != null) continue;
            t.removeEventListener(L, c[S], A), c[S] = null;
          }
          if (_ != null)
            if (b)
              t[`__${L}`] = _, Sn([L]);
            else {
              let T = function(w) {
                c[I].call(this, w);
              };
              c[S] = al(L, t, T, A);
            }
          else b && (t[`__${L}`] = void 0);
        } else if (I === "style")
          _r(t, I, _);
        else if (I === "autofocus")
          jf(
            /** @type {HTMLElement} */
            t,
            !!_
          );
        else if (!u && (I === "__value" || I === "value" && _ != null))
          t.value = t.__value = _;
        else if (I === "selected" && d)
          yh(
            /** @type {HTMLOptionElement} */
            t,
            _
          );
        else {
          var y = I;
          l || (y = oh(y));
          var E = y === "defaultValue" || y === "defaultChecked";
          if (_ == null && !u && !E)
            if (o[I] = null, y === "value" || y === "checked") {
              let A = (
                /** @type {HTMLInputElement} */
                t
              );
              const S = e === void 0;
              if (y === "value") {
                let L = A.defaultValue;
                A.removeAttribute(y), A.defaultValue = L, A.value = A.__value = S ? L : null;
              } else {
                let L = A.defaultChecked;
                A.removeAttribute(y), A.defaultChecked = L, A.checked = S ? L : !1;
              }
            } else
              t.removeAttribute(I);
          else E || f.includes(y) && (u || typeof _ != "string") ? (t[y] = _, y in o && (o[y] = kt)) : typeof _ != "function" && _r(t, y, _);
        }
    }
  }
  return c;
}
function Ue(t, e, n = [], r = [], i, a = !1, o = !1) {
  tc(n, r, (u) => {
    var l = void 0, c = {}, d = t.nodeName === "SELECT", m = !1;
    if (Gr(() => {
      var g = e(...u.map(s)), h = Ih(
        t,
        l,
        g,
        i,
        a,
        o
      );
      m && d && "value" in g && Rs(
        /** @type {HTMLSelectElement} */
        t,
        g.value
      );
      for (let b of Object.getOwnPropertySymbols(c))
        g[b] || zt(c[b]);
      for (let b of Object.getOwnPropertySymbols(g)) {
        var p = g[b];
        b.description === nf && (!l || p !== l[b]) && (c[b] && zt(c[b]), c[b] = Zt(() => mh(t, () => p))), h[b] = p;
      }
      l = h;
    }), d) {
      var f = (
        /** @type {HTMLSelectElement} */
        t
      );
      bi(() => {
        Rs(
          f,
          /** @type {Record<string | symbol, any>} */
          l.value,
          !0
        ), _h(f);
      });
    }
    m = !0;
  });
}
function sl(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ?? (t.__attributes = {
      [Dc]: t.nodeName.includes("-"),
      [Mc]: t.namespaceURI === ef
    })
  );
}
var jl = /* @__PURE__ */ new Map();
function Pc(t) {
  var e = t.getAttribute("is") || t.nodeName, n = jl.get(e);
  if (n) return n;
  jl.set(e, n = []);
  for (var r, i = t, a = Element.prototype; a !== i; ) {
    r = Gu(i);
    for (var o in r)
      r[o].set && n.push(o);
    i = Ys(i);
  }
  return n;
}
const Sh = () => performance.now(), mr = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (t) => requestAnimationFrame(t)
  ),
  now: () => Sh(),
  tasks: /* @__PURE__ */ new Set()
};
function Hc() {
  const t = mr.now();
  mr.tasks.forEach((e) => {
    e.c(t) || (mr.tasks.delete(e), e.f());
  }), mr.tasks.size !== 0 && mr.tick(Hc);
}
function Eh(t) {
  let e;
  return mr.tasks.size === 0 && mr.tick(Hc), {
    promise: new Promise((n) => {
      mr.tasks.add(e = { c: t, f: n });
    }),
    abort() {
      mr.tasks.delete(e);
    }
  };
}
function eo(t, e) {
  sa(() => {
    t.dispatchEvent(new CustomEvent(e));
  });
}
function Ah(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const e = t.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (n) => n[0].toUpperCase() + n.slice(1)
  ).join("");
}
function ql(t) {
  const e = {}, n = t.split(";");
  for (const r of n) {
    const [i, a] = r.split(":");
    if (!i || a === void 0) break;
    const o = Ah(i.trim());
    e[o] = a.trim();
  }
  return e;
}
const Ch = (t) => t;
function Th(t, e, n) {
  var r = (
    /** @type {EachItem} */
    di
  ), i, a, o, u = null;
  r.a ?? (r.a = {
    element: t,
    measure() {
      i = this.element.getBoundingClientRect();
    },
    apply() {
      if (o == null || o.abort(), a = this.element.getBoundingClientRect(), i.left !== a.left || i.right !== a.right || i.top !== a.top || i.bottom !== a.bottom) {
        const l = e()(this.element, { from: i, to: a }, n == null ? void 0 : n());
        o = Co(this.element, l, void 0, 1, () => {
          o == null || o.abort(), o = void 0;
        });
      }
    },
    fix() {
      if (!t.getAnimations().length) {
        var { position: l, width: c, height: d } = getComputedStyle(t);
        if (l !== "absolute" && l !== "fixed") {
          var m = (
            /** @type {HTMLElement | SVGElement} */
            t.style
          );
          u = {
            position: m.position,
            width: m.width,
            height: m.height,
            transform: m.transform
          }, m.position = "absolute", m.width = c, m.height = d;
          var f = t.getBoundingClientRect();
          if (i.left !== f.left || i.top !== f.top) {
            var g = `translate(${i.left - f.left}px, ${i.top - f.top}px)`;
            m.transform = m.transform ? `${m.transform} ${g}` : g;
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
function Ao(t, e, n, r) {
  var i = (t & 1) !== 0, a = (t & 2) !== 0, o = i && a, u = (t & 4) !== 0, l = o ? "both" : i ? "in" : "out", c, d = e.inert, m = e.style.overflow, f, g;
  function h() {
    return sa(() => c ?? (c = n()(e, (r == null ? void 0 : r()) ?? /** @type {P} */
    {}, {
      direction: l
    })));
  }
  var p = {
    is_global: u,
    in() {
      var I;
      if (e.inert = d, !i) {
        g == null || g.abort(), (I = g == null ? void 0 : g.reset) == null || I.call(g);
        return;
      }
      a || f == null || f.abort(), eo(e, "introstart"), f = Co(e, h(), g, 1, () => {
        eo(e, "introend"), f == null || f.abort(), f = c = void 0, e.style.overflow = m;
      });
    },
    out(I) {
      if (!a) {
        I == null || I(), c = void 0;
        return;
      }
      e.inert = !0, eo(e, "outrostart"), g = Co(e, h(), f, 0, () => {
        eo(e, "outroend"), I == null || I();
      });
    },
    stop: () => {
      f == null || f.abort(), g == null || g.abort();
    }
  }, b = (
    /** @type {Effect} */
    We
  );
  if ((b.transitions ?? (b.transitions = [])).push(p), i && Eo) {
    var y = u;
    if (!y) {
      for (var E = (
        /** @type {Effect | null} */
        b.parent
      ); E && E.f & Br; )
        for (; (E = E.parent) && !(E.f & Fr); )
          ;
      y = !E || (E.f & Bo) !== 0;
    }
    y && bi(() => {
      jn(() => p.in());
    });
  }
}
function Co(t, e, n, r, i) {
  var a = r === 1;
  if (Pi(e)) {
    var o, u = !1;
    return yr(() => {
      if (!u) {
        var b = e({ direction: a ? "in" : "out" });
        o = Co(t, b, n, r, i);
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
      abort: ve,
      deactivate: ve,
      reset: ve,
      t: () => r
    };
  const { delay: l = 0, css: c, tick: d, easing: m = Ch } = e;
  var f = [];
  if (a && n === void 0 && (d && d(0, 1), c)) {
    var g = ql(c(0, 1));
    f.push(g, g);
  }
  var h = () => 1 - r, p = t.animate(f, { duration: l, fill: "forwards" });
  return p.onfinish = () => {
    p.cancel();
    var b = (n == null ? void 0 : n.t()) ?? 1 - r;
    n == null || n.abort();
    var y = r - b, E = (
      /** @type {number} */
      e.duration * Math.abs(y)
    ), I = [];
    if (E > 0) {
      var _ = !1;
      if (c)
        for (var A = Math.ceil(E / 16.666666666666668), S = 0; S <= A; S += 1) {
          var L = b + y * m(S / A), T = ql(c(L, 1 - L));
          I.push(T), _ || (_ = T.overflow === "hidden");
        }
      _ && (t.style.overflow = "hidden"), h = () => {
        var w = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          p.currentTime
        );
        return b + y * m(w / E);
      }, d && Eh(() => {
        if (p.playState !== "running") return !1;
        var w = h();
        return d(w, 1 - w), !0;
      });
    }
    p = t.animate(I, { duration: E, fill: "forwards" }), p.onfinish = () => {
      h = () => r, d == null || d(r, 1 - r), i();
    };
  }, {
    abort: () => {
      p && (p.cancel(), p.effect = null, p.onfinish = ve);
    },
    deactivate: () => {
      i = ve;
    },
    reset: () => {
      r === 0 && (d == null || d(1, 0));
    },
    t: () => h()
  };
}
function Ha(t, e, n = e) {
  var r = /* @__PURE__ */ new WeakSet();
  uc(t, "input", async (i) => {
    var a = i ? t.defaultValue : t.value;
    if (a = ns(t) ? rs(a) : a, n(a), lt !== null && r.add(lt), await Ec(), a !== (a = e())) {
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
  jn(e) == null && t.value && (n(ns(t) ? rs(t.value) : t.value), lt !== null && r.add(lt)), Ka(() => {
    var i = e();
    if (t === document.activeElement) {
      var a = (
        /** @type {Batch} */
        fo ?? lt
      );
      if (r.has(a))
        return;
    }
    ns(t) && i === rs(t.value) || t.type === "date" && !i && !t.value || i !== t.value && (t.value = i ?? "");
  });
}
function xh(t, e, n = e) {
  uc(t, "change", (r) => {
    var i = r ? t.defaultChecked : t.checked;
    n(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  // If defaultChecked is set, then checked == defaultChecked
  jn(e) == null && n(t.checked), Ka(() => {
    var r = e();
    t.checked = !!r;
  });
}
function ns(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function rs(t) {
  return t === "" ? null : +t;
}
function Wl(t, e) {
  return t === e || (t == null ? void 0 : t[$n]) === e;
}
function Ce(t = {}, e, n, r) {
  return bi(() => {
    var i, a;
    return Ka(() => {
      i = a, a = (r == null ? void 0 : r()) || [], jn(() => {
        t !== n(...a) && (e(t, ...a), i && Wl(n(...i), t) && e(null, ...i));
      });
    }), () => {
      yr(() => {
        a && Wl(n(...a), t) && e(null, ...a);
      });
    };
  }), t;
}
function wh(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    ct
  ), n = e.l.u;
  if (!n) return;
  let r = () => Cc(e.s);
  if (t) {
    let i = 0, a = (
      /** @type {Record<string, any>} */
      {}
    );
    const o = /* @__PURE__ */ Wa(() => {
      let u = !1;
      const l = e.s;
      for (const c in l)
        l[c] !== a[c] && (a[c] = l[c], u = !0);
      return u && i++, i;
    });
    r = () => s(o);
  }
  n.b.length && fc(() => {
    zl(e, r), yo(n.b);
  }), Le(() => {
    const i = jn(() => n.m.map(sf));
    return () => {
      for (const a of i)
        typeof a == "function" && a();
    };
  }), n.a.length && Le(() => {
    zl(e, r), yo(n.a);
  });
}
function zl(t, e) {
  if (t.l.s)
    for (const n of t.l.s) s(n);
  e();
}
function ll(t, e, n) {
  if (t == null)
    return e(void 0), n && n(void 0), ve;
  const r = jn(
    () => t.subscribe(
      e,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const Li = [];
function Lh(t, e) {
  return {
    subscribe: Vt(t, e).subscribe
  };
}
function Vt(t, e = ve) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function i(u) {
    if ($s(t, u) && (t = u, n)) {
      const l = !Li.length;
      for (const c of r)
        c[1](), Li.push(c, t);
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
      t
    ));
  }
  function o(u, l = ve) {
    const c = [u, l];
    return r.add(c), r.size === 1 && (n = e(i, a) || ve), u(
      /** @type {T} */
      t
    ), () => {
      r.delete(c), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: a, subscribe: o };
}
function la(t, e, n) {
  const r = !Array.isArray(t), i = r ? [t] : t;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = e.length < 2;
  return Lh(n, (o, u) => {
    let l = !1;
    const c = [];
    let d = 0, m = ve;
    const f = () => {
      if (d)
        return;
      m();
      const h = e(r ? c[0] : c, o, u);
      a ? o(h) : m = typeof h == "function" ? h : ve;
    }, g = i.map(
      (h, p) => ll(
        h,
        (b) => {
          c[p] = b, d &= ~(1 << p), l && f();
        },
        () => {
          d |= 1 << p;
        }
      )
    );
    return l = !0, f(), function() {
      yo(g), m(), l = !1;
    };
  });
}
function Nc(t) {
  let e;
  return ll(t, (n) => e = n)(), e;
}
let to = !1, Ds = Symbol();
function Bn(t, e, n) {
  const r = n[e] ?? (n[e] = {
    store: null,
    source: /* @__PURE__ */ ic(void 0),
    unsubscribe: ve
  });
  if (r.store !== t && !(Ds in n))
    if (r.unsubscribe(), r.store = t ?? null, t == null)
      r.source.v = void 0, r.unsubscribe = ve;
    else {
      var i = !0;
      r.unsubscribe = ll(t, (a) => {
        i ? r.source.v = a : X(r.source, a);
      }), i = !1;
    }
  return t && Ds in n ? Nc(t) : s(r.source);
}
function Fn(t, e) {
  return t.set(e), e;
}
function ir() {
  const t = {};
  function e() {
    jo(() => {
      for (var n in t)
        t[n].unsubscribe();
      _o(t, Ds, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [t, e];
}
function Oh(t) {
  var e = to;
  try {
    return to = !1, [t(), to];
  } finally {
    to = e;
  }
}
const Rh = {
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
function je(t, e, n) {
  return new Proxy(
    { props: t, exclude: e },
    Rh
  );
}
const Dh = {
  get(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (Pi(r) && (r = r()), typeof r == "object" && r !== null && e in r) return r[e];
    }
  },
  set(t, e, n) {
    let r = t.props.length;
    for (; r--; ) {
      let i = t.props[r];
      Pi(i) && (i = i());
      const a = Hr(i, e);
      if (a && a.set)
        return a.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (Pi(r) && (r = r()), typeof r == "object" && r !== null && e in r) {
        const i = Hr(r, e);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(t, e) {
    if (e === $n || e === Wu) return !1;
    for (let n of t.props)
      if (Pi(n) && (n = n()), n != null && e in n) return !0;
    return !1;
  },
  ownKeys(t) {
    const e = [];
    for (let n of t.props)
      if (Pi(n) && (n = n()), !!n) {
        for (const r in n)
          e.includes(r) || e.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          e.includes(r) || e.push(r);
      }
    return e;
  }
};
function Je(...t) {
  return new Proxy({ props: t }, Dh);
}
function v(t, e, n, r) {
  var I;
  var i = !oa || (n & 2) !== 0, a = (n & 8) !== 0, o = (n & 16) !== 0, u = (
    /** @type {V} */
    r
  ), l = !0, c = () => (l && (l = !1, u = o ? jn(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), u), d;
  if (a) {
    var m = $n in t || Wu in t;
    d = ((I = Hr(t, e)) == null ? void 0 : I.set) ?? (m && e in t ? (_) => t[e] = _ : void 0);
  }
  var f, g = !1;
  a ? [f, g] = Oh(() => (
    /** @type {V} */
    t[e]
  )) : f = /** @type {V} */
  t[e], f === void 0 && r !== void 0 && (f = c(), d && (i && mf(), d(f)));
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
    var p = t.$$legacy;
    return (
      /** @type {() => V} */
      function(_, A) {
        return arguments.length > 0 ? ((!i || !A || p || g) && d(A ? h() : _), _) : h();
      }
    );
  }
  var b = !1, y = (n & 1 ? Wa : el)(() => (b = !1, h()));
  a && s(y);
  var E = (
    /** @type {Effect} */
    We
  );
  return (
    /** @type {() => V} */
    function(_, A) {
      if (arguments.length > 0) {
        const S = A ? s(y) : i && a ? ye(_) : _;
        return X(y, S), b = !0, u !== void 0 && (u = S), _;
      }
      return _i && b || E.f & pi ? y.v : s(y);
    }
  );
}
const Mh = "5";
var Bu;
typeof window < "u" && ((Bu = window.__svelte ?? (window.__svelte = {})).v ?? (Bu.v = /* @__PURE__ */ new Set())).add(Mh);
function Ph(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Hh = function(e) {
  return Nh(e) && !Uh(e);
};
function Nh(t) {
  return !!t && typeof t == "object";
}
function Uh(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || Bh(t);
}
var Fh = typeof Symbol == "function" && Symbol.for, kh = Fh ? Symbol.for("react.element") : 60103;
function Bh(t) {
  return t.$$typeof === kh;
}
function Vh(t) {
  return Array.isArray(t) ? [] : {};
}
function Na(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? ea(Vh(t), t, e) : t;
}
function Gh(t, e, n) {
  return t.concat(e).map(function(r) {
    return Na(r, n);
  });
}
function jh(t, e) {
  if (!e.customMerge)
    return ea;
  var n = e.customMerge(t);
  return typeof n == "function" ? n : ea;
}
function qh(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function Kl(t) {
  return Object.keys(t).concat(qh(t));
}
function Uc(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function Wh(t, e) {
  return Uc(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function zh(t, e, n) {
  var r = {};
  return n.isMergeableObject(t) && Kl(t).forEach(function(i) {
    r[i] = Na(t[i], n);
  }), Kl(e).forEach(function(i) {
    Wh(t, i) || (Uc(t, i) && n.isMergeableObject(e[i]) ? r[i] = jh(i, n)(t[i], e[i], n) : r[i] = Na(e[i], n));
  }), r;
}
function ea(t, e, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || Gh, n.isMergeableObject = n.isMergeableObject || Hh, n.cloneUnlessOtherwiseSpecified = Na;
  var r = Array.isArray(e), i = Array.isArray(t), a = r === i;
  return a ? r ? n.arrayMerge(t, e, n) : zh(t, e, n) : Na(e, n);
}
ea.all = function(e, n) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(r, i) {
    return ea(r, i, n);
  }, {});
};
var Kh = ea, Xh = Kh;
const Yh = /* @__PURE__ */ Ph(Xh);
var Ms = function(t, e) {
  return Ms = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, Ms(t, e);
};
function ze(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Ms(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
var pe = function() {
  return pe = Object.assign || function(e) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, pe.apply(this, arguments);
};
function Zh(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  return n;
}
function Fc(t, e, n, r) {
  function i(a) {
    return a instanceof n ? a : new n(function(o) {
      o(a);
    });
  }
  return new (n || (n = Promise))(function(a, o) {
    function u(d) {
      try {
        c(r.next(d));
      } catch (m) {
        o(m);
      }
    }
    function l(d) {
      try {
        c(r.throw(d));
      } catch (m) {
        o(m);
      }
    }
    function c(d) {
      d.done ? a(d.value) : i(d.value).then(u, l);
    }
    c((r = r.apply(t, e || [])).next());
  });
}
function ul(t, e) {
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
function Bt(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, n = e && t[e], r = 0;
  if (n) return n.call(t);
  if (t && typeof t.length == "number") return {
    next: function() {
      return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Ir(t, e) {
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
function er(t, e, n) {
  if (n || arguments.length === 2) for (var r = 0, i = e.length, a; r < i; r++)
    (a || !(r in e)) && (a || (a = Array.prototype.slice.call(e, 0, r)), a[r] = e[r]);
  return t.concat(a || Array.prototype.slice.call(e));
}
function Vi(t) {
  return this instanceof Vi ? (this.v = t, this) : new Vi(t);
}
function Qh(t, e, n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(t, e || []), i, a = [];
  return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), u("next"), u("throw"), u("return", o), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function o(g) {
    return function(h) {
      return Promise.resolve(h).then(g, m);
    };
  }
  function u(g, h) {
    r[g] && (i[g] = function(p) {
      return new Promise(function(b, y) {
        a.push([g, p, b, y]) > 1 || l(g, p);
      });
    }, h && (i[g] = h(i[g])));
  }
  function l(g, h) {
    try {
      c(r[g](h));
    } catch (p) {
      f(a[0][3], p);
    }
  }
  function c(g) {
    g.value instanceof Vi ? Promise.resolve(g.value.v).then(d, m) : f(a[0][2], g);
  }
  function d(g) {
    l("next", g);
  }
  function m(g) {
    l("throw", g);
  }
  function f(g, h) {
    g(h), a.shift(), a.length && l(a[0][0], a[0][1]);
  }
}
function Jh(t) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], n;
  return e ? e.call(t) : (t = typeof Bt == "function" ? Bt(t) : t[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
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
function is(t, e) {
  var n = e && e.cache ? e.cache : av, r = e && e.serializer ? e.serializer : rv, i = e && e.strategy ? e.strategy : tv;
  return i(t, {
    cache: n,
    serializer: r
  });
}
function $h(t) {
  return t == null || typeof t == "number" || typeof t == "boolean";
}
function ev(t, e, n, r) {
  var i = $h(r) ? r : n(r), a = e.get(i);
  return typeof a > "u" && (a = t.call(this, r), e.set(i, a)), a;
}
function kc(t, e, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = e.get(i);
  return typeof a > "u" && (a = t.apply(this, r), e.set(i, a)), a;
}
function Bc(t, e, n, r, i) {
  return n.bind(e, t, r, i);
}
function tv(t, e) {
  var n = t.length === 1 ? ev : kc;
  return Bc(t, this, n, e.cache.create(), e.serializer);
}
function nv(t, e) {
  return Bc(t, this, kc, e.cache.create(), e.serializer);
}
var rv = function() {
  return JSON.stringify(arguments);
}, iv = (
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
), av = {
  create: function() {
    return new iv();
  }
}, as = {
  variadic: nv
}, Ze;
(function(t) {
  t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", t[t.INVALID_TAG = 23] = "INVALID_TAG", t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(Ze || (Ze = {}));
var bt;
(function(t) {
  t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag";
})(bt || (bt = {}));
var ta;
(function(t) {
  t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime";
})(ta || (ta = {}));
function Xl(t) {
  return t.type === bt.literal;
}
function ov(t) {
  return t.type === bt.argument;
}
function Vc(t) {
  return t.type === bt.number;
}
function Gc(t) {
  return t.type === bt.date;
}
function jc(t) {
  return t.type === bt.time;
}
function qc(t) {
  return t.type === bt.select;
}
function Wc(t) {
  return t.type === bt.plural;
}
function sv(t) {
  return t.type === bt.pound;
}
function zc(t) {
  return t.type === bt.tag;
}
function Kc(t) {
  return !!(t && typeof t == "object" && t.type === ta.number);
}
function Ps(t) {
  return !!(t && typeof t == "object" && t.type === ta.dateTime);
}
var Xc = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, lv = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function uv(t) {
  var e = {};
  return t.replace(lv, function(n) {
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
var cv = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function dv(t) {
  if (t.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var e = t.split(cv).filter(function(f) {
    return f.length > 0;
  }), n = [], r = 0, i = e; r < i.length; r++) {
    var a = i[r], o = a.split("/");
    if (o.length === 0)
      throw new Error("Invalid number skeleton");
    for (var u = o[0], l = o.slice(1), c = 0, d = l; c < d.length; c++) {
      var m = d[c];
      if (m.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: u, options: l });
  }
  return n;
}
function fv(t) {
  return t.replace(/^(.*?)-/, "");
}
var Yl = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Yc = /^(@+)?(\+|#+)?[rs]?$/g, hv = /(\*)(0+)|(#+)(0+)|(0+)/g, Zc = /^(0+)$/;
function Zl(t) {
  var e = {};
  return t[t.length - 1] === "r" ? e.roundingPriority = "morePrecision" : t[t.length - 1] === "s" && (e.roundingPriority = "lessPrecision"), t.replace(Yc, function(n, r, i) {
    return typeof i != "string" ? (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length) : i === "+" ? e.minimumSignificantDigits = r.length : r[0] === "#" ? e.maximumSignificantDigits = r.length : (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), e;
}
function Qc(t) {
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
function vv(t) {
  var e;
  if (t[0] === "E" && t[1] === "E" ? (e = {
    notation: "engineering"
  }, t = t.slice(2)) : t[0] === "E" && (e = {
    notation: "scientific"
  }, t = t.slice(1)), e) {
    var n = t.slice(0, 2);
    if (n === "+!" ? (e.signDisplay = "always", t = t.slice(2)) : n === "+?" && (e.signDisplay = "exceptZero", t = t.slice(2)), !Zc.test(t))
      throw new Error("Malformed concise eng/scientific notation");
    e.minimumIntegerDigits = t.length;
  }
  return e;
}
function Ql(t) {
  var e = {}, n = Qc(t);
  return n || e;
}
function mv(t) {
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
        e.style = "unit", e.unit = fv(i.options[0]);
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
        e = pe(pe(pe({}, e), { notation: "scientific" }), i.options.reduce(function(l, c) {
          return pe(pe({}, l), Ql(c));
        }, {}));
        continue;
      case "engineering":
        e = pe(pe(pe({}, e), { notation: "engineering" }), i.options.reduce(function(l, c) {
          return pe(pe({}, l), Ql(c));
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
        i.options[0].replace(hv, function(l, c, d, m, f, g) {
          if (c)
            e.minimumIntegerDigits = d.length;
          else {
            if (m && f)
              throw new Error("We currently do not support maximum integer digits");
            if (g)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (Zc.test(i.stem)) {
      e.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (Yl.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(Yl, function(l, c, d, m, f, g) {
        return d === "*" ? e.minimumFractionDigits = c.length : m && m[0] === "#" ? e.maximumFractionDigits = m.length : f && g ? (e.minimumFractionDigits = f.length, e.maximumFractionDigits = f.length + g.length) : (e.minimumFractionDigits = c.length, e.maximumFractionDigits = c.length), "";
      });
      var a = i.options[0];
      a === "w" ? e = pe(pe({}, e), { trailingZeroDisplay: "stripIfInteger" }) : a && (e = pe(pe({}, e), Zl(a)));
      continue;
    }
    if (Yc.test(i.stem)) {
      e = pe(pe({}, e), Zl(i.stem));
      continue;
    }
    var o = Qc(i.stem);
    o && (e = pe(pe({}, e), o));
    var u = vv(i.stem);
    u && (e = pe(pe({}, e), u));
  }
  return e;
}
var no = {
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
function gv(t, e) {
  for (var n = "", r = 0; r < t.length; r++) {
    var i = t.charAt(r);
    if (i === "j") {
      for (var a = 0; r + 1 < t.length && t.charAt(r + 1) === i; )
        a++, r++;
      var o = 1 + (a & 1), u = a < 2 ? 1 : 3 + (a >> 1), l = "a", c = pv(e);
      for ((c == "H" || c == "k") && (u = 0); u-- > 0; )
        n += l;
      for (; o-- > 0; )
        n = c + n;
    } else i === "J" ? n += "H" : n += i;
  }
  return n;
}
function pv(t) {
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
  var i = no[r || ""] || no[n || ""] || no["".concat(n, "-001")] || no["001"];
  return i[0];
}
var os, bv = new RegExp("^".concat(Xc.source, "*")), _v = new RegExp("".concat(Xc.source, "*$"));
function Qe(t, e) {
  return { start: t, end: e };
}
var yv = !!String.prototype.startsWith && "_a".startsWith("a", 1), Iv = !!String.fromCodePoint, Sv = !!Object.fromEntries, Ev = !!String.prototype.codePointAt, Av = !!String.prototype.trimStart, Cv = !!String.prototype.trimEnd, Tv = !!Number.isSafeInteger, xv = Tv ? Number.isSafeInteger : function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991;
}, Hs = !0;
try {
  var wv = $c("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Hs = ((os = wv.exec("a")) === null || os === void 0 ? void 0 : os[0]) === "a";
} catch {
  Hs = !1;
}
var Jl = yv ? (
  // Native
  function(e, n, r) {
    return e.startsWith(n, r);
  }
) : (
  // For IE11
  function(e, n, r) {
    return e.slice(r, r + n.length) === n;
  }
), Ns = Iv ? String.fromCodePoint : (
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
), $l = (
  // native
  Sv ? Object.fromEntries : (
    // Ponyfill
    function(e) {
      for (var n = {}, r = 0, i = e; r < i.length; r++) {
        var a = i[r], o = a[0], u = a[1];
        n[o] = u;
      }
      return n;
    }
  )
), Jc = Ev ? (
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
), Lv = Av ? (
  // Native
  function(e) {
    return e.trimStart();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(bv, "");
  }
), Ov = Cv ? (
  // Native
  function(e) {
    return e.trimEnd();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(_v, "");
  }
);
function $c(t, e) {
  return new RegExp(t, e);
}
var Us;
if (Hs) {
  var eu = $c("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Us = function(e, n) {
    var r;
    eu.lastIndex = n;
    var i = eu.exec(e);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  Us = function(e, n) {
    for (var r = []; ; ) {
      var i = Jc(e, n);
      if (i === void 0 || ed(i) || Pv(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return Ns.apply(void 0, r);
  };
var Rv = (
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
              type: bt.pound,
              location: Qe(u, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(Ze.UNMATCHED_CLOSING_TAG, Qe(this.clonePosition(), this.clonePosition()));
          } else if (a === 60 && !this.ignoreTag && Fs(this.peek() || 0)) {
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
            type: bt.literal,
            value: "<".concat(i, "/>"),
            location: Qe(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var a = this.parseMessage(e + 1, n, !0);
        if (a.err)
          return a;
        var o = a.val, u = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !Fs(this.char()))
            return this.error(Ze.INVALID_TAG, Qe(u, this.clonePosition()));
          var l = this.clonePosition(), c = this.parseTagName();
          return i !== c ? this.error(Ze.UNMATCHED_CLOSING_TAG, Qe(l, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: bt.tag,
              value: i,
              children: o,
              location: Qe(r, this.clonePosition())
            },
            err: null
          } : this.error(Ze.INVALID_TAG, Qe(u, this.clonePosition())));
        } else
          return this.error(Ze.UNCLOSED_TAG, Qe(r, this.clonePosition()));
      } else
        return this.error(Ze.INVALID_TAG, Qe(r, this.clonePosition()));
    }, t.prototype.parseTagName = function() {
      var e = this.offset();
      for (this.bump(); !this.isEOF() && Mv(this.char()); )
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
      var l = Qe(r, this.clonePosition());
      return {
        val: { type: bt.literal, value: i, location: l },
        err: null
      };
    }, t.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !Dv(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      return Ns.apply(void 0, n);
    }, t.prototype.tryParseUnquoted = function(e, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && e > 0 ? null : (this.bump(), Ns(r));
    }, t.prototype.parseArgument = function(e, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(Ze.EXPECT_ARGUMENT_CLOSING_BRACE, Qe(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(Ze.EMPTY_ARGUMENT, Qe(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(Ze.MALFORMED_ARGUMENT, Qe(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(Ze.EXPECT_ARGUMENT_CLOSING_BRACE, Qe(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: bt.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: Qe(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Ze.EXPECT_ARGUMENT_CLOSING_BRACE, Qe(r, this.clonePosition())) : this.parseArgumentOptions(e, n, i, r);
        default:
          return this.error(Ze.MALFORMED_ARGUMENT, Qe(r, this.clonePosition()));
      }
    }, t.prototype.parseIdentifierIfPossible = function() {
      var e = this.clonePosition(), n = this.offset(), r = Us(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var a = this.clonePosition(), o = Qe(e, a);
      return { value: r, location: o };
    }, t.prototype.parseArgumentOptions = function(e, n, r, i) {
      var a, o = this.clonePosition(), u = this.parseIdentifierIfPossible().value, l = this.clonePosition();
      switch (u) {
        case "":
          return this.error(Ze.EXPECT_ARGUMENT_TYPE, Qe(o, l));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var c = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var d = this.clonePosition(), m = this.parseSimpleArgStyleIfPossible();
            if (m.err)
              return m;
            var f = Ov(m.val);
            if (f.length === 0)
              return this.error(Ze.EXPECT_ARGUMENT_STYLE, Qe(this.clonePosition(), this.clonePosition()));
            var g = Qe(d, this.clonePosition());
            c = { style: f, styleLocation: g };
          }
          var h = this.tryParseArgumentClose(i);
          if (h.err)
            return h;
          var p = Qe(i, this.clonePosition());
          if (c && Jl(c == null ? void 0 : c.style, "::", 0)) {
            var b = Lv(c.style.slice(2));
            if (u === "number") {
              var m = this.parseNumberSkeletonFromString(b, c.styleLocation);
              return m.err ? m : {
                val: { type: bt.number, value: r, location: p, style: m.val },
                err: null
              };
            } else {
              if (b.length === 0)
                return this.error(Ze.EXPECT_DATE_TIME_SKELETON, p);
              var y = b;
              this.locale && (y = gv(b, this.locale));
              var f = {
                type: ta.dateTime,
                pattern: y,
                location: c.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? uv(y) : {}
              }, E = u === "date" ? bt.date : bt.time;
              return {
                val: { type: E, value: r, location: p, style: f },
                err: null
              };
            }
          }
          return {
            val: {
              type: u === "number" ? bt.number : u === "date" ? bt.date : bt.time,
              value: r,
              location: p,
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
            return this.error(Ze.EXPECT_SELECT_ARGUMENT_OPTIONS, Qe(I, pe({}, I)));
          this.bumpSpace();
          var _ = this.parseIdentifierIfPossible(), A = 0;
          if (u !== "select" && _.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(Ze.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Qe(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var m = this.tryParseDecimalInteger(Ze.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Ze.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (m.err)
              return m;
            this.bumpSpace(), _ = this.parseIdentifierIfPossible(), A = m.val;
          }
          var S = this.tryParsePluralOrSelectOptions(e, u, n, _);
          if (S.err)
            return S;
          var h = this.tryParseArgumentClose(i);
          if (h.err)
            return h;
          var L = Qe(i, this.clonePosition());
          return u === "select" ? {
            val: {
              type: bt.select,
              value: r,
              options: $l(S.val),
              location: L
            },
            err: null
          } : {
            val: {
              type: bt.plural,
              value: r,
              options: $l(S.val),
              offset: A,
              pluralType: u === "plural" ? "cardinal" : "ordinal",
              location: L
            },
            err: null
          };
        }
        default:
          return this.error(Ze.INVALID_ARGUMENT_TYPE, Qe(o, l));
      }
    }, t.prototype.tryParseArgumentClose = function(e) {
      return this.isEOF() || this.char() !== 125 ? this.error(Ze.EXPECT_ARGUMENT_CLOSING_BRACE, Qe(e, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, t.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var e = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(Ze.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Qe(i, this.clonePosition()));
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
        r = dv(e);
      } catch {
        return this.error(Ze.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: ta.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? mv(r) : {}
        },
        err: null
      };
    }, t.prototype.tryParsePluralOrSelectOptions = function(e, n, r, i) {
      for (var a, o = !1, u = [], l = /* @__PURE__ */ new Set(), c = i.value, d = i.location; ; ) {
        if (c.length === 0) {
          var m = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var f = this.tryParseDecimalInteger(Ze.EXPECT_PLURAL_ARGUMENT_SELECTOR, Ze.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (f.err)
              return f;
            d = Qe(m, this.clonePosition()), c = this.message.slice(m.offset, this.offset());
          } else
            break;
        }
        if (l.has(c))
          return this.error(n === "select" ? Ze.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Ze.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, d);
        c === "other" && (o = !0), this.bumpSpace();
        var g = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? Ze.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Ze.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Qe(this.clonePosition(), this.clonePosition()));
        var h = this.parseMessage(e + 1, n, r);
        if (h.err)
          return h;
        var p = this.tryParseArgumentClose(g);
        if (p.err)
          return p;
        u.push([
          c,
          {
            value: h.val,
            location: Qe(g, this.clonePosition())
          }
        ]), l.add(c), this.bumpSpace(), a = this.parseIdentifierIfPossible(), c = a.value, d = a.location;
      }
      return u.length === 0 ? this.error(n === "select" ? Ze.EXPECT_SELECT_ARGUMENT_SELECTOR : Ze.EXPECT_PLURAL_ARGUMENT_SELECTOR, Qe(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(Ze.MISSING_OTHER_CLAUSE, Qe(this.clonePosition(), this.clonePosition())) : { val: u, err: null };
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
      var l = Qe(i, this.clonePosition());
      return a ? (o *= r, xv(o) ? { val: o, err: null } : this.error(n, l)) : this.error(e, l);
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
      var n = Jc(this.message, e);
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
      if (Jl(this.message, e, this.offset())) {
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
      for (; !this.isEOF() && ed(this.char()); )
        this.bump();
    }, t.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var e = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (e >= 65536 ? 2 : 1));
      return r ?? null;
    }, t;
  }()
);
function Fs(t) {
  return t >= 97 && t <= 122 || t >= 65 && t <= 90;
}
function Dv(t) {
  return Fs(t) || t === 47;
}
function Mv(t) {
  return t === 45 || t === 46 || t >= 48 && t <= 57 || t === 95 || t >= 97 && t <= 122 || t >= 65 && t <= 90 || t == 183 || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039;
}
function ed(t) {
  return t >= 9 && t <= 13 || t === 32 || t === 133 || t >= 8206 && t <= 8207 || t === 8232 || t === 8233;
}
function Pv(t) {
  return t >= 33 && t <= 35 || t === 36 || t >= 37 && t <= 39 || t === 40 || t === 41 || t === 42 || t === 43 || t === 44 || t === 45 || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || t === 91 || t === 92 || t === 93 || t === 94 || t === 96 || t === 123 || t === 124 || t === 125 || t === 126 || t === 161 || t >= 162 && t <= 165 || t === 166 || t === 167 || t === 169 || t === 171 || t === 172 || t === 174 || t === 176 || t === 177 || t === 182 || t === 187 || t === 191 || t === 215 || t === 247 || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || t === 8216 || t === 8217 || t === 8218 || t >= 8219 && t <= 8220 || t === 8221 || t === 8222 || t === 8223 || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || t === 8249 || t === 8250 || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || t === 8260 || t === 8261 || t === 8262 || t >= 8263 && t <= 8273 || t === 8274 || t === 8275 || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || t === 8608 || t >= 8609 && t <= 8610 || t === 8611 || t >= 8612 && t <= 8613 || t === 8614 || t >= 8615 && t <= 8621 || t === 8622 || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || t === 8658 || t === 8659 || t === 8660 || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || t === 8968 || t === 8969 || t === 8970 || t === 8971 || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9e3 || t === 9001 || t === 9002 || t >= 9003 && t <= 9083 || t === 9084 || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || t === 9655 || t >= 9656 && t <= 9664 || t === 9665 || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || t === 9839 || t >= 9840 && t <= 10087 || t === 10088 || t === 10089 || t === 10090 || t === 10091 || t === 10092 || t === 10093 || t === 10094 || t === 10095 || t === 10096 || t === 10097 || t === 10098 || t === 10099 || t === 10100 || t === 10101 || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || t === 10181 || t === 10182 || t >= 10183 && t <= 10213 || t === 10214 || t === 10215 || t === 10216 || t === 10217 || t === 10218 || t === 10219 || t === 10220 || t === 10221 || t === 10222 || t === 10223 || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || t === 10627 || t === 10628 || t === 10629 || t === 10630 || t === 10631 || t === 10632 || t === 10633 || t === 10634 || t === 10635 || t === 10636 || t === 10637 || t === 10638 || t === 10639 || t === 10640 || t === 10641 || t === 10642 || t === 10643 || t === 10644 || t === 10645 || t === 10646 || t === 10647 || t === 10648 || t >= 10649 && t <= 10711 || t === 10712 || t === 10713 || t === 10714 || t === 10715 || t >= 10716 && t <= 10747 || t === 10748 || t === 10749 || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || t === 11158 || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || t === 11778 || t === 11779 || t === 11780 || t === 11781 || t >= 11782 && t <= 11784 || t === 11785 || t === 11786 || t === 11787 || t === 11788 || t === 11789 || t >= 11790 && t <= 11798 || t === 11799 || t >= 11800 && t <= 11801 || t === 11802 || t === 11803 || t === 11804 || t === 11805 || t >= 11806 && t <= 11807 || t === 11808 || t === 11809 || t === 11810 || t === 11811 || t === 11812 || t === 11813 || t === 11814 || t === 11815 || t === 11816 || t === 11817 || t >= 11818 && t <= 11822 || t === 11823 || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || t === 11840 || t === 11841 || t === 11842 || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || t === 11858 || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || t === 12296 || t === 12297 || t === 12298 || t === 12299 || t === 12300 || t === 12301 || t === 12302 || t === 12303 || t === 12304 || t === 12305 || t >= 12306 && t <= 12307 || t === 12308 || t === 12309 || t === 12310 || t === 12311 || t === 12312 || t === 12313 || t === 12314 || t === 12315 || t === 12316 || t === 12317 || t >= 12318 && t <= 12319 || t === 12320 || t === 12336 || t === 64830 || t === 64831 || t >= 65093 && t <= 65094;
}
function ks(t) {
  t.forEach(function(e) {
    if (delete e.location, qc(e) || Wc(e))
      for (var n in e.options)
        delete e.options[n].location, ks(e.options[n].value);
    else Vc(e) && Kc(e.style) || (Gc(e) || jc(e)) && Ps(e.style) ? delete e.style.location : zc(e) && ks(e.children);
  });
}
function Hv(t, e) {
  e === void 0 && (e = {}), e = pe({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e);
  var n = new Rv(t, e).parse();
  if (n.err) {
    var r = SyntaxError(Ze[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return e != null && e.captureLocation || ks(n.val), n.val;
}
var na;
(function(t) {
  t.MISSING_VALUE = "MISSING_VALUE", t.INVALID_VALUE = "INVALID_VALUE", t.MISSING_INTL_API = "MISSING_INTL_API";
})(na || (na = {}));
var zo = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(n, r, i) {
      var a = t.call(this, n) || this;
      return a.code = r, a.originalMessage = i, a;
    }
    return e.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, e;
  }(Error)
), tu = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(n, r, i, a) {
      return t.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), na.INVALID_VALUE, a) || this;
    }
    return e;
  }(zo)
), Nv = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(n, r, i) {
      return t.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), na.INVALID_VALUE, i) || this;
    }
    return e;
  }(zo)
), Uv = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(n, r) {
      return t.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), na.MISSING_VALUE, r) || this;
    }
    return e;
  }(zo)
), en;
(function(t) {
  t[t.literal = 0] = "literal", t[t.object = 1] = "object";
})(en || (en = {}));
function Fv(t) {
  return t.length < 2 ? t : t.reduce(function(e, n) {
    var r = e[e.length - 1];
    return !r || r.type !== en.literal || n.type !== en.literal ? e.push(n) : r.value += n.value, e;
  }, []);
}
function kv(t) {
  return typeof t == "function";
}
function go(t, e, n, r, i, a, o) {
  if (t.length === 1 && Xl(t[0]))
    return [
      {
        type: en.literal,
        value: t[0].value
      }
    ];
  for (var u = [], l = 0, c = t; l < c.length; l++) {
    var d = c[l];
    if (Xl(d)) {
      u.push({
        type: en.literal,
        value: d.value
      });
      continue;
    }
    if (sv(d)) {
      typeof a == "number" && u.push({
        type: en.literal,
        value: n.getNumberFormat(e).format(a)
      });
      continue;
    }
    var m = d.value;
    if (!(i && m in i))
      throw new Uv(m, o);
    var f = i[m];
    if (ov(d)) {
      (!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), u.push({
        type: typeof f == "string" ? en.literal : en.object,
        value: f
      });
      continue;
    }
    if (Gc(d)) {
      var g = typeof d.style == "string" ? r.date[d.style] : Ps(d.style) ? d.style.parsedOptions : void 0;
      u.push({
        type: en.literal,
        value: n.getDateTimeFormat(e, g).format(f)
      });
      continue;
    }
    if (jc(d)) {
      var g = typeof d.style == "string" ? r.time[d.style] : Ps(d.style) ? d.style.parsedOptions : r.time.medium;
      u.push({
        type: en.literal,
        value: n.getDateTimeFormat(e, g).format(f)
      });
      continue;
    }
    if (Vc(d)) {
      var g = typeof d.style == "string" ? r.number[d.style] : Kc(d.style) ? d.style.parsedOptions : void 0;
      g && g.scale && (f = f * (g.scale || 1)), u.push({
        type: en.literal,
        value: n.getNumberFormat(e, g).format(f)
      });
      continue;
    }
    if (zc(d)) {
      var h = d.children, p = d.value, b = i[p];
      if (!kv(b))
        throw new Nv(p, "function", o);
      var y = go(h, e, n, r, i, a), E = b(y.map(function(A) {
        return A.value;
      }));
      Array.isArray(E) || (E = [E]), u.push.apply(u, E.map(function(A) {
        return {
          type: typeof A == "string" ? en.literal : en.object,
          value: A
        };
      }));
    }
    if (qc(d)) {
      var I = d.options[f] || d.options.other;
      if (!I)
        throw new tu(d.value, f, Object.keys(d.options), o);
      u.push.apply(u, go(I.value, e, n, r, i));
      continue;
    }
    if (Wc(d)) {
      var I = d.options["=".concat(f)];
      if (!I) {
        if (!Intl.PluralRules)
          throw new zo(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, na.MISSING_INTL_API, o);
        var _ = n.getPluralRules(e, { type: d.pluralType }).select(f - (d.offset || 0));
        I = d.options[_] || d.options.other;
      }
      if (!I)
        throw new tu(d.value, f, Object.keys(d.options), o);
      u.push.apply(u, go(I.value, e, n, r, i, f - (d.offset || 0)));
      continue;
    }
  }
  return Fv(u);
}
function Bv(t, e) {
  return e ? pe(pe(pe({}, t || {}), e || {}), Object.keys(t).reduce(function(n, r) {
    return n[r] = pe(pe({}, t[r]), e[r] || {}), n;
  }, {})) : t;
}
function Vv(t, e) {
  return e ? Object.keys(t).reduce(function(n, r) {
    return n[r] = Bv(t[r], e[r]), n;
  }, pe({}, t)) : t;
}
function ss(t) {
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
function Gv(t) {
  return t === void 0 && (t = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: is(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.NumberFormat).bind.apply(e, er([void 0], n, !1)))();
    }, {
      cache: ss(t.number),
      strategy: as.variadic
    }),
    getDateTimeFormat: is(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.DateTimeFormat).bind.apply(e, er([void 0], n, !1)))();
    }, {
      cache: ss(t.dateTime),
      strategy: as.variadic
    }),
    getPluralRules: is(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.PluralRules).bind.apply(e, er([void 0], n, !1)))();
    }, {
      cache: ss(t.pluralRules),
      strategy: as.variadic
    })
  };
}
var td = (
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
        var d = c.reduce(function(m, f) {
          return !m.length || f.type !== en.literal || typeof m[m.length - 1] != "string" ? m.push(f.value) : m[m.length - 1] += f.value, m;
        }, []);
        return d.length <= 1 ? d[0] || "" : d;
      }, this.formatToParts = function(l) {
        return go(a.ast, a.locales, a.formatters, a.formats, l, void 0, a.message);
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
        var u = Zh(o, ["formatters"]);
        this.ast = t.__parse(e, pe(pe({}, u), { locale: this.resolvedLocale }));
      } else
        this.ast = e;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = Vv(t.formats, r), this.formatters = i && i.formatters || Gv(this.formatterCache);
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
    }, t.__parse = Hv, t.formats = {
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
function jv(t, e) {
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
const Pr = {}, qv = (t, e, n) => n && (e in Pr || (Pr[e] = {}), t in Pr[e] || (Pr[e][t] = n), n), nd = (t, e) => {
  if (e == null)
    return;
  if (e in Pr && t in Pr[e])
    return Pr[e][t];
  const n = Ya(e);
  for (let r = 0; r < n.length; r++) {
    const i = n[r], a = zv(i, t);
    if (a)
      return qv(t, e, a);
  }
};
let cl;
const Xa = Vt({});
function Wv(t) {
  return cl[t] || null;
}
function rd(t) {
  return t in cl;
}
function zv(t, e) {
  if (!rd(t))
    return null;
  const n = Wv(t);
  return jv(n, e);
}
function Kv(t) {
  if (t == null)
    return;
  const e = Ya(t);
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (rd(r))
      return r;
  }
}
function id(t, ...e) {
  delete Pr[t], Xa.update((n) => (n[t] = Yh.all([n[t] || {}, ...e]), n));
}
la(
  [Xa],
  ([t]) => Object.keys(t)
);
Xa.subscribe((t) => cl = t);
const po = {};
function Xv(t, e) {
  po[t].delete(e), po[t].size === 0 && delete po[t];
}
function ad(t) {
  return po[t];
}
function Yv(t) {
  return Ya(t).map((e) => {
    const n = ad(e);
    return [e, n ? [...n] : []];
  }).filter(([, e]) => e.length > 0);
}
function To(t) {
  return t == null ? !1 : Ya(t).some(
    (e) => {
      var n;
      return (n = ad(e)) == null ? void 0 : n.size;
    }
  );
}
function Zv(t, e) {
  return Promise.all(
    e.map((r) => (Xv(t, r), r().then((i) => i.default || i)))
  ).then((r) => id(t, ...r));
}
const _a = {};
function od(t) {
  if (!To(t))
    return t in _a ? _a[t] : Promise.resolve();
  const e = Yv(t);
  return _a[t] = Promise.all(
    e.map(
      ([n, r]) => Zv(n, r)
    )
  ).then(() => {
    if (To(t))
      return od(t);
    delete _a[t];
  }), _a[t];
}
var nu = Object.getOwnPropertySymbols, Qv = Object.prototype.hasOwnProperty, Jv = Object.prototype.propertyIsEnumerable, $v = (t, e) => {
  var n = {};
  for (var r in t)
    Qv.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && nu)
    for (var r of nu(t))
      e.indexOf(r) < 0 && Jv.call(t, r) && (n[r] = t[r]);
  return n;
};
const em = {
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
function tm({ locale: t, id: e }) {
  console.warn(
    `[svelte-i18n] The message "${e}" was not found in "${Ya(
      t
    ).join('", "')}".${To(jr()) ? `

Note: there are at least one loader still registered to this locale that wasn't executed.` : ""}`
  );
}
const nm = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: em,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, La = nm;
function ra() {
  return La;
}
function rm(t) {
  const e = t, { formats: n } = e, r = $v(e, ["formats"]);
  let i = t.fallbackLocale;
  if (t.initialLocale)
    try {
      td.resolveLocale(t.initialLocale) && (i = t.initialLocale);
    } catch {
      console.warn(
        `[svelte-i18n] The initial locale "${t.initialLocale}" is not a valid locale.`
      );
    }
  return r.warnOnMissingMessages && (delete r.warnOnMissingMessages, r.handleMissingMessage == null ? r.handleMissingMessage = tm : console.warn(
    '[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.'
  )), Object.assign(La, r, { initialLocale: i }), n && ("number" in n && Object.assign(La.formats.number, n.number), "date" in n && Object.assign(La.formats.date, n.date), "time" in n && Object.assign(La.formats.time, n.time)), yi.set(i);
}
const ls = Vt(!1);
var im = Object.defineProperty, am = Object.defineProperties, om = Object.getOwnPropertyDescriptors, ru = Object.getOwnPropertySymbols, sm = Object.prototype.hasOwnProperty, lm = Object.prototype.propertyIsEnumerable, iu = (t, e, n) => e in t ? im(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, um = (t, e) => {
  for (var n in e || (e = {}))
    sm.call(e, n) && iu(t, n, e[n]);
  if (ru)
    for (var n of ru(e))
      lm.call(e, n) && iu(t, n, e[n]);
  return t;
}, cm = (t, e) => am(t, om(e));
let Bs;
const xo = Vt(null);
function au(t) {
  return t.split("-").map((e, n, r) => r.slice(0, n + 1).join("-")).reverse();
}
function Ya(t, e = ra().fallbackLocale) {
  const n = au(t);
  return e ? [.../* @__PURE__ */ new Set([...n, ...au(e)])] : n;
}
function jr() {
  return Bs ?? void 0;
}
xo.subscribe((t) => {
  Bs = t ?? void 0, typeof window < "u" && t != null && document.documentElement.setAttribute("lang", t);
});
const dm = (t) => {
  if (t && Kv(t) && To(t)) {
    const { loadingDelay: e } = ra();
    let n;
    return typeof window < "u" && jr() != null && e ? n = window.setTimeout(
      () => ls.set(!0),
      e
    ) : ls.set(!0), od(t).then(() => {
      xo.set(t);
    }).finally(() => {
      clearTimeout(n), ls.set(!1);
    });
  }
  return xo.set(t);
}, yi = cm(um({}, xo), {
  set: dm
}), fm = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0], Ko = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (r) => {
    const i = JSON.stringify(r);
    return i in e ? e[i] : e[i] = t(r);
  };
};
var hm = Object.defineProperty, wo = Object.getOwnPropertySymbols, sd = Object.prototype.hasOwnProperty, ld = Object.prototype.propertyIsEnumerable, ou = (t, e, n) => e in t ? hm(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, dl = (t, e) => {
  for (var n in e || (e = {}))
    sd.call(e, n) && ou(t, n, e[n]);
  if (wo)
    for (var n of wo(e))
      ld.call(e, n) && ou(t, n, e[n]);
  return t;
}, ua = (t, e) => {
  var n = {};
  for (var r in t)
    sd.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && wo)
    for (var r of wo(t))
      e.indexOf(r) < 0 && ld.call(t, r) && (n[r] = t[r]);
  return n;
};
const Ua = (t, e) => {
  const { formats: n } = ra();
  if (t in n && e in n[t])
    return n[t][e];
  throw new Error(`[svelte-i18n] Unknown "${e}" ${t} format.`);
}, vm = Ko(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = ua(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return r && (i = Ua("number", r)), new Intl.NumberFormat(n, i);
  }
), mm = Ko(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = ua(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return r ? i = Ua("date", r) : Object.keys(i).length === 0 && (i = Ua("date", "short")), new Intl.DateTimeFormat(n, i);
  }
), gm = Ko(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = ua(e, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return r ? i = Ua("time", r) : Object.keys(i).length === 0 && (i = Ua("time", "short")), new Intl.DateTimeFormat(n, i);
  }
), pm = (t = {}) => {
  var e = t, {
    locale: n = jr()
  } = e, r = ua(e, [
    "locale"
  ]);
  return vm(dl({ locale: n }, r));
}, bm = (t = {}) => {
  var e = t, {
    locale: n = jr()
  } = e, r = ua(e, [
    "locale"
  ]);
  return mm(dl({ locale: n }, r));
}, _m = (t = {}) => {
  var e = t, {
    locale: n = jr()
  } = e, r = ua(e, [
    "locale"
  ]);
  return gm(dl({ locale: n }, r));
}, ym = Ko(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (t, e = jr()) => new td(t, e, ra().formats, {
    ignoreTag: ra().ignoreTag
  })
), Im = (t, e = {}) => {
  var n, r, i, a;
  let o = e;
  typeof t == "object" && (o = t, t = o.id);
  const {
    values: u,
    locale: l = jr(),
    default: c
  } = o;
  if (l == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let d = nd(t, l);
  if (!d)
    d = (a = (i = (r = (n = ra()).handleMissingMessage) == null ? void 0 : r.call(n, { locale: l, id: t, defaultValue: c })) != null ? i : c) != null ? a : t;
  else if (typeof d != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${t}" must be of type "string", found: "${typeof d}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), d;
  if (!u)
    return d;
  let m = d;
  try {
    m = ym(d, l).format(u);
  } catch (f) {
    f instanceof Error && console.warn(
      `[svelte-i18n] Message "${t}" has syntax error:`,
      f.message
    );
  }
  return m;
}, Sm = (t, e) => _m(e).format(t), Em = (t, e) => bm(e).format(t), Am = (t, e) => pm(e).format(t), Cm = (t, e = jr()) => nd(t, e), Tm = la([yi, Xa], () => Im);
la([yi], () => Sm);
la([yi], () => Em);
la([yi], () => Am);
la([yi, Xa], () => Cm);
function xm(t, e) {
  Object.entries(t).forEach(([a, o]) => {
    id(a, o);
  });
  const n = localStorage.getItem("language"), r = "en", i = n ?? fm();
  console.log("Initial: Setting the language to", i), rm({
    fallbackLocale: r,
    initialLocale: i
  }), window.addEventListener("oscd-language-changed", (a) => {
    const o = a;
    if (!o.detail.language) {
      console.error("No translations for language");
      return;
    }
    console.log("Updating the language to", o.detail.language), yi.set(o.detail.language);
  });
}
const wm = "Ort", Lm = "Suche", Om = "UUID", Rm = "File Name", Dm = "Autor", Mm = "Typ", Pm = "Version", Hm = "Datum", Nm = "Fertig", Um = "Filtertypen", Fm = "Filter Hinzufügen", km = {
  location: wm,
  search: Lm,
  uuid: Om,
  filename: Rm,
  author: Dm,
  type: Mm,
  version: Pm,
  date: Hm,
  "versionHistory.title": "Versionsverlauf der Datei {filename}",
  "versionTable.heading": "Versionstabelle",
  done: Nm,
  filter_types: Um,
  add_filter: Fm
}, Bm = "Location", Vm = "Search", Gm = "UUID", jm = "Filename", qm = "Author", Wm = "Type", zm = "Version", Km = "Date", Xm = "Done", Ym = "Filter Types", Zm = "Add Filter", Qm = {
  location: Bm,
  search: Vm,
  uuid: Gm,
  filename: jm,
  author: qm,
  type: Wm,
  version: zm,
  date: Km,
  "versionHistory.title": "Version History of file {filename}",
  "versionTable.heading": "Version Table",
  done: Xm,
  filter_types: Ym,
  add_filter: Zm
};
function Me(t) {
  return Object.entries(t).filter(([e, n]) => e !== "" && n).map(([e]) => e).join(" ");
}
function Ke(t, e, n, r = { bubbles: !0 }) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  if (!t)
    throw new Error("Tried to dispatch event without element.");
  const i = new CustomEvent(e, Object.assign(Object.assign({}, r), { detail: n }));
  return t == null || t.dispatchEvent(i), i;
}
function Vn(t, e) {
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
class Ii {
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
    n in a || (a[n] = /* @__PURE__ */ new Map()), a[n].set(r, eh(e, n, r, i));
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
function Q(t, e) {
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
var ro;
function Jm(t, e) {
  e === void 0 && (e = !1);
  var n = t.CSS, r = ro;
  if (typeof ro == "boolean" && !e)
    return ro;
  var i = n && typeof n.supports == "function";
  if (!i)
    return !1;
  var a = n.supports("--css-vars", "yes"), o = n.supports("(--css-vars: yes)") && n.supports("color", "#00000000");
  return r = a || o, e || (ro = r), r;
}
function $m(t, e, n) {
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
function eg(t) {
  return t === void 0 && (t = window), tg(t) ? { passive: !0 } : !1;
}
function tg(t) {
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
const ud = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: eg
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
function ng(t, e) {
  if (t.closest)
    return t.closest(e);
  for (var n = t; n; ) {
    if (cd(n, e))
      return n;
    n = n.parentElement;
  }
  return null;
}
function cd(t, e) {
  var n = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return n.call(t, e);
}
function rg(t) {
  var e = t;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var n = e.cloneNode(!0);
  n.style.setProperty("position", "absolute"), n.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(n);
  var r = n.scrollWidth;
  return document.documentElement.removeChild(n), r;
}
const ca = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: ng,
  estimateScrollWidth: rg,
  matches: cd
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
var ig = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, ag = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, su = {
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
var lu = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], uu = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], io = [], og = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(n) {
      var r = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
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
        return ig;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return ag;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return su;
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
          for (var a = Bt(lu), o = a.next(); !o.done; o = a.next()) {
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
          for (var a = Bt(uu), o = a.next(); !o.done; o = a.next()) {
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
        for (var i = Bt(lu), a = i.next(); !a.done; a = i.next()) {
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
        for (var i = Bt(uu), a = i.next(); !a.done; a = i.next()) {
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
            var u = n !== void 0 && io.length > 0 && io.some(function(l) {
              return r.adapter.containsEventTarget(l);
            });
            if (u) {
              this.resetActivationState();
              return;
            }
            n !== void 0 && (io.push(n.target), this.registerDeactivationHandlers(n)), i.wasElementMadeActive = this.checkElementMadeActive(n), i.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              io = [], !i.wasElementMadeActive && n !== void 0 && (n.key === " " || n.keyCode === 32) && (i.wasElementMadeActive = r.checkElementMadeActive(n), i.wasElementMadeActive && r.animateActivation()), i.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(n) {
      return n !== void 0 && n.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var n = this, r = e.strings, i = r.VAR_FG_TRANSLATE_START, a = r.VAR_FG_TRANSLATE_END, o = e.cssClasses, u = o.FG_DEACTIVATION, l = o.FG_ACTIVATION, c = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var d = "", m = "";
      if (!this.adapter.isUnbounded()) {
        var f = this.getFgTranslationCoordinates(), g = f.startPoint, h = f.endPoint;
        d = g.x + "px, " + g.y + "px", m = h.x + "px, " + h.y + "px";
      }
      this.adapter.updateCssVariable(i, d), this.adapter.updateCssVariable(a, m), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(u), this.adapter.computeBoundingRect(), this.adapter.addClass(l), this.activationTimer = setTimeout(function() {
        n.activationTimerCallback();
      }, c);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var n = this.activationState, r = n.activationEvent, i = n.wasActivatedByPointer, a;
      i ? a = $m(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
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
      }, su.FG_DEACTIVATION_MS));
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
        var i = pe({}, r);
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
var us = "mdc-dom-focus-sentinel", sg = (
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
      [].slice.call(this.root.querySelectorAll("." + us)).forEach(function(e) {
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
        var i = r.getAttribute("aria-disabled") === "true" || r.getAttribute("disabled") != null || r.getAttribute("hidden") != null || r.getAttribute("aria-hidden") === "true", a = r.tabIndex >= 0 && r.getBoundingClientRect().width > 0 && !r.classList.contains(us) && !i, o = !1;
        if (a) {
          var u = getComputedStyle(r);
          o = u.display === "none" || u.visibility === "hidden";
        }
        return a && !o;
      });
    }, t.prototype.createSentinel = function() {
      var e = document.createElement("div");
      return e.setAttribute("tabindex", "0"), e.setAttribute("aria-hidden", "true"), e.classList.add(us), e;
    }, t;
  }()
);
const lg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FocusTrap: sg
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
var Ge = {
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
}, sn = /* @__PURE__ */ new Set();
sn.add(Ge.BACKSPACE);
sn.add(Ge.ENTER);
sn.add(Ge.SPACEBAR);
sn.add(Ge.PAGE_UP);
sn.add(Ge.PAGE_DOWN);
sn.add(Ge.END);
sn.add(Ge.HOME);
sn.add(Ge.ARROW_LEFT);
sn.add(Ge.ARROW_UP);
sn.add(Ge.ARROW_RIGHT);
sn.add(Ge.ARROW_DOWN);
sn.add(Ge.DELETE);
sn.add(Ge.ESCAPE);
sn.add(Ge.TAB);
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
}, ln = /* @__PURE__ */ new Map();
ln.set(mn.BACKSPACE, Ge.BACKSPACE);
ln.set(mn.ENTER, Ge.ENTER);
ln.set(mn.SPACEBAR, Ge.SPACEBAR);
ln.set(mn.PAGE_UP, Ge.PAGE_UP);
ln.set(mn.PAGE_DOWN, Ge.PAGE_DOWN);
ln.set(mn.END, Ge.END);
ln.set(mn.HOME, Ge.HOME);
ln.set(mn.ARROW_LEFT, Ge.ARROW_LEFT);
ln.set(mn.ARROW_UP, Ge.ARROW_UP);
ln.set(mn.ARROW_RIGHT, Ge.ARROW_RIGHT);
ln.set(mn.ARROW_DOWN, Ge.ARROW_DOWN);
ln.set(mn.DELETE, Ge.DELETE);
ln.set(mn.ESCAPE, Ge.ESCAPE);
ln.set(mn.TAB, Ge.TAB);
var qr = /* @__PURE__ */ new Set();
qr.add(Ge.PAGE_UP);
qr.add(Ge.PAGE_DOWN);
qr.add(Ge.END);
qr.add(Ge.HOME);
qr.add(Ge.ARROW_LEFT);
qr.add(Ge.ARROW_UP);
qr.add(Ge.ARROW_RIGHT);
qr.add(Ge.ARROW_DOWN);
function Ot(t) {
  var e = t.key;
  if (sn.has(e))
    return e;
  var n = ln.get(t.keyCode);
  return n || Ge.UNKNOWN;
}
const { applyPassive: cu } = ud, { matches: ug } = ca;
function Qt(t, { ripple: e = !0, surface: n = !1, unbounded: r = !1, disabled: i = !1, color: a, active: o, rippleElement: u, eventTarget: l, activeTarget: c, addClass: d = (h) => t.classList.add(h), removeClass: m = (h) => t.classList.remove(h), addStyle: f = (h, p) => t.style.setProperty(h, p), initPromise: g = Promise.resolve() } = {}) {
  let h, p = new Ii(), b = _e("SMUI:addLayoutListener"), y, E = o, I = l, _ = c;
  function A() {
    n ? (d("mdc-ripple-surface"), a === "primary" ? (d("smui-ripple-surface--primary"), m("smui-ripple-surface--secondary")) : a === "secondary" ? (m("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : (m("smui-ripple-surface--primary"), m("smui-ripple-surface--secondary"))) : (m("mdc-ripple-surface"), m("smui-ripple-surface--primary"), m("smui-ripple-surface--secondary")), h && E !== o && (E = o, o ? h.activate() : o === !1 && h.deactivate()), e && !h ? (h = new og({
      addClass: d,
      browserSupportsCssVars: () => Jm(window),
      computeBoundingRect: () => (u || t).getBoundingClientRect(),
      containsEventTarget: (L) => t.contains(L),
      deregisterDocumentInteractionHandler: (L, T) => p.off(document.documentElement, L, T),
      deregisterInteractionHandler: (L, T) => p.off(l || t, L, T),
      deregisterResizeHandler: (L) => window.removeEventListener("resize", L),
      getWindowPageOffset: () => {
        var L, T;
        return {
          x: (L = window.pageXOffset) !== null && L !== void 0 ? L : window.scrollX,
          y: (T = window.pageYOffset) !== null && T !== void 0 ? T : window.scrollY
        };
      },
      isSurfaceActive: () => o ?? ug(c || t, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!r,
      registerDocumentInteractionHandler: (L, T) => {
        const w = cu();
        p.on(document.documentElement, L, T, typeof w == "boolean" ? { capture: w } : w);
      },
      registerInteractionHandler: (L, T) => {
        const w = cu();
        p.on(l || t, L, T, typeof w == "boolean" ? { capture: w } : w);
      },
      registerResizeHandler: (L) => p.on(window, "resize", L),
      removeClass: m,
      updateCssVariable: f
    }), g.then(() => {
      h && (h.init(), h.setUnbounded(r));
    })) : h && !e && g.then(() => {
      h && (h.destroy(), h = void 0, p.clear());
    }), h && (I !== l || _ !== c) && (I = l, _ = c, h.destroy(), requestAnimationFrame(() => {
      h && (h.init(), h.setUnbounded(r));
    })), !e && r && d("mdc-ripple-upgraded--unbounded");
  }
  A(), b && (y = b(S));
  function S() {
    h && h.layout();
  }
  return {
    update(L) {
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
        removeClass: m,
        addStyle: f,
        initPromise: g
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (T) => t.classList.add(T), removeClass: (T) => t.classList.remove(T), addStyle: (T, w) => t.style.setProperty(T, w), initPromise: Promise.resolve() }, L)), A();
    },
    destroy() {
      h && (h.destroy(), h = void 0, p.clear(), m("mdc-ripple-surface"), m("smui-ripple-surface--primary"), m("smui-ripple-surface--secondary")), y && y();
    }
  };
}
function dd(t, e) {
  xe(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "component", 3, Wr), a = v(e, "tag", 3, "span"), o = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "component",
    "tag",
    "children"
  ]), u;
  const l = _e("SMUI:label:context"), c = _e("SMUI:label:tabindex");
  function d() {
    return u.getElement();
  }
  var m = { getElement: d }, f = re(), g = Y(f);
  {
    let h = /* @__PURE__ */ fe(() => Me({
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
    rr(g, i, (p, b) => {
      Ce(
        b(p, Je(
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
            children: (y, E) => {
              var I = re(), _ = Y(I);
              Ee(_, () => e.children ?? ve), x(y, I);
            },
            $$slots: { default: !0 }
          }
        )),
        (y) => u = y,
        () => u
      );
    });
  }
  return x(t, f), we(m);
}
function Vs(t, e) {
  xe(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "on", 3, !1), a = v(e, "component", 3, Wr), o = v(e, "tag", 3, "i"), u = /* @__PURE__ */ je(e, [
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
  const c = /* @__PURE__ */ fe(() => o() === "svg" || a() === fg), d = _e("SMUI:icon:context");
  function m() {
    return l.getElement();
  }
  var f = { getElement: m }, g = re(), h = Y(g);
  {
    let p = /* @__PURE__ */ fe(() => Me({
      "mdc-button__icon": d === "button",
      "mdc-fab__icon": d === "fab",
      "mdc-icon-button__icon": d === "icon-button",
      "mdc-icon-button__icon--on": d === "icon-button" && i(),
      "mdc-tab__icon": d === "tab",
      "mdc-banner__icon": d === "banner",
      "mdc-segmented-button__icon": d === "segmented-button",
      [r()]: !0
    }));
    rr(h, a, (b, y) => {
      Ce(
        y(b, Je(
          {
            get tag() {
              return o();
            },
            get use() {
              return n();
            },
            get class() {
              return s(p);
            },
            "aria-hidden": "true"
          },
          () => s(c) ? { focusable: "false", tabindex: "-1" } : {},
          () => u,
          {
            children: (E, I) => {
              var _ = re(), A = Y(_);
              Ee(A, () => e.children ?? ve), x(E, _);
            },
            $$slots: { default: !0 }
          }
        )),
        (E) => l = E,
        () => l
      );
    });
  }
  return x(t, g), we(f);
}
var cg = /* @__PURE__ */ xt("<svg><!></svg>");
function Wr(t, e) {
  xe(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "tag", 3, "div"), i = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
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
  var l = { getElement: u }, c = re(), d = Y(c);
  {
    var m = (g) => {
      var h = cg();
      Ue(h, () => ({ ...i }));
      var p = de(h);
      Ee(p, () => e.children ?? ve), Ce(h, (b) => o = b, () => o), Pe(h, (b, y) => Q == null ? void 0 : Q(b, y), n), x(g, h);
    }, f = (g) => {
      var h = re(), p = Y(h);
      {
        var b = (E) => {
          var I = re(), _ = Y(I);
          Fl(_, r, !1, (A, S) => {
            Ce(A, (L) => o = L, () => o), Pe(A, (L, T) => Q == null ? void 0 : Q(L, T), n), Ue(A, () => ({ ...i }));
          }), x(E, I);
        }, y = (E) => {
          var I = re(), _ = Y(I);
          Fl(_, r, !1, (A, S) => {
            Ce(A, (w) => o = w, () => o), Pe(A, (w, k) => Q == null ? void 0 : Q(w, k), n), Ue(A, () => ({ ...i }));
            var L = re(), T = Y(L);
            Ee(T, () => e.children ?? ve), x(S, L);
          }), x(E, I);
        };
        se(
          p,
          (E) => {
            s(a) ? E(b) : E(y, !1);
          },
          !0
        );
      }
      x(g, h);
    };
    se(d, (g) => {
      r() === "svg" ? g(m) : g(f, !1);
    });
  }
  return x(t, c), we(l);
}
var dg = /* @__PURE__ */ xt("<svg><!></svg>");
function fg(t, e) {
  xe(e, !0), console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let n = v(e, "use", 19, () => []), r = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i;
  function a() {
    return i;
  }
  var o = { getElement: a }, u = dg();
  Ue(u, () => ({ ...r }));
  var l = de(u);
  return Ee(l, () => e.children ?? ve), Ce(u, (c) => i = c, () => i), Pe(u, (c, d) => Q == null ? void 0 : Q(c, d), n), x(t, u), we(o);
}
function ao(t, e) {
  xe(e, !0);
  const [n, r] = ir(), i = Vt(e.value);
  ue(e.key, i), Le(() => {
    Fn(i, e.value);
  }), En(() => {
    i.set(void 0);
  });
  var a = re(), o = Y(a);
  Ee(o, () => e.children ?? ve), x(t, a), we(), r();
}
var hg = /* @__PURE__ */ ce('<div class="mdc-button__touch"></div>'), vg = /* @__PURE__ */ ce('<div class="mdc-button__ripple"></div> <!><!>', 1);
function ia(t, e) {
  xe(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "style", 3, ""), a = v(e, "ripple", 3, !0), o = v(e, "color", 3, "primary"), u = v(e, "variant", 3, "text"), l = v(e, "touch", 3, !1), c = v(e, "action", 3, "close"), d = v(e, "defaultAction", 3, !1), m = v(e, "secondary", 3, !1), f = v(e, "component", 3, Wr), g = v(e, "tag", 19, () => e.href == null ? "button" : "a"), h = /* @__PURE__ */ je(e, [
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
  ]), p, b = ye({}), y = ye({}), E = _e("SMUI:button:context");
  const I = /* @__PURE__ */ fe(() => E === "dialog:action" && c() != null ? { "data-mdc-dialog-action": c() } : { action: c() }), _ = /* @__PURE__ */ fe(() => E === "dialog:action" && d() ? { "data-mdc-dialog-button-default": "" } : {}), A = /* @__PURE__ */ fe(() => E === "banner" ? {} : { secondary: m() });
  let S = e.disabled;
  Le(() => {
    if (S !== e.disabled) {
      if (p) {
        const C = J();
        "blur" in C && C.blur();
      }
      S = h.disabled;
    }
  }), ue("SMUI:label:context", "button"), ue("SMUI:icon:context", "button");
  function L(C) {
    b[C] || (b[C] = !0);
  }
  function T(C) {
    (!(C in b) || b[C]) && (b[C] = !1);
  }
  function w(C, F) {
    y[C] != F && (F === "" || F == null ? delete y[C] : y[C] = F);
  }
  function k() {
    E === "banner" && Ke(J(), m() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function J() {
    return p.getElement();
  }
  var G = { getElement: J }, z = re(), R = Y(z);
  {
    let C = /* @__PURE__ */ fe(() => [
      [
        Qt,
        {
          ripple: a(),
          unbounded: !1,
          color: o(),
          disabled: !!e.disabled,
          addClass: L,
          removeClass: T,
          addStyle: w
        }
      ],
      ...n()
    ]), F = /* @__PURE__ */ fe(() => Me({
      "mdc-button": !0,
      "mdc-button--raised": u() === "raised",
      "mdc-button--unelevated": u() === "unelevated",
      "mdc-button--outlined": u() === "outlined",
      "smui-button--color-secondary": o() === "secondary",
      "mdc-button--touch": l(),
      "mdc-card__action": E === "card:action",
      "mdc-card__action--button": E === "card:action",
      "mdc-dialog__button": E === "dialog:action",
      "mdc-top-app-bar__navigation-icon": E === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": E === "top-app-bar:action",
      "mdc-snackbar__action": E === "snackbar:actions",
      "mdc-banner__secondary-action": E === "banner" && m(),
      "mdc-banner__primary-action": E === "banner" && !m(),
      "mdc-tooltip__action": E === "tooltip:rich-actions",
      ...b,
      [r()]: !0
    })), N = /* @__PURE__ */ fe(() => Object.entries(y).map(([K, ne]) => `${K}: ${ne};`).concat([i()]).join(" "));
    rr(R, f, (K, ne) => {
      Ce(
        ne(K, Je(
          {
            get tag() {
              return g();
            },
            get use() {
              return s(C);
            },
            get class() {
              return s(F);
            },
            get style() {
              return s(N);
            }
          },
          () => s(I),
          () => s(_),
          () => s(A),
          {
            get href() {
              return e.href;
            }
          },
          () => h,
          {
            onclick: (U) => {
              var D;
              k(), (D = e.onclick) == null || D.call(e, U);
            },
            children: (U, D) => {
              var W = vg(), Ie = be(Y(W), 2);
              Ee(Ie, () => e.children ?? ve);
              var B = be(Ie);
              {
                var P = (M) => {
                  var O = hg();
                  x(M, O);
                };
                se(B, (M) => {
                  l() && M(P);
                });
              }
              x(U, W);
            },
            $$slots: { default: !0 }
          }
        )),
        (U) => p = U,
        () => p
      );
    });
  }
  return x(t, z), we(G);
}
function fd(t, e) {
  xe(e, !0);
  let n = v(e, "callback", 3, () => {
  }), r = v(e, "disabled", 3, !1), i = v(e, "variant", 3, "default"), a = v(e, "isAbortAction", 3, !1), o = v(e, "backgroundColor", 3, void 0);
  {
    let u = /* @__PURE__ */ fe(() => a() ? "background-color: #ff3e00;" : "background-color: " + o());
    ia(t, {
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
        var d = re(), m = Y(d);
        Ee(m, () => e.children ?? ve), x(l, d);
      },
      $$slots: { default: !0 }
    });
  }
  we();
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
var oo = {
  ICON_BUTTON_ON: "mdc-icon-button--on",
  ROOT: "mdc-icon-button"
}, lr = {
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
var mg = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(n) {
      var r = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return r.hasToggledAriaLabel = !1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return oo;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return lr;
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
      var n = this.adapter.getAttr(lr.DATA_ARIA_LABEL_ON), r = this.adapter.getAttr(lr.DATA_ARIA_LABEL_OFF);
      if (n && r) {
        if (this.adapter.getAttr(lr.ARIA_PRESSED) !== null)
          throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");
        this.hasToggledAriaLabel = !0;
      } else
        this.adapter.setAttr(lr.ARIA_PRESSED, String(this.isOn()));
    }, e.prototype.handleClick = function() {
      this.toggle(), this.adapter.notifyChange({ isOn: this.isOn() });
    }, e.prototype.isOn = function() {
      return this.adapter.hasClass(oo.ICON_BUTTON_ON);
    }, e.prototype.toggle = function(n) {
      if (n === void 0 && (n = !this.isOn()), n ? this.adapter.addClass(oo.ICON_BUTTON_ON) : this.adapter.removeClass(oo.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var r = n ? this.adapter.getAttr(lr.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(lr.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr(lr.ARIA_LABEL, r || "");
      } else
        this.adapter.setAttr(lr.ARIA_PRESSED, "" + n);
    }, e;
  }(wt)
), gg = /* @__PURE__ */ ce('<div class="mdc-icon-button__touch"></div>'), pg = /* @__PURE__ */ ce('<div class="mdc-icon-button__ripple"></div> <!><!>', 1);
function bg(t, e) {
  xe(e, !0);
  let n = () => {
  };
  function r(D) {
    return D === n;
  }
  let i = v(e, "use", 19, () => []), a = v(e, "class", 3, ""), o = v(e, "style", 3, ""), u = v(e, "ripple", 3, !0), l = v(e, "toggle", 3, !1), c = v(e, "pressed", 15, n), d = v(e, "touch", 3, !1), m = v(e, "displayFlex", 3, !0), f = v(e, "size", 3, "normal"), g = v(e, "component", 3, Wr), h = v(e, "tag", 19, () => e.href == null ? "button" : "a"), p = /* @__PURE__ */ je(e, [
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
  ]), b, y, E = /* @__PURE__ */ he(ye({})), I = ye({}), _ = /* @__PURE__ */ he(ye({})), A = _e("SMUI:icon-button:context"), S = _e("SMUI:icon-button:aria-describedby");
  const L = /* @__PURE__ */ fe(() => {
    if (A === "data-table:pagination")
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
    else return A === "dialog:header" || A === "dialog:sheet" ? { "data-mdc-dialog-action": e.action } : { action: e.action };
  });
  let T = !!e.disabled;
  Le(() => {
    if (T != !!e.disabled) {
      if (b) {
        const D = N();
        "blur" in D && D.blur();
      }
      T = !!e.disabled;
    }
  }), ue("SMUI:icon:context", "icon-button");
  let w = null;
  Le(() => {
    b && N() && l() !== w && (l() && !y ? (y = new mg({
      addClass: J,
      hasClass: k,
      notifyChange: (D) => {
        F(D), Ke(N(), "SMUIIconButtonToggleChange", D);
      },
      removeClass: G,
      getAttr: R,
      setAttr: C
    }), y.init()) : !l() && y && (y.destroy(), y = void 0, X(E, {}, !0), X(_, {}, !0)), w = l());
  }), Le(() => {
    y && !r(c()) && y.isOn() !== c() && y.toggle(c());
  }), En(() => {
    y && y.destroy();
  });
  function k(D) {
    return D in s(E) ? s(E)[D] : N().classList.contains(D);
  }
  function J(D) {
    s(E)[D] || (s(E)[D] = !0);
  }
  function G(D) {
    (!(D in s(E)) || s(E)[D]) && (s(E)[D] = !1);
  }
  function z(D, W) {
    I[D] != W && (W === "" || W == null ? delete I[D] : I[D] = W);
  }
  function R(D) {
    return D in s(_) ? s(_)[D] ?? null : N().getAttribute(D);
  }
  function C(D, W) {
    s(_)[D] !== W && (s(_)[D] = W);
  }
  function F(D) {
    c(D.isOn);
  }
  function N() {
    return b.getElement();
  }
  var K = { getElement: N }, ne = re(), U = Y(ne);
  {
    let D = /* @__PURE__ */ fe(() => [
      [
        Qt,
        {
          ripple: u(),
          unbounded: !0,
          color: e.color,
          disabled: !!e.disabled,
          addClass: J,
          removeClass: G,
          addStyle: z
        }
      ],
      ...i()
    ]), W = /* @__PURE__ */ fe(() => Me({
      "mdc-icon-button": !0,
      "mdc-icon-button--on": !r(c()) && c(),
      "mdc-icon-button--touch": d(),
      "mdc-icon-button--display-flex": m(),
      "smui-icon-button--size-button": f() === "button",
      "smui-icon-button--size-mini": f() === "mini",
      "mdc-icon-button--reduced-size": f() === "mini" || f() === "button",
      "mdc-card__action": A === "card:action",
      "mdc-card__action--icon": A === "card:action",
      "mdc-top-app-bar__navigation-icon": A === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": A === "top-app-bar:action",
      "mdc-snackbar__dismiss": A === "snackbar:actions",
      "mdc-data-table__pagination-button": A === "data-table:pagination",
      "mdc-data-table__sort-icon-button": A === "data-table:sortable-header-cell",
      "mdc-dialog__close": (A === "dialog:header" || A === "dialog:sheet") && e.action === "close",
      ...s(E),
      [a()]: !0
    })), Ie = /* @__PURE__ */ fe(() => Object.entries(I).map(([M, O]) => `${M}: ${O};`).concat([o()]).join(" ")), B = /* @__PURE__ */ fe(() => r(c()) ? null : c() ? "true" : "false"), P = /* @__PURE__ */ fe(() => c() ? e.ariaLabelOn : e.ariaLabelOff);
    rr(U, g, (M, O) => {
      Ce(
        O(M, Je(
          {
            get tag() {
              return h();
            },
            get use() {
              return s(D);
            },
            get class() {
              return s(W);
            },
            get style() {
              return s(Ie);
            },
            get "aria-pressed"() {
              return s(B);
            },
            get "aria-label"() {
              return s(P);
            },
            get "data-aria-label-on"() {
              return e.ariaLabelOn;
            },
            get "data-aria-label-off"() {
              return e.ariaLabelOff;
            },
            get "aria-describedby"() {
              return S;
            },
            get href() {
              return e.href;
            }
          },
          () => s(L),
          () => s(_),
          () => p,
          {
            onclick: (ee) => {
              var Z;
              y && y.handleClick(), A === "top-app-bar:navigation" && Ke(N(), "SMUITopAppBarIconButtonNav"), (Z = e.onclick) == null || Z.call(e, ee);
            },
            children: (ee, Z) => {
              var ie = pg(), Ae = be(Y(ie), 2);
              Ee(Ae, () => e.children ?? ve);
              var te = be(Ae);
              {
                var oe = (Te) => {
                  var Re = gg();
                  x(Te, Re);
                };
                se(te, (Te) => {
                  d() && Te(oe);
                });
              }
              x(ee, ie);
            },
            $$slots: { default: !0 }
          }
        )),
        (ee) => b = ee,
        () => b
      );
    });
  }
  return x(t, ne), we(K);
}
function _g(t, e) {
  let n = v(e, "callback", 3, () => {
  }), r = v(e, "icon", 3, ""), i = v(e, "disabled", 3, !1);
  bg(t, {
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
      Vs(a, {
        class: "material-icons",
        children: (u, l) => {
          var c = vt();
          Oe(() => $e(c, r())), x(u, c);
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
var yg = {
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
var Ig = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(n) {
      var r = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return r.shakeAnimationEndHandler = function() {
        r.handleShakeAnimationEnd();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return yg;
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
var Jr = {
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
var Sg = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(n) {
      var r = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return r.transitionEndHandler = function(i) {
        r.handleTransitionEnd(i);
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Jr;
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
      this.adapter.removeClass(Jr.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(Jr.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(n) {
      this.adapter.setStyle("transform-origin", n + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(Jr.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(n) {
      var r = this.adapter.hasClass(Jr.LINE_RIPPLE_DEACTIVATING);
      n.propertyName === "opacity" && r && (this.adapter.removeClass(Jr.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(Jr.LINE_RIPPLE_DEACTIVATING));
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
var Eg = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, du = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, Ag = {
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
var Cg = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(n) {
      return t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Eg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ag;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return du;
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
      n > 0 && (n += du.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(n), this.adapter.addClass(r);
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
var cs = {
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
}, Tg = {
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
}, fu = {
  LABEL_SCALE: 0.75
}, xg = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], wg = [
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
var hu = ["mousedown", "touchstart"], vu = ["click", "keydown"], Lg = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(n, r) {
      r === void 0 && (r = {});
      var i = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
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
        return Tg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return cs;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return fu;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var n = this.getNativeInput().type;
        return wg.indexOf(n) >= 0;
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
        for (var o = Bt(hu), u = o.next(); !u.done; u = o.next()) {
          var l = u.value;
          this.adapter.registerInputInteractionHandler(l, this.setPointerXOffset);
        }
      } catch (m) {
        n = { error: m };
      } finally {
        try {
          u && !u.done && (r = o.return) && r.call(o);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var c = Bt(vu), d = c.next(); !d.done; d = c.next()) {
          var l = d.value;
          this.adapter.registerTextFieldInteractionHandler(l, this.textFieldInteractionHandler);
        }
      } catch (m) {
        i = { error: m };
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
        for (var o = Bt(hu), u = o.next(); !u.done; u = o.next()) {
          var l = u.value;
          this.adapter.deregisterInputInteractionHandler(l, this.setPointerXOffset);
        }
      } catch (m) {
        n = { error: m };
      } finally {
        try {
          u && !u.done && (r = o.return) && r.call(o);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var c = Bt(vu), d = c.next(); !d.done; d = c.next()) {
          var l = d.value;
          this.adapter.deregisterTextFieldInteractionHandler(l, this.textFieldInteractionHandler);
        }
      } catch (m) {
        i = { error: m };
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
        return xg.indexOf(i) > -1 ? (r.styleValidity(!0), r.adapter.setLabelRequired(r.getNativeInput().required), !0) : !1;
      }), n.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(n) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (n) {
          var r = this.adapter.getLabelWidth() * fu.LABEL_SCALE;
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
        a && o ? this.adapter.setInputAttr(cs.ARIA_DESCRIBEDBY, o) : this.adapter.removeInputAttr(cs.ARIA_DESCRIBEDBY);
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
var mu = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, Og = {
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
var gu = ["click", "keydown"], Rg = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(n) {
      var r = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return r.savedTabIndex = null, r.interactionHandler = function(i) {
        r.handleInteraction(i);
      }, r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return mu;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Og;
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
        for (var i = Bt(gu), a = i.next(); !a.done; a = i.next()) {
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
        for (var i = Bt(gu), a = i.next(); !a.done; a = i.next()) {
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
      this.savedTabIndex && (n ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", mu.ICON_ROLE)));
    }, e.prototype.setAriaLabel = function(n) {
      this.adapter.setAttr("aria-label", n);
    }, e.prototype.setContent = function(n) {
      this.adapter.setContent(n);
    }, e.prototype.handleInteraction = function(n) {
      var r = n.key === "Enter" || n.keyCode === 13;
      (n.type === "click" || r) && (n.preventDefault(), this.adapter.notifyIconAction());
    }, e;
  }(wt)
), Dg = /* @__PURE__ */ ce("<span><!></span>"), Mg = /* @__PURE__ */ ce("<label><!></label>");
function Lo(t, e) {
  xe(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "style", 3, ""), a = v(e, "floatAbove", 15, !1), o = v(e, "required", 15, !1), u = v(e, "wrapped", 3, !1), l = /* @__PURE__ */ je(e, [
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
  ]), c, d = /* @__PURE__ */ he(void 0), m = new Ii(), f = ye({}), g = ye({}), h = _e("SMUI:generic:input:props") ?? {}, p = a();
  Le(() => {
    s(d) && p !== a() && (p = a(), s(d).float(a()));
  });
  let b = o();
  Le(() => {
    s(d) && b !== o() && (b = o(), s(d).setRequired(o()));
  });
  const y = _e("SMUI:floating-label:mount"), E = _e("SMUI:floating-label:unmount");
  at(() => {
    X(
      d,
      new Ig({
        addClass: I,
        removeClass: _,
        getWidth: () => {
          var D, W;
          const K = J(), ne = K.cloneNode(!0);
          (D = K.parentNode) == null || D.appendChild(ne), ne.classList.add("smui-floating-label--remove-transition"), ne.classList.add("smui-floating-label--force-size"), ne.classList.remove("mdc-floating-label--float-above");
          const U = ne.scrollWidth;
          return (W = K.parentNode) == null || W.removeChild(ne), U;
        },
        registerInteractionHandler: (K, ne) => m.on(J(), K, ne),
        deregisterInteractionHandler: (K, ne) => m.off(J(), K, ne)
      }),
      !0
    );
    const N = {
      get element() {
        return J();
      },
      addStyle: A,
      removeStyle: S
    };
    return y && y(N), s(d).init(), () => {
      var K;
      E && E(N), (K = s(d)) == null || K.destroy(), m.clear();
    };
  });
  function I(N) {
    f[N] || (f[N] = !0);
  }
  function _(N) {
    (!(N in f) || f[N]) && (f[N] = !1);
  }
  function A(N, K) {
    g[N] != K && (K === "" || K == null ? delete g[N] : g[N] = K);
  }
  function S(N) {
    N in g && delete g[N];
  }
  function L(N) {
    var K;
    (K = s(d)) == null || K.shake(N);
  }
  function T(N) {
    a(N);
  }
  function w(N) {
    o(N);
  }
  function k() {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    return s(d).getWidth();
  }
  function J() {
    return c;
  }
  var G = { shake: L, float: T, setRequired: w, getWidth: k, getElement: J }, z = re(), R = Y(z);
  {
    var C = (N) => {
      var K = Dg();
      Ue(K, (U, D) => ({ class: U, style: D, ...l }), [
        () => Me({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": o(),
          ...f,
          [r()]: !0
        }),
        () => Object.entries(g).map(([U, D]) => `${U}: ${D};`).concat([i()]).join(" ")
      ]);
      var ne = de(K);
      Ee(ne, () => e.children ?? ve), Ce(K, (U) => c = U, () => c), Pe(K, (U, D) => Q == null ? void 0 : Q(U, D), n), x(N, K);
    }, F = (N) => {
      var K = Mg();
      Ue(
        K,
        (U, D) => ({
          class: U,
          style: D,
          for: e.for || (h ? h.id : void 0),
          ...l
        }),
        [
          () => Me({
            "mdc-floating-label": !0,
            "mdc-floating-label--float-above": a(),
            "mdc-floating-label--required": o(),
            ...f,
            [r()]: !0
          }),
          () => Object.entries(g).map(([U, D]) => `${U}: ${D};`).concat([i()]).join(" ")
        ]
      );
      var ne = de(K);
      Ee(ne, () => e.children ?? ve), Ce(K, (U) => c = U, () => c), Pe(K, (U, D) => Q == null ? void 0 : Q(U, D), n), x(N, K);
    };
    se(R, (N) => {
      u() ? N(C) : N(F, !1);
    });
  }
  return x(t, z), we(G);
}
var Pg = /* @__PURE__ */ ce("<div></div>");
function hd(t, e) {
  xe(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "style", 3, ""), a = v(e, "active", 3, !1), o = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "active"
  ]), u, l = /* @__PURE__ */ he(void 0), c = new Ii(), d = ye({}), m = ye({});
  at(() => (X(
    l,
    new Sg({
      addClass: g,
      removeClass: h,
      hasClass: f,
      setStyle: p,
      registerEventHandler: (S, L) => c.on(I(), S, L),
      deregisterEventHandler: (S, L) => c.off(I(), S, L)
    }),
    !0
  ), s(l).init(), () => {
    var S;
    (S = s(l)) == null || S.destroy(), c.clear();
  }));
  function f(S) {
    return S in d ? d[S] : I().classList.contains(S);
  }
  function g(S) {
    d[S] || (d[S] = !0);
  }
  function h(S) {
    (!(S in d) || d[S]) && (d[S] = !1);
  }
  function p(S, L) {
    m[S] != L && (L === "" || L == null ? delete m[S] : m[S] = L);
  }
  function b() {
    var S;
    (S = s(l)) == null || S.activate();
  }
  function y() {
    var S;
    (S = s(l)) == null || S.deactivate();
  }
  function E(S) {
    var L;
    (L = s(l)) == null || L.setRippleCenter(S);
  }
  function I() {
    return u;
  }
  var _ = { activate: b, deactivate: y, setRippleCenter: E, getElement: I }, A = Pg();
  return Ue(A, (S, L) => ({ class: S, style: L, ...o }), [
    () => Me({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...d,
      [r()]: !0
    }),
    () => Object.entries(m).map(([S, L]) => `${S}: ${L};`).concat([i()]).join(" ")
  ]), Ce(A, (S) => u = S, () => u), Pe(A, (S, L) => Q == null ? void 0 : Q(S, L), n), x(t, A), we(_);
}
var Hg = /* @__PURE__ */ ce('<div class="mdc-notched-outline__notch"><!></div>'), Ng = /* @__PURE__ */ ce('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function vd(t, e) {
  xe(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "notched", 3, !1), a = v(e, "noLabel", 3, !1), o = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "notched",
    "noLabel",
    "children"
  ]), u, l = /* @__PURE__ */ he(void 0), c = /* @__PURE__ */ he(void 0), d = ye({}), m = ye({}), f;
  Le(() => {
    s(c) !== f && (s(c) ? (s(c).addStyle("transition-duration", "0s"), g("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      s(c) && s(c).removeStyle("transition-duration");
    })) : h("mdc-notched-outline--upgraded"), f = s(c));
  }), ue("SMUI:floating-label:mount", (T) => {
    X(c, T, !0);
  }), ue("SMUI:floating-label:unmount", () => {
    X(c, void 0);
  }), at(() => (X(
    l,
    new Cg({
      addClass: g,
      removeClass: h,
      setNotchWidthProperty: (T) => p("width", T + "px"),
      removeNotchWidthProperty: () => b("width")
    }),
    !0
  ), s(l).init(), () => {
    var T;
    (T = s(l)) == null || T.destroy();
  }));
  function g(T) {
    d[T] || (d[T] = !0);
  }
  function h(T) {
    (!(T in d) || d[T]) && (d[T] = !1);
  }
  function p(T, w) {
    m[T] != w && (w === "" || w == null ? delete m[T] : m[T] = w);
  }
  function b(T) {
    T in m && delete m[T];
  }
  function y(T) {
    var w;
    (w = s(l)) == null || w.notch(T);
  }
  function E() {
    var T;
    (T = s(l)) == null || T.closeNotch();
  }
  function I() {
    return u;
  }
  var _ = { notch: y, closeNotch: E, getElement: I }, A = Ng();
  Ue(A, (T) => ({ class: T, ...o }), [
    () => Me({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": i(),
      "mdc-notched-outline--no-label": a(),
      ...d,
      [r()]: !0
    })
  ]);
  var S = be(de(A), 2);
  {
    var L = (T) => {
      var w = Hg(), k = de(w);
      Ee(k, () => e.children ?? ve), Oe((J) => mt(w, J), [
        () => Object.entries(m).map(([J, G]) => `${J}: ${G};`).join(" ")
      ]), x(T, w);
    };
    se(S, (T) => {
      a() || T(L);
    });
  }
  return Ce(A, (T) => u = T, () => u), Pe(A, (T, w) => Q == null ? void 0 : Q(T, w), n), x(t, A), we(_);
}
function da(t, e) {
  xe(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "component", 3, Wr), a = v(e, "tag", 3, "div"), o = v(e, "_smuiClass", 3, ""), u = v(e, "_smuiClassMap", 23, () => ({})), l = v(e, "_smuiContexts", 19, () => ({})), c = v(e, "_smuiProps", 19, () => ({})), d = /* @__PURE__ */ je(e, [
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
  ]), m;
  const f = [];
  Object.entries(u()).forEach(([y, E]) => {
    const I = _e(E);
    I && "subscribe" in I && f.push(I.subscribe((_) => {
      u()[y] = _;
    }));
  });
  for (let y in l())
    l().hasOwnProperty(y) && ue(y, l()[y]);
  En(() => {
    for (const y of f)
      y();
  });
  function g() {
    return m.getElement();
  }
  var h = { getElement: g }, p = re(), b = Y(p);
  {
    let y = /* @__PURE__ */ fe(() => Me({
      [o()]: !0,
      ...u(),
      [r()]: !0
    }));
    rr(b, i, (E, I) => {
      Ce(
        I(E, Je(
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
            children: (_, A) => {
              var S = re(), L = Y(S);
              Ee(L, () => e.children ?? ve), x(_, S);
            },
            $$slots: { default: !0 }
          }
        )),
        (_) => m = _,
        () => m
      );
    });
  }
  return x(t, p), we(h);
}
function Ug(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ce(
    da(t, Je({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => n, {
      children: (o, u) => {
        var l = re(), c = Y(l);
        Ee(c, () => e.children ?? ve), x(o, l);
      },
      $$slots: { default: !0 }
    })),
    (o) => r = o,
    () => r
  ), we(a);
}
function Fg(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ce(
    da(t, Je(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => n,
      {
        children: (o, u) => {
          var l = re(), c = Y(l);
          Ee(c, () => e.children ?? ve), x(o, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), we(a);
}
function kg(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ce(
    da(t, Je(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => n,
      {
        children: (o, u) => {
          var l = re(), c = Y(l);
          Ee(c, () => e.children ?? ve), x(o, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), we(a);
}
var Bg = /* @__PURE__ */ ce("<input/>");
function Vg(t, e) {
  xe(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "type", 3, "text"), a = v(e, "placeholder", 3, " "), o = v(e, "value", 15), u = v(e, "files", 15, null), l = v(e, "dirty", 15, !1), c = v(e, "invalid", 15, !1), d = v(e, "updateInvalid", 3, !0), m = v(e, "initialInvalid", 3, !1), f = v(e, "emptyValueNull", 19, () => o() === null), g = v(e, "emptyValueUndefined", 19, () => o() === void 0), h = /* @__PURE__ */ je(e, [
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
  ]), p, b = ye({}), y = ye({});
  Le(() => {
    i() === "file" ? delete y.value : y.value = o() == null ? "" : o();
  }), at(() => {
    d() && m() && c(k().matches(":invalid"));
  });
  function E(C) {
    return C === "" ? Number.NaN : +C;
  }
  function I(C) {
    if (i() === "file") {
      u(C.currentTarget.files);
      return;
    }
    if (C.currentTarget.value === "" && f()) {
      o(null);
      return;
    }
    if (C.currentTarget.value === "" && g()) {
      o(void 0);
      return;
    }
    switch (i()) {
      case "number":
      case "range":
        o(E(C.currentTarget.value));
        break;
      default:
        o(C.currentTarget.value);
        break;
    }
  }
  function _(C) {
    (i() === "file" || i() === "range") && I(C), l(!0), d() && c(k().matches(":invalid"));
  }
  function A(C) {
    return C in b ? b[C] ?? null : k().getAttribute(C);
  }
  function S(C, F) {
    b[C] !== F && (b[C] = F);
  }
  function L(C) {
    (!(C in b) || b[C] != null) && (b[C] = void 0);
  }
  function T() {
    k().focus();
  }
  function w() {
    k().blur();
  }
  function k() {
    return p;
  }
  var J = { getAttr: A, addAttr: S, removeAttr: L, focus: T, blur: w, getElement: k }, G = Bg(), z = (C) => {
    var F;
    i() !== "file" && I(C), (F = e.oninput) == null || F.call(e, C);
  }, R = (C) => {
    var F;
    _(C), (F = e.onchange) == null || F.call(e, C);
  };
  return Ue(
    G,
    (C) => ({
      class: C,
      type: i(),
      placeholder: a(),
      ...y,
      ...b,
      ...h,
      oninput: z,
      onchange: R
    }),
    [
      () => Me({ "mdc-text-field__input": !0, [r()]: !0 })
    ],
    void 0,
    void 0,
    !0
  ), Ce(G, (C) => p = C, () => p), Pe(G, (C, F) => Q == null ? void 0 : Q(C, F), n), x(t, G), we(J);
}
var Gg = /* @__PURE__ */ ce("<textarea></textarea>");
function jg(t, e) {
  xe(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "style", 3, ""), a = v(e, "value", 15, ""), o = v(e, "dirty", 15, !1), u = v(e, "invalid", 15, !1), l = v(e, "updateInvalid", 3, !0), c = v(e, "initialInvalid", 3, !1), d = v(e, "resizable", 3, !0), m = /* @__PURE__ */ je(e, [
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
  ]), f, g = ye({});
  at(() => {
    l() && c() && u(_().matches(":invalid"));
  });
  function h() {
    o(!0), l() && u(_().matches(":invalid"));
  }
  function p(T) {
    return T in g ? g[T] ?? null : _().getAttribute(T);
  }
  function b(T, w) {
    g[T] !== w && (g[T] = w);
  }
  function y(T) {
    (!(T in g) || g[T] != null) && (g[T] = void 0);
  }
  function E() {
    _().focus();
  }
  function I() {
    _().blur();
  }
  function _() {
    return f;
  }
  var A = { getAttr: p, addAttr: b, removeAttr: y, focus: E, blur: I, getElement: _ }, S = Gg(), L = (T) => {
    var w;
    h(), (w = e.onchange) == null || w.call(e, T);
  };
  return Ue(
    S,
    (T) => ({
      class: T,
      style: `${d() ? "" : "resize: none; "}${i()}`,
      ...g,
      ...m,
      onchange: L
    }),
    [
      () => Me({ "mdc-text-field__input": !0, [r()]: !0 })
    ]
  ), Ce(S, (T) => f = T, () => f), Pe(S, (T, w) => Q == null ? void 0 : Q(T, w), n), bi(() => Ha(S, a)), x(t, S), we(A);
}
var qg = /* @__PURE__ */ ce('<span class="mdc-text-field__ripple"></span>'), Wg = /* @__PURE__ */ ce("<!> <!>", 1), zg = /* @__PURE__ */ ce("<span><!> <!></span>"), Kg = /* @__PURE__ */ ce("<!> <!> <!>", 1), Xg = /* @__PURE__ */ ce("<label><!> <!> <!> <!> <!> <!> <!></label>"), Yg = /* @__PURE__ */ ce("<div><!> <!> <!> <!> <!></div>"), Zg = /* @__PURE__ */ ce("<!> <!>", 1);
function Gs(t, e) {
  xe(e, !0);
  const { applyPassive: n } = ud;
  let r = () => {
  };
  function i(j) {
    return j === r;
  }
  let a = v(e, "use", 19, () => []), o = v(e, "class", 3, ""), u = v(e, "style", 3, ""), l = v(e, "ripple", 3, !0), c = v(e, "disabled", 3, !1), d = v(e, "required", 3, !1), m = v(e, "textarea", 3, !1), f = v(e, "variant", 19, () => m() ? "outlined" : "standard"), g = v(e, "noLabel", 3, !1), h = v(e, "type", 3, "text"), p = v(e, "value", 15), b = v(e, "files", 15, r), y = v(e, "invalid", 15, r), E = v(e, "updateInvalid", 19, () => i(y())), I = v(e, "initialInvalid", 3, !1), _ = v(e, "dirty", 15, !1), A = v(e, "validateOnValueChange", 19, E), S = v(e, "useNativeValidation", 19, E), L = v(e, "withLeadingIcon", 3, r), T = v(e, "withTrailingIcon", 3, r), w = v(e, "input", 7), k = v(e, "floatingLabel", 7), J = v(e, "lineRipple", 7), G = v(e, "notchedOutline", 7), z = /* @__PURE__ */ je(e, [
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
  const R = p() !== void 0 || p() === void 0 && e.input$emptyValueUndefined || !i(b());
  i(b()) && b(null), i(y()) && y(!1);
  let C, F = /* @__PURE__ */ he(void 0), N = new Ii(), K = ye({}), ne = ye({}), U = /* @__PURE__ */ he(void 0), D = /* @__PURE__ */ he(!1), W = /* @__PURE__ */ he(ye(I())), Ie = _e("SMUI:addLayoutListener"), B, P, M = new Promise((j) => P = j), O, ee, Z, ie;
  const Ae = /* @__PURE__ */ fe(() => w() && w().getElement());
  Le(() => {
    (_() || s(W) || !E()) && s(F) && s(F).isValid() !== !y() && (E() ? y(!s(F).isValid()) : s(F).setValid(!y()));
  }), Le(() => {
    s(F) && s(F).getValidateOnValueChange() !== A() && s(F).setValidateOnValueChange(i(A()) ? !1 : A());
  }), Le(() => {
    s(F) && s(F).setUseNativeValidation(i(S()) ? !0 : S());
  }), Le(() => {
    s(F) && s(F).setDisabled(c());
  });
  let te = p();
  Le(() => {
    if (s(F) && R && te !== p()) {
      te = p();
      const j = `${p() == null ? "" : p()}`;
      s(F).getValue() !== j && s(F).setValue(j);
    }
  }), Ie && (B = Ie(V)), ue("SMUI:textfield:leading-icon:mount", (j) => {
    O = j;
  }), ue("SMUI:textfield:leading-icon:unmount", () => {
    O = void 0;
  }), ue("SMUI:textfield:trailing-icon:mount", (j) => {
    ee = j;
  }), ue("SMUI:textfield:trailing-icon:unmount", () => {
    ee = void 0;
  }), ue("SMUI:textfield:helper-text:id", (j) => {
    X(U, j, !0);
  }), ue("SMUI:textfield:helper-text:mount", (j) => {
    Z = j;
  }), ue("SMUI:textfield:helper-text:unmount", () => {
    X(U, void 0), Z = void 0;
  }), ue("SMUI:textfield:character-counter:mount", (j) => {
    ie = j;
  }), ue("SMUI:textfield:character-counter:unmount", () => {
    ie = void 0;
  }), at(() => {
    var j;
    if (X(
      F,
      new Lg(
        {
          // getRootAdapterMethods_
          addClass: Te,
          removeClass: Re,
          hasClass: oe,
          registerTextFieldInteractionHandler: (ae, ke) => N.on($(), ae, ke),
          deregisterTextFieldInteractionHandler: (ae, ke) => N.off($(), ae, ke),
          registerValidationAttributeChangeHandler: (ae) => {
            const ke = (_t) => _t.map((Gt) => Gt.attributeName).filter((Gt) => Gt), ft = new MutationObserver((_t) => {
              S() && ae(ke(_t));
            }), It = { attributes: !0 };
            return w() && ft.observe(w().getElement(), It), ft;
          },
          deregisterValidationAttributeChangeHandler: (ae) => {
            ae.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var ae;
            return ((ae = w()) == null ? void 0 : ae.getElement()) ?? null;
          },
          setInputAttr: (ae, ke) => {
            var ft;
            (ft = w()) == null || ft.addAttr(ae, ke);
          },
          removeInputAttr: (ae) => {
            var ke;
            (ke = w()) == null || ke.removeAttr(ae);
          },
          isFocused: () => {
            var ae;
            return document.activeElement === ((ae = w()) == null ? void 0 : ae.getElement());
          },
          registerInputInteractionHandler: (ae, ke) => {
            var It;
            const ft = (It = w()) == null ? void 0 : It.getElement();
            if (ft) {
              const _t = n();
              N.on(ft, ae, ke, typeof _t == "boolean" ? { capture: _t } : _t);
            }
          },
          deregisterInputInteractionHandler: (ae, ke) => {
            var It;
            const ft = (It = w()) == null ? void 0 : It.getElement();
            ft && N.off(ft, ae, ke);
          },
          // getLabelAdapterMethods_
          floatLabel: (ae) => k() && k().float(ae),
          getLabelWidth: () => k() ? k().getWidth() : 0,
          hasLabel: () => !!k(),
          shakeLabel: (ae) => k() && k().shake(ae),
          setLabelRequired: (ae) => k() && k().setRequired(ae),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => J() && J().activate(),
          deactivateLineRipple: () => J() && J().deactivate(),
          setLineRippleTransformOrigin: (ae) => J() && J().setRippleCenter(ae),
          // getOutlineAdapterMethods_
          closeOutline: () => G() && G().closeNotch(),
          hasOutline: () => !!G(),
          notchOutline: (ae) => G() && G().notch(ae)
        },
        {
          get helperText() {
            return Z;
          },
          get characterCounter() {
            return ie;
          },
          get leadingIcon() {
            return O;
          },
          get trailingIcon() {
            return ee;
          }
        }
      ),
      !0
    ), R) {
      if (w() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (j = s(F)) == null || j.init();
    } else
      Ec().then(() => {
        var ae;
        if (w() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (ae = s(F)) == null || ae.init();
      });
    return P(), () => {
      var ae;
      (ae = s(F)) == null || ae.destroy(), N.clear();
    };
  }), En(() => {
    B && B();
  });
  function oe(j) {
    return j in K ? K[j] ?? null : $().classList.contains(j);
  }
  function Te(j) {
    K[j] || (K[j] = !0);
  }
  function Re(j) {
    (!(j in K) || K[j]) && (K[j] = !1);
  }
  function Ne(j, ae) {
    ne[j] != ae && (ae === "" || ae == null ? delete ne[j] : ne[j] = ae);
  }
  function Fe() {
    var j;
    (j = w()) == null || j.focus();
  }
  function He() {
    var j;
    (j = w()) == null || j.blur();
  }
  function V() {
    if (s(F)) {
      const j = s(F).shouldFloat;
      s(F).notchOutline(j);
    }
  }
  function $() {
    return C;
  }
  var me = { focus: Fe, blur: He, layout: V, getElement: $ }, De = Zg(), Ve = Y(De);
  {
    var ut = (j) => {
      var ae = Xg();
      Ue(ae, (Xe, et, tt) => ({ class: Xe, style: et, for: void 0, ...tt }), [
        () => Me({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": c(),
          "mdc-text-field--textarea": m(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !m(),
          "mdc-text-field--no-label": g() || e.label == null,
          "mdc-text-field--label-floating": s(D) || p() != null && p() !== "",
          "mdc-text-field--with-leading-icon": i(L()) ? e.leadingIcon : L(),
          "mdc-text-field--with-trailing-icon": i(T()) ? e.trailingIcon : T(),
          "mdc-text-field--with-internal-counter": m() && e.internalCounter,
          "mdc-text-field--invalid": y(),
          ...K,
          [o()]: !0
        }),
        () => Object.entries(ne).map(([Xe, et]) => `${Xe}: ${et};`).concat([u()]).join(" "),
        () => Vn(z, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var ke = de(ae);
      {
        var ft = (Xe) => {
          var et = Wg(), tt = Y(et);
          {
            var Ut = (dt) => {
              var Lt = qg();
              x(dt, Lt);
            };
            se(tt, (dt) => {
              f() === "filled" && dt(Ut);
            });
          }
          var gn = be(tt, 2);
          {
            var ot = (dt) => {
              {
                let Lt = /* @__PURE__ */ fe(() => s(D) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), nt = /* @__PURE__ */ fe(() => it(z, "label$"));
                Ce(
                  Lo(dt, Je(
                    {
                      get floatAbove() {
                        return s(Lt);
                      },
                      get required() {
                        return d();
                      },
                      wrapped: !0
                    },
                    () => s(nt),
                    {
                      children: (Dt, Mn) => {
                        var Mt = re(), St = Y(Mt);
                        {
                          var Ft = (jt) => {
                          }, un = (jt) => {
                            var cn = re(), $t = Y(cn);
                            {
                              var Wn = (dn) => {
                                var Xt = vt();
                                Oe(() => $e(Xt, e.label)), x(dn, Xt);
                              }, Xr = (dn) => {
                                var Xt = re(), pn = Y(Xt);
                                Ee(pn, () => e.label), x(dn, Xt);
                              };
                              se(
                                $t,
                                (dn) => {
                                  typeof e.label == "string" ? dn(Wn) : dn(Xr, !1);
                                },
                                !0
                              );
                            }
                            x(jt, cn);
                          };
                          se(St, (jt) => {
                            e.label == null ? jt(Ft) : jt(un, !1);
                          });
                        }
                        x(Dt, Mt);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (Dt) => k(Dt),
                  () => k()
                );
              }
            };
            se(gn, (dt) => {
              !g() && e.label != null && dt(ot);
            });
          }
          x(Xe, et);
        };
        se(ke, (Xe) => {
          !m() && f() !== "outlined" && Xe(ft);
        });
      }
      var It = be(ke, 2);
      {
        var _t = (Xe) => {
          {
            let et = /* @__PURE__ */ fe(() => g() || e.label == null), tt = /* @__PURE__ */ fe(() => it(z, "outline$"));
            Ce(
              vd(Xe, Je(
                {
                  get noLabel() {
                    return s(et);
                  }
                },
                () => s(tt),
                {
                  children: (Ut, gn) => {
                    var ot = re(), dt = Y(ot);
                    {
                      var Lt = (nt) => {
                        {
                          let Dt = /* @__PURE__ */ fe(() => s(D) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), Mn = /* @__PURE__ */ fe(() => it(z, "label$"));
                          Ce(
                            Lo(nt, Je(
                              {
                                get floatAbove() {
                                  return s(Dt);
                                },
                                get required() {
                                  return d();
                                },
                                wrapped: !0
                              },
                              () => s(Mn),
                              {
                                children: (Mt, St) => {
                                  var Ft = re(), un = Y(Ft);
                                  {
                                    var jt = ($t) => {
                                    }, cn = ($t) => {
                                      var Wn = re(), Xr = Y(Wn);
                                      {
                                        var dn = (pn) => {
                                          var ar = vt();
                                          Oe(() => $e(ar, e.label)), x(pn, ar);
                                        }, Xt = (pn) => {
                                          var ar = re(), fa = Y(ar);
                                          Ee(fa, () => e.label), x(pn, ar);
                                        };
                                        se(
                                          Xr,
                                          (pn) => {
                                            typeof e.label == "string" ? pn(dn) : pn(Xt, !1);
                                          },
                                          !0
                                        );
                                      }
                                      x($t, Wn);
                                    };
                                    se(un, ($t) => {
                                      e.label == null ? $t(jt) : $t(cn, !1);
                                    });
                                  }
                                  x(Mt, Ft);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (Mt) => k(Mt),
                            () => k()
                          );
                        }
                      };
                      se(dt, (nt) => {
                        !g() && e.label != null && nt(Lt);
                      });
                    }
                    x(Ut, ot);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (Ut) => G(Ut),
              () => G()
            );
          }
        };
        se(It, (Xe) => {
          (m() || f() === "outlined") && Xe(_t);
        });
      }
      var Gt = be(It, 2);
      ao(Gt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (Xe, et) => {
          var tt = re(), Ut = Y(tt);
          Ee(Ut, () => e.leadingIcon ?? ve), x(Xe, tt);
        },
        $$slots: { default: !0 }
      });
      var Er = be(Gt, 2);
      Ee(Er, () => e.children ?? ve);
      var pt = be(Er, 2);
      {
        var Nt = (Xe) => {
          var et = zg(), tt = de(et);
          {
            let gn = /* @__PURE__ */ fe(() => it(z, "input$"));
            Ce(
              jg(tt, Je(
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
                    return s(W);
                  },
                  get "aria-controls"() {
                    return s(U);
                  },
                  get "aria-describedby"() {
                    return s(U);
                  }
                },
                () => s(gn),
                {
                  onblur: (ot) => {
                    var dt;
                    X(D, !1), X(W, !0), Ke($(), "blur", ot), (dt = e.input$onblur) == null || dt.call(e, ot);
                  },
                  onfocus: (ot) => {
                    var dt;
                    X(D, !0), Ke($(), "focus", ot), (dt = e.input$onfocus) == null || dt.call(e, ot);
                  },
                  get value() {
                    return p();
                  },
                  set value(ot) {
                    p(ot);
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
              (ot) => w(ot),
              () => w()
            );
          }
          var Ut = be(tt, 2);
          Ee(Ut, () => e.internalCounter ?? ve), Oe((gn) => ol(et, 1, gn), [
            () => Rc(Me({
              "mdc-text-field__resizer": !("input$resizable" in z) || e.input$resizable
            }))
          ]), x(Xe, et);
        }, Et = (Xe) => {
          var et = Kg(), tt = Y(et);
          {
            var Ut = (Lt) => {
              var nt = re(), Dt = Y(nt);
              {
                var Mn = (St) => {
                  Fg(St, {
                    children: (Ft, un) => {
                      var jt = vt();
                      Oe(() => $e(jt, e.prefix)), x(Ft, jt);
                    },
                    $$slots: { default: !0 }
                  });
                }, Mt = (St) => {
                  var Ft = re(), un = Y(Ft);
                  Ee(un, () => e.prefix ?? ve), x(St, Ft);
                };
                se(Dt, (St) => {
                  typeof e.prefix == "string" ? St(Mn) : St(Mt, !1);
                });
              }
              x(Lt, nt);
            };
            se(tt, (Lt) => {
              e.prefix != null && Lt(Ut);
            });
          }
          var gn = be(tt, 2);
          {
            let Lt = /* @__PURE__ */ fe(() => it(z, "input$"));
            Ce(
              Vg(gn, Je(
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
                    return E();
                  },
                  get initialInvalid() {
                    return s(W);
                  },
                  get "aria-controls"() {
                    return s(U);
                  },
                  get "aria-describedby"() {
                    return s(U);
                  }
                },
                () => g() && e.label != null && typeof e.label == "string" ? { placeholder: e.label } : {},
                () => s(Lt),
                {
                  onblur: (nt) => {
                    var Dt;
                    X(D, !1), X(W, !0), Ke($(), "blur", nt), (Dt = e.input$onblur) == null || Dt.call(e, nt);
                  },
                  onfocus: (nt) => {
                    var Dt;
                    X(D, !0), Ke($(), "focus", nt), (Dt = e.input$onfocus) == null || Dt.call(e, nt);
                  },
                  get value() {
                    return p();
                  },
                  set value(nt) {
                    p(nt);
                  },
                  get files() {
                    return b();
                  },
                  set files(nt) {
                    b(nt);
                  },
                  get dirty() {
                    return _();
                  },
                  set dirty(nt) {
                    _(nt);
                  },
                  get invalid() {
                    return y();
                  },
                  set invalid(nt) {
                    y(nt);
                  }
                }
              )),
              (nt) => w(nt),
              () => w()
            );
          }
          var ot = be(gn, 2);
          {
            var dt = (Lt) => {
              var nt = re(), Dt = Y(nt);
              {
                var Mn = (St) => {
                  kg(St, {
                    children: (Ft, un) => {
                      var jt = vt();
                      Oe(() => $e(jt, e.suffix)), x(Ft, jt);
                    },
                    $$slots: { default: !0 }
                  });
                }, Mt = (St) => {
                  var Ft = re(), un = Y(Ft);
                  Ee(un, () => e.suffix ?? ve), x(St, Ft);
                };
                se(Dt, (St) => {
                  typeof e.suffix == "string" ? St(Mn) : St(Mt, !1);
                });
              }
              x(Lt, nt);
            };
            se(ot, (Lt) => {
              e.suffix != null && Lt(dt);
            });
          }
          x(Xe, et);
        };
        se(pt, (Xe) => {
          m() && typeof p() == "string" ? Xe(Nt) : Xe(Et, !1);
        });
      }
      var Dn = be(pt, 2);
      ao(Dn, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (Xe, et) => {
          var tt = re(), Ut = Y(tt);
          Ee(Ut, () => e.trailingIcon ?? ve), x(Xe, tt);
        },
        $$slots: { default: !0 }
      });
      var Ai = be(Dn, 2);
      {
        var qn = (Xe) => {
          {
            let et = /* @__PURE__ */ fe(() => it(z, "ripple$"));
            Ce(hd(Xe, Je(() => s(et))), (tt) => J(tt), () => J());
          }
        };
        se(Ai, (Xe) => {
          !m() && f() !== "outlined" && l() && Xe(qn);
        });
      }
      Ce(ae, (Xe) => C = Xe, () => C), Pe(ae, (Xe, et) => Qt == null ? void 0 : Qt(Xe, et), () => ({
        ripple: !m() && f() === "filled",
        unbounded: !1,
        addClass: Te,
        removeClass: Re,
        addStyle: Ne,
        eventTarget: s(Ae),
        activeTarget: s(Ae),
        initPromise: M
      })), Pe(ae, (Xe, et) => Q == null ? void 0 : Q(Xe, et), a), x(j, ae);
    }, gt = (j) => {
      var ae = Yg();
      Ue(ae, (pt, Nt, Et) => ({ class: pt, style: Nt, ...Et }), [
        () => Me({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": c(),
          "mdc-text-field--textarea": m(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !m(),
          "mdc-text-field--no-label": g() || e.label == null,
          "mdc-text-field--with-leading-icon": e.leadingIcon,
          "mdc-text-field--with-trailing-icon": e.trailingIcon,
          "mdc-text-field--invalid": y(),
          ...K,
          [o()]: !0
        }),
        () => Object.entries(ne).map(([pt, Nt]) => `${pt}: ${Nt};`).concat([u()]).join(" "),
        () => Vn(z, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var ke = de(ae);
      {
        var ft = (pt) => {
          var Nt = re(), Et = Y(Nt);
          Ee(Et, () => e.label ?? ve), x(pt, Nt);
        };
        se(ke, (pt) => {
          typeof e.label != "string" && pt(ft);
        });
      }
      var It = be(ke, 2);
      ao(It, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (pt, Nt) => {
          var Et = re(), Dn = Y(Et);
          Ee(Dn, () => e.leadingIcon ?? ve), x(pt, Et);
        },
        $$slots: { default: !0 }
      });
      var _t = be(It, 2);
      Ee(_t, () => e.children ?? ve);
      var Gt = be(_t, 2);
      ao(Gt, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (pt, Nt) => {
          var Et = re(), Dn = Y(Et);
          Ee(Dn, () => e.trailingIcon ?? ve), x(pt, Et);
        },
        $$slots: { default: !0 }
      });
      var Er = be(Gt, 2);
      Ee(Er, () => e.line ?? ve), Ce(ae, (pt) => C = pt, () => C), Pe(ae, (pt, Nt) => Qt == null ? void 0 : Qt(pt, Nt), () => ({
        ripple: l(),
        unbounded: !1,
        addClass: Te,
        removeClass: Re,
        addStyle: Ne
      })), Pe(ae, (pt, Nt) => Q == null ? void 0 : Q(pt, Nt), a), x(j, ae);
    };
    se(Ve, (j) => {
      R ? j(ut) : j(gt, !1);
    });
  }
  var ge = be(Ve, 2);
  {
    var q = (j) => {
      {
        let ae = /* @__PURE__ */ fe(() => it(z, "helperLine$"));
        Ug(j, Je(() => s(ae), {
          children: (ke, ft) => {
            var It = re(), _t = Y(It);
            Ee(_t, () => e.helper ?? ve), x(ke, It);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    se(ge, (j) => {
      e.helper && j(q);
    });
  }
  return x(t, De), we(me);
}
var Qg = /* @__PURE__ */ ce("<i><!></i>");
function Jg(t, e) {
  xe(e, !0);
  const n = () => Bn(h, "$leadingStore", r), [r, i] = ir();
  let a = v(e, "use", 19, () => []), o = v(e, "class", 3, ""), u = v(e, "tabindex", 19, () => e.role === "button" ? 0 : -1), l = v(e, "disabled", 3, !1), c = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "role",
    "tabindex",
    "disabled",
    "children"
  ]), d, m = /* @__PURE__ */ he(void 0), f = new Ii(), g = ye({});
  const h = _e("SMUI:textfield:icon:leading"), p = n();
  let b = /* @__PURE__ */ he(void 0);
  const y = /* @__PURE__ */ fe(() => ({ role: e.role, tabindex: u() })), E = _e("SMUI:textfield:leading-icon:mount"), I = _e("SMUI:textfield:leading-icon:unmount"), _ = _e("SMUI:textfield:trailing-icon:mount"), A = _e("SMUI:textfield:trailing-icon:unmount");
  at(() => (X(
    m,
    new Rg({
      getAttr: S,
      setAttr: L,
      removeAttr: T,
      setContent: (F) => {
        X(b, F, !0);
      },
      registerInteractionHandler: (F, N) => f.on(w(), F, N),
      deregisterInteractionHandler: (F, N) => f.off(w(), F, N),
      notifyIconAction: () => Ke(w(), "SMUITextFieldIcon")
    }),
    !0
  ), p ? E && E(s(m)) : _ && _(s(m)), s(m).init(), () => {
    var F;
    s(m) && (p ? I && I(s(m)) : A && A(s(m))), (F = s(m)) == null || F.destroy(), f.clear();
  }));
  function S(F) {
    return F in g ? g[F] ?? null : w().getAttribute(F);
  }
  function L(F, N) {
    g[F] !== N && (g[F] = N);
  }
  function T(F) {
    (!(F in g) || g[F] != null) && (g[F] = void 0);
  }
  function w() {
    return d;
  }
  var k = { getElement: w }, J = Qg();
  Ue(
    J,
    (F) => ({
      class: F,
      "aria-hidden": u() === -1 ? "true" : "false",
      "aria-disabled": e.role === "button" ? l() ? "true" : "false" : void 0,
      ...s(y),
      ...g,
      ...c
    }),
    [
      () => Me({
        "mdc-text-field__icon": !0,
        "mdc-text-field__icon--leading": p,
        "mdc-text-field__icon--trailing": !p,
        [o()]: !0
      })
    ]
  );
  var G = de(J);
  {
    var z = (F) => {
      var N = re(), K = Y(N);
      Ee(K, () => e.children ?? ve), x(F, N);
    }, R = (F) => {
      var N = vt();
      Oe(() => $e(N, s(b))), x(F, N);
    };
    se(G, (F) => {
      s(b) == null ? F(z) : F(R, !1);
    });
  }
  Ce(J, (F) => d = F, () => d), Pe(J, (F, N) => Q == null ? void 0 : Q(F, N), a), x(t, J);
  var C = we(k);
  return i(), C;
}
function $g(t, e) {
  xe(e, !0);
  let n = v(e, "placeholder", 3, ""), r = v(e, "label", 3, ""), i = v(e, "icon", 3, ""), a = v(e, "value", 15, ""), o = v(e, "variant", 3, "standard"), u = v(e, "styles", 3, ""), l = v(e, "required", 3, !1), c = v(e, "invalid", 3, !1), d = v(e, "oninput", 3, () => {
  });
  var m = re(), f = Y(m);
  {
    var g = (p) => {
      {
        const b = (E) => {
          Jg(E, {
            class: "material-icons",
            children: (I, _) => {
              var A = vt();
              Oe(() => $e(A, i())), x(I, A);
            },
            $$slots: { default: !0 }
          });
        };
        let y = /* @__PURE__ */ fe(() => `width: 100%; ${u()}`);
        Gs(p, {
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
          set value(E) {
            a(E);
          },
          leadingIcon: b,
          $$slots: { leadingIcon: !0 }
        });
      }
    }, h = (p) => {
      Gs(p, {
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
    se(f, (p) => {
      i() ? p(g) : p(h, !1);
    });
  }
  x(t, m), we();
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
var ep = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, tp = {
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
}, ya = {
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
var fi;
(function(t) {
  t[t.TOP_LEFT = 0] = "TOP_LEFT", t[t.TOP_RIGHT = 4] = "TOP_RIGHT", t[t.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", t[t.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", t[t.TOP_START = 8] = "TOP_START", t[t.TOP_END = 12] = "TOP_END", t[t.BOTTOM_START = 9] = "BOTTOM_START", t[t.BOTTOM_END = 13] = "BOTTOM_END";
})(fi || (fi = {}));
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
var Tr, ur, Ye = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
Tr = {}, Tr["" + Ye.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", Tr["" + Ye.LIST_ITEM_CLASS] = "mdc-list-item", Tr["" + Ye.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", Tr["" + Ye.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", Tr["" + Ye.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", Tr["" + Ye.ROOT] = "mdc-list";
var Oi = (ur = {}, ur["" + Ye.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", ur["" + Ye.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", ur["" + Ye.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", ur["" + Ye.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", ur["" + Ye.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", ur["" + Ye.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", ur["" + Ye.ROOT] = "mdc-deprecated-list", ur), xr = {
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
    .` + Ye.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + Ye.LIST_ITEM_CLASS + ` a,
    .` + Oi[Ye.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Oi[Ye.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + Ye.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + Ye.LIST_ITEM_CLASS + ` a,
    .` + Ye.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + Ye.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + Oi[Ye.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Oi[Ye.LIST_ITEM_CLASS] + ` a,
    .` + Oi[Ye.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + Oi[Ye.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, At = {
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
var np = ["input", "button", "textarea", "select"], Cn = function(t) {
  var e = t.target;
  if (e) {
    var n = ("" + e.tagName).toLowerCase();
    np.indexOf(n) === -1 && t.preventDefault();
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
function rp() {
  var t = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return t;
}
function ip(t, e) {
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
function js(t, e) {
  var n = t.nextChar, r = t.focusItemAtIndex, i = t.sortedIndexByFirstChar, a = t.focusedItemIndex, o = t.skipFocus, u = t.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    gd(e);
  }, At.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + n;
  var l;
  return e.typeaheadBuffer.length === 1 ? l = ap(i, a, u, e) : l = op(i, u, e), l !== -1 && !o && r(l), l;
}
function ap(t, e, n, r) {
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
function op(t, e, n) {
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
function md(t) {
  return t.typeaheadBuffer.length > 0;
}
function gd(t) {
  t.typeaheadBuffer = "";
}
function pu(t, e) {
  var n = t.event, r = t.isTargetListItem, i = t.focusedItemIndex, a = t.focusItemAtIndex, o = t.sortedIndexByFirstChar, u = t.isItemAtIndexDisabled, l = Ot(n) === "ArrowLeft", c = Ot(n) === "ArrowUp", d = Ot(n) === "ArrowRight", m = Ot(n) === "ArrowDown", f = Ot(n) === "Home", g = Ot(n) === "End", h = Ot(n) === "Enter", p = Ot(n) === "Spacebar";
  if (n.altKey || n.ctrlKey || n.metaKey || l || c || d || m || f || g || h)
    return -1;
  var b = !p && n.key.length === 1;
  if (b) {
    Cn(n);
    var y = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: n.key.toLowerCase(),
      sortedIndexByFirstChar: o,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return js(y, e);
  }
  if (!p)
    return -1;
  r && Cn(n);
  var E = r && md(e);
  if (E) {
    var y = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: " ",
      sortedIndexByFirstChar: o,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return js(y, e);
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
function sp(t) {
  return t instanceof Array;
}
var lp = ["Alt", "Control", "Meta", "Shift"];
function bu(t) {
  var e = new Set(t ? lp.filter(function(n) {
    return t.getModifierState(n);
  }) : []);
  return function(n) {
    return n.every(function(r) {
      return e.has(r);
    }) && n.length === e.size;
  };
}
var up = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(n) {
      var r = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return r.wrapFocus = !1, r.isVertical = !0, r.isSingleSelectionList = !1, r.areDisabledItemsFocusable = !0, r.selectedIndex = At.UNSET_INDEX, r.focusedItemIndex = At.UNSET_INDEX, r.useActivatedClass = !1, r.useSelectedAttr = !1, r.ariaCurrentAttrValue = null, r.isCheckboxList = !1, r.isRadioList = !1, r.lastSelectedIndex = null, r.hasTypeahead = !1, r.typeaheadState = rp(), r.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return xr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ye;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return At;
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
      if (n !== At.UNSET_INDEX) {
        var r = this.adapter.listItemAtIndexHasClass(n, Ye.LIST_ITEM_ACTIVATED_CLASS);
        r && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = n;
      }
    }, e.prototype.getSelectedIndexFromDOM = function() {
      for (var n = At.UNSET_INDEX, r = this.adapter.getListItemCount(), i = 0; i < r; i++) {
        var a = this.adapter.listItemAtIndexHasClass(i, Ye.LIST_ITEM_SELECTED_CLASS), o = this.adapter.listItemAtIndexHasClass(i, Ye.LIST_ITEM_ACTIVATED_CLASS);
        if (a || o) {
          n = i;
          break;
        }
      }
      return n;
    }, e.prototype.setHasTypeahead = function(n) {
      this.hasTypeahead = n, n && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex());
    }, e.prototype.isTypeaheadInProgress = function() {
      return this.hasTypeahead && md(this.typeaheadState);
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
      return this.adapter.listItemAtIndexHasClass(n, Ye.LIST_ITEM_DISABLED_CLASS);
    }, e.prototype.handleKeydown = function(n, r, i) {
      var a = this, o, u = Ot(n) === "ArrowLeft", l = Ot(n) === "ArrowUp", c = Ot(n) === "ArrowRight", d = Ot(n) === "ArrowDown", m = Ot(n) === "Home", f = Ot(n) === "End", g = Ot(n) === "Enter", h = Ot(n) === "Spacebar", p = this.isVertical && d || !this.isVertical && c, b = this.isVertical && l || !this.isVertical && u, y = n.key === "A" || n.key === "a", E = bu(n);
      if (this.adapter.isRootFocused()) {
        if ((b || f) && E([]))
          n.preventDefault(), this.focusLastElement();
        else if ((p || m) && E([]))
          n.preventDefault(), this.focusFirstElement();
        else if (b && E(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var I = this.focusLastElement();
          I !== -1 && this.setSelectedIndexOnAction(I, !1);
        } else if (p && E(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var I = this.focusFirstElement();
          I !== -1 && this.setSelectedIndexOnAction(I, !1);
        }
        if (this.hasTypeahead) {
          var _ = {
            event: n,
            focusItemAtIndex: function(L) {
              a.focusItemAtIndex(L);
            },
            focusedItemIndex: -1,
            isTargetListItem: r,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(L) {
              return a.isIndexDisabled(L);
            }
          };
          pu(_, this.typeaheadState);
        }
        return;
      }
      var A = this.adapter.getFocusedElementIndex();
      if (!(A === -1 && (A = i, A < 0))) {
        if (p && E([]))
          Cn(n), this.focusNextElement(A);
        else if (b && E([]))
          Cn(n), this.focusPrevElement(A);
        else if (p && E(["Shift"]) && this.isCheckboxList) {
          Cn(n);
          var I = this.focusNextElement(A);
          I !== -1 && this.setSelectedIndexOnAction(I, !1);
        } else if (b && E(["Shift"]) && this.isCheckboxList) {
          Cn(n);
          var I = this.focusPrevElement(A);
          I !== -1 && this.setSelectedIndexOnAction(I, !1);
        } else if (m && E([]))
          Cn(n), this.focusFirstElement();
        else if (f && E([]))
          Cn(n), this.focusLastElement();
        else if (m && E(["Control", "Shift"]) && this.isCheckboxList) {
          if (Cn(n), this.isIndexDisabled(A))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, A, A);
        } else if (f && E(["Control", "Shift"]) && this.isCheckboxList) {
          if (Cn(n), this.isIndexDisabled(A))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(A, this.adapter.getListItemCount() - 1, A);
        } else if (y && E(["Control"]) && this.isCheckboxList)
          n.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === At.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((g || h) && E([])) {
          if (r) {
            var S = n.target;
            if (S && S.tagName === "A" && g || (Cn(n), this.isIndexDisabled(A)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(A, !1), this.adapter.notifyAction(A));
          }
        } else if ((g || h) && E(["Shift"]) && this.isCheckboxList) {
          var S = n.target;
          if (S && S.tagName === "A" && g || (Cn(n), this.isIndexDisabled(A)))
            return;
          this.isTypeaheadInProgress() || (this.toggleCheckboxRange((o = this.lastSelectedIndex) !== null && o !== void 0 ? o : A, A, A), this.adapter.notifyAction(A));
        }
        if (this.hasTypeahead) {
          var _ = {
            event: n,
            focusItemAtIndex: function(T) {
              a.focusItemAtIndex(T);
            },
            focusedItemIndex: this.focusedItemIndex,
            isTargetListItem: r,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(T) {
              return a.isIndexDisabled(T);
            }
          };
          pu(_, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(n, r, i) {
      var a, o = bu(i);
      n !== At.UNSET_INDEX && (this.isIndexDisabled(n) || (o([]) ? (this.isSelectableList() && this.setSelectedIndexOnAction(n, r), this.adapter.notifyAction(n)) : this.isCheckboxList && o(["Shift"]) && (this.toggleCheckboxRange((a = this.lastSelectedIndex) !== null && a !== void 0 ? a : n, n, n), this.adapter.notifyAction(n))));
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
      this.isIndexValid(n, !1) && (r ? (this.adapter.removeClassForElementIndex(n, Ye.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, xr.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(n, Ye.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, xr.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(n, r) {
      if (r === void 0 && (r = {}), !(this.selectedIndex === n && !r.forceUpdate)) {
        var i = Ye.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (i = Ye.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== At.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, i), this.setAriaForSingleSelectionAtIndex(n), this.setTabindexAtIndex(n), n !== At.UNSET_INDEX && this.adapter.addClassForElementIndex(n, i), this.selectedIndex = n, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([n]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(n) {
      this.selectedIndex === At.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(n, xr.ARIA_CURRENT));
      var r = this.ariaCurrentAttrValue !== null, i = r ? xr.ARIA_CURRENT : xr.ARIA_SELECTED;
      if (this.selectedIndex !== At.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), n !== At.UNSET_INDEX) {
        var a = r ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(n, i, a);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? xr.ARIA_SELECTED : xr.ARIA_CHECKED;
    }, e.prototype.setRadioAtIndex = function(n, r) {
      r === void 0 && (r = {});
      var i = this.getSelectionAttribute();
      this.adapter.setCheckedCheckboxOrRadioAtIndex(n, !0), !(this.selectedIndex === n && !r.forceUpdate) && (this.selectedIndex !== At.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), this.adapter.setAttributeForElementIndex(n, i, "true"), this.selectedIndex = n, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([n]));
    }, e.prototype.setCheckboxAtIndex = function(n, r) {
      r === void 0 && (r = {});
      for (var i = this.selectedIndex, a = r.isUserInteraction ? new Set(i === At.UNSET_INDEX ? [] : i) : null, o = this.getSelectionAttribute(), u = [], l = 0; l < this.adapter.getListItemCount(); l++) {
        var c = a == null ? void 0 : a.has(l), d = n.indexOf(l) >= 0;
        d !== c && u.push(l), this.adapter.setCheckedCheckboxOrRadioAtIndex(l, d), this.adapter.setAttributeForElementIndex(l, o, d ? "true" : "false");
      }
      this.selectedIndex = n, r.isUserInteraction && u.length && this.adapter.notifySelectionChange(u);
    }, e.prototype.toggleCheckboxRange = function(n, r, i) {
      this.lastSelectedIndex = i;
      for (var a = new Set(this.selectedIndex === At.UNSET_INDEX ? [] : this.selectedIndex), o = !(a != null && a.has(i)), u = Ir([n, r].sort(), 2), l = u[0], c = u[1], d = this.getSelectionAttribute(), m = [], f = l; f <= c; f++)
        if (!this.isIndexDisabled(f)) {
          var g = a.has(f);
          o !== g && (m.push(f), this.adapter.setCheckedCheckboxOrRadioAtIndex(f, o), this.adapter.setAttributeForElementIndex(f, d, "" + o), o ? a.add(f) : a.delete(f));
        }
      m.length && (this.selectedIndex = er([], Ir(a)), this.adapter.notifySelectionChange(m));
    }, e.prototype.setTabindexAtIndex = function(n) {
      this.focusedItemIndex === At.UNSET_INDEX && n !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== n && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== n && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), n !== At.UNSET_INDEX && this.adapter.setAttributeForElementIndex(n, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var n = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(n);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== At.UNSET_INDEX ? this.selectedIndex : sp(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(n, r) {
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
        return this.isIndexInRange(n) || this.isSingleSelectionList && n === At.UNSET_INDEX;
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
      var u = this.selectedIndex === At.UNSET_INDEX ? [] : this.selectedIndex.slice();
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
      return js(o, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return ip(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      gd(this.typeaheadState);
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
var pd = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(n) {
      var r = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return r.isSurfaceOpen = !1, r.isQuickOpen = !1, r.isHoistedElement = !1, r.isFixedPosition = !1, r.isHorizontallyCenteredOnViewport = !1, r.maxHeight = 0, r.openBottomBias = 0, r.openAnimationEndTimerId = 0, r.closeAnimationEndTimerId = 0, r.animationRequestId = 0, r.anchorCorner = fi.TOP_START, r.originCorner = fi.TOP_START, r.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, r.position = { x: 0, y: 0 }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ep;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return tp;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return ya;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "Corner", {
      get: function() {
        return fi;
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
        }, ya.TRANSITION_OPEN_DURATION);
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
          }, ya.TRANSITION_CLOSE_DURATION);
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
      var r = this.getoriginCorner(), i = this.getMenuSurfaceMaxHeight(r), a = this.hasBit(r, Ct.BOTTOM) ? "bottom" : "top", o = this.hasBit(r, Ct.RIGHT) ? "right" : "left", u = this.getHorizontalOriginOffset(r), l = this.getVerticalOriginOffset(r), c = this.measurements, d = c.anchorSize, m = c.surfaceSize, f = (n = {}, n[o] = u, n[a] = l, n);
      d.width / m.width > ya.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (o = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(f), this.adapter.setTransformOrigin(o + " " + a), this.adapter.setPosition(f), this.adapter.setMaxHeight(i ? i + "px" : ""), this.hasBit(r, Ct.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
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
      var m = d - o.height > 0;
      !m && c > d + this.openBottomBias && (n = this.setBit(n, Ct.BOTTOM));
      var f = this.adapter.isRtl(), g = this.hasBit(this.anchorCorner, Ct.FLIP_RTL), h = this.hasBit(this.anchorCorner, Ct.RIGHT) || this.hasBit(n, Ct.RIGHT), p = !1;
      f && g ? p = !h : p = h;
      var b, y;
      p ? (b = i.left + a.width + this.anchorMargin.right, y = i.right - this.anchorMargin.right) : (b = i.left + this.anchorMargin.left, y = i.right + a.width - this.anchorMargin.left);
      var E = b - o.width > 0, I = y - o.width > 0, _ = this.hasBit(n, Ct.FLIP_RTL) && this.hasBit(n, Ct.RIGHT);
      return I && _ && f || !E && _ ? n = this.unsetBit(n, Ct.RIGHT) : (E && p && f || E && !p && h || !I && b >= y) && (n = this.setBit(n, Ct.RIGHT)), n;
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
        for (var m = Bt(d), f = m.next(); !f.done; f = m.next()) {
          var g = f.value, h = n[g] || 0;
          if (this.isHorizontallyCenteredOnViewport && (g === "left" || g === "right")) {
            n[g] = (c.width - l.width) / 2;
            continue;
          }
          h += u[g], this.isFixedPosition || (g === "top" ? h += o.y : g === "bottom" ? h -= o.y : g === "left" ? h += o.x : h -= o.x), n[g] = h;
        }
      } catch (p) {
        r = { error: p };
      } finally {
        try {
          f && !f.done && (i = m.return) && i.call(m);
        } finally {
          if (r) throw r.error;
        }
      }
    }, e.prototype.maybeRestoreFocus = function() {
      var n = this, r = this.adapter.isFocused(), i = this.adapter.getOwnerDocument ? this.adapter.getOwnerDocument() : document, a = i.activeElement && this.adapter.isElementInContainer(i.activeElement);
      (r || a) && setTimeout(function() {
        n.adapter.restoreFocus();
      }, ya.TOUCH_EVENT_WAIT_MS);
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
var _u = {
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
function cp(t) {
  return !!t.document && typeof t.document.createElement == "function";
}
function dp(t, e) {
  if (cp(t) && e in _u) {
    var n = t.document.createElement("div"), r = _u[e], i = r.standard, a = r.prefixed, o = i in n.style;
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
var Gi = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
}, Ri = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected",
  SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
}, fp = {
  FOCUS_ROOT_INDEX: -1
}, Ui;
(function(t) {
  t[t.NONE = 0] = "NONE", t[t.LIST_ROOT = 1] = "LIST_ROOT", t[t.FIRST_ITEM = 2] = "FIRST_ITEM", t[t.LAST_ITEM = 3] = "LAST_ITEM";
})(Ui || (Ui = {}));
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
var hp = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(n) {
      var r = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return r.closeAnimationEndTimerId = 0, r.defaultFocusState = Ui.LIST_ROOT, r.selectedIndex = -1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Gi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Ri;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return fp;
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
        var a = this.adapter.getAttributeFromElementAtIndex(i, Ri.SKIP_RESTORE_FOCUS) === "true";
        this.adapter.closeSurface(a), this.closeAnimationEndTimerId = setTimeout(function() {
          var o = r.adapter.getElementIndex(n);
          o >= 0 && r.adapter.isSelectableItemAtIndex(o) && r.setSelectedIndex(o);
        }, pd.numbers.TRANSITION_CLOSE_DURATION);
      }
    }, e.prototype.handleMenuSurfaceOpened = function() {
      switch (this.defaultFocusState) {
        case Ui.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case Ui.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case Ui.NONE:
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
      r >= 0 && (this.adapter.removeAttributeFromElementAtIndex(r, Ri.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(r, Gi.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(n, Gi.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(n, Ri.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = n;
    }, e.prototype.setEnabled = function(n, r) {
      this.validatedIndex(n), r ? (this.adapter.removeClassFromElementAtIndex(n, Ye.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, Ri.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(n, Ye.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, Ri.ARIA_DISABLED_ATTR, "true"));
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
var yt = {
  ACTIVATED: "mdc-select--activated",
  DISABLED: "mdc-select--disabled",
  FOCUSED: "mdc-select--focused",
  INVALID: "mdc-select--invalid",
  MENU_INVALID: "mdc-select__menu--invalid",
  OUTLINED: "mdc-select--outlined",
  REQUIRED: "mdc-select--required",
  ROOT: "mdc-select",
  WITH_LEADING_ICON: "mdc-select--with-leading-icon"
}, ds = {
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
}, $r = {
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
var vp = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(n, r) {
      r === void 0 && (r = {});
      var i = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return i.disabled = !1, i.isMenuOpen = !1, i.useDefaultValidation = !0, i.customValidity = !0, i.lastSelectedIndex = $r.UNSET_INDEX, i.clickDebounceTimeout = 0, i.recentlyClicked = !1, i.leadingIcon = r.leadingIcon, i.helperText = r.helperText, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return yt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return $r;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return ds;
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
      r === void 0 && (r = !1), i === void 0 && (i = !1), !(n >= this.adapter.getMenuItemCount()) && (n === $r.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(n).trim()), this.adapter.setSelectedIndex(n), r && this.adapter.closeMenu(), !i && this.lastSelectedIndex !== n && this.handleChange(), this.lastSelectedIndex = n);
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
      return n !== $r.UNSET_INDEX ? r[n] : "";
    }, e.prototype.getDisabled = function() {
      return this.disabled;
    }, e.prototype.setDisabled = function(n) {
      this.disabled = n, this.disabled ? (this.adapter.addClass(yt.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(yt.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
    }, e.prototype.openMenu = function() {
      this.adapter.addClass(yt.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true");
    }, e.prototype.setHelperTextContent = function(n) {
      this.helperText && this.helperText.setContent(n);
    }, e.prototype.layout = function() {
      if (this.adapter.hasLabel()) {
        var n = this.getValue().length > 0, r = this.adapter.hasClass(yt.FOCUSED), i = n || r, a = this.adapter.hasClass(yt.REQUIRED);
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
      this.adapter.removeClass(yt.ACTIVATED), this.isMenuOpen = !1, this.adapter.isSelectAnchorFocused() || this.blur();
    }, e.prototype.handleChange = function() {
      this.layout(), this.adapter.notifyChange(this.getValue());
      var n = this.adapter.hasClass(yt.REQUIRED);
      n && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.handleMenuItemAction = function(n) {
      this.setSelectedIndex(
        n,
        /** closeMenu */
        !0
      );
    }, e.prototype.handleFocus = function() {
      this.adapter.addClass(yt.FOCUSED), this.layout(), this.adapter.activateBottomLine();
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
      if (!(this.isMenuOpen || !this.adapter.hasClass(yt.FOCUSED))) {
        var r = Ot(n) === Ge.ENTER, i = Ot(n) === Ge.SPACEBAR, a = Ot(n) === Ge.ARROW_UP, o = Ot(n) === Ge.ARROW_DOWN, u = n.ctrlKey || n.metaKey;
        if (!u && (!i && n.key && n.key.length === 1 || i && this.adapter.isTypeaheadInProgress())) {
          var l = i ? " " : n.key, c = this.adapter.typeaheadMatchItem(l, this.getSelectedIndex());
          c >= 0 && this.setSelectedIndex(c), n.preventDefault();
          return;
        }
        !r && !i && !a && !o || (this.openMenu(), n.preventDefault());
      }
    }, e.prototype.notchOutline = function(n) {
      if (this.adapter.hasOutline()) {
        var r = this.adapter.hasClass(yt.FOCUSED);
        if (n) {
          var i = $r.LABEL_SCALE, a = this.adapter.getLabelWidth() * i;
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
      this.useDefaultValidation || (this.customValidity = n), this.adapter.setSelectAnchorAttr("aria-invalid", (!n).toString()), n ? (this.adapter.removeClass(yt.INVALID), this.adapter.removeMenuClass(yt.MENU_INVALID)) : (this.adapter.addClass(yt.INVALID), this.adapter.addMenuClass(yt.MENU_INVALID)), this.syncHelperTextValidity(n);
    }, e.prototype.isValid = function() {
      return this.useDefaultValidation && this.adapter.hasClass(yt.REQUIRED) && !this.adapter.hasClass(yt.DISABLED) ? this.getSelectedIndex() !== $r.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(n) {
      n ? this.adapter.addClass(yt.REQUIRED) : this.adapter.removeClass(yt.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", n.toString()), this.adapter.setLabelRequired(n);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var n = this.adapter.getAnchorElement();
      n && (this.adapter.setMenuAnchorElement(n), this.adapter.setMenuAnchorCorner(fi.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(yt.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(yt.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(yt.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var n = this.adapter.hasClass(yt.REQUIRED);
      n && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.syncHelperTextValidity = function(n) {
      if (this.helperText) {
        this.helperText.setValidity(n);
        var r = this.helperText.isVisible(), i = this.helperText.getId();
        r && i ? this.adapter.setSelectAnchorAttr(ds.ARIA_DESCRIBEDBY, i) : this.adapter.removeSelectAnchorAttr(ds.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.setClickDebounceTimeout = function() {
      var n = this;
      clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout(function() {
        n.recentlyClicked = !1;
      }, $r.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
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
var ei = {
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
var mp = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(n) {
      return t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return cr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return ei;
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
      return this.adapter.getAttr(ei.ARIA_HIDDEN) !== "true";
    }, e.prototype.setContent = function(n) {
      this.adapter.setContent(n);
    }, e.prototype.setValidation = function(n) {
      n ? this.adapter.addClass(cr.HELPER_TEXT_VALIDATION_MSG) : this.adapter.removeClass(cr.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.setValidationMsgPersistent = function(n) {
      n ? this.adapter.addClass(cr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT) : this.adapter.removeClass(cr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.getIsValidation = function() {
      return this.adapter.hasClass(cr.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.getIsValidationMsgPersistent = function() {
      return this.adapter.hasClass(cr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.setValidity = function(n) {
      var r = this.adapter.hasClass(cr.HELPER_TEXT_VALIDATION_MSG);
      if (r) {
        var i = this.adapter.hasClass(cr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT), a = !n || i;
        if (a) {
          this.showToScreenReader(), n ? this.adapter.removeAttr(ei.ROLE) : this.adapter.setAttr(ei.ROLE, "alert");
          return;
        }
        this.adapter.removeAttr(ei.ROLE), this.hide();
      }
    }, e.prototype.showToScreenReader = function() {
      this.adapter.removeAttr(ei.ARIA_HIDDEN);
    }, e.prototype.hide = function() {
      this.adapter.setAttr(ei.ARIA_HIDDEN, "true");
    }, e;
  }(wt)
), gp = /* @__PURE__ */ ce("<div><!></div>");
function pp(t, e) {
  xe(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "style", 3, ""), a = v(e, "static", 3, !1), o = v(e, "anchor", 3, !0), u = v(e, "fixed", 3, !1), l = v(e, "open", 31, () => ye(a())), c = v(e, "managed", 3, !1), d = v(e, "fullWidth", 3, !1), m = v(e, "quickOpen", 3, !1), f = v(e, "anchorElement", 15), g = v(e, "anchorMargin", 19, () => ({ top: 0, right: 0, bottom: 0, left: 0 })), h = v(e, "maxHeight", 3, 0), p = v(e, "horizontallyCenteredOnViewport", 3, !1), b = v(e, "openBottomBias", 3, 0), y = v(e, "neverRestoreFocus", 3, !1), E = /* @__PURE__ */ je(e, [
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
  ]), I, _ = /* @__PURE__ */ he(void 0), A = ye({}), S = ye({}), L = /* @__PURE__ */ he(void 0);
  ue("SMUI:list:role", "menu"), ue("SMUI:list:item:role", "menuitem"), Le(() => {
    var O, ee;
    I && o() && !((O = I.parentElement) != null && O.classList.contains("mdc-menu-surface--anchor")) && ((ee = I.parentElement) == null || ee.classList.add("mdc-menu-surface--anchor"), f(I.parentElement ?? void 0));
  }), Le(() => {
    s(_) && s(_).isOpen() !== l() && (l() ? s(_).open() : s(_).close());
  }), Le(() => {
    s(_) && s(_).setQuickOpen(m());
  }), Le(() => {
    s(_) && s(_).setFixedPosition(u());
  }), Le(() => {
    s(_) && s(_).setMaxHeight(h());
  }), Le(() => {
    s(_) && s(_).setIsHorizontallyCenteredOnViewport(p());
  });
  const T = fi;
  Le(() => {
    s(_) && e.anchorCorner != null && (typeof e.anchorCorner == "string" ? s(_).setAnchorCorner(T[e.anchorCorner]) : s(_).setAnchorCorner(e.anchorCorner));
  }), Le(() => {
    s(_) && s(_).setAnchorMargin(g());
  }), Le(() => {
    s(_) && s(_).setOpenBottomBias(b());
  });
  const w = _e("SMUI:menu-surface:mount"), k = _e("SMUI:menu-surface:unmount");
  at(() => {
    X(
      _,
      new pd({
        addClass: G,
        removeClass: z,
        hasClass: J,
        hasAnchor: () => !!f(),
        notifyClose: () => {
          c() || l(a()), l() || Ke(W(), "SMUIMenuSurfaceClosed");
        },
        notifyClosing: () => {
          c() || l(a()), l() || Ke(W(), "SMUIMenuSurfaceClosing");
        },
        notifyOpen: () => {
          c() || l(!0), l() && Ke(W(), "SMUIMenuSurfaceOpened");
        },
        notifyOpening: () => {
          l() || Ke(W(), "SMUIMenuSurfaceOpening");
        },
        isElementInContainer: (ee) => W().contains(ee),
        isRtl: () => getComputedStyle(W()).getPropertyValue("direction") === "rtl",
        setTransformOrigin: (ee) => {
          S["transform-origin"] = ee;
        },
        isFocused: () => document.activeElement === W(),
        saveFocus: () => {
          X(L, document.activeElement ?? void 0, !0);
        },
        restoreFocus: () => {
          !y() && (!I || W().contains(document.activeElement)) && s(L) && document.contains(s(L)) && "focus" in s(L) && s(L).focus();
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
          S.left = "left" in ee ? `${ee.left}px` : "", S.right = "right" in ee ? `${ee.right}px` : "", S.top = "top" in ee ? `${ee.top}px` : "", S.bottom = "bottom" in ee ? `${ee.bottom}px` : "";
        },
        setMaxHeight: (ee) => {
          S["max-height"] = ee;
        }
      }),
      !0
    );
    const O = {
      get open() {
        return l();
      },
      set open(ee) {
        l(ee);
      },
      closeProgrammatic: R
    };
    return w && w(O), s(_).init(), () => {
      var Z, ie;
      k && k(O);
      const ee = s(_).isHoistedElement;
      (Z = s(_)) == null || Z.destroy(), ee && ((ie = W().parentNode) == null || ie.removeChild(W()));
    };
  }), En(() => {
    var O;
    o() && W() && ((O = W().parentElement) == null || O.classList.remove("mdc-menu-surface--anchor"));
  });
  function J(O) {
    return O in A ? A[O] : W().classList.contains(O);
  }
  function G(O) {
    A[O] || (A[O] = !0);
  }
  function z(O) {
    (!(O in A) || A[O]) && (A[O] = !1);
  }
  function R(O) {
    var ee;
    (ee = s(_)) == null || ee.close(O), l(!1);
  }
  function C(O) {
    s(_) && l() && !c() && s(_).handleBodyClick(O);
  }
  function F() {
    return l();
  }
  function N(O) {
    l(O);
  }
  function K(O, ee) {
    if (s(_) == null)
      throw new Error("Instance is not defined.");
    return s(_).setAbsolutePosition(O, ee);
  }
  function ne(O) {
    if (s(_) == null)
      throw new Error("Instance is not defined.");
    return s(_).setIsHoisted(O);
  }
  function U() {
    if (s(_) == null)
      throw new Error("Instance is not defined.");
    return s(_).isFixed();
  }
  function D() {
    if (s(_) == null)
      throw new Error("Instance is not defined.");
    return s(_).flipCornerHorizontally();
  }
  function W() {
    return I;
  }
  var Ie = {
    isOpen: F,
    setOpen: N,
    setAbsolutePosition: K,
    setIsHoisted: ne,
    isFixed: U,
    flipCornerHorizontally: D,
    getElement: W
  }, B = gp();
  Jn("click", nl.body, C, !0);
  var P = (O) => {
    var ee;
    s(_) && !c() && s(_).handleKeydown(O), (ee = e.onkeydown) == null || ee.call(e, O);
  };
  Ue(
    B,
    (O, ee) => ({
      class: O,
      style: ee,
      role: "dialog",
      ...E,
      onkeydown: P
    }),
    [
      () => Me({
        "mdc-menu-surface": !0,
        "mdc-menu-surface--fixed": u(),
        "mdc-menu-surface--open": a(),
        "smui-menu-surface--static": a(),
        "mdc-menu-surface--fullwidth": d(),
        ...A,
        [r()]: !0
      }),
      () => Object.entries(S).map(([O, ee]) => `${O}: ${ee};`).concat([i()]).join(" ")
    ]
  );
  var M = de(B);
  return Ee(M, () => e.children ?? ve), Ce(B, (O) => I = O, () => I), Pe(B, (O, ee) => Q == null ? void 0 : Q(O, ee), n), x(t, B), we(Ie);
}
function fs(t, { addClass: e = (r) => t.classList.add(r), removeClass: n = (r) => t.classList.remove(r) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      n("mdc-menu-surface--anchor");
    }
  };
}
function bp(t, e) {
  xe(e, !0);
  const { closest: n } = ca;
  let r = v(e, "use", 19, () => []), i = v(e, "class", 3, ""), a = v(e, "open", 15, !1), o = v(e, "anchorElement", 15), u = v(e, "managed", 3, !1), l = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "open",
    "anchorElement",
    "managed",
    "children"
  ]), c, d = /* @__PURE__ */ he(void 0), m = /* @__PURE__ */ he(void 0), f = /* @__PURE__ */ he(void 0);
  ue("SMUI:menu-surface:mount", (T) => {
    s(m) || X(m, T, !0);
  });
  const g = _e("SMUI:list:mount");
  ue("SMUI:list:mount", (T) => {
    s(f) || X(f, T, !0), g && g(T);
  });
  const h = _e("SMUI:menu:mount"), p = _e("SMUI:menu:unmount");
  at(() => (X(
    d,
    new hp({
      addClassToElementAtIndex: (T, w) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).addClassForElementIndex(T, w);
      },
      removeClassFromElementAtIndex: (T, w) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).removeClassForElementIndex(T, w);
      },
      addAttributeToElementAtIndex: (T, w, k) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).setAttributeForElementIndex(T, w, k);
      },
      removeAttributeFromElementAtIndex: (T, w) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).removeAttributeForElementIndex(T, w);
      },
      getAttributeFromElementAtIndex: (T, w) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).getAttributeFromElementIndex(T, w);
      },
      elementContainsClass: (T, w) => T.classList.contains(w),
      closeSurface: (T) => {
        var w;
        u() || ((w = s(m)) == null || w.closeProgrammatic(T), Ke(S(), "SMUIMenuClosedProgrammatically"));
      },
      getElementIndex: (T) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).getOrderedList().map((w) => w.element).indexOf(T);
      },
      notifySelected: (T) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        Ke(S(), "SMUIMenuSelected", {
          index: T.index,
          item: s(f).getOrderedList()[T.index].element
        });
      },
      getMenuItemCount: () => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).items.length;
      },
      focusItemAtIndex: (T) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).focusItemAtIndex(T);
      },
      focusListRoot: () => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        "focus" in s(f).element && s(f).element.focus();
      },
      isSelectableItemAtIndex: (T) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return !!n(s(f).getOrderedList()[T].element, `.${Gi.MENU_SELECTION_GROUP}`);
      },
      getSelectedSiblingOfItemAtIndex: (T) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        const w = s(f).getOrderedList(), k = n(w[T].element, `.${Gi.MENU_SELECTION_GROUP}`), J = k == null ? void 0 : k.querySelector(`.${Gi.MENU_SELECTED_LIST_ITEM}`);
        return J ? w.map((G) => G.element).indexOf(J) : -1;
      }
    }),
    !0
  ), h && h(s(d)), s(d).init(), () => {
    var T;
    p && s(d) && p(s(d)), (T = s(d)) == null || T.destroy();
  }));
  function b(T) {
    s(d) && s(d).handleKeydown(T);
  }
  function y() {
    return a();
  }
  function E(T) {
    a(T);
  }
  function I(T) {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    s(d).setDefaultFocusState(T);
  }
  function _() {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    return s(d).getSelectedIndex();
  }
  function A() {
    return c;
  }
  function S() {
    return c.getElement();
  }
  var L = {
    isOpen: y,
    setOpen: E,
    setDefaultFocusState: I,
    getSelectedIndex: _,
    getMenuSurface: A,
    getElement: S
  };
  {
    let T = /* @__PURE__ */ fe(() => Me({ "mdc-menu": !0, [i()]: !0 }));
    Ce(
      pp(t, Je(
        {
          get use() {
            return r();
          },
          get class() {
            return s(T);
          },
          get managed() {
            return u();
          }
        },
        () => l,
        {
          onkeydown: (w) => {
            var k;
            b(w), (k = e.onkeydown) == null || k.call(e, w);
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
            var J = re(), G = Y(J);
            Ee(G, () => e.children ?? ve), x(w, J);
          },
          $$slots: { default: !0 }
        }
      )),
      (w) => c = w,
      () => c
    );
  }
  return we(L);
}
function _p(t, e) {
  xe(e, !0);
  const { closest: n, matches: r } = ca;
  let i = _e("SMUI:list:nav"), a = v(e, "use", 19, () => []), o = v(e, "class", 3, ""), u = v(e, "nonInteractive", 3, !1), l = v(e, "dense", 3, !1), c = v(e, "textualList", 3, !1), d = v(e, "avatarList", 3, !1), m = v(e, "iconList", 3, !1), f = v(e, "imageList", 3, !1), g = v(e, "thumbnailList", 3, !1), h = v(e, "videoList", 3, !1), p = v(e, "twoLine", 3, !1), b = v(e, "threeLine", 3, !1), y = v(e, "vertical", 3, !0), E = v(e, "wrapFocus", 19, () => _e("SMUI:list:wrapFocus") ?? !1), I = v(e, "singleSelection", 3, !1), _ = v(e, "disabledItemsFocusable", 3, !1), A = v(e, "selectedIndex", 31, () => -1), S = v(e, "radioList", 3, !1), L = v(e, "checkList", 3, !1), T = v(e, "hasTypeahead", 3, !1), w = v(e, "component", 3, Wr), k = v(e, "tag", 3, i ? "nav" : "ul"), J = /* @__PURE__ */ je(e, [
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
  ]), G, z = /* @__PURE__ */ he(void 0), R = [], C = _e("SMUI:list:role");
  const F = /* @__PURE__ */ new WeakMap();
  let N = _e("SMUI:dialog:selection"), K = _e("SMUI:addLayoutListener"), ne;
  ue("SMUI:list:nonInteractive", u()), ue("SMUI:separator:context", "list"), C || (I() ? (C = "listbox", ue("SMUI:list:item:role", "option")) : S() ? (C = "radiogroup", ue("SMUI:list:item:role", "radio")) : L() ? (C = "group", ue("SMUI:list:item:role", "checkbox")) : (C = "list", ue("SMUI:list:item:role", void 0))), Le(() => {
    s(z) && s(z).setVerticalOrientation(y());
  }), Le(() => {
    s(z) && s(z).setWrapFocus(E());
  }), Le(() => {
    s(z) && s(z).setHasTypeahead(T());
  }), Le(() => {
    s(z) && s(z).setSingleSelection(I());
  }), Le(() => {
    s(z) && s(z).setDisabledItemsFocusable(_());
  }), Le(() => {
    s(z) && I() && V() !== A() && s(z).setSelectedIndex(A());
  }), K && (ne = K(Ne)), ue("SMUI:list:item:mount", (ge) => {
    R.push(ge), F.set(ge.element, ge), I() && ge.selected && A(Re(ge.element));
  }), ue("SMUI:list:item:unmount", (ge) => {
    const q = (ge && R.findIndex((j) => j === ge)) ?? -1;
    q !== -1 && (R.splice(q, 1), F.delete(ge.element));
  });
  const U = _e("SMUI:list:mount"), D = _e("SMUI:list:unmount");
  at(() => {
    X(
      z,
      new up({
        addClassForElementIndex: Z,
        focusItemAtIndex: me,
        getAttributeForElementIndex: (q, j) => {
          var ae;
          return ((ae = O()[q]) == null ? void 0 : ae.getAttr(j)) ?? null;
        },
        getFocusedElementIndex: () => document.activeElement ? O().map((q) => q.element).indexOf(document.activeElement) : -1,
        getListItemCount: () => R.length,
        getPrimaryTextAtIndex: Te,
        hasCheckboxAtIndex: (q) => {
          var j;
          return ((j = O()[q]) == null ? void 0 : j.hasCheckbox) ?? !1;
        },
        hasRadioAtIndex: (q) => {
          var j;
          return ((j = O()[q]) == null ? void 0 : j.hasRadio) ?? !1;
        },
        isCheckboxCheckedAtIndex: (q) => {
          const j = O()[q];
          return ((j == null ? void 0 : j.hasCheckbox) && j.checked) ?? !1;
        },
        isFocusInsideList: () => G != null && De() !== document.activeElement && De().contains(document.activeElement),
        isRootFocused: () => G != null && document.activeElement === De(),
        listItemAtIndexHasClass: ee,
        notifyAction: (q) => {
          A(q), G != null && Ke(De(), "SMUIListAction", { index: q });
        },
        notifySelectionChange: (q) => {
          G != null && Ke(De(), "SMUIListSelectionChange", { changedIndices: q });
        },
        removeClassForElementIndex: ie,
        setAttributeForElementIndex: Ae,
        setCheckedCheckboxOrRadioAtIndex: (q, j) => {
          O()[q].checked = j;
        },
        setTabIndexForListItemChildren: (q, j) => {
          const ae = O()[q];
          Array.prototype.forEach.call(ae.element.querySelectorAll("button:not(:disabled), a"), (ft) => {
            ft.setAttribute("tabindex", j);
          });
        }
      }),
      !0
    );
    const ge = {
      get element() {
        return De();
      },
      get items() {
        return R;
      },
      get typeaheadInProgress() {
        if (!s(z))
          throw new Error("Instance is undefined.");
        return s(z).isTypeaheadInProgress();
      },
      typeaheadMatchItem(q, j) {
        if (!s(z))
          throw new Error("Instance is undefined.");
        return s(z).typeaheadMatchItem(
          q,
          j,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: O,
      focusItemAtIndex: me,
      addClassForElementIndex: Z,
      removeClassForElementIndex: ie,
      setAttributeForElementIndex: Ae,
      removeAttributeForElementIndex: te,
      getAttributeFromElementIndex: oe,
      getPrimaryTextAtIndex: Te
    };
    return U && U(ge), s(z).init(), s(z).layout(), () => {
      var q;
      D && D(ge), (q = s(z)) == null || q.destroy();
    };
  }), En(() => {
    ne && ne();
  });
  function W(ge) {
    s(z) && ge.target && s(z).handleKeydown(ge, ge.target.classList.contains("mdc-deprecated-list-item"), Re(ge.target));
  }
  function Ie(ge) {
    s(z) && ge.target && s(z).handleFocusIn(Re(ge.target));
  }
  function B(ge) {
    s(z) && ge.target && s(z).handleFocusOut(Re(ge.target));
  }
  function P(ge) {
    s(z) && ge.target && s(z).handleClick(Re(ge.target), !r(ge.target, 'input[type="checkbox"], input[type="radio"]'), ge);
  }
  function M(ge) {
    if (S() || L()) {
      const q = Re(ge.target);
      if (q !== -1) {
        const j = O()[q];
        j && (S() && !j.checked || L()) && (r(ge.detail.target, 'input[type="checkbox"], input[type="radio"]') || (j.checked = !j.checked), j.activateRipple(), window.requestAnimationFrame(() => {
          j.deactivateRipple();
        }));
      }
    }
  }
  function O() {
    return G == null ? [] : [...De().children].map((ge) => F.get(ge)).filter((ge) => ge && ge._smui_list_item_accessor);
  }
  function ee(ge, q) {
    const j = O()[ge];
    return (j && j.hasClass(q)) ?? !1;
  }
  function Z(ge, q) {
    const j = O()[ge];
    j && j.addClass(q);
  }
  function ie(ge, q) {
    const j = O()[ge];
    j && j.removeClass(q);
  }
  function Ae(ge, q, j) {
    const ae = O()[ge];
    ae && ae.addAttr(q, j);
  }
  function te(ge, q) {
    const j = O()[ge];
    j && j.removeAttr(q);
  }
  function oe(ge, q) {
    const j = O()[ge];
    return j ? j.getAttr(q) : null;
  }
  function Te(ge) {
    const q = O()[ge];
    return (q && q.getPrimaryText()) ?? "";
  }
  function Re(ge) {
    const q = n(ge, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return q && r(q, ".mdc-deprecated-list-item") ? O().map((j) => j == null ? void 0 : j.element).indexOf(q) : -1;
  }
  function Ne() {
    if (!s(z))
      throw new Error("Instance is undefined.");
    return s(z).layout();
  }
  function Fe(ge, q) {
    if (!s(z))
      throw new Error("Instance is undefined.");
    return s(z).setEnabled(ge, q);
  }
  function He() {
    if (!s(z))
      throw new Error("Instance is undefined.");
    return s(z).isTypeaheadInProgress();
  }
  function V() {
    if (!s(z))
      throw new Error("Instance is undefined.");
    return s(z).getSelectedIndex();
  }
  function $() {
    if (!s(z))
      throw new Error("Instance is undefined.");
    return s(z).getFocusedItemIndex();
  }
  function me(ge) {
    const q = O()[ge];
    q && "focus" in q.element && q.element.focus();
  }
  function De() {
    return G.getElement();
  }
  var Ve = {
    layout: Ne,
    setEnabled: Fe,
    getTypeaheadInProgress: He,
    getSelectedIndex: V,
    getFocusedItemIndex: $,
    focusItemAtIndex: me,
    getElement: De
  }, ut = re(), gt = Y(ut);
  {
    let ge = /* @__PURE__ */ fe(() => Me({
      "mdc-deprecated-list": !0,
      "mdc-deprecated-list--non-interactive": u(),
      "mdc-deprecated-list--dense": l(),
      "mdc-deprecated-list--textual-list": c(),
      "mdc-deprecated-list--avatar-list": d() || N,
      "mdc-deprecated-list--icon-list": m(),
      "mdc-deprecated-list--image-list": f(),
      "mdc-deprecated-list--thumbnail-list": g(),
      "mdc-deprecated-list--video-list": h(),
      "mdc-deprecated-list--two-line": p(),
      "smui-list--three-line": b() && !p(),
      [o()]: !0
    }));
    rr(gt, w, (q, j) => {
      Ce(
        j(q, Je(
          {
            get tag() {
              return k();
            },
            get use() {
              return a();
            },
            get class() {
              return s(ge);
            },
            get role() {
              return C;
            }
          },
          () => J,
          {
            onkeydown: (ae) => {
              var ke;
              W(ae), (ke = e.onkeydown) == null || ke.call(e, ae);
            },
            onfocusin: (ae) => {
              var ke;
              Ie(ae), (ke = e.onfocusin) == null || ke.call(e, ae);
            },
            onfocusout: (ae) => {
              var ke;
              B(ae), (ke = e.onfocusout) == null || ke.call(e, ae);
            },
            onclick: (ae) => {
              var ke;
              P(ae), (ke = e.onclick) == null || ke.call(e, ae);
            },
            onSMUIAction: (ae) => {
              var ke;
              M(ae), (ke = e.onSMUIAction) == null || ke.call(e, ae);
            },
            children: (ae, ke) => {
              var ft = re(), It = Y(ft);
              Ee(It, () => e.children ?? ve), x(ae, ft);
            },
            $$slots: { default: !0 }
          }
        )),
        (ae) => G = ae,
        () => G
      );
    });
  }
  return x(t, ut), we(Ve);
}
let yp = 0;
var Ip = /* @__PURE__ */ ce('<span class="mdc-deprecated-list-item__ripple"></span>'), Sp = /* @__PURE__ */ ce("<!><!>", 1);
function Ep(t, e) {
  xe(e, !0);
  let n = () => {
  };
  function r(Z) {
    return Z === n;
  }
  let i = _e("SMUI:list:item:nav"), a = v(e, "use", 19, () => []), o = v(e, "class", 3, ""), u = v(e, "style", 3, ""), l = v(e, "nonInteractive", 19, () => _e("SMUI:list:nonInteractive") ?? !1), c = v(e, "ripple", 19, () => !l()), d = v(e, "wrapper", 3, !1), m = v(e, "activated", 15, !1), f = v(e, "role", 19, () => d() ? "presentation" : _e("SMUI:list:item:role")), g = v(e, "selected", 15, !1), h = v(e, "disabled", 3, !1), p = v(e, "skipRestoreFocus", 3, !1), b = v(e, "tabindex", 15, n), y = v(e, "inputId", 19, () => "SMUI-form-field-list-" + yp++), E = v(e, "component", 3, Wr), I = v(e, "tag", 19, () => i ? e.href ? "a" : "span" : "li"), _ = /* @__PURE__ */ je(e, [
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
  ue("SMUI:list:nonInteractive", void 0), ue("SMUI:list:item:role", void 0);
  let A, S = ye({}), L = ye({}), T = ye({}), w = /* @__PURE__ */ he(void 0), k = /* @__PURE__ */ he(void 0);
  const J = /* @__PURE__ */ fe(() => r(b()) ? !l() && !h() && (g() || s(w) && s(w).checked) ? 0 : -1 : b());
  ue("SMUI:generic:input:props", { id: y() }), ue("SMUI:separator:context", void 0), ue("SMUI:generic:input:mount", (Z) => {
    ("_smui_checkbox_accessor" in Z || "_smui_radio_accessor" in Z) && X(w, Z, !0);
  }), ue("SMUI:generic:input:unmount", () => {
    X(w, void 0);
  });
  const G = _e("SMUI:list:item:mount"), z = _e("SMUI:list:item:unmount");
  at(() => {
    if (!g() && !l()) {
      let ie = !0, Ae = A.getElement();
      for (; Ae.previousElementSibling; )
        if (Ae = Ae.previousElementSibling, Ae.nodeType === 1 && Ae.classList.contains("mdc-deprecated-list-item") && !Ae.classList.contains("mdc-deprecated-list-item--disabled")) {
          ie = !1;
          break;
        }
      ie && X(k, window.requestAnimationFrame(() => D(Ae)), !0);
    }
    const Z = {
      _smui_list_item_accessor: !0,
      get element() {
        return P();
      },
      get selected() {
        return g();
      },
      set selected(ie) {
        g(ie);
      },
      hasClass: R,
      addClass: C,
      removeClass: F,
      getAttr: K,
      addAttr: ne,
      removeAttr: U,
      getPrimaryText: B,
      // For inputs within item.
      get checked() {
        return (s(w) && s(w).checked) ?? !1;
      },
      set checked(ie) {
        s(w) && (s(w).checked = !!ie);
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
      action: Ie,
      get tabindex() {
        return s(J);
      },
      set tabindex(ie) {
        b(ie);
      },
      get disabled() {
        return h();
      },
      get activated() {
        return m();
      },
      set activated(ie) {
        m(ie);
      }
    };
    return G && G(Z), () => {
      z && z(Z);
    };
  }), En(() => {
    s(k) && window.cancelAnimationFrame(s(k));
  });
  function R(Z) {
    return Z in S ? S[Z] : P().classList.contains(Z);
  }
  function C(Z) {
    S[Z] || (S[Z] = !0);
  }
  function F(Z) {
    (!(Z in S) || S[Z]) && (S[Z] = !1);
  }
  function N(Z, ie) {
    L[Z] != ie && (ie === "" || ie == null ? delete L[Z] : L[Z] = ie);
  }
  function K(Z) {
    return Z in T ? T[Z] ?? null : P().getAttribute(Z);
  }
  function ne(Z, ie) {
    T[Z] !== ie && (T[Z] = ie);
  }
  function U(Z) {
    (!(Z in T) || T[Z] != null) && (T[Z] = void 0);
  }
  function D(Z) {
    let ie = !0;
    for (; Z.nextElementSibling; )
      if (Z = Z.nextElementSibling, Z.nodeType === 1 && Z.classList.contains("mdc-deprecated-list-item")) {
        const Ae = Z.attributes.getNamedItem("tabindex");
        if (Ae && Ae.value === "0") {
          ie = !1;
          break;
        }
      }
    ie && b(0);
  }
  function W(Z) {
    const ie = Z.key === "Enter", Ae = Z.key === "Space";
    (ie || Ae) && Ie(Z);
  }
  function Ie(Z) {
    h() || Ke(P(), "SMUIAction", Z);
  }
  function B() {
    const Z = P(), ie = Z.querySelector(".mdc-deprecated-list-item__primary-text");
    if (ie)
      return ie.textContent ?? "";
    const Ae = Z.querySelector(".mdc-deprecated-list-item__text");
    return Ae ? Ae.textContent ?? "" : Z.textContent ?? "";
  }
  function P() {
    return A.getElement();
  }
  var M = { action: Ie, getPrimaryText: B, getElement: P }, O = re(), ee = Y(O);
  {
    let Z = /* @__PURE__ */ fe(() => [
      ...l() ? [] : [
        [
          Qt,
          {
            ripple: !s(w),
            unbounded: !1,
            color: (m() || g()) && e.color == null ? "primary" : e.color,
            disabled: h(),
            addClass: C,
            removeClass: F,
            addStyle: N
          }
        ]
      ],
      ...a()
    ]), ie = /* @__PURE__ */ fe(() => Me({
      "mdc-deprecated-list-item": !d(),
      "mdc-deprecated-list-item__wrapper": d(),
      "mdc-deprecated-list-item--activated": m(),
      "mdc-deprecated-list-item--selected": g(),
      "mdc-deprecated-list-item--disabled": h(),
      "mdc-menu-item--selected": !i && f() === "menuitem" && g(),
      "smui-menu-item--non-interactive": l(),
      ...S,
      [o()]: !0
    })), Ae = /* @__PURE__ */ fe(() => Object.entries(L).map(([oe, Te]) => `${oe}: ${Te};`).concat([u()]).join(" ")), te = /* @__PURE__ */ fe(() => p() || void 0);
    rr(ee, E, (oe, Te) => {
      Ce(
        Te(oe, Je(
          {
            get tag() {
              return I();
            },
            get use() {
              return s(Z);
            },
            get class() {
              return s(ie);
            },
            get style() {
              return s(Ae);
            }
          },
          () => i && m() ? { "aria-current": "page" } : {},
          () => !i || d() ? { role: f() } : {},
          () => !i && f() === "option" ? { "aria-selected": g() ? "true" : "false" } : {},
          () => !i && (f() === "radio" || f() === "checkbox") ? {
            "aria-checked": s(w) && s(w).checked ? "true" : "false"
          } : {},
          () => i ? {} : { "aria-disabled": h() ? "true" : "false" },
          {
            get "data-menu-item-skip-restore-focus"() {
              return s(te);
            },
            get tabindex() {
              return s(J);
            },
            get href() {
              return e.href;
            }
          },
          () => T,
          () => _,
          {
            onclick: (Re) => {
              var Ne;
              Ie(Re), (Ne = e.onclick) == null || Ne.call(e, Re);
            },
            onkeydown: (Re) => {
              var Ne;
              W(Re), (Ne = e.onkeydown) == null || Ne.call(e, Re);
            },
            children: (Re, Ne) => {
              var Fe = Sp(), He = Y(Fe);
              {
                var V = (me) => {
                  var De = Ip();
                  x(me, De);
                };
                se(He, (me) => {
                  c() && me(V);
                });
              }
              var $ = be(He);
              Ee($, () => e.children ?? ve), x(Re, Fe);
            },
            $$slots: { default: !0 }
          }
        )),
        (Re) => A = Re,
        () => A
      );
    });
  }
  return x(t, O), we(M);
}
let Ap = 0;
var Cp = /* @__PURE__ */ ce("<div><!></div>");
function Tp(t, e) {
  xe(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "id", 19, () => "SMUI-select-helper-text-" + Ap++), a = v(e, "persistent", 3, !1), o = v(e, "validationMsg", 3, !1), u = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "id",
    "persistent",
    "validationMsg",
    "children"
  ]), l, c = /* @__PURE__ */ he(void 0), d = ye({}), m = ye({}), f = /* @__PURE__ */ he(void 0);
  const g = _e("SMUI:select:helper-text:id"), h = _e("SMUI:select:helper-text:mount"), p = _e("SMUI:select:helper-text:unmount");
  at(() => (X(
    c,
    new mp({
      addClass: y,
      removeClass: E,
      hasClass: b,
      getAttr: I,
      setAttr: _,
      removeAttr: A,
      setContent: (G) => {
        X(f, G, !0);
      }
    }),
    !0
  ), g && g(i()), h && h(s(c)), s(c).init(), () => {
    var G;
    p && s(c) && p(s(c)), (G = s(c)) == null || G.destroy();
  }));
  function b(G) {
    return G in d ? d[G] : S().classList.contains(G);
  }
  function y(G) {
    d[G] || (d[G] = !0);
  }
  function E(G) {
    (!(G in d) || d[G]) && (d[G] = !1);
  }
  function I(G) {
    return G in m ? m[G] ?? null : S().getAttribute(G);
  }
  function _(G, z) {
    m[G] !== z && (m[G] = z);
  }
  function A(G) {
    (!(G in m) || m[G] != null) && (m[G] = void 0);
  }
  function S() {
    return l;
  }
  var L = { getElement: S }, T = Cp();
  Ue(
    T,
    (G) => ({
      class: G,
      "aria-hidden": a() ? void 0 : "true",
      id: i(),
      ...m,
      ...u
    }),
    [
      () => Me({
        "mdc-select-helper-text": !0,
        "mdc-select-helper-text--validation-msg": o(),
        "mdc-select-helper-text--validation-msg-persistent": a(),
        ...d,
        [r()]: !0
      })
    ]
  );
  var w = de(T);
  {
    var k = (G) => {
      var z = re(), R = Y(z);
      Ee(R, () => e.children ?? ve), x(G, z);
    }, J = (G) => {
      var z = vt();
      Oe(() => $e(z, s(f))), x(G, z);
    };
    se(w, (G) => {
      s(f) == null ? G(k) : G(J, !1);
    });
  }
  return Ce(T, (G) => l = G, () => l), Pe(T, (G, z) => Q == null ? void 0 : Q(G, z), n), x(t, T), we(L);
}
let xp = 0;
var wp = /* @__PURE__ */ ce("<input/>"), Lp = /* @__PURE__ */ ce('<span class="mdc-select__ripple"></span>'), Op = /* @__PURE__ */ ce('<div><!> <div><!> <!> <!> <!> <span><span> </span></span> <span><svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"><polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon><polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon></svg></span> <!></div> <!></div> <!>', 1);
function Rp(t, e) {
  xe(e, !0);
  const n = () => Bn(De, "$selectedTextStore", r), [r, i] = ir();
  let a = () => {
  };
  function o(H) {
    return H === a;
  }
  let u = v(e, "use", 19, () => []), l = v(e, "class", 3, ""), c = v(e, "style", 3, ""), d = v(e, "ripple", 3, !0), m = v(e, "disabled", 3, !1), f = v(e, "variant", 3, "standard"), g = v(e, "noLabel", 3, !1), h = v(e, "label", 3, void 0), p = v(e, "value", 15), b = v(e, "key", 3, (H) => H), y = v(e, "dirty", 15, !1), E = v(e, "invalid", 15, a), I = v(e, "updateInvalid", 19, () => o(E())), _ = v(e, "required", 3, !1), A = v(e, "inputId", 19, () => "SMUI-select-" + xp++), S = v(e, "hiddenInput", 3, !1), L = v(e, "withLeadingIcon", 3, a), T = v(e, "anchor$use", 19, () => []), w = v(e, "anchor$class", 3, ""), k = v(e, "selectedTextContainer$use", 19, () => []), J = v(e, "selectedTextContainer$class", 3, ""), G = v(e, "selectedText$use", 19, () => []), z = v(e, "selectedText$class", 3, ""), R = v(e, "dropdownIcon$use", 19, () => []), C = v(e, "dropdownIcon$class", 3, ""), F = v(e, "menu$class", 3, ""), N = /* @__PURE__ */ je(e, [
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
  const K = o(E());
  o(E()) && E(!1);
  let ne, U = /* @__PURE__ */ he(void 0), D = ye({}), W = ye({}), Ie, B = ye({}), P = /* @__PURE__ */ he(-1);
  const M = /* @__PURE__ */ fe(() => N.menu$id ?? A() + "-menu");
  let O = /* @__PURE__ */ he(void 0), ee = _e("SMUI:addLayoutListener"), Z, ie = /* @__PURE__ */ he(!1), Ae = ye({}), te = /* @__PURE__ */ he(void 0), oe = /* @__PURE__ */ he(void 0), Te = /* @__PURE__ */ he(!1), Re, Ne = _e("SMUI:select:context"), Fe, He, V, $, me;
  ue("SMUI:list:role", ""), ue("SMUI:list:nav", !1);
  const De = Vt("");
  ue("SMUI:select:selectedText", De);
  const Ve = Vt(p());
  Le(() => {
    Fn(Ve, p());
  }), ue("SMUI:select:value", Ve), Le(() => {
    s(U) && s(U).getValue() !== b()(p()) && s(U).setValue(b()(p()));
  });
  let ut = s(P);
  Le(() => {
    if (ut !== s(P))
      if (ut = s(P), s(U))
        s(U).setSelectedIndex(
          s(P),
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const H = Gt();
        p() !== H[s(P)] && p(H[s(P)]);
      }
  }), Le(() => {
    s(U) && s(U).getDisabled() !== m() && s(U).setDisabled(m());
  }), Le(() => {
    s(U) && y() && s(U).isValid() !== !E() && (I() ? E(!s(U).isValid()) : s(U).setValid(!E()));
  }), Le(() => {
    s(U) && s(U).getRequired() !== _() && s(U).setRequired(_());
  }), ee && (Z = ee(Ai)), ue("SMUI:select:leading-icon:mount", (H) => {
    Fe = H;
  }), ue("SMUI:select:leading-icon:unmount", () => {
    Fe = void 0;
  }), ue("SMUI:list:mount", (H) => {
    Re = H;
  }), ue("SMUI:select:helper-text:id", (H) => {
    X(O, H, !0);
  }), ue("SMUI:select:helper-text:mount", (H) => {
    He = H;
  }), ue("SMUI:select:helper-text:unmount", () => {
    X(O, void 0), He = void 0;
  }), at(() => (X(
    U,
    new vp(
      {
        // getSelectAdapterMethods
        // getMenuItemAttr: (menuItem: Element, attr: string) =>
        //   menuItem.getAttribute(attr),
        setSelectedText: (H) => {
          Fn(De, H);
        },
        isSelectAnchorFocused: () => document.activeElement === Ie,
        getSelectAnchorAttr: ft,
        setSelectAnchorAttr: It,
        removeSelectAnchorAttr: _t,
        addMenuClass: ae,
        removeMenuClass: ke,
        openMenu: () => {
          X(ie, !0);
        },
        closeMenu: () => {
          X(ie, !1);
        },
        getAnchorElement: () => Ie,
        setMenuAnchorElement: (H) => {
          X(te, H, !0);
        },
        setMenuAnchorCorner: (H) => {
          X(oe, H, !0);
        },
        setMenuWrapFocus: (H) => {
          X(Te, H, !0);
        },
        getSelectedIndex: () => s(P),
        setSelectedIndex: (H) => {
          ut = H, X(P, H, !0), p(Gt()[s(P)]);
        },
        focusMenuItemAtIndex: (H) => {
          Re.focusItemAtIndex(H);
        },
        getMenuItemCount: () => Re.items.length,
        getMenuItemValues: () => Gt().map(b()),
        getMenuItemTextAtIndex: (H) => Re.getPrimaryTextAtIndex(H),
        isTypeaheadInProgress: () => Re.typeaheadInProgress,
        typeaheadMatchItem: (H, Se) => Re.typeaheadMatchItem(H, Se),
        // getCommonAdapterMethods
        addClass: ge,
        removeClass: q,
        hasClass: gt,
        setRippleCenter: (H) => $ && $.setRippleCenter(H),
        activateBottomLine: () => $ && $.activate(),
        deactivateBottomLine: () => $ && $.deactivate(),
        notifyChange: (H) => {
          var Se;
          y(!0), I() && E(!((Se = s(U)) != null && Se.isValid())), Ke(qn(), "SMUISelectChange", { value: p(), index: s(P) });
        },
        // getOutlineAdapterMethods
        hasOutline: () => !!me,
        notchOutline: (H) => me && me.notch(H),
        closeOutline: () => me && me.closeNotch(),
        // getLabelAdapterMethods
        hasLabel: () => !!V,
        floatLabel: (H) => V && V.float(H),
        getLabelWidth: () => V ? V.getWidth() : 0,
        setLabelRequired: (H) => V && V.setRequired(H)
      },
      {
        get helperText() {
          return He;
        },
        get leadingIcon() {
          return Fe;
        }
      }
    ),
    !0
  ), X(P, Gt().indexOf(p()), !0), s(U).init(), Et(K), () => {
    var H;
    (H = s(U)) == null || H.destroy();
  })), En(() => {
    Z && Z();
  });
  function gt(H) {
    return H in D ? D[H] : qn().classList.contains(H);
  }
  function ge(H) {
    D[H] || (D[H] = !0);
  }
  function q(H) {
    (!(H in D) || D[H]) && (D[H] = !1);
  }
  function j(H, Se) {
    W[H] != Se && (Se === "" || Se == null ? delete W[H] : W[H] = Se);
  }
  function ae(H) {
    Ae[H] || (Ae[H] = !0);
  }
  function ke(H) {
    (!(H in Ae) || Ae[H]) && (Ae[H] = !1);
  }
  function ft(H) {
    return H in B ? B[H] ?? null : qn().getAttribute(H);
  }
  function It(H, Se) {
    B[H] !== Se && (B[H] = Se);
  }
  function _t(H) {
    (!(H in B) || B[H] != null) && (B[H] = void 0);
  }
  function Gt() {
    return Re.getOrderedList().map((H) => H.getValue());
  }
  function Er(H) {
    const Se = H.currentTarget.getBoundingClientRect();
    return (pt(H) ? H.touches[0].clientX : H.clientX) - Se.left;
  }
  function pt(H) {
    return "touches" in H;
  }
  function Nt() {
    if (s(U) == null)
      throw new Error("Instance is undefined.");
    return s(U).getUseDefaultValidation();
  }
  function Et(H) {
    var Se;
    (Se = s(U)) == null || Se.setUseDefaultValidation(H);
  }
  function Dn() {
    Ie.focus();
  }
  function Ai() {
    var H;
    (H = s(U)) == null || H.layout();
  }
  function qn() {
    return ne;
  }
  var Xe = {
    getUseDefaultValidation: Nt,
    setUseDefaultValidation: Et,
    focus: Dn,
    layout: Ai,
    getElement: qn
  }, et = Op(), tt = Y(et);
  Ue(tt, (H, Se, ht) => ({ class: H, style: Se, ...ht }), [
    () => Me({
      "mdc-select": !0,
      "mdc-select--required": _(),
      "mdc-select--disabled": m(),
      "mdc-select--filled": f() === "filled",
      "mdc-select--outlined": f() === "outlined",
      "smui-select--standard": f() === "standard",
      "mdc-select--with-leading-icon": o(L()) ? e.leadingIcon : L(),
      "mdc-select--no-label": g() || h() == null,
      "mdc-select--invalid": E(),
      "mdc-select--activated": s(ie),
      "mdc-data-table__pagination-rows-per-page-select": Ne === "data-table:pagination",
      ...D,
      [l()]: !0
    }),
    () => Object.entries(W).map(([H, Se]) => `${H}: ${Se};`).concat([c()]).join(" "),
    () => Vn(N, [
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
  var Ut = de(tt);
  {
    var gn = (H) => {
      var Se = wp();
      Ue(
        Se,
        (ht) => ({
          type: "hidden",
          required: _(),
          disabled: m(),
          value: p(),
          ...ht
        }),
        [() => it(N, "input$")],
        void 0,
        void 0,
        !0
      ), x(H, Se);
    };
    se(Ut, (H) => {
      S() && H(gn);
    });
  }
  var ot = be(Ut, 2), dt = (H) => {
    var Se;
    Ie.focus(), s(U) && s(U).handleClick(Er(H)), (Se = e.anchor$onclick) == null || Se.call(e, H);
  }, Lt = (H) => {
    var Se;
    s(U) && s(U).handleKeydown(H), (Se = e.onkeydown) == null || Se.call(e, H);
  }, nt = (H) => {
    var Se;
    s(U) && s(U).handleBlur(), Ke(qn(), "blur", H), (Se = e.anchor$onblur) == null || Se.call(e, H);
  }, Dt = (H) => {
    var Se;
    s(U) && s(U).handleFocus(), Ke(qn(), "focus", H), (Se = e.anchor$onfocus) == null || Se.call(e, H);
  };
  Ue(
    ot,
    (H, Se) => ({
      class: H,
      "aria-required": _() ? "true" : void 0,
      "aria-disabled": m() ? "true" : void 0,
      "aria-controls": s(M),
      "aria-expanded": s(ie) ? "true" : "false",
      "aria-describedby": s(O),
      role: "combobox",
      tabindex: "0",
      ...B,
      ...Se,
      onclick: dt,
      onkeydown: Lt,
      onblur: nt,
      onfocus: Dt
    }),
    [
      () => Me({ "mdc-select__anchor": !0, [w()]: !0 }),
      () => it(N, "anchor$")
    ]
  );
  var Mn = de(ot);
  {
    var Mt = (H) => {
      var Se = Lp();
      x(H, Se);
    };
    se(Mn, (H) => {
      f() === "filled" && H(Mt);
    });
  }
  var St = be(Mn, 2);
  {
    var Ft = (H) => {
      {
        let Se = /* @__PURE__ */ fe(() => A() + "-smui-label"), ht = /* @__PURE__ */ fe(() => n() !== ""), Pt = /* @__PURE__ */ fe(() => it(N, "label$"));
        Ce(
          Lo(H, Je(
            {
              get id() {
                return s(Se);
              },
              get floatAbove() {
                return s(ht);
              },
              get required() {
                return _();
              }
            },
            () => s(Pt),
            {
              children: (or, sr) => {
                var ha = re(), Ci = Y(ha);
                {
                  var Yr = (Zr) => {
                  }, Zo = (Zr) => {
                    var Qa = re(), va = Y(Qa);
                    {
                      var Al = (Cr) => {
                        var Qr = vt();
                        Oe(() => $e(Qr, h())), x(Cr, Qr);
                      }, Ja = (Cr) => {
                        var Qr = re(), Qo = Y(Qr);
                        Ee(Qo, h), x(Cr, Qr);
                      };
                      se(
                        va,
                        (Cr) => {
                          typeof h() == "string" ? Cr(Al) : Cr(Ja, !1);
                        },
                        !0
                      );
                    }
                    x(Zr, Qa);
                  };
                  se(Ci, (Zr) => {
                    h() == null ? Zr(Yr) : Zr(Zo, !1);
                  });
                }
                x(or, ha);
              },
              $$slots: { default: !0 }
            }
          )),
          (or) => V = or,
          () => V
        );
      }
    };
    se(St, (H) => {
      f() !== "outlined" && !g() && h() != null && H(Ft);
    });
  }
  var un = be(St, 2);
  {
    var jt = (H) => {
      {
        let Se = /* @__PURE__ */ fe(() => g() || h() == null), ht = /* @__PURE__ */ fe(() => it(N, "outline$"));
        Ce(
          vd(H, Je(
            {
              get noLabel() {
                return s(Se);
              }
            },
            () => s(ht),
            {
              children: (Pt, or) => {
                var sr = re(), ha = Y(sr);
                {
                  var Ci = (Yr) => {
                    {
                      let Zo = /* @__PURE__ */ fe(() => A() + "-smui-label"), Zr = /* @__PURE__ */ fe(() => n() !== ""), Qa = /* @__PURE__ */ fe(() => it(N, "label$"));
                      Ce(
                        Lo(Yr, Je(
                          {
                            get id() {
                              return s(Zo);
                            },
                            get floatAbove() {
                              return s(Zr);
                            },
                            get required() {
                              return _();
                            }
                          },
                          () => s(Qa),
                          {
                            children: (va, Al) => {
                              var Ja = re(), Cr = Y(Ja);
                              {
                                var Qr = (ma) => {
                                }, Qo = (ma) => {
                                  var Cl = re(), Xd = Y(Cl);
                                  {
                                    var Yd = (Ti) => {
                                      var ga = vt();
                                      Oe(() => $e(ga, h())), x(Ti, ga);
                                    }, Zd = (Ti) => {
                                      var ga = re(), Qd = Y(ga);
                                      Ee(Qd, h), x(Ti, ga);
                                    };
                                    se(
                                      Xd,
                                      (Ti) => {
                                        typeof h() == "string" ? Ti(Yd) : Ti(Zd, !1);
                                      },
                                      !0
                                    );
                                  }
                                  x(ma, Cl);
                                };
                                se(Cr, (ma) => {
                                  h() == null ? ma(Qr) : ma(Qo, !1);
                                });
                              }
                              x(va, Ja);
                            },
                            $$slots: { default: !0 }
                          }
                        )),
                        (va) => V = va,
                        () => V
                      );
                    }
                  };
                  se(ha, (Yr) => {
                    !g() && h() != null && Yr(Ci);
                  });
                }
                x(Pt, sr);
              },
              $$slots: { default: !0 }
            }
          )),
          (Pt) => me = Pt,
          () => me
        );
      }
    };
    se(un, (H) => {
      f() === "outlined" && H(jt);
    });
  }
  var cn = be(un, 2);
  Ee(cn, () => e.leadingIcon ?? ve);
  var $t = be(cn, 2);
  Ue($t, (H, Se) => ({ class: H, ...Se }), [
    () => Me({
      "mdc-select__selected-text-container": !0,
      [J()]: !0
    }),
    () => it(N, "selectedTextContainer$")
  ]);
  var Wn = de($t);
  Ue(
    Wn,
    (H, Se) => ({
      id: A() + "-smui-selected-text",
      class: H,
      role: "button",
      "aria-haspopup": "listbox",
      "aria-labelledby": A() + "-smui-label",
      ...Se
    }),
    [
      () => Me({
        "mdc-select__selected-text": !0,
        [z()]: !0
      }),
      () => it(N, "selectedText$")
    ]
  );
  var Xr = de(Wn);
  Pe(Wn, (H, Se) => Q == null ? void 0 : Q(H, Se), G), Pe($t, (H, Se) => Q == null ? void 0 : Q(H, Se), k);
  var dn = be($t, 2);
  Ue(dn, (H, Se) => ({ class: H, ...Se }), [
    () => Me({
      "mdc-select__dropdown-icon": !0,
      [C()]: !0
    }),
    () => it(N, "dropdownIcon$")
  ]), Pe(dn, (H, Se) => Q == null ? void 0 : Q(H, Se), R);
  var Xt = be(dn, 2);
  {
    var pn = (H) => {
      {
        let Se = /* @__PURE__ */ fe(() => it(N, "ripple$"));
        Ce(hd(H, Je(() => s(Se))), (ht) => $ = ht, () => $);
      }
    };
    se(Xt, (H) => {
      f() !== "outlined" && d() && H(pn);
    });
  }
  Ce(ot, (H) => Ie = H, () => Ie), Pe(ot, (H, Se) => Q == null ? void 0 : Q(H, Se), T);
  var ar = be(ot, 2);
  {
    let H = /* @__PURE__ */ fe(() => Me({
      "mdc-select__menu": !0,
      ...Ae,
      [F()]: !0
    })), Se = /* @__PURE__ */ fe(() => it(N, "menu$"));
    bp(ar, Je(
      {
        get class() {
          return s(H);
        },
        get id() {
          return s(M);
        },
        fullWidth: !0,
        anchor: !1,
        get anchorElement() {
          return s(te);
        },
        get anchorCorner() {
          return s(oe);
        }
      },
      () => s(Se),
      {
        onSMUIMenuSelected: (ht) => {
          var Pt;
          s(U) && s(U).handleMenuItemAction(ht.detail.index), (Pt = e.onSMUIMenuSelected) == null || Pt.call(e, ht);
        },
        onSMUIMenuSurfaceClosing: (ht) => {
          var Pt;
          s(U) && s(U).handleMenuClosing(), (Pt = e.onSMUIMenuSurfaceClosing) == null || Pt.call(e, ht);
        },
        onSMUIMenuSurfaceClosed: (ht) => {
          var Pt;
          s(U) && s(U).handleMenuClosed(), (Pt = e.onSMUIMenuSurfaceClosed) == null || Pt.call(e, ht);
        },
        onSMUIMenuSurfaceOpened: (ht) => {
          var Pt;
          s(U) && s(U).handleMenuOpened(), (Pt = e.onSMUIMenuSurfaceOpened) == null || Pt.call(e, ht);
        },
        get open() {
          return s(ie);
        },
        set open(ht) {
          X(ie, ht, !0);
        },
        children: (ht, Pt) => {
          {
            let or = /* @__PURE__ */ fe(() => it(N, "list$"));
            _p(ht, Je(
              {
                role: "listbox",
                get wrapFocus() {
                  return s(Te);
                }
              },
              () => s(or),
              {
                get selectedIndex() {
                  return s(P);
                },
                set selectedIndex(sr) {
                  X(P, sr, !0);
                },
                children: (sr, ha) => {
                  var Ci = re(), Yr = Y(Ci);
                  Ee(Yr, () => e.children ?? ve), x(sr, Ci);
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
  Ce(tt, (H) => ne = H, () => ne), Pe(tt, (H, Se) => Qt == null ? void 0 : Qt(H, Se), () => ({
    ripple: f() === "filled",
    unbounded: !1,
    addClass: ge,
    removeClass: q,
    addStyle: j
  })), Pe(tt, (H, Se) => fs == null ? void 0 : fs(H, Se), () => ({ addClass: ge, removeClass: q })), Pe(tt, (H, Se) => Q == null ? void 0 : Q(H, Se), u);
  var fa = be(tt, 2);
  {
    var Yo = (H) => {
      {
        let Se = /* @__PURE__ */ fe(() => it(N, "helperText$"));
        Tp(H, Je(() => s(Se), {
          children: (ht, Pt) => {
            var or = re(), sr = Y(or);
            Ee(sr, () => e.helperText ?? ve), x(ht, or);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    se(fa, (H) => {
      e.helperText && H(Yo);
    });
  }
  Oe(() => $e(Xr, n())), x(t, et);
  var Ar = we(Xe);
  return i(), Ar;
}
function Dp(t, e) {
  xe(e, !0);
  const n = () => Bn(d, "$selectedValue", r), [r, i] = ir();
  let a = v(e, "use", 19, () => []);
  v(e, "class", 3, "");
  let o = v(e, "value", 3, ""), u = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "value",
    "children"
  ]), l;
  const c = _e("SMUI:select:selectedText"), d = _e("SMUI:select:value");
  ue("SMUI:list:item:role", "option");
  const m = /* @__PURE__ */ fe(() => o() != null && o() !== "" && n() === o());
  at(f), En(f);
  function f() {
    s(m) && l && Fn(c, l.getPrimaryText());
  }
  function g() {
    return l.getElement();
  }
  var h = { getElement: g };
  Ce(
    Ep(t, Je(
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
          return s(m);
        }
      },
      () => u,
      {
        children: (b, y) => {
          var E = re(), I = Y(E);
          Ee(I, () => e.children ?? ve), x(b, E);
        },
        $$slots: { default: !0 }
      }
    )),
    (b) => l = b,
    () => l
  );
  var p = we(h);
  return i(), p;
}
function Mp(t, e) {
  xe(e, !0);
  let n = v(e, "data", 19, () => []);
  v(e, "placeholder", 3, "");
  let r = v(e, "label", 3, "");
  v(e, "description", 3, "");
  let i = v(e, "value", 15), a = v(e, "required", 3, !1);
  v(e, "size", 3, "sm");
  let o = v(e, "variant", 3, "standard"), u = v(e, "selectedOptionIndex", 31, () => -1), l = v(e, "disabled", 3, !1);
  function c(d) {
    return () => u(d);
  }
  Rp(t, {
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
    children: (d, m) => {
      var f = re(), g = Y(f);
      Qn(g, 17, n, Ni, (h, p, b) => {
        {
          let y = /* @__PURE__ */ fe(() => c(b));
          Dp(h, {
            get onclick() {
              return s(y);
            },
            get value() {
              return s(p).value;
            },
            children: (E, I) => {
              var _ = vt();
              Oe(() => $e(_, s(p).label)), x(E, _);
            },
            $$slots: { default: !0 }
          });
        }
      }), x(d, f);
    },
    $$slots: { default: !0 }
  }), we();
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
function Pp(t) {
  return t ? t.scrollHeight > t.offsetHeight : !1;
}
function Hp(t) {
  return t ? t.scrollTop === 0 : !1;
}
function Np(t) {
  return t ? Math.ceil(t.scrollHeight - t.scrollTop) === t.clientHeight : !1;
}
function Up(t) {
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
var Fp = (
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
var st = {
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
}, Ia = {
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
}, hs = {
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
var Oo;
(function(t) {
  t.POLL_SCROLL_POS = "poll_scroll_position", t.POLL_LAYOUT_CHANGE = "poll_layout_change";
})(Oo || (Oo = {}));
var kp = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(n) {
      var r = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return r.dialogOpen = !1, r.isFullscreen = !1, r.animationFrame = 0, r.animationTimer = 0, r.escapeKeyAction = Ia.CLOSE_ACTION, r.scrimClickAction = Ia.CLOSE_ACTION, r.autoStackButtons = !0, r.areButtonsStacked = !1, r.suppressDefaultPressSelector = Ia.SUPPRESS_DEFAULT_PRESS_SELECTOR, r.animFrame = new Fp(), r.contentScrollHandler = function() {
        r.handleScrollEvent();
      }, r.windowResizeHandler = function() {
        r.layout();
      }, r.windowOrientationChangeHandler = function() {
        r.layout();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return st;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Ia;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return hs;
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
      this.adapter.hasClass(st.STACKED) && this.setAutoStackButtons(!1), this.isFullscreen = this.adapter.hasClass(st.FULLSCREEN);
    }, e.prototype.destroy = function() {
      this.animationTimer && (clearTimeout(this.animationTimer), this.handleAnimationTimerEnd()), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.animFrame.cancelAll(), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler);
    }, e.prototype.open = function(n) {
      var r = this;
      this.dialogOpen = !0, this.adapter.notifyOpening(), this.adapter.addClass(st.OPENING), this.isFullscreen && this.adapter.registerContentEventHandler("scroll", this.contentScrollHandler), n && n.isAboveFullscreenDialog && this.adapter.addClass(st.SCRIM_HIDDEN), this.adapter.registerWindowEventHandler("resize", this.windowResizeHandler), this.adapter.registerWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), this.runNextAnimationFrame(function() {
        r.adapter.addClass(st.OPEN), r.adapter.addBodyClass(st.SCROLL_LOCK), r.layout(), r.animationTimer = setTimeout(function() {
          r.handleAnimationTimerEnd(), r.adapter.trapFocus(r.adapter.getInitialFocusEl()), r.adapter.notifyOpened();
        }, hs.DIALOG_ANIMATION_OPEN_TIME_MS);
      });
    }, e.prototype.close = function(n) {
      var r = this;
      n === void 0 && (n = ""), this.dialogOpen && (this.dialogOpen = !1, this.adapter.notifyClosing(n), this.adapter.addClass(st.CLOSING), this.adapter.removeClass(st.OPEN), this.adapter.removeBodyClass(st.SCROLL_LOCK), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), cancelAnimationFrame(this.animationFrame), this.animationFrame = 0, clearTimeout(this.animationTimer), this.animationTimer = setTimeout(function() {
        r.adapter.releaseFocus(), r.handleAnimationTimerEnd(), r.adapter.notifyClosed(n);
      }, hs.DIALOG_ANIMATION_CLOSE_TIME_MS));
    }, e.prototype.showSurfaceScrim = function() {
      var n = this;
      this.adapter.addClass(st.SURFACE_SCRIM_SHOWING), this.runNextAnimationFrame(function() {
        n.adapter.addClass(st.SURFACE_SCRIM_SHOWN);
      });
    }, e.prototype.hideSurfaceScrim = function() {
      this.adapter.removeClass(st.SURFACE_SCRIM_SHOWN), this.adapter.addClass(st.SURFACE_SCRIM_HIDING);
    }, e.prototype.handleSurfaceScrimTransitionEnd = function() {
      this.adapter.removeClass(st.SURFACE_SCRIM_HIDING), this.adapter.removeClass(st.SURFACE_SCRIM_SHOWING);
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
      this.animFrame.request(Oo.POLL_LAYOUT_CHANGE, function() {
        n.layoutInternal();
      });
    }, e.prototype.handleClick = function(n) {
      var r = this.adapter.eventTargetMatches(n.target, Ia.SCRIM_SELECTOR);
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
      this.animFrame.request(Oo.POLL_SCROLL_POS, function() {
        n.toggleScrollDividerHeader(), n.toggleScrollDividerFooter();
      });
    }, e.prototype.layoutInternal = function() {
      this.autoStackButtons && this.detectStackedButtons(), this.toggleScrollableClasses();
    }, e.prototype.handleAnimationTimerEnd = function() {
      this.animationTimer = 0, this.adapter.removeClass(st.OPENING), this.adapter.removeClass(st.CLOSING);
    }, e.prototype.runNextAnimationFrame = function(n) {
      var r = this;
      cancelAnimationFrame(this.animationFrame), this.animationFrame = requestAnimationFrame(function() {
        r.animationFrame = 0, clearTimeout(r.animationTimer), r.animationTimer = setTimeout(n, 0);
      });
    }, e.prototype.detectStackedButtons = function() {
      this.adapter.removeClass(st.STACKED);
      var n = this.adapter.areButtonsStacked();
      n && this.adapter.addClass(st.STACKED), n !== this.areButtonsStacked && (this.adapter.reverseButtons(), this.areButtonsStacked = n);
    }, e.prototype.toggleScrollableClasses = function() {
      this.adapter.removeClass(st.SCROLLABLE), this.adapter.isContentScrollable() && (this.adapter.addClass(st.SCROLLABLE), this.isFullscreen && (this.toggleScrollDividerHeader(), this.toggleScrollDividerFooter()));
    }, e.prototype.toggleScrollDividerHeader = function() {
      this.adapter.isScrollableContentAtTop() ? this.adapter.hasClass(st.SCROLL_DIVIDER_HEADER) && this.adapter.removeClass(st.SCROLL_DIVIDER_HEADER) : this.adapter.addClass(st.SCROLL_DIVIDER_HEADER);
    }, e.prototype.toggleScrollDividerFooter = function() {
      this.adapter.isScrollableContentAtBottom() ? this.adapter.hasClass(st.SCROLL_DIVIDER_FOOTER) && this.adapter.removeClass(st.SCROLL_DIVIDER_FOOTER) : this.adapter.addClass(st.SCROLL_DIVIDER_FOOTER);
    }, e;
  }(wt)
), Bp = /* @__PURE__ */ ce('<div class="mdc-dialog__surface-scrim"></div>'), Vp = /* @__PURE__ */ ce('<div><div><div><!> <!></div></div> <div class="mdc-dialog__scrim"></div></div> <!>', 1);
function fl(t, e) {
  xe(e, !0);
  const n = () => Bn(G, "$aboveFullscreenShown", r), [r, i] = ir(), { FocusTrap: a } = lg, { closest: o, matches: u } = ca;
  let l = v(e, "use", 19, () => []), c = v(e, "class", 3, ""), d = v(e, "open", 15, !1), m = v(e, "selection", 3, !1), f = v(e, "escapeKeyAction", 3, "close"), g = v(e, "scrimClickAction", 3, "close"), h = v(e, "autoStackButtons", 3, !0), p = v(e, "fullscreen", 3, !1), b = v(e, "sheet", 3, !1), y = v(e, "noContentPadding", 3, !1), E = v(e, "container$class", 3, ""), I = v(e, "surface$class", 3, ""), _ = /* @__PURE__ */ je(e, [
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
  ]), A, S = /* @__PURE__ */ he(void 0), L = new Ii(), T = ye({}), w, k = Vt(!1), J = _e("SMUI:dialog:aboveFullscreen"), G = _e("SMUI:dialog:aboveFullscreenShown") ?? Vt(!1), z = _e("SMUI:addLayoutListener"), R, C = [], F = (q) => (C.push(q), () => {
    const j = C.indexOf(q);
    j >= 0 && C.splice(j, 1);
  });
  ue("SMUI:dialog:actions:reversed", k), ue("SMUI:addLayoutListener", F), ue("SMUI:dialog:selection", m()), ue("SMUI:dialog:aboveFullscreen", J || p()), ue("SMUI:dialog:aboveFullscreenShown", G), b() && ue("SMUI:icon-button:context", "dialog:sheet"), Le(() => {
    s(S) && s(S).getEscapeKeyAction() !== f() && s(S).setEscapeKeyAction(f());
  }), Le(() => {
    s(S) && s(S).getScrimClickAction() !== g() && s(S).setScrimClickAction(g());
  }), Le(() => {
    s(S) && s(S).getAutoStackButtons() !== h() && s(S).setAutoStackButtons(h());
  }), Le(() => {
    h() || Fn(k, !0);
  }), z && (R = z(ie)), Le(() => {
    s(S) && s(S).isOpen() !== d() && (d() ? s(S).open({ isAboveFullscreenDialog: !!J }) : s(S).close());
  });
  let N = n();
  Le(() => {
    p() && s(S) && N !== n() && (N = n(), n() ? s(S).showSurfaceScrim() : s(S).hideSurfaceScrim());
  }), at(() => (w = new a(A, { initialFocusEl: B() ?? void 0 }), X(
    S,
    new kp({
      addBodyClass: (q) => document.body.classList.add(q),
      addClass: ne,
      areButtonsStacked: () => Up(D()),
      clickDefaultButton: () => {
        const q = W();
        q && q.click();
      },
      eventTargetMatches: (q, j) => q ? u(q, j) : !1,
      getActionFromEvent: (q) => {
        if (!q.target)
          return "";
        const j = o(q.target, "[data-mdc-dialog-action]");
        return j && j.getAttribute("data-mdc-dialog-action");
      },
      getInitialFocusEl: B,
      hasClass: K,
      isContentScrollable: () => Pp(Ie()),
      notifyClosed: (q) => {
        d(!1), Ke(Ae(), "SMUIDialogClosed", q ? { action: q } : {});
      },
      notifyClosing: (q) => Ke(Ae(), "SMUIDialogClosing", q ? { action: q } : {}),
      notifyOpened: () => Ke(Ae(), "SMUIDialogOpened", {}),
      notifyOpening: () => Ke(Ae(), "SMUIDialogOpening", {}),
      releaseFocus: () => w.releaseFocus(),
      removeBodyClass: (q) => document.body.classList.remove(q),
      removeClass: U,
      reverseButtons: () => {
        Fn(k, !0);
      },
      trapFocus: () => w.trapFocus(),
      registerContentEventHandler: (q, j) => {
        const ae = Ie();
        ae instanceof HTMLElement && L.on(ae, q, j);
      },
      deregisterContentEventHandler: (q, j) => {
        const ae = Ie();
        ae instanceof HTMLElement && L.off(ae, q, j);
      },
      isScrollableContentAtTop: () => Hp(Ie()),
      isScrollableContentAtBottom: () => Np(Ie()),
      registerWindowEventHandler: (q, j) => L.on(window, q, j),
      deregisterWindowEventHandler: (q, j) => L.off(window, q, j)
    }),
    !0
  ), s(S).init(), () => {
    var q;
    (q = s(S)) == null || q.destroy(), L.clear();
  })), En(() => {
    R && R();
  });
  function K(q) {
    return q in T ? T[q] : Ae().classList.contains(q);
  }
  function ne(q) {
    T[q] || (T[q] = !0);
  }
  function U(q) {
    (!(q in T) || T[q]) && (T[q] = !1);
  }
  function D() {
    return [].slice.call(Ae().querySelectorAll(".mdc-dialog__button"));
  }
  function W() {
    return Ae().querySelector("[data-mdc-dialog-button-default]");
  }
  function Ie() {
    return Ae().querySelector(".mdc-dialog__content");
  }
  function B() {
    return Ae().querySelector("[data-mdc-dialog-initial-focus]");
  }
  function P() {
    J && Fn(G, !0), requestAnimationFrame(() => {
      C.forEach((q) => q());
    });
  }
  function M() {
    C.forEach((q) => q());
  }
  function O() {
    J && Fn(G, !1);
  }
  function ee() {
    return d();
  }
  function Z(q) {
    d(q);
  }
  function ie() {
    var q;
    return (q = s(S)) == null ? void 0 : q.layout();
  }
  function Ae() {
    return A;
  }
  var te = { isOpen: ee, setOpen: Z, layout: ie, getElement: Ae }, oe = Vp();
  Jn("resize", Da, () => d() && s(S) && s(S).layout()), Jn("orientationchange", Da, () => d() && s(S) && s(S).layout()), Jn("keydown", nl.body, (q) => s(S) && s(S).handleDocumentKeydown(q));
  var Te = Y(oe), Re = (q) => {
    var j;
    P(), (j = e.onSMUIDialogOpening) == null || j.call(e, q);
  }, Ne = (q) => {
    var j;
    M(), (j = e.onSMUIDialogOpened) == null || j.call(e, q);
  }, Fe = (q) => {
    var j;
    O(), (j = e.onSMUIDialogClosed) == null || j.call(e, q);
  }, He = (q) => {
    var j;
    s(S) && s(S).handleClick(q), (j = e.onclick) == null || j.call(e, q);
  }, V = (q) => {
    var j;
    s(S) && s(S).handleKeydown(q), (j = e.onkeydown) == null || j.call(e, q);
  };
  Ue(
    Te,
    (q, j) => ({
      class: q,
      role: "alertdialog",
      "aria-modal": "true",
      ...j,
      onSMUIDialogOpening: Re,
      onSMUIDialogOpened: Ne,
      onSMUIDialogClosed: Fe,
      onclick: He,
      onkeydown: V
    }),
    [
      () => Me({
        "mdc-dialog": !0,
        "mdc-dialog--stacked": !h(),
        "mdc-dialog--fullscreen": p(),
        "mdc-dialog--sheet": b(),
        "mdc-dialog--no-content-padding": y(),
        "smui-dialog--selection": m(),
        ...T,
        [c()]: !0
      }),
      () => Vn(_, ["container$", "surface$"])
    ]
  );
  var $ = de(Te);
  Ue($, (q, j) => ({ class: q, ...j }), [
    () => Me({ "mdc-dialog__container": !0, [E()]: !0 }),
    () => it(_, "container$")
  ]);
  var me = de($);
  Ue(me, (q, j) => ({ class: q, role: "alertdialog", "aria-modal": "true", ...j }), [
    () => Me({ "mdc-dialog__surface": !0, [I()]: !0 }),
    () => it(_, "surface$")
  ]);
  var De = de(me);
  Ee(De, () => e.children ?? ve);
  var Ve = be(De, 2);
  {
    var ut = (q) => {
      var j = Bp();
      Jn("transitionend", j, () => s(S) && s(S).handleSurfaceScrimTransitionEnd()), x(q, j);
    };
    se(Ve, (q) => {
      p() && q(ut);
    });
  }
  Ce(Te, (q) => A = q, () => A), Pe(Te, (q, j) => Q == null ? void 0 : Q(q, j), l);
  var gt = be(Te, 2);
  Ee(gt, () => e.over ?? ve), x(t, oe);
  var ge = we(te);
  return i(), ge;
}
function bd(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ce(
    da(t, Je(
      {
        _smuiClass: "mdc-dialog__header",
        _smuiContexts: { "SMUI:icon-button:context": "dialog:header" },
        tag: "div"
      },
      () => n,
      {
        children: (o, u) => {
          var l = re(), c = Y(l);
          Ee(c, () => e.children ?? ve), x(o, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), we(a);
}
function hl(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ce(
    da(t, Je({ _smuiClass: "mdc-dialog__content", tag: "div" }, () => n, {
      children: (o, u) => {
        var l = re(), c = Y(l);
        Ee(c, () => e.children ?? ve), x(o, l);
      },
      $$slots: { default: !0 }
    })),
    (o) => r = o,
    () => r
  ), we(a);
}
function vl(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ce(
    da(t, Je(
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
          var l = re(), c = Y(l);
          Ee(c, () => e.children ?? ve), x(o, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), we(a);
}
var Gp = /* @__PURE__ */ ce('<div class="dialog-title svelte-187m1sc"><!></div> <!> <!>', 1);
function jp(t, e) {
  xe(e, !0);
  let n = v(e, "open", 15, !1), r = v(e, "onClose", 3, () => {
  });
  fl(t, {
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
      var o = Gp(), u = Y(o), l = de(u);
      Ee(l, () => e.title ?? ve);
      var c = be(u, 2);
      hl(c, {
        id: "large-scroll-content",
        children: (m, f) => {
          var g = re(), h = Y(g);
          Ee(h, () => e.content ?? ve), x(m, g);
        },
        $$slots: { default: !0 }
      });
      var d = be(c, 2);
      vl(d, {
        children: (m, f) => {
          var g = re(), h = Y(g);
          Ee(h, () => e.actions ?? ve), x(m, g);
        },
        $$slots: { default: !0 }
      }), x(i, o);
    },
    $$slots: { default: !0 }
  }), we();
}
const ml = Vt({
  component: null,
  props: {},
  isOpen: !1
}), qp = Vt([]);
qp.subscribe;
const yu = ye({ freeze: !1 });
function Wp(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ he(void 0), r = /* @__PURE__ */ he(!1);
  const i = ml.subscribe((l) => {
    X(n, l, !0), X(r, l.isOpen, !0), yu.freeze = !1;
  });
  at(() => () => i()), Le(() => {
    yu.freeze = s(
      r
      // freeze drawer controls when dialog is open
    );
  });
  var a = re(), o = Y(a);
  {
    var u = (l) => {
      var c = re(), d = Y(c);
      rr(d, () => s(n).component, (m, f) => {
        f(m, Je(() => s(n).props, {
          get open() {
            return s(r);
          },
          set open(g) {
            X(r, g, !0);
          }
        }));
      }), x(l, c);
    };
    se(o, (l) => {
      s(n).isOpen && s(n).component && l(u);
    });
  }
  x(t, a), we();
}
function vs(t, e = {}) {
  return new Promise((n) => {
    ml.set({
      component: t,
      props: e,
      isOpen: !0,
      resolve: n
    });
  });
}
function ms(t, e) {
  ml.update((n) => {
    var r;
    return (r = n.resolve) == null || r.call(n, { type: t, data: e }), { component: null, props: {}, isOpen: !1 };
  });
}
var zp = /* @__PURE__ */ ce('<div class="oscd-confirm-dialog__content svelte-1eipd40"> </div>');
function gs(t, e) {
  xe(e, !0);
  let n = v(e, "open", 15, !1), r = v(e, "title", 3, ""), i = v(e, "message", 3, ""), a = v(e, "confirmActionText", 3, "OK"), o = v(e, "confirmActionColor", 3, "primary"), u = v(e, "cancelActionText", 3, "Cancel"), l = v(e, "color", 3, "var(--mdc-theme-primary, #ff3e00)");
  function c() {
    ms("confirm");
  }
  function d() {
    ms("cancel");
  }
  tb(t, {
    get title() {
      return r();
    },
    get confirmActionText() {
      return a();
    },
    get confirmActionColor() {
      return o();
    },
    get cancelActionText() {
      return u();
    },
    get color() {
      return l();
    },
    onConfirm: () => c(),
    onCancel: () => d(),
    onClose: () => ms("cancel"),
    width: "100%",
    maxWidth: "500px",
    height: "auto",
    maxHeight: "auto",
    get open() {
      return n();
    },
    set open(f) {
      n(f);
    },
    content: (f) => {
      hl(f, {
        children: (g, h) => {
          var p = zp(), b = de(p);
          Oe(() => $e(b, i())), x(g, p);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { content: !0 }
  }), we();
}
var Kp = /* @__PURE__ */ ce('<div class="header svelte-154fm8w"><h4 id="leave-confirm-title" class="svelte-154fm8w">Discard unsaved data?</h4></div>'), Xp = /* @__PURE__ */ ce("<!> <!>", 1), Yp = /* @__PURE__ */ ce('<!> <p class="message svelte-154fm8w">If you close this dialog now, all entered data will be permanently lost. This action cannot be undone.</p> <!>', 1);
function Zp(t, e) {
  xe(e, !0);
  let n = v(e, "open", 15, !1), r = v(e, "onStay", 3, () => {
  }), i = v(e, "onLeave", 3, () => {
  });
  fl(t, {
    class: "leave-confirm-dialog",
    surface$style: "width: 100%; max-width: 420px;",
    "aria-labelledby": "leave-confirm-title",
    "aria-describedby": "leave-confirm-content",
    get open() {
      return n();
    },
    set open(a) {
      n(a);
    },
    children: (a, o) => {
      var u = Yp(), l = Y(u);
      bd(l, {
        children: (d, m) => {
          var f = Kp();
          x(d, f);
        },
        $$slots: { default: !0 }
      });
      var c = be(l, 4);
      vl(c, {
        class: "oscd-dialog__actions",
        children: (d, m) => {
          var f = Xp(), g = Y(f);
          ia(g, {
            type: "button",
            get onclick() {
              return r();
            },
            children: (p, b) => {
              var y = vt("Continue editing");
              x(p, y);
            },
            $$slots: { default: !0 }
          });
          var h = be(g, 2);
          ia(h, {
            type: "button",
            get onclick() {
              return i();
            },
            style: "background-color: var(--red); color: white;",
            children: (p, b) => {
              var y = vt("Discard data");
              x(p, y);
            },
            $$slots: { default: !0 }
          }), x(d, f);
        },
        $$slots: { default: !0 }
      }), x(a, u);
    },
    $$slots: { default: !0 }
  }), we();
}
var Qp = /* @__PURE__ */ ce('<div class="dialog__title svelte-ec2c4h"><h4 class="svelte-ec2c4h"> </h4> <!></div>'), Jp = /* @__PURE__ */ ce("<!> <!>", 1), $p = /* @__PURE__ */ ce('<!> <!> <div class="dialog__actions svelte-ec2c4h"><!></div>', 1), eb = /* @__PURE__ */ ce("<!> <!>", 1);
function tb(t, e) {
  xe(e, !0);
  let n = v(e, "open", 15, !1), r = v(e, "title", 3, ""), i = v(e, "confirmActionText", 3, "Confirm"), a = v(e, "confirmActionColor", 3, "primary"), o = v(e, "cancelActionText", 3, "Cancel"), u = v(e, "width", 3, "80vw"), l = v(e, "maxWidth", 3, "85vw"), c = v(e, "height", 3, "85vh"), d = v(e, "maxHeight", 3, "85vh"), m = v(e, "confirmDisabled", 3, !1), f = v(e, "color", 3, "var(--mdc-theme-primary, #ff3e00)"), g = v(e, "showCloseButton", 3, !0), h = v(e, "confirmClose", 3, !1), p = v(e, "onClose", 3, () => {
  }), b = v(e, "onCancel", 3, () => {
  }), y = v(e, "onConfirm", 3, () => {
  }), E = /* @__PURE__ */ he(!1), I = /* @__PURE__ */ he(null), _ = /* @__PURE__ */ he(!1);
  function A(C) {
    h() ? (X(I, C, !0), X(E, !0)) : (X(_, !0), C());
  }
  function S(C) {
    if (s(_)) {
      X(_, !1);
      return;
    }
    C.detail.action === "confirm" ? y()() : A(p());
  }
  function L(C) {
    h() && C.target.classList.contains("mdc-dialog__scrim") && A(p());
  }
  function T(C) {
    h() && n() && C.key === "Escape" && !s(E) && (C.preventDefault(), A(p()));
  }
  function w() {
    X(_, !0), X(E, !1);
    const C = s(I) ?? p();
    X(I, null), C();
  }
  const k = /* @__PURE__ */ fe(() => m() ? "" : `background-color: ${a() === "primary" ? f() : "#FF203A"}; color: white;`);
  var J = eb();
  Jn("keydown", Da, T);
  var G = Y(J);
  {
    let C = /* @__PURE__ */ fe(() => h() ? "" : "close"), F = /* @__PURE__ */ fe(() => h() ? "" : "close"), N = /* @__PURE__ */ fe(() => `width: ${u()}; max-width: ${l()}; height: ${c()}; max-height: ${d()};`);
    fl(G, {
      "aria-labelledby": "large-scroll-title",
      "aria-describedby": "large-scroll-content",
      onSMUIDialogClosed: S,
      get escapeKeyAction() {
        return s(C);
      },
      get scrimClickAction() {
        return s(F);
      },
      onclick: L,
      get surface$style() {
        return s(N);
      },
      get open() {
        return n();
      },
      set open(K) {
        n(K);
      },
      children: (K, ne) => {
        var U = $p(), D = Y(U);
        bd(D, {
          children: (O, ee) => {
            var Z = Qp(), ie = de(Z), Ae = de(ie), te = be(ie, 2);
            {
              var oe = (Te) => {
                g_(Te, {
                  tabindex: "-1",
                  onClick: () => A(p()),
                  tooltip: "Close",
                  tooltipSide: "left",
                  type: "close",
                  fillColor: "white"
                });
              };
              se(te, (Te) => {
                g() && Te(oe);
              });
            }
            Oe(() => {
              mt(Z, `background-color: ${f()};`), $e(Ae, r());
            }), x(O, Z);
          },
          $$slots: { default: !0 }
        });
        var W = be(D, 2);
        hl(W, {
          id: "dialog__content",
          children: (O, ee) => {
            var Z = re(), ie = Y(Z);
            Ee(ie, () => e.content ?? ve), x(O, Z);
          },
          $$slots: { default: !0 }
        });
        var Ie = be(W, 2), B = de(Ie);
        {
          var P = (O) => {
            var ee = re(), Z = Y(ee);
            Ee(Z, () => e.actions, () => ({ requestClose: () => A(b()) })), x(O, ee);
          }, M = (O) => {
            vl(O, {
              class: "oscd-dialog__actions",
              children: (ee, Z) => {
                var ie = Jp(), Ae = Y(ie);
                {
                  var te = (Te) => {
                    ia(Te, {
                      type: "button",
                      onclick: () => A(b()),
                      color: "secondary",
                      children: (Re, Ne) => {
                        var Fe = vt();
                        Oe(() => $e(Fe, o())), x(Re, Fe);
                      },
                      $$slots: { default: !0 }
                    });
                  };
                  se(Ae, (Te) => {
                    o() && Te(te);
                  });
                }
                var oe = be(Ae, 2);
                ia(oe, {
                  type: "button",
                  action: "confirm",
                  get disabled() {
                    return m();
                  },
                  get style() {
                    return s(k);
                  },
                  children: (Te, Re) => {
                    var Ne = vt();
                    Oe(() => $e(Ne, i())), x(Te, Ne);
                  },
                  $$slots: { default: !0 }
                }), x(ee, ie);
              },
              $$slots: { default: !0 }
            });
          };
          se(B, (O) => {
            e.actions ? O(P) : O(M, !1);
          });
        }
        x(K, U);
      },
      $$slots: { default: !0 }
    });
  }
  var z = be(G, 2);
  {
    var R = (C) => {
      Zp(C, {
        onStay: () => {
          X(E, !1);
        },
        onLeave: w,
        get open() {
          return s(E);
        },
        set open(F) {
          X(E, F, !0);
        }
      });
    };
    se(z, (C) => {
      h() && C(R);
    });
  }
  x(t, J), we();
}
const qt = [];
for (let t = 0; t < 256; ++t)
  qt.push((t + 256).toString(16).slice(1));
function nb(t, e = 0) {
  return (qt[t[e + 0]] + qt[t[e + 1]] + qt[t[e + 2]] + qt[t[e + 3]] + "-" + qt[t[e + 4]] + qt[t[e + 5]] + "-" + qt[t[e + 6]] + qt[t[e + 7]] + "-" + qt[t[e + 8]] + qt[t[e + 9]] + "-" + qt[t[e + 10]] + qt[t[e + 11]] + qt[t[e + 12]] + qt[t[e + 13]] + qt[t[e + 14]] + qt[t[e + 15]]).toLowerCase();
}
let ps;
const rb = new Uint8Array(16);
function ib() {
  if (!ps) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    ps = crypto.getRandomValues.bind(crypto);
  }
  return ps(rb);
}
const ab = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Iu = { randomUUID: ab };
function ni(t, e, n) {
  var i;
  if (Iu.randomUUID && !e && !t)
    return Iu.randomUUID();
  t = t || {};
  const r = t.random ?? ((i = t.rng) == null ? void 0 : i.call(t)) ?? ib();
  if (r.length < 16)
    throw new Error("Random bytes length must be >= 16");
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    if (n = n || 0, n < 0 || n + 16 > e.length)
      throw new RangeError(`UUID byte range ${n}:${n + 15} is out of buffer bounds`);
    for (let a = 0; a < 16; ++a)
      e[n + a] = r[a];
    return e;
  }
  return nb(r);
}
var ob = /* @__PURE__ */ ce('<span class="oscd-icon"><!></span>');
function Kt(t, e) {
  var n = ob(), r = de(n);
  Ee(r, () => e.children ?? ve), x(t, n);
}
var sb = /* @__PURE__ */ xt('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');
function lb(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Kt(t, {
    children: (r, i) => {
      var a = sb();
      Oe(() => mt(a, n())), x(r, a);
    }
  });
}
var ub = /* @__PURE__ */ xt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function gl(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Kt(t, {
    children: (r, i) => {
      var a = ub();
      Oe(() => mt(a, n())), x(r, a);
    }
  });
}
var cb = /* @__PURE__ */ xt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');
function db(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Kt(t, {
    children: (r, i) => {
      var a = cb();
      Oe(() => mt(a, n())), x(r, a);
    }
  });
}
var fb = /* @__PURE__ */ xt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"></path></svg>');
function hb(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Kt(t, {
    children: (r, i) => {
      var a = fb();
      Oe(() => mt(a, n())), x(r, a);
    }
  });
}
var vb = /* @__PURE__ */ xt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"></path></svg>');
function mb(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Kt(t, {
    children: (r, i) => {
      var a = vb();
      Oe(() => mt(a, n())), x(r, a);
    }
  });
}
var gb = /* @__PURE__ */ xt('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function pb(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Kt(t, {
    children: (r, i) => {
      var a = gb();
      Oe(() => mt(a, n())), x(r, a);
    }
  });
}
var bb = /* @__PURE__ */ xt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function _d(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Kt(t, {
    children: (r, i) => {
      var a = bb();
      Oe(() => mt(a, n())), x(r, a);
    }
  });
}
var _b = /* @__PURE__ */ xt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function yd(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Kt(t, {
    children: (r, i) => {
      var a = _b();
      Oe(() => mt(a, n())), x(r, a);
    }
  });
}
var yb = /* @__PURE__ */ xt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"></path></svg>');
function Ib(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Kt(t, {
    children: (r, i) => {
      var a = yb();
      Oe(() => mt(a, n())), x(r, a);
    }
  });
}
var Sb = /* @__PURE__ */ xt('<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM2 12c0-2.79 1.64-5.2 4.01-6.32V3.52C2.52 4.76 0 8.09 0 12s2.52 7.24 6.01 8.48v-2.16C3.64 17.2 2 14.79 2 12zm13-9c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"></path></svg>');
function Eb(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Kt(t, {
    children: (r, i) => {
      var a = Sb();
      Oe(() => mt(a, n())), x(r, a);
    }
  });
}
Af();
var Ab = /* @__PURE__ */ xt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"></path></svg>');
function Cb(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Kt(t, {
    children: (r, i) => {
      var a = Ab();
      Oe(() => mt(a, n())), x(r, a);
    }
  });
}
var Tb = /* @__PURE__ */ xt('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"><path d="m176-120-56-56 301-302-181-45 198-123-17-234 179 151 216-88-87 217 151 178-234-16-124 198-45-181-301 301Zm24-520-80-80 80-80 80 80-80 80Zm355 197 48-79 93 7-60-71 35-86-86 35-71-59 7 92-79 49 90 22 23 90Zm165 323-80-80 80-80 80 80-80 80ZM569-570Z"></path></svg>');
function xb(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Kt(t, {
    children: (r, i) => {
      var a = Tb();
      Oe(() => mt(a, n())), x(r, a);
    }
  });
}
var wb = /* @__PURE__ */ xt('<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m770-302-60-62q40-11 65-42.5t25-73.5q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 57-29.5 105T770-302ZM634-440l-80-80h86v80h-6ZM792-56 56-792l56-56 736 736-56 56ZM440-280H280q-83 0-141.5-58.5T80-480q0-69 42-123t108-71l74 74h-24q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h65l79 80H320Z"></path></svg>');
function Lb(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Kt(t, {
    children: (r, i) => {
      var a = wb();
      Oe(() => mt(a, n())), x(r, a);
    }
  });
}
var Ob = /* @__PURE__ */ xt('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"></path></svg>');
function Rb(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Kt(t, {
    children: (r, i) => {
      var a = Ob();
      Oe(() => mt(a, n())), x(r, a);
    }
  });
}
var Db = /* @__PURE__ */ xt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"></path></svg>');
function Mb(t, e) {
  let n = v(e, "svgStyles", 8, "");
  Kt(t, {
    children: (r, i) => {
      var a = Db();
      Oe(() => mt(a, n())), x(r, a);
    }
  });
}
var Pb = /* @__PURE__ */ xt('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3" cursor="pointer"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Hb(t, e) {
  let n = v(e, "svgStyles", 8, "");
  Kt(t, {
    children: (r, i) => {
      var a = Pb();
      Oe(() => mt(a, n())), x(r, a);
    }
  });
}
var Nb = /* @__PURE__ */ xt('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m480-240 160-160-56-56-64 64v-168h-80v168l-64-64-56 56 160 160ZM200-640v440h560v-440H200Zm0 520q-33 0-56.5-23.5T120-200v-499q0-14 4.5-27t13.5-24l50-61q11-14 27.5-21.5T250-840h460q18 0 34.5 7.5T772-811l50 61q9 11 13.5 24t4.5 27v499q0 33-23.5 56.5T760-120H200Zm16-600h528l-34-40H250l-34 40Zm264 300Z"></path></svg>');
function Ub(t, e) {
  let n = v(e, "svgStyles", 8, "");
  Kt(t, {
    children: (r, i) => {
      var a = Nb();
      Oe(() => mt(a, n())), x(r, a);
    }
  });
}
function Fb(t, e) {
  e(t.target.value);
}
var kb = /* @__PURE__ */ ce('<div class="custom-text-field svelte-1719vm0"><input type="date" id="datetime-picker" class="custom-text-field__input svelte-1719vm0" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-1719vm0"> </label> <span class="custom-line svelte-1719vm0"></span></div>');
function Bb(t, e) {
  xe(e, !0);
  let n = v(e, "label", 3, ""), r = v(e, "value", 15, "");
  var i = kb(), a = de(i);
  a.__change = [Fb, r];
  var o = be(a, 2), u = de(o);
  Oe(() => $e(u, n())), Ha(a, r), x(t, i), we();
}
Sn(["change"]);
function Vb(t, e) {
  e(t.target.value);
}
var Gb = /* @__PURE__ */ ce('<div class="custom-text-field svelte-6wdfbb"><input type="datetime-local" id="datetime-picker" class="custom-text-field__input svelte-6wdfbb" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-6wdfbb"> </label> <span class="custom-line svelte-6wdfbb"></span></div>');
function jb(t, e) {
  xe(e, !0);
  let n = v(e, "label", 3, ""), r = v(e, "value", 15, "");
  var i = Gb(), a = de(i);
  a.__change = [Vb, r];
  var o = be(a, 2), u = de(o);
  Oe(() => $e(u, n())), Ha(a, r), x(t, i), we();
}
Sn(["change"]);
function qb(t, e, n, r) {
  e() && ((t.key === "Enter" || t.key === " ") && (t.preventDefault(), n()), t.key === "Escape" && (t.preventDefault(), r()));
}
var Wb = /* @__PURE__ */ ce('<span role="button" tabindex="0" aria-labelledby="tooltip"><!></span>');
function Fa(t, e) {
  xe(e, !0);
  let n = v(e, "content", 3, ""), r = v(e, "side", 3, "top"), i = v(e, "hoverDelay", 3, 0), a = v(e, "transitionDuration", 3, 80), o = v(e, "disabled", 3, !1), u = v(e, "offset", 3, 8), l = v(e, "backgroundColor", 3, "#000"), c = v(e, "paddingY", 3, 6), d = v(e, "paddingX", 3, 10), m = v(e, "textColor", 3, "#fff");
  const f = `tt-${Math.random().toString(36).slice(2)}`;
  let g = /* @__PURE__ */ he(null), h = /* @__PURE__ */ he(null), p = /* @__PURE__ */ he(null), b = /* @__PURE__ */ he(null), y = /* @__PURE__ */ he(!1), E = /* @__PURE__ */ he(null), I = /* @__PURE__ */ he(null);
  function _(C) {
    var W;
    if (!C || !C.trim().startsWith("var(")) return C;
    const F = C.match(/^var\(\s*([^,\s)]+)\s*(?:,\s*([^)]+)\s*)?\)$/);
    if (!F) return C;
    const N = F[1], K = (W = F[2]) == null ? void 0 : W.trim(), ne = s(g) ? getComputedStyle(s(g)).getPropertyValue(N) : "", U = getComputedStyle(document.documentElement).getPropertyValue(N), D = (ne || U).trim();
    return D || K || C;
  }
  function A() {
    !n() || o() || (s(E) && clearTimeout(s(E)), i() > 0 ? X(E, setTimeout(() => X(y, !0), i()), !0) : X(y, !0));
  }
  function S() {
    s(E) && clearTimeout(s(E)), X(y, !1);
  }
  function L() {
    A();
  }
  function T() {
    S();
  }
  function w() {
    A();
  }
  function k() {
    S();
  }
  function J() {
    if (!s(h) || !s(b) || !s(g) || o()) return;
    const C = s(g).getBoundingClientRect(), F = s(b).getBoundingClientRect();
    let N = 0, K = 0;
    const ne = u();
    switch (r()) {
      case "top":
        N = C.top - F.height - ne, K = C.left + C.width / 2 - F.width / 2;
        break;
      case "bottom":
        N = C.bottom + ne, K = C.left + C.width / 2 - F.width / 2;
        break;
      case "left":
        N = C.top + C.height / 2 - F.height / 2, K = C.left - F.width - ne;
        break;
      case "right":
        N = C.top + C.height / 2 - F.height / 2, K = C.right + ne;
        break;
    }
    s(h).style.top = `${N + window.scrollY}px`, s(h).style.left = `${K + window.scrollX}px`;
  }
  function G() {
    var C;
    (C = s(I)) == null || C.disconnect(), X(I, null), s(h) && s(h).parentNode && s(h).parentNode.removeChild(s(h)), X(h, null), X(b, null), X(p, null), s(E) && clearTimeout(s(E));
  }
  En(G), Le(() => {
    if (!(!s(y) || !n() || o())) {
      if (!s(h)) {
        X(h, document.createElement("div"), !0), s(h).style.position = "absolute", s(h).style.zIndex = "9999", s(h).style.pointerEvents = "none", s(h).style.opacity = "0", s(h).style.transition = `opacity ${a()}ms ease`, s(h).id = f, s(h).setAttribute("role", "tooltip"), document.body.appendChild(s(h)), X(p, s(h).attachShadow({ mode: "open" }), !0);
        const C = document.createElement("style"), F = _(l()), N = _(m());
        C.textContent = `
        .bubble {
          --pad-y: ${c()}px;
          --pad-x: ${d()}px;
          --radius: 4px;
          --bg: ${F};
          --fg: ${N};
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
      `, s(p).appendChild(C), X(b, document.createElement("div"), !0), s(p).appendChild(s(b)), X(
          I,
          new MutationObserver(() => {
            s(y) && J();
          }),
          !0
        ), s(I).observe(document.body, { childList: !0, subtree: !0 });
      }
      s(b) && (s(b).className = `bubble ${r()}`, s(b).innerHTML = n()), s(h) && (s(h).style.opacity = "1", J());
    }
  }), Le(() => {
    if (s(y) || !s(h))
      return;
    s(h).style.opacity = "0";
    const C = s(h), F = setTimeout(
      () => {
        C && C.parentNode && C.parentNode.removeChild(C), s(h) === C && G();
      },
      a()
    );
    return () => clearTimeout(F);
  });
  var z = Wb();
  z.__keydown = [qb, n, A, S];
  var R = de(z);
  Ee(R, () => e.children ?? ve), Ce(z, (C) => X(g, C), () => s(g)), Oe(() => {
    _r(z, "aria-describedby", n() && !o() ? f : void 0), _r(z, "aria-haspopup", n() ? "true" : void 0), _r(z, "aria-expanded", n() ? s(y) ? "true" : "false" : void 0);
  }), Jn("mouseenter", z, L), Jn("mouseleave", z, T), Jn("focus", z, w), Jn("blur", z, k), x(t, z), we();
}
Sn(["keydown"]);
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
var Sa = {
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
}, An = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_CHECKED_INDETERMINATE_VALUE: "mixed",
  DATA_INDETERMINATE_ATTR: "data-indeterminate",
  NATIVE_CONTROL_SELECTOR: ".mdc-checkbox__native-control",
  TRANSITION_STATE_CHECKED: "checked",
  TRANSITION_STATE_INDETERMINATE: "indeterminate",
  TRANSITION_STATE_INIT: "init",
  TRANSITION_STATE_UNCHECKED: "unchecked"
}, Su = {
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
var zb = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(n) {
      var r = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return r.currentCheckState = An.TRANSITION_STATE_INIT, r.currentAnimationClass = "", r.animEndLatchTimer = 0, r.enableAnimationEndHandler = !1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Sa;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return An;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Su;
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
      this.currentCheckState = this.determineCheckState(), this.updateAriaChecked(), this.adapter.addClass(Sa.UPGRADED);
    }, e.prototype.destroy = function() {
      clearTimeout(this.animEndLatchTimer);
    }, e.prototype.setDisabled = function(n) {
      this.adapter.setNativeControlDisabled(n), n ? this.adapter.addClass(Sa.DISABLED) : this.adapter.removeClass(Sa.DISABLED);
    }, e.prototype.handleAnimationEnd = function() {
      var n = this;
      this.enableAnimationEndHandler && (clearTimeout(this.animEndLatchTimer), this.animEndLatchTimer = setTimeout(function() {
        n.adapter.removeClass(n.currentAnimationClass), n.enableAnimationEndHandler = !1;
      }, Su.ANIM_END_LATCH_MS));
    }, e.prototype.handleChange = function() {
      this.transitionCheckState();
    }, e.prototype.transitionCheckState = function() {
      if (this.adapter.hasNativeControl()) {
        var n = this.currentCheckState, r = this.determineCheckState();
        if (n !== r) {
          this.updateAriaChecked();
          var i = An.TRANSITION_STATE_UNCHECKED, a = Sa.SELECTED;
          r === i ? this.adapter.removeClass(a) : this.adapter.addClass(a), this.currentAnimationClass.length > 0 && (clearTimeout(this.animEndLatchTimer), this.adapter.forceLayout(), this.adapter.removeClass(this.currentAnimationClass)), this.currentAnimationClass = this.getTransitionAnimationClass(n, r), this.currentCheckState = r, this.adapter.isAttachedToDOM() && this.currentAnimationClass.length > 0 && (this.adapter.addClass(this.currentAnimationClass), this.enableAnimationEndHandler = !0);
        }
      }
    }, e.prototype.determineCheckState = function() {
      var n = An.TRANSITION_STATE_INDETERMINATE, r = An.TRANSITION_STATE_CHECKED, i = An.TRANSITION_STATE_UNCHECKED;
      return this.adapter.isIndeterminate() ? n : this.adapter.isChecked() ? r : i;
    }, e.prototype.getTransitionAnimationClass = function(n, r) {
      var i = An.TRANSITION_STATE_INIT, a = An.TRANSITION_STATE_CHECKED, o = An.TRANSITION_STATE_UNCHECKED, u = e.cssClasses, l = u.ANIM_UNCHECKED_CHECKED, c = u.ANIM_UNCHECKED_INDETERMINATE, d = u.ANIM_CHECKED_UNCHECKED, m = u.ANIM_CHECKED_INDETERMINATE, f = u.ANIM_INDETERMINATE_CHECKED, g = u.ANIM_INDETERMINATE_UNCHECKED;
      switch (n) {
        case i:
          return r === o ? "" : r === a ? f : g;
        case o:
          return r === a ? l : c;
        case a:
          return r === o ? d : m;
        default:
          return r === a ? f : g;
      }
    }, e.prototype.updateAriaChecked = function() {
      this.adapter.isIndeterminate() ? this.adapter.setNativeControlAttr(An.ARIA_CHECKED_ATTR, An.ARIA_CHECKED_INDETERMINATE_VALUE) : this.adapter.removeNativeControlAttr(An.ARIA_CHECKED_ATTR);
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
var bn = {
  CLOSED_CLASS: "mdc-linear-progress--closed",
  CLOSED_ANIMATION_OFF_CLASS: "mdc-linear-progress--closed-animation-off",
  INDETERMINATE_CLASS: "mdc-linear-progress--indeterminate",
  REVERSED_CLASS: "mdc-linear-progress--reversed",
  ANIMATION_READY_CLASS: "mdc-linear-progress--animation-ready"
}, Pn = {
  ARIA_HIDDEN: "aria-hidden",
  ARIA_VALUEMAX: "aria-valuemax",
  ARIA_VALUEMIN: "aria-valuemin",
  ARIA_VALUENOW: "aria-valuenow",
  BUFFER_BAR_SELECTOR: ".mdc-linear-progress__buffer-bar",
  FLEX_BASIS: "flex-basis",
  PRIMARY_BAR_SELECTOR: ".mdc-linear-progress__primary-bar"
}, Ea = {
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
var Kb = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(n) {
      var r = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return r.observer = null, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return bn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Pn;
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
      this.determinate = !this.adapter.hasClass(bn.INDETERMINATE_CLASS), this.adapter.addClass(bn.ANIMATION_READY_CLASS), this.progress = 0, this.buffer = 1, this.observer = this.adapter.attachResizeObserver(function(r) {
        var i, a;
        if (!n.determinate)
          try {
            for (var o = Bt(r), u = o.next(); !u.done; u = o.next()) {
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
        this.adapter.removeClass(bn.INDETERMINATE_CLASS), this.adapter.setAttribute(Pn.ARIA_VALUENOW, this.progress.toString()), this.adapter.setAttribute(Pn.ARIA_VALUEMAX, "1"), this.adapter.setAttribute(Pn.ARIA_VALUEMIN, "0"), this.setPrimaryBarProgress(this.progress), this.setBufferBarProgress(this.buffer);
        return;
      }
      this.observer && this.calculateAndSetDimensions(this.adapter.getWidth()), this.adapter.addClass(bn.INDETERMINATE_CLASS), this.adapter.removeAttribute(Pn.ARIA_VALUENOW), this.adapter.removeAttribute(Pn.ARIA_VALUEMAX), this.adapter.removeAttribute(Pn.ARIA_VALUEMIN), this.setPrimaryBarProgress(1), this.setBufferBarProgress(1);
    }, e.prototype.isDeterminate = function() {
      return this.determinate;
    }, e.prototype.setProgress = function(n) {
      this.progress = n, this.determinate && (this.setPrimaryBarProgress(n), this.adapter.setAttribute(Pn.ARIA_VALUENOW, n.toString()));
    }, e.prototype.getProgress = function() {
      return this.progress;
    }, e.prototype.setBuffer = function(n) {
      this.buffer = n, this.determinate && this.setBufferBarProgress(n);
    }, e.prototype.getBuffer = function() {
      return this.buffer;
    }, e.prototype.open = function() {
      this.adapter.removeClass(bn.CLOSED_CLASS), this.adapter.removeClass(bn.CLOSED_ANIMATION_OFF_CLASS), this.adapter.removeAttribute(Pn.ARIA_HIDDEN);
    }, e.prototype.close = function() {
      this.adapter.addClass(bn.CLOSED_CLASS), this.adapter.setAttribute(Pn.ARIA_HIDDEN, "true");
    }, e.prototype.isClosed = function() {
      return this.adapter.hasClass(bn.CLOSED_CLASS);
    }, e.prototype.handleTransitionEnd = function() {
      this.adapter.hasClass(bn.CLOSED_CLASS) && this.adapter.addClass(bn.CLOSED_ANIMATION_OFF_CLASS);
    }, e.prototype.destroy = function() {
      t.prototype.destroy.call(this), this.observer && this.observer.disconnect();
    }, e.prototype.restartAnimation = function() {
      this.adapter.removeClass(bn.ANIMATION_READY_CLASS), this.adapter.forceLayout(), this.adapter.addClass(bn.ANIMATION_READY_CLASS);
    }, e.prototype.setPrimaryBarProgress = function(n) {
      var r = "scaleX(" + n + ")", i = typeof window < "u" ? dp(window, "transform") : "transform";
      this.adapter.setPrimaryBarStyle(i, r);
    }, e.prototype.setBufferBarProgress = function(n) {
      var r = n * 100 + "%";
      this.adapter.setBufferBarStyle(Pn.FLEX_BASIS, r);
    }, e.prototype.calculateAndSetDimensions = function(n) {
      var r = n * Ea.PRIMARY_HALF, i = n * Ea.PRIMARY_FULL, a = n * Ea.SECONDARY_QUARTER, o = n * Ea.SECONDARY_HALF, u = n * Ea.SECONDARY_FULL;
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
var dr = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, Eu = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, ti = {
  ARIA_SELECTED: Eu.ARIA_SELECTED,
  ARIA_SORT: Eu.ARIA_SORT
}, yn;
(function(t) {
  t.ASCENDING = "ascending", t.DESCENDING = "descending", t.NONE = "none", t.OTHER = "other";
})(yn || (yn = {}));
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
var Xb = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(n) {
      return t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
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
      return Fc(this, void 0, void 0, function() {
        return ul(this, function(n) {
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
        o !== i && (this.adapter.removeClassNameByHeaderCellIndex(o, dr.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(o, dr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(o, ti.ARIA_SORT, yn.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(o, yn.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, dr.HEADER_CELL_SORTED);
      var u = this.adapter.getAttributeByHeaderCellIndex(i, ti.ARIA_SORT), l = yn.NONE;
      u === yn.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, dr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, ti.ARIA_SORT, yn.DESCENDING), l = yn.DESCENDING) : u === yn.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, dr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, ti.ARIA_SORT, yn.ASCENDING), l = yn.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, ti.ARIA_SORT, yn.ASCENDING), l = yn.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, l), this.adapter.notifySortAction({
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
      }), this.adapter.addClass(dr.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(dr.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(n, r) {
      r ? (this.adapter.addClassAtRowIndex(n, dr.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, ti.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(n, dr.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, ti.ARIA_SELECTED, "false"));
    }, e;
  }(wt)
), Yb = /* @__PURE__ */ ce('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), Zb = /* @__PURE__ */ ce("<div><div><table><!></table></div> <!> <!></div>");
function Qb(t, e) {
  xe(e, !0);
  const n = () => Bn(z, "$progressClosed", r), [r, i] = ir(), { closest: a } = ca;
  let o = v(e, "use", 19, () => []), u = v(e, "class", 3, ""), l = v(e, "stickyHeader", 3, !1), c = v(e, "sortable", 3, !1), d = v(e, "sort", 15, null), m = v(e, "sortDirection", 15, "ascending"), f = v(e, "sortAscendingAriaLabel", 3, "sorted, ascending"), g = v(e, "sortDescendingAriaLabel", 3, "sorted, descending"), h = v(e, "container$use", 19, () => []), p = v(e, "container$class", 3, ""), b = v(e, "table$use", 19, () => []), y = v(e, "table$class", 3, ""), E = /* @__PURE__ */ je(e, [
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
  ]), I, _ = /* @__PURE__ */ he(void 0), A, S = /* @__PURE__ */ he(void 0), L = /* @__PURE__ */ he(void 0), T = ye({}), w = /* @__PURE__ */ he(ye({ height: "auto", top: "initial" })), k = _e("SMUI:addLayoutListener"), J, G = !1, z = Vt(!1), R = Vt(d());
  Le(() => {
    Fn(R, d());
  });
  let C = Vt(m());
  Le(() => {
    Fn(C, m());
  }), ue("SMUI:checkbox:context", "data-table"), ue("SMUI:linear-progress:context", "data-table"), ue("SMUI:linear-progress:closed", z), ue("SMUI:data-table:sortable", c()), ue("SMUI:data-table:sort", R), ue("SMUI:data-table:sortDirection", C), ue("SMUI:data-table:sortAscendingAriaLabel", f()), ue("SMUI:data-table:sortDescendingAriaLabel", g()), k && (J = k(B));
  let F;
  Le(() => {
    e.progress && s(_) && F !== n() && (F = n(), n() ? s(_).hideProgress() : s(_).showProgress());
  }), ue("SMUI:checkbox:mount", () => {
    s(_) && G && s(_).layout();
  }), ue("SMUI:data-table:header:mount", (V) => {
    X(S, V, !0);
  }), ue("SMUI:data-table:header:unmount", () => {
    X(S, void 0);
  }), ue("SMUI:data-table:body:mount", (V) => {
    X(L, V, !0);
  }), ue("SMUI:data-table:body:unmount", () => {
    X(L, void 0);
  }), at(() => (X(
    _,
    new Xb({
      addClass: K,
      removeClass: ne,
      getHeaderCellElements: () => {
        var V;
        return ((V = s(S)) == null ? void 0 : V.cells.map(($) => $.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var V;
        return ((V = s(S)) == null ? void 0 : V.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (V, $) => {
        var me;
        return ((me = s(S)) == null ? void 0 : me.orderedCells[V].getAttr($)) ?? null;
      },
      setAttributeByHeaderCellIndex: (V, $, me) => {
        var De;
        (De = s(S)) == null || De.orderedCells[V].addAttr($, me);
      },
      setClassNameByHeaderCellIndex: (V, $) => {
        var me;
        (me = s(S)) == null || me.orderedCells[V].addClass($);
      },
      removeClassNameByHeaderCellIndex: (V, $) => {
        var me;
        (me = s(S)) == null || me.orderedCells[V].removeClass($);
      },
      notifySortAction: (V) => {
        d(V.columnId), m(V.sortValue), Ke(P(), "SMUIDataTableSorted", V);
      },
      getTableContainerHeight: () => A.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const V = P().querySelector(".mdc-data-table__header-row");
        if (!V)
          throw new Error("MDCDataTable: Table header element not found.");
        return V.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (V) => {
        X(w, V, !0);
      },
      addClassAtRowIndex: (V, $) => {
        var me;
        (me = s(L)) == null || me.orderedRows[V].addClass($);
      },
      getRowCount: () => {
        var V;
        return ((V = s(L)) == null ? void 0 : V.rows.length) ?? 0;
      },
      getRowElements: () => {
        var V;
        return ((V = s(L)) == null ? void 0 : V.rows.map(($) => $.element)) ?? [];
      },
      getRowIdAtIndex: (V) => {
        var $;
        return (($ = s(L)) == null ? void 0 : $.orderedRows[V].rowId) ?? null;
      },
      getRowIndexByChildElement: (V) => {
        var $;
        return (($ = s(L)) == null ? void 0 : $.orderedRows.map((me) => me.element).indexOf(a(V, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var V;
        return ((V = s(L)) == null ? void 0 : V.rows.filter(($) => $.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (V) => {
        var me;
        const $ = (me = s(L)) == null ? void 0 : me.orderedRows[V].checkbox;
        return $ ? $.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var $;
        const V = ($ = s(S)) == null ? void 0 : $.checkbox;
        return V ? V.checked : !1;
      },
      isRowsSelectable: () => !!P().querySelector(".mdc-data-table__row-checkbox") || !!P().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (V) => {
        var me;
        const $ = (me = s(L)) == null ? void 0 : me.orderedRows[V.rowIndex];
        $ && Ke(P(), "SMUIDataTableSelectionChanged", {
          row: $.element,
          rowId: $.rowId,
          rowIndex: V.rowIndex,
          selected: V.selected
        });
      },
      notifySelectedAll: () => {
        U(!1), Ke(P(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        U(!1), Ke(P(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (V) => Ke(P(), "SMUIDataTableClickRow", V),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (V, $) => {
        var me;
        (me = s(L)) == null || me.orderedRows[V].removeClass($);
      },
      setAttributeAtRowIndex: (V, $, me) => {
        var De;
        (De = s(L)) == null || De.orderedRows[V].addAttr($, me);
      },
      setHeaderRowCheckboxChecked: (V) => {
        var me;
        const $ = (me = s(S)) == null ? void 0 : me.checkbox;
        $ && ($.checked = V);
      },
      setHeaderRowCheckboxIndeterminate: U,
      setRowCheckboxCheckedAtIndex: (V, $) => {
        var De;
        const me = (De = s(L)) == null ? void 0 : De.orderedRows[V].checkbox;
        me && (me.checked = $);
      },
      setSortStatusLabelByHeaderCellIndex: (V, $) => {
      }
    }),
    !0
  ), s(_).init(), s(_).layout(), G = !0, () => {
    var V;
    (V = s(_)) == null || V.destroy();
  })), En(() => {
    J && J();
  });
  function N(V) {
    s(_) && s(_).handleRowCheckboxChange(V);
  }
  function K(V) {
    T[V] || (T[V] = !0);
  }
  function ne(V) {
    (!(V in T) || T[V]) && (T[V] = !1);
  }
  function U(V) {
    var me;
    const $ = (me = s(S)) == null ? void 0 : me.checkbox;
    $ && ($.indeterminate = V);
  }
  function D(V) {
    if (!s(_) || !V.detail.target)
      return;
    const $ = a(V.detail.target, ".mdc-data-table__header-cell--with-sort");
    $ && Ie($);
  }
  function W(V) {
    if (!s(_) || !V.detail.target)
      return;
    const $ = a(V.detail.target, ".mdc-data-table__row");
    $ && s(_) && s(_).handleRowClick({ rowId: V.detail.rowId, row: $ });
  }
  function Ie(V) {
    var Ve, ut;
    const $ = ((Ve = s(S)) == null ? void 0 : Ve.orderedCells) ?? [], me = $.map((gt) => gt.element).indexOf(V);
    if (me === -1)
      return;
    const De = $[me].columnId ?? null;
    (ut = s(_)) == null || ut.handleSortAction({ columnId: De, columnIndex: me, headerCell: V });
  }
  function B() {
    var V;
    return (V = s(_)) == null ? void 0 : V.layout();
  }
  function P() {
    return I;
  }
  var M = { layout: B, getElement: P }, O = Zb(), ee = (V) => {
    var $;
    s(_) && s(_).handleHeaderRowCheckboxChange(), ($ = e.onSMUIDataTableHeaderCheckboxChange) == null || $.call(e, V);
  }, Z = (V) => {
    var $;
    D(V), ($ = e.onSMUIDataTableHeaderClick) == null || $.call(e, V);
  }, ie = (V) => {
    var $;
    W(V), ($ = e.onSMUIDataTableRowClick) == null || $.call(e, V);
  }, Ae = (V) => {
    var $;
    N(V), ($ = e.onSMUIDataTableBodyCheckboxChange) == null || $.call(e, V);
  };
  Ue(
    O,
    (V, $) => ({
      class: V,
      ...$,
      onSMUIDataTableHeaderCheckboxChange: ee,
      onSMUIDataTableHeaderClick: Z,
      onSMUIDataTableRowClick: ie,
      onSMUIDataTableBodyCheckboxChange: Ae
    }),
    [
      () => Me({
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": l(),
        ...T,
        [u()]: !0
      }),
      () => Vn(E, ["container$", "table$"])
    ]
  );
  var te = de(O);
  Ue(te, (V, $) => ({ class: V, ...$ }), [
    () => Me({
      "mdc-data-table__table-container": !0,
      [p()]: !0
    }),
    () => it(E, "container$")
  ]);
  var oe = de(te);
  Ue(oe, (V, $) => ({ class: V, ...$ }), [
    () => Me({ "mdc-data-table__table": !0, [y()]: !0 }),
    () => it(E, "table$")
  ]);
  var Te = de(oe);
  Ee(Te, () => e.children ?? ve), Pe(oe, (V, $) => Q == null ? void 0 : Q(V, $), b), Ce(te, (V) => A = V, () => A), Pe(te, (V, $) => Q == null ? void 0 : Q(V, $), h);
  var Re = be(te, 2);
  {
    var Ne = (V) => {
      var $ = Yb(), me = be(de($), 2);
      Ee(me, () => e.progress ?? ve), Oe((De) => mt($, De), [
        () => Object.entries(s(w)).map(([De, Ve]) => `${De}: ${Ve};`).join(" ")
      ]), x(V, $);
    };
    se(Re, (V) => {
      e.progress && V(Ne);
    });
  }
  var Fe = be(Re, 2);
  Ee(Fe, () => e.paginate ?? ve), Ce(O, (V) => I = V, () => I), Pe(O, (V, $) => Q == null ? void 0 : Q(V, $), o), x(t, O);
  var He = we(M);
  return i(), He;
}
var Jb = /* @__PURE__ */ ce("<thead><!></thead>");
function $b(t, e) {
  xe(e, !0);
  let n = v(e, "use", 19, () => []), r = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i, a = /* @__PURE__ */ he(void 0), o = [];
  const u = /* @__PURE__ */ new WeakMap();
  ue("SMUI:data-table:row:header", !0);
  const l = _e("SMUI:checkbox:mount");
  ue("SMUI:checkbox:mount", (y) => {
    X(a, y, !0), l && l(y);
  });
  const c = _e("SMUI:checkbox:unmount");
  ue("SMUI:checkbox:unmount", (y) => {
    X(a, void 0), c && c(y);
  }), ue("SMUI:data-table:cell:mount", (y) => {
    o.push(y), u.set(y.element, y);
  }), ue("SMUI:data-table:cell:unmount", (y) => {
    const E = o.findIndex((I) => I === y);
    E !== -1 && o.splice(E, 1), u.delete(y.element);
  });
  const d = _e("SMUI:data-table:header:mount"), m = _e("SMUI:data-table:header:unmount");
  at(() => {
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
      m && m(y);
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
  var h = { getElement: g }, p = Jb();
  Ue(p, () => ({ ...r }));
  var b = de(p);
  return Ee(b, () => e.children ?? ve), Ce(p, (y) => i = y, () => i), Pe(p, (y, E) => Q == null ? void 0 : Q(y, E), n), x(t, p), we(h);
}
var e_ = /* @__PURE__ */ ce("<tbody><!></tbody>");
function t_(t, e) {
  xe(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "children"
  ]), a, o = [];
  const u = /* @__PURE__ */ new WeakMap();
  ue("SMUI:data-table:row:header", !1), ue("SMUI:data-table:row:mount", (p) => {
    o.push(p), u.set(p.element, p);
  }), ue("SMUI:data-table:row:unmount", (p) => {
    const b = o.findIndex((y) => y === p);
    b !== -1 && o.splice(b, 1), u.delete(p.element);
  });
  const l = _e("SMUI:data-table:body:mount"), c = _e("SMUI:data-table:body:unmount");
  at(() => {
    const p = {
      get rows() {
        return o;
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
    return [...m().querySelectorAll(".mdc-data-table__row")].map((p) => u.get(p)).filter((p) => p && p._smui_data_table_row_accessor);
  }
  function m() {
    return a;
  }
  var f = { getElement: m }, g = e_();
  Ue(g, (p) => ({ class: p, ...i }), [
    () => Me({ "mdc-data-table__content": !0, [r()]: !0 })
  ]);
  var h = de(g);
  return Ee(h, () => e.children ?? ve), Ce(g, (p) => a = p, () => a), Pe(g, (p, b) => Q == null ? void 0 : Q(p, b), n), x(t, g), we(f);
}
let n_ = 0;
var r_ = /* @__PURE__ */ ce("<tr><!></tr>");
function so(t, e) {
  xe(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "rowId", 19, () => "SMUI-data-table-row-" + n_++), a = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "rowId",
    "children"
  ]), o, u = /* @__PURE__ */ he(void 0), l = ye({}), c = ye({}), d = _e("SMUI:data-table:row:header");
  const m = _e("SMUI:checkbox:mount");
  ue("SMUI:checkbox:mount", (k) => {
    X(u, k, !0), m && m(k);
  });
  const f = _e("SMUI:checkbox:unmount");
  ue("SMUI:checkbox:unmount", (k) => {
    X(u, void 0), f && f(k);
  });
  const g = _e("SMUI:data-table:row:mount"), h = _e("SMUI:data-table:row:unmount");
  at(() => {
    const k = d ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return A();
      },
      get checkbox() {
        return s(u);
      },
      get rowId() {
      },
      get selected() {
        return (s(u) && s(u).checked) ?? !1;
      },
      addClass: p,
      removeClass: b,
      getAttr: y,
      addAttr: E
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return A();
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
      addClass: p,
      removeClass: b,
      getAttr: y,
      addAttr: E
    };
    return g && g(k), () => {
      h && h(k);
    };
  });
  function p(k) {
    l[k] || (l[k] = !0);
  }
  function b(k) {
    (!(k in l) || l[k]) && (l[k] = !1);
  }
  function y(k) {
    return k in c ? c[k] ?? null : A().getAttribute(k);
  }
  function E(k, J) {
    c[k] !== J && (c[k] = J);
  }
  function I(k) {
    Ke(A(), "SMUIDataTableHeaderClick", k);
  }
  function _(k) {
    Ke(A(), "SMUIDataTableRowClick", { rowId: i(), target: k.target });
  }
  function A() {
    return o;
  }
  var S = { getElement: A }, L = r_(), T = (k) => {
    var J;
    d ? I(k) : _(k), (J = e.onclick) == null || J.call(e, k);
  };
  Ue(
    L,
    (k) => ({
      class: k,
      "aria-selected": s(u) ? s(u).checked ? "true" : "false" : void 0,
      ...c,
      ...a,
      onclick: T
    }),
    [
      () => Me({
        "mdc-data-table__header-row": d,
        "mdc-data-table__row": !d,
        "mdc-data-table__row--selected": !d && s(u) && s(u).checked,
        ...l,
        [r()]: !0
      })
    ]
  );
  var w = de(L);
  return Ee(w, () => e.children ?? ve), Ce(L, (k) => o = k, () => o), Pe(L, (k, J) => Q == null ? void 0 : Q(k, J), n), x(t, L), we(S);
}
let i_ = 0;
var a_ = /* @__PURE__ */ ce('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), o_ = /* @__PURE__ */ ce("<th><!></th>"), s_ = /* @__PURE__ */ ce("<td><!></td>");
function Aa(t, e) {
  xe(e, !0);
  const n = () => Bn(y, "$sort", i), r = () => Bn(E, "$sortDirection", i), [i, a] = ir();
  let o = _e("SMUI:data-table:row:header"), u = v(e, "use", 19, () => []), l = v(e, "class", 3, ""), c = v(e, "numeric", 3, !1), d = v(e, "checkbox", 3, !1), m = v(e, "columnId", 19, () => o ? "SMUI-data-table-column-" + i_++ : "SMUI-data-table-unused"), f = v(e, "sortable", 19, () => _e("SMUI:data-table:sortable")), g = /* @__PURE__ */ je(e, [
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
  ]), h, p = ye({}), b = ye({}), y = _e("SMUI:data-table:sort"), E = _e("SMUI:data-table:sortDirection"), I = _e("SMUI:data-table:sortAscendingAriaLabel"), _ = _e("SMUI:data-table:sortDescendingAriaLabel");
  f() && (ue("SMUI:label:context", "data-table:sortable-header-cell"), ue("SMUI:icon-button:context", "data-table:sortable-header-cell"), ue("SMUI:icon-button:aria-describedby", m() + "-status-label"));
  const A = _e("SMUI:data-table:cell:mount"), S = _e("SMUI:data-table:cell:unmount");
  at(() => {
    const U = o ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return z();
      },
      get columnId() {
        return m();
      },
      addClass: L,
      removeClass: T,
      getAttr: w,
      addAttr: k
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return z();
      },
      get columnId() {
      },
      addClass: L,
      removeClass: T,
      getAttr: w,
      addAttr: k
    };
    return A && A(U), () => {
      S && S(U);
    };
  });
  function L(U) {
    p[U] || (p[U] = !0);
  }
  function T(U) {
    (!(U in p) || p[U]) && (p[U] = !1);
  }
  function w(U) {
    return U in b ? b[U] ?? null : z().getAttribute(U);
  }
  function k(U, D) {
    b[U] !== D && (b[U] = D);
  }
  function J(U) {
    Ke(z(), "SMUIDataTableHeaderCheckboxChange", U);
  }
  function G(U) {
    Ke(z(), "SMUIDataTableBodyCheckboxChange", U);
  }
  function z() {
    return h;
  }
  var R = { getElement: z }, C = re(), F = Y(C);
  {
    var N = (U) => {
      var D = o_(), W = (M) => {
        var O;
        d() && J(M), (O = e.onchange) == null || O.call(e, M);
      };
      Ue(
        D,
        (M) => ({
          class: M,
          role: "columnheader",
          scope: "col",
          "data-column-id": m(),
          "aria-sort": f() ? n() === m() ? r() : "none" : void 0,
          ...b,
          ...g,
          onchange: W
        }),
        [
          () => Me({
            "mdc-data-table__header-cell": !0,
            "mdc-data-table__header-cell--numeric": c(),
            "mdc-data-table__header-cell--checkbox": d(),
            "mdc-data-table__header-cell--with-sort": f(),
            "mdc-data-table__header-cell--sorted": f() && n() === m(),
            ...p,
            [l()]: !0
          })
        ]
      );
      var Ie = de(D);
      {
        var B = (M) => {
          var O = a_(), ee = de(O);
          Ee(ee, () => e.children ?? ve);
          var Z = be(ee, 2), ie = de(Z);
          Oe(() => {
            _r(Z, "id", `${m() ?? ""}-status-label`), $e(ie, n() === m() ? r() === "ascending" ? I : _ : "");
          }), x(M, O);
        }, P = (M) => {
          var O = re(), ee = Y(O);
          Ee(ee, () => e.children ?? ve), x(M, O);
        };
        se(Ie, (M) => {
          f() ? M(B) : M(P, !1);
        });
      }
      Ce(D, (M) => h = M, () => h), Pe(D, (M, O) => Q == null ? void 0 : Q(M, O), u), x(U, D);
    }, K = (U) => {
      var D = s_(), W = (B) => {
        var P;
        d() && G(B), (P = e.onchange) == null || P.call(e, B);
      };
      Ue(
        D,
        (B) => ({
          class: B,
          ...b,
          ...g,
          onchange: W
        }),
        [
          () => Me({
            "mdc-data-table__cell": !0,
            "mdc-data-table__cell--numeric": c(),
            "mdc-data-table__cell--checkbox": d(),
            ...p,
            [l()]: !0
          })
        ]
      );
      var Ie = de(D);
      Ee(Ie, () => e.children ?? ve), Ce(D, (B) => h = B, () => h), Pe(D, (B, P) => Q == null ? void 0 : Q(B, P), u), x(U, D);
    };
    se(F, (U) => {
      o ? U(N) : U(K, !1);
    });
  }
  x(t, C);
  var ne = we(R);
  return a(), ne;
}
Sn(["click"]);
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
var l_ = {
  ROOT: "mdc-form-field"
}, u_ = {
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
var c_ = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(n) {
      var r = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return r.click = function() {
        r.handleClick();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return l_;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return u_;
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
let d_ = 0;
var f_ = /* @__PURE__ */ ce("<div><!> <label><!></label></div>");
function h_(t, e) {
  xe(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "align", 3, "start"), a = v(e, "noWrap", 3, !1), o = v(e, "inputId", 19, () => "SMUI-form-field-" + d_++), u = v(e, "label$use", 19, () => []), l = /* @__PURE__ */ je(e, [
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
  ]), c, d = /* @__PURE__ */ he(void 0), m = new Ii(), f, g = /* @__PURE__ */ he(void 0);
  ue("SMUI:generic:input:props", { id: o() }), ue("SMUI:generic:input:mount", (_) => {
    X(g, _, !0);
  }), ue("SMUI:generic:input:unmount", () => {
    X(g, void 0);
  }), at(() => (X(
    d,
    new c_({
      activateInputRipple: () => {
        s(g) && s(g).activateRipple();
      },
      deactivateInputRipple: () => {
        s(g) && s(g).deactivateRipple();
      },
      deregisterInteractionHandler: (_, A) => m.off(f, _, A),
      registerInteractionHandler: (_, A) => m.on(f, _, A)
    }),
    !0
  ), s(d).init(), () => {
    var _;
    (_ = s(d)) == null || _.destroy(), m.clear();
  }));
  function h() {
    return c;
  }
  var p = { getElement: h }, b = f_();
  Ue(b, (_, A) => ({ class: _, ...A }), [
    () => Me({
      "mdc-form-field": !0,
      "mdc-form-field--align-end": i() === "end",
      "mdc-form-field--nowrap": a(),
      [r()]: !0
    }),
    () => Vn(l, ["label$"])
  ]);
  var y = de(b);
  Ee(y, () => e.children ?? ve);
  var E = be(y, 2);
  Ue(E, (_) => ({ for: o(), ..._ }), [() => it(l, "label$")]);
  var I = de(E);
  return Ee(I, () => e.label ?? ve), Ce(E, (_) => f = _, () => f), Pe(E, (_, A) => Q == null ? void 0 : Q(_, A), u), Ce(b, (_) => c = _, () => c), Pe(b, (_, A) => Q == null ? void 0 : Q(_, A), n), x(t, b), we(p);
}
var v_ = (t, e) => {
  var n;
  t.stopPropagation(), (n = e.onClick) == null || n.call(e, t);
}, m_ = /* @__PURE__ */ ce('<button class="icon-button svelte-jv2py4"><!></button>');
function g_(t, e) {
  xe(e, !0);
  let n = v(e, "tooltipSide", 3, "top"), r = v(e, "showDelay", 3, 1e3), i = v(e, "fillColor", 3, "var(--mdc-theme-primary)"), a = v(e, "size", 3, "25px"), o = /* @__PURE__ */ fe(() => `fill: ${i()}; margin: 0; width: ${a()}; height: ${a()};`);
  Fa(t, {
    get content() {
      return e.tooltip;
    },
    get hoverDelay() {
      return r();
    },
    get side() {
      return n();
    },
    children: (u, l) => {
      var c = m_();
      c.__click = [v_, e];
      var d = de(c);
      {
        var m = (g) => {
          yd(g, {
            get svgStyles() {
              return s(o);
            }
          });
        }, f = (g) => {
          var h = re(), p = Y(h);
          {
            var b = (E) => {
              Eb(E, {
                get svgStyles() {
                  return s(o);
                }
              });
            }, y = (E) => {
              var I = re(), _ = Y(I);
              {
                var A = (L) => {
                  _d(L, {
                    get svgStyles() {
                      return s(o);
                    }
                  });
                }, S = (L) => {
                  var T = re(), w = Y(T);
                  {
                    var k = (G) => {
                      Ib(G, {
                        get svgStyles() {
                          return s(o);
                        }
                      });
                    }, J = (G) => {
                      var z = re(), R = Y(z);
                      {
                        var C = (N) => {
                          xb(N, {
                            get svgStyles() {
                              return s(o);
                            }
                          });
                        }, F = (N) => {
                          var K = re(), ne = Y(K);
                          {
                            var U = (W) => {
                              Lb(W, {
                                get svgStyles() {
                                  return s(o);
                                }
                              });
                            }, D = (W) => {
                              var Ie = re(), B = Y(Ie);
                              {
                                var P = (O) => {
                                  Rb(O, {
                                    get svgStyles() {
                                      return s(o);
                                    }
                                  });
                                }, M = (O) => {
                                  var ee = re(), Z = Y(ee);
                                  {
                                    var ie = (te) => {
                                      Mb(te, {
                                        get svgStyles() {
                                          return s(o);
                                        }
                                      });
                                    }, Ae = (te) => {
                                      var oe = vt();
                                      Oe(() => $e(oe, `Unsupported supported type: ${e.type ?? ""}`)), x(te, oe);
                                    };
                                    se(
                                      Z,
                                      (te) => {
                                        e.type === "star" ? te(ie) : te(Ae, !1);
                                      },
                                      !0
                                    );
                                  }
                                  x(O, ee);
                                };
                                se(
                                  B,
                                  (O) => {
                                    e.type === "close" ? O(P) : O(M, !1);
                                  },
                                  !0
                                );
                              }
                              x(W, Ie);
                            };
                            se(
                              ne,
                              (W) => {
                                e.type === "link-off" ? W(U) : W(D, !1);
                              },
                              !0
                            );
                          }
                          x(N, K);
                        };
                        se(
                          R,
                          (N) => {
                            e.type === "wand-stars" ? N(C) : N(F, !1);
                          },
                          !0
                        );
                      }
                      x(G, z);
                    };
                    se(
                      w,
                      (G) => {
                        e.type === "visibility" ? G(k) : G(J, !1);
                      },
                      !0
                    );
                  }
                  x(L, T);
                };
                se(
                  _,
                  (L) => {
                    e.type === "edit" ? L(A) : L(S, !1);
                  },
                  !0
                );
              }
              x(E, I);
            };
            se(
              p,
              (E) => {
                e.type === "duplicate" ? E(b) : E(y, !1);
              },
              !0
            );
          }
          x(g, h);
        };
        se(d, (g) => {
          e.type === "delete" ? g(m) : g(f, !1);
        });
      }
      Oe(() => _r(c, "aria-label", e.tooltip)), x(u, c);
    },
    $$slots: { default: !0 }
  }), we();
}
Sn(["click"]);
function qs(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
var p_ = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
qs({}, p_.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
var lo, Au = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
};
lo = {}, qs(lo, Au.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), qs(lo, Au.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list");
function b_(t) {
  return t * t * t;
}
function Id(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function __(t, { from: e, to: n }, r = {}) {
  var { delay: i = 0, duration: a = (S) => Math.sqrt(S) * 120, easing: o = Id } = r, u = getComputedStyle(t), l = u.transform === "none" ? "" : u.transform, [c, d] = u.transformOrigin.split(" ").map(parseFloat);
  c /= t.clientWidth, d /= t.clientHeight;
  var m = y_(t), f = t.clientWidth / n.width / m, g = t.clientHeight / n.height / m, h = e.left + e.width * c, p = e.top + e.height * d, b = n.left + n.width * c, y = n.top + n.height * d, E = (h - b) * f, I = (p - y) * g, _ = e.width / n.width, A = e.height / n.height;
  return {
    delay: i,
    duration: typeof a == "function" ? a(Math.sqrt(E * E + I * I)) : a,
    easing: o,
    css: (S, L) => {
      var T = L * E, w = L * I, k = S + L * _, J = S + L * A;
      return `transform: ${l} translate(${T}px, ${w}px) scale(${k}, ${J});`;
    }
  };
}
function y_(t) {
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
function I_(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function Cu(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
function Ro(t, { delay: e = 0, duration: n = 400, easing: r = I_, x: i = 0, y: a = 0, opacity: o = 0 } = {}) {
  const u = getComputedStyle(t), l = +u.opacity, c = u.transform === "none" ? "" : u.transform, d = l * (1 - o), [m, f] = Cu(i), [g, h] = Cu(a);
  return {
    delay: e,
    duration: n,
    easing: r,
    css: (p, b) => `
			transform: ${c} translate(${(1 - p) * m}${f}, ${(1 - p) * g}${h});
			opacity: ${l - d * b}`
  };
}
Sn([
  "click",
  "keydown",
  "pointerdown",
  "pointerup",
  "pointermove"
]);
function S_(t, e) {
  var n;
  (n = e()) == null || n();
}
var E_ = /* @__PURE__ */ ce('<div class="detail svelte-4xu36c"> </div>'), A_ = /* @__PURE__ */ ce('<div class="toast-card svelte-4xu36c"><div class="icon svelte-4xu36c"><!></div> <div class="content svelte-4xu36c"><div class="summary svelte-4xu36c"> </div> <!></div> <button class="close svelte-4xu36c"><!></button></div>');
function C_(t, e) {
  xe(e, !0);
  let n = v(e, "onClose", 3, () => {
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
  var a = A_(), o = de(a), u = de(o);
  Vs(u, {
    class: "material-icons",
    children: (p, b) => {
      var y = vt();
      Oe(() => $e(y, r[e.type])), x(p, y);
    },
    $$slots: { default: !0 }
  });
  var l = be(o, 2), c = de(l), d = de(c), m = be(c, 2);
  {
    var f = (p) => {
      var b = E_(), y = de(b);
      Oe(() => $e(y, e.detail)), x(p, b);
    };
    se(m, (p) => {
      e.detail && p(f);
    });
  }
  var g = be(l, 2);
  g.__click = [S_, n];
  var h = de(g);
  Vs(h, {
    class: "material-icons",
    children: (p, b) => {
      var y = vt("close");
      x(p, y);
    },
    $$slots: { default: !0 }
  }), Oe(() => {
    mt(a, `--color:${i[e.type] ?? ""}`), $e(d, e.summary);
  }), Ao(1, a, () => Ro, () => ({ x: 0, y: 30, duration: 150, easing: b_ })), Ao(2, a, () => Ro, () => ({ x: 50, y: 0, duration: 150, easing: Id })), x(t, a), we();
}
Sn(["click"]);
const T_ = 4e3;
function x_() {
  let t = ye({ items: [] }), e = 0;
  const n = (i) => {
    t.items = t.items.filter((a) => a.id !== i);
  }, r = (i, a, o, u = T_) => {
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
const wr = x_();
var w_ = /* @__PURE__ */ ce("<div><!></div>"), L_ = /* @__PURE__ */ ce('<div class="toast-host svelte-11vwiay"></div>');
function O_(t, e) {
  xe(e, !1);
  const n = wr.toasts;
  wh();
  var r = L_();
  Qn(r, 13, () => n.items, (i) => i.id, (i, a) => {
    var o = w_(), u = de(o);
    C_(u, {
      get summary() {
        return s(a).summary;
      },
      get detail() {
        return s(a).detail;
      },
      get type() {
        return s(a).type;
      },
      onClose: () => wr.remove(s(a).id)
    }), Th(o, () => __, null), x(i, o);
  }), x(t, r), we();
}
var R_ = (t, e) => {
  t.stopPropagation(), e.onOpen();
}, D_ = (t, e) => {
  t.stopPropagation(), e.onRemove();
}, M_ = /* @__PURE__ */ ce('<button type="button" style="all: unset; display: flex; align-items: center; justify-content: center;" class="svelte-1mybgc7"><!></button>'), P_ = /* @__PURE__ */ ce('<span class="filter-badge__seperator svelte-1mybgc7">|</span> <span class="filter-badge__value svelte-1mybgc7"> </span> <span class="filter-badge__arrow-down"><!></span>', 1), H_ = /* @__PURE__ */ ce('<button type="button"><div class="filter-badge__icon svelte-1mybgc7"><!></div> <span class="filter-badge__label svelte-1mybgc7"> </span> <!></button>');
function N_(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ fe(() => !!e.value);
  var r = H_();
  r.__click = [R_, e];
  var i = de(r), a = de(i);
  {
    var o = (f) => {
      Fa(f, {
        content: "Remove Filter",
        hoverDelay: 500,
        side: "top",
        children: (g, h) => {
          var p = M_();
          p.__click = [D_, e];
          var b = de(p);
          gl(b, {
            svgStyles: "fill: grey; height: filt-content; width: fit-content;"
          }), x(g, p);
        },
        $$slots: { default: !0 }
      });
    }, u = (f) => {
      Fa(f, {
        content: "Add Filter",
        hoverDelay: 501,
        side: "top",
        children: (g, h) => {
          Hb(g, {
            svgStyles: "fill: grey; height: filt-content; width: fit-content;"
          });
        },
        $$slots: { default: !0 }
      });
    };
    se(a, (f) => {
      s(n) ? f(o) : f(u, !1);
    });
  }
  var l = be(i, 2), c = de(l), d = be(l, 2);
  {
    var m = (f) => {
      var g = P_(), h = be(Y(g), 2), p = de(h), b = be(h, 2), y = de(b);
      Cb(y, { svgStyles: "fill: gray;" }), Oe(() => $e(p, e.value)), x(f, g);
    };
    se(d, (f) => {
      s(n) && f(m);
    });
  }
  Oe(() => {
    ol(r, 1, `filter-badge ${s(n) ? "filter-badge--active" : "filter-badge--inactive"}`, "svelte-1mybgc7"), $e(c, e.label);
  }), x(t, r), we();
}
Sn(["click"]);
var U_ = /* @__PURE__ */ ce('<div><input/> <div class="mdc-checkbox__background"><svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24"><path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg> <div class="mdc-checkbox__mixedmark"></div></div> <div class="mdc-checkbox__ripple"></div></div>');
function F_(t, e) {
  xe(e, !0);
  let n = () => {
  };
  function r(te) {
    return te === n;
  }
  let i = v(e, "use", 19, () => []), a = v(e, "class", 3, ""), o = v(e, "style", 3, ""), u = v(e, "disabled", 15, !1), l = v(e, "touch", 3, !1), c = v(e, "indeterminate", 15, n), d = v(e, "group", 11, n), m = v(e, "checked", 15, n), f = v(e, "value", 3, null), g = v(e, "valueKey", 3, n), h = v(e, "input$use", 19, () => []), p = v(e, "input$class", 3, ""), b = /* @__PURE__ */ je(e, [
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
  ]), y, E = /* @__PURE__ */ he(void 0), I = /* @__PURE__ */ he(void 0), _ = ye({}), A = ye({}), S = ye({}), L = /* @__PURE__ */ he(!1), T = ye(_e("SMUI:generic:input:props") ?? {}), w = /* @__PURE__ */ he(ye(r(d()) ? r(m()) ? !1 : !!m() : d().findIndex((te) => te === f()) !== -1)), k = _e("SMUI:checkbox:context"), J = _e("SMUI:data-table:row:header"), G = m(), z = r(d()) ? [] : [...d()], R = s(w);
  Le(() => {
    let te = !1;
    if (!r(d()))
      if (R !== s(w)) {
        const oe = d().findIndex((Te) => Te === f());
        s(w) && oe === -1 ? d().push(f()) : !s(w) && oe !== -1 && d().splice(oe, 1), te = !0;
      } else {
        const oe = z.findIndex((Re) => Re === f()), Te = d().findIndex((Re) => Re === f());
        oe > -1 && Te === -1 ? (X(w, !1), te = !0) : Te > -1 && oe === -1 && (X(w, !0), te = !0);
      }
    r(m()) ? R !== s(w) && (te = !0) : (m() !== (c() ? null : s(w)) || s(w) !== R) && (m() === G && s(w) !== R ? (m(s(w)), r(c()) || c(!1)) : X(w, !!m()), te = !0), s(I) && (r(c()) ? s(I).indeterminate && (s(I).indeterminate = !1, te = !0) : !c() && s(I).indeterminate ? (s(I).indeterminate = !1, te = !0) : c() && !s(I).indeterminate && (s(I).indeterminate = !0, X(w, !1), te = !0)), G = m(), z = r(d()) ? [] : [...d()], R = s(w), te && s(E) && s(E).handleChange();
  });
  const C = _e("SMUI:generic:input:mount"), F = _e("SMUI:generic:input:unmount"), N = _e("SMUI:checkbox:mount"), K = _e("SMUI:checkbox:unmount");
  at(() => {
    if (s(I) == null)
      throw new Error("Checkbox is not defined.");
    s(I).indeterminate = !r(c()) && c(), X(
      E,
      new zb({
        addClass: ne,
        forceLayout: () => P().offsetWidth,
        hasNativeControl: () => !0,
        isAttachedToDOM: () => !!P().parentNode,
        isChecked: () => s(w),
        isIndeterminate: () => r(c()) ? !1 : c(),
        removeClass: U,
        removeNativeControlAttr: Ie,
        setNativeControlAttr: W,
        setNativeControlDisabled: (oe) => u(oe)
      }),
      !0
    );
    const te = {
      _smui_checkbox_accessor: !0,
      get element() {
        return P();
      },
      get checked() {
        return s(w);
      },
      set checked(oe) {
        s(w) !== oe && X(w, oe, !0);
      },
      get indeterminate() {
        return r(c()) ? !1 : c();
      },
      set indeterminate(oe) {
        c(oe);
      },
      activateRipple() {
        u() || X(L, !0);
      },
      deactivateRipple() {
        X(L, !1);
      }
    };
    return C && C(te), N && N(te), s(E).init(), () => {
      var oe;
      F && F(te), K && K(te), (oe = s(E)) == null || oe.destroy();
    };
  });
  function ne(te) {
    _[te] || (_[te] = !0);
  }
  function U(te) {
    (!(te in _) || _[te]) && (_[te] = !1);
  }
  function D(te, oe) {
    A[te] != oe && (oe === "" || oe == null ? delete A[te] : A[te] = oe);
  }
  function W(te, oe) {
    S[te] !== oe && (S[te] = oe);
  }
  function Ie(te) {
    (!(te in S) || S[te] != null) && (S[te] = void 0);
  }
  function B() {
    return T && T.id;
  }
  function P() {
    return y;
  }
  var M = { getId: B, getElement: P }, O = U_(), ee = (te) => {
    var oe;
    s(E) && s(E).handleAnimationEnd(), (oe = e.onanimationend) == null || oe.call(e, te);
  };
  Ue(O, (te, oe, Te) => ({ class: te, style: oe, ...Te, onanimationend: ee }), [
    () => Me({
      "mdc-checkbox": !0,
      "mdc-checkbox--disabled": u(),
      "mdc-checkbox--touch": l(),
      "mdc-data-table__header-row-checkbox": k === "data-table" && J,
      "mdc-data-table__row-checkbox": k === "data-table" && !J,
      ..._,
      [a()]: !0
    }),
    () => Object.entries(A).map(([te, oe]) => `${te}: ${oe};`).concat([o()]).join(" "),
    () => Vn(b, ["input$"])
  ]);
  var Z = de(O), ie = (te) => {
    var oe;
    Ke(P(), "blur", te), (oe = e.input$onblur) == null || oe.call(e, te);
  }, Ae = (te) => {
    var oe;
    Ke(P(), "focus", te), (oe = e.input$onfocus) == null || oe.call(e, te);
  };
  return Ue(
    Z,
    (te, oe, Te, Re) => ({
      class: te,
      type: "checkbox",
      ...T,
      disabled: u(),
      value: oe,
      "data-indeterminate": Te,
      ...S,
      ...Re,
      onblur: ie,
      onfocus: Ae
    }),
    [
      () => Me({ "mdc-checkbox__native-control": !0, [p()]: !0 }),
      () => r(g()) ? f() : g(),
      () => !r(c()) && c() ? "true" : void 0,
      () => it(b, "input$")
    ],
    void 0,
    void 0,
    !0
  ), Ce(Z, (te) => X(I, te), () => s(I)), Pe(Z, (te, oe) => Q == null ? void 0 : Q(te, oe), h), bi(() => xh(Z, () => s(w), (te) => X(w, te))), Ce(O, (te) => y = te, () => y), Pe(O, (te, oe) => Q == null ? void 0 : Q(te, oe), i), Pe(O, (te, oe) => Qt == null ? void 0 : Qt(te, oe), () => ({
    unbounded: !0,
    addClass: ne,
    removeClass: U,
    addStyle: D,
    active: s(L),
    eventTarget: s(I)
  })), x(t, O), we(M);
}
var k_ = /* @__PURE__ */ ce('<div style="display: flex; flex-direction: column;"></div>');
function B_(t, e) {
  xe(e, !0);
  let n = v(e, "data", 19, () => []), r = v(e, "values", 31, () => ye([]));
  var i = k_();
  Qn(i, 21, n, Ni, (a, o) => {
    h_(a, {
      label: (l) => {
        var c = vt();
        Oe(() => $e(c, s(o).label)), x(l, c);
      },
      children: (l, c) => {
        F_(l, {
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
  }), x(t, i), we();
}
var V_ = (t) => t.stopPropagation(), G_ = /* @__PURE__ */ ce('<div class="custom-menu svelte-58jwwf"><div class="menu-arrow svelte-58jwwf"></div> <h4 class="svelte-58jwwf"> </h4> <div class="custom-menu__content"><!></div> <!></div>'), j_ = /* @__PURE__ */ ce('<div class="filter-wrapper svelte-58jwwf"><!> <!></div>'), q_ = /* @__PURE__ */ ce('<div class="oscd-filters svelte-58jwwf"></div>');
function W_(t, e) {
  xe(e, !0);
  let n = v(e, "filters", 15), r = /* @__PURE__ */ he(null), i = [], a = [];
  function o(h) {
    var p;
    if (!(h.value === void 0 || h.value === null || h.value === ""))
      switch (h.type) {
        case "text":
          return String(h.value);
        case "number":
          return String(h.value);
        case "select":
          const b = (p = h.options) == null ? void 0 : p.find((I) => I.value === h.value);
          return b ? b.label : String(h.value);
        case "multiselect":
          if (!Array.isArray(h.value) || h.value.length === 0) return;
          const y = h.value.map((I) => {
            var A;
            const _ = (A = h.options) == null ? void 0 : A.find((S) => S.value === I);
            return _ ? _.label : String(I);
          }), E = 1;
          return y.length <= E ? y.join(", ") : `${y.slice(0, E).join(", ")} +${y.length - E} more`;
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
    s(r) === h ? X(r, null) : (X(r, h, !0), a[h] = u(n()[h]));
  }
  function c() {
    X(r, null), a[s(r)] = void 0;
  }
  function d(h) {
    var p;
    n(n().map((b, y) => y === h ? { ...b, value: a[h] } : b)), (p = e.onfiltersChanged) == null || p.call(e, [...n()]), X(r, null);
  }
  function m(h) {
    var p;
    n(n().map((b, y) => y === h ? { ...b, value: void 0 } : b)), a[h] = void 0, (p = e.onfiltersChanged) == null || p.call(e, [...n()]), c();
  }
  function f(h) {
    i.some((b) => b && b.contains(h.target)) || c();
  }
  at(() => {
    document.addEventListener("click", f);
  }), En(() => {
    document.removeEventListener("click", f);
  }), Le(() => {
  });
  var g = q_();
  Qn(g, 23, n, (h) => h.key, (h, p, b) => {
    var y = j_(), E = de(y);
    {
      let A = /* @__PURE__ */ fe(() => o(s(p)));
      N_(E, {
        get label() {
          return s(p).label;
        },
        get value() {
          return s(A);
        },
        onOpen: () => l(s(b)),
        onRemove: () => m(s(b))
      });
    }
    var I = be(E, 2);
    {
      var _ = (A) => {
        var S = G_();
        S.__click = [V_];
        var L = be(de(S), 2), T = de(L), w = be(L, 2), k = de(w);
        {
          var J = (R) => {
            Gs(R, {
              get label() {
                return s(p).label;
              },
              get placeholder() {
                return s(p).placeholder;
              },
              get type() {
                return s(p).type;
              },
              style: "width: 100%;",
              get value() {
                return a[s(b)];
              },
              set value(C) {
                a[s(b)] = C;
              }
            });
          }, G = (R) => {
            var C = re(), F = Y(C);
            {
              var N = (ne) => {
                {
                  let U = /* @__PURE__ */ fe(() => {
                    var D;
                    return (D = s(p)) == null ? void 0 : D.options;
                  });
                  Mp(ne, {
                    get label() {
                      return s(p).label;
                    },
                    get data() {
                      return s(U);
                    },
                    get value() {
                      return a[s(b)];
                    },
                    set value(D) {
                      a[s(b)] = D;
                    }
                  });
                }
              }, K = (ne) => {
                var U = re(), D = Y(U);
                {
                  var W = (B) => {
                    {
                      let P = /* @__PURE__ */ fe(() => {
                        var M;
                        return (M = s(p)) == null ? void 0 : M.options;
                      });
                      B_(B, {
                        get data() {
                          return s(P);
                        },
                        get values() {
                          return a[s(b)];
                        },
                        set values(M) {
                          a[s(b)] = M;
                        }
                      });
                    }
                  }, Ie = (B) => {
                    var P = re(), M = Y(P);
                    {
                      var O = (Z) => {
                        Bb(Z, {
                          get value() {
                            return a[s(b)];
                          },
                          set value(ie) {
                            a[s(b)] = ie;
                          }
                        });
                      }, ee = (Z) => {
                        var ie = re(), Ae = Y(ie);
                        {
                          var te = (oe) => {
                            jb(oe, {
                              get value() {
                                return a[s(b)];
                              },
                              set value(Te) {
                                a[s(b)] = Te;
                              }
                            });
                          };
                          se(
                            Ae,
                            (oe) => {
                              s(p).type === "datetime" && oe(te);
                            },
                            !0
                          );
                        }
                        x(Z, ie);
                      };
                      se(
                        M,
                        (Z) => {
                          s(p).type === "date" ? Z(O) : Z(ee, !1);
                        },
                        !0
                      );
                    }
                    x(B, P);
                  };
                  se(
                    D,
                    (B) => {
                      s(p).type === "multiselect" ? B(W) : B(Ie, !1);
                    },
                    !0
                  );
                }
                x(ne, U);
              };
              se(
                F,
                (ne) => {
                  s(p).type === "select" ? ne(N) : ne(K, !1);
                },
                !0
              );
            }
            x(R, C);
          };
          se(k, (R) => {
            s(p).type === "text" || s(p).type === "number" ? R(J) : R(G, !1);
          });
        }
        var z = be(w, 2);
        ia(z, {
          variant: "unelevated",
          style: "background: var(--secondary); color: white; width: 100%;",
          onclick: () => d(s(b)),
          children: (R, C) => {
            var F = vt("Apply");
            x(R, F);
          },
          $$slots: { default: !0 }
        }), Oe(() => $e(T, `Filter by ${s(p).label ?? ""}`)), Ao(2, S, () => Ro, () => ({ y: 5, duration: 120 })), Ao(1, S, () => Ro, () => ({ y: -5, duration: 120 })), x(A, S);
      };
      se(I, (A) => {
        s(r) === s(b) && A(_);
      });
    }
    Ce(y, (A, S) => i[S] = A, (A) => i == null ? void 0 : i[A], () => [s(b)]), x(h, y);
  }), x(t, g), we();
}
Sn(["click"]);
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
var Sd = {
  ANIMATING: "mdc-tab-scroller--animating",
  SCROLL_AREA_SCROLL: "mdc-tab-scroller__scroll-area--scroll",
  SCROLL_TEST: "mdc-tab-scroller__test"
}, z_ = {
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
var pl = (
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
var K_ = (
  /** @class */
  function(t) {
    ze(e, t);
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
  }(pl)
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
var X_ = (
  /** @class */
  function(t) {
    ze(e, t);
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
  }(pl)
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
var Y_ = (
  /** @class */
  function(t) {
    ze(e, t);
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
  }(pl)
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
var Z_ = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(n) {
      var r = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return r.isAnimating = !1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Sd;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return z_;
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
      var i = r[1], a = Ir(i.split(","), 6);
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
        return this.adapter.setScrollAreaScrollLeft(n), new X_(this.adapter);
      var i = this.adapter.computeScrollAreaClientRect(), a = this.adapter.computeScrollContentClientRect(), o = Math.round(a.right - i.right);
      return this.adapter.setScrollAreaScrollLeft(n), o === r ? new Y_(this.adapter) : new K_(this.adapter);
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
var bs;
function Q_(t, e) {
  if (e === void 0 && (e = !0), e && typeof bs < "u")
    return bs;
  var n = t.createElement("div");
  n.classList.add(Sd.SCROLL_TEST), t.body.appendChild(n);
  var r = n.offsetHeight - n.clientHeight;
  return t.body.removeChild(n), e && (bs = r), r;
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
var J_ = {
  ACTIVE: "mdc-tab-indicator--active",
  FADE: "mdc-tab-indicator--fade",
  NO_TRANSITION: "mdc-tab-indicator--no-transition"
}, $_ = {
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
var hr = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(n) {
      return t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return J_;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return $_;
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
var ey = (
  /** @class */
  function(t) {
    ze(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.activate = function() {
      this.adapter.addClass(hr.cssClasses.ACTIVE);
    }, e.prototype.deactivate = function() {
      this.adapter.removeClass(hr.cssClasses.ACTIVE);
    }, e;
  }(hr)
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
var Tu = (
  /** @class */
  function(t) {
    ze(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.activate = function(n) {
      if (!n) {
        this.adapter.addClass(hr.cssClasses.ACTIVE);
        return;
      }
      var r = this.computeContentClientRect(), i = n.width / r.width, a = n.left - r.left;
      this.adapter.addClass(hr.cssClasses.NO_TRANSITION), this.adapter.setContentStyleProperty("transform", "translateX(" + a + "px) scaleX(" + i + ")"), this.computeContentClientRect(), this.adapter.removeClass(hr.cssClasses.NO_TRANSITION), this.adapter.addClass(hr.cssClasses.ACTIVE), this.adapter.setContentStyleProperty("transform", "");
    }, e.prototype.deactivate = function() {
      this.adapter.removeClass(hr.cssClasses.ACTIVE);
    }, e;
  }(hr)
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
var uo = {
  ACTIVE: "mdc-tab--active"
}, Ca = {
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
var ty = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(n) {
      var r = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return r.focusOnActivate = !0, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return uo;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Ca;
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
      return this.adapter.hasClass(uo.ACTIVE);
    }, e.prototype.setFocusOnActivate = function(n) {
      this.focusOnActivate = n;
    }, e.prototype.activate = function(n) {
      this.adapter.addClass(uo.ACTIVE), this.adapter.setAttr(Ca.ARIA_SELECTED, "true"), this.adapter.setAttr(Ca.TABINDEX, "0"), this.adapter.activateIndicator(n), this.focusOnActivate && this.adapter.focus();
    }, e.prototype.deactivate = function() {
      this.isActive() && (this.adapter.removeClass(uo.ACTIVE), this.adapter.setAttr(Ca.ARIA_SELECTED, "false"), this.adapter.setAttr(Ca.TABINDEX, "-1"), this.adapter.deactivateIndicator());
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
var Rt = {
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
var Si = /* @__PURE__ */ new Set();
Si.add(Rt.ARROW_LEFT_KEY);
Si.add(Rt.ARROW_RIGHT_KEY);
Si.add(Rt.END_KEY);
Si.add(Rt.HOME_KEY);
Si.add(Rt.ENTER_KEY);
Si.add(Rt.SPACE_KEY);
var Ei = /* @__PURE__ */ new Map();
Ei.set(Un.ARROW_LEFT_KEYCODE, Rt.ARROW_LEFT_KEY);
Ei.set(Un.ARROW_RIGHT_KEYCODE, Rt.ARROW_RIGHT_KEY);
Ei.set(Un.END_KEYCODE, Rt.END_KEY);
Ei.set(Un.HOME_KEYCODE, Rt.HOME_KEY);
Ei.set(Un.ENTER_KEYCODE, Rt.ENTER_KEY);
Ei.set(Un.SPACE_KEYCODE, Rt.SPACE_KEY);
var ny = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(n) {
      var r = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return r.useAutomaticActivation = !1, r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Rt;
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
      var i = this.isRTL(), a = this.adapter.getTabListLength() - 1, o = r === Rt.END_KEY, u = r === Rt.ARROW_LEFT_KEY && !i || r === Rt.ARROW_RIGHT_KEY && i, l = r === Rt.ARROW_RIGHT_KEY && !i || r === Rt.ARROW_LEFT_KEY && i, c = n;
      return o ? c = a : u ? c -= 1 : l ? c += 1 : c = 0, c < 0 ? c = a : c > a && (c = 0), c;
    }, e.prototype.calculateScrollIncrement = function(n, r, i, a) {
      var o = this.adapter.getTabDimensionsAtIndex(r), u = o.contentLeft - i - a, l = o.contentRight - i, c = l - Un.EXTRA_SCROLL_AMOUNT, d = u + Un.EXTRA_SCROLL_AMOUNT;
      return r < n ? Math.min(c, 0) : Math.max(d, 0);
    }, e.prototype.calculateScrollIncrementRTL = function(n, r, i, a, o) {
      var u = this.adapter.getTabDimensionsAtIndex(r), l = o - u.contentLeft - i, c = o - u.contentRight - i - a, d = c + Un.EXTRA_SCROLL_AMOUNT, m = l - Un.EXTRA_SCROLL_AMOUNT;
      return r > n ? Math.max(d, 0) : Math.min(m, 0);
    }, e.prototype.findAdjacentTabIndexClosestToEdge = function(n, r, i, a) {
      var o = r.rootLeft - i, u = r.rootRight - i - a, l = o + u, c = o < 0 || l < 0, d = u > 0 || l > 0;
      return c ? n - 1 : d ? n + 1 : -1;
    }, e.prototype.findAdjacentTabIndexClosestToEdgeRTL = function(n, r, i, a, o) {
      var u = o - r.rootLeft - a - i, l = o - r.rootRight - i, c = u + l, d = u > 0 || c > 0, m = l < 0 || c < 0;
      return d ? n + 1 : m ? n - 1 : -1;
    }, e.prototype.getKeyFromEvent = function(n) {
      return Si.has(n.key) ? n.key : Ei.get(n.keyCode);
    }, e.prototype.isActivationKey = function(n) {
      return n === Rt.SPACE_KEY || n === Rt.ENTER_KEY;
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
), ry = /* @__PURE__ */ ce("<div><div><div><!></div></div></div>");
function iy(t, e) {
  xe(e, !0);
  const { matches: n } = ca;
  let r = v(e, "use", 19, () => []), i = v(e, "class", 3, ""), a = v(e, "align", 3, void 0), o = v(e, "scrollArea$use", 19, () => []), u = v(e, "scrollArea$class", 3, ""), l = v(e, "scrollContent$use", 19, () => []), c = v(e, "scrollContent$class", 3, ""), d = /* @__PURE__ */ je(e, [
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
  ]), m, f = /* @__PURE__ */ he(void 0), g, h, p = ye({}), b = ye({}), y = ye({}), E = ye({});
  at(() => (X(
    f,
    new Z_({
      eventTargetMatchesSelector: (P, M) => n(P, M),
      addClass: I,
      removeClass: _,
      addScrollAreaClass: A,
      setScrollAreaStyleProperty: S,
      setScrollContentStyleProperty: L,
      getScrollContentStyleValue: T,
      setScrollAreaScrollLeft: (P) => g.scrollLeft = P,
      getScrollAreaScrollLeft: () => g.scrollLeft,
      getScrollContentOffsetWidth: () => h.offsetWidth,
      getScrollAreaOffsetWidth: () => g.offsetWidth,
      computeScrollAreaClientRect: () => g.getBoundingClientRect(),
      computeScrollContentClientRect: () => h.getBoundingClientRect(),
      computeHorizontalScrollbarHeight: () => Q_(document)
    }),
    !0
  ), s(f).init(), () => {
    var P;
    (P = s(f)) == null || P.destroy();
  }));
  function I(P) {
    p[P] || (p[P] = !0);
  }
  function _(P) {
    (!(P in p) || p[P]) && (p[P] = !1);
  }
  function A(P) {
    b[P] || (b[P] = !0);
  }
  function S(P, M) {
    y[P] != M && (M === "" || M == null ? delete y[P] : y[P] = M);
  }
  function L(P, M) {
    E[P] != M && (M === "" || M == null ? delete E[P] : E[P] = M);
  }
  function T(P) {
    return P in E ? E[P] : getComputedStyle(h).getPropertyValue(P);
  }
  function w() {
    if (s(f) == null)
      throw new Error("Instance is undefined.");
    return s(f).getScrollPosition();
  }
  function k() {
    return h.offsetWidth;
  }
  function J(P) {
    var M;
    (M = s(f)) == null || M.incrementScroll(P);
  }
  function G(P) {
    var M;
    (M = s(f)) == null || M.scrollTo(P);
  }
  function z() {
    return m;
  }
  var R = {
    getScrollPosition: w,
    getScrollContentWidth: k,
    incrementScroll: J,
    scrollTo: G,
    getElement: z
  }, C = ry();
  Ue(C, (P, M) => ({ class: P, ...M }), [
    () => Me({
      "mdc-tab-scroller": !0,
      "mdc-tab-scroller--align-start": a() === "start",
      "mdc-tab-scroller--align-end": a() === "end",
      "mdc-tab-scroller--align-center": a() === "center",
      ...p,
      [i()]: !0
    }),
    () => Vn(d, ["scrollArea$", "scrollContent$"])
  ]);
  var F = de(C), N = (P) => {
    var M;
    s(f) && s(f).handleInteraction(), (M = e.scrollArea$onwheel) == null || M.call(e, P);
  }, K = (P) => {
    var M;
    s(f) && s(f).handleInteraction(), (M = e.scrollArea$ontouchstart) == null || M.call(e, P);
  }, ne = (P) => {
    var M;
    s(f) && s(f).handleInteraction(), (M = e.scrollArea$onpointerdown) == null || M.call(e, P);
  }, U = (P) => {
    var M;
    s(f) && s(f).handleInteraction(), (M = e.scrollArea$onmousedown) == null || M.call(e, P);
  }, D = (P) => {
    var M;
    s(f) && s(f).handleInteraction(), (M = e.scrollArea$onkeydown) == null || M.call(e, P);
  };
  Ue(
    F,
    (P, M, O) => ({
      class: P,
      style: M,
      ...O,
      onwheel: N,
      ontouchstart: K,
      onpointerdown: ne,
      onmousedown: U,
      onkeydown: D
    }),
    [
      () => Me({
        "mdc-tab-scroller__scroll-area": !0,
        ...b,
        [u()]: !0
      }),
      () => Object.entries(y).map(([P, M]) => `${P}: ${M};`).join(" "),
      () => it(d, "scrollArea$")
    ]
  );
  var W = de(F), Ie = (P) => {
    var M;
    s(f) && s(f).handleTransitionEnd(P), (M = e.scrollContent$ontransitionend) == null || M.call(e, P);
  };
  Ue(
    W,
    (P, M, O) => ({
      class: P,
      style: M,
      ...O,
      ontransitionend: Ie
    }),
    [
      () => Me({
        "mdc-tab-scroller__scroll-content": !0,
        [c()]: !0
      }),
      () => Object.entries(E).map(([P, M]) => `${P}: ${M};`).join(" "),
      () => it(d, "scrollContent$")
    ]
  );
  var B = de(W);
  return Ee(B, () => e.children ?? ve), Ce(W, (P) => h = P, () => h), Pe(W, (P, M) => Q == null ? void 0 : Q(P, M), l), Ce(F, (P) => g = P, () => g), Pe(F, (P, M) => Q == null ? void 0 : Q(P, M), o), Ce(C, (P) => m = P, () => m), Pe(C, (P, M) => Q == null ? void 0 : Q(P, M), r), x(t, C), we(R);
}
var ay = /* @__PURE__ */ ce("<div><!></div>");
function oy(t, e) {
  xe(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "tabs", 19, () => []), a = v(e, "key", 3, (R) => R), o = v(e, "focusOnActivate", 3, !0), u = v(e, "focusOnProgrammatic", 3, !1), l = v(e, "useAutomaticActivation", 3, !0), c = v(e, "active", 15), d = v(e, "tabindex", 3, 0), m = /* @__PURE__ */ je(e, [
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
  ]), f, g = /* @__PURE__ */ he(void 0), h, p = /* @__PURE__ */ he(ye(c() == null ? -1 : i().findIndex((R) => c() && a()(R) === a()(c())))), b = ye({}), y = /* @__PURE__ */ he(/* @__PURE__ */ new WeakMap()), E = !1;
  ue("SMUI:tab:focusOnActivate", o()), ue("SMUI:tab:initialActive", {
    active: c() == null ? null : a()(c()),
    key: a()
  }), Le(() => {
    (c() == null && s(p) !== -1 || c() != null && s(p) === -1 || c() != null && a()(c()) !== a()(i()[s(p)])) && (X(p, i().findIndex((R) => c() && a()(R) === a()(c())), !0), s(g) && (E = !u(), s(g).activateTab(s(p)), E = !1));
  }), Le(() => {
    if (i().length) {
      const R = i()[0] instanceof Object ? s(y).get(i()[0]) : b[i()[0]];
      R && R.forceAccessible(s(p) === -1);
    }
  });
  let I = !1;
  Le(() => {
    if (!s(g)) {
      I = !1;
      return;
    }
    I || (I = !0, s(g).setUseAutomaticActivation(l()));
  }), ue("SMUI:tab:mount", (R) => {
    A(R.tabId, R);
  }), ue("SMUI:tab:unmount", (R) => {
    S(R.tabId);
  }), at(() => (X(
    g,
    new ny({
      scrollTo: (R) => h.scrollTo(R),
      incrementScroll: (R) => h.incrementScroll(R),
      getScrollPosition: () => h.getScrollPosition(),
      getScrollContentWidth: () => h.getScrollContentWidth(),
      getOffsetWidth: () => T().offsetWidth,
      isRTL: () => getComputedStyle(T()).getPropertyValue("direction") === "rtl",
      setActiveTab: (R) => {
        var C;
        c(i()[R]), X(p, R, !0), (C = s(g)) == null || C.activateTab(R);
      },
      activateTabAtIndex: (R, C) => {
        var F;
        return (F = _(i()[R])) == null ? void 0 : F.activate(C, E);
      },
      deactivateTabAtIndex: (R) => {
        var C;
        return (C = _(i()[R])) == null ? void 0 : C.deactivate();
      },
      focusTabAtIndex: (R) => {
        var C;
        return (C = _(i()[R])) == null ? void 0 : C.focus();
      },
      getTabIndicatorClientRectAtIndex: (R) => {
        var C;
        return ((C = _(i()[R])) == null ? void 0 : C.computeIndicatorClientRect()) ?? new DOMRect();
      },
      getTabDimensionsAtIndex: (R) => {
        var C;
        return ((C = _(i()[R])) == null ? void 0 : C.computeDimensions()) ?? { rootLeft: 0, rootRight: 0, contentLeft: 0, contentRight: 0 };
      },
      getPreviousActiveTabIndex: () => {
        var R;
        for (let C = 0; C < i().length; C++)
          if ((R = _(i()[C])) != null && R.active)
            return C;
        return -1;
      },
      getFocusedTabIndex: () => {
        const R = i().map((F) => {
          var N;
          return (N = _(F)) == null ? void 0 : N.element;
        }), C = document.activeElement;
        return R.indexOf(C);
      },
      getIndexOfTabById: (R) => i().findIndex((C) => a()(C) === a()(R)),
      getTabListLength: () => i().length,
      notifyTabActivated: (R) => Ke(T(), "SMUITabBarActivated", { index: R })
    }),
    !0
  ), s(g).init(), () => {
    var R;
    (R = s(g)) == null || R.destroy();
  }));
  function _(R) {
    return R instanceof Object ? s(y).get(R) : b[R];
  }
  function A(R, C) {
    R instanceof Object ? (s(y).set(R, C), X(y, s(y))) : b[R] = C;
  }
  function S(R) {
    R instanceof Object ? (s(y).delete(R), X(y, s(y))) : delete b[R];
  }
  function L(R) {
    var C;
    (C = s(g)) == null || C.scrollIntoView(R);
  }
  function T() {
    return f;
  }
  var w = { scrollIntoView: L, getElement: T }, k = ay(), J = (R) => {
    var C;
    s(g) && s(g).handleKeyDown(R), (C = e.onkeydown) == null || C.call(e, R);
  }, G = (R) => {
    var C;
    s(g) && s(g).handleTabInteraction(R), (C = e.onSMUITabInteracted) == null || C.call(e, R);
  };
  Ue(
    k,
    (R, C) => ({
      class: R,
      role: "tablist",
      tabindex: d(),
      ...C,
      onkeydown: J,
      onSMUITabInteracted: G
    }),
    [
      () => Me({ "mdc-tab-bar": !0, [r()]: !0 }),
      () => Vn(m, ["tabScroller$"])
    ]
  );
  var z = de(k);
  {
    let R = /* @__PURE__ */ fe(() => it(m, "tabScroller$"));
    Ce(
      iy(z, Je(() => s(R), {
        children: (C, F) => {
          var N = re(), K = Y(N);
          Qn(K, 17, i, (ne) => a()(ne), (ne, U) => {
            var D = re(), W = Y(D);
            Ee(W, () => e.tab, () => s(U)), x(ne, D);
          }), x(C, N);
        },
        $$slots: { default: !0 }
      })),
      (C) => h = C,
      () => h
    );
  }
  return Ce(k, (R) => f = R, () => f), Pe(k, (R, C) => Q == null ? void 0 : Q(R, C), n), x(t, k), we(w);
}
var sy = /* @__PURE__ */ ce("<span><span><!></span></span>");
function ly(t, e) {
  xe(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "active", 15, !1), a = v(e, "type", 3, "underline"), o = v(e, "transition", 3, "slide"), u = v(e, "content$use", 19, () => []), l = v(e, "content$class", 3, ""), c = /* @__PURE__ */ je(e, [
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
  ]), d, m = /* @__PURE__ */ he(void 0), f, g = /* @__PURE__ */ he(ye({})), h = /* @__PURE__ */ he(ye({})), p = ye([]), b = o();
  Le(() => {
    b !== o() && (b = o(), s(m) && s(m).destroy(), X(g, {}, !0), X(h, {}, !0), X(m, y(), !0), s(m).init());
  }), fc(() => {
    p.length && requestAnimationFrame(() => {
      const R = p.shift() ?? [];
      for (const C of R)
        C();
    });
  }), at(() => (X(m, y(), !0), s(m).init(), () => {
    var R;
    (R = s(m)) == null || R.destroy();
  }));
  function y() {
    const R = {
      fade: ey,
      slide: Tu
    }[o()] || Tu;
    return new R({
      addClass: (...C) => E(() => I(...C)),
      removeClass: (...C) => E(() => _(...C)),
      computeContentClientRect: T,
      setContentStyleProperty: (...C) => E(() => A(...C))
    });
  }
  function E(R) {
    p.length ? p[p.length - 1].push(R) : R();
  }
  function I(R) {
    s(g)[R] || (s(g)[R] = !0);
  }
  function _(R) {
    (!(R in s(g)) || s(g)[R]) && (s(g)[R] = !1);
  }
  function A(R, C) {
    s(h)[R] != C && (C === "" || C == null ? delete s(h)[R] : s(h)[R] = C);
  }
  function S(R) {
    var C;
    i(!0), (C = s(m)) == null || C.activate(R);
  }
  function L() {
    var R;
    i(!1), (R = s(m)) == null || R.deactivate();
  }
  function T() {
    return p.push([]), f.getBoundingClientRect();
  }
  function w() {
    return d;
  }
  var k = { activate: S, deactivate: L, computeContentClientRect: T, getElement: w }, J = sy();
  Ue(J, (R, C) => ({ class: R, ...C }), [
    () => Me({
      "mdc-tab-indicator": !0,
      "mdc-tab-indicator--active": i(),
      "mdc-tab-indicator--fade": o() === "fade",
      ...s(g),
      [r()]: !0
    }),
    () => Vn(c, ["content$"])
  ]);
  var G = de(J);
  Ue(
    G,
    (R, C, F) => ({
      class: R,
      style: C,
      "aria-hidden": a() === "icon" ? "true" : void 0,
      ...F
    }),
    [
      () => Me({
        "mdc-tab-indicator__content": !0,
        "mdc-tab-indicator__content--underline": a() === "underline",
        "mdc-tab-indicator__content--icon": a() === "icon",
        [l()]: !0
      }),
      () => Object.entries(s(h)).map(([R, C]) => `${R}: ${C};`).join(" "),
      () => it(c, "content$")
    ]
  );
  var z = de(G);
  return Ee(z, () => e.children ?? ve), Ce(G, (R) => f = R, () => f), Pe(G, (R, C) => Q == null ? void 0 : Q(R, C), u), Ce(J, (R) => d = R, () => d), Pe(J, (R, C) => Q == null ? void 0 : Q(R, C), n), x(t, J), we(k);
}
var uy = /* @__PURE__ */ ce('<span><!> <!></span> <!> <span class="mdc-tab__ripple"></span>', 1);
function cy(t, e) {
  xe(e, !0);
  const n = (M) => {
    {
      let O = /* @__PURE__ */ fe(() => it(p, "tabIndicator$"));
      Ce(
        ly(M, Je(() => s(O), {
          get active() {
            return s(w);
          },
          set active(ee) {
            X(w, ee, !0);
          },
          children: (ee, Z) => {
            var ie = re(), Ae = Y(ie);
            Ee(Ae, () => e.tabIndicator ?? ve), x(ee, ie);
          },
          $$slots: { default: !0 }
        })),
        (ee) => I = ee,
        () => I
      );
    }
  };
  let r = v(e, "use", 19, () => []), i = v(e, "class", 3, ""), a = v(e, "style", 3, ""), o = v(e, "ripple", 3, !0), u = v(e, "stacked", 3, !1), l = v(e, "minWidth", 3, !1), c = v(e, "indicatorSpanOnlyContent", 3, !1), d = v(e, "href", 3, void 0), m = v(e, "content$use", 19, () => []), f = v(e, "content$class", 3, ""), g = v(e, "component", 3, Wr), h = v(e, "tag", 19, () => d() == null ? "button" : "a"), p = /* @__PURE__ */ je(e, [
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
  ]), b, y = /* @__PURE__ */ he(void 0), E, I, _ = ye({}), A = ye({}), S = ye({}), L = _e("SMUI:tab:focusOnActivate");
  const T = _e("SMUI:tab:initialActive");
  let w = /* @__PURE__ */ he(ye(T.active != null && T.key(e.tab) === T.active)), k = /* @__PURE__ */ he(!1);
  if (ue("SMUI:label:context", "tab"), ue("SMUI:icon:context", "tab"), !e.tab)
    throw new Error("The tab property is required! It should be passed down from the TabBar to the Tab.");
  let J = !1;
  Le(() => {
    if (!s(y)) {
      J = !1;
      return;
    }
    J || (J = !0, s(y).setFocusOnActivate(L));
  });
  const G = _e("SMUI:tab:mount"), z = _e("SMUI:tab:unmount");
  at(() => {
    X(
      y,
      new ty({
        setAttr: K,
        addClass: C,
        removeClass: F,
        hasClass: R,
        activateIndicator: (O) => I.activate(O),
        deactivateIndicator: () => I.deactivate(),
        notifyInteracted: () => Ke(W(), "SMUITabInteracted", { tabId: e.tab }),
        getOffsetLeft: () => W().offsetLeft,
        getOffsetWidth: () => W().offsetWidth,
        getContentOffsetLeft: () => E.offsetLeft,
        getContentOffsetWidth: () => E.offsetWidth,
        focus: D
      }),
      !0
    );
    const M = {
      tabId: e.tab,
      get element() {
        return W();
      },
      get active() {
        return s(w);
      },
      forceAccessible(O) {
        X(k, O, !0);
      },
      computeIndicatorClientRect: () => I.computeContentClientRect(),
      computeDimensions: () => {
        if (s(y) == null)
          throw new Error("Instance is undefined.");
        return s(y).computeDimensions();
      },
      focus: D,
      activate: ne,
      deactivate: U
    };
    return G && G(M), s(y).init(), () => {
      var O;
      z && z(M), (O = s(y)) == null || O.destroy();
    };
  });
  function R(M) {
    return M in _ ? _[M] : W().classList.contains(M);
  }
  function C(M) {
    _[M] || (_[M] = !0);
  }
  function F(M) {
    (!(M in _) || _[M]) && (_[M] = !1);
  }
  function N(M, O) {
    A[M] != O && (O === "" || O == null ? delete A[M] : A[M] = O);
  }
  function K(M, O) {
    S[M] !== O && (S[M] = O);
  }
  function ne(M, O) {
    var ee, Z, ie;
    X(w, !0), O && ((ee = s(y)) == null || ee.setFocusOnActivate(!1)), (Z = s(y)) == null || Z.activate(M), O && ((ie = s(y)) == null || ie.setFocusOnActivate(L));
  }
  function U() {
    var M;
    X(w, !1), (M = s(y)) == null || M.deactivate();
  }
  function D() {
    W().focus();
  }
  function W() {
    return b.getElement();
  }
  var Ie = { activate: ne, deactivate: U, focus: D, getElement: W }, B = re(), P = Y(B);
  {
    let M = /* @__PURE__ */ fe(() => [
      [
        Qt,
        {
          ripple: o(),
          unbounded: !1,
          addClass: C,
          removeClass: F,
          addStyle: N
        }
      ],
      ...r()
    ]), O = /* @__PURE__ */ fe(() => Me({
      "mdc-tab": !0,
      "mdc-tab--active": s(w),
      "mdc-tab--stacked": u(),
      "mdc-tab--min-width": l(),
      ..._,
      [i()]: !0
    })), ee = /* @__PURE__ */ fe(() => Object.entries(A).map(([te, oe]) => `${te}: ${oe};`).concat([a()]).join(" ")), Z = /* @__PURE__ */ fe(() => s(w) ? "true" : "false"), ie = /* @__PURE__ */ fe(() => s(w) || s(k) ? "0" : "-1"), Ae = /* @__PURE__ */ fe(() => Vn(p, ["content$", "tabIndicator$"]));
    rr(P, g, (te, oe) => {
      Ce(
        oe(te, Je(
          {
            get tag() {
              return h();
            },
            get use() {
              return s(M);
            },
            get class() {
              return s(O);
            },
            get style() {
              return s(ee);
            },
            role: "tab",
            get "aria-selected"() {
              return s(Z);
            },
            get tabindex() {
              return s(ie);
            },
            get href() {
              return d();
            }
          },
          () => S,
          () => s(Ae),
          {
            onclick: (Te) => {
              var Re;
              (Re = e.onclick) == null || Re.call(e, Te), !Te.defaultPrevented && s(y) && s(y).handleClick();
            },
            children: (Te, Re) => {
              var Ne = uy(), Fe = Y(Ne);
              Ue(Fe, (Ve, ut) => ({ class: Ve, ...ut }), [
                () => Me({ "mdc-tab__content": !0, [f()]: !0 }),
                () => it(p, "content$")
              ]);
              var He = de(Fe);
              Ee(He, () => e.children ?? ve);
              var V = be(He, 2);
              {
                var $ = (Ve) => {
                  n(Ve);
                };
                se(V, (Ve) => {
                  c() && Ve($);
                });
              }
              Ce(Fe, (Ve) => E = Ve, () => E), Pe(Fe, (Ve, ut) => Q == null ? void 0 : Q(Ve, ut), m);
              var me = be(Fe, 2);
              {
                var De = (Ve) => {
                  n(Ve);
                };
                se(me, (Ve) => {
                  c() || Ve(De);
                });
              }
              x(Te, Ne);
            },
            $$slots: { default: !0 }
          }
        )),
        (Te) => b = Te,
        () => b
      );
    });
  }
  return x(t, B), we(Ie);
}
var dy = (t, e) => e(), fy = /* @__PURE__ */ ce('<button class="filter-tab__tabs__clear svelte-nj6sif">Clear Filters</button>'), hy = /* @__PURE__ */ ce('<div class="filter-tab__tabs svelte-nj6sif"><h4 style="all:unset; font-weight: bold; font-size: 1rem;">Filter by</h4> <!> <!></div>'), vy = /* @__PURE__ */ ce('<div class="filter-tab svelte-nj6sif"><!> <!> <!></div>');
function my(t, e) {
  xe(e, !0);
  let n = v(e, "filters", 31, () => ye([])), r = v(e, "onFilterChange", 3, (I) => {
  }), i = v(e, "activeNavigationTab", 31, () => ye(e.navigationTabs ? e.navigationTabs[0] : void 0)), a = v(e, "searchText", 15, ""), o = v(e, "searchLabel", 3, "Search"), u = v(e, "searchPlaceholder", 3, "Type to search..."), l = v(e, "onSearchInput", 3, () => {
  }), c = v(e, "searchDisabled", 3, !1), d = /* @__PURE__ */ fe(() => n().some((I) => I.value !== void 0 && I.value !== null && I.value !== "")), m = () => {
    n(n().map((I) => ({ ...I, value: void 0 }))), r()(n());
  };
  var f = vy(), g = de(f);
  {
    var h = (I) => {
      $g(I, {
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
    se(g, (I) => {
      c() || I(h);
    });
  }
  var p = be(g, 2);
  {
    var b = (I) => {
      oy(I, {
        get tabs() {
          return e.navigationTabs;
        },
        get active() {
          return i();
        },
        set active(A) {
          i(A);
        },
        tab: (A, S = ve) => {
          cy(A, {
            get tab() {
              return S();
            },
            minWidth: !0,
            children: (L, T) => {
              dd(L, {
                children: (w, k) => {
                  var J = vt();
                  Oe(() => $e(J, S())), x(w, J);
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
    se(p, (I) => {
      e.navigationTabs && I(b);
    });
  }
  var y = be(p, 2);
  {
    var E = (I) => {
      var _ = hy(), A = be(de(_), 2);
      W_(A, {
        onfiltersChanged: (T) => r()(T),
        get filters() {
          return n();
        },
        set filters(T) {
          n(T);
        }
      });
      var S = be(A, 2);
      {
        var L = (T) => {
          var w = fy();
          w.__click = [dy, m], x(T, w);
        };
        se(S, (T) => {
          s(d) && T(L);
        });
      }
      x(I, _);
    };
    se(y, (I) => {
      n() && n().length > 0 && I(E);
    });
  }
  x(t, f), we();
}
Sn(["click"]);
Sn(["change", "click"]);
var gy = /* @__PURE__ */ ce('<div><div class="mdc-linear-progress__buffer"><div class="mdc-linear-progress__buffer-bar"></div> <div class="mdc-linear-progress__buffer-dots"></div></div> <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"><span class="mdc-linear-progress__bar-inner"></span></div> <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span class="mdc-linear-progress__bar-inner"></span></div></div>');
function py(t, e) {
  xe(e, !0);
  const [n, r] = ir();
  let i = v(e, "use", 19, () => []), a = v(e, "class", 3, ""), o = v(e, "style", 3, ""), u = v(e, "indeterminate", 3, !1), l = v(e, "closed", 3, !1), c = v(e, "progress", 3, 0), d = v(e, "buffer", 3, void 0), m = /* @__PURE__ */ je(e, [
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
  ]), f, g = /* @__PURE__ */ he(void 0), h = ye({}), p = ye({}), b = ye({}), y = ye({}), E = ye({}), I = _e("SMUI:linear-progress:context"), _ = _e("SMUI:linear-progress:closed");
  Le(() => {
    _ && Fn(_, l());
  }), Le(() => {
    s(g) && s(g).isDeterminate() !== !u() && s(g).setDeterminate(!u());
  }), Le(() => {
    s(g) && s(g).getProgress() !== c() && s(g).setProgress(c());
  }), Le(() => {
    s(g) && (d() == null ? s(g).setBuffer(1) : s(g).setBuffer(d()));
  }), Le(() => {
    s(g) && (l() ? s(g).close() : s(g).open());
  }), at(() => (X(
    g,
    new Kb({
      addClass: S,
      forceLayout: () => {
        z().getBoundingClientRect();
      },
      setBufferBarStyle: J,
      setPrimaryBarStyle: G,
      hasClass: A,
      removeAttribute: w,
      removeClass: L,
      setAttribute: T,
      setStyle: k,
      attachResizeObserver: (D) => {
        const W = window.ResizeObserver;
        if (W) {
          const Ie = new W(D);
          return Ie.observe(z()), Ie;
        }
        return null;
      },
      getWidth: () => z().offsetWidth
    }),
    !0
  ), s(g).init(), () => {
    var D;
    (D = s(g)) == null || D.destroy();
  }));
  function A(D) {
    return D in h ? h[D] : z().classList.contains(D);
  }
  function S(D) {
    h[D] || (h[D] = !0);
  }
  function L(D) {
    (!(D in h) || h[D]) && (h[D] = !1);
  }
  function T(D, W) {
    p[D] !== W && (p[D] = W);
  }
  function w(D) {
    (!(D in p) || p[D] != null) && (p[D] = void 0);
  }
  function k(D, W) {
    b[D] != W && (W === "" || W == null ? delete b[D] : b[D] = W);
  }
  function J(D, W) {
    y[D] != W && (W === "" || W == null ? delete y[D] : y[D] = W);
  }
  function G(D, W) {
    E[D] != W && (W === "" || W == null ? delete E[D] : E[D] = W);
  }
  function z() {
    return f;
  }
  var R = { getElement: z }, C = gy(), F = (D) => {
    var W;
    s(g) && s(g).handleTransitionEnd(), (W = e.ontransitionend) == null || W.call(e, D);
  };
  Ue(
    C,
    (D, W) => ({
      class: D,
      style: W,
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 1,
      "aria-valuenow": u() ? void 0 : c(),
      ...p,
      ...m,
      ontransitionend: F
    }),
    [
      () => Me({
        "mdc-linear-progress": !0,
        "mdc-linear-progress--indeterminate": u(),
        "mdc-linear-progress--closed": l(),
        "mdc-data-table__linear-progress": I === "data-table",
        ...h,
        [a()]: !0
      }),
      () => Object.entries(b).map(([D, W]) => `${D}: ${W};`).concat([o()]).join(" ")
    ]
  );
  var N = de(C), K = de(N), ne = be(N, 2);
  Ce(C, (D) => f = D, () => f), Pe(C, (D, W) => Q == null ? void 0 : Q(D, W), i), Oe(
    (D, W) => {
      mt(K, D), mt(ne, W);
    },
    [
      () => Object.entries(y).map(([D, W]) => `${D}: ${W};`).join(" "),
      () => Object.entries(E).map(([D, W]) => `${D}: ${W};`).join(" ")
    ]
  ), x(t, C);
  var U = we(R);
  return r(), U;
}
var by = /* @__PURE__ */ xt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 4l-8 8h16l-8-8z"></path></svg>'), _y = /* @__PURE__ */ xt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 20l8-8H4l8 8z"></path></svg>'), yy = /* @__PURE__ */ ce('<div class="custom-cell-container svelte-1mj71p3"><div class="cell-header svelte-1mj71p3"><span class="header-title svelte-1mj71p3"> </span> <!></div></div>'), Iy = (t, e) => e(), Sy = /* @__PURE__ */ ce('<input type="text" class="svelte-1mj71p3"/>'), Ey = (t, e) => e(), Ay = /* @__PURE__ */ ce('<input type="number" class="svelte-1mj71p3"/>'), Cy = /* @__PURE__ */ ce("<!> <!>", 1), Ty = /* @__PURE__ */ ce("<!> <!>", 1), xy = /* @__PURE__ */ ce('<div class="cell-actions svelte-1mj71p3"></div>'), wy = /* @__PURE__ */ ce("<!> <!>", 1);
function xu(t, e) {
  xe(e, !0);
  const n = () => Bn(b, "$sortColumn", a), r = () => Bn(y, "$sortDirection", a), i = () => Bn(p, "$filteredData", a), [a, o] = ir();
  let u = v(e, "loadingDone", 15, !0), l = v(e, "label", 19, ni), c = v(e, "columnDefs", 19, () => []), d = v(e, "rowData", 31, () => ye([])), m = v(e, "rowActions", 19, () => []), f = v(e, "searchInputLabel", 3, "Search"), g = v(e, "emptyText", 3, "No data available"), h = ye({ name: "", color: "", number: "" }), p = Vt([]), b = Vt(null), y = Vt(null), E = /* @__PURE__ */ fe(() => c().some((S) => S.filter));
  e.store.store.subscribe((S) => {
    d([...S]), I();
  });
  function I() {
    let S = d().filter((L) => c().every((T) => {
      const w = h[T.field], k = T.filterValueGetter ? T.filterValueGetter(L) : L[T.field];
      return w ? T.filterType === "number" ? k == w : k.toString().toLowerCase().includes(w.toLowerCase()) : !0;
    }));
    S = _(S), p.set(S);
  }
  function _(S) {
    let L, T;
    return b.subscribe((w) => L = w), y.subscribe((w) => T = w), !L || !T ? S : S.sort((w, k) => {
      let J = w[L], G = k[L];
      return J == null && (J = ""), G == null && (G = ""), T === "asc" ? J.toString().localeCompare(G.toString()) : G.toString().localeCompare(J.toString());
    });
  }
  function A(S) {
    b.update((L) => {
      if (L === S)
        y.update((T) => T === "asc" ? "desc" : T === "desc" ? null : "asc");
      else
        return y.set("asc"), S;
      return S;
    }), I();
  }
  p.set(d()), Qb(t, {
    get "table$aria-label"() {
      return l();
    },
    style: "max-width: 100%; width: 100%;",
    progress: (L) => {
      py(L, {
        indeterminate: !0,
        "aria-label": "Data is being loaded...",
        get closed() {
          return u();
        },
        set closed(T) {
          u(T);
        }
      });
    },
    children: (L, T) => {
      var w = wy(), k = Y(w);
      $b(k, {
        children: (G, z) => {
          var R = Ty(), C = Y(R);
          so(C, {
            class: "header-title-row",
            children: (K, ne) => {
              var U = re(), D = Y(U);
              Qn(D, 17, c, Ni, (W, Ie) => {
                Aa(W, {
                  onclick: () => s(Ie).sortable && A(s(Ie).field),
                  get style() {
                    return s(Ie).headerStyle;
                  },
                  children: (B, P) => {
                    var M = yy(), O = de(M), ee = de(O), Z = de(ee), ie = be(ee, 2);
                    {
                      var Ae = (te) => {
                        var oe = re(), Te = Y(oe);
                        {
                          var Re = (Ne) => {
                            var Fe = re(), He = Y(Fe);
                            {
                              var V = (me) => {
                                var De = by();
                                x(me, De);
                              }, $ = (me) => {
                                var De = re(), Ve = Y(De);
                                {
                                  var ut = (gt) => {
                                    var ge = _y();
                                    x(gt, ge);
                                  };
                                  se(
                                    Ve,
                                    (gt) => {
                                      r() === "desc" && gt(ut);
                                    },
                                    !0
                                  );
                                }
                                x(me, De);
                              };
                              se(He, (me) => {
                                r() === "asc" ? me(V) : me($, !1);
                              });
                            }
                            x(Ne, Fe);
                          };
                          se(Te, (Ne) => {
                            n() === s(Ie).field && r() !== null && Ne(Re);
                          });
                        }
                        x(te, oe);
                      };
                      se(ie, (te) => {
                        s(Ie).sortable && te(Ae);
                      });
                    }
                    Oe(() => {
                      mt(M, `min-width: ${s(Ie).minWidth ?? 0 ?? ""}`), $e(Z, s(Ie).headerName);
                    }), x(B, M);
                  },
                  $$slots: { default: !0 }
                });
              }), x(K, U);
            },
            $$slots: { default: !0 }
          });
          var F = be(C, 2);
          {
            var N = (K) => {
              so(K, {
                class: "header-filter-row",
                children: (ne, U) => {
                  var D = re(), W = Y(D);
                  Qn(W, 17, c, Ni, (Ie, B) => {
                    Aa(Ie, {
                      children: (P, M) => {
                        var O = re(), ee = Y(O);
                        {
                          var Z = (ie) => {
                            var Ae = Cy(), te = Y(Ae);
                            {
                              var oe = (Ne) => {
                                var Fe = Sy();
                                Fe.__input = [Iy, I], Oe(() => _r(Fe, "placeholder", `${f()} ${s(B).headerName}`)), Ha(Fe, () => h[s(B).field], (He) => h[s(B).field] = He), x(Ne, Fe);
                              };
                              se(te, (Ne) => {
                                s(B).filterType === "text" && Ne(oe);
                              });
                            }
                            var Te = be(te, 2);
                            {
                              var Re = (Ne) => {
                                var Fe = Ay();
                                Fe.__input = [Ey, I], Oe(() => _r(Fe, "placeholder", `${f()} ${s(B).headerName}`)), Ha(Fe, () => h[s(B).field], (He) => h[s(B).field] = He), x(Ne, Fe);
                              };
                              se(Te, (Ne) => {
                                s(B).filterType === "number" && Ne(Re);
                              });
                            }
                            x(ie, Ae);
                          };
                          se(ee, (ie) => {
                            s(B).filter && ie(Z);
                          });
                        }
                        x(P, O);
                      },
                      $$slots: { default: !0 }
                    });
                  }), x(ne, D);
                },
                $$slots: { default: !0 }
              });
            };
            se(F, (K) => {
              s(E) && K(N);
            });
          }
          x(G, R);
        },
        $$slots: { default: !0 }
      });
      var J = be(k, 2);
      t_(J, {
        children: (G, z) => {
          var R = re(), C = Y(R);
          {
            var F = (K) => {
              so(K, {
                children: (ne, U) => {
                  Aa(ne, {
                    class: "oscd-basic-table__empty-row",
                    get colspan() {
                      return c().length;
                    },
                    style: "text-align:center; padding: 24px; opacity: 0.6; background: rgba(0,0,0,0.05);",
                    children: (D, W) => {
                      var Ie = vt();
                      Oe(() => $e(Ie, g())), x(D, Ie);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { default: !0 }
              });
            }, N = (K) => {
              var ne = re(), U = Y(ne);
              Qn(U, 1, i, Ni, (D, W) => {
                so(D, {
                  children: (Ie, B) => {
                    var P = re(), M = Y(P);
                    Qn(M, 17, c, (O) => O.field, (O, ee) => {
                      var Z = re(), ie = Y(Z);
                      {
                        var Ae = (oe) => {
                          Aa(oe, {
                            children: (Te, Re) => {
                              var Ne = xy();
                              Qn(Ne, 21, m, Ni, (Fe, He) => {
                                var V = re(), $ = Y(V);
                                {
                                  var me = (Ve) => {
                                    Fa(Ve, {
                                      get content() {
                                        return s(He).tooltip;
                                      },
                                      hoverDelay: 500,
                                      children: (ut, gt) => {
                                        {
                                          let ge = /* @__PURE__ */ fe(() => s(He).disabled(s(W)));
                                          _g(ut, {
                                            get iconComponent() {
                                              return s(He).iconComponent;
                                            },
                                            get iconStyles() {
                                              return s(He).iconStyles;
                                            },
                                            callback: () => s(He).callback(s(W)),
                                            get disabled() {
                                              return s(ge);
                                            }
                                          });
                                        }
                                      },
                                      $$slots: { default: !0 }
                                    });
                                  }, De = (Ve) => {
                                    Fa(Ve, {
                                      get content() {
                                        return s(He).tooltip;
                                      },
                                      hoverDelay: 500,
                                      children: (ut, gt) => {
                                        {
                                          let ge = /* @__PURE__ */ fe(() => s(He).disabled(s(W)));
                                          fd(ut, {
                                            class: "button",
                                            variant: "raised",
                                            callback: () => s(He).callback(s(W)),
                                            get disabled() {
                                              return s(ge);
                                            },
                                            children: (q, j) => {
                                              var ae = re(), ke = Y(ae);
                                              {
                                                var ft = (_t) => {
                                                  lb(_t, { svgStyles: "margin: unset" });
                                                }, It = (_t) => {
                                                  var Gt = re(), Er = Y(Gt);
                                                  {
                                                    var pt = (Et) => {
                                                      gl(Et, { svgStyles: "margin: unset" });
                                                    }, Nt = (Et) => {
                                                      var Dn = re(), Ai = Y(Dn);
                                                      {
                                                        var qn = (et) => {
                                                          db(et, { svgStyles: "margin: unset" });
                                                        }, Xe = (et) => {
                                                          var tt = re(), Ut = Y(tt);
                                                          {
                                                            var gn = (dt) => {
                                                              hb(dt, { svgStyles: "margin: unset" });
                                                            }, ot = (dt) => {
                                                              var Lt = re(), nt = Y(Lt);
                                                              {
                                                                var Dt = (Mt) => {
                                                                  pb(Mt, { svgStyles: "margin: unset" });
                                                                }, Mn = (Mt) => {
                                                                  var St = re(), Ft = Y(St);
                                                                  {
                                                                    var un = (cn) => {
                                                                      _d(cn, { svgStyles: "margin: unset" });
                                                                    }, jt = (cn) => {
                                                                      var $t = re(), Wn = Y($t);
                                                                      {
                                                                        var Xr = (Xt) => {
                                                                          yd(Xt, { svgStyles: "margin: unset" });
                                                                        }, dn = (Xt) => {
                                                                          var pn = re(), ar = Y(pn);
                                                                          {
                                                                            var fa = (Ar) => {
                                                                              Ub(Ar, { svgStyles: "margin: unset" });
                                                                            }, Yo = (Ar) => {
                                                                              mb(Ar, { svgStyles: "margin: unset" });
                                                                            };
                                                                            se(
                                                                              ar,
                                                                              (Ar) => {
                                                                                s(He).icon === "archive" ? Ar(fa) : Ar(Yo, !1);
                                                                              },
                                                                              !0
                                                                            );
                                                                          }
                                                                          x(Xt, pn);
                                                                        };
                                                                        se(
                                                                          Wn,
                                                                          (Xt) => {
                                                                            s(He).icon === "delete" ? Xt(Xr) : Xt(dn, !1);
                                                                          },
                                                                          !0
                                                                        );
                                                                      }
                                                                      x(cn, $t);
                                                                    };
                                                                    se(
                                                                      Ft,
                                                                      (cn) => {
                                                                        s(He).icon === "edit" ? cn(un) : cn(jt, !1);
                                                                      },
                                                                      !0
                                                                    );
                                                                  }
                                                                  x(Mt, St);
                                                                };
                                                                se(
                                                                  nt,
                                                                  (Mt) => {
                                                                    s(He).icon === "remove" ? Mt(Dt) : Mt(Mn, !1);
                                                                  },
                                                                  !0
                                                                );
                                                              }
                                                              x(dt, Lt);
                                                            };
                                                            se(
                                                              Ut,
                                                              (dt) => {
                                                                s(He).icon === "find-in-page" ? dt(gn) : dt(ot, !1);
                                                              },
                                                              !0
                                                            );
                                                          }
                                                          x(et, tt);
                                                        };
                                                        se(
                                                          Ai,
                                                          (et) => {
                                                            s(He).icon === "download" ? et(qn) : et(Xe, !1);
                                                          },
                                                          !0
                                                        );
                                                      }
                                                      x(Et, Dn);
                                                    };
                                                    se(
                                                      Er,
                                                      (Et) => {
                                                        s(He).icon === "cancel" ? Et(pt) : Et(Nt, !1);
                                                      },
                                                      !0
                                                    );
                                                  }
                                                  x(_t, Gt);
                                                };
                                                se(ke, (_t) => {
                                                  s(He).icon === "add" ? _t(ft) : _t(It, !1);
                                                });
                                              }
                                              x(q, ae);
                                            },
                                            $$slots: { default: !0 }
                                          });
                                        }
                                      },
                                      $$slots: { default: !0 }
                                    });
                                  };
                                  se($, (Ve) => {
                                    s(He).iconComponent ? Ve(me) : Ve(De, !1);
                                  });
                                }
                                x(Fe, V);
                              }), x(Te, Ne);
                            },
                            $$slots: { default: !0 }
                          });
                        }, te = (oe) => {
                          Aa(oe, {
                            get numeric() {
                              return s(ee).numeric;
                            },
                            get style() {
                              return s(ee).cellStyle;
                            },
                            children: (Te, Re) => {
                              var Ne = re(), Fe = Y(Ne);
                              {
                                var He = ($) => {
                                  const me = /* @__PURE__ */ fe(() => s(ee).cellRenderer);
                                  var De = re(), Ve = Y(De);
                                  rr(Ve, () => s(me), (ut, gt) => {
                                    gt(ut, Je(
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
                                  }), x($, De);
                                }, V = ($) => {
                                  var me = re(), De = Y(me);
                                  {
                                    var Ve = (gt) => {
                                      var ge = vt();
                                      Oe((q) => $e(ge, q), [
                                        () => s(ee).valueFormatter(s(W)[s(ee).field])
                                      ]), x(gt, ge);
                                    }, ut = (gt) => {
                                      var ge = vt();
                                      Oe(() => $e(ge, s(W)[s(ee).field] ?? "")), x(gt, ge);
                                    };
                                    se(
                                      De,
                                      (gt) => {
                                        s(ee).valueFormatter ? gt(Ve) : gt(ut, !1);
                                      },
                                      !0
                                    );
                                  }
                                  x($, me);
                                };
                                se(Fe, ($) => {
                                  s(ee).cellRenderer ? $(He) : $(V, !1);
                                });
                              }
                              x(Te, Ne);
                            },
                            $$slots: { default: !0 }
                          });
                        };
                        se(ie, (oe) => {
                          s(ee).field === "actions" ? oe(Ae) : oe(te, !1);
                        });
                      }
                      x(O, Z);
                    }), x(Ie, P);
                  },
                  $$slots: { default: !0 }
                });
              }), x(K, ne);
            };
            se(C, (K) => {
              i().length === 0 ? K(F) : K(N, !1);
            });
          }
          x(G, R);
        },
        $$slots: { default: !0 }
      }), x(L, w);
    },
    $$slots: { progress: !0, default: !0 }
  }), we(), o();
}
Sn(["input"]);
function Tt(t) {
  return typeof t == "function";
}
function bl(t) {
  var e = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = t(e);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var _s = bl(function(t) {
  return function(n) {
    t(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(r, i) {
      return i + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function Do(t, e) {
  if (t) {
    var n = t.indexOf(e);
    0 <= n && t.splice(n, 1);
  }
}
var Za = function() {
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
            for (var u = Bt(o), l = u.next(); !l.done; l = u.next()) {
              var c = l.value;
              c.remove(this);
            }
          } catch (p) {
            e = { error: p };
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
      if (Tt(d))
        try {
          d();
        } catch (p) {
          a = p instanceof _s ? p.errors : [p];
        }
      var m = this._finalizers;
      if (m) {
        this._finalizers = null;
        try {
          for (var f = Bt(m), g = f.next(); !g.done; g = f.next()) {
            var h = g.value;
            try {
              wu(h);
            } catch (p) {
              a = a ?? [], p instanceof _s ? a = er(er([], Ir(a)), Ir(p.errors)) : a.push(p);
            }
          }
        } catch (p) {
          r = { error: p };
        } finally {
          try {
            g && !g.done && (i = f.return) && i.call(f);
          } finally {
            if (r) throw r.error;
          }
        }
      }
      if (a)
        throw new _s(a);
    }
  }, t.prototype.add = function(e) {
    var n;
    if (e && e !== this)
      if (this.closed)
        wu(e);
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
    n === e ? this._parentage = null : Array.isArray(n) && Do(n, e);
  }, t.prototype.remove = function(e) {
    var n = this._finalizers;
    n && Do(n, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = function() {
    var e = new t();
    return e.closed = !0, e;
  }(), t;
}(), Ed = Za.EMPTY;
function Ad(t) {
  return t instanceof Za || t && "closed" in t && Tt(t.remove) && Tt(t.add) && Tt(t.unsubscribe);
}
function wu(t) {
  Tt(t) ? t() : t.unsubscribe();
}
var Ly = {
  Promise: void 0
}, Oy = {
  setTimeout: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setTimeout.apply(void 0, er([t, e], Ir(n)));
  },
  clearTimeout: function(t) {
    return clearTimeout(t);
  },
  delegate: void 0
};
function Cd(t) {
  Oy.setTimeout(function() {
    throw t;
  });
}
function Lu() {
}
function bo(t) {
  t();
}
var _l = function(t) {
  ze(e, t);
  function e(n) {
    var r = t.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, Ad(n) && n.add(r)) : r.destination = My, r;
  }
  return e.create = function(n, r, i) {
    return new Ws(n, r, i);
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
}(Za), Ry = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(e);
      } catch (r) {
        co(r);
      }
  }, t.prototype.error = function(e) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(e);
      } catch (r) {
        co(r);
      }
    else
      co(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (n) {
        co(n);
      }
  }, t;
}(), Ws = function(t) {
  ze(e, t);
  function e(n, r, i) {
    var a = t.call(this) || this, o;
    return Tt(n) || !n ? o = {
      next: n ?? void 0,
      error: r ?? void 0,
      complete: i ?? void 0
    } : o = n, a.destination = new Ry(o), a;
  }
  return e;
}(_l);
function co(t) {
  Cd(t);
}
function Dy(t) {
  throw t;
}
var My = {
  closed: !0,
  next: Lu,
  error: Dy,
  complete: Lu
}, yl = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function Il(t) {
  return t;
}
function Py(t) {
  return t.length === 0 ? Il : t.length === 1 ? t[0] : function(n) {
    return t.reduce(function(r, i) {
      return i(r);
    }, n);
  };
}
var vn = function() {
  function t(e) {
    e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var n = new t();
    return n.source = this, n.operator = e, n;
  }, t.prototype.subscribe = function(e, n, r) {
    var i = this, a = Ny(e) ? e : new Ws(e, n, r);
    return bo(function() {
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
    return n = Ou(n), new n(function(i, a) {
      var o = new Ws({
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
  }, t.prototype[yl] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    return Py(e)(this);
  }, t.prototype.toPromise = function(e) {
    var n = this;
    return e = Ou(e), new e(function(r, i) {
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
function Ou(t) {
  var e;
  return (e = t ?? Ly.Promise) !== null && e !== void 0 ? e : Promise;
}
function Hy(t) {
  return t && Tt(t.next) && Tt(t.error) && Tt(t.complete);
}
function Ny(t) {
  return t && t instanceof _l || Hy(t) && Ad(t);
}
function Uy(t) {
  return Tt(t == null ? void 0 : t.lift);
}
function Rn(t) {
  return function(e) {
    if (Uy(e))
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
function Gn(t, e, n, r, i) {
  return new Fy(t, e, n, r, i);
}
var Fy = function(t) {
  ze(e, t);
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
}(_l), ky = bl(function(t) {
  return function() {
    t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), zs = function(t) {
  ze(e, t);
  function e() {
    var n = t.call(this) || this;
    return n.closed = !1, n.currentObservers = null, n.observers = [], n.isStopped = !1, n.hasError = !1, n.thrownError = null, n;
  }
  return e.prototype.lift = function(n) {
    var r = new Ru(this, this);
    return r.operator = n, r;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new ky();
  }, e.prototype.next = function(n) {
    var r = this;
    bo(function() {
      var i, a;
      if (r._throwIfClosed(), !r.isStopped) {
        r.currentObservers || (r.currentObservers = Array.from(r.observers));
        try {
          for (var o = Bt(r.currentObservers), u = o.next(); !u.done; u = o.next()) {
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
    bo(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.hasError = r.isStopped = !0, r.thrownError = n;
        for (var i = r.observers; i.length; )
          i.shift().error(n);
      }
    });
  }, e.prototype.complete = function() {
    var n = this;
    bo(function() {
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
    return a || o ? Ed : (this.currentObservers = null, u.push(n), new Za(function() {
      r.currentObservers = null, Do(u, n);
    }));
  }, e.prototype._checkFinalizedStatuses = function(n) {
    var r = this, i = r.hasError, a = r.thrownError, o = r.isStopped;
    i ? n.error(a) : o && n.complete();
  }, e.prototype.asObservable = function() {
    var n = new vn();
    return n.source = this, n;
  }, e.create = function(n, r) {
    return new Ru(n, r);
  }, e;
}(vn), Ru = function(t) {
  ze(e, t);
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
    return (i = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)) !== null && i !== void 0 ? i : Ed;
  }, e;
}(zs), By = {
  now: function() {
    return Date.now();
  }
}, Vy = function(t) {
  ze(e, t);
  function e(n, r) {
    return t.call(this) || this;
  }
  return e.prototype.schedule = function(n, r) {
    return this;
  }, e;
}(Za), Du = {
  setInterval: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setInterval.apply(void 0, er([t, e], Ir(n)));
  },
  clearInterval: function(t) {
    return clearInterval(t);
  },
  delegate: void 0
}, Gy = function(t) {
  ze(e, t);
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
    return i === void 0 && (i = 0), Du.setInterval(n.flush.bind(n, this), i);
  }, e.prototype.recycleAsyncId = function(n, r, i) {
    if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === !1)
      return r;
    r != null && Du.clearInterval(r);
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
      this.work = this.state = this.scheduler = null, this.pending = !1, Do(a, this), r != null && (this.id = this.recycleAsyncId(i, r, null)), this.delay = null, t.prototype.unsubscribe.call(this);
    }
  }, e;
}(Vy), Mu = function() {
  function t(e, n) {
    n === void 0 && (n = t.now), this.schedulerActionCtor = e, this.now = n;
  }
  return t.prototype.schedule = function(e, n, r) {
    return n === void 0 && (n = 0), new this.schedulerActionCtor(this, e).schedule(r, n);
  }, t.now = By.now, t;
}(), jy = function(t) {
  ze(e, t);
  function e(n, r) {
    r === void 0 && (r = Mu.now);
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
}(Mu), Sl = new jy(Gy), qy = Sl, Wy = new vn(function(t) {
  return t.complete();
});
function Td(t) {
  return t && Tt(t.schedule);
}
function xd(t) {
  return t[t.length - 1];
}
function wd(t) {
  return Td(xd(t)) ? t.pop() : void 0;
}
function zy(t, e) {
  return typeof xd(t) == "number" ? t.pop() : e;
}
var Ld = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function Od(t) {
  return Tt(t == null ? void 0 : t.then);
}
function Rd(t) {
  return Tt(t[yl]);
}
function Dd(t) {
  return Symbol.asyncIterator && Tt(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function Md(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function Ky() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var Pd = Ky();
function Hd(t) {
  return Tt(t == null ? void 0 : t[Pd]);
}
function Nd(t) {
  return Qh(this, arguments, function() {
    var n, r, i, a;
    return ul(this, function(o) {
      switch (o.label) {
        case 0:
          n = t.getReader(), o.label = 1;
        case 1:
          o.trys.push([1, , 9, 10]), o.label = 2;
        case 2:
          return [4, Vi(n.read())];
        case 3:
          return r = o.sent(), i = r.value, a = r.done, a ? [4, Vi(void 0)] : [3, 5];
        case 4:
          return [2, o.sent()];
        case 5:
          return [4, Vi(i)];
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
function Ud(t) {
  return Tt(t == null ? void 0 : t.getReader);
}
function zr(t) {
  if (t instanceof vn)
    return t;
  if (t != null) {
    if (Rd(t))
      return Xy(t);
    if (Ld(t))
      return Yy(t);
    if (Od(t))
      return Zy(t);
    if (Dd(t))
      return Fd(t);
    if (Hd(t))
      return Qy(t);
    if (Ud(t))
      return Jy(t);
  }
  throw Md(t);
}
function Xy(t) {
  return new vn(function(e) {
    var n = t[yl]();
    if (Tt(n.subscribe))
      return n.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function Yy(t) {
  return new vn(function(e) {
    for (var n = 0; n < t.length && !e.closed; n++)
      e.next(t[n]);
    e.complete();
  });
}
function Zy(t) {
  return new vn(function(e) {
    t.then(function(n) {
      e.closed || (e.next(n), e.complete());
    }, function(n) {
      return e.error(n);
    }).then(null, Cd);
  });
}
function Qy(t) {
  return new vn(function(e) {
    var n, r;
    try {
      for (var i = Bt(t), a = i.next(); !a.done; a = i.next()) {
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
function Fd(t) {
  return new vn(function(e) {
    $y(t, e).catch(function(n) {
      return e.error(n);
    });
  });
}
function Jy(t) {
  return Fd(Nd(t));
}
function $y(t, e) {
  var n, r, i, a;
  return Fc(this, void 0, void 0, function() {
    var o, u;
    return ul(this, function(l) {
      switch (l.label) {
        case 0:
          l.trys.push([0, 5, 6, 11]), n = Jh(t), l.label = 1;
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
function hi(t, e, n, r, i) {
  r === void 0 && (r = 0), i === void 0 && (i = !1);
  var a = e.schedule(function() {
    n(), i ? t.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (t.add(a), !i)
    return a;
}
function kd(t, e) {
  return e === void 0 && (e = 0), Rn(function(n, r) {
    n.subscribe(Gn(r, function(i) {
      return hi(r, t, function() {
        return r.next(i);
      }, e);
    }, function() {
      return hi(r, t, function() {
        return r.complete();
      }, e);
    }, function(i) {
      return hi(r, t, function() {
        return r.error(i);
      }, e);
    }));
  });
}
function Bd(t, e) {
  return e === void 0 && (e = 0), Rn(function(n, r) {
    r.add(t.schedule(function() {
      return n.subscribe(r);
    }, e));
  });
}
function eI(t, e) {
  return zr(t).pipe(Bd(e), kd(e));
}
function tI(t, e) {
  return zr(t).pipe(Bd(e), kd(e));
}
function nI(t, e) {
  return new vn(function(n) {
    var r = 0;
    return e.schedule(function() {
      r === t.length ? n.complete() : (n.next(t[r++]), n.closed || this.schedule());
    });
  });
}
function rI(t, e) {
  return new vn(function(n) {
    var r;
    return hi(n, e, function() {
      r = t[Pd](), hi(n, e, function() {
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
      return Tt(r == null ? void 0 : r.return) && r.return();
    };
  });
}
function Vd(t, e) {
  if (!t)
    throw new Error("Iterable cannot be null");
  return new vn(function(n) {
    hi(n, e, function() {
      var r = t[Symbol.asyncIterator]();
      hi(n, e, function() {
        r.next().then(function(i) {
          i.done ? n.complete() : n.next(i.value);
        });
      }, 0, !0);
    });
  });
}
function iI(t, e) {
  return Vd(Nd(t), e);
}
function aI(t, e) {
  if (t != null) {
    if (Rd(t))
      return eI(t, e);
    if (Ld(t))
      return nI(t, e);
    if (Od(t))
      return tI(t, e);
    if (Dd(t))
      return Vd(t, e);
    if (Hd(t))
      return rI(t, e);
    if (Ud(t))
      return iI(t, e);
  }
  throw Md(t);
}
function Xo(t, e) {
  return e ? aI(t, e) : zr(t);
}
function ka() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = wd(t);
  return Xo(t, n);
}
function oI(t) {
  return t instanceof Date && !isNaN(t);
}
function Ht(t, e) {
  return Rn(function(n, r) {
    var i = 0;
    n.subscribe(Gn(r, function(a) {
      r.next(t.call(e, a, i++));
    }));
  });
}
function sI(t, e, n, r, i, a, o, u) {
  var l = [], c = 0, d = 0, m = !1, f = function() {
    m && !l.length && !c && e.complete();
  }, g = function(p) {
    return c < r ? h(p) : l.push(p);
  }, h = function(p) {
    c++;
    var b = !1;
    zr(n(p, d++)).subscribe(Gn(e, function(y) {
      e.next(y);
    }, function() {
      b = !0;
    }, void 0, function() {
      if (b)
        try {
          c--;
          for (var y = function() {
            var E = l.shift();
            o || h(E);
          }; l.length && c < r; )
            y();
          f();
        } catch (E) {
          e.error(E);
        }
    }));
  };
  return t.subscribe(Gn(e, g, function() {
    m = !0, f();
  })), function() {
  };
}
function Ba(t, e, n) {
  return n === void 0 && (n = 1 / 0), Tt(e) ? Ba(function(r, i) {
    return Ht(function(a, o) {
      return e(r, a, i, o);
    })(zr(t(r, i)));
  }, n) : (typeof e == "number" && (n = e), Rn(function(r, i) {
    return sI(r, i, t, n);
  }));
}
function lI(t) {
  return t === void 0 && (t = 1 / 0), Ba(Il, t);
}
function uI(t, e, n) {
  n === void 0 && (n = qy);
  var r = -1;
  return e != null && (Td(e) ? n = e : r = e), new vn(function(i) {
    var a = oI(t) ? +t - n.now() : t;
    a < 0 && (a = 0);
    var o = 0;
    return n.schedule(function() {
      i.closed || (i.next(o++), 0 <= r ? this.schedule(void 0, r) : i.complete());
    }, a);
  });
}
function Pu(t, e) {
  return Rn(function(n, r) {
    var i = 0;
    n.subscribe(Gn(r, function(a) {
      return t.call(e, a, i++) && r.next(a);
    }));
  });
}
function Mo(t) {
  return Rn(function(e, n) {
    var r = null, i = !1, a;
    r = e.subscribe(Gn(n, void 0, void 0, function(o) {
      a = zr(t(o, Mo(t)(e))), r ? (r.unsubscribe(), r = null, a.subscribe(n)) : i = !0;
    })), i && (r.unsubscribe(), r = null, a.subscribe(n));
  });
}
function Gd(t, e) {
  return Tt(e) ? Ba(t, e, 1) : Ba(t, 1);
}
function cI(t, e) {
  return e === void 0 && (e = Sl), Rn(function(n, r) {
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
    n.subscribe(Gn(r, function(c) {
      a = c, o = e.now(), i || (i = e.schedule(l, t), r.add(i));
    }, function() {
      u(), r.complete();
    }, void 0, function() {
      a = i = null;
    }));
  });
}
function vr(t) {
  return t <= 0 ? function() {
    return Wy;
  } : Rn(function(e, n) {
    var r = 0;
    e.subscribe(Gn(n, function(i) {
      ++r <= t && (n.next(i), t <= r && n.complete());
    }));
  });
}
function dI(t) {
  return Ht(function() {
    return t;
  });
}
function fI(t, e) {
  return Ba(function(n, r) {
    return zr(t(n, r)).pipe(vr(1), dI(n));
  });
}
function hI(t, e) {
  e === void 0 && (e = Sl);
  var n = uI(t, e);
  return fI(function() {
    return n;
  });
}
function Hu(t) {
  return Rn(function(e, n) {
    try {
      e.subscribe(n);
    } finally {
      n.add(t);
    }
  });
}
function vI() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = wd(t), r = zy(t, 1 / 0);
  return Rn(function(i, a) {
    lI(r)(Xo(er([i], Ir(t)), n)).subscribe(a);
  });
}
function mI() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return vI.apply(void 0, er([], Ir(t)));
}
function Nu(t, e) {
  return Rn(function(n, r) {
    var i = null, a = 0, o = !1, u = function() {
      return o && !i && r.complete();
    };
    n.subscribe(Gn(r, function(l) {
      i == null || i.unsubscribe();
      var c = 0, d = a++;
      zr(t(l, d)).subscribe(i = Gn(r, function(m) {
        return r.next(e ? e(l, m, d, c++) : m);
      }, function() {
        i = null, u();
      }));
    }, function() {
      o = !0, u();
    }));
  });
}
function Di(t, e, n) {
  var r = Tt(t) || e || n ? { next: t, error: e, complete: n } : t;
  return r ? Rn(function(i, a) {
    var o;
    (o = r.subscribe) === null || o === void 0 || o.call(r);
    var u = !0;
    i.subscribe(Gn(a, function(l) {
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
  }) : Il;
}
class gI {
  constructor(e, n, r, i, a, o, u, l, c, d) {
    this._uuid = e, this._filename = n, this._author = r, this._type = i, this._date = a, this._version = o, this._comment = u, this._archived = l, this._available = c, this._deleted = d;
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
  get deleted() {
    return this._deleted;
  }
}
function jd(t) {
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
var pI = /* @__PURE__ */ function() {
  function t(e, n, r, i) {
    i === void 0 && (i = "download_load"), this.originalEvent = e, this.xhr = n, this.request = r, this.type = i;
    var a = n.status, o = n.responseType;
    this.status = a ?? 0, this.responseType = o ?? "";
    var u = n.getAllResponseHeaders();
    this.responseHeaders = u ? u.split(`
`).reduce(function(d, m) {
      var f = m.indexOf(": ");
      return d[m.slice(0, f)] = m.slice(f + 2), d;
    }, {}) : {}, this.response = jd(n);
    var l = e.loaded, c = e.total;
    this.loaded = l, this.total = c;
  }
  return t;
}(), Po = bl(function(t) {
  return function(n, r, i) {
    this.message = n, this.name = "AjaxError", this.xhr = r, this.request = i, this.status = r.status, this.responseType = r.responseType;
    var a;
    try {
      a = jd(r);
    } catch {
      a = r.responseText;
    }
    this.response = a;
  };
}), bI = function() {
  function t(e, n) {
    return Po.call(this, "ajax timeout", e, n), this.name = "AjaxTimeoutError", this;
  }
  return t.prototype = Object.create(Po.prototype), t;
}();
function _I(t, e) {
  return Kr({ method: "GET", url: t, headers: e });
}
function yI(t, e, n) {
  return Kr({ method: "POST", url: t, body: e, headers: n });
}
function II(t, e) {
  return Kr({ method: "DELETE", url: t, headers: e });
}
function SI(t, e, n) {
  return Kr({ method: "PUT", url: t, body: e, headers: n });
}
function EI(t, e, n) {
  return Kr({ method: "PATCH", url: t, body: e, headers: n });
}
var AI = Ht(function(t) {
  return t.response;
});
function CI(t, e) {
  return AI(Kr({
    method: "GET",
    url: t,
    headers: e
  }));
}
var Kr = function() {
  var t = function(e) {
    var n = typeof e == "string" ? {
      url: e
    } : e;
    return xI(n);
  };
  return t.get = _I, t.post = yI, t.delete = II, t.put = SI, t.patch = EI, t.getJSON = CI, t;
}(), TI = "upload", Uu = "download", ys = "loadstart", Is = "progress", Fu = "load";
function xI(t) {
  return new vn(function(e) {
    var n, r, i = pe({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, t), a = i.queryParams, o = i.body, u = i.headers, l = i.url;
    if (!l)
      throw new TypeError("url is required");
    if (a) {
      var c;
      if (l.includes("?")) {
        var d = l.split("?");
        if (2 < d.length)
          throw new TypeError("invalid url");
        c = new URLSearchParams(d[1]), new URLSearchParams(a).forEach(function(N, K) {
          return c.set(K, N);
        }), l = d[0] + "?" + c;
      } else
        c = new URLSearchParams(a), l = l + "?" + c;
    }
    var m = {};
    if (u)
      for (var f in u)
        u.hasOwnProperty(f) && (m[f.toLowerCase()] = u[f]);
    var g = i.crossDomain;
    !g && !("x-requested-with" in m) && (m["x-requested-with"] = "XMLHttpRequest");
    var h = i.withCredentials, p = i.xsrfCookieName, b = i.xsrfHeaderName;
    if ((h || !g) && p && b) {
      var y = (r = (n = document == null ? void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + p + ")=([^;]*)"))) === null || n === void 0 ? void 0 : n.pop()) !== null && r !== void 0 ? r : "";
      y && (m[b] = y);
    }
    var E = wI(o, m), I = pe(pe({}, i), {
      url: l,
      headers: m,
      body: E
    }), _;
    _ = t.createXHR ? t.createXHR() : new XMLHttpRequest();
    {
      var A = t.progressSubscriber, S = t.includeDownloadProgress, L = S === void 0 ? !1 : S, T = t.includeUploadProgress, w = T === void 0 ? !1 : T, k = function(N, K) {
        _.addEventListener(N, function() {
          var ne, U = K();
          (ne = A == null ? void 0 : A.error) === null || ne === void 0 || ne.call(A, U), e.error(U);
        });
      };
      k("timeout", function() {
        return new bI(_, I);
      }), k("abort", function() {
        return new Po("aborted", _, I);
      });
      var J = function(N, K) {
        return new pI(K, _, I, N + "_" + K.type);
      }, G = function(N, K, ne) {
        N.addEventListener(K, function(U) {
          e.next(J(ne, U));
        });
      };
      w && [ys, Is, Fu].forEach(function(N) {
        return G(_.upload, N, TI);
      }), A && [ys, Is].forEach(function(N) {
        return _.upload.addEventListener(N, function(K) {
          var ne;
          return (ne = A == null ? void 0 : A.next) === null || ne === void 0 ? void 0 : ne.call(A, K);
        });
      }), L && [ys, Is].forEach(function(N) {
        return G(_, N, Uu);
      });
      var z = function(N) {
        var K = "ajax error" + (N ? " " + N : "");
        e.error(new Po(K, _, I));
      };
      _.addEventListener("error", function(N) {
        var K;
        (K = A == null ? void 0 : A.error) === null || K === void 0 || K.call(A, N), z();
      }), _.addEventListener(Fu, function(N) {
        var K, ne, U = _.status;
        if (U < 400) {
          (K = A == null ? void 0 : A.complete) === null || K === void 0 || K.call(A);
          var D = void 0;
          try {
            D = J(Uu, N);
          } catch (W) {
            e.error(W);
            return;
          }
          e.next(D), e.complete();
        } else
          (ne = A == null ? void 0 : A.error) === null || ne === void 0 || ne.call(A, N), z(U);
      });
    }
    var R = I.user, C = I.method, F = I.async;
    R ? _.open(C, l, F, R, I.password) : _.open(C, l, F), F && (_.timeout = I.timeout, _.responseType = I.responseType), "withCredentials" in _ && (_.withCredentials = I.withCredentials);
    for (var f in m)
      m.hasOwnProperty(f) && _.setRequestHeader(f, m[f]);
    return E ? _.send(E) : _.send(), function() {
      _ && _.readyState !== 4 && _.abort();
    };
  });
}
function wI(t, e) {
  var n;
  if (!t || typeof t == "string" || PI(t) || HI(t) || OI(t) || RI(t) || DI(t) || NI(t))
    return t;
  if (MI(t))
    return t.buffer;
  if (typeof t == "object")
    return e["content-type"] = (n = e["content-type"]) !== null && n !== void 0 ? n : "application/json;charset=utf-8", JSON.stringify(t);
  throw new TypeError("Unknown body type");
}
var LI = Object.prototype.toString;
function El(t, e) {
  return LI.call(t) === "[object " + e + "]";
}
function OI(t) {
  return El(t, "ArrayBuffer");
}
function RI(t) {
  return El(t, "File");
}
function DI(t) {
  return El(t, "Blob");
}
function MI(t) {
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView(t);
}
function PI(t) {
  return typeof FormData < "u" && t instanceof FormData;
}
function HI(t) {
  return typeof URLSearchParams < "u" && t instanceof URLSearchParams;
}
function NI(t) {
  return typeof ReadableStream < "u" && t instanceof ReadableStream;
}
let UI = class {
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
const FI = new UI("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), kI = [FI], BI = kI[0].getUrl();
let qd = class {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? BI;
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
}, VI = class {
  constructor(e = new qd()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (n) => {
      const r = this.clone();
      return r.middleware = r.middleware.concat(n), r;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((r) => ({ pre: r }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((r) => ({ post: r }))), this.createRequestArgs = ({ url: n, query: r, method: i, headers: a, body: o, responseType: u }) => ({
      url: `${this.configuration.basePath}${n}${r && Object.keys(r).length ? `?${GI(r)}` : ""}`,
      method: i,
      headers: a,
      body: o instanceof FormData ? o : JSON.stringify(o),
      responseType: u ?? "json"
    }), this.rxjsRequest = (n) => ka(n).pipe(
      Ht((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      Gd(
        (r) => Kr(r).pipe(
          Ht((i) => (this.middleware.filter((a) => a.post).forEach((a) => i = a.post(i)), i))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, n) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      Ht((r) => {
        const { status: i, response: a } = r;
        if (i >= 200 && i < 300)
          return (n == null ? void 0 : n.response) === "raw" ? r : a;
        throw r;
      })
    );
  }
};
const gr = (t) => encodeURIComponent(`${t}`), GI = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((r) => `${gr(e)}=${gr(r)}`).join("&") : `${gr(e)}=${gr(n)}`
).join("&"), Mi = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class jI extends VI {
  deleteAllSclFileVersions({ id: e, type: n }, r) {
    Mi(e, "id", "deleteAllSclFileVersions"), Mi(n, "type", "deleteAllSclFileVersions");
    const i = {};
    return this.request({
      url: "/scl/v1/{type}/{id}".replace("{id}", gr(e)).replace("{type}", gr(n)),
      method: "DELETE",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  retrieveDataResourceByVersion({ id: e, version: n }, r) {
    Mi(e, "id", "retrieveDataResourceByVersion"), Mi(n, "version", "retrieveDataResourceByVersion");
    const i = {};
    return this.request({
      url: "/api/scl/{id}/version/{version}".replace("{id}", gr(e)).replace("{version}", gr(n)),
      method: "GET",
      headers: i,
      responseType: "blob"
    }, r == null ? void 0 : r.responseOpts);
  }
  retrieveDataResourceHistory({ id: e }, n) {
    Mi(e, "id", "retrieveDataResourceHistory");
    const r = {};
    return this.request({
      url: "/api/scl/{id}/versions".replace("{id}", gr(e)),
      method: "GET",
      headers: r
    }, n == null ? void 0 : n.responseOpts);
  }
  searchForResources({ dataResourceSearch: e }, n) {
    Mi(e, "dataResourceSearch", "searchForResources");
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
class Fi {
  constructor() {
    this.endpoint = "/compas-scl-data-service";
  }
  static getInstance() {
    return Fi.instance || (Fi.instance = new Fi()), Fi.instance;
  }
  searchFiles(e) {
    return this.generateApiClient(this.endpoint).searchForResources({
      dataResourceSearch: this.mapToDataResourceSearch(e)
    }).pipe(
      Pu((r) => !!r || !!r.results),
      Ht((r) => r.results),
      Ht(
        (r) => r.map((i) => this.mapToFileSearchResult(i))
      )
    );
  }
  getHistoryFiles(e) {
    return this.generateApiClient(this.endpoint).retrieveDataResourceHistory({
      id: e
    }).pipe(
      Pu((r) => !!r || !!r.versions),
      Ht((r) => r.versions),
      Ht(
        (r) => r.map((i) => this.mapToFileSearchResult(i))
      )
    );
  }
  /**
   * Delete all versions of a resource
   * @param type scl file type (e.g., SSD, SCL, etc.)
   * @param uuid uuid of the resource
   */
  deleteResource(e, n) {
    return this.generateApiClient(this.endpoint).deleteAllSclFileVersions({ id: n, type: e });
  }
  downloadSclData(e, n, r) {
    return this.generateApiClient(this.endpoint).retrieveDataResourceByVersion({
      id: e,
      version: r
    });
  }
  mapToFileSearchResult(e) {
    return new gI(
      e.uuid,
      e.name,
      e.author,
      e.type,
      new Date(e.changedAt),
      e.version,
      e.comment,
      e.archived,
      e.available,
      e.deleted
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
    const n = new qd({
      basePath: e
      // accessToken: authInfo.token,
    });
    return new jI(n);
  }
}
var Dr;
class ku {
  constructor() {
    rt(this, Dr, Vt([]));
  }
  get store() {
    return le(this, Dr);
  }
  updateData(e) {
    le(this, Dr).set(e);
  }
  addData(e) {
    le(this, Dr).update((n) => [...n, e]);
  }
  removeData(e) {
    le(this, Dr).update((n) => n.filter((r) => r.uuid !== e));
  }
  getData(e) {
    return Nc(le(this, Dr)).find((n) => n.uuid === e);
  }
}
Dr = new WeakMap();
class qI {
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
const WI = new qI("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), zI = [WI], KI = zI[0].getUrl();
class Wd {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? KI;
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
class XI {
  constructor(e = new Wd()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (n) => {
      const r = this.clone();
      return r.middleware = r.middleware.concat(n), r;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((r) => ({ pre: r }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((r) => ({ post: r }))), this.createRequestArgs = ({ url: n, query: r, method: i, headers: a, body: o, responseType: u }) => ({
      url: `${this.configuration.basePath}${n}${r && Object.keys(r).length ? `?${YI(r)}` : ""}`,
      method: i,
      headers: a,
      body: o instanceof FormData ? o : JSON.stringify(o),
      responseType: u ?? "json"
    }), this.rxjsRequest = (n) => ka(n).pipe(
      Ht((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      Gd(
        (r) => Kr(r).pipe(
          Ht((i) => (this.middleware.filter((a) => a.post).forEach((a) => i = a.post(i)), i))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, n) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      Ht((r) => {
        const { status: i, response: a } = r;
        if (i >= 200 && i < 300)
          return (n == null ? void 0 : n.response) === "raw" ? r : a;
        throw r;
      })
    );
  }
}
const pr = (t) => encodeURIComponent(`${t}`), YI = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((r) => `${pr(e)}=${pr(r)}`).join("&") : `${pr(e)}=${pr(n)}`
).join("&"), Ta = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class ZI extends XI {
  archiveResource({ id: e, version: n, xAuthor: r, xApprover: i, contentType: a, xFilename: o, body: u }, l) {
    Ta(e, "id", "archiveResource"), Ta(n, "version", "archiveResource");
    const c = {
      "Content-Type": "application/octet-stream",
      ...r != null ? { "X-author": String(r) } : void 0,
      ...i != null ? { "X-approver": String(i) } : void 0,
      ...a != null ? { "Content-Type": String(a) } : void 0,
      ...o != null ? { "X-filename": String(o) } : void 0
    };
    return this.request({
      url: "/api/archive/referenced-resource/{id}/versions/{version}".replace("{id}", pr(e)).replace("{version}", pr(n)),
      method: "POST",
      headers: c,
      body: u
    }, l == null ? void 0 : l.responseOpts);
  }
  archiveSclResource({ id: e, version: n }, r) {
    Ta(e, "id", "archiveSclResource"), Ta(n, "version", "archiveSclResource");
    const i = {};
    return this.request({
      url: "/api/archive/scl/{id}/versions/{version}".replace("{id}", pr(e)).replace("{version}", pr(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  retrieveArchivedResourceHistory({ id: e }, n) {
    Ta(e, "id", "retrieveArchivedResourceHistory");
    const r = {};
    return this.request({
      url: "/api/archive/resources/{id}/versions".replace("{id}", pr(e)),
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
class xa {
  constructor(e, n, r, i, a, o, u, l, c, d, m, f, g) {
    this._uuid = e, this._name = n, this._location = r, this._note = i, this._author = a, this._approver = o, this._type = u, this._voltage = l, this._modifiedAt = c, this._archivedAt = d, this._contentType = m, this._version = f, this._fields = g;
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
class ki {
  constructor() {
    this.baseUrl = "/compas-scl-data-service", this.dummySearchResults = [
      new xa(
        ni(),
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
      new xa(
        ni(),
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
    return ki.instance || (ki.instance = new ki()), ki.instance;
  }
  searchArchive(e) {
    return this.generateApiClient().searchArchivedResources({ archivedResourcesSearch: e }).pipe(
      vr(1),
      Ht((n) => n.resources),
      Ht(
        (n) => n.map((r) => this.mapToArchiveSearchResult(r))
      ),
      Mo(() => ka(this.dummySearchResults)),
      hI(500)
    );
  }
  retrieveArchivedResourceHistory(e) {
    return this.generateApiClient().retrieveArchivedResourceHistory({ id: e }).pipe(
      vr(1),
      Ht((n) => n.versions),
      Ht(
        (n) => n.map((r) => this.mapToArchiveSearchResult(r))
      ),
      Mo(() => ka([
        new xa(
          ni(),
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
          [{ key: "SOURCE_RESOURCE_ID", value: ni() }]
        ),
        new xa(
          ni(),
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
          [{ key: "SOURCE_RESOURCE_ID", value: ni() }]
        )
      ]))
    );
  }
  findByUUIDAndVersion(e, n, r) {
    return Xo(
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
    return new xa(
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
    const e = new Wd({
      basePath: this.baseUrl
      // accessToken: authInfo.token,
    });
    return new ZI(e);
  }
}
xm({ en: Qm, de: km });
var QI = /* @__PURE__ */ ce("<h3> </h3>"), JI = /* @__PURE__ */ ce("<div><!></div>"), $I = /* @__PURE__ */ ce("<!> <!>", 1), e0 = /* @__PURE__ */ ce("<div><!></div>"), t0 = /* @__PURE__ */ ce('<div class="oscd-app"><div class="version-editor-container svelte-vqh57v"><!> <div class="search-filter svelte-vqh57v"><!></div> <div class="table-container svelte-vqh57v"><!></div></div></div> <!> <!>', 1);
function n0(t, e) {
  xe(e, !0);
  const n = () => Bn(Tm, "$_", r), [r, i] = ir(), a = Fi.getInstance(), o = ki.getInstance();
  let u = /* @__PURE__ */ he(void 0);
  const l = new zs(), c = new zs(), d = c.pipe(
    mI(l.pipe(cI(200))),
    Ht(() => k(s(S))),
    Di(() => {
      X(g, !1);
    }),
    Nu((B) => a.searchFiles(B).pipe(
      Ht((P) => P.filter((M) => !M.deleted)),
      Di((P) => {
        [...P], m().updateData(P);
      }),
      Hu(() => {
        X(g, !0);
      })
    ))
  );
  let m = v(e, "dataStore", 19, () => new ku()), f = v(e, "historyStore", 19, () => new ku()), g = /* @__PURE__ */ he(!0), h = /* @__PURE__ */ he(!1), p = /* @__PURE__ */ he("");
  at(() => {
    const B = d.subscribe();
    return c.next(), () => B.unsubscribe();
  });
  function b(B) {
    return new Date(B).toLocaleDateString();
  }
  const y = {
    headerName: "",
    field: "actions",
    numeric: !1,
    filter: !1,
    filterType: "text",
    minWidth: "100px",
    sortable: !1
  };
  let E = /* @__PURE__ */ fe(() => [
    {
      headerName: n()("uuid"),
      field: "uuid",
      numeric: !1,
      filter: !1,
      filterType: "text",
      sortable: !1
    },
    {
      headerName: n()("filename"),
      field: "filename",
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
      headerName: n()("author"),
      field: "author",
      numeric: !1,
      filter: !1,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: n()("date"),
      field: "date",
      numeric: !1,
      filter: !1,
      filterType: "text",
      sortable: !0,
      valueFormatter: b
    },
    {
      headerName: n()("version"),
      field: "version",
      numeric: !1,
      filter: !1,
      filterType: "text",
      sortable: !0
    },
    y
  ]), I = /* @__PURE__ */ fe(() => [
    ...s(E),
    {
      headerName: "Comment",
      field: "comment",
      numeric: !1,
      filter: !1,
      filterType: "text",
      sortable: !0
    }
  ]);
  const _ = [
    {
      icon: "edit",
      tooltip: "Open",
      callback: (B) => z(B),
      disabled: (B) => !B.available
    },
    {
      icon: "find-in-page",
      tooltip: "View History",
      callback: (B) => J(B),
      disabled: () => !1
    },
    {
      icon: "download",
      tooltip: "Download",
      callback: (B) => w(B),
      disabled: (B) => !B.available
    },
    {
      icon: "delete",
      tooltip: "Delete",
      callback: (B) => L(B),
      disabled: () => !1
    },
    {
      icon: "archive",
      tooltip: "Archive",
      callback: (B) => T(B),
      disabled: () => !1
    }
  ], A = [
    {
      icon: "download",
      tooltip: "Download",
      callback: (B) => w(B),
      disabled: (B) => !B.available
    }
  ];
  let S = /* @__PURE__ */ he(ye([
    { key: "uuid", label: "UUID", type: "text" },
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
    { key: "to", label: "Date to", type: "date" }
  ]));
  async function L(B) {
    console.debug("deleteResource: ", B), (await vs(gs, {
      title: "Confirm Deletion",
      message: `Are you sure you want to delete the resource "${B.filename} (${B.uuid})"? This action cannot be undone.`,
      confirmActionText: "Delete",
      cancelActionText: "Cancel",
      confirmActionColor: "danger"
    })).type === "confirm" && a.deleteResource(B.type, B.uuid).pipe(vr(1)).subscribe({
      next: () => {
        l.next(null), wr.success("Deleted resource", `Resource "${B.filename} (${B.uuid})" has been deleted.`);
      },
      error: (M) => {
        console.error(`Failed to delete resource "${B.filename} (${B.uuid})":`, M), wr.error("Deletion failed", `Failed to delete resource "${B.filename} (${B.uuid})".`);
      }
    });
  }
  async function T(B) {
    console.debug("archiveResource: ", B), (await vs(gs, {
      title: "Confirm Archiving",
      message: `Archive latest version "${B.filename}" (v${B.version})? This keeps the file in History and does not delete it.`,
      confirmActionText: "Archive",
      cancelActionText: "Cancel"
    })).type === "confirm" && o.archiveSclFile(B.uuid, B.version).pipe(vr(1)).subscribe({
      next: () => {
        l.next(null), wr.success("Archived resource", `Resource "${B.filename} (${B.uuid})" has been archived.`);
      },
      error: (M) => {
        console.error(`Failed to archive resource "${B.filename} (${B.uuid})":`, M);
        const O = M == null ? void 0 : M.response;
        O != null && O.errorMessages && (O == null ? void 0 : O.errorMessages.length) > 0 ? wr.error("Archiving failed", O.errorMessages[0].message) : wr.error("Archiving failed", `Failed to archive resource "${B.filename} (${B.uuid})".`);
      }
    });
  }
  function w(B) {
    console.log("Download file: ", B), a.downloadSclData(B.uuid, B.type, B.version).pipe(vr(1), Di((P) => {
      const M = window.URL.createObjectURL(P), O = document.createElement("a");
      O.href = M, O.download = `${B.filename}.${B.type.toLowerCase()}`, O.style.display = "none", document.body.appendChild(O), O.click(), document.body.removeChild(O), window.URL.revokeObjectURL(M);
    })).subscribe();
  }
  function k(B) {
    const P = {
      uuid: null,
      filename: null,
      author: null,
      type: null,
      name: null,
      from: null,
      to: null
    };
    return B.forEach((M) => {
      if (M.key in P && M.type !== "date" && M.value)
        P[M.key] = M.value;
      else if (M.type === "date" && M.value) {
        const O = new Date(M.value);
        M.key === "from" ? P.from = O.toISOString() : M.key === "to" && (O.setHours(23, 59, 59, 999), P.to = O.toISOString());
      }
    }), s(p) && s(p).trim() !== "" && (P.filename = s(p).trim()), P;
  }
  function J(B) {
    X(u, B, !0), a.getHistoryFiles(B.uuid).pipe(vr(1), Di((P) => {
      X(h, !0), [...P], f().updateData(P);
    })).subscribe();
  }
  function G(B) {
    console.log("Dialog closed with result: ", B), X(h, !1);
  }
  async function z(B) {
    if ((await vs(gs, {
      title: "Open File",
      message: `Do you want to open "${B.filename}"? 

Any unsaved changes in your current project will be lost.`,
      confirmActionText: "Open",
      cancelActionText: "Cancel"
    })).type !== "confirm")
      return;
    let M = "";
    a.downloadSclData(B.uuid, B.type, B.version).pipe(
      vr(1),
      Di((O) => {
        M = window.URL.createObjectURL(O);
      }),
      Nu(() => Xo(fetch(M).then((O) => {
        if (O.status === 200)
          return O.text();
        throw new Error(`Failed to load ${B.filename}: ${O.status} ${O.statusText}`);
      }))),
      vr(1),
      Mo((O) => (wr.error("Open Document Failed", `Failed to open document "${B.filename}".`), console.error(O), ka(void 0))),
      Di((O) => {
        var ie;
        if (!O)
          return;
        const ee = B.filename, Z = new DOMParser().parseFromString(O, "application/xml");
        (ie = window.document.getElementsByTagName("open-scd")[0]) == null || ie.dispatchEvent(new CustomEvent("open-doc", {
          bubbles: !0,
          composed: !0,
          detail: { localFile: !1, doc: Z, docName: ee }
        }));
      }),
      Hu(() => M && window.URL.revokeObjectURL(M))
    ).subscribe();
  }
  var R = t0(), C = Y(R), F = de(C), N = de(F);
  jp(N, {
    onClose: G,
    get open() {
      return s(h);
    },
    set open(O) {
      X(h, O, !0);
    },
    title: (O) => {
      var ee = QI(), Z = de(ee);
      Oe((ie) => $e(Z, ie), [
        () => {
          var ie;
          return n()("versionHistory.title", { values: { filename: (ie = s(u)) == null ? void 0 : ie.filename } });
        }
      ]), x(O, ee);
    },
    content: (O) => {
      var ee = JI(), Z = de(ee);
      {
        let ie = /* @__PURE__ */ fe(() => n()("search"));
        xu(Z, {
          get columnDefs() {
            return s(I);
          },
          get store() {
            return f();
          },
          get loadingDone() {
            return s(g);
          },
          get rowActions() {
            return A;
          },
          get searchInputLabel() {
            return s(ie);
          }
        });
      }
      x(O, ee);
    },
    actions: (O) => {
      var ee = e0(), Z = de(ee);
      fd(Z, {
        callback: G,
        variant: "raised",
        children: (ie, Ae) => {
          var te = $I(), oe = Y(te);
          gl(oe, {});
          var Te = be(oe, 2);
          dd(Te, {
            children: (Re, Ne) => {
              var Fe = vt();
              Oe((He) => $e(Fe, He), [() => n()("done")]), x(Re, Fe);
            },
            $$slots: { default: !0 }
          }), x(ie, te);
        },
        $$slots: { default: !0 }
      }), x(O, ee);
    },
    $$slots: { title: !0, content: !0, actions: !0 }
  });
  var K = be(N, 2), ne = de(K);
  my(ne, {
    searchLabel: "Search file name...",
    onFilterChange: () => l.next(null),
    onSearchInput: () => l.next(null),
    get filters() {
      return s(S);
    },
    set filters(B) {
      X(S, B, !0);
    },
    get searchText() {
      return s(p);
    },
    set searchText(B) {
      X(p, B, !0);
    }
  });
  var U = be(K, 2), D = de(U);
  {
    let B = /* @__PURE__ */ fe(() => n()("search"));
    xu(D, {
      emptyText: "No resources found.",
      get columnDefs() {
        return s(E);
      },
      get store() {
        return m();
      },
      get loadingDone() {
        return s(g);
      },
      get rowActions() {
        return _;
      },
      get searchInputLabel() {
        return s(B);
      }
    });
  }
  var W = be(C, 2);
  O_(W, {});
  var Ie = be(W, 2);
  Wp(Ie, {}), x(t, R), we(), i();
}
const zd = "version-editor", Kd = "0.0.1";
var r0 = /* @__PURE__ */ ce('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function i0(t, e) {
  xe(e, !0);
  let n = v(e, "dev", 3, !1);
  var r = r0(), i = Y(r);
  {
    var a = (l) => {
      n0(l, {});
    };
    se(i, (l) => {
      (e.doc || n()) && l(a);
    });
  }
  var o = be(i, 2), u = be(o, 2);
  Oe(() => {
    Gl(o, zd), Gl(u, Kd);
  }), x(t, r), we();
}
var Xi;
class f0 extends HTMLElement {
  constructor() {
    super();
    rt(this, Xi);
    Be(this, Xi, /* @__PURE__ */ he(ye({ doc: void 0, editCount: void 0 })));
  }
  get props() {
    return s(le(this, Xi));
  }
  set props(n) {
    X(le(this, Xi), n, !0);
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.props.doc = this._doc, this.props.editCount = this._editCount;
    const n = a0();
    this.shadowRoot.appendChild(n);
    const r = () => uh(i0, { target: this.shadowRoot, props: this.props });
    n.addEventListener("load", r, { once: !0 }), n.addEventListener("error", r, { once: !0 });
  }
  set doc(n) {
    this._doc = n, this.props.doc = n;
  }
  set editCount(n) {
    this._editCount = n, this.props.editCount = n;
  }
}
Xi = new WeakMap();
function a0() {
  const t = `${zd}-v${Kd}-style`, e = o0(), n = document.createElement("link");
  return n.rel = "stylesheet", n.type = "text/css", n.href = e, n.id = t, n;
}
function o0() {
  const t = new URL(import.meta.url), e = t.origin, n = t.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, n, "style.css"].filter(Boolean).join("/");
}
export {
  f0 as default
};
