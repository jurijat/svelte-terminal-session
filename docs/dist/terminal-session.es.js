var Qa = Object.defineProperty;
var yn = (e) => {
  throw TypeError(e);
};
var ei = (e, t, r) => t in e ? Qa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var de = (e, t, r) => ei(e, typeof t != "symbol" ? t + "" : t, r), Mr = (e, t, r) => t.has(e) || yn("Cannot " + r);
var k = (e, t, r) => (Mr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), ve = (e, t, r) => t.has(e) ? yn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), ge = (e, t, r, n) => (Mr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), ct = (e, t, r) => (Mr(e, t, "access private method"), r);
const ti = "5";
var Bn;
typeof window < "u" && ((Bn = window.__svelte ?? (window.__svelte = {})).v ?? (Bn.v = /* @__PURE__ */ new Set())).add(ti);
const xr = 1, Er = 2, Dn = 4, ri = 8, ni = 16, ai = 1, ii = 4, li = 8, si = 16, oi = 2, Mn = "[", Jr = "[!", Xr = "]", bt = {}, fe = Symbol(), Fn = !1;
var Zr = Array.isArray, fi = Array.prototype.indexOf, Qr = Array.from, gr = Object.keys, Bt = Object.defineProperty, _t = Object.getOwnPropertyDescriptor, ui = Object.prototype, ci = Array.prototype, vi = Object.getPrototypeOf, $n = Object.isExtensible;
function Ln(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function di() {
  var e, t, r = new Promise((n, a) => {
    e = n, t = a;
  });
  return { promise: r, resolve: e, reject: t };
}
const Ee = 2, en = 4, qn = 8, Ht = 16, Xe = 32, st = 64, Hn = 128, Ne = 256, wr = 512, be = 1024, Ie = 2048, ot = 4096, De = 8192, wt = 16384, tn = 32768, rn = 65536, Tn = 1 << 17, hi = 1 << 18, zt = 1 << 19, bi = 1 << 20, Hr = 1 << 21, nn = 1 << 22, pt = 1 << 23, Gt = Symbol("$state"), zn = Symbol("legacy props"), an = new class extends Error {
  constructor() {
    super(...arguments);
    de(this, "name", "StaleReactionError");
    de(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}(), ln = 3, Dt = 8;
function _i() {
  throw new Error("https://svelte.dev/e/await_outside_boundary");
}
function pi() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function mi(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function gi() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function wi(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function yi() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function $i() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Ti(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function ki() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function xi() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ei() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function nr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let D = !1;
function Ke(e) {
  D = e;
}
let F;
function ke(e) {
  if (e === null)
    throw nr(), bt;
  return F = e;
}
function Mt() {
  return ke(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ze(F)
  );
}
function z(e) {
  if (D) {
    if (/* @__PURE__ */ Ze(F) !== null)
      throw nr(), bt;
    F = e;
  }
}
function zr() {
  for (var e = 0, t = F; ; ) {
    if (t.nodeType === Dt) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === Xr) {
        if (e === 0) return t;
        e -= 1;
      } else (r === Mn || r === Jr) && (e += 1);
    }
    var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ze(t)
    );
    t.remove(), t = n;
  }
}
function jn(e) {
  if (!e || e.nodeType !== Dt)
    throw nr(), bt;
  return (
    /** @type {Comment} */
    e.data
  );
}
function Wn(e) {
  return e === this.v;
}
function Si(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Un(e) {
  return !Si(e, this.v);
}
let Ci = !1, Fe = null;
function yr(e) {
  Fe = e;
}
function Vn(e, t = !1, r) {
  Fe = {
    p: Fe,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  };
}
function Yn(e) {
  var t = (
    /** @type {ComponentContext} */
    Fe
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      da(n);
  }
  return e !== void 0 && (t.x = e), Fe = t.p, e ?? /** @type {T} */
  {};
}
function Gn() {
  return !0;
}
const Pi = /* @__PURE__ */ new WeakMap();
function Ai(e) {
  var t = P;
  if (t === null)
    return A.f |= pt, e;
  if (t.f & tn)
    sn(e, t);
  else {
    if (!(t.f & Hn))
      throw !t.parent && e instanceof Error && Kn(e), e;
    t.b.error(e);
  }
}
function sn(e, t) {
  for (; t !== null; ) {
    if (t.f & Hn)
      try {
        t.b.error(e);
        return;
      } catch (r) {
        e = r;
      }
    t = t.parent;
  }
  throw e instanceof Error && Kn(e), e;
}
function Kn(e) {
  const t = Pi.get(e);
  t && (Bt(e, "message", {
    value: t.message
  }), Bt(e, "stack", {
    value: t.stack
  }));
}
let Kt = [], jr = [];
function Jn() {
  var e = Kt;
  Kt = [], Ln(e);
}
function Ri() {
  var e = jr;
  jr = [], Ln(e);
}
function Xn(e) {
  Kt.length === 0 && queueMicrotask(Jn), Kt.push(e);
}
function Ni() {
  Kt.length > 0 && Jn(), jr.length > 0 && Ri();
}
function Ii() {
  for (var e = (
    /** @type {Effect} */
    P.b
  ); e !== null && !e.has_pending_snippet(); )
    e = e.parent;
  return e === null && _i(), e;
}
// @__NO_SIDE_EFFECTS__
function Sr(e) {
  var t = Ee | Ie, r = A !== null && A.f & Ee ? (
    /** @type {Derived} */
    A
  ) : null;
  return P === null || r !== null && r.f & Ne ? t |= Ne : P.f |= zt, {
    ctx: Fe,
    deps: null,
    effects: null,
    equals: Wn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      fe
    ),
    wv: 0,
    parent: r ?? P,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Oi(e, t) {
  let r = (
    /** @type {Effect | null} */
    P
  );
  r === null && pi();
  var n = (
    /** @type {Boundary} */
    r.b
  ), a = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), l = Jt(
    /** @type {V} */
    fe
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
      re
    ), h = n.pending;
    o && (n.update_pending_count(1), h || d.increment());
    const g = (m, v = void 0) => {
      s = null, h || d.activate(), v ? v !== an && (l.f |= pt, Xt(l, v)) : (l.f & pt && (l.f ^= pt), Xt(l, m)), o && (n.update_pending_count(-1), h || d.decrement()), ta();
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
function $e(e) {
  const t = /* @__PURE__ */ Sr(e);
  return Ta(t), t;
}
// @__NO_SIDE_EFFECTS__
function Zn(e) {
  const t = /* @__PURE__ */ Sr(e);
  return t.equals = Un, t;
}
function Qn(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      We(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Bi(e) {
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
function on(e) {
  var t, r = P;
  lt(Bi(e));
  try {
    Qn(e), t = Sa(e);
  } finally {
    lt(r);
  }
  return t;
}
function ea(e) {
  var t = on(e);
  if (e.equals(t) || (e.v = t, e.wv = xa()), !yt)
    if (nt !== null)
      nt.set(e, e.v);
    else {
      var r = (at || e.f & Ne) && e.deps !== null ? ot : be;
      xe(e, r);
    }
}
function Di(e, t, r) {
  const n = Sr;
  if (t.length === 0) {
    r(e.map(n));
    return;
  }
  var a = re, l = (
    /** @type {Effect} */
    P
  ), s = Mi(), o = Ii();
  Promise.all(t.map((f) => /* @__PURE__ */ Oi(f))).then((f) => {
    a == null || a.activate(), s();
    try {
      r([...e.map(n), ...f]);
    } catch (c) {
      l.f & wt || sn(c, l);
    }
    a == null || a.deactivate(), ta();
  }).catch((f) => {
    o.error(f);
  });
}
function Mi() {
  var e = P, t = A, r = Fe;
  return function() {
    lt(e), Ue(t), yr(r);
  };
}
function ta() {
  lt(null), Ue(null), yr(null);
}
const Vt = /* @__PURE__ */ new Set();
let re = null, nt = null, kn = /* @__PURE__ */ new Set(), $r = [];
function ra() {
  const e = (
    /** @type {() => void} */
    $r.shift()
  );
  $r.length > 0 && queueMicrotask(ra), e();
}
let gt = [], Cr = null, Wr = !1, _r = !1;
var Rt, Nt, tt, Qt, er, dt, It, ht, rt, Ot, tr, rr, Me, na, pr, Ur;
const kr = class kr {
  constructor() {
    ve(this, Me);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    de(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    ve(this, Rt, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    ve(this, Nt, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    ve(this, tt, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    ve(this, Qt, null);
    /**
     * True if an async effect inside this batch resolved and
     * its parent branch was already deleted
     */
    ve(this, er, !1);
    /**
     * Async effects (created inside `async_derived`) encountered during processing.
     * These run after the rest of the batch has updated, since they should
     * always have the latest values
     * @type {Effect[]}
     */
    ve(this, dt, []);
    /**
     * The same as `#async_effects`, but for effects inside a newly-created
     * `<svelte:boundary>` — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    ve(this, It, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    ve(this, ht, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    ve(this, rt, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    ve(this, Ot, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    ve(this, tr, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    ve(this, rr, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    de(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    var l;
    gt = [];
    var r = null;
    if (Vt.size > 1) {
      r = /* @__PURE__ */ new Map(), nt = /* @__PURE__ */ new Map();
      for (const [s, o] of this.current)
        r.set(s, { v: s.v, wv: s.wv }), s.v = o;
      for (const s of Vt)
        if (s !== this)
          for (const [o, f] of k(s, Rt))
            r.has(o) || (r.set(o, { v: o.v, wv: o.wv }), o.v = f);
    }
    for (const s of t)
      ct(this, Me, na).call(this, s);
    if (k(this, dt).length === 0 && k(this, tt) === 0) {
      ct(this, Me, Ur).call(this);
      var n = k(this, ht), a = k(this, rt);
      ge(this, ht, []), ge(this, rt, []), ge(this, Ot, []), re = null, xn(n), xn(a), re === null ? re = this : Vt.delete(this), (l = k(this, Qt)) == null || l.resolve();
    } else
      ct(this, Me, pr).call(this, k(this, ht)), ct(this, Me, pr).call(this, k(this, rt)), ct(this, Me, pr).call(this, k(this, Ot));
    if (r) {
      for (const [s, { v: o, wv: f }] of r)
        s.wv <= f && (s.v = o);
      nt = null;
    }
    for (const s of k(this, dt))
      At(s);
    for (const s of k(this, It))
      At(s);
    ge(this, dt, []), ge(this, It, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, r) {
    k(this, Rt).has(t) || k(this, Rt).set(t, r), this.current.set(t, t.v);
  }
  activate() {
    re = this;
  }
  deactivate() {
    re = null;
    for (const t of kn)
      if (kn.delete(t), t(), re !== null)
        break;
  }
  neuter() {
    ge(this, er, !0);
  }
  flush() {
    gt.length > 0 ? aa() : ct(this, Me, Ur).call(this), re === this && (k(this, tt) === 0 && Vt.delete(this), this.deactivate());
  }
  increment() {
    ge(this, tt, k(this, tt) + 1);
  }
  decrement() {
    if (ge(this, tt, k(this, tt) - 1), k(this, tt) === 0) {
      for (const t of k(this, tr))
        xe(t, Ie), Lt(t);
      for (const t of k(this, rr))
        xe(t, ot), Lt(t);
      ge(this, ht, []), ge(this, rt, []), this.flush();
    } else
      this.deactivate();
  }
  /** @param {() => void} fn */
  add_callback(t) {
    k(this, Nt).add(t);
  }
  settled() {
    return (k(this, Qt) ?? ge(this, Qt, di())).promise;
  }
  static ensure() {
    if (re === null) {
      const t = re = new kr();
      Vt.add(re), _r || kr.enqueue(() => {
        re === t && t.flush();
      });
    }
    return re;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    $r.length === 0 && queueMicrotask(ra), $r.unshift(t);
  }
};
Rt = new WeakMap(), Nt = new WeakMap(), tt = new WeakMap(), Qt = new WeakMap(), er = new WeakMap(), dt = new WeakMap(), It = new WeakMap(), ht = new WeakMap(), rt = new WeakMap(), Ot = new WeakMap(), tr = new WeakMap(), rr = new WeakMap(), Me = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
na = function(t) {
  var d;
  t.f ^= be;
  for (var r = t.first; r !== null; ) {
    var n = r.f, a = (n & (Xe | st)) !== 0, l = a && (n & be) !== 0, s = l || (n & De) !== 0 || this.skipped_effects.has(r);
    if (!s && r.fn !== null) {
      if (a)
        r.f ^= be;
      else if (n & en)
        k(this, rt).push(r);
      else if (!(n & be))
        if (n & nn) {
          var o = (d = r.b) != null && d.pending ? k(this, It) : k(this, dt);
          o.push(r);
        } else Pr(r) && (r.f & Ht && k(this, Ot).push(r), At(r));
      var f = r.first;
      if (f !== null) {
        r = f;
        continue;
      }
    }
    var c = r.parent;
    for (r = r.next; r === null && c !== null; )
      r = c.next, c = c.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
pr = function(t) {
  for (const r of t)
    (r.f & Ie ? k(this, tr) : k(this, rr)).push(r), xe(r, be);
  t.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
Ur = function() {
  if (!k(this, er))
    for (const t of k(this, Nt))
      t();
  k(this, Nt).clear();
};
let Ft = kr;
function X(e) {
  var t = _r;
  _r = !0;
  try {
    for (var r; ; ) {
      if (Ni(), gt.length === 0 && (re == null || re.flush(), gt.length === 0))
        return Cr = null, /** @type {T} */
        r;
      aa();
    }
  } finally {
    _r = t;
  }
}
function aa() {
  var e = Pt;
  Wr = !0;
  try {
    var t = 0;
    for (Sn(!0); gt.length > 0; ) {
      var r = Ft.ensure();
      if (t++ > 1e3) {
        var n, a;
        Fi();
      }
      r.process(gt), it.clear();
    }
  } finally {
    Wr = !1, Sn(e), Cr = null;
  }
}
function Fi() {
  try {
    yi();
  } catch (e) {
    sn(e, Cr);
  }
}
let vt = null;
function xn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if (!(n.f & (wt | De)) && Pr(n) && (vt = [], At(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null && n.ac === null ? wa(n) : n.fn = null), vt.length > 0)) {
        it.clear();
        for (const a of vt)
          At(a);
        vt = [];
      }
    }
    vt = null;
  }
}
function Lt(e) {
  for (var t = Cr = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if (Wr && t === P && r & Ht)
      return;
    if (r & (st | Xe)) {
      if (!(r & be)) return;
      t.f ^= be;
    }
  }
  gt.push(t);
}
const it = /* @__PURE__ */ new Map();
function Jt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Wn,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function se(e, t) {
  const r = Jt(e);
  return Ta(r), r;
}
// @__NO_SIDE_EFFECTS__
function ia(e, t = !1, r = !0) {
  const n = Jt(e);
  return t || (n.equals = Un), n;
}
function w(e, t, r = !1) {
  A !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!qe || A.f & Tn) && Gn() && A.f & (Ee | Ht | nn | Tn) && !(_e != null && _e.includes(e)) && Ei();
  let n = r ? He(t) : t;
  return Xt(e, n);
}
function Xt(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    yt ? it.set(e, t) : it.set(e, r), e.v = t;
    var n = Ft.ensure();
    n.capture(e, r), e.f & Ee && (e.f & Ie && on(
      /** @type {Derived} */
      e
    ), xe(e, e.f & Ne ? ot : be)), e.wv = xa(), la(e, Ie), P !== null && P.f & be && !(P.f & (Xe | st)) && (Ae === null ? Ui([e]) : Ae.push(e));
  }
  return t;
}
function cr(e, t = 1) {
  var r = i(e), n = t === 1 ? r++ : r--;
  return w(e, r), n;
}
function Fr(e) {
  w(e, e.v + 1);
}
function la(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var n = r.length, a = 0; a < n; a++) {
      var l = r[a], s = l.f, o = (s & Ie) === 0;
      o && xe(l, t), s & Ee ? la(
        /** @type {Derived} */
        l,
        ot
      ) : o && (s & Ht && vt !== null && vt.push(
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
  const t = vi(e);
  if (t !== ui && t !== ci)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Zr(e), a = /* @__PURE__ */ se(0), l = mt, s = (o) => {
    if (mt === l)
      return o();
    var f = A, c = mt;
    Ue(null), Pn(l);
    var d = o();
    return Ue(f), Pn(c), d;
  };
  return n && r.set("length", /* @__PURE__ */ se(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, f, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && ki();
        var d = r.get(f);
        return d === void 0 ? d = s(() => {
          var h = /* @__PURE__ */ se(c.value);
          return r.set(f, h), h;
        }) : w(d, c.value, !0), !0;
      },
      deleteProperty(o, f) {
        var c = r.get(f);
        if (c === void 0) {
          if (f in o) {
            const d = s(() => /* @__PURE__ */ se(fe));
            r.set(f, d), Fr(a);
          }
        } else
          w(c, fe), Fr(a);
        return !0;
      },
      get(o, f, c) {
        var m;
        if (f === Gt)
          return e;
        var d = r.get(f), h = f in o;
        if (d === void 0 && (!h || (m = _t(o, f)) != null && m.writable) && (d = s(() => {
          var v = He(h ? o[f] : fe), _ = /* @__PURE__ */ se(v);
          return _;
        }), r.set(f, d)), d !== void 0) {
          var g = i(d);
          return g === fe ? void 0 : g;
        }
        return Reflect.get(o, f, c);
      },
      getOwnPropertyDescriptor(o, f) {
        var c = Reflect.getOwnPropertyDescriptor(o, f);
        if (c && "value" in c) {
          var d = r.get(f);
          d && (c.value = i(d));
        } else if (c === void 0) {
          var h = r.get(f), g = h == null ? void 0 : h.v;
          if (h !== void 0 && g !== fe)
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
        var c = r.get(f), d = c !== void 0 && c.v !== fe || Reflect.has(o, f);
        if (c !== void 0 || P !== null && (!d || (g = _t(o, f)) != null && g.writable)) {
          c === void 0 && (c = s(() => {
            var m = d ? He(o[f]) : fe, v = /* @__PURE__ */ se(m);
            return v;
          }), r.set(f, c));
          var h = i(c);
          if (h === fe)
            return !1;
        }
        return d;
      },
      set(o, f, c, d) {
        var E;
        var h = r.get(f), g = f in o;
        if (n && f === "length")
          for (var m = c; m < /** @type {Source<number>} */
          h.v; m += 1) {
            var v = r.get(m + "");
            v !== void 0 ? w(v, fe) : m in o && (v = s(() => /* @__PURE__ */ se(fe)), r.set(m + "", v));
          }
        if (h === void 0)
          (!g || (E = _t(o, f)) != null && E.writable) && (h = s(() => /* @__PURE__ */ se(void 0)), w(h, He(c)), r.set(f, h));
        else {
          g = h.v !== fe;
          var _ = s(() => He(c));
          w(h, _);
        }
        var y = Reflect.getOwnPropertyDescriptor(o, f);
        if (y != null && y.set && y.set.call(d, c), !g) {
          if (n && typeof f == "string") {
            var C = (
              /** @type {Source<number>} */
              r.get("length")
            ), R = Number(f);
            Number.isInteger(R) && R >= C.v && w(C, R + 1);
          }
          Fr(a);
        }
        return !0;
      },
      ownKeys(o) {
        i(a);
        var f = Reflect.ownKeys(o).filter((h) => {
          var g = r.get(h);
          return g === void 0 || g.v !== fe;
        });
        for (var [c, d] of r)
          d.v !== fe && !(c in o) && f.push(c);
        return f;
      },
      setPrototypeOf() {
        xi();
      }
    }
  );
}
var En, sa, oa, fa;
function Vr() {
  if (En === void 0) {
    En = window, sa = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    oa = _t(t, "firstChild").get, fa = _t(t, "nextSibling").get, $n(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), $n(r) && (r.__t = void 0);
  }
}
function je(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function ze(e) {
  return oa.call(e);
}
// @__NO_SIDE_EFFECTS__
function Ze(e) {
  return fa.call(e);
}
function G(e, t) {
  if (!D)
    return /* @__PURE__ */ ze(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ ze(F)
  );
  if (r === null)
    r = F.appendChild(je());
  else if (t && r.nodeType !== ln) {
    var n = je();
    return r == null || r.before(n), ke(n), n;
  }
  return ke(r), r;
}
function vr(e, t) {
  if (!D) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ ze(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Ze(r) : r;
  }
  return F;
}
function ie(e, t = 1, r = !1) {
  let n = D ? F : e;
  for (var a; t--; )
    a = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ Ze(n);
  if (!D)
    return n;
  if (r && (n == null ? void 0 : n.nodeType) !== ln) {
    var l = je();
    return n === null ? a == null || a.after(l) : n.before(l), ke(l), l;
  }
  return ke(n), /** @type {TemplateNode} */
  n;
}
function ua(e) {
  e.textContent = "";
}
function ca() {
  return !1;
}
function va(e) {
  var t = A, r = P;
  Ue(null), lt(null);
  try {
    return e();
  } finally {
    Ue(t), lt(r);
  }
}
function Li(e) {
  P === null && A === null && wi(), A !== null && A.f & Ne && P === null && gi(), yt && mi();
}
function qi(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Qe(e, t, r, n = !0) {
  var a = P;
  a !== null && a.f & De && (e |= De);
  var l = {
    ctx: Fe,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Ie,
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
  if (r)
    try {
      At(l), l.f |= tn;
    } catch (f) {
      throw We(l), f;
    }
  else t !== null && Lt(l);
  if (n) {
    var s = l;
    if (r && s.deps === null && s.teardown === null && s.nodes_start === null && s.first === s.last && // either `null`, or a singular child
    !(s.f & zt) && (s = s.first), s !== null && (s.parent = a, a !== null && qi(s, a), A !== null && A.f & Ee && !(e & st))) {
      var o = (
        /** @type {Derived} */
        A
      );
      (o.effects ?? (o.effects = [])).push(s);
    }
  }
  return l;
}
function xt(e) {
  Li();
  var t = (
    /** @type {Effect} */
    P.f
  ), r = !A && (t & Xe) !== 0 && (t & tn) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      Fe
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return da(e);
}
function da(e) {
  return Qe(en | bi, e, !1);
}
function Hi(e) {
  Ft.ensure();
  const t = Qe(st | zt, e, !0);
  return () => {
    We(t);
  };
}
function zi(e) {
  Ft.ensure();
  const t = Qe(st | zt, e, !0);
  return (r = {}) => new Promise((n) => {
    r.outro ? fn(t, () => {
      We(t), n(void 0);
    }) : (We(t), n(void 0));
  });
}
function ha(e) {
  return Qe(en, e, !1);
}
function ji(e) {
  return Qe(nn | zt, e, !0);
}
function ba(e, t = 0) {
  return Qe(qn | t, e, !0);
}
function le(e, t = [], r = []) {
  Di(t, r, (n) => {
    Qe(qn, () => e(...n.map(i)), !0);
  });
}
function _a(e, t = 0) {
  var r = Qe(Ht | t, e, !0);
  return r;
}
function qt(e, t = !0) {
  return Qe(Xe | zt, e, !0, t);
}
function pa(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = yt, n = A;
    Cn(!0), Ue(null);
    try {
      t.call(null);
    } finally {
      Cn(r), Ue(n);
    }
  }
}
function ma(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const a = r.ac;
    a !== null && va(() => {
      a.abort(an);
    });
    var n = r.next;
    r.f & st ? r.parent = null : We(r, t), r = n;
  }
}
function Wi(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    t.f & Xe || We(t), t = r;
  }
}
function We(e, t = !0) {
  var r = !1;
  (t || e.f & hi) && e.nodes_start !== null && e.nodes_end !== null && (ga(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), r = !0), ma(e, t && !r), Tr(e, 0), xe(e, wt);
  var n = e.transitions;
  if (n !== null)
    for (const l of n)
      l.stop();
  pa(e);
  var a = e.parent;
  a !== null && a.first !== null && wa(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function ga(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ze(e)
    );
    e.remove(), e = r;
  }
}
function wa(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function fn(e, t) {
  var r = [];
  un(e, r, !0), ya(r, () => {
    We(e), t && t();
  });
}
function ya(e, t) {
  var r = e.length;
  if (r > 0) {
    var n = () => --r || t();
    for (var a of e)
      a.out(n);
  } else
    t();
}
function un(e, t, r) {
  if (!(e.f & De)) {
    if (e.f ^= De, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || r) && t.push(s);
    for (var n = e.first; n !== null; ) {
      var a = n.next, l = (n.f & rn) !== 0 || (n.f & Xe) !== 0;
      un(n, t, l ? r : !1), n = a;
    }
  }
}
function cn(e) {
  $a(e, !0);
}
function $a(e, t) {
  if (e.f & De) {
    e.f ^= De, e.f & be || (xe(e, Ie), Lt(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, a = (r.f & rn) !== 0 || (r.f & Xe) !== 0;
      $a(r, a ? t : !1), r = n;
    }
    if (e.transitions !== null)
      for (const l of e.transitions)
        (l.is_global || t) && l.in();
  }
}
let Pt = !1;
function Sn(e) {
  Pt = e;
}
let yt = !1;
function Cn(e) {
  yt = e;
}
let A = null, qe = !1;
function Ue(e) {
  A = e;
}
let P = null;
function lt(e) {
  P = e;
}
let _e = null;
function Ta(e) {
  A !== null && (_e === null ? _e = [e] : _e.push(e));
}
let he = null, Te = 0, Ae = null;
function Ui(e) {
  Ae = e;
}
let ka = 1, Zt = 0, mt = Zt;
function Pn(e) {
  mt = e;
}
let at = !1;
function xa() {
  return ++ka;
}
function Pr(e) {
  var h;
  var t = e.f;
  if (t & Ie)
    return !0;
  if (t & ot) {
    var r = e.deps, n = (t & Ne) !== 0;
    if (r !== null) {
      var a, l, s = (t & wr) !== 0, o = n && P !== null && !at, f = r.length;
      if ((s || o) && (P === null || !(P.f & wt))) {
        var c = (
          /** @type {Derived} */
          e
        ), d = c.parent;
        for (a = 0; a < f; a++)
          l = r[a], (s || !((h = l == null ? void 0 : l.reactions) != null && h.includes(c))) && (l.reactions ?? (l.reactions = [])).push(c);
        s && (c.f ^= wr), o && d !== null && !(d.f & Ne) && (c.f ^= Ne);
      }
      for (a = 0; a < f; a++)
        if (l = r[a], Pr(
          /** @type {Derived} */
          l
        ) && ea(
          /** @type {Derived} */
          l
        ), l.wv > e.wv)
          return !0;
    }
    (!n || P !== null && !at) && xe(e, be);
  }
  return !1;
}
function Ea(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(_e != null && _e.includes(e)))
    for (var a = 0; a < n.length; a++) {
      var l = n[a];
      l.f & Ee ? Ea(
        /** @type {Derived} */
        l,
        t,
        !1
      ) : t === l && (r ? xe(l, Ie) : l.f & be && xe(l, ot), Lt(
        /** @type {Effect} */
        l
      ));
    }
}
function Sa(e) {
  var _;
  var t = he, r = Te, n = Ae, a = A, l = at, s = _e, o = Fe, f = qe, c = mt, d = e.f;
  he = /** @type {null | Value[]} */
  null, Te = 0, Ae = null, at = (d & Ne) !== 0 && (qe || !Pt || A === null), A = d & (Xe | st) ? null : e, _e = null, yr(e.ctx), qe = !1, mt = ++Zt, e.ac !== null && (va(() => {
    e.ac.abort(an);
  }), e.ac = null);
  try {
    e.f |= Hr;
    var h = (
      /** @type {Function} */
      e.fn
    ), g = h(), m = e.deps;
    if (he !== null) {
      var v;
      if (Tr(e, Te), m !== null && Te > 0)
        for (m.length = Te + he.length, v = 0; v < he.length; v++)
          m[Te + v] = he[v];
      else
        e.deps = m = he;
      if (!at || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      d & Ee && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (v = Te; v < m.length; v++)
          ((_ = m[v]).reactions ?? (_.reactions = [])).push(e);
    } else m !== null && Te < m.length && (Tr(e, Te), m.length = Te);
    if (Gn() && Ae !== null && !qe && m !== null && !(e.f & (Ee | ot | Ie)))
      for (v = 0; v < /** @type {Source[]} */
      Ae.length; v++)
        Ea(
          Ae[v],
          /** @type {Effect} */
          e
        );
    return a !== null && a !== e && (Zt++, Ae !== null && (n === null ? n = Ae : n.push(.../** @type {Source[]} */
    Ae))), e.f & pt && (e.f ^= pt), g;
  } catch (y) {
    return Ai(y);
  } finally {
    e.f ^= Hr, he = t, Te = r, Ae = n, A = a, at = l, _e = s, yr(o), qe = f, mt = c;
  }
}
function Vi(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = fi.call(r, e);
    if (n !== -1) {
      var a = r.length - 1;
      a === 0 ? r = t.reactions = null : (r[n] = r[a], r.pop());
    }
  }
  r === null && t.f & Ee && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (he === null || !he.includes(t)) && (xe(t, ot), t.f & (Ne | wr) || (t.f ^= wr), Qn(
    /** @type {Derived} **/
    t
  ), Tr(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Tr(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Vi(e, r[n]);
}
function At(e) {
  var t = e.f;
  if (!(t & wt)) {
    xe(e, be);
    var r = P, n = Pt;
    P = e, Pt = !0;
    try {
      t & Ht ? Wi(e) : ma(e), pa(e);
      var a = Sa(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = ka;
      var l;
      Fn && Ci && e.f & Ie && e.deps;
    } finally {
      Pt = n, P = r;
    }
  }
}
async function Yi() {
  await Promise.resolve(), X();
}
function i(e) {
  var t = e.f, r = (t & Ee) !== 0;
  if (A !== null && !qe) {
    var n = P !== null && (P.f & wt) !== 0;
    if (!n && !(_e != null && _e.includes(e))) {
      var a = A.deps;
      if (A.f & Hr)
        e.rv < Zt && (e.rv = Zt, he === null && a !== null && a[Te] === e ? Te++ : he === null ? he = [e] : (!at || !he.includes(e)) && he.push(e));
      else {
        (A.deps ?? (A.deps = [])).push(e);
        var l = e.reactions;
        l === null ? e.reactions = [A] : l.includes(A) || l.push(A);
      }
    }
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var s = (
      /** @type {Derived} */
      e
    ), o = s.parent;
    o !== null && !(o.f & Ne) && (s.f ^= Ne);
  }
  if (yt) {
    if (it.has(e))
      return it.get(e);
    if (r) {
      s = /** @type {Derived} */
      e;
      var f = s.v;
      return (!(s.f & be) && s.reactions !== null || Ca(s)) && (f = on(s)), it.set(s, f), f;
    }
  } else if (r) {
    if (s = /** @type {Derived} */
    e, nt != null && nt.has(s))
      return nt.get(s);
    Pr(s) && ea(s);
  }
  if (e.f & pt)
    throw e.v;
  return e.v;
}
function Ca(e) {
  if (e.v === fe) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (it.has(t) || t.f & Ee && Ca(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Pa(e) {
  var t = qe;
  try {
    return qe = !0, e();
  } finally {
    qe = t;
  }
}
const Gi = -7169;
function xe(e, t) {
  e.f = e.f & Gi | t;
}
const Aa = /* @__PURE__ */ new Set(), Yr = /* @__PURE__ */ new Set();
function Ki(e) {
  for (var t = 0; t < e.length; t++)
    Aa.add(e[t]);
  for (var r of Yr)
    r(e);
}
let An = null;
function dr(e) {
  var R;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, a = ((R = e.composedPath) == null ? void 0 : R.call(e)) || [], l = (
    /** @type {null | Element} */
    a[0] || e.target
  );
  An = e;
  var s = 0, o = An === e && e.__root;
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
    Bt(e, "currentTarget", {
      configurable: !0,
      get() {
        return l || r;
      }
    });
    var d = A, h = P;
    Ue(null), lt(null);
    try {
      for (var g, m = []; l !== null; ) {
        var v = l.assignedSlot || l.parentNode || /** @type {any} */
        l.host || null;
        try {
          var _ = l["__" + n];
          if (_ != null && (!/** @type {any} */
          l.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === l))
            if (Zr(_)) {
              var [y, ...C] = _;
              y.apply(l, [e, ...C]);
            } else
              _.call(l, e);
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
      e.__root = t, delete e.currentTarget, Ue(d), lt(h);
    }
  }
}
function Ra(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function Je(e, t) {
  var r = (
    /** @type {Effect} */
    P
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function L(e, t) {
  var r = (t & oi) !== 0, n, a = !e.startsWith("<!>");
  return () => {
    if (D)
      return Je(F, null), F;
    n === void 0 && (n = Ra(a ? e : "<!>" + e), n = /** @type {Node} */
    /* @__PURE__ */ ze(n));
    var l = (
      /** @type {TemplateNode} */
      r || sa ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    return Je(l, l), l;
  };
}
function Rn(e = "") {
  if (!D) {
    var t = je(e + "");
    return Je(t, t), t;
  }
  var r = F;
  return r.nodeType !== ln && (r.before(r = je()), ke(r)), Je(r, r), r;
}
function hr() {
  if (D)
    return Je(F, null), F;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = je();
  return e.append(t, r), Je(t, r), e;
}
function N(e, t) {
  if (D) {
    P.nodes_end = F, Mt();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const Ji = ["touchstart", "touchmove"];
function Xi(e) {
  return Ji.includes(e);
}
function Pe(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function Na(e, t) {
  return Ia(e, t);
}
function Zi(e, t) {
  Vr(), t.intro = t.intro ?? !1;
  const r = t.target, n = D, a = F;
  try {
    for (var l = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ze(r)
    ); l && (l.nodeType !== Dt || /** @type {Comment} */
    l.data !== Mn); )
      l = /** @type {TemplateNode} */
      /* @__PURE__ */ Ze(l);
    if (!l)
      throw bt;
    Ke(!0), ke(
      /** @type {Comment} */
      l
    ), Mt();
    const s = Ia(e, { ...t, anchor: l });
    if (F === null || F.nodeType !== Dt || /** @type {Comment} */
    F.data !== Xr)
      throw nr(), bt;
    return Ke(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s instanceof Error && s.message.split(`
`).some((o) => o.startsWith("https://svelte.dev/e/")))
      throw s;
    return s !== bt && console.warn("Failed to hydrate: ", s), t.recover === !1 && $i(), Vr(), ua(r), Ke(!1), Na(e, t);
  } finally {
    Ke(n), ke(a);
  }
}
const Et = /* @__PURE__ */ new Map();
function Ia(e, { target: t, anchor: r, props: n = {}, events: a, context: l, intro: s = !0 }) {
  Vr();
  var o = /* @__PURE__ */ new Set(), f = (h) => {
    for (var g = 0; g < h.length; g++) {
      var m = h[g];
      if (!o.has(m)) {
        o.add(m);
        var v = Xi(m);
        t.addEventListener(m, dr, { passive: v });
        var _ = Et.get(m);
        _ === void 0 ? (document.addEventListener(m, dr, { passive: v }), Et.set(m, 1)) : Et.set(m, _ + 1);
      }
    }
  };
  f(Qr(Aa)), Yr.add(f);
  var c = void 0, d = zi(() => {
    var h = r ?? t.appendChild(je());
    return qt(() => {
      if (l) {
        Vn({});
        var g = (
          /** @type {ComponentContext} */
          Fe
        );
        g.c = l;
      }
      a && (n.$$events = a), D && Je(
        /** @type {TemplateNode} */
        h,
        null
      ), c = e(h, n) || {}, D && (P.nodes_end = F), l && Yn();
    }), () => {
      var v;
      for (var g of o) {
        t.removeEventListener(g, dr);
        var m = (
          /** @type {number} */
          Et.get(g)
        );
        --m === 0 ? (document.removeEventListener(g, dr), Et.delete(g)) : Et.set(g, m);
      }
      Yr.delete(f), h !== r && ((v = h.parentNode) == null || v.removeChild(h));
    };
  });
  return Gr.set(c, d), c;
}
let Gr = /* @__PURE__ */ new WeakMap();
function Qi(e, t) {
  const r = Gr.get(e);
  return r ? (Gr.delete(e), r(t)) : Promise.resolve();
}
function K(e, t, r = !1) {
  D && Mt();
  var n = e, a = null, l = null, s = fe, o = r ? rn : 0, f = !1;
  const c = (m, v = !0) => {
    f = !0, g(v, m);
  };
  var d = null;
  function h() {
    d !== null && (d.lastChild.remove(), n.before(d), d = null);
    var m = s ? a : l, v = s ? l : a;
    m && cn(m), v && fn(v, () => {
      s ? l = null : a = null;
    });
  }
  const g = (m, v) => {
    if (s === (s = m)) return;
    let _ = !1;
    if (D) {
      const x = jn(n) === Jr;
      !!s === x && (n = zr(), ke(n), Ke(!1), _ = !0);
    }
    var y = ca(), C = n;
    if (y && (d = document.createDocumentFragment(), d.append(C = je())), s ? a ?? (a = v && qt(() => v(C))) : l ?? (l = v && qt(() => v(C))), y) {
      var R = (
        /** @type {Batch} */
        re
      ), E = s ? a : l, W = s ? l : a;
      E && R.skipped_effects.delete(E), W && R.skipped_effects.add(W), R.add_callback(h);
    } else
      h();
    _ && Ke(!0);
  };
  _a(() => {
    f = !1, t(c), f || g(null, null);
  }, o), D && (n = F);
}
function St(e, t) {
  return t;
}
function el(e, t, r) {
  for (var n = e.items, a = [], l = t.length, s = 0; s < l; s++)
    un(t[s].e, a, !0);
  var o = l > 0 && a.length === 0 && r !== null;
  if (o) {
    var f = (
      /** @type {Element} */
      /** @type {Element} */
      r.parentNode
    );
    ua(f), f.append(
      /** @type {Element} */
      r
    ), n.clear(), Le(e, t[0].prev, t[l - 1].next);
  }
  ya(a, () => {
    for (var c = 0; c < l; c++) {
      var d = t[c];
      o || (n.delete(d.k), Le(e, d.prev, d.next)), We(d.e, !o);
    }
  });
}
function Ct(e, t, r, n, a, l = null) {
  var s = e, o = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, f = (t & Dn) !== 0;
  if (f) {
    var c = (
      /** @type {Element} */
      e
    );
    s = D ? ke(
      /** @type {Comment | Text} */
      /* @__PURE__ */ ze(c)
    ) : c.appendChild(je());
  }
  D && Mt();
  var d = null, h = !1, g = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ Zn(() => {
    var C = r();
    return Zr(C) ? C : C == null ? [] : Qr(C);
  }), v, _;
  function y() {
    tl(
      _,
      v,
      o,
      g,
      s,
      a,
      t,
      n,
      r
    ), l !== null && (v.length === 0 ? d ? cn(d) : d = qt(() => l(s)) : d !== null && fn(d, () => {
      d = null;
    }));
  }
  _a(() => {
    _ ?? (_ = /** @type {Effect} */
    P), v = /** @type {V[]} */
    i(m);
    var C = v.length;
    if (h && C === 0)
      return;
    h = C === 0;
    let R = !1;
    if (D) {
      var E = jn(s) === Jr;
      E !== (C === 0) && (s = zr(), ke(s), Ke(!1), R = !0);
    }
    if (D) {
      for (var W = null, x, $ = 0; $ < C; $++) {
        if (F.nodeType === Dt && /** @type {Comment} */
        F.data === Xr) {
          s = /** @type {Comment} */
          F, R = !0, Ke(!1);
          break;
        }
        var S = v[$], U = n(S, $);
        x = Kr(
          F,
          o,
          W,
          null,
          S,
          U,
          $,
          a,
          t,
          r
        ), o.items.set(U, x), W = x;
      }
      C > 0 && ke(zr());
    }
    if (D)
      C === 0 && l && (d = qt(() => l(s)));
    else if (ca()) {
      var oe = /* @__PURE__ */ new Set(), I = (
        /** @type {Batch} */
        re
      );
      for ($ = 0; $ < C; $ += 1) {
        S = v[$], U = n(S, $);
        var Ve = o.items.get(U) ?? g.get(U);
        Ve ? t & (xr | Er) && Oa(Ve, S, $, t) : (x = Kr(
          null,
          o,
          null,
          null,
          S,
          U,
          $,
          a,
          t,
          r,
          !0
        ), g.set(U, x)), oe.add(U);
      }
      for (const [we, ft] of o.items)
        oe.has(we) || I.skipped_effects.add(ft.e);
      I.add_callback(y);
    } else
      y();
    R && Ke(!0), i(m);
  }), D && (s = F);
}
function tl(e, t, r, n, a, l, s, o, f) {
  var j, Y, ne, pe;
  var c = (s & ri) !== 0, d = (s & (xr | Er)) !== 0, h = t.length, g = r.items, m = r.first, v = m, _, y = null, C, R = [], E = [], W, x, $, S;
  if (c)
    for (S = 0; S < h; S += 1)
      W = t[S], x = o(W, S), $ = g.get(x), $ !== void 0 && ((j = $.a) == null || j.measure(), (C ?? (C = /* @__PURE__ */ new Set())).add($));
  for (S = 0; S < h; S += 1) {
    if (W = t[S], x = o(W, S), $ = g.get(x), $ === void 0) {
      var U = n.get(x);
      if (U !== void 0) {
        n.delete(x), g.set(x, U);
        var oe = y ? y.next : v;
        Le(r, y, U), Le(r, U, oe), Lr(U, oe, a), y = U;
      } else {
        var I = v ? (
          /** @type {TemplateNode} */
          v.e.nodes_start
        ) : a;
        y = Kr(
          I,
          r,
          y,
          y === null ? r.first : y.next,
          W,
          x,
          S,
          l,
          s,
          f
        );
      }
      g.set(x, y), R = [], E = [], v = y.next;
      continue;
    }
    if (d && Oa($, W, S, s), $.e.f & De && (cn($.e), c && ((Y = $.a) == null || Y.unfix(), (C ?? (C = /* @__PURE__ */ new Set())).delete($))), $ !== v) {
      if (_ !== void 0 && _.has($)) {
        if (R.length < E.length) {
          var Ve = E[0], we;
          y = Ve.prev;
          var ft = R[0], $t = R[R.length - 1];
          for (we = 0; we < R.length; we += 1)
            Lr(R[we], Ve, a);
          for (we = 0; we < E.length; we += 1)
            _.delete(E[we]);
          Le(r, ft.prev, $t.next), Le(r, y, ft), Le(r, $t, Ve), v = Ve, y = $t, S -= 1, R = [], E = [];
        } else
          _.delete($), Lr($, v, a), Le(r, $.prev, $.next), Le(r, $, y === null ? r.first : y.next), Le(r, y, $), y = $;
        continue;
      }
      for (R = [], E = []; v !== null && v.k !== x; )
        v.e.f & De || (_ ?? (_ = /* @__PURE__ */ new Set())).add(v), E.push(v), v = v.next;
      if (v === null)
        continue;
      $ = v;
    }
    R.push($), y = $, v = $.next;
  }
  if (v !== null || _ !== void 0) {
    for (var ut = _ === void 0 ? [] : Qr(_); v !== null; )
      v.e.f & De || ut.push(v), v = v.next;
    var jt = ut.length;
    if (jt > 0) {
      var Ar = s & Dn && h === 0 ? a : null;
      if (c) {
        for (S = 0; S < jt; S += 1)
          (ne = ut[S].a) == null || ne.measure();
        for (S = 0; S < jt; S += 1)
          (pe = ut[S].a) == null || pe.fix();
      }
      el(r, ut, Ar);
    }
  }
  c && Xn(() => {
    var et;
    if (C !== void 0)
      for ($ of C)
        (et = $.a) == null || et.apply();
  }), e.first = r.first && r.first.e, e.last = y && y.e;
  for (var V of n.values())
    We(V.e);
  n.clear();
}
function Oa(e, t, r, n) {
  n & xr && Xt(e.v, t), n & Er ? Xt(
    /** @type {Value<number>} */
    e.i,
    r
  ) : e.i = r;
}
function Kr(e, t, r, n, a, l, s, o, f, c, d) {
  var h = (f & xr) !== 0, g = (f & ni) === 0, m = h ? g ? /* @__PURE__ */ ia(a, !1, !1) : Jt(a) : a, v = f & Er ? Jt(s) : s, _ = {
    i: v,
    v: m,
    k: l,
    a: null,
    // @ts-expect-error
    e: null,
    prev: r,
    next: n
  };
  try {
    if (e === null) {
      var y = document.createDocumentFragment();
      y.append(e = je());
    }
    return _.e = qt(() => o(
      /** @type {Node} */
      e,
      m,
      v,
      c
    ), D), _.e.prev = r && r.e, _.e.next = n && n.e, r === null ? d || (t.first = _) : (r.next = _, r.e.next = _.e), n !== null && (n.prev = _, n.e.prev = _.e), _;
  } finally {
  }
}
function Lr(e, t, r) {
  for (var n = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : r, a = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : r, l = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); l !== null && l !== n; ) {
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ze(l)
    );
    a.before(l), l = s;
  }
}
function Le(e, t, r) {
  t === null ? e.first = r : (t.next = r, t.e.next = r && r.e), r !== null && (r.prev = t, r.e.prev = t && t.e);
}
function Nn(e, t, r = !1, n = !1, a = !1) {
  var l = e, s = "";
  le(() => {
    var o = (
      /** @type {Effect} */
      P
    );
    if (s === (s = t() ?? "")) {
      D && Mt();
      return;
    }
    if (o.nodes_start !== null && (ga(
      o.nodes_start,
      /** @type {TemplateNode} */
      o.nodes_end
    ), o.nodes_start = o.nodes_end = null), s !== "") {
      if (D) {
        F.data;
        for (var f = Mt(), c = f; f !== null && (f.nodeType !== Dt || /** @type {Comment} */
        f.data !== ""); )
          c = f, f = /** @type {TemplateNode} */
          /* @__PURE__ */ Ze(f);
        if (f === null)
          throw nr(), bt;
        Je(F, c), l = ke(f);
        return;
      }
      var d = s + "";
      r ? d = `<svg>${d}</svg>` : n && (d = `<math>${d}</math>`);
      var h = Ra(d);
      if ((r || n) && (h = /** @type {Element} */
      /* @__PURE__ */ ze(h)), Je(
        /** @type {TemplateNode} */
        /* @__PURE__ */ ze(h),
        /** @type {TemplateNode} */
        h.lastChild
      ), r || n)
        for (; /* @__PURE__ */ ze(h); )
          l.before(
            /** @type {Node} */
            /* @__PURE__ */ ze(h)
          );
      else
        l.before(h);
    }
  });
}
function rl(e, t) {
  ha(() => {
    var r = e.getRootNode(), n = (
      /** @type {ShadowRoot} */
      r.host ? (
        /** @type {ShadowRoot} */
        r
      ) : (
        /** @type {Document} */
        r.head ?? /** @type {Document} */
        r.ownerDocument.head
      )
    );
    if (!n.querySelector("#" + t.hash)) {
      const a = document.createElement("style");
      a.id = t.hash, a.textContent = t.code, n.appendChild(a);
    }
  });
}
function nl(e, t, r) {
  var n = e == null ? "" : "" + e;
  return n = n ? n + " " + t : t, n === "" ? null : n;
}
function al(e, t) {
  return e == null ? null : String(e);
}
function Yt(e, t, r, n, a, l) {
  var s = e.__className;
  if (D || s !== r || s === void 0) {
    var o = nl(r, n);
    (!D || o !== e.getAttribute("class")) && (o == null ? e.removeAttribute("class") : e.className = o), e.__className = r;
  }
  return l;
}
function qr(e, t, r, n) {
  var a = e.__style;
  if (D || a !== t) {
    var l = al(t);
    (!D || l !== e.getAttribute("style")) && (l == null ? e.removeAttribute("style") : e.style.cssText = l), e.__style = t;
  }
  return n;
}
function In(e, t) {
  return e === t || (e == null ? void 0 : e[Gt]) === t;
}
function On(e = {}, t, r, n) {
  return ha(() => {
    var a, l;
    return ba(() => {
      a = l, l = [], Pa(() => {
        e !== r(...l) && (t(e, ...l), a && In(r(...a), e) && t(null, ...a));
      });
    }), () => {
      Xn(() => {
        l && In(r(...l), e) && t(null, ...l);
      });
    };
  }), e;
}
let br = !1;
function il(e) {
  var t = br;
  try {
    return br = !1, [e(), br];
  } finally {
    br = t;
  }
}
function te(e, t, r, n) {
  var R;
  var a = (r & li) !== 0, l = (r & si) !== 0, s = (
    /** @type {V} */
    n
  ), o = !0, f = () => (o && (o = !1, s = l ? Pa(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), s), c;
  if (a) {
    var d = Gt in e || zn in e;
    c = ((R = _t(e, t)) == null ? void 0 : R.set) ?? (d && t in e ? (E) => e[t] = E : void 0);
  }
  var h, g = !1;
  a ? [h, g] = il(() => (
    /** @type {V} */
    e[t]
  )) : h = /** @type {V} */
  e[t], h === void 0 && n !== void 0 && (h = f(), c && (Ti(), c(h)));
  var m;
  if (m = () => {
    var E = (
      /** @type {V} */
      e[t]
    );
    return E === void 0 ? f() : (o = !0, E);
  }, !(r & ii))
    return m;
  if (c) {
    var v = e.$$legacy;
    return (
      /** @type {() => V} */
      function(E, W) {
        return arguments.length > 0 ? ((!W || v || g) && c(W ? m() : E), E) : m();
      }
    );
  }
  var _ = !1, y = (r & ai ? Sr : Zn)(() => (_ = !1, m()));
  a && i(y);
  var C = (
    /** @type {Effect} */
    P
  );
  return (
    /** @type {() => V} */
    function(E, W) {
      if (arguments.length > 0) {
        const x = W ? i(y) : a ? He(E) : E;
        return w(y, x), _ = !0, s !== void 0 && (s = x), E;
      }
      return yt && _ || C.f & wt ? y.v : i(y);
    }
  );
}
function ll(e) {
  return new sl(e);
}
var Ge, Re;
class sl {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    ve(this, Ge);
    /** @type {Record<string, any>} */
    ve(this, Re);
    var l;
    var r = /* @__PURE__ */ new Map(), n = (s, o) => {
      var f = /* @__PURE__ */ ia(o, !1, !1);
      return r.set(s, f), f;
    };
    const a = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, o) {
          return i(r.get(o) ?? n(o, Reflect.get(s, o)));
        },
        has(s, o) {
          return o === zn ? !0 : (i(r.get(o) ?? n(o, Reflect.get(s, o))), Reflect.has(s, o));
        },
        set(s, o, f) {
          return w(r.get(o) ?? n(o, f), f), Reflect.set(s, o, f);
        }
      }
    );
    ge(this, Re, (t.hydrate ? Zi : Na)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: a,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((l = t == null ? void 0 : t.props) != null && l.$$host) || t.sync === !1) && X(), ge(this, Ge, a.$$events);
    for (const s of Object.keys(k(this, Re)))
      s === "$set" || s === "$destroy" || s === "$on" || Bt(this, s, {
        get() {
          return k(this, Re)[s];
        },
        /** @param {any} value */
        set(o) {
          k(this, Re)[s] = o;
        },
        enumerable: !0
      });
    k(this, Re).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(a, s);
    }, k(this, Re).$destroy = () => {
      Qi(k(this, Re));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    k(this, Re).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    k(this, Ge)[t] = k(this, Ge)[t] || [];
    const n = (...a) => r.call(this, ...a);
    return k(this, Ge)[t].push(n), () => {
      k(this, Ge)[t] = k(this, Ge)[t].filter(
        /** @param {any} fn */
        (a) => a !== n
      );
    };
  }
  $destroy() {
    k(this, Re).$destroy();
  }
}
Ge = new WeakMap(), Re = new WeakMap();
let Ba;
typeof HTMLElement == "function" && (Ba = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, n) {
    super();
    /** The Svelte component constructor */
    de(this, "$$ctor");
    /** Slots */
    de(this, "$$s");
    /** @type {any} The Svelte component instance */
    de(this, "$$c");
    /** Whether or not the custom element is connected */
    de(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    de(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    de(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    de(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    de(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    de(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    de(this, "$$me");
    this.$$ctor = t, this.$$s = r, n && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, r, n) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(r), this.$$c) {
      const a = this.$$c.$on(t, r);
      this.$$l_u.set(r, a);
    }
    super.addEventListener(t, r, n);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, r, n) {
    if (super.removeEventListener(t, r, n), this.$$c) {
      const a = this.$$l_u.get(r);
      a && (a(), this.$$l_u.delete(r));
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
      const r = {}, n = ol(this);
      for (const a of this.$$s)
        a in n && (a === "default" && !this.$$d.children ? (this.$$d.children = t(a), r.default = !0) : r[a] = t(a));
      for (const a of this.attributes) {
        const l = this.$$g_p(a.name);
        l in this.$$d || (this.$$d[l] = mr(l, a.value, this.$$p_d, "toProp"));
      }
      for (const a in this.$$p_d)
        !(a in this.$$d) && this[a] !== void 0 && (this.$$d[a] = this[a], delete this[a]);
      this.$$c = ll({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = Hi(() => {
        ba(() => {
          var a;
          this.$$r = !0;
          for (const l of gr(this.$$c)) {
            if (!((a = this.$$p_d[l]) != null && a.reflect)) continue;
            this.$$d[l] = this.$$c[l];
            const s = mr(
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
  attributeChangedCallback(t, r, n) {
    var a;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = mr(t, n, this.$$p_d, "toProp"), (a = this.$$c) == null || a.$set({ [t]: this.$$d[t] }));
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
    return gr(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function mr(e, t, r, n) {
  var l;
  const a = (l = r[e]) == null ? void 0 : l.type;
  if (t = a === "Boolean" && typeof t != "boolean" ? t != null : t, !n || !r[e])
    return t;
  if (n === "toAttribute")
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
function ol(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function fl(e, t, r, n, a, l) {
  let s = class extends Ba {
    constructor() {
      super(e, r, a), this.$$p_d = t;
    }
    static get observedAttributes() {
      return gr(t).map(
        (o) => (t[o].attribute || o).toLowerCase()
      );
    }
  };
  return gr(t).forEach((o) => {
    Bt(s.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(f) {
        var h;
        f = mr(o, f, t), this.$$d[o] = f;
        var c = this.$$c;
        if (c) {
          var d = (h = _t(c, o)) == null ? void 0 : h.get;
          d ? c[o] = f : c.$set({ [o]: f });
        }
      }
    });
  }), n.forEach((o) => {
    Bt(s.prototype, o, {
      get() {
        var f;
        return (f = this.$$c) == null ? void 0 : f[o];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
const ul = {
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
}, cl = {
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
function vl(e, t) {
  const r = t.style;
  r.setProperty("--terminal-bg", e.background), r.setProperty("--terminal-fg", e.foreground), r.setProperty("--terminal-border", e.border), r.setProperty("--terminal-header-bg", e.headerBg), r.setProperty("--terminal-header-fg", e.headerFg), r.setProperty("--terminal-prompt", e.prompt), r.setProperty("--terminal-command", e.command), r.setProperty("--terminal-output", e.output), r.setProperty("--terminal-error", e.error), r.setProperty("--terminal-warning", e.warning), r.setProperty("--terminal-info", e.info), r.setProperty("--terminal-success", e.success), r.setProperty("--terminal-selection", e.selection), r.setProperty("--terminal-cursor", e.cursor);
}
function dl(e, t) {
  return { ...e, ...t };
}
var hl = /* @__PURE__ */ L('<div class="terminal-buttons svelte-1bfirav"><span class="terminal-button close svelte-1bfirav"></span> <span class="terminal-button minimize svelte-1bfirav"></span> <span class="terminal-button maximize svelte-1bfirav"></span></div>'), bl = /* @__PURE__ */ L('<button class="control-button svelte-1bfirav"> </button>'), _l = /* @__PURE__ */ L('<button class="control-button svelte-1bfirav">↺</button>'), pl = /* @__PURE__ */ L('<button class="control-button svelte-1bfirav"> </button>'), ml = /* @__PURE__ */ L('<div class="terminal-controls svelte-1bfirav"><!> <!> <!></div>'), gl = /* @__PURE__ */ L('<div class="terminal-header svelte-1bfirav"><!> <div class="terminal-title svelte-1bfirav"> </div> <!></div>'), wl = /* @__PURE__ */ L('<span class="tab-icon svelte-1bfirav"> </span>'), yl = /* @__PURE__ */ L('<span class="tab-badge svelte-1bfirav"> </span>'), $l = /* @__PURE__ */ L('<span class="tab-close svelte-1bfirav" role="button" tabindex="0">×</span>'), Tl = /* @__PURE__ */ L('<button><!> <span class="tab-title svelte-1bfirav"> </span> <!> <!></button>'), kl = /* @__PURE__ */ L('<button class="terminal-tab tab-add svelte-1bfirav">+</button>'), xl = /* @__PURE__ */ L('<div class="terminal-tabs svelte-1bfirav"><!> <!></div>'), El = (e, t) => {
  (e.key === "Enter" || e.key === " ") && t();
}, Sl = /* @__PURE__ */ L("<div> </div>"), Cl = /* @__PURE__ */ L('<div class="terminal-table-row svelte-1bfirav"></div>'), Pl = /* @__PURE__ */ L('<div><div class="terminal-table svelte-1bfirav"></div></div>'), Al = /* @__PURE__ */ L('<span class="rich-text-segment svelte-1bfirav"><!></span>'), Rl = /* @__PURE__ */ L('<span class="typing-cursor svelte-1bfirav">▊</span>'), Nl = /* @__PURE__ */ L('<div><pre class="svelte-1bfirav"><!><!><!></pre></div>'), Il = /* @__PURE__ */ L('<div class="terminal-cursor svelte-1bfirav">▊</div>'), Ol = /* @__PURE__ */ L('<span class="tab-icon svelte-1bfirav"> </span>'), Bl = /* @__PURE__ */ L('<span class="tab-badge svelte-1bfirav"> </span>'), Dl = /* @__PURE__ */ L('<span class="tab-close svelte-1bfirav" role="button" tabindex="0">×</span>'), Ml = /* @__PURE__ */ L('<button><!> <span class="tab-title svelte-1bfirav"> </span> <!> <!></button>'), Fl = /* @__PURE__ */ L('<button class="terminal-tab tab-add svelte-1bfirav">+</button>'), Ll = /* @__PURE__ */ L('<div class="terminal-tabs terminal-tabs-bottom svelte-1bfirav"><!> <!></div>'), ql = /* @__PURE__ */ L('<div class="terminal svelte-1bfirav"><!> <!> <div class="terminal-content svelte-1bfirav" role="button" aria-label="Terminal output - click to skip typing animation" tabindex="0"><!> <!></div> <!></div>');
const Hl = {
  hash: "svelte-1bfirav",
  code: `:host {display:block;font-family:'Cascadia Code', 'Fira Code', 'Monaco', 'Consolas', monospace;font-size:14px;line-height:1.5;}.terminal.svelte-1bfirav {width:100%;height:100%;min-height:300px;background:var(--terminal-bg);color:var(--terminal-fg);border:1px solid var(--terminal-border);border-radius:8px;overflow:hidden;display:flex;flex-direction:column;transition:all 0.3s ease;}.terminal-header.svelte-1bfirav {background:var(--terminal-header-bg);color:var(--terminal-header-fg);padding:12px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--terminal-border);}.terminal-buttons.svelte-1bfirav {display:flex;gap:8px;}.terminal-button.svelte-1bfirav {width:12px;height:12px;border-radius:50%;display:inline-block;}.terminal-button.close.svelte-1bfirav {background:#ff5f56;}.terminal-button.minimize.svelte-1bfirav {background:#ffbd2e;}.terminal-button.maximize.svelte-1bfirav {background:#27c93f;}.terminal-title.svelte-1bfirav {flex:1;text-align:center;font-weight:500;}.terminal-controls.svelte-1bfirav {display:flex;gap:8px;}.control-button.svelte-1bfirav {background:transparent;color:var(--terminal-header-fg);border:1px solid var(--terminal-border);padding:4px 8px;border-radius:4px;cursor:pointer;font-size:12px;transition:all 0.2s;}.control-button.svelte-1bfirav:hover:not(:disabled) {background:var(--terminal-border);color:var(--terminal-fg);}.control-button.svelte-1bfirav:disabled {opacity:0.5;cursor:not-allowed;}.terminal-content.svelte-1bfirav {flex:1;padding:16px;overflow-y:auto;font-family:inherit;}.terminal-line.svelte-1bfirav {margin:4px 0;white-space:pre-wrap;word-break:break-word;}.terminal-line.svelte-1bfirav pre:where(.svelte-1bfirav) {margin:0;font-family:inherit;display:block;white-space:pre-wrap;}.step-command.svelte-1bfirav {color:var(--terminal-command);font-weight:bold;}.step-output.svelte-1bfirav {color:var(--terminal-output);}.step-error.svelte-1bfirav {color:var(--terminal-error);}.step-warning.svelte-1bfirav {color:var(--terminal-warning);}.step-info.svelte-1bfirav {color:var(--terminal-info);}.step-success.svelte-1bfirav {color:var(--terminal-success);}.terminal-cursor.svelte-1bfirav {display:inline-block;color:var(--terminal-cursor);
    animation: svelte-1bfirav-blink 1s infinite;}.typing-cursor.svelte-1bfirav {display:inline-block;color:var(--terminal-cursor);
    animation: svelte-1bfirav-blink 1s infinite;margin-left:2px;}

  @keyframes svelte-1bfirav-blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }.terminal-content.svelte-1bfirav::-webkit-scrollbar {width:8px;}.terminal-content.svelte-1bfirav::-webkit-scrollbar-track {background:var(--terminal-bg);}.terminal-content.svelte-1bfirav::-webkit-scrollbar-thumb {background:var(--terminal-border);border-radius:4px;}.terminal-content.svelte-1bfirav::-webkit-scrollbar-thumb:hover {background:var(--terminal-header-fg);}

  /* Tab styles */.terminal-tabs.svelte-1bfirav {display:flex;background:var(--terminal-header-bg);border-bottom:1px solid var(--terminal-border);gap:4px;overflow-x:auto;align-items:center;}.terminal-tabs-bottom.svelte-1bfirav {border-bottom:none;border-top:1px solid var(--terminal-border);}.terminal-tab.svelte-1bfirav {display:flex;align-items:center;gap:6px;padding:8px 12px;background:transparent;color:var(--terminal-header-fg);border:none;border-top:2px solid transparent;cursor:pointer;font-family:inherit;font-size:13px;transition:all 0.2s;white-space:nowrap;position:relative;}.terminal-tabs-bottom.svelte-1bfirav .terminal-tab:where(.svelte-1bfirav) {border-top:none;border-bottom:2px solid transparent;}.terminal-tab.svelte-1bfirav:hover {background:rgba(255, 255, 255, 0.05);}.terminal-tab.active.svelte-1bfirav {background:var(--terminal-bg);border-top-color:var(--terminal-command);}.terminal-tabs-bottom.svelte-1bfirav .terminal-tab.active:where(.svelte-1bfirav) {border-top-color:transparent;border-bottom-color:var(--terminal-command);}.tab-icon.svelte-1bfirav {font-size:14px;}.tab-title.svelte-1bfirav {flex:1;}.tab-badge.svelte-1bfirav {padding:2px 6px;background:var(--terminal-command);color:var(--terminal-bg);border-radius:10px;font-size:11px;font-weight:bold;min-width:18px;text-align:center;}.tab-close.svelte-1bfirav {margin-left:4px;padding:0 4px;background:transparent;border:none;color:var(--terminal-header-fg);cursor:pointer;font-size:18px;line-height:1;opacity:0.6;transition:opacity 0.2s;}.tab-close.svelte-1bfirav:hover {opacity:1;color:var(--terminal-error);}.tab-add.svelte-1bfirav {padding:8px 16px;font-weight:bold;opacity:0.7;}.tab-add.svelte-1bfirav:hover {opacity:1;background:rgba(255, 255, 255, 0.1);}

  /* Tab status indicators */.tab-status-running.svelte-1bfirav .tab-icon:where(.svelte-1bfirav)::after {content:'●';color:var(--terminal-warning);position:absolute;top:6px;left:8px;font-size:8px;
    animation: svelte-1bfirav-pulse 1.5s infinite;}.tab-status-error.svelte-1bfirav .tab-icon:where(.svelte-1bfirav)::after {content:'●';color:var(--terminal-error);position:absolute;top:6px;left:8px;font-size:8px;}.tab-status-success.svelte-1bfirav .tab-icon:where(.svelte-1bfirav)::after {content:'●';color:var(--terminal-success);position:absolute;top:6px;left:8px;font-size:8px;}

  @keyframes svelte-1bfirav-pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  /* Scrollbar for tabs */.terminal-tabs.svelte-1bfirav::-webkit-scrollbar {height:4px;}.terminal-tabs.svelte-1bfirav::-webkit-scrollbar-track {background:transparent;}.terminal-tabs.svelte-1bfirav::-webkit-scrollbar-thumb {background:var(--terminal-border);border-radius:2px;}

  /* Rich text segment styling */.rich-text-segment.svelte-1bfirav {display:inline;}

  /* Ensure rich text inherits terminal font properties */.terminal-line.svelte-1bfirav .rich-text-segment:where(.svelte-1bfirav) {font-family:inherit;font-size:inherit;line-height:inherit;}

  /* Table layout styling */.terminal-table.svelte-1bfirav {display:block;width:100%;font-family:inherit;margin:0;padding:0;}.terminal-table-row.svelte-1bfirav {display:grid !important;grid-template-columns:60px 100px 180px 1fr !important;min-height:1.5em;align-items:baseline;font-family:inherit;}.terminal-table-cell.svelte-1bfirav {overflow:visible;padding-right:8px;}

  /* Semantic column styling with fixed positioning */.terminal-table-row.svelte-1bfirav .terminal-table-cell.col-position:where(.svelte-1bfirav) {grid-column:1;text-align:left;white-space:nowrap;}.terminal-table-row.svelte-1bfirav .terminal-table-cell.col-type:where(.svelte-1bfirav) {grid-column:2;text-align:left;white-space:nowrap;}.terminal-table-row.svelte-1bfirav .terminal-table-cell.col-rule:where(.svelte-1bfirav) {grid-column:3;text-align:left;white-space:nowrap;}.terminal-table-row.svelte-1bfirav .terminal-table-cell.col-message:where(.svelte-1bfirav) {grid-column:4;white-space:normal;word-break:break-word;text-align:left;}`
};
function zl(e, t) {
  Vn(t, !0), rl(e, Hl);
  let r = te(t, "theme", 7, "dark"), n = te(t, "session", 23, () => []), a = te(t, "autoplay", 7, !1), l = te(t, "playbackSpeed", 7, 1), s = te(t, "showHeader", 7), o = te(t, "title", 7, "Terminal"), f = te(t, "colors", 23, () => ({})), c = te(t, "typingSpeed", 7, 40), d = te(t, "enableTyping", 7, !0), h = te(t, "showPlayButton", 7), g = te(t, "showResetButton", 7), m = te(t, "showThemeToggle", 7), v = te(t, "showWindowButtons", 7), _ = te(t, "tabs", 23, () => []), y = te(t, "activeTab", 7, 0), C = te(t, "showTabs", 7, !1), R = te(t, "allowTabClose", 7, !0), E = te(t, "allowTabAdd", 7, !1), W = te(t, "tabBarPosition", 7, "top"), x, $, S = /* @__PURE__ */ se(He(y() || 0)), U = /* @__PURE__ */ se(He(/* @__PURE__ */ new Map())), oe = /* @__PURE__ */ $e(() => C() && _() && _().length > 0 ? _()[i(S)] || _()[0] : null), I = /* @__PURE__ */ $e(() => i(oe) ? i(oe).session : n()), Ve = /* @__PURE__ */ $e(() => i(oe) ? i(oe).title : o()), we = /* @__PURE__ */ $e(() => h() ?? !0), ft = /* @__PURE__ */ $e(() => g() ?? !0), $t = /* @__PURE__ */ $e(() => m() ?? !0), ut = /* @__PURE__ */ $e(() => v() ?? !0), jt = /* @__PURE__ */ $e(() => i(we) || i(ft) || i($t)), Ar = /* @__PURE__ */ $e(() => s() ?? !0), V = /* @__PURE__ */ se(0), j = /* @__PURE__ */ se(!1), Y = /* @__PURE__ */ se(He([])), ne = /* @__PURE__ */ se(-1), pe = /* @__PURE__ */ se(""), et = /* @__PURE__ */ se(!1), Rr = /* @__PURE__ */ se(!1), Nr = /* @__PURE__ */ se(He(a())), ue = null, ae = null, vn = -1, ar = "", dn = /* @__PURE__ */ $e(() => dl(r() === "dark" ? ul : cl, f()));
  xt(() => {
    x && i(dn) && vl(i(dn), x);
  }), xt(() => {
    const u = i(Y).length;
    $ && u > 0 && Yi().then(() => {
      $ && ($.scrollTop = $.scrollHeight);
    });
  });
  function ir() {
    i(j) || !i(I) || i(V) >= i(I).length || (w(j, !0), Wt());
  }
  function Wt() {
    if (!i(I) || i(V) >= i(I).length) {
      w(j, !1), ue = null;
      return;
    }
    const u = i(I)[i(V)], p = (u.delay || 1e3) / l();
    ue = setTimeout(
      () => {
        if (!i(I)) {
          w(j, !1), ue = null;
          return;
        }
        u.type === "command" && d() && !u.skipTyping ? Da(u) : (w(Y, [...i(Y), u], !0), cr(V), i(V) < i(I).length && i(j) ? Wt() : (w(j, !1), ue = null));
      },
      p
    );
  }
  function Da(u) {
    w(ne, i(Y).length, !0), w(pe, ""), w(Y, [...i(Y), { ...u, content: "" }], !0);
    const p = Fa(u.content);
    let M = 0;
    const ce = 1e3 / (u.typingSpeed || c());
    function J() {
      if (!i(j) || !i(I) || i(ne) < 0) {
        ae = null, w(ne, -1), w(pe, "");
        return;
      }
      if (M < p.length) {
        w(pe, i(pe) + p[M]), w(Y, i(Y).map((O, ee) => ee === i(ne) ? { ...u, content: i(pe) } : O), !0), M++;
        const B = ce * 0.2, Q = ce + (Math.random() - 0.5) * B;
        ae = setTimeout(
          () => {
            requestAnimationFrame(() => J());
          },
          Q
        );
      } else
        w(ne, -1), w(pe, ""), ae = null, cr(V), i(V) < i(I).length && i(j) ? Wt() : w(j, !1);
    }
    requestAnimationFrame(() => J());
  }
  function lr() {
    ue && (clearTimeout(ue), ue = null), ae && (clearTimeout(ae), ae = null), w(V, 0), w(Y, [], !0), w(j, !1), w(ne, -1), w(pe, "");
  }
  function Ma() {
    if (i(j))
      w(j, !1), ue && (clearTimeout(ue), ue = null), ae && (clearTimeout(ae), ae = null);
    else {
      if (!i(I) || i(I).length === 0)
        return;
      i(V) >= i(I).length ? (lr(), setTimeout(() => ir(), 10)) : ir();
    }
  }
  function hn(u) {
    return `step-${u}`;
  }
  function Ir(u) {
    return Array.isArray(u);
  }
  function Fa(u) {
    return typeof u == "string" ? u : u.map((p) => p.text).join("");
  }
  function La(u) {
    return Ir(u) ? u.some((p) => p.isTableRow || p.tableColumn) : !1;
  }
  function qa(u) {
    const p = [];
    let M = [];
    for (const Z of u)
      Z.isTableRow && M.length > 0 ? (p.push([...M]), M = [Z]) : M.push(Z);
    return M.length > 0 && p.push([...M]), p;
  }
  function bn() {
    i(ne) >= 0 && i(ne) < i(Y).length && (ae && (clearTimeout(ae), ae = null), w(
      Y,
      i(Y).map((u, p) => p === i(ne) ? {
        ...u,
        content: i(I)[i(V)].content
      } : u),
      !0
    ), w(ne, -1), w(pe, ""), cr(V), i(V) < i(I).length && i(j) ? Wt() : w(j, !1));
  }
  let sr = null;
  xt(() => {
    if (x && typeof IntersectionObserver < "u") {
      const u = new IntersectionObserver(
        (p) => {
          p.forEach((M) => {
            w(Rr, M.isIntersecting, !0);
          });
        },
        { threshold: 0.1 }
        // Trigger when 10% visible
      );
      return u.observe(x), () => {
        u && u.disconnect();
      };
    }
  }), xt(() => {
    a() !== i(Nr) && (!i(Nr) && a() && w(et, !1), w(Nr, a()));
  }), xt(() => {
    a() && i(Rr) && !i(et) && !i(j) && i(I) && i(I).length > 0 && i(V) === 0 && (w(et, !0), setTimeout(() => ir(), 300));
  }), xt(() => {
    if (x) {
      if (C() && _() && _().length > 0) {
        const p = _()[i(S)] || _()[0];
        p && (ar = p.id);
      }
      const u = () => {
        const p = i(I);
        !C() && p && p.length !== vn && (vn = p.length, (i(Y).length > 0 || i(V) > 0) && (lr(), w(
          et,
          !1
          // Reset autoplay flag for new session
        ))), C() && i(oe) && i(oe).id !== ar && !i(U).has(i(oe).id) && (ar = i(oe).id, i(U).has(i(oe).id) || w(et, !1));
      };
      u(), sr = setInterval(u, 500);
    }
    return () => {
      sr !== null && (clearInterval(sr), sr = null), ue && (clearTimeout(ue), ue = null), ae && (clearTimeout(ae), ae = null);
    };
  });
  function Ha() {
    const u = r() === "dark" ? "light" : "dark";
    x == null || x.dispatchEvent(new CustomEvent("theme-change", { detail: u }));
  }
  function za() {
    i(oe) && i(U).set(i(oe).id, {
      currentStepIndex: i(V),
      isPlaying: i(j),
      displayedSteps: [...i(Y)],
      typingStepIndex: i(ne),
      typedContent: i(pe),
      lastUpdateTime: Date.now()
    });
  }
  function ja(u) {
    const p = i(U).get(u);
    if (p) {
      const M = Date.now() - p.lastUpdateTime;
      if (w(V, p.currentStepIndex, !0), w(j, p.isPlaying, !0), w(Y, [...p.displayedSteps], !0), w(ne, p.typingStepIndex, !0), w(pe, p.typedContent, !0), p.isPlaying && i(I) && i(V) < i(I).length) {
        let Z = i(V), ce = 0;
        for (; Z < i(I).length && ce < M; ) {
          const J = i(I)[Z], B = (J.delay || 1e3) / l();
          if (ce + B <= M)
            w(Y, [...i(Y), J], !0), Z++, ce += B;
          else
            break;
        }
        w(V, Z, !0), i(V) < i(I).length ? Wt() : w(j, !1);
      }
    } else
      i(U).has(u) || (lr(), a() && i(Rr) && i(I) && i(I).length > 0 && setTimeout(() => ir(), 300));
  }
  function Or(u) {
    if (u === i(S) || !_() || u < 0 || u >= _().length) return;
    za(), ue && (clearTimeout(ue), ue = null), ae && (clearTimeout(ae), ae = null), w(S, u, !0);
    const p = _()[u];
    p && (ja(p.id), ar = p.id), x == null || x.dispatchEvent(new CustomEvent("tab-change", { detail: { index: u, tab: p } }));
  }
  function or(u) {
    if (!_() || _().length <= 1) return;
    const p = _()[u];
    if (p.closable !== !1 && R())
      if (p && i(U).delete(p.id), x == null || x.dispatchEvent(new CustomEvent("tab-close", { detail: { index: u, tab: p } })), u === i(S)) {
        const Z = u > 0 ? u - 1 : 0;
        _().length > 1 && Or(Z);
      } else u < i(S) && cr(S, -1);
  }
  function _n() {
    E() && (x == null || x.dispatchEvent(new CustomEvent("tab-add", { detail: {} })));
  }
  function pn(u) {
    return u ? `tab-status-${u}` : "";
  }
  var fr = ql(), mn = G(fr);
  {
    var Wa = (u) => {
      var p = gl(), M = G(p);
      {
        var Z = (O) => {
          var ee = hl();
          N(O, ee);
        };
        K(M, (O) => {
          i(ut) && O(Z);
        });
      }
      var ce = ie(M, 2), J = G(ce, !0);
      z(ce);
      var B = ie(ce, 2);
      {
        var Q = (O) => {
          var ee = ml(), ye = G(ee);
          {
            var me = (q) => {
              var b = bl();
              b.__click = Ma;
              var T = G(b, !0);
              z(b), le(() => {
                b.disabled = !i(I) || i(I).length === 0, Pe(T, i(j) ? "⏸" : "▶");
              }), N(q, b);
            };
            K(ye, (q) => {
              i(we) && q(me);
            });
          }
          var Se = ie(ye, 2);
          {
            var Oe = (q) => {
              var b = _l();
              b.__click = lr, le(() => b.disabled = i(Y).length === 0), N(q, b);
            };
            K(Se, (q) => {
              i(ft) && q(Oe);
            });
          }
          var Ye = ie(Se, 2);
          {
            var Ce = (q) => {
              var b = pl();
              b.__click = Ha;
              var T = G(b, !0);
              z(b), le(() => Pe(T, r() === "dark" ? "☀" : "🌙")), N(q, b);
            };
            K(Ye, (q) => {
              i($t) && q(Ce);
            });
          }
          z(ee), N(O, ee);
        };
        K(B, (O) => {
          i(jt) && O(Q);
        });
      }
      z(p), le(() => Pe(J, i(Ve))), N(u, p);
    };
    K(mn, (u) => {
      i(Ar) && u(Wa);
    });
  }
  var gn = ie(mn, 2);
  {
    var Ua = (u) => {
      var p = xl(), M = G(p);
      Ct(M, 17, _, St, (J, B, Q) => {
        var O = Tl();
        O.__click = () => Or(Q);
        var ee = G(O);
        {
          var ye = (b) => {
            var T = wl(), H = G(T, !0);
            z(T), le(() => Pe(H, i(B).icon)), N(b, T);
          };
          K(ee, (b) => {
            i(B).icon && b(ye);
          });
        }
        var me = ie(ee, 2), Se = G(me, !0);
        z(me);
        var Oe = ie(me, 2);
        {
          var Ye = (b) => {
            var T = yl(), H = G(T, !0);
            z(T), le(() => Pe(H, i(B).badge)), N(b, T);
          };
          K(Oe, (b) => {
            i(B).badge !== void 0 && b(Ye);
          });
        }
        var Ce = ie(Oe, 2);
        {
          var q = (b) => {
            var T = $l();
            T.__click = (H) => {
              H.stopPropagation(), or(Q);
            }, T.__keydown = (H) => {
              (H.key === "Enter" || H.key === " ") && (H.stopPropagation(), H.preventDefault(), or(Q));
            }, N(b, T);
          };
          K(Ce, (b) => {
            i(B).closable !== !1 && R() && _().length > 1 && b(q);
          });
        }
        z(O), le(
          (b) => {
            Yt(O, 1, `terminal-tab ${Q === i(S) ? "active" : ""} ${b ?? ""}`, "svelte-1bfirav"), Pe(Se, i(B).title);
          },
          [() => pn(i(B).status)]
        ), N(J, O);
      });
      var Z = ie(M, 2);
      {
        var ce = (J) => {
          var B = kl();
          B.__click = _n, N(J, B);
        };
        K(Z, (J) => {
          E() && J(ce);
        });
      }
      z(p), N(u, p);
    };
    K(gn, (u) => {
      C() && _() && _().length > 0 && W() === "top" && u(Ua);
    });
  }
  var Tt = ie(gn, 2);
  Tt.__click = bn, Tt.__keydown = [El, bn];
  var wn = G(Tt);
  Ct(wn, 17, () => i(Y), St, (u, p, M) => {
    var Z = hr(), ce = vr(Z);
    {
      var J = (Q) => {
        var O = Pl(), ee = G(O);
        Ct(ee, 21, () => qa(i(p).content), St, (ye, me) => {
          const Se = /* @__PURE__ */ $e(() => i(me)[0]), Oe = /* @__PURE__ */ $e(() => {
            var q;
            return ((q = i(Se)) == null ? void 0 : q.columnGap) || "16px";
          }), Ye = /* @__PURE__ */ $e(() => {
            var q;
            return ((q = i(Se)) == null ? void 0 : q.rowGap) || "4px";
          });
          var Ce = Cl();
          Ct(Ce, 21, () => i(me), St, (q, b) => {
            var T = Sl(), H = G(T, !0);
            z(T), le(
              (Br) => {
                Yt(T, 1, `terminal-table-cell ${i(b).tableColumn ? `col-${i(b).tableColumn}` : ""}`, "svelte-1bfirav"), qr(T, `${i(b).color ? `color: ${i(b).color};` : ""}${i(b).backgroundColor ? `background-color: ${i(b).backgroundColor};` : ""}${i(b).fontWeight ? `font-weight: ${i(b).fontWeight};` : ""}${i(b).textDecoration ? `text-decoration: ${i(b).textDecoration};` : ""}${i(b).fontStyle ? `font-style: ${i(b).fontStyle};` : ""}${i(b).width ? `width: ${i(b).width};` : ""}${i(b).align ? `text-align: ${i(b).align};` : ""}`), Pe(H, Br);
              },
              [() => i(b).text.trim()]
            ), N(q, T);
          }), z(Ce), le(() => qr(Ce, `column-gap: ${i(Oe) ?? ""}; margin-bottom: ${i(Ye) ?? ""};`)), N(ye, Ce);
        }), z(ee), z(O), le((ye) => Yt(O, 1, `terminal-line ${ye ?? ""}`, "svelte-1bfirav"), [() => hn(i(p).type)]), N(Q, O);
      }, B = (Q) => {
        var O = Nl(), ee = G(O), ye = G(ee);
        {
          var me = (b) => {
            var T = Rn();
            le(() => Pe(T, `${i(p).prompt || "$"} `)), N(b, T);
          };
          K(ye, (b) => {
            i(p).type === "command" && b(me);
          });
        }
        var Se = ie(ye);
        {
          var Oe = (b) => {
            var T = Rn();
            le(() => Pe(T, i(pe))), N(b, T);
          }, Ye = (b) => {
            var T = hr(), H = vr(T);
            {
              var Br = (kt) => {
                var Ut = hr(), Dr = vr(Ut);
                Ct(Dr, 17, () => i(p).content, St, (Xa, Be) => {
                  var ur = Al(), Za = G(ur);
                  Nn(Za, () => i(Be).text.replace(/\n/g, "<br>")), z(ur), le(() => qr(ur, `${i(Be).color ? `color: ${i(Be).color};` : ""}${i(Be).backgroundColor ? `background-color: ${i(Be).backgroundColor};` : ""}${i(Be).fontWeight ? `font-weight: ${i(Be).fontWeight};` : ""}${i(Be).textDecoration ? `text-decoration: ${i(Be).textDecoration};` : ""}${i(Be).fontStyle ? `font-style: ${i(Be).fontStyle};` : ""}`)), N(Xa, ur);
                }), N(kt, Ut);
              }, Ja = (kt) => {
                var Ut = hr(), Dr = vr(Ut);
                Nn(Dr, () => i(p).content.replace(/\n/g, "<br>")), N(kt, Ut);
              };
              K(
                H,
                (kt) => {
                  Ir(i(p).content) ? kt(Br) : kt(Ja, !1);
                },
                !0
              );
            }
            N(b, T);
          };
          K(Se, (b) => {
            M === i(ne) ? b(Oe) : b(Ye, !1);
          });
        }
        var Ce = ie(Se);
        {
          var q = (b) => {
            var T = Rl();
            N(b, T);
          };
          K(Ce, (b) => {
            M === i(ne) && b(q);
          });
        }
        z(ee), z(O), le((b) => Yt(O, 1, `terminal-line ${b ?? ""}`, "svelte-1bfirav"), [() => hn(i(p).type)]), N(Q, O);
      };
      K(ce, (Q) => {
        Ir(i(p).content) && La(i(p).content) ? Q(J) : Q(B, !1);
      });
    }
    N(u, Z);
  });
  var Va = ie(wn, 2);
  {
    var Ya = (u) => {
      var p = Il();
      N(u, p);
    };
    K(Va, (u) => {
      i(j) && i(ne) === -1 && u(Ya);
    });
  }
  z(Tt), On(Tt, (u) => $ = u, () => $);
  var Ga = ie(Tt, 2);
  {
    var Ka = (u) => {
      var p = Ll(), M = G(p);
      Ct(M, 17, _, St, (J, B, Q) => {
        var O = Ml();
        O.__click = () => Or(Q);
        var ee = G(O);
        {
          var ye = (b) => {
            var T = Ol(), H = G(T, !0);
            z(T), le(() => Pe(H, i(B).icon)), N(b, T);
          };
          K(ee, (b) => {
            i(B).icon && b(ye);
          });
        }
        var me = ie(ee, 2), Se = G(me, !0);
        z(me);
        var Oe = ie(me, 2);
        {
          var Ye = (b) => {
            var T = Bl(), H = G(T, !0);
            z(T), le(() => Pe(H, i(B).badge)), N(b, T);
          };
          K(Oe, (b) => {
            i(B).badge !== void 0 && b(Ye);
          });
        }
        var Ce = ie(Oe, 2);
        {
          var q = (b) => {
            var T = Dl();
            T.__click = (H) => {
              H.stopPropagation(), or(Q);
            }, T.__keydown = (H) => {
              (H.key === "Enter" || H.key === " ") && (H.stopPropagation(), H.preventDefault(), or(Q));
            }, N(b, T);
          };
          K(Ce, (b) => {
            i(B).closable !== !1 && R() && _().length > 1 && b(q);
          });
        }
        z(O), le(
          (b) => {
            Yt(O, 1, `terminal-tab ${Q === i(S) ? "active" : ""} ${b ?? ""}`, "svelte-1bfirav"), Pe(Se, i(B).title);
          },
          [() => pn(i(B).status)]
        ), N(J, O);
      });
      var Z = ie(M, 2);
      {
        var ce = (J) => {
          var B = Fl();
          B.__click = _n, N(J, B);
        };
        K(Z, (J) => {
          E() && J(ce);
        });
      }
      z(p), N(u, p);
    };
    K(Ga, (u) => {
      C() && _() && _().length > 0 && W() === "bottom" && u(Ka);
    });
  }
  return z(fr), On(fr, (u) => x = u, () => x), N(e, fr), Yn({
    get theme() {
      return r();
    },
    set theme(u = "dark") {
      r(u), X();
    },
    get session() {
      return n();
    },
    set session(u = []) {
      n(u), X();
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
      return _();
    },
    set tabs(u = []) {
      _(u), X();
    },
    get activeTab() {
      return y();
    },
    set activeTab(u = 0) {
      y(u), X();
    },
    get showTabs() {
      return C();
    },
    set showTabs(u = !1) {
      C(u), X();
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
      return W();
    },
    set tabBarPosition(u = "top") {
      W(u), X();
    }
  });
}
Ki(["click", "keydown"]);
customElements.define("terminal-session", fl(
  zl,
  {
    showPlayButton: { attribute: "show-play-button", type: "Boolean" },
    showResetButton: { attribute: "show-reset-button", type: "Boolean" },
    showThemeToggle: { attribute: "show-theme-toggle", type: "Boolean" },
    showWindowButtons: { attribute: "show-window-buttons", type: "Boolean" },
    showTabs: { attribute: "show-tabs", type: "Boolean" },
    allowTabClose: { attribute: "allow-tab-close", type: "Boolean" },
    allowTabAdd: { attribute: "allow-tab-add", type: "Boolean" },
    autoplay: { attribute: "autoplay", type: "Boolean" },
    enableTyping: { attribute: "enable-typing", type: "Boolean" },
    showHeader: { attribute: "show-header", type: "Boolean" },
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
