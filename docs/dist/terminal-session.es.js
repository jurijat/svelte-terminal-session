var vi = Object.defineProperty;
var Ar = (e) => {
  throw TypeError(e);
};
var di = (e, t, n) => t in e ? vi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var he = (e, t, n) => di(e, typeof t != "symbol" ? t + "" : t, n), Gn = (e, t, n) => t.has(e) || Ar("Cannot " + n);
var x = (e, t, n) => (Gn(e, t, "read from private field"), n ? n.call(e) : t.get(e)), de = (e, t, n) => t.has(e) ? Ar("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), ge = (e, t, n, a) => (Gn(e, t, "write to private field"), a ? a.call(e, n) : t.set(e, n), n), dt = (e, t, n) => (Gn(e, t, "access private method"), n);
const hi = "5";
var Ur;
typeof window < "u" && ((Ur = window.__svelte ?? (window.__svelte = {})).v ?? (Ur.v = /* @__PURE__ */ new Set())).add(hi);
const Nn = 1, In = 2, zr = 4, pi = 8, _i = 16, bi = 1, mi = 4, gi = 8, wi = 16, yi = 2, Yr = "[", lr = "[!", or = "]", bt = {}, ve = Symbol(), Vr = !1;
var sr = Array.isArray, $i = Array.prototype.indexOf, ur = Array.from, Sn = Object.keys, Ft = Object.defineProperty, mt = Object.getOwnPropertyDescriptor, Ti = Object.prototype, ki = Array.prototype, qi = Object.getPrototypeOf, Rr = Object.isExtensible;
function Gr(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function xi() {
  var e, t, n = new Promise((a, i) => {
    e = a, t = i;
  });
  return { promise: n, resolve: e, reject: t };
}
const qe = 2, fr = 4, Kr = 8, zt = 16, et = 32, ft = 64, Jr = 128, Ae = 256, Cn = 512, _e = 1024, Re = 2048, ct = 4096, De = 8192, $t = 16384, cr = 32768, vr = 65536, Br = 1 << 17, Ei = 1 << 18, Yt = 1 << 19, Si = 1 << 20, Xn = 1 << 21, dr = 1 << 22, gt = 1 << 23, rn = Symbol("$state"), Xr = Symbol("legacy props"), hr = new class extends Error {
  constructor() {
    super(...arguments);
    he(this, "name", "StaleReactionError");
    he(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}(), pr = 3, Mt = 8;
function Ci() {
  throw new Error("https://svelte.dev/e/await_outside_boundary");
}
function Pi() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ai(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ri() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Bi(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ni() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ii() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Oi(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Di() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Li() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Fi() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function dn(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let F = !1;
function Ze(e) {
  F = e;
}
let H;
function Te(e) {
  if (e === null)
    throw dn(), bt;
  return H = e;
}
function Ht() {
  return Te(
    /** @type {TemplateNode} */
    /* @__PURE__ */ tt(H)
  );
}
function Y(e) {
  if (F) {
    if (/* @__PURE__ */ tt(H) !== null)
      throw dn(), bt;
    H = e;
  }
}
function Zn() {
  for (var e = 0, t = H; ; ) {
    if (t.nodeType === Mt) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === or) {
        if (e === 0) return t;
        e -= 1;
      } else (n === Yr || n === lr) && (e += 1);
    }
    var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ tt(t)
    );
    t.remove(), t = a;
  }
}
function Zr(e) {
  if (!e || e.nodeType !== Mt)
    throw dn(), bt;
  return (
    /** @type {Comment} */
    e.data
  );
}
function Qr(e) {
  return e === this.v;
}
function Mi(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function ea(e) {
  return !Mi(e, this.v);
}
let Hi = !1, Fe = null;
function Pn(e) {
  Fe = e;
}
function ta(e, t = !1, n) {
  Fe = {
    p: Fe,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  };
}
function na(e) {
  var t = (
    /** @type {ComponentContext} */
    Fe
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var a of n)
      $a(a);
  }
  return e !== void 0 && (t.x = e), Fe = t.p, e ?? /** @type {T} */
  {};
}
function ra() {
  return !0;
}
const Wi = /* @__PURE__ */ new WeakMap();
function ji(e) {
  var t = R;
  if (t === null)
    return N.f |= gt, e;
  if (t.f & cr)
    _r(e, t);
  else {
    if (!(t.f & Jr))
      throw !t.parent && e instanceof Error && aa(e), e;
    t.b.error(e);
  }
}
function _r(e, t) {
  for (; t !== null; ) {
    if (t.f & Jr)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw e instanceof Error && aa(e), e;
}
function aa(e) {
  const t = Wi.get(e);
  t && (Ft(e, "message", {
    value: t.message
  }), Ft(e, "stack", {
    value: t.stack
  }));
}
let an = [], Qn = [];
function ia() {
  var e = an;
  an = [], Gr(e);
}
function Ui() {
  var e = Qn;
  Qn = [], Gr(e);
}
function la(e) {
  an.length === 0 && queueMicrotask(ia), an.push(e);
}
function zi() {
  an.length > 0 && ia(), Qn.length > 0 && Ui();
}
function Yi() {
  for (var e = (
    /** @type {Effect} */
    R.b
  ); e !== null && !e.has_pending_snippet(); )
    e = e.parent;
  return e === null && Ci(), e;
}
// @__NO_SIDE_EFFECTS__
function On(e) {
  var t = qe | Re, n = N !== null && N.f & qe ? (
    /** @type {Derived} */
    N
  ) : null;
  return R === null || n !== null && n.f & Ae ? t |= Ae : R.f |= Yt, {
    ctx: Fe,
    deps: null,
    effects: null,
    equals: Qr,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      ve
    ),
    wv: 0,
    parent: n ?? R,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Vi(e, t) {
  let n = (
    /** @type {Effect | null} */
    R
  );
  n === null && Pi();
  var a = (
    /** @type {Boundary} */
    n.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), l = ln(
    /** @type {V} */
    ve
  ), o = null, u = !N;
  return nl(() => {
    try {
      var f = e();
    } catch (b) {
      f = Promise.reject(b);
    }
    var c = () => f;
    i = (o == null ? void 0 : o.then(c, c)) ?? Promise.resolve(f), o = i;
    var h = (
      /** @type {Batch} */
      oe
    ), p = a.pending;
    u && (a.update_pending_count(1), p || h.increment());
    const g = (b, d = void 0) => {
      o = null, p || h.activate(), d ? d !== hr && (l.f |= gt, on(l, d)) : (l.f & gt && (l.f ^= gt), on(l, b)), u && (a.update_pending_count(-1), p || h.decrement()), fa();
    };
    if (i.then(g, (b) => g(null, b || "unknown")), h)
      return () => {
        queueMicrotask(() => h.neuter());
      };
  }), new Promise((f) => {
    function c(h) {
      function p() {
        h === i ? f(l) : c(i);
      }
      h.then(p, p);
    }
    c(i);
  });
}
// @__NO_SIDE_EFFECTS__
function ye(e) {
  const t = /* @__PURE__ */ On(e);
  return Ra(t), t;
}
// @__NO_SIDE_EFFECTS__
function oa(e) {
  const t = /* @__PURE__ */ On(e);
  return t.equals = ea, t;
}
function sa(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      ze(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Gi(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & qe))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function br(e) {
  var t, n = R;
  ut(Gi(e));
  try {
    sa(e), t = Oa(e);
  } finally {
    ut(n);
  }
  return t;
}
function ua(e) {
  var t = br(e);
  if (e.equals(t) || (e.v = t, e.wv = Na()), !Tt)
    if (lt !== null)
      lt.set(e, e.v);
    else {
      var n = (ot || e.f & Ae) && e.deps !== null ? ct : _e;
      ke(e, n);
    }
}
function Ki(e, t, n) {
  const a = On;
  if (t.length === 0) {
    n(e.map(a));
    return;
  }
  var i = oe, l = (
    /** @type {Effect} */
    R
  ), o = Ji(), u = Yi();
  Promise.all(t.map((f) => /* @__PURE__ */ Vi(f))).then((f) => {
    i == null || i.activate(), o();
    try {
      n([...e.map(a), ...f]);
    } catch (c) {
      l.f & $t || _r(c, l);
    }
    i == null || i.deactivate(), fa();
  }).catch((f) => {
    u.error(f);
  });
}
function Ji() {
  var e = R, t = N, n = Fe;
  return function() {
    ut(e), Ye(t), Pn(n);
  };
}
function fa() {
  ut(null), Ye(null), Pn(null);
}
const Qt = /* @__PURE__ */ new Set();
let oe = null, lt = null, Nr = /* @__PURE__ */ new Set(), An = [];
function ca() {
  const e = (
    /** @type {() => void} */
    An.shift()
  );
  An.length > 0 && queueMicrotask(ca), e();
}
let yt = [], Dn = null, er = !1, qn = !1;
var It, Ot, at, un, fn, pt, Dt, _t, it, Lt, cn, vn, Le, va, xn, tr;
const Bn = class Bn {
  constructor() {
    de(this, Le);
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
    de(this, It, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    de(this, Ot, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    de(this, at, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    de(this, un, null);
    /**
     * True if an async effect inside this batch resolved and
     * its parent branch was already deleted
     */
    de(this, fn, !1);
    /**
     * Async effects (created inside `async_derived`) encountered during processing.
     * These run after the rest of the batch has updated, since they should
     * always have the latest values
     * @type {Effect[]}
     */
    de(this, pt, []);
    /**
     * The same as `#async_effects`, but for effects inside a newly-created
     * `<svelte:boundary>` — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    de(this, Dt, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    de(this, _t, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    de(this, it, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    de(this, Lt, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    de(this, cn, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    de(this, vn, []);
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
    yt = [];
    var n = null;
    if (Qt.size > 1) {
      n = /* @__PURE__ */ new Map(), lt = /* @__PURE__ */ new Map();
      for (const [o, u] of this.current)
        n.set(o, { v: o.v, wv: o.wv }), o.v = u;
      for (const o of Qt)
        if (o !== this)
          for (const [u, f] of x(o, It))
            n.has(u) || (n.set(u, { v: u.v, wv: u.wv }), u.v = f);
    }
    for (const o of t)
      dt(this, Le, va).call(this, o);
    if (x(this, pt).length === 0 && x(this, at) === 0) {
      dt(this, Le, tr).call(this);
      var a = x(this, _t), i = x(this, it);
      ge(this, _t, []), ge(this, it, []), ge(this, Lt, []), oe = null, Ir(a), Ir(i), oe === null ? oe = this : Qt.delete(this), (l = x(this, un)) == null || l.resolve();
    } else
      dt(this, Le, xn).call(this, x(this, _t)), dt(this, Le, xn).call(this, x(this, it)), dt(this, Le, xn).call(this, x(this, Lt));
    if (n) {
      for (const [o, { v: u, wv: f }] of n)
        o.wv <= f && (o.v = u);
      lt = null;
    }
    for (const o of x(this, pt))
      Nt(o);
    for (const o of x(this, Dt))
      Nt(o);
    ge(this, pt, []), ge(this, Dt, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    x(this, It).has(t) || x(this, It).set(t, n), this.current.set(t, t.v);
  }
  activate() {
    oe = this;
  }
  deactivate() {
    oe = null;
    for (const t of Nr)
      if (Nr.delete(t), t(), oe !== null)
        break;
  }
  neuter() {
    ge(this, fn, !0);
  }
  flush() {
    yt.length > 0 ? da() : dt(this, Le, tr).call(this), oe === this && (x(this, at) === 0 && Qt.delete(this), this.deactivate());
  }
  increment() {
    ge(this, at, x(this, at) + 1);
  }
  decrement() {
    if (ge(this, at, x(this, at) - 1), x(this, at) === 0) {
      for (const t of x(this, cn))
        ke(t, Re), jt(t);
      for (const t of x(this, vn))
        ke(t, ct), jt(t);
      ge(this, _t, []), ge(this, it, []), this.flush();
    } else
      this.deactivate();
  }
  /** @param {() => void} fn */
  add_callback(t) {
    x(this, Ot).add(t);
  }
  settled() {
    return (x(this, un) ?? ge(this, un, xi())).promise;
  }
  static ensure() {
    if (oe === null) {
      const t = oe = new Bn();
      Qt.add(oe), qn || Bn.enqueue(() => {
        oe === t && t.flush();
      });
    }
    return oe;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    An.length === 0 && queueMicrotask(ca), An.unshift(t);
  }
};
It = new WeakMap(), Ot = new WeakMap(), at = new WeakMap(), un = new WeakMap(), fn = new WeakMap(), pt = new WeakMap(), Dt = new WeakMap(), _t = new WeakMap(), it = new WeakMap(), Lt = new WeakMap(), cn = new WeakMap(), vn = new WeakMap(), Le = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
va = function(t) {
  var h;
  t.f ^= _e;
  for (var n = t.first; n !== null; ) {
    var a = n.f, i = (a & (et | ft)) !== 0, l = i && (a & _e) !== 0, o = l || (a & De) !== 0 || this.skipped_effects.has(n);
    if (!o && n.fn !== null) {
      if (i)
        n.f ^= _e;
      else if (a & fr)
        x(this, it).push(n);
      else if (!(a & _e))
        if (a & dr) {
          var u = (h = n.b) != null && h.pending ? x(this, Dt) : x(this, pt);
          u.push(n);
        } else Ln(n) && (n.f & zt && x(this, Lt).push(n), Nt(n));
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
xn = function(t) {
  for (const n of t)
    (n.f & Re ? x(this, cn) : x(this, vn)).push(n), ke(n, _e);
  t.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
tr = function() {
  if (!x(this, fn))
    for (const t of x(this, Ot))
      t();
  x(this, Ot).clear();
};
let Wt = Bn;
function Q(e) {
  var t = qn;
  qn = !0;
  try {
    for (var n; ; ) {
      if (zi(), yt.length === 0 && (oe == null || oe.flush(), yt.length === 0))
        return Dn = null, /** @type {T} */
        n;
      da();
    }
  } finally {
    qn = t;
  }
}
function da() {
  var e = Bt;
  er = !0;
  try {
    var t = 0;
    for (Dr(!0); yt.length > 0; ) {
      var n = Wt.ensure();
      if (t++ > 1e3) {
        var a, i;
        Xi();
      }
      n.process(yt), st.clear();
    }
  } finally {
    er = !1, Dr(e), Dn = null;
  }
}
function Xi() {
  try {
    Ni();
  } catch (e) {
    _r(e, Dn);
  }
}
let ht = null;
function Ir(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var a = e[n++];
      if (!(a.f & ($t | De)) && Ln(a) && (ht = [], Nt(a), a.deps === null && a.first === null && a.nodes_start === null && (a.teardown === null && a.ac === null ? Ca(a) : a.fn = null), ht.length > 0)) {
        st.clear();
        for (const i of ht)
          Nt(i);
        ht = [];
      }
    }
    ht = null;
  }
}
function jt(e) {
  for (var t = Dn = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (er && t === R && n & zt)
      return;
    if (n & (ft | et)) {
      if (!(n & _e)) return;
      t.f ^= _e;
    }
  }
  yt.push(t);
}
const st = /* @__PURE__ */ new Map();
function ln(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Qr,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function ee(e, t) {
  const n = ln(e);
  return Ra(n), n;
}
// @__NO_SIDE_EFFECTS__
function ha(e, t = !1, n = !0) {
  const a = ln(e);
  return t || (a.equals = ea), a;
}
function m(e, t, n = !1) {
  N !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!We || N.f & Br) && ra() && N.f & (qe | zt | dr | Br) && !(be != null && be.includes(e)) && Fi();
  let a = n ? Pe(t) : t;
  return on(e, a);
}
function on(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Tt ? st.set(e, t) : st.set(e, n), e.v = t;
    var a = Wt.ensure();
    a.capture(e, n), e.f & qe && (e.f & Re && br(
      /** @type {Derived} */
      e
    ), ke(e, e.f & Ae ? ct : _e)), e.wv = Na(), pa(e, Re), R !== null && R.f & _e && !(R.f & (et | ft)) && (Se === null ? al([e]) : Se.push(e));
  }
  return t;
}
function yn(e, t = 1) {
  var n = r(e), a = t === 1 ? n++ : n--;
  return m(e, n), a;
}
function Kn(e) {
  m(e, e.v + 1);
}
function pa(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var a = n.length, i = 0; i < a; i++) {
      var l = n[i], o = l.f, u = (o & Re) === 0;
      u && ke(l, t), o & qe ? pa(
        /** @type {Derived} */
        l,
        ct
      ) : u && (o & zt && ht !== null && ht.push(
        /** @type {Effect} */
        l
      ), jt(
        /** @type {Effect} */
        l
      ));
    }
}
function Pe(e) {
  if (typeof e != "object" || e === null || rn in e)
    return e;
  const t = qi(e);
  if (t !== Ti && t !== ki)
    return e;
  var n = /* @__PURE__ */ new Map(), a = sr(e), i = /* @__PURE__ */ ee(0), l = wt, o = (u) => {
    if (wt === l)
      return u();
    var f = N, c = wt;
    Ye(null), Fr(l);
    var h = u();
    return Ye(f), Fr(c), h;
  };
  return a && n.set("length", /* @__PURE__ */ ee(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(u, f, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Di();
        var h = n.get(f);
        return h === void 0 ? h = o(() => {
          var p = /* @__PURE__ */ ee(c.value);
          return n.set(f, p), p;
        }) : m(h, c.value, !0), !0;
      },
      deleteProperty(u, f) {
        var c = n.get(f);
        if (c === void 0) {
          if (f in u) {
            const h = o(() => /* @__PURE__ */ ee(ve));
            n.set(f, h), Kn(i);
          }
        } else
          m(c, ve), Kn(i);
        return !0;
      },
      get(u, f, c) {
        var b;
        if (f === rn)
          return e;
        var h = n.get(f), p = f in u;
        if (h === void 0 && (!p || (b = mt(u, f)) != null && b.writable) && (h = o(() => {
          var d = Pe(p ? u[f] : ve), y = /* @__PURE__ */ ee(d);
          return y;
        }), n.set(f, h)), h !== void 0) {
          var g = r(h);
          return g === ve ? void 0 : g;
        }
        return Reflect.get(u, f, c);
      },
      getOwnPropertyDescriptor(u, f) {
        var c = Reflect.getOwnPropertyDescriptor(u, f);
        if (c && "value" in c) {
          var h = n.get(f);
          h && (c.value = r(h));
        } else if (c === void 0) {
          var p = n.get(f), g = p == null ? void 0 : p.v;
          if (p !== void 0 && g !== ve)
            return {
              enumerable: !0,
              configurable: !0,
              value: g,
              writable: !0
            };
        }
        return c;
      },
      has(u, f) {
        var g;
        if (f === rn)
          return !0;
        var c = n.get(f), h = c !== void 0 && c.v !== ve || Reflect.has(u, f);
        if (c !== void 0 || R !== null && (!h || (g = mt(u, f)) != null && g.writable)) {
          c === void 0 && (c = o(() => {
            var b = h ? Pe(u[f]) : ve, d = /* @__PURE__ */ ee(b);
            return d;
          }), n.set(f, c));
          var p = r(c);
          if (p === ve)
            return !1;
        }
        return h;
      },
      set(u, f, c, h) {
        var S;
        var p = n.get(f), g = f in u;
        if (a && f === "length")
          for (var b = c; b < /** @type {Source<number>} */
          p.v; b += 1) {
            var d = n.get(b + "");
            d !== void 0 ? m(d, ve) : b in u && (d = o(() => /* @__PURE__ */ ee(ve)), n.set(b + "", d));
          }
        if (p === void 0)
          (!g || (S = mt(u, f)) != null && S.writable) && (p = o(() => /* @__PURE__ */ ee(void 0)), m(p, Pe(c)), n.set(f, p));
        else {
          g = p.v !== ve;
          var y = o(() => Pe(c));
          m(p, y);
        }
        var $ = Reflect.getOwnPropertyDescriptor(u, f);
        if ($ != null && $.set && $.set.call(h, c), !g) {
          if (a && typeof f == "string") {
            var C = (
              /** @type {Source<number>} */
              n.get("length")
            ), I = Number(f);
            Number.isInteger(I) && I >= C.v && m(C, I + 1);
          }
          Kn(i);
        }
        return !0;
      },
      ownKeys(u) {
        r(i);
        var f = Reflect.ownKeys(u).filter((p) => {
          var g = n.get(p);
          return g === void 0 || g.v !== ve;
        });
        for (var [c, h] of n)
          h.v !== ve && !(c in u) && f.push(c);
        return f;
      },
      setPrototypeOf() {
        Li();
      }
    }
  );
}
var Or, _a, ba, ma;
function nr() {
  if (Or === void 0) {
    Or = window, _a = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    ba = mt(t, "firstChild").get, ma = mt(t, "nextSibling").get, Rr(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Rr(n) && (n.__t = void 0);
  }
}
function Ue(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function je(e) {
  return ba.call(e);
}
// @__NO_SIDE_EFFECTS__
function tt(e) {
  return ma.call(e);
}
function J(e, t) {
  if (!F)
    return /* @__PURE__ */ je(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ je(H)
  );
  if (n === null)
    n = H.appendChild(Ue());
  else if (t && n.nodeType !== pr) {
    var a = Ue();
    return n == null || n.before(a), Te(a), a;
  }
  return Te(n), n;
}
function en(e, t) {
  if (!F) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ je(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ tt(n) : n;
  }
  return H;
}
function se(e, t = 1, n = !1) {
  let a = F ? H : e;
  for (var i; t--; )
    i = a, a = /** @type {TemplateNode} */
    /* @__PURE__ */ tt(a);
  if (!F)
    return a;
  if (n && (a == null ? void 0 : a.nodeType) !== pr) {
    var l = Ue();
    return a === null ? i == null || i.after(l) : a.before(l), Te(l), l;
  }
  return Te(a), /** @type {TemplateNode} */
  a;
}
function ga(e) {
  e.textContent = "";
}
function wa() {
  return !1;
}
function ya(e) {
  var t = N, n = R;
  Ye(null), ut(null);
  try {
    return e();
  } finally {
    Ye(t), ut(n);
  }
}
function Zi(e) {
  R === null && N === null && Bi(), N !== null && N.f & Ae && R === null && Ri(), Tt && Ai();
}
function Qi(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function nt(e, t, n, a = !0) {
  var i = R;
  i !== null && i.f & De && (e |= De);
  var l = {
    ctx: Fe,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Re,
    first: null,
    fn: t,
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
      Nt(l), l.f |= cr;
    } catch (f) {
      throw ze(l), f;
    }
  else t !== null && jt(l);
  if (a) {
    var o = l;
    if (n && o.deps === null && o.teardown === null && o.nodes_start === null && o.first === o.last && // either `null`, or a singular child
    !(o.f & Yt) && (o = o.first), o !== null && (o.parent = i, i !== null && Qi(o, i), N !== null && N.f & qe && !(e & ft))) {
      var u = (
        /** @type {Derived} */
        N
      );
      (u.effects ?? (u.effects = [])).push(o);
    }
  }
  return l;
}
function Me(e) {
  Zi();
  var t = (
    /** @type {Effect} */
    R.f
  ), n = !N && (t & et) !== 0 && (t & cr) === 0;
  if (n) {
    var a = (
      /** @type {ComponentContext} */
      Fe
    );
    (a.e ?? (a.e = [])).push(e);
  } else
    return $a(e);
}
function $a(e) {
  return nt(fr | Si, e, !1);
}
function el(e) {
  Wt.ensure();
  const t = nt(ft | Yt, e, !0);
  return () => {
    ze(t);
  };
}
function tl(e) {
  Wt.ensure();
  const t = nt(ft | Yt, e, !0);
  return (n = {}) => new Promise((a) => {
    n.outro ? mr(t, () => {
      ze(t), a(void 0);
    }) : (ze(t), a(void 0));
  });
}
function Ta(e) {
  return nt(fr, e, !1);
}
function nl(e) {
  return nt(dr | Yt, e, !0);
}
function ka(e, t = 0) {
  return nt(Kr | t, e, !0);
}
function le(e, t = [], n = []) {
  Ki(t, n, (a) => {
    nt(Kr, () => e(...a.map(r)), !0);
  });
}
function qa(e, t = 0) {
  var n = nt(zt | t, e, !0);
  return n;
}
function Ut(e, t = !0) {
  return nt(et | Yt, e, !0, t);
}
function xa(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Tt, a = N;
    Lr(!0), Ye(null);
    try {
      t.call(null);
    } finally {
      Lr(n), Ye(a);
    }
  }
}
function Ea(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && ya(() => {
      i.abort(hr);
    });
    var a = n.next;
    n.f & ft ? n.parent = null : ze(n, t), n = a;
  }
}
function rl(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & et || ze(t), t = n;
  }
}
function ze(e, t = !0) {
  var n = !1;
  (t || e.f & Ei) && e.nodes_start !== null && e.nodes_end !== null && (Sa(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), Ea(e, t && !n), Rn(e, 0), ke(e, $t);
  var a = e.transitions;
  if (a !== null)
    for (const l of a)
      l.stop();
  xa(e);
  var i = e.parent;
  i !== null && i.first !== null && Ca(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function Sa(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ tt(e)
    );
    e.remove(), e = n;
  }
}
function Ca(e) {
  var t = e.parent, n = e.prev, a = e.next;
  n !== null && (n.next = a), a !== null && (a.prev = n), t !== null && (t.first === e && (t.first = a), t.last === e && (t.last = n));
}
function mr(e, t) {
  var n = [];
  gr(e, n, !0), Pa(n, () => {
    ze(e), t && t();
  });
}
function Pa(e, t) {
  var n = e.length;
  if (n > 0) {
    var a = () => --n || t();
    for (var i of e)
      i.out(a);
  } else
    t();
}
function gr(e, t, n) {
  if (!(e.f & De)) {
    if (e.f ^= De, e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || n) && t.push(o);
    for (var a = e.first; a !== null; ) {
      var i = a.next, l = (a.f & vr) !== 0 || (a.f & et) !== 0;
      gr(a, t, l ? n : !1), a = i;
    }
  }
}
function wr(e) {
  Aa(e, !0);
}
function Aa(e, t) {
  if (e.f & De) {
    e.f ^= De, e.f & _e || (ke(e, Re), jt(e));
    for (var n = e.first; n !== null; ) {
      var a = n.next, i = (n.f & vr) !== 0 || (n.f & et) !== 0;
      Aa(n, i ? t : !1), n = a;
    }
    if (e.transitions !== null)
      for (const l of e.transitions)
        (l.is_global || t) && l.in();
  }
}
let Bt = !1;
function Dr(e) {
  Bt = e;
}
let Tt = !1;
function Lr(e) {
  Tt = e;
}
let N = null, We = !1;
function Ye(e) {
  N = e;
}
let R = null;
function ut(e) {
  R = e;
}
let be = null;
function Ra(e) {
  N !== null && (be === null ? be = [e] : be.push(e));
}
let pe = null, $e = 0, Se = null;
function al(e) {
  Se = e;
}
let Ba = 1, sn = 0, wt = sn;
function Fr(e) {
  wt = e;
}
let ot = !1;
function Na() {
  return ++Ba;
}
function Ln(e) {
  var p;
  var t = e.f;
  if (t & Re)
    return !0;
  if (t & ct) {
    var n = e.deps, a = (t & Ae) !== 0;
    if (n !== null) {
      var i, l, o = (t & Cn) !== 0, u = a && R !== null && !ot, f = n.length;
      if ((o || u) && (R === null || !(R.f & $t))) {
        var c = (
          /** @type {Derived} */
          e
        ), h = c.parent;
        for (i = 0; i < f; i++)
          l = n[i], (o || !((p = l == null ? void 0 : l.reactions) != null && p.includes(c))) && (l.reactions ?? (l.reactions = [])).push(c);
        o && (c.f ^= Cn), u && h !== null && !(h.f & Ae) && (c.f ^= Ae);
      }
      for (i = 0; i < f; i++)
        if (l = n[i], Ln(
          /** @type {Derived} */
          l
        ) && ua(
          /** @type {Derived} */
          l
        ), l.wv > e.wv)
          return !0;
    }
    (!a || R !== null && !ot) && ke(e, _e);
  }
  return !1;
}
function Ia(e, t, n = !0) {
  var a = e.reactions;
  if (a !== null && !(be != null && be.includes(e)))
    for (var i = 0; i < a.length; i++) {
      var l = a[i];
      l.f & qe ? Ia(
        /** @type {Derived} */
        l,
        t,
        !1
      ) : t === l && (n ? ke(l, Re) : l.f & _e && ke(l, ct), jt(
        /** @type {Effect} */
        l
      ));
    }
}
function Oa(e) {
  var y;
  var t = pe, n = $e, a = Se, i = N, l = ot, o = be, u = Fe, f = We, c = wt, h = e.f;
  pe = /** @type {null | Value[]} */
  null, $e = 0, Se = null, ot = (h & Ae) !== 0 && (We || !Bt || N === null), N = h & (et | ft) ? null : e, be = null, Pn(e.ctx), We = !1, wt = ++sn, e.ac !== null && (ya(() => {
    e.ac.abort(hr);
  }), e.ac = null);
  try {
    e.f |= Xn;
    var p = (
      /** @type {Function} */
      e.fn
    ), g = p(), b = e.deps;
    if (pe !== null) {
      var d;
      if (Rn(e, $e), b !== null && $e > 0)
        for (b.length = $e + pe.length, d = 0; d < pe.length; d++)
          b[$e + d] = pe[d];
      else
        e.deps = b = pe;
      if (!ot || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      h & qe && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (d = $e; d < b.length; d++)
          ((y = b[d]).reactions ?? (y.reactions = [])).push(e);
    } else b !== null && $e < b.length && (Rn(e, $e), b.length = $e);
    if (ra() && Se !== null && !We && b !== null && !(e.f & (qe | ct | Re)))
      for (d = 0; d < /** @type {Source[]} */
      Se.length; d++)
        Ia(
          Se[d],
          /** @type {Effect} */
          e
        );
    return i !== null && i !== e && (sn++, Se !== null && (a === null ? a = Se : a.push(.../** @type {Source[]} */
    Se))), e.f & gt && (e.f ^= gt), g;
  } catch ($) {
    return ji($);
  } finally {
    e.f ^= Xn, pe = t, $e = n, Se = a, N = i, ot = l, be = o, Pn(u), We = f, wt = c;
  }
}
function il(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var a = $i.call(n, e);
    if (a !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[a] = n[i], n.pop());
    }
  }
  n === null && t.f & qe && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (pe === null || !pe.includes(t)) && (ke(t, ct), t.f & (Ae | Cn) || (t.f ^= Cn), sa(
    /** @type {Derived} **/
    t
  ), Rn(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Rn(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var a = t; a < n.length; a++)
      il(e, n[a]);
}
function Nt(e) {
  var t = e.f;
  if (!(t & $t)) {
    ke(e, _e);
    var n = R, a = Bt;
    R = e, Bt = !0;
    try {
      t & zt ? rl(e) : Ea(e), xa(e);
      var i = Oa(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Ba;
      var l;
      Vr && Hi && e.f & Re && e.deps;
    } finally {
      Bt = a, R = n;
    }
  }
}
async function ll() {
  await Promise.resolve(), Q();
}
function r(e) {
  var t = e.f, n = (t & qe) !== 0;
  if (N !== null && !We) {
    var a = R !== null && (R.f & $t) !== 0;
    if (!a && !(be != null && be.includes(e))) {
      var i = N.deps;
      if (N.f & Xn)
        e.rv < sn && (e.rv = sn, pe === null && i !== null && i[$e] === e ? $e++ : pe === null ? pe = [e] : (!ot || !pe.includes(e)) && pe.push(e));
      else {
        (N.deps ?? (N.deps = [])).push(e);
        var l = e.reactions;
        l === null ? e.reactions = [N] : l.includes(N) || l.push(N);
      }
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), u = o.parent;
    u !== null && !(u.f & Ae) && (o.f ^= Ae);
  }
  if (Tt) {
    if (st.has(e))
      return st.get(e);
    if (n) {
      o = /** @type {Derived} */
      e;
      var f = o.v;
      return (!(o.f & _e) && o.reactions !== null || Da(o)) && (f = br(o)), st.set(o, f), f;
    }
  } else if (n) {
    if (o = /** @type {Derived} */
    e, lt != null && lt.has(o))
      return lt.get(o);
    Ln(o) && ua(o);
  }
  if (e.f & gt)
    throw e.v;
  return e.v;
}
function Da(e) {
  if (e.v === ve) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (st.has(t) || t.f & qe && Da(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function La(e) {
  var t = We;
  try {
    return We = !0, e();
  } finally {
    We = t;
  }
}
const ol = -7169;
function ke(e, t) {
  e.f = e.f & ol | t;
}
const Fa = /* @__PURE__ */ new Set(), rr = /* @__PURE__ */ new Set();
function sl(e) {
  for (var t = 0; t < e.length; t++)
    Fa.add(e[t]);
  for (var n of rr)
    n(e);
}
let Mr = null;
function $n(e) {
  var I;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), a = e.type, i = ((I = e.composedPath) == null ? void 0 : I.call(e)) || [], l = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  Mr = e;
  var o = 0, u = Mr === e && e.__root;
  if (u) {
    var f = i.indexOf(u);
    if (f !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var c = i.indexOf(t);
    if (c === -1)
      return;
    f <= c && (o = f);
  }
  if (l = /** @type {Element} */
  i[o] || e.target, l !== t) {
    Ft(e, "currentTarget", {
      configurable: !0,
      get() {
        return l || n;
      }
    });
    var h = N, p = R;
    Ye(null), ut(null);
    try {
      for (var g, b = []; l !== null; ) {
        var d = l.assignedSlot || l.parentNode || /** @type {any} */
        l.host || null;
        try {
          var y = l["__" + a];
          if (y != null && (!/** @type {any} */
          l.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === l))
            if (sr(y)) {
              var [$, ...C] = y;
              $.apply(l, [e, ...C]);
            } else
              y.call(l, e);
        } catch (S) {
          g ? b.push(S) : g = S;
        }
        if (e.cancelBubble || d === t || d === null)
          break;
        l = d;
      }
      if (g) {
        for (let S of b)
          queueMicrotask(() => {
            throw S;
          });
        throw g;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Ye(h), ut(p);
    }
  }
}
function Ma(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function Qe(e, t) {
  var n = (
    /** @type {Effect} */
    R
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function W(e, t) {
  var n = (t & yi) !== 0, a, i = !e.startsWith("<!>");
  return () => {
    if (F)
      return Qe(H, null), H;
    a === void 0 && (a = Ma(i ? e : "<!>" + e), a = /** @type {Node} */
    /* @__PURE__ */ je(a));
    var l = (
      /** @type {TemplateNode} */
      n || _a ? document.importNode(a, !0) : a.cloneNode(!0)
    );
    return Qe(l, l), l;
  };
}
function Hr(e = "") {
  if (!F) {
    var t = Ue(e + "");
    return Qe(t, t), t;
  }
  var n = H;
  return n.nodeType !== pr && (n.before(n = Ue()), Te(n)), Qe(n, n), n;
}
function tn() {
  if (F)
    return Qe(H, null), H;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Ue();
  return e.append(t, n), Qe(t, n), e;
}
function B(e, t) {
  if (F) {
    R.nodes_end = H, Ht();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const ul = ["touchstart", "touchmove"];
function fl(e) {
  return ul.includes(e);
}
function Oe(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function Ha(e, t) {
  return Wa(e, t);
}
function cl(e, t) {
  nr(), t.intro = t.intro ?? !1;
  const n = t.target, a = F, i = H;
  try {
    for (var l = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ je(n)
    ); l && (l.nodeType !== Mt || /** @type {Comment} */
    l.data !== Yr); )
      l = /** @type {TemplateNode} */
      /* @__PURE__ */ tt(l);
    if (!l)
      throw bt;
    Ze(!0), Te(
      /** @type {Comment} */
      l
    ), Ht();
    const o = Wa(e, { ...t, anchor: l });
    if (H === null || H.nodeType !== Mt || /** @type {Comment} */
    H.data !== or)
      throw dn(), bt;
    return Ze(!1), /**  @type {Exports} */
    o;
  } catch (o) {
    if (o instanceof Error && o.message.split(`
`).some((u) => u.startsWith("https://svelte.dev/e/")))
      throw o;
    return o !== bt && console.warn("Failed to hydrate: ", o), t.recover === !1 && Ii(), nr(), ga(n), Ze(!1), Ha(e, t);
  } finally {
    Ze(a), Te(i);
  }
}
const Ct = /* @__PURE__ */ new Map();
function Wa(e, { target: t, anchor: n, props: a = {}, events: i, context: l, intro: o = !0 }) {
  nr();
  var u = /* @__PURE__ */ new Set(), f = (p) => {
    for (var g = 0; g < p.length; g++) {
      var b = p[g];
      if (!u.has(b)) {
        u.add(b);
        var d = fl(b);
        t.addEventListener(b, $n, { passive: d });
        var y = Ct.get(b);
        y === void 0 ? (document.addEventListener(b, $n, { passive: d }), Ct.set(b, 1)) : Ct.set(b, y + 1);
      }
    }
  };
  f(ur(Fa)), rr.add(f);
  var c = void 0, h = tl(() => {
    var p = n ?? t.appendChild(Ue());
    return Ut(() => {
      if (l) {
        ta({});
        var g = (
          /** @type {ComponentContext} */
          Fe
        );
        g.c = l;
      }
      i && (a.$$events = i), F && Qe(
        /** @type {TemplateNode} */
        p,
        null
      ), c = e(p, a) || {}, F && (R.nodes_end = H), l && na();
    }), () => {
      var d;
      for (var g of u) {
        t.removeEventListener(g, $n);
        var b = (
          /** @type {number} */
          Ct.get(g)
        );
        --b === 0 ? (document.removeEventListener(g, $n), Ct.delete(g)) : Ct.set(g, b);
      }
      rr.delete(f), p !== n && ((d = p.parentNode) == null || d.removeChild(p));
    };
  });
  return ar.set(c, h), c;
}
let ar = /* @__PURE__ */ new WeakMap();
function vl(e, t) {
  const n = ar.get(e);
  return n ? (ar.delete(e), n(t)) : Promise.resolve();
}
function X(e, t, n = !1) {
  F && Ht();
  var a = e, i = null, l = null, o = ve, u = n ? vr : 0, f = !1;
  const c = (b, d = !0) => {
    f = !0, g(d, b);
  };
  var h = null;
  function p() {
    h !== null && (h.lastChild.remove(), a.before(h), h = null);
    var b = o ? i : l, d = o ? l : i;
    b && wr(b), d && mr(d, () => {
      o ? l = null : i = null;
    });
  }
  const g = (b, d) => {
    if (o === (o = b)) return;
    let y = !1;
    if (F) {
      const E = Zr(a) === lr;
      !!o === E && (a = Zn(), Te(a), Ze(!1), y = !0);
    }
    var $ = wa(), C = a;
    if ($ && (h = document.createDocumentFragment(), h.append(C = Ue())), o ? i ?? (i = d && Ut(() => d(C))) : l ?? (l = d && Ut(() => d(C))), $) {
      var I = (
        /** @type {Batch} */
        oe
      ), S = o ? i : l, Z = o ? l : i;
      S && I.skipped_effects.delete(S), Z && I.skipped_effects.add(Z), I.add_callback(p);
    } else
      p();
    y && Ze(!0);
  };
  qa(() => {
    f = !1, t(c), f || g(null, null);
  }, u), F && (a = H);
}
function Pt(e, t) {
  return t;
}
function dl(e, t, n) {
  for (var a = e.items, i = [], l = t.length, o = 0; o < l; o++)
    gr(t[o].e, i, !0);
  var u = l > 0 && i.length === 0 && n !== null;
  if (u) {
    var f = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    ga(f), f.append(
      /** @type {Element} */
      n
    ), a.clear(), He(e, t[0].prev, t[l - 1].next);
  }
  Pa(i, () => {
    for (var c = 0; c < l; c++) {
      var h = t[c];
      u || (a.delete(h.k), He(e, h.prev, h.next)), ze(h.e, !u);
    }
  });
}
function At(e, t, n, a, i, l = null) {
  var o = e, u = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, f = (t & zr) !== 0;
  if (f) {
    var c = (
      /** @type {Element} */
      e
    );
    o = F ? Te(
      /** @type {Comment | Text} */
      /* @__PURE__ */ je(c)
    ) : c.appendChild(Ue());
  }
  F && Ht();
  var h = null, p = !1, g = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ oa(() => {
    var C = n();
    return sr(C) ? C : C == null ? [] : ur(C);
  }), d, y;
  function $() {
    hl(
      y,
      d,
      u,
      g,
      o,
      i,
      t,
      a,
      n
    ), l !== null && (d.length === 0 ? h ? wr(h) : h = Ut(() => l(o)) : h !== null && mr(h, () => {
      h = null;
    }));
  }
  qa(() => {
    y ?? (y = /** @type {Effect} */
    R), d = /** @type {V[]} */
    r(b);
    var C = d.length;
    if (p && C === 0)
      return;
    p = C === 0;
    let I = !1;
    if (F) {
      var S = Zr(o) === lr;
      S !== (C === 0) && (o = Zn(), Te(o), Ze(!1), I = !0);
    }
    if (F) {
      for (var Z = null, E, T = 0; T < C; T++) {
        if (H.nodeType === Mt && /** @type {Comment} */
        H.data === or) {
          o = /** @type {Comment} */
          H, I = !0, Ze(!1);
          break;
        }
        var O = d[T], k = a(O, T);
        E = ir(
          H,
          u,
          Z,
          null,
          O,
          k,
          T,
          i,
          t,
          n
        ), u.items.set(k, E), Z = E;
      }
      C > 0 && Te(Zn());
    }
    if (F)
      C === 0 && l && (h = Ut(() => l(o)));
    else if (wa()) {
      var ue = /* @__PURE__ */ new Set(), Be = (
        /** @type {Batch} */
        oe
      );
      for (T = 0; T < C; T += 1) {
        O = d[T], k = a(O, T);
        var ne = u.items.get(k) ?? g.get(k);
        ne ? t & (Nn | In) && ja(ne, O, T, t) : (E = ir(
          null,
          u,
          null,
          null,
          O,
          k,
          T,
          i,
          t,
          n,
          !0
        ), g.set(k, E)), ue.add(k);
      }
      for (const [P, kt] of u.items)
        ue.has(P) || Be.skipped_effects.add(kt.e);
      Be.add_callback($);
    } else
      $();
    I && Ze(!0), r(b);
  }), F && (o = H);
}
function hl(e, t, n, a, i, l, o, u, f) {
  var Gt, pn, V, M;
  var c = (o & pi) !== 0, h = (o & (Nn | In)) !== 0, p = t.length, g = n.items, b = n.first, d = b, y, $ = null, C, I = [], S = [], Z, E, T, O;
  if (c)
    for (O = 0; O < p; O += 1)
      Z = t[O], E = u(Z, O), T = g.get(E), T !== void 0 && ((Gt = T.a) == null || Gt.measure(), (C ?? (C = /* @__PURE__ */ new Set())).add(T));
  for (O = 0; O < p; O += 1) {
    if (Z = t[O], E = u(Z, O), T = g.get(E), T === void 0) {
      var k = a.get(E);
      if (k !== void 0) {
        a.delete(E), g.set(E, k);
        var ue = $ ? $.next : d;
        He(n, $, k), He(n, k, ue), Jn(k, ue, i), $ = k;
      } else {
        var Be = d ? (
          /** @type {TemplateNode} */
          d.e.nodes_start
        ) : i;
        $ = ir(
          Be,
          n,
          $,
          $ === null ? n.first : $.next,
          Z,
          E,
          O,
          l,
          o,
          f
        );
      }
      g.set(E, $), I = [], S = [], d = $.next;
      continue;
    }
    if (h && ja(T, Z, O, o), T.e.f & De && (wr(T.e), c && ((pn = T.a) == null || pn.unfix(), (C ?? (C = /* @__PURE__ */ new Set())).delete(T))), T !== d) {
      if (y !== void 0 && y.has(T)) {
        if (I.length < S.length) {
          var ne = S[0], P;
          $ = ne.prev;
          var kt = I[0], Ve = I[I.length - 1];
          for (P = 0; P < I.length; P += 1)
            Jn(I[P], ne, i);
          for (P = 0; P < S.length; P += 1)
            y.delete(S[P]);
          He(n, kt.prev, Ve.next), He(n, $, kt), He(n, Ve, ne), d = ne, $ = Ve, O -= 1, I = [], S = [];
        } else
          y.delete(T), Jn(T, d, i), He(n, T.prev, T.next), He(n, T, $ === null ? n.first : $.next), He(n, $, T), $ = T;
        continue;
      }
      for (I = [], S = []; d !== null && d.k !== E; )
        d.e.f & De || (y ?? (y = /* @__PURE__ */ new Set())).add(d), S.push(d), d = d.next;
      if (d === null)
        continue;
      T = d;
    }
    I.push(T), $ = T, d = T.next;
  }
  if (d !== null || y !== void 0) {
    for (var Ge = y === void 0 ? [] : ur(y); d !== null; )
      d.e.f & De || Ge.push(d), d = d.next;
    var vt = Ge.length;
    if (vt > 0) {
      var Vt = o & zr && p === 0 ? i : null;
      if (c) {
        for (O = 0; O < vt; O += 1)
          (V = Ge[O].a) == null || V.measure();
        for (O = 0; O < vt; O += 1)
          (M = Ge[O].a) == null || M.fix();
      }
      dl(n, Ge, Vt);
    }
  }
  c && la(() => {
    var G;
    if (C !== void 0)
      for (T of C)
        (G = T.a) == null || G.apply();
  }), e.first = n.first && n.first.e, e.last = $ && $.e;
  for (var hn of a.values())
    ze(hn.e);
  a.clear();
}
function ja(e, t, n, a) {
  a & Nn && on(e.v, t), a & In ? on(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function ir(e, t, n, a, i, l, o, u, f, c, h) {
  var p = (f & Nn) !== 0, g = (f & _i) === 0, b = p ? g ? /* @__PURE__ */ ha(i, !1, !1) : ln(i) : i, d = f & In ? ln(o) : o, y = {
    i: d,
    v: b,
    k: l,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: a
  };
  try {
    if (e === null) {
      var $ = document.createDocumentFragment();
      $.append(e = Ue());
    }
    return y.e = Ut(() => u(
      /** @type {Node} */
      e,
      b,
      d,
      c
    ), F), y.e.prev = n && n.e, y.e.next = a && a.e, n === null ? h || (t.first = y) : (n.next = y, n.e.next = y.e), a !== null && (a.prev = y, a.e.prev = y.e), y;
  } finally {
  }
}
function Jn(e, t, n) {
  for (var a = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : n, i = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : n, l = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); l !== null && l !== a; ) {
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ tt(l)
    );
    i.before(l), l = o;
  }
}
function He(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function Tn(e, t, n = !1, a = !1, i = !1) {
  var l = e, o = "";
  le(() => {
    var u = (
      /** @type {Effect} */
      R
    );
    if (o === (o = t() ?? "")) {
      F && Ht();
      return;
    }
    if (u.nodes_start !== null && (Sa(
      u.nodes_start,
      /** @type {TemplateNode} */
      u.nodes_end
    ), u.nodes_start = u.nodes_end = null), o !== "") {
      if (F) {
        H.data;
        for (var f = Ht(), c = f; f !== null && (f.nodeType !== Mt || /** @type {Comment} */
        f.data !== ""); )
          c = f, f = /** @type {TemplateNode} */
          /* @__PURE__ */ tt(f);
        if (f === null)
          throw dn(), bt;
        Qe(H, c), l = Te(f);
        return;
      }
      var h = o + "";
      n ? h = `<svg>${h}</svg>` : a && (h = `<math>${h}</math>`);
      var p = Ma(h);
      if ((n || a) && (p = /** @type {Element} */
      /* @__PURE__ */ je(p)), Qe(
        /** @type {TemplateNode} */
        /* @__PURE__ */ je(p),
        /** @type {TemplateNode} */
        p.lastChild
      ), n || a)
        for (; /* @__PURE__ */ je(p); )
          l.before(
            /** @type {Node} */
            /* @__PURE__ */ je(p)
          );
      else
        l.before(p);
    }
  });
}
function pl(e, t) {
  Ta(() => {
    var n = e.getRootNode(), a = (
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
    if (!a.querySelector("#" + t.hash)) {
      const i = document.createElement("style");
      i.id = t.hash, i.textContent = t.code, a.appendChild(i);
    }
  });
}
function _l(e, t, n) {
  var a = e == null ? "" : "" + e;
  return a = a ? a + " " + t : t, a === "" ? null : a;
}
function bl(e, t) {
  return e == null ? null : String(e);
}
function nn(e, t, n, a, i, l) {
  var o = e.__className;
  if (F || o !== n || o === void 0) {
    var u = _l(n, a);
    (!F || u !== e.getAttribute("class")) && (u == null ? e.removeAttribute("class") : e.className = u), e.__className = n;
  }
  return l;
}
function Rt(e, t, n, a) {
  var i = e.__style;
  if (F || i !== t) {
    var l = bl(t);
    (!F || l !== e.getAttribute("style")) && (l == null ? e.removeAttribute("style") : e.style.cssText = l), e.__style = t;
  }
  return a;
}
function Wr(e, t) {
  return e === t || (e == null ? void 0 : e[rn]) === t;
}
function jr(e = {}, t, n, a) {
  return Ta(() => {
    var i, l;
    return ka(() => {
      i = l, l = [], La(() => {
        e !== n(...l) && (t(e, ...l), i && Wr(n(...i), e) && t(null, ...i));
      });
    }), () => {
      la(() => {
        l && Wr(n(...l), e) && t(null, ...l);
      });
    };
  }), e;
}
let kn = !1;
function ml(e) {
  var t = kn;
  try {
    return kn = !1, [e(), kn];
  } finally {
    kn = t;
  }
}
function ie(e, t, n, a) {
  var I;
  var i = (n & gi) !== 0, l = (n & wi) !== 0, o = (
    /** @type {V} */
    a
  ), u = !0, f = () => (u && (u = !1, o = l ? La(
    /** @type {() => V} */
    a
  ) : (
    /** @type {V} */
    a
  )), o), c;
  if (i) {
    var h = rn in e || Xr in e;
    c = ((I = mt(e, t)) == null ? void 0 : I.set) ?? (h && t in e ? (S) => e[t] = S : void 0);
  }
  var p, g = !1;
  i ? [p, g] = ml(() => (
    /** @type {V} */
    e[t]
  )) : p = /** @type {V} */
  e[t], p === void 0 && a !== void 0 && (p = f(), c && (Oi(), c(p)));
  var b;
  if (b = () => {
    var S = (
      /** @type {V} */
      e[t]
    );
    return S === void 0 ? f() : (u = !0, S);
  }, !(n & mi))
    return b;
  if (c) {
    var d = e.$$legacy;
    return (
      /** @type {() => V} */
      function(S, Z) {
        return arguments.length > 0 ? ((!Z || d || g) && c(Z ? b() : S), S) : b();
      }
    );
  }
  var y = !1, $ = (n & bi ? On : oa)(() => (y = !1, b()));
  i && r($);
  var C = (
    /** @type {Effect} */
    R
  );
  return (
    /** @type {() => V} */
    function(S, Z) {
      if (arguments.length > 0) {
        const E = Z ? r($) : i ? Pe(S) : S;
        return m($, E), y = !0, o !== void 0 && (o = E), S;
      }
      return Tt && y || C.f & $t ? $.v : r($);
    }
  );
}
function gl(e) {
  return new wl(e);
}
var Xe, Ce;
class wl {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    de(this, Xe);
    /** @type {Record<string, any>} */
    de(this, Ce);
    var l;
    var n = /* @__PURE__ */ new Map(), a = (o, u) => {
      var f = /* @__PURE__ */ ha(u, !1, !1);
      return n.set(o, f), f;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(o, u) {
          return r(n.get(u) ?? a(u, Reflect.get(o, u)));
        },
        has(o, u) {
          return u === Xr ? !0 : (r(n.get(u) ?? a(u, Reflect.get(o, u))), Reflect.has(o, u));
        },
        set(o, u, f) {
          return m(n.get(u) ?? a(u, f), f), Reflect.set(o, u, f);
        }
      }
    );
    ge(this, Ce, (t.hydrate ? cl : Ha)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((l = t == null ? void 0 : t.props) != null && l.$$host) || t.sync === !1) && Q(), ge(this, Xe, i.$$events);
    for (const o of Object.keys(x(this, Ce)))
      o === "$set" || o === "$destroy" || o === "$on" || Ft(this, o, {
        get() {
          return x(this, Ce)[o];
        },
        /** @param {any} value */
        set(u) {
          x(this, Ce)[o] = u;
        },
        enumerable: !0
      });
    x(this, Ce).$set = /** @param {Record<string, any>} next */
    (o) => {
      Object.assign(i, o);
    }, x(this, Ce).$destroy = () => {
      vl(x(this, Ce));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    x(this, Ce).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    x(this, Xe)[t] = x(this, Xe)[t] || [];
    const a = (...i) => n.call(this, ...i);
    return x(this, Xe)[t].push(a), () => {
      x(this, Xe)[t] = x(this, Xe)[t].filter(
        /** @param {any} fn */
        (i) => i !== a
      );
    };
  }
  $destroy() {
    x(this, Ce).$destroy();
  }
}
Xe = new WeakMap(), Ce = new WeakMap();
let Ua;
typeof HTMLElement == "function" && (Ua = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, n, a) {
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
    this.$$ctor = t, this.$$s = n, a && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, n, a) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const i = this.$$c.$on(t, n);
      this.$$l_u.set(n, i);
    }
    super.addEventListener(t, n, a);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, n, a) {
    if (super.removeEventListener(t, n, a), this.$$c) {
      const i = this.$$l_u.get(n);
      i && (i(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(i) {
        return (l) => {
          const o = document.createElement("slot");
          i !== "default" && (o.name = i), B(l, o);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, a = yl(this);
      for (const i of this.$$s)
        i in a && (i === "default" && !this.$$d.children ? (this.$$d.children = t(i), n.default = !0) : n[i] = t(i));
      for (const i of this.attributes) {
        const l = this.$$g_p(i.name);
        l in this.$$d || (this.$$d[l] = En(l, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = gl({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = el(() => {
        ka(() => {
          var i;
          this.$$r = !0;
          for (const l of Sn(this.$$c)) {
            if (!((i = this.$$p_d[l]) != null && i.reflect)) continue;
            this.$$d[l] = this.$$c[l];
            const o = En(
              l,
              this.$$d[l],
              this.$$p_d,
              "toAttribute"
            );
            o == null ? this.removeAttribute(this.$$p_d[l].attribute || l) : this.setAttribute(this.$$p_d[l].attribute || l, o);
          }
          this.$$r = !1;
        });
      });
      for (const i in this.$$l)
        for (const l of this.$$l[i]) {
          const o = this.$$c.$on(i, l);
          this.$$l_u.set(l, o);
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
  attributeChangedCallback(t, n, a) {
    var i;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = En(t, a, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
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
    return Sn(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function En(e, t, n, a) {
  var l;
  const i = (l = n[e]) == null ? void 0 : l.type;
  if (t = i === "Boolean" && typeof t != "boolean" ? t != null : t, !a || !n[e])
    return t;
  if (a === "toAttribute")
    switch (i) {
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
    switch (i) {
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
function yl(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function $l(e, t, n, a, i, l) {
  let o = class extends Ua {
    constructor() {
      super(e, n, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Sn(t).map(
        (u) => (t[u].attribute || u).toLowerCase()
      );
    }
  };
  return Sn(t).forEach((u) => {
    Ft(o.prototype, u, {
      get() {
        return this.$$c && u in this.$$c ? this.$$c[u] : this.$$d[u];
      },
      set(f) {
        var p;
        f = En(u, f, t), this.$$d[u] = f;
        var c = this.$$c;
        if (c) {
          var h = (p = mt(c, u)) == null ? void 0 : p.get;
          h ? c[u] = f : c.$set({ [u]: f });
        }
      }
    });
  }), a.forEach((u) => {
    Ft(o.prototype, u, {
      get() {
        var f;
        return (f = this.$$c) == null ? void 0 : f[u];
      }
    });
  }), e.element = /** @type {any} */
  o, o;
}
const Tl = {
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
}, kl = {
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
function ql(e, t) {
  const n = t.style;
  n.setProperty("--terminal-bg", e.background), n.setProperty("--terminal-fg", e.foreground), n.setProperty("--terminal-border", e.border), n.setProperty("--terminal-header-bg", e.headerBg), n.setProperty("--terminal-header-fg", e.headerFg), n.setProperty("--terminal-prompt", e.prompt), n.setProperty("--terminal-command", e.command), n.setProperty("--terminal-output", e.output), n.setProperty("--terminal-error", e.error), n.setProperty("--terminal-warning", e.warning), n.setProperty("--terminal-info", e.info), n.setProperty("--terminal-success", e.success), n.setProperty("--terminal-selection", e.selection), n.setProperty("--terminal-cursor", e.cursor);
}
function xl(e, t) {
  return { ...e, ...t };
}
var El = /* @__PURE__ */ W('<div class="terminal-buttons svelte-1oe4pqn"><span class="terminal-button close svelte-1oe4pqn"></span> <span class="terminal-button minimize svelte-1oe4pqn"></span> <span class="terminal-button maximize svelte-1oe4pqn"></span></div>'), Sl = /* @__PURE__ */ W('<button class="control-button svelte-1oe4pqn"> </button>'), Cl = /* @__PURE__ */ W('<button class="control-button svelte-1oe4pqn">↺</button>'), Pl = /* @__PURE__ */ W('<button class="control-button svelte-1oe4pqn"> </button>'), Al = /* @__PURE__ */ W('<div class="terminal-controls svelte-1oe4pqn"><!> <!> <!></div>'), Rl = /* @__PURE__ */ W('<div class="terminal-header svelte-1oe4pqn"><!> <div class="terminal-title svelte-1oe4pqn"> </div> <!></div>'), Bl = /* @__PURE__ */ W('<span class="tab-icon svelte-1oe4pqn"> </span>'), Nl = /* @__PURE__ */ W('<span class="tab-badge svelte-1oe4pqn"> </span>'), Il = /* @__PURE__ */ W('<span class="tab-close svelte-1oe4pqn" role="button" tabindex="0">×</span>'), Ol = /* @__PURE__ */ W('<button><!> <span class="tab-title svelte-1oe4pqn"> </span> <!> <!></button>'), Dl = /* @__PURE__ */ W('<button class="terminal-tab tab-add svelte-1oe4pqn">+</button>'), Ll = /* @__PURE__ */ W('<div class="terminal-tabs svelte-1oe4pqn"><!> <!></div>'), Fl = (e, t) => {
  (e.key === "Enter" || e.key === " ") && t();
}, Ml = /* @__PURE__ */ W("<div><!></div>"), Hl = /* @__PURE__ */ W('<div class="terminal-table-row svelte-1oe4pqn"></div>'), Wl = /* @__PURE__ */ W('<div><div class="terminal-table svelte-1oe4pqn"></div></div>'), jl = /* @__PURE__ */ W('<div class="rich-text-segment svelte-1oe4pqn"><!></div>'), Ul = /* @__PURE__ */ W('<span class="rich-text-segment svelte-1oe4pqn"><!></span>'), zl = /* @__PURE__ */ W('<span class="typing-cursor svelte-1oe4pqn">▊</span>'), Yl = /* @__PURE__ */ W('<div><pre class="svelte-1oe4pqn"><!><!><!></pre></div>'), Vl = /* @__PURE__ */ W('<div class="terminal-cursor svelte-1oe4pqn">▊</div>'), Gl = /* @__PURE__ */ W('<span class="tab-icon svelte-1oe4pqn"> </span>'), Kl = /* @__PURE__ */ W('<span class="tab-badge svelte-1oe4pqn"> </span>'), Jl = /* @__PURE__ */ W('<span class="tab-close svelte-1oe4pqn" role="button" tabindex="0">×</span>'), Xl = /* @__PURE__ */ W('<button><!> <span class="tab-title svelte-1oe4pqn"> </span> <!> <!></button>'), Zl = /* @__PURE__ */ W('<button class="terminal-tab tab-add svelte-1oe4pqn">+</button>'), Ql = /* @__PURE__ */ W('<div class="terminal-tabs terminal-tabs-bottom svelte-1oe4pqn"><!> <!></div>'), eo = /* @__PURE__ */ W('<div class="terminal svelte-1oe4pqn"><!> <!> <div class="terminal-content svelte-1oe4pqn" role="button" aria-label="Terminal output - click to skip typing animation" tabindex="0"><!> <!></div> <!></div>');
const to = {
  hash: "svelte-1oe4pqn",
  code: `:host {display:block;font-family:'Cascadia Code', 'Fira Code', 'Monaco', 'Consolas', monospace;font-size:14px;line-height:1.5;}.terminal.svelte-1oe4pqn {width:100%;height:100%;min-height:300px;background:var(--terminal-bg);color:var(--terminal-fg);border:1px solid var(--terminal-border);border-radius:8px;overflow:hidden;display:flex;flex-direction:column;transition:all 0.3s ease;}.terminal-header.svelte-1oe4pqn {background:var(--terminal-header-bg);color:var(--terminal-header-fg);padding:12px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--terminal-border);}.terminal-buttons.svelte-1oe4pqn {display:flex;gap:8px;}.terminal-button.svelte-1oe4pqn {width:12px;height:12px;border-radius:50%;display:inline-block;}.terminal-button.close.svelte-1oe4pqn {background:#ff5f56;}.terminal-button.minimize.svelte-1oe4pqn {background:#ffbd2e;}.terminal-button.maximize.svelte-1oe4pqn {background:#27c93f;}.terminal-title.svelte-1oe4pqn {flex:1;text-align:center;font-weight:500;}.terminal-controls.svelte-1oe4pqn {display:flex;gap:8px;}.control-button.svelte-1oe4pqn {background:transparent;color:var(--terminal-header-fg);border:1px solid var(--terminal-border);padding:4px 8px;border-radius:4px;cursor:pointer;font-size:12px;transition:all 0.2s;}.control-button.svelte-1oe4pqn:hover:not(:disabled) {background:var(--terminal-border);color:var(--terminal-fg);}.control-button.svelte-1oe4pqn:disabled {opacity:0.5;cursor:not-allowed;}.terminal-content.svelte-1oe4pqn {flex:1;padding:16px;overflow-y:auto;font-family:inherit;}.terminal-line.svelte-1oe4pqn {margin:4px 0;white-space:pre-wrap;word-break:break-word;}.terminal-line.svelte-1oe4pqn pre:where(.svelte-1oe4pqn) {margin:0;font-family:inherit;display:block;white-space:pre-wrap;}.step-command.svelte-1oe4pqn {color:var(--terminal-command);font-weight:bold;}.step-output.svelte-1oe4pqn {color:var(--terminal-output);}.step-error.svelte-1oe4pqn {color:var(--terminal-error);}.step-warning.svelte-1oe4pqn {color:var(--terminal-warning);}.step-info.svelte-1oe4pqn {color:var(--terminal-info);}.step-success.svelte-1oe4pqn {color:var(--terminal-success);}.terminal-cursor.svelte-1oe4pqn {display:inline-block;color:var(--terminal-cursor);
    animation: svelte-1oe4pqn-blink 1s infinite;}.typing-cursor.svelte-1oe4pqn {display:inline-block;color:var(--terminal-cursor);
    animation: svelte-1oe4pqn-blink 1s infinite;margin-left:2px;}

  @keyframes svelte-1oe4pqn-blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }

  /* Link styles */.terminal-link.svelte-1oe4pqn {color:inherit;text-decoration:none !important; /* Remove default underline */border-bottom:1px dashed currentColor !important;transition:border-bottom-style 0.2s ease;cursor:pointer;display:inline-block; /* Ensure the element is interactive */}.terminal-link.svelte-1oe4pqn:hover {border-bottom-style:solid !important;}.terminal-link.svelte-1oe4pqn:active {opacity:0.8;}

  /* Override link colors for different step types */.step-output.svelte-1oe4pqn .terminal-link:where(.svelte-1oe4pqn) {color:var(--terminal-output);}.step-error.svelte-1oe4pqn .terminal-link:where(.svelte-1oe4pqn) {color:var(--terminal-error);}.step-warning.svelte-1oe4pqn .terminal-link:where(.svelte-1oe4pqn) {color:var(--terminal-warning);}.step-info.svelte-1oe4pqn .terminal-link:where(.svelte-1oe4pqn) {color:var(--terminal-info);}.step-success.svelte-1oe4pqn .terminal-link:where(.svelte-1oe4pqn) {color:var(--terminal-success);}.step-command.svelte-1oe4pqn .terminal-link:where(.svelte-1oe4pqn) {color:var(--terminal-command);}.terminal-content.svelte-1oe4pqn::-webkit-scrollbar {width:8px;}.terminal-content.svelte-1oe4pqn::-webkit-scrollbar-track {background:var(--terminal-bg);}.terminal-content.svelte-1oe4pqn::-webkit-scrollbar-thumb {background:var(--terminal-border);border-radius:4px;}.terminal-content.svelte-1oe4pqn::-webkit-scrollbar-thumb:hover {background:var(--terminal-header-fg);}

  /* Tab styles */.terminal-tabs.svelte-1oe4pqn {display:flex;background:var(--terminal-header-bg);border-bottom:1px solid var(--terminal-border);gap:4px;overflow-x:auto;align-items:center;}.terminal-tabs-bottom.svelte-1oe4pqn {border-bottom:none;border-top:1px solid var(--terminal-border);}.terminal-tab.svelte-1oe4pqn {display:flex;align-items:center;gap:6px;padding:8px 12px;background:transparent;color:var(--terminal-header-fg);border:none;border-top:2px solid transparent;cursor:pointer;font-family:inherit;font-size:13px;transition:all 0.2s;white-space:nowrap;position:relative;}.terminal-tabs-bottom.svelte-1oe4pqn .terminal-tab:where(.svelte-1oe4pqn) {border-top:none;border-bottom:2px solid transparent;}.terminal-tab.svelte-1oe4pqn:hover {background:rgba(255, 255, 255, 0.05);}.terminal-tab.active.svelte-1oe4pqn {background:var(--terminal-bg);border-top-color:var(--terminal-command);}.terminal-tabs-bottom.svelte-1oe4pqn .terminal-tab.active:where(.svelte-1oe4pqn) {border-top-color:transparent;border-bottom-color:var(--terminal-command);}.tab-icon.svelte-1oe4pqn {font-size:14px;}.tab-title.svelte-1oe4pqn {flex:1;}.tab-badge.svelte-1oe4pqn {padding:2px 6px;background:var(--terminal-command);color:var(--terminal-bg);border-radius:10px;font-size:11px;font-weight:bold;min-width:18px;text-align:center;}.tab-close.svelte-1oe4pqn {margin-left:4px;padding:0 4px;background:transparent;border:none;color:var(--terminal-header-fg);cursor:pointer;font-size:18px;line-height:1;opacity:0.6;transition:opacity 0.2s;}.tab-close.svelte-1oe4pqn:hover {opacity:1;color:var(--terminal-error);}.tab-add.svelte-1oe4pqn {padding:8px 16px;font-weight:bold;opacity:0.7;}.tab-add.svelte-1oe4pqn:hover {opacity:1;background:rgba(255, 255, 255, 0.1);}

  /* Tab status indicators */.tab-status-running.svelte-1oe4pqn .tab-icon:where(.svelte-1oe4pqn)::after {content:'●';color:var(--terminal-warning);position:absolute;top:6px;left:8px;font-size:8px;
    animation: svelte-1oe4pqn-pulse 1.5s infinite;}.tab-status-error.svelte-1oe4pqn .tab-icon:where(.svelte-1oe4pqn)::after {content:'●';color:var(--terminal-error);position:absolute;top:6px;left:8px;font-size:8px;}.tab-status-success.svelte-1oe4pqn .tab-icon:where(.svelte-1oe4pqn)::after {content:'●';color:var(--terminal-success);position:absolute;top:6px;left:8px;font-size:8px;}

  @keyframes svelte-1oe4pqn-pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  /* Scrollbar for tabs */.terminal-tabs.svelte-1oe4pqn::-webkit-scrollbar {height:4px;}.terminal-tabs.svelte-1oe4pqn::-webkit-scrollbar-track {background:transparent;}.terminal-tabs.svelte-1oe4pqn::-webkit-scrollbar-thumb {background:var(--terminal-border);border-radius:2px;}

  /* Rich text segment styling */.rich-text-segment.svelte-1oe4pqn {display:inline;}

  /* Ensure rich text inherits terminal font properties */.terminal-line.svelte-1oe4pqn .rich-text-segment:where(.svelte-1oe4pqn) {font-family:inherit;font-size:inherit;line-height:inherit;}

  /* Table layout styling */.terminal-table.svelte-1oe4pqn {display:block;width:100%;font-family:inherit;margin:0;padding:0;}.terminal-table-row.svelte-1oe4pqn {display:grid !important;grid-template-columns:60px 100px 180px 1fr !important;gap:16px;min-height:1.5em;align-items:baseline;font-family:inherit;}.terminal-table-cell.svelte-1oe4pqn {overflow:visible;}

  /* Semantic column styling with fixed positioning */.terminal-table-row.svelte-1oe4pqn .terminal-table-cell.col-position:where(.svelte-1oe4pqn) {grid-column:1;text-align:right;white-space:nowrap;}.terminal-table-row.svelte-1oe4pqn .terminal-table-cell.col-type:where(.svelte-1oe4pqn) {grid-column:2;text-align:right;white-space:nowrap;}.terminal-table-row.svelte-1oe4pqn .terminal-table-cell.col-rule:where(.svelte-1oe4pqn) {grid-column:3;white-space:nowrap;}.terminal-table-row.svelte-1oe4pqn .terminal-table-cell.col-message:where(.svelte-1oe4pqn) {grid-column:4;white-space:normal;word-break:break-word;}`
};
function no(e, t) {
  ta(t, !0), pl(e, to);
  let n = ie(t, "theme", 7, "dark"), a = ie(t, "session", 23, () => []), i = ie(t, "autoplay", 7, !1), l = ie(t, "playbackSpeed", 7, 1), o = ie(t, "showHeader", 7), u = ie(t, "title", 7, "Terminal"), f = ie(t, "colors", 23, () => ({})), c = ie(t, "typingSpeed", 7, 40), h = ie(t, "enableTyping", 7, !0), p = ie(t, "showPlayButton", 7), g = ie(t, "showResetButton", 7), b = ie(t, "showThemeToggle", 7), d = ie(t, "showWindowButtons", 7), y = ie(t, "tabs", 23, () => []), $ = ie(t, "activeTab", 7, 0), C = ie(t, "showTabs", 7, !1), I = ie(t, "allowTabClose", 7, !0), S = ie(t, "allowTabAdd", 7, !1), Z = ie(t, "tabBarPosition", 7, "top"), E, T, O = /* @__PURE__ */ ee(Pe(n())), k = /* @__PURE__ */ ee(Pe(y())), ue = /* @__PURE__ */ ee(Pe($() || 0)), Be = /* @__PURE__ */ ee(Pe(/* @__PURE__ */ new Map())), ne = /* @__PURE__ */ ye(() => C() && r(k) && r(k).length > 0 ? r(k)[r(ue)] || r(k)[0] : null), P = /* @__PURE__ */ ye(() => r(ne) ? r(ne).session : a()), kt = /* @__PURE__ */ ye(() => r(ne) ? r(ne).title : u());
  function Ve(s, v = !0, w = "") {
    return console.log(`[parseBooleanProp] ${w}:`, {
      raw: s,
      type: typeof s,
      isUndefined: s === void 0,
      isNull: s === null,
      defaultValue: v
    }), s == null ? v : typeof s == "boolean" ? s : typeof s == "string" ? s.toLowerCase() === "false" ? !1 : (s.toLowerCase() === "true", !0) : v;
  }
  console.log("[Terminal Props] Raw values:", {
    showPlayButton: p(),
    showResetButton: g(),
    showThemeToggle: b(),
    showWindowButtons: d(),
    showHeader: o()
  });
  let Ge = /* @__PURE__ */ ye(() => Ve(p(), !0, "showPlayButton")), vt = /* @__PURE__ */ ye(() => Ve(g(), !0, "showResetButton")), Vt = /* @__PURE__ */ ye(() => Ve(b(), !0, "showThemeToggle")), hn = /* @__PURE__ */ ye(() => Ve(d(), !0, "showWindowButtons")), Gt = /* @__PURE__ */ ye(() => r(Ge) || r(vt) || r(Vt));
  Me(() => {
    console.log("[Terminal Computed] Button visibility:", {
      showPlayButtonComputed: r(Ge),
      showResetButtonComputed: r(vt),
      showThemeToggleComputed: r(Vt),
      showWindowButtonsComputed: r(hn),
      hasControlButtons: r(Gt)
    });
  });
  let pn = /* @__PURE__ */ ye(() => Ve(o(), !0)), V = /* @__PURE__ */ ee(0), M = /* @__PURE__ */ ee(!1), G = /* @__PURE__ */ ee(Pe([])), fe = /* @__PURE__ */ ee(-1), Ne = /* @__PURE__ */ ee(""), Kt = /* @__PURE__ */ ee(!1), Fn = /* @__PURE__ */ ee(!1), rt = /* @__PURE__ */ ee(!0), Mn = /* @__PURE__ */ ee(Pe(i())), ce = null, re = null, yr = -1, _n = "", $r = /* @__PURE__ */ ye(() => xl(r(O) === "dark" ? Tl : kl, f()));
  Me(() => {
    m(O, n());
  }), Me(() => {
    m(k, y(), !0);
  }), Me(() => {
    E && r($r) && ql(r($r), E);
  }), Me(() => {
    const s = r(G).length;
    T && s > 0 && ll().then(() => {
      T && (T.scrollTop = T.scrollHeight);
    });
  });
  function bn() {
    r(M) || !r(P) || r(V) >= r(P).length || (m(M, !0), qt());
  }
  function qt() {
    if (!r(P) || r(V) >= r(P).length) {
      m(M, !1), ce = null;
      return;
    }
    const s = r(P)[r(V)], v = (s.delay || 1e3) / l();
    ce = setTimeout(
      () => {
        if (!r(P) || !r(rt)) {
          if (!r(rt) && r(M)) {
            ce = null;
            const w = () => {
              r(rt) && r(M) ? qt() : r(M) && setTimeout(w, 100);
            };
            setTimeout(w, 100);
          } else
            m(M, !1), ce = null;
          return;
        }
        s.type === "command" && h() && !s.skipTyping ? za(s) : (m(G, [...r(G), s], !0), yn(V), r(V) < r(P).length && r(M) ? qt() : (m(M, !1), ce = null));
      },
      v
    );
  }
  function za(s) {
    m(fe, r(G).length, !0), m(Ne, ""), m(G, [...r(G), { ...s, content: "" }], !0);
    const v = Va(s.content);
    let w = 0;
    const j = 1e3 / (s.typingSpeed || c());
    function L() {
      if (!r(M) || !r(P) || r(fe) < 0) {
        re = null, m(fe, -1), m(Ne, "");
        return;
      }
      if (!r(rt)) {
        re = null;
        const A = () => {
          r(rt) && r(M) && r(fe) >= 0 ? L() : r(M) && r(fe) >= 0 && setTimeout(A, 100);
        };
        setTimeout(A, 100);
        return;
      }
      if (w < v.length) {
        m(Ne, r(Ne) + v[w]), m(G, r(G).map((D, ae) => ae === r(fe) ? { ...s, content: r(Ne) } : D), !0), w++;
        const A = j * 0.2, te = j + (Math.random() - 0.5) * A;
        re = setTimeout(
          () => {
            requestAnimationFrame(() => L());
          },
          te
        );
      } else
        m(fe, -1), m(Ne, ""), re = null, yn(V), r(V) < r(P).length && r(M) ? qt() : m(M, !1);
    }
    requestAnimationFrame(() => L());
  }
  function Jt() {
    ce && (clearTimeout(ce), ce = null), re && (clearTimeout(re), re = null), m(V, 0), m(G, [], !0), m(M, !1), m(fe, -1), m(Ne, "");
  }
  function Ya() {
    if (r(M))
      m(M, !1), ce && (clearTimeout(ce), ce = null), re && (clearTimeout(re), re = null);
    else {
      if (!r(P) || r(P).length === 0)
        return;
      r(V) >= r(P).length ? (Jt(), setTimeout(() => bn(), 10)) : bn();
    }
  }
  function Tr(s) {
    return `step-${s}`;
  }
  function Hn(s) {
    return Array.isArray(s);
  }
  function Va(s) {
    return typeof s == "string" ? s : s.map((v) => v.text).join("");
  }
  function Ga(s) {
    return Hn(s) ? s.some((v) => v.isTableRow || v.tableColumn) : !1;
  }
  function Ka(s) {
    const v = [];
    let w = [];
    for (const K of s)
      K.isTableRow && w.length > 0 ? (v.push([...w]), w = [K]) : w.push(K);
    return w.length > 0 && v.push([...w]), v;
  }
  function Ja(s) {
    if (!s) return !1;
    const v = ["javascript:", "data:", "vbscript:"], w = s.toLowerCase().trim();
    if (v.some((A) => w.startsWith(A)))
      return !1;
    const j = ["http://", "https://", "mailto:", "tel:", "//", "/"].some((A) => w.startsWith(A)), L = w.includes(":");
    return j || !L;
  }
  function Wn(s) {
    const v = s.text.replace(/\n/g, "<br>");
    if (s.url && Ja(s.url)) {
      const w = s.target || "_blank", K = w === "_blank" ? "noopener noreferrer" : "";
      let j = jn(s, !0);
      const L = "color: white; text-decoration: none; border-bottom: 1px dashed white; cursor: pointer; display: inline-block; padding-bottom: 1px;";
      return j = j ? `${j}; ${L}` : L, `<a href="${s.url}" target="${w}" rel="${K}" style="${j}" class="terminal-link" onmouseover="this.style.borderBottomStyle='solid'" onmouseout="this.style.borderBottomStyle='dashed'">${v}</a>`;
    }
    return v;
  }
  function jn(s, v = !1) {
    const w = [];
    return s.color && w.push(`color: ${s.color}`), s.backgroundColor && w.push(`background-color: ${s.backgroundColor}`), s.fontWeight && w.push(`font-weight: ${s.fontWeight}`), !v && s.textDecoration && w.push(`text-decoration: ${s.textDecoration}`), s.fontStyle && w.push(`font-style: ${s.fontStyle}`), s.marginTop && w.push(`margin-top: ${s.marginTop}`), s.marginBottom && w.push(`margin-bottom: ${s.marginBottom}`), s.marginLeft && w.push(`margin-left: ${s.marginLeft}`), s.marginRight && w.push(`margin-right: ${s.marginRight}`), w.join("; ");
  }
  function kr() {
    r(fe) >= 0 && r(fe) < r(G).length && (re && (clearTimeout(re), re = null), m(
      G,
      r(G).map((s, v) => v === r(fe) ? {
        ...s,
        content: r(P)[r(V)].content
      } : s),
      !0
    ), m(fe, -1), m(Ne, ""), yn(V), r(V) < r(P).length && r(M) ? qt() : m(M, !1));
  }
  let mn = null;
  Me(() => {
    if (E && typeof IntersectionObserver < "u") {
      const s = new IntersectionObserver(
        (v) => {
          v.forEach((w) => {
            m(Fn, w.isIntersecting, !0);
          });
        },
        { threshold: 0.1 }
        // Trigger when 10% visible
      );
      return s.observe(E), () => {
        s && s.disconnect();
      };
    }
  }), Me(() => {
    const s = () => {
      m(rt, !0);
    }, v = () => {
      m(rt, !1);
    };
    return m(rt, document.hasFocus(), !0), window.addEventListener("focus", s), window.addEventListener("blur", v), () => {
      window.removeEventListener("focus", s), window.removeEventListener("blur", v);
    };
  }), Me(() => {
    i() !== r(Mn) && (!r(Mn) && i() && m(Kt, !1), m(Mn, i()));
  }), Me(() => {
    i() && r(Fn) && !r(Kt) && !r(M) && r(P) && r(P).length > 0 && r(V) === 0 && (m(Kt, !0), setTimeout(() => bn(), 300));
  }), Me(() => {
    if (E) {
      if (C() && r(k) && r(k).length > 0) {
        const v = r(k)[r(ue)] || r(k)[0];
        v && (_n = v.id);
      }
      const s = () => {
        const v = r(P);
        !C() && v && v.length !== yr && (yr = v.length, (r(G).length > 0 || r(V) > 0) && (Jt(), m(
          Kt,
          !1
          // Reset autoplay flag for new session
        ))), C() && r(ne) && r(ne).id !== _n && !r(Be).has(r(ne).id) && (_n = r(ne).id, r(Be).has(r(ne).id) || m(Kt, !1));
      };
      s(), mn = setInterval(s, 500);
    }
    return () => {
      mn !== null && (clearInterval(mn), mn = null), ce && (clearTimeout(ce), ce = null), re && (clearTimeout(re), re = null);
    };
  });
  function Xa() {
    const s = r(O) === "dark" ? "light" : "dark";
    m(O, s, !0), E == null || E.dispatchEvent(new CustomEvent("theme-change", { detail: s }));
  }
  function Za() {
    r(ne) && r(Be).set(r(ne).id, {
      currentStepIndex: r(V),
      isPlaying: r(M),
      displayedSteps: [...r(G)],
      typingStepIndex: r(fe),
      typedContent: r(Ne),
      lastUpdateTime: Date.now()
    });
  }
  function Qa(s) {
    const v = r(Be).get(s);
    if (v) {
      const w = Date.now() - v.lastUpdateTime;
      if (m(V, v.currentStepIndex, !0), m(M, v.isPlaying, !0), m(G, [...v.displayedSteps], !0), m(fe, v.typingStepIndex, !0), m(Ne, v.typedContent, !0), v.isPlaying && r(P) && r(V) < r(P).length) {
        let K = r(V), j = 0;
        for (; K < r(P).length && j < w; ) {
          const L = r(P)[K], A = (L.delay || 1e3) / l();
          if (j + A <= w)
            m(G, [...r(G), L], !0), K++, j += A;
          else
            break;
        }
        m(V, K, !0), r(V) < r(P).length ? qt() : m(M, !1);
      }
    } else
      r(Be).has(s) || (Jt(), i() && r(Fn) && r(P) && r(P).length > 0 && setTimeout(() => bn(), 300));
  }
  function Un(s) {
    if (s === r(ue) || !r(k) || s < 0 || s >= r(k).length) return;
    Za(), ce && (clearTimeout(ce), ce = null), re && (clearTimeout(re), re = null), m(ue, s, !0);
    const v = r(k)[s];
    v && (Qa(v.id), _n = v.id), E == null || E.dispatchEvent(new CustomEvent("tab-change", { detail: { index: s, tab: v } }));
  }
  function gn(s) {
    if (!r(k) || r(k).length === 0) return;
    const v = r(k)[s];
    if (!(v.closable !== !1 && I())) return;
    v && r(Be).delete(v.id);
    const K = s === r(ue);
    if (m(k, r(k).filter((j, L) => L !== s), !0), E == null || E.dispatchEvent(new CustomEvent("tab-close", { detail: { index: s, tab: v } })), K)
      if (r(k).length > 0) {
        const j = s >= r(k).length ? r(k).length - 1 : s;
        m(
          ue,
          -1
          // Temporarily set to invalid index to force switchTab to work
        ), Un(j);
      } else
        m(ue, 0), Jt(), m(G, [], !0);
    else s < r(ue) && yn(ue, -1);
  }
  function qr() {
    S() && (E == null || E.dispatchEvent(new CustomEvent("tab-add", { detail: {} })));
  }
  function xr(s) {
    return s ? `tab-status-${s}` : "";
  }
  var wn = eo(), Er = J(wn);
  {
    var ei = (s) => {
      var v = Rl(), w = J(v);
      {
        var K = (D) => {
          var ae = El();
          B(D, ae);
        };
        X(w, (D) => {
          r(hn) && D(K);
        });
      }
      var j = se(w, 2), L = J(j, !0);
      Y(j);
      var A = se(j, 2);
      {
        var te = (D) => {
          var ae = Al(), we = J(ae);
          {
            var me = (U) => {
              var _ = Sl();
              _.__click = Ya;
              var q = J(_, !0);
              Y(_), le(() => {
                _.disabled = !r(P) || r(P).length === 0, Oe(q, r(M) ? "⏸" : "▶");
              }), B(U, _);
            };
            X(we, (U) => {
              r(Ge) && U(me);
            });
          }
          var xe = se(we, 2);
          {
            var Ie = (U) => {
              var _ = Cl();
              _.__click = Jt, le(() => _.disabled = r(G).length === 0), B(U, _);
            };
            X(xe, (U) => {
              r(vt) && U(Ie);
            });
          }
          var Ke = se(xe, 2);
          {
            var Ee = (U) => {
              var _ = Pl();
              _.__click = Xa;
              var q = J(_, !0);
              Y(_), le(() => Oe(q, r(O) === "dark" ? "☀" : "🌙")), B(U, _);
            };
            X(Ke, (U) => {
              r(Vt) && U(Ee);
            });
          }
          Y(ae), B(D, ae);
        };
        X(A, (D) => {
          r(Gt) && D(te);
        });
      }
      Y(v), le(() => Oe(L, r(kt))), B(s, v);
    };
    X(Er, (s) => {
      r(pn) && s(ei);
    });
  }
  var Sr = se(Er, 2);
  {
    var ti = (s) => {
      var v = Ll(), w = J(v);
      At(w, 17, () => r(k), Pt, (L, A, te) => {
        var D = Ol();
        D.__click = () => Un(te);
        var ae = J(D);
        {
          var we = (_) => {
            var q = Bl(), z = J(q, !0);
            Y(q), le(() => Oe(z, r(A).icon)), B(_, q);
          };
          X(ae, (_) => {
            r(A).icon && _(we);
          });
        }
        var me = se(ae, 2), xe = J(me, !0);
        Y(me);
        var Ie = se(me, 2);
        {
          var Ke = (_) => {
            var q = Nl(), z = J(q, !0);
            Y(q), le(() => Oe(z, r(A).badge)), B(_, q);
          };
          X(Ie, (_) => {
            r(A).badge !== void 0 && _(Ke);
          });
        }
        var Ee = se(Ie, 2);
        {
          var U = (_) => {
            var q = Il();
            q.__click = (z) => {
              z.stopPropagation(), gn(te);
            }, q.__keydown = (z) => {
              (z.key === "Enter" || z.key === " ") && (z.stopPropagation(), z.preventDefault(), gn(te));
            }, B(_, q);
          };
          X(Ee, (_) => {
            r(A).closable !== !1 && I() && r(k).length > 1 && _(U);
          });
        }
        Y(D), le(
          (_) => {
            nn(D, 1, `terminal-tab ${te === r(ue) ? "active" : ""} ${_ ?? ""}`, "svelte-1oe4pqn"), Oe(xe, r(A).title);
          },
          [() => xr(r(A).status)]
        ), B(L, D);
      });
      var K = se(w, 2);
      {
        var j = (L) => {
          var A = Dl();
          A.__click = qr, B(L, A);
        };
        X(K, (L) => {
          S() && L(j);
        });
      }
      Y(v), B(s, v);
    };
    X(Sr, (s) => {
      C() && r(k) && r(k).length > 0 && Z() === "top" && s(ti);
    });
  }
  var xt = se(Sr, 2);
  xt.__click = kr, xt.__keydown = [Fl, kr];
  var Cr = J(xt);
  At(Cr, 17, () => r(G), Pt, (s, v, w) => {
    var K = tn(), j = en(K);
    {
      var L = (te) => {
        var D = Wl(), ae = J(D);
        At(ae, 21, () => Ka(r(v).content), Pt, (we, me) => {
          const xe = /* @__PURE__ */ ye(() => r(me)[0]), Ie = /* @__PURE__ */ ye(() => {
            var U;
            return ((U = r(xe)) == null ? void 0 : U.columnGap) || "16px";
          }), Ke = /* @__PURE__ */ ye(() => {
            var U;
            return ((U = r(xe)) == null ? void 0 : U.rowGap) || "4px";
          });
          var Ee = Hl();
          At(Ee, 21, () => r(me), Pt, (U, _) => {
            var q = Ml(), z = J(q);
            Tn(z, () => Wn(r(_))), Y(q), le(() => {
              nn(q, 1, `terminal-table-cell ${r(_).tableColumn ? `col-${r(_).tableColumn}` : ""}`, "svelte-1oe4pqn"), Rt(q, `${r(_).color ? `color: ${r(_).color};` : ""}${r(_).backgroundColor ? `background-color: ${r(_).backgroundColor};` : ""}${r(_).fontWeight ? `font-weight: ${r(_).fontWeight};` : ""}${r(_).fontStyle ? `font-style: ${r(_).fontStyle};` : ""}${r(_).width ? `width: ${r(_).width};` : ""}${r(_).align ? `text-align: ${r(_).align};` : ""}`);
            }), B(U, q);
          }), Y(Ee), le(() => Rt(Ee, `gap: ${r(Ie) ?? ""}; margin-bottom: ${r(Ke) ?? ""};`)), B(we, Ee);
        }), Y(ae), Y(D), le(
          (we) => {
            nn(D, 1, `terminal-line ${we ?? ""}`, "svelte-1oe4pqn"), Rt(D, `${r(v).marginTop ? `margin-top: ${r(v).marginTop};` : ""}${r(v).marginBottom ? `margin-bottom: ${r(v).marginBottom};` : ""}`);
          },
          [() => Tr(r(v).type)]
        ), B(te, D);
      }, A = (te) => {
        var D = Yl(), ae = J(D), we = J(ae);
        {
          var me = (_) => {
            var q = Hr();
            le(() => Oe(q, `${r(v).prompt || "$"} `)), B(_, q);
          };
          X(we, (_) => {
            r(v).type === "command" && _(me);
          });
        }
        var xe = se(we);
        {
          var Ie = (_) => {
            var q = Hr();
            le(() => Oe(q, r(Ne))), B(_, q);
          }, Ke = (_) => {
            var q = tn(), z = en(q);
            {
              var li = (Et) => {
                var Xt = tn(), zn = en(Xt);
                At(zn, 17, () => r(v).content, Pt, (si, Zt) => {
                  var Pr = tn(), ui = en(Pr);
                  {
                    var fi = (St) => {
                      var Je = jl(), Yn = J(Je);
                      Tn(Yn, () => Wn(r(Zt))), Y(Je), le((Vn) => Rt(Je, Vn), [() => jn(r(Zt))]), B(St, Je);
                    }, ci = (St) => {
                      var Je = Ul(), Yn = J(Je);
                      Tn(Yn, () => Wn(r(Zt))), Y(Je), le((Vn) => Rt(Je, Vn), [() => jn(r(Zt))]), B(St, Je);
                    };
                    X(ui, (St) => {
                      r(Zt).display === "block" ? St(fi) : St(ci, !1);
                    });
                  }
                  B(si, Pr);
                }), B(Et, Xt);
              }, oi = (Et) => {
                var Xt = tn(), zn = en(Xt);
                Tn(zn, () => r(v).content.replace(/\n/g, "<br>")), B(Et, Xt);
              };
              X(
                z,
                (Et) => {
                  Hn(r(v).content) ? Et(li) : Et(oi, !1);
                },
                !0
              );
            }
            B(_, q);
          };
          X(xe, (_) => {
            w === r(fe) ? _(Ie) : _(Ke, !1);
          });
        }
        var Ee = se(xe);
        {
          var U = (_) => {
            var q = zl();
            B(_, q);
          };
          X(Ee, (_) => {
            w === r(fe) && _(U);
          });
        }
        Y(ae), Y(D), le(
          (_) => {
            nn(D, 1, `terminal-line ${_ ?? ""}`, "svelte-1oe4pqn"), Rt(D, `${r(v).marginTop ? `margin-top: ${r(v).marginTop};` : ""}${r(v).marginBottom ? `margin-bottom: ${r(v).marginBottom};` : ""}`);
          },
          [() => Tr(r(v).type)]
        ), B(te, D);
      };
      X(j, (te) => {
        Hn(r(v).content) && Ga(r(v).content) ? te(L) : te(A, !1);
      });
    }
    B(s, K);
  });
  var ni = se(Cr, 2);
  {
    var ri = (s) => {
      var v = Vl();
      B(s, v);
    };
    X(ni, (s) => {
      r(M) && r(fe) === -1 && s(ri);
    });
  }
  Y(xt), jr(xt, (s) => T = s, () => T);
  var ai = se(xt, 2);
  {
    var ii = (s) => {
      var v = Ql(), w = J(v);
      At(w, 17, () => r(k), Pt, (L, A, te) => {
        var D = Xl();
        D.__click = () => Un(te);
        var ae = J(D);
        {
          var we = (_) => {
            var q = Gl(), z = J(q, !0);
            Y(q), le(() => Oe(z, r(A).icon)), B(_, q);
          };
          X(ae, (_) => {
            r(A).icon && _(we);
          });
        }
        var me = se(ae, 2), xe = J(me, !0);
        Y(me);
        var Ie = se(me, 2);
        {
          var Ke = (_) => {
            var q = Kl(), z = J(q, !0);
            Y(q), le(() => Oe(z, r(A).badge)), B(_, q);
          };
          X(Ie, (_) => {
            r(A).badge !== void 0 && _(Ke);
          });
        }
        var Ee = se(Ie, 2);
        {
          var U = (_) => {
            var q = Jl();
            q.__click = (z) => {
              z.stopPropagation(), gn(te);
            }, q.__keydown = (z) => {
              (z.key === "Enter" || z.key === " ") && (z.stopPropagation(), z.preventDefault(), gn(te));
            }, B(_, q);
          };
          X(Ee, (_) => {
            r(A).closable !== !1 && I() && r(k).length > 1 && _(U);
          });
        }
        Y(D), le(
          (_) => {
            nn(D, 1, `terminal-tab ${te === r(ue) ? "active" : ""} ${_ ?? ""}`, "svelte-1oe4pqn"), Oe(xe, r(A).title);
          },
          [() => xr(r(A).status)]
        ), B(L, D);
      });
      var K = se(w, 2);
      {
        var j = (L) => {
          var A = Zl();
          A.__click = qr, B(L, A);
        };
        X(K, (L) => {
          S() && L(j);
        });
      }
      Y(v), B(s, v);
    };
    X(ai, (s) => {
      C() && r(k) && r(k).length > 0 && Z() === "bottom" && s(ii);
    });
  }
  return Y(wn), jr(wn, (s) => E = s, () => E), B(e, wn), na({
    get theme() {
      return n();
    },
    set theme(s = "dark") {
      n(s), Q();
    },
    get session() {
      return a();
    },
    set session(s = []) {
      a(s), Q();
    },
    get autoplay() {
      return i();
    },
    set autoplay(s = !1) {
      i(s), Q();
    },
    get playbackSpeed() {
      return l();
    },
    set playbackSpeed(s = 1) {
      l(s), Q();
    },
    get showHeader() {
      return o();
    },
    set showHeader(s) {
      o(s), Q();
    },
    get title() {
      return u();
    },
    set title(s = "Terminal") {
      u(s), Q();
    },
    get colors() {
      return f();
    },
    set colors(s = {}) {
      f(s), Q();
    },
    get typingSpeed() {
      return c();
    },
    set typingSpeed(s = 40) {
      c(s), Q();
    },
    get enableTyping() {
      return h();
    },
    set enableTyping(s = !0) {
      h(s), Q();
    },
    get showPlayButton() {
      return p();
    },
    set showPlayButton(s) {
      p(s), Q();
    },
    get showResetButton() {
      return g();
    },
    set showResetButton(s) {
      g(s), Q();
    },
    get showThemeToggle() {
      return b();
    },
    set showThemeToggle(s) {
      b(s), Q();
    },
    get showWindowButtons() {
      return d();
    },
    set showWindowButtons(s) {
      d(s), Q();
    },
    get tabs() {
      return y();
    },
    set tabs(s = []) {
      y(s), Q();
    },
    get activeTab() {
      return $();
    },
    set activeTab(s = 0) {
      $(s), Q();
    },
    get showTabs() {
      return C();
    },
    set showTabs(s = !1) {
      C(s), Q();
    },
    get allowTabClose() {
      return I();
    },
    set allowTabClose(s = !0) {
      I(s), Q();
    },
    get allowTabAdd() {
      return S();
    },
    set allowTabAdd(s = !1) {
      S(s), Q();
    },
    get tabBarPosition() {
      return Z();
    },
    set tabBarPosition(s = "top") {
      Z(s), Q();
    }
  });
}
sl(["click", "keydown"]);
customElements.define("terminal-session", $l(
  no,
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
  no as default
};
