var Pu = Object.defineProperty;
var $o = (n) => {
  throw TypeError(n);
};
var Fu = (n, e, t) => e in n ? Pu(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var wi = (n, e, t) => Fu(n, typeof e != "symbol" ? e + "" : e, t), Vs = (n, e, t) => e.has(n) || $o("Cannot " + t);
var re = (n, e, t) => (Vs(n, e, "read from private field"), t ? t.call(n) : e.get(n)), We = (n, e, t) => e.has(n) ? $o("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), we = (n, e, t, r) => (Vs(n, e, "write to private field"), r ? r.call(n, t) : e.set(n, t), t), Gt = (n, e, t) => (Vs(n, e, "access private method"), t);
const At = Symbol(), ku = "http://www.w3.org/1999/xhtml", Nu = "http://www.w3.org/2000/svg", Hu = "@attach", ql = !1;
var Da = Array.isArray, Uu = Array.prototype.indexOf, wo = Array.from, is = Object.defineProperty, Rr = Object.getOwnPropertyDescriptor, Yl = Object.getOwnPropertyDescriptors, Kl = Object.prototype, Bu = Array.prototype, ys = Object.getPrototypeOf, el = Object.isExtensible;
function Ri(n) {
  return typeof n == "function";
}
const pe = () => {
};
function Gu(n) {
  for (var e = 0; e < n.length; e++)
    n[e]();
}
function Jl() {
  var n, e, t = new Promise((r, i) => {
    n = r, e = i;
  });
  return { promise: t, resolve: n, reject: e };
}
const $t = 2, To = 4, Do = 8, Ii = 16, Ir = 32, Br = 64, Lo = 128, Tn = 256, as = 512, zt = 1024, gn = 2048, Gr = 4096, Hn = 8192, bi = 16384, Oo = 32768, _i = 65536, tl = 1 << 17, Wu = 1 << 18, yi = 1 << 19, Vu = 1 << 20, to = 1 << 21, Cs = 1 << 22, ui = 1 << 23, Qn = Symbol("$state"), Ql = Symbol("legacy props"), Zu = Symbol(""), Mi = new class extends Error {
  constructor() {
    super(...arguments);
    wi(this, "name", "StaleReactionError");
    wi(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Ro(n) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function zu() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ju(n) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Xu() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function qu(n) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Yu() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ku(n) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Ju() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Qu() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function $u() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ec() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function tc() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function nc() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let rc = !1;
function $l(n) {
  return n === this.v;
}
function Mo(n, e) {
  return n != n ? e == e : n !== e || n !== null && typeof n == "object" || typeof n == "function";
}
function ed(n) {
  return !Mo(n, this.v);
}
let ta = !1, ic = !1;
function ac() {
  ta = !0;
}
const sc = [];
function oc(n, e = !1, t = !1) {
  return Ja(n, /* @__PURE__ */ new Map(), "", sc, null, t);
}
function Ja(n, e, t, r, i = null, a = !1) {
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
    if (Da(n)) {
      var u = (
        /** @type {Snapshot<any>} */
        Array(n.length)
      );
      e.set(n, u), i !== null && e.set(i, u);
      for (var l = 0; l < n.length; l += 1) {
        var c = n[l];
        l in n && (u[l] = Ja(c, e, t, r, null, a));
      }
      return u;
    }
    if (ys(n) === Kl) {
      u = {}, e.set(n, u), i !== null && e.set(i, u);
      for (var d in n)
        u[d] = Ja(
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
      return Ja(
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
function Xi(n) {
  $e = n;
}
function _e(n) {
  return (
    /** @type {T} */
    td().get(n)
  );
}
function se(n, e) {
  return td().set(n, e), e;
}
function Ae(n, e = !1, t) {
  $e = {
    p: $e,
    c: null,
    e: null,
    s: n,
    x: null,
    l: ta && !e ? { s: null, u: null, $: [] } : null
  };
}
function Ee(n) {
  var e = (
    /** @type {ComponentContext} */
    $e
  ), t = e.e;
  if (t !== null) {
    e.e = null;
    for (var r of t)
      md(r);
  }
  return n !== void 0 && (e.x = n), $e = e.p, n ?? /** @type {T} */
  {};
}
function La() {
  return !ta || $e !== null && $e.l === null;
}
function td(n) {
  return $e === null && Ro(), $e.c ?? ($e.c = new Map(lc($e) || void 0));
}
function lc(n) {
  let e = n.p;
  for (; e !== null; ) {
    const t = e.c;
    if (t !== null)
      return t;
    e = e.p;
  }
  return null;
}
let ri = [];
function nd() {
  var n = ri;
  ri = [], Gu(n);
}
function gr(n) {
  if (ri.length === 0 && !pa) {
    var e = ri;
    queueMicrotask(() => {
      e === ri && nd();
    });
  }
  ri.push(n);
}
function dc() {
  for (; ri.length > 0; )
    nd();
}
const uc = /* @__PURE__ */ new WeakMap();
function rd(n) {
  var e = Fe;
  if (e === null)
    return Re.f |= ui, n;
  if (e.f & Oo)
    qi(n, e);
  else {
    if (!(e.f & Lo))
      throw !e.parent && n instanceof Error && id(n), n;
    e.b.error(n);
  }
}
function qi(n, e) {
  for (; e !== null; ) {
    if (e.f & Lo)
      try {
        e.b.error(n);
        return;
      } catch (t) {
        n = t;
      }
    e = e.parent;
  }
  throw n instanceof Error && id(n), n;
}
function id(n) {
  const e = uc.get(n);
  e && (is(n, "message", {
    value: e.message
  }), is(n, "stack", {
    value: e.stack
  }));
}
const Wa = /* @__PURE__ */ new Set();
let qe = null, Qa = null, Rt = null, no = /* @__PURE__ */ new Set(), qn = [], As = null, ro = !1, pa = !1;
var Gi, Wi, ai, xa, Vi, Zi, si, zi, wa, Ta, Dn, io, $a, ao;
const Is = class Is {
  constructor() {
    We(this, Dn);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    wi(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    We(this, Gi, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    We(this, Wi, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    We(this, ai, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    We(this, xa, null);
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
    We(this, Zi, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    We(this, si, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    We(this, zi, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    We(this, wa, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    We(this, Ta, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    wi(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var a;
    qn = [], Qa = null, this.apply();
    for (const s of e)
      Gt(this, Dn, io).call(this, s);
    if (re(this, ai) === 0) {
      var t = Rt;
      Gt(this, Dn, ao).call(this);
      var r = re(this, Zi), i = re(this, si);
      we(this, Zi, []), we(this, si, []), we(this, zi, []), Qa = this, qe = null, Rt = t, nl(r), nl(i), Qa = null, (a = re(this, xa)) == null || a.resolve();
    } else
      Gt(this, Dn, $a).call(this, re(this, Zi)), Gt(this, Dn, $a).call(this, re(this, si)), Gt(this, Dn, $a).call(this, re(this, zi));
    Rt = null;
    for (const s of re(this, Vi))
      ya(s);
    we(this, Vi, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, t) {
    re(this, Gi).has(e) || re(this, Gi).set(e, t), this.current.set(e, e.v), Rt == null || Rt.set(e, e.v);
  }
  activate() {
    qe = this;
  }
  deactivate() {
    qe = null, Rt = null;
  }
  flush() {
    if (qn.length > 0) {
      if (this.activate(), ad(), qe !== null && qe !== this)
        return;
    } else re(this, ai) === 0 && Gt(this, Dn, ao).call(this);
    this.deactivate();
    for (const e of no)
      if (no.delete(e), e(), qe !== null)
        break;
  }
  increment() {
    we(this, ai, re(this, ai) + 1);
  }
  decrement() {
    we(this, ai, re(this, ai) - 1);
    for (const e of re(this, wa))
      Kt(e, gn), gi(e);
    for (const e of re(this, Ta))
      Kt(e, Gr), gi(e);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    re(this, Wi).add(e);
  }
  settled() {
    return (re(this, xa) ?? we(this, xa, Jl())).promise;
  }
  static ensure() {
    if (qe === null) {
      const e = qe = new Is();
      Wa.add(qe), pa || Is.enqueue(() => {
        qe === e && e.flush();
      });
    }
    return qe;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    gr(e);
  }
  apply() {
  }
};
Gi = new WeakMap(), Wi = new WeakMap(), ai = new WeakMap(), xa = new WeakMap(), Vi = new WeakMap(), Zi = new WeakMap(), si = new WeakMap(), zi = new WeakMap(), wa = new WeakMap(), Ta = new WeakMap(), Dn = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
io = function(e) {
  var c;
  e.f ^= zt;
  for (var t = e.first; t !== null; ) {
    var r = t.f, i = (r & (Ir | Br)) !== 0, a = i && (r & zt) !== 0, s = a || (r & Hn) !== 0 || this.skipped_effects.has(t);
    if (!s && t.fn !== null) {
      i ? t.f ^= zt : r & To ? re(this, si).push(t) : r & zt || (r & Cs && ((c = t.b) != null && c.is_pending()) ? re(this, Vi).push(t) : Ds(t) && (t.f & Ii && re(this, zi).push(t), ya(t)));
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
$a = function(e) {
  for (const t of e)
    (t.f & gn ? re(this, wa) : re(this, Ta)).push(t), Kt(t, zt);
  e.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
ao = function() {
  var e;
  for (const t of re(this, Wi))
    t();
  if (re(this, Wi).clear(), Wa.size > 1) {
    re(this, Gi).clear();
    let t = !0;
    for (const r of Wa) {
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
          sd(s, a);
        if (qn.length > 0) {
          qe = r, r.apply();
          for (const s of qn)
            Gt(e = r, Dn, io).call(e, s);
          qn = [], r.deactivate();
        }
      }
    }
    qe = null;
  }
  Wa.delete(this);
};
let Kn = Is;
function cc(n) {
  var e = pa;
  pa = !0;
  try {
    for (var t; ; ) {
      if (dc(), qn.length === 0 && (qe == null || qe.flush(), qn.length === 0))
        return As = null, /** @type {T} */
        t;
      ad();
    }
  } finally {
    pa = e;
  }
}
function ad() {
  var n = ki;
  ro = !0;
  try {
    var e = 0;
    for (al(!0); qn.length > 0; ) {
      var t = Kn.ensure();
      if (e++ > 1e3) {
        var r, i;
        fc();
      }
      t.process(qn), Mr.clear();
    }
  } finally {
    ro = !1, al(n), As = null;
  }
}
function fc() {
  try {
    Yu();
  } catch (n) {
    qi(n, As);
  }
}
let ur = null;
function nl(n) {
  var e = n.length;
  if (e !== 0) {
    for (var t = 0; t < e; ) {
      var r = n[t++];
      if (!(r.f & (bi | Hn)) && Ds(r) && (ur = [], ya(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? bd(r) : r.fn = null), (ur == null ? void 0 : ur.length) > 0)) {
        Mr.clear();
        for (const i of ur)
          ya(i);
        ur = [];
      }
    }
    ur = null;
  }
}
function sd(n, e) {
  if (n.reactions !== null)
    for (const t of n.reactions) {
      const r = t.f;
      r & $t ? sd(
        /** @type {Derived} */
        t,
        e
      ) : r & (Cs | Ii) && od(t, e) && (Kt(t, gn), gi(
        /** @type {Effect} */
        t
      ));
    }
}
function od(n, e) {
  if (n.deps !== null) {
    for (const t of n.deps)
      if (e.includes(t) || t.f & $t && od(
        /** @type {Derived} */
        t,
        e
      ))
        return !0;
  }
  return !1;
}
function gi(n) {
  for (var e = As = n; e.parent !== null; ) {
    e = e.parent;
    var t = e.f;
    if (ro && e === Fe && t & Ii)
      return;
    if (t & (Br | Ir)) {
      if (!(t & zt)) return;
      e.f ^= zt;
    }
  }
  qn.push(e);
}
function hc(n) {
  let e = 0, t = mi(0), r;
  return () => {
    Oc() && (o(t), ws(() => (e === 0 && (r = Zr(() => n(() => Ia(t)))), e += 1, () => {
      gr(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, Ia(t));
      });
    })));
  };
}
var vc = _i | yi | Lo;
function gc(n, e, t) {
  new mc(n, e, t);
}
var On, En, xo, zn, oi, jn, Sn, an, Xn, xr, li, wr, di, Tr, bs, _s, Qt, pc, Ic, es, ts, so;
class mc {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, t, r) {
    We(this, Qt);
    /** @type {Boundary | null} */
    wi(this, "parent");
    We(this, On, !1);
    /** @type {TemplateNode} */
    We(this, En);
    /** @type {TemplateNode | null} */
    We(this, xo, null);
    /** @type {BoundaryProps} */
    We(this, zn);
    /** @type {((anchor: Node) => void)} */
    We(this, oi);
    /** @type {Effect} */
    We(this, jn);
    /** @type {Effect | null} */
    We(this, Sn, null);
    /** @type {Effect | null} */
    We(this, an, null);
    /** @type {Effect | null} */
    We(this, Xn, null);
    /** @type {DocumentFragment | null} */
    We(this, xr, null);
    We(this, li, 0);
    We(this, wr, 0);
    We(this, di, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    We(this, Tr, null);
    We(this, bs, () => {
      re(this, Tr) && Yi(re(this, Tr), re(this, li));
    });
    We(this, _s, hc(() => (we(this, Tr, mi(re(this, li))), () => {
      we(this, Tr, null);
    })));
    we(this, En, e), we(this, zn, t), we(this, oi, r), this.parent = /** @type {Effect} */
    Fe.b, we(this, On, !!re(this, zn).pending), we(this, jn, Vr(() => {
      Fe.b = this;
      {
        try {
          we(this, Sn, Vt(() => r(re(this, En))));
        } catch (i) {
          this.error(i);
        }
        re(this, wr) > 0 ? Gt(this, Qt, ts).call(this) : we(this, On, !1);
      }
    }, vc));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return re(this, On) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!re(this, zn).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    Gt(this, Qt, so).call(this, e), we(this, li, re(this, li) + e), no.add(re(this, bs));
  }
  get_effect_pending() {
    return re(this, _s).call(this), o(
      /** @type {Source<number>} */
      re(this, Tr)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var t = re(this, zn).onerror;
    let r = re(this, zn).failed;
    if (re(this, di) || !t && !r)
      throw e;
    re(this, Sn) && (xt(re(this, Sn)), we(this, Sn, null)), re(this, an) && (xt(re(this, an)), we(this, an, null)), re(this, Xn) && (xt(re(this, Xn)), we(this, Xn, null));
    var i = !1, a = !1;
    const s = () => {
      if (i) {
        nc();
        return;
      }
      i = !0, a && ec(), Kn.ensure(), we(this, li, 0), re(this, Xn) !== null && Pr(re(this, Xn), () => {
        we(this, Xn, null);
      }), we(this, On, this.has_pending_snippet()), we(this, Sn, Gt(this, Qt, es).call(this, () => (we(this, di, !1), Vt(() => re(this, oi).call(this, re(this, En)))))), re(this, wr) > 0 ? Gt(this, Qt, ts).call(this) : we(this, On, !1);
    };
    var u = Re;
    try {
      ln(null), a = !0, t == null || t(e, s), a = !1;
    } catch (l) {
      qi(l, re(this, jn) && re(this, jn).parent);
    } finally {
      ln(u);
    }
    r && gr(() => {
      we(this, Xn, Gt(this, Qt, es).call(this, () => {
        we(this, di, !0);
        try {
          return Vt(() => {
            r(
              re(this, En),
              () => e,
              () => s
            );
          });
        } catch (l) {
          return qi(
            l,
            /** @type {Effect} */
            re(this, jn).parent
          ), null;
        } finally {
          we(this, di, !1);
        }
      }));
    });
  }
}
On = new WeakMap(), En = new WeakMap(), xo = new WeakMap(), zn = new WeakMap(), oi = new WeakMap(), jn = new WeakMap(), Sn = new WeakMap(), an = new WeakMap(), Xn = new WeakMap(), xr = new WeakMap(), li = new WeakMap(), wr = new WeakMap(), di = new WeakMap(), Tr = new WeakMap(), bs = new WeakMap(), _s = new WeakMap(), Qt = new WeakSet(), pc = function() {
  try {
    we(this, Sn, Vt(() => re(this, oi).call(this, re(this, En))));
  } catch (e) {
    this.error(e);
  }
  we(this, On, !1);
}, Ic = function() {
  const e = re(this, zn).pending;
  e && (we(this, an, Vt(() => e(re(this, En)))), Kn.enqueue(() => {
    we(this, Sn, Gt(this, Qt, es).call(this, () => (Kn.ensure(), Vt(() => re(this, oi).call(this, re(this, En)))))), re(this, wr) > 0 ? Gt(this, Qt, ts).call(this) : (Pr(
      /** @type {Effect} */
      re(this, an),
      () => {
        we(this, an, null);
      }
    ), we(this, On, !1));
  }));
}, /**
 * @param {() => Effect | null} fn
 */
es = function(e) {
  var t = Fe, r = Re, i = $e;
  $n(re(this, jn)), ln(re(this, jn)), Xi(re(this, jn).ctx);
  try {
    return e();
  } catch (a) {
    return rd(a), null;
  } finally {
    $n(t), ln(r), Xi(i);
  }
}, ts = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    re(this, zn).pending
  );
  re(this, Sn) !== null && (we(this, xr, document.createDocumentFragment()), bc(re(this, Sn), re(this, xr))), re(this, an) === null && we(this, an, Vt(() => e(re(this, En))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
so = function(e) {
  var t;
  if (!this.has_pending_snippet()) {
    this.parent && Gt(t = this.parent, Qt, so).call(t, e);
    return;
  }
  we(this, wr, re(this, wr) + e), re(this, wr) === 0 && (we(this, On, !1), re(this, an) && Pr(re(this, an), () => {
    we(this, an, null);
  }), re(this, xr) && (re(this, En).before(re(this, xr)), we(this, xr, null)), gr(() => {
    Kn.ensure().flush();
  }));
};
function bc(n, e) {
  for (var t = n.nodes_start, r = n.nodes_end; t !== null; ) {
    var i = t === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Oa(t)
    );
    e.append(t), t = i;
  }
}
function ld(n, e, t) {
  const r = La() ? Es : Po;
  if (e.length === 0) {
    t(n.map(r));
    return;
  }
  var i = qe, a = (
    /** @type {Effect} */
    Fe
  ), s = _c();
  Promise.all(e.map((u) => /* @__PURE__ */ yc(u))).then((u) => {
    s();
    try {
      t([...n.map(r), ...u]);
    } catch (l) {
      a.f & bi || qi(l, a);
    }
    i == null || i.deactivate(), oo();
  }).catch((u) => {
    qi(u, a);
  });
}
function _c() {
  var n = Fe, e = Re, t = $e, r = qe;
  return function() {
    $n(n), ln(e), Xi(t), r == null || r.activate();
  };
}
function oo() {
  $n(null), ln(null), Xi(null);
}
// @__NO_SIDE_EFFECTS__
function Es(n) {
  var e = $t | gn, t = Re !== null && Re.f & $t ? (
    /** @type {Derived} */
    Re
  ) : null;
  return Fe === null || t !== null && t.f & Tn ? e |= Tn : Fe.f |= yi, {
    ctx: $e,
    deps: null,
    effects: null,
    equals: $l,
    f: e,
    fn: n,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      At
    ),
    wv: 0,
    parent: t ?? Fe,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function yc(n, e) {
  let t = (
    /** @type {Effect | null} */
    Fe
  );
  t === null && zu();
  var r = (
    /** @type {Boundary} */
    t.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = mi(
    /** @type {V} */
    At
  ), s = !Re, u = /* @__PURE__ */ new Map();
  return Pc(() => {
    var f;
    var l = Jl();
    i = l.promise;
    try {
      Promise.resolve(n()).then(l.resolve, l.reject).then(oo);
    } catch (v) {
      l.reject(v), oo();
    }
    var c = (
      /** @type {Batch} */
      qe
    ), d = r.is_pending();
    s && (r.update_pending_count(1), d || (c.increment(), (f = u.get(c)) == null || f.reject(Mi), u.delete(c), u.set(c, l)));
    const h = (v, g = void 0) => {
      if (d || c.activate(), g)
        g !== Mi && (a.f |= ui, Yi(a, g));
      else {
        a.f & ui && (a.f ^= ui), Yi(a, v);
        for (const [p, y] of u) {
          if (u.delete(p), p === c) break;
          y.reject(Mi);
        }
      }
      s && (r.update_pending_count(-1), d || c.decrement());
    };
    l.promise.then(h, (v) => h(null, v || "unknown"));
  }), xs(() => {
    for (const l of u.values())
      l.reject(Mi);
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
function ae(n) {
  const e = /* @__PURE__ */ Es(n);
  return Cd(e), e;
}
// @__NO_SIDE_EFFECTS__
function Po(n) {
  const e = /* @__PURE__ */ Es(n);
  return e.equals = ed, e;
}
function dd(n) {
  var e = n.effects;
  if (e !== null) {
    n.effects = null;
    for (var t = 0; t < e.length; t += 1)
      xt(
        /** @type {Effect} */
        e[t]
      );
  }
}
function Cc(n) {
  for (var e = n.parent; e !== null; ) {
    if (!(e.f & $t))
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function Fo(n) {
  var e, t = Fe;
  $n(Cc(n));
  try {
    dd(n), e = xd(n);
  } finally {
    $n(t);
  }
  return e;
}
function ud(n) {
  var e = Fo(n);
  if (n.equals(e) || (n.v = e, n.wv = Ed()), !Ci)
    if (Rt !== null)
      Rt.set(n, n.v);
    else {
      var t = (Dr || n.f & Tn) && n.deps !== null ? Gr : zt;
      Kt(n, t);
    }
}
const Mr = /* @__PURE__ */ new Map();
function mi(n, e) {
  var t = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: n,
    reactions: null,
    equals: $l,
    rv: 0,
    wv: 0
  };
  return t;
}
// @__NO_SIDE_EFFECTS__
function oe(n, e) {
  const t = mi(n);
  return Cd(t), t;
}
// @__NO_SIDE_EFFECTS__
function cd(n, e = !1, t = !0) {
  var i;
  const r = mi(n);
  return e || (r.equals = ed), ta && t && $e !== null && $e.l !== null && ((i = $e.l).s ?? (i.s = [])).push(r), r;
}
function B(n, e, t = !1) {
  Re !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Pn || Re.f & tl) && La() && Re.f & ($t | Ii | Cs | tl) && !(Yt != null && Yt.includes(n)) && $u();
  let r = t ? Ce(e) : e;
  return Yi(n, r);
}
function Yi(n, e) {
  if (!n.equals(e)) {
    var t = n.v;
    Ci ? Mr.set(n, e) : Mr.set(n, t), n.v = e;
    var r = Kn.ensure();
    r.capture(n, t), n.f & $t && (n.f & gn && Fo(
      /** @type {Derived} */
      n
    ), Kt(n, n.f & Tn ? Gr : zt)), n.wv = Ed(), fd(n, gn), La() && Fe !== null && Fe.f & zt && !(Fe.f & (Ir | Br)) && (An === null ? Nc([n]) : An.push(n));
  }
  return e;
}
function Ia(n) {
  B(n, n.v + 1);
}
function fd(n, e) {
  var t = n.reactions;
  if (t !== null)
    for (var r = La(), i = t.length, a = 0; a < i; a++) {
      var s = t[a], u = s.f;
      if (!(!r && s === Fe)) {
        var l = (u & gn) === 0;
        l && Kt(s, e), u & $t ? fd(
          /** @type {Derived} */
          s,
          Gr
        ) : l && (u & Ii && ur !== null && ur.push(
          /** @type {Effect} */
          s
        ), gi(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function Ce(n) {
  if (typeof n != "object" || n === null || Qn in n)
    return n;
  const e = ys(n);
  if (e !== Kl && e !== Bu)
    return n;
  var t = /* @__PURE__ */ new Map(), r = Da(n), i = /* @__PURE__ */ oe(0), a = ci, s = (u) => {
    if (ci === a)
      return u();
    var l = Re, c = ci;
    ln(null), ol(a);
    var d = u();
    return ln(l), ol(c), d;
  };
  return r && t.set("length", /* @__PURE__ */ oe(
    /** @type {any[]} */
    n.length
  )), new Proxy(
    /** @type {any} */
    n,
    {
      defineProperty(u, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Ju();
        var d = t.get(l);
        return d === void 0 ? d = s(() => {
          var h = /* @__PURE__ */ oe(c.value);
          return t.set(l, h), h;
        }) : B(d, c.value, !0), !0;
      },
      deleteProperty(u, l) {
        var c = t.get(l);
        if (c === void 0) {
          if (l in u) {
            const d = s(() => /* @__PURE__ */ oe(At));
            t.set(l, d), Ia(i);
          }
        } else
          B(c, At), Ia(i);
        return !0;
      },
      get(u, l, c) {
        var v;
        if (l === Qn)
          return n;
        var d = t.get(l), h = l in u;
        if (d === void 0 && (!h || (v = Rr(u, l)) != null && v.writable) && (d = s(() => {
          var g = Ce(h ? u[l] : At), p = /* @__PURE__ */ oe(g);
          return p;
        }), t.set(l, d)), d !== void 0) {
          var f = o(d);
          return f === At ? void 0 : f;
        }
        return Reflect.get(u, l, c);
      },
      getOwnPropertyDescriptor(u, l) {
        var c = Reflect.getOwnPropertyDescriptor(u, l);
        if (c && "value" in c) {
          var d = t.get(l);
          d && (c.value = o(d));
        } else if (c === void 0) {
          var h = t.get(l), f = h == null ? void 0 : h.v;
          if (h !== void 0 && f !== At)
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
        if (l === Qn)
          return !0;
        var c = t.get(l), d = c !== void 0 && c.v !== At || Reflect.has(u, l);
        if (c !== void 0 || Fe !== null && (!d || (f = Rr(u, l)) != null && f.writable)) {
          c === void 0 && (c = s(() => {
            var v = d ? Ce(u[l]) : At, g = /* @__PURE__ */ oe(v);
            return g;
          }), t.set(l, c));
          var h = o(c);
          if (h === At)
            return !1;
        }
        return d;
      },
      set(u, l, c, d) {
        var E;
        var h = t.get(l), f = l in u;
        if (r && l === "length")
          for (var v = c; v < /** @type {Source<number>} */
          h.v; v += 1) {
            var g = t.get(v + "");
            g !== void 0 ? B(g, At) : v in u && (g = s(() => /* @__PURE__ */ oe(At)), t.set(v + "", g));
          }
        if (h === void 0)
          (!f || (E = Rr(u, l)) != null && E.writable) && (h = s(() => /* @__PURE__ */ oe(void 0)), B(h, Ce(c)), t.set(l, h));
        else {
          f = h.v !== At;
          var p = s(() => Ce(c));
          B(h, p);
        }
        var y = Reflect.getOwnPropertyDescriptor(u, l);
        if (y != null && y.set && y.set.call(d, c), !f) {
          if (r && typeof l == "string") {
            var _ = (
              /** @type {Source<number>} */
              t.get("length")
            ), x = Number(l);
            Number.isInteger(x) && x >= _.v && B(_, x + 1);
          }
          Ia(i);
        }
        return !0;
      },
      ownKeys(u) {
        o(i);
        var l = Reflect.ownKeys(u).filter((h) => {
          var f = t.get(h);
          return f === void 0 || f.v !== At;
        });
        for (var [c, d] of t)
          d.v !== At && !(c in u) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        Qu();
      }
    }
  );
}
function rl(n) {
  try {
    if (n !== null && typeof n == "object" && Qn in n)
      return n[Qn];
  } catch {
  }
  return n;
}
function Ac(n, e) {
  return Object.is(rl(n), rl(e));
}
var ss, ko, hd, vd, gd;
function Ec() {
  if (ss === void 0) {
    ss = window, ko = document, hd = /Firefox/.test(navigator.userAgent);
    var n = Element.prototype, e = Node.prototype, t = Text.prototype;
    vd = Rr(e, "firstChild").get, gd = Rr(e, "nextSibling").get, el(n) && (n.__click = void 0, n.__className = void 0, n.__attributes = null, n.__style = void 0, n.__e = void 0), el(t) && (t.__t = void 0);
  }
}
function Wr(n = "") {
  return document.createTextNode(n);
}
// @__NO_SIDE_EFFECTS__
function Ki(n) {
  return vd.call(n);
}
// @__NO_SIDE_EFFECTS__
function Oa(n) {
  return gd.call(n);
}
function G(n, e) {
  return /* @__PURE__ */ Ki(n);
}
function j(n, e = !1) {
  {
    var t = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Ki(
        /** @type {Node} */
        n
      )
    );
    return t instanceof Comment && t.data === "" ? /* @__PURE__ */ Oa(t) : t;
  }
}
function J(n, e = 1, t = !1) {
  let r = n;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Oa(r);
  return r;
}
function Sc(n) {
  n.textContent = "";
}
function No() {
  return !1;
}
function xc(n, e) {
  if (e) {
    const t = document.body;
    n.autofocus = !0, gr(() => {
      document.activeElement === t && n.focus();
    });
  }
}
let il = !1;
function wc() {
  il || (il = !0, document.addEventListener(
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
  var e = Re, t = Fe;
  ln(null), $n(null);
  try {
    return n();
  } finally {
    ln(e), $n(t);
  }
}
function Tc(n, e, t, r = t) {
  n.addEventListener(e, () => Ss(t));
  const i = n.__on_r;
  i ? n.__on_r = () => {
    i(), r(!0);
  } : n.__on_r = () => r(!0), wc();
}
function Dc(n) {
  Fe === null && Re === null && qu(), Re !== null && Re.f & Tn && Fe === null && Xu(), Ci && ju();
}
function Lc(n, e) {
  var t = e.last;
  t === null ? e.last = e.first = n : (t.next = n, n.prev = t, e.last = n);
}
function tr(n, e, t, r = !0) {
  var i = Fe;
  i !== null && i.f & Hn && (n |= Hn);
  var a = {
    ctx: $e,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: n | gn,
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
      ya(a), a.f |= Oo;
    } catch (l) {
      throw xt(a), l;
    }
  else e !== null && gi(a);
  if (r) {
    var s = a;
    if (t && s.deps === null && s.teardown === null && s.nodes_start === null && s.first === s.last && // either `null`, or a singular child
    !(s.f & yi) && (s = s.first), s !== null && (s.parent = i, i !== null && Lc(s, i), Re !== null && Re.f & $t && !(n & Br))) {
      var u = (
        /** @type {Derived} */
        Re
      );
      (u.effects ?? (u.effects = [])).push(s);
    }
  }
  return a;
}
function Oc() {
  return Re !== null && !Pn;
}
function xs(n) {
  const e = tr(Do, null, !1);
  return Kt(e, zt), e.teardown = n, e;
}
function Se(n) {
  Dc();
  var e = (
    /** @type {Effect} */
    Fe.f
  ), t = !Re && (e & Ir) !== 0 && (e & Oo) === 0;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      $e
    );
    (r.e ?? (r.e = [])).push(n);
  } else
    return md(n);
}
function md(n) {
  return tr(To | Vu, n, !1);
}
function Rc(n) {
  Kn.ensure();
  const e = tr(Br | yi, n, !0);
  return () => {
    xt(e);
  };
}
function Mc(n) {
  Kn.ensure();
  const e = tr(Br | yi, n, !0);
  return (t = {}) => new Promise((r) => {
    t.outro ? Pr(e, () => {
      xt(e), r(void 0);
    }) : (xt(e), r(void 0));
  });
}
function Ra(n) {
  return tr(To, n, !1);
}
function Pc(n) {
  return tr(Cs | yi, n, !0);
}
function ws(n, e = 0) {
  return tr(Do | e, n, !0);
}
function de(n, e = [], t = []) {
  ld(e, t, (r) => {
    tr(Do, () => n(...r.map(o)), !0);
  });
}
function Vr(n, e = 0) {
  var t = tr(Ii | e, n, !0);
  return t;
}
function Vt(n, e = !0) {
  return tr(Ir | yi, n, !0, e);
}
function pd(n) {
  var e = n.teardown;
  if (e !== null) {
    const t = Ci, r = Re;
    sl(!0), ln(null);
    try {
      e.call(null);
    } finally {
      sl(t), ln(r);
    }
  }
}
function Id(n, e = !1) {
  var t = n.first;
  for (n.first = n.last = null; t !== null; ) {
    const i = t.ac;
    i !== null && Ss(() => {
      i.abort(Mi);
    });
    var r = t.next;
    t.f & Br ? t.parent = null : xt(t, e), t = r;
  }
}
function Fc(n) {
  for (var e = n.first; e !== null; ) {
    var t = e.next;
    e.f & Ir || xt(e), e = t;
  }
}
function xt(n, e = !0) {
  var t = !1;
  (e || n.f & Wu) && n.nodes_start !== null && n.nodes_end !== null && (kc(
    n.nodes_start,
    /** @type {TemplateNode} */
    n.nodes_end
  ), t = !0), Id(n, e && !t), os(n, 0), Kt(n, bi);
  var r = n.transitions;
  if (r !== null)
    for (const a of r)
      a.stop();
  pd(n);
  var i = n.parent;
  i !== null && i.first !== null && bd(n), n.next = n.prev = n.teardown = n.ctx = n.deps = n.fn = n.nodes_start = n.nodes_end = n.ac = null;
}
function kc(n, e) {
  for (; n !== null; ) {
    var t = n === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Oa(n)
    );
    n.remove(), n = t;
  }
}
function bd(n) {
  var e = n.parent, t = n.prev, r = n.next;
  t !== null && (t.next = r), r !== null && (r.prev = t), e !== null && (e.first === n && (e.first = r), e.last === n && (e.last = t));
}
function Pr(n, e) {
  var t = [];
  Ho(n, t, !0), _d(t, () => {
    xt(n), e && e();
  });
}
function _d(n, e) {
  var t = n.length;
  if (t > 0) {
    var r = () => --t || e();
    for (var i of n)
      i.out(r);
  } else
    e();
}
function Ho(n, e, t) {
  if (!(n.f & Hn)) {
    if (n.f ^= Hn, n.transitions !== null)
      for (const s of n.transitions)
        (s.is_global || t) && e.push(s);
    for (var r = n.first; r !== null; ) {
      var i = r.next, a = (r.f & _i) !== 0 || (r.f & Ir) !== 0;
      Ho(r, e, a ? t : !1), r = i;
    }
  }
}
function Ts(n) {
  yd(n, !0);
}
function yd(n, e) {
  if (n.f & Hn) {
    n.f ^= Hn, n.f & zt || (Kt(n, gn), gi(n));
    for (var t = n.first; t !== null; ) {
      var r = t.next, i = (t.f & _i) !== 0 || (t.f & Ir) !== 0;
      yd(t, i ? e : !1), t = r;
    }
    if (n.transitions !== null)
      for (const a of n.transitions)
        (a.is_global || e) && a.in();
  }
}
let ki = !1;
function al(n) {
  ki = n;
}
let Ci = !1;
function sl(n) {
  Ci = n;
}
let Re = null, Pn = !1;
function ln(n) {
  Re = n;
}
let Fe = null;
function $n(n) {
  Fe = n;
}
let Yt = null;
function Cd(n) {
  Re !== null && (Yt === null ? Yt = [n] : Yt.push(n));
}
let qt = null, cn = 0, An = null;
function Nc(n) {
  An = n;
}
let Ad = 1, _a = 0, ci = _a;
function ol(n) {
  ci = n;
}
let Dr = !1;
function Ed() {
  return ++Ad;
}
function Ds(n) {
  var h;
  var e = n.f;
  if (e & gn)
    return !0;
  if (e & Gr) {
    var t = n.deps, r = (e & Tn) !== 0;
    if (t !== null) {
      var i, a, s = (e & as) !== 0, u = r && Fe !== null && !Dr, l = t.length;
      if ((s || u) && (Fe === null || !(Fe.f & bi))) {
        var c = (
          /** @type {Derived} */
          n
        ), d = c.parent;
        for (i = 0; i < l; i++)
          a = t[i], (s || !((h = a == null ? void 0 : a.reactions) != null && h.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        s && (c.f ^= as), u && d !== null && !(d.f & Tn) && (c.f ^= Tn);
      }
      for (i = 0; i < l; i++)
        if (a = t[i], Ds(
          /** @type {Derived} */
          a
        ) && ud(
          /** @type {Derived} */
          a
        ), a.wv > n.wv)
          return !0;
    }
    (!r || Fe !== null && !Dr) && Kt(n, zt);
  }
  return !1;
}
function Sd(n, e, t = !0) {
  var r = n.reactions;
  if (r !== null && !(Yt != null && Yt.includes(n)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a.f & $t ? Sd(
        /** @type {Derived} */
        a,
        e,
        !1
      ) : e === a && (t ? Kt(a, gn) : a.f & zt && Kt(a, Gr), gi(
        /** @type {Effect} */
        a
      ));
    }
}
function xd(n) {
  var p;
  var e = qt, t = cn, r = An, i = Re, a = Dr, s = Yt, u = $e, l = Pn, c = ci, d = n.f;
  qt = /** @type {null | Value[]} */
  null, cn = 0, An = null, Dr = (d & Tn) !== 0 && (Pn || !ki || Re === null), Re = d & (Ir | Br) ? null : n, Yt = null, Xi(n.ctx), Pn = !1, ci = ++_a, n.ac !== null && (Ss(() => {
    n.ac.abort(Mi);
  }), n.ac = null);
  try {
    n.f |= to;
    var h = (
      /** @type {Function} */
      n.fn
    ), f = h(), v = n.deps;
    if (qt !== null) {
      var g;
      if (os(n, cn), v !== null && cn > 0)
        for (v.length = cn + qt.length, g = 0; g < qt.length; g++)
          v[cn + g] = qt[g];
      else
        n.deps = v = qt;
      if (!Dr || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      d & $t && /** @type {import('#client').Derived} */
      n.reactions !== null)
        for (g = cn; g < v.length; g++)
          ((p = v[g]).reactions ?? (p.reactions = [])).push(n);
    } else v !== null && cn < v.length && (os(n, cn), v.length = cn);
    if (La() && An !== null && !Pn && v !== null && !(n.f & ($t | Gr | gn)))
      for (g = 0; g < /** @type {Source[]} */
      An.length; g++)
        Sd(
          An[g],
          /** @type {Effect} */
          n
        );
    return i !== null && i !== n && (_a++, An !== null && (r === null ? r = An : r.push(.../** @type {Source[]} */
    An))), n.f & ui && (n.f ^= ui), f;
  } catch (y) {
    return rd(y);
  } finally {
    n.f ^= to, qt = e, cn = t, An = r, Re = i, Dr = a, Yt = s, Xi(u), Pn = l, ci = c;
  }
}
function Hc(n, e) {
  let t = e.reactions;
  if (t !== null) {
    var r = Uu.call(t, n);
    if (r !== -1) {
      var i = t.length - 1;
      i === 0 ? t = e.reactions = null : (t[r] = t[i], t.pop());
    }
  }
  t === null && e.f & $t && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (qt === null || !qt.includes(e)) && (Kt(e, Gr), e.f & (Tn | as) || (e.f ^= as), dd(
    /** @type {Derived} **/
    e
  ), os(
    /** @type {Derived} **/
    e,
    0
  ));
}
function os(n, e) {
  var t = n.deps;
  if (t !== null)
    for (var r = e; r < t.length; r++)
      Hc(n, t[r]);
}
function ya(n) {
  var e = n.f;
  if (!(e & bi)) {
    Kt(n, zt);
    var t = Fe, r = ki;
    Fe = n, ki = !0;
    try {
      e & Ii ? Fc(n) : Id(n), pd(n);
      var i = xd(n);
      n.teardown = typeof i == "function" ? i : null, n.wv = Ad;
      var a;
      ql && ic && n.f & gn && n.deps;
    } finally {
      ki = r, Fe = t;
    }
  }
}
async function wd() {
  await Promise.resolve(), cc();
}
function o(n) {
  var e = n.f, t = (e & $t) !== 0;
  if (Re !== null && !Pn) {
    var r = Fe !== null && (Fe.f & bi) !== 0;
    if (!r && !(Yt != null && Yt.includes(n))) {
      var i = Re.deps;
      if (Re.f & to)
        n.rv < _a && (n.rv = _a, qt === null && i !== null && i[cn] === n ? cn++ : qt === null ? qt = [n] : (!Dr || !qt.includes(n)) && qt.push(n));
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
    u !== null && !(u.f & Tn) && (s.f ^= Tn);
  }
  if (Ci) {
    if (Mr.has(n))
      return Mr.get(n);
    if (t) {
      s = /** @type {Derived} */
      n;
      var l = s.v;
      return (!(s.f & zt) && s.reactions !== null || Td(s)) && (l = Fo(s)), Mr.set(s, l), l;
    }
  } else if (t) {
    if (s = /** @type {Derived} */
    n, Rt != null && Rt.has(s))
      return Rt.get(s);
    Ds(s) && ud(s);
  }
  if (Rt != null && Rt.has(n))
    return Rt.get(n);
  if (n.f & ui)
    throw n.v;
  return n.v;
}
function Td(n) {
  if (n.v === At) return !0;
  if (n.deps === null) return !1;
  for (const e of n.deps)
    if (Mr.has(e) || e.f & $t && Td(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Zr(n) {
  var e = Pn;
  try {
    return Pn = !0, n();
  } finally {
    Pn = e;
  }
}
const Uc = -7169;
function Kt(n, e) {
  n.f = n.f & Uc | e;
}
function Bc(n) {
  if (!(typeof n != "object" || !n || n instanceof EventTarget)) {
    if (Qn in n)
      lo(n);
    else if (!Array.isArray(n))
      for (let e in n) {
        const t = n[e];
        typeof t == "object" && t && Qn in t && lo(t);
      }
  }
}
function lo(n, e = /* @__PURE__ */ new Set()) {
  if (typeof n == "object" && n !== null && // We don't want to traverse DOM elements
  !(n instanceof EventTarget) && !e.has(n)) {
    e.add(n), n instanceof Date && n.getTime();
    for (let r in n)
      try {
        lo(n[r], e);
      } catch {
      }
    const t = ys(n);
    if (t !== Object.prototype && t !== Array.prototype && t !== Map.prototype && t !== Set.prototype && t !== Date.prototype) {
      const r = Yl(t);
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
const Dd = /* @__PURE__ */ new Set(), uo = /* @__PURE__ */ new Set();
function Uo(n, e, t, r = {}) {
  function i(a) {
    if (r.capture || ga.call(e, a), !a.cancelBubble)
      return Ss(() => t == null ? void 0 : t.call(this, a));
  }
  return n.startsWith("pointer") || n.startsWith("touch") || n === "wheel" ? gr(() => {
    e.addEventListener(n, i, r);
  }) : e.addEventListener(n, i, r), i;
}
function Gc(n, e, t, r = {}) {
  var i = Uo(e, n, t, r);
  return () => {
    n.removeEventListener(e, i, r);
  };
}
function hn(n, e, t, r, i) {
  var a = { capture: r, passive: i }, s = Uo(n, e, t, a);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && xs(() => {
    e.removeEventListener(n, s, a);
  });
}
function Ct(n) {
  for (var e = 0; e < n.length; e++)
    Dd.add(n[e]);
  for (var t of uo)
    t(n);
}
let ll = null;
function ga(n) {
  var x;
  var e = this, t = (
    /** @type {Node} */
    e.ownerDocument
  ), r = n.type, i = ((x = n.composedPath) == null ? void 0 : x.call(n)) || [], a = (
    /** @type {null | Element} */
    i[0] || n.target
  );
  ll = n;
  var s = 0, u = ll === n && n.__root;
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
    is(n, "currentTarget", {
      configurable: !0,
      get() {
        return a || t;
      }
    });
    var d = Re, h = Fe;
    ln(null), $n(null);
    try {
      for (var f, v = []; a !== null; ) {
        var g = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var p = a["__" + r];
          if (p != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          n.target === a))
            if (Da(p)) {
              var [y, ..._] = p;
              y.apply(a, [n, ..._]);
            } else
              p.call(a, n);
        } catch (E) {
          f ? v.push(E) : f = E;
        }
        if (n.cancelBubble || g === e || g === null)
          break;
        a = g;
      }
      if (f) {
        for (let E of v)
          queueMicrotask(() => {
            throw E;
          });
        throw f;
      }
    } finally {
      n.__root = e, delete n.currentTarget, ln(d), $n(h);
    }
  }
}
function Ld(n) {
  var e = document.createElement("template");
  return e.innerHTML = n.replaceAll("<!>", "<!---->"), e.content;
}
function Ji(n, e) {
  var t = (
    /** @type {Effect} */
    Fe
  );
  t.nodes_start === null && (t.nodes_start = n, t.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function z(n, e) {
  var t = (e & 1) !== 0, r = (e & 2) !== 0, i, a = !n.startsWith("<!>");
  return () => {
    i === void 0 && (i = Ld(a ? n : "<!>" + n), t || (i = /** @type {Node} */
    /* @__PURE__ */ Ki(i)));
    var s = (
      /** @type {TemplateNode} */
      r || hd ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (t) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ki(s)
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
function Wc(n, e, t = "svg") {
  var r = !n.startsWith("<!>"), i = `<${t}>${r ? n : "<!>" + n}</${t}>`, a;
  return () => {
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        Ld(i)
      ), u = (
        /** @type {Element} */
        /* @__PURE__ */ Ki(s)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ Ki(u);
    }
    var l = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return Ji(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function ct(n, e) {
  return /* @__PURE__ */ Wc(n, e, "svg");
}
function dt(n = "") {
  {
    var e = Wr(n + "");
    return Ji(e, e), e;
  }
}
function ie() {
  var n = document.createDocumentFragment(), e = document.createComment(""), t = Wr();
  return n.append(e, t), Ji(e, t), n;
}
function w(n, e) {
  n !== null && n.before(
    /** @type {Node} */
    e
  );
}
function Vc(n) {
  return n.endsWith("capture") && n !== "gotpointercapture" && n !== "lostpointercapture";
}
const Zc = [
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
function zc(n) {
  return Zc.includes(n);
}
const jc = {
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
function Xc(n) {
  return n = n.toLowerCase(), jc[n] ?? n;
}
const qc = ["touchstart", "touchmove"];
function Yc(n) {
  return qc.includes(n);
}
function Pe(n, e) {
  var t = e == null ? "" : typeof e == "object" ? e + "" : e;
  t !== (n.__t ?? (n.__t = n.nodeValue)) && (n.__t = t, n.nodeValue = t + "");
}
function Kc(n, e) {
  return Jc(n, e);
}
const Ti = /* @__PURE__ */ new Map();
function Jc(n, { target: e, anchor: t, props: r = {}, events: i, context: a, intro: s = !0 }) {
  Ec();
  var u = /* @__PURE__ */ new Set(), l = (h) => {
    for (var f = 0; f < h.length; f++) {
      var v = h[f];
      if (!u.has(v)) {
        u.add(v);
        var g = Yc(v);
        e.addEventListener(v, ga, { passive: g });
        var p = Ti.get(v);
        p === void 0 ? (document.addEventListener(v, ga, { passive: g }), Ti.set(v, 1)) : Ti.set(v, p + 1);
      }
    }
  };
  l(wo(Dd)), uo.add(l);
  var c = void 0, d = Mc(() => {
    var h = t ?? e.appendChild(Wr());
    return gc(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (f) => {
        if (a) {
          Ae({});
          var v = (
            /** @type {ComponentContext} */
            $e
          );
          v.c = a;
        }
        i && (r.$$events = i), c = n(f, r) || {}, a && Ee();
      }
    ), () => {
      var g;
      for (var f of u) {
        e.removeEventListener(f, ga);
        var v = (
          /** @type {number} */
          Ti.get(f)
        );
        --v === 0 ? (document.removeEventListener(f, ga), Ti.delete(f)) : Ti.set(f, v);
      }
      uo.delete(l), h !== t && ((g = h.parentNode) == null || g.removeChild(h));
    };
  });
  return Qc.set(c, d), c;
}
let Qc = /* @__PURE__ */ new WeakMap();
function Ie(n, e, ...t) {
  var r = n, i = pe, a;
  Vr(() => {
    i !== (i = e()) && (a && (xt(a), a = null), a = Vt(() => (
      /** @type {SnippetFn} */
      i(r, ...t)
    )));
  }, _i);
}
function it(n) {
  $e === null && Ro(), ta && $e.l !== null ? $c($e).m.push(n) : Se(() => {
    const e = Zr(n);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Bn(n) {
  $e === null && Ro(), it(() => () => Zr(n));
}
function $c(n) {
  var e = (
    /** @type {ComponentContextLegacy} */
    n.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
function Q(n, e, t = !1) {
  var r = n, i = null, a = null, s = At, u = t ? _i : 0, l = !1;
  const c = (v, g = !0) => {
    l = !0, f(g, v);
  };
  var d = null;
  function h() {
    d !== null && (d.lastChild.remove(), r.before(d), d = null);
    var v = s ? i : a, g = s ? a : i;
    v && Ts(v), g && Pr(g, () => {
      s ? a = null : i = null;
    });
  }
  const f = (v, g) => {
    if (s !== (s = v)) {
      var p = No(), y = r;
      if (p && (d = document.createDocumentFragment(), d.append(y = Wr())), s ? i ?? (i = g && Vt(() => g(y))) : a ?? (a = g && Vt(() => g(y))), p) {
        var _ = (
          /** @type {Batch} */
          qe
        ), x = s ? i : a, E = s ? a : i;
        x && _.skipped_effects.delete(x), E && _.skipped_effects.add(E), _.add_callback(h);
      } else
        h();
    }
  };
  Vr(() => {
    l = !1, e(c), l || f(null, null);
  }, u);
}
let fi = null;
function dl(n) {
  fi = n;
}
function mr(n, e) {
  return e;
}
function ef(n, e, t) {
  for (var r = n.items, i = [], a = e.length, s = 0; s < a; s++)
    Ho(e[s].e, i, !0);
  var u = a > 0 && i.length === 0 && t !== null;
  if (u) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      t.parentNode
    );
    Sc(l), l.append(
      /** @type {Element} */
      t
    ), r.clear(), Wn(n, e[0].prev, e[a - 1].next);
  }
  _d(i, () => {
    for (var c = 0; c < a; c++) {
      var d = e[c];
      u || (r.delete(d.k), Wn(n, d.prev, d.next)), xt(d.e, !u);
    }
  });
}
function vn(n, e, t, r, i, a = null) {
  var s = n, u = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, l = (e & 4) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      n
    );
    s = c.appendChild(Wr());
  }
  var d = null, h = !1, f = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ Po(() => {
    var _ = t();
    return Da(_) ? _ : _ == null ? [] : wo(_);
  }), g, p;
  function y() {
    tf(
      p,
      g,
      u,
      f,
      s,
      i,
      e,
      r,
      t
    ), a !== null && (g.length === 0 ? d ? Ts(d) : d = Vt(() => a(s)) : d !== null && Pr(d, () => {
      d = null;
    }));
  }
  Vr(() => {
    p ?? (p = /** @type {Effect} */
    Fe), g = /** @type {V[]} */
    o(v);
    var _ = g.length;
    if (!(h && _ === 0)) {
      h = _ === 0;
      var x, E, I, S;
      if (No()) {
        var b = /* @__PURE__ */ new Set(), A = (
          /** @type {Batch} */
          qe
        );
        for (E = 0; E < _; E += 1) {
          I = g[E], S = r(I, E);
          var C = u.items.get(S) ?? f.get(S);
          C ? e & 3 && Od(C, I, E, e) : (x = Rd(
            null,
            u,
            null,
            null,
            I,
            S,
            E,
            i,
            e,
            t,
            !0
          ), f.set(S, x)), b.add(S);
        }
        for (const [T, O] of u.items)
          b.has(T) || A.skipped_effects.add(O.e);
        A.add_callback(y);
      } else
        y();
      o(v);
    }
  });
}
function tf(n, e, t, r, i, a, s, u, l) {
  var ue, M, Y, K;
  var c = (s & 8) !== 0, d = (s & 3) !== 0, h = e.length, f = t.items, v = t.first, g = v, p, y = null, _, x = [], E = [], I, S, b, A;
  if (c)
    for (A = 0; A < h; A += 1)
      I = e[A], S = u(I, A), b = f.get(S), b !== void 0 && ((ue = b.a) == null || ue.measure(), (_ ?? (_ = /* @__PURE__ */ new Set())).add(b));
  for (A = 0; A < h; A += 1) {
    if (I = e[A], S = u(I, A), b = f.get(S), b === void 0) {
      var C = r.get(S);
      if (C !== void 0) {
        r.delete(S), f.set(S, C);
        var T = y ? y.next : g;
        Wn(t, y, C), Wn(t, C, T), Zs(C, T, i), y = C;
      } else {
        var O = g ? (
          /** @type {TemplateNode} */
          g.e.nodes_start
        ) : i;
        y = Rd(
          O,
          t,
          y,
          y === null ? t.first : y.next,
          I,
          S,
          A,
          a,
          s,
          l
        );
      }
      f.set(S, y), x = [], E = [], g = y.next;
      continue;
    }
    if (d && Od(b, I, A, s), b.e.f & Hn && (Ts(b.e), c && ((M = b.a) == null || M.unfix(), (_ ?? (_ = /* @__PURE__ */ new Set())).delete(b))), b !== g) {
      if (p !== void 0 && p.has(b)) {
        if (x.length < E.length) {
          var V = E[0], D;
          y = V.prev;
          var P = x[0], ee = x[x.length - 1];
          for (D = 0; D < x.length; D += 1)
            Zs(x[D], V, i);
          for (D = 0; D < E.length; D += 1)
            p.delete(E[D]);
          Wn(t, P.prev, ee.next), Wn(t, y, P), Wn(t, ee, V), g = V, y = ee, A -= 1, x = [], E = [];
        } else
          p.delete(b), Zs(b, g, i), Wn(t, b.prev, b.next), Wn(t, b, y === null ? t.first : y.next), Wn(t, y, b), y = b;
        continue;
      }
      for (x = [], E = []; g !== null && g.k !== S; )
        g.e.f & Hn || (p ?? (p = /* @__PURE__ */ new Set())).add(g), E.push(g), g = g.next;
      if (g === null)
        continue;
      b = g;
    }
    x.push(b), y = b, g = b.next;
  }
  if (g !== null || p !== void 0) {
    for (var U = p === void 0 ? [] : wo(p); g !== null; )
      g.e.f & Hn || U.push(g), g = g.next;
    var H = U.length;
    if (H > 0) {
      var F = s & 4 && h === 0 ? i : null;
      if (c) {
        for (A = 0; A < H; A += 1)
          (Y = U[A].a) == null || Y.measure();
        for (A = 0; A < H; A += 1)
          (K = U[A].a) == null || K.fix();
      }
      ef(t, U, F);
    }
  }
  c && gr(() => {
    var ce;
    if (_ !== void 0)
      for (b of _)
        (ce = b.a) == null || ce.apply();
  }), n.first = t.first && t.first.e, n.last = y && y.e;
  for (var X of r.values())
    xt(X.e);
  r.clear();
}
function Od(n, e, t, r) {
  r & 1 && Yi(n.v, e), r & 2 ? Yi(
    /** @type {Value<number>} */
    n.i,
    t
  ) : n.i = t;
}
function Rd(n, e, t, r, i, a, s, u, l, c, d) {
  var h = fi, f = (l & 1) !== 0, v = (l & 16) === 0, g = f ? v ? /* @__PURE__ */ cd(i, !1, !1) : mi(i) : i, p = l & 2 ? mi(s) : s, y = {
    i: p,
    v: g,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: t,
    next: r
  };
  fi = y;
  try {
    if (n === null) {
      var _ = document.createDocumentFragment();
      _.append(n = Wr());
    }
    return y.e = Vt(() => u(
      /** @type {Node} */
      n,
      g,
      p,
      c
    ), rc), y.e.prev = t && t.e, y.e.next = r && r.e, t === null ? d || (e.first = y) : (t.next = y, t.e.next = y.e), r !== null && (r.prev = y, r.e.prev = y.e), y;
  } finally {
    fi = h;
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
      /* @__PURE__ */ Oa(a)
    );
    i.before(a), a = s;
  }
}
function Wn(n, e, t) {
  e === null ? n.first = t : (e.next = t, e.e.next = t && t.e), t !== null && (t.prev = e, t.e.prev = e && e.e);
}
function nf(n, e, t, r, i) {
  var u;
  var a = (u = e.$$slots) == null ? void 0 : u[t], s = !1;
  a === !0 && (a = e.children, s = !0), a === void 0 || a(n, s ? () => r : r);
}
function Ma(n, e, t) {
  var r = n, i, a, s = null, u = null;
  function l() {
    a && (Pr(a), a = null), s && (s.lastChild.remove(), r.before(s), s = null), a = u, u = null;
  }
  Vr(() => {
    if (i !== (i = e())) {
      var c = No();
      if (i) {
        var d = r;
        c && (s = document.createDocumentFragment(), s.append(d = Wr()), a && qe.skipped_effects.add(a)), u = Vt(() => t(d, i));
      }
      c ? qe.add_callback(l) : l();
    }
  }, _i);
}
function co(n, e, t, r, i, a) {
  var s, u, l = null, c = (
    /** @type {TemplateNode} */
    n
  ), d, h = fi;
  Vr(() => {
    const f = e() || null;
    var v = f === "svg" ? Nu : null;
    if (f !== s) {
      var g = fi;
      dl(h), d && (f === null ? Pr(d, () => {
        d = null, u = null;
      }) : f === u ? Ts(d) : xt(d)), f && f !== u && (d = Vt(() => {
        if (l = v ? document.createElementNS(v, f) : document.createElement(f), Ji(l, l), r) {
          var p = (
            /** @type {TemplateNode} */
            l.appendChild(Wr())
          );
          r(l, p);
        }
        Fe.nodes_end = l, c.before(l);
      })), s = f, s && (u = s), dl(g);
    }
  }, _i);
}
function Oe(n, e, t) {
  Ra(() => {
    var r = Zr(() => e(n, t == null ? void 0 : t()) || {});
    if (t && (r != null && r.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      ws(() => {
        var s = t();
        Bc(s), i && Mo(a, s) && (a = s, r.update(s));
      }), i = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function rf(n, e) {
  var t = void 0, r;
  Vr(() => {
    t !== (t = e()) && (r && (xt(r), r = null), t && (r = Vt(() => {
      Ra(() => (
        /** @type {(node: Element) => void} */
        t(n)
      ));
    })));
  });
}
function Md(n) {
  var e, t, r = "";
  if (typeof n == "string" || typeof n == "number") r += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var i = n.length;
    for (e = 0; e < i; e++) n[e] && (t = Md(n[e])) && (r && (r += " "), r += t);
  } else for (t in n) n[t] && (r && (r += " "), r += t);
  return r;
}
function af() {
  for (var n, e, t = 0, r = "", i = arguments.length; t < i; t++) (n = arguments[t]) && (e = Md(n)) && (r && (r += " "), r += e);
  return r;
}
function Pd(n) {
  return typeof n == "object" ? af(n) : n ?? "";
}
const ul = [...` 	
\r\f \v\uFEFF`];
function sf(n, e, t) {
  var r = n == null ? "" : "" + n;
  if (e && (r = r ? r + " " + e : e), t) {
    for (var i in t)
      if (t[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var a = i.length, s = 0; (s = r.indexOf(i, s)) >= 0; ) {
          var u = s + a;
          (s === 0 || ul.includes(r[s - 1])) && (u === r.length || ul.includes(r[u])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(u + 1) : s = u;
        }
  }
  return r === "" ? null : r;
}
function cl(n, e = !1) {
  var t = e ? " !important;" : ";", r = "";
  for (var i in n) {
    var a = n[i];
    a != null && a !== "" && (r += " " + i + ": " + a + t);
  }
  return r;
}
function zs(n) {
  return n[0] !== "-" || n[1] !== "-" ? n.toLowerCase() : n;
}
function of(n, e) {
  if (e) {
    var t = "", r, i;
    if (Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, n) {
      n = String(n).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, s = 0, u = !1, l = [];
      r && l.push(...Object.keys(r).map(zs)), i && l.push(...Object.keys(i).map(zs));
      var c = 0, d = -1;
      const p = n.length;
      for (var h = 0; h < p; h++) {
        var f = n[h];
        if (u ? f === "/" && n[h - 1] === "*" && (u = !1) : a ? a === f && (a = !1) : f === "/" && n[h + 1] === "*" ? u = !0 : f === '"' || f === "'" ? a = f : f === "(" ? s++ : f === ")" && s--, !u && a === !1 && s === 0) {
          if (f === ":" && d === -1)
            d = h;
          else if (f === ";" || h === p - 1) {
            if (d !== -1) {
              var v = zs(n.substring(c, d).trim());
              if (!l.includes(v)) {
                f !== ";" && h++;
                var g = n.substring(c, h).trim();
                t += " " + g + ";";
              }
            }
            c = h + 1, d = -1;
          }
        }
      }
    }
    return r && (t += cl(r)), i && (t += cl(i, !0)), t = t.trim(), t === "" ? null : t;
  }
  return n == null ? null : String(n);
}
function pr(n, e, t, r, i, a) {
  var s = n.__className;
  if (s !== t || s === void 0) {
    var u = sf(t, r, a);
    u == null ? n.removeAttribute("class") : e ? n.className = u : n.setAttribute("class", u), n.__className = t;
  } else if (a && i !== a)
    for (var l in a) {
      var c = !!a[l];
      (i == null || c !== !!i[l]) && n.classList.toggle(l, c);
    }
  return a;
}
function js(n, e = {}, t, r) {
  for (var i in t) {
    var a = t[i];
    e[i] !== a && (t[i] == null ? n.style.removeProperty(i) : n.style.setProperty(i, a, r));
  }
}
function et(n, e, t, r) {
  var i = n.__style;
  if (i !== e) {
    var a = of(e, r);
    a == null ? n.removeAttribute("style") : n.style.cssText = a, n.__style = e;
  } else r && (Array.isArray(r) ? (js(n, t == null ? void 0 : t[0], r[0]), js(n, t == null ? void 0 : t[1], r[1], "important")) : js(n, t, r));
  return r;
}
function fo(n, e, t = !1) {
  if (n.multiple) {
    if (e == null)
      return;
    if (!Da(e))
      return tc();
    for (var r of n.options)
      r.selected = e.includes(fl(r));
    return;
  }
  for (r of n.options) {
    var i = fl(r);
    if (Ac(i, e)) {
      r.selected = !0;
      return;
    }
  }
  (!t || e !== void 0) && (n.selectedIndex = -1);
}
function lf(n) {
  var e = new MutationObserver(() => {
    fo(n, n.__value);
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
  }), xs(() => {
    e.disconnect();
  });
}
function fl(n) {
  return "__value" in n ? n.__value : n.value;
}
const da = Symbol("class"), ua = Symbol("style"), Fd = Symbol("is custom element"), kd = Symbol("is html");
function hl(n, e) {
  var t = Bo(n);
  t.value === (t.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  n.value === e && (e !== 0 || n.nodeName !== "PROGRESS") || (n.value = e ?? "");
}
function df(n, e) {
  e ? n.hasAttribute("selected") || n.setAttribute("selected", "") : n.removeAttribute("selected");
}
function Jt(n, e, t, r) {
  var i = Bo(n);
  i[e] !== (i[e] = t) && (e === "loading" && (n[Zu] = t), t == null ? n.removeAttribute(e) : typeof t != "string" && Nd(n).includes(e) ? n[e] = t : n.setAttribute(e, t));
}
function uf(n, e, t, r, i = !1, a = !1) {
  var s = Bo(n), u = s[Fd], l = !s[kd], c = e || {}, d = n.tagName === "OPTION";
  for (var h in e)
    h in t || (t[h] = null);
  t.class ? t.class = Pd(t.class) : t[da] && (t.class = null), t[ua] && (t.style ?? (t.style = null));
  var f = Nd(n);
  for (const E in t) {
    let I = t[E];
    if (d && E === "value" && I == null) {
      n.value = n.__value = "", c[E] = I;
      continue;
    }
    if (E === "class") {
      var v = n.namespaceURI === "http://www.w3.org/1999/xhtml";
      pr(n, v, I, r, e == null ? void 0 : e[da], t[da]), c[E] = I, c[da] = t[da];
      continue;
    }
    if (E === "style") {
      et(n, I, e == null ? void 0 : e[ua], t[ua]), c[E] = I, c[ua] = t[ua];
      continue;
    }
    var g = c[E];
    if (!(I === g && !(I === void 0 && n.hasAttribute(E)))) {
      c[E] = I;
      var p = E[0] + E[1];
      if (p !== "$$")
        if (p === "on") {
          const S = {}, b = "$$" + E;
          let A = E.slice(2);
          var y = zc(A);
          if (Vc(A) && (A = A.slice(0, -7), S.capture = !0), !y && g) {
            if (I != null) continue;
            n.removeEventListener(A, c[b], S), c[b] = null;
          }
          if (I != null)
            if (y)
              n[`__${A}`] = I, Ct([A]);
            else {
              let C = function(T) {
                c[E].call(this, T);
              };
              c[b] = Uo(A, n, C, S);
            }
          else y && (n[`__${A}`] = void 0);
        } else if (E === "style")
          Jt(n, E, I);
        else if (E === "autofocus")
          xc(
            /** @type {HTMLElement} */
            n,
            !!I
          );
        else if (!u && (E === "__value" || E === "value" && I != null))
          n.value = n.__value = I;
        else if (E === "selected" && d)
          df(
            /** @type {HTMLOptionElement} */
            n,
            I
          );
        else {
          var _ = E;
          l || (_ = Xc(_));
          var x = _ === "defaultValue" || _ === "defaultChecked";
          if (I == null && !u && !x)
            if (s[E] = null, _ === "value" || _ === "checked") {
              let S = (
                /** @type {HTMLInputElement} */
                n
              );
              const b = e === void 0;
              if (_ === "value") {
                let A = S.defaultValue;
                S.removeAttribute(_), S.defaultValue = A, S.value = S.__value = b ? A : null;
              } else {
                let A = S.defaultChecked;
                S.removeAttribute(_), S.defaultChecked = A, S.checked = b ? A : !1;
              }
            } else
              n.removeAttribute(E);
          else x || f.includes(_) && (u || typeof I != "string") ? (n[_] = I, _ in s && (s[_] = At)) : typeof I != "function" && Jt(n, _, I);
        }
    }
  }
  return c;
}
function Be(n, e, t = [], r = [], i, a = !1, s = !1) {
  ld(t, r, (u) => {
    var l = void 0, c = {}, d = n.nodeName === "SELECT", h = !1;
    if (Vr(() => {
      var v = e(...u.map(o)), g = uf(
        n,
        l,
        v,
        i,
        a,
        s
      );
      h && d && "value" in v && fo(
        /** @type {HTMLSelectElement} */
        n,
        v.value
      );
      for (let y of Object.getOwnPropertySymbols(c))
        v[y] || xt(c[y]);
      for (let y of Object.getOwnPropertySymbols(v)) {
        var p = v[y];
        y.description === Hu && (!l || p !== l[y]) && (c[y] && xt(c[y]), c[y] = Vt(() => rf(n, () => p))), g[y] = p;
      }
      l = g;
    }), d) {
      var f = (
        /** @type {HTMLSelectElement} */
        n
      );
      Ra(() => {
        fo(
          f,
          /** @type {Record<string | symbol, any>} */
          l.value,
          !0
        ), lf(f);
      });
    }
    h = !0;
  });
}
function Bo(n) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    n.__attributes ?? (n.__attributes = {
      [Fd]: n.nodeName.includes("-"),
      [kd]: n.namespaceURI === ku
    })
  );
}
var vl = /* @__PURE__ */ new Map();
function Nd(n) {
  var e = n.getAttribute("is") || n.nodeName, t = vl.get(e);
  if (t) return t;
  vl.set(e, t = []);
  for (var r, i = n, a = Element.prototype; a !== i; ) {
    r = Yl(i);
    for (var s in r)
      r[s].set && t.push(s);
    i = ys(i);
  }
  return t;
}
const cf = () => performance.now(), cr = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (n) => requestAnimationFrame(n)
  ),
  now: () => cf(),
  tasks: /* @__PURE__ */ new Set()
};
function Hd() {
  const n = cr.now();
  cr.tasks.forEach((e) => {
    e.c(n) || (cr.tasks.delete(e), e.f());
  }), cr.tasks.size !== 0 && cr.tick(Hd);
}
function ff(n) {
  let e;
  return cr.tasks.size === 0 && cr.tick(Hd), {
    promise: new Promise((t) => {
      cr.tasks.add(e = { c: n, f: t });
    }),
    abort() {
      cr.tasks.delete(e);
    }
  };
}
function hf(n) {
  if (n === "float") return "cssFloat";
  if (n === "offset") return "cssOffset";
  if (n.startsWith("--")) return n;
  const e = n.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (t) => t[0].toUpperCase() + t.slice(1)
  ).join("");
}
function gl(n) {
  const e = {}, t = n.split(";");
  for (const r of t) {
    const [i, a] = r.split(":");
    if (!i || a === void 0) break;
    const s = hf(i.trim());
    e[s] = a.trim();
  }
  return e;
}
const vf = (n) => n;
function Go(n, e, t) {
  var r = (
    /** @type {EachItem} */
    fi
  ), i, a, s, u = null;
  r.a ?? (r.a = {
    element: n,
    measure() {
      i = this.element.getBoundingClientRect();
    },
    apply() {
      if (s == null || s.abort(), a = this.element.getBoundingClientRect(), i.left !== a.left || i.right !== a.right || i.top !== a.top || i.bottom !== a.bottom) {
        const l = e()(this.element, { from: i, to: a }, t == null ? void 0 : t());
        s = Ud(this.element, l, void 0, 1, () => {
          s == null || s.abort(), s = void 0;
        });
      }
    },
    fix() {
      if (!n.getAnimations().length) {
        var { position: l, width: c, height: d } = getComputedStyle(n);
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
          }, h.position = "absolute", h.width = c, h.height = d;
          var f = n.getBoundingClientRect();
          if (i.left !== f.left || i.top !== f.top) {
            var v = `translate(${i.left - f.left}px, ${i.top - f.top}px)`;
            h.transform = h.transform ? `${h.transform} ${v}` : v;
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
function Ud(n, e, t, r, i) {
  if (Ri(e)) {
    var a, s = !1;
    return gr(() => {
      if (!s) {
        var p = e({ direction: "in" });
        a = Ud(n, p, t, r, i);
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
  const { delay: u = 0, css: l, tick: c, easing: d = vf } = e;
  var h = [];
  if (c && c(0, 1), l) {
    var f = gl(l(0, 1));
    h.push(f, f);
  }
  var v = () => 1 - r, g = n.animate(h, { duration: u, fill: "forwards" });
  return g.onfinish = () => {
    g.cancel();
    var p = 1 - r, y = r - p, _ = (
      /** @type {number} */
      e.duration * Math.abs(y)
    ), x = [];
    if (_ > 0) {
      var E = !1;
      if (l)
        for (var I = Math.ceil(_ / 16.666666666666668), S = 0; S <= I; S += 1) {
          var b = p + y * d(S / I), A = gl(l(b, 1 - b));
          x.push(A), E || (E = A.overflow === "hidden");
        }
      E && (n.style.overflow = "hidden"), v = () => {
        var C = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          g.currentTime
        );
        return p + y * d(C / _);
      }, c && ff(() => {
        if (g.playState !== "running") return !1;
        var C = v();
        return c(C, 1 - C), !0;
      });
    }
    g = n.animate(x, { duration: _, fill: "forwards" }), g.onfinish = () => {
      v = () => r, c == null || c(r, 1 - r), i();
    };
  }, {
    abort: () => {
      g && (g.cancel(), g.effect = null, g.onfinish = pe);
    },
    deactivate: () => {
      i = pe;
    },
    reset: () => {
    },
    t: () => v()
  };
}
function gf(n, e, t = e) {
  var r = /* @__PURE__ */ new WeakSet();
  Tc(n, "input", async (i) => {
    var a = i ? n.defaultValue : n.value;
    if (a = Xs(n) ? qs(a) : a, t(a), qe !== null && r.add(qe), await wd(), a !== (a = e())) {
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
  Zr(e) == null && n.value && (t(Xs(n) ? qs(n.value) : n.value), qe !== null && r.add(qe)), ws(() => {
    var i = e();
    if (n === document.activeElement) {
      var a = (
        /** @type {Batch} */
        Qa ?? qe
      );
      if (r.has(a))
        return;
    }
    Xs(n) && i === qs(n.value) || n.type === "date" && !i && !n.value || i !== n.value && (n.value = i ?? "");
  });
}
function Xs(n) {
  var e = n.type;
  return e === "number" || e === "range";
}
function qs(n) {
  return n === "" ? null : +n;
}
function ml(n, e) {
  return n === e || (n == null ? void 0 : n[Qn]) === e;
}
function xe(n = {}, e, t, r) {
  return Ra(() => {
    var i, a;
    return ws(() => {
      i = a, a = [], Zr(() => {
        n !== t(...a) && (e(n, ...a), i && ml(t(...i), n) && e(null, ...i));
      });
    }), () => {
      gr(() => {
        a && ml(t(...a), n) && e(null, ...a);
      });
    };
  }), n;
}
function Bd(n, e, t) {
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
const Di = [];
function Un(n, e = pe) {
  let t = null;
  const r = /* @__PURE__ */ new Set();
  function i(u) {
    if (Mo(n, u) && (n = u, t)) {
      const l = !Di.length;
      for (const c of r)
        c[1](), Di.push(c, n);
      if (l) {
        for (let c = 0; c < Di.length; c += 2)
          Di[c][0](Di[c + 1]);
        Di.length = 0;
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
    const c = [u, l];
    return r.add(c), r.size === 1 && (t = e(i, a) || pe), u(
      /** @type {T} */
      n
    ), () => {
      r.delete(c), r.size === 0 && t && (t(), t = null);
    };
  }
  return { set: i, update: a, subscribe: s };
}
function mf(n) {
  let e;
  return Bd(n, (t) => e = t)(), e;
}
let Va = !1, ho = Symbol();
function pi(n, e, t) {
  const r = t[e] ?? (t[e] = {
    store: null,
    source: /* @__PURE__ */ cd(void 0),
    unsubscribe: pe
  });
  if (r.store !== n && !(ho in t))
    if (r.unsubscribe(), r.store = n ?? null, n == null)
      r.source.v = void 0, r.unsubscribe = pe;
    else {
      var i = !0;
      r.unsubscribe = Bd(n, (a) => {
        i ? r.source.v = a : B(r.source, a);
      }), i = !1;
    }
  return n && ho in t ? mf(n) : o(r.source);
}
function Jn(n, e) {
  return n.set(e), e;
}
function Ai() {
  const n = {};
  function e() {
    xs(() => {
      for (var t in n)
        n[t].unsubscribe();
      is(n, ho, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [n, e];
}
function pf(n) {
  var e = Va;
  try {
    return Va = !1, [n(), Va];
  } finally {
    Va = e;
  }
}
const If = {
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
function ze(n, e, t) {
  return new Proxy(
    { props: n, exclude: e },
    If
  );
}
const bf = {
  get(n, e) {
    let t = n.props.length;
    for (; t--; ) {
      let r = n.props[t];
      if (Ri(r) && (r = r()), typeof r == "object" && r !== null && e in r) return r[e];
    }
  },
  set(n, e, t) {
    let r = n.props.length;
    for (; r--; ) {
      let i = n.props[r];
      Ri(i) && (i = i());
      const a = Rr(i, e);
      if (a && a.set)
        return a.set(t), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(n, e) {
    let t = n.props.length;
    for (; t--; ) {
      let r = n.props[t];
      if (Ri(r) && (r = r()), typeof r == "object" && r !== null && e in r) {
        const i = Rr(r, e);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(n, e) {
    if (e === Qn || e === Ql) return !1;
    for (let t of n.props)
      if (Ri(t) && (t = t()), t != null && e in t) return !0;
    return !1;
  },
  ownKeys(n) {
    const e = [];
    for (let t of n.props)
      if (Ri(t) && (t = t()), !!t) {
        for (const r in t)
          e.includes(r) || e.push(r);
        for (const r of Object.getOwnPropertySymbols(t))
          e.includes(r) || e.push(r);
      }
    return e;
  }
};
function Ke(...n) {
  return new Proxy({ props: n }, bf);
}
function m(n, e, t, r) {
  var E;
  var i = !ta || (t & 2) !== 0, a = (t & 8) !== 0, s = (t & 16) !== 0, u = (
    /** @type {V} */
    r
  ), l = !0, c = () => (l && (l = !1, u = s ? Zr(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), u), d;
  if (a) {
    var h = Qn in n || Ql in n;
    d = ((E = Rr(n, e)) == null ? void 0 : E.set) ?? (h && e in n ? (I) => n[e] = I : void 0);
  }
  var f, v = !1;
  a ? [f, v] = pf(() => (
    /** @type {V} */
    n[e]
  )) : f = /** @type {V} */
  n[e], f === void 0 && r !== void 0 && (f = c(), d && (i && Ku(), d(f)));
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
      function(I, S) {
        return arguments.length > 0 ? ((!i || !S || p || v) && d(S ? g() : I), I) : g();
      }
    );
  }
  var y = !1, _ = (t & 1 ? Es : Po)(() => (y = !1, g()));
  a && o(_);
  var x = (
    /** @type {Effect} */
    Fe
  );
  return (
    /** @type {() => V} */
    function(I, S) {
      if (arguments.length > 0) {
        const b = S ? o(_) : i && a ? Ce(I) : I;
        return B(_, b), y = !0, u !== void 0 && (u = b), I;
      }
      return Ci && y || x.f & bi ? _.v : o(_);
    }
  );
}
const _f = "5";
var Xl;
typeof window < "u" && ((Xl = window.__svelte ?? (window.__svelte = {})).v ?? (Xl.v = /* @__PURE__ */ new Set())).add(_f);
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
function Ca(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const r = {};
  for (let i = 0; i < t.length; i++) {
    const a = t[i], s = a.indexOf("$");
    s !== -1 && e.indexOf(a.substring(0, s + 1)) !== -1 || e.indexOf(a) === -1 && (r[a] = n[a]);
  }
  return r;
}
function lt(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const r = {};
  for (let i = 0; i < t.length; i++) {
    const a = t[i];
    a.substring(0, e.length) === e && (r[a.substring(e.length)] = n[a]);
  }
  return r;
}
class na {
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
    t in a || (a[t] = /* @__PURE__ */ new Map()), a[t].set(r, Gc(e, t, r, i));
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
function ne(n, e) {
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
var Za;
function yf(n, e) {
  e === void 0 && (e = !1);
  var t = n.CSS, r = Za;
  if (typeof Za == "boolean" && !e)
    return Za;
  var i = t && typeof t.supports == "function";
  if (!i)
    return !1;
  var a = t.supports("--css-vars", "yes"), s = t.supports("(--css-vars: yes)") && t.supports("color", "#00000000");
  return r = a || s, e || (Za = r), r;
}
function Cf(n, e, t) {
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
var vo = function(n, e) {
  return vo = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
  }, vo(n, e);
};
function mn(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  vo(n, e);
  function t() {
    this.constructor = n;
  }
  n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var Ze = function() {
  return Ze = Object.assign || function(e) {
    for (var t, r = 1, i = arguments.length; r < i; r++) {
      t = arguments[r];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, Ze.apply(this, arguments);
};
function Af(n, e, t, r) {
  function i(a) {
    return a instanceof t ? a : new t(function(s) {
      s(a);
    });
  }
  return new (t || (t = Promise))(function(a, s) {
    function u(d) {
      try {
        c(r.next(d));
      } catch (h) {
        s(h);
      }
    }
    function l(d) {
      try {
        c(r.throw(d));
      } catch (h) {
        s(h);
      }
    }
    function c(d) {
      d.done ? a(d.value) : i(d.value).then(u, l);
    }
    c((r = r.apply(n, e || [])).next());
  });
}
function Ef(n, e) {
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
function kn(n) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && n[e], r = 0;
  if (t) return t.call(n);
  if (n && typeof n.length == "number") return {
    next: function() {
      return n && r >= n.length && (n = void 0), { value: n && n[r++], done: !n };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function pl(n, e) {
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
function Sf(n, e, t) {
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
var pn = (
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
function xf(n) {
  return n === void 0 && (n = window), wf(n) ? { passive: !0 } : !1;
}
function wf(n) {
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
const Gd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: xf
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
function Tf(n, e) {
  if (n.closest)
    return n.closest(e);
  for (var t = n; t; ) {
    if (Wd(t, e))
      return t;
    t = t.parentElement;
  }
  return null;
}
function Wd(n, e) {
  var t = n.matches || n.webkitMatchesSelector || n.msMatchesSelector;
  return t.call(n, e);
}
function Df(n) {
  var e = n;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var t = e.cloneNode(!0);
  t.style.setProperty("position", "absolute"), t.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(t);
  var r = t.scrollWidth;
  return document.documentElement.removeChild(t), r;
}
const Pa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: Tf,
  estimateScrollWidth: Df,
  matches: Wd
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
var Lf = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Of = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Il = {
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
var bl = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], _l = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], za = [], Rf = (
  /** @class */
  function(n) {
    mn(e, n);
    function e(t) {
      var r = n.call(this, Ze(Ze({}, e.defaultAdapter), t)) || this;
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
        return Lf;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Of;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Il;
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
          for (var a = kn(bl), s = a.next(); !s.done; s = a.next()) {
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
          for (var a = kn(_l), s = a.next(); !s.done; s = a.next()) {
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
        for (var i = kn(bl), a = i.next(); !a.done; a = i.next()) {
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
        for (var i = kn(_l), a = i.next(); !a.done; a = i.next()) {
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
            var u = t !== void 0 && za.length > 0 && za.some(function(l) {
              return r.adapter.containsEventTarget(l);
            });
            if (u) {
              this.resetActivationState();
              return;
            }
            t !== void 0 && (za.push(t.target), this.registerDeactivationHandlers(t)), i.wasElementMadeActive = this.checkElementMadeActive(t), i.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              za = [], !i.wasElementMadeActive && t !== void 0 && (t.key === " " || t.keyCode === 32) && (i.wasElementMadeActive = r.checkElementMadeActive(t), i.wasElementMadeActive && r.animateActivation()), i.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(t) {
      return t !== void 0 && t.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var t = this, r = e.strings, i = r.VAR_FG_TRANSLATE_START, a = r.VAR_FG_TRANSLATE_END, s = e.cssClasses, u = s.FG_DEACTIVATION, l = s.FG_ACTIVATION, c = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var d = "", h = "";
      if (!this.adapter.isUnbounded()) {
        var f = this.getFgTranslationCoordinates(), v = f.startPoint, g = f.endPoint;
        d = v.x + "px, " + v.y + "px", h = g.x + "px, " + g.y + "px";
      }
      this.adapter.updateCssVariable(i, d), this.adapter.updateCssVariable(a, h), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(u), this.adapter.computeBoundingRect(), this.adapter.addClass(l), this.activationTimer = setTimeout(function() {
        t.activationTimerCallback();
      }, c);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var t = this.activationState, r = t.activationEvent, i = t.wasActivatedByPointer, a;
      i ? a = Cf(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
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
      }, Il.FG_DEACTIVATION_MS));
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
        var i = Ze({}, r);
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
  }(pn)
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
var Ys = "mdc-dom-focus-sentinel", Mf = (
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
      [].slice.call(this.root.querySelectorAll("." + Ys)).forEach(function(e) {
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
        var i = r.getAttribute("aria-disabled") === "true" || r.getAttribute("disabled") != null || r.getAttribute("hidden") != null || r.getAttribute("aria-hidden") === "true", a = r.tabIndex >= 0 && r.getBoundingClientRect().width > 0 && !r.classList.contains(Ys) && !i, s = !1;
        if (a) {
          var u = getComputedStyle(r);
          s = u.display === "none" || u.visibility === "hidden";
        }
        return a && !s;
      });
    }, n.prototype.createSentinel = function() {
      var e = document.createElement("div");
      return e.setAttribute("tabindex", "0"), e.setAttribute("aria-hidden", "true"), e.classList.add(Ys), e;
    }, n;
  }()
);
const Pf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FocusTrap: Mf
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
}, en = /* @__PURE__ */ new Set();
en.add(De.BACKSPACE);
en.add(De.ENTER);
en.add(De.SPACEBAR);
en.add(De.PAGE_UP);
en.add(De.PAGE_DOWN);
en.add(De.END);
en.add(De.HOME);
en.add(De.ARROW_LEFT);
en.add(De.ARROW_UP);
en.add(De.ARROW_RIGHT);
en.add(De.ARROW_DOWN);
en.add(De.DELETE);
en.add(De.ESCAPE);
en.add(De.TAB);
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
}, tn = /* @__PURE__ */ new Map();
tn.set(dn.BACKSPACE, De.BACKSPACE);
tn.set(dn.ENTER, De.ENTER);
tn.set(dn.SPACEBAR, De.SPACEBAR);
tn.set(dn.PAGE_UP, De.PAGE_UP);
tn.set(dn.PAGE_DOWN, De.PAGE_DOWN);
tn.set(dn.END, De.END);
tn.set(dn.HOME, De.HOME);
tn.set(dn.ARROW_LEFT, De.ARROW_LEFT);
tn.set(dn.ARROW_UP, De.ARROW_UP);
tn.set(dn.ARROW_RIGHT, De.ARROW_RIGHT);
tn.set(dn.ARROW_DOWN, De.ARROW_DOWN);
tn.set(dn.DELETE, De.DELETE);
tn.set(dn.ESCAPE, De.ESCAPE);
tn.set(dn.TAB, De.TAB);
var zr = /* @__PURE__ */ new Set();
zr.add(De.PAGE_UP);
zr.add(De.PAGE_DOWN);
zr.add(De.END);
zr.add(De.HOME);
zr.add(De.ARROW_LEFT);
zr.add(De.ARROW_UP);
zr.add(De.ARROW_RIGHT);
zr.add(De.ARROW_DOWN);
function pt(n) {
  var e = n.key;
  if (en.has(e))
    return e;
  var t = tn.get(n.keyCode);
  return t || De.UNKNOWN;
}
const { applyPassive: yl } = Gd, { matches: Ff } = Pa;
function Rn(n, { ripple: e = !0, surface: t = !1, unbounded: r = !1, disabled: i = !1, color: a, active: s, rippleElement: u, eventTarget: l, activeTarget: c, addClass: d = (g) => n.classList.add(g), removeClass: h = (g) => n.classList.remove(g), addStyle: f = (g, p) => n.style.setProperty(g, p), initPromise: v = Promise.resolve() } = {}) {
  let g, p = new na(), y = _e("SMUI:addLayoutListener"), _, x = s, E = l, I = c;
  function S() {
    t ? (d("mdc-ripple-surface"), a === "primary" ? (d("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")) : a === "secondary" ? (h("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : (h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary"))) : (h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), g && x !== s && (x = s, s ? g.activate() : s === !1 && g.deactivate()), e && !g ? (g = new Rf({
      addClass: d,
      browserSupportsCssVars: () => yf(window),
      computeBoundingRect: () => (u || n).getBoundingClientRect(),
      containsEventTarget: (A) => n.contains(A),
      deregisterDocumentInteractionHandler: (A, C) => p.off(document.documentElement, A, C),
      deregisterInteractionHandler: (A, C) => p.off(l || n, A, C),
      deregisterResizeHandler: (A) => window.removeEventListener("resize", A),
      getWindowPageOffset: () => {
        var A, C;
        return {
          x: (A = window.pageXOffset) !== null && A !== void 0 ? A : window.scrollX,
          y: (C = window.pageYOffset) !== null && C !== void 0 ? C : window.scrollY
        };
      },
      isSurfaceActive: () => s ?? Ff(c || n, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!r,
      registerDocumentInteractionHandler: (A, C) => {
        const T = yl();
        p.on(document.documentElement, A, C, typeof T == "boolean" ? { capture: T } : T);
      },
      registerInteractionHandler: (A, C) => {
        const T = yl();
        p.on(l || n, A, C, typeof T == "boolean" ? { capture: T } : T);
      },
      registerResizeHandler: (A) => p.on(window, "resize", A),
      removeClass: h,
      updateCssVariable: f
    }), v.then(() => {
      g && (g.init(), g.setUnbounded(r));
    })) : g && !e && v.then(() => {
      g && (g.destroy(), g = void 0, p.clear());
    }), g && (E !== l || I !== c) && (E = l, I = c, g.destroy(), requestAnimationFrame(() => {
      g && (g.init(), g.setUnbounded(r));
    })), !e && r && d("mdc-ripple-upgraded--unbounded");
  }
  S(), y && (_ = y(b));
  function b() {
    g && g.layout();
  }
  return {
    update(A) {
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
        removeClass: h,
        addStyle: f,
        initPromise: v
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (C) => n.classList.add(C), removeClass: (C) => n.classList.remove(C), addStyle: (C, T) => n.style.setProperty(C, T), initPromise: Promise.resolve() }, A)), S();
    },
    destroy() {
      g && (g.destroy(), g = void 0, p.clear(), h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), _ && _();
    }
  };
}
var kf = /* @__PURE__ */ ct("<svg><!></svg>");
function Ls(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "tag", 3, "div"), i = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
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
  let s;
  function u() {
    return s;
  }
  var l = { getElement: u }, c = ie(), d = j(c);
  {
    var h = (v) => {
      var g = kf();
      Be(g, () => ({ ...i }));
      var p = G(g);
      Ie(p, () => e.children ?? pe), xe(g, (y) => s = y, () => s), Oe(g, (y, _) => ne == null ? void 0 : ne(y, _), t), w(v, g);
    }, f = (v) => {
      var g = ie(), p = j(g);
      {
        var y = (x) => {
          var E = ie(), I = j(E);
          co(I, r, !1, (S, b) => {
            xe(S, (A) => s = A, () => s), Oe(S, (A, C) => ne == null ? void 0 : ne(A, C), t), Be(S, () => ({ ...i }));
          }), w(x, E);
        }, _ = (x) => {
          var E = ie(), I = j(E);
          co(I, r, !1, (S, b) => {
            xe(S, (T) => s = T, () => s), Oe(S, (T, O) => ne == null ? void 0 : ne(T, O), t), Be(S, () => ({ ...i }));
            var A = ie(), C = j(A);
            Ie(C, () => e.children ?? pe), w(b, A);
          }), w(x, E);
        };
        Q(
          p,
          (x) => {
            o(a) ? x(y) : x(_, !1);
          },
          !0
        );
      }
      w(v, g);
    };
    Q(d, (v) => {
      r() === "svg" ? v(h) : v(f, !1);
    });
  }
  return w(n, c), Ee(l);
}
function ja(n, e) {
  Ae(e, !0);
  const [t, r] = Ai(), i = Un(e.value);
  se(e.key, i), Se(() => {
    Jn(i, e.value);
  }), Bn(() => {
    i.set(void 0);
  });
  var a = ie(), s = j(a);
  Ie(s, () => e.children ?? pe), w(n, a), Ee(), r();
}
var Nf = /* @__PURE__ */ z('<div class="mdc-button__touch"></div>'), Hf = /* @__PURE__ */ z('<div class="mdc-button__ripple"></div> <!><!>', 1);
function Hr(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "ripple", 3, !0), s = m(e, "color", 3, "primary"), u = m(e, "variant", 3, "text"), l = m(e, "touch", 3, !1), c = m(e, "action", 3, "close"), d = m(e, "defaultAction", 3, !1), h = m(e, "secondary", 3, !1), f = m(e, "component", 3, Ls), v = m(e, "tag", 19, () => e.href == null ? "button" : "a"), g = /* @__PURE__ */ ze(e, [
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
  ]), p, y = Ce({}), _ = Ce({}), x = _e("SMUI:button:context");
  const E = /* @__PURE__ */ ae(() => x === "dialog:action" && c() != null ? { "data-mdc-dialog-action": c() } : { action: c() }), I = /* @__PURE__ */ ae(() => x === "dialog:action" && d() ? { "data-mdc-dialog-button-default": "" } : {}), S = /* @__PURE__ */ ae(() => x === "banner" ? {} : { secondary: h() });
  let b = e.disabled;
  Se(() => {
    if (b !== e.disabled) {
      if (p) {
        const U = V();
        "blur" in U && U.blur();
      }
      b = g.disabled;
    }
  }), se("SMUI:label:context", "button"), se("SMUI:icon:context", "button");
  function A(U) {
    y[U] || (y[U] = !0);
  }
  function C(U) {
    (!(U in y) || y[U]) && (y[U] = !1);
  }
  function T(U, H) {
    _[U] != H && (H === "" || H == null ? delete _[U] : _[U] = H);
  }
  function O() {
    x === "banner" && Ge(V(), h() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function V() {
    return p.getElement();
  }
  var D = { getElement: V }, P = ie(), ee = j(P);
  {
    let U = /* @__PURE__ */ ae(() => [
      [
        Rn,
        {
          ripple: a(),
          unbounded: !1,
          color: s(),
          disabled: !!e.disabled,
          addClass: A,
          removeClass: C,
          addStyle: T
        }
      ],
      ...t()
    ]), H = /* @__PURE__ */ ae(() => He({
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
      "mdc-banner__secondary-action": x === "banner" && h(),
      "mdc-banner__primary-action": x === "banner" && !h(),
      "mdc-tooltip__action": x === "tooltip:rich-actions",
      ...y,
      [r()]: !0
    })), F = /* @__PURE__ */ ae(() => Object.entries(_).map(([X, ue]) => `${X}: ${ue};`).concat([i()]).join(" "));
    Ma(ee, f, (X, ue) => {
      xe(
        ue(X, Ke(
          {
            get tag() {
              return v();
            },
            get use() {
              return o(U);
            },
            get class() {
              return o(H);
            },
            get style() {
              return o(F);
            }
          },
          () => o(E),
          () => o(I),
          () => o(S),
          {
            get href() {
              return e.href;
            }
          },
          () => g,
          {
            onclick: (M) => {
              var Y;
              O(), (Y = e.onclick) == null || Y.call(e, M);
            },
            children: (M, Y) => {
              var K = Hf(), ce = J(j(K), 2);
              Ie(ce, () => e.children ?? pe);
              var le = J(ce);
              {
                var te = (ge) => {
                  var Z = Nf();
                  w(ge, Z);
                };
                Q(le, (ge) => {
                  l() && ge(te);
                });
              }
              w(M, K);
            },
            $$slots: { default: !0 }
          }
        )),
        (M) => p = M,
        () => p
      );
    });
  }
  return w(n, P), Ee(D);
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
var Uf = {
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
var Bf = (
  /** @class */
  function(n) {
    mn(e, n);
    function e(t) {
      var r = n.call(this, Ze(Ze({}, e.defaultAdapter), t)) || this;
      return r.shakeAnimationEndHandler = function() {
        r.handleShakeAnimationEnd();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Uf;
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
  }(pn)
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
var Gf = (
  /** @class */
  function(n) {
    mn(e, n);
    function e(t) {
      var r = n.call(this, Ze(Ze({}, e.defaultAdapter), t)) || this;
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
    }, e.prototype.setRippleCenter = function(t) {
      this.adapter.setStyle("transform-origin", t + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(Jr.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(t) {
      var r = this.adapter.hasClass(Jr.LINE_RIPPLE_DEACTIVATING);
      t.propertyName === "opacity" && r && (this.adapter.removeClass(Jr.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(Jr.LINE_RIPPLE_DEACTIVATING));
    }, e;
  }(pn)
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
var Wf = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Cl = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, Vf = {
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
var Zf = (
  /** @class */
  function(n) {
    mn(e, n);
    function e(t) {
      return n.call(this, Ze(Ze({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Wf;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Vf;
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
    }), e.prototype.notch = function(t) {
      var r = e.cssClasses.OUTLINE_NOTCHED;
      t > 0 && (t += Cl.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(t), this.adapter.addClass(r);
    }, e.prototype.closeNotch = function() {
      var t = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(t), this.adapter.removeNotchWidthProperty();
    }, e;
  }(pn)
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
var Ks = {
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
}, zf = {
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
}, Al = {
  LABEL_SCALE: 0.75
}, jf = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], Xf = [
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
var El = ["mousedown", "touchstart"], Sl = ["click", "keydown"], qf = (
  /** @class */
  function(n) {
    mn(e, n);
    function e(t, r) {
      r === void 0 && (r = {});
      var i = n.call(this, Ze(Ze({}, e.defaultAdapter), t)) || this;
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
        return zf;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Ks;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Al;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var t = this.getNativeInput().type;
        return Xf.indexOf(t) >= 0;
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
        for (var s = kn(El), u = s.next(); !u.done; u = s.next()) {
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
        for (var c = kn(Sl), d = c.next(); !d.done; d = c.next()) {
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
      var t, r, i, a;
      this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var s = kn(El), u = s.next(); !u.done; u = s.next()) {
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
        for (var c = kn(Sl), d = c.next(); !d.done; d = c.next()) {
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
      var t = this.adapter.getNativeInput();
      t && t.disabled || (this.receivedUserInput = !0);
    }, e.prototype.handleValidationAttributeChange = function(t) {
      var r = this;
      t.some(function(i) {
        return jf.indexOf(i) > -1 ? (r.styleValidity(!0), r.adapter.setLabelRequired(r.getNativeInput().required), !0) : !1;
      }), t.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(t) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (t) {
          var r = this.adapter.getLabelWidth() * Al.LABEL_SCALE;
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
        a && s ? this.adapter.setInputAttr(Ks.ARIA_DESCRIBEDBY, s) : this.adapter.removeInputAttr(Ks.ARIA_DESCRIBEDBY);
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
  }(pn)
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
var xl = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, Yf = {
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
var wl = ["click", "keydown"], Kf = (
  /** @class */
  function(n) {
    mn(e, n);
    function e(t) {
      var r = n.call(this, Ze(Ze({}, e.defaultAdapter), t)) || this;
      return r.savedTabIndex = null, r.interactionHandler = function(i) {
        r.handleInteraction(i);
      }, r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return xl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Yf;
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
        for (var i = kn(wl), a = i.next(); !a.done; a = i.next()) {
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
        for (var i = kn(wl), a = i.next(); !a.done; a = i.next()) {
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
      this.savedTabIndex && (t ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", xl.ICON_ROLE)));
    }, e.prototype.setAriaLabel = function(t) {
      this.adapter.setAttr("aria-label", t);
    }, e.prototype.setContent = function(t) {
      this.adapter.setContent(t);
    }, e.prototype.handleInteraction = function(t) {
      var r = t.key === "Enter" || t.keyCode === 13;
      (t.type === "click" || r) && (t.preventDefault(), this.adapter.notifyIconAction());
    }, e;
  }(pn)
), Jf = /* @__PURE__ */ z("<span><!></span>"), Qf = /* @__PURE__ */ z("<label><!></label>");
function ls(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "floatAbove", 15, !1), s = m(e, "required", 15, !1), u = m(e, "wrapped", 3, !1), l = /* @__PURE__ */ ze(e, [
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
  ]), c, d = /* @__PURE__ */ oe(void 0), h = new na(), f = Ce({}), v = Ce({}), g = _e("SMUI:generic:input:props") ?? {}, p = a();
  Se(() => {
    o(d) && p !== a() && (p = a(), o(d).float(a()));
  });
  let y = s();
  Se(() => {
    o(d) && y !== s() && (y = s(), o(d).setRequired(s()));
  });
  const _ = _e("SMUI:floating-label:mount"), x = _e("SMUI:floating-label:unmount");
  it(() => {
    B(
      d,
      new Bf({
        addClass: E,
        removeClass: I,
        getWidth: () => {
          var Y, K;
          const X = V(), ue = X.cloneNode(!0);
          (Y = X.parentNode) == null || Y.appendChild(ue), ue.classList.add("smui-floating-label--remove-transition"), ue.classList.add("smui-floating-label--force-size"), ue.classList.remove("mdc-floating-label--float-above");
          const M = ue.scrollWidth;
          return (K = X.parentNode) == null || K.removeChild(ue), M;
        },
        registerInteractionHandler: (X, ue) => h.on(V(), X, ue),
        deregisterInteractionHandler: (X, ue) => h.off(V(), X, ue)
      }),
      !0
    );
    const F = {
      get element() {
        return V();
      },
      addStyle: S,
      removeStyle: b
    };
    return _ && _(F), o(d).init(), () => {
      var X;
      x && x(F), (X = o(d)) == null || X.destroy(), h.clear();
    };
  });
  function E(F) {
    f[F] || (f[F] = !0);
  }
  function I(F) {
    (!(F in f) || f[F]) && (f[F] = !1);
  }
  function S(F, X) {
    v[F] != X && (X === "" || X == null ? delete v[F] : v[F] = X);
  }
  function b(F) {
    F in v && delete v[F];
  }
  function A(F) {
    var X;
    (X = o(d)) == null || X.shake(F);
  }
  function C(F) {
    a(F);
  }
  function T(F) {
    s(F);
  }
  function O() {
    if (o(d) == null)
      throw new Error("Instance is undefined.");
    return o(d).getWidth();
  }
  function V() {
    return c;
  }
  var D = { shake: A, float: C, setRequired: T, getWidth: O, getElement: V }, P = ie(), ee = j(P);
  {
    var U = (F) => {
      var X = Jf();
      Be(X, (M, Y) => ({ class: M, style: Y, ...l }), [
        () => He({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": s(),
          ...f,
          [r()]: !0
        }),
        () => Object.entries(v).map(([M, Y]) => `${M}: ${Y};`).concat([i()]).join(" ")
      ]);
      var ue = G(X);
      Ie(ue, () => e.children ?? pe), xe(X, (M) => c = M, () => c), Oe(X, (M, Y) => ne == null ? void 0 : ne(M, Y), t), w(F, X);
    }, H = (F) => {
      var X = Qf();
      Be(
        X,
        (M, Y) => ({
          class: M,
          style: Y,
          for: e.for || (g ? g.id : void 0),
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
          () => Object.entries(v).map(([M, Y]) => `${M}: ${Y};`).concat([i()]).join(" ")
        ]
      );
      var ue = G(X);
      Ie(ue, () => e.children ?? pe), xe(X, (M) => c = M, () => c), Oe(X, (M, Y) => ne == null ? void 0 : ne(M, Y), t), w(F, X);
    };
    Q(ee, (F) => {
      u() ? F(U) : F(H, !1);
    });
  }
  return w(n, P), Ee(D);
}
var $f = /* @__PURE__ */ z("<div></div>");
function Vd(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "active", 3, !1), s = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "active"
  ]), u, l = /* @__PURE__ */ oe(void 0), c = new na(), d = Ce({}), h = Ce({});
  it(() => (B(
    l,
    new Gf({
      addClass: v,
      removeClass: g,
      hasClass: f,
      setStyle: p,
      registerEventHandler: (b, A) => c.on(E(), b, A),
      deregisterEventHandler: (b, A) => c.off(E(), b, A)
    }),
    !0
  ), o(l).init(), () => {
    var b;
    (b = o(l)) == null || b.destroy(), c.clear();
  }));
  function f(b) {
    return b in d ? d[b] : E().classList.contains(b);
  }
  function v(b) {
    d[b] || (d[b] = !0);
  }
  function g(b) {
    (!(b in d) || d[b]) && (d[b] = !1);
  }
  function p(b, A) {
    h[b] != A && (A === "" || A == null ? delete h[b] : h[b] = A);
  }
  function y() {
    var b;
    (b = o(l)) == null || b.activate();
  }
  function _() {
    var b;
    (b = o(l)) == null || b.deactivate();
  }
  function x(b) {
    var A;
    (A = o(l)) == null || A.setRippleCenter(b);
  }
  function E() {
    return u;
  }
  var I = { activate: y, deactivate: _, setRippleCenter: x, getElement: E }, S = $f();
  return Be(S, (b, A) => ({ class: b, style: A, ...s }), [
    () => He({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...d,
      [r()]: !0
    }),
    () => Object.entries(h).map(([b, A]) => `${b}: ${A};`).concat([i()]).join(" ")
  ]), xe(S, (b) => u = b, () => u), Oe(S, (b, A) => ne == null ? void 0 : ne(b, A), t), w(n, S), Ee(I);
}
var eh = /* @__PURE__ */ z('<div class="mdc-notched-outline__notch"><!></div>'), th = /* @__PURE__ */ z('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function Zd(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "notched", 3, !1), a = m(e, "noLabel", 3, !1), s = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "notched",
    "noLabel",
    "children"
  ]), u, l = /* @__PURE__ */ oe(void 0), c = /* @__PURE__ */ oe(void 0), d = Ce({}), h = Ce({}), f;
  Se(() => {
    o(c) !== f && (o(c) ? (o(c).addStyle("transition-duration", "0s"), v("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      o(c) && o(c).removeStyle("transition-duration");
    })) : g("mdc-notched-outline--upgraded"), f = o(c));
  }), se("SMUI:floating-label:mount", (C) => {
    B(c, C, !0);
  }), se("SMUI:floating-label:unmount", () => {
    B(c, void 0);
  }), it(() => (B(
    l,
    new Zf({
      addClass: v,
      removeClass: g,
      setNotchWidthProperty: (C) => p("width", C + "px"),
      removeNotchWidthProperty: () => y("width")
    }),
    !0
  ), o(l).init(), () => {
    var C;
    (C = o(l)) == null || C.destroy();
  }));
  function v(C) {
    d[C] || (d[C] = !0);
  }
  function g(C) {
    (!(C in d) || d[C]) && (d[C] = !1);
  }
  function p(C, T) {
    h[C] != T && (T === "" || T == null ? delete h[C] : h[C] = T);
  }
  function y(C) {
    C in h && delete h[C];
  }
  function _(C) {
    var T;
    (T = o(l)) == null || T.notch(C);
  }
  function x() {
    var C;
    (C = o(l)) == null || C.closeNotch();
  }
  function E() {
    return u;
  }
  var I = { notch: _, closeNotch: x, getElement: E }, S = th();
  Be(S, (C) => ({ class: C, ...s }), [
    () => He({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": i(),
      "mdc-notched-outline--no-label": a(),
      ...d,
      [r()]: !0
    })
  ]);
  var b = J(G(S), 2);
  {
    var A = (C) => {
      var T = eh(), O = G(T);
      Ie(O, () => e.children ?? pe), de((V) => et(T, V), [
        () => Object.entries(h).map(([V, D]) => `${V}: ${D};`).join(" ")
      ]), w(C, T);
    };
    Q(b, (C) => {
      a() || C(A);
    });
  }
  return xe(S, (C) => u = C, () => u), Oe(S, (C, T) => ne == null ? void 0 : ne(C, T), t), w(n, S), Ee(I);
}
function ra(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "component", 3, Ls), a = m(e, "tag", 3, "div"), s = m(e, "_smuiClass", 3, ""), u = m(e, "_smuiClassMap", 23, () => ({})), l = m(e, "_smuiContexts", 19, () => ({})), c = m(e, "_smuiProps", 19, () => ({})), d = /* @__PURE__ */ ze(e, [
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
  Object.entries(u()).forEach(([_, x]) => {
    const E = _e(x);
    E && "subscribe" in E && f.push(E.subscribe((I) => {
      u()[_] = I;
    }));
  });
  for (let _ in l())
    l().hasOwnProperty(_) && se(_, l()[_]);
  Bn(() => {
    for (const _ of f)
      _();
  });
  function v() {
    return h.getElement();
  }
  var g = { getElement: v }, p = ie(), y = j(p);
  {
    let _ = /* @__PURE__ */ ae(() => He({
      [s()]: !0,
      ...u(),
      [r()]: !0
    }));
    Ma(y, i, (x, E) => {
      xe(
        E(x, Ke(
          {
            get tag() {
              return a();
            },
            get use() {
              return t();
            },
            get class() {
              return o(_);
            }
          },
          c,
          () => d,
          {
            children: (I, S) => {
              var b = ie(), A = j(b);
              Ie(A, () => e.children ?? pe), w(I, b);
            },
            $$slots: { default: !0 }
          }
        )),
        (I) => h = I,
        () => h
      );
    });
  }
  return w(n, p), Ee(g);
}
function nh(n, e) {
  Ae(e, !0);
  let t = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return xe(
    ra(n, Ke({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => t, {
      children: (s, u) => {
        var l = ie(), c = j(l);
        Ie(c, () => e.children ?? pe), w(s, l);
      },
      $$slots: { default: !0 }
    })),
    (s) => r = s,
    () => r
  ), Ee(a);
}
function rh(n, e) {
  Ae(e, !0);
  let t = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return xe(
    ra(n, Ke(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => t,
      {
        children: (s, u) => {
          var l = ie(), c = j(l);
          Ie(c, () => e.children ?? pe), w(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Ee(a);
}
function ih(n, e) {
  Ae(e, !0);
  let t = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return xe(
    ra(n, Ke(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => t,
      {
        children: (s, u) => {
          var l = ie(), c = j(l);
          Ie(c, () => e.children ?? pe), w(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Ee(a);
}
var ah = /* @__PURE__ */ z("<input/>");
function sh(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "type", 3, "text"), a = m(e, "placeholder", 3, " "), s = m(e, "value", 15), u = m(e, "files", 15, null), l = m(e, "dirty", 15, !1), c = m(e, "invalid", 15, !1), d = m(e, "updateInvalid", 3, !0), h = m(e, "initialInvalid", 3, !1), f = m(e, "emptyValueNull", 19, () => s() === null), v = m(e, "emptyValueUndefined", 19, () => s() === void 0), g = /* @__PURE__ */ ze(e, [
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
  ]), p, y = Ce({}), _ = Ce({});
  Se(() => {
    i() === "file" ? delete _.value : _.value = s() == null ? "" : s();
  }), it(() => {
    d() && h() && c(O().matches(":invalid"));
  });
  function x(U) {
    return U === "" ? Number.NaN : +U;
  }
  function E(U) {
    if (i() === "file") {
      u(U.currentTarget.files);
      return;
    }
    if (U.currentTarget.value === "" && f()) {
      s(null);
      return;
    }
    if (U.currentTarget.value === "" && v()) {
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
  function I(U) {
    (i() === "file" || i() === "range") && E(U), l(!0), d() && c(O().matches(":invalid"));
  }
  function S(U) {
    return U in y ? y[U] ?? null : O().getAttribute(U);
  }
  function b(U, H) {
    y[U] !== H && (y[U] = H);
  }
  function A(U) {
    (!(U in y) || y[U] != null) && (y[U] = void 0);
  }
  function C() {
    O().focus();
  }
  function T() {
    O().blur();
  }
  function O() {
    return p;
  }
  var V = { getAttr: S, addAttr: b, removeAttr: A, focus: C, blur: T, getElement: O }, D = ah(), P = (U) => {
    var H;
    i() !== "file" && E(U), (H = e.oninput) == null || H.call(e, U);
  }, ee = (U) => {
    var H;
    I(U), (H = e.onchange) == null || H.call(e, U);
  };
  return Be(
    D,
    (U) => ({
      class: U,
      type: i(),
      placeholder: a(),
      ..._,
      ...y,
      ...g,
      oninput: P,
      onchange: ee
    }),
    [
      () => He({ "mdc-text-field__input": !0, [r()]: !0 })
    ],
    void 0,
    void 0,
    !0
  ), xe(D, (U) => p = U, () => p), Oe(D, (U, H) => ne == null ? void 0 : ne(U, H), t), w(n, D), Ee(V);
}
var oh = /* @__PURE__ */ z("<textarea></textarea>");
function lh(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "value", 15, ""), s = m(e, "dirty", 15, !1), u = m(e, "invalid", 15, !1), l = m(e, "updateInvalid", 3, !0), c = m(e, "initialInvalid", 3, !1), d = m(e, "resizable", 3, !0), h = /* @__PURE__ */ ze(e, [
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
  ]), f, v = Ce({});
  it(() => {
    l() && c() && u(I().matches(":invalid"));
  });
  function g() {
    s(!0), l() && u(I().matches(":invalid"));
  }
  function p(C) {
    return C in v ? v[C] ?? null : I().getAttribute(C);
  }
  function y(C, T) {
    v[C] !== T && (v[C] = T);
  }
  function _(C) {
    (!(C in v) || v[C] != null) && (v[C] = void 0);
  }
  function x() {
    I().focus();
  }
  function E() {
    I().blur();
  }
  function I() {
    return f;
  }
  var S = { getAttr: p, addAttr: y, removeAttr: _, focus: x, blur: E, getElement: I }, b = oh(), A = (C) => {
    var T;
    g(), (T = e.onchange) == null || T.call(e, C);
  };
  return Be(
    b,
    (C) => ({
      class: C,
      style: `${d() ? "" : "resize: none; "}${i()}`,
      ...v,
      ...h,
      onchange: A
    }),
    [
      () => He({ "mdc-text-field__input": !0, [r()]: !0 })
    ]
  ), xe(b, (C) => f = C, () => f), Oe(b, (C, T) => ne == null ? void 0 : ne(C, T), t), Ra(() => gf(b, a)), w(n, b), Ee(S);
}
var dh = /* @__PURE__ */ z('<span class="mdc-text-field__ripple"></span>'), uh = /* @__PURE__ */ z("<!> <!>", 1), ch = /* @__PURE__ */ z("<span><!> <!></span>"), fh = /* @__PURE__ */ z("<!> <!> <!>", 1), hh = /* @__PURE__ */ z("<label><!> <!> <!> <!> <!> <!> <!></label>"), vh = /* @__PURE__ */ z("<div><!> <!> <!> <!> <!></div>"), gh = /* @__PURE__ */ z("<!> <!>", 1);
function ds(n, e) {
  Ae(e, !0);
  const { applyPassive: t } = Gd;
  let r = () => {
  };
  function i(k) {
    return k === r;
  }
  let a = m(e, "use", 19, () => []), s = m(e, "class", 3, ""), u = m(e, "style", 3, ""), l = m(e, "ripple", 3, !0), c = m(e, "disabled", 3, !1), d = m(e, "required", 3, !1), h = m(e, "textarea", 3, !1), f = m(e, "variant", 19, () => h() ? "outlined" : "standard"), v = m(e, "noLabel", 3, !1), g = m(e, "type", 3, "text"), p = m(e, "value", 15), y = m(e, "files", 15, r), _ = m(e, "invalid", 15, r), x = m(e, "updateInvalid", 19, () => i(_())), E = m(e, "initialInvalid", 3, !1), I = m(e, "dirty", 15, !1), S = m(e, "validateOnValueChange", 19, x), b = m(e, "useNativeValidation", 19, x), A = m(e, "withLeadingIcon", 3, r), C = m(e, "withTrailingIcon", 3, r), T = m(e, "input", 7), O = m(e, "floatingLabel", 7), V = m(e, "lineRipple", 7), D = m(e, "notchedOutline", 7), P = /* @__PURE__ */ ze(e, [
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
  const ee = p() !== void 0 || p() === void 0 && e.input$emptyValueUndefined || !i(y());
  i(y()) && y(null), i(_()) && _(!1);
  let U, H = /* @__PURE__ */ oe(void 0), F = new na(), X = Ce({}), ue = Ce({}), M = /* @__PURE__ */ oe(void 0), Y = /* @__PURE__ */ oe(!1), K = /* @__PURE__ */ oe(Ce(E())), ce = _e("SMUI:addLayoutListener"), le, te, ge = new Promise((k) => te = k), Z, fe, $, be;
  const ye = /* @__PURE__ */ ae(() => T() && T().getElement());
  Se(() => {
    (I() || o(K) || !x()) && o(H) && o(H).isValid() !== !_() && (x() ? _(!o(H).isValid()) : o(H).setValid(!_()));
  }), Se(() => {
    o(H) && o(H).getValidateOnValueChange() !== S() && o(H).setValidateOnValueChange(i(S()) ? !1 : S());
  }), Se(() => {
    o(H) && o(H).setUseNativeValidation(i(b()) ? !0 : b());
  }), Se(() => {
    o(H) && o(H).setDisabled(c());
  });
  let Ue = p();
  Se(() => {
    if (o(H) && ee && Ue !== p()) {
      Ue = p();
      const k = `${p() == null ? "" : p()}`;
      o(H).getValue() !== k && o(H).setValue(k);
    }
  }), ce && (le = ce(R)), se("SMUI:textfield:leading-icon:mount", (k) => {
    Z = k;
  }), se("SMUI:textfield:leading-icon:unmount", () => {
    Z = void 0;
  }), se("SMUI:textfield:trailing-icon:mount", (k) => {
    fe = k;
  }), se("SMUI:textfield:trailing-icon:unmount", () => {
    fe = void 0;
  }), se("SMUI:textfield:helper-text:id", (k) => {
    B(M, k, !0);
  }), se("SMUI:textfield:helper-text:mount", (k) => {
    $ = k;
  }), se("SMUI:textfield:helper-text:unmount", () => {
    B(M, void 0), $ = void 0;
  }), se("SMUI:textfield:character-counter:mount", (k) => {
    be = k;
  }), se("SMUI:textfield:character-counter:unmount", () => {
    be = void 0;
  }), it(() => {
    var k;
    if (B(
      H,
      new qf(
        {
          // getRootAdapterMethods_
          addClass: Ye,
          removeClass: Le,
          hasClass: tt,
          registerTextFieldInteractionHandler: (q, Te) => F.on(W(), q, Te),
          deregisterTextFieldInteractionHandler: (q, Te) => F.off(W(), q, Te),
          registerValidationAttributeChangeHandler: (q) => {
            const Te = (Nt) => Nt.map((nn) => nn.attributeName).filter((nn) => nn), st = new MutationObserver((Nt) => {
              b() && q(Te(Nt));
            }), gt = { attributes: !0 };
            return T() && st.observe(T().getElement(), gt), st;
          },
          deregisterValidationAttributeChangeHandler: (q) => {
            q.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var q;
            return ((q = T()) == null ? void 0 : q.getElement()) ?? null;
          },
          setInputAttr: (q, Te) => {
            var st;
            (st = T()) == null || st.addAttr(q, Te);
          },
          removeInputAttr: (q) => {
            var Te;
            (Te = T()) == null || Te.removeAttr(q);
          },
          isFocused: () => {
            var q;
            return document.activeElement === ((q = T()) == null ? void 0 : q.getElement());
          },
          registerInputInteractionHandler: (q, Te) => {
            var gt;
            const st = (gt = T()) == null ? void 0 : gt.getElement();
            if (st) {
              const Nt = t();
              F.on(st, q, Te, typeof Nt == "boolean" ? { capture: Nt } : Nt);
            }
          },
          deregisterInputInteractionHandler: (q, Te) => {
            var gt;
            const st = (gt = T()) == null ? void 0 : gt.getElement();
            st && F.off(st, q, Te);
          },
          // getLabelAdapterMethods_
          floatLabel: (q) => O() && O().float(q),
          getLabelWidth: () => O() ? O().getWidth() : 0,
          hasLabel: () => !!O(),
          shakeLabel: (q) => O() && O().shake(q),
          setLabelRequired: (q) => O() && O().setRequired(q),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => V() && V().activate(),
          deactivateLineRipple: () => V() && V().deactivate(),
          setLineRippleTransformOrigin: (q) => V() && V().setRippleCenter(q),
          // getOutlineAdapterMethods_
          closeOutline: () => D() && D().closeNotch(),
          hasOutline: () => !!D(),
          notchOutline: (q) => D() && D().notch(q)
        },
        {
          get helperText() {
            return $;
          },
          get characterCounter() {
            return be;
          },
          get leadingIcon() {
            return Z;
          },
          get trailingIcon() {
            return fe;
          }
        }
      ),
      !0
    ), ee) {
      if (T() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (k = o(H)) == null || k.init();
    } else
      wd().then(() => {
        var q;
        if (T() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (q = o(H)) == null || q.init();
      });
    return te(), () => {
      var q;
      (q = o(H)) == null || q.destroy(), F.clear();
    };
  }), Bn(() => {
    le && le();
  });
  function tt(k) {
    return k in X ? X[k] ?? null : W().classList.contains(k);
  }
  function Ye(k) {
    X[k] || (X[k] = !0);
  }
  function Le(k) {
    (!(k in X) || X[k]) && (X[k] = !1);
  }
  function at(k, q) {
    ue[k] != q && (q === "" || q == null ? delete ue[k] : ue[k] = q);
  }
  function Pt() {
    var k;
    (k = T()) == null || k.focus();
  }
  function Ft() {
    var k;
    (k = T()) == null || k.blur();
  }
  function R() {
    if (o(H)) {
      const k = o(H).shouldFloat;
      o(H).notchOutline(k);
    }
  }
  function W() {
    return U;
  }
  var he = { focus: Pt, blur: Ft, layout: R, getElement: W }, Me = gh(), kt = j(Me);
  {
    var un = (k) => {
      var q = hh();
      Be(q, (Ne, Je, je) => ({ class: Ne, style: Je, for: void 0, ...je }), [
        () => He({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": c(),
          "mdc-text-field--textarea": h(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !h(),
          "mdc-text-field--no-label": v() || e.label == null,
          "mdc-text-field--label-floating": o(Y) || p() != null && p() !== "",
          "mdc-text-field--with-leading-icon": i(A()) ? e.leadingIcon : A(),
          "mdc-text-field--with-trailing-icon": i(C()) ? e.trailingIcon : C(),
          "mdc-text-field--with-internal-counter": h() && e.internalCounter,
          "mdc-text-field--invalid": _(),
          ...X,
          [s()]: !0
        }),
        () => Object.entries(ue).map(([Ne, Je]) => `${Ne}: ${Je};`).concat([u()]).join(" "),
        () => Ca(P, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Te = G(q);
      {
        var st = (Ne) => {
          var Je = uh(), je = j(Je);
          {
            var Ut = (bt) => {
              var Dt = dh();
              w(bt, Dt);
            };
            Q(je, (bt) => {
              f() === "filled" && bt(Ut);
            });
          }
          var Ln = J(je, 2);
          {
            var Qe = (bt) => {
              {
                let Dt = /* @__PURE__ */ ae(() => o(Y) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), Ve = /* @__PURE__ */ ae(() => lt(P, "label$"));
                xe(
                  ls(bt, Ke(
                    {
                      get floatAbove() {
                        return o(Dt);
                      },
                      get required() {
                        return d();
                      },
                      wrapped: !0
                    },
                    () => o(Ve),
                    {
                      children: (Lt, rr) => {
                        var In = ie(), _t = j(In);
                        {
                          var Bt = (Xt) => {
                          }, bn = (Xt) => {
                            var jr = ie(), _n = j(jr);
                            {
                              var yr = (yn) => {
                                var ir = dt();
                                de(() => Pe(ir, e.label)), w(yn, ir);
                              }, ia = (yn) => {
                                var ir = ie(), Gn = j(ir);
                                Ie(Gn, () => e.label), w(yn, ir);
                              };
                              Q(
                                _n,
                                (yn) => {
                                  typeof e.label == "string" ? yn(yr) : yn(ia, !1);
                                },
                                !0
                              );
                            }
                            w(Xt, jr);
                          };
                          Q(_t, (Xt) => {
                            e.label == null ? Xt(Bt) : Xt(bn, !1);
                          });
                        }
                        w(Lt, In);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (Lt) => O(Lt),
                  () => O()
                );
              }
            };
            Q(Ln, (bt) => {
              !v() && e.label != null && bt(Qe);
            });
          }
          w(Ne, Je);
        };
        Q(Te, (Ne) => {
          !h() && f() !== "outlined" && Ne(st);
        });
      }
      var gt = J(Te, 2);
      {
        var Nt = (Ne) => {
          {
            let Je = /* @__PURE__ */ ae(() => v() || e.label == null), je = /* @__PURE__ */ ae(() => lt(P, "outline$"));
            xe(
              Zd(Ne, Ke(
                {
                  get noLabel() {
                    return o(Je);
                  }
                },
                () => o(je),
                {
                  children: (Ut, Ln) => {
                    var Qe = ie(), bt = j(Qe);
                    {
                      var Dt = (Ve) => {
                        {
                          let Lt = /* @__PURE__ */ ae(() => o(Y) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), rr = /* @__PURE__ */ ae(() => lt(P, "label$"));
                          xe(
                            ls(Ve, Ke(
                              {
                                get floatAbove() {
                                  return o(Lt);
                                },
                                get required() {
                                  return d();
                                },
                                wrapped: !0
                              },
                              () => o(rr),
                              {
                                children: (In, _t) => {
                                  var Bt = ie(), bn = j(Bt);
                                  {
                                    var Xt = (_n) => {
                                    }, jr = (_n) => {
                                      var yr = ie(), ia = j(yr);
                                      {
                                        var yn = (Gn) => {
                                          var Xr = dt();
                                          de(() => Pe(Xr, e.label)), w(Gn, Xr);
                                        }, ir = (Gn) => {
                                          var Xr = ie(), Bs = j(Xr);
                                          Ie(Bs, () => e.label), w(Gn, Xr);
                                        };
                                        Q(
                                          ia,
                                          (Gn) => {
                                            typeof e.label == "string" ? Gn(yn) : Gn(ir, !1);
                                          },
                                          !0
                                        );
                                      }
                                      w(_n, yr);
                                    };
                                    Q(bn, (_n) => {
                                      e.label == null ? _n(Xt) : _n(jr, !1);
                                    });
                                  }
                                  w(In, Bt);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (In) => O(In),
                            () => O()
                          );
                        }
                      };
                      Q(bt, (Ve) => {
                        !v() && e.label != null && Ve(Dt);
                      });
                    }
                    w(Ut, Qe);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (Ut) => D(Ut),
              () => D()
            );
          }
        };
        Q(gt, (Ne) => {
          (h() || f() === "outlined") && Ne(Nt);
        });
      }
      var nn = J(gt, 2);
      ja(nn, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (Ne, Je) => {
          var je = ie(), Ut = j(je);
          Ie(Ut, () => e.leadingIcon ?? pe), w(Ne, je);
        },
        $$slots: { default: !0 }
      });
      var Ei = J(nn, 2);
      Ie(Ei, () => e.children ?? pe);
      var ut = J(Ei, 2);
      {
        var Ht = (Ne) => {
          var Je = ch(), je = G(Je);
          {
            let Ln = /* @__PURE__ */ ae(() => lt(P, "input$"));
            xe(
              lh(je, Ke(
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
                    return o(K);
                  },
                  get "aria-controls"() {
                    return o(M);
                  },
                  get "aria-describedby"() {
                    return o(M);
                  }
                },
                () => o(Ln),
                {
                  onblur: (Qe) => {
                    var bt;
                    B(Y, !1), B(K, !0), Ge(W(), "blur", Qe), (bt = e.input$onblur) == null || bt.call(e, Qe);
                  },
                  onfocus: (Qe) => {
                    var bt;
                    B(Y, !0), Ge(W(), "focus", Qe), (bt = e.input$onfocus) == null || bt.call(e, Qe);
                  },
                  get value() {
                    return p();
                  },
                  set value(Qe) {
                    p(Qe);
                  },
                  get dirty() {
                    return I();
                  },
                  set dirty(Qe) {
                    I(Qe);
                  },
                  get invalid() {
                    return _();
                  },
                  set invalid(Qe) {
                    _(Qe);
                  }
                }
              )),
              (Qe) => T(Qe),
              () => T()
            );
          }
          var Ut = J(je, 2);
          Ie(Ut, () => e.internalCounter ?? pe), de((Ln) => pr(Je, 1, Ln), [
            () => Pd(He({
              "mdc-text-field__resizer": !("input$resizable" in P) || e.input$resizable
            }))
          ]), w(Ne, Je);
        }, rn = (Ne) => {
          var Je = fh(), je = j(Je);
          {
            var Ut = (Dt) => {
              var Ve = ie(), Lt = j(Ve);
              {
                var rr = (_t) => {
                  rh(_t, {
                    children: (Bt, bn) => {
                      var Xt = dt();
                      de(() => Pe(Xt, e.prefix)), w(Bt, Xt);
                    },
                    $$slots: { default: !0 }
                  });
                }, In = (_t) => {
                  var Bt = ie(), bn = j(Bt);
                  Ie(bn, () => e.prefix ?? pe), w(_t, Bt);
                };
                Q(Lt, (_t) => {
                  typeof e.prefix == "string" ? _t(rr) : _t(In, !1);
                });
              }
              w(Dt, Ve);
            };
            Q(je, (Dt) => {
              e.prefix != null && Dt(Ut);
            });
          }
          var Ln = J(je, 2);
          {
            let Dt = /* @__PURE__ */ ae(() => lt(P, "input$"));
            xe(
              sh(Ln, Ke(
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
                    return o(K);
                  },
                  get "aria-controls"() {
                    return o(M);
                  },
                  get "aria-describedby"() {
                    return o(M);
                  }
                },
                () => v() && e.label != null && typeof e.label == "string" ? { placeholder: e.label } : {},
                () => o(Dt),
                {
                  onblur: (Ve) => {
                    var Lt;
                    B(Y, !1), B(K, !0), Ge(W(), "blur", Ve), (Lt = e.input$onblur) == null || Lt.call(e, Ve);
                  },
                  onfocus: (Ve) => {
                    var Lt;
                    B(Y, !0), Ge(W(), "focus", Ve), (Lt = e.input$onfocus) == null || Lt.call(e, Ve);
                  },
                  get value() {
                    return p();
                  },
                  set value(Ve) {
                    p(Ve);
                  },
                  get files() {
                    return y();
                  },
                  set files(Ve) {
                    y(Ve);
                  },
                  get dirty() {
                    return I();
                  },
                  set dirty(Ve) {
                    I(Ve);
                  },
                  get invalid() {
                    return _();
                  },
                  set invalid(Ve) {
                    _(Ve);
                  }
                }
              )),
              (Ve) => T(Ve),
              () => T()
            );
          }
          var Qe = J(Ln, 2);
          {
            var bt = (Dt) => {
              var Ve = ie(), Lt = j(Ve);
              {
                var rr = (_t) => {
                  ih(_t, {
                    children: (Bt, bn) => {
                      var Xt = dt();
                      de(() => Pe(Xt, e.suffix)), w(Bt, Xt);
                    },
                    $$slots: { default: !0 }
                  });
                }, In = (_t) => {
                  var Bt = ie(), bn = j(Bt);
                  Ie(bn, () => e.suffix ?? pe), w(_t, Bt);
                };
                Q(Lt, (_t) => {
                  typeof e.suffix == "string" ? _t(rr) : _t(In, !1);
                });
              }
              w(Dt, Ve);
            };
            Q(Qe, (Dt) => {
              e.suffix != null && Dt(bt);
            });
          }
          w(Ne, Je);
        };
        Q(ut, (Ne) => {
          h() && typeof p() == "string" ? Ne(Ht) : Ne(rn, !1);
        });
      }
      var br = J(ut, 2);
      ja(br, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (Ne, Je) => {
          var je = ie(), Ut = j(je);
          Ie(Ut, () => e.trailingIcon ?? pe), w(Ne, je);
        },
        $$slots: { default: !0 }
      });
      var Ua = J(br, 2);
      {
        var _r = (Ne) => {
          {
            let Je = /* @__PURE__ */ ae(() => lt(P, "ripple$"));
            xe(Vd(Ne, Ke(() => o(Je))), (je) => V(je), () => V());
          }
        };
        Q(Ua, (Ne) => {
          !h() && f() !== "outlined" && l() && Ne(_r);
        });
      }
      xe(q, (Ne) => U = Ne, () => U), Oe(q, (Ne, Je) => Rn == null ? void 0 : Rn(Ne, Je), () => ({
        ripple: !h() && f() === "filled",
        unbounded: !1,
        addClass: Ye,
        removeClass: Le,
        addStyle: at,
        eventTarget: o(ye),
        activeTarget: o(ye),
        initPromise: ge
      })), Oe(q, (Ne, Je) => ne == null ? void 0 : ne(Ne, Je), a), w(k, q);
    }, nr = (k) => {
      var q = vh();
      Be(q, (ut, Ht, rn) => ({ class: ut, style: Ht, ...rn }), [
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
          "mdc-text-field--invalid": _(),
          ...X,
          [s()]: !0
        }),
        () => Object.entries(ue).map(([ut, Ht]) => `${ut}: ${Ht};`).concat([u()]).join(" "),
        () => Ca(P, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Te = G(q);
      {
        var st = (ut) => {
          var Ht = ie(), rn = j(Ht);
          Ie(rn, () => e.label ?? pe), w(ut, Ht);
        };
        Q(Te, (ut) => {
          typeof e.label != "string" && ut(st);
        });
      }
      var gt = J(Te, 2);
      ja(gt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (ut, Ht) => {
          var rn = ie(), br = j(rn);
          Ie(br, () => e.leadingIcon ?? pe), w(ut, rn);
        },
        $$slots: { default: !0 }
      });
      var Nt = J(gt, 2);
      Ie(Nt, () => e.children ?? pe);
      var nn = J(Nt, 2);
      ja(nn, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (ut, Ht) => {
          var rn = ie(), br = j(rn);
          Ie(br, () => e.trailingIcon ?? pe), w(ut, rn);
        },
        $$slots: { default: !0 }
      });
      var Ei = J(nn, 2);
      Ie(Ei, () => e.line ?? pe), xe(q, (ut) => U = ut, () => U), Oe(q, (ut, Ht) => Rn == null ? void 0 : Rn(ut, Ht), () => ({
        ripple: l(),
        unbounded: !1,
        addClass: Ye,
        removeClass: Le,
        addStyle: at
      })), Oe(q, (ut, Ht) => ne == null ? void 0 : ne(ut, Ht), a), w(k, q);
    };
    Q(kt, (k) => {
      ee ? k(un) : k(nr, !1);
    });
  }
  var me = J(kt, 2);
  {
    var N = (k) => {
      {
        let q = /* @__PURE__ */ ae(() => lt(P, "helperLine$"));
        nh(k, Ke(() => o(q), {
          children: (Te, st) => {
            var gt = ie(), Nt = j(gt);
            Ie(Nt, () => e.helper ?? pe), w(Te, gt);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    Q(me, (k) => {
      e.helper && k(N);
    });
  }
  return w(n, Me), Ee(he);
}
var mh = /* @__PURE__ */ z("<i><!></i>");
function ph(n, e) {
  Ae(e, !0);
  const t = () => pi(g, "$leadingStore", r), [r, i] = Ai();
  let a = m(e, "use", 19, () => []), s = m(e, "class", 3, ""), u = m(e, "tabindex", 19, () => e.role === "button" ? 0 : -1), l = m(e, "disabled", 3, !1), c = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "role",
    "tabindex",
    "disabled",
    "children"
  ]), d, h = /* @__PURE__ */ oe(void 0), f = new na(), v = Ce({});
  const g = _e("SMUI:textfield:icon:leading"), p = t();
  let y = /* @__PURE__ */ oe(void 0);
  const _ = /* @__PURE__ */ ae(() => ({ role: e.role, tabindex: u() })), x = _e("SMUI:textfield:leading-icon:mount"), E = _e("SMUI:textfield:leading-icon:unmount"), I = _e("SMUI:textfield:trailing-icon:mount"), S = _e("SMUI:textfield:trailing-icon:unmount");
  it(() => (B(
    h,
    new Kf({
      getAttr: b,
      setAttr: A,
      removeAttr: C,
      setContent: (H) => {
        B(y, H, !0);
      },
      registerInteractionHandler: (H, F) => f.on(T(), H, F),
      deregisterInteractionHandler: (H, F) => f.off(T(), H, F),
      notifyIconAction: () => Ge(T(), "SMUITextFieldIcon")
    }),
    !0
  ), p ? x && x(o(h)) : I && I(o(h)), o(h).init(), () => {
    var H;
    o(h) && (p ? E && E(o(h)) : S && S(o(h))), (H = o(h)) == null || H.destroy(), f.clear();
  }));
  function b(H) {
    return H in v ? v[H] ?? null : T().getAttribute(H);
  }
  function A(H, F) {
    v[H] !== F && (v[H] = F);
  }
  function C(H) {
    (!(H in v) || v[H] != null) && (v[H] = void 0);
  }
  function T() {
    return d;
  }
  var O = { getElement: T }, V = mh();
  Be(
    V,
    (H) => ({
      class: H,
      "aria-hidden": u() === -1 ? "true" : "false",
      "aria-disabled": e.role === "button" ? l() ? "true" : "false" : void 0,
      ...o(_),
      ...v,
      ...c
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
  var D = G(V);
  {
    var P = (H) => {
      var F = ie(), X = j(F);
      Ie(X, () => e.children ?? pe), w(H, F);
    }, ee = (H) => {
      var F = dt();
      de(() => Pe(F, o(y))), w(H, F);
    };
    Q(D, (H) => {
      o(y) == null ? H(P) : H(ee, !1);
    });
  }
  xe(V, (H) => d = H, () => d), Oe(V, (H, F) => ne == null ? void 0 : ne(H, F), a), w(n, V);
  var U = Ee(O);
  return i(), U;
}
function zd(n, e) {
  Ae(e, !0);
  let t = m(e, "placeholder", 3, ""), r = m(e, "label", 3, ""), i = m(e, "icon", 3, ""), a = m(e, "value", 15, ""), s = m(e, "variant", 3, "standard"), u = m(e, "styles", 3, ""), l = m(e, "required", 3, !1);
  var c = ie(), d = j(c);
  {
    var h = (v) => {
      {
        const g = (y) => {
          ph(y, {
            class: "material-icons",
            children: (_, x) => {
              var E = dt();
              de(() => Pe(E, i())), w(_, E);
            },
            $$slots: { default: !0 }
          });
        };
        let p = /* @__PURE__ */ ae(() => `width: 100%; ${u()}`);
        ds(v, {
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
          set value(y) {
            a(y);
          },
          leadingIcon: g,
          $$slots: { leadingIcon: !0 }
        });
      }
    }, f = (v) => {
      ds(v, {
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
    Q(d, (v) => {
      i() ? v(h) : v(f, !1);
    });
  }
  w(n, c), Ee();
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
var Ih = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, bh = {
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
}, ca = {
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
var Ar, or, ke = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
Ar = {}, Ar["" + ke.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", Ar["" + ke.LIST_ITEM_CLASS] = "mdc-list-item", Ar["" + ke.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", Ar["" + ke.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", Ar["" + ke.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", Ar["" + ke.ROOT] = "mdc-list";
var Li = (or = {}, or["" + ke.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", or["" + ke.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", or["" + ke.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", or["" + ke.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", or["" + ke.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", or["" + ke.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", or["" + ke.ROOT] = "mdc-deprecated-list", or), Er = {
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
    .` + Li[ke.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Li[ke.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + ke.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + ke.LIST_ITEM_CLASS + ` a,
    .` + ke.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + ke.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + Li[ke.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Li[ke.LIST_ITEM_CLASS] + ` a,
    .` + Li[ke.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + Li[ke.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, ft = {
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
var _h = ["input", "button", "textarea", "select"], Cn = function(n) {
  var e = n.target;
  if (e) {
    var t = ("" + e.tagName).toLowerCase();
    _h.indexOf(t) === -1 && n.preventDefault();
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
function yh() {
  var n = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return n;
}
function Ch(n, e) {
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
function go(n, e) {
  var t = n.nextChar, r = n.focusItemAtIndex, i = n.sortedIndexByFirstChar, a = n.focusedItemIndex, s = n.skipFocus, u = n.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    Xd(e);
  }, ft.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + t;
  var l;
  return e.typeaheadBuffer.length === 1 ? l = Ah(i, a, u, e) : l = Eh(i, u, e), l !== -1 && !s && r(l), l;
}
function Ah(n, e, t, r) {
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
function Eh(n, e, t) {
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
function jd(n) {
  return n.typeaheadBuffer.length > 0;
}
function Xd(n) {
  n.typeaheadBuffer = "";
}
function Tl(n, e) {
  var t = n.event, r = n.isTargetListItem, i = n.focusedItemIndex, a = n.focusItemAtIndex, s = n.sortedIndexByFirstChar, u = n.isItemAtIndexDisabled, l = pt(t) === "ArrowLeft", c = pt(t) === "ArrowUp", d = pt(t) === "ArrowRight", h = pt(t) === "ArrowDown", f = pt(t) === "Home", v = pt(t) === "End", g = pt(t) === "Enter", p = pt(t) === "Spacebar";
  if (t.altKey || t.ctrlKey || t.metaKey || l || c || d || h || f || v || g)
    return -1;
  var y = !p && t.key.length === 1;
  if (y) {
    Cn(t);
    var _ = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: t.key.toLowerCase(),
      sortedIndexByFirstChar: s,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return go(_, e);
  }
  if (!p)
    return -1;
  r && Cn(t);
  var x = r && jd(e);
  if (x) {
    var _ = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: " ",
      sortedIndexByFirstChar: s,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return go(_, e);
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
function Sh(n) {
  return n instanceof Array;
}
var xh = ["Alt", "Control", "Meta", "Shift"];
function Dl(n) {
  var e = new Set(n ? xh.filter(function(t) {
    return n.getModifierState(t);
  }) : []);
  return function(t) {
    return t.every(function(r) {
      return e.has(r);
    }) && t.length === e.size;
  };
}
var wh = (
  /** @class */
  function(n) {
    mn(e, n);
    function e(t) {
      var r = n.call(this, Ze(Ze({}, e.defaultAdapter), t)) || this;
      return r.wrapFocus = !1, r.isVertical = !0, r.isSingleSelectionList = !1, r.areDisabledItemsFocusable = !0, r.selectedIndex = ft.UNSET_INDEX, r.focusedItemIndex = ft.UNSET_INDEX, r.useActivatedClass = !1, r.useSelectedAttr = !1, r.ariaCurrentAttrValue = null, r.isCheckboxList = !1, r.isRadioList = !1, r.lastSelectedIndex = null, r.hasTypeahead = !1, r.typeaheadState = yh(), r.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Er;
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
        return ft;
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
      if (t !== ft.UNSET_INDEX) {
        var r = this.adapter.listItemAtIndexHasClass(t, ke.LIST_ITEM_ACTIVATED_CLASS);
        r && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = t;
      }
    }, e.prototype.getSelectedIndexFromDOM = function() {
      for (var t = ft.UNSET_INDEX, r = this.adapter.getListItemCount(), i = 0; i < r; i++) {
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
      return this.hasTypeahead && jd(this.typeaheadState);
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
      var a = this, s, u = pt(t) === "ArrowLeft", l = pt(t) === "ArrowUp", c = pt(t) === "ArrowRight", d = pt(t) === "ArrowDown", h = pt(t) === "Home", f = pt(t) === "End", v = pt(t) === "Enter", g = pt(t) === "Spacebar", p = this.isVertical && d || !this.isVertical && c, y = this.isVertical && l || !this.isVertical && u, _ = t.key === "A" || t.key === "a", x = Dl(t);
      if (this.adapter.isRootFocused()) {
        if ((y || f) && x([]))
          t.preventDefault(), this.focusLastElement();
        else if ((p || h) && x([]))
          t.preventDefault(), this.focusFirstElement();
        else if (y && x(["Shift"]) && this.isCheckboxList) {
          t.preventDefault();
          var E = this.focusLastElement();
          E !== -1 && this.setSelectedIndexOnAction(E, !1);
        } else if (p && x(["Shift"]) && this.isCheckboxList) {
          t.preventDefault();
          var E = this.focusFirstElement();
          E !== -1 && this.setSelectedIndexOnAction(E, !1);
        }
        if (this.hasTypeahead) {
          var I = {
            event: t,
            focusItemAtIndex: function(A) {
              a.focusItemAtIndex(A);
            },
            focusedItemIndex: -1,
            isTargetListItem: r,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(A) {
              return a.isIndexDisabled(A);
            }
          };
          Tl(I, this.typeaheadState);
        }
        return;
      }
      var S = this.adapter.getFocusedElementIndex();
      if (!(S === -1 && (S = i, S < 0))) {
        if (p && x([]))
          Cn(t), this.focusNextElement(S);
        else if (y && x([]))
          Cn(t), this.focusPrevElement(S);
        else if (p && x(["Shift"]) && this.isCheckboxList) {
          Cn(t);
          var E = this.focusNextElement(S);
          E !== -1 && this.setSelectedIndexOnAction(E, !1);
        } else if (y && x(["Shift"]) && this.isCheckboxList) {
          Cn(t);
          var E = this.focusPrevElement(S);
          E !== -1 && this.setSelectedIndexOnAction(E, !1);
        } else if (h && x([]))
          Cn(t), this.focusFirstElement();
        else if (f && x([]))
          Cn(t), this.focusLastElement();
        else if (h && x(["Control", "Shift"]) && this.isCheckboxList) {
          if (Cn(t), this.isIndexDisabled(S))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, S, S);
        } else if (f && x(["Control", "Shift"]) && this.isCheckboxList) {
          if (Cn(t), this.isIndexDisabled(S))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(S, this.adapter.getListItemCount() - 1, S);
        } else if (_ && x(["Control"]) && this.isCheckboxList)
          t.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === ft.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((v || g) && x([])) {
          if (r) {
            var b = t.target;
            if (b && b.tagName === "A" && v || (Cn(t), this.isIndexDisabled(S)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(S, !1), this.adapter.notifyAction(S));
          }
        } else if ((v || g) && x(["Shift"]) && this.isCheckboxList) {
          var b = t.target;
          if (b && b.tagName === "A" && v || (Cn(t), this.isIndexDisabled(S)))
            return;
          this.isTypeaheadInProgress() || (this.toggleCheckboxRange((s = this.lastSelectedIndex) !== null && s !== void 0 ? s : S, S, S), this.adapter.notifyAction(S));
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
          Tl(I, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(t, r, i) {
      var a, s = Dl(i);
      t !== ft.UNSET_INDEX && (this.isIndexDisabled(t) || (s([]) ? (this.isSelectableList() && this.setSelectedIndexOnAction(t, r), this.adapter.notifyAction(t)) : this.isCheckboxList && s(["Shift"]) && (this.toggleCheckboxRange((a = this.lastSelectedIndex) !== null && a !== void 0 ? a : t, t, t), this.adapter.notifyAction(t))));
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
      this.isIndexValid(t, !1) && (r ? (this.adapter.removeClassForElementIndex(t, ke.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(t, Er.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(t, ke.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(t, Er.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(t, r) {
      if (r === void 0 && (r = {}), !(this.selectedIndex === t && !r.forceUpdate)) {
        var i = ke.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (i = ke.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== ft.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, i), this.setAriaForSingleSelectionAtIndex(t), this.setTabindexAtIndex(t), t !== ft.UNSET_INDEX && this.adapter.addClassForElementIndex(t, i), this.selectedIndex = t, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([t]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(t) {
      this.selectedIndex === ft.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(t, Er.ARIA_CURRENT));
      var r = this.ariaCurrentAttrValue !== null, i = r ? Er.ARIA_CURRENT : Er.ARIA_SELECTED;
      if (this.selectedIndex !== ft.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), t !== ft.UNSET_INDEX) {
        var a = r ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(t, i, a);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? Er.ARIA_SELECTED : Er.ARIA_CHECKED;
    }, e.prototype.setRadioAtIndex = function(t, r) {
      r === void 0 && (r = {});
      var i = this.getSelectionAttribute();
      this.adapter.setCheckedCheckboxOrRadioAtIndex(t, !0), !(this.selectedIndex === t && !r.forceUpdate) && (this.selectedIndex !== ft.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), this.adapter.setAttributeForElementIndex(t, i, "true"), this.selectedIndex = t, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([t]));
    }, e.prototype.setCheckboxAtIndex = function(t, r) {
      r === void 0 && (r = {});
      for (var i = this.selectedIndex, a = r.isUserInteraction ? new Set(i === ft.UNSET_INDEX ? [] : i) : null, s = this.getSelectionAttribute(), u = [], l = 0; l < this.adapter.getListItemCount(); l++) {
        var c = a == null ? void 0 : a.has(l), d = t.indexOf(l) >= 0;
        d !== c && u.push(l), this.adapter.setCheckedCheckboxOrRadioAtIndex(l, d), this.adapter.setAttributeForElementIndex(l, s, d ? "true" : "false");
      }
      this.selectedIndex = t, r.isUserInteraction && u.length && this.adapter.notifySelectionChange(u);
    }, e.prototype.toggleCheckboxRange = function(t, r, i) {
      this.lastSelectedIndex = i;
      for (var a = new Set(this.selectedIndex === ft.UNSET_INDEX ? [] : this.selectedIndex), s = !(a != null && a.has(i)), u = pl([t, r].sort(), 2), l = u[0], c = u[1], d = this.getSelectionAttribute(), h = [], f = l; f <= c; f++)
        if (!this.isIndexDisabled(f)) {
          var v = a.has(f);
          s !== v && (h.push(f), this.adapter.setCheckedCheckboxOrRadioAtIndex(f, s), this.adapter.setAttributeForElementIndex(f, d, "" + s), s ? a.add(f) : a.delete(f));
        }
      h.length && (this.selectedIndex = Sf([], pl(a)), this.adapter.notifySelectionChange(h));
    }, e.prototype.setTabindexAtIndex = function(t) {
      this.focusedItemIndex === ft.UNSET_INDEX && t !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== t && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== t && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), t !== ft.UNSET_INDEX && this.adapter.setAttributeForElementIndex(t, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var t = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(t);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== ft.UNSET_INDEX ? this.selectedIndex : Sh(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(t, r) {
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
        return this.isIndexInRange(t) || this.isSingleSelectionList && t === ft.UNSET_INDEX;
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
      var u = this.selectedIndex === ft.UNSET_INDEX ? [] : this.selectedIndex.slice();
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
      return go(s, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return Ch(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      Xd(this.typeaheadState);
    }, e;
  }(pn)
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
var qd = (
  /** @class */
  function(n) {
    mn(e, n);
    function e(t) {
      var r = n.call(this, Ze(Ze({}, e.defaultAdapter), t)) || this;
      return r.isSurfaceOpen = !1, r.isQuickOpen = !1, r.isHoistedElement = !1, r.isFixedPosition = !1, r.isHorizontallyCenteredOnViewport = !1, r.maxHeight = 0, r.openBottomBias = 0, r.openAnimationEndTimerId = 0, r.closeAnimationEndTimerId = 0, r.animationRequestId = 0, r.anchorCorner = hi.TOP_START, r.originCorner = hi.TOP_START, r.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, r.position = { x: 0, y: 0 }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ih;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return bh;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return ca;
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
        }, ca.TRANSITION_OPEN_DURATION);
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
          }, ca.TRANSITION_CLOSE_DURATION);
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
      var r = this.getoriginCorner(), i = this.getMenuSurfaceMaxHeight(r), a = this.hasBit(r, ht.BOTTOM) ? "bottom" : "top", s = this.hasBit(r, ht.RIGHT) ? "right" : "left", u = this.getHorizontalOriginOffset(r), l = this.getVerticalOriginOffset(r), c = this.measurements, d = c.anchorSize, h = c.surfaceSize, f = (t = {}, t[s] = u, t[a] = l, t);
      d.width / h.width > ca.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (s = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(f), this.adapter.setTransformOrigin(s + " " + a), this.adapter.setPosition(f), this.adapter.setMaxHeight(i ? i + "px" : ""), this.hasBit(r, ht.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
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
      var h = d - s.height > 0;
      !h && c > d + this.openBottomBias && (t = this.setBit(t, ht.BOTTOM));
      var f = this.adapter.isRtl(), v = this.hasBit(this.anchorCorner, ht.FLIP_RTL), g = this.hasBit(this.anchorCorner, ht.RIGHT) || this.hasBit(t, ht.RIGHT), p = !1;
      f && v ? p = !g : p = g;
      var y, _;
      p ? (y = i.left + a.width + this.anchorMargin.right, _ = i.right - this.anchorMargin.right) : (y = i.left + this.anchorMargin.left, _ = i.right + a.width - this.anchorMargin.left);
      var x = y - s.width > 0, E = _ - s.width > 0, I = this.hasBit(t, ht.FLIP_RTL) && this.hasBit(t, ht.RIGHT);
      return E && I && f || !x && I ? t = this.unsetBit(t, ht.RIGHT) : (x && p && f || x && !p && g || !E && y >= _) && (t = this.setBit(t, ht.RIGHT)), t;
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
        for (var h = kn(d), f = h.next(); !f.done; f = h.next()) {
          var v = f.value, g = t[v] || 0;
          if (this.isHorizontallyCenteredOnViewport && (v === "left" || v === "right")) {
            t[v] = (c.width - l.width) / 2;
            continue;
          }
          g += u[v], this.isFixedPosition || (v === "top" ? g += s.y : v === "bottom" ? g -= s.y : v === "left" ? g += s.x : g -= s.x), t[v] = g;
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
      }, ca.TOUCH_EVENT_WAIT_MS);
    }, e.prototype.hasBit = function(t, r) {
      return !!(t & r);
    }, e.prototype.setBit = function(t, r) {
      return t | r;
    }, e.prototype.unsetBit = function(t, r) {
      return t ^ r;
    }, e.prototype.isFinite = function(t) {
      return typeof t == "number" && isFinite(t);
    }, e;
  }(pn)
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
}, Th = {
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
var Dh = (
  /** @class */
  function(n) {
    mn(e, n);
    function e(t) {
      var r = n.call(this, Ze(Ze({}, e.defaultAdapter), t)) || this;
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
        return Th;
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
        }, qd.numbers.TRANSITION_CLOSE_DURATION);
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
  }(pn)
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
var ot = {
  ACTIVATED: "mdc-select--activated",
  DISABLED: "mdc-select--disabled",
  FOCUSED: "mdc-select--focused",
  INVALID: "mdc-select--invalid",
  MENU_INVALID: "mdc-select__menu--invalid",
  OUTLINED: "mdc-select--outlined",
  REQUIRED: "mdc-select--required",
  ROOT: "mdc-select",
  WITH_LEADING_ICON: "mdc-select--with-leading-icon"
}, Js = {
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
}, Qr = {
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
var Lh = (
  /** @class */
  function(n) {
    mn(e, n);
    function e(t, r) {
      r === void 0 && (r = {});
      var i = n.call(this, Ze(Ze({}, e.defaultAdapter), t)) || this;
      return i.disabled = !1, i.isMenuOpen = !1, i.useDefaultValidation = !0, i.customValidity = !0, i.lastSelectedIndex = Qr.UNSET_INDEX, i.clickDebounceTimeout = 0, i.recentlyClicked = !1, i.leadingIcon = r.leadingIcon, i.helperText = r.helperText, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ot;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Qr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Js;
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
      r === void 0 && (r = !1), i === void 0 && (i = !1), !(t >= this.adapter.getMenuItemCount()) && (t === Qr.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(t).trim()), this.adapter.setSelectedIndex(t), r && this.adapter.closeMenu(), !i && this.lastSelectedIndex !== t && this.handleChange(), this.lastSelectedIndex = t);
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
      return t !== Qr.UNSET_INDEX ? r[t] : "";
    }, e.prototype.getDisabled = function() {
      return this.disabled;
    }, e.prototype.setDisabled = function(t) {
      this.disabled = t, this.disabled ? (this.adapter.addClass(ot.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(ot.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
    }, e.prototype.openMenu = function() {
      this.adapter.addClass(ot.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true");
    }, e.prototype.setHelperTextContent = function(t) {
      this.helperText && this.helperText.setContent(t);
    }, e.prototype.layout = function() {
      if (this.adapter.hasLabel()) {
        var t = this.getValue().length > 0, r = this.adapter.hasClass(ot.FOCUSED), i = t || r, a = this.adapter.hasClass(ot.REQUIRED);
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
      this.adapter.removeClass(ot.ACTIVATED), this.isMenuOpen = !1, this.adapter.isSelectAnchorFocused() || this.blur();
    }, e.prototype.handleChange = function() {
      this.layout(), this.adapter.notifyChange(this.getValue());
      var t = this.adapter.hasClass(ot.REQUIRED);
      t && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.handleMenuItemAction = function(t) {
      this.setSelectedIndex(
        t,
        /** closeMenu */
        !0
      );
    }, e.prototype.handleFocus = function() {
      this.adapter.addClass(ot.FOCUSED), this.layout(), this.adapter.activateBottomLine();
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
      if (!(this.isMenuOpen || !this.adapter.hasClass(ot.FOCUSED))) {
        var r = pt(t) === De.ENTER, i = pt(t) === De.SPACEBAR, a = pt(t) === De.ARROW_UP, s = pt(t) === De.ARROW_DOWN, u = t.ctrlKey || t.metaKey;
        if (!u && (!i && t.key && t.key.length === 1 || i && this.adapter.isTypeaheadInProgress())) {
          var l = i ? " " : t.key, c = this.adapter.typeaheadMatchItem(l, this.getSelectedIndex());
          c >= 0 && this.setSelectedIndex(c), t.preventDefault();
          return;
        }
        !r && !i && !a && !s || (this.openMenu(), t.preventDefault());
      }
    }, e.prototype.notchOutline = function(t) {
      if (this.adapter.hasOutline()) {
        var r = this.adapter.hasClass(ot.FOCUSED);
        if (t) {
          var i = Qr.LABEL_SCALE, a = this.adapter.getLabelWidth() * i;
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
      this.useDefaultValidation || (this.customValidity = t), this.adapter.setSelectAnchorAttr("aria-invalid", (!t).toString()), t ? (this.adapter.removeClass(ot.INVALID), this.adapter.removeMenuClass(ot.MENU_INVALID)) : (this.adapter.addClass(ot.INVALID), this.adapter.addMenuClass(ot.MENU_INVALID)), this.syncHelperTextValidity(t);
    }, e.prototype.isValid = function() {
      return this.useDefaultValidation && this.adapter.hasClass(ot.REQUIRED) && !this.adapter.hasClass(ot.DISABLED) ? this.getSelectedIndex() !== Qr.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(t) {
      t ? this.adapter.addClass(ot.REQUIRED) : this.adapter.removeClass(ot.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", t.toString()), this.adapter.setLabelRequired(t);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var t = this.adapter.getAnchorElement();
      t && (this.adapter.setMenuAnchorElement(t), this.adapter.setMenuAnchorCorner(hi.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(ot.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(ot.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(ot.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var t = this.adapter.hasClass(ot.REQUIRED);
      t && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.syncHelperTextValidity = function(t) {
      if (this.helperText) {
        this.helperText.setValidity(t);
        var r = this.helperText.isVisible(), i = this.helperText.getId();
        r && i ? this.adapter.setSelectAnchorAttr(Js.ARIA_DESCRIBEDBY, i) : this.adapter.removeSelectAnchorAttr(Js.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.setClickDebounceTimeout = function() {
      var t = this;
      clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout(function() {
        t.recentlyClicked = !1;
      }, Qr.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
    }, e;
  }(pn)
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
  ARIA_HIDDEN: "aria-hidden",
  ROLE: "role"
}, lr = {
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
var Oh = (
  /** @class */
  function(n) {
    mn(e, n);
    function e(t) {
      return n.call(this, Ze(Ze({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return lr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return $r;
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
      return this.adapter.getAttr($r.ARIA_HIDDEN) !== "true";
    }, e.prototype.setContent = function(t) {
      this.adapter.setContent(t);
    }, e.prototype.setValidation = function(t) {
      t ? this.adapter.addClass(lr.HELPER_TEXT_VALIDATION_MSG) : this.adapter.removeClass(lr.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.setValidationMsgPersistent = function(t) {
      t ? this.adapter.addClass(lr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT) : this.adapter.removeClass(lr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.getIsValidation = function() {
      return this.adapter.hasClass(lr.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.getIsValidationMsgPersistent = function() {
      return this.adapter.hasClass(lr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.setValidity = function(t) {
      var r = this.adapter.hasClass(lr.HELPER_TEXT_VALIDATION_MSG);
      if (r) {
        var i = this.adapter.hasClass(lr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT), a = !t || i;
        if (a) {
          this.showToScreenReader(), t ? this.adapter.removeAttr($r.ROLE) : this.adapter.setAttr($r.ROLE, "alert");
          return;
        }
        this.adapter.removeAttr($r.ROLE), this.hide();
      }
    }, e.prototype.showToScreenReader = function() {
      this.adapter.removeAttr($r.ARIA_HIDDEN);
    }, e.prototype.hide = function() {
      this.adapter.setAttr($r.ARIA_HIDDEN, "true");
    }, e;
  }(pn)
), Rh = /* @__PURE__ */ z("<div><!></div>");
function Mh(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "static", 3, !1), s = m(e, "anchor", 3, !0), u = m(e, "fixed", 3, !1), l = m(e, "open", 31, () => Ce(a())), c = m(e, "managed", 3, !1), d = m(e, "fullWidth", 3, !1), h = m(e, "quickOpen", 3, !1), f = m(e, "anchorElement", 15), v = m(e, "anchorMargin", 19, () => ({ top: 0, right: 0, bottom: 0, left: 0 })), g = m(e, "maxHeight", 3, 0), p = m(e, "horizontallyCenteredOnViewport", 3, !1), y = m(e, "openBottomBias", 3, 0), _ = m(e, "neverRestoreFocus", 3, !1), x = /* @__PURE__ */ ze(e, [
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
  ]), E, I = /* @__PURE__ */ oe(void 0), S = Ce({}), b = Ce({}), A = /* @__PURE__ */ oe(void 0);
  se("SMUI:list:role", "menu"), se("SMUI:list:item:role", "menuitem"), Se(() => {
    var Z, fe;
    E && s() && !((Z = E.parentElement) != null && Z.classList.contains("mdc-menu-surface--anchor")) && ((fe = E.parentElement) == null || fe.classList.add("mdc-menu-surface--anchor"), f(E.parentElement ?? void 0));
  }), Se(() => {
    o(I) && o(I).isOpen() !== l() && (l() ? o(I).open() : o(I).close());
  }), Se(() => {
    o(I) && o(I).setQuickOpen(h());
  }), Se(() => {
    o(I) && o(I).setFixedPosition(u());
  }), Se(() => {
    o(I) && o(I).setMaxHeight(g());
  }), Se(() => {
    o(I) && o(I).setIsHorizontallyCenteredOnViewport(p());
  });
  const C = hi;
  Se(() => {
    o(I) && e.anchorCorner != null && (typeof e.anchorCorner == "string" ? o(I).setAnchorCorner(C[e.anchorCorner]) : o(I).setAnchorCorner(e.anchorCorner));
  }), Se(() => {
    o(I) && o(I).setAnchorMargin(v());
  }), Se(() => {
    o(I) && o(I).setOpenBottomBias(y());
  });
  const T = _e("SMUI:menu-surface:mount"), O = _e("SMUI:menu-surface:unmount");
  it(() => {
    B(
      I,
      new qd({
        addClass: D,
        removeClass: P,
        hasClass: V,
        hasAnchor: () => !!f(),
        notifyClose: () => {
          c() || l(a()), l() || Ge(K(), "SMUIMenuSurfaceClosed");
        },
        notifyClosing: () => {
          c() || l(a()), l() || Ge(K(), "SMUIMenuSurfaceClosing");
        },
        notifyOpen: () => {
          c() || l(!0), l() && Ge(K(), "SMUIMenuSurfaceOpened");
        },
        notifyOpening: () => {
          l() || Ge(K(), "SMUIMenuSurfaceOpening");
        },
        isElementInContainer: (fe) => K().contains(fe),
        isRtl: () => getComputedStyle(K()).getPropertyValue("direction") === "rtl",
        setTransformOrigin: (fe) => {
          b["transform-origin"] = fe;
        },
        isFocused: () => document.activeElement === K(),
        saveFocus: () => {
          B(A, document.activeElement ?? void 0, !0);
        },
        restoreFocus: () => {
          !_() && (!E || K().contains(document.activeElement)) && o(A) && document.contains(o(A)) && "focus" in o(A) && o(A).focus();
        },
        getInnerDimensions: () => ({
          width: K().offsetWidth,
          height: K().offsetHeight
        }),
        getAnchorDimensions: () => f() ? f().getBoundingClientRect() : null,
        getWindowDimensions: () => ({ width: window.innerWidth, height: window.innerHeight }),
        getBodyDimensions: () => ({
          width: document.body.clientWidth,
          height: document.body.clientHeight
        }),
        getWindowScroll: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
        setPosition: (fe) => {
          b.left = "left" in fe ? `${fe.left}px` : "", b.right = "right" in fe ? `${fe.right}px` : "", b.top = "top" in fe ? `${fe.top}px` : "", b.bottom = "bottom" in fe ? `${fe.bottom}px` : "";
        },
        setMaxHeight: (fe) => {
          b["max-height"] = fe;
        }
      }),
      !0
    );
    const Z = {
      get open() {
        return l();
      },
      set open(fe) {
        l(fe);
      },
      closeProgrammatic: ee
    };
    return T && T(Z), o(I).init(), () => {
      var $, be;
      O && O(Z);
      const fe = o(I).isHoistedElement;
      ($ = o(I)) == null || $.destroy(), fe && ((be = K().parentNode) == null || be.removeChild(K()));
    };
  }), Bn(() => {
    var Z;
    s() && K() && ((Z = K().parentElement) == null || Z.classList.remove("mdc-menu-surface--anchor"));
  });
  function V(Z) {
    return Z in S ? S[Z] : K().classList.contains(Z);
  }
  function D(Z) {
    S[Z] || (S[Z] = !0);
  }
  function P(Z) {
    (!(Z in S) || S[Z]) && (S[Z] = !1);
  }
  function ee(Z) {
    var fe;
    (fe = o(I)) == null || fe.close(Z), l(!1);
  }
  function U(Z) {
    o(I) && l() && !c() && o(I).handleBodyClick(Z);
  }
  function H() {
    return l();
  }
  function F(Z) {
    l(Z);
  }
  function X(Z, fe) {
    if (o(I) == null)
      throw new Error("Instance is not defined.");
    return o(I).setAbsolutePosition(Z, fe);
  }
  function ue(Z) {
    if (o(I) == null)
      throw new Error("Instance is not defined.");
    return o(I).setIsHoisted(Z);
  }
  function M() {
    if (o(I) == null)
      throw new Error("Instance is not defined.");
    return o(I).isFixed();
  }
  function Y() {
    if (o(I) == null)
      throw new Error("Instance is not defined.");
    return o(I).flipCornerHorizontally();
  }
  function K() {
    return E;
  }
  var ce = {
    isOpen: H,
    setOpen: F,
    setAbsolutePosition: X,
    setIsHoisted: ue,
    isFixed: M,
    flipCornerHorizontally: Y,
    getElement: K
  }, le = Rh();
  hn("click", ko.body, U, !0);
  var te = (Z) => {
    var fe;
    o(I) && !c() && o(I).handleKeydown(Z), (fe = e.onkeydown) == null || fe.call(e, Z);
  };
  Be(
    le,
    (Z, fe) => ({
      class: Z,
      style: fe,
      role: "dialog",
      ...x,
      onkeydown: te
    }),
    [
      () => He({
        "mdc-menu-surface": !0,
        "mdc-menu-surface--fixed": u(),
        "mdc-menu-surface--open": a(),
        "smui-menu-surface--static": a(),
        "mdc-menu-surface--fullwidth": d(),
        ...S,
        [r()]: !0
      }),
      () => Object.entries(b).map(([Z, fe]) => `${Z}: ${fe};`).concat([i()]).join(" ")
    ]
  );
  var ge = G(le);
  return Ie(ge, () => e.children ?? pe), xe(le, (Z) => E = Z, () => E), Oe(le, (Z, fe) => ne == null ? void 0 : ne(Z, fe), t), w(n, le), Ee(ce);
}
function Qs(n, { addClass: e = (r) => n.classList.add(r), removeClass: t = (r) => n.classList.remove(r) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      t("mdc-menu-surface--anchor");
    }
  };
}
function Ph(n, e) {
  Ae(e, !0);
  const { closest: t } = Pa;
  let r = m(e, "use", 19, () => []), i = m(e, "class", 3, ""), a = m(e, "open", 15, !1), s = m(e, "anchorElement", 15), u = m(e, "managed", 3, !1), l = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "open",
    "anchorElement",
    "managed",
    "children"
  ]), c, d = /* @__PURE__ */ oe(void 0), h = /* @__PURE__ */ oe(void 0), f = /* @__PURE__ */ oe(void 0);
  se("SMUI:menu-surface:mount", (C) => {
    o(h) || B(h, C, !0);
  });
  const v = _e("SMUI:list:mount");
  se("SMUI:list:mount", (C) => {
    o(f) || B(f, C, !0), v && v(C);
  });
  const g = _e("SMUI:menu:mount"), p = _e("SMUI:menu:unmount");
  it(() => (B(
    d,
    new Dh({
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
      addAttributeToElementAtIndex: (C, T, O) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).setAttributeForElementIndex(C, T, O);
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
        u() || ((T = o(h)) == null || T.closeProgrammatic(C), Ge(b(), "SMUIMenuClosedProgrammatically"));
      },
      getElementIndex: (C) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return o(f).getOrderedList().map((T) => T.element).indexOf(C);
      },
      notifySelected: (C) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        Ge(b(), "SMUIMenuSelected", {
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
        const T = o(f).getOrderedList(), O = t(T[C].element, `.${Ni.MENU_SELECTION_GROUP}`), V = O == null ? void 0 : O.querySelector(`.${Ni.MENU_SELECTED_LIST_ITEM}`);
        return V ? T.map((D) => D.element).indexOf(V) : -1;
      }
    }),
    !0
  ), g && g(o(d)), o(d).init(), () => {
    var C;
    p && o(d) && p(o(d)), (C = o(d)) == null || C.destroy();
  }));
  function y(C) {
    o(d) && o(d).handleKeydown(C);
  }
  function _() {
    return a();
  }
  function x(C) {
    a(C);
  }
  function E(C) {
    if (o(d) == null)
      throw new Error("Instance is undefined.");
    o(d).setDefaultFocusState(C);
  }
  function I() {
    if (o(d) == null)
      throw new Error("Instance is undefined.");
    return o(d).getSelectedIndex();
  }
  function S() {
    return c;
  }
  function b() {
    return c.getElement();
  }
  var A = {
    isOpen: _,
    setOpen: x,
    setDefaultFocusState: E,
    getSelectedIndex: I,
    getMenuSurface: S,
    getElement: b
  };
  {
    let C = /* @__PURE__ */ ae(() => He({ "mdc-menu": !0, [i()]: !0 }));
    xe(
      Mh(n, Ke(
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
            var O;
            y(T), (O = e.onkeydown) == null || O.call(e, T);
          },
          onSMUIMenuSurfaceOpened: (T) => {
            var O;
            o(d) && o(d).handleMenuSurfaceOpened(), (O = e.onSMUIMenuSurfaceOpened) == null || O.call(e, T);
          },
          onSMUIListAction: (T) => {
            var O;
            o(d) && o(f) && o(d).handleItemAction(o(f).getOrderedList()[T.detail.index].element), (O = e.onSMUIListAction) == null || O.call(e, T);
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
          children: (T, O) => {
            var V = ie(), D = j(V);
            Ie(D, () => e.children ?? pe), w(T, V);
          },
          $$slots: { default: !0 }
        }
      )),
      (T) => c = T,
      () => c
    );
  }
  return Ee(A);
}
function Fh(n, e) {
  Ae(e, !0);
  const { closest: t, matches: r } = Pa;
  let i = _e("SMUI:list:nav"), a = m(e, "use", 19, () => []), s = m(e, "class", 3, ""), u = m(e, "nonInteractive", 3, !1), l = m(e, "dense", 3, !1), c = m(e, "textualList", 3, !1), d = m(e, "avatarList", 3, !1), h = m(e, "iconList", 3, !1), f = m(e, "imageList", 3, !1), v = m(e, "thumbnailList", 3, !1), g = m(e, "videoList", 3, !1), p = m(e, "twoLine", 3, !1), y = m(e, "threeLine", 3, !1), _ = m(e, "vertical", 3, !0), x = m(e, "wrapFocus", 19, () => _e("SMUI:list:wrapFocus") ?? !1), E = m(e, "singleSelection", 3, !1), I = m(e, "disabledItemsFocusable", 3, !1), S = m(e, "selectedIndex", 31, () => -1), b = m(e, "radioList", 3, !1), A = m(e, "checkList", 3, !1), C = m(e, "hasTypeahead", 3, !1), T = m(e, "component", 3, Ls), O = m(e, "tag", 3, i ? "nav" : "ul"), V = /* @__PURE__ */ ze(e, [
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
  ]), D, P = /* @__PURE__ */ oe(void 0), ee = [], U = _e("SMUI:list:role");
  const H = /* @__PURE__ */ new WeakMap();
  let F = _e("SMUI:dialog:selection"), X = _e("SMUI:addLayoutListener"), ue;
  se("SMUI:list:nonInteractive", u()), se("SMUI:separator:context", "list"), U || (E() ? (U = "listbox", se("SMUI:list:item:role", "option")) : b() ? (U = "radiogroup", se("SMUI:list:item:role", "radio")) : A() ? (U = "group", se("SMUI:list:item:role", "checkbox")) : (U = "list", se("SMUI:list:item:role", void 0))), Se(() => {
    o(P) && o(P).setVerticalOrientation(_());
  }), Se(() => {
    o(P) && o(P).setWrapFocus(x());
  }), Se(() => {
    o(P) && o(P).setHasTypeahead(C());
  }), Se(() => {
    o(P) && o(P).setSingleSelection(E());
  }), Se(() => {
    o(P) && o(P).setDisabledItemsFocusable(I());
  }), Se(() => {
    o(P) && E() && R() !== S() && o(P).setSelectedIndex(S());
  }), X && (ue = X(at)), se("SMUI:list:item:mount", (me) => {
    ee.push(me), H.set(me.element, me), E() && me.selected && S(Le(me.element));
  }), se("SMUI:list:item:unmount", (me) => {
    const N = (me && ee.findIndex((k) => k === me)) ?? -1;
    N !== -1 && (ee.splice(N, 1), H.delete(me.element));
  });
  const M = _e("SMUI:list:mount"), Y = _e("SMUI:list:unmount");
  it(() => {
    B(
      P,
      new wh({
        addClassForElementIndex: $,
        focusItemAtIndex: he,
        getAttributeForElementIndex: (N, k) => {
          var q;
          return ((q = Z()[N]) == null ? void 0 : q.getAttr(k)) ?? null;
        },
        getFocusedElementIndex: () => document.activeElement ? Z().map((N) => N.element).indexOf(document.activeElement) : -1,
        getListItemCount: () => ee.length,
        getPrimaryTextAtIndex: Ye,
        hasCheckboxAtIndex: (N) => {
          var k;
          return ((k = Z()[N]) == null ? void 0 : k.hasCheckbox) ?? !1;
        },
        hasRadioAtIndex: (N) => {
          var k;
          return ((k = Z()[N]) == null ? void 0 : k.hasRadio) ?? !1;
        },
        isCheckboxCheckedAtIndex: (N) => {
          const k = Z()[N];
          return ((k == null ? void 0 : k.hasCheckbox) && k.checked) ?? !1;
        },
        isFocusInsideList: () => D != null && Me() !== document.activeElement && Me().contains(document.activeElement),
        isRootFocused: () => D != null && document.activeElement === Me(),
        listItemAtIndexHasClass: fe,
        notifyAction: (N) => {
          S(N), D != null && Ge(Me(), "SMUIListAction", { index: N });
        },
        notifySelectionChange: (N) => {
          D != null && Ge(Me(), "SMUIListSelectionChange", { changedIndices: N });
        },
        removeClassForElementIndex: be,
        setAttributeForElementIndex: ye,
        setCheckedCheckboxOrRadioAtIndex: (N, k) => {
          Z()[N].checked = k;
        },
        setTabIndexForListItemChildren: (N, k) => {
          const q = Z()[N];
          Array.prototype.forEach.call(q.element.querySelectorAll("button:not(:disabled), a"), (st) => {
            st.setAttribute("tabindex", k);
          });
        }
      }),
      !0
    );
    const me = {
      get element() {
        return Me();
      },
      get items() {
        return ee;
      },
      get typeaheadInProgress() {
        if (!o(P))
          throw new Error("Instance is undefined.");
        return o(P).isTypeaheadInProgress();
      },
      typeaheadMatchItem(N, k) {
        if (!o(P))
          throw new Error("Instance is undefined.");
        return o(P).typeaheadMatchItem(
          N,
          k,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: Z,
      focusItemAtIndex: he,
      addClassForElementIndex: $,
      removeClassForElementIndex: be,
      setAttributeForElementIndex: ye,
      removeAttributeForElementIndex: Ue,
      getAttributeFromElementIndex: tt,
      getPrimaryTextAtIndex: Ye
    };
    return M && M(me), o(P).init(), o(P).layout(), () => {
      var N;
      Y && Y(me), (N = o(P)) == null || N.destroy();
    };
  }), Bn(() => {
    ue && ue();
  });
  function K(me) {
    o(P) && me.target && o(P).handleKeydown(me, me.target.classList.contains("mdc-deprecated-list-item"), Le(me.target));
  }
  function ce(me) {
    o(P) && me.target && o(P).handleFocusIn(Le(me.target));
  }
  function le(me) {
    o(P) && me.target && o(P).handleFocusOut(Le(me.target));
  }
  function te(me) {
    o(P) && me.target && o(P).handleClick(Le(me.target), !r(me.target, 'input[type="checkbox"], input[type="radio"]'), me);
  }
  function ge(me) {
    if (b() || A()) {
      const N = Le(me.target);
      if (N !== -1) {
        const k = Z()[N];
        k && (b() && !k.checked || A()) && (r(me.detail.target, 'input[type="checkbox"], input[type="radio"]') || (k.checked = !k.checked), k.activateRipple(), window.requestAnimationFrame(() => {
          k.deactivateRipple();
        }));
      }
    }
  }
  function Z() {
    return D == null ? [] : [...Me().children].map((me) => H.get(me)).filter((me) => me && me._smui_list_item_accessor);
  }
  function fe(me, N) {
    const k = Z()[me];
    return (k && k.hasClass(N)) ?? !1;
  }
  function $(me, N) {
    const k = Z()[me];
    k && k.addClass(N);
  }
  function be(me, N) {
    const k = Z()[me];
    k && k.removeClass(N);
  }
  function ye(me, N, k) {
    const q = Z()[me];
    q && q.addAttr(N, k);
  }
  function Ue(me, N) {
    const k = Z()[me];
    k && k.removeAttr(N);
  }
  function tt(me, N) {
    const k = Z()[me];
    return k ? k.getAttr(N) : null;
  }
  function Ye(me) {
    const N = Z()[me];
    return (N && N.getPrimaryText()) ?? "";
  }
  function Le(me) {
    const N = t(me, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return N && r(N, ".mdc-deprecated-list-item") ? Z().map((k) => k == null ? void 0 : k.element).indexOf(N) : -1;
  }
  function at() {
    if (!o(P))
      throw new Error("Instance is undefined.");
    return o(P).layout();
  }
  function Pt(me, N) {
    if (!o(P))
      throw new Error("Instance is undefined.");
    return o(P).setEnabled(me, N);
  }
  function Ft() {
    if (!o(P))
      throw new Error("Instance is undefined.");
    return o(P).isTypeaheadInProgress();
  }
  function R() {
    if (!o(P))
      throw new Error("Instance is undefined.");
    return o(P).getSelectedIndex();
  }
  function W() {
    if (!o(P))
      throw new Error("Instance is undefined.");
    return o(P).getFocusedItemIndex();
  }
  function he(me) {
    const N = Z()[me];
    N && "focus" in N.element && N.element.focus();
  }
  function Me() {
    return D.getElement();
  }
  var kt = {
    layout: at,
    setEnabled: Pt,
    getTypeaheadInProgress: Ft,
    getSelectedIndex: R,
    getFocusedItemIndex: W,
    focusItemAtIndex: he,
    getElement: Me
  }, un = ie(), nr = j(un);
  {
    let me = /* @__PURE__ */ ae(() => He({
      "mdc-deprecated-list": !0,
      "mdc-deprecated-list--non-interactive": u(),
      "mdc-deprecated-list--dense": l(),
      "mdc-deprecated-list--textual-list": c(),
      "mdc-deprecated-list--avatar-list": d() || F,
      "mdc-deprecated-list--icon-list": h(),
      "mdc-deprecated-list--image-list": f(),
      "mdc-deprecated-list--thumbnail-list": v(),
      "mdc-deprecated-list--video-list": g(),
      "mdc-deprecated-list--two-line": p(),
      "smui-list--three-line": y() && !p(),
      [s()]: !0
    }));
    Ma(nr, T, (N, k) => {
      xe(
        k(N, Ke(
          {
            get tag() {
              return O();
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
          () => V,
          {
            onkeydown: (q) => {
              var Te;
              K(q), (Te = e.onkeydown) == null || Te.call(e, q);
            },
            onfocusin: (q) => {
              var Te;
              ce(q), (Te = e.onfocusin) == null || Te.call(e, q);
            },
            onfocusout: (q) => {
              var Te;
              le(q), (Te = e.onfocusout) == null || Te.call(e, q);
            },
            onclick: (q) => {
              var Te;
              te(q), (Te = e.onclick) == null || Te.call(e, q);
            },
            onSMUIAction: (q) => {
              var Te;
              ge(q), (Te = e.onSMUIAction) == null || Te.call(e, q);
            },
            children: (q, Te) => {
              var st = ie(), gt = j(st);
              Ie(gt, () => e.children ?? pe), w(q, st);
            },
            $$slots: { default: !0 }
          }
        )),
        (q) => D = q,
        () => D
      );
    });
  }
  return w(n, un), Ee(kt);
}
let kh = 0;
var Nh = /* @__PURE__ */ z('<span class="mdc-deprecated-list-item__ripple"></span>'), Hh = /* @__PURE__ */ z("<!><!>", 1);
function Uh(n, e) {
  Ae(e, !0);
  let t = () => {
  };
  function r($) {
    return $ === t;
  }
  let i = _e("SMUI:list:item:nav"), a = m(e, "use", 19, () => []), s = m(e, "class", 3, ""), u = m(e, "style", 3, ""), l = m(e, "nonInteractive", 19, () => _e("SMUI:list:nonInteractive") ?? !1), c = m(e, "ripple", 19, () => !l()), d = m(e, "wrapper", 3, !1), h = m(e, "activated", 15, !1), f = m(e, "role", 19, () => d() ? "presentation" : _e("SMUI:list:item:role")), v = m(e, "selected", 15, !1), g = m(e, "disabled", 3, !1), p = m(e, "skipRestoreFocus", 3, !1), y = m(e, "tabindex", 15, t), _ = m(e, "inputId", 19, () => "SMUI-form-field-list-" + kh++), x = m(e, "component", 3, Ls), E = m(e, "tag", 19, () => i ? e.href ? "a" : "span" : "li"), I = /* @__PURE__ */ ze(e, [
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
  se("SMUI:list:nonInteractive", void 0), se("SMUI:list:item:role", void 0);
  let S, b = Ce({}), A = Ce({}), C = Ce({}), T = /* @__PURE__ */ oe(void 0), O = /* @__PURE__ */ oe(void 0);
  const V = /* @__PURE__ */ ae(() => r(y()) ? !l() && !g() && (v() || o(T) && o(T).checked) ? 0 : -1 : y());
  se("SMUI:generic:input:props", { id: _() }), se("SMUI:separator:context", void 0), se("SMUI:generic:input:mount", ($) => {
    ("_smui_checkbox_accessor" in $ || "_smui_radio_accessor" in $) && B(T, $, !0);
  }), se("SMUI:generic:input:unmount", () => {
    B(T, void 0);
  });
  const D = _e("SMUI:list:item:mount"), P = _e("SMUI:list:item:unmount");
  it(() => {
    if (!v() && !l()) {
      let be = !0, ye = S.getElement();
      for (; ye.previousElementSibling; )
        if (ye = ye.previousElementSibling, ye.nodeType === 1 && ye.classList.contains("mdc-deprecated-list-item") && !ye.classList.contains("mdc-deprecated-list-item--disabled")) {
          be = !1;
          break;
        }
      be && B(O, window.requestAnimationFrame(() => Y(ye)), !0);
    }
    const $ = {
      _smui_list_item_accessor: !0,
      get element() {
        return te();
      },
      get selected() {
        return v();
      },
      set selected(be) {
        v(be);
      },
      hasClass: ee,
      addClass: U,
      removeClass: H,
      getAttr: X,
      addAttr: ue,
      removeAttr: M,
      getPrimaryText: le,
      // For inputs within item.
      get checked() {
        return (o(T) && o(T).checked) ?? !1;
      },
      set checked(be) {
        o(T) && (o(T).checked = !!be);
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
      action: ce,
      get tabindex() {
        return o(V);
      },
      set tabindex(be) {
        y(be);
      },
      get disabled() {
        return g();
      },
      get activated() {
        return h();
      },
      set activated(be) {
        h(be);
      }
    };
    return D && D($), () => {
      P && P($);
    };
  }), Bn(() => {
    o(O) && window.cancelAnimationFrame(o(O));
  });
  function ee($) {
    return $ in b ? b[$] : te().classList.contains($);
  }
  function U($) {
    b[$] || (b[$] = !0);
  }
  function H($) {
    (!($ in b) || b[$]) && (b[$] = !1);
  }
  function F($, be) {
    A[$] != be && (be === "" || be == null ? delete A[$] : A[$] = be);
  }
  function X($) {
    return $ in C ? C[$] ?? null : te().getAttribute($);
  }
  function ue($, be) {
    C[$] !== be && (C[$] = be);
  }
  function M($) {
    (!($ in C) || C[$] != null) && (C[$] = void 0);
  }
  function Y($) {
    let be = !0;
    for (; $.nextElementSibling; )
      if ($ = $.nextElementSibling, $.nodeType === 1 && $.classList.contains("mdc-deprecated-list-item")) {
        const ye = $.attributes.getNamedItem("tabindex");
        if (ye && ye.value === "0") {
          be = !1;
          break;
        }
      }
    be && y(0);
  }
  function K($) {
    const be = $.key === "Enter", ye = $.key === "Space";
    (be || ye) && ce($);
  }
  function ce($) {
    g() || Ge(te(), "SMUIAction", $);
  }
  function le() {
    const $ = te(), be = $.querySelector(".mdc-deprecated-list-item__primary-text");
    if (be)
      return be.textContent ?? "";
    const ye = $.querySelector(".mdc-deprecated-list-item__text");
    return ye ? ye.textContent ?? "" : $.textContent ?? "";
  }
  function te() {
    return S.getElement();
  }
  var ge = { action: ce, getPrimaryText: le, getElement: te }, Z = ie(), fe = j(Z);
  {
    let $ = /* @__PURE__ */ ae(() => [
      ...l() ? [] : [
        [
          Rn,
          {
            ripple: !o(T),
            unbounded: !1,
            color: (h() || v()) && e.color == null ? "primary" : e.color,
            disabled: g(),
            addClass: U,
            removeClass: H,
            addStyle: F
          }
        ]
      ],
      ...a()
    ]), be = /* @__PURE__ */ ae(() => He({
      "mdc-deprecated-list-item": !d(),
      "mdc-deprecated-list-item__wrapper": d(),
      "mdc-deprecated-list-item--activated": h(),
      "mdc-deprecated-list-item--selected": v(),
      "mdc-deprecated-list-item--disabled": g(),
      "mdc-menu-item--selected": !i && f() === "menuitem" && v(),
      "smui-menu-item--non-interactive": l(),
      ...b,
      [s()]: !0
    })), ye = /* @__PURE__ */ ae(() => Object.entries(A).map(([tt, Ye]) => `${tt}: ${Ye};`).concat([u()]).join(" ")), Ue = /* @__PURE__ */ ae(() => p() || void 0);
    Ma(fe, x, (tt, Ye) => {
      xe(
        Ye(tt, Ke(
          {
            get tag() {
              return E();
            },
            get use() {
              return o($);
            },
            get class() {
              return o(be);
            },
            get style() {
              return o(ye);
            }
          },
          () => i && h() ? { "aria-current": "page" } : {},
          () => !i || d() ? { role: f() } : {},
          () => !i && f() === "option" ? { "aria-selected": v() ? "true" : "false" } : {},
          () => !i && (f() === "radio" || f() === "checkbox") ? {
            "aria-checked": o(T) && o(T).checked ? "true" : "false"
          } : {},
          () => i ? {} : { "aria-disabled": g() ? "true" : "false" },
          {
            get "data-menu-item-skip-restore-focus"() {
              return o(Ue);
            },
            get tabindex() {
              return o(V);
            },
            get href() {
              return e.href;
            }
          },
          () => C,
          () => I,
          {
            onclick: (Le) => {
              var at;
              ce(Le), (at = e.onclick) == null || at.call(e, Le);
            },
            onkeydown: (Le) => {
              var at;
              K(Le), (at = e.onkeydown) == null || at.call(e, Le);
            },
            children: (Le, at) => {
              var Pt = Hh(), Ft = j(Pt);
              {
                var R = (he) => {
                  var Me = Nh();
                  w(he, Me);
                };
                Q(Ft, (he) => {
                  c() && he(R);
                });
              }
              var W = J(Ft);
              Ie(W, () => e.children ?? pe), w(Le, Pt);
            },
            $$slots: { default: !0 }
          }
        )),
        (Le) => S = Le,
        () => S
      );
    });
  }
  return w(n, Z), Ee(ge);
}
let Bh = 0;
var Gh = /* @__PURE__ */ z("<div><!></div>");
function Wh(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "id", 19, () => "SMUI-select-helper-text-" + Bh++), a = m(e, "persistent", 3, !1), s = m(e, "validationMsg", 3, !1), u = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "id",
    "persistent",
    "validationMsg",
    "children"
  ]), l, c = /* @__PURE__ */ oe(void 0), d = Ce({}), h = Ce({}), f = /* @__PURE__ */ oe(void 0);
  const v = _e("SMUI:select:helper-text:id"), g = _e("SMUI:select:helper-text:mount"), p = _e("SMUI:select:helper-text:unmount");
  it(() => (B(
    c,
    new Oh({
      addClass: _,
      removeClass: x,
      hasClass: y,
      getAttr: E,
      setAttr: I,
      removeAttr: S,
      setContent: (D) => {
        B(f, D, !0);
      }
    }),
    !0
  ), v && v(i()), g && g(o(c)), o(c).init(), () => {
    var D;
    p && o(c) && p(o(c)), (D = o(c)) == null || D.destroy();
  }));
  function y(D) {
    return D in d ? d[D] : b().classList.contains(D);
  }
  function _(D) {
    d[D] || (d[D] = !0);
  }
  function x(D) {
    (!(D in d) || d[D]) && (d[D] = !1);
  }
  function E(D) {
    return D in h ? h[D] ?? null : b().getAttribute(D);
  }
  function I(D, P) {
    h[D] !== P && (h[D] = P);
  }
  function S(D) {
    (!(D in h) || h[D] != null) && (h[D] = void 0);
  }
  function b() {
    return l;
  }
  var A = { getElement: b }, C = Gh();
  Be(
    C,
    (D) => ({
      class: D,
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
        ...d,
        [r()]: !0
      })
    ]
  );
  var T = G(C);
  {
    var O = (D) => {
      var P = ie(), ee = j(P);
      Ie(ee, () => e.children ?? pe), w(D, P);
    }, V = (D) => {
      var P = dt();
      de(() => Pe(P, o(f))), w(D, P);
    };
    Q(T, (D) => {
      o(f) == null ? D(O) : D(V, !1);
    });
  }
  return xe(C, (D) => l = D, () => l), Oe(C, (D, P) => ne == null ? void 0 : ne(D, P), t), w(n, C), Ee(A);
}
let Vh = 0;
var Zh = /* @__PURE__ */ z("<input/>"), zh = /* @__PURE__ */ z('<span class="mdc-select__ripple"></span>'), jh = /* @__PURE__ */ z('<div><!> <div><!> <!> <!> <!> <span><span> </span></span> <span><svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"><polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon><polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon></svg></span> <!></div> <!></div> <!>', 1);
function Xh(n, e) {
  Ae(e, !0);
  const t = () => pi(Me, "$selectedTextStore", r), [r, i] = Ai();
  let a = () => {
  };
  function s(L) {
    return L === a;
  }
  let u = m(e, "use", 19, () => []), l = m(e, "class", 3, ""), c = m(e, "style", 3, ""), d = m(e, "ripple", 3, !0), h = m(e, "disabled", 3, !1), f = m(e, "variant", 3, "standard"), v = m(e, "noLabel", 3, !1), g = m(e, "label", 3, void 0), p = m(e, "value", 15), y = m(e, "key", 3, (L) => L), _ = m(e, "dirty", 15, !1), x = m(e, "invalid", 15, a), E = m(e, "updateInvalid", 19, () => s(x())), I = m(e, "required", 3, !1), S = m(e, "inputId", 19, () => "SMUI-select-" + Vh++), b = m(e, "hiddenInput", 3, !1), A = m(e, "withLeadingIcon", 3, a), C = m(e, "anchor$use", 19, () => []), T = m(e, "anchor$class", 3, ""), O = m(e, "selectedTextContainer$use", 19, () => []), V = m(e, "selectedTextContainer$class", 3, ""), D = m(e, "selectedText$use", 19, () => []), P = m(e, "selectedText$class", 3, ""), ee = m(e, "dropdownIcon$use", 19, () => []), U = m(e, "dropdownIcon$class", 3, ""), H = m(e, "menu$class", 3, ""), F = /* @__PURE__ */ ze(e, [
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
  const X = s(x());
  s(x()) && x(!1);
  let ue, M = /* @__PURE__ */ oe(void 0), Y = Ce({}), K = Ce({}), ce, le = Ce({}), te = /* @__PURE__ */ oe(-1);
  const ge = /* @__PURE__ */ ae(() => F.menu$id ?? S() + "-menu");
  let Z = /* @__PURE__ */ oe(void 0), fe = _e("SMUI:addLayoutListener"), $, be = /* @__PURE__ */ oe(!1), ye = Ce({}), Ue = /* @__PURE__ */ oe(void 0), tt = /* @__PURE__ */ oe(void 0), Ye = /* @__PURE__ */ oe(!1), Le, at = _e("SMUI:select:context"), Pt, Ft, R, W, he;
  se("SMUI:list:role", ""), se("SMUI:list:nav", !1);
  const Me = Un("");
  se("SMUI:select:selectedText", Me);
  const kt = Un(p());
  Se(() => {
    Jn(kt, p());
  }), se("SMUI:select:value", kt), Se(() => {
    o(M) && o(M).getValue() !== y()(p()) && o(M).setValue(y()(p()));
  });
  let un = o(te);
  Se(() => {
    if (un !== o(te))
      if (un = o(te), o(M))
        o(M).setSelectedIndex(
          o(te),
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const L = nn();
        p() !== L[o(te)] && p(L[o(te)]);
      }
  }), Se(() => {
    o(M) && o(M).getDisabled() !== h() && o(M).setDisabled(h());
  }), Se(() => {
    o(M) && _() && o(M).isValid() !== !x() && (E() ? x(!o(M).isValid()) : o(M).setValid(!x()));
  }), Se(() => {
    o(M) && o(M).getRequired() !== I() && o(M).setRequired(I());
  }), fe && ($ = fe(Ua)), se("SMUI:select:leading-icon:mount", (L) => {
    Pt = L;
  }), se("SMUI:select:leading-icon:unmount", () => {
    Pt = void 0;
  }), se("SMUI:list:mount", (L) => {
    Le = L;
  }), se("SMUI:select:helper-text:id", (L) => {
    B(Z, L, !0);
  }), se("SMUI:select:helper-text:mount", (L) => {
    Ft = L;
  }), se("SMUI:select:helper-text:unmount", () => {
    B(Z, void 0), Ft = void 0;
  }), it(() => (B(
    M,
    new Lh(
      {
        // getSelectAdapterMethods
        // getMenuItemAttr: (menuItem: Element, attr: string) =>
        //   menuItem.getAttribute(attr),
        setSelectedText: (L) => {
          Jn(Me, L);
        },
        isSelectAnchorFocused: () => document.activeElement === ce,
        getSelectAnchorAttr: st,
        setSelectAnchorAttr: gt,
        removeSelectAnchorAttr: Nt,
        addMenuClass: q,
        removeMenuClass: Te,
        openMenu: () => {
          B(be, !0);
        },
        closeMenu: () => {
          B(be, !1);
        },
        getAnchorElement: () => ce,
        setMenuAnchorElement: (L) => {
          B(Ue, L, !0);
        },
        setMenuAnchorCorner: (L) => {
          B(tt, L, !0);
        },
        setMenuWrapFocus: (L) => {
          B(Ye, L, !0);
        },
        getSelectedIndex: () => o(te),
        setSelectedIndex: (L) => {
          un = L, B(te, L, !0), p(nn()[o(te)]);
        },
        focusMenuItemAtIndex: (L) => {
          Le.focusItemAtIndex(L);
        },
        getMenuItemCount: () => Le.items.length,
        getMenuItemValues: () => nn().map(y()),
        getMenuItemTextAtIndex: (L) => Le.getPrimaryTextAtIndex(L),
        isTypeaheadInProgress: () => Le.typeaheadInProgress,
        typeaheadMatchItem: (L, ve) => Le.typeaheadMatchItem(L, ve),
        // getCommonAdapterMethods
        addClass: me,
        removeClass: N,
        hasClass: nr,
        setRippleCenter: (L) => W && W.setRippleCenter(L),
        activateBottomLine: () => W && W.activate(),
        deactivateBottomLine: () => W && W.deactivate(),
        notifyChange: (L) => {
          var ve;
          _(!0), E() && x(!((ve = o(M)) != null && ve.isValid())), Ge(_r(), "SMUISelectChange", { value: p(), index: o(te) });
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
          return Ft;
        },
        get leadingIcon() {
          return Pt;
        }
      }
    ),
    !0
  ), B(te, nn().indexOf(p()), !0), o(M).init(), rn(X), () => {
    var L;
    (L = o(M)) == null || L.destroy();
  })), Bn(() => {
    $ && $();
  });
  function nr(L) {
    return L in Y ? Y[L] : _r().classList.contains(L);
  }
  function me(L) {
    Y[L] || (Y[L] = !0);
  }
  function N(L) {
    (!(L in Y) || Y[L]) && (Y[L] = !1);
  }
  function k(L, ve) {
    K[L] != ve && (ve === "" || ve == null ? delete K[L] : K[L] = ve);
  }
  function q(L) {
    ye[L] || (ye[L] = !0);
  }
  function Te(L) {
    (!(L in ye) || ye[L]) && (ye[L] = !1);
  }
  function st(L) {
    return L in le ? le[L] ?? null : _r().getAttribute(L);
  }
  function gt(L, ve) {
    le[L] !== ve && (le[L] = ve);
  }
  function Nt(L) {
    (!(L in le) || le[L] != null) && (le[L] = void 0);
  }
  function nn() {
    return Le.getOrderedList().map((L) => L.getValue());
  }
  function Ei(L) {
    const ve = L.currentTarget.getBoundingClientRect();
    return (ut(L) ? L.touches[0].clientX : L.clientX) - ve.left;
  }
  function ut(L) {
    return "touches" in L;
  }
  function Ht() {
    if (o(M) == null)
      throw new Error("Instance is undefined.");
    return o(M).getUseDefaultValidation();
  }
  function rn(L) {
    var ve;
    (ve = o(M)) == null || ve.setUseDefaultValidation(L);
  }
  function br() {
    ce.focus();
  }
  function Ua() {
    var L;
    (L = o(M)) == null || L.layout();
  }
  function _r() {
    return ue;
  }
  var Ne = {
    getUseDefaultValidation: Ht,
    setUseDefaultValidation: rn,
    focus: br,
    layout: Ua,
    getElement: _r
  }, Je = jh(), je = j(Je);
  Be(je, (L, ve, nt) => ({ class: L, style: ve, ...nt }), [
    () => He({
      "mdc-select": !0,
      "mdc-select--required": I(),
      "mdc-select--disabled": h(),
      "mdc-select--filled": f() === "filled",
      "mdc-select--outlined": f() === "outlined",
      "smui-select--standard": f() === "standard",
      "mdc-select--with-leading-icon": s(A()) ? e.leadingIcon : A(),
      "mdc-select--no-label": v() || g() == null,
      "mdc-select--invalid": x(),
      "mdc-select--activated": o(be),
      "mdc-data-table__pagination-rows-per-page-select": at === "data-table:pagination",
      ...Y,
      [l()]: !0
    }),
    () => Object.entries(K).map(([L, ve]) => `${L}: ${ve};`).concat([c()]).join(" "),
    () => Ca(F, [
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
  var Ut = G(je);
  {
    var Ln = (L) => {
      var ve = Zh();
      Be(
        ve,
        (nt) => ({
          type: "hidden",
          required: I(),
          disabled: h(),
          value: p(),
          ...nt
        }),
        [() => lt(F, "input$")],
        void 0,
        void 0,
        !0
      ), w(L, ve);
    };
    Q(Ut, (L) => {
      b() && L(Ln);
    });
  }
  var Qe = J(Ut, 2), bt = (L) => {
    var ve;
    ce.focus(), o(M) && o(M).handleClick(Ei(L)), (ve = e.anchor$onclick) == null || ve.call(e, L);
  }, Dt = (L) => {
    var ve;
    o(M) && o(M).handleKeydown(L), (ve = e.onkeydown) == null || ve.call(e, L);
  }, Ve = (L) => {
    var ve;
    o(M) && o(M).handleBlur(), Ge(_r(), "blur", L), (ve = e.anchor$onblur) == null || ve.call(e, L);
  }, Lt = (L) => {
    var ve;
    o(M) && o(M).handleFocus(), Ge(_r(), "focus", L), (ve = e.anchor$onfocus) == null || ve.call(e, L);
  };
  Be(
    Qe,
    (L, ve) => ({
      class: L,
      "aria-required": I() ? "true" : void 0,
      "aria-disabled": h() ? "true" : void 0,
      "aria-controls": o(ge),
      "aria-expanded": o(be) ? "true" : "false",
      "aria-describedby": o(Z),
      role: "combobox",
      tabindex: "0",
      ...le,
      ...ve,
      onclick: bt,
      onkeydown: Dt,
      onblur: Ve,
      onfocus: Lt
    }),
    [
      () => He({ "mdc-select__anchor": !0, [T()]: !0 }),
      () => lt(F, "anchor$")
    ]
  );
  var rr = G(Qe);
  {
    var In = (L) => {
      var ve = zh();
      w(L, ve);
    };
    Q(rr, (L) => {
      f() === "filled" && L(In);
    });
  }
  var _t = J(rr, 2);
  {
    var Bt = (L) => {
      {
        let ve = /* @__PURE__ */ ae(() => S() + "-smui-label"), nt = /* @__PURE__ */ ae(() => t() !== ""), yt = /* @__PURE__ */ ae(() => lt(F, "label$"));
        xe(
          ls(L, Ke(
            {
              get id() {
                return o(ve);
              },
              get floatAbove() {
                return o(nt);
              },
              get required() {
                return I();
              }
            },
            () => o(yt),
            {
              children: (ar, sr) => {
                var aa = ie(), Si = j(aa);
                {
                  var qr = (Yr) => {
                  }, Gs = (Yr) => {
                    var Ba = ie(), sa = j(Ba);
                    {
                      var Jo = (Cr) => {
                        var Kr = dt();
                        de(() => Pe(Kr, g())), w(Cr, Kr);
                      }, Ga = (Cr) => {
                        var Kr = ie(), Ws = j(Kr);
                        Ie(Ws, g), w(Cr, Kr);
                      };
                      Q(
                        sa,
                        (Cr) => {
                          typeof g() == "string" ? Cr(Jo) : Cr(Ga, !1);
                        },
                        !0
                      );
                    }
                    w(Yr, Ba);
                  };
                  Q(Si, (Yr) => {
                    g() == null ? Yr(qr) : Yr(Gs, !1);
                  });
                }
                w(ar, aa);
              },
              $$slots: { default: !0 }
            }
          )),
          (ar) => R = ar,
          () => R
        );
      }
    };
    Q(_t, (L) => {
      f() !== "outlined" && !v() && g() != null && L(Bt);
    });
  }
  var bn = J(_t, 2);
  {
    var Xt = (L) => {
      {
        let ve = /* @__PURE__ */ ae(() => v() || g() == null), nt = /* @__PURE__ */ ae(() => lt(F, "outline$"));
        xe(
          Zd(L, Ke(
            {
              get noLabel() {
                return o(ve);
              }
            },
            () => o(nt),
            {
              children: (yt, ar) => {
                var sr = ie(), aa = j(sr);
                {
                  var Si = (qr) => {
                    {
                      let Gs = /* @__PURE__ */ ae(() => S() + "-smui-label"), Yr = /* @__PURE__ */ ae(() => t() !== ""), Ba = /* @__PURE__ */ ae(() => lt(F, "label$"));
                      xe(
                        ls(qr, Ke(
                          {
                            get id() {
                              return o(Gs);
                            },
                            get floatAbove() {
                              return o(Yr);
                            },
                            get required() {
                              return I();
                            }
                          },
                          () => o(Ba),
                          {
                            children: (sa, Jo) => {
                              var Ga = ie(), Cr = j(Ga);
                              {
                                var Kr = (oa) => {
                                }, Ws = (oa) => {
                                  var Qo = ie(), Lu = j(Qo);
                                  {
                                    var Ou = (xi) => {
                                      var la = dt();
                                      de(() => Pe(la, g())), w(xi, la);
                                    }, Ru = (xi) => {
                                      var la = ie(), Mu = j(la);
                                      Ie(Mu, g), w(xi, la);
                                    };
                                    Q(
                                      Lu,
                                      (xi) => {
                                        typeof g() == "string" ? xi(Ou) : xi(Ru, !1);
                                      },
                                      !0
                                    );
                                  }
                                  w(oa, Qo);
                                };
                                Q(Cr, (oa) => {
                                  g() == null ? oa(Kr) : oa(Ws, !1);
                                });
                              }
                              w(sa, Ga);
                            },
                            $$slots: { default: !0 }
                          }
                        )),
                        (sa) => R = sa,
                        () => R
                      );
                    }
                  };
                  Q(aa, (qr) => {
                    !v() && g() != null && qr(Si);
                  });
                }
                w(yt, sr);
              },
              $$slots: { default: !0 }
            }
          )),
          (yt) => he = yt,
          () => he
        );
      }
    };
    Q(bn, (L) => {
      f() === "outlined" && L(Xt);
    });
  }
  var jr = J(bn, 2);
  Ie(jr, () => e.leadingIcon ?? pe);
  var _n = J(jr, 2);
  Be(_n, (L, ve) => ({ class: L, ...ve }), [
    () => He({
      "mdc-select__selected-text-container": !0,
      [V()]: !0
    }),
    () => lt(F, "selectedTextContainer$")
  ]);
  var yr = G(_n);
  Be(
    yr,
    (L, ve) => ({
      id: S() + "-smui-selected-text",
      class: L,
      role: "button",
      "aria-haspopup": "listbox",
      "aria-labelledby": S() + "-smui-label",
      ...ve
    }),
    [
      () => He({
        "mdc-select__selected-text": !0,
        [P()]: !0
      }),
      () => lt(F, "selectedText$")
    ]
  );
  var ia = G(yr);
  Oe(yr, (L, ve) => ne == null ? void 0 : ne(L, ve), D), Oe(_n, (L, ve) => ne == null ? void 0 : ne(L, ve), O);
  var yn = J(_n, 2);
  Be(yn, (L, ve) => ({ class: L, ...ve }), [
    () => He({
      "mdc-select__dropdown-icon": !0,
      [U()]: !0
    }),
    () => lt(F, "dropdownIcon$")
  ]), Oe(yn, (L, ve) => ne == null ? void 0 : ne(L, ve), ee);
  var ir = J(yn, 2);
  {
    var Gn = (L) => {
      {
        let ve = /* @__PURE__ */ ae(() => lt(F, "ripple$"));
        xe(Vd(L, Ke(() => o(ve))), (nt) => W = nt, () => W);
      }
    };
    Q(ir, (L) => {
      f() !== "outlined" && d() && L(Gn);
    });
  }
  xe(Qe, (L) => ce = L, () => ce), Oe(Qe, (L, ve) => ne == null ? void 0 : ne(L, ve), C);
  var Xr = J(Qe, 2);
  {
    let L = /* @__PURE__ */ ae(() => He({
      "mdc-select__menu": !0,
      ...ye,
      [H()]: !0
    })), ve = /* @__PURE__ */ ae(() => lt(F, "menu$"));
    Ph(Xr, Ke(
      {
        get class() {
          return o(L);
        },
        get id() {
          return o(ge);
        },
        fullWidth: !0,
        anchor: !1,
        get anchorElement() {
          return o(Ue);
        },
        get anchorCorner() {
          return o(tt);
        }
      },
      () => o(ve),
      {
        onSMUIMenuSelected: (nt) => {
          var yt;
          o(M) && o(M).handleMenuItemAction(nt.detail.index), (yt = e.onSMUIMenuSelected) == null || yt.call(e, nt);
        },
        onSMUIMenuSurfaceClosing: (nt) => {
          var yt;
          o(M) && o(M).handleMenuClosing(), (yt = e.onSMUIMenuSurfaceClosing) == null || yt.call(e, nt);
        },
        onSMUIMenuSurfaceClosed: (nt) => {
          var yt;
          o(M) && o(M).handleMenuClosed(), (yt = e.onSMUIMenuSurfaceClosed) == null || yt.call(e, nt);
        },
        onSMUIMenuSurfaceOpened: (nt) => {
          var yt;
          o(M) && o(M).handleMenuOpened(), (yt = e.onSMUIMenuSurfaceOpened) == null || yt.call(e, nt);
        },
        get open() {
          return o(be);
        },
        set open(nt) {
          B(be, nt, !0);
        },
        children: (nt, yt) => {
          {
            let ar = /* @__PURE__ */ ae(() => lt(F, "list$"));
            Fh(nt, Ke(
              {
                role: "listbox",
                get wrapFocus() {
                  return o(Ye);
                }
              },
              () => o(ar),
              {
                get selectedIndex() {
                  return o(te);
                },
                set selectedIndex(sr) {
                  B(te, sr, !0);
                },
                children: (sr, aa) => {
                  var Si = ie(), qr = j(Si);
                  Ie(qr, () => e.children ?? pe), w(sr, Si);
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
  xe(je, (L) => ue = L, () => ue), Oe(je, (L, ve) => Rn == null ? void 0 : Rn(L, ve), () => ({
    ripple: f() === "filled",
    unbounded: !1,
    addClass: me,
    removeClass: N,
    addStyle: k
  })), Oe(je, (L, ve) => Qs == null ? void 0 : Qs(L, ve), () => ({ addClass: me, removeClass: N })), Oe(je, (L, ve) => ne == null ? void 0 : ne(L, ve), u);
  var Bs = J(je, 2);
  {
    var Tu = (L) => {
      {
        let ve = /* @__PURE__ */ ae(() => lt(F, "helperText$"));
        Wh(L, Ke(() => o(ve), {
          children: (nt, yt) => {
            var ar = ie(), sr = j(ar);
            Ie(sr, () => e.helperText ?? pe), w(nt, ar);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    Q(Bs, (L) => {
      e.helperText && L(Tu);
    });
  }
  de(() => Pe(ia, t())), w(n, Je);
  var Du = Ee(Ne);
  return i(), Du;
}
function qh(n, e) {
  Ae(e, !0);
  const t = () => pi(d, "$selectedValue", r), [r, i] = Ai();
  let a = m(e, "use", 19, () => []);
  m(e, "class", 3, "");
  let s = m(e, "value", 3, ""), u = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "value",
    "children"
  ]), l;
  const c = _e("SMUI:select:selectedText"), d = _e("SMUI:select:value");
  se("SMUI:list:item:role", "option");
  const h = /* @__PURE__ */ ae(() => s() != null && s() !== "" && t() === s());
  it(f), Bn(f);
  function f() {
    o(h) && l && Jn(c, l.getPrimaryText());
  }
  function v() {
    return l.getElement();
  }
  var g = { getElement: v };
  xe(
    Uh(n, Ke(
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
        children: (y, _) => {
          var x = ie(), E = j(x);
          Ie(E, () => e.children ?? pe), w(y, x);
        },
        $$slots: { default: !0 }
      }
    )),
    (y) => l = y,
    () => l
  );
  var p = Ee(g);
  return i(), p;
}
function Yh(n, e) {
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
  Xh(n, {
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
      var f = ie(), v = j(f);
      vn(v, 17, t, mr, (g, p, y) => {
        {
          let _ = /* @__PURE__ */ ae(() => c(y));
          qh(g, {
            get onclick() {
              return o(_);
            },
            get value() {
              return o(p).value;
            },
            children: (x, E) => {
              var I = dt();
              de(() => Pe(I, o(p).label)), w(x, I);
            },
            $$slots: { default: !0 }
          });
        }
      }), w(d, f);
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
function Kh(n) {
  return n ? n.scrollHeight > n.offsetHeight : !1;
}
function Jh(n) {
  return n ? n.scrollTop === 0 : !1;
}
function Qh(n) {
  return n ? Math.ceil(n.scrollHeight - n.scrollTop) === n.clientHeight : !1;
}
function $h(n) {
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
var ev = (
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
}, fa = {
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
}, $s = {
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
var us;
(function(n) {
  n.POLL_SCROLL_POS = "poll_scroll_position", n.POLL_LAYOUT_CHANGE = "poll_layout_change";
})(us || (us = {}));
var tv = (
  /** @class */
  function(n) {
    mn(e, n);
    function e(t) {
      var r = n.call(this, Ze(Ze({}, e.defaultAdapter), t)) || this;
      return r.dialogOpen = !1, r.isFullscreen = !1, r.animationFrame = 0, r.animationTimer = 0, r.escapeKeyAction = fa.CLOSE_ACTION, r.scrimClickAction = fa.CLOSE_ACTION, r.autoStackButtons = !0, r.areButtonsStacked = !1, r.suppressDefaultPressSelector = fa.SUPPRESS_DEFAULT_PRESS_SELECTOR, r.animFrame = new ev(), r.contentScrollHandler = function() {
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
        return fa;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return $s;
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
        }, $s.DIALOG_ANIMATION_OPEN_TIME_MS);
      });
    }, e.prototype.close = function(t) {
      var r = this;
      t === void 0 && (t = ""), this.dialogOpen && (this.dialogOpen = !1, this.adapter.notifyClosing(t), this.adapter.addClass(Xe.CLOSING), this.adapter.removeClass(Xe.OPEN), this.adapter.removeBodyClass(Xe.SCROLL_LOCK), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), cancelAnimationFrame(this.animationFrame), this.animationFrame = 0, clearTimeout(this.animationTimer), this.animationTimer = setTimeout(function() {
        r.adapter.releaseFocus(), r.handleAnimationTimerEnd(), r.adapter.notifyClosed(t);
      }, $s.DIALOG_ANIMATION_CLOSE_TIME_MS));
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
      this.animFrame.request(us.POLL_LAYOUT_CHANGE, function() {
        t.layoutInternal();
      });
    }, e.prototype.handleClick = function(t) {
      var r = this.adapter.eventTargetMatches(t.target, fa.SCRIM_SELECTOR);
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
      this.animFrame.request(us.POLL_SCROLL_POS, function() {
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
  }(pn)
), nv = /* @__PURE__ */ z('<div class="mdc-dialog__surface-scrim"></div>'), rv = /* @__PURE__ */ z('<div><div><div><!> <!></div></div> <div class="mdc-dialog__scrim"></div></div> <!>', 1);
function iv(n, e) {
  Ae(e, !0);
  const t = () => pi(D, "$aboveFullscreenShown", r), [r, i] = Ai(), { FocusTrap: a } = Pf, { closest: s, matches: u } = Pa;
  let l = m(e, "use", 19, () => []), c = m(e, "class", 3, ""), d = m(e, "open", 15, !1), h = m(e, "selection", 3, !1), f = m(e, "escapeKeyAction", 3, "close"), v = m(e, "scrimClickAction", 3, "close"), g = m(e, "autoStackButtons", 3, !0), p = m(e, "fullscreen", 3, !1), y = m(e, "sheet", 3, !1), _ = m(e, "noContentPadding", 3, !1), x = m(e, "container$class", 3, ""), E = m(e, "surface$class", 3, ""), I = /* @__PURE__ */ ze(e, [
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
  ]), S, b = /* @__PURE__ */ oe(void 0), A = new na(), C = Ce({}), T, O = Un(!1), V = _e("SMUI:dialog:aboveFullscreen"), D = _e("SMUI:dialog:aboveFullscreenShown") ?? Un(!1), P = _e("SMUI:addLayoutListener"), ee, U = [], H = (N) => (U.push(N), () => {
    const k = U.indexOf(N);
    k >= 0 && U.splice(k, 1);
  });
  se("SMUI:dialog:actions:reversed", O), se("SMUI:addLayoutListener", H), se("SMUI:dialog:selection", h()), se("SMUI:dialog:aboveFullscreen", V || p()), se("SMUI:dialog:aboveFullscreenShown", D), y() && se("SMUI:icon-button:context", "dialog:sheet"), Se(() => {
    o(b) && o(b).getEscapeKeyAction() !== f() && o(b).setEscapeKeyAction(f());
  }), Se(() => {
    o(b) && o(b).getScrimClickAction() !== v() && o(b).setScrimClickAction(v());
  }), Se(() => {
    o(b) && o(b).getAutoStackButtons() !== g() && o(b).setAutoStackButtons(g());
  }), Se(() => {
    g() || Jn(O, !0);
  }), P && (ee = P(be)), Se(() => {
    o(b) && o(b).isOpen() !== d() && (d() ? o(b).open({ isAboveFullscreenDialog: !!V }) : o(b).close());
  });
  let F = t();
  Se(() => {
    p() && o(b) && F !== t() && (F = t(), t() ? o(b).showSurfaceScrim() : o(b).hideSurfaceScrim());
  }), it(() => (T = new a(S, { initialFocusEl: le() ?? void 0 }), B(
    b,
    new tv({
      addBodyClass: (N) => document.body.classList.add(N),
      addClass: ue,
      areButtonsStacked: () => $h(Y()),
      clickDefaultButton: () => {
        const N = K();
        N && N.click();
      },
      eventTargetMatches: (N, k) => N ? u(N, k) : !1,
      getActionFromEvent: (N) => {
        if (!N.target)
          return "";
        const k = s(N.target, "[data-mdc-dialog-action]");
        return k && k.getAttribute("data-mdc-dialog-action");
      },
      getInitialFocusEl: le,
      hasClass: X,
      isContentScrollable: () => Kh(ce()),
      notifyClosed: (N) => {
        d(!1), Ge(ye(), "SMUIDialogClosed", N ? { action: N } : {});
      },
      notifyClosing: (N) => Ge(ye(), "SMUIDialogClosing", N ? { action: N } : {}),
      notifyOpened: () => Ge(ye(), "SMUIDialogOpened", {}),
      notifyOpening: () => Ge(ye(), "SMUIDialogOpening", {}),
      releaseFocus: () => T.releaseFocus(),
      removeBodyClass: (N) => document.body.classList.remove(N),
      removeClass: M,
      reverseButtons: () => {
        Jn(O, !0);
      },
      trapFocus: () => T.trapFocus(),
      registerContentEventHandler: (N, k) => {
        const q = ce();
        q instanceof HTMLElement && A.on(q, N, k);
      },
      deregisterContentEventHandler: (N, k) => {
        const q = ce();
        q instanceof HTMLElement && A.off(q, N, k);
      },
      isScrollableContentAtTop: () => Jh(ce()),
      isScrollableContentAtBottom: () => Qh(ce()),
      registerWindowEventHandler: (N, k) => A.on(window, N, k),
      deregisterWindowEventHandler: (N, k) => A.off(window, N, k)
    }),
    !0
  ), o(b).init(), () => {
    var N;
    (N = o(b)) == null || N.destroy(), A.clear();
  })), Bn(() => {
    ee && ee();
  });
  function X(N) {
    return N in C ? C[N] : ye().classList.contains(N);
  }
  function ue(N) {
    C[N] || (C[N] = !0);
  }
  function M(N) {
    (!(N in C) || C[N]) && (C[N] = !1);
  }
  function Y() {
    return [].slice.call(ye().querySelectorAll(".mdc-dialog__button"));
  }
  function K() {
    return ye().querySelector("[data-mdc-dialog-button-default]");
  }
  function ce() {
    return ye().querySelector(".mdc-dialog__content");
  }
  function le() {
    return ye().querySelector("[data-mdc-dialog-initial-focus]");
  }
  function te() {
    V && Jn(D, !0), requestAnimationFrame(() => {
      U.forEach((N) => N());
    });
  }
  function ge() {
    U.forEach((N) => N());
  }
  function Z() {
    V && Jn(D, !1);
  }
  function fe() {
    return d();
  }
  function $(N) {
    d(N);
  }
  function be() {
    var N;
    return (N = o(b)) == null ? void 0 : N.layout();
  }
  function ye() {
    return S;
  }
  var Ue = { isOpen: fe, setOpen: $, layout: be, getElement: ye }, tt = rv();
  hn("resize", ss, () => d() && o(b) && o(b).layout()), hn("orientationchange", ss, () => d() && o(b) && o(b).layout()), hn("keydown", ko.body, (N) => o(b) && o(b).handleDocumentKeydown(N));
  var Ye = j(tt), Le = (N) => {
    var k;
    te(), (k = e.onSMUIDialogOpening) == null || k.call(e, N);
  }, at = (N) => {
    var k;
    ge(), (k = e.onSMUIDialogOpened) == null || k.call(e, N);
  }, Pt = (N) => {
    var k;
    Z(), (k = e.onSMUIDialogClosed) == null || k.call(e, N);
  }, Ft = (N) => {
    var k;
    o(b) && o(b).handleClick(N), (k = e.onclick) == null || k.call(e, N);
  }, R = (N) => {
    var k;
    o(b) && o(b).handleKeydown(N), (k = e.onkeydown) == null || k.call(e, N);
  };
  Be(
    Ye,
    (N, k) => ({
      class: N,
      role: "alertdialog",
      "aria-modal": "true",
      ...k,
      onSMUIDialogOpening: Le,
      onSMUIDialogOpened: at,
      onSMUIDialogClosed: Pt,
      onclick: Ft,
      onkeydown: R
    }),
    [
      () => He({
        "mdc-dialog": !0,
        "mdc-dialog--stacked": !g(),
        "mdc-dialog--fullscreen": p(),
        "mdc-dialog--sheet": y(),
        "mdc-dialog--no-content-padding": _(),
        "smui-dialog--selection": h(),
        ...C,
        [c()]: !0
      }),
      () => Ca(I, ["container$", "surface$"])
    ]
  );
  var W = G(Ye);
  Be(W, (N, k) => ({ class: N, ...k }), [
    () => He({ "mdc-dialog__container": !0, [x()]: !0 }),
    () => lt(I, "container$")
  ]);
  var he = G(W);
  Be(he, (N, k) => ({ class: N, role: "alertdialog", "aria-modal": "true", ...k }), [
    () => He({ "mdc-dialog__surface": !0, [E()]: !0 }),
    () => lt(I, "surface$")
  ]);
  var Me = G(he);
  Ie(Me, () => e.children ?? pe);
  var kt = J(Me, 2);
  {
    var un = (N) => {
      var k = nv();
      hn("transitionend", k, () => o(b) && o(b).handleSurfaceScrimTransitionEnd()), w(N, k);
    };
    Q(kt, (N) => {
      p() && N(un);
    });
  }
  xe(Ye, (N) => S = N, () => S), Oe(Ye, (N, k) => ne == null ? void 0 : ne(N, k), l);
  var nr = J(Ye, 2);
  Ie(nr, () => e.over ?? pe), w(n, tt);
  var me = Ee(Ue);
  return i(), me;
}
function av(n, e) {
  Ae(e, !0);
  let t = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return xe(
    ra(n, Ke(
      {
        _smuiClass: "mdc-dialog__header",
        _smuiContexts: { "SMUI:icon-button:context": "dialog:header" },
        tag: "div"
      },
      () => t,
      {
        children: (s, u) => {
          var l = ie(), c = j(l);
          Ie(c, () => e.children ?? pe), w(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Ee(a);
}
function Yd(n, e) {
  Ae(e, !0);
  let t = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return xe(
    ra(n, Ke({ _smuiClass: "mdc-dialog__content", tag: "div" }, () => t, {
      children: (s, u) => {
        var l = ie(), c = j(l);
        Ie(c, () => e.children ?? pe), w(s, l);
      },
      $$slots: { default: !0 }
    })),
    (s) => r = s,
    () => r
  ), Ee(a);
}
function sv(n, e) {
  Ae(e, !0);
  let t = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return xe(
    ra(n, Ke(
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
          var l = ie(), c = j(l);
          Ie(c, () => e.children ?? pe), w(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Ee(a);
}
const Os = Un({
  component: null,
  props: {},
  isOpen: !1
});
function ov(n, e) {
  Ae(e, !0);
  let t = /* @__PURE__ */ oe(void 0), r = /* @__PURE__ */ oe(!1);
  const i = Os.subscribe((l) => {
    B(t, l, !0), B(r, l.isOpen, !0);
  });
  it(() => () => i());
  var a = ie(), s = j(a);
  {
    var u = (l) => {
      var c = ie(), d = j(c);
      Ma(d, () => o(t).component, (h, f) => {
        f(h, Ke(() => o(t).props, {
          get open() {
            return o(r);
          },
          set open(v) {
            B(r, v, !0);
          }
        }));
      }), w(l, c);
    };
    Q(s, (l) => {
      o(t).isOpen && o(t).component && l(u);
    });
  }
  w(n, a), Ee();
}
function Rs(n, e = {}) {
  return new Promise((t) => {
    Os.set({
      component: n,
      props: e,
      isOpen: !0,
      resolve: t
    });
  });
}
function Fr(n, e) {
  Os.update((t) => {
    var r;
    return (r = t.resolve) == null || r.call(t, { type: n, data: e }), { component: null, props: {}, isOpen: !1 };
  });
}
function lv(n) {
  Os.update((e) => e.isOpen ? { ...e, props: { ...e.props, ...n } } : e);
}
var dv = /* @__PURE__ */ z('<div class="oscd-confirm-dialog__content svelte-1eipd40"> </div>');
function uv(n, e) {
  Ae(e, !0);
  let t = m(e, "open", 15, !1), r = m(e, "title", 3, ""), i = m(e, "message", 3, ""), a = m(e, "confirmActionText", 3, "OK"), s = m(e, "confirmActionColor", 3, "primary"), u = m(e, "cancelActionText", 3, "Cancel"), l = m(e, "color", 3, "var(--mdc-theme-primary, #ff3e00)");
  function c() {
    Fr("confirm");
  }
  function d() {
    Fr("cancel");
  }
  Wo(n, {
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
    onClose: () => Fr("cancel"),
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
      Yd(f, {
        children: (v, g) => {
          var p = dv(), y = G(p);
          de(() => Pe(y, i())), w(v, p);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { content: !0 }
  }), Ee();
}
var cv = /* @__PURE__ */ z('<div class="dialog__title svelte-ec2c4h"><h4 class="svelte-ec2c4h"> </h4> <!></div>'), fv = /* @__PURE__ */ z("<!> <!>", 1), hv = /* @__PURE__ */ z('<!> <!> <div class="dialog__actions svelte-ec2c4h"><!></div>', 1);
function Wo(n, e) {
  Ae(e, !0);
  let t = m(e, "open", 15, !1), r = m(e, "title", 3, ""), i = m(e, "confirmActionText", 3, "Confirm"), a = m(e, "confirmActionColor", 3, "primary"), s = m(e, "cancelActionText", 3, "Cancel"), u = m(e, "width", 3, "80vw"), l = m(e, "maxWidth", 3, "85vw"), c = m(e, "height", 3, "85vh"), d = m(e, "maxHeight", 3, "85vh"), h = m(e, "confirmDisabled", 3, !1), f = m(e, "color", 3, "var(--mdc-theme-primary, #ff3e00)"), v = m(e, "showCloseButton", 3, !0), g = m(e, "onClose", 3, () => {
  }), p = m(e, "onCancel", 3, () => {
  }), y = m(e, "onConfirm", 3, () => {
  });
  function _(E) {
    E.detail.action === "cancel" ? p()() : E.detail.action === "confirm" ? y()() : (E.detail.action, g()());
  }
  let x = /* @__PURE__ */ ae(() => {
    let E;
    return a() === "primary" ? E = f() : E = "#FF203A", h() ? "" : `background-color: ${E}; color: white;`;
  });
  {
    let E = /* @__PURE__ */ ae(() => `width: ${u()}; max-width: ${l()}; height: ${c()}; max-height: ${d()};`);
    iv(n, {
      "aria-labelledby": "large-scroll-title",
      "aria-describedby": "large-scroll-content",
      onSMUIDialogClosed: _,
      get surface$style() {
        return o(E);
      },
      get open() {
        return t();
      },
      set open(I) {
        t(I);
      },
      children: (I, S) => {
        var b = hv(), A = j(b);
        av(A, {
          children: (V, D) => {
            var P = cv(), ee = G(P), U = G(ee), H = J(ee, 2);
            {
              var F = (X) => {
                tu(X, {
                  onClick: () => {
                    t(!1), g()();
                  },
                  tooltip: "Close",
                  tooltipSide: "left",
                  type: "close",
                  fillColor: "white"
                });
              };
              Q(H, (X) => {
                v() && X(F);
              });
            }
            de(() => {
              et(P, `background-color: ${f()};`), Pe(U, r());
            }), w(V, P);
          },
          $$slots: { default: !0 }
        });
        var C = J(A, 2);
        Yd(C, {
          id: "dialog__content",
          children: (V, D) => {
            var P = ie(), ee = j(P);
            Ie(ee, () => e.content ?? pe), w(V, P);
          },
          $$slots: { default: !0 }
        });
        var T = J(C, 2), O = G(T);
        sv(O, {
          class: "oscd-dialog__actions",
          children: (V, D) => {
            var P = fv(), ee = j(P);
            {
              var U = (F) => {
                Hr(F, {
                  action: "cancel",
                  color: "secondary",
                  tabindex: "1",
                  children: (X, ue) => {
                    var M = dt();
                    de(() => Pe(M, s())), w(X, M);
                  },
                  $$slots: { default: !0 }
                });
              };
              Q(ee, (F) => {
                s() && F(U);
              });
            }
            var H = J(ee, 2);
            Hr(H, {
              action: "confirm",
              get disabled() {
                return h();
              },
              get style() {
                return o(x);
              },
              tabindex: "0",
              children: (F, X) => {
                var ue = dt();
                de(() => Pe(ue, i())), w(F, ue);
              },
              $$slots: { default: !0 }
            }), w(V, P);
          },
          $$slots: { default: !0 }
        }), w(I, b);
      },
      $$slots: { default: !0 }
    });
  }
  Ee();
}
var vv = /* @__PURE__ */ z('<span class="oscd-icon"><!></span>');
function Tt(n, e) {
  var t = vv(), r = G(t);
  Ie(r, () => e.children ?? pe), w(n, t);
}
var gv = /* @__PURE__ */ ct('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function mv(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Tt(n, {
    children: (r, i) => {
      var a = gv();
      de(() => et(a, t())), w(r, a);
    }
  });
}
var pv = /* @__PURE__ */ ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function Kd(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Tt(n, {
    children: (r, i) => {
      var a = pv();
      de(() => et(a, t())), w(r, a);
    }
  });
}
var Iv = /* @__PURE__ */ ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function Jd(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Tt(n, {
    children: (r, i) => {
      var a = Iv();
      de(() => et(a, t())), w(r, a);
    }
  });
}
var bv = /* @__PURE__ */ ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"></path></svg>');
function Qd(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Tt(n, {
    children: (r, i) => {
      var a = bv();
      de(() => et(a, t())), w(r, a);
    }
  });
}
var _v = /* @__PURE__ */ ct('<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM2 12c0-2.79 1.64-5.2 4.01-6.32V3.52C2.52 4.76 0 8.09 0 12s2.52 7.24 6.01 8.48v-2.16C3.64 17.2 2 14.79 2 12zm13-9c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"></path></svg>');
function yv(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Tt(n, {
    children: (r, i) => {
      var a = _v();
      de(() => et(a, t())), w(r, a);
    }
  });
}
ac();
var Cv = /* @__PURE__ */ ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24" height="24" fill="#004552"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"></path></svg>');
function Av(n) {
  var e = Cv();
  w(n, e);
}
var Ev = /* @__PURE__ */ ct('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#004552"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Sv(n) {
  var e = Ev();
  w(n, e);
}
var xv = /* @__PURE__ */ ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"></path></svg>');
function wv(n, e) {
  let t = m(e, "size", 3, "24px"), r = m(e, "fill", 3, "#004552");
  var i = xv();
  de(() => {
    Jt(i, "height", t()), Jt(i, "width", t()), Jt(i, "fill", r());
  }), w(n, i);
}
var Tv = /* @__PURE__ */ ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Dv(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Tt(n, {
    children: (r, i) => {
      var a = Tv();
      de(() => et(a, t())), w(r, a);
    }
  });
}
var Lv = /* @__PURE__ */ ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Ov(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Tt(n, {
    children: (r, i) => {
      var a = Lv();
      de(() => et(a, t())), w(r, a);
    }
  });
}
var Rv = /* @__PURE__ */ ct('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"></path></svg>');
function Mv(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Tt(n, {
    children: (r, i) => {
      var a = Rv();
      de(() => et(a, t())), w(r, a);
    }
  });
}
var Pv = /* @__PURE__ */ ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"></path></svg>');
function Fv(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Tt(n, {
    children: (r, i) => {
      var a = Pv();
      de(() => et(a, t())), w(r, a);
    }
  });
}
var kv = /* @__PURE__ */ ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"></path></svg>');
function Nv(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Tt(n, {
    children: (r, i) => {
      var a = kv();
      de(() => et(a, t())), w(r, a);
    }
  });
}
var Hv = /* @__PURE__ */ ct('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"><path d="m176-120-56-56 301-302-181-45 198-123-17-234 179 151 216-88-87 217 151 178-234-16-124 198-45-181-301 301Zm24-520-80-80 80-80 80 80-80 80Zm355 197 48-79 93 7-60-71 35-86-86 35-71-59 7 92-79 49 90 22 23 90Zm165 323-80-80 80-80 80 80-80 80ZM569-570Z"></path></svg>');
function Uv(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Tt(n, {
    children: (r, i) => {
      var a = Hv();
      de(() => et(a, t())), w(r, a);
    }
  });
}
var Bv = /* @__PURE__ */ ct('<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m770-302-60-62q40-11 65-42.5t25-73.5q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 57-29.5 105T770-302ZM634-440l-80-80h86v80h-6ZM792-56 56-792l56-56 736 736-56 56ZM440-280H280q-83 0-141.5-58.5T80-480q0-69 42-123t108-71l74 74h-24q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h65l79 80H320Z"></path></svg>');
function Gv(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Tt(n, {
    children: (r, i) => {
      var a = Bv();
      de(() => et(a, t())), w(r, a);
    }
  });
}
var Wv = /* @__PURE__ */ ct('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"></path></svg>');
function Vv(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Tt(n, {
    children: (r, i) => {
      var a = Wv();
      de(() => et(a, t())), w(r, a);
    }
  });
}
var Zv = /* @__PURE__ */ ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"></path></svg>');
function zv(n, e) {
  let t = m(e, "svgStyles", 8, "");
  Tt(n, {
    children: (r, i) => {
      var a = Zv();
      de(() => et(a, t())), w(r, a);
    }
  });
}
var jv = /* @__PURE__ */ ct('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3" cursor="pointer"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function $d(n, e) {
  let t = m(e, "svgStyles", 8, "");
  Tt(n, {
    children: (r, i) => {
      var a = jv();
      de(() => et(a, t())), w(r, a);
    }
  });
}
var Xv = /* @__PURE__ */ ct('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m320-160-56-57 103-103H80v-80h287L264-503l56-57 200 200-200 200Zm320-240L440-600l200-200 56 57-103 103h287v80H593l103 103-56 57Z"></path></svg>');
function qv(n, e) {
  let t = m(e, "svgStyles", 8, "");
  Tt(n, {
    children: (r, i) => {
      var a = Xv();
      de(() => et(a, t())), w(r, a);
    }
  });
}
var Yv = /* @__PURE__ */ ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M360-160q-33 0-56.5-23.5T280-240q0-33 23.5-56.5T360-320q33 0 56.5 23.5T440-240q0 33-23.5 56.5T360-160Zm240 0q-33 0-56.5-23.5T520-240q0-33 23.5-56.5T600-320q33 0 56.5 23.5T680-240q0 33-23.5 56.5T600-160ZM360-400q-33 0-56.5-23.5T280-480q0-33 23.5-56.5T360-560q33 0 56.5 23.5T440-480q0 33-23.5 56.5T360-400Zm240 0q-33 0-56.5-23.5T520-480q0-33 23.5-56.5T600-560q33 0 56.5 23.5T680-480q0 33-23.5 56.5T600-400ZM360-640q-33 0-56.5-23.5T280-720q0-33 23.5-56.5T360-800q33 0 56.5 23.5T440-720q0 33-23.5 56.5T360-640Zm240 0q-33 0-56.5-23.5T520-720q0-33 23.5-56.5T600-800q33 0 56.5 23.5T680-720q0 33-23.5 56.5T600-640Z"></path></svg>');
function Vo(n, e) {
  let t = m(e, "svgStyles", 3, "fill: gray; width: 25px; height: 25px");
  Tt(n, {
    children: (r, i) => {
      var a = Yv();
      de(() => et(a, t())), w(r, a);
    }
  });
}
Ct(["change"]);
Ct(["change"]);
var Kv = /* @__PURE__ */ z('<span role="tooltip" aria-labelledby="tooltip"><!></span>');
function eu(n, e) {
  Ae(e, !0);
  let t = m(e, "content", 3, ""), r = m(e, "side", 3, "top"), i = m(e, "hoverDelay", 3, 0), a = m(e, "transitionDuration", 3, 80);
  const s = `tt-${Math.random().toString(36).slice(2)}`;
  let u = /* @__PURE__ */ oe(null), l = /* @__PURE__ */ oe(null), c = /* @__PURE__ */ oe(null), d = /* @__PURE__ */ oe(null), h = /* @__PURE__ */ oe(!1), f = /* @__PURE__ */ oe(null), v = /* @__PURE__ */ oe(null);
  function g() {
    t() && (i() > 0 ? B(f, setTimeout(() => B(h, !0), i()), !0) : B(h, !0));
  }
  function p() {
    o(f) && clearTimeout(o(f)), B(h, !1);
  }
  function y() {
    if (!o(l) || !o(d) || !o(u)) return;
    const I = o(u).getBoundingClientRect(), S = o(d).getBoundingClientRect();
    let b = 0, A = 0;
    const C = 8;
    switch (r()) {
      case "top":
        b = I.top - S.height - C, A = I.left + I.width / 2 - S.width / 2;
        break;
      case "bottom":
        b = I.bottom + C, A = I.left + I.width / 2 - S.width / 2;
        break;
      case "left":
        b = I.top + I.height / 2 - S.height / 2, A = I.left - S.width - C;
        break;
      case "right":
        b = I.top + I.height / 2 - S.height / 2, A = I.right + C;
        break;
    }
    o(l).style.top = `${b + window.scrollY}px`, o(l).style.left = `${A + window.scrollX}px`;
  }
  function _() {
    var I;
    (I = o(v)) == null || I.disconnect(), B(v, null), o(l) && o(l).parentNode && o(l).parentNode.removeChild(o(l)), B(l, null), B(d, null), B(c, null), o(f) && clearTimeout(o(f));
  }
  Bn(_), Se(() => {
    if (!(!o(h) || !t())) {
      if (!o(l)) {
        B(l, document.createElement("div"), !0), o(l).style.position = "absolute", o(l).style.zIndex = "9999", o(l).style.pointerEvents = "none", o(l).style.opacity = "0", o(l).style.transition = `opacity ${a()}ms ease`, o(l).id = s, o(l).setAttribute("role", "tooltip"), document.body.appendChild(o(l)), B(c, o(l).attachShadow({ mode: "open" }), !0);
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
      `, o(c).appendChild(I), B(d, document.createElement("div"), !0), o(c).appendChild(o(d)), B(
          v,
          new MutationObserver(() => {
            o(h) && y();
          }),
          !0
        ), o(v).observe(document.body, { childList: !0, subtree: !0 });
      }
      o(d) && (o(d).className = `bubble ${r()}`, o(d).innerHTML = t()), o(l) && (o(l).style.opacity = "1", y());
    }
  }), Se(() => {
    if (o(h) || !o(l))
      return;
    o(l).style.opacity = "0";
    const I = o(l), S = setTimeout(
      () => {
        I && I.parentNode && I.parentNode.removeChild(I), o(l) === I && _();
      },
      a()
    );
    return () => clearTimeout(S);
  });
  var x = Kv(), E = G(x);
  Ie(E, () => e.children ?? pe), xe(x, (I) => B(u, I), () => o(u)), de(() => Jt(x, "aria-describedby", t() ? s : void 0)), hn("mouseenter", x, g), hn("mouseleave", x, p), w(n, x), Ee();
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
var dr = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, Ll = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, ei = {
  ARIA_SELECTED: Ll.ARIA_SELECTED,
  ARIA_SORT: Ll.ARIA_SORT
}, fn;
(function(n) {
  n.ASCENDING = "ascending", n.DESCENDING = "descending", n.NONE = "none", n.OTHER = "other";
})(fn || (fn = {}));
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
var Jv = (
  /** @class */
  function(n) {
    mn(e, n);
    function e(t) {
      return n.call(this, Ze(Ze({}, e.defaultAdapter), t)) || this;
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
      return Af(this, void 0, void 0, function() {
        return Ef(this, function(t) {
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
        s !== i && (this.adapter.removeClassNameByHeaderCellIndex(s, dr.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(s, dr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(s, ei.ARIA_SORT, fn.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(s, fn.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, dr.HEADER_CELL_SORTED);
      var u = this.adapter.getAttributeByHeaderCellIndex(i, ei.ARIA_SORT), l = fn.NONE;
      u === fn.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, dr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, ei.ARIA_SORT, fn.DESCENDING), l = fn.DESCENDING) : u === fn.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, dr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, ei.ARIA_SORT, fn.ASCENDING), l = fn.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, ei.ARIA_SORT, fn.ASCENDING), l = fn.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, l), this.adapter.notifySortAction({
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
      }), this.adapter.addClass(dr.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(dr.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(t, r) {
      r ? (this.adapter.addClassAtRowIndex(t, dr.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, ei.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(t, dr.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, ei.ARIA_SELECTED, "false"));
    }, e;
  }(pn)
), Qv = /* @__PURE__ */ z('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), $v = /* @__PURE__ */ z("<div><div><table><!></table></div> <!> <!></div>");
function eg(n, e) {
  Ae(e, !0);
  const t = () => pi(P, "$progressClosed", r), [r, i] = Ai(), { closest: a } = Pa;
  let s = m(e, "use", 19, () => []), u = m(e, "class", 3, ""), l = m(e, "stickyHeader", 3, !1), c = m(e, "sortable", 3, !1), d = m(e, "sort", 15, null), h = m(e, "sortDirection", 15, "ascending"), f = m(e, "sortAscendingAriaLabel", 3, "sorted, ascending"), v = m(e, "sortDescendingAriaLabel", 3, "sorted, descending"), g = m(e, "container$use", 19, () => []), p = m(e, "container$class", 3, ""), y = m(e, "table$use", 19, () => []), _ = m(e, "table$class", 3, ""), x = /* @__PURE__ */ ze(e, [
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
  ]), E, I = /* @__PURE__ */ oe(void 0), S, b = /* @__PURE__ */ oe(void 0), A = /* @__PURE__ */ oe(void 0), C = Ce({}), T = /* @__PURE__ */ oe(Ce({ height: "auto", top: "initial" })), O = _e("SMUI:addLayoutListener"), V, D = !1, P = Un(!1), ee = Un(d());
  Se(() => {
    Jn(ee, d());
  });
  let U = Un(h());
  Se(() => {
    Jn(U, h());
  }), se("SMUI:checkbox:context", "data-table"), se("SMUI:linear-progress:context", "data-table"), se("SMUI:linear-progress:closed", P), se("SMUI:data-table:sortable", c()), se("SMUI:data-table:sort", ee), se("SMUI:data-table:sortDirection", U), se("SMUI:data-table:sortAscendingAriaLabel", f()), se("SMUI:data-table:sortDescendingAriaLabel", v()), O && (V = O(le));
  let H;
  Se(() => {
    e.progress && o(I) && H !== t() && (H = t(), t() ? o(I).hideProgress() : o(I).showProgress());
  }), se("SMUI:checkbox:mount", () => {
    o(I) && D && o(I).layout();
  }), se("SMUI:data-table:header:mount", (R) => {
    B(b, R, !0);
  }), se("SMUI:data-table:header:unmount", () => {
    B(b, void 0);
  }), se("SMUI:data-table:body:mount", (R) => {
    B(A, R, !0);
  }), se("SMUI:data-table:body:unmount", () => {
    B(A, void 0);
  }), it(() => (B(
    I,
    new Jv({
      addClass: X,
      removeClass: ue,
      getHeaderCellElements: () => {
        var R;
        return ((R = o(b)) == null ? void 0 : R.cells.map((W) => W.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var R;
        return ((R = o(b)) == null ? void 0 : R.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (R, W) => {
        var he;
        return ((he = o(b)) == null ? void 0 : he.orderedCells[R].getAttr(W)) ?? null;
      },
      setAttributeByHeaderCellIndex: (R, W, he) => {
        var Me;
        (Me = o(b)) == null || Me.orderedCells[R].addAttr(W, he);
      },
      setClassNameByHeaderCellIndex: (R, W) => {
        var he;
        (he = o(b)) == null || he.orderedCells[R].addClass(W);
      },
      removeClassNameByHeaderCellIndex: (R, W) => {
        var he;
        (he = o(b)) == null || he.orderedCells[R].removeClass(W);
      },
      notifySortAction: (R) => {
        d(R.columnId), h(R.sortValue), Ge(te(), "SMUIDataTableSorted", R);
      },
      getTableContainerHeight: () => S.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const R = te().querySelector(".mdc-data-table__header-row");
        if (!R)
          throw new Error("MDCDataTable: Table header element not found.");
        return R.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (R) => {
        B(T, R, !0);
      },
      addClassAtRowIndex: (R, W) => {
        var he;
        (he = o(A)) == null || he.orderedRows[R].addClass(W);
      },
      getRowCount: () => {
        var R;
        return ((R = o(A)) == null ? void 0 : R.rows.length) ?? 0;
      },
      getRowElements: () => {
        var R;
        return ((R = o(A)) == null ? void 0 : R.rows.map((W) => W.element)) ?? [];
      },
      getRowIdAtIndex: (R) => {
        var W;
        return ((W = o(A)) == null ? void 0 : W.orderedRows[R].rowId) ?? null;
      },
      getRowIndexByChildElement: (R) => {
        var W;
        return ((W = o(A)) == null ? void 0 : W.orderedRows.map((he) => he.element).indexOf(a(R, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var R;
        return ((R = o(A)) == null ? void 0 : R.rows.filter((W) => W.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (R) => {
        var he;
        const W = (he = o(A)) == null ? void 0 : he.orderedRows[R].checkbox;
        return W ? W.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var W;
        const R = (W = o(b)) == null ? void 0 : W.checkbox;
        return R ? R.checked : !1;
      },
      isRowsSelectable: () => !!te().querySelector(".mdc-data-table__row-checkbox") || !!te().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (R) => {
        var he;
        const W = (he = o(A)) == null ? void 0 : he.orderedRows[R.rowIndex];
        W && Ge(te(), "SMUIDataTableSelectionChanged", {
          row: W.element,
          rowId: W.rowId,
          rowIndex: R.rowIndex,
          selected: R.selected
        });
      },
      notifySelectedAll: () => {
        M(!1), Ge(te(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        M(!1), Ge(te(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (R) => Ge(te(), "SMUIDataTableClickRow", R),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (R, W) => {
        var he;
        (he = o(A)) == null || he.orderedRows[R].removeClass(W);
      },
      setAttributeAtRowIndex: (R, W, he) => {
        var Me;
        (Me = o(A)) == null || Me.orderedRows[R].addAttr(W, he);
      },
      setHeaderRowCheckboxChecked: (R) => {
        var he;
        const W = (he = o(b)) == null ? void 0 : he.checkbox;
        W && (W.checked = R);
      },
      setHeaderRowCheckboxIndeterminate: M,
      setRowCheckboxCheckedAtIndex: (R, W) => {
        var Me;
        const he = (Me = o(A)) == null ? void 0 : Me.orderedRows[R].checkbox;
        he && (he.checked = W);
      },
      setSortStatusLabelByHeaderCellIndex: (R, W) => {
      }
    }),
    !0
  ), o(I).init(), o(I).layout(), D = !0, () => {
    var R;
    (R = o(I)) == null || R.destroy();
  })), Bn(() => {
    V && V();
  });
  function F(R) {
    o(I) && o(I).handleRowCheckboxChange(R);
  }
  function X(R) {
    C[R] || (C[R] = !0);
  }
  function ue(R) {
    (!(R in C) || C[R]) && (C[R] = !1);
  }
  function M(R) {
    var he;
    const W = (he = o(b)) == null ? void 0 : he.checkbox;
    W && (W.indeterminate = R);
  }
  function Y(R) {
    if (!o(I) || !R.detail.target)
      return;
    const W = a(R.detail.target, ".mdc-data-table__header-cell--with-sort");
    W && ce(W);
  }
  function K(R) {
    if (!o(I) || !R.detail.target)
      return;
    const W = a(R.detail.target, ".mdc-data-table__row");
    W && o(I) && o(I).handleRowClick({ rowId: R.detail.rowId, row: W });
  }
  function ce(R) {
    var kt, un;
    const W = ((kt = o(b)) == null ? void 0 : kt.orderedCells) ?? [], he = W.map((nr) => nr.element).indexOf(R);
    if (he === -1)
      return;
    const Me = W[he].columnId ?? null;
    (un = o(I)) == null || un.handleSortAction({ columnId: Me, columnIndex: he, headerCell: R });
  }
  function le() {
    var R;
    return (R = o(I)) == null ? void 0 : R.layout();
  }
  function te() {
    return E;
  }
  var ge = { layout: le, getElement: te }, Z = $v(), fe = (R) => {
    var W;
    o(I) && o(I).handleHeaderRowCheckboxChange(), (W = e.onSMUIDataTableHeaderCheckboxChange) == null || W.call(e, R);
  }, $ = (R) => {
    var W;
    Y(R), (W = e.onSMUIDataTableHeaderClick) == null || W.call(e, R);
  }, be = (R) => {
    var W;
    K(R), (W = e.onSMUIDataTableRowClick) == null || W.call(e, R);
  }, ye = (R) => {
    var W;
    F(R), (W = e.onSMUIDataTableBodyCheckboxChange) == null || W.call(e, R);
  };
  Be(
    Z,
    (R, W) => ({
      class: R,
      ...W,
      onSMUIDataTableHeaderCheckboxChange: fe,
      onSMUIDataTableHeaderClick: $,
      onSMUIDataTableRowClick: be,
      onSMUIDataTableBodyCheckboxChange: ye
    }),
    [
      () => He({
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": l(),
        ...C,
        [u()]: !0
      }),
      () => Ca(x, ["container$", "table$"])
    ]
  );
  var Ue = G(Z);
  Be(Ue, (R, W) => ({ class: R, ...W }), [
    () => He({
      "mdc-data-table__table-container": !0,
      [p()]: !0
    }),
    () => lt(x, "container$")
  ]);
  var tt = G(Ue);
  Be(tt, (R, W) => ({ class: R, ...W }), [
    () => He({ "mdc-data-table__table": !0, [_()]: !0 }),
    () => lt(x, "table$")
  ]);
  var Ye = G(tt);
  Ie(Ye, () => e.children ?? pe), Oe(tt, (R, W) => ne == null ? void 0 : ne(R, W), y), xe(Ue, (R) => S = R, () => S), Oe(Ue, (R, W) => ne == null ? void 0 : ne(R, W), g);
  var Le = J(Ue, 2);
  {
    var at = (R) => {
      var W = Qv(), he = J(G(W), 2);
      Ie(he, () => e.progress ?? pe), de((Me) => et(W, Me), [
        () => Object.entries(o(T)).map(([Me, kt]) => `${Me}: ${kt};`).join(" ")
      ]), w(R, W);
    };
    Q(Le, (R) => {
      e.progress && R(at);
    });
  }
  var Pt = J(Le, 2);
  Ie(Pt, () => e.paginate ?? pe), xe(Z, (R) => E = R, () => E), Oe(Z, (R, W) => ne == null ? void 0 : ne(R, W), s), w(n, Z);
  var Ft = Ee(ge);
  return i(), Ft;
}
var tg = /* @__PURE__ */ z("<thead><!></thead>");
function ng(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i, a = /* @__PURE__ */ oe(void 0), s = [];
  const u = /* @__PURE__ */ new WeakMap();
  se("SMUI:data-table:row:header", !0);
  const l = _e("SMUI:checkbox:mount");
  se("SMUI:checkbox:mount", (_) => {
    B(a, _, !0), l && l(_);
  });
  const c = _e("SMUI:checkbox:unmount");
  se("SMUI:checkbox:unmount", (_) => {
    B(a, void 0), c && c(_);
  }), se("SMUI:data-table:cell:mount", (_) => {
    s.push(_), u.set(_.element, _);
  }), se("SMUI:data-table:cell:unmount", (_) => {
    const x = s.findIndex((E) => E === _);
    x !== -1 && s.splice(x, 1), u.delete(_.element);
  });
  const d = _e("SMUI:data-table:header:mount"), h = _e("SMUI:data-table:header:unmount");
  it(() => {
    const _ = {
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
    return d && d(_), () => {
      h && h(_);
    };
  });
  function f() {
    return [
      ...v().querySelectorAll(".mdc-data-table__header-cell")
    ].map((_) => u.get(_)).filter((_) => _ && _._smui_data_table_header_cell_accessor);
  }
  function v() {
    return i;
  }
  var g = { getElement: v }, p = tg();
  Be(p, () => ({ ...r }));
  var y = G(p);
  return Ie(y, () => e.children ?? pe), xe(p, (_) => i = _, () => i), Oe(p, (_, x) => ne == null ? void 0 : ne(_, x), t), w(n, p), Ee(g);
}
var rg = /* @__PURE__ */ z("<tbody><!></tbody>");
function ig(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "children"
  ]), a, s = [];
  const u = /* @__PURE__ */ new WeakMap();
  se("SMUI:data-table:row:header", !1), se("SMUI:data-table:row:mount", (p) => {
    s.push(p), u.set(p.element, p);
  }), se("SMUI:data-table:row:unmount", (p) => {
    const y = s.findIndex((_) => _ === p);
    y !== -1 && s.splice(y, 1), u.delete(p.element);
  });
  const l = _e("SMUI:data-table:body:mount"), c = _e("SMUI:data-table:body:unmount");
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
    return [...h().querySelectorAll(".mdc-data-table__row")].map((p) => u.get(p)).filter((p) => p && p._smui_data_table_row_accessor);
  }
  function h() {
    return a;
  }
  var f = { getElement: h }, v = rg();
  Be(v, (p) => ({ class: p, ...i }), [
    () => He({ "mdc-data-table__content": !0, [r()]: !0 })
  ]);
  var g = G(v);
  return Ie(g, () => e.children ?? pe), xe(v, (p) => a = p, () => a), Oe(v, (p, y) => ne == null ? void 0 : ne(p, y), t), w(n, v), Ee(f);
}
let ag = 0;
var sg = /* @__PURE__ */ z("<tr><!></tr>");
function Ol(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "rowId", 19, () => "SMUI-data-table-row-" + ag++), a = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "rowId",
    "children"
  ]), s, u = /* @__PURE__ */ oe(void 0), l = Ce({}), c = Ce({}), d = _e("SMUI:data-table:row:header");
  const h = _e("SMUI:checkbox:mount");
  se("SMUI:checkbox:mount", (O) => {
    B(u, O, !0), h && h(O);
  });
  const f = _e("SMUI:checkbox:unmount");
  se("SMUI:checkbox:unmount", (O) => {
    B(u, void 0), f && f(O);
  });
  const v = _e("SMUI:data-table:row:mount"), g = _e("SMUI:data-table:row:unmount");
  it(() => {
    const O = d ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return S();
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
      removeClass: y,
      getAttr: _,
      addAttr: x
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return S();
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
      removeClass: y,
      getAttr: _,
      addAttr: x
    };
    return v && v(O), () => {
      g && g(O);
    };
  });
  function p(O) {
    l[O] || (l[O] = !0);
  }
  function y(O) {
    (!(O in l) || l[O]) && (l[O] = !1);
  }
  function _(O) {
    return O in c ? c[O] ?? null : S().getAttribute(O);
  }
  function x(O, V) {
    c[O] !== V && (c[O] = V);
  }
  function E(O) {
    Ge(S(), "SMUIDataTableHeaderClick", O);
  }
  function I(O) {
    Ge(S(), "SMUIDataTableRowClick", { rowId: i(), target: O.target });
  }
  function S() {
    return s;
  }
  var b = { getElement: S }, A = sg(), C = (O) => {
    var V;
    d ? E(O) : I(O), (V = e.onclick) == null || V.call(e, O);
  };
  Be(
    A,
    (O) => ({
      class: O,
      "aria-selected": o(u) ? o(u).checked ? "true" : "false" : void 0,
      ...c,
      ...a,
      onclick: C
    }),
    [
      () => He({
        "mdc-data-table__header-row": d,
        "mdc-data-table__row": !d,
        "mdc-data-table__row--selected": !d && o(u) && o(u).checked,
        ...l,
        [r()]: !0
      })
    ]
  );
  var T = G(A);
  return Ie(T, () => e.children ?? pe), xe(A, (O) => s = O, () => s), Oe(A, (O, V) => ne == null ? void 0 : ne(O, V), t), w(n, A), Ee(b);
}
let og = 0;
var lg = /* @__PURE__ */ z('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), dg = /* @__PURE__ */ z("<th><!></th>"), ug = /* @__PURE__ */ z("<td><!></td>");
function Xa(n, e) {
  Ae(e, !0);
  const t = () => pi(_, "$sort", i), r = () => pi(x, "$sortDirection", i), [i, a] = Ai();
  let s = _e("SMUI:data-table:row:header"), u = m(e, "use", 19, () => []), l = m(e, "class", 3, ""), c = m(e, "numeric", 3, !1), d = m(e, "checkbox", 3, !1), h = m(e, "columnId", 19, () => s ? "SMUI-data-table-column-" + og++ : "SMUI-data-table-unused"), f = m(e, "sortable", 19, () => _e("SMUI:data-table:sortable")), v = /* @__PURE__ */ ze(e, [
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
  ]), g, p = Ce({}), y = Ce({}), _ = _e("SMUI:data-table:sort"), x = _e("SMUI:data-table:sortDirection"), E = _e("SMUI:data-table:sortAscendingAriaLabel"), I = _e("SMUI:data-table:sortDescendingAriaLabel");
  f() && (se("SMUI:label:context", "data-table:sortable-header-cell"), se("SMUI:icon-button:context", "data-table:sortable-header-cell"), se("SMUI:icon-button:aria-describedby", h() + "-status-label"));
  const S = _e("SMUI:data-table:cell:mount"), b = _e("SMUI:data-table:cell:unmount");
  it(() => {
    const M = s ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return P();
      },
      get columnId() {
        return h();
      },
      addClass: A,
      removeClass: C,
      getAttr: T,
      addAttr: O
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return P();
      },
      get columnId() {
      },
      addClass: A,
      removeClass: C,
      getAttr: T,
      addAttr: O
    };
    return S && S(M), () => {
      b && b(M);
    };
  });
  function A(M) {
    p[M] || (p[M] = !0);
  }
  function C(M) {
    (!(M in p) || p[M]) && (p[M] = !1);
  }
  function T(M) {
    return M in y ? y[M] ?? null : P().getAttribute(M);
  }
  function O(M, Y) {
    y[M] !== Y && (y[M] = Y);
  }
  function V(M) {
    Ge(P(), "SMUIDataTableHeaderCheckboxChange", M);
  }
  function D(M) {
    Ge(P(), "SMUIDataTableBodyCheckboxChange", M);
  }
  function P() {
    return g;
  }
  var ee = { getElement: P }, U = ie(), H = j(U);
  {
    var F = (M) => {
      var Y = dg(), K = (ge) => {
        var Z;
        d() && V(ge), (Z = e.onchange) == null || Z.call(e, ge);
      };
      Be(
        Y,
        (ge) => ({
          class: ge,
          role: "columnheader",
          scope: "col",
          "data-column-id": h(),
          "aria-sort": f() ? t() === h() ? r() : "none" : void 0,
          ...y,
          ...v,
          onchange: K
        }),
        [
          () => He({
            "mdc-data-table__header-cell": !0,
            "mdc-data-table__header-cell--numeric": c(),
            "mdc-data-table__header-cell--checkbox": d(),
            "mdc-data-table__header-cell--with-sort": f(),
            "mdc-data-table__header-cell--sorted": f() && t() === h(),
            ...p,
            [l()]: !0
          })
        ]
      );
      var ce = G(Y);
      {
        var le = (ge) => {
          var Z = lg(), fe = G(Z);
          Ie(fe, () => e.children ?? pe);
          var $ = J(fe, 2), be = G($);
          de(() => {
            Jt($, "id", `${h() ?? ""}-status-label`), Pe(be, t() === h() ? r() === "ascending" ? E : I : "");
          }), w(ge, Z);
        }, te = (ge) => {
          var Z = ie(), fe = j(Z);
          Ie(fe, () => e.children ?? pe), w(ge, Z);
        };
        Q(ce, (ge) => {
          f() ? ge(le) : ge(te, !1);
        });
      }
      xe(Y, (ge) => g = ge, () => g), Oe(Y, (ge, Z) => ne == null ? void 0 : ne(ge, Z), u), w(M, Y);
    }, X = (M) => {
      var Y = ug(), K = (le) => {
        var te;
        d() && D(le), (te = e.onchange) == null || te.call(e, le);
      };
      Be(
        Y,
        (le) => ({
          class: le,
          ...y,
          ...v,
          onchange: K
        }),
        [
          () => He({
            "mdc-data-table__cell": !0,
            "mdc-data-table__cell--numeric": c(),
            "mdc-data-table__cell--checkbox": d(),
            ...p,
            [l()]: !0
          })
        ]
      );
      var ce = G(Y);
      Ie(ce, () => e.children ?? pe), xe(Y, (le) => g = le, () => g), Oe(Y, (le, te) => ne == null ? void 0 : ne(le, te), u), w(M, Y);
    };
    Q(H, (M) => {
      s ? M(F) : M(X, !1);
    });
  }
  w(n, U);
  var ue = Ee(ee);
  return a(), ue;
}
var cg = /* @__PURE__ */ z('<p class="status svelte-185z1ay">Loading…</p>'), fg = /* @__PURE__ */ z('<p class="status error svelte-185z1ay"> </p>'), hg = /* @__PURE__ */ z('<p class="status svelte-185z1ay"> </p>'), vg = /* @__PURE__ */ z("<!> <!>", 1), gg = /* @__PURE__ */ z("<!> <!>", 1), mg = /* @__PURE__ */ z("<!> <!>", 1);
function pg(n, e) {
  Ae(e, !0);
  let t = /* @__PURE__ */ oe(null), r = m(e, "items", 19, () => []), i = m(e, "columns", 19, () => []), a = m(e, "loading", 3, !1), s = m(e, "errorMsg", 3, ""), u = m(e, "emptyText", 3, "Nothing to show."), l = m(e, "getRowId", 3, (_, x) => (_ && (_.id ?? _.key)) ?? x), c = m(e, "headerBg", 3, null), d = m(e, "rowBg", 3, null), h = m(e, "hasActions", 3, !1), f = /* @__PURE__ */ ae(() => h() || !!e.actions);
  var v = ie(), g = j(v);
  {
    var p = (_) => {
      var x = cg();
      w(_, x);
    }, y = (_) => {
      var x = ie(), E = j(x);
      {
        var I = (b) => {
          var A = fg(), C = G(A);
          de(() => Pe(C, s())), w(b, A);
        }, S = (b) => {
          var A = ie(), C = j(A);
          {
            var T = (V) => {
              var D = hg(), P = G(D);
              de(() => Pe(P, u())), w(V, D);
            }, O = (V) => {
              eg(V, {
                style: "width: 100%;",
                children: (D, P) => {
                  var ee = mg(), U = j(ee);
                  {
                    let F = /* @__PURE__ */ ae(() => c() ? `background-color:${c()}` : void 0);
                    ng(U, {
                      get style() {
                        return o(F);
                      },
                      children: (X, ue) => {
                        Ol(X, {
                          children: (M, Y) => {
                            var K = vg(), ce = j(K);
                            vn(ce, 17, i, mr, (ge, Z) => {
                              {
                                let fe = /* @__PURE__ */ ae(() => [
                                  o(Z).width ? `width:${o(Z).width}` : "",
                                  c() ? `background-color:${c()}` : ""
                                ].filter(Boolean).join(";"));
                                Xa(ge, {
                                  header: !0,
                                  get style() {
                                    return o(fe);
                                  },
                                  children: ($, be) => {
                                    var ye = dt();
                                    de(() => Pe(ye, o(Z).header)), w($, ye);
                                  },
                                  $$slots: { default: !0 }
                                });
                              }
                            });
                            var le = J(ce, 2);
                            {
                              var te = (ge) => {
                                {
                                  let Z = /* @__PURE__ */ ae(() => c() ? `background-color:${c()}` : void 0);
                                  Xa(ge, {
                                    header: !0,
                                    get style() {
                                      return o(Z);
                                    }
                                  });
                                }
                              };
                              Q(le, (ge) => {
                                o(f) && ge(te);
                              });
                            }
                            w(M, K);
                          },
                          $$slots: { default: !0 }
                        });
                      },
                      $$slots: { default: !0 }
                    });
                  }
                  var H = J(U, 2);
                  ig(H, {
                    children: (F, X) => {
                      var ue = ie(), M = j(ue);
                      vn(M, 19, r, (Y, K) => l()(Y, K), (Y, K, ce) => {
                        {
                          let le = /* @__PURE__ */ ae(() => [
                            d() ? `background-color:${d()}` : "",
                            o(t) === l()(o(K), o(ce)) ? "background-color:#D9D800" : ""
                          ].filter(Boolean).join(";"));
                          Ol(Y, {
                            get style() {
                              return o(le);
                            },
                            $$events: {
                              mouseenter: () => B(t, l()(o(K), o(ce)), !0),
                              mouseleave: () => B(t, null)
                            },
                            children: (te, ge) => {
                              var Z = gg(), fe = j(Z);
                              vn(fe, 17, i, mr, (ye, Ue) => {
                                Xa(ye, {
                                  children: (tt, Ye) => {
                                    var Le = dt();
                                    de(() => {
                                      var at;
                                      return Pe(Le, ((at = o(K)) == null ? void 0 : at[o(Ue).key]) ?? "");
                                    }), w(tt, Le);
                                  },
                                  $$slots: { default: !0 }
                                });
                              });
                              var $ = J(fe, 2);
                              {
                                var be = (ye) => {
                                  Xa(ye, {
                                    numeric: !0,
                                    children: (Ue, tt) => {
                                      var Ye = ie(), Le = j(Ye);
                                      Ie(Le, () => e.actions ?? pe, () => ({ item: o(K) })), w(Ue, Ye);
                                    },
                                    $$slots: { default: !0 }
                                  });
                                };
                                Q($, (ye) => {
                                  o(f) && ye(be);
                                });
                              }
                              w(te, Z);
                            },
                            $$slots: { default: !0 }
                          });
                        }
                      }), w(F, ue);
                    },
                    $$slots: { default: !0 }
                  }), w(D, ee);
                },
                $$slots: { default: !0 }
              });
            };
            Q(
              C,
              (V) => {
                !r() || r().length === 0 ? V(T) : V(O, !1);
              },
              !0
            );
          }
          w(b, A);
        };
        Q(
          E,
          (b) => {
            s() ? b(I) : b(S, !1);
          },
          !0
        );
      }
      w(_, x);
    };
    Q(g, (_) => {
      a() ? _(p) : _(y, !1);
    });
  }
  w(n, v), Ee();
}
var Ig = /* @__PURE__ */ ct('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"></path></svg>');
function bg(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Tt(n, {
    children: (r, i) => {
      var a = Ig();
      de(() => et(a, t())), w(r, a);
    }
  });
}
var _g = /* @__PURE__ */ z('<span class="secondary-label svelte-17mxdlc"> </span>'), yg = /* @__PURE__ */ z('<div class="seperator svelte-17mxdlc"><!></div>'), Cg = /* @__PURE__ */ z('<div class="breadcrumb-wrapper svelte-17mxdlc"><button type="button"><span class="label svelte-17mxdlc"> </span> <!></button> <!></div>'), Ag = /* @__PURE__ */ z('<nav class="oscd-breadcrumbs svelte-17mxdlc" aria-label="Breadcrumb"></nav>');
function Eg(n, e) {
  Ae(e, !0);
  let t = m(e, "breadcrumbs", 19, () => []), r = m(e, "activeIndex", 3, 0);
  const i = (s) => {
    var l;
    const u = t()[s];
    !(u != null && u.enabled) || s === r() || (l = e.handleClick) == null || l.call(e, s);
  };
  var a = Ag();
  vn(a, 21, t, mr, (s, u, l) => {
    var c = Cg(), d = G(c);
    let h;
    d.__click = () => i(l);
    let f;
    var v = G(d), g = G(v), p = J(v, 2);
    {
      var y = (E) => {
        var I = _g();
        let S;
        var b = G(I);
        de(
          (A) => {
            S = et(I, "", S, A), Pe(b, o(u).secondaryLabel);
          },
          [() => ({ color: e.color ? e.color : null })]
        ), w(E, I);
      };
      Q(p, (E) => {
        o(u).secondaryLabel && E(y);
      });
    }
    var _ = J(d, 2);
    {
      var x = (E) => {
        var I = yg(), S = G(I);
        {
          let b = /* @__PURE__ */ ae(() => e.color ? e.color : "#004552");
          bg(S, {
            get svgStyles() {
              return `fill: ${o(b) ?? ""}`;
            }
          });
        }
        w(E, I);
      };
      Q(_, (E) => {
        l < t().length - 1 && E(x);
      });
    }
    de(
      (E, I) => {
        h = pr(d, 1, "breadcrumb svelte-17mxdlc", null, h, E), Jt(d, "aria-current", l === r() ? "page" : void 0), f = et(d, "", f, I), Pe(g, o(u).label);
      },
      [
        () => ({
          "br-disabled": !o(u).enabled,
          "br-active": l === r()
        }),
        () => ({ color: e.color ? e.color : null })
      ]
    ), w(s, c);
  }), w(n, a), Ee();
}
Ct(["click"]);
var Sg = (n, e) => {
  var t;
  n.stopPropagation(), (t = e.onClick) == null || t.call(e, n);
}, xg = /* @__PURE__ */ z('<button class="icon-button svelte-jv2py4"><!></button>');
function tu(n, e) {
  Ae(e, !0);
  let t = m(e, "tooltipSide", 3, "top"), r = m(e, "showDelay", 3, 1e3), i = m(e, "fillColor", 3, "var(--mdc-theme-primary)"), a = m(e, "size", 3, "25px"), s = /* @__PURE__ */ ae(() => `fill: ${i()}; margin: 0; width: ${a()}; height: ${a()};`);
  eu(n, {
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
      var c = xg();
      c.__click = [Sg, e];
      var d = G(c);
      {
        var h = (v) => {
          Jd(v, {
            get svgStyles() {
              return o(s);
            }
          });
        }, f = (v) => {
          var g = ie(), p = j(g);
          {
            var y = (x) => {
              yv(x, {
                get svgStyles() {
                  return o(s);
                }
              });
            }, _ = (x) => {
              var E = ie(), I = j(E);
              {
                var S = (A) => {
                  Kd(A, {
                    get svgStyles() {
                      return o(s);
                    }
                  });
                }, b = (A) => {
                  var C = ie(), T = j(C);
                  {
                    var O = (D) => {
                      Qd(D, {
                        get svgStyles() {
                          return o(s);
                        }
                      });
                    }, V = (D) => {
                      var P = ie(), ee = j(P);
                      {
                        var U = (F) => {
                          Uv(F, {
                            get svgStyles() {
                              return o(s);
                            }
                          });
                        }, H = (F) => {
                          var X = ie(), ue = j(X);
                          {
                            var M = (K) => {
                              Gv(K, {
                                get svgStyles() {
                                  return o(s);
                                }
                              });
                            }, Y = (K) => {
                              var ce = ie(), le = j(ce);
                              {
                                var te = (Z) => {
                                  Vv(Z, {
                                    get svgStyles() {
                                      return o(s);
                                    }
                                  });
                                }, ge = (Z) => {
                                  var fe = ie(), $ = j(fe);
                                  {
                                    var be = (Ue) => {
                                      zv(Ue, {
                                        get svgStyles() {
                                          return o(s);
                                        }
                                      });
                                    }, ye = (Ue) => {
                                      var tt = dt();
                                      de(() => Pe(tt, `Unsupported supported type: ${e.type ?? ""}`)), w(Ue, tt);
                                    };
                                    Q(
                                      $,
                                      (Ue) => {
                                        e.type === "star" ? Ue(be) : Ue(ye, !1);
                                      },
                                      !0
                                    );
                                  }
                                  w(Z, fe);
                                };
                                Q(
                                  le,
                                  (Z) => {
                                    e.type === "close" ? Z(te) : Z(ge, !1);
                                  },
                                  !0
                                );
                              }
                              w(K, ce);
                            };
                            Q(
                              ue,
                              (K) => {
                                e.type === "link-off" ? K(M) : K(Y, !1);
                              },
                              !0
                            );
                          }
                          w(F, X);
                        };
                        Q(
                          ee,
                          (F) => {
                            e.type === "wand-stars" ? F(U) : F(H, !1);
                          },
                          !0
                        );
                      }
                      w(D, P);
                    };
                    Q(
                      T,
                      (D) => {
                        e.type === "visibility" ? D(O) : D(V, !1);
                      },
                      !0
                    );
                  }
                  w(A, C);
                };
                Q(
                  I,
                  (A) => {
                    e.type === "edit" ? A(S) : A(b, !1);
                  },
                  !0
                );
              }
              w(x, E);
            };
            Q(
              p,
              (x) => {
                e.type === "duplicate" ? x(y) : x(_, !1);
              },
              !0
            );
          }
          w(v, g);
        };
        Q(d, (v) => {
          e.type === "delete" ? v(h) : v(f, !1);
        });
      }
      de(() => Jt(c, "aria-label", e.tooltip)), w(u, c);
    },
    $$slots: { default: !0 }
  }), Ee();
}
Ct(["click"]);
function Rl(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Lr(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Rl(Object(t), !0).forEach(function(r) {
      Qi(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Rl(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function Fi(n) {
  "@babel/helpers - typeof";
  return Fi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Fi(n);
}
function Qi(n, e, t) {
  return e in n ? Object.defineProperty(n, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[e] = t, n;
}
function wg(n, e) {
  if (n == null) return {};
  var t = {}, r = Object.keys(n), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(e.indexOf(i) >= 0) && (t[i] = n[i]);
  return t;
}
function Tg(n, e) {
  if (n == null) return {};
  var t = wg(n, e), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    for (i = 0; i < a.length; i++)
      r = a[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(n, r) && (t[r] = n[r]);
  }
  return t;
}
function Dg(n, e) {
  return Og(n) || Mg(n, e) || Zo(n, e) || Fg();
}
function wn(n) {
  return Lg(n) || Rg(n) || Zo(n) || Pg();
}
function Lg(n) {
  if (Array.isArray(n)) return mo(n);
}
function Og(n) {
  if (Array.isArray(n)) return n;
}
function Rg(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function Mg(n, e) {
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
function Zo(n, e) {
  if (n) {
    if (typeof n == "string") return mo(n, e);
    var t = Object.prototype.toString.call(n).slice(8, -1);
    if (t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set") return Array.from(n);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return mo(n, e);
  }
}
function mo(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
  return r;
}
function Pg() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Fg() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Fa(n, e) {
  var t = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (!t) {
    if (Array.isArray(n) || (t = Zo(n)) || e) {
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
var kg = "finalize", Ng = "consider";
function $i(n, e, t) {
  n.dispatchEvent(new CustomEvent(kg, {
    detail: {
      items: e,
      info: t
    }
  }));
}
function Ur(n, e, t) {
  n.dispatchEvent(new CustomEvent(Ng, {
    detail: {
      items: e,
      info: t
    }
  }));
}
var Ms = "draggedEntered", ka = "draggedLeft", Ps = "draggedOverIndex", zo = "draggedLeftDocument", cs = {
  LEFT_FOR_ANOTHER: "leftForAnother",
  OUTSIDE_OF_ANY: "outsideOfAny"
};
function Hg(n, e, t) {
  n.dispatchEvent(new CustomEvent(Ms, {
    detail: {
      indexObj: e,
      draggedEl: t
    }
  }));
}
function Ug(n, e, t) {
  n.dispatchEvent(new CustomEvent(ka, {
    detail: {
      draggedEl: e,
      type: cs.LEFT_FOR_ANOTHER,
      theOtherDz: t
    }
  }));
}
function Bg(n, e) {
  n.dispatchEvent(new CustomEvent(ka, {
    detail: {
      draggedEl: e,
      type: cs.OUTSIDE_OF_ANY
    }
  }));
}
function Gg(n, e, t) {
  n.dispatchEvent(new CustomEvent(Ps, {
    detail: {
      indexObj: e,
      draggedEl: t
    }
  }));
}
function Wg(n) {
  window.dispatchEvent(new CustomEvent(zo, {
    detail: {
      draggedEl: n
    }
  }));
}
var wt = {
  DRAG_STARTED: "dragStarted",
  DRAGGED_ENTERED: Ms,
  DRAGGED_ENTERED_ANOTHER: "dragEnteredAnother",
  DRAGGED_OVER_INDEX: Ps,
  DRAGGED_LEFT: ka,
  DRAGGED_LEFT_ALL: "draggedLeftAll",
  DROPPED_INTO_ZONE: "droppedIntoZone",
  DROPPED_INTO_ANOTHER: "droppedIntoAnother",
  DROPPED_OUTSIDE_OF_ANY: "droppedOutsideOfAny",
  DRAG_STOPPED: "dragStopped"
}, jt = {
  POINTER: "pointer",
  KEYBOARD: "keyboard"
}, Na = "isDndShadowItem", Fs = "data-is-dnd-shadow-item-internal", Vg = "data-is-dnd-shadow-item-hint", Zg = "id:dnd-shadow-placeholder-0000", zg = "dnd-action-dragged-el", St = "id", po = 0;
function nu() {
  po++;
}
function ru() {
  if (po === 0)
    throw new Error("Bug! trying to decrement when there are no dropzones");
  po--;
}
var jo = typeof window > "u";
function Io(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, t, r = e ? qg(n) : n.getBoundingClientRect(), i = getComputedStyle(n), a = i.transform;
  if (a) {
    var s, u, l, c;
    if (a.startsWith("matrix3d("))
      t = a.slice(9, -1).split(/, /), s = +t[0], u = +t[5], l = +t[12], c = +t[13];
    else if (a.startsWith("matrix("))
      t = a.slice(7, -1).split(/, /), s = +t[0], u = +t[3], l = +t[4], c = +t[5];
    else
      return r;
    var d = i.transformOrigin, h = r.x - l - (1 - s) * parseFloat(d), f = r.y - c - (1 - u) * parseFloat(d.slice(d.indexOf(" ") + 1)), v = s ? r.width / s : n.offsetWidth, g = u ? r.height / u : n.offsetHeight;
    return {
      x: h,
      y: f,
      width: v,
      height: g,
      top: f,
      right: h + v,
      bottom: f + g,
      left: h
    };
  } else
    return r;
}
function iu(n) {
  var e = Io(n);
  return {
    top: e.top + window.scrollY,
    bottom: e.bottom + window.scrollY,
    left: e.left + window.scrollX,
    right: e.right + window.scrollX
  };
}
function au(n) {
  var e = n.getBoundingClientRect();
  return {
    top: e.top + window.scrollY,
    bottom: e.bottom + window.scrollY,
    left: e.left + window.scrollX,
    right: e.right + window.scrollX
  };
}
function su(n) {
  return {
    x: (n.left + n.right) / 2,
    y: (n.top + n.bottom) / 2
  };
}
function jg(n, e) {
  return Math.sqrt(Math.pow(n.x - e.x, 2) + Math.pow(n.y - e.y, 2));
}
function ks(n, e) {
  return n.y <= e.bottom && n.y >= e.top && n.x >= e.left && n.x <= e.right;
}
function Aa(n) {
  return su(au(n));
}
function Ml(n, e) {
  var t = Aa(n), r = iu(e);
  return ks(t, r);
}
function Pl(n, e) {
  var t = Aa(n), r = Aa(e);
  return jg(t, r);
}
function Xg(n) {
  var e = au(n);
  return e.right < 0 || e.left > document.documentElement.scrollWidth || e.bottom < 0 || e.top > document.documentElement.scrollHeight;
}
function qg(n) {
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
function Xo() {
  Hi = /* @__PURE__ */ new Map();
}
Xo();
function Yg(n) {
  var e = Array.from(n.children).findIndex(function(t) {
    return t.getAttribute(Fs);
  });
  if (e >= 0)
    return Hi.has(n) || Hi.set(n, /* @__PURE__ */ new Map()), Hi.get(n).set(e, iu(n.children[e])), e;
}
function Kg(n, e) {
  if (!Ml(n, e))
    return null;
  var t = e.children;
  if (t.length === 0)
    return {
      index: 0,
      isProximityBased: !0
    };
  for (var r = Yg(e), i = 0; i < t.length; i++)
    if (Ml(n, t[i])) {
      var a = Hi.has(e) && Hi.get(e).get(i);
      return a && !ks(Aa(n), a) ? {
        index: r,
        isProximityBased: !1
      } : {
        index: i,
        isProximityBased: !1
      };
    }
  for (var s = Number.MAX_VALUE, u = void 0, l = 0; l < t.length; l++) {
    var c = Pl(n, t[l]);
    c < s && (s = c, u = l);
  }
  if (t.length > 0) {
    var d = t.length, h = t[d - 1], f = h.cloneNode(!1);
    f.style.visibility = "hidden", f.style.pointerEvents = "none", e.appendChild(f);
    var v = Pl(n, f);
    v < s && (u = d), e.removeChild(f);
  }
  return {
    index: u,
    isProximityBased: !0
  };
}
function ha(n) {
  return JSON.stringify(n, null, 2);
}
function fs(n) {
  if (!n)
    throw new Error("cannot get depth of a falsy node");
  return ou(n, 0);
}
function ou(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return n.parentElement ? ou(n.parentElement, e + 1) : e - 1;
}
function Jg(n, e) {
  if (Object.keys(n).length !== Object.keys(e).length)
    return !1;
  for (var t in n)
    if (!{}.hasOwnProperty.call(e, t) || e[t] !== n[t])
      return !1;
  return !0;
}
function Qg(n, e) {
  if (n.length !== e.length)
    return !1;
  for (var t = 0; t < n.length; t++)
    if (n[t] !== e[t])
      return !1;
  return !0;
}
var $g = 200, Fl = 10, bo;
function em(n, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : $g, r = arguments.length > 3 ? arguments[3] : void 0, i, a, s = !1, u, l = Array.from(e).sort(function(d, h) {
    return fs(h) - fs(d);
  });
  function c() {
    var d = Aa(n), h = r.multiScrollIfNeeded();
    if (!h && u && Math.abs(u.x - d.x) < Fl && Math.abs(u.y - d.y) < Fl) {
      bo = window.setTimeout(c, t);
      return;
    }
    if (Xg(n)) {
      Wg(n);
      return;
    }
    u = d;
    var f = !1, v = Fa(l), g;
    try {
      for (v.s(); !(g = v.n()).done; ) {
        var p = g.value;
        h && Xo();
        var y = Kg(n, p);
        if (y !== null) {
          var _ = y.index;
          f = !0, p !== i ? (i && Ug(i, n, p), Hg(p, y, n), i = p) : _ !== a && (Gg(p, y, n), a = _);
          break;
        }
      }
    } catch (x) {
      v.e(x);
    } finally {
      v.f();
    }
    !f && s && i ? (Bg(i, n), i = void 0, a = void 0, s = !1) : s = !0, bo = window.setTimeout(c, t);
  }
  c();
}
function tm() {
  clearTimeout(bo), Xo();
}
var va = 30;
function nm() {
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
    return va - a;
  }
  function i(a, s) {
    if (!s)
      return !1;
    var u = rm(a, s), l = !!n.directionObj;
    if (u === null)
      return l && e(), !1;
    var c = !1, d = !1;
    return s.scrollHeight > s.clientHeight && (u.bottom < va ? (c = !0, n.directionObj = {
      x: 0,
      y: 1
    }, n.stepPx = r(u.bottom)) : u.top < va && (c = !0, n.directionObj = {
      x: 0,
      y: -1
    }, n.stepPx = r(u.top)), !l && c) || s.scrollWidth > s.clientWidth && (u.right < va ? (d = !0, n.directionObj = {
      x: 1,
      y: 0
    }, n.stepPx = r(u.right)) : u.left < va && (d = !0, n.directionObj = {
      x: -1,
      y: 0
    }, n.stepPx = r(u.left)), !l && d) ? (t(s), !0) : (e(), !1);
  }
  return {
    scrollIfNeeded: i,
    resetScrolling: e
  };
}
function rm(n, e) {
  var t = e === document.scrollingElement ? {
    top: 0,
    bottom: window.innerHeight,
    left: 0,
    right: window.innerWidth
  } : e.getBoundingClientRect();
  return ks(n, t) ? {
    top: n.y - t.top,
    bottom: t.bottom - n.y,
    left: n.x - t.left,
    right: t.right - n.x
  } : null;
}
function im() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e = arguments.length > 1 ? arguments[1] : void 0, t = sm(n), r = Array.from(t).sort(function(l, c) {
    return fs(c) - fs(l);
  }), i = nm(), a = i.scrollIfNeeded, s = i.resetScrolling;
  function u() {
    var l = e();
    if (!l || !r)
      return !1;
    for (var c = r.filter(function(f) {
      return ks(l, f.getBoundingClientRect()) || f === document.scrollingElement;
    }), d = 0; d < c.length; d++) {
      var h = a(l, c[d]);
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
function am(n) {
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
function sm(n) {
  var e = /* @__PURE__ */ new Set(), t = Fa(n), r;
  try {
    for (t.s(); !(r = t.n()).done; ) {
      var i = r.value;
      am(i).forEach(function(a) {
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
function om(n) {
  var e = n.cloneNode(!0), t = [], r = n.tagName === "SELECT", i = r ? [n] : wn(n.querySelectorAll("select")), a = Fa(i), s;
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
    for (var l = r ? [e] : wn(e.querySelectorAll("select")), c = 0; c < l.length; c++) {
      var d = l[c], h = t[c], f = d.querySelector('option[value="'.concat(h, '"'));
      f && f.setAttribute("selected", !0);
    }
  var v = n.tagName === "CANVAS", g = v ? [n] : wn(n.querySelectorAll("canvas"));
  if (g.length > 0)
    for (var p = v ? [e] : wn(e.querySelectorAll("canvas")), y = 0; y < p.length; y++) {
      var _ = g[y], x = p[y];
      x.width = _.width, x.height = _.height, _.width > 0 && _.height > 0 && x.getContext("2d").drawImage(_, 0, 0);
    }
  return e;
}
var Ea = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
}), lm = Qi({}, Ea.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
function lu(n) {
  if (!Ea[n]) throw new Error("Can't get non existing feature flag ".concat(n, "! Supported flags: ").concat(Object.keys(Ea)));
  return lm[n];
}
var dm = 0.2;
function ti(n) {
  return "".concat(n, " ").concat(dm, "s ease");
}
function um(n, e) {
  var t = n.getBoundingClientRect(), r = om(n);
  du(n, r), r.id = zg, r.style.position = "fixed";
  var i = t.top, a = t.left;
  if (r.style.top = "".concat(i, "px"), r.style.left = "".concat(a, "px"), e) {
    var s = su(t);
    i -= s.y - e.y, a -= s.x - e.x, window.setTimeout(function() {
      r.style.top = "".concat(i, "px"), r.style.left = "".concat(a, "px");
    }, 0);
  }
  return r.style.margin = "0", r.style.boxSizing = "border-box", r.style.height = "".concat(t.height, "px"), r.style.width = "".concat(t.width, "px"), r.style.transition = "".concat(ti("top"), ", ").concat(ti("left"), ", ").concat(ti("background-color"), ", ").concat(ti("opacity"), ", ").concat(ti("color"), " "), window.setTimeout(function() {
    return r.style.transition += ", ".concat(ti("width"), ", ").concat(ti("height"));
  }, 0), r.style.zIndex = "9999", r.style.cursor = "grabbing", r;
}
function cm(n) {
  n.style.cursor = "grab";
}
function fm(n, e, t, r) {
  du(e, n);
  var i = e.getBoundingClientRect(), a = n.getBoundingClientRect(), s = i.width - a.width, u = i.height - a.height;
  if (s || u) {
    var l = {
      left: (t - a.left) / a.width,
      top: (r - a.top) / a.height
    };
    lu(Ea.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT) || (n.style.height = "".concat(i.height, "px"), n.style.width = "".concat(i.width, "px")), n.style.left = "".concat(parseFloat(n.style.left) - l.left * s, "px"), n.style.top = "".concat(parseFloat(n.style.top) - l.top * u, "px");
  }
}
function du(n, e) {
  var t = window.getComputedStyle(n);
  Array.from(t).filter(function(r) {
    return r.startsWith("background") || r.startsWith("padding") || r.startsWith("font") || r.startsWith("text") || r.startsWith("align") || r.startsWith("justify") || r.startsWith("display") || r.startsWith("flex") || r.startsWith("border") || r === "opacity" || r === "color" || r === "list-style-type" || // copying with and height to make up for rect update timing issues in some browsers
    lu(Ea.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT) && (r === "width" || r === "height");
  }).forEach(function(r) {
    return e.style.setProperty(r, t.getPropertyValue(r), t.getPropertyPriority(r));
  });
}
function hm(n, e) {
  n.draggable = !1, n.ondragstart = function() {
    return !1;
  }, e ? (n.style.userSelect = "", n.style.WebkitUserSelect = "", n.style.cursor = "") : (n.style.userSelect = "none", n.style.WebkitUserSelect = "none", n.style.cursor = "grab");
}
function uu(n) {
  n.style.display = "none", n.style.position = "fixed", n.style.zIndex = "-5";
}
function vm(n) {
  n.style.visibility = "hidden", n.setAttribute(Fs, "true");
}
function gm(n) {
  n.style.visibility = "", n.removeAttribute(Fs);
}
function ns(n) {
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
function mm(n) {
  var e = n.style.minHeight;
  n.style.minHeight = window.getComputedStyle(n).getPropertyValue("height");
  var t = n.style.minWidth;
  return n.style.minWidth = window.getComputedStyle(n).getPropertyValue("width"), function() {
    n.style.minHeight = e, n.style.minWidth = t;
  };
}
var pm = "--any--", Im = 100, bm = 20, qa = 3, _m = 80, kl = {
  outline: "rgba(255, 255, 102, 0.7) solid 2px"
}, Nl = "data-is-dnd-original-dragged-item", sn, Et, on, Ns, rt, Hs, kr, Mt, Vn, Wt, Sr = !1, qo = !1, Yo, Ha = !1, rs = [], ba, Zn, ma = !1, Nn = /* @__PURE__ */ new Map(), vt = /* @__PURE__ */ new Map(), eo = /* @__PURE__ */ new WeakMap();
function ym(n, e) {
  Nn.has(e) || Nn.set(e, /* @__PURE__ */ new Set()), Nn.get(e).has(n) || (Nn.get(e).add(n), nu());
}
function Hl(n, e) {
  Nn.get(e).delete(n), ru(), Nn.get(e).size === 0 && Nn.delete(e);
}
function Cm() {
  var n = Nn.get(Ns), e = Fa(n), t;
  try {
    for (e.s(); !(t = e.n()).done; ) {
      var r = t.value;
      r.addEventListener(Ms, cu), r.addEventListener(ka, fu), r.addEventListener(Ps, hu);
    }
  } catch (s) {
    e.e(s);
  } finally {
    e.f();
  }
  window.addEventListener(zo, ea);
  var i = Math.max.apply(Math, wn(Array.from(n.keys()).map(function(s) {
    return vt.get(s).dropAnimationDurationMs;
  }))), a = i === 0 ? bm : Math.max(i, Im);
  ba = im(n, function() {
    return Wt;
  }), em(Et, n, a * 1.07, ba);
}
function Am() {
  var n = Nn.get(Ns), e = Fa(n), t;
  try {
    for (e.s(); !(t = e.n()).done; ) {
      var r = t.value;
      r.removeEventListener(Ms, cu), r.removeEventListener(ka, fu), r.removeEventListener(Ps, hu);
    }
  } catch (i) {
    e.e(i);
  } finally {
    e.f();
  }
  window.removeEventListener(zo, ea), ba && (ba.destroy(), ba = void 0), tm();
}
function Us(n) {
  return n.findIndex(function(e) {
    return !!e[Na];
  });
}
function Em(n) {
  var e;
  return Lr(Lr({}, n), {}, (e = {}, Qi(e, Na, !0), Qi(e, St, Zg), e));
}
function cu(n) {
  var e = vt.get(n.currentTarget), t = e.items, r = e.dropFromOthersDisabled;
  if (!(r && n.currentTarget !== rt)) {
    if (Ha = !1, t = t.filter(function(u) {
      return u[St] !== kr[St];
    }), rt !== n.currentTarget) {
      var i = vt.get(rt).items, a = i.filter(function(u) {
        return !u[Na];
      });
      Ur(rt, a, {
        trigger: wt.DRAGGED_ENTERED_ANOTHER,
        id: on[St],
        source: jt.POINTER
      });
    }
    var s = n.detail.indexObj.index;
    Mt = n.currentTarget, t.splice(s, 0, kr), Ur(n.currentTarget, t, {
      trigger: wt.DRAGGED_ENTERED,
      id: on[St],
      source: jt.POINTER
    });
  }
}
function fu(n) {
  if (Sr) {
    var e = vt.get(n.currentTarget), t = e.items, r = e.dropFromOthersDisabled;
    if (!(r && n.currentTarget !== rt && n.currentTarget !== Mt)) {
      var i = wn(t), a = Us(i);
      a !== -1 && i.splice(a, 1);
      var s = Mt;
      Mt = void 0;
      var u = n.detail, l = u.type, c = u.theOtherDz;
      if (l === cs.OUTSIDE_OF_ANY || l === cs.LEFT_FOR_ANOTHER && c !== rt && vt.get(c).dropFromOthersDisabled) {
        Ha = !0, Mt = rt;
        var d = s === rt ? i : wn(vt.get(rt).items);
        d.splice(Hs, 0, kr), Ur(rt, d, {
          trigger: wt.DRAGGED_LEFT_ALL,
          id: on[St],
          source: jt.POINTER
        });
      }
      Ur(n.currentTarget, i, {
        trigger: wt.DRAGGED_LEFT,
        id: on[St],
        source: jt.POINTER
      });
    }
  }
}
function hu(n) {
  var e = vt.get(n.currentTarget), t = e.items, r = e.dropFromOthersDisabled;
  if (!(r && n.currentTarget !== rt)) {
    var i = wn(t);
    Ha = !1;
    var a = n.detail.indexObj.index, s = Us(i);
    s !== -1 && i.splice(s, 1), i.splice(a, 0, kr), Ur(n.currentTarget, i, {
      trigger: wt.DRAGGED_OVER_INDEX,
      id: on[St],
      source: jt.POINTER
    });
  }
}
function vs(n) {
  n.preventDefault();
  var e = n.touches ? n.touches[0] : n;
  Wt = {
    x: e.clientX,
    y: e.clientY
  }, Et.style.transform = "translate3d(".concat(Wt.x - Vn.x, "px, ").concat(Wt.y - Vn.y, "px, 0)");
}
function ea() {
  qo = !0, window.removeEventListener("mousemove", vs), window.removeEventListener("touchmove", vs), window.removeEventListener("mouseup", ea), window.removeEventListener("touchend", ea), Am(), cm(Et), Mt || (Mt = rt);
  var n = vt.get(Mt), e = n.items, t = n.type;
  hs(Nn.get(t), function(a) {
    return vt.get(a).dropTargetStyle;
  }, function(a) {
    return vt.get(a).dropTargetClasses;
  });
  var r = Us(e);
  r === -1 && Mt === rt && (r = Hs), e = e.map(function(a) {
    return a[Na] ? on : a;
  });
  function i() {
    Yo(), $i(Mt, e, {
      trigger: Ha ? wt.DROPPED_OUTSIDE_OF_ANY : wt.DROPPED_INTO_ZONE,
      id: on[St],
      source: jt.POINTER
    }), Mt !== rt && $i(rt, vt.get(rt).items, {
      trigger: wt.DROPPED_INTO_ANOTHER,
      id: on[St],
      source: jt.POINTER
    });
    var a = Array.from(Mt.children).find(function(s) {
      return s.getAttribute(Fs);
    });
    a && gm(a), wm();
  }
  vt.get(Mt).dropAnimationDisabled ? i() : Sm(r, i);
}
function Sm(n, e) {
  var t = n > -1 ? Io(Mt.children[n], !1) : Io(Mt, !1), r = {
    x: t.left - parseFloat(Et.style.left),
    y: t.top - parseFloat(Et.style.top)
  }, i = vt.get(Mt), a = i.dropAnimationDurationMs, s = "transform ".concat(a, "ms ease");
  Et.style.transition = Et.style.transition ? Et.style.transition + "," + s : s, Et.style.transform = "translate3d(".concat(r.x, "px, ").concat(r.y, "px, 0)"), window.setTimeout(e, a);
}
function xm(n, e) {
  rs.push({
    dz: n,
    destroy: e
  }), window.requestAnimationFrame(function() {
    uu(n), document.body.appendChild(n);
  });
}
function wm() {
  Et && Et.remove && Et.remove(), sn && sn.remove && sn.remove(), Et = void 0, sn = void 0, on = void 0, Ns = void 0, rt = void 0, Hs = void 0, kr = void 0, Mt = void 0, Vn = void 0, Wt = void 0, Sr = !1, qo = !1, Yo = void 0, Ha = !1, Zn && clearTimeout(Zn), Zn = void 0, ma = !1, rs.length && (rs.forEach(function(n) {
    var e = n.dz, t = n.destroy;
    t(), e.remove();
  }), rs = []);
}
function Tm(n, e) {
  var t = !1, r = {
    items: void 0,
    type: void 0,
    flipDurationMs: 0,
    dragDisabled: !1,
    morphDisabled: !1,
    dropFromOthersDisabled: !1,
    dropTargetStyle: kl,
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
    window.removeEventListener("mousemove", l), window.removeEventListener("touchmove", l), window.removeEventListener("mouseup", u), window.removeEventListener("touchend", u), Zn && (clearTimeout(Zn), Zn = void 0, ma = !1);
  }
  function u(f) {
    if (s(), sn = void 0, Vn = void 0, Wt = void 0, f.type === "touchend") {
      var v = new Event("click", {
        bubbles: !0,
        cancelable: !0
      });
      f.target.dispatchEvent(v);
    }
  }
  function l(f) {
    var v = !!f.touches, g = v ? f.touches[0] : f;
    if (v && r.delayTouchStartMs > 0 && !ma) {
      Wt = {
        x: g.clientX,
        y: g.clientY
      }, (Math.abs(Wt.x - Vn.x) >= qa || Math.abs(Wt.y - Vn.y) >= qa) && (Zn && (clearTimeout(Zn), Zn = void 0), u(f));
      return;
    }
    f.preventDefault(), Wt = {
      x: g.clientX,
      y: g.clientY
    }, (Math.abs(Wt.x - Vn.x) >= qa || Math.abs(Wt.y - Vn.y) >= qa) && (s(), d());
  }
  function c(f) {
    if (!(f.target !== f.currentTarget && (f.target.value !== void 0 || f.target.isContentEditable)) && !f.button && !Sr) {
      var v = !!f.touches, g = v && r.delayTouchStartMs > 0;
      g || f.preventDefault(), f.stopPropagation();
      var p = v ? f.touches[0] : f;
      Vn = {
        x: p.clientX,
        y: p.clientY
      }, Wt = Lr({}, Vn), sn = f.currentTarget, g && (ma = !1, Zn = window.setTimeout(function() {
        sn && (ma = !0, s(), d());
      }, r.delayTouchStartMs)), a();
    }
  }
  function d() {
    Sr = !0;
    var f = i.get(sn);
    Hs = f, rt = sn.parentElement;
    var v = rt.closest("dialog") || rt.closest("[popover]") || rt.getRootNode(), g = v.body || v, p = r.items, y = r.type, _ = r.centreDraggedOnCursor, x = wn(p);
    on = x[f], Ns = y, kr = Em(on), Et = um(sn, _ && Wt), g.appendChild(Et);
    function E() {
      sn.parentElement ? window.requestAnimationFrame(E) : (sn.setAttribute(Nl, !0), g.appendChild(sn), Cm(), uu(sn), kr[St] = on[St], Et.focus());
    }
    window.requestAnimationFrame(E), ns(Array.from(Nn.get(r.type)).filter(function(I) {
      return I === rt || !vt.get(I).dropFromOthersDisabled;
    }), function(I) {
      return vt.get(I).dropTargetStyle;
    }, function(I) {
      return vt.get(I).dropTargetClasses;
    }), x.splice(f, 1, kr), Yo = mm(rt), Ur(rt, x, {
      trigger: wt.DRAG_STARTED,
      id: on[St],
      source: jt.POINTER
    }), window.addEventListener("mousemove", vs, {
      passive: !1
    }), window.addEventListener("touchmove", vs, {
      passive: !1,
      capture: !1
    }), window.addEventListener("mouseup", ea, {
      passive: !1
    }), window.addEventListener("touchend", ea, {
      passive: !1
    });
  }
  function h(f) {
    var v = f.items, g = v === void 0 ? void 0 : v, p = f.flipDurationMs, y = p === void 0 ? 0 : p, _ = f.type, x = _ === void 0 ? pm : _, E = f.dragDisabled, I = E === void 0 ? !1 : E, S = f.morphDisabled, b = S === void 0 ? !1 : S, A = f.dropFromOthersDisabled, C = A === void 0 ? !1 : A, T = f.dropTargetStyle, O = T === void 0 ? kl : T, V = f.dropTargetClasses, D = V === void 0 ? [] : V, P = f.transformDraggedElement, ee = P === void 0 ? function() {
    } : P, U = f.centreDraggedOnCursor, H = U === void 0 ? !1 : U, F = f.dropAnimationDisabled, X = F === void 0 ? !1 : F, ue = f.delayTouchStart, M = ue === void 0 ? !1 : ue;
    r.dropAnimationDurationMs = y;
    var Y = 0;
    M === !0 ? Y = _m : typeof M == "number" && isFinite(M) && M >= 0 && (Y = M), r.delayTouchStartMs = Y, r.type && x !== r.type && Hl(n, r.type), r.type = x, r.items = wn(g), r.dragDisabled = I, r.morphDisabled = b, r.transformDraggedElement = ee, r.centreDraggedOnCursor = H, r.dropAnimationDisabled = X, t && Sr && !qo && (!Jg(O, r.dropTargetStyle) || !Qg(D, r.dropTargetClasses)) && (hs([n], function() {
      return r.dropTargetStyle;
    }, function() {
      return D;
    }), ns([n], function() {
      return O;
    }, function() {
      return D;
    })), r.dropTargetStyle = O, r.dropTargetClasses = wn(D);
    function K(ge, Z) {
      return vt.get(ge) ? vt.get(ge)[Z] : r[Z];
    }
    t && Sr && r.dropFromOthersDisabled !== C && (C ? hs([n], function(ge) {
      return K(ge, "dropTargetStyle");
    }, function(ge) {
      return K(ge, "dropTargetClasses");
    }) : ns([n], function(ge) {
      return K(ge, "dropTargetStyle");
    }, function(ge) {
      return K(ge, "dropTargetClasses");
    })), r.dropFromOthersDisabled = C, vt.set(n, r), ym(n, x);
    for (var ce = Sr ? Us(r.items) : -1, le = 0; le < n.children.length; le++) {
      var te = n.children[le];
      if (hm(te, I), le === ce) {
        b || fm(Et, te, Wt.x, Wt.y), r.transformDraggedElement(Et, on, le), vm(te);
        continue;
      }
      te.removeEventListener("mousedown", eo.get(te)), te.removeEventListener("touchstart", eo.get(te)), I || (te.addEventListener("mousedown", c), te.addEventListener("touchstart", c), eo.set(te, c)), i.set(te, le), t || (t = !0);
    }
  }
  return h(e), {
    update: function(v) {
      h(v);
    },
    destroy: function() {
      function v() {
        Hl(n, vt.get(n).type), vt.delete(n);
      }
      Sr && !n.closest("[".concat(Nl, "]")) ? xm(n, v) : v();
    }
  };
}
var Ya, _o = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
}, vu = (Ya = {}, Qi(Ya, _o.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), Qi(Ya, _o.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list"), Ya), Dm = "dnd-action-aria-alert", mt;
function yo() {
  mt || (mt = document.createElement("div"), function() {
    mt.id = Dm, mt.style.position = "fixed", mt.style.bottom = "0", mt.style.left = "0", mt.style.zIndex = "-5", mt.style.opacity = "0", mt.style.height = "0", mt.style.width = "0", mt.setAttribute("role", "alert");
  }(), document.body.prepend(mt), Object.entries(vu).forEach(function(n) {
    var e = Dg(n, 2), t = e[0], r = e[1];
    return document.body.prepend(Rm(t, r));
  }));
}
function Lm() {
  return jo ? null : (document.readyState === "complete" ? yo() : window.addEventListener("DOMContentLoaded", yo), Lr({}, _o));
}
function Om() {
  jo || !mt || (Object.keys(vu).forEach(function(n) {
    var e;
    return (e = document.getElementById(n)) === null || e === void 0 ? void 0 : e.remove();
  }), mt.remove(), mt = void 0);
}
function Rm(n, e) {
  var t = document.createElement("div");
  return t.id = n, t.innerHTML = "<p>".concat(e, "</p>"), t.style.display = "none", t.style.position = "fixed", t.style.zIndex = "-5", t;
}
function Ui(n) {
  if (!jo) {
    mt || yo(), mt.innerHTML = "";
    var e = document.createTextNode(n);
    mt.appendChild(e), mt.style.display = "none", mt.style.display = "inline";
  }
}
var Mm = "--any--", Ul = {
  outline: "rgba(255, 255, 102, 0.7) solid 2px"
}, xn = !1, Co, Zt, vi = "", ni, Yn, Or = "", gs = /* @__PURE__ */ new WeakSet(), Bl = /* @__PURE__ */ new WeakMap(), Gl = /* @__PURE__ */ new WeakMap(), Ao = /* @__PURE__ */ new Map(), Ot = /* @__PURE__ */ new Map(), Fn = /* @__PURE__ */ new Map(), ms;
function Pm(n, e) {
  Fn.size === 0 && (ms = Lm(), window.addEventListener("keydown", gu), window.addEventListener("click", mu)), Fn.has(e) || Fn.set(e, /* @__PURE__ */ new Set()), Fn.get(e).has(n) || (Fn.get(e).add(n), nu());
}
function Wl(n, e) {
  Zt === n && Sa(), Fn.get(e).delete(n), ru(), Fn.get(e).size === 0 && Fn.delete(e), Fn.size === 0 && (window.removeEventListener("keydown", gu), window.removeEventListener("click", mu), ms = void 0, Om());
}
function gu(n) {
  if (xn)
    switch (n.key) {
      case "Escape": {
        Sa();
        break;
      }
    }
}
function mu() {
  xn && (gs.has(document.activeElement) || Sa());
}
function Fm(n) {
  if (xn) {
    var e = n.currentTarget;
    if (e !== Zt) {
      vi = e.getAttribute("aria-label") || "";
      var t = Ot.get(Zt), r = t.items, i = r.find(function(h) {
        return h[St] === Yn;
      }), a = r.indexOf(i), s = r.splice(a, 1)[0], u = Ot.get(e), l = u.items, c = u.autoAriaDisabled;
      e.getBoundingClientRect().top < Zt.getBoundingClientRect().top || e.getBoundingClientRect().left < Zt.getBoundingClientRect().left ? (l.push(s), c || Ui("Moved item ".concat(Or, " to the end of the list ").concat(vi))) : (l.unshift(s), c || Ui("Moved item ".concat(Or, " to the beginning of the list ").concat(vi)));
      var d = Zt;
      $i(d, r, {
        trigger: wt.DROPPED_INTO_ANOTHER,
        id: Yn,
        source: jt.KEYBOARD
      }), $i(e, l, {
        trigger: wt.DROPPED_INTO_ZONE,
        id: Yn,
        source: jt.KEYBOARD
      }), Zt = e;
    }
  }
}
function pu() {
  Ao.forEach(function(n, e) {
    var t = n.update;
    return t(Ot.get(e));
  });
}
function Sa() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  Ot.get(Zt).autoAriaDisabled || Ui("Stopped dragging item ".concat(Or)), gs.has(document.activeElement) && document.activeElement.blur(), n && Ur(Zt, Ot.get(Zt).items, {
    trigger: wt.DRAG_STOPPED,
    id: Yn,
    source: jt.KEYBOARD
  }), hs(Fn.get(Co), function(e) {
    return Ot.get(e).dropTargetStyle;
  }, function(e) {
    return Ot.get(e).dropTargetClasses;
  }), ni = null, Yn = null, Or = "", Co = null, Zt = null, vi = "", xn = !1, pu();
}
function km(n, e) {
  var t = {
    items: void 0,
    type: void 0,
    dragDisabled: !1,
    zoneTabIndex: 0,
    zoneItemTabIndex: 0,
    dropFromOthersDisabled: !1,
    dropTargetStyle: Ul,
    dropTargetClasses: [],
    autoAriaDisabled: !1
  };
  function r(d, h, f) {
    d.length <= 1 || d.splice(f, 1, d.splice(h, 1, d[f])[0]);
  }
  function i(d) {
    switch (d.key) {
      case "Enter":
      case " ": {
        if ((d.target.disabled !== void 0 || d.target.href || d.target.isContentEditable) && !gs.has(d.target))
          return;
        d.preventDefault(), d.stopPropagation(), xn ? Sa() : a(d);
        break;
      }
      case "ArrowDown":
      case "ArrowRight": {
        if (!xn) return;
        d.preventDefault(), d.stopPropagation();
        var h = Ot.get(n), f = h.items, v = Array.from(n.children), g = v.indexOf(d.currentTarget);
        g < v.length - 1 && (t.autoAriaDisabled || Ui("Moved item ".concat(Or, " to position ").concat(g + 2, " in the list ").concat(vi)), r(f, g, g + 1), $i(n, f, {
          trigger: wt.DROPPED_INTO_ZONE,
          id: Yn,
          source: jt.KEYBOARD
        }));
        break;
      }
      case "ArrowUp":
      case "ArrowLeft": {
        if (!xn) return;
        d.preventDefault(), d.stopPropagation();
        var p = Ot.get(n), y = p.items, _ = Array.from(n.children), x = _.indexOf(d.currentTarget);
        x > 0 && (t.autoAriaDisabled || Ui("Moved item ".concat(Or, " to position ").concat(x, " in the list ").concat(vi)), r(y, x, x - 1), $i(n, y, {
          trigger: wt.DROPPED_INTO_ZONE,
          id: Yn,
          source: jt.KEYBOARD
        }));
        break;
      }
    }
  }
  function a(d) {
    u(d.currentTarget), Zt = n, Co = t.type, xn = !0;
    var h = Array.from(Fn.get(t.type)).filter(function(v) {
      return v === Zt || !Ot.get(v).dropFromOthersDisabled;
    });
    if (ns(h, function(v) {
      return Ot.get(v).dropTargetStyle;
    }, function(v) {
      return Ot.get(v).dropTargetClasses;
    }), !t.autoAriaDisabled) {
      var f = "Started dragging item ".concat(Or, ". Use the arrow keys to move it within its list ").concat(vi);
      h.length > 1 && (f += ", or tab to another list in order to move the item into it"), Ui(f);
    }
    Ur(n, Ot.get(n).items, {
      trigger: wt.DRAG_STARTED,
      id: Yn,
      source: jt.KEYBOARD
    }), pu();
  }
  function s(d) {
    xn && d.currentTarget !== ni && (d.stopPropagation(), Sa(!1), a(d));
  }
  function u(d) {
    var h = Ot.get(n), f = h.items, v = Array.from(n.children), g = v.indexOf(d);
    ni = d, ni.tabIndex = t.zoneItemTabIndex, Yn = f[g][St], Or = v[g].getAttribute("aria-label") || "";
  }
  function l(d) {
    var h = d.items, f = h === void 0 ? [] : h, v = d.type, g = v === void 0 ? Mm : v, p = d.dragDisabled, y = p === void 0 ? !1 : p, _ = d.zoneTabIndex, x = _ === void 0 ? 0 : _, E = d.zoneItemTabIndex, I = E === void 0 ? 0 : E, S = d.dropFromOthersDisabled, b = S === void 0 ? !1 : S, A = d.dropTargetStyle, C = A === void 0 ? Ul : A, T = d.dropTargetClasses, O = T === void 0 ? [] : T, V = d.autoAriaDisabled, D = V === void 0 ? !1 : V;
    t.items = wn(f), t.dragDisabled = y, t.dropFromOthersDisabled = b, t.zoneTabIndex = x, t.zoneItemTabIndex = I, t.dropTargetStyle = C, t.dropTargetClasses = O, t.autoAriaDisabled = D, t.type && g !== t.type && Wl(n, t.type), t.type = g, Pm(n, g), D || (n.setAttribute("aria-disabled", y), n.setAttribute("role", "list"), n.setAttribute("aria-describedby", y ? ms.DND_ZONE_DRAG_DISABLED : ms.DND_ZONE_ACTIVE)), Ot.set(n, t), xn ? n.tabIndex = n === Zt || ni.contains(n) || t.dropFromOthersDisabled || Zt && t.type !== Ot.get(Zt).type ? -1 : 0 : n.tabIndex = t.zoneTabIndex, n.addEventListener("focus", Fm);
    for (var P = function(H) {
      var F = n.children[H];
      gs.add(F), F.tabIndex = xn ? -1 : t.zoneItemTabIndex, D || F.setAttribute("role", "listitem"), F.removeEventListener("keydown", Bl.get(F)), F.removeEventListener("click", Gl.get(F)), y || (F.addEventListener("keydown", i), Bl.set(F, i), F.addEventListener("click", s), Gl.set(F, s)), xn && t.items[H][St] === Yn && (ni = F, ni.tabIndex = t.zoneItemTabIndex, F.focus());
    }, ee = 0; ee < n.children.length; ee++)
      P(ee);
  }
  l(e);
  var c = {
    update: function(h) {
      l(h);
    },
    destroy: function() {
      Wl(n, t.type), Ot.delete(n), Ao.delete(n);
    }
  };
  return Ao.set(n, c), c;
}
var Nm = ["items", "flipDurationMs", "type", "dragDisabled", "morphDisabled", "dropFromOthersDisabled", "zoneTabIndex", "zoneItemTabIndex", "dropTargetStyle", "dropTargetClasses", "transformDraggedElement", "autoAriaDisabled", "centreDraggedOnCursor", "delayTouchStart", "dropAnimationDisabled"];
function Hm(n, e) {
  if (Um(n))
    return {
      update: function() {
      },
      destroy: function() {
      }
    };
  Vl(e);
  var t = Tm(n, e), r = km(n, e);
  return {
    update: function(a) {
      Vl(a), t.update(a), r.update(a);
    },
    destroy: function() {
      t.destroy(), r.destroy();
    }
  };
}
function Um(n) {
  return !!n.closest("[".concat(Vg, '="true"]'));
}
function Vl(n) {
  var e = n.items;
  n.flipDurationMs, n.type, n.dragDisabled, n.morphDisabled, n.dropFromOthersDisabled;
  var t = n.zoneTabIndex, r = n.zoneItemTabIndex;
  n.dropTargetStyle;
  var i = n.dropTargetClasses;
  n.transformDraggedElement, n.autoAriaDisabled, n.centreDraggedOnCursor;
  var a = n.delayTouchStart;
  n.dropAnimationDisabled;
  var s = Tg(n, Nm);
  if (Object.keys(s).length > 0 && console.warn("dndzone will ignore unknown options", s), !e)
    throw new Error("no 'items' key provided to dndzone");
  var u = e.find(function(d) {
    return !{}.hasOwnProperty.call(d, St);
  });
  if (u)
    throw new Error("missing '".concat(St, "' property for item ").concat(ha(u)));
  if (i && !Array.isArray(i))
    throw new Error("dropTargetClasses should be an array but instead it is a ".concat(Fi(i), ", ").concat(ha(i)));
  if (t && !Zl(t))
    throw new Error("zoneTabIndex should be a number but instead it is a ".concat(Fi(t), ", ").concat(ha(t)));
  if (r && !Zl(r))
    throw new Error("zoneItemTabIndex should be a number but instead it is a ".concat(Fi(r), ", ").concat(ha(r)));
  if (a !== void 0 && a !== !1) {
    var l = a === !0, c = typeof a == "number" && isFinite(a) && a >= 0;
    if (!l && !c)
      throw new Error("delayTouchStart should be a boolean (true/false) or a non-negative number but instead it is a ".concat(Fi(a), ", ").concat(ha(a)));
  }
}
function Zl(n) {
  return !isNaN(n) && function(e) {
    return (e | 0) === e;
  }(parseFloat(n));
}
function Iu(n) {
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
var Mn = Iu(!0), Bi = Iu(!1);
function zl() {
  return {
    dragDisabled: Bi.get() || Mn.get(),
    zoneItemTabIndex: -1
  };
}
function hr(n, e) {
  var t;
  Bi.set((t = e == null ? void 0 : e.dragDisabled) !== null && t !== void 0 ? t : !1);
  var r = e, i = Hm(n, Lr(Lr({}, r), zl()));
  function a() {
    i.update(Lr(Lr({}, r), zl()));
  }
  Mn.subscribe(a);
  function s(l) {
    var c = l.detail.info, d = c.source, h = c.trigger;
    d === jt.KEYBOARD && h === wt.DRAG_STOPPED && Mn.set(!0);
  }
  function u(l) {
    var c = l.detail.info.source;
    c === jt.POINTER && Mn.set(!0);
  }
  return n.addEventListener("consider", s), n.addEventListener("finalize", u), {
    update: function(c) {
      var d, h;
      r = c, Bi.set((d = (h = r) === null || h === void 0 ? void 0 : h.dragDisabled) !== null && d !== void 0 ? d : !1), a();
    },
    destroy: function() {
      n.removeEventListener("consider", s), n.removeEventListener("finalize", u), Mn.unsubscribe(a);
    }
  };
}
function vr(n) {
  n.setAttribute("role", "button");
  function e(a) {
    a.preventDefault(), Mn.set(!1), window.addEventListener("mouseup", r), window.addEventListener("touchend", r);
  }
  function t(a) {
    (a.key === "Enter" || a.key === " ") && Mn.set(!1);
  }
  function r() {
    Mn.set(!0), window.removeEventListener("mouseup", r), window.removeEventListener("touchend", r);
  }
  var i = function() {
    var s = Bi.get(), u = Mn.get();
    s ? (n.tabIndex = -1, n.style.cursor = "") : (n.tabIndex = u ? 0 : -1, n.style.cursor = u ? "grab" : "grabbing");
  };
  return Bi.subscribe(i), Mn.subscribe(i), n.addEventListener("mousedown", e), n.addEventListener("touchstart", e), n.addEventListener("keydown", t), {
    update: function() {
    },
    destroy: function() {
      n.removeEventListener("mousedown", e), n.removeEventListener("touchstart", e), n.removeEventListener("keydown", t), Bi.unsubscribe(i), Mn.unsubscribe(i);
    }
  };
}
function Bm(n) {
  const e = n - 1;
  return e * e * e + 1;
}
function Ko(n, { from: e, to: t }, r = {}) {
  var { delay: i = 0, duration: a = (b) => Math.sqrt(b) * 120, easing: s = Bm } = r, u = getComputedStyle(n), l = u.transform === "none" ? "" : u.transform, [c, d] = u.transformOrigin.split(" ").map(parseFloat);
  c /= n.clientWidth, d /= n.clientHeight;
  var h = Gm(n), f = n.clientWidth / t.width / h, v = n.clientHeight / t.height / h, g = e.left + e.width * c, p = e.top + e.height * d, y = t.left + t.width * c, _ = t.top + t.height * d, x = (g - y) * f, E = (p - _) * v, I = e.width / t.width, S = e.height / t.height;
  return {
    delay: i,
    duration: typeof a == "function" ? a(Math.sqrt(x * x + E * E)) : a,
    easing: s,
    css: (b, A) => {
      var C = A * x, T = A * E, O = b + A * I, V = b + A * S;
      return `transform: ${l} translate(${C}px, ${T}px) scale(${O}, ${V});`;
    }
  };
}
function Gm(n) {
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
const Wm = Un([]);
Wm.subscribe;
Ct(["click", "pointerdown", "pointerup", "pointermove"]);
var Vm = /* @__PURE__ */ z("<div><!></div>");
function bu(n, e) {
  let t = m(e, "variant", 3, "secondary");
  var r = Vm(), i = G(r);
  nf(i, e, "default", {}), de(() => pr(r, 1, `osc-card osc-card--${t()}`, "svelte-14hhvrx")), w(n, r);
}
var Zm = /* @__PURE__ */ z('<div class="panel-parent__header svelte-1rw2lbw"><!></div>'), zm = /* @__PURE__ */ z('<div class="panel-parent__body svelte-1rw2lbw"><!></div>'), jm = /* @__PURE__ */ z('<div class="panel-parent__footer svelte-1rw2lbw"><!></div>'), Xm = /* @__PURE__ */ z('<div class="panel-parent svelte-1rw2lbw"><!> <!> <!></div>');
function _u(n, e) {
  let t = m(e, "backgroundColor", 3, "");
  var r = Xm(), i = G(r);
  {
    var a = (d) => {
      var h = Zm(), f = G(h);
      Ie(f, () => e.header), w(d, h);
    };
    Q(i, (d) => {
      e.header && d(a);
    });
  }
  var s = J(i, 2);
  {
    var u = (d) => {
      var h = zm(), f = G(h);
      Ie(f, () => e.content), w(d, h);
    };
    Q(s, (d) => {
      e.content && d(u);
    });
  }
  var l = J(s, 2);
  {
    var c = (d) => {
      var h = jm(), f = G(h);
      Ie(f, () => e.additional), w(d, h);
    };
    Q(l, (d) => {
      e.additional && d(c);
    });
  }
  de(() => et(r, `--bg-color: ${t() ?? ""}`)), w(n, r);
}
Ct(["click"]);
const qm = 4e3;
function Ym() {
  let n = Ce({ items: [] }), e = 0;
  const t = (i) => {
    n.items = n.items.filter((a) => a.id !== i);
  }, r = (i, a, s, u = qm) => {
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
Ym();
Ct(["input"]);
const Km = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHByb2Nlc3Nlcz4KICA8cHJvY2Vzcz4KICAgIDxpZD5zdGFuZGFyZC1wcm9jZXNzLTE8L2lkPgogICAgPHZlcnNpb24+MC4wLjE8L3ZlcnNpb24+CiAgICA8bmFtZT5TdGFuZGFyZCBQcm9jZXNzIDE8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+CiAgICAgIFRoaXMgaXMgYSBzdGFuZGFyZGl6ZWQgcHJvY2VzcyB1c2VkIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHkKICAgIDwvZGVzY3JpcHRpb24+CgogICAgPHBsdWdpbnMtc2VxdWVuY2U+CiAgICAgIDxncm91cD4KICAgICAgICA8dGl0bGU+VHlwZXM8L3RpdGxlPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+dGVtcGxhdGUtZ2VuZXJhdG9yLXh5ejwvaWQ+CiAgICAgICAgICA8bmFtZT5UZW1wbGF0ZSBHZW5lcmF0b3I8L25hbWU+CiAgICAgICAgICA8c3JjIHR5cGU9ImV4dGVybmFsIj4KICAgICAgICAgICAgaHR0cHM6Ly9hc2UtY29tcGFzLmdpdGh1Yi5pby9jb21wYXMtdHJhbnNuZXRidy1wbHVnaW5zL2JlYXJpbmdwb2ludC9jb21wYXMvcGx1Z2lucy90ZW1wbGF0ZS1nZW5lcmF0b3IvaW5kZXguanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+dHlwZS1kZXNpZ25lci14eXo8L2lkPgogICAgICAgICAgPG5hbWU+VHlwZSBEZXNpZ25lcjwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iZXh0ZXJuYWwiPgogICAgICAgICAgICBodHRwczovL3NwcmludGVpbnMuZ2l0aHViLmlvL29zY2QtcGx1Z2lucy90eXBlLWRlc2lnbmVyL2luZGV4LmpzCiAgICAgICAgICA8L3NyYz4KICAgICAgICA8L3BsdWdpbj4KCiAgICAgICAgPHBsdWdpbj4KICAgICAgICAgIDxpZD50eXBlLWRpc3RyaWJ1dG9yLXh5ejwvaWQ+CiAgICAgICAgICA8bmFtZT5UeXBlIERpc3RyaWJ1dG9yPC9uYW1lPgogICAgICAgICAgPHNyYyB0eXBlPSJleHRlcm5hbCI+CiAgICAgICAgICAgIGh0dHBzOi8vYXNlLWNvbXBhcy5naXRodWIuaW8vY29tcGFzLXRyYW5zbmV0YnctcGx1Z2lucy9iZWFyaW5ncG9pbnQvY29tcGFzL3BsdWdpbnMvdHlwZS1kaXN0cmlidXRvci9pbmRleC5qcwogICAgICAgICAgPC9zcmM+CiAgICAgICAgPC9wbHVnaW4+CiAgICAgIDwvZ3JvdXA+CgogICAgICA8Z3JvdXA+CiAgICAgICAgPHRpdGxlPkNvbmZpZ3VyYXRpb248L3RpdGxlPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+Y29tbXVuaWNhdGlvbi14eXo8L2lkPgogICAgICAgICAgPG5hbWU+Q29tbXVuaWNhdGlvbjwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iaW50ZXJuYWwiPgogICAgICAgICAgICAvcGx1Z2lucy9zcmMvZWRpdG9ycy9Db21tdW5pY2F0aW9uLmpzCiAgICAgICAgICA8L3NyYz4KICAgICAgICA8L3BsdWdpbj4KCiAgICAgICAgPHBsdWdpbj4KICAgICAgICAgIDxpZD5zdWJzdGF0aW9uLXh5ejwvaWQ+CiAgICAgICAgICA8bmFtZT5TdWJzdGF0aW9uPC9uYW1lPgogICAgICAgICAgPHNyYyB0eXBlPSJpbnRlcm5hbCI+CiAgICAgICAgICAgIC9wbHVnaW5zL3NyYy9lZGl0b3JzL1N1YnN0YXRpb24uanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+cHVibGlzaGVyLXh5ejwvaWQ+CiAgICAgICAgICA8bmFtZT5QdWJsaXNoZXI8L25hbWU+CiAgICAgICAgICA8c3JjIHR5cGU9ImludGVybmFsIj4KICAgICAgICAgICAgL2V4dGVybmFsLXBsdWdpbnMvb3NjZC1wdWJsaXNoZXIvb3NjZC1wdWJsaXNoZXIuanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+c3Vic2NyaWJlLWxhdGVyLWJpbmRpbmcteHl6PC9pZD4KICAgICAgICAgIDxuYW1lPlN1YnNjcmliZTwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iaW50ZXJuYWwiPgogICAgICAgICAgICAvZXh0ZXJuYWwtcGx1Z2lucy9vc2NkLXN1YnNjcmliZXItbGF0ZXItYmluZGluZy9vc2NkLXN1YnNjcmliZXItbGF0ZXItYmluZGluZy5qcwogICAgICAgICAgPC9zcmM+CiAgICAgICAgPC9wbHVnaW4+CiAgICAgIDwvZ3JvdXA+CgogICAgICA8Z3JvdXA+CiAgICAgICAgPHRpdGxlPkRvY3VtZW50YXRpb248L3RpdGxlPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+YXV0b2RvYy14eXo8L2lkPgogICAgICAgICAgPG5hbWU+QXV0b0RvYzwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iZXh0ZXJuYWwiPgogICAgICAgICAgICBodHRwczovL3NwcmludGVpbnMuZ2l0aHViLmlvL29zY2QtcGx1Z2lucy9hdXRvLWRvYy9pbmRleC5qcwogICAgICAgICAgPC9zcmM+CiAgICAgICAgPC9wbHVnaW4+CgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+bG9jYXRpb24tbWFuYWdlci14eXo8L2lkPgogICAgICAgICAgPG5hbWU+TG9jYXRpb24gTWFuYWdlcjwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iZXh0ZXJuYWwiPgogICAgICAgICAgICBodHRwczovL2FzZS1jb21wYXMuZ2l0aHViLmlvL2NvbXBhcy10cmFuc25ldGJ3LXBsdWdpbnMvYmVhcmluZ3BvaW50L2NvbXBhcy9wbHVnaW5zL2xvY2F0aW9uLW1hbmFnZXIvaW5kZXguanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgoKICAgICAgICA8cGx1Z2luPgogICAgICAgICAgPGlkPmhpc3Rvcnktdmlld2VyLXh5ejwvaWQ+CiAgICAgICAgICA8bmFtZT5IaXN0b3J5IFZpZXdlcjwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iZXh0ZXJuYWwiPgogICAgICAgICAgICBodHRwczovL2FzZS1jb21wYXMuZ2l0aHViLmlvL2NvbXBhcy10cmFuc25ldGJ3LXBsdWdpbnMvYmVhcmluZ3BvaW50L2NvbXBhcy9wbHVnaW5zL2hpc3Rvcnktdmlld2VyL2luZGV4LmpzCiAgICAgICAgICA8L3NyYz4KICAgICAgICA8L3BsdWdpbj4KICAgICAgPC9ncm91cD4KICAgIDwvcGx1Z2lucy1zZXF1ZW5jZT4KICA8L3Byb2Nlc3M+CjwvcHJvY2Vzc2VzPgo=", Eo = Ce({ loading: !1 }), So = Ce({ error: "" }), er = Ce({ processes: [] }), It = Ce({ process: null }), ii = Ce({ isEditing: !1 }), yu = Ce({ plugins: [] }), Jm = Km, Cu = "engineeringWizardProcesses", Qm = "external";
if (typeof localStorage < "u") {
  const n = localStorage.getItem(Cu);
  if (n)
    try {
      const e = JSON.parse(n);
      Array.isArray(e) && (er.processes = e);
    } catch {
    }
}
Rc(() => {
  Se(() => {
    er.processes.forEach((e) => {
      var t;
      (t = e.pluginGroups) == null || t.forEach((r) => {
        var i;
        (i = r.plugins) == null || i.length;
      });
    });
    const n = oc(er.processes);
    if (!(typeof localStorage > "u"))
      try {
        localStorage.setItem(Cu, JSON.stringify(n));
      } catch {
      }
  });
});
const fr = (n) => {
  var e;
  return ((e = n == null ? void 0 : n.textContent) == null ? void 0 : e.trim()) ?? "";
}, $m = (n, e) => (n == null ? void 0 : n.getAttribute(e)) ?? void 0, ep = (n) => {
  const e = $m(n == null ? void 0 : n.querySelector("src"), "type") ?? "";
  return e === "internal" || e === "external" ? e : Qm;
}, Ka = (n, e) => Array.from(n.querySelectorAll(e)), jl = (n) => ({
  id: fr(n.querySelector("id")),
  name: fr(n.querySelector("name")),
  src: fr(n.querySelector("src")) || void 0,
  sourceUrl: fr(n.querySelector("sourceUrl")) || void 0,
  type: ep(n)
}), tp = (n) => Ka(n, "process").map((e) => {
  const t = Ka(e, ":scope > plugins-sequence > group"), r = t.length ? t.map((i) => ({
    title: fr(i.querySelector(":scope > title")) || "Untitled",
    plugins: Ka(i, ":scope > plugin").map(jl)
  })) : [
    {
      title: "Ungrouped",
      plugins: Ka(e, ":scope > plugins-sequence > plugin").map(jl)
    }
  ];
  return {
    id: fr(e.querySelector(":scope > id")),
    version: fr(e.querySelector(":scope > version")),
    name: fr(e.querySelector(":scope > name")),
    description: fr(e.querySelector(":scope > description")),
    pluginGroups: r
  };
});
async function np() {
  Eo.loading = !0, So.error = "";
  try {
    const n = await fetch(Jm, { cache: "no-cache" });
    if (!n.ok)
      throw new Error(`HTTP ${n.status}${n.statusText ? `: ${n.statusText}` : ""}`);
    const e = await n.text();
    if (typeof DOMParser > "u")
      throw new Error("DOMParser is not available in this environment.");
    const t = new DOMParser().parseFromString(e, "application/xml");
    if (t.getElementsByTagName("parsererror").length)
      throw new Error("Invalid XML file format.");
    const r = tp(t);
    return er.processes = r, r;
  } catch (n) {
    const e = n instanceof Error ? n.message : "Failed to load processes.";
    throw So.error = e, n;
  } finally {
    Eo.loading = !1;
  }
}
function rp(n, e, t) {
  const r = "Ungrouped", i = er.processes.find((u) => u.id === n);
  if (!i) return;
  const a = i.pluginGroups ?? (i.pluginGroups = []);
  let s = a.find((u) => u.title === r);
  s || (s = { title: r, plugins: [] }, a.push(s)), s.plugins || (s.plugins = []), s.plugins.push(e);
}
function ip(n, e) {
  const t = er.processes.find((r) => r.id === n);
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
function ap(n) {
  const e = er.processes.find((t) => t.id === n);
  if (!(!e || !e.pluginGroups))
    for (const t of e.pluginGroups)
      t.plugins && (t.plugins.length = 0);
}
function sp(n, e, t) {
  const r = er.processes.find((s) => s.id === n);
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
function op(n, e) {
  const t = er.processes.find((r) => r.id === n);
  t && t.pluginGroups.splice(0, t.pluginGroups.length, ...e);
}
function lp(n) {
  yu.plugins = [...n];
}
function dp(n) {
  return (n.pluginGroups ?? []).flatMap((e) => e.plugins ?? []);
}
var up = (n, e, t) => e.handleView(t()), cp = (n, e, t) => e.handleStart(t()), fp = /* @__PURE__ */ z('<button type="button" class="icon svelte-au6aaq" aria-label="View process"><!></button> <button type="button" class="icon svelte-au6aaq" aria-label="Start process"><!></button>', 1), hp = /* @__PURE__ */ z(`<div class="processes svelte-au6aaq"><div class="process-banner svelte-au6aaq"><div class="process-banner__info svelte-au6aaq"><!> <span class="svelte-au6aaq">A process “Process Name C” has already been started for the ---.scd.
        Would you like to continue where you left off?</span></div> <!></div> <div class="process-toolbar svelte-au6aaq"><!> <!></div> <!></div>`);
function vp(n, e) {
  Ae(e, !0);
  let t = /* @__PURE__ */ oe(""), r = /* @__PURE__ */ ae(() => o(t).trim().toLowerCase()), i = /* @__PURE__ */ ae(() => (er.processes ?? []).map((_) => ({ ..._, displayName: _.name || _.id }))), a = /* @__PURE__ */ ae(() => o(r) ? o(i).filter((_) => (_.displayName ?? "").toLowerCase().includes(o(r))) : o(i));
  const s = [
    { key: "displayName", header: "Name" },
    { key: "description", header: "Description" }
  ], u = () => {
    console.log("Add new process clicked");
  };
  var l = hp(), c = G(l), d = G(c), h = G(d);
  Ov(h, {});
  var f = J(d, 2);
  Hr(f, {
    variant: "raised",
    style: "--mdc-theme-primary: #ffffff; --mdc-theme-on-primary: #004552",
    $$events: { click: () => console.log("Continue Process") },
    children: (_, x) => {
      var E = dt("CONTINUE");
      w(_, E);
    },
    $$slots: { default: !0 }
  });
  var v = J(c, 2), g = G(v);
  ds(g, {
    variant: "outlined",
    label: "Search Processes",
    get value() {
      return o(t);
    },
    set value(_) {
      B(t, _, !0);
    }
  });
  var p = J(g, 2);
  Hr(p, {
    variant: "raised",
    style: "--mdc-theme-primary: #004552; --mdc-theme-on-primary: #ffffff",
    $$events: { click: u },
    children: (_, x) => {
      var E = dt("ADD NEW PROCESS");
      w(_, E);
    },
    $$slots: { default: !0 }
  });
  var y = J(v, 2);
  pg(y, {
    get items() {
      return o(a);
    },
    get columns() {
      return s;
    },
    get loading() {
      return Eo.loading;
    },
    get errorMsg() {
      return So.error;
    },
    emptyText: "No processes available.",
    hasActions: !0,
    headerBg: "#DAE3E6",
    rowBg: "#ffffff",
    actions: (x, E) => {
      let I = () => E == null ? void 0 : E().item;
      var S = fp(), b = j(S);
      b.__click = [up, e, I];
      var A = G(b);
      Qd(A, { svgStyles: "fill: #002B37; width: 100%; height: 100%;" });
      var C = J(b, 2);
      C.__click = [cp, e, I];
      var T = G(C);
      Dv(T, { svgStyles: "fill: #002B37; width: 100%; height: 100%;" }), w(x, S);
    },
    $$slots: { actions: !0 }
  }), w(n, l), Ee();
}
Ct(["click"]);
var gp = (n, e, t) => e.onSelect(o(t).id), mp = /* @__PURE__ */ z("<button><!></button>"), pp = /* @__PURE__ */ z('<div class="step-line svelte-1ar0udo" aria-hidden="true"></div>'), Ip = /* @__PURE__ */ z('<div class="step svelte-1ar0udo"><!> <p> </p></div> <!>', 1), bp = /* @__PURE__ */ z('<div class="steps svelte-1ar0udo"></div>');
function _p(n, e) {
  Ae(e, !0);
  let t = m(e, "items", 19, () => []), r = m(e, "visited", 19, () => []), i = m(e, "currentId", 3, null), a = m(e, "status", 19, () => ({})), s = m(e, "tooltipMap", 19, () => ({}));
  var u = bp();
  vn(u, 21, t, mr, (l, c, d) => {
    var h = Ip(), f = j(h), v = G(f);
    {
      let x = /* @__PURE__ */ ae(() => s()[o(c).id] ?? "");
      eu(v, {
        get content() {
          return o(x);
        },
        side: "bottom",
        children: (E, I) => {
          var S = mp();
          S.__click = [gp, e, c];
          let b;
          var A = G(S);
          {
            var C = (O) => {
              var V = ie(), D = j(V);
              {
                var P = (U) => {
                  Av(U);
                }, ee = (U) => {
                  var H = ie(), F = j(H);
                  {
                    var X = (M) => {
                      Sv(M);
                    }, ue = (M) => {
                      var Y = ie(), K = j(Y);
                      {
                        var ce = (te) => {
                          wv(te, {});
                        }, le = (te) => {
                          var ge = dt();
                          ge.nodeValue = d + 1, w(te, ge);
                        };
                        Q(
                          K,
                          (te) => {
                            a()[o(c).id] === "warning" ? te(ce) : te(le, !1);
                          },
                          !0
                        );
                      }
                      w(M, Y);
                    };
                    Q(
                      F,
                      (M) => {
                        a()[o(c).id] === "error" ? M(X) : M(ue, !1);
                      },
                      !0
                    );
                  }
                  w(U, H);
                };
                Q(D, (U) => {
                  a()[o(c).id] === "check" ? U(P) : U(ee, !1);
                });
              }
              w(O, V);
            }, T = (O) => {
              var V = dt();
              V.nodeValue = d + 1, w(O, V);
            };
            Q(A, (O) => {
              r().includes(o(c).id) && o(c).id !== i() ? O(C) : O(T, !1);
            });
          }
          de(
            (O) => {
              Jt(S, "aria-current", o(c).id === i() ? "step" : void 0), b = pr(S, 1, "", null, b, O);
            },
            [
              () => ({
                "not-visited": !r().includes(o(c).id),
                current: o(c).id === i(),
                visited: r().includes(o(c).id) && o(c).id !== i()
              })
            ]
          ), w(E, S);
        },
        $$slots: { default: !0 }
      });
    }
    var g = J(v, 2), p = G(g), y = J(f, 2);
    {
      var _ = (x) => {
        var E = pp();
        w(x, E);
      };
      Q(y, (x) => {
        d < t().length - 1 && x(_);
      });
    }
    de(() => Pe(p, o(c).label)), w(l, h);
  }), w(n, u), Ee();
}
Ct(["click"]);
function yp(n, e) {
  const t = [
    { id: "process-definition", label: "Process Definition" },
    {
      id: "validator-configuration",
      label: "Validator Configuration"
    }
  ];
  let r = m(e, "currentId", 3, null), i = m(e, "visited", 19, () => []);
  _p(n, {
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
var Cp = /* @__PURE__ */ z('<div style="display:flex;align-items:center;gap:0.5rem;"><button type="button" class="back-container svelte-1i38ker"><!> <span>Back to Overview</span> <span class="back-container__title svelte-1i38ker"> </span></button></div>');
function Au(n, e) {
  let t = m(e, "title", 3, "Engineering Wizard");
  var r = Cp(), i = G(r);
  i.__click = function(...l) {
    var c;
    (c = e.onBack) == null || c.apply(this, l);
  };
  var a = G(i);
  Mv(a, {});
  var s = J(a, 4), u = G(s);
  de(() => Pe(u, t())), w(n, r);
}
Ct(["click"]);
var Ap = /* @__PURE__ */ z('<div class="add-group-form svelte-1ceeuzb"><!> <!></div>');
function Ep(n, e) {
  Ae(e, !0);
  let t = m(e, "open", 15, !1), r = /* @__PURE__ */ oe(""), i = /* @__PURE__ */ oe(Ce((e.groups + 1).toString()));
  const a = () => Fr("cancel"), s = () => Fr("confirm", { name: o(r), position: Number(o(i)) });
  let u = /* @__PURE__ */ ae(() => [
    ...Array.from({ length: e.groups }, (c, d) => ({ value: (d + 1).toString(), label: (d + 1).toString() })),
    // iterate from 1..groups
    { value: (e.groups + 1).toString(), label: "End" }
    // add option end
  ]), l = /* @__PURE__ */ ae(() => o(r) && o(i));
  {
    const c = (h) => {
      var f = Ap(), v = G(f);
      zd(v, {
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
      var g = J(v, 2);
      Yh(g, {
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
      }), w(h, f);
    };
    let d = /* @__PURE__ */ ae(() => !o(l));
    Wo(n, {
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
      set open(h) {
        t(h);
      },
      content: c,
      $$slots: { content: !0 }
    });
  }
  Ee();
}
var Sp = /* @__PURE__ */ z('<div class="group-list-item svelte-1xbvuu5"><div><!></div> <!> <!></div>'), xp = /* @__PURE__ */ z('<div class="edit-groups-form"><h3>Drag & Drop to change Order</h3> <div></div></div>');
function wp(n, e) {
  Ae(e, !0);
  const t = 100;
  let r = m(e, "open", 15, !1), i = /* @__PURE__ */ oe(Ce([...e.groups]));
  const a = () => Fr("cancel"), s = () => {
    Fr("confirm", { groups: o(i).map((d) => ({ ...d })) });
  }, u = (d) => () => {
    B(i, o(i).filter((h) => h.id !== d), !0);
  }, l = (d) => {
    B(i, d.detail.items, !0);
  };
  let c = /* @__PURE__ */ ae(() => o(i).every((d) => d.title.trim().length > 0));
  {
    const d = (f) => {
      var v = xp(), g = J(G(v), 2);
      vn(g, 29, () => o(i), (p) => p.id, (p, y, _) => {
        var x = Sp(), E = G(x), I = G(E);
        Vo(I, {}), Oe(E, (A) => vr == null ? void 0 : vr(A));
        var S = J(E, 2);
        zd(S, {
          label: "Name",
          variant: "outlined",
          required: !0,
          get value() {
            return o(y).title;
          },
          set value(A) {
            o(y).title = A;
          }
        });
        var b = J(S, 2);
        {
          let A = /* @__PURE__ */ ae(() => u(o(y).id));
          tu(b, {
            type: "delete",
            tooltip: "Delete",
            fillColor: "#FF203A",
            get onClick() {
              return o(A);
            }
          });
        }
        de(() => Jt(x, "data-id", o(y).id)), Go(x, () => Ko, () => ({ duration: t })), w(p, x);
      }), Oe(g, (p, y) => hr == null ? void 0 : hr(p, y), () => ({
        items: o(i),
        flipDurationMs: t,
        dropTargetStyle: {}
      })), hn("consider", g, l), hn("finalize", g, l), w(f, v);
    };
    let h = /* @__PURE__ */ ae(() => !o(c));
    Wo(n, {
      title: "Edit Groups",
      confirmActionText: "Save",
      maxWidth: "600px",
      onConfirm: s,
      onCancel: a,
      onClose: a,
      get confirmDisabled() {
        return o(h);
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
  Ee();
}
async function Tp(n, e, t) {
  const r = await Rs(Ep, { groups: e().length });
  r.type === "confirm" && t()(r.data.name, r.data.position);
}
async function Dp(n, e, t) {
  const r = e().map((s, u) => ({ id: u.toString(), title: s.title })), i = await Rs(wp, { groups: r });
  if (i.type !== "confirm") return;
  const a = i.data.groups.map((s) => {
    const u = parseInt(s.id, 10);
    return { ...e()[u], title: s.title };
  });
  t()(a);
}
var Lp = /* @__PURE__ */ z('<div class="plugin-list__header-action svelte-1a2zky1"><!></div>'), Op = /* @__PURE__ */ z('<header class="plugin-list__header svelte-1a2zky1"><p class="plugin-list__title svelte-1a2zky1"> </p> <!></header>'), Rp = /* @__PURE__ */ z('<div aria-label="drag-handle"><!></div>'), Mp = /* @__PURE__ */ z('<div class="plugin-list__item-action svelte-1a2zky1"><!></div>'), Pp = /* @__PURE__ */ z('<div class="plugin-list__item-row svelte-1a2zky1"><div class="plugin-list__item-row__left svelte-1a2zky1"><!> <span class="plugin-list__item-name svelte-1a2zky1"> </span></div> <!></div>'), Fp = /* @__PURE__ */ z("<div><!></div>"), kp = /* @__PURE__ */ z('<section class="plugin-list__group svelte-1a2zky1"><header class="plugin-list__group-header svelte-1a2zky1"><span class="plugin-list__group-index svelte-1a2zky1"></span> <span class="plugin-list__group-title svelte-1a2zky1"> </span></header> <div></div></section>'), Np = /* @__PURE__ */ z('<div class="plugin-list__body svelte-1a2zky1"></div>'), Hp = /* @__PURE__ */ z('<div class="plugin-list__footer svelte-1a2zky1"><button type="button" class="plugin-list__footer-button plugin-list__footer-button--edit svelte-1a2zky1"><!> <span>Edit groups</span></button> <button type="button" class="plugin-list__footer-button plugin-list__footer-button--add svelte-1a2zky1"><!> <span>Add group</span></button></div>');
function Eu(n, e) {
  Ae(e, !0);
  const t = (h) => {
    var f = Op(), v = G(f), g = G(v), p = J(v, 2);
    {
      var y = (_) => {
        var x = Lp(), E = G(x);
        Ie(E, () => e.headerAction), w(_, x);
      };
      Q(p, (_) => {
        e.headerAction && _(y);
      });
    }
    de(() => Pe(g, s())), w(h, f);
  }, r = (h) => {
    var f = Np();
    vn(f, 21, a, mr, (v, g, p) => {
      var y = kp(), _ = G(y), x = G(_);
      x.textContent = `${p + 1}.`;
      var E = J(x, 2), I = G(E), S = J(_, 2);
      let b;
      vn(S, 31, () => o(g).plugins, (A) => A.id, (A, C, T) => {
        var O = Fp(), V = G(O);
        bu(V, {
          variant: "secondary",
          children: (D, P) => {
            var ee = Pp(), U = G(ee), H = G(U);
            {
              var F = (K) => {
                var ce = Rp(), le = G(ce);
                Vo(le, {}), Oe(ce, (te) => vr == null ? void 0 : vr(te)), w(K, ce);
              };
              Q(H, (K) => {
                ii.isEditing && K(F);
              });
            }
            var X = J(H, 2), ue = G(X), M = J(U, 2);
            {
              var Y = (K) => {
                var ce = Mp(), le = G(ce);
                Ie(le, () => e.itemAction, () => ({
                  group: o(g),
                  plugin: o(C),
                  groupIndex: p,
                  pluginIndex: o(T)
                })), w(K, ce);
              };
              Q(M, (K) => {
                e.itemAction && K(Y);
              });
            }
            de(() => Pe(ue, o(C).name)), w(D, ee);
          },
          $$slots: { default: !0 }
        }), de(() => Jt(O, "data-id", o(C).id)), Go(O, () => Ko, () => ({ duration: 100 })), w(A, O);
      }), Oe(S, (A, C) => hr == null ? void 0 : hr(A, C), () => ({
        items: o(g).plugins,
        flipDurationMs: 100,
        dropTargetStyle: {}
      })), de(
        (A) => {
          Pe(I, o(g).title), b = pr(S, 1, "plugin-list__group-plugins svelte-1a2zky1", null, b, A);
        },
        [
          () => ({
            "plugin_list__group-plugins--dashed": ii.isEditing
          })
        ]
      ), hn("consider", S, (A) => c(A, o(g))), hn("finalize", S, (A) => d(A, o(g))), w(v, y);
    }), w(h, f);
  }, i = (h) => {
    var f = ie(), v = j(f);
    {
      var g = (p) => {
        var y = Hp(), _ = G(y);
        _.__click = [Dp, a, l];
        var x = G(_);
        Kd(x, {
          svgStyles: "fill: var(--primary-base);",
          "aria-hidden": "true"
        });
        var E = J(_, 2);
        E.__click = [Tp, a, u];
        var I = G(E);
        $d(I, {
          svgStyles: "fill: var(--primary-base);",
          "aria-hidden": "true"
        }), w(p, y);
      };
      Q(v, (p) => {
        ii.isEditing && p(g);
      });
    }
    w(h, f);
  };
  let a = m(e, "pluginGroups", 19, () => []), s = m(e, "title", 3, "Process"), u = m(e, "onAddGroup", 3, () => {
  }), l = m(e, "onUpdateGroups", 3, (h) => {
  });
  function c(h, f) {
    f.plugins = h.detail.items;
  }
  function d(h, f) {
    h.detail.info.trigger === wt.DROPPED_OUTSIDE_OF_ANY ? f.plugins = h.detail.items.filter((v) => h.detail.info.id !== v.id) : f.plugins = h.detail.items, l()(a());
  }
  _u(n, {
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
Ct(["click"]);
function Up(n, e) {
  const t = (i) => {
    Hr(i, {
      variant: "raised",
      style: "--mdc-theme-primary: var(--on-brand); --mdc-theme-on-primary: var(--brand)",
      "aria-label": "Edit process",
      get onclick() {
        return e.requestEdit;
      },
      children: (a, s) => {
        var u = dt("EDIT");
        w(a, u);
      },
      $$slots: { default: !0 }
    });
  };
  let r = m(e, "pluginGroups", 19, () => []);
  Eu(n, {
    get pluginGroups() {
      return r();
    },
    get headerAction() {
      return t;
    }
  });
}
const ps = /* @__PURE__ */ new WeakSet();
function Bp() {
  var e;
  const n = document.querySelector("open-scd");
  return ((e = n == null ? void 0 : n.shadowRoot) == null ? void 0 : e.querySelector("compas-layout")) ?? null;
}
function Gp(n) {
  var e;
  (e = Bp()) == null || e.dispatchEvent(
    new CustomEvent("toggle-editor-tabs", {
      detail: { visible: n },
      bubbles: !0,
      composed: !0
    })
  );
}
async function Wp(n) {
  if (!customElements.get(n.id) && n.type === "external") {
    const t = (await import(
      /* @vite-ignore */
      n.src
    )).default;
    ps.has(t) || (customElements.define(n.id, t), ps.add(t));
  }
}
async function Vp(n) {
  await Promise.all(
    n.filter((e) => e.type === "external").map(async (e) => {
      try {
        if (!customElements.get(e.id)) {
          const r = (await import(
            /* @vite-ignore */
            e.src
          )).default;
          ps.has(r) || (customElements.define(e.id, r), ps.add(r));
        }
      } catch (t) {
        console.error("Failed to preload plugin", e.id, t);
      }
    })
  );
}
const Nr = Un(!0);
Nr.subscribe((n) => {
  Gp(n);
});
var Zp = (n, e, t) => e(t().id), zp = /* @__PURE__ */ z('<button type="button" class="plugin-list__removeBtn svelte-gipzw9"><!></button>');
function jp(n, e) {
  Ae(e, !0);
  const t = (d) => {
    var h = ie(), f = j(h);
    {
      var v = (g) => {
        Hr(g, {
          style: "background-color: #FF203A",
          variant: "raised",
          "aria-label": "Remove all plugins",
          onclick: a,
          children: (p, y) => {
            var _ = dt("REMOVE ALL");
            w(p, _);
          },
          $$slots: { default: !0 }
        });
      };
      Q(f, (g) => {
        o(c) && g(v);
      });
    }
    w(d, h);
  }, r = (d, h) => {
    let f = () => h == null ? void 0 : h().plugin;
    var v = zp();
    v.__click = [Zp, s, f];
    var g = G(v);
    mv(g, { svgStyles: "fill: #FF203A" }), de(() => Jt(v, "aria-label", `Remove ${f().name}`)), w(d, v);
  };
  let i = m(e, "pluginGroups", 19, () => []);
  async function a() {
    (await Rs(uv, {
      title: "Remove all entries?",
      message: "This action cannot be undone. You will need to manually search for and re-add each item, and rearrange them again.",
      confirmActionText: "Remove All",
      cancelActionText: "Cancel",
      confirmActionColor: "danger"
    })).type === "confirm" && ap(It.process.id);
  }
  function s(d) {
    ip(It.process.id, d);
  }
  function u(d, h) {
    sp(It.process.id, d, h);
  }
  function l(d) {
    op(It.process.id, d);
  }
  let c = /* @__PURE__ */ ae(() => i().flatMap((d) => d.plugins).length > 0);
  Eu(n, {
    get pluginGroups() {
      return i();
    },
    get headerAction() {
      return t;
    },
    get itemAction() {
      return r;
    },
    onAddGroup: (d, h) => u(d, h),
    onUpdateGroups: (d) => l(d)
  }), Ee();
}
Ct(["click"]);
function Xp(n) {
  var r;
  const e = n.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "").slice(0, 32), t = ((r = crypto.randomUUID) == null ? void 0 : r.call(crypto).split("-")[0]) ?? Math.random().toString(36).slice(2, 10);
  return `ext-${e || "plugin"}-${t}`;
}
var qp = /* @__PURE__ */ z('<div class="card-header svelte-1fcjrhj"><p class="header-info svelte-1fcjrhj">Add External Plugins</p> <div class="search-input svelte-1fcjrhj"><!></div></div>'), Yp = (n, e, t) => e(o(t), It.process.id), Kp = /* @__PURE__ */ z('<div class="card-item-content svelte-1fcjrhj"><div class="card-item-content__left svelte-1fcjrhj"><div aria-label="drag-handle"><!></div> <p class="plugin-name svelte-1fcjrhj"> </p></div> <button class="plugin-add-btn svelte-1fcjrhj"><!></button></div>'), Jp = /* @__PURE__ */ z("<div><!></div>"), Qp = /* @__PURE__ */ z('<div class="card-parent-content svelte-1fcjrhj"></div>');
function $p(n, e) {
  Ae(e, !0);
  const t = (c) => {
    var d = qp(), h = J(G(d), 2), f = G(h);
    ds(f, {
      variant: "outlined",
      label: "Search Plugins",
      get value() {
        return a();
      },
      set value(v) {
        a(v);
      }
    }), w(c, d);
  }, r = (c) => {
    var d = Qp();
    vn(d, 29, i, (h) => h.id, (h, f) => {
      var v = Jp(), g = G(v);
      bu(g, {
        variant: "secondary",
        children: (p, y) => {
          var _ = Kp(), x = G(_), E = G(x), I = G(E);
          Vo(I, {}), Oe(E, (T) => vr == null ? void 0 : vr(T));
          var S = J(E, 2), b = G(S), A = J(x, 2);
          A.__click = [Yp, s, f];
          var C = G(A);
          $d(C, { svgStyles: "fill: var(--brand);" }), de(() => Pe(b, o(f).name)), w(p, _);
        },
        $$slots: { default: !0 }
      }), de(() => Jt(v, "data-id", o(f).id)), Go(v, () => Ko, () => ({ duration: 100 })), w(h, v);
    }), Oe(d, (h, f) => hr == null ? void 0 : hr(h, f), () => ({
      items: i(),
      flipDurationMs: 100,
      dropTargetStyle: {},
      dropFromOthersDisabled: !0
    })), hn("consider", d, l), hn("finalize", d, u), w(c, d);
  };
  let i = m(e, "plugins", 23, () => []), a = m(e, "searchTerm", 15, "");
  function s(c, d) {
    rp(d, c);
  }
  const u = (c) => {
    i(c.detail.items);
  }, l = (c) => {
    const { detail: d } = c, { trigger: h, id: f } = d.info;
    if (h === wt.DRAG_STARTED) {
      const v = i().findIndex((p) => p.id === f), g = `${f}_copy`;
      c.detail.items = c.detail.items.filter((p) => !p[Na]), c.detail.items.splice(v, 0, { ...i()[v], id: g }), i(c.detail.items);
    } else
      i([...i()]);
  };
  _u(n, {
    backgroundColor: "#DAE3E6",
    get header() {
      return t;
    },
    get content() {
      return r;
    }
  }), Ee();
}
Ct(["click"]);
var eI = /* @__PURE__ */ z('<div class="process-definition-view svelte-ws8xx1"><!> <div class="drag-and-drop-info svelte-ws8xx1"><!> <p class="svelte-ws8xx1">SELECT OR DRAG & DROP PLUGINS</p></div> <!></div>');
function tI(n, e) {
  Ae(e, !0);
  let t = m(e, "pluginGroups", 19, () => []), r = /* @__PURE__ */ oe(""), i = /* @__PURE__ */ ae(() => {
    const h = yu.plugins.map((v) => ({
      id: Xp(v.name),
      name: v.name,
      src: v.src,
      type: "internal"
    })), f = o(r).toLowerCase().trim();
    return f ? h.filter((v) => v.name.toLowerCase().includes(f)) : h;
  });
  var a = eI(), s = G(a);
  jp(s, {
    get pluginGroups() {
      return t();
    }
  });
  var u = J(s, 2), l = G(u);
  qv(l, { svgStyles: "fill: #6B9197" });
  var c = J(u, 2);
  $p(c, {
    get plugins() {
      return o(i);
    },
    get searchTerm() {
      return o(r);
    },
    set searchTerm(d) {
      B(r, d, !0);
    }
  }), w(n, a), Ee();
}
const nI = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmllZC1uYW1lLTAwMTwvaWQ+CiAgICA8bmFtZT5JRUQgTmFtZSBGb3JtYXQ8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+RW5zdXJlcyBJRUQgbmFtZXMgZm9sbG93IHRoZSBuYW1pbmcgY29udmVudGlvbiwgYWxsb3dlZCBjaGFyYWN0ZXJzLCBhbmQgdW5pcXVlbmVzcyB3aXRoaW4gdGhlIHByb2plY3QuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2staWVkLW5hbWUtZm9ybWF0PC92YWxpZGF0b3I+CiAgPC92YWxpZGF0aW9uPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmFwLWNvbmZpZy0wMDI8L2lkPgogICAgPG5hbWU+QWNjZXNzIFBvaW50IENvbmZpZ3VyYXRpb248L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+VmVyaWZpZXMgQWNjZXNzUG9pbnQgZWxlbWVudHMgaGF2ZSByZXF1aXJlZCBhdHRyaWJ1dGVzIGFuZCB2YWxpZCByZWZlcmVuY2VzIHRvIHNlcnZlci9zZXJ2aWNlcy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1hY2Nlc3MtcG9pbnQtY29uZmlnPC92YWxpZGF0b3I+CiAgPC92YWxpZGF0aW9uPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmxuLWFzc2lnbi0wMDM8L2lkPgogICAgPG5hbWU+TG9naWNhbCBOb2RlIEFzc2lnbm1lbnRzPC9uYW1lPgogICAgPGRlc2NyaXB0aW9uPlZhbGlkYXRlcyBsb2dpY2FsIG5vZGVzIGFyZSBjb3JyZWN0bHkgYXNzaWduZWQgd2l0aCB2YWxpZCBsbkNsYXNzL2xuSW5zdCBjb21iaW5hdGlvbnMgYW5kIHJlcXVpcmVkIExOcyBhcmUgcHJlc2VudC48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1sbi1hc3NpZ25tZW50czwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4KCg==", rI = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPnN1YnN0YXRpb24tc3RydWN0dXJlLTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJzdGF0aW9uIFN0cnVjdHVyZSBJbnRlZ3JpdHk8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+U3RydWN0dXJlIEludGVncml0eSBEZXNjcmlwdGlvbjwvZGVzY3JpcHRpb24+CiAgICA8dmFsaWRhdG9yPmNoZWNrLXN1YnN0YXRpb24tc3RydWN0dXJlPC92YWxpZGF0b3I+CiAgPC92YWxpZGF0aW9uPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPnZvbHRhZ2UtbGV2ZWwtdW5pcXVlbmVzcy0wMDI8L2lkPgogICAgPG5hbWU+Vm9sdGFnZSBMZXZlbCBOYW1lIFVuaXF1ZW5lc3M8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+RW5zdXJlcyB2b2x0YWdlIGxldmVsIG5hbWVzIGFyZSB1bmlxdWUgd2l0aGluIHRoZSBzdWJzdGF0aW9uLjwvZGVzY3JpcHRpb24+CiAgICA8dmFsaWRhdG9yPmNoZWNrLXZsLW5hbWUtdW5pcXVlbmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5iYXktbmFtaW5nLTAwMzwvaWQ+CiAgICA8bmFtZT5CYXkgTmFtaW5nIENvbnZlbnRpb248L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+VmFsaWRhdGVzIGJheSBuYW1lcyBmb2xsb3cgdGhlIG5hbWluZyBjb252ZW50aW9uIGFuZCBhcmUgdW5pcXVlIHdpdGhpbiB0aGVpciB2b2x0YWdlIGxldmVsLjwvZGVzY3JpcHRpb24+CiAgICA8dmFsaWRhdG9yPmNoZWNrLWJheS1uYW1pbmc8L3ZhbGlkYXRvcj4KICA8L3ZhbGlkYXRpb24+CjwvdmFsaWRhdGlvbnM+Cg==", iI = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmNvbW0tc3VibmV0LTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJuZXQgQWRkcmVzcyBWYWxpZGl0eTwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5WYWxpZGF0ZXMgSVAgc3VibmV0IGFkZHJlc3NlcyBhbmQgQ0lEUi9uZXRtYXNrIGFyZSBwcm9wZXJseSBmb3JtYXR0ZWQgYW5kIG1lZXQgcHJvamVjdCBjb25zdHJhaW50cy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1zdWJuZXQtYWRkcmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5nc2UtY29uZmlnLTAwMjwvaWQ+CiAgICA8bmFtZT5HU0UgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIEdTRSBjb250cm9sIGJsb2NrcyByZWZlcmVuY2UgdmFsaWQgZGF0YXNldHMgYW5kIGhhdmUgY29ycmVjdCBNQUMvVkxBTi9uZXR3b3JrIHBhcmFtZXRlcnMuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stZ3NlLWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5zbXYtY29uZmlnLTAwMzwvaWQ+CiAgICA8bmFtZT5TTVYgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5DaGVja3MgU01WIGNvbnRyb2wgYmxvY2tzIGZvciB2YWxpZCBkYXRhc2V0cywgc2FtcGxlIHJhdGVzLCBhbmQgY29tcGxpYW50IG5ldHdvcmsgc2V0dGluZ3MuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stc212LWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4K", aI = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPnRlbXBsYXRlLWlucHV0cy0wMDE8L2lkPgogICAgPG5hbWU+UmVxdWlyZWQgSW5wdXRzIFByZXNlbnQ8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+VmVyaWZpZXMgYWxsIHJlcXVpcmVkIHRlbXBsYXRlIGlucHV0IGZpZWxkcyBhcmUgcHJvdmlkZWQgYW5kIG5vbi1lbXB0eS48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1yZXF1aXJlZC1pbnB1dHM8L3ZhbGlkYXRvcj4KICA8L3ZhbGlkYXRpb24+CiAgPHZhbGlkYXRpb24+CiAgICA8aWQ+dGctbmFtaW5nLTAwMjwvaWQ+CiAgICA8bmFtZT5UZW1wbGF0ZSBOYW1pbmcgQ29udmVudGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIHRlbXBsYXRlIG5hbWVzIGZvbGxvdyB0aGUgZGVmaW5lZCBuYW1pbmcgY29udmVudGlvbiBhbmQgYWxsb3dlZCBjaGFyYWN0ZXJzLjwvZGVzY3JpcHRpb24+CiAgICA8dmFsaWRhdG9yPmNoZWNrLXRlbXBsYXRlLW5hbWluZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD50Zy1jb21wYXQtMDAzPC9pZD4KICAgIDxuYW1lPlRlbXBsYXRlIENvbXBhdGliaWxpdHk8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+Q2hlY2tzIHRoZSBnZW5lcmF0ZWQgdGVtcGxhdGUgaXMgY29tcGF0aWJsZSB3aXRoIHRoZSBzZWxlY3RlZCBwcm9maWxlcyBvciB2ZXJzaW9ucy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay10ZW1wbGF0ZS1jb21wYXRpYmlsaXR5PC92YWxpZGF0b3I+CiAgPC92YWxpZGF0aW9uPgo8L3ZhbGlkYXRpb25zPgoK";
var sI = /* @__PURE__ */ z('<button type="button"><span> </span></button>'), oI = /* @__PURE__ */ z('<div><button type="button" class="validation-groups__group-title svelte-1s1txht"> </button> <!></div>'), lI = /* @__PURE__ */ z('<div class="validation-groups svelte-1s1txht"></div>');
function Su(n, e) {
  Ae(e, !0);
  let t = m(e, "pluginGroups", 19, () => []), r = m(e, "selectedGroupIndex", 15, null), i = m(e, "selectedPluginIndex", 15, null), a = m(e, "expandedGroupBackground", 3, "var(--brand)"), s = m(e, "expandedGroupBorderColor", 3, "var(--brand)");
  Se(() => {
    var h, f;
    if (!((h = t()) != null && h.length)) {
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
    const h = t()[d];
    r(d), i((f = h == null ? void 0 : h.plugins) != null && f.length ? 0 : null);
  }
  function l(d, h) {
    r(d), i(h);
  }
  var c = lI();
  vn(c, 21, t, mr, (d, h, f) => {
    var v = oI();
    let g;
    var p = G(v);
    p.__click = () => u(f);
    var y = G(p), _ = J(p, 2);
    {
      var x = (E) => {
        var I = ie(), S = j(I);
        vn(S, 17, () => o(h).plugins, mr, (b, A, C) => {
          var T = sI();
          let O;
          T.__click = () => l(f, C);
          var V = G(T), D = G(V);
          de(
            (P) => {
              O = pr(T, 1, "validation-groups__plugin svelte-1s1txht", null, O, P), Pe(D, o(A).name);
            },
            [() => ({ active: C === i() })]
          ), w(b, T);
        }), w(E, I);
      };
      Q(_, (E) => {
        f === r() && E(x);
      });
    }
    de(
      (E) => {
        g = pr(v, 1, "validation-groups__group svelte-1s1txht", null, g, E), Jt(p, "aria-pressed", f === r()), Pe(y, o(h).title);
      },
      [() => ({ expanded: f === r() })]
    ), w(d, v);
  }), de(() => et(c, `--expanded-group-bg:${a()}; --expanded-group-border:${s()};`)), w(n, c), Ee();
}
Ct(["click"]);
var dI = /* @__PURE__ */ z("<p>Loading…</p>"), uI = /* @__PURE__ */ z('<p class="error svelte-v2hgj7"> </p>'), cI = /* @__PURE__ */ z('<div class="xml-viewer svelte-v2hgj7"><h4 class="xml-viewer__title svelte-v2hgj7"> </h4> <div class="xml-viewer__box svelte-v2hgj7"><pre class="svelte-v2hgj7"> </pre></div></div>'), fI = /* @__PURE__ */ z('<span class="validation-xml-container__description svelte-v2hgj7"> </span>'), hI = /* @__PURE__ */ z('<button type="button" class="toggle-btn svelte-v2hgj7" aria-expanded="true" title="Collapse"><!></button>'), vI = /* @__PURE__ */ z('<button type="button" class="toggle-btn svelte-v2hgj7" aria-expanded="false" title="Expand"><!></button>'), gI = /* @__PURE__ */ z('<div class="xml-viewer svelte-v2hgj7"><div class="xml-viewer__box svelte-v2hgj7"><pre class="svelte-v2hgj7"> </pre></div></div>'), mI = /* @__PURE__ */ z('<div class="validation-xml-container svelte-v2hgj7"><div class="validation-xml-container__meta svelte-v2hgj7"><span class="validation-xml-container__name svelte-v2hgj7"> </span> <!> <div class="validation-xml-container__actions svelte-v2hgj7"><button type="button" class="delete-btn svelte-v2hgj7" title="Remove"><!></button> <!></div></div> <!></div>'), pI = /* @__PURE__ */ z('<div class="validation-xml-list svelte-v2hgj7"></div>'), II = /* @__PURE__ */ z("<!> <!>", 1);
function bI(n, e) {
  Ae(e, !0);
  let t = m(e, "pluginGroups", 19, () => []), r = /* @__PURE__ */ oe(null), i = /* @__PURE__ */ oe(null);
  const a = /* @__PURE__ */ ae(() => o(r) !== null ? t()[o(r)] : null), s = /* @__PURE__ */ ae(() => o(a) && o(i) !== null ? o(a).plugins[o(i)] : null);
  Se(() => {
    var b, A;
    if (!((b = t()) != null && b.length)) {
      B(r, null), B(i, null);
      return;
    }
    (o(r) === null || o(r) >= t().length) && B(r, 0);
    const S = t()[o(r)];
    if (!((A = S == null ? void 0 : S.plugins) != null && A.length)) {
      B(i, null);
      return;
    }
    (o(i) === null || o(i) >= S.plugins.length) && B(i, 0);
  });
  let u = /* @__PURE__ */ oe(""), l = /* @__PURE__ */ oe(!1), c = /* @__PURE__ */ oe(""), d = null, h = /* @__PURE__ */ oe(Ce([])), f = /* @__PURE__ */ oe(Ce(/* @__PURE__ */ new Set()));
  async function v(S) {
    B(l, !0), B(c, ""), B(u, ""), B(h, [], !0), B(f, /* @__PURE__ */ new Set(), !0), d == null || d.abort(), d = new AbortController();
    try {
      const b = new URL((/* @__PURE__ */ Object.assign({ "../../assets/validations/ied-editor.xml": nI, "../../assets/validations/substation-explorer.xml": rI, "../../assets/validations/template-generator-xyz.xml": iI, "../../assets/validations/template-generator.xml": aI }))[`../../assets/validations/${S}.xml`], import.meta.url).href, A = await fetch(b, { cache: "no-cache", signal: d.signal });
      if (!A.ok) {
        if (A.status === 404) {
          B(u, "(No XML found for this plugin.)");
          return;
        }
        throw new Error(`HTTP ${A.status}`);
      }
      B(u, await A.text(), !0);
      const T = new DOMParser().parseFromString(o(u), "application/xml");
      if (T.querySelector("parsererror"))
        throw new Error("Invalid XML format.");
      const V = new XMLSerializer(), D = Array.from(T.getElementsByTagName("validation"));
      B(
        h,
        D.map((P, ee) => {
          var ce, le, te, ge, Z, fe, $;
          const U = (ce = P.getAttribute("name")) == null ? void 0 : ce.trim(), H = (le = P.getAttribute("id")) == null ? void 0 : le.trim(), F = (ge = (te = P.querySelector("name")) == null ? void 0 : te.textContent) == null ? void 0 : ge.trim(), X = (Z = P.getAttribute("description")) == null ? void 0 : Z.trim(), ue = ($ = (fe = P.querySelector("description")) == null ? void 0 : fe.textContent) == null ? void 0 : $.trim(), M = U || H || F || `Validation ${ee + 1}`, Y = X || ue || void 0, K = V.serializeToString(P);
          return { name: M, description: Y, xml: K };
        }),
        !0
      ), B(f, new Set(o(h).map((P, ee) => ee)), !0);
    } catch (b) {
      if ((b == null ? void 0 : b.name) === "AbortError")
        return;
      B(c, (b == null ? void 0 : b.message) || "Failed to load XML.", !0);
    } finally {
      B(l, !1);
    }
  }
  let g = /* @__PURE__ */ ae(() => {
    var S;
    return ((S = o(s)) == null ? void 0 : S.id) ?? null;
  }), p = null;
  Se(() => {
    !o(g) || o(g) === p || (p = o(g), v(o(g)));
  });
  function y(S) {
    o(f).has(S) ? o(f).delete(S) : o(f).add(S), B(f, new Set(o(f)), !0);
  }
  var _ = II(), x = j(_);
  Su(x, {
    get pluginGroups() {
      return t();
    },
    get selectedGroupIndex() {
      return o(r);
    },
    set selectedGroupIndex(S) {
      B(r, S, !0);
    },
    get selectedPluginIndex() {
      return o(i);
    },
    set selectedPluginIndex(S) {
      B(i, S, !0);
    }
  });
  var E = J(x, 2);
  {
    var I = (S) => {
      var b = ie(), A = j(b);
      {
        var C = (O) => {
          var V = dI();
          w(O, V);
        }, T = (O) => {
          var V = ie(), D = j(V);
          {
            var P = (U) => {
              var H = uI(), F = G(H);
              de(() => Pe(F, o(c))), w(U, H);
            }, ee = (U) => {
              var H = ie(), F = j(H);
              {
                var X = (M) => {
                  var Y = cI(), K = G(Y), ce = G(K), le = J(K, 2), te = G(le), ge = G(te);
                  de(() => {
                    Pe(ce, `XML for: ${o(s).name ?? ""}`), Pe(ge, o(u));
                  }), w(M, Y);
                }, ue = (M) => {
                  var Y = pI();
                  vn(Y, 21, () => o(h), mr, (K, ce, le) => {
                    var te = mI(), ge = G(te), Z = G(ge), fe = G(Z), $ = J(Z, 2);
                    {
                      var be = (R) => {
                        var W = fI(), he = G(W);
                        de(() => Pe(he, o(ce).description)), w(R, W);
                      };
                      Q($, (R) => {
                        o(ce).description && R(be);
                      });
                    }
                    var ye = J($, 2), Ue = G(ye), tt = G(Ue);
                    Jd(tt, { svgStyles: "fill: #FF203A" });
                    var Ye = J(Ue, 2);
                    {
                      var Le = (R) => {
                        var W = hI();
                        W.__click = () => y(le);
                        var he = G(W);
                        Fv(he, { svgStyles: "fill: #004552" }), w(R, W);
                      }, at = (R) => {
                        var W = vI();
                        W.__click = () => y(le);
                        var he = G(W);
                        Nv(he, { svgStyles: "fill: #004552" }), w(R, W);
                      };
                      Q(Ye, (R) => {
                        o(f).has(le) ? R(Le) : R(at, !1);
                      });
                    }
                    var Pt = J(ge, 2);
                    {
                      var Ft = (R) => {
                        var W = gI(), he = G(W), Me = G(he), kt = G(Me);
                        de(() => Pe(kt, o(ce).xml)), w(R, W);
                      };
                      Q(Pt, (R) => {
                        o(f).has(le) && R(Ft);
                      });
                    }
                    de(() => Pe(fe, o(ce).name)), w(K, te);
                  }), w(M, Y);
                };
                Q(F, (M) => {
                  o(h).length === 0 ? M(X) : M(ue, !1);
                });
              }
              w(U, H);
            };
            Q(
              D,
              (U) => {
                o(c) ? U(P) : U(ee, !1);
              },
              !0
            );
          }
          w(O, V);
        };
        Q(A, (O) => {
          o(l) ? O(C) : O(T, !1);
        });
      }
      w(S, b);
    };
    Q(E, (S) => {
      o(s) && S(I);
    });
  }
  w(n, _), Ee();
}
Ct(["click"]);
function _I(n, e) {
  const t = (n == null ? void 0 : n.name) ?? "—";
  return [
    { label: "Engineering-Wizard", enabled: !0 },
    { label: e != null && e.edit ? `Edit ${t}` : t, enabled: !1 }
  ];
}
function yI(n, e, t, r, i) {
  o(e) || (t(o(r)), B(i, o(i) + 1));
}
function CI(n, e, t) {
  o(e) || B(t, o(t) - 1);
}
var AI = /* @__PURE__ */ z('<div class="header header--right svelte-1qlms77"><!></div> <!>', 1), EI = /* @__PURE__ */ z('<div class="stepper svelte-1qlms77"><!> <!> <div class="stepper-navigation svelte-1qlms77"><button type="button" class="btn btn--back svelte-1qlms77" aria-label="Previous step">Back</button> <button type="button" class="btn btn--next svelte-1qlms77" aria-label="Next step">Next</button></div></div> <div class="step-content svelte-1qlms77"><!></div>', 1), SI = /* @__PURE__ */ z('<div class="step-content svelte-1qlms77"><div class="header svelte-1qlms77"><!> <!></div> <!></div>'), xI = /* @__PURE__ */ z('<div class="page-content svelte-1qlms77"><!></div>');
function wI(n, e) {
  Ae(e, !0);
  const t = ["process-definition", "validator-configuration"];
  let r = /* @__PURE__ */ oe(0), i = /* @__PURE__ */ ae(() => t[o(r)] ?? t[0]), a = /* @__PURE__ */ ae(() => o(r) === 0), s = /* @__PURE__ */ ae(() => o(r) === t.length - 1), u = /* @__PURE__ */ ae(() => _I(It.process, { edit: ii.isEditing })), l = /* @__PURE__ */ ae(() => It.process.pluginGroups), c = /* @__PURE__ */ oe(Ce([]));
  function d(I) {
    I === 0 && (Nr.set(!0), It.process = null);
  }
  function h() {
    console.log("EDITING"), ii.isEditing = !0, Nr.set(!1), B(r, 0), B(c, [], !0);
  }
  function f() {
    ii.isEditing = !1, Nr.set(!0), It.process = null;
  }
  function v(I) {
    const S = t.indexOf(I);
    S !== -1 && B(r, S, !0);
  }
  function g(I) {
    o(c).includes(I) || B(c, [...o(c), I], !0);
  }
  function p() {
    alert("Add New Validation clicked!");
  }
  var y = xI(), _ = G(y);
  {
    var x = (I) => {
      var S = EI(), b = j(S), A = G(b);
      Au(A, { onBack: f });
      var C = J(A, 2);
      yp(C, {
        get currentId() {
          return o(i);
        },
        get visited() {
          return o(c);
        },
        onSelect: v
      });
      var T = J(C, 2), O = G(T);
      O.__click = [CI, a, r];
      var V = J(O, 2);
      V.__click = [
        yI,
        s,
        g,
        i,
        r
      ];
      var D = J(b, 2), P = G(D);
      {
        var ee = (H) => {
          tI(H, {
            get pluginGroups() {
              return o(l);
            }
          });
        }, U = (H) => {
          var F = ie(), X = j(F);
          {
            var ue = (M) => {
              var Y = AI(), K = j(Y), ce = G(K);
              {
                let te = /* @__PURE__ */ ae(() => !It.process);
                Hr(ce, {
                  variant: "raised",
                  style: "--mdc-theme-primary: var(--brand); --mdc-theme-on-primary: var(--on-brand)",
                  onclick: p,
                  get disabled() {
                    return o(te);
                  },
                  "aria-label": "Add validation",
                  children: (ge, Z) => {
                    var fe = dt("ADD NEW VALIDATION");
                    w(ge, fe);
                  },
                  $$slots: { default: !0 }
                });
              }
              var le = J(K, 2);
              bI(le, {
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
              }), w(M, Y);
            };
            Q(
              X,
              (M) => {
                o(i) === "validator-configuration" && M(ue);
              },
              !0
            );
          }
          w(H, F);
        };
        Q(P, (H) => {
          o(i) === "process-definition" ? H(ee) : H(U, !1);
        });
      }
      de(() => {
        O.disabled = o(a), V.disabled = o(s);
      }), w(I, S);
    }, E = (I) => {
      var S = SI(), b = G(S), A = G(b);
      Eg(A, {
        get breadcrumbs() {
          return o(u);
        },
        activeIndex: 1,
        handleClick: d
      });
      var C = J(A, 2);
      {
        let O = /* @__PURE__ */ ae(() => !It.process);
        Hr(C, {
          variant: "raised",
          style: "--mdc-theme-primary: var(--brand); --mdc-theme-on-primary: var(--on-brand)",
          onclick: () => e.handleStart(It.process),
          get disabled() {
            return o(O);
          },
          "aria-label": "Start process",
          children: (V, D) => {
            var P = dt("START PROCESS");
            w(V, P);
          },
          $$slots: { default: !0 }
        });
      }
      var T = J(b, 2);
      Up(T, {
        get pluginGroups() {
          return o(l);
        },
        requestEdit: h
      }), w(I, S);
    };
    Q(_, (I) => {
      ii.isEditing ? I(x) : I(E, !1);
    });
  }
  w(n, y), Ee();
}
Ct(["click"]);
var TI = /* @__PURE__ */ z("<div></div>");
function DI(n, e) {
  Ae(e, !0);
  function t(u) {
    let l = 3735928559, c = 1103547991;
    for (let d = 0, h; d < u.length; d++)
      h = u.charCodeAt(d), l = Math.imul(l ^ h, 2654435761), c = Math.imul(c ^ h, 1597334677);
    return l = Math.imul(l ^ l >>> 16, 2246822507) ^ Math.imul(c ^ c >>> 13, 3266489909), c = Math.imul(c ^ c >>> 16, 2246822507) ^ Math.imul(l ^ l >>> 13, 3266489909), "oscd-plugin" + ((c >>> 0).toString(16).padStart(8, "0") + (l >>> 0).toString(16).padStart(8, "0"));
  }
  let r = m(e, "editCount", 19, () => -1), i = m(e, "plugins", 19, () => []), a = null;
  Se(() => {
    if (!a || (a.innerHTML = "", !e.plugin || !e.plugin.src)) return;
    const u = t(e.plugin.src), l = document.createElement(u);
    l.doc = e.doc, l.editCount = r(), l.plugins = i(), l.nsdoc = e.nsdoc, l.docName = e.docName, l.docId = e.docId, l.docs = e.docs, l.locale = e.locale, e.oscdApi && (l.oscdApi = e.oscdApi), a.appendChild(l);
  });
  var s = TI();
  xe(s, (u) => a = u, () => a), w(n, s), Ee();
}
const LI = (n, e) => e(1), OI = (n, e) => e(-1);
var RI = /* @__PURE__ */ z('<div class="plugin-container svelte-1xkxjkz"><!></div>'), MI = /* @__PURE__ */ z('<div class="stepper svelte-1xkxjkz"><!> <!> <div class="stepper-navigation svelte-1xkxjkz"><button type="button" class="back-button svelte-1xkxjkz" aria-label="Previous plugin">Back</button> <button type="button" class="next-button svelte-1xkxjkz" aria-label="Next plugin">Next</button></div></div> <!>', 1);
function PI(n, e) {
  Ae(e, !0);
  const t = ["check", "warning", "error"];
  let r = m(e, "editCount", 19, () => -1), i = m(e, "plugins", 19, () => []), a = /* @__PURE__ */ oe(null), s = Ce({ plugin: null }), u = /* @__PURE__ */ oe(Ce([])), l = /* @__PURE__ */ oe(Ce({})), c = /* @__PURE__ */ ae(() => i().length > 0), d = /* @__PURE__ */ ae(() => s.plugin && o(c) ? i().findIndex((D) => D.id === s.plugin.id) : -1), h = /* @__PURE__ */ ae(() => It.process.pluginGroups), f = /* @__PURE__ */ oe(null), v = /* @__PURE__ */ oe(null);
  function g(D) {
    var P, ee;
    if (!((P = o(h)) != null && P.length)) return { groupIndex: null, pluginIndex: null };
    for (let U = 0; U < o(h).length; U++) {
      const F = ((ee = o(h)[U].plugins) == null ? void 0 : ee.findIndex((X) => X.id === D)) ?? -1;
      if (F >= 0)
        return { groupIndex: U, pluginIndex: F };
    }
    return { groupIndex: null, pluginIndex: null };
  }
  async function p(D) {
    if (!D) return;
    await Wp(D);
    const { id: P } = D;
    B(a, P, !0), s.plugin = D;
    const { groupIndex: ee, pluginIndex: U } = g(P);
    if (B(f, ee, !0), B(v, U, !0), !o(u).includes(P)) {
      B(u, [...o(u), P], !0);
      const H = i().findIndex((F) => F.id === P);
      if (H !== -1) {
        const F = t[H % t.length];
        B(l, { ...o(l), [P]: F }, !0);
      }
    }
  }
  function y(D) {
    if (!o(c)) return;
    const ee = ((o(d) < 0 ? 0 : o(d)) + D + i().length) % i().length;
    p(i()[ee]);
  }
  function _(D, P) {
    return Object.assign(D, P), {
      update(ee) {
        Object.assign(D, ee);
      }
    };
  }
  Se(() => {
    var U, H, F;
    if (o(f) === null || o(v) === null) return;
    const D = (U = o(h)) == null ? void 0 : U[o(f)], P = (H = D == null ? void 0 : D.plugins) == null ? void 0 : H[o(v)];
    if (!P) return;
    const ee = i().find((X) => X.id === P.id);
    ee && ((F = s.plugin) == null ? void 0 : F.id) !== ee.id && p(ee);
  }), Se(() => {
    if (!o(c)) {
      s.plugin = null, B(a, null), B(u, [], !0), B(l, {}, !0), B(f, null), B(v, null);
      return;
    }
    o(d) === -1 && p(i()[0]);
  }), it(() => (i().length && Vp(i()).catch(console.error), Nr.set(!1), () => {
    Nr.set(!0);
  }));
  function x() {
    Nr.set(!0), e.onExit();
  }
  var E = MI(), I = j(E), S = G(I);
  Au(S, { onBack: x });
  var b = J(S, 2);
  Su(b, {
    get pluginGroups() {
      return o(h);
    },
    expandedGroupBackground: "var(--primary-base)",
    expandedGroupBorderColor: "white",
    get selectedGroupIndex() {
      return o(f);
    },
    set selectedGroupIndex(D) {
      B(f, D, !0);
    },
    get selectedPluginIndex() {
      return o(v);
    },
    set selectedPluginIndex(D) {
      B(v, D, !0);
    }
  });
  var A = J(b, 2), C = G(A);
  C.__click = [OI, y];
  var T = J(C, 2);
  T.__click = [LI, y];
  var O = J(I, 2);
  {
    var V = (D) => {
      var P = RI(), ee = G(P);
      {
        var U = (F) => {
          DI(F, {
            get plugin() {
              return s.plugin;
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
        }, H = (F) => {
          var X = ie(), ue = j(X);
          co(ue, () => s.plugin.id, !1, (M, Y) => {
            Oe(M, (K, ce) => _ == null ? void 0 : _(K, ce), () => ({ doc: e.doc, editCount: r() })), pr(M, 0, "svelte-1xkxjkz");
          }), w(F, X);
        };
        Q(ee, (F) => {
          s.plugin.type === "internal" ? F(U) : F(H, !1);
        });
      }
      w(D, P);
    };
    Q(O, (D) => {
      s.plugin && D(V);
    });
  }
  de(() => {
    C.disabled = !o(c), T.disabled = !o(c);
  }), w(n, E), Ee();
}
Ct(["click"]);
var FI = (n, e) => {
  n.target === n.currentTarget && e("exit");
}, kI = /* @__PURE__ */ z('<div class="ewf-dialog-backdrop svelte-12xjguj" role="dialog" aria-modal="true" aria-labelledby="ewf-title" tabindex="-1"><div class="ewf-dialog-panel svelte-12xjguj" role="document"><h2 id="ewf-title" class="sr-only svelte-12xjguj">Engineering Workflow</h2> <!></div></div>');
function NI(n, e) {
  Ae(e, !0);
  let t = m(e, "editCount", 19, () => -1), r = m(e, "plugins", 19, () => []), i = /* @__PURE__ */ oe(!1), a = /* @__PURE__ */ oe(void 0), s = /* @__PURE__ */ oe(null);
  const u = (h) => {
    o(i) || (B(i, !0), It.process = null, Nr.set(!0), Fr(h));
  };
  Se(() => {
    var h;
    e.open !== o(a) && (B(a, e.open, !0), e.open ? (B(i, !1), (h = o(s)) == null || h.focus()) : u("cancel"));
  });
  var l = ie(), c = j(l);
  {
    var d = (h) => {
      var f = kI();
      f.__click = [FI, u];
      var v = G(f), g = J(G(v), 2);
      PI(g, {
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
      }), xe(f, (p) => B(s, p), () => o(s)), w(h, f);
    };
    Q(c, (h) => {
      e.open && h(d);
    });
  }
  w(n, l), Ee();
}
Ct(["click"]);
var HI = /* @__PURE__ */ z("<!> <!>", 1);
function UI(n, e) {
  Ae(e, !0), e.plugins[1], it(async () => {
    await np();
  });
  function t(d) {
    It.process || (It.process = d);
    const h = dp(It.process);
    Rs(NI, {
      doc: e.doc,
      editCount: e.editCount,
      host: e.host,
      plugins: h,
      nsdoc: e.nsdoc,
      docId: e.docId,
      docName: e.docName,
      docs: e.docs,
      locale: e.locale,
      oscdApi: e.oscdApi
    });
  }
  Se(() => {
    lv({ editCount: e.editCount, doc: e.doc });
  });
  function r(d) {
    It.process = d;
  }
  function i() {
    It.process = null;
  }
  var a = HI(), s = j(a);
  ov(s, {});
  var u = J(s, 2);
  {
    var l = (d) => {
      wI(d, { handleBack: i, handleStart: t });
    }, c = (d) => {
      vp(d, { handleView: r, handleStart: t });
    };
    Q(u, (d) => {
      It.process ? d(l) : d(c, !1);
    });
  }
  w(n, a), Ee();
}
const xu = "archive-explorer", wu = "0.0.1";
var BI = /* @__PURE__ */ z('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function GI(n, e) {
  Ae(e, !0);
  let t = m(e, "dev", 3, !1), r = m(e, "editCount", 3, 0), i = m(e, "plugins", 19, () => []);
  var a = BI(), s = j(a);
  {
    var u = (d) => {
      UI(d, {
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
    Q(s, (d) => {
      (e.doc || t()) && d(u);
    });
  }
  var l = J(s, 2), c = J(l, 2);
  de(() => {
    hl(l, xu), hl(c, wu);
  }), w(n, a), Ee();
}
var ji;
class jI extends HTMLElement {
  constructor() {
    super();
    We(this, ji);
    we(this, ji, /* @__PURE__ */ oe(Ce({
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
    return o(re(this, ji));
  }
  set _props(t) {
    B(re(this, ji), t, !0);
  }
  connectedCallback() {
    if (this.shadowRoot) return;
    this.attachShadow({ mode: "open" }), Kc(GI, { target: this.shadowRoot, props: this._props });
    const t = WI();
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
    lp(r);
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
ji = new WeakMap();
function WI() {
  const n = `${xu}-v${wu}-style`, e = VI(), t = document.createElement("link");
  return t.rel = "stylesheet", t.type = "text/css", t.href = e, t.id = n, t;
}
function VI() {
  const n = new URL(import.meta.url), e = n.origin, t = n.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, t, "style.css"].filter(Boolean).join("/");
}
export {
  jI as default
};
