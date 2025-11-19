var hd = Object.defineProperty;
var zs = (t) => {
  throw TypeError(t);
};
var vd = (t, e, n) => e in t ? hd(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var fi = (t, e, n) => vd(t, typeof e != "symbol" ? e + "" : e, n), Co = (t, e, n) => e.has(t) || zs("Cannot " + n);
var $ = (t, e, n) => (Co(t, e, "read from private field"), n ? n.call(t) : e.get(t)), $e = (t, e, n) => e.has(t) ? zs("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), Pe = (t, e, n, r) => (Co(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), Vt = (t, e, n) => (Co(t, e, "access private method"), n);
const Mt = Symbol(), md = "http://www.w3.org/1999/xhtml", pd = "http://www.w3.org/2000/svg", gd = "@attach", au = !1;
var io = Array.isArray, bd = Array.prototype.indexOf, ms = Array.from, Ka = Object.defineProperty, yr = Object.getOwnPropertyDescriptor, ou = Object.getOwnPropertyDescriptors, Id = Object.prototype, yd = Array.prototype, ps = Object.getPrototypeOf, Xs = Object.isExtensible;
function ea(t) {
  return typeof t == "function";
}
const pe = () => {
};
function su(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function lu() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
const $t = 2, gs = 4, bs = 8, ri = 16, or = 32, ii = 64, Is = 128, Cn = 256, za = 512, qt = 1024, mn = 2048, Sr = 4096, Pn = 8192, ai = 16384, ys = 32768, oi = 65536, Ys = 1 << 17, _d = 1 << 18, qi = 1 << 19, Ed = 1 << 20, jo = 1 << 21, ao = 1 << 22, Qr = 1 << 23, qn = Symbol("$state"), uu = Symbol("legacy props"), Ad = Symbol(""), gi = new class extends Error {
  constructor() {
    super(...arguments);
    fi(this, "name", "StaleReactionError");
    fi(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function _s(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Cd() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Sd(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function xd() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Td(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ld() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function wd(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Od() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Rd() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Md() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Dd() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Pd() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Nd() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let Hd = !1;
function cu(t) {
  return t === this.v;
}
function Es(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function du(t) {
  return !Es(t, this.v);
}
let Wi = !1, Ud = !1;
function Fd() {
  Wi = !0;
}
let lt = null;
function Mi(t) {
  lt = t;
}
function se(t) {
  return (
    /** @type {T} */
    fu().get(t)
  );
}
function te(t, e) {
  return fu().set(t, e), e;
}
function Re(t, e = !1, n) {
  lt = {
    p: lt,
    c: null,
    e: null,
    s: t,
    x: null,
    l: Wi && !e ? { s: null, u: null, $: [] } : null
  };
}
function Me(t) {
  var e = (
    /** @type {ComponentContext} */
    lt
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      Lu(r);
  }
  return t !== void 0 && (e.x = t), lt = e.p, t ?? /** @type {T} */
  {};
}
function _a() {
  return !Wi || lt !== null && lt.l === null;
}
function fu(t) {
  return lt === null && _s(), lt.c ?? (lt.c = new Map(Bd(lt) || void 0));
}
function Bd(t) {
  let e = t.p;
  for (; e !== null; ) {
    const n = e.c;
    if (n !== null)
      return n;
    e = e.p;
  }
  return null;
}
let qr = [];
function hu() {
  var t = qr;
  qr = [], su(t);
}
function Cr(t) {
  if (qr.length === 0 && !ca) {
    var e = qr;
    queueMicrotask(() => {
      e === qr && hu();
    });
  }
  qr.push(t);
}
function kd() {
  for (; qr.length > 0; )
    hu();
}
const Vd = /* @__PURE__ */ new WeakMap();
function vu(t) {
  var e = je;
  if (e === null)
    return Ve.f |= Qr, t;
  if (e.f & ys)
    Di(t, e);
  else {
    if (!(e.f & Is))
      throw !e.parent && t instanceof Error && mu(t), t;
    e.b.error(t);
  }
}
function Di(t, e) {
  for (; e !== null; ) {
    if (e.f & Is)
      try {
        e.b.error(t);
        return;
      } catch (n) {
        t = n;
      }
    e = e.parent;
  }
  throw t instanceof Error && mu(t), t;
}
function mu(t) {
  const e = Vd.get(t);
  e && (Ka(t, "message", {
    value: e.message
  }), Ka(t, "stack", {
    value: e.stack
  }));
}
const Oa = /* @__PURE__ */ new Set();
let nt = null, Ba = null, Ut = null, qo = /* @__PURE__ */ new Set(), Gn = [], oo = null, Wo = !1, ca = !1;
var xi, Ti, Kr, ba, Li, wi, zr, Oi, Ia, ya, Sn, Ko, ka, zo;
const to = class to {
  constructor() {
    $e(this, Sn);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    fi(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    $e(this, xi, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    $e(this, Ti, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    $e(this, Kr, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    $e(this, ba, null);
    /**
     * Async effects inside a newly-created `<svelte:boundary>`
     * — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    $e(this, Li, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    $e(this, wi, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    $e(this, zr, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    $e(this, Oi, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    $e(this, Ia, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    $e(this, ya, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    fi(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var a;
    Gn = [], Ba = null, this.apply();
    for (const o of e)
      Vt(this, Sn, Ko).call(this, o);
    if ($(this, Kr) === 0) {
      var n = Ut;
      Vt(this, Sn, zo).call(this);
      var r = $(this, wi), i = $(this, zr);
      Pe(this, wi, []), Pe(this, zr, []), Pe(this, Oi, []), Ba = this, nt = null, Ut = n, Zs(r), Zs(i), Ba = null, (a = $(this, ba)) == null || a.resolve();
    } else
      Vt(this, Sn, ka).call(this, $(this, wi)), Vt(this, Sn, ka).call(this, $(this, zr)), Vt(this, Sn, ka).call(this, $(this, Oi));
    Ut = null;
    for (const o of $(this, Li))
      ha(o);
    Pe(this, Li, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    $(this, xi).has(e) || $(this, xi).set(e, n), this.current.set(e, e.v), Ut == null || Ut.set(e, e.v);
  }
  activate() {
    nt = this;
  }
  deactivate() {
    nt = null, Ut = null;
  }
  flush() {
    if (Gn.length > 0) {
      if (this.activate(), pu(), nt !== null && nt !== this)
        return;
    } else $(this, Kr) === 0 && Vt(this, Sn, zo).call(this);
    this.deactivate();
    for (const e of qo)
      if (qo.delete(e), e(), nt !== null)
        break;
  }
  increment() {
    Pe(this, Kr, $(this, Kr) + 1);
  }
  decrement() {
    Pe(this, Kr, $(this, Kr) - 1);
    for (const e of $(this, Ia))
      Qt(e, mn), ti(e);
    for (const e of $(this, ya))
      Qt(e, Sr), ti(e);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    $(this, Ti).add(e);
  }
  settled() {
    return ($(this, ba) ?? Pe(this, ba, lu())).promise;
  }
  static ensure() {
    if (nt === null) {
      const e = nt = new to();
      Oa.add(nt), ca || to.enqueue(() => {
        nt === e && e.flush();
      });
    }
    return nt;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    Cr(e);
  }
  apply() {
  }
};
xi = new WeakMap(), Ti = new WeakMap(), Kr = new WeakMap(), ba = new WeakMap(), Li = new WeakMap(), wi = new WeakMap(), zr = new WeakMap(), Oi = new WeakMap(), Ia = new WeakMap(), ya = new WeakMap(), Sn = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
Ko = function(e) {
  var c;
  e.f ^= qt;
  for (var n = e.first; n !== null; ) {
    var r = n.f, i = (r & (or | ii)) !== 0, a = i && (r & qt) !== 0, o = a || (r & Pn) !== 0 || this.skipped_effects.has(n);
    if (!o && n.fn !== null) {
      i ? n.f ^= qt : r & gs ? $(this, zr).push(n) : r & qt || (r & ao && ((c = n.b) != null && c.is_pending()) ? $(this, Li).push(n) : ho(n) && (n.f & ri && $(this, Oi).push(n), ha(n)));
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
ka = function(e) {
  for (const n of e)
    (n.f & mn ? $(this, Ia) : $(this, ya)).push(n), Qt(n, qt);
  e.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
zo = function() {
  var e;
  for (const n of $(this, Ti))
    n();
  if ($(this, Ti).clear(), Oa.size > 1) {
    $(this, xi).clear();
    let n = !0;
    for (const r of Oa) {
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
          gu(o, a);
        if (Gn.length > 0) {
          nt = r, r.apply();
          for (const o of Gn)
            Vt(e = r, Sn, Ko).call(e, o);
          Gn = [], r.deactivate();
        }
      }
    }
    nt = null;
  }
  Oa.delete(this);
};
let ar = to;
function Gd(t) {
  var e = ca;
  ca = !0;
  try {
    for (var n; ; ) {
      if (kd(), Gn.length === 0 && (nt == null || nt.flush(), Gn.length === 0))
        return oo = null, /** @type {T} */
        n;
      pu();
    }
  } finally {
    ca = e;
  }
}
function pu() {
  var t = Ai;
  Wo = !0;
  try {
    var e = 0;
    for (el(!0); Gn.length > 0; ) {
      var n = ar.ensure();
      if (e++ > 1e3) {
        var r, i;
        jd();
      }
      n.process(Gn), _r.clear();
    }
  } finally {
    Wo = !1, el(t), oo = null;
  }
}
function jd() {
  try {
    Ld();
  } catch (t) {
    Di(t, oo);
  }
}
let nr = null;
function Zs(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if (!(r.f & (ai | Pn)) && ho(r) && (nr = [], ha(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Ru(r) : r.fn = null), (nr == null ? void 0 : nr.length) > 0)) {
        _r.clear();
        for (const i of nr)
          ha(i);
        nr = [];
      }
    }
    nr = null;
  }
}
function gu(t, e) {
  if (t.reactions !== null)
    for (const n of t.reactions) {
      const r = n.f;
      r & $t ? gu(
        /** @type {Derived} */
        n,
        e
      ) : r & (ao | ri) && bu(n, e) && (Qt(n, mn), ti(
        /** @type {Effect} */
        n
      ));
    }
}
function bu(t, e) {
  if (t.deps !== null) {
    for (const n of t.deps)
      if (e.includes(n) || n.f & $t && bu(
        /** @type {Derived} */
        n,
        e
      ))
        return !0;
  }
  return !1;
}
function ti(t) {
  for (var e = oo = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (Wo && e === je && n & ri)
      return;
    if (n & (ii | or)) {
      if (!(n & qt)) return;
      e.f ^= qt;
    }
  }
  Gn.push(e);
}
function qd(t) {
  let e = 0, n = ni(0), r;
  return () => {
    uf() && (s(n), co(() => (e === 0 && (r = Lr(() => t(() => da(n)))), e += 1, () => {
      Cr(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, da(n));
      });
    })));
  };
}
var Wd = oi | qi | Is;
function Kd(t, e, n) {
  new zd(t, e, n);
}
var On, En, vs, Bn, Xr, kn, An, an, Vn, mr, Yr, pr, Zr, gr, no, ro, Jt, Xd, Yd, Va, Ga, Xo;
class zd {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    $e(this, Jt);
    /** @type {Boundary | null} */
    fi(this, "parent");
    $e(this, On, !1);
    /** @type {TemplateNode} */
    $e(this, En);
    /** @type {TemplateNode | null} */
    $e(this, vs, null);
    /** @type {BoundaryProps} */
    $e(this, Bn);
    /** @type {((anchor: Node) => void)} */
    $e(this, Xr);
    /** @type {Effect} */
    $e(this, kn);
    /** @type {Effect | null} */
    $e(this, An, null);
    /** @type {Effect | null} */
    $e(this, an, null);
    /** @type {Effect | null} */
    $e(this, Vn, null);
    /** @type {DocumentFragment | null} */
    $e(this, mr, null);
    $e(this, Yr, 0);
    $e(this, pr, 0);
    $e(this, Zr, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    $e(this, gr, null);
    $e(this, no, () => {
      $(this, gr) && Pi($(this, gr), $(this, Yr));
    });
    $e(this, ro, qd(() => (Pe(this, gr, ni($(this, Yr))), () => {
      Pe(this, gr, null);
    })));
    Pe(this, En, e), Pe(this, Bn, n), Pe(this, Xr, r), this.parent = /** @type {Effect} */
    je.b, Pe(this, On, !!$(this, Bn).pending), Pe(this, kn, Tr(() => {
      je.b = this;
      {
        try {
          Pe(this, An, Gt(() => r($(this, En))));
        } catch (i) {
          this.error(i);
        }
        $(this, pr) > 0 ? Vt(this, Jt, Ga).call(this) : Pe(this, On, !1);
      }
    }, Wd));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return $(this, On) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!$(this, Bn).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    Vt(this, Jt, Xo).call(this, e), Pe(this, Yr, $(this, Yr) + e), qo.add($(this, no));
  }
  get_effect_pending() {
    return $(this, ro).call(this), s(
      /** @type {Source<number>} */
      $(this, gr)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = $(this, Bn).onerror;
    let r = $(this, Bn).failed;
    if ($(this, Zr) || !n && !r)
      throw e;
    $(this, An) && (Ft($(this, An)), Pe(this, An, null)), $(this, an) && (Ft($(this, an)), Pe(this, an, null)), $(this, Vn) && (Ft($(this, Vn)), Pe(this, Vn, null));
    var i = !1, a = !1;
    const o = () => {
      if (i) {
        Nd();
        return;
      }
      i = !0, a && Dd(), ar.ensure(), Pe(this, Yr, 0), $(this, Vn) !== null && Er($(this, Vn), () => {
        Pe(this, Vn, null);
      }), Pe(this, On, this.has_pending_snippet()), Pe(this, An, Vt(this, Jt, Va).call(this, () => (Pe(this, Zr, !1), Gt(() => $(this, Xr).call(this, $(this, En)))))), $(this, pr) > 0 ? Vt(this, Jt, Ga).call(this) : Pe(this, On, !1);
    };
    var u = Ve;
    try {
      sn(null), a = !0, n == null || n(e, o), a = !1;
    } catch (l) {
      Di(l, $(this, kn) && $(this, kn).parent);
    } finally {
      sn(u);
    }
    r && Cr(() => {
      Pe(this, Vn, Vt(this, Jt, Va).call(this, () => {
        Pe(this, Zr, !0);
        try {
          return Gt(() => {
            r(
              $(this, En),
              () => e,
              () => o
            );
          });
        } catch (l) {
          return Di(
            l,
            /** @type {Effect} */
            $(this, kn).parent
          ), null;
        } finally {
          Pe(this, Zr, !1);
        }
      }));
    });
  }
}
On = new WeakMap(), En = new WeakMap(), vs = new WeakMap(), Bn = new WeakMap(), Xr = new WeakMap(), kn = new WeakMap(), An = new WeakMap(), an = new WeakMap(), Vn = new WeakMap(), mr = new WeakMap(), Yr = new WeakMap(), pr = new WeakMap(), Zr = new WeakMap(), gr = new WeakMap(), no = new WeakMap(), ro = new WeakMap(), Jt = new WeakSet(), Xd = function() {
  try {
    Pe(this, An, Gt(() => $(this, Xr).call(this, $(this, En))));
  } catch (e) {
    this.error(e);
  }
  Pe(this, On, !1);
}, Yd = function() {
  const e = $(this, Bn).pending;
  e && (Pe(this, an, Gt(() => e($(this, En)))), ar.enqueue(() => {
    Pe(this, An, Vt(this, Jt, Va).call(this, () => (ar.ensure(), Gt(() => $(this, Xr).call(this, $(this, En)))))), $(this, pr) > 0 ? Vt(this, Jt, Ga).call(this) : (Er(
      /** @type {Effect} */
      $(this, an),
      () => {
        Pe(this, an, null);
      }
    ), Pe(this, On, !1));
  }));
}, /**
 * @param {() => Effect | null} fn
 */
Va = function(e) {
  var n = je, r = Ve, i = lt;
  Wn($(this, kn)), sn($(this, kn)), Mi($(this, kn).ctx);
  try {
    return e();
  } catch (a) {
    return vu(a), null;
  } finally {
    Wn(n), sn(r), Mi(i);
  }
}, Ga = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    $(this, Bn).pending
  );
  $(this, An) !== null && (Pe(this, mr, document.createDocumentFragment()), Zd($(this, An), $(this, mr))), $(this, an) === null && Pe(this, an, Gt(() => e($(this, En))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
Xo = function(e) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && Vt(n = this.parent, Jt, Xo).call(n, e);
    return;
  }
  Pe(this, pr, $(this, pr) + e), $(this, pr) === 0 && (Pe(this, On, !1), $(this, an) && Er($(this, an), () => {
    Pe(this, an, null);
  }), $(this, mr) && ($(this, En).before($(this, mr)), Pe(this, mr, null)), Cr(() => {
    ar.ensure().flush();
  }));
};
function Zd(t, e) {
  for (var n = t.nodes_start, r = t.nodes_end; n !== null; ) {
    var i = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ea(n)
    );
    e.append(n), n = i;
  }
}
function Iu(t, e, n) {
  const r = _a() ? so : As;
  if (e.length === 0) {
    n(t.map(r));
    return;
  }
  var i = nt, a = (
    /** @type {Effect} */
    je
  ), o = Qd();
  Promise.all(e.map((u) => /* @__PURE__ */ Jd(u))).then((u) => {
    o();
    try {
      n([...t.map(r), ...u]);
    } catch (l) {
      a.f & ai || Di(l, a);
    }
    i == null || i.deactivate(), Yo();
  }).catch((u) => {
    Di(u, a);
  });
}
function Qd() {
  var t = je, e = Ve, n = lt, r = nt;
  return function() {
    Wn(t), sn(e), Mi(n), r == null || r.activate();
  };
}
function Yo() {
  Wn(null), sn(null), Mi(null);
}
// @__NO_SIDE_EFFECTS__
function so(t) {
  var e = $t | mn, n = Ve !== null && Ve.f & $t ? (
    /** @type {Derived} */
    Ve
  ) : null;
  return je === null || n !== null && n.f & Cn ? e |= Cn : je.f |= qi, {
    ctx: lt,
    deps: null,
    effects: null,
    equals: cu,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Mt
    ),
    wv: 0,
    parent: n ?? je,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Jd(t, e) {
  let n = (
    /** @type {Effect | null} */
    je
  );
  n === null && Cd();
  var r = (
    /** @type {Boundary} */
    n.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = ni(
    /** @type {V} */
    Mt
  ), o = !Ve, u = /* @__PURE__ */ new Map();
  return df(() => {
    var f;
    var l = lu();
    i = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(Yo);
    } catch (v) {
      l.reject(v), Yo();
    }
    var c = (
      /** @type {Batch} */
      nt
    ), d = r.is_pending();
    o && (r.update_pending_count(1), d || (c.increment(), (f = u.get(c)) == null || f.reject(gi), u.delete(c), u.set(c, l)));
    const h = (v, p = void 0) => {
      if (d || c.activate(), p)
        p !== gi && (a.f |= Qr, Pi(a, p));
      else {
        a.f & Qr && (a.f ^= Qr), Pi(a, v);
        for (const [g, y] of u) {
          if (u.delete(g), g === c) break;
          y.reject(gi);
        }
      }
      o && (r.update_pending_count(-1), d || c.decrement());
    };
    l.promise.then(h, (v) => h(null, v || "unknown"));
  }), uo(() => {
    for (const l of u.values())
      l.reject(gi);
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
function ue(t) {
  const e = /* @__PURE__ */ so(t);
  return Pu(e), e;
}
// @__NO_SIDE_EFFECTS__
function As(t) {
  const e = /* @__PURE__ */ so(t);
  return e.equals = du, e;
}
function yu(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      Ft(
        /** @type {Effect} */
        e[n]
      );
  }
}
function $d(t) {
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
function Cs(t) {
  var e, n = je;
  Wn($d(t));
  try {
    yu(t), e = Fu(t);
  } finally {
    Wn(n);
  }
  return e;
}
function _u(t) {
  var e = Cs(t);
  if (t.equals(e) || (t.v = e, t.wv = Hu()), !si)
    if (Ut !== null)
      Ut.set(t, t.v);
    else {
      var n = (br || t.f & Cn) && t.deps !== null ? Sr : qt;
      Qt(t, n);
    }
}
const _r = /* @__PURE__ */ new Map();
function ni(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: cu,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function xe(t, e) {
  const n = ni(t);
  return Pu(n), n;
}
// @__NO_SIDE_EFFECTS__
function Eu(t, e = !1, n = !0) {
  var i;
  const r = ni(t);
  return e || (r.equals = du), Wi && n && lt !== null && lt.l !== null && ((i = lt.l).s ?? (i.s = [])).push(r), r;
}
function ie(t, e, n = !1) {
  Ve !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Mn || Ve.f & Ys) && _a() && Ve.f & ($t | ri | ao | Ys) && !(Zt != null && Zt.includes(t)) && Md();
  let r = n ? Ee(e) : e;
  return Pi(t, r);
}
function Pi(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    si ? _r.set(t, e) : _r.set(t, n), t.v = e;
    var r = ar.ensure();
    r.capture(t, n), t.f & $t && (t.f & mn && Cs(
      /** @type {Derived} */
      t
    ), Qt(t, t.f & Cn ? Sr : qt)), t.wv = Hu(), Au(t, mn), _a() && je !== null && je.f & qt && !(je.f & (or | ii)) && (_n === null ? vf([t]) : _n.push(t));
  }
  return e;
}
function da(t) {
  ie(t, t.v + 1);
}
function Au(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = _a(), i = n.length, a = 0; a < i; a++) {
      var o = n[a], u = o.f;
      if (!(!r && o === je)) {
        var l = (u & mn) === 0;
        l && Qt(o, e), u & $t ? Au(
          /** @type {Derived} */
          o,
          Sr
        ) : l && (u & ri && nr !== null && nr.push(
          /** @type {Effect} */
          o
        ), ti(
          /** @type {Effect} */
          o
        ));
      }
    }
}
function Ee(t) {
  if (typeof t != "object" || t === null || qn in t)
    return t;
  const e = ps(t);
  if (e !== Id && e !== yd)
    return t;
  var n = /* @__PURE__ */ new Map(), r = io(t), i = /* @__PURE__ */ xe(0), a = Jr, o = (u) => {
    if (Jr === a)
      return u();
    var l = Ve, c = Jr;
    sn(null), nl(a);
    var d = u();
    return sn(l), nl(c), d;
  };
  return r && n.set("length", /* @__PURE__ */ xe(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(u, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Od();
        var d = n.get(l);
        return d === void 0 ? d = o(() => {
          var h = /* @__PURE__ */ xe(c.value);
          return n.set(l, h), h;
        }) : ie(d, c.value, !0), !0;
      },
      deleteProperty(u, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in u) {
            const d = o(() => /* @__PURE__ */ xe(Mt));
            n.set(l, d), da(i);
          }
        } else
          ie(c, Mt), da(i);
        return !0;
      },
      get(u, l, c) {
        var v;
        if (l === qn)
          return t;
        var d = n.get(l), h = l in u;
        if (d === void 0 && (!h || (v = yr(u, l)) != null && v.writable) && (d = o(() => {
          var p = Ee(h ? u[l] : Mt), g = /* @__PURE__ */ xe(p);
          return g;
        }), n.set(l, d)), d !== void 0) {
          var f = s(d);
          return f === Mt ? void 0 : f;
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
          if (h !== void 0 && f !== Mt)
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
        if (l === qn)
          return !0;
        var c = n.get(l), d = c !== void 0 && c.v !== Mt || Reflect.has(u, l);
        if (c !== void 0 || je !== null && (!d || (f = yr(u, l)) != null && f.writable)) {
          c === void 0 && (c = o(() => {
            var v = d ? Ee(u[l]) : Mt, p = /* @__PURE__ */ xe(v);
            return p;
          }), n.set(l, c));
          var h = s(c);
          if (h === Mt)
            return !1;
        }
        return d;
      },
      set(u, l, c, d) {
        var A;
        var h = n.get(l), f = l in u;
        if (r && l === "length")
          for (var v = c; v < /** @type {Source<number>} */
          h.v; v += 1) {
            var p = n.get(v + "");
            p !== void 0 ? ie(p, Mt) : v in u && (p = o(() => /* @__PURE__ */ xe(Mt)), n.set(v + "", p));
          }
        if (h === void 0)
          (!f || (A = yr(u, l)) != null && A.writable) && (h = o(() => /* @__PURE__ */ xe(void 0)), ie(h, Ee(c)), n.set(l, h));
        else {
          f = h.v !== Mt;
          var g = o(() => Ee(c));
          ie(h, g);
        }
        var y = Reflect.getOwnPropertyDescriptor(u, l);
        if (y != null && y.set && y.set.call(d, c), !f) {
          if (r && typeof l == "string") {
            var E = (
              /** @type {Source<number>} */
              n.get("length")
            ), x = Number(l);
            Number.isInteger(x) && x >= E.v && ie(E, x + 1);
          }
          da(i);
        }
        return !0;
      },
      ownKeys(u) {
        s(i);
        var l = Reflect.ownKeys(u).filter((h) => {
          var f = n.get(h);
          return f === void 0 || f.v !== Mt;
        });
        for (var [c, d] of n)
          d.v !== Mt && !(c in u) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        Rd();
      }
    }
  );
}
function Qs(t) {
  try {
    if (t !== null && typeof t == "object" && qn in t)
      return t[qn];
  } catch {
  }
  return t;
}
function ef(t, e) {
  return Object.is(Qs(t), Qs(e));
}
var Js, Cu, Su, xu, Tu;
function tf() {
  if (Js === void 0) {
    Js = window, Cu = document, Su = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    xu = yr(e, "firstChild").get, Tu = yr(e, "nextSibling").get, Xs(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), Xs(n) && (n.__t = void 0);
  }
}
function xr(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Ni(t) {
  return xu.call(t);
}
// @__NO_SIDE_EFFECTS__
function Ea(t) {
  return Tu.call(t);
}
function ge(t, e) {
  return /* @__PURE__ */ Ni(t);
}
function Z(t, e = !1) {
  {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Ni(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Ea(n) : n;
  }
}
function ye(t, e = 1, n = !1) {
  let r = t;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ea(r);
  return r;
}
function nf(t) {
  t.textContent = "";
}
function Ss() {
  return !1;
}
function rf(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, Cr(() => {
      document.activeElement === n && t.focus();
    });
  }
}
let $s = !1;
function af() {
  $s || ($s = !0, document.addEventListener(
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
function lo(t) {
  var e = Ve, n = je;
  sn(null), Wn(null);
  try {
    return t();
  } finally {
    sn(e), Wn(n);
  }
}
function of(t, e, n, r = n) {
  t.addEventListener(e, () => lo(n));
  const i = t.__on_r;
  i ? t.__on_r = () => {
    i(), r(!0);
  } : t.__on_r = () => r(!0), af();
}
function sf(t) {
  je === null && Ve === null && Td(), Ve !== null && Ve.f & Cn && je === null && xd(), si && Sd();
}
function lf(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function sr(t, e, n, r = !0) {
  var i = je;
  i !== null && i.f & Pn && (t |= Pn);
  var a = {
    ctx: lt,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | mn,
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
      ha(a), a.f |= ys;
    } catch (l) {
      throw Ft(a), l;
    }
  else e !== null && ti(a);
  if (r) {
    var o = a;
    if (n && o.deps === null && o.teardown === null && o.nodes_start === null && o.first === o.last && // either `null`, or a singular child
    !(o.f & qi) && (o = o.first), o !== null && (o.parent = i, i !== null && lf(o, i), Ve !== null && Ve.f & $t && !(t & ii))) {
      var u = (
        /** @type {Derived} */
        Ve
      );
      (u.effects ?? (u.effects = [])).push(o);
    }
  }
  return a;
}
function uf() {
  return Ve !== null && !Mn;
}
function uo(t) {
  const e = sr(bs, null, !1);
  return Qt(e, qt), e.teardown = t, e;
}
function we(t) {
  sf();
  var e = (
    /** @type {Effect} */
    je.f
  ), n = !Ve && (e & or) !== 0 && (e & ys) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      lt
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return Lu(t);
}
function Lu(t) {
  return sr(gs | Ed, t, !1);
}
function cf(t) {
  ar.ensure();
  const e = sr(ii | qi, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Er(e, () => {
      Ft(e), r(void 0);
    }) : (Ft(e), r(void 0));
  });
}
function Aa(t) {
  return sr(gs, t, !1);
}
function df(t) {
  return sr(ao | qi, t, !0);
}
function co(t, e = 0) {
  return sr(bs | e, t, !0);
}
function Fe(t, e = [], n = []) {
  Iu(e, n, (r) => {
    sr(bs, () => t(...r.map(s)), !0);
  });
}
function Tr(t, e = 0) {
  var n = sr(ri | e, t, !0);
  return n;
}
function Gt(t, e = !0) {
  return sr(or | qi, t, !0, e);
}
function wu(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = si, r = Ve;
    tl(!0), sn(null);
    try {
      e.call(null);
    } finally {
      tl(n), sn(r);
    }
  }
}
function Ou(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && lo(() => {
      i.abort(gi);
    });
    var r = n.next;
    n.f & ii ? n.parent = null : Ft(n, e), n = r;
  }
}
function ff(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    e.f & or || Ft(e), e = n;
  }
}
function Ft(t, e = !0) {
  var n = !1;
  (e || t.f & _d) && t.nodes_start !== null && t.nodes_end !== null && (hf(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), Ou(t, e && !n), Xa(t, 0), Qt(t, ai);
  var r = t.transitions;
  if (r !== null)
    for (const a of r)
      a.stop();
  wu(t);
  var i = t.parent;
  i !== null && i.first !== null && Ru(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function hf(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ea(t)
    );
    t.remove(), t = n;
  }
}
function Ru(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Er(t, e) {
  var n = [];
  xs(t, n, !0), Mu(n, () => {
    Ft(t), e && e();
  });
}
function Mu(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var i of t)
      i.out(r);
  } else
    e();
}
function xs(t, e, n) {
  if (!(t.f & Pn)) {
    if (t.f ^= Pn, t.transitions !== null)
      for (const o of t.transitions)
        (o.is_global || n) && e.push(o);
    for (var r = t.first; r !== null; ) {
      var i = r.next, a = (r.f & oi) !== 0 || (r.f & or) !== 0;
      xs(r, e, a ? n : !1), r = i;
    }
  }
}
function fo(t) {
  Du(t, !0);
}
function Du(t, e) {
  if (t.f & Pn) {
    t.f ^= Pn, t.f & qt || (Qt(t, mn), ti(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & oi) !== 0 || (n.f & or) !== 0;
      Du(n, i ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || e) && a.in();
  }
}
let Ai = !1;
function el(t) {
  Ai = t;
}
let si = !1;
function tl(t) {
  si = t;
}
let Ve = null, Mn = !1;
function sn(t) {
  Ve = t;
}
let je = null;
function Wn(t) {
  je = t;
}
let Zt = null;
function Pu(t) {
  Ve !== null && (Zt === null ? Zt = [t] : Zt.push(t));
}
let Yt = null, fn = 0, _n = null;
function vf(t) {
  _n = t;
}
let Nu = 1, fa = 0, Jr = fa;
function nl(t) {
  Jr = t;
}
let br = !1;
function Hu() {
  return ++Nu;
}
function ho(t) {
  var h;
  var e = t.f;
  if (e & mn)
    return !0;
  if (e & Sr) {
    var n = t.deps, r = (e & Cn) !== 0;
    if (n !== null) {
      var i, a, o = (e & za) !== 0, u = r && je !== null && !br, l = n.length;
      if ((o || u) && (je === null || !(je.f & ai))) {
        var c = (
          /** @type {Derived} */
          t
        ), d = c.parent;
        for (i = 0; i < l; i++)
          a = n[i], (o || !((h = a == null ? void 0 : a.reactions) != null && h.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        o && (c.f ^= za), u && d !== null && !(d.f & Cn) && (c.f ^= Cn);
      }
      for (i = 0; i < l; i++)
        if (a = n[i], ho(
          /** @type {Derived} */
          a
        ) && _u(
          /** @type {Derived} */
          a
        ), a.wv > t.wv)
          return !0;
    }
    (!r || je !== null && !br) && Qt(t, qt);
  }
  return !1;
}
function Uu(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !(Zt != null && Zt.includes(t)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a.f & $t ? Uu(
        /** @type {Derived} */
        a,
        e,
        !1
      ) : e === a && (n ? Qt(a, mn) : a.f & qt && Qt(a, Sr), ti(
        /** @type {Effect} */
        a
      ));
    }
}
function Fu(t) {
  var g;
  var e = Yt, n = fn, r = _n, i = Ve, a = br, o = Zt, u = lt, l = Mn, c = Jr, d = t.f;
  Yt = /** @type {null | Value[]} */
  null, fn = 0, _n = null, br = (d & Cn) !== 0 && (Mn || !Ai || Ve === null), Ve = d & (or | ii) ? null : t, Zt = null, Mi(t.ctx), Mn = !1, Jr = ++fa, t.ac !== null && (lo(() => {
    t.ac.abort(gi);
  }), t.ac = null);
  try {
    t.f |= jo;
    var h = (
      /** @type {Function} */
      t.fn
    ), f = h(), v = t.deps;
    if (Yt !== null) {
      var p;
      if (Xa(t, fn), v !== null && fn > 0)
        for (v.length = fn + Yt.length, p = 0; p < Yt.length; p++)
          v[fn + p] = Yt[p];
      else
        t.deps = v = Yt;
      if (!br || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      d & $t && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (p = fn; p < v.length; p++)
          ((g = v[p]).reactions ?? (g.reactions = [])).push(t);
    } else v !== null && fn < v.length && (Xa(t, fn), v.length = fn);
    if (_a() && _n !== null && !Mn && v !== null && !(t.f & ($t | Sr | mn)))
      for (p = 0; p < /** @type {Source[]} */
      _n.length; p++)
        Uu(
          _n[p],
          /** @type {Effect} */
          t
        );
    return i !== null && i !== t && (fa++, _n !== null && (r === null ? r = _n : r.push(.../** @type {Source[]} */
    _n))), t.f & Qr && (t.f ^= Qr), f;
  } catch (y) {
    return vu(y);
  } finally {
    t.f ^= jo, Yt = e, fn = n, _n = r, Ve = i, br = a, Zt = o, Mi(u), Mn = l, Jr = c;
  }
}
function mf(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = bd.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && e.f & $t && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Yt === null || !Yt.includes(e)) && (Qt(e, Sr), e.f & (Cn | za) || (e.f ^= za), yu(
    /** @type {Derived} **/
    e
  ), Xa(
    /** @type {Derived} **/
    e,
    0
  ));
}
function Xa(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      mf(t, n[r]);
}
function ha(t) {
  var e = t.f;
  if (!(e & ai)) {
    Qt(t, qt);
    var n = je, r = Ai;
    je = t, Ai = !0;
    try {
      e & ri ? ff(t) : Ou(t), wu(t);
      var i = Fu(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = Nu;
      var a;
      au && Ud && t.f & mn && t.deps;
    } finally {
      Ai = r, je = n;
    }
  }
}
async function vo() {
  await Promise.resolve(), Gd();
}
function s(t) {
  var e = t.f, n = (e & $t) !== 0;
  if (Ve !== null && !Mn) {
    var r = je !== null && (je.f & ai) !== 0;
    if (!r && !(Zt != null && Zt.includes(t))) {
      var i = Ve.deps;
      if (Ve.f & jo)
        t.rv < fa && (t.rv = fa, Yt === null && i !== null && i[fn] === t ? fn++ : Yt === null ? Yt = [t] : (!br || !Yt.includes(t)) && Yt.push(t));
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
    ), u = o.parent;
    u !== null && !(u.f & Cn) && (o.f ^= Cn);
  }
  if (si) {
    if (_r.has(t))
      return _r.get(t);
    if (n) {
      o = /** @type {Derived} */
      t;
      var l = o.v;
      return (!(o.f & qt) && o.reactions !== null || Bu(o)) && (l = Cs(o)), _r.set(o, l), l;
    }
  } else if (n) {
    if (o = /** @type {Derived} */
    t, Ut != null && Ut.has(o))
      return Ut.get(o);
    ho(o) && _u(o);
  }
  if (Ut != null && Ut.has(t))
    return Ut.get(t);
  if (t.f & Qr)
    throw t.v;
  return t.v;
}
function Bu(t) {
  if (t.v === Mt) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (_r.has(e) || e.f & $t && Bu(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Lr(t) {
  var e = Mn;
  try {
    return Mn = !0, t();
  } finally {
    Mn = e;
  }
}
const pf = -7169;
function Qt(t, e) {
  t.f = t.f & pf | e;
}
function gf(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (qn in t)
      Zo(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && qn in n && Zo(n);
      }
  }
}
function Zo(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        Zo(t[r], e);
      } catch {
      }
    const n = ps(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = ou(n);
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
const ku = /* @__PURE__ */ new Set(), Qo = /* @__PURE__ */ new Set();
function Ts(t, e, n, r = {}) {
  function i(a) {
    if (r.capture || oa.call(e, a), !a.cancelBubble)
      return lo(() => n == null ? void 0 : n.call(this, a));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? Cr(() => {
    e.addEventListener(t, i, r);
  }) : e.addEventListener(t, i, r), i;
}
function bf(t, e, n, r = {}) {
  var i = Ts(e, t, n, r);
  return () => {
    t.removeEventListener(e, i, r);
  };
}
function If(t, e, n, r, i) {
  var a = { capture: r, passive: i }, o = Ts(t, e, n, a);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && uo(() => {
    e.removeEventListener(t, o, a);
  });
}
function li(t) {
  for (var e = 0; e < t.length; e++)
    ku.add(t[e]);
  for (var n of Qo)
    n(t);
}
let rl = null;
function oa(t) {
  var x;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = ((x = t.composedPath) == null ? void 0 : x.call(t)) || [], a = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  rl = t;
  var o = 0, u = rl === t && t.__root;
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
    Ka(t, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var d = Ve, h = je;
    sn(null), Wn(null);
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
            if (io(g)) {
              var [y, ...E] = g;
              y.apply(a, [t, ...E]);
            } else
              g.call(a, t);
        } catch (A) {
          f ? v.push(A) : f = A;
        }
        if (t.cancelBubble || p === e || p === null)
          break;
        a = p;
      }
      if (f) {
        for (let A of v)
          queueMicrotask(() => {
            throw A;
          });
        throw f;
      }
    } finally {
      t.__root = e, delete t.currentTarget, sn(d), Wn(h);
    }
  }
}
function Vu(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function Hi(t, e) {
  var n = (
    /** @type {Effect} */
    je
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function be(t, e) {
  var n = (e & 1) !== 0, r = (e & 2) !== 0, i, a = !t.startsWith("<!>");
  return () => {
    i === void 0 && (i = Vu(a ? t : "<!>" + t), n || (i = /** @type {Node} */
    /* @__PURE__ */ Ni(i)));
    var o = (
      /** @type {TemplateNode} */
      r || Su ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ni(o)
      ), l = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Hi(u, l);
    } else
      Hi(o, o);
    return o;
  };
}
// @__NO_SIDE_EFFECTS__
function yf(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, a;
  return () => {
    if (!a) {
      var o = (
        /** @type {DocumentFragment} */
        Vu(i)
      ), u = (
        /** @type {Element} */
        /* @__PURE__ */ Ni(o)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ Ni(u);
    }
    var l = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return Hi(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function ln(t, e) {
  return /* @__PURE__ */ yf(t, e, "svg");
}
function Wt(t = "") {
  {
    var e = xr(t + "");
    return Hi(e, e), e;
  }
}
function le() {
  var t = document.createDocumentFragment(), e = document.createComment(""), n = xr();
  return t.append(e, n), Hi(e, n), t;
}
function O(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function _f(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const Ef = [
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
function Af(t) {
  return Ef.includes(t);
}
const Cf = {
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
function Sf(t) {
  return t = t.toLowerCase(), Cf[t] ?? t;
}
const xf = ["touchstart", "touchmove"];
function Tf(t) {
  return xf.includes(t);
}
function dt(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function Lf(t, e) {
  return wf(t, e);
}
const hi = /* @__PURE__ */ new Map();
function wf(t, { target: e, anchor: n, props: r = {}, events: i, context: a, intro: o = !0 }) {
  tf();
  var u = /* @__PURE__ */ new Set(), l = (h) => {
    for (var f = 0; f < h.length; f++) {
      var v = h[f];
      if (!u.has(v)) {
        u.add(v);
        var p = Tf(v);
        e.addEventListener(v, oa, { passive: p });
        var g = hi.get(v);
        g === void 0 ? (document.addEventListener(v, oa, { passive: p }), hi.set(v, 1)) : hi.set(v, g + 1);
      }
    }
  };
  l(ms(ku)), Qo.add(l);
  var c = void 0, d = cf(() => {
    var h = n ?? e.appendChild(xr());
    return Kd(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (f) => {
        if (a) {
          Re({});
          var v = (
            /** @type {ComponentContext} */
            lt
          );
          v.c = a;
        }
        i && (r.$$events = i), c = t(f, r) || {}, a && Me();
      }
    ), () => {
      var p;
      for (var f of u) {
        e.removeEventListener(f, oa);
        var v = (
          /** @type {number} */
          hi.get(f)
        );
        --v === 0 ? (document.removeEventListener(f, oa), hi.delete(f)) : hi.set(f, v);
      }
      Qo.delete(l), h !== n && ((p = h.parentNode) == null || p.removeChild(h));
    };
  });
  return Of.set(c, d), c;
}
let Of = /* @__PURE__ */ new WeakMap();
function _e(t, e, ...n) {
  var r = t, i = pe, a;
  Tr(() => {
    i !== (i = e()) && (a && (Ft(a), a = null), a = Gt(() => (
      /** @type {SnippetFn} */
      i(r, ...n)
    )));
  }, oi);
}
function at(t) {
  lt === null && _s(), Wi && lt.l !== null ? Rf(lt).m.push(t) : we(() => {
    const e = Lr(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Kn(t) {
  lt === null && _s(), at(() => () => Lr(t));
}
function Rf(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
function ce(t, e, n = !1) {
  var r = t, i = null, a = null, o = Mt, u = n ? oi : 0, l = !1;
  const c = (v, p = !0) => {
    l = !0, f(p, v);
  };
  var d = null;
  function h() {
    d !== null && (d.lastChild.remove(), r.before(d), d = null);
    var v = o ? i : a, p = o ? a : i;
    v && fo(v), p && Er(p, () => {
      o ? a = null : i = null;
    });
  }
  const f = (v, p) => {
    if (o !== (o = v)) {
      var g = Ss(), y = r;
      if (g && (d = document.createDocumentFragment(), d.append(y = xr())), o ? i ?? (i = p && Gt(() => p(y))) : a ?? (a = p && Gt(() => p(y))), g) {
        var E = (
          /** @type {Batch} */
          nt
        ), x = o ? i : a, A = o ? a : i;
        x && E.skipped_effects.delete(x), A && E.skipped_effects.add(A), E.add_callback(h);
      } else
        h();
    }
  };
  Tr(() => {
    l = !1, e(c), l || f(null, null);
  }, u);
}
function ja(t, e) {
  return e;
}
function Mf(t, e, n) {
  for (var r = t.items, i = [], a = e.length, o = 0; o < a; o++)
    xs(e[o].e, i, !0);
  var u = a > 0 && i.length === 0 && n !== null;
  if (u) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    nf(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), Fn(t, e[0].prev, e[a - 1].next);
  }
  Mu(i, () => {
    for (var c = 0; c < a; c++) {
      var d = e[c];
      u || (r.delete(d.k), Fn(t, d.prev, d.next)), Ft(d.e, !u);
    }
  });
}
function bi(t, e, n, r, i, a = null) {
  var o = t, u = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, l = (e & 4) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      t
    );
    o = c.appendChild(xr());
  }
  var d = null, h = !1, f = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ As(() => {
    var E = n();
    return io(E) ? E : E == null ? [] : ms(E);
  }), p, g;
  function y() {
    Df(
      g,
      p,
      u,
      f,
      o,
      i,
      e,
      r,
      n
    ), a !== null && (p.length === 0 ? d ? fo(d) : d = Gt(() => a(o)) : d !== null && Er(d, () => {
      d = null;
    }));
  }
  Tr(() => {
    g ?? (g = /** @type {Effect} */
    je), p = /** @type {V[]} */
    s(v);
    var E = p.length;
    if (!(h && E === 0)) {
      h = E === 0;
      var x, A, b, _;
      if (Ss()) {
        var C = /* @__PURE__ */ new Set(), T = (
          /** @type {Batch} */
          nt
        );
        for (A = 0; A < E; A += 1) {
          b = p[A], _ = r(b, A);
          var S = u.items.get(_) ?? f.get(_);
          S ? e & 3 && Gu(S, b, A, e) : (x = ju(
            null,
            u,
            null,
            null,
            b,
            _,
            A,
            i,
            e,
            n,
            !0
          ), f.set(_, x)), C.add(_);
        }
        for (const [w, U] of u.items)
          C.has(w) || T.skipped_effects.add(U.e);
        T.add_callback(y);
      } else
        y();
      s(v);
    }
  });
}
function Df(t, e, n, r, i, a, o, u, l) {
  var ne, H, I, L;
  var c = (o & 8) !== 0, d = (o & 3) !== 0, h = e.length, f = n.items, v = n.first, p = v, g, y = null, E, x = [], A = [], b, _, C, T;
  if (c)
    for (T = 0; T < h; T += 1)
      b = e[T], _ = u(b, T), C = f.get(_), C !== void 0 && ((ne = C.a) == null || ne.measure(), (E ?? (E = /* @__PURE__ */ new Set())).add(C));
  for (T = 0; T < h; T += 1) {
    if (b = e[T], _ = u(b, T), C = f.get(_), C === void 0) {
      var S = r.get(_);
      if (S !== void 0) {
        r.delete(_), f.set(_, S);
        var w = y ? y.next : p;
        Fn(n, y, S), Fn(n, S, w), So(S, w, i), y = S;
      } else {
        var U = p ? (
          /** @type {TemplateNode} */
          p.e.nodes_start
        ) : i;
        y = ju(
          U,
          n,
          y,
          y === null ? n.first : y.next,
          b,
          _,
          T,
          a,
          o,
          l
        );
      }
      f.set(_, y), x = [], A = [], p = y.next;
      continue;
    }
    if (d && Gu(C, b, T, o), C.e.f & Pn && (fo(C.e), c && ((H = C.a) == null || H.unfix(), (E ?? (E = /* @__PURE__ */ new Set())).delete(C))), C !== p) {
      if (g !== void 0 && g.has(C)) {
        if (x.length < A.length) {
          var Y = A[0], B;
          y = Y.prev;
          var M = x[0], Q = x[x.length - 1];
          for (B = 0; B < x.length; B += 1)
            So(x[B], Y, i);
          for (B = 0; B < A.length; B += 1)
            g.delete(A[B]);
          Fn(n, M.prev, Q.next), Fn(n, y, M), Fn(n, Q, Y), p = Y, y = Q, T -= 1, x = [], A = [];
        } else
          g.delete(C), So(C, p, i), Fn(n, C.prev, C.next), Fn(n, C, y === null ? n.first : y.next), Fn(n, y, C), y = C;
        continue;
      }
      for (x = [], A = []; p !== null && p.k !== _; )
        p.e.f & Pn || (g ?? (g = /* @__PURE__ */ new Set())).add(p), A.push(p), p = p.next;
      if (p === null)
        continue;
      C = p;
    }
    x.push(C), y = C, p = C.next;
  }
  if (p !== null || g !== void 0) {
    for (var F = g === void 0 ? [] : ms(g); p !== null; )
      p.e.f & Pn || F.push(p), p = p.next;
    var k = F.length;
    if (k > 0) {
      var N = o & 4 && h === 0 ? i : null;
      if (c) {
        for (T = 0; T < k; T += 1)
          (I = F[T].a) == null || I.measure();
        for (T = 0; T < k; T += 1)
          (L = F[T].a) == null || L.fix();
      }
      Mf(n, F, N);
    }
  }
  c && Cr(() => {
    var ee;
    if (E !== void 0)
      for (C of E)
        (ee = C.a) == null || ee.apply();
  }), t.first = n.first && n.first.e, t.last = y && y.e;
  for (var W of r.values())
    Ft(W.e);
  r.clear();
}
function Gu(t, e, n, r) {
  r & 1 && Pi(t.v, e), r & 2 ? Pi(
    /** @type {Value<number>} */
    t.i,
    n
  ) : t.i = n;
}
function ju(t, e, n, r, i, a, o, u, l, c, d) {
  var h = (l & 1) !== 0, f = (l & 16) === 0, v = h ? f ? /* @__PURE__ */ Eu(i, !1, !1) : ni(i) : i, p = l & 2 ? ni(o) : o, g = {
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
      var y = document.createDocumentFragment();
      y.append(t = xr());
    }
    return g.e = Gt(() => u(
      /** @type {Node} */
      t,
      v,
      p,
      c
    ), Hd), g.e.prev = n && n.e, g.e.next = r && r.e, n === null ? d || (e.first = g) : (n.next = g, n.e.next = g.e), r !== null && (r.prev = g, r.e.prev = g.e), g;
  } finally {
  }
}
function So(t, e, n) {
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
      /* @__PURE__ */ Ea(a)
    );
    i.before(a), a = o;
  }
}
function Fn(t, e, n) {
  e === null ? t.first = n : (e.next = n, e.e.next = n && n.e), n !== null && (n.prev = e, n.e.prev = e && e.e);
}
function wr(t, e, n) {
  var r = t, i, a, o = null, u = null;
  function l() {
    a && (Er(a), a = null), o && (o.lastChild.remove(), r.before(o), o = null), a = u, u = null;
  }
  Tr(() => {
    if (i !== (i = e())) {
      var c = Ss();
      if (i) {
        var d = r;
        c && (o = document.createDocumentFragment(), o.append(d = xr()), a && nt.skipped_effects.add(a)), u = Gt(() => n(d, i));
      }
      c ? nt.add_callback(l) : l();
    }
  }, oi);
}
function il(t, e, n, r, i, a) {
  var o, u, l = null, c = (
    /** @type {TemplateNode} */
    t
  ), d;
  Tr(() => {
    const h = e() || null;
    var f = h === "svg" ? pd : null;
    h !== o && (d && (h === null ? Er(d, () => {
      d = null, u = null;
    }) : h === u ? fo(d) : Ft(d)), h && h !== u && (d = Gt(() => {
      if (l = f ? document.createElementNS(f, h) : document.createElement(h), Hi(l, l), r) {
        var v = (
          /** @type {TemplateNode} */
          l.appendChild(xr())
        );
        r(l, v);
      }
      je.nodes_end = l, c.before(l);
    })), o = h, o && (u = o));
  }, oi);
}
function Ue(t, e, n) {
  Aa(() => {
    var r = Lr(() => e(t, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      co(() => {
        var o = n();
        gf(o), i && Es(a, o) && (a = o, r.update(o));
      }), i = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Pf(t, e) {
  var n = void 0, r;
  Tr(() => {
    n !== (n = e()) && (r && (Ft(r), r = null), n && (r = Gt(() => {
      Aa(() => (
        /** @type {(node: Element) => void} */
        n(t)
      ));
    })));
  });
}
function qu(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var i = t.length;
    for (e = 0; e < i; e++) t[e] && (n = qu(t[e])) && (r && (r += " "), r += n);
  } else for (n in t) t[n] && (r && (r += " "), r += n);
  return r;
}
function Nf() {
  for (var t, e, n = 0, r = "", i = arguments.length; n < i; n++) (t = arguments[n]) && (e = qu(t)) && (r && (r += " "), r += e);
  return r;
}
function Wu(t) {
  return typeof t == "object" ? Nf(t) : t ?? "";
}
const al = [...` 	
\r\f \v\uFEFF`];
function Hf(t, e, n) {
  var r = t == null ? "" : "" + t;
  if (n) {
    for (var i in n)
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0; ) {
          var u = o + a;
          (o === 0 || al.includes(r[o - 1])) && (u === r.length || al.includes(r[u])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(u + 1) : o = u;
        }
  }
  return r === "" ? null : r;
}
function ol(t, e = !1) {
  var n = e ? " !important;" : ";", r = "";
  for (var i in t) {
    var a = t[i];
    a != null && a !== "" && (r += " " + i + ": " + a + n);
  }
  return r;
}
function xo(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function Uf(t, e) {
  if (e) {
    var n = "", r, i;
    if (Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, o = 0, u = !1, l = [];
      r && l.push(...Object.keys(r).map(xo)), i && l.push(...Object.keys(i).map(xo));
      var c = 0, d = -1;
      const g = t.length;
      for (var h = 0; h < g; h++) {
        var f = t[h];
        if (u ? f === "/" && t[h - 1] === "*" && (u = !1) : a ? a === f && (a = !1) : f === "/" && t[h + 1] === "*" ? u = !0 : f === '"' || f === "'" ? a = f : f === "(" ? o++ : f === ")" && o--, !u && a === !1 && o === 0) {
          if (f === ":" && d === -1)
            d = h;
          else if (f === ";" || h === g - 1) {
            if (d !== -1) {
              var v = xo(t.substring(c, d).trim());
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
    return r && (n += ol(r)), i && (n += ol(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function Ku(t, e, n, r, i, a) {
  var o = t.__className;
  if (o !== n || o === void 0) {
    var u = Hf(n, r, a);
    u == null ? t.removeAttribute("class") : e ? t.className = u : t.setAttribute("class", u), t.__className = n;
  } else if (a && i !== a)
    for (var l in a) {
      var c = !!a[l];
      (i == null || c !== !!i[l]) && t.classList.toggle(l, c);
    }
  return a;
}
function To(t, e = {}, n, r) {
  for (var i in n) {
    var a = n[i];
    e[i] !== a && (n[i] == null ? t.style.removeProperty(i) : t.style.setProperty(i, a, r));
  }
}
function en(t, e, n, r) {
  var i = t.__style;
  if (i !== e) {
    var a = Uf(e, r);
    a == null ? t.removeAttribute("style") : t.style.cssText = a, t.__style = e;
  } else r && (Array.isArray(r) ? (To(t, n == null ? void 0 : n[0], r[0]), To(t, n == null ? void 0 : n[1], r[1], "important")) : To(t, n, r));
  return r;
}
function Jo(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!io(e))
      return Pd();
    for (var r of t.options)
      r.selected = e.includes(sl(r));
    return;
  }
  for (r of t.options) {
    var i = sl(r);
    if (ef(i, e)) {
      r.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function Ff(t) {
  var e = new MutationObserver(() => {
    Jo(t, t.__value);
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
  }), uo(() => {
    e.disconnect();
  });
}
function sl(t) {
  return "__value" in t ? t.__value : t.value;
}
const ta = Symbol("class"), na = Symbol("style"), zu = Symbol("is custom element"), Xu = Symbol("is html");
function ll(t, e) {
  var n = Ls(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== "PROGRESS") || (t.value = e ?? "");
}
function Bf(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function va(t, e, n, r) {
  var i = Ls(t);
  i[e] !== (i[e] = n) && (e === "loading" && (t[Ad] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && Yu(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function kf(t, e, n, r, i = !1, a = !1) {
  var o = Ls(t), u = o[zu], l = !o[Xu], c = e || {}, d = t.tagName === "OPTION";
  for (var h in e)
    h in n || (n[h] = null);
  n.class ? n.class = Wu(n.class) : n[ta] && (n.class = null), n[na] && (n.style ?? (n.style = null));
  var f = Yu(t);
  for (const A in n) {
    let b = n[A];
    if (d && A === "value" && b == null) {
      t.value = t.__value = "", c[A] = b;
      continue;
    }
    if (A === "class") {
      var v = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      Ku(t, v, b, r, e == null ? void 0 : e[ta], n[ta]), c[A] = b, c[ta] = n[ta];
      continue;
    }
    if (A === "style") {
      en(t, b, e == null ? void 0 : e[na], n[na]), c[A] = b, c[na] = n[na];
      continue;
    }
    var p = c[A];
    if (!(b === p && !(b === void 0 && t.hasAttribute(A)))) {
      c[A] = b;
      var g = A[0] + A[1];
      if (g !== "$$")
        if (g === "on") {
          const _ = {}, C = "$$" + A;
          let T = A.slice(2);
          var y = Af(T);
          if (_f(T) && (T = T.slice(0, -7), _.capture = !0), !y && p) {
            if (b != null) continue;
            t.removeEventListener(T, c[C], _), c[C] = null;
          }
          if (b != null)
            if (y)
              t[`__${T}`] = b, li([T]);
            else {
              let S = function(w) {
                c[A].call(this, w);
              };
              c[C] = Ts(T, t, S, _);
            }
          else y && (t[`__${T}`] = void 0);
        } else if (A === "style")
          va(t, A, b);
        else if (A === "autofocus")
          rf(
            /** @type {HTMLElement} */
            t,
            !!b
          );
        else if (!u && (A === "__value" || A === "value" && b != null))
          t.value = t.__value = b;
        else if (A === "selected" && d)
          Bf(
            /** @type {HTMLOptionElement} */
            t,
            b
          );
        else {
          var E = A;
          l || (E = Sf(E));
          var x = E === "defaultValue" || E === "defaultChecked";
          if (b == null && !u && !x)
            if (o[A] = null, E === "value" || E === "checked") {
              let _ = (
                /** @type {HTMLInputElement} */
                t
              );
              const C = e === void 0;
              if (E === "value") {
                let T = _.defaultValue;
                _.removeAttribute(E), _.defaultValue = T, _.value = _.__value = C ? T : null;
              } else {
                let T = _.defaultChecked;
                _.removeAttribute(E), _.defaultChecked = T, _.checked = C ? T : !1;
              }
            } else
              t.removeAttribute(A);
          else x || f.includes(E) && (u || typeof b != "string") ? (t[E] = b, E in o && (o[E] = Mt)) : typeof b != "function" && va(t, E, b);
        }
    }
  }
  return c;
}
function Be(t, e, n = [], r = [], i, a = !1, o = !1) {
  Iu(n, r, (u) => {
    var l = void 0, c = {}, d = t.nodeName === "SELECT", h = !1;
    if (Tr(() => {
      var v = e(...u.map(s)), p = kf(
        t,
        l,
        v,
        i,
        a,
        o
      );
      h && d && "value" in v && Jo(
        /** @type {HTMLSelectElement} */
        t,
        v.value
      );
      for (let y of Object.getOwnPropertySymbols(c))
        v[y] || Ft(c[y]);
      for (let y of Object.getOwnPropertySymbols(v)) {
        var g = v[y];
        y.description === gd && (!l || g !== l[y]) && (c[y] && Ft(c[y]), c[y] = Gt(() => Pf(t, () => g))), p[y] = g;
      }
      l = p;
    }), d) {
      var f = (
        /** @type {HTMLSelectElement} */
        t
      );
      Aa(() => {
        Jo(
          f,
          /** @type {Record<string | symbol, any>} */
          l.value,
          !0
        ), Ff(f);
      });
    }
    h = !0;
  });
}
function Ls(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ?? (t.__attributes = {
      [zu]: t.nodeName.includes("-"),
      [Xu]: t.namespaceURI === md
    })
  );
}
var ul = /* @__PURE__ */ new Map();
function Yu(t) {
  var e = t.getAttribute("is") || t.nodeName, n = ul.get(e);
  if (n) return n;
  ul.set(e, n = []);
  for (var r, i = t, a = Element.prototype; a !== i; ) {
    r = ou(i);
    for (var o in r)
      r[o].set && n.push(o);
    i = ps(i);
  }
  return n;
}
function ma(t, e, n = e) {
  var r = /* @__PURE__ */ new WeakSet();
  of(t, "input", async (i) => {
    var a = i ? t.defaultValue : t.value;
    if (a = Lo(t) ? wo(a) : a, n(a), nt !== null && r.add(nt), await vo(), a !== (a = e())) {
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
  Lr(e) == null && t.value && (n(Lo(t) ? wo(t.value) : t.value), nt !== null && r.add(nt)), co(() => {
    var i = e();
    if (t === document.activeElement) {
      var a = (
        /** @type {Batch} */
        Ba ?? nt
      );
      if (r.has(a))
        return;
    }
    Lo(t) && i === wo(t.value) || t.type === "date" && !i && !t.value || i !== t.value && (t.value = i ?? "");
  });
}
function Lo(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function wo(t) {
  return t === "" ? null : +t;
}
function cl(t, e) {
  return t === e || (t == null ? void 0 : t[qn]) === e;
}
function Te(t = {}, e, n, r) {
  return Aa(() => {
    var i, a;
    return co(() => {
      i = a, a = [], Lr(() => {
        t !== n(...a) && (e(t, ...a), i && cl(n(...i), t) && e(null, ...i));
      });
    }), () => {
      Cr(() => {
        a && cl(n(...a), t) && e(null, ...a);
      });
    };
  }), t;
}
function ws(t, e, n) {
  if (t == null)
    return e(void 0), n && n(void 0), pe;
  const r = Lr(
    () => t.subscribe(
      e,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const vi = [];
function Vf(t, e) {
  return {
    subscribe: Ct(t, e).subscribe
  };
}
function Ct(t, e = pe) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function i(u) {
    if (Es(t, u) && (t = u, n)) {
      const l = !vi.length;
      for (const c of r)
        c[1](), vi.push(c, t);
      if (l) {
        for (let c = 0; c < vi.length; c += 2)
          vi[c][0](vi[c + 1]);
        vi.length = 0;
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
function Ki(t, e, n) {
  const r = !Array.isArray(t), i = r ? [t] : t;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = e.length < 2;
  return Vf(n, (o, u) => {
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
      (p, g) => ws(
        p,
        (y) => {
          c[g] = y, d &= ~(1 << g), l && f();
        },
        () => {
          d |= 1 << g;
        }
      )
    );
    return l = !0, f(), function() {
      su(v), h(), l = !1;
    };
  });
}
function Zu(t) {
  let e;
  return ws(t, (n) => e = n)(), e;
}
let Ra = !1, $o = Symbol();
function Dt(t, e, n) {
  const r = n[e] ?? (n[e] = {
    store: null,
    source: /* @__PURE__ */ Eu(void 0),
    unsubscribe: pe
  });
  if (r.store !== t && !($o in n))
    if (r.unsubscribe(), r.store = t ?? null, t == null)
      r.source.v = void 0, r.unsubscribe = pe;
    else {
      var i = !0;
      r.unsubscribe = ws(t, (a) => {
        i ? r.source.v = a : ie(r.source, a);
      }), i = !1;
    }
  return t && $o in n ? Zu(t) : s(r.source);
}
function vn(t, e) {
  return t.set(e), e;
}
function xn() {
  const t = {};
  function e() {
    uo(() => {
      for (var n in t)
        t[n].unsubscribe();
      Ka(t, $o, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [t, e];
}
function Gf(t) {
  var e = Ra;
  try {
    return Ra = !1, [t(), Ra];
  } finally {
    Ra = e;
  }
}
const jf = {
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
    jf
  );
}
const qf = {
  get(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (ea(r) && (r = r()), typeof r == "object" && r !== null && e in r) return r[e];
    }
  },
  set(t, e, n) {
    let r = t.props.length;
    for (; r--; ) {
      let i = t.props[r];
      ea(i) && (i = i());
      const a = yr(i, e);
      if (a && a.set)
        return a.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (ea(r) && (r = r()), typeof r == "object" && r !== null && e in r) {
        const i = yr(r, e);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(t, e) {
    if (e === qn || e === uu) return !1;
    for (let n of t.props)
      if (ea(n) && (n = n()), n != null && e in n) return !0;
    return !1;
  },
  ownKeys(t) {
    const e = [];
    for (let n of t.props)
      if (ea(n) && (n = n()), !!n) {
        for (const r in n)
          e.includes(r) || e.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          e.includes(r) || e.push(r);
      }
    return e;
  }
};
function rt(...t) {
  return new Proxy({ props: t }, qf);
}
function m(t, e, n, r) {
  var A;
  var i = !Wi || (n & 2) !== 0, a = (n & 8) !== 0, o = (n & 16) !== 0, u = (
    /** @type {V} */
    r
  ), l = !0, c = () => (l && (l = !1, u = o ? Lr(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), u), d;
  if (a) {
    var h = qn in t || uu in t;
    d = ((A = yr(t, e)) == null ? void 0 : A.set) ?? (h && e in t ? (b) => t[e] = b : void 0);
  }
  var f, v = !1;
  a ? [f, v] = Gf(() => (
    /** @type {V} */
    t[e]
  )) : f = /** @type {V} */
  t[e], f === void 0 && r !== void 0 && (f = c(), d && (i && wd(), d(f)));
  var p;
  if (i ? p = () => {
    var b = (
      /** @type {V} */
      t[e]
    );
    return b === void 0 ? c() : (l = !0, b);
  } : p = () => {
    var b = (
      /** @type {V} */
      t[e]
    );
    return b !== void 0 && (u = /** @type {V} */
    void 0), b === void 0 ? u : b;
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
  var y = !1, E = (n & 1 ? so : As)(() => (y = !1, p()));
  a && s(E);
  var x = (
    /** @type {Effect} */
    je
  );
  return (
    /** @type {() => V} */
    function(b, _) {
      if (arguments.length > 0) {
        const C = _ ? s(E) : i && a ? Ee(b) : b;
        return ie(E, C), y = !0, u !== void 0 && (u = C), b;
      }
      return si && y || x.f & ai ? E.v : s(E);
    }
  );
}
const Wf = "5";
var iu;
typeof window < "u" && ((iu = window.__svelte ?? (window.__svelte = {})).v ?? (iu.v = /* @__PURE__ */ new Set())).add(Wf);
function Kf(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var zf = function(e) {
  return Xf(e) && !Yf(e);
};
function Xf(t) {
  return !!t && typeof t == "object";
}
function Yf(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || Jf(t);
}
var Zf = typeof Symbol == "function" && Symbol.for, Qf = Zf ? Symbol.for("react.element") : 60103;
function Jf(t) {
  return t.$$typeof === Qf;
}
function $f(t) {
  return Array.isArray(t) ? [] : {};
}
function pa(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? Ui($f(t), t, e) : t;
}
function eh(t, e, n) {
  return t.concat(e).map(function(r) {
    return pa(r, n);
  });
}
function th(t, e) {
  if (!e.customMerge)
    return Ui;
  var n = e.customMerge(t);
  return typeof n == "function" ? n : Ui;
}
function nh(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function dl(t) {
  return Object.keys(t).concat(nh(t));
}
function Qu(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function rh(t, e) {
  return Qu(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function ih(t, e, n) {
  var r = {};
  return n.isMergeableObject(t) && dl(t).forEach(function(i) {
    r[i] = pa(t[i], n);
  }), dl(e).forEach(function(i) {
    rh(t, i) || (Qu(t, i) && n.isMergeableObject(e[i]) ? r[i] = th(i, n)(t[i], e[i], n) : r[i] = pa(e[i], n));
  }), r;
}
function Ui(t, e, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || eh, n.isMergeableObject = n.isMergeableObject || zf, n.cloneUnlessOtherwiseSpecified = pa;
  var r = Array.isArray(e), i = Array.isArray(t), a = r === i;
  return a ? r ? n.arrayMerge(t, e, n) : ih(t, e, n) : pa(e, n);
}
Ui.all = function(e, n) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(r, i) {
    return Ui(r, i, n);
  }, {});
};
var ah = Ui, oh = ah;
const sh = /* @__PURE__ */ Kf(oh);
var es = function(t, e) {
  return es = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, es(t, e);
};
function it(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  es(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
var de = function() {
  return de = Object.assign || function(e) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, de.apply(this, arguments);
};
function lh(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  return n;
}
function Ju(t, e, n, r) {
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
function Os(t, e) {
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
function wt(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, n = e && t[e], r = 0;
  if (n) return n.call(t);
  if (t && typeof t.length == "number") return {
    next: function() {
      return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Fi(t, e) {
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
function Ar(t, e, n) {
  if (n || arguments.length === 2) for (var r = 0, i = e.length, a; r < i; r++)
    (a || !(r in e)) && (a || (a = Array.prototype.slice.call(e, 0, r)), a[r] = e[r]);
  return t.concat(a || Array.prototype.slice.call(e));
}
function Ci(t) {
  return this instanceof Ci ? (this.v = t, this) : new Ci(t);
}
function uh(t, e, n) {
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
    r[v] && (i[v] = function(g) {
      return new Promise(function(y, E) {
        a.push([v, g, y, E]) > 1 || l(v, g);
      });
    }, p && (i[v] = p(i[v])));
  }
  function l(v, p) {
    try {
      c(r[v](p));
    } catch (g) {
      f(a[0][3], g);
    }
  }
  function c(v) {
    v.value instanceof Ci ? Promise.resolve(v.value.v).then(d, h) : f(a[0][2], v);
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
function ch(t) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], n;
  return e ? e.call(t) : (t = typeof wt == "function" ? wt(t) : t[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
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
function Oo(t, e) {
  var n = e && e.cache ? e.cache : gh, r = e && e.serializer ? e.serializer : mh, i = e && e.strategy ? e.strategy : hh;
  return i(t, {
    cache: n,
    serializer: r
  });
}
function dh(t) {
  return t == null || typeof t == "number" || typeof t == "boolean";
}
function fh(t, e, n, r) {
  var i = dh(r) ? r : n(r), a = e.get(i);
  return typeof a > "u" && (a = t.call(this, r), e.set(i, a)), a;
}
function $u(t, e, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = e.get(i);
  return typeof a > "u" && (a = t.apply(this, r), e.set(i, a)), a;
}
function ec(t, e, n, r, i) {
  return n.bind(e, t, r, i);
}
function hh(t, e) {
  var n = t.length === 1 ? fh : $u;
  return ec(t, this, n, e.cache.create(), e.serializer);
}
function vh(t, e) {
  return ec(t, this, $u, e.cache.create(), e.serializer);
}
var mh = function() {
  return JSON.stringify(arguments);
}, ph = (
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
), gh = {
  create: function() {
    return new ph();
  }
}, Ro = {
  variadic: vh
}, Ye;
(function(t) {
  t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", t[t.INVALID_TAG = 23] = "INVALID_TAG", t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(Ye || (Ye = {}));
var vt;
(function(t) {
  t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag";
})(vt || (vt = {}));
var Bi;
(function(t) {
  t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime";
})(Bi || (Bi = {}));
function fl(t) {
  return t.type === vt.literal;
}
function bh(t) {
  return t.type === vt.argument;
}
function tc(t) {
  return t.type === vt.number;
}
function nc(t) {
  return t.type === vt.date;
}
function rc(t) {
  return t.type === vt.time;
}
function ic(t) {
  return t.type === vt.select;
}
function ac(t) {
  return t.type === vt.plural;
}
function Ih(t) {
  return t.type === vt.pound;
}
function oc(t) {
  return t.type === vt.tag;
}
function sc(t) {
  return !!(t && typeof t == "object" && t.type === Bi.number);
}
function ts(t) {
  return !!(t && typeof t == "object" && t.type === Bi.dateTime);
}
var lc = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, yh = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function _h(t) {
  var e = {};
  return t.replace(yh, function(n) {
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
var Eh = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Ah(t) {
  if (t.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var e = t.split(Eh).filter(function(f) {
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
function Ch(t) {
  return t.replace(/^(.*?)-/, "");
}
var hl = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, uc = /^(@+)?(\+|#+)?[rs]?$/g, Sh = /(\*)(0+)|(#+)(0+)|(0+)/g, cc = /^(0+)$/;
function vl(t) {
  var e = {};
  return t[t.length - 1] === "r" ? e.roundingPriority = "morePrecision" : t[t.length - 1] === "s" && (e.roundingPriority = "lessPrecision"), t.replace(uc, function(n, r, i) {
    return typeof i != "string" ? (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length) : i === "+" ? e.minimumSignificantDigits = r.length : r[0] === "#" ? e.maximumSignificantDigits = r.length : (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), e;
}
function dc(t) {
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
function xh(t) {
  var e;
  if (t[0] === "E" && t[1] === "E" ? (e = {
    notation: "engineering"
  }, t = t.slice(2)) : t[0] === "E" && (e = {
    notation: "scientific"
  }, t = t.slice(1)), e) {
    var n = t.slice(0, 2);
    if (n === "+!" ? (e.signDisplay = "always", t = t.slice(2)) : n === "+?" && (e.signDisplay = "exceptZero", t = t.slice(2)), !cc.test(t))
      throw new Error("Malformed concise eng/scientific notation");
    e.minimumIntegerDigits = t.length;
  }
  return e;
}
function ml(t) {
  var e = {}, n = dc(t);
  return n || e;
}
function Th(t) {
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
        e.style = "unit", e.unit = Ch(i.options[0]);
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
        e = de(de(de({}, e), { notation: "scientific" }), i.options.reduce(function(l, c) {
          return de(de({}, l), ml(c));
        }, {}));
        continue;
      case "engineering":
        e = de(de(de({}, e), { notation: "engineering" }), i.options.reduce(function(l, c) {
          return de(de({}, l), ml(c));
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
        i.options[0].replace(Sh, function(l, c, d, h, f, v) {
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
    if (cc.test(i.stem)) {
      e.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (hl.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(hl, function(l, c, d, h, f, v) {
        return d === "*" ? e.minimumFractionDigits = c.length : h && h[0] === "#" ? e.maximumFractionDigits = h.length : f && v ? (e.minimumFractionDigits = f.length, e.maximumFractionDigits = f.length + v.length) : (e.minimumFractionDigits = c.length, e.maximumFractionDigits = c.length), "";
      });
      var a = i.options[0];
      a === "w" ? e = de(de({}, e), { trailingZeroDisplay: "stripIfInteger" }) : a && (e = de(de({}, e), vl(a)));
      continue;
    }
    if (uc.test(i.stem)) {
      e = de(de({}, e), vl(i.stem));
      continue;
    }
    var o = dc(i.stem);
    o && (e = de(de({}, e), o));
    var u = xh(i.stem);
    u && (e = de(de({}, e), u));
  }
  return e;
}
var Ma = {
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
function Lh(t, e) {
  for (var n = "", r = 0; r < t.length; r++) {
    var i = t.charAt(r);
    if (i === "j") {
      for (var a = 0; r + 1 < t.length && t.charAt(r + 1) === i; )
        a++, r++;
      var o = 1 + (a & 1), u = a < 2 ? 1 : 3 + (a >> 1), l = "a", c = wh(e);
      for ((c == "H" || c == "k") && (u = 0); u-- > 0; )
        n += l;
      for (; o-- > 0; )
        n = c + n;
    } else i === "J" ? n += "H" : n += i;
  }
  return n;
}
function wh(t) {
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
  var i = Ma[r || ""] || Ma[n || ""] || Ma["".concat(n, "-001")] || Ma["001"];
  return i[0];
}
var Mo, Oh = new RegExp("^".concat(lc.source, "*")), Rh = new RegExp("".concat(lc.source, "*$"));
function Qe(t, e) {
  return { start: t, end: e };
}
var Mh = !!String.prototype.startsWith && "_a".startsWith("a", 1), Dh = !!String.fromCodePoint, Ph = !!Object.fromEntries, Nh = !!String.prototype.codePointAt, Hh = !!String.prototype.trimStart, Uh = !!String.prototype.trimEnd, Fh = !!Number.isSafeInteger, Bh = Fh ? Number.isSafeInteger : function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991;
}, ns = !0;
try {
  var kh = hc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  ns = ((Mo = kh.exec("a")) === null || Mo === void 0 ? void 0 : Mo[0]) === "a";
} catch {
  ns = !1;
}
var pl = Mh ? (
  // Native
  function(e, n, r) {
    return e.startsWith(n, r);
  }
) : (
  // For IE11
  function(e, n, r) {
    return e.slice(r, r + n.length) === n;
  }
), rs = Dh ? String.fromCodePoint : (
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
), gl = (
  // native
  Ph ? Object.fromEntries : (
    // Ponyfill
    function(e) {
      for (var n = {}, r = 0, i = e; r < i.length; r++) {
        var a = i[r], o = a[0], u = a[1];
        n[o] = u;
      }
      return n;
    }
  )
), fc = Nh ? (
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
), Vh = Hh ? (
  // Native
  function(e) {
    return e.trimStart();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(Oh, "");
  }
), Gh = Uh ? (
  // Native
  function(e) {
    return e.trimEnd();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(Rh, "");
  }
);
function hc(t, e) {
  return new RegExp(t, e);
}
var is;
if (ns) {
  var bl = hc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  is = function(e, n) {
    var r;
    bl.lastIndex = n;
    var i = bl.exec(e);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  is = function(e, n) {
    for (var r = []; ; ) {
      var i = fc(e, n);
      if (i === void 0 || vc(i) || Kh(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return rs.apply(void 0, r);
  };
var jh = (
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
              location: Qe(u, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(Ye.UNMATCHED_CLOSING_TAG, Qe(this.clonePosition(), this.clonePosition()));
          } else if (a === 60 && !this.ignoreTag && as(this.peek() || 0)) {
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
          if (this.isEOF() || !as(this.char()))
            return this.error(Ye.INVALID_TAG, Qe(u, this.clonePosition()));
          var l = this.clonePosition(), c = this.parseTagName();
          return i !== c ? this.error(Ye.UNMATCHED_CLOSING_TAG, Qe(l, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: vt.tag,
              value: i,
              children: o,
              location: Qe(r, this.clonePosition())
            },
            err: null
          } : this.error(Ye.INVALID_TAG, Qe(u, this.clonePosition())));
        } else
          return this.error(Ye.UNCLOSED_TAG, Qe(r, this.clonePosition()));
      } else
        return this.error(Ye.INVALID_TAG, Qe(r, this.clonePosition()));
    }, t.prototype.parseTagName = function() {
      var e = this.offset();
      for (this.bump(); !this.isEOF() && Wh(this.char()); )
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
        val: { type: vt.literal, value: i, location: l },
        err: null
      };
    }, t.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !qh(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      return rs.apply(void 0, n);
    }, t.prototype.tryParseUnquoted = function(e, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && e > 0 ? null : (this.bump(), rs(r));
    }, t.prototype.parseArgument = function(e, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(Ye.EXPECT_ARGUMENT_CLOSING_BRACE, Qe(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(Ye.EMPTY_ARGUMENT, Qe(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(Ye.MALFORMED_ARGUMENT, Qe(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(Ye.EXPECT_ARGUMENT_CLOSING_BRACE, Qe(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: vt.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: Qe(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Ye.EXPECT_ARGUMENT_CLOSING_BRACE, Qe(r, this.clonePosition())) : this.parseArgumentOptions(e, n, i, r);
        default:
          return this.error(Ye.MALFORMED_ARGUMENT, Qe(r, this.clonePosition()));
      }
    }, t.prototype.parseIdentifierIfPossible = function() {
      var e = this.clonePosition(), n = this.offset(), r = is(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var a = this.clonePosition(), o = Qe(e, a);
      return { value: r, location: o };
    }, t.prototype.parseArgumentOptions = function(e, n, r, i) {
      var a, o = this.clonePosition(), u = this.parseIdentifierIfPossible().value, l = this.clonePosition();
      switch (u) {
        case "":
          return this.error(Ye.EXPECT_ARGUMENT_TYPE, Qe(o, l));
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
            var f = Gh(h.val);
            if (f.length === 0)
              return this.error(Ye.EXPECT_ARGUMENT_STYLE, Qe(this.clonePosition(), this.clonePosition()));
            var v = Qe(d, this.clonePosition());
            c = { style: f, styleLocation: v };
          }
          var p = this.tryParseArgumentClose(i);
          if (p.err)
            return p;
          var g = Qe(i, this.clonePosition());
          if (c && pl(c == null ? void 0 : c.style, "::", 0)) {
            var y = Vh(c.style.slice(2));
            if (u === "number") {
              var h = this.parseNumberSkeletonFromString(y, c.styleLocation);
              return h.err ? h : {
                val: { type: vt.number, value: r, location: g, style: h.val },
                err: null
              };
            } else {
              if (y.length === 0)
                return this.error(Ye.EXPECT_DATE_TIME_SKELETON, g);
              var E = y;
              this.locale && (E = Lh(y, this.locale));
              var f = {
                type: Bi.dateTime,
                pattern: E,
                location: c.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? _h(E) : {}
              }, x = u === "date" ? vt.date : vt.time;
              return {
                val: { type: x, value: r, location: g, style: f },
                err: null
              };
            }
          }
          return {
            val: {
              type: u === "number" ? vt.number : u === "date" ? vt.date : vt.time,
              value: r,
              location: g,
              style: (a = c == null ? void 0 : c.style) !== null && a !== void 0 ? a : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var A = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(Ye.EXPECT_SELECT_ARGUMENT_OPTIONS, Qe(A, de({}, A)));
          this.bumpSpace();
          var b = this.parseIdentifierIfPossible(), _ = 0;
          if (u !== "select" && b.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(Ye.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Qe(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var h = this.tryParseDecimalInteger(Ye.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Ye.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (h.err)
              return h;
            this.bumpSpace(), b = this.parseIdentifierIfPossible(), _ = h.val;
          }
          var C = this.tryParsePluralOrSelectOptions(e, u, n, b);
          if (C.err)
            return C;
          var p = this.tryParseArgumentClose(i);
          if (p.err)
            return p;
          var T = Qe(i, this.clonePosition());
          return u === "select" ? {
            val: {
              type: vt.select,
              value: r,
              options: gl(C.val),
              location: T
            },
            err: null
          } : {
            val: {
              type: vt.plural,
              value: r,
              options: gl(C.val),
              offset: _,
              pluralType: u === "plural" ? "cardinal" : "ordinal",
              location: T
            },
            err: null
          };
        }
        default:
          return this.error(Ye.INVALID_ARGUMENT_TYPE, Qe(o, l));
      }
    }, t.prototype.tryParseArgumentClose = function(e) {
      return this.isEOF() || this.char() !== 125 ? this.error(Ye.EXPECT_ARGUMENT_CLOSING_BRACE, Qe(e, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, t.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var e = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(Ye.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Qe(i, this.clonePosition()));
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
        r = Ah(e);
      } catch {
        return this.error(Ye.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: Bi.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? Th(r) : {}
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
            d = Qe(h, this.clonePosition()), c = this.message.slice(h.offset, this.offset());
          } else
            break;
        }
        if (l.has(c))
          return this.error(n === "select" ? Ye.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Ye.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, d);
        c === "other" && (o = !0), this.bumpSpace();
        var v = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? Ye.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Ye.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Qe(this.clonePosition(), this.clonePosition()));
        var p = this.parseMessage(e + 1, n, r);
        if (p.err)
          return p;
        var g = this.tryParseArgumentClose(v);
        if (g.err)
          return g;
        u.push([
          c,
          {
            value: p.val,
            location: Qe(v, this.clonePosition())
          }
        ]), l.add(c), this.bumpSpace(), a = this.parseIdentifierIfPossible(), c = a.value, d = a.location;
      }
      return u.length === 0 ? this.error(n === "select" ? Ye.EXPECT_SELECT_ARGUMENT_SELECTOR : Ye.EXPECT_PLURAL_ARGUMENT_SELECTOR, Qe(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(Ye.MISSING_OTHER_CLAUSE, Qe(this.clonePosition(), this.clonePosition())) : { val: u, err: null };
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
      return a ? (o *= r, Bh(o) ? { val: o, err: null } : this.error(n, l)) : this.error(e, l);
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
      var n = fc(this.message, e);
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
      if (pl(this.message, e, this.offset())) {
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
      for (; !this.isEOF() && vc(this.char()); )
        this.bump();
    }, t.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var e = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (e >= 65536 ? 2 : 1));
      return r ?? null;
    }, t;
  }()
);
function as(t) {
  return t >= 97 && t <= 122 || t >= 65 && t <= 90;
}
function qh(t) {
  return as(t) || t === 47;
}
function Wh(t) {
  return t === 45 || t === 46 || t >= 48 && t <= 57 || t === 95 || t >= 97 && t <= 122 || t >= 65 && t <= 90 || t == 183 || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039;
}
function vc(t) {
  return t >= 9 && t <= 13 || t === 32 || t === 133 || t >= 8206 && t <= 8207 || t === 8232 || t === 8233;
}
function Kh(t) {
  return t >= 33 && t <= 35 || t === 36 || t >= 37 && t <= 39 || t === 40 || t === 41 || t === 42 || t === 43 || t === 44 || t === 45 || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || t === 91 || t === 92 || t === 93 || t === 94 || t === 96 || t === 123 || t === 124 || t === 125 || t === 126 || t === 161 || t >= 162 && t <= 165 || t === 166 || t === 167 || t === 169 || t === 171 || t === 172 || t === 174 || t === 176 || t === 177 || t === 182 || t === 187 || t === 191 || t === 215 || t === 247 || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || t === 8216 || t === 8217 || t === 8218 || t >= 8219 && t <= 8220 || t === 8221 || t === 8222 || t === 8223 || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || t === 8249 || t === 8250 || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || t === 8260 || t === 8261 || t === 8262 || t >= 8263 && t <= 8273 || t === 8274 || t === 8275 || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || t === 8608 || t >= 8609 && t <= 8610 || t === 8611 || t >= 8612 && t <= 8613 || t === 8614 || t >= 8615 && t <= 8621 || t === 8622 || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || t === 8658 || t === 8659 || t === 8660 || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || t === 8968 || t === 8969 || t === 8970 || t === 8971 || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9e3 || t === 9001 || t === 9002 || t >= 9003 && t <= 9083 || t === 9084 || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || t === 9655 || t >= 9656 && t <= 9664 || t === 9665 || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || t === 9839 || t >= 9840 && t <= 10087 || t === 10088 || t === 10089 || t === 10090 || t === 10091 || t === 10092 || t === 10093 || t === 10094 || t === 10095 || t === 10096 || t === 10097 || t === 10098 || t === 10099 || t === 10100 || t === 10101 || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || t === 10181 || t === 10182 || t >= 10183 && t <= 10213 || t === 10214 || t === 10215 || t === 10216 || t === 10217 || t === 10218 || t === 10219 || t === 10220 || t === 10221 || t === 10222 || t === 10223 || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || t === 10627 || t === 10628 || t === 10629 || t === 10630 || t === 10631 || t === 10632 || t === 10633 || t === 10634 || t === 10635 || t === 10636 || t === 10637 || t === 10638 || t === 10639 || t === 10640 || t === 10641 || t === 10642 || t === 10643 || t === 10644 || t === 10645 || t === 10646 || t === 10647 || t === 10648 || t >= 10649 && t <= 10711 || t === 10712 || t === 10713 || t === 10714 || t === 10715 || t >= 10716 && t <= 10747 || t === 10748 || t === 10749 || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || t === 11158 || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || t === 11778 || t === 11779 || t === 11780 || t === 11781 || t >= 11782 && t <= 11784 || t === 11785 || t === 11786 || t === 11787 || t === 11788 || t === 11789 || t >= 11790 && t <= 11798 || t === 11799 || t >= 11800 && t <= 11801 || t === 11802 || t === 11803 || t === 11804 || t === 11805 || t >= 11806 && t <= 11807 || t === 11808 || t === 11809 || t === 11810 || t === 11811 || t === 11812 || t === 11813 || t === 11814 || t === 11815 || t === 11816 || t === 11817 || t >= 11818 && t <= 11822 || t === 11823 || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || t === 11840 || t === 11841 || t === 11842 || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || t === 11858 || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || t === 12296 || t === 12297 || t === 12298 || t === 12299 || t === 12300 || t === 12301 || t === 12302 || t === 12303 || t === 12304 || t === 12305 || t >= 12306 && t <= 12307 || t === 12308 || t === 12309 || t === 12310 || t === 12311 || t === 12312 || t === 12313 || t === 12314 || t === 12315 || t === 12316 || t === 12317 || t >= 12318 && t <= 12319 || t === 12320 || t === 12336 || t === 64830 || t === 64831 || t >= 65093 && t <= 65094;
}
function os(t) {
  t.forEach(function(e) {
    if (delete e.location, ic(e) || ac(e))
      for (var n in e.options)
        delete e.options[n].location, os(e.options[n].value);
    else tc(e) && sc(e.style) || (nc(e) || rc(e)) && ts(e.style) ? delete e.style.location : oc(e) && os(e.children);
  });
}
function zh(t, e) {
  e === void 0 && (e = {}), e = de({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e);
  var n = new jh(t, e).parse();
  if (n.err) {
    var r = SyntaxError(Ye[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return e != null && e.captureLocation || os(n.val), n.val;
}
var ki;
(function(t) {
  t.MISSING_VALUE = "MISSING_VALUE", t.INVALID_VALUE = "INVALID_VALUE", t.MISSING_INTL_API = "MISSING_INTL_API";
})(ki || (ki = {}));
var mo = (
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
), Il = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n, r, i, a) {
      return t.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), ki.INVALID_VALUE, a) || this;
    }
    return e;
  }(mo)
), Xh = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n, r, i) {
      return t.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), ki.INVALID_VALUE, i) || this;
    }
    return e;
  }(mo)
), Yh = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n, r) {
      return t.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), ki.MISSING_VALUE, r) || this;
    }
    return e;
  }(mo)
), Xt;
(function(t) {
  t[t.literal = 0] = "literal", t[t.object = 1] = "object";
})(Xt || (Xt = {}));
function Zh(t) {
  return t.length < 2 ? t : t.reduce(function(e, n) {
    var r = e[e.length - 1];
    return !r || r.type !== Xt.literal || n.type !== Xt.literal ? e.push(n) : r.value += n.value, e;
  }, []);
}
function Qh(t) {
  return typeof t == "function";
}
function qa(t, e, n, r, i, a, o) {
  if (t.length === 1 && fl(t[0]))
    return [
      {
        type: Xt.literal,
        value: t[0].value
      }
    ];
  for (var u = [], l = 0, c = t; l < c.length; l++) {
    var d = c[l];
    if (fl(d)) {
      u.push({
        type: Xt.literal,
        value: d.value
      });
      continue;
    }
    if (Ih(d)) {
      typeof a == "number" && u.push({
        type: Xt.literal,
        value: n.getNumberFormat(e).format(a)
      });
      continue;
    }
    var h = d.value;
    if (!(i && h in i))
      throw new Yh(h, o);
    var f = i[h];
    if (bh(d)) {
      (!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), u.push({
        type: typeof f == "string" ? Xt.literal : Xt.object,
        value: f
      });
      continue;
    }
    if (nc(d)) {
      var v = typeof d.style == "string" ? r.date[d.style] : ts(d.style) ? d.style.parsedOptions : void 0;
      u.push({
        type: Xt.literal,
        value: n.getDateTimeFormat(e, v).format(f)
      });
      continue;
    }
    if (rc(d)) {
      var v = typeof d.style == "string" ? r.time[d.style] : ts(d.style) ? d.style.parsedOptions : r.time.medium;
      u.push({
        type: Xt.literal,
        value: n.getDateTimeFormat(e, v).format(f)
      });
      continue;
    }
    if (tc(d)) {
      var v = typeof d.style == "string" ? r.number[d.style] : sc(d.style) ? d.style.parsedOptions : void 0;
      v && v.scale && (f = f * (v.scale || 1)), u.push({
        type: Xt.literal,
        value: n.getNumberFormat(e, v).format(f)
      });
      continue;
    }
    if (oc(d)) {
      var p = d.children, g = d.value, y = i[g];
      if (!Qh(y))
        throw new Xh(g, "function", o);
      var E = qa(p, e, n, r, i, a), x = y(E.map(function(_) {
        return _.value;
      }));
      Array.isArray(x) || (x = [x]), u.push.apply(u, x.map(function(_) {
        return {
          type: typeof _ == "string" ? Xt.literal : Xt.object,
          value: _
        };
      }));
    }
    if (ic(d)) {
      var A = d.options[f] || d.options.other;
      if (!A)
        throw new Il(d.value, f, Object.keys(d.options), o);
      u.push.apply(u, qa(A.value, e, n, r, i));
      continue;
    }
    if (ac(d)) {
      var A = d.options["=".concat(f)];
      if (!A) {
        if (!Intl.PluralRules)
          throw new mo(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, ki.MISSING_INTL_API, o);
        var b = n.getPluralRules(e, { type: d.pluralType }).select(f - (d.offset || 0));
        A = d.options[b] || d.options.other;
      }
      if (!A)
        throw new Il(d.value, f, Object.keys(d.options), o);
      u.push.apply(u, qa(A.value, e, n, r, i, f - (d.offset || 0)));
      continue;
    }
  }
  return Zh(u);
}
function Jh(t, e) {
  return e ? de(de(de({}, t || {}), e || {}), Object.keys(t).reduce(function(n, r) {
    return n[r] = de(de({}, t[r]), e[r] || {}), n;
  }, {})) : t;
}
function $h(t, e) {
  return e ? Object.keys(t).reduce(function(n, r) {
    return n[r] = Jh(t[r], e[r]), n;
  }, de({}, t)) : t;
}
function Do(t) {
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
function ev(t) {
  return t === void 0 && (t = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: Oo(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.NumberFormat).bind.apply(e, Ar([void 0], n, !1)))();
    }, {
      cache: Do(t.number),
      strategy: Ro.variadic
    }),
    getDateTimeFormat: Oo(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.DateTimeFormat).bind.apply(e, Ar([void 0], n, !1)))();
    }, {
      cache: Do(t.dateTime),
      strategy: Ro.variadic
    }),
    getPluralRules: Oo(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.PluralRules).bind.apply(e, Ar([void 0], n, !1)))();
    }, {
      cache: Do(t.pluralRules),
      strategy: Ro.variadic
    })
  };
}
var mc = (
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
          return !h.length || f.type !== Xt.literal || typeof h[h.length - 1] != "string" ? h.push(f.value) : h[h.length - 1] += f.value, h;
        }, []);
        return d.length <= 1 ? d[0] || "" : d;
      }, this.formatToParts = function(l) {
        return qa(a.ast, a.locales, a.formatters, a.formats, l, void 0, a.message);
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
        var u = lh(o, ["formatters"]);
        this.ast = t.__parse(e, de(de({}, u), { locale: this.resolvedLocale }));
      } else
        this.ast = e;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = $h(t.formats, r), this.formatters = i && i.formatters || ev(this.formatterCache);
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
    }, t.__parse = zh, t.formats = {
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
function tv(t, e) {
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
const Ir = {}, nv = (t, e, n) => n && (e in Ir || (Ir[e] = {}), t in Ir[e] || (Ir[e][t] = n), n), pc = (t, e) => {
  if (e == null)
    return;
  if (e in Ir && t in Ir[e])
    return Ir[e][t];
  const n = Sa(e);
  for (let r = 0; r < n.length; r++) {
    const i = n[r], a = iv(i, t);
    if (a)
      return nv(t, e, a);
  }
};
let Rs;
const Ca = Ct({});
function rv(t) {
  return Rs[t] || null;
}
function gc(t) {
  return t in Rs;
}
function iv(t, e) {
  if (!gc(t))
    return null;
  const n = rv(t);
  return tv(n, e);
}
function av(t) {
  if (t == null)
    return;
  const e = Sa(t);
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (gc(r))
      return r;
  }
}
function bc(t, ...e) {
  delete Ir[t], Ca.update((n) => (n[t] = sh.all([n[t] || {}, ...e]), n));
}
Ki(
  [Ca],
  ([t]) => Object.keys(t)
);
Ca.subscribe((t) => Rs = t);
const Wa = {};
function ov(t, e) {
  Wa[t].delete(e), Wa[t].size === 0 && delete Wa[t];
}
function Ic(t) {
  return Wa[t];
}
function sv(t) {
  return Sa(t).map((e) => {
    const n = Ic(e);
    return [e, n ? [...n] : []];
  }).filter(([, e]) => e.length > 0);
}
function Ya(t) {
  return t == null ? !1 : Sa(t).some(
    (e) => {
      var n;
      return (n = Ic(e)) == null ? void 0 : n.size;
    }
  );
}
function lv(t, e) {
  return Promise.all(
    e.map((r) => (ov(t, r), r().then((i) => i.default || i)))
  ).then((r) => bc(t, ...r));
}
const ra = {};
function yc(t) {
  if (!Ya(t))
    return t in ra ? ra[t] : Promise.resolve();
  const e = sv(t);
  return ra[t] = Promise.all(
    e.map(
      ([n, r]) => lv(n, r)
    )
  ).then(() => {
    if (Ya(t))
      return yc(t);
    delete ra[t];
  }), ra[t];
}
var yl = Object.getOwnPropertySymbols, uv = Object.prototype.hasOwnProperty, cv = Object.prototype.propertyIsEnumerable, dv = (t, e) => {
  var n = {};
  for (var r in t)
    uv.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && yl)
    for (var r of yl(t))
      e.indexOf(r) < 0 && cv.call(t, r) && (n[r] = t[r]);
  return n;
};
const fv = {
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
function hv({ locale: t, id: e }) {
  console.warn(
    `[svelte-i18n] The message "${e}" was not found in "${Sa(
      t
    ).join('", "')}".${Ya(Or()) ? `

Note: there are at least one loader still registered to this locale that wasn't executed.` : ""}`
  );
}
const vv = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: fv,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, sa = vv;
function Vi() {
  return sa;
}
function mv(t) {
  const e = t, { formats: n } = e, r = dv(e, ["formats"]);
  let i = t.fallbackLocale;
  if (t.initialLocale)
    try {
      mc.resolveLocale(t.initialLocale) && (i = t.initialLocale);
    } catch {
      console.warn(
        `[svelte-i18n] The initial locale "${t.initialLocale}" is not a valid locale.`
      );
    }
  return r.warnOnMissingMessages && (delete r.warnOnMissingMessages, r.handleMissingMessage == null ? r.handleMissingMessage = hv : console.warn(
    '[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.'
  )), Object.assign(sa, r, { initialLocale: i }), n && ("number" in n && Object.assign(sa.formats.number, n.number), "date" in n && Object.assign(sa.formats.date, n.date), "time" in n && Object.assign(sa.formats.time, n.time)), ui.set(i);
}
const Po = Ct(!1);
var pv = Object.defineProperty, gv = Object.defineProperties, bv = Object.getOwnPropertyDescriptors, _l = Object.getOwnPropertySymbols, Iv = Object.prototype.hasOwnProperty, yv = Object.prototype.propertyIsEnumerable, El = (t, e, n) => e in t ? pv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, _v = (t, e) => {
  for (var n in e || (e = {}))
    Iv.call(e, n) && El(t, n, e[n]);
  if (_l)
    for (var n of _l(e))
      yv.call(e, n) && El(t, n, e[n]);
  return t;
}, Ev = (t, e) => gv(t, bv(e));
let ss;
const Za = Ct(null);
function Al(t) {
  return t.split("-").map((e, n, r) => r.slice(0, n + 1).join("-")).reverse();
}
function Sa(t, e = Vi().fallbackLocale) {
  const n = Al(t);
  return e ? [.../* @__PURE__ */ new Set([...n, ...Al(e)])] : n;
}
function Or() {
  return ss ?? void 0;
}
Za.subscribe((t) => {
  ss = t ?? void 0, typeof window < "u" && t != null && document.documentElement.setAttribute("lang", t);
});
const Av = (t) => {
  if (t && av(t) && Ya(t)) {
    const { loadingDelay: e } = Vi();
    let n;
    return typeof window < "u" && Or() != null && e ? n = window.setTimeout(
      () => Po.set(!0),
      e
    ) : Po.set(!0), yc(t).then(() => {
      Za.set(t);
    }).finally(() => {
      clearTimeout(n), Po.set(!1);
    });
  }
  return Za.set(t);
}, ui = Ev(_v({}, Za), {
  set: Av
}), Cv = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0], po = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (r) => {
    const i = JSON.stringify(r);
    return i in e ? e[i] : e[i] = t(r);
  };
};
var Sv = Object.defineProperty, Qa = Object.getOwnPropertySymbols, _c = Object.prototype.hasOwnProperty, Ec = Object.prototype.propertyIsEnumerable, Cl = (t, e, n) => e in t ? Sv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Ms = (t, e) => {
  for (var n in e || (e = {}))
    _c.call(e, n) && Cl(t, n, e[n]);
  if (Qa)
    for (var n of Qa(e))
      Ec.call(e, n) && Cl(t, n, e[n]);
  return t;
}, zi = (t, e) => {
  var n = {};
  for (var r in t)
    _c.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && Qa)
    for (var r of Qa(t))
      e.indexOf(r) < 0 && Ec.call(t, r) && (n[r] = t[r]);
  return n;
};
const ga = (t, e) => {
  const { formats: n } = Vi();
  if (t in n && e in n[t])
    return n[t][e];
  throw new Error(`[svelte-i18n] Unknown "${e}" ${t} format.`);
}, xv = po(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = zi(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return r && (i = ga("number", r)), new Intl.NumberFormat(n, i);
  }
), Tv = po(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = zi(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return r ? i = ga("date", r) : Object.keys(i).length === 0 && (i = ga("date", "short")), new Intl.DateTimeFormat(n, i);
  }
), Lv = po(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = zi(e, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return r ? i = ga("time", r) : Object.keys(i).length === 0 && (i = ga("time", "short")), new Intl.DateTimeFormat(n, i);
  }
), wv = (t = {}) => {
  var e = t, {
    locale: n = Or()
  } = e, r = zi(e, [
    "locale"
  ]);
  return xv(Ms({ locale: n }, r));
}, Ov = (t = {}) => {
  var e = t, {
    locale: n = Or()
  } = e, r = zi(e, [
    "locale"
  ]);
  return Tv(Ms({ locale: n }, r));
}, Rv = (t = {}) => {
  var e = t, {
    locale: n = Or()
  } = e, r = zi(e, [
    "locale"
  ]);
  return Lv(Ms({ locale: n }, r));
}, Mv = po(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (t, e = Or()) => new mc(t, e, Vi().formats, {
    ignoreTag: Vi().ignoreTag
  })
), Dv = (t, e = {}) => {
  var n, r, i, a;
  let o = e;
  typeof t == "object" && (o = t, t = o.id);
  const {
    values: u,
    locale: l = Or(),
    default: c
  } = o;
  if (l == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let d = pc(t, l);
  if (!d)
    d = (a = (i = (r = (n = Vi()).handleMissingMessage) == null ? void 0 : r.call(n, { locale: l, id: t, defaultValue: c })) != null ? i : c) != null ? a : t;
  else if (typeof d != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${t}" must be of type "string", found: "${typeof d}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), d;
  if (!u)
    return d;
  let h = d;
  try {
    h = Mv(d, l).format(u);
  } catch (f) {
    f instanceof Error && console.warn(
      `[svelte-i18n] Message "${t}" has syntax error:`,
      f.message
    );
  }
  return h;
}, Pv = (t, e) => Rv(e).format(t), Nv = (t, e) => Ov(e).format(t), Hv = (t, e) => wv(e).format(t), Uv = (t, e = Or()) => pc(t, e), Fv = Ki([ui, Ca], () => Dv);
Ki([ui], () => Pv);
Ki([ui], () => Nv);
Ki([ui], () => Hv);
Ki([ui, Ca], () => Uv);
function Bv(t, e) {
  Object.entries(t).forEach(([a, o]) => {
    bc(a, o);
  });
  const n = localStorage.getItem("language"), r = "en", i = n ?? Cv();
  console.log("Initial: Setting the language to", i), mv({
    fallbackLocale: r,
    initialLocale: i
  }), window.addEventListener("oscd-language-changed", (a) => {
    const o = a;
    if (!o.detail.language) {
      console.error("No translations for language");
      return;
    }
    console.log("Updating the language to", o.detail.language), ui.set(o.detail.language);
  });
}
const kv = "Ort", Vv = "Suche", Gv = "UUID", jv = "Name", qv = "Autor", Wv = "Typ", Kv = "Version", zv = "Geändert am", Xv = "Von", Yv = "Bis", Zv = "Suchergebnis", Qv = "Ort auswählen", Jv = "Filter Hinzufügen", $v = "Filtertypen", em = {
  location: kv,
  search: Vv,
  uuid: Gv,
  name: jv,
  author: qv,
  type: Wv,
  version: Kv,
  changed_at: zv,
  from: Xv,
  to: Yv,
  search_result: Zv,
  select_location: Qv,
  add_filter: Jv,
  filter_types: $v
}, tm = "Location", nm = "Search", rm = "UUID", im = "Name", am = "Author", om = "Type", sm = "Version", lm = "Changed At", um = "From", cm = "To", dm = "Search Result", fm = "Select Location", hm = "Add Filter", vm = "Filter Types", mm = {
  location: tm,
  search: nm,
  uuid: rm,
  name: im,
  author: am,
  type: om,
  version: sm,
  changed_at: lm,
  from: um,
  to: cm,
  search_result: dm,
  select_location: fm,
  add_filter: hm,
  filter_types: vm
};
function St(t) {
  return typeof t == "function";
}
function Ac(t) {
  var e = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = t(e);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var No = Ac(function(t) {
  return function(n) {
    t(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(r, i) {
      return i + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function Sl(t, e) {
  if (t) {
    var n = t.indexOf(e);
    0 <= n && t.splice(n, 1);
  }
}
var Ds = function() {
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
            for (var u = wt(o), l = u.next(); !l.done; l = u.next()) {
              var c = l.value;
              c.remove(this);
            }
          } catch (g) {
            e = { error: g };
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
      if (St(d))
        try {
          d();
        } catch (g) {
          a = g instanceof No ? g.errors : [g];
        }
      var h = this._finalizers;
      if (h) {
        this._finalizers = null;
        try {
          for (var f = wt(h), v = f.next(); !v.done; v = f.next()) {
            var p = v.value;
            try {
              xl(p);
            } catch (g) {
              a = a ?? [], g instanceof No ? a = Ar(Ar([], Fi(a)), Fi(g.errors)) : a.push(g);
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
        throw new No(a);
    }
  }, t.prototype.add = function(e) {
    var n;
    if (e && e !== this)
      if (this.closed)
        xl(e);
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
    n === e ? this._parentage = null : Array.isArray(n) && Sl(n, e);
  }, t.prototype.remove = function(e) {
    var n = this._finalizers;
    n && Sl(n, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = function() {
    var e = new t();
    return e.closed = !0, e;
  }(), t;
}();
Ds.EMPTY;
function Cc(t) {
  return t instanceof Ds || t && "closed" in t && St(t.remove) && St(t.add) && St(t.unsubscribe);
}
function xl(t) {
  St(t) ? t() : t.unsubscribe();
}
var pm = {
  Promise: void 0
}, gm = {
  setTimeout: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setTimeout.apply(void 0, Ar([t, e], Fi(n)));
  },
  clearTimeout: function(t) {
    return clearTimeout(t);
  },
  delegate: void 0
};
function Sc(t) {
  gm.setTimeout(function() {
    throw t;
  });
}
function Tl() {
}
function bm(t) {
  t();
}
var Ps = function(t) {
  it(e, t);
  function e(n) {
    var r = t.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, Cc(n) && n.add(r)) : r.destination = _m, r;
  }
  return e.create = function(n, r, i) {
    return new ls(n, r, i);
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
}(Ds), Im = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(e);
      } catch (r) {
        Da(r);
      }
  }, t.prototype.error = function(e) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(e);
      } catch (r) {
        Da(r);
      }
    else
      Da(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (n) {
        Da(n);
      }
  }, t;
}(), ls = function(t) {
  it(e, t);
  function e(n, r, i) {
    var a = t.call(this) || this, o;
    return St(n) || !n ? o = {
      next: n ?? void 0,
      error: r ?? void 0,
      complete: i ?? void 0
    } : o = n, a.destination = new Im(o), a;
  }
  return e;
}(Ps);
function Da(t) {
  Sc(t);
}
function ym(t) {
  throw t;
}
var _m = {
  closed: !0,
  next: Tl,
  error: ym,
  complete: Tl
}, Ns = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function xc(t) {
  return t;
}
function Em(t) {
  return t.length === 0 ? xc : t.length === 1 ? t[0] : function(n) {
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
    var i = this, a = Cm(e) ? e : new ls(e, n, r);
    return bm(function() {
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
    return n = Ll(n), new n(function(i, a) {
      var o = new ls({
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
  }, t.prototype[Ns] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    return Em(e)(this);
  }, t.prototype.toPromise = function(e) {
    var n = this;
    return e = Ll(e), new e(function(r, i) {
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
function Ll(t) {
  var e;
  return (e = t ?? pm.Promise) !== null && e !== void 0 ? e : Promise;
}
function Am(t) {
  return t && St(t.next) && St(t.error) && St(t.complete);
}
function Cm(t) {
  return t && t instanceof Ps || Am(t) && Cc(t);
}
function Sm(t) {
  return St(t == null ? void 0 : t.lift);
}
function Xi(t) {
  return function(e) {
    if (Sm(e))
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
function Gi(t, e, n, r, i) {
  return new xm(t, e, n, r, i);
}
var xm = function(t) {
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
}(Ps), Tm = new Nn(function(t) {
  return t.complete();
});
function Lm(t) {
  return t && St(t.schedule);
}
function wm(t) {
  return t[t.length - 1];
}
function Om(t) {
  return Lm(wm(t)) ? t.pop() : void 0;
}
var Tc = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function Lc(t) {
  return St(t == null ? void 0 : t.then);
}
function wc(t) {
  return St(t[Ns]);
}
function Oc(t) {
  return Symbol.asyncIterator && St(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function Rc(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function Rm() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var Mc = Rm();
function Dc(t) {
  return St(t == null ? void 0 : t[Mc]);
}
function Pc(t) {
  return uh(this, arguments, function() {
    var n, r, i, a;
    return Os(this, function(o) {
      switch (o.label) {
        case 0:
          n = t.getReader(), o.label = 1;
        case 1:
          o.trys.push([1, , 9, 10]), o.label = 2;
        case 2:
          return [4, Ci(n.read())];
        case 3:
          return r = o.sent(), i = r.value, a = r.done, a ? [4, Ci(void 0)] : [3, 5];
        case 4:
          return [2, o.sent()];
        case 5:
          return [4, Ci(i)];
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
function Nc(t) {
  return St(t == null ? void 0 : t.getReader);
}
function xa(t) {
  if (t instanceof Nn)
    return t;
  if (t != null) {
    if (wc(t))
      return Mm(t);
    if (Tc(t))
      return Dm(t);
    if (Lc(t))
      return Pm(t);
    if (Oc(t))
      return Hc(t);
    if (Dc(t))
      return Nm(t);
    if (Nc(t))
      return Hm(t);
  }
  throw Rc(t);
}
function Mm(t) {
  return new Nn(function(e) {
    var n = t[Ns]();
    if (St(n.subscribe))
      return n.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function Dm(t) {
  return new Nn(function(e) {
    for (var n = 0; n < t.length && !e.closed; n++)
      e.next(t[n]);
    e.complete();
  });
}
function Pm(t) {
  return new Nn(function(e) {
    t.then(function(n) {
      e.closed || (e.next(n), e.complete());
    }, function(n) {
      return e.error(n);
    }).then(null, Sc);
  });
}
function Nm(t) {
  return new Nn(function(e) {
    var n, r;
    try {
      for (var i = wt(t), a = i.next(); !a.done; a = i.next()) {
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
function Hc(t) {
  return new Nn(function(e) {
    Um(t, e).catch(function(n) {
      return e.error(n);
    });
  });
}
function Hm(t) {
  return Hc(Pc(t));
}
function Um(t, e) {
  var n, r, i, a;
  return Ju(this, void 0, void 0, function() {
    var o, u;
    return Os(this, function(l) {
      switch (l.label) {
        case 0:
          l.trys.push([0, 5, 6, 11]), n = ch(t), l.label = 1;
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
function $r(t, e, n, r, i) {
  r === void 0 && (r = 0), i === void 0 && (i = !1);
  var a = e.schedule(function() {
    n(), i ? t.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (t.add(a), !i)
    return a;
}
function Uc(t, e) {
  return e === void 0 && (e = 0), Xi(function(n, r) {
    n.subscribe(Gi(r, function(i) {
      return $r(r, t, function() {
        return r.next(i);
      }, e);
    }, function() {
      return $r(r, t, function() {
        return r.complete();
      }, e);
    }, function(i) {
      return $r(r, t, function() {
        return r.error(i);
      }, e);
    }));
  });
}
function Fc(t, e) {
  return e === void 0 && (e = 0), Xi(function(n, r) {
    r.add(t.schedule(function() {
      return n.subscribe(r);
    }, e));
  });
}
function Fm(t, e) {
  return xa(t).pipe(Fc(e), Uc(e));
}
function Bm(t, e) {
  return xa(t).pipe(Fc(e), Uc(e));
}
function km(t, e) {
  return new Nn(function(n) {
    var r = 0;
    return e.schedule(function() {
      r === t.length ? n.complete() : (n.next(t[r++]), n.closed || this.schedule());
    });
  });
}
function Vm(t, e) {
  return new Nn(function(n) {
    var r;
    return $r(n, e, function() {
      r = t[Mc](), $r(n, e, function() {
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
      return St(r == null ? void 0 : r.return) && r.return();
    };
  });
}
function Bc(t, e) {
  if (!t)
    throw new Error("Iterable cannot be null");
  return new Nn(function(n) {
    $r(n, e, function() {
      var r = t[Symbol.asyncIterator]();
      $r(n, e, function() {
        r.next().then(function(i) {
          i.done ? n.complete() : n.next(i.value);
        });
      }, 0, !0);
    });
  });
}
function Gm(t, e) {
  return Bc(Pc(t), e);
}
function jm(t, e) {
  if (t != null) {
    if (wc(t))
      return Fm(t, e);
    if (Tc(t))
      return km(t, e);
    if (Lc(t))
      return Bm(t, e);
    if (Oc(t))
      return Bc(t, e);
    if (Dc(t))
      return Vm(t, e);
    if (Nc(t))
      return Gm(t, e);
  }
  throw Rc(t);
}
function qm(t, e) {
  return e ? jm(t, e) : xa(t);
}
function kc() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = Om(t);
  return qm(t, n);
}
function on(t, e) {
  return Xi(function(n, r) {
    var i = 0;
    n.subscribe(Gi(r, function(a) {
      r.next(t.call(e, a, i++));
    }));
  });
}
function Wm(t, e, n, r, i, a, o, u) {
  var l = [], c = 0, d = 0, h = !1, f = function() {
    h && !l.length && !c && e.complete();
  }, v = function(g) {
    return c < r ? p(g) : l.push(g);
  }, p = function(g) {
    c++;
    var y = !1;
    xa(n(g, d++)).subscribe(Gi(e, function(E) {
      e.next(E);
    }, function() {
      y = !0;
    }, void 0, function() {
      if (y)
        try {
          c--;
          for (var E = function() {
            var x = l.shift();
            o || p(x);
          }; l.length && c < r; )
            E();
          f();
        } catch (x) {
          e.error(x);
        }
    }));
  };
  return t.subscribe(Gi(e, v, function() {
    h = !0, f();
  })), function() {
  };
}
function us(t, e, n) {
  return n === void 0 && (n = 1 / 0), St(e) ? us(function(r, i) {
    return on(function(a, o) {
      return e(r, a, i, o);
    })(xa(t(r, i)));
  }, n) : (typeof e == "number" && (n = e), Xi(function(r, i) {
    return Wm(r, i, t, n);
  }));
}
function Vc(t, e) {
  return St(e) ? us(t, e, 1) : us(t, 1);
}
function Km(t) {
  return t <= 0 ? function() {
    return Tm;
  } : Xi(function(e, n) {
    var r = 0;
    e.subscribe(Gi(n, function(i) {
      ++r <= t && (n.next(i), t <= r && n.complete());
    }));
  });
}
function zm(t, e, n) {
  var r = St(t) || e || n ? { next: t, error: e, complete: n } : t;
  return r ? Xi(function(i, a) {
    var o;
    (o = r.subscribe) === null || o === void 0 || o.call(r);
    var u = !0;
    i.subscribe(Gi(a, function(l) {
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
  }) : xc;
}
function Gc(t) {
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
var Xm = /* @__PURE__ */ function() {
  function t(e, n, r, i) {
    i === void 0 && (i = "download_load"), this.originalEvent = e, this.xhr = n, this.request = r, this.type = i;
    var a = n.status, o = n.responseType;
    this.status = a ?? 0, this.responseType = o ?? "";
    var u = n.getAllResponseHeaders();
    this.responseHeaders = u ? u.split(`
`).reduce(function(d, h) {
      var f = h.indexOf(": ");
      return d[h.slice(0, f)] = h.slice(f + 2), d;
    }, {}) : {}, this.response = Gc(n);
    var l = e.loaded, c = e.total;
    this.loaded = l, this.total = c;
  }
  return t;
}(), Ja = Ac(function(t) {
  return function(n, r, i) {
    this.message = n, this.name = "AjaxError", this.xhr = r, this.request = i, this.status = r.status, this.responseType = r.responseType;
    var a;
    try {
      a = Gc(r);
    } catch {
      a = r.responseText;
    }
    this.response = a;
  };
}), Ym = function() {
  function t(e, n) {
    return Ja.call(this, "ajax timeout", e, n), this.name = "AjaxTimeoutError", this;
  }
  return t.prototype = Object.create(Ja.prototype), t;
}();
function Zm(t, e) {
  return Rr({ method: "GET", url: t, headers: e });
}
function Qm(t, e, n) {
  return Rr({ method: "POST", url: t, body: e, headers: n });
}
function Jm(t, e) {
  return Rr({ method: "DELETE", url: t, headers: e });
}
function $m(t, e, n) {
  return Rr({ method: "PUT", url: t, body: e, headers: n });
}
function ep(t, e, n) {
  return Rr({ method: "PATCH", url: t, body: e, headers: n });
}
var tp = on(function(t) {
  return t.response;
});
function np(t, e) {
  return tp(Rr({
    method: "GET",
    url: t,
    headers: e
  }));
}
var Rr = function() {
  var t = function(e) {
    var n = typeof e == "string" ? {
      url: e
    } : e;
    return ip(n);
  };
  return t.get = Zm, t.post = Qm, t.delete = Jm, t.put = $m, t.patch = ep, t.getJSON = np, t;
}(), rp = "upload", wl = "download", Ho = "loadstart", Uo = "progress", Ol = "load";
function ip(t) {
  return new Nn(function(e) {
    var n, r, i = de({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, t), a = i.queryParams, o = i.body, u = i.headers, l = i.url;
    if (!l)
      throw new TypeError("url is required");
    if (a) {
      var c;
      if (l.includes("?")) {
        var d = l.split("?");
        if (2 < d.length)
          throw new TypeError("invalid url");
        c = new URLSearchParams(d[1]), new URLSearchParams(a).forEach(function(N, W) {
          return c.set(W, N);
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
    var p = i.withCredentials, g = i.xsrfCookieName, y = i.xsrfHeaderName;
    if ((p || !v) && g && y) {
      var E = (r = (n = document == null ? void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + g + ")=([^;]*)"))) === null || n === void 0 ? void 0 : n.pop()) !== null && r !== void 0 ? r : "";
      E && (h[y] = E);
    }
    var x = ap(o, h), A = de(de({}, i), {
      url: l,
      headers: h,
      body: x
    }), b;
    b = t.createXHR ? t.createXHR() : new XMLHttpRequest();
    {
      var _ = t.progressSubscriber, C = t.includeDownloadProgress, T = C === void 0 ? !1 : C, S = t.includeUploadProgress, w = S === void 0 ? !1 : S, U = function(N, W) {
        b.addEventListener(N, function() {
          var ne, H = W();
          (ne = _ == null ? void 0 : _.error) === null || ne === void 0 || ne.call(_, H), e.error(H);
        });
      };
      U("timeout", function() {
        return new Ym(b, A);
      }), U("abort", function() {
        return new Ja("aborted", b, A);
      });
      var Y = function(N, W) {
        return new Xm(W, b, A, N + "_" + W.type);
      }, B = function(N, W, ne) {
        N.addEventListener(W, function(H) {
          e.next(Y(ne, H));
        });
      };
      w && [Ho, Uo, Ol].forEach(function(N) {
        return B(b.upload, N, rp);
      }), _ && [Ho, Uo].forEach(function(N) {
        return b.upload.addEventListener(N, function(W) {
          var ne;
          return (ne = _ == null ? void 0 : _.next) === null || ne === void 0 ? void 0 : ne.call(_, W);
        });
      }), T && [Ho, Uo].forEach(function(N) {
        return B(b, N, wl);
      });
      var M = function(N) {
        var W = "ajax error" + (N ? " " + N : "");
        e.error(new Ja(W, b, A));
      };
      b.addEventListener("error", function(N) {
        var W;
        (W = _ == null ? void 0 : _.error) === null || W === void 0 || W.call(_, N), M();
      }), b.addEventListener(Ol, function(N) {
        var W, ne, H = b.status;
        if (H < 400) {
          (W = _ == null ? void 0 : _.complete) === null || W === void 0 || W.call(_);
          var I = void 0;
          try {
            I = Y(wl, N);
          } catch (L) {
            e.error(L);
            return;
          }
          e.next(I), e.complete();
        } else
          (ne = _ == null ? void 0 : _.error) === null || ne === void 0 || ne.call(_, N), M(H);
      });
    }
    var Q = A.user, F = A.method, k = A.async;
    Q ? b.open(F, l, k, Q, A.password) : b.open(F, l, k), k && (b.timeout = A.timeout, b.responseType = A.responseType), "withCredentials" in b && (b.withCredentials = A.withCredentials);
    for (var f in h)
      h.hasOwnProperty(f) && b.setRequestHeader(f, h[f]);
    return x ? b.send(x) : b.send(), function() {
      b && b.readyState !== 4 && b.abort();
    };
  });
}
function ap(t, e) {
  var n;
  if (!t || typeof t == "string" || dp(t) || fp(t) || sp(t) || lp(t) || up(t) || hp(t))
    return t;
  if (cp(t))
    return t.buffer;
  if (typeof t == "object")
    return e["content-type"] = (n = e["content-type"]) !== null && n !== void 0 ? n : "application/json;charset=utf-8", JSON.stringify(t);
  throw new TypeError("Unknown body type");
}
var op = Object.prototype.toString;
function Hs(t, e) {
  return op.call(t) === "[object " + e + "]";
}
function sp(t) {
  return Hs(t, "ArrayBuffer");
}
function lp(t) {
  return Hs(t, "File");
}
function up(t) {
  return Hs(t, "Blob");
}
function cp(t) {
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView(t);
}
function dp(t) {
  return typeof FormData < "u" && t instanceof FormData;
}
function fp(t) {
  return typeof URLSearchParams < "u" && t instanceof URLSearchParams;
}
function hp(t) {
  return typeof ReadableStream < "u" && t instanceof ReadableStream;
}
let vp = class {
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
const mp = new vp("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), pp = [mp], gp = pp[0].getUrl();
let jc = class {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? gp;
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
}, bp = class {
  constructor(e = new jc()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (n) => {
      const r = this.clone();
      return r.middleware = r.middleware.concat(n), r;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((r) => ({ pre: r }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((r) => ({ post: r }))), this.createRequestArgs = ({ url: n, query: r, method: i, headers: a, body: o, responseType: u }) => ({
      url: `${this.configuration.basePath}${n}${r && Object.keys(r).length ? `?${Ip(r)}` : ""}`,
      method: i,
      headers: a,
      body: o instanceof FormData ? o : JSON.stringify(o),
      responseType: u ?? "json"
    }), this.rxjsRequest = (n) => kc(n).pipe(
      on((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      Vc(
        (r) => Rr(r).pipe(
          on((i) => (this.middleware.filter((a) => a.post).forEach((a) => i = a.post(i)), i))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, n) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      on((r) => {
        const { status: i, response: a } = r;
        if (i >= 200 && i < 300)
          return (n == null ? void 0 : n.response) === "raw" ? r : a;
        throw r;
      })
    );
  }
};
const Wr = (t) => encodeURIComponent(`${t}`), Ip = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((r) => `${Wr(e)}=${Wr(r)}`).join("&") : `${Wr(e)}=${Wr(n)}`
).join("&"), Pa = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class yp extends bp {
  retrieveDataResourceByVersion({ id: e, version: n }, r) {
    Pa(e, "id", "retrieveDataResourceByVersion"), Pa(n, "version", "retrieveDataResourceByVersion");
    const i = {};
    return this.request({
      url: "/api/scl/{id}/version/{version}".replace("{id}", Wr(e)).replace("{version}", Wr(n)),
      method: "GET",
      headers: i,
      responseType: "blob"
    }, r == null ? void 0 : r.responseOpts);
  }
  retrieveDataResourceHistory({ id: e }, n) {
    Pa(e, "id", "retrieveDataResourceHistory");
    const r = {};
    return this.request({
      url: "/api/scl/{id}/versions".replace("{id}", Wr(e)),
      method: "GET",
      headers: r
    }, n == null ? void 0 : n.responseOpts);
  }
  searchForResources({ dataResourceSearch: e }, n) {
    Pa(e, "dataResourceSearch", "searchForResources");
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
class Us {
  constructor(e, n, r, i, a, o, u, l, c) {
    this.uuid = e, this.name = n, this.author = r, this.type = i, this.changedAt = a, this.version = o, this.available = u, this.deleted = l, this.location = c;
  }
  static from(e) {
    return new Us(
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
class _p {
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
const Ep = new _p("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), Ap = [Ep], Cp = Ap[0].getUrl();
class qc {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? Cp;
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
class Sp {
  constructor(e = new qc()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (n) => {
      const r = this.clone();
      return r.middleware = r.middleware.concat(n), r;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((r) => ({ pre: r }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((r) => ({ post: r }))), this.createRequestArgs = ({ url: n, query: r, method: i, headers: a, body: o, responseType: u }) => ({
      url: `${this.configuration.basePath}${n}${r && Object.keys(r).length ? `?${xp(r)}` : ""}`,
      method: i,
      headers: a,
      body: o instanceof FormData ? o : JSON.stringify(o),
      responseType: u ?? "json"
    }), this.rxjsRequest = (n) => kc(n).pipe(
      on((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      Vc(
        (r) => Rr(r).pipe(
          on((i) => (this.middleware.filter((a) => a.post).forEach((a) => i = a.post(i)), i))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, n) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      on((r) => {
        const { status: i, response: a } = r;
        if (i >= 200 && i < 300)
          return (n == null ? void 0 : n.response) === "raw" ? r : a;
        throw r;
      })
    );
  }
}
const Rn = (t) => encodeURIComponent(`${t}`), xp = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((r) => `${Rn(e)}=${Rn(r)}`).join("&") : `${Rn(e)}=${Rn(n)}`
).join("&"), Qn = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class Tp extends Sp {
  assignResourceToLocation({ locationId: e, uuid: n }, r) {
    Qn(e, "locationId", "assignResourceToLocation"), Qn(n, "uuid", "assignResourceToLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/assign".replace("{locationId}", Rn(e)).replace("{uuid}", Rn(n)),
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
      url: "/api/locations/{locationId}".replace("{locationId}", Rn(e)),
      method: "DELETE",
      headers: r
    }, n == null ? void 0 : n.responseOpts);
  }
  getLocation({ locationId: e }, n) {
    Qn(e, "locationId", "getLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", Rn(e)),
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
      url: "/api/locations/{locationId}/resources/{uuid}/unassign".replace("{locationId}", Rn(e)).replace("{uuid}", Rn(n)),
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
      url: "/api/locations/{locationId}".replace("{locationId}", Rn(e)),
      method: "PUT",
      headers: i,
      body: n
    }, r == null ? void 0 : r.responseOpts);
  }
}
class Fs {
  constructor(e, n, r, i, a) {
    this.uuid = a, this.key = e, this.name = n, this.description = r, this.assignedResources = i;
  }
  static from(e) {
    return new Fs(e.key, e.name, e.description, e.assignedResources, e.uuid);
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
      on((n) => n || []),
      on((n) => n.map((r) => Fs.from(r)))
    );
  }
  assignResourceToLocation(e, n) {
    return this.locationsApiClient.assignResourceToLocation({ locationId: e, uuid: n }).pipe(on(() => {
    }));
  }
  unassignResourceFromLocation(e, n) {
    return this.locationsApiClient.unassignResourceFromLocation({ locationId: e, uuid: n }).pipe(on(() => {
    }));
  }
  searchResources(e) {
    return console.log(e), this.historyApiClient.searchForResources({
      dataResourceSearch: this.mapToDataResourceSearch(e)
    }).pipe(
      on((n) => (console.log(n), n.results)),
      on(
        (n) => n.map((r) => Us.from(r))
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
    const n = new qc({
      basePath: e
      // accessToken: authInfo.token,
    });
    return new Tp(n);
  }
  createHistoryApiClient(e) {
    const n = new jc({
      basePath: e
      // accessToken: authInfo.token,
    });
    return new yp(n);
  }
}
var rr;
class Rl {
  constructor() {
    $e(this, rr, Ct([]));
  }
  get store() {
    return $(this, rr);
  }
  set(e) {
    $(this, rr).set(e);
  }
  update(e) {
    $(this, rr).update((n) => n.map((r) => r.uuid === e.uuid ? e : r));
  }
  add(e) {
    $(this, rr).update((n) => [...n, e]);
  }
  remove(e) {
    $(this, rr).update((n) => n.filter((r) => r.uuid !== e));
  }
  findById(e) {
    return Zu($(this, rr)).find((n) => n.uuid === e);
  }
}
rr = new WeakMap();
function Lp(t, e = {}) {
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
function He(t) {
  return Object.entries(t).filter(([e, n]) => e !== "" && n).map(([e]) => e).join(" ");
}
function ze(t, e, n, r = { bubbles: !0 }) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  if (!t)
    throw new Error("Tried to dispatch event without element.");
  const i = new CustomEvent(e, Object.assign(Object.assign({}, r), { detail: n }));
  return t == null || t.dispatchEvent(i), i;
}
function ji(t, e) {
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
class Ta {
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
    n in a || (a[n] = /* @__PURE__ */ new Map()), a[n].set(r, bf(e, n, r, i));
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
function K(t, e) {
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
var Na;
function Wc(t, e) {
  e === void 0 && (e = !1);
  var n = t.CSS, r = Na;
  if (typeof Na == "boolean" && !e)
    return Na;
  var i = n && typeof n.supports == "function";
  if (!i)
    return !1;
  var a = n.supports("--css-vars", "yes"), o = n.supports("(--css-vars: yes)") && n.supports("color", "#00000000");
  return r = a || o, e || (Na = r), r;
}
function wp(t, e, n) {
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
var Pt = (
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
var go = (
  /** @class */
  function() {
    function t(e, n) {
      for (var r = [], i = 2; i < arguments.length; i++)
        r[i - 2] = arguments[i];
      this.root = e, this.initialize.apply(this, Ar([], Fi(r))), this.foundation = n === void 0 ? this.getDefaultFoundation() : n, this.foundation.init(), this.initialSyncWithDOM();
    }
    return t.attachTo = function(e) {
      return new t(e, new Pt({}));
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
function la(t) {
  return t === void 0 && (t = window), Op(t) ? { passive: !0 } : !1;
}
function Op(t) {
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
  applyPassive: la
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
function Rp(t, e) {
  if (t.closest)
    return t.closest(e);
  for (var n = t; n; ) {
    if (Bs(n, e))
      return n;
    n = n.parentElement;
  }
  return null;
}
function Bs(t, e) {
  var n = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return n.call(t, e);
}
function Mp(t) {
  var e = t;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var n = e.cloneNode(!0);
  n.style.setProperty("position", "absolute"), n.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(n);
  var r = n.scrollWidth;
  return document.documentElement.removeChild(n), r;
}
const bo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: Rp,
  estimateScrollWidth: Mp,
  matches: Bs
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
var Dp = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Pp = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Ml = {
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
var Dl = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Pl = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Ha = [], Io = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n) {
      var r = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
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
        return Dp;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Pp;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Ml;
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
          for (var a = wt(Dl), o = a.next(); !o.done; o = a.next()) {
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
          for (var a = wt(Pl), o = a.next(); !o.done; o = a.next()) {
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
        for (var i = wt(Dl), a = i.next(); !a.done; a = i.next()) {
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
        for (var i = wt(Pl), a = i.next(); !a.done; a = i.next()) {
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
            var u = n !== void 0 && Ha.length > 0 && Ha.some(function(l) {
              return r.adapter.containsEventTarget(l);
            });
            if (u) {
              this.resetActivationState();
              return;
            }
            n !== void 0 && (Ha.push(n.target), this.registerDeactivationHandlers(n)), i.wasElementMadeActive = this.checkElementMadeActive(n), i.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Ha = [], !i.wasElementMadeActive && n !== void 0 && (n.key === " " || n.keyCode === 32) && (i.wasElementMadeActive = r.checkElementMadeActive(n), i.wasElementMadeActive && r.animateActivation()), i.wasElementMadeActive || (r.activationState = r.defaultActivationState());
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
      i ? a = wp(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
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
      }, Ml.FG_DEACTIVATION_MS));
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
        var i = de({}, r);
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
  }(Pt)
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
var $a = (
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
          return Wc(window);
        },
        computeBoundingRect: function() {
          return n.root.getBoundingClientRect();
        },
        containsEventTarget: function(r) {
          return n.root.contains(r);
        },
        deregisterDocumentInteractionHandler: function(r, i) {
          return document.documentElement.removeEventListener(r, i, la());
        },
        deregisterInteractionHandler: function(r, i) {
          return n.root.removeEventListener(r, i, la());
        },
        deregisterResizeHandler: function(r) {
          return window.removeEventListener("resize", r);
        },
        getWindowPageOffset: function() {
          return { x: window.pageXOffset, y: window.pageYOffset };
        },
        isSurfaceActive: function() {
          return Bs(n.root, ":active");
        },
        isSurfaceDisabled: function() {
          return !!n.disabled;
        },
        isUnbounded: function() {
          return !!n.unbounded;
        },
        registerDocumentInteractionHandler: function(r, i) {
          return document.documentElement.addEventListener(r, i, la());
        },
        registerInteractionHandler: function(r, i) {
          return n.root.addEventListener(r, i, la());
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
      return new Io(e.createAdapter(this));
    }, e.prototype.initialSyncWithDOM = function() {
      var n = this.root;
      this.isUnbounded = "mdcRippleIsUnbounded" in n.dataset;
    }, e.prototype.setUnbounded = function() {
      this.foundation.setUnbounded(!!this.isUnbounded);
    }, e;
  }(go)
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
var Oe = {
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
}, tn = /* @__PURE__ */ new Set();
tn.add(Oe.BACKSPACE);
tn.add(Oe.ENTER);
tn.add(Oe.SPACEBAR);
tn.add(Oe.PAGE_UP);
tn.add(Oe.PAGE_DOWN);
tn.add(Oe.END);
tn.add(Oe.HOME);
tn.add(Oe.ARROW_LEFT);
tn.add(Oe.ARROW_UP);
tn.add(Oe.ARROW_RIGHT);
tn.add(Oe.ARROW_DOWN);
tn.add(Oe.DELETE);
tn.add(Oe.ESCAPE);
tn.add(Oe.TAB);
var un = {
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
}, nn = /* @__PURE__ */ new Map();
nn.set(un.BACKSPACE, Oe.BACKSPACE);
nn.set(un.ENTER, Oe.ENTER);
nn.set(un.SPACEBAR, Oe.SPACEBAR);
nn.set(un.PAGE_UP, Oe.PAGE_UP);
nn.set(un.PAGE_DOWN, Oe.PAGE_DOWN);
nn.set(un.END, Oe.END);
nn.set(un.HOME, Oe.HOME);
nn.set(un.ARROW_LEFT, Oe.ARROW_LEFT);
nn.set(un.ARROW_UP, Oe.ARROW_UP);
nn.set(un.ARROW_RIGHT, Oe.ARROW_RIGHT);
nn.set(un.ARROW_DOWN, Oe.ARROW_DOWN);
nn.set(un.DELETE, Oe.DELETE);
nn.set(un.ESCAPE, Oe.ESCAPE);
nn.set(un.TAB, Oe.TAB);
var lr = /* @__PURE__ */ new Set();
lr.add(Oe.PAGE_UP);
lr.add(Oe.PAGE_DOWN);
lr.add(Oe.END);
lr.add(Oe.HOME);
lr.add(Oe.ARROW_LEFT);
lr.add(Oe.ARROW_UP);
lr.add(Oe.ARROW_RIGHT);
lr.add(Oe.ARROW_DOWN);
function gt(t) {
  var e = t.key;
  if (tn.has(e))
    return e;
  var n = nn.get(t.keyCode);
  return n || Oe.UNKNOWN;
}
function Np(t) {
  return lr.has(gt(t));
}
const { applyPassive: Nl } = Kc, { matches: Hp } = bo;
function jt(t, { ripple: e = !0, surface: n = !1, unbounded: r = !1, disabled: i = !1, color: a, active: o, rippleElement: u, eventTarget: l, activeTarget: c, addClass: d = (p) => t.classList.add(p), removeClass: h = (p) => t.classList.remove(p), addStyle: f = (p, g) => t.style.setProperty(p, g), initPromise: v = Promise.resolve() } = {}) {
  let p, g = new Ta(), y = se("SMUI:addLayoutListener"), E, x = o, A = l, b = c;
  function _() {
    n ? (d("mdc-ripple-surface"), a === "primary" ? (d("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")) : a === "secondary" ? (h("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : (h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary"))) : (h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), p && x !== o && (x = o, o ? p.activate() : o === !1 && p.deactivate()), e && !p ? (p = new Io({
      addClass: d,
      browserSupportsCssVars: () => Wc(window),
      computeBoundingRect: () => (u || t).getBoundingClientRect(),
      containsEventTarget: (T) => t.contains(T),
      deregisterDocumentInteractionHandler: (T, S) => g.off(document.documentElement, T, S),
      deregisterInteractionHandler: (T, S) => g.off(l || t, T, S),
      deregisterResizeHandler: (T) => window.removeEventListener("resize", T),
      getWindowPageOffset: () => {
        var T, S;
        return {
          x: (T = window.pageXOffset) !== null && T !== void 0 ? T : window.scrollX,
          y: (S = window.pageYOffset) !== null && S !== void 0 ? S : window.scrollY
        };
      },
      isSurfaceActive: () => o ?? Hp(c || t, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!r,
      registerDocumentInteractionHandler: (T, S) => {
        const w = Nl();
        g.on(document.documentElement, T, S, typeof w == "boolean" ? { capture: w } : w);
      },
      registerInteractionHandler: (T, S) => {
        const w = Nl();
        g.on(l || t, T, S, typeof w == "boolean" ? { capture: w } : w);
      },
      registerResizeHandler: (T) => g.on(window, "resize", T),
      removeClass: h,
      updateCssVariable: f
    }), v.then(() => {
      p && (p.init(), p.setUnbounded(r));
    })) : p && !e && v.then(() => {
      p && (p.destroy(), p = void 0, g.clear());
    }), p && (A !== l || b !== c) && (A = l, b = c, p.destroy(), requestAnimationFrame(() => {
      p && (p.init(), p.setUnbounded(r));
    })), !e && r && d("mdc-ripple-upgraded--unbounded");
  }
  _(), y && (E = y(C));
  function C() {
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
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (S) => t.classList.add(S), removeClass: (S) => t.classList.remove(S), addStyle: (S, w) => t.style.setProperty(S, w), initPromise: Promise.resolve() }, T)), _();
    },
    destroy() {
      p && (p.destroy(), p = void 0, g.clear(), h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), E && E();
    }
  };
}
function Up(t, e) {
  Re(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "component", 3, Mr), a = m(e, "tag", 3, "span"), o = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "component",
    "tag",
    "children"
  ]), u;
  const l = se("SMUI:label:context"), c = se("SMUI:label:tabindex");
  function d() {
    return u.getElement();
  }
  var h = { getElement: d }, f = le(), v = Z(f);
  {
    let p = /* @__PURE__ */ ue(() => He({
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
    wr(v, i, (g, y) => {
      Te(
        y(g, rt(
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
            children: (E, x) => {
              var A = le(), b = Z(A);
              _e(b, () => e.children ?? pe), O(E, A);
            },
            $$slots: { default: !0 }
          }
        )),
        (E) => u = E,
        () => u
      );
    });
  }
  return O(t, f), Me(h);
}
function Fp(t, e) {
  Re(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "on", 3, !1), a = m(e, "component", 3, Mr), o = m(e, "tag", 3, "i"), u = /* @__PURE__ */ qe(e, [
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
  const c = /* @__PURE__ */ ue(() => o() === "svg" || a() === Vp), d = se("SMUI:icon:context");
  function h() {
    return l.getElement();
  }
  var f = { getElement: h }, v = le(), p = Z(v);
  {
    let g = /* @__PURE__ */ ue(() => He({
      "mdc-button__icon": d === "button",
      "mdc-fab__icon": d === "fab",
      "mdc-icon-button__icon": d === "icon-button",
      "mdc-icon-button__icon--on": d === "icon-button" && i(),
      "mdc-tab__icon": d === "tab",
      "mdc-banner__icon": d === "banner",
      "mdc-segmented-button__icon": d === "segmented-button",
      [r()]: !0
    }));
    wr(p, a, (y, E) => {
      Te(
        E(y, rt(
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
          () => s(c) ? { focusable: "false", tabindex: "-1" } : {},
          () => u,
          {
            children: (x, A) => {
              var b = le(), _ = Z(b);
              _e(_, () => e.children ?? pe), O(x, b);
            },
            $$slots: { default: !0 }
          }
        )),
        (x) => l = x,
        () => l
      );
    });
  }
  return O(t, v), Me(f);
}
var Bp = /* @__PURE__ */ ln("<svg><!></svg>");
function Mr(t, e) {
  Re(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "tag", 3, "div"), i = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
  const a = /* @__PURE__ */ ue(() => [
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
  var l = { getElement: u }, c = le(), d = Z(c);
  {
    var h = (v) => {
      var p = Bp();
      Be(p, () => ({ ...i }));
      var g = ge(p);
      _e(g, () => e.children ?? pe), Te(p, (y) => o = y, () => o), Ue(p, (y, E) => K == null ? void 0 : K(y, E), n), O(v, p);
    }, f = (v) => {
      var p = le(), g = Z(p);
      {
        var y = (x) => {
          var A = le(), b = Z(A);
          il(b, r, !1, (_, C) => {
            Te(_, (T) => o = T, () => o), Ue(_, (T, S) => K == null ? void 0 : K(T, S), n), Be(_, () => ({ ...i }));
          }), O(x, A);
        }, E = (x) => {
          var A = le(), b = Z(A);
          il(b, r, !1, (_, C) => {
            Te(_, (w) => o = w, () => o), Ue(_, (w, U) => K == null ? void 0 : K(w, U), n), Be(_, () => ({ ...i }));
            var T = le(), S = Z(T);
            _e(S, () => e.children ?? pe), O(C, T);
          }), O(x, A);
        };
        ce(
          g,
          (x) => {
            s(a) ? x(y) : x(E, !1);
          },
          !0
        );
      }
      O(v, p);
    };
    ce(d, (v) => {
      r() === "svg" ? v(h) : v(f, !1);
    });
  }
  return O(t, c), Me(l);
}
var kp = /* @__PURE__ */ ln("<svg><!></svg>");
function Vp(t, e) {
  Re(e, !0), console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let n = m(e, "use", 19, () => []), r = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i;
  function a() {
    return i;
  }
  var o = { getElement: a }, u = kp();
  Be(u, () => ({ ...r }));
  var l = ge(u);
  return _e(l, () => e.children ?? pe), Te(u, (c) => i = c, () => i), Ue(u, (c, d) => K == null ? void 0 : K(c, d), n), O(t, u), Me(o);
}
function yi(t, e) {
  Re(e, !0);
  const [n, r] = xn(), i = Ct(e.value);
  te(e.key, i), we(() => {
    vn(i, e.value);
  }), Kn(() => {
    i.set(void 0);
  });
  var a = le(), o = Z(a);
  _e(o, () => e.children ?? pe), O(t, a), Me(), r();
}
var Gp = /* @__PURE__ */ be('<div class="mdc-button__touch"></div>'), jp = /* @__PURE__ */ be('<div class="mdc-button__ripple"></div> <!><!>', 1);
function qp(t, e) {
  Re(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "ripple", 3, !0), o = m(e, "color", 3, "primary"), u = m(e, "variant", 3, "text"), l = m(e, "touch", 3, !1), c = m(e, "action", 3, "close"), d = m(e, "defaultAction", 3, !1), h = m(e, "secondary", 3, !1), f = m(e, "component", 3, Mr), v = m(e, "tag", 19, () => e.href == null ? "button" : "a"), p = /* @__PURE__ */ qe(e, [
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
  ]), g, y = Ee({}), E = Ee({}), x = se("SMUI:button:context");
  const A = /* @__PURE__ */ ue(() => x === "dialog:action" && c() != null ? { "data-mdc-dialog-action": c() } : { action: c() }), b = /* @__PURE__ */ ue(() => x === "dialog:action" && d() ? { "data-mdc-dialog-button-default": "" } : {}), _ = /* @__PURE__ */ ue(() => x === "banner" ? {} : { secondary: h() });
  let C = e.disabled;
  we(() => {
    if (C !== e.disabled) {
      if (g) {
        const F = Y();
        "blur" in F && F.blur();
      }
      C = p.disabled;
    }
  }), te("SMUI:label:context", "button"), te("SMUI:icon:context", "button");
  function T(F) {
    y[F] || (y[F] = !0);
  }
  function S(F) {
    (!(F in y) || y[F]) && (y[F] = !1);
  }
  function w(F, k) {
    E[F] != k && (k === "" || k == null ? delete E[F] : E[F] = k);
  }
  function U() {
    x === "banner" && ze(Y(), h() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function Y() {
    return g.getElement();
  }
  var B = { getElement: Y }, M = le(), Q = Z(M);
  {
    let F = /* @__PURE__ */ ue(() => [
      [
        jt,
        {
          ripple: a(),
          unbounded: !1,
          color: o(),
          disabled: !!e.disabled,
          addClass: T,
          removeClass: S,
          addStyle: w
        }
      ],
      ...n()
    ]), k = /* @__PURE__ */ ue(() => He({
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
      ...y,
      [r()]: !0
    })), N = /* @__PURE__ */ ue(() => Object.entries(E).map(([W, ne]) => `${W}: ${ne};`).concat([i()]).join(" "));
    wr(Q, f, (W, ne) => {
      Te(
        ne(W, rt(
          {
            get tag() {
              return v();
            },
            get use() {
              return s(F);
            },
            get class() {
              return s(k);
            },
            get style() {
              return s(N);
            }
          },
          () => s(A),
          () => s(b),
          () => s(_),
          {
            get href() {
              return e.href;
            }
          },
          () => p,
          {
            onclick: (H) => {
              var I;
              U(), (I = e.onclick) == null || I.call(e, H);
            },
            children: (H, I) => {
              var L = jp(), ee = ye(Z(L), 2);
              _e(ee, () => e.children ?? pe);
              var D = ye(ee);
              {
                var j = (me) => {
                  var V = Gp();
                  O(me, V);
                };
                ce(D, (me) => {
                  l() && me(j);
                });
              }
              O(H, L);
            },
            $$slots: { default: !0 }
          }
        )),
        (H) => g = H,
        () => g
      );
    });
  }
  return O(t, M), Me(B);
}
function ks(t, e) {
  Re(e, !0);
  let n = m(e, "callback", 3, () => {
  }), r = m(e, "disabled", 3, !1), i = m(e, "variant", 3, "default"), a = m(e, "isAbortAction", 3, !1), o = m(e, "backgroundColor", 3, void 0);
  {
    let u = /* @__PURE__ */ ue(() => a() ? "background-color: #ff3e00;" : "background-color: " + o());
    qp(t, {
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
        var d = le(), h = Z(d);
        _e(h, () => e.children ?? pe), O(l, d);
      },
      $$slots: { default: !0 }
    });
  }
  Me();
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
var Ua = {
  ICON_BUTTON_ON: "mdc-icon-button--on",
  ROOT: "mdc-icon-button"
}, Jn = {
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
var Wp = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n) {
      var r = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
      return r.hasToggledAriaLabel = !1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ua;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Jn;
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
      var n = this.adapter.getAttr(Jn.DATA_ARIA_LABEL_ON), r = this.adapter.getAttr(Jn.DATA_ARIA_LABEL_OFF);
      if (n && r) {
        if (this.adapter.getAttr(Jn.ARIA_PRESSED) !== null)
          throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");
        this.hasToggledAriaLabel = !0;
      } else
        this.adapter.setAttr(Jn.ARIA_PRESSED, String(this.isOn()));
    }, e.prototype.handleClick = function() {
      this.toggle(), this.adapter.notifyChange({ isOn: this.isOn() });
    }, e.prototype.isOn = function() {
      return this.adapter.hasClass(Ua.ICON_BUTTON_ON);
    }, e.prototype.toggle = function(n) {
      if (n === void 0 && (n = !this.isOn()), n ? this.adapter.addClass(Ua.ICON_BUTTON_ON) : this.adapter.removeClass(Ua.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var r = n ? this.adapter.getAttr(Jn.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(Jn.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr(Jn.ARIA_LABEL, r || "");
      } else
        this.adapter.setAttr(Jn.ARIA_PRESSED, "" + n);
    }, e;
  }(Pt)
), Kp = /* @__PURE__ */ be('<div class="mdc-icon-button__touch"></div>'), zp = /* @__PURE__ */ be('<div class="mdc-icon-button__ripple"></div> <!><!>', 1);
function Xp(t, e) {
  Re(e, !0);
  let n = () => {
  };
  function r(I) {
    return I === n;
  }
  let i = m(e, "use", 19, () => []), a = m(e, "class", 3, ""), o = m(e, "style", 3, ""), u = m(e, "ripple", 3, !0), l = m(e, "toggle", 3, !1), c = m(e, "pressed", 15, n), d = m(e, "touch", 3, !1), h = m(e, "displayFlex", 3, !0), f = m(e, "size", 3, "normal"), v = m(e, "component", 3, Mr), p = m(e, "tag", 19, () => e.href == null ? "button" : "a"), g = /* @__PURE__ */ qe(e, [
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
  ]), y, E, x = /* @__PURE__ */ xe(Ee({})), A = Ee({}), b = /* @__PURE__ */ xe(Ee({})), _ = se("SMUI:icon-button:context"), C = se("SMUI:icon-button:aria-describedby");
  const T = /* @__PURE__ */ ue(() => {
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
  let S = !!e.disabled;
  we(() => {
    if (S != !!e.disabled) {
      if (y) {
        const I = N();
        "blur" in I && I.blur();
      }
      S = !!e.disabled;
    }
  }), te("SMUI:icon:context", "icon-button");
  let w = null;
  we(() => {
    y && N() && l() !== w && (l() && !E ? (E = new Wp({
      addClass: Y,
      hasClass: U,
      notifyChange: (I) => {
        k(I), ze(N(), "SMUIIconButtonToggleChange", I);
      },
      removeClass: B,
      getAttr: Q,
      setAttr: F
    }), E.init()) : !l() && E && (E.destroy(), E = void 0, ie(x, {}, !0), ie(b, {}, !0)), w = l());
  }), we(() => {
    E && !r(c()) && E.isOn() !== c() && E.toggle(c());
  }), Kn(() => {
    E && E.destroy();
  });
  function U(I) {
    return I in s(x) ? s(x)[I] : N().classList.contains(I);
  }
  function Y(I) {
    s(x)[I] || (s(x)[I] = !0);
  }
  function B(I) {
    (!(I in s(x)) || s(x)[I]) && (s(x)[I] = !1);
  }
  function M(I, L) {
    A[I] != L && (L === "" || L == null ? delete A[I] : A[I] = L);
  }
  function Q(I) {
    return I in s(b) ? s(b)[I] ?? null : N().getAttribute(I);
  }
  function F(I, L) {
    s(b)[I] !== L && (s(b)[I] = L);
  }
  function k(I) {
    c(I.isOn);
  }
  function N() {
    return y.getElement();
  }
  var W = { getElement: N }, ne = le(), H = Z(ne);
  {
    let I = /* @__PURE__ */ ue(() => [
      [
        jt,
        {
          ripple: u(),
          unbounded: !0,
          color: e.color,
          disabled: !!e.disabled,
          addClass: Y,
          removeClass: B,
          addStyle: M
        }
      ],
      ...i()
    ]), L = /* @__PURE__ */ ue(() => He({
      "mdc-icon-button": !0,
      "mdc-icon-button--on": !r(c()) && c(),
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
      ...s(x),
      [a()]: !0
    })), ee = /* @__PURE__ */ ue(() => Object.entries(A).map(([me, V]) => `${me}: ${V};`).concat([o()]).join(" ")), D = /* @__PURE__ */ ue(() => r(c()) ? null : c() ? "true" : "false"), j = /* @__PURE__ */ ue(() => c() ? e.ariaLabelOn : e.ariaLabelOff);
    wr(H, v, (me, V) => {
      Te(
        V(me, rt(
          {
            get tag() {
              return p();
            },
            get use() {
              return s(I);
            },
            get class() {
              return s(L);
            },
            get style() {
              return s(ee);
            },
            get "aria-pressed"() {
              return s(D);
            },
            get "aria-label"() {
              return s(j);
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
          () => s(b),
          () => g,
          {
            onclick: (re) => {
              var X;
              E && E.handleClick(), _ === "top-app-bar:navigation" && ze(N(), "SMUITopAppBarIconButtonNav"), (X = e.onclick) == null || X.call(e, re);
            },
            children: (re, X) => {
              var he = zp(), ae = ye(Z(he), 2);
              _e(ae, () => e.children ?? pe);
              var ke = ye(ae);
              {
                var Ge = (Ne) => {
                  var Ae = Kp();
                  O(Ne, Ae);
                };
                ce(ke, (Ne) => {
                  d() && Ne(Ge);
                });
              }
              O(re, he);
            },
            $$slots: { default: !0 }
          }
        )),
        (re) => y = re,
        () => y
      );
    });
  }
  return O(t, ne), Me(W);
}
function Yp(t, e) {
  let n = m(e, "callback", 3, () => {
  }), r = m(e, "icon", 3, ""), i = m(e, "disabled", 3, !1);
  Xp(t, {
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
      Fp(a, {
        class: "material-icons",
        children: (u, l) => {
          var c = Wt();
          Fe(() => dt(c, r())), O(u, c);
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
var Zp = {
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
var Qp = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n) {
      var r = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
      return r.shakeAnimationEndHandler = function() {
        r.handleShakeAnimationEnd();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Zp;
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
  }(Pt)
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
var Jp = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n) {
      var r = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
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
  }(Pt)
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
var $p = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Hl = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, eg = {
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
var tg = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n) {
      return t.call(this, de(de({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return $p;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return eg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Hl;
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
      n > 0 && (n += Hl.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(n), this.adapter.addClass(r);
    }, e.prototype.closeNotch = function() {
      var n = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(n), this.adapter.removeNotchWidthProperty();
    }, e;
  }(Pt)
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
var Fo = {
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
}, ng = {
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
}, Ul = {
  LABEL_SCALE: 0.75
}, rg = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], ig = [
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
var Fl = ["mousedown", "touchstart"], Bl = ["click", "keydown"], ag = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n, r) {
      r === void 0 && (r = {});
      var i = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
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
        return ng;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Fo;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Ul;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var n = this.getNativeInput().type;
        return ig.indexOf(n) >= 0;
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
        for (var o = wt(Fl), u = o.next(); !u.done; u = o.next()) {
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
        for (var c = wt(Bl), d = c.next(); !d.done; d = c.next()) {
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
        for (var o = wt(Fl), u = o.next(); !u.done; u = o.next()) {
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
        for (var c = wt(Bl), d = c.next(); !d.done; d = c.next()) {
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
        return rg.indexOf(i) > -1 ? (r.styleValidity(!0), r.adapter.setLabelRequired(r.getNativeInput().required), !0) : !1;
      }), n.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(n) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (n) {
          var r = this.adapter.getLabelWidth() * Ul.LABEL_SCALE;
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
        a && o ? this.adapter.setInputAttr(Fo.ARIA_DESCRIBEDBY, o) : this.adapter.removeInputAttr(Fo.ARIA_DESCRIBEDBY);
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
  }(Pt)
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
var kl = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, og = {
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
var Vl = ["click", "keydown"], sg = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n) {
      var r = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
      return r.savedTabIndex = null, r.interactionHandler = function(i) {
        r.handleInteraction(i);
      }, r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return kl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return og;
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
        for (var i = wt(Vl), a = i.next(); !a.done; a = i.next()) {
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
        for (var i = wt(Vl), a = i.next(); !a.done; a = i.next()) {
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
      this.savedTabIndex && (n ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", kl.ICON_ROLE)));
    }, e.prototype.setAriaLabel = function(n) {
      this.adapter.setAttr("aria-label", n);
    }, e.prototype.setContent = function(n) {
      this.adapter.setContent(n);
    }, e.prototype.handleInteraction = function(n) {
      var r = n.key === "Enter" || n.keyCode === 13;
      (n.type === "click" || r) && (n.preventDefault(), this.adapter.notifyIconAction());
    }, e;
  }(Pt)
), lg = /* @__PURE__ */ be("<span><!></span>"), ug = /* @__PURE__ */ be("<label><!></label>");
function eo(t, e) {
  Re(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "floatAbove", 15, !1), o = m(e, "required", 15, !1), u = m(e, "wrapped", 3, !1), l = /* @__PURE__ */ qe(e, [
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
  ]), c, d = /* @__PURE__ */ xe(void 0), h = new Ta(), f = Ee({}), v = Ee({}), p = se("SMUI:generic:input:props") ?? {}, g = a();
  we(() => {
    s(d) && g !== a() && (g = a(), s(d).float(a()));
  });
  let y = o();
  we(() => {
    s(d) && y !== o() && (y = o(), s(d).setRequired(o()));
  });
  const E = se("SMUI:floating-label:mount"), x = se("SMUI:floating-label:unmount");
  at(() => {
    ie(
      d,
      new Qp({
        addClass: A,
        removeClass: b,
        getWidth: () => {
          var I, L;
          const W = Y(), ne = W.cloneNode(!0);
          (I = W.parentNode) == null || I.appendChild(ne), ne.classList.add("smui-floating-label--remove-transition"), ne.classList.add("smui-floating-label--force-size"), ne.classList.remove("mdc-floating-label--float-above");
          const H = ne.scrollWidth;
          return (L = W.parentNode) == null || L.removeChild(ne), H;
        },
        registerInteractionHandler: (W, ne) => h.on(Y(), W, ne),
        deregisterInteractionHandler: (W, ne) => h.off(Y(), W, ne)
      }),
      !0
    );
    const N = {
      get element() {
        return Y();
      },
      addStyle: _,
      removeStyle: C
    };
    return E && E(N), s(d).init(), () => {
      var W;
      x && x(N), (W = s(d)) == null || W.destroy(), h.clear();
    };
  });
  function A(N) {
    f[N] || (f[N] = !0);
  }
  function b(N) {
    (!(N in f) || f[N]) && (f[N] = !1);
  }
  function _(N, W) {
    v[N] != W && (W === "" || W == null ? delete v[N] : v[N] = W);
  }
  function C(N) {
    N in v && delete v[N];
  }
  function T(N) {
    var W;
    (W = s(d)) == null || W.shake(N);
  }
  function S(N) {
    a(N);
  }
  function w(N) {
    o(N);
  }
  function U() {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    return s(d).getWidth();
  }
  function Y() {
    return c;
  }
  var B = { shake: T, float: S, setRequired: w, getWidth: U, getElement: Y }, M = le(), Q = Z(M);
  {
    var F = (N) => {
      var W = lg();
      Be(W, (H, I) => ({ class: H, style: I, ...l }), [
        () => He({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": o(),
          ...f,
          [r()]: !0
        }),
        () => Object.entries(v).map(([H, I]) => `${H}: ${I};`).concat([i()]).join(" ")
      ]);
      var ne = ge(W);
      _e(ne, () => e.children ?? pe), Te(W, (H) => c = H, () => c), Ue(W, (H, I) => K == null ? void 0 : K(H, I), n), O(N, W);
    }, k = (N) => {
      var W = ug();
      Be(
        W,
        (H, I) => ({
          class: H,
          style: I,
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
          () => Object.entries(v).map(([H, I]) => `${H}: ${I};`).concat([i()]).join(" ")
        ]
      );
      var ne = ge(W);
      _e(ne, () => e.children ?? pe), Te(W, (H) => c = H, () => c), Ue(W, (H, I) => K == null ? void 0 : K(H, I), n), O(N, W);
    };
    ce(Q, (N) => {
      u() ? N(F) : N(k, !1);
    });
  }
  return O(t, M), Me(B);
}
var cg = /* @__PURE__ */ be("<div></div>");
function zc(t, e) {
  Re(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "active", 3, !1), o = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "active"
  ]), u, l = /* @__PURE__ */ xe(void 0), c = new Ta(), d = Ee({}), h = Ee({});
  at(() => (ie(
    l,
    new Jp({
      addClass: v,
      removeClass: p,
      hasClass: f,
      setStyle: g,
      registerEventHandler: (C, T) => c.on(A(), C, T),
      deregisterEventHandler: (C, T) => c.off(A(), C, T)
    }),
    !0
  ), s(l).init(), () => {
    var C;
    (C = s(l)) == null || C.destroy(), c.clear();
  }));
  function f(C) {
    return C in d ? d[C] : A().classList.contains(C);
  }
  function v(C) {
    d[C] || (d[C] = !0);
  }
  function p(C) {
    (!(C in d) || d[C]) && (d[C] = !1);
  }
  function g(C, T) {
    h[C] != T && (T === "" || T == null ? delete h[C] : h[C] = T);
  }
  function y() {
    var C;
    (C = s(l)) == null || C.activate();
  }
  function E() {
    var C;
    (C = s(l)) == null || C.deactivate();
  }
  function x(C) {
    var T;
    (T = s(l)) == null || T.setRippleCenter(C);
  }
  function A() {
    return u;
  }
  var b = { activate: y, deactivate: E, setRippleCenter: x, getElement: A }, _ = cg();
  return Be(_, (C, T) => ({ class: C, style: T, ...o }), [
    () => He({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...d,
      [r()]: !0
    }),
    () => Object.entries(h).map(([C, T]) => `${C}: ${T};`).concat([i()]).join(" ")
  ]), Te(_, (C) => u = C, () => u), Ue(_, (C, T) => K == null ? void 0 : K(C, T), n), O(t, _), Me(b);
}
var dg = /* @__PURE__ */ be('<div class="mdc-notched-outline__notch"><!></div>'), fg = /* @__PURE__ */ be('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function Xc(t, e) {
  Re(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "notched", 3, !1), a = m(e, "noLabel", 3, !1), o = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "notched",
    "noLabel",
    "children"
  ]), u, l = /* @__PURE__ */ xe(void 0), c = /* @__PURE__ */ xe(void 0), d = Ee({}), h = Ee({}), f;
  we(() => {
    s(c) !== f && (s(c) ? (s(c).addStyle("transition-duration", "0s"), v("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      s(c) && s(c).removeStyle("transition-duration");
    })) : p("mdc-notched-outline--upgraded"), f = s(c));
  }), te("SMUI:floating-label:mount", (S) => {
    ie(c, S, !0);
  }), te("SMUI:floating-label:unmount", () => {
    ie(c, void 0);
  }), at(() => (ie(
    l,
    new tg({
      addClass: v,
      removeClass: p,
      setNotchWidthProperty: (S) => g("width", S + "px"),
      removeNotchWidthProperty: () => y("width")
    }),
    !0
  ), s(l).init(), () => {
    var S;
    (S = s(l)) == null || S.destroy();
  }));
  function v(S) {
    d[S] || (d[S] = !0);
  }
  function p(S) {
    (!(S in d) || d[S]) && (d[S] = !1);
  }
  function g(S, w) {
    h[S] != w && (w === "" || w == null ? delete h[S] : h[S] = w);
  }
  function y(S) {
    S in h && delete h[S];
  }
  function E(S) {
    var w;
    (w = s(l)) == null || w.notch(S);
  }
  function x() {
    var S;
    (S = s(l)) == null || S.closeNotch();
  }
  function A() {
    return u;
  }
  var b = { notch: E, closeNotch: x, getElement: A }, _ = fg();
  Be(_, (S) => ({ class: S, ...o }), [
    () => He({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": i(),
      "mdc-notched-outline--no-label": a(),
      ...d,
      [r()]: !0
    })
  ]);
  var C = ye(ge(_), 2);
  {
    var T = (S) => {
      var w = dg(), U = ge(w);
      _e(U, () => e.children ?? pe), Fe((Y) => en(w, Y), [
        () => Object.entries(h).map(([Y, B]) => `${Y}: ${B};`).join(" ")
      ]), O(S, w);
    };
    ce(C, (S) => {
      a() || S(T);
    });
  }
  return Te(_, (S) => u = S, () => u), Ue(_, (S, w) => K == null ? void 0 : K(S, w), n), O(t, _), Me(b);
}
function Vs(t, e) {
  Re(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "component", 3, Mr), a = m(e, "tag", 3, "div"), o = m(e, "_smuiClass", 3, ""), u = m(e, "_smuiClassMap", 23, () => ({})), l = m(e, "_smuiContexts", 19, () => ({})), c = m(e, "_smuiProps", 19, () => ({})), d = /* @__PURE__ */ qe(e, [
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
  Object.entries(u()).forEach(([E, x]) => {
    const A = se(x);
    A && "subscribe" in A && f.push(A.subscribe((b) => {
      u()[E] = b;
    }));
  });
  for (let E in l())
    l().hasOwnProperty(E) && te(E, l()[E]);
  Kn(() => {
    for (const E of f)
      E();
  });
  function v() {
    return h.getElement();
  }
  var p = { getElement: v }, g = le(), y = Z(g);
  {
    let E = /* @__PURE__ */ ue(() => He({
      [o()]: !0,
      ...u(),
      [r()]: !0
    }));
    wr(y, i, (x, A) => {
      Te(
        A(x, rt(
          {
            get tag() {
              return a();
            },
            get use() {
              return n();
            },
            get class() {
              return s(E);
            }
          },
          c,
          () => d,
          {
            children: (b, _) => {
              var C = le(), T = Z(C);
              _e(T, () => e.children ?? pe), O(b, C);
            },
            $$slots: { default: !0 }
          }
        )),
        (b) => h = b,
        () => h
      );
    });
  }
  return O(t, g), Me(p);
}
function hg(t, e) {
  Re(e, !0);
  let n = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Te(
    Vs(t, rt({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => n, {
      children: (o, u) => {
        var l = le(), c = Z(l);
        _e(c, () => e.children ?? pe), O(o, l);
      },
      $$slots: { default: !0 }
    })),
    (o) => r = o,
    () => r
  ), Me(a);
}
function vg(t, e) {
  Re(e, !0);
  let n = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Te(
    Vs(t, rt(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => n,
      {
        children: (o, u) => {
          var l = le(), c = Z(l);
          _e(c, () => e.children ?? pe), O(o, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), Me(a);
}
function mg(t, e) {
  Re(e, !0);
  let n = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Te(
    Vs(t, rt(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => n,
      {
        children: (o, u) => {
          var l = le(), c = Z(l);
          _e(c, () => e.children ?? pe), O(o, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), Me(a);
}
var pg = /* @__PURE__ */ be("<input/>");
function gg(t, e) {
  Re(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "type", 3, "text"), a = m(e, "placeholder", 3, " "), o = m(e, "value", 15), u = m(e, "files", 15, null), l = m(e, "dirty", 15, !1), c = m(e, "invalid", 15, !1), d = m(e, "updateInvalid", 3, !0), h = m(e, "initialInvalid", 3, !1), f = m(e, "emptyValueNull", 19, () => o() === null), v = m(e, "emptyValueUndefined", 19, () => o() === void 0), p = /* @__PURE__ */ qe(e, [
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
  ]), g, y = Ee({}), E = Ee({});
  we(() => {
    i() === "file" ? delete E.value : E.value = o() == null ? "" : o();
  }), at(() => {
    d() && h() && c(U().matches(":invalid"));
  });
  function x(F) {
    return F === "" ? Number.NaN : +F;
  }
  function A(F) {
    if (i() === "file") {
      u(F.currentTarget.files);
      return;
    }
    if (F.currentTarget.value === "" && f()) {
      o(null);
      return;
    }
    if (F.currentTarget.value === "" && v()) {
      o(void 0);
      return;
    }
    switch (i()) {
      case "number":
      case "range":
        o(x(F.currentTarget.value));
        break;
      default:
        o(F.currentTarget.value);
        break;
    }
  }
  function b(F) {
    (i() === "file" || i() === "range") && A(F), l(!0), d() && c(U().matches(":invalid"));
  }
  function _(F) {
    return F in y ? y[F] ?? null : U().getAttribute(F);
  }
  function C(F, k) {
    y[F] !== k && (y[F] = k);
  }
  function T(F) {
    (!(F in y) || y[F] != null) && (y[F] = void 0);
  }
  function S() {
    U().focus();
  }
  function w() {
    U().blur();
  }
  function U() {
    return g;
  }
  var Y = { getAttr: _, addAttr: C, removeAttr: T, focus: S, blur: w, getElement: U }, B = pg(), M = (F) => {
    var k;
    i() !== "file" && A(F), (k = e.oninput) == null || k.call(e, F);
  }, Q = (F) => {
    var k;
    b(F), (k = e.onchange) == null || k.call(e, F);
  };
  return Be(
    B,
    (F) => ({
      class: F,
      type: i(),
      placeholder: a(),
      ...E,
      ...y,
      ...p,
      oninput: M,
      onchange: Q
    }),
    [
      () => He({ "mdc-text-field__input": !0, [r()]: !0 })
    ],
    void 0,
    void 0,
    !0
  ), Te(B, (F) => g = F, () => g), Ue(B, (F, k) => K == null ? void 0 : K(F, k), n), O(t, B), Me(Y);
}
var bg = /* @__PURE__ */ be("<textarea></textarea>");
function Ig(t, e) {
  Re(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "value", 15, ""), o = m(e, "dirty", 15, !1), u = m(e, "invalid", 15, !1), l = m(e, "updateInvalid", 3, !0), c = m(e, "initialInvalid", 3, !1), d = m(e, "resizable", 3, !0), h = /* @__PURE__ */ qe(e, [
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
  ]), f, v = Ee({});
  at(() => {
    l() && c() && u(b().matches(":invalid"));
  });
  function p() {
    o(!0), l() && u(b().matches(":invalid"));
  }
  function g(S) {
    return S in v ? v[S] ?? null : b().getAttribute(S);
  }
  function y(S, w) {
    v[S] !== w && (v[S] = w);
  }
  function E(S) {
    (!(S in v) || v[S] != null) && (v[S] = void 0);
  }
  function x() {
    b().focus();
  }
  function A() {
    b().blur();
  }
  function b() {
    return f;
  }
  var _ = { getAttr: g, addAttr: y, removeAttr: E, focus: x, blur: A, getElement: b }, C = bg(), T = (S) => {
    var w;
    p(), (w = e.onchange) == null || w.call(e, S);
  };
  return Be(
    C,
    (S) => ({
      class: S,
      style: `${d() ? "" : "resize: none; "}${i()}`,
      ...v,
      ...h,
      onchange: T
    }),
    [
      () => He({ "mdc-text-field__input": !0, [r()]: !0 })
    ]
  ), Te(C, (S) => f = S, () => f), Ue(C, (S, w) => K == null ? void 0 : K(S, w), n), Aa(() => ma(C, a)), O(t, C), Me(_);
}
var yg = /* @__PURE__ */ be('<span class="mdc-text-field__ripple"></span>'), _g = /* @__PURE__ */ be("<!> <!>", 1), Eg = /* @__PURE__ */ be("<span><!> <!></span>"), Ag = /* @__PURE__ */ be("<!> <!> <!>", 1), Cg = /* @__PURE__ */ be("<label><!> <!> <!> <!> <!> <!> <!></label>"), Sg = /* @__PURE__ */ be("<div><!> <!> <!> <!> <!></div>"), xg = /* @__PURE__ */ be("<!> <!>", 1);
function Gl(t, e) {
  Re(e, !0);
  const { applyPassive: n } = Kc;
  let r = () => {
  };
  function i(q) {
    return q === r;
  }
  let a = m(e, "use", 19, () => []), o = m(e, "class", 3, ""), u = m(e, "style", 3, ""), l = m(e, "ripple", 3, !0), c = m(e, "disabled", 3, !1), d = m(e, "required", 3, !1), h = m(e, "textarea", 3, !1), f = m(e, "variant", 19, () => h() ? "outlined" : "standard"), v = m(e, "noLabel", 3, !1), p = m(e, "type", 3, "text"), g = m(e, "value", 15), y = m(e, "files", 15, r), E = m(e, "invalid", 15, r), x = m(e, "updateInvalid", 19, () => i(E())), A = m(e, "initialInvalid", 3, !1), b = m(e, "dirty", 15, !1), _ = m(e, "validateOnValueChange", 19, x), C = m(e, "useNativeValidation", 19, x), T = m(e, "withLeadingIcon", 3, r), S = m(e, "withTrailingIcon", 3, r), w = m(e, "input", 7), U = m(e, "floatingLabel", 7), Y = m(e, "lineRipple", 7), B = m(e, "notchedOutline", 7), M = /* @__PURE__ */ qe(e, [
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
  const Q = g() !== void 0 || g() === void 0 && e.input$emptyValueUndefined || !i(y());
  i(y()) && y(null), i(E()) && E(!1);
  let F, k = /* @__PURE__ */ xe(void 0), N = new Ta(), W = Ee({}), ne = Ee({}), H = /* @__PURE__ */ xe(void 0), I = /* @__PURE__ */ xe(!1), L = /* @__PURE__ */ xe(Ee(A())), ee = se("SMUI:addLayoutListener"), D, j, me = new Promise((q) => j = q), V, re, X, he;
  const ae = /* @__PURE__ */ ue(() => w() && w().getElement());
  we(() => {
    (b() || s(L) || !x()) && s(k) && s(k).isValid() !== !E() && (x() ? E(!s(k).isValid()) : s(k).setValid(!E()));
  }), we(() => {
    s(k) && s(k).getValidateOnValueChange() !== _() && s(k).setValidateOnValueChange(i(_()) ? !1 : _());
  }), we(() => {
    s(k) && s(k).setUseNativeValidation(i(C()) ? !0 : C());
  }), we(() => {
    s(k) && s(k).setDisabled(c());
  });
  let ke = g();
  we(() => {
    if (s(k) && Q && ke !== g()) {
      ke = g();
      const q = `${g() == null ? "" : g()}`;
      s(k).getValue() !== q && s(k).setValue(q);
    }
  }), ee && (D = ee(P)), te("SMUI:textfield:leading-icon:mount", (q) => {
    V = q;
  }), te("SMUI:textfield:leading-icon:unmount", () => {
    V = void 0;
  }), te("SMUI:textfield:trailing-icon:mount", (q) => {
    re = q;
  }), te("SMUI:textfield:trailing-icon:unmount", () => {
    re = void 0;
  }), te("SMUI:textfield:helper-text:id", (q) => {
    ie(H, q, !0);
  }), te("SMUI:textfield:helper-text:mount", (q) => {
    X = q;
  }), te("SMUI:textfield:helper-text:unmount", () => {
    ie(H, void 0), X = void 0;
  }), te("SMUI:textfield:character-counter:mount", (q) => {
    he = q;
  }), te("SMUI:textfield:character-counter:unmount", () => {
    he = void 0;
  }), at(() => {
    var q;
    if (ie(
      k,
      new ag(
        {
          // getRootAdapterMethods_
          addClass: Ne,
          removeClass: Ae,
          hasClass: Ge,
          registerTextFieldInteractionHandler: (z, De) => N.on(G(), z, De),
          deregisterTextFieldInteractionHandler: (z, De) => N.off(G(), z, De),
          registerValidationAttributeChangeHandler: (z) => {
            const De = (Ot) => Ot.map((It) => It.attributeName).filter((It) => It), ut = new MutationObserver((Ot) => {
              C() && z(De(Ot));
            }), pt = { attributes: !0 };
            return w() && ut.observe(w().getElement(), pt), ut;
          },
          deregisterValidationAttributeChangeHandler: (z) => {
            z.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var z;
            return ((z = w()) == null ? void 0 : z.getElement()) ?? null;
          },
          setInputAttr: (z, De) => {
            var ut;
            (ut = w()) == null || ut.addAttr(z, De);
          },
          removeInputAttr: (z) => {
            var De;
            (De = w()) == null || De.removeAttr(z);
          },
          isFocused: () => {
            var z;
            return document.activeElement === ((z = w()) == null ? void 0 : z.getElement());
          },
          registerInputInteractionHandler: (z, De) => {
            var pt;
            const ut = (pt = w()) == null ? void 0 : pt.getElement();
            if (ut) {
              const Ot = n();
              N.on(ut, z, De, typeof Ot == "boolean" ? { capture: Ot } : Ot);
            }
          },
          deregisterInputInteractionHandler: (z, De) => {
            var pt;
            const ut = (pt = w()) == null ? void 0 : pt.getElement();
            ut && N.off(ut, z, De);
          },
          // getLabelAdapterMethods_
          floatLabel: (z) => U() && U().float(z),
          getLabelWidth: () => U() ? U().getWidth() : 0,
          hasLabel: () => !!U(),
          shakeLabel: (z) => U() && U().shake(z),
          setLabelRequired: (z) => U() && U().setRequired(z),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => Y() && Y().activate(),
          deactivateLineRipple: () => Y() && Y().deactivate(),
          setLineRippleTransformOrigin: (z) => Y() && Y().setRippleCenter(z),
          // getOutlineAdapterMethods_
          closeOutline: () => B() && B().closeNotch(),
          hasOutline: () => !!B(),
          notchOutline: (z) => B() && B().notch(z)
        },
        {
          get helperText() {
            return X;
          },
          get characterCounter() {
            return he;
          },
          get leadingIcon() {
            return V;
          },
          get trailingIcon() {
            return re;
          }
        }
      ),
      !0
    ), Q) {
      if (w() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (q = s(k)) == null || q.init();
    } else
      vo().then(() => {
        var z;
        if (w() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (z = s(k)) == null || z.init();
      });
    return j(), () => {
      var z;
      (z = s(k)) == null || z.destroy(), N.clear();
    };
  }), Kn(() => {
    D && D();
  });
  function Ge(q) {
    return q in W ? W[q] ?? null : G().classList.contains(q);
  }
  function Ne(q) {
    W[q] || (W[q] = !0);
  }
  function Ae(q) {
    (!(q in W) || W[q]) && (W[q] = !1);
  }
  function oe(q, z) {
    ne[q] != z && (z === "" || z == null ? delete ne[q] : ne[q] = z);
  }
  function Le() {
    var q;
    (q = w()) == null || q.focus();
  }
  function Ze() {
    var q;
    (q = w()) == null || q.blur();
  }
  function P() {
    if (s(k)) {
      const q = s(k).shouldFloat;
      s(k).notchOutline(q);
    }
  }
  function G() {
    return F;
  }
  var J = { focus: Le, blur: Ze, layout: P, getElement: G }, Ce = xg(), Nt = Z(Ce);
  {
    var bt = (q) => {
      var z = Cg();
      Be(z, (We, et, Xe) => ({ class: We, style: et, for: void 0, ...Xe }), [
        () => He({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": c(),
          "mdc-text-field--textarea": h(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !h(),
          "mdc-text-field--no-label": v() || e.label == null,
          "mdc-text-field--label-floating": s(I) || g() != null && g() !== "",
          "mdc-text-field--with-leading-icon": i(T()) ? e.leadingIcon : T(),
          "mdc-text-field--with-trailing-icon": i(S()) ? e.trailingIcon : S(),
          "mdc-text-field--with-internal-counter": h() && e.internalCounter,
          "mdc-text-field--invalid": E(),
          ...W,
          [o()]: !0
        }),
        () => Object.entries(ne).map(([We, et]) => `${We}: ${et};`).concat([u()]).join(" "),
        () => ji(M, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var De = ge(z);
      {
        var ut = (We) => {
          var et = _g(), Xe = Z(et);
          {
            var xt = (yt) => {
              var ht = yg();
              O(yt, ht);
            };
            ce(Xe, (yt) => {
              f() === "filled" && yt(xt);
            });
          }
          var cn = ye(Xe, 2);
          {
            var tt = (yt) => {
              {
                let ht = /* @__PURE__ */ ue(() => s(I) || g() != null && g() !== "" && (typeof g() != "number" || !isNaN(g()))), Je = /* @__PURE__ */ ue(() => st(M, "label$"));
                Te(
                  eo(yt, rt(
                    {
                      get floatAbove() {
                        return s(ht);
                      },
                      get required() {
                        return d();
                      },
                      wrapped: !0
                    },
                    () => s(Je),
                    {
                      children: (Tt, Ln) => {
                        var rn = le(), ot = Z(rn);
                        {
                          var kt = (zt) => {
                          }, gn = (zt) => {
                            var Nr = le(), bn = Z(Nr);
                            {
                              var cr = (In) => {
                                var Xn = Wt();
                                Fe(() => dt(Xn, e.label)), O(In, Xn);
                              }, Yi = (In) => {
                                var Xn = le(), Un = Z(Xn);
                                _e(Un, () => e.label), O(In, Xn);
                              };
                              ce(
                                bn,
                                (In) => {
                                  typeof e.label == "string" ? In(cr) : In(Yi, !1);
                                },
                                !0
                              );
                            }
                            O(zt, Nr);
                          };
                          ce(ot, (zt) => {
                            e.label == null ? zt(kt) : zt(gn, !1);
                          });
                        }
                        O(Tt, rn);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (Tt) => U(Tt),
                  () => U()
                );
              }
            };
            ce(cn, (yt) => {
              !v() && e.label != null && yt(tt);
            });
          }
          O(We, et);
        };
        ce(De, (We) => {
          !h() && f() !== "outlined" && We(ut);
        });
      }
      var pt = ye(De, 2);
      {
        var Ot = (We) => {
          {
            let et = /* @__PURE__ */ ue(() => v() || e.label == null), Xe = /* @__PURE__ */ ue(() => st(M, "outline$"));
            Te(
              Xc(We, rt(
                {
                  get noLabel() {
                    return s(et);
                  }
                },
                () => s(Xe),
                {
                  children: (xt, cn) => {
                    var tt = le(), yt = Z(tt);
                    {
                      var ht = (Je) => {
                        {
                          let Tt = /* @__PURE__ */ ue(() => s(I) || g() != null && g() !== "" && (typeof g() != "number" || !isNaN(g()))), Ln = /* @__PURE__ */ ue(() => st(M, "label$"));
                          Te(
                            eo(Je, rt(
                              {
                                get floatAbove() {
                                  return s(Tt);
                                },
                                get required() {
                                  return d();
                                },
                                wrapped: !0
                              },
                              () => s(Ln),
                              {
                                children: (rn, ot) => {
                                  var kt = le(), gn = Z(kt);
                                  {
                                    var zt = (bn) => {
                                    }, Nr = (bn) => {
                                      var cr = le(), Yi = Z(cr);
                                      {
                                        var In = (Un) => {
                                          var Hr = Wt();
                                          Fe(() => dt(Hr, e.label)), O(Un, Hr);
                                        }, Xn = (Un) => {
                                          var Hr = le(), _o = Z(Hr);
                                          _e(_o, () => e.label), O(Un, Hr);
                                        };
                                        ce(
                                          Yi,
                                          (Un) => {
                                            typeof e.label == "string" ? Un(In) : Un(Xn, !1);
                                          },
                                          !0
                                        );
                                      }
                                      O(bn, cr);
                                    };
                                    ce(gn, (bn) => {
                                      e.label == null ? bn(zt) : bn(Nr, !1);
                                    });
                                  }
                                  O(rn, kt);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (rn) => U(rn),
                            () => U()
                          );
                        }
                      };
                      ce(yt, (Je) => {
                        !v() && e.label != null && Je(ht);
                      });
                    }
                    O(xt, tt);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (xt) => B(xt),
              () => B()
            );
          }
        };
        ce(pt, (We) => {
          (h() || f() === "outlined") && We(Ot);
        });
      }
      var It = ye(pt, 2);
      yi(It, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (We, et) => {
          var Xe = le(), xt = Z(Xe);
          _e(xt, () => e.leadingIcon ?? pe), O(We, Xe);
        },
        $$slots: { default: !0 }
      });
      var zn = ye(It, 2);
      _e(zn, () => e.children ?? pe);
      var ft = ye(zn, 2);
      {
        var Rt = (We) => {
          var et = Eg(), Xe = ge(et);
          {
            let cn = /* @__PURE__ */ ue(() => st(M, "input$"));
            Te(
              Ig(Xe, rt(
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
                    return s(H);
                  },
                  get "aria-describedby"() {
                    return s(H);
                  }
                },
                () => s(cn),
                {
                  onblur: (tt) => {
                    var yt;
                    ie(I, !1), ie(L, !0), ze(G(), "blur", tt), (yt = e.input$onblur) == null || yt.call(e, tt);
                  },
                  onfocus: (tt) => {
                    var yt;
                    ie(I, !0), ze(G(), "focus", tt), (yt = e.input$onfocus) == null || yt.call(e, tt);
                  },
                  get value() {
                    return g();
                  },
                  set value(tt) {
                    g(tt);
                  },
                  get dirty() {
                    return b();
                  },
                  set dirty(tt) {
                    b(tt);
                  },
                  get invalid() {
                    return E();
                  },
                  set invalid(tt) {
                    E(tt);
                  }
                }
              )),
              (tt) => w(tt),
              () => w()
            );
          }
          var xt = ye(Xe, 2);
          _e(xt, () => e.internalCounter ?? pe), Fe((cn) => Ku(et, 1, cn), [
            () => Wu(He({
              "mdc-text-field__resizer": !("input$resizable" in M) || e.input$resizable
            }))
          ]), O(We, et);
        }, Bt = (We) => {
          var et = Ag(), Xe = Z(et);
          {
            var xt = (ht) => {
              var Je = le(), Tt = Z(Je);
              {
                var Ln = (ot) => {
                  vg(ot, {
                    children: (kt, gn) => {
                      var zt = Wt();
                      Fe(() => dt(zt, e.prefix)), O(kt, zt);
                    },
                    $$slots: { default: !0 }
                  });
                }, rn = (ot) => {
                  var kt = le(), gn = Z(kt);
                  _e(gn, () => e.prefix ?? pe), O(ot, kt);
                };
                ce(Tt, (ot) => {
                  typeof e.prefix == "string" ? ot(Ln) : ot(rn, !1);
                });
              }
              O(ht, Je);
            };
            ce(Xe, (ht) => {
              e.prefix != null && ht(xt);
            });
          }
          var cn = ye(Xe, 2);
          {
            let ht = /* @__PURE__ */ ue(() => st(M, "input$"));
            Te(
              gg(cn, rt(
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
                    return s(H);
                  },
                  get "aria-describedby"() {
                    return s(H);
                  }
                },
                () => v() && e.label != null && typeof e.label == "string" ? { placeholder: e.label } : {},
                () => s(ht),
                {
                  onblur: (Je) => {
                    var Tt;
                    ie(I, !1), ie(L, !0), ze(G(), "blur", Je), (Tt = e.input$onblur) == null || Tt.call(e, Je);
                  },
                  onfocus: (Je) => {
                    var Tt;
                    ie(I, !0), ze(G(), "focus", Je), (Tt = e.input$onfocus) == null || Tt.call(e, Je);
                  },
                  get value() {
                    return g();
                  },
                  set value(Je) {
                    g(Je);
                  },
                  get files() {
                    return y();
                  },
                  set files(Je) {
                    y(Je);
                  },
                  get dirty() {
                    return b();
                  },
                  set dirty(Je) {
                    b(Je);
                  },
                  get invalid() {
                    return E();
                  },
                  set invalid(Je) {
                    E(Je);
                  }
                }
              )),
              (Je) => w(Je),
              () => w()
            );
          }
          var tt = ye(cn, 2);
          {
            var yt = (ht) => {
              var Je = le(), Tt = Z(Je);
              {
                var Ln = (ot) => {
                  mg(ot, {
                    children: (kt, gn) => {
                      var zt = Wt();
                      Fe(() => dt(zt, e.suffix)), O(kt, zt);
                    },
                    $$slots: { default: !0 }
                  });
                }, rn = (ot) => {
                  var kt = le(), gn = Z(kt);
                  _e(gn, () => e.suffix ?? pe), O(ot, kt);
                };
                ce(Tt, (ot) => {
                  typeof e.suffix == "string" ? ot(Ln) : ot(rn, !1);
                });
              }
              O(ht, Je);
            };
            ce(tt, (ht) => {
              e.suffix != null && ht(yt);
            });
          }
          O(We, et);
        };
        ce(ft, (We) => {
          h() && typeof g() == "string" ? We(Rt) : We(Bt, !1);
        });
      }
      var Kt = ye(ft, 2);
      yi(Kt, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (We, et) => {
          var Xe = le(), xt = Z(Xe);
          _e(xt, () => e.trailingIcon ?? pe), O(We, Xe);
        },
        $$slots: { default: !0 }
      });
      var Pr = ye(Kt, 2);
      {
        var Hn = (We) => {
          {
            let et = /* @__PURE__ */ ue(() => st(M, "ripple$"));
            Te(zc(We, rt(() => s(et))), (Xe) => Y(Xe), () => Y());
          }
        };
        ce(Pr, (We) => {
          !h() && f() !== "outlined" && l() && We(Hn);
        });
      }
      Te(z, (We) => F = We, () => F), Ue(z, (We, et) => jt == null ? void 0 : jt(We, et), () => ({
        ripple: !h() && f() === "filled",
        unbounded: !1,
        addClass: Ne,
        removeClass: Ae,
        addStyle: oe,
        eventTarget: s(ae),
        activeTarget: s(ae),
        initPromise: me
      })), Ue(z, (We, et) => K == null ? void 0 : K(We, et), a), O(q, z);
    }, pn = (q) => {
      var z = Sg();
      Be(z, (ft, Rt, Bt) => ({ class: ft, style: Rt, ...Bt }), [
        () => He({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": c(),
          "mdc-text-field--textarea": h(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !h(),
          "mdc-text-field--no-label": v() || e.label == null,
          "mdc-text-field--with-leading-icon": e.leadingIcon,
          "mdc-text-field--with-trailing-icon": e.trailingIcon,
          "mdc-text-field--invalid": E(),
          ...W,
          [o()]: !0
        }),
        () => Object.entries(ne).map(([ft, Rt]) => `${ft}: ${Rt};`).concat([u()]).join(" "),
        () => ji(M, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var De = ge(z);
      {
        var ut = (ft) => {
          var Rt = le(), Bt = Z(Rt);
          _e(Bt, () => e.label ?? pe), O(ft, Rt);
        };
        ce(De, (ft) => {
          typeof e.label != "string" && ft(ut);
        });
      }
      var pt = ye(De, 2);
      yi(pt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (ft, Rt) => {
          var Bt = le(), Kt = Z(Bt);
          _e(Kt, () => e.leadingIcon ?? pe), O(ft, Bt);
        },
        $$slots: { default: !0 }
      });
      var Ot = ye(pt, 2);
      _e(Ot, () => e.children ?? pe);
      var It = ye(Ot, 2);
      yi(It, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (ft, Rt) => {
          var Bt = le(), Kt = Z(Bt);
          _e(Kt, () => e.trailingIcon ?? pe), O(ft, Bt);
        },
        $$slots: { default: !0 }
      });
      var zn = ye(It, 2);
      _e(zn, () => e.line ?? pe), Te(z, (ft) => F = ft, () => F), Ue(z, (ft, Rt) => jt == null ? void 0 : jt(ft, Rt), () => ({
        ripple: l(),
        unbounded: !1,
        addClass: Ne,
        removeClass: Ae,
        addStyle: oe
      })), Ue(z, (ft, Rt) => K == null ? void 0 : K(ft, Rt), a), O(q, z);
    };
    ce(Nt, (q) => {
      Q ? q(bt) : q(pn, !1);
    });
  }
  var ve = ye(Nt, 2);
  {
    var Ie = (q) => {
      {
        let z = /* @__PURE__ */ ue(() => st(M, "helperLine$"));
        hg(q, rt(() => s(z), {
          children: (De, ut) => {
            var pt = le(), Ot = Z(pt);
            _e(Ot, () => e.helper ?? pe), O(De, pt);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    ce(ve, (q) => {
      e.helper && q(Ie);
    });
  }
  return O(t, Ce), Me(J);
}
var Tg = /* @__PURE__ */ be("<i><!></i>");
function Lg(t, e) {
  Re(e, !0);
  const n = () => Dt(p, "$leadingStore", r), [r, i] = xn();
  let a = m(e, "use", 19, () => []), o = m(e, "class", 3, ""), u = m(e, "tabindex", 19, () => e.role === "button" ? 0 : -1), l = m(e, "disabled", 3, !1), c = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "role",
    "tabindex",
    "disabled",
    "children"
  ]), d, h = /* @__PURE__ */ xe(void 0), f = new Ta(), v = Ee({});
  const p = se("SMUI:textfield:icon:leading"), g = n();
  let y = /* @__PURE__ */ xe(void 0);
  const E = /* @__PURE__ */ ue(() => ({ role: e.role, tabindex: u() })), x = se("SMUI:textfield:leading-icon:mount"), A = se("SMUI:textfield:leading-icon:unmount"), b = se("SMUI:textfield:trailing-icon:mount"), _ = se("SMUI:textfield:trailing-icon:unmount");
  at(() => (ie(
    h,
    new sg({
      getAttr: C,
      setAttr: T,
      removeAttr: S,
      setContent: (k) => {
        ie(y, k, !0);
      },
      registerInteractionHandler: (k, N) => f.on(w(), k, N),
      deregisterInteractionHandler: (k, N) => f.off(w(), k, N),
      notifyIconAction: () => ze(w(), "SMUITextFieldIcon")
    }),
    !0
  ), g ? x && x(s(h)) : b && b(s(h)), s(h).init(), () => {
    var k;
    s(h) && (g ? A && A(s(h)) : _ && _(s(h))), (k = s(h)) == null || k.destroy(), f.clear();
  }));
  function C(k) {
    return k in v ? v[k] ?? null : w().getAttribute(k);
  }
  function T(k, N) {
    v[k] !== N && (v[k] = N);
  }
  function S(k) {
    (!(k in v) || v[k] != null) && (v[k] = void 0);
  }
  function w() {
    return d;
  }
  var U = { getElement: w }, Y = Tg();
  Be(
    Y,
    (k) => ({
      class: k,
      "aria-hidden": u() === -1 ? "true" : "false",
      "aria-disabled": e.role === "button" ? l() ? "true" : "false" : void 0,
      ...s(E),
      ...v,
      ...c
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
  var B = ge(Y);
  {
    var M = (k) => {
      var N = le(), W = Z(N);
      _e(W, () => e.children ?? pe), O(k, N);
    }, Q = (k) => {
      var N = Wt();
      Fe(() => dt(N, s(y))), O(k, N);
    };
    ce(B, (k) => {
      s(y) == null ? k(M) : k(Q, !1);
    });
  }
  Te(Y, (k) => d = k, () => d), Ue(Y, (k, N) => K == null ? void 0 : K(k, N), a), O(t, Y);
  var F = Me(U);
  return i(), F;
}
function wg(t, e) {
  Re(e, !0);
  let n = m(e, "placeholder", 3, ""), r = m(e, "label", 3, ""), i = m(e, "icon", 3, ""), a = m(e, "value", 15, ""), o = m(e, "variant", 3, "standard"), u = m(e, "styles", 3, "");
  var l = le(), c = Z(l);
  {
    var d = (f) => {
      {
        const v = (g) => {
          Lg(g, {
            class: "material-icons",
            children: (y, E) => {
              var x = Wt();
              Fe(() => dt(x, i())), O(y, x);
            },
            $$slots: { default: !0 }
          });
        };
        let p = /* @__PURE__ */ ue(() => `width: 100%; ${u()}`);
        Gl(f, {
          get label() {
            return r();
          },
          get placeholder() {
            return n();
          },
          get style() {
            return s(p);
          },
          get variant() {
            return o();
          },
          get value() {
            return a();
          },
          set value(g) {
            a(g);
          },
          leadingIcon: v,
          $$slots: { leadingIcon: !0 }
        });
      }
    }, h = (f) => {
      Gl(f, {
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
        get value() {
          return a();
        },
        set value(v) {
          a(v);
        }
      });
    };
    ce(c, (f) => {
      i() ? f(d) : f(h, !1);
    });
  }
  O(t, l), Me();
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
var Og = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, Rg = {
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
}, ia = {
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
}, At;
(function(t) {
  t[t.BOTTOM = 1] = "BOTTOM", t[t.CENTER = 2] = "CENTER", t[t.RIGHT = 4] = "RIGHT", t[t.FLIP_RTL = 8] = "FLIP_RTL";
})(At || (At = {}));
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
var fr, $n, Ke = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
fr = {}, fr["" + Ke.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", fr["" + Ke.LIST_ITEM_CLASS] = "mdc-list-item", fr["" + Ke.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", fr["" + Ke.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", fr["" + Ke.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", fr["" + Ke.ROOT] = "mdc-list";
var mi = ($n = {}, $n["" + Ke.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", $n["" + Ke.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", $n["" + Ke.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", $n["" + Ke.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", $n["" + Ke.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", $n["" + Ke.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", $n["" + Ke.ROOT] = "mdc-deprecated-list", $n), hr = {
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
    .` + Ke.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + Ke.LIST_ITEM_CLASS + ` a,
    .` + mi[Ke.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + mi[Ke.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + Ke.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + Ke.LIST_ITEM_CLASS + ` a,
    .` + Ke.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + Ke.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + mi[Ke.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + mi[Ke.LIST_ITEM_CLASS] + ` a,
    .` + mi[Ke.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + mi[Ke.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
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
var Mg = ["input", "button", "textarea", "select"], yn = function(t) {
  var e = t.target;
  if (e) {
    var n = ("" + e.tagName).toLowerCase();
    Mg.indexOf(n) === -1 && t.preventDefault();
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
function Dg() {
  var t = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return t;
}
function Pg(t, e) {
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
function cs(t, e) {
  var n = t.nextChar, r = t.focusItemAtIndex, i = t.sortedIndexByFirstChar, a = t.focusedItemIndex, o = t.skipFocus, u = t.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    Zc(e);
  }, _t.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + n;
  var l;
  return e.typeaheadBuffer.length === 1 ? l = Ng(i, a, u, e) : l = Hg(i, u, e), l !== -1 && !o && r(l), l;
}
function Ng(t, e, n, r) {
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
function Hg(t, e, n) {
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
function Yc(t) {
  return t.typeaheadBuffer.length > 0;
}
function Zc(t) {
  t.typeaheadBuffer = "";
}
function jl(t, e) {
  var n = t.event, r = t.isTargetListItem, i = t.focusedItemIndex, a = t.focusItemAtIndex, o = t.sortedIndexByFirstChar, u = t.isItemAtIndexDisabled, l = gt(n) === "ArrowLeft", c = gt(n) === "ArrowUp", d = gt(n) === "ArrowRight", h = gt(n) === "ArrowDown", f = gt(n) === "Home", v = gt(n) === "End", p = gt(n) === "Enter", g = gt(n) === "Spacebar";
  if (n.altKey || n.ctrlKey || n.metaKey || l || c || d || h || f || v || p)
    return -1;
  var y = !g && n.key.length === 1;
  if (y) {
    yn(n);
    var E = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: n.key.toLowerCase(),
      sortedIndexByFirstChar: o,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return cs(E, e);
  }
  if (!g)
    return -1;
  r && yn(n);
  var x = r && Yc(e);
  if (x) {
    var E = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: " ",
      sortedIndexByFirstChar: o,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return cs(E, e);
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
function Ug(t) {
  return t instanceof Array;
}
var Fg = ["Alt", "Control", "Meta", "Shift"];
function ql(t) {
  var e = new Set(t ? Fg.filter(function(n) {
    return t.getModifierState(n);
  }) : []);
  return function(n) {
    return n.every(function(r) {
      return e.has(r);
    }) && n.length === e.size;
  };
}
var Bg = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n) {
      var r = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
      return r.wrapFocus = !1, r.isVertical = !0, r.isSingleSelectionList = !1, r.areDisabledItemsFocusable = !0, r.selectedIndex = _t.UNSET_INDEX, r.focusedItemIndex = _t.UNSET_INDEX, r.useActivatedClass = !1, r.useSelectedAttr = !1, r.ariaCurrentAttrValue = null, r.isCheckboxList = !1, r.isRadioList = !1, r.lastSelectedIndex = null, r.hasTypeahead = !1, r.typeaheadState = Dg(), r.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return hr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ke;
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
        var r = this.adapter.listItemAtIndexHasClass(n, Ke.LIST_ITEM_ACTIVATED_CLASS);
        r && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = n;
      }
    }, e.prototype.getSelectedIndexFromDOM = function() {
      for (var n = _t.UNSET_INDEX, r = this.adapter.getListItemCount(), i = 0; i < r; i++) {
        var a = this.adapter.listItemAtIndexHasClass(i, Ke.LIST_ITEM_SELECTED_CLASS), o = this.adapter.listItemAtIndexHasClass(i, Ke.LIST_ITEM_ACTIVATED_CLASS);
        if (a || o) {
          n = i;
          break;
        }
      }
      return n;
    }, e.prototype.setHasTypeahead = function(n) {
      this.hasTypeahead = n, n && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex());
    }, e.prototype.isTypeaheadInProgress = function() {
      return this.hasTypeahead && Yc(this.typeaheadState);
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
      return this.adapter.listItemAtIndexHasClass(n, Ke.LIST_ITEM_DISABLED_CLASS);
    }, e.prototype.handleKeydown = function(n, r, i) {
      var a = this, o, u = gt(n) === "ArrowLeft", l = gt(n) === "ArrowUp", c = gt(n) === "ArrowRight", d = gt(n) === "ArrowDown", h = gt(n) === "Home", f = gt(n) === "End", v = gt(n) === "Enter", p = gt(n) === "Spacebar", g = this.isVertical && d || !this.isVertical && c, y = this.isVertical && l || !this.isVertical && u, E = n.key === "A" || n.key === "a", x = ql(n);
      if (this.adapter.isRootFocused()) {
        if ((y || f) && x([]))
          n.preventDefault(), this.focusLastElement();
        else if ((g || h) && x([]))
          n.preventDefault(), this.focusFirstElement();
        else if (y && x(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var A = this.focusLastElement();
          A !== -1 && this.setSelectedIndexOnAction(A, !1);
        } else if (g && x(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var A = this.focusFirstElement();
          A !== -1 && this.setSelectedIndexOnAction(A, !1);
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
          jl(b, this.typeaheadState);
        }
        return;
      }
      var _ = this.adapter.getFocusedElementIndex();
      if (!(_ === -1 && (_ = i, _ < 0))) {
        if (g && x([]))
          yn(n), this.focusNextElement(_);
        else if (y && x([]))
          yn(n), this.focusPrevElement(_);
        else if (g && x(["Shift"]) && this.isCheckboxList) {
          yn(n);
          var A = this.focusNextElement(_);
          A !== -1 && this.setSelectedIndexOnAction(A, !1);
        } else if (y && x(["Shift"]) && this.isCheckboxList) {
          yn(n);
          var A = this.focusPrevElement(_);
          A !== -1 && this.setSelectedIndexOnAction(A, !1);
        } else if (h && x([]))
          yn(n), this.focusFirstElement();
        else if (f && x([]))
          yn(n), this.focusLastElement();
        else if (h && x(["Control", "Shift"]) && this.isCheckboxList) {
          if (yn(n), this.isIndexDisabled(_))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, _, _);
        } else if (f && x(["Control", "Shift"]) && this.isCheckboxList) {
          if (yn(n), this.isIndexDisabled(_))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(_, this.adapter.getListItemCount() - 1, _);
        } else if (E && x(["Control"]) && this.isCheckboxList)
          n.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === _t.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((v || p) && x([])) {
          if (r) {
            var C = n.target;
            if (C && C.tagName === "A" && v || (yn(n), this.isIndexDisabled(_)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(_, !1), this.adapter.notifyAction(_));
          }
        } else if ((v || p) && x(["Shift"]) && this.isCheckboxList) {
          var C = n.target;
          if (C && C.tagName === "A" && v || (yn(n), this.isIndexDisabled(_)))
            return;
          this.isTypeaheadInProgress() || (this.toggleCheckboxRange((o = this.lastSelectedIndex) !== null && o !== void 0 ? o : _, _, _), this.adapter.notifyAction(_));
        }
        if (this.hasTypeahead) {
          var b = {
            event: n,
            focusItemAtIndex: function(S) {
              a.focusItemAtIndex(S);
            },
            focusedItemIndex: this.focusedItemIndex,
            isTargetListItem: r,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(S) {
              return a.isIndexDisabled(S);
            }
          };
          jl(b, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(n, r, i) {
      var a, o = ql(i);
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
      this.isIndexValid(n, !1) && (r ? (this.adapter.removeClassForElementIndex(n, Ke.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, hr.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(n, Ke.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, hr.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(n, r) {
      if (r === void 0 && (r = {}), !(this.selectedIndex === n && !r.forceUpdate)) {
        var i = Ke.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (i = Ke.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== _t.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, i), this.setAriaForSingleSelectionAtIndex(n), this.setTabindexAtIndex(n), n !== _t.UNSET_INDEX && this.adapter.addClassForElementIndex(n, i), this.selectedIndex = n, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([n]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(n) {
      this.selectedIndex === _t.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(n, hr.ARIA_CURRENT));
      var r = this.ariaCurrentAttrValue !== null, i = r ? hr.ARIA_CURRENT : hr.ARIA_SELECTED;
      if (this.selectedIndex !== _t.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), n !== _t.UNSET_INDEX) {
        var a = r ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(n, i, a);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? hr.ARIA_SELECTED : hr.ARIA_CHECKED;
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
      for (var a = new Set(this.selectedIndex === _t.UNSET_INDEX ? [] : this.selectedIndex), o = !(a != null && a.has(i)), u = Fi([n, r].sort(), 2), l = u[0], c = u[1], d = this.getSelectionAttribute(), h = [], f = l; f <= c; f++)
        if (!this.isIndexDisabled(f)) {
          var v = a.has(f);
          o !== v && (h.push(f), this.adapter.setCheckedCheckboxOrRadioAtIndex(f, o), this.adapter.setAttributeForElementIndex(f, d, "" + o), o ? a.add(f) : a.delete(f));
        }
      h.length && (this.selectedIndex = Ar([], Fi(a)), this.adapter.notifySelectionChange(h));
    }, e.prototype.setTabindexAtIndex = function(n) {
      this.focusedItemIndex === _t.UNSET_INDEX && n !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== n && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== n && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), n !== _t.UNSET_INDEX && this.adapter.setAttributeForElementIndex(n, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var n = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(n);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== _t.UNSET_INDEX ? this.selectedIndex : Ug(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(n, r) {
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
      return cs(o, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return Pg(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      Zc(this.typeaheadState);
    }, e;
  }(Pt)
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
var Qc = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n) {
      var r = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
      return r.isSurfaceOpen = !1, r.isQuickOpen = !1, r.isHoistedElement = !1, r.isFixedPosition = !1, r.isHorizontallyCenteredOnViewport = !1, r.maxHeight = 0, r.openBottomBias = 0, r.openAnimationEndTimerId = 0, r.closeAnimationEndTimerId = 0, r.animationRequestId = 0, r.anchorCorner = ei.TOP_START, r.originCorner = ei.TOP_START, r.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, r.position = { x: 0, y: 0 }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Og;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Rg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return ia;
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
      this.originCorner = this.originCorner ^ At.RIGHT;
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
        }, ia.TRANSITION_OPEN_DURATION);
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
          }, ia.TRANSITION_CLOSE_DURATION);
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
      var r = this.getoriginCorner(), i = this.getMenuSurfaceMaxHeight(r), a = this.hasBit(r, At.BOTTOM) ? "bottom" : "top", o = this.hasBit(r, At.RIGHT) ? "right" : "left", u = this.getHorizontalOriginOffset(r), l = this.getVerticalOriginOffset(r), c = this.measurements, d = c.anchorSize, h = c.surfaceSize, f = (n = {}, n[o] = u, n[a] = l, n);
      d.width / h.width > ia.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (o = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(f), this.adapter.setTransformOrigin(o + " " + a), this.adapter.setPosition(f), this.adapter.setMaxHeight(i ? i + "px" : ""), this.hasBit(r, At.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
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
      var n = this.originCorner, r = this.measurements, i = r.viewportDistance, a = r.anchorSize, o = r.surfaceSize, u = e.numbers.MARGIN_TO_EDGE, l = this.hasBit(this.anchorCorner, At.BOTTOM), c, d;
      l ? (c = i.top - u + this.anchorMargin.bottom, d = i.bottom - u - this.anchorMargin.bottom) : (c = i.top - u + this.anchorMargin.top, d = i.bottom - u + a.height - this.anchorMargin.top);
      var h = d - o.height > 0;
      !h && c > d + this.openBottomBias && (n = this.setBit(n, At.BOTTOM));
      var f = this.adapter.isRtl(), v = this.hasBit(this.anchorCorner, At.FLIP_RTL), p = this.hasBit(this.anchorCorner, At.RIGHT) || this.hasBit(n, At.RIGHT), g = !1;
      f && v ? g = !p : g = p;
      var y, E;
      g ? (y = i.left + a.width + this.anchorMargin.right, E = i.right - this.anchorMargin.right) : (y = i.left + this.anchorMargin.left, E = i.right + a.width - this.anchorMargin.left);
      var x = y - o.width > 0, A = E - o.width > 0, b = this.hasBit(n, At.FLIP_RTL) && this.hasBit(n, At.RIGHT);
      return A && b && f || !x && b ? n = this.unsetBit(n, At.RIGHT) : (x && g && f || x && !g && p || !A && y >= E) && (n = this.setBit(n, At.RIGHT)), n;
    }, e.prototype.getMenuSurfaceMaxHeight = function(n) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var r = this.measurements.viewportDistance, i = 0, a = this.hasBit(n, At.BOTTOM), o = this.hasBit(this.anchorCorner, At.BOTTOM), u = e.numbers.MARGIN_TO_EDGE;
      return a ? (i = r.top + this.anchorMargin.top - u, o || (i += this.measurements.anchorSize.height)) : (i = r.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - u, o && (i -= this.measurements.anchorSize.height)), i;
    }, e.prototype.getHorizontalOriginOffset = function(n) {
      var r = this.measurements.anchorSize, i = this.hasBit(n, At.RIGHT), a = this.hasBit(this.anchorCorner, At.RIGHT);
      if (i) {
        var o = a ? r.width - this.anchorMargin.left : this.anchorMargin.right;
        return this.isHoistedElement || this.isFixedPosition ? o - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : o;
      }
      return a ? r.width - this.anchorMargin.right : this.anchorMargin.left;
    }, e.prototype.getVerticalOriginOffset = function(n) {
      var r = this.measurements.anchorSize, i = this.hasBit(n, At.BOTTOM), a = this.hasBit(this.anchorCorner, At.BOTTOM), o = 0;
      return i ? o = a ? r.height - this.anchorMargin.top : -this.anchorMargin.bottom : o = a ? r.height + this.anchorMargin.bottom : this.anchorMargin.top, o;
    }, e.prototype.adjustPositionForHoistedElement = function(n) {
      var r, i, a = this.measurements, o = a.windowScroll, u = a.viewportDistance, l = a.surfaceSize, c = a.viewportSize, d = Object.keys(n);
      try {
        for (var h = wt(d), f = h.next(); !f.done; f = h.next()) {
          var v = f.value, p = n[v] || 0;
          if (this.isHorizontallyCenteredOnViewport && (v === "left" || v === "right")) {
            n[v] = (c.width - l.width) / 2;
            continue;
          }
          p += u[v], this.isFixedPosition || (v === "top" ? p += o.y : v === "bottom" ? p -= o.y : v === "left" ? p += o.x : p -= o.x), n[v] = p;
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
      }, ia.TOUCH_EVENT_WAIT_MS);
    }, e.prototype.hasBit = function(n, r) {
      return !!(n & r);
    }, e.prototype.setBit = function(n, r) {
      return n | r;
    }, e.prototype.unsetBit = function(n, r) {
      return n ^ r;
    }, e.prototype.isFinite = function(n) {
      return typeof n == "number" && isFinite(n);
    }, e;
  }(Pt)
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
function kg(t) {
  return !!t.document && typeof t.document.createElement == "function";
}
function Vg(t, e) {
  if (kg(t) && e in Wl) {
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
var Si = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
}, pi = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected",
  SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
}, Gg = {
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
var jg = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n) {
      var r = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
      return r.closeAnimationEndTimerId = 0, r.defaultFocusState = _i.LIST_ROOT, r.selectedIndex = -1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Si;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return pi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Gg;
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
        var a = this.adapter.getAttributeFromElementAtIndex(i, pi.SKIP_RESTORE_FOCUS) === "true";
        this.adapter.closeSurface(a), this.closeAnimationEndTimerId = setTimeout(function() {
          var o = r.adapter.getElementIndex(n);
          o >= 0 && r.adapter.isSelectableItemAtIndex(o) && r.setSelectedIndex(o);
        }, Qc.numbers.TRANSITION_CLOSE_DURATION);
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
      r >= 0 && (this.adapter.removeAttributeFromElementAtIndex(r, pi.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(r, Si.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(n, Si.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(n, pi.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = n;
    }, e.prototype.setEnabled = function(n, r) {
      this.validatedIndex(n), r ? (this.adapter.removeClassFromElementAtIndex(n, Ke.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, pi.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(n, Ke.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, pi.ARIA_DISABLED_ATTR, "true"));
    }, e.prototype.validatedIndex = function(n) {
      var r = this.adapter.getMenuItemCount(), i = n >= 0 && n < r;
      if (!i)
        throw new Error("MDCMenuFoundation: No list item at specified index.");
    }, e;
  }(Pt)
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
}, Bo = {
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
var qg = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n, r) {
      r === void 0 && (r = {});
      var i = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
      return i.disabled = !1, i.isMenuOpen = !1, i.useDefaultValidation = !0, i.customValidity = !0, i.lastSelectedIndex = Vr.UNSET_INDEX, i.clickDebounceTimeout = 0, i.recentlyClicked = !1, i.leadingIcon = r.leadingIcon, i.helperText = r.helperText, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return mt;
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
        return Bo;
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
        var r = gt(n) === Oe.ENTER, i = gt(n) === Oe.SPACEBAR, a = gt(n) === Oe.ARROW_UP, o = gt(n) === Oe.ARROW_DOWN, u = n.ctrlKey || n.metaKey;
        if (!u && (!i && n.key && n.key.length === 1 || i && this.adapter.isTypeaheadInProgress())) {
          var l = i ? " " : n.key, c = this.adapter.typeaheadMatchItem(l, this.getSelectedIndex());
          c >= 0 && this.setSelectedIndex(c), n.preventDefault();
          return;
        }
        !r && !i && !a && !o || (this.openMenu(), n.preventDefault());
      }
    }, e.prototype.notchOutline = function(n) {
      if (this.adapter.hasOutline()) {
        var r = this.adapter.hasClass(mt.FOCUSED);
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
      this.useDefaultValidation || (this.customValidity = n), this.adapter.setSelectAnchorAttr("aria-invalid", (!n).toString()), n ? (this.adapter.removeClass(mt.INVALID), this.adapter.removeMenuClass(mt.MENU_INVALID)) : (this.adapter.addClass(mt.INVALID), this.adapter.addMenuClass(mt.MENU_INVALID)), this.syncHelperTextValidity(n);
    }, e.prototype.isValid = function() {
      return this.useDefaultValidation && this.adapter.hasClass(mt.REQUIRED) && !this.adapter.hasClass(mt.DISABLED) ? this.getSelectedIndex() !== Vr.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(n) {
      n ? this.adapter.addClass(mt.REQUIRED) : this.adapter.removeClass(mt.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", n.toString()), this.adapter.setLabelRequired(n);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var n = this.adapter.getAnchorElement();
      n && (this.adapter.setMenuAnchorElement(n), this.adapter.setMenuAnchorCorner(ei.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(mt.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(mt.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(mt.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var n = this.adapter.hasClass(mt.REQUIRED);
      n && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.syncHelperTextValidity = function(n) {
      if (this.helperText) {
        this.helperText.setValidity(n);
        var r = this.helperText.isVisible(), i = this.helperText.getId();
        r && i ? this.adapter.setSelectAnchorAttr(Bo.ARIA_DESCRIBEDBY, i) : this.adapter.removeSelectAnchorAttr(Bo.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.setClickDebounceTimeout = function() {
      var n = this;
      clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout(function() {
        n.recentlyClicked = !1;
      }, Vr.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
    }, e;
  }(Pt)
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
}, er = {
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
var Wg = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n) {
      return t.call(this, de(de({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return er;
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
      n ? this.adapter.addClass(er.HELPER_TEXT_VALIDATION_MSG) : this.adapter.removeClass(er.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.setValidationMsgPersistent = function(n) {
      n ? this.adapter.addClass(er.HELPER_TEXT_VALIDATION_MSG_PERSISTENT) : this.adapter.removeClass(er.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.getIsValidation = function() {
      return this.adapter.hasClass(er.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.getIsValidationMsgPersistent = function() {
      return this.adapter.hasClass(er.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.setValidity = function(n) {
      var r = this.adapter.hasClass(er.HELPER_TEXT_VALIDATION_MSG);
      if (r) {
        var i = this.adapter.hasClass(er.HELPER_TEXT_VALIDATION_MSG_PERSISTENT), a = !n || i;
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
  }(Pt)
), Kg = /* @__PURE__ */ be("<div><!></div>");
function zg(t, e) {
  Re(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "static", 3, !1), o = m(e, "anchor", 3, !0), u = m(e, "fixed", 3, !1), l = m(e, "open", 31, () => Ee(a())), c = m(e, "managed", 3, !1), d = m(e, "fullWidth", 3, !1), h = m(e, "quickOpen", 3, !1), f = m(e, "anchorElement", 15), v = m(e, "anchorMargin", 19, () => ({ top: 0, right: 0, bottom: 0, left: 0 })), p = m(e, "maxHeight", 3, 0), g = m(e, "horizontallyCenteredOnViewport", 3, !1), y = m(e, "openBottomBias", 3, 0), E = m(e, "neverRestoreFocus", 3, !1), x = /* @__PURE__ */ qe(e, [
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
  ]), A, b = /* @__PURE__ */ xe(void 0), _ = Ee({}), C = Ee({}), T = /* @__PURE__ */ xe(void 0);
  te("SMUI:list:role", "menu"), te("SMUI:list:item:role", "menuitem"), we(() => {
    var V, re;
    A && o() && !((V = A.parentElement) != null && V.classList.contains("mdc-menu-surface--anchor")) && ((re = A.parentElement) == null || re.classList.add("mdc-menu-surface--anchor"), f(A.parentElement ?? void 0));
  }), we(() => {
    s(b) && s(b).isOpen() !== l() && (l() ? s(b).open() : s(b).close());
  }), we(() => {
    s(b) && s(b).setQuickOpen(h());
  }), we(() => {
    s(b) && s(b).setFixedPosition(u());
  }), we(() => {
    s(b) && s(b).setMaxHeight(p());
  }), we(() => {
    s(b) && s(b).setIsHorizontallyCenteredOnViewport(g());
  });
  const S = ei;
  we(() => {
    s(b) && e.anchorCorner != null && (typeof e.anchorCorner == "string" ? s(b).setAnchorCorner(S[e.anchorCorner]) : s(b).setAnchorCorner(e.anchorCorner));
  }), we(() => {
    s(b) && s(b).setAnchorMargin(v());
  }), we(() => {
    s(b) && s(b).setOpenBottomBias(y());
  });
  const w = se("SMUI:menu-surface:mount"), U = se("SMUI:menu-surface:unmount");
  at(() => {
    ie(
      b,
      new Qc({
        addClass: B,
        removeClass: M,
        hasClass: Y,
        hasAnchor: () => !!f(),
        notifyClose: () => {
          c() || l(a()), l() || ze(L(), "SMUIMenuSurfaceClosed");
        },
        notifyClosing: () => {
          c() || l(a()), l() || ze(L(), "SMUIMenuSurfaceClosing");
        },
        notifyOpen: () => {
          c() || l(!0), l() && ze(L(), "SMUIMenuSurfaceOpened");
        },
        notifyOpening: () => {
          l() || ze(L(), "SMUIMenuSurfaceOpening");
        },
        isElementInContainer: (re) => L().contains(re),
        isRtl: () => getComputedStyle(L()).getPropertyValue("direction") === "rtl",
        setTransformOrigin: (re) => {
          C["transform-origin"] = re;
        },
        isFocused: () => document.activeElement === L(),
        saveFocus: () => {
          ie(T, document.activeElement ?? void 0, !0);
        },
        restoreFocus: () => {
          !E() && (!A || L().contains(document.activeElement)) && s(T) && document.contains(s(T)) && "focus" in s(T) && s(T).focus();
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
        setPosition: (re) => {
          C.left = "left" in re ? `${re.left}px` : "", C.right = "right" in re ? `${re.right}px` : "", C.top = "top" in re ? `${re.top}px` : "", C.bottom = "bottom" in re ? `${re.bottom}px` : "";
        },
        setMaxHeight: (re) => {
          C["max-height"] = re;
        }
      }),
      !0
    );
    const V = {
      get open() {
        return l();
      },
      set open(re) {
        l(re);
      },
      closeProgrammatic: Q
    };
    return w && w(V), s(b).init(), () => {
      var X, he;
      U && U(V);
      const re = s(b).isHoistedElement;
      (X = s(b)) == null || X.destroy(), re && ((he = L().parentNode) == null || he.removeChild(L()));
    };
  }), Kn(() => {
    var V;
    o() && L() && ((V = L().parentElement) == null || V.classList.remove("mdc-menu-surface--anchor"));
  });
  function Y(V) {
    return V in _ ? _[V] : L().classList.contains(V);
  }
  function B(V) {
    _[V] || (_[V] = !0);
  }
  function M(V) {
    (!(V in _) || _[V]) && (_[V] = !1);
  }
  function Q(V) {
    var re;
    (re = s(b)) == null || re.close(V), l(!1);
  }
  function F(V) {
    s(b) && l() && !c() && s(b).handleBodyClick(V);
  }
  function k() {
    return l();
  }
  function N(V) {
    l(V);
  }
  function W(V, re) {
    if (s(b) == null)
      throw new Error("Instance is not defined.");
    return s(b).setAbsolutePosition(V, re);
  }
  function ne(V) {
    if (s(b) == null)
      throw new Error("Instance is not defined.");
    return s(b).setIsHoisted(V);
  }
  function H() {
    if (s(b) == null)
      throw new Error("Instance is not defined.");
    return s(b).isFixed();
  }
  function I() {
    if (s(b) == null)
      throw new Error("Instance is not defined.");
    return s(b).flipCornerHorizontally();
  }
  function L() {
    return A;
  }
  var ee = {
    isOpen: k,
    setOpen: N,
    setAbsolutePosition: W,
    setIsHoisted: ne,
    isFixed: H,
    flipCornerHorizontally: I,
    getElement: L
  }, D = Kg();
  If("click", Cu.body, F, !0);
  var j = (V) => {
    var re;
    s(b) && !c() && s(b).handleKeydown(V), (re = e.onkeydown) == null || re.call(e, V);
  };
  Be(
    D,
    (V, re) => ({
      class: V,
      style: re,
      role: "dialog",
      ...x,
      onkeydown: j
    }),
    [
      () => He({
        "mdc-menu-surface": !0,
        "mdc-menu-surface--fixed": u(),
        "mdc-menu-surface--open": a(),
        "smui-menu-surface--static": a(),
        "mdc-menu-surface--fullwidth": d(),
        ..._,
        [r()]: !0
      }),
      () => Object.entries(C).map(([V, re]) => `${V}: ${re};`).concat([i()]).join(" ")
    ]
  );
  var me = ge(D);
  return _e(me, () => e.children ?? pe), Te(D, (V) => A = V, () => A), Ue(D, (V, re) => K == null ? void 0 : K(V, re), n), O(t, D), Me(ee);
}
function ko(t, { addClass: e = (r) => t.classList.add(r), removeClass: n = (r) => t.classList.remove(r) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      n("mdc-menu-surface--anchor");
    }
  };
}
function Xg(t, e) {
  Re(e, !0);
  const { closest: n } = bo;
  let r = m(e, "use", 19, () => []), i = m(e, "class", 3, ""), a = m(e, "open", 15, !1), o = m(e, "anchorElement", 15), u = m(e, "managed", 3, !1), l = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "open",
    "anchorElement",
    "managed",
    "children"
  ]), c, d = /* @__PURE__ */ xe(void 0), h = /* @__PURE__ */ xe(void 0), f = /* @__PURE__ */ xe(void 0);
  te("SMUI:menu-surface:mount", (S) => {
    s(h) || ie(h, S, !0);
  });
  const v = se("SMUI:list:mount");
  te("SMUI:list:mount", (S) => {
    s(f) || ie(f, S, !0), v && v(S);
  });
  const p = se("SMUI:menu:mount"), g = se("SMUI:menu:unmount");
  at(() => (ie(
    d,
    new jg({
      addClassToElementAtIndex: (S, w) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).addClassForElementIndex(S, w);
      },
      removeClassFromElementAtIndex: (S, w) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).removeClassForElementIndex(S, w);
      },
      addAttributeToElementAtIndex: (S, w, U) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).setAttributeForElementIndex(S, w, U);
      },
      removeAttributeFromElementAtIndex: (S, w) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).removeAttributeForElementIndex(S, w);
      },
      getAttributeFromElementAtIndex: (S, w) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).getAttributeFromElementIndex(S, w);
      },
      elementContainsClass: (S, w) => S.classList.contains(w),
      closeSurface: (S) => {
        var w;
        u() || ((w = s(h)) == null || w.closeProgrammatic(S), ze(C(), "SMUIMenuClosedProgrammatically"));
      },
      getElementIndex: (S) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).getOrderedList().map((w) => w.element).indexOf(S);
      },
      notifySelected: (S) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        ze(C(), "SMUIMenuSelected", {
          index: S.index,
          item: s(f).getOrderedList()[S.index].element
        });
      },
      getMenuItemCount: () => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).items.length;
      },
      focusItemAtIndex: (S) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).focusItemAtIndex(S);
      },
      focusListRoot: () => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        "focus" in s(f).element && s(f).element.focus();
      },
      isSelectableItemAtIndex: (S) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return !!n(s(f).getOrderedList()[S].element, `.${Si.MENU_SELECTION_GROUP}`);
      },
      getSelectedSiblingOfItemAtIndex: (S) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        const w = s(f).getOrderedList(), U = n(w[S].element, `.${Si.MENU_SELECTION_GROUP}`), Y = U == null ? void 0 : U.querySelector(`.${Si.MENU_SELECTED_LIST_ITEM}`);
        return Y ? w.map((B) => B.element).indexOf(Y) : -1;
      }
    }),
    !0
  ), p && p(s(d)), s(d).init(), () => {
    var S;
    g && s(d) && g(s(d)), (S = s(d)) == null || S.destroy();
  }));
  function y(S) {
    s(d) && s(d).handleKeydown(S);
  }
  function E() {
    return a();
  }
  function x(S) {
    a(S);
  }
  function A(S) {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    s(d).setDefaultFocusState(S);
  }
  function b() {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    return s(d).getSelectedIndex();
  }
  function _() {
    return c;
  }
  function C() {
    return c.getElement();
  }
  var T = {
    isOpen: E,
    setOpen: x,
    setDefaultFocusState: A,
    getSelectedIndex: b,
    getMenuSurface: _,
    getElement: C
  };
  {
    let S = /* @__PURE__ */ ue(() => He({ "mdc-menu": !0, [i()]: !0 }));
    Te(
      zg(t, rt(
        {
          get use() {
            return r();
          },
          get class() {
            return s(S);
          },
          get managed() {
            return u();
          }
        },
        () => l,
        {
          onkeydown: (w) => {
            var U;
            y(w), (U = e.onkeydown) == null || U.call(e, w);
          },
          onSMUIMenuSurfaceOpened: (w) => {
            var U;
            s(d) && s(d).handleMenuSurfaceOpened(), (U = e.onSMUIMenuSurfaceOpened) == null || U.call(e, w);
          },
          onSMUIListAction: (w) => {
            var U;
            s(d) && s(f) && s(d).handleItemAction(s(f).getOrderedList()[w.detail.index].element), (U = e.onSMUIListAction) == null || U.call(e, w);
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
          children: (w, U) => {
            var Y = le(), B = Z(Y);
            _e(B, () => e.children ?? pe), O(w, Y);
          },
          $$slots: { default: !0 }
        }
      )),
      (w) => c = w,
      () => c
    );
  }
  return Me(T);
}
function Yg(t, e) {
  Re(e, !0);
  const { closest: n, matches: r } = bo;
  let i = se("SMUI:list:nav"), a = m(e, "use", 19, () => []), o = m(e, "class", 3, ""), u = m(e, "nonInteractive", 3, !1), l = m(e, "dense", 3, !1), c = m(e, "textualList", 3, !1), d = m(e, "avatarList", 3, !1), h = m(e, "iconList", 3, !1), f = m(e, "imageList", 3, !1), v = m(e, "thumbnailList", 3, !1), p = m(e, "videoList", 3, !1), g = m(e, "twoLine", 3, !1), y = m(e, "threeLine", 3, !1), E = m(e, "vertical", 3, !0), x = m(e, "wrapFocus", 19, () => se("SMUI:list:wrapFocus") ?? !1), A = m(e, "singleSelection", 3, !1), b = m(e, "disabledItemsFocusable", 3, !1), _ = m(e, "selectedIndex", 31, () => -1), C = m(e, "radioList", 3, !1), T = m(e, "checkList", 3, !1), S = m(e, "hasTypeahead", 3, !1), w = m(e, "component", 3, Mr), U = m(e, "tag", 3, i ? "nav" : "ul"), Y = /* @__PURE__ */ qe(e, [
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
  ]), B, M = /* @__PURE__ */ xe(void 0), Q = [], F = se("SMUI:list:role");
  const k = /* @__PURE__ */ new WeakMap();
  let N = se("SMUI:dialog:selection"), W = se("SMUI:addLayoutListener"), ne;
  te("SMUI:list:nonInteractive", u()), te("SMUI:separator:context", "list"), F || (A() ? (F = "listbox", te("SMUI:list:item:role", "option")) : C() ? (F = "radiogroup", te("SMUI:list:item:role", "radio")) : T() ? (F = "group", te("SMUI:list:item:role", "checkbox")) : (F = "list", te("SMUI:list:item:role", void 0))), we(() => {
    s(M) && s(M).setVerticalOrientation(E());
  }), we(() => {
    s(M) && s(M).setWrapFocus(x());
  }), we(() => {
    s(M) && s(M).setHasTypeahead(S());
  }), we(() => {
    s(M) && s(M).setSingleSelection(A());
  }), we(() => {
    s(M) && s(M).setDisabledItemsFocusable(b());
  }), we(() => {
    s(M) && A() && P() !== _() && s(M).setSelectedIndex(_());
  }), W && (ne = W(oe)), te("SMUI:list:item:mount", (ve) => {
    Q.push(ve), k.set(ve.element, ve), A() && ve.selected && _(Ae(ve.element));
  }), te("SMUI:list:item:unmount", (ve) => {
    const Ie = (ve && Q.findIndex((q) => q === ve)) ?? -1;
    Ie !== -1 && (Q.splice(Ie, 1), k.delete(ve.element));
  });
  const H = se("SMUI:list:mount"), I = se("SMUI:list:unmount");
  at(() => {
    ie(
      M,
      new Bg({
        addClassForElementIndex: X,
        focusItemAtIndex: J,
        getAttributeForElementIndex: (Ie, q) => {
          var z;
          return ((z = V()[Ie]) == null ? void 0 : z.getAttr(q)) ?? null;
        },
        getFocusedElementIndex: () => document.activeElement ? V().map((Ie) => Ie.element).indexOf(document.activeElement) : -1,
        getListItemCount: () => Q.length,
        getPrimaryTextAtIndex: Ne,
        hasCheckboxAtIndex: (Ie) => {
          var q;
          return ((q = V()[Ie]) == null ? void 0 : q.hasCheckbox) ?? !1;
        },
        hasRadioAtIndex: (Ie) => {
          var q;
          return ((q = V()[Ie]) == null ? void 0 : q.hasRadio) ?? !1;
        },
        isCheckboxCheckedAtIndex: (Ie) => {
          const q = V()[Ie];
          return ((q == null ? void 0 : q.hasCheckbox) && q.checked) ?? !1;
        },
        isFocusInsideList: () => B != null && Ce() !== document.activeElement && Ce().contains(document.activeElement),
        isRootFocused: () => B != null && document.activeElement === Ce(),
        listItemAtIndexHasClass: re,
        notifyAction: (Ie) => {
          _(Ie), B != null && ze(Ce(), "SMUIListAction", { index: Ie });
        },
        notifySelectionChange: (Ie) => {
          B != null && ze(Ce(), "SMUIListSelectionChange", { changedIndices: Ie });
        },
        removeClassForElementIndex: he,
        setAttributeForElementIndex: ae,
        setCheckedCheckboxOrRadioAtIndex: (Ie, q) => {
          V()[Ie].checked = q;
        },
        setTabIndexForListItemChildren: (Ie, q) => {
          const z = V()[Ie];
          Array.prototype.forEach.call(z.element.querySelectorAll("button:not(:disabled), a"), (ut) => {
            ut.setAttribute("tabindex", q);
          });
        }
      }),
      !0
    );
    const ve = {
      get element() {
        return Ce();
      },
      get items() {
        return Q;
      },
      get typeaheadInProgress() {
        if (!s(M))
          throw new Error("Instance is undefined.");
        return s(M).isTypeaheadInProgress();
      },
      typeaheadMatchItem(Ie, q) {
        if (!s(M))
          throw new Error("Instance is undefined.");
        return s(M).typeaheadMatchItem(
          Ie,
          q,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: V,
      focusItemAtIndex: J,
      addClassForElementIndex: X,
      removeClassForElementIndex: he,
      setAttributeForElementIndex: ae,
      removeAttributeForElementIndex: ke,
      getAttributeFromElementIndex: Ge,
      getPrimaryTextAtIndex: Ne
    };
    return H && H(ve), s(M).init(), s(M).layout(), () => {
      var Ie;
      I && I(ve), (Ie = s(M)) == null || Ie.destroy();
    };
  }), Kn(() => {
    ne && ne();
  });
  function L(ve) {
    s(M) && ve.target && s(M).handleKeydown(ve, ve.target.classList.contains("mdc-deprecated-list-item"), Ae(ve.target));
  }
  function ee(ve) {
    s(M) && ve.target && s(M).handleFocusIn(Ae(ve.target));
  }
  function D(ve) {
    s(M) && ve.target && s(M).handleFocusOut(Ae(ve.target));
  }
  function j(ve) {
    s(M) && ve.target && s(M).handleClick(Ae(ve.target), !r(ve.target, 'input[type="checkbox"], input[type="radio"]'), ve);
  }
  function me(ve) {
    if (C() || T()) {
      const Ie = Ae(ve.target);
      if (Ie !== -1) {
        const q = V()[Ie];
        q && (C() && !q.checked || T()) && (r(ve.detail.target, 'input[type="checkbox"], input[type="radio"]') || (q.checked = !q.checked), q.activateRipple(), window.requestAnimationFrame(() => {
          q.deactivateRipple();
        }));
      }
    }
  }
  function V() {
    return B == null ? [] : [...Ce().children].map((ve) => k.get(ve)).filter((ve) => ve && ve._smui_list_item_accessor);
  }
  function re(ve, Ie) {
    const q = V()[ve];
    return (q && q.hasClass(Ie)) ?? !1;
  }
  function X(ve, Ie) {
    const q = V()[ve];
    q && q.addClass(Ie);
  }
  function he(ve, Ie) {
    const q = V()[ve];
    q && q.removeClass(Ie);
  }
  function ae(ve, Ie, q) {
    const z = V()[ve];
    z && z.addAttr(Ie, q);
  }
  function ke(ve, Ie) {
    const q = V()[ve];
    q && q.removeAttr(Ie);
  }
  function Ge(ve, Ie) {
    const q = V()[ve];
    return q ? q.getAttr(Ie) : null;
  }
  function Ne(ve) {
    const Ie = V()[ve];
    return (Ie && Ie.getPrimaryText()) ?? "";
  }
  function Ae(ve) {
    const Ie = n(ve, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return Ie && r(Ie, ".mdc-deprecated-list-item") ? V().map((q) => q == null ? void 0 : q.element).indexOf(Ie) : -1;
  }
  function oe() {
    if (!s(M))
      throw new Error("Instance is undefined.");
    return s(M).layout();
  }
  function Le(ve, Ie) {
    if (!s(M))
      throw new Error("Instance is undefined.");
    return s(M).setEnabled(ve, Ie);
  }
  function Ze() {
    if (!s(M))
      throw new Error("Instance is undefined.");
    return s(M).isTypeaheadInProgress();
  }
  function P() {
    if (!s(M))
      throw new Error("Instance is undefined.");
    return s(M).getSelectedIndex();
  }
  function G() {
    if (!s(M))
      throw new Error("Instance is undefined.");
    return s(M).getFocusedItemIndex();
  }
  function J(ve) {
    const Ie = V()[ve];
    Ie && "focus" in Ie.element && Ie.element.focus();
  }
  function Ce() {
    return B.getElement();
  }
  var Nt = {
    layout: oe,
    setEnabled: Le,
    getTypeaheadInProgress: Ze,
    getSelectedIndex: P,
    getFocusedItemIndex: G,
    focusItemAtIndex: J,
    getElement: Ce
  }, bt = le(), pn = Z(bt);
  {
    let ve = /* @__PURE__ */ ue(() => He({
      "mdc-deprecated-list": !0,
      "mdc-deprecated-list--non-interactive": u(),
      "mdc-deprecated-list--dense": l(),
      "mdc-deprecated-list--textual-list": c(),
      "mdc-deprecated-list--avatar-list": d() || N,
      "mdc-deprecated-list--icon-list": h(),
      "mdc-deprecated-list--image-list": f(),
      "mdc-deprecated-list--thumbnail-list": v(),
      "mdc-deprecated-list--video-list": p(),
      "mdc-deprecated-list--two-line": g(),
      "smui-list--three-line": y() && !g(),
      [o()]: !0
    }));
    wr(pn, w, (Ie, q) => {
      Te(
        q(Ie, rt(
          {
            get tag() {
              return U();
            },
            get use() {
              return a();
            },
            get class() {
              return s(ve);
            },
            get role() {
              return F;
            }
          },
          () => Y,
          {
            onkeydown: (z) => {
              var De;
              L(z), (De = e.onkeydown) == null || De.call(e, z);
            },
            onfocusin: (z) => {
              var De;
              ee(z), (De = e.onfocusin) == null || De.call(e, z);
            },
            onfocusout: (z) => {
              var De;
              D(z), (De = e.onfocusout) == null || De.call(e, z);
            },
            onclick: (z) => {
              var De;
              j(z), (De = e.onclick) == null || De.call(e, z);
            },
            onSMUIAction: (z) => {
              var De;
              me(z), (De = e.onSMUIAction) == null || De.call(e, z);
            },
            children: (z, De) => {
              var ut = le(), pt = Z(ut);
              _e(pt, () => e.children ?? pe), O(z, ut);
            },
            $$slots: { default: !0 }
          }
        )),
        (z) => B = z,
        () => B
      );
    });
  }
  return O(t, bt), Me(Nt);
}
let Zg = 0;
var Qg = /* @__PURE__ */ be('<span class="mdc-deprecated-list-item__ripple"></span>'), Jg = /* @__PURE__ */ be("<!><!>", 1);
function $g(t, e) {
  Re(e, !0);
  let n = () => {
  };
  function r(X) {
    return X === n;
  }
  let i = se("SMUI:list:item:nav"), a = m(e, "use", 19, () => []), o = m(e, "class", 3, ""), u = m(e, "style", 3, ""), l = m(e, "nonInteractive", 19, () => se("SMUI:list:nonInteractive") ?? !1), c = m(e, "ripple", 19, () => !l()), d = m(e, "wrapper", 3, !1), h = m(e, "activated", 15, !1), f = m(e, "role", 19, () => d() ? "presentation" : se("SMUI:list:item:role")), v = m(e, "selected", 15, !1), p = m(e, "disabled", 3, !1), g = m(e, "skipRestoreFocus", 3, !1), y = m(e, "tabindex", 15, n), E = m(e, "inputId", 19, () => "SMUI-form-field-list-" + Zg++), x = m(e, "component", 3, Mr), A = m(e, "tag", 19, () => i ? e.href ? "a" : "span" : "li"), b = /* @__PURE__ */ qe(e, [
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
  let _, C = Ee({}), T = Ee({}), S = Ee({}), w = /* @__PURE__ */ xe(void 0), U = /* @__PURE__ */ xe(void 0);
  const Y = /* @__PURE__ */ ue(() => r(y()) ? !l() && !p() && (v() || s(w) && s(w).checked) ? 0 : -1 : y());
  te("SMUI:generic:input:props", { id: E() }), te("SMUI:separator:context", void 0), te("SMUI:generic:input:mount", (X) => {
    ("_smui_checkbox_accessor" in X || "_smui_radio_accessor" in X) && ie(w, X, !0);
  }), te("SMUI:generic:input:unmount", () => {
    ie(w, void 0);
  });
  const B = se("SMUI:list:item:mount"), M = se("SMUI:list:item:unmount");
  at(() => {
    if (!v() && !l()) {
      let he = !0, ae = _.getElement();
      for (; ae.previousElementSibling; )
        if (ae = ae.previousElementSibling, ae.nodeType === 1 && ae.classList.contains("mdc-deprecated-list-item") && !ae.classList.contains("mdc-deprecated-list-item--disabled")) {
          he = !1;
          break;
        }
      he && ie(U, window.requestAnimationFrame(() => I(ae)), !0);
    }
    const X = {
      _smui_list_item_accessor: !0,
      get element() {
        return j();
      },
      get selected() {
        return v();
      },
      set selected(he) {
        v(he);
      },
      hasClass: Q,
      addClass: F,
      removeClass: k,
      getAttr: W,
      addAttr: ne,
      removeAttr: H,
      getPrimaryText: D,
      // For inputs within item.
      get checked() {
        return (s(w) && s(w).checked) ?? !1;
      },
      set checked(he) {
        s(w) && (s(w).checked = !!he);
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
        return s(Y);
      },
      set tabindex(he) {
        y(he);
      },
      get disabled() {
        return p();
      },
      get activated() {
        return h();
      },
      set activated(he) {
        h(he);
      }
    };
    return B && B(X), () => {
      M && M(X);
    };
  }), Kn(() => {
    s(U) && window.cancelAnimationFrame(s(U));
  });
  function Q(X) {
    return X in C ? C[X] : j().classList.contains(X);
  }
  function F(X) {
    C[X] || (C[X] = !0);
  }
  function k(X) {
    (!(X in C) || C[X]) && (C[X] = !1);
  }
  function N(X, he) {
    T[X] != he && (he === "" || he == null ? delete T[X] : T[X] = he);
  }
  function W(X) {
    return X in S ? S[X] ?? null : j().getAttribute(X);
  }
  function ne(X, he) {
    S[X] !== he && (S[X] = he);
  }
  function H(X) {
    (!(X in S) || S[X] != null) && (S[X] = void 0);
  }
  function I(X) {
    let he = !0;
    for (; X.nextElementSibling; )
      if (X = X.nextElementSibling, X.nodeType === 1 && X.classList.contains("mdc-deprecated-list-item")) {
        const ae = X.attributes.getNamedItem("tabindex");
        if (ae && ae.value === "0") {
          he = !1;
          break;
        }
      }
    he && y(0);
  }
  function L(X) {
    const he = X.key === "Enter", ae = X.key === "Space";
    (he || ae) && ee(X);
  }
  function ee(X) {
    p() || ze(j(), "SMUIAction", X);
  }
  function D() {
    const X = j(), he = X.querySelector(".mdc-deprecated-list-item__primary-text");
    if (he)
      return he.textContent ?? "";
    const ae = X.querySelector(".mdc-deprecated-list-item__text");
    return ae ? ae.textContent ?? "" : X.textContent ?? "";
  }
  function j() {
    return _.getElement();
  }
  var me = { action: ee, getPrimaryText: D, getElement: j }, V = le(), re = Z(V);
  {
    let X = /* @__PURE__ */ ue(() => [
      ...l() ? [] : [
        [
          jt,
          {
            ripple: !s(w),
            unbounded: !1,
            color: (h() || v()) && e.color == null ? "primary" : e.color,
            disabled: p(),
            addClass: F,
            removeClass: k,
            addStyle: N
          }
        ]
      ],
      ...a()
    ]), he = /* @__PURE__ */ ue(() => He({
      "mdc-deprecated-list-item": !d(),
      "mdc-deprecated-list-item__wrapper": d(),
      "mdc-deprecated-list-item--activated": h(),
      "mdc-deprecated-list-item--selected": v(),
      "mdc-deprecated-list-item--disabled": p(),
      "mdc-menu-item--selected": !i && f() === "menuitem" && v(),
      "smui-menu-item--non-interactive": l(),
      ...C,
      [o()]: !0
    })), ae = /* @__PURE__ */ ue(() => Object.entries(T).map(([Ge, Ne]) => `${Ge}: ${Ne};`).concat([u()]).join(" ")), ke = /* @__PURE__ */ ue(() => g() || void 0);
    wr(re, x, (Ge, Ne) => {
      Te(
        Ne(Ge, rt(
          {
            get tag() {
              return A();
            },
            get use() {
              return s(X);
            },
            get class() {
              return s(he);
            },
            get style() {
              return s(ae);
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
              return s(ke);
            },
            get tabindex() {
              return s(Y);
            },
            get href() {
              return e.href;
            }
          },
          () => S,
          () => b,
          {
            onclick: (Ae) => {
              var oe;
              ee(Ae), (oe = e.onclick) == null || oe.call(e, Ae);
            },
            onkeydown: (Ae) => {
              var oe;
              L(Ae), (oe = e.onkeydown) == null || oe.call(e, Ae);
            },
            children: (Ae, oe) => {
              var Le = Jg(), Ze = Z(Le);
              {
                var P = (J) => {
                  var Ce = Qg();
                  O(J, Ce);
                };
                ce(Ze, (J) => {
                  c() && J(P);
                });
              }
              var G = ye(Ze);
              _e(G, () => e.children ?? pe), O(Ae, Le);
            },
            $$slots: { default: !0 }
          }
        )),
        (Ae) => _ = Ae,
        () => _
      );
    });
  }
  return O(t, V), Me(me);
}
let eb = 0;
var tb = /* @__PURE__ */ be("<div><!></div>");
function nb(t, e) {
  Re(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "id", 19, () => "SMUI-select-helper-text-" + eb++), a = m(e, "persistent", 3, !1), o = m(e, "validationMsg", 3, !1), u = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "id",
    "persistent",
    "validationMsg",
    "children"
  ]), l, c = /* @__PURE__ */ xe(void 0), d = Ee({}), h = Ee({}), f = /* @__PURE__ */ xe(void 0);
  const v = se("SMUI:select:helper-text:id"), p = se("SMUI:select:helper-text:mount"), g = se("SMUI:select:helper-text:unmount");
  at(() => (ie(
    c,
    new Wg({
      addClass: E,
      removeClass: x,
      hasClass: y,
      getAttr: A,
      setAttr: b,
      removeAttr: _,
      setContent: (B) => {
        ie(f, B, !0);
      }
    }),
    !0
  ), v && v(i()), p && p(s(c)), s(c).init(), () => {
    var B;
    g && s(c) && g(s(c)), (B = s(c)) == null || B.destroy();
  }));
  function y(B) {
    return B in d ? d[B] : C().classList.contains(B);
  }
  function E(B) {
    d[B] || (d[B] = !0);
  }
  function x(B) {
    (!(B in d) || d[B]) && (d[B] = !1);
  }
  function A(B) {
    return B in h ? h[B] ?? null : C().getAttribute(B);
  }
  function b(B, M) {
    h[B] !== M && (h[B] = M);
  }
  function _(B) {
    (!(B in h) || h[B] != null) && (h[B] = void 0);
  }
  function C() {
    return l;
  }
  var T = { getElement: C }, S = tb();
  Be(
    S,
    (B) => ({
      class: B,
      "aria-hidden": a() ? void 0 : "true",
      id: i(),
      ...h,
      ...u
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
  var w = ge(S);
  {
    var U = (B) => {
      var M = le(), Q = Z(M);
      _e(Q, () => e.children ?? pe), O(B, M);
    }, Y = (B) => {
      var M = Wt();
      Fe(() => dt(M, s(f))), O(B, M);
    };
    ce(w, (B) => {
      s(f) == null ? B(U) : B(Y, !1);
    });
  }
  return Te(S, (B) => l = B, () => l), Ue(S, (B, M) => K == null ? void 0 : K(B, M), n), O(t, S), Me(T);
}
let rb = 0;
var ib = /* @__PURE__ */ be("<input/>"), ab = /* @__PURE__ */ be('<span class="mdc-select__ripple"></span>'), ob = /* @__PURE__ */ be('<div><!> <div><!> <!> <!> <!> <span><span> </span></span> <span><svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"><polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon><polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon></svg></span> <!></div> <!></div> <!>', 1);
function sb(t, e) {
  Re(e, !0);
  const n = () => Dt(Ce, "$selectedTextStore", r), [r, i] = xn();
  let a = () => {
  };
  function o(R) {
    return R === a;
  }
  let u = m(e, "use", 19, () => []), l = m(e, "class", 3, ""), c = m(e, "style", 3, ""), d = m(e, "ripple", 3, !0), h = m(e, "disabled", 3, !1), f = m(e, "variant", 3, "standard"), v = m(e, "noLabel", 3, !1), p = m(e, "label", 3, void 0), g = m(e, "value", 15), y = m(e, "key", 3, (R) => R), E = m(e, "dirty", 15, !1), x = m(e, "invalid", 15, a), A = m(e, "updateInvalid", 19, () => o(x())), b = m(e, "required", 3, !1), _ = m(e, "inputId", 19, () => "SMUI-select-" + rb++), C = m(e, "hiddenInput", 3, !1), T = m(e, "withLeadingIcon", 3, a), S = m(e, "anchor$use", 19, () => []), w = m(e, "anchor$class", 3, ""), U = m(e, "selectedTextContainer$use", 19, () => []), Y = m(e, "selectedTextContainer$class", 3, ""), B = m(e, "selectedText$use", 19, () => []), M = m(e, "selectedText$class", 3, ""), Q = m(e, "dropdownIcon$use", 19, () => []), F = m(e, "dropdownIcon$class", 3, ""), k = m(e, "menu$class", 3, ""), N = /* @__PURE__ */ qe(e, [
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
  const W = o(x());
  o(x()) && x(!1);
  let ne, H = /* @__PURE__ */ xe(void 0), I = Ee({}), L = Ee({}), ee, D = Ee({}), j = /* @__PURE__ */ xe(-1);
  const me = /* @__PURE__ */ ue(() => N.menu$id ?? _() + "-menu");
  let V = /* @__PURE__ */ xe(void 0), re = se("SMUI:addLayoutListener"), X, he = /* @__PURE__ */ xe(!1), ae = Ee({}), ke = /* @__PURE__ */ xe(void 0), Ge = /* @__PURE__ */ xe(void 0), Ne = /* @__PURE__ */ xe(!1), Ae, oe = se("SMUI:select:context"), Le, Ze, P, G, J;
  te("SMUI:list:role", ""), te("SMUI:list:nav", !1);
  const Ce = Ct("");
  te("SMUI:select:selectedText", Ce);
  const Nt = Ct(g());
  we(() => {
    vn(Nt, g());
  }), te("SMUI:select:value", Nt), we(() => {
    s(H) && s(H).getValue() !== y()(g()) && s(H).setValue(y()(g()));
  });
  let bt = s(j);
  we(() => {
    if (bt !== s(j))
      if (bt = s(j), s(H))
        s(H).setSelectedIndex(
          s(j),
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const R = It();
        g() !== R[s(j)] && g(R[s(j)]);
      }
  }), we(() => {
    s(H) && s(H).getDisabled() !== h() && s(H).setDisabled(h());
  }), we(() => {
    s(H) && E() && s(H).isValid() !== !x() && (A() ? x(!s(H).isValid()) : s(H).setValid(!x()));
  }), we(() => {
    s(H) && s(H).getRequired() !== b() && s(H).setRequired(b());
  }), re && (X = re(Pr)), te("SMUI:select:leading-icon:mount", (R) => {
    Le = R;
  }), te("SMUI:select:leading-icon:unmount", () => {
    Le = void 0;
  }), te("SMUI:list:mount", (R) => {
    Ae = R;
  }), te("SMUI:select:helper-text:id", (R) => {
    ie(V, R, !0);
  }), te("SMUI:select:helper-text:mount", (R) => {
    Ze = R;
  }), te("SMUI:select:helper-text:unmount", () => {
    ie(V, void 0), Ze = void 0;
  }), at(() => (ie(
    H,
    new qg(
      {
        // getSelectAdapterMethods
        // getMenuItemAttr: (menuItem: Element, attr: string) =>
        //   menuItem.getAttribute(attr),
        setSelectedText: (R) => {
          vn(Ce, R);
        },
        isSelectAnchorFocused: () => document.activeElement === ee,
        getSelectAnchorAttr: ut,
        setSelectAnchorAttr: pt,
        removeSelectAnchorAttr: Ot,
        addMenuClass: z,
        removeMenuClass: De,
        openMenu: () => {
          ie(he, !0);
        },
        closeMenu: () => {
          ie(he, !1);
        },
        getAnchorElement: () => ee,
        setMenuAnchorElement: (R) => {
          ie(ke, R, !0);
        },
        setMenuAnchorCorner: (R) => {
          ie(Ge, R, !0);
        },
        setMenuWrapFocus: (R) => {
          ie(Ne, R, !0);
        },
        getSelectedIndex: () => s(j),
        setSelectedIndex: (R) => {
          bt = R, ie(j, R, !0), g(It()[s(j)]);
        },
        focusMenuItemAtIndex: (R) => {
          Ae.focusItemAtIndex(R);
        },
        getMenuItemCount: () => Ae.items.length,
        getMenuItemValues: () => It().map(y()),
        getMenuItemTextAtIndex: (R) => Ae.getPrimaryTextAtIndex(R),
        isTypeaheadInProgress: () => Ae.typeaheadInProgress,
        typeaheadMatchItem: (R, fe) => Ae.typeaheadMatchItem(R, fe),
        // getCommonAdapterMethods
        addClass: ve,
        removeClass: Ie,
        hasClass: pn,
        setRippleCenter: (R) => G && G.setRippleCenter(R),
        activateBottomLine: () => G && G.activate(),
        deactivateBottomLine: () => G && G.deactivate(),
        notifyChange: (R) => {
          var fe;
          E(!0), A() && x(!((fe = s(H)) != null && fe.isValid())), ze(Hn(), "SMUISelectChange", { value: g(), index: s(j) });
        },
        // getOutlineAdapterMethods
        hasOutline: () => !!J,
        notchOutline: (R) => J && J.notch(R),
        closeOutline: () => J && J.closeNotch(),
        // getLabelAdapterMethods
        hasLabel: () => !!P,
        floatLabel: (R) => P && P.float(R),
        getLabelWidth: () => P ? P.getWidth() : 0,
        setLabelRequired: (R) => P && P.setRequired(R)
      },
      {
        get helperText() {
          return Ze;
        },
        get leadingIcon() {
          return Le;
        }
      }
    ),
    !0
  ), ie(j, It().indexOf(g()), !0), s(H).init(), Bt(W), () => {
    var R;
    (R = s(H)) == null || R.destroy();
  })), Kn(() => {
    X && X();
  });
  function pn(R) {
    return R in I ? I[R] : Hn().classList.contains(R);
  }
  function ve(R) {
    I[R] || (I[R] = !0);
  }
  function Ie(R) {
    (!(R in I) || I[R]) && (I[R] = !1);
  }
  function q(R, fe) {
    L[R] != fe && (fe === "" || fe == null ? delete L[R] : L[R] = fe);
  }
  function z(R) {
    ae[R] || (ae[R] = !0);
  }
  function De(R) {
    (!(R in ae) || ae[R]) && (ae[R] = !1);
  }
  function ut(R) {
    return R in D ? D[R] ?? null : Hn().getAttribute(R);
  }
  function pt(R, fe) {
    D[R] !== fe && (D[R] = fe);
  }
  function Ot(R) {
    (!(R in D) || D[R] != null) && (D[R] = void 0);
  }
  function It() {
    return Ae.getOrderedList().map((R) => R.getValue());
  }
  function zn(R) {
    const fe = R.currentTarget.getBoundingClientRect();
    return (ft(R) ? R.touches[0].clientX : R.clientX) - fe.left;
  }
  function ft(R) {
    return "touches" in R;
  }
  function Rt() {
    if (s(H) == null)
      throw new Error("Instance is undefined.");
    return s(H).getUseDefaultValidation();
  }
  function Bt(R) {
    var fe;
    (fe = s(H)) == null || fe.setUseDefaultValidation(R);
  }
  function Kt() {
    ee.focus();
  }
  function Pr() {
    var R;
    (R = s(H)) == null || R.layout();
  }
  function Hn() {
    return ne;
  }
  var We = {
    getUseDefaultValidation: Rt,
    setUseDefaultValidation: Bt,
    focus: Kt,
    layout: Pr,
    getElement: Hn
  }, et = ob(), Xe = Z(et);
  Be(Xe, (R, fe, ct) => ({ class: R, style: fe, ...ct }), [
    () => He({
      "mdc-select": !0,
      "mdc-select--required": b(),
      "mdc-select--disabled": h(),
      "mdc-select--filled": f() === "filled",
      "mdc-select--outlined": f() === "outlined",
      "smui-select--standard": f() === "standard",
      "mdc-select--with-leading-icon": o(T()) ? e.leadingIcon : T(),
      "mdc-select--no-label": v() || p() == null,
      "mdc-select--invalid": x(),
      "mdc-select--activated": s(he),
      "mdc-data-table__pagination-rows-per-page-select": oe === "data-table:pagination",
      ...I,
      [l()]: !0
    }),
    () => Object.entries(L).map(([R, fe]) => `${R}: ${fe};`).concat([c()]).join(" "),
    () => ji(N, [
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
  var xt = ge(Xe);
  {
    var cn = (R) => {
      var fe = ib();
      Be(
        fe,
        (ct) => ({
          type: "hidden",
          required: b(),
          disabled: h(),
          value: g(),
          ...ct
        }),
        [() => st(N, "input$")],
        void 0,
        void 0,
        !0
      ), O(R, fe);
    };
    ce(xt, (R) => {
      C() && R(cn);
    });
  }
  var tt = ye(xt, 2), yt = (R) => {
    var fe;
    ee.focus(), s(H) && s(H).handleClick(zn(R)), (fe = e.anchor$onclick) == null || fe.call(e, R);
  }, ht = (R) => {
    var fe;
    s(H) && s(H).handleKeydown(R), (fe = e.onkeydown) == null || fe.call(e, R);
  }, Je = (R) => {
    var fe;
    s(H) && s(H).handleBlur(), ze(Hn(), "blur", R), (fe = e.anchor$onblur) == null || fe.call(e, R);
  }, Tt = (R) => {
    var fe;
    s(H) && s(H).handleFocus(), ze(Hn(), "focus", R), (fe = e.anchor$onfocus) == null || fe.call(e, R);
  };
  Be(
    tt,
    (R, fe) => ({
      class: R,
      "aria-required": b() ? "true" : void 0,
      "aria-disabled": h() ? "true" : void 0,
      "aria-controls": s(me),
      "aria-expanded": s(he) ? "true" : "false",
      "aria-describedby": s(V),
      role: "combobox",
      tabindex: "0",
      ...D,
      ...fe,
      onclick: yt,
      onkeydown: ht,
      onblur: Je,
      onfocus: Tt
    }),
    [
      () => He({ "mdc-select__anchor": !0, [w()]: !0 }),
      () => st(N, "anchor$")
    ]
  );
  var Ln = ge(tt);
  {
    var rn = (R) => {
      var fe = ab();
      O(R, fe);
    };
    ce(Ln, (R) => {
      f() === "filled" && R(rn);
    });
  }
  var ot = ye(Ln, 2);
  {
    var kt = (R) => {
      {
        let fe = /* @__PURE__ */ ue(() => _() + "-smui-label"), ct = /* @__PURE__ */ ue(() => n() !== ""), Lt = /* @__PURE__ */ ue(() => st(N, "label$"));
        Te(
          eo(R, rt(
            {
              get id() {
                return s(fe);
              },
              get floatAbove() {
                return s(ct);
              },
              get required() {
                return b();
              }
            },
            () => s(Lt),
            {
              children: (Yn, Zn) => {
                var Zi = le(), ci = Z(Zi);
                {
                  var Ur = (Fr) => {
                  }, Eo = (Fr) => {
                    var La = le(), Qi = Z(La);
                    {
                      var Ws = (dr) => {
                        var Br = Wt();
                        Fe(() => dt(Br, p())), O(dr, Br);
                      }, wa = (dr) => {
                        var Br = le(), Ao = Z(Br);
                        _e(Ao, p), O(dr, Br);
                      };
                      ce(
                        Qi,
                        (dr) => {
                          typeof p() == "string" ? dr(Ws) : dr(wa, !1);
                        },
                        !0
                      );
                    }
                    O(Fr, La);
                  };
                  ce(ci, (Fr) => {
                    p() == null ? Fr(Ur) : Fr(Eo, !1);
                  });
                }
                O(Yn, Zi);
              },
              $$slots: { default: !0 }
            }
          )),
          (Yn) => P = Yn,
          () => P
        );
      }
    };
    ce(ot, (R) => {
      f() !== "outlined" && !v() && p() != null && R(kt);
    });
  }
  var gn = ye(ot, 2);
  {
    var zt = (R) => {
      {
        let fe = /* @__PURE__ */ ue(() => v() || p() == null), ct = /* @__PURE__ */ ue(() => st(N, "outline$"));
        Te(
          Xc(R, rt(
            {
              get noLabel() {
                return s(fe);
              }
            },
            () => s(ct),
            {
              children: (Lt, Yn) => {
                var Zn = le(), Zi = Z(Zn);
                {
                  var ci = (Ur) => {
                    {
                      let Eo = /* @__PURE__ */ ue(() => _() + "-smui-label"), Fr = /* @__PURE__ */ ue(() => n() !== ""), La = /* @__PURE__ */ ue(() => st(N, "label$"));
                      Te(
                        eo(Ur, rt(
                          {
                            get id() {
                              return s(Eo);
                            },
                            get floatAbove() {
                              return s(Fr);
                            },
                            get required() {
                              return b();
                            }
                          },
                          () => s(La),
                          {
                            children: (Qi, Ws) => {
                              var wa = le(), dr = Z(wa);
                              {
                                var Br = (Ji) => {
                                }, Ao = (Ji) => {
                                  var Ks = le(), ud = Z(Ks);
                                  {
                                    var cd = (di) => {
                                      var $i = Wt();
                                      Fe(() => dt($i, p())), O(di, $i);
                                    }, dd = (di) => {
                                      var $i = le(), fd = Z($i);
                                      _e(fd, p), O(di, $i);
                                    };
                                    ce(
                                      ud,
                                      (di) => {
                                        typeof p() == "string" ? di(cd) : di(dd, !1);
                                      },
                                      !0
                                    );
                                  }
                                  O(Ji, Ks);
                                };
                                ce(dr, (Ji) => {
                                  p() == null ? Ji(Br) : Ji(Ao, !1);
                                });
                              }
                              O(Qi, wa);
                            },
                            $$slots: { default: !0 }
                          }
                        )),
                        (Qi) => P = Qi,
                        () => P
                      );
                    }
                  };
                  ce(Zi, (Ur) => {
                    !v() && p() != null && Ur(ci);
                  });
                }
                O(Lt, Zn);
              },
              $$slots: { default: !0 }
            }
          )),
          (Lt) => J = Lt,
          () => J
        );
      }
    };
    ce(gn, (R) => {
      f() === "outlined" && R(zt);
    });
  }
  var Nr = ye(gn, 2);
  _e(Nr, () => e.leadingIcon ?? pe);
  var bn = ye(Nr, 2);
  Be(bn, (R, fe) => ({ class: R, ...fe }), [
    () => He({
      "mdc-select__selected-text-container": !0,
      [Y()]: !0
    }),
    () => st(N, "selectedTextContainer$")
  ]);
  var cr = ge(bn);
  Be(
    cr,
    (R, fe) => ({
      id: _() + "-smui-selected-text",
      class: R,
      role: "button",
      "aria-haspopup": "listbox",
      "aria-labelledby": _() + "-smui-label",
      ...fe
    }),
    [
      () => He({
        "mdc-select__selected-text": !0,
        [M()]: !0
      }),
      () => st(N, "selectedText$")
    ]
  );
  var Yi = ge(cr);
  Ue(cr, (R, fe) => K == null ? void 0 : K(R, fe), B), Ue(bn, (R, fe) => K == null ? void 0 : K(R, fe), U);
  var In = ye(bn, 2);
  Be(In, (R, fe) => ({ class: R, ...fe }), [
    () => He({
      "mdc-select__dropdown-icon": !0,
      [F()]: !0
    }),
    () => st(N, "dropdownIcon$")
  ]), Ue(In, (R, fe) => K == null ? void 0 : K(R, fe), Q);
  var Xn = ye(In, 2);
  {
    var Un = (R) => {
      {
        let fe = /* @__PURE__ */ ue(() => st(N, "ripple$"));
        Te(zc(R, rt(() => s(fe))), (ct) => G = ct, () => G);
      }
    };
    ce(Xn, (R) => {
      f() !== "outlined" && d() && R(Un);
    });
  }
  Te(tt, (R) => ee = R, () => ee), Ue(tt, (R, fe) => K == null ? void 0 : K(R, fe), S);
  var Hr = ye(tt, 2);
  {
    let R = /* @__PURE__ */ ue(() => He({
      "mdc-select__menu": !0,
      ...ae,
      [k()]: !0
    })), fe = /* @__PURE__ */ ue(() => st(N, "menu$"));
    Xg(Hr, rt(
      {
        get class() {
          return s(R);
        },
        get id() {
          return s(me);
        },
        fullWidth: !0,
        anchor: !1,
        get anchorElement() {
          return s(ke);
        },
        get anchorCorner() {
          return s(Ge);
        }
      },
      () => s(fe),
      {
        onSMUIMenuSelected: (ct) => {
          var Lt;
          s(H) && s(H).handleMenuItemAction(ct.detail.index), (Lt = e.onSMUIMenuSelected) == null || Lt.call(e, ct);
        },
        onSMUIMenuSurfaceClosing: (ct) => {
          var Lt;
          s(H) && s(H).handleMenuClosing(), (Lt = e.onSMUIMenuSurfaceClosing) == null || Lt.call(e, ct);
        },
        onSMUIMenuSurfaceClosed: (ct) => {
          var Lt;
          s(H) && s(H).handleMenuClosed(), (Lt = e.onSMUIMenuSurfaceClosed) == null || Lt.call(e, ct);
        },
        onSMUIMenuSurfaceOpened: (ct) => {
          var Lt;
          s(H) && s(H).handleMenuOpened(), (Lt = e.onSMUIMenuSurfaceOpened) == null || Lt.call(e, ct);
        },
        get open() {
          return s(he);
        },
        set open(ct) {
          ie(he, ct, !0);
        },
        children: (ct, Lt) => {
          {
            let Yn = /* @__PURE__ */ ue(() => st(N, "list$"));
            Yg(ct, rt(
              {
                role: "listbox",
                get wrapFocus() {
                  return s(Ne);
                }
              },
              () => s(Yn),
              {
                get selectedIndex() {
                  return s(j);
                },
                set selectedIndex(Zn) {
                  ie(j, Zn, !0);
                },
                children: (Zn, Zi) => {
                  var ci = le(), Ur = Z(ci);
                  _e(Ur, () => e.children ?? pe), O(Zn, ci);
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
  Te(Xe, (R) => ne = R, () => ne), Ue(Xe, (R, fe) => jt == null ? void 0 : jt(R, fe), () => ({
    ripple: f() === "filled",
    unbounded: !1,
    addClass: ve,
    removeClass: Ie,
    addStyle: q
  })), Ue(Xe, (R, fe) => ko == null ? void 0 : ko(R, fe), () => ({ addClass: ve, removeClass: Ie })), Ue(Xe, (R, fe) => K == null ? void 0 : K(R, fe), u);
  var _o = ye(Xe, 2);
  {
    var sd = (R) => {
      {
        let fe = /* @__PURE__ */ ue(() => st(N, "helperText$"));
        nb(R, rt(() => s(fe), {
          children: (ct, Lt) => {
            var Yn = le(), Zn = Z(Yn);
            _e(Zn, () => e.helperText ?? pe), O(ct, Yn);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    ce(_o, (R) => {
      e.helperText && R(sd);
    });
  }
  Fe(() => dt(Yi, n())), O(t, et);
  var ld = Me(We);
  return i(), ld;
}
function lb(t, e) {
  Re(e, !0);
  const n = () => Dt(d, "$selectedValue", r), [r, i] = xn();
  let a = m(e, "use", 19, () => []);
  m(e, "class", 3, "");
  let o = m(e, "value", 3, ""), u = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "value",
    "children"
  ]), l;
  const c = se("SMUI:select:selectedText"), d = se("SMUI:select:value");
  te("SMUI:list:item:role", "option");
  const h = /* @__PURE__ */ ue(() => o() != null && o() !== "" && n() === o());
  at(f), Kn(f);
  function f() {
    s(h) && l && vn(c, l.getPrimaryText());
  }
  function v() {
    return l.getElement();
  }
  var p = { getElement: v };
  Te(
    $g(t, rt(
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
        children: (y, E) => {
          var x = le(), A = Z(x);
          _e(A, () => e.children ?? pe), O(y, x);
        },
        $$slots: { default: !0 }
      }
    )),
    (y) => l = y,
    () => l
  );
  var g = Me(p);
  return i(), g;
}
function ds(t, e) {
  Re(e, !0);
  let n = m(e, "data", 19, () => []);
  m(e, "placeholder", 3, "");
  let r = m(e, "label", 3, "");
  m(e, "description", 3, "");
  let i = m(e, "value", 15), a = m(e, "required", 3, !1);
  m(e, "size", 3, "sm");
  let o = m(e, "selectedOptionIndex", 31, () => -1), u = m(e, "disabled", 3, !1);
  function l(c) {
    return () => o(c);
  }
  sb(t, {
    get disabled() {
      return u();
    },
    key: (c) => `${c ?? ""}`,
    get label() {
      return r();
    },
    style: "width: 100%;",
    get required() {
      return a();
    },
    get value() {
      return i();
    },
    set value(c) {
      i(c);
    },
    children: (c, d) => {
      var h = le(), f = Z(h);
      bi(f, 17, n, ja, (v, p, g) => {
        {
          let y = /* @__PURE__ */ ue(() => l(g));
          lb(v, {
            get onclick() {
              return s(y);
            },
            get value() {
              return s(p).value;
            },
            children: (E, x) => {
              var A = Wt();
              Fe(() => dt(A, s(p).label)), O(E, A);
            },
            $$slots: { default: !0 }
          });
        }
      }), O(c, h);
    },
    $$slots: { default: !0 }
  }), Me();
}
var ub = /* @__PURE__ */ be("<div><!></div>");
function Jc(t, e) {
  Re(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "variant", 3, "raised"), a = m(e, "square", 3, !1), o = m(e, "color", 3, "default"), u = m(e, "elevation", 3, 1), l = m(e, "transition", 3, !1), c = /* @__PURE__ */ qe(e, [
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
  var f = { getElement: h }, v = ub();
  Be(v, (g) => ({ class: g, ...c }), [
    () => He({
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
  var p = ge(v);
  return _e(p, () => e.children ?? pe), Te(v, (g) => d = g, () => d), Ue(v, (g, y) => K == null ? void 0 : K(g, y), n), O(t, v), Me(f);
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
var fs;
(function(t) {
  t.POLITE = "polite", t.ASSERTIVE = "assertive";
})(fs || (fs = {}));
var cb = "data-mdc-dom-announce";
function db(t, e) {
  fb.getInstance().say(t, e);
}
var fb = (
  /** @class */
  function() {
    function t() {
      this.liveRegions = /* @__PURE__ */ new Map();
    }
    return t.getInstance = function() {
      return t.instance || (t.instance = new t()), t.instance;
    }, t.prototype.say = function(e, n) {
      var r, i, a = (r = n == null ? void 0 : n.priority) !== null && r !== void 0 ? r : fs.POLITE, o = (i = n == null ? void 0 : n.ownerDocument) !== null && i !== void 0 ? i : document, u = this.getLiveRegion(a, o);
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
      return r.style.position = "absolute", r.style.top = "-9999px", r.style.left = "-9999px", r.style.height = "1px", r.style.overflow = "hidden", r.setAttribute("aria-atomic", "true"), r.setAttribute("aria-live", e), r.setAttribute(cb, "true"), n.body.appendChild(r), r;
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
var vr;
(function(t) {
  t[t.UNSPECIFIED = 0] = "UNSPECIFIED", t[t.CLICK = 1] = "CLICK", t[t.BACKSPACE_KEY = 2] = "BACKSPACE_KEY", t[t.DELETE_KEY = 3] = "DELETE_KEY", t[t.SPACEBAR_KEY = 4] = "SPACEBAR_KEY", t[t.ENTER_KEY = 5] = "ENTER_KEY";
})(vr || (vr = {}));
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
var $c = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n) {
      return t.call(this, de(de({}, e.defaultAdapter), n)) || this;
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
      n.stopPropagation(), this.adapter.notifyInteraction(vr.CLICK);
    }, e.prototype.handleKeydown = function(n) {
      n.stopPropagation();
      var r = gt(n);
      if (this.shouldNotifyInteractionFromKey(r)) {
        var i = this.getTriggerFromKey(r);
        this.adapter.notifyInteraction(i);
        return;
      }
      if (Np(n)) {
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
      var r = n === Oe.ENTER || n === Oe.SPACEBAR, i = n === Oe.BACKSPACE || n === Oe.DELETE;
      return r || i;
    }, e.prototype.getTriggerFromKey = function(n) {
      return n === Oe.SPACEBAR ? vr.SPACEBAR_KEY : n === Oe.ENTER ? vr.ENTER_KEY : n === Oe.DELETE ? vr.DELETE_KEY : n === Oe.BACKSPACE ? vr.BACKSPACE_KEY : vr.UNSPECIFIED;
    }, e;
  }(Pt)
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
var ed = (
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
        return new $a(i, a);
      });
      var r = $a.createAdapter(this);
      this.rippleSurface = n(this.root, new Io(r));
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
      return new $c(r);
    }, e.prototype.isNavigable = function() {
      return this.foundation.isNavigable();
    }, e.prototype.focus = function() {
      this.foundation.focus();
    }, e.prototype.removeFocus = function() {
      this.foundation.removeFocus();
    }, e;
  }(go)
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
var ir;
(function(t) {
  t.PRIMARY = "primary", t.TRAILING = "trailing", t.NONE = "none";
})(ir || (ir = {}));
var Se = {
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
}, Tn = /* @__PURE__ */ new Set();
Tn.add(Se.ARROW_LEFT_KEY);
Tn.add(Se.ARROW_RIGHT_KEY);
Tn.add(Se.ARROW_DOWN_KEY);
Tn.add(Se.ARROW_UP_KEY);
Tn.add(Se.END_KEY);
Tn.add(Se.HOME_KEY);
Tn.add(Se.IE_ARROW_LEFT_KEY);
Tn.add(Se.IE_ARROW_RIGHT_KEY);
Tn.add(Se.IE_ARROW_DOWN_KEY);
Tn.add(Se.IE_ARROW_UP_KEY);
var Dr = /* @__PURE__ */ new Set();
Dr.add(Se.ARROW_UP_KEY);
Dr.add(Se.ARROW_DOWN_KEY);
Dr.add(Se.HOME_KEY);
Dr.add(Se.END_KEY);
Dr.add(Se.IE_ARROW_UP_KEY);
Dr.add(Se.IE_ARROW_DOWN_KEY);
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
}, Ei;
(function(t) {
  t[t.SHOULD_FOCUS = 0] = "SHOULD_FOCUS", t[t.SHOULD_NOT_FOCUS = 1] = "SHOULD_NOT_FOCUS";
})(Ei || (Ei = {}));
var Gs = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n) {
      var r = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
      return r.shouldRemoveOnTrailingIconClick = !0, r.shouldFocusPrimaryActionOnClick = !0, r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Se;
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
        var l = this.adapter.getAttribute(Se.REMOVED_ANNOUNCEMENT_ATTRIBUTE);
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
      Tn.has(n.key) && (n.preventDefault(), this.focusNextAction(n.key, ir.PRIMARY));
    }, e.prototype.handleTrailingActionNavigation = function(n) {
      this.focusNextAction(n.detail.key, ir.TRAILING);
    }, e.prototype.removeFocus = function() {
      this.adapter.setPrimaryActionAttr(Se.TAB_INDEX, "-1"), this.adapter.removeTrailingActionFocus();
    }, e.prototype.focusPrimaryAction = function() {
      this.setPrimaryActionFocusable(Ei.SHOULD_FOCUS);
    }, e.prototype.focusTrailingAction = function() {
      var n = this.adapter.isTrailingActionNavigable();
      if (n) {
        this.adapter.setPrimaryActionAttr(Se.TAB_INDEX, "-1"), this.adapter.focusTrailingAction();
        return;
      }
      this.focusPrimaryAction();
    }, e.prototype.setPrimaryActionFocusable = function(n) {
      this.adapter.setPrimaryActionAttr(Se.TAB_INDEX, "0"), n === Ei.SHOULD_FOCUS && this.adapter.focusPrimaryAction(), this.adapter.removeTrailingActionFocus();
    }, e.prototype.getFocusBehavior = function() {
      return this.shouldFocusPrimaryActionOnClick ? Ei.SHOULD_FOCUS : Ei.SHOULD_NOT_FOCUS;
    }, e.prototype.focusNextAction = function(n, r) {
      var i = this.adapter.isTrailingActionNavigable(), a = this.getDirection(n);
      if (Dr.has(n) || !i) {
        this.adapter.notifyNavigation(n, r);
        return;
      }
      if (r === ir.PRIMARY && a === jn.RIGHT) {
        this.focusTrailingAction();
        return;
      }
      if (r === ir.TRAILING && a === jn.LEFT) {
        this.focusPrimaryAction();
        return;
      }
      this.adapter.notifyNavigation(n, ir.NONE);
    }, e.prototype.getDirection = function(n) {
      var r = this.adapter.isRTL(), i = n === Se.ARROW_LEFT_KEY || n === Se.IE_ARROW_LEFT_KEY, a = n === Se.ARROW_RIGHT_KEY || n === Se.IE_ARROW_RIGHT_KEY;
      return !r && i || r && a ? jn.LEFT : jn.RIGHT;
    }, e.prototype.removeChip = function() {
      this.shouldRemoveOnTrailingIconClick && this.beginExit();
    }, e.prototype.shouldStartEditing = function(n) {
      return this.eventFromPrimaryAction(n) && n.key === Se.ENTER_KEY;
    }, e.prototype.shouldFinishEditing = function(n) {
      return n.key === Se.ENTER_KEY;
    }, e.prototype.shouldNotifyInteraction = function(n) {
      return n.key === Se.ENTER_KEY || n.key === Se.SPACEBAR_KEY;
    }, e.prototype.isDeleteAction = function(n) {
      var r = this.adapter.hasClass(Et.DELETABLE);
      return r && (n.key === Se.BACKSPACE_KEY || n.key === Se.DELETE_KEY || n.key === Se.IE_DELETE_KEY);
    }, e.prototype.setSelectedImpl = function(n) {
      n ? (this.adapter.addClass(Et.SELECTED), this.adapter.setPrimaryActionAttr(Se.ARIA_CHECKED, "true")) : (this.adapter.removeClass(Et.SELECTED), this.adapter.setPrimaryActionAttr(Se.ARIA_CHECKED, "false"));
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
  }(Pt)
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
var td = (
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
        return new $a(u, l);
      }), r === void 0 && (r = function(u) {
        return new ed(u);
      }), this.leadingIcon = this.root.querySelector(Se.LEADING_ICON_SELECTOR), this.checkmark = this.root.querySelector(Se.CHECKMARK_SELECTOR), this.primaryAction = this.root.querySelector(Se.PRIMARY_ACTION_SELECTOR);
      var a = this.root.querySelector(Se.TRAILING_ACTION_SELECTOR);
      a && (this.trailingAction = r(a));
      var o = de(de({}, $a.createAdapter(this)), { computeBoundingRect: function() {
        return i.foundation.getDimensions();
      } });
      this.rippleSurface = n(this.root, new Io(o));
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
            Se.INTERACTION_EVENT,
            { chipId: n.id },
            !0
            /* shouldBubble */
          );
        },
        notifyNavigation: function(i, a) {
          return n.emit(
            Se.NAVIGATION_EVENT,
            { chipId: n.id, key: i, source: a },
            !0
            /* shouldBubble */
          );
        },
        notifyRemoval: function(i) {
          n.emit(
            Se.REMOVAL_EVENT,
            { chipId: n.id, removedAnnouncement: i },
            !0
            /* shouldBubble */
          );
        },
        notifySelection: function(i, a) {
          return n.emit(
            Se.SELECTION_EVENT,
            { chipId: n.id, selected: i, shouldIgnore: a },
            !0
            /* shouldBubble */
          );
        },
        notifyTrailingIconInteraction: function() {
          return n.emit(
            Se.TRAILING_ICON_INTERACTION_EVENT,
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
      return new Gs(r);
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
  }(go)
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
var nd = {
  CHIP_SELECTOR: ".mdc-chip"
}, ua = {
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
var js = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n) {
      var r = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
      return r.selectedChipIds = [], r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return nd;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ua;
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
      this.removeFocusFromChipsExcept(i), (this.adapter.hasClass(ua.CHOICE) || this.adapter.hasClass(ua.FILTER)) && this.toggleSelect(r);
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
      if (!(u === -1 || !Tn.has(i))) {
        var l = this.adapter.isRTL(), c = i === Se.ARROW_LEFT_KEY || i === Se.IE_ARROW_LEFT_KEY, d = i === Se.ARROW_RIGHT_KEY || i === Se.IE_ARROW_RIGHT_KEY, h = i === Se.ARROW_DOWN_KEY || i === Se.IE_ARROW_DOWN_KEY, f = !l && d || l && c || h, v = i === Se.HOME_KEY, p = i === Se.END_KEY;
        f ? u++ : v ? u = 0 : p ? u = o : u--, !(u < 0 || u > o) && (this.removeFocusFromChipsExcept(u), this.focusChipAction(u, i, a));
      }
    }, e.prototype.focusChipAction = function(n, r, i) {
      var a = Dr.has(r);
      if (a && i === ir.PRIMARY)
        return this.adapter.focusChipPrimaryActionAtIndex(n);
      if (a && i === ir.TRAILING)
        return this.adapter.focusChipTrailingActionAtIndex(n);
      var o = this.getDirection(r);
      if (o === jn.LEFT)
        return this.adapter.focusChipTrailingActionAtIndex(n);
      if (o === jn.RIGHT)
        return this.adapter.focusChipPrimaryActionAtIndex(n);
    }, e.prototype.getDirection = function(n) {
      var r = this.adapter.isRTL(), i = n === Se.ARROW_LEFT_KEY || n === Se.IE_ARROW_LEFT_KEY, a = n === Se.ARROW_RIGHT_KEY || n === Se.IE_ARROW_RIGHT_KEY;
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
        if (this.adapter.hasClass(ua.CHOICE) && this.selectedChipIds.length > 0) {
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
  }(Pt)
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
var yo = Gs.strings, zl = yo.INTERACTION_EVENT, Xl = yo.SELECTION_EVENT, Yl = yo.REMOVAL_EVENT, Zl = yo.NAVIGATION_EVENT, hb = js.strings.CHIP_SELECTOR, Ql = 0, vb = (
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
        return new td(r);
      }), this.chipFactory = n, this.chipsList = this.instantiateChips(this.chipFactory);
    }, e.prototype.initialSyncWithDOM = function() {
      var n, r, i = this;
      try {
        for (var a = wt(this.chipsList), o = a.next(); !o.done; o = a.next()) {
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
        for (var i = wt(this.chipsList), a = i.next(); !a.done; a = i.next()) {
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
          db(i);
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
      return new js(r);
    }, e.prototype.instantiateChips = function(n) {
      var r = [].slice.call(this.root.querySelectorAll(hb));
      return r.map(function(i) {
        return i.id = i.id || "mdc-chip-" + ++Ql, n(i);
      });
    }, e.prototype.findChipIndex = function(n) {
      for (var r = 0; r < this.chips.length; r++)
        if (this.chipsList[r].id === n)
          return r;
      return -1;
    }, e;
  }(go)
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
  MDCChip: td,
  MDCChipFoundation: Gs,
  MDCChipSet: vb,
  MDCChipSetFoundation: js,
  MDCChipTrailingAction: ed,
  MDCChipTrailingActionFoundation: $c,
  chipCssClasses: Et,
  chipSetCssClasses: ua,
  chipSetStrings: nd,
  chipStrings: Se,
  trailingActionStrings: Dn
}, Symbol.toStringTag, { value: "Module" }));
var mb = /* @__PURE__ */ be('<div class="mdc-chip__ripple"></div>'), pb = /* @__PURE__ */ be('<div class="mdc-chip__touch"></div>'), gb = /* @__PURE__ */ be("<!> <!> <!>", 1);
function bb(t, e) {
  Re(e, !0);
  const n = () => Dt(S, "$initialSelectedStore", o), r = () => Dt(M, "$choice", o), i = () => Dt(Q, "$index", o), a = () => Dt(B, "$nonInteractive", o), [o, u] = xn(), { MDCChipFoundation: l } = qs;
  let c = m(e, "use", 19, () => []), d = m(e, "class", 3, ""), h = m(e, "style", 3, ""), f = m(e, "ripple", 3, !0), v = m(e, "touch", 3, !1), p = m(e, "shouldRemoveOnTrailingIconClick", 3, !0), g = m(e, "shouldFocusPrimaryActionOnClick", 3, !0), y = m(e, "component", 3, Mr), E = m(e, "tag", 3, "div"), x = /* @__PURE__ */ qe(e, [
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
  ]), A, b = /* @__PURE__ */ xe(void 0), _ = Ee({}), C = Ee({}), T = Ee({});
  const S = se("SMUI:chips:chip:initialSelected");
  let w = /* @__PURE__ */ xe(Ee(n())), U, Y;
  const B = se("SMUI:chips:nonInteractive"), M = se("SMUI:chips:choice"), Q = se("SMUI:chips:chip:index"), F = Ct(p());
  we(() => {
    vn(F, p());
  }), te("SMUI:chips:chip:shouldRemoveOnTrailingIconClick", F);
  const k = Ct(s(w));
  we(() => {
    vn(k, s(w));
  }), te("SMUI:chips:chip:isSelected", k);
  const N = Ct(C);
  we(() => {
    vn(N, C);
  }), te("SMUI:chips:chip:leadingIconClasses", N), te("SMUI:chips:chip:focusable", r() && s(w) || i() === 0), we(() => {
    s(b) && s(b).getShouldRemoveOnTrailingIconClick() !== p() && s(b).setShouldRemoveOnTrailingIconClick(p());
  }), we(() => {
    s(b) && s(b).setShouldFocusPrimaryActionOnClick(g());
  }), te("SMUI:chips:primary-action:mount", (oe) => {
    U = oe;
  }), te("SMUI:chips:primary-action:unmount", () => {
    U = void 0;
  }), te("SMUI:chips:trailing-action:mount", (oe) => {
    Y = oe;
  }), te("SMUI:chips:trailing-action:unmount", () => {
    Y = void 0;
  });
  const W = se("SMUI:chips:chip:mount"), ne = se("SMUI:chips:chip:unmount");
  at(() => {
    ie(
      b,
      new l({
        addClass: I,
        addClassToLeadingIcon: ee,
        eventTargetHasClass: (Le, Ze) => Le && "classList" in Le ? Le.classList.contains(Ze) : !1,
        focusPrimaryAction: () => {
          U && U.focus();
        },
        focusTrailingAction: () => {
          Y && Y.focus();
        },
        getAttribute: (Le) => ae().getAttribute(Le),
        getCheckmarkBoundingClientRect: () => {
          const Le = ae().querySelector(".mdc-chip__checkmark");
          return Le ? Le.getBoundingClientRect() : null;
        },
        getComputedStyleValue: me,
        getRootBoundingClientRect: () => ae().getBoundingClientRect(),
        hasClass: H,
        hasLeadingIcon: () => !!ae().querySelector(".mdc-chip__icon--leading"),
        isRTL: () => getComputedStyle(ae()).getPropertyValue("direction") === "rtl",
        isTrailingActionNavigable: () => Y ? Y.isNavigable() : !1,
        notifyInteraction: () => ze(ae(), "SMUIChipInteraction", { chipId: e.chip }),
        notifyNavigation: (Le, Ze) => ze(ae(), "SMUIChipNavigation", { chipId: e.chip, key: Le, source: Ze }),
        notifyRemoval: (Le) => ze(ae(), "SMUIChipRemoval", { chipId: e.chip, removedAnnouncement: Le }),
        notifySelection: (Le, Ze) => ze(ae(), "SMUIChipSelection", { chipId: e.chip, selected: Le, shouldIgnore: Ze }),
        notifyTrailingIconInteraction: () => ze(ae(), "SMUIChipTrailingIconInteraction", { chipId: e.chip }),
        notifyEditStart: () => {
        },
        notifyEditFinish: () => {
        },
        removeClass: L,
        removeClassFromLeadingIcon: D,
        removeTrailingActionFocus: () => {
          Y && Y.removeFocus();
        },
        setPrimaryActionAttr: (Le, Ze) => {
          U && U.addAttr(Le, Ze);
        },
        setStyleProperty: j
      }),
      !0
    );
    const oe = {
      chipId: e.chip,
      get selected() {
        return s(w);
      },
      focusPrimaryAction: re,
      focusTrailingAction: X,
      removeFocus: he,
      setSelectedFromChipSet: V
    };
    return W && W(oe), s(b).init(), () => {
      var Le;
      ne && ne(oe), (Le = s(b)) == null || Le.destroy();
    };
  });
  function H(oe) {
    return oe in _ ? _[oe] : ae().classList.contains(oe);
  }
  function I(oe) {
    _[oe] || (_[oe] = !0);
  }
  function L(oe) {
    (!(oe in _) || _[oe]) && (_[oe] = !1);
  }
  function ee(oe) {
    C[oe] || (C[oe] = !0);
  }
  function D(oe) {
    (!(oe in C) || C[oe]) && (C[oe] = !1);
  }
  function j(oe, Le) {
    T[oe] != Le && (Le === "" || Le == null ? delete T[oe] : T[oe] = Le);
  }
  function me(oe) {
    return oe in T ? T[oe] : getComputedStyle(ae()).getPropertyValue(oe);
  }
  function V(oe, Le) {
    var Ze;
    ie(w, oe, !0), (Ze = s(b)) == null || Ze.setSelectedFromChipSet(s(w), Le);
  }
  function re() {
    var oe;
    (oe = s(b)) == null || oe.focusPrimaryAction();
  }
  function X() {
    var oe;
    (oe = s(b)) == null || oe.focusTrailingAction();
  }
  function he() {
    var oe;
    (oe = s(b)) == null || oe.removeFocus();
  }
  function ae() {
    return A.getElement();
  }
  var ke = { getElement: ae }, Ge = le(), Ne = Z(Ge);
  {
    let oe = /* @__PURE__ */ ue(() => [
      [
        jt,
        {
          ripple: f() && !a(),
          unbounded: !1,
          addClass: I,
          removeClass: L,
          addStyle: j
        }
      ],
      ...c()
    ]), Le = /* @__PURE__ */ ue(() => He({
      "mdc-chip": !0,
      "mdc-chip--selected": s(w),
      "mdc-chip--touch": v(),
      ..._,
      [d()]: !0
    })), Ze = /* @__PURE__ */ ue(() => Object.entries(T).map(([P, G]) => `${P}: ${G};`).concat([h()]).join(" "));
    wr(Ne, y, (P, G) => {
      Te(
        G(P, rt(
          {
            get tag() {
              return E();
            },
            get use() {
              return s(oe);
            },
            get class() {
              return s(Le);
            },
            get style() {
              return s(Ze);
            },
            role: "row"
          },
          () => x,
          {
            ontransitionend: (J) => {
              var Ce;
              s(b) && s(b).handleTransitionEnd(J), (Ce = e.ontransitionend) == null || Ce.call(e, J);
            },
            onclick: (J) => {
              var Ce;
              s(b) && s(b).handleClick(), (Ce = e.onclick) == null || Ce.call(e, J);
            },
            onkeydown: (J) => {
              var Ce;
              s(b) && s(b).handleKeydown(J), (Ce = e.onkeydown) == null || Ce.call(e, J);
            },
            onfocusin: (J) => {
              var Ce;
              s(b) && s(b).handleFocusIn(J), (Ce = e.onfocusin) == null || Ce.call(e, J);
            },
            onfocusout: (J) => {
              var Ce;
              s(b) && s(b).handleFocusOut(J), (Ce = e.onfocusout) == null || Ce.call(e, J);
            },
            onSMUIChipTrailingActionInteraction: (J) => {
              var Ce;
              s(b) && s(b).handleTrailingActionInteraction(), (Ce = e.onSMUIChipTrailingActionInteraction) == null || Ce.call(e, J);
            },
            onSMUIChipTrailingActionNavigation: (J) => {
              var Ce;
              s(b) && s(b).handleTrailingActionNavigation(J), (Ce = e.onSMUIChipTrailingActionNavigation) == null || Ce.call(e, J);
            },
            children: (J, Ce) => {
              var Nt = gb(), bt = Z(Nt);
              {
                var pn = (z) => {
                  var De = mb();
                  O(z, De);
                };
                ce(bt, (z) => {
                  f() && !a() && z(pn);
                });
              }
              var ve = ye(bt, 2);
              _e(ve, () => e.children ?? pe);
              var Ie = ye(ve, 2);
              {
                var q = (z) => {
                  var De = pb();
                  O(z, De);
                };
                ce(Ie, (z) => {
                  v() && z(q);
                });
              }
              O(J, Nt);
            },
            $$slots: { default: !0 }
          }
        )),
        (J) => A = J,
        () => A
      );
    });
  }
  O(t, Ge);
  var Ae = Me(ke);
  return u(), Ae;
}
var Ib = /* @__PURE__ */ be("<div></div>");
function yb(t, e) {
  Re(e, !0);
  const [n, r] = xn(), { MDCChipSetFoundation: i } = qs;
  let a = m(e, "use", 19, () => []), o = m(e, "class", 3, ""), u = m(e, "chips", 27, () => Ee([])), l = m(e, "key", 3, (D) => `${D}`), c = m(e, "selected", 15), d = m(e, "nonInteractive", 3, !1), h = m(e, "choice", 3, !1), f = m(e, "filter", 3, !1), v = m(e, "input", 3, !1), p = /* @__PURE__ */ qe(e, [
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
  let g, y = /* @__PURE__ */ xe(void 0), E = {}, x = /* @__PURE__ */ new WeakMap(), A = u().map((D) => h() && c() != null && l()(c()) === l()(D) || f() && c() != null && c().findIndex((j) => l()(j) === l()(D)) !== -1);
  te("SMUI:chips:key", l());
  const b = Ct(d());
  we(() => {
    vn(b, d());
  }), te("SMUI:chips:nonInteractive", b);
  const _ = Ct(h());
  we(() => {
    vn(_, h());
  }), te("SMUI:chips:choice", _);
  const C = Ct(f());
  we(() => {
    vn(C, f());
  }), te("SMUI:chips:filter", C);
  let T = f() ? new Set(c() ?? []) : c();
  we(() => {
    if (s(y) && h() && T !== c()) {
      const D = T;
      T = c(), c() != null ? s(y).select(l()(c())) : s(y).handleChipSelection({
        chipId: l()(D),
        selected: !1,
        shouldIgnore: !1
      });
    }
  }), we(() => {
    if (s(y) && f()) {
      const D = new Set(c() ?? []), j = S(T, D), me = S(D, T);
      if (j.size || me.size) {
        T = D;
        for (let V of j)
          u().findIndex((re) => l()(re) === l()(V)) !== -1 && s(y).handleChipSelection({ chipId: l()(V), selected: !1, shouldIgnore: !1 });
        for (let V of me)
          s(y).handleChipSelection({ chipId: l()(V), selected: !0, shouldIgnore: !1 });
      }
    }
  });
  function S(D, j) {
    let me = new Set(D);
    for (let V of j)
      me.delete(V);
    return me;
  }
  te("SMUI:chips:chip:mount", (D) => {
    Q(D.chipId, D);
  }), te("SMUI:chips:chip:unmount", (D) => {
    F(D.chipId);
  }), at(() => {
    if (ie(
      y,
      new i({
        announceMessage: Lp,
        focusChipPrimaryActionAtIndex: (D) => {
          var j;
          (j = M(u()[D])) == null || j.focusPrimaryAction();
        },
        focusChipTrailingActionAtIndex: (D) => {
          var j;
          (j = M(u()[D])) == null || j.focusTrailingAction();
        },
        getChipListCount: () => u().length,
        getIndexOfChipById: (D) => u().findIndex((j) => l()(j) === D),
        hasClass: (D) => k().classList.contains(D),
        isRTL: () => getComputedStyle(k()).getPropertyValue("direction") === "rtl",
        removeChipAtIndex: (D) => {
          if (D >= 0 && D < u().length) {
            const j = l()(u()[D]);
            if (h() && c() != null && l()(c()) === j)
              c(void 0);
            else if (f() && c() != null) {
              const me = c().findIndex((V) => l()(V) === j);
              me !== -1 && c().splice(me, 1);
            }
            u().splice(D, 1);
          }
        },
        removeFocusFromChipAtIndex: (D) => {
          var j;
          (j = M(u()[D])) == null || j.removeFocus();
        },
        selectChipAtIndex: (D, j, me) => {
          var V;
          if (D >= 0 && D < u().length) {
            if (f()) {
              c() == null && c([]);
              const re = l()(u()[D]), X = c().findIndex((he) => l()(he) === re);
              j && X === -1 ? c().push(u()[D]) : !j && X !== -1 && c().splice(X, 1);
            } else h() && (j || l()(c()) === l()(u()[D])) && c(j ? u()[D] : void 0);
            (V = M(u()[D])) == null || V.setSelectedFromChipSet(j, me);
          }
        }
      }),
      !0
    ), s(y).init(), h() && c() != null)
      s(y).select(l()(c()));
    else if (f() && c() != null && c().length)
      for (const D of c())
        s(y).select(l()(D));
    return () => {
      var D;
      (D = s(y)) == null || D.destroy();
    };
  });
  function w(D) {
    s(y) && s(y).handleChipInteraction({ chipId: l()(D.detail.chipId) });
  }
  function U(D) {
    s(y) && s(y).handleChipSelection({
      chipId: l()(D.detail.chipId),
      selected: D.detail.selected,
      shouldIgnore: D.detail.shouldIgnore
    });
  }
  function Y(D) {
    s(y) && s(y).handleChipRemoval({
      chipId: l()(D.detail.chipId),
      removedAnnouncement: D.detail.removedAnnouncement
    });
  }
  function B(D) {
    s(y) && s(y).handleChipNavigation({
      chipId: l()(D.detail.chipId),
      key: D.detail.key,
      source: D.detail.source
    });
  }
  function M(D) {
    return D instanceof Object ? x.get(D) : E[D];
  }
  function Q(D, j) {
    D instanceof Object ? x.set(D, j) : E[D] = j;
  }
  function F(D) {
    D instanceof Object ? x.delete(D) : delete E[D];
  }
  function k() {
    return g;
  }
  var N = { getElement: k }, W = Ib(), ne = (D) => {
    var j;
    w(D), (j = e.onSMUIChipInteraction) == null || j.call(e, D);
  }, H = (D) => {
    var j;
    U(D), (j = e.onSMUIChipSelection) == null || j.call(e, D);
  }, I = (D) => {
    var j;
    Y(D), (j = e.onSMUIChipRemoval) == null || j.call(e, D);
  }, L = (D) => {
    var j;
    B(D), (j = e.onSMUIChipNavigation) == null || j.call(e, D);
  };
  Be(
    W,
    (D) => ({
      class: D,
      role: "grid",
      ...p,
      onSMUIChipInteraction: ne,
      onSMUIChipSelection: H,
      onSMUIChipRemoval: I,
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
  ), bi(W, 23, u, (D) => l()(D), (D, j, me) => {
    yi(D, {
      key: "SMUI:chips:chip:index",
      get value() {
        return s(me);
      },
      children: (V, re) => {
        yi(V, {
          key: "SMUI:chips:chip:initialSelected",
          get value() {
            return A[s(me)];
          },
          children: (X, he) => {
            var ae = le(), ke = Z(ae);
            _e(ke, () => e.chip, () => s(j)), O(X, ae);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { default: !0 }
    });
  }), Te(W, (D) => g = D, () => g), Ue(W, (D, j) => K == null ? void 0 : K(D, j), a), O(t, W);
  var ee = Me(N);
  return r(), ee;
}
var _b = /* @__PURE__ */ ln('<svg class="mdc-chip__checkmark-svg" viewBox="-2 -3 30 30"><path class="mdc-chip__checkmark-path" fill="none" stroke="black" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg>'), Eb = /* @__PURE__ */ be("<span><!></span>");
function Ab(t, e) {
  Re(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = /* @__PURE__ */ qe(e, [
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
  var u = { getElement: o }, l = Eb();
  Be(l, (f) => ({ class: f, ...i }), [
    () => He({ "mdc-chip__checkmark": !0, [r()]: !0 })
  ]);
  var c = ge(l);
  {
    var d = (f) => {
      var v = le(), p = Z(v);
      _e(p, () => e.children ?? pe), O(f, v);
    }, h = (f) => {
      var v = _b();
      O(f, v);
    };
    ce(c, (f) => {
      e.children ? f(d) : f(h, !1);
    });
  }
  return Te(l, (f) => a = f, () => a), Ue(l, (f, v) => K == null ? void 0 : K(f, v), n), O(t, l), Me(u);
}
var Cb = /* @__PURE__ */ be("<span><!></span>"), Sb = /* @__PURE__ */ be("<span><span><!></span></span>"), xb = /* @__PURE__ */ be("<!> <span><!></span>", 1);
function Tb(t, e) {
  Re(e, !0);
  const n = () => Dt(x, "$filter", o), r = () => Dt(E, "$choice", o), i = () => Dt(y, "$nonInteractive", o), a = () => Dt(A, "$isSelected", o), [o, u] = xn();
  let l = m(e, "use", 19, () => []), c = m(e, "class", 3, ""), d = m(e, "tabindex", 19, () => se("SMUI:chips:chip:focusable") ? 0 : -1), h = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "tabindex",
    "children",
    "checkbox"
  ]), f, v, p, g = Ee({});
  const y = se("SMUI:chips:nonInteractive"), E = se("SMUI:chips:choice"), x = se("SMUI:chips:filter"), A = se("SMUI:chips:chip:isSelected"), b = /* @__PURE__ */ ue(() => ({
    role: n() ? "checkbox" : r() ? "radio" : "button",
    tabindex: d()
  })), _ = se("SMUI:chips:primary-action:mount"), C = se("SMUI:chips:primary-action:unmount");
  at(() => {
    let I = { focus: w, addAttr: T };
    return _ && _(I), () => {
      C && C(I);
    };
  });
  function T(I, L) {
    g[I] !== L && (g[I] = L);
  }
  function S(I) {
    g.tabindex !== Y().getAttribute("tabindex") ? vo().then(I) : I();
  }
  function w() {
    S(() => {
      p && p.focus();
    });
  }
  function U() {
    return v && v.getElement();
  }
  function Y() {
    return f;
  }
  var B = { focus: w, getInput: U, getElement: Y }, M = xb(), Q = Z(M);
  {
    var F = (I) => {
      {
        let L = /* @__PURE__ */ ue(() => st(h, "checkmark$"));
        Te(
          Ab(I, rt(
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
    ce(Q, (I) => {
      n() && I(F);
    });
  }
  var k = ye(Q, 2);
  Be(k, (I) => ({ role: "gridcell", ...I }), [() => st(h, "container$")]);
  var N = ge(k);
  {
    var W = (I) => {
      var L = Cb();
      Be(L, (D) => ({ class: "mdc-chip__text", ...D }), [() => st(h, "text$")]);
      var ee = ge(L);
      _e(ee, () => e.children ?? pe), O(I, L);
    }, ne = (I) => {
      var L = Sb();
      Be(
        L,
        (j, me) => ({
          class: j,
          ...n() || r() ? { "aria-selected": a() ? "true" : "false" } : {},
          ...s(b),
          ...g,
          ...me
        }),
        [
          () => He({ "mdc-chip__primary-action": !0, [c()]: !0 }),
          () => ji(h, ["checkmark$", "container$", "text$"])
        ]
      );
      var ee = ge(L);
      Be(ee, (j) => ({ class: "mdc-chip__text", ...j }), [() => st(h, "text$")]);
      var D = ge(ee);
      _e(D, () => e.children ?? pe), Te(L, (j) => p = j, () => p), O(I, L);
    };
    ce(N, (I) => {
      i() ? I(W) : I(ne, !1);
    });
  }
  Te(k, (I) => f = I, () => f), Ue(k, (I, L) => K == null ? void 0 : K(I, L), l), O(t, M);
  var H = Me(B);
  return u(), H;
}
var Lb = /* @__PURE__ */ be('<span class="mdc-deprecated-chip-trailing-action__touch"></span>'), wb = /* @__PURE__ */ be('<button><span class="mdc-deprecated-chip-trailing-action__ripple"></span> <!> <span><!></span></button>');
function Ob(t, e) {
  Re(e, !0);
  const { MDCChipTrailingActionFoundation: n } = qs;
  let r = m(e, "use", 19, () => []), i = m(e, "class", 3, ""), a = m(e, "style", 3, ""), o = m(e, "ripple", 3, !0), u = m(e, "touch", 3, !1), l = m(e, "nonNavigable", 3, !1), c = m(e, "icon$use", 19, () => []), d = m(e, "icon$class", 3, ""), h = /* @__PURE__ */ qe(e, [
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
  ]), f, v = /* @__PURE__ */ xe(void 0), p = Ee({}), g = Ee({}), y = Ee({});
  const E = se("SMUI:chips:trailing-action:mount"), x = se("SMUI:chips:trailing-action:unmount");
  at(() => {
    ie(
      v,
      new n({
        focus: () => {
          const L = B();
          S(() => {
            L.focus();
          });
        },
        getAttribute: C,
        notifyInteraction: (L) => ze(B(), "SMUIChipTrailingActionInteraction", { trigger: L }),
        notifyNavigation: (L) => ze(B(), "SMUIChipTrailingActionNavigation", { key: L }),
        setAttribute: T
      }),
      !0
    );
    const I = { isNavigable: w, focus: U, removeFocus: Y };
    return E && E(I), s(v).init(), () => {
      var L;
      x && x(I), (L = s(v)) == null || L.destroy();
    };
  });
  function A(I) {
    p[I] || (p[I] = !0);
  }
  function b(I) {
    (!(I in p) || p[I]) && (p[I] = !1);
  }
  function _(I, L) {
    g[I] != L && (L === "" || L == null ? delete g[I] : g[I] = L);
  }
  function C(I) {
    return I in y ? y[I] ?? null : B().getAttribute(I);
  }
  function T(I, L) {
    y[I] !== L && (y[I] = L);
  }
  function S(I) {
    y.tabindex !== B().getAttribute("tabindex") ? vo().then(I) : I();
  }
  function w() {
    if (s(v) == null)
      throw new Error("Instance is undefined.");
    return s(v).isNavigable();
  }
  function U() {
    var I;
    (I = s(v)) == null || I.focus();
  }
  function Y() {
    var I;
    (I = s(v)) == null || I.removeFocus();
  }
  function B() {
    return f;
  }
  var M = { isNavigable: w, focus: U, removeFocus: Y, getElement: B }, Q = wb(), F = (I) => {
    var L;
    s(v) && s(v).handleClick(I), (L = e.onclick) == null || L.call(e, I);
  }, k = (I) => {
    var L;
    s(v) && s(v).handleKeydown(I), (L = e.onkeydown) == null || L.call(e, I);
  };
  Be(
    Q,
    (I, L, ee) => ({
      type: "button",
      class: I,
      style: L,
      "aria-hidden": l() ? "true" : void 0,
      tabindex: "-1",
      ...y,
      ...ee,
      onclick: F,
      onkeydown: k
    }),
    [
      () => He({
        "mdc-deprecated-chip-trailing-action": !0,
        ...p,
        [i()]: !0
      }),
      () => Object.entries(g).map(([I, L]) => `${I}: ${L};`).concat([a()]).join(" "),
      () => ji(h, ["icon$"])
    ]
  );
  var N = ye(ge(Q), 2);
  {
    var W = (I) => {
      var L = Lb();
      O(I, L);
    };
    ce(N, (I) => {
      u() && I(W);
    });
  }
  var ne = ye(N, 2);
  Be(ne, (I, L) => ({ class: I, ...L }), [
    () => He({
      "mdc-deprecated-chip-trailing-action__icon": !0,
      [d()]: !0
    }),
    () => st(h, "icon$")
  ]);
  var H = ge(ne);
  return _e(H, () => e.children ?? pe), Ue(ne, (I, L) => K == null ? void 0 : K(I, L), c), Te(Q, (I) => f = I, () => f), Ue(Q, (I, L) => jt == null ? void 0 : jt(I, L), () => ({
    ripple: o(),
    unbounded: !1,
    addClass: A,
    removeClass: b,
    addStyle: _
  })), Ue(Q, (I, L) => K == null ? void 0 : K(I, L), r), O(t, Q), Me(M);
}
const Ht = [];
for (let t = 0; t < 256; ++t)
  Ht.push((t + 256).toString(16).slice(1));
function Rb(t, e = 0) {
  return (Ht[t[e + 0]] + Ht[t[e + 1]] + Ht[t[e + 2]] + Ht[t[e + 3]] + "-" + Ht[t[e + 4]] + Ht[t[e + 5]] + "-" + Ht[t[e + 6]] + Ht[t[e + 7]] + "-" + Ht[t[e + 8]] + Ht[t[e + 9]] + "-" + Ht[t[e + 10]] + Ht[t[e + 11]] + Ht[t[e + 12]] + Ht[t[e + 13]] + Ht[t[e + 14]] + Ht[t[e + 15]]).toLowerCase();
}
let Vo;
const Mb = new Uint8Array(16);
function Db() {
  if (!Vo) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    Vo = crypto.getRandomValues.bind(crypto);
  }
  return Vo(Mb);
}
const Pb = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Jl = { randomUUID: Pb };
function rd(t, e, n) {
  var i;
  if (Jl.randomUUID && !e && !t)
    return Jl.randomUUID();
  t = t || {};
  const r = t.random ?? ((i = t.rng) == null ? void 0 : i.call(t)) ?? Db();
  if (r.length < 16)
    throw new Error("Random bytes length must be >= 16");
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    if (n = n || 0, n < 0 || n + 16 > e.length)
      throw new RangeError(`UUID byte range ${n}:${n + 15} is out of buffer bounds`);
    for (let a = 0; a < 16; ++a)
      e[n + a] = r[a];
    return e;
  }
  return Rb(r);
}
var Nb = /* @__PURE__ */ be('<span class="oscd-icon"><!></span>');
function ur(t, e) {
  var n = Nb(), r = ge(n);
  _e(r, () => e.children ?? pe), O(t, n);
}
var Hb = /* @__PURE__ */ ln('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');
function Ub(t, e) {
  let n = m(e, "svgStyles", 3, "");
  ur(t, {
    children: (r, i) => {
      var a = Hb();
      Fe(() => en(a, n())), O(r, a);
    }
  });
}
var Fb = /* @__PURE__ */ ln('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function id(t, e) {
  let n = m(e, "svgStyles", 3, "");
  ur(t, {
    children: (r, i) => {
      var a = Fb();
      Fe(() => en(a, n())), O(r, a);
    }
  });
}
var Bb = /* @__PURE__ */ ln('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');
function kb(t, e) {
  let n = m(e, "svgStyles", 3, "");
  ur(t, {
    children: (r, i) => {
      var a = Bb();
      Fe(() => en(a, n())), O(r, a);
    }
  });
}
var Vb = /* @__PURE__ */ ln('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"></path></svg>');
function Gb(t, e) {
  let n = m(e, "svgStyles", 3, "");
  ur(t, {
    children: (r, i) => {
      var a = Vb();
      Fe(() => en(a, n())), O(r, a);
    }
  });
}
var jb = /* @__PURE__ */ ln('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"></path></svg>');
function qb(t, e) {
  let n = m(e, "svgStyles", 3, "");
  ur(t, {
    children: (r, i) => {
      var a = jb();
      Fe(() => en(a, n())), O(r, a);
    }
  });
}
var Wb = /* @__PURE__ */ ln('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"></path></svg>');
function Kb(t, e) {
  let n = m(e, "svgStyles", 3, "");
  ur(t, {
    children: (r, i) => {
      var a = Wb();
      Fe(() => en(a, n())), O(r, a);
    }
  });
}
var zb = /* @__PURE__ */ ln('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function Xb(t, e) {
  let n = m(e, "svgStyles", 3, "");
  ur(t, {
    children: (r, i) => {
      var a = zb();
      Fe(() => en(a, n())), O(r, a);
    }
  });
}
var Yb = /* @__PURE__ */ ln('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function Zb(t, e) {
  let n = m(e, "svgStyles", 3, "");
  ur(t, {
    children: (r, i) => {
      var a = Yb();
      Fe(() => en(a, n())), O(r, a);
    }
  });
}
var Qb = /* @__PURE__ */ ln('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function Jb(t, e) {
  let n = m(e, "svgStyles", 3, "");
  ur(t, {
    children: (r, i) => {
      var a = Qb();
      Fe(() => en(a, n())), O(r, a);
    }
  });
}
Fd();
var $b = /* @__PURE__ */ be("<!> <!>", 1);
function eI(t, e) {
  let n = m(e, "title", 3, ""), r = m(e, "closeable", 3, !0), i = m(e, "disabled", 3, !1);
  {
    let a = /* @__PURE__ */ ue(() => i() ? "disabled" : "");
    bb(t, {
      get chip() {
        return n();
      },
      nonInteractive: !0,
      disabled: !0,
      get class() {
        return s(a);
      },
      children: (o, u) => {
        var l = $b(), c = Z(l);
        Tb(c, {
          children: (f, v) => {
            var p = Wt();
            Fe(() => dt(p, n())), O(f, p);
          },
          $$slots: { default: !0 }
        });
        var d = ye(c, 2);
        {
          var h = (f) => {
            Ob(f, {
              get onclick() {
                return e.callback;
              },
              children: (v, p) => {
                id(v, { svgStyles: "margin-left: 0; fill: unset;" });
              },
              $$slots: { default: !0 }
            });
          };
          ce(d, (f) => {
            r() && !i() && f(h);
          });
        }
        O(o, l);
      },
      $$slots: { default: !0 }
    });
  }
}
function tI(t, e) {
  e(t.target.value);
}
var nI = /* @__PURE__ */ be('<div class="custom-text-field svelte-1719vm0"><input type="date" id="datetime-picker" class="custom-text-field__input svelte-1719vm0" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-1719vm0"> </label> <span class="custom-line svelte-1719vm0"></span></div>');
function rI(t, e) {
  Re(e, !0);
  let n = m(e, "label", 3, ""), r = m(e, "value", 15, "");
  var i = nI(), a = ge(i);
  a.__change = [tI, r];
  var o = ye(a, 2), u = ge(o);
  Fe(() => dt(u, n())), ma(a, r), O(t, i), Me();
}
li(["change"]);
var iI = /* @__PURE__ */ be('<div class="filter-box-container"><div class="input-section"><div class="filter-input-controls svelte-xdvqlf"><!> <!> <!> <!> <!></div> <div class="filter-button-controls"><!> <!></div></div> <div class="separator"></div> <div class="chip-section"><!></div></div>');
function aI(t, e) {
  Re(e, !0);
  let n = m(e, "filterTypes", 19, () => []), r = m(e, "activeFilters", 31, () => Ee([])), i = m(e, "useOptionLabelInChipText", 3, !1), a = m(e, "selectedOptionIndex", 31, () => -1), o = m(e, "disabled", 3, !1), u = m(e, "addFilterLabel", 3, "Add Filter"), l = m(e, "selectFilterLabel", 3, "Filter Types"), c = /* @__PURE__ */ xe(""), d = /* @__PURE__ */ xe(void 0), h = /* @__PURE__ */ ue(() => n().map((x) => ({ value: x.label, label: x.label }))), f = /* @__PURE__ */ ue(() => !s(d) || !s(c)), v = /* @__PURE__ */ ue(() => n().find((x) => x.label === s(d)));
  function p() {
    var A, b;
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
        id: rd(),
        key: s(v).key,
        value: s(c),
        operation: "=",
        text: `${s(d)}: ${i() && ((A = s(v).inputType.options) != null && A.length) ? (b = s(v).inputType.options[a()]) == null ? void 0 : b.label : s(c)}`,
        disabled: !1
      }
    ];
    r(x), E(), y();
  }
  function g(x) {
    setTimeout(
      () => {
        r(r().filter((A) => A.id !== x)), E();
      },
      0
    );
  }
  function y() {
    ie(c, ""), ie(d, void 0);
  }
  function E() {
    const x = r().map((A) => ({ ...A }));
    x.find((A) => A.key === "uuid") ? x.filter((A) => A.key !== "uuid").forEach((A) => {
      A.disabled = !0;
    }) : x.forEach((A) => {
      A.disabled = !1;
    }), r(x);
  }
  Jc(t, {
    children: (x, A) => {
      var b = iI(), _ = ge(b), C = ge(_), T = ge(C);
      ds(T, {
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
        set value(I) {
          ie(d, I, !0);
        }
      });
      var S = ye(T, 2);
      {
        var w = (I) => {
          wg(I, {
            label: "Input",
            get value() {
              return s(c);
            },
            set value(L) {
              ie(c, L, !0);
            }
          });
        };
        ce(S, (I) => {
          var L, ee;
          ((ee = (L = s(v)) == null ? void 0 : L.inputType) == null ? void 0 : ee.type) === "string" && I(w);
        });
      }
      var U = ye(S, 2);
      {
        var Y = (I) => {
          {
            let L = /* @__PURE__ */ ue(() => {
              var ee;
              return (ee = s(v).inputType) == null ? void 0 : ee.options;
            });
            ds(I, {
              label: "Input",
              get data() {
                return s(L);
              },
              get value() {
                return s(c);
              },
              set value(ee) {
                ie(c, ee, !0);
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
        ce(U, (I) => {
          var L, ee;
          ((ee = (L = s(v)) == null ? void 0 : L.inputType) == null ? void 0 : ee.type) === "select" && I(Y);
        });
      }
      var B = ye(U, 2);
      {
        var M = (I) => {
          rI(I, {
            get value() {
              return s(c);
            },
            set value(L) {
              ie(c, L, !0);
            }
          });
        };
        ce(B, (I) => {
          var L, ee;
          ((ee = (L = s(v)) == null ? void 0 : L.inputType) == null ? void 0 : ee.type) === "datepicker" && I(M);
        });
      }
      var Q = ye(B, 2);
      {
        var F = (I) => {
          dI(I, {
            get value() {
              return s(c);
            },
            set value(L) {
              ie(c, L, !0);
            }
          });
        };
        ce(Q, (I) => {
          var L, ee;
          ((ee = (L = s(v)) == null ? void 0 : L.inputType) == null ? void 0 : ee.type) === "timepicker" && I(F);
        });
      }
      var k = ye(C, 2), N = ge(k);
      ks(N, {
        callback: p,
        get disabled() {
          return s(f);
        },
        children: (I, L) => {
          var ee = Wt();
          Fe(() => dt(ee, u())), O(I, ee);
        },
        $$slots: { default: !0 }
      });
      var W = ye(N, 2);
      _e(W, () => e.filterControls ?? pe);
      var ne = ye(_, 4), H = ge(ne);
      yb(H, {
        get chips() {
          return r();
        },
        key: (L) => L.id,
        chip: (L, ee = pe) => {
          eI(L, {
            get title() {
              return ee().text;
            },
            callback: () => g(ee().id),
            get disabled() {
              return ee().disabled;
            }
          });
        },
        $$slots: { chip: !0 }
      }), O(x, b);
    },
    $$slots: { default: !0 }
  }), Me();
}
var oI = /* @__PURE__ */ be('<div class="overlay svelte-14uvd2z"><div class="loading-spinner-container svelte-14uvd2z"><div class="loading-spinner svelte-14uvd2z"></div> <span class="loading-message svelte-14uvd2z"> </span></div></div>'), sI = /* @__PURE__ */ be('<div class="svelte-14uvd2z"><!></div>');
function lI(t, e) {
  let n = m(e, "loadingDone", 3, !0), r = m(e, "message", 3, "Loading...");
  var i = sI(), a = ge(i);
  {
    var o = (u) => {
      var l = oI(), c = ge(l), d = ye(ge(c), 2), h = ge(d);
      Fe(() => dt(h, r())), O(u, l);
    };
    ce(a, (u) => {
      n() || u(o);
    });
  }
  O(t, i);
}
function uI(t, e) {
  e(t.target.value);
}
var cI = /* @__PURE__ */ be('<div class="custom-text-field svelte-6wdfbb"><input type="datetime-local" id="datetime-picker" class="custom-text-field__input svelte-6wdfbb" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-6wdfbb"> </label> <span class="custom-line svelte-6wdfbb"></span></div>');
function dI(t, e) {
  Re(e, !0);
  let n = m(e, "label", 3, ""), r = m(e, "value", 15, "");
  var i = cI(), a = ge(i);
  a.__change = [uI, r];
  var o = ye(a, 2), u = ge(o);
  Fe(() => dt(u, n())), ma(a, r), O(t, i), Me();
}
li(["change"]);
var fI = /* @__PURE__ */ be('<details class="svelte-1sq8fnx"><summary class="svelte-1sq8fnx"> </summary> <div class="expandable-content svelte-1sq8fnx"><!></div></details>');
function hI(t, e) {
  Re(e, !0);
  let n = m(e, "title", 3, ""), r = m(e, "open", 11, !1);
  Jc(t, {
    children: (i, a) => {
      var o = fI(), u = ge(o), l = ge(u), c = ye(u, 2), d = ge(c);
      _e(d, () => e.content ?? pe), Fe(() => {
        o.open = r(), dt(l, n());
      }), O(i, o);
    },
    $$slots: { default: !0 }
  }), Me();
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
var dn = {
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
var vI = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n) {
      var r = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
      return r.observer = null, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return dn;
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
      this.determinate = !this.adapter.hasClass(dn.INDETERMINATE_CLASS), this.adapter.addClass(dn.ANIMATION_READY_CLASS), this.progress = 0, this.buffer = 1, this.observer = this.adapter.attachResizeObserver(function(r) {
        var i, a;
        if (!n.determinate)
          try {
            for (var o = wt(r), u = o.next(); !u.done; u = o.next()) {
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
        this.adapter.removeClass(dn.INDETERMINATE_CLASS), this.adapter.setAttribute(wn.ARIA_VALUENOW, this.progress.toString()), this.adapter.setAttribute(wn.ARIA_VALUEMAX, "1"), this.adapter.setAttribute(wn.ARIA_VALUEMIN, "0"), this.setPrimaryBarProgress(this.progress), this.setBufferBarProgress(this.buffer);
        return;
      }
      this.observer && this.calculateAndSetDimensions(this.adapter.getWidth()), this.adapter.addClass(dn.INDETERMINATE_CLASS), this.adapter.removeAttribute(wn.ARIA_VALUENOW), this.adapter.removeAttribute(wn.ARIA_VALUEMAX), this.adapter.removeAttribute(wn.ARIA_VALUEMIN), this.setPrimaryBarProgress(1), this.setBufferBarProgress(1);
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
      this.adapter.removeClass(dn.CLOSED_CLASS), this.adapter.removeClass(dn.CLOSED_ANIMATION_OFF_CLASS), this.adapter.removeAttribute(wn.ARIA_HIDDEN);
    }, e.prototype.close = function() {
      this.adapter.addClass(dn.CLOSED_CLASS), this.adapter.setAttribute(wn.ARIA_HIDDEN, "true");
    }, e.prototype.isClosed = function() {
      return this.adapter.hasClass(dn.CLOSED_CLASS);
    }, e.prototype.handleTransitionEnd = function() {
      this.adapter.hasClass(dn.CLOSED_CLASS) && this.adapter.addClass(dn.CLOSED_ANIMATION_OFF_CLASS);
    }, e.prototype.destroy = function() {
      t.prototype.destroy.call(this), this.observer && this.observer.disconnect();
    }, e.prototype.restartAnimation = function() {
      this.adapter.removeClass(dn.ANIMATION_READY_CLASS), this.adapter.forceLayout(), this.adapter.addClass(dn.ANIMATION_READY_CLASS);
    }, e.prototype.setPrimaryBarProgress = function(n) {
      var r = "scaleX(" + n + ")", i = typeof window < "u" ? Vg(window, "transform") : "transform";
      this.adapter.setPrimaryBarStyle(i, r);
    }, e.prototype.setBufferBarProgress = function(n) {
      var r = n * 100 + "%";
      this.adapter.setBufferBarStyle(wn.FLEX_BASIS, r);
    }, e.prototype.calculateAndSetDimensions = function(n) {
      var r = n * aa.PRIMARY_HALF, i = n * aa.PRIMARY_FULL, a = n * aa.SECONDARY_QUARTER, o = n * aa.SECONDARY_HALF, u = n * aa.SECONDARY_FULL;
      this.adapter.setStyle("--mdc-linear-progress-primary-half", r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-half-neg", -r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full", i + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full-neg", -i + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter", a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg", -a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half", o + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg", -o + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full", u + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg", -u + "px"), this.restartAnimation();
    }, e;
  }(Pt)
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
var tr = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, $l = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, jr = {
  ARIA_SELECTED: $l.ARIA_SELECTED,
  ARIA_SORT: $l.ARIA_SORT
}, hn;
(function(t) {
  t.ASCENDING = "ascending", t.DESCENDING = "descending", t.NONE = "none", t.OTHER = "other";
})(hn || (hn = {}));
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
var mI = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n) {
      return t.call(this, de(de({}, e.defaultAdapter), n)) || this;
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
      return Ju(this, void 0, void 0, function() {
        return Os(this, function(n) {
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
        o !== i && (this.adapter.removeClassNameByHeaderCellIndex(o, tr.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(o, tr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(o, jr.ARIA_SORT, hn.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(o, hn.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, tr.HEADER_CELL_SORTED);
      var u = this.adapter.getAttributeByHeaderCellIndex(i, jr.ARIA_SORT), l = hn.NONE;
      u === hn.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, tr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, jr.ARIA_SORT, hn.DESCENDING), l = hn.DESCENDING) : u === hn.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, tr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, jr.ARIA_SORT, hn.ASCENDING), l = hn.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, jr.ARIA_SORT, hn.ASCENDING), l = hn.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, l), this.adapter.notifySortAction({
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
      }), this.adapter.addClass(tr.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(tr.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(n, r) {
      r ? (this.adapter.addClassAtRowIndex(n, tr.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, jr.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(n, tr.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, jr.ARIA_SELECTED, "false"));
    }, e;
  }(Pt)
), pI = /* @__PURE__ */ be('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), gI = /* @__PURE__ */ be("<div><div><table><!></table></div> <!> <!></div>");
function bI(t, e) {
  Re(e, !0);
  const n = () => Dt(M, "$progressClosed", r), [r, i] = xn(), { closest: a } = bo;
  let o = m(e, "use", 19, () => []), u = m(e, "class", 3, ""), l = m(e, "stickyHeader", 3, !1), c = m(e, "sortable", 3, !1), d = m(e, "sort", 15, null), h = m(e, "sortDirection", 15, "ascending"), f = m(e, "sortAscendingAriaLabel", 3, "sorted, ascending"), v = m(e, "sortDescendingAriaLabel", 3, "sorted, descending"), p = m(e, "container$use", 19, () => []), g = m(e, "container$class", 3, ""), y = m(e, "table$use", 19, () => []), E = m(e, "table$class", 3, ""), x = /* @__PURE__ */ qe(e, [
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
  ]), A, b = /* @__PURE__ */ xe(void 0), _, C = /* @__PURE__ */ xe(void 0), T = /* @__PURE__ */ xe(void 0), S = Ee({}), w = /* @__PURE__ */ xe(Ee({ height: "auto", top: "initial" })), U = se("SMUI:addLayoutListener"), Y, B = !1, M = Ct(!1), Q = Ct(d());
  we(() => {
    vn(Q, d());
  });
  let F = Ct(h());
  we(() => {
    vn(F, h());
  }), te("SMUI:checkbox:context", "data-table"), te("SMUI:linear-progress:context", "data-table"), te("SMUI:linear-progress:closed", M), te("SMUI:data-table:sortable", c()), te("SMUI:data-table:sort", Q), te("SMUI:data-table:sortDirection", F), te("SMUI:data-table:sortAscendingAriaLabel", f()), te("SMUI:data-table:sortDescendingAriaLabel", v()), U && (Y = U(D));
  let k;
  we(() => {
    e.progress && s(b) && k !== n() && (k = n(), n() ? s(b).hideProgress() : s(b).showProgress());
  }), te("SMUI:checkbox:mount", () => {
    s(b) && B && s(b).layout();
  }), te("SMUI:data-table:header:mount", (P) => {
    ie(C, P, !0);
  }), te("SMUI:data-table:header:unmount", () => {
    ie(C, void 0);
  }), te("SMUI:data-table:body:mount", (P) => {
    ie(T, P, !0);
  }), te("SMUI:data-table:body:unmount", () => {
    ie(T, void 0);
  }), at(() => (ie(
    b,
    new mI({
      addClass: W,
      removeClass: ne,
      getHeaderCellElements: () => {
        var P;
        return ((P = s(C)) == null ? void 0 : P.cells.map((G) => G.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var P;
        return ((P = s(C)) == null ? void 0 : P.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (P, G) => {
        var J;
        return ((J = s(C)) == null ? void 0 : J.orderedCells[P].getAttr(G)) ?? null;
      },
      setAttributeByHeaderCellIndex: (P, G, J) => {
        var Ce;
        (Ce = s(C)) == null || Ce.orderedCells[P].addAttr(G, J);
      },
      setClassNameByHeaderCellIndex: (P, G) => {
        var J;
        (J = s(C)) == null || J.orderedCells[P].addClass(G);
      },
      removeClassNameByHeaderCellIndex: (P, G) => {
        var J;
        (J = s(C)) == null || J.orderedCells[P].removeClass(G);
      },
      notifySortAction: (P) => {
        d(P.columnId), h(P.sortValue), ze(j(), "SMUIDataTableSorted", P);
      },
      getTableContainerHeight: () => _.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const P = j().querySelector(".mdc-data-table__header-row");
        if (!P)
          throw new Error("MDCDataTable: Table header element not found.");
        return P.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (P) => {
        ie(w, P, !0);
      },
      addClassAtRowIndex: (P, G) => {
        var J;
        (J = s(T)) == null || J.orderedRows[P].addClass(G);
      },
      getRowCount: () => {
        var P;
        return ((P = s(T)) == null ? void 0 : P.rows.length) ?? 0;
      },
      getRowElements: () => {
        var P;
        return ((P = s(T)) == null ? void 0 : P.rows.map((G) => G.element)) ?? [];
      },
      getRowIdAtIndex: (P) => {
        var G;
        return ((G = s(T)) == null ? void 0 : G.orderedRows[P].rowId) ?? null;
      },
      getRowIndexByChildElement: (P) => {
        var G;
        return ((G = s(T)) == null ? void 0 : G.orderedRows.map((J) => J.element).indexOf(a(P, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var P;
        return ((P = s(T)) == null ? void 0 : P.rows.filter((G) => G.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (P) => {
        var J;
        const G = (J = s(T)) == null ? void 0 : J.orderedRows[P].checkbox;
        return G ? G.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var G;
        const P = (G = s(C)) == null ? void 0 : G.checkbox;
        return P ? P.checked : !1;
      },
      isRowsSelectable: () => !!j().querySelector(".mdc-data-table__row-checkbox") || !!j().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (P) => {
        var J;
        const G = (J = s(T)) == null ? void 0 : J.orderedRows[P.rowIndex];
        G && ze(j(), "SMUIDataTableSelectionChanged", {
          row: G.element,
          rowId: G.rowId,
          rowIndex: P.rowIndex,
          selected: P.selected
        });
      },
      notifySelectedAll: () => {
        H(!1), ze(j(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        H(!1), ze(j(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (P) => ze(j(), "SMUIDataTableClickRow", P),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (P, G) => {
        var J;
        (J = s(T)) == null || J.orderedRows[P].removeClass(G);
      },
      setAttributeAtRowIndex: (P, G, J) => {
        var Ce;
        (Ce = s(T)) == null || Ce.orderedRows[P].addAttr(G, J);
      },
      setHeaderRowCheckboxChecked: (P) => {
        var J;
        const G = (J = s(C)) == null ? void 0 : J.checkbox;
        G && (G.checked = P);
      },
      setHeaderRowCheckboxIndeterminate: H,
      setRowCheckboxCheckedAtIndex: (P, G) => {
        var Ce;
        const J = (Ce = s(T)) == null ? void 0 : Ce.orderedRows[P].checkbox;
        J && (J.checked = G);
      },
      setSortStatusLabelByHeaderCellIndex: (P, G) => {
      }
    }),
    !0
  ), s(b).init(), s(b).layout(), B = !0, () => {
    var P;
    (P = s(b)) == null || P.destroy();
  })), Kn(() => {
    Y && Y();
  });
  function N(P) {
    s(b) && s(b).handleRowCheckboxChange(P);
  }
  function W(P) {
    S[P] || (S[P] = !0);
  }
  function ne(P) {
    (!(P in S) || S[P]) && (S[P] = !1);
  }
  function H(P) {
    var J;
    const G = (J = s(C)) == null ? void 0 : J.checkbox;
    G && (G.indeterminate = P);
  }
  function I(P) {
    if (!s(b) || !P.detail.target)
      return;
    const G = a(P.detail.target, ".mdc-data-table__header-cell--with-sort");
    G && ee(G);
  }
  function L(P) {
    if (!s(b) || !P.detail.target)
      return;
    const G = a(P.detail.target, ".mdc-data-table__row");
    G && s(b) && s(b).handleRowClick({ rowId: P.detail.rowId, row: G });
  }
  function ee(P) {
    var Nt, bt;
    const G = ((Nt = s(C)) == null ? void 0 : Nt.orderedCells) ?? [], J = G.map((pn) => pn.element).indexOf(P);
    if (J === -1)
      return;
    const Ce = G[J].columnId ?? null;
    (bt = s(b)) == null || bt.handleSortAction({ columnId: Ce, columnIndex: J, headerCell: P });
  }
  function D() {
    var P;
    return (P = s(b)) == null ? void 0 : P.layout();
  }
  function j() {
    return A;
  }
  var me = { layout: D, getElement: j }, V = gI(), re = (P) => {
    var G;
    s(b) && s(b).handleHeaderRowCheckboxChange(), (G = e.onSMUIDataTableHeaderCheckboxChange) == null || G.call(e, P);
  }, X = (P) => {
    var G;
    I(P), (G = e.onSMUIDataTableHeaderClick) == null || G.call(e, P);
  }, he = (P) => {
    var G;
    L(P), (G = e.onSMUIDataTableRowClick) == null || G.call(e, P);
  }, ae = (P) => {
    var G;
    N(P), (G = e.onSMUIDataTableBodyCheckboxChange) == null || G.call(e, P);
  };
  Be(
    V,
    (P, G) => ({
      class: P,
      ...G,
      onSMUIDataTableHeaderCheckboxChange: re,
      onSMUIDataTableHeaderClick: X,
      onSMUIDataTableRowClick: he,
      onSMUIDataTableBodyCheckboxChange: ae
    }),
    [
      () => He({
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": l(),
        ...S,
        [u()]: !0
      }),
      () => ji(x, ["container$", "table$"])
    ]
  );
  var ke = ge(V);
  Be(ke, (P, G) => ({ class: P, ...G }), [
    () => He({
      "mdc-data-table__table-container": !0,
      [g()]: !0
    }),
    () => st(x, "container$")
  ]);
  var Ge = ge(ke);
  Be(Ge, (P, G) => ({ class: P, ...G }), [
    () => He({ "mdc-data-table__table": !0, [E()]: !0 }),
    () => st(x, "table$")
  ]);
  var Ne = ge(Ge);
  _e(Ne, () => e.children ?? pe), Ue(Ge, (P, G) => K == null ? void 0 : K(P, G), y), Te(ke, (P) => _ = P, () => _), Ue(ke, (P, G) => K == null ? void 0 : K(P, G), p);
  var Ae = ye(ke, 2);
  {
    var oe = (P) => {
      var G = pI(), J = ye(ge(G), 2);
      _e(J, () => e.progress ?? pe), Fe((Ce) => en(G, Ce), [
        () => Object.entries(s(w)).map(([Ce, Nt]) => `${Ce}: ${Nt};`).join(" ")
      ]), O(P, G);
    };
    ce(Ae, (P) => {
      e.progress && P(oe);
    });
  }
  var Le = ye(Ae, 2);
  _e(Le, () => e.paginate ?? pe), Te(V, (P) => A = P, () => A), Ue(V, (P, G) => K == null ? void 0 : K(P, G), o), O(t, V);
  var Ze = Me(me);
  return i(), Ze;
}
var II = /* @__PURE__ */ be("<thead><!></thead>");
function yI(t, e) {
  Re(e, !0);
  let n = m(e, "use", 19, () => []), r = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i, a = /* @__PURE__ */ xe(void 0), o = [];
  const u = /* @__PURE__ */ new WeakMap();
  te("SMUI:data-table:row:header", !0);
  const l = se("SMUI:checkbox:mount");
  te("SMUI:checkbox:mount", (E) => {
    ie(a, E, !0), l && l(E);
  });
  const c = se("SMUI:checkbox:unmount");
  te("SMUI:checkbox:unmount", (E) => {
    ie(a, void 0), c && c(E);
  }), te("SMUI:data-table:cell:mount", (E) => {
    o.push(E), u.set(E.element, E);
  }), te("SMUI:data-table:cell:unmount", (E) => {
    const x = o.findIndex((A) => A === E);
    x !== -1 && o.splice(x, 1), u.delete(E.element);
  });
  const d = se("SMUI:data-table:header:mount"), h = se("SMUI:data-table:header:unmount");
  at(() => {
    const E = {
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
    return d && d(E), () => {
      h && h(E);
    };
  });
  function f() {
    return [
      ...v().querySelectorAll(".mdc-data-table__header-cell")
    ].map((E) => u.get(E)).filter((E) => E && E._smui_data_table_header_cell_accessor);
  }
  function v() {
    return i;
  }
  var p = { getElement: v }, g = II();
  Be(g, () => ({ ...r }));
  var y = ge(g);
  return _e(y, () => e.children ?? pe), Te(g, (E) => i = E, () => i), Ue(g, (E, x) => K == null ? void 0 : K(E, x), n), O(t, g), Me(p);
}
var _I = /* @__PURE__ */ be("<tbody><!></tbody>");
function EI(t, e) {
  Re(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "children"
  ]), a, o = [];
  const u = /* @__PURE__ */ new WeakMap();
  te("SMUI:data-table:row:header", !1), te("SMUI:data-table:row:mount", (g) => {
    o.push(g), u.set(g.element, g);
  }), te("SMUI:data-table:row:unmount", (g) => {
    const y = o.findIndex((E) => E === g);
    y !== -1 && o.splice(y, 1), u.delete(g.element);
  });
  const l = se("SMUI:data-table:body:mount"), c = se("SMUI:data-table:body:unmount");
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
      c && c(g);
    };
  });
  function d() {
    return [...h().querySelectorAll(".mdc-data-table__row")].map((g) => u.get(g)).filter((g) => g && g._smui_data_table_row_accessor);
  }
  function h() {
    return a;
  }
  var f = { getElement: h }, v = _I();
  Be(v, (g) => ({ class: g, ...i }), [
    () => He({ "mdc-data-table__content": !0, [r()]: !0 })
  ]);
  var p = ge(v);
  return _e(p, () => e.children ?? pe), Te(v, (g) => a = g, () => a), Ue(v, (g, y) => K == null ? void 0 : K(g, y), n), O(t, v), Me(f);
}
let AI = 0;
var CI = /* @__PURE__ */ be("<tr><!></tr>");
function eu(t, e) {
  Re(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "rowId", 19, () => "SMUI-data-table-row-" + AI++), a = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "rowId",
    "children"
  ]), o, u = /* @__PURE__ */ xe(void 0), l = Ee({}), c = Ee({}), d = se("SMUI:data-table:row:header");
  const h = se("SMUI:checkbox:mount");
  te("SMUI:checkbox:mount", (U) => {
    ie(u, U, !0), h && h(U);
  });
  const f = se("SMUI:checkbox:unmount");
  te("SMUI:checkbox:unmount", (U) => {
    ie(u, void 0), f && f(U);
  });
  const v = se("SMUI:data-table:row:mount"), p = se("SMUI:data-table:row:unmount");
  at(() => {
    const U = d ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return _();
      },
      get checkbox() {
        return s(u);
      },
      get rowId() {
      },
      get selected() {
        return (s(u) && s(u).checked) ?? !1;
      },
      addClass: g,
      removeClass: y,
      getAttr: E,
      addAttr: x
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return _();
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
      addClass: g,
      removeClass: y,
      getAttr: E,
      addAttr: x
    };
    return v && v(U), () => {
      p && p(U);
    };
  });
  function g(U) {
    l[U] || (l[U] = !0);
  }
  function y(U) {
    (!(U in l) || l[U]) && (l[U] = !1);
  }
  function E(U) {
    return U in c ? c[U] ?? null : _().getAttribute(U);
  }
  function x(U, Y) {
    c[U] !== Y && (c[U] = Y);
  }
  function A(U) {
    ze(_(), "SMUIDataTableHeaderClick", U);
  }
  function b(U) {
    ze(_(), "SMUIDataTableRowClick", { rowId: i(), target: U.target });
  }
  function _() {
    return o;
  }
  var C = { getElement: _ }, T = CI(), S = (U) => {
    var Y;
    d ? A(U) : b(U), (Y = e.onclick) == null || Y.call(e, U);
  };
  Be(
    T,
    (U) => ({
      class: U,
      "aria-selected": s(u) ? s(u).checked ? "true" : "false" : void 0,
      ...c,
      ...a,
      onclick: S
    }),
    [
      () => He({
        "mdc-data-table__header-row": d,
        "mdc-data-table__row": !d,
        "mdc-data-table__row--selected": !d && s(u) && s(u).checked,
        ...l,
        [r()]: !0
      })
    ]
  );
  var w = ge(T);
  return _e(w, () => e.children ?? pe), Te(T, (U) => o = U, () => o), Ue(T, (U, Y) => K == null ? void 0 : K(U, Y), n), O(t, T), Me(C);
}
let SI = 0;
var xI = /* @__PURE__ */ be('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), TI = /* @__PURE__ */ be("<th><!></th>"), LI = /* @__PURE__ */ be("<td><!></td>");
function Go(t, e) {
  Re(e, !0);
  const n = () => Dt(E, "$sort", i), r = () => Dt(x, "$sortDirection", i), [i, a] = xn();
  let o = se("SMUI:data-table:row:header"), u = m(e, "use", 19, () => []), l = m(e, "class", 3, ""), c = m(e, "numeric", 3, !1), d = m(e, "checkbox", 3, !1), h = m(e, "columnId", 19, () => o ? "SMUI-data-table-column-" + SI++ : "SMUI-data-table-unused"), f = m(e, "sortable", 19, () => se("SMUI:data-table:sortable")), v = /* @__PURE__ */ qe(e, [
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
  ]), p, g = Ee({}), y = Ee({}), E = se("SMUI:data-table:sort"), x = se("SMUI:data-table:sortDirection"), A = se("SMUI:data-table:sortAscendingAriaLabel"), b = se("SMUI:data-table:sortDescendingAriaLabel");
  f() && (te("SMUI:label:context", "data-table:sortable-header-cell"), te("SMUI:icon-button:context", "data-table:sortable-header-cell"), te("SMUI:icon-button:aria-describedby", h() + "-status-label"));
  const _ = se("SMUI:data-table:cell:mount"), C = se("SMUI:data-table:cell:unmount");
  at(() => {
    const H = o ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return M();
      },
      get columnId() {
        return h();
      },
      addClass: T,
      removeClass: S,
      getAttr: w,
      addAttr: U
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return M();
      },
      get columnId() {
      },
      addClass: T,
      removeClass: S,
      getAttr: w,
      addAttr: U
    };
    return _ && _(H), () => {
      C && C(H);
    };
  });
  function T(H) {
    g[H] || (g[H] = !0);
  }
  function S(H) {
    (!(H in g) || g[H]) && (g[H] = !1);
  }
  function w(H) {
    return H in y ? y[H] ?? null : M().getAttribute(H);
  }
  function U(H, I) {
    y[H] !== I && (y[H] = I);
  }
  function Y(H) {
    ze(M(), "SMUIDataTableHeaderCheckboxChange", H);
  }
  function B(H) {
    ze(M(), "SMUIDataTableBodyCheckboxChange", H);
  }
  function M() {
    return p;
  }
  var Q = { getElement: M }, F = le(), k = Z(F);
  {
    var N = (H) => {
      var I = TI(), L = (me) => {
        var V;
        d() && Y(me), (V = e.onchange) == null || V.call(e, me);
      };
      Be(
        I,
        (me) => ({
          class: me,
          role: "columnheader",
          scope: "col",
          "data-column-id": h(),
          "aria-sort": f() ? n() === h() ? r() : "none" : void 0,
          ...y,
          ...v,
          onchange: L
        }),
        [
          () => He({
            "mdc-data-table__header-cell": !0,
            "mdc-data-table__header-cell--numeric": c(),
            "mdc-data-table__header-cell--checkbox": d(),
            "mdc-data-table__header-cell--with-sort": f(),
            "mdc-data-table__header-cell--sorted": f() && n() === h(),
            ...g,
            [l()]: !0
          })
        ]
      );
      var ee = ge(I);
      {
        var D = (me) => {
          var V = xI(), re = ge(V);
          _e(re, () => e.children ?? pe);
          var X = ye(re, 2), he = ge(X);
          Fe(() => {
            va(X, "id", `${h() ?? ""}-status-label`), dt(he, n() === h() ? r() === "ascending" ? A : b : "");
          }), O(me, V);
        }, j = (me) => {
          var V = le(), re = Z(V);
          _e(re, () => e.children ?? pe), O(me, V);
        };
        ce(ee, (me) => {
          f() ? me(D) : me(j, !1);
        });
      }
      Te(I, (me) => p = me, () => p), Ue(I, (me, V) => K == null ? void 0 : K(me, V), u), O(H, I);
    }, W = (H) => {
      var I = LI(), L = (D) => {
        var j;
        d() && B(D), (j = e.onchange) == null || j.call(e, D);
      };
      Be(
        I,
        (D) => ({
          class: D,
          ...y,
          ...v,
          onchange: L
        }),
        [
          () => He({
            "mdc-data-table__cell": !0,
            "mdc-data-table__cell--numeric": c(),
            "mdc-data-table__cell--checkbox": d(),
            ...g,
            [l()]: !0
          })
        ]
      );
      var ee = ge(I);
      _e(ee, () => e.children ?? pe), Te(I, (D) => p = D, () => p), Ue(I, (D, j) => K == null ? void 0 : K(D, j), u), O(H, I);
    };
    ce(k, (H) => {
      o ? H(N) : H(W, !1);
    });
  }
  O(t, F);
  var ne = Me(Q);
  return a(), ne;
}
li(["click"]);
li(["click"]);
function hs(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
var wI = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
hs({}, wI.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
var Fa, tu = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
};
Fa = {}, hs(Fa, tu.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), hs(Fa, tu.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list");
const OI = Ct([]);
OI.subscribe;
li(["click", "pointerdown", "pointerup", "pointermove"]);
var RI = /* @__PURE__ */ be('<div><div class="mdc-linear-progress__buffer"><div class="mdc-linear-progress__buffer-bar"></div> <div class="mdc-linear-progress__buffer-dots"></div></div> <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"><span class="mdc-linear-progress__bar-inner"></span></div> <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span class="mdc-linear-progress__bar-inner"></span></div></div>');
function MI(t, e) {
  Re(e, !0);
  const [n, r] = xn();
  let i = m(e, "use", 19, () => []), a = m(e, "class", 3, ""), o = m(e, "style", 3, ""), u = m(e, "indeterminate", 3, !1), l = m(e, "closed", 3, !1), c = m(e, "progress", 3, 0), d = m(e, "buffer", 3, void 0), h = /* @__PURE__ */ qe(e, [
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
  ]), f, v = /* @__PURE__ */ xe(void 0), p = Ee({}), g = Ee({}), y = Ee({}), E = Ee({}), x = Ee({}), A = se("SMUI:linear-progress:context"), b = se("SMUI:linear-progress:closed");
  we(() => {
    b && vn(b, l());
  }), we(() => {
    s(v) && s(v).isDeterminate() !== !u() && s(v).setDeterminate(!u());
  }), we(() => {
    s(v) && s(v).getProgress() !== c() && s(v).setProgress(c());
  }), we(() => {
    s(v) && (d() == null ? s(v).setBuffer(1) : s(v).setBuffer(d()));
  }), we(() => {
    s(v) && (l() ? s(v).close() : s(v).open());
  }), at(() => (ie(
    v,
    new vI({
      addClass: C,
      forceLayout: () => {
        M().getBoundingClientRect();
      },
      setBufferBarStyle: Y,
      setPrimaryBarStyle: B,
      hasClass: _,
      removeAttribute: w,
      removeClass: T,
      setAttribute: S,
      setStyle: U,
      attachResizeObserver: (I) => {
        const L = window.ResizeObserver;
        if (L) {
          const ee = new L(I);
          return ee.observe(M()), ee;
        }
        return null;
      },
      getWidth: () => M().offsetWidth
    }),
    !0
  ), s(v).init(), () => {
    var I;
    (I = s(v)) == null || I.destroy();
  }));
  function _(I) {
    return I in p ? p[I] : M().classList.contains(I);
  }
  function C(I) {
    p[I] || (p[I] = !0);
  }
  function T(I) {
    (!(I in p) || p[I]) && (p[I] = !1);
  }
  function S(I, L) {
    g[I] !== L && (g[I] = L);
  }
  function w(I) {
    (!(I in g) || g[I] != null) && (g[I] = void 0);
  }
  function U(I, L) {
    y[I] != L && (L === "" || L == null ? delete y[I] : y[I] = L);
  }
  function Y(I, L) {
    E[I] != L && (L === "" || L == null ? delete E[I] : E[I] = L);
  }
  function B(I, L) {
    x[I] != L && (L === "" || L == null ? delete x[I] : x[I] = L);
  }
  function M() {
    return f;
  }
  var Q = { getElement: M }, F = RI(), k = (I) => {
    var L;
    s(v) && s(v).handleTransitionEnd(), (L = e.ontransitionend) == null || L.call(e, I);
  };
  Be(
    F,
    (I, L) => ({
      class: I,
      style: L,
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 1,
      "aria-valuenow": u() ? void 0 : c(),
      ...g,
      ...h,
      ontransitionend: k
    }),
    [
      () => He({
        "mdc-linear-progress": !0,
        "mdc-linear-progress--indeterminate": u(),
        "mdc-linear-progress--closed": l(),
        "mdc-data-table__linear-progress": A === "data-table",
        ...p,
        [a()]: !0
      }),
      () => Object.entries(y).map(([I, L]) => `${I}: ${L};`).concat([o()]).join(" ")
    ]
  );
  var N = ge(F), W = ge(N), ne = ye(N, 2);
  Te(F, (I) => f = I, () => f), Ue(F, (I, L) => K == null ? void 0 : K(I, L), i), Fe(
    (I, L) => {
      en(W, I), en(ne, L);
    },
    [
      () => Object.entries(E).map(([I, L]) => `${I}: ${L};`).join(" "),
      () => Object.entries(x).map(([I, L]) => `${I}: ${L};`).join(" ")
    ]
  ), O(t, F);
  var H = Me(Q);
  return r(), H;
}
var DI = /* @__PURE__ */ ln('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 4l-8 8h16l-8-8z"></path></svg>'), PI = /* @__PURE__ */ ln('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 20l8-8H4l8 8z"></path></svg>'), NI = (t, e) => e(), HI = /* @__PURE__ */ be('<input type="text" class="svelte-1mj71p3"/>'), UI = (t, e) => e(), FI = /* @__PURE__ */ be('<input type="number" class="svelte-1mj71p3"/>'), BI = /* @__PURE__ */ be("<!> <!>", 1), kI = /* @__PURE__ */ be('<div class="custom-cell-container svelte-1mj71p3"><div class="cell-header svelte-1mj71p3"><span class="header-title svelte-1mj71p3"> </span> <!></div> <!></div>'), VI = /* @__PURE__ */ be('<div class="cell-actions svelte-1mj71p3"></div>'), GI = /* @__PURE__ */ be("<!> <!>", 1);
function nu(t, e) {
  Re(e, !0);
  const n = () => Dt(g, "$sortColumn", a), r = () => Dt(y, "$sortDirection", a), i = () => Dt(p, "$filteredData", a), [a, o] = xn();
  let u = m(e, "loadingDone", 15, !0), l = m(e, "label", 19, rd), c = m(e, "columnDefs", 19, () => []), d = m(e, "rowData", 31, () => Ee([])), h = m(e, "rowActions", 19, () => []), f = m(e, "searchInputLabel", 3, "Search"), v = Ee({ name: "", color: "", number: "" }), p = Ct([]), g = Ct(null), y = Ct(null);
  e.store.store.subscribe((b) => {
    d([...b]), E();
  });
  function E() {
    let b = d().filter((_) => c().every((C) => {
      const T = v[C.field], S = _[C.field];
      return T ? C.filterType === "number" ? S == T : S.toString().toLowerCase().includes(T.toLowerCase()) : !0;
    }));
    b = x(b), p.set(b);
  }
  function x(b) {
    let _, C;
    return g.subscribe((T) => _ = T), y.subscribe((T) => C = T), !_ || !C ? b : b.sort((T, S) => {
      let w = T[_], U = S[_];
      return w == null && (w = ""), U == null && (U = ""), C === "asc" ? w.toString().localeCompare(U.toString()) : U.toString().localeCompare(w.toString());
    });
  }
  function A(b) {
    g.update((_) => {
      if (_ === b)
        y.update((C) => C === "asc" ? "desc" : C === "desc" ? null : "asc");
      else
        return y.set("asc"), b;
      return b;
    }), E();
  }
  p.set(d()), bI(t, {
    get "table$aria-label"() {
      return l();
    },
    style: "max-width: 100%; width: 100%;",
    progress: (_) => {
      MI(_, {
        indeterminate: !0,
        "aria-label": "Data is being loaded...",
        get closed() {
          return u();
        },
        set closed(C) {
          u(C);
        }
      });
    },
    children: (_, C) => {
      var T = GI(), S = Z(T);
      yI(S, {
        children: (U, Y) => {
          eu(U, {
            class: "header-row",
            children: (B, M) => {
              var Q = le(), F = Z(Q);
              bi(F, 17, c, ja, (k, N) => {
                Go(k, {
                  get style() {
                    return s(N).headerStyle;
                  },
                  $$events: {
                    click: () => s(N).sortable && A(s(N).field)
                  },
                  children: (W, ne) => {
                    var H = kI(), I = ge(H), L = ge(I), ee = ge(L), D = ye(L, 2);
                    {
                      var j = (re) => {
                        var X = le(), he = Z(X);
                        {
                          var ae = (ke) => {
                            var Ge = le(), Ne = Z(Ge);
                            {
                              var Ae = (Le) => {
                                var Ze = DI();
                                O(Le, Ze);
                              }, oe = (Le) => {
                                var Ze = le(), P = Z(Ze);
                                {
                                  var G = (J) => {
                                    var Ce = PI();
                                    O(J, Ce);
                                  };
                                  ce(
                                    P,
                                    (J) => {
                                      r() === "desc" && J(G);
                                    },
                                    !0
                                  );
                                }
                                O(Le, Ze);
                              };
                              ce(Ne, (Le) => {
                                r() === "asc" ? Le(Ae) : Le(oe, !1);
                              });
                            }
                            O(ke, Ge);
                          };
                          ce(he, (ke) => {
                            n() === s(N).field && r() !== null && ke(ae);
                          });
                        }
                        O(re, X);
                      };
                      ce(D, (re) => {
                        s(N).sortable && re(j);
                      });
                    }
                    var me = ye(I, 2);
                    {
                      var V = (re) => {
                        var X = BI(), he = Z(X);
                        {
                          var ae = (Ne) => {
                            var Ae = HI();
                            Ae.__input = [NI, E], Fe(() => va(Ae, "placeholder", `${f()} ${s(N).headerName}`)), ma(Ae, () => v[s(N).field], (oe) => v[s(N).field] = oe), O(Ne, Ae);
                          };
                          ce(he, (Ne) => {
                            s(N).filterType === "text" && Ne(ae);
                          });
                        }
                        var ke = ye(he, 2);
                        {
                          var Ge = (Ne) => {
                            var Ae = FI();
                            Ae.__input = [UI, E], Fe(() => va(Ae, "placeholder", `${f()} ${s(N).headerName}`)), ma(Ae, () => v[s(N).field], (oe) => v[s(N).field] = oe), O(Ne, Ae);
                          };
                          ce(ke, (Ne) => {
                            s(N).filterType === "number" && Ne(Ge);
                          });
                        }
                        O(re, X);
                      };
                      ce(me, (re) => {
                        s(N).filter && re(V);
                      });
                    }
                    Fe(() => {
                      en(H, `min-width: ${s(N).minWidth ?? 0 ?? ""}`), dt(ee, s(N).headerName);
                    }), O(W, H);
                  },
                  $$slots: { default: !0 }
                });
              }), O(B, Q);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var w = ye(S, 2);
      EI(w, {
        children: (U, Y) => {
          var B = le(), M = Z(B);
          bi(M, 1, i, ja, (Q, F) => {
            eu(Q, {
              children: (k, N) => {
                var W = le(), ne = Z(W);
                bi(ne, 17, c, (H) => H.field, (H, I) => {
                  var L = le(), ee = Z(L);
                  {
                    var D = (me) => {
                      Go(me, {
                        children: (V, re) => {
                          var X = VI();
                          bi(X, 21, h, ja, (he, ae) => {
                            var ke = le(), Ge = Z(ke);
                            {
                              var Ne = (oe) => {
                                {
                                  let Le = /* @__PURE__ */ ue(() => s(ae).disabled(s(F)));
                                  Yp(oe, {
                                    get iconComponent() {
                                      return s(ae).iconComponent;
                                    },
                                    get iconStyles() {
                                      return s(ae).iconStyles;
                                    },
                                    callback: () => s(ae).callback(s(F)),
                                    get disabled() {
                                      return s(Le);
                                    }
                                  });
                                }
                              }, Ae = (oe) => {
                                {
                                  let Le = /* @__PURE__ */ ue(() => s(ae).disabled(s(F)));
                                  ks(oe, {
                                    class: "button",
                                    variant: "raised",
                                    callback: () => s(ae).callback(s(F)),
                                    get disabled() {
                                      return s(Le);
                                    },
                                    children: (Ze, P) => {
                                      var G = le(), J = Z(G);
                                      {
                                        var Ce = (bt) => {
                                          Ub(bt, { svgStyles: "margin: unset" });
                                        }, Nt = (bt) => {
                                          var pn = le(), ve = Z(pn);
                                          {
                                            var Ie = (z) => {
                                              id(z, { svgStyles: "margin: unset" });
                                            }, q = (z) => {
                                              var De = le(), ut = Z(De);
                                              {
                                                var pt = (It) => {
                                                  kb(It, { svgStyles: "margin: unset" });
                                                }, Ot = (It) => {
                                                  var zn = le(), ft = Z(zn);
                                                  {
                                                    var Rt = (Kt) => {
                                                      Gb(Kt, { svgStyles: "margin: unset" });
                                                    }, Bt = (Kt) => {
                                                      var Pr = le(), Hn = Z(Pr);
                                                      {
                                                        var We = (Xe) => {
                                                          Xb(Xe, { svgStyles: "margin: unset" });
                                                        }, et = (Xe) => {
                                                          var xt = le(), cn = Z(xt);
                                                          {
                                                            var tt = (ht) => {
                                                              Zb(ht, { svgStyles: "margin: unset" });
                                                            }, yt = (ht) => {
                                                              var Je = le(), Tt = Z(Je);
                                                              {
                                                                var Ln = (ot) => {
                                                                  Jb(ot, { svgStyles: "margin: unset" });
                                                                }, rn = (ot) => {
                                                                  qb(ot, { svgStyles: "margin: unset" });
                                                                };
                                                                ce(
                                                                  Tt,
                                                                  (ot) => {
                                                                    s(ae).icon === "delete" ? ot(Ln) : ot(rn, !1);
                                                                  },
                                                                  !0
                                                                );
                                                              }
                                                              O(ht, Je);
                                                            };
                                                            ce(
                                                              cn,
                                                              (ht) => {
                                                                s(ae).icon === "edit" ? ht(tt) : ht(yt, !1);
                                                              },
                                                              !0
                                                            );
                                                          }
                                                          O(Xe, xt);
                                                        };
                                                        ce(
                                                          Hn,
                                                          (Xe) => {
                                                            s(ae).icon === "remove" ? Xe(We) : Xe(et, !1);
                                                          },
                                                          !0
                                                        );
                                                      }
                                                      O(Kt, Pr);
                                                    };
                                                    ce(
                                                      ft,
                                                      (Kt) => {
                                                        s(ae).icon === "find-in-page" ? Kt(Rt) : Kt(Bt, !1);
                                                      },
                                                      !0
                                                    );
                                                  }
                                                  O(It, zn);
                                                };
                                                ce(
                                                  ut,
                                                  (It) => {
                                                    s(ae).icon === "download" ? It(pt) : It(Ot, !1);
                                                  },
                                                  !0
                                                );
                                              }
                                              O(z, De);
                                            };
                                            ce(
                                              ve,
                                              (z) => {
                                                s(ae).icon === "cancel" ? z(Ie) : z(q, !1);
                                              },
                                              !0
                                            );
                                          }
                                          O(bt, pn);
                                        };
                                        ce(J, (bt) => {
                                          s(ae).icon === "add" ? bt(Ce) : bt(Nt, !1);
                                        });
                                      }
                                      O(Ze, G);
                                    },
                                    $$slots: { default: !0 }
                                  });
                                }
                              };
                              ce(Ge, (oe) => {
                                s(ae).iconComponent ? oe(Ne) : oe(Ae, !1);
                              });
                            }
                            O(he, ke);
                          }), O(V, X);
                        },
                        $$slots: { default: !0 }
                      });
                    }, j = (me) => {
                      Go(me, {
                        get numeric() {
                          return s(I).numeric;
                        },
                        get style() {
                          return s(I).cellStyle;
                        },
                        children: (V, re) => {
                          var X = le(), he = Z(X);
                          {
                            var ae = (Ge) => {
                              var Ne = Wt();
                              Fe((Ae) => dt(Ne, Ae), [
                                () => s(I).valueFormatter(s(F)[s(I).field])
                              ]), O(Ge, Ne);
                            }, ke = (Ge) => {
                              var Ne = Wt();
                              Fe(() => dt(Ne, s(F)[s(I).field] ?? "")), O(Ge, Ne);
                            };
                            ce(he, (Ge) => {
                              s(I).valueFormatter ? Ge(ae) : Ge(ke, !1);
                            });
                          }
                          O(V, X);
                        },
                        $$slots: { default: !0 }
                      });
                    };
                    ce(ee, (me) => {
                      s(I).field === "actions" ? me(D) : me(j, !1);
                    });
                  }
                  O(H, L);
                }), O(k, W);
              },
              $$slots: { default: !0 }
            });
          }), O(U, B);
        },
        $$slots: { default: !0 }
      }), O(_, T);
    },
    $$slots: { progress: !0, default: !0 }
  }), Me(), o();
}
li(["input"]);
var jI = /* @__PURE__ */ be("<div><!></div>");
function ru(t, e) {
  Re(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "variant", 3, "raised"), a = m(e, "padded", 3, !1), o = /* @__PURE__ */ qe(e, [
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
  var c = { getElement: l }, d = jI();
  Be(d, (f) => ({ class: f, ...o }), [
    () => He({
      "mdc-card": !0,
      "mdc-card--outlined": i() === "outlined",
      "smui-card--padded": a(),
      [r()]: !0
    })
  ]);
  var h = ge(d);
  return _e(h, () => e.children ?? pe), Te(d, (f) => u = f, () => u), Ue(d, (f, v) => K == null ? void 0 : K(f, v), n), O(t, d), Me(c);
}
Bv({ en: mm, de: em });
var qI = /* @__PURE__ */ be("<!> <!>", 1), WI = /* @__PURE__ */ be('<h3 style="margin-bottom: 1rem;"> </h3> <!>', 1), KI = /* @__PURE__ */ be('<div><div class="filter-box svelte-1lw4l1e"><!></div> <div class="table-container"><!></div></div>'), zI = /* @__PURE__ */ be('<h3 style="margin-bottom: 1rem;"> </h3> <!>', 1), XI = /* @__PURE__ */ be('<div class="location-viewer-container svelte-1lw4l1e"><div style="max-width: 600px;"><!></div> <div class="search-filter svelte-1lw4l1e"><!></div> <div class="table-container"><!></div></div>');
function YI(t, e) {
  Re(e, !0);
  const n = () => Dt(Fv, "$_", r), [r, i] = xn(), a = Ii.getInstance();
  let o = /* @__PURE__ */ xe(Ee([])), u = /* @__PURE__ */ xe(""), l = /* @__PURE__ */ xe(!1), c = /* @__PURE__ */ xe(!0);
  at(() => {
    setTimeout(
      () => {
        ie(c, !1);
      },
      1e3
    );
  }), at(() => {
    a.getLocations().subscribe({
      next: (M) => {
        ie(o, M.map((Q) => ({ label: Q.name, value: Q.uuid })), !0);
      }
    });
  });
  const d = new Rl(), h = new Rl();
  function f(M) {
    return new Date(M).toLocaleDateString();
  }
  function v(M) {
    if (!s(o) || !M)
      return M || "";
    const Q = s(o).find((F) => F.value === M);
    return console.log("foundlocation", { foundLocation: Q, bool: (Q == null ? void 0 : Q.label) !== void 0 }), Q != null && Q.label ? Q.label : M;
  }
  const p = [
    {
      id: 1,
      key: "uuid",
      label: n()("uuid"),
      inputType: { id: 1, type: "string", validatorFn: () => !0, options: [] },
      allowedOperations: ["="]
    },
    {
      id: 2,
      key: "type",
      label: n()("type"),
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
      id: 3,
      key: "name",
      label: n()("name"),
      inputType: { id: 1, type: "string", validatorFn: () => !0, options: [] },
      allowedOperations: ["="]
    },
    {
      id: 4,
      key: "location",
      label: n()("location"),
      inputType: { id: 1, type: "string", validatorFn: () => !0, options: [] },
      allowedOperations: ["="]
    },
    {
      id: 5,
      key: "author",
      label: n()("author"),
      inputType: { id: 1, type: "string", validatorFn: () => !0, options: [] },
      allowedOperations: ["="]
    },
    {
      id: 6,
      key: "from",
      label: n()("from"),
      inputType: {
        id: 1,
        type: "datepicker",
        validatorFn: () => !0,
        options: []
      },
      allowedOperations: ["="]
    },
    {
      id: 7,
      key: "to",
      label: n()("to"),
      inputType: {
        id: 1,
        type: "datepicker",
        validatorFn: () => !0,
        options: []
      },
      allowedOperations: ["="]
    }
  ], g = [
    {
      icon: "remove",
      callback: (M) => A(M),
      disabled: () => !1
    }
  ], y = [
    {
      icon: "add",
      callback: (M) => x(M),
      disabled: () => !1
    }
  ];
  let E = /* @__PURE__ */ xe(Ee([]));
  function x(M) {
    a.assignResourceToLocation(s(u), M.uuid).subscribe({
      next: () => {
        h.remove(M.uuid), d.add({ ...M, location: s(u) });
      }
    });
  }
  function A(M) {
    a.unassignResourceFromLocation(s(u), M.uuid).subscribe({
      next: () => {
        d.remove(M.uuid);
      }
    });
  }
  function b() {
    const M = _(s(E));
    a.searchResources(M).pipe(Km(1), zm((Q) => {
      h.set(Q.filter((F) => F.location !== s(u)));
    })).subscribe();
  }
  function _(M) {
    const Q = {
      uuid: null,
      type: null,
      name: null,
      location: null,
      author: null,
      from: null,
      to: null
    };
    return console.log("Convert filter to search params: ", M), M.forEach((F) => {
      console.log("KEY:", F.key), F.key === "from" || F.key === "to" ? Q[F.key] = new Date(F.value).toISOString() : Q[F.key] = F.value;
    }), Q;
  }
  function C() {
    ie(l, !s(l));
  }
  let T = /* @__PURE__ */ ue(() => [
    {
      headerName: n()("uuid"),
      field: "uuid",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !1
    },
    {
      headerName: n()("name"),
      field: "name",
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
      headerName: n()("type"),
      field: "type",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: n()("location"),
      field: "location",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0,
      valueFormatter: v
    },
    {
      headerName: n()("version"),
      field: "version",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: n()("changed_at"),
      field: "changedAt",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0,
      valueFormatter: f
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
  ]), S = /* @__PURE__ */ ue(() => [
    {
      headerName: n()("uuid"),
      field: "uuid",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !1
    },
    {
      headerName: n()("name"),
      field: "name",
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
      headerName: n()("type"),
      field: "type",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: n()("version"),
      field: "version",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: n()("changed_at"),
      field: "changedAt",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0,
      valueFormatter: f
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
  ]);
  we(() => {
    if (!s(u))
      return;
    const M = a.searchResources({}).subscribe({
      next: (Q) => {
        console.log({ data: Q, selectedLocation: s(u) }), d.set(Q.filter((F) => F.location === s(u)));
      },
      error: (Q) => {
        console.error("Error loading resources:", Q);
      }
    });
    return () => M.unsubscribe();
  });
  var w = le(), U = Z(w);
  {
    var Y = (M) => {
      {
        let Q = /* @__PURE__ */ ue(() => !s(c));
        lI(M, {
          get loadingDone() {
            return s(Q);
          }
        });
      }
    }, B = (M) => {
      var Q = XI(), F = ge(Q), k = ge(F);
      {
        let I = /* @__PURE__ */ ue(() => n()("location"));
        ds(k, {
          get label() {
            return s(I);
          },
          get data() {
            return s(o);
          },
          set data(L) {
            ie(o, L, !0);
          },
          get value() {
            return s(u);
          },
          set value(L) {
            ie(u, L, !0);
          }
        });
      }
      var N = ye(F, 2), W = ge(N);
      {
        const I = (ee) => {
          var D = KI(), j = ge(D), me = ge(j);
          {
            const X = (ke) => {
              ks(ke, {
                variant: "raised",
                callback: b,
                children: (Ge, Ne) => {
                  var Ae = qI(), oe = Z(Ae);
                  Kb(oe, {});
                  var Le = ye(oe, 2);
                  Up(Le, {
                    children: (Ze, P) => {
                      var G = Wt();
                      Fe((J) => dt(G, J), [() => n()("search")]), O(Ze, G);
                    },
                    $$slots: { default: !0 }
                  }), O(Ge, Ae);
                },
                $$slots: { default: !0 }
              });
            };
            let he = /* @__PURE__ */ ue(() => n()("add_filter")), ae = /* @__PURE__ */ ue(() => n()("filter_types"));
            aI(me, {
              get filterTypes() {
                return p;
              },
              get addFilterLabel() {
                return s(he);
              },
              get selectFilterLabel() {
                return s(ae);
              },
              get activeFilters() {
                return s(E);
              },
              set activeFilters(ke) {
                ie(E, ke, !0);
              },
              filterControls: X,
              $$slots: { filterControls: !0 }
            });
          }
          var V = ye(j, 2), re = ge(V);
          ru(re, {
            style: "padding: 1rem; width: 100%; height: 100%;",
            children: (X, he) => {
              var ae = WI(), ke = Z(ae), Ge = ge(ke), Ne = ye(ke, 2);
              {
                let Ae = /* @__PURE__ */ ue(() => n()("search"));
                nu(Ne, {
                  get columnDefs() {
                    return s(T);
                  },
                  get store() {
                    return h;
                  },
                  get rowActions() {
                    return y;
                  },
                  get searchInputLabel() {
                    return s(Ae);
                  }
                });
              }
              Fe((Ae) => dt(Ge, Ae), [() => n()("search_result")]), O(X, ae);
            },
            $$slots: { default: !0 }
          }), O(ee, D);
        };
        let L = /* @__PURE__ */ ue(() => n()("search"));
        hI(W, {
          get title() {
            return s(L);
          },
          onclick: C,
          get open() {
            return s(l);
          },
          set open(ee) {
            ie(l, ee, !0);
          },
          content: I,
          $$slots: { content: !0 }
        });
      }
      var ne = ye(N, 2), H = ge(ne);
      ru(H, {
        style: "padding: 1rem; width: 100%; height: 100%;",
        children: (I, L) => {
          var ee = zI(), D = Z(ee), j = ge(D), me = ye(D, 2);
          {
            let V = /* @__PURE__ */ ue(() => n()("search"));
            nu(me, {
              get columnDefs() {
                return s(S);
              },
              get store() {
                return d;
              },
              get rowActions() {
                return g;
              },
              get searchInputLabel() {
                return s(V);
              }
            });
          }
          Fe((V) => dt(j, V), [
            () => {
              var V;
              return s(u) ? `${n()("location")}: ${(V = s(o).find((re) => re.value === s(u))) == null ? void 0 : V.label}` : n()("select_location");
            }
          ]), O(I, ee);
        },
        $$slots: { default: !0 }
      }), O(M, Q);
    };
    ce(U, (M) => {
      s(c) ? M(Y) : M(B, !1);
    });
  }
  O(t, w), Me(), i();
}
const ad = "location-viewer", od = "0.0.1";
var ZI = /* @__PURE__ */ be('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function QI(t, e) {
  Re(e, !0);
  let n = m(e, "dev", 3, !1);
  var r = ZI(), i = Z(r);
  {
    var a = (l) => {
      YI(l, {});
    };
    ce(i, (l) => {
      (e.doc || n()) && l(a);
    });
  }
  var o = ye(i, 2), u = ye(o, 2);
  Fe(() => {
    ll(o, ad), ll(u, od);
  }), O(t, r), Me();
}
var Ri;
class ay extends HTMLElement {
  constructor() {
    super();
    $e(this, Ri);
    Pe(this, Ri, /* @__PURE__ */ xe(Ee({ doc: void 0, editCount: void 0 })));
  }
  get props() {
    return s($(this, Ri));
  }
  set props(n) {
    ie($(this, Ri), n, !0);
  }
  connectedCallback() {
    var r;
    this.attachShadow({ mode: "open" }), this.props.doc = this._doc, this.props.editCount = this.editCount, Lf(QI, { target: this.shadowRoot, props: this.props });
    const n = JI();
    (r = this.shadowRoot) == null || r.appendChild(n);
  }
  set doc(n) {
    this._doc = n, this.props.doc = n;
  }
  set editCount(n) {
    this.props.editCount = n;
  }
}
Ri = new WeakMap();
function JI() {
  const t = `${ad}-v${od}-style`, e = $I(), n = document.createElement("link");
  return n.rel = "stylesheet", n.type = "text/css", n.href = e, n.id = t, n;
}
function $I() {
  const t = new URL(import.meta.url), e = t.origin, n = t.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, n, "style.css"].filter(Boolean).join("/");
}
export {
  ay as default
};
