var ei = Object.defineProperty;
var kr = (e) => {
  throw TypeError(e);
};
var ti = (e, t, n) => t in e ? ei(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var he = (e, t, n) => ti(e, typeof t != "symbol" ? t + "" : t, n), Ln = (e, t, n) => t.has(e) || kr("Cannot " + n);
var T = (e, t, n) => (Ln(e, t, "read from private field"), n ? n.call(e) : t.get(e)), de = (e, t, n) => t.has(e) ? kr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), we = (e, t, n, r) => (Ln(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), ct = (e, t, n) => (Ln(e, t, "access private method"), n);
const ni = "5";
var Dr;
typeof window < "u" && ((Dr = window.__svelte ?? (window.__svelte = {})).v ?? (Dr.v = /* @__PURE__ */ new Set())).add(ni);
const Cn = 1, Sn = 2, Mr = 4, ri = 8, ai = 16, ii = 1, li = 4, si = 8, oi = 16, ui = 2, Fr = "[", Zn = "[!", Qn = "]", _t = {}, ue = Symbol(), Lr = !1;
var er = Array.isArray, fi = Array.prototype.indexOf, tr = Array.from, yn = Object.keys, Ot = Object.defineProperty, bt = Object.getOwnPropertyDescriptor, ci = Object.prototype, vi = Array.prototype, di = Object.getPrototypeOf, $r = Object.isExtensible;
function qr(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function hi() {
  var e, t, n = new Promise((r, a) => {
    e = r, t = a;
  });
  return { promise: n, resolve: e, reject: t };
}
const Ee = 2, nr = 4, Hr = 8, Ht = 16, Ze = 32, ot = 64, Wr = 128, Ne = 256, kn = 512, _e = 1024, Be = 2048, ut = 4096, De = 8192, yt = 16384, rr = 32768, ar = 65536, Tr = 1 << 17, pi = 1 << 18, Wt = 1 << 19, _i = 1 << 20, zn = 1 << 21, ir = 1 << 22, mt = 1 << 23, Gt = Symbol("$state"), zr = Symbol("legacy props"), lr = new class extends Error {
  constructor() {
    super(...arguments);
    he(this, "name", "StaleReactionError");
    he(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}(), sr = 3, Dt = 8;
function bi() {
  throw new Error("https://svelte.dev/e/await_outside_boundary");
}
function mi() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function gi(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function wi() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function yi(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function ki() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function $i() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Ti(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function xi() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ei() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ci() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function rn(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let M = !1;
function Je(e) {
  M = e;
}
let F;
function Te(e) {
  if (e === null)
    throw rn(), _t;
  return F = e;
}
function Mt() {
  return Te(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Qe(F)
  );
}
function W(e) {
  if (M) {
    if (/* @__PURE__ */ Qe(F) !== null)
      throw rn(), _t;
    F = e;
  }
}
function jn() {
  for (var e = 0, t = F; ; ) {
    if (t.nodeType === Dt) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === Qn) {
        if (e === 0) return t;
        e -= 1;
      } else (n === Fr || n === Zn) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Qe(t)
    );
    t.remove(), t = r;
  }
}
function jr(e) {
  if (!e || e.nodeType !== Dt)
    throw rn(), _t;
  return (
    /** @type {Comment} */
    e.data
  );
}
function Ur(e) {
  return e === this.v;
}
function Si(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Yr(e) {
  return !Si(e, this.v);
}
let Pi = !1, Fe = null;
function $n(e) {
  Fe = e;
}
function Vr(e, t = !1, n) {
  Fe = {
    p: Fe,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  };
}
function Gr(e) {
  var t = (
    /** @type {ComponentContext} */
    Fe
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      ha(r);
  }
  return e !== void 0 && (t.x = e), Fe = t.p, e ?? /** @type {T} */
  {};
}
function Kr() {
  return !0;
}
const Ai = /* @__PURE__ */ new WeakMap();
function Ri(e) {
  var t = P;
  if (t === null)
    return A.f |= mt, e;
  if (t.f & rr)
    or(e, t);
  else {
    if (!(t.f & Wr))
      throw !t.parent && e instanceof Error && Jr(e), e;
    t.b.error(e);
  }
}
function or(e, t) {
  for (; t !== null; ) {
    if (t.f & Wr)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw e instanceof Error && Jr(e), e;
}
function Jr(e) {
  const t = Ai.get(e);
  t && (Ot(e, "message", {
    value: t.message
  }), Ot(e, "stack", {
    value: t.stack
  }));
}
let Kt = [], Un = [];
function Xr() {
  var e = Kt;
  Kt = [], qr(e);
}
function Ni() {
  var e = Un;
  Un = [], qr(e);
}
function Zr(e) {
  Kt.length === 0 && queueMicrotask(Xr), Kt.push(e);
}
function Bi() {
  Kt.length > 0 && Xr(), Un.length > 0 && Ni();
}
function Ii() {
  for (var e = (
    /** @type {Effect} */
    P.b
  ); e !== null && !e.has_pending_snippet(); )
    e = e.parent;
  return e === null && bi(), e;
}
// @__NO_SIDE_EFFECTS__
function Pn(e) {
  var t = Ee | Be, n = A !== null && A.f & Ee ? (
    /** @type {Derived} */
    A
  ) : null;
  return P === null || n !== null && n.f & Ne ? t |= Ne : P.f |= Wt, {
    ctx: Fe,
    deps: null,
    effects: null,
    equals: Ur,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      ue
    ),
    wv: 0,
    parent: n ?? P,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Oi(e, t) {
  let n = (
    /** @type {Effect | null} */
    P
  );
  n === null && mi();
  var r = (
    /** @type {Boundary} */
    n.b
  ), a = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), l = Jt(
    /** @type {V} */
    ue
  ), s = null, o = !A;
  return ji(() => {
    try {
      var f = e();
    } catch (m) {
      f = Promise.reject(m);
    }
    var c = () => f;
    a = (s == null ? void 0 : s.then(c, c)) ?? Promise.resolve(f), s = a;
    var d = (
      /** @type {Batch} */
      ne
    ), h = r.pending;
    o && (r.update_pending_count(1), h || d.increment());
    const g = (m, v = void 0) => {
      s = null, h || d.activate(), v ? v !== lr && (l.f |= mt, Xt(l, v)) : (l.f & mt && (l.f ^= mt), Xt(l, m)), o && (r.update_pending_count(-1), h || d.decrement()), na();
    };
    if (a.then(g, (m) => g(null, m || "unknown")), d)
      return () => {
        queueMicrotask(() => d.neuter());
      };
  }), new Promise((f) => {
    function c(d) {
      function h() {
        d === a ? f(l) : c(a);
      }
      d.then(h, h);
    }
    c(a);
  });
}
// @__NO_SIDE_EFFECTS__
function ke(e) {
  const t = /* @__PURE__ */ Pn(e);
  return Ta(t), t;
}
// @__NO_SIDE_EFFECTS__
function Qr(e) {
  const t = /* @__PURE__ */ Pn(e);
  return t.equals = Yr, t;
}
function ea(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      je(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Di(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & Ee))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function ur(e) {
  var t, n = P;
  st(Di(e));
  try {
    ea(e), t = Sa(e);
  } finally {
    st(n);
  }
  return t;
}
function ta(e) {
  var t = ur(e);
  if (e.equals(t) || (e.v = t, e.wv = Ea()), !kt)
    if (at !== null)
      at.set(e, e.v);
    else {
      var n = (it || e.f & Ne) && e.deps !== null ? ut : _e;
      xe(e, n);
    }
}
function Mi(e, t, n) {
  const r = Pn;
  if (t.length === 0) {
    n(e.map(r));
    return;
  }
  var a = ne, l = (
    /** @type {Effect} */
    P
  ), s = Fi(), o = Ii();
  Promise.all(t.map((f) => /* @__PURE__ */ Oi(f))).then((f) => {
    a == null || a.activate(), s();
    try {
      n([...e.map(r), ...f]);
    } catch (c) {
      l.f & yt || or(c, l);
    }
    a == null || a.deactivate(), na();
  }).catch((f) => {
    o.error(f);
  });
}
function Fi() {
  var e = P, t = A, n = Fe;
  return function() {
    st(e), Ue(t), $n(n);
  };
}
function na() {
  st(null), Ue(null), $n(null);
}
const Yt = /* @__PURE__ */ new Set();
let ne = null, at = null, xr = /* @__PURE__ */ new Set(), Tn = [];
function ra() {
  const e = (
    /** @type {() => void} */
    Tn.shift()
  );
  Tn.length > 0 && queueMicrotask(ra), e();
}
let wt = [], An = null, Yn = !1, mn = !1;
var Rt, Nt, nt, Qt, en, ht, Bt, pt, rt, It, tn, nn, Me, aa, gn, Vn;
const En = class En {
  constructor() {
    de(this, Me);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    he(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    de(this, Rt, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    de(this, Nt, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    de(this, nt, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    de(this, Qt, null);
    /**
     * True if an async effect inside this batch resolved and
     * its parent branch was already deleted
     */
    de(this, en, !1);
    /**
     * Async effects (created inside `async_derived`) encountered during processing.
     * These run after the rest of the batch has updated, since they should
     * always have the latest values
     * @type {Effect[]}
     */
    de(this, ht, []);
    /**
     * The same as `#async_effects`, but for effects inside a newly-created
     * `<svelte:boundary>` — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    de(this, Bt, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    de(this, pt, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    de(this, rt, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    de(this, It, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    de(this, tn, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    de(this, nn, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    he(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    var l;
    wt = [];
    var n = null;
    if (Yt.size > 1) {
      n = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map();
      for (const [s, o] of this.current)
        n.set(s, { v: s.v, wv: s.wv }), s.v = o;
      for (const s of Yt)
        if (s !== this)
          for (const [o, f] of T(s, Rt))
            n.has(o) || (n.set(o, { v: o.v, wv: o.wv }), o.v = f);
    }
    for (const s of t)
      ct(this, Me, aa).call(this, s);
    if (T(this, ht).length === 0 && T(this, nt) === 0) {
      ct(this, Me, Vn).call(this);
      var r = T(this, pt), a = T(this, rt);
      we(this, pt, []), we(this, rt, []), we(this, It, []), ne = null, Er(r), Er(a), ne === null ? ne = this : Yt.delete(this), (l = T(this, Qt)) == null || l.resolve();
    } else
      ct(this, Me, gn).call(this, T(this, pt)), ct(this, Me, gn).call(this, T(this, rt)), ct(this, Me, gn).call(this, T(this, It));
    if (n) {
      for (const [s, { v: o, wv: f }] of n)
        s.wv <= f && (s.v = o);
      at = null;
    }
    for (const s of T(this, ht))
      At(s);
    for (const s of T(this, Bt))
      At(s);
    we(this, ht, []), we(this, Bt, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    T(this, Rt).has(t) || T(this, Rt).set(t, n), this.current.set(t, t.v);
  }
  activate() {
    ne = this;
  }
  deactivate() {
    ne = null;
    for (const t of xr)
      if (xr.delete(t), t(), ne !== null)
        break;
  }
  neuter() {
    we(this, en, !0);
  }
  flush() {
    wt.length > 0 ? ia() : ct(this, Me, Vn).call(this), ne === this && (T(this, nt) === 0 && Yt.delete(this), this.deactivate());
  }
  increment() {
    we(this, nt, T(this, nt) + 1);
  }
  decrement() {
    if (we(this, nt, T(this, nt) - 1), T(this, nt) === 0) {
      for (const t of T(this, tn))
        xe(t, Be), Lt(t);
      for (const t of T(this, nn))
        xe(t, ut), Lt(t);
      we(this, pt, []), we(this, rt, []), this.flush();
    } else
      this.deactivate();
  }
  /** @param {() => void} fn */
  add_callback(t) {
    T(this, Nt).add(t);
  }
  settled() {
    return (T(this, Qt) ?? we(this, Qt, hi())).promise;
  }
  static ensure() {
    if (ne === null) {
      const t = ne = new En();
      Yt.add(ne), mn || En.enqueue(() => {
        ne === t && t.flush();
      });
    }
    return ne;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    Tn.length === 0 && queueMicrotask(ra), Tn.unshift(t);
  }
};
Rt = new WeakMap(), Nt = new WeakMap(), nt = new WeakMap(), Qt = new WeakMap(), en = new WeakMap(), ht = new WeakMap(), Bt = new WeakMap(), pt = new WeakMap(), rt = new WeakMap(), It = new WeakMap(), tn = new WeakMap(), nn = new WeakMap(), Me = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
aa = function(t) {
  var d;
  t.f ^= _e;
  for (var n = t.first; n !== null; ) {
    var r = n.f, a = (r & (Ze | ot)) !== 0, l = a && (r & _e) !== 0, s = l || (r & De) !== 0 || this.skipped_effects.has(n);
    if (!s && n.fn !== null) {
      if (a)
        n.f ^= _e;
      else if (r & nr)
        T(this, rt).push(n);
      else if (!(r & _e))
        if (r & ir) {
          var o = (d = n.b) != null && d.pending ? T(this, Bt) : T(this, ht);
          o.push(n);
        } else Rn(n) && (n.f & Ht && T(this, It).push(n), At(n));
      var f = n.first;
      if (f !== null) {
        n = f;
        continue;
      }
    }
    var c = n.parent;
    for (n = n.next; n === null && c !== null; )
      n = c.next, c = c.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
gn = function(t) {
  for (const n of t)
    (n.f & Be ? T(this, tn) : T(this, nn)).push(n), xe(n, _e);
  t.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
Vn = function() {
  if (!T(this, en))
    for (const t of T(this, Nt))
      t();
  T(this, Nt).clear();
};
let Ft = En;
function X(e) {
  var t = mn;
  mn = !0;
  try {
    for (var n; ; ) {
      if (Bi(), wt.length === 0 && (ne == null || ne.flush(), wt.length === 0))
        return An = null, /** @type {T} */
        n;
      ia();
    }
  } finally {
    mn = t;
  }
}
function ia() {
  var e = Pt;
  Yn = !0;
  try {
    var t = 0;
    for (Sr(!0); wt.length > 0; ) {
      var n = Ft.ensure();
      if (t++ > 1e3) {
        var r, a;
        Li();
      }
      n.process(wt), lt.clear();
    }
  } finally {
    Yn = !1, Sr(e), An = null;
  }
}
function Li() {
  try {
    ki();
  } catch (e) {
    or(e, An);
  }
}
let dt = null;
function Er(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if (!(r.f & (yt | De)) && Rn(r) && (dt = [], At(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? ya(r) : r.fn = null), dt.length > 0)) {
        lt.clear();
        for (const a of dt)
          At(a);
        dt = [];
      }
    }
    dt = null;
  }
}
function Lt(e) {
  for (var t = An = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (Yn && t === P && n & Ht)
      return;
    if (n & (ot | Ze)) {
      if (!(n & _e)) return;
      t.f ^= _e;
    }
  }
  wt.push(t);
}
const lt = /* @__PURE__ */ new Map();
function Jt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Ur,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function se(e, t) {
  const n = Jt(e);
  return Ta(n), n;
}
// @__NO_SIDE_EFFECTS__
function la(e, t = !1, n = !0) {
  const r = Jt(e);
  return t || (r.equals = Yr), r;
}
function w(e, t, n = !1) {
  A !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!qe || A.f & Tr) && Kr() && A.f & (Ee | Ht | ir | Tr) && !(be != null && be.includes(e)) && Ci();
  let r = n ? He(t) : t;
  return Xt(e, r);
}
function Xt(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    kt ? lt.set(e, t) : lt.set(e, n), e.v = t;
    var r = Ft.ensure();
    r.capture(e, n), e.f & Ee && (e.f & Be && ur(
      /** @type {Derived} */
      e
    ), xe(e, e.f & Ne ? ut : _e)), e.wv = Ea(), sa(e, Be), P !== null && P.f & _e && !(P.f & (Ze | ot)) && (Ae === null ? Yi([e]) : Ae.push(e));
  }
  return t;
}
function dn(e, t = 1) {
  var n = i(e), r = t === 1 ? n++ : n--;
  return w(e, n), r;
}
function qn(e) {
  w(e, e.v + 1);
}
function sa(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = n.length, a = 0; a < r; a++) {
      var l = n[a], s = l.f, o = (s & Be) === 0;
      o && xe(l, t), s & Ee ? sa(
        /** @type {Derived} */
        l,
        ut
      ) : o && (s & Ht && dt !== null && dt.push(
        /** @type {Effect} */
        l
      ), Lt(
        /** @type {Effect} */
        l
      ));
    }
}
function He(e) {
  if (typeof e != "object" || e === null || Gt in e)
    return e;
  const t = di(e);
  if (t !== ci && t !== vi)
    return e;
  var n = /* @__PURE__ */ new Map(), r = er(e), a = /* @__PURE__ */ se(0), l = gt, s = (o) => {
    if (gt === l)
      return o();
    var f = A, c = gt;
    Ue(null), Ar(l);
    var d = o();
    return Ue(f), Ar(c), d;
  };
  return r && n.set("length", /* @__PURE__ */ se(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, f, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && xi();
        var d = n.get(f);
        return d === void 0 ? d = s(() => {
          var h = /* @__PURE__ */ se(c.value);
          return n.set(f, h), h;
        }) : w(d, c.value, !0), !0;
      },
      deleteProperty(o, f) {
        var c = n.get(f);
        if (c === void 0) {
          if (f in o) {
            const d = s(() => /* @__PURE__ */ se(ue));
            n.set(f, d), qn(a);
          }
        } else
          w(c, ue), qn(a);
        return !0;
      },
      get(o, f, c) {
        var m;
        if (f === Gt)
          return e;
        var d = n.get(f), h = f in o;
        if (d === void 0 && (!h || (m = bt(o, f)) != null && m.writable) && (d = s(() => {
          var v = He(h ? o[f] : ue), b = /* @__PURE__ */ se(v);
          return b;
        }), n.set(f, d)), d !== void 0) {
          var g = i(d);
          return g === ue ? void 0 : g;
        }
        return Reflect.get(o, f, c);
      },
      getOwnPropertyDescriptor(o, f) {
        var c = Reflect.getOwnPropertyDescriptor(o, f);
        if (c && "value" in c) {
          var d = n.get(f);
          d && (c.value = i(d));
        } else if (c === void 0) {
          var h = n.get(f), g = h == null ? void 0 : h.v;
          if (h !== void 0 && g !== ue)
            return {
              enumerable: !0,
              configurable: !0,
              value: g,
              writable: !0
            };
        }
        return c;
      },
      has(o, f) {
        var g;
        if (f === Gt)
          return !0;
        var c = n.get(f), d = c !== void 0 && c.v !== ue || Reflect.has(o, f);
        if (c !== void 0 || P !== null && (!d || (g = bt(o, f)) != null && g.writable)) {
          c === void 0 && (c = s(() => {
            var m = d ? He(o[f]) : ue, v = /* @__PURE__ */ se(m);
            return v;
          }), n.set(f, c));
          var h = i(c);
          if (h === ue)
            return !1;
        }
        return d;
      },
      set(o, f, c, d) {
        var E;
        var h = n.get(f), g = f in o;
        if (r && f === "length")
          for (var m = c; m < /** @type {Source<number>} */
          h.v; m += 1) {
            var v = n.get(m + "");
            v !== void 0 ? w(v, ue) : m in o && (v = s(() => /* @__PURE__ */ se(ue)), n.set(m + "", v));
          }
        if (h === void 0)
          (!g || (E = bt(o, f)) != null && E.writable) && (h = s(() => /* @__PURE__ */ se(void 0)), w(h, He(c)), n.set(f, h));
        else {
          g = h.v !== ue;
          var b = s(() => He(c));
          w(h, b);
        }
        var y = Reflect.getOwnPropertyDescriptor(o, f);
        if (y != null && y.set && y.set.call(d, c), !g) {
          if (r && typeof f == "string") {
            var S = (
              /** @type {Source<number>} */
              n.get("length")
            ), R = Number(f);
            Number.isInteger(R) && R >= S.v && w(S, R + 1);
          }
          qn(a);
        }
        return !0;
      },
      ownKeys(o) {
        i(a);
        var f = Reflect.ownKeys(o).filter((h) => {
          var g = n.get(h);
          return g === void 0 || g.v !== ue;
        });
        for (var [c, d] of n)
          d.v !== ue && !(c in o) && f.push(c);
        return f;
      },
      setPrototypeOf() {
        Ei();
      }
    }
  );
}
var Cr, oa, ua, fa;
function Gn() {
  if (Cr === void 0) {
    Cr = window, oa = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    ua = bt(t, "firstChild").get, fa = bt(t, "nextSibling").get, $r(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), $r(n) && (n.__t = void 0);
  }
}
function ze(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function We(e) {
  return ua.call(e);
}
// @__NO_SIDE_EFFECTS__
function Qe(e) {
  return fa.call(e);
}
function G(e, t) {
  if (!M)
    return /* @__PURE__ */ We(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ We(F)
  );
  if (n === null)
    n = F.appendChild(ze());
  else if (t && n.nodeType !== sr) {
    var r = ze();
    return n == null || n.before(r), Te(r), r;
  }
  return Te(n), n;
}
function hn(e, t) {
  if (!M) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ We(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Qe(n) : n;
  }
  return F;
}
function ie(e, t = 1, n = !1) {
  let r = M ? F : e;
  for (var a; t--; )
    a = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Qe(r);
  if (!M)
    return r;
  if (n && (r == null ? void 0 : r.nodeType) !== sr) {
    var l = ze();
    return r === null ? a == null || a.after(l) : r.before(l), Te(l), l;
  }
  return Te(r), /** @type {TemplateNode} */
  r;
}
function ca(e) {
  e.textContent = "";
}
function va() {
  return !1;
}
function da(e) {
  var t = A, n = P;
  Ue(null), st(null);
  try {
    return e();
  } finally {
    Ue(t), st(n);
  }
}
function qi(e) {
  P === null && A === null && yi(), A !== null && A.f & Ne && P === null && wi(), kt && gi();
}
function Hi(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function et(e, t, n, r = !0) {
  var a = P;
  a !== null && a.f & De && (e |= De);
  var l = {
    ctx: Fe,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Be,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: a,
    b: a && a.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (n)
    try {
      At(l), l.f |= rr;
    } catch (f) {
      throw je(l), f;
    }
  else t !== null && Lt(l);
  if (r) {
    var s = l;
    if (n && s.deps === null && s.teardown === null && s.nodes_start === null && s.first === s.last && // either `null`, or a singular child
    !(s.f & Wt) && (s = s.first), s !== null && (s.parent = a, a !== null && Hi(s, a), A !== null && A.f & Ee && !(e & ot))) {
      var o = (
        /** @type {Derived} */
        A
      );
      (o.effects ?? (o.effects = [])).push(s);
    }
  }
  return l;
}
function vt(e) {
  qi();
  var t = (
    /** @type {Effect} */
    P.f
  ), n = !A && (t & Ze) !== 0 && (t & rr) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      Fe
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return ha(e);
}
function ha(e) {
  return et(nr | _i, e, !1);
}
function Wi(e) {
  Ft.ensure();
  const t = et(ot | Wt, e, !0);
  return () => {
    je(t);
  };
}
function zi(e) {
  Ft.ensure();
  const t = et(ot | Wt, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? fr(t, () => {
      je(t), r(void 0);
    }) : (je(t), r(void 0));
  });
}
function pa(e) {
  return et(nr, e, !1);
}
function ji(e) {
  return et(ir | Wt, e, !0);
}
function _a(e, t = 0) {
  return et(Hr | t, e, !0);
}
function le(e, t = [], n = []) {
  Mi(t, n, (r) => {
    et(Hr, () => e(...r.map(i)), !0);
  });
}
function ba(e, t = 0) {
  var n = et(Ht | t, e, !0);
  return n;
}
function qt(e, t = !0) {
  return et(Ze | Wt, e, !0, t);
}
function ma(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = kt, r = A;
    Pr(!0), Ue(null);
    try {
      t.call(null);
    } finally {
      Pr(n), Ue(r);
    }
  }
}
function ga(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const a = n.ac;
    a !== null && da(() => {
      a.abort(lr);
    });
    var r = n.next;
    n.f & ot ? n.parent = null : je(n, t), n = r;
  }
}
function Ui(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & Ze || je(t), t = n;
  }
}
function je(e, t = !0) {
  var n = !1;
  (t || e.f & pi) && e.nodes_start !== null && e.nodes_end !== null && (wa(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), ga(e, t && !n), xn(e, 0), xe(e, yt);
  var r = e.transitions;
  if (r !== null)
    for (const l of r)
      l.stop();
  ma(e);
  var a = e.parent;
  a !== null && a.first !== null && ya(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function wa(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Qe(e)
    );
    e.remove(), e = n;
  }
}
function ya(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function fr(e, t) {
  var n = [];
  cr(e, n, !0), ka(n, () => {
    je(e), t && t();
  });
}
function ka(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var a of e)
      a.out(r);
  } else
    t();
}
function cr(e, t, n) {
  if (!(e.f & De)) {
    if (e.f ^= De, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var a = r.next, l = (r.f & ar) !== 0 || (r.f & Ze) !== 0;
      cr(r, t, l ? n : !1), r = a;
    }
  }
}
function vr(e) {
  $a(e, !0);
}
function $a(e, t) {
  if (e.f & De) {
    e.f ^= De, e.f & _e || (xe(e, Be), Lt(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, a = (n.f & ar) !== 0 || (n.f & Ze) !== 0;
      $a(n, a ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const l of e.transitions)
        (l.is_global || t) && l.in();
  }
}
let Pt = !1;
function Sr(e) {
  Pt = e;
}
let kt = !1;
function Pr(e) {
  kt = e;
}
let A = null, qe = !1;
function Ue(e) {
  A = e;
}
let P = null;
function st(e) {
  P = e;
}
let be = null;
function Ta(e) {
  A !== null && (be === null ? be = [e] : be.push(e));
}
let pe = null, $e = 0, Ae = null;
function Yi(e) {
  Ae = e;
}
let xa = 1, Zt = 0, gt = Zt;
function Ar(e) {
  gt = e;
}
let it = !1;
function Ea() {
  return ++xa;
}
function Rn(e) {
  var h;
  var t = e.f;
  if (t & Be)
    return !0;
  if (t & ut) {
    var n = e.deps, r = (t & Ne) !== 0;
    if (n !== null) {
      var a, l, s = (t & kn) !== 0, o = r && P !== null && !it, f = n.length;
      if ((s || o) && (P === null || !(P.f & yt))) {
        var c = (
          /** @type {Derived} */
          e
        ), d = c.parent;
        for (a = 0; a < f; a++)
          l = n[a], (s || !((h = l == null ? void 0 : l.reactions) != null && h.includes(c))) && (l.reactions ?? (l.reactions = [])).push(c);
        s && (c.f ^= kn), o && d !== null && !(d.f & Ne) && (c.f ^= Ne);
      }
      for (a = 0; a < f; a++)
        if (l = n[a], Rn(
          /** @type {Derived} */
          l
        ) && ta(
          /** @type {Derived} */
          l
        ), l.wv > e.wv)
          return !0;
    }
    (!r || P !== null && !it) && xe(e, _e);
  }
  return !1;
}
function Ca(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(be != null && be.includes(e)))
    for (var a = 0; a < r.length; a++) {
      var l = r[a];
      l.f & Ee ? Ca(
        /** @type {Derived} */
        l,
        t,
        !1
      ) : t === l && (n ? xe(l, Be) : l.f & _e && xe(l, ut), Lt(
        /** @type {Effect} */
        l
      ));
    }
}
function Sa(e) {
  var b;
  var t = pe, n = $e, r = Ae, a = A, l = it, s = be, o = Fe, f = qe, c = gt, d = e.f;
  pe = /** @type {null | Value[]} */
  null, $e = 0, Ae = null, it = (d & Ne) !== 0 && (qe || !Pt || A === null), A = d & (Ze | ot) ? null : e, be = null, $n(e.ctx), qe = !1, gt = ++Zt, e.ac !== null && (da(() => {
    e.ac.abort(lr);
  }), e.ac = null);
  try {
    e.f |= zn;
    var h = (
      /** @type {Function} */
      e.fn
    ), g = h(), m = e.deps;
    if (pe !== null) {
      var v;
      if (xn(e, $e), m !== null && $e > 0)
        for (m.length = $e + pe.length, v = 0; v < pe.length; v++)
          m[$e + v] = pe[v];
      else
        e.deps = m = pe;
      if (!it || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      d & Ee && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (v = $e; v < m.length; v++)
          ((b = m[v]).reactions ?? (b.reactions = [])).push(e);
    } else m !== null && $e < m.length && (xn(e, $e), m.length = $e);
    if (Kr() && Ae !== null && !qe && m !== null && !(e.f & (Ee | ut | Be)))
      for (v = 0; v < /** @type {Source[]} */
      Ae.length; v++)
        Ca(
          Ae[v],
          /** @type {Effect} */
          e
        );
    return a !== null && a !== e && (Zt++, Ae !== null && (r === null ? r = Ae : r.push(.../** @type {Source[]} */
    Ae))), e.f & mt && (e.f ^= mt), g;
  } catch (y) {
    return Ri(y);
  } finally {
    e.f ^= zn, pe = t, $e = n, Ae = r, A = a, it = l, be = s, $n(o), qe = f, gt = c;
  }
}
function Vi(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = fi.call(n, e);
    if (r !== -1) {
      var a = n.length - 1;
      a === 0 ? n = t.reactions = null : (n[r] = n[a], n.pop());
    }
  }
  n === null && t.f & Ee && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (pe === null || !pe.includes(t)) && (xe(t, ut), t.f & (Ne | kn) || (t.f ^= kn), ea(
    /** @type {Derived} **/
    t
  ), xn(
    /** @type {Derived} **/
    t,
    0
  ));
}
function xn(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Vi(e, n[r]);
}
function At(e) {
  var t = e.f;
  if (!(t & yt)) {
    xe(e, _e);
    var n = P, r = Pt;
    P = e, Pt = !0;
    try {
      t & Ht ? Ui(e) : ga(e), ma(e);
      var a = Sa(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = xa;
      var l;
      Lr && Pi && e.f & Be && e.deps;
    } finally {
      Pt = r, P = n;
    }
  }
}
async function Gi() {
  await Promise.resolve(), X();
}
function i(e) {
  var t = e.f, n = (t & Ee) !== 0;
  if (A !== null && !qe) {
    var r = P !== null && (P.f & yt) !== 0;
    if (!r && !(be != null && be.includes(e))) {
      var a = A.deps;
      if (A.f & zn)
        e.rv < Zt && (e.rv = Zt, pe === null && a !== null && a[$e] === e ? $e++ : pe === null ? pe = [e] : (!it || !pe.includes(e)) && pe.push(e));
      else {
        (A.deps ?? (A.deps = [])).push(e);
        var l = e.reactions;
        l === null ? e.reactions = [A] : l.includes(A) || l.push(A);
      }
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var s = (
      /** @type {Derived} */
      e
    ), o = s.parent;
    o !== null && !(o.f & Ne) && (s.f ^= Ne);
  }
  if (kt) {
    if (lt.has(e))
      return lt.get(e);
    if (n) {
      s = /** @type {Derived} */
      e;
      var f = s.v;
      return (!(s.f & _e) && s.reactions !== null || Pa(s)) && (f = ur(s)), lt.set(s, f), f;
    }
  } else if (n) {
    if (s = /** @type {Derived} */
    e, at != null && at.has(s))
      return at.get(s);
    Rn(s) && ta(s);
  }
  if (e.f & mt)
    throw e.v;
  return e.v;
}
function Pa(e) {
  if (e.v === ue) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (lt.has(t) || t.f & Ee && Pa(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Aa(e) {
  var t = qe;
  try {
    return qe = !0, e();
  } finally {
    qe = t;
  }
}
const Ki = -7169;
function xe(e, t) {
  e.f = e.f & Ki | t;
}
const Ra = /* @__PURE__ */ new Set(), Kn = /* @__PURE__ */ new Set();
function Ji(e) {
  for (var t = 0; t < e.length; t++)
    Ra.add(e[t]);
  for (var n of Kn)
    n(e);
}
let Rr = null;
function pn(e) {
  var R;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, a = ((R = e.composedPath) == null ? void 0 : R.call(e)) || [], l = (
    /** @type {null | Element} */
    a[0] || e.target
  );
  Rr = e;
  var s = 0, o = Rr === e && e.__root;
  if (o) {
    var f = a.indexOf(o);
    if (f !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var c = a.indexOf(t);
    if (c === -1)
      return;
    f <= c && (s = f);
  }
  if (l = /** @type {Element} */
  a[s] || e.target, l !== t) {
    Ot(e, "currentTarget", {
      configurable: !0,
      get() {
        return l || n;
      }
    });
    var d = A, h = P;
    Ue(null), st(null);
    try {
      for (var g, m = []; l !== null; ) {
        var v = l.assignedSlot || l.parentNode || /** @type {any} */
        l.host || null;
        try {
          var b = l["__" + r];
          if (b != null && (!/** @type {any} */
          l.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === l))
            if (er(b)) {
              var [y, ...S] = b;
              y.apply(l, [e, ...S]);
            } else
              b.call(l, e);
        } catch (E) {
          g ? m.push(E) : g = E;
        }
        if (e.cancelBubble || v === t || v === null)
          break;
        l = v;
      }
      if (g) {
        for (let E of m)
          queueMicrotask(() => {
            throw E;
          });
        throw g;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Ue(d), st(h);
    }
  }
}
function Na(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function Xe(e, t) {
  var n = (
    /** @type {Effect} */
    P
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function L(e, t) {
  var n = (t & ui) !== 0, r, a = !e.startsWith("<!>");
  return () => {
    if (M)
      return Xe(F, null), F;
    r === void 0 && (r = Na(a ? e : "<!>" + e), r = /** @type {Node} */
    /* @__PURE__ */ We(r));
    var l = (
      /** @type {TemplateNode} */
      n || oa ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    return Xe(l, l), l;
  };
}
function Nr(e = "") {
  if (!M) {
    var t = ze(e + "");
    return Xe(t, t), t;
  }
  var n = F;
  return n.nodeType !== sr && (n.before(n = ze()), Te(n)), Xe(n, n), n;
}
function _n() {
  if (M)
    return Xe(F, null), F;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = ze();
  return e.append(t, n), Xe(t, n), e;
}
function N(e, t) {
  if (M) {
    P.nodes_end = F, Mt();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const Xi = ["touchstart", "touchmove"];
function Zi(e) {
  return Xi.includes(e);
}
function Pe(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function Ba(e, t) {
  return Ia(e, t);
}
function Qi(e, t) {
  Gn(), t.intro = t.intro ?? !1;
  const n = t.target, r = M, a = F;
  try {
    for (var l = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ We(n)
    ); l && (l.nodeType !== Dt || /** @type {Comment} */
    l.data !== Fr); )
      l = /** @type {TemplateNode} */
      /* @__PURE__ */ Qe(l);
    if (!l)
      throw _t;
    Je(!0), Te(
      /** @type {Comment} */
      l
    ), Mt();
    const s = Ia(e, { ...t, anchor: l });
    if (F === null || F.nodeType !== Dt || /** @type {Comment} */
    F.data !== Qn)
      throw rn(), _t;
    return Je(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s instanceof Error && s.message.split(`
`).some((o) => o.startsWith("https://svelte.dev/e/")))
      throw s;
    return s !== _t && console.warn("Failed to hydrate: ", s), t.recover === !1 && $i(), Gn(), ca(n), Je(!1), Ba(e, t);
  } finally {
    Je(r), Te(a);
  }
}
const Et = /* @__PURE__ */ new Map();
function Ia(e, { target: t, anchor: n, props: r = {}, events: a, context: l, intro: s = !0 }) {
  Gn();
  var o = /* @__PURE__ */ new Set(), f = (h) => {
    for (var g = 0; g < h.length; g++) {
      var m = h[g];
      if (!o.has(m)) {
        o.add(m);
        var v = Zi(m);
        t.addEventListener(m, pn, { passive: v });
        var b = Et.get(m);
        b === void 0 ? (document.addEventListener(m, pn, { passive: v }), Et.set(m, 1)) : Et.set(m, b + 1);
      }
    }
  };
  f(tr(Ra)), Kn.add(f);
  var c = void 0, d = zi(() => {
    var h = n ?? t.appendChild(ze());
    return qt(() => {
      if (l) {
        Vr({});
        var g = (
          /** @type {ComponentContext} */
          Fe
        );
        g.c = l;
      }
      a && (r.$$events = a), M && Xe(
        /** @type {TemplateNode} */
        h,
        null
      ), c = e(h, r) || {}, M && (P.nodes_end = F), l && Gr();
    }), () => {
      var v;
      for (var g of o) {
        t.removeEventListener(g, pn);
        var m = (
          /** @type {number} */
          Et.get(g)
        );
        --m === 0 ? (document.removeEventListener(g, pn), Et.delete(g)) : Et.set(g, m);
      }
      Kn.delete(f), h !== n && ((v = h.parentNode) == null || v.removeChild(h));
    };
  });
  return Jn.set(c, d), c;
}
let Jn = /* @__PURE__ */ new WeakMap();
function el(e, t) {
  const n = Jn.get(e);
  return n ? (Jn.delete(e), n(t)) : Promise.resolve();
}
function K(e, t, n = !1) {
  M && Mt();
  var r = e, a = null, l = null, s = ue, o = n ? ar : 0, f = !1;
  const c = (m, v = !0) => {
    f = !0, g(v, m);
  };
  var d = null;
  function h() {
    d !== null && (d.lastChild.remove(), r.before(d), d = null);
    var m = s ? a : l, v = s ? l : a;
    m && vr(m), v && fr(v, () => {
      s ? l = null : a = null;
    });
  }
  const g = (m, v) => {
    if (s === (s = m)) return;
    let b = !1;
    if (M) {
      const x = jr(r) === Zn;
      !!s === x && (r = jn(), Te(r), Je(!1), b = !0);
    }
    var y = va(), S = r;
    if (y && (d = document.createDocumentFragment(), d.append(S = ze())), s ? a ?? (a = v && qt(() => v(S))) : l ?? (l = v && qt(() => v(S))), y) {
      var R = (
        /** @type {Batch} */
        ne
      ), E = s ? a : l, U = s ? l : a;
      E && R.skipped_effects.delete(E), U && R.skipped_effects.add(U), R.add_callback(h);
    } else
      h();
    b && Je(!0);
  };
  ba(() => {
    f = !1, t(c), f || g(null, null);
  }, o), M && (r = F);
}
function Ct(e, t) {
  return t;
}
function tl(e, t, n) {
  for (var r = e.items, a = [], l = t.length, s = 0; s < l; s++)
    cr(t[s].e, a, !0);
  var o = l > 0 && a.length === 0 && n !== null;
  if (o) {
    var f = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    ca(f), f.append(
      /** @type {Element} */
      n
    ), r.clear(), Le(e, t[0].prev, t[l - 1].next);
  }
  ka(a, () => {
    for (var c = 0; c < l; c++) {
      var d = t[c];
      o || (r.delete(d.k), Le(e, d.prev, d.next)), je(d.e, !o);
    }
  });
}
function St(e, t, n, r, a, l = null) {
  var s = e, o = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, f = (t & Mr) !== 0;
  if (f) {
    var c = (
      /** @type {Element} */
      e
    );
    s = M ? Te(
      /** @type {Comment | Text} */
      /* @__PURE__ */ We(c)
    ) : c.appendChild(ze());
  }
  M && Mt();
  var d = null, h = !1, g = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ Qr(() => {
    var S = n();
    return er(S) ? S : S == null ? [] : tr(S);
  }), v, b;
  function y() {
    nl(
      b,
      v,
      o,
      g,
      s,
      a,
      t,
      r,
      n
    ), l !== null && (v.length === 0 ? d ? vr(d) : d = qt(() => l(s)) : d !== null && fr(d, () => {
      d = null;
    }));
  }
  ba(() => {
    b ?? (b = /** @type {Effect} */
    P), v = /** @type {V[]} */
    i(m);
    var S = v.length;
    if (h && S === 0)
      return;
    h = S === 0;
    let R = !1;
    if (M) {
      var E = jr(s) === Zn;
      E !== (S === 0) && (s = jn(), Te(s), Je(!1), R = !0);
    }
    if (M) {
      for (var U = null, x, k = 0; k < S; k++) {
        if (F.nodeType === Dt && /** @type {Comment} */
        F.data === Qn) {
          s = /** @type {Comment} */
          F, R = !0, Je(!1);
          break;
        }
        var C = v[k], Y = r(C, k);
        x = Xn(
          F,
          o,
          U,
          null,
          C,
          Y,
          k,
          a,
          t,
          n
        ), o.items.set(Y, x), U = x;
      }
      S > 0 && Te(jn());
    }
    if (M)
      S === 0 && l && (d = qt(() => l(s)));
    else if (va()) {
      var oe = /* @__PURE__ */ new Set(), B = (
        /** @type {Batch} */
        ne
      );
      for (k = 0; k < S; k += 1) {
        C = v[k], Y = r(C, k);
        var Ye = o.items.get(Y) ?? g.get(Y);
        Ye ? t & (Cn | Sn) && Oa(Ye, C, k, t) : (x = Xn(
          null,
          o,
          null,
          null,
          C,
          Y,
          k,
          a,
          t,
          n,
          !0
        ), g.set(Y, x)), oe.add(Y);
      }
      for (const [fe, tt] of o.items)
        oe.has(fe) || B.skipped_effects.add(tt.e);
      B.add_callback(y);
    } else
      y();
    R && Je(!0), i(m);
  }), M && (s = F);
}
function nl(e, t, n, r, a, l, s, o, f) {
  var z, j, V, re;
  var c = (s & ri) !== 0, d = (s & (Cn | Sn)) !== 0, h = t.length, g = n.items, m = n.first, v = m, b, y = null, S, R = [], E = [], U, x, k, C;
  if (c)
    for (C = 0; C < h; C += 1)
      U = t[C], x = o(U, C), k = g.get(x), k !== void 0 && ((z = k.a) == null || z.measure(), (S ?? (S = /* @__PURE__ */ new Set())).add(k));
  for (C = 0; C < h; C += 1) {
    if (U = t[C], x = o(U, C), k = g.get(x), k === void 0) {
      var Y = r.get(x);
      if (Y !== void 0) {
        r.delete(x), g.set(x, Y);
        var oe = y ? y.next : v;
        Le(n, y, Y), Le(n, Y, oe), Hn(Y, oe, a), y = Y;
      } else {
        var B = v ? (
          /** @type {TemplateNode} */
          v.e.nodes_start
        ) : a;
        y = Xn(
          B,
          n,
          y,
          y === null ? n.first : y.next,
          U,
          x,
          C,
          l,
          s,
          f
        );
      }
      g.set(x, y), R = [], E = [], v = y.next;
      continue;
    }
    if (d && Oa(k, U, C, s), k.e.f & De && (vr(k.e), c && ((j = k.a) == null || j.unfix(), (S ?? (S = /* @__PURE__ */ new Set())).delete(k))), k !== v) {
      if (b !== void 0 && b.has(k)) {
        if (R.length < E.length) {
          var Ye = E[0], fe;
          y = Ye.prev;
          var tt = R[0], ft = R[R.length - 1];
          for (fe = 0; fe < R.length; fe += 1)
            Hn(R[fe], Ye, a);
          for (fe = 0; fe < E.length; fe += 1)
            b.delete(E[fe]);
          Le(n, tt.prev, ft.next), Le(n, y, tt), Le(n, ft, Ye), v = Ye, y = ft, C -= 1, R = [], E = [];
        } else
          b.delete(k), Hn(k, v, a), Le(n, k.prev, k.next), Le(n, k, y === null ? n.first : y.next), Le(n, y, k), y = k;
        continue;
      }
      for (R = [], E = []; v !== null && v.k !== x; )
        v.e.f & De || (b ?? (b = /* @__PURE__ */ new Set())).add(v), E.push(v), v = v.next;
      if (v === null)
        continue;
      k = v;
    }
    R.push(k), y = k, v = k.next;
  }
  if (v !== null || b !== void 0) {
    for (var Ve = b === void 0 ? [] : tr(b); v !== null; )
      v.e.f & De || Ve.push(v), v = v.next;
    var $t = Ve.length;
    if ($t > 0) {
      var an = s & Mr && h === 0 ? a : null;
      if (c) {
        for (C = 0; C < $t; C += 1)
          (V = Ve[C].a) == null || V.measure();
        for (C = 0; C < $t; C += 1)
          (re = Ve[C].a) == null || re.fix();
      }
      tl(n, Ve, an);
    }
  }
  c && Zr(() => {
    var me;
    if (S !== void 0)
      for (k of S)
        (me = k.a) == null || me.apply();
  }), e.first = n.first && n.first.e, e.last = y && y.e;
  for (var Nn of r.values())
    je(Nn.e);
  r.clear();
}
function Oa(e, t, n, r) {
  r & Cn && Xt(e.v, t), r & Sn ? Xt(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Xn(e, t, n, r, a, l, s, o, f, c, d) {
  var h = (f & Cn) !== 0, g = (f & ai) === 0, m = h ? g ? /* @__PURE__ */ la(a, !1, !1) : Jt(a) : a, v = f & Sn ? Jt(s) : s, b = {
    i: v,
    v: m,
    k: l,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  try {
    if (e === null) {
      var y = document.createDocumentFragment();
      y.append(e = ze());
    }
    return b.e = qt(() => o(
      /** @type {Node} */
      e,
      m,
      v,
      c
    ), M), b.e.prev = n && n.e, b.e.next = r && r.e, n === null ? d || (t.first = b) : (n.next = b, n.e.next = b.e), r !== null && (r.prev = b, r.e.prev = b.e), b;
  } finally {
  }
}
function Hn(e, t, n) {
  for (var r = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : n, a = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : n, l = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); l !== null && l !== r; ) {
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Qe(l)
    );
    a.before(l), l = s;
  }
}
function Le(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function Br(e, t, n = !1, r = !1, a = !1) {
  var l = e, s = "";
  le(() => {
    var o = (
      /** @type {Effect} */
      P
    );
    if (s === (s = t() ?? "")) {
      M && Mt();
      return;
    }
    if (o.nodes_start !== null && (wa(
      o.nodes_start,
      /** @type {TemplateNode} */
      o.nodes_end
    ), o.nodes_start = o.nodes_end = null), s !== "") {
      if (M) {
        F.data;
        for (var f = Mt(), c = f; f !== null && (f.nodeType !== Dt || /** @type {Comment} */
        f.data !== ""); )
          c = f, f = /** @type {TemplateNode} */
          /* @__PURE__ */ Qe(f);
        if (f === null)
          throw rn(), _t;
        Xe(F, c), l = Te(f);
        return;
      }
      var d = s + "";
      n ? d = `<svg>${d}</svg>` : r && (d = `<math>${d}</math>`);
      var h = Na(d);
      if ((n || r) && (h = /** @type {Element} */
      /* @__PURE__ */ We(h)), Xe(
        /** @type {TemplateNode} */
        /* @__PURE__ */ We(h),
        /** @type {TemplateNode} */
        h.lastChild
      ), n || r)
        for (; /* @__PURE__ */ We(h); )
          l.before(
            /** @type {Node} */
            /* @__PURE__ */ We(h)
          );
      else
        l.before(h);
    }
  });
}
function rl(e, t) {
  pa(() => {
    var n = e.getRootNode(), r = (
      /** @type {ShadowRoot} */
      n.host ? (
        /** @type {ShadowRoot} */
        n
      ) : (
        /** @type {Document} */
        n.head ?? /** @type {Document} */
        n.ownerDocument.head
      )
    );
    if (!r.querySelector("#" + t.hash)) {
      const a = document.createElement("style");
      a.id = t.hash, a.textContent = t.code, r.appendChild(a);
    }
  });
}
function al(e, t, n) {
  var r = e == null ? "" : "" + e;
  return r = r ? r + " " + t : t, r === "" ? null : r;
}
function il(e, t) {
  return e == null ? null : String(e);
}
function Vt(e, t, n, r, a, l) {
  var s = e.__className;
  if (M || s !== n || s === void 0) {
    var o = al(n, r);
    (!M || o !== e.getAttribute("class")) && (o == null ? e.removeAttribute("class") : e.className = o), e.__className = n;
  }
  return l;
}
function Wn(e, t, n, r) {
  var a = e.__style;
  if (M || a !== t) {
    var l = il(t);
    (!M || l !== e.getAttribute("style")) && (l == null ? e.removeAttribute("style") : e.style.cssText = l), e.__style = t;
  }
  return r;
}
function Ir(e, t) {
  return e === t || (e == null ? void 0 : e[Gt]) === t;
}
function Or(e = {}, t, n, r) {
  return pa(() => {
    var a, l;
    return _a(() => {
      a = l, l = [], Aa(() => {
        e !== n(...l) && (t(e, ...l), a && Ir(n(...a), e) && t(null, ...a));
      });
    }), () => {
      Zr(() => {
        l && Ir(n(...l), e) && t(null, ...l);
      });
    };
  }), e;
}
let bn = !1;
function ll(e) {
  var t = bn;
  try {
    return bn = !1, [e(), bn];
  } finally {
    bn = t;
  }
}
function te(e, t, n, r) {
  var R;
  var a = (n & si) !== 0, l = (n & oi) !== 0, s = (
    /** @type {V} */
    r
  ), o = !0, f = () => (o && (o = !1, s = l ? Aa(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), s), c;
  if (a) {
    var d = Gt in e || zr in e;
    c = ((R = bt(e, t)) == null ? void 0 : R.set) ?? (d && t in e ? (E) => e[t] = E : void 0);
  }
  var h, g = !1;
  a ? [h, g] = ll(() => (
    /** @type {V} */
    e[t]
  )) : h = /** @type {V} */
  e[t], h === void 0 && r !== void 0 && (h = f(), c && (Ti(), c(h)));
  var m;
  if (m = () => {
    var E = (
      /** @type {V} */
      e[t]
    );
    return E === void 0 ? f() : (o = !0, E);
  }, !(n & li))
    return m;
  if (c) {
    var v = e.$$legacy;
    return (
      /** @type {() => V} */
      function(E, U) {
        return arguments.length > 0 ? ((!U || v || g) && c(U ? m() : E), E) : m();
      }
    );
  }
  var b = !1, y = (n & ii ? Pn : Qr)(() => (b = !1, m()));
  a && i(y);
  var S = (
    /** @type {Effect} */
    P
  );
  return (
    /** @type {() => V} */
    function(E, U) {
      if (arguments.length > 0) {
        const x = U ? i(y) : a ? He(E) : E;
        return w(y, x), b = !0, s !== void 0 && (s = x), E;
      }
      return kt && b || S.f & yt ? y.v : i(y);
    }
  );
}
function sl(e) {
  return new ol(e);
}
var Ke, Re;
class ol {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    de(this, Ke);
    /** @type {Record<string, any>} */
    de(this, Re);
    var l;
    var n = /* @__PURE__ */ new Map(), r = (s, o) => {
      var f = /* @__PURE__ */ la(o, !1, !1);
      return n.set(s, f), f;
    };
    const a = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, o) {
          return i(n.get(o) ?? r(o, Reflect.get(s, o)));
        },
        has(s, o) {
          return o === zr ? !0 : (i(n.get(o) ?? r(o, Reflect.get(s, o))), Reflect.has(s, o));
        },
        set(s, o, f) {
          return w(n.get(o) ?? r(o, f), f), Reflect.set(s, o, f);
        }
      }
    );
    we(this, Re, (t.hydrate ? Qi : Ba)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: a,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((l = t == null ? void 0 : t.props) != null && l.$$host) || t.sync === !1) && X(), we(this, Ke, a.$$events);
    for (const s of Object.keys(T(this, Re)))
      s === "$set" || s === "$destroy" || s === "$on" || Ot(this, s, {
        get() {
          return T(this, Re)[s];
        },
        /** @param {any} value */
        set(o) {
          T(this, Re)[s] = o;
        },
        enumerable: !0
      });
    T(this, Re).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(a, s);
    }, T(this, Re).$destroy = () => {
      el(T(this, Re));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    T(this, Re).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    T(this, Ke)[t] = T(this, Ke)[t] || [];
    const r = (...a) => n.call(this, ...a);
    return T(this, Ke)[t].push(r), () => {
      T(this, Ke)[t] = T(this, Ke)[t].filter(
        /** @param {any} fn */
        (a) => a !== r
      );
    };
  }
  $destroy() {
    T(this, Re).$destroy();
  }
}
Ke = new WeakMap(), Re = new WeakMap();
let Da;
typeof HTMLElement == "function" && (Da = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, n, r) {
    super();
    /** The Svelte component constructor */
    he(this, "$$ctor");
    /** Slots */
    he(this, "$$s");
    /** @type {any} The Svelte component instance */
    he(this, "$$c");
    /** Whether or not the custom element is connected */
    he(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    he(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    he(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    he(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    he(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    he(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    he(this, "$$me");
    this.$$ctor = t, this.$$s = n, r && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, n, r) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const a = this.$$c.$on(t, n);
      this.$$l_u.set(n, a);
    }
    super.addEventListener(t, n, r);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, n, r) {
    if (super.removeEventListener(t, n, r), this.$$c) {
      const a = this.$$l_u.get(n);
      a && (a(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(a) {
        return (l) => {
          const s = document.createElement("slot");
          a !== "default" && (s.name = a), N(l, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, r = ul(this);
      for (const a of this.$$s)
        a in r && (a === "default" && !this.$$d.children ? (this.$$d.children = t(a), n.default = !0) : n[a] = t(a));
      for (const a of this.attributes) {
        const l = this.$$g_p(a.name);
        l in this.$$d || (this.$$d[l] = wn(l, a.value, this.$$p_d, "toProp"));
      }
      for (const a in this.$$p_d)
        !(a in this.$$d) && this[a] !== void 0 && (this.$$d[a] = this[a], delete this[a]);
      this.$$c = sl({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = Wi(() => {
        _a(() => {
          var a;
          this.$$r = !0;
          for (const l of yn(this.$$c)) {
            if (!((a = this.$$p_d[l]) != null && a.reflect)) continue;
            this.$$d[l] = this.$$c[l];
            const s = wn(
              l,
              this.$$d[l],
              this.$$p_d,
              "toAttribute"
            );
            s == null ? this.removeAttribute(this.$$p_d[l].attribute || l) : this.setAttribute(this.$$p_d[l].attribute || l, s);
          }
          this.$$r = !1;
        });
      });
      for (const a in this.$$l)
        for (const l of this.$$l[a]) {
          const s = this.$$c.$on(a, l);
          this.$$l_u.set(l, s);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(t, n, r) {
    var a;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = wn(t, r, this.$$p_d, "toProp"), (a = this.$$c) == null || a.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(t) {
    return yn(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function wn(e, t, n, r) {
  var l;
  const a = (l = n[e]) == null ? void 0 : l.type;
  if (t = a === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e])
    return t;
  if (r === "toAttribute")
    switch (a) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (a) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function ul(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function fl(e, t, n, r, a, l) {
  let s = class extends Da {
    constructor() {
      super(e, n, a), this.$$p_d = t;
    }
    static get observedAttributes() {
      return yn(t).map(
        (o) => (t[o].attribute || o).toLowerCase()
      );
    }
  };
  return yn(t).forEach((o) => {
    Ot(s.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(f) {
        var h;
        f = wn(o, f, t), this.$$d[o] = f;
        var c = this.$$c;
        if (c) {
          var d = (h = bt(c, o)) == null ? void 0 : h.get;
          d ? c[o] = f : c.$set({ [o]: f });
        }
      }
    });
  }), r.forEach((o) => {
    Ot(s.prototype, o, {
      get() {
        var f;
        return (f = this.$$c) == null ? void 0 : f[o];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
const cl = {
  background: "#0d1117",
  foreground: "#c9d1d9",
  border: "#30363d",
  headerBg: "#161b22",
  headerFg: "#8b949e",
  prompt: "#58a6ff",
  command: "#79c0ff",
  output: "#c9d1d9",
  error: "#ff7b72",
  warning: "#ffa657",
  info: "#58a6ff",
  success: "#56d364",
  selection: "#264f78",
  cursor: "#58a6ff"
}, vl = {
  background: "#ffffff",
  foreground: "#24292f",
  border: "#d0d7de",
  headerBg: "#f6f8fa",
  headerFg: "#57606a",
  prompt: "#0969da",
  command: "#0550ae",
  output: "#24292f",
  error: "#cf222e",
  warning: "#9a6700",
  info: "#0969da",
  success: "#1a7f37",
  selection: "#b6e3ff",
  cursor: "#0969da"
};
function dl(e, t) {
  const n = t.style;
  n.setProperty("--terminal-bg", e.background), n.setProperty("--terminal-fg", e.foreground), n.setProperty("--terminal-border", e.border), n.setProperty("--terminal-header-bg", e.headerBg), n.setProperty("--terminal-header-fg", e.headerFg), n.setProperty("--terminal-prompt", e.prompt), n.setProperty("--terminal-command", e.command), n.setProperty("--terminal-output", e.output), n.setProperty("--terminal-error", e.error), n.setProperty("--terminal-warning", e.warning), n.setProperty("--terminal-info", e.info), n.setProperty("--terminal-success", e.success), n.setProperty("--terminal-selection", e.selection), n.setProperty("--terminal-cursor", e.cursor);
}
function hl(e, t) {
  return { ...e, ...t };
}
var pl = /* @__PURE__ */ L('<div class="terminal-buttons svelte-103tpek"><span class="terminal-button close svelte-103tpek"></span> <span class="terminal-button minimize svelte-103tpek"></span> <span class="terminal-button maximize svelte-103tpek"></span></div>'), _l = /* @__PURE__ */ L('<button class="control-button svelte-103tpek"> </button>'), bl = /* @__PURE__ */ L('<button class="control-button svelte-103tpek">↺</button>'), ml = /* @__PURE__ */ L('<button class="control-button svelte-103tpek"> </button>'), gl = /* @__PURE__ */ L('<div class="terminal-controls svelte-103tpek"><!> <!> <!></div>'), wl = /* @__PURE__ */ L('<div class="terminal-header svelte-103tpek"><!> <div class="terminal-title svelte-103tpek"> </div> <!></div>'), yl = /* @__PURE__ */ L('<span class="tab-icon svelte-103tpek"> </span>'), kl = /* @__PURE__ */ L('<span class="tab-badge svelte-103tpek"> </span>'), $l = /* @__PURE__ */ L('<span class="tab-close svelte-103tpek" role="button" tabindex="0">×</span>'), Tl = /* @__PURE__ */ L('<button><!> <span class="tab-title svelte-103tpek"> </span> <!> <!></button>'), xl = /* @__PURE__ */ L('<button class="terminal-tab tab-add svelte-103tpek">+</button>'), El = /* @__PURE__ */ L('<div class="terminal-tabs svelte-103tpek"><!> <!></div>'), Cl = (e, t) => {
  (e.key === "Enter" || e.key === " ") && t();
}, Sl = /* @__PURE__ */ L("<div> </div>"), Pl = /* @__PURE__ */ L('<div class="terminal-table-row svelte-103tpek"></div>'), Al = /* @__PURE__ */ L('<div><div class="terminal-table svelte-103tpek"></div></div>'), Rl = /* @__PURE__ */ L('<span class="rich-text-segment svelte-103tpek"><!></span>'), Nl = /* @__PURE__ */ L('<span class="typing-cursor svelte-103tpek">▊</span>'), Bl = /* @__PURE__ */ L('<div><pre class="svelte-103tpek"><!><!><!></pre></div>'), Il = /* @__PURE__ */ L('<div class="terminal-cursor svelte-103tpek">▊</div>'), Ol = /* @__PURE__ */ L('<span class="tab-icon svelte-103tpek"> </span>'), Dl = /* @__PURE__ */ L('<span class="tab-badge svelte-103tpek"> </span>'), Ml = /* @__PURE__ */ L('<span class="tab-close svelte-103tpek" role="button" tabindex="0">×</span>'), Fl = /* @__PURE__ */ L('<button><!> <span class="tab-title svelte-103tpek"> </span> <!> <!></button>'), Ll = /* @__PURE__ */ L('<button class="terminal-tab tab-add svelte-103tpek">+</button>'), ql = /* @__PURE__ */ L('<div class="terminal-tabs terminal-tabs-bottom svelte-103tpek"><!> <!></div>'), Hl = /* @__PURE__ */ L('<div class="terminal svelte-103tpek"><!> <!> <div class="terminal-content svelte-103tpek" role="button" aria-label="Terminal output - click to skip typing animation" tabindex="0"><!> <!></div> <!></div>');
const Wl = {
  hash: "svelte-103tpek",
  code: `:host {display:block;font-family:'Cascadia Code', 'Fira Code', 'Monaco', 'Consolas', monospace;font-size:14px;line-height:1.5;}.terminal.svelte-103tpek {width:100%;height:100%;min-height:300px;background:var(--terminal-bg);color:var(--terminal-fg);border:1px solid var(--terminal-border);border-radius:8px;overflow:hidden;display:flex;flex-direction:column;transition:all 0.3s ease;}.terminal-header.svelte-103tpek {background:var(--terminal-header-bg);color:var(--terminal-header-fg);padding:12px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--terminal-border);}.terminal-buttons.svelte-103tpek {display:flex;gap:8px;}.terminal-button.svelte-103tpek {width:12px;height:12px;border-radius:50%;display:inline-block;}.terminal-button.close.svelte-103tpek {background:#ff5f56;}.terminal-button.minimize.svelte-103tpek {background:#ffbd2e;}.terminal-button.maximize.svelte-103tpek {background:#27c93f;}.terminal-title.svelte-103tpek {flex:1;text-align:center;font-weight:500;}.terminal-controls.svelte-103tpek {display:flex;gap:8px;}.control-button.svelte-103tpek {background:transparent;color:var(--terminal-header-fg);border:1px solid var(--terminal-border);padding:4px 8px;border-radius:4px;cursor:pointer;font-size:12px;transition:all 0.2s;}.control-button.svelte-103tpek:hover:not(:disabled) {background:var(--terminal-border);color:var(--terminal-fg);}.control-button.svelte-103tpek:disabled {opacity:0.5;cursor:not-allowed;}.terminal-content.svelte-103tpek {flex:1;padding:16px;overflow-y:auto;font-family:inherit;}.terminal-line.svelte-103tpek {margin:4px 0;white-space:pre-wrap;word-break:break-word;}.terminal-line.svelte-103tpek pre:where(.svelte-103tpek) {margin:0;font-family:inherit;display:block;white-space:pre-wrap;}.step-command.svelte-103tpek {color:var(--terminal-command);font-weight:bold;}.step-output.svelte-103tpek {color:var(--terminal-output);}.step-error.svelte-103tpek {color:var(--terminal-error);}.step-warning.svelte-103tpek {color:var(--terminal-warning);}.step-info.svelte-103tpek {color:var(--terminal-info);}.step-success.svelte-103tpek {color:var(--terminal-success);}.terminal-cursor.svelte-103tpek {display:inline-block;color:var(--terminal-cursor);
    animation: svelte-103tpek-blink 1s infinite;}.typing-cursor.svelte-103tpek {display:inline-block;color:var(--terminal-cursor);
    animation: svelte-103tpek-blink 1s infinite;margin-left:2px;}

  @keyframes svelte-103tpek-blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }.terminal-content.svelte-103tpek::-webkit-scrollbar {width:8px;}.terminal-content.svelte-103tpek::-webkit-scrollbar-track {background:var(--terminal-bg);}.terminal-content.svelte-103tpek::-webkit-scrollbar-thumb {background:var(--terminal-border);border-radius:4px;}.terminal-content.svelte-103tpek::-webkit-scrollbar-thumb:hover {background:var(--terminal-header-fg);}

  /* Tab styles */.terminal-tabs.svelte-103tpek {display:flex;background:var(--terminal-header-bg);border-bottom:1px solid var(--terminal-border);gap:4px;overflow-x:auto;align-items:center;}.terminal-tabs-bottom.svelte-103tpek {border-bottom:none;border-top:1px solid var(--terminal-border);}.terminal-tab.svelte-103tpek {display:flex;align-items:center;gap:6px;padding:8px 12px;background:transparent;color:var(--terminal-header-fg);border:none;border-top:2px solid transparent;cursor:pointer;font-family:inherit;font-size:13px;transition:all 0.2s;white-space:nowrap;position:relative;}.terminal-tabs-bottom.svelte-103tpek .terminal-tab:where(.svelte-103tpek) {border-top:none;border-bottom:2px solid transparent;}.terminal-tab.svelte-103tpek:hover {background:rgba(255, 255, 255, 0.05);}.terminal-tab.active.svelte-103tpek {background:var(--terminal-bg);border-top-color:var(--terminal-command);}.terminal-tabs-bottom.svelte-103tpek .terminal-tab.active:where(.svelte-103tpek) {border-top-color:transparent;border-bottom-color:var(--terminal-command);}.tab-icon.svelte-103tpek {font-size:14px;}.tab-title.svelte-103tpek {flex:1;}.tab-badge.svelte-103tpek {padding:2px 6px;background:var(--terminal-command);color:var(--terminal-bg);border-radius:10px;font-size:11px;font-weight:bold;min-width:18px;text-align:center;}.tab-close.svelte-103tpek {margin-left:4px;padding:0 4px;background:transparent;border:none;color:var(--terminal-header-fg);cursor:pointer;font-size:18px;line-height:1;opacity:0.6;transition:opacity 0.2s;}.tab-close.svelte-103tpek:hover {opacity:1;color:var(--terminal-error);}.tab-add.svelte-103tpek {padding:8px 16px;font-weight:bold;opacity:0.7;}.tab-add.svelte-103tpek:hover {opacity:1;background:rgba(255, 255, 255, 0.1);}

  /* Tab status indicators */.tab-status-running.svelte-103tpek .tab-icon:where(.svelte-103tpek)::after {content:'●';color:var(--terminal-warning);position:absolute;top:6px;left:8px;font-size:8px;
    animation: svelte-103tpek-pulse 1.5s infinite;}.tab-status-error.svelte-103tpek .tab-icon:where(.svelte-103tpek)::after {content:'●';color:var(--terminal-error);position:absolute;top:6px;left:8px;font-size:8px;}.tab-status-success.svelte-103tpek .tab-icon:where(.svelte-103tpek)::after {content:'●';color:var(--terminal-success);position:absolute;top:6px;left:8px;font-size:8px;}

  @keyframes svelte-103tpek-pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  /* Scrollbar for tabs */.terminal-tabs.svelte-103tpek::-webkit-scrollbar {height:4px;}.terminal-tabs.svelte-103tpek::-webkit-scrollbar-track {background:transparent;}.terminal-tabs.svelte-103tpek::-webkit-scrollbar-thumb {background:var(--terminal-border);border-radius:2px;}

  /* Rich text segment styling */.rich-text-segment.svelte-103tpek {display:inline;}

  /* Ensure rich text inherits terminal font properties */.terminal-line.svelte-103tpek .rich-text-segment:where(.svelte-103tpek) {font-family:inherit;font-size:inherit;line-height:inherit;}

  /* Table layout styling */.terminal-table.svelte-103tpek {display:block;width:100%;font-family:inherit;margin:0;padding:0;}.terminal-table-row.svelte-103tpek {display:grid !important;grid-template-columns:60px 100px 180px 1fr !important;gap:16px;min-height:1.5em;align-items:baseline;font-family:inherit;}.terminal-table-cell.svelte-103tpek {overflow:visible;}

  /* Semantic column styling with fixed positioning */.terminal-table-row.svelte-103tpek .terminal-table-cell.col-position:where(.svelte-103tpek) {grid-column:1;text-align:right;white-space:nowrap;}.terminal-table-row.svelte-103tpek .terminal-table-cell.col-type:where(.svelte-103tpek) {grid-column:2;text-align:right;white-space:nowrap;}.terminal-table-row.svelte-103tpek .terminal-table-cell.col-rule:where(.svelte-103tpek) {grid-column:3;white-space:nowrap;}.terminal-table-row.svelte-103tpek .terminal-table-cell.col-message:where(.svelte-103tpek) {grid-column:4;white-space:normal;word-break:break-word;}`
};
function zl(e, t) {
  Vr(t, !0), rl(e, Wl);
  let n = te(t, "theme", 7, "dark"), r = te(t, "session", 23, () => []), a = te(t, "autoplay", 7, !1), l = te(t, "playbackSpeed", 7, 1), s = te(t, "showHeader", 7), o = te(t, "title", 7, "Terminal"), f = te(t, "colors", 23, () => ({})), c = te(t, "typingSpeed", 7, 40), d = te(t, "enableTyping", 7, !0), h = te(t, "showPlayButton", 7), g = te(t, "showResetButton", 7), m = te(t, "showThemeToggle", 7), v = te(t, "showWindowButtons", 7), b = te(t, "tabs", 23, () => []), y = te(t, "activeTab", 7, 0), S = te(t, "showTabs", 7, !1), R = te(t, "allowTabClose", 7, !0), E = te(t, "allowTabAdd", 7, !1), U = te(t, "tabBarPosition", 7, "top"), x, k, C = /* @__PURE__ */ se(He(y() || 0)), Y = /* @__PURE__ */ se(He(/* @__PURE__ */ new Map())), oe = /* @__PURE__ */ ke(() => S() && b() && b().length > 0 ? b()[i(C)] || b()[0] : null), B = /* @__PURE__ */ ke(() => i(oe) ? i(oe).session : r()), Ye = /* @__PURE__ */ ke(() => i(oe) ? i(oe).title : o());
  function fe(u, _ = !0, O = "") {
    return console.log(`[parseBooleanProp] ${O}:`, {
      raw: u,
      type: typeof u,
      isUndefined: u === void 0,
      isNull: u === null,
      defaultValue: _
    }), u == null ? _ : typeof u == "boolean" ? u : typeof u == "string" ? u.toLowerCase() === "false" ? !1 : (u.toLowerCase() === "true", !0) : _;
  }
  console.log("[Terminal Props] Raw values:", {
    showPlayButton: h(),
    showResetButton: g(),
    showThemeToggle: m(),
    showWindowButtons: v(),
    showHeader: s()
  });
  let tt = /* @__PURE__ */ ke(() => fe(h(), !0, "showPlayButton")), ft = /* @__PURE__ */ ke(() => fe(g(), !0, "showResetButton")), Ve = /* @__PURE__ */ ke(() => fe(m(), !0, "showThemeToggle")), $t = /* @__PURE__ */ ke(() => fe(v(), !0, "showWindowButtons")), an = /* @__PURE__ */ ke(() => i(tt) || i(ft) || i(Ve));
  vt(() => {
    console.log("[Terminal Computed] Button visibility:", {
      showPlayButtonComputed: i(tt),
      showResetButtonComputed: i(ft),
      showThemeToggleComputed: i(Ve),
      showWindowButtonsComputed: i($t),
      hasControlButtons: i(an)
    });
  });
  let Nn = /* @__PURE__ */ ke(() => fe(s(), !0)), z = /* @__PURE__ */ se(0), j = /* @__PURE__ */ se(!1), V = /* @__PURE__ */ se(He([])), re = /* @__PURE__ */ se(-1), me = /* @__PURE__ */ se(""), zt = /* @__PURE__ */ se(!1), Bn = /* @__PURE__ */ se(!1), In = /* @__PURE__ */ se(He(a())), ce = null, ae = null, dr = -1, ln = "", hr = /* @__PURE__ */ ke(() => hl(n() === "dark" ? cl : vl, f()));
  vt(() => {
    x && i(hr) && dl(i(hr), x);
  }), vt(() => {
    const u = i(V).length;
    k && u > 0 && Gi().then(() => {
      k && (k.scrollTop = k.scrollHeight);
    });
  });
  function sn() {
    i(j) || !i(B) || i(z) >= i(B).length || (w(j, !0), jt());
  }
  function jt() {
    if (!i(B) || i(z) >= i(B).length) {
      w(j, !1), ce = null;
      return;
    }
    const u = i(B)[i(z)], _ = (u.delay || 1e3) / l();
    ce = setTimeout(
      () => {
        if (!i(B)) {
          w(j, !1), ce = null;
          return;
        }
        u.type === "command" && d() && !u.skipTyping ? Ma(u) : (w(V, [...i(V), u], !0), dn(z), i(z) < i(B).length && i(j) ? jt() : (w(j, !1), ce = null));
      },
      _
    );
  }
  function Ma(u) {
    w(re, i(V).length, !0), w(me, ""), w(V, [...i(V), { ...u, content: "" }], !0);
    const _ = La(u.content);
    let O = 0;
    const ve = 1e3 / (u.typingSpeed || c());
    function J() {
      if (!i(j) || !i(B) || i(re) < 0) {
        ae = null, w(re, -1), w(me, "");
        return;
      }
      if (O < _.length) {
        w(me, i(me) + _[O]), w(V, i(V).map((I, ee) => ee === i(re) ? { ...u, content: i(me) } : I), !0), O++;
        const D = ve * 0.2, Q = ve + (Math.random() - 0.5) * D;
        ae = setTimeout(
          () => {
            requestAnimationFrame(() => J());
          },
          Q
        );
      } else
        w(re, -1), w(me, ""), ae = null, dn(z), i(z) < i(B).length && i(j) ? jt() : w(j, !1);
    }
    requestAnimationFrame(() => J());
  }
  function on() {
    ce && (clearTimeout(ce), ce = null), ae && (clearTimeout(ae), ae = null), w(z, 0), w(V, [], !0), w(j, !1), w(re, -1), w(me, "");
  }
  function Fa() {
    if (i(j))
      w(j, !1), ce && (clearTimeout(ce), ce = null), ae && (clearTimeout(ae), ae = null);
    else {
      if (!i(B) || i(B).length === 0)
        return;
      i(z) >= i(B).length ? (on(), setTimeout(() => sn(), 10)) : sn();
    }
  }
  function pr(u) {
    return `step-${u}`;
  }
  function On(u) {
    return Array.isArray(u);
  }
  function La(u) {
    return typeof u == "string" ? u : u.map((_) => _.text).join("");
  }
  function qa(u) {
    return On(u) ? u.some((_) => _.isTableRow || _.tableColumn) : !1;
  }
  function Ha(u) {
    const _ = [];
    let O = [];
    for (const Z of u)
      Z.isTableRow && O.length > 0 ? (_.push([...O]), O = [Z]) : O.push(Z);
    return O.length > 0 && _.push([...O]), _;
  }
  function _r() {
    i(re) >= 0 && i(re) < i(V).length && (ae && (clearTimeout(ae), ae = null), w(
      V,
      i(V).map((u, _) => _ === i(re) ? {
        ...u,
        content: i(B)[i(z)].content
      } : u),
      !0
    ), w(re, -1), w(me, ""), dn(z), i(z) < i(B).length && i(j) ? jt() : w(j, !1));
  }
  let un = null;
  vt(() => {
    if (x && typeof IntersectionObserver < "u") {
      const u = new IntersectionObserver(
        (_) => {
          _.forEach((O) => {
            w(Bn, O.isIntersecting, !0);
          });
        },
        { threshold: 0.1 }
        // Trigger when 10% visible
      );
      return u.observe(x), () => {
        u && u.disconnect();
      };
    }
  }), vt(() => {
    a() !== i(In) && (!i(In) && a() && w(zt, !1), w(In, a()));
  }), vt(() => {
    a() && i(Bn) && !i(zt) && !i(j) && i(B) && i(B).length > 0 && i(z) === 0 && (w(zt, !0), setTimeout(() => sn(), 300));
  }), vt(() => {
    if (x) {
      if (S() && b() && b().length > 0) {
        const _ = b()[i(C)] || b()[0];
        _ && (ln = _.id);
      }
      const u = () => {
        const _ = i(B);
        !S() && _ && _.length !== dr && (dr = _.length, (i(V).length > 0 || i(z) > 0) && (on(), w(
          zt,
          !1
          // Reset autoplay flag for new session
        ))), S() && i(oe) && i(oe).id !== ln && !i(Y).has(i(oe).id) && (ln = i(oe).id, i(Y).has(i(oe).id) || w(zt, !1));
      };
      u(), un = setInterval(u, 500);
    }
    return () => {
      un !== null && (clearInterval(un), un = null), ce && (clearTimeout(ce), ce = null), ae && (clearTimeout(ae), ae = null);
    };
  });
  function Wa() {
    const u = n() === "dark" ? "light" : "dark";
    x == null || x.dispatchEvent(new CustomEvent("theme-change", { detail: u }));
  }
  function za() {
    i(oe) && i(Y).set(i(oe).id, {
      currentStepIndex: i(z),
      isPlaying: i(j),
      displayedSteps: [...i(V)],
      typingStepIndex: i(re),
      typedContent: i(me),
      lastUpdateTime: Date.now()
    });
  }
  function ja(u) {
    const _ = i(Y).get(u);
    if (_) {
      const O = Date.now() - _.lastUpdateTime;
      if (w(z, _.currentStepIndex, !0), w(j, _.isPlaying, !0), w(V, [..._.displayedSteps], !0), w(re, _.typingStepIndex, !0), w(me, _.typedContent, !0), _.isPlaying && i(B) && i(z) < i(B).length) {
        let Z = i(z), ve = 0;
        for (; Z < i(B).length && ve < O; ) {
          const J = i(B)[Z], D = (J.delay || 1e3) / l();
          if (ve + D <= O)
            w(V, [...i(V), J], !0), Z++, ve += D;
          else
            break;
        }
        w(z, Z, !0), i(z) < i(B).length ? jt() : w(j, !1);
      }
    } else
      i(Y).has(u) || (on(), a() && i(Bn) && i(B) && i(B).length > 0 && setTimeout(() => sn(), 300));
  }
  function Dn(u) {
    if (u === i(C) || !b() || u < 0 || u >= b().length) return;
    za(), ce && (clearTimeout(ce), ce = null), ae && (clearTimeout(ae), ae = null), w(C, u, !0);
    const _ = b()[u];
    _ && (ja(_.id), ln = _.id), x == null || x.dispatchEvent(new CustomEvent("tab-change", { detail: { index: u, tab: _ } }));
  }
  function fn(u) {
    if (!b() || b().length <= 1) return;
    const _ = b()[u];
    if (_.closable !== !1 && R())
      if (_ && i(Y).delete(_.id), x == null || x.dispatchEvent(new CustomEvent("tab-close", { detail: { index: u, tab: _ } })), u === i(C)) {
        const Z = u > 0 ? u - 1 : 0;
        b().length > 1 && Dn(Z);
      } else u < i(C) && dn(C, -1);
  }
  function br() {
    E() && (x == null || x.dispatchEvent(new CustomEvent("tab-add", { detail: {} })));
  }
  function mr(u) {
    return u ? `tab-status-${u}` : "";
  }
  var cn = Hl(), gr = G(cn);
  {
    var Ua = (u) => {
      var _ = wl(), O = G(_);
      {
        var Z = (I) => {
          var ee = pl();
          N(I, ee);
        };
        K(O, (I) => {
          i($t) && I(Z);
        });
      }
      var ve = ie(O, 2), J = G(ve, !0);
      W(ve);
      var D = ie(ve, 2);
      {
        var Q = (I) => {
          var ee = gl(), ye = G(ee);
          {
            var ge = (q) => {
              var p = _l();
              p.__click = Fa;
              var $ = G(p, !0);
              W(p), le(() => {
                p.disabled = !i(B) || i(B).length === 0, Pe($, i(j) ? "⏸" : "▶");
              }), N(q, p);
            };
            K(ye, (q) => {
              i(tt) && q(ge);
            });
          }
          var Ce = ie(ye, 2);
          {
            var Ie = (q) => {
              var p = bl();
              p.__click = on, le(() => p.disabled = i(V).length === 0), N(q, p);
            };
            K(Ce, (q) => {
              i(ft) && q(Ie);
            });
          }
          var Ge = ie(Ce, 2);
          {
            var Se = (q) => {
              var p = ml();
              p.__click = Wa;
              var $ = G(p, !0);
              W(p), le(() => Pe($, n() === "dark" ? "☀" : "🌙")), N(q, p);
            };
            K(Ge, (q) => {
              i(Ve) && q(Se);
            });
          }
          W(ee), N(I, ee);
        };
        K(D, (I) => {
          i(an) && I(Q);
        });
      }
      W(_), le(() => Pe(J, i(Ye))), N(u, _);
    };
    K(gr, (u) => {
      i(Nn) && u(Ua);
    });
  }
  var wr = ie(gr, 2);
  {
    var Ya = (u) => {
      var _ = El(), O = G(_);
      St(O, 17, b, Ct, (J, D, Q) => {
        var I = Tl();
        I.__click = () => Dn(Q);
        var ee = G(I);
        {
          var ye = (p) => {
            var $ = yl(), H = G($, !0);
            W($), le(() => Pe(H, i(D).icon)), N(p, $);
          };
          K(ee, (p) => {
            i(D).icon && p(ye);
          });
        }
        var ge = ie(ee, 2), Ce = G(ge, !0);
        W(ge);
        var Ie = ie(ge, 2);
        {
          var Ge = (p) => {
            var $ = kl(), H = G($, !0);
            W($), le(() => Pe(H, i(D).badge)), N(p, $);
          };
          K(Ie, (p) => {
            i(D).badge !== void 0 && p(Ge);
          });
        }
        var Se = ie(Ie, 2);
        {
          var q = (p) => {
            var $ = $l();
            $.__click = (H) => {
              H.stopPropagation(), fn(Q);
            }, $.__keydown = (H) => {
              (H.key === "Enter" || H.key === " ") && (H.stopPropagation(), H.preventDefault(), fn(Q));
            }, N(p, $);
          };
          K(Se, (p) => {
            i(D).closable !== !1 && R() && b().length > 1 && p(q);
          });
        }
        W(I), le(
          (p) => {
            Vt(I, 1, `terminal-tab ${Q === i(C) ? "active" : ""} ${p ?? ""}`, "svelte-103tpek"), Pe(Ce, i(D).title);
          },
          [() => mr(i(D).status)]
        ), N(J, I);
      });
      var Z = ie(O, 2);
      {
        var ve = (J) => {
          var D = xl();
          D.__click = br, N(J, D);
        };
        K(Z, (J) => {
          E() && J(ve);
        });
      }
      W(_), N(u, _);
    };
    K(wr, (u) => {
      S() && b() && b().length > 0 && U() === "top" && u(Ya);
    });
  }
  var Tt = ie(wr, 2);
  Tt.__click = _r, Tt.__keydown = [Cl, _r];
  var yr = G(Tt);
  St(yr, 17, () => i(V), Ct, (u, _, O) => {
    var Z = _n(), ve = hn(Z);
    {
      var J = (Q) => {
        var I = Al(), ee = G(I);
        St(ee, 21, () => Ha(i(_).content), Ct, (ye, ge) => {
          const Ce = /* @__PURE__ */ ke(() => i(ge)[0]), Ie = /* @__PURE__ */ ke(() => {
            var q;
            return ((q = i(Ce)) == null ? void 0 : q.columnGap) || "16px";
          }), Ge = /* @__PURE__ */ ke(() => {
            var q;
            return ((q = i(Ce)) == null ? void 0 : q.rowGap) || "4px";
          });
          var Se = Pl();
          St(Se, 21, () => i(ge), Ct, (q, p) => {
            var $ = Sl(), H = G($, !0);
            W($), le(
              (Mn) => {
                Vt($, 1, `terminal-table-cell ${i(p).tableColumn ? `col-${i(p).tableColumn}` : ""}`, "svelte-103tpek"), Wn($, `${i(p).color ? `color: ${i(p).color};` : ""}${i(p).backgroundColor ? `background-color: ${i(p).backgroundColor};` : ""}${i(p).fontWeight ? `font-weight: ${i(p).fontWeight};` : ""}${i(p).textDecoration ? `text-decoration: ${i(p).textDecoration};` : ""}${i(p).fontStyle ? `font-style: ${i(p).fontStyle};` : ""}${i(p).width ? `width: ${i(p).width};` : ""}${i(p).align ? `text-align: ${i(p).align};` : ""}`), Pe(H, Mn);
              },
              [() => i(p).text.trim()]
            ), N(q, $);
          }), W(Se), le(() => Wn(Se, `gap: ${i(Ie) ?? ""}; margin-bottom: ${i(Ge) ?? ""};`)), N(ye, Se);
        }), W(ee), W(I), le((ye) => Vt(I, 1, `terminal-line ${ye ?? ""}`, "svelte-103tpek"), [() => pr(i(_).type)]), N(Q, I);
      }, D = (Q) => {
        var I = Bl(), ee = G(I), ye = G(ee);
        {
          var ge = (p) => {
            var $ = Nr();
            le(() => Pe($, `${i(_).prompt || "$"} `)), N(p, $);
          };
          K(ye, (p) => {
            i(_).type === "command" && p(ge);
          });
        }
        var Ce = ie(ye);
        {
          var Ie = (p) => {
            var $ = Nr();
            le(() => Pe($, i(me))), N(p, $);
          }, Ge = (p) => {
            var $ = _n(), H = hn($);
            {
              var Mn = (xt) => {
                var Ut = _n(), Fn = hn(Ut);
                St(Fn, 17, () => i(_).content, Ct, (Za, Oe) => {
                  var vn = Rl(), Qa = G(vn);
                  Br(Qa, () => i(Oe).text.replace(/\n/g, "<br>")), W(vn), le(() => Wn(vn, `${i(Oe).color ? `color: ${i(Oe).color};` : ""}${i(Oe).backgroundColor ? `background-color: ${i(Oe).backgroundColor};` : ""}${i(Oe).fontWeight ? `font-weight: ${i(Oe).fontWeight};` : ""}${i(Oe).textDecoration ? `text-decoration: ${i(Oe).textDecoration};` : ""}${i(Oe).fontStyle ? `font-style: ${i(Oe).fontStyle};` : ""}`)), N(Za, vn);
                }), N(xt, Ut);
              }, Xa = (xt) => {
                var Ut = _n(), Fn = hn(Ut);
                Br(Fn, () => i(_).content.replace(/\n/g, "<br>")), N(xt, Ut);
              };
              K(
                H,
                (xt) => {
                  On(i(_).content) ? xt(Mn) : xt(Xa, !1);
                },
                !0
              );
            }
            N(p, $);
          };
          K(Ce, (p) => {
            O === i(re) ? p(Ie) : p(Ge, !1);
          });
        }
        var Se = ie(Ce);
        {
          var q = (p) => {
            var $ = Nl();
            N(p, $);
          };
          K(Se, (p) => {
            O === i(re) && p(q);
          });
        }
        W(ee), W(I), le((p) => Vt(I, 1, `terminal-line ${p ?? ""}`, "svelte-103tpek"), [() => pr(i(_).type)]), N(Q, I);
      };
      K(ve, (Q) => {
        On(i(_).content) && qa(i(_).content) ? Q(J) : Q(D, !1);
      });
    }
    N(u, Z);
  });
  var Va = ie(yr, 2);
  {
    var Ga = (u) => {
      var _ = Il();
      N(u, _);
    };
    K(Va, (u) => {
      i(j) && i(re) === -1 && u(Ga);
    });
  }
  W(Tt), Or(Tt, (u) => k = u, () => k);
  var Ka = ie(Tt, 2);
  {
    var Ja = (u) => {
      var _ = ql(), O = G(_);
      St(O, 17, b, Ct, (J, D, Q) => {
        var I = Fl();
        I.__click = () => Dn(Q);
        var ee = G(I);
        {
          var ye = (p) => {
            var $ = Ol(), H = G($, !0);
            W($), le(() => Pe(H, i(D).icon)), N(p, $);
          };
          K(ee, (p) => {
            i(D).icon && p(ye);
          });
        }
        var ge = ie(ee, 2), Ce = G(ge, !0);
        W(ge);
        var Ie = ie(ge, 2);
        {
          var Ge = (p) => {
            var $ = Dl(), H = G($, !0);
            W($), le(() => Pe(H, i(D).badge)), N(p, $);
          };
          K(Ie, (p) => {
            i(D).badge !== void 0 && p(Ge);
          });
        }
        var Se = ie(Ie, 2);
        {
          var q = (p) => {
            var $ = Ml();
            $.__click = (H) => {
              H.stopPropagation(), fn(Q);
            }, $.__keydown = (H) => {
              (H.key === "Enter" || H.key === " ") && (H.stopPropagation(), H.preventDefault(), fn(Q));
            }, N(p, $);
          };
          K(Se, (p) => {
            i(D).closable !== !1 && R() && b().length > 1 && p(q);
          });
        }
        W(I), le(
          (p) => {
            Vt(I, 1, `terminal-tab ${Q === i(C) ? "active" : ""} ${p ?? ""}`, "svelte-103tpek"), Pe(Ce, i(D).title);
          },
          [() => mr(i(D).status)]
        ), N(J, I);
      });
      var Z = ie(O, 2);
      {
        var ve = (J) => {
          var D = Ll();
          D.__click = br, N(J, D);
        };
        K(Z, (J) => {
          E() && J(ve);
        });
      }
      W(_), N(u, _);
    };
    K(Ka, (u) => {
      S() && b() && b().length > 0 && U() === "bottom" && u(Ja);
    });
  }
  return W(cn), Or(cn, (u) => x = u, () => x), N(e, cn), Gr({
    get theme() {
      return n();
    },
    set theme(u = "dark") {
      n(u), X();
    },
    get session() {
      return r();
    },
    set session(u = []) {
      r(u), X();
    },
    get autoplay() {
      return a();
    },
    set autoplay(u = !1) {
      a(u), X();
    },
    get playbackSpeed() {
      return l();
    },
    set playbackSpeed(u = 1) {
      l(u), X();
    },
    get showHeader() {
      return s();
    },
    set showHeader(u) {
      s(u), X();
    },
    get title() {
      return o();
    },
    set title(u = "Terminal") {
      o(u), X();
    },
    get colors() {
      return f();
    },
    set colors(u = {}) {
      f(u), X();
    },
    get typingSpeed() {
      return c();
    },
    set typingSpeed(u = 40) {
      c(u), X();
    },
    get enableTyping() {
      return d();
    },
    set enableTyping(u = !0) {
      d(u), X();
    },
    get showPlayButton() {
      return h();
    },
    set showPlayButton(u) {
      h(u), X();
    },
    get showResetButton() {
      return g();
    },
    set showResetButton(u) {
      g(u), X();
    },
    get showThemeToggle() {
      return m();
    },
    set showThemeToggle(u) {
      m(u), X();
    },
    get showWindowButtons() {
      return v();
    },
    set showWindowButtons(u) {
      v(u), X();
    },
    get tabs() {
      return b();
    },
    set tabs(u = []) {
      b(u), X();
    },
    get activeTab() {
      return y();
    },
    set activeTab(u = 0) {
      y(u), X();
    },
    get showTabs() {
      return S();
    },
    set showTabs(u = !1) {
      S(u), X();
    },
    get allowTabClose() {
      return R();
    },
    set allowTabClose(u = !0) {
      R(u), X();
    },
    get allowTabAdd() {
      return E();
    },
    set allowTabAdd(u = !1) {
      E(u), X();
    },
    get tabBarPosition() {
      return U();
    },
    set tabBarPosition(u = "top") {
      U(u), X();
    }
  });
}
Ji(["click", "keydown"]);
customElements.define("terminal-session", fl(
  zl,
  {
    showPlayButton: { attribute: "show-play-button" },
    showResetButton: { attribute: "show-reset-button" },
    showThemeToggle: { attribute: "show-theme-toggle" },
    showWindowButtons: { attribute: "show-window-buttons" },
    showTabs: { attribute: "show-tabs", type: "Boolean" },
    allowTabClose: { attribute: "allow-tab-close", type: "Boolean" },
    allowTabAdd: { attribute: "allow-tab-add", type: "Boolean" },
    autoplay: { attribute: "autoplay", type: "Boolean" },
    enableTyping: { attribute: "enable-typing", type: "Boolean" },
    showHeader: { attribute: "show-header" },
    playbackSpeed: { attribute: "playback-speed", type: "Number" },
    typingSpeed: { attribute: "typing-speed", type: "Number" },
    activeTab: { attribute: "active-tab", type: "Number" },
    theme: { attribute: "theme" },
    title: { attribute: "title" },
    tabBarPosition: { attribute: "tab-bar-position" },
    session: {},
    colors: {},
    tabs: {}
  },
  [],
  [],
  !0
));
export {
  zl as default
};
