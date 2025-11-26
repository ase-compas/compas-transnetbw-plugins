var Mu = Object.defineProperty;
var Qo = (n) => {
  throw TypeError(n);
};
var Pu = (n, e, t) => e in n ? Mu(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var wi = (n, e, t) => Pu(n, typeof e != "symbol" ? e + "" : e, t), Ws = (n, e, t) => e.has(n) || Qo("Cannot " + t);
var ne = (n, e, t) => (Ws(n, e, "read from private field"), t ? t.call(n) : e.get(n)), We = (n, e, t) => e.has(n) ? Qo("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), Te = (n, e, t, r) => (Ws(n, e, "write to private field"), r ? r.call(n, t) : e.set(n, t), t), Gt = (n, e, t) => (Ws(n, e, "access private method"), t);
const At = Symbol(), Fu = "http://www.w3.org/1999/xhtml", ku = "http://www.w3.org/2000/svg", Nu = "@attach", ql = !1;
var Da = Array.isArray, Hu = Array.prototype.indexOf, xo = Array.from, is = Object.defineProperty, Or = Object.getOwnPropertyDescriptor, Xl = Object.getOwnPropertyDescriptors, Yl = Object.prototype, Uu = Array.prototype, _s = Object.getPrototypeOf, $o = Object.isExtensible;
function Oi(n) {
  return typeof n == "function";
}
const pe = () => {
};
function Bu(n) {
  for (var e = 0; e < n.length; e++)
    n[e]();
}
function Kl() {
  var n, e, t = new Promise((r, i) => {
    n = r, e = i;
  });
  return { promise: t, resolve: n, reject: e };
}
const en = 2, wo = 4, To = 8, Ii = 16, Ir = 32, Br = 64, Do = 128, Tn = 256, as = 512, zt = 1024, gn = 2048, Gr = 4096, Un = 8192, bi = 16384, Lo = 32768, _i = 65536, el = 1 << 17, Gu = 1 << 18, yi = 1 << 19, Wu = 1 << 20, eo = 1 << 21, ys = 1 << 22, ui = 1 << 23, $n = Symbol("$state"), Jl = Symbol("legacy props"), Vu = Symbol(""), Mi = new class extends Error {
  constructor() {
    super(...arguments);
    wi(this, "name", "StaleReactionError");
    wi(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Ro(n) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Zu() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function zu(n) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ju() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function qu(n) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Xu() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Yu(n) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Ku() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ju() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Qu() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function $u() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function ec() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function tc() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let nc = !1;
function Ql(n) {
  return n === this.v;
}
function Oo(n, e) {
  return n != n ? e == e : n !== e || n !== null && typeof n == "object" || typeof n == "function";
}
function $l(n) {
  return !Oo(n, this.v);
}
let ta = !1, rc = !1;
function ic() {
  ta = !0;
}
const ac = [];
function sc(n, e = !1, t = !1) {
  return Ja(n, /* @__PURE__ */ new Map(), "", ac, null, t);
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
      var d = (
        /** @type {Snapshot<any>} */
        Array(n.length)
      );
      e.set(n, d), i !== null && e.set(i, d);
      for (var l = 0; l < n.length; l += 1) {
        var c = n[l];
        l in n && (d[l] = Ja(c, e, t, r, null, a));
      }
      return d;
    }
    if (_s(n) === Yl) {
      d = {}, e.set(n, d), i !== null && e.set(i, d);
      for (var u in n)
        d[u] = Ja(
          // @ts-expect-error
          n[u],
          e,
          t,
          r,
          null,
          a
        );
      return d;
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
function qi(n) {
  $e = n;
}
function ye(n) {
  return (
    /** @type {T} */
    ed().get(n)
  );
}
function se(n, e) {
  return ed().set(n, e), e;
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
      gd(r);
  }
  return n !== void 0 && (e.x = n), $e = e.p, n ?? /** @type {T} */
  {};
}
function La() {
  return !ta || $e !== null && $e.l === null;
}
function ed(n) {
  return $e === null && Ro(), $e.c ?? ($e.c = new Map(oc($e) || void 0));
}
function oc(n) {
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
function td() {
  var n = ri;
  ri = [], Bu(n);
}
function mr(n) {
  if (ri.length === 0 && !pa) {
    var e = ri;
    queueMicrotask(() => {
      e === ri && td();
    });
  }
  ri.push(n);
}
function lc() {
  for (; ri.length > 0; )
    td();
}
const dc = /* @__PURE__ */ new WeakMap();
function nd(n) {
  var e = Fe;
  if (e === null)
    return Me.f |= ui, n;
  if (e.f & Lo)
    Xi(n, e);
  else {
    if (!(e.f & Do))
      throw !e.parent && n instanceof Error && rd(n), n;
    e.b.error(n);
  }
}
function Xi(n, e) {
  for (; e !== null; ) {
    if (e.f & Do)
      try {
        e.b.error(n);
        return;
      } catch (t) {
        n = t;
      }
    e = e.parent;
  }
  throw n instanceof Error && rd(n), n;
}
function rd(n) {
  const e = dc.get(n);
  e && (is(n, "message", {
    value: e.message
  }), is(n, "stack", {
    value: e.stack
  }));
}
const Wa = /* @__PURE__ */ new Set();
let Ye = null, Qa = null, Mt = null, to = /* @__PURE__ */ new Set(), Yn = [], Cs = null, no = !1, pa = !1;
var Gi, Wi, ai, xa, Vi, Zi, si, zi, wa, Ta, Dn, ro, $a, io;
const ps = class ps {
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
    Yn = [], Qa = null, this.apply();
    for (const s of e)
      Gt(this, Dn, ro).call(this, s);
    if (ne(this, ai) === 0) {
      var t = Mt;
      Gt(this, Dn, io).call(this);
      var r = ne(this, Zi), i = ne(this, si);
      Te(this, Zi, []), Te(this, si, []), Te(this, zi, []), Qa = this, Ye = null, Mt = t, tl(r), tl(i), Qa = null, (a = ne(this, xa)) == null || a.resolve();
    } else
      Gt(this, Dn, $a).call(this, ne(this, Zi)), Gt(this, Dn, $a).call(this, ne(this, si)), Gt(this, Dn, $a).call(this, ne(this, zi));
    Mt = null;
    for (const s of ne(this, Vi))
      ya(s);
    Te(this, Vi, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, t) {
    ne(this, Gi).has(e) || ne(this, Gi).set(e, t), this.current.set(e, e.v), Mt == null || Mt.set(e, e.v);
  }
  activate() {
    Ye = this;
  }
  deactivate() {
    Ye = null, Mt = null;
  }
  flush() {
    if (Yn.length > 0) {
      if (this.activate(), id(), Ye !== null && Ye !== this)
        return;
    } else ne(this, ai) === 0 && Gt(this, Dn, io).call(this);
    this.deactivate();
    for (const e of to)
      if (to.delete(e), e(), Ye !== null)
        break;
  }
  increment() {
    Te(this, ai, ne(this, ai) + 1);
  }
  decrement() {
    Te(this, ai, ne(this, ai) - 1);
    for (const e of ne(this, wa))
      Jt(e, gn), gi(e);
    for (const e of ne(this, Ta))
      Jt(e, Gr), gi(e);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    ne(this, Wi).add(e);
  }
  settled() {
    return (ne(this, xa) ?? Te(this, xa, Kl())).promise;
  }
  static ensure() {
    if (Ye === null) {
      const e = Ye = new ps();
      Wa.add(Ye), pa || ps.enqueue(() => {
        Ye === e && e.flush();
      });
    }
    return Ye;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    mr(e);
  }
  apply() {
  }
};
Gi = new WeakMap(), Wi = new WeakMap(), ai = new WeakMap(), xa = new WeakMap(), Vi = new WeakMap(), Zi = new WeakMap(), si = new WeakMap(), zi = new WeakMap(), wa = new WeakMap(), Ta = new WeakMap(), Dn = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
ro = function(e) {
  var c;
  e.f ^= zt;
  for (var t = e.first; t !== null; ) {
    var r = t.f, i = (r & (Ir | Br)) !== 0, a = i && (r & zt) !== 0, s = a || (r & Un) !== 0 || this.skipped_effects.has(t);
    if (!s && t.fn !== null) {
      i ? t.f ^= zt : r & wo ? ne(this, si).push(t) : r & zt || (r & ys && ((c = t.b) != null && c.is_pending()) ? ne(this, Vi).push(t) : Ts(t) && (t.f & Ii && ne(this, zi).push(t), ya(t)));
      var d = t.first;
      if (d !== null) {
        t = d;
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
    (t.f & gn ? ne(this, wa) : ne(this, Ta)).push(t), Jt(t, zt);
  e.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
io = function() {
  var e;
  for (const t of ne(this, Wi))
    t();
  if (ne(this, Wi).clear(), Wa.size > 1) {
    ne(this, Gi).clear();
    let t = !0;
    for (const r of Wa) {
      if (r === this) {
        t = !1;
        continue;
      }
      const i = [];
      for (const [s, d] of this.current) {
        if (r.current.has(s))
          if (t && d !== r.current.get(s))
            r.current.set(s, d);
          else
            continue;
        i.push(s);
      }
      if (i.length === 0)
        continue;
      const a = [...r.current.keys()].filter((s) => !this.current.has(s));
      if (a.length > 0) {
        for (const s of i)
          ad(s, a);
        if (Yn.length > 0) {
          Ye = r, r.apply();
          for (const s of Yn)
            Gt(e = r, Dn, ro).call(e, s);
          Yn = [], r.deactivate();
        }
      }
    }
    Ye = null;
  }
  Wa.delete(this);
};
let Jn = ps;
function uc(n) {
  var e = pa;
  pa = !0;
  try {
    for (var t; ; ) {
      if (lc(), Yn.length === 0 && (Ye == null || Ye.flush(), Yn.length === 0))
        return Cs = null, /** @type {T} */
        t;
      id();
    }
  } finally {
    pa = e;
  }
}
function id() {
  var n = ki;
  no = !0;
  try {
    var e = 0;
    for (il(!0); Yn.length > 0; ) {
      var t = Jn.ensure();
      if (e++ > 1e3) {
        var r, i;
        cc();
      }
      t.process(Yn), Mr.clear();
    }
  } finally {
    no = !1, il(n), Cs = null;
  }
}
function cc() {
  try {
    Xu();
  } catch (n) {
    Xi(n, Cs);
  }
}
let ur = null;
function tl(n) {
  var e = n.length;
  if (e !== 0) {
    for (var t = 0; t < e; ) {
      var r = n[t++];
      if (!(r.f & (bi | Un)) && Ts(r) && (ur = [], ya(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Id(r) : r.fn = null), (ur == null ? void 0 : ur.length) > 0)) {
        Mr.clear();
        for (const i of ur)
          ya(i);
        ur = [];
      }
    }
    ur = null;
  }
}
function ad(n, e) {
  if (n.reactions !== null)
    for (const t of n.reactions) {
      const r = t.f;
      r & en ? ad(
        /** @type {Derived} */
        t,
        e
      ) : r & (ys | Ii) && sd(t, e) && (Jt(t, gn), gi(
        /** @type {Effect} */
        t
      ));
    }
}
function sd(n, e) {
  if (n.deps !== null) {
    for (const t of n.deps)
      if (e.includes(t) || t.f & en && sd(
        /** @type {Derived} */
        t,
        e
      ))
        return !0;
  }
  return !1;
}
function gi(n) {
  for (var e = Cs = n; e.parent !== null; ) {
    e = e.parent;
    var t = e.f;
    if (no && e === Fe && t & Ii)
      return;
    if (t & (Br | Ir)) {
      if (!(t & zt)) return;
      e.f ^= zt;
    }
  }
  Yn.push(e);
}
function fc(n) {
  let e = 0, t = mi(0), r;
  return () => {
    Lc() && (o(t), xs(() => (e === 0 && (r = Zr(() => n(() => Ia(t)))), e += 1, () => {
      mr(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, Ia(t));
      });
    })));
  };
}
var hc = _i | yi | Do;
function vc(n, e, t) {
  new gc(n, e, t);
}
var On, En, So, jn, oi, qn, Sn, sn, Xn, xr, li, wr, di, Tr, Is, bs, $t, mc, pc, es, ts, ao;
class gc {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, t, r) {
    We(this, $t);
    /** @type {Boundary | null} */
    wi(this, "parent");
    We(this, On, !1);
    /** @type {TemplateNode} */
    We(this, En);
    /** @type {TemplateNode | null} */
    We(this, So, null);
    /** @type {BoundaryProps} */
    We(this, jn);
    /** @type {((anchor: Node) => void)} */
    We(this, oi);
    /** @type {Effect} */
    We(this, qn);
    /** @type {Effect | null} */
    We(this, Sn, null);
    /** @type {Effect | null} */
    We(this, sn, null);
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
    We(this, Is, () => {
      ne(this, Tr) && Yi(ne(this, Tr), ne(this, li));
    });
    We(this, bs, fc(() => (Te(this, Tr, mi(ne(this, li))), () => {
      Te(this, Tr, null);
    })));
    Te(this, En, e), Te(this, jn, t), Te(this, oi, r), this.parent = /** @type {Effect} */
    Fe.b, Te(this, On, !!ne(this, jn).pending), Te(this, qn, Vr(() => {
      Fe.b = this;
      {
        try {
          Te(this, Sn, Vt(() => r(ne(this, En))));
        } catch (i) {
          this.error(i);
        }
        ne(this, wr) > 0 ? Gt(this, $t, ts).call(this) : Te(this, On, !1);
      }
    }, hc));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return ne(this, On) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!ne(this, jn).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    Gt(this, $t, ao).call(this, e), Te(this, li, ne(this, li) + e), to.add(ne(this, Is));
  }
  get_effect_pending() {
    return ne(this, bs).call(this), o(
      /** @type {Source<number>} */
      ne(this, Tr)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var t = ne(this, jn).onerror;
    let r = ne(this, jn).failed;
    if (ne(this, di) || !t && !r)
      throw e;
    ne(this, Sn) && (xt(ne(this, Sn)), Te(this, Sn, null)), ne(this, sn) && (xt(ne(this, sn)), Te(this, sn, null)), ne(this, Xn) && (xt(ne(this, Xn)), Te(this, Xn, null));
    var i = !1, a = !1;
    const s = () => {
      if (i) {
        tc();
        return;
      }
      i = !0, a && $u(), Jn.ensure(), Te(this, li, 0), ne(this, Xn) !== null && Pr(ne(this, Xn), () => {
        Te(this, Xn, null);
      }), Te(this, On, this.has_pending_snippet()), Te(this, Sn, Gt(this, $t, es).call(this, () => (Te(this, di, !1), Vt(() => ne(this, oi).call(this, ne(this, En)))))), ne(this, wr) > 0 ? Gt(this, $t, ts).call(this) : Te(this, On, !1);
    };
    var d = Me;
    try {
      dn(null), a = !0, t == null || t(e, s), a = !1;
    } catch (l) {
      Xi(l, ne(this, qn) && ne(this, qn).parent);
    } finally {
      dn(d);
    }
    r && mr(() => {
      Te(this, Xn, Gt(this, $t, es).call(this, () => {
        Te(this, di, !0);
        try {
          return Vt(() => {
            r(
              ne(this, En),
              () => e,
              () => s
            );
          });
        } catch (l) {
          return Xi(
            l,
            /** @type {Effect} */
            ne(this, qn).parent
          ), null;
        } finally {
          Te(this, di, !1);
        }
      }));
    });
  }
}
On = new WeakMap(), En = new WeakMap(), So = new WeakMap(), jn = new WeakMap(), oi = new WeakMap(), qn = new WeakMap(), Sn = new WeakMap(), sn = new WeakMap(), Xn = new WeakMap(), xr = new WeakMap(), li = new WeakMap(), wr = new WeakMap(), di = new WeakMap(), Tr = new WeakMap(), Is = new WeakMap(), bs = new WeakMap(), $t = new WeakSet(), mc = function() {
  try {
    Te(this, Sn, Vt(() => ne(this, oi).call(this, ne(this, En))));
  } catch (e) {
    this.error(e);
  }
  Te(this, On, !1);
}, pc = function() {
  const e = ne(this, jn).pending;
  e && (Te(this, sn, Vt(() => e(ne(this, En)))), Jn.enqueue(() => {
    Te(this, Sn, Gt(this, $t, es).call(this, () => (Jn.ensure(), Vt(() => ne(this, oi).call(this, ne(this, En)))))), ne(this, wr) > 0 ? Gt(this, $t, ts).call(this) : (Pr(
      /** @type {Effect} */
      ne(this, sn),
      () => {
        Te(this, sn, null);
      }
    ), Te(this, On, !1));
  }));
}, /**
 * @param {() => Effect | null} fn
 */
es = function(e) {
  var t = Fe, r = Me, i = $e;
  er(ne(this, qn)), dn(ne(this, qn)), qi(ne(this, qn).ctx);
  try {
    return e();
  } catch (a) {
    return nd(a), null;
  } finally {
    er(t), dn(r), qi(i);
  }
}, ts = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    ne(this, jn).pending
  );
  ne(this, Sn) !== null && (Te(this, xr, document.createDocumentFragment()), Ic(ne(this, Sn), ne(this, xr))), ne(this, sn) === null && Te(this, sn, Vt(() => e(ne(this, En))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
ao = function(e) {
  var t;
  if (!this.has_pending_snippet()) {
    this.parent && Gt(t = this.parent, $t, ao).call(t, e);
    return;
  }
  Te(this, wr, ne(this, wr) + e), ne(this, wr) === 0 && (Te(this, On, !1), ne(this, sn) && Pr(ne(this, sn), () => {
    Te(this, sn, null);
  }), ne(this, xr) && (ne(this, En).before(ne(this, xr)), Te(this, xr, null)), mr(() => {
    Jn.ensure().flush();
  }));
};
function Ic(n, e) {
  for (var t = n.nodes_start, r = n.nodes_end; t !== null; ) {
    var i = t === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ra(t)
    );
    e.append(t), t = i;
  }
}
function od(n, e, t) {
  const r = La() ? As : Mo;
  if (e.length === 0) {
    t(n.map(r));
    return;
  }
  var i = Ye, a = (
    /** @type {Effect} */
    Fe
  ), s = bc();
  Promise.all(e.map((d) => /* @__PURE__ */ _c(d))).then((d) => {
    s();
    try {
      t([...n.map(r), ...d]);
    } catch (l) {
      a.f & bi || Xi(l, a);
    }
    i == null || i.deactivate(), so();
  }).catch((d) => {
    Xi(d, a);
  });
}
function bc() {
  var n = Fe, e = Me, t = $e, r = Ye;
  return function() {
    er(n), dn(e), qi(t), r == null || r.activate();
  };
}
function so() {
  er(null), dn(null), qi(null);
}
// @__NO_SIDE_EFFECTS__
function As(n) {
  var e = en | gn, t = Me !== null && Me.f & en ? (
    /** @type {Derived} */
    Me
  ) : null;
  return Fe === null || t !== null && t.f & Tn ? e |= Tn : Fe.f |= yi, {
    ctx: $e,
    deps: null,
    effects: null,
    equals: Ql,
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
function _c(n, e) {
  let t = (
    /** @type {Effect | null} */
    Fe
  );
  t === null && Zu();
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
  ), s = !Me, d = /* @__PURE__ */ new Map();
  return Mc(() => {
    var f;
    var l = Kl();
    i = l.promise;
    try {
      Promise.resolve(n()).then(l.resolve, l.reject).then(so);
    } catch (v) {
      l.reject(v), so();
    }
    var c = (
      /** @type {Batch} */
      Ye
    ), u = r.is_pending();
    s && (r.update_pending_count(1), u || (c.increment(), (f = d.get(c)) == null || f.reject(Mi), d.delete(c), d.set(c, l)));
    const h = (v, g = void 0) => {
      if (u || c.activate(), g)
        g !== Mi && (a.f |= ui, Yi(a, g));
      else {
        a.f & ui && (a.f ^= ui), Yi(a, v);
        for (const [p, C] of d) {
          if (d.delete(p), p === c) break;
          C.reject(Mi);
        }
      }
      s && (r.update_pending_count(-1), u || c.decrement());
    };
    l.promise.then(h, (v) => h(null, v || "unknown"));
  }), Ss(() => {
    for (const l of d.values())
      l.reject(Mi);
  }), new Promise((l) => {
    function c(u) {
      function h() {
        u === i ? l(a) : c(i);
      }
      u.then(h, h);
    }
    c(i);
  });
}
// @__NO_SIDE_EFFECTS__
function ie(n) {
  const e = /* @__PURE__ */ As(n);
  return yd(e), e;
}
// @__NO_SIDE_EFFECTS__
function Mo(n) {
  const e = /* @__PURE__ */ As(n);
  return e.equals = $l, e;
}
function ld(n) {
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
function yc(n) {
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
function Po(n) {
  var e, t = Fe;
  er(yc(n));
  try {
    ld(n), e = Sd(n);
  } finally {
    er(t);
  }
  return e;
}
function dd(n) {
  var e = Po(n);
  if (n.equals(e) || (n.v = e, n.wv = Ad()), !Ci)
    if (Mt !== null)
      Mt.set(n, n.v);
    else {
      var t = (Dr || n.f & Tn) && n.deps !== null ? Gr : zt;
      Jt(n, t);
    }
}
const Mr = /* @__PURE__ */ new Map();
function mi(n, e) {
  var t = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: n,
    reactions: null,
    equals: Ql,
    rv: 0,
    wv: 0
  };
  return t;
}
// @__NO_SIDE_EFFECTS__
function ue(n, e) {
  const t = mi(n);
  return yd(t), t;
}
// @__NO_SIDE_EFFECTS__
function ud(n, e = !1, t = !0) {
  var i;
  const r = mi(n);
  return e || (r.equals = $l), ta && t && $e !== null && $e.l !== null && ((i = $e.l).s ?? (i.s = [])).push(r), r;
}
function W(n, e, t = !1) {
  Me !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Fn || Me.f & el) && La() && Me.f & (en | Ii | ys | el) && !(Kt != null && Kt.includes(n)) && Qu();
  let r = t ? Ce(e) : e;
  return Yi(n, r);
}
function Yi(n, e) {
  if (!n.equals(e)) {
    var t = n.v;
    Ci ? Mr.set(n, e) : Mr.set(n, t), n.v = e;
    var r = Jn.ensure();
    r.capture(n, t), n.f & en && (n.f & gn && Po(
      /** @type {Derived} */
      n
    ), Jt(n, n.f & Tn ? Gr : zt)), n.wv = Ad(), cd(n, gn), La() && Fe !== null && Fe.f & zt && !(Fe.f & (Ir | Br)) && (An === null ? kc([n]) : An.push(n));
  }
  return e;
}
function Ia(n) {
  W(n, n.v + 1);
}
function cd(n, e) {
  var t = n.reactions;
  if (t !== null)
    for (var r = La(), i = t.length, a = 0; a < i; a++) {
      var s = t[a], d = s.f;
      if (!(!r && s === Fe)) {
        var l = (d & gn) === 0;
        l && Jt(s, e), d & en ? cd(
          /** @type {Derived} */
          s,
          Gr
        ) : l && (d & Ii && ur !== null && ur.push(
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
  if (typeof n != "object" || n === null || $n in n)
    return n;
  const e = _s(n);
  if (e !== Yl && e !== Uu)
    return n;
  var t = /* @__PURE__ */ new Map(), r = Da(n), i = /* @__PURE__ */ ue(0), a = ci, s = (d) => {
    if (ci === a)
      return d();
    var l = Me, c = ci;
    dn(null), sl(a);
    var u = d();
    return dn(l), sl(c), u;
  };
  return r && t.set("length", /* @__PURE__ */ ue(
    /** @type {any[]} */
    n.length
  )), new Proxy(
    /** @type {any} */
    n,
    {
      defineProperty(d, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Ku();
        var u = t.get(l);
        return u === void 0 ? u = s(() => {
          var h = /* @__PURE__ */ ue(c.value);
          return t.set(l, h), h;
        }) : W(u, c.value, !0), !0;
      },
      deleteProperty(d, l) {
        var c = t.get(l);
        if (c === void 0) {
          if (l in d) {
            const u = s(() => /* @__PURE__ */ ue(At));
            t.set(l, u), Ia(i);
          }
        } else
          W(c, At), Ia(i);
        return !0;
      },
      get(d, l, c) {
        var v;
        if (l === $n)
          return n;
        var u = t.get(l), h = l in d;
        if (u === void 0 && (!h || (v = Or(d, l)) != null && v.writable) && (u = s(() => {
          var g = Ce(h ? d[l] : At), p = /* @__PURE__ */ ue(g);
          return p;
        }), t.set(l, u)), u !== void 0) {
          var f = o(u);
          return f === At ? void 0 : f;
        }
        return Reflect.get(d, l, c);
      },
      getOwnPropertyDescriptor(d, l) {
        var c = Reflect.getOwnPropertyDescriptor(d, l);
        if (c && "value" in c) {
          var u = t.get(l);
          u && (c.value = o(u));
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
      has(d, l) {
        var f;
        if (l === $n)
          return !0;
        var c = t.get(l), u = c !== void 0 && c.v !== At || Reflect.has(d, l);
        if (c !== void 0 || Fe !== null && (!u || (f = Or(d, l)) != null && f.writable)) {
          c === void 0 && (c = s(() => {
            var v = u ? Ce(d[l]) : At, g = /* @__PURE__ */ ue(v);
            return g;
          }), t.set(l, c));
          var h = o(c);
          if (h === At)
            return !1;
        }
        return u;
      },
      set(d, l, c, u) {
        var x;
        var h = t.get(l), f = l in d;
        if (r && l === "length")
          for (var v = c; v < /** @type {Source<number>} */
          h.v; v += 1) {
            var g = t.get(v + "");
            g !== void 0 ? W(g, At) : v in d && (g = s(() => /* @__PURE__ */ ue(At)), t.set(v + "", g));
          }
        if (h === void 0)
          (!f || (x = Or(d, l)) != null && x.writable) && (h = s(() => /* @__PURE__ */ ue(void 0)), W(h, Ce(c)), t.set(l, h));
        else {
          f = h.v !== At;
          var p = s(() => Ce(c));
          W(h, p);
        }
        var C = Reflect.getOwnPropertyDescriptor(d, l);
        if (C != null && C.set && C.set.call(u, c), !f) {
          if (r && typeof l == "string") {
            var A = (
              /** @type {Source<number>} */
              t.get("length")
            ), E = Number(l);
            Number.isInteger(E) && E >= A.v && W(A, E + 1);
          }
          Ia(i);
        }
        return !0;
      },
      ownKeys(d) {
        o(i);
        var l = Reflect.ownKeys(d).filter((h) => {
          var f = t.get(h);
          return f === void 0 || f.v !== At;
        });
        for (var [c, u] of t)
          u.v !== At && !(c in d) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        Ju();
      }
    }
  );
}
function nl(n) {
  try {
    if (n !== null && typeof n == "object" && $n in n)
      return n[$n];
  } catch {
  }
  return n;
}
function Cc(n, e) {
  return Object.is(nl(n), nl(e));
}
var ss, Fo, fd, hd, vd;
function Ac() {
  if (ss === void 0) {
    ss = window, Fo = document, fd = /Firefox/.test(navigator.userAgent);
    var n = Element.prototype, e = Node.prototype, t = Text.prototype;
    hd = Or(e, "firstChild").get, vd = Or(e, "nextSibling").get, $o(n) && (n.__click = void 0, n.__className = void 0, n.__attributes = null, n.__style = void 0, n.__e = void 0), $o(t) && (t.__t = void 0);
  }
}
function Wr(n = "") {
  return document.createTextNode(n);
}
// @__NO_SIDE_EFFECTS__
function Ki(n) {
  return hd.call(n);
}
// @__NO_SIDE_EFFECTS__
function Ra(n) {
  return vd.call(n);
}
function B(n, e) {
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
    return t instanceof Comment && t.data === "" ? /* @__PURE__ */ Ra(t) : t;
  }
}
function J(n, e = 1, t = !1) {
  let r = n;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ra(r);
  return r;
}
function Ec(n) {
  n.textContent = "";
}
function ko() {
  return !1;
}
function Sc(n, e) {
  if (e) {
    const t = document.body;
    n.autofocus = !0, mr(() => {
      document.activeElement === t && n.focus();
    });
  }
}
let rl = !1;
function xc() {
  rl || (rl = !0, document.addEventListener(
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
function Es(n) {
  var e = Me, t = Fe;
  dn(null), er(null);
  try {
    return n();
  } finally {
    dn(e), er(t);
  }
}
function wc(n, e, t, r = t) {
  n.addEventListener(e, () => Es(t));
  const i = n.__on_r;
  i ? n.__on_r = () => {
    i(), r(!0);
  } : n.__on_r = () => r(!0), xc();
}
function Tc(n) {
  Fe === null && Me === null && qu(), Me !== null && Me.f & Tn && Fe === null && ju(), Ci && zu();
}
function Dc(n, e) {
  var t = e.last;
  t === null ? e.last = e.first = n : (t.next = n, n.prev = t, e.last = n);
}
function nr(n, e, t, r = !0) {
  var i = Fe;
  i !== null && i.f & Un && (n |= Un);
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
      ya(a), a.f |= Lo;
    } catch (l) {
      throw xt(a), l;
    }
  else e !== null && gi(a);
  if (r) {
    var s = a;
    if (t && s.deps === null && s.teardown === null && s.nodes_start === null && s.first === s.last && // either `null`, or a singular child
    !(s.f & yi) && (s = s.first), s !== null && (s.parent = i, i !== null && Dc(s, i), Me !== null && Me.f & en && !(n & Br))) {
      var d = (
        /** @type {Derived} */
        Me
      );
      (d.effects ?? (d.effects = [])).push(s);
    }
  }
  return a;
}
function Lc() {
  return Me !== null && !Fn;
}
function Ss(n) {
  const e = nr(To, null, !1);
  return Jt(e, zt), e.teardown = n, e;
}
function Se(n) {
  Tc();
  var e = (
    /** @type {Effect} */
    Fe.f
  ), t = !Me && (e & Ir) !== 0 && (e & Lo) === 0;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      $e
    );
    (r.e ?? (r.e = [])).push(n);
  } else
    return gd(n);
}
function gd(n) {
  return nr(wo | Wu, n, !1);
}
function Rc(n) {
  Jn.ensure();
  const e = nr(Br | yi, n, !0);
  return () => {
    xt(e);
  };
}
function Oc(n) {
  Jn.ensure();
  const e = nr(Br | yi, n, !0);
  return (t = {}) => new Promise((r) => {
    t.outro ? Pr(e, () => {
      xt(e), r(void 0);
    }) : (xt(e), r(void 0));
  });
}
function Oa(n) {
  return nr(wo, n, !1);
}
function Mc(n) {
  return nr(ys | yi, n, !0);
}
function xs(n, e = 0) {
  return nr(To | e, n, !0);
}
function ve(n, e = [], t = []) {
  od(e, t, (r) => {
    nr(To, () => n(...r.map(o)), !0);
  });
}
function Vr(n, e = 0) {
  var t = nr(Ii | e, n, !0);
  return t;
}
function Vt(n, e = !0) {
  return nr(Ir | yi, n, !0, e);
}
function md(n) {
  var e = n.teardown;
  if (e !== null) {
    const t = Ci, r = Me;
    al(!0), dn(null);
    try {
      e.call(null);
    } finally {
      al(t), dn(r);
    }
  }
}
function pd(n, e = !1) {
  var t = n.first;
  for (n.first = n.last = null; t !== null; ) {
    const i = t.ac;
    i !== null && Es(() => {
      i.abort(Mi);
    });
    var r = t.next;
    t.f & Br ? t.parent = null : xt(t, e), t = r;
  }
}
function Pc(n) {
  for (var e = n.first; e !== null; ) {
    var t = e.next;
    e.f & Ir || xt(e), e = t;
  }
}
function xt(n, e = !0) {
  var t = !1;
  (e || n.f & Gu) && n.nodes_start !== null && n.nodes_end !== null && (Fc(
    n.nodes_start,
    /** @type {TemplateNode} */
    n.nodes_end
  ), t = !0), pd(n, e && !t), os(n, 0), Jt(n, bi);
  var r = n.transitions;
  if (r !== null)
    for (const a of r)
      a.stop();
  md(n);
  var i = n.parent;
  i !== null && i.first !== null && Id(n), n.next = n.prev = n.teardown = n.ctx = n.deps = n.fn = n.nodes_start = n.nodes_end = n.ac = null;
}
function Fc(n, e) {
  for (; n !== null; ) {
    var t = n === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ra(n)
    );
    n.remove(), n = t;
  }
}
function Id(n) {
  var e = n.parent, t = n.prev, r = n.next;
  t !== null && (t.next = r), r !== null && (r.prev = t), e !== null && (e.first === n && (e.first = r), e.last === n && (e.last = t));
}
function Pr(n, e) {
  var t = [];
  No(n, t, !0), bd(t, () => {
    xt(n), e && e();
  });
}
function bd(n, e) {
  var t = n.length;
  if (t > 0) {
    var r = () => --t || e();
    for (var i of n)
      i.out(r);
  } else
    e();
}
function No(n, e, t) {
  if (!(n.f & Un)) {
    if (n.f ^= Un, n.transitions !== null)
      for (const s of n.transitions)
        (s.is_global || t) && e.push(s);
    for (var r = n.first; r !== null; ) {
      var i = r.next, a = (r.f & _i) !== 0 || (r.f & Ir) !== 0;
      No(r, e, a ? t : !1), r = i;
    }
  }
}
function ws(n) {
  _d(n, !0);
}
function _d(n, e) {
  if (n.f & Un) {
    n.f ^= Un, n.f & zt || (Jt(n, gn), gi(n));
    for (var t = n.first; t !== null; ) {
      var r = t.next, i = (t.f & _i) !== 0 || (t.f & Ir) !== 0;
      _d(t, i ? e : !1), t = r;
    }
    if (n.transitions !== null)
      for (const a of n.transitions)
        (a.is_global || e) && a.in();
  }
}
let ki = !1;
function il(n) {
  ki = n;
}
let Ci = !1;
function al(n) {
  Ci = n;
}
let Me = null, Fn = !1;
function dn(n) {
  Me = n;
}
let Fe = null;
function er(n) {
  Fe = n;
}
let Kt = null;
function yd(n) {
  Me !== null && (Kt === null ? Kt = [n] : Kt.push(n));
}
let Yt = null, cn = 0, An = null;
function kc(n) {
  An = n;
}
let Cd = 1, _a = 0, ci = _a;
function sl(n) {
  ci = n;
}
let Dr = !1;
function Ad() {
  return ++Cd;
}
function Ts(n) {
  var h;
  var e = n.f;
  if (e & gn)
    return !0;
  if (e & Gr) {
    var t = n.deps, r = (e & Tn) !== 0;
    if (t !== null) {
      var i, a, s = (e & as) !== 0, d = r && Fe !== null && !Dr, l = t.length;
      if ((s || d) && (Fe === null || !(Fe.f & bi))) {
        var c = (
          /** @type {Derived} */
          n
        ), u = c.parent;
        for (i = 0; i < l; i++)
          a = t[i], (s || !((h = a == null ? void 0 : a.reactions) != null && h.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        s && (c.f ^= as), d && u !== null && !(u.f & Tn) && (c.f ^= Tn);
      }
      for (i = 0; i < l; i++)
        if (a = t[i], Ts(
          /** @type {Derived} */
          a
        ) && dd(
          /** @type {Derived} */
          a
        ), a.wv > n.wv)
          return !0;
    }
    (!r || Fe !== null && !Dr) && Jt(n, zt);
  }
  return !1;
}
function Ed(n, e, t = !0) {
  var r = n.reactions;
  if (r !== null && !(Kt != null && Kt.includes(n)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a.f & en ? Ed(
        /** @type {Derived} */
        a,
        e,
        !1
      ) : e === a && (t ? Jt(a, gn) : a.f & zt && Jt(a, Gr), gi(
        /** @type {Effect} */
        a
      ));
    }
}
function Sd(n) {
  var p;
  var e = Yt, t = cn, r = An, i = Me, a = Dr, s = Kt, d = $e, l = Fn, c = ci, u = n.f;
  Yt = /** @type {null | Value[]} */
  null, cn = 0, An = null, Dr = (u & Tn) !== 0 && (Fn || !ki || Me === null), Me = u & (Ir | Br) ? null : n, Kt = null, qi(n.ctx), Fn = !1, ci = ++_a, n.ac !== null && (Es(() => {
    n.ac.abort(Mi);
  }), n.ac = null);
  try {
    n.f |= eo;
    var h = (
      /** @type {Function} */
      n.fn
    ), f = h(), v = n.deps;
    if (Yt !== null) {
      var g;
      if (os(n, cn), v !== null && cn > 0)
        for (v.length = cn + Yt.length, g = 0; g < Yt.length; g++)
          v[cn + g] = Yt[g];
      else
        n.deps = v = Yt;
      if (!Dr || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      u & en && /** @type {import('#client').Derived} */
      n.reactions !== null)
        for (g = cn; g < v.length; g++)
          ((p = v[g]).reactions ?? (p.reactions = [])).push(n);
    } else v !== null && cn < v.length && (os(n, cn), v.length = cn);
    if (La() && An !== null && !Fn && v !== null && !(n.f & (en | Gr | gn)))
      for (g = 0; g < /** @type {Source[]} */
      An.length; g++)
        Ed(
          An[g],
          /** @type {Effect} */
          n
        );
    return i !== null && i !== n && (_a++, An !== null && (r === null ? r = An : r.push(.../** @type {Source[]} */
    An))), n.f & ui && (n.f ^= ui), f;
  } catch (C) {
    return nd(C);
  } finally {
    n.f ^= eo, Yt = e, cn = t, An = r, Me = i, Dr = a, Kt = s, qi(d), Fn = l, ci = c;
  }
}
function Nc(n, e) {
  let t = e.reactions;
  if (t !== null) {
    var r = Hu.call(t, n);
    if (r !== -1) {
      var i = t.length - 1;
      i === 0 ? t = e.reactions = null : (t[r] = t[i], t.pop());
    }
  }
  t === null && e.f & en && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Yt === null || !Yt.includes(e)) && (Jt(e, Gr), e.f & (Tn | as) || (e.f ^= as), ld(
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
      Nc(n, t[r]);
}
function ya(n) {
  var e = n.f;
  if (!(e & bi)) {
    Jt(n, zt);
    var t = Fe, r = ki;
    Fe = n, ki = !0;
    try {
      e & Ii ? Pc(n) : pd(n), md(n);
      var i = Sd(n);
      n.teardown = typeof i == "function" ? i : null, n.wv = Cd;
      var a;
      ql && rc && n.f & gn && n.deps;
    } finally {
      ki = r, Fe = t;
    }
  }
}
async function xd() {
  await Promise.resolve(), uc();
}
function o(n) {
  var e = n.f, t = (e & en) !== 0;
  if (Me !== null && !Fn) {
    var r = Fe !== null && (Fe.f & bi) !== 0;
    if (!r && !(Kt != null && Kt.includes(n))) {
      var i = Me.deps;
      if (Me.f & eo)
        n.rv < _a && (n.rv = _a, Yt === null && i !== null && i[cn] === n ? cn++ : Yt === null ? Yt = [n] : (!Dr || !Yt.includes(n)) && Yt.push(n));
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
    ), d = s.parent;
    d !== null && !(d.f & Tn) && (s.f ^= Tn);
  }
  if (Ci) {
    if (Mr.has(n))
      return Mr.get(n);
    if (t) {
      s = /** @type {Derived} */
      n;
      var l = s.v;
      return (!(s.f & zt) && s.reactions !== null || wd(s)) && (l = Po(s)), Mr.set(s, l), l;
    }
  } else if (t) {
    if (s = /** @type {Derived} */
    n, Mt != null && Mt.has(s))
      return Mt.get(s);
    Ts(s) && dd(s);
  }
  if (Mt != null && Mt.has(n))
    return Mt.get(n);
  if (n.f & ui)
    throw n.v;
  return n.v;
}
function wd(n) {
  if (n.v === At) return !0;
  if (n.deps === null) return !1;
  for (const e of n.deps)
    if (Mr.has(e) || e.f & en && wd(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Zr(n) {
  var e = Fn;
  try {
    return Fn = !0, n();
  } finally {
    Fn = e;
  }
}
const Hc = -7169;
function Jt(n, e) {
  n.f = n.f & Hc | e;
}
function Uc(n) {
  if (!(typeof n != "object" || !n || n instanceof EventTarget)) {
    if ($n in n)
      oo(n);
    else if (!Array.isArray(n))
      for (let e in n) {
        const t = n[e];
        typeof t == "object" && t && $n in t && oo(t);
      }
  }
}
function oo(n, e = /* @__PURE__ */ new Set()) {
  if (typeof n == "object" && n !== null && // We don't want to traverse DOM elements
  !(n instanceof EventTarget) && !e.has(n)) {
    e.add(n), n instanceof Date && n.getTime();
    for (let r in n)
      try {
        oo(n[r], e);
      } catch {
      }
    const t = _s(n);
    if (t !== Object.prototype && t !== Array.prototype && t !== Map.prototype && t !== Set.prototype && t !== Date.prototype) {
      const r = Xl(t);
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
const Td = /* @__PURE__ */ new Set(), lo = /* @__PURE__ */ new Set();
function Ho(n, e, t, r = {}) {
  function i(a) {
    if (r.capture || ga.call(e, a), !a.cancelBubble)
      return Es(() => t == null ? void 0 : t.call(this, a));
  }
  return n.startsWith("pointer") || n.startsWith("touch") || n === "wheel" ? mr(() => {
    e.addEventListener(n, i, r);
  }) : e.addEventListener(n, i, r), i;
}
function Bc(n, e, t, r = {}) {
  var i = Ho(e, n, t, r);
  return () => {
    n.removeEventListener(e, i, r);
  };
}
function hn(n, e, t, r, i) {
  var a = { capture: r, passive: i }, s = Ho(n, e, t, a);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && Ss(() => {
    e.removeEventListener(n, s, a);
  });
}
function Tt(n) {
  for (var e = 0; e < n.length; e++)
    Td.add(n[e]);
  for (var t of lo)
    t(n);
}
let ol = null;
function ga(n) {
  var E;
  var e = this, t = (
    /** @type {Node} */
    e.ownerDocument
  ), r = n.type, i = ((E = n.composedPath) == null ? void 0 : E.call(n)) || [], a = (
    /** @type {null | Element} */
    i[0] || n.target
  );
  ol = n;
  var s = 0, d = ol === n && n.__root;
  if (d) {
    var l = i.indexOf(d);
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
    var u = Me, h = Fe;
    dn(null), er(null);
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
              var [C, ...A] = p;
              C.apply(a, [n, ...A]);
            } else
              p.call(a, n);
        } catch (x) {
          f ? v.push(x) : f = x;
        }
        if (n.cancelBubble || g === e || g === null)
          break;
        a = g;
      }
      if (f) {
        for (let x of v)
          queueMicrotask(() => {
            throw x;
          });
        throw f;
      }
    } finally {
      n.__root = e, delete n.currentTarget, dn(u), er(h);
    }
  }
}
function Dd(n) {
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
    i === void 0 && (i = Dd(a ? n : "<!>" + n), t || (i = /** @type {Node} */
    /* @__PURE__ */ Ki(i)));
    var s = (
      /** @type {TemplateNode} */
      r || fd ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (t) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ki(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Ji(d, l);
    } else
      Ji(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Gc(n, e, t = "svg") {
  var r = !n.startsWith("<!>"), i = `<${t}>${r ? n : "<!>" + n}</${t}>`, a;
  return () => {
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        Dd(i)
      ), d = (
        /** @type {Element} */
        /* @__PURE__ */ Ki(s)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ Ki(d);
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
  return /* @__PURE__ */ Gc(n, e, "svg");
}
function dt(n = "") {
  {
    var e = Wr(n + "");
    return Ji(e, e), e;
  }
}
function re() {
  var n = document.createDocumentFragment(), e = document.createComment(""), t = Wr();
  return n.append(e, t), Ji(e, t), n;
}
function S(n, e) {
  n !== null && n.before(
    /** @type {Node} */
    e
  );
}
function Wc(n) {
  return n.endsWith("capture") && n !== "gotpointercapture" && n !== "lostpointercapture";
}
const Vc = [
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
function Zc(n) {
  return Vc.includes(n);
}
const zc = {
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
function jc(n) {
  return n = n.toLowerCase(), zc[n] ?? n;
}
const qc = ["touchstart", "touchmove"];
function Xc(n) {
  return qc.includes(n);
}
function Pe(n, e) {
  var t = e == null ? "" : typeof e == "object" ? e + "" : e;
  t !== (n.__t ?? (n.__t = n.nodeValue)) && (n.__t = t, n.nodeValue = t + "");
}
function Yc(n, e) {
  return Kc(n, e);
}
const Ti = /* @__PURE__ */ new Map();
function Kc(n, { target: e, anchor: t, props: r = {}, events: i, context: a, intro: s = !0 }) {
  Ac();
  var d = /* @__PURE__ */ new Set(), l = (h) => {
    for (var f = 0; f < h.length; f++) {
      var v = h[f];
      if (!d.has(v)) {
        d.add(v);
        var g = Xc(v);
        e.addEventListener(v, ga, { passive: g });
        var p = Ti.get(v);
        p === void 0 ? (document.addEventListener(v, ga, { passive: g }), Ti.set(v, 1)) : Ti.set(v, p + 1);
      }
    }
  };
  l(xo(Td)), lo.add(l);
  var c = void 0, u = Oc(() => {
    var h = t ?? e.appendChild(Wr());
    return vc(
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
      for (var f of d) {
        e.removeEventListener(f, ga);
        var v = (
          /** @type {number} */
          Ti.get(f)
        );
        --v === 0 ? (document.removeEventListener(f, ga), Ti.delete(f)) : Ti.set(f, v);
      }
      lo.delete(l), h !== t && ((g = h.parentNode) == null || g.removeChild(h));
    };
  });
  return Jc.set(c, u), c;
}
let Jc = /* @__PURE__ */ new WeakMap();
function _e(n, e, ...t) {
  var r = n, i = pe, a;
  Vr(() => {
    i !== (i = e()) && (a && (xt(a), a = null), a = Vt(() => (
      /** @type {SnippetFn} */
      i(r, ...t)
    )));
  }, _i);
}
function it(n) {
  $e === null && Ro(), ta && $e.l !== null ? Qc($e).m.push(n) : Se(() => {
    const e = Zr(n);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Gn(n) {
  $e === null && Ro(), it(() => () => Zr(n));
}
function Qc(n) {
  var e = (
    /** @type {ComponentContextLegacy} */
    n.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
function $(n, e, t = !1) {
  var r = n, i = null, a = null, s = At, d = t ? _i : 0, l = !1;
  const c = (v, g = !0) => {
    l = !0, f(g, v);
  };
  var u = null;
  function h() {
    u !== null && (u.lastChild.remove(), r.before(u), u = null);
    var v = s ? i : a, g = s ? a : i;
    v && ws(v), g && Pr(g, () => {
      s ? a = null : i = null;
    });
  }
  const f = (v, g) => {
    if (s !== (s = v)) {
      var p = ko(), C = r;
      if (p && (u = document.createDocumentFragment(), u.append(C = Wr())), s ? i ?? (i = g && Vt(() => g(C))) : a ?? (a = g && Vt(() => g(C))), p) {
        var A = (
          /** @type {Batch} */
          Ye
        ), E = s ? i : a, x = s ? a : i;
        E && A.skipped_effects.delete(E), x && A.skipped_effects.add(x), A.add_callback(h);
      } else
        h();
    }
  };
  Vr(() => {
    l = !1, e(c), l || f(null, null);
  }, d);
}
let fi = null;
function ll(n) {
  fi = n;
}
function hr(n, e) {
  return e;
}
function $c(n, e, t) {
  for (var r = n.items, i = [], a = e.length, s = 0; s < a; s++)
    No(e[s].e, i, !0);
  var d = a > 0 && i.length === 0 && t !== null;
  if (d) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      t.parentNode
    );
    Ec(l), l.append(
      /** @type {Element} */
      t
    ), r.clear(), Vn(n, e[0].prev, e[a - 1].next);
  }
  bd(i, () => {
    for (var c = 0; c < a; c++) {
      var u = e[c];
      d || (r.delete(u.k), Vn(n, u.prev, u.next)), xt(u.e, !d);
    }
  });
}
function vn(n, e, t, r, i, a = null) {
  var s = n, d = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, l = (e & 4) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      n
    );
    s = c.appendChild(Wr());
  }
  var u = null, h = !1, f = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ Mo(() => {
    var A = t();
    return Da(A) ? A : A == null ? [] : xo(A);
  }), g, p;
  function C() {
    ef(
      p,
      g,
      d,
      f,
      s,
      i,
      e,
      r,
      t
    ), a !== null && (g.length === 0 ? u ? ws(u) : u = Vt(() => a(s)) : u !== null && Pr(u, () => {
      u = null;
    }));
  }
  Vr(() => {
    p ?? (p = /** @type {Effect} */
    Fe), g = /** @type {V[]} */
    o(v);
    var A = g.length;
    if (!(h && A === 0)) {
      h = A === 0;
      var E, x, I, T;
      if (ko()) {
        var _ = /* @__PURE__ */ new Set(), y = (
          /** @type {Batch} */
          Ye
        );
        for (x = 0; x < A; x += 1) {
          I = g[x], T = r(I, x);
          var b = d.items.get(T) ?? f.get(T);
          b ? e & 3 && Ld(b, I, x, e) : (E = Rd(
            null,
            d,
            null,
            null,
            I,
            T,
            x,
            i,
            e,
            t,
            !0
          ), f.set(T, E)), _.add(T);
        }
        for (const [w, D] of d.items)
          _.has(w) || y.skipped_effects.add(D.e);
        y.add_callback(C);
      } else
        C();
      o(v);
    }
  });
}
function ef(n, e, t, r, i, a, s, d, l) {
  var oe, R, K, q;
  var c = (s & 8) !== 0, u = (s & 3) !== 0, h = e.length, f = t.items, v = t.first, g = v, p, C = null, A, E = [], x = [], I, T, _, y;
  if (c)
    for (y = 0; y < h; y += 1)
      I = e[y], T = d(I, y), _ = f.get(T), _ !== void 0 && ((oe = _.a) == null || oe.measure(), (A ?? (A = /* @__PURE__ */ new Set())).add(_));
  for (y = 0; y < h; y += 1) {
    if (I = e[y], T = d(I, y), _ = f.get(T), _ === void 0) {
      var b = r.get(T);
      if (b !== void 0) {
        r.delete(T), f.set(T, b);
        var w = C ? C.next : g;
        Vn(t, C, b), Vn(t, b, w), Vs(b, w, i), C = b;
      } else {
        var D = g ? (
          /** @type {TemplateNode} */
          g.e.nodes_start
        ) : i;
        C = Rd(
          D,
          t,
          C,
          C === null ? t.first : C.next,
          I,
          T,
          y,
          a,
          s,
          l
        );
      }
      f.set(T, C), E = [], x = [], g = C.next;
      continue;
    }
    if (u && Ld(_, I, y, s), _.e.f & Un && (ws(_.e), c && ((R = _.a) == null || R.unfix(), (A ?? (A = /* @__PURE__ */ new Set())).delete(_))), _ !== g) {
      if (p !== void 0 && p.has(_)) {
        if (E.length < x.length) {
          var G = x[0], M;
          C = G.prev;
          var N = E[0], le = E[E.length - 1];
          for (M = 0; M < E.length; M += 1)
            Vs(E[M], G, i);
          for (M = 0; M < x.length; M += 1)
            p.delete(x[M]);
          Vn(t, N.prev, le.next), Vn(t, C, N), Vn(t, le, G), g = G, C = le, y -= 1, E = [], x = [];
        } else
          p.delete(_), Vs(_, g, i), Vn(t, _.prev, _.next), Vn(t, _, C === null ? t.first : C.next), Vn(t, C, _), C = _;
        continue;
      }
      for (E = [], x = []; g !== null && g.k !== T; )
        g.e.f & Un || (p ?? (p = /* @__PURE__ */ new Set())).add(g), x.push(g), g = g.next;
      if (g === null)
        continue;
      _ = g;
    }
    E.push(_), C = _, g = _.next;
  }
  if (g !== null || p !== void 0) {
    for (var U = p === void 0 ? [] : xo(p); g !== null; )
      g.e.f & Un || U.push(g), g = g.next;
    var H = U.length;
    if (H > 0) {
      var k = s & 4 && h === 0 ? i : null;
      if (c) {
        for (y = 0; y < H; y += 1)
          (K = U[y].a) == null || K.measure();
        for (y = 0; y < H; y += 1)
          (q = U[y].a) == null || q.fix();
      }
      $c(t, U, k);
    }
  }
  c && mr(() => {
    var ge;
    if (A !== void 0)
      for (_ of A)
        (ge = _.a) == null || ge.apply();
  }), n.first = t.first && t.first.e, n.last = C && C.e;
  for (var X of r.values())
    xt(X.e);
  r.clear();
}
function Ld(n, e, t, r) {
  r & 1 && Yi(n.v, e), r & 2 ? Yi(
    /** @type {Value<number>} */
    n.i,
    t
  ) : n.i = t;
}
function Rd(n, e, t, r, i, a, s, d, l, c, u) {
  var h = fi, f = (l & 1) !== 0, v = (l & 16) === 0, g = f ? v ? /* @__PURE__ */ ud(i, !1, !1) : mi(i) : i, p = l & 2 ? mi(s) : s, C = {
    i: p,
    v: g,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: t,
    next: r
  };
  fi = C;
  try {
    if (n === null) {
      var A = document.createDocumentFragment();
      A.append(n = Wr());
    }
    return C.e = Vt(() => d(
      /** @type {Node} */
      n,
      g,
      p,
      c
    ), nc), C.e.prev = t && t.e, C.e.next = r && r.e, t === null ? u || (e.first = C) : (t.next = C, t.e.next = C.e), r !== null && (r.prev = C, r.e.prev = C.e), C;
  } finally {
    fi = h;
  }
}
function Vs(n, e, t) {
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
      /* @__PURE__ */ Ra(a)
    );
    i.before(a), a = s;
  }
}
function Vn(n, e, t) {
  e === null ? n.first = t : (e.next = t, e.e.next = t && t.e), t !== null && (t.prev = e, t.e.prev = e && e.e);
}
function tf(n, e, t, r, i) {
  var d;
  var a = (d = e.$$slots) == null ? void 0 : d[t], s = !1;
  a === !0 && (a = e.children, s = !0), a === void 0 || a(n, s ? () => r : r);
}
function Ma(n, e, t) {
  var r = n, i, a, s = null, d = null;
  function l() {
    a && (Pr(a), a = null), s && (s.lastChild.remove(), r.before(s), s = null), a = d, d = null;
  }
  Vr(() => {
    if (i !== (i = e())) {
      var c = ko();
      if (i) {
        var u = r;
        c && (s = document.createDocumentFragment(), s.append(u = Wr()), a && Ye.skipped_effects.add(a)), d = Vt(() => t(u, i));
      }
      c ? Ye.add_callback(l) : l();
    }
  }, _i);
}
function uo(n, e, t, r, i, a) {
  var s, d, l = null, c = (
    /** @type {TemplateNode} */
    n
  ), u, h = fi;
  Vr(() => {
    const f = e() || null;
    var v = f === "svg" ? ku : null;
    if (f !== s) {
      var g = fi;
      ll(h), u && (f === null ? Pr(u, () => {
        u = null, d = null;
      }) : f === d ? ws(u) : xt(u)), f && f !== d && (u = Vt(() => {
        if (l = v ? document.createElementNS(v, f) : document.createElement(f), Ji(l, l), r) {
          var p = (
            /** @type {TemplateNode} */
            l.appendChild(Wr())
          );
          r(l, p);
        }
        Fe.nodes_end = l, c.before(l);
      })), s = f, s && (d = s), ll(g);
    }
  }, _i);
}
function Oe(n, e, t) {
  Oa(() => {
    var r = Zr(() => e(n, t == null ? void 0 : t()) || {});
    if (t && (r != null && r.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      xs(() => {
        var s = t();
        Uc(s), i && Oo(a, s) && (a = s, r.update(s));
      }), i = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function nf(n, e) {
  var t = void 0, r;
  Vr(() => {
    t !== (t = e()) && (r && (xt(r), r = null), t && (r = Vt(() => {
      Oa(() => (
        /** @type {(node: Element) => void} */
        t(n)
      ));
    })));
  });
}
function Od(n) {
  var e, t, r = "";
  if (typeof n == "string" || typeof n == "number") r += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var i = n.length;
    for (e = 0; e < i; e++) n[e] && (t = Od(n[e])) && (r && (r += " "), r += t);
  } else for (t in n) n[t] && (r && (r += " "), r += t);
  return r;
}
function rf() {
  for (var n, e, t = 0, r = "", i = arguments.length; t < i; t++) (n = arguments[t]) && (e = Od(n)) && (r && (r += " "), r += e);
  return r;
}
function Md(n) {
  return typeof n == "object" ? rf(n) : n ?? "";
}
const dl = [...` 	
\r\f \v\uFEFF`];
function af(n, e, t) {
  var r = n == null ? "" : "" + n;
  if (e && (r = r ? r + " " + e : e), t) {
    for (var i in t)
      if (t[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var a = i.length, s = 0; (s = r.indexOf(i, s)) >= 0; ) {
          var d = s + a;
          (s === 0 || dl.includes(r[s - 1])) && (d === r.length || dl.includes(r[d])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(d + 1) : s = d;
        }
  }
  return r === "" ? null : r;
}
function ul(n, e = !1) {
  var t = e ? " !important;" : ";", r = "";
  for (var i in n) {
    var a = n[i];
    a != null && a !== "" && (r += " " + i + ": " + a + t);
  }
  return r;
}
function Zs(n) {
  return n[0] !== "-" || n[1] !== "-" ? n.toLowerCase() : n;
}
function sf(n, e) {
  if (e) {
    var t = "", r, i;
    if (Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, n) {
      n = String(n).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, s = 0, d = !1, l = [];
      r && l.push(...Object.keys(r).map(Zs)), i && l.push(...Object.keys(i).map(Zs));
      var c = 0, u = -1;
      const p = n.length;
      for (var h = 0; h < p; h++) {
        var f = n[h];
        if (d ? f === "/" && n[h - 1] === "*" && (d = !1) : a ? a === f && (a = !1) : f === "/" && n[h + 1] === "*" ? d = !0 : f === '"' || f === "'" ? a = f : f === "(" ? s++ : f === ")" && s--, !d && a === !1 && s === 0) {
          if (f === ":" && u === -1)
            u = h;
          else if (f === ";" || h === p - 1) {
            if (u !== -1) {
              var v = Zs(n.substring(c, u).trim());
              if (!l.includes(v)) {
                f !== ";" && h++;
                var g = n.substring(c, h).trim();
                t += " " + g + ";";
              }
            }
            c = h + 1, u = -1;
          }
        }
      }
    }
    return r && (t += ul(r)), i && (t += ul(i, !0)), t = t.trim(), t === "" ? null : t;
  }
  return n == null ? null : String(n);
}
function pr(n, e, t, r, i, a) {
  var s = n.__className;
  if (s !== t || s === void 0) {
    var d = af(t, r, a);
    d == null ? n.removeAttribute("class") : e ? n.className = d : n.setAttribute("class", d), n.__className = t;
  } else if (a && i !== a)
    for (var l in a) {
      var c = !!a[l];
      (i == null || c !== !!i[l]) && n.classList.toggle(l, c);
    }
  return a;
}
function zs(n, e = {}, t, r) {
  for (var i in t) {
    var a = t[i];
    e[i] !== a && (t[i] == null ? n.style.removeProperty(i) : n.style.setProperty(i, a, r));
  }
}
function nt(n, e, t, r) {
  var i = n.__style;
  if (i !== e) {
    var a = sf(e, r);
    a == null ? n.removeAttribute("style") : n.style.cssText = a, n.__style = e;
  } else r && (Array.isArray(r) ? (zs(n, t == null ? void 0 : t[0], r[0]), zs(n, t == null ? void 0 : t[1], r[1], "important")) : zs(n, t, r));
  return r;
}
function co(n, e, t = !1) {
  if (n.multiple) {
    if (e == null)
      return;
    if (!Da(e))
      return ec();
    for (var r of n.options)
      r.selected = e.includes(cl(r));
    return;
  }
  for (r of n.options) {
    var i = cl(r);
    if (Cc(i, e)) {
      r.selected = !0;
      return;
    }
  }
  (!t || e !== void 0) && (n.selectedIndex = -1);
}
function of(n) {
  var e = new MutationObserver(() => {
    co(n, n.__value);
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
  }), Ss(() => {
    e.disconnect();
  });
}
function cl(n) {
  return "__value" in n ? n.__value : n.value;
}
const da = Symbol("class"), ua = Symbol("style"), Pd = Symbol("is custom element"), Fd = Symbol("is html");
function fl(n, e) {
  var t = Uo(n);
  t.value === (t.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  n.value === e && (e !== 0 || n.nodeName !== "PROGRESS") || (n.value = e ?? "");
}
function lf(n, e) {
  e ? n.hasAttribute("selected") || n.setAttribute("selected", "") : n.removeAttribute("selected");
}
function Qt(n, e, t, r) {
  var i = Uo(n);
  i[e] !== (i[e] = t) && (e === "loading" && (n[Vu] = t), t == null ? n.removeAttribute(e) : typeof t != "string" && kd(n).includes(e) ? n[e] = t : n.setAttribute(e, t));
}
function df(n, e, t, r, i = !1, a = !1) {
  var s = Uo(n), d = s[Pd], l = !s[Fd], c = e || {}, u = n.tagName === "OPTION";
  for (var h in e)
    h in t || (t[h] = null);
  t.class ? t.class = Md(t.class) : t[da] && (t.class = null), t[ua] && (t.style ?? (t.style = null));
  var f = kd(n);
  for (const x in t) {
    let I = t[x];
    if (u && x === "value" && I == null) {
      n.value = n.__value = "", c[x] = I;
      continue;
    }
    if (x === "class") {
      var v = n.namespaceURI === "http://www.w3.org/1999/xhtml";
      pr(n, v, I, r, e == null ? void 0 : e[da], t[da]), c[x] = I, c[da] = t[da];
      continue;
    }
    if (x === "style") {
      nt(n, I, e == null ? void 0 : e[ua], t[ua]), c[x] = I, c[ua] = t[ua];
      continue;
    }
    var g = c[x];
    if (!(I === g && !(I === void 0 && n.hasAttribute(x)))) {
      c[x] = I;
      var p = x[0] + x[1];
      if (p !== "$$")
        if (p === "on") {
          const T = {}, _ = "$$" + x;
          let y = x.slice(2);
          var C = Zc(y);
          if (Wc(y) && (y = y.slice(0, -7), T.capture = !0), !C && g) {
            if (I != null) continue;
            n.removeEventListener(y, c[_], T), c[_] = null;
          }
          if (I != null)
            if (C)
              n[`__${y}`] = I, Tt([y]);
            else {
              let b = function(w) {
                c[x].call(this, w);
              };
              c[_] = Ho(y, n, b, T);
            }
          else C && (n[`__${y}`] = void 0);
        } else if (x === "style")
          Qt(n, x, I);
        else if (x === "autofocus")
          Sc(
            /** @type {HTMLElement} */
            n,
            !!I
          );
        else if (!d && (x === "__value" || x === "value" && I != null))
          n.value = n.__value = I;
        else if (x === "selected" && u)
          lf(
            /** @type {HTMLOptionElement} */
            n,
            I
          );
        else {
          var A = x;
          l || (A = jc(A));
          var E = A === "defaultValue" || A === "defaultChecked";
          if (I == null && !d && !E)
            if (s[x] = null, A === "value" || A === "checked") {
              let T = (
                /** @type {HTMLInputElement} */
                n
              );
              const _ = e === void 0;
              if (A === "value") {
                let y = T.defaultValue;
                T.removeAttribute(A), T.defaultValue = y, T.value = T.__value = _ ? y : null;
              } else {
                let y = T.defaultChecked;
                T.removeAttribute(A), T.defaultChecked = y, T.checked = _ ? y : !1;
              }
            } else
              n.removeAttribute(x);
          else E || f.includes(A) && (d || typeof I != "string") ? (n[A] = I, A in s && (s[A] = At)) : typeof I != "function" && Qt(n, A, I);
        }
    }
  }
  return c;
}
function Ue(n, e, t = [], r = [], i, a = !1, s = !1) {
  od(t, r, (d) => {
    var l = void 0, c = {}, u = n.nodeName === "SELECT", h = !1;
    if (Vr(() => {
      var v = e(...d.map(o)), g = df(
        n,
        l,
        v,
        i,
        a,
        s
      );
      h && u && "value" in v && co(
        /** @type {HTMLSelectElement} */
        n,
        v.value
      );
      for (let C of Object.getOwnPropertySymbols(c))
        v[C] || xt(c[C]);
      for (let C of Object.getOwnPropertySymbols(v)) {
        var p = v[C];
        C.description === Nu && (!l || p !== l[C]) && (c[C] && xt(c[C]), c[C] = Vt(() => nf(n, () => p))), g[C] = p;
      }
      l = g;
    }), u) {
      var f = (
        /** @type {HTMLSelectElement} */
        n
      );
      Oa(() => {
        co(
          f,
          /** @type {Record<string | symbol, any>} */
          l.value,
          !0
        ), of(f);
      });
    }
    h = !0;
  });
}
function Uo(n) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    n.__attributes ?? (n.__attributes = {
      [Pd]: n.nodeName.includes("-"),
      [Fd]: n.namespaceURI === Fu
    })
  );
}
var hl = /* @__PURE__ */ new Map();
function kd(n) {
  var e = n.getAttribute("is") || n.nodeName, t = hl.get(e);
  if (t) return t;
  hl.set(e, t = []);
  for (var r, i = n, a = Element.prototype; a !== i; ) {
    r = Xl(i);
    for (var s in r)
      r[s].set && t.push(s);
    i = _s(i);
  }
  return t;
}
const uf = () => performance.now(), cr = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (n) => requestAnimationFrame(n)
  ),
  now: () => uf(),
  tasks: /* @__PURE__ */ new Set()
};
function Nd() {
  const n = cr.now();
  cr.tasks.forEach((e) => {
    e.c(n) || (cr.tasks.delete(e), e.f());
  }), cr.tasks.size !== 0 && cr.tick(Nd);
}
function cf(n) {
  let e;
  return cr.tasks.size === 0 && cr.tick(Nd), {
    promise: new Promise((t) => {
      cr.tasks.add(e = { c: n, f: t });
    }),
    abort() {
      cr.tasks.delete(e);
    }
  };
}
function ff(n) {
  if (n === "float") return "cssFloat";
  if (n === "offset") return "cssOffset";
  if (n.startsWith("--")) return n;
  const e = n.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (t) => t[0].toUpperCase() + t.slice(1)
  ).join("");
}
function vl(n) {
  const e = {}, t = n.split(";");
  for (const r of t) {
    const [i, a] = r.split(":");
    if (!i || a === void 0) break;
    const s = ff(i.trim());
    e[s] = a.trim();
  }
  return e;
}
const hf = (n) => n;
function Bo(n, e, t) {
  var r = (
    /** @type {EachItem} */
    fi
  ), i, a, s, d = null;
  r.a ?? (r.a = {
    element: n,
    measure() {
      i = this.element.getBoundingClientRect();
    },
    apply() {
      if (s == null || s.abort(), a = this.element.getBoundingClientRect(), i.left !== a.left || i.right !== a.right || i.top !== a.top || i.bottom !== a.bottom) {
        const l = e()(this.element, { from: i, to: a }, t == null ? void 0 : t());
        s = Hd(this.element, l, void 0, 1, () => {
          s == null || s.abort(), s = void 0;
        });
      }
    },
    fix() {
      if (!n.getAnimations().length) {
        var { position: l, width: c, height: u } = getComputedStyle(n);
        if (l !== "absolute" && l !== "fixed") {
          var h = (
            /** @type {HTMLElement | SVGElement} */
            n.style
          );
          d = {
            position: h.position,
            width: h.width,
            height: h.height,
            transform: h.transform
          }, h.position = "absolute", h.width = c, h.height = u;
          var f = n.getBoundingClientRect();
          if (i.left !== f.left || i.top !== f.top) {
            var v = `translate(${i.left - f.left}px, ${i.top - f.top}px)`;
            h.transform = h.transform ? `${h.transform} ${v}` : v;
          }
        }
      }
    },
    unfix() {
      if (d) {
        var l = (
          /** @type {HTMLElement | SVGElement} */
          n.style
        );
        l.position = d.position, l.width = d.width, l.height = d.height, l.transform = d.transform;
      }
    }
  }), r.a.element = n;
}
function Hd(n, e, t, r, i) {
  if (Oi(e)) {
    var a, s = !1;
    return mr(() => {
      if (!s) {
        var p = e({ direction: "in" });
        a = Hd(n, p, t, r, i);
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
  const { delay: d = 0, css: l, tick: c, easing: u = hf } = e;
  var h = [];
  if (c && c(0, 1), l) {
    var f = vl(l(0, 1));
    h.push(f, f);
  }
  var v = () => 1 - r, g = n.animate(h, { duration: d, fill: "forwards" });
  return g.onfinish = () => {
    g.cancel();
    var p = 1 - r, C = r - p, A = (
      /** @type {number} */
      e.duration * Math.abs(C)
    ), E = [];
    if (A > 0) {
      var x = !1;
      if (l)
        for (var I = Math.ceil(A / 16.666666666666668), T = 0; T <= I; T += 1) {
          var _ = p + C * u(T / I), y = vl(l(_, 1 - _));
          E.push(y), x || (x = y.overflow === "hidden");
        }
      x && (n.style.overflow = "hidden"), v = () => {
        var b = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          g.currentTime
        );
        return p + C * u(b / A);
      }, c && cf(() => {
        if (g.playState !== "running") return !1;
        var b = v();
        return c(b, 1 - b), !0;
      });
    }
    g = n.animate(E, { duration: A, fill: "forwards" }), g.onfinish = () => {
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
function vf(n, e, t = e) {
  var r = /* @__PURE__ */ new WeakSet();
  wc(n, "input", async (i) => {
    var a = i ? n.defaultValue : n.value;
    if (a = js(n) ? qs(a) : a, t(a), Ye !== null && r.add(Ye), await xd(), a !== (a = e())) {
      var s = n.selectionStart, d = n.selectionEnd, l = n.value.length;
      if (n.value = a ?? "", d !== null) {
        var c = n.value.length;
        s === d && d === l && c > l ? (n.selectionStart = c, n.selectionEnd = c) : (n.selectionStart = s, n.selectionEnd = Math.min(d, c));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Zr(e) == null && n.value && (t(js(n) ? qs(n.value) : n.value), Ye !== null && r.add(Ye)), xs(() => {
    var i = e();
    if (n === document.activeElement) {
      var a = (
        /** @type {Batch} */
        Qa ?? Ye
      );
      if (r.has(a))
        return;
    }
    js(n) && i === qs(n.value) || n.type === "date" && !i && !n.value || i !== n.value && (n.value = i ?? "");
  });
}
function js(n) {
  var e = n.type;
  return e === "number" || e === "range";
}
function qs(n) {
  return n === "" ? null : +n;
}
function gl(n, e) {
  return n === e || (n == null ? void 0 : n[$n]) === e;
}
function we(n = {}, e, t, r) {
  return Oa(() => {
    var i, a;
    return xs(() => {
      i = a, a = [], Zr(() => {
        n !== t(...a) && (e(n, ...a), i && gl(t(...i), n) && e(null, ...i));
      });
    }), () => {
      mr(() => {
        a && gl(t(...a), n) && e(null, ...a);
      });
    };
  }), n;
}
function Ud(n, e, t) {
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
function Bn(n, e = pe) {
  let t = null;
  const r = /* @__PURE__ */ new Set();
  function i(d) {
    if (Oo(n, d) && (n = d, t)) {
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
  function a(d) {
    i(d(
      /** @type {T} */
      n
    ));
  }
  function s(d, l = pe) {
    const c = [d, l];
    return r.add(c), r.size === 1 && (t = e(i, a) || pe), d(
      /** @type {T} */
      n
    ), () => {
      r.delete(c), r.size === 0 && t && (t(), t = null);
    };
  }
  return { set: i, update: a, subscribe: s };
}
function gf(n) {
  let e;
  return Ud(n, (t) => e = t)(), e;
}
let Va = !1, fo = Symbol();
function pi(n, e, t) {
  const r = t[e] ?? (t[e] = {
    store: null,
    source: /* @__PURE__ */ ud(void 0),
    unsubscribe: pe
  });
  if (r.store !== n && !(fo in t))
    if (r.unsubscribe(), r.store = n ?? null, n == null)
      r.source.v = void 0, r.unsubscribe = pe;
    else {
      var i = !0;
      r.unsubscribe = Ud(n, (a) => {
        i ? r.source.v = a : W(r.source, a);
      }), i = !1;
    }
  return n && fo in t ? gf(n) : o(r.source);
}
function Qn(n, e) {
  return n.set(e), e;
}
function Ai() {
  const n = {};
  function e() {
    Ss(() => {
      for (var t in n)
        n[t].unsubscribe();
      is(n, fo, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [n, e];
}
function mf(n) {
  var e = Va;
  try {
    return Va = !1, [n(), Va];
  } finally {
    Va = e;
  }
}
const pf = {
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
    pf
  );
}
const If = {
  get(n, e) {
    let t = n.props.length;
    for (; t--; ) {
      let r = n.props[t];
      if (Oi(r) && (r = r()), typeof r == "object" && r !== null && e in r) return r[e];
    }
  },
  set(n, e, t) {
    let r = n.props.length;
    for (; r--; ) {
      let i = n.props[r];
      Oi(i) && (i = i());
      const a = Or(i, e);
      if (a && a.set)
        return a.set(t), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(n, e) {
    let t = n.props.length;
    for (; t--; ) {
      let r = n.props[t];
      if (Oi(r) && (r = r()), typeof r == "object" && r !== null && e in r) {
        const i = Or(r, e);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(n, e) {
    if (e === $n || e === Jl) return !1;
    for (let t of n.props)
      if (Oi(t) && (t = t()), t != null && e in t) return !0;
    return !1;
  },
  ownKeys(n) {
    const e = [];
    for (let t of n.props)
      if (Oi(t) && (t = t()), !!t) {
        for (const r in t)
          e.includes(r) || e.push(r);
        for (const r of Object.getOwnPropertySymbols(t))
          e.includes(r) || e.push(r);
      }
    return e;
  }
};
function Ke(...n) {
  return new Proxy({ props: n }, If);
}
function m(n, e, t, r) {
  var x;
  var i = !ta || (t & 2) !== 0, a = (t & 8) !== 0, s = (t & 16) !== 0, d = (
    /** @type {V} */
    r
  ), l = !0, c = () => (l && (l = !1, d = s ? Zr(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), d), u;
  if (a) {
    var h = $n in n || Jl in n;
    u = ((x = Or(n, e)) == null ? void 0 : x.set) ?? (h && e in n ? (I) => n[e] = I : void 0);
  }
  var f, v = !1;
  a ? [f, v] = mf(() => (
    /** @type {V} */
    n[e]
  )) : f = /** @type {V} */
  n[e], f === void 0 && r !== void 0 && (f = c(), u && (i && Yu(), u(f)));
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
    return I !== void 0 && (d = /** @type {V} */
    void 0), I === void 0 ? d : I;
  }, i && !(t & 4))
    return g;
  if (u) {
    var p = n.$$legacy;
    return (
      /** @type {() => V} */
      function(I, T) {
        return arguments.length > 0 ? ((!i || !T || p || v) && u(T ? g() : I), I) : g();
      }
    );
  }
  var C = !1, A = (t & 1 ? As : Mo)(() => (C = !1, g()));
  a && o(A);
  var E = (
    /** @type {Effect} */
    Fe
  );
  return (
    /** @type {() => V} */
    function(I, T) {
      if (arguments.length > 0) {
        const _ = T ? o(A) : i && a ? Ce(I) : I;
        return W(A, _), C = !0, d !== void 0 && (d = _), I;
      }
      return Ci && C || E.f & bi ? A.v : o(A);
    }
  );
}
const bf = "5";
var jl;
typeof window < "u" && ((jl = window.__svelte ?? (window.__svelte = {})).v ?? (jl.v = /* @__PURE__ */ new Set())).add(bf);
function He(n) {
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
    t in a || (a[t] = /* @__PURE__ */ new Map()), a[t].set(r, Bc(e, t, r, i));
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
function te(n, e) {
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
function _f(n, e) {
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
function yf(n, e, t) {
  if (!n)
    return { x: 0, y: 0 };
  var r = e.x, i = e.y, a = r + t.left, s = i + t.top, d, l;
  if (n.type === "touchstart") {
    var c = n;
    d = c.changedTouches[0].pageX - a, l = c.changedTouches[0].pageY - s;
  } else {
    var u = n;
    d = u.pageX - a, l = u.pageY - s;
  }
  return { x: d, y: l };
}
var ho = function(n, e) {
  return ho = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
  }, ho(n, e);
};
function mn(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  ho(n, e);
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
function Cf(n, e, t, r) {
  function i(a) {
    return a instanceof t ? a : new t(function(s) {
      s(a);
    });
  }
  return new (t || (t = Promise))(function(a, s) {
    function d(u) {
      try {
        c(r.next(u));
      } catch (h) {
        s(h);
      }
    }
    function l(u) {
      try {
        c(r.throw(u));
      } catch (h) {
        s(h);
      }
    }
    function c(u) {
      u.done ? a(u.value) : i(u.value).then(d, l);
    }
    c((r = r.apply(n, e || [])).next());
  });
}
function Af(n, e) {
  var t = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, i, a, s = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return s.next = d(0), s.throw = d(1), s.return = d(2), typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function d(c) {
    return function(u) {
      return l([c, u]);
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
    } catch (u) {
      c = [6, u], i = 0;
    } finally {
      r = a = 0;
    }
    if (c[0] & 5) throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function Nn(n) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && n[e], r = 0;
  if (t) return t.call(n);
  if (n && typeof n.length == "number") return {
    next: function() {
      return n && r >= n.length && (n = void 0), { value: n && n[r++], done: !n };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function ml(n, e) {
  var t = typeof Symbol == "function" && n[Symbol.iterator];
  if (!t) return n;
  var r = t.call(n), i, a = [], s;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = r.next()).done; ) a.push(i.value);
  } catch (d) {
    s = { error: d };
  } finally {
    try {
      i && !i.done && (t = r.return) && t.call(r);
    } finally {
      if (s) throw s.error;
    }
  }
  return a;
}
function Ef(n, e, t) {
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
function Sf(n) {
  return n === void 0 && (n = window), xf(n) ? { passive: !0 } : !1;
}
function xf(n) {
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
const Bd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: Sf
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
function wf(n, e) {
  if (n.closest)
    return n.closest(e);
  for (var t = n; t; ) {
    if (Gd(t, e))
      return t;
    t = t.parentElement;
  }
  return null;
}
function Gd(n, e) {
  var t = n.matches || n.webkitMatchesSelector || n.msMatchesSelector;
  return t.call(n, e);
}
function Tf(n) {
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
  closest: wf,
  estimateScrollWidth: Tf,
  matches: Gd
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
var Df = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Lf = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, pl = {
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
var Il = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], bl = [
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
        return Df;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Lf;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return pl;
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
          for (var a = Nn(Il), s = a.next(); !s.done; s = a.next()) {
            var d = s.value;
            this.adapter.registerInteractionHandler(d, this.activateHandler);
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
          for (var a = Nn(bl), s = a.next(); !s.done; s = a.next()) {
            var d = s.value;
            this.adapter.registerDocumentInteractionHandler(d, this.deactivateHandler);
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
        for (var i = Nn(Il), a = i.next(); !a.done; a = i.next()) {
          var s = a.value;
          this.adapter.deregisterInteractionHandler(s, this.activateHandler);
        }
      } catch (d) {
        t = { error: d };
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
        for (var i = Nn(bl), a = i.next(); !a.done; a = i.next()) {
          var s = a.value;
          this.adapter.deregisterDocumentInteractionHandler(s, this.deactivateHandler);
        }
      } catch (d) {
        t = { error: d };
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
            var d = t !== void 0 && za.length > 0 && za.some(function(l) {
              return r.adapter.containsEventTarget(l);
            });
            if (d) {
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
      var t = this, r = e.strings, i = r.VAR_FG_TRANSLATE_START, a = r.VAR_FG_TRANSLATE_END, s = e.cssClasses, d = s.FG_DEACTIVATION, l = s.FG_ACTIVATION, c = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var u = "", h = "";
      if (!this.adapter.isUnbounded()) {
        var f = this.getFgTranslationCoordinates(), v = f.startPoint, g = f.endPoint;
        u = v.x + "px, " + v.y + "px", h = g.x + "px, " + g.y + "px";
      }
      this.adapter.updateCssVariable(i, u), this.adapter.updateCssVariable(a, h), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(d), this.adapter.computeBoundingRect(), this.adapter.addClass(l), this.activationTimer = setTimeout(function() {
        t.activationTimerCallback();
      }, c);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var t = this.activationState, r = t.activationEvent, i = t.wasActivatedByPointer, a;
      i ? a = yf(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
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
      var t = this, r = e.cssClasses.FG_DEACTIVATION, i = this.activationState, a = i.hasDeactivationUXRun, s = i.isActivated, d = a || !s;
      d && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(r), this.fgDeactivationRemovalTimer = setTimeout(function() {
        t.adapter.removeClass(r);
      }, pl.FG_DEACTIVATION_MS));
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
var Xs = "mdc-dom-focus-sentinel", Of = (
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
      [].slice.call(this.root.querySelectorAll("." + Xs)).forEach(function(e) {
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
        var i = r.getAttribute("aria-disabled") === "true" || r.getAttribute("disabled") != null || r.getAttribute("hidden") != null || r.getAttribute("aria-hidden") === "true", a = r.tabIndex >= 0 && r.getBoundingClientRect().width > 0 && !r.classList.contains(Xs) && !i, s = !1;
        if (a) {
          var d = getComputedStyle(r);
          s = d.display === "none" || d.visibility === "hidden";
        }
        return a && !s;
      });
    }, n.prototype.createSentinel = function() {
      var e = document.createElement("div");
      return e.setAttribute("tabindex", "0"), e.setAttribute("aria-hidden", "true"), e.classList.add(Xs), e;
    }, n;
  }()
);
const Mf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FocusTrap: Of
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
}, tn = /* @__PURE__ */ new Set();
tn.add(Le.BACKSPACE);
tn.add(Le.ENTER);
tn.add(Le.SPACEBAR);
tn.add(Le.PAGE_UP);
tn.add(Le.PAGE_DOWN);
tn.add(Le.END);
tn.add(Le.HOME);
tn.add(Le.ARROW_LEFT);
tn.add(Le.ARROW_UP);
tn.add(Le.ARROW_RIGHT);
tn.add(Le.ARROW_DOWN);
tn.add(Le.DELETE);
tn.add(Le.ESCAPE);
tn.add(Le.TAB);
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
nn.set(un.BACKSPACE, Le.BACKSPACE);
nn.set(un.ENTER, Le.ENTER);
nn.set(un.SPACEBAR, Le.SPACEBAR);
nn.set(un.PAGE_UP, Le.PAGE_UP);
nn.set(un.PAGE_DOWN, Le.PAGE_DOWN);
nn.set(un.END, Le.END);
nn.set(un.HOME, Le.HOME);
nn.set(un.ARROW_LEFT, Le.ARROW_LEFT);
nn.set(un.ARROW_UP, Le.ARROW_UP);
nn.set(un.ARROW_RIGHT, Le.ARROW_RIGHT);
nn.set(un.ARROW_DOWN, Le.ARROW_DOWN);
nn.set(un.DELETE, Le.DELETE);
nn.set(un.ESCAPE, Le.ESCAPE);
nn.set(un.TAB, Le.TAB);
var zr = /* @__PURE__ */ new Set();
zr.add(Le.PAGE_UP);
zr.add(Le.PAGE_DOWN);
zr.add(Le.END);
zr.add(Le.HOME);
zr.add(Le.ARROW_LEFT);
zr.add(Le.ARROW_UP);
zr.add(Le.ARROW_RIGHT);
zr.add(Le.ARROW_DOWN);
function It(n) {
  var e = n.key;
  if (tn.has(e))
    return e;
  var t = nn.get(n.keyCode);
  return t || Le.UNKNOWN;
}
const { applyPassive: _l } = Bd, { matches: Pf } = Pa;
function Mn(n, { ripple: e = !0, surface: t = !1, unbounded: r = !1, disabled: i = !1, color: a, active: s, rippleElement: d, eventTarget: l, activeTarget: c, addClass: u = (g) => n.classList.add(g), removeClass: h = (g) => n.classList.remove(g), addStyle: f = (g, p) => n.style.setProperty(g, p), initPromise: v = Promise.resolve() } = {}) {
  let g, p = new na(), C = ye("SMUI:addLayoutListener"), A, E = s, x = l, I = c;
  function T() {
    t ? (u("mdc-ripple-surface"), a === "primary" ? (u("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")) : a === "secondary" ? (h("smui-ripple-surface--primary"), u("smui-ripple-surface--secondary")) : (h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary"))) : (h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), g && E !== s && (E = s, s ? g.activate() : s === !1 && g.deactivate()), e && !g ? (g = new Rf({
      addClass: u,
      browserSupportsCssVars: () => _f(window),
      computeBoundingRect: () => (d || n).getBoundingClientRect(),
      containsEventTarget: (y) => n.contains(y),
      deregisterDocumentInteractionHandler: (y, b) => p.off(document.documentElement, y, b),
      deregisterInteractionHandler: (y, b) => p.off(l || n, y, b),
      deregisterResizeHandler: (y) => window.removeEventListener("resize", y),
      getWindowPageOffset: () => {
        var y, b;
        return {
          x: (y = window.pageXOffset) !== null && y !== void 0 ? y : window.scrollX,
          y: (b = window.pageYOffset) !== null && b !== void 0 ? b : window.scrollY
        };
      },
      isSurfaceActive: () => s ?? Pf(c || n, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!r,
      registerDocumentInteractionHandler: (y, b) => {
        const w = _l();
        p.on(document.documentElement, y, b, typeof w == "boolean" ? { capture: w } : w);
      },
      registerInteractionHandler: (y, b) => {
        const w = _l();
        p.on(l || n, y, b, typeof w == "boolean" ? { capture: w } : w);
      },
      registerResizeHandler: (y) => p.on(window, "resize", y),
      removeClass: h,
      updateCssVariable: f
    }), v.then(() => {
      g && (g.init(), g.setUnbounded(r));
    })) : g && !e && v.then(() => {
      g && (g.destroy(), g = void 0, p.clear());
    }), g && (x !== l || I !== c) && (x = l, I = c, g.destroy(), requestAnimationFrame(() => {
      g && (g.init(), g.setUnbounded(r));
    })), !e && r && u("mdc-ripple-upgraded--unbounded");
  }
  T(), C && (A = C(_));
  function _() {
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
        rippleElement: d,
        eventTarget: l,
        activeTarget: c,
        addClass: u,
        removeClass: h,
        addStyle: f,
        initPromise: v
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (b) => n.classList.add(b), removeClass: (b) => n.classList.remove(b), addStyle: (b, w) => n.style.setProperty(b, w), initPromise: Promise.resolve() }, y)), T();
    },
    destroy() {
      g && (g.destroy(), g = void 0, p.clear(), h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), A && A();
    }
  };
}
var Ff = /* @__PURE__ */ ft("<svg><!></svg>");
function Ds(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "tag", 3, "div"), i = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
  const a = /* @__PURE__ */ ie(() => [
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
  function d() {
    return s;
  }
  var l = { getElement: d }, c = re(), u = j(c);
  {
    var h = (v) => {
      var g = Ff();
      Ue(g, () => ({ ...i }));
      var p = B(g);
      _e(p, () => e.children ?? pe), we(g, (C) => s = C, () => s), Oe(g, (C, A) => te == null ? void 0 : te(C, A), t), S(v, g);
    }, f = (v) => {
      var g = re(), p = j(g);
      {
        var C = (E) => {
          var x = re(), I = j(x);
          uo(I, r, !1, (T, _) => {
            we(T, (y) => s = y, () => s), Oe(T, (y, b) => te == null ? void 0 : te(y, b), t), Ue(T, () => ({ ...i }));
          }), S(E, x);
        }, A = (E) => {
          var x = re(), I = j(x);
          uo(I, r, !1, (T, _) => {
            we(T, (w) => s = w, () => s), Oe(T, (w, D) => te == null ? void 0 : te(w, D), t), Ue(T, () => ({ ...i }));
            var y = re(), b = j(y);
            _e(b, () => e.children ?? pe), S(_, y);
          }), S(E, x);
        };
        $(
          p,
          (E) => {
            o(a) ? E(C) : E(A, !1);
          },
          !0
        );
      }
      S(v, g);
    };
    $(u, (v) => {
      r() === "svg" ? v(h) : v(f, !1);
    });
  }
  return S(n, c), Ee(l);
}
function ja(n, e) {
  Ae(e, !0);
  const [t, r] = Ai(), i = Bn(e.value);
  se(e.key, i), Se(() => {
    Qn(i, e.value);
  }), Gn(() => {
    i.set(void 0);
  });
  var a = re(), s = j(a);
  _e(s, () => e.children ?? pe), S(n, a), Ee(), r();
}
var kf = /* @__PURE__ */ z('<div class="mdc-button__touch"></div>'), Nf = /* @__PURE__ */ z('<div class="mdc-button__ripple"></div> <!><!>', 1);
function Hr(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "ripple", 3, !0), s = m(e, "color", 3, "primary"), d = m(e, "variant", 3, "text"), l = m(e, "touch", 3, !1), c = m(e, "action", 3, "close"), u = m(e, "defaultAction", 3, !1), h = m(e, "secondary", 3, !1), f = m(e, "component", 3, Ds), v = m(e, "tag", 19, () => e.href == null ? "button" : "a"), g = /* @__PURE__ */ ze(e, [
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
  ]), p, C = Ce({}), A = Ce({}), E = ye("SMUI:button:context");
  const x = /* @__PURE__ */ ie(() => E === "dialog:action" && c() != null ? { "data-mdc-dialog-action": c() } : { action: c() }), I = /* @__PURE__ */ ie(() => E === "dialog:action" && u() ? { "data-mdc-dialog-button-default": "" } : {}), T = /* @__PURE__ */ ie(() => E === "banner" ? {} : { secondary: h() });
  let _ = e.disabled;
  Se(() => {
    if (_ !== e.disabled) {
      if (p) {
        const U = G();
        "blur" in U && U.blur();
      }
      _ = g.disabled;
    }
  }), se("SMUI:label:context", "button"), se("SMUI:icon:context", "button");
  function y(U) {
    C[U] || (C[U] = !0);
  }
  function b(U) {
    (!(U in C) || C[U]) && (C[U] = !1);
  }
  function w(U, H) {
    A[U] != H && (H === "" || H == null ? delete A[U] : A[U] = H);
  }
  function D() {
    E === "banner" && Be(G(), h() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function G() {
    return p.getElement();
  }
  var M = { getElement: G }, N = re(), le = j(N);
  {
    let U = /* @__PURE__ */ ie(() => [
      [
        Mn,
        {
          ripple: a(),
          unbounded: !1,
          color: s(),
          disabled: !!e.disabled,
          addClass: y,
          removeClass: b,
          addStyle: w
        }
      ],
      ...t()
    ]), H = /* @__PURE__ */ ie(() => He({
      "mdc-button": !0,
      "mdc-button--raised": d() === "raised",
      "mdc-button--unelevated": d() === "unelevated",
      "mdc-button--outlined": d() === "outlined",
      "smui-button--color-secondary": s() === "secondary",
      "mdc-button--touch": l(),
      "mdc-card__action": E === "card:action",
      "mdc-card__action--button": E === "card:action",
      "mdc-dialog__button": E === "dialog:action",
      "mdc-top-app-bar__navigation-icon": E === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": E === "top-app-bar:action",
      "mdc-snackbar__action": E === "snackbar:actions",
      "mdc-banner__secondary-action": E === "banner" && h(),
      "mdc-banner__primary-action": E === "banner" && !h(),
      "mdc-tooltip__action": E === "tooltip:rich-actions",
      ...C,
      [r()]: !0
    })), k = /* @__PURE__ */ ie(() => Object.entries(A).map(([X, oe]) => `${X}: ${oe};`).concat([i()]).join(" "));
    Ma(le, f, (X, oe) => {
      we(
        oe(X, Ke(
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
              return o(k);
            }
          },
          () => o(x),
          () => o(I),
          () => o(T),
          {
            get href() {
              return e.href;
            }
          },
          () => g,
          {
            onclick: (R) => {
              var K;
              D(), (K = e.onclick) == null || K.call(e, R);
            },
            children: (R, K) => {
              var q = Nf(), ge = J(j(q), 2);
              _e(ge, () => e.children ?? pe);
              var ce = J(ge);
              {
                var Q = (fe) => {
                  var V = kf();
                  S(fe, V);
                };
                $(ce, (fe) => {
                  l() && fe(Q);
                });
              }
              S(R, q);
            },
            $$slots: { default: !0 }
          }
        )),
        (R) => p = R,
        () => p
      );
    });
  }
  return S(n, N), Ee(M);
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
var Hf = {
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
var Uf = (
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
        return Hf;
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
var Bf = (
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
var Gf = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, yl = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, Wf = {
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
var Vf = (
  /** @class */
  function(n) {
    mn(e, n);
    function e(t) {
      return n.call(this, Ze(Ze({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Gf;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Wf;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return yl;
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
      t > 0 && (t += yl.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(t), this.adapter.addClass(r);
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
var Ys = {
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
}, Zf = {
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
}, Cl = {
  LABEL_SCALE: 0.75
}, zf = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], jf = [
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
var Al = ["mousedown", "touchstart"], El = ["click", "keydown"], qf = (
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
        return Zf;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Ys;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Cl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var t = this.getNativeInput().type;
        return jf.indexOf(t) >= 0;
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
        for (var s = Nn(Al), d = s.next(); !d.done; d = s.next()) {
          var l = d.value;
          this.adapter.registerInputInteractionHandler(l, this.setPointerXOffset);
        }
      } catch (h) {
        t = { error: h };
      } finally {
        try {
          d && !d.done && (r = s.return) && r.call(s);
        } finally {
          if (t) throw t.error;
        }
      }
      try {
        for (var c = Nn(El), u = c.next(); !u.done; u = c.next()) {
          var l = u.value;
          this.adapter.registerTextFieldInteractionHandler(l, this.textFieldInteractionHandler);
        }
      } catch (h) {
        i = { error: h };
      } finally {
        try {
          u && !u.done && (a = c.return) && a.call(c);
        } finally {
          if (i) throw i.error;
        }
      }
      this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler), this.setcharacterCounter(this.getValue().length);
    }, e.prototype.destroy = function() {
      var t, r, i, a;
      this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var s = Nn(Al), d = s.next(); !d.done; d = s.next()) {
          var l = d.value;
          this.adapter.deregisterInputInteractionHandler(l, this.setPointerXOffset);
        }
      } catch (h) {
        t = { error: h };
      } finally {
        try {
          d && !d.done && (r = s.return) && r.call(s);
        } finally {
          if (t) throw t.error;
        }
      }
      try {
        for (var c = Nn(El), u = c.next(); !u.done; u = c.next()) {
          var l = u.value;
          this.adapter.deregisterTextFieldInteractionHandler(l, this.textFieldInteractionHandler);
        }
      } catch (h) {
        i = { error: h };
      } finally {
        try {
          u && !u.done && (a = c.return) && a.call(c);
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
        return zf.indexOf(i) > -1 ? (r.styleValidity(!0), r.adapter.setLabelRequired(r.getNativeInput().required), !0) : !1;
      }), t.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(t) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (t) {
          var r = this.adapter.getLabelWidth() * Cl.LABEL_SCALE;
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
        a && s ? this.adapter.setInputAttr(Ys.ARIA_DESCRIBEDBY, s) : this.adapter.removeInputAttr(Ys.ARIA_DESCRIBEDBY);
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
var Sl = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, Xf = {
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
var xl = ["click", "keydown"], Yf = (
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
        return Sl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Xf;
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
        for (var i = Nn(xl), a = i.next(); !a.done; a = i.next()) {
          var s = a.value;
          this.adapter.registerInteractionHandler(s, this.interactionHandler);
        }
      } catch (d) {
        t = { error: d };
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
        for (var i = Nn(xl), a = i.next(); !a.done; a = i.next()) {
          var s = a.value;
          this.adapter.deregisterInteractionHandler(s, this.interactionHandler);
        }
      } catch (d) {
        t = { error: d };
      } finally {
        try {
          a && !a.done && (r = i.return) && r.call(i);
        } finally {
          if (t) throw t.error;
        }
      }
    }, e.prototype.setDisabled = function(t) {
      this.savedTabIndex && (t ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", Sl.ICON_ROLE)));
    }, e.prototype.setAriaLabel = function(t) {
      this.adapter.setAttr("aria-label", t);
    }, e.prototype.setContent = function(t) {
      this.adapter.setContent(t);
    }, e.prototype.handleInteraction = function(t) {
      var r = t.key === "Enter" || t.keyCode === 13;
      (t.type === "click" || r) && (t.preventDefault(), this.adapter.notifyIconAction());
    }, e;
  }(pn)
), Kf = /* @__PURE__ */ z("<span><!></span>"), Jf = /* @__PURE__ */ z("<label><!></label>");
function ls(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "floatAbove", 15, !1), s = m(e, "required", 15, !1), d = m(e, "wrapped", 3, !1), l = /* @__PURE__ */ ze(e, [
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
  ]), c, u = /* @__PURE__ */ ue(void 0), h = new na(), f = Ce({}), v = Ce({}), g = ye("SMUI:generic:input:props") ?? {}, p = a();
  Se(() => {
    o(u) && p !== a() && (p = a(), o(u).float(a()));
  });
  let C = s();
  Se(() => {
    o(u) && C !== s() && (C = s(), o(u).setRequired(s()));
  });
  const A = ye("SMUI:floating-label:mount"), E = ye("SMUI:floating-label:unmount");
  it(() => {
    W(
      u,
      new Uf({
        addClass: x,
        removeClass: I,
        getWidth: () => {
          var K, q;
          const X = G(), oe = X.cloneNode(!0);
          (K = X.parentNode) == null || K.appendChild(oe), oe.classList.add("smui-floating-label--remove-transition"), oe.classList.add("smui-floating-label--force-size"), oe.classList.remove("mdc-floating-label--float-above");
          const R = oe.scrollWidth;
          return (q = X.parentNode) == null || q.removeChild(oe), R;
        },
        registerInteractionHandler: (X, oe) => h.on(G(), X, oe),
        deregisterInteractionHandler: (X, oe) => h.off(G(), X, oe)
      }),
      !0
    );
    const k = {
      get element() {
        return G();
      },
      addStyle: T,
      removeStyle: _
    };
    return A && A(k), o(u).init(), () => {
      var X;
      E && E(k), (X = o(u)) == null || X.destroy(), h.clear();
    };
  });
  function x(k) {
    f[k] || (f[k] = !0);
  }
  function I(k) {
    (!(k in f) || f[k]) && (f[k] = !1);
  }
  function T(k, X) {
    v[k] != X && (X === "" || X == null ? delete v[k] : v[k] = X);
  }
  function _(k) {
    k in v && delete v[k];
  }
  function y(k) {
    var X;
    (X = o(u)) == null || X.shake(k);
  }
  function b(k) {
    a(k);
  }
  function w(k) {
    s(k);
  }
  function D() {
    if (o(u) == null)
      throw new Error("Instance is undefined.");
    return o(u).getWidth();
  }
  function G() {
    return c;
  }
  var M = { shake: y, float: b, setRequired: w, getWidth: D, getElement: G }, N = re(), le = j(N);
  {
    var U = (k) => {
      var X = Kf();
      Ue(X, (R, K) => ({ class: R, style: K, ...l }), [
        () => He({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": s(),
          ...f,
          [r()]: !0
        }),
        () => Object.entries(v).map(([R, K]) => `${R}: ${K};`).concat([i()]).join(" ")
      ]);
      var oe = B(X);
      _e(oe, () => e.children ?? pe), we(X, (R) => c = R, () => c), Oe(X, (R, K) => te == null ? void 0 : te(R, K), t), S(k, X);
    }, H = (k) => {
      var X = Jf();
      Ue(
        X,
        (R, K) => ({
          class: R,
          style: K,
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
          () => Object.entries(v).map(([R, K]) => `${R}: ${K};`).concat([i()]).join(" ")
        ]
      );
      var oe = B(X);
      _e(oe, () => e.children ?? pe), we(X, (R) => c = R, () => c), Oe(X, (R, K) => te == null ? void 0 : te(R, K), t), S(k, X);
    };
    $(le, (k) => {
      d() ? k(U) : k(H, !1);
    });
  }
  return S(n, N), Ee(M);
}
var Qf = /* @__PURE__ */ z("<div></div>");
function Wd(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "active", 3, !1), s = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "active"
  ]), d, l = /* @__PURE__ */ ue(void 0), c = new na(), u = Ce({}), h = Ce({});
  it(() => (W(
    l,
    new Bf({
      addClass: v,
      removeClass: g,
      hasClass: f,
      setStyle: p,
      registerEventHandler: (_, y) => c.on(x(), _, y),
      deregisterEventHandler: (_, y) => c.off(x(), _, y)
    }),
    !0
  ), o(l).init(), () => {
    var _;
    (_ = o(l)) == null || _.destroy(), c.clear();
  }));
  function f(_) {
    return _ in u ? u[_] : x().classList.contains(_);
  }
  function v(_) {
    u[_] || (u[_] = !0);
  }
  function g(_) {
    (!(_ in u) || u[_]) && (u[_] = !1);
  }
  function p(_, y) {
    h[_] != y && (y === "" || y == null ? delete h[_] : h[_] = y);
  }
  function C() {
    var _;
    (_ = o(l)) == null || _.activate();
  }
  function A() {
    var _;
    (_ = o(l)) == null || _.deactivate();
  }
  function E(_) {
    var y;
    (y = o(l)) == null || y.setRippleCenter(_);
  }
  function x() {
    return d;
  }
  var I = { activate: C, deactivate: A, setRippleCenter: E, getElement: x }, T = Qf();
  return Ue(T, (_, y) => ({ class: _, style: y, ...s }), [
    () => He({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...u,
      [r()]: !0
    }),
    () => Object.entries(h).map(([_, y]) => `${_}: ${y};`).concat([i()]).join(" ")
  ]), we(T, (_) => d = _, () => d), Oe(T, (_, y) => te == null ? void 0 : te(_, y), t), S(n, T), Ee(I);
}
var $f = /* @__PURE__ */ z('<div class="mdc-notched-outline__notch"><!></div>'), eh = /* @__PURE__ */ z('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function Vd(n, e) {
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
  ]), d, l = /* @__PURE__ */ ue(void 0), c = /* @__PURE__ */ ue(void 0), u = Ce({}), h = Ce({}), f;
  Se(() => {
    o(c) !== f && (o(c) ? (o(c).addStyle("transition-duration", "0s"), v("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      o(c) && o(c).removeStyle("transition-duration");
    })) : g("mdc-notched-outline--upgraded"), f = o(c));
  }), se("SMUI:floating-label:mount", (b) => {
    W(c, b, !0);
  }), se("SMUI:floating-label:unmount", () => {
    W(c, void 0);
  }), it(() => (W(
    l,
    new Vf({
      addClass: v,
      removeClass: g,
      setNotchWidthProperty: (b) => p("width", b + "px"),
      removeNotchWidthProperty: () => C("width")
    }),
    !0
  ), o(l).init(), () => {
    var b;
    (b = o(l)) == null || b.destroy();
  }));
  function v(b) {
    u[b] || (u[b] = !0);
  }
  function g(b) {
    (!(b in u) || u[b]) && (u[b] = !1);
  }
  function p(b, w) {
    h[b] != w && (w === "" || w == null ? delete h[b] : h[b] = w);
  }
  function C(b) {
    b in h && delete h[b];
  }
  function A(b) {
    var w;
    (w = o(l)) == null || w.notch(b);
  }
  function E() {
    var b;
    (b = o(l)) == null || b.closeNotch();
  }
  function x() {
    return d;
  }
  var I = { notch: A, closeNotch: E, getElement: x }, T = eh();
  Ue(T, (b) => ({ class: b, ...s }), [
    () => He({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": i(),
      "mdc-notched-outline--no-label": a(),
      ...u,
      [r()]: !0
    })
  ]);
  var _ = J(B(T), 2);
  {
    var y = (b) => {
      var w = $f(), D = B(w);
      _e(D, () => e.children ?? pe), ve((G) => nt(w, G), [
        () => Object.entries(h).map(([G, M]) => `${G}: ${M};`).join(" ")
      ]), S(b, w);
    };
    $(_, (b) => {
      a() || b(y);
    });
  }
  return we(T, (b) => d = b, () => d), Oe(T, (b, w) => te == null ? void 0 : te(b, w), t), S(n, T), Ee(I);
}
function ra(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "component", 3, Ds), a = m(e, "tag", 3, "div"), s = m(e, "_smuiClass", 3, ""), d = m(e, "_smuiClassMap", 23, () => ({})), l = m(e, "_smuiContexts", 19, () => ({})), c = m(e, "_smuiProps", 19, () => ({})), u = /* @__PURE__ */ ze(e, [
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
  Object.entries(d()).forEach(([A, E]) => {
    const x = ye(E);
    x && "subscribe" in x && f.push(x.subscribe((I) => {
      d()[A] = I;
    }));
  });
  for (let A in l())
    l().hasOwnProperty(A) && se(A, l()[A]);
  Gn(() => {
    for (const A of f)
      A();
  });
  function v() {
    return h.getElement();
  }
  var g = { getElement: v }, p = re(), C = j(p);
  {
    let A = /* @__PURE__ */ ie(() => He({
      [s()]: !0,
      ...d(),
      [r()]: !0
    }));
    Ma(C, i, (E, x) => {
      we(
        x(E, Ke(
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
          () => u,
          {
            children: (I, T) => {
              var _ = re(), y = j(_);
              _e(y, () => e.children ?? pe), S(I, _);
            },
            $$slots: { default: !0 }
          }
        )),
        (I) => h = I,
        () => h
      );
    });
  }
  return S(n, p), Ee(g);
}
function th(n, e) {
  Ae(e, !0);
  let t = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return we(
    ra(n, Ke({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => t, {
      children: (s, d) => {
        var l = re(), c = j(l);
        _e(c, () => e.children ?? pe), S(s, l);
      },
      $$slots: { default: !0 }
    })),
    (s) => r = s,
    () => r
  ), Ee(a);
}
function nh(n, e) {
  Ae(e, !0);
  let t = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return we(
    ra(n, Ke(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => t,
      {
        children: (s, d) => {
          var l = re(), c = j(l);
          _e(c, () => e.children ?? pe), S(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
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
  return we(
    ra(n, Ke(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => t,
      {
        children: (s, d) => {
          var l = re(), c = j(l);
          _e(c, () => e.children ?? pe), S(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Ee(a);
}
var ih = /* @__PURE__ */ z("<input/>");
function ah(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "type", 3, "text"), a = m(e, "placeholder", 3, " "), s = m(e, "value", 15), d = m(e, "files", 15, null), l = m(e, "dirty", 15, !1), c = m(e, "invalid", 15, !1), u = m(e, "updateInvalid", 3, !0), h = m(e, "initialInvalid", 3, !1), f = m(e, "emptyValueNull", 19, () => s() === null), v = m(e, "emptyValueUndefined", 19, () => s() === void 0), g = /* @__PURE__ */ ze(e, [
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
  ]), p, C = Ce({}), A = Ce({});
  Se(() => {
    i() === "file" ? delete A.value : A.value = s() == null ? "" : s();
  }), it(() => {
    u() && h() && c(D().matches(":invalid"));
  });
  function E(U) {
    return U === "" ? Number.NaN : +U;
  }
  function x(U) {
    if (i() === "file") {
      d(U.currentTarget.files);
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
        s(E(U.currentTarget.value));
        break;
      default:
        s(U.currentTarget.value);
        break;
    }
  }
  function I(U) {
    (i() === "file" || i() === "range") && x(U), l(!0), u() && c(D().matches(":invalid"));
  }
  function T(U) {
    return U in C ? C[U] ?? null : D().getAttribute(U);
  }
  function _(U, H) {
    C[U] !== H && (C[U] = H);
  }
  function y(U) {
    (!(U in C) || C[U] != null) && (C[U] = void 0);
  }
  function b() {
    D().focus();
  }
  function w() {
    D().blur();
  }
  function D() {
    return p;
  }
  var G = { getAttr: T, addAttr: _, removeAttr: y, focus: b, blur: w, getElement: D }, M = ih(), N = (U) => {
    var H;
    i() !== "file" && x(U), (H = e.oninput) == null || H.call(e, U);
  }, le = (U) => {
    var H;
    I(U), (H = e.onchange) == null || H.call(e, U);
  };
  return Ue(
    M,
    (U) => ({
      class: U,
      type: i(),
      placeholder: a(),
      ...A,
      ...C,
      ...g,
      oninput: N,
      onchange: le
    }),
    [
      () => He({ "mdc-text-field__input": !0, [r()]: !0 })
    ],
    void 0,
    void 0,
    !0
  ), we(M, (U) => p = U, () => p), Oe(M, (U, H) => te == null ? void 0 : te(U, H), t), S(n, M), Ee(G);
}
var sh = /* @__PURE__ */ z("<textarea></textarea>");
function oh(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "value", 15, ""), s = m(e, "dirty", 15, !1), d = m(e, "invalid", 15, !1), l = m(e, "updateInvalid", 3, !0), c = m(e, "initialInvalid", 3, !1), u = m(e, "resizable", 3, !0), h = /* @__PURE__ */ ze(e, [
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
    l() && c() && d(I().matches(":invalid"));
  });
  function g() {
    s(!0), l() && d(I().matches(":invalid"));
  }
  function p(b) {
    return b in v ? v[b] ?? null : I().getAttribute(b);
  }
  function C(b, w) {
    v[b] !== w && (v[b] = w);
  }
  function A(b) {
    (!(b in v) || v[b] != null) && (v[b] = void 0);
  }
  function E() {
    I().focus();
  }
  function x() {
    I().blur();
  }
  function I() {
    return f;
  }
  var T = { getAttr: p, addAttr: C, removeAttr: A, focus: E, blur: x, getElement: I }, _ = sh(), y = (b) => {
    var w;
    g(), (w = e.onchange) == null || w.call(e, b);
  };
  return Ue(
    _,
    (b) => ({
      class: b,
      style: `${u() ? "" : "resize: none; "}${i()}`,
      ...v,
      ...h,
      onchange: y
    }),
    [
      () => He({ "mdc-text-field__input": !0, [r()]: !0 })
    ]
  ), we(_, (b) => f = b, () => f), Oe(_, (b, w) => te == null ? void 0 : te(b, w), t), Oa(() => vf(_, a)), S(n, _), Ee(T);
}
var lh = /* @__PURE__ */ z('<span class="mdc-text-field__ripple"></span>'), dh = /* @__PURE__ */ z("<!> <!>", 1), uh = /* @__PURE__ */ z("<span><!> <!></span>"), ch = /* @__PURE__ */ z("<!> <!> <!>", 1), fh = /* @__PURE__ */ z("<label><!> <!> <!> <!> <!> <!> <!></label>"), hh = /* @__PURE__ */ z("<div><!> <!> <!> <!> <!></div>"), vh = /* @__PURE__ */ z("<!> <!>", 1);
function ds(n, e) {
  Ae(e, !0);
  const { applyPassive: t } = Bd;
  let r = () => {
  };
  function i(O) {
    return O === r;
  }
  let a = m(e, "use", 19, () => []), s = m(e, "class", 3, ""), d = m(e, "style", 3, ""), l = m(e, "ripple", 3, !0), c = m(e, "disabled", 3, !1), u = m(e, "required", 3, !1), h = m(e, "textarea", 3, !1), f = m(e, "variant", 19, () => h() ? "outlined" : "standard"), v = m(e, "noLabel", 3, !1), g = m(e, "type", 3, "text"), p = m(e, "value", 15), C = m(e, "files", 15, r), A = m(e, "invalid", 15, r), E = m(e, "updateInvalid", 19, () => i(A())), x = m(e, "initialInvalid", 3, !1), I = m(e, "dirty", 15, !1), T = m(e, "validateOnValueChange", 19, E), _ = m(e, "useNativeValidation", 19, E), y = m(e, "withLeadingIcon", 3, r), b = m(e, "withTrailingIcon", 3, r), w = m(e, "input", 7), D = m(e, "floatingLabel", 7), G = m(e, "lineRipple", 7), M = m(e, "notchedOutline", 7), N = /* @__PURE__ */ ze(e, [
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
  const le = p() !== void 0 || p() === void 0 && e.input$emptyValueUndefined || !i(C());
  i(C()) && C(null), i(A()) && A(!1);
  let U, H = /* @__PURE__ */ ue(void 0), k = new na(), X = Ce({}), oe = Ce({}), R = /* @__PURE__ */ ue(void 0), K = /* @__PURE__ */ ue(!1), q = /* @__PURE__ */ ue(Ce(x())), ge = ye("SMUI:addLayoutListener"), ce, Q, fe = new Promise((O) => Q = O), V, de, ee, Ie;
  const be = /* @__PURE__ */ ie(() => w() && w().getElement());
  Se(() => {
    (I() || o(q) || !E()) && o(H) && o(H).isValid() !== !A() && (E() ? A(!o(H).isValid()) : o(H).setValid(!A()));
  }), Se(() => {
    o(H) && o(H).getValidateOnValueChange() !== T() && o(H).setValidateOnValueChange(i(T()) ? !1 : T());
  }), Se(() => {
    o(H) && o(H).setUseNativeValidation(i(_()) ? !0 : _());
  }), Se(() => {
    o(H) && o(H).setDisabled(c());
  });
  let Ge = p();
  Se(() => {
    if (o(H) && le && Ge !== p()) {
      Ge = p();
      const O = `${p() == null ? "" : p()}`;
      o(H).getValue() !== O && o(H).setValue(O);
    }
  }), ge && (ce = ge(P)), se("SMUI:textfield:leading-icon:mount", (O) => {
    V = O;
  }), se("SMUI:textfield:leading-icon:unmount", () => {
    V = void 0;
  }), se("SMUI:textfield:trailing-icon:mount", (O) => {
    de = O;
  }), se("SMUI:textfield:trailing-icon:unmount", () => {
    de = void 0;
  }), se("SMUI:textfield:helper-text:id", (O) => {
    W(R, O, !0);
  }), se("SMUI:textfield:helper-text:mount", (O) => {
    ee = O;
  }), se("SMUI:textfield:helper-text:unmount", () => {
    W(R, void 0), ee = void 0;
  }), se("SMUI:textfield:character-counter:mount", (O) => {
    Ie = O;
  }), se("SMUI:textfield:character-counter:unmount", () => {
    Ie = void 0;
  }), it(() => {
    var O;
    if (W(
      H,
      new qf(
        {
          // getRootAdapterMethods_
          addClass: je,
          removeClass: Re,
          hasClass: et,
          registerTextFieldInteractionHandler: (Y, De) => k.on(Z(), Y, De),
          deregisterTextFieldInteractionHandler: (Y, De) => k.off(Z(), Y, De),
          registerValidationAttributeChangeHandler: (Y) => {
            const De = (Nt) => Nt.map((rn) => rn.attributeName).filter((rn) => rn), st = new MutationObserver((Nt) => {
              _() && Y(De(Nt));
            }), mt = { attributes: !0 };
            return w() && st.observe(w().getElement(), mt), st;
          },
          deregisterValidationAttributeChangeHandler: (Y) => {
            Y.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var Y;
            return ((Y = w()) == null ? void 0 : Y.getElement()) ?? null;
          },
          setInputAttr: (Y, De) => {
            var st;
            (st = w()) == null || st.addAttr(Y, De);
          },
          removeInputAttr: (Y) => {
            var De;
            (De = w()) == null || De.removeAttr(Y);
          },
          isFocused: () => {
            var Y;
            return document.activeElement === ((Y = w()) == null ? void 0 : Y.getElement());
          },
          registerInputInteractionHandler: (Y, De) => {
            var mt;
            const st = (mt = w()) == null ? void 0 : mt.getElement();
            if (st) {
              const Nt = t();
              k.on(st, Y, De, typeof Nt == "boolean" ? { capture: Nt } : Nt);
            }
          },
          deregisterInputInteractionHandler: (Y, De) => {
            var mt;
            const st = (mt = w()) == null ? void 0 : mt.getElement();
            st && k.off(st, Y, De);
          },
          // getLabelAdapterMethods_
          floatLabel: (Y) => D() && D().float(Y),
          getLabelWidth: () => D() ? D().getWidth() : 0,
          hasLabel: () => !!D(),
          shakeLabel: (Y) => D() && D().shake(Y),
          setLabelRequired: (Y) => D() && D().setRequired(Y),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => G() && G().activate(),
          deactivateLineRipple: () => G() && G().deactivate(),
          setLineRippleTransformOrigin: (Y) => G() && G().setRippleCenter(Y),
          // getOutlineAdapterMethods_
          closeOutline: () => M() && M().closeNotch(),
          hasOutline: () => !!M(),
          notchOutline: (Y) => M() && M().notch(Y)
        },
        {
          get helperText() {
            return ee;
          },
          get characterCounter() {
            return Ie;
          },
          get leadingIcon() {
            return V;
          },
          get trailingIcon() {
            return de;
          }
        }
      ),
      !0
    ), le) {
      if (w() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (O = o(H)) == null || O.init();
    } else
      xd().then(() => {
        var Y;
        if (w() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (Y = o(H)) == null || Y.init();
      });
    return Q(), () => {
      var Y;
      (Y = o(H)) == null || Y.destroy(), k.clear();
    };
  }), Gn(() => {
    ce && ce();
  });
  function et(O) {
    return O in X ? X[O] ?? null : Z().classList.contains(O);
  }
  function je(O) {
    X[O] || (X[O] = !0);
  }
  function Re(O) {
    (!(O in X) || X[O]) && (X[O] = !1);
  }
  function at(O, Y) {
    oe[O] != Y && (Y === "" || Y == null ? delete oe[O] : oe[O] = Y);
  }
  function Ft() {
    var O;
    (O = w()) == null || O.focus();
  }
  function kt() {
    var O;
    (O = w()) == null || O.blur();
  }
  function P() {
    if (o(H)) {
      const O = o(H).shouldFloat;
      o(H).notchOutline(O);
    }
  }
  function Z() {
    return U;
  }
  var ae = { focus: Ft, blur: kt, layout: P, getElement: Z }, xe = vh(), ut = j(xe);
  {
    var qt = (O) => {
      var Y = fh();
      Ue(Y, (Ne, Je, qe) => ({ class: Ne, style: Je, for: void 0, ...qe }), [
        () => He({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": c(),
          "mdc-text-field--textarea": h(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !h(),
          "mdc-text-field--no-label": v() || e.label == null,
          "mdc-text-field--label-floating": o(K) || p() != null && p() !== "",
          "mdc-text-field--with-leading-icon": i(y()) ? e.leadingIcon : y(),
          "mdc-text-field--with-trailing-icon": i(b()) ? e.trailingIcon : b(),
          "mdc-text-field--with-internal-counter": h() && e.internalCounter,
          "mdc-text-field--invalid": A(),
          ...X,
          [s()]: !0
        }),
        () => Object.entries(oe).map(([Ne, Je]) => `${Ne}: ${Je};`).concat([d()]).join(" "),
        () => Ca(N, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var De = B(Y);
      {
        var st = (Ne) => {
          var Je = dh(), qe = j(Je);
          {
            var Ut = (bt) => {
              var Lt = lh();
              S(bt, Lt);
            };
            $(qe, (bt) => {
              f() === "filled" && bt(Ut);
            });
          }
          var Rn = J(qe, 2);
          {
            var Qe = (bt) => {
              {
                let Lt = /* @__PURE__ */ ie(() => o(K) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), Ve = /* @__PURE__ */ ie(() => lt(N, "label$"));
                we(
                  ls(bt, Ke(
                    {
                      get floatAbove() {
                        return o(Lt);
                      },
                      get required() {
                        return u();
                      },
                      wrapped: !0
                    },
                    () => o(Ve),
                    {
                      children: (Rt, rr) => {
                        var In = re(), _t = j(In);
                        {
                          var Bt = (Xt) => {
                          }, bn = (Xt) => {
                            var jr = re(), _n = j(jr);
                            {
                              var yr = (yn) => {
                                var ir = dt();
                                ve(() => Pe(ir, e.label)), S(yn, ir);
                              }, ia = (yn) => {
                                var ir = re(), Wn = j(ir);
                                _e(Wn, () => e.label), S(yn, ir);
                              };
                              $(
                                _n,
                                (yn) => {
                                  typeof e.label == "string" ? yn(yr) : yn(ia, !1);
                                },
                                !0
                              );
                            }
                            S(Xt, jr);
                          };
                          $(_t, (Xt) => {
                            e.label == null ? Xt(Bt) : Xt(bn, !1);
                          });
                        }
                        S(Rt, In);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (Rt) => D(Rt),
                  () => D()
                );
              }
            };
            $(Rn, (bt) => {
              !v() && e.label != null && bt(Qe);
            });
          }
          S(Ne, Je);
        };
        $(De, (Ne) => {
          !h() && f() !== "outlined" && Ne(st);
        });
      }
      var mt = J(De, 2);
      {
        var Nt = (Ne) => {
          {
            let Je = /* @__PURE__ */ ie(() => v() || e.label == null), qe = /* @__PURE__ */ ie(() => lt(N, "outline$"));
            we(
              Vd(Ne, Ke(
                {
                  get noLabel() {
                    return o(Je);
                  }
                },
                () => o(qe),
                {
                  children: (Ut, Rn) => {
                    var Qe = re(), bt = j(Qe);
                    {
                      var Lt = (Ve) => {
                        {
                          let Rt = /* @__PURE__ */ ie(() => o(K) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), rr = /* @__PURE__ */ ie(() => lt(N, "label$"));
                          we(
                            ls(Ve, Ke(
                              {
                                get floatAbove() {
                                  return o(Rt);
                                },
                                get required() {
                                  return u();
                                },
                                wrapped: !0
                              },
                              () => o(rr),
                              {
                                children: (In, _t) => {
                                  var Bt = re(), bn = j(Bt);
                                  {
                                    var Xt = (_n) => {
                                    }, jr = (_n) => {
                                      var yr = re(), ia = j(yr);
                                      {
                                        var yn = (Wn) => {
                                          var qr = dt();
                                          ve(() => Pe(qr, e.label)), S(Wn, qr);
                                        }, ir = (Wn) => {
                                          var qr = re(), Us = j(qr);
                                          _e(Us, () => e.label), S(Wn, qr);
                                        };
                                        $(
                                          ia,
                                          (Wn) => {
                                            typeof e.label == "string" ? Wn(yn) : Wn(ir, !1);
                                          },
                                          !0
                                        );
                                      }
                                      S(_n, yr);
                                    };
                                    $(bn, (_n) => {
                                      e.label == null ? _n(Xt) : _n(jr, !1);
                                    });
                                  }
                                  S(In, Bt);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (In) => D(In),
                            () => D()
                          );
                        }
                      };
                      $(bt, (Ve) => {
                        !v() && e.label != null && Ve(Lt);
                      });
                    }
                    S(Ut, Qe);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (Ut) => M(Ut),
              () => M()
            );
          }
        };
        $(mt, (Ne) => {
          (h() || f() === "outlined") && Ne(Nt);
        });
      }
      var rn = J(mt, 2);
      ja(rn, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (Ne, Je) => {
          var qe = re(), Ut = j(qe);
          _e(Ut, () => e.leadingIcon ?? pe), S(Ne, qe);
        },
        $$slots: { default: !0 }
      });
      var Ei = J(rn, 2);
      _e(Ei, () => e.children ?? pe);
      var ct = J(Ei, 2);
      {
        var Ht = (Ne) => {
          var Je = uh(), qe = B(Je);
          {
            let Rn = /* @__PURE__ */ ie(() => lt(N, "input$"));
            we(
              oh(qe, Ke(
                {
                  get disabled() {
                    return c();
                  },
                  get required() {
                    return u();
                  },
                  get updateInvalid() {
                    return E();
                  },
                  get initialInvalid() {
                    return o(q);
                  },
                  get "aria-controls"() {
                    return o(R);
                  },
                  get "aria-describedby"() {
                    return o(R);
                  }
                },
                () => o(Rn),
                {
                  onblur: (Qe) => {
                    var bt;
                    W(K, !1), W(q, !0), Be(Z(), "blur", Qe), (bt = e.input$onblur) == null || bt.call(e, Qe);
                  },
                  onfocus: (Qe) => {
                    var bt;
                    W(K, !0), Be(Z(), "focus", Qe), (bt = e.input$onfocus) == null || bt.call(e, Qe);
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
                    return A();
                  },
                  set invalid(Qe) {
                    A(Qe);
                  }
                }
              )),
              (Qe) => w(Qe),
              () => w()
            );
          }
          var Ut = J(qe, 2);
          _e(Ut, () => e.internalCounter ?? pe), ve((Rn) => pr(Je, 1, Rn), [
            () => Md(He({
              "mdc-text-field__resizer": !("input$resizable" in N) || e.input$resizable
            }))
          ]), S(Ne, Je);
        }, an = (Ne) => {
          var Je = ch(), qe = j(Je);
          {
            var Ut = (Lt) => {
              var Ve = re(), Rt = j(Ve);
              {
                var rr = (_t) => {
                  nh(_t, {
                    children: (Bt, bn) => {
                      var Xt = dt();
                      ve(() => Pe(Xt, e.prefix)), S(Bt, Xt);
                    },
                    $$slots: { default: !0 }
                  });
                }, In = (_t) => {
                  var Bt = re(), bn = j(Bt);
                  _e(bn, () => e.prefix ?? pe), S(_t, Bt);
                };
                $(Rt, (_t) => {
                  typeof e.prefix == "string" ? _t(rr) : _t(In, !1);
                });
              }
              S(Lt, Ve);
            };
            $(qe, (Lt) => {
              e.prefix != null && Lt(Ut);
            });
          }
          var Rn = J(qe, 2);
          {
            let Lt = /* @__PURE__ */ ie(() => lt(N, "input$"));
            we(
              ah(Rn, Ke(
                {
                  get type() {
                    return g();
                  },
                  get disabled() {
                    return c();
                  },
                  get required() {
                    return u();
                  },
                  get updateInvalid() {
                    return E();
                  },
                  get initialInvalid() {
                    return o(q);
                  },
                  get "aria-controls"() {
                    return o(R);
                  },
                  get "aria-describedby"() {
                    return o(R);
                  }
                },
                () => v() && e.label != null && typeof e.label == "string" ? { placeholder: e.label } : {},
                () => o(Lt),
                {
                  onblur: (Ve) => {
                    var Rt;
                    W(K, !1), W(q, !0), Be(Z(), "blur", Ve), (Rt = e.input$onblur) == null || Rt.call(e, Ve);
                  },
                  onfocus: (Ve) => {
                    var Rt;
                    W(K, !0), Be(Z(), "focus", Ve), (Rt = e.input$onfocus) == null || Rt.call(e, Ve);
                  },
                  get value() {
                    return p();
                  },
                  set value(Ve) {
                    p(Ve);
                  },
                  get files() {
                    return C();
                  },
                  set files(Ve) {
                    C(Ve);
                  },
                  get dirty() {
                    return I();
                  },
                  set dirty(Ve) {
                    I(Ve);
                  },
                  get invalid() {
                    return A();
                  },
                  set invalid(Ve) {
                    A(Ve);
                  }
                }
              )),
              (Ve) => w(Ve),
              () => w()
            );
          }
          var Qe = J(Rn, 2);
          {
            var bt = (Lt) => {
              var Ve = re(), Rt = j(Ve);
              {
                var rr = (_t) => {
                  rh(_t, {
                    children: (Bt, bn) => {
                      var Xt = dt();
                      ve(() => Pe(Xt, e.suffix)), S(Bt, Xt);
                    },
                    $$slots: { default: !0 }
                  });
                }, In = (_t) => {
                  var Bt = re(), bn = j(Bt);
                  _e(bn, () => e.suffix ?? pe), S(_t, Bt);
                };
                $(Rt, (_t) => {
                  typeof e.suffix == "string" ? _t(rr) : _t(In, !1);
                });
              }
              S(Lt, Ve);
            };
            $(Qe, (Lt) => {
              e.suffix != null && Lt(bt);
            });
          }
          S(Ne, Je);
        };
        $(ct, (Ne) => {
          h() && typeof p() == "string" ? Ne(Ht) : Ne(an, !1);
        });
      }
      var br = J(ct, 2);
      ja(br, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (Ne, Je) => {
          var qe = re(), Ut = j(qe);
          _e(Ut, () => e.trailingIcon ?? pe), S(Ne, qe);
        },
        $$slots: { default: !0 }
      });
      var Ua = J(br, 2);
      {
        var _r = (Ne) => {
          {
            let Je = /* @__PURE__ */ ie(() => lt(N, "ripple$"));
            we(Wd(Ne, Ke(() => o(Je))), (qe) => G(qe), () => G());
          }
        };
        $(Ua, (Ne) => {
          !h() && f() !== "outlined" && l() && Ne(_r);
        });
      }
      we(Y, (Ne) => U = Ne, () => U), Oe(Y, (Ne, Je) => Mn == null ? void 0 : Mn(Ne, Je), () => ({
        ripple: !h() && f() === "filled",
        unbounded: !1,
        addClass: je,
        removeClass: Re,
        addStyle: at,
        eventTarget: o(be),
        activeTarget: o(be),
        initPromise: fe
      })), Oe(Y, (Ne, Je) => te == null ? void 0 : te(Ne, Je), a), S(O, Y);
    }, Ln = (O) => {
      var Y = hh();
      Ue(Y, (ct, Ht, an) => ({ class: ct, style: Ht, ...an }), [
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
          "mdc-text-field--invalid": A(),
          ...X,
          [s()]: !0
        }),
        () => Object.entries(oe).map(([ct, Ht]) => `${ct}: ${Ht};`).concat([d()]).join(" "),
        () => Ca(N, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var De = B(Y);
      {
        var st = (ct) => {
          var Ht = re(), an = j(Ht);
          _e(an, () => e.label ?? pe), S(ct, Ht);
        };
        $(De, (ct) => {
          typeof e.label != "string" && ct(st);
        });
      }
      var mt = J(De, 2);
      ja(mt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (ct, Ht) => {
          var an = re(), br = j(an);
          _e(br, () => e.leadingIcon ?? pe), S(ct, an);
        },
        $$slots: { default: !0 }
      });
      var Nt = J(mt, 2);
      _e(Nt, () => e.children ?? pe);
      var rn = J(Nt, 2);
      ja(rn, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (ct, Ht) => {
          var an = re(), br = j(an);
          _e(br, () => e.trailingIcon ?? pe), S(ct, an);
        },
        $$slots: { default: !0 }
      });
      var Ei = J(rn, 2);
      _e(Ei, () => e.line ?? pe), we(Y, (ct) => U = ct, () => U), Oe(Y, (ct, Ht) => Mn == null ? void 0 : Mn(ct, Ht), () => ({
        ripple: l(),
        unbounded: !1,
        addClass: je,
        removeClass: Re,
        addStyle: at
      })), Oe(Y, (ct, Ht) => te == null ? void 0 : te(ct, Ht), a), S(O, Y);
    };
    $(ut, (O) => {
      le ? O(qt) : O(Ln, !1);
    });
  }
  var me = J(ut, 2);
  {
    var F = (O) => {
      {
        let Y = /* @__PURE__ */ ie(() => lt(N, "helperLine$"));
        th(O, Ke(() => o(Y), {
          children: (De, st) => {
            var mt = re(), Nt = j(mt);
            _e(Nt, () => e.helper ?? pe), S(De, mt);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    $(me, (O) => {
      e.helper && O(F);
    });
  }
  return S(n, xe), Ee(ae);
}
var gh = /* @__PURE__ */ z("<i><!></i>");
function mh(n, e) {
  Ae(e, !0);
  const t = () => pi(g, "$leadingStore", r), [r, i] = Ai();
  let a = m(e, "use", 19, () => []), s = m(e, "class", 3, ""), d = m(e, "tabindex", 19, () => e.role === "button" ? 0 : -1), l = m(e, "disabled", 3, !1), c = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "role",
    "tabindex",
    "disabled",
    "children"
  ]), u, h = /* @__PURE__ */ ue(void 0), f = new na(), v = Ce({});
  const g = ye("SMUI:textfield:icon:leading"), p = t();
  let C = /* @__PURE__ */ ue(void 0);
  const A = /* @__PURE__ */ ie(() => ({ role: e.role, tabindex: d() })), E = ye("SMUI:textfield:leading-icon:mount"), x = ye("SMUI:textfield:leading-icon:unmount"), I = ye("SMUI:textfield:trailing-icon:mount"), T = ye("SMUI:textfield:trailing-icon:unmount");
  it(() => (W(
    h,
    new Yf({
      getAttr: _,
      setAttr: y,
      removeAttr: b,
      setContent: (H) => {
        W(C, H, !0);
      },
      registerInteractionHandler: (H, k) => f.on(w(), H, k),
      deregisterInteractionHandler: (H, k) => f.off(w(), H, k),
      notifyIconAction: () => Be(w(), "SMUITextFieldIcon")
    }),
    !0
  ), p ? E && E(o(h)) : I && I(o(h)), o(h).init(), () => {
    var H;
    o(h) && (p ? x && x(o(h)) : T && T(o(h))), (H = o(h)) == null || H.destroy(), f.clear();
  }));
  function _(H) {
    return H in v ? v[H] ?? null : w().getAttribute(H);
  }
  function y(H, k) {
    v[H] !== k && (v[H] = k);
  }
  function b(H) {
    (!(H in v) || v[H] != null) && (v[H] = void 0);
  }
  function w() {
    return u;
  }
  var D = { getElement: w }, G = gh();
  Ue(
    G,
    (H) => ({
      class: H,
      "aria-hidden": d() === -1 ? "true" : "false",
      "aria-disabled": e.role === "button" ? l() ? "true" : "false" : void 0,
      ...o(A),
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
  var M = B(G);
  {
    var N = (H) => {
      var k = re(), X = j(k);
      _e(X, () => e.children ?? pe), S(H, k);
    }, le = (H) => {
      var k = dt();
      ve(() => Pe(k, o(C))), S(H, k);
    };
    $(M, (H) => {
      o(C) == null ? H(N) : H(le, !1);
    });
  }
  we(G, (H) => u = H, () => u), Oe(G, (H, k) => te == null ? void 0 : te(H, k), a), S(n, G);
  var U = Ee(D);
  return i(), U;
}
function Zd(n, e) {
  Ae(e, !0);
  let t = m(e, "placeholder", 3, ""), r = m(e, "label", 3, ""), i = m(e, "icon", 3, ""), a = m(e, "value", 15, ""), s = m(e, "variant", 3, "standard"), d = m(e, "styles", 3, ""), l = m(e, "required", 3, !1);
  var c = re(), u = j(c);
  {
    var h = (v) => {
      {
        const g = (C) => {
          mh(C, {
            class: "material-icons",
            children: (A, E) => {
              var x = dt();
              ve(() => Pe(x, i())), S(A, x);
            },
            $$slots: { default: !0 }
          });
        };
        let p = /* @__PURE__ */ ie(() => `width: 100%; ${d()}`);
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
          set value(C) {
            a(C);
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
    $(u, (v) => {
      i() ? v(h) : v(f, !1);
    });
  }
  S(n, c), Ee();
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
var ph = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, Ih = {
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
}, vt;
(function(n) {
  n[n.BOTTOM = 1] = "BOTTOM", n[n.CENTER = 2] = "CENTER", n[n.RIGHT = 4] = "RIGHT", n[n.FLIP_RTL = 8] = "FLIP_RTL";
})(vt || (vt = {}));
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
var bh = ["input", "button", "textarea", "select"], Cn = function(n) {
  var e = n.target;
  if (e) {
    var t = ("" + e.tagName).toLowerCase();
    bh.indexOf(t) === -1 && n.preventDefault();
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
function _h() {
  var n = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return n;
}
function yh(n, e) {
  for (var t = /* @__PURE__ */ new Map(), r = 0; r < n; r++) {
    var i = e(r).trim();
    if (i) {
      var a = i[0].toLowerCase();
      t.has(a) || t.set(a, []), t.get(a).push({ text: i.toLowerCase(), index: r });
    }
  }
  return t.forEach(function(s) {
    s.sort(function(d, l) {
      return d.index - l.index;
    });
  }), t;
}
function vo(n, e) {
  var t = n.nextChar, r = n.focusItemAtIndex, i = n.sortedIndexByFirstChar, a = n.focusedItemIndex, s = n.skipFocus, d = n.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    jd(e);
  }, ht.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + t;
  var l;
  return e.typeaheadBuffer.length === 1 ? l = Ch(i, a, d, e) : l = Ah(i, d, e), l !== -1 && !s && r(l), l;
}
function Ch(n, e, t, r) {
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
  var d = -1, l;
  for (l = 0; l < a.length; l++)
    if (!t(a[l].index)) {
      d = l;
      break;
    }
  for (; l < a.length; l++)
    if (a[l].index > e && !t(a[l].index)) {
      d = l;
      break;
    }
  return d !== -1 ? (r.sortedIndexCursor = d, a[r.sortedIndexCursor].index) : -1;
}
function Ah(n, e, t) {
  var r = t.typeaheadBuffer[0], i = n.get(r);
  if (!i)
    return -1;
  var a = i[t.sortedIndexCursor];
  if (a.text.lastIndexOf(t.typeaheadBuffer, 0) === 0 && !e(a.index))
    return a.index;
  for (var s = (t.sortedIndexCursor + 1) % i.length, d = -1; s !== t.sortedIndexCursor; ) {
    var l = i[s], c = l.text.lastIndexOf(t.typeaheadBuffer, 0) === 0, u = !e(l.index);
    if (c && u) {
      d = s;
      break;
    }
    s = (s + 1) % i.length;
  }
  return d !== -1 ? (t.sortedIndexCursor = d, i[t.sortedIndexCursor].index) : -1;
}
function zd(n) {
  return n.typeaheadBuffer.length > 0;
}
function jd(n) {
  n.typeaheadBuffer = "";
}
function wl(n, e) {
  var t = n.event, r = n.isTargetListItem, i = n.focusedItemIndex, a = n.focusItemAtIndex, s = n.sortedIndexByFirstChar, d = n.isItemAtIndexDisabled, l = It(t) === "ArrowLeft", c = It(t) === "ArrowUp", u = It(t) === "ArrowRight", h = It(t) === "ArrowDown", f = It(t) === "Home", v = It(t) === "End", g = It(t) === "Enter", p = It(t) === "Spacebar";
  if (t.altKey || t.ctrlKey || t.metaKey || l || c || u || h || f || v || g)
    return -1;
  var C = !p && t.key.length === 1;
  if (C) {
    Cn(t);
    var A = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: t.key.toLowerCase(),
      sortedIndexByFirstChar: s,
      skipFocus: !1,
      isItemAtIndexDisabled: d
    };
    return vo(A, e);
  }
  if (!p)
    return -1;
  r && Cn(t);
  var E = r && zd(e);
  if (E) {
    var A = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: " ",
      sortedIndexByFirstChar: s,
      skipFocus: !1,
      isItemAtIndexDisabled: d
    };
    return vo(A, e);
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
function Eh(n) {
  return n instanceof Array;
}
var Sh = ["Alt", "Control", "Meta", "Shift"];
function Tl(n) {
  var e = new Set(n ? Sh.filter(function(t) {
    return n.getModifierState(t);
  }) : []);
  return function(t) {
    return t.every(function(r) {
      return e.has(r);
    }) && t.length === e.size;
  };
}
var xh = (
  /** @class */
  function(n) {
    mn(e, n);
    function e(t) {
      var r = n.call(this, Ze(Ze({}, e.defaultAdapter), t)) || this;
      return r.wrapFocus = !1, r.isVertical = !0, r.isSingleSelectionList = !1, r.areDisabledItemsFocusable = !0, r.selectedIndex = ht.UNSET_INDEX, r.focusedItemIndex = ht.UNSET_INDEX, r.useActivatedClass = !1, r.useSelectedAttr = !1, r.ariaCurrentAttrValue = null, r.isCheckboxList = !1, r.isRadioList = !1, r.lastSelectedIndex = null, r.hasTypeahead = !1, r.typeaheadState = _h(), r.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), r;
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
        var r = this.adapter.listItemAtIndexHasClass(t, ke.LIST_ITEM_ACTIVATED_CLASS);
        r && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = t;
      }
    }, e.prototype.getSelectedIndexFromDOM = function() {
      for (var t = ht.UNSET_INDEX, r = this.adapter.getListItemCount(), i = 0; i < r; i++) {
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
      return this.hasTypeahead && zd(this.typeaheadState);
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
      var a = this, s, d = It(t) === "ArrowLeft", l = It(t) === "ArrowUp", c = It(t) === "ArrowRight", u = It(t) === "ArrowDown", h = It(t) === "Home", f = It(t) === "End", v = It(t) === "Enter", g = It(t) === "Spacebar", p = this.isVertical && u || !this.isVertical && c, C = this.isVertical && l || !this.isVertical && d, A = t.key === "A" || t.key === "a", E = Tl(t);
      if (this.adapter.isRootFocused()) {
        if ((C || f) && E([]))
          t.preventDefault(), this.focusLastElement();
        else if ((p || h) && E([]))
          t.preventDefault(), this.focusFirstElement();
        else if (C && E(["Shift"]) && this.isCheckboxList) {
          t.preventDefault();
          var x = this.focusLastElement();
          x !== -1 && this.setSelectedIndexOnAction(x, !1);
        } else if (p && E(["Shift"]) && this.isCheckboxList) {
          t.preventDefault();
          var x = this.focusFirstElement();
          x !== -1 && this.setSelectedIndexOnAction(x, !1);
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
          wl(I, this.typeaheadState);
        }
        return;
      }
      var T = this.adapter.getFocusedElementIndex();
      if (!(T === -1 && (T = i, T < 0))) {
        if (p && E([]))
          Cn(t), this.focusNextElement(T);
        else if (C && E([]))
          Cn(t), this.focusPrevElement(T);
        else if (p && E(["Shift"]) && this.isCheckboxList) {
          Cn(t);
          var x = this.focusNextElement(T);
          x !== -1 && this.setSelectedIndexOnAction(x, !1);
        } else if (C && E(["Shift"]) && this.isCheckboxList) {
          Cn(t);
          var x = this.focusPrevElement(T);
          x !== -1 && this.setSelectedIndexOnAction(x, !1);
        } else if (h && E([]))
          Cn(t), this.focusFirstElement();
        else if (f && E([]))
          Cn(t), this.focusLastElement();
        else if (h && E(["Control", "Shift"]) && this.isCheckboxList) {
          if (Cn(t), this.isIndexDisabled(T))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, T, T);
        } else if (f && E(["Control", "Shift"]) && this.isCheckboxList) {
          if (Cn(t), this.isIndexDisabled(T))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(T, this.adapter.getListItemCount() - 1, T);
        } else if (A && E(["Control"]) && this.isCheckboxList)
          t.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === ht.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((v || g) && E([])) {
          if (r) {
            var _ = t.target;
            if (_ && _.tagName === "A" && v || (Cn(t), this.isIndexDisabled(T)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(T, !1), this.adapter.notifyAction(T));
          }
        } else if ((v || g) && E(["Shift"]) && this.isCheckboxList) {
          var _ = t.target;
          if (_ && _.tagName === "A" && v || (Cn(t), this.isIndexDisabled(T)))
            return;
          this.isTypeaheadInProgress() || (this.toggleCheckboxRange((s = this.lastSelectedIndex) !== null && s !== void 0 ? s : T, T, T), this.adapter.notifyAction(T));
        }
        if (this.hasTypeahead) {
          var I = {
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
          wl(I, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(t, r, i) {
      var a, s = Tl(i);
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
      this.isIndexValid(t, !1) && (r ? (this.adapter.removeClassForElementIndex(t, ke.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(t, Er.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(t, ke.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(t, Er.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(t, r) {
      if (r === void 0 && (r = {}), !(this.selectedIndex === t && !r.forceUpdate)) {
        var i = ke.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (i = ke.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== ht.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, i), this.setAriaForSingleSelectionAtIndex(t), this.setTabindexAtIndex(t), t !== ht.UNSET_INDEX && this.adapter.addClassForElementIndex(t, i), this.selectedIndex = t, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([t]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(t) {
      this.selectedIndex === ht.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(t, Er.ARIA_CURRENT));
      var r = this.ariaCurrentAttrValue !== null, i = r ? Er.ARIA_CURRENT : Er.ARIA_SELECTED;
      if (this.selectedIndex !== ht.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), t !== ht.UNSET_INDEX) {
        var a = r ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(t, i, a);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? Er.ARIA_SELECTED : Er.ARIA_CHECKED;
    }, e.prototype.setRadioAtIndex = function(t, r) {
      r === void 0 && (r = {});
      var i = this.getSelectionAttribute();
      this.adapter.setCheckedCheckboxOrRadioAtIndex(t, !0), !(this.selectedIndex === t && !r.forceUpdate) && (this.selectedIndex !== ht.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), this.adapter.setAttributeForElementIndex(t, i, "true"), this.selectedIndex = t, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([t]));
    }, e.prototype.setCheckboxAtIndex = function(t, r) {
      r === void 0 && (r = {});
      for (var i = this.selectedIndex, a = r.isUserInteraction ? new Set(i === ht.UNSET_INDEX ? [] : i) : null, s = this.getSelectionAttribute(), d = [], l = 0; l < this.adapter.getListItemCount(); l++) {
        var c = a == null ? void 0 : a.has(l), u = t.indexOf(l) >= 0;
        u !== c && d.push(l), this.adapter.setCheckedCheckboxOrRadioAtIndex(l, u), this.adapter.setAttributeForElementIndex(l, s, u ? "true" : "false");
      }
      this.selectedIndex = t, r.isUserInteraction && d.length && this.adapter.notifySelectionChange(d);
    }, e.prototype.toggleCheckboxRange = function(t, r, i) {
      this.lastSelectedIndex = i;
      for (var a = new Set(this.selectedIndex === ht.UNSET_INDEX ? [] : this.selectedIndex), s = !(a != null && a.has(i)), d = ml([t, r].sort(), 2), l = d[0], c = d[1], u = this.getSelectionAttribute(), h = [], f = l; f <= c; f++)
        if (!this.isIndexDisabled(f)) {
          var v = a.has(f);
          s !== v && (h.push(f), this.adapter.setCheckedCheckboxOrRadioAtIndex(f, s), this.adapter.setAttributeForElementIndex(f, u, "" + s), s ? a.add(f) : a.delete(f));
        }
      h.length && (this.selectedIndex = Ef([], ml(a)), this.adapter.notifySelectionChange(h));
    }, e.prototype.setTabindexAtIndex = function(t) {
      this.focusedItemIndex === ht.UNSET_INDEX && t !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== t && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== t && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), t !== ht.UNSET_INDEX && this.adapter.setAttributeForElementIndex(t, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var t = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(t);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== ht.UNSET_INDEX ? this.selectedIndex : Eh(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(t, r) {
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
      var d = this.selectedIndex === ht.UNSET_INDEX ? [] : this.selectedIndex.slice();
      s ? d.push(t) : d = d.filter(function(l) {
        return l !== t;
      }), this.selectedIndex = d;
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
        focusItemAtIndex: function(d) {
          a.focusItemAtIndex(d);
        },
        focusedItemIndex: r || this.focusedItemIndex,
        nextChar: t,
        sortedIndexByFirstChar: this.sortedIndexByFirstChar,
        skipFocus: i,
        isItemAtIndexDisabled: function(d) {
          return a.isIndexDisabled(d);
        }
      };
      return vo(s, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return yh(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      jd(this.typeaheadState);
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
        return ph;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Ih;
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
      var r = this.getoriginCorner(), i = this.getMenuSurfaceMaxHeight(r), a = this.hasBit(r, vt.BOTTOM) ? "bottom" : "top", s = this.hasBit(r, vt.RIGHT) ? "right" : "left", d = this.getHorizontalOriginOffset(r), l = this.getVerticalOriginOffset(r), c = this.measurements, u = c.anchorSize, h = c.surfaceSize, f = (t = {}, t[s] = d, t[a] = l, t);
      u.width / h.width > ca.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (s = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(f), this.adapter.setTransformOrigin(s + " " + a), this.adapter.setPosition(f), this.adapter.setMaxHeight(i ? i + "px" : ""), this.hasBit(r, vt.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
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
      var t = this.originCorner, r = this.measurements, i = r.viewportDistance, a = r.anchorSize, s = r.surfaceSize, d = e.numbers.MARGIN_TO_EDGE, l = this.hasBit(this.anchorCorner, vt.BOTTOM), c, u;
      l ? (c = i.top - d + this.anchorMargin.bottom, u = i.bottom - d - this.anchorMargin.bottom) : (c = i.top - d + this.anchorMargin.top, u = i.bottom - d + a.height - this.anchorMargin.top);
      var h = u - s.height > 0;
      !h && c > u + this.openBottomBias && (t = this.setBit(t, vt.BOTTOM));
      var f = this.adapter.isRtl(), v = this.hasBit(this.anchorCorner, vt.FLIP_RTL), g = this.hasBit(this.anchorCorner, vt.RIGHT) || this.hasBit(t, vt.RIGHT), p = !1;
      f && v ? p = !g : p = g;
      var C, A;
      p ? (C = i.left + a.width + this.anchorMargin.right, A = i.right - this.anchorMargin.right) : (C = i.left + this.anchorMargin.left, A = i.right + a.width - this.anchorMargin.left);
      var E = C - s.width > 0, x = A - s.width > 0, I = this.hasBit(t, vt.FLIP_RTL) && this.hasBit(t, vt.RIGHT);
      return x && I && f || !E && I ? t = this.unsetBit(t, vt.RIGHT) : (E && p && f || E && !p && g || !x && C >= A) && (t = this.setBit(t, vt.RIGHT)), t;
    }, e.prototype.getMenuSurfaceMaxHeight = function(t) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var r = this.measurements.viewportDistance, i = 0, a = this.hasBit(t, vt.BOTTOM), s = this.hasBit(this.anchorCorner, vt.BOTTOM), d = e.numbers.MARGIN_TO_EDGE;
      return a ? (i = r.top + this.anchorMargin.top - d, s || (i += this.measurements.anchorSize.height)) : (i = r.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - d, s && (i -= this.measurements.anchorSize.height)), i;
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
      var r, i, a = this.measurements, s = a.windowScroll, d = a.viewportDistance, l = a.surfaceSize, c = a.viewportSize, u = Object.keys(t);
      try {
        for (var h = Nn(u), f = h.next(); !f.done; f = h.next()) {
          var v = f.value, g = t[v] || 0;
          if (this.isHorizontallyCenteredOnViewport && (v === "left" || v === "right")) {
            t[v] = (c.width - l.width) / 2;
            continue;
          }
          g += d[v], this.isFixedPosition || (v === "top" ? g += s.y : v === "bottom" ? g -= s.y : v === "left" ? g += s.x : g -= s.x), t[v] = g;
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
}, Ri = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected",
  SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
}, wh = {
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
var Th = (
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
        return Ri;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return wh;
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
        var a = this.adapter.getAttributeFromElementAtIndex(i, Ri.SKIP_RESTORE_FOCUS) === "true";
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
      r >= 0 && (this.adapter.removeAttributeFromElementAtIndex(r, Ri.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(r, Ni.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(t, Ni.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(t, Ri.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = t;
    }, e.prototype.setEnabled = function(t, r) {
      this.validatedIndex(t), r ? (this.adapter.removeClassFromElementAtIndex(t, ke.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(t, Ri.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(t, ke.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(t, Ri.ARIA_DISABLED_ATTR, "true"));
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
}, Ks = {
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
var Dh = (
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
        return Ks;
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
        var r = It(t) === Le.ENTER, i = It(t) === Le.SPACEBAR, a = It(t) === Le.ARROW_UP, s = It(t) === Le.ARROW_DOWN, d = t.ctrlKey || t.metaKey;
        if (!d && (!i && t.key && t.key.length === 1 || i && this.adapter.isTypeaheadInProgress())) {
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
        r && i ? this.adapter.setSelectAnchorAttr(Ks.ARIA_DESCRIBEDBY, i) : this.adapter.removeSelectAnchorAttr(Ks.ARIA_DESCRIBEDBY);
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
var Lh = (
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
function Oh(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "static", 3, !1), s = m(e, "anchor", 3, !0), d = m(e, "fixed", 3, !1), l = m(e, "open", 31, () => Ce(a())), c = m(e, "managed", 3, !1), u = m(e, "fullWidth", 3, !1), h = m(e, "quickOpen", 3, !1), f = m(e, "anchorElement", 15), v = m(e, "anchorMargin", 19, () => ({ top: 0, right: 0, bottom: 0, left: 0 })), g = m(e, "maxHeight", 3, 0), p = m(e, "horizontallyCenteredOnViewport", 3, !1), C = m(e, "openBottomBias", 3, 0), A = m(e, "neverRestoreFocus", 3, !1), E = /* @__PURE__ */ ze(e, [
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
  ]), x, I = /* @__PURE__ */ ue(void 0), T = Ce({}), _ = Ce({}), y = /* @__PURE__ */ ue(void 0);
  se("SMUI:list:role", "menu"), se("SMUI:list:item:role", "menuitem"), Se(() => {
    var V, de;
    x && s() && !((V = x.parentElement) != null && V.classList.contains("mdc-menu-surface--anchor")) && ((de = x.parentElement) == null || de.classList.add("mdc-menu-surface--anchor"), f(x.parentElement ?? void 0));
  }), Se(() => {
    o(I) && o(I).isOpen() !== l() && (l() ? o(I).open() : o(I).close());
  }), Se(() => {
    o(I) && o(I).setQuickOpen(h());
  }), Se(() => {
    o(I) && o(I).setFixedPosition(d());
  }), Se(() => {
    o(I) && o(I).setMaxHeight(g());
  }), Se(() => {
    o(I) && o(I).setIsHorizontallyCenteredOnViewport(p());
  });
  const b = hi;
  Se(() => {
    o(I) && e.anchorCorner != null && (typeof e.anchorCorner == "string" ? o(I).setAnchorCorner(b[e.anchorCorner]) : o(I).setAnchorCorner(e.anchorCorner));
  }), Se(() => {
    o(I) && o(I).setAnchorMargin(v());
  }), Se(() => {
    o(I) && o(I).setOpenBottomBias(C());
  });
  const w = ye("SMUI:menu-surface:mount"), D = ye("SMUI:menu-surface:unmount");
  it(() => {
    W(
      I,
      new qd({
        addClass: M,
        removeClass: N,
        hasClass: G,
        hasAnchor: () => !!f(),
        notifyClose: () => {
          c() || l(a()), l() || Be(q(), "SMUIMenuSurfaceClosed");
        },
        notifyClosing: () => {
          c() || l(a()), l() || Be(q(), "SMUIMenuSurfaceClosing");
        },
        notifyOpen: () => {
          c() || l(!0), l() && Be(q(), "SMUIMenuSurfaceOpened");
        },
        notifyOpening: () => {
          l() || Be(q(), "SMUIMenuSurfaceOpening");
        },
        isElementInContainer: (de) => q().contains(de),
        isRtl: () => getComputedStyle(q()).getPropertyValue("direction") === "rtl",
        setTransformOrigin: (de) => {
          _["transform-origin"] = de;
        },
        isFocused: () => document.activeElement === q(),
        saveFocus: () => {
          W(y, document.activeElement ?? void 0, !0);
        },
        restoreFocus: () => {
          !A() && (!x || q().contains(document.activeElement)) && o(y) && document.contains(o(y)) && "focus" in o(y) && o(y).focus();
        },
        getInnerDimensions: () => ({
          width: q().offsetWidth,
          height: q().offsetHeight
        }),
        getAnchorDimensions: () => f() ? f().getBoundingClientRect() : null,
        getWindowDimensions: () => ({ width: window.innerWidth, height: window.innerHeight }),
        getBodyDimensions: () => ({
          width: document.body.clientWidth,
          height: document.body.clientHeight
        }),
        getWindowScroll: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
        setPosition: (de) => {
          _.left = "left" in de ? `${de.left}px` : "", _.right = "right" in de ? `${de.right}px` : "", _.top = "top" in de ? `${de.top}px` : "", _.bottom = "bottom" in de ? `${de.bottom}px` : "";
        },
        setMaxHeight: (de) => {
          _["max-height"] = de;
        }
      }),
      !0
    );
    const V = {
      get open() {
        return l();
      },
      set open(de) {
        l(de);
      },
      closeProgrammatic: le
    };
    return w && w(V), o(I).init(), () => {
      var ee, Ie;
      D && D(V);
      const de = o(I).isHoistedElement;
      (ee = o(I)) == null || ee.destroy(), de && ((Ie = q().parentNode) == null || Ie.removeChild(q()));
    };
  }), Gn(() => {
    var V;
    s() && q() && ((V = q().parentElement) == null || V.classList.remove("mdc-menu-surface--anchor"));
  });
  function G(V) {
    return V in T ? T[V] : q().classList.contains(V);
  }
  function M(V) {
    T[V] || (T[V] = !0);
  }
  function N(V) {
    (!(V in T) || T[V]) && (T[V] = !1);
  }
  function le(V) {
    var de;
    (de = o(I)) == null || de.close(V), l(!1);
  }
  function U(V) {
    o(I) && l() && !c() && o(I).handleBodyClick(V);
  }
  function H() {
    return l();
  }
  function k(V) {
    l(V);
  }
  function X(V, de) {
    if (o(I) == null)
      throw new Error("Instance is not defined.");
    return o(I).setAbsolutePosition(V, de);
  }
  function oe(V) {
    if (o(I) == null)
      throw new Error("Instance is not defined.");
    return o(I).setIsHoisted(V);
  }
  function R() {
    if (o(I) == null)
      throw new Error("Instance is not defined.");
    return o(I).isFixed();
  }
  function K() {
    if (o(I) == null)
      throw new Error("Instance is not defined.");
    return o(I).flipCornerHorizontally();
  }
  function q() {
    return x;
  }
  var ge = {
    isOpen: H,
    setOpen: k,
    setAbsolutePosition: X,
    setIsHoisted: oe,
    isFixed: R,
    flipCornerHorizontally: K,
    getElement: q
  }, ce = Rh();
  hn("click", Fo.body, U, !0);
  var Q = (V) => {
    var de;
    o(I) && !c() && o(I).handleKeydown(V), (de = e.onkeydown) == null || de.call(e, V);
  };
  Ue(
    ce,
    (V, de) => ({
      class: V,
      style: de,
      role: "dialog",
      ...E,
      onkeydown: Q
    }),
    [
      () => He({
        "mdc-menu-surface": !0,
        "mdc-menu-surface--fixed": d(),
        "mdc-menu-surface--open": a(),
        "smui-menu-surface--static": a(),
        "mdc-menu-surface--fullwidth": u(),
        ...T,
        [r()]: !0
      }),
      () => Object.entries(_).map(([V, de]) => `${V}: ${de};`).concat([i()]).join(" ")
    ]
  );
  var fe = B(ce);
  return _e(fe, () => e.children ?? pe), we(ce, (V) => x = V, () => x), Oe(ce, (V, de) => te == null ? void 0 : te(V, de), t), S(n, ce), Ee(ge);
}
function Js(n, { addClass: e = (r) => n.classList.add(r), removeClass: t = (r) => n.classList.remove(r) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      t("mdc-menu-surface--anchor");
    }
  };
}
function Mh(n, e) {
  Ae(e, !0);
  const { closest: t } = Pa;
  let r = m(e, "use", 19, () => []), i = m(e, "class", 3, ""), a = m(e, "open", 15, !1), s = m(e, "anchorElement", 15), d = m(e, "managed", 3, !1), l = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "open",
    "anchorElement",
    "managed",
    "children"
  ]), c, u = /* @__PURE__ */ ue(void 0), h = /* @__PURE__ */ ue(void 0), f = /* @__PURE__ */ ue(void 0);
  se("SMUI:menu-surface:mount", (b) => {
    o(h) || W(h, b, !0);
  });
  const v = ye("SMUI:list:mount");
  se("SMUI:list:mount", (b) => {
    o(f) || W(f, b, !0), v && v(b);
  });
  const g = ye("SMUI:menu:mount"), p = ye("SMUI:menu:unmount");
  it(() => (W(
    u,
    new Th({
      addClassToElementAtIndex: (b, w) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).addClassForElementIndex(b, w);
      },
      removeClassFromElementAtIndex: (b, w) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).removeClassForElementIndex(b, w);
      },
      addAttributeToElementAtIndex: (b, w, D) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).setAttributeForElementIndex(b, w, D);
      },
      removeAttributeFromElementAtIndex: (b, w) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).removeAttributeForElementIndex(b, w);
      },
      getAttributeFromElementAtIndex: (b, w) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return o(f).getAttributeFromElementIndex(b, w);
      },
      elementContainsClass: (b, w) => b.classList.contains(w),
      closeSurface: (b) => {
        var w;
        d() || ((w = o(h)) == null || w.closeProgrammatic(b), Be(_(), "SMUIMenuClosedProgrammatically"));
      },
      getElementIndex: (b) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return o(f).getOrderedList().map((w) => w.element).indexOf(b);
      },
      notifySelected: (b) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        Be(_(), "SMUIMenuSelected", {
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
        return !!t(o(f).getOrderedList()[b].element, `.${Ni.MENU_SELECTION_GROUP}`);
      },
      getSelectedSiblingOfItemAtIndex: (b) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        const w = o(f).getOrderedList(), D = t(w[b].element, `.${Ni.MENU_SELECTION_GROUP}`), G = D == null ? void 0 : D.querySelector(`.${Ni.MENU_SELECTED_LIST_ITEM}`);
        return G ? w.map((M) => M.element).indexOf(G) : -1;
      }
    }),
    !0
  ), g && g(o(u)), o(u).init(), () => {
    var b;
    p && o(u) && p(o(u)), (b = o(u)) == null || b.destroy();
  }));
  function C(b) {
    o(u) && o(u).handleKeydown(b);
  }
  function A() {
    return a();
  }
  function E(b) {
    a(b);
  }
  function x(b) {
    if (o(u) == null)
      throw new Error("Instance is undefined.");
    o(u).setDefaultFocusState(b);
  }
  function I() {
    if (o(u) == null)
      throw new Error("Instance is undefined.");
    return o(u).getSelectedIndex();
  }
  function T() {
    return c;
  }
  function _() {
    return c.getElement();
  }
  var y = {
    isOpen: A,
    setOpen: E,
    setDefaultFocusState: x,
    getSelectedIndex: I,
    getMenuSurface: T,
    getElement: _
  };
  {
    let b = /* @__PURE__ */ ie(() => He({ "mdc-menu": !0, [i()]: !0 }));
    we(
      Oh(n, Ke(
        {
          get use() {
            return r();
          },
          get class() {
            return o(b);
          },
          get managed() {
            return d();
          }
        },
        () => l,
        {
          onkeydown: (w) => {
            var D;
            C(w), (D = e.onkeydown) == null || D.call(e, w);
          },
          onSMUIMenuSurfaceOpened: (w) => {
            var D;
            o(u) && o(u).handleMenuSurfaceOpened(), (D = e.onSMUIMenuSurfaceOpened) == null || D.call(e, w);
          },
          onSMUIListAction: (w) => {
            var D;
            o(u) && o(f) && o(u).handleItemAction(o(f).getOrderedList()[w.detail.index].element), (D = e.onSMUIListAction) == null || D.call(e, w);
          },
          get open() {
            return a();
          },
          set open(w) {
            a(w);
          },
          get anchorElement() {
            return s();
          },
          set anchorElement(w) {
            s(w);
          },
          children: (w, D) => {
            var G = re(), M = j(G);
            _e(M, () => e.children ?? pe), S(w, G);
          },
          $$slots: { default: !0 }
        }
      )),
      (w) => c = w,
      () => c
    );
  }
  return Ee(y);
}
function Ph(n, e) {
  Ae(e, !0);
  const { closest: t, matches: r } = Pa;
  let i = ye("SMUI:list:nav"), a = m(e, "use", 19, () => []), s = m(e, "class", 3, ""), d = m(e, "nonInteractive", 3, !1), l = m(e, "dense", 3, !1), c = m(e, "textualList", 3, !1), u = m(e, "avatarList", 3, !1), h = m(e, "iconList", 3, !1), f = m(e, "imageList", 3, !1), v = m(e, "thumbnailList", 3, !1), g = m(e, "videoList", 3, !1), p = m(e, "twoLine", 3, !1), C = m(e, "threeLine", 3, !1), A = m(e, "vertical", 3, !0), E = m(e, "wrapFocus", 19, () => ye("SMUI:list:wrapFocus") ?? !1), x = m(e, "singleSelection", 3, !1), I = m(e, "disabledItemsFocusable", 3, !1), T = m(e, "selectedIndex", 31, () => -1), _ = m(e, "radioList", 3, !1), y = m(e, "checkList", 3, !1), b = m(e, "hasTypeahead", 3, !1), w = m(e, "component", 3, Ds), D = m(e, "tag", 3, i ? "nav" : "ul"), G = /* @__PURE__ */ ze(e, [
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
  ]), M, N = /* @__PURE__ */ ue(void 0), le = [], U = ye("SMUI:list:role");
  const H = /* @__PURE__ */ new WeakMap();
  let k = ye("SMUI:dialog:selection"), X = ye("SMUI:addLayoutListener"), oe;
  se("SMUI:list:nonInteractive", d()), se("SMUI:separator:context", "list"), U || (x() ? (U = "listbox", se("SMUI:list:item:role", "option")) : _() ? (U = "radiogroup", se("SMUI:list:item:role", "radio")) : y() ? (U = "group", se("SMUI:list:item:role", "checkbox")) : (U = "list", se("SMUI:list:item:role", void 0))), Se(() => {
    o(N) && o(N).setVerticalOrientation(A());
  }), Se(() => {
    o(N) && o(N).setWrapFocus(E());
  }), Se(() => {
    o(N) && o(N).setHasTypeahead(b());
  }), Se(() => {
    o(N) && o(N).setSingleSelection(x());
  }), Se(() => {
    o(N) && o(N).setDisabledItemsFocusable(I());
  }), Se(() => {
    o(N) && x() && P() !== T() && o(N).setSelectedIndex(T());
  }), X && (oe = X(at)), se("SMUI:list:item:mount", (me) => {
    le.push(me), H.set(me.element, me), x() && me.selected && T(Re(me.element));
  }), se("SMUI:list:item:unmount", (me) => {
    const F = (me && le.findIndex((O) => O === me)) ?? -1;
    F !== -1 && (le.splice(F, 1), H.delete(me.element));
  });
  const R = ye("SMUI:list:mount"), K = ye("SMUI:list:unmount");
  it(() => {
    W(
      N,
      new xh({
        addClassForElementIndex: ee,
        focusItemAtIndex: ae,
        getAttributeForElementIndex: (F, O) => {
          var Y;
          return ((Y = V()[F]) == null ? void 0 : Y.getAttr(O)) ?? null;
        },
        getFocusedElementIndex: () => document.activeElement ? V().map((F) => F.element).indexOf(document.activeElement) : -1,
        getListItemCount: () => le.length,
        getPrimaryTextAtIndex: je,
        hasCheckboxAtIndex: (F) => {
          var O;
          return ((O = V()[F]) == null ? void 0 : O.hasCheckbox) ?? !1;
        },
        hasRadioAtIndex: (F) => {
          var O;
          return ((O = V()[F]) == null ? void 0 : O.hasRadio) ?? !1;
        },
        isCheckboxCheckedAtIndex: (F) => {
          const O = V()[F];
          return ((O == null ? void 0 : O.hasCheckbox) && O.checked) ?? !1;
        },
        isFocusInsideList: () => M != null && xe() !== document.activeElement && xe().contains(document.activeElement),
        isRootFocused: () => M != null && document.activeElement === xe(),
        listItemAtIndexHasClass: de,
        notifyAction: (F) => {
          T(F), M != null && Be(xe(), "SMUIListAction", { index: F });
        },
        notifySelectionChange: (F) => {
          M != null && Be(xe(), "SMUIListSelectionChange", { changedIndices: F });
        },
        removeClassForElementIndex: Ie,
        setAttributeForElementIndex: be,
        setCheckedCheckboxOrRadioAtIndex: (F, O) => {
          V()[F].checked = O;
        },
        setTabIndexForListItemChildren: (F, O) => {
          const Y = V()[F];
          Array.prototype.forEach.call(Y.element.querySelectorAll("button:not(:disabled), a"), (st) => {
            st.setAttribute("tabindex", O);
          });
        }
      }),
      !0
    );
    const me = {
      get element() {
        return xe();
      },
      get items() {
        return le;
      },
      get typeaheadInProgress() {
        if (!o(N))
          throw new Error("Instance is undefined.");
        return o(N).isTypeaheadInProgress();
      },
      typeaheadMatchItem(F, O) {
        if (!o(N))
          throw new Error("Instance is undefined.");
        return o(N).typeaheadMatchItem(
          F,
          O,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: V,
      focusItemAtIndex: ae,
      addClassForElementIndex: ee,
      removeClassForElementIndex: Ie,
      setAttributeForElementIndex: be,
      removeAttributeForElementIndex: Ge,
      getAttributeFromElementIndex: et,
      getPrimaryTextAtIndex: je
    };
    return R && R(me), o(N).init(), o(N).layout(), () => {
      var F;
      K && K(me), (F = o(N)) == null || F.destroy();
    };
  }), Gn(() => {
    oe && oe();
  });
  function q(me) {
    o(N) && me.target && o(N).handleKeydown(me, me.target.classList.contains("mdc-deprecated-list-item"), Re(me.target));
  }
  function ge(me) {
    o(N) && me.target && o(N).handleFocusIn(Re(me.target));
  }
  function ce(me) {
    o(N) && me.target && o(N).handleFocusOut(Re(me.target));
  }
  function Q(me) {
    o(N) && me.target && o(N).handleClick(Re(me.target), !r(me.target, 'input[type="checkbox"], input[type="radio"]'), me);
  }
  function fe(me) {
    if (_() || y()) {
      const F = Re(me.target);
      if (F !== -1) {
        const O = V()[F];
        O && (_() && !O.checked || y()) && (r(me.detail.target, 'input[type="checkbox"], input[type="radio"]') || (O.checked = !O.checked), O.activateRipple(), window.requestAnimationFrame(() => {
          O.deactivateRipple();
        }));
      }
    }
  }
  function V() {
    return M == null ? [] : [...xe().children].map((me) => H.get(me)).filter((me) => me && me._smui_list_item_accessor);
  }
  function de(me, F) {
    const O = V()[me];
    return (O && O.hasClass(F)) ?? !1;
  }
  function ee(me, F) {
    const O = V()[me];
    O && O.addClass(F);
  }
  function Ie(me, F) {
    const O = V()[me];
    O && O.removeClass(F);
  }
  function be(me, F, O) {
    const Y = V()[me];
    Y && Y.addAttr(F, O);
  }
  function Ge(me, F) {
    const O = V()[me];
    O && O.removeAttr(F);
  }
  function et(me, F) {
    const O = V()[me];
    return O ? O.getAttr(F) : null;
  }
  function je(me) {
    const F = V()[me];
    return (F && F.getPrimaryText()) ?? "";
  }
  function Re(me) {
    const F = t(me, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return F && r(F, ".mdc-deprecated-list-item") ? V().map((O) => O == null ? void 0 : O.element).indexOf(F) : -1;
  }
  function at() {
    if (!o(N))
      throw new Error("Instance is undefined.");
    return o(N).layout();
  }
  function Ft(me, F) {
    if (!o(N))
      throw new Error("Instance is undefined.");
    return o(N).setEnabled(me, F);
  }
  function kt() {
    if (!o(N))
      throw new Error("Instance is undefined.");
    return o(N).isTypeaheadInProgress();
  }
  function P() {
    if (!o(N))
      throw new Error("Instance is undefined.");
    return o(N).getSelectedIndex();
  }
  function Z() {
    if (!o(N))
      throw new Error("Instance is undefined.");
    return o(N).getFocusedItemIndex();
  }
  function ae(me) {
    const F = V()[me];
    F && "focus" in F.element && F.element.focus();
  }
  function xe() {
    return M.getElement();
  }
  var ut = {
    layout: at,
    setEnabled: Ft,
    getTypeaheadInProgress: kt,
    getSelectedIndex: P,
    getFocusedItemIndex: Z,
    focusItemAtIndex: ae,
    getElement: xe
  }, qt = re(), Ln = j(qt);
  {
    let me = /* @__PURE__ */ ie(() => He({
      "mdc-deprecated-list": !0,
      "mdc-deprecated-list--non-interactive": d(),
      "mdc-deprecated-list--dense": l(),
      "mdc-deprecated-list--textual-list": c(),
      "mdc-deprecated-list--avatar-list": u() || k,
      "mdc-deprecated-list--icon-list": h(),
      "mdc-deprecated-list--image-list": f(),
      "mdc-deprecated-list--thumbnail-list": v(),
      "mdc-deprecated-list--video-list": g(),
      "mdc-deprecated-list--two-line": p(),
      "smui-list--three-line": C() && !p(),
      [s()]: !0
    }));
    Ma(Ln, w, (F, O) => {
      we(
        O(F, Ke(
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
              return U;
            }
          },
          () => G,
          {
            onkeydown: (Y) => {
              var De;
              q(Y), (De = e.onkeydown) == null || De.call(e, Y);
            },
            onfocusin: (Y) => {
              var De;
              ge(Y), (De = e.onfocusin) == null || De.call(e, Y);
            },
            onfocusout: (Y) => {
              var De;
              ce(Y), (De = e.onfocusout) == null || De.call(e, Y);
            },
            onclick: (Y) => {
              var De;
              Q(Y), (De = e.onclick) == null || De.call(e, Y);
            },
            onSMUIAction: (Y) => {
              var De;
              fe(Y), (De = e.onSMUIAction) == null || De.call(e, Y);
            },
            children: (Y, De) => {
              var st = re(), mt = j(st);
              _e(mt, () => e.children ?? pe), S(Y, st);
            },
            $$slots: { default: !0 }
          }
        )),
        (Y) => M = Y,
        () => M
      );
    });
  }
  return S(n, qt), Ee(ut);
}
let Fh = 0;
var kh = /* @__PURE__ */ z('<span class="mdc-deprecated-list-item__ripple"></span>'), Nh = /* @__PURE__ */ z("<!><!>", 1);
function Hh(n, e) {
  Ae(e, !0);
  let t = () => {
  };
  function r(ee) {
    return ee === t;
  }
  let i = ye("SMUI:list:item:nav"), a = m(e, "use", 19, () => []), s = m(e, "class", 3, ""), d = m(e, "style", 3, ""), l = m(e, "nonInteractive", 19, () => ye("SMUI:list:nonInteractive") ?? !1), c = m(e, "ripple", 19, () => !l()), u = m(e, "wrapper", 3, !1), h = m(e, "activated", 15, !1), f = m(e, "role", 19, () => u() ? "presentation" : ye("SMUI:list:item:role")), v = m(e, "selected", 15, !1), g = m(e, "disabled", 3, !1), p = m(e, "skipRestoreFocus", 3, !1), C = m(e, "tabindex", 15, t), A = m(e, "inputId", 19, () => "SMUI-form-field-list-" + Fh++), E = m(e, "component", 3, Ds), x = m(e, "tag", 19, () => i ? e.href ? "a" : "span" : "li"), I = /* @__PURE__ */ ze(e, [
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
  let T, _ = Ce({}), y = Ce({}), b = Ce({}), w = /* @__PURE__ */ ue(void 0), D = /* @__PURE__ */ ue(void 0);
  const G = /* @__PURE__ */ ie(() => r(C()) ? !l() && !g() && (v() || o(w) && o(w).checked) ? 0 : -1 : C());
  se("SMUI:generic:input:props", { id: A() }), se("SMUI:separator:context", void 0), se("SMUI:generic:input:mount", (ee) => {
    ("_smui_checkbox_accessor" in ee || "_smui_radio_accessor" in ee) && W(w, ee, !0);
  }), se("SMUI:generic:input:unmount", () => {
    W(w, void 0);
  });
  const M = ye("SMUI:list:item:mount"), N = ye("SMUI:list:item:unmount");
  it(() => {
    if (!v() && !l()) {
      let Ie = !0, be = T.getElement();
      for (; be.previousElementSibling; )
        if (be = be.previousElementSibling, be.nodeType === 1 && be.classList.contains("mdc-deprecated-list-item") && !be.classList.contains("mdc-deprecated-list-item--disabled")) {
          Ie = !1;
          break;
        }
      Ie && W(D, window.requestAnimationFrame(() => K(be)), !0);
    }
    const ee = {
      _smui_list_item_accessor: !0,
      get element() {
        return Q();
      },
      get selected() {
        return v();
      },
      set selected(Ie) {
        v(Ie);
      },
      hasClass: le,
      addClass: U,
      removeClass: H,
      getAttr: X,
      addAttr: oe,
      removeAttr: R,
      getPrimaryText: ce,
      // For inputs within item.
      get checked() {
        return (o(w) && o(w).checked) ?? !1;
      },
      set checked(Ie) {
        o(w) && (o(w).checked = !!Ie);
      },
      get hasCheckbox() {
        return !!(o(w) && "_smui_checkbox_accessor" in o(w));
      },
      get hasRadio() {
        return !!(o(w) && "_smui_radio_accessor" in o(w));
      },
      activateRipple() {
        o(w) && o(w).activateRipple();
      },
      deactivateRipple() {
        o(w) && o(w).deactivateRipple();
      },
      // For select options.
      getValue() {
        return e.value;
      },
      // For autocomplete
      action: ge,
      get tabindex() {
        return o(G);
      },
      set tabindex(Ie) {
        C(Ie);
      },
      get disabled() {
        return g();
      },
      get activated() {
        return h();
      },
      set activated(Ie) {
        h(Ie);
      }
    };
    return M && M(ee), () => {
      N && N(ee);
    };
  }), Gn(() => {
    o(D) && window.cancelAnimationFrame(o(D));
  });
  function le(ee) {
    return ee in _ ? _[ee] : Q().classList.contains(ee);
  }
  function U(ee) {
    _[ee] || (_[ee] = !0);
  }
  function H(ee) {
    (!(ee in _) || _[ee]) && (_[ee] = !1);
  }
  function k(ee, Ie) {
    y[ee] != Ie && (Ie === "" || Ie == null ? delete y[ee] : y[ee] = Ie);
  }
  function X(ee) {
    return ee in b ? b[ee] ?? null : Q().getAttribute(ee);
  }
  function oe(ee, Ie) {
    b[ee] !== Ie && (b[ee] = Ie);
  }
  function R(ee) {
    (!(ee in b) || b[ee] != null) && (b[ee] = void 0);
  }
  function K(ee) {
    let Ie = !0;
    for (; ee.nextElementSibling; )
      if (ee = ee.nextElementSibling, ee.nodeType === 1 && ee.classList.contains("mdc-deprecated-list-item")) {
        const be = ee.attributes.getNamedItem("tabindex");
        if (be && be.value === "0") {
          Ie = !1;
          break;
        }
      }
    Ie && C(0);
  }
  function q(ee) {
    const Ie = ee.key === "Enter", be = ee.key === "Space";
    (Ie || be) && ge(ee);
  }
  function ge(ee) {
    g() || Be(Q(), "SMUIAction", ee);
  }
  function ce() {
    const ee = Q(), Ie = ee.querySelector(".mdc-deprecated-list-item__primary-text");
    if (Ie)
      return Ie.textContent ?? "";
    const be = ee.querySelector(".mdc-deprecated-list-item__text");
    return be ? be.textContent ?? "" : ee.textContent ?? "";
  }
  function Q() {
    return T.getElement();
  }
  var fe = { action: ge, getPrimaryText: ce, getElement: Q }, V = re(), de = j(V);
  {
    let ee = /* @__PURE__ */ ie(() => [
      ...l() ? [] : [
        [
          Mn,
          {
            ripple: !o(w),
            unbounded: !1,
            color: (h() || v()) && e.color == null ? "primary" : e.color,
            disabled: g(),
            addClass: U,
            removeClass: H,
            addStyle: k
          }
        ]
      ],
      ...a()
    ]), Ie = /* @__PURE__ */ ie(() => He({
      "mdc-deprecated-list-item": !u(),
      "mdc-deprecated-list-item__wrapper": u(),
      "mdc-deprecated-list-item--activated": h(),
      "mdc-deprecated-list-item--selected": v(),
      "mdc-deprecated-list-item--disabled": g(),
      "mdc-menu-item--selected": !i && f() === "menuitem" && v(),
      "smui-menu-item--non-interactive": l(),
      ..._,
      [s()]: !0
    })), be = /* @__PURE__ */ ie(() => Object.entries(y).map(([et, je]) => `${et}: ${je};`).concat([d()]).join(" ")), Ge = /* @__PURE__ */ ie(() => p() || void 0);
    Ma(de, E, (et, je) => {
      we(
        je(et, Ke(
          {
            get tag() {
              return x();
            },
            get use() {
              return o(ee);
            },
            get class() {
              return o(Ie);
            },
            get style() {
              return o(be);
            }
          },
          () => i && h() ? { "aria-current": "page" } : {},
          () => !i || u() ? { role: f() } : {},
          () => !i && f() === "option" ? { "aria-selected": v() ? "true" : "false" } : {},
          () => !i && (f() === "radio" || f() === "checkbox") ? {
            "aria-checked": o(w) && o(w).checked ? "true" : "false"
          } : {},
          () => i ? {} : { "aria-disabled": g() ? "true" : "false" },
          {
            get "data-menu-item-skip-restore-focus"() {
              return o(Ge);
            },
            get tabindex() {
              return o(G);
            },
            get href() {
              return e.href;
            }
          },
          () => b,
          () => I,
          {
            onclick: (Re) => {
              var at;
              ge(Re), (at = e.onclick) == null || at.call(e, Re);
            },
            onkeydown: (Re) => {
              var at;
              q(Re), (at = e.onkeydown) == null || at.call(e, Re);
            },
            children: (Re, at) => {
              var Ft = Nh(), kt = j(Ft);
              {
                var P = (ae) => {
                  var xe = kh();
                  S(ae, xe);
                };
                $(kt, (ae) => {
                  c() && ae(P);
                });
              }
              var Z = J(kt);
              _e(Z, () => e.children ?? pe), S(Re, Ft);
            },
            $$slots: { default: !0 }
          }
        )),
        (Re) => T = Re,
        () => T
      );
    });
  }
  return S(n, V), Ee(fe);
}
let Uh = 0;
var Bh = /* @__PURE__ */ z("<div><!></div>");
function Gh(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "id", 19, () => "SMUI-select-helper-text-" + Uh++), a = m(e, "persistent", 3, !1), s = m(e, "validationMsg", 3, !1), d = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "id",
    "persistent",
    "validationMsg",
    "children"
  ]), l, c = /* @__PURE__ */ ue(void 0), u = Ce({}), h = Ce({}), f = /* @__PURE__ */ ue(void 0);
  const v = ye("SMUI:select:helper-text:id"), g = ye("SMUI:select:helper-text:mount"), p = ye("SMUI:select:helper-text:unmount");
  it(() => (W(
    c,
    new Lh({
      addClass: A,
      removeClass: E,
      hasClass: C,
      getAttr: x,
      setAttr: I,
      removeAttr: T,
      setContent: (M) => {
        W(f, M, !0);
      }
    }),
    !0
  ), v && v(i()), g && g(o(c)), o(c).init(), () => {
    var M;
    p && o(c) && p(o(c)), (M = o(c)) == null || M.destroy();
  }));
  function C(M) {
    return M in u ? u[M] : _().classList.contains(M);
  }
  function A(M) {
    u[M] || (u[M] = !0);
  }
  function E(M) {
    (!(M in u) || u[M]) && (u[M] = !1);
  }
  function x(M) {
    return M in h ? h[M] ?? null : _().getAttribute(M);
  }
  function I(M, N) {
    h[M] !== N && (h[M] = N);
  }
  function T(M) {
    (!(M in h) || h[M] != null) && (h[M] = void 0);
  }
  function _() {
    return l;
  }
  var y = { getElement: _ }, b = Bh();
  Ue(
    b,
    (M) => ({
      class: M,
      "aria-hidden": a() ? void 0 : "true",
      id: i(),
      ...h,
      ...d
    }),
    [
      () => He({
        "mdc-select-helper-text": !0,
        "mdc-select-helper-text--validation-msg": s(),
        "mdc-select-helper-text--validation-msg-persistent": a(),
        ...u,
        [r()]: !0
      })
    ]
  );
  var w = B(b);
  {
    var D = (M) => {
      var N = re(), le = j(N);
      _e(le, () => e.children ?? pe), S(M, N);
    }, G = (M) => {
      var N = dt();
      ve(() => Pe(N, o(f))), S(M, N);
    };
    $(w, (M) => {
      o(f) == null ? M(D) : M(G, !1);
    });
  }
  return we(b, (M) => l = M, () => l), Oe(b, (M, N) => te == null ? void 0 : te(M, N), t), S(n, b), Ee(y);
}
let Wh = 0;
var Vh = /* @__PURE__ */ z("<input/>"), Zh = /* @__PURE__ */ z('<span class="mdc-select__ripple"></span>'), zh = /* @__PURE__ */ z('<div><!> <div><!> <!> <!> <!> <span><span> </span></span> <span><svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"><polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon><polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon></svg></span> <!></div> <!></div> <!>', 1);
function jh(n, e) {
  Ae(e, !0);
  const t = () => pi(xe, "$selectedTextStore", r), [r, i] = Ai();
  let a = () => {
  };
  function s(L) {
    return L === a;
  }
  let d = m(e, "use", 19, () => []), l = m(e, "class", 3, ""), c = m(e, "style", 3, ""), u = m(e, "ripple", 3, !0), h = m(e, "disabled", 3, !1), f = m(e, "variant", 3, "standard"), v = m(e, "noLabel", 3, !1), g = m(e, "label", 3, void 0), p = m(e, "value", 15), C = m(e, "key", 3, (L) => L), A = m(e, "dirty", 15, !1), E = m(e, "invalid", 15, a), x = m(e, "updateInvalid", 19, () => s(E())), I = m(e, "required", 3, !1), T = m(e, "inputId", 19, () => "SMUI-select-" + Wh++), _ = m(e, "hiddenInput", 3, !1), y = m(e, "withLeadingIcon", 3, a), b = m(e, "anchor$use", 19, () => []), w = m(e, "anchor$class", 3, ""), D = m(e, "selectedTextContainer$use", 19, () => []), G = m(e, "selectedTextContainer$class", 3, ""), M = m(e, "selectedText$use", 19, () => []), N = m(e, "selectedText$class", 3, ""), le = m(e, "dropdownIcon$use", 19, () => []), U = m(e, "dropdownIcon$class", 3, ""), H = m(e, "menu$class", 3, ""), k = /* @__PURE__ */ ze(e, [
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
  const X = s(E());
  s(E()) && E(!1);
  let oe, R = /* @__PURE__ */ ue(void 0), K = Ce({}), q = Ce({}), ge, ce = Ce({}), Q = /* @__PURE__ */ ue(-1);
  const fe = /* @__PURE__ */ ie(() => k.menu$id ?? T() + "-menu");
  let V = /* @__PURE__ */ ue(void 0), de = ye("SMUI:addLayoutListener"), ee, Ie = /* @__PURE__ */ ue(!1), be = Ce({}), Ge = /* @__PURE__ */ ue(void 0), et = /* @__PURE__ */ ue(void 0), je = /* @__PURE__ */ ue(!1), Re, at = ye("SMUI:select:context"), Ft, kt, P, Z, ae;
  se("SMUI:list:role", ""), se("SMUI:list:nav", !1);
  const xe = Bn("");
  se("SMUI:select:selectedText", xe);
  const ut = Bn(p());
  Se(() => {
    Qn(ut, p());
  }), se("SMUI:select:value", ut), Se(() => {
    o(R) && o(R).getValue() !== C()(p()) && o(R).setValue(C()(p()));
  });
  let qt = o(Q);
  Se(() => {
    if (qt !== o(Q))
      if (qt = o(Q), o(R))
        o(R).setSelectedIndex(
          o(Q),
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const L = rn();
        p() !== L[o(Q)] && p(L[o(Q)]);
      }
  }), Se(() => {
    o(R) && o(R).getDisabled() !== h() && o(R).setDisabled(h());
  }), Se(() => {
    o(R) && A() && o(R).isValid() !== !E() && (x() ? E(!o(R).isValid()) : o(R).setValid(!E()));
  }), Se(() => {
    o(R) && o(R).getRequired() !== I() && o(R).setRequired(I());
  }), de && (ee = de(Ua)), se("SMUI:select:leading-icon:mount", (L) => {
    Ft = L;
  }), se("SMUI:select:leading-icon:unmount", () => {
    Ft = void 0;
  }), se("SMUI:list:mount", (L) => {
    Re = L;
  }), se("SMUI:select:helper-text:id", (L) => {
    W(V, L, !0);
  }), se("SMUI:select:helper-text:mount", (L) => {
    kt = L;
  }), se("SMUI:select:helper-text:unmount", () => {
    W(V, void 0), kt = void 0;
  }), it(() => (W(
    R,
    new Dh(
      {
        // getSelectAdapterMethods
        // getMenuItemAttr: (menuItem: Element, attr: string) =>
        //   menuItem.getAttribute(attr),
        setSelectedText: (L) => {
          Qn(xe, L);
        },
        isSelectAnchorFocused: () => document.activeElement === ge,
        getSelectAnchorAttr: st,
        setSelectAnchorAttr: mt,
        removeSelectAnchorAttr: Nt,
        addMenuClass: Y,
        removeMenuClass: De,
        openMenu: () => {
          W(Ie, !0);
        },
        closeMenu: () => {
          W(Ie, !1);
        },
        getAnchorElement: () => ge,
        setMenuAnchorElement: (L) => {
          W(Ge, L, !0);
        },
        setMenuAnchorCorner: (L) => {
          W(et, L, !0);
        },
        setMenuWrapFocus: (L) => {
          W(je, L, !0);
        },
        getSelectedIndex: () => o(Q),
        setSelectedIndex: (L) => {
          qt = L, W(Q, L, !0), p(rn()[o(Q)]);
        },
        focusMenuItemAtIndex: (L) => {
          Re.focusItemAtIndex(L);
        },
        getMenuItemCount: () => Re.items.length,
        getMenuItemValues: () => rn().map(C()),
        getMenuItemTextAtIndex: (L) => Re.getPrimaryTextAtIndex(L),
        isTypeaheadInProgress: () => Re.typeaheadInProgress,
        typeaheadMatchItem: (L, he) => Re.typeaheadMatchItem(L, he),
        // getCommonAdapterMethods
        addClass: me,
        removeClass: F,
        hasClass: Ln,
        setRippleCenter: (L) => Z && Z.setRippleCenter(L),
        activateBottomLine: () => Z && Z.activate(),
        deactivateBottomLine: () => Z && Z.deactivate(),
        notifyChange: (L) => {
          var he;
          A(!0), x() && E(!((he = o(R)) != null && he.isValid())), Be(_r(), "SMUISelectChange", { value: p(), index: o(Q) });
        },
        // getOutlineAdapterMethods
        hasOutline: () => !!ae,
        notchOutline: (L) => ae && ae.notch(L),
        closeOutline: () => ae && ae.closeNotch(),
        // getLabelAdapterMethods
        hasLabel: () => !!P,
        floatLabel: (L) => P && P.float(L),
        getLabelWidth: () => P ? P.getWidth() : 0,
        setLabelRequired: (L) => P && P.setRequired(L)
      },
      {
        get helperText() {
          return kt;
        },
        get leadingIcon() {
          return Ft;
        }
      }
    ),
    !0
  ), W(Q, rn().indexOf(p()), !0), o(R).init(), an(X), () => {
    var L;
    (L = o(R)) == null || L.destroy();
  })), Gn(() => {
    ee && ee();
  });
  function Ln(L) {
    return L in K ? K[L] : _r().classList.contains(L);
  }
  function me(L) {
    K[L] || (K[L] = !0);
  }
  function F(L) {
    (!(L in K) || K[L]) && (K[L] = !1);
  }
  function O(L, he) {
    q[L] != he && (he === "" || he == null ? delete q[L] : q[L] = he);
  }
  function Y(L) {
    be[L] || (be[L] = !0);
  }
  function De(L) {
    (!(L in be) || be[L]) && (be[L] = !1);
  }
  function st(L) {
    return L in ce ? ce[L] ?? null : _r().getAttribute(L);
  }
  function mt(L, he) {
    ce[L] !== he && (ce[L] = he);
  }
  function Nt(L) {
    (!(L in ce) || ce[L] != null) && (ce[L] = void 0);
  }
  function rn() {
    return Re.getOrderedList().map((L) => L.getValue());
  }
  function Ei(L) {
    const he = L.currentTarget.getBoundingClientRect();
    return (ct(L) ? L.touches[0].clientX : L.clientX) - he.left;
  }
  function ct(L) {
    return "touches" in L;
  }
  function Ht() {
    if (o(R) == null)
      throw new Error("Instance is undefined.");
    return o(R).getUseDefaultValidation();
  }
  function an(L) {
    var he;
    (he = o(R)) == null || he.setUseDefaultValidation(L);
  }
  function br() {
    ge.focus();
  }
  function Ua() {
    var L;
    (L = o(R)) == null || L.layout();
  }
  function _r() {
    return oe;
  }
  var Ne = {
    getUseDefaultValidation: Ht,
    setUseDefaultValidation: an,
    focus: br,
    layout: Ua,
    getElement: _r
  }, Je = zh(), qe = j(Je);
  Ue(qe, (L, he, tt) => ({ class: L, style: he, ...tt }), [
    () => He({
      "mdc-select": !0,
      "mdc-select--required": I(),
      "mdc-select--disabled": h(),
      "mdc-select--filled": f() === "filled",
      "mdc-select--outlined": f() === "outlined",
      "smui-select--standard": f() === "standard",
      "mdc-select--with-leading-icon": s(y()) ? e.leadingIcon : y(),
      "mdc-select--no-label": v() || g() == null,
      "mdc-select--invalid": E(),
      "mdc-select--activated": o(Ie),
      "mdc-data-table__pagination-rows-per-page-select": at === "data-table:pagination",
      ...K,
      [l()]: !0
    }),
    () => Object.entries(q).map(([L, he]) => `${L}: ${he};`).concat([c()]).join(" "),
    () => Ca(k, [
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
  var Ut = B(qe);
  {
    var Rn = (L) => {
      var he = Vh();
      Ue(
        he,
        (tt) => ({
          type: "hidden",
          required: I(),
          disabled: h(),
          value: p(),
          ...tt
        }),
        [() => lt(k, "input$")],
        void 0,
        void 0,
        !0
      ), S(L, he);
    };
    $(Ut, (L) => {
      _() && L(Rn);
    });
  }
  var Qe = J(Ut, 2), bt = (L) => {
    var he;
    ge.focus(), o(R) && o(R).handleClick(Ei(L)), (he = e.anchor$onclick) == null || he.call(e, L);
  }, Lt = (L) => {
    var he;
    o(R) && o(R).handleKeydown(L), (he = e.onkeydown) == null || he.call(e, L);
  }, Ve = (L) => {
    var he;
    o(R) && o(R).handleBlur(), Be(_r(), "blur", L), (he = e.anchor$onblur) == null || he.call(e, L);
  }, Rt = (L) => {
    var he;
    o(R) && o(R).handleFocus(), Be(_r(), "focus", L), (he = e.anchor$onfocus) == null || he.call(e, L);
  };
  Ue(
    Qe,
    (L, he) => ({
      class: L,
      "aria-required": I() ? "true" : void 0,
      "aria-disabled": h() ? "true" : void 0,
      "aria-controls": o(fe),
      "aria-expanded": o(Ie) ? "true" : "false",
      "aria-describedby": o(V),
      role: "combobox",
      tabindex: "0",
      ...ce,
      ...he,
      onclick: bt,
      onkeydown: Lt,
      onblur: Ve,
      onfocus: Rt
    }),
    [
      () => He({ "mdc-select__anchor": !0, [w()]: !0 }),
      () => lt(k, "anchor$")
    ]
  );
  var rr = B(Qe);
  {
    var In = (L) => {
      var he = Zh();
      S(L, he);
    };
    $(rr, (L) => {
      f() === "filled" && L(In);
    });
  }
  var _t = J(rr, 2);
  {
    var Bt = (L) => {
      {
        let he = /* @__PURE__ */ ie(() => T() + "-smui-label"), tt = /* @__PURE__ */ ie(() => t() !== ""), yt = /* @__PURE__ */ ie(() => lt(k, "label$"));
        we(
          ls(L, Ke(
            {
              get id() {
                return o(he);
              },
              get floatAbove() {
                return o(tt);
              },
              get required() {
                return I();
              }
            },
            () => o(yt),
            {
              children: (ar, sr) => {
                var aa = re(), Si = j(aa);
                {
                  var Xr = (Yr) => {
                  }, Bs = (Yr) => {
                    var Ba = re(), sa = j(Ba);
                    {
                      var Ko = (Cr) => {
                        var Kr = dt();
                        ve(() => Pe(Kr, g())), S(Cr, Kr);
                      }, Ga = (Cr) => {
                        var Kr = re(), Gs = j(Kr);
                        _e(Gs, g), S(Cr, Kr);
                      };
                      $(
                        sa,
                        (Cr) => {
                          typeof g() == "string" ? Cr(Ko) : Cr(Ga, !1);
                        },
                        !0
                      );
                    }
                    S(Yr, Ba);
                  };
                  $(Si, (Yr) => {
                    g() == null ? Yr(Xr) : Yr(Bs, !1);
                  });
                }
                S(ar, aa);
              },
              $$slots: { default: !0 }
            }
          )),
          (ar) => P = ar,
          () => P
        );
      }
    };
    $(_t, (L) => {
      f() !== "outlined" && !v() && g() != null && L(Bt);
    });
  }
  var bn = J(_t, 2);
  {
    var Xt = (L) => {
      {
        let he = /* @__PURE__ */ ie(() => v() || g() == null), tt = /* @__PURE__ */ ie(() => lt(k, "outline$"));
        we(
          Vd(L, Ke(
            {
              get noLabel() {
                return o(he);
              }
            },
            () => o(tt),
            {
              children: (yt, ar) => {
                var sr = re(), aa = j(sr);
                {
                  var Si = (Xr) => {
                    {
                      let Bs = /* @__PURE__ */ ie(() => T() + "-smui-label"), Yr = /* @__PURE__ */ ie(() => t() !== ""), Ba = /* @__PURE__ */ ie(() => lt(k, "label$"));
                      we(
                        ls(Xr, Ke(
                          {
                            get id() {
                              return o(Bs);
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
                            children: (sa, Ko) => {
                              var Ga = re(), Cr = j(Ga);
                              {
                                var Kr = (oa) => {
                                }, Gs = (oa) => {
                                  var Jo = re(), Du = j(Jo);
                                  {
                                    var Lu = (xi) => {
                                      var la = dt();
                                      ve(() => Pe(la, g())), S(xi, la);
                                    }, Ru = (xi) => {
                                      var la = re(), Ou = j(la);
                                      _e(Ou, g), S(xi, la);
                                    };
                                    $(
                                      Du,
                                      (xi) => {
                                        typeof g() == "string" ? xi(Lu) : xi(Ru, !1);
                                      },
                                      !0
                                    );
                                  }
                                  S(oa, Jo);
                                };
                                $(Cr, (oa) => {
                                  g() == null ? oa(Kr) : oa(Gs, !1);
                                });
                              }
                              S(sa, Ga);
                            },
                            $$slots: { default: !0 }
                          }
                        )),
                        (sa) => P = sa,
                        () => P
                      );
                    }
                  };
                  $(aa, (Xr) => {
                    !v() && g() != null && Xr(Si);
                  });
                }
                S(yt, sr);
              },
              $$slots: { default: !0 }
            }
          )),
          (yt) => ae = yt,
          () => ae
        );
      }
    };
    $(bn, (L) => {
      f() === "outlined" && L(Xt);
    });
  }
  var jr = J(bn, 2);
  _e(jr, () => e.leadingIcon ?? pe);
  var _n = J(jr, 2);
  Ue(_n, (L, he) => ({ class: L, ...he }), [
    () => He({
      "mdc-select__selected-text-container": !0,
      [G()]: !0
    }),
    () => lt(k, "selectedTextContainer$")
  ]);
  var yr = B(_n);
  Ue(
    yr,
    (L, he) => ({
      id: T() + "-smui-selected-text",
      class: L,
      role: "button",
      "aria-haspopup": "listbox",
      "aria-labelledby": T() + "-smui-label",
      ...he
    }),
    [
      () => He({
        "mdc-select__selected-text": !0,
        [N()]: !0
      }),
      () => lt(k, "selectedText$")
    ]
  );
  var ia = B(yr);
  Oe(yr, (L, he) => te == null ? void 0 : te(L, he), M), Oe(_n, (L, he) => te == null ? void 0 : te(L, he), D);
  var yn = J(_n, 2);
  Ue(yn, (L, he) => ({ class: L, ...he }), [
    () => He({
      "mdc-select__dropdown-icon": !0,
      [U()]: !0
    }),
    () => lt(k, "dropdownIcon$")
  ]), Oe(yn, (L, he) => te == null ? void 0 : te(L, he), le);
  var ir = J(yn, 2);
  {
    var Wn = (L) => {
      {
        let he = /* @__PURE__ */ ie(() => lt(k, "ripple$"));
        we(Wd(L, Ke(() => o(he))), (tt) => Z = tt, () => Z);
      }
    };
    $(ir, (L) => {
      f() !== "outlined" && u() && L(Wn);
    });
  }
  we(Qe, (L) => ge = L, () => ge), Oe(Qe, (L, he) => te == null ? void 0 : te(L, he), b);
  var qr = J(Qe, 2);
  {
    let L = /* @__PURE__ */ ie(() => He({
      "mdc-select__menu": !0,
      ...be,
      [H()]: !0
    })), he = /* @__PURE__ */ ie(() => lt(k, "menu$"));
    Mh(qr, Ke(
      {
        get class() {
          return o(L);
        },
        get id() {
          return o(fe);
        },
        fullWidth: !0,
        anchor: !1,
        get anchorElement() {
          return o(Ge);
        },
        get anchorCorner() {
          return o(et);
        }
      },
      () => o(he),
      {
        onSMUIMenuSelected: (tt) => {
          var yt;
          o(R) && o(R).handleMenuItemAction(tt.detail.index), (yt = e.onSMUIMenuSelected) == null || yt.call(e, tt);
        },
        onSMUIMenuSurfaceClosing: (tt) => {
          var yt;
          o(R) && o(R).handleMenuClosing(), (yt = e.onSMUIMenuSurfaceClosing) == null || yt.call(e, tt);
        },
        onSMUIMenuSurfaceClosed: (tt) => {
          var yt;
          o(R) && o(R).handleMenuClosed(), (yt = e.onSMUIMenuSurfaceClosed) == null || yt.call(e, tt);
        },
        onSMUIMenuSurfaceOpened: (tt) => {
          var yt;
          o(R) && o(R).handleMenuOpened(), (yt = e.onSMUIMenuSurfaceOpened) == null || yt.call(e, tt);
        },
        get open() {
          return o(Ie);
        },
        set open(tt) {
          W(Ie, tt, !0);
        },
        children: (tt, yt) => {
          {
            let ar = /* @__PURE__ */ ie(() => lt(k, "list$"));
            Ph(tt, Ke(
              {
                role: "listbox",
                get wrapFocus() {
                  return o(je);
                }
              },
              () => o(ar),
              {
                get selectedIndex() {
                  return o(Q);
                },
                set selectedIndex(sr) {
                  W(Q, sr, !0);
                },
                children: (sr, aa) => {
                  var Si = re(), Xr = j(Si);
                  _e(Xr, () => e.children ?? pe), S(sr, Si);
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
  we(qe, (L) => oe = L, () => oe), Oe(qe, (L, he) => Mn == null ? void 0 : Mn(L, he), () => ({
    ripple: f() === "filled",
    unbounded: !1,
    addClass: me,
    removeClass: F,
    addStyle: O
  })), Oe(qe, (L, he) => Js == null ? void 0 : Js(L, he), () => ({ addClass: me, removeClass: F })), Oe(qe, (L, he) => te == null ? void 0 : te(L, he), d);
  var Us = J(qe, 2);
  {
    var wu = (L) => {
      {
        let he = /* @__PURE__ */ ie(() => lt(k, "helperText$"));
        Gh(L, Ke(() => o(he), {
          children: (tt, yt) => {
            var ar = re(), sr = j(ar);
            _e(sr, () => e.helperText ?? pe), S(tt, ar);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    $(Us, (L) => {
      e.helperText && L(wu);
    });
  }
  ve(() => Pe(ia, t())), S(n, Je);
  var Tu = Ee(Ne);
  return i(), Tu;
}
function qh(n, e) {
  Ae(e, !0);
  const t = () => pi(u, "$selectedValue", r), [r, i] = Ai();
  let a = m(e, "use", 19, () => []);
  m(e, "class", 3, "");
  let s = m(e, "value", 3, ""), d = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "value",
    "children"
  ]), l;
  const c = ye("SMUI:select:selectedText"), u = ye("SMUI:select:value");
  se("SMUI:list:item:role", "option");
  const h = /* @__PURE__ */ ie(() => s() != null && s() !== "" && t() === s());
  it(f), Gn(f);
  function f() {
    o(h) && l && Qn(c, l.getPrimaryText());
  }
  function v() {
    return l.getElement();
  }
  var g = { getElement: v };
  we(
    Hh(n, Ke(
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
      () => d,
      {
        children: (C, A) => {
          var E = re(), x = j(E);
          _e(x, () => e.children ?? pe), S(C, E);
        },
        $$slots: { default: !0 }
      }
    )),
    (C) => l = C,
    () => l
  );
  var p = Ee(g);
  return i(), p;
}
function Xh(n, e) {
  Ae(e, !0);
  let t = m(e, "data", 19, () => []);
  m(e, "placeholder", 3, "");
  let r = m(e, "label", 3, "");
  m(e, "description", 3, "");
  let i = m(e, "value", 15), a = m(e, "required", 3, !1);
  m(e, "size", 3, "sm");
  let s = m(e, "variant", 3, "standard"), d = m(e, "selectedOptionIndex", 31, () => -1), l = m(e, "disabled", 3, !1);
  function c(u) {
    return () => d(u);
  }
  jh(n, {
    get disabled() {
      return l();
    },
    key: (u) => `${u ?? ""}`,
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
    set value(u) {
      i(u);
    },
    children: (u, h) => {
      var f = re(), v = j(f);
      vn(v, 17, t, hr, (g, p, C) => {
        {
          let A = /* @__PURE__ */ ie(() => c(C));
          qh(g, {
            get onclick() {
              return o(A);
            },
            get value() {
              return o(p).value;
            },
            children: (E, x) => {
              var I = dt();
              ve(() => Pe(I, o(p).label)), S(E, I);
            },
            $$slots: { default: !0 }
          });
        }
      }), S(u, f);
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
function Yh(n) {
  return n ? n.scrollHeight > n.offsetHeight : !1;
}
function Kh(n) {
  return n ? n.scrollTop === 0 : !1;
}
function Jh(n) {
  return n ? Math.ceil(n.scrollHeight - n.scrollTop) === n.clientHeight : !1;
}
function Qh(n) {
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
var $h = (
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
}, Qs = {
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
var ev = (
  /** @class */
  function(n) {
    mn(e, n);
    function e(t) {
      var r = n.call(this, Ze(Ze({}, e.defaultAdapter), t)) || this;
      return r.dialogOpen = !1, r.isFullscreen = !1, r.animationFrame = 0, r.animationTimer = 0, r.escapeKeyAction = fa.CLOSE_ACTION, r.scrimClickAction = fa.CLOSE_ACTION, r.autoStackButtons = !0, r.areButtonsStacked = !1, r.suppressDefaultPressSelector = fa.SUPPRESS_DEFAULT_PRESS_SELECTOR, r.animFrame = new $h(), r.contentScrollHandler = function() {
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
        return Qs;
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
        }, Qs.DIALOG_ANIMATION_OPEN_TIME_MS);
      });
    }, e.prototype.close = function(t) {
      var r = this;
      t === void 0 && (t = ""), this.dialogOpen && (this.dialogOpen = !1, this.adapter.notifyClosing(t), this.adapter.addClass(Xe.CLOSING), this.adapter.removeClass(Xe.OPEN), this.adapter.removeBodyClass(Xe.SCROLL_LOCK), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), cancelAnimationFrame(this.animationFrame), this.animationFrame = 0, clearTimeout(this.animationTimer), this.animationTimer = setTimeout(function() {
        r.adapter.releaseFocus(), r.handleAnimationTimerEnd(), r.adapter.notifyClosed(t);
      }, Qs.DIALOG_ANIMATION_CLOSE_TIME_MS));
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
), tv = /* @__PURE__ */ z('<div class="mdc-dialog__surface-scrim"></div>'), nv = /* @__PURE__ */ z('<div><div><div><!> <!></div></div> <div class="mdc-dialog__scrim"></div></div> <!>', 1);
function rv(n, e) {
  Ae(e, !0);
  const t = () => pi(M, "$aboveFullscreenShown", r), [r, i] = Ai(), { FocusTrap: a } = Mf, { closest: s, matches: d } = Pa;
  let l = m(e, "use", 19, () => []), c = m(e, "class", 3, ""), u = m(e, "open", 15, !1), h = m(e, "selection", 3, !1), f = m(e, "escapeKeyAction", 3, "close"), v = m(e, "scrimClickAction", 3, "close"), g = m(e, "autoStackButtons", 3, !0), p = m(e, "fullscreen", 3, !1), C = m(e, "sheet", 3, !1), A = m(e, "noContentPadding", 3, !1), E = m(e, "container$class", 3, ""), x = m(e, "surface$class", 3, ""), I = /* @__PURE__ */ ze(e, [
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
  ]), T, _ = /* @__PURE__ */ ue(void 0), y = new na(), b = Ce({}), w, D = Bn(!1), G = ye("SMUI:dialog:aboveFullscreen"), M = ye("SMUI:dialog:aboveFullscreenShown") ?? Bn(!1), N = ye("SMUI:addLayoutListener"), le, U = [], H = (F) => (U.push(F), () => {
    const O = U.indexOf(F);
    O >= 0 && U.splice(O, 1);
  });
  se("SMUI:dialog:actions:reversed", D), se("SMUI:addLayoutListener", H), se("SMUI:dialog:selection", h()), se("SMUI:dialog:aboveFullscreen", G || p()), se("SMUI:dialog:aboveFullscreenShown", M), C() && se("SMUI:icon-button:context", "dialog:sheet"), Se(() => {
    o(_) && o(_).getEscapeKeyAction() !== f() && o(_).setEscapeKeyAction(f());
  }), Se(() => {
    o(_) && o(_).getScrimClickAction() !== v() && o(_).setScrimClickAction(v());
  }), Se(() => {
    o(_) && o(_).getAutoStackButtons() !== g() && o(_).setAutoStackButtons(g());
  }), Se(() => {
    g() || Qn(D, !0);
  }), N && (le = N(Ie)), Se(() => {
    o(_) && o(_).isOpen() !== u() && (u() ? o(_).open({ isAboveFullscreenDialog: !!G }) : o(_).close());
  });
  let k = t();
  Se(() => {
    p() && o(_) && k !== t() && (k = t(), t() ? o(_).showSurfaceScrim() : o(_).hideSurfaceScrim());
  }), it(() => (w = new a(T, { initialFocusEl: ce() ?? void 0 }), W(
    _,
    new ev({
      addBodyClass: (F) => document.body.classList.add(F),
      addClass: oe,
      areButtonsStacked: () => Qh(K()),
      clickDefaultButton: () => {
        const F = q();
        F && F.click();
      },
      eventTargetMatches: (F, O) => F ? d(F, O) : !1,
      getActionFromEvent: (F) => {
        if (!F.target)
          return "";
        const O = s(F.target, "[data-mdc-dialog-action]");
        return O && O.getAttribute("data-mdc-dialog-action");
      },
      getInitialFocusEl: ce,
      hasClass: X,
      isContentScrollable: () => Yh(ge()),
      notifyClosed: (F) => {
        u(!1), Be(be(), "SMUIDialogClosed", F ? { action: F } : {});
      },
      notifyClosing: (F) => Be(be(), "SMUIDialogClosing", F ? { action: F } : {}),
      notifyOpened: () => Be(be(), "SMUIDialogOpened", {}),
      notifyOpening: () => Be(be(), "SMUIDialogOpening", {}),
      releaseFocus: () => w.releaseFocus(),
      removeBodyClass: (F) => document.body.classList.remove(F),
      removeClass: R,
      reverseButtons: () => {
        Qn(D, !0);
      },
      trapFocus: () => w.trapFocus(),
      registerContentEventHandler: (F, O) => {
        const Y = ge();
        Y instanceof HTMLElement && y.on(Y, F, O);
      },
      deregisterContentEventHandler: (F, O) => {
        const Y = ge();
        Y instanceof HTMLElement && y.off(Y, F, O);
      },
      isScrollableContentAtTop: () => Kh(ge()),
      isScrollableContentAtBottom: () => Jh(ge()),
      registerWindowEventHandler: (F, O) => y.on(window, F, O),
      deregisterWindowEventHandler: (F, O) => y.off(window, F, O)
    }),
    !0
  ), o(_).init(), () => {
    var F;
    (F = o(_)) == null || F.destroy(), y.clear();
  })), Gn(() => {
    le && le();
  });
  function X(F) {
    return F in b ? b[F] : be().classList.contains(F);
  }
  function oe(F) {
    b[F] || (b[F] = !0);
  }
  function R(F) {
    (!(F in b) || b[F]) && (b[F] = !1);
  }
  function K() {
    return [].slice.call(be().querySelectorAll(".mdc-dialog__button"));
  }
  function q() {
    return be().querySelector("[data-mdc-dialog-button-default]");
  }
  function ge() {
    return be().querySelector(".mdc-dialog__content");
  }
  function ce() {
    return be().querySelector("[data-mdc-dialog-initial-focus]");
  }
  function Q() {
    G && Qn(M, !0), requestAnimationFrame(() => {
      U.forEach((F) => F());
    });
  }
  function fe() {
    U.forEach((F) => F());
  }
  function V() {
    G && Qn(M, !1);
  }
  function de() {
    return u();
  }
  function ee(F) {
    u(F);
  }
  function Ie() {
    var F;
    return (F = o(_)) == null ? void 0 : F.layout();
  }
  function be() {
    return T;
  }
  var Ge = { isOpen: de, setOpen: ee, layout: Ie, getElement: be }, et = nv();
  hn("resize", ss, () => u() && o(_) && o(_).layout()), hn("orientationchange", ss, () => u() && o(_) && o(_).layout()), hn("keydown", Fo.body, (F) => o(_) && o(_).handleDocumentKeydown(F));
  var je = j(et), Re = (F) => {
    var O;
    Q(), (O = e.onSMUIDialogOpening) == null || O.call(e, F);
  }, at = (F) => {
    var O;
    fe(), (O = e.onSMUIDialogOpened) == null || O.call(e, F);
  }, Ft = (F) => {
    var O;
    V(), (O = e.onSMUIDialogClosed) == null || O.call(e, F);
  }, kt = (F) => {
    var O;
    o(_) && o(_).handleClick(F), (O = e.onclick) == null || O.call(e, F);
  }, P = (F) => {
    var O;
    o(_) && o(_).handleKeydown(F), (O = e.onkeydown) == null || O.call(e, F);
  };
  Ue(
    je,
    (F, O) => ({
      class: F,
      role: "alertdialog",
      "aria-modal": "true",
      ...O,
      onSMUIDialogOpening: Re,
      onSMUIDialogOpened: at,
      onSMUIDialogClosed: Ft,
      onclick: kt,
      onkeydown: P
    }),
    [
      () => He({
        "mdc-dialog": !0,
        "mdc-dialog--stacked": !g(),
        "mdc-dialog--fullscreen": p(),
        "mdc-dialog--sheet": C(),
        "mdc-dialog--no-content-padding": A(),
        "smui-dialog--selection": h(),
        ...b,
        [c()]: !0
      }),
      () => Ca(I, ["container$", "surface$"])
    ]
  );
  var Z = B(je);
  Ue(Z, (F, O) => ({ class: F, ...O }), [
    () => He({ "mdc-dialog__container": !0, [E()]: !0 }),
    () => lt(I, "container$")
  ]);
  var ae = B(Z);
  Ue(ae, (F, O) => ({ class: F, role: "alertdialog", "aria-modal": "true", ...O }), [
    () => He({ "mdc-dialog__surface": !0, [x()]: !0 }),
    () => lt(I, "surface$")
  ]);
  var xe = B(ae);
  _e(xe, () => e.children ?? pe);
  var ut = J(xe, 2);
  {
    var qt = (F) => {
      var O = tv();
      hn("transitionend", O, () => o(_) && o(_).handleSurfaceScrimTransitionEnd()), S(F, O);
    };
    $(ut, (F) => {
      p() && F(qt);
    });
  }
  we(je, (F) => T = F, () => T), Oe(je, (F, O) => te == null ? void 0 : te(F, O), l);
  var Ln = J(je, 2);
  _e(Ln, () => e.over ?? pe), S(n, et);
  var me = Ee(Ge);
  return i(), me;
}
function iv(n, e) {
  Ae(e, !0);
  let t = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return we(
    ra(n, Ke(
      {
        _smuiClass: "mdc-dialog__header",
        _smuiContexts: { "SMUI:icon-button:context": "dialog:header" },
        tag: "div"
      },
      () => t,
      {
        children: (s, d) => {
          var l = re(), c = j(l);
          _e(c, () => e.children ?? pe), S(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Ee(a);
}
function Xd(n, e) {
  Ae(e, !0);
  let t = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return we(
    ra(n, Ke({ _smuiClass: "mdc-dialog__content", tag: "div" }, () => t, {
      children: (s, d) => {
        var l = re(), c = j(l);
        _e(c, () => e.children ?? pe), S(s, l);
      },
      $$slots: { default: !0 }
    })),
    (s) => r = s,
    () => r
  ), Ee(a);
}
function av(n, e) {
  Ae(e, !0);
  let t = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return we(
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
        children: (s, d) => {
          var l = re(), c = j(l);
          _e(c, () => e.children ?? pe), S(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Ee(a);
}
const Ls = Bn({
  component: null,
  props: {},
  isOpen: !1
});
function sv(n, e) {
  Ae(e, !0);
  let t = /* @__PURE__ */ ue(void 0), r = /* @__PURE__ */ ue(!1);
  const i = Ls.subscribe((l) => {
    W(t, l, !0), W(r, l.isOpen, !0);
  });
  it(() => () => i());
  var a = re(), s = j(a);
  {
    var d = (l) => {
      var c = re(), u = j(c);
      Ma(u, () => o(t).component, (h, f) => {
        f(h, Ke(() => o(t).props, {
          get open() {
            return o(r);
          },
          set open(v) {
            W(r, v, !0);
          }
        }));
      }), S(l, c);
    };
    $(s, (l) => {
      o(t).isOpen && o(t).component && l(d);
    });
  }
  S(n, a), Ee();
}
function Rs(n, e = {}) {
  return new Promise((t) => {
    Ls.set({
      component: n,
      props: e,
      isOpen: !0,
      resolve: t
    });
  });
}
function Fr(n, e) {
  Ls.update((t) => {
    var r;
    return (r = t.resolve) == null || r.call(t, { type: n, data: e }), { component: null, props: {}, isOpen: !1 };
  });
}
function ov(n) {
  Ls.update((e) => e.isOpen ? { ...e, props: { ...e.props, ...n } } : e);
}
var lv = /* @__PURE__ */ z('<div class="oscd-confirm-dialog__content svelte-1eipd40"> </div>');
function dv(n, e) {
  Ae(e, !0);
  let t = m(e, "open", 15, !1), r = m(e, "title", 3, ""), i = m(e, "message", 3, ""), a = m(e, "confirmActionText", 3, "OK"), s = m(e, "confirmActionColor", 3, "primary"), d = m(e, "cancelActionText", 3, "Cancel"), l = m(e, "color", 3, "var(--mdc-theme-primary, #ff3e00)");
  function c() {
    Fr("confirm");
  }
  function u() {
    Fr("cancel");
  }
  Go(n, {
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
      return d();
    },
    get color() {
      return l();
    },
    onConfirm: () => c(),
    onCancel: () => u(),
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
      Xd(f, {
        children: (v, g) => {
          var p = lv(), C = B(p);
          ve(() => Pe(C, i())), S(v, p);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { content: !0 }
  }), Ee();
}
var uv = /* @__PURE__ */ z('<div class="dialog__title svelte-ec2c4h"><h4 class="svelte-ec2c4h"> </h4> <!></div>'), cv = /* @__PURE__ */ z("<!> <!>", 1), fv = /* @__PURE__ */ z('<!> <!> <div class="dialog__actions svelte-ec2c4h"><!></div>', 1);
function Go(n, e) {
  Ae(e, !0);
  let t = m(e, "open", 15, !1), r = m(e, "title", 3, ""), i = m(e, "confirmActionText", 3, "Confirm"), a = m(e, "confirmActionColor", 3, "primary"), s = m(e, "cancelActionText", 3, "Cancel"), d = m(e, "width", 3, "80vw"), l = m(e, "maxWidth", 3, "85vw"), c = m(e, "height", 3, "85vh"), u = m(e, "maxHeight", 3, "85vh"), h = m(e, "confirmDisabled", 3, !1), f = m(e, "color", 3, "var(--mdc-theme-primary, #ff3e00)"), v = m(e, "showCloseButton", 3, !0), g = m(e, "onClose", 3, () => {
  }), p = m(e, "onCancel", 3, () => {
  }), C = m(e, "onConfirm", 3, () => {
  });
  function A(x) {
    x.detail.action === "cancel" ? p()() : x.detail.action === "confirm" ? C()() : (x.detail.action, g()());
  }
  let E = /* @__PURE__ */ ie(() => {
    let x;
    return a() === "primary" ? x = f() : x = "#FF203A", h() ? "" : `background-color: ${x}; color: white;`;
  });
  {
    let x = /* @__PURE__ */ ie(() => `width: ${d()}; max-width: ${l()}; height: ${c()}; max-height: ${u()};`);
    rv(n, {
      "aria-labelledby": "large-scroll-title",
      "aria-describedby": "large-scroll-content",
      onSMUIDialogClosed: A,
      get surface$style() {
        return o(x);
      },
      get open() {
        return t();
      },
      set open(I) {
        t(I);
      },
      children: (I, T) => {
        var _ = fv(), y = j(_);
        iv(y, {
          children: (G, M) => {
            var N = uv(), le = B(N), U = B(le), H = J(le, 2);
            {
              var k = (X) => {
                eu(X, {
                  onClick: () => {
                    t(!1), g()();
                  },
                  tooltip: "Close",
                  tooltipSide: "left",
                  type: "close",
                  fillColor: "white"
                });
              };
              $(H, (X) => {
                v() && X(k);
              });
            }
            ve(() => {
              nt(N, `background-color: ${f()};`), Pe(U, r());
            }), S(G, N);
          },
          $$slots: { default: !0 }
        });
        var b = J(y, 2);
        Xd(b, {
          id: "dialog__content",
          children: (G, M) => {
            var N = re(), le = j(N);
            _e(le, () => e.content ?? pe), S(G, N);
          },
          $$slots: { default: !0 }
        });
        var w = J(b, 2), D = B(w);
        av(D, {
          class: "oscd-dialog__actions",
          children: (G, M) => {
            var N = cv(), le = j(N);
            {
              var U = (k) => {
                Hr(k, {
                  action: "cancel",
                  color: "secondary",
                  tabindex: "1",
                  children: (X, oe) => {
                    var R = dt();
                    ve(() => Pe(R, s())), S(X, R);
                  },
                  $$slots: { default: !0 }
                });
              };
              $(le, (k) => {
                s() && k(U);
              });
            }
            var H = J(le, 2);
            Hr(H, {
              action: "confirm",
              get disabled() {
                return h();
              },
              get style() {
                return o(E);
              },
              tabindex: "0",
              children: (k, X) => {
                var oe = dt();
                ve(() => Pe(oe, i())), S(k, oe);
              },
              $$slots: { default: !0 }
            }), S(G, N);
          },
          $$slots: { default: !0 }
        }), S(I, _);
      },
      $$slots: { default: !0 }
    });
  }
  Ee();
}
var hv = /* @__PURE__ */ z('<span class="oscd-icon"><!></span>');
function Dt(n, e) {
  var t = hv(), r = B(t);
  _e(r, () => e.children ?? pe), S(n, t);
}
var vv = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function gv(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Dt(n, {
    children: (r, i) => {
      var a = vv();
      ve(() => nt(a, t())), S(r, a);
    }
  });
}
var mv = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function Yd(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Dt(n, {
    children: (r, i) => {
      var a = mv();
      ve(() => nt(a, t())), S(r, a);
    }
  });
}
var pv = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function Kd(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Dt(n, {
    children: (r, i) => {
      var a = pv();
      ve(() => nt(a, t())), S(r, a);
    }
  });
}
var Iv = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"></path></svg>');
function Jd(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Dt(n, {
    children: (r, i) => {
      var a = Iv();
      ve(() => nt(a, t())), S(r, a);
    }
  });
}
var bv = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM2 12c0-2.79 1.64-5.2 4.01-6.32V3.52C2.52 4.76 0 8.09 0 12s2.52 7.24 6.01 8.48v-2.16C3.64 17.2 2 14.79 2 12zm13-9c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"></path></svg>');
function _v(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Dt(n, {
    children: (r, i) => {
      var a = bv();
      ve(() => nt(a, t())), S(r, a);
    }
  });
}
ic();
var yv = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24" height="24" fill="#004552"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"></path></svg>');
function Cv(n) {
  var e = yv();
  S(n, e);
}
var Av = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#004552"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Ev(n) {
  var e = Av();
  S(n, e);
}
var Sv = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"></path></svg>');
function xv(n, e) {
  let t = m(e, "size", 3, "24px"), r = m(e, "fill", 3, "#004552");
  var i = Sv();
  ve(() => {
    Qt(i, "height", t()), Qt(i, "width", t()), Qt(i, "fill", r());
  }), S(n, i);
}
var wv = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Tv(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Dt(n, {
    children: (r, i) => {
      var a = wv();
      ve(() => nt(a, t())), S(r, a);
    }
  });
}
var Dv = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Lv(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Dt(n, {
    children: (r, i) => {
      var a = Dv();
      ve(() => nt(a, t())), S(r, a);
    }
  });
}
var Rv = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"></path></svg>');
function Ov(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Dt(n, {
    children: (r, i) => {
      var a = Rv();
      ve(() => nt(a, t())), S(r, a);
    }
  });
}
var Mv = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"></path></svg>');
function Pv(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Dt(n, {
    children: (r, i) => {
      var a = Mv();
      ve(() => nt(a, t())), S(r, a);
    }
  });
}
var Fv = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"></path></svg>');
function kv(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Dt(n, {
    children: (r, i) => {
      var a = Fv();
      ve(() => nt(a, t())), S(r, a);
    }
  });
}
var Nv = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"><path d="m176-120-56-56 301-302-181-45 198-123-17-234 179 151 216-88-87 217 151 178-234-16-124 198-45-181-301 301Zm24-520-80-80 80-80 80 80-80 80Zm355 197 48-79 93 7-60-71 35-86-86 35-71-59 7 92-79 49 90 22 23 90Zm165 323-80-80 80-80 80 80-80 80ZM569-570Z"></path></svg>');
function Hv(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Dt(n, {
    children: (r, i) => {
      var a = Nv();
      ve(() => nt(a, t())), S(r, a);
    }
  });
}
var Uv = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m770-302-60-62q40-11 65-42.5t25-73.5q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 57-29.5 105T770-302ZM634-440l-80-80h86v80h-6ZM792-56 56-792l56-56 736 736-56 56ZM440-280H280q-83 0-141.5-58.5T80-480q0-69 42-123t108-71l74 74h-24q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h65l79 80H320Z"></path></svg>');
function Bv(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Dt(n, {
    children: (r, i) => {
      var a = Uv();
      ve(() => nt(a, t())), S(r, a);
    }
  });
}
var Gv = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"></path></svg>');
function Wv(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Dt(n, {
    children: (r, i) => {
      var a = Gv();
      ve(() => nt(a, t())), S(r, a);
    }
  });
}
var Vv = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"></path></svg>');
function Zv(n, e) {
  let t = m(e, "svgStyles", 8, "");
  Dt(n, {
    children: (r, i) => {
      var a = Vv();
      ve(() => nt(a, t())), S(r, a);
    }
  });
}
var zv = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3" cursor="pointer"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Qd(n, e) {
  let t = m(e, "svgStyles", 8, "");
  Dt(n, {
    children: (r, i) => {
      var a = zv();
      ve(() => nt(a, t())), S(r, a);
    }
  });
}
var jv = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m320-160-56-57 103-103H80v-80h287L264-503l56-57 200 200-200 200Zm320-240L440-600l200-200 56 57-103 103h287v80H593l103 103-56 57Z"></path></svg>');
function qv(n, e) {
  let t = m(e, "svgStyles", 8, "");
  Dt(n, {
    children: (r, i) => {
      var a = jv();
      ve(() => nt(a, t())), S(r, a);
    }
  });
}
var Xv = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M360-160q-33 0-56.5-23.5T280-240q0-33 23.5-56.5T360-320q33 0 56.5 23.5T440-240q0 33-23.5 56.5T360-160Zm240 0q-33 0-56.5-23.5T520-240q0-33 23.5-56.5T600-320q33 0 56.5 23.5T680-240q0 33-23.5 56.5T600-160ZM360-400q-33 0-56.5-23.5T280-480q0-33 23.5-56.5T360-560q33 0 56.5 23.5T440-480q0 33-23.5 56.5T360-400Zm240 0q-33 0-56.5-23.5T520-480q0-33 23.5-56.5T600-560q33 0 56.5 23.5T680-480q0 33-23.5 56.5T600-400ZM360-640q-33 0-56.5-23.5T280-720q0-33 23.5-56.5T360-800q33 0 56.5 23.5T440-720q0 33-23.5 56.5T360-640Zm240 0q-33 0-56.5-23.5T520-720q0-33 23.5-56.5T600-800q33 0 56.5 23.5T680-720q0 33-23.5 56.5T600-640Z"></path></svg>');
function Wo(n, e) {
  let t = m(e, "svgStyles", 3, "fill: gray; width: 25px; height: 25px");
  Dt(n, {
    children: (r, i) => {
      var a = Xv();
      ve(() => nt(a, t())), S(r, a);
    }
  });
}
Tt(["change"]);
Tt(["change"]);
var Yv = /* @__PURE__ */ z('<span role="tooltip" aria-labelledby="tooltip"><!></span>');
function $d(n, e) {
  Ae(e, !0);
  let t = m(e, "content", 3, ""), r = m(e, "side", 3, "top"), i = m(e, "hoverDelay", 3, 0), a = m(e, "transitionDuration", 3, 80);
  const s = `tt-${Math.random().toString(36).slice(2)}`;
  let d = /* @__PURE__ */ ue(null), l = /* @__PURE__ */ ue(null), c = /* @__PURE__ */ ue(null), u = /* @__PURE__ */ ue(null), h = /* @__PURE__ */ ue(!1), f = /* @__PURE__ */ ue(null), v = /* @__PURE__ */ ue(null);
  function g() {
    t() && (i() > 0 ? W(f, setTimeout(() => W(h, !0), i()), !0) : W(h, !0));
  }
  function p() {
    o(f) && clearTimeout(o(f)), W(h, !1);
  }
  function C() {
    if (!o(l) || !o(u) || !o(d)) return;
    const I = o(d).getBoundingClientRect(), T = o(u).getBoundingClientRect();
    let _ = 0, y = 0;
    const b = 8;
    switch (r()) {
      case "top":
        _ = I.top - T.height - b, y = I.left + I.width / 2 - T.width / 2;
        break;
      case "bottom":
        _ = I.bottom + b, y = I.left + I.width / 2 - T.width / 2;
        break;
      case "left":
        _ = I.top + I.height / 2 - T.height / 2, y = I.left - T.width - b;
        break;
      case "right":
        _ = I.top + I.height / 2 - T.height / 2, y = I.right + b;
        break;
    }
    o(l).style.top = `${_ + window.scrollY}px`, o(l).style.left = `${y + window.scrollX}px`;
  }
  function A() {
    var I;
    (I = o(v)) == null || I.disconnect(), W(v, null), o(l) && o(l).parentNode && o(l).parentNode.removeChild(o(l)), W(l, null), W(u, null), W(c, null), o(f) && clearTimeout(o(f));
  }
  Gn(A), Se(() => {
    if (!(!o(h) || !t())) {
      if (!o(l)) {
        W(l, document.createElement("div"), !0), o(l).style.position = "absolute", o(l).style.zIndex = "9999", o(l).style.pointerEvents = "none", o(l).style.opacity = "0", o(l).style.transition = `opacity ${a()}ms ease`, o(l).id = s, o(l).setAttribute("role", "tooltip"), document.body.appendChild(o(l)), W(c, o(l).attachShadow({ mode: "open" }), !0);
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
      `, o(c).appendChild(I), W(u, document.createElement("div"), !0), o(c).appendChild(o(u)), W(
          v,
          new MutationObserver(() => {
            o(h) && C();
          }),
          !0
        ), o(v).observe(document.body, { childList: !0, subtree: !0 });
      }
      o(u) && (o(u).className = `bubble ${r()}`, o(u).innerHTML = t()), o(l) && (o(l).style.opacity = "1", C());
    }
  }), Se(() => {
    if (o(h) || !o(l))
      return;
    o(l).style.opacity = "0";
    const I = o(l), T = setTimeout(
      () => {
        I && I.parentNode && I.parentNode.removeChild(I), o(l) === I && A();
      },
      a()
    );
    return () => clearTimeout(T);
  });
  var E = Yv(), x = B(E);
  _e(x, () => e.children ?? pe), we(E, (I) => W(d, I), () => o(d)), ve(() => Qt(E, "aria-describedby", t() ? s : void 0)), hn("mouseenter", E, g), hn("mouseleave", E, p), S(n, E), Ee();
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
}, Dl = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, ei = {
  ARIA_SELECTED: Dl.ARIA_SELECTED,
  ARIA_SORT: Dl.ARIA_SORT
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
var Kv = (
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
      return Cf(this, void 0, void 0, function() {
        return Af(this, function(t) {
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
      var d = this.adapter.getAttributeByHeaderCellIndex(i, ei.ARIA_SORT), l = fn.NONE;
      d === fn.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, dr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, ei.ARIA_SORT, fn.DESCENDING), l = fn.DESCENDING) : d === fn.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, dr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, ei.ARIA_SORT, fn.ASCENDING), l = fn.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, ei.ARIA_SORT, fn.ASCENDING), l = fn.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, l), this.adapter.notifySortAction({
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
), Jv = /* @__PURE__ */ z('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), Qv = /* @__PURE__ */ z("<div><div><table><!></table></div> <!> <!></div>");
function $v(n, e) {
  Ae(e, !0);
  const t = () => pi(N, "$progressClosed", r), [r, i] = Ai(), { closest: a } = Pa;
  let s = m(e, "use", 19, () => []), d = m(e, "class", 3, ""), l = m(e, "stickyHeader", 3, !1), c = m(e, "sortable", 3, !1), u = m(e, "sort", 15, null), h = m(e, "sortDirection", 15, "ascending"), f = m(e, "sortAscendingAriaLabel", 3, "sorted, ascending"), v = m(e, "sortDescendingAriaLabel", 3, "sorted, descending"), g = m(e, "container$use", 19, () => []), p = m(e, "container$class", 3, ""), C = m(e, "table$use", 19, () => []), A = m(e, "table$class", 3, ""), E = /* @__PURE__ */ ze(e, [
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
  ]), x, I = /* @__PURE__ */ ue(void 0), T, _ = /* @__PURE__ */ ue(void 0), y = /* @__PURE__ */ ue(void 0), b = Ce({}), w = /* @__PURE__ */ ue(Ce({ height: "auto", top: "initial" })), D = ye("SMUI:addLayoutListener"), G, M = !1, N = Bn(!1), le = Bn(u());
  Se(() => {
    Qn(le, u());
  });
  let U = Bn(h());
  Se(() => {
    Qn(U, h());
  }), se("SMUI:checkbox:context", "data-table"), se("SMUI:linear-progress:context", "data-table"), se("SMUI:linear-progress:closed", N), se("SMUI:data-table:sortable", c()), se("SMUI:data-table:sort", le), se("SMUI:data-table:sortDirection", U), se("SMUI:data-table:sortAscendingAriaLabel", f()), se("SMUI:data-table:sortDescendingAriaLabel", v()), D && (G = D(ce));
  let H;
  Se(() => {
    e.progress && o(I) && H !== t() && (H = t(), t() ? o(I).hideProgress() : o(I).showProgress());
  }), se("SMUI:checkbox:mount", () => {
    o(I) && M && o(I).layout();
  }), se("SMUI:data-table:header:mount", (P) => {
    W(_, P, !0);
  }), se("SMUI:data-table:header:unmount", () => {
    W(_, void 0);
  }), se("SMUI:data-table:body:mount", (P) => {
    W(y, P, !0);
  }), se("SMUI:data-table:body:unmount", () => {
    W(y, void 0);
  }), it(() => (W(
    I,
    new Kv({
      addClass: X,
      removeClass: oe,
      getHeaderCellElements: () => {
        var P;
        return ((P = o(_)) == null ? void 0 : P.cells.map((Z) => Z.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var P;
        return ((P = o(_)) == null ? void 0 : P.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (P, Z) => {
        var ae;
        return ((ae = o(_)) == null ? void 0 : ae.orderedCells[P].getAttr(Z)) ?? null;
      },
      setAttributeByHeaderCellIndex: (P, Z, ae) => {
        var xe;
        (xe = o(_)) == null || xe.orderedCells[P].addAttr(Z, ae);
      },
      setClassNameByHeaderCellIndex: (P, Z) => {
        var ae;
        (ae = o(_)) == null || ae.orderedCells[P].addClass(Z);
      },
      removeClassNameByHeaderCellIndex: (P, Z) => {
        var ae;
        (ae = o(_)) == null || ae.orderedCells[P].removeClass(Z);
      },
      notifySortAction: (P) => {
        u(P.columnId), h(P.sortValue), Be(Q(), "SMUIDataTableSorted", P);
      },
      getTableContainerHeight: () => T.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const P = Q().querySelector(".mdc-data-table__header-row");
        if (!P)
          throw new Error("MDCDataTable: Table header element not found.");
        return P.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (P) => {
        W(w, P, !0);
      },
      addClassAtRowIndex: (P, Z) => {
        var ae;
        (ae = o(y)) == null || ae.orderedRows[P].addClass(Z);
      },
      getRowCount: () => {
        var P;
        return ((P = o(y)) == null ? void 0 : P.rows.length) ?? 0;
      },
      getRowElements: () => {
        var P;
        return ((P = o(y)) == null ? void 0 : P.rows.map((Z) => Z.element)) ?? [];
      },
      getRowIdAtIndex: (P) => {
        var Z;
        return ((Z = o(y)) == null ? void 0 : Z.orderedRows[P].rowId) ?? null;
      },
      getRowIndexByChildElement: (P) => {
        var Z;
        return ((Z = o(y)) == null ? void 0 : Z.orderedRows.map((ae) => ae.element).indexOf(a(P, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var P;
        return ((P = o(y)) == null ? void 0 : P.rows.filter((Z) => Z.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (P) => {
        var ae;
        const Z = (ae = o(y)) == null ? void 0 : ae.orderedRows[P].checkbox;
        return Z ? Z.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var Z;
        const P = (Z = o(_)) == null ? void 0 : Z.checkbox;
        return P ? P.checked : !1;
      },
      isRowsSelectable: () => !!Q().querySelector(".mdc-data-table__row-checkbox") || !!Q().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (P) => {
        var ae;
        const Z = (ae = o(y)) == null ? void 0 : ae.orderedRows[P.rowIndex];
        Z && Be(Q(), "SMUIDataTableSelectionChanged", {
          row: Z.element,
          rowId: Z.rowId,
          rowIndex: P.rowIndex,
          selected: P.selected
        });
      },
      notifySelectedAll: () => {
        R(!1), Be(Q(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        R(!1), Be(Q(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (P) => Be(Q(), "SMUIDataTableClickRow", P),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (P, Z) => {
        var ae;
        (ae = o(y)) == null || ae.orderedRows[P].removeClass(Z);
      },
      setAttributeAtRowIndex: (P, Z, ae) => {
        var xe;
        (xe = o(y)) == null || xe.orderedRows[P].addAttr(Z, ae);
      },
      setHeaderRowCheckboxChecked: (P) => {
        var ae;
        const Z = (ae = o(_)) == null ? void 0 : ae.checkbox;
        Z && (Z.checked = P);
      },
      setHeaderRowCheckboxIndeterminate: R,
      setRowCheckboxCheckedAtIndex: (P, Z) => {
        var xe;
        const ae = (xe = o(y)) == null ? void 0 : xe.orderedRows[P].checkbox;
        ae && (ae.checked = Z);
      },
      setSortStatusLabelByHeaderCellIndex: (P, Z) => {
      }
    }),
    !0
  ), o(I).init(), o(I).layout(), M = !0, () => {
    var P;
    (P = o(I)) == null || P.destroy();
  })), Gn(() => {
    G && G();
  });
  function k(P) {
    o(I) && o(I).handleRowCheckboxChange(P);
  }
  function X(P) {
    b[P] || (b[P] = !0);
  }
  function oe(P) {
    (!(P in b) || b[P]) && (b[P] = !1);
  }
  function R(P) {
    var ae;
    const Z = (ae = o(_)) == null ? void 0 : ae.checkbox;
    Z && (Z.indeterminate = P);
  }
  function K(P) {
    if (!o(I) || !P.detail.target)
      return;
    const Z = a(P.detail.target, ".mdc-data-table__header-cell--with-sort");
    Z && ge(Z);
  }
  function q(P) {
    if (!o(I) || !P.detail.target)
      return;
    const Z = a(P.detail.target, ".mdc-data-table__row");
    Z && o(I) && o(I).handleRowClick({ rowId: P.detail.rowId, row: Z });
  }
  function ge(P) {
    var ut, qt;
    const Z = ((ut = o(_)) == null ? void 0 : ut.orderedCells) ?? [], ae = Z.map((Ln) => Ln.element).indexOf(P);
    if (ae === -1)
      return;
    const xe = Z[ae].columnId ?? null;
    (qt = o(I)) == null || qt.handleSortAction({ columnId: xe, columnIndex: ae, headerCell: P });
  }
  function ce() {
    var P;
    return (P = o(I)) == null ? void 0 : P.layout();
  }
  function Q() {
    return x;
  }
  var fe = { layout: ce, getElement: Q }, V = Qv(), de = (P) => {
    var Z;
    o(I) && o(I).handleHeaderRowCheckboxChange(), (Z = e.onSMUIDataTableHeaderCheckboxChange) == null || Z.call(e, P);
  }, ee = (P) => {
    var Z;
    K(P), (Z = e.onSMUIDataTableHeaderClick) == null || Z.call(e, P);
  }, Ie = (P) => {
    var Z;
    q(P), (Z = e.onSMUIDataTableRowClick) == null || Z.call(e, P);
  }, be = (P) => {
    var Z;
    k(P), (Z = e.onSMUIDataTableBodyCheckboxChange) == null || Z.call(e, P);
  };
  Ue(
    V,
    (P, Z) => ({
      class: P,
      ...Z,
      onSMUIDataTableHeaderCheckboxChange: de,
      onSMUIDataTableHeaderClick: ee,
      onSMUIDataTableRowClick: Ie,
      onSMUIDataTableBodyCheckboxChange: be
    }),
    [
      () => He({
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": l(),
        ...b,
        [d()]: !0
      }),
      () => Ca(E, ["container$", "table$"])
    ]
  );
  var Ge = B(V);
  Ue(Ge, (P, Z) => ({ class: P, ...Z }), [
    () => He({
      "mdc-data-table__table-container": !0,
      [p()]: !0
    }),
    () => lt(E, "container$")
  ]);
  var et = B(Ge);
  Ue(et, (P, Z) => ({ class: P, ...Z }), [
    () => He({ "mdc-data-table__table": !0, [A()]: !0 }),
    () => lt(E, "table$")
  ]);
  var je = B(et);
  _e(je, () => e.children ?? pe), Oe(et, (P, Z) => te == null ? void 0 : te(P, Z), C), we(Ge, (P) => T = P, () => T), Oe(Ge, (P, Z) => te == null ? void 0 : te(P, Z), g);
  var Re = J(Ge, 2);
  {
    var at = (P) => {
      var Z = Jv(), ae = J(B(Z), 2);
      _e(ae, () => e.progress ?? pe), ve((xe) => nt(Z, xe), [
        () => Object.entries(o(w)).map(([xe, ut]) => `${xe}: ${ut};`).join(" ")
      ]), S(P, Z);
    };
    $(Re, (P) => {
      e.progress && P(at);
    });
  }
  var Ft = J(Re, 2);
  _e(Ft, () => e.paginate ?? pe), we(V, (P) => x = P, () => x), Oe(V, (P, Z) => te == null ? void 0 : te(P, Z), s), S(n, V);
  var kt = Ee(fe);
  return i(), kt;
}
var eg = /* @__PURE__ */ z("<thead><!></thead>");
function tg(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i, a = /* @__PURE__ */ ue(void 0), s = [];
  const d = /* @__PURE__ */ new WeakMap();
  se("SMUI:data-table:row:header", !0);
  const l = ye("SMUI:checkbox:mount");
  se("SMUI:checkbox:mount", (A) => {
    W(a, A, !0), l && l(A);
  });
  const c = ye("SMUI:checkbox:unmount");
  se("SMUI:checkbox:unmount", (A) => {
    W(a, void 0), c && c(A);
  }), se("SMUI:data-table:cell:mount", (A) => {
    s.push(A), d.set(A.element, A);
  }), se("SMUI:data-table:cell:unmount", (A) => {
    const E = s.findIndex((x) => x === A);
    E !== -1 && s.splice(E, 1), d.delete(A.element);
  });
  const u = ye("SMUI:data-table:header:mount"), h = ye("SMUI:data-table:header:unmount");
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
    return u && u(A), () => {
      h && h(A);
    };
  });
  function f() {
    return [
      ...v().querySelectorAll(".mdc-data-table__header-cell")
    ].map((A) => d.get(A)).filter((A) => A && A._smui_data_table_header_cell_accessor);
  }
  function v() {
    return i;
  }
  var g = { getElement: v }, p = eg();
  Ue(p, () => ({ ...r }));
  var C = B(p);
  return _e(C, () => e.children ?? pe), we(p, (A) => i = A, () => i), Oe(p, (A, E) => te == null ? void 0 : te(A, E), t), S(n, p), Ee(g);
}
var ng = /* @__PURE__ */ z("<tbody><!></tbody>");
function rg(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "children"
  ]), a, s = [];
  const d = /* @__PURE__ */ new WeakMap();
  se("SMUI:data-table:row:header", !1), se("SMUI:data-table:row:mount", (p) => {
    s.push(p), d.set(p.element, p);
  }), se("SMUI:data-table:row:unmount", (p) => {
    const C = s.findIndex((A) => A === p);
    C !== -1 && s.splice(C, 1), d.delete(p.element);
  });
  const l = ye("SMUI:data-table:body:mount"), c = ye("SMUI:data-table:body:unmount");
  it(() => {
    const p = {
      get rows() {
        return s;
      },
      get orderedRows() {
        return u();
      }
    };
    return l && l(p), () => {
      c && c(p);
    };
  });
  function u() {
    return [...h().querySelectorAll(".mdc-data-table__row")].map((p) => d.get(p)).filter((p) => p && p._smui_data_table_row_accessor);
  }
  function h() {
    return a;
  }
  var f = { getElement: h }, v = ng();
  Ue(v, (p) => ({ class: p, ...i }), [
    () => He({ "mdc-data-table__content": !0, [r()]: !0 })
  ]);
  var g = B(v);
  return _e(g, () => e.children ?? pe), we(v, (p) => a = p, () => a), Oe(v, (p, C) => te == null ? void 0 : te(p, C), t), S(n, v), Ee(f);
}
let ig = 0;
var ag = /* @__PURE__ */ z("<tr><!></tr>");
function Ll(n, e) {
  Ae(e, !0);
  let t = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "rowId", 19, () => "SMUI-data-table-row-" + ig++), a = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "rowId",
    "children"
  ]), s, d = /* @__PURE__ */ ue(void 0), l = Ce({}), c = Ce({}), u = ye("SMUI:data-table:row:header");
  const h = ye("SMUI:checkbox:mount");
  se("SMUI:checkbox:mount", (D) => {
    W(d, D, !0), h && h(D);
  });
  const f = ye("SMUI:checkbox:unmount");
  se("SMUI:checkbox:unmount", (D) => {
    W(d, void 0), f && f(D);
  });
  const v = ye("SMUI:data-table:row:mount"), g = ye("SMUI:data-table:row:unmount");
  it(() => {
    const D = u ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return T();
      },
      get checkbox() {
        return o(d);
      },
      get rowId() {
      },
      get selected() {
        return (o(d) && o(d).checked) ?? !1;
      },
      addClass: p,
      removeClass: C,
      getAttr: A,
      addAttr: E
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return T();
      },
      get checkbox() {
        return o(d);
      },
      get rowId() {
        return i();
      },
      get selected() {
        return (o(d) && o(d).checked) ?? !1;
      },
      addClass: p,
      removeClass: C,
      getAttr: A,
      addAttr: E
    };
    return v && v(D), () => {
      g && g(D);
    };
  });
  function p(D) {
    l[D] || (l[D] = !0);
  }
  function C(D) {
    (!(D in l) || l[D]) && (l[D] = !1);
  }
  function A(D) {
    return D in c ? c[D] ?? null : T().getAttribute(D);
  }
  function E(D, G) {
    c[D] !== G && (c[D] = G);
  }
  function x(D) {
    Be(T(), "SMUIDataTableHeaderClick", D);
  }
  function I(D) {
    Be(T(), "SMUIDataTableRowClick", { rowId: i(), target: D.target });
  }
  function T() {
    return s;
  }
  var _ = { getElement: T }, y = ag(), b = (D) => {
    var G;
    u ? x(D) : I(D), (G = e.onclick) == null || G.call(e, D);
  };
  Ue(
    y,
    (D) => ({
      class: D,
      "aria-selected": o(d) ? o(d).checked ? "true" : "false" : void 0,
      ...c,
      ...a,
      onclick: b
    }),
    [
      () => He({
        "mdc-data-table__header-row": u,
        "mdc-data-table__row": !u,
        "mdc-data-table__row--selected": !u && o(d) && o(d).checked,
        ...l,
        [r()]: !0
      })
    ]
  );
  var w = B(y);
  return _e(w, () => e.children ?? pe), we(y, (D) => s = D, () => s), Oe(y, (D, G) => te == null ? void 0 : te(D, G), t), S(n, y), Ee(_);
}
let sg = 0;
var og = /* @__PURE__ */ z('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), lg = /* @__PURE__ */ z("<th><!></th>"), dg = /* @__PURE__ */ z("<td><!></td>");
function qa(n, e) {
  Ae(e, !0);
  const t = () => pi(A, "$sort", i), r = () => pi(E, "$sortDirection", i), [i, a] = Ai();
  let s = ye("SMUI:data-table:row:header"), d = m(e, "use", 19, () => []), l = m(e, "class", 3, ""), c = m(e, "numeric", 3, !1), u = m(e, "checkbox", 3, !1), h = m(e, "columnId", 19, () => s ? "SMUI-data-table-column-" + sg++ : "SMUI-data-table-unused"), f = m(e, "sortable", 19, () => ye("SMUI:data-table:sortable")), v = /* @__PURE__ */ ze(e, [
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
  ]), g, p = Ce({}), C = Ce({}), A = ye("SMUI:data-table:sort"), E = ye("SMUI:data-table:sortDirection"), x = ye("SMUI:data-table:sortAscendingAriaLabel"), I = ye("SMUI:data-table:sortDescendingAriaLabel");
  f() && (se("SMUI:label:context", "data-table:sortable-header-cell"), se("SMUI:icon-button:context", "data-table:sortable-header-cell"), se("SMUI:icon-button:aria-describedby", h() + "-status-label"));
  const T = ye("SMUI:data-table:cell:mount"), _ = ye("SMUI:data-table:cell:unmount");
  it(() => {
    const R = s ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return N();
      },
      get columnId() {
        return h();
      },
      addClass: y,
      removeClass: b,
      getAttr: w,
      addAttr: D
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return N();
      },
      get columnId() {
      },
      addClass: y,
      removeClass: b,
      getAttr: w,
      addAttr: D
    };
    return T && T(R), () => {
      _ && _(R);
    };
  });
  function y(R) {
    p[R] || (p[R] = !0);
  }
  function b(R) {
    (!(R in p) || p[R]) && (p[R] = !1);
  }
  function w(R) {
    return R in C ? C[R] ?? null : N().getAttribute(R);
  }
  function D(R, K) {
    C[R] !== K && (C[R] = K);
  }
  function G(R) {
    Be(N(), "SMUIDataTableHeaderCheckboxChange", R);
  }
  function M(R) {
    Be(N(), "SMUIDataTableBodyCheckboxChange", R);
  }
  function N() {
    return g;
  }
  var le = { getElement: N }, U = re(), H = j(U);
  {
    var k = (R) => {
      var K = lg(), q = (fe) => {
        var V;
        u() && G(fe), (V = e.onchange) == null || V.call(e, fe);
      };
      Ue(
        K,
        (fe) => ({
          class: fe,
          role: "columnheader",
          scope: "col",
          "data-column-id": h(),
          "aria-sort": f() ? t() === h() ? r() : "none" : void 0,
          ...C,
          ...v,
          onchange: q
        }),
        [
          () => He({
            "mdc-data-table__header-cell": !0,
            "mdc-data-table__header-cell--numeric": c(),
            "mdc-data-table__header-cell--checkbox": u(),
            "mdc-data-table__header-cell--with-sort": f(),
            "mdc-data-table__header-cell--sorted": f() && t() === h(),
            ...p,
            [l()]: !0
          })
        ]
      );
      var ge = B(K);
      {
        var ce = (fe) => {
          var V = og(), de = B(V);
          _e(de, () => e.children ?? pe);
          var ee = J(de, 2), Ie = B(ee);
          ve(() => {
            Qt(ee, "id", `${h() ?? ""}-status-label`), Pe(Ie, t() === h() ? r() === "ascending" ? x : I : "");
          }), S(fe, V);
        }, Q = (fe) => {
          var V = re(), de = j(V);
          _e(de, () => e.children ?? pe), S(fe, V);
        };
        $(ge, (fe) => {
          f() ? fe(ce) : fe(Q, !1);
        });
      }
      we(K, (fe) => g = fe, () => g), Oe(K, (fe, V) => te == null ? void 0 : te(fe, V), d), S(R, K);
    }, X = (R) => {
      var K = dg(), q = (ce) => {
        var Q;
        u() && M(ce), (Q = e.onchange) == null || Q.call(e, ce);
      };
      Ue(
        K,
        (ce) => ({
          class: ce,
          ...C,
          ...v,
          onchange: q
        }),
        [
          () => He({
            "mdc-data-table__cell": !0,
            "mdc-data-table__cell--numeric": c(),
            "mdc-data-table__cell--checkbox": u(),
            ...p,
            [l()]: !0
          })
        ]
      );
      var ge = B(K);
      _e(ge, () => e.children ?? pe), we(K, (ce) => g = ce, () => g), Oe(K, (ce, Q) => te == null ? void 0 : te(ce, Q), d), S(R, K);
    };
    $(H, (R) => {
      s ? R(k) : R(X, !1);
    });
  }
  S(n, U);
  var oe = Ee(le);
  return a(), oe;
}
var ug = /* @__PURE__ */ z('<p class="status svelte-185z1ay">Loading…</p>'), cg = /* @__PURE__ */ z('<p class="status error svelte-185z1ay"> </p>'), fg = /* @__PURE__ */ z('<p class="status svelte-185z1ay"> </p>'), hg = /* @__PURE__ */ z("<!> <!>", 1), vg = /* @__PURE__ */ z("<!> <!>", 1), gg = /* @__PURE__ */ z("<!> <!>", 1);
function mg(n, e) {
  Ae(e, !0);
  let t = /* @__PURE__ */ ue(null), r = m(e, "items", 19, () => []), i = m(e, "columns", 19, () => []), a = m(e, "loading", 3, !1), s = m(e, "errorMsg", 3, ""), d = m(e, "emptyText", 3, "Nothing to show."), l = m(e, "getRowId", 3, (A, E) => (A && (A.id ?? A.key)) ?? E), c = m(e, "headerBg", 3, null), u = m(e, "rowBg", 3, null), h = m(e, "hasActions", 3, !1), f = /* @__PURE__ */ ie(() => h() || !!e.actions);
  var v = re(), g = j(v);
  {
    var p = (A) => {
      var E = ug();
      S(A, E);
    }, C = (A) => {
      var E = re(), x = j(E);
      {
        var I = (_) => {
          var y = cg(), b = B(y);
          ve(() => Pe(b, s())), S(_, y);
        }, T = (_) => {
          var y = re(), b = j(y);
          {
            var w = (G) => {
              var M = fg(), N = B(M);
              ve(() => Pe(N, d())), S(G, M);
            }, D = (G) => {
              $v(G, {
                style: "width: 100%;",
                children: (M, N) => {
                  var le = gg(), U = j(le);
                  {
                    let k = /* @__PURE__ */ ie(() => c() ? `background-color:${c()}` : void 0);
                    tg(U, {
                      get style() {
                        return o(k);
                      },
                      children: (X, oe) => {
                        Ll(X, {
                          children: (R, K) => {
                            var q = hg(), ge = j(q);
                            vn(ge, 17, i, hr, (fe, V) => {
                              {
                                let de = /* @__PURE__ */ ie(() => [
                                  o(V).width ? `width:${o(V).width}` : "",
                                  c() ? `background-color:${c()}` : ""
                                ].filter(Boolean).join(";"));
                                qa(fe, {
                                  header: !0,
                                  get style() {
                                    return o(de);
                                  },
                                  children: (ee, Ie) => {
                                    var be = dt();
                                    ve(() => Pe(be, o(V).header)), S(ee, be);
                                  },
                                  $$slots: { default: !0 }
                                });
                              }
                            });
                            var ce = J(ge, 2);
                            {
                              var Q = (fe) => {
                                {
                                  let V = /* @__PURE__ */ ie(() => c() ? `background-color:${c()}` : void 0);
                                  qa(fe, {
                                    header: !0,
                                    get style() {
                                      return o(V);
                                    }
                                  });
                                }
                              };
                              $(ce, (fe) => {
                                o(f) && fe(Q);
                              });
                            }
                            S(R, q);
                          },
                          $$slots: { default: !0 }
                        });
                      },
                      $$slots: { default: !0 }
                    });
                  }
                  var H = J(U, 2);
                  rg(H, {
                    children: (k, X) => {
                      var oe = re(), R = j(oe);
                      vn(R, 19, r, (K, q) => l()(K, q), (K, q, ge) => {
                        {
                          let ce = /* @__PURE__ */ ie(() => [
                            u() ? `background-color:${u()}` : "",
                            o(t) === l()(o(q), o(ge)) ? "background-color:#D9D800" : ""
                          ].filter(Boolean).join(";"));
                          Ll(K, {
                            get style() {
                              return o(ce);
                            },
                            $$events: {
                              mouseenter: () => W(t, l()(o(q), o(ge)), !0),
                              mouseleave: () => W(t, null)
                            },
                            children: (Q, fe) => {
                              var V = vg(), de = j(V);
                              vn(de, 17, i, hr, (be, Ge) => {
                                qa(be, {
                                  children: (et, je) => {
                                    var Re = dt();
                                    ve(() => {
                                      var at;
                                      return Pe(Re, ((at = o(q)) == null ? void 0 : at[o(Ge).key]) ?? "");
                                    }), S(et, Re);
                                  },
                                  $$slots: { default: !0 }
                                });
                              });
                              var ee = J(de, 2);
                              {
                                var Ie = (be) => {
                                  qa(be, {
                                    numeric: !0,
                                    children: (Ge, et) => {
                                      var je = re(), Re = j(je);
                                      _e(Re, () => e.actions ?? pe, () => ({ item: o(q) })), S(Ge, je);
                                    },
                                    $$slots: { default: !0 }
                                  });
                                };
                                $(ee, (be) => {
                                  o(f) && be(Ie);
                                });
                              }
                              S(Q, V);
                            },
                            $$slots: { default: !0 }
                          });
                        }
                      }), S(k, oe);
                    },
                    $$slots: { default: !0 }
                  }), S(M, le);
                },
                $$slots: { default: !0 }
              });
            };
            $(
              b,
              (G) => {
                !r() || r().length === 0 ? G(w) : G(D, !1);
              },
              !0
            );
          }
          S(_, y);
        };
        $(
          x,
          (_) => {
            s() ? _(I) : _(T, !1);
          },
          !0
        );
      }
      S(A, E);
    };
    $(g, (A) => {
      a() ? A(p) : A(C, !1);
    });
  }
  S(n, v), Ee();
}
var pg = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"></path></svg>');
function Ig(n, e) {
  let t = m(e, "svgStyles", 3, "");
  Dt(n, {
    children: (r, i) => {
      var a = pg();
      ve(() => nt(a, t())), S(r, a);
    }
  });
}
var bg = /* @__PURE__ */ z('<span class="secondary-label svelte-17mxdlc"> </span>'), _g = /* @__PURE__ */ z('<div class="seperator svelte-17mxdlc"><!></div>'), yg = /* @__PURE__ */ z('<div class="breadcrumb-wrapper svelte-17mxdlc"><button type="button"><span class="label svelte-17mxdlc"> </span> <!></button> <!></div>'), Cg = /* @__PURE__ */ z('<nav class="oscd-breadcrumbs svelte-17mxdlc" aria-label="Breadcrumb"></nav>');
function Ag(n, e) {
  Ae(e, !0);
  let t = m(e, "breadcrumbs", 19, () => []), r = m(e, "activeIndex", 3, 0);
  const i = (s) => {
    var l;
    const d = t()[s];
    !(d != null && d.enabled) || s === r() || (l = e.handleClick) == null || l.call(e, s);
  };
  var a = Cg();
  vn(a, 21, t, hr, (s, d, l) => {
    var c = yg(), u = B(c);
    let h;
    u.__click = () => i(l);
    let f;
    var v = B(u), g = B(v), p = J(v, 2);
    {
      var C = (x) => {
        var I = bg();
        let T;
        var _ = B(I);
        ve(
          (y) => {
            T = nt(I, "", T, y), Pe(_, o(d).secondaryLabel);
          },
          [() => ({ color: e.color ? e.color : null })]
        ), S(x, I);
      };
      $(p, (x) => {
        o(d).secondaryLabel && x(C);
      });
    }
    var A = J(u, 2);
    {
      var E = (x) => {
        var I = _g(), T = B(I);
        {
          let _ = /* @__PURE__ */ ie(() => e.color ? e.color : "#004552");
          Ig(T, {
            get svgStyles() {
              return `fill: ${o(_) ?? ""}`;
            }
          });
        }
        S(x, I);
      };
      $(A, (x) => {
        l < t().length - 1 && x(E);
      });
    }
    ve(
      (x, I) => {
        h = pr(u, 1, "breadcrumb svelte-17mxdlc", null, h, x), Qt(u, "aria-current", l === r() ? "page" : void 0), f = nt(u, "", f, I), Pe(g, o(d).label);
      },
      [
        () => ({
          "br-disabled": !o(d).enabled,
          "br-active": l === r()
        }),
        () => ({ color: e.color ? e.color : null })
      ]
    ), S(s, c);
  }), S(n, a), Ee();
}
Tt(["click"]);
var Eg = (n, e) => {
  var t;
  n.stopPropagation(), (t = e.onClick) == null || t.call(e, n);
}, Sg = /* @__PURE__ */ z('<button class="icon-button svelte-jv2py4"><!></button>');
function eu(n, e) {
  Ae(e, !0);
  let t = m(e, "tooltipSide", 3, "top"), r = m(e, "showDelay", 3, 1e3), i = m(e, "fillColor", 3, "var(--mdc-theme-primary)"), a = m(e, "size", 3, "25px"), s = /* @__PURE__ */ ie(() => `fill: ${i()}; margin: 0; width: ${a()}; height: ${a()};`);
  $d(n, {
    get content() {
      return e.tooltip;
    },
    get hoverDelay() {
      return r();
    },
    get side() {
      return t();
    },
    children: (d, l) => {
      var c = Sg();
      c.__click = [Eg, e];
      var u = B(c);
      {
        var h = (v) => {
          Kd(v, {
            get svgStyles() {
              return o(s);
            }
          });
        }, f = (v) => {
          var g = re(), p = j(g);
          {
            var C = (E) => {
              _v(E, {
                get svgStyles() {
                  return o(s);
                }
              });
            }, A = (E) => {
              var x = re(), I = j(x);
              {
                var T = (y) => {
                  Yd(y, {
                    get svgStyles() {
                      return o(s);
                    }
                  });
                }, _ = (y) => {
                  var b = re(), w = j(b);
                  {
                    var D = (M) => {
                      Jd(M, {
                        get svgStyles() {
                          return o(s);
                        }
                      });
                    }, G = (M) => {
                      var N = re(), le = j(N);
                      {
                        var U = (k) => {
                          Hv(k, {
                            get svgStyles() {
                              return o(s);
                            }
                          });
                        }, H = (k) => {
                          var X = re(), oe = j(X);
                          {
                            var R = (q) => {
                              Bv(q, {
                                get svgStyles() {
                                  return o(s);
                                }
                              });
                            }, K = (q) => {
                              var ge = re(), ce = j(ge);
                              {
                                var Q = (V) => {
                                  Wv(V, {
                                    get svgStyles() {
                                      return o(s);
                                    }
                                  });
                                }, fe = (V) => {
                                  var de = re(), ee = j(de);
                                  {
                                    var Ie = (Ge) => {
                                      Zv(Ge, {
                                        get svgStyles() {
                                          return o(s);
                                        }
                                      });
                                    }, be = (Ge) => {
                                      var et = dt();
                                      ve(() => Pe(et, `Unsupported supported type: ${e.type ?? ""}`)), S(Ge, et);
                                    };
                                    $(
                                      ee,
                                      (Ge) => {
                                        e.type === "star" ? Ge(Ie) : Ge(be, !1);
                                      },
                                      !0
                                    );
                                  }
                                  S(V, de);
                                };
                                $(
                                  ce,
                                  (V) => {
                                    e.type === "close" ? V(Q) : V(fe, !1);
                                  },
                                  !0
                                );
                              }
                              S(q, ge);
                            };
                            $(
                              oe,
                              (q) => {
                                e.type === "link-off" ? q(R) : q(K, !1);
                              },
                              !0
                            );
                          }
                          S(k, X);
                        };
                        $(
                          le,
                          (k) => {
                            e.type === "wand-stars" ? k(U) : k(H, !1);
                          },
                          !0
                        );
                      }
                      S(M, N);
                    };
                    $(
                      w,
                      (M) => {
                        e.type === "visibility" ? M(D) : M(G, !1);
                      },
                      !0
                    );
                  }
                  S(y, b);
                };
                $(
                  I,
                  (y) => {
                    e.type === "edit" ? y(T) : y(_, !1);
                  },
                  !0
                );
              }
              S(E, x);
            };
            $(
              p,
              (E) => {
                e.type === "duplicate" ? E(C) : E(A, !1);
              },
              !0
            );
          }
          S(v, g);
        };
        $(u, (v) => {
          e.type === "delete" ? v(h) : v(f, !1);
        });
      }
      ve(() => Qt(c, "aria-label", e.tooltip)), S(d, c);
    },
    $$slots: { default: !0 }
  }), Ee();
}
Tt(["click"]);
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
function xg(n, e) {
  if (n == null) return {};
  var t = {}, r = Object.keys(n), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(e.indexOf(i) >= 0) && (t[i] = n[i]);
  return t;
}
function wg(n, e) {
  if (n == null) return {};
  var t = xg(n, e), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    for (i = 0; i < a.length; i++)
      r = a[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(n, r) && (t[r] = n[r]);
  }
  return t;
}
function Tg(n, e) {
  return Lg(n) || Og(n, e) || Vo(n, e) || Pg();
}
function wn(n) {
  return Dg(n) || Rg(n) || Vo(n) || Mg();
}
function Dg(n) {
  if (Array.isArray(n)) return go(n);
}
function Lg(n) {
  if (Array.isArray(n)) return n;
}
function Rg(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function Og(n, e) {
  var t = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (t != null) {
    var r = [], i = !0, a = !1, s, d;
    try {
      for (t = t.call(n); !(i = (s = t.next()).done) && (r.push(s.value), !(e && r.length === e)); i = !0)
        ;
    } catch (l) {
      a = !0, d = l;
    } finally {
      try {
        !i && t.return != null && t.return();
      } finally {
        if (a) throw d;
      }
    }
    return r;
  }
}
function Vo(n, e) {
  if (n) {
    if (typeof n == "string") return go(n, e);
    var t = Object.prototype.toString.call(n).slice(8, -1);
    if (t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set") return Array.from(n);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return go(n, e);
  }
}
function go(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
  return r;
}
function Mg() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Pg() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Fa(n, e) {
  var t = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (!t) {
    if (Array.isArray(n) || (t = Vo(n)) || e) {
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
  var a = !0, s = !1, d;
  return {
    s: function() {
      t = t.call(n);
    },
    n: function() {
      var l = t.next();
      return a = l.done, l;
    },
    e: function(l) {
      s = !0, d = l;
    },
    f: function() {
      try {
        !a && t.return != null && t.return();
      } finally {
        if (s) throw d;
      }
    }
  };
}
var Fg = "finalize", kg = "consider";
function $i(n, e, t) {
  n.dispatchEvent(new CustomEvent(Fg, {
    detail: {
      items: e,
      info: t
    }
  }));
}
function Ur(n, e, t) {
  n.dispatchEvent(new CustomEvent(kg, {
    detail: {
      items: e,
      info: t
    }
  }));
}
var Os = "draggedEntered", ka = "draggedLeft", Ms = "draggedOverIndex", Zo = "draggedLeftDocument", cs = {
  LEFT_FOR_ANOTHER: "leftForAnother",
  OUTSIDE_OF_ANY: "outsideOfAny"
};
function Ng(n, e, t) {
  n.dispatchEvent(new CustomEvent(Os, {
    detail: {
      indexObj: e,
      draggedEl: t
    }
  }));
}
function Hg(n, e, t) {
  n.dispatchEvent(new CustomEvent(ka, {
    detail: {
      draggedEl: e,
      type: cs.LEFT_FOR_ANOTHER,
      theOtherDz: t
    }
  }));
}
function Ug(n, e) {
  n.dispatchEvent(new CustomEvent(ka, {
    detail: {
      draggedEl: e,
      type: cs.OUTSIDE_OF_ANY
    }
  }));
}
function Bg(n, e, t) {
  n.dispatchEvent(new CustomEvent(Ms, {
    detail: {
      indexObj: e,
      draggedEl: t
    }
  }));
}
function Gg(n) {
  window.dispatchEvent(new CustomEvent(Zo, {
    detail: {
      draggedEl: n
    }
  }));
}
var wt = {
  DRAG_STARTED: "dragStarted",
  DRAGGED_ENTERED: Os,
  DRAGGED_ENTERED_ANOTHER: "dragEnteredAnother",
  DRAGGED_OVER_INDEX: Ms,
  DRAGGED_LEFT: ka,
  DRAGGED_LEFT_ALL: "draggedLeftAll",
  DROPPED_INTO_ZONE: "droppedIntoZone",
  DROPPED_INTO_ANOTHER: "droppedIntoAnother",
  DROPPED_OUTSIDE_OF_ANY: "droppedOutsideOfAny",
  DRAG_STOPPED: "dragStopped"
}, jt = {
  POINTER: "pointer",
  KEYBOARD: "keyboard"
}, Na = "isDndShadowItem", Ps = "data-is-dnd-shadow-item-internal", Wg = "data-is-dnd-shadow-item-hint", Vg = "id:dnd-shadow-placeholder-0000", Zg = "dnd-action-dragged-el", St = "id", mo = 0;
function tu() {
  mo++;
}
function nu() {
  if (mo === 0)
    throw new Error("Bug! trying to decrement when there are no dropzones");
  mo--;
}
var zo = typeof window > "u";
function po(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, t, r = e ? qg(n) : n.getBoundingClientRect(), i = getComputedStyle(n), a = i.transform;
  if (a) {
    var s, d, l, c;
    if (a.startsWith("matrix3d("))
      t = a.slice(9, -1).split(/, /), s = +t[0], d = +t[5], l = +t[12], c = +t[13];
    else if (a.startsWith("matrix("))
      t = a.slice(7, -1).split(/, /), s = +t[0], d = +t[3], l = +t[4], c = +t[5];
    else
      return r;
    var u = i.transformOrigin, h = r.x - l - (1 - s) * parseFloat(u), f = r.y - c - (1 - d) * parseFloat(u.slice(u.indexOf(" ") + 1)), v = s ? r.width / s : n.offsetWidth, g = d ? r.height / d : n.offsetHeight;
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
function ru(n) {
  var e = po(n);
  return {
    top: e.top + window.scrollY,
    bottom: e.bottom + window.scrollY,
    left: e.left + window.scrollX,
    right: e.right + window.scrollX
  };
}
function iu(n) {
  var e = n.getBoundingClientRect();
  return {
    top: e.top + window.scrollY,
    bottom: e.bottom + window.scrollY,
    left: e.left + window.scrollX,
    right: e.right + window.scrollX
  };
}
function au(n) {
  return {
    x: (n.left + n.right) / 2,
    y: (n.top + n.bottom) / 2
  };
}
function zg(n, e) {
  return Math.sqrt(Math.pow(n.x - e.x, 2) + Math.pow(n.y - e.y, 2));
}
function Fs(n, e) {
  return n.y <= e.bottom && n.y >= e.top && n.x >= e.left && n.x <= e.right;
}
function Aa(n) {
  return au(iu(n));
}
function Ol(n, e) {
  var t = Aa(n), r = ru(e);
  return Fs(t, r);
}
function Ml(n, e) {
  var t = Aa(n), r = Aa(e);
  return zg(t, r);
}
function jg(n) {
  var e = iu(n);
  return e.right < 0 || e.left > document.documentElement.scrollWidth || e.bottom < 0 || e.top > document.documentElement.scrollHeight;
}
function qg(n) {
  for (var e = n.getBoundingClientRect(), t = {
    top: e.top,
    bottom: e.bottom,
    left: e.left,
    right: e.right
  }, r = n.parentElement; r && r !== document.body; ) {
    var i = r.getBoundingClientRect(), a = window.getComputedStyle(r).overflowY, s = window.getComputedStyle(r).overflowX, d = a === "scroll" || a === "auto", l = s === "scroll" || s === "auto";
    d && (t.top = Math.max(t.top, i.top), t.bottom = Math.min(t.bottom, i.bottom)), l && (t.left = Math.max(t.left, i.left), t.right = Math.min(t.right, i.right)), r = r.parentElement;
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
function jo() {
  Hi = /* @__PURE__ */ new Map();
}
jo();
function Xg(n) {
  var e = Array.from(n.children).findIndex(function(t) {
    return t.getAttribute(Ps);
  });
  if (e >= 0)
    return Hi.has(n) || Hi.set(n, /* @__PURE__ */ new Map()), Hi.get(n).set(e, ru(n.children[e])), e;
}
function Yg(n, e) {
  if (!Ol(n, e))
    return null;
  var t = e.children;
  if (t.length === 0)
    return {
      index: 0,
      isProximityBased: !0
    };
  for (var r = Xg(e), i = 0; i < t.length; i++)
    if (Ol(n, t[i])) {
      var a = Hi.has(e) && Hi.get(e).get(i);
      return a && !Fs(Aa(n), a) ? {
        index: r,
        isProximityBased: !1
      } : {
        index: i,
        isProximityBased: !1
      };
    }
  for (var s = Number.MAX_VALUE, d = void 0, l = 0; l < t.length; l++) {
    var c = Ml(n, t[l]);
    c < s && (s = c, d = l);
  }
  if (t.length > 0) {
    var u = t.length, h = t[u - 1], f = h.cloneNode(!1);
    f.style.visibility = "hidden", f.style.pointerEvents = "none", e.appendChild(f);
    var v = Ml(n, f);
    v < s && (d = u), e.removeChild(f);
  }
  return {
    index: d,
    isProximityBased: !0
  };
}
function ha(n) {
  return JSON.stringify(n, null, 2);
}
function fs(n) {
  if (!n)
    throw new Error("cannot get depth of a falsy node");
  return su(n, 0);
}
function su(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return n.parentElement ? su(n.parentElement, e + 1) : e - 1;
}
function Kg(n, e) {
  if (Object.keys(n).length !== Object.keys(e).length)
    return !1;
  for (var t in n)
    if (!{}.hasOwnProperty.call(e, t) || e[t] !== n[t])
      return !1;
  return !0;
}
function Jg(n, e) {
  if (n.length !== e.length)
    return !1;
  for (var t = 0; t < n.length; t++)
    if (n[t] !== e[t])
      return !1;
  return !0;
}
var Qg = 200, Pl = 10, Io;
function $g(n, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Qg, r = arguments.length > 3 ? arguments[3] : void 0, i, a, s = !1, d, l = Array.from(e).sort(function(u, h) {
    return fs(h) - fs(u);
  });
  function c() {
    var u = Aa(n), h = r.multiScrollIfNeeded();
    if (!h && d && Math.abs(d.x - u.x) < Pl && Math.abs(d.y - u.y) < Pl) {
      Io = window.setTimeout(c, t);
      return;
    }
    if (jg(n)) {
      Gg(n);
      return;
    }
    d = u;
    var f = !1, v = Fa(l), g;
    try {
      for (v.s(); !(g = v.n()).done; ) {
        var p = g.value;
        h && jo();
        var C = Yg(n, p);
        if (C !== null) {
          var A = C.index;
          f = !0, p !== i ? (i && Hg(i, n, p), Ng(p, C, n), i = p) : A !== a && (Bg(p, C, n), a = A);
          break;
        }
      }
    } catch (E) {
      v.e(E);
    } finally {
      v.f();
    }
    !f && s && i ? (Ug(i, n), i = void 0, a = void 0, s = !1) : s = !0, Io = window.setTimeout(c, t);
  }
  c();
}
function em() {
  clearTimeout(Io), jo();
}
var va = 30;
function tm() {
  var n;
  function e() {
    n = {
      directionObj: void 0,
      stepPx: 0
    };
  }
  e();
  function t(a) {
    var s = n, d = s.directionObj, l = s.stepPx;
    d && (a.scrollBy(d.x * l, d.y * l), window.requestAnimationFrame(function() {
      return t(a);
    }));
  }
  function r(a) {
    return va - a;
  }
  function i(a, s) {
    if (!s)
      return !1;
    var d = nm(a, s), l = !!n.directionObj;
    if (d === null)
      return l && e(), !1;
    var c = !1, u = !1;
    return s.scrollHeight > s.clientHeight && (d.bottom < va ? (c = !0, n.directionObj = {
      x: 0,
      y: 1
    }, n.stepPx = r(d.bottom)) : d.top < va && (c = !0, n.directionObj = {
      x: 0,
      y: -1
    }, n.stepPx = r(d.top)), !l && c) || s.scrollWidth > s.clientWidth && (d.right < va ? (u = !0, n.directionObj = {
      x: 1,
      y: 0
    }, n.stepPx = r(d.right)) : d.left < va && (u = !0, n.directionObj = {
      x: -1,
      y: 0
    }, n.stepPx = r(d.left)), !l && u) ? (t(s), !0) : (e(), !1);
  }
  return {
    scrollIfNeeded: i,
    resetScrolling: e
  };
}
function nm(n, e) {
  var t = e === document.scrollingElement ? {
    top: 0,
    bottom: window.innerHeight,
    left: 0,
    right: window.innerWidth
  } : e.getBoundingClientRect();
  return Fs(n, t) ? {
    top: n.y - t.top,
    bottom: t.bottom - n.y,
    left: n.x - t.left,
    right: t.right - n.x
  } : null;
}
function rm() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e = arguments.length > 1 ? arguments[1] : void 0, t = am(n), r = Array.from(t).sort(function(l, c) {
    return fs(c) - fs(l);
  }), i = tm(), a = i.scrollIfNeeded, s = i.resetScrolling;
  function d() {
    var l = e();
    if (!l || !r)
      return !1;
    for (var c = r.filter(function(f) {
      return Fs(l, f.getBoundingClientRect()) || f === document.scrollingElement;
    }), u = 0; u < c.length; u++) {
      var h = a(l, c[u]);
      if (h)
        return !0;
    }
    return !1;
  }
  return {
    multiScrollIfNeeded: t.size > 0 ? d : function() {
      return !1;
    },
    destroy: function() {
      return s();
    }
  };
}
function im(n) {
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
function am(n) {
  var e = /* @__PURE__ */ new Set(), t = Fa(n), r;
  try {
    for (t.s(); !(r = t.n()).done; ) {
      var i = r.value;
      im(i).forEach(function(a) {
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
function sm(n) {
  var e = n.cloneNode(!0), t = [], r = n.tagName === "SELECT", i = r ? [n] : wn(n.querySelectorAll("select")), a = Fa(i), s;
  try {
    for (a.s(); !(s = a.n()).done; ) {
      var d = s.value;
      t.push(d.value);
    }
  } catch (x) {
    a.e(x);
  } finally {
    a.f();
  }
  if (i.length > 0)
    for (var l = r ? [e] : wn(e.querySelectorAll("select")), c = 0; c < l.length; c++) {
      var u = l[c], h = t[c], f = u.querySelector('option[value="'.concat(h, '"'));
      f && f.setAttribute("selected", !0);
    }
  var v = n.tagName === "CANVAS", g = v ? [n] : wn(n.querySelectorAll("canvas"));
  if (g.length > 0)
    for (var p = v ? [e] : wn(e.querySelectorAll("canvas")), C = 0; C < p.length; C++) {
      var A = g[C], E = p[C];
      E.width = A.width, E.height = A.height, A.width > 0 && A.height > 0 && E.getContext("2d").drawImage(A, 0, 0);
    }
  return e;
}
var Ea = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
}), om = Qi({}, Ea.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
function ou(n) {
  if (!Ea[n]) throw new Error("Can't get non existing feature flag ".concat(n, "! Supported flags: ").concat(Object.keys(Ea)));
  return om[n];
}
var lm = 0.2;
function ti(n) {
  return "".concat(n, " ").concat(lm, "s ease");
}
function dm(n, e) {
  var t = n.getBoundingClientRect(), r = sm(n);
  lu(n, r), r.id = Zg, r.style.position = "fixed";
  var i = t.top, a = t.left;
  if (r.style.top = "".concat(i, "px"), r.style.left = "".concat(a, "px"), e) {
    var s = au(t);
    i -= s.y - e.y, a -= s.x - e.x, window.setTimeout(function() {
      r.style.top = "".concat(i, "px"), r.style.left = "".concat(a, "px");
    }, 0);
  }
  return r.style.margin = "0", r.style.boxSizing = "border-box", r.style.height = "".concat(t.height, "px"), r.style.width = "".concat(t.width, "px"), r.style.transition = "".concat(ti("top"), ", ").concat(ti("left"), ", ").concat(ti("background-color"), ", ").concat(ti("opacity"), ", ").concat(ti("color"), " "), window.setTimeout(function() {
    return r.style.transition += ", ".concat(ti("width"), ", ").concat(ti("height"));
  }, 0), r.style.zIndex = "9999", r.style.cursor = "grabbing", r;
}
function um(n) {
  n.style.cursor = "grab";
}
function cm(n, e, t, r) {
  lu(e, n);
  var i = e.getBoundingClientRect(), a = n.getBoundingClientRect(), s = i.width - a.width, d = i.height - a.height;
  if (s || d) {
    var l = {
      left: (t - a.left) / a.width,
      top: (r - a.top) / a.height
    };
    ou(Ea.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT) || (n.style.height = "".concat(i.height, "px"), n.style.width = "".concat(i.width, "px")), n.style.left = "".concat(parseFloat(n.style.left) - l.left * s, "px"), n.style.top = "".concat(parseFloat(n.style.top) - l.top * d, "px");
  }
}
function lu(n, e) {
  var t = window.getComputedStyle(n);
  Array.from(t).filter(function(r) {
    return r.startsWith("background") || r.startsWith("padding") || r.startsWith("font") || r.startsWith("text") || r.startsWith("align") || r.startsWith("justify") || r.startsWith("display") || r.startsWith("flex") || r.startsWith("border") || r === "opacity" || r === "color" || r === "list-style-type" || // copying with and height to make up for rect update timing issues in some browsers
    ou(Ea.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT) && (r === "width" || r === "height");
  }).forEach(function(r) {
    return e.style.setProperty(r, t.getPropertyValue(r), t.getPropertyPriority(r));
  });
}
function fm(n, e) {
  n.draggable = !1, n.ondragstart = function() {
    return !1;
  }, e ? (n.style.userSelect = "", n.style.WebkitUserSelect = "", n.style.cursor = "") : (n.style.userSelect = "none", n.style.WebkitUserSelect = "none", n.style.cursor = "grab");
}
function du(n) {
  n.style.display = "none", n.style.position = "fixed", n.style.zIndex = "-5";
}
function hm(n) {
  n.style.visibility = "hidden", n.setAttribute(Ps, "true");
}
function vm(n) {
  n.style.visibility = "", n.removeAttribute(Ps);
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
function gm(n) {
  var e = n.style.minHeight;
  n.style.minHeight = window.getComputedStyle(n).getPropertyValue("height");
  var t = n.style.minWidth;
  return n.style.minWidth = window.getComputedStyle(n).getPropertyValue("width"), function() {
    n.style.minHeight = e, n.style.minWidth = t;
  };
}
var mm = "--any--", pm = 100, Im = 20, Xa = 3, bm = 80, Fl = {
  outline: "rgba(255, 255, 102, 0.7) solid 2px"
}, kl = "data-is-dnd-original-dragged-item", on, Et, ln, ks, rt, Ns, kr, Pt, Zn, Wt, Sr = !1, qo = !1, Xo, Ha = !1, rs = [], ba, zn, ma = !1, Hn = /* @__PURE__ */ new Map(), gt = /* @__PURE__ */ new Map(), $s = /* @__PURE__ */ new WeakMap();
function _m(n, e) {
  Hn.has(e) || Hn.set(e, /* @__PURE__ */ new Set()), Hn.get(e).has(n) || (Hn.get(e).add(n), tu());
}
function Nl(n, e) {
  Hn.get(e).delete(n), nu(), Hn.get(e).size === 0 && Hn.delete(e);
}
function ym() {
  var n = Hn.get(ks), e = Fa(n), t;
  try {
    for (e.s(); !(t = e.n()).done; ) {
      var r = t.value;
      r.addEventListener(Os, uu), r.addEventListener(ka, cu), r.addEventListener(Ms, fu);
    }
  } catch (s) {
    e.e(s);
  } finally {
    e.f();
  }
  window.addEventListener(Zo, ea);
  var i = Math.max.apply(Math, wn(Array.from(n.keys()).map(function(s) {
    return gt.get(s).dropAnimationDurationMs;
  }))), a = i === 0 ? Im : Math.max(i, pm);
  ba = rm(n, function() {
    return Wt;
  }), $g(Et, n, a * 1.07, ba);
}
function Cm() {
  var n = Hn.get(ks), e = Fa(n), t;
  try {
    for (e.s(); !(t = e.n()).done; ) {
      var r = t.value;
      r.removeEventListener(Os, uu), r.removeEventListener(ka, cu), r.removeEventListener(Ms, fu);
    }
  } catch (i) {
    e.e(i);
  } finally {
    e.f();
  }
  window.removeEventListener(Zo, ea), ba && (ba.destroy(), ba = void 0), em();
}
function Hs(n) {
  return n.findIndex(function(e) {
    return !!e[Na];
  });
}
function Am(n) {
  var e;
  return Lr(Lr({}, n), {}, (e = {}, Qi(e, Na, !0), Qi(e, St, Vg), e));
}
function uu(n) {
  var e = gt.get(n.currentTarget), t = e.items, r = e.dropFromOthersDisabled;
  if (!(r && n.currentTarget !== rt)) {
    if (Ha = !1, t = t.filter(function(d) {
      return d[St] !== kr[St];
    }), rt !== n.currentTarget) {
      var i = gt.get(rt).items, a = i.filter(function(d) {
        return !d[Na];
      });
      Ur(rt, a, {
        trigger: wt.DRAGGED_ENTERED_ANOTHER,
        id: ln[St],
        source: jt.POINTER
      });
    }
    var s = n.detail.indexObj.index;
    Pt = n.currentTarget, t.splice(s, 0, kr), Ur(n.currentTarget, t, {
      trigger: wt.DRAGGED_ENTERED,
      id: ln[St],
      source: jt.POINTER
    });
  }
}
function cu(n) {
  if (Sr) {
    var e = gt.get(n.currentTarget), t = e.items, r = e.dropFromOthersDisabled;
    if (!(r && n.currentTarget !== rt && n.currentTarget !== Pt)) {
      var i = wn(t), a = Hs(i);
      a !== -1 && i.splice(a, 1);
      var s = Pt;
      Pt = void 0;
      var d = n.detail, l = d.type, c = d.theOtherDz;
      if (l === cs.OUTSIDE_OF_ANY || l === cs.LEFT_FOR_ANOTHER && c !== rt && gt.get(c).dropFromOthersDisabled) {
        Ha = !0, Pt = rt;
        var u = s === rt ? i : wn(gt.get(rt).items);
        u.splice(Ns, 0, kr), Ur(rt, u, {
          trigger: wt.DRAGGED_LEFT_ALL,
          id: ln[St],
          source: jt.POINTER
        });
      }
      Ur(n.currentTarget, i, {
        trigger: wt.DRAGGED_LEFT,
        id: ln[St],
        source: jt.POINTER
      });
    }
  }
}
function fu(n) {
  var e = gt.get(n.currentTarget), t = e.items, r = e.dropFromOthersDisabled;
  if (!(r && n.currentTarget !== rt)) {
    var i = wn(t);
    Ha = !1;
    var a = n.detail.indexObj.index, s = Hs(i);
    s !== -1 && i.splice(s, 1), i.splice(a, 0, kr), Ur(n.currentTarget, i, {
      trigger: wt.DRAGGED_OVER_INDEX,
      id: ln[St],
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
  }, Et.style.transform = "translate3d(".concat(Wt.x - Zn.x, "px, ").concat(Wt.y - Zn.y, "px, 0)");
}
function ea() {
  qo = !0, window.removeEventListener("mousemove", vs), window.removeEventListener("touchmove", vs), window.removeEventListener("mouseup", ea), window.removeEventListener("touchend", ea), Cm(), um(Et), Pt || (Pt = rt);
  var n = gt.get(Pt), e = n.items, t = n.type;
  hs(Hn.get(t), function(a) {
    return gt.get(a).dropTargetStyle;
  }, function(a) {
    return gt.get(a).dropTargetClasses;
  });
  var r = Hs(e);
  r === -1 && Pt === rt && (r = Ns), e = e.map(function(a) {
    return a[Na] ? ln : a;
  });
  function i() {
    Xo(), $i(Pt, e, {
      trigger: Ha ? wt.DROPPED_OUTSIDE_OF_ANY : wt.DROPPED_INTO_ZONE,
      id: ln[St],
      source: jt.POINTER
    }), Pt !== rt && $i(rt, gt.get(rt).items, {
      trigger: wt.DROPPED_INTO_ANOTHER,
      id: ln[St],
      source: jt.POINTER
    });
    var a = Array.from(Pt.children).find(function(s) {
      return s.getAttribute(Ps);
    });
    a && vm(a), xm();
  }
  gt.get(Pt).dropAnimationDisabled ? i() : Em(r, i);
}
function Em(n, e) {
  var t = n > -1 ? po(Pt.children[n], !1) : po(Pt, !1), r = {
    x: t.left - parseFloat(Et.style.left),
    y: t.top - parseFloat(Et.style.top)
  }, i = gt.get(Pt), a = i.dropAnimationDurationMs, s = "transform ".concat(a, "ms ease");
  Et.style.transition = Et.style.transition ? Et.style.transition + "," + s : s, Et.style.transform = "translate3d(".concat(r.x, "px, ").concat(r.y, "px, 0)"), window.setTimeout(e, a);
}
function Sm(n, e) {
  rs.push({
    dz: n,
    destroy: e
  }), window.requestAnimationFrame(function() {
    du(n), document.body.appendChild(n);
  });
}
function xm() {
  Et && Et.remove && Et.remove(), on && on.remove && on.remove(), Et = void 0, on = void 0, ln = void 0, ks = void 0, rt = void 0, Ns = void 0, kr = void 0, Pt = void 0, Zn = void 0, Wt = void 0, Sr = !1, qo = !1, Xo = void 0, Ha = !1, zn && clearTimeout(zn), zn = void 0, ma = !1, rs.length && (rs.forEach(function(n) {
    var e = n.dz, t = n.destroy;
    t(), e.remove();
  }), rs = []);
}
function wm(n, e) {
  var t = !1, r = {
    items: void 0,
    type: void 0,
    flipDurationMs: 0,
    dragDisabled: !1,
    morphDisabled: !1,
    dropFromOthersDisabled: !1,
    dropTargetStyle: Fl,
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
    }), window.addEventListener("mouseup", d, {
      passive: !1
    }), window.addEventListener("touchend", d, {
      passive: !1
    });
  }
  function s() {
    window.removeEventListener("mousemove", l), window.removeEventListener("touchmove", l), window.removeEventListener("mouseup", d), window.removeEventListener("touchend", d), zn && (clearTimeout(zn), zn = void 0, ma = !1);
  }
  function d(f) {
    if (s(), on = void 0, Zn = void 0, Wt = void 0, f.type === "touchend") {
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
      }, (Math.abs(Wt.x - Zn.x) >= Xa || Math.abs(Wt.y - Zn.y) >= Xa) && (zn && (clearTimeout(zn), zn = void 0), d(f));
      return;
    }
    f.preventDefault(), Wt = {
      x: g.clientX,
      y: g.clientY
    }, (Math.abs(Wt.x - Zn.x) >= Xa || Math.abs(Wt.y - Zn.y) >= Xa) && (s(), u());
  }
  function c(f) {
    if (!(f.target !== f.currentTarget && (f.target.value !== void 0 || f.target.isContentEditable)) && !f.button && !Sr) {
      var v = !!f.touches, g = v && r.delayTouchStartMs > 0;
      g || f.preventDefault(), f.stopPropagation();
      var p = v ? f.touches[0] : f;
      Zn = {
        x: p.clientX,
        y: p.clientY
      }, Wt = Lr({}, Zn), on = f.currentTarget, g && (ma = !1, zn = window.setTimeout(function() {
        on && (ma = !0, s(), u());
      }, r.delayTouchStartMs)), a();
    }
  }
  function u() {
    Sr = !0;
    var f = i.get(on);
    Ns = f, rt = on.parentElement;
    var v = rt.closest("dialog") || rt.closest("[popover]") || rt.getRootNode(), g = v.body || v, p = r.items, C = r.type, A = r.centreDraggedOnCursor, E = wn(p);
    ln = E[f], ks = C, kr = Am(ln), Et = dm(on, A && Wt), g.appendChild(Et);
    function x() {
      on.parentElement ? window.requestAnimationFrame(x) : (on.setAttribute(kl, !0), g.appendChild(on), ym(), du(on), kr[St] = ln[St], Et.focus());
    }
    window.requestAnimationFrame(x), ns(Array.from(Hn.get(r.type)).filter(function(I) {
      return I === rt || !gt.get(I).dropFromOthersDisabled;
    }), function(I) {
      return gt.get(I).dropTargetStyle;
    }, function(I) {
      return gt.get(I).dropTargetClasses;
    }), E.splice(f, 1, kr), Xo = gm(rt), Ur(rt, E, {
      trigger: wt.DRAG_STARTED,
      id: ln[St],
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
    var v = f.items, g = v === void 0 ? void 0 : v, p = f.flipDurationMs, C = p === void 0 ? 0 : p, A = f.type, E = A === void 0 ? mm : A, x = f.dragDisabled, I = x === void 0 ? !1 : x, T = f.morphDisabled, _ = T === void 0 ? !1 : T, y = f.dropFromOthersDisabled, b = y === void 0 ? !1 : y, w = f.dropTargetStyle, D = w === void 0 ? Fl : w, G = f.dropTargetClasses, M = G === void 0 ? [] : G, N = f.transformDraggedElement, le = N === void 0 ? function() {
    } : N, U = f.centreDraggedOnCursor, H = U === void 0 ? !1 : U, k = f.dropAnimationDisabled, X = k === void 0 ? !1 : k, oe = f.delayTouchStart, R = oe === void 0 ? !1 : oe;
    r.dropAnimationDurationMs = C;
    var K = 0;
    R === !0 ? K = bm : typeof R == "number" && isFinite(R) && R >= 0 && (K = R), r.delayTouchStartMs = K, r.type && E !== r.type && Nl(n, r.type), r.type = E, r.items = wn(g), r.dragDisabled = I, r.morphDisabled = _, r.transformDraggedElement = le, r.centreDraggedOnCursor = H, r.dropAnimationDisabled = X, t && Sr && !qo && (!Kg(D, r.dropTargetStyle) || !Jg(M, r.dropTargetClasses)) && (hs([n], function() {
      return r.dropTargetStyle;
    }, function() {
      return M;
    }), ns([n], function() {
      return D;
    }, function() {
      return M;
    })), r.dropTargetStyle = D, r.dropTargetClasses = wn(M);
    function q(fe, V) {
      return gt.get(fe) ? gt.get(fe)[V] : r[V];
    }
    t && Sr && r.dropFromOthersDisabled !== b && (b ? hs([n], function(fe) {
      return q(fe, "dropTargetStyle");
    }, function(fe) {
      return q(fe, "dropTargetClasses");
    }) : ns([n], function(fe) {
      return q(fe, "dropTargetStyle");
    }, function(fe) {
      return q(fe, "dropTargetClasses");
    })), r.dropFromOthersDisabled = b, gt.set(n, r), _m(n, E);
    for (var ge = Sr ? Hs(r.items) : -1, ce = 0; ce < n.children.length; ce++) {
      var Q = n.children[ce];
      if (fm(Q, I), ce === ge) {
        _ || cm(Et, Q, Wt.x, Wt.y), r.transformDraggedElement(Et, ln, ce), hm(Q);
        continue;
      }
      Q.removeEventListener("mousedown", $s.get(Q)), Q.removeEventListener("touchstart", $s.get(Q)), I || (Q.addEventListener("mousedown", c), Q.addEventListener("touchstart", c), $s.set(Q, c)), i.set(Q, ce), t || (t = !0);
    }
  }
  return h(e), {
    update: function(v) {
      h(v);
    },
    destroy: function() {
      function v() {
        Nl(n, gt.get(n).type), gt.delete(n);
      }
      Sr && !n.closest("[".concat(kl, "]")) ? Sm(n, v) : v();
    }
  };
}
var Ya, bo = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
}, hu = (Ya = {}, Qi(Ya, bo.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), Qi(Ya, bo.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list"), Ya), Tm = "dnd-action-aria-alert", pt;
function _o() {
  pt || (pt = document.createElement("div"), function() {
    pt.id = Tm, pt.style.position = "fixed", pt.style.bottom = "0", pt.style.left = "0", pt.style.zIndex = "-5", pt.style.opacity = "0", pt.style.height = "0", pt.style.width = "0", pt.setAttribute("role", "alert");
  }(), document.body.prepend(pt), Object.entries(hu).forEach(function(n) {
    var e = Tg(n, 2), t = e[0], r = e[1];
    return document.body.prepend(Rm(t, r));
  }));
}
function Dm() {
  return zo ? null : (document.readyState === "complete" ? _o() : window.addEventListener("DOMContentLoaded", _o), Lr({}, bo));
}
function Lm() {
  zo || !pt || (Object.keys(hu).forEach(function(n) {
    var e;
    return (e = document.getElementById(n)) === null || e === void 0 ? void 0 : e.remove();
  }), pt.remove(), pt = void 0);
}
function Rm(n, e) {
  var t = document.createElement("div");
  return t.id = n, t.innerHTML = "<p>".concat(e, "</p>"), t.style.display = "none", t.style.position = "fixed", t.style.zIndex = "-5", t;
}
function Ui(n) {
  if (!zo) {
    pt || _o(), pt.innerHTML = "";
    var e = document.createTextNode(n);
    pt.appendChild(e), pt.style.display = "none", pt.style.display = "inline";
  }
}
var Om = "--any--", Hl = {
  outline: "rgba(255, 255, 102, 0.7) solid 2px"
}, xn = !1, yo, Zt, vi = "", ni, Kn, Rr = "", gs = /* @__PURE__ */ new WeakSet(), Ul = /* @__PURE__ */ new WeakMap(), Bl = /* @__PURE__ */ new WeakMap(), Co = /* @__PURE__ */ new Map(), Ot = /* @__PURE__ */ new Map(), kn = /* @__PURE__ */ new Map(), ms;
function Mm(n, e) {
  kn.size === 0 && (ms = Dm(), window.addEventListener("keydown", vu), window.addEventListener("click", gu)), kn.has(e) || kn.set(e, /* @__PURE__ */ new Set()), kn.get(e).has(n) || (kn.get(e).add(n), tu());
}
function Gl(n, e) {
  Zt === n && Sa(), kn.get(e).delete(n), nu(), kn.get(e).size === 0 && kn.delete(e), kn.size === 0 && (window.removeEventListener("keydown", vu), window.removeEventListener("click", gu), ms = void 0, Lm());
}
function vu(n) {
  if (xn)
    switch (n.key) {
      case "Escape": {
        Sa();
        break;
      }
    }
}
function gu() {
  xn && (gs.has(document.activeElement) || Sa());
}
function Pm(n) {
  if (xn) {
    var e = n.currentTarget;
    if (e !== Zt) {
      vi = e.getAttribute("aria-label") || "";
      var t = Ot.get(Zt), r = t.items, i = r.find(function(h) {
        return h[St] === Kn;
      }), a = r.indexOf(i), s = r.splice(a, 1)[0], d = Ot.get(e), l = d.items, c = d.autoAriaDisabled;
      e.getBoundingClientRect().top < Zt.getBoundingClientRect().top || e.getBoundingClientRect().left < Zt.getBoundingClientRect().left ? (l.push(s), c || Ui("Moved item ".concat(Rr, " to the end of the list ").concat(vi))) : (l.unshift(s), c || Ui("Moved item ".concat(Rr, " to the beginning of the list ").concat(vi)));
      var u = Zt;
      $i(u, r, {
        trigger: wt.DROPPED_INTO_ANOTHER,
        id: Kn,
        source: jt.KEYBOARD
      }), $i(e, l, {
        trigger: wt.DROPPED_INTO_ZONE,
        id: Kn,
        source: jt.KEYBOARD
      }), Zt = e;
    }
  }
}
function mu() {
  Co.forEach(function(n, e) {
    var t = n.update;
    return t(Ot.get(e));
  });
}
function Sa() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  Ot.get(Zt).autoAriaDisabled || Ui("Stopped dragging item ".concat(Rr)), gs.has(document.activeElement) && document.activeElement.blur(), n && Ur(Zt, Ot.get(Zt).items, {
    trigger: wt.DRAG_STOPPED,
    id: Kn,
    source: jt.KEYBOARD
  }), hs(kn.get(yo), function(e) {
    return Ot.get(e).dropTargetStyle;
  }, function(e) {
    return Ot.get(e).dropTargetClasses;
  }), ni = null, Kn = null, Rr = "", yo = null, Zt = null, vi = "", xn = !1, mu();
}
function Fm(n, e) {
  var t = {
    items: void 0,
    type: void 0,
    dragDisabled: !1,
    zoneTabIndex: 0,
    zoneItemTabIndex: 0,
    dropFromOthersDisabled: !1,
    dropTargetStyle: Hl,
    dropTargetClasses: [],
    autoAriaDisabled: !1
  };
  function r(u, h, f) {
    u.length <= 1 || u.splice(f, 1, u.splice(h, 1, u[f])[0]);
  }
  function i(u) {
    switch (u.key) {
      case "Enter":
      case " ": {
        if ((u.target.disabled !== void 0 || u.target.href || u.target.isContentEditable) && !gs.has(u.target))
          return;
        u.preventDefault(), u.stopPropagation(), xn ? Sa() : a(u);
        break;
      }
      case "ArrowDown":
      case "ArrowRight": {
        if (!xn) return;
        u.preventDefault(), u.stopPropagation();
        var h = Ot.get(n), f = h.items, v = Array.from(n.children), g = v.indexOf(u.currentTarget);
        g < v.length - 1 && (t.autoAriaDisabled || Ui("Moved item ".concat(Rr, " to position ").concat(g + 2, " in the list ").concat(vi)), r(f, g, g + 1), $i(n, f, {
          trigger: wt.DROPPED_INTO_ZONE,
          id: Kn,
          source: jt.KEYBOARD
        }));
        break;
      }
      case "ArrowUp":
      case "ArrowLeft": {
        if (!xn) return;
        u.preventDefault(), u.stopPropagation();
        var p = Ot.get(n), C = p.items, A = Array.from(n.children), E = A.indexOf(u.currentTarget);
        E > 0 && (t.autoAriaDisabled || Ui("Moved item ".concat(Rr, " to position ").concat(E, " in the list ").concat(vi)), r(C, E, E - 1), $i(n, C, {
          trigger: wt.DROPPED_INTO_ZONE,
          id: Kn,
          source: jt.KEYBOARD
        }));
        break;
      }
    }
  }
  function a(u) {
    d(u.currentTarget), Zt = n, yo = t.type, xn = !0;
    var h = Array.from(kn.get(t.type)).filter(function(v) {
      return v === Zt || !Ot.get(v).dropFromOthersDisabled;
    });
    if (ns(h, function(v) {
      return Ot.get(v).dropTargetStyle;
    }, function(v) {
      return Ot.get(v).dropTargetClasses;
    }), !t.autoAriaDisabled) {
      var f = "Started dragging item ".concat(Rr, ". Use the arrow keys to move it within its list ").concat(vi);
      h.length > 1 && (f += ", or tab to another list in order to move the item into it"), Ui(f);
    }
    Ur(n, Ot.get(n).items, {
      trigger: wt.DRAG_STARTED,
      id: Kn,
      source: jt.KEYBOARD
    }), mu();
  }
  function s(u) {
    xn && u.currentTarget !== ni && (u.stopPropagation(), Sa(!1), a(u));
  }
  function d(u) {
    var h = Ot.get(n), f = h.items, v = Array.from(n.children), g = v.indexOf(u);
    ni = u, ni.tabIndex = t.zoneItemTabIndex, Kn = f[g][St], Rr = v[g].getAttribute("aria-label") || "";
  }
  function l(u) {
    var h = u.items, f = h === void 0 ? [] : h, v = u.type, g = v === void 0 ? Om : v, p = u.dragDisabled, C = p === void 0 ? !1 : p, A = u.zoneTabIndex, E = A === void 0 ? 0 : A, x = u.zoneItemTabIndex, I = x === void 0 ? 0 : x, T = u.dropFromOthersDisabled, _ = T === void 0 ? !1 : T, y = u.dropTargetStyle, b = y === void 0 ? Hl : y, w = u.dropTargetClasses, D = w === void 0 ? [] : w, G = u.autoAriaDisabled, M = G === void 0 ? !1 : G;
    t.items = wn(f), t.dragDisabled = C, t.dropFromOthersDisabled = _, t.zoneTabIndex = E, t.zoneItemTabIndex = I, t.dropTargetStyle = b, t.dropTargetClasses = D, t.autoAriaDisabled = M, t.type && g !== t.type && Gl(n, t.type), t.type = g, Mm(n, g), M || (n.setAttribute("aria-disabled", C), n.setAttribute("role", "list"), n.setAttribute("aria-describedby", C ? ms.DND_ZONE_DRAG_DISABLED : ms.DND_ZONE_ACTIVE)), Ot.set(n, t), xn ? n.tabIndex = n === Zt || ni.contains(n) || t.dropFromOthersDisabled || Zt && t.type !== Ot.get(Zt).type ? -1 : 0 : n.tabIndex = t.zoneTabIndex, n.addEventListener("focus", Pm);
    for (var N = function(H) {
      var k = n.children[H];
      gs.add(k), k.tabIndex = xn ? -1 : t.zoneItemTabIndex, M || k.setAttribute("role", "listitem"), k.removeEventListener("keydown", Ul.get(k)), k.removeEventListener("click", Bl.get(k)), C || (k.addEventListener("keydown", i), Ul.set(k, i), k.addEventListener("click", s), Bl.set(k, s)), xn && t.items[H][St] === Kn && (ni = k, ni.tabIndex = t.zoneItemTabIndex, k.focus());
    }, le = 0; le < n.children.length; le++)
      N(le);
  }
  l(e);
  var c = {
    update: function(h) {
      l(h);
    },
    destroy: function() {
      Gl(n, t.type), Ot.delete(n), Co.delete(n);
    }
  };
  return Co.set(n, c), c;
}
var km = ["items", "flipDurationMs", "type", "dragDisabled", "morphDisabled", "dropFromOthersDisabled", "zoneTabIndex", "zoneItemTabIndex", "dropTargetStyle", "dropTargetClasses", "transformDraggedElement", "autoAriaDisabled", "centreDraggedOnCursor", "delayTouchStart", "dropAnimationDisabled"];
function Nm(n, e) {
  if (Hm(n))
    return {
      update: function() {
      },
      destroy: function() {
      }
    };
  Wl(e);
  var t = wm(n, e), r = Fm(n, e);
  return {
    update: function(a) {
      Wl(a), t.update(a), r.update(a);
    },
    destroy: function() {
      t.destroy(), r.destroy();
    }
  };
}
function Hm(n) {
  return !!n.closest("[".concat(Wg, '="true"]'));
}
function Wl(n) {
  var e = n.items;
  n.flipDurationMs, n.type, n.dragDisabled, n.morphDisabled, n.dropFromOthersDisabled;
  var t = n.zoneTabIndex, r = n.zoneItemTabIndex;
  n.dropTargetStyle;
  var i = n.dropTargetClasses;
  n.transformDraggedElement, n.autoAriaDisabled, n.centreDraggedOnCursor;
  var a = n.delayTouchStart;
  n.dropAnimationDisabled;
  var s = wg(n, km);
  if (Object.keys(s).length > 0 && console.warn("dndzone will ignore unknown options", s), !e)
    throw new Error("no 'items' key provided to dndzone");
  var d = e.find(function(u) {
    return !{}.hasOwnProperty.call(u, St);
  });
  if (d)
    throw new Error("missing '".concat(St, "' property for item ").concat(ha(d)));
  if (i && !Array.isArray(i))
    throw new Error("dropTargetClasses should be an array but instead it is a ".concat(Fi(i), ", ").concat(ha(i)));
  if (t && !Vl(t))
    throw new Error("zoneTabIndex should be a number but instead it is a ".concat(Fi(t), ", ").concat(ha(t)));
  if (r && !Vl(r))
    throw new Error("zoneItemTabIndex should be a number but instead it is a ".concat(Fi(r), ", ").concat(ha(r)));
  if (a !== void 0 && a !== !1) {
    var l = a === !0, c = typeof a == "number" && isFinite(a) && a >= 0;
    if (!l && !c)
      throw new Error("delayTouchStart should be a boolean (true/false) or a non-negative number but instead it is a ".concat(Fi(a), ", ").concat(ha(a)));
  }
}
function Vl(n) {
  return !isNaN(n) && function(e) {
    return (e | 0) === e;
  }(parseFloat(n));
}
function pu(n) {
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
var Pn = pu(!0), Bi = pu(!1);
function Zl() {
  return {
    dragDisabled: Bi.get() || Pn.get(),
    zoneItemTabIndex: -1
  };
}
function vr(n, e) {
  var t;
  Bi.set((t = e == null ? void 0 : e.dragDisabled) !== null && t !== void 0 ? t : !1);
  var r = e, i = Nm(n, Lr(Lr({}, r), Zl()));
  function a() {
    i.update(Lr(Lr({}, r), Zl()));
  }
  Pn.subscribe(a);
  function s(l) {
    var c = l.detail.info, u = c.source, h = c.trigger;
    u === jt.KEYBOARD && h === wt.DRAG_STOPPED && Pn.set(!0);
  }
  function d(l) {
    var c = l.detail.info.source;
    c === jt.POINTER && Pn.set(!0);
  }
  return n.addEventListener("consider", s), n.addEventListener("finalize", d), {
    update: function(c) {
      var u, h;
      r = c, Bi.set((u = (h = r) === null || h === void 0 ? void 0 : h.dragDisabled) !== null && u !== void 0 ? u : !1), a();
    },
    destroy: function() {
      n.removeEventListener("consider", s), n.removeEventListener("finalize", d), Pn.unsubscribe(a);
    }
  };
}
function gr(n) {
  n.setAttribute("role", "button");
  function e(a) {
    a.preventDefault(), Pn.set(!1), window.addEventListener("mouseup", r), window.addEventListener("touchend", r);
  }
  function t(a) {
    (a.key === "Enter" || a.key === " ") && Pn.set(!1);
  }
  function r() {
    Pn.set(!0), window.removeEventListener("mouseup", r), window.removeEventListener("touchend", r);
  }
  var i = function() {
    var s = Bi.get(), d = Pn.get();
    s ? (n.tabIndex = -1, n.style.cursor = "") : (n.tabIndex = d ? 0 : -1, n.style.cursor = d ? "grab" : "grabbing");
  };
  return Bi.subscribe(i), Pn.subscribe(i), n.addEventListener("mousedown", e), n.addEventListener("touchstart", e), n.addEventListener("keydown", t), {
    update: function() {
    },
    destroy: function() {
      n.removeEventListener("mousedown", e), n.removeEventListener("touchstart", e), n.removeEventListener("keydown", t), Bi.unsubscribe(i), Pn.unsubscribe(i);
    }
  };
}
function Um(n) {
  const e = n - 1;
  return e * e * e + 1;
}
function Yo(n, { from: e, to: t }, r = {}) {
  var { delay: i = 0, duration: a = (_) => Math.sqrt(_) * 120, easing: s = Um } = r, d = getComputedStyle(n), l = d.transform === "none" ? "" : d.transform, [c, u] = d.transformOrigin.split(" ").map(parseFloat);
  c /= n.clientWidth, u /= n.clientHeight;
  var h = Bm(n), f = n.clientWidth / t.width / h, v = n.clientHeight / t.height / h, g = e.left + e.width * c, p = e.top + e.height * u, C = t.left + t.width * c, A = t.top + t.height * u, E = (g - C) * f, x = (p - A) * v, I = e.width / t.width, T = e.height / t.height;
  return {
    delay: i,
    duration: typeof a == "function" ? a(Math.sqrt(E * E + x * x)) : a,
    easing: s,
    css: (_, y) => {
      var b = y * E, w = y * x, D = _ + y * I, G = _ + y * T;
      return `transform: ${l} translate(${b}px, ${w}px) scale(${D}, ${G});`;
    }
  };
}
function Bm(n) {
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
const Gm = Bn([]);
Gm.subscribe;
Tt(["click", "pointerdown", "pointerup", "pointermove"]);
var Wm = /* @__PURE__ */ z("<div><!></div>");
function Iu(n, e) {
  let t = m(e, "variant", 3, "secondary");
  var r = Wm(), i = B(r);
  tf(i, e, "default", {}), ve(() => pr(r, 1, `osc-card osc-card--${t()}`, "svelte-14hhvrx")), S(n, r);
}
var Vm = /* @__PURE__ */ z('<div class="panel-parent__header svelte-1rw2lbw"><!></div>'), Zm = /* @__PURE__ */ z('<div class="panel-parent__body svelte-1rw2lbw"><!></div>'), zm = /* @__PURE__ */ z('<div class="panel-parent__footer svelte-1rw2lbw"><!></div>'), jm = /* @__PURE__ */ z('<div class="panel-parent svelte-1rw2lbw"><!> <!> <!></div>');
function bu(n, e) {
  let t = m(e, "backgroundColor", 3, "");
  var r = jm(), i = B(r);
  {
    var a = (u) => {
      var h = Vm(), f = B(h);
      _e(f, () => e.header), S(u, h);
    };
    $(i, (u) => {
      e.header && u(a);
    });
  }
  var s = J(i, 2);
  {
    var d = (u) => {
      var h = Zm(), f = B(h);
      _e(f, () => e.content), S(u, h);
    };
    $(s, (u) => {
      e.content && u(d);
    });
  }
  var l = J(s, 2);
  {
    var c = (u) => {
      var h = zm(), f = B(h);
      _e(f, () => e.additional), S(u, h);
    };
    $(l, (u) => {
      e.additional && u(c);
    });
  }
  ve(() => nt(r, `--bg-color: ${t() ?? ""}`)), S(n, r);
}
Tt(["click"]);
const qm = 4e3;
function Xm() {
  let n = Ce({ items: [] }), e = 0;
  const t = (i) => {
    n.items = n.items.filter((a) => a.id !== i);
  }, r = (i, a, s, d = qm) => {
    const l = e++, c = { id: l, summary: a, detail: s, type: i };
    return n.items = [...n.items, c], setTimeout(
      () => {
        t(l);
      },
      d
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
Xm();
Tt(["input"]);
const Ym = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHByb2Nlc3Nlcz4KICA8cHJvY2Vzcz4KICAgIDxpZD5zdGFuZGFyZC1wcm9jZXNzLTE8L2lkPgogICAgPHZlcnNpb24+MC4wLjE8L3ZlcnNpb24+CiAgICA8bmFtZT5TdGFuZGFyZCBQcm9jZXNzIDE8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+CiAgICAgIFRoaXMgaXMgYSBzdGFuZGFyZGl6ZWQgcHJvY2VzcyB1c2VkIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHkKICAgIDwvZGVzY3JpcHRpb24+CgogICAgPHBsdWdpbnMtc2VxdWVuY2U+CiAgICAgIDwhLS0tIHN1Z2dlc3Rpb24gLS0+CiAgICAgIDxncm91cD4KICAgICAgICA8dGl0bGU+RGVtbyBQbHVnaW4gTG9hZGVyPC90aXRsZT4KICAgICAgICA8IS0tIEV4dGVybmFsIHBsdWdpbiAtLT4KICAgICAgICA8cGx1Z2luPgogICAgICAgICAgPGlkPnN1YnN0YXRpb24tZXhwbG9yZXItdjI8L2lkPgogICAgICAgICAgPG5hbWU+U3Vic3RhdGlvbjwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iaW50ZXJuYWwiPgogICAgICAgICAgIC9wbHVnaW5zL3NyYy9lZGl0b3JzL1N1YnN0YXRpb24uanMgCiAgICAgICAgICA8L3NyYz4KICAgICAgICA8L3BsdWdpbj4KCiAgICAgICAgPCEtLSBJbnRlcm5hbCBwbHVnaW4gLS0+CiAgICAgICAgPHBsdWdpbj4KICAgICAgICAgIDxpZD5pZWQtZWRpdG9yLXYyPC9pZD4KICAgICAgICAgIDxuYW1lPklFRDwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iaW50ZXJuYWwiPi9wbHVnaW5zL3NyYy9lZGl0b3JzL0lFRC5qczwvc3JjPgogICAgICAgIDwvcGx1Z2luPgogICAgICA8L2dyb3VwPgoKICAgICAgPGdyb3VwPgogICAgICAgIDx0aXRsZT5EYXRhPC90aXRsZT4KICAgICAgICA8cGx1Z2luPgogICAgICAgICAgPGlkPnN1YnN0YXRpb24tZXhwbG9yZXI8L2lkPgogICAgICAgICAgPG5hbWU+U3Vic3RhdGlvbjwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iZXh0ZXJuYWwiPgogICAgICAgICAgICBodHRwczovL3BoaWxpcHBpbGlldnNraWJlYXJpbmdwb2ludGNvbS5naXRodWIuaW8vb3NjZC1vZmZpY2lhbC1wbHVnaW5zLXRlc3QvcGx1Z2lucy9lZGl0b3JzL3N1YnN0YXRpb24uanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgogICAgICA8L2dyb3VwPgoKICAgICAgPGdyb3VwPgogICAgICAgIDx0aXRsZT5Db25uZWN0aW9uPC90aXRsZT4KICAgICAgICA8cGx1Z2luPgogICAgICAgICAgPGlkPmllZC1lZGl0b3I8L2lkPgogICAgICAgICAgPG5hbWU+SUVEPC9uYW1lPgogICAgICAgICAgPHNyYz4KICAgICAgICAgICAgaHR0cHM6Ly9waGlsaXBwaWxpZXZza2liZWFyaW5ncG9pbnRjb20uZ2l0aHViLmlvL29zY2Qtb2ZmaWNpYWwtcGx1Z2lucy10ZXN0L3BsdWdpbnMvZWRpdG9ycy9pZWQuanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgoKICAgICAgICA8cGx1Z2luPgogICAgICAgICAgPGlkPnRlbXBsYXRlLWdlbmVyYXRvcjwvaWQ+CiAgICAgICAgICA8bmFtZT5UZW1wbGF0ZSBHZW5lcmF0b3I8L25hbWU+CiAgICAgICAgICA8c3JjPgogICAgICAgICAgICBodHRwczovL2FzZS1jb21wYXMuZ2l0aHViLmlvL2NvbXBhcy10cmFuc25ldGJ3LXBsdWdpbnMvYmVhcmluZ3BvaW50L2NvbXBhcy9wbHVnaW5zL3RlbXBsYXRlLWdlbmVyYXRvci9pbmRleC5qcwogICAgICAgICAgPC9zcmM+CiAgICAgICAgPC9wbHVnaW4+CgogICAgICA8L2dyb3VwPgogICAgICA8Z3JvdXA+CiAgICAgICAgPHRpdGxlPkNvbW11bmljYXRpb248L3RpdGxlPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+Y29tbXVuaWNhdGlvbi1leHBsb3JlcjwvaWQ+CiAgICAgICAgICA8bmFtZT5Db21tdW5pY2F0aW9uIEV4cGxvcmVyPC9uYW1lPgogICAgICAgICAgPHNyYz4KICAgICAgICAgICAgaHR0cHM6Ly9waGlsaXBwaWxpZXZza2liZWFyaW5ncG9pbnRjb20uZ2l0aHViLmlvL29zY2Qtb2ZmaWNpYWwtcGx1Z2lucy10ZXN0L3BsdWdpbnMvZWRpdG9ycy9jb21tdW5pY2F0aW9uLmpzCiAgICAgICAgICA8L3NyYz4KICAgICAgICA8L3BsdWdpbj4KICAgICAgPC9ncm91cD4KICAgIDwvcGx1Z2lucy1zZXF1ZW5jZT4KICA8L3Byb2Nlc3M+CiAgPHByb2Nlc3M+CiAgICA8aWQ+c3RhbmRhcmQtcHJvY2Vzcy0yPC9pZD4KICAgIDx2ZXJzaW9uPjAuMC4xPC92ZXJzaW9uPgogICAgPG5hbWU+U3RhbmRhcmQgUHJvY2VzcyAyPC9uYW1lPgogICAgPGRlc2NyaXB0aW9uPgogICAgICBUaGlzIGlzIGEgc3RhbmRhcmRpemVkIHByb2Nlc3MgdXNlZCBmb3IgdGVzdGluZyBwdXJwb3NlcyBvbmx5CiAgICA8L2Rlc2NyaXB0aW9uPgoKICAgIDxwbHVnaW5zLXNlcXVlbmNlPgogICAgICA8Z3JvdXA+CiAgICAgICAgPHRpdGxlPkRhdGE8L3RpdGxlPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+c3Vic3RhdGlvbi1leHBsb3JlcjwvaWQ+CiAgICAgICAgICA8bmFtZT5TdWJzdGF0aW9uPC9uYW1lPgogICAgICAgICAgPHNyYz4KICAgICAgICAgICAgaHR0cHM6Ly9waGlsaXBwaWxpZXZza2liZWFyaW5ncG9pbnRjb20uZ2l0aHViLmlvL29zY2Qtb2ZmaWNpYWwtcGx1Z2lucy10ZXN0L3BsdWdpbnMvZWRpdG9ycy9zdWJzdGF0aW9uLmpzCiAgICAgICAgICA8L3NyYz4KICAgICAgICA8L3BsdWdpbj4KICAgICAgPC9ncm91cD4KCiAgICAgIDxncm91cD4KICAgICAgICA8dGl0bGU+Q29ubmVjdGlvbjwvdGl0bGU+CiAgICAgICAgPHBsdWdpbj4KICAgICAgICAgIDxpZD5pZWQtZWRpdG9yPC9pZD4KICAgICAgICAgIDxuYW1lPklFRDwvbmFtZT4KICAgICAgICAgIDxzcmM+CiAgICAgICAgICAgIGh0dHBzOi8vcGhpbGlwcGlsaWV2c2tpYmVhcmluZ3BvaW50Y29tLmdpdGh1Yi5pby9vc2NkLW9mZmljaWFsLXBsdWdpbnMtdGVzdC9wbHVnaW5zL2VkaXRvcnMvaWVkLmpzCiAgICAgICAgICA8L3NyYz4KICAgICAgICA8L3BsdWdpbj4KCiAgICAgICAgPHBsdWdpbj4KICAgICAgICAgIDxpZD50ZW1wbGF0ZS1nZW5lcmF0b3I8L2lkPgogICAgICAgICAgPG5hbWU+VGVtcGxhdGUgR2VuZXJhdG9yPC9uYW1lPgogICAgICAgICAgPHNyYz4KICAgICAgICAgICAgaHR0cHM6Ly9hc2UtY29tcGFzLmdpdGh1Yi5pby9jb21wYXMtdHJhbnNuZXRidy1wbHVnaW5zL2JlYXJpbmdwb2ludC9jb21wYXMvcGx1Z2lucy90ZW1wbGF0ZS1nZW5lcmF0b3IvaW5kZXguanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgoKICAgICAgPC9ncm91cD4KICAgICAgPGdyb3VwPgogICAgICAgIDx0aXRsZT5Db21tdW5pY2F0aW9uPC90aXRsZT4KICAgICAgICA8cGx1Z2luPgogICAgICAgICAgPGlkPmNvbW11bmljYXRpb24tZXhwbG9yZXI8L2lkPgogICAgICAgICAgPG5hbWU+Q29tbXVuaWNhdGlvbiBFeHBsb3JlcjwvbmFtZT4KICAgICAgICAgIDxzcmM+CiAgICAgICAgICAgIGh0dHBzOi8vcGhpbGlwcGlsaWV2c2tpYmVhcmluZ3BvaW50Y29tLmdpdGh1Yi5pby9vc2NkLW9mZmljaWFsLXBsdWdpbnMtdGVzdC9wbHVnaW5zL2VkaXRvcnMvY29tbXVuaWNhdGlvbi5qcwogICAgICAgICAgPC9zcmM+CiAgICAgICAgPC9wbHVnaW4+CiAgICAgIDwvZ3JvdXA+CiAgICA8L3BsdWdpbnMtc2VxdWVuY2U+CiAgPC9wcm9jZXNzPgo8L3Byb2Nlc3Nlcz4K", Ao = Ce({ loading: !1 }), Eo = Ce({ error: "" }), tr = Ce({ processes: [] }), Ct = Ce({ process: null }), ii = Ce({ isEditing: !1 }), _u = Ce({ plugins: [] }), Km = Ym, yu = "engineeringWizardProcesses", Jm = "external";
if (typeof localStorage < "u") {
  const n = localStorage.getItem(yu);
  if (n)
    try {
      const e = JSON.parse(n);
      Array.isArray(e) && (tr.processes = e);
    } catch {
    }
}
Rc(() => {
  Se(() => {
    tr.processes.forEach((e) => {
      var t;
      (t = e.pluginGroups) == null || t.forEach((r) => {
        var i;
        (i = r.plugins) == null || i.length;
      });
    });
    const n = sc(tr.processes);
    if (!(typeof localStorage > "u"))
      try {
        localStorage.setItem(yu, JSON.stringify(n));
      } catch {
      }
  });
});
const fr = (n) => {
  var e;
  return ((e = n == null ? void 0 : n.textContent) == null ? void 0 : e.trim()) ?? "";
}, Qm = (n, e) => (n == null ? void 0 : n.getAttribute(e)) ?? void 0, $m = (n) => {
  const e = Qm(n == null ? void 0 : n.querySelector("src"), "type") ?? "";
  return e === "internal" || e === "external" ? e : Jm;
}, Ka = (n, e) => Array.from(n.querySelectorAll(e)), zl = (n) => ({
  id: fr(n.querySelector("id")),
  name: fr(n.querySelector("name")),
  src: fr(n.querySelector("src")) || void 0,
  sourceUrl: fr(n.querySelector("sourceUrl")) || void 0,
  type: $m(n)
}), ep = (n) => Ka(n, "process").map((e) => {
  const t = Ka(e, ":scope > plugins-sequence > group"), r = t.length ? t.map((i) => ({
    title: fr(i.querySelector(":scope > title")) || "Untitled",
    plugins: Ka(i, ":scope > plugin").map(zl)
  })) : [
    {
      title: "Ungrouped",
      plugins: Ka(e, ":scope > plugins-sequence > plugin").map(zl)
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
async function tp() {
  Ao.loading = !0, Eo.error = "";
  try {
    const n = await fetch(Km, { cache: "no-cache" });
    if (!n.ok)
      throw new Error(`HTTP ${n.status}${n.statusText ? `: ${n.statusText}` : ""}`);
    const e = await n.text();
    if (typeof DOMParser > "u")
      throw new Error("DOMParser is not available in this environment.");
    const t = new DOMParser().parseFromString(e, "application/xml");
    if (t.getElementsByTagName("parsererror").length)
      throw new Error("Invalid XML file format.");
    const r = ep(t);
    return tr.processes = r, r;
  } catch (n) {
    const e = n instanceof Error ? n.message : "Failed to load processes.";
    throw Eo.error = e, n;
  } finally {
    Ao.loading = !1;
  }
}
function np(n, e, t) {
  const r = "Ungrouped", i = tr.processes.find((d) => d.id === n);
  if (!i) return;
  const a = i.pluginGroups ?? (i.pluginGroups = []);
  let s = a.find((d) => d.title === r);
  s || (s = { title: r, plugins: [] }, a.push(s)), s.plugins || (s.plugins = []), s.plugins.push(e);
}
function rp(n, e) {
  const t = tr.processes.find((r) => r.id === n);
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
function ip(n) {
  const e = tr.processes.find((t) => t.id === n);
  if (!(!e || !e.pluginGroups))
    for (const t of e.pluginGroups)
      t.plugins && (t.plugins.length = 0);
}
function ap(n, e, t) {
  const r = tr.processes.find((s) => s.id === n);
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
function sp(n, e) {
  const t = tr.processes.find((r) => r.id === n);
  t && t.pluginGroups.splice(0, t.pluginGroups.length, ...e);
}
function op(n) {
  _u.plugins = [...n];
}
function lp(n) {
  return (n.pluginGroups ?? []).flatMap((e) => e.plugins ?? []);
}
var dp = (n, e, t) => e.handleView(t()), up = (n, e, t) => e.handleStart(t()), cp = /* @__PURE__ */ z('<button type="button" class="icon svelte-au6aaq" aria-label="View process"><!></button> <button type="button" class="icon svelte-au6aaq" aria-label="Start process"><!></button>', 1), fp = /* @__PURE__ */ z(`<div class="processes svelte-au6aaq"><div class="process-banner svelte-au6aaq"><div class="process-banner__info svelte-au6aaq"><!> <span class="svelte-au6aaq">A process “Process Name C” has already been started for the ---.scd.
        Would you like to continue where you left off?</span></div> <!></div> <div class="process-toolbar svelte-au6aaq"><!> <!></div> <!></div>`);
function hp(n, e) {
  Ae(e, !0);
  let t = /* @__PURE__ */ ue(""), r = /* @__PURE__ */ ie(() => o(t).trim().toLowerCase()), i = /* @__PURE__ */ ie(() => (tr.processes ?? []).map((A) => ({ ...A, displayName: A.name || A.id }))), a = /* @__PURE__ */ ie(() => o(r) ? o(i).filter((A) => (A.displayName ?? "").toLowerCase().includes(o(r))) : o(i));
  const s = [
    { key: "displayName", header: "Name" },
    { key: "description", header: "Description" }
  ], d = () => {
    console.log("Add new process clicked");
  };
  var l = fp(), c = B(l), u = B(c), h = B(u);
  Lv(h, {});
  var f = J(u, 2);
  Hr(f, {
    variant: "raised",
    style: "--mdc-theme-primary: #ffffff; --mdc-theme-on-primary: #004552",
    $$events: { click: () => console.log("Continue Process") },
    children: (A, E) => {
      var x = dt("CONTINUE");
      S(A, x);
    },
    $$slots: { default: !0 }
  });
  var v = J(c, 2), g = B(v);
  ds(g, {
    variant: "outlined",
    label: "Search Processes",
    get value() {
      return o(t);
    },
    set value(A) {
      W(t, A, !0);
    }
  });
  var p = J(g, 2);
  Hr(p, {
    variant: "raised",
    style: "--mdc-theme-primary: #004552; --mdc-theme-on-primary: #ffffff",
    $$events: { click: d },
    children: (A, E) => {
      var x = dt("ADD NEW PROCESS");
      S(A, x);
    },
    $$slots: { default: !0 }
  });
  var C = J(v, 2);
  mg(C, {
    get items() {
      return o(a);
    },
    get columns() {
      return s;
    },
    get loading() {
      return Ao.loading;
    },
    get errorMsg() {
      return Eo.error;
    },
    emptyText: "No processes available.",
    hasActions: !0,
    headerBg: "#DAE3E6",
    rowBg: "#ffffff",
    actions: (E, x) => {
      let I = () => x == null ? void 0 : x().item;
      var T = cp(), _ = j(T);
      _.__click = [dp, e, I];
      var y = B(_);
      Jd(y, { svgStyles: "fill: #002B37; width: 100%; height: 100%;" });
      var b = J(_, 2);
      b.__click = [up, e, I];
      var w = B(b);
      Tv(w, { svgStyles: "fill: #002B37; width: 100%; height: 100%;" }), S(E, T);
    },
    $$slots: { actions: !0 }
  }), S(n, l), Ee();
}
Tt(["click"]);
var vp = (n, e, t) => e.onSelect(o(t).id), gp = /* @__PURE__ */ z("<button><!></button>"), mp = /* @__PURE__ */ z('<div class="step-line svelte-1ar0udo" aria-hidden="true"></div>'), pp = /* @__PURE__ */ z('<div class="step svelte-1ar0udo"><!> <p> </p></div> <!>', 1), Ip = /* @__PURE__ */ z('<div class="steps svelte-1ar0udo"></div>');
function Cu(n, e) {
  Ae(e, !0);
  let t = m(e, "items", 19, () => []), r = m(e, "visited", 19, () => []), i = m(e, "currentId", 3, null), a = m(e, "status", 19, () => ({})), s = m(e, "tooltipMap", 19, () => ({}));
  var d = Ip();
  vn(d, 21, t, hr, (l, c, u) => {
    var h = pp(), f = j(h), v = B(f);
    {
      let E = /* @__PURE__ */ ie(() => s()[o(c).id] ?? "");
      $d(v, {
        get content() {
          return o(E);
        },
        side: "bottom",
        children: (x, I) => {
          var T = gp();
          T.__click = [vp, e, c];
          let _;
          var y = B(T);
          {
            var b = (D) => {
              var G = re(), M = j(G);
              {
                var N = (U) => {
                  Cv(U);
                }, le = (U) => {
                  var H = re(), k = j(H);
                  {
                    var X = (R) => {
                      Ev(R);
                    }, oe = (R) => {
                      var K = re(), q = j(K);
                      {
                        var ge = (Q) => {
                          xv(Q, {});
                        }, ce = (Q) => {
                          var fe = dt();
                          fe.nodeValue = u + 1, S(Q, fe);
                        };
                        $(
                          q,
                          (Q) => {
                            a()[o(c).id] === "warning" ? Q(ge) : Q(ce, !1);
                          },
                          !0
                        );
                      }
                      S(R, K);
                    };
                    $(
                      k,
                      (R) => {
                        a()[o(c).id] === "error" ? R(X) : R(oe, !1);
                      },
                      !0
                    );
                  }
                  S(U, H);
                };
                $(M, (U) => {
                  a()[o(c).id] === "check" ? U(N) : U(le, !1);
                });
              }
              S(D, G);
            }, w = (D) => {
              var G = dt();
              G.nodeValue = u + 1, S(D, G);
            };
            $(y, (D) => {
              r().includes(o(c).id) && o(c).id !== i() ? D(b) : D(w, !1);
            });
          }
          ve(
            (D) => {
              Qt(T, "aria-current", o(c).id === i() ? "step" : void 0), _ = pr(T, 1, "", null, _, D);
            },
            [
              () => ({
                "not-visited": !r().includes(o(c).id),
                current: o(c).id === i(),
                visited: r().includes(o(c).id) && o(c).id !== i()
              })
            ]
          ), S(x, T);
        },
        $$slots: { default: !0 }
      });
    }
    var g = J(v, 2), p = B(g), C = J(f, 2);
    {
      var A = (E) => {
        var x = mp();
        S(E, x);
      };
      $(C, (E) => {
        u < t().length - 1 && E(A);
      });
    }
    ve(() => Pe(p, o(c).label)), S(l, h);
  }), S(n, d), Ee();
}
Tt(["click"]);
function bp(n, e) {
  const t = [
    { id: "process-definition", label: "Process Definition" },
    {
      id: "validator-configuration",
      label: "Validator Configuration"
    }
  ];
  let r = m(e, "currentId", 3, null), i = m(e, "visited", 19, () => []);
  Cu(n, {
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
var _p = /* @__PURE__ */ z('<div style="display:flex;align-items:center;gap:0.5rem;"><button type="button" class="back-container svelte-1i38ker"><!> <span>Back to Overview</span> <span class="back-container__title svelte-1i38ker"> </span></button></div>');
function Au(n, e) {
  let t = m(e, "title", 3, "Engineering Wizard");
  var r = _p(), i = B(r);
  i.__click = function(...l) {
    var c;
    (c = e.onBack) == null || c.apply(this, l);
  };
  var a = B(i);
  Ov(a, {});
  var s = J(a, 4), d = B(s);
  ve(() => Pe(d, t())), S(n, r);
}
Tt(["click"]);
var yp = /* @__PURE__ */ z('<div class="add-group-form svelte-1ceeuzb"><!> <!></div>');
function Cp(n, e) {
  Ae(e, !0);
  let t = m(e, "open", 15, !1), r = /* @__PURE__ */ ue(""), i = /* @__PURE__ */ ue(Ce((e.groups + 1).toString()));
  const a = () => Fr("cancel"), s = () => Fr("confirm", { name: o(r), position: Number(o(i)) });
  let d = /* @__PURE__ */ ie(() => [
    ...Array.from({ length: e.groups }, (c, u) => ({ value: (u + 1).toString(), label: (u + 1).toString() })),
    // iterate from 1..groups
    { value: (e.groups + 1).toString(), label: "End" }
    // add option end
  ]), l = /* @__PURE__ */ ie(() => o(r) && o(i));
  {
    const c = (h) => {
      var f = yp(), v = B(f);
      Zd(v, {
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
      var g = J(v, 2);
      Xh(g, {
        get data() {
          return o(d);
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
      }), S(h, f);
    };
    let u = /* @__PURE__ */ ie(() => !o(l));
    Go(n, {
      title: "Add Groups",
      confirmActionText: "Add",
      maxWidth: "600px",
      onConfirm: s,
      onCancel: a,
      onClose: a,
      get confirmDisabled() {
        return o(u);
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
var Ap = /* @__PURE__ */ z('<div class="group-list-item svelte-1xbvuu5"><div><!></div> <!> <!></div>'), Ep = /* @__PURE__ */ z('<div class="edit-groups-form"><h3>Drag & Drop to change Order</h3> <div></div></div>');
function Sp(n, e) {
  Ae(e, !0);
  const t = 100;
  let r = m(e, "open", 15, !1), i = /* @__PURE__ */ ue(Ce([...e.groups]));
  const a = () => Fr("cancel"), s = () => {
    Fr("confirm", { groups: o(i).map((u) => ({ ...u })) });
  }, d = (u) => () => {
    W(i, o(i).filter((h) => h.id !== u), !0);
  }, l = (u) => {
    W(i, u.detail.items, !0);
  };
  let c = /* @__PURE__ */ ie(() => o(i).every((u) => u.title.trim().length > 0));
  {
    const u = (f) => {
      var v = Ep(), g = J(B(v), 2);
      vn(g, 29, () => o(i), (p) => p.id, (p, C, A) => {
        var E = Ap(), x = B(E), I = B(x);
        Wo(I, {}), Oe(x, (y) => gr == null ? void 0 : gr(y));
        var T = J(x, 2);
        Zd(T, {
          label: "Name",
          variant: "outlined",
          required: !0,
          get value() {
            return o(C).title;
          },
          set value(y) {
            o(C).title = y;
          }
        });
        var _ = J(T, 2);
        {
          let y = /* @__PURE__ */ ie(() => d(o(C).id));
          eu(_, {
            type: "delete",
            tooltip: "Delete",
            fillColor: "#FF203A",
            get onClick() {
              return o(y);
            }
          });
        }
        ve(() => Qt(E, "data-id", o(C).id)), Bo(E, () => Yo, () => ({ duration: t })), S(p, E);
      }), Oe(g, (p, C) => vr == null ? void 0 : vr(p, C), () => ({
        items: o(i),
        flipDurationMs: t,
        dropTargetStyle: {}
      })), hn("consider", g, l), hn("finalize", g, l), S(f, v);
    };
    let h = /* @__PURE__ */ ie(() => !o(c));
    Go(n, {
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
      content: u,
      $$slots: { content: !0 }
    });
  }
  Ee();
}
async function xp(n, e, t) {
  const r = await Rs(Cp, { groups: e().length });
  r.type === "confirm" && t()(r.data.name, r.data.position);
}
async function wp(n, e, t) {
  const r = e().map((s, d) => ({ id: d.toString(), title: s.title })), i = await Rs(Sp, { groups: r });
  if (i.type !== "confirm") return;
  const a = i.data.groups.map((s) => {
    const d = parseInt(s.id, 10);
    return { ...e()[d], title: s.title };
  });
  t()(a);
}
var Tp = /* @__PURE__ */ z('<div class="plugin-list__header-action svelte-1a2zky1"><!></div>'), Dp = /* @__PURE__ */ z('<header class="plugin-list__header svelte-1a2zky1"><p class="plugin-list__title svelte-1a2zky1"> </p> <!></header>'), Lp = /* @__PURE__ */ z('<div aria-label="drag-handle"><!></div>'), Rp = /* @__PURE__ */ z('<div class="plugin-list__item-action svelte-1a2zky1"><!></div>'), Op = /* @__PURE__ */ z('<div class="plugin-list__item-row svelte-1a2zky1"><div class="plugin-list__item-row__left svelte-1a2zky1"><!> <span class="plugin-list__item-name svelte-1a2zky1"> </span></div> <!></div>'), Mp = /* @__PURE__ */ z("<div><!></div>"), Pp = /* @__PURE__ */ z('<section class="plugin-list__group svelte-1a2zky1"><header class="plugin-list__group-header svelte-1a2zky1"><span class="plugin-list__group-index svelte-1a2zky1"></span> <span class="plugin-list__group-title svelte-1a2zky1"> </span></header> <div></div></section>'), Fp = /* @__PURE__ */ z('<div class="plugin-list__body svelte-1a2zky1"></div>'), kp = /* @__PURE__ */ z('<div class="plugin-list__footer svelte-1a2zky1"><button type="button" class="plugin-list__footer-button plugin-list__footer-button--edit svelte-1a2zky1"><!> <span>Edit groups</span></button> <button type="button" class="plugin-list__footer-button plugin-list__footer-button--add svelte-1a2zky1"><!> <span>Add group</span></button></div>');
function Eu(n, e) {
  Ae(e, !0);
  const t = (h) => {
    var f = Dp(), v = B(f), g = B(v), p = J(v, 2);
    {
      var C = (A) => {
        var E = Tp(), x = B(E);
        _e(x, () => e.headerAction), S(A, E);
      };
      $(p, (A) => {
        e.headerAction && A(C);
      });
    }
    ve(() => Pe(g, s())), S(h, f);
  }, r = (h) => {
    var f = Fp();
    vn(f, 21, a, hr, (v, g, p) => {
      var C = Pp(), A = B(C), E = B(A);
      E.textContent = `${p + 1}.`;
      var x = J(E, 2), I = B(x), T = J(A, 2);
      let _;
      vn(T, 31, () => o(g).plugins, (y) => y.id, (y, b, w) => {
        var D = Mp(), G = B(D);
        Iu(G, {
          variant: "secondary",
          children: (M, N) => {
            var le = Op(), U = B(le), H = B(U);
            {
              var k = (q) => {
                var ge = Lp(), ce = B(ge);
                Wo(ce, {}), Oe(ge, (Q) => gr == null ? void 0 : gr(Q)), S(q, ge);
              };
              $(H, (q) => {
                ii.isEditing && q(k);
              });
            }
            var X = J(H, 2), oe = B(X), R = J(U, 2);
            {
              var K = (q) => {
                var ge = Rp(), ce = B(ge);
                _e(ce, () => e.itemAction, () => ({
                  group: o(g),
                  plugin: o(b),
                  groupIndex: p,
                  pluginIndex: o(w)
                })), S(q, ge);
              };
              $(R, (q) => {
                e.itemAction && q(K);
              });
            }
            ve(() => Pe(oe, o(b).name)), S(M, le);
          },
          $$slots: { default: !0 }
        }), ve(() => Qt(D, "data-id", o(b).id)), Bo(D, () => Yo, () => ({ duration: 100 })), S(y, D);
      }), Oe(T, (y, b) => vr == null ? void 0 : vr(y, b), () => ({
        items: o(g).plugins,
        flipDurationMs: 100,
        dropTargetStyle: {}
      })), ve(
        (y) => {
          Pe(I, o(g).title), _ = pr(T, 1, "plugin-list__group-plugins svelte-1a2zky1", null, _, y);
        },
        [
          () => ({
            "plugin_list__group-plugins--dashed": ii.isEditing
          })
        ]
      ), hn("consider", T, (y) => c(y, o(g))), hn("finalize", T, (y) => u(y, o(g))), S(v, C);
    }), S(h, f);
  }, i = (h) => {
    var f = re(), v = j(f);
    {
      var g = (p) => {
        var C = kp(), A = B(C);
        A.__click = [wp, a, l];
        var E = B(A);
        Yd(E, {
          svgStyles: "fill: var(--primary-base);",
          "aria-hidden": "true"
        });
        var x = J(A, 2);
        x.__click = [xp, a, d];
        var I = B(x);
        Qd(I, {
          svgStyles: "fill: var(--primary-base);",
          "aria-hidden": "true"
        }), S(p, C);
      };
      $(v, (p) => {
        ii.isEditing && p(g);
      });
    }
    S(h, f);
  };
  let a = m(e, "pluginGroups", 19, () => []), s = m(e, "title", 3, "Process"), d = m(e, "onAddGroup", 3, () => {
  }), l = m(e, "onUpdateGroups", 3, (h) => {
  });
  function c(h, f) {
    f.plugins = h.detail.items;
  }
  function u(h, f) {
    h.detail.info.trigger === wt.DROPPED_OUTSIDE_OF_ANY ? f.plugins = h.detail.items.filter((v) => h.detail.info.id !== v.id) : f.plugins = h.detail.items, l()(a());
  }
  bu(n, {
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
Tt(["click"]);
function Np(n, e) {
  const t = (i) => {
    Hr(i, {
      variant: "raised",
      style: "--mdc-theme-primary: var(--on-brand); --mdc-theme-on-primary: var(--brand)",
      "aria-label": "Edit process",
      get onclick() {
        return e.requestEdit;
      },
      children: (a, s) => {
        var d = dt("EDIT");
        S(a, d);
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
function Hp() {
  var e;
  const n = document.querySelector("open-scd");
  return ((e = n == null ? void 0 : n.shadowRoot) == null ? void 0 : e.querySelector("compas-layout")) ?? null;
}
function Up(n) {
  var e;
  (e = Hp()) == null || e.dispatchEvent(
    new CustomEvent("toggle-editor-tabs", {
      detail: { visible: n },
      bubbles: !0,
      composed: !0
    })
  );
}
async function Bp(n) {
  if (!customElements.get(n.id) && n.type === "external") {
    const e = await import(
      /* @vite-ignore */
      n.src
    );
    customElements.define(n.id, e.default);
  }
}
async function Gp(n) {
  await Promise.all(
    n.filter((e) => e.type === "external").map(async (e) => {
      try {
        if (!customElements.get(e.id)) {
          const t = await import(
            /* @vite-ignore */
            e.src
          );
          customElements.define(e.id, t.default);
        }
      } catch (t) {
        console.error("Failed to preload plugin", e.id, t);
      }
    })
  );
}
const Nr = Bn(!0);
Nr.subscribe((n) => {
  Up(n);
});
var Wp = (n, e, t) => e(t().id), Vp = /* @__PURE__ */ z('<button type="button" class="plugin-list__removeBtn svelte-gipzw9"><!></button>');
function Zp(n, e) {
  Ae(e, !0);
  const t = (u) => {
    var h = re(), f = j(h);
    {
      var v = (g) => {
        Hr(g, {
          style: "background-color: #FF203A",
          variant: "raised",
          "aria-label": "Remove all plugins",
          onclick: a,
          children: (p, C) => {
            var A = dt("REMOVE ALL");
            S(p, A);
          },
          $$slots: { default: !0 }
        });
      };
      $(f, (g) => {
        o(c) && g(v);
      });
    }
    S(u, h);
  }, r = (u, h) => {
    let f = () => h == null ? void 0 : h().plugin;
    var v = Vp();
    v.__click = [Wp, s, f];
    var g = B(v);
    gv(g, { svgStyles: "fill: #FF203A" }), ve(() => Qt(v, "aria-label", `Remove ${f().name}`)), S(u, v);
  };
  let i = m(e, "pluginGroups", 19, () => []);
  async function a() {
    (await Rs(dv, {
      title: "Remove all entries?",
      message: "This action cannot be undone. You will need to manually search for and re-add each item, and rearrange them again.",
      confirmActionText: "Remove All",
      cancelActionText: "Cancel",
      confirmActionColor: "danger"
    })).type === "confirm" && ip(Ct.process.id);
  }
  function s(u) {
    rp(Ct.process.id, u);
  }
  function d(u, h) {
    ap(Ct.process.id, u, h);
  }
  function l(u) {
    sp(Ct.process.id, u);
  }
  let c = /* @__PURE__ */ ie(() => i().flatMap((u) => u.plugins).length > 0);
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
    onAddGroup: (u, h) => d(u, h),
    onUpdateGroups: (u) => l(u)
  }), Ee();
}
Tt(["click"]);
function zp(n) {
  var r;
  const e = n.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "").slice(0, 32), t = ((r = crypto.randomUUID) == null ? void 0 : r.call(crypto).split("-")[0]) ?? Math.random().toString(36).slice(2, 10);
  return `ext-${e || "plugin"}-${t}`;
}
var jp = /* @__PURE__ */ z('<div class="card-header svelte-1fcjrhj"><p class="header-info svelte-1fcjrhj">Add External Plugins</p> <div class="search-input svelte-1fcjrhj"><!></div></div>'), qp = (n, e, t) => e(o(t), Ct.process.id), Xp = /* @__PURE__ */ z('<div class="card-item-content svelte-1fcjrhj"><div class="card-item-content__left svelte-1fcjrhj"><div aria-label="drag-handle"><!></div> <p class="plugin-name svelte-1fcjrhj"> </p></div> <button class="plugin-add-btn svelte-1fcjrhj"><!></button></div>'), Yp = /* @__PURE__ */ z("<div><!></div>"), Kp = /* @__PURE__ */ z('<div class="card-parent-content svelte-1fcjrhj"></div>');
function Jp(n, e) {
  Ae(e, !0);
  const t = (c) => {
    var u = jp(), h = J(B(u), 2), f = B(h);
    ds(f, {
      variant: "outlined",
      label: "Search Plugins",
      get value() {
        return a();
      },
      set value(v) {
        a(v);
      }
    }), S(c, u);
  }, r = (c) => {
    var u = Kp();
    vn(u, 29, i, (h) => h.id, (h, f) => {
      var v = Yp(), g = B(v);
      Iu(g, {
        variant: "secondary",
        children: (p, C) => {
          var A = Xp(), E = B(A), x = B(E), I = B(x);
          Wo(I, {}), Oe(x, (w) => gr == null ? void 0 : gr(w));
          var T = J(x, 2), _ = B(T), y = J(E, 2);
          y.__click = [qp, s, f];
          var b = B(y);
          Qd(b, { svgStyles: "fill: var(--brand);" }), ve(() => Pe(_, o(f).name)), S(p, A);
        },
        $$slots: { default: !0 }
      }), ve(() => Qt(v, "data-id", o(f).id)), Bo(v, () => Yo, () => ({ duration: 100 })), S(h, v);
    }), Oe(u, (h, f) => vr == null ? void 0 : vr(h, f), () => ({
      items: i(),
      flipDurationMs: 100,
      dropTargetStyle: {},
      dropFromOthersDisabled: !0
    })), hn("consider", u, l), hn("finalize", u, d), S(c, u);
  };
  let i = m(e, "plugins", 23, () => []), a = m(e, "searchTerm", 15, "");
  function s(c, u) {
    np(u, c);
  }
  const d = (c) => {
    i(c.detail.items);
  }, l = (c) => {
    const { detail: u } = c, { trigger: h, id: f } = u.info;
    if (h === wt.DRAG_STARTED) {
      const v = i().findIndex((p) => p.id === f), g = `${f}_copy`;
      c.detail.items = c.detail.items.filter((p) => !p[Na]), c.detail.items.splice(v, 0, { ...i()[v], id: g }), i(c.detail.items);
    } else
      i([...i()]);
  };
  bu(n, {
    backgroundColor: "#DAE3E6",
    get header() {
      return t;
    },
    get content() {
      return r;
    }
  }), Ee();
}
Tt(["click"]);
var Qp = /* @__PURE__ */ z('<div class="process-definition-view svelte-ws8xx1"><!> <div class="drag-and-drop-info svelte-ws8xx1"><!> <p class="svelte-ws8xx1">SELECT OR DRAG & DROP PLUGINS</p></div> <!></div>');
function $p(n, e) {
  Ae(e, !0);
  let t = m(e, "pluginGroups", 19, () => []), r = /* @__PURE__ */ ue(""), i = /* @__PURE__ */ ie(() => {
    const h = _u.plugins.map((v) => ({
      id: zp(v.name),
      name: v.name,
      src: v.src,
      type: "internal"
    })), f = o(r).toLowerCase().trim();
    return f ? h.filter((v) => v.name.toLowerCase().includes(f)) : h;
  });
  var a = Qp(), s = B(a);
  Zp(s, {
    get pluginGroups() {
      return t();
    }
  });
  var d = J(s, 2), l = B(d);
  qv(l, { svgStyles: "fill: #6B9197" });
  var c = J(d, 2);
  Jp(c, {
    get plugins() {
      return o(i);
    },
    get searchTerm() {
      return o(r);
    },
    set searchTerm(u) {
      W(r, u, !0);
    }
  }), S(n, a), Ee();
}
const eI = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmNvbW0tc3VibmV0LTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJuZXQgQWRkcmVzcyBWYWxpZGl0eTwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5WYWxpZGF0ZXMgSVAgc3VibmV0IGFkZHJlc3NlcyBhbmQgQ0lEUi9uZXRtYXNrIGFyZSBwcm9wZXJseSBmb3JtYXR0ZWQgYW5kIG1lZXQgcHJvamVjdCBjb25zdHJhaW50cy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1zdWJuZXQtYWRkcmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5nc2UtY29uZmlnLTAwMjwvaWQ+CiAgICA8bmFtZT5HU0UgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIEdTRSBjb250cm9sIGJsb2NrcyByZWZlcmVuY2UgdmFsaWQgZGF0YXNldHMgYW5kIGhhdmUgY29ycmVjdCBNQUMvVkxBTi9uZXR3b3JrIHBhcmFtZXRlcnMuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stZ3NlLWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5zbXYtY29uZmlnLTAwMzwvaWQ+CiAgICA8bmFtZT5TTVYgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5DaGVja3MgU01WIGNvbnRyb2wgYmxvY2tzIGZvciB2YWxpZCBkYXRhc2V0cywgc2FtcGxlIHJhdGVzLCBhbmQgY29tcGxpYW50IG5ldHdvcmsgc2V0dGluZ3MuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stc212LWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4K", tI = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmllZC1uYW1lLTAwMTwvaWQ+CiAgICA8bmFtZT5JRUQgTmFtZSBGb3JtYXQ8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+RW5zdXJlcyBJRUQgbmFtZXMgZm9sbG93IHRoZSBuYW1pbmcgY29udmVudGlvbiwgYWxsb3dlZCBjaGFyYWN0ZXJzLCBhbmQgdW5pcXVlbmVzcyB3aXRoaW4gdGhlIHByb2plY3QuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2staWVkLW5hbWUtZm9ybWF0PC92YWxpZGF0b3I+CiAgPC92YWxpZGF0aW9uPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmFwLWNvbmZpZy0wMDI8L2lkPgogICAgPG5hbWU+QWNjZXNzIFBvaW50IENvbmZpZ3VyYXRpb248L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+VmVyaWZpZXMgQWNjZXNzUG9pbnQgZWxlbWVudHMgaGF2ZSByZXF1aXJlZCBhdHRyaWJ1dGVzIGFuZCB2YWxpZCByZWZlcmVuY2VzIHRvIHNlcnZlci9zZXJ2aWNlcy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1hY2Nlc3MtcG9pbnQtY29uZmlnPC92YWxpZGF0b3I+CiAgPC92YWxpZGF0aW9uPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmxuLWFzc2lnbi0wMDM8L2lkPgogICAgPG5hbWU+TG9naWNhbCBOb2RlIEFzc2lnbm1lbnRzPC9uYW1lPgogICAgPGRlc2NyaXB0aW9uPlZhbGlkYXRlcyBsb2dpY2FsIG5vZGVzIGFyZSBjb3JyZWN0bHkgYXNzaWduZWQgd2l0aCB2YWxpZCBsbkNsYXNzL2xuSW5zdCBjb21iaW5hdGlvbnMgYW5kIHJlcXVpcmVkIExOcyBhcmUgcHJlc2VudC48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1sbi1hc3NpZ25tZW50czwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4KCg==", nI = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPnN1YnN0YXRpb24tc3RydWN0dXJlLTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJzdGF0aW9uIFN0cnVjdHVyZSBJbnRlZ3JpdHk8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+U3RydWN0dXJlIEludGVncml0eSBEZXNjcmlwdGlvbjwvZGVzY3JpcHRpb24+CiAgICA8dmFsaWRhdG9yPmNoZWNrLXN1YnN0YXRpb24tc3RydWN0dXJlPC92YWxpZGF0b3I+CiAgPC92YWxpZGF0aW9uPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPnZvbHRhZ2UtbGV2ZWwtdW5pcXVlbmVzcy0wMDI8L2lkPgogICAgPG5hbWU+Vm9sdGFnZSBMZXZlbCBOYW1lIFVuaXF1ZW5lc3M8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+RW5zdXJlcyB2b2x0YWdlIGxldmVsIG5hbWVzIGFyZSB1bmlxdWUgd2l0aGluIHRoZSBzdWJzdGF0aW9uLjwvZGVzY3JpcHRpb24+CiAgICA8dmFsaWRhdG9yPmNoZWNrLXZsLW5hbWUtdW5pcXVlbmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5iYXktbmFtaW5nLTAwMzwvaWQ+CiAgICA8bmFtZT5CYXkgTmFtaW5nIENvbnZlbnRpb248L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+VmFsaWRhdGVzIGJheSBuYW1lcyBmb2xsb3cgdGhlIG5hbWluZyBjb252ZW50aW9uIGFuZCBhcmUgdW5pcXVlIHdpdGhpbiB0aGVpciB2b2x0YWdlIGxldmVsLjwvZGVzY3JpcHRpb24+CiAgICA8dmFsaWRhdG9yPmNoZWNrLWJheS1uYW1pbmc8L3ZhbGlkYXRvcj4KICA8L3ZhbGlkYXRpb24+CjwvdmFsaWRhdGlvbnM+Cg==", rI = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPnRlbXBsYXRlLWlucHV0cy0wMDE8L2lkPgogICAgPG5hbWU+UmVxdWlyZWQgSW5wdXRzIFByZXNlbnQ8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+VmVyaWZpZXMgYWxsIHJlcXVpcmVkIHRlbXBsYXRlIGlucHV0IGZpZWxkcyBhcmUgcHJvdmlkZWQgYW5kIG5vbi1lbXB0eS48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1yZXF1aXJlZC1pbnB1dHM8L3ZhbGlkYXRvcj4KICA8L3ZhbGlkYXRpb24+CiAgPHZhbGlkYXRpb24+CiAgICA8aWQ+dGctbmFtaW5nLTAwMjwvaWQ+CiAgICA8bmFtZT5UZW1wbGF0ZSBOYW1pbmcgQ29udmVudGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIHRlbXBsYXRlIG5hbWVzIGZvbGxvdyB0aGUgZGVmaW5lZCBuYW1pbmcgY29udmVudGlvbiBhbmQgYWxsb3dlZCBjaGFyYWN0ZXJzLjwvZGVzY3JpcHRpb24+CiAgICA8dmFsaWRhdG9yPmNoZWNrLXRlbXBsYXRlLW5hbWluZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD50Zy1jb21wYXQtMDAzPC9pZD4KICAgIDxuYW1lPlRlbXBsYXRlIENvbXBhdGliaWxpdHk8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+Q2hlY2tzIHRoZSBnZW5lcmF0ZWQgdGVtcGxhdGUgaXMgY29tcGF0aWJsZSB3aXRoIHRoZSBzZWxlY3RlZCBwcm9maWxlcyBvciB2ZXJzaW9ucy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay10ZW1wbGF0ZS1jb21wYXRpYmlsaXR5PC92YWxpZGF0b3I+CiAgPC92YWxpZGF0aW9uPgo8L3ZhbGlkYXRpb25zPgoK";
var iI = /* @__PURE__ */ z('<button type="button"><span> </span></button>'), aI = /* @__PURE__ */ z('<div><button type="button" class="validation-groups__group-title svelte-v2hgj7"> </button> <!></div>'), sI = /* @__PURE__ */ z("<p>Loading…</p>"), oI = /* @__PURE__ */ z('<p class="error svelte-v2hgj7"> </p>'), lI = /* @__PURE__ */ z('<div class="xml-viewer svelte-v2hgj7"><h4 class="xml-viewer__title svelte-v2hgj7"> </h4> <div class="xml-viewer__box svelte-v2hgj7"><pre class="svelte-v2hgj7"> </pre></div></div>'), dI = /* @__PURE__ */ z('<span class="validation-xml-container__description svelte-v2hgj7"> </span>'), uI = /* @__PURE__ */ z('<button type="button" class="toggle-btn svelte-v2hgj7" aria-expanded="true" title="Collapse"><!></button>'), cI = /* @__PURE__ */ z('<button type="button" class="toggle-btn svelte-v2hgj7" aria-expanded="false" title="Expand"><!></button>'), fI = /* @__PURE__ */ z('<div class="xml-viewer svelte-v2hgj7"><div class="xml-viewer__box svelte-v2hgj7"><pre class="svelte-v2hgj7"> </pre></div></div>'), hI = /* @__PURE__ */ z('<div class="validation-xml-container svelte-v2hgj7"><div class="validation-xml-container__meta svelte-v2hgj7"><span class="validation-xml-container__name svelte-v2hgj7"> </span> <!> <div class="validation-xml-container__actions svelte-v2hgj7"><button type="button" class="delete-btn svelte-v2hgj7" title="Remove"><!></button> <!></div></div> <!></div>'), vI = /* @__PURE__ */ z('<div class="validation-xml-list svelte-v2hgj7"></div>'), gI = /* @__PURE__ */ z('<div class="validation-groups svelte-v2hgj7"></div> <!>', 1);
function mI(n, e) {
  Ae(e, !0);
  let t = m(e, "pluginGroups", 19, () => []), r = /* @__PURE__ */ ue(null), i = /* @__PURE__ */ ue(null);
  const a = /* @__PURE__ */ ie(() => o(r) !== null ? t()[o(r)] : null), s = /* @__PURE__ */ ie(() => o(a) && o(i) !== null ? o(a).plugins[o(i)] : null);
  Se(() => {
    var b, w;
    if (!((b = t()) != null && b.length)) {
      W(r, null), W(i, null);
      return;
    }
    (o(r) === null || o(r) >= t().length) && W(r, 0);
    const y = t()[o(r)];
    if (!((w = y == null ? void 0 : y.plugins) != null && w.length)) {
      W(i, null);
      return;
    }
    (o(i) === null || o(i) >= y.plugins.length) && W(i, 0);
  });
  let d = /* @__PURE__ */ ue(""), l = /* @__PURE__ */ ue(!1), c = /* @__PURE__ */ ue(""), u = null, h = /* @__PURE__ */ ue(Ce([])), f = /* @__PURE__ */ ue(Ce(/* @__PURE__ */ new Set()));
  async function v(y) {
    W(l, !0), W(c, ""), W(d, ""), W(h, [], !0), W(f, /* @__PURE__ */ new Set(), !0), u == null || u.abort(), u = new AbortController();
    try {
      const b = new URL((/* @__PURE__ */ Object.assign({ "../../assets/validations/communication-explorer.xml": eI, "../../assets/validations/ied-editor.xml": tI, "../../assets/validations/substation-explorer.xml": nI, "../../assets/validations/template-generator.xml": rI }))[`../../assets/validations/${y}.xml`], import.meta.url).href, w = await fetch(b, { cache: "no-cache", signal: u.signal });
      if (!w.ok) {
        if (w.status === 404) {
          W(d, "(No XML found for this plugin.)");
          return;
        }
        throw new Error(`HTTP ${w.status}`);
      }
      W(d, await w.text(), !0);
      const G = new DOMParser().parseFromString(o(d), "application/xml");
      if (G.querySelector("parsererror"))
        throw new Error("Invalid XML format.");
      const N = new XMLSerializer(), le = Array.from(G.getElementsByTagName("validation"));
      W(
        h,
        le.map((U, H) => {
          var Q, fe, V, de, ee, Ie, be;
          const k = (Q = U.getAttribute("name")) == null ? void 0 : Q.trim(), X = (fe = U.getAttribute("id")) == null ? void 0 : fe.trim(), oe = (de = (V = U.querySelector("name")) == null ? void 0 : V.textContent) == null ? void 0 : de.trim(), R = (ee = U.getAttribute("description")) == null ? void 0 : ee.trim(), K = (be = (Ie = U.querySelector("description")) == null ? void 0 : Ie.textContent) == null ? void 0 : be.trim(), q = k || X || oe || `Validation ${H + 1}`, ge = R || K || void 0, ce = N.serializeToString(U);
          return { name: q, description: ge, xml: ce };
        }),
        !0
      ), W(f, new Set(o(h).map((U, H) => H)), !0);
    } catch (b) {
      if ((b == null ? void 0 : b.name) === "AbortError")
        return;
      W(c, (b == null ? void 0 : b.message) || "Failed to load XML.", !0);
    } finally {
      W(l, !1);
    }
  }
  let g = /* @__PURE__ */ ie(() => {
    var y;
    return ((y = o(s)) == null ? void 0 : y.id) ?? null;
  }), p = null;
  Se(() => {
    !o(g) || o(g) === p || (p = o(g), v(o(g)));
  });
  function C(y) {
    var w;
    const b = t()[y];
    W(r, y, !0), W(i, (w = b == null ? void 0 : b.plugins) != null && w.length ? 0 : null, !0);
  }
  function A(y, b) {
    W(r, y, !0), W(i, b, !0);
  }
  function E(y) {
    o(f).has(y) ? o(f).delete(y) : o(f).add(y), W(f, new Set(o(f)), !0);
  }
  var x = gI(), I = j(x);
  vn(I, 21, t, hr, (y, b, w) => {
    var D = aI();
    let G;
    var M = B(D);
    M.__click = () => C(w);
    var N = B(M), le = J(M, 2);
    {
      var U = (H) => {
        var k = re(), X = j(k);
        vn(X, 17, () => o(b).plugins, hr, (oe, R, K) => {
          var q = iI();
          let ge;
          q.__click = () => A(w, K);
          var ce = B(q), Q = B(ce);
          ve(
            (fe) => {
              ge = pr(q, 1, "validation-groups__plugin svelte-v2hgj7", null, ge, fe), Pe(Q, o(R).name);
            },
            [
              () => ({
                active: w === o(r) && K === o(i)
              })
            ]
          ), S(oe, q);
        }), S(H, k);
      };
      $(le, (H) => {
        w === o(r) && H(U);
      });
    }
    ve(
      (H) => {
        G = pr(D, 1, "validation-groups__group svelte-v2hgj7", null, G, H), Qt(M, "aria-pressed", w === o(r)), Pe(N, o(b).title);
      },
      [
        () => ({ expanded: w === o(r) })
      ]
    ), S(y, D);
  });
  var T = J(I, 2);
  {
    var _ = (y) => {
      var b = re(), w = j(b);
      {
        var D = (M) => {
          var N = sI();
          S(M, N);
        }, G = (M) => {
          var N = re(), le = j(N);
          {
            var U = (k) => {
              var X = oI(), oe = B(X);
              ve(() => Pe(oe, o(c))), S(k, X);
            }, H = (k) => {
              var X = re(), oe = j(X);
              {
                var R = (q) => {
                  var ge = lI(), ce = B(ge), Q = B(ce), fe = J(ce, 2), V = B(fe), de = B(V);
                  ve(() => {
                    Pe(Q, `XML for: ${o(s).name ?? ""}`), Pe(de, o(d));
                  }), S(q, ge);
                }, K = (q) => {
                  var ge = vI();
                  vn(ge, 21, () => o(h), hr, (ce, Q, fe) => {
                    var V = hI(), de = B(V), ee = B(de), Ie = B(ee), be = J(ee, 2);
                    {
                      var Ge = (ae) => {
                        var xe = dI(), ut = B(xe);
                        ve(() => Pe(ut, o(Q).description)), S(ae, xe);
                      };
                      $(be, (ae) => {
                        o(Q).description && ae(Ge);
                      });
                    }
                    var et = J(be, 2), je = B(et), Re = B(je);
                    Kd(Re, { svgStyles: "fill: #FF203A" });
                    var at = J(je, 2);
                    {
                      var Ft = (ae) => {
                        var xe = uI();
                        xe.__click = () => E(fe);
                        var ut = B(xe);
                        Pv(ut, { svgStyles: "fill: #004552" }), S(ae, xe);
                      }, kt = (ae) => {
                        var xe = cI();
                        xe.__click = () => E(fe);
                        var ut = B(xe);
                        kv(ut, { svgStyles: "fill: #004552" }), S(ae, xe);
                      };
                      $(at, (ae) => {
                        o(f).has(fe) ? ae(Ft) : ae(kt, !1);
                      });
                    }
                    var P = J(de, 2);
                    {
                      var Z = (ae) => {
                        var xe = fI(), ut = B(xe), qt = B(ut), Ln = B(qt);
                        ve(() => Pe(Ln, o(Q).xml)), S(ae, xe);
                      };
                      $(P, (ae) => {
                        o(f).has(fe) && ae(Z);
                      });
                    }
                    ve(() => Pe(Ie, o(Q).name)), S(ce, V);
                  }), S(q, ge);
                };
                $(oe, (q) => {
                  o(h).length === 0 ? q(R) : q(K, !1);
                });
              }
              S(k, X);
            };
            $(
              le,
              (k) => {
                o(c) ? k(U) : k(H, !1);
              },
              !0
            );
          }
          S(M, N);
        };
        $(w, (M) => {
          o(l) ? M(D) : M(G, !1);
        });
      }
      S(y, b);
    };
    $(T, (y) => {
      o(s) && y(_);
    });
  }
  S(n, x), Ee();
}
Tt(["click"]);
function pI(n, e) {
  const t = (n == null ? void 0 : n.name) ?? "—";
  return [
    { label: "Engineering-Wizard", enabled: !0 },
    { label: e != null && e.edit ? `Edit ${t}` : t, enabled: !1 }
  ];
}
function II(n, e, t, r, i) {
  o(e) || (t(o(r)), W(i, o(i) + 1));
}
function bI(n, e, t) {
  o(e) || W(t, o(t) - 1);
}
var _I = /* @__PURE__ */ z('<div class="header header--right svelte-1qlms77"><!></div> <!>', 1), yI = /* @__PURE__ */ z('<div class="stepper svelte-1qlms77"><!> <!> <div class="stepper-navigation svelte-1qlms77"><button type="button" class="btn btn--back svelte-1qlms77" aria-label="Previous step">Back</button> <button type="button" class="btn btn--next svelte-1qlms77" aria-label="Next step">Next</button></div></div> <div class="step-content svelte-1qlms77"><!></div>', 1), CI = /* @__PURE__ */ z('<div class="step-content svelte-1qlms77"><div class="header svelte-1qlms77"><!> <!></div> <!></div>'), AI = /* @__PURE__ */ z('<div class="page-content svelte-1qlms77"><!></div>');
function EI(n, e) {
  Ae(e, !0);
  const t = ["process-definition", "validator-configuration"];
  let r = /* @__PURE__ */ ue(0), i = /* @__PURE__ */ ie(() => t[o(r)] ?? t[0]), a = /* @__PURE__ */ ie(() => o(r) === 0), s = /* @__PURE__ */ ie(() => o(r) === t.length - 1), d = /* @__PURE__ */ ie(() => pI(Ct.process, { edit: ii.isEditing })), l = /* @__PURE__ */ ie(() => Ct.process.pluginGroups), c = /* @__PURE__ */ ue(Ce([]));
  function u(I) {
    I === 0 && (Nr.set(!0), Ct.process = null);
  }
  function h() {
    console.log("EDITING"), ii.isEditing = !0, Nr.set(!1), W(r, 0), W(c, [], !0);
  }
  function f() {
    ii.isEditing = !1, Nr.set(!0), Ct.process = null;
  }
  function v(I) {
    const T = t.indexOf(I);
    T !== -1 && W(r, T, !0);
  }
  function g(I) {
    o(c).includes(I) || W(c, [...o(c), I], !0);
  }
  function p() {
    alert("Add New Validation clicked!");
  }
  var C = AI(), A = B(C);
  {
    var E = (I) => {
      var T = yI(), _ = j(T), y = B(_);
      Au(y, { onBack: f });
      var b = J(y, 2);
      bp(b, {
        get currentId() {
          return o(i);
        },
        get visited() {
          return o(c);
        },
        onSelect: v
      });
      var w = J(b, 2), D = B(w);
      D.__click = [bI, a, r];
      var G = J(D, 2);
      G.__click = [
        II,
        s,
        g,
        i,
        r
      ];
      var M = J(_, 2), N = B(M);
      {
        var le = (H) => {
          $p(H, {
            get pluginGroups() {
              return o(l);
            }
          });
        }, U = (H) => {
          var k = re(), X = j(k);
          {
            var oe = (R) => {
              var K = _I(), q = j(K), ge = B(q);
              {
                let Q = /* @__PURE__ */ ie(() => !Ct.process);
                Hr(ge, {
                  variant: "raised",
                  style: "--mdc-theme-primary: var(--brand); --mdc-theme-on-primary: var(--on-brand)",
                  onclick: p,
                  get disabled() {
                    return o(Q);
                  },
                  "aria-label": "Add validation",
                  children: (fe, V) => {
                    var de = dt("ADD NEW VALIDATION");
                    S(fe, de);
                  },
                  $$slots: { default: !0 }
                });
              }
              var ce = J(q, 2);
              mI(ce, {
                get pluginGroups() {
                  return o(l);
                },
                get breadcrumbs() {
                  return o(d);
                },
                activeBreadcrumbIndex: 2,
                $$events: {
                  addValidation: p,
                  breadcrumbClick: u
                }
              }), S(R, K);
            };
            $(
              X,
              (R) => {
                o(i) === "validator-configuration" && R(oe);
              },
              !0
            );
          }
          S(H, k);
        };
        $(N, (H) => {
          o(i) === "process-definition" ? H(le) : H(U, !1);
        });
      }
      ve(() => {
        D.disabled = o(a), G.disabled = o(s);
      }), S(I, T);
    }, x = (I) => {
      var T = CI(), _ = B(T), y = B(_);
      Ag(y, {
        get breadcrumbs() {
          return o(d);
        },
        activeIndex: 1,
        handleClick: u
      });
      var b = J(y, 2);
      {
        let D = /* @__PURE__ */ ie(() => !Ct.process);
        Hr(b, {
          variant: "raised",
          style: "--mdc-theme-primary: var(--brand); --mdc-theme-on-primary: var(--on-brand)",
          onclick: () => e.handleStart(Ct.process),
          get disabled() {
            return o(D);
          },
          "aria-label": "Start process",
          children: (G, M) => {
            var N = dt("START PROCESS");
            S(G, N);
          },
          $$slots: { default: !0 }
        });
      }
      var w = J(_, 2);
      Np(w, {
        get pluginGroups() {
          return o(l);
        },
        requestEdit: h
      }), S(I, T);
    };
    $(A, (I) => {
      ii.isEditing ? I(E) : I(x, !1);
    });
  }
  S(n, C), Ee();
}
Tt(["click"]);
function SI(n, e) {
  Ae(e, !0);
  let t = m(e, "plugins", 19, () => []), r = m(e, "visited", 19, () => []), i = m(e, "currentId", 3, null), a = m(e, "pluginStatus", 19, () => ({})), s = /* @__PURE__ */ ie(() => t().reduce(
    (l, c) => {
      const u = a()[c.id];
      return l[c.id] = u ?? "", l;
    },
    {}
  ));
  const d = (l) => {
    const c = t().find((u) => u.id === l);
    c && e.onSelect(c);
  };
  {
    let l = /* @__PURE__ */ ie(() => t().map((c) => ({ id: c.id, label: c.name })));
    Cu(n, {
      get items() {
        return o(l);
      },
      get visited() {
        return r();
      },
      get currentId() {
        return i();
      },
      get status() {
        return a();
      },
      get tooltipMap() {
        return o(s);
      },
      onSelect: d
    });
  }
  Ee();
}
var xI = /* @__PURE__ */ z("<div></div>");
function wI(n, e) {
  Ae(e, !0);
  function t(d) {
    let l = 3735928559, c = 1103547991;
    for (let u = 0, h; u < d.length; u++)
      h = d.charCodeAt(u), l = Math.imul(l ^ h, 2654435761), c = Math.imul(c ^ h, 1597334677);
    return l = Math.imul(l ^ l >>> 16, 2246822507) ^ Math.imul(c ^ c >>> 13, 3266489909), c = Math.imul(c ^ c >>> 16, 2246822507) ^ Math.imul(l ^ l >>> 13, 3266489909), "oscd-plugin" + ((c >>> 0).toString(16).padStart(8, "0") + (l >>> 0).toString(16).padStart(8, "0"));
  }
  let r = m(e, "editCount", 19, () => -1), i = m(e, "plugins", 19, () => []), a = null;
  Se(() => {
    if (!a || (a.innerHTML = "", !e.plugin || !e.plugin.src)) return;
    const d = t(e.plugin.src), l = document.createElement(d);
    l.doc = e.doc, l.editCount = r(), l.plugins = i(), l.nsdoc = e.nsdoc, l.docName = e.docName, l.docId = e.docId, l.docs = e.docs, l.locale = e.locale, e.oscdApi && (l.oscdApi = e.oscdApi), a.appendChild(l);
  });
  var s = xI();
  we(s, (d) => a = d, () => a), S(n, s), Ee();
}
const TI = (n, e) => e(1), DI = (n, e) => e(-1);
var LI = /* @__PURE__ */ z('<div class="plugin-container svelte-1xkxjkz"><!></div>'), RI = /* @__PURE__ */ z('<div class="stepper svelte-1xkxjkz"><!> <!> <div class="stepper-navigation svelte-1xkxjkz"><button type="button" class="back-button svelte-1xkxjkz" aria-label="Previous plugin">Back</button> <button type="button" class="next-button svelte-1xkxjkz" aria-label="Next plugin">Next</button></div></div> <!>', 1);
function OI(n, e) {
  Ae(e, !0);
  const t = ["check", "warning", "error"];
  let r = m(e, "editCount", 19, () => -1), i = m(e, "plugins", 19, () => []), a = /* @__PURE__ */ ue(null), s = Ce({ plugin: null }), d = /* @__PURE__ */ ue(Ce([])), l = /* @__PURE__ */ ue(Ce({})), c = /* @__PURE__ */ ie(() => i().length > 0), u = /* @__PURE__ */ ie(() => s.plugin && o(c) ? i().findIndex((b) => b.id === s.plugin.id) : -1);
  async function h(b) {
    if (!b) return;
    await Bp(b);
    const { id: w } = b;
    if (W(a, w, !0), s.plugin = b, !o(d).includes(w)) {
      W(d, [...o(d), w], !0);
      const D = i().findIndex((G) => G.id === w);
      if (D !== -1) {
        const G = t[D % t.length];
        W(l, { ...o(l), [w]: G }, !0);
      }
    }
  }
  function f(b) {
    if (!o(c)) return;
    const D = ((o(u) < 0 ? 0 : o(u)) + b + i().length) % i().length;
    h(i()[D]);
  }
  function v(b, w) {
    return Object.assign(b, w), {
      update(D) {
        Object.assign(b, D);
      }
    };
  }
  Se(() => {
    if (!o(c)) {
      s.plugin = null, W(a, null), W(d, [], !0), W(l, {}, !0);
      return;
    }
    o(u) === -1 && h(i()[0]);
  }), it(() => (i().length && Gp(i()).catch(console.error), Nr.set(!1), () => {
    Nr.set(!0);
  }));
  function g() {
    Nr.set(!0), e.onExit();
  }
  var p = RI(), C = j(p), A = B(C);
  Au(A, { onBack: g });
  var E = J(A, 2);
  {
    let b = /* @__PURE__ */ ie(() => {
      var w;
      return ((w = s == null ? void 0 : s.plugin) == null ? void 0 : w.id) ?? null;
    });
    SI(E, {
      get plugins() {
        return i();
      },
      get visited() {
        return o(d);
      },
      get currentId() {
        return o(b);
      },
      get pluginStatus() {
        return o(l);
      },
      onSelect: h
    });
  }
  var x = J(E, 2), I = B(x);
  I.__click = [DI, f];
  var T = J(I, 2);
  T.__click = [TI, f];
  var _ = J(C, 2);
  {
    var y = (b) => {
      var w = LI(), D = B(w);
      {
        var G = (N) => {
          wI(N, {
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
        }, M = (N) => {
          var le = re(), U = j(le);
          uo(U, () => s.plugin.id, !1, (H, k) => {
            Oe(H, (X, oe) => v == null ? void 0 : v(X, oe), () => ({ doc: e.doc, editCount: r() })), pr(H, 0, "svelte-1xkxjkz");
          }), S(N, le);
        };
        $(D, (N) => {
          s.plugin.type === "internal" ? N(G) : N(M, !1);
        });
      }
      S(b, w);
    };
    $(_, (b) => {
      s.plugin && b(y);
    });
  }
  ve(() => {
    I.disabled = !o(c), T.disabled = !o(c);
  }), S(n, p), Ee();
}
Tt(["click"]);
var MI = (n, e) => {
  n.target === n.currentTarget && e("exit");
}, PI = /* @__PURE__ */ z('<div class="ewf-dialog-backdrop svelte-12xjguj" role="dialog" aria-modal="true" aria-labelledby="ewf-title" tabindex="-1"><div class="ewf-dialog-panel svelte-12xjguj" role="document"><h2 id="ewf-title" class="sr-only svelte-12xjguj">Engineering Workflow</h2> <!></div></div>');
function FI(n, e) {
  Ae(e, !0);
  let t = m(e, "editCount", 19, () => -1), r = m(e, "plugins", 19, () => []), i = /* @__PURE__ */ ue(!1), a = /* @__PURE__ */ ue(void 0), s = /* @__PURE__ */ ue(null);
  const d = (h) => {
    o(i) || (W(i, !0), Nr.set(!0), Fr(h));
  };
  Se(() => {
    var h;
    e.open !== o(a) && (W(a, e.open, !0), e.open ? (W(i, !1), (h = o(s)) == null || h.focus()) : d("cancel"));
  });
  var l = re(), c = j(l);
  {
    var u = (h) => {
      var f = PI();
      f.__click = [MI, d];
      var v = B(f), g = J(B(v), 2);
      OI(g, {
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
        onExit: () => d("exit")
      }), we(f, (p) => W(s, p), () => o(s)), S(h, f);
    };
    $(c, (h) => {
      e.open && h(u);
    });
  }
  S(n, l), Ee();
}
Tt(["click"]);
var kI = /* @__PURE__ */ z("<!> <!>", 1);
function NI(n, e) {
  Ae(e, !0), e.plugins[1], it(async () => {
    await tp();
  });
  function t(u) {
    Ct.process || (Ct.process = u);
    const h = lp(Ct.process);
    Rs(FI, {
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
    }), Ct.process = null;
  }
  Se(() => {
    ov({ editCount: e.editCount, doc: e.doc });
  });
  function r(u) {
    Ct.process = u;
  }
  function i() {
    Ct.process = null;
  }
  var a = kI(), s = j(a);
  sv(s, {});
  var d = J(s, 2);
  {
    var l = (u) => {
      EI(u, { handleBack: i, handleStart: t });
    }, c = (u) => {
      hp(u, { handleView: r, handleStart: t });
    };
    $(d, (u) => {
      Ct.process ? u(l) : u(c, !1);
    });
  }
  S(n, a), Ee();
}
const Su = "archive-explorer", xu = "0.0.1";
var HI = /* @__PURE__ */ z('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function UI(n, e) {
  Ae(e, !0);
  let t = m(e, "dev", 3, !1), r = m(e, "editCount", 3, 0), i = m(e, "plugins", 19, () => []);
  var a = HI(), s = j(a);
  {
    var d = (u) => {
      NI(u, {
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
    $(s, (u) => {
      (e.doc || t()) && u(d);
    });
  }
  var l = J(s, 2), c = J(l, 2);
  ve(() => {
    fl(l, Su), fl(c, xu);
  }), S(n, a), Ee();
}
var ji;
class ZI extends HTMLElement {
  constructor() {
    super();
    We(this, ji);
    Te(this, ji, /* @__PURE__ */ ue(Ce({
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
    return o(ne(this, ji));
  }
  set _props(t) {
    W(ne(this, ji), t, !0);
  }
  connectedCallback() {
    if (this.shadowRoot) return;
    this.attachShadow({ mode: "open" }), Yc(UI, { target: this.shadowRoot, props: this._props });
    const t = BI();
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
    op(r);
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
function BI() {
  const n = `${Su}-v${xu}-style`, e = GI(), t = document.createElement("link");
  return t.rel = "stylesheet", t.type = "text/css", t.href = e, t.id = n, t;
}
function GI() {
  const n = new URL(import.meta.url), e = n.origin, t = n.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, t, "style.css"].filter(Boolean).join("/");
}
export {
  ZI as default
};
